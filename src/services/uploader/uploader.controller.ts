import { Injectable } from '@nestjs/common';
// Ignore the import errors
// @ts-ignore
import { FileUpload } from 'graphql-upload';
import { RatioEnum } from './enums/ratio.enum';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';
import Excel from 'exceljs';
import { User } from 'src/@generated';
import { v4 as uuidV4 } from 'uuid';
import { Prisma } from '@prisma/client';
import {
  detectMimeTypeFromFilename,
  mapFileTypeEnumFromMIME,
} from 'src/utils/mime-types.function';
import { FileType } from 'src/model/enums';
import { UploaderService } from './uploader.service';
import { GuestController } from '../guest/guest.controller';
import { UserController } from '../user/user.controller';

@Injectable()
export class UploaderController {
  constructor(
    private readonly guestController: GuestController,
    private readonly userController: UserController,
    private readonly uploaderService: UploaderService,
  ) {}

  async uploadSingleFile(file: FileUpload) {
    // Validate user id
    // await this.validateUserId(userId);

    const { filename } = await file;

    // If the file name is null, throw an error
    if (!filename) {
      throw new IGraphQLError({ code: 160003 });
    }

    // Identify the file type based on the file's extension or MIME type
    let fileExt = detectMimeTypeFromFilename(filename);
    let fileType: FileType;

    // If the file has an extension, get the file type from the extension
    if (fileExt) {
      fileExt = `${fileExt.toLowerCase()}`;
      fileType = mapFileTypeEnumFromMIME(fileExt);
    }

    // If the file type is xlsx, parse the file to db
    if (fileType === FileType.XLSX) {
      return await this.parseExcelFileToDb(file);
    }
  }

  async parseExcelFileToDb(file: FileUpload): Promise<Prisma.BatchPayload> {
    const workbook = new Excel.Workbook();
    const stream = await file.createReadStream();

    await workbook.xlsx.read(stream);

    const worksheet = workbook.getWorksheet(1);

    // Define your template for column headers
    const expectedHeaders = [
      'source',
      'invitationName',
      'contactList',
      'whatsapp',
      'category',
      'studio',
      'seat',
      'show time',
    ];

    // Get the actual headers from the Excel file
    const actualHeaders = worksheet.getRow(1).values as Excel.CellValue[];

    // Check if actual headers match the template
    const headersMatch = expectedHeaders.every((expectedHeader, index) => {
      const actualHeader = actualHeaders[index];
      return actualHeader === expectedHeader;
    });

    if (!headersMatch) {
      throw new Error(
        `Template format is incorrect. Please check column headers. Expected format: ${expectedHeaders.join(
          ', ',
        )}\n` + `Uploaded format: ${actualHeaders.join(', ')}`,
      );
    }

    const guestCreateManyInput: Prisma.GuestCreateManyInput[] = [];

    let previousGuest: Prisma.GuestCreateManyInput | undefined;

    worksheet.eachRow((row, rowNumber) => {
      const uuid = uuidV4();
      const excel = {
        source: row.getCell(1).text,
        invitationName: row.getCell(2).text,
        contactList: row.getCell(3).text,
        whatsapp: row.getCell(4).text ? parseInt(row.getCell(4).text) : null,
        category: row.getCell(5).text,
        studio: row.getCell(6).text,
        seat: row.getCell(7).text,
        showTime: row.getCell(8).text,
      };

      if (rowNumber > 1) {
        const guest: Prisma.GuestCreateManyInput = {
          id: uuid,
          invitationName: excel.invitationName,
          whatsapp:
            previousGuest && excel.whatsapp === previousGuest.whatsapp
              ? undefined
              : excel.whatsapp,
          source: excel.source,
          contactList: excel.contactList,
          category: excel.category,
          seat: excel.seat,
          studio: excel.studio,
          showTime: excel.showTime,
          groupMemberOfId:
            previousGuest && excel.whatsapp === previousGuest.whatsapp
              ? previousGuest.id
              : undefined,
          confirmationStatus: null,
          rejectionReason: null,
          createdAt: new Date(),
          updatedAt: new Date(),
          deletedAt: null,
        };

        if (!(previousGuest && excel.whatsapp === previousGuest.whatsapp)) {
          previousGuest = guest;
        }

        guestCreateManyInput.push(guest);
      }
    });

    return await this.guestController.createMany({
      data: guestCreateManyInput,
    });
  }

  private async validateUserId(userId: string) {
    await this.userController
      .findFirst({
        select: { id: true },
        where: { id: { equals: userId } },
        take: 1,
      })
      .catch(() => {
        throw new IGraphQLError({ code: 10004 });
      })
      .then((user: User) => {
        if (!user) throw new IGraphQLError({ code: 10004 });
      });
  }
}

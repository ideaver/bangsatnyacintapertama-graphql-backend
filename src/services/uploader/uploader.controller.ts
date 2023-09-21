import { Injectable } from '@nestjs/common';
// Ignore the import errors
// @ts-ignore
import { FileUpload } from 'graphql-upload';
import { RatioEnum } from './enums/ratio.enum';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';
import Excel from 'exceljs';
import { Guest, User } from 'src/@generated';
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

  async uploadSingleFile(
    file: FileUpload,
    userId: string,
    ratioForImage?: RatioEnum,
  ) {
    // Validate user id
    await this.validateUserId(userId);

    const { filename } = await file;

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

    return await this.uploaderService.uploadSingleLocalFile({
      userId,
      file,
      ratioForImage,
    });
  }

  async parseExcelFileToDb(file: FileUpload): Promise<Prisma.BatchPayload> {
    const workbook = new Excel.Workbook();
    const stream = await file.createReadStream();

    await workbook.xlsx.read(stream);

    const worksheet = workbook.getWorksheet(1);
    const guestCreateManyInput: Prisma.GuestCreateManyInput[] = [];

    worksheet.eachRow((row, rowNumber) => {
      const uuid = uuidV4();
      if (rowNumber > 1) {
        const guest: Guest = {
          id: uuid,
          invitationName: row.getCell(2).text,
          whatsapp: row.getCell(5).text ? parseInt(row.getCell(5).text) : null,
          source: row.getCell(1).text,
          contactList: row.getCell(3).text,
          category: row.getCell(4).text,
          class: row.getCell(9).text,
          seat: row.getCell(8).text,
          studio: row.getCell(7).text ? parseInt(row.getCell(7).text) : null,
          parties: row.getCell(6).text ? parseInt(row.getCell(6).text) : 1,
          confirmationStatus: null,
          rejectionReason: null,
          createdAt: new Date(),
          updatedAt: new Date(),
          deletedAt: null,
        };

        guestCreateManyInput.push(guest);
      }
    });

    return await this.guestController.createMany({
      skipDuplicates: true,
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

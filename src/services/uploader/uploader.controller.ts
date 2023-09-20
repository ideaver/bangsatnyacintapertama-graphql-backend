import { Injectable } from '@nestjs/common';
import { UploaderService } from './uploader.service';
// Ignore the import errors
// @ts-ignore
import { FileUpload } from 'graphql-upload';
import { RatioEnum } from './enums/ratio.enum';
import { UserController } from '../user/user.controller';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';
import Excel from 'exceljs';
import { Guest } from 'src/@generated';

@Injectable()
export class UploaderController {
  constructor(
    private readonly uploaderService: UploaderService,
    private readonly userController: UserController,
  ) {}

  async uploadSingleFile(
    file: FileUpload,
    userId: string,
    ratioForImage?: RatioEnum,
  ) {
    // Validate user id
    await this.validateUserId(userId);

    // Parse the Excel file
    const parsedData: Guest[] = await this.parseExcelFile(file);
  }

  async parseExcelFile(file: FileUpload): Promise<Guest[]> {
    const workbook = new Excel.Workbook();
    const stream = await file.createReadStream();

    await workbook.xlsx.read(stream);

    const worksheet = workbook.getWorksheet(1);
    const data: Guest[] = [];

    worksheet.eachRow((row, rowNumber) => {
      if (rowNumber > 1) {
        // Skip the header row
        const guest: Guest = {
          userId: null,
          source: row.getCell(1).text,
          invitationName: row.getCell(2).text,
          contactList: row.getCell(3).text,
          category: row.getCell(4).text,
          class: row.getCell(5).text,
          seat: row.getCell(6).text,
          studio: row.getCell(7).text ? parseInt(row.getCell(7).text) : null,
          parties: row.getCell(8).text ? parseInt(row.getCell(8).text) : null,
          confirmationStatus: null,
          rejectionReason: null,
        };
        data.push(guest);
      }
    });
    console.log(data);
    return data;
  }

  private async validateUserId(userId: string) {
    if (
      !(await this.userController.findFirst({
        select: { id: true },
        where: { id: { equals: userId } },
        take: 1,
      }))
    ) {
      throw new IGraphQLError({ code: 10004 });
    }
  }
}

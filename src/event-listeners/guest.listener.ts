import { Injectable, Logger } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { GuestEvents } from './enum/guest-event.enum';
import { GuestController } from '../services/guest/guest.controller';
import * as fs from 'fs';
import * as path from 'path';
import * as qrCode from 'qrcode';
import { QrCodeController } from '../services/qr-code/qr-code.controller';
import { Prisma } from '@prisma/client';
import sharp from 'sharp';
import { Guest } from 'src/@generated';
import { InvitationImageController } from '../services/invitation-image/invitation-image.controller';
import { UploaderService } from 'src/services/uploader/uploader.service';
import { FileUploadDto } from 'src/services/uploader/dtos';

@Injectable()
export class GuestListener {
  private readonly logger = new Logger(GuestListener.name);

  constructor(
    private readonly guestController: GuestController,
    private readonly qrCodeController: QrCodeController,
    private readonly invitationImagesController: InvitationImageController,
    private readonly uploaderService: UploaderService,
  ) {}

  @OnEvent(GuestEvents.CreatedMany)
  async onGuestCreatedManyEvent() {
    // Find guests without QR codes
    const guestsWithoutQrCodes = await this.findGuestsWithoutQrCodes();
    const qrCodeCreateManyInputArray: Prisma.QrCodeCreateManyInput[] = [];

    // Process each guest to generate and save a QR code and invitation image
    for (const guest of guestsWithoutQrCodes) {
      // Generate and save QR code
      const qrCodePath = await this.generateAndSaveQrCode(guest.id);

      // Merge QR code with invitation template
      await this.mergeQRCodeWithInvitationTemplate(
        'files/template/template.jpeg',
        qrCodePath,
        'files/invitation',
        guest.id,
        guest.invitationName,
        `STUDIO ${guest.studio} / ${guest.seat}`,
        guest.showTime,
      );

      qrCodeCreateManyInputArray.push({
        guestId: guest.id,
        path: qrCodePath,
      });
    }
    await this.saveQrCodeToDatabase(qrCodeCreateManyInputArray);
    await this.uploadInvitationImageFiles();
  }

  async readInvitationImageFiles(folderPath: string): Promise<string[]> {
    // Use fs.readdir to read all files in the folder
    return new Promise<string[]>((resolve, reject) => {
      fs.readdir(folderPath, (err, files) => {
        if (err) {
          reject(err);
        } else {
          const pngFiles = files.filter(
            (file) => path.extname(file).toLowerCase() === '.png',
          );
          resolve(pngFiles);
        }
      });
    });
  }

  async deleteInvitiationImageAndQrCodeFiles(
    filesToDelete: string[],
  ): Promise<void> {
    try {
      const invitationImagesDeletionPromises = filesToDelete.map((filename) => {
        const filePath = path.join('files/invitation', filename);
        return fs.promises.unlink(filePath);
      });

      const qrImagesDeletionPromises = filesToDelete.map((filename) => {
        const filePath = path.join('files/qrcodes', filename);
        return fs.promises.unlink(filePath);
      });

      await Promise.all([
        invitationImagesDeletionPromises,
        qrImagesDeletionPromises,
      ]);

      this.logger.log('Local Invitation Image & QrCodes Files Deleted.');
    } catch (error) {
      this.logger.error(
        'Error deleting local invitation image & qr codes files:',
        error,
      );
    }
  }

  async uploadInvitationImageFiles(): Promise<void> {
    try {
      const folderPath = 'files/invitation'; // Change this to the path of your folder
      const invitationImageFiles =
        await this.readInvitationImageFiles(folderPath);

      if (invitationImageFiles.length === 0) {
        this.logger.log('No Invitation Image files found in the folder.');
        return;
      } else {
        this.logger.log(
          `Found ${invitationImageFiles.length} Invitation Image files in the folder. Uploading`,
        );
      }

      const fileUploadPromises = invitationImageFiles.map((filename) => {
        const file: FileUploadDto = {
          filename,
          mimetype: 'image/png',
          encoding: 'base64',
          createReadStream: () =>
            fs.createReadStream(path.join(folderPath, filename)),
        };

        return this.uploaderService.uploadSingleFile({ file: file });
      });

      // Use Promise.all to upload all files in parallel
      const uploadResultPaths: any[] = await Promise.all(fileUploadPromises);

      this.logger.log(
        `${fileUploadPromises.length} Invitation Image Files Uploaded to S3.`,
      );

      // Save the file paths to the Prisma database
      const invitationImageCreateManyInputArray: Prisma.InvitationImageCreateManyInput[] =
        [];

      for (const result of uploadResultPaths) {
        // Parse the URL to get the pathname (file path)
        const parsedUrl = new URL(result);
        const pathname = parsedUrl.pathname;

        // Use path.basename to get the filename with extension
        const filenameWithExtension = path.basename(pathname);

        // Use path.parse to split the filename into parts
        const parsedFilename = path.parse(filenameWithExtension);

        // Extract the filename (without extension) from the parsed filename
        const filenameWithoutExtension = parsedFilename.name;

        path.parse(result).name;
        invitationImageCreateManyInputArray.push({
          id: filenameWithoutExtension,
          guestId: filenameWithoutExtension,
          path: result,
        });
      }

      await this.saveInvitationImagesToDatabase(
        invitationImageCreateManyInputArray,
      );

      // Delete the PNG files from the folder
      await this.deleteInvitiationImageAndQrCodeFiles(invitationImageFiles);
    } catch (error) {
      this.logger.error('Error uploading invitation image files:', error);
    }
  }

  // Find guests without QR codes
  private async findGuestsWithoutQrCodes(): Promise<Guest[]> {
    return this.guestController.findMany({
      where: { qrcode: null },
    });
  }

  // Generate and save a QR code for a guest
  private async generateAndSaveQrCode(guestId: string): Promise<string> {
    const qrCodePath = `files/qrcodes/${guestId}.png`;

    // Check if the QR code file already exists
    if (fs.existsSync(qrCodePath)) {
      return qrCodePath; // Return the path to the existing QR code
    }

    const qrCodeUrl = await qrCode.toDataURL(guestId);

    // Create the directory if it doesn't exist
    fs.mkdirSync('files/qrcodes', { recursive: true });

    // Save the QR code as a PNG file
    fs.writeFileSync(qrCodePath, qrCodeUrl.split(',')[1], 'base64');

    return qrCodePath;
  }

  // Save the invitation image path to the database
  private async saveQrCodeToDatabase(
    qrCodeCreateManyInputArray: Prisma.QrCodeCreateManyInput[],
  ) {
    await this.qrCodeController.createMany({
      skipDuplicates: true, // Skip duplicates
      data: qrCodeCreateManyInputArray,
    });
  }

  // Save the invitation image path to the database
  private async saveInvitationImagesToDatabase(
    invitationImageCreateManyInputArray: Prisma.InvitationImageCreateManyInput[],
  ) {
    await this.invitationImagesController.createMany({
      data: invitationImageCreateManyInputArray,
    });
  }

  // Merge QR code with invitation template
  private async mergeQRCodeWithInvitationTemplate(
    templateImagePath: string,
    qrCodeImagePath: string,
    outputFolder: string,
    guestId: string,
    guestNameText: string,
    studioAndSeatText?: string,
    showTimeText?: string,
  ) {
    const mergedImageFileName = `${guestId}.png`;
    const outputPath = path.join(outputFolder, mergedImageFileName);

    // Check if the QR code image exists
    if (!fs.existsSync(qrCodeImagePath)) {
      this.logger.error(`QR Code Image not found: ${qrCodeImagePath}`);
      return; // Return the path to the existing image
    }

    // Check if the output image already exists
    if (fs.existsSync(outputPath)) {
      return outputPath; // Return the path to the existing image
    }

    //else will regenerate
    await fs.promises.mkdir(outputFolder, { recursive: true });

    const guestName = `
    <svg width="600" height="100" xmlns="http://www.w3.org/2000/svg">
  <style>
    .title { fill: #fff; font-size: 24px; font-family: 'Open Sans', sans-serif; font-weight: bold; }
  </style>
  <text x="300" y="80" text-anchor="middle" class="title" transform="rotate(-2, 300, 80)">${guestNameText}</text>
</svg>
    `;

    const guestNameBuffer = Buffer.from(guestName);

    const seatSvg = `
    <svg width="200" height="52" xmlns="http://www.w3.org/2000/svg">
  <!-- Text content -->
  <text x="10" y="20" font-family="Concert One" font-size="12" font-weight="bold" fill="#ED235D">
    STUDIO &amp; SEAT NUMBER
  </text>
  <text x="10" y="40" font-family="Concert One" font-size="20" font-weight="bold" fill="#ED235D">
  ${studioAndSeatText}
  </text>
</svg>
    `;

    const seatBuffer = Buffer.from(seatSvg);

    const showTimeSvg = `
    <svg width="200" height="52" xmlns="http://www.w3.org/2000/svg">
  <!-- Text content -->
  <text x="10" y="20" font-family="Concert One" font-size="12" font-weight="bold" fill="#ED235D">
    SHOWTIME
  </text>
  <text x="10" y="40" font-family="Concert One" font-size="20" font-weight="bold" fill="#ED235D">
  ${showTimeText}
  </text>
</svg>
    `;

    const showTimeBuffer = Buffer.from(showTimeSvg);

    await sharp(templateImagePath)
      .composite([
        {
          input: guestNameBuffer,
          top: 145,
          left: 57,
        },
        {
          input: showTimeBuffer,
          top: 1120,
          left: 200,
        },
        studioAndSeatText
          ? {
              input: seatBuffer,
              top: 1170,
              left: 200,
            }
          : undefined,
        {
          input: qrCodeImagePath,
          left: 32,
          top: 1055,
        },
      ])
      .toFile(outputPath);

    return outputPath;
  }
}

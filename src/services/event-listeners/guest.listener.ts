import { Injectable, Logger } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { GuestEvents } from './enum/guest-event.enum';
import { GuestController } from '../guest/guest.controller';
import * as fs from 'fs';
import * as path from 'path';
import * as qrCode from 'qrcode';
import { QrCodeController } from '../qr-code/qr-code.controller';
import { Prisma } from '@prisma/client';
import { Guest } from 'src/@generated';
import sharp from 'sharp'; // Import sharp

@Injectable()
export class GuestListener {
  constructor(
    private readonly guestController: GuestController,
    private readonly qrCodeController: QrCodeController,
  ) {}

  private readonly logger = new Logger(GuestListener.name);

  @OnEvent(GuestEvents.CreatedMany)
  async onGuestCreatedManyEvent() {
    const guestsWithoutQrCodes = await this.findGuestsWithoutQrCodes();

    this.logger.log(guestsWithoutQrCodes);

    const qrCodeDataToInsert =
      await this.generateAndSaveQrCodes(guestsWithoutQrCodes);

    // Load the template image
    const templateImagePath = 'files/template/template.jpeg';

    // Define the output folder for merged images
    const outputFolder = 'files/invitation';

    // Merge QR codes with the template image and save them
    for (const qrCodeData of qrCodeDataToInsert) {
      try {
        await this.mergeQRCodeWithTemplate(
          templateImagePath,
          qrCodeData.path,
          outputFolder,
          qrCodeData,
          'Adinda arrohmah Mawardah',
        );
      } catch (error) {
        this.logger.error(
          `Error while merging and saving QR code: ${error.message}`,
        );
      }
    }

    await this.insertQrCodes(qrCodeDataToInsert);
  }

  private async findGuestsWithoutQrCodes() {
    return this.guestController.findMany({
      where: { qrcodes: { none: {} } },
    });
  }

  private async generateAndSaveQrCodes(guests: Guest[]) {
    const qrCodeDataToInsert: Prisma.QrCodeCreateManyInput[] = [];

    for (const guest of guests) {
      const qrCodeData = `Guest ID: ${guest.id}`;

      for (let i = 1; i <= guest.parties; i++) {
        const qrCodeUrl = await qrCode.toDataURL(`${qrCodeData} - Party ${i}`);
        const qrCodeFolder = 'files/qrcodes';
        const qrCodeFileName = `${guest.id}_Party${i}.png`;
        const qrCodeFilePath = path.join(qrCodeFolder, qrCodeFileName);

        fs.mkdirSync(qrCodeFolder, { recursive: true });
        fs.writeFileSync(qrCodeFilePath, qrCodeUrl.split(',')[1], 'base64');

        qrCodeDataToInsert.push({
          path: qrCodeFilePath,
          guestId: guest.id,
        });
      }
    }

    return qrCodeDataToInsert;
  }

  private async insertQrCodes(
    qrCodeDataToInsert: Prisma.QrCodeCreateManyInput[],
  ) {
    // Use Prisma's createMany to insert all QR code data at once within a transaction
    await this.qrCodeController.createMany({
      data: qrCodeDataToInsert,
    });
  }

  private async mergeQRCodeWithTemplate(
    templateImagePath: string,
    qrCodeImagePath: string,
    outputFolder: string,
    qrCodeData: Prisma.QrCodeCreateManyInput,
    textOverlay: string, // Add a parameter for text overlay
  ) {
    const mergedImageFileName = `${qrCodeData.guestId}_Party${
      qrCodeData.path.match(/Party(\d+)\.png/)[1]
    }_invitation.png`;
    const outputPath = path.join(outputFolder, mergedImageFileName);

    await fs.promises.mkdir(outputFolder, { recursive: true });

    const titleSvg = `
    <svg width="600" height="100" xmlns="http://www.w3.org/2000/svg">
    <style>
      .title { fill: #fff; font-size: 24px; font-family: 'Open Sans', sans-serif; font-weight: bold; }
    </style>
    <text x="250" y="80" text-anchor="middle" class="title" transform="rotate(-2, 250, 80)">${textOverlay}</text>
  </svg>
    `;

    const titleBuffer = Buffer.from(titleSvg);

    const seatSvg = `
    <svg width="200" height="52" xmlns="http://www.w3.org/2000/svg">
  <!-- Text content -->
  <text x="10" y="20" font-family="Concert One" font-size="12" font-weight="bold" fill="#ED235D">
    STUDIO &amp; SEAT NUMBER
  </text>
  <text x="10" y="40" font-family="Concert One" font-size="20" font-weight="bold" fill="#ED235D">
    STUDIO 1 / A 22
  </text>
</svg>
    `;

    const seatBuffer = Buffer.from(seatSvg);

    await sharp(templateImagePath)
      .composite([
        {
          input: titleBuffer,
          top: 145,
          left: 185,
        },
        {
          input: seatBuffer,
          top: 1170,
          left: 200,
        },
        {
          input: qrCodeImagePath,
          left: 32,
          top: 1055,
        },
      ])
      .toFile(outputPath);
  }
}

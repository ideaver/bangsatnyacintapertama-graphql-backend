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

@Injectable()
export class GuestListener {
  private readonly logger = new Logger(GuestListener.name);

  constructor(
    private readonly guestController: GuestController,
    private readonly qrCodeController: QrCodeController,
    private readonly invitationImagesController: InvitationImageController,
  ) {}

  @OnEvent(GuestEvents.CreatedMany)
  async onGuestCreatedManyEvent() {
    try {
      // Find guests without QR codes
      const guestsWithoutQrCodes = await this.findGuestsWithoutQrCodes();

      // Generate and save QR codes
      const qrCodeDataToInsert =
        await this.generateAndSaveQrCodesToFolder(guestsWithoutQrCodes);

      // Define template and output folder paths
      const templateImagePath = 'files/template/template.jpeg';
      const outputFolder = 'files/invitation';

      let invitationImagesCreateManyData: Prisma.InvitationImageCreateManyInput[] =
        [];

      // Process each QR code data
      for (const qrCodeData of qrCodeDataToInsert) {
        // Find the guest in the array
        const guest = guestsWithoutQrCodes.find(
          (guest) => guest.id === qrCodeData.guestId,
        );

        // If guest not found, continue to the next QR code
        if (!guest) continue;

        // Merge QR code with invitation template
        await this.mergeQRCodeWithInvitationTemplate(
          templateImagePath,
          qrCodeData.path,
          outputFolder,
          qrCodeData,
          guest.invitationName, // Use guest's invitationName
          `STUDIO ${guest.studio} / ${guest.seat}`, // Use guest's studio and seat
          guest.showTime, // Use guest's showTime
        );

        const mergedImageFileName = `${qrCodeData.guestId}_Party${
          qrCodeData.path.match(/Party(\d+)\.png/)[1]
        }_invitation.png`;
        const outputPath = path.join(outputFolder, mergedImageFileName);

        // Save the merged invitation image path to the database
        invitationImagesCreateManyData.push({
          path: outputPath,
          guestId: qrCodeData.guestId,
        });
      }

      // Insert InvitationImages into the database
      await this.invitationImagesController.createMany({
        data: invitationImagesCreateManyData,
      });

      // Insert QR codes into the database
      await this.insertQrCodes(qrCodeDataToInsert);
    } catch (error) {
      this.logger.error(`Error in onGuestCreatedManyEvent: ${error.message}`);
    }
  }

  // Find guests without QR codes
  private async findGuestsWithoutQrCodes() {
    return this.guestController.findMany({
      where: { qrcodes: { none: {} } },
    });
  }

  // Generate and save QR codes
  private async generateAndSaveQrCodesToFolder(guests: Guest[]) {
    const qrCodeDataToInsert: Prisma.QrCodeCreateManyInput[] = [];

    for (const guest of guests) {
      const qrCodeData = guest.id;

      for (let i = 1; i <= guest.parties; i++) {
        const qrCodeUrl = await qrCode.toDataURL(qrCodeData);
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

  // Insert QR codes into the database
  private async insertQrCodes(
    qrCodeDataToInsert: Prisma.QrCodeCreateManyInput[],
  ) {
    await this.qrCodeController.createMany({
      data: qrCodeDataToInsert,
    });
  }

  // Merge QR code with invitation template
  private async mergeQRCodeWithInvitationTemplate(
    templateImagePath: string,
    qrCodeImagePath: string,
    outputFolder: string,
    qrCodeData: Prisma.QrCodeCreateManyInput,
    guestNameText: string,
    studioAndSeatText?: string,
    showTimeText?: string,
  ) {
    const mergedImageFileName = `${qrCodeData.guestId}_Party${
      qrCodeData.path.match(/Party(\d+)\.png/)[1]
    }_invitation.png`;
    const outputPath = path.join(outputFolder, mergedImageFileName);

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
  }

  // // Truncate or pad guestNameText to a maximum of 9 characters with spacing
  // private limitGuestName(guestNameText: string): string {
  //   const maxLength = 12;
  //   if (guestNameText.length > maxLength) {
  //     // Truncate if longer than maxLength
  //     guestNameText = guestNameText.slice(0, maxLength);
  //   } else {
  //     // Pad with spaces if shorter than maxLength
  //     guestNameText = guestNameText.padEnd(maxLength, ' ');
  //   }
  //   return guestNameText;
  // }
}

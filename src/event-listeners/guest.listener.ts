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
    // Find guests without QR codes
    const guestsWithoutQrCodes = await this.findGuestsWithoutQrCodes();
    const qrCodeCreateManyInputArray: Prisma.QrCodeCreateManyInput[] = [];
    const invitationImageCreateManyInputArray: Prisma.InvitationImageCreateManyInput[] =
      [];

    // Process each guest to generate and save a QR code and invitation image
    for (const guest of guestsWithoutQrCodes) {
      // Generate and save QR code
      const qrCodePath = await this.generateAndSaveQrCode(guest.id);

      // Merge QR code with invitation template
      const invitationImagePath = await this.mergeQRCodeWithInvitationTemplate(
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

      invitationImageCreateManyInputArray.push({
        guestId: guest.id,
        path: invitationImagePath,
      });
    }

    await this.saveQrCodeToDatabase(qrCodeCreateManyInputArray);
    await this.saveInvitationImagesToDatabase(
      invitationImageCreateManyInputArray,
    );
  }

  // Find guests without QR codes
  private async findGuestsWithoutQrCodes(): Promise<Guest[]> {
    return this.guestController.findMany({
      where: { qrcode: null },
    });
  }

  // Generate and save a QR code for a guest
  private async generateAndSaveQrCode(guestId: string): Promise<string> {
    const qrCodeUrl = await qrCode.toDataURL(guestId);
    const qrCodePath = `files/qrcodes/${guestId}_QRCode.png`;
    fs.mkdirSync('files/qrcodes', { recursive: true });
    fs.writeFileSync(qrCodePath, qrCodeUrl.split(',')[1], 'base64');
    return qrCodePath;
  }

  // Save the invitation image path to the database
  private async saveQrCodeToDatabase(
    qrCodeCreateManyInputArray: Prisma.QrCodeCreateManyInput[],
  ) {
    await this.qrCodeController.createMany({
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
    const mergedImageFileName = `${guestId}_invitation.png`;
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

    return outputPath;
  }
}

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
}

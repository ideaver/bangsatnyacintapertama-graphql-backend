import { Controller, Logger, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { ConfirmationStatus, QueueStatus } from '@prisma/client';
import { WhatsappStatusController } from '../whatsapp-status/whatsapp-status.controller';
import { GuestController } from '../guest/guest.controller';
import { WhatsappGatewayController } from '../whatsapp-gateway/whatsapp-gateway.controller';
import { WaMessage } from 'src/model/message.model';
import { v4 as uuidV4 } from 'uuid';

enum IncomingWhatsAppStatus {
  Sent = 'sent',
  Read = 'read',
  Cancel = 'cancel',
  Received = 'received',
  Reject = 'reject',
  // Pending = 'pending',
}

@Controller('tracking')
export class WebhookController {
  private readonly logger = new Logger(WebhookController.name);

  constructor(
    private readonly whatsappStatusController: WhatsappStatusController,
    private readonly guestController: GuestController,
    private readonly whatsappGatewayController: WhatsappGatewayController,
  ) {}

  @Post()
  async trackWhatsAppStatusMessage(@Req() request: Request): Promise<void> {
    const { id, status, phone, note, deviceId } = request.body;

    const parsedPhone = parseFloat(phone);

    this.logger.log(`
    Received WhatsApp Message Status Update: 
    ID: ${id},
    Status: ${status},
    Phone: ${parsedPhone},
    Note: ${note},
    Device ID: ${deviceId}
    `);

    const receivedStatus: QueueStatus =
      IncomingWhatsAppStatus[status] || QueueStatus.QUEUE;

    await this.findGuestIdByPhone(parsedPhone)
      .then(async (guestId) => {
        if (guestId) {
          await this.whatsappStatusController.createOne({
            data: {
              refId: id,
              guest: {
                connect: { id: guestId, whatsapp: { equals: parsedPhone } },
              },
              status: receivedStatus,
            },
          });
        }
      })
      .catch(() => {
        this.logger.error(
          'findGuestIdByPhone Error, status not created to the database',
        );
      });
  }

  @Post('incoming')
  async receiveIncomingWhatsAppMessage(@Req() request: Request): Promise<void> {
    const {
      id,
      pushName,
      isGroup,
      group,
      message,
      phone,
      messageType,
      file,
      mimeType,
      deviceId,
      sender,
      timestamp,
    } = request.body;

    const parsedPhone = parseFloat(phone);

    this.logger.log(`
    Received WhatsApp Incoming Message:
    ID: ${id}
    Push Name: ${pushName}
    Is Group: ${isGroup}
    Group: ${group}
    Message: ${message}
    Phone: ${parsedPhone}
    Message Type: ${messageType}
    File: ${file}
    MIME Type: ${mimeType}
    Device ID: ${deviceId}
    Sender: ${sender}
    Timestamp: ${timestamp}
    `);

    const containsTargetWord = this.doesStringContainTargetWord(message);
    const confirmationStatus = containsTargetWord
      ? ConfirmationStatus.REJECTED
      : ConfirmationStatus.CONFIRMED;

    await this.findGuestIdByPhone(parsedPhone)
      .then(async (guestId) => {
        if (guestId) {
          await this.updateGuestConfirmationStatus(guestId, confirmationStatus);
        } else {
          this.logger.error(
            'Guest not found, confirmation status not saved to the database',
          );
        }
      })
      .catch(() => {
        this.logger.error(
          'findGuestIdByPhone Error, confirmation status not saved to the database',
        );
      });
  }

  private async findGuestIdByPhone(phone: number): Promise<string | null> {
    const guest = await this.guestController.findFirst({
      take: 1,
      where: { whatsapp: { equals: phone } },
      select: { id: true },
    });

    return guest?.id || null;
  }

  private doesStringContainTargetWord(inputString: string): boolean {
    const targetWords: string[] = [
      'tidak',
      'maaf',
      '2',
      'ga',
      'skip',
      'lain kali',
    ];

    return targetWords.some((word) => inputString.includes(word));
  }

  private async updateGuestConfirmationStatus(
    guestId: string,
    confirmationStatus: ConfirmationStatus,
  ): Promise<void> {
    const guestPhone = await this.guestController.updateOne({
      where: { id: guestId },
      data: { confirmationStatus: { set: confirmationStatus } },
    });

    const message =
      confirmationStatus === ConfirmationStatus.CONFIRMED
        ? `Terima kasih atas Jawabannya
    Sistem kami telah mencatat bahwa anda akan hadir dan kami akan menghubungi lebih lanjut apabila dibutuhkan`
        : `Terima kasih atas Jawabannya
        Sistem kami telah mencatat bahwa anda tidak hadir`;

    const messages: WaMessage[] = [
      { phone: guestPhone.whatsapp, message: message, refId: uuidV4() },
    ];

    await this.whatsappGatewayController
      .sendWhatsappMessages(messages)
      .then(() => {
        this.logger.log(`Confirmation Status Updated to ${confirmationStatus}`);
      })
      .catch(() => {
        this.logger.error(`sendWhatsappMessages Error`);
      });
  }
}

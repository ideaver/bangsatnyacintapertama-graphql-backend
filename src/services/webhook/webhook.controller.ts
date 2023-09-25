import { Controller, Logger, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { ConfirmationStatus, QueueStatus } from '@prisma/client';
import { WhatsappStatusController } from '../whatsapp-status/whatsapp-status.controller';
import { GuestController } from '../guest/guest.controller';

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
  ) {}

  @Post()
  async trackWhatsAppStatusMessage(@Req() request: Request): Promise<void> {
    const { id, status, phone, note, deviceId } = request.body;

    this.logger.log(`
    Received WhatsApp Message Status Update: 
    ID: ${id},
    Status: ${status},
    Phone: ${phone},
    Note: ${note},
    Device ID: ${deviceId}
    `);

    const receivedStatus: QueueStatus =
      IncomingWhatsAppStatus[status] || QueueStatus.QUEUE;

    try {
      const guestIdByPhone = await this.findGuestIdByPhone(phone);

      if (guestIdByPhone) {
        await this.whatsappStatusController.createOne({
          data: {
            refId: id,
            guest: {
              connect: { id: guestIdByPhone, whatsapp: { equals: phone } },
            },
            status: receivedStatus,
          },
        });
      } else {
        this.logger.log('Guest not found, status not saved to the database');
      }
    } catch (error) {
      this.logger.error(
        `Error processing WhatsApp status update: ${error.message}`,
      );
    }
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

    this.logger.log(`
    Received WhatsApp Incoming Message:
    ID: ${id}
    Push Name: ${pushName}
    Is Group: ${isGroup}
    Group: ${group}
    Message: ${message}
    Phone: ${phone}
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

    try {
      const guestIdByPhone = await this.findGuestIdByPhone(phone);

      if (guestIdByPhone) {
        await this.updateGuestConfirmationStatus(
          guestIdByPhone,
          confirmationStatus,
        );
      } else {
        this.logger.log(
          'Guest not found, confirmation status not updated to the database',
        );
      }
    } catch (error) {
      this.logger.error(
        `Error processing WhatsApp incoming message: ${error.message}`,
      );
    }
  }

  private async findGuestIdByPhone(phone: number): Promise<string | undefined> {
    const guest = await this.guestController.findFirst({
      take: 1,
      where: { whatsapp: { equals: phone } },
      select: { id: true },
    });

    return guest?.id || undefined;
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
    await this.guestController.updateOne({
      where: { id: guestId },
      data: { confirmationStatus: { set: confirmationStatus } },
    });
  }
}

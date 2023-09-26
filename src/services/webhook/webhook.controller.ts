import { Controller, Logger, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { ConfirmationStatus, QueueStatus } from '@prisma/client';
import { WhatsappStatusController } from '../whatsapp-status/whatsapp-status.controller';
import { GuestController } from '../guest/guest.controller';
import { WhatsappGatewayController } from '../whatsapp-gateway/whatsapp-gateway.controller';
import { WaMessage } from 'src/model/message.model';
import { v4 as uuidV4 } from 'uuid';

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

    let receivedStatus: QueueStatus;

    if (status.includes('sent')) {
      receivedStatus = QueueStatus.SENT;
    } else if (status.includes('read')) {
      receivedStatus = QueueStatus.READ;
    } else if (status.includes('cancel')) {
      receivedStatus = QueueStatus.ABORT;
    } else if (status.includes('received')) {
      receivedStatus = QueueStatus.DELIVERED;
    } else if (status.includes('reject')) {
      receivedStatus = QueueStatus.FAILED;
    } else if (status.includes('pending')) {
      receivedStatus = QueueStatus.QUEUE;
    } else {
      receivedStatus = QueueStatus.SENT; // Default to QUEUE if the status is unknown
    }

    await this.whatsappStatusController
      .findFirst({
        orderBy: { createdAt: 'desc' },
        take: 1,
        where: { messageId: id },
        include: { guest: true },
      })
      .then(async (whatsappStatus) => {
        const guest = whatsappStatus.guest;

        if (guest) {
          //create status
          await this.whatsappStatusController
            .createOne({
              data: {
                refId: id,
                messageId: id,
                guest: {
                  connect: { id: guest.id },
                },
                status: receivedStatus,
              },
            })
            .catch(() => {
              this.logger.error(
                `trackWhatsAppStatusMessage: createOne: Error,${parsedPhone} ${status} status not created to the database`,
              );
            });
        }
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

    const containsTargetWord = this.doesStringContainTargetWord(message);
    const confirmationStatus = containsTargetWord
      ? ConfirmationStatus.REJECTED
      : ConfirmationStatus.CONFIRMED;

    await this.findGuestIdByPhone(parsedPhone).then(async (guestId) => {
      if (guestId) {
        await this.updateGuestConfirmationStatus(
          guestId,
          confirmationStatus,
        ).catch(() => {
          this.logger.error(
            `receiveIncomingWhatsAppMessage: createOne: Error, ${parsedPhone} ${confirmationStatus} confirmation status not saved to the database`,
          );
        });
      }
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
    //update guest confirmation status in database
    const guestPhone = await this.guestController.updateOne({
      where: { id: guestId },
      data: { confirmationStatus: { set: confirmationStatus } },
    });

    //update all guest in the same group confirmation status in database
    await this.guestController.updateMany({
      data: { confirmationStatus: { set: confirmationStatus } },
      where: { groupMemberOf: { id: { equals: guestPhone.id } } },
    });

    const message =
      confirmationStatus === ConfirmationStatus.CONFIRMED
        ? `Terima kasih atas Jawabannya
    Sistem kami telah mencatat bahwa anda akan hadir dan kami akan menghubungi lebih lanjut apabila dibutuhkan
    
    Salam,
Dogma Pictures Team`
        : `Terima kasih atas Jawabannya
        Sistem kami telah mencatat bahwa anda tidak hadir
        
        Salam,
Dogma Pictures Team`;

    const messages: WaMessage[] = [
      { phone: guestPhone.whatsapp, message: message, refId: uuidV4() },
    ];

    //send confirmation message to guest
    await this.whatsappGatewayController
      .sendWhatsappMessages(messages)
      .then(() => {
        this.logger.log(
          `${guestPhone.whatsapp} Confirmation Status Updated to ${confirmationStatus}`,
        );
      })
      .catch(() => {
        this.logger.error(`sendWhatsappMessages Error`);
      });
  }
}

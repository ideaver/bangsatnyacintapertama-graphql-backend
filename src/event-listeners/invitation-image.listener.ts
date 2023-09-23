import { Injectable, Logger } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { GuestController } from '../services/guest/guest.controller';
import { Prisma, QueueStatus } from '@prisma/client';
import { Guest } from 'src/@generated';
import { WhatsappQueueController } from 'src/services/whatsapp-queue/whatsapp-queue.controller';
import { InvitationImageEvent } from './enum/invitation-image-event.enum ';

@Injectable()
export class InvitationImageListener {
  private readonly logger = new Logger(InvitationImageListener.name);

  constructor(
    private readonly whatsappQueueController: WhatsappQueueController,
    private readonly guestController: GuestController,
  ) {}

  @OnEvent(InvitationImageEvent.CreatedMany)
  async onInvitationImageCreatedManyEvent() {
    try {
      // Find guests without QR codes
      const guestsWithoutWhatsappQueues =
        await this.findGuestsWithoutWhatsappQueue();

      // Find guests without QR codes
      const whatsappQueueCreateManyInputArray: Prisma.WhatsappQueueCreateManyInput[] =
        [];

      // Process each guest to have whatsapp queues
      for (const guest of guestsWithoutWhatsappQueues) {
        whatsappQueueCreateManyInputArray.push({
          guestId: guest.id,
          status: QueueStatus.QUEUE,
        });
      }

      // Create whatsapp queues in database
      await this.whatsappQueueController.createMany({
        data: whatsappQueueCreateManyInputArray,
      });
    } catch (error) {
      this.logger.error(error);
    }
  }

  // Find guests without QR codes
  private async findGuestsWithoutWhatsappQueue(): Promise<Guest[]> {
    return this.guestController.findMany({
      where: { whatsappQueue: { none: {} } },
    });
  }
}

import { Injectable, Logger } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { GuestEvents } from './enum/guest-event.enum';
import { GuestController } from '../services/guest/guest.controller';
import { Prisma, QueueStatus } from '@prisma/client';
import { Guest } from 'src/@generated';
import { WhatsappQueueController } from 'src/services/whatsapp-queue/whatsapp-queue.controller';

@Injectable()
export class WhatsappQueueListener {
  private readonly logger = new Logger(WhatsappQueueListener.name);

  constructor(
    private readonly whatsappQueueController: WhatsappQueueController,
    private readonly guestController: GuestController,
  ) {}

  @OnEvent(GuestEvents.CreatedMany)
  async onWhatsappQueueCreatedManyEvent() {
    try {
      const guestsWithoutWhatsappQueues =
        await this.findGuestsWithoutWhatsappQueue();

      const whatsappQueueCreateManyInputArray: Prisma.WhatsappQueueCreateManyInput[] =
        [];

      // Process each guest to have whatsapp queues
      for (const guest of guestsWithoutWhatsappQueues) {
        whatsappQueueCreateManyInputArray.push({
          guestId: guest.id,
          status: QueueStatus.QUEUE,
        });
      }

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

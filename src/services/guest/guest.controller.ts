import { Injectable } from '@nestjs/common';
import { Prisma, QueueStatus } from '@prisma/client';
import { GuestService } from './guest.service';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { GuestEvents } from '../../event-listeners/enum/guest-event.enum';

@Injectable()
export class GuestController {
  constructor(
    private readonly guestService: GuestService,
    private eventEmitter: EventEmitter2,
  ) {}

  async createOne(guestCreateArgs: Prisma.GuestCreateArgs) {
    return await this.guestService.createOne(guestCreateArgs);
  }

  async createMany(guestCreateManyArgs: Prisma.GuestCreateManyArgs) {
    // First, call the service method to create guests in the database
    const createdGuests =
      await this.guestService.createMany(guestCreateManyArgs);

    // Then, emit the event after the database operation is complete
    this.eventEmitter.emit(GuestEvents.CreatedMany);

    // Return the created guests if needed
    return createdGuests;
  }

  async findOne(guestFindUniqueArgs: Prisma.GuestFindUniqueArgs) {
    return await this.guestService.findOne(guestFindUniqueArgs);
  }

  async findMany(guestFindManyArgs: Prisma.GuestFindManyArgs) {
    return await this.guestService.findMany(guestFindManyArgs);
  }

  async findFirst(guestFindFirstArgs: Prisma.GuestFindFirstArgs) {
    return await this.guestService.findFirst(guestFindFirstArgs);
  }

  async updateOne(guestUpdateOneArgs: Prisma.GuestUpdateArgs) {
    return await this.guestService.updateOne(guestUpdateOneArgs);
  }

  async updateMany(guestUpdateManyArgs: Prisma.GuestUpdateManyArgs) {
    return await this.guestService.updateMany(guestUpdateManyArgs);
  }

  async delete(guestDeleteArgs: Prisma.GuestDeleteArgs) {
    return await this.guestService.delete(guestDeleteArgs);
  }

  async deleteMany(guestDeleteManyArgs: Prisma.GuestDeleteManyArgs) {
    return await this.guestService.deleteMany(guestDeleteManyArgs);
  }

  async aggregate(guestAggregateArgs: Prisma.GuestAggregateArgs) {
    return await this.guestService.aggregate(guestAggregateArgs);
  }

  async count(guestCountArgs: Prisma.GuestCountArgs) {
    return await this.guestService.count(guestCountArgs);
  }

  async findManyWhereLatestEmailOrWhatsappStatusEqualsWaiting() {
    // First, find users with pending email queue status
    const guestsWithPendingEmailQueue = await this.findMany({
      where: {
        deletedAt: { not: { equals: null } },
        emailQueue: {
          some: {
            status: QueueStatus.QUEUE,
          },
        },
      },
      include: {
        emailQueue: {
          orderBy: {
            createdAt: 'desc',
          },
          take: 1,
          where: {
            status: QueueStatus.QUEUE,
          },
        },
      },
    });

    // Then, find users with pending WhatsApp queue status
    const guestsWithPendingWhatsappQueue = await this.findMany({
      where: {
        deletedAt: { not: { equals: null } },
        whatsappQueue: {
          some: {
            status: QueueStatus.QUEUE,
          },
        },
      },
      include: {
        whatsappQueue: {
          orderBy: {
            createdAt: 'desc',
          },
          take: 1,
          where: {
            status: QueueStatus.QUEUE,
          },
        },
      },
    });

    // Now, combine the results from both queries
    return guestsWithPendingEmailQueue.concat(guestsWithPendingWhatsappQueue);

    // The `combinedResults` array contains users with the latest pending queue status.
  }
}

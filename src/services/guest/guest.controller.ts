import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { GuestService } from './guest.service';

@Injectable()
export class GuestController {
  constructor(private readonly guestService: GuestService) {}

  async createOne(guestCreateArgs: Prisma.GuestCreateArgs) {
    return await this.guestService.createOne(guestCreateArgs);
  }

  async createMany(guestCreateManyArgs: Prisma.GuestCreateManyArgs) {
    return await this.guestService.createMany(guestCreateManyArgs);
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
            status: 'WAITING',
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
            status: 'WAITING',
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
            status: 'WAITING',
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
            status: 'WAITING',
          },
        },
      },
    });

    // Now, combine the results from both queries
    return guestsWithPendingEmailQueue.concat(guestsWithPendingWhatsappQueue);

    // The `combinedResults` array contains users with the latest pending queue status.
  }
}

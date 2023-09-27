import { Injectable, Logger } from '@nestjs/common';
import { Prisma, QueueStatus } from '@prisma/client';
import { GuestService } from './guest.service';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { GuestEvents } from '../../event-listeners/enum/guest-event.enum';
import { WhatsappStatusController } from '../whatsapp-status/whatsapp-status.controller';
import { Guest } from 'src/@generated';

@Injectable()
export class GuestController {
  private readonly logger = new Logger(GuestController.name);
  constructor(
    private readonly guestService: GuestService,
    private eventEmitter: EventEmitter2,
    private readonly whatsappStatusController: WhatsappStatusController,
  ) {}

  async createOne(guestCreateArgs: Prisma.GuestCreateArgs) {
    const createdGuest = await this.guestService.createOne(guestCreateArgs);
    // Then, emit the event after the database operation is complete
    this.eventEmitter.emit(GuestEvents.CreatedOne);
    return createdGuest;
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
    //TODO: Jika whatsapp diupdate maka hapus whatsapp status yang lama
    //TODO: Jika seat,studio,show diganti maka harus regenerate qr code dan invitation code

    //Delete invitation image and qrcode
    guestUpdateOneArgs.data.invitationImage = null;
    guestUpdateOneArgs.data.qrcode = null;

    const res = await this.guestService.updateOne(guestUpdateOneArgs);

    this.logger.log('guest data updated. regenerate invitation image');
    this.eventEmitter.emit(GuestEvents.UpdatedOne);

    return res;

    // const getCurrentGuestInfo: Guest = await this.findOne({
    //   where: { id: guestUpdateOneArgs.where.id },
    //   include: { whatsappStatuses: true, groupMemberOf: true },
    // });

    // if (getCurrentGuestInfo) {
    //   return this.createOne({
    //     select: guestUpdateOneArgs.select,
    //     data: {
    //       invitationName: getCurrentGuestInfo.invitationName,
    //       source: getCurrentGuestInfo.source,
    //       confirmationStatus: getCurrentGuestInfo.confirmationStatus,
    //       whatsapp: getCurrentGuestInfo.whatsapp,
    //       showTime: getCurrentGuestInfo.showTime,
    //       seat: getCurrentGuestInfo.seat,
    //       studio: getCurrentGuestInfo.studio,
    //       contactList: getCurrentGuestInfo.contactList,
    //       category: getCurrentGuestInfo.category,
    //       createdAt: getCurrentGuestInfo.createdAt,
    //       updatedAt: new Date(),
    //       whatsappStatuses: {
    //         createMany: { data: getCurrentGuestInfo.whatsappStatuses },
    //       },
    //       groupMemberOf: {
    //         connect: { id: getCurrentGuestInfo.groupMemberOf.id },
    //       },
    //     },
    //   });
    // }
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

  async findManyWhereLatestWhatsappStatusIsQueue() {
    // Then, find users with pending WhatsApp queue status
    const allGuests = await this.guestService.findMany({});

    for (const guest of allGuests) {
      const latestWhatsappStatus = await this.getLatestWhatsappStatus(guest);

      if (!latestWhatsappStatus) {
        continue;
      }

      if (latestWhatsappStatus.status !== QueueStatus.QUEUE) {
        continue;
      }

      return guest;
    }
  }

  async getLatestWhatsappStatus(guest: Guest) {
    const whatsappStatus = await this.whatsappStatusController.findFirst({
      take: 1,
      orderBy: [
        {
          createdAt: 'desc',
        },
      ],
      where: {
        guest: {
          is: {
            id: {
              equals: guest.id,
            },
          },
        },
        status: {
          equals: QueueStatus.QUEUE,
        },
      },
    });
    return whatsappStatus;
  }
}

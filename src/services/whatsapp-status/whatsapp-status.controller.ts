import { Injectable, Logger } from '@nestjs/common';
import { ConfirmationStatus, Prisma, QueueStatus } from '@prisma/client';
import { WhatsappStatusService } from './whatsapp-status.service';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { GuestController } from '../guest/guest.controller';

@Injectable()
export class WhatsappStatusController {
  private readonly logger = new Logger(WhatsappStatusController.name);
  constructor(
    private readonly whatsappStatusService: WhatsappStatusService,
    private readonly guestController: GuestController,
    private eventEmitter: EventEmitter2,
  ) {}

  async createOne(whatsappStatusCreateArgs: Prisma.WhatsappStatusCreateArgs) {
    // const guest = whatsappStatusCreateArgs?.data.guest;
    // const status = whatsappStatusCreateArgs?.data?.status;
    // //if status is read, update confirmation status
    // if (status === QueueStatus.DELIVERED) {
    //   const checkExistingConfirmationStatus = await this.guestController.findOne({
    //     where: { id: guest.connect.id },
    //     select: { confirmationStatus: true },
    //   });

    //   if(checkExistingConfirmationStatus.confirmationStatus === ConfirmationStatus.PENDING){
    //     await this.guestController.updateOne({
    //       where: { id: guest.connect.id },
    //       data: { confirmationStatus: ConfirmationStatus.DELIVERED },
    //     });
    //   }
    // }
    return await this.whatsappStatusService.createOne(whatsappStatusCreateArgs);
  }

  async createMany(
    whatsappStatusCreateManyArgs: Prisma.WhatsappStatusCreateManyArgs,
  ) {
    const res = await this.whatsappStatusService.createMany(
      whatsappStatusCreateManyArgs,
    );

    return res;
  }

  async findOne(
    whatsappStatusFindUniqueArgs: Prisma.WhatsappStatusFindUniqueArgs,
  ) {
    return await this.whatsappStatusService.findOne(
      whatsappStatusFindUniqueArgs,
    );
  }

  async findMany(
    whatsappStatusFindManyArgs: Prisma.WhatsappStatusFindManyArgs,
  ) {
    return await this.whatsappStatusService.findMany(
      whatsappStatusFindManyArgs,
    );
  }

  async findFirst(
    whatsappStatusFindFirstArgs: Prisma.WhatsappStatusFindFirstArgs,
  ) {
    return await this.whatsappStatusService.findFirst(
      whatsappStatusFindFirstArgs,
    );
  }

  async updateOne(
    whatsappStatusUpdateOneArgs: Prisma.WhatsappStatusUpdateArgs,
  ) {
    return await this.whatsappStatusService.updateOne(
      whatsappStatusUpdateOneArgs,
    );
  }

  async updateMany(
    whatsappStatusUpdateManyArgs: Prisma.WhatsappStatusUpdateManyArgs,
  ) {
    return await this.whatsappStatusService.updateMany(
      whatsappStatusUpdateManyArgs,
    );
  }

  async delete(whatsappStatusDeleteArgs: Prisma.WhatsappStatusDeleteArgs) {
    return await this.whatsappStatusService.delete(whatsappStatusDeleteArgs);
  }

  async deleteMany(
    whatsappStatusDeleteManyArgs: Prisma.WhatsappStatusDeleteManyArgs,
  ) {
    return await this.whatsappStatusService.deleteMany(
      whatsappStatusDeleteManyArgs,
    );
  }

  async aggregate(
    whatsappStatusAggregateArgs: Prisma.WhatsappStatusAggregateArgs,
  ) {
    return await this.whatsappStatusService.aggregate(
      whatsappStatusAggregateArgs,
    );
  }

  async count(whatsappStatusCountArgs: Prisma.WhatsappStatusCountArgs) {
    return await this.whatsappStatusService.count(whatsappStatusCountArgs);
  }
}

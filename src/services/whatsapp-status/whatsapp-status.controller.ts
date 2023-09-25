import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { WhatsappStatusService } from './whatsapp-status.service';
import { WhatsappStatusEvent } from 'src/event-listeners/enum/whatsapp-status-event.enum ';
import { EventEmitter2 } from '@nestjs/event-emitter';

@Injectable()
export class WhatsappStatusController {
  constructor(
    private readonly whatsappStatusService: WhatsappStatusService,
    private eventEmitter: EventEmitter2,
  ) {}

  async createOne(whatsappStatusCreateArgs: Prisma.WhatsappStatusCreateArgs) {
    return await this.whatsappStatusService.createOne(whatsappStatusCreateArgs);
  }

  async createMany(
    whatsappStatusCreateManyArgs: Prisma.WhatsappStatusCreateManyArgs,
  ) {
    const res = await this.whatsappStatusService.createMany(
      whatsappStatusCreateManyArgs,
    );

    this.eventEmitter.emit(WhatsappStatusEvent.CreatedMany);

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

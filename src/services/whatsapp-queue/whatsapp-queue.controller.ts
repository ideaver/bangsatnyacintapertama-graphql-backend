import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { WhatsappQueueService } from './whatsapp-queue.service';
import { WhatsappGatewayController } from '../whatsapp-gateway/whatsapp-gateway.controller';
import { WhatsappQueueEvent } from 'src/event-listeners/enum/whatsapp-queue-event.enum ';
import { EventEmitter2 } from '@nestjs/event-emitter';

@Injectable()
export class WhatsappQueueController {
  constructor(
    private readonly whatsappQueueService: WhatsappQueueService,
    private eventEmitter: EventEmitter2,
  ) {}

  async createOne(whatsappQueueCreateArgs: Prisma.WhatsappQueueCreateArgs) {
    return await this.whatsappQueueService.createOne(whatsappQueueCreateArgs);
  }

  async createMany(
    whatsappQueueCreateManyArgs: Prisma.WhatsappQueueCreateManyArgs,
  ) {
    const res = await this.whatsappQueueService.createMany(
      whatsappQueueCreateManyArgs,
    );

    this.eventEmitter.emit(WhatsappQueueEvent.CreatedMany);

    return res;
  }

  async findOne(
    whatsappQueueFindUniqueArgs: Prisma.WhatsappQueueFindUniqueArgs,
  ) {
    return await this.whatsappQueueService.findOne(whatsappQueueFindUniqueArgs);
  }

  async findMany(whatsappQueueFindManyArgs: Prisma.WhatsappQueueFindManyArgs) {
    return await this.whatsappQueueService.findMany(whatsappQueueFindManyArgs);
  }

  async findFirst(
    whatsappQueueFindFirstArgs: Prisma.WhatsappQueueFindFirstArgs,
  ) {
    return await this.whatsappQueueService.findFirst(
      whatsappQueueFindFirstArgs,
    );
  }

  async updateOne(whatsappQueueUpdateOneArgs: Prisma.WhatsappQueueUpdateArgs) {
    return await this.whatsappQueueService.updateOne(
      whatsappQueueUpdateOneArgs,
    );
  }

  async updateMany(
    whatsappQueueUpdateManyArgs: Prisma.WhatsappQueueUpdateManyArgs,
  ) {
    return await this.whatsappQueueService.updateMany(
      whatsappQueueUpdateManyArgs,
    );
  }

  async delete(whatsappQueueDeleteArgs: Prisma.WhatsappQueueDeleteArgs) {
    return await this.whatsappQueueService.delete(whatsappQueueDeleteArgs);
  }

  async deleteMany(
    whatsappQueueDeleteManyArgs: Prisma.WhatsappQueueDeleteManyArgs,
  ) {
    return await this.whatsappQueueService.deleteMany(
      whatsappQueueDeleteManyArgs,
    );
  }

  async aggregate(
    whatsappQueueAggregateArgs: Prisma.WhatsappQueueAggregateArgs,
  ) {
    return await this.whatsappQueueService.aggregate(
      whatsappQueueAggregateArgs,
    );
  }

  async count(whatsappQueueCountArgs: Prisma.WhatsappQueueCountArgs) {
    return await this.whatsappQueueService.count(whatsappQueueCountArgs);
  }
}

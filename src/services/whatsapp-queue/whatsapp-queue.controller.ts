import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { WhatsappQueueService } from './whatsapp-queue.service';

@Injectable()
export class WhatsappQueueController {
  constructor(private readonly whatsappQueueService: WhatsappQueueService) {}

  async createOne(whatsappQueueCreateArgs: Prisma.WhatsappQueueCreateArgs) {
    return await this.whatsappQueueService.createOne(whatsappQueueCreateArgs);
  }

  async createMany(
    whatsappQueueCreateManyArgs: Prisma.WhatsappQueueCreateManyArgs,
  ) {
    return await this.whatsappQueueService.createMany(
      whatsappQueueCreateManyArgs,
    );

    //TODO: add event request api on createManyyWhatsappQueue
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

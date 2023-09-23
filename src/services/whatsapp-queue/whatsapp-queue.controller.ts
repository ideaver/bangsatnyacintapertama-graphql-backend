import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { WhatsappQueueService } from './whatsapp-queue.service';
import { WhatsappGatewayController } from '../whatsapp-gateway/whatsapp-gateway.controller';
import { WaMediaMessage, WaMessage } from 'src/model/message.model';

@Injectable()
export class WhatsappQueueController {
  constructor(
    private readonly whatsappQueueService: WhatsappQueueService,
    private readonly whatsappGatewayController: WhatsappGatewayController,
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

    const waMessages: WaMessage[] = [
      { message: '3', phone: 6281938298740 },
      { message: '4', phone: 6281938298740 },
    ];

    const waMediaMessages: WaMediaMessage[] = [
      {
        phone: 6281938298740,
        image:
          'https://images.pexels.com/photos/45853/grey-crowned-crane-bird-crane-animal-45853.jpeg',
        caption: 'test1',
      },
      {
        phone: 6281938298740,
        image:
          'https://images.pexels.com/photos/45853/grey-crowned-crane-bird-crane-animal-45853.jpeg',
        caption: 'test2',
      },
    ];

    await this.whatsappGatewayController.sendWhatsappMessages(waMessages);

    await this.whatsappGatewayController.sendWhatsappImages(waMediaMessages);

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

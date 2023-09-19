import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { EmailQueueService } from './email-queue.service';

@Injectable()
export class EmailQueueController {
  constructor(private readonly emailQueueService: EmailQueueService) {}

  async createOne(emailQueueCreateArgs: Prisma.EmailQueueCreateArgs) {
    return await this.emailQueueService.createOne(emailQueueCreateArgs);
  }

  async createMany(emailQueueCreateManyArgs: Prisma.EmailQueueCreateManyArgs) {
    return await this.emailQueueService.createMany(emailQueueCreateManyArgs);
  }

  async findOne(emailQueueFindUniqueArgs: Prisma.EmailQueueFindUniqueArgs) {
    return await this.emailQueueService.findOne(emailQueueFindUniqueArgs);
  }

  async findMany(emailQueueFindManyArgs: Prisma.EmailQueueFindManyArgs) {
    return await this.emailQueueService.findMany(emailQueueFindManyArgs);
  }

  async findFirst(emailQueueFindFirstArgs: Prisma.EmailQueueFindFirstArgs) {
    return await this.emailQueueService.findFirst(emailQueueFindFirstArgs);
  }

  async updateOne(emailQueueUpdateOneArgs: Prisma.EmailQueueUpdateArgs) {
    return await this.emailQueueService.updateOne(emailQueueUpdateOneArgs);
  }

  async updateMany(emailQueueUpdateManyArgs: Prisma.EmailQueueUpdateManyArgs) {
    return await this.emailQueueService.updateMany(emailQueueUpdateManyArgs);
  }

  async delete(emailQueueDeleteArgs: Prisma.EmailQueueDeleteArgs) {
    return await this.emailQueueService.delete(emailQueueDeleteArgs);
  }

  async deleteMany(emailQueueDeleteManyArgs: Prisma.EmailQueueDeleteManyArgs) {
    return await this.emailQueueService.deleteMany(emailQueueDeleteManyArgs);
  }

  async aggregate(emailQueueAggregateArgs: Prisma.EmailQueueAggregateArgs) {
    return await this.emailQueueService.aggregate(emailQueueAggregateArgs);
  }

  async count(emailQueueCountArgs: Prisma.EmailQueueCountArgs) {
    return await this.emailQueueService.count(emailQueueCountArgs);
  }
}

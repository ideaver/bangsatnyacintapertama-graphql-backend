import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';
import { Prisma } from '@prisma/client';
import { WhatsappQueue } from 'src/@generated';

@Injectable()
export class WhatsappQueueService {
  constructor(private prisma: PrismaService) {}

  async createOne(whatsappQueueCreateArgs: Prisma.WhatsappQueueCreateArgs) {
    try {
      return await this.prisma.whatsappQueue.create(whatsappQueueCreateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async createMany(
    whatsappQueueCreateManyArgs: Prisma.WhatsappQueueCreateManyArgs,
  ) {
    try {
      return await this.prisma.whatsappQueue.createMany(
        whatsappQueueCreateManyArgs,
      );
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findOne(
    whatsappQueueFindUniqueArgs: Prisma.WhatsappQueueFindUniqueArgs,
  ) {
    try {
      return await this.prisma.whatsappQueue.findUnique(
        whatsappQueueFindUniqueArgs,
      );
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findMany(
    whatsappQueueFindManyArgs: Prisma.WhatsappQueueFindManyArgs,
  ): Promise<WhatsappQueue[]> {
    try {
      return await this.prisma.whatsappQueue.findMany(
        whatsappQueueFindManyArgs,
      );
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findFirst(
    whatsappQueueFindFirstArgs: Prisma.WhatsappQueueFindFirstArgs,
  ) {
    try {
      return await this.prisma.whatsappQueue.findFirst(
        whatsappQueueFindFirstArgs,
      );
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateOne(whatsappQueueUpdateOneArgs: Prisma.WhatsappQueueUpdateArgs) {
    try {
      return await this.prisma.whatsappQueue.update(whatsappQueueUpdateOneArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateMany(
    whatsappQueueUpdateManyArgs: Prisma.WhatsappQueueUpdateManyArgs,
  ) {
    try {
      return await this.prisma.whatsappQueue.updateMany(
        whatsappQueueUpdateManyArgs,
      );
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async delete(whatsappQueueDeleteArgs: Prisma.WhatsappQueueDeleteArgs) {
    try {
      await this.prisma.whatsappQueue.delete(whatsappQueueDeleteArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async deleteMany(
    whatsappQueueDeleteManyArgs: Prisma.WhatsappQueueDeleteManyArgs,
  ) {
    try {
      await this.prisma.whatsappQueue.deleteMany(whatsappQueueDeleteManyArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async aggregate(
    whatsappQueueAggregateArgs: Prisma.WhatsappQueueAggregateArgs,
  ) {
    try {
      return await this.prisma.whatsappQueue.aggregate(
        whatsappQueueAggregateArgs,
      );
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async count(whatsappQueueCountArgs: Prisma.WhatsappQueueCountArgs) {
    try {
      return await this.prisma.whatsappQueue.count(whatsappQueueCountArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }
}

import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';
import { Prisma } from '@prisma/client';

@Injectable()
export class EmailQueueService {
  constructor(private prisma: PrismaService) {}

  async createOne(emailQueueCreateArgs: Prisma.EmailQueueCreateArgs) {
    try {
      return await this.prisma.emailQueue.create(emailQueueCreateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async createMany(emailQueueCreateManyArgs: Prisma.EmailQueueCreateManyArgs) {
    try {
      return await this.prisma.emailQueue.createMany(emailQueueCreateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findOne(emailQueueFindUniqueArgs: Prisma.EmailQueueFindUniqueArgs) {
    try {
      return await this.prisma.emailQueue.findUnique(emailQueueFindUniqueArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findMany(emailQueueFindManyArgs: Prisma.EmailQueueFindManyArgs) {
    try {
      return await this.prisma.emailQueue.findMany(emailQueueFindManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findFirst(emailQueueFindFirstArgs: Prisma.EmailQueueFindFirstArgs) {
    try {
      return await this.prisma.emailQueue.findFirst(emailQueueFindFirstArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateOne(emailQueueUpdateOneArgs: Prisma.EmailQueueUpdateArgs) {
    try {
      return await this.prisma.emailQueue.update(emailQueueUpdateOneArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateMany(emailQueueUpdateManyArgs: Prisma.EmailQueueUpdateManyArgs) {
    try {
      return await this.prisma.emailQueue.updateMany(emailQueueUpdateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async delete(emailQueueDeleteArgs: Prisma.EmailQueueDeleteArgs) {
    try {
      await this.prisma.emailQueue.delete(emailQueueDeleteArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async deleteMany(emailQueueDeleteManyArgs: Prisma.EmailQueueDeleteManyArgs) {
    try {
      await this.prisma.emailQueue.deleteMany(emailQueueDeleteManyArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async aggregate(emailQueueAggregateArgs: Prisma.EmailQueueAggregateArgs) {
    try {
      return await this.prisma.emailQueue.aggregate(emailQueueAggregateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async count(emailQueueCountArgs: Prisma.EmailQueueCountArgs) {
    try {
      return await this.prisma.emailQueue.count(emailQueueCountArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }
}

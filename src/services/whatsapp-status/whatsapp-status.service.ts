import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';
import { Prisma } from '@prisma/client';
import { WhatsappStatus } from 'src/@generated';

@Injectable()
export class WhatsappStatusService {
  constructor(private prisma: PrismaService) {}

  async createOne(whatsappStatusCreateArgs: Prisma.WhatsappStatusCreateArgs) {
    try {
      return await this.prisma.whatsappStatus.create(whatsappStatusCreateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async createMany(
    whatsappStatusCreateManyArgs: Prisma.WhatsappStatusCreateManyArgs,
  ) {
    try {
      return await this.prisma.whatsappStatus.createMany(
        whatsappStatusCreateManyArgs,
      );
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findOne(
    whatsappStatusFindUniqueArgs: Prisma.WhatsappStatusFindUniqueArgs,
  ) {
    try {
      return await this.prisma.whatsappStatus.findUnique(
        whatsappStatusFindUniqueArgs,
      );
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findMany(
    whatsappStatusFindManyArgs: Prisma.WhatsappStatusFindManyArgs,
  ): Promise<WhatsappStatus[]> {
    try {
      return await this.prisma.whatsappStatus.findMany(
        whatsappStatusFindManyArgs,
      );
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findFirst(
    whatsappStatusFindFirstArgs: Prisma.WhatsappStatusFindFirstArgs,
  ) {
    try {
      return await this.prisma.whatsappStatus.findFirst(
        whatsappStatusFindFirstArgs,
      );
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateOne(
    whatsappStatusUpdateOneArgs: Prisma.WhatsappStatusUpdateArgs,
  ) {
    try {
      return await this.prisma.whatsappStatus.update(
        whatsappStatusUpdateOneArgs,
      );
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateMany(
    whatsappStatusUpdateManyArgs: Prisma.WhatsappStatusUpdateManyArgs,
  ) {
    try {
      return await this.prisma.whatsappStatus.updateMany(
        whatsappStatusUpdateManyArgs,
      );
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async delete(whatsappStatusDeleteArgs: Prisma.WhatsappStatusDeleteArgs) {
    try {
      await this.prisma.whatsappStatus.delete(whatsappStatusDeleteArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async deleteMany(
    whatsappStatusDeleteManyArgs: Prisma.WhatsappStatusDeleteManyArgs,
  ) {
    try {
      await this.prisma.whatsappStatus.deleteMany(whatsappStatusDeleteManyArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async aggregate(
    whatsappStatusAggregateArgs: Prisma.WhatsappStatusAggregateArgs,
  ) {
    try {
      return await this.prisma.whatsappStatus.aggregate(
        whatsappStatusAggregateArgs,
      );
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async count(whatsappStatusCountArgs: Prisma.WhatsappStatusCountArgs) {
    try {
      return await this.prisma.whatsappStatus.count(whatsappStatusCountArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }
}

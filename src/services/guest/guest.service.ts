import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';
import { Prisma } from '@prisma/client';
import { Guest } from 'src/@generated';

@Injectable()
export class GuestService {
  constructor(private prisma: PrismaService) {}

  async createOne(guestCreateArgs: Prisma.GuestCreateArgs) {
    try {
      return await this.prisma.guest.create(guestCreateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async createMany(guestCreateManyArgs: Prisma.GuestCreateManyArgs) {
    try {
      return await this.prisma.guest.createMany(guestCreateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findOne(guestFindUniqueArgs: Prisma.GuestFindUniqueArgs) {
    try {
      return await this.prisma.guest.findUnique(guestFindUniqueArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findMany(
    guestFindManyArgs: Prisma.GuestFindManyArgs,
  ): Promise<Guest[]> {
    try {
      return await this.prisma.guest.findMany(guestFindManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findFirst(guestFindFirstArgs: Prisma.GuestFindFirstArgs) {
    try {
      return await this.prisma.guest.findFirst(guestFindFirstArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateOne(guestUpdateOneArgs: Prisma.GuestUpdateArgs) {
    try {
      return await this.prisma.guest.update(guestUpdateOneArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateMany(guestUpdateManyArgs: Prisma.GuestUpdateManyArgs) {
    try {
      return await this.prisma.guest.updateMany(guestUpdateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async delete(guestDeleteArgs: Prisma.GuestDeleteArgs) {
    try {
      await this.prisma.guest.delete(guestDeleteArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async deleteMany(guestDeleteManyArgs: Prisma.GuestDeleteManyArgs) {
    try {
      return await this.prisma.guest.deleteMany(guestDeleteManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async aggregate(guestAggregateArgs: Prisma.GuestAggregateArgs) {
    try {
      return await this.prisma.guest.aggregate(guestAggregateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async count(guestCountArgs: Prisma.GuestCountArgs) {
    try {
      return await this.prisma.guest.count(guestCountArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }
}

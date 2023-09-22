import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';
import { Prisma } from '@prisma/client';

@Injectable()
export class InvitationImageService {
  constructor(private prisma: PrismaService) {}

  async createOne(invitationImageCreateArgs: Prisma.InvitationImageCreateArgs) {
    try {
      return await this.prisma.invitationImage.create(
        invitationImageCreateArgs,
      );
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async createMany(
    invitationImageCreateManyArgs: Prisma.InvitationImageCreateManyArgs,
  ) {
    try {
      return await this.prisma.invitationImage.createMany(
        invitationImageCreateManyArgs,
      );
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findOne(
    invitationImageFindUniqueArgs: Prisma.InvitationImageFindUniqueArgs,
  ) {
    try {
      return await this.prisma.invitationImage.findUnique(
        invitationImageFindUniqueArgs,
      );
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findMany(
    invitationImageFindManyArgs: Prisma.InvitationImageFindManyArgs,
  ) {
    try {
      return await this.prisma.invitationImage.findMany(
        invitationImageFindManyArgs,
      );
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findFirst(
    invitationImageFindFirstArgs: Prisma.InvitationImageFindFirstArgs,
  ) {
    try {
      return await this.prisma.invitationImage.findFirst(
        invitationImageFindFirstArgs,
      );
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateOne(
    invitationImageUpdateOneArgs: Prisma.InvitationImageUpdateArgs,
  ) {
    try {
      return await this.prisma.invitationImage.update(
        invitationImageUpdateOneArgs,
      );
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateMany(
    invitationImageUpdateManyArgs: Prisma.InvitationImageUpdateManyArgs,
  ) {
    try {
      return await this.prisma.invitationImage.updateMany(
        invitationImageUpdateManyArgs,
      );
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async delete(invitationImageDeleteArgs: Prisma.InvitationImageDeleteArgs) {
    try {
      await this.prisma.invitationImage.delete(invitationImageDeleteArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async deleteMany(
    invitationImageDeleteManyArgs: Prisma.InvitationImageDeleteManyArgs,
  ) {
    try {
      await this.prisma.invitationImage.deleteMany(
        invitationImageDeleteManyArgs,
      );
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async aggregate(
    invitationImageAggregateArgs: Prisma.InvitationImageAggregateArgs,
  ) {
    try {
      return await this.prisma.invitationImage.aggregate(
        invitationImageAggregateArgs,
      );
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async count(invitationImageCountArgs: Prisma.InvitationImageCountArgs) {
    try {
      return await this.prisma.invitationImage.count(invitationImageCountArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }
}

import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { IGraphQLError } from 'src/utils/exception/custom-graphql-error';
import { Prisma } from '@prisma/client';

@Injectable()
export class QrCodeService {
  constructor(private prisma: PrismaService) {}

  async createOne(qrCodeCreateArgs: Prisma.QrCodeCreateArgs) {
    try {
      return await this.prisma.qrCode.create(qrCodeCreateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async createMany(qrCodeCreateManyArgs: Prisma.QrCodeCreateManyArgs) {
    try {
      return await this.prisma.qrCode.createMany(qrCodeCreateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findOne(qrCodeFindUniqueArgs: Prisma.QrCodeFindUniqueArgs) {
    try {
      return await this.prisma.qrCode.findUnique(qrCodeFindUniqueArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findMany(qrCodeFindManyArgs: Prisma.QrCodeFindManyArgs) {
    try {
      return await this.prisma.qrCode.findMany(qrCodeFindManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async findFirst(qrCodeFindFirstArgs: Prisma.QrCodeFindFirstArgs) {
    try {
      return await this.prisma.qrCode.findFirst(qrCodeFindFirstArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateOne(qrCodeUpdateOneArgs: Prisma.QrCodeUpdateArgs) {
    try {
      return await this.prisma.qrCode.update(qrCodeUpdateOneArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async updateMany(qrCodeUpdateManyArgs: Prisma.QrCodeUpdateManyArgs) {
    try {
      return await this.prisma.qrCode.updateMany(qrCodeUpdateManyArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async delete(qrCodeDeleteArgs: Prisma.QrCodeDeleteArgs) {
    try {
      await this.prisma.qrCode.delete(qrCodeDeleteArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async deleteMany(qrCodeDeleteManyArgs: Prisma.QrCodeDeleteManyArgs) {
    try {
      await this.prisma.qrCode.deleteMany(qrCodeDeleteManyArgs);
      return true;
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async aggregate(qrCodeAggregateArgs: Prisma.QrCodeAggregateArgs) {
    try {
      return await this.prisma.qrCode.aggregate(qrCodeAggregateArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }

  async count(qrCodeCountArgs: Prisma.QrCodeCountArgs) {
    try {
      return await this.prisma.qrCode.count(qrCodeCountArgs);
    } catch (err) {
      throw new IGraphQLError({ code: 123456, err: err });
    }
  }
}

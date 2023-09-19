import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { QrCodeService } from './qr-code.service';

@Injectable()
export class QrCodeController {
  constructor(private readonly qrCodeService: QrCodeService) {}

  async createOne(qrCodeCreateArgs: Prisma.QrCodeCreateArgs) {
    return await this.qrCodeService.createOne(qrCodeCreateArgs);
  }

  async createMany(qrCodeCreateManyArgs: Prisma.QrCodeCreateManyArgs) {
    return await this.qrCodeService.createMany(qrCodeCreateManyArgs);
  }

  async findOne(qrCodeFindUniqueArgs: Prisma.QrCodeFindUniqueArgs) {
    return await this.qrCodeService.findOne(qrCodeFindUniqueArgs);
  }

  async findMany(qrCodeFindManyArgs: Prisma.QrCodeFindManyArgs) {
    return await this.qrCodeService.findMany(qrCodeFindManyArgs);
  }

  async findFirst(qrCodeFindFirstArgs: Prisma.QrCodeFindFirstArgs) {
    return await this.qrCodeService.findFirst(qrCodeFindFirstArgs);
  }

  async updateOne(qrCodeUpdateOneArgs: Prisma.QrCodeUpdateArgs) {
    return await this.qrCodeService.updateOne(qrCodeUpdateOneArgs);
  }

  async updateMany(qrCodeUpdateManyArgs: Prisma.QrCodeUpdateManyArgs) {
    return await this.qrCodeService.updateMany(qrCodeUpdateManyArgs);
  }

  async delete(qrCodeDeleteArgs: Prisma.QrCodeDeleteArgs) {
    return await this.qrCodeService.delete(qrCodeDeleteArgs);
  }

  async deleteMany(qrCodeDeleteManyArgs: Prisma.QrCodeDeleteManyArgs) {
    return await this.qrCodeService.deleteMany(qrCodeDeleteManyArgs);
  }

  async aggregate(qrCodeAggregateArgs: Prisma.QrCodeAggregateArgs) {
    return await this.qrCodeService.aggregate(qrCodeAggregateArgs);
  }

  async count(qrCodeCountArgs: Prisma.QrCodeCountArgs) {
    return await this.qrCodeService.count(qrCodeCountArgs);
  }
}

import { Injectable } from '@nestjs/common';
import { Prisma, QrCode } from '@prisma/client';
import { QrCodeService } from './qr-code.service';
import ScanResponse from 'src/model/scan-response-status.model';
import { UserController } from '../user/user.controller';

@Injectable()
export class QrCodeController {
  constructor(
    private readonly qrCodeService: QrCodeService,
    private readonly userController: UserController,
  ) {}

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

  async scan(guestId: string): Promise<ScanResponse> {
    // get the first qr code that matches the user id and has not been scanned
    const qrCode = await this.qrCodeService.findFirst({
      where: {
        guestId: { equals: guestId },
      },
      include: { guest: true, scannedBy: true },
    });

    if (qrCode) {
      // if qr code has not been scanned, update the qr code
      if (!qrCode.scannedAt) {
        await this.qrCodeService.updateOne({
          where: {
            id: qrCode.id,
          },
          data: {
            scannedAt: new Date(),
          },
        });

        // return the qr code
        return {
          isSuccess: true,
          message: 'Berhasil Scan Qr Code',
          qrData: qrCode,
        };
      } else {
        // return the qr code
        return {
          isSuccess: false,
          message: 'Qr Code sudah pernah di Scan',
          qrData: qrCode,
        };
      }
    }

    return {
      isSuccess: false,
      message: 'Tidak ditemukan pengguna dengan QR code tersebut',
      qrData: qrCode,
    };
  }
}

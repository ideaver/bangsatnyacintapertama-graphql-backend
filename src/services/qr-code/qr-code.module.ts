import { Module } from '@nestjs/common';

import { PrismaService } from 'prisma/prisma.service';
import { QrCodeResolver } from './qr-code.resolver';
import { QrCodeController } from './qr-code.controller';
import { QrCodeService } from './qr-code.service';

@Module({
  providers: [PrismaService, QrCodeResolver, QrCodeController, QrCodeService],
  exports: [QrCodeController],
})
export class QrCodeModule {}

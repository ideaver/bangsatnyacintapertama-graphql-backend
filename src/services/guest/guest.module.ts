import { Module } from '@nestjs/common';
import { GuestService } from './guest.service';
import { GuestResolver } from './guest.resolver';
import { GuestController } from './guest.controller';
import { GuestListener } from '../event-listeners/guest.listener';
import { QrCodeModule } from '../qr-code/qr-code.module';
import { PrismaService } from 'prisma/prisma.service';
import { InvitationImageModule } from '../invitation-image/invitation-image.module';

@Module({
  providers: [
    PrismaService,
    GuestResolver,
    GuestController,
    GuestService,
    GuestListener,
  ],
  imports: [QrCodeModule, InvitationImageModule],
  exports: [GuestController],
})
export class GuestModule {}

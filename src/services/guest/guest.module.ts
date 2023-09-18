import { Module } from '@nestjs/common';
import { GuestService } from './guest.service';
import { GuestResolver } from './guest.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { GuestController } from './guest.controller';

@Module({
  providers: [PrismaService, GuestResolver, GuestController, GuestService],
  exports: [GuestController],
})
export class GuestModule {}

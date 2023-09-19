import { Module } from '@nestjs/common';

import { PrismaService } from 'prisma/prisma.service';
import { WhatsappQueueResolver } from './whatsapp-queue.resolver';
import { WhatsappQueueController } from './whatsapp-queue.controller';
import { WhatsappQueueService } from './whatsapp-queue.service';

@Module({
  providers: [
    PrismaService,
    WhatsappQueueResolver,
    WhatsappQueueController,
    WhatsappQueueService,
  ],
  exports: [WhatsappQueueController],
})
export class WhatsappQueueModule {}

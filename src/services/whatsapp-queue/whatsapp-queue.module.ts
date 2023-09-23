import { Module, forwardRef } from '@nestjs/common';

import { PrismaService } from 'prisma/prisma.service';
import { WhatsappQueueResolver } from './whatsapp-queue.resolver';
import { WhatsappQueueController } from './whatsapp-queue.controller';
import { WhatsappQueueService } from './whatsapp-queue.service';
import { WhatsappQueueListener } from 'src/event-listeners/whatsapp-queue.listener';
import { GuestModule } from '../guest/guest.module';
import { WhatsappGatewayModule } from '../whatsapp-gateway/whatsapp-gateway.module';

@Module({
  providers: [
    PrismaService,
    WhatsappQueueResolver,
    WhatsappQueueController,
    WhatsappQueueService,
    WhatsappQueueListener,
  ],
  imports: [forwardRef(() => GuestModule), WhatsappGatewayModule],
  exports: [WhatsappQueueController],
})
export class WhatsappQueueModule {}

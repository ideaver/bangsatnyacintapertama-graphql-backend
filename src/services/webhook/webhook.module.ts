import { Module } from '@nestjs/common';
import { WebhookController } from './webhook.controller';
import { WhatsappQueueModule } from '../whatsapp-queue/whatsapp-queue.module';

@Module({
  providers: [WebhookController],
  imports: [WhatsappQueueModule],
  exports: [WebhookController],
})
export class WebHookModule {}

import { Module } from '@nestjs/common';
import { WebhookController } from './webhook.controller';
import { WhatsappStatusModule } from '../whatsapp-status/whatsapp-status.module';
import { GuestModule } from '../guest/guest.module';

@Module({
  controllers: [WebhookController],
  imports: [WhatsappStatusModule, GuestModule, WhatsappStatusModule],
})
export class WebhookModule {}

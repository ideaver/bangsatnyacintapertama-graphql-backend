import { Module } from '@nestjs/common';
import { WebhookController } from './webhook.controller';
import { WhatsappStatusModule } from '../whatsapp-status/whatsapp-status.module';
import { GuestModule } from '../guest/guest.module';
import { WhatsappGatewayModule } from '../whatsapp-gateway/whatsapp-gateway.module';

@Module({
  controllers: [WebhookController],
  imports: [
    WhatsappStatusModule,
    GuestModule,
    WhatsappStatusModule,
    WhatsappGatewayModule,
  ],
})
export class WebhookModule {}

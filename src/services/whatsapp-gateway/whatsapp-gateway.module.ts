import { Module, forwardRef } from '@nestjs/common';
import { WhatsappGatewayController } from './whatsapp-gateway.controller';
import { WhatsappGatewayService } from './whatsapp-gateway.service';
import { GuestModule } from '../guest/guest.module';
import { HttpModule } from '@nestjs/axios';

@Module({
  providers: [WhatsappGatewayController, WhatsappGatewayService],
  imports: [forwardRef(() => GuestModule), HttpModule],
  exports: [WhatsappGatewayController],
})
export class WhatsappGatewayModule {}

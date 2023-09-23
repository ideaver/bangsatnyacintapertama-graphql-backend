import { Injectable } from '@nestjs/common';
import { WhatsappGatewayService } from './whatsapp-gateway.service';
import { WaMediaMessage, WaMessage } from 'src/model/message.model';

@Injectable()
export class WhatsappGatewayController {
  constructor(
    private readonly whatsappGatewayService: WhatsappGatewayService,
  ) {}

  async sendWhatsappMessages(messages: WaMessage[]) {
    return await this.whatsappGatewayService.sendWhatsappMessages(messages);
  }

  async sendWhatsappImages(messages: WaMediaMessage[]) {
    return await this.whatsappGatewayService.sendWhatsappImages(messages);
  }
}

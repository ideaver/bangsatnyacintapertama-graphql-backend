import { Injectable, Logger } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { WhatsappStatusEvent } from './enum/whatsapp-status-event.enum ';

@Injectable()
export class WhatsappStatusListener {
  private readonly logger = new Logger(WhatsappStatusListener.name);

  constructor() {}
  @OnEvent(WhatsappStatusEvent.CreatedMany)
  async onWhatsappStatusCreatedManyEvent() {}
}

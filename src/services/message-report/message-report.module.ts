import { Module } from '@nestjs/common';
import { MessageReportController } from './message-report.controller';
import { GuestModule } from '../guest/guest.module';
import { MessageReportResolver } from './message-report.resolver';
import { WhatsappStatusModule } from '../whatsapp-status/whatsapp-status.module';

@Module({
  providers: [MessageReportController, MessageReportResolver],
  exports: [MessageReportController],
  imports: [WhatsappStatusModule],
})
export class MessageReportModule {}

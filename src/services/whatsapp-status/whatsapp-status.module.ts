import { Module, forwardRef } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { WhatsappStatusResolver } from './whatsapp-status.resolver';
import { WhatsappStatusController } from './whatsapp-status.controller';
import { WhatsappStatusService } from './whatsapp-status.service';
import { GuestModule } from '../guest/guest.module';

@Module({
  providers: [
    PrismaService,
    WhatsappStatusResolver,
    WhatsappStatusController,
    WhatsappStatusService,
  ],
  imports: [forwardRef(() => GuestModule)],
  exports: [WhatsappStatusController],
})
export class WhatsappStatusModule {}

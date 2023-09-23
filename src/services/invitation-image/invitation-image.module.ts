import { Module, forwardRef } from '@nestjs/common';

import { PrismaService } from 'prisma/prisma.service';
import { InvitationImageResolver } from './invitation-image.resolver';
import { InvitationImageController } from './invitation-image.controller';
import { InvitationImageService } from './invitation-image.service';
import { InvitationImageListener } from 'src/event-listeners/invitation-image.listener';
import { WhatsappQueueModule } from '../whatsapp-queue/whatsapp-queue.module';
import { GuestModule } from '../guest/guest.module';

@Module({
  providers: [
    PrismaService,
    InvitationImageResolver,
    InvitationImageController,
    InvitationImageService,
    InvitationImageListener,
  ],
  imports: [
    forwardRef(() => GuestModule),
    forwardRef(() => WhatsappQueueModule),
  ],
  exports: [InvitationImageController],
})
export class InvitationImageModule {}

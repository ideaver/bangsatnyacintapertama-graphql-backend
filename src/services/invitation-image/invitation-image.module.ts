import { Module, forwardRef } from '@nestjs/common';

import { PrismaService } from 'prisma/prisma.service';
import { InvitationImageResolver } from './invitation-image.resolver';
import { InvitationImageController } from './invitation-image.controller';
import { InvitationImageService } from './invitation-image.service';
import { InvitationImageListener } from 'src/event-listeners/invitation-image.listener';
import { WhatsappStatusModule } from '../whatsapp-status/whatsapp-status.module';
import { GuestModule } from '../guest/guest.module';
import { WhatsappGatewayModule } from '../whatsapp-gateway/whatsapp-gateway.module';

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
    forwardRef(() => WhatsappStatusModule),
    forwardRef(() => WhatsappGatewayModule),
  ],
  exports: [InvitationImageController],
})
export class InvitationImageModule {}

import { Module } from '@nestjs/common';

import { PrismaService } from 'prisma/prisma.service';
import { InvitationImageResolver } from './invitation-image.resolver';
import { InvitationImageController } from './invitation-image.controller';
import { InvitationImageService } from './invitation-image.service';

@Module({
  providers: [
    PrismaService,
    InvitationImageResolver,
    InvitationImageController,
    InvitationImageService,
  ],
  exports: [InvitationImageController],
})
export class InvitationImageModule {}

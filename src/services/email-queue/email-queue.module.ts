import { Module } from '@nestjs/common';

import { PrismaService } from 'prisma/prisma.service';
import { EmailQueueResolver } from './email-queue.resolver';
import { EmailQueueController } from './email-queue.controller';
import { EmailQueueService } from './email-queue.service';

@Module({
  providers: [
    PrismaService,
    EmailQueueResolver,
    EmailQueueController,
    EmailQueueService,
  ],
  exports: [EmailQueueController],
})
export class EmailQueueModule {}

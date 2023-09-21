import { Global, Module } from '@nestjs/common';
import { UploaderResolver } from './upload.resolver';
import { UserModule } from '../user/user.module';
import { UploaderService } from './uploader.service';
import { UploaderController } from './uploader.controller';
import { GuestModule } from '../guest/guest.module';
import { PrismaService } from 'prisma/prisma.service';

@Global()
@Module({
  providers: [
    UploaderService,
    UploaderController,
    UploaderResolver,
    PrismaService,
  ],
  imports: [UserModule, GuestModule],
  exports: [UploaderService],
})
export class UploaderModule {}

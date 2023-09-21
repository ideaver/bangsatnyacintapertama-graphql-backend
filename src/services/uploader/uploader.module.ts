import { Global, Module } from '@nestjs/common';
import { UploaderResolver } from './upload.resolver';
import { UploaderService } from './uploader.service';
import { UploaderController } from './uploader.controller';
import { GuestModule } from '../guest/guest.module';
import { UserModule } from '../user/user.module';

@Global()
@Module({
  providers: [UploaderService, UploaderController, UploaderResolver],
  imports: [GuestModule, UserModule],
  exports: [UploaderService],
})
export class UploaderModule {}

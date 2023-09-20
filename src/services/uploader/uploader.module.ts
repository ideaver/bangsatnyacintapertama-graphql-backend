import { Global, Module } from '@nestjs/common';
import { UploaderResolver } from './upload.resolver';
import { UserModule } from '../user/user.module';
import { UploaderService } from './uploader.service';
import { UploaderController } from './uploader.controller';

@Global()
@Module({
  providers: [UploaderService, UploaderController, UploaderResolver],
  imports: [UserModule],
  exports: [UploaderService],
})
export class UploaderModule {}

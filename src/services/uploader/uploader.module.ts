import { Global, Module } from '@nestjs/common';
import { UploaderResolver } from './upload.resolver';
import { UserModule } from '../user/user.module';
import { UploaderService } from './uploader.service';

@Global()
@Module({
  providers: [UploaderService, UploaderResolver],
  imports: [UserModule],
  exports: [UploaderService],
})
export class UploaderModule {}

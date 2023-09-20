import { Field, ObjectType } from '@nestjs/graphql';
import { QrCode, User } from 'src/@generated';

@ObjectType()
class ScanResponse {
  @Field(() => Boolean)
  isSuccess: boolean;

  @Field(() => String)
  message: string;

  @Field(() => QrCode)
  qrData: QrCode;
}

export default ScanResponse;

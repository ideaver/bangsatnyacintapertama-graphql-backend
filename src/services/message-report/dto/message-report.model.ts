import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
class Phone {
  @Field()
  from: string;

  @Field()
  to: string;
}

@ObjectType()
class DateObject {
  @Field()
  created_at: string;

  @Field()
  updated_at: string;
}

@ObjectType()
export class MessageDto {
  @Field(() => String)
  id: string;

  @Field(() => Phone)
  phone: Phone; // You can now use the Phone class here

  @Field()
  category: string;

  @Field()
  text: string;

  @Field({ nullable: true })
  URL_file: string | null;

  @Field()
  status: string;

  @Field()
  type: string;

  @Field()
  ref_id: string;

  @Field(() => DateObject)
  date: DateObject;
}

@ObjectType()
export class MessageReportResponse {
  @Field(() => Boolean)
  status: boolean;

  @Field(() => Int)
  totalData: number;

  @Field()
  perPage: string;

  @Field()
  page: string;

  @Field(() => Int)
  totalPage: number;

  @Field(() => [MessageDto])
  message: MessageDto[];
}

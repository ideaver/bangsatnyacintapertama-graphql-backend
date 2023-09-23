// @ts-nocheck
import { Resolver, Query, Mutation, Args, Float } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import {
  AggregateQrCode,
  CreateManyQrCodeArgs,
  CreateOneQrCodeArgs,
  DeleteManyQrCodeArgs,
  DeleteOneQrCodeArgs,
  FindFirstQrCodeArgs,
  FindManyQrCodeArgs,
  FindUniqueQrCodeArgs,
  QrCode,
  QrCodeAggregateArgs,
  UpdateManyQrCodeArgs,
  UpdateOneQrCodeArgs,
} from 'src/@generated';
import { replaceNullWithUndefined } from 'src/utils/replace-null-with-undefined.function';
import BatchPayload from 'src/model/batch-payload.model';
import { QrCodeController } from './qr-code.controller';
import ScanResponse from 'src/model/scan-response-status.model';

interface QrCodeSelect {
  select: Prisma.QrCodeSelect;
}

@Resolver(() => QrCode)
export class QrCodeResolver {
  constructor(private readonly qrCodeController: QrCodeController) {}

  @Mutation(() => QrCode, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async qrCodeCreateOne(
    @Args()
    qrCodeCreateArgs: CreateOneQrCodeArgs,
    @Relations() relations: QrCodeSelect,
  ): Promise<QrCode | void> {
    return await this.qrCodeController.createOne({
      ...qrCodeCreateArgs,
      select: relations.select,
    });
  }

  @Mutation(() => BatchPayload, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async qrCodeCreateMany(
    @Args()
    createManyQrCodeArgs: CreateManyQrCodeArgs,
  ) {
    return await this.qrCodeController.createMany(createManyQrCodeArgs);
  }

  @Query(() => QrCode, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  qrCodeFindOne(
    @Args()
    qrCodeFindUniqueArgs: FindUniqueQrCodeArgs,
    @Relations() relations: QrCodeSelect,
  ): Promise<QrCode | void> {
    return this.qrCodeController.findOne({
      ...qrCodeFindUniqueArgs,
      select: relations.select,
    });
  }

  @Query(() => [QrCode], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  qrCodeFindMany(
    @Args() qrCodeFindManyArgs: FindManyQrCodeArgs,
    @Relations() relations: QrCodeSelect,
  ) {
    return this.qrCodeController.findMany({
      ...qrCodeFindManyArgs,
      select: relations.select,
    });
  }

  @Query(() => QrCode, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  qrCodeFindFirst(
    @Args()
    findFirstQrCodeArgs: FindFirstQrCodeArgs,
    @Relations() relations: QrCodeSelect,
  ): Promise<QrCode | void> {
    return this.qrCodeController.findFirst({
      ...findFirstQrCodeArgs,
      select: relations.select,
    });
  }

  @Mutation(() => QrCode, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async qrCodeUpdateOne(
    @Args() qrCodeUpdateOneArgs: UpdateOneQrCodeArgs,
    @Relations() relations: QrCodeSelect,
  ) {
    return this.qrCodeController.updateOne({
      ...replaceNullWithUndefined(qrCodeUpdateOneArgs),
      select: relations.select,
    });
  }

  @Mutation(() => BatchPayload, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async qrCodeUpdateMany(@Args() updateManyQrCodeArgs: UpdateManyQrCodeArgs) {
    return this.qrCodeController.updateMany(updateManyQrCodeArgs);
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  async qrCodeDelete(
    @Args() deleteOneQrCodeArgs: DeleteOneQrCodeArgs,
    @Relations() relations: QrCodeSelect,
  ) {
    return this.qrCodeController.delete({
      ...deleteOneQrCodeArgs,
      select: relations.select,
    });
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  async qrCodeDeleteMany(@Args() deleteManyQrCodeArgs: DeleteManyQrCodeArgs) {
    return this.qrCodeController.deleteMany(deleteManyQrCodeArgs);
  }

  @Query(() => AggregateQrCode, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  qrCodeAggregate(@Args() qrCodeAggregateArgs: QrCodeAggregateArgs) {
    return this.qrCodeController.aggregate(qrCodeAggregateArgs);
  }

  @Query(() => Float, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  qrCodeCount(@Args() qrCodeCountAggregateInput: FindManyQrCodeArgs) {
    return this.qrCodeController.count(qrCodeCountAggregateInput);
  }

  @Query(() => ScanResponse, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  qrCodeScan(
    @Args({ type: () => String, name: 'guestId' })
    guestId: string,
  ): Promise<ScanResponse> {
    return this.qrCodeController.scan(guestId);
  }
}

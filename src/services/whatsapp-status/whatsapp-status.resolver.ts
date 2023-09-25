// @ts-nocheck
import { Resolver, Query, Mutation, Args, Float } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import {
  AggregateWhatsappStatus,
  CreateManyWhatsappStatusArgs,
  CreateOneWhatsappStatusArgs,
  DeleteManyWhatsappStatusArgs,
  DeleteOneWhatsappStatusArgs,
  FindFirstWhatsappStatusArgs,
  FindManyWhatsappStatusArgs,
  FindUniqueWhatsappStatusArgs,
  WhatsappStatus,
  WhatsappStatusAggregateArgs,
  UpdateManyWhatsappStatusArgs,
  UpdateOneWhatsappStatusArgs,
} from 'src/@generated';
import { replaceNullWithUndefined } from 'src/utils/replace-null-with-undefined.function';
import BatchPayload from 'src/model/batch-payload.model';
import { WhatsappStatusController } from './whatsapp-status.controller';

interface WhatsappStatusSelect {
  select: Prisma.WhatsappStatusSelect;
}

@Resolver(() => WhatsappStatus)
export class WhatsappStatusResolver {
  constructor(
    private readonly whatsappStatusController: WhatsappStatusController,
  ) {}

  @Mutation(() => WhatsappStatus, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async whatsappStatusCreateOne(
    @Args()
    whatsappStatusCreateArgs: CreateOneWhatsappStatusArgs,
    @Relations() relations: WhatsappStatusSelect,
  ): Promise<WhatsappStatus | void> {
    return await this.whatsappStatusController.createOne({
      ...whatsappStatusCreateArgs,
      select: relations.select,
    });
  }

  @Mutation(() => BatchPayload, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async whatsappStatusCreateMany(
    @Args()
    createManyWhatsappStatusArgs: CreateManyWhatsappStatusArgs,
  ) {
    return await this.whatsappStatusController.createMany(
      createManyWhatsappStatusArgs,
    );
  }

  @Query(() => WhatsappStatus, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  whatsappStatusFindOne(
    @Args()
    whatsappStatusFindUniqueArgs: FindUniqueWhatsappStatusArgs,
    @Relations() relations: WhatsappStatusSelect,
  ): Promise<WhatsappStatus | void> {
    return this.whatsappStatusController.findOne({
      ...whatsappStatusFindUniqueArgs,
      select: relations.select,
    });
  }

  @Query(() => [WhatsappStatus], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  whatsappStatusFindMany(
    @Args() whatsappStatusFindManyArgs: FindManyWhatsappStatusArgs,
    @Relations() relations: WhatsappStatusSelect,
  ) {
    return this.whatsappStatusController.findMany({
      ...whatsappStatusFindManyArgs,
      select: relations.select,
    });
  }

  @Query(() => WhatsappStatus, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  whatsappStatusFindFirst(
    @Args()
    findFirstWhatsappStatusArgs: FindFirstWhatsappStatusArgs,
    @Relations() relations: WhatsappStatusSelect,
  ): Promise<WhatsappStatus | void> {
    return this.whatsappStatusController.findFirst({
      ...findFirstWhatsappStatusArgs,
      select: relations.select,
    });
  }

  @Mutation(() => WhatsappStatus, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async whatsappStatusUpdateOne(
    @Args() whatsappStatusUpdateOneArgs: UpdateOneWhatsappStatusArgs,
    @Relations() relations: WhatsappStatusSelect,
  ) {
    return this.whatsappStatusController.updateOne({
      ...replaceNullWithUndefined(whatsappStatusUpdateOneArgs),
      select: relations.select,
    });
  }

  @Mutation(() => BatchPayload, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async whatsappStatusUpdateMany(
    @Args() updateManyWhatsappStatusArgs: UpdateManyWhatsappStatusArgs,
  ) {
    return this.whatsappStatusController.updateMany(
      updateManyWhatsappStatusArgs,
    );
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  async whatsappStatusDelete(
    @Args() deleteOneWhatsappStatusArgs: DeleteOneWhatsappStatusArgs,
    @Relations() relations: WhatsappStatusSelect,
  ) {
    return this.whatsappStatusController.delete({
      ...deleteOneWhatsappStatusArgs,
      select: relations.select,
    });
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  async whatsappStatusDeleteMany(
    @Args() deleteManyWhatsappStatusArgs: DeleteManyWhatsappStatusArgs,
  ) {
    return this.whatsappStatusController.deleteMany(
      deleteManyWhatsappStatusArgs,
    );
  }

  @Query(() => AggregateWhatsappStatus, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  whatsappStatusAggregate(
    @Args() whatsappStatusAggregateArgs: WhatsappStatusAggregateArgs,
  ) {
    return this.whatsappStatusController.aggregate(whatsappStatusAggregateArgs);
  }

  @Query(() => Float, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  whatsappStatusCount(
    @Args() whatsappStatusCountAggregateInput: FindManyWhatsappStatusArgs,
  ) {
    return this.whatsappStatusController.count(
      whatsappStatusCountAggregateInput,
    );
  }
}

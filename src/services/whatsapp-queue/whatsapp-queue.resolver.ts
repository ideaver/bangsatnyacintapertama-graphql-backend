// @ts-nocheck
import { Resolver, Query, Mutation, Args, Float } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import {
  AggregateWhatsappQueue,
  CreateManyWhatsappQueueArgs,
  CreateOneWhatsappQueueArgs,
  DeleteManyWhatsappQueueArgs,
  DeleteOneWhatsappQueueArgs,
  FindFirstWhatsappQueueArgs,
  FindManyWhatsappQueueArgs,
  FindUniqueWhatsappQueueArgs,
  WhatsappQueue,
  WhatsappQueueAggregateArgs,
  UpdateManyWhatsappQueueArgs,
  UpdateOneWhatsappQueueArgs,
} from 'src/@generated';
import { replaceNullWithUndefined } from 'src/utils/replace-null-with-undefined.function';
import BatchPayload from 'src/model/batch-payload.model';
import { WhatsappQueueController } from './whatsapp-queue.controller';

interface WhatsappQueueSelect {
  select: Prisma.WhatsappQueueSelect;
}

@Resolver(() => WhatsappQueue)
export class WhatsappQueueResolver {
  constructor(
    private readonly whatsappQueueController: WhatsappQueueController,
  ) {}

  @Mutation(() => WhatsappQueue, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async whatsappQueueCreateOne(
    @Args()
    whatsappQueueCreateArgs: CreateOneWhatsappQueueArgs,
    @Relations() relations: WhatsappQueueSelect,
  ): Promise<WhatsappQueue | void> {
    return await this.whatsappQueueController.createOne({
      ...whatsappQueueCreateArgs,
      select: relations.select,
    });
  }

  @Mutation(() => BatchPayload, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async whatsappQueueCreateMany(
    @Args()
    createManyWhatsappQueueArgs: CreateManyWhatsappQueueArgs,
  ) {
    return await this.whatsappQueueController.createMany(
      createManyWhatsappQueueArgs,
    );
  }

  @Query(() => WhatsappQueue, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  whatsappQueueFindOne(
    @Args()
    whatsappQueueFindUniqueArgs: FindUniqueWhatsappQueueArgs,
    @Relations() relations: WhatsappQueueSelect,
  ): Promise<WhatsappQueue | void> {
    return this.whatsappQueueController.findOne({
      ...whatsappQueueFindUniqueArgs,
      select: relations.select,
    });
  }

  @Query(() => [WhatsappQueue], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  whatsappQueueFindMany(
    @Args() whatsappQueueFindManyArgs: FindManyWhatsappQueueArgs,
    @Relations() relations: WhatsappQueueSelect,
  ) {
    return this.whatsappQueueController.findMany({
      ...whatsappQueueFindManyArgs,
      select: relations.select,
    });
  }

  @Query(() => WhatsappQueue, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  whatsappQueueFindFirst(
    @Args()
    findFirstWhatsappQueueArgs: FindFirstWhatsappQueueArgs,
    @Relations() relations: WhatsappQueueSelect,
  ): Promise<WhatsappQueue | void> {
    return this.whatsappQueueController.findFirst({
      ...findFirstWhatsappQueueArgs,
      select: relations.select,
    });
  }

  @Mutation(() => WhatsappQueue, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async whatsappQueueUpdateOne(
    @Args() whatsappQueueUpdateOneArgs: UpdateOneWhatsappQueueArgs,
    @Relations() relations: WhatsappQueueSelect,
  ) {
    return this.whatsappQueueController.updateOne({
      ...replaceNullWithUndefined(whatsappQueueUpdateOneArgs),
      select: relations.select,
    });
  }

  @Mutation(() => BatchPayload, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async whatsappQueueUpdateMany(
    @Args() updateManyWhatsappQueueArgs: UpdateManyWhatsappQueueArgs,
  ) {
    return this.whatsappQueueController.updateMany(updateManyWhatsappQueueArgs);
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  async whatsappQueueDelete(
    @Args() deleteOneWhatsappQueueArgs: DeleteOneWhatsappQueueArgs,
    @Relations() relations: WhatsappQueueSelect,
  ) {
    return this.whatsappQueueController.delete({
      ...deleteOneWhatsappQueueArgs,
      select: relations.select,
    });
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  async whatsappQueueDeleteMany(
    @Args() deleteManyWhatsappQueueArgs: DeleteManyWhatsappQueueArgs,
  ) {
    return this.whatsappQueueController.deleteMany(deleteManyWhatsappQueueArgs);
  }

  @Query(() => AggregateWhatsappQueue, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  whatsappQueueAggregate(
    @Args() whatsappQueueAggregateArgs: WhatsappQueueAggregateArgs,
  ) {
    return this.whatsappQueueController.aggregate(whatsappQueueAggregateArgs);
  }

  @Query(() => Float, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  whatsappQueueCount(
    @Args() whatsappQueueCountAggregateInput: FindManyWhatsappQueueArgs,
  ) {
    return this.whatsappQueueController.count(whatsappQueueCountAggregateInput);
  }
}

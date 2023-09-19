// @ts-nocheck
import { Resolver, Query, Mutation, Args, Float } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import {
  AggregateEmailQueue,
  CreateManyEmailQueueArgs,
  CreateOneEmailQueueArgs,
  DeleteManyEmailQueueArgs,
  DeleteOneEmailQueueArgs,
  FindFirstEmailQueueArgs,
  FindManyEmailQueueArgs,
  FindUniqueEmailQueueArgs,
  EmailQueue,
  EmailQueueAggregateArgs,
  UpdateManyEmailQueueArgs,
  UpdateOneEmailQueueArgs,
} from 'src/@generated';
import { replaceNullWithUndefined } from 'src/utils/replace-null-with-undefined.function';
import BatchPayload from 'src/model/batch-payload.model';
import { EmailQueueController } from './email-queue.controller';

interface EmailQueueSelect {
  select: Prisma.EmailQueueSelect;
}

@Resolver(() => EmailQueue)
export class EmailQueueResolver {
  constructor(private readonly emailQueueController: EmailQueueController) {}

  @Mutation(() => EmailQueue, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async emailQueueCreateOne(
    @Args()
    emailQueueCreateArgs: CreateOneEmailQueueArgs,
    @Relations() relations: EmailQueueSelect,
  ): Promise<EmailQueue | void> {
    return await this.emailQueueController.createOne({
      ...emailQueueCreateArgs,
      select: relations.select,
    });
  }

  @Mutation(() => BatchPayload, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async emailQueueCreateMany(
    @Args()
    createManyEmailQueueArgs: CreateManyEmailQueueArgs,
  ) {
    return await this.emailQueueController.createMany(createManyEmailQueueArgs);
  }

  @Query(() => EmailQueue, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  emailQueueFindOne(
    @Args()
    emailQueueFindUniqueArgs: FindUniqueEmailQueueArgs,
    @Relations() relations: EmailQueueSelect,
  ): Promise<EmailQueue | void> {
    return this.emailQueueController.findOne({
      ...emailQueueFindUniqueArgs,
      select: relations.select,
    });
  }

  @Query(() => [EmailQueue], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  emailQueueFindMany(
    @Args() emailQueueFindManyArgs: FindManyEmailQueueArgs,
    @Relations() relations: EmailQueueSelect,
  ) {
    return this.emailQueueController.findMany({
      ...emailQueueFindManyArgs,
      select: relations.select,
    });
  }

  @Query(() => EmailQueue, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  emailQueueFindFirst(
    @Args()
    findFirstEmailQueueArgs: FindFirstEmailQueueArgs,
    @Relations() relations: EmailQueueSelect,
  ): Promise<EmailQueue | void> {
    return this.emailQueueController.findFirst({
      ...findFirstEmailQueueArgs,
      select: relations.select,
    });
  }

  @Mutation(() => EmailQueue, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async emailQueueUpdateOne(
    @Args() emailQueueUpdateOneArgs: UpdateOneEmailQueueArgs,
    @Relations() relations: EmailQueueSelect,
  ) {
    return this.emailQueueController.updateOne({
      ...replaceNullWithUndefined(emailQueueUpdateOneArgs),
      select: relations.select,
    });
  }

  @Mutation(() => BatchPayload, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async emailQueueUpdateMany(
    @Args() updateManyEmailQueueArgs: UpdateManyEmailQueueArgs,
  ) {
    return this.emailQueueController.updateMany(updateManyEmailQueueArgs);
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  async emailQueueDelete(
    @Args() deleteOneEmailQueueArgs: DeleteOneEmailQueueArgs,
    @Relations() relations: EmailQueueSelect,
  ) {
    return this.emailQueueController.delete({
      ...deleteOneEmailQueueArgs,
      select: relations.select,
    });
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  async emailQueueDeleteMany(
    @Args() deleteManyEmailQueueArgs: DeleteManyEmailQueueArgs,
  ) {
    return this.emailQueueController.deleteMany(deleteManyEmailQueueArgs);
  }

  @Query(() => AggregateEmailQueue, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  emailQueueAggregate(
    @Args() emailQueueAggregateArgs: EmailQueueAggregateArgs,
  ) {
    return this.emailQueueController.aggregate(emailQueueAggregateArgs);
  }

  @Query(() => Float, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  emailQueueCount(
    @Args() emailQueueCountAggregateInput: FindManyEmailQueueArgs,
  ) {
    return this.emailQueueController.count(emailQueueCountAggregateInput);
  }
}

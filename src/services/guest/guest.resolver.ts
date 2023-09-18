// @ts-nocheck
import { Resolver, Query, Mutation, Args, Float } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import {
  AggregateGuest,
  CreateManyGuestArgs,
  CreateOneGuestArgs,
  DeleteManyGuestArgs,
  DeleteOneGuestArgs,
  FindFirstGuestArgs,
  FindManyGuestArgs,
  FindUniqueGuestArgs,
  Guest,
  GuestAggregateArgs,
  UpdateManyGuestArgs,
  UpdateOneGuestArgs,
} from 'src/@generated';
import { GuestController } from './guest.controller';
import { replaceNullWithUndefined } from 'src/utils/replace-null-with-undefined.function';
import BatchPayload from 'src/model/batch-payload.model';

interface GuestSelect {
  select: Prisma.GuestSelect;
}

@Resolver(() => Guest)
export class GuestResolver {
  constructor(private readonly guestController: GuestController) {}

  @Mutation(() => Guest, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async guestCreateOne(
    @Args()
    guestCreateArgs: CreateOneGuestArgs,
    @Relations() relations: GuestSelect,
  ): Promise<Guest | void> {
    return await this.guestController.createOne({
      ...guestCreateArgs,
      select: relations.select,
    });
  }

  @Mutation(() => BatchPayload, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async guestCreateMany(
    @Args()
    createManyGuestArgs: CreateManyGuestArgs,
  ) {
    return await this.guestController.createMany(createManyGuestArgs);
  }

  @Query(() => Guest, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  guestFindOne(
    @Args()
    guestFindUniqueArgs: FindUniqueGuestArgs,
    @Relations() relations: GuestSelect,
  ): Promise<Guest | void> {
    return this.guestController.findOne({
      ...guestFindUniqueArgs,
      select: relations.select,
    });
  }

  @Query(() => [Guest], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  guestFindMany(
    @Args() guestFindManyArgs: FindManyGuestArgs,
    @Relations() relations: GuestSelect,
  ) {
    return this.guestController.findMany({
      ...guestFindManyArgs,
      select: relations.select,
    });
  }

  @Query(() => Guest, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  guestFindFirst(
    @Args()
    findFirstGuestArgs: FindFirstGuestArgs,
    @Relations() relations: GuestSelect,
  ): Promise<Guest | void> {
    return this.guestController.findFirst({
      ...findFirstGuestArgs,
      select: relations.select,
    });
  }

  @Mutation(() => Guest, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async guestUpdateOne(
    @Args() guestUpdateOneArgs: UpdateOneGuestArgs,
    @Relations() relations: GuestSelect,
  ) {
    return this.guestController.updateOne({
      ...replaceNullWithUndefined(guestUpdateOneArgs),
      select: relations.select,
    });
  }

  @Mutation(() => Guest, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async guestUpdateMany(@Args() updateManyGuestArgs: UpdateManyGuestArgs) {
    return this.guestController.updateMany(updateManyGuestArgs);
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  async guestDelete(
    @Args() deleteOneGuestArgs: DeleteOneGuestArgs,
    @Relations() relations: GuestSelect,
  ) {
    return this.guestController.delete({
      ...deleteOneGuestArgs,
      select: relations.select,
    });
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  async guestDeleteMany(@Args() deleteManyGuestArgs: DeleteManyGuestArgs) {
    return this.guestController.deleteMany(deleteManyGuestArgs);
  }

  @Query(() => AggregateGuest, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  guestAggregate(@Args() guestAggregateArgs: GuestAggregateArgs) {
    return this.guestController.aggregate(guestAggregateArgs);
  }

  @Query(() => Float, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  guestCount(@Args() guestCountAggregateInput: FindManyGuestArgs) {
    return this.guestController.count(guestCountAggregateInput);
  }
}

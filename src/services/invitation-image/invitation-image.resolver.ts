// @ts-noscheck
import { Resolver, Query, Mutation, Args, Float } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Relations } from 'src/utils/relations.decorator';
import {
  AggregateInvitationImage,
  CreateManyInvitationImageArgs,
  CreateOneInvitationImageArgs,
  DeleteManyInvitationImageArgs,
  DeleteOneInvitationImageArgs,
  FindFirstInvitationImageArgs,
  FindManyInvitationImageArgs,
  FindUniqueInvitationImageArgs,
  InvitationImage,
  InvitationImageAggregateArgs,
  UpdateManyInvitationImageArgs,
  UpdateOneInvitationImageArgs,
} from 'src/@generated';
import { replaceNullWithUndefined } from 'src/utils/replace-null-with-undefined.function';
import BatchPayload from 'src/model/batch-payload.model';
import { InvitationImageController } from './invitation-image.controller';

interface InvitationImageSelect {
  select: Prisma.InvitationImageSelect;
}

@Resolver(() => InvitationImage)
export class InvitationImageResolver {
  constructor(
    private readonly invitationImageController: InvitationImageController,
  ) {}

  @Mutation(() => InvitationImage, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async invitationImageCreateOne(
    @Args()
    invitationImageCreateArgs: CreateOneInvitationImageArgs,
    @Relations() relations: InvitationImageSelect,
  ): Promise<InvitationImage | void> {
    return await this.invitationImageController.createOne({
      ...invitationImageCreateArgs,
      select: relations.select,
    });
  }

  @Mutation(() => BatchPayload, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async invitationImageCreateMany(
    @Args()
    createManyInvitationImageArgs: CreateManyInvitationImageArgs,
  ) {
    return await this.invitationImageController.createMany(
      createManyInvitationImageArgs,
    );
  }

  @Query(() => InvitationImage, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  invitationImageFindOne(
    @Args()
    invitationImageFindUniqueArgs: FindUniqueInvitationImageArgs,
    @Relations() relations: InvitationImageSelect,
  ): Promise<InvitationImage | void> {
    return this.invitationImageController.findOne({
      ...invitationImageFindUniqueArgs,
      select: relations.select,
    });
  }

  @Query(() => [InvitationImage], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  invitationImageFindMany(
    @Args() invitationImageFindManyArgs: FindManyInvitationImageArgs,
    @Relations() relations: InvitationImageSelect,
  ) {
    return this.invitationImageController.findMany({
      ...invitationImageFindManyArgs,
      select: relations.select,
    });
  }

  @Query(() => InvitationImage, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  invitationImageFindFirst(
    @Args()
    findFirstInvitationImageArgs: FindFirstInvitationImageArgs,
    @Relations() relations: InvitationImageSelect,
  ): Promise<InvitationImage | void> {
    return this.invitationImageController.findFirst({
      ...findFirstInvitationImageArgs,
      select: relations.select,
    });
  }

  @Mutation(() => InvitationImage, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async invitationImageUpdateOne(
    @Args() invitationImageUpdateOneArgs: UpdateOneInvitationImageArgs,
    @Relations() relations: InvitationImageSelect,
  ) {
    return this.invitationImageController.updateOne({
      ...replaceNullWithUndefined(invitationImageUpdateOneArgs),
      select: relations.select,
    });
  }

  @Mutation(() => BatchPayload, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  async invitationImageUpdateMany(
    @Args() updateManyInvitationImageArgs: UpdateManyInvitationImageArgs,
  ) {
    return this.invitationImageController.updateMany(
      updateManyInvitationImageArgs,
    );
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  async invitationImageDelete(
    @Args() deleteOneInvitationImageArgs: DeleteOneInvitationImageArgs,
    @Relations() relations: InvitationImageSelect,
  ) {
    return this.invitationImageController.delete({
      ...deleteOneInvitationImageArgs,
      select: relations.select,
    });
  }

  @Mutation(() => Boolean, {
    nullable: false,
    description: 'Deskripsinya ada disini loh',
  })
  async invitationImageDeleteMany(
    @Args() deleteManyInvitationImageArgs: DeleteManyInvitationImageArgs,
  ) {
    return this.invitationImageController.deleteMany(
      deleteManyInvitationImageArgs,
    );
  }

  @Query(() => AggregateInvitationImage, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  invitationImageAggregate(
    @Args() invitationImageAggregateArgs: InvitationImageAggregateArgs,
  ) {
    return this.invitationImageController.aggregate(
      invitationImageAggregateArgs,
    );
  }

  @Query(() => Float, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  invitationImageCount(
    @Args() invitationImageCountAggregateInput: FindManyInvitationImageArgs,
  ) {
    return this.invitationImageController.count(
      invitationImageCountAggregateInput,
    );
  }

  @Query(() => Boolean, {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  invitationImageResend() {
    return this.invitationImageController.resend();
  }

  @Query(() => [String], {
    nullable: true,
    description: 'Deskripsinya ada disini loh',
  })
  qrCodeScan(
    @Args({ type: () => String, name: 'guestIds' })
    guestId: string[],
  ): Promise<string> {
    return this.invitationImageController.zipManyImages(guestId);
  }
}

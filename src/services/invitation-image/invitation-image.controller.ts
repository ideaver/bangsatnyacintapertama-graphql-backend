import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { InvitationImageService } from './invitation-image.service';

@Injectable()
export class InvitationImageController {
  constructor(
    private readonly invitationImageService: InvitationImageService,
  ) {}

  async createOne(invitationImageCreateArgs: Prisma.InvitationImageCreateArgs) {
    return await this.invitationImageService.createOne(
      invitationImageCreateArgs,
    );
  }

  async createMany(
    invitationImageCreateManyArgs: Prisma.InvitationImageCreateManyArgs,
  ) {
    return await this.invitationImageService.createMany(
      invitationImageCreateManyArgs,
    );
  }

  async findOne(
    invitationImageFindUniqueArgs: Prisma.InvitationImageFindUniqueArgs,
  ) {
    return await this.invitationImageService.findOne(
      invitationImageFindUniqueArgs,
    );
  }

  async findMany(
    invitationImageFindManyArgs: Prisma.InvitationImageFindManyArgs,
  ) {
    return await this.invitationImageService.findMany(
      invitationImageFindManyArgs,
    );
  }

  async findFirst(
    invitationImageFindFirstArgs: Prisma.InvitationImageFindFirstArgs,
  ) {
    return await this.invitationImageService.findFirst(
      invitationImageFindFirstArgs,
    );
  }

  async updateOne(
    invitationImageUpdateOneArgs: Prisma.InvitationImageUpdateArgs,
  ) {
    return await this.invitationImageService.updateOne(
      invitationImageUpdateOneArgs,
    );
  }

  async updateMany(
    invitationImageUpdateManyArgs: Prisma.InvitationImageUpdateManyArgs,
  ) {
    return await this.invitationImageService.updateMany(
      invitationImageUpdateManyArgs,
    );
  }

  async delete(invitationImageDeleteArgs: Prisma.InvitationImageDeleteArgs) {
    return await this.invitationImageService.delete(invitationImageDeleteArgs);
  }

  async deleteMany(
    invitationImageDeleteManyArgs: Prisma.InvitationImageDeleteManyArgs,
  ) {
    return await this.invitationImageService.deleteMany(
      invitationImageDeleteManyArgs,
    );
  }

  async aggregate(
    invitationImageAggregateArgs: Prisma.InvitationImageAggregateArgs,
  ) {
    return await this.invitationImageService.aggregate(
      invitationImageAggregateArgs,
    );
  }

  async count(invitationImageCountArgs: Prisma.InvitationImageCountArgs) {
    return await this.invitationImageService.count(invitationImageCountArgs);
  }
}

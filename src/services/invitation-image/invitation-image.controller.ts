import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { InvitationImageService } from './invitation-image.service';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { InvitationImageEvent } from 'src/event-listeners/enum/invitation-image-event.enum ';

@Injectable()
export class InvitationImageController {
  constructor(
    private readonly invitationImageService: InvitationImageService,
    private eventEmitter: EventEmitter2,
  ) {}

  async createOne(invitationImageCreateArgs: Prisma.InvitationImageCreateArgs) {
    return await this.invitationImageService.createOne(
      invitationImageCreateArgs,
    );
  }

  async createMany(
    invitationImageCreateManyArgs: Prisma.InvitationImageCreateManyArgs,
  ) {
    await this.invitationImageService
      .createMany(invitationImageCreateManyArgs)
      .then((res) => {
        this.eventEmitter.emit(InvitationImageEvent.CreatedMany);
        return res;
      });
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

  async resend() {
    this.eventEmitter.emit(InvitationImageEvent.Resend);
    return true;
  }
}

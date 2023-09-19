import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { UserService } from './user.service';

@Injectable()
export class UserController {
  constructor(private readonly userService: UserService) {}

  async createOne(userCreateArgs: Prisma.UserCreateArgs) {
    return await this.userService.createOne(userCreateArgs);
  }

  async createMany(userCreateManyArgs: Prisma.UserCreateManyArgs) {
    return await this.userService.createMany(userCreateManyArgs);
  }

  async findOne(userFindUniqueArgs: Prisma.UserFindUniqueArgs) {
    return await this.userService.findOne(userFindUniqueArgs);
  }

  async findMany(userFindManyArgs: Prisma.UserFindManyArgs) {
    return await this.userService.findMany(userFindManyArgs);
  }

  async findFirst(userFindFirstArgs: Prisma.UserFindFirstArgs) {
    return await this.userService.findFirst(userFindFirstArgs);
  }

  async updateOne(userUpdateOneArgs: Prisma.UserUpdateArgs) {
    return await this.userService.updateOne(userUpdateOneArgs);
  }

  async updateMany(userUpdateManyArgs: Prisma.UserUpdateManyArgs) {
    return await this.userService.updateMany(userUpdateManyArgs);
  }

  async delete(userDeleteArgs: Prisma.UserDeleteArgs) {
    return await this.userService.delete(userDeleteArgs);
  }

  async deleteMany(userDeleteManyArgs: Prisma.UserDeleteManyArgs) {
    return await this.userService.deleteMany(userDeleteManyArgs);
  }

  async aggregate(userAggregateArgs: Prisma.UserAggregateArgs) {
    return await this.userService.aggregate(userAggregateArgs);
  }

  async count(userCountArgs: Prisma.UserCountArgs) {
    return await this.userService.count(userCountArgs);
  }

  async findManyWhereRoleIsGuestAndLatestEmailOrWhatsappStatusEqualsWaiting() {
    // First, find users with pending email queue status
    const usersWithPendingEmailQueue = await this.findMany({
      where: {
        deletedAt: { not: { equals: null } },
        guestInfo: {
          emailQueue: {
            some: {
              status: 'WAITING',
            },
          },
        },
      },
      include: {
        guestInfo: {
          select: {
            emailQueue: {
              orderBy: {
                createdAt: 'desc',
              },
              take: 1,
              where: {
                status: 'WAITING',
              },
            },
          },
        },
      },
    });

    // Then, find users with pending WhatsApp queue status
    const usersWithPendingWhatsappQueue = await this.findMany({
      where: {
        deletedAt: { not: { equals: null } },
        guestInfo: {
          whatsappQueue: {
            some: {
              status: 'WAITING',
            },
          },
        },
      },
      include: {
        guestInfo: {
          select: {
            whatsappQueue: {
              orderBy: {
                createdAt: 'desc',
              },
              take: 1,
              where: {
                status: 'WAITING',
              },
            },
          },
        },
      },
    });

    // Now, combine the results from both queries
    return usersWithPendingEmailQueue.concat(usersWithPendingWhatsappQueue);

    // The `combinedResults` array contains users with the latest pending queue status.
  }
}

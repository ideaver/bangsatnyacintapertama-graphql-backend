import { faker } from '@faker-js/faker';
import { ConfirmationStatus, Prisma, PrismaClient } from '@prisma/client';

import * as bcrypt from 'bcrypt';
import { fakeUser, fakeGuest } from './fake-data';
import { WhatsappQueue } from 'src/@generated';

const prisma = new PrismaClient();

export enum Period {
  WEEKLY = 'weekly',
  MONTHLY = 'monthly',
  YEARLY = 'yearly',
}

async function main() {
  console.log('Start seeding ...');

  const abc: WhatsappQueue[] = await prisma.whatsappQueue.findMany({
    include: { guest: true },
    where: { status: { equals: 'QUEUE' } },
  });

  console.log(abc);

  // // create fake users
  // const numberOfUsers: number = 100;
  // const users: Prisma.UserCreateManyInput[] = [];
  // const guests: Prisma.GuestCreateManyInput[] = [];
  // const uuids: string[] = [];

  // console.log('creating uuids');
  // for (let i = 0; i < numberOfUsers; i++) {
  //   const id = faker.datatype.uuid();
  //   uuids.push(id);
  // }

  // console.log('creating users');
  // for (let i = 0; i < numberOfUsers; i++) {
  //   users.push({
  //     id: uuids[i],
  //     ...fakeUser(),
  //     guestInfoId: uuids[i],
  //     password: await bcrypt.hash('login123456', 10),
  //   });
  // }

  // console.log('creating guests');
  // for (let i = 0; i < numberOfUsers; i++) {
  //   guests.push({
  //     userId: uuids[i],
  //     category1: faker.lorem.words(5),
  //     category2: faker.lorem.words(5),
  //     description: faker.lorem.words(5),
  //     personInCharge: faker.name.firstName(),
  //     class: 'VIP',
  //     seat: faker.datatype.number(100).toString(),
  //     confirmationStatus: faker.helpers.arrayElement([
  //       ConfirmationStatus.CONFIRMED,
  //       ConfirmationStatus.REJECTED,
  //       ConfirmationStatus.UNCONFIRMED,
  //     ] as const),
  //   });
  // }

  // console.log(
  //   await prisma.user.createMany({
  //     data: users,
  //   }),
  // );

  // console.log(
  //   await prisma.guest.createMany({
  //     data: guests,
  //   }),
  // );

  console.log('Seeding finished.');
}

main()
  .catch((error) => {
    console.error(error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

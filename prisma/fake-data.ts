import { UserRole, ConfirmationStatus, QueueStatus } from '@prisma/client';
import { faker } from '@faker-js/faker';



export function fakeUser() {
  return {
    fullName: faker.lorem.words(5),
    email: faker.internet.email(),
    password: faker.lorem.words(5),
    whatsapp: faker.lorem.words(5),
    updatedAt: faker.datatype.datetime(),
    deletedAt: undefined,
    role: faker.helpers.arrayElement([UserRole.ADMIN, UserRole.SUPERUSER, UserRole.GUEST] as const),
    guestInfoId: undefined,
  };
}
export function fakeUserComplete() {
  return {
    id: faker.datatype.uuid(),
    fullName: faker.lorem.words(5),
    email: faker.internet.email(),
    password: faker.lorem.words(5),
    whatsapp: faker.lorem.words(5),
    createdAt: new Date(),
    updatedAt: faker.datatype.datetime(),
    deletedAt: undefined,
    role: faker.helpers.arrayElement([UserRole.ADMIN, UserRole.SUPERUSER, UserRole.GUEST] as const),
    guestInfoId: undefined,
  };
}
export function fakeGuest() {
  return {
    category1: undefined,
    category2: undefined,
    personInCharge: undefined,
    class: undefined,
    seat: undefined,
    rejectionReason: undefined,
    description: undefined,
    checkInAt: undefined,
  };
}
export function fakeGuestComplete() {
  return {
    userId: faker.datatype.uuid(),
    category1: undefined,
    category2: undefined,
    personInCharge: undefined,
    class: undefined,
    seat: undefined,
    rejectionReason: undefined,
    description: undefined,
    checkInAt: undefined,
    confirmationStatus: ConfirmationStatus.UNCONFIRMED,
  };
}
export function fakeemailQueueComplete() {
  return {
    id: faker.datatype.number(),
    createdAt: new Date(),
    status: QueueStatus.WAITING,
    guestId: faker.datatype.uuid(),
  };
}
export function fakewhatsappQueueComplete() {
  return {
    id: faker.datatype.number(),
    createdAt: new Date(),
    status: QueueStatus.WAITING,
    guestId: faker.datatype.uuid(),
  };
}

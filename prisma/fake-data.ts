import { UserRole, ConfirmationStatus, QueueStatus } from '@prisma/client';
import { faker } from '@faker-js/faker';



export function fakeUser() {
  return {
    fullName: faker.lorem.words(5),
    email: undefined,
    password: faker.lorem.words(5),
    whatsapp: undefined,
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
    email: undefined,
    password: faker.lorem.words(5),
    whatsapp: undefined,
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
    parties: 1,
    confirmationStatus: ConfirmationStatus.UNCONFIRMED,
  };
}
export function fakeEmailQueueComplete() {
  return {
    id: faker.datatype.number(),
    createdAt: new Date(),
    status: QueueStatus.WAITING,
    guestId: faker.datatype.uuid(),
  };
}
export function fakeWhatsappQueueComplete() {
  return {
    id: faker.datatype.number(),
    createdAt: new Date(),
    status: QueueStatus.WAITING,
    guestId: faker.datatype.uuid(),
  };
}
export function fakeQrCode() {
  return {
    path: faker.lorem.words(5),
    scannedAt: undefined,
  };
}
export function fakeQrCodeComplete() {
  return {
    path: faker.lorem.words(5),
    scannedAt: undefined,
    createdAt: new Date(),
    guestId: faker.datatype.uuid(),
    scannedByUserId: undefined,
  };
}

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
  };
}
export function fakeGuest() {
  return {
    source: undefined,
    invitationName: undefined,
    contactList: undefined,
    category: undefined,
    class: undefined,
    seat: undefined,
    studio: undefined,
    rejectionReason: undefined,
  };
}
export function fakeGuestComplete() {
  return {
    userId: faker.datatype.uuid(),
    source: undefined,
    invitationName: undefined,
    contactList: undefined,
    category: undefined,
    class: undefined,
    seat: undefined,
    studio: undefined,
    rejectionReason: undefined,
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
    id: faker.datatype.number(),
    path: faker.lorem.words(5),
    scannedAt: undefined,
    createdAt: new Date(),
    raceConditionValue: 0,
    guestId: faker.datatype.uuid(),
    scannedByUserId: undefined,
  };
}

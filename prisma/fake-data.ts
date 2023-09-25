import { UserRole, ConfirmationStatus, QueueStatus } from '@prisma/client';
import { faker } from '@faker-js/faker';



export function fakeUser() {
  return {
    fullName: faker.lorem.words(5),
    email: undefined,
    password: undefined,
    updatedAt: undefined,
    deletedAt: undefined,
    role: faker.helpers.arrayElement([UserRole.ADMIN, UserRole.SUPERUSER, UserRole.GUEST] as const),
  };
}
export function fakeUserComplete() {
  return {
    id: faker.datatype.uuid(),
    fullName: faker.lorem.words(5),
    email: undefined,
    password: undefined,
    createdAt: new Date(),
    updatedAt: undefined,
    deletedAt: undefined,
    role: faker.helpers.arrayElement([UserRole.ADMIN, UserRole.SUPERUSER, UserRole.GUEST] as const),
  };
}
export function fakeGuest() {
  return {
    source: undefined,
    invitationName: faker.lorem.words(5),
    contactList: undefined,
    whatsapp: undefined,
    category: undefined,
    class: undefined,
    seat: undefined,
    studio: undefined,
    showTime: undefined,
    rejectionReason: undefined,
    updatedAt: undefined,
    deletedAt: undefined,
  };
}
export function fakeGuestComplete() {
  return {
    id: faker.datatype.uuid(),
    source: undefined,
    invitationName: faker.lorem.words(5),
    contactList: undefined,
    whatsapp: undefined,
    category: undefined,
    class: undefined,
    seat: undefined,
    studio: undefined,
    showTime: undefined,
    rejectionReason: undefined,
    createdAt: new Date(),
    updatedAt: undefined,
    deletedAt: undefined,
    groupMemberOfId: undefined,
    confirmationStatus: ConfirmationStatus.UNCONFIRMED,
  };
}
export function fakeWhatsappStatus() {
  return {
    message: undefined,
  };
}
export function fakeWhatsappStatusComplete() {
  return {
    id: faker.datatype.number(),
    refId: '[object Object]',
    message: undefined,
    createdAt: new Date(),
    status: QueueStatus.QUEUE,
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
export function fakeInvitationImage() {
  return {
    path: faker.lorem.words(5),
  };
}
export function fakeInvitationImageComplete() {
  return {
    id: faker.datatype.uuid(),
    path: faker.lorem.words(5),
    createdAt: new Date(),
    guestId: faker.datatype.uuid(),
  };
}

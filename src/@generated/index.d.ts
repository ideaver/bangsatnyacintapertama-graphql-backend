import { Prisma } from '@prisma/client';
export declare enum WhatsappStatusScalarFieldEnum {
    id = "id",
    refId = "refId",
    message = "message",
    createdAt = "createdAt",
    status = "status",
    guestId = "guestId"
}
export declare enum UserScalarFieldEnum {
    id = "id",
    fullName = "fullName",
    email = "email",
    password = "password",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    deletedAt = "deletedAt",
    role = "role"
}
export declare enum QrCodeScalarFieldEnum {
    id = "id",
    path = "path",
    scannedAt = "scannedAt",
    createdAt = "createdAt",
    raceConditionValue = "raceConditionValue",
    guestId = "guestId",
    scannedByUserId = "scannedByUserId"
}
export declare enum UserRole {
    ADMIN = "ADMIN",
    SUPERUSER = "SUPERUSER",
    GUEST = "GUEST"
}
export declare enum TransactionIsolationLevel {
    ReadUncommitted = "ReadUncommitted",
    ReadCommitted = "ReadCommitted",
    RepeatableRead = "RepeatableRead",
    Serializable = "Serializable"
}
export declare enum SortOrder {
    asc = "asc",
    desc = "desc"
}
export declare enum QueueStatus {
    QUEUE = "QUEUE",
    SENT = "SENT",
    DELIVERED = "DELIVERED",
    READ = "READ",
    ABORT = "ABORT",
    FAILED = "FAILED"
}
export declare enum NullsOrder {
    first = "first",
    last = "last"
}
export declare enum ConfirmationStatus {
    UNCONFIRMED = "UNCONFIRMED",
    CONFIRMED = "CONFIRMED",
    REJECTED = "REJECTED"
}
export declare enum InvitationImageScalarFieldEnum {
    id = "id",
    path = "path",
    createdAt = "createdAt",
    guestId = "guestId"
}
export declare enum GuestScalarFieldEnum {
    id = "id",
    source = "source",
    invitationName = "invitationName",
    contactList = "contactList",
    whatsapp = "whatsapp",
    category = "category",
    'class' = "class",
    seat = "seat",
    studio = "studio",
    showTime = "showTime",
    rejectionReason = "rejectionReason",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    deletedAt = "deletedAt",
    groupMemberOfId = "groupMemberOfId",
    confirmationStatus = "confirmationStatus"
}
export declare class AggregateGuest {
    _count?: InstanceType<typeof GuestCountAggregate>;
    _avg?: InstanceType<typeof GuestAvgAggregate>;
    _sum?: InstanceType<typeof GuestSumAggregate>;
    _min?: InstanceType<typeof GuestMinAggregate>;
    _max?: InstanceType<typeof GuestMaxAggregate>;
}
export declare class CreateManyGuestArgs {
    data: Array<GuestCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOneGuestArgs {
    data: InstanceType<typeof GuestCreateInput>;
}
export declare class DeleteManyGuestArgs {
    where?: InstanceType<typeof GuestWhereInput>;
}
export declare class DeleteOneGuestArgs {
    where: Prisma.AtLeast<GuestWhereUniqueInput, 'id'>;
}
export declare class FindFirstGuestOrThrowArgs {
    where?: InstanceType<typeof GuestWhereInput>;
    orderBy?: Array<GuestOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<GuestWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof GuestScalarFieldEnum>;
}
export declare class FindFirstGuestArgs {
    where?: InstanceType<typeof GuestWhereInput>;
    orderBy?: Array<GuestOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<GuestWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof GuestScalarFieldEnum>;
}
export declare class FindManyGuestArgs {
    where?: InstanceType<typeof GuestWhereInput>;
    orderBy?: Array<GuestOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<GuestWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof GuestScalarFieldEnum>;
}
export declare class FindUniqueGuestOrThrowArgs {
    where: Prisma.AtLeast<GuestWhereUniqueInput, 'id'>;
}
export declare class FindUniqueGuestArgs {
    where: Prisma.AtLeast<GuestWhereUniqueInput, 'id'>;
}
export declare class GuestAggregateArgs {
    where?: InstanceType<typeof GuestWhereInput>;
    orderBy?: Array<GuestOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<GuestWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof GuestCountAggregateInput>;
    _avg?: InstanceType<typeof GuestAvgAggregateInput>;
    _sum?: InstanceType<typeof GuestSumAggregateInput>;
    _min?: InstanceType<typeof GuestMinAggregateInput>;
    _max?: InstanceType<typeof GuestMaxAggregateInput>;
}
export declare class GuestAvgAggregateInput {
    whatsapp?: true;
}
export declare class GuestAvgAggregate {
    whatsapp?: number;
}
export declare class GuestAvgOrderByAggregateInput {
    whatsapp?: keyof typeof SortOrder;
}
export declare class GuestCountAggregateInput {
    id?: true;
    source?: true;
    invitationName?: true;
    contactList?: true;
    whatsapp?: true;
    category?: true;
    class?: true;
    seat?: true;
    studio?: true;
    showTime?: true;
    rejectionReason?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
    groupMemberOfId?: true;
    confirmationStatus?: true;
    _all?: true;
}
export declare class GuestCountAggregate {
    id: number;
    source: number;
    invitationName: number;
    contactList: number;
    whatsapp: number;
    category: number;
    class: number;
    seat: number;
    studio: number;
    showTime: number;
    rejectionReason: number;
    createdAt: number;
    updatedAt: number;
    deletedAt: number;
    groupMemberOfId: number;
    confirmationStatus: number;
    _all: number;
}
export declare class GuestCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    source?: keyof typeof SortOrder;
    invitationName?: keyof typeof SortOrder;
    contactList?: keyof typeof SortOrder;
    whatsapp?: keyof typeof SortOrder;
    category?: keyof typeof SortOrder;
    class?: keyof typeof SortOrder;
    seat?: keyof typeof SortOrder;
    studio?: keyof typeof SortOrder;
    showTime?: keyof typeof SortOrder;
    rejectionReason?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    deletedAt?: keyof typeof SortOrder;
    groupMemberOfId?: keyof typeof SortOrder;
    confirmationStatus?: keyof typeof SortOrder;
}
export declare class GuestCount {
    groupMembers?: number;
    whatsappStatuses?: number;
}
export declare class GuestCreateManyGroupMemberOfInputEnvelope {
    data: Array<GuestCreateManyGroupMemberOfInput>;
    skipDuplicates?: boolean;
}
export declare class GuestCreateManyGroupMemberOfInput {
    id?: string;
    source?: string;
    invitationName: string;
    contactList?: string;
    whatsapp?: number;
    category?: string;
    class?: string;
    seat?: string;
    studio?: string;
    showTime?: string;
    rejectionReason?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    confirmationStatus?: keyof typeof ConfirmationStatus;
}
export declare class GuestCreateManyInput {
    id?: string;
    source?: string;
    invitationName: string;
    contactList?: string;
    whatsapp?: number;
    category?: string;
    class?: string;
    seat?: string;
    studio?: string;
    showTime?: string;
    rejectionReason?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    groupMemberOfId?: string;
    confirmationStatus?: keyof typeof ConfirmationStatus;
}
export declare class GuestCreateNestedManyWithoutGroupMemberOfInput {
    create?: Array<GuestCreateWithoutGroupMemberOfInput>;
    connectOrCreate?: Array<GuestCreateOrConnectWithoutGroupMemberOfInput>;
    createMany?: InstanceType<typeof GuestCreateManyGroupMemberOfInputEnvelope>;
    connect?: Array<Prisma.AtLeast<GuestWhereUniqueInput, 'id'>>;
}
export declare class GuestCreateNestedOneWithoutGroupMembersInput {
    create?: InstanceType<typeof GuestCreateWithoutGroupMembersInput>;
    connectOrCreate?: InstanceType<typeof GuestCreateOrConnectWithoutGroupMembersInput>;
    connect?: Prisma.AtLeast<GuestWhereUniqueInput, 'id'>;
}
export declare class GuestCreateNestedOneWithoutInvitationImageInput {
    create?: InstanceType<typeof GuestCreateWithoutInvitationImageInput>;
    connectOrCreate?: InstanceType<typeof GuestCreateOrConnectWithoutInvitationImageInput>;
    connect?: Prisma.AtLeast<GuestWhereUniqueInput, 'id'>;
}
export declare class GuestCreateNestedOneWithoutQrcodeInput {
    create?: InstanceType<typeof GuestCreateWithoutQrcodeInput>;
    connectOrCreate?: InstanceType<typeof GuestCreateOrConnectWithoutQrcodeInput>;
    connect?: Prisma.AtLeast<GuestWhereUniqueInput, 'id'>;
}
export declare class GuestCreateNestedOneWithoutWhatsappStatusesInput {
    create?: InstanceType<typeof GuestCreateWithoutWhatsappStatusesInput>;
    connectOrCreate?: InstanceType<typeof GuestCreateOrConnectWithoutWhatsappStatusesInput>;
    connect?: Prisma.AtLeast<GuestWhereUniqueInput, 'id'>;
}
export declare class GuestCreateOrConnectWithoutGroupMemberOfInput {
    where: Prisma.AtLeast<GuestWhereUniqueInput, 'id'>;
    create: InstanceType<typeof GuestCreateWithoutGroupMemberOfInput>;
}
export declare class GuestCreateOrConnectWithoutGroupMembersInput {
    where: Prisma.AtLeast<GuestWhereUniqueInput, 'id'>;
    create: InstanceType<typeof GuestCreateWithoutGroupMembersInput>;
}
export declare class GuestCreateOrConnectWithoutInvitationImageInput {
    where: Prisma.AtLeast<GuestWhereUniqueInput, 'id'>;
    create: InstanceType<typeof GuestCreateWithoutInvitationImageInput>;
}
export declare class GuestCreateOrConnectWithoutQrcodeInput {
    where: Prisma.AtLeast<GuestWhereUniqueInput, 'id'>;
    create: InstanceType<typeof GuestCreateWithoutQrcodeInput>;
}
export declare class GuestCreateOrConnectWithoutWhatsappStatusesInput {
    where: Prisma.AtLeast<GuestWhereUniqueInput, 'id'>;
    create: InstanceType<typeof GuestCreateWithoutWhatsappStatusesInput>;
}
export declare class GuestCreateWithoutGroupMemberOfInput {
    id?: string;
    source?: string;
    invitationName: string;
    contactList?: string;
    whatsapp?: number;
    category?: string;
    class?: string;
    seat?: string;
    studio?: string;
    showTime?: string;
    rejectionReason?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    confirmationStatus?: keyof typeof ConfirmationStatus;
    groupMembers?: InstanceType<typeof GuestCreateNestedManyWithoutGroupMemberOfInput>;
    qrcode?: InstanceType<typeof QrCodeCreateNestedOneWithoutGuestInput>;
    invitationImage?: InstanceType<typeof InvitationImageCreateNestedOneWithoutGuestInput>;
    whatsappStatuses?: InstanceType<typeof WhatsappStatusCreateNestedManyWithoutGuestInput>;
}
export declare class GuestCreateWithoutGroupMembersInput {
    id?: string;
    source?: string;
    invitationName: string;
    contactList?: string;
    whatsapp?: number;
    category?: string;
    class?: string;
    seat?: string;
    studio?: string;
    showTime?: string;
    rejectionReason?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    confirmationStatus?: keyof typeof ConfirmationStatus;
    groupMemberOf?: InstanceType<typeof GuestCreateNestedOneWithoutGroupMembersInput>;
    qrcode?: InstanceType<typeof QrCodeCreateNestedOneWithoutGuestInput>;
    invitationImage?: InstanceType<typeof InvitationImageCreateNestedOneWithoutGuestInput>;
    whatsappStatuses?: InstanceType<typeof WhatsappStatusCreateNestedManyWithoutGuestInput>;
}
export declare class GuestCreateWithoutInvitationImageInput {
    id?: string;
    source?: string;
    invitationName: string;
    contactList?: string;
    whatsapp?: number;
    category?: string;
    class?: string;
    seat?: string;
    studio?: string;
    showTime?: string;
    rejectionReason?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    confirmationStatus?: keyof typeof ConfirmationStatus;
    groupMemberOf?: InstanceType<typeof GuestCreateNestedOneWithoutGroupMembersInput>;
    groupMembers?: InstanceType<typeof GuestCreateNestedManyWithoutGroupMemberOfInput>;
    qrcode?: InstanceType<typeof QrCodeCreateNestedOneWithoutGuestInput>;
    whatsappStatuses?: InstanceType<typeof WhatsappStatusCreateNestedManyWithoutGuestInput>;
}
export declare class GuestCreateWithoutQrcodeInput {
    id?: string;
    source?: string;
    invitationName: string;
    contactList?: string;
    whatsapp?: number;
    category?: string;
    class?: string;
    seat?: string;
    studio?: string;
    showTime?: string;
    rejectionReason?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    confirmationStatus?: keyof typeof ConfirmationStatus;
    groupMemberOf?: InstanceType<typeof GuestCreateNestedOneWithoutGroupMembersInput>;
    groupMembers?: InstanceType<typeof GuestCreateNestedManyWithoutGroupMemberOfInput>;
    invitationImage?: InstanceType<typeof InvitationImageCreateNestedOneWithoutGuestInput>;
    whatsappStatuses?: InstanceType<typeof WhatsappStatusCreateNestedManyWithoutGuestInput>;
}
export declare class GuestCreateWithoutWhatsappStatusesInput {
    id?: string;
    source?: string;
    invitationName: string;
    contactList?: string;
    whatsapp?: number;
    category?: string;
    class?: string;
    seat?: string;
    studio?: string;
    showTime?: string;
    rejectionReason?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    confirmationStatus?: keyof typeof ConfirmationStatus;
    groupMemberOf?: InstanceType<typeof GuestCreateNestedOneWithoutGroupMembersInput>;
    groupMembers?: InstanceType<typeof GuestCreateNestedManyWithoutGroupMemberOfInput>;
    qrcode?: InstanceType<typeof QrCodeCreateNestedOneWithoutGuestInput>;
    invitationImage?: InstanceType<typeof InvitationImageCreateNestedOneWithoutGuestInput>;
}
export declare class GuestCreateInput {
    id?: string;
    source?: string;
    invitationName: string;
    contactList?: string;
    whatsapp?: number;
    category?: string;
    class?: string;
    seat?: string;
    studio?: string;
    showTime?: string;
    rejectionReason?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    confirmationStatus?: keyof typeof ConfirmationStatus;
    groupMemberOf?: InstanceType<typeof GuestCreateNestedOneWithoutGroupMembersInput>;
    groupMembers?: InstanceType<typeof GuestCreateNestedManyWithoutGroupMemberOfInput>;
    qrcode?: InstanceType<typeof QrCodeCreateNestedOneWithoutGuestInput>;
    invitationImage?: InstanceType<typeof InvitationImageCreateNestedOneWithoutGuestInput>;
    whatsappStatuses?: InstanceType<typeof WhatsappStatusCreateNestedManyWithoutGuestInput>;
}
export declare class GuestGroupByArgs {
    where?: InstanceType<typeof GuestWhereInput>;
    orderBy?: Array<GuestOrderByWithAggregationInput>;
    by: Array<keyof typeof GuestScalarFieldEnum>;
    having?: InstanceType<typeof GuestScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof GuestCountAggregateInput>;
    _avg?: InstanceType<typeof GuestAvgAggregateInput>;
    _sum?: InstanceType<typeof GuestSumAggregateInput>;
    _min?: InstanceType<typeof GuestMinAggregateInput>;
    _max?: InstanceType<typeof GuestMaxAggregateInput>;
}
export declare class GuestGroupBy {
    id: string;
    source?: string;
    invitationName: string;
    contactList?: string;
    whatsapp?: number;
    category?: string;
    class?: string;
    seat?: string;
    studio?: string;
    showTime?: string;
    rejectionReason?: string;
    createdAt: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    groupMemberOfId?: string;
    confirmationStatus?: keyof typeof ConfirmationStatus;
    _count?: InstanceType<typeof GuestCountAggregate>;
    _avg?: InstanceType<typeof GuestAvgAggregate>;
    _sum?: InstanceType<typeof GuestSumAggregate>;
    _min?: InstanceType<typeof GuestMinAggregate>;
    _max?: InstanceType<typeof GuestMaxAggregate>;
}
export declare class GuestListRelationFilter {
    every?: InstanceType<typeof GuestWhereInput>;
    some?: InstanceType<typeof GuestWhereInput>;
    none?: InstanceType<typeof GuestWhereInput>;
}
export declare class GuestMaxAggregateInput {
    id?: true;
    source?: true;
    invitationName?: true;
    contactList?: true;
    whatsapp?: true;
    category?: true;
    class?: true;
    seat?: true;
    studio?: true;
    showTime?: true;
    rejectionReason?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
    groupMemberOfId?: true;
    confirmationStatus?: true;
}
export declare class GuestMaxAggregate {
    id?: string;
    source?: string;
    invitationName?: string;
    contactList?: string;
    whatsapp?: number;
    category?: string;
    class?: string;
    seat?: string;
    studio?: string;
    showTime?: string;
    rejectionReason?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    groupMemberOfId?: string;
    confirmationStatus?: keyof typeof ConfirmationStatus;
}
export declare class GuestMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    source?: keyof typeof SortOrder;
    invitationName?: keyof typeof SortOrder;
    contactList?: keyof typeof SortOrder;
    whatsapp?: keyof typeof SortOrder;
    category?: keyof typeof SortOrder;
    class?: keyof typeof SortOrder;
    seat?: keyof typeof SortOrder;
    studio?: keyof typeof SortOrder;
    showTime?: keyof typeof SortOrder;
    rejectionReason?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    deletedAt?: keyof typeof SortOrder;
    groupMemberOfId?: keyof typeof SortOrder;
    confirmationStatus?: keyof typeof SortOrder;
}
export declare class GuestMinAggregateInput {
    id?: true;
    source?: true;
    invitationName?: true;
    contactList?: true;
    whatsapp?: true;
    category?: true;
    class?: true;
    seat?: true;
    studio?: true;
    showTime?: true;
    rejectionReason?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
    groupMemberOfId?: true;
    confirmationStatus?: true;
}
export declare class GuestMinAggregate {
    id?: string;
    source?: string;
    invitationName?: string;
    contactList?: string;
    whatsapp?: number;
    category?: string;
    class?: string;
    seat?: string;
    studio?: string;
    showTime?: string;
    rejectionReason?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    groupMemberOfId?: string;
    confirmationStatus?: keyof typeof ConfirmationStatus;
}
export declare class GuestMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    source?: keyof typeof SortOrder;
    invitationName?: keyof typeof SortOrder;
    contactList?: keyof typeof SortOrder;
    whatsapp?: keyof typeof SortOrder;
    category?: keyof typeof SortOrder;
    class?: keyof typeof SortOrder;
    seat?: keyof typeof SortOrder;
    studio?: keyof typeof SortOrder;
    showTime?: keyof typeof SortOrder;
    rejectionReason?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    deletedAt?: keyof typeof SortOrder;
    groupMemberOfId?: keyof typeof SortOrder;
    confirmationStatus?: keyof typeof SortOrder;
}
export declare class GuestNullableRelationFilter {
    is?: InstanceType<typeof GuestWhereInput>;
    isNot?: InstanceType<typeof GuestWhereInput>;
}
export declare class GuestOrderByRelationAggregateInput {
    _count?: keyof typeof SortOrder;
}
export declare class GuestOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    source?: InstanceType<typeof SortOrderInput>;
    invitationName?: keyof typeof SortOrder;
    contactList?: InstanceType<typeof SortOrderInput>;
    whatsapp?: InstanceType<typeof SortOrderInput>;
    category?: InstanceType<typeof SortOrderInput>;
    class?: InstanceType<typeof SortOrderInput>;
    seat?: InstanceType<typeof SortOrderInput>;
    studio?: InstanceType<typeof SortOrderInput>;
    showTime?: InstanceType<typeof SortOrderInput>;
    rejectionReason?: InstanceType<typeof SortOrderInput>;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: InstanceType<typeof SortOrderInput>;
    deletedAt?: InstanceType<typeof SortOrderInput>;
    groupMemberOfId?: InstanceType<typeof SortOrderInput>;
    confirmationStatus?: InstanceType<typeof SortOrderInput>;
    _count?: InstanceType<typeof GuestCountOrderByAggregateInput>;
    _avg?: InstanceType<typeof GuestAvgOrderByAggregateInput>;
    _max?: InstanceType<typeof GuestMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof GuestMinOrderByAggregateInput>;
    _sum?: InstanceType<typeof GuestSumOrderByAggregateInput>;
}
export declare class GuestOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    source?: InstanceType<typeof SortOrderInput>;
    invitationName?: keyof typeof SortOrder;
    contactList?: InstanceType<typeof SortOrderInput>;
    whatsapp?: InstanceType<typeof SortOrderInput>;
    category?: InstanceType<typeof SortOrderInput>;
    class?: InstanceType<typeof SortOrderInput>;
    seat?: InstanceType<typeof SortOrderInput>;
    studio?: InstanceType<typeof SortOrderInput>;
    showTime?: InstanceType<typeof SortOrderInput>;
    rejectionReason?: InstanceType<typeof SortOrderInput>;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: InstanceType<typeof SortOrderInput>;
    deletedAt?: InstanceType<typeof SortOrderInput>;
    groupMemberOfId?: InstanceType<typeof SortOrderInput>;
    confirmationStatus?: InstanceType<typeof SortOrderInput>;
    groupMemberOf?: InstanceType<typeof GuestOrderByWithRelationInput>;
    groupMembers?: InstanceType<typeof GuestOrderByRelationAggregateInput>;
    qrcode?: InstanceType<typeof QrCodeOrderByWithRelationInput>;
    invitationImage?: InstanceType<typeof InvitationImageOrderByWithRelationInput>;
    whatsappStatuses?: InstanceType<typeof WhatsappStatusOrderByRelationAggregateInput>;
}
export declare class GuestRelationFilter {
    is?: InstanceType<typeof GuestWhereInput>;
    isNot?: InstanceType<typeof GuestWhereInput>;
}
export declare class GuestScalarWhereWithAggregatesInput {
    AND?: Array<GuestScalarWhereWithAggregatesInput>;
    OR?: Array<GuestScalarWhereWithAggregatesInput>;
    NOT?: Array<GuestScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    source?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    invitationName?: InstanceType<typeof StringWithAggregatesFilter>;
    contactList?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    whatsapp?: InstanceType<typeof FloatNullableWithAggregatesFilter>;
    category?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    class?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    seat?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    studio?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    showTime?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    rejectionReason?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    updatedAt?: InstanceType<typeof DateTimeNullableWithAggregatesFilter>;
    deletedAt?: InstanceType<typeof DateTimeNullableWithAggregatesFilter>;
    groupMemberOfId?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    confirmationStatus?: InstanceType<typeof EnumConfirmationStatusNullableWithAggregatesFilter>;
}
export declare class GuestScalarWhereInput {
    AND?: Array<GuestScalarWhereInput>;
    OR?: Array<GuestScalarWhereInput>;
    NOT?: Array<GuestScalarWhereInput>;
    id?: InstanceType<typeof StringFilter>;
    source?: InstanceType<typeof StringNullableFilter>;
    invitationName?: InstanceType<typeof StringFilter>;
    contactList?: InstanceType<typeof StringNullableFilter>;
    whatsapp?: InstanceType<typeof FloatNullableFilter>;
    category?: InstanceType<typeof StringNullableFilter>;
    class?: InstanceType<typeof StringNullableFilter>;
    seat?: InstanceType<typeof StringNullableFilter>;
    studio?: InstanceType<typeof StringNullableFilter>;
    showTime?: InstanceType<typeof StringNullableFilter>;
    rejectionReason?: InstanceType<typeof StringNullableFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeNullableFilter>;
    deletedAt?: InstanceType<typeof DateTimeNullableFilter>;
    groupMemberOfId?: InstanceType<typeof StringNullableFilter>;
    confirmationStatus?: InstanceType<typeof EnumConfirmationStatusNullableFilter>;
}
export declare class GuestSumAggregateInput {
    whatsapp?: true;
}
export declare class GuestSumAggregate {
    whatsapp?: number;
}
export declare class GuestSumOrderByAggregateInput {
    whatsapp?: keyof typeof SortOrder;
}
export declare class GuestUncheckedCreateNestedManyWithoutGroupMemberOfInput {
    create?: Array<GuestCreateWithoutGroupMemberOfInput>;
    connectOrCreate?: Array<GuestCreateOrConnectWithoutGroupMemberOfInput>;
    createMany?: InstanceType<typeof GuestCreateManyGroupMemberOfInputEnvelope>;
    connect?: Array<Prisma.AtLeast<GuestWhereUniqueInput, 'id'>>;
}
export declare class GuestUncheckedCreateWithoutGroupMemberOfInput {
    id?: string;
    source?: string;
    invitationName: string;
    contactList?: string;
    whatsapp?: number;
    category?: string;
    class?: string;
    seat?: string;
    studio?: string;
    showTime?: string;
    rejectionReason?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    confirmationStatus?: keyof typeof ConfirmationStatus;
    groupMembers?: InstanceType<typeof GuestUncheckedCreateNestedManyWithoutGroupMemberOfInput>;
    qrcode?: InstanceType<typeof QrCodeUncheckedCreateNestedOneWithoutGuestInput>;
    invitationImage?: InstanceType<typeof InvitationImageUncheckedCreateNestedOneWithoutGuestInput>;
    whatsappStatuses?: InstanceType<typeof WhatsappStatusUncheckedCreateNestedManyWithoutGuestInput>;
}
export declare class GuestUncheckedCreateWithoutGroupMembersInput {
    id?: string;
    source?: string;
    invitationName: string;
    contactList?: string;
    whatsapp?: number;
    category?: string;
    class?: string;
    seat?: string;
    studio?: string;
    showTime?: string;
    rejectionReason?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    groupMemberOfId?: string;
    confirmationStatus?: keyof typeof ConfirmationStatus;
    qrcode?: InstanceType<typeof QrCodeUncheckedCreateNestedOneWithoutGuestInput>;
    invitationImage?: InstanceType<typeof InvitationImageUncheckedCreateNestedOneWithoutGuestInput>;
    whatsappStatuses?: InstanceType<typeof WhatsappStatusUncheckedCreateNestedManyWithoutGuestInput>;
}
export declare class GuestUncheckedCreateWithoutInvitationImageInput {
    id?: string;
    source?: string;
    invitationName: string;
    contactList?: string;
    whatsapp?: number;
    category?: string;
    class?: string;
    seat?: string;
    studio?: string;
    showTime?: string;
    rejectionReason?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    groupMemberOfId?: string;
    confirmationStatus?: keyof typeof ConfirmationStatus;
    groupMembers?: InstanceType<typeof GuestUncheckedCreateNestedManyWithoutGroupMemberOfInput>;
    qrcode?: InstanceType<typeof QrCodeUncheckedCreateNestedOneWithoutGuestInput>;
    whatsappStatuses?: InstanceType<typeof WhatsappStatusUncheckedCreateNestedManyWithoutGuestInput>;
}
export declare class GuestUncheckedCreateWithoutQrcodeInput {
    id?: string;
    source?: string;
    invitationName: string;
    contactList?: string;
    whatsapp?: number;
    category?: string;
    class?: string;
    seat?: string;
    studio?: string;
    showTime?: string;
    rejectionReason?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    groupMemberOfId?: string;
    confirmationStatus?: keyof typeof ConfirmationStatus;
    groupMembers?: InstanceType<typeof GuestUncheckedCreateNestedManyWithoutGroupMemberOfInput>;
    invitationImage?: InstanceType<typeof InvitationImageUncheckedCreateNestedOneWithoutGuestInput>;
    whatsappStatuses?: InstanceType<typeof WhatsappStatusUncheckedCreateNestedManyWithoutGuestInput>;
}
export declare class GuestUncheckedCreateWithoutWhatsappStatusesInput {
    id?: string;
    source?: string;
    invitationName: string;
    contactList?: string;
    whatsapp?: number;
    category?: string;
    class?: string;
    seat?: string;
    studio?: string;
    showTime?: string;
    rejectionReason?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    groupMemberOfId?: string;
    confirmationStatus?: keyof typeof ConfirmationStatus;
    groupMembers?: InstanceType<typeof GuestUncheckedCreateNestedManyWithoutGroupMemberOfInput>;
    qrcode?: InstanceType<typeof QrCodeUncheckedCreateNestedOneWithoutGuestInput>;
    invitationImage?: InstanceType<typeof InvitationImageUncheckedCreateNestedOneWithoutGuestInput>;
}
export declare class GuestUncheckedCreateInput {
    id?: string;
    source?: string;
    invitationName: string;
    contactList?: string;
    whatsapp?: number;
    category?: string;
    class?: string;
    seat?: string;
    studio?: string;
    showTime?: string;
    rejectionReason?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    groupMemberOfId?: string;
    confirmationStatus?: keyof typeof ConfirmationStatus;
    groupMembers?: InstanceType<typeof GuestUncheckedCreateNestedManyWithoutGroupMemberOfInput>;
    qrcode?: InstanceType<typeof QrCodeUncheckedCreateNestedOneWithoutGuestInput>;
    invitationImage?: InstanceType<typeof InvitationImageUncheckedCreateNestedOneWithoutGuestInput>;
    whatsappStatuses?: InstanceType<typeof WhatsappStatusUncheckedCreateNestedManyWithoutGuestInput>;
}
export declare class GuestUncheckedUpdateManyWithoutGroupMemberOfNestedInput {
    create?: Array<GuestCreateWithoutGroupMemberOfInput>;
    connectOrCreate?: Array<GuestCreateOrConnectWithoutGroupMemberOfInput>;
    upsert?: Array<GuestUpsertWithWhereUniqueWithoutGroupMemberOfInput>;
    createMany?: InstanceType<typeof GuestCreateManyGroupMemberOfInputEnvelope>;
    set?: Array<Prisma.AtLeast<GuestWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<GuestWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<GuestWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<GuestWhereUniqueInput, 'id'>>;
    update?: Array<GuestUpdateWithWhereUniqueWithoutGroupMemberOfInput>;
    updateMany?: Array<GuestUpdateManyWithWhereWithoutGroupMemberOfInput>;
    deleteMany?: Array<GuestScalarWhereInput>;
}
export declare class GuestUncheckedUpdateManyWithoutGroupMemberOfInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    source?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    invitationName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    contactList?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    whatsapp?: InstanceType<typeof NullableFloatFieldUpdateOperationsInput>;
    category?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    class?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    seat?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    studio?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    showTime?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    rejectionReason?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    confirmationStatus?: InstanceType<typeof NullableEnumConfirmationStatusFieldUpdateOperationsInput>;
}
export declare class GuestUncheckedUpdateManyInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    source?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    invitationName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    contactList?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    whatsapp?: InstanceType<typeof NullableFloatFieldUpdateOperationsInput>;
    category?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    class?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    seat?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    studio?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    showTime?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    rejectionReason?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    groupMemberOfId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    confirmationStatus?: InstanceType<typeof NullableEnumConfirmationStatusFieldUpdateOperationsInput>;
}
export declare class GuestUncheckedUpdateWithoutGroupMemberOfInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    source?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    invitationName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    contactList?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    whatsapp?: InstanceType<typeof NullableFloatFieldUpdateOperationsInput>;
    category?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    class?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    seat?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    studio?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    showTime?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    rejectionReason?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    confirmationStatus?: InstanceType<typeof NullableEnumConfirmationStatusFieldUpdateOperationsInput>;
    groupMembers?: InstanceType<typeof GuestUncheckedUpdateManyWithoutGroupMemberOfNestedInput>;
    qrcode?: InstanceType<typeof QrCodeUncheckedUpdateOneWithoutGuestNestedInput>;
    invitationImage?: InstanceType<typeof InvitationImageUncheckedUpdateOneWithoutGuestNestedInput>;
    whatsappStatuses?: InstanceType<typeof WhatsappStatusUncheckedUpdateManyWithoutGuestNestedInput>;
}
export declare class GuestUncheckedUpdateWithoutGroupMembersInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    source?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    invitationName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    contactList?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    whatsapp?: InstanceType<typeof NullableFloatFieldUpdateOperationsInput>;
    category?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    class?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    seat?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    studio?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    showTime?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    rejectionReason?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    groupMemberOfId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    confirmationStatus?: InstanceType<typeof NullableEnumConfirmationStatusFieldUpdateOperationsInput>;
    qrcode?: InstanceType<typeof QrCodeUncheckedUpdateOneWithoutGuestNestedInput>;
    invitationImage?: InstanceType<typeof InvitationImageUncheckedUpdateOneWithoutGuestNestedInput>;
    whatsappStatuses?: InstanceType<typeof WhatsappStatusUncheckedUpdateManyWithoutGuestNestedInput>;
}
export declare class GuestUncheckedUpdateWithoutInvitationImageInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    source?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    invitationName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    contactList?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    whatsapp?: InstanceType<typeof NullableFloatFieldUpdateOperationsInput>;
    category?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    class?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    seat?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    studio?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    showTime?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    rejectionReason?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    groupMemberOfId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    confirmationStatus?: InstanceType<typeof NullableEnumConfirmationStatusFieldUpdateOperationsInput>;
    groupMembers?: InstanceType<typeof GuestUncheckedUpdateManyWithoutGroupMemberOfNestedInput>;
    qrcode?: InstanceType<typeof QrCodeUncheckedUpdateOneWithoutGuestNestedInput>;
    whatsappStatuses?: InstanceType<typeof WhatsappStatusUncheckedUpdateManyWithoutGuestNestedInput>;
}
export declare class GuestUncheckedUpdateWithoutQrcodeInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    source?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    invitationName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    contactList?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    whatsapp?: InstanceType<typeof NullableFloatFieldUpdateOperationsInput>;
    category?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    class?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    seat?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    studio?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    showTime?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    rejectionReason?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    groupMemberOfId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    confirmationStatus?: InstanceType<typeof NullableEnumConfirmationStatusFieldUpdateOperationsInput>;
    groupMembers?: InstanceType<typeof GuestUncheckedUpdateManyWithoutGroupMemberOfNestedInput>;
    invitationImage?: InstanceType<typeof InvitationImageUncheckedUpdateOneWithoutGuestNestedInput>;
    whatsappStatuses?: InstanceType<typeof WhatsappStatusUncheckedUpdateManyWithoutGuestNestedInput>;
}
export declare class GuestUncheckedUpdateWithoutWhatsappStatusesInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    source?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    invitationName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    contactList?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    whatsapp?: InstanceType<typeof NullableFloatFieldUpdateOperationsInput>;
    category?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    class?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    seat?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    studio?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    showTime?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    rejectionReason?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    groupMemberOfId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    confirmationStatus?: InstanceType<typeof NullableEnumConfirmationStatusFieldUpdateOperationsInput>;
    groupMembers?: InstanceType<typeof GuestUncheckedUpdateManyWithoutGroupMemberOfNestedInput>;
    qrcode?: InstanceType<typeof QrCodeUncheckedUpdateOneWithoutGuestNestedInput>;
    invitationImage?: InstanceType<typeof InvitationImageUncheckedUpdateOneWithoutGuestNestedInput>;
}
export declare class GuestUncheckedUpdateInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    source?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    invitationName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    contactList?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    whatsapp?: InstanceType<typeof NullableFloatFieldUpdateOperationsInput>;
    category?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    class?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    seat?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    studio?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    showTime?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    rejectionReason?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    groupMemberOfId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    confirmationStatus?: InstanceType<typeof NullableEnumConfirmationStatusFieldUpdateOperationsInput>;
    groupMembers?: InstanceType<typeof GuestUncheckedUpdateManyWithoutGroupMemberOfNestedInput>;
    qrcode?: InstanceType<typeof QrCodeUncheckedUpdateOneWithoutGuestNestedInput>;
    invitationImage?: InstanceType<typeof InvitationImageUncheckedUpdateOneWithoutGuestNestedInput>;
    whatsappStatuses?: InstanceType<typeof WhatsappStatusUncheckedUpdateManyWithoutGuestNestedInput>;
}
export declare class GuestUpdateManyMutationInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    source?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    invitationName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    contactList?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    whatsapp?: InstanceType<typeof NullableFloatFieldUpdateOperationsInput>;
    category?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    class?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    seat?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    studio?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    showTime?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    rejectionReason?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    confirmationStatus?: InstanceType<typeof NullableEnumConfirmationStatusFieldUpdateOperationsInput>;
}
export declare class GuestUpdateManyWithWhereWithoutGroupMemberOfInput {
    where: InstanceType<typeof GuestScalarWhereInput>;
    data: InstanceType<typeof GuestUpdateManyMutationInput>;
}
export declare class GuestUpdateManyWithoutGroupMemberOfNestedInput {
    create?: Array<GuestCreateWithoutGroupMemberOfInput>;
    connectOrCreate?: Array<GuestCreateOrConnectWithoutGroupMemberOfInput>;
    upsert?: Array<GuestUpsertWithWhereUniqueWithoutGroupMemberOfInput>;
    createMany?: InstanceType<typeof GuestCreateManyGroupMemberOfInputEnvelope>;
    set?: Array<Prisma.AtLeast<GuestWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<GuestWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<GuestWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<GuestWhereUniqueInput, 'id'>>;
    update?: Array<GuestUpdateWithWhereUniqueWithoutGroupMemberOfInput>;
    updateMany?: Array<GuestUpdateManyWithWhereWithoutGroupMemberOfInput>;
    deleteMany?: Array<GuestScalarWhereInput>;
}
export declare class GuestUpdateOneRequiredWithoutInvitationImageNestedInput {
    create?: InstanceType<typeof GuestCreateWithoutInvitationImageInput>;
    connectOrCreate?: InstanceType<typeof GuestCreateOrConnectWithoutInvitationImageInput>;
    upsert?: InstanceType<typeof GuestUpsertWithoutInvitationImageInput>;
    connect?: Prisma.AtLeast<GuestWhereUniqueInput, 'id'>;
    update?: InstanceType<typeof GuestUpdateToOneWithWhereWithoutInvitationImageInput>;
}
export declare class GuestUpdateOneRequiredWithoutQrcodeNestedInput {
    create?: InstanceType<typeof GuestCreateWithoutQrcodeInput>;
    connectOrCreate?: InstanceType<typeof GuestCreateOrConnectWithoutQrcodeInput>;
    upsert?: InstanceType<typeof GuestUpsertWithoutQrcodeInput>;
    connect?: Prisma.AtLeast<GuestWhereUniqueInput, 'id'>;
    update?: InstanceType<typeof GuestUpdateToOneWithWhereWithoutQrcodeInput>;
}
export declare class GuestUpdateOneRequiredWithoutWhatsappStatusesNestedInput {
    create?: InstanceType<typeof GuestCreateWithoutWhatsappStatusesInput>;
    connectOrCreate?: InstanceType<typeof GuestCreateOrConnectWithoutWhatsappStatusesInput>;
    upsert?: InstanceType<typeof GuestUpsertWithoutWhatsappStatusesInput>;
    connect?: Prisma.AtLeast<GuestWhereUniqueInput, 'id'>;
    update?: InstanceType<typeof GuestUpdateToOneWithWhereWithoutWhatsappStatusesInput>;
}
export declare class GuestUpdateOneWithoutGroupMembersNestedInput {
    create?: InstanceType<typeof GuestCreateWithoutGroupMembersInput>;
    connectOrCreate?: InstanceType<typeof GuestCreateOrConnectWithoutGroupMembersInput>;
    upsert?: InstanceType<typeof GuestUpsertWithoutGroupMembersInput>;
    disconnect?: InstanceType<typeof GuestWhereInput>;
    delete?: InstanceType<typeof GuestWhereInput>;
    connect?: Prisma.AtLeast<GuestWhereUniqueInput, 'id'>;
    update?: InstanceType<typeof GuestUpdateToOneWithWhereWithoutGroupMembersInput>;
}
export declare class GuestUpdateToOneWithWhereWithoutGroupMembersInput {
    where?: InstanceType<typeof GuestWhereInput>;
    data: InstanceType<typeof GuestUpdateWithoutGroupMembersInput>;
}
export declare class GuestUpdateToOneWithWhereWithoutInvitationImageInput {
    where?: InstanceType<typeof GuestWhereInput>;
    data: InstanceType<typeof GuestUpdateWithoutInvitationImageInput>;
}
export declare class GuestUpdateToOneWithWhereWithoutQrcodeInput {
    where?: InstanceType<typeof GuestWhereInput>;
    data: InstanceType<typeof GuestUpdateWithoutQrcodeInput>;
}
export declare class GuestUpdateToOneWithWhereWithoutWhatsappStatusesInput {
    where?: InstanceType<typeof GuestWhereInput>;
    data: InstanceType<typeof GuestUpdateWithoutWhatsappStatusesInput>;
}
export declare class GuestUpdateWithWhereUniqueWithoutGroupMemberOfInput {
    where: Prisma.AtLeast<GuestWhereUniqueInput, 'id'>;
    data: InstanceType<typeof GuestUpdateWithoutGroupMemberOfInput>;
}
export declare class GuestUpdateWithoutGroupMemberOfInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    source?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    invitationName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    contactList?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    whatsapp?: InstanceType<typeof NullableFloatFieldUpdateOperationsInput>;
    category?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    class?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    seat?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    studio?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    showTime?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    rejectionReason?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    confirmationStatus?: InstanceType<typeof NullableEnumConfirmationStatusFieldUpdateOperationsInput>;
    groupMembers?: InstanceType<typeof GuestUpdateManyWithoutGroupMemberOfNestedInput>;
    qrcode?: InstanceType<typeof QrCodeUpdateOneWithoutGuestNestedInput>;
    invitationImage?: InstanceType<typeof InvitationImageUpdateOneWithoutGuestNestedInput>;
    whatsappStatuses?: InstanceType<typeof WhatsappStatusUpdateManyWithoutGuestNestedInput>;
}
export declare class GuestUpdateWithoutGroupMembersInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    source?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    invitationName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    contactList?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    whatsapp?: InstanceType<typeof NullableFloatFieldUpdateOperationsInput>;
    category?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    class?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    seat?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    studio?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    showTime?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    rejectionReason?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    confirmationStatus?: InstanceType<typeof NullableEnumConfirmationStatusFieldUpdateOperationsInput>;
    groupMemberOf?: InstanceType<typeof GuestUpdateOneWithoutGroupMembersNestedInput>;
    qrcode?: InstanceType<typeof QrCodeUpdateOneWithoutGuestNestedInput>;
    invitationImage?: InstanceType<typeof InvitationImageUpdateOneWithoutGuestNestedInput>;
    whatsappStatuses?: InstanceType<typeof WhatsappStatusUpdateManyWithoutGuestNestedInput>;
}
export declare class GuestUpdateWithoutInvitationImageInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    source?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    invitationName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    contactList?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    whatsapp?: InstanceType<typeof NullableFloatFieldUpdateOperationsInput>;
    category?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    class?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    seat?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    studio?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    showTime?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    rejectionReason?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    confirmationStatus?: InstanceType<typeof NullableEnumConfirmationStatusFieldUpdateOperationsInput>;
    groupMemberOf?: InstanceType<typeof GuestUpdateOneWithoutGroupMembersNestedInput>;
    groupMembers?: InstanceType<typeof GuestUpdateManyWithoutGroupMemberOfNestedInput>;
    qrcode?: InstanceType<typeof QrCodeUpdateOneWithoutGuestNestedInput>;
    whatsappStatuses?: InstanceType<typeof WhatsappStatusUpdateManyWithoutGuestNestedInput>;
}
export declare class GuestUpdateWithoutQrcodeInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    source?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    invitationName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    contactList?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    whatsapp?: InstanceType<typeof NullableFloatFieldUpdateOperationsInput>;
    category?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    class?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    seat?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    studio?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    showTime?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    rejectionReason?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    confirmationStatus?: InstanceType<typeof NullableEnumConfirmationStatusFieldUpdateOperationsInput>;
    groupMemberOf?: InstanceType<typeof GuestUpdateOneWithoutGroupMembersNestedInput>;
    groupMembers?: InstanceType<typeof GuestUpdateManyWithoutGroupMemberOfNestedInput>;
    invitationImage?: InstanceType<typeof InvitationImageUpdateOneWithoutGuestNestedInput>;
    whatsappStatuses?: InstanceType<typeof WhatsappStatusUpdateManyWithoutGuestNestedInput>;
}
export declare class GuestUpdateWithoutWhatsappStatusesInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    source?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    invitationName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    contactList?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    whatsapp?: InstanceType<typeof NullableFloatFieldUpdateOperationsInput>;
    category?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    class?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    seat?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    studio?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    showTime?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    rejectionReason?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    confirmationStatus?: InstanceType<typeof NullableEnumConfirmationStatusFieldUpdateOperationsInput>;
    groupMemberOf?: InstanceType<typeof GuestUpdateOneWithoutGroupMembersNestedInput>;
    groupMembers?: InstanceType<typeof GuestUpdateManyWithoutGroupMemberOfNestedInput>;
    qrcode?: InstanceType<typeof QrCodeUpdateOneWithoutGuestNestedInput>;
    invitationImage?: InstanceType<typeof InvitationImageUpdateOneWithoutGuestNestedInput>;
}
export declare class GuestUpdateInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    source?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    invitationName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    contactList?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    whatsapp?: InstanceType<typeof NullableFloatFieldUpdateOperationsInput>;
    category?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    class?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    seat?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    studio?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    showTime?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    rejectionReason?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    confirmationStatus?: InstanceType<typeof NullableEnumConfirmationStatusFieldUpdateOperationsInput>;
    groupMemberOf?: InstanceType<typeof GuestUpdateOneWithoutGroupMembersNestedInput>;
    groupMembers?: InstanceType<typeof GuestUpdateManyWithoutGroupMemberOfNestedInput>;
    qrcode?: InstanceType<typeof QrCodeUpdateOneWithoutGuestNestedInput>;
    invitationImage?: InstanceType<typeof InvitationImageUpdateOneWithoutGuestNestedInput>;
    whatsappStatuses?: InstanceType<typeof WhatsappStatusUpdateManyWithoutGuestNestedInput>;
}
export declare class GuestUpsertWithWhereUniqueWithoutGroupMemberOfInput {
    where: Prisma.AtLeast<GuestWhereUniqueInput, 'id'>;
    update: InstanceType<typeof GuestUpdateWithoutGroupMemberOfInput>;
    create: InstanceType<typeof GuestCreateWithoutGroupMemberOfInput>;
}
export declare class GuestUpsertWithoutGroupMembersInput {
    update: InstanceType<typeof GuestUpdateWithoutGroupMembersInput>;
    create: InstanceType<typeof GuestCreateWithoutGroupMembersInput>;
    where?: InstanceType<typeof GuestWhereInput>;
}
export declare class GuestUpsertWithoutInvitationImageInput {
    update: InstanceType<typeof GuestUpdateWithoutInvitationImageInput>;
    create: InstanceType<typeof GuestCreateWithoutInvitationImageInput>;
    where?: InstanceType<typeof GuestWhereInput>;
}
export declare class GuestUpsertWithoutQrcodeInput {
    update: InstanceType<typeof GuestUpdateWithoutQrcodeInput>;
    create: InstanceType<typeof GuestCreateWithoutQrcodeInput>;
    where?: InstanceType<typeof GuestWhereInput>;
}
export declare class GuestUpsertWithoutWhatsappStatusesInput {
    update: InstanceType<typeof GuestUpdateWithoutWhatsappStatusesInput>;
    create: InstanceType<typeof GuestCreateWithoutWhatsappStatusesInput>;
    where?: InstanceType<typeof GuestWhereInput>;
}
export declare class GuestWhereUniqueInput {
    id?: string;
    AND?: Array<GuestWhereInput>;
    OR?: Array<GuestWhereInput>;
    NOT?: Array<GuestWhereInput>;
    source?: InstanceType<typeof StringNullableFilter>;
    invitationName?: InstanceType<typeof StringFilter>;
    contactList?: InstanceType<typeof StringNullableFilter>;
    whatsapp?: InstanceType<typeof FloatNullableFilter>;
    category?: InstanceType<typeof StringNullableFilter>;
    class?: InstanceType<typeof StringNullableFilter>;
    seat?: InstanceType<typeof StringNullableFilter>;
    studio?: InstanceType<typeof StringNullableFilter>;
    showTime?: InstanceType<typeof StringNullableFilter>;
    rejectionReason?: InstanceType<typeof StringNullableFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeNullableFilter>;
    deletedAt?: InstanceType<typeof DateTimeNullableFilter>;
    groupMemberOfId?: InstanceType<typeof StringNullableFilter>;
    confirmationStatus?: InstanceType<typeof EnumConfirmationStatusNullableFilter>;
    groupMemberOf?: InstanceType<typeof GuestNullableRelationFilter>;
    groupMembers?: InstanceType<typeof GuestListRelationFilter>;
    qrcode?: InstanceType<typeof QrCodeNullableRelationFilter>;
    invitationImage?: InstanceType<typeof InvitationImageNullableRelationFilter>;
    whatsappStatuses?: InstanceType<typeof WhatsappStatusListRelationFilter>;
}
export declare class GuestWhereInput {
    AND?: Array<GuestWhereInput>;
    OR?: Array<GuestWhereInput>;
    NOT?: Array<GuestWhereInput>;
    id?: InstanceType<typeof StringFilter>;
    source?: InstanceType<typeof StringNullableFilter>;
    invitationName?: InstanceType<typeof StringFilter>;
    contactList?: InstanceType<typeof StringNullableFilter>;
    whatsapp?: InstanceType<typeof FloatNullableFilter>;
    category?: InstanceType<typeof StringNullableFilter>;
    class?: InstanceType<typeof StringNullableFilter>;
    seat?: InstanceType<typeof StringNullableFilter>;
    studio?: InstanceType<typeof StringNullableFilter>;
    showTime?: InstanceType<typeof StringNullableFilter>;
    rejectionReason?: InstanceType<typeof StringNullableFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeNullableFilter>;
    deletedAt?: InstanceType<typeof DateTimeNullableFilter>;
    groupMemberOfId?: InstanceType<typeof StringNullableFilter>;
    confirmationStatus?: InstanceType<typeof EnumConfirmationStatusNullableFilter>;
    groupMemberOf?: InstanceType<typeof GuestNullableRelationFilter>;
    groupMembers?: InstanceType<typeof GuestListRelationFilter>;
    qrcode?: InstanceType<typeof QrCodeNullableRelationFilter>;
    invitationImage?: InstanceType<typeof InvitationImageNullableRelationFilter>;
    whatsappStatuses?: InstanceType<typeof WhatsappStatusListRelationFilter>;
}
export declare class Guest {
    id: string;
    source: string | null;
    invitationName: string;
    contactList: string | null;
    whatsapp: number | null;
    category: string | null;
    class: string | null;
    seat: string | null;
    studio: string | null;
    showTime: string | null;
    rejectionReason: string | null;
    createdAt: Date;
    updatedAt: Date | null;
    deletedAt: Date | null;
    groupMemberOfId: string | null;
    confirmationStatus: keyof typeof ConfirmationStatus | null;
    groupMemberOf?: InstanceType<typeof Guest> | null;
    groupMembers?: Array<Guest>;
    qrcode?: InstanceType<typeof QrCode> | null;
    invitationImage?: InstanceType<typeof InvitationImage> | null;
    whatsappStatuses?: Array<WhatsappStatus>;
    _count?: InstanceType<typeof GuestCount>;
}
export declare class UpdateManyGuestArgs {
    data: InstanceType<typeof GuestUpdateManyMutationInput>;
    where?: InstanceType<typeof GuestWhereInput>;
}
export declare class UpdateOneGuestArgs {
    data: InstanceType<typeof GuestUpdateInput>;
    where: Prisma.AtLeast<GuestWhereUniqueInput, 'id'>;
}
export declare class UpsertOneGuestArgs {
    where: Prisma.AtLeast<GuestWhereUniqueInput, 'id'>;
    create: InstanceType<typeof GuestCreateInput>;
    update: InstanceType<typeof GuestUpdateInput>;
}
export declare class AggregateInvitationImage {
    _count?: InstanceType<typeof InvitationImageCountAggregate>;
    _min?: InstanceType<typeof InvitationImageMinAggregate>;
    _max?: InstanceType<typeof InvitationImageMaxAggregate>;
}
export declare class CreateManyInvitationImageArgs {
    data: Array<InvitationImageCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOneInvitationImageArgs {
    data: InstanceType<typeof InvitationImageCreateInput>;
}
export declare class DeleteManyInvitationImageArgs {
    where?: InstanceType<typeof InvitationImageWhereInput>;
}
export declare class DeleteOneInvitationImageArgs {
    where: Prisma.AtLeast<InvitationImageWhereUniqueInput, 'id' | 'guestId'>;
}
export declare class FindFirstInvitationImageOrThrowArgs {
    where?: InstanceType<typeof InvitationImageWhereInput>;
    orderBy?: Array<InvitationImageOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<InvitationImageWhereUniqueInput, 'id' | 'guestId'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof InvitationImageScalarFieldEnum>;
}
export declare class FindFirstInvitationImageArgs {
    where?: InstanceType<typeof InvitationImageWhereInput>;
    orderBy?: Array<InvitationImageOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<InvitationImageWhereUniqueInput, 'id' | 'guestId'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof InvitationImageScalarFieldEnum>;
}
export declare class FindManyInvitationImageArgs {
    where?: InstanceType<typeof InvitationImageWhereInput>;
    orderBy?: Array<InvitationImageOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<InvitationImageWhereUniqueInput, 'id' | 'guestId'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof InvitationImageScalarFieldEnum>;
}
export declare class FindUniqueInvitationImageOrThrowArgs {
    where: Prisma.AtLeast<InvitationImageWhereUniqueInput, 'id' | 'guestId'>;
}
export declare class FindUniqueInvitationImageArgs {
    where: Prisma.AtLeast<InvitationImageWhereUniqueInput, 'id' | 'guestId'>;
}
export declare class InvitationImageAggregateArgs {
    where?: InstanceType<typeof InvitationImageWhereInput>;
    orderBy?: Array<InvitationImageOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<InvitationImageWhereUniqueInput, 'id' | 'guestId'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof InvitationImageCountAggregateInput>;
    _min?: InstanceType<typeof InvitationImageMinAggregateInput>;
    _max?: InstanceType<typeof InvitationImageMaxAggregateInput>;
}
export declare class InvitationImageCountAggregateInput {
    id?: true;
    path?: true;
    createdAt?: true;
    guestId?: true;
    _all?: true;
}
export declare class InvitationImageCountAggregate {
    id: number;
    path: number;
    createdAt: number;
    guestId: number;
    _all: number;
}
export declare class InvitationImageCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    path?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    guestId?: keyof typeof SortOrder;
}
export declare class InvitationImageCreateManyInput {
    id?: string;
    path: string;
    createdAt?: Date | string;
    guestId: string;
}
export declare class InvitationImageCreateNestedOneWithoutGuestInput {
    create?: InstanceType<typeof InvitationImageCreateWithoutGuestInput>;
    connectOrCreate?: InstanceType<typeof InvitationImageCreateOrConnectWithoutGuestInput>;
    connect?: Prisma.AtLeast<InvitationImageWhereUniqueInput, 'id' | 'guestId'>;
}
export declare class InvitationImageCreateOrConnectWithoutGuestInput {
    where: Prisma.AtLeast<InvitationImageWhereUniqueInput, 'id' | 'guestId'>;
    create: InstanceType<typeof InvitationImageCreateWithoutGuestInput>;
}
export declare class InvitationImageCreateWithoutGuestInput {
    id?: string;
    path: string;
    createdAt?: Date | string;
}
export declare class InvitationImageCreateInput {
    id?: string;
    path: string;
    createdAt?: Date | string;
    guest: InstanceType<typeof GuestCreateNestedOneWithoutInvitationImageInput>;
}
export declare class InvitationImageGroupByArgs {
    where?: InstanceType<typeof InvitationImageWhereInput>;
    orderBy?: Array<InvitationImageOrderByWithAggregationInput>;
    by: Array<keyof typeof InvitationImageScalarFieldEnum>;
    having?: InstanceType<typeof InvitationImageScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof InvitationImageCountAggregateInput>;
    _min?: InstanceType<typeof InvitationImageMinAggregateInput>;
    _max?: InstanceType<typeof InvitationImageMaxAggregateInput>;
}
export declare class InvitationImageGroupBy {
    id: string;
    path: string;
    createdAt: Date | string;
    guestId: string;
    _count?: InstanceType<typeof InvitationImageCountAggregate>;
    _min?: InstanceType<typeof InvitationImageMinAggregate>;
    _max?: InstanceType<typeof InvitationImageMaxAggregate>;
}
export declare class InvitationImageMaxAggregateInput {
    id?: true;
    path?: true;
    createdAt?: true;
    guestId?: true;
}
export declare class InvitationImageMaxAggregate {
    id?: string;
    path?: string;
    createdAt?: Date | string;
    guestId?: string;
}
export declare class InvitationImageMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    path?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    guestId?: keyof typeof SortOrder;
}
export declare class InvitationImageMinAggregateInput {
    id?: true;
    path?: true;
    createdAt?: true;
    guestId?: true;
}
export declare class InvitationImageMinAggregate {
    id?: string;
    path?: string;
    createdAt?: Date | string;
    guestId?: string;
}
export declare class InvitationImageMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    path?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    guestId?: keyof typeof SortOrder;
}
export declare class InvitationImageNullableRelationFilter {
    is?: InstanceType<typeof InvitationImageWhereInput>;
    isNot?: InstanceType<typeof InvitationImageWhereInput>;
}
export declare class InvitationImageOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    path?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    guestId?: keyof typeof SortOrder;
    _count?: InstanceType<typeof InvitationImageCountOrderByAggregateInput>;
    _max?: InstanceType<typeof InvitationImageMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof InvitationImageMinOrderByAggregateInput>;
}
export declare class InvitationImageOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    path?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    guestId?: keyof typeof SortOrder;
    guest?: InstanceType<typeof GuestOrderByWithRelationInput>;
}
export declare class InvitationImageScalarWhereWithAggregatesInput {
    AND?: Array<InvitationImageScalarWhereWithAggregatesInput>;
    OR?: Array<InvitationImageScalarWhereWithAggregatesInput>;
    NOT?: Array<InvitationImageScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    path?: InstanceType<typeof StringWithAggregatesFilter>;
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    guestId?: InstanceType<typeof StringWithAggregatesFilter>;
}
export declare class InvitationImageUncheckedCreateNestedOneWithoutGuestInput {
    create?: InstanceType<typeof InvitationImageCreateWithoutGuestInput>;
    connectOrCreate?: InstanceType<typeof InvitationImageCreateOrConnectWithoutGuestInput>;
    connect?: Prisma.AtLeast<InvitationImageWhereUniqueInput, 'id' | 'guestId'>;
}
export declare class InvitationImageUncheckedCreateWithoutGuestInput {
    id?: string;
    path: string;
    createdAt?: Date | string;
}
export declare class InvitationImageUncheckedCreateInput {
    id?: string;
    path: string;
    createdAt?: Date | string;
    guestId: string;
}
export declare class InvitationImageUncheckedUpdateManyInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    path?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    guestId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class InvitationImageUncheckedUpdateOneWithoutGuestNestedInput {
    create?: InstanceType<typeof InvitationImageCreateWithoutGuestInput>;
    connectOrCreate?: InstanceType<typeof InvitationImageCreateOrConnectWithoutGuestInput>;
    upsert?: InstanceType<typeof InvitationImageUpsertWithoutGuestInput>;
    disconnect?: InstanceType<typeof InvitationImageWhereInput>;
    delete?: InstanceType<typeof InvitationImageWhereInput>;
    connect?: Prisma.AtLeast<InvitationImageWhereUniqueInput, 'id' | 'guestId'>;
    update?: InstanceType<typeof InvitationImageUpdateToOneWithWhereWithoutGuestInput>;
}
export declare class InvitationImageUncheckedUpdateWithoutGuestInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    path?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class InvitationImageUncheckedUpdateInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    path?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    guestId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class InvitationImageUpdateManyMutationInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    path?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class InvitationImageUpdateOneWithoutGuestNestedInput {
    create?: InstanceType<typeof InvitationImageCreateWithoutGuestInput>;
    connectOrCreate?: InstanceType<typeof InvitationImageCreateOrConnectWithoutGuestInput>;
    upsert?: InstanceType<typeof InvitationImageUpsertWithoutGuestInput>;
    disconnect?: InstanceType<typeof InvitationImageWhereInput>;
    delete?: InstanceType<typeof InvitationImageWhereInput>;
    connect?: Prisma.AtLeast<InvitationImageWhereUniqueInput, 'id' | 'guestId'>;
    update?: InstanceType<typeof InvitationImageUpdateToOneWithWhereWithoutGuestInput>;
}
export declare class InvitationImageUpdateToOneWithWhereWithoutGuestInput {
    where?: InstanceType<typeof InvitationImageWhereInput>;
    data: InstanceType<typeof InvitationImageUpdateWithoutGuestInput>;
}
export declare class InvitationImageUpdateWithoutGuestInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    path?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class InvitationImageUpdateInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    path?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    guest?: InstanceType<typeof GuestUpdateOneRequiredWithoutInvitationImageNestedInput>;
}
export declare class InvitationImageUpsertWithoutGuestInput {
    update: InstanceType<typeof InvitationImageUpdateWithoutGuestInput>;
    create: InstanceType<typeof InvitationImageCreateWithoutGuestInput>;
    where?: InstanceType<typeof InvitationImageWhereInput>;
}
export declare class InvitationImageWhereUniqueInput {
    id?: string;
    guestId?: string;
    AND?: Array<InvitationImageWhereInput>;
    OR?: Array<InvitationImageWhereInput>;
    NOT?: Array<InvitationImageWhereInput>;
    path?: InstanceType<typeof StringFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    guest?: InstanceType<typeof GuestRelationFilter>;
}
export declare class InvitationImageWhereInput {
    AND?: Array<InvitationImageWhereInput>;
    OR?: Array<InvitationImageWhereInput>;
    NOT?: Array<InvitationImageWhereInput>;
    id?: InstanceType<typeof StringFilter>;
    path?: InstanceType<typeof StringFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    guestId?: InstanceType<typeof StringFilter>;
    guest?: InstanceType<typeof GuestRelationFilter>;
}
export declare class InvitationImage {
    id: string;
    path: string;
    createdAt: Date;
    guestId: string;
    guest?: InstanceType<typeof Guest>;
}
export declare class UpdateManyInvitationImageArgs {
    data: InstanceType<typeof InvitationImageUpdateManyMutationInput>;
    where?: InstanceType<typeof InvitationImageWhereInput>;
}
export declare class UpdateOneInvitationImageArgs {
    data: InstanceType<typeof InvitationImageUpdateInput>;
    where: Prisma.AtLeast<InvitationImageWhereUniqueInput, 'id' | 'guestId'>;
}
export declare class UpsertOneInvitationImageArgs {
    where: Prisma.AtLeast<InvitationImageWhereUniqueInput, 'id' | 'guestId'>;
    create: InstanceType<typeof InvitationImageCreateInput>;
    update: InstanceType<typeof InvitationImageUpdateInput>;
}
export declare class AffectedRows {
    count: number;
}
export declare class DateTimeFieldUpdateOperationsInput {
    set?: Date | string;
}
export declare class DateTimeFilter {
    equals?: Date | string;
    in?: Array<Date> | Array<string>;
    notIn?: Array<Date> | Array<string>;
    lt?: Date | string;
    lte?: Date | string;
    gt?: Date | string;
    gte?: Date | string;
    not?: InstanceType<typeof NestedDateTimeFilter>;
}
export declare class DateTimeNullableFilter {
    equals?: Date | string;
    in?: Array<Date> | Array<string>;
    notIn?: Array<Date> | Array<string>;
    lt?: Date | string;
    lte?: Date | string;
    gt?: Date | string;
    gte?: Date | string;
    not?: InstanceType<typeof NestedDateTimeNullableFilter>;
}
export declare class DateTimeNullableWithAggregatesFilter {
    equals?: Date | string;
    in?: Array<Date> | Array<string>;
    notIn?: Array<Date> | Array<string>;
    lt?: Date | string;
    lte?: Date | string;
    gt?: Date | string;
    gte?: Date | string;
    not?: InstanceType<typeof NestedDateTimeNullableWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    _min?: InstanceType<typeof NestedDateTimeNullableFilter>;
    _max?: InstanceType<typeof NestedDateTimeNullableFilter>;
}
export declare class DateTimeWithAggregatesFilter {
    equals?: Date | string;
    in?: Array<Date> | Array<string>;
    notIn?: Array<Date> | Array<string>;
    lt?: Date | string;
    lte?: Date | string;
    gt?: Date | string;
    gte?: Date | string;
    not?: InstanceType<typeof NestedDateTimeWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedDateTimeFilter>;
    _max?: InstanceType<typeof NestedDateTimeFilter>;
}
export declare class EnumConfirmationStatusNullableFilter {
    equals?: keyof typeof ConfirmationStatus;
    in?: Array<keyof typeof ConfirmationStatus>;
    notIn?: Array<keyof typeof ConfirmationStatus>;
    not?: InstanceType<typeof NestedEnumConfirmationStatusNullableFilter>;
}
export declare class EnumConfirmationStatusNullableWithAggregatesFilter {
    equals?: keyof typeof ConfirmationStatus;
    in?: Array<keyof typeof ConfirmationStatus>;
    notIn?: Array<keyof typeof ConfirmationStatus>;
    not?: InstanceType<typeof NestedEnumConfirmationStatusNullableWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    _min?: InstanceType<typeof NestedEnumConfirmationStatusNullableFilter>;
    _max?: InstanceType<typeof NestedEnumConfirmationStatusNullableFilter>;
}
export declare class EnumQueueStatusFieldUpdateOperationsInput {
    set?: keyof typeof QueueStatus;
}
export declare class EnumQueueStatusFilter {
    equals?: keyof typeof QueueStatus;
    in?: Array<keyof typeof QueueStatus>;
    notIn?: Array<keyof typeof QueueStatus>;
    not?: InstanceType<typeof NestedEnumQueueStatusFilter>;
}
export declare class EnumQueueStatusWithAggregatesFilter {
    equals?: keyof typeof QueueStatus;
    in?: Array<keyof typeof QueueStatus>;
    notIn?: Array<keyof typeof QueueStatus>;
    not?: InstanceType<typeof NestedEnumQueueStatusWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedEnumQueueStatusFilter>;
    _max?: InstanceType<typeof NestedEnumQueueStatusFilter>;
}
export declare class EnumUserRoleFieldUpdateOperationsInput {
    set?: keyof typeof UserRole;
}
export declare class EnumUserRoleFilter {
    equals?: keyof typeof UserRole;
    in?: Array<keyof typeof UserRole>;
    notIn?: Array<keyof typeof UserRole>;
    not?: InstanceType<typeof NestedEnumUserRoleFilter>;
}
export declare class EnumUserRoleWithAggregatesFilter {
    equals?: keyof typeof UserRole;
    in?: Array<keyof typeof UserRole>;
    notIn?: Array<keyof typeof UserRole>;
    not?: InstanceType<typeof NestedEnumUserRoleWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedEnumUserRoleFilter>;
    _max?: InstanceType<typeof NestedEnumUserRoleFilter>;
}
export declare class FloatNullableFilter {
    equals?: number;
    in?: Array<number>;
    notIn?: Array<number>;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    not?: InstanceType<typeof NestedFloatNullableFilter>;
}
export declare class FloatNullableWithAggregatesFilter {
    equals?: number;
    in?: Array<number>;
    notIn?: Array<number>;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    not?: InstanceType<typeof NestedFloatNullableWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    _avg?: InstanceType<typeof NestedFloatNullableFilter>;
    _sum?: InstanceType<typeof NestedFloatNullableFilter>;
    _min?: InstanceType<typeof NestedFloatNullableFilter>;
    _max?: InstanceType<typeof NestedFloatNullableFilter>;
}
export declare class IntFieldUpdateOperationsInput {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
}
export declare class IntFilter {
    equals?: number;
    in?: Array<number>;
    notIn?: Array<number>;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    not?: InstanceType<typeof NestedIntFilter>;
}
export declare class IntWithAggregatesFilter {
    equals?: number;
    in?: Array<number>;
    notIn?: Array<number>;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    not?: InstanceType<typeof NestedIntWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _avg?: InstanceType<typeof NestedFloatFilter>;
    _sum?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedIntFilter>;
    _max?: InstanceType<typeof NestedIntFilter>;
}
export declare class NestedDateTimeFilter {
    equals?: Date | string;
    in?: Array<Date> | Array<string>;
    notIn?: Array<Date> | Array<string>;
    lt?: Date | string;
    lte?: Date | string;
    gt?: Date | string;
    gte?: Date | string;
    not?: InstanceType<typeof NestedDateTimeFilter>;
}
export declare class NestedDateTimeNullableFilter {
    equals?: Date | string;
    in?: Array<Date> | Array<string>;
    notIn?: Array<Date> | Array<string>;
    lt?: Date | string;
    lte?: Date | string;
    gt?: Date | string;
    gte?: Date | string;
    not?: InstanceType<typeof NestedDateTimeNullableFilter>;
}
export declare class NestedDateTimeNullableWithAggregatesFilter {
    equals?: Date | string;
    in?: Array<Date> | Array<string>;
    notIn?: Array<Date> | Array<string>;
    lt?: Date | string;
    lte?: Date | string;
    gt?: Date | string;
    gte?: Date | string;
    not?: InstanceType<typeof NestedDateTimeNullableWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    _min?: InstanceType<typeof NestedDateTimeNullableFilter>;
    _max?: InstanceType<typeof NestedDateTimeNullableFilter>;
}
export declare class NestedDateTimeWithAggregatesFilter {
    equals?: Date | string;
    in?: Array<Date> | Array<string>;
    notIn?: Array<Date> | Array<string>;
    lt?: Date | string;
    lte?: Date | string;
    gt?: Date | string;
    gte?: Date | string;
    not?: InstanceType<typeof NestedDateTimeWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedDateTimeFilter>;
    _max?: InstanceType<typeof NestedDateTimeFilter>;
}
export declare class NestedEnumConfirmationStatusNullableFilter {
    equals?: keyof typeof ConfirmationStatus;
    in?: Array<keyof typeof ConfirmationStatus>;
    notIn?: Array<keyof typeof ConfirmationStatus>;
    not?: InstanceType<typeof NestedEnumConfirmationStatusNullableFilter>;
}
export declare class NestedEnumConfirmationStatusNullableWithAggregatesFilter {
    equals?: keyof typeof ConfirmationStatus;
    in?: Array<keyof typeof ConfirmationStatus>;
    notIn?: Array<keyof typeof ConfirmationStatus>;
    not?: InstanceType<typeof NestedEnumConfirmationStatusNullableWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    _min?: InstanceType<typeof NestedEnumConfirmationStatusNullableFilter>;
    _max?: InstanceType<typeof NestedEnumConfirmationStatusNullableFilter>;
}
export declare class NestedEnumQueueStatusFilter {
    equals?: keyof typeof QueueStatus;
    in?: Array<keyof typeof QueueStatus>;
    notIn?: Array<keyof typeof QueueStatus>;
    not?: InstanceType<typeof NestedEnumQueueStatusFilter>;
}
export declare class NestedEnumQueueStatusWithAggregatesFilter {
    equals?: keyof typeof QueueStatus;
    in?: Array<keyof typeof QueueStatus>;
    notIn?: Array<keyof typeof QueueStatus>;
    not?: InstanceType<typeof NestedEnumQueueStatusWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedEnumQueueStatusFilter>;
    _max?: InstanceType<typeof NestedEnumQueueStatusFilter>;
}
export declare class NestedEnumUserRoleFilter {
    equals?: keyof typeof UserRole;
    in?: Array<keyof typeof UserRole>;
    notIn?: Array<keyof typeof UserRole>;
    not?: InstanceType<typeof NestedEnumUserRoleFilter>;
}
export declare class NestedEnumUserRoleWithAggregatesFilter {
    equals?: keyof typeof UserRole;
    in?: Array<keyof typeof UserRole>;
    notIn?: Array<keyof typeof UserRole>;
    not?: InstanceType<typeof NestedEnumUserRoleWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedEnumUserRoleFilter>;
    _max?: InstanceType<typeof NestedEnumUserRoleFilter>;
}
export declare class NestedFloatFilter {
    equals?: number;
    in?: Array<number>;
    notIn?: Array<number>;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    not?: InstanceType<typeof NestedFloatFilter>;
}
export declare class NestedFloatNullableFilter {
    equals?: number;
    in?: Array<number>;
    notIn?: Array<number>;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    not?: InstanceType<typeof NestedFloatNullableFilter>;
}
export declare class NestedFloatNullableWithAggregatesFilter {
    equals?: number;
    in?: Array<number>;
    notIn?: Array<number>;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    not?: InstanceType<typeof NestedFloatNullableWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    _avg?: InstanceType<typeof NestedFloatNullableFilter>;
    _sum?: InstanceType<typeof NestedFloatNullableFilter>;
    _min?: InstanceType<typeof NestedFloatNullableFilter>;
    _max?: InstanceType<typeof NestedFloatNullableFilter>;
}
export declare class NestedIntFilter {
    equals?: number;
    in?: Array<number>;
    notIn?: Array<number>;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    not?: InstanceType<typeof NestedIntFilter>;
}
export declare class NestedIntNullableFilter {
    equals?: number;
    in?: Array<number>;
    notIn?: Array<number>;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    not?: InstanceType<typeof NestedIntNullableFilter>;
}
export declare class NestedIntWithAggregatesFilter {
    equals?: number;
    in?: Array<number>;
    notIn?: Array<number>;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    not?: InstanceType<typeof NestedIntWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _avg?: InstanceType<typeof NestedFloatFilter>;
    _sum?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedIntFilter>;
    _max?: InstanceType<typeof NestedIntFilter>;
}
export declare class NestedStringFilter {
    equals?: string;
    in?: Array<string>;
    notIn?: Array<string>;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    contains?: string;
    startsWith?: string;
    endsWith?: string;
    not?: InstanceType<typeof NestedStringFilter>;
}
export declare class NestedStringNullableFilter {
    equals?: string;
    in?: Array<string>;
    notIn?: Array<string>;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    contains?: string;
    startsWith?: string;
    endsWith?: string;
    not?: InstanceType<typeof NestedStringNullableFilter>;
}
export declare class NestedStringNullableWithAggregatesFilter {
    equals?: string;
    in?: Array<string>;
    notIn?: Array<string>;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    contains?: string;
    startsWith?: string;
    endsWith?: string;
    not?: InstanceType<typeof NestedStringNullableWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    _min?: InstanceType<typeof NestedStringNullableFilter>;
    _max?: InstanceType<typeof NestedStringNullableFilter>;
}
export declare class NestedStringWithAggregatesFilter {
    equals?: string;
    in?: Array<string>;
    notIn?: Array<string>;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    contains?: string;
    startsWith?: string;
    endsWith?: string;
    not?: InstanceType<typeof NestedStringWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedStringFilter>;
    _max?: InstanceType<typeof NestedStringFilter>;
}
export declare class NullableDateTimeFieldUpdateOperationsInput {
    set?: Date | string;
}
export declare class NullableEnumConfirmationStatusFieldUpdateOperationsInput {
    set?: keyof typeof ConfirmationStatus;
}
export declare class NullableFloatFieldUpdateOperationsInput {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
}
export declare class NullableStringFieldUpdateOperationsInput {
    set?: string;
}
export declare class SortOrderInput {
    sort: keyof typeof SortOrder;
    nulls?: keyof typeof NullsOrder;
}
export declare class StringFieldUpdateOperationsInput {
    set?: string;
}
export declare class StringFilter {
    equals?: string;
    in?: Array<string>;
    notIn?: Array<string>;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    contains?: string;
    startsWith?: string;
    endsWith?: string;
    not?: InstanceType<typeof NestedStringFilter>;
}
export declare class StringNullableFilter {
    equals?: string;
    in?: Array<string>;
    notIn?: Array<string>;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    contains?: string;
    startsWith?: string;
    endsWith?: string;
    not?: InstanceType<typeof NestedStringNullableFilter>;
}
export declare class StringNullableWithAggregatesFilter {
    equals?: string;
    in?: Array<string>;
    notIn?: Array<string>;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    contains?: string;
    startsWith?: string;
    endsWith?: string;
    not?: InstanceType<typeof NestedStringNullableWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    _min?: InstanceType<typeof NestedStringNullableFilter>;
    _max?: InstanceType<typeof NestedStringNullableFilter>;
}
export declare class StringWithAggregatesFilter {
    equals?: string;
    in?: Array<string>;
    notIn?: Array<string>;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    contains?: string;
    startsWith?: string;
    endsWith?: string;
    not?: InstanceType<typeof NestedStringWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedStringFilter>;
    _max?: InstanceType<typeof NestedStringFilter>;
}
export declare class AggregateQrCode {
    _count?: InstanceType<typeof QrCodeCountAggregate>;
    _avg?: InstanceType<typeof QrCodeAvgAggregate>;
    _sum?: InstanceType<typeof QrCodeSumAggregate>;
    _min?: InstanceType<typeof QrCodeMinAggregate>;
    _max?: InstanceType<typeof QrCodeMaxAggregate>;
}
export declare class CreateManyQrCodeArgs {
    data: Array<QrCodeCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOneQrCodeArgs {
    data: InstanceType<typeof QrCodeCreateInput>;
}
export declare class DeleteManyQrCodeArgs {
    where?: InstanceType<typeof QrCodeWhereInput>;
}
export declare class DeleteOneQrCodeArgs {
    where: Prisma.AtLeast<QrCodeWhereUniqueInput, 'id' | 'guestId'>;
}
export declare class FindFirstQrCodeOrThrowArgs {
    where?: InstanceType<typeof QrCodeWhereInput>;
    orderBy?: Array<QrCodeOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<QrCodeWhereUniqueInput, 'id' | 'guestId'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof QrCodeScalarFieldEnum>;
}
export declare class FindFirstQrCodeArgs {
    where?: InstanceType<typeof QrCodeWhereInput>;
    orderBy?: Array<QrCodeOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<QrCodeWhereUniqueInput, 'id' | 'guestId'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof QrCodeScalarFieldEnum>;
}
export declare class FindManyQrCodeArgs {
    where?: InstanceType<typeof QrCodeWhereInput>;
    orderBy?: Array<QrCodeOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<QrCodeWhereUniqueInput, 'id' | 'guestId'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof QrCodeScalarFieldEnum>;
}
export declare class FindUniqueQrCodeOrThrowArgs {
    where: Prisma.AtLeast<QrCodeWhereUniqueInput, 'id' | 'guestId'>;
}
export declare class FindUniqueQrCodeArgs {
    where: Prisma.AtLeast<QrCodeWhereUniqueInput, 'id' | 'guestId'>;
}
export declare class QrCodeAggregateArgs {
    where?: InstanceType<typeof QrCodeWhereInput>;
    orderBy?: Array<QrCodeOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<QrCodeWhereUniqueInput, 'id' | 'guestId'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof QrCodeCountAggregateInput>;
    _avg?: InstanceType<typeof QrCodeAvgAggregateInput>;
    _sum?: InstanceType<typeof QrCodeSumAggregateInput>;
    _min?: InstanceType<typeof QrCodeMinAggregateInput>;
    _max?: InstanceType<typeof QrCodeMaxAggregateInput>;
}
export declare class QrCodeAvgAggregateInput {
    id?: true;
    raceConditionValue?: true;
}
export declare class QrCodeAvgAggregate {
    id?: number;
    raceConditionValue?: number;
}
export declare class QrCodeAvgOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    raceConditionValue?: keyof typeof SortOrder;
}
export declare class QrCodeCountAggregateInput {
    id?: true;
    path?: true;
    scannedAt?: true;
    createdAt?: true;
    raceConditionValue?: true;
    guestId?: true;
    scannedByUserId?: true;
    _all?: true;
}
export declare class QrCodeCountAggregate {
    id: number;
    path: number;
    scannedAt: number;
    createdAt: number;
    raceConditionValue: number;
    guestId: number;
    scannedByUserId: number;
    _all: number;
}
export declare class QrCodeCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    path?: keyof typeof SortOrder;
    scannedAt?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    raceConditionValue?: keyof typeof SortOrder;
    guestId?: keyof typeof SortOrder;
    scannedByUserId?: keyof typeof SortOrder;
}
export declare class QrCodeCreateManyScannedByInputEnvelope {
    data: Array<QrCodeCreateManyScannedByInput>;
    skipDuplicates?: boolean;
}
export declare class QrCodeCreateManyScannedByInput {
    id?: number;
    path: string;
    scannedAt?: Date | string;
    createdAt?: Date | string;
    raceConditionValue?: number;
    guestId: string;
}
export declare class QrCodeCreateManyInput {
    id?: number;
    path: string;
    scannedAt?: Date | string;
    createdAt?: Date | string;
    raceConditionValue?: number;
    guestId: string;
    scannedByUserId?: string;
}
export declare class QrCodeCreateNestedManyWithoutScannedByInput {
    create?: Array<QrCodeCreateWithoutScannedByInput>;
    connectOrCreate?: Array<QrCodeCreateOrConnectWithoutScannedByInput>;
    createMany?: InstanceType<typeof QrCodeCreateManyScannedByInputEnvelope>;
    connect?: Array<Prisma.AtLeast<QrCodeWhereUniqueInput, 'id' | 'guestId'>>;
}
export declare class QrCodeCreateNestedOneWithoutGuestInput {
    create?: InstanceType<typeof QrCodeCreateWithoutGuestInput>;
    connectOrCreate?: InstanceType<typeof QrCodeCreateOrConnectWithoutGuestInput>;
    connect?: Prisma.AtLeast<QrCodeWhereUniqueInput, 'id' | 'guestId'>;
}
export declare class QrCodeCreateOrConnectWithoutGuestInput {
    where: Prisma.AtLeast<QrCodeWhereUniqueInput, 'id' | 'guestId'>;
    create: InstanceType<typeof QrCodeCreateWithoutGuestInput>;
}
export declare class QrCodeCreateOrConnectWithoutScannedByInput {
    where: Prisma.AtLeast<QrCodeWhereUniqueInput, 'id' | 'guestId'>;
    create: InstanceType<typeof QrCodeCreateWithoutScannedByInput>;
}
export declare class QrCodeCreateWithoutGuestInput {
    path: string;
    scannedAt?: Date | string;
    createdAt?: Date | string;
    raceConditionValue?: number;
    scannedBy?: InstanceType<typeof UserCreateNestedOneWithoutScannedQrsInput>;
}
export declare class QrCodeCreateWithoutScannedByInput {
    path: string;
    scannedAt?: Date | string;
    createdAt?: Date | string;
    raceConditionValue?: number;
    guest: InstanceType<typeof GuestCreateNestedOneWithoutQrcodeInput>;
}
export declare class QrCodeCreateInput {
    path: string;
    scannedAt?: Date | string;
    createdAt?: Date | string;
    raceConditionValue?: number;
    guest: InstanceType<typeof GuestCreateNestedOneWithoutQrcodeInput>;
    scannedBy?: InstanceType<typeof UserCreateNestedOneWithoutScannedQrsInput>;
}
export declare class QrCodeGroupByArgs {
    where?: InstanceType<typeof QrCodeWhereInput>;
    orderBy?: Array<QrCodeOrderByWithAggregationInput>;
    by: Array<keyof typeof QrCodeScalarFieldEnum>;
    having?: InstanceType<typeof QrCodeScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof QrCodeCountAggregateInput>;
    _avg?: InstanceType<typeof QrCodeAvgAggregateInput>;
    _sum?: InstanceType<typeof QrCodeSumAggregateInput>;
    _min?: InstanceType<typeof QrCodeMinAggregateInput>;
    _max?: InstanceType<typeof QrCodeMaxAggregateInput>;
}
export declare class QrCodeGroupBy {
    id: number;
    path: string;
    scannedAt?: Date | string;
    createdAt: Date | string;
    raceConditionValue: number;
    guestId: string;
    scannedByUserId?: string;
    _count?: InstanceType<typeof QrCodeCountAggregate>;
    _avg?: InstanceType<typeof QrCodeAvgAggregate>;
    _sum?: InstanceType<typeof QrCodeSumAggregate>;
    _min?: InstanceType<typeof QrCodeMinAggregate>;
    _max?: InstanceType<typeof QrCodeMaxAggregate>;
}
export declare class QrCodeListRelationFilter {
    every?: InstanceType<typeof QrCodeWhereInput>;
    some?: InstanceType<typeof QrCodeWhereInput>;
    none?: InstanceType<typeof QrCodeWhereInput>;
}
export declare class QrCodeMaxAggregateInput {
    id?: true;
    path?: true;
    scannedAt?: true;
    createdAt?: true;
    raceConditionValue?: true;
    guestId?: true;
    scannedByUserId?: true;
}
export declare class QrCodeMaxAggregate {
    id?: number;
    path?: string;
    scannedAt?: Date | string;
    createdAt?: Date | string;
    raceConditionValue?: number;
    guestId?: string;
    scannedByUserId?: string;
}
export declare class QrCodeMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    path?: keyof typeof SortOrder;
    scannedAt?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    raceConditionValue?: keyof typeof SortOrder;
    guestId?: keyof typeof SortOrder;
    scannedByUserId?: keyof typeof SortOrder;
}
export declare class QrCodeMinAggregateInput {
    id?: true;
    path?: true;
    scannedAt?: true;
    createdAt?: true;
    raceConditionValue?: true;
    guestId?: true;
    scannedByUserId?: true;
}
export declare class QrCodeMinAggregate {
    id?: number;
    path?: string;
    scannedAt?: Date | string;
    createdAt?: Date | string;
    raceConditionValue?: number;
    guestId?: string;
    scannedByUserId?: string;
}
export declare class QrCodeMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    path?: keyof typeof SortOrder;
    scannedAt?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    raceConditionValue?: keyof typeof SortOrder;
    guestId?: keyof typeof SortOrder;
    scannedByUserId?: keyof typeof SortOrder;
}
export declare class QrCodeNullableRelationFilter {
    is?: InstanceType<typeof QrCodeWhereInput>;
    isNot?: InstanceType<typeof QrCodeWhereInput>;
}
export declare class QrCodeOrderByRelationAggregateInput {
    _count?: keyof typeof SortOrder;
}
export declare class QrCodeOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    path?: keyof typeof SortOrder;
    scannedAt?: InstanceType<typeof SortOrderInput>;
    createdAt?: keyof typeof SortOrder;
    raceConditionValue?: keyof typeof SortOrder;
    guestId?: keyof typeof SortOrder;
    scannedByUserId?: InstanceType<typeof SortOrderInput>;
    _count?: InstanceType<typeof QrCodeCountOrderByAggregateInput>;
    _avg?: InstanceType<typeof QrCodeAvgOrderByAggregateInput>;
    _max?: InstanceType<typeof QrCodeMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof QrCodeMinOrderByAggregateInput>;
    _sum?: InstanceType<typeof QrCodeSumOrderByAggregateInput>;
}
export declare class QrCodeOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    path?: keyof typeof SortOrder;
    scannedAt?: InstanceType<typeof SortOrderInput>;
    createdAt?: keyof typeof SortOrder;
    raceConditionValue?: keyof typeof SortOrder;
    guestId?: keyof typeof SortOrder;
    scannedByUserId?: InstanceType<typeof SortOrderInput>;
    guest?: InstanceType<typeof GuestOrderByWithRelationInput>;
    scannedBy?: InstanceType<typeof UserOrderByWithRelationInput>;
}
export declare class QrCodeScalarWhereWithAggregatesInput {
    AND?: Array<QrCodeScalarWhereWithAggregatesInput>;
    OR?: Array<QrCodeScalarWhereWithAggregatesInput>;
    NOT?: Array<QrCodeScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    path?: InstanceType<typeof StringWithAggregatesFilter>;
    scannedAt?: InstanceType<typeof DateTimeNullableWithAggregatesFilter>;
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    raceConditionValue?: InstanceType<typeof IntWithAggregatesFilter>;
    guestId?: InstanceType<typeof StringWithAggregatesFilter>;
    scannedByUserId?: InstanceType<typeof StringNullableWithAggregatesFilter>;
}
export declare class QrCodeScalarWhereInput {
    AND?: Array<QrCodeScalarWhereInput>;
    OR?: Array<QrCodeScalarWhereInput>;
    NOT?: Array<QrCodeScalarWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    path?: InstanceType<typeof StringFilter>;
    scannedAt?: InstanceType<typeof DateTimeNullableFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    raceConditionValue?: InstanceType<typeof IntFilter>;
    guestId?: InstanceType<typeof StringFilter>;
    scannedByUserId?: InstanceType<typeof StringNullableFilter>;
}
export declare class QrCodeSumAggregateInput {
    id?: true;
    raceConditionValue?: true;
}
export declare class QrCodeSumAggregate {
    id?: number;
    raceConditionValue?: number;
}
export declare class QrCodeSumOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    raceConditionValue?: keyof typeof SortOrder;
}
export declare class QrCodeUncheckedCreateNestedManyWithoutScannedByInput {
    create?: Array<QrCodeCreateWithoutScannedByInput>;
    connectOrCreate?: Array<QrCodeCreateOrConnectWithoutScannedByInput>;
    createMany?: InstanceType<typeof QrCodeCreateManyScannedByInputEnvelope>;
    connect?: Array<Prisma.AtLeast<QrCodeWhereUniqueInput, 'id' | 'guestId'>>;
}
export declare class QrCodeUncheckedCreateNestedOneWithoutGuestInput {
    create?: InstanceType<typeof QrCodeCreateWithoutGuestInput>;
    connectOrCreate?: InstanceType<typeof QrCodeCreateOrConnectWithoutGuestInput>;
    connect?: Prisma.AtLeast<QrCodeWhereUniqueInput, 'id' | 'guestId'>;
}
export declare class QrCodeUncheckedCreateWithoutGuestInput {
    id?: number;
    path: string;
    scannedAt?: Date | string;
    createdAt?: Date | string;
    raceConditionValue?: number;
    scannedByUserId?: string;
}
export declare class QrCodeUncheckedCreateWithoutScannedByInput {
    id?: number;
    path: string;
    scannedAt?: Date | string;
    createdAt?: Date | string;
    raceConditionValue?: number;
    guestId: string;
}
export declare class QrCodeUncheckedCreateInput {
    id?: number;
    path: string;
    scannedAt?: Date | string;
    createdAt?: Date | string;
    raceConditionValue?: number;
    guestId: string;
    scannedByUserId?: string;
}
export declare class QrCodeUncheckedUpdateManyWithoutScannedByNestedInput {
    create?: Array<QrCodeCreateWithoutScannedByInput>;
    connectOrCreate?: Array<QrCodeCreateOrConnectWithoutScannedByInput>;
    upsert?: Array<QrCodeUpsertWithWhereUniqueWithoutScannedByInput>;
    createMany?: InstanceType<typeof QrCodeCreateManyScannedByInputEnvelope>;
    set?: Array<Prisma.AtLeast<QrCodeWhereUniqueInput, 'id' | 'guestId'>>;
    disconnect?: Array<Prisma.AtLeast<QrCodeWhereUniqueInput, 'id' | 'guestId'>>;
    delete?: Array<Prisma.AtLeast<QrCodeWhereUniqueInput, 'id' | 'guestId'>>;
    connect?: Array<Prisma.AtLeast<QrCodeWhereUniqueInput, 'id' | 'guestId'>>;
    update?: Array<QrCodeUpdateWithWhereUniqueWithoutScannedByInput>;
    updateMany?: Array<QrCodeUpdateManyWithWhereWithoutScannedByInput>;
    deleteMany?: Array<QrCodeScalarWhereInput>;
}
export declare class QrCodeUncheckedUpdateManyWithoutScannedByInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    path?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    scannedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    raceConditionValue?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    guestId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class QrCodeUncheckedUpdateManyInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    path?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    scannedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    raceConditionValue?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    guestId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    scannedByUserId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
}
export declare class QrCodeUncheckedUpdateOneWithoutGuestNestedInput {
    create?: InstanceType<typeof QrCodeCreateWithoutGuestInput>;
    connectOrCreate?: InstanceType<typeof QrCodeCreateOrConnectWithoutGuestInput>;
    upsert?: InstanceType<typeof QrCodeUpsertWithoutGuestInput>;
    disconnect?: InstanceType<typeof QrCodeWhereInput>;
    delete?: InstanceType<typeof QrCodeWhereInput>;
    connect?: Prisma.AtLeast<QrCodeWhereUniqueInput, 'id' | 'guestId'>;
    update?: InstanceType<typeof QrCodeUpdateToOneWithWhereWithoutGuestInput>;
}
export declare class QrCodeUncheckedUpdateWithoutGuestInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    path?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    scannedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    raceConditionValue?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    scannedByUserId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
}
export declare class QrCodeUncheckedUpdateWithoutScannedByInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    path?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    scannedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    raceConditionValue?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    guestId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class QrCodeUncheckedUpdateInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    path?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    scannedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    raceConditionValue?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    guestId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    scannedByUserId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
}
export declare class QrCodeUpdateManyMutationInput {
    path?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    scannedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    raceConditionValue?: InstanceType<typeof IntFieldUpdateOperationsInput>;
}
export declare class QrCodeUpdateManyWithWhereWithoutScannedByInput {
    where: InstanceType<typeof QrCodeScalarWhereInput>;
    data: InstanceType<typeof QrCodeUpdateManyMutationInput>;
}
export declare class QrCodeUpdateManyWithoutScannedByNestedInput {
    create?: Array<QrCodeCreateWithoutScannedByInput>;
    connectOrCreate?: Array<QrCodeCreateOrConnectWithoutScannedByInput>;
    upsert?: Array<QrCodeUpsertWithWhereUniqueWithoutScannedByInput>;
    createMany?: InstanceType<typeof QrCodeCreateManyScannedByInputEnvelope>;
    set?: Array<Prisma.AtLeast<QrCodeWhereUniqueInput, 'id' | 'guestId'>>;
    disconnect?: Array<Prisma.AtLeast<QrCodeWhereUniqueInput, 'id' | 'guestId'>>;
    delete?: Array<Prisma.AtLeast<QrCodeWhereUniqueInput, 'id' | 'guestId'>>;
    connect?: Array<Prisma.AtLeast<QrCodeWhereUniqueInput, 'id' | 'guestId'>>;
    update?: Array<QrCodeUpdateWithWhereUniqueWithoutScannedByInput>;
    updateMany?: Array<QrCodeUpdateManyWithWhereWithoutScannedByInput>;
    deleteMany?: Array<QrCodeScalarWhereInput>;
}
export declare class QrCodeUpdateOneWithoutGuestNestedInput {
    create?: InstanceType<typeof QrCodeCreateWithoutGuestInput>;
    connectOrCreate?: InstanceType<typeof QrCodeCreateOrConnectWithoutGuestInput>;
    upsert?: InstanceType<typeof QrCodeUpsertWithoutGuestInput>;
    disconnect?: InstanceType<typeof QrCodeWhereInput>;
    delete?: InstanceType<typeof QrCodeWhereInput>;
    connect?: Prisma.AtLeast<QrCodeWhereUniqueInput, 'id' | 'guestId'>;
    update?: InstanceType<typeof QrCodeUpdateToOneWithWhereWithoutGuestInput>;
}
export declare class QrCodeUpdateToOneWithWhereWithoutGuestInput {
    where?: InstanceType<typeof QrCodeWhereInput>;
    data: InstanceType<typeof QrCodeUpdateWithoutGuestInput>;
}
export declare class QrCodeUpdateWithWhereUniqueWithoutScannedByInput {
    where: Prisma.AtLeast<QrCodeWhereUniqueInput, 'id' | 'guestId'>;
    data: InstanceType<typeof QrCodeUpdateWithoutScannedByInput>;
}
export declare class QrCodeUpdateWithoutGuestInput {
    path?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    scannedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    raceConditionValue?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    scannedBy?: InstanceType<typeof UserUpdateOneWithoutScannedQrsNestedInput>;
}
export declare class QrCodeUpdateWithoutScannedByInput {
    path?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    scannedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    raceConditionValue?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    guest?: InstanceType<typeof GuestUpdateOneRequiredWithoutQrcodeNestedInput>;
}
export declare class QrCodeUpdateInput {
    path?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    scannedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    raceConditionValue?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    guest?: InstanceType<typeof GuestUpdateOneRequiredWithoutQrcodeNestedInput>;
    scannedBy?: InstanceType<typeof UserUpdateOneWithoutScannedQrsNestedInput>;
}
export declare class QrCodeUpsertWithWhereUniqueWithoutScannedByInput {
    where: Prisma.AtLeast<QrCodeWhereUniqueInput, 'id' | 'guestId'>;
    update: InstanceType<typeof QrCodeUpdateWithoutScannedByInput>;
    create: InstanceType<typeof QrCodeCreateWithoutScannedByInput>;
}
export declare class QrCodeUpsertWithoutGuestInput {
    update: InstanceType<typeof QrCodeUpdateWithoutGuestInput>;
    create: InstanceType<typeof QrCodeCreateWithoutGuestInput>;
    where?: InstanceType<typeof QrCodeWhereInput>;
}
export declare class QrCodeWhereUniqueInput {
    id?: number;
    guestId?: string;
    AND?: Array<QrCodeWhereInput>;
    OR?: Array<QrCodeWhereInput>;
    NOT?: Array<QrCodeWhereInput>;
    path?: InstanceType<typeof StringFilter>;
    scannedAt?: InstanceType<typeof DateTimeNullableFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    raceConditionValue?: InstanceType<typeof IntFilter>;
    scannedByUserId?: InstanceType<typeof StringNullableFilter>;
    guest?: InstanceType<typeof GuestRelationFilter>;
    scannedBy?: InstanceType<typeof UserNullableRelationFilter>;
}
export declare class QrCodeWhereInput {
    AND?: Array<QrCodeWhereInput>;
    OR?: Array<QrCodeWhereInput>;
    NOT?: Array<QrCodeWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    path?: InstanceType<typeof StringFilter>;
    scannedAt?: InstanceType<typeof DateTimeNullableFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    raceConditionValue?: InstanceType<typeof IntFilter>;
    guestId?: InstanceType<typeof StringFilter>;
    scannedByUserId?: InstanceType<typeof StringNullableFilter>;
    guest?: InstanceType<typeof GuestRelationFilter>;
    scannedBy?: InstanceType<typeof UserNullableRelationFilter>;
}
export declare class QrCode {
    id: number;
    path: string;
    scannedAt: Date | null;
    createdAt: Date;
    raceConditionValue: number;
    guestId: string;
    scannedByUserId: string | null;
    guest?: InstanceType<typeof Guest>;
    scannedBy?: InstanceType<typeof User> | null;
}
export declare class UpdateManyQrCodeArgs {
    data: InstanceType<typeof QrCodeUpdateManyMutationInput>;
    where?: InstanceType<typeof QrCodeWhereInput>;
}
export declare class UpdateOneQrCodeArgs {
    data: InstanceType<typeof QrCodeUpdateInput>;
    where: Prisma.AtLeast<QrCodeWhereUniqueInput, 'id' | 'guestId'>;
}
export declare class UpsertOneQrCodeArgs {
    where: Prisma.AtLeast<QrCodeWhereUniqueInput, 'id' | 'guestId'>;
    create: InstanceType<typeof QrCodeCreateInput>;
    update: InstanceType<typeof QrCodeUpdateInput>;
}
export declare class AggregateUser {
    _count?: InstanceType<typeof UserCountAggregate>;
    _min?: InstanceType<typeof UserMinAggregate>;
    _max?: InstanceType<typeof UserMaxAggregate>;
}
export declare class CreateManyUserArgs {
    data: Array<UserCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOneUserArgs {
    data: InstanceType<typeof UserCreateInput>;
}
export declare class DeleteManyUserArgs {
    where?: InstanceType<typeof UserWhereInput>;
}
export declare class DeleteOneUserArgs {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
export declare class FindFirstUserOrThrowArgs {
    where?: InstanceType<typeof UserWhereInput>;
    orderBy?: Array<UserOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof UserScalarFieldEnum>;
}
export declare class FindFirstUserArgs {
    where?: InstanceType<typeof UserWhereInput>;
    orderBy?: Array<UserOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof UserScalarFieldEnum>;
}
export declare class FindManyUserArgs {
    where?: InstanceType<typeof UserWhereInput>;
    orderBy?: Array<UserOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof UserScalarFieldEnum>;
}
export declare class FindUniqueUserOrThrowArgs {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
export declare class FindUniqueUserArgs {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
export declare class UpdateManyUserArgs {
    data: InstanceType<typeof UserUpdateManyMutationInput>;
    where?: InstanceType<typeof UserWhereInput>;
}
export declare class UpdateOneUserArgs {
    data: InstanceType<typeof UserUpdateInput>;
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
export declare class UpsertOneUserArgs {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
    create: InstanceType<typeof UserCreateInput>;
    update: InstanceType<typeof UserUpdateInput>;
}
export declare class UserAggregateArgs {
    where?: InstanceType<typeof UserWhereInput>;
    orderBy?: Array<UserOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof UserCountAggregateInput>;
    _min?: InstanceType<typeof UserMinAggregateInput>;
    _max?: InstanceType<typeof UserMaxAggregateInput>;
}
export declare class UserCountAggregateInput {
    id?: true;
    fullName?: true;
    email?: true;
    password?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
    role?: true;
    _all?: true;
}
export declare class UserCountAggregate {
    id: number;
    fullName: number;
    email: number;
    password: number;
    createdAt: number;
    updatedAt: number;
    deletedAt: number;
    role: number;
    _all: number;
}
export declare class UserCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    fullName?: keyof typeof SortOrder;
    email?: keyof typeof SortOrder;
    password?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    deletedAt?: keyof typeof SortOrder;
    role?: keyof typeof SortOrder;
}
export declare class UserCount {
    scannedQrs?: number;
}
export declare class UserCreateManyInput {
    id?: string;
    fullName: string;
    email?: string;
    password?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    role: keyof typeof UserRole;
}
export declare class UserCreateNestedOneWithoutScannedQrsInput {
    create?: InstanceType<typeof UserCreateWithoutScannedQrsInput>;
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutScannedQrsInput>;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
export declare class UserCreateOrConnectWithoutScannedQrsInput {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
    create: InstanceType<typeof UserCreateWithoutScannedQrsInput>;
}
export declare class UserCreateWithoutScannedQrsInput {
    id?: string;
    fullName: string;
    email?: string;
    password?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    role: keyof typeof UserRole;
}
export declare class UserCreateInput {
    id?: string;
    fullName: string;
    email?: string;
    password?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    role: keyof typeof UserRole;
    scannedQrs?: InstanceType<typeof QrCodeCreateNestedManyWithoutScannedByInput>;
}
export declare class UserGroupByArgs {
    where?: InstanceType<typeof UserWhereInput>;
    orderBy?: Array<UserOrderByWithAggregationInput>;
    by: Array<keyof typeof UserScalarFieldEnum>;
    having?: InstanceType<typeof UserScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof UserCountAggregateInput>;
    _min?: InstanceType<typeof UserMinAggregateInput>;
    _max?: InstanceType<typeof UserMaxAggregateInput>;
}
export declare class UserGroupBy {
    id: string;
    fullName: string;
    email?: string;
    password?: string;
    createdAt: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    role: keyof typeof UserRole;
    _count?: InstanceType<typeof UserCountAggregate>;
    _min?: InstanceType<typeof UserMinAggregate>;
    _max?: InstanceType<typeof UserMaxAggregate>;
}
export declare class UserMaxAggregateInput {
    id?: true;
    fullName?: true;
    email?: true;
    password?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
    role?: true;
}
export declare class UserMaxAggregate {
    id?: string;
    fullName?: string;
    email?: string;
    password?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    role?: keyof typeof UserRole;
}
export declare class UserMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    fullName?: keyof typeof SortOrder;
    email?: keyof typeof SortOrder;
    password?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    deletedAt?: keyof typeof SortOrder;
    role?: keyof typeof SortOrder;
}
export declare class UserMinAggregateInput {
    id?: true;
    fullName?: true;
    email?: true;
    password?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
    role?: true;
}
export declare class UserMinAggregate {
    id?: string;
    fullName?: string;
    email?: string;
    password?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    role?: keyof typeof UserRole;
}
export declare class UserMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    fullName?: keyof typeof SortOrder;
    email?: keyof typeof SortOrder;
    password?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    deletedAt?: keyof typeof SortOrder;
    role?: keyof typeof SortOrder;
}
export declare class UserNullableRelationFilter {
    is?: InstanceType<typeof UserWhereInput>;
    isNot?: InstanceType<typeof UserWhereInput>;
}
export declare class UserOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    fullName?: keyof typeof SortOrder;
    email?: InstanceType<typeof SortOrderInput>;
    password?: InstanceType<typeof SortOrderInput>;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: InstanceType<typeof SortOrderInput>;
    deletedAt?: InstanceType<typeof SortOrderInput>;
    role?: keyof typeof SortOrder;
    _count?: InstanceType<typeof UserCountOrderByAggregateInput>;
    _max?: InstanceType<typeof UserMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof UserMinOrderByAggregateInput>;
}
export declare class UserOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    fullName?: keyof typeof SortOrder;
    email?: InstanceType<typeof SortOrderInput>;
    password?: InstanceType<typeof SortOrderInput>;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: InstanceType<typeof SortOrderInput>;
    deletedAt?: InstanceType<typeof SortOrderInput>;
    role?: keyof typeof SortOrder;
    scannedQrs?: InstanceType<typeof QrCodeOrderByRelationAggregateInput>;
}
export declare class UserScalarWhereWithAggregatesInput {
    AND?: Array<UserScalarWhereWithAggregatesInput>;
    OR?: Array<UserScalarWhereWithAggregatesInput>;
    NOT?: Array<UserScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    fullName?: InstanceType<typeof StringWithAggregatesFilter>;
    email?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    password?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    updatedAt?: InstanceType<typeof DateTimeNullableWithAggregatesFilter>;
    deletedAt?: InstanceType<typeof DateTimeNullableWithAggregatesFilter>;
    role?: InstanceType<typeof EnumUserRoleWithAggregatesFilter>;
}
export declare class UserUncheckedCreateWithoutScannedQrsInput {
    id?: string;
    fullName: string;
    email?: string;
    password?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    role: keyof typeof UserRole;
}
export declare class UserUncheckedCreateInput {
    id?: string;
    fullName: string;
    email?: string;
    password?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    role: keyof typeof UserRole;
    scannedQrs?: InstanceType<typeof QrCodeUncheckedCreateNestedManyWithoutScannedByInput>;
}
export declare class UserUncheckedUpdateManyInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    fullName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    password?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    role?: InstanceType<typeof EnumUserRoleFieldUpdateOperationsInput>;
}
export declare class UserUncheckedUpdateWithoutScannedQrsInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    fullName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    password?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    role?: InstanceType<typeof EnumUserRoleFieldUpdateOperationsInput>;
}
export declare class UserUncheckedUpdateInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    fullName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    password?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    role?: InstanceType<typeof EnumUserRoleFieldUpdateOperationsInput>;
    scannedQrs?: InstanceType<typeof QrCodeUncheckedUpdateManyWithoutScannedByNestedInput>;
}
export declare class UserUpdateManyMutationInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    fullName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    password?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    role?: InstanceType<typeof EnumUserRoleFieldUpdateOperationsInput>;
}
export declare class UserUpdateOneWithoutScannedQrsNestedInput {
    create?: InstanceType<typeof UserCreateWithoutScannedQrsInput>;
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutScannedQrsInput>;
    upsert?: InstanceType<typeof UserUpsertWithoutScannedQrsInput>;
    disconnect?: InstanceType<typeof UserWhereInput>;
    delete?: InstanceType<typeof UserWhereInput>;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
    update?: InstanceType<typeof UserUpdateToOneWithWhereWithoutScannedQrsInput>;
}
export declare class UserUpdateToOneWithWhereWithoutScannedQrsInput {
    where?: InstanceType<typeof UserWhereInput>;
    data: InstanceType<typeof UserUpdateWithoutScannedQrsInput>;
}
export declare class UserUpdateWithoutScannedQrsInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    fullName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    password?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    role?: InstanceType<typeof EnumUserRoleFieldUpdateOperationsInput>;
}
export declare class UserUpdateInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    fullName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    password?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    role?: InstanceType<typeof EnumUserRoleFieldUpdateOperationsInput>;
    scannedQrs?: InstanceType<typeof QrCodeUpdateManyWithoutScannedByNestedInput>;
}
export declare class UserUpsertWithoutScannedQrsInput {
    update: InstanceType<typeof UserUpdateWithoutScannedQrsInput>;
    create: InstanceType<typeof UserCreateWithoutScannedQrsInput>;
    where?: InstanceType<typeof UserWhereInput>;
}
export declare class UserWhereUniqueInput {
    id?: string;
    email?: string;
    AND?: Array<UserWhereInput>;
    OR?: Array<UserWhereInput>;
    NOT?: Array<UserWhereInput>;
    fullName?: InstanceType<typeof StringFilter>;
    password?: InstanceType<typeof StringNullableFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeNullableFilter>;
    deletedAt?: InstanceType<typeof DateTimeNullableFilter>;
    role?: InstanceType<typeof EnumUserRoleFilter>;
    scannedQrs?: InstanceType<typeof QrCodeListRelationFilter>;
}
export declare class UserWhereInput {
    AND?: Array<UserWhereInput>;
    OR?: Array<UserWhereInput>;
    NOT?: Array<UserWhereInput>;
    id?: InstanceType<typeof StringFilter>;
    fullName?: InstanceType<typeof StringFilter>;
    email?: InstanceType<typeof StringNullableFilter>;
    password?: InstanceType<typeof StringNullableFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeNullableFilter>;
    deletedAt?: InstanceType<typeof DateTimeNullableFilter>;
    role?: InstanceType<typeof EnumUserRoleFilter>;
    scannedQrs?: InstanceType<typeof QrCodeListRelationFilter>;
}
export declare class User {
    id: string;
    fullName: string;
    email: string | null;
    password: string | null;
    createdAt: Date;
    updatedAt: Date | null;
    deletedAt: Date | null;
    role: keyof typeof UserRole;
    scannedQrs?: Array<QrCode>;
    _count?: InstanceType<typeof UserCount>;
}
export declare class AggregateWhatsappStatus {
    _count?: InstanceType<typeof WhatsappStatusCountAggregate>;
    _avg?: InstanceType<typeof WhatsappStatusAvgAggregate>;
    _sum?: InstanceType<typeof WhatsappStatusSumAggregate>;
    _min?: InstanceType<typeof WhatsappStatusMinAggregate>;
    _max?: InstanceType<typeof WhatsappStatusMaxAggregate>;
}
export declare class CreateManyWhatsappStatusArgs {
    data: Array<WhatsappStatusCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOneWhatsappStatusArgs {
    data: InstanceType<typeof WhatsappStatusCreateInput>;
}
export declare class DeleteManyWhatsappStatusArgs {
    where?: InstanceType<typeof WhatsappStatusWhereInput>;
}
export declare class DeleteOneWhatsappStatusArgs {
    where: Prisma.AtLeast<WhatsappStatusWhereUniqueInput, 'id'>;
}
export declare class FindFirstWhatsappStatusOrThrowArgs {
    where?: InstanceType<typeof WhatsappStatusWhereInput>;
    orderBy?: Array<WhatsappStatusOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<WhatsappStatusWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof WhatsappStatusScalarFieldEnum>;
}
export declare class FindFirstWhatsappStatusArgs {
    where?: InstanceType<typeof WhatsappStatusWhereInput>;
    orderBy?: Array<WhatsappStatusOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<WhatsappStatusWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof WhatsappStatusScalarFieldEnum>;
}
export declare class FindManyWhatsappStatusArgs {
    where?: InstanceType<typeof WhatsappStatusWhereInput>;
    orderBy?: Array<WhatsappStatusOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<WhatsappStatusWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof WhatsappStatusScalarFieldEnum>;
}
export declare class FindUniqueWhatsappStatusOrThrowArgs {
    where: Prisma.AtLeast<WhatsappStatusWhereUniqueInput, 'id'>;
}
export declare class FindUniqueWhatsappStatusArgs {
    where: Prisma.AtLeast<WhatsappStatusWhereUniqueInput, 'id'>;
}
export declare class UpdateManyWhatsappStatusArgs {
    data: InstanceType<typeof WhatsappStatusUpdateManyMutationInput>;
    where?: InstanceType<typeof WhatsappStatusWhereInput>;
}
export declare class UpdateOneWhatsappStatusArgs {
    data: InstanceType<typeof WhatsappStatusUpdateInput>;
    where: Prisma.AtLeast<WhatsappStatusWhereUniqueInput, 'id'>;
}
export declare class UpsertOneWhatsappStatusArgs {
    where: Prisma.AtLeast<WhatsappStatusWhereUniqueInput, 'id'>;
    create: InstanceType<typeof WhatsappStatusCreateInput>;
    update: InstanceType<typeof WhatsappStatusUpdateInput>;
}
export declare class WhatsappStatusAggregateArgs {
    where?: InstanceType<typeof WhatsappStatusWhereInput>;
    orderBy?: Array<WhatsappStatusOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<WhatsappStatusWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof WhatsappStatusCountAggregateInput>;
    _avg?: InstanceType<typeof WhatsappStatusAvgAggregateInput>;
    _sum?: InstanceType<typeof WhatsappStatusSumAggregateInput>;
    _min?: InstanceType<typeof WhatsappStatusMinAggregateInput>;
    _max?: InstanceType<typeof WhatsappStatusMaxAggregateInput>;
}
export declare class WhatsappStatusAvgAggregateInput {
    id?: true;
}
export declare class WhatsappStatusAvgAggregate {
    id?: number;
}
export declare class WhatsappStatusAvgOrderByAggregateInput {
    id?: keyof typeof SortOrder;
}
export declare class WhatsappStatusCountAggregateInput {
    id?: true;
    refId?: true;
    message?: true;
    createdAt?: true;
    status?: true;
    guestId?: true;
    _all?: true;
}
export declare class WhatsappStatusCountAggregate {
    id: number;
    refId: number;
    message: number;
    createdAt: number;
    status: number;
    guestId: number;
    _all: number;
}
export declare class WhatsappStatusCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    refId?: keyof typeof SortOrder;
    message?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    status?: keyof typeof SortOrder;
    guestId?: keyof typeof SortOrder;
}
export declare class WhatsappStatusCreateManyGuestInputEnvelope {
    data: Array<WhatsappStatusCreateManyGuestInput>;
    skipDuplicates?: boolean;
}
export declare class WhatsappStatusCreateManyGuestInput {
    id?: number;
    refId?: string;
    message?: string;
    createdAt?: Date | string;
    status?: keyof typeof QueueStatus;
}
export declare class WhatsappStatusCreateManyInput {
    id?: number;
    refId?: string;
    message?: string;
    createdAt?: Date | string;
    status?: keyof typeof QueueStatus;
    guestId: string;
}
export declare class WhatsappStatusCreateNestedManyWithoutGuestInput {
    create?: Array<WhatsappStatusCreateWithoutGuestInput>;
    connectOrCreate?: Array<WhatsappStatusCreateOrConnectWithoutGuestInput>;
    createMany?: InstanceType<typeof WhatsappStatusCreateManyGuestInputEnvelope>;
    connect?: Array<Prisma.AtLeast<WhatsappStatusWhereUniqueInput, 'id'>>;
}
export declare class WhatsappStatusCreateOrConnectWithoutGuestInput {
    where: Prisma.AtLeast<WhatsappStatusWhereUniqueInput, 'id'>;
    create: InstanceType<typeof WhatsappStatusCreateWithoutGuestInput>;
}
export declare class WhatsappStatusCreateWithoutGuestInput {
    refId?: string;
    message?: string;
    createdAt?: Date | string;
    status?: keyof typeof QueueStatus;
}
export declare class WhatsappStatusCreateInput {
    refId?: string;
    message?: string;
    createdAt?: Date | string;
    status?: keyof typeof QueueStatus;
    guest: InstanceType<typeof GuestCreateNestedOneWithoutWhatsappStatusesInput>;
}
export declare class WhatsappStatusGroupByArgs {
    where?: InstanceType<typeof WhatsappStatusWhereInput>;
    orderBy?: Array<WhatsappStatusOrderByWithAggregationInput>;
    by: Array<keyof typeof WhatsappStatusScalarFieldEnum>;
    having?: InstanceType<typeof WhatsappStatusScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof WhatsappStatusCountAggregateInput>;
    _avg?: InstanceType<typeof WhatsappStatusAvgAggregateInput>;
    _sum?: InstanceType<typeof WhatsappStatusSumAggregateInput>;
    _min?: InstanceType<typeof WhatsappStatusMinAggregateInput>;
    _max?: InstanceType<typeof WhatsappStatusMaxAggregateInput>;
}
export declare class WhatsappStatusGroupBy {
    id: number;
    refId: string;
    message?: string;
    createdAt: Date | string;
    status: keyof typeof QueueStatus;
    guestId: string;
    _count?: InstanceType<typeof WhatsappStatusCountAggregate>;
    _avg?: InstanceType<typeof WhatsappStatusAvgAggregate>;
    _sum?: InstanceType<typeof WhatsappStatusSumAggregate>;
    _min?: InstanceType<typeof WhatsappStatusMinAggregate>;
    _max?: InstanceType<typeof WhatsappStatusMaxAggregate>;
}
export declare class WhatsappStatusListRelationFilter {
    every?: InstanceType<typeof WhatsappStatusWhereInput>;
    some?: InstanceType<typeof WhatsappStatusWhereInput>;
    none?: InstanceType<typeof WhatsappStatusWhereInput>;
}
export declare class WhatsappStatusMaxAggregateInput {
    id?: true;
    refId?: true;
    message?: true;
    createdAt?: true;
    status?: true;
    guestId?: true;
}
export declare class WhatsappStatusMaxAggregate {
    id?: number;
    refId?: string;
    message?: string;
    createdAt?: Date | string;
    status?: keyof typeof QueueStatus;
    guestId?: string;
}
export declare class WhatsappStatusMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    refId?: keyof typeof SortOrder;
    message?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    status?: keyof typeof SortOrder;
    guestId?: keyof typeof SortOrder;
}
export declare class WhatsappStatusMinAggregateInput {
    id?: true;
    refId?: true;
    message?: true;
    createdAt?: true;
    status?: true;
    guestId?: true;
}
export declare class WhatsappStatusMinAggregate {
    id?: number;
    refId?: string;
    message?: string;
    createdAt?: Date | string;
    status?: keyof typeof QueueStatus;
    guestId?: string;
}
export declare class WhatsappStatusMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    refId?: keyof typeof SortOrder;
    message?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    status?: keyof typeof SortOrder;
    guestId?: keyof typeof SortOrder;
}
export declare class WhatsappStatusOrderByRelationAggregateInput {
    _count?: keyof typeof SortOrder;
}
export declare class WhatsappStatusOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    refId?: keyof typeof SortOrder;
    message?: InstanceType<typeof SortOrderInput>;
    createdAt?: keyof typeof SortOrder;
    status?: keyof typeof SortOrder;
    guestId?: keyof typeof SortOrder;
    _count?: InstanceType<typeof WhatsappStatusCountOrderByAggregateInput>;
    _avg?: InstanceType<typeof WhatsappStatusAvgOrderByAggregateInput>;
    _max?: InstanceType<typeof WhatsappStatusMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof WhatsappStatusMinOrderByAggregateInput>;
    _sum?: InstanceType<typeof WhatsappStatusSumOrderByAggregateInput>;
}
export declare class WhatsappStatusOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    refId?: keyof typeof SortOrder;
    message?: InstanceType<typeof SortOrderInput>;
    createdAt?: keyof typeof SortOrder;
    status?: keyof typeof SortOrder;
    guestId?: keyof typeof SortOrder;
    guest?: InstanceType<typeof GuestOrderByWithRelationInput>;
}
export declare class WhatsappStatusScalarWhereWithAggregatesInput {
    AND?: Array<WhatsappStatusScalarWhereWithAggregatesInput>;
    OR?: Array<WhatsappStatusScalarWhereWithAggregatesInput>;
    NOT?: Array<WhatsappStatusScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    refId?: InstanceType<typeof StringWithAggregatesFilter>;
    message?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    status?: InstanceType<typeof EnumQueueStatusWithAggregatesFilter>;
    guestId?: InstanceType<typeof StringWithAggregatesFilter>;
}
export declare class WhatsappStatusScalarWhereInput {
    AND?: Array<WhatsappStatusScalarWhereInput>;
    OR?: Array<WhatsappStatusScalarWhereInput>;
    NOT?: Array<WhatsappStatusScalarWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    refId?: InstanceType<typeof StringFilter>;
    message?: InstanceType<typeof StringNullableFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    status?: InstanceType<typeof EnumQueueStatusFilter>;
    guestId?: InstanceType<typeof StringFilter>;
}
export declare class WhatsappStatusSumAggregateInput {
    id?: true;
}
export declare class WhatsappStatusSumAggregate {
    id?: number;
}
export declare class WhatsappStatusSumOrderByAggregateInput {
    id?: keyof typeof SortOrder;
}
export declare class WhatsappStatusUncheckedCreateNestedManyWithoutGuestInput {
    create?: Array<WhatsappStatusCreateWithoutGuestInput>;
    connectOrCreate?: Array<WhatsappStatusCreateOrConnectWithoutGuestInput>;
    createMany?: InstanceType<typeof WhatsappStatusCreateManyGuestInputEnvelope>;
    connect?: Array<Prisma.AtLeast<WhatsappStatusWhereUniqueInput, 'id'>>;
}
export declare class WhatsappStatusUncheckedCreateWithoutGuestInput {
    id?: number;
    refId?: string;
    message?: string;
    createdAt?: Date | string;
    status?: keyof typeof QueueStatus;
}
export declare class WhatsappStatusUncheckedCreateInput {
    id?: number;
    refId?: string;
    message?: string;
    createdAt?: Date | string;
    status?: keyof typeof QueueStatus;
    guestId: string;
}
export declare class WhatsappStatusUncheckedUpdateManyWithoutGuestNestedInput {
    create?: Array<WhatsappStatusCreateWithoutGuestInput>;
    connectOrCreate?: Array<WhatsappStatusCreateOrConnectWithoutGuestInput>;
    upsert?: Array<WhatsappStatusUpsertWithWhereUniqueWithoutGuestInput>;
    createMany?: InstanceType<typeof WhatsappStatusCreateManyGuestInputEnvelope>;
    set?: Array<Prisma.AtLeast<WhatsappStatusWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<WhatsappStatusWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<WhatsappStatusWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<WhatsappStatusWhereUniqueInput, 'id'>>;
    update?: Array<WhatsappStatusUpdateWithWhereUniqueWithoutGuestInput>;
    updateMany?: Array<WhatsappStatusUpdateManyWithWhereWithoutGuestInput>;
    deleteMany?: Array<WhatsappStatusScalarWhereInput>;
}
export declare class WhatsappStatusUncheckedUpdateManyWithoutGuestInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    refId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    message?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumQueueStatusFieldUpdateOperationsInput>;
}
export declare class WhatsappStatusUncheckedUpdateManyInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    refId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    message?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumQueueStatusFieldUpdateOperationsInput>;
    guestId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class WhatsappStatusUncheckedUpdateWithoutGuestInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    refId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    message?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumQueueStatusFieldUpdateOperationsInput>;
}
export declare class WhatsappStatusUncheckedUpdateInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    refId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    message?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumQueueStatusFieldUpdateOperationsInput>;
    guestId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class WhatsappStatusUpdateManyMutationInput {
    refId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    message?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumQueueStatusFieldUpdateOperationsInput>;
}
export declare class WhatsappStatusUpdateManyWithWhereWithoutGuestInput {
    where: InstanceType<typeof WhatsappStatusScalarWhereInput>;
    data: InstanceType<typeof WhatsappStatusUpdateManyMutationInput>;
}
export declare class WhatsappStatusUpdateManyWithoutGuestNestedInput {
    create?: Array<WhatsappStatusCreateWithoutGuestInput>;
    connectOrCreate?: Array<WhatsappStatusCreateOrConnectWithoutGuestInput>;
    upsert?: Array<WhatsappStatusUpsertWithWhereUniqueWithoutGuestInput>;
    createMany?: InstanceType<typeof WhatsappStatusCreateManyGuestInputEnvelope>;
    set?: Array<Prisma.AtLeast<WhatsappStatusWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<WhatsappStatusWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<WhatsappStatusWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<WhatsappStatusWhereUniqueInput, 'id'>>;
    update?: Array<WhatsappStatusUpdateWithWhereUniqueWithoutGuestInput>;
    updateMany?: Array<WhatsappStatusUpdateManyWithWhereWithoutGuestInput>;
    deleteMany?: Array<WhatsappStatusScalarWhereInput>;
}
export declare class WhatsappStatusUpdateWithWhereUniqueWithoutGuestInput {
    where: Prisma.AtLeast<WhatsappStatusWhereUniqueInput, 'id'>;
    data: InstanceType<typeof WhatsappStatusUpdateWithoutGuestInput>;
}
export declare class WhatsappStatusUpdateWithoutGuestInput {
    refId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    message?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumQueueStatusFieldUpdateOperationsInput>;
}
export declare class WhatsappStatusUpdateInput {
    refId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    message?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumQueueStatusFieldUpdateOperationsInput>;
    guest?: InstanceType<typeof GuestUpdateOneRequiredWithoutWhatsappStatusesNestedInput>;
}
export declare class WhatsappStatusUpsertWithWhereUniqueWithoutGuestInput {
    where: Prisma.AtLeast<WhatsappStatusWhereUniqueInput, 'id'>;
    update: InstanceType<typeof WhatsappStatusUpdateWithoutGuestInput>;
    create: InstanceType<typeof WhatsappStatusCreateWithoutGuestInput>;
}
export declare class WhatsappStatusWhereUniqueInput {
    id?: number;
    AND?: Array<WhatsappStatusWhereInput>;
    OR?: Array<WhatsappStatusWhereInput>;
    NOT?: Array<WhatsappStatusWhereInput>;
    refId?: InstanceType<typeof StringFilter>;
    message?: InstanceType<typeof StringNullableFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    status?: InstanceType<typeof EnumQueueStatusFilter>;
    guestId?: InstanceType<typeof StringFilter>;
    guest?: InstanceType<typeof GuestRelationFilter>;
}
export declare class WhatsappStatusWhereInput {
    AND?: Array<WhatsappStatusWhereInput>;
    OR?: Array<WhatsappStatusWhereInput>;
    NOT?: Array<WhatsappStatusWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    refId?: InstanceType<typeof StringFilter>;
    message?: InstanceType<typeof StringNullableFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    status?: InstanceType<typeof EnumQueueStatusFilter>;
    guestId?: InstanceType<typeof StringFilter>;
    guest?: InstanceType<typeof GuestRelationFilter>;
}
export declare class WhatsappStatus {
    id: number;
    refId: string;
    message: string | null;
    createdAt: Date;
    status: keyof typeof QueueStatus;
    guestId: string;
    guest?: InstanceType<typeof Guest>;
}

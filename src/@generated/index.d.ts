import { Prisma } from '@prisma/client';
export declare enum WhatsappQueueScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    apiRequestId = "apiRequestId",
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
export declare enum EmailQueueScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    status = "status",
    guestId = "guestId"
}
export declare class AggregateEmailQueue {
    _count?: InstanceType<typeof EmailQueueCountAggregate>;
    _avg?: InstanceType<typeof EmailQueueAvgAggregate>;
    _sum?: InstanceType<typeof EmailQueueSumAggregate>;
    _min?: InstanceType<typeof EmailQueueMinAggregate>;
    _max?: InstanceType<typeof EmailQueueMaxAggregate>;
}
export declare class CreateManyEmailQueueArgs {
    data: Array<EmailQueueCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOneEmailQueueArgs {
    data: InstanceType<typeof EmailQueueCreateInput>;
}
export declare class DeleteManyEmailQueueArgs {
    where?: InstanceType<typeof EmailQueueWhereInput>;
}
export declare class DeleteOneEmailQueueArgs {
    where: Prisma.AtLeast<EmailQueueWhereUniqueInput, 'id'>;
}
export declare class EmailQueueAggregateArgs {
    where?: InstanceType<typeof EmailQueueWhereInput>;
    orderBy?: Array<EmailQueueOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<EmailQueueWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof EmailQueueCountAggregateInput>;
    _avg?: InstanceType<typeof EmailQueueAvgAggregateInput>;
    _sum?: InstanceType<typeof EmailQueueSumAggregateInput>;
    _min?: InstanceType<typeof EmailQueueMinAggregateInput>;
    _max?: InstanceType<typeof EmailQueueMaxAggregateInput>;
}
export declare class EmailQueueAvgAggregateInput {
    id?: true;
}
export declare class EmailQueueAvgAggregate {
    id?: number;
}
export declare class EmailQueueAvgOrderByAggregateInput {
    id?: keyof typeof SortOrder;
}
export declare class EmailQueueCountAggregateInput {
    id?: true;
    createdAt?: true;
    status?: true;
    guestId?: true;
    _all?: true;
}
export declare class EmailQueueCountAggregate {
    id: number;
    createdAt: number;
    status: number;
    guestId: number;
    _all: number;
}
export declare class EmailQueueCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    status?: keyof typeof SortOrder;
    guestId?: keyof typeof SortOrder;
}
export declare class EmailQueueCreateManyGuestInputEnvelope {
    data: Array<EmailQueueCreateManyGuestInput>;
    skipDuplicates?: boolean;
}
export declare class EmailQueueCreateManyGuestInput {
    id?: number;
    createdAt?: Date | string;
    status?: keyof typeof QueueStatus;
}
export declare class EmailQueueCreateManyInput {
    id?: number;
    createdAt?: Date | string;
    status?: keyof typeof QueueStatus;
    guestId: string;
}
export declare class EmailQueueCreateNestedManyWithoutGuestInput {
    create?: Array<EmailQueueCreateWithoutGuestInput>;
    connectOrCreate?: Array<EmailQueueCreateOrConnectWithoutGuestInput>;
    createMany?: InstanceType<typeof EmailQueueCreateManyGuestInputEnvelope>;
    connect?: Array<Prisma.AtLeast<EmailQueueWhereUniqueInput, 'id'>>;
}
export declare class EmailQueueCreateOrConnectWithoutGuestInput {
    where: Prisma.AtLeast<EmailQueueWhereUniqueInput, 'id'>;
    create: InstanceType<typeof EmailQueueCreateWithoutGuestInput>;
}
export declare class EmailQueueCreateWithoutGuestInput {
    createdAt?: Date | string;
    status?: keyof typeof QueueStatus;
}
export declare class EmailQueueCreateInput {
    createdAt?: Date | string;
    status?: keyof typeof QueueStatus;
    guest: InstanceType<typeof GuestCreateNestedOneWithoutEmailQueueInput>;
}
export declare class EmailQueueGroupByArgs {
    where?: InstanceType<typeof EmailQueueWhereInput>;
    orderBy?: Array<EmailQueueOrderByWithAggregationInput>;
    by: Array<keyof typeof EmailQueueScalarFieldEnum>;
    having?: InstanceType<typeof EmailQueueScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof EmailQueueCountAggregateInput>;
    _avg?: InstanceType<typeof EmailQueueAvgAggregateInput>;
    _sum?: InstanceType<typeof EmailQueueSumAggregateInput>;
    _min?: InstanceType<typeof EmailQueueMinAggregateInput>;
    _max?: InstanceType<typeof EmailQueueMaxAggregateInput>;
}
export declare class EmailQueueGroupBy {
    id: number;
    createdAt: Date | string;
    status: keyof typeof QueueStatus;
    guestId: string;
    _count?: InstanceType<typeof EmailQueueCountAggregate>;
    _avg?: InstanceType<typeof EmailQueueAvgAggregate>;
    _sum?: InstanceType<typeof EmailQueueSumAggregate>;
    _min?: InstanceType<typeof EmailQueueMinAggregate>;
    _max?: InstanceType<typeof EmailQueueMaxAggregate>;
}
export declare class EmailQueueListRelationFilter {
    every?: InstanceType<typeof EmailQueueWhereInput>;
    some?: InstanceType<typeof EmailQueueWhereInput>;
    none?: InstanceType<typeof EmailQueueWhereInput>;
}
export declare class EmailQueueMaxAggregateInput {
    id?: true;
    createdAt?: true;
    status?: true;
    guestId?: true;
}
export declare class EmailQueueMaxAggregate {
    id?: number;
    createdAt?: Date | string;
    status?: keyof typeof QueueStatus;
    guestId?: string;
}
export declare class EmailQueueMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    status?: keyof typeof SortOrder;
    guestId?: keyof typeof SortOrder;
}
export declare class EmailQueueMinAggregateInput {
    id?: true;
    createdAt?: true;
    status?: true;
    guestId?: true;
}
export declare class EmailQueueMinAggregate {
    id?: number;
    createdAt?: Date | string;
    status?: keyof typeof QueueStatus;
    guestId?: string;
}
export declare class EmailQueueMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    status?: keyof typeof SortOrder;
    guestId?: keyof typeof SortOrder;
}
export declare class EmailQueueOrderByRelationAggregateInput {
    _count?: keyof typeof SortOrder;
}
export declare class EmailQueueOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    status?: keyof typeof SortOrder;
    guestId?: keyof typeof SortOrder;
    _count?: InstanceType<typeof EmailQueueCountOrderByAggregateInput>;
    _avg?: InstanceType<typeof EmailQueueAvgOrderByAggregateInput>;
    _max?: InstanceType<typeof EmailQueueMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof EmailQueueMinOrderByAggregateInput>;
    _sum?: InstanceType<typeof EmailQueueSumOrderByAggregateInput>;
}
export declare class EmailQueueOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    status?: keyof typeof SortOrder;
    guestId?: keyof typeof SortOrder;
    guest?: InstanceType<typeof GuestOrderByWithRelationInput>;
}
export declare class EmailQueueScalarWhereWithAggregatesInput {
    AND?: Array<EmailQueueScalarWhereWithAggregatesInput>;
    OR?: Array<EmailQueueScalarWhereWithAggregatesInput>;
    NOT?: Array<EmailQueueScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    status?: InstanceType<typeof EnumQueueStatusWithAggregatesFilter>;
    guestId?: InstanceType<typeof StringWithAggregatesFilter>;
}
export declare class EmailQueueScalarWhereInput {
    AND?: Array<EmailQueueScalarWhereInput>;
    OR?: Array<EmailQueueScalarWhereInput>;
    NOT?: Array<EmailQueueScalarWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    status?: InstanceType<typeof EnumQueueStatusFilter>;
    guestId?: InstanceType<typeof StringFilter>;
}
export declare class EmailQueueSumAggregateInput {
    id?: true;
}
export declare class EmailQueueSumAggregate {
    id?: number;
}
export declare class EmailQueueSumOrderByAggregateInput {
    id?: keyof typeof SortOrder;
}
export declare class EmailQueueUncheckedCreateNestedManyWithoutGuestInput {
    create?: Array<EmailQueueCreateWithoutGuestInput>;
    connectOrCreate?: Array<EmailQueueCreateOrConnectWithoutGuestInput>;
    createMany?: InstanceType<typeof EmailQueueCreateManyGuestInputEnvelope>;
    connect?: Array<Prisma.AtLeast<EmailQueueWhereUniqueInput, 'id'>>;
}
export declare class EmailQueueUncheckedCreateWithoutGuestInput {
    id?: number;
    createdAt?: Date | string;
    status?: keyof typeof QueueStatus;
}
export declare class EmailQueueUncheckedCreateInput {
    id?: number;
    createdAt?: Date | string;
    status?: keyof typeof QueueStatus;
    guestId: string;
}
export declare class EmailQueueUncheckedUpdateManyWithoutGuestNestedInput {
    create?: Array<EmailQueueCreateWithoutGuestInput>;
    connectOrCreate?: Array<EmailQueueCreateOrConnectWithoutGuestInput>;
    upsert?: Array<EmailQueueUpsertWithWhereUniqueWithoutGuestInput>;
    createMany?: InstanceType<typeof EmailQueueCreateManyGuestInputEnvelope>;
    set?: Array<Prisma.AtLeast<EmailQueueWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<EmailQueueWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<EmailQueueWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<EmailQueueWhereUniqueInput, 'id'>>;
    update?: Array<EmailQueueUpdateWithWhereUniqueWithoutGuestInput>;
    updateMany?: Array<EmailQueueUpdateManyWithWhereWithoutGuestInput>;
    deleteMany?: Array<EmailQueueScalarWhereInput>;
}
export declare class EmailQueueUncheckedUpdateManyWithoutGuestInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumQueueStatusFieldUpdateOperationsInput>;
}
export declare class EmailQueueUncheckedUpdateManyInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumQueueStatusFieldUpdateOperationsInput>;
    guestId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class EmailQueueUncheckedUpdateWithoutGuestInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumQueueStatusFieldUpdateOperationsInput>;
}
export declare class EmailQueueUncheckedUpdateInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumQueueStatusFieldUpdateOperationsInput>;
    guestId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class EmailQueueUpdateManyMutationInput {
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumQueueStatusFieldUpdateOperationsInput>;
}
export declare class EmailQueueUpdateManyWithWhereWithoutGuestInput {
    where: InstanceType<typeof EmailQueueScalarWhereInput>;
    data: InstanceType<typeof EmailQueueUpdateManyMutationInput>;
}
export declare class EmailQueueUpdateManyWithoutGuestNestedInput {
    create?: Array<EmailQueueCreateWithoutGuestInput>;
    connectOrCreate?: Array<EmailQueueCreateOrConnectWithoutGuestInput>;
    upsert?: Array<EmailQueueUpsertWithWhereUniqueWithoutGuestInput>;
    createMany?: InstanceType<typeof EmailQueueCreateManyGuestInputEnvelope>;
    set?: Array<Prisma.AtLeast<EmailQueueWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<EmailQueueWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<EmailQueueWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<EmailQueueWhereUniqueInput, 'id'>>;
    update?: Array<EmailQueueUpdateWithWhereUniqueWithoutGuestInput>;
    updateMany?: Array<EmailQueueUpdateManyWithWhereWithoutGuestInput>;
    deleteMany?: Array<EmailQueueScalarWhereInput>;
}
export declare class EmailQueueUpdateWithWhereUniqueWithoutGuestInput {
    where: Prisma.AtLeast<EmailQueueWhereUniqueInput, 'id'>;
    data: InstanceType<typeof EmailQueueUpdateWithoutGuestInput>;
}
export declare class EmailQueueUpdateWithoutGuestInput {
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumQueueStatusFieldUpdateOperationsInput>;
}
export declare class EmailQueueUpdateInput {
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumQueueStatusFieldUpdateOperationsInput>;
    guest?: InstanceType<typeof GuestUpdateOneRequiredWithoutEmailQueueNestedInput>;
}
export declare class EmailQueueUpsertWithWhereUniqueWithoutGuestInput {
    where: Prisma.AtLeast<EmailQueueWhereUniqueInput, 'id'>;
    update: InstanceType<typeof EmailQueueUpdateWithoutGuestInput>;
    create: InstanceType<typeof EmailQueueCreateWithoutGuestInput>;
}
export declare class EmailQueueWhereUniqueInput {
    id?: number;
    AND?: Array<EmailQueueWhereInput>;
    OR?: Array<EmailQueueWhereInput>;
    NOT?: Array<EmailQueueWhereInput>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    status?: InstanceType<typeof EnumQueueStatusFilter>;
    guestId?: InstanceType<typeof StringFilter>;
    guest?: InstanceType<typeof GuestRelationFilter>;
}
export declare class EmailQueueWhereInput {
    AND?: Array<EmailQueueWhereInput>;
    OR?: Array<EmailQueueWhereInput>;
    NOT?: Array<EmailQueueWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    status?: InstanceType<typeof EnumQueueStatusFilter>;
    guestId?: InstanceType<typeof StringFilter>;
    guest?: InstanceType<typeof GuestRelationFilter>;
}
export declare class EmailQueue {
    id: number;
    createdAt: Date;
    status: keyof typeof QueueStatus;
    guestId: string;
    guest?: InstanceType<typeof Guest>;
}
export declare class FindFirstEmailQueueOrThrowArgs {
    where?: InstanceType<typeof EmailQueueWhereInput>;
    orderBy?: Array<EmailQueueOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<EmailQueueWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof EmailQueueScalarFieldEnum>;
}
export declare class FindFirstEmailQueueArgs {
    where?: InstanceType<typeof EmailQueueWhereInput>;
    orderBy?: Array<EmailQueueOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<EmailQueueWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof EmailQueueScalarFieldEnum>;
}
export declare class FindManyEmailQueueArgs {
    where?: InstanceType<typeof EmailQueueWhereInput>;
    orderBy?: Array<EmailQueueOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<EmailQueueWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof EmailQueueScalarFieldEnum>;
}
export declare class FindUniqueEmailQueueOrThrowArgs {
    where: Prisma.AtLeast<EmailQueueWhereUniqueInput, 'id'>;
}
export declare class FindUniqueEmailQueueArgs {
    where: Prisma.AtLeast<EmailQueueWhereUniqueInput, 'id'>;
}
export declare class UpdateManyEmailQueueArgs {
    data: InstanceType<typeof EmailQueueUpdateManyMutationInput>;
    where?: InstanceType<typeof EmailQueueWhereInput>;
}
export declare class UpdateOneEmailQueueArgs {
    data: InstanceType<typeof EmailQueueUpdateInput>;
    where: Prisma.AtLeast<EmailQueueWhereUniqueInput, 'id'>;
}
export declare class UpsertOneEmailQueueArgs {
    where: Prisma.AtLeast<EmailQueueWhereUniqueInput, 'id'>;
    create: InstanceType<typeof EmailQueueCreateInput>;
    update: InstanceType<typeof EmailQueueUpdateInput>;
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
    emailQueue?: number;
    whatsappQueue?: number;
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
export declare class GuestCreateNestedOneWithoutEmailQueueInput {
    create?: InstanceType<typeof GuestCreateWithoutEmailQueueInput>;
    connectOrCreate?: InstanceType<typeof GuestCreateOrConnectWithoutEmailQueueInput>;
    connect?: Prisma.AtLeast<GuestWhereUniqueInput, 'id'>;
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
export declare class GuestCreateNestedOneWithoutWhatsappQueueInput {
    create?: InstanceType<typeof GuestCreateWithoutWhatsappQueueInput>;
    connectOrCreate?: InstanceType<typeof GuestCreateOrConnectWithoutWhatsappQueueInput>;
    connect?: Prisma.AtLeast<GuestWhereUniqueInput, 'id'>;
}
export declare class GuestCreateOrConnectWithoutEmailQueueInput {
    where: Prisma.AtLeast<GuestWhereUniqueInput, 'id'>;
    create: InstanceType<typeof GuestCreateWithoutEmailQueueInput>;
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
export declare class GuestCreateOrConnectWithoutWhatsappQueueInput {
    where: Prisma.AtLeast<GuestWhereUniqueInput, 'id'>;
    create: InstanceType<typeof GuestCreateWithoutWhatsappQueueInput>;
}
export declare class GuestCreateWithoutEmailQueueInput {
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
    whatsappQueue?: InstanceType<typeof WhatsappQueueCreateNestedManyWithoutGuestInput>;
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
    emailQueue?: InstanceType<typeof EmailQueueCreateNestedManyWithoutGuestInput>;
    whatsappQueue?: InstanceType<typeof WhatsappQueueCreateNestedManyWithoutGuestInput>;
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
    emailQueue?: InstanceType<typeof EmailQueueCreateNestedManyWithoutGuestInput>;
    whatsappQueue?: InstanceType<typeof WhatsappQueueCreateNestedManyWithoutGuestInput>;
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
    emailQueue?: InstanceType<typeof EmailQueueCreateNestedManyWithoutGuestInput>;
    whatsappQueue?: InstanceType<typeof WhatsappQueueCreateNestedManyWithoutGuestInput>;
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
    emailQueue?: InstanceType<typeof EmailQueueCreateNestedManyWithoutGuestInput>;
    whatsappQueue?: InstanceType<typeof WhatsappQueueCreateNestedManyWithoutGuestInput>;
}
export declare class GuestCreateWithoutWhatsappQueueInput {
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
    emailQueue?: InstanceType<typeof EmailQueueCreateNestedManyWithoutGuestInput>;
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
    emailQueue?: InstanceType<typeof EmailQueueCreateNestedManyWithoutGuestInput>;
    whatsappQueue?: InstanceType<typeof WhatsappQueueCreateNestedManyWithoutGuestInput>;
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
    emailQueue?: InstanceType<typeof EmailQueueOrderByRelationAggregateInput>;
    whatsappQueue?: InstanceType<typeof WhatsappQueueOrderByRelationAggregateInput>;
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
export declare class GuestUncheckedCreateWithoutEmailQueueInput {
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
    whatsappQueue?: InstanceType<typeof WhatsappQueueUncheckedCreateNestedManyWithoutGuestInput>;
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
    emailQueue?: InstanceType<typeof EmailQueueUncheckedCreateNestedManyWithoutGuestInput>;
    whatsappQueue?: InstanceType<typeof WhatsappQueueUncheckedCreateNestedManyWithoutGuestInput>;
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
    emailQueue?: InstanceType<typeof EmailQueueUncheckedCreateNestedManyWithoutGuestInput>;
    whatsappQueue?: InstanceType<typeof WhatsappQueueUncheckedCreateNestedManyWithoutGuestInput>;
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
    emailQueue?: InstanceType<typeof EmailQueueUncheckedCreateNestedManyWithoutGuestInput>;
    whatsappQueue?: InstanceType<typeof WhatsappQueueUncheckedCreateNestedManyWithoutGuestInput>;
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
    emailQueue?: InstanceType<typeof EmailQueueUncheckedCreateNestedManyWithoutGuestInput>;
    whatsappQueue?: InstanceType<typeof WhatsappQueueUncheckedCreateNestedManyWithoutGuestInput>;
}
export declare class GuestUncheckedCreateWithoutWhatsappQueueInput {
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
    emailQueue?: InstanceType<typeof EmailQueueUncheckedCreateNestedManyWithoutGuestInput>;
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
    emailQueue?: InstanceType<typeof EmailQueueUncheckedCreateNestedManyWithoutGuestInput>;
    whatsappQueue?: InstanceType<typeof WhatsappQueueUncheckedCreateNestedManyWithoutGuestInput>;
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
export declare class GuestUncheckedUpdateWithoutEmailQueueInput {
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
    whatsappQueue?: InstanceType<typeof WhatsappQueueUncheckedUpdateManyWithoutGuestNestedInput>;
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
    emailQueue?: InstanceType<typeof EmailQueueUncheckedUpdateManyWithoutGuestNestedInput>;
    whatsappQueue?: InstanceType<typeof WhatsappQueueUncheckedUpdateManyWithoutGuestNestedInput>;
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
    emailQueue?: InstanceType<typeof EmailQueueUncheckedUpdateManyWithoutGuestNestedInput>;
    whatsappQueue?: InstanceType<typeof WhatsappQueueUncheckedUpdateManyWithoutGuestNestedInput>;
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
    emailQueue?: InstanceType<typeof EmailQueueUncheckedUpdateManyWithoutGuestNestedInput>;
    whatsappQueue?: InstanceType<typeof WhatsappQueueUncheckedUpdateManyWithoutGuestNestedInput>;
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
    emailQueue?: InstanceType<typeof EmailQueueUncheckedUpdateManyWithoutGuestNestedInput>;
    whatsappQueue?: InstanceType<typeof WhatsappQueueUncheckedUpdateManyWithoutGuestNestedInput>;
}
export declare class GuestUncheckedUpdateWithoutWhatsappQueueInput {
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
    emailQueue?: InstanceType<typeof EmailQueueUncheckedUpdateManyWithoutGuestNestedInput>;
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
    emailQueue?: InstanceType<typeof EmailQueueUncheckedUpdateManyWithoutGuestNestedInput>;
    whatsappQueue?: InstanceType<typeof WhatsappQueueUncheckedUpdateManyWithoutGuestNestedInput>;
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
export declare class GuestUpdateOneRequiredWithoutEmailQueueNestedInput {
    create?: InstanceType<typeof GuestCreateWithoutEmailQueueInput>;
    connectOrCreate?: InstanceType<typeof GuestCreateOrConnectWithoutEmailQueueInput>;
    upsert?: InstanceType<typeof GuestUpsertWithoutEmailQueueInput>;
    connect?: Prisma.AtLeast<GuestWhereUniqueInput, 'id'>;
    update?: InstanceType<typeof GuestUpdateToOneWithWhereWithoutEmailQueueInput>;
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
export declare class GuestUpdateOneRequiredWithoutWhatsappQueueNestedInput {
    create?: InstanceType<typeof GuestCreateWithoutWhatsappQueueInput>;
    connectOrCreate?: InstanceType<typeof GuestCreateOrConnectWithoutWhatsappQueueInput>;
    upsert?: InstanceType<typeof GuestUpsertWithoutWhatsappQueueInput>;
    connect?: Prisma.AtLeast<GuestWhereUniqueInput, 'id'>;
    update?: InstanceType<typeof GuestUpdateToOneWithWhereWithoutWhatsappQueueInput>;
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
export declare class GuestUpdateToOneWithWhereWithoutEmailQueueInput {
    where?: InstanceType<typeof GuestWhereInput>;
    data: InstanceType<typeof GuestUpdateWithoutEmailQueueInput>;
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
export declare class GuestUpdateToOneWithWhereWithoutWhatsappQueueInput {
    where?: InstanceType<typeof GuestWhereInput>;
    data: InstanceType<typeof GuestUpdateWithoutWhatsappQueueInput>;
}
export declare class GuestUpdateWithWhereUniqueWithoutGroupMemberOfInput {
    where: Prisma.AtLeast<GuestWhereUniqueInput, 'id'>;
    data: InstanceType<typeof GuestUpdateWithoutGroupMemberOfInput>;
}
export declare class GuestUpdateWithoutEmailQueueInput {
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
    whatsappQueue?: InstanceType<typeof WhatsappQueueUpdateManyWithoutGuestNestedInput>;
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
    emailQueue?: InstanceType<typeof EmailQueueUpdateManyWithoutGuestNestedInput>;
    whatsappQueue?: InstanceType<typeof WhatsappQueueUpdateManyWithoutGuestNestedInput>;
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
    emailQueue?: InstanceType<typeof EmailQueueUpdateManyWithoutGuestNestedInput>;
    whatsappQueue?: InstanceType<typeof WhatsappQueueUpdateManyWithoutGuestNestedInput>;
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
    emailQueue?: InstanceType<typeof EmailQueueUpdateManyWithoutGuestNestedInput>;
    whatsappQueue?: InstanceType<typeof WhatsappQueueUpdateManyWithoutGuestNestedInput>;
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
    emailQueue?: InstanceType<typeof EmailQueueUpdateManyWithoutGuestNestedInput>;
    whatsappQueue?: InstanceType<typeof WhatsappQueueUpdateManyWithoutGuestNestedInput>;
}
export declare class GuestUpdateWithoutWhatsappQueueInput {
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
    emailQueue?: InstanceType<typeof EmailQueueUpdateManyWithoutGuestNestedInput>;
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
    emailQueue?: InstanceType<typeof EmailQueueUpdateManyWithoutGuestNestedInput>;
    whatsappQueue?: InstanceType<typeof WhatsappQueueUpdateManyWithoutGuestNestedInput>;
}
export declare class GuestUpsertWithWhereUniqueWithoutGroupMemberOfInput {
    where: Prisma.AtLeast<GuestWhereUniqueInput, 'id'>;
    update: InstanceType<typeof GuestUpdateWithoutGroupMemberOfInput>;
    create: InstanceType<typeof GuestCreateWithoutGroupMemberOfInput>;
}
export declare class GuestUpsertWithoutEmailQueueInput {
    update: InstanceType<typeof GuestUpdateWithoutEmailQueueInput>;
    create: InstanceType<typeof GuestCreateWithoutEmailQueueInput>;
    where?: InstanceType<typeof GuestWhereInput>;
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
export declare class GuestUpsertWithoutWhatsappQueueInput {
    update: InstanceType<typeof GuestUpdateWithoutWhatsappQueueInput>;
    create: InstanceType<typeof GuestCreateWithoutWhatsappQueueInput>;
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
    emailQueue?: InstanceType<typeof EmailQueueListRelationFilter>;
    whatsappQueue?: InstanceType<typeof WhatsappQueueListRelationFilter>;
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
    emailQueue?: InstanceType<typeof EmailQueueListRelationFilter>;
    whatsappQueue?: InstanceType<typeof WhatsappQueueListRelationFilter>;
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
    emailQueue?: Array<EmailQueue>;
    whatsappQueue?: Array<WhatsappQueue>;
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
export declare class IntNullableFilter {
    equals?: number;
    in?: Array<number>;
    notIn?: Array<number>;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    not?: InstanceType<typeof NestedIntNullableFilter>;
}
export declare class IntNullableWithAggregatesFilter {
    equals?: number;
    in?: Array<number>;
    notIn?: Array<number>;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    not?: InstanceType<typeof NestedIntNullableWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    _avg?: InstanceType<typeof NestedFloatNullableFilter>;
    _sum?: InstanceType<typeof NestedIntNullableFilter>;
    _min?: InstanceType<typeof NestedIntNullableFilter>;
    _max?: InstanceType<typeof NestedIntNullableFilter>;
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
export declare class NestedIntNullableWithAggregatesFilter {
    equals?: number;
    in?: Array<number>;
    notIn?: Array<number>;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    not?: InstanceType<typeof NestedIntNullableWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    _avg?: InstanceType<typeof NestedFloatNullableFilter>;
    _sum?: InstanceType<typeof NestedIntNullableFilter>;
    _min?: InstanceType<typeof NestedIntNullableFilter>;
    _max?: InstanceType<typeof NestedIntNullableFilter>;
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
export declare class NullableIntFieldUpdateOperationsInput {
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
export declare class AggregateWhatsappQueue {
    _count?: InstanceType<typeof WhatsappQueueCountAggregate>;
    _avg?: InstanceType<typeof WhatsappQueueAvgAggregate>;
    _sum?: InstanceType<typeof WhatsappQueueSumAggregate>;
    _min?: InstanceType<typeof WhatsappQueueMinAggregate>;
    _max?: InstanceType<typeof WhatsappQueueMaxAggregate>;
}
export declare class CreateManyWhatsappQueueArgs {
    data: Array<WhatsappQueueCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOneWhatsappQueueArgs {
    data: InstanceType<typeof WhatsappQueueCreateInput>;
}
export declare class DeleteManyWhatsappQueueArgs {
    where?: InstanceType<typeof WhatsappQueueWhereInput>;
}
export declare class DeleteOneWhatsappQueueArgs {
    where: Prisma.AtLeast<WhatsappQueueWhereUniqueInput, 'id'>;
}
export declare class FindFirstWhatsappQueueOrThrowArgs {
    where?: InstanceType<typeof WhatsappQueueWhereInput>;
    orderBy?: Array<WhatsappQueueOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<WhatsappQueueWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof WhatsappQueueScalarFieldEnum>;
}
export declare class FindFirstWhatsappQueueArgs {
    where?: InstanceType<typeof WhatsappQueueWhereInput>;
    orderBy?: Array<WhatsappQueueOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<WhatsappQueueWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof WhatsappQueueScalarFieldEnum>;
}
export declare class FindManyWhatsappQueueArgs {
    where?: InstanceType<typeof WhatsappQueueWhereInput>;
    orderBy?: Array<WhatsappQueueOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<WhatsappQueueWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof WhatsappQueueScalarFieldEnum>;
}
export declare class FindUniqueWhatsappQueueOrThrowArgs {
    where: Prisma.AtLeast<WhatsappQueueWhereUniqueInput, 'id'>;
}
export declare class FindUniqueWhatsappQueueArgs {
    where: Prisma.AtLeast<WhatsappQueueWhereUniqueInput, 'id'>;
}
export declare class UpdateManyWhatsappQueueArgs {
    data: InstanceType<typeof WhatsappQueueUpdateManyMutationInput>;
    where?: InstanceType<typeof WhatsappQueueWhereInput>;
}
export declare class UpdateOneWhatsappQueueArgs {
    data: InstanceType<typeof WhatsappQueueUpdateInput>;
    where: Prisma.AtLeast<WhatsappQueueWhereUniqueInput, 'id'>;
}
export declare class UpsertOneWhatsappQueueArgs {
    where: Prisma.AtLeast<WhatsappQueueWhereUniqueInput, 'id'>;
    create: InstanceType<typeof WhatsappQueueCreateInput>;
    update: InstanceType<typeof WhatsappQueueUpdateInput>;
}
export declare class WhatsappQueueAggregateArgs {
    where?: InstanceType<typeof WhatsappQueueWhereInput>;
    orderBy?: Array<WhatsappQueueOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<WhatsappQueueWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof WhatsappQueueCountAggregateInput>;
    _avg?: InstanceType<typeof WhatsappQueueAvgAggregateInput>;
    _sum?: InstanceType<typeof WhatsappQueueSumAggregateInput>;
    _min?: InstanceType<typeof WhatsappQueueMinAggregateInput>;
    _max?: InstanceType<typeof WhatsappQueueMaxAggregateInput>;
}
export declare class WhatsappQueueAvgAggregateInput {
    apiRequestId?: true;
}
export declare class WhatsappQueueAvgAggregate {
    apiRequestId?: number;
}
export declare class WhatsappQueueAvgOrderByAggregateInput {
    apiRequestId?: keyof typeof SortOrder;
}
export declare class WhatsappQueueCountAggregateInput {
    id?: true;
    createdAt?: true;
    apiRequestId?: true;
    status?: true;
    guestId?: true;
    _all?: true;
}
export declare class WhatsappQueueCountAggregate {
    id: number;
    createdAt: number;
    apiRequestId: number;
    status: number;
    guestId: number;
    _all: number;
}
export declare class WhatsappQueueCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    apiRequestId?: keyof typeof SortOrder;
    status?: keyof typeof SortOrder;
    guestId?: keyof typeof SortOrder;
}
export declare class WhatsappQueueCreateManyGuestInputEnvelope {
    data: Array<WhatsappQueueCreateManyGuestInput>;
    skipDuplicates?: boolean;
}
export declare class WhatsappQueueCreateManyGuestInput {
    id?: string;
    createdAt?: Date | string;
    apiRequestId?: number;
    status?: keyof typeof QueueStatus;
}
export declare class WhatsappQueueCreateManyInput {
    id?: string;
    createdAt?: Date | string;
    apiRequestId?: number;
    status?: keyof typeof QueueStatus;
    guestId: string;
}
export declare class WhatsappQueueCreateNestedManyWithoutGuestInput {
    create?: Array<WhatsappQueueCreateWithoutGuestInput>;
    connectOrCreate?: Array<WhatsappQueueCreateOrConnectWithoutGuestInput>;
    createMany?: InstanceType<typeof WhatsappQueueCreateManyGuestInputEnvelope>;
    connect?: Array<Prisma.AtLeast<WhatsappQueueWhereUniqueInput, 'id'>>;
}
export declare class WhatsappQueueCreateOrConnectWithoutGuestInput {
    where: Prisma.AtLeast<WhatsappQueueWhereUniqueInput, 'id'>;
    create: InstanceType<typeof WhatsappQueueCreateWithoutGuestInput>;
}
export declare class WhatsappQueueCreateWithoutGuestInput {
    id?: string;
    createdAt?: Date | string;
    apiRequestId?: number;
    status?: keyof typeof QueueStatus;
}
export declare class WhatsappQueueCreateInput {
    id?: string;
    createdAt?: Date | string;
    apiRequestId?: number;
    status?: keyof typeof QueueStatus;
    guest: InstanceType<typeof GuestCreateNestedOneWithoutWhatsappQueueInput>;
}
export declare class WhatsappQueueGroupByArgs {
    where?: InstanceType<typeof WhatsappQueueWhereInput>;
    orderBy?: Array<WhatsappQueueOrderByWithAggregationInput>;
    by: Array<keyof typeof WhatsappQueueScalarFieldEnum>;
    having?: InstanceType<typeof WhatsappQueueScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof WhatsappQueueCountAggregateInput>;
    _avg?: InstanceType<typeof WhatsappQueueAvgAggregateInput>;
    _sum?: InstanceType<typeof WhatsappQueueSumAggregateInput>;
    _min?: InstanceType<typeof WhatsappQueueMinAggregateInput>;
    _max?: InstanceType<typeof WhatsappQueueMaxAggregateInput>;
}
export declare class WhatsappQueueGroupBy {
    id: string;
    createdAt: Date | string;
    apiRequestId?: number;
    status: keyof typeof QueueStatus;
    guestId: string;
    _count?: InstanceType<typeof WhatsappQueueCountAggregate>;
    _avg?: InstanceType<typeof WhatsappQueueAvgAggregate>;
    _sum?: InstanceType<typeof WhatsappQueueSumAggregate>;
    _min?: InstanceType<typeof WhatsappQueueMinAggregate>;
    _max?: InstanceType<typeof WhatsappQueueMaxAggregate>;
}
export declare class WhatsappQueueListRelationFilter {
    every?: InstanceType<typeof WhatsappQueueWhereInput>;
    some?: InstanceType<typeof WhatsappQueueWhereInput>;
    none?: InstanceType<typeof WhatsappQueueWhereInput>;
}
export declare class WhatsappQueueMaxAggregateInput {
    id?: true;
    createdAt?: true;
    apiRequestId?: true;
    status?: true;
    guestId?: true;
}
export declare class WhatsappQueueMaxAggregate {
    id?: string;
    createdAt?: Date | string;
    apiRequestId?: number;
    status?: keyof typeof QueueStatus;
    guestId?: string;
}
export declare class WhatsappQueueMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    apiRequestId?: keyof typeof SortOrder;
    status?: keyof typeof SortOrder;
    guestId?: keyof typeof SortOrder;
}
export declare class WhatsappQueueMinAggregateInput {
    id?: true;
    createdAt?: true;
    apiRequestId?: true;
    status?: true;
    guestId?: true;
}
export declare class WhatsappQueueMinAggregate {
    id?: string;
    createdAt?: Date | string;
    apiRequestId?: number;
    status?: keyof typeof QueueStatus;
    guestId?: string;
}
export declare class WhatsappQueueMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    apiRequestId?: keyof typeof SortOrder;
    status?: keyof typeof SortOrder;
    guestId?: keyof typeof SortOrder;
}
export declare class WhatsappQueueOrderByRelationAggregateInput {
    _count?: keyof typeof SortOrder;
}
export declare class WhatsappQueueOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    apiRequestId?: InstanceType<typeof SortOrderInput>;
    status?: keyof typeof SortOrder;
    guestId?: keyof typeof SortOrder;
    _count?: InstanceType<typeof WhatsappQueueCountOrderByAggregateInput>;
    _avg?: InstanceType<typeof WhatsappQueueAvgOrderByAggregateInput>;
    _max?: InstanceType<typeof WhatsappQueueMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof WhatsappQueueMinOrderByAggregateInput>;
    _sum?: InstanceType<typeof WhatsappQueueSumOrderByAggregateInput>;
}
export declare class WhatsappQueueOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    apiRequestId?: InstanceType<typeof SortOrderInput>;
    status?: keyof typeof SortOrder;
    guestId?: keyof typeof SortOrder;
    guest?: InstanceType<typeof GuestOrderByWithRelationInput>;
}
export declare class WhatsappQueueScalarWhereWithAggregatesInput {
    AND?: Array<WhatsappQueueScalarWhereWithAggregatesInput>;
    OR?: Array<WhatsappQueueScalarWhereWithAggregatesInput>;
    NOT?: Array<WhatsappQueueScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    apiRequestId?: InstanceType<typeof IntNullableWithAggregatesFilter>;
    status?: InstanceType<typeof EnumQueueStatusWithAggregatesFilter>;
    guestId?: InstanceType<typeof StringWithAggregatesFilter>;
}
export declare class WhatsappQueueScalarWhereInput {
    AND?: Array<WhatsappQueueScalarWhereInput>;
    OR?: Array<WhatsappQueueScalarWhereInput>;
    NOT?: Array<WhatsappQueueScalarWhereInput>;
    id?: InstanceType<typeof StringFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    apiRequestId?: InstanceType<typeof IntNullableFilter>;
    status?: InstanceType<typeof EnumQueueStatusFilter>;
    guestId?: InstanceType<typeof StringFilter>;
}
export declare class WhatsappQueueSumAggregateInput {
    apiRequestId?: true;
}
export declare class WhatsappQueueSumAggregate {
    apiRequestId?: number;
}
export declare class WhatsappQueueSumOrderByAggregateInput {
    apiRequestId?: keyof typeof SortOrder;
}
export declare class WhatsappQueueUncheckedCreateNestedManyWithoutGuestInput {
    create?: Array<WhatsappQueueCreateWithoutGuestInput>;
    connectOrCreate?: Array<WhatsappQueueCreateOrConnectWithoutGuestInput>;
    createMany?: InstanceType<typeof WhatsappQueueCreateManyGuestInputEnvelope>;
    connect?: Array<Prisma.AtLeast<WhatsappQueueWhereUniqueInput, 'id'>>;
}
export declare class WhatsappQueueUncheckedCreateWithoutGuestInput {
    id?: string;
    createdAt?: Date | string;
    apiRequestId?: number;
    status?: keyof typeof QueueStatus;
}
export declare class WhatsappQueueUncheckedCreateInput {
    id?: string;
    createdAt?: Date | string;
    apiRequestId?: number;
    status?: keyof typeof QueueStatus;
    guestId: string;
}
export declare class WhatsappQueueUncheckedUpdateManyWithoutGuestNestedInput {
    create?: Array<WhatsappQueueCreateWithoutGuestInput>;
    connectOrCreate?: Array<WhatsappQueueCreateOrConnectWithoutGuestInput>;
    upsert?: Array<WhatsappQueueUpsertWithWhereUniqueWithoutGuestInput>;
    createMany?: InstanceType<typeof WhatsappQueueCreateManyGuestInputEnvelope>;
    set?: Array<Prisma.AtLeast<WhatsappQueueWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<WhatsappQueueWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<WhatsappQueueWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<WhatsappQueueWhereUniqueInput, 'id'>>;
    update?: Array<WhatsappQueueUpdateWithWhereUniqueWithoutGuestInput>;
    updateMany?: Array<WhatsappQueueUpdateManyWithWhereWithoutGuestInput>;
    deleteMany?: Array<WhatsappQueueScalarWhereInput>;
}
export declare class WhatsappQueueUncheckedUpdateManyWithoutGuestInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    apiRequestId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumQueueStatusFieldUpdateOperationsInput>;
}
export declare class WhatsappQueueUncheckedUpdateManyInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    apiRequestId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumQueueStatusFieldUpdateOperationsInput>;
    guestId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class WhatsappQueueUncheckedUpdateWithoutGuestInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    apiRequestId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumQueueStatusFieldUpdateOperationsInput>;
}
export declare class WhatsappQueueUncheckedUpdateInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    apiRequestId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumQueueStatusFieldUpdateOperationsInput>;
    guestId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class WhatsappQueueUpdateManyMutationInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    apiRequestId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumQueueStatusFieldUpdateOperationsInput>;
}
export declare class WhatsappQueueUpdateManyWithWhereWithoutGuestInput {
    where: InstanceType<typeof WhatsappQueueScalarWhereInput>;
    data: InstanceType<typeof WhatsappQueueUpdateManyMutationInput>;
}
export declare class WhatsappQueueUpdateManyWithoutGuestNestedInput {
    create?: Array<WhatsappQueueCreateWithoutGuestInput>;
    connectOrCreate?: Array<WhatsappQueueCreateOrConnectWithoutGuestInput>;
    upsert?: Array<WhatsappQueueUpsertWithWhereUniqueWithoutGuestInput>;
    createMany?: InstanceType<typeof WhatsappQueueCreateManyGuestInputEnvelope>;
    set?: Array<Prisma.AtLeast<WhatsappQueueWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<WhatsappQueueWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<WhatsappQueueWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<WhatsappQueueWhereUniqueInput, 'id'>>;
    update?: Array<WhatsappQueueUpdateWithWhereUniqueWithoutGuestInput>;
    updateMany?: Array<WhatsappQueueUpdateManyWithWhereWithoutGuestInput>;
    deleteMany?: Array<WhatsappQueueScalarWhereInput>;
}
export declare class WhatsappQueueUpdateWithWhereUniqueWithoutGuestInput {
    where: Prisma.AtLeast<WhatsappQueueWhereUniqueInput, 'id'>;
    data: InstanceType<typeof WhatsappQueueUpdateWithoutGuestInput>;
}
export declare class WhatsappQueueUpdateWithoutGuestInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    apiRequestId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumQueueStatusFieldUpdateOperationsInput>;
}
export declare class WhatsappQueueUpdateInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    apiRequestId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumQueueStatusFieldUpdateOperationsInput>;
    guest?: InstanceType<typeof GuestUpdateOneRequiredWithoutWhatsappQueueNestedInput>;
}
export declare class WhatsappQueueUpsertWithWhereUniqueWithoutGuestInput {
    where: Prisma.AtLeast<WhatsappQueueWhereUniqueInput, 'id'>;
    update: InstanceType<typeof WhatsappQueueUpdateWithoutGuestInput>;
    create: InstanceType<typeof WhatsappQueueCreateWithoutGuestInput>;
}
export declare class WhatsappQueueWhereUniqueInput {
    id?: string;
    AND?: Array<WhatsappQueueWhereInput>;
    OR?: Array<WhatsappQueueWhereInput>;
    NOT?: Array<WhatsappQueueWhereInput>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    apiRequestId?: InstanceType<typeof IntNullableFilter>;
    status?: InstanceType<typeof EnumQueueStatusFilter>;
    guestId?: InstanceType<typeof StringFilter>;
    guest?: InstanceType<typeof GuestRelationFilter>;
}
export declare class WhatsappQueueWhereInput {
    AND?: Array<WhatsappQueueWhereInput>;
    OR?: Array<WhatsappQueueWhereInput>;
    NOT?: Array<WhatsappQueueWhereInput>;
    id?: InstanceType<typeof StringFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    apiRequestId?: InstanceType<typeof IntNullableFilter>;
    status?: InstanceType<typeof EnumQueueStatusFilter>;
    guestId?: InstanceType<typeof StringFilter>;
    guest?: InstanceType<typeof GuestRelationFilter>;
}
export declare class WhatsappQueue {
    id: string;
    createdAt: Date;
    apiRequestId: number | null;
    status: keyof typeof QueueStatus;
    guestId: string;
    guest?: InstanceType<typeof Guest>;
}

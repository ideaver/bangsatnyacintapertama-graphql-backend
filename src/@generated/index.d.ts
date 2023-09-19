import { Prisma } from '@prisma/client';
export declare enum WhatsappQueueScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    status = "status",
    guestId = "guestId"
}
export declare enum UserScalarFieldEnum {
    id = "id",
    fullName = "fullName",
    email = "email",
    password = "password",
    whatsapp = "whatsapp",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    deletedAt = "deletedAt",
    role = "role",
    guestInfoId = "guestInfoId"
}
export declare enum QrCodeScalarFieldEnum {
    path = "path",
    scannedAt = "scannedAt",
    createdAt = "createdAt",
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
    WAITING = "WAITING",
    SENDING = "SENDING",
    SENT = "SENT",
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
export declare enum GuestScalarFieldEnum {
    userId = "userId",
    category1 = "category1",
    category2 = "category2",
    personInCharge = "personInCharge",
    'class' = "class",
    seat = "seat",
    rejectionReason = "rejectionReason",
    description = "description",
    parties = "parties",
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
    where: Prisma.AtLeast<GuestWhereUniqueInput, 'userId'>;
}
export declare class FindFirstGuestOrThrowArgs {
    where?: InstanceType<typeof GuestWhereInput>;
    orderBy?: Array<GuestOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<GuestWhereUniqueInput, 'userId'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof GuestScalarFieldEnum>;
}
export declare class FindFirstGuestArgs {
    where?: InstanceType<typeof GuestWhereInput>;
    orderBy?: Array<GuestOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<GuestWhereUniqueInput, 'userId'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof GuestScalarFieldEnum>;
}
export declare class FindManyGuestArgs {
    where?: InstanceType<typeof GuestWhereInput>;
    orderBy?: Array<GuestOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<GuestWhereUniqueInput, 'userId'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof GuestScalarFieldEnum>;
}
export declare class FindUniqueGuestOrThrowArgs {
    where: Prisma.AtLeast<GuestWhereUniqueInput, 'userId'>;
}
export declare class FindUniqueGuestArgs {
    where: Prisma.AtLeast<GuestWhereUniqueInput, 'userId'>;
}
export declare class GuestAggregateArgs {
    where?: InstanceType<typeof GuestWhereInput>;
    orderBy?: Array<GuestOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<GuestWhereUniqueInput, 'userId'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof GuestCountAggregateInput>;
    _avg?: InstanceType<typeof GuestAvgAggregateInput>;
    _sum?: InstanceType<typeof GuestSumAggregateInput>;
    _min?: InstanceType<typeof GuestMinAggregateInput>;
    _max?: InstanceType<typeof GuestMaxAggregateInput>;
}
export declare class GuestAvgAggregateInput {
    parties?: true;
}
export declare class GuestAvgAggregate {
    parties?: number;
}
export declare class GuestAvgOrderByAggregateInput {
    parties?: keyof typeof SortOrder;
}
export declare class GuestCountAggregateInput {
    userId?: true;
    category1?: true;
    category2?: true;
    personInCharge?: true;
    class?: true;
    seat?: true;
    rejectionReason?: true;
    description?: true;
    parties?: true;
    confirmationStatus?: true;
    _all?: true;
}
export declare class GuestCountAggregate {
    userId: number;
    category1: number;
    category2: number;
    personInCharge: number;
    class: number;
    seat: number;
    rejectionReason: number;
    description: number;
    parties: number;
    confirmationStatus: number;
    _all: number;
}
export declare class GuestCountOrderByAggregateInput {
    userId?: keyof typeof SortOrder;
    category1?: keyof typeof SortOrder;
    category2?: keyof typeof SortOrder;
    personInCharge?: keyof typeof SortOrder;
    class?: keyof typeof SortOrder;
    seat?: keyof typeof SortOrder;
    rejectionReason?: keyof typeof SortOrder;
    description?: keyof typeof SortOrder;
    parties?: keyof typeof SortOrder;
    confirmationStatus?: keyof typeof SortOrder;
}
export declare class GuestCount {
    qrcodes?: number;
    emailQueue?: number;
    whatsappQueue?: number;
}
export declare class GuestCreateManyInput {
    userId: string;
    category1?: string;
    category2?: string;
    personInCharge?: string;
    class?: string;
    seat?: string;
    rejectionReason?: string;
    description?: string;
    parties?: number;
    confirmationStatus?: keyof typeof ConfirmationStatus;
}
export declare class GuestCreateNestedOneWithoutEmailQueueInput {
    create?: InstanceType<typeof GuestCreateWithoutEmailQueueInput>;
    connectOrCreate?: InstanceType<typeof GuestCreateOrConnectWithoutEmailQueueInput>;
    connect?: Prisma.AtLeast<GuestWhereUniqueInput, 'userId'>;
}
export declare class GuestCreateNestedOneWithoutQrcodesInput {
    create?: InstanceType<typeof GuestCreateWithoutQrcodesInput>;
    connectOrCreate?: InstanceType<typeof GuestCreateOrConnectWithoutQrcodesInput>;
    connect?: Prisma.AtLeast<GuestWhereUniqueInput, 'userId'>;
}
export declare class GuestCreateNestedOneWithoutUserInput {
    create?: InstanceType<typeof GuestCreateWithoutUserInput>;
    connectOrCreate?: InstanceType<typeof GuestCreateOrConnectWithoutUserInput>;
    connect?: Prisma.AtLeast<GuestWhereUniqueInput, 'userId'>;
}
export declare class GuestCreateNestedOneWithoutWhatsappQueueInput {
    create?: InstanceType<typeof GuestCreateWithoutWhatsappQueueInput>;
    connectOrCreate?: InstanceType<typeof GuestCreateOrConnectWithoutWhatsappQueueInput>;
    connect?: Prisma.AtLeast<GuestWhereUniqueInput, 'userId'>;
}
export declare class GuestCreateOrConnectWithoutEmailQueueInput {
    where: Prisma.AtLeast<GuestWhereUniqueInput, 'userId'>;
    create: InstanceType<typeof GuestCreateWithoutEmailQueueInput>;
}
export declare class GuestCreateOrConnectWithoutQrcodesInput {
    where: Prisma.AtLeast<GuestWhereUniqueInput, 'userId'>;
    create: InstanceType<typeof GuestCreateWithoutQrcodesInput>;
}
export declare class GuestCreateOrConnectWithoutUserInput {
    where: Prisma.AtLeast<GuestWhereUniqueInput, 'userId'>;
    create: InstanceType<typeof GuestCreateWithoutUserInput>;
}
export declare class GuestCreateOrConnectWithoutWhatsappQueueInput {
    where: Prisma.AtLeast<GuestWhereUniqueInput, 'userId'>;
    create: InstanceType<typeof GuestCreateWithoutWhatsappQueueInput>;
}
export declare class GuestCreateWithoutEmailQueueInput {
    category1?: string;
    category2?: string;
    personInCharge?: string;
    class?: string;
    seat?: string;
    rejectionReason?: string;
    description?: string;
    parties?: number;
    confirmationStatus?: keyof typeof ConfirmationStatus;
    user: InstanceType<typeof UserCreateNestedOneWithoutGuestInfoInput>;
    qrcodes?: InstanceType<typeof QrCodeCreateNestedManyWithoutGuestInput>;
    whatsappQueue?: InstanceType<typeof WhatsappQueueCreateNestedManyWithoutGuestInput>;
}
export declare class GuestCreateWithoutQrcodesInput {
    category1?: string;
    category2?: string;
    personInCharge?: string;
    class?: string;
    seat?: string;
    rejectionReason?: string;
    description?: string;
    parties?: number;
    confirmationStatus?: keyof typeof ConfirmationStatus;
    user: InstanceType<typeof UserCreateNestedOneWithoutGuestInfoInput>;
    emailQueue?: InstanceType<typeof EmailQueueCreateNestedManyWithoutGuestInput>;
    whatsappQueue?: InstanceType<typeof WhatsappQueueCreateNestedManyWithoutGuestInput>;
}
export declare class GuestCreateWithoutUserInput {
    category1?: string;
    category2?: string;
    personInCharge?: string;
    class?: string;
    seat?: string;
    rejectionReason?: string;
    description?: string;
    parties?: number;
    confirmationStatus?: keyof typeof ConfirmationStatus;
    qrcodes?: InstanceType<typeof QrCodeCreateNestedManyWithoutGuestInput>;
    emailQueue?: InstanceType<typeof EmailQueueCreateNestedManyWithoutGuestInput>;
    whatsappQueue?: InstanceType<typeof WhatsappQueueCreateNestedManyWithoutGuestInput>;
}
export declare class GuestCreateWithoutWhatsappQueueInput {
    category1?: string;
    category2?: string;
    personInCharge?: string;
    class?: string;
    seat?: string;
    rejectionReason?: string;
    description?: string;
    parties?: number;
    confirmationStatus?: keyof typeof ConfirmationStatus;
    user: InstanceType<typeof UserCreateNestedOneWithoutGuestInfoInput>;
    qrcodes?: InstanceType<typeof QrCodeCreateNestedManyWithoutGuestInput>;
    emailQueue?: InstanceType<typeof EmailQueueCreateNestedManyWithoutGuestInput>;
}
export declare class GuestCreateInput {
    category1?: string;
    category2?: string;
    personInCharge?: string;
    class?: string;
    seat?: string;
    rejectionReason?: string;
    description?: string;
    parties?: number;
    confirmationStatus?: keyof typeof ConfirmationStatus;
    user: InstanceType<typeof UserCreateNestedOneWithoutGuestInfoInput>;
    qrcodes?: InstanceType<typeof QrCodeCreateNestedManyWithoutGuestInput>;
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
    userId: string;
    category1?: string;
    category2?: string;
    personInCharge?: string;
    class?: string;
    seat?: string;
    rejectionReason?: string;
    description?: string;
    parties: number;
    confirmationStatus: keyof typeof ConfirmationStatus;
    _count?: InstanceType<typeof GuestCountAggregate>;
    _avg?: InstanceType<typeof GuestAvgAggregate>;
    _sum?: InstanceType<typeof GuestSumAggregate>;
    _min?: InstanceType<typeof GuestMinAggregate>;
    _max?: InstanceType<typeof GuestMaxAggregate>;
}
export declare class GuestMaxAggregateInput {
    userId?: true;
    category1?: true;
    category2?: true;
    personInCharge?: true;
    class?: true;
    seat?: true;
    rejectionReason?: true;
    description?: true;
    parties?: true;
    confirmationStatus?: true;
}
export declare class GuestMaxAggregate {
    userId?: string;
    category1?: string;
    category2?: string;
    personInCharge?: string;
    class?: string;
    seat?: string;
    rejectionReason?: string;
    description?: string;
    parties?: number;
    confirmationStatus?: keyof typeof ConfirmationStatus;
}
export declare class GuestMaxOrderByAggregateInput {
    userId?: keyof typeof SortOrder;
    category1?: keyof typeof SortOrder;
    category2?: keyof typeof SortOrder;
    personInCharge?: keyof typeof SortOrder;
    class?: keyof typeof SortOrder;
    seat?: keyof typeof SortOrder;
    rejectionReason?: keyof typeof SortOrder;
    description?: keyof typeof SortOrder;
    parties?: keyof typeof SortOrder;
    confirmationStatus?: keyof typeof SortOrder;
}
export declare class GuestMinAggregateInput {
    userId?: true;
    category1?: true;
    category2?: true;
    personInCharge?: true;
    class?: true;
    seat?: true;
    rejectionReason?: true;
    description?: true;
    parties?: true;
    confirmationStatus?: true;
}
export declare class GuestMinAggregate {
    userId?: string;
    category1?: string;
    category2?: string;
    personInCharge?: string;
    class?: string;
    seat?: string;
    rejectionReason?: string;
    description?: string;
    parties?: number;
    confirmationStatus?: keyof typeof ConfirmationStatus;
}
export declare class GuestMinOrderByAggregateInput {
    userId?: keyof typeof SortOrder;
    category1?: keyof typeof SortOrder;
    category2?: keyof typeof SortOrder;
    personInCharge?: keyof typeof SortOrder;
    class?: keyof typeof SortOrder;
    seat?: keyof typeof SortOrder;
    rejectionReason?: keyof typeof SortOrder;
    description?: keyof typeof SortOrder;
    parties?: keyof typeof SortOrder;
    confirmationStatus?: keyof typeof SortOrder;
}
export declare class GuestNullableRelationFilter {
    is?: InstanceType<typeof GuestWhereInput>;
    isNot?: InstanceType<typeof GuestWhereInput>;
}
export declare class GuestOrderByWithAggregationInput {
    userId?: keyof typeof SortOrder;
    category1?: InstanceType<typeof SortOrderInput>;
    category2?: InstanceType<typeof SortOrderInput>;
    personInCharge?: InstanceType<typeof SortOrderInput>;
    class?: InstanceType<typeof SortOrderInput>;
    seat?: InstanceType<typeof SortOrderInput>;
    rejectionReason?: InstanceType<typeof SortOrderInput>;
    description?: InstanceType<typeof SortOrderInput>;
    parties?: keyof typeof SortOrder;
    confirmationStatus?: keyof typeof SortOrder;
    _count?: InstanceType<typeof GuestCountOrderByAggregateInput>;
    _avg?: InstanceType<typeof GuestAvgOrderByAggregateInput>;
    _max?: InstanceType<typeof GuestMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof GuestMinOrderByAggregateInput>;
    _sum?: InstanceType<typeof GuestSumOrderByAggregateInput>;
}
export declare class GuestOrderByWithRelationInput {
    userId?: keyof typeof SortOrder;
    category1?: InstanceType<typeof SortOrderInput>;
    category2?: InstanceType<typeof SortOrderInput>;
    personInCharge?: InstanceType<typeof SortOrderInput>;
    class?: InstanceType<typeof SortOrderInput>;
    seat?: InstanceType<typeof SortOrderInput>;
    rejectionReason?: InstanceType<typeof SortOrderInput>;
    description?: InstanceType<typeof SortOrderInput>;
    parties?: keyof typeof SortOrder;
    confirmationStatus?: keyof typeof SortOrder;
    user?: InstanceType<typeof UserOrderByWithRelationInput>;
    qrcodes?: InstanceType<typeof QrCodeOrderByRelationAggregateInput>;
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
    userId?: InstanceType<typeof StringWithAggregatesFilter>;
    category1?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    category2?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    personInCharge?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    class?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    seat?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    rejectionReason?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    description?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    parties?: InstanceType<typeof IntWithAggregatesFilter>;
    confirmationStatus?: InstanceType<typeof EnumConfirmationStatusWithAggregatesFilter>;
}
export declare class GuestSumAggregateInput {
    parties?: true;
}
export declare class GuestSumAggregate {
    parties?: number;
}
export declare class GuestSumOrderByAggregateInput {
    parties?: keyof typeof SortOrder;
}
export declare class GuestUncheckedCreateNestedOneWithoutUserInput {
    create?: InstanceType<typeof GuestCreateWithoutUserInput>;
    connectOrCreate?: InstanceType<typeof GuestCreateOrConnectWithoutUserInput>;
    connect?: Prisma.AtLeast<GuestWhereUniqueInput, 'userId'>;
}
export declare class GuestUncheckedCreateWithoutEmailQueueInput {
    userId: string;
    category1?: string;
    category2?: string;
    personInCharge?: string;
    class?: string;
    seat?: string;
    rejectionReason?: string;
    description?: string;
    parties?: number;
    confirmationStatus?: keyof typeof ConfirmationStatus;
    qrcodes?: InstanceType<typeof QrCodeUncheckedCreateNestedManyWithoutGuestInput>;
    whatsappQueue?: InstanceType<typeof WhatsappQueueUncheckedCreateNestedManyWithoutGuestInput>;
}
export declare class GuestUncheckedCreateWithoutQrcodesInput {
    userId: string;
    category1?: string;
    category2?: string;
    personInCharge?: string;
    class?: string;
    seat?: string;
    rejectionReason?: string;
    description?: string;
    parties?: number;
    confirmationStatus?: keyof typeof ConfirmationStatus;
    emailQueue?: InstanceType<typeof EmailQueueUncheckedCreateNestedManyWithoutGuestInput>;
    whatsappQueue?: InstanceType<typeof WhatsappQueueUncheckedCreateNestedManyWithoutGuestInput>;
}
export declare class GuestUncheckedCreateWithoutUserInput {
    category1?: string;
    category2?: string;
    personInCharge?: string;
    class?: string;
    seat?: string;
    rejectionReason?: string;
    description?: string;
    parties?: number;
    confirmationStatus?: keyof typeof ConfirmationStatus;
    qrcodes?: InstanceType<typeof QrCodeUncheckedCreateNestedManyWithoutGuestInput>;
    emailQueue?: InstanceType<typeof EmailQueueUncheckedCreateNestedManyWithoutGuestInput>;
    whatsappQueue?: InstanceType<typeof WhatsappQueueUncheckedCreateNestedManyWithoutGuestInput>;
}
export declare class GuestUncheckedCreateWithoutWhatsappQueueInput {
    userId: string;
    category1?: string;
    category2?: string;
    personInCharge?: string;
    class?: string;
    seat?: string;
    rejectionReason?: string;
    description?: string;
    parties?: number;
    confirmationStatus?: keyof typeof ConfirmationStatus;
    qrcodes?: InstanceType<typeof QrCodeUncheckedCreateNestedManyWithoutGuestInput>;
    emailQueue?: InstanceType<typeof EmailQueueUncheckedCreateNestedManyWithoutGuestInput>;
}
export declare class GuestUncheckedCreateInput {
    userId: string;
    category1?: string;
    category2?: string;
    personInCharge?: string;
    class?: string;
    seat?: string;
    rejectionReason?: string;
    description?: string;
    parties?: number;
    confirmationStatus?: keyof typeof ConfirmationStatus;
    qrcodes?: InstanceType<typeof QrCodeUncheckedCreateNestedManyWithoutGuestInput>;
    emailQueue?: InstanceType<typeof EmailQueueUncheckedCreateNestedManyWithoutGuestInput>;
    whatsappQueue?: InstanceType<typeof WhatsappQueueUncheckedCreateNestedManyWithoutGuestInput>;
}
export declare class GuestUncheckedUpdateManyInput {
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    category1?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    category2?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    personInCharge?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    class?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    seat?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    rejectionReason?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    parties?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    confirmationStatus?: InstanceType<typeof EnumConfirmationStatusFieldUpdateOperationsInput>;
}
export declare class GuestUncheckedUpdateOneWithoutUserNestedInput {
    create?: InstanceType<typeof GuestCreateWithoutUserInput>;
    connectOrCreate?: InstanceType<typeof GuestCreateOrConnectWithoutUserInput>;
    upsert?: InstanceType<typeof GuestUpsertWithoutUserInput>;
    disconnect?: InstanceType<typeof GuestWhereInput>;
    delete?: InstanceType<typeof GuestWhereInput>;
    connect?: Prisma.AtLeast<GuestWhereUniqueInput, 'userId'>;
    update?: InstanceType<typeof GuestUpdateToOneWithWhereWithoutUserInput>;
}
export declare class GuestUncheckedUpdateWithoutEmailQueueInput {
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    category1?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    category2?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    personInCharge?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    class?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    seat?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    rejectionReason?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    parties?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    confirmationStatus?: InstanceType<typeof EnumConfirmationStatusFieldUpdateOperationsInput>;
    qrcodes?: InstanceType<typeof QrCodeUncheckedUpdateManyWithoutGuestNestedInput>;
    whatsappQueue?: InstanceType<typeof WhatsappQueueUncheckedUpdateManyWithoutGuestNestedInput>;
}
export declare class GuestUncheckedUpdateWithoutQrcodesInput {
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    category1?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    category2?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    personInCharge?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    class?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    seat?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    rejectionReason?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    parties?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    confirmationStatus?: InstanceType<typeof EnumConfirmationStatusFieldUpdateOperationsInput>;
    emailQueue?: InstanceType<typeof EmailQueueUncheckedUpdateManyWithoutGuestNestedInput>;
    whatsappQueue?: InstanceType<typeof WhatsappQueueUncheckedUpdateManyWithoutGuestNestedInput>;
}
export declare class GuestUncheckedUpdateWithoutUserInput {
    category1?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    category2?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    personInCharge?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    class?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    seat?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    rejectionReason?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    parties?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    confirmationStatus?: InstanceType<typeof EnumConfirmationStatusFieldUpdateOperationsInput>;
    qrcodes?: InstanceType<typeof QrCodeUncheckedUpdateManyWithoutGuestNestedInput>;
    emailQueue?: InstanceType<typeof EmailQueueUncheckedUpdateManyWithoutGuestNestedInput>;
    whatsappQueue?: InstanceType<typeof WhatsappQueueUncheckedUpdateManyWithoutGuestNestedInput>;
}
export declare class GuestUncheckedUpdateWithoutWhatsappQueueInput {
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    category1?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    category2?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    personInCharge?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    class?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    seat?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    rejectionReason?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    parties?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    confirmationStatus?: InstanceType<typeof EnumConfirmationStatusFieldUpdateOperationsInput>;
    qrcodes?: InstanceType<typeof QrCodeUncheckedUpdateManyWithoutGuestNestedInput>;
    emailQueue?: InstanceType<typeof EmailQueueUncheckedUpdateManyWithoutGuestNestedInput>;
}
export declare class GuestUncheckedUpdateInput {
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    category1?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    category2?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    personInCharge?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    class?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    seat?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    rejectionReason?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    parties?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    confirmationStatus?: InstanceType<typeof EnumConfirmationStatusFieldUpdateOperationsInput>;
    qrcodes?: InstanceType<typeof QrCodeUncheckedUpdateManyWithoutGuestNestedInput>;
    emailQueue?: InstanceType<typeof EmailQueueUncheckedUpdateManyWithoutGuestNestedInput>;
    whatsappQueue?: InstanceType<typeof WhatsappQueueUncheckedUpdateManyWithoutGuestNestedInput>;
}
export declare class GuestUpdateManyMutationInput {
    category1?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    category2?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    personInCharge?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    class?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    seat?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    rejectionReason?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    parties?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    confirmationStatus?: InstanceType<typeof EnumConfirmationStatusFieldUpdateOperationsInput>;
}
export declare class GuestUpdateOneRequiredWithoutEmailQueueNestedInput {
    create?: InstanceType<typeof GuestCreateWithoutEmailQueueInput>;
    connectOrCreate?: InstanceType<typeof GuestCreateOrConnectWithoutEmailQueueInput>;
    upsert?: InstanceType<typeof GuestUpsertWithoutEmailQueueInput>;
    connect?: Prisma.AtLeast<GuestWhereUniqueInput, 'userId'>;
    update?: InstanceType<typeof GuestUpdateToOneWithWhereWithoutEmailQueueInput>;
}
export declare class GuestUpdateOneRequiredWithoutQrcodesNestedInput {
    create?: InstanceType<typeof GuestCreateWithoutQrcodesInput>;
    connectOrCreate?: InstanceType<typeof GuestCreateOrConnectWithoutQrcodesInput>;
    upsert?: InstanceType<typeof GuestUpsertWithoutQrcodesInput>;
    connect?: Prisma.AtLeast<GuestWhereUniqueInput, 'userId'>;
    update?: InstanceType<typeof GuestUpdateToOneWithWhereWithoutQrcodesInput>;
}
export declare class GuestUpdateOneRequiredWithoutWhatsappQueueNestedInput {
    create?: InstanceType<typeof GuestCreateWithoutWhatsappQueueInput>;
    connectOrCreate?: InstanceType<typeof GuestCreateOrConnectWithoutWhatsappQueueInput>;
    upsert?: InstanceType<typeof GuestUpsertWithoutWhatsappQueueInput>;
    connect?: Prisma.AtLeast<GuestWhereUniqueInput, 'userId'>;
    update?: InstanceType<typeof GuestUpdateToOneWithWhereWithoutWhatsappQueueInput>;
}
export declare class GuestUpdateOneWithoutUserNestedInput {
    create?: InstanceType<typeof GuestCreateWithoutUserInput>;
    connectOrCreate?: InstanceType<typeof GuestCreateOrConnectWithoutUserInput>;
    upsert?: InstanceType<typeof GuestUpsertWithoutUserInput>;
    disconnect?: InstanceType<typeof GuestWhereInput>;
    delete?: InstanceType<typeof GuestWhereInput>;
    connect?: Prisma.AtLeast<GuestWhereUniqueInput, 'userId'>;
    update?: InstanceType<typeof GuestUpdateToOneWithWhereWithoutUserInput>;
}
export declare class GuestUpdateToOneWithWhereWithoutEmailQueueInput {
    where?: InstanceType<typeof GuestWhereInput>;
    data: InstanceType<typeof GuestUpdateWithoutEmailQueueInput>;
}
export declare class GuestUpdateToOneWithWhereWithoutQrcodesInput {
    where?: InstanceType<typeof GuestWhereInput>;
    data: InstanceType<typeof GuestUpdateWithoutQrcodesInput>;
}
export declare class GuestUpdateToOneWithWhereWithoutUserInput {
    where?: InstanceType<typeof GuestWhereInput>;
    data: InstanceType<typeof GuestUpdateWithoutUserInput>;
}
export declare class GuestUpdateToOneWithWhereWithoutWhatsappQueueInput {
    where?: InstanceType<typeof GuestWhereInput>;
    data: InstanceType<typeof GuestUpdateWithoutWhatsappQueueInput>;
}
export declare class GuestUpdateWithoutEmailQueueInput {
    category1?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    category2?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    personInCharge?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    class?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    seat?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    rejectionReason?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    parties?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    confirmationStatus?: InstanceType<typeof EnumConfirmationStatusFieldUpdateOperationsInput>;
    user?: InstanceType<typeof UserUpdateOneRequiredWithoutGuestInfoNestedInput>;
    qrcodes?: InstanceType<typeof QrCodeUpdateManyWithoutGuestNestedInput>;
    whatsappQueue?: InstanceType<typeof WhatsappQueueUpdateManyWithoutGuestNestedInput>;
}
export declare class GuestUpdateWithoutQrcodesInput {
    category1?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    category2?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    personInCharge?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    class?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    seat?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    rejectionReason?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    parties?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    confirmationStatus?: InstanceType<typeof EnumConfirmationStatusFieldUpdateOperationsInput>;
    user?: InstanceType<typeof UserUpdateOneRequiredWithoutGuestInfoNestedInput>;
    emailQueue?: InstanceType<typeof EmailQueueUpdateManyWithoutGuestNestedInput>;
    whatsappQueue?: InstanceType<typeof WhatsappQueueUpdateManyWithoutGuestNestedInput>;
}
export declare class GuestUpdateWithoutUserInput {
    category1?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    category2?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    personInCharge?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    class?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    seat?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    rejectionReason?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    parties?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    confirmationStatus?: InstanceType<typeof EnumConfirmationStatusFieldUpdateOperationsInput>;
    qrcodes?: InstanceType<typeof QrCodeUpdateManyWithoutGuestNestedInput>;
    emailQueue?: InstanceType<typeof EmailQueueUpdateManyWithoutGuestNestedInput>;
    whatsappQueue?: InstanceType<typeof WhatsappQueueUpdateManyWithoutGuestNestedInput>;
}
export declare class GuestUpdateWithoutWhatsappQueueInput {
    category1?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    category2?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    personInCharge?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    class?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    seat?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    rejectionReason?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    parties?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    confirmationStatus?: InstanceType<typeof EnumConfirmationStatusFieldUpdateOperationsInput>;
    user?: InstanceType<typeof UserUpdateOneRequiredWithoutGuestInfoNestedInput>;
    qrcodes?: InstanceType<typeof QrCodeUpdateManyWithoutGuestNestedInput>;
    emailQueue?: InstanceType<typeof EmailQueueUpdateManyWithoutGuestNestedInput>;
}
export declare class GuestUpdateInput {
    category1?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    category2?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    personInCharge?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    class?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    seat?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    rejectionReason?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    parties?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    confirmationStatus?: InstanceType<typeof EnumConfirmationStatusFieldUpdateOperationsInput>;
    user?: InstanceType<typeof UserUpdateOneRequiredWithoutGuestInfoNestedInput>;
    qrcodes?: InstanceType<typeof QrCodeUpdateManyWithoutGuestNestedInput>;
    emailQueue?: InstanceType<typeof EmailQueueUpdateManyWithoutGuestNestedInput>;
    whatsappQueue?: InstanceType<typeof WhatsappQueueUpdateManyWithoutGuestNestedInput>;
}
export declare class GuestUpsertWithoutEmailQueueInput {
    update: InstanceType<typeof GuestUpdateWithoutEmailQueueInput>;
    create: InstanceType<typeof GuestCreateWithoutEmailQueueInput>;
    where?: InstanceType<typeof GuestWhereInput>;
}
export declare class GuestUpsertWithoutQrcodesInput {
    update: InstanceType<typeof GuestUpdateWithoutQrcodesInput>;
    create: InstanceType<typeof GuestCreateWithoutQrcodesInput>;
    where?: InstanceType<typeof GuestWhereInput>;
}
export declare class GuestUpsertWithoutUserInput {
    update: InstanceType<typeof GuestUpdateWithoutUserInput>;
    create: InstanceType<typeof GuestCreateWithoutUserInput>;
    where?: InstanceType<typeof GuestWhereInput>;
}
export declare class GuestUpsertWithoutWhatsappQueueInput {
    update: InstanceType<typeof GuestUpdateWithoutWhatsappQueueInput>;
    create: InstanceType<typeof GuestCreateWithoutWhatsappQueueInput>;
    where?: InstanceType<typeof GuestWhereInput>;
}
export declare class GuestWhereUniqueInput {
    userId?: string;
    AND?: Array<GuestWhereInput>;
    OR?: Array<GuestWhereInput>;
    NOT?: Array<GuestWhereInput>;
    category1?: InstanceType<typeof StringNullableFilter>;
    category2?: InstanceType<typeof StringNullableFilter>;
    personInCharge?: InstanceType<typeof StringNullableFilter>;
    class?: InstanceType<typeof StringNullableFilter>;
    seat?: InstanceType<typeof StringNullableFilter>;
    rejectionReason?: InstanceType<typeof StringNullableFilter>;
    description?: InstanceType<typeof StringNullableFilter>;
    parties?: InstanceType<typeof IntFilter>;
    confirmationStatus?: InstanceType<typeof EnumConfirmationStatusFilter>;
    user?: InstanceType<typeof UserRelationFilter>;
    qrcodes?: InstanceType<typeof QrCodeListRelationFilter>;
    emailQueue?: InstanceType<typeof EmailQueueListRelationFilter>;
    whatsappQueue?: InstanceType<typeof WhatsappQueueListRelationFilter>;
}
export declare class GuestWhereInput {
    AND?: Array<GuestWhereInput>;
    OR?: Array<GuestWhereInput>;
    NOT?: Array<GuestWhereInput>;
    userId?: InstanceType<typeof StringFilter>;
    category1?: InstanceType<typeof StringNullableFilter>;
    category2?: InstanceType<typeof StringNullableFilter>;
    personInCharge?: InstanceType<typeof StringNullableFilter>;
    class?: InstanceType<typeof StringNullableFilter>;
    seat?: InstanceType<typeof StringNullableFilter>;
    rejectionReason?: InstanceType<typeof StringNullableFilter>;
    description?: InstanceType<typeof StringNullableFilter>;
    parties?: InstanceType<typeof IntFilter>;
    confirmationStatus?: InstanceType<typeof EnumConfirmationStatusFilter>;
    user?: InstanceType<typeof UserRelationFilter>;
    qrcodes?: InstanceType<typeof QrCodeListRelationFilter>;
    emailQueue?: InstanceType<typeof EmailQueueListRelationFilter>;
    whatsappQueue?: InstanceType<typeof WhatsappQueueListRelationFilter>;
}
export declare class Guest {
    userId: string;
    category1: string | null;
    category2: string | null;
    personInCharge: string | null;
    class: string | null;
    seat: string | null;
    rejectionReason: string | null;
    description: string | null;
    parties: number;
    confirmationStatus: keyof typeof ConfirmationStatus;
    user?: InstanceType<typeof User>;
    qrcodes?: Array<QrCode>;
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
    where: Prisma.AtLeast<GuestWhereUniqueInput, 'userId'>;
}
export declare class UpsertOneGuestArgs {
    where: Prisma.AtLeast<GuestWhereUniqueInput, 'userId'>;
    create: InstanceType<typeof GuestCreateInput>;
    update: InstanceType<typeof GuestUpdateInput>;
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
export declare class EnumConfirmationStatusFieldUpdateOperationsInput {
    set?: keyof typeof ConfirmationStatus;
}
export declare class EnumConfirmationStatusFilter {
    equals?: keyof typeof ConfirmationStatus;
    in?: Array<keyof typeof ConfirmationStatus>;
    notIn?: Array<keyof typeof ConfirmationStatus>;
    not?: InstanceType<typeof NestedEnumConfirmationStatusFilter>;
}
export declare class EnumConfirmationStatusWithAggregatesFilter {
    equals?: keyof typeof ConfirmationStatus;
    in?: Array<keyof typeof ConfirmationStatus>;
    notIn?: Array<keyof typeof ConfirmationStatus>;
    not?: InstanceType<typeof NestedEnumConfirmationStatusWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedEnumConfirmationStatusFilter>;
    _max?: InstanceType<typeof NestedEnumConfirmationStatusFilter>;
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
export declare class NestedEnumConfirmationStatusFilter {
    equals?: keyof typeof ConfirmationStatus;
    in?: Array<keyof typeof ConfirmationStatus>;
    notIn?: Array<keyof typeof ConfirmationStatus>;
    not?: InstanceType<typeof NestedEnumConfirmationStatusFilter>;
}
export declare class NestedEnumConfirmationStatusWithAggregatesFilter {
    equals?: keyof typeof ConfirmationStatus;
    in?: Array<keyof typeof ConfirmationStatus>;
    notIn?: Array<keyof typeof ConfirmationStatus>;
    not?: InstanceType<typeof NestedEnumConfirmationStatusWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedEnumConfirmationStatusFilter>;
    _max?: InstanceType<typeof NestedEnumConfirmationStatusFilter>;
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
    where: Prisma.AtLeast<QrCodeWhereUniqueInput, 'guestId'>;
}
export declare class FindFirstQrCodeOrThrowArgs {
    where?: InstanceType<typeof QrCodeWhereInput>;
    orderBy?: Array<QrCodeOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<QrCodeWhereUniqueInput, 'guestId'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof QrCodeScalarFieldEnum>;
}
export declare class FindFirstQrCodeArgs {
    where?: InstanceType<typeof QrCodeWhereInput>;
    orderBy?: Array<QrCodeOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<QrCodeWhereUniqueInput, 'guestId'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof QrCodeScalarFieldEnum>;
}
export declare class FindManyQrCodeArgs {
    where?: InstanceType<typeof QrCodeWhereInput>;
    orderBy?: Array<QrCodeOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<QrCodeWhereUniqueInput, 'guestId'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof QrCodeScalarFieldEnum>;
}
export declare class FindUniqueQrCodeOrThrowArgs {
    where: Prisma.AtLeast<QrCodeWhereUniqueInput, 'guestId'>;
}
export declare class FindUniqueQrCodeArgs {
    where: Prisma.AtLeast<QrCodeWhereUniqueInput, 'guestId'>;
}
export declare class QrCodeAggregateArgs {
    where?: InstanceType<typeof QrCodeWhereInput>;
    orderBy?: Array<QrCodeOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<QrCodeWhereUniqueInput, 'guestId'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof QrCodeCountAggregateInput>;
    _min?: InstanceType<typeof QrCodeMinAggregateInput>;
    _max?: InstanceType<typeof QrCodeMaxAggregateInput>;
}
export declare class QrCodeCountAggregateInput {
    path?: true;
    scannedAt?: true;
    createdAt?: true;
    guestId?: true;
    scannedByUserId?: true;
    _all?: true;
}
export declare class QrCodeCountAggregate {
    path: number;
    scannedAt: number;
    createdAt: number;
    guestId: number;
    scannedByUserId: number;
    _all: number;
}
export declare class QrCodeCountOrderByAggregateInput {
    path?: keyof typeof SortOrder;
    scannedAt?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    guestId?: keyof typeof SortOrder;
    scannedByUserId?: keyof typeof SortOrder;
}
export declare class QrCodeCreateManyGuestInputEnvelope {
    data: Array<QrCodeCreateManyGuestInput>;
    skipDuplicates?: boolean;
}
export declare class QrCodeCreateManyGuestInput {
    path: string;
    scannedAt?: Date | string;
    createdAt?: Date | string;
    scannedByUserId?: string;
}
export declare class QrCodeCreateManyScannedByInputEnvelope {
    data: Array<QrCodeCreateManyScannedByInput>;
    skipDuplicates?: boolean;
}
export declare class QrCodeCreateManyScannedByInput {
    path: string;
    scannedAt?: Date | string;
    createdAt?: Date | string;
    guestId: string;
}
export declare class QrCodeCreateManyInput {
    path: string;
    scannedAt?: Date | string;
    createdAt?: Date | string;
    guestId: string;
    scannedByUserId?: string;
}
export declare class QrCodeCreateNestedManyWithoutGuestInput {
    create?: Array<QrCodeCreateWithoutGuestInput>;
    connectOrCreate?: Array<QrCodeCreateOrConnectWithoutGuestInput>;
    createMany?: InstanceType<typeof QrCodeCreateManyGuestInputEnvelope>;
    connect?: Array<Prisma.AtLeast<QrCodeWhereUniqueInput, 'guestId'>>;
}
export declare class QrCodeCreateNestedManyWithoutScannedByInput {
    create?: Array<QrCodeCreateWithoutScannedByInput>;
    connectOrCreate?: Array<QrCodeCreateOrConnectWithoutScannedByInput>;
    createMany?: InstanceType<typeof QrCodeCreateManyScannedByInputEnvelope>;
    connect?: Array<Prisma.AtLeast<QrCodeWhereUniqueInput, 'guestId'>>;
}
export declare class QrCodeCreateOrConnectWithoutGuestInput {
    where: Prisma.AtLeast<QrCodeWhereUniqueInput, 'guestId'>;
    create: InstanceType<typeof QrCodeCreateWithoutGuestInput>;
}
export declare class QrCodeCreateOrConnectWithoutScannedByInput {
    where: Prisma.AtLeast<QrCodeWhereUniqueInput, 'guestId'>;
    create: InstanceType<typeof QrCodeCreateWithoutScannedByInput>;
}
export declare class QrCodeCreateWithoutGuestInput {
    path: string;
    scannedAt?: Date | string;
    createdAt?: Date | string;
    scannedBy?: InstanceType<typeof UserCreateNestedOneWithoutQrCodeInput>;
}
export declare class QrCodeCreateWithoutScannedByInput {
    path: string;
    scannedAt?: Date | string;
    createdAt?: Date | string;
    guest: InstanceType<typeof GuestCreateNestedOneWithoutQrcodesInput>;
}
export declare class QrCodeCreateInput {
    path: string;
    scannedAt?: Date | string;
    createdAt?: Date | string;
    guest: InstanceType<typeof GuestCreateNestedOneWithoutQrcodesInput>;
    scannedBy?: InstanceType<typeof UserCreateNestedOneWithoutQrCodeInput>;
}
export declare class QrCodeGroupByArgs {
    where?: InstanceType<typeof QrCodeWhereInput>;
    orderBy?: Array<QrCodeOrderByWithAggregationInput>;
    by: Array<keyof typeof QrCodeScalarFieldEnum>;
    having?: InstanceType<typeof QrCodeScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof QrCodeCountAggregateInput>;
    _min?: InstanceType<typeof QrCodeMinAggregateInput>;
    _max?: InstanceType<typeof QrCodeMaxAggregateInput>;
}
export declare class QrCodeGroupBy {
    path: string;
    scannedAt?: Date | string;
    createdAt: Date | string;
    guestId: string;
    scannedByUserId?: string;
    _count?: InstanceType<typeof QrCodeCountAggregate>;
    _min?: InstanceType<typeof QrCodeMinAggregate>;
    _max?: InstanceType<typeof QrCodeMaxAggregate>;
}
export declare class QrCodeListRelationFilter {
    every?: InstanceType<typeof QrCodeWhereInput>;
    some?: InstanceType<typeof QrCodeWhereInput>;
    none?: InstanceType<typeof QrCodeWhereInput>;
}
export declare class QrCodeMaxAggregateInput {
    path?: true;
    scannedAt?: true;
    createdAt?: true;
    guestId?: true;
    scannedByUserId?: true;
}
export declare class QrCodeMaxAggregate {
    path?: string;
    scannedAt?: Date | string;
    createdAt?: Date | string;
    guestId?: string;
    scannedByUserId?: string;
}
export declare class QrCodeMaxOrderByAggregateInput {
    path?: keyof typeof SortOrder;
    scannedAt?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    guestId?: keyof typeof SortOrder;
    scannedByUserId?: keyof typeof SortOrder;
}
export declare class QrCodeMinAggregateInput {
    path?: true;
    scannedAt?: true;
    createdAt?: true;
    guestId?: true;
    scannedByUserId?: true;
}
export declare class QrCodeMinAggregate {
    path?: string;
    scannedAt?: Date | string;
    createdAt?: Date | string;
    guestId?: string;
    scannedByUserId?: string;
}
export declare class QrCodeMinOrderByAggregateInput {
    path?: keyof typeof SortOrder;
    scannedAt?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    guestId?: keyof typeof SortOrder;
    scannedByUserId?: keyof typeof SortOrder;
}
export declare class QrCodeOrderByRelationAggregateInput {
    _count?: keyof typeof SortOrder;
}
export declare class QrCodeOrderByWithAggregationInput {
    path?: keyof typeof SortOrder;
    scannedAt?: InstanceType<typeof SortOrderInput>;
    createdAt?: keyof typeof SortOrder;
    guestId?: keyof typeof SortOrder;
    scannedByUserId?: InstanceType<typeof SortOrderInput>;
    _count?: InstanceType<typeof QrCodeCountOrderByAggregateInput>;
    _max?: InstanceType<typeof QrCodeMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof QrCodeMinOrderByAggregateInput>;
}
export declare class QrCodeOrderByWithRelationInput {
    path?: keyof typeof SortOrder;
    scannedAt?: InstanceType<typeof SortOrderInput>;
    createdAt?: keyof typeof SortOrder;
    guestId?: keyof typeof SortOrder;
    scannedByUserId?: InstanceType<typeof SortOrderInput>;
    guest?: InstanceType<typeof GuestOrderByWithRelationInput>;
    scannedBy?: InstanceType<typeof UserOrderByWithRelationInput>;
}
export declare class QrCodeScalarWhereWithAggregatesInput {
    AND?: Array<QrCodeScalarWhereWithAggregatesInput>;
    OR?: Array<QrCodeScalarWhereWithAggregatesInput>;
    NOT?: Array<QrCodeScalarWhereWithAggregatesInput>;
    path?: InstanceType<typeof StringWithAggregatesFilter>;
    scannedAt?: InstanceType<typeof DateTimeNullableWithAggregatesFilter>;
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    guestId?: InstanceType<typeof StringWithAggregatesFilter>;
    scannedByUserId?: InstanceType<typeof StringNullableWithAggregatesFilter>;
}
export declare class QrCodeScalarWhereInput {
    AND?: Array<QrCodeScalarWhereInput>;
    OR?: Array<QrCodeScalarWhereInput>;
    NOT?: Array<QrCodeScalarWhereInput>;
    path?: InstanceType<typeof StringFilter>;
    scannedAt?: InstanceType<typeof DateTimeNullableFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    guestId?: InstanceType<typeof StringFilter>;
    scannedByUserId?: InstanceType<typeof StringNullableFilter>;
}
export declare class QrCodeUncheckedCreateNestedManyWithoutGuestInput {
    create?: Array<QrCodeCreateWithoutGuestInput>;
    connectOrCreate?: Array<QrCodeCreateOrConnectWithoutGuestInput>;
    createMany?: InstanceType<typeof QrCodeCreateManyGuestInputEnvelope>;
    connect?: Array<Prisma.AtLeast<QrCodeWhereUniqueInput, 'guestId'>>;
}
export declare class QrCodeUncheckedCreateNestedManyWithoutScannedByInput {
    create?: Array<QrCodeCreateWithoutScannedByInput>;
    connectOrCreate?: Array<QrCodeCreateOrConnectWithoutScannedByInput>;
    createMany?: InstanceType<typeof QrCodeCreateManyScannedByInputEnvelope>;
    connect?: Array<Prisma.AtLeast<QrCodeWhereUniqueInput, 'guestId'>>;
}
export declare class QrCodeUncheckedCreateWithoutGuestInput {
    path: string;
    scannedAt?: Date | string;
    createdAt?: Date | string;
    scannedByUserId?: string;
}
export declare class QrCodeUncheckedCreateWithoutScannedByInput {
    path: string;
    scannedAt?: Date | string;
    createdAt?: Date | string;
    guestId: string;
}
export declare class QrCodeUncheckedCreateInput {
    path: string;
    scannedAt?: Date | string;
    createdAt?: Date | string;
    guestId: string;
    scannedByUserId?: string;
}
export declare class QrCodeUncheckedUpdateManyWithoutGuestNestedInput {
    create?: Array<QrCodeCreateWithoutGuestInput>;
    connectOrCreate?: Array<QrCodeCreateOrConnectWithoutGuestInput>;
    upsert?: Array<QrCodeUpsertWithWhereUniqueWithoutGuestInput>;
    createMany?: InstanceType<typeof QrCodeCreateManyGuestInputEnvelope>;
    set?: Array<Prisma.AtLeast<QrCodeWhereUniqueInput, 'guestId'>>;
    disconnect?: Array<Prisma.AtLeast<QrCodeWhereUniqueInput, 'guestId'>>;
    delete?: Array<Prisma.AtLeast<QrCodeWhereUniqueInput, 'guestId'>>;
    connect?: Array<Prisma.AtLeast<QrCodeWhereUniqueInput, 'guestId'>>;
    update?: Array<QrCodeUpdateWithWhereUniqueWithoutGuestInput>;
    updateMany?: Array<QrCodeUpdateManyWithWhereWithoutGuestInput>;
    deleteMany?: Array<QrCodeScalarWhereInput>;
}
export declare class QrCodeUncheckedUpdateManyWithoutGuestInput {
    path?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    scannedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    scannedByUserId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
}
export declare class QrCodeUncheckedUpdateManyWithoutScannedByNestedInput {
    create?: Array<QrCodeCreateWithoutScannedByInput>;
    connectOrCreate?: Array<QrCodeCreateOrConnectWithoutScannedByInput>;
    upsert?: Array<QrCodeUpsertWithWhereUniqueWithoutScannedByInput>;
    createMany?: InstanceType<typeof QrCodeCreateManyScannedByInputEnvelope>;
    set?: Array<Prisma.AtLeast<QrCodeWhereUniqueInput, 'guestId'>>;
    disconnect?: Array<Prisma.AtLeast<QrCodeWhereUniqueInput, 'guestId'>>;
    delete?: Array<Prisma.AtLeast<QrCodeWhereUniqueInput, 'guestId'>>;
    connect?: Array<Prisma.AtLeast<QrCodeWhereUniqueInput, 'guestId'>>;
    update?: Array<QrCodeUpdateWithWhereUniqueWithoutScannedByInput>;
    updateMany?: Array<QrCodeUpdateManyWithWhereWithoutScannedByInput>;
    deleteMany?: Array<QrCodeScalarWhereInput>;
}
export declare class QrCodeUncheckedUpdateManyWithoutScannedByInput {
    path?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    scannedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    guestId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class QrCodeUncheckedUpdateManyInput {
    path?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    scannedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    guestId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    scannedByUserId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
}
export declare class QrCodeUncheckedUpdateWithoutGuestInput {
    path?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    scannedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    scannedByUserId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
}
export declare class QrCodeUncheckedUpdateWithoutScannedByInput {
    path?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    scannedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    guestId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class QrCodeUncheckedUpdateInput {
    path?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    scannedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    guestId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    scannedByUserId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
}
export declare class QrCodeUpdateManyMutationInput {
    path?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    scannedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}
export declare class QrCodeUpdateManyWithWhereWithoutGuestInput {
    where: InstanceType<typeof QrCodeScalarWhereInput>;
    data: InstanceType<typeof QrCodeUpdateManyMutationInput>;
}
export declare class QrCodeUpdateManyWithWhereWithoutScannedByInput {
    where: InstanceType<typeof QrCodeScalarWhereInput>;
    data: InstanceType<typeof QrCodeUpdateManyMutationInput>;
}
export declare class QrCodeUpdateManyWithoutGuestNestedInput {
    create?: Array<QrCodeCreateWithoutGuestInput>;
    connectOrCreate?: Array<QrCodeCreateOrConnectWithoutGuestInput>;
    upsert?: Array<QrCodeUpsertWithWhereUniqueWithoutGuestInput>;
    createMany?: InstanceType<typeof QrCodeCreateManyGuestInputEnvelope>;
    set?: Array<Prisma.AtLeast<QrCodeWhereUniqueInput, 'guestId'>>;
    disconnect?: Array<Prisma.AtLeast<QrCodeWhereUniqueInput, 'guestId'>>;
    delete?: Array<Prisma.AtLeast<QrCodeWhereUniqueInput, 'guestId'>>;
    connect?: Array<Prisma.AtLeast<QrCodeWhereUniqueInput, 'guestId'>>;
    update?: Array<QrCodeUpdateWithWhereUniqueWithoutGuestInput>;
    updateMany?: Array<QrCodeUpdateManyWithWhereWithoutGuestInput>;
    deleteMany?: Array<QrCodeScalarWhereInput>;
}
export declare class QrCodeUpdateManyWithoutScannedByNestedInput {
    create?: Array<QrCodeCreateWithoutScannedByInput>;
    connectOrCreate?: Array<QrCodeCreateOrConnectWithoutScannedByInput>;
    upsert?: Array<QrCodeUpsertWithWhereUniqueWithoutScannedByInput>;
    createMany?: InstanceType<typeof QrCodeCreateManyScannedByInputEnvelope>;
    set?: Array<Prisma.AtLeast<QrCodeWhereUniqueInput, 'guestId'>>;
    disconnect?: Array<Prisma.AtLeast<QrCodeWhereUniqueInput, 'guestId'>>;
    delete?: Array<Prisma.AtLeast<QrCodeWhereUniqueInput, 'guestId'>>;
    connect?: Array<Prisma.AtLeast<QrCodeWhereUniqueInput, 'guestId'>>;
    update?: Array<QrCodeUpdateWithWhereUniqueWithoutScannedByInput>;
    updateMany?: Array<QrCodeUpdateManyWithWhereWithoutScannedByInput>;
    deleteMany?: Array<QrCodeScalarWhereInput>;
}
export declare class QrCodeUpdateWithWhereUniqueWithoutGuestInput {
    where: Prisma.AtLeast<QrCodeWhereUniqueInput, 'guestId'>;
    data: InstanceType<typeof QrCodeUpdateWithoutGuestInput>;
}
export declare class QrCodeUpdateWithWhereUniqueWithoutScannedByInput {
    where: Prisma.AtLeast<QrCodeWhereUniqueInput, 'guestId'>;
    data: InstanceType<typeof QrCodeUpdateWithoutScannedByInput>;
}
export declare class QrCodeUpdateWithoutGuestInput {
    path?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    scannedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    scannedBy?: InstanceType<typeof UserUpdateOneWithoutQrCodeNestedInput>;
}
export declare class QrCodeUpdateWithoutScannedByInput {
    path?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    scannedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    guest?: InstanceType<typeof GuestUpdateOneRequiredWithoutQrcodesNestedInput>;
}
export declare class QrCodeUpdateInput {
    path?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    scannedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    guest?: InstanceType<typeof GuestUpdateOneRequiredWithoutQrcodesNestedInput>;
    scannedBy?: InstanceType<typeof UserUpdateOneWithoutQrCodeNestedInput>;
}
export declare class QrCodeUpsertWithWhereUniqueWithoutGuestInput {
    where: Prisma.AtLeast<QrCodeWhereUniqueInput, 'guestId'>;
    update: InstanceType<typeof QrCodeUpdateWithoutGuestInput>;
    create: InstanceType<typeof QrCodeCreateWithoutGuestInput>;
}
export declare class QrCodeUpsertWithWhereUniqueWithoutScannedByInput {
    where: Prisma.AtLeast<QrCodeWhereUniqueInput, 'guestId'>;
    update: InstanceType<typeof QrCodeUpdateWithoutScannedByInput>;
    create: InstanceType<typeof QrCodeCreateWithoutScannedByInput>;
}
export declare class QrCodeWhereUniqueInput {
    guestId?: string;
    AND?: Array<QrCodeWhereInput>;
    OR?: Array<QrCodeWhereInput>;
    NOT?: Array<QrCodeWhereInput>;
    path?: InstanceType<typeof StringFilter>;
    scannedAt?: InstanceType<typeof DateTimeNullableFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    scannedByUserId?: InstanceType<typeof StringNullableFilter>;
    guest?: InstanceType<typeof GuestRelationFilter>;
    scannedBy?: InstanceType<typeof UserNullableRelationFilter>;
}
export declare class QrCodeWhereInput {
    AND?: Array<QrCodeWhereInput>;
    OR?: Array<QrCodeWhereInput>;
    NOT?: Array<QrCodeWhereInput>;
    path?: InstanceType<typeof StringFilter>;
    scannedAt?: InstanceType<typeof DateTimeNullableFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    guestId?: InstanceType<typeof StringFilter>;
    scannedByUserId?: InstanceType<typeof StringNullableFilter>;
    guest?: InstanceType<typeof GuestRelationFilter>;
    scannedBy?: InstanceType<typeof UserNullableRelationFilter>;
}
export declare class QrCode {
    path: string;
    scannedAt: Date | null;
    createdAt: Date;
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
    where: Prisma.AtLeast<QrCodeWhereUniqueInput, 'guestId'>;
}
export declare class UpsertOneQrCodeArgs {
    where: Prisma.AtLeast<QrCodeWhereUniqueInput, 'guestId'>;
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
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'whatsapp'>;
}
export declare class FindFirstUserOrThrowArgs {
    where?: InstanceType<typeof UserWhereInput>;
    orderBy?: Array<UserOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'whatsapp'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof UserScalarFieldEnum>;
}
export declare class FindFirstUserArgs {
    where?: InstanceType<typeof UserWhereInput>;
    orderBy?: Array<UserOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'whatsapp'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof UserScalarFieldEnum>;
}
export declare class FindManyUserArgs {
    where?: InstanceType<typeof UserWhereInput>;
    orderBy?: Array<UserOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'whatsapp'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof UserScalarFieldEnum>;
}
export declare class FindUniqueUserOrThrowArgs {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'whatsapp'>;
}
export declare class FindUniqueUserArgs {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'whatsapp'>;
}
export declare class UpdateManyUserArgs {
    data: InstanceType<typeof UserUpdateManyMutationInput>;
    where?: InstanceType<typeof UserWhereInput>;
}
export declare class UpdateOneUserArgs {
    data: InstanceType<typeof UserUpdateInput>;
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'whatsapp'>;
}
export declare class UpsertOneUserArgs {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'whatsapp'>;
    create: InstanceType<typeof UserCreateInput>;
    update: InstanceType<typeof UserUpdateInput>;
}
export declare class UserAggregateArgs {
    where?: InstanceType<typeof UserWhereInput>;
    orderBy?: Array<UserOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'whatsapp'>;
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
    whatsapp?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
    role?: true;
    guestInfoId?: true;
    _all?: true;
}
export declare class UserCountAggregate {
    id: number;
    fullName: number;
    email: number;
    password: number;
    whatsapp: number;
    createdAt: number;
    updatedAt: number;
    deletedAt: number;
    role: number;
    guestInfoId: number;
    _all: number;
}
export declare class UserCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    fullName?: keyof typeof SortOrder;
    email?: keyof typeof SortOrder;
    password?: keyof typeof SortOrder;
    whatsapp?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    deletedAt?: keyof typeof SortOrder;
    role?: keyof typeof SortOrder;
    guestInfoId?: keyof typeof SortOrder;
}
export declare class UserCount {
    QrCode?: number;
}
export declare class UserCreateManyInput {
    id?: string;
    fullName: string;
    email?: string;
    password: string;
    whatsapp?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    role: keyof typeof UserRole;
    guestInfoId?: string;
}
export declare class UserCreateNestedOneWithoutGuestInfoInput {
    create?: InstanceType<typeof UserCreateWithoutGuestInfoInput>;
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutGuestInfoInput>;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'whatsapp'>;
}
export declare class UserCreateNestedOneWithoutQrCodeInput {
    create?: InstanceType<typeof UserCreateWithoutQrCodeInput>;
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutQrCodeInput>;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'whatsapp'>;
}
export declare class UserCreateOrConnectWithoutGuestInfoInput {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'whatsapp'>;
    create: InstanceType<typeof UserCreateWithoutGuestInfoInput>;
}
export declare class UserCreateOrConnectWithoutQrCodeInput {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'whatsapp'>;
    create: InstanceType<typeof UserCreateWithoutQrCodeInput>;
}
export declare class UserCreateWithoutGuestInfoInput {
    id?: string;
    fullName: string;
    email?: string;
    password: string;
    whatsapp?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    role: keyof typeof UserRole;
    guestInfoId?: string;
    QrCode?: InstanceType<typeof QrCodeCreateNestedManyWithoutScannedByInput>;
}
export declare class UserCreateWithoutQrCodeInput {
    id?: string;
    fullName: string;
    email?: string;
    password: string;
    whatsapp?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    role: keyof typeof UserRole;
    guestInfoId?: string;
    guestInfo?: InstanceType<typeof GuestCreateNestedOneWithoutUserInput>;
}
export declare class UserCreateInput {
    id?: string;
    fullName: string;
    email?: string;
    password: string;
    whatsapp?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    role: keyof typeof UserRole;
    guestInfoId?: string;
    guestInfo?: InstanceType<typeof GuestCreateNestedOneWithoutUserInput>;
    QrCode?: InstanceType<typeof QrCodeCreateNestedManyWithoutScannedByInput>;
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
    password: string;
    whatsapp?: string;
    createdAt: Date | string;
    updatedAt: Date | string;
    deletedAt?: Date | string;
    role: keyof typeof UserRole;
    guestInfoId?: string;
    _count?: InstanceType<typeof UserCountAggregate>;
    _min?: InstanceType<typeof UserMinAggregate>;
    _max?: InstanceType<typeof UserMaxAggregate>;
}
export declare class UserMaxAggregateInput {
    id?: true;
    fullName?: true;
    email?: true;
    password?: true;
    whatsapp?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
    role?: true;
    guestInfoId?: true;
}
export declare class UserMaxAggregate {
    id?: string;
    fullName?: string;
    email?: string;
    password?: string;
    whatsapp?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    role?: keyof typeof UserRole;
    guestInfoId?: string;
}
export declare class UserMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    fullName?: keyof typeof SortOrder;
    email?: keyof typeof SortOrder;
    password?: keyof typeof SortOrder;
    whatsapp?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    deletedAt?: keyof typeof SortOrder;
    role?: keyof typeof SortOrder;
    guestInfoId?: keyof typeof SortOrder;
}
export declare class UserMinAggregateInput {
    id?: true;
    fullName?: true;
    email?: true;
    password?: true;
    whatsapp?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
    role?: true;
    guestInfoId?: true;
}
export declare class UserMinAggregate {
    id?: string;
    fullName?: string;
    email?: string;
    password?: string;
    whatsapp?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    role?: keyof typeof UserRole;
    guestInfoId?: string;
}
export declare class UserMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    fullName?: keyof typeof SortOrder;
    email?: keyof typeof SortOrder;
    password?: keyof typeof SortOrder;
    whatsapp?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    deletedAt?: keyof typeof SortOrder;
    role?: keyof typeof SortOrder;
    guestInfoId?: keyof typeof SortOrder;
}
export declare class UserNullableRelationFilter {
    is?: InstanceType<typeof UserWhereInput>;
    isNot?: InstanceType<typeof UserWhereInput>;
}
export declare class UserOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    fullName?: keyof typeof SortOrder;
    email?: InstanceType<typeof SortOrderInput>;
    password?: keyof typeof SortOrder;
    whatsapp?: InstanceType<typeof SortOrderInput>;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    deletedAt?: InstanceType<typeof SortOrderInput>;
    role?: keyof typeof SortOrder;
    guestInfoId?: InstanceType<typeof SortOrderInput>;
    _count?: InstanceType<typeof UserCountOrderByAggregateInput>;
    _max?: InstanceType<typeof UserMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof UserMinOrderByAggregateInput>;
}
export declare class UserOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    fullName?: keyof typeof SortOrder;
    email?: InstanceType<typeof SortOrderInput>;
    password?: keyof typeof SortOrder;
    whatsapp?: InstanceType<typeof SortOrderInput>;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    deletedAt?: InstanceType<typeof SortOrderInput>;
    role?: keyof typeof SortOrder;
    guestInfoId?: InstanceType<typeof SortOrderInput>;
    guestInfo?: InstanceType<typeof GuestOrderByWithRelationInput>;
    QrCode?: InstanceType<typeof QrCodeOrderByRelationAggregateInput>;
}
export declare class UserRelationFilter {
    is?: InstanceType<typeof UserWhereInput>;
    isNot?: InstanceType<typeof UserWhereInput>;
}
export declare class UserScalarWhereWithAggregatesInput {
    AND?: Array<UserScalarWhereWithAggregatesInput>;
    OR?: Array<UserScalarWhereWithAggregatesInput>;
    NOT?: Array<UserScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    fullName?: InstanceType<typeof StringWithAggregatesFilter>;
    email?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    password?: InstanceType<typeof StringWithAggregatesFilter>;
    whatsapp?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    deletedAt?: InstanceType<typeof DateTimeNullableWithAggregatesFilter>;
    role?: InstanceType<typeof EnumUserRoleWithAggregatesFilter>;
    guestInfoId?: InstanceType<typeof StringNullableWithAggregatesFilter>;
}
export declare class UserUncheckedCreateWithoutGuestInfoInput {
    id?: string;
    fullName: string;
    email?: string;
    password: string;
    whatsapp?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    role: keyof typeof UserRole;
    guestInfoId?: string;
    QrCode?: InstanceType<typeof QrCodeUncheckedCreateNestedManyWithoutScannedByInput>;
}
export declare class UserUncheckedCreateWithoutQrCodeInput {
    id?: string;
    fullName: string;
    email?: string;
    password: string;
    whatsapp?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    role: keyof typeof UserRole;
    guestInfoId?: string;
    guestInfo?: InstanceType<typeof GuestUncheckedCreateNestedOneWithoutUserInput>;
}
export declare class UserUncheckedCreateInput {
    id?: string;
    fullName: string;
    email?: string;
    password: string;
    whatsapp?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    role: keyof typeof UserRole;
    guestInfoId?: string;
    guestInfo?: InstanceType<typeof GuestUncheckedCreateNestedOneWithoutUserInput>;
    QrCode?: InstanceType<typeof QrCodeUncheckedCreateNestedManyWithoutScannedByInput>;
}
export declare class UserUncheckedUpdateManyInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    fullName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    whatsapp?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    role?: InstanceType<typeof EnumUserRoleFieldUpdateOperationsInput>;
    guestInfoId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
}
export declare class UserUncheckedUpdateWithoutGuestInfoInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    fullName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    whatsapp?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    role?: InstanceType<typeof EnumUserRoleFieldUpdateOperationsInput>;
    guestInfoId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    QrCode?: InstanceType<typeof QrCodeUncheckedUpdateManyWithoutScannedByNestedInput>;
}
export declare class UserUncheckedUpdateWithoutQrCodeInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    fullName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    whatsapp?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    role?: InstanceType<typeof EnumUserRoleFieldUpdateOperationsInput>;
    guestInfoId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    guestInfo?: InstanceType<typeof GuestUncheckedUpdateOneWithoutUserNestedInput>;
}
export declare class UserUncheckedUpdateInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    fullName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    whatsapp?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    role?: InstanceType<typeof EnumUserRoleFieldUpdateOperationsInput>;
    guestInfoId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    guestInfo?: InstanceType<typeof GuestUncheckedUpdateOneWithoutUserNestedInput>;
    QrCode?: InstanceType<typeof QrCodeUncheckedUpdateManyWithoutScannedByNestedInput>;
}
export declare class UserUpdateManyMutationInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    fullName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    whatsapp?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    role?: InstanceType<typeof EnumUserRoleFieldUpdateOperationsInput>;
    guestInfoId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
}
export declare class UserUpdateOneRequiredWithoutGuestInfoNestedInput {
    create?: InstanceType<typeof UserCreateWithoutGuestInfoInput>;
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutGuestInfoInput>;
    upsert?: InstanceType<typeof UserUpsertWithoutGuestInfoInput>;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'whatsapp'>;
    update?: InstanceType<typeof UserUpdateToOneWithWhereWithoutGuestInfoInput>;
}
export declare class UserUpdateOneWithoutQrCodeNestedInput {
    create?: InstanceType<typeof UserCreateWithoutQrCodeInput>;
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutQrCodeInput>;
    upsert?: InstanceType<typeof UserUpsertWithoutQrCodeInput>;
    disconnect?: InstanceType<typeof UserWhereInput>;
    delete?: InstanceType<typeof UserWhereInput>;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'whatsapp'>;
    update?: InstanceType<typeof UserUpdateToOneWithWhereWithoutQrCodeInput>;
}
export declare class UserUpdateToOneWithWhereWithoutGuestInfoInput {
    where?: InstanceType<typeof UserWhereInput>;
    data: InstanceType<typeof UserUpdateWithoutGuestInfoInput>;
}
export declare class UserUpdateToOneWithWhereWithoutQrCodeInput {
    where?: InstanceType<typeof UserWhereInput>;
    data: InstanceType<typeof UserUpdateWithoutQrCodeInput>;
}
export declare class UserUpdateWithoutGuestInfoInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    fullName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    whatsapp?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    role?: InstanceType<typeof EnumUserRoleFieldUpdateOperationsInput>;
    guestInfoId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    QrCode?: InstanceType<typeof QrCodeUpdateManyWithoutScannedByNestedInput>;
}
export declare class UserUpdateWithoutQrCodeInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    fullName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    whatsapp?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    role?: InstanceType<typeof EnumUserRoleFieldUpdateOperationsInput>;
    guestInfoId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    guestInfo?: InstanceType<typeof GuestUpdateOneWithoutUserNestedInput>;
}
export declare class UserUpdateInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    fullName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    whatsapp?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    role?: InstanceType<typeof EnumUserRoleFieldUpdateOperationsInput>;
    guestInfoId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    guestInfo?: InstanceType<typeof GuestUpdateOneWithoutUserNestedInput>;
    QrCode?: InstanceType<typeof QrCodeUpdateManyWithoutScannedByNestedInput>;
}
export declare class UserUpsertWithoutGuestInfoInput {
    update: InstanceType<typeof UserUpdateWithoutGuestInfoInput>;
    create: InstanceType<typeof UserCreateWithoutGuestInfoInput>;
    where?: InstanceType<typeof UserWhereInput>;
}
export declare class UserUpsertWithoutQrCodeInput {
    update: InstanceType<typeof UserUpdateWithoutQrCodeInput>;
    create: InstanceType<typeof UserCreateWithoutQrCodeInput>;
    where?: InstanceType<typeof UserWhereInput>;
}
export declare class UserWhereUniqueInput {
    id?: string;
    email?: string;
    whatsapp?: string;
    AND?: Array<UserWhereInput>;
    OR?: Array<UserWhereInput>;
    NOT?: Array<UserWhereInput>;
    fullName?: InstanceType<typeof StringFilter>;
    password?: InstanceType<typeof StringFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    deletedAt?: InstanceType<typeof DateTimeNullableFilter>;
    role?: InstanceType<typeof EnumUserRoleFilter>;
    guestInfoId?: InstanceType<typeof StringNullableFilter>;
    guestInfo?: InstanceType<typeof GuestNullableRelationFilter>;
    QrCode?: InstanceType<typeof QrCodeListRelationFilter>;
}
export declare class UserWhereInput {
    AND?: Array<UserWhereInput>;
    OR?: Array<UserWhereInput>;
    NOT?: Array<UserWhereInput>;
    id?: InstanceType<typeof StringFilter>;
    fullName?: InstanceType<typeof StringFilter>;
    email?: InstanceType<typeof StringNullableFilter>;
    password?: InstanceType<typeof StringFilter>;
    whatsapp?: InstanceType<typeof StringNullableFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    deletedAt?: InstanceType<typeof DateTimeNullableFilter>;
    role?: InstanceType<typeof EnumUserRoleFilter>;
    guestInfoId?: InstanceType<typeof StringNullableFilter>;
    guestInfo?: InstanceType<typeof GuestNullableRelationFilter>;
    QrCode?: InstanceType<typeof QrCodeListRelationFilter>;
}
export declare class User {
    id: string;
    fullName: string;
    email: string | null;
    password: string;
    whatsapp: string | null;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    role: keyof typeof UserRole;
    guestInfoId: string | null;
    guestInfo?: InstanceType<typeof Guest> | null;
    QrCode?: Array<QrCode>;
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
    id?: true;
}
export declare class WhatsappQueueAvgAggregate {
    id?: number;
}
export declare class WhatsappQueueAvgOrderByAggregateInput {
    id?: keyof typeof SortOrder;
}
export declare class WhatsappQueueCountAggregateInput {
    id?: true;
    createdAt?: true;
    status?: true;
    guestId?: true;
    _all?: true;
}
export declare class WhatsappQueueCountAggregate {
    id: number;
    createdAt: number;
    status: number;
    guestId: number;
    _all: number;
}
export declare class WhatsappQueueCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    status?: keyof typeof SortOrder;
    guestId?: keyof typeof SortOrder;
}
export declare class WhatsappQueueCreateManyGuestInputEnvelope {
    data: Array<WhatsappQueueCreateManyGuestInput>;
    skipDuplicates?: boolean;
}
export declare class WhatsappQueueCreateManyGuestInput {
    id?: number;
    createdAt?: Date | string;
    status?: keyof typeof QueueStatus;
}
export declare class WhatsappQueueCreateManyInput {
    id?: number;
    createdAt?: Date | string;
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
    createdAt?: Date | string;
    status?: keyof typeof QueueStatus;
}
export declare class WhatsappQueueCreateInput {
    createdAt?: Date | string;
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
    id: number;
    createdAt: Date | string;
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
    status?: true;
    guestId?: true;
}
export declare class WhatsappQueueMaxAggregate {
    id?: number;
    createdAt?: Date | string;
    status?: keyof typeof QueueStatus;
    guestId?: string;
}
export declare class WhatsappQueueMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    status?: keyof typeof SortOrder;
    guestId?: keyof typeof SortOrder;
}
export declare class WhatsappQueueMinAggregateInput {
    id?: true;
    createdAt?: true;
    status?: true;
    guestId?: true;
}
export declare class WhatsappQueueMinAggregate {
    id?: number;
    createdAt?: Date | string;
    status?: keyof typeof QueueStatus;
    guestId?: string;
}
export declare class WhatsappQueueMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    status?: keyof typeof SortOrder;
    guestId?: keyof typeof SortOrder;
}
export declare class WhatsappQueueOrderByRelationAggregateInput {
    _count?: keyof typeof SortOrder;
}
export declare class WhatsappQueueOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
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
    status?: keyof typeof SortOrder;
    guestId?: keyof typeof SortOrder;
    guest?: InstanceType<typeof GuestOrderByWithRelationInput>;
}
export declare class WhatsappQueueScalarWhereWithAggregatesInput {
    AND?: Array<WhatsappQueueScalarWhereWithAggregatesInput>;
    OR?: Array<WhatsappQueueScalarWhereWithAggregatesInput>;
    NOT?: Array<WhatsappQueueScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    status?: InstanceType<typeof EnumQueueStatusWithAggregatesFilter>;
    guestId?: InstanceType<typeof StringWithAggregatesFilter>;
}
export declare class WhatsappQueueScalarWhereInput {
    AND?: Array<WhatsappQueueScalarWhereInput>;
    OR?: Array<WhatsappQueueScalarWhereInput>;
    NOT?: Array<WhatsappQueueScalarWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    status?: InstanceType<typeof EnumQueueStatusFilter>;
    guestId?: InstanceType<typeof StringFilter>;
}
export declare class WhatsappQueueSumAggregateInput {
    id?: true;
}
export declare class WhatsappQueueSumAggregate {
    id?: number;
}
export declare class WhatsappQueueSumOrderByAggregateInput {
    id?: keyof typeof SortOrder;
}
export declare class WhatsappQueueUncheckedCreateNestedManyWithoutGuestInput {
    create?: Array<WhatsappQueueCreateWithoutGuestInput>;
    connectOrCreate?: Array<WhatsappQueueCreateOrConnectWithoutGuestInput>;
    createMany?: InstanceType<typeof WhatsappQueueCreateManyGuestInputEnvelope>;
    connect?: Array<Prisma.AtLeast<WhatsappQueueWhereUniqueInput, 'id'>>;
}
export declare class WhatsappQueueUncheckedCreateWithoutGuestInput {
    id?: number;
    createdAt?: Date | string;
    status?: keyof typeof QueueStatus;
}
export declare class WhatsappQueueUncheckedCreateInput {
    id?: number;
    createdAt?: Date | string;
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
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumQueueStatusFieldUpdateOperationsInput>;
}
export declare class WhatsappQueueUncheckedUpdateManyInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumQueueStatusFieldUpdateOperationsInput>;
    guestId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class WhatsappQueueUncheckedUpdateWithoutGuestInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumQueueStatusFieldUpdateOperationsInput>;
}
export declare class WhatsappQueueUncheckedUpdateInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumQueueStatusFieldUpdateOperationsInput>;
    guestId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class WhatsappQueueUpdateManyMutationInput {
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
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
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumQueueStatusFieldUpdateOperationsInput>;
}
export declare class WhatsappQueueUpdateInput {
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumQueueStatusFieldUpdateOperationsInput>;
    guest?: InstanceType<typeof GuestUpdateOneRequiredWithoutWhatsappQueueNestedInput>;
}
export declare class WhatsappQueueUpsertWithWhereUniqueWithoutGuestInput {
    where: Prisma.AtLeast<WhatsappQueueWhereUniqueInput, 'id'>;
    update: InstanceType<typeof WhatsappQueueUpdateWithoutGuestInput>;
    create: InstanceType<typeof WhatsappQueueCreateWithoutGuestInput>;
}
export declare class WhatsappQueueWhereUniqueInput {
    id?: number;
    AND?: Array<WhatsappQueueWhereInput>;
    OR?: Array<WhatsappQueueWhereInput>;
    NOT?: Array<WhatsappQueueWhereInput>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    status?: InstanceType<typeof EnumQueueStatusFilter>;
    guestId?: InstanceType<typeof StringFilter>;
    guest?: InstanceType<typeof GuestRelationFilter>;
}
export declare class WhatsappQueueWhereInput {
    AND?: Array<WhatsappQueueWhereInput>;
    OR?: Array<WhatsappQueueWhereInput>;
    NOT?: Array<WhatsappQueueWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    status?: InstanceType<typeof EnumQueueStatusFilter>;
    guestId?: InstanceType<typeof StringFilter>;
    guest?: InstanceType<typeof GuestRelationFilter>;
}
export declare class WhatsappQueue {
    id: number;
    createdAt: Date;
    status: keyof typeof QueueStatus;
    guestId: string;
    guest?: InstanceType<typeof Guest>;
}

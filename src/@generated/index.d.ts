import { Prisma } from '@prisma/client';
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
export declare enum WhatsappQueueScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    status = "status",
    guestId = "guestId"
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
export declare enum EmailQueueScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    status = "status",
    guestId = "guestId"
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
    checkInAt = "checkInAt",
    confirmationStatus = "confirmationStatus"
}
export declare class CreateManyemailQueueArgs {
    data: Array<emailQueueCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOneemailQueueArgs {
    data: InstanceType<typeof emailQueueCreateInput>;
}
export declare class DeleteManyemailQueueArgs {
    where?: InstanceType<typeof emailQueueWhereInput>;
}
export declare class DeleteOneemailQueueArgs {
    where: Prisma.AtLeast<emailQueueWhereUniqueInput, 'id'>;
}
export declare class emailQueueAggregateArgs {
    where?: InstanceType<typeof emailQueueWhereInput>;
    orderBy?: Array<emailQueueOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<emailQueueWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
}
export declare class emailQueueAvgOrderByAggregateInput {
    id?: keyof typeof SortOrder;
}
export declare class emailQueueCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    status?: keyof typeof SortOrder;
    guestId?: keyof typeof SortOrder;
}
export declare class emailQueueCreateManyGuestInputEnvelope {
    data: Array<emailQueueCreateManyGuestInput>;
    skipDuplicates?: boolean;
}
export declare class emailQueueCreateManyGuestInput {
    id?: number;
    createdAt?: Date | string;
    status?: keyof typeof QueueStatus;
}
export declare class emailQueueCreateManyInput {
    id?: number;
    createdAt?: Date | string;
    status?: keyof typeof QueueStatus;
    guestId: string;
}
export declare class emailQueueCreateNestedManyWithoutGuestInput {
    create?: Array<emailQueueCreateWithoutGuestInput>;
    connectOrCreate?: Array<emailQueueCreateOrConnectWithoutGuestInput>;
    createMany?: InstanceType<typeof emailQueueCreateManyGuestInputEnvelope>;
    connect?: Array<Prisma.AtLeast<emailQueueWhereUniqueInput, 'id'>>;
}
export declare class emailQueueCreateOrConnectWithoutGuestInput {
    where: Prisma.AtLeast<emailQueueWhereUniqueInput, 'id'>;
    create: InstanceType<typeof emailQueueCreateWithoutGuestInput>;
}
export declare class emailQueueCreateWithoutGuestInput {
    createdAt?: Date | string;
    status?: keyof typeof QueueStatus;
}
export declare class emailQueueCreateInput {
    createdAt?: Date | string;
    status?: keyof typeof QueueStatus;
    guest: InstanceType<typeof GuestCreateNestedOneWithoutEmailQueueInput>;
}
export declare class emailQueueGroupByArgs {
    where?: InstanceType<typeof emailQueueWhereInput>;
    orderBy?: Array<emailQueueOrderByWithAggregationInput>;
    by: Array<keyof typeof EmailQueueScalarFieldEnum>;
    having?: InstanceType<typeof emailQueueScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
}
export declare class emailQueueMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    status?: keyof typeof SortOrder;
    guestId?: keyof typeof SortOrder;
}
export declare class emailQueueMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    status?: keyof typeof SortOrder;
    guestId?: keyof typeof SortOrder;
}
export declare class emailQueueOrderByRelationAggregateInput {
    _count?: keyof typeof SortOrder;
}
export declare class emailQueueOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    status?: keyof typeof SortOrder;
    guestId?: keyof typeof SortOrder;
    _count?: InstanceType<typeof emailQueueCountOrderByAggregateInput>;
    _avg?: InstanceType<typeof emailQueueAvgOrderByAggregateInput>;
    _max?: InstanceType<typeof emailQueueMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof emailQueueMinOrderByAggregateInput>;
    _sum?: InstanceType<typeof emailQueueSumOrderByAggregateInput>;
}
export declare class emailQueueOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    status?: keyof typeof SortOrder;
    guestId?: keyof typeof SortOrder;
    guest?: InstanceType<typeof GuestOrderByWithRelationInput>;
}
export declare class emailQueueScalarWhereWithAggregatesInput {
    AND?: Array<emailQueueScalarWhereWithAggregatesInput>;
    OR?: Array<emailQueueScalarWhereWithAggregatesInput>;
    NOT?: Array<emailQueueScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    status?: InstanceType<typeof EnumQueueStatusWithAggregatesFilter>;
    guestId?: InstanceType<typeof StringWithAggregatesFilter>;
}
export declare class emailQueueScalarWhereInput {
    AND?: Array<emailQueueScalarWhereInput>;
    OR?: Array<emailQueueScalarWhereInput>;
    NOT?: Array<emailQueueScalarWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    status?: InstanceType<typeof EnumQueueStatusFilter>;
    guestId?: InstanceType<typeof StringFilter>;
}
export declare class emailQueueSumOrderByAggregateInput {
    id?: keyof typeof SortOrder;
}
export declare class emailQueueUncheckedCreateNestedManyWithoutGuestInput {
    create?: Array<emailQueueCreateWithoutGuestInput>;
    connectOrCreate?: Array<emailQueueCreateOrConnectWithoutGuestInput>;
    createMany?: InstanceType<typeof emailQueueCreateManyGuestInputEnvelope>;
    connect?: Array<Prisma.AtLeast<emailQueueWhereUniqueInput, 'id'>>;
}
export declare class emailQueueUncheckedCreateWithoutGuestInput {
    id?: number;
    createdAt?: Date | string;
    status?: keyof typeof QueueStatus;
}
export declare class emailQueueUncheckedCreateInput {
    id?: number;
    createdAt?: Date | string;
    status?: keyof typeof QueueStatus;
    guestId: string;
}
export declare class emailQueueUncheckedUpdateManyWithoutGuestNestedInput {
    create?: Array<emailQueueCreateWithoutGuestInput>;
    connectOrCreate?: Array<emailQueueCreateOrConnectWithoutGuestInput>;
    upsert?: Array<emailQueueUpsertWithWhereUniqueWithoutGuestInput>;
    createMany?: InstanceType<typeof emailQueueCreateManyGuestInputEnvelope>;
    set?: Array<Prisma.AtLeast<emailQueueWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<emailQueueWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<emailQueueWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<emailQueueWhereUniqueInput, 'id'>>;
    update?: Array<emailQueueUpdateWithWhereUniqueWithoutGuestInput>;
    updateMany?: Array<emailQueueUpdateManyWithWhereWithoutGuestInput>;
    deleteMany?: Array<emailQueueScalarWhereInput>;
}
export declare class emailQueueUncheckedUpdateManyWithoutGuestInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumQueueStatusFieldUpdateOperationsInput>;
}
export declare class emailQueueUncheckedUpdateManyInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumQueueStatusFieldUpdateOperationsInput>;
    guestId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class emailQueueUncheckedUpdateWithoutGuestInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumQueueStatusFieldUpdateOperationsInput>;
}
export declare class emailQueueUncheckedUpdateInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumQueueStatusFieldUpdateOperationsInput>;
    guestId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class emailQueueUpdateManyMutationInput {
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumQueueStatusFieldUpdateOperationsInput>;
}
export declare class emailQueueUpdateManyWithWhereWithoutGuestInput {
    where: InstanceType<typeof emailQueueScalarWhereInput>;
    data: InstanceType<typeof emailQueueUpdateManyMutationInput>;
}
export declare class emailQueueUpdateManyWithoutGuestNestedInput {
    create?: Array<emailQueueCreateWithoutGuestInput>;
    connectOrCreate?: Array<emailQueueCreateOrConnectWithoutGuestInput>;
    upsert?: Array<emailQueueUpsertWithWhereUniqueWithoutGuestInput>;
    createMany?: InstanceType<typeof emailQueueCreateManyGuestInputEnvelope>;
    set?: Array<Prisma.AtLeast<emailQueueWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<emailQueueWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<emailQueueWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<emailQueueWhereUniqueInput, 'id'>>;
    update?: Array<emailQueueUpdateWithWhereUniqueWithoutGuestInput>;
    updateMany?: Array<emailQueueUpdateManyWithWhereWithoutGuestInput>;
    deleteMany?: Array<emailQueueScalarWhereInput>;
}
export declare class emailQueueUpdateWithWhereUniqueWithoutGuestInput {
    where: Prisma.AtLeast<emailQueueWhereUniqueInput, 'id'>;
    data: InstanceType<typeof emailQueueUpdateWithoutGuestInput>;
}
export declare class emailQueueUpdateWithoutGuestInput {
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumQueueStatusFieldUpdateOperationsInput>;
}
export declare class emailQueueUpdateInput {
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumQueueStatusFieldUpdateOperationsInput>;
    guest?: InstanceType<typeof GuestUpdateOneRequiredWithoutEmailQueueNestedInput>;
}
export declare class emailQueueUpsertWithWhereUniqueWithoutGuestInput {
    where: Prisma.AtLeast<emailQueueWhereUniqueInput, 'id'>;
    update: InstanceType<typeof emailQueueUpdateWithoutGuestInput>;
    create: InstanceType<typeof emailQueueCreateWithoutGuestInput>;
}
export declare class emailQueueWhereUniqueInput {
    id?: number;
    AND?: Array<emailQueueWhereInput>;
    OR?: Array<emailQueueWhereInput>;
    NOT?: Array<emailQueueWhereInput>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    status?: InstanceType<typeof EnumQueueStatusFilter>;
    guestId?: InstanceType<typeof StringFilter>;
    guest?: InstanceType<typeof GuestRelationFilter>;
}
export declare class emailQueueWhereInput {
    AND?: Array<emailQueueWhereInput>;
    OR?: Array<emailQueueWhereInput>;
    NOT?: Array<emailQueueWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    status?: InstanceType<typeof EnumQueueStatusFilter>;
    guestId?: InstanceType<typeof StringFilter>;
    guest?: InstanceType<typeof GuestRelationFilter>;
}
export declare class emailQueue {
    id: number;
    createdAt: Date;
    status: keyof typeof QueueStatus;
    guestId: string;
    guest?: InstanceType<typeof Guest>;
}
export declare class FindFirstemailQueueOrThrowArgs {
    where?: InstanceType<typeof emailQueueWhereInput>;
    orderBy?: Array<emailQueueOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<emailQueueWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof EmailQueueScalarFieldEnum>;
}
export declare class FindFirstemailQueueArgs {
    where?: InstanceType<typeof emailQueueWhereInput>;
    orderBy?: Array<emailQueueOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<emailQueueWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof EmailQueueScalarFieldEnum>;
}
export declare class FindManyemailQueueArgs {
    where?: InstanceType<typeof emailQueueWhereInput>;
    orderBy?: Array<emailQueueOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<emailQueueWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof EmailQueueScalarFieldEnum>;
}
export declare class FindUniqueemailQueueOrThrowArgs {
    where: Prisma.AtLeast<emailQueueWhereUniqueInput, 'id'>;
}
export declare class FindUniqueemailQueueArgs {
    where: Prisma.AtLeast<emailQueueWhereUniqueInput, 'id'>;
}
export declare class UpdateManyemailQueueArgs {
    data: InstanceType<typeof emailQueueUpdateManyMutationInput>;
    where?: InstanceType<typeof emailQueueWhereInput>;
}
export declare class UpdateOneemailQueueArgs {
    data: InstanceType<typeof emailQueueUpdateInput>;
    where: Prisma.AtLeast<emailQueueWhereUniqueInput, 'id'>;
}
export declare class UpsertOneemailQueueArgs {
    where: Prisma.AtLeast<emailQueueWhereUniqueInput, 'id'>;
    create: InstanceType<typeof emailQueueCreateInput>;
    update: InstanceType<typeof emailQueueUpdateInput>;
}
export declare class AggregateGuest {
    _count?: InstanceType<typeof GuestCountAggregate>;
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
    _min?: InstanceType<typeof GuestMinAggregateInput>;
    _max?: InstanceType<typeof GuestMaxAggregateInput>;
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
    checkInAt?: true;
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
    checkInAt: number;
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
    checkInAt?: keyof typeof SortOrder;
    confirmationStatus?: keyof typeof SortOrder;
}
export declare class GuestCount {
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
    checkInAt?: Date | string;
    confirmationStatus?: keyof typeof ConfirmationStatus;
}
export declare class GuestCreateNestedOneWithoutEmailQueueInput {
    create?: InstanceType<typeof GuestCreateWithoutEmailQueueInput>;
    connectOrCreate?: InstanceType<typeof GuestCreateOrConnectWithoutEmailQueueInput>;
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
    checkInAt?: Date | string;
    confirmationStatus?: keyof typeof ConfirmationStatus;
    user: InstanceType<typeof UserCreateNestedOneWithoutGuestInfoInput>;
    whatsappQueue?: InstanceType<typeof whatsappQueueCreateNestedManyWithoutGuestInput>;
}
export declare class GuestCreateWithoutUserInput {
    category1?: string;
    category2?: string;
    personInCharge?: string;
    class?: string;
    seat?: string;
    rejectionReason?: string;
    description?: string;
    checkInAt?: Date | string;
    confirmationStatus?: keyof typeof ConfirmationStatus;
    emailQueue?: InstanceType<typeof emailQueueCreateNestedManyWithoutGuestInput>;
    whatsappQueue?: InstanceType<typeof whatsappQueueCreateNestedManyWithoutGuestInput>;
}
export declare class GuestCreateWithoutWhatsappQueueInput {
    category1?: string;
    category2?: string;
    personInCharge?: string;
    class?: string;
    seat?: string;
    rejectionReason?: string;
    description?: string;
    checkInAt?: Date | string;
    confirmationStatus?: keyof typeof ConfirmationStatus;
    user: InstanceType<typeof UserCreateNestedOneWithoutGuestInfoInput>;
    emailQueue?: InstanceType<typeof emailQueueCreateNestedManyWithoutGuestInput>;
}
export declare class GuestCreateInput {
    category1?: string;
    category2?: string;
    personInCharge?: string;
    class?: string;
    seat?: string;
    rejectionReason?: string;
    description?: string;
    checkInAt?: Date | string;
    confirmationStatus?: keyof typeof ConfirmationStatus;
    user: InstanceType<typeof UserCreateNestedOneWithoutGuestInfoInput>;
    emailQueue?: InstanceType<typeof emailQueueCreateNestedManyWithoutGuestInput>;
    whatsappQueue?: InstanceType<typeof whatsappQueueCreateNestedManyWithoutGuestInput>;
}
export declare class GuestGroupByArgs {
    where?: InstanceType<typeof GuestWhereInput>;
    orderBy?: Array<GuestOrderByWithAggregationInput>;
    by: Array<keyof typeof GuestScalarFieldEnum>;
    having?: InstanceType<typeof GuestScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof GuestCountAggregateInput>;
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
    checkInAt?: Date | string;
    confirmationStatus: keyof typeof ConfirmationStatus;
    _count?: InstanceType<typeof GuestCountAggregate>;
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
    checkInAt?: true;
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
    checkInAt?: Date | string;
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
    checkInAt?: keyof typeof SortOrder;
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
    checkInAt?: true;
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
    checkInAt?: Date | string;
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
    checkInAt?: keyof typeof SortOrder;
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
    checkInAt?: InstanceType<typeof SortOrderInput>;
    confirmationStatus?: keyof typeof SortOrder;
    _count?: InstanceType<typeof GuestCountOrderByAggregateInput>;
    _max?: InstanceType<typeof GuestMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof GuestMinOrderByAggregateInput>;
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
    checkInAt?: InstanceType<typeof SortOrderInput>;
    confirmationStatus?: keyof typeof SortOrder;
    user?: InstanceType<typeof UserOrderByWithRelationInput>;
    emailQueue?: InstanceType<typeof emailQueueOrderByRelationAggregateInput>;
    whatsappQueue?: InstanceType<typeof whatsappQueueOrderByRelationAggregateInput>;
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
    checkInAt?: InstanceType<typeof DateTimeNullableWithAggregatesFilter>;
    confirmationStatus?: InstanceType<typeof EnumConfirmationStatusWithAggregatesFilter>;
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
    checkInAt?: Date | string;
    confirmationStatus?: keyof typeof ConfirmationStatus;
    whatsappQueue?: InstanceType<typeof whatsappQueueUncheckedCreateNestedManyWithoutGuestInput>;
}
export declare class GuestUncheckedCreateWithoutUserInput {
    category1?: string;
    category2?: string;
    personInCharge?: string;
    class?: string;
    seat?: string;
    rejectionReason?: string;
    description?: string;
    checkInAt?: Date | string;
    confirmationStatus?: keyof typeof ConfirmationStatus;
    emailQueue?: InstanceType<typeof emailQueueUncheckedCreateNestedManyWithoutGuestInput>;
    whatsappQueue?: InstanceType<typeof whatsappQueueUncheckedCreateNestedManyWithoutGuestInput>;
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
    checkInAt?: Date | string;
    confirmationStatus?: keyof typeof ConfirmationStatus;
    emailQueue?: InstanceType<typeof emailQueueUncheckedCreateNestedManyWithoutGuestInput>;
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
    checkInAt?: Date | string;
    confirmationStatus?: keyof typeof ConfirmationStatus;
    emailQueue?: InstanceType<typeof emailQueueUncheckedCreateNestedManyWithoutGuestInput>;
    whatsappQueue?: InstanceType<typeof whatsappQueueUncheckedCreateNestedManyWithoutGuestInput>;
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
    checkInAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
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
    checkInAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    confirmationStatus?: InstanceType<typeof EnumConfirmationStatusFieldUpdateOperationsInput>;
    whatsappQueue?: InstanceType<typeof whatsappQueueUncheckedUpdateManyWithoutGuestNestedInput>;
}
export declare class GuestUncheckedUpdateWithoutUserInput {
    category1?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    category2?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    personInCharge?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    class?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    seat?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    rejectionReason?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    checkInAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    confirmationStatus?: InstanceType<typeof EnumConfirmationStatusFieldUpdateOperationsInput>;
    emailQueue?: InstanceType<typeof emailQueueUncheckedUpdateManyWithoutGuestNestedInput>;
    whatsappQueue?: InstanceType<typeof whatsappQueueUncheckedUpdateManyWithoutGuestNestedInput>;
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
    checkInAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    confirmationStatus?: InstanceType<typeof EnumConfirmationStatusFieldUpdateOperationsInput>;
    emailQueue?: InstanceType<typeof emailQueueUncheckedUpdateManyWithoutGuestNestedInput>;
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
    checkInAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    confirmationStatus?: InstanceType<typeof EnumConfirmationStatusFieldUpdateOperationsInput>;
    emailQueue?: InstanceType<typeof emailQueueUncheckedUpdateManyWithoutGuestNestedInput>;
    whatsappQueue?: InstanceType<typeof whatsappQueueUncheckedUpdateManyWithoutGuestNestedInput>;
}
export declare class GuestUpdateManyMutationInput {
    category1?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    category2?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    personInCharge?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    class?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    seat?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    rejectionReason?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    checkInAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    confirmationStatus?: InstanceType<typeof EnumConfirmationStatusFieldUpdateOperationsInput>;
}
export declare class GuestUpdateOneRequiredWithoutEmailQueueNestedInput {
    create?: InstanceType<typeof GuestCreateWithoutEmailQueueInput>;
    connectOrCreate?: InstanceType<typeof GuestCreateOrConnectWithoutEmailQueueInput>;
    upsert?: InstanceType<typeof GuestUpsertWithoutEmailQueueInput>;
    connect?: Prisma.AtLeast<GuestWhereUniqueInput, 'userId'>;
    update?: InstanceType<typeof GuestUpdateToOneWithWhereWithoutEmailQueueInput>;
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
    checkInAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    confirmationStatus?: InstanceType<typeof EnumConfirmationStatusFieldUpdateOperationsInput>;
    user?: InstanceType<typeof UserUpdateOneRequiredWithoutGuestInfoNestedInput>;
    whatsappQueue?: InstanceType<typeof whatsappQueueUpdateManyWithoutGuestNestedInput>;
}
export declare class GuestUpdateWithoutUserInput {
    category1?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    category2?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    personInCharge?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    class?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    seat?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    rejectionReason?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    checkInAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    confirmationStatus?: InstanceType<typeof EnumConfirmationStatusFieldUpdateOperationsInput>;
    emailQueue?: InstanceType<typeof emailQueueUpdateManyWithoutGuestNestedInput>;
    whatsappQueue?: InstanceType<typeof whatsappQueueUpdateManyWithoutGuestNestedInput>;
}
export declare class GuestUpdateWithoutWhatsappQueueInput {
    category1?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    category2?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    personInCharge?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    class?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    seat?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    rejectionReason?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    checkInAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    confirmationStatus?: InstanceType<typeof EnumConfirmationStatusFieldUpdateOperationsInput>;
    user?: InstanceType<typeof UserUpdateOneRequiredWithoutGuestInfoNestedInput>;
    emailQueue?: InstanceType<typeof emailQueueUpdateManyWithoutGuestNestedInput>;
}
export declare class GuestUpdateInput {
    category1?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    category2?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    personInCharge?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    class?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    seat?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    rejectionReason?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    checkInAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    confirmationStatus?: InstanceType<typeof EnumConfirmationStatusFieldUpdateOperationsInput>;
    user?: InstanceType<typeof UserUpdateOneRequiredWithoutGuestInfoNestedInput>;
    emailQueue?: InstanceType<typeof emailQueueUpdateManyWithoutGuestNestedInput>;
    whatsappQueue?: InstanceType<typeof whatsappQueueUpdateManyWithoutGuestNestedInput>;
}
export declare class GuestUpsertWithoutEmailQueueInput {
    update: InstanceType<typeof GuestUpdateWithoutEmailQueueInput>;
    create: InstanceType<typeof GuestCreateWithoutEmailQueueInput>;
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
    checkInAt?: InstanceType<typeof DateTimeNullableFilter>;
    confirmationStatus?: InstanceType<typeof EnumConfirmationStatusFilter>;
    user?: InstanceType<typeof UserRelationFilter>;
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
    checkInAt?: InstanceType<typeof DateTimeNullableFilter>;
    confirmationStatus?: InstanceType<typeof EnumConfirmationStatusFilter>;
    user?: InstanceType<typeof UserRelationFilter>;
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
    checkInAt: Date | null;
    confirmationStatus: keyof typeof ConfirmationStatus;
    user?: InstanceType<typeof User>;
    emailQueue?: Array<emailQueue>;
    whatsappQueue?: Array<whatsappQueue>;
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
export declare class AggregateEmailQueue {
    _count?: InstanceType<typeof EmailQueueCountAggregate>;
    _avg?: InstanceType<typeof EmailQueueAvgAggregate>;
    _sum?: InstanceType<typeof EmailQueueSumAggregate>;
    _min?: InstanceType<typeof EmailQueueMinAggregate>;
    _max?: InstanceType<typeof EmailQueueMaxAggregate>;
}
export declare class AggregateWhatsappQueue {
    _count?: InstanceType<typeof WhatsappQueueCountAggregate>;
    _avg?: InstanceType<typeof WhatsappQueueAvgAggregate>;
    _sum?: InstanceType<typeof WhatsappQueueSumAggregate>;
    _min?: InstanceType<typeof WhatsappQueueMinAggregate>;
    _max?: InstanceType<typeof WhatsappQueueMaxAggregate>;
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
export declare class EmailQueueAvgAggregate {
    id?: number;
}
export declare class EmailQueueCountAggregate {
    id: number;
    createdAt: number;
    status: number;
    guestId: number;
    _all: number;
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
    every?: InstanceType<typeof emailQueueWhereInput>;
    some?: InstanceType<typeof emailQueueWhereInput>;
    none?: InstanceType<typeof emailQueueWhereInput>;
}
export declare class EmailQueueMaxAggregate {
    id?: number;
    createdAt?: Date | string;
    status?: keyof typeof QueueStatus;
    guestId?: string;
}
export declare class EmailQueueMinAggregate {
    id?: number;
    createdAt?: Date | string;
    status?: keyof typeof QueueStatus;
    guestId?: string;
}
export declare class EmailQueueSumAggregate {
    id?: number;
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
export declare class WhatsappQueueAvgAggregate {
    id?: number;
}
export declare class WhatsappQueueCountAggregate {
    id: number;
    createdAt: number;
    status: number;
    guestId: number;
    _all: number;
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
    every?: InstanceType<typeof whatsappQueueWhereInput>;
    some?: InstanceType<typeof whatsappQueueWhereInput>;
    none?: InstanceType<typeof whatsappQueueWhereInput>;
}
export declare class WhatsappQueueMaxAggregate {
    id?: number;
    createdAt?: Date | string;
    status?: keyof typeof QueueStatus;
    guestId?: string;
}
export declare class WhatsappQueueMinAggregate {
    id?: number;
    createdAt?: Date | string;
    status?: keyof typeof QueueStatus;
    guestId?: string;
}
export declare class WhatsappQueueSumAggregate {
    id?: number;
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
export declare class UserCreateManyInput {
    id?: string;
    fullName: string;
    email: string;
    password: string;
    whatsapp: string;
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
export declare class UserCreateOrConnectWithoutGuestInfoInput {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'whatsapp'>;
    create: InstanceType<typeof UserCreateWithoutGuestInfoInput>;
}
export declare class UserCreateWithoutGuestInfoInput {
    id?: string;
    fullName: string;
    email: string;
    password: string;
    whatsapp: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    role: keyof typeof UserRole;
    guestInfoId?: string;
}
export declare class UserCreateInput {
    id?: string;
    fullName: string;
    email: string;
    password: string;
    whatsapp: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    role: keyof typeof UserRole;
    guestInfoId?: string;
    guestInfo?: InstanceType<typeof GuestCreateNestedOneWithoutUserInput>;
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
    email: string;
    password: string;
    whatsapp: string;
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
export declare class UserOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    fullName?: keyof typeof SortOrder;
    email?: keyof typeof SortOrder;
    password?: keyof typeof SortOrder;
    whatsapp?: keyof typeof SortOrder;
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
    email?: keyof typeof SortOrder;
    password?: keyof typeof SortOrder;
    whatsapp?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    deletedAt?: InstanceType<typeof SortOrderInput>;
    role?: keyof typeof SortOrder;
    guestInfoId?: InstanceType<typeof SortOrderInput>;
    guestInfo?: InstanceType<typeof GuestOrderByWithRelationInput>;
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
    email?: InstanceType<typeof StringWithAggregatesFilter>;
    password?: InstanceType<typeof StringWithAggregatesFilter>;
    whatsapp?: InstanceType<typeof StringWithAggregatesFilter>;
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    deletedAt?: InstanceType<typeof DateTimeNullableWithAggregatesFilter>;
    role?: InstanceType<typeof EnumUserRoleWithAggregatesFilter>;
    guestInfoId?: InstanceType<typeof StringNullableWithAggregatesFilter>;
}
export declare class UserUncheckedCreateWithoutGuestInfoInput {
    id?: string;
    fullName: string;
    email: string;
    password: string;
    whatsapp: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    role: keyof typeof UserRole;
    guestInfoId?: string;
}
export declare class UserUncheckedCreateInput {
    id?: string;
    fullName: string;
    email: string;
    password: string;
    whatsapp: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string;
    role: keyof typeof UserRole;
    guestInfoId?: string;
    guestInfo?: InstanceType<typeof GuestUncheckedCreateNestedOneWithoutUserInput>;
}
export declare class UserUncheckedUpdateManyInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    fullName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    whatsapp?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    role?: InstanceType<typeof EnumUserRoleFieldUpdateOperationsInput>;
    guestInfoId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
}
export declare class UserUncheckedUpdateWithoutGuestInfoInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    fullName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    whatsapp?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    role?: InstanceType<typeof EnumUserRoleFieldUpdateOperationsInput>;
    guestInfoId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
}
export declare class UserUncheckedUpdateInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    fullName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    whatsapp?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    role?: InstanceType<typeof EnumUserRoleFieldUpdateOperationsInput>;
    guestInfoId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    guestInfo?: InstanceType<typeof GuestUncheckedUpdateOneWithoutUserNestedInput>;
}
export declare class UserUpdateManyMutationInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    fullName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    whatsapp?: InstanceType<typeof StringFieldUpdateOperationsInput>;
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
export declare class UserUpdateToOneWithWhereWithoutGuestInfoInput {
    where?: InstanceType<typeof UserWhereInput>;
    data: InstanceType<typeof UserUpdateWithoutGuestInfoInput>;
}
export declare class UserUpdateWithoutGuestInfoInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    fullName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    whatsapp?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    role?: InstanceType<typeof EnumUserRoleFieldUpdateOperationsInput>;
    guestInfoId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
}
export declare class UserUpdateInput {
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    fullName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    whatsapp?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deletedAt?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    role?: InstanceType<typeof EnumUserRoleFieldUpdateOperationsInput>;
    guestInfoId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    guestInfo?: InstanceType<typeof GuestUpdateOneWithoutUserNestedInput>;
}
export declare class UserUpsertWithoutGuestInfoInput {
    update: InstanceType<typeof UserUpdateWithoutGuestInfoInput>;
    create: InstanceType<typeof UserCreateWithoutGuestInfoInput>;
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
}
export declare class UserWhereInput {
    AND?: Array<UserWhereInput>;
    OR?: Array<UserWhereInput>;
    NOT?: Array<UserWhereInput>;
    id?: InstanceType<typeof StringFilter>;
    fullName?: InstanceType<typeof StringFilter>;
    email?: InstanceType<typeof StringFilter>;
    password?: InstanceType<typeof StringFilter>;
    whatsapp?: InstanceType<typeof StringFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    deletedAt?: InstanceType<typeof DateTimeNullableFilter>;
    role?: InstanceType<typeof EnumUserRoleFilter>;
    guestInfoId?: InstanceType<typeof StringNullableFilter>;
    guestInfo?: InstanceType<typeof GuestNullableRelationFilter>;
}
export declare class User {
    id: string;
    fullName: string;
    email: string;
    password: string;
    whatsapp: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    role: keyof typeof UserRole;
    guestInfoId: string | null;
    guestInfo?: InstanceType<typeof Guest> | null;
}
export declare class CreateManywhatsappQueueArgs {
    data: Array<whatsappQueueCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOnewhatsappQueueArgs {
    data: InstanceType<typeof whatsappQueueCreateInput>;
}
export declare class DeleteManywhatsappQueueArgs {
    where?: InstanceType<typeof whatsappQueueWhereInput>;
}
export declare class DeleteOnewhatsappQueueArgs {
    where: Prisma.AtLeast<whatsappQueueWhereUniqueInput, 'id'>;
}
export declare class FindFirstwhatsappQueueOrThrowArgs {
    where?: InstanceType<typeof whatsappQueueWhereInput>;
    orderBy?: Array<whatsappQueueOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<whatsappQueueWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof WhatsappQueueScalarFieldEnum>;
}
export declare class FindFirstwhatsappQueueArgs {
    where?: InstanceType<typeof whatsappQueueWhereInput>;
    orderBy?: Array<whatsappQueueOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<whatsappQueueWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof WhatsappQueueScalarFieldEnum>;
}
export declare class FindManywhatsappQueueArgs {
    where?: InstanceType<typeof whatsappQueueWhereInput>;
    orderBy?: Array<whatsappQueueOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<whatsappQueueWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof WhatsappQueueScalarFieldEnum>;
}
export declare class FindUniquewhatsappQueueOrThrowArgs {
    where: Prisma.AtLeast<whatsappQueueWhereUniqueInput, 'id'>;
}
export declare class FindUniquewhatsappQueueArgs {
    where: Prisma.AtLeast<whatsappQueueWhereUniqueInput, 'id'>;
}
export declare class UpdateManywhatsappQueueArgs {
    data: InstanceType<typeof whatsappQueueUpdateManyMutationInput>;
    where?: InstanceType<typeof whatsappQueueWhereInput>;
}
export declare class UpdateOnewhatsappQueueArgs {
    data: InstanceType<typeof whatsappQueueUpdateInput>;
    where: Prisma.AtLeast<whatsappQueueWhereUniqueInput, 'id'>;
}
export declare class UpsertOnewhatsappQueueArgs {
    where: Prisma.AtLeast<whatsappQueueWhereUniqueInput, 'id'>;
    create: InstanceType<typeof whatsappQueueCreateInput>;
    update: InstanceType<typeof whatsappQueueUpdateInput>;
}
export declare class whatsappQueueAggregateArgs {
    where?: InstanceType<typeof whatsappQueueWhereInput>;
    orderBy?: Array<whatsappQueueOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<whatsappQueueWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
}
export declare class whatsappQueueAvgOrderByAggregateInput {
    id?: keyof typeof SortOrder;
}
export declare class whatsappQueueCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    status?: keyof typeof SortOrder;
    guestId?: keyof typeof SortOrder;
}
export declare class whatsappQueueCreateManyGuestInputEnvelope {
    data: Array<whatsappQueueCreateManyGuestInput>;
    skipDuplicates?: boolean;
}
export declare class whatsappQueueCreateManyGuestInput {
    id?: number;
    createdAt?: Date | string;
    status?: keyof typeof QueueStatus;
}
export declare class whatsappQueueCreateManyInput {
    id?: number;
    createdAt?: Date | string;
    status?: keyof typeof QueueStatus;
    guestId: string;
}
export declare class whatsappQueueCreateNestedManyWithoutGuestInput {
    create?: Array<whatsappQueueCreateWithoutGuestInput>;
    connectOrCreate?: Array<whatsappQueueCreateOrConnectWithoutGuestInput>;
    createMany?: InstanceType<typeof whatsappQueueCreateManyGuestInputEnvelope>;
    connect?: Array<Prisma.AtLeast<whatsappQueueWhereUniqueInput, 'id'>>;
}
export declare class whatsappQueueCreateOrConnectWithoutGuestInput {
    where: Prisma.AtLeast<whatsappQueueWhereUniqueInput, 'id'>;
    create: InstanceType<typeof whatsappQueueCreateWithoutGuestInput>;
}
export declare class whatsappQueueCreateWithoutGuestInput {
    createdAt?: Date | string;
    status?: keyof typeof QueueStatus;
}
export declare class whatsappQueueCreateInput {
    createdAt?: Date | string;
    status?: keyof typeof QueueStatus;
    guest: InstanceType<typeof GuestCreateNestedOneWithoutWhatsappQueueInput>;
}
export declare class whatsappQueueGroupByArgs {
    where?: InstanceType<typeof whatsappQueueWhereInput>;
    orderBy?: Array<whatsappQueueOrderByWithAggregationInput>;
    by: Array<keyof typeof WhatsappQueueScalarFieldEnum>;
    having?: InstanceType<typeof whatsappQueueScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
}
export declare class whatsappQueueMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    status?: keyof typeof SortOrder;
    guestId?: keyof typeof SortOrder;
}
export declare class whatsappQueueMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    status?: keyof typeof SortOrder;
    guestId?: keyof typeof SortOrder;
}
export declare class whatsappQueueOrderByRelationAggregateInput {
    _count?: keyof typeof SortOrder;
}
export declare class whatsappQueueOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    status?: keyof typeof SortOrder;
    guestId?: keyof typeof SortOrder;
    _count?: InstanceType<typeof whatsappQueueCountOrderByAggregateInput>;
    _avg?: InstanceType<typeof whatsappQueueAvgOrderByAggregateInput>;
    _max?: InstanceType<typeof whatsappQueueMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof whatsappQueueMinOrderByAggregateInput>;
    _sum?: InstanceType<typeof whatsappQueueSumOrderByAggregateInput>;
}
export declare class whatsappQueueOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    status?: keyof typeof SortOrder;
    guestId?: keyof typeof SortOrder;
    guest?: InstanceType<typeof GuestOrderByWithRelationInput>;
}
export declare class whatsappQueueScalarWhereWithAggregatesInput {
    AND?: Array<whatsappQueueScalarWhereWithAggregatesInput>;
    OR?: Array<whatsappQueueScalarWhereWithAggregatesInput>;
    NOT?: Array<whatsappQueueScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    status?: InstanceType<typeof EnumQueueStatusWithAggregatesFilter>;
    guestId?: InstanceType<typeof StringWithAggregatesFilter>;
}
export declare class whatsappQueueScalarWhereInput {
    AND?: Array<whatsappQueueScalarWhereInput>;
    OR?: Array<whatsappQueueScalarWhereInput>;
    NOT?: Array<whatsappQueueScalarWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    status?: InstanceType<typeof EnumQueueStatusFilter>;
    guestId?: InstanceType<typeof StringFilter>;
}
export declare class whatsappQueueSumOrderByAggregateInput {
    id?: keyof typeof SortOrder;
}
export declare class whatsappQueueUncheckedCreateNestedManyWithoutGuestInput {
    create?: Array<whatsappQueueCreateWithoutGuestInput>;
    connectOrCreate?: Array<whatsappQueueCreateOrConnectWithoutGuestInput>;
    createMany?: InstanceType<typeof whatsappQueueCreateManyGuestInputEnvelope>;
    connect?: Array<Prisma.AtLeast<whatsappQueueWhereUniqueInput, 'id'>>;
}
export declare class whatsappQueueUncheckedCreateWithoutGuestInput {
    id?: number;
    createdAt?: Date | string;
    status?: keyof typeof QueueStatus;
}
export declare class whatsappQueueUncheckedCreateInput {
    id?: number;
    createdAt?: Date | string;
    status?: keyof typeof QueueStatus;
    guestId: string;
}
export declare class whatsappQueueUncheckedUpdateManyWithoutGuestNestedInput {
    create?: Array<whatsappQueueCreateWithoutGuestInput>;
    connectOrCreate?: Array<whatsappQueueCreateOrConnectWithoutGuestInput>;
    upsert?: Array<whatsappQueueUpsertWithWhereUniqueWithoutGuestInput>;
    createMany?: InstanceType<typeof whatsappQueueCreateManyGuestInputEnvelope>;
    set?: Array<Prisma.AtLeast<whatsappQueueWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<whatsappQueueWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<whatsappQueueWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<whatsappQueueWhereUniqueInput, 'id'>>;
    update?: Array<whatsappQueueUpdateWithWhereUniqueWithoutGuestInput>;
    updateMany?: Array<whatsappQueueUpdateManyWithWhereWithoutGuestInput>;
    deleteMany?: Array<whatsappQueueScalarWhereInput>;
}
export declare class whatsappQueueUncheckedUpdateManyWithoutGuestInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumQueueStatusFieldUpdateOperationsInput>;
}
export declare class whatsappQueueUncheckedUpdateManyInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumQueueStatusFieldUpdateOperationsInput>;
    guestId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class whatsappQueueUncheckedUpdateWithoutGuestInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumQueueStatusFieldUpdateOperationsInput>;
}
export declare class whatsappQueueUncheckedUpdateInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumQueueStatusFieldUpdateOperationsInput>;
    guestId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}
export declare class whatsappQueueUpdateManyMutationInput {
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumQueueStatusFieldUpdateOperationsInput>;
}
export declare class whatsappQueueUpdateManyWithWhereWithoutGuestInput {
    where: InstanceType<typeof whatsappQueueScalarWhereInput>;
    data: InstanceType<typeof whatsappQueueUpdateManyMutationInput>;
}
export declare class whatsappQueueUpdateManyWithoutGuestNestedInput {
    create?: Array<whatsappQueueCreateWithoutGuestInput>;
    connectOrCreate?: Array<whatsappQueueCreateOrConnectWithoutGuestInput>;
    upsert?: Array<whatsappQueueUpsertWithWhereUniqueWithoutGuestInput>;
    createMany?: InstanceType<typeof whatsappQueueCreateManyGuestInputEnvelope>;
    set?: Array<Prisma.AtLeast<whatsappQueueWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<whatsappQueueWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<whatsappQueueWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<whatsappQueueWhereUniqueInput, 'id'>>;
    update?: Array<whatsappQueueUpdateWithWhereUniqueWithoutGuestInput>;
    updateMany?: Array<whatsappQueueUpdateManyWithWhereWithoutGuestInput>;
    deleteMany?: Array<whatsappQueueScalarWhereInput>;
}
export declare class whatsappQueueUpdateWithWhereUniqueWithoutGuestInput {
    where: Prisma.AtLeast<whatsappQueueWhereUniqueInput, 'id'>;
    data: InstanceType<typeof whatsappQueueUpdateWithoutGuestInput>;
}
export declare class whatsappQueueUpdateWithoutGuestInput {
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumQueueStatusFieldUpdateOperationsInput>;
}
export declare class whatsappQueueUpdateInput {
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    status?: InstanceType<typeof EnumQueueStatusFieldUpdateOperationsInput>;
    guest?: InstanceType<typeof GuestUpdateOneRequiredWithoutWhatsappQueueNestedInput>;
}
export declare class whatsappQueueUpsertWithWhereUniqueWithoutGuestInput {
    where: Prisma.AtLeast<whatsappQueueWhereUniqueInput, 'id'>;
    update: InstanceType<typeof whatsappQueueUpdateWithoutGuestInput>;
    create: InstanceType<typeof whatsappQueueCreateWithoutGuestInput>;
}
export declare class whatsappQueueWhereUniqueInput {
    id?: number;
    AND?: Array<whatsappQueueWhereInput>;
    OR?: Array<whatsappQueueWhereInput>;
    NOT?: Array<whatsappQueueWhereInput>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    status?: InstanceType<typeof EnumQueueStatusFilter>;
    guestId?: InstanceType<typeof StringFilter>;
    guest?: InstanceType<typeof GuestRelationFilter>;
}
export declare class whatsappQueueWhereInput {
    AND?: Array<whatsappQueueWhereInput>;
    OR?: Array<whatsappQueueWhereInput>;
    NOT?: Array<whatsappQueueWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    createdAt?: InstanceType<typeof DateTimeFilter>;
    status?: InstanceType<typeof EnumQueueStatusFilter>;
    guestId?: InstanceType<typeof StringFilter>;
    guest?: InstanceType<typeof GuestRelationFilter>;
}
export declare class whatsappQueue {
    id: number;
    createdAt: Date;
    status: keyof typeof QueueStatus;
    guestId: string;
    guest?: InstanceType<typeof Guest>;
}

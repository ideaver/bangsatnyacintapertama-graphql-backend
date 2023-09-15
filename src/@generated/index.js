"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var emailQueueScalarWhereWithAggregatesInput_1, emailQueueScalarWhereInput_1, emailQueueWhereInput_1, GuestScalarWhereWithAggregatesInput_1, GuestWhereInput_1, NestedDateTimeFilter_1, NestedDateTimeNullableFilter_1, NestedDateTimeNullableWithAggregatesFilter_1, NestedDateTimeWithAggregatesFilter_1, NestedEnumConfirmationStatusFilter_1, NestedEnumConfirmationStatusWithAggregatesFilter_1, NestedEnumQueueStatusFilter_1, NestedEnumQueueStatusWithAggregatesFilter_1, NestedEnumUserRoleFilter_1, NestedEnumUserRoleWithAggregatesFilter_1, NestedFloatFilter_1, NestedIntFilter_1, NestedIntNullableFilter_1, NestedIntWithAggregatesFilter_1, NestedStringFilter_1, NestedStringNullableFilter_1, NestedStringNullableWithAggregatesFilter_1, NestedStringWithAggregatesFilter_1, UserScalarWhereWithAggregatesInput_1, UserWhereInput_1, whatsappQueueScalarWhereWithAggregatesInput_1, whatsappQueueScalarWhereInput_1, whatsappQueueWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.emailQueueWhereUniqueInput = exports.emailQueueUpsertWithWhereUniqueWithoutGuestInput = exports.emailQueueUpdateInput = exports.emailQueueUpdateWithoutGuestInput = exports.emailQueueUpdateWithWhereUniqueWithoutGuestInput = exports.emailQueueUpdateManyWithoutGuestNestedInput = exports.emailQueueUpdateManyWithWhereWithoutGuestInput = exports.emailQueueUpdateManyMutationInput = exports.emailQueueUncheckedUpdateInput = exports.emailQueueUncheckedUpdateWithoutGuestInput = exports.emailQueueUncheckedUpdateManyInput = exports.emailQueueUncheckedUpdateManyWithoutGuestInput = exports.emailQueueUncheckedUpdateManyWithoutGuestNestedInput = exports.emailQueueUncheckedCreateInput = exports.emailQueueUncheckedCreateWithoutGuestInput = exports.emailQueueUncheckedCreateNestedManyWithoutGuestInput = exports.emailQueueSumOrderByAggregateInput = exports.emailQueueScalarWhereInput = exports.emailQueueScalarWhereWithAggregatesInput = exports.emailQueueOrderByWithRelationInput = exports.emailQueueOrderByWithAggregationInput = exports.emailQueueOrderByRelationAggregateInput = exports.emailQueueMinOrderByAggregateInput = exports.emailQueueMaxOrderByAggregateInput = exports.emailQueueGroupByArgs = exports.emailQueueCreateInput = exports.emailQueueCreateWithoutGuestInput = exports.emailQueueCreateOrConnectWithoutGuestInput = exports.emailQueueCreateNestedManyWithoutGuestInput = exports.emailQueueCreateManyInput = exports.emailQueueCreateManyGuestInput = exports.emailQueueCreateManyGuestInputEnvelope = exports.emailQueueCountOrderByAggregateInput = exports.emailQueueAvgOrderByAggregateInput = exports.emailQueueAggregateArgs = exports.DeleteOneemailQueueArgs = exports.DeleteManyemailQueueArgs = exports.CreateOneemailQueueArgs = exports.CreateManyemailQueueArgs = exports.GuestScalarFieldEnum = exports.ConfirmationStatus = exports.EmailQueueScalarFieldEnum = exports.NullsOrder = exports.QueryMode = exports.QueueStatus = exports.SortOrder = exports.TransactionIsolationLevel = exports.UserRole = exports.WhatsappQueueScalarFieldEnum = exports.UserScalarFieldEnum = void 0;
exports.GuestUncheckedCreateNestedOneWithoutUserInput = exports.GuestScalarWhereWithAggregatesInput = exports.GuestRelationFilter = exports.GuestOrderByWithRelationInput = exports.GuestOrderByWithAggregationInput = exports.GuestNullableRelationFilter = exports.GuestMinOrderByAggregateInput = exports.GuestMinAggregate = exports.GuestMinAggregateInput = exports.GuestMaxOrderByAggregateInput = exports.GuestMaxAggregate = exports.GuestMaxAggregateInput = exports.GuestGroupBy = exports.GuestGroupByArgs = exports.GuestCreateInput = exports.GuestCreateWithoutWhatsappQueueInput = exports.GuestCreateWithoutUserInput = exports.GuestCreateWithoutEmailQueueInput = exports.GuestCreateOrConnectWithoutWhatsappQueueInput = exports.GuestCreateOrConnectWithoutUserInput = exports.GuestCreateOrConnectWithoutEmailQueueInput = exports.GuestCreateNestedOneWithoutWhatsappQueueInput = exports.GuestCreateNestedOneWithoutUserInput = exports.GuestCreateNestedOneWithoutEmailQueueInput = exports.GuestCreateManyInput = exports.GuestCount = exports.GuestCountOrderByAggregateInput = exports.GuestCountAggregate = exports.GuestCountAggregateInput = exports.GuestAggregateArgs = exports.FindUniqueGuestArgs = exports.FindUniqueGuestOrThrowArgs = exports.FindManyGuestArgs = exports.FindFirstGuestArgs = exports.FindFirstGuestOrThrowArgs = exports.DeleteOneGuestArgs = exports.DeleteManyGuestArgs = exports.CreateOneGuestArgs = exports.CreateManyGuestArgs = exports.AggregateGuest = exports.UpsertOneemailQueueArgs = exports.UpdateOneemailQueueArgs = exports.UpdateManyemailQueueArgs = exports.FindUniqueemailQueueArgs = exports.FindUniqueemailQueueOrThrowArgs = exports.FindManyemailQueueArgs = exports.FindFirstemailQueueArgs = exports.FindFirstemailQueueOrThrowArgs = exports.emailQueue = exports.emailQueueWhereInput = void 0;
exports.EnumQueueStatusFilter = exports.EnumQueueStatusFieldUpdateOperationsInput = exports.EnumConfirmationStatusWithAggregatesFilter = exports.EnumConfirmationStatusFilter = exports.EnumConfirmationStatusFieldUpdateOperationsInput = exports.EmailQueueSumAggregate = exports.EmailQueueMinAggregate = exports.EmailQueueMaxAggregate = exports.EmailQueueListRelationFilter = exports.EmailQueueGroupBy = exports.EmailQueueCountAggregate = exports.EmailQueueAvgAggregate = exports.DateTimeWithAggregatesFilter = exports.DateTimeNullableWithAggregatesFilter = exports.DateTimeNullableFilter = exports.DateTimeFilter = exports.DateTimeFieldUpdateOperationsInput = exports.AggregateWhatsappQueue = exports.AggregateEmailQueue = exports.AffectedRows = exports.UpsertOneGuestArgs = exports.UpdateOneGuestArgs = exports.UpdateManyGuestArgs = exports.Guest = exports.GuestWhereInput = exports.GuestWhereUniqueInput = exports.GuestUpsertWithoutWhatsappQueueInput = exports.GuestUpsertWithoutUserInput = exports.GuestUpsertWithoutEmailQueueInput = exports.GuestUpdateInput = exports.GuestUpdateWithoutWhatsappQueueInput = exports.GuestUpdateWithoutUserInput = exports.GuestUpdateWithoutEmailQueueInput = exports.GuestUpdateToOneWithWhereWithoutWhatsappQueueInput = exports.GuestUpdateToOneWithWhereWithoutUserInput = exports.GuestUpdateToOneWithWhereWithoutEmailQueueInput = exports.GuestUpdateOneWithoutUserNestedInput = exports.GuestUpdateOneRequiredWithoutWhatsappQueueNestedInput = exports.GuestUpdateOneRequiredWithoutEmailQueueNestedInput = exports.GuestUpdateManyMutationInput = exports.GuestUncheckedUpdateInput = exports.GuestUncheckedUpdateWithoutWhatsappQueueInput = exports.GuestUncheckedUpdateWithoutUserInput = exports.GuestUncheckedUpdateWithoutEmailQueueInput = exports.GuestUncheckedUpdateOneWithoutUserNestedInput = exports.GuestUncheckedUpdateManyInput = exports.GuestUncheckedCreateInput = exports.GuestUncheckedCreateWithoutWhatsappQueueInput = exports.GuestUncheckedCreateWithoutUserInput = exports.GuestUncheckedCreateWithoutEmailQueueInput = void 0;
exports.FindUniqueUserArgs = exports.FindUniqueUserOrThrowArgs = exports.FindManyUserArgs = exports.FindFirstUserArgs = exports.FindFirstUserOrThrowArgs = exports.DeleteOneUserArgs = exports.DeleteManyUserArgs = exports.CreateOneUserArgs = exports.CreateManyUserArgs = exports.AggregateUser = exports.WhatsappQueueSumAggregate = exports.WhatsappQueueMinAggregate = exports.WhatsappQueueMaxAggregate = exports.WhatsappQueueListRelationFilter = exports.WhatsappQueueGroupBy = exports.WhatsappQueueCountAggregate = exports.WhatsappQueueAvgAggregate = exports.StringWithAggregatesFilter = exports.StringNullableWithAggregatesFilter = exports.StringNullableFilter = exports.StringFilter = exports.StringFieldUpdateOperationsInput = exports.SortOrderInput = exports.NullableStringFieldUpdateOperationsInput = exports.NullableDateTimeFieldUpdateOperationsInput = exports.NestedStringWithAggregatesFilter = exports.NestedStringNullableWithAggregatesFilter = exports.NestedStringNullableFilter = exports.NestedStringFilter = exports.NestedIntWithAggregatesFilter = exports.NestedIntNullableFilter = exports.NestedIntFilter = exports.NestedFloatFilter = exports.NestedEnumUserRoleWithAggregatesFilter = exports.NestedEnumUserRoleFilter = exports.NestedEnumQueueStatusWithAggregatesFilter = exports.NestedEnumQueueStatusFilter = exports.NestedEnumConfirmationStatusWithAggregatesFilter = exports.NestedEnumConfirmationStatusFilter = exports.NestedDateTimeWithAggregatesFilter = exports.NestedDateTimeNullableWithAggregatesFilter = exports.NestedDateTimeNullableFilter = exports.NestedDateTimeFilter = exports.IntWithAggregatesFilter = exports.IntFilter = exports.IntFieldUpdateOperationsInput = exports.EnumUserRoleWithAggregatesFilter = exports.EnumUserRoleFilter = exports.EnumUserRoleFieldUpdateOperationsInput = exports.EnumQueueStatusWithAggregatesFilter = void 0;
exports.UpsertOnewhatsappQueueArgs = exports.UpdateOnewhatsappQueueArgs = exports.UpdateManywhatsappQueueArgs = exports.FindUniquewhatsappQueueArgs = exports.FindUniquewhatsappQueueOrThrowArgs = exports.FindManywhatsappQueueArgs = exports.FindFirstwhatsappQueueArgs = exports.FindFirstwhatsappQueueOrThrowArgs = exports.DeleteOnewhatsappQueueArgs = exports.DeleteManywhatsappQueueArgs = exports.CreateOnewhatsappQueueArgs = exports.CreateManywhatsappQueueArgs = exports.User = exports.UserWhereInput = exports.UserWhereUniqueInput = exports.UserUpsertWithoutGuestInfoInput = exports.UserUpdateInput = exports.UserUpdateWithoutGuestInfoInput = exports.UserUpdateToOneWithWhereWithoutGuestInfoInput = exports.UserUpdateOneRequiredWithoutGuestInfoNestedInput = exports.UserUpdateManyMutationInput = exports.UserUncheckedUpdateInput = exports.UserUncheckedUpdateWithoutGuestInfoInput = exports.UserUncheckedUpdateManyInput = exports.UserUncheckedCreateInput = exports.UserUncheckedCreateWithoutGuestInfoInput = exports.UserScalarWhereWithAggregatesInput = exports.UserRelationFilter = exports.UserOrderByWithRelationInput = exports.UserOrderByWithAggregationInput = exports.UserMinOrderByAggregateInput = exports.UserMinAggregate = exports.UserMinAggregateInput = exports.UserMaxOrderByAggregateInput = exports.UserMaxAggregate = exports.UserMaxAggregateInput = exports.UserGroupBy = exports.UserGroupByArgs = exports.UserCreateInput = exports.UserCreateWithoutGuestInfoInput = exports.UserCreateOrConnectWithoutGuestInfoInput = exports.UserCreateNestedOneWithoutGuestInfoInput = exports.UserCreateManyInput = exports.UserCountOrderByAggregateInput = exports.UserCountAggregate = exports.UserCountAggregateInput = exports.UserAggregateArgs = exports.UpsertOneUserArgs = exports.UpdateOneUserArgs = exports.UpdateManyUserArgs = void 0;
exports.whatsappQueue = exports.whatsappQueueWhereInput = exports.whatsappQueueWhereUniqueInput = exports.whatsappQueueUpsertWithWhereUniqueWithoutGuestInput = exports.whatsappQueueUpdateInput = exports.whatsappQueueUpdateWithoutGuestInput = exports.whatsappQueueUpdateWithWhereUniqueWithoutGuestInput = exports.whatsappQueueUpdateManyWithoutGuestNestedInput = exports.whatsappQueueUpdateManyWithWhereWithoutGuestInput = exports.whatsappQueueUpdateManyMutationInput = exports.whatsappQueueUncheckedUpdateInput = exports.whatsappQueueUncheckedUpdateWithoutGuestInput = exports.whatsappQueueUncheckedUpdateManyInput = exports.whatsappQueueUncheckedUpdateManyWithoutGuestInput = exports.whatsappQueueUncheckedUpdateManyWithoutGuestNestedInput = exports.whatsappQueueUncheckedCreateInput = exports.whatsappQueueUncheckedCreateWithoutGuestInput = exports.whatsappQueueUncheckedCreateNestedManyWithoutGuestInput = exports.whatsappQueueSumOrderByAggregateInput = exports.whatsappQueueScalarWhereInput = exports.whatsappQueueScalarWhereWithAggregatesInput = exports.whatsappQueueOrderByWithRelationInput = exports.whatsappQueueOrderByWithAggregationInput = exports.whatsappQueueOrderByRelationAggregateInput = exports.whatsappQueueMinOrderByAggregateInput = exports.whatsappQueueMaxOrderByAggregateInput = exports.whatsappQueueGroupByArgs = exports.whatsappQueueCreateInput = exports.whatsappQueueCreateWithoutGuestInput = exports.whatsappQueueCreateOrConnectWithoutGuestInput = exports.whatsappQueueCreateNestedManyWithoutGuestInput = exports.whatsappQueueCreateManyInput = exports.whatsappQueueCreateManyGuestInput = exports.whatsappQueueCreateManyGuestInputEnvelope = exports.whatsappQueueCountOrderByAggregateInput = exports.whatsappQueueAvgOrderByAggregateInput = exports.whatsappQueueAggregateArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const class_transformer_1 = require("class-transformer");
const graphql_3 = require("@nestjs/graphql");
const graphql_4 = require("@nestjs/graphql");
const graphql_5 = require("@nestjs/graphql");
const graphql_6 = require("@nestjs/graphql");
const graphql_7 = require("@nestjs/graphql");
var UserScalarFieldEnum;
(function (UserScalarFieldEnum) {
    UserScalarFieldEnum["id"] = "id";
    UserScalarFieldEnum["fullName"] = "fullName";
    UserScalarFieldEnum["email"] = "email";
    UserScalarFieldEnum["password"] = "password";
    UserScalarFieldEnum["whatsapp"] = "whatsapp";
    UserScalarFieldEnum["createdAt"] = "createdAt";
    UserScalarFieldEnum["updatedAt"] = "updatedAt";
    UserScalarFieldEnum["deletedAt"] = "deletedAt";
    UserScalarFieldEnum["role"] = "role";
    UserScalarFieldEnum["guestInfoId"] = "guestInfoId";
})(UserScalarFieldEnum = exports.UserScalarFieldEnum || (exports.UserScalarFieldEnum = {}));
var WhatsappQueueScalarFieldEnum;
(function (WhatsappQueueScalarFieldEnum) {
    WhatsappQueueScalarFieldEnum["id"] = "id";
    WhatsappQueueScalarFieldEnum["createdAt"] = "createdAt";
    WhatsappQueueScalarFieldEnum["status"] = "status";
    WhatsappQueueScalarFieldEnum["guestId"] = "guestId";
})(WhatsappQueueScalarFieldEnum = exports.WhatsappQueueScalarFieldEnum || (exports.WhatsappQueueScalarFieldEnum = {}));
var UserRole;
(function (UserRole) {
    UserRole["ADMIN"] = "ADMIN";
    UserRole["SUPERUSER"] = "SUPERUSER";
    UserRole["GUEST"] = "GUEST";
})(UserRole = exports.UserRole || (exports.UserRole = {}));
var TransactionIsolationLevel;
(function (TransactionIsolationLevel) {
    TransactionIsolationLevel["ReadUncommitted"] = "ReadUncommitted";
    TransactionIsolationLevel["ReadCommitted"] = "ReadCommitted";
    TransactionIsolationLevel["RepeatableRead"] = "RepeatableRead";
    TransactionIsolationLevel["Serializable"] = "Serializable";
})(TransactionIsolationLevel = exports.TransactionIsolationLevel || (exports.TransactionIsolationLevel = {}));
var SortOrder;
(function (SortOrder) {
    SortOrder["asc"] = "asc";
    SortOrder["desc"] = "desc";
})(SortOrder = exports.SortOrder || (exports.SortOrder = {}));
var QueueStatus;
(function (QueueStatus) {
    QueueStatus["WAITING"] = "WAITING";
    QueueStatus["SENDING"] = "SENDING";
    QueueStatus["SENT"] = "SENT";
    QueueStatus["FAILED"] = "FAILED";
})(QueueStatus = exports.QueueStatus || (exports.QueueStatus = {}));
var QueryMode;
(function (QueryMode) {
    QueryMode["default"] = "default";
    QueryMode["insensitive"] = "insensitive";
})(QueryMode = exports.QueryMode || (exports.QueryMode = {}));
var NullsOrder;
(function (NullsOrder) {
    NullsOrder["first"] = "first";
    NullsOrder["last"] = "last";
})(NullsOrder = exports.NullsOrder || (exports.NullsOrder = {}));
var EmailQueueScalarFieldEnum;
(function (EmailQueueScalarFieldEnum) {
    EmailQueueScalarFieldEnum["id"] = "id";
    EmailQueueScalarFieldEnum["createdAt"] = "createdAt";
    EmailQueueScalarFieldEnum["status"] = "status";
    EmailQueueScalarFieldEnum["guestId"] = "guestId";
})(EmailQueueScalarFieldEnum = exports.EmailQueueScalarFieldEnum || (exports.EmailQueueScalarFieldEnum = {}));
var ConfirmationStatus;
(function (ConfirmationStatus) {
    ConfirmationStatus["UNCONFIRMED"] = "UNCONFIRMED";
    ConfirmationStatus["CONFIRMED"] = "CONFIRMED";
    ConfirmationStatus["REJECTED"] = "REJECTED";
})(ConfirmationStatus = exports.ConfirmationStatus || (exports.ConfirmationStatus = {}));
var GuestScalarFieldEnum;
(function (GuestScalarFieldEnum) {
    GuestScalarFieldEnum["userId"] = "userId";
    GuestScalarFieldEnum["category1"] = "category1";
    GuestScalarFieldEnum["category2"] = "category2";
    GuestScalarFieldEnum["personInCharge"] = "personInCharge";
    GuestScalarFieldEnum["class"] = "class";
    GuestScalarFieldEnum["seat"] = "seat";
    GuestScalarFieldEnum["rejectionReason"] = "rejectionReason";
    GuestScalarFieldEnum["description"] = "description";
    GuestScalarFieldEnum["checkInAt"] = "checkInAt";
    GuestScalarFieldEnum["confirmationStatus"] = "confirmationStatus";
})(GuestScalarFieldEnum = exports.GuestScalarFieldEnum || (exports.GuestScalarFieldEnum = {}));
(0, graphql_6.registerEnumType)(GuestScalarFieldEnum, { name: 'GuestScalarFieldEnum', description: undefined });
(0, graphql_6.registerEnumType)(ConfirmationStatus, { name: 'ConfirmationStatus', description: undefined });
(0, graphql_6.registerEnumType)(EmailQueueScalarFieldEnum, { name: 'EmailQueueScalarFieldEnum', description: undefined });
(0, graphql_6.registerEnumType)(NullsOrder, { name: 'NullsOrder', description: undefined });
(0, graphql_6.registerEnumType)(QueryMode, { name: 'QueryMode', description: undefined });
(0, graphql_6.registerEnumType)(QueueStatus, { name: 'QueueStatus', description: undefined });
(0, graphql_6.registerEnumType)(SortOrder, { name: 'SortOrder', description: undefined });
(0, graphql_6.registerEnumType)(TransactionIsolationLevel, { name: 'TransactionIsolationLevel', description: undefined });
(0, graphql_6.registerEnumType)(UserRole, { name: 'UserRole', description: undefined });
(0, graphql_6.registerEnumType)(WhatsappQueueScalarFieldEnum, { name: 'WhatsappQueueScalarFieldEnum', description: undefined });
(0, graphql_6.registerEnumType)(UserScalarFieldEnum, { name: 'UserScalarFieldEnum', description: undefined });
let CreateManyemailQueueArgs = class CreateManyemailQueueArgs {
};
__decorate([
    (0, graphql_1.Field)(() => [emailQueueCreateManyInput], { nullable: false }),
    (0, class_transformer_1.Type)(() => emailQueueCreateManyInput)
], CreateManyemailQueueArgs.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], CreateManyemailQueueArgs.prototype, "skipDuplicates", void 0);
CreateManyemailQueueArgs = __decorate([
    (0, graphql_2.ArgsType)()
], CreateManyemailQueueArgs);
exports.CreateManyemailQueueArgs = CreateManyemailQueueArgs;
let CreateOneemailQueueArgs = class CreateOneemailQueueArgs {
};
__decorate([
    (0, graphql_1.Field)(() => emailQueueCreateInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => emailQueueCreateInput)
], CreateOneemailQueueArgs.prototype, "data", void 0);
CreateOneemailQueueArgs = __decorate([
    (0, graphql_2.ArgsType)()
], CreateOneemailQueueArgs);
exports.CreateOneemailQueueArgs = CreateOneemailQueueArgs;
let DeleteManyemailQueueArgs = class DeleteManyemailQueueArgs {
};
__decorate([
    (0, graphql_1.Field)(() => emailQueueWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => emailQueueWhereInput)
], DeleteManyemailQueueArgs.prototype, "where", void 0);
DeleteManyemailQueueArgs = __decorate([
    (0, graphql_2.ArgsType)()
], DeleteManyemailQueueArgs);
exports.DeleteManyemailQueueArgs = DeleteManyemailQueueArgs;
let DeleteOneemailQueueArgs = class DeleteOneemailQueueArgs {
};
__decorate([
    (0, graphql_1.Field)(() => emailQueueWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => emailQueueWhereUniqueInput)
], DeleteOneemailQueueArgs.prototype, "where", void 0);
DeleteOneemailQueueArgs = __decorate([
    (0, graphql_2.ArgsType)()
], DeleteOneemailQueueArgs);
exports.DeleteOneemailQueueArgs = DeleteOneemailQueueArgs;
let emailQueueAggregateArgs = class emailQueueAggregateArgs {
};
__decorate([
    (0, graphql_1.Field)(() => emailQueueWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => emailQueueWhereInput)
], emailQueueAggregateArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [emailQueueOrderByWithRelationInput], { nullable: true })
], emailQueueAggregateArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => emailQueueWhereUniqueInput, { nullable: true })
], emailQueueAggregateArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], emailQueueAggregateArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], emailQueueAggregateArgs.prototype, "skip", void 0);
emailQueueAggregateArgs = __decorate([
    (0, graphql_2.ArgsType)()
], emailQueueAggregateArgs);
exports.emailQueueAggregateArgs = emailQueueAggregateArgs;
let emailQueueAvgOrderByAggregateInput = class emailQueueAvgOrderByAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], emailQueueAvgOrderByAggregateInput.prototype, "id", void 0);
emailQueueAvgOrderByAggregateInput = __decorate([
    (0, graphql_4.InputType)()
], emailQueueAvgOrderByAggregateInput);
exports.emailQueueAvgOrderByAggregateInput = emailQueueAvgOrderByAggregateInput;
let emailQueueCountOrderByAggregateInput = class emailQueueCountOrderByAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], emailQueueCountOrderByAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], emailQueueCountOrderByAggregateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], emailQueueCountOrderByAggregateInput.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], emailQueueCountOrderByAggregateInput.prototype, "guestId", void 0);
emailQueueCountOrderByAggregateInput = __decorate([
    (0, graphql_4.InputType)()
], emailQueueCountOrderByAggregateInput);
exports.emailQueueCountOrderByAggregateInput = emailQueueCountOrderByAggregateInput;
let emailQueueCreateManyGuestInputEnvelope = class emailQueueCreateManyGuestInputEnvelope {
};
__decorate([
    (0, graphql_1.Field)(() => [emailQueueCreateManyGuestInput], { nullable: false }),
    (0, class_transformer_1.Type)(() => emailQueueCreateManyGuestInput)
], emailQueueCreateManyGuestInputEnvelope.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], emailQueueCreateManyGuestInputEnvelope.prototype, "skipDuplicates", void 0);
emailQueueCreateManyGuestInputEnvelope = __decorate([
    (0, graphql_4.InputType)()
], emailQueueCreateManyGuestInputEnvelope);
exports.emailQueueCreateManyGuestInputEnvelope = emailQueueCreateManyGuestInputEnvelope;
let emailQueueCreateManyGuestInput = class emailQueueCreateManyGuestInput {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], emailQueueCreateManyGuestInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], emailQueueCreateManyGuestInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => QueueStatus, { nullable: true })
], emailQueueCreateManyGuestInput.prototype, "status", void 0);
emailQueueCreateManyGuestInput = __decorate([
    (0, graphql_4.InputType)()
], emailQueueCreateManyGuestInput);
exports.emailQueueCreateManyGuestInput = emailQueueCreateManyGuestInput;
let emailQueueCreateManyInput = class emailQueueCreateManyInput {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], emailQueueCreateManyInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], emailQueueCreateManyInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => QueueStatus, { nullable: true })
], emailQueueCreateManyInput.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], emailQueueCreateManyInput.prototype, "guestId", void 0);
emailQueueCreateManyInput = __decorate([
    (0, graphql_4.InputType)()
], emailQueueCreateManyInput);
exports.emailQueueCreateManyInput = emailQueueCreateManyInput;
let emailQueueCreateNestedManyWithoutGuestInput = class emailQueueCreateNestedManyWithoutGuestInput {
};
__decorate([
    (0, graphql_1.Field)(() => [emailQueueCreateWithoutGuestInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => emailQueueCreateWithoutGuestInput)
], emailQueueCreateNestedManyWithoutGuestInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [emailQueueCreateOrConnectWithoutGuestInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => emailQueueCreateOrConnectWithoutGuestInput)
], emailQueueCreateNestedManyWithoutGuestInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => emailQueueCreateManyGuestInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => emailQueueCreateManyGuestInputEnvelope)
], emailQueueCreateNestedManyWithoutGuestInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [emailQueueWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => emailQueueWhereUniqueInput)
], emailQueueCreateNestedManyWithoutGuestInput.prototype, "connect", void 0);
emailQueueCreateNestedManyWithoutGuestInput = __decorate([
    (0, graphql_4.InputType)()
], emailQueueCreateNestedManyWithoutGuestInput);
exports.emailQueueCreateNestedManyWithoutGuestInput = emailQueueCreateNestedManyWithoutGuestInput;
let emailQueueCreateOrConnectWithoutGuestInput = class emailQueueCreateOrConnectWithoutGuestInput {
};
__decorate([
    (0, graphql_1.Field)(() => emailQueueWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => emailQueueWhereUniqueInput)
], emailQueueCreateOrConnectWithoutGuestInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => emailQueueCreateWithoutGuestInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => emailQueueCreateWithoutGuestInput)
], emailQueueCreateOrConnectWithoutGuestInput.prototype, "create", void 0);
emailQueueCreateOrConnectWithoutGuestInput = __decorate([
    (0, graphql_4.InputType)()
], emailQueueCreateOrConnectWithoutGuestInput);
exports.emailQueueCreateOrConnectWithoutGuestInput = emailQueueCreateOrConnectWithoutGuestInput;
let emailQueueCreateWithoutGuestInput = class emailQueueCreateWithoutGuestInput {
};
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], emailQueueCreateWithoutGuestInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => QueueStatus, { nullable: true })
], emailQueueCreateWithoutGuestInput.prototype, "status", void 0);
emailQueueCreateWithoutGuestInput = __decorate([
    (0, graphql_4.InputType)()
], emailQueueCreateWithoutGuestInput);
exports.emailQueueCreateWithoutGuestInput = emailQueueCreateWithoutGuestInput;
let emailQueueCreateInput = class emailQueueCreateInput {
};
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], emailQueueCreateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => QueueStatus, { nullable: true })
], emailQueueCreateInput.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestCreateNestedOneWithoutEmailQueueInput, { nullable: false })
], emailQueueCreateInput.prototype, "guest", void 0);
emailQueueCreateInput = __decorate([
    (0, graphql_4.InputType)()
], emailQueueCreateInput);
exports.emailQueueCreateInput = emailQueueCreateInput;
let emailQueueGroupByArgs = class emailQueueGroupByArgs {
};
__decorate([
    (0, graphql_1.Field)(() => emailQueueWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => emailQueueWhereInput)
], emailQueueGroupByArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [emailQueueOrderByWithAggregationInput], { nullable: true })
], emailQueueGroupByArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => [EmailQueueScalarFieldEnum], { nullable: false })
], emailQueueGroupByArgs.prototype, "by", void 0);
__decorate([
    (0, graphql_1.Field)(() => emailQueueScalarWhereWithAggregatesInput, { nullable: true })
], emailQueueGroupByArgs.prototype, "having", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], emailQueueGroupByArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], emailQueueGroupByArgs.prototype, "skip", void 0);
emailQueueGroupByArgs = __decorate([
    (0, graphql_2.ArgsType)()
], emailQueueGroupByArgs);
exports.emailQueueGroupByArgs = emailQueueGroupByArgs;
let emailQueueMaxOrderByAggregateInput = class emailQueueMaxOrderByAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], emailQueueMaxOrderByAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], emailQueueMaxOrderByAggregateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], emailQueueMaxOrderByAggregateInput.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], emailQueueMaxOrderByAggregateInput.prototype, "guestId", void 0);
emailQueueMaxOrderByAggregateInput = __decorate([
    (0, graphql_4.InputType)()
], emailQueueMaxOrderByAggregateInput);
exports.emailQueueMaxOrderByAggregateInput = emailQueueMaxOrderByAggregateInput;
let emailQueueMinOrderByAggregateInput = class emailQueueMinOrderByAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], emailQueueMinOrderByAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], emailQueueMinOrderByAggregateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], emailQueueMinOrderByAggregateInput.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], emailQueueMinOrderByAggregateInput.prototype, "guestId", void 0);
emailQueueMinOrderByAggregateInput = __decorate([
    (0, graphql_4.InputType)()
], emailQueueMinOrderByAggregateInput);
exports.emailQueueMinOrderByAggregateInput = emailQueueMinOrderByAggregateInput;
let emailQueueOrderByRelationAggregateInput = class emailQueueOrderByRelationAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], emailQueueOrderByRelationAggregateInput.prototype, "_count", void 0);
emailQueueOrderByRelationAggregateInput = __decorate([
    (0, graphql_4.InputType)()
], emailQueueOrderByRelationAggregateInput);
exports.emailQueueOrderByRelationAggregateInput = emailQueueOrderByRelationAggregateInput;
let emailQueueOrderByWithAggregationInput = class emailQueueOrderByWithAggregationInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], emailQueueOrderByWithAggregationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], emailQueueOrderByWithAggregationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], emailQueueOrderByWithAggregationInput.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], emailQueueOrderByWithAggregationInput.prototype, "guestId", void 0);
__decorate([
    (0, graphql_1.Field)(() => emailQueueCountOrderByAggregateInput, { nullable: true })
], emailQueueOrderByWithAggregationInput.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => emailQueueAvgOrderByAggregateInput, { nullable: true })
], emailQueueOrderByWithAggregationInput.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => emailQueueMaxOrderByAggregateInput, { nullable: true })
], emailQueueOrderByWithAggregationInput.prototype, "_max", void 0);
__decorate([
    (0, graphql_1.Field)(() => emailQueueMinOrderByAggregateInput, { nullable: true })
], emailQueueOrderByWithAggregationInput.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => emailQueueSumOrderByAggregateInput, { nullable: true })
], emailQueueOrderByWithAggregationInput.prototype, "_sum", void 0);
emailQueueOrderByWithAggregationInput = __decorate([
    (0, graphql_4.InputType)()
], emailQueueOrderByWithAggregationInput);
exports.emailQueueOrderByWithAggregationInput = emailQueueOrderByWithAggregationInput;
let emailQueueOrderByWithRelationInput = class emailQueueOrderByWithRelationInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], emailQueueOrderByWithRelationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], emailQueueOrderByWithRelationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], emailQueueOrderByWithRelationInput.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], emailQueueOrderByWithRelationInput.prototype, "guestId", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestOrderByWithRelationInput, { nullable: true })
], emailQueueOrderByWithRelationInput.prototype, "guest", void 0);
emailQueueOrderByWithRelationInput = __decorate([
    (0, graphql_4.InputType)()
], emailQueueOrderByWithRelationInput);
exports.emailQueueOrderByWithRelationInput = emailQueueOrderByWithRelationInput;
let emailQueueScalarWhereWithAggregatesInput = emailQueueScalarWhereWithAggregatesInput_1 = class emailQueueScalarWhereWithAggregatesInput {
};
__decorate([
    (0, graphql_1.Field)(() => [emailQueueScalarWhereWithAggregatesInput_1], { nullable: true })
], emailQueueScalarWhereWithAggregatesInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [emailQueueScalarWhereWithAggregatesInput_1], { nullable: true })
], emailQueueScalarWhereWithAggregatesInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [emailQueueScalarWhereWithAggregatesInput_1], { nullable: true })
], emailQueueScalarWhereWithAggregatesInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => IntWithAggregatesFilter, { nullable: true })
], emailQueueScalarWhereWithAggregatesInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeWithAggregatesFilter, { nullable: true })
], emailQueueScalarWhereWithAggregatesInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => EnumQueueStatusWithAggregatesFilter, { nullable: true })
], emailQueueScalarWhereWithAggregatesInput.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringWithAggregatesFilter, { nullable: true })
], emailQueueScalarWhereWithAggregatesInput.prototype, "guestId", void 0);
emailQueueScalarWhereWithAggregatesInput = emailQueueScalarWhereWithAggregatesInput_1 = __decorate([
    (0, graphql_4.InputType)()
], emailQueueScalarWhereWithAggregatesInput);
exports.emailQueueScalarWhereWithAggregatesInput = emailQueueScalarWhereWithAggregatesInput;
let emailQueueScalarWhereInput = emailQueueScalarWhereInput_1 = class emailQueueScalarWhereInput {
};
__decorate([
    (0, graphql_1.Field)(() => [emailQueueScalarWhereInput_1], { nullable: true })
], emailQueueScalarWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [emailQueueScalarWhereInput_1], { nullable: true })
], emailQueueScalarWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [emailQueueScalarWhereInput_1], { nullable: true })
], emailQueueScalarWhereInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => IntFilter, { nullable: true })
], emailQueueScalarWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFilter, { nullable: true })
], emailQueueScalarWhereInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => EnumQueueStatusFilter, { nullable: true })
], emailQueueScalarWhereInput.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFilter, { nullable: true })
], emailQueueScalarWhereInput.prototype, "guestId", void 0);
emailQueueScalarWhereInput = emailQueueScalarWhereInput_1 = __decorate([
    (0, graphql_4.InputType)()
], emailQueueScalarWhereInput);
exports.emailQueueScalarWhereInput = emailQueueScalarWhereInput;
let emailQueueSumOrderByAggregateInput = class emailQueueSumOrderByAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], emailQueueSumOrderByAggregateInput.prototype, "id", void 0);
emailQueueSumOrderByAggregateInput = __decorate([
    (0, graphql_4.InputType)()
], emailQueueSumOrderByAggregateInput);
exports.emailQueueSumOrderByAggregateInput = emailQueueSumOrderByAggregateInput;
let emailQueueUncheckedCreateNestedManyWithoutGuestInput = class emailQueueUncheckedCreateNestedManyWithoutGuestInput {
};
__decorate([
    (0, graphql_1.Field)(() => [emailQueueCreateWithoutGuestInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => emailQueueCreateWithoutGuestInput)
], emailQueueUncheckedCreateNestedManyWithoutGuestInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [emailQueueCreateOrConnectWithoutGuestInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => emailQueueCreateOrConnectWithoutGuestInput)
], emailQueueUncheckedCreateNestedManyWithoutGuestInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => emailQueueCreateManyGuestInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => emailQueueCreateManyGuestInputEnvelope)
], emailQueueUncheckedCreateNestedManyWithoutGuestInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [emailQueueWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => emailQueueWhereUniqueInput)
], emailQueueUncheckedCreateNestedManyWithoutGuestInput.prototype, "connect", void 0);
emailQueueUncheckedCreateNestedManyWithoutGuestInput = __decorate([
    (0, graphql_4.InputType)()
], emailQueueUncheckedCreateNestedManyWithoutGuestInput);
exports.emailQueueUncheckedCreateNestedManyWithoutGuestInput = emailQueueUncheckedCreateNestedManyWithoutGuestInput;
let emailQueueUncheckedCreateWithoutGuestInput = class emailQueueUncheckedCreateWithoutGuestInput {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], emailQueueUncheckedCreateWithoutGuestInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], emailQueueUncheckedCreateWithoutGuestInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => QueueStatus, { nullable: true })
], emailQueueUncheckedCreateWithoutGuestInput.prototype, "status", void 0);
emailQueueUncheckedCreateWithoutGuestInput = __decorate([
    (0, graphql_4.InputType)()
], emailQueueUncheckedCreateWithoutGuestInput);
exports.emailQueueUncheckedCreateWithoutGuestInput = emailQueueUncheckedCreateWithoutGuestInput;
let emailQueueUncheckedCreateInput = class emailQueueUncheckedCreateInput {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], emailQueueUncheckedCreateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], emailQueueUncheckedCreateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => QueueStatus, { nullable: true })
], emailQueueUncheckedCreateInput.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], emailQueueUncheckedCreateInput.prototype, "guestId", void 0);
emailQueueUncheckedCreateInput = __decorate([
    (0, graphql_4.InputType)()
], emailQueueUncheckedCreateInput);
exports.emailQueueUncheckedCreateInput = emailQueueUncheckedCreateInput;
let emailQueueUncheckedUpdateManyWithoutGuestNestedInput = class emailQueueUncheckedUpdateManyWithoutGuestNestedInput {
};
__decorate([
    (0, graphql_1.Field)(() => [emailQueueCreateWithoutGuestInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => emailQueueCreateWithoutGuestInput)
], emailQueueUncheckedUpdateManyWithoutGuestNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [emailQueueCreateOrConnectWithoutGuestInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => emailQueueCreateOrConnectWithoutGuestInput)
], emailQueueUncheckedUpdateManyWithoutGuestNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => [emailQueueUpsertWithWhereUniqueWithoutGuestInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => emailQueueUpsertWithWhereUniqueWithoutGuestInput)
], emailQueueUncheckedUpdateManyWithoutGuestNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => emailQueueCreateManyGuestInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => emailQueueCreateManyGuestInputEnvelope)
], emailQueueUncheckedUpdateManyWithoutGuestNestedInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [emailQueueWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => emailQueueWhereUniqueInput)
], emailQueueUncheckedUpdateManyWithoutGuestNestedInput.prototype, "set", void 0);
__decorate([
    (0, graphql_1.Field)(() => [emailQueueWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => emailQueueWhereUniqueInput)
], emailQueueUncheckedUpdateManyWithoutGuestNestedInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [emailQueueWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => emailQueueWhereUniqueInput)
], emailQueueUncheckedUpdateManyWithoutGuestNestedInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => [emailQueueWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => emailQueueWhereUniqueInput)
], emailQueueUncheckedUpdateManyWithoutGuestNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [emailQueueUpdateWithWhereUniqueWithoutGuestInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => emailQueueUpdateWithWhereUniqueWithoutGuestInput)
], emailQueueUncheckedUpdateManyWithoutGuestNestedInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => [emailQueueUpdateManyWithWhereWithoutGuestInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => emailQueueUpdateManyWithWhereWithoutGuestInput)
], emailQueueUncheckedUpdateManyWithoutGuestNestedInput.prototype, "updateMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [emailQueueScalarWhereInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => emailQueueScalarWhereInput)
], emailQueueUncheckedUpdateManyWithoutGuestNestedInput.prototype, "deleteMany", void 0);
emailQueueUncheckedUpdateManyWithoutGuestNestedInput = __decorate([
    (0, graphql_4.InputType)()
], emailQueueUncheckedUpdateManyWithoutGuestNestedInput);
exports.emailQueueUncheckedUpdateManyWithoutGuestNestedInput = emailQueueUncheckedUpdateManyWithoutGuestNestedInput;
let emailQueueUncheckedUpdateManyWithoutGuestInput = class emailQueueUncheckedUpdateManyWithoutGuestInput {
};
__decorate([
    (0, graphql_1.Field)(() => IntFieldUpdateOperationsInput, { nullable: true })
], emailQueueUncheckedUpdateManyWithoutGuestInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], emailQueueUncheckedUpdateManyWithoutGuestInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => EnumQueueStatusFieldUpdateOperationsInput, { nullable: true })
], emailQueueUncheckedUpdateManyWithoutGuestInput.prototype, "status", void 0);
emailQueueUncheckedUpdateManyWithoutGuestInput = __decorate([
    (0, graphql_4.InputType)()
], emailQueueUncheckedUpdateManyWithoutGuestInput);
exports.emailQueueUncheckedUpdateManyWithoutGuestInput = emailQueueUncheckedUpdateManyWithoutGuestInput;
let emailQueueUncheckedUpdateManyInput = class emailQueueUncheckedUpdateManyInput {
};
__decorate([
    (0, graphql_1.Field)(() => IntFieldUpdateOperationsInput, { nullable: true })
], emailQueueUncheckedUpdateManyInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], emailQueueUncheckedUpdateManyInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => EnumQueueStatusFieldUpdateOperationsInput, { nullable: true })
], emailQueueUncheckedUpdateManyInput.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], emailQueueUncheckedUpdateManyInput.prototype, "guestId", void 0);
emailQueueUncheckedUpdateManyInput = __decorate([
    (0, graphql_4.InputType)()
], emailQueueUncheckedUpdateManyInput);
exports.emailQueueUncheckedUpdateManyInput = emailQueueUncheckedUpdateManyInput;
let emailQueueUncheckedUpdateWithoutGuestInput = class emailQueueUncheckedUpdateWithoutGuestInput {
};
__decorate([
    (0, graphql_1.Field)(() => IntFieldUpdateOperationsInput, { nullable: true })
], emailQueueUncheckedUpdateWithoutGuestInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], emailQueueUncheckedUpdateWithoutGuestInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => EnumQueueStatusFieldUpdateOperationsInput, { nullable: true })
], emailQueueUncheckedUpdateWithoutGuestInput.prototype, "status", void 0);
emailQueueUncheckedUpdateWithoutGuestInput = __decorate([
    (0, graphql_4.InputType)()
], emailQueueUncheckedUpdateWithoutGuestInput);
exports.emailQueueUncheckedUpdateWithoutGuestInput = emailQueueUncheckedUpdateWithoutGuestInput;
let emailQueueUncheckedUpdateInput = class emailQueueUncheckedUpdateInput {
};
__decorate([
    (0, graphql_1.Field)(() => IntFieldUpdateOperationsInput, { nullable: true })
], emailQueueUncheckedUpdateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], emailQueueUncheckedUpdateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => EnumQueueStatusFieldUpdateOperationsInput, { nullable: true })
], emailQueueUncheckedUpdateInput.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], emailQueueUncheckedUpdateInput.prototype, "guestId", void 0);
emailQueueUncheckedUpdateInput = __decorate([
    (0, graphql_4.InputType)()
], emailQueueUncheckedUpdateInput);
exports.emailQueueUncheckedUpdateInput = emailQueueUncheckedUpdateInput;
let emailQueueUpdateManyMutationInput = class emailQueueUpdateManyMutationInput {
};
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], emailQueueUpdateManyMutationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => EnumQueueStatusFieldUpdateOperationsInput, { nullable: true })
], emailQueueUpdateManyMutationInput.prototype, "status", void 0);
emailQueueUpdateManyMutationInput = __decorate([
    (0, graphql_4.InputType)()
], emailQueueUpdateManyMutationInput);
exports.emailQueueUpdateManyMutationInput = emailQueueUpdateManyMutationInput;
let emailQueueUpdateManyWithWhereWithoutGuestInput = class emailQueueUpdateManyWithWhereWithoutGuestInput {
};
__decorate([
    (0, graphql_1.Field)(() => emailQueueScalarWhereInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => emailQueueScalarWhereInput)
], emailQueueUpdateManyWithWhereWithoutGuestInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => emailQueueUpdateManyMutationInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => emailQueueUpdateManyMutationInput)
], emailQueueUpdateManyWithWhereWithoutGuestInput.prototype, "data", void 0);
emailQueueUpdateManyWithWhereWithoutGuestInput = __decorate([
    (0, graphql_4.InputType)()
], emailQueueUpdateManyWithWhereWithoutGuestInput);
exports.emailQueueUpdateManyWithWhereWithoutGuestInput = emailQueueUpdateManyWithWhereWithoutGuestInput;
let emailQueueUpdateManyWithoutGuestNestedInput = class emailQueueUpdateManyWithoutGuestNestedInput {
};
__decorate([
    (0, graphql_1.Field)(() => [emailQueueCreateWithoutGuestInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => emailQueueCreateWithoutGuestInput)
], emailQueueUpdateManyWithoutGuestNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [emailQueueCreateOrConnectWithoutGuestInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => emailQueueCreateOrConnectWithoutGuestInput)
], emailQueueUpdateManyWithoutGuestNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => [emailQueueUpsertWithWhereUniqueWithoutGuestInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => emailQueueUpsertWithWhereUniqueWithoutGuestInput)
], emailQueueUpdateManyWithoutGuestNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => emailQueueCreateManyGuestInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => emailQueueCreateManyGuestInputEnvelope)
], emailQueueUpdateManyWithoutGuestNestedInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [emailQueueWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => emailQueueWhereUniqueInput)
], emailQueueUpdateManyWithoutGuestNestedInput.prototype, "set", void 0);
__decorate([
    (0, graphql_1.Field)(() => [emailQueueWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => emailQueueWhereUniqueInput)
], emailQueueUpdateManyWithoutGuestNestedInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [emailQueueWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => emailQueueWhereUniqueInput)
], emailQueueUpdateManyWithoutGuestNestedInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => [emailQueueWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => emailQueueWhereUniqueInput)
], emailQueueUpdateManyWithoutGuestNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [emailQueueUpdateWithWhereUniqueWithoutGuestInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => emailQueueUpdateWithWhereUniqueWithoutGuestInput)
], emailQueueUpdateManyWithoutGuestNestedInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => [emailQueueUpdateManyWithWhereWithoutGuestInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => emailQueueUpdateManyWithWhereWithoutGuestInput)
], emailQueueUpdateManyWithoutGuestNestedInput.prototype, "updateMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [emailQueueScalarWhereInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => emailQueueScalarWhereInput)
], emailQueueUpdateManyWithoutGuestNestedInput.prototype, "deleteMany", void 0);
emailQueueUpdateManyWithoutGuestNestedInput = __decorate([
    (0, graphql_4.InputType)()
], emailQueueUpdateManyWithoutGuestNestedInput);
exports.emailQueueUpdateManyWithoutGuestNestedInput = emailQueueUpdateManyWithoutGuestNestedInput;
let emailQueueUpdateWithWhereUniqueWithoutGuestInput = class emailQueueUpdateWithWhereUniqueWithoutGuestInput {
};
__decorate([
    (0, graphql_1.Field)(() => emailQueueWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => emailQueueWhereUniqueInput)
], emailQueueUpdateWithWhereUniqueWithoutGuestInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => emailQueueUpdateWithoutGuestInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => emailQueueUpdateWithoutGuestInput)
], emailQueueUpdateWithWhereUniqueWithoutGuestInput.prototype, "data", void 0);
emailQueueUpdateWithWhereUniqueWithoutGuestInput = __decorate([
    (0, graphql_4.InputType)()
], emailQueueUpdateWithWhereUniqueWithoutGuestInput);
exports.emailQueueUpdateWithWhereUniqueWithoutGuestInput = emailQueueUpdateWithWhereUniqueWithoutGuestInput;
let emailQueueUpdateWithoutGuestInput = class emailQueueUpdateWithoutGuestInput {
};
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], emailQueueUpdateWithoutGuestInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => EnumQueueStatusFieldUpdateOperationsInput, { nullable: true })
], emailQueueUpdateWithoutGuestInput.prototype, "status", void 0);
emailQueueUpdateWithoutGuestInput = __decorate([
    (0, graphql_4.InputType)()
], emailQueueUpdateWithoutGuestInput);
exports.emailQueueUpdateWithoutGuestInput = emailQueueUpdateWithoutGuestInput;
let emailQueueUpdateInput = class emailQueueUpdateInput {
};
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], emailQueueUpdateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => EnumQueueStatusFieldUpdateOperationsInput, { nullable: true })
], emailQueueUpdateInput.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestUpdateOneRequiredWithoutEmailQueueNestedInput, { nullable: true })
], emailQueueUpdateInput.prototype, "guest", void 0);
emailQueueUpdateInput = __decorate([
    (0, graphql_4.InputType)()
], emailQueueUpdateInput);
exports.emailQueueUpdateInput = emailQueueUpdateInput;
let emailQueueUpsertWithWhereUniqueWithoutGuestInput = class emailQueueUpsertWithWhereUniqueWithoutGuestInput {
};
__decorate([
    (0, graphql_1.Field)(() => emailQueueWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => emailQueueWhereUniqueInput)
], emailQueueUpsertWithWhereUniqueWithoutGuestInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => emailQueueUpdateWithoutGuestInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => emailQueueUpdateWithoutGuestInput)
], emailQueueUpsertWithWhereUniqueWithoutGuestInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => emailQueueCreateWithoutGuestInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => emailQueueCreateWithoutGuestInput)
], emailQueueUpsertWithWhereUniqueWithoutGuestInput.prototype, "create", void 0);
emailQueueUpsertWithWhereUniqueWithoutGuestInput = __decorate([
    (0, graphql_4.InputType)()
], emailQueueUpsertWithWhereUniqueWithoutGuestInput);
exports.emailQueueUpsertWithWhereUniqueWithoutGuestInput = emailQueueUpsertWithWhereUniqueWithoutGuestInput;
let emailQueueWhereUniqueInput = class emailQueueWhereUniqueInput {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], emailQueueWhereUniqueInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => [emailQueueWhereInput], { nullable: true })
], emailQueueWhereUniqueInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [emailQueueWhereInput], { nullable: true })
], emailQueueWhereUniqueInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [emailQueueWhereInput], { nullable: true })
], emailQueueWhereUniqueInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFilter, { nullable: true })
], emailQueueWhereUniqueInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => EnumQueueStatusFilter, { nullable: true })
], emailQueueWhereUniqueInput.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFilter, { nullable: true })
], emailQueueWhereUniqueInput.prototype, "guestId", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestRelationFilter, { nullable: true })
], emailQueueWhereUniqueInput.prototype, "guest", void 0);
emailQueueWhereUniqueInput = __decorate([
    (0, graphql_4.InputType)()
], emailQueueWhereUniqueInput);
exports.emailQueueWhereUniqueInput = emailQueueWhereUniqueInput;
let emailQueueWhereInput = emailQueueWhereInput_1 = class emailQueueWhereInput {
};
__decorate([
    (0, graphql_1.Field)(() => [emailQueueWhereInput_1], { nullable: true })
], emailQueueWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [emailQueueWhereInput_1], { nullable: true })
], emailQueueWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [emailQueueWhereInput_1], { nullable: true })
], emailQueueWhereInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => IntFilter, { nullable: true })
], emailQueueWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFilter, { nullable: true })
], emailQueueWhereInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => EnumQueueStatusFilter, { nullable: true })
], emailQueueWhereInput.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFilter, { nullable: true })
], emailQueueWhereInput.prototype, "guestId", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestRelationFilter, { nullable: true })
], emailQueueWhereInput.prototype, "guest", void 0);
emailQueueWhereInput = emailQueueWhereInput_1 = __decorate([
    (0, graphql_4.InputType)()
], emailQueueWhereInput);
exports.emailQueueWhereInput = emailQueueWhereInput;
let emailQueue = class emailQueue {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], emailQueue.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], emailQueue.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => QueueStatus, { nullable: false, defaultValue: 'WAITING' })
], emailQueue.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], emailQueue.prototype, "guestId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Guest, { nullable: false })
], emailQueue.prototype, "guest", void 0);
emailQueue = __decorate([
    (0, graphql_5.ObjectType)({ description: 'Batas Pengiriman 1000 email per hari' })
], emailQueue);
exports.emailQueue = emailQueue;
let FindFirstemailQueueOrThrowArgs = class FindFirstemailQueueOrThrowArgs {
};
__decorate([
    (0, graphql_1.Field)(() => emailQueueWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => emailQueueWhereInput)
], FindFirstemailQueueOrThrowArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [emailQueueOrderByWithRelationInput], { nullable: true })
], FindFirstemailQueueOrThrowArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => emailQueueWhereUniqueInput, { nullable: true })
], FindFirstemailQueueOrThrowArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], FindFirstemailQueueOrThrowArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], FindFirstemailQueueOrThrowArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => [EmailQueueScalarFieldEnum], { nullable: true })
], FindFirstemailQueueOrThrowArgs.prototype, "distinct", void 0);
FindFirstemailQueueOrThrowArgs = __decorate([
    (0, graphql_2.ArgsType)()
], FindFirstemailQueueOrThrowArgs);
exports.FindFirstemailQueueOrThrowArgs = FindFirstemailQueueOrThrowArgs;
let FindFirstemailQueueArgs = class FindFirstemailQueueArgs {
};
__decorate([
    (0, graphql_1.Field)(() => emailQueueWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => emailQueueWhereInput)
], FindFirstemailQueueArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [emailQueueOrderByWithRelationInput], { nullable: true })
], FindFirstemailQueueArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => emailQueueWhereUniqueInput, { nullable: true })
], FindFirstemailQueueArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], FindFirstemailQueueArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], FindFirstemailQueueArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => [EmailQueueScalarFieldEnum], { nullable: true })
], FindFirstemailQueueArgs.prototype, "distinct", void 0);
FindFirstemailQueueArgs = __decorate([
    (0, graphql_2.ArgsType)()
], FindFirstemailQueueArgs);
exports.FindFirstemailQueueArgs = FindFirstemailQueueArgs;
let FindManyemailQueueArgs = class FindManyemailQueueArgs {
};
__decorate([
    (0, graphql_1.Field)(() => emailQueueWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => emailQueueWhereInput)
], FindManyemailQueueArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [emailQueueOrderByWithRelationInput], { nullable: true })
], FindManyemailQueueArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => emailQueueWhereUniqueInput, { nullable: true })
], FindManyemailQueueArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], FindManyemailQueueArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], FindManyemailQueueArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => [EmailQueueScalarFieldEnum], { nullable: true })
], FindManyemailQueueArgs.prototype, "distinct", void 0);
FindManyemailQueueArgs = __decorate([
    (0, graphql_2.ArgsType)()
], FindManyemailQueueArgs);
exports.FindManyemailQueueArgs = FindManyemailQueueArgs;
let FindUniqueemailQueueOrThrowArgs = class FindUniqueemailQueueOrThrowArgs {
};
__decorate([
    (0, graphql_1.Field)(() => emailQueueWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => emailQueueWhereUniqueInput)
], FindUniqueemailQueueOrThrowArgs.prototype, "where", void 0);
FindUniqueemailQueueOrThrowArgs = __decorate([
    (0, graphql_2.ArgsType)()
], FindUniqueemailQueueOrThrowArgs);
exports.FindUniqueemailQueueOrThrowArgs = FindUniqueemailQueueOrThrowArgs;
let FindUniqueemailQueueArgs = class FindUniqueemailQueueArgs {
};
__decorate([
    (0, graphql_1.Field)(() => emailQueueWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => emailQueueWhereUniqueInput)
], FindUniqueemailQueueArgs.prototype, "where", void 0);
FindUniqueemailQueueArgs = __decorate([
    (0, graphql_2.ArgsType)()
], FindUniqueemailQueueArgs);
exports.FindUniqueemailQueueArgs = FindUniqueemailQueueArgs;
let UpdateManyemailQueueArgs = class UpdateManyemailQueueArgs {
};
__decorate([
    (0, graphql_1.Field)(() => emailQueueUpdateManyMutationInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => emailQueueUpdateManyMutationInput)
], UpdateManyemailQueueArgs.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => emailQueueWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => emailQueueWhereInput)
], UpdateManyemailQueueArgs.prototype, "where", void 0);
UpdateManyemailQueueArgs = __decorate([
    (0, graphql_2.ArgsType)()
], UpdateManyemailQueueArgs);
exports.UpdateManyemailQueueArgs = UpdateManyemailQueueArgs;
let UpdateOneemailQueueArgs = class UpdateOneemailQueueArgs {
};
__decorate([
    (0, graphql_1.Field)(() => emailQueueUpdateInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => emailQueueUpdateInput)
], UpdateOneemailQueueArgs.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => emailQueueWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => emailQueueWhereUniqueInput)
], UpdateOneemailQueueArgs.prototype, "where", void 0);
UpdateOneemailQueueArgs = __decorate([
    (0, graphql_2.ArgsType)()
], UpdateOneemailQueueArgs);
exports.UpdateOneemailQueueArgs = UpdateOneemailQueueArgs;
let UpsertOneemailQueueArgs = class UpsertOneemailQueueArgs {
};
__decorate([
    (0, graphql_1.Field)(() => emailQueueWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => emailQueueWhereUniqueInput)
], UpsertOneemailQueueArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => emailQueueCreateInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => emailQueueCreateInput)
], UpsertOneemailQueueArgs.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => emailQueueUpdateInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => emailQueueUpdateInput)
], UpsertOneemailQueueArgs.prototype, "update", void 0);
UpsertOneemailQueueArgs = __decorate([
    (0, graphql_2.ArgsType)()
], UpsertOneemailQueueArgs);
exports.UpsertOneemailQueueArgs = UpsertOneemailQueueArgs;
let AggregateGuest = class AggregateGuest {
};
__decorate([
    (0, graphql_1.Field)(() => GuestCountAggregate, { nullable: true })
], AggregateGuest.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestMinAggregate, { nullable: true })
], AggregateGuest.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestMaxAggregate, { nullable: true })
], AggregateGuest.prototype, "_max", void 0);
AggregateGuest = __decorate([
    (0, graphql_5.ObjectType)()
], AggregateGuest);
exports.AggregateGuest = AggregateGuest;
let CreateManyGuestArgs = class CreateManyGuestArgs {
};
__decorate([
    (0, graphql_1.Field)(() => [GuestCreateManyInput], { nullable: false }),
    (0, class_transformer_1.Type)(() => GuestCreateManyInput)
], CreateManyGuestArgs.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], CreateManyGuestArgs.prototype, "skipDuplicates", void 0);
CreateManyGuestArgs = __decorate([
    (0, graphql_2.ArgsType)()
], CreateManyGuestArgs);
exports.CreateManyGuestArgs = CreateManyGuestArgs;
let CreateOneGuestArgs = class CreateOneGuestArgs {
};
__decorate([
    (0, graphql_1.Field)(() => GuestCreateInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => GuestCreateInput)
], CreateOneGuestArgs.prototype, "data", void 0);
CreateOneGuestArgs = __decorate([
    (0, graphql_2.ArgsType)()
], CreateOneGuestArgs);
exports.CreateOneGuestArgs = CreateOneGuestArgs;
let DeleteManyGuestArgs = class DeleteManyGuestArgs {
};
__decorate([
    (0, graphql_1.Field)(() => GuestWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => GuestWhereInput)
], DeleteManyGuestArgs.prototype, "where", void 0);
DeleteManyGuestArgs = __decorate([
    (0, graphql_2.ArgsType)()
], DeleteManyGuestArgs);
exports.DeleteManyGuestArgs = DeleteManyGuestArgs;
let DeleteOneGuestArgs = class DeleteOneGuestArgs {
};
__decorate([
    (0, graphql_1.Field)(() => GuestWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => GuestWhereUniqueInput)
], DeleteOneGuestArgs.prototype, "where", void 0);
DeleteOneGuestArgs = __decorate([
    (0, graphql_2.ArgsType)()
], DeleteOneGuestArgs);
exports.DeleteOneGuestArgs = DeleteOneGuestArgs;
let FindFirstGuestOrThrowArgs = class FindFirstGuestOrThrowArgs {
};
__decorate([
    (0, graphql_1.Field)(() => GuestWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => GuestWhereInput)
], FindFirstGuestOrThrowArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [GuestOrderByWithRelationInput], { nullable: true })
], FindFirstGuestOrThrowArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestWhereUniqueInput, { nullable: true })
], FindFirstGuestOrThrowArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], FindFirstGuestOrThrowArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], FindFirstGuestOrThrowArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => [GuestScalarFieldEnum], { nullable: true })
], FindFirstGuestOrThrowArgs.prototype, "distinct", void 0);
FindFirstGuestOrThrowArgs = __decorate([
    (0, graphql_2.ArgsType)()
], FindFirstGuestOrThrowArgs);
exports.FindFirstGuestOrThrowArgs = FindFirstGuestOrThrowArgs;
let FindFirstGuestArgs = class FindFirstGuestArgs {
};
__decorate([
    (0, graphql_1.Field)(() => GuestWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => GuestWhereInput)
], FindFirstGuestArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [GuestOrderByWithRelationInput], { nullable: true })
], FindFirstGuestArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestWhereUniqueInput, { nullable: true })
], FindFirstGuestArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], FindFirstGuestArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], FindFirstGuestArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => [GuestScalarFieldEnum], { nullable: true })
], FindFirstGuestArgs.prototype, "distinct", void 0);
FindFirstGuestArgs = __decorate([
    (0, graphql_2.ArgsType)()
], FindFirstGuestArgs);
exports.FindFirstGuestArgs = FindFirstGuestArgs;
let FindManyGuestArgs = class FindManyGuestArgs {
};
__decorate([
    (0, graphql_1.Field)(() => GuestWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => GuestWhereInput)
], FindManyGuestArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [GuestOrderByWithRelationInput], { nullable: true })
], FindManyGuestArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestWhereUniqueInput, { nullable: true })
], FindManyGuestArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], FindManyGuestArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], FindManyGuestArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => [GuestScalarFieldEnum], { nullable: true })
], FindManyGuestArgs.prototype, "distinct", void 0);
FindManyGuestArgs = __decorate([
    (0, graphql_2.ArgsType)()
], FindManyGuestArgs);
exports.FindManyGuestArgs = FindManyGuestArgs;
let FindUniqueGuestOrThrowArgs = class FindUniqueGuestOrThrowArgs {
};
__decorate([
    (0, graphql_1.Field)(() => GuestWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => GuestWhereUniqueInput)
], FindUniqueGuestOrThrowArgs.prototype, "where", void 0);
FindUniqueGuestOrThrowArgs = __decorate([
    (0, graphql_2.ArgsType)()
], FindUniqueGuestOrThrowArgs);
exports.FindUniqueGuestOrThrowArgs = FindUniqueGuestOrThrowArgs;
let FindUniqueGuestArgs = class FindUniqueGuestArgs {
};
__decorate([
    (0, graphql_1.Field)(() => GuestWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => GuestWhereUniqueInput)
], FindUniqueGuestArgs.prototype, "where", void 0);
FindUniqueGuestArgs = __decorate([
    (0, graphql_2.ArgsType)()
], FindUniqueGuestArgs);
exports.FindUniqueGuestArgs = FindUniqueGuestArgs;
let GuestAggregateArgs = class GuestAggregateArgs {
};
__decorate([
    (0, graphql_1.Field)(() => GuestWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => GuestWhereInput)
], GuestAggregateArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [GuestOrderByWithRelationInput], { nullable: true })
], GuestAggregateArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestWhereUniqueInput, { nullable: true })
], GuestAggregateArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], GuestAggregateArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], GuestAggregateArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestCountAggregateInput, { nullable: true })
], GuestAggregateArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestMinAggregateInput, { nullable: true })
], GuestAggregateArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestMaxAggregateInput, { nullable: true })
], GuestAggregateArgs.prototype, "_max", void 0);
GuestAggregateArgs = __decorate([
    (0, graphql_2.ArgsType)()
], GuestAggregateArgs);
exports.GuestAggregateArgs = GuestAggregateArgs;
let GuestCountAggregateInput = class GuestCountAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], GuestCountAggregateInput.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], GuestCountAggregateInput.prototype, "category1", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], GuestCountAggregateInput.prototype, "category2", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], GuestCountAggregateInput.prototype, "personInCharge", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], GuestCountAggregateInput.prototype, "class", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], GuestCountAggregateInput.prototype, "seat", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], GuestCountAggregateInput.prototype, "rejectionReason", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], GuestCountAggregateInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], GuestCountAggregateInput.prototype, "checkInAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], GuestCountAggregateInput.prototype, "confirmationStatus", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], GuestCountAggregateInput.prototype, "_all", void 0);
GuestCountAggregateInput = __decorate([
    (0, graphql_4.InputType)()
], GuestCountAggregateInput);
exports.GuestCountAggregateInput = GuestCountAggregateInput;
let GuestCountAggregate = class GuestCountAggregate {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], GuestCountAggregate.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], GuestCountAggregate.prototype, "category1", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], GuestCountAggregate.prototype, "category2", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], GuestCountAggregate.prototype, "personInCharge", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], GuestCountAggregate.prototype, "class", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], GuestCountAggregate.prototype, "seat", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], GuestCountAggregate.prototype, "rejectionReason", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], GuestCountAggregate.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], GuestCountAggregate.prototype, "checkInAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], GuestCountAggregate.prototype, "confirmationStatus", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], GuestCountAggregate.prototype, "_all", void 0);
GuestCountAggregate = __decorate([
    (0, graphql_5.ObjectType)()
], GuestCountAggregate);
exports.GuestCountAggregate = GuestCountAggregate;
let GuestCountOrderByAggregateInput = class GuestCountOrderByAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], GuestCountOrderByAggregateInput.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], GuestCountOrderByAggregateInput.prototype, "category1", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], GuestCountOrderByAggregateInput.prototype, "category2", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], GuestCountOrderByAggregateInput.prototype, "personInCharge", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], GuestCountOrderByAggregateInput.prototype, "class", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], GuestCountOrderByAggregateInput.prototype, "seat", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], GuestCountOrderByAggregateInput.prototype, "rejectionReason", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], GuestCountOrderByAggregateInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], GuestCountOrderByAggregateInput.prototype, "checkInAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], GuestCountOrderByAggregateInput.prototype, "confirmationStatus", void 0);
GuestCountOrderByAggregateInput = __decorate([
    (0, graphql_4.InputType)()
], GuestCountOrderByAggregateInput);
exports.GuestCountOrderByAggregateInput = GuestCountOrderByAggregateInput;
let GuestCount = class GuestCount {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], GuestCount.prototype, "emailQueue", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], GuestCount.prototype, "whatsappQueue", void 0);
GuestCount = __decorate([
    (0, graphql_5.ObjectType)()
], GuestCount);
exports.GuestCount = GuestCount;
let GuestCreateManyInput = class GuestCreateManyInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], GuestCreateManyInput.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestCreateManyInput.prototype, "category1", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestCreateManyInput.prototype, "category2", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestCreateManyInput.prototype, "personInCharge", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestCreateManyInput.prototype, "class", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestCreateManyInput.prototype, "seat", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestCreateManyInput.prototype, "rejectionReason", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestCreateManyInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], GuestCreateManyInput.prototype, "checkInAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => ConfirmationStatus, { nullable: true })
], GuestCreateManyInput.prototype, "confirmationStatus", void 0);
GuestCreateManyInput = __decorate([
    (0, graphql_4.InputType)()
], GuestCreateManyInput);
exports.GuestCreateManyInput = GuestCreateManyInput;
let GuestCreateNestedOneWithoutEmailQueueInput = class GuestCreateNestedOneWithoutEmailQueueInput {
};
__decorate([
    (0, graphql_1.Field)(() => GuestCreateWithoutEmailQueueInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => GuestCreateWithoutEmailQueueInput)
], GuestCreateNestedOneWithoutEmailQueueInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestCreateOrConnectWithoutEmailQueueInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => GuestCreateOrConnectWithoutEmailQueueInput)
], GuestCreateNestedOneWithoutEmailQueueInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestWhereUniqueInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => GuestWhereUniqueInput)
], GuestCreateNestedOneWithoutEmailQueueInput.prototype, "connect", void 0);
GuestCreateNestedOneWithoutEmailQueueInput = __decorate([
    (0, graphql_4.InputType)()
], GuestCreateNestedOneWithoutEmailQueueInput);
exports.GuestCreateNestedOneWithoutEmailQueueInput = GuestCreateNestedOneWithoutEmailQueueInput;
let GuestCreateNestedOneWithoutUserInput = class GuestCreateNestedOneWithoutUserInput {
};
__decorate([
    (0, graphql_1.Field)(() => GuestCreateWithoutUserInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => GuestCreateWithoutUserInput)
], GuestCreateNestedOneWithoutUserInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestCreateOrConnectWithoutUserInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => GuestCreateOrConnectWithoutUserInput)
], GuestCreateNestedOneWithoutUserInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestWhereUniqueInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => GuestWhereUniqueInput)
], GuestCreateNestedOneWithoutUserInput.prototype, "connect", void 0);
GuestCreateNestedOneWithoutUserInput = __decorate([
    (0, graphql_4.InputType)()
], GuestCreateNestedOneWithoutUserInput);
exports.GuestCreateNestedOneWithoutUserInput = GuestCreateNestedOneWithoutUserInput;
let GuestCreateNestedOneWithoutWhatsappQueueInput = class GuestCreateNestedOneWithoutWhatsappQueueInput {
};
__decorate([
    (0, graphql_1.Field)(() => GuestCreateWithoutWhatsappQueueInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => GuestCreateWithoutWhatsappQueueInput)
], GuestCreateNestedOneWithoutWhatsappQueueInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestCreateOrConnectWithoutWhatsappQueueInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => GuestCreateOrConnectWithoutWhatsappQueueInput)
], GuestCreateNestedOneWithoutWhatsappQueueInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestWhereUniqueInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => GuestWhereUniqueInput)
], GuestCreateNestedOneWithoutWhatsappQueueInput.prototype, "connect", void 0);
GuestCreateNestedOneWithoutWhatsappQueueInput = __decorate([
    (0, graphql_4.InputType)()
], GuestCreateNestedOneWithoutWhatsappQueueInput);
exports.GuestCreateNestedOneWithoutWhatsappQueueInput = GuestCreateNestedOneWithoutWhatsappQueueInput;
let GuestCreateOrConnectWithoutEmailQueueInput = class GuestCreateOrConnectWithoutEmailQueueInput {
};
__decorate([
    (0, graphql_1.Field)(() => GuestWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => GuestWhereUniqueInput)
], GuestCreateOrConnectWithoutEmailQueueInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestCreateWithoutEmailQueueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => GuestCreateWithoutEmailQueueInput)
], GuestCreateOrConnectWithoutEmailQueueInput.prototype, "create", void 0);
GuestCreateOrConnectWithoutEmailQueueInput = __decorate([
    (0, graphql_4.InputType)()
], GuestCreateOrConnectWithoutEmailQueueInput);
exports.GuestCreateOrConnectWithoutEmailQueueInput = GuestCreateOrConnectWithoutEmailQueueInput;
let GuestCreateOrConnectWithoutUserInput = class GuestCreateOrConnectWithoutUserInput {
};
__decorate([
    (0, graphql_1.Field)(() => GuestWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => GuestWhereUniqueInput)
], GuestCreateOrConnectWithoutUserInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestCreateWithoutUserInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => GuestCreateWithoutUserInput)
], GuestCreateOrConnectWithoutUserInput.prototype, "create", void 0);
GuestCreateOrConnectWithoutUserInput = __decorate([
    (0, graphql_4.InputType)()
], GuestCreateOrConnectWithoutUserInput);
exports.GuestCreateOrConnectWithoutUserInput = GuestCreateOrConnectWithoutUserInput;
let GuestCreateOrConnectWithoutWhatsappQueueInput = class GuestCreateOrConnectWithoutWhatsappQueueInput {
};
__decorate([
    (0, graphql_1.Field)(() => GuestWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => GuestWhereUniqueInput)
], GuestCreateOrConnectWithoutWhatsappQueueInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestCreateWithoutWhatsappQueueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => GuestCreateWithoutWhatsappQueueInput)
], GuestCreateOrConnectWithoutWhatsappQueueInput.prototype, "create", void 0);
GuestCreateOrConnectWithoutWhatsappQueueInput = __decorate([
    (0, graphql_4.InputType)()
], GuestCreateOrConnectWithoutWhatsappQueueInput);
exports.GuestCreateOrConnectWithoutWhatsappQueueInput = GuestCreateOrConnectWithoutWhatsappQueueInput;
let GuestCreateWithoutEmailQueueInput = class GuestCreateWithoutEmailQueueInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestCreateWithoutEmailQueueInput.prototype, "category1", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestCreateWithoutEmailQueueInput.prototype, "category2", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestCreateWithoutEmailQueueInput.prototype, "personInCharge", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestCreateWithoutEmailQueueInput.prototype, "class", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestCreateWithoutEmailQueueInput.prototype, "seat", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestCreateWithoutEmailQueueInput.prototype, "rejectionReason", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestCreateWithoutEmailQueueInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], GuestCreateWithoutEmailQueueInput.prototype, "checkInAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => ConfirmationStatus, { nullable: true })
], GuestCreateWithoutEmailQueueInput.prototype, "confirmationStatus", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserCreateNestedOneWithoutGuestInfoInput, { nullable: false })
], GuestCreateWithoutEmailQueueInput.prototype, "user", void 0);
__decorate([
    (0, graphql_1.Field)(() => whatsappQueueCreateNestedManyWithoutGuestInput, { nullable: true })
], GuestCreateWithoutEmailQueueInput.prototype, "whatsappQueue", void 0);
GuestCreateWithoutEmailQueueInput = __decorate([
    (0, graphql_4.InputType)()
], GuestCreateWithoutEmailQueueInput);
exports.GuestCreateWithoutEmailQueueInput = GuestCreateWithoutEmailQueueInput;
let GuestCreateWithoutUserInput = class GuestCreateWithoutUserInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestCreateWithoutUserInput.prototype, "category1", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestCreateWithoutUserInput.prototype, "category2", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestCreateWithoutUserInput.prototype, "personInCharge", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestCreateWithoutUserInput.prototype, "class", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestCreateWithoutUserInput.prototype, "seat", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestCreateWithoutUserInput.prototype, "rejectionReason", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestCreateWithoutUserInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], GuestCreateWithoutUserInput.prototype, "checkInAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => ConfirmationStatus, { nullable: true })
], GuestCreateWithoutUserInput.prototype, "confirmationStatus", void 0);
__decorate([
    (0, graphql_1.Field)(() => emailQueueCreateNestedManyWithoutGuestInput, { nullable: true })
], GuestCreateWithoutUserInput.prototype, "emailQueue", void 0);
__decorate([
    (0, graphql_1.Field)(() => whatsappQueueCreateNestedManyWithoutGuestInput, { nullable: true })
], GuestCreateWithoutUserInput.prototype, "whatsappQueue", void 0);
GuestCreateWithoutUserInput = __decorate([
    (0, graphql_4.InputType)()
], GuestCreateWithoutUserInput);
exports.GuestCreateWithoutUserInput = GuestCreateWithoutUserInput;
let GuestCreateWithoutWhatsappQueueInput = class GuestCreateWithoutWhatsappQueueInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestCreateWithoutWhatsappQueueInput.prototype, "category1", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestCreateWithoutWhatsappQueueInput.prototype, "category2", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestCreateWithoutWhatsappQueueInput.prototype, "personInCharge", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestCreateWithoutWhatsappQueueInput.prototype, "class", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestCreateWithoutWhatsappQueueInput.prototype, "seat", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestCreateWithoutWhatsappQueueInput.prototype, "rejectionReason", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestCreateWithoutWhatsappQueueInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], GuestCreateWithoutWhatsappQueueInput.prototype, "checkInAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => ConfirmationStatus, { nullable: true })
], GuestCreateWithoutWhatsappQueueInput.prototype, "confirmationStatus", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserCreateNestedOneWithoutGuestInfoInput, { nullable: false })
], GuestCreateWithoutWhatsappQueueInput.prototype, "user", void 0);
__decorate([
    (0, graphql_1.Field)(() => emailQueueCreateNestedManyWithoutGuestInput, { nullable: true })
], GuestCreateWithoutWhatsappQueueInput.prototype, "emailQueue", void 0);
GuestCreateWithoutWhatsappQueueInput = __decorate([
    (0, graphql_4.InputType)()
], GuestCreateWithoutWhatsappQueueInput);
exports.GuestCreateWithoutWhatsappQueueInput = GuestCreateWithoutWhatsappQueueInput;
let GuestCreateInput = class GuestCreateInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestCreateInput.prototype, "category1", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestCreateInput.prototype, "category2", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestCreateInput.prototype, "personInCharge", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestCreateInput.prototype, "class", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestCreateInput.prototype, "seat", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestCreateInput.prototype, "rejectionReason", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestCreateInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], GuestCreateInput.prototype, "checkInAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => ConfirmationStatus, { nullable: true })
], GuestCreateInput.prototype, "confirmationStatus", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserCreateNestedOneWithoutGuestInfoInput, { nullable: false })
], GuestCreateInput.prototype, "user", void 0);
__decorate([
    (0, graphql_1.Field)(() => emailQueueCreateNestedManyWithoutGuestInput, { nullable: true })
], GuestCreateInput.prototype, "emailQueue", void 0);
__decorate([
    (0, graphql_1.Field)(() => whatsappQueueCreateNestedManyWithoutGuestInput, { nullable: true })
], GuestCreateInput.prototype, "whatsappQueue", void 0);
GuestCreateInput = __decorate([
    (0, graphql_4.InputType)()
], GuestCreateInput);
exports.GuestCreateInput = GuestCreateInput;
let GuestGroupByArgs = class GuestGroupByArgs {
};
__decorate([
    (0, graphql_1.Field)(() => GuestWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => GuestWhereInput)
], GuestGroupByArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [GuestOrderByWithAggregationInput], { nullable: true })
], GuestGroupByArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => [GuestScalarFieldEnum], { nullable: false })
], GuestGroupByArgs.prototype, "by", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestScalarWhereWithAggregatesInput, { nullable: true })
], GuestGroupByArgs.prototype, "having", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], GuestGroupByArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], GuestGroupByArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestCountAggregateInput, { nullable: true })
], GuestGroupByArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestMinAggregateInput, { nullable: true })
], GuestGroupByArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestMaxAggregateInput, { nullable: true })
], GuestGroupByArgs.prototype, "_max", void 0);
GuestGroupByArgs = __decorate([
    (0, graphql_2.ArgsType)()
], GuestGroupByArgs);
exports.GuestGroupByArgs = GuestGroupByArgs;
let GuestGroupBy = class GuestGroupBy {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], GuestGroupBy.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestGroupBy.prototype, "category1", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestGroupBy.prototype, "category2", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestGroupBy.prototype, "personInCharge", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestGroupBy.prototype, "class", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestGroupBy.prototype, "seat", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestGroupBy.prototype, "rejectionReason", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestGroupBy.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], GuestGroupBy.prototype, "checkInAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => ConfirmationStatus, { nullable: false })
], GuestGroupBy.prototype, "confirmationStatus", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestCountAggregate, { nullable: true })
], GuestGroupBy.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestMinAggregate, { nullable: true })
], GuestGroupBy.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestMaxAggregate, { nullable: true })
], GuestGroupBy.prototype, "_max", void 0);
GuestGroupBy = __decorate([
    (0, graphql_5.ObjectType)()
], GuestGroupBy);
exports.GuestGroupBy = GuestGroupBy;
let GuestMaxAggregateInput = class GuestMaxAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], GuestMaxAggregateInput.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], GuestMaxAggregateInput.prototype, "category1", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], GuestMaxAggregateInput.prototype, "category2", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], GuestMaxAggregateInput.prototype, "personInCharge", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], GuestMaxAggregateInput.prototype, "class", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], GuestMaxAggregateInput.prototype, "seat", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], GuestMaxAggregateInput.prototype, "rejectionReason", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], GuestMaxAggregateInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], GuestMaxAggregateInput.prototype, "checkInAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], GuestMaxAggregateInput.prototype, "confirmationStatus", void 0);
GuestMaxAggregateInput = __decorate([
    (0, graphql_4.InputType)()
], GuestMaxAggregateInput);
exports.GuestMaxAggregateInput = GuestMaxAggregateInput;
let GuestMaxAggregate = class GuestMaxAggregate {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestMaxAggregate.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestMaxAggregate.prototype, "category1", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestMaxAggregate.prototype, "category2", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestMaxAggregate.prototype, "personInCharge", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestMaxAggregate.prototype, "class", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestMaxAggregate.prototype, "seat", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestMaxAggregate.prototype, "rejectionReason", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestMaxAggregate.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], GuestMaxAggregate.prototype, "checkInAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => ConfirmationStatus, { nullable: true })
], GuestMaxAggregate.prototype, "confirmationStatus", void 0);
GuestMaxAggregate = __decorate([
    (0, graphql_5.ObjectType)()
], GuestMaxAggregate);
exports.GuestMaxAggregate = GuestMaxAggregate;
let GuestMaxOrderByAggregateInput = class GuestMaxOrderByAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], GuestMaxOrderByAggregateInput.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], GuestMaxOrderByAggregateInput.prototype, "category1", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], GuestMaxOrderByAggregateInput.prototype, "category2", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], GuestMaxOrderByAggregateInput.prototype, "personInCharge", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], GuestMaxOrderByAggregateInput.prototype, "class", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], GuestMaxOrderByAggregateInput.prototype, "seat", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], GuestMaxOrderByAggregateInput.prototype, "rejectionReason", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], GuestMaxOrderByAggregateInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], GuestMaxOrderByAggregateInput.prototype, "checkInAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], GuestMaxOrderByAggregateInput.prototype, "confirmationStatus", void 0);
GuestMaxOrderByAggregateInput = __decorate([
    (0, graphql_4.InputType)()
], GuestMaxOrderByAggregateInput);
exports.GuestMaxOrderByAggregateInput = GuestMaxOrderByAggregateInput;
let GuestMinAggregateInput = class GuestMinAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], GuestMinAggregateInput.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], GuestMinAggregateInput.prototype, "category1", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], GuestMinAggregateInput.prototype, "category2", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], GuestMinAggregateInput.prototype, "personInCharge", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], GuestMinAggregateInput.prototype, "class", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], GuestMinAggregateInput.prototype, "seat", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], GuestMinAggregateInput.prototype, "rejectionReason", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], GuestMinAggregateInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], GuestMinAggregateInput.prototype, "checkInAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], GuestMinAggregateInput.prototype, "confirmationStatus", void 0);
GuestMinAggregateInput = __decorate([
    (0, graphql_4.InputType)()
], GuestMinAggregateInput);
exports.GuestMinAggregateInput = GuestMinAggregateInput;
let GuestMinAggregate = class GuestMinAggregate {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestMinAggregate.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestMinAggregate.prototype, "category1", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestMinAggregate.prototype, "category2", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestMinAggregate.prototype, "personInCharge", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestMinAggregate.prototype, "class", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestMinAggregate.prototype, "seat", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestMinAggregate.prototype, "rejectionReason", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestMinAggregate.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], GuestMinAggregate.prototype, "checkInAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => ConfirmationStatus, { nullable: true })
], GuestMinAggregate.prototype, "confirmationStatus", void 0);
GuestMinAggregate = __decorate([
    (0, graphql_5.ObjectType)()
], GuestMinAggregate);
exports.GuestMinAggregate = GuestMinAggregate;
let GuestMinOrderByAggregateInput = class GuestMinOrderByAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], GuestMinOrderByAggregateInput.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], GuestMinOrderByAggregateInput.prototype, "category1", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], GuestMinOrderByAggregateInput.prototype, "category2", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], GuestMinOrderByAggregateInput.prototype, "personInCharge", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], GuestMinOrderByAggregateInput.prototype, "class", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], GuestMinOrderByAggregateInput.prototype, "seat", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], GuestMinOrderByAggregateInput.prototype, "rejectionReason", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], GuestMinOrderByAggregateInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], GuestMinOrderByAggregateInput.prototype, "checkInAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], GuestMinOrderByAggregateInput.prototype, "confirmationStatus", void 0);
GuestMinOrderByAggregateInput = __decorate([
    (0, graphql_4.InputType)()
], GuestMinOrderByAggregateInput);
exports.GuestMinOrderByAggregateInput = GuestMinOrderByAggregateInput;
let GuestNullableRelationFilter = class GuestNullableRelationFilter {
};
__decorate([
    (0, graphql_1.Field)(() => GuestWhereInput, { nullable: true })
], GuestNullableRelationFilter.prototype, "is", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestWhereInput, { nullable: true })
], GuestNullableRelationFilter.prototype, "isNot", void 0);
GuestNullableRelationFilter = __decorate([
    (0, graphql_4.InputType)()
], GuestNullableRelationFilter);
exports.GuestNullableRelationFilter = GuestNullableRelationFilter;
let GuestOrderByWithAggregationInput = class GuestOrderByWithAggregationInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], GuestOrderByWithAggregationInput.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrderInput, { nullable: true })
], GuestOrderByWithAggregationInput.prototype, "category1", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrderInput, { nullable: true })
], GuestOrderByWithAggregationInput.prototype, "category2", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrderInput, { nullable: true })
], GuestOrderByWithAggregationInput.prototype, "personInCharge", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrderInput, { nullable: true })
], GuestOrderByWithAggregationInput.prototype, "class", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrderInput, { nullable: true })
], GuestOrderByWithAggregationInput.prototype, "seat", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrderInput, { nullable: true })
], GuestOrderByWithAggregationInput.prototype, "rejectionReason", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrderInput, { nullable: true })
], GuestOrderByWithAggregationInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrderInput, { nullable: true })
], GuestOrderByWithAggregationInput.prototype, "checkInAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], GuestOrderByWithAggregationInput.prototype, "confirmationStatus", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestCountOrderByAggregateInput, { nullable: true })
], GuestOrderByWithAggregationInput.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestMaxOrderByAggregateInput, { nullable: true })
], GuestOrderByWithAggregationInput.prototype, "_max", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestMinOrderByAggregateInput, { nullable: true })
], GuestOrderByWithAggregationInput.prototype, "_min", void 0);
GuestOrderByWithAggregationInput = __decorate([
    (0, graphql_4.InputType)()
], GuestOrderByWithAggregationInput);
exports.GuestOrderByWithAggregationInput = GuestOrderByWithAggregationInput;
let GuestOrderByWithRelationInput = class GuestOrderByWithRelationInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], GuestOrderByWithRelationInput.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrderInput, { nullable: true })
], GuestOrderByWithRelationInput.prototype, "category1", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrderInput, { nullable: true })
], GuestOrderByWithRelationInput.prototype, "category2", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrderInput, { nullable: true })
], GuestOrderByWithRelationInput.prototype, "personInCharge", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrderInput, { nullable: true })
], GuestOrderByWithRelationInput.prototype, "class", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrderInput, { nullable: true })
], GuestOrderByWithRelationInput.prototype, "seat", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrderInput, { nullable: true })
], GuestOrderByWithRelationInput.prototype, "rejectionReason", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrderInput, { nullable: true })
], GuestOrderByWithRelationInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrderInput, { nullable: true })
], GuestOrderByWithRelationInput.prototype, "checkInAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], GuestOrderByWithRelationInput.prototype, "confirmationStatus", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserOrderByWithRelationInput, { nullable: true })
], GuestOrderByWithRelationInput.prototype, "user", void 0);
__decorate([
    (0, graphql_1.Field)(() => emailQueueOrderByRelationAggregateInput, { nullable: true })
], GuestOrderByWithRelationInput.prototype, "emailQueue", void 0);
__decorate([
    (0, graphql_1.Field)(() => whatsappQueueOrderByRelationAggregateInput, { nullable: true })
], GuestOrderByWithRelationInput.prototype, "whatsappQueue", void 0);
GuestOrderByWithRelationInput = __decorate([
    (0, graphql_4.InputType)()
], GuestOrderByWithRelationInput);
exports.GuestOrderByWithRelationInput = GuestOrderByWithRelationInput;
let GuestRelationFilter = class GuestRelationFilter {
};
__decorate([
    (0, graphql_1.Field)(() => GuestWhereInput, { nullable: true })
], GuestRelationFilter.prototype, "is", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestWhereInput, { nullable: true })
], GuestRelationFilter.prototype, "isNot", void 0);
GuestRelationFilter = __decorate([
    (0, graphql_4.InputType)()
], GuestRelationFilter);
exports.GuestRelationFilter = GuestRelationFilter;
let GuestScalarWhereWithAggregatesInput = GuestScalarWhereWithAggregatesInput_1 = class GuestScalarWhereWithAggregatesInput {
};
__decorate([
    (0, graphql_1.Field)(() => [GuestScalarWhereWithAggregatesInput_1], { nullable: true })
], GuestScalarWhereWithAggregatesInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [GuestScalarWhereWithAggregatesInput_1], { nullable: true })
], GuestScalarWhereWithAggregatesInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [GuestScalarWhereWithAggregatesInput_1], { nullable: true })
], GuestScalarWhereWithAggregatesInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringWithAggregatesFilter, { nullable: true })
], GuestScalarWhereWithAggregatesInput.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringNullableWithAggregatesFilter, { nullable: true })
], GuestScalarWhereWithAggregatesInput.prototype, "category1", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringNullableWithAggregatesFilter, { nullable: true })
], GuestScalarWhereWithAggregatesInput.prototype, "category2", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringNullableWithAggregatesFilter, { nullable: true })
], GuestScalarWhereWithAggregatesInput.prototype, "personInCharge", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringNullableWithAggregatesFilter, { nullable: true })
], GuestScalarWhereWithAggregatesInput.prototype, "class", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringNullableWithAggregatesFilter, { nullable: true })
], GuestScalarWhereWithAggregatesInput.prototype, "seat", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringNullableWithAggregatesFilter, { nullable: true })
], GuestScalarWhereWithAggregatesInput.prototype, "rejectionReason", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringNullableWithAggregatesFilter, { nullable: true })
], GuestScalarWhereWithAggregatesInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeNullableWithAggregatesFilter, { nullable: true })
], GuestScalarWhereWithAggregatesInput.prototype, "checkInAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => EnumConfirmationStatusWithAggregatesFilter, { nullable: true })
], GuestScalarWhereWithAggregatesInput.prototype, "confirmationStatus", void 0);
GuestScalarWhereWithAggregatesInput = GuestScalarWhereWithAggregatesInput_1 = __decorate([
    (0, graphql_4.InputType)()
], GuestScalarWhereWithAggregatesInput);
exports.GuestScalarWhereWithAggregatesInput = GuestScalarWhereWithAggregatesInput;
let GuestUncheckedCreateNestedOneWithoutUserInput = class GuestUncheckedCreateNestedOneWithoutUserInput {
};
__decorate([
    (0, graphql_1.Field)(() => GuestCreateWithoutUserInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => GuestCreateWithoutUserInput)
], GuestUncheckedCreateNestedOneWithoutUserInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestCreateOrConnectWithoutUserInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => GuestCreateOrConnectWithoutUserInput)
], GuestUncheckedCreateNestedOneWithoutUserInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestWhereUniqueInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => GuestWhereUniqueInput)
], GuestUncheckedCreateNestedOneWithoutUserInput.prototype, "connect", void 0);
GuestUncheckedCreateNestedOneWithoutUserInput = __decorate([
    (0, graphql_4.InputType)()
], GuestUncheckedCreateNestedOneWithoutUserInput);
exports.GuestUncheckedCreateNestedOneWithoutUserInput = GuestUncheckedCreateNestedOneWithoutUserInput;
let GuestUncheckedCreateWithoutEmailQueueInput = class GuestUncheckedCreateWithoutEmailQueueInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], GuestUncheckedCreateWithoutEmailQueueInput.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestUncheckedCreateWithoutEmailQueueInput.prototype, "category1", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestUncheckedCreateWithoutEmailQueueInput.prototype, "category2", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestUncheckedCreateWithoutEmailQueueInput.prototype, "personInCharge", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestUncheckedCreateWithoutEmailQueueInput.prototype, "class", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestUncheckedCreateWithoutEmailQueueInput.prototype, "seat", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestUncheckedCreateWithoutEmailQueueInput.prototype, "rejectionReason", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestUncheckedCreateWithoutEmailQueueInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], GuestUncheckedCreateWithoutEmailQueueInput.prototype, "checkInAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => ConfirmationStatus, { nullable: true })
], GuestUncheckedCreateWithoutEmailQueueInput.prototype, "confirmationStatus", void 0);
__decorate([
    (0, graphql_1.Field)(() => whatsappQueueUncheckedCreateNestedManyWithoutGuestInput, { nullable: true })
], GuestUncheckedCreateWithoutEmailQueueInput.prototype, "whatsappQueue", void 0);
GuestUncheckedCreateWithoutEmailQueueInput = __decorate([
    (0, graphql_4.InputType)()
], GuestUncheckedCreateWithoutEmailQueueInput);
exports.GuestUncheckedCreateWithoutEmailQueueInput = GuestUncheckedCreateWithoutEmailQueueInput;
let GuestUncheckedCreateWithoutUserInput = class GuestUncheckedCreateWithoutUserInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestUncheckedCreateWithoutUserInput.prototype, "category1", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestUncheckedCreateWithoutUserInput.prototype, "category2", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestUncheckedCreateWithoutUserInput.prototype, "personInCharge", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestUncheckedCreateWithoutUserInput.prototype, "class", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestUncheckedCreateWithoutUserInput.prototype, "seat", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestUncheckedCreateWithoutUserInput.prototype, "rejectionReason", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestUncheckedCreateWithoutUserInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], GuestUncheckedCreateWithoutUserInput.prototype, "checkInAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => ConfirmationStatus, { nullable: true })
], GuestUncheckedCreateWithoutUserInput.prototype, "confirmationStatus", void 0);
__decorate([
    (0, graphql_1.Field)(() => emailQueueUncheckedCreateNestedManyWithoutGuestInput, { nullable: true })
], GuestUncheckedCreateWithoutUserInput.prototype, "emailQueue", void 0);
__decorate([
    (0, graphql_1.Field)(() => whatsappQueueUncheckedCreateNestedManyWithoutGuestInput, { nullable: true })
], GuestUncheckedCreateWithoutUserInput.prototype, "whatsappQueue", void 0);
GuestUncheckedCreateWithoutUserInput = __decorate([
    (0, graphql_4.InputType)()
], GuestUncheckedCreateWithoutUserInput);
exports.GuestUncheckedCreateWithoutUserInput = GuestUncheckedCreateWithoutUserInput;
let GuestUncheckedCreateWithoutWhatsappQueueInput = class GuestUncheckedCreateWithoutWhatsappQueueInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], GuestUncheckedCreateWithoutWhatsappQueueInput.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestUncheckedCreateWithoutWhatsappQueueInput.prototype, "category1", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestUncheckedCreateWithoutWhatsappQueueInput.prototype, "category2", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestUncheckedCreateWithoutWhatsappQueueInput.prototype, "personInCharge", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestUncheckedCreateWithoutWhatsappQueueInput.prototype, "class", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestUncheckedCreateWithoutWhatsappQueueInput.prototype, "seat", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestUncheckedCreateWithoutWhatsappQueueInput.prototype, "rejectionReason", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestUncheckedCreateWithoutWhatsappQueueInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], GuestUncheckedCreateWithoutWhatsappQueueInput.prototype, "checkInAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => ConfirmationStatus, { nullable: true })
], GuestUncheckedCreateWithoutWhatsappQueueInput.prototype, "confirmationStatus", void 0);
__decorate([
    (0, graphql_1.Field)(() => emailQueueUncheckedCreateNestedManyWithoutGuestInput, { nullable: true })
], GuestUncheckedCreateWithoutWhatsappQueueInput.prototype, "emailQueue", void 0);
GuestUncheckedCreateWithoutWhatsappQueueInput = __decorate([
    (0, graphql_4.InputType)()
], GuestUncheckedCreateWithoutWhatsappQueueInput);
exports.GuestUncheckedCreateWithoutWhatsappQueueInput = GuestUncheckedCreateWithoutWhatsappQueueInput;
let GuestUncheckedCreateInput = class GuestUncheckedCreateInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], GuestUncheckedCreateInput.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestUncheckedCreateInput.prototype, "category1", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestUncheckedCreateInput.prototype, "category2", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestUncheckedCreateInput.prototype, "personInCharge", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestUncheckedCreateInput.prototype, "class", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestUncheckedCreateInput.prototype, "seat", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestUncheckedCreateInput.prototype, "rejectionReason", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestUncheckedCreateInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], GuestUncheckedCreateInput.prototype, "checkInAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => ConfirmationStatus, { nullable: true })
], GuestUncheckedCreateInput.prototype, "confirmationStatus", void 0);
__decorate([
    (0, graphql_1.Field)(() => emailQueueUncheckedCreateNestedManyWithoutGuestInput, { nullable: true })
], GuestUncheckedCreateInput.prototype, "emailQueue", void 0);
__decorate([
    (0, graphql_1.Field)(() => whatsappQueueUncheckedCreateNestedManyWithoutGuestInput, { nullable: true })
], GuestUncheckedCreateInput.prototype, "whatsappQueue", void 0);
GuestUncheckedCreateInput = __decorate([
    (0, graphql_4.InputType)()
], GuestUncheckedCreateInput);
exports.GuestUncheckedCreateInput = GuestUncheckedCreateInput;
let GuestUncheckedUpdateManyInput = class GuestUncheckedUpdateManyInput {
};
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateManyInput.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateManyInput.prototype, "category1", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateManyInput.prototype, "category2", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateManyInput.prototype, "personInCharge", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateManyInput.prototype, "class", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateManyInput.prototype, "seat", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateManyInput.prototype, "rejectionReason", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateManyInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateManyInput.prototype, "checkInAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => EnumConfirmationStatusFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateManyInput.prototype, "confirmationStatus", void 0);
GuestUncheckedUpdateManyInput = __decorate([
    (0, graphql_4.InputType)()
], GuestUncheckedUpdateManyInput);
exports.GuestUncheckedUpdateManyInput = GuestUncheckedUpdateManyInput;
let GuestUncheckedUpdateOneWithoutUserNestedInput = class GuestUncheckedUpdateOneWithoutUserNestedInput {
};
__decorate([
    (0, graphql_1.Field)(() => GuestCreateWithoutUserInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => GuestCreateWithoutUserInput)
], GuestUncheckedUpdateOneWithoutUserNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestCreateOrConnectWithoutUserInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => GuestCreateOrConnectWithoutUserInput)
], GuestUncheckedUpdateOneWithoutUserNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestUpsertWithoutUserInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => GuestUpsertWithoutUserInput)
], GuestUncheckedUpdateOneWithoutUserNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => GuestWhereInput)
], GuestUncheckedUpdateOneWithoutUserNestedInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => GuestWhereInput)
], GuestUncheckedUpdateOneWithoutUserNestedInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestWhereUniqueInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => GuestWhereUniqueInput)
], GuestUncheckedUpdateOneWithoutUserNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestUpdateToOneWithWhereWithoutUserInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => GuestUpdateToOneWithWhereWithoutUserInput)
], GuestUncheckedUpdateOneWithoutUserNestedInput.prototype, "update", void 0);
GuestUncheckedUpdateOneWithoutUserNestedInput = __decorate([
    (0, graphql_4.InputType)()
], GuestUncheckedUpdateOneWithoutUserNestedInput);
exports.GuestUncheckedUpdateOneWithoutUserNestedInput = GuestUncheckedUpdateOneWithoutUserNestedInput;
let GuestUncheckedUpdateWithoutEmailQueueInput = class GuestUncheckedUpdateWithoutEmailQueueInput {
};
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutEmailQueueInput.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutEmailQueueInput.prototype, "category1", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutEmailQueueInput.prototype, "category2", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutEmailQueueInput.prototype, "personInCharge", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutEmailQueueInput.prototype, "class", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutEmailQueueInput.prototype, "seat", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutEmailQueueInput.prototype, "rejectionReason", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutEmailQueueInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutEmailQueueInput.prototype, "checkInAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => EnumConfirmationStatusFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutEmailQueueInput.prototype, "confirmationStatus", void 0);
__decorate([
    (0, graphql_1.Field)(() => whatsappQueueUncheckedUpdateManyWithoutGuestNestedInput, { nullable: true })
], GuestUncheckedUpdateWithoutEmailQueueInput.prototype, "whatsappQueue", void 0);
GuestUncheckedUpdateWithoutEmailQueueInput = __decorate([
    (0, graphql_4.InputType)()
], GuestUncheckedUpdateWithoutEmailQueueInput);
exports.GuestUncheckedUpdateWithoutEmailQueueInput = GuestUncheckedUpdateWithoutEmailQueueInput;
let GuestUncheckedUpdateWithoutUserInput = class GuestUncheckedUpdateWithoutUserInput {
};
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutUserInput.prototype, "category1", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutUserInput.prototype, "category2", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutUserInput.prototype, "personInCharge", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutUserInput.prototype, "class", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutUserInput.prototype, "seat", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutUserInput.prototype, "rejectionReason", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutUserInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutUserInput.prototype, "checkInAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => EnumConfirmationStatusFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutUserInput.prototype, "confirmationStatus", void 0);
__decorate([
    (0, graphql_1.Field)(() => emailQueueUncheckedUpdateManyWithoutGuestNestedInput, { nullable: true })
], GuestUncheckedUpdateWithoutUserInput.prototype, "emailQueue", void 0);
__decorate([
    (0, graphql_1.Field)(() => whatsappQueueUncheckedUpdateManyWithoutGuestNestedInput, { nullable: true })
], GuestUncheckedUpdateWithoutUserInput.prototype, "whatsappQueue", void 0);
GuestUncheckedUpdateWithoutUserInput = __decorate([
    (0, graphql_4.InputType)()
], GuestUncheckedUpdateWithoutUserInput);
exports.GuestUncheckedUpdateWithoutUserInput = GuestUncheckedUpdateWithoutUserInput;
let GuestUncheckedUpdateWithoutWhatsappQueueInput = class GuestUncheckedUpdateWithoutWhatsappQueueInput {
};
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutWhatsappQueueInput.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutWhatsappQueueInput.prototype, "category1", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutWhatsappQueueInput.prototype, "category2", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutWhatsappQueueInput.prototype, "personInCharge", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutWhatsappQueueInput.prototype, "class", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutWhatsappQueueInput.prototype, "seat", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutWhatsappQueueInput.prototype, "rejectionReason", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutWhatsappQueueInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutWhatsappQueueInput.prototype, "checkInAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => EnumConfirmationStatusFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutWhatsappQueueInput.prototype, "confirmationStatus", void 0);
__decorate([
    (0, graphql_1.Field)(() => emailQueueUncheckedUpdateManyWithoutGuestNestedInput, { nullable: true })
], GuestUncheckedUpdateWithoutWhatsappQueueInput.prototype, "emailQueue", void 0);
GuestUncheckedUpdateWithoutWhatsappQueueInput = __decorate([
    (0, graphql_4.InputType)()
], GuestUncheckedUpdateWithoutWhatsappQueueInput);
exports.GuestUncheckedUpdateWithoutWhatsappQueueInput = GuestUncheckedUpdateWithoutWhatsappQueueInput;
let GuestUncheckedUpdateInput = class GuestUncheckedUpdateInput {
};
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateInput.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateInput.prototype, "category1", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateInput.prototype, "category2", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateInput.prototype, "personInCharge", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateInput.prototype, "class", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateInput.prototype, "seat", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateInput.prototype, "rejectionReason", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateInput.prototype, "checkInAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => EnumConfirmationStatusFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateInput.prototype, "confirmationStatus", void 0);
__decorate([
    (0, graphql_1.Field)(() => emailQueueUncheckedUpdateManyWithoutGuestNestedInput, { nullable: true })
], GuestUncheckedUpdateInput.prototype, "emailQueue", void 0);
__decorate([
    (0, graphql_1.Field)(() => whatsappQueueUncheckedUpdateManyWithoutGuestNestedInput, { nullable: true })
], GuestUncheckedUpdateInput.prototype, "whatsappQueue", void 0);
GuestUncheckedUpdateInput = __decorate([
    (0, graphql_4.InputType)()
], GuestUncheckedUpdateInput);
exports.GuestUncheckedUpdateInput = GuestUncheckedUpdateInput;
let GuestUpdateManyMutationInput = class GuestUpdateManyMutationInput {
};
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateManyMutationInput.prototype, "category1", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateManyMutationInput.prototype, "category2", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateManyMutationInput.prototype, "personInCharge", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateManyMutationInput.prototype, "class", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateManyMutationInput.prototype, "seat", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateManyMutationInput.prototype, "rejectionReason", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateManyMutationInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateManyMutationInput.prototype, "checkInAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => EnumConfirmationStatusFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateManyMutationInput.prototype, "confirmationStatus", void 0);
GuestUpdateManyMutationInput = __decorate([
    (0, graphql_4.InputType)()
], GuestUpdateManyMutationInput);
exports.GuestUpdateManyMutationInput = GuestUpdateManyMutationInput;
let GuestUpdateOneRequiredWithoutEmailQueueNestedInput = class GuestUpdateOneRequiredWithoutEmailQueueNestedInput {
};
__decorate([
    (0, graphql_1.Field)(() => GuestCreateWithoutEmailQueueInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => GuestCreateWithoutEmailQueueInput)
], GuestUpdateOneRequiredWithoutEmailQueueNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestCreateOrConnectWithoutEmailQueueInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => GuestCreateOrConnectWithoutEmailQueueInput)
], GuestUpdateOneRequiredWithoutEmailQueueNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestUpsertWithoutEmailQueueInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => GuestUpsertWithoutEmailQueueInput)
], GuestUpdateOneRequiredWithoutEmailQueueNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestWhereUniqueInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => GuestWhereUniqueInput)
], GuestUpdateOneRequiredWithoutEmailQueueNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestUpdateToOneWithWhereWithoutEmailQueueInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => GuestUpdateToOneWithWhereWithoutEmailQueueInput)
], GuestUpdateOneRequiredWithoutEmailQueueNestedInput.prototype, "update", void 0);
GuestUpdateOneRequiredWithoutEmailQueueNestedInput = __decorate([
    (0, graphql_4.InputType)()
], GuestUpdateOneRequiredWithoutEmailQueueNestedInput);
exports.GuestUpdateOneRequiredWithoutEmailQueueNestedInput = GuestUpdateOneRequiredWithoutEmailQueueNestedInput;
let GuestUpdateOneRequiredWithoutWhatsappQueueNestedInput = class GuestUpdateOneRequiredWithoutWhatsappQueueNestedInput {
};
__decorate([
    (0, graphql_1.Field)(() => GuestCreateWithoutWhatsappQueueInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => GuestCreateWithoutWhatsappQueueInput)
], GuestUpdateOneRequiredWithoutWhatsappQueueNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestCreateOrConnectWithoutWhatsappQueueInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => GuestCreateOrConnectWithoutWhatsappQueueInput)
], GuestUpdateOneRequiredWithoutWhatsappQueueNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestUpsertWithoutWhatsappQueueInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => GuestUpsertWithoutWhatsappQueueInput)
], GuestUpdateOneRequiredWithoutWhatsappQueueNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestWhereUniqueInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => GuestWhereUniqueInput)
], GuestUpdateOneRequiredWithoutWhatsappQueueNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestUpdateToOneWithWhereWithoutWhatsappQueueInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => GuestUpdateToOneWithWhereWithoutWhatsappQueueInput)
], GuestUpdateOneRequiredWithoutWhatsappQueueNestedInput.prototype, "update", void 0);
GuestUpdateOneRequiredWithoutWhatsappQueueNestedInput = __decorate([
    (0, graphql_4.InputType)()
], GuestUpdateOneRequiredWithoutWhatsappQueueNestedInput);
exports.GuestUpdateOneRequiredWithoutWhatsappQueueNestedInput = GuestUpdateOneRequiredWithoutWhatsappQueueNestedInput;
let GuestUpdateOneWithoutUserNestedInput = class GuestUpdateOneWithoutUserNestedInput {
};
__decorate([
    (0, graphql_1.Field)(() => GuestCreateWithoutUserInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => GuestCreateWithoutUserInput)
], GuestUpdateOneWithoutUserNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestCreateOrConnectWithoutUserInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => GuestCreateOrConnectWithoutUserInput)
], GuestUpdateOneWithoutUserNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestUpsertWithoutUserInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => GuestUpsertWithoutUserInput)
], GuestUpdateOneWithoutUserNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => GuestWhereInput)
], GuestUpdateOneWithoutUserNestedInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => GuestWhereInput)
], GuestUpdateOneWithoutUserNestedInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestWhereUniqueInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => GuestWhereUniqueInput)
], GuestUpdateOneWithoutUserNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestUpdateToOneWithWhereWithoutUserInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => GuestUpdateToOneWithWhereWithoutUserInput)
], GuestUpdateOneWithoutUserNestedInput.prototype, "update", void 0);
GuestUpdateOneWithoutUserNestedInput = __decorate([
    (0, graphql_4.InputType)()
], GuestUpdateOneWithoutUserNestedInput);
exports.GuestUpdateOneWithoutUserNestedInput = GuestUpdateOneWithoutUserNestedInput;
let GuestUpdateToOneWithWhereWithoutEmailQueueInput = class GuestUpdateToOneWithWhereWithoutEmailQueueInput {
};
__decorate([
    (0, graphql_1.Field)(() => GuestWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => GuestWhereInput)
], GuestUpdateToOneWithWhereWithoutEmailQueueInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestUpdateWithoutEmailQueueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => GuestUpdateWithoutEmailQueueInput)
], GuestUpdateToOneWithWhereWithoutEmailQueueInput.prototype, "data", void 0);
GuestUpdateToOneWithWhereWithoutEmailQueueInput = __decorate([
    (0, graphql_4.InputType)()
], GuestUpdateToOneWithWhereWithoutEmailQueueInput);
exports.GuestUpdateToOneWithWhereWithoutEmailQueueInput = GuestUpdateToOneWithWhereWithoutEmailQueueInput;
let GuestUpdateToOneWithWhereWithoutUserInput = class GuestUpdateToOneWithWhereWithoutUserInput {
};
__decorate([
    (0, graphql_1.Field)(() => GuestWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => GuestWhereInput)
], GuestUpdateToOneWithWhereWithoutUserInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestUpdateWithoutUserInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => GuestUpdateWithoutUserInput)
], GuestUpdateToOneWithWhereWithoutUserInput.prototype, "data", void 0);
GuestUpdateToOneWithWhereWithoutUserInput = __decorate([
    (0, graphql_4.InputType)()
], GuestUpdateToOneWithWhereWithoutUserInput);
exports.GuestUpdateToOneWithWhereWithoutUserInput = GuestUpdateToOneWithWhereWithoutUserInput;
let GuestUpdateToOneWithWhereWithoutWhatsappQueueInput = class GuestUpdateToOneWithWhereWithoutWhatsappQueueInput {
};
__decorate([
    (0, graphql_1.Field)(() => GuestWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => GuestWhereInput)
], GuestUpdateToOneWithWhereWithoutWhatsappQueueInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestUpdateWithoutWhatsappQueueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => GuestUpdateWithoutWhatsappQueueInput)
], GuestUpdateToOneWithWhereWithoutWhatsappQueueInput.prototype, "data", void 0);
GuestUpdateToOneWithWhereWithoutWhatsappQueueInput = __decorate([
    (0, graphql_4.InputType)()
], GuestUpdateToOneWithWhereWithoutWhatsappQueueInput);
exports.GuestUpdateToOneWithWhereWithoutWhatsappQueueInput = GuestUpdateToOneWithWhereWithoutWhatsappQueueInput;
let GuestUpdateWithoutEmailQueueInput = class GuestUpdateWithoutEmailQueueInput {
};
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateWithoutEmailQueueInput.prototype, "category1", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateWithoutEmailQueueInput.prototype, "category2", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateWithoutEmailQueueInput.prototype, "personInCharge", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateWithoutEmailQueueInput.prototype, "class", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateWithoutEmailQueueInput.prototype, "seat", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateWithoutEmailQueueInput.prototype, "rejectionReason", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateWithoutEmailQueueInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateWithoutEmailQueueInput.prototype, "checkInAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => EnumConfirmationStatusFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateWithoutEmailQueueInput.prototype, "confirmationStatus", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserUpdateOneRequiredWithoutGuestInfoNestedInput, { nullable: true })
], GuestUpdateWithoutEmailQueueInput.prototype, "user", void 0);
__decorate([
    (0, graphql_1.Field)(() => whatsappQueueUpdateManyWithoutGuestNestedInput, { nullable: true })
], GuestUpdateWithoutEmailQueueInput.prototype, "whatsappQueue", void 0);
GuestUpdateWithoutEmailQueueInput = __decorate([
    (0, graphql_4.InputType)()
], GuestUpdateWithoutEmailQueueInput);
exports.GuestUpdateWithoutEmailQueueInput = GuestUpdateWithoutEmailQueueInput;
let GuestUpdateWithoutUserInput = class GuestUpdateWithoutUserInput {
};
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateWithoutUserInput.prototype, "category1", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateWithoutUserInput.prototype, "category2", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateWithoutUserInput.prototype, "personInCharge", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateWithoutUserInput.prototype, "class", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateWithoutUserInput.prototype, "seat", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateWithoutUserInput.prototype, "rejectionReason", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateWithoutUserInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateWithoutUserInput.prototype, "checkInAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => EnumConfirmationStatusFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateWithoutUserInput.prototype, "confirmationStatus", void 0);
__decorate([
    (0, graphql_1.Field)(() => emailQueueUpdateManyWithoutGuestNestedInput, { nullable: true })
], GuestUpdateWithoutUserInput.prototype, "emailQueue", void 0);
__decorate([
    (0, graphql_1.Field)(() => whatsappQueueUpdateManyWithoutGuestNestedInput, { nullable: true })
], GuestUpdateWithoutUserInput.prototype, "whatsappQueue", void 0);
GuestUpdateWithoutUserInput = __decorate([
    (0, graphql_4.InputType)()
], GuestUpdateWithoutUserInput);
exports.GuestUpdateWithoutUserInput = GuestUpdateWithoutUserInput;
let GuestUpdateWithoutWhatsappQueueInput = class GuestUpdateWithoutWhatsappQueueInput {
};
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateWithoutWhatsappQueueInput.prototype, "category1", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateWithoutWhatsappQueueInput.prototype, "category2", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateWithoutWhatsappQueueInput.prototype, "personInCharge", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateWithoutWhatsappQueueInput.prototype, "class", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateWithoutWhatsappQueueInput.prototype, "seat", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateWithoutWhatsappQueueInput.prototype, "rejectionReason", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateWithoutWhatsappQueueInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateWithoutWhatsappQueueInput.prototype, "checkInAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => EnumConfirmationStatusFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateWithoutWhatsappQueueInput.prototype, "confirmationStatus", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserUpdateOneRequiredWithoutGuestInfoNestedInput, { nullable: true })
], GuestUpdateWithoutWhatsappQueueInput.prototype, "user", void 0);
__decorate([
    (0, graphql_1.Field)(() => emailQueueUpdateManyWithoutGuestNestedInput, { nullable: true })
], GuestUpdateWithoutWhatsappQueueInput.prototype, "emailQueue", void 0);
GuestUpdateWithoutWhatsappQueueInput = __decorate([
    (0, graphql_4.InputType)()
], GuestUpdateWithoutWhatsappQueueInput);
exports.GuestUpdateWithoutWhatsappQueueInput = GuestUpdateWithoutWhatsappQueueInput;
let GuestUpdateInput = class GuestUpdateInput {
};
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateInput.prototype, "category1", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateInput.prototype, "category2", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateInput.prototype, "personInCharge", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateInput.prototype, "class", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateInput.prototype, "seat", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateInput.prototype, "rejectionReason", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateInput.prototype, "checkInAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => EnumConfirmationStatusFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateInput.prototype, "confirmationStatus", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserUpdateOneRequiredWithoutGuestInfoNestedInput, { nullable: true })
], GuestUpdateInput.prototype, "user", void 0);
__decorate([
    (0, graphql_1.Field)(() => emailQueueUpdateManyWithoutGuestNestedInput, { nullable: true })
], GuestUpdateInput.prototype, "emailQueue", void 0);
__decorate([
    (0, graphql_1.Field)(() => whatsappQueueUpdateManyWithoutGuestNestedInput, { nullable: true })
], GuestUpdateInput.prototype, "whatsappQueue", void 0);
GuestUpdateInput = __decorate([
    (0, graphql_4.InputType)()
], GuestUpdateInput);
exports.GuestUpdateInput = GuestUpdateInput;
let GuestUpsertWithoutEmailQueueInput = class GuestUpsertWithoutEmailQueueInput {
};
__decorate([
    (0, graphql_1.Field)(() => GuestUpdateWithoutEmailQueueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => GuestUpdateWithoutEmailQueueInput)
], GuestUpsertWithoutEmailQueueInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestCreateWithoutEmailQueueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => GuestCreateWithoutEmailQueueInput)
], GuestUpsertWithoutEmailQueueInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => GuestWhereInput)
], GuestUpsertWithoutEmailQueueInput.prototype, "where", void 0);
GuestUpsertWithoutEmailQueueInput = __decorate([
    (0, graphql_4.InputType)()
], GuestUpsertWithoutEmailQueueInput);
exports.GuestUpsertWithoutEmailQueueInput = GuestUpsertWithoutEmailQueueInput;
let GuestUpsertWithoutUserInput = class GuestUpsertWithoutUserInput {
};
__decorate([
    (0, graphql_1.Field)(() => GuestUpdateWithoutUserInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => GuestUpdateWithoutUserInput)
], GuestUpsertWithoutUserInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestCreateWithoutUserInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => GuestCreateWithoutUserInput)
], GuestUpsertWithoutUserInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => GuestWhereInput)
], GuestUpsertWithoutUserInput.prototype, "where", void 0);
GuestUpsertWithoutUserInput = __decorate([
    (0, graphql_4.InputType)()
], GuestUpsertWithoutUserInput);
exports.GuestUpsertWithoutUserInput = GuestUpsertWithoutUserInput;
let GuestUpsertWithoutWhatsappQueueInput = class GuestUpsertWithoutWhatsappQueueInput {
};
__decorate([
    (0, graphql_1.Field)(() => GuestUpdateWithoutWhatsappQueueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => GuestUpdateWithoutWhatsappQueueInput)
], GuestUpsertWithoutWhatsappQueueInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestCreateWithoutWhatsappQueueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => GuestCreateWithoutWhatsappQueueInput)
], GuestUpsertWithoutWhatsappQueueInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => GuestWhereInput)
], GuestUpsertWithoutWhatsappQueueInput.prototype, "where", void 0);
GuestUpsertWithoutWhatsappQueueInput = __decorate([
    (0, graphql_4.InputType)()
], GuestUpsertWithoutWhatsappQueueInput);
exports.GuestUpsertWithoutWhatsappQueueInput = GuestUpsertWithoutWhatsappQueueInput;
let GuestWhereUniqueInput = class GuestWhereUniqueInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestWhereUniqueInput.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => [GuestWhereInput], { nullable: true })
], GuestWhereUniqueInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [GuestWhereInput], { nullable: true })
], GuestWhereUniqueInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [GuestWhereInput], { nullable: true })
], GuestWhereUniqueInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringNullableFilter, { nullable: true })
], GuestWhereUniqueInput.prototype, "category1", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringNullableFilter, { nullable: true })
], GuestWhereUniqueInput.prototype, "category2", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringNullableFilter, { nullable: true })
], GuestWhereUniqueInput.prototype, "personInCharge", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringNullableFilter, { nullable: true })
], GuestWhereUniqueInput.prototype, "class", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringNullableFilter, { nullable: true })
], GuestWhereUniqueInput.prototype, "seat", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringNullableFilter, { nullable: true })
], GuestWhereUniqueInput.prototype, "rejectionReason", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringNullableFilter, { nullable: true })
], GuestWhereUniqueInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeNullableFilter, { nullable: true })
], GuestWhereUniqueInput.prototype, "checkInAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => EnumConfirmationStatusFilter, { nullable: true })
], GuestWhereUniqueInput.prototype, "confirmationStatus", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserRelationFilter, { nullable: true })
], GuestWhereUniqueInput.prototype, "user", void 0);
__decorate([
    (0, graphql_1.Field)(() => EmailQueueListRelationFilter, { nullable: true })
], GuestWhereUniqueInput.prototype, "emailQueue", void 0);
__decorate([
    (0, graphql_1.Field)(() => WhatsappQueueListRelationFilter, { nullable: true })
], GuestWhereUniqueInput.prototype, "whatsappQueue", void 0);
GuestWhereUniqueInput = __decorate([
    (0, graphql_4.InputType)()
], GuestWhereUniqueInput);
exports.GuestWhereUniqueInput = GuestWhereUniqueInput;
let GuestWhereInput = GuestWhereInput_1 = class GuestWhereInput {
};
__decorate([
    (0, graphql_1.Field)(() => [GuestWhereInput_1], { nullable: true })
], GuestWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [GuestWhereInput_1], { nullable: true })
], GuestWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [GuestWhereInput_1], { nullable: true })
], GuestWhereInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFilter, { nullable: true })
], GuestWhereInput.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringNullableFilter, { nullable: true })
], GuestWhereInput.prototype, "category1", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringNullableFilter, { nullable: true })
], GuestWhereInput.prototype, "category2", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringNullableFilter, { nullable: true })
], GuestWhereInput.prototype, "personInCharge", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringNullableFilter, { nullable: true })
], GuestWhereInput.prototype, "class", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringNullableFilter, { nullable: true })
], GuestWhereInput.prototype, "seat", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringNullableFilter, { nullable: true })
], GuestWhereInput.prototype, "rejectionReason", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringNullableFilter, { nullable: true })
], GuestWhereInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeNullableFilter, { nullable: true })
], GuestWhereInput.prototype, "checkInAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => EnumConfirmationStatusFilter, { nullable: true })
], GuestWhereInput.prototype, "confirmationStatus", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserRelationFilter, { nullable: true })
], GuestWhereInput.prototype, "user", void 0);
__decorate([
    (0, graphql_1.Field)(() => EmailQueueListRelationFilter, { nullable: true })
], GuestWhereInput.prototype, "emailQueue", void 0);
__decorate([
    (0, graphql_1.Field)(() => WhatsappQueueListRelationFilter, { nullable: true })
], GuestWhereInput.prototype, "whatsappQueue", void 0);
GuestWhereInput = GuestWhereInput_1 = __decorate([
    (0, graphql_4.InputType)()
], GuestWhereInput);
exports.GuestWhereInput = GuestWhereInput;
let Guest = class Guest {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], Guest.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], Guest.prototype, "category1", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], Guest.prototype, "category2", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], Guest.prototype, "personInCharge", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], Guest.prototype, "class", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], Guest.prototype, "seat", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], Guest.prototype, "rejectionReason", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], Guest.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], Guest.prototype, "checkInAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => ConfirmationStatus, { nullable: false, defaultValue: 'UNCONFIRMED' })
], Guest.prototype, "confirmationStatus", void 0);
__decorate([
    (0, graphql_1.Field)(() => User, { nullable: false })
], Guest.prototype, "user", void 0);
__decorate([
    (0, graphql_1.Field)(() => [emailQueue], { nullable: true })
], Guest.prototype, "emailQueue", void 0);
__decorate([
    (0, graphql_1.Field)(() => [whatsappQueue], { nullable: true })
], Guest.prototype, "whatsappQueue", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestCount, { nullable: false })
], Guest.prototype, "_count", void 0);
Guest = __decorate([
    (0, graphql_5.ObjectType)()
], Guest);
exports.Guest = Guest;
let UpdateManyGuestArgs = class UpdateManyGuestArgs {
};
__decorate([
    (0, graphql_1.Field)(() => GuestUpdateManyMutationInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => GuestUpdateManyMutationInput)
], UpdateManyGuestArgs.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => GuestWhereInput)
], UpdateManyGuestArgs.prototype, "where", void 0);
UpdateManyGuestArgs = __decorate([
    (0, graphql_2.ArgsType)()
], UpdateManyGuestArgs);
exports.UpdateManyGuestArgs = UpdateManyGuestArgs;
let UpdateOneGuestArgs = class UpdateOneGuestArgs {
};
__decorate([
    (0, graphql_1.Field)(() => GuestUpdateInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => GuestUpdateInput)
], UpdateOneGuestArgs.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => GuestWhereUniqueInput)
], UpdateOneGuestArgs.prototype, "where", void 0);
UpdateOneGuestArgs = __decorate([
    (0, graphql_2.ArgsType)()
], UpdateOneGuestArgs);
exports.UpdateOneGuestArgs = UpdateOneGuestArgs;
let UpsertOneGuestArgs = class UpsertOneGuestArgs {
};
__decorate([
    (0, graphql_1.Field)(() => GuestWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => GuestWhereUniqueInput)
], UpsertOneGuestArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestCreateInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => GuestCreateInput)
], UpsertOneGuestArgs.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestUpdateInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => GuestUpdateInput)
], UpsertOneGuestArgs.prototype, "update", void 0);
UpsertOneGuestArgs = __decorate([
    (0, graphql_2.ArgsType)()
], UpsertOneGuestArgs);
exports.UpsertOneGuestArgs = UpsertOneGuestArgs;
let AffectedRows = class AffectedRows {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], AffectedRows.prototype, "count", void 0);
AffectedRows = __decorate([
    (0, graphql_5.ObjectType)()
], AffectedRows);
exports.AffectedRows = AffectedRows;
let AggregateEmailQueue = class AggregateEmailQueue {
};
__decorate([
    (0, graphql_1.Field)(() => EmailQueueCountAggregate, { nullable: true })
], AggregateEmailQueue.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => EmailQueueAvgAggregate, { nullable: true })
], AggregateEmailQueue.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => EmailQueueSumAggregate, { nullable: true })
], AggregateEmailQueue.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => EmailQueueMinAggregate, { nullable: true })
], AggregateEmailQueue.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => EmailQueueMaxAggregate, { nullable: true })
], AggregateEmailQueue.prototype, "_max", void 0);
AggregateEmailQueue = __decorate([
    (0, graphql_5.ObjectType)()
], AggregateEmailQueue);
exports.AggregateEmailQueue = AggregateEmailQueue;
let AggregateWhatsappQueue = class AggregateWhatsappQueue {
};
__decorate([
    (0, graphql_1.Field)(() => WhatsappQueueCountAggregate, { nullable: true })
], AggregateWhatsappQueue.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => WhatsappQueueAvgAggregate, { nullable: true })
], AggregateWhatsappQueue.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => WhatsappQueueSumAggregate, { nullable: true })
], AggregateWhatsappQueue.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => WhatsappQueueMinAggregate, { nullable: true })
], AggregateWhatsappQueue.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => WhatsappQueueMaxAggregate, { nullable: true })
], AggregateWhatsappQueue.prototype, "_max", void 0);
AggregateWhatsappQueue = __decorate([
    (0, graphql_5.ObjectType)()
], AggregateWhatsappQueue);
exports.AggregateWhatsappQueue = AggregateWhatsappQueue;
let DateTimeFieldUpdateOperationsInput = class DateTimeFieldUpdateOperationsInput {
};
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], DateTimeFieldUpdateOperationsInput.prototype, "set", void 0);
DateTimeFieldUpdateOperationsInput = __decorate([
    (0, graphql_4.InputType)()
], DateTimeFieldUpdateOperationsInput);
exports.DateTimeFieldUpdateOperationsInput = DateTimeFieldUpdateOperationsInput;
let DateTimeFilter = class DateTimeFilter {
};
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], DateTimeFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [Date], { nullable: true })
], DateTimeFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [Date], { nullable: true })
], DateTimeFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], DateTimeFilter.prototype, "lt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], DateTimeFilter.prototype, "lte", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], DateTimeFilter.prototype, "gt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], DateTimeFilter.prototype, "gte", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedDateTimeFilter, { nullable: true })
], DateTimeFilter.prototype, "not", void 0);
DateTimeFilter = __decorate([
    (0, graphql_4.InputType)()
], DateTimeFilter);
exports.DateTimeFilter = DateTimeFilter;
let DateTimeNullableFilter = class DateTimeNullableFilter {
};
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], DateTimeNullableFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [Date], { nullable: true })
], DateTimeNullableFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [Date], { nullable: true })
], DateTimeNullableFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], DateTimeNullableFilter.prototype, "lt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], DateTimeNullableFilter.prototype, "lte", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], DateTimeNullableFilter.prototype, "gt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], DateTimeNullableFilter.prototype, "gte", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedDateTimeNullableFilter, { nullable: true })
], DateTimeNullableFilter.prototype, "not", void 0);
DateTimeNullableFilter = __decorate([
    (0, graphql_4.InputType)()
], DateTimeNullableFilter);
exports.DateTimeNullableFilter = DateTimeNullableFilter;
let DateTimeNullableWithAggregatesFilter = class DateTimeNullableWithAggregatesFilter {
};
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], DateTimeNullableWithAggregatesFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [Date], { nullable: true })
], DateTimeNullableWithAggregatesFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [Date], { nullable: true })
], DateTimeNullableWithAggregatesFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], DateTimeNullableWithAggregatesFilter.prototype, "lt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], DateTimeNullableWithAggregatesFilter.prototype, "lte", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], DateTimeNullableWithAggregatesFilter.prototype, "gt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], DateTimeNullableWithAggregatesFilter.prototype, "gte", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedDateTimeNullableWithAggregatesFilter, { nullable: true })
], DateTimeNullableWithAggregatesFilter.prototype, "not", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedIntNullableFilter, { nullable: true })
], DateTimeNullableWithAggregatesFilter.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedDateTimeNullableFilter, { nullable: true })
], DateTimeNullableWithAggregatesFilter.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedDateTimeNullableFilter, { nullable: true })
], DateTimeNullableWithAggregatesFilter.prototype, "_max", void 0);
DateTimeNullableWithAggregatesFilter = __decorate([
    (0, graphql_4.InputType)()
], DateTimeNullableWithAggregatesFilter);
exports.DateTimeNullableWithAggregatesFilter = DateTimeNullableWithAggregatesFilter;
let DateTimeWithAggregatesFilter = class DateTimeWithAggregatesFilter {
};
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], DateTimeWithAggregatesFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [Date], { nullable: true })
], DateTimeWithAggregatesFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [Date], { nullable: true })
], DateTimeWithAggregatesFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], DateTimeWithAggregatesFilter.prototype, "lt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], DateTimeWithAggregatesFilter.prototype, "lte", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], DateTimeWithAggregatesFilter.prototype, "gt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], DateTimeWithAggregatesFilter.prototype, "gte", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedDateTimeWithAggregatesFilter, { nullable: true })
], DateTimeWithAggregatesFilter.prototype, "not", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedIntFilter, { nullable: true })
], DateTimeWithAggregatesFilter.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedDateTimeFilter, { nullable: true })
], DateTimeWithAggregatesFilter.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedDateTimeFilter, { nullable: true })
], DateTimeWithAggregatesFilter.prototype, "_max", void 0);
DateTimeWithAggregatesFilter = __decorate([
    (0, graphql_4.InputType)()
], DateTimeWithAggregatesFilter);
exports.DateTimeWithAggregatesFilter = DateTimeWithAggregatesFilter;
let EmailQueueAvgAggregate = class EmailQueueAvgAggregate {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_7.Float, { nullable: true })
], EmailQueueAvgAggregate.prototype, "id", void 0);
EmailQueueAvgAggregate = __decorate([
    (0, graphql_5.ObjectType)()
], EmailQueueAvgAggregate);
exports.EmailQueueAvgAggregate = EmailQueueAvgAggregate;
let EmailQueueCountAggregate = class EmailQueueCountAggregate {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], EmailQueueCountAggregate.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], EmailQueueCountAggregate.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], EmailQueueCountAggregate.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], EmailQueueCountAggregate.prototype, "guestId", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], EmailQueueCountAggregate.prototype, "_all", void 0);
EmailQueueCountAggregate = __decorate([
    (0, graphql_5.ObjectType)()
], EmailQueueCountAggregate);
exports.EmailQueueCountAggregate = EmailQueueCountAggregate;
let EmailQueueGroupBy = class EmailQueueGroupBy {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], EmailQueueGroupBy.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], EmailQueueGroupBy.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => QueueStatus, { nullable: false })
], EmailQueueGroupBy.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], EmailQueueGroupBy.prototype, "guestId", void 0);
__decorate([
    (0, graphql_1.Field)(() => EmailQueueCountAggregate, { nullable: true })
], EmailQueueGroupBy.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => EmailQueueAvgAggregate, { nullable: true })
], EmailQueueGroupBy.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => EmailQueueSumAggregate, { nullable: true })
], EmailQueueGroupBy.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => EmailQueueMinAggregate, { nullable: true })
], EmailQueueGroupBy.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => EmailQueueMaxAggregate, { nullable: true })
], EmailQueueGroupBy.prototype, "_max", void 0);
EmailQueueGroupBy = __decorate([
    (0, graphql_5.ObjectType)()
], EmailQueueGroupBy);
exports.EmailQueueGroupBy = EmailQueueGroupBy;
let EmailQueueListRelationFilter = class EmailQueueListRelationFilter {
};
__decorate([
    (0, graphql_1.Field)(() => emailQueueWhereInput, { nullable: true })
], EmailQueueListRelationFilter.prototype, "every", void 0);
__decorate([
    (0, graphql_1.Field)(() => emailQueueWhereInput, { nullable: true })
], EmailQueueListRelationFilter.prototype, "some", void 0);
__decorate([
    (0, graphql_1.Field)(() => emailQueueWhereInput, { nullable: true })
], EmailQueueListRelationFilter.prototype, "none", void 0);
EmailQueueListRelationFilter = __decorate([
    (0, graphql_4.InputType)()
], EmailQueueListRelationFilter);
exports.EmailQueueListRelationFilter = EmailQueueListRelationFilter;
let EmailQueueMaxAggregate = class EmailQueueMaxAggregate {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], EmailQueueMaxAggregate.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], EmailQueueMaxAggregate.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => QueueStatus, { nullable: true })
], EmailQueueMaxAggregate.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], EmailQueueMaxAggregate.prototype, "guestId", void 0);
EmailQueueMaxAggregate = __decorate([
    (0, graphql_5.ObjectType)()
], EmailQueueMaxAggregate);
exports.EmailQueueMaxAggregate = EmailQueueMaxAggregate;
let EmailQueueMinAggregate = class EmailQueueMinAggregate {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], EmailQueueMinAggregate.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], EmailQueueMinAggregate.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => QueueStatus, { nullable: true })
], EmailQueueMinAggregate.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], EmailQueueMinAggregate.prototype, "guestId", void 0);
EmailQueueMinAggregate = __decorate([
    (0, graphql_5.ObjectType)()
], EmailQueueMinAggregate);
exports.EmailQueueMinAggregate = EmailQueueMinAggregate;
let EmailQueueSumAggregate = class EmailQueueSumAggregate {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], EmailQueueSumAggregate.prototype, "id", void 0);
EmailQueueSumAggregate = __decorate([
    (0, graphql_5.ObjectType)()
], EmailQueueSumAggregate);
exports.EmailQueueSumAggregate = EmailQueueSumAggregate;
let EnumConfirmationStatusFieldUpdateOperationsInput = class EnumConfirmationStatusFieldUpdateOperationsInput {
};
__decorate([
    (0, graphql_1.Field)(() => ConfirmationStatus, { nullable: true })
], EnumConfirmationStatusFieldUpdateOperationsInput.prototype, "set", void 0);
EnumConfirmationStatusFieldUpdateOperationsInput = __decorate([
    (0, graphql_4.InputType)()
], EnumConfirmationStatusFieldUpdateOperationsInput);
exports.EnumConfirmationStatusFieldUpdateOperationsInput = EnumConfirmationStatusFieldUpdateOperationsInput;
let EnumConfirmationStatusFilter = class EnumConfirmationStatusFilter {
};
__decorate([
    (0, graphql_1.Field)(() => ConfirmationStatus, { nullable: true })
], EnumConfirmationStatusFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ConfirmationStatus], { nullable: true })
], EnumConfirmationStatusFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ConfirmationStatus], { nullable: true })
], EnumConfirmationStatusFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedEnumConfirmationStatusFilter, { nullable: true })
], EnumConfirmationStatusFilter.prototype, "not", void 0);
EnumConfirmationStatusFilter = __decorate([
    (0, graphql_4.InputType)()
], EnumConfirmationStatusFilter);
exports.EnumConfirmationStatusFilter = EnumConfirmationStatusFilter;
let EnumConfirmationStatusWithAggregatesFilter = class EnumConfirmationStatusWithAggregatesFilter {
};
__decorate([
    (0, graphql_1.Field)(() => ConfirmationStatus, { nullable: true })
], EnumConfirmationStatusWithAggregatesFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ConfirmationStatus], { nullable: true })
], EnumConfirmationStatusWithAggregatesFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ConfirmationStatus], { nullable: true })
], EnumConfirmationStatusWithAggregatesFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedEnumConfirmationStatusWithAggregatesFilter, { nullable: true })
], EnumConfirmationStatusWithAggregatesFilter.prototype, "not", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedIntFilter, { nullable: true })
], EnumConfirmationStatusWithAggregatesFilter.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedEnumConfirmationStatusFilter, { nullable: true })
], EnumConfirmationStatusWithAggregatesFilter.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedEnumConfirmationStatusFilter, { nullable: true })
], EnumConfirmationStatusWithAggregatesFilter.prototype, "_max", void 0);
EnumConfirmationStatusWithAggregatesFilter = __decorate([
    (0, graphql_4.InputType)()
], EnumConfirmationStatusWithAggregatesFilter);
exports.EnumConfirmationStatusWithAggregatesFilter = EnumConfirmationStatusWithAggregatesFilter;
let EnumQueueStatusFieldUpdateOperationsInput = class EnumQueueStatusFieldUpdateOperationsInput {
};
__decorate([
    (0, graphql_1.Field)(() => QueueStatus, { nullable: true })
], EnumQueueStatusFieldUpdateOperationsInput.prototype, "set", void 0);
EnumQueueStatusFieldUpdateOperationsInput = __decorate([
    (0, graphql_4.InputType)()
], EnumQueueStatusFieldUpdateOperationsInput);
exports.EnumQueueStatusFieldUpdateOperationsInput = EnumQueueStatusFieldUpdateOperationsInput;
let EnumQueueStatusFilter = class EnumQueueStatusFilter {
};
__decorate([
    (0, graphql_1.Field)(() => QueueStatus, { nullable: true })
], EnumQueueStatusFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [QueueStatus], { nullable: true })
], EnumQueueStatusFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [QueueStatus], { nullable: true })
], EnumQueueStatusFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedEnumQueueStatusFilter, { nullable: true })
], EnumQueueStatusFilter.prototype, "not", void 0);
EnumQueueStatusFilter = __decorate([
    (0, graphql_4.InputType)()
], EnumQueueStatusFilter);
exports.EnumQueueStatusFilter = EnumQueueStatusFilter;
let EnumQueueStatusWithAggregatesFilter = class EnumQueueStatusWithAggregatesFilter {
};
__decorate([
    (0, graphql_1.Field)(() => QueueStatus, { nullable: true })
], EnumQueueStatusWithAggregatesFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [QueueStatus], { nullable: true })
], EnumQueueStatusWithAggregatesFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [QueueStatus], { nullable: true })
], EnumQueueStatusWithAggregatesFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedEnumQueueStatusWithAggregatesFilter, { nullable: true })
], EnumQueueStatusWithAggregatesFilter.prototype, "not", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedIntFilter, { nullable: true })
], EnumQueueStatusWithAggregatesFilter.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedEnumQueueStatusFilter, { nullable: true })
], EnumQueueStatusWithAggregatesFilter.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedEnumQueueStatusFilter, { nullable: true })
], EnumQueueStatusWithAggregatesFilter.prototype, "_max", void 0);
EnumQueueStatusWithAggregatesFilter = __decorate([
    (0, graphql_4.InputType)()
], EnumQueueStatusWithAggregatesFilter);
exports.EnumQueueStatusWithAggregatesFilter = EnumQueueStatusWithAggregatesFilter;
let EnumUserRoleFieldUpdateOperationsInput = class EnumUserRoleFieldUpdateOperationsInput {
};
__decorate([
    (0, graphql_1.Field)(() => UserRole, { nullable: true })
], EnumUserRoleFieldUpdateOperationsInput.prototype, "set", void 0);
EnumUserRoleFieldUpdateOperationsInput = __decorate([
    (0, graphql_4.InputType)()
], EnumUserRoleFieldUpdateOperationsInput);
exports.EnumUserRoleFieldUpdateOperationsInput = EnumUserRoleFieldUpdateOperationsInput;
let EnumUserRoleFilter = class EnumUserRoleFilter {
};
__decorate([
    (0, graphql_1.Field)(() => UserRole, { nullable: true })
], EnumUserRoleFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [UserRole], { nullable: true })
], EnumUserRoleFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [UserRole], { nullable: true })
], EnumUserRoleFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedEnumUserRoleFilter, { nullable: true })
], EnumUserRoleFilter.prototype, "not", void 0);
EnumUserRoleFilter = __decorate([
    (0, graphql_4.InputType)()
], EnumUserRoleFilter);
exports.EnumUserRoleFilter = EnumUserRoleFilter;
let EnumUserRoleWithAggregatesFilter = class EnumUserRoleWithAggregatesFilter {
};
__decorate([
    (0, graphql_1.Field)(() => UserRole, { nullable: true })
], EnumUserRoleWithAggregatesFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [UserRole], { nullable: true })
], EnumUserRoleWithAggregatesFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [UserRole], { nullable: true })
], EnumUserRoleWithAggregatesFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedEnumUserRoleWithAggregatesFilter, { nullable: true })
], EnumUserRoleWithAggregatesFilter.prototype, "not", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedIntFilter, { nullable: true })
], EnumUserRoleWithAggregatesFilter.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedEnumUserRoleFilter, { nullable: true })
], EnumUserRoleWithAggregatesFilter.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedEnumUserRoleFilter, { nullable: true })
], EnumUserRoleWithAggregatesFilter.prototype, "_max", void 0);
EnumUserRoleWithAggregatesFilter = __decorate([
    (0, graphql_4.InputType)()
], EnumUserRoleWithAggregatesFilter);
exports.EnumUserRoleWithAggregatesFilter = EnumUserRoleWithAggregatesFilter;
let IntFieldUpdateOperationsInput = class IntFieldUpdateOperationsInput {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], IntFieldUpdateOperationsInput.prototype, "set", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], IntFieldUpdateOperationsInput.prototype, "increment", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], IntFieldUpdateOperationsInput.prototype, "decrement", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], IntFieldUpdateOperationsInput.prototype, "multiply", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], IntFieldUpdateOperationsInput.prototype, "divide", void 0);
IntFieldUpdateOperationsInput = __decorate([
    (0, graphql_4.InputType)()
], IntFieldUpdateOperationsInput);
exports.IntFieldUpdateOperationsInput = IntFieldUpdateOperationsInput;
let IntFilter = class IntFilter {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], IntFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [graphql_3.Int], { nullable: true })
], IntFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [graphql_3.Int], { nullable: true })
], IntFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], IntFilter.prototype, "lt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], IntFilter.prototype, "lte", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], IntFilter.prototype, "gt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], IntFilter.prototype, "gte", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedIntFilter, { nullable: true })
], IntFilter.prototype, "not", void 0);
IntFilter = __decorate([
    (0, graphql_4.InputType)()
], IntFilter);
exports.IntFilter = IntFilter;
let IntWithAggregatesFilter = class IntWithAggregatesFilter {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], IntWithAggregatesFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [graphql_3.Int], { nullable: true })
], IntWithAggregatesFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [graphql_3.Int], { nullable: true })
], IntWithAggregatesFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], IntWithAggregatesFilter.prototype, "lt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], IntWithAggregatesFilter.prototype, "lte", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], IntWithAggregatesFilter.prototype, "gt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], IntWithAggregatesFilter.prototype, "gte", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedIntWithAggregatesFilter, { nullable: true })
], IntWithAggregatesFilter.prototype, "not", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedIntFilter, { nullable: true })
], IntWithAggregatesFilter.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedFloatFilter, { nullable: true })
], IntWithAggregatesFilter.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedIntFilter, { nullable: true })
], IntWithAggregatesFilter.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedIntFilter, { nullable: true })
], IntWithAggregatesFilter.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedIntFilter, { nullable: true })
], IntWithAggregatesFilter.prototype, "_max", void 0);
IntWithAggregatesFilter = __decorate([
    (0, graphql_4.InputType)()
], IntWithAggregatesFilter);
exports.IntWithAggregatesFilter = IntWithAggregatesFilter;
let NestedDateTimeFilter = NestedDateTimeFilter_1 = class NestedDateTimeFilter {
};
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], NestedDateTimeFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [Date], { nullable: true })
], NestedDateTimeFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [Date], { nullable: true })
], NestedDateTimeFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], NestedDateTimeFilter.prototype, "lt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], NestedDateTimeFilter.prototype, "lte", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], NestedDateTimeFilter.prototype, "gt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], NestedDateTimeFilter.prototype, "gte", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedDateTimeFilter_1, { nullable: true })
], NestedDateTimeFilter.prototype, "not", void 0);
NestedDateTimeFilter = NestedDateTimeFilter_1 = __decorate([
    (0, graphql_4.InputType)()
], NestedDateTimeFilter);
exports.NestedDateTimeFilter = NestedDateTimeFilter;
let NestedDateTimeNullableFilter = NestedDateTimeNullableFilter_1 = class NestedDateTimeNullableFilter {
};
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], NestedDateTimeNullableFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [Date], { nullable: true })
], NestedDateTimeNullableFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [Date], { nullable: true })
], NestedDateTimeNullableFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], NestedDateTimeNullableFilter.prototype, "lt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], NestedDateTimeNullableFilter.prototype, "lte", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], NestedDateTimeNullableFilter.prototype, "gt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], NestedDateTimeNullableFilter.prototype, "gte", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedDateTimeNullableFilter_1, { nullable: true })
], NestedDateTimeNullableFilter.prototype, "not", void 0);
NestedDateTimeNullableFilter = NestedDateTimeNullableFilter_1 = __decorate([
    (0, graphql_4.InputType)()
], NestedDateTimeNullableFilter);
exports.NestedDateTimeNullableFilter = NestedDateTimeNullableFilter;
let NestedDateTimeNullableWithAggregatesFilter = NestedDateTimeNullableWithAggregatesFilter_1 = class NestedDateTimeNullableWithAggregatesFilter {
};
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], NestedDateTimeNullableWithAggregatesFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [Date], { nullable: true })
], NestedDateTimeNullableWithAggregatesFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [Date], { nullable: true })
], NestedDateTimeNullableWithAggregatesFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], NestedDateTimeNullableWithAggregatesFilter.prototype, "lt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], NestedDateTimeNullableWithAggregatesFilter.prototype, "lte", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], NestedDateTimeNullableWithAggregatesFilter.prototype, "gt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], NestedDateTimeNullableWithAggregatesFilter.prototype, "gte", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedDateTimeNullableWithAggregatesFilter_1, { nullable: true })
], NestedDateTimeNullableWithAggregatesFilter.prototype, "not", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedIntNullableFilter, { nullable: true })
], NestedDateTimeNullableWithAggregatesFilter.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedDateTimeNullableFilter, { nullable: true })
], NestedDateTimeNullableWithAggregatesFilter.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedDateTimeNullableFilter, { nullable: true })
], NestedDateTimeNullableWithAggregatesFilter.prototype, "_max", void 0);
NestedDateTimeNullableWithAggregatesFilter = NestedDateTimeNullableWithAggregatesFilter_1 = __decorate([
    (0, graphql_4.InputType)()
], NestedDateTimeNullableWithAggregatesFilter);
exports.NestedDateTimeNullableWithAggregatesFilter = NestedDateTimeNullableWithAggregatesFilter;
let NestedDateTimeWithAggregatesFilter = NestedDateTimeWithAggregatesFilter_1 = class NestedDateTimeWithAggregatesFilter {
};
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], NestedDateTimeWithAggregatesFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [Date], { nullable: true })
], NestedDateTimeWithAggregatesFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [Date], { nullable: true })
], NestedDateTimeWithAggregatesFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], NestedDateTimeWithAggregatesFilter.prototype, "lt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], NestedDateTimeWithAggregatesFilter.prototype, "lte", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], NestedDateTimeWithAggregatesFilter.prototype, "gt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], NestedDateTimeWithAggregatesFilter.prototype, "gte", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedDateTimeWithAggregatesFilter_1, { nullable: true })
], NestedDateTimeWithAggregatesFilter.prototype, "not", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedIntFilter, { nullable: true })
], NestedDateTimeWithAggregatesFilter.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedDateTimeFilter, { nullable: true })
], NestedDateTimeWithAggregatesFilter.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedDateTimeFilter, { nullable: true })
], NestedDateTimeWithAggregatesFilter.prototype, "_max", void 0);
NestedDateTimeWithAggregatesFilter = NestedDateTimeWithAggregatesFilter_1 = __decorate([
    (0, graphql_4.InputType)()
], NestedDateTimeWithAggregatesFilter);
exports.NestedDateTimeWithAggregatesFilter = NestedDateTimeWithAggregatesFilter;
let NestedEnumConfirmationStatusFilter = NestedEnumConfirmationStatusFilter_1 = class NestedEnumConfirmationStatusFilter {
};
__decorate([
    (0, graphql_1.Field)(() => ConfirmationStatus, { nullable: true })
], NestedEnumConfirmationStatusFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ConfirmationStatus], { nullable: true })
], NestedEnumConfirmationStatusFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ConfirmationStatus], { nullable: true })
], NestedEnumConfirmationStatusFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedEnumConfirmationStatusFilter_1, { nullable: true })
], NestedEnumConfirmationStatusFilter.prototype, "not", void 0);
NestedEnumConfirmationStatusFilter = NestedEnumConfirmationStatusFilter_1 = __decorate([
    (0, graphql_4.InputType)()
], NestedEnumConfirmationStatusFilter);
exports.NestedEnumConfirmationStatusFilter = NestedEnumConfirmationStatusFilter;
let NestedEnumConfirmationStatusWithAggregatesFilter = NestedEnumConfirmationStatusWithAggregatesFilter_1 = class NestedEnumConfirmationStatusWithAggregatesFilter {
};
__decorate([
    (0, graphql_1.Field)(() => ConfirmationStatus, { nullable: true })
], NestedEnumConfirmationStatusWithAggregatesFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ConfirmationStatus], { nullable: true })
], NestedEnumConfirmationStatusWithAggregatesFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ConfirmationStatus], { nullable: true })
], NestedEnumConfirmationStatusWithAggregatesFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedEnumConfirmationStatusWithAggregatesFilter_1, { nullable: true })
], NestedEnumConfirmationStatusWithAggregatesFilter.prototype, "not", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedIntFilter, { nullable: true })
], NestedEnumConfirmationStatusWithAggregatesFilter.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedEnumConfirmationStatusFilter, { nullable: true })
], NestedEnumConfirmationStatusWithAggregatesFilter.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedEnumConfirmationStatusFilter, { nullable: true })
], NestedEnumConfirmationStatusWithAggregatesFilter.prototype, "_max", void 0);
NestedEnumConfirmationStatusWithAggregatesFilter = NestedEnumConfirmationStatusWithAggregatesFilter_1 = __decorate([
    (0, graphql_4.InputType)()
], NestedEnumConfirmationStatusWithAggregatesFilter);
exports.NestedEnumConfirmationStatusWithAggregatesFilter = NestedEnumConfirmationStatusWithAggregatesFilter;
let NestedEnumQueueStatusFilter = NestedEnumQueueStatusFilter_1 = class NestedEnumQueueStatusFilter {
};
__decorate([
    (0, graphql_1.Field)(() => QueueStatus, { nullable: true })
], NestedEnumQueueStatusFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [QueueStatus], { nullable: true })
], NestedEnumQueueStatusFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [QueueStatus], { nullable: true })
], NestedEnumQueueStatusFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedEnumQueueStatusFilter_1, { nullable: true })
], NestedEnumQueueStatusFilter.prototype, "not", void 0);
NestedEnumQueueStatusFilter = NestedEnumQueueStatusFilter_1 = __decorate([
    (0, graphql_4.InputType)()
], NestedEnumQueueStatusFilter);
exports.NestedEnumQueueStatusFilter = NestedEnumQueueStatusFilter;
let NestedEnumQueueStatusWithAggregatesFilter = NestedEnumQueueStatusWithAggregatesFilter_1 = class NestedEnumQueueStatusWithAggregatesFilter {
};
__decorate([
    (0, graphql_1.Field)(() => QueueStatus, { nullable: true })
], NestedEnumQueueStatusWithAggregatesFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [QueueStatus], { nullable: true })
], NestedEnumQueueStatusWithAggregatesFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [QueueStatus], { nullable: true })
], NestedEnumQueueStatusWithAggregatesFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedEnumQueueStatusWithAggregatesFilter_1, { nullable: true })
], NestedEnumQueueStatusWithAggregatesFilter.prototype, "not", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedIntFilter, { nullable: true })
], NestedEnumQueueStatusWithAggregatesFilter.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedEnumQueueStatusFilter, { nullable: true })
], NestedEnumQueueStatusWithAggregatesFilter.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedEnumQueueStatusFilter, { nullable: true })
], NestedEnumQueueStatusWithAggregatesFilter.prototype, "_max", void 0);
NestedEnumQueueStatusWithAggregatesFilter = NestedEnumQueueStatusWithAggregatesFilter_1 = __decorate([
    (0, graphql_4.InputType)()
], NestedEnumQueueStatusWithAggregatesFilter);
exports.NestedEnumQueueStatusWithAggregatesFilter = NestedEnumQueueStatusWithAggregatesFilter;
let NestedEnumUserRoleFilter = NestedEnumUserRoleFilter_1 = class NestedEnumUserRoleFilter {
};
__decorate([
    (0, graphql_1.Field)(() => UserRole, { nullable: true })
], NestedEnumUserRoleFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [UserRole], { nullable: true })
], NestedEnumUserRoleFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [UserRole], { nullable: true })
], NestedEnumUserRoleFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedEnumUserRoleFilter_1, { nullable: true })
], NestedEnumUserRoleFilter.prototype, "not", void 0);
NestedEnumUserRoleFilter = NestedEnumUserRoleFilter_1 = __decorate([
    (0, graphql_4.InputType)()
], NestedEnumUserRoleFilter);
exports.NestedEnumUserRoleFilter = NestedEnumUserRoleFilter;
let NestedEnumUserRoleWithAggregatesFilter = NestedEnumUserRoleWithAggregatesFilter_1 = class NestedEnumUserRoleWithAggregatesFilter {
};
__decorate([
    (0, graphql_1.Field)(() => UserRole, { nullable: true })
], NestedEnumUserRoleWithAggregatesFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [UserRole], { nullable: true })
], NestedEnumUserRoleWithAggregatesFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [UserRole], { nullable: true })
], NestedEnumUserRoleWithAggregatesFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedEnumUserRoleWithAggregatesFilter_1, { nullable: true })
], NestedEnumUserRoleWithAggregatesFilter.prototype, "not", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedIntFilter, { nullable: true })
], NestedEnumUserRoleWithAggregatesFilter.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedEnumUserRoleFilter, { nullable: true })
], NestedEnumUserRoleWithAggregatesFilter.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedEnumUserRoleFilter, { nullable: true })
], NestedEnumUserRoleWithAggregatesFilter.prototype, "_max", void 0);
NestedEnumUserRoleWithAggregatesFilter = NestedEnumUserRoleWithAggregatesFilter_1 = __decorate([
    (0, graphql_4.InputType)()
], NestedEnumUserRoleWithAggregatesFilter);
exports.NestedEnumUserRoleWithAggregatesFilter = NestedEnumUserRoleWithAggregatesFilter;
let NestedFloatFilter = NestedFloatFilter_1 = class NestedFloatFilter {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_7.Float, { nullable: true })
], NestedFloatFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [graphql_7.Float], { nullable: true })
], NestedFloatFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [graphql_7.Float], { nullable: true })
], NestedFloatFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_7.Float, { nullable: true })
], NestedFloatFilter.prototype, "lt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_7.Float, { nullable: true })
], NestedFloatFilter.prototype, "lte", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_7.Float, { nullable: true })
], NestedFloatFilter.prototype, "gt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_7.Float, { nullable: true })
], NestedFloatFilter.prototype, "gte", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedFloatFilter_1, { nullable: true })
], NestedFloatFilter.prototype, "not", void 0);
NestedFloatFilter = NestedFloatFilter_1 = __decorate([
    (0, graphql_4.InputType)()
], NestedFloatFilter);
exports.NestedFloatFilter = NestedFloatFilter;
let NestedIntFilter = NestedIntFilter_1 = class NestedIntFilter {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], NestedIntFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [graphql_3.Int], { nullable: true })
], NestedIntFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [graphql_3.Int], { nullable: true })
], NestedIntFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], NestedIntFilter.prototype, "lt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], NestedIntFilter.prototype, "lte", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], NestedIntFilter.prototype, "gt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], NestedIntFilter.prototype, "gte", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedIntFilter_1, { nullable: true })
], NestedIntFilter.prototype, "not", void 0);
NestedIntFilter = NestedIntFilter_1 = __decorate([
    (0, graphql_4.InputType)()
], NestedIntFilter);
exports.NestedIntFilter = NestedIntFilter;
let NestedIntNullableFilter = NestedIntNullableFilter_1 = class NestedIntNullableFilter {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], NestedIntNullableFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [graphql_3.Int], { nullable: true })
], NestedIntNullableFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [graphql_3.Int], { nullable: true })
], NestedIntNullableFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], NestedIntNullableFilter.prototype, "lt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], NestedIntNullableFilter.prototype, "lte", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], NestedIntNullableFilter.prototype, "gt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], NestedIntNullableFilter.prototype, "gte", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedIntNullableFilter_1, { nullable: true })
], NestedIntNullableFilter.prototype, "not", void 0);
NestedIntNullableFilter = NestedIntNullableFilter_1 = __decorate([
    (0, graphql_4.InputType)()
], NestedIntNullableFilter);
exports.NestedIntNullableFilter = NestedIntNullableFilter;
let NestedIntWithAggregatesFilter = NestedIntWithAggregatesFilter_1 = class NestedIntWithAggregatesFilter {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], NestedIntWithAggregatesFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [graphql_3.Int], { nullable: true })
], NestedIntWithAggregatesFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [graphql_3.Int], { nullable: true })
], NestedIntWithAggregatesFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], NestedIntWithAggregatesFilter.prototype, "lt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], NestedIntWithAggregatesFilter.prototype, "lte", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], NestedIntWithAggregatesFilter.prototype, "gt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], NestedIntWithAggregatesFilter.prototype, "gte", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedIntWithAggregatesFilter_1, { nullable: true })
], NestedIntWithAggregatesFilter.prototype, "not", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedIntFilter, { nullable: true })
], NestedIntWithAggregatesFilter.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedFloatFilter, { nullable: true })
], NestedIntWithAggregatesFilter.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedIntFilter, { nullable: true })
], NestedIntWithAggregatesFilter.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedIntFilter, { nullable: true })
], NestedIntWithAggregatesFilter.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedIntFilter, { nullable: true })
], NestedIntWithAggregatesFilter.prototype, "_max", void 0);
NestedIntWithAggregatesFilter = NestedIntWithAggregatesFilter_1 = __decorate([
    (0, graphql_4.InputType)()
], NestedIntWithAggregatesFilter);
exports.NestedIntWithAggregatesFilter = NestedIntWithAggregatesFilter;
let NestedStringFilter = NestedStringFilter_1 = class NestedStringFilter {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NestedStringFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true })
], NestedStringFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true })
], NestedStringFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NestedStringFilter.prototype, "lt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NestedStringFilter.prototype, "lte", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NestedStringFilter.prototype, "gt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NestedStringFilter.prototype, "gte", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NestedStringFilter.prototype, "contains", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NestedStringFilter.prototype, "startsWith", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NestedStringFilter.prototype, "endsWith", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedStringFilter_1, { nullable: true })
], NestedStringFilter.prototype, "not", void 0);
NestedStringFilter = NestedStringFilter_1 = __decorate([
    (0, graphql_4.InputType)()
], NestedStringFilter);
exports.NestedStringFilter = NestedStringFilter;
let NestedStringNullableFilter = NestedStringNullableFilter_1 = class NestedStringNullableFilter {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NestedStringNullableFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true })
], NestedStringNullableFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true })
], NestedStringNullableFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NestedStringNullableFilter.prototype, "lt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NestedStringNullableFilter.prototype, "lte", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NestedStringNullableFilter.prototype, "gt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NestedStringNullableFilter.prototype, "gte", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NestedStringNullableFilter.prototype, "contains", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NestedStringNullableFilter.prototype, "startsWith", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NestedStringNullableFilter.prototype, "endsWith", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedStringNullableFilter_1, { nullable: true })
], NestedStringNullableFilter.prototype, "not", void 0);
NestedStringNullableFilter = NestedStringNullableFilter_1 = __decorate([
    (0, graphql_4.InputType)()
], NestedStringNullableFilter);
exports.NestedStringNullableFilter = NestedStringNullableFilter;
let NestedStringNullableWithAggregatesFilter = NestedStringNullableWithAggregatesFilter_1 = class NestedStringNullableWithAggregatesFilter {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NestedStringNullableWithAggregatesFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true })
], NestedStringNullableWithAggregatesFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true })
], NestedStringNullableWithAggregatesFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NestedStringNullableWithAggregatesFilter.prototype, "lt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NestedStringNullableWithAggregatesFilter.prototype, "lte", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NestedStringNullableWithAggregatesFilter.prototype, "gt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NestedStringNullableWithAggregatesFilter.prototype, "gte", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NestedStringNullableWithAggregatesFilter.prototype, "contains", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NestedStringNullableWithAggregatesFilter.prototype, "startsWith", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NestedStringNullableWithAggregatesFilter.prototype, "endsWith", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedStringNullableWithAggregatesFilter_1, { nullable: true })
], NestedStringNullableWithAggregatesFilter.prototype, "not", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedIntNullableFilter, { nullable: true })
], NestedStringNullableWithAggregatesFilter.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedStringNullableFilter, { nullable: true })
], NestedStringNullableWithAggregatesFilter.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedStringNullableFilter, { nullable: true })
], NestedStringNullableWithAggregatesFilter.prototype, "_max", void 0);
NestedStringNullableWithAggregatesFilter = NestedStringNullableWithAggregatesFilter_1 = __decorate([
    (0, graphql_4.InputType)()
], NestedStringNullableWithAggregatesFilter);
exports.NestedStringNullableWithAggregatesFilter = NestedStringNullableWithAggregatesFilter;
let NestedStringWithAggregatesFilter = NestedStringWithAggregatesFilter_1 = class NestedStringWithAggregatesFilter {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NestedStringWithAggregatesFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true })
], NestedStringWithAggregatesFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true })
], NestedStringWithAggregatesFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NestedStringWithAggregatesFilter.prototype, "lt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NestedStringWithAggregatesFilter.prototype, "lte", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NestedStringWithAggregatesFilter.prototype, "gt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NestedStringWithAggregatesFilter.prototype, "gte", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NestedStringWithAggregatesFilter.prototype, "contains", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NestedStringWithAggregatesFilter.prototype, "startsWith", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NestedStringWithAggregatesFilter.prototype, "endsWith", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedStringWithAggregatesFilter_1, { nullable: true })
], NestedStringWithAggregatesFilter.prototype, "not", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedIntFilter, { nullable: true })
], NestedStringWithAggregatesFilter.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedStringFilter, { nullable: true })
], NestedStringWithAggregatesFilter.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedStringFilter, { nullable: true })
], NestedStringWithAggregatesFilter.prototype, "_max", void 0);
NestedStringWithAggregatesFilter = NestedStringWithAggregatesFilter_1 = __decorate([
    (0, graphql_4.InputType)()
], NestedStringWithAggregatesFilter);
exports.NestedStringWithAggregatesFilter = NestedStringWithAggregatesFilter;
let NullableDateTimeFieldUpdateOperationsInput = class NullableDateTimeFieldUpdateOperationsInput {
};
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], NullableDateTimeFieldUpdateOperationsInput.prototype, "set", void 0);
NullableDateTimeFieldUpdateOperationsInput = __decorate([
    (0, graphql_4.InputType)()
], NullableDateTimeFieldUpdateOperationsInput);
exports.NullableDateTimeFieldUpdateOperationsInput = NullableDateTimeFieldUpdateOperationsInput;
let NullableStringFieldUpdateOperationsInput = class NullableStringFieldUpdateOperationsInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NullableStringFieldUpdateOperationsInput.prototype, "set", void 0);
NullableStringFieldUpdateOperationsInput = __decorate([
    (0, graphql_4.InputType)()
], NullableStringFieldUpdateOperationsInput);
exports.NullableStringFieldUpdateOperationsInput = NullableStringFieldUpdateOperationsInput;
let SortOrderInput = class SortOrderInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: false })
], SortOrderInput.prototype, "sort", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullsOrder, { nullable: true })
], SortOrderInput.prototype, "nulls", void 0);
SortOrderInput = __decorate([
    (0, graphql_4.InputType)()
], SortOrderInput);
exports.SortOrderInput = SortOrderInput;
let StringFieldUpdateOperationsInput = class StringFieldUpdateOperationsInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringFieldUpdateOperationsInput.prototype, "set", void 0);
StringFieldUpdateOperationsInput = __decorate([
    (0, graphql_4.InputType)()
], StringFieldUpdateOperationsInput);
exports.StringFieldUpdateOperationsInput = StringFieldUpdateOperationsInput;
let StringFilter = class StringFilter {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true })
], StringFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true })
], StringFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringFilter.prototype, "lt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringFilter.prototype, "lte", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringFilter.prototype, "gt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringFilter.prototype, "gte", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringFilter.prototype, "contains", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringFilter.prototype, "startsWith", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringFilter.prototype, "endsWith", void 0);
__decorate([
    (0, graphql_1.Field)(() => QueryMode, { nullable: true })
], StringFilter.prototype, "mode", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedStringFilter, { nullable: true })
], StringFilter.prototype, "not", void 0);
StringFilter = __decorate([
    (0, graphql_4.InputType)()
], StringFilter);
exports.StringFilter = StringFilter;
let StringNullableFilter = class StringNullableFilter {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringNullableFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true })
], StringNullableFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true })
], StringNullableFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringNullableFilter.prototype, "lt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringNullableFilter.prototype, "lte", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringNullableFilter.prototype, "gt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringNullableFilter.prototype, "gte", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringNullableFilter.prototype, "contains", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringNullableFilter.prototype, "startsWith", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringNullableFilter.prototype, "endsWith", void 0);
__decorate([
    (0, graphql_1.Field)(() => QueryMode, { nullable: true })
], StringNullableFilter.prototype, "mode", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedStringNullableFilter, { nullable: true })
], StringNullableFilter.prototype, "not", void 0);
StringNullableFilter = __decorate([
    (0, graphql_4.InputType)()
], StringNullableFilter);
exports.StringNullableFilter = StringNullableFilter;
let StringNullableWithAggregatesFilter = class StringNullableWithAggregatesFilter {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringNullableWithAggregatesFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true })
], StringNullableWithAggregatesFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true })
], StringNullableWithAggregatesFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringNullableWithAggregatesFilter.prototype, "lt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringNullableWithAggregatesFilter.prototype, "lte", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringNullableWithAggregatesFilter.prototype, "gt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringNullableWithAggregatesFilter.prototype, "gte", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringNullableWithAggregatesFilter.prototype, "contains", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringNullableWithAggregatesFilter.prototype, "startsWith", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringNullableWithAggregatesFilter.prototype, "endsWith", void 0);
__decorate([
    (0, graphql_1.Field)(() => QueryMode, { nullable: true })
], StringNullableWithAggregatesFilter.prototype, "mode", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedStringNullableWithAggregatesFilter, { nullable: true })
], StringNullableWithAggregatesFilter.prototype, "not", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedIntNullableFilter, { nullable: true })
], StringNullableWithAggregatesFilter.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedStringNullableFilter, { nullable: true })
], StringNullableWithAggregatesFilter.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedStringNullableFilter, { nullable: true })
], StringNullableWithAggregatesFilter.prototype, "_max", void 0);
StringNullableWithAggregatesFilter = __decorate([
    (0, graphql_4.InputType)()
], StringNullableWithAggregatesFilter);
exports.StringNullableWithAggregatesFilter = StringNullableWithAggregatesFilter;
let StringWithAggregatesFilter = class StringWithAggregatesFilter {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringWithAggregatesFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true })
], StringWithAggregatesFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true })
], StringWithAggregatesFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringWithAggregatesFilter.prototype, "lt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringWithAggregatesFilter.prototype, "lte", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringWithAggregatesFilter.prototype, "gt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringWithAggregatesFilter.prototype, "gte", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringWithAggregatesFilter.prototype, "contains", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringWithAggregatesFilter.prototype, "startsWith", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringWithAggregatesFilter.prototype, "endsWith", void 0);
__decorate([
    (0, graphql_1.Field)(() => QueryMode, { nullable: true })
], StringWithAggregatesFilter.prototype, "mode", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedStringWithAggregatesFilter, { nullable: true })
], StringWithAggregatesFilter.prototype, "not", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedIntFilter, { nullable: true })
], StringWithAggregatesFilter.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedStringFilter, { nullable: true })
], StringWithAggregatesFilter.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedStringFilter, { nullable: true })
], StringWithAggregatesFilter.prototype, "_max", void 0);
StringWithAggregatesFilter = __decorate([
    (0, graphql_4.InputType)()
], StringWithAggregatesFilter);
exports.StringWithAggregatesFilter = StringWithAggregatesFilter;
let WhatsappQueueAvgAggregate = class WhatsappQueueAvgAggregate {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_7.Float, { nullable: true })
], WhatsappQueueAvgAggregate.prototype, "id", void 0);
WhatsappQueueAvgAggregate = __decorate([
    (0, graphql_5.ObjectType)()
], WhatsappQueueAvgAggregate);
exports.WhatsappQueueAvgAggregate = WhatsappQueueAvgAggregate;
let WhatsappQueueCountAggregate = class WhatsappQueueCountAggregate {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], WhatsappQueueCountAggregate.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], WhatsappQueueCountAggregate.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], WhatsappQueueCountAggregate.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], WhatsappQueueCountAggregate.prototype, "guestId", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], WhatsappQueueCountAggregate.prototype, "_all", void 0);
WhatsappQueueCountAggregate = __decorate([
    (0, graphql_5.ObjectType)()
], WhatsappQueueCountAggregate);
exports.WhatsappQueueCountAggregate = WhatsappQueueCountAggregate;
let WhatsappQueueGroupBy = class WhatsappQueueGroupBy {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], WhatsappQueueGroupBy.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], WhatsappQueueGroupBy.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => QueueStatus, { nullable: false })
], WhatsappQueueGroupBy.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], WhatsappQueueGroupBy.prototype, "guestId", void 0);
__decorate([
    (0, graphql_1.Field)(() => WhatsappQueueCountAggregate, { nullable: true })
], WhatsappQueueGroupBy.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => WhatsappQueueAvgAggregate, { nullable: true })
], WhatsappQueueGroupBy.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => WhatsappQueueSumAggregate, { nullable: true })
], WhatsappQueueGroupBy.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => WhatsappQueueMinAggregate, { nullable: true })
], WhatsappQueueGroupBy.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => WhatsappQueueMaxAggregate, { nullable: true })
], WhatsappQueueGroupBy.prototype, "_max", void 0);
WhatsappQueueGroupBy = __decorate([
    (0, graphql_5.ObjectType)()
], WhatsappQueueGroupBy);
exports.WhatsappQueueGroupBy = WhatsappQueueGroupBy;
let WhatsappQueueListRelationFilter = class WhatsappQueueListRelationFilter {
};
__decorate([
    (0, graphql_1.Field)(() => whatsappQueueWhereInput, { nullable: true })
], WhatsappQueueListRelationFilter.prototype, "every", void 0);
__decorate([
    (0, graphql_1.Field)(() => whatsappQueueWhereInput, { nullable: true })
], WhatsappQueueListRelationFilter.prototype, "some", void 0);
__decorate([
    (0, graphql_1.Field)(() => whatsappQueueWhereInput, { nullable: true })
], WhatsappQueueListRelationFilter.prototype, "none", void 0);
WhatsappQueueListRelationFilter = __decorate([
    (0, graphql_4.InputType)()
], WhatsappQueueListRelationFilter);
exports.WhatsappQueueListRelationFilter = WhatsappQueueListRelationFilter;
let WhatsappQueueMaxAggregate = class WhatsappQueueMaxAggregate {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], WhatsappQueueMaxAggregate.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], WhatsappQueueMaxAggregate.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => QueueStatus, { nullable: true })
], WhatsappQueueMaxAggregate.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], WhatsappQueueMaxAggregate.prototype, "guestId", void 0);
WhatsappQueueMaxAggregate = __decorate([
    (0, graphql_5.ObjectType)()
], WhatsappQueueMaxAggregate);
exports.WhatsappQueueMaxAggregate = WhatsappQueueMaxAggregate;
let WhatsappQueueMinAggregate = class WhatsappQueueMinAggregate {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], WhatsappQueueMinAggregate.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], WhatsappQueueMinAggregate.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => QueueStatus, { nullable: true })
], WhatsappQueueMinAggregate.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], WhatsappQueueMinAggregate.prototype, "guestId", void 0);
WhatsappQueueMinAggregate = __decorate([
    (0, graphql_5.ObjectType)()
], WhatsappQueueMinAggregate);
exports.WhatsappQueueMinAggregate = WhatsappQueueMinAggregate;
let WhatsappQueueSumAggregate = class WhatsappQueueSumAggregate {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], WhatsappQueueSumAggregate.prototype, "id", void 0);
WhatsappQueueSumAggregate = __decorate([
    (0, graphql_5.ObjectType)()
], WhatsappQueueSumAggregate);
exports.WhatsappQueueSumAggregate = WhatsappQueueSumAggregate;
let AggregateUser = class AggregateUser {
};
__decorate([
    (0, graphql_1.Field)(() => UserCountAggregate, { nullable: true })
], AggregateUser.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserMinAggregate, { nullable: true })
], AggregateUser.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserMaxAggregate, { nullable: true })
], AggregateUser.prototype, "_max", void 0);
AggregateUser = __decorate([
    (0, graphql_5.ObjectType)()
], AggregateUser);
exports.AggregateUser = AggregateUser;
let CreateManyUserArgs = class CreateManyUserArgs {
};
__decorate([
    (0, graphql_1.Field)(() => [UserCreateManyInput], { nullable: false }),
    (0, class_transformer_1.Type)(() => UserCreateManyInput)
], CreateManyUserArgs.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], CreateManyUserArgs.prototype, "skipDuplicates", void 0);
CreateManyUserArgs = __decorate([
    (0, graphql_2.ArgsType)()
], CreateManyUserArgs);
exports.CreateManyUserArgs = CreateManyUserArgs;
let CreateOneUserArgs = class CreateOneUserArgs {
};
__decorate([
    (0, graphql_1.Field)(() => UserCreateInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => UserCreateInput)
], CreateOneUserArgs.prototype, "data", void 0);
CreateOneUserArgs = __decorate([
    (0, graphql_2.ArgsType)()
], CreateOneUserArgs);
exports.CreateOneUserArgs = CreateOneUserArgs;
let DeleteManyUserArgs = class DeleteManyUserArgs {
};
__decorate([
    (0, graphql_1.Field)(() => UserWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => UserWhereInput)
], DeleteManyUserArgs.prototype, "where", void 0);
DeleteManyUserArgs = __decorate([
    (0, graphql_2.ArgsType)()
], DeleteManyUserArgs);
exports.DeleteManyUserArgs = DeleteManyUserArgs;
let DeleteOneUserArgs = class DeleteOneUserArgs {
};
__decorate([
    (0, graphql_1.Field)(() => UserWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => UserWhereUniqueInput)
], DeleteOneUserArgs.prototype, "where", void 0);
DeleteOneUserArgs = __decorate([
    (0, graphql_2.ArgsType)()
], DeleteOneUserArgs);
exports.DeleteOneUserArgs = DeleteOneUserArgs;
let FindFirstUserOrThrowArgs = class FindFirstUserOrThrowArgs {
};
__decorate([
    (0, graphql_1.Field)(() => UserWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => UserWhereInput)
], FindFirstUserOrThrowArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [UserOrderByWithRelationInput], { nullable: true })
], FindFirstUserOrThrowArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserWhereUniqueInput, { nullable: true })
], FindFirstUserOrThrowArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], FindFirstUserOrThrowArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], FindFirstUserOrThrowArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => [UserScalarFieldEnum], { nullable: true })
], FindFirstUserOrThrowArgs.prototype, "distinct", void 0);
FindFirstUserOrThrowArgs = __decorate([
    (0, graphql_2.ArgsType)()
], FindFirstUserOrThrowArgs);
exports.FindFirstUserOrThrowArgs = FindFirstUserOrThrowArgs;
let FindFirstUserArgs = class FindFirstUserArgs {
};
__decorate([
    (0, graphql_1.Field)(() => UserWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => UserWhereInput)
], FindFirstUserArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [UserOrderByWithRelationInput], { nullable: true })
], FindFirstUserArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserWhereUniqueInput, { nullable: true })
], FindFirstUserArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], FindFirstUserArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], FindFirstUserArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => [UserScalarFieldEnum], { nullable: true })
], FindFirstUserArgs.prototype, "distinct", void 0);
FindFirstUserArgs = __decorate([
    (0, graphql_2.ArgsType)()
], FindFirstUserArgs);
exports.FindFirstUserArgs = FindFirstUserArgs;
let FindManyUserArgs = class FindManyUserArgs {
};
__decorate([
    (0, graphql_1.Field)(() => UserWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => UserWhereInput)
], FindManyUserArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [UserOrderByWithRelationInput], { nullable: true })
], FindManyUserArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserWhereUniqueInput, { nullable: true })
], FindManyUserArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], FindManyUserArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], FindManyUserArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => [UserScalarFieldEnum], { nullable: true })
], FindManyUserArgs.prototype, "distinct", void 0);
FindManyUserArgs = __decorate([
    (0, graphql_2.ArgsType)()
], FindManyUserArgs);
exports.FindManyUserArgs = FindManyUserArgs;
let FindUniqueUserOrThrowArgs = class FindUniqueUserOrThrowArgs {
};
__decorate([
    (0, graphql_1.Field)(() => UserWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => UserWhereUniqueInput)
], FindUniqueUserOrThrowArgs.prototype, "where", void 0);
FindUniqueUserOrThrowArgs = __decorate([
    (0, graphql_2.ArgsType)()
], FindUniqueUserOrThrowArgs);
exports.FindUniqueUserOrThrowArgs = FindUniqueUserOrThrowArgs;
let FindUniqueUserArgs = class FindUniqueUserArgs {
};
__decorate([
    (0, graphql_1.Field)(() => UserWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => UserWhereUniqueInput)
], FindUniqueUserArgs.prototype, "where", void 0);
FindUniqueUserArgs = __decorate([
    (0, graphql_2.ArgsType)()
], FindUniqueUserArgs);
exports.FindUniqueUserArgs = FindUniqueUserArgs;
let UpdateManyUserArgs = class UpdateManyUserArgs {
};
__decorate([
    (0, graphql_1.Field)(() => UserUpdateManyMutationInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => UserUpdateManyMutationInput)
], UpdateManyUserArgs.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => UserWhereInput)
], UpdateManyUserArgs.prototype, "where", void 0);
UpdateManyUserArgs = __decorate([
    (0, graphql_2.ArgsType)()
], UpdateManyUserArgs);
exports.UpdateManyUserArgs = UpdateManyUserArgs;
let UpdateOneUserArgs = class UpdateOneUserArgs {
};
__decorate([
    (0, graphql_1.Field)(() => UserUpdateInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => UserUpdateInput)
], UpdateOneUserArgs.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => UserWhereUniqueInput)
], UpdateOneUserArgs.prototype, "where", void 0);
UpdateOneUserArgs = __decorate([
    (0, graphql_2.ArgsType)()
], UpdateOneUserArgs);
exports.UpdateOneUserArgs = UpdateOneUserArgs;
let UpsertOneUserArgs = class UpsertOneUserArgs {
};
__decorate([
    (0, graphql_1.Field)(() => UserWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => UserWhereUniqueInput)
], UpsertOneUserArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserCreateInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => UserCreateInput)
], UpsertOneUserArgs.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserUpdateInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => UserUpdateInput)
], UpsertOneUserArgs.prototype, "update", void 0);
UpsertOneUserArgs = __decorate([
    (0, graphql_2.ArgsType)()
], UpsertOneUserArgs);
exports.UpsertOneUserArgs = UpsertOneUserArgs;
let UserAggregateArgs = class UserAggregateArgs {
};
__decorate([
    (0, graphql_1.Field)(() => UserWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => UserWhereInput)
], UserAggregateArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [UserOrderByWithRelationInput], { nullable: true })
], UserAggregateArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserWhereUniqueInput, { nullable: true })
], UserAggregateArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], UserAggregateArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], UserAggregateArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserCountAggregateInput, { nullable: true })
], UserAggregateArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserMinAggregateInput, { nullable: true })
], UserAggregateArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserMaxAggregateInput, { nullable: true })
], UserAggregateArgs.prototype, "_max", void 0);
UserAggregateArgs = __decorate([
    (0, graphql_2.ArgsType)()
], UserAggregateArgs);
exports.UserAggregateArgs = UserAggregateArgs;
let UserCountAggregateInput = class UserCountAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], UserCountAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], UserCountAggregateInput.prototype, "fullName", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], UserCountAggregateInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], UserCountAggregateInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], UserCountAggregateInput.prototype, "whatsapp", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], UserCountAggregateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], UserCountAggregateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], UserCountAggregateInput.prototype, "deletedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], UserCountAggregateInput.prototype, "role", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], UserCountAggregateInput.prototype, "guestInfoId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], UserCountAggregateInput.prototype, "_all", void 0);
UserCountAggregateInput = __decorate([
    (0, graphql_4.InputType)()
], UserCountAggregateInput);
exports.UserCountAggregateInput = UserCountAggregateInput;
let UserCountAggregate = class UserCountAggregate {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], UserCountAggregate.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], UserCountAggregate.prototype, "fullName", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], UserCountAggregate.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], UserCountAggregate.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], UserCountAggregate.prototype, "whatsapp", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], UserCountAggregate.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], UserCountAggregate.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], UserCountAggregate.prototype, "deletedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], UserCountAggregate.prototype, "role", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], UserCountAggregate.prototype, "guestInfoId", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], UserCountAggregate.prototype, "_all", void 0);
UserCountAggregate = __decorate([
    (0, graphql_5.ObjectType)()
], UserCountAggregate);
exports.UserCountAggregate = UserCountAggregate;
let UserCountOrderByAggregateInput = class UserCountOrderByAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserCountOrderByAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserCountOrderByAggregateInput.prototype, "fullName", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserCountOrderByAggregateInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserCountOrderByAggregateInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserCountOrderByAggregateInput.prototype, "whatsapp", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserCountOrderByAggregateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserCountOrderByAggregateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserCountOrderByAggregateInput.prototype, "deletedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserCountOrderByAggregateInput.prototype, "role", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserCountOrderByAggregateInput.prototype, "guestInfoId", void 0);
UserCountOrderByAggregateInput = __decorate([
    (0, graphql_4.InputType)()
], UserCountOrderByAggregateInput);
exports.UserCountOrderByAggregateInput = UserCountOrderByAggregateInput;
let UserCreateManyInput = class UserCreateManyInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], UserCreateManyInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], UserCreateManyInput.prototype, "fullName", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], UserCreateManyInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], UserCreateManyInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], UserCreateManyInput.prototype, "whatsapp", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], UserCreateManyInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], UserCreateManyInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], UserCreateManyInput.prototype, "deletedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserRole, { nullable: false })
], UserCreateManyInput.prototype, "role", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], UserCreateManyInput.prototype, "guestInfoId", void 0);
UserCreateManyInput = __decorate([
    (0, graphql_4.InputType)()
], UserCreateManyInput);
exports.UserCreateManyInput = UserCreateManyInput;
let UserCreateNestedOneWithoutGuestInfoInput = class UserCreateNestedOneWithoutGuestInfoInput {
};
__decorate([
    (0, graphql_1.Field)(() => UserCreateWithoutGuestInfoInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => UserCreateWithoutGuestInfoInput)
], UserCreateNestedOneWithoutGuestInfoInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserCreateOrConnectWithoutGuestInfoInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => UserCreateOrConnectWithoutGuestInfoInput)
], UserCreateNestedOneWithoutGuestInfoInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserWhereUniqueInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => UserWhereUniqueInput)
], UserCreateNestedOneWithoutGuestInfoInput.prototype, "connect", void 0);
UserCreateNestedOneWithoutGuestInfoInput = __decorate([
    (0, graphql_4.InputType)()
], UserCreateNestedOneWithoutGuestInfoInput);
exports.UserCreateNestedOneWithoutGuestInfoInput = UserCreateNestedOneWithoutGuestInfoInput;
let UserCreateOrConnectWithoutGuestInfoInput = class UserCreateOrConnectWithoutGuestInfoInput {
};
__decorate([
    (0, graphql_1.Field)(() => UserWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => UserWhereUniqueInput)
], UserCreateOrConnectWithoutGuestInfoInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserCreateWithoutGuestInfoInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => UserCreateWithoutGuestInfoInput)
], UserCreateOrConnectWithoutGuestInfoInput.prototype, "create", void 0);
UserCreateOrConnectWithoutGuestInfoInput = __decorate([
    (0, graphql_4.InputType)()
], UserCreateOrConnectWithoutGuestInfoInput);
exports.UserCreateOrConnectWithoutGuestInfoInput = UserCreateOrConnectWithoutGuestInfoInput;
let UserCreateWithoutGuestInfoInput = class UserCreateWithoutGuestInfoInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], UserCreateWithoutGuestInfoInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], UserCreateWithoutGuestInfoInput.prototype, "fullName", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], UserCreateWithoutGuestInfoInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], UserCreateWithoutGuestInfoInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], UserCreateWithoutGuestInfoInput.prototype, "whatsapp", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], UserCreateWithoutGuestInfoInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], UserCreateWithoutGuestInfoInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], UserCreateWithoutGuestInfoInput.prototype, "deletedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserRole, { nullable: false })
], UserCreateWithoutGuestInfoInput.prototype, "role", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], UserCreateWithoutGuestInfoInput.prototype, "guestInfoId", void 0);
UserCreateWithoutGuestInfoInput = __decorate([
    (0, graphql_4.InputType)()
], UserCreateWithoutGuestInfoInput);
exports.UserCreateWithoutGuestInfoInput = UserCreateWithoutGuestInfoInput;
let UserCreateInput = class UserCreateInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], UserCreateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], UserCreateInput.prototype, "fullName", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], UserCreateInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], UserCreateInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], UserCreateInput.prototype, "whatsapp", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], UserCreateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], UserCreateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], UserCreateInput.prototype, "deletedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserRole, { nullable: false })
], UserCreateInput.prototype, "role", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], UserCreateInput.prototype, "guestInfoId", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestCreateNestedOneWithoutUserInput, { nullable: true })
], UserCreateInput.prototype, "guestInfo", void 0);
UserCreateInput = __decorate([
    (0, graphql_4.InputType)()
], UserCreateInput);
exports.UserCreateInput = UserCreateInput;
let UserGroupByArgs = class UserGroupByArgs {
};
__decorate([
    (0, graphql_1.Field)(() => UserWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => UserWhereInput)
], UserGroupByArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [UserOrderByWithAggregationInput], { nullable: true })
], UserGroupByArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => [UserScalarFieldEnum], { nullable: false })
], UserGroupByArgs.prototype, "by", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserScalarWhereWithAggregatesInput, { nullable: true })
], UserGroupByArgs.prototype, "having", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], UserGroupByArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], UserGroupByArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserCountAggregateInput, { nullable: true })
], UserGroupByArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserMinAggregateInput, { nullable: true })
], UserGroupByArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserMaxAggregateInput, { nullable: true })
], UserGroupByArgs.prototype, "_max", void 0);
UserGroupByArgs = __decorate([
    (0, graphql_2.ArgsType)()
], UserGroupByArgs);
exports.UserGroupByArgs = UserGroupByArgs;
let UserGroupBy = class UserGroupBy {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], UserGroupBy.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], UserGroupBy.prototype, "fullName", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], UserGroupBy.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], UserGroupBy.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], UserGroupBy.prototype, "whatsapp", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], UserGroupBy.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], UserGroupBy.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], UserGroupBy.prototype, "deletedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserRole, { nullable: false })
], UserGroupBy.prototype, "role", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], UserGroupBy.prototype, "guestInfoId", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserCountAggregate, { nullable: true })
], UserGroupBy.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserMinAggregate, { nullable: true })
], UserGroupBy.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserMaxAggregate, { nullable: true })
], UserGroupBy.prototype, "_max", void 0);
UserGroupBy = __decorate([
    (0, graphql_5.ObjectType)()
], UserGroupBy);
exports.UserGroupBy = UserGroupBy;
let UserMaxAggregateInput = class UserMaxAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], UserMaxAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], UserMaxAggregateInput.prototype, "fullName", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], UserMaxAggregateInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], UserMaxAggregateInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], UserMaxAggregateInput.prototype, "whatsapp", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], UserMaxAggregateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], UserMaxAggregateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], UserMaxAggregateInput.prototype, "deletedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], UserMaxAggregateInput.prototype, "role", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], UserMaxAggregateInput.prototype, "guestInfoId", void 0);
UserMaxAggregateInput = __decorate([
    (0, graphql_4.InputType)()
], UserMaxAggregateInput);
exports.UserMaxAggregateInput = UserMaxAggregateInput;
let UserMaxAggregate = class UserMaxAggregate {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], UserMaxAggregate.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], UserMaxAggregate.prototype, "fullName", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], UserMaxAggregate.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], UserMaxAggregate.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], UserMaxAggregate.prototype, "whatsapp", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], UserMaxAggregate.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], UserMaxAggregate.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], UserMaxAggregate.prototype, "deletedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserRole, { nullable: true })
], UserMaxAggregate.prototype, "role", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], UserMaxAggregate.prototype, "guestInfoId", void 0);
UserMaxAggregate = __decorate([
    (0, graphql_5.ObjectType)()
], UserMaxAggregate);
exports.UserMaxAggregate = UserMaxAggregate;
let UserMaxOrderByAggregateInput = class UserMaxOrderByAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserMaxOrderByAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserMaxOrderByAggregateInput.prototype, "fullName", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserMaxOrderByAggregateInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserMaxOrderByAggregateInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserMaxOrderByAggregateInput.prototype, "whatsapp", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserMaxOrderByAggregateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserMaxOrderByAggregateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserMaxOrderByAggregateInput.prototype, "deletedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserMaxOrderByAggregateInput.prototype, "role", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserMaxOrderByAggregateInput.prototype, "guestInfoId", void 0);
UserMaxOrderByAggregateInput = __decorate([
    (0, graphql_4.InputType)()
], UserMaxOrderByAggregateInput);
exports.UserMaxOrderByAggregateInput = UserMaxOrderByAggregateInput;
let UserMinAggregateInput = class UserMinAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], UserMinAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], UserMinAggregateInput.prototype, "fullName", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], UserMinAggregateInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], UserMinAggregateInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], UserMinAggregateInput.prototype, "whatsapp", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], UserMinAggregateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], UserMinAggregateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], UserMinAggregateInput.prototype, "deletedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], UserMinAggregateInput.prototype, "role", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], UserMinAggregateInput.prototype, "guestInfoId", void 0);
UserMinAggregateInput = __decorate([
    (0, graphql_4.InputType)()
], UserMinAggregateInput);
exports.UserMinAggregateInput = UserMinAggregateInput;
let UserMinAggregate = class UserMinAggregate {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], UserMinAggregate.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], UserMinAggregate.prototype, "fullName", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], UserMinAggregate.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], UserMinAggregate.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], UserMinAggregate.prototype, "whatsapp", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], UserMinAggregate.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], UserMinAggregate.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], UserMinAggregate.prototype, "deletedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserRole, { nullable: true })
], UserMinAggregate.prototype, "role", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], UserMinAggregate.prototype, "guestInfoId", void 0);
UserMinAggregate = __decorate([
    (0, graphql_5.ObjectType)()
], UserMinAggregate);
exports.UserMinAggregate = UserMinAggregate;
let UserMinOrderByAggregateInput = class UserMinOrderByAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserMinOrderByAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserMinOrderByAggregateInput.prototype, "fullName", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserMinOrderByAggregateInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserMinOrderByAggregateInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserMinOrderByAggregateInput.prototype, "whatsapp", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserMinOrderByAggregateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserMinOrderByAggregateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserMinOrderByAggregateInput.prototype, "deletedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserMinOrderByAggregateInput.prototype, "role", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserMinOrderByAggregateInput.prototype, "guestInfoId", void 0);
UserMinOrderByAggregateInput = __decorate([
    (0, graphql_4.InputType)()
], UserMinOrderByAggregateInput);
exports.UserMinOrderByAggregateInput = UserMinOrderByAggregateInput;
let UserOrderByWithAggregationInput = class UserOrderByWithAggregationInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserOrderByWithAggregationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserOrderByWithAggregationInput.prototype, "fullName", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserOrderByWithAggregationInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserOrderByWithAggregationInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserOrderByWithAggregationInput.prototype, "whatsapp", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserOrderByWithAggregationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserOrderByWithAggregationInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrderInput, { nullable: true })
], UserOrderByWithAggregationInput.prototype, "deletedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserOrderByWithAggregationInput.prototype, "role", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrderInput, { nullable: true })
], UserOrderByWithAggregationInput.prototype, "guestInfoId", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserCountOrderByAggregateInput, { nullable: true })
], UserOrderByWithAggregationInput.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserMaxOrderByAggregateInput, { nullable: true })
], UserOrderByWithAggregationInput.prototype, "_max", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserMinOrderByAggregateInput, { nullable: true })
], UserOrderByWithAggregationInput.prototype, "_min", void 0);
UserOrderByWithAggregationInput = __decorate([
    (0, graphql_4.InputType)()
], UserOrderByWithAggregationInput);
exports.UserOrderByWithAggregationInput = UserOrderByWithAggregationInput;
let UserOrderByWithRelationInput = class UserOrderByWithRelationInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserOrderByWithRelationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserOrderByWithRelationInput.prototype, "fullName", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserOrderByWithRelationInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserOrderByWithRelationInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserOrderByWithRelationInput.prototype, "whatsapp", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserOrderByWithRelationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserOrderByWithRelationInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrderInput, { nullable: true })
], UserOrderByWithRelationInput.prototype, "deletedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserOrderByWithRelationInput.prototype, "role", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrderInput, { nullable: true })
], UserOrderByWithRelationInput.prototype, "guestInfoId", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestOrderByWithRelationInput, { nullable: true })
], UserOrderByWithRelationInput.prototype, "guestInfo", void 0);
UserOrderByWithRelationInput = __decorate([
    (0, graphql_4.InputType)()
], UserOrderByWithRelationInput);
exports.UserOrderByWithRelationInput = UserOrderByWithRelationInput;
let UserRelationFilter = class UserRelationFilter {
};
__decorate([
    (0, graphql_1.Field)(() => UserWhereInput, { nullable: true })
], UserRelationFilter.prototype, "is", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserWhereInput, { nullable: true })
], UserRelationFilter.prototype, "isNot", void 0);
UserRelationFilter = __decorate([
    (0, graphql_4.InputType)()
], UserRelationFilter);
exports.UserRelationFilter = UserRelationFilter;
let UserScalarWhereWithAggregatesInput = UserScalarWhereWithAggregatesInput_1 = class UserScalarWhereWithAggregatesInput {
};
__decorate([
    (0, graphql_1.Field)(() => [UserScalarWhereWithAggregatesInput_1], { nullable: true })
], UserScalarWhereWithAggregatesInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [UserScalarWhereWithAggregatesInput_1], { nullable: true })
], UserScalarWhereWithAggregatesInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [UserScalarWhereWithAggregatesInput_1], { nullable: true })
], UserScalarWhereWithAggregatesInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringWithAggregatesFilter, { nullable: true })
], UserScalarWhereWithAggregatesInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringWithAggregatesFilter, { nullable: true })
], UserScalarWhereWithAggregatesInput.prototype, "fullName", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringWithAggregatesFilter, { nullable: true })
], UserScalarWhereWithAggregatesInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringWithAggregatesFilter, { nullable: true })
], UserScalarWhereWithAggregatesInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringWithAggregatesFilter, { nullable: true })
], UserScalarWhereWithAggregatesInput.prototype, "whatsapp", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeWithAggregatesFilter, { nullable: true })
], UserScalarWhereWithAggregatesInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeWithAggregatesFilter, { nullable: true })
], UserScalarWhereWithAggregatesInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeNullableWithAggregatesFilter, { nullable: true })
], UserScalarWhereWithAggregatesInput.prototype, "deletedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => EnumUserRoleWithAggregatesFilter, { nullable: true })
], UserScalarWhereWithAggregatesInput.prototype, "role", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringNullableWithAggregatesFilter, { nullable: true })
], UserScalarWhereWithAggregatesInput.prototype, "guestInfoId", void 0);
UserScalarWhereWithAggregatesInput = UserScalarWhereWithAggregatesInput_1 = __decorate([
    (0, graphql_4.InputType)()
], UserScalarWhereWithAggregatesInput);
exports.UserScalarWhereWithAggregatesInput = UserScalarWhereWithAggregatesInput;
let UserUncheckedCreateWithoutGuestInfoInput = class UserUncheckedCreateWithoutGuestInfoInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], UserUncheckedCreateWithoutGuestInfoInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], UserUncheckedCreateWithoutGuestInfoInput.prototype, "fullName", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], UserUncheckedCreateWithoutGuestInfoInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], UserUncheckedCreateWithoutGuestInfoInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], UserUncheckedCreateWithoutGuestInfoInput.prototype, "whatsapp", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], UserUncheckedCreateWithoutGuestInfoInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], UserUncheckedCreateWithoutGuestInfoInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], UserUncheckedCreateWithoutGuestInfoInput.prototype, "deletedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserRole, { nullable: false })
], UserUncheckedCreateWithoutGuestInfoInput.prototype, "role", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], UserUncheckedCreateWithoutGuestInfoInput.prototype, "guestInfoId", void 0);
UserUncheckedCreateWithoutGuestInfoInput = __decorate([
    (0, graphql_4.InputType)()
], UserUncheckedCreateWithoutGuestInfoInput);
exports.UserUncheckedCreateWithoutGuestInfoInput = UserUncheckedCreateWithoutGuestInfoInput;
let UserUncheckedCreateInput = class UserUncheckedCreateInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], UserUncheckedCreateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], UserUncheckedCreateInput.prototype, "fullName", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], UserUncheckedCreateInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], UserUncheckedCreateInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], UserUncheckedCreateInput.prototype, "whatsapp", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], UserUncheckedCreateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], UserUncheckedCreateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], UserUncheckedCreateInput.prototype, "deletedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserRole, { nullable: false })
], UserUncheckedCreateInput.prototype, "role", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], UserUncheckedCreateInput.prototype, "guestInfoId", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestUncheckedCreateNestedOneWithoutUserInput, { nullable: true })
], UserUncheckedCreateInput.prototype, "guestInfo", void 0);
UserUncheckedCreateInput = __decorate([
    (0, graphql_4.InputType)()
], UserUncheckedCreateInput);
exports.UserUncheckedCreateInput = UserUncheckedCreateInput;
let UserUncheckedUpdateManyInput = class UserUncheckedUpdateManyInput {
};
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], UserUncheckedUpdateManyInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], UserUncheckedUpdateManyInput.prototype, "fullName", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], UserUncheckedUpdateManyInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], UserUncheckedUpdateManyInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], UserUncheckedUpdateManyInput.prototype, "whatsapp", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], UserUncheckedUpdateManyInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], UserUncheckedUpdateManyInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
], UserUncheckedUpdateManyInput.prototype, "deletedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => EnumUserRoleFieldUpdateOperationsInput, { nullable: true })
], UserUncheckedUpdateManyInput.prototype, "role", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], UserUncheckedUpdateManyInput.prototype, "guestInfoId", void 0);
UserUncheckedUpdateManyInput = __decorate([
    (0, graphql_4.InputType)()
], UserUncheckedUpdateManyInput);
exports.UserUncheckedUpdateManyInput = UserUncheckedUpdateManyInput;
let UserUncheckedUpdateWithoutGuestInfoInput = class UserUncheckedUpdateWithoutGuestInfoInput {
};
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], UserUncheckedUpdateWithoutGuestInfoInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], UserUncheckedUpdateWithoutGuestInfoInput.prototype, "fullName", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], UserUncheckedUpdateWithoutGuestInfoInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], UserUncheckedUpdateWithoutGuestInfoInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], UserUncheckedUpdateWithoutGuestInfoInput.prototype, "whatsapp", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], UserUncheckedUpdateWithoutGuestInfoInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], UserUncheckedUpdateWithoutGuestInfoInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
], UserUncheckedUpdateWithoutGuestInfoInput.prototype, "deletedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => EnumUserRoleFieldUpdateOperationsInput, { nullable: true })
], UserUncheckedUpdateWithoutGuestInfoInput.prototype, "role", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], UserUncheckedUpdateWithoutGuestInfoInput.prototype, "guestInfoId", void 0);
UserUncheckedUpdateWithoutGuestInfoInput = __decorate([
    (0, graphql_4.InputType)()
], UserUncheckedUpdateWithoutGuestInfoInput);
exports.UserUncheckedUpdateWithoutGuestInfoInput = UserUncheckedUpdateWithoutGuestInfoInput;
let UserUncheckedUpdateInput = class UserUncheckedUpdateInput {
};
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], UserUncheckedUpdateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], UserUncheckedUpdateInput.prototype, "fullName", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], UserUncheckedUpdateInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], UserUncheckedUpdateInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], UserUncheckedUpdateInput.prototype, "whatsapp", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], UserUncheckedUpdateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], UserUncheckedUpdateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
], UserUncheckedUpdateInput.prototype, "deletedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => EnumUserRoleFieldUpdateOperationsInput, { nullable: true })
], UserUncheckedUpdateInput.prototype, "role", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], UserUncheckedUpdateInput.prototype, "guestInfoId", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestUncheckedUpdateOneWithoutUserNestedInput, { nullable: true })
], UserUncheckedUpdateInput.prototype, "guestInfo", void 0);
UserUncheckedUpdateInput = __decorate([
    (0, graphql_4.InputType)()
], UserUncheckedUpdateInput);
exports.UserUncheckedUpdateInput = UserUncheckedUpdateInput;
let UserUpdateManyMutationInput = class UserUpdateManyMutationInput {
};
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], UserUpdateManyMutationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], UserUpdateManyMutationInput.prototype, "fullName", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], UserUpdateManyMutationInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], UserUpdateManyMutationInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], UserUpdateManyMutationInput.prototype, "whatsapp", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], UserUpdateManyMutationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], UserUpdateManyMutationInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
], UserUpdateManyMutationInput.prototype, "deletedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => EnumUserRoleFieldUpdateOperationsInput, { nullable: true })
], UserUpdateManyMutationInput.prototype, "role", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], UserUpdateManyMutationInput.prototype, "guestInfoId", void 0);
UserUpdateManyMutationInput = __decorate([
    (0, graphql_4.InputType)()
], UserUpdateManyMutationInput);
exports.UserUpdateManyMutationInput = UserUpdateManyMutationInput;
let UserUpdateOneRequiredWithoutGuestInfoNestedInput = class UserUpdateOneRequiredWithoutGuestInfoNestedInput {
};
__decorate([
    (0, graphql_1.Field)(() => UserCreateWithoutGuestInfoInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => UserCreateWithoutGuestInfoInput)
], UserUpdateOneRequiredWithoutGuestInfoNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserCreateOrConnectWithoutGuestInfoInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => UserCreateOrConnectWithoutGuestInfoInput)
], UserUpdateOneRequiredWithoutGuestInfoNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserUpsertWithoutGuestInfoInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => UserUpsertWithoutGuestInfoInput)
], UserUpdateOneRequiredWithoutGuestInfoNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserWhereUniqueInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => UserWhereUniqueInput)
], UserUpdateOneRequiredWithoutGuestInfoNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserUpdateToOneWithWhereWithoutGuestInfoInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => UserUpdateToOneWithWhereWithoutGuestInfoInput)
], UserUpdateOneRequiredWithoutGuestInfoNestedInput.prototype, "update", void 0);
UserUpdateOneRequiredWithoutGuestInfoNestedInput = __decorate([
    (0, graphql_4.InputType)()
], UserUpdateOneRequiredWithoutGuestInfoNestedInput);
exports.UserUpdateOneRequiredWithoutGuestInfoNestedInput = UserUpdateOneRequiredWithoutGuestInfoNestedInput;
let UserUpdateToOneWithWhereWithoutGuestInfoInput = class UserUpdateToOneWithWhereWithoutGuestInfoInput {
};
__decorate([
    (0, graphql_1.Field)(() => UserWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => UserWhereInput)
], UserUpdateToOneWithWhereWithoutGuestInfoInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserUpdateWithoutGuestInfoInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => UserUpdateWithoutGuestInfoInput)
], UserUpdateToOneWithWhereWithoutGuestInfoInput.prototype, "data", void 0);
UserUpdateToOneWithWhereWithoutGuestInfoInput = __decorate([
    (0, graphql_4.InputType)()
], UserUpdateToOneWithWhereWithoutGuestInfoInput);
exports.UserUpdateToOneWithWhereWithoutGuestInfoInput = UserUpdateToOneWithWhereWithoutGuestInfoInput;
let UserUpdateWithoutGuestInfoInput = class UserUpdateWithoutGuestInfoInput {
};
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], UserUpdateWithoutGuestInfoInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], UserUpdateWithoutGuestInfoInput.prototype, "fullName", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], UserUpdateWithoutGuestInfoInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], UserUpdateWithoutGuestInfoInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], UserUpdateWithoutGuestInfoInput.prototype, "whatsapp", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], UserUpdateWithoutGuestInfoInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], UserUpdateWithoutGuestInfoInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
], UserUpdateWithoutGuestInfoInput.prototype, "deletedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => EnumUserRoleFieldUpdateOperationsInput, { nullable: true })
], UserUpdateWithoutGuestInfoInput.prototype, "role", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], UserUpdateWithoutGuestInfoInput.prototype, "guestInfoId", void 0);
UserUpdateWithoutGuestInfoInput = __decorate([
    (0, graphql_4.InputType)()
], UserUpdateWithoutGuestInfoInput);
exports.UserUpdateWithoutGuestInfoInput = UserUpdateWithoutGuestInfoInput;
let UserUpdateInput = class UserUpdateInput {
};
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], UserUpdateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], UserUpdateInput.prototype, "fullName", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], UserUpdateInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], UserUpdateInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], UserUpdateInput.prototype, "whatsapp", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], UserUpdateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], UserUpdateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
], UserUpdateInput.prototype, "deletedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => EnumUserRoleFieldUpdateOperationsInput, { nullable: true })
], UserUpdateInput.prototype, "role", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], UserUpdateInput.prototype, "guestInfoId", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestUpdateOneWithoutUserNestedInput, { nullable: true })
], UserUpdateInput.prototype, "guestInfo", void 0);
UserUpdateInput = __decorate([
    (0, graphql_4.InputType)()
], UserUpdateInput);
exports.UserUpdateInput = UserUpdateInput;
let UserUpsertWithoutGuestInfoInput = class UserUpsertWithoutGuestInfoInput {
};
__decorate([
    (0, graphql_1.Field)(() => UserUpdateWithoutGuestInfoInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => UserUpdateWithoutGuestInfoInput)
], UserUpsertWithoutGuestInfoInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserCreateWithoutGuestInfoInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => UserCreateWithoutGuestInfoInput)
], UserUpsertWithoutGuestInfoInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => UserWhereInput)
], UserUpsertWithoutGuestInfoInput.prototype, "where", void 0);
UserUpsertWithoutGuestInfoInput = __decorate([
    (0, graphql_4.InputType)()
], UserUpsertWithoutGuestInfoInput);
exports.UserUpsertWithoutGuestInfoInput = UserUpsertWithoutGuestInfoInput;
let UserWhereUniqueInput = class UserWhereUniqueInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], UserWhereUniqueInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], UserWhereUniqueInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], UserWhereUniqueInput.prototype, "whatsapp", void 0);
__decorate([
    (0, graphql_1.Field)(() => [UserWhereInput], { nullable: true })
], UserWhereUniqueInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [UserWhereInput], { nullable: true })
], UserWhereUniqueInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [UserWhereInput], { nullable: true })
], UserWhereUniqueInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFilter, { nullable: true })
], UserWhereUniqueInput.prototype, "fullName", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFilter, { nullable: true })
], UserWhereUniqueInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFilter, { nullable: true })
], UserWhereUniqueInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFilter, { nullable: true })
], UserWhereUniqueInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeNullableFilter, { nullable: true })
], UserWhereUniqueInput.prototype, "deletedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => EnumUserRoleFilter, { nullable: true })
], UserWhereUniqueInput.prototype, "role", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringNullableFilter, { nullable: true })
], UserWhereUniqueInput.prototype, "guestInfoId", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestNullableRelationFilter, { nullable: true })
], UserWhereUniqueInput.prototype, "guestInfo", void 0);
UserWhereUniqueInput = __decorate([
    (0, graphql_4.InputType)()
], UserWhereUniqueInput);
exports.UserWhereUniqueInput = UserWhereUniqueInput;
let UserWhereInput = UserWhereInput_1 = class UserWhereInput {
};
__decorate([
    (0, graphql_1.Field)(() => [UserWhereInput_1], { nullable: true })
], UserWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [UserWhereInput_1], { nullable: true })
], UserWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [UserWhereInput_1], { nullable: true })
], UserWhereInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFilter, { nullable: true })
], UserWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFilter, { nullable: true })
], UserWhereInput.prototype, "fullName", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFilter, { nullable: true })
], UserWhereInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFilter, { nullable: true })
], UserWhereInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFilter, { nullable: true })
], UserWhereInput.prototype, "whatsapp", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFilter, { nullable: true })
], UserWhereInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFilter, { nullable: true })
], UserWhereInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeNullableFilter, { nullable: true })
], UserWhereInput.prototype, "deletedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => EnumUserRoleFilter, { nullable: true })
], UserWhereInput.prototype, "role", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringNullableFilter, { nullable: true })
], UserWhereInput.prototype, "guestInfoId", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestNullableRelationFilter, { nullable: true })
], UserWhereInput.prototype, "guestInfo", void 0);
UserWhereInput = UserWhereInput_1 = __decorate([
    (0, graphql_4.InputType)()
], UserWhereInput);
exports.UserWhereInput = UserWhereInput;
let User = class User {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], User.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], User.prototype, "fullName", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], User.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], User.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], User.prototype, "whatsapp", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], User.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], User.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], User.prototype, "deletedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserRole, { nullable: false })
], User.prototype, "role", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], User.prototype, "guestInfoId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Guest, { nullable: true })
], User.prototype, "guestInfo", void 0);
User = __decorate([
    (0, graphql_5.ObjectType)()
], User);
exports.User = User;
let CreateManywhatsappQueueArgs = class CreateManywhatsappQueueArgs {
};
__decorate([
    (0, graphql_1.Field)(() => [whatsappQueueCreateManyInput], { nullable: false }),
    (0, class_transformer_1.Type)(() => whatsappQueueCreateManyInput)
], CreateManywhatsappQueueArgs.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], CreateManywhatsappQueueArgs.prototype, "skipDuplicates", void 0);
CreateManywhatsappQueueArgs = __decorate([
    (0, graphql_2.ArgsType)()
], CreateManywhatsappQueueArgs);
exports.CreateManywhatsappQueueArgs = CreateManywhatsappQueueArgs;
let CreateOnewhatsappQueueArgs = class CreateOnewhatsappQueueArgs {
};
__decorate([
    (0, graphql_1.Field)(() => whatsappQueueCreateInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => whatsappQueueCreateInput)
], CreateOnewhatsappQueueArgs.prototype, "data", void 0);
CreateOnewhatsappQueueArgs = __decorate([
    (0, graphql_2.ArgsType)()
], CreateOnewhatsappQueueArgs);
exports.CreateOnewhatsappQueueArgs = CreateOnewhatsappQueueArgs;
let DeleteManywhatsappQueueArgs = class DeleteManywhatsappQueueArgs {
};
__decorate([
    (0, graphql_1.Field)(() => whatsappQueueWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => whatsappQueueWhereInput)
], DeleteManywhatsappQueueArgs.prototype, "where", void 0);
DeleteManywhatsappQueueArgs = __decorate([
    (0, graphql_2.ArgsType)()
], DeleteManywhatsappQueueArgs);
exports.DeleteManywhatsappQueueArgs = DeleteManywhatsappQueueArgs;
let DeleteOnewhatsappQueueArgs = class DeleteOnewhatsappQueueArgs {
};
__decorate([
    (0, graphql_1.Field)(() => whatsappQueueWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => whatsappQueueWhereUniqueInput)
], DeleteOnewhatsappQueueArgs.prototype, "where", void 0);
DeleteOnewhatsappQueueArgs = __decorate([
    (0, graphql_2.ArgsType)()
], DeleteOnewhatsappQueueArgs);
exports.DeleteOnewhatsappQueueArgs = DeleteOnewhatsappQueueArgs;
let FindFirstwhatsappQueueOrThrowArgs = class FindFirstwhatsappQueueOrThrowArgs {
};
__decorate([
    (0, graphql_1.Field)(() => whatsappQueueWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => whatsappQueueWhereInput)
], FindFirstwhatsappQueueOrThrowArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [whatsappQueueOrderByWithRelationInput], { nullable: true })
], FindFirstwhatsappQueueOrThrowArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => whatsappQueueWhereUniqueInput, { nullable: true })
], FindFirstwhatsappQueueOrThrowArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], FindFirstwhatsappQueueOrThrowArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], FindFirstwhatsappQueueOrThrowArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => [WhatsappQueueScalarFieldEnum], { nullable: true })
], FindFirstwhatsappQueueOrThrowArgs.prototype, "distinct", void 0);
FindFirstwhatsappQueueOrThrowArgs = __decorate([
    (0, graphql_2.ArgsType)()
], FindFirstwhatsappQueueOrThrowArgs);
exports.FindFirstwhatsappQueueOrThrowArgs = FindFirstwhatsappQueueOrThrowArgs;
let FindFirstwhatsappQueueArgs = class FindFirstwhatsappQueueArgs {
};
__decorate([
    (0, graphql_1.Field)(() => whatsappQueueWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => whatsappQueueWhereInput)
], FindFirstwhatsappQueueArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [whatsappQueueOrderByWithRelationInput], { nullable: true })
], FindFirstwhatsappQueueArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => whatsappQueueWhereUniqueInput, { nullable: true })
], FindFirstwhatsappQueueArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], FindFirstwhatsappQueueArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], FindFirstwhatsappQueueArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => [WhatsappQueueScalarFieldEnum], { nullable: true })
], FindFirstwhatsappQueueArgs.prototype, "distinct", void 0);
FindFirstwhatsappQueueArgs = __decorate([
    (0, graphql_2.ArgsType)()
], FindFirstwhatsappQueueArgs);
exports.FindFirstwhatsappQueueArgs = FindFirstwhatsappQueueArgs;
let FindManywhatsappQueueArgs = class FindManywhatsappQueueArgs {
};
__decorate([
    (0, graphql_1.Field)(() => whatsappQueueWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => whatsappQueueWhereInput)
], FindManywhatsappQueueArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [whatsappQueueOrderByWithRelationInput], { nullable: true })
], FindManywhatsappQueueArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => whatsappQueueWhereUniqueInput, { nullable: true })
], FindManywhatsappQueueArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], FindManywhatsappQueueArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], FindManywhatsappQueueArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => [WhatsappQueueScalarFieldEnum], { nullable: true })
], FindManywhatsappQueueArgs.prototype, "distinct", void 0);
FindManywhatsappQueueArgs = __decorate([
    (0, graphql_2.ArgsType)()
], FindManywhatsappQueueArgs);
exports.FindManywhatsappQueueArgs = FindManywhatsappQueueArgs;
let FindUniquewhatsappQueueOrThrowArgs = class FindUniquewhatsappQueueOrThrowArgs {
};
__decorate([
    (0, graphql_1.Field)(() => whatsappQueueWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => whatsappQueueWhereUniqueInput)
], FindUniquewhatsappQueueOrThrowArgs.prototype, "where", void 0);
FindUniquewhatsappQueueOrThrowArgs = __decorate([
    (0, graphql_2.ArgsType)()
], FindUniquewhatsappQueueOrThrowArgs);
exports.FindUniquewhatsappQueueOrThrowArgs = FindUniquewhatsappQueueOrThrowArgs;
let FindUniquewhatsappQueueArgs = class FindUniquewhatsappQueueArgs {
};
__decorate([
    (0, graphql_1.Field)(() => whatsappQueueWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => whatsappQueueWhereUniqueInput)
], FindUniquewhatsappQueueArgs.prototype, "where", void 0);
FindUniquewhatsappQueueArgs = __decorate([
    (0, graphql_2.ArgsType)()
], FindUniquewhatsappQueueArgs);
exports.FindUniquewhatsappQueueArgs = FindUniquewhatsappQueueArgs;
let UpdateManywhatsappQueueArgs = class UpdateManywhatsappQueueArgs {
};
__decorate([
    (0, graphql_1.Field)(() => whatsappQueueUpdateManyMutationInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => whatsappQueueUpdateManyMutationInput)
], UpdateManywhatsappQueueArgs.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => whatsappQueueWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => whatsappQueueWhereInput)
], UpdateManywhatsappQueueArgs.prototype, "where", void 0);
UpdateManywhatsappQueueArgs = __decorate([
    (0, graphql_2.ArgsType)()
], UpdateManywhatsappQueueArgs);
exports.UpdateManywhatsappQueueArgs = UpdateManywhatsappQueueArgs;
let UpdateOnewhatsappQueueArgs = class UpdateOnewhatsappQueueArgs {
};
__decorate([
    (0, graphql_1.Field)(() => whatsappQueueUpdateInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => whatsappQueueUpdateInput)
], UpdateOnewhatsappQueueArgs.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => whatsappQueueWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => whatsappQueueWhereUniqueInput)
], UpdateOnewhatsappQueueArgs.prototype, "where", void 0);
UpdateOnewhatsappQueueArgs = __decorate([
    (0, graphql_2.ArgsType)()
], UpdateOnewhatsappQueueArgs);
exports.UpdateOnewhatsappQueueArgs = UpdateOnewhatsappQueueArgs;
let UpsertOnewhatsappQueueArgs = class UpsertOnewhatsappQueueArgs {
};
__decorate([
    (0, graphql_1.Field)(() => whatsappQueueWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => whatsappQueueWhereUniqueInput)
], UpsertOnewhatsappQueueArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => whatsappQueueCreateInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => whatsappQueueCreateInput)
], UpsertOnewhatsappQueueArgs.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => whatsappQueueUpdateInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => whatsappQueueUpdateInput)
], UpsertOnewhatsappQueueArgs.prototype, "update", void 0);
UpsertOnewhatsappQueueArgs = __decorate([
    (0, graphql_2.ArgsType)()
], UpsertOnewhatsappQueueArgs);
exports.UpsertOnewhatsappQueueArgs = UpsertOnewhatsappQueueArgs;
let whatsappQueueAggregateArgs = class whatsappQueueAggregateArgs {
};
__decorate([
    (0, graphql_1.Field)(() => whatsappQueueWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => whatsappQueueWhereInput)
], whatsappQueueAggregateArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [whatsappQueueOrderByWithRelationInput], { nullable: true })
], whatsappQueueAggregateArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => whatsappQueueWhereUniqueInput, { nullable: true })
], whatsappQueueAggregateArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], whatsappQueueAggregateArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], whatsappQueueAggregateArgs.prototype, "skip", void 0);
whatsappQueueAggregateArgs = __decorate([
    (0, graphql_2.ArgsType)()
], whatsappQueueAggregateArgs);
exports.whatsappQueueAggregateArgs = whatsappQueueAggregateArgs;
let whatsappQueueAvgOrderByAggregateInput = class whatsappQueueAvgOrderByAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], whatsappQueueAvgOrderByAggregateInput.prototype, "id", void 0);
whatsappQueueAvgOrderByAggregateInput = __decorate([
    (0, graphql_4.InputType)()
], whatsappQueueAvgOrderByAggregateInput);
exports.whatsappQueueAvgOrderByAggregateInput = whatsappQueueAvgOrderByAggregateInput;
let whatsappQueueCountOrderByAggregateInput = class whatsappQueueCountOrderByAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], whatsappQueueCountOrderByAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], whatsappQueueCountOrderByAggregateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], whatsappQueueCountOrderByAggregateInput.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], whatsappQueueCountOrderByAggregateInput.prototype, "guestId", void 0);
whatsappQueueCountOrderByAggregateInput = __decorate([
    (0, graphql_4.InputType)()
], whatsappQueueCountOrderByAggregateInput);
exports.whatsappQueueCountOrderByAggregateInput = whatsappQueueCountOrderByAggregateInput;
let whatsappQueueCreateManyGuestInputEnvelope = class whatsappQueueCreateManyGuestInputEnvelope {
};
__decorate([
    (0, graphql_1.Field)(() => [whatsappQueueCreateManyGuestInput], { nullable: false }),
    (0, class_transformer_1.Type)(() => whatsappQueueCreateManyGuestInput)
], whatsappQueueCreateManyGuestInputEnvelope.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], whatsappQueueCreateManyGuestInputEnvelope.prototype, "skipDuplicates", void 0);
whatsappQueueCreateManyGuestInputEnvelope = __decorate([
    (0, graphql_4.InputType)()
], whatsappQueueCreateManyGuestInputEnvelope);
exports.whatsappQueueCreateManyGuestInputEnvelope = whatsappQueueCreateManyGuestInputEnvelope;
let whatsappQueueCreateManyGuestInput = class whatsappQueueCreateManyGuestInput {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], whatsappQueueCreateManyGuestInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], whatsappQueueCreateManyGuestInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => QueueStatus, { nullable: true })
], whatsappQueueCreateManyGuestInput.prototype, "status", void 0);
whatsappQueueCreateManyGuestInput = __decorate([
    (0, graphql_4.InputType)()
], whatsappQueueCreateManyGuestInput);
exports.whatsappQueueCreateManyGuestInput = whatsappQueueCreateManyGuestInput;
let whatsappQueueCreateManyInput = class whatsappQueueCreateManyInput {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], whatsappQueueCreateManyInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], whatsappQueueCreateManyInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => QueueStatus, { nullable: true })
], whatsappQueueCreateManyInput.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], whatsappQueueCreateManyInput.prototype, "guestId", void 0);
whatsappQueueCreateManyInput = __decorate([
    (0, graphql_4.InputType)()
], whatsappQueueCreateManyInput);
exports.whatsappQueueCreateManyInput = whatsappQueueCreateManyInput;
let whatsappQueueCreateNestedManyWithoutGuestInput = class whatsappQueueCreateNestedManyWithoutGuestInput {
};
__decorate([
    (0, graphql_1.Field)(() => [whatsappQueueCreateWithoutGuestInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => whatsappQueueCreateWithoutGuestInput)
], whatsappQueueCreateNestedManyWithoutGuestInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [whatsappQueueCreateOrConnectWithoutGuestInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => whatsappQueueCreateOrConnectWithoutGuestInput)
], whatsappQueueCreateNestedManyWithoutGuestInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => whatsappQueueCreateManyGuestInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => whatsappQueueCreateManyGuestInputEnvelope)
], whatsappQueueCreateNestedManyWithoutGuestInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [whatsappQueueWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => whatsappQueueWhereUniqueInput)
], whatsappQueueCreateNestedManyWithoutGuestInput.prototype, "connect", void 0);
whatsappQueueCreateNestedManyWithoutGuestInput = __decorate([
    (0, graphql_4.InputType)()
], whatsappQueueCreateNestedManyWithoutGuestInput);
exports.whatsappQueueCreateNestedManyWithoutGuestInput = whatsappQueueCreateNestedManyWithoutGuestInput;
let whatsappQueueCreateOrConnectWithoutGuestInput = class whatsappQueueCreateOrConnectWithoutGuestInput {
};
__decorate([
    (0, graphql_1.Field)(() => whatsappQueueWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => whatsappQueueWhereUniqueInput)
], whatsappQueueCreateOrConnectWithoutGuestInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => whatsappQueueCreateWithoutGuestInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => whatsappQueueCreateWithoutGuestInput)
], whatsappQueueCreateOrConnectWithoutGuestInput.prototype, "create", void 0);
whatsappQueueCreateOrConnectWithoutGuestInput = __decorate([
    (0, graphql_4.InputType)()
], whatsappQueueCreateOrConnectWithoutGuestInput);
exports.whatsappQueueCreateOrConnectWithoutGuestInput = whatsappQueueCreateOrConnectWithoutGuestInput;
let whatsappQueueCreateWithoutGuestInput = class whatsappQueueCreateWithoutGuestInput {
};
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], whatsappQueueCreateWithoutGuestInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => QueueStatus, { nullable: true })
], whatsappQueueCreateWithoutGuestInput.prototype, "status", void 0);
whatsappQueueCreateWithoutGuestInput = __decorate([
    (0, graphql_4.InputType)()
], whatsappQueueCreateWithoutGuestInput);
exports.whatsappQueueCreateWithoutGuestInput = whatsappQueueCreateWithoutGuestInput;
let whatsappQueueCreateInput = class whatsappQueueCreateInput {
};
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], whatsappQueueCreateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => QueueStatus, { nullable: true })
], whatsappQueueCreateInput.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestCreateNestedOneWithoutWhatsappQueueInput, { nullable: false })
], whatsappQueueCreateInput.prototype, "guest", void 0);
whatsappQueueCreateInput = __decorate([
    (0, graphql_4.InputType)()
], whatsappQueueCreateInput);
exports.whatsappQueueCreateInput = whatsappQueueCreateInput;
let whatsappQueueGroupByArgs = class whatsappQueueGroupByArgs {
};
__decorate([
    (0, graphql_1.Field)(() => whatsappQueueWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => whatsappQueueWhereInput)
], whatsappQueueGroupByArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [whatsappQueueOrderByWithAggregationInput], { nullable: true })
], whatsappQueueGroupByArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => [WhatsappQueueScalarFieldEnum], { nullable: false })
], whatsappQueueGroupByArgs.prototype, "by", void 0);
__decorate([
    (0, graphql_1.Field)(() => whatsappQueueScalarWhereWithAggregatesInput, { nullable: true })
], whatsappQueueGroupByArgs.prototype, "having", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], whatsappQueueGroupByArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], whatsappQueueGroupByArgs.prototype, "skip", void 0);
whatsappQueueGroupByArgs = __decorate([
    (0, graphql_2.ArgsType)()
], whatsappQueueGroupByArgs);
exports.whatsappQueueGroupByArgs = whatsappQueueGroupByArgs;
let whatsappQueueMaxOrderByAggregateInput = class whatsappQueueMaxOrderByAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], whatsappQueueMaxOrderByAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], whatsappQueueMaxOrderByAggregateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], whatsappQueueMaxOrderByAggregateInput.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], whatsappQueueMaxOrderByAggregateInput.prototype, "guestId", void 0);
whatsappQueueMaxOrderByAggregateInput = __decorate([
    (0, graphql_4.InputType)()
], whatsappQueueMaxOrderByAggregateInput);
exports.whatsappQueueMaxOrderByAggregateInput = whatsappQueueMaxOrderByAggregateInput;
let whatsappQueueMinOrderByAggregateInput = class whatsappQueueMinOrderByAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], whatsappQueueMinOrderByAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], whatsappQueueMinOrderByAggregateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], whatsappQueueMinOrderByAggregateInput.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], whatsappQueueMinOrderByAggregateInput.prototype, "guestId", void 0);
whatsappQueueMinOrderByAggregateInput = __decorate([
    (0, graphql_4.InputType)()
], whatsappQueueMinOrderByAggregateInput);
exports.whatsappQueueMinOrderByAggregateInput = whatsappQueueMinOrderByAggregateInput;
let whatsappQueueOrderByRelationAggregateInput = class whatsappQueueOrderByRelationAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], whatsappQueueOrderByRelationAggregateInput.prototype, "_count", void 0);
whatsappQueueOrderByRelationAggregateInput = __decorate([
    (0, graphql_4.InputType)()
], whatsappQueueOrderByRelationAggregateInput);
exports.whatsappQueueOrderByRelationAggregateInput = whatsappQueueOrderByRelationAggregateInput;
let whatsappQueueOrderByWithAggregationInput = class whatsappQueueOrderByWithAggregationInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], whatsappQueueOrderByWithAggregationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], whatsappQueueOrderByWithAggregationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], whatsappQueueOrderByWithAggregationInput.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], whatsappQueueOrderByWithAggregationInput.prototype, "guestId", void 0);
__decorate([
    (0, graphql_1.Field)(() => whatsappQueueCountOrderByAggregateInput, { nullable: true })
], whatsappQueueOrderByWithAggregationInput.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => whatsappQueueAvgOrderByAggregateInput, { nullable: true })
], whatsappQueueOrderByWithAggregationInput.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => whatsappQueueMaxOrderByAggregateInput, { nullable: true })
], whatsappQueueOrderByWithAggregationInput.prototype, "_max", void 0);
__decorate([
    (0, graphql_1.Field)(() => whatsappQueueMinOrderByAggregateInput, { nullable: true })
], whatsappQueueOrderByWithAggregationInput.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => whatsappQueueSumOrderByAggregateInput, { nullable: true })
], whatsappQueueOrderByWithAggregationInput.prototype, "_sum", void 0);
whatsappQueueOrderByWithAggregationInput = __decorate([
    (0, graphql_4.InputType)()
], whatsappQueueOrderByWithAggregationInput);
exports.whatsappQueueOrderByWithAggregationInput = whatsappQueueOrderByWithAggregationInput;
let whatsappQueueOrderByWithRelationInput = class whatsappQueueOrderByWithRelationInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], whatsappQueueOrderByWithRelationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], whatsappQueueOrderByWithRelationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], whatsappQueueOrderByWithRelationInput.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], whatsappQueueOrderByWithRelationInput.prototype, "guestId", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestOrderByWithRelationInput, { nullable: true })
], whatsappQueueOrderByWithRelationInput.prototype, "guest", void 0);
whatsappQueueOrderByWithRelationInput = __decorate([
    (0, graphql_4.InputType)()
], whatsappQueueOrderByWithRelationInput);
exports.whatsappQueueOrderByWithRelationInput = whatsappQueueOrderByWithRelationInput;
let whatsappQueueScalarWhereWithAggregatesInput = whatsappQueueScalarWhereWithAggregatesInput_1 = class whatsappQueueScalarWhereWithAggregatesInput {
};
__decorate([
    (0, graphql_1.Field)(() => [whatsappQueueScalarWhereWithAggregatesInput_1], { nullable: true })
], whatsappQueueScalarWhereWithAggregatesInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [whatsappQueueScalarWhereWithAggregatesInput_1], { nullable: true })
], whatsappQueueScalarWhereWithAggregatesInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [whatsappQueueScalarWhereWithAggregatesInput_1], { nullable: true })
], whatsappQueueScalarWhereWithAggregatesInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => IntWithAggregatesFilter, { nullable: true })
], whatsappQueueScalarWhereWithAggregatesInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeWithAggregatesFilter, { nullable: true })
], whatsappQueueScalarWhereWithAggregatesInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => EnumQueueStatusWithAggregatesFilter, { nullable: true })
], whatsappQueueScalarWhereWithAggregatesInput.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringWithAggregatesFilter, { nullable: true })
], whatsappQueueScalarWhereWithAggregatesInput.prototype, "guestId", void 0);
whatsappQueueScalarWhereWithAggregatesInput = whatsappQueueScalarWhereWithAggregatesInput_1 = __decorate([
    (0, graphql_4.InputType)()
], whatsappQueueScalarWhereWithAggregatesInput);
exports.whatsappQueueScalarWhereWithAggregatesInput = whatsappQueueScalarWhereWithAggregatesInput;
let whatsappQueueScalarWhereInput = whatsappQueueScalarWhereInput_1 = class whatsappQueueScalarWhereInput {
};
__decorate([
    (0, graphql_1.Field)(() => [whatsappQueueScalarWhereInput_1], { nullable: true })
], whatsappQueueScalarWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [whatsappQueueScalarWhereInput_1], { nullable: true })
], whatsappQueueScalarWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [whatsappQueueScalarWhereInput_1], { nullable: true })
], whatsappQueueScalarWhereInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => IntFilter, { nullable: true })
], whatsappQueueScalarWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFilter, { nullable: true })
], whatsappQueueScalarWhereInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => EnumQueueStatusFilter, { nullable: true })
], whatsappQueueScalarWhereInput.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFilter, { nullable: true })
], whatsappQueueScalarWhereInput.prototype, "guestId", void 0);
whatsappQueueScalarWhereInput = whatsappQueueScalarWhereInput_1 = __decorate([
    (0, graphql_4.InputType)()
], whatsappQueueScalarWhereInput);
exports.whatsappQueueScalarWhereInput = whatsappQueueScalarWhereInput;
let whatsappQueueSumOrderByAggregateInput = class whatsappQueueSumOrderByAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], whatsappQueueSumOrderByAggregateInput.prototype, "id", void 0);
whatsappQueueSumOrderByAggregateInput = __decorate([
    (0, graphql_4.InputType)()
], whatsappQueueSumOrderByAggregateInput);
exports.whatsappQueueSumOrderByAggregateInput = whatsappQueueSumOrderByAggregateInput;
let whatsappQueueUncheckedCreateNestedManyWithoutGuestInput = class whatsappQueueUncheckedCreateNestedManyWithoutGuestInput {
};
__decorate([
    (0, graphql_1.Field)(() => [whatsappQueueCreateWithoutGuestInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => whatsappQueueCreateWithoutGuestInput)
], whatsappQueueUncheckedCreateNestedManyWithoutGuestInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [whatsappQueueCreateOrConnectWithoutGuestInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => whatsappQueueCreateOrConnectWithoutGuestInput)
], whatsappQueueUncheckedCreateNestedManyWithoutGuestInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => whatsappQueueCreateManyGuestInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => whatsappQueueCreateManyGuestInputEnvelope)
], whatsappQueueUncheckedCreateNestedManyWithoutGuestInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [whatsappQueueWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => whatsappQueueWhereUniqueInput)
], whatsappQueueUncheckedCreateNestedManyWithoutGuestInput.prototype, "connect", void 0);
whatsappQueueUncheckedCreateNestedManyWithoutGuestInput = __decorate([
    (0, graphql_4.InputType)()
], whatsappQueueUncheckedCreateNestedManyWithoutGuestInput);
exports.whatsappQueueUncheckedCreateNestedManyWithoutGuestInput = whatsappQueueUncheckedCreateNestedManyWithoutGuestInput;
let whatsappQueueUncheckedCreateWithoutGuestInput = class whatsappQueueUncheckedCreateWithoutGuestInput {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], whatsappQueueUncheckedCreateWithoutGuestInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], whatsappQueueUncheckedCreateWithoutGuestInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => QueueStatus, { nullable: true })
], whatsappQueueUncheckedCreateWithoutGuestInput.prototype, "status", void 0);
whatsappQueueUncheckedCreateWithoutGuestInput = __decorate([
    (0, graphql_4.InputType)()
], whatsappQueueUncheckedCreateWithoutGuestInput);
exports.whatsappQueueUncheckedCreateWithoutGuestInput = whatsappQueueUncheckedCreateWithoutGuestInput;
let whatsappQueueUncheckedCreateInput = class whatsappQueueUncheckedCreateInput {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], whatsappQueueUncheckedCreateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], whatsappQueueUncheckedCreateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => QueueStatus, { nullable: true })
], whatsappQueueUncheckedCreateInput.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], whatsappQueueUncheckedCreateInput.prototype, "guestId", void 0);
whatsappQueueUncheckedCreateInput = __decorate([
    (0, graphql_4.InputType)()
], whatsappQueueUncheckedCreateInput);
exports.whatsappQueueUncheckedCreateInput = whatsappQueueUncheckedCreateInput;
let whatsappQueueUncheckedUpdateManyWithoutGuestNestedInput = class whatsappQueueUncheckedUpdateManyWithoutGuestNestedInput {
};
__decorate([
    (0, graphql_1.Field)(() => [whatsappQueueCreateWithoutGuestInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => whatsappQueueCreateWithoutGuestInput)
], whatsappQueueUncheckedUpdateManyWithoutGuestNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [whatsappQueueCreateOrConnectWithoutGuestInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => whatsappQueueCreateOrConnectWithoutGuestInput)
], whatsappQueueUncheckedUpdateManyWithoutGuestNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => [whatsappQueueUpsertWithWhereUniqueWithoutGuestInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => whatsappQueueUpsertWithWhereUniqueWithoutGuestInput)
], whatsappQueueUncheckedUpdateManyWithoutGuestNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => whatsappQueueCreateManyGuestInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => whatsappQueueCreateManyGuestInputEnvelope)
], whatsappQueueUncheckedUpdateManyWithoutGuestNestedInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [whatsappQueueWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => whatsappQueueWhereUniqueInput)
], whatsappQueueUncheckedUpdateManyWithoutGuestNestedInput.prototype, "set", void 0);
__decorate([
    (0, graphql_1.Field)(() => [whatsappQueueWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => whatsappQueueWhereUniqueInput)
], whatsappQueueUncheckedUpdateManyWithoutGuestNestedInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [whatsappQueueWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => whatsappQueueWhereUniqueInput)
], whatsappQueueUncheckedUpdateManyWithoutGuestNestedInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => [whatsappQueueWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => whatsappQueueWhereUniqueInput)
], whatsappQueueUncheckedUpdateManyWithoutGuestNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [whatsappQueueUpdateWithWhereUniqueWithoutGuestInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => whatsappQueueUpdateWithWhereUniqueWithoutGuestInput)
], whatsappQueueUncheckedUpdateManyWithoutGuestNestedInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => [whatsappQueueUpdateManyWithWhereWithoutGuestInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => whatsappQueueUpdateManyWithWhereWithoutGuestInput)
], whatsappQueueUncheckedUpdateManyWithoutGuestNestedInput.prototype, "updateMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [whatsappQueueScalarWhereInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => whatsappQueueScalarWhereInput)
], whatsappQueueUncheckedUpdateManyWithoutGuestNestedInput.prototype, "deleteMany", void 0);
whatsappQueueUncheckedUpdateManyWithoutGuestNestedInput = __decorate([
    (0, graphql_4.InputType)()
], whatsappQueueUncheckedUpdateManyWithoutGuestNestedInput);
exports.whatsappQueueUncheckedUpdateManyWithoutGuestNestedInput = whatsappQueueUncheckedUpdateManyWithoutGuestNestedInput;
let whatsappQueueUncheckedUpdateManyWithoutGuestInput = class whatsappQueueUncheckedUpdateManyWithoutGuestInput {
};
__decorate([
    (0, graphql_1.Field)(() => IntFieldUpdateOperationsInput, { nullable: true })
], whatsappQueueUncheckedUpdateManyWithoutGuestInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], whatsappQueueUncheckedUpdateManyWithoutGuestInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => EnumQueueStatusFieldUpdateOperationsInput, { nullable: true })
], whatsappQueueUncheckedUpdateManyWithoutGuestInput.prototype, "status", void 0);
whatsappQueueUncheckedUpdateManyWithoutGuestInput = __decorate([
    (0, graphql_4.InputType)()
], whatsappQueueUncheckedUpdateManyWithoutGuestInput);
exports.whatsappQueueUncheckedUpdateManyWithoutGuestInput = whatsappQueueUncheckedUpdateManyWithoutGuestInput;
let whatsappQueueUncheckedUpdateManyInput = class whatsappQueueUncheckedUpdateManyInput {
};
__decorate([
    (0, graphql_1.Field)(() => IntFieldUpdateOperationsInput, { nullable: true })
], whatsappQueueUncheckedUpdateManyInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], whatsappQueueUncheckedUpdateManyInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => EnumQueueStatusFieldUpdateOperationsInput, { nullable: true })
], whatsappQueueUncheckedUpdateManyInput.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], whatsappQueueUncheckedUpdateManyInput.prototype, "guestId", void 0);
whatsappQueueUncheckedUpdateManyInput = __decorate([
    (0, graphql_4.InputType)()
], whatsappQueueUncheckedUpdateManyInput);
exports.whatsappQueueUncheckedUpdateManyInput = whatsappQueueUncheckedUpdateManyInput;
let whatsappQueueUncheckedUpdateWithoutGuestInput = class whatsappQueueUncheckedUpdateWithoutGuestInput {
};
__decorate([
    (0, graphql_1.Field)(() => IntFieldUpdateOperationsInput, { nullable: true })
], whatsappQueueUncheckedUpdateWithoutGuestInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], whatsappQueueUncheckedUpdateWithoutGuestInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => EnumQueueStatusFieldUpdateOperationsInput, { nullable: true })
], whatsappQueueUncheckedUpdateWithoutGuestInput.prototype, "status", void 0);
whatsappQueueUncheckedUpdateWithoutGuestInput = __decorate([
    (0, graphql_4.InputType)()
], whatsappQueueUncheckedUpdateWithoutGuestInput);
exports.whatsappQueueUncheckedUpdateWithoutGuestInput = whatsappQueueUncheckedUpdateWithoutGuestInput;
let whatsappQueueUncheckedUpdateInput = class whatsappQueueUncheckedUpdateInput {
};
__decorate([
    (0, graphql_1.Field)(() => IntFieldUpdateOperationsInput, { nullable: true })
], whatsappQueueUncheckedUpdateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], whatsappQueueUncheckedUpdateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => EnumQueueStatusFieldUpdateOperationsInput, { nullable: true })
], whatsappQueueUncheckedUpdateInput.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], whatsappQueueUncheckedUpdateInput.prototype, "guestId", void 0);
whatsappQueueUncheckedUpdateInput = __decorate([
    (0, graphql_4.InputType)()
], whatsappQueueUncheckedUpdateInput);
exports.whatsappQueueUncheckedUpdateInput = whatsappQueueUncheckedUpdateInput;
let whatsappQueueUpdateManyMutationInput = class whatsappQueueUpdateManyMutationInput {
};
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], whatsappQueueUpdateManyMutationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => EnumQueueStatusFieldUpdateOperationsInput, { nullable: true })
], whatsappQueueUpdateManyMutationInput.prototype, "status", void 0);
whatsappQueueUpdateManyMutationInput = __decorate([
    (0, graphql_4.InputType)()
], whatsappQueueUpdateManyMutationInput);
exports.whatsappQueueUpdateManyMutationInput = whatsappQueueUpdateManyMutationInput;
let whatsappQueueUpdateManyWithWhereWithoutGuestInput = class whatsappQueueUpdateManyWithWhereWithoutGuestInput {
};
__decorate([
    (0, graphql_1.Field)(() => whatsappQueueScalarWhereInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => whatsappQueueScalarWhereInput)
], whatsappQueueUpdateManyWithWhereWithoutGuestInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => whatsappQueueUpdateManyMutationInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => whatsappQueueUpdateManyMutationInput)
], whatsappQueueUpdateManyWithWhereWithoutGuestInput.prototype, "data", void 0);
whatsappQueueUpdateManyWithWhereWithoutGuestInput = __decorate([
    (0, graphql_4.InputType)()
], whatsappQueueUpdateManyWithWhereWithoutGuestInput);
exports.whatsappQueueUpdateManyWithWhereWithoutGuestInput = whatsappQueueUpdateManyWithWhereWithoutGuestInput;
let whatsappQueueUpdateManyWithoutGuestNestedInput = class whatsappQueueUpdateManyWithoutGuestNestedInput {
};
__decorate([
    (0, graphql_1.Field)(() => [whatsappQueueCreateWithoutGuestInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => whatsappQueueCreateWithoutGuestInput)
], whatsappQueueUpdateManyWithoutGuestNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [whatsappQueueCreateOrConnectWithoutGuestInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => whatsappQueueCreateOrConnectWithoutGuestInput)
], whatsappQueueUpdateManyWithoutGuestNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => [whatsappQueueUpsertWithWhereUniqueWithoutGuestInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => whatsappQueueUpsertWithWhereUniqueWithoutGuestInput)
], whatsappQueueUpdateManyWithoutGuestNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => whatsappQueueCreateManyGuestInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => whatsappQueueCreateManyGuestInputEnvelope)
], whatsappQueueUpdateManyWithoutGuestNestedInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [whatsappQueueWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => whatsappQueueWhereUniqueInput)
], whatsappQueueUpdateManyWithoutGuestNestedInput.prototype, "set", void 0);
__decorate([
    (0, graphql_1.Field)(() => [whatsappQueueWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => whatsappQueueWhereUniqueInput)
], whatsappQueueUpdateManyWithoutGuestNestedInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [whatsappQueueWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => whatsappQueueWhereUniqueInput)
], whatsappQueueUpdateManyWithoutGuestNestedInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => [whatsappQueueWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => whatsappQueueWhereUniqueInput)
], whatsappQueueUpdateManyWithoutGuestNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [whatsappQueueUpdateWithWhereUniqueWithoutGuestInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => whatsappQueueUpdateWithWhereUniqueWithoutGuestInput)
], whatsappQueueUpdateManyWithoutGuestNestedInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => [whatsappQueueUpdateManyWithWhereWithoutGuestInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => whatsappQueueUpdateManyWithWhereWithoutGuestInput)
], whatsappQueueUpdateManyWithoutGuestNestedInput.prototype, "updateMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [whatsappQueueScalarWhereInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => whatsappQueueScalarWhereInput)
], whatsappQueueUpdateManyWithoutGuestNestedInput.prototype, "deleteMany", void 0);
whatsappQueueUpdateManyWithoutGuestNestedInput = __decorate([
    (0, graphql_4.InputType)()
], whatsappQueueUpdateManyWithoutGuestNestedInput);
exports.whatsappQueueUpdateManyWithoutGuestNestedInput = whatsappQueueUpdateManyWithoutGuestNestedInput;
let whatsappQueueUpdateWithWhereUniqueWithoutGuestInput = class whatsappQueueUpdateWithWhereUniqueWithoutGuestInput {
};
__decorate([
    (0, graphql_1.Field)(() => whatsappQueueWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => whatsappQueueWhereUniqueInput)
], whatsappQueueUpdateWithWhereUniqueWithoutGuestInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => whatsappQueueUpdateWithoutGuestInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => whatsappQueueUpdateWithoutGuestInput)
], whatsappQueueUpdateWithWhereUniqueWithoutGuestInput.prototype, "data", void 0);
whatsappQueueUpdateWithWhereUniqueWithoutGuestInput = __decorate([
    (0, graphql_4.InputType)()
], whatsappQueueUpdateWithWhereUniqueWithoutGuestInput);
exports.whatsappQueueUpdateWithWhereUniqueWithoutGuestInput = whatsappQueueUpdateWithWhereUniqueWithoutGuestInput;
let whatsappQueueUpdateWithoutGuestInput = class whatsappQueueUpdateWithoutGuestInput {
};
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], whatsappQueueUpdateWithoutGuestInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => EnumQueueStatusFieldUpdateOperationsInput, { nullable: true })
], whatsappQueueUpdateWithoutGuestInput.prototype, "status", void 0);
whatsappQueueUpdateWithoutGuestInput = __decorate([
    (0, graphql_4.InputType)()
], whatsappQueueUpdateWithoutGuestInput);
exports.whatsappQueueUpdateWithoutGuestInput = whatsappQueueUpdateWithoutGuestInput;
let whatsappQueueUpdateInput = class whatsappQueueUpdateInput {
};
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], whatsappQueueUpdateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => EnumQueueStatusFieldUpdateOperationsInput, { nullable: true })
], whatsappQueueUpdateInput.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestUpdateOneRequiredWithoutWhatsappQueueNestedInput, { nullable: true })
], whatsappQueueUpdateInput.prototype, "guest", void 0);
whatsappQueueUpdateInput = __decorate([
    (0, graphql_4.InputType)()
], whatsappQueueUpdateInput);
exports.whatsappQueueUpdateInput = whatsappQueueUpdateInput;
let whatsappQueueUpsertWithWhereUniqueWithoutGuestInput = class whatsappQueueUpsertWithWhereUniqueWithoutGuestInput {
};
__decorate([
    (0, graphql_1.Field)(() => whatsappQueueWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => whatsappQueueWhereUniqueInput)
], whatsappQueueUpsertWithWhereUniqueWithoutGuestInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => whatsappQueueUpdateWithoutGuestInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => whatsappQueueUpdateWithoutGuestInput)
], whatsappQueueUpsertWithWhereUniqueWithoutGuestInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => whatsappQueueCreateWithoutGuestInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => whatsappQueueCreateWithoutGuestInput)
], whatsappQueueUpsertWithWhereUniqueWithoutGuestInput.prototype, "create", void 0);
whatsappQueueUpsertWithWhereUniqueWithoutGuestInput = __decorate([
    (0, graphql_4.InputType)()
], whatsappQueueUpsertWithWhereUniqueWithoutGuestInput);
exports.whatsappQueueUpsertWithWhereUniqueWithoutGuestInput = whatsappQueueUpsertWithWhereUniqueWithoutGuestInput;
let whatsappQueueWhereUniqueInput = class whatsappQueueWhereUniqueInput {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], whatsappQueueWhereUniqueInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => [whatsappQueueWhereInput], { nullable: true })
], whatsappQueueWhereUniqueInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [whatsappQueueWhereInput], { nullable: true })
], whatsappQueueWhereUniqueInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [whatsappQueueWhereInput], { nullable: true })
], whatsappQueueWhereUniqueInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFilter, { nullable: true })
], whatsappQueueWhereUniqueInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => EnumQueueStatusFilter, { nullable: true })
], whatsappQueueWhereUniqueInput.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFilter, { nullable: true })
], whatsappQueueWhereUniqueInput.prototype, "guestId", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestRelationFilter, { nullable: true })
], whatsappQueueWhereUniqueInput.prototype, "guest", void 0);
whatsappQueueWhereUniqueInput = __decorate([
    (0, graphql_4.InputType)()
], whatsappQueueWhereUniqueInput);
exports.whatsappQueueWhereUniqueInput = whatsappQueueWhereUniqueInput;
let whatsappQueueWhereInput = whatsappQueueWhereInput_1 = class whatsappQueueWhereInput {
};
__decorate([
    (0, graphql_1.Field)(() => [whatsappQueueWhereInput_1], { nullable: true })
], whatsappQueueWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [whatsappQueueWhereInput_1], { nullable: true })
], whatsappQueueWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [whatsappQueueWhereInput_1], { nullable: true })
], whatsappQueueWhereInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => IntFilter, { nullable: true })
], whatsappQueueWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFilter, { nullable: true })
], whatsappQueueWhereInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => EnumQueueStatusFilter, { nullable: true })
], whatsappQueueWhereInput.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFilter, { nullable: true })
], whatsappQueueWhereInput.prototype, "guestId", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestRelationFilter, { nullable: true })
], whatsappQueueWhereInput.prototype, "guest", void 0);
whatsappQueueWhereInput = whatsappQueueWhereInput_1 = __decorate([
    (0, graphql_4.InputType)()
], whatsappQueueWhereInput);
exports.whatsappQueueWhereInput = whatsappQueueWhereInput;
let whatsappQueue = class whatsappQueue {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], whatsappQueue.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], whatsappQueue.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => QueueStatus, { nullable: false, defaultValue: 'WAITING' })
], whatsappQueue.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], whatsappQueue.prototype, "guestId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Guest, { nullable: false })
], whatsappQueue.prototype, "guest", void 0);
whatsappQueue = __decorate([
    (0, graphql_5.ObjectType)()
], whatsappQueue);
exports.whatsappQueue = whatsappQueue;
//# sourceMappingURL=index.js.map
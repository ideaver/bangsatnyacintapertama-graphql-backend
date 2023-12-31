"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var GuestOrderByWithRelationInput_1, GuestScalarWhereWithAggregatesInput_1, GuestScalarWhereInput_1, GuestWhereInput_1, Guest_1, InvitationImageScalarWhereWithAggregatesInput_1, InvitationImageWhereInput_1, NestedDateTimeFilter_1, NestedDateTimeNullableFilter_1, NestedDateTimeNullableWithAggregatesFilter_1, NestedDateTimeWithAggregatesFilter_1, NestedEnumConfirmationStatusNullableFilter_1, NestedEnumConfirmationStatusNullableWithAggregatesFilter_1, NestedEnumQueueStatusFilter_1, NestedEnumQueueStatusWithAggregatesFilter_1, NestedEnumUserRoleFilter_1, NestedEnumUserRoleWithAggregatesFilter_1, NestedFloatFilter_1, NestedFloatNullableFilter_1, NestedFloatNullableWithAggregatesFilter_1, NestedIntFilter_1, NestedIntNullableFilter_1, NestedIntWithAggregatesFilter_1, NestedStringFilter_1, NestedStringNullableFilter_1, NestedStringNullableWithAggregatesFilter_1, NestedStringWithAggregatesFilter_1, QrCodeScalarWhereWithAggregatesInput_1, QrCodeScalarWhereInput_1, QrCodeWhereInput_1, UserScalarWhereWithAggregatesInput_1, UserWhereInput_1, WhatsappStatusScalarWhereWithAggregatesInput_1, WhatsappStatusScalarWhereInput_1, WhatsappStatusWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuestGroupBy = exports.GuestGroupByArgs = exports.GuestCreateInput = exports.GuestCreateWithoutWhatsappStatusesInput = exports.GuestCreateWithoutQrcodeInput = exports.GuestCreateWithoutInvitationImageInput = exports.GuestCreateWithoutGroupMembersInput = exports.GuestCreateWithoutGroupMemberOfInput = exports.GuestCreateOrConnectWithoutWhatsappStatusesInput = exports.GuestCreateOrConnectWithoutQrcodeInput = exports.GuestCreateOrConnectWithoutInvitationImageInput = exports.GuestCreateOrConnectWithoutGroupMembersInput = exports.GuestCreateOrConnectWithoutGroupMemberOfInput = exports.GuestCreateNestedOneWithoutWhatsappStatusesInput = exports.GuestCreateNestedOneWithoutQrcodeInput = exports.GuestCreateNestedOneWithoutInvitationImageInput = exports.GuestCreateNestedOneWithoutGroupMembersInput = exports.GuestCreateNestedManyWithoutGroupMemberOfInput = exports.GuestCreateManyInput = exports.GuestCreateManyGroupMemberOfInput = exports.GuestCreateManyGroupMemberOfInputEnvelope = exports.GuestCount = exports.GuestCountOrderByAggregateInput = exports.GuestCountAggregate = exports.GuestCountAggregateInput = exports.GuestAvgOrderByAggregateInput = exports.GuestAvgAggregate = exports.GuestAvgAggregateInput = exports.GuestAggregateArgs = exports.FindUniqueGuestArgs = exports.FindUniqueGuestOrThrowArgs = exports.FindManyGuestArgs = exports.FindFirstGuestArgs = exports.FindFirstGuestOrThrowArgs = exports.DeleteOneGuestArgs = exports.DeleteManyGuestArgs = exports.CreateOneGuestArgs = exports.CreateManyGuestArgs = exports.AggregateGuest = exports.GuestScalarFieldEnum = exports.InvitationImageScalarFieldEnum = exports.ConfirmationStatus = exports.NullsOrder = exports.QueueStatus = exports.SortOrder = exports.TransactionIsolationLevel = exports.UserRole = exports.QrCodeScalarFieldEnum = exports.UserScalarFieldEnum = exports.WhatsappStatusScalarFieldEnum = void 0;
exports.GuestUpdateWithoutWhatsappStatusesInput = exports.GuestUpdateWithoutQrcodeInput = exports.GuestUpdateWithoutInvitationImageInput = exports.GuestUpdateWithoutGroupMembersInput = exports.GuestUpdateWithoutGroupMemberOfInput = exports.GuestUpdateWithWhereUniqueWithoutGroupMemberOfInput = exports.GuestUpdateToOneWithWhereWithoutWhatsappStatusesInput = exports.GuestUpdateToOneWithWhereWithoutQrcodeInput = exports.GuestUpdateToOneWithWhereWithoutInvitationImageInput = exports.GuestUpdateToOneWithWhereWithoutGroupMembersInput = exports.GuestUpdateOneWithoutGroupMembersNestedInput = exports.GuestUpdateOneRequiredWithoutWhatsappStatusesNestedInput = exports.GuestUpdateOneRequiredWithoutQrcodeNestedInput = exports.GuestUpdateOneRequiredWithoutInvitationImageNestedInput = exports.GuestUpdateManyWithoutGroupMemberOfNestedInput = exports.GuestUpdateManyWithWhereWithoutGroupMemberOfInput = exports.GuestUpdateManyMutationInput = exports.GuestUncheckedUpdateInput = exports.GuestUncheckedUpdateWithoutWhatsappStatusesInput = exports.GuestUncheckedUpdateWithoutQrcodeInput = exports.GuestUncheckedUpdateWithoutInvitationImageInput = exports.GuestUncheckedUpdateWithoutGroupMembersInput = exports.GuestUncheckedUpdateWithoutGroupMemberOfInput = exports.GuestUncheckedUpdateManyInput = exports.GuestUncheckedUpdateManyWithoutGroupMemberOfInput = exports.GuestUncheckedUpdateManyWithoutGroupMemberOfNestedInput = exports.GuestUncheckedCreateInput = exports.GuestUncheckedCreateWithoutWhatsappStatusesInput = exports.GuestUncheckedCreateWithoutQrcodeInput = exports.GuestUncheckedCreateWithoutInvitationImageInput = exports.GuestUncheckedCreateWithoutGroupMembersInput = exports.GuestUncheckedCreateWithoutGroupMemberOfInput = exports.GuestUncheckedCreateNestedManyWithoutGroupMemberOfInput = exports.GuestSumOrderByAggregateInput = exports.GuestSumAggregate = exports.GuestSumAggregateInput = exports.GuestScalarWhereInput = exports.GuestScalarWhereWithAggregatesInput = exports.GuestRelationFilter = exports.GuestOrderByWithRelationInput = exports.GuestOrderByWithAggregationInput = exports.GuestOrderByRelationAggregateInput = exports.GuestNullableRelationFilter = exports.GuestMinOrderByAggregateInput = exports.GuestMinAggregate = exports.GuestMinAggregateInput = exports.GuestMaxOrderByAggregateInput = exports.GuestMaxAggregate = exports.GuestMaxAggregateInput = exports.GuestListRelationFilter = void 0;
exports.InvitationImageUncheckedUpdateInput = exports.InvitationImageUncheckedUpdateWithoutGuestInput = exports.InvitationImageUncheckedUpdateOneWithoutGuestNestedInput = exports.InvitationImageUncheckedUpdateManyInput = exports.InvitationImageUncheckedCreateInput = exports.InvitationImageUncheckedCreateWithoutGuestInput = exports.InvitationImageUncheckedCreateNestedOneWithoutGuestInput = exports.InvitationImageScalarWhereWithAggregatesInput = exports.InvitationImageOrderByWithRelationInput = exports.InvitationImageOrderByWithAggregationInput = exports.InvitationImageNullableRelationFilter = exports.InvitationImageMinOrderByAggregateInput = exports.InvitationImageMinAggregate = exports.InvitationImageMinAggregateInput = exports.InvitationImageMaxOrderByAggregateInput = exports.InvitationImageMaxAggregate = exports.InvitationImageMaxAggregateInput = exports.InvitationImageGroupBy = exports.InvitationImageGroupByArgs = exports.InvitationImageCreateInput = exports.InvitationImageCreateWithoutGuestInput = exports.InvitationImageCreateOrConnectWithoutGuestInput = exports.InvitationImageCreateNestedOneWithoutGuestInput = exports.InvitationImageCreateManyInput = exports.InvitationImageCountOrderByAggregateInput = exports.InvitationImageCountAggregate = exports.InvitationImageCountAggregateInput = exports.InvitationImageAggregateArgs = exports.FindUniqueInvitationImageArgs = exports.FindUniqueInvitationImageOrThrowArgs = exports.FindManyInvitationImageArgs = exports.FindFirstInvitationImageArgs = exports.FindFirstInvitationImageOrThrowArgs = exports.DeleteOneInvitationImageArgs = exports.DeleteManyInvitationImageArgs = exports.CreateOneInvitationImageArgs = exports.CreateManyInvitationImageArgs = exports.AggregateInvitationImage = exports.UpsertOneGuestArgs = exports.UpdateOneGuestArgs = exports.UpdateManyGuestArgs = exports.Guest = exports.GuestWhereInput = exports.GuestWhereUniqueInput = exports.GuestUpsertWithoutWhatsappStatusesInput = exports.GuestUpsertWithoutQrcodeInput = exports.GuestUpsertWithoutInvitationImageInput = exports.GuestUpsertWithoutGroupMembersInput = exports.GuestUpsertWithWhereUniqueWithoutGroupMemberOfInput = exports.GuestUpdateInput = void 0;
exports.NestedStringNullableWithAggregatesFilter = exports.NestedStringNullableFilter = exports.NestedStringFilter = exports.NestedIntWithAggregatesFilter = exports.NestedIntNullableFilter = exports.NestedIntFilter = exports.NestedFloatNullableWithAggregatesFilter = exports.NestedFloatNullableFilter = exports.NestedFloatFilter = exports.NestedEnumUserRoleWithAggregatesFilter = exports.NestedEnumUserRoleFilter = exports.NestedEnumQueueStatusWithAggregatesFilter = exports.NestedEnumQueueStatusFilter = exports.NestedEnumConfirmationStatusNullableWithAggregatesFilter = exports.NestedEnumConfirmationStatusNullableFilter = exports.NestedDateTimeWithAggregatesFilter = exports.NestedDateTimeNullableWithAggregatesFilter = exports.NestedDateTimeNullableFilter = exports.NestedDateTimeFilter = exports.IntWithAggregatesFilter = exports.IntFilter = exports.IntFieldUpdateOperationsInput = exports.FloatNullableWithAggregatesFilter = exports.FloatNullableFilter = exports.EnumUserRoleWithAggregatesFilter = exports.EnumUserRoleFilter = exports.EnumUserRoleFieldUpdateOperationsInput = exports.EnumQueueStatusWithAggregatesFilter = exports.EnumQueueStatusFilter = exports.EnumQueueStatusFieldUpdateOperationsInput = exports.EnumConfirmationStatusNullableWithAggregatesFilter = exports.EnumConfirmationStatusNullableFilter = exports.DateTimeWithAggregatesFilter = exports.DateTimeNullableWithAggregatesFilter = exports.DateTimeNullableFilter = exports.DateTimeFilter = exports.DateTimeFieldUpdateOperationsInput = exports.AffectedRows = exports.UpsertOneInvitationImageArgs = exports.UpdateOneInvitationImageArgs = exports.UpdateManyInvitationImageArgs = exports.InvitationImage = exports.InvitationImageWhereInput = exports.InvitationImageWhereUniqueInput = exports.InvitationImageUpsertWithoutGuestInput = exports.InvitationImageUpdateInput = exports.InvitationImageUpdateWithoutGuestInput = exports.InvitationImageUpdateToOneWithWhereWithoutGuestInput = exports.InvitationImageUpdateOneWithoutGuestNestedInput = exports.InvitationImageUpdateManyMutationInput = void 0;
exports.QrCodeOrderByWithAggregationInput = exports.QrCodeOrderByRelationAggregateInput = exports.QrCodeNullableRelationFilter = exports.QrCodeMinOrderByAggregateInput = exports.QrCodeMinAggregate = exports.QrCodeMinAggregateInput = exports.QrCodeMaxOrderByAggregateInput = exports.QrCodeMaxAggregate = exports.QrCodeMaxAggregateInput = exports.QrCodeListRelationFilter = exports.QrCodeGroupBy = exports.QrCodeGroupByArgs = exports.QrCodeCreateInput = exports.QrCodeCreateWithoutScannedByInput = exports.QrCodeCreateWithoutGuestInput = exports.QrCodeCreateOrConnectWithoutScannedByInput = exports.QrCodeCreateOrConnectWithoutGuestInput = exports.QrCodeCreateNestedOneWithoutGuestInput = exports.QrCodeCreateNestedManyWithoutScannedByInput = exports.QrCodeCreateManyInput = exports.QrCodeCreateManyScannedByInput = exports.QrCodeCreateManyScannedByInputEnvelope = exports.QrCodeCountOrderByAggregateInput = exports.QrCodeCountAggregate = exports.QrCodeCountAggregateInput = exports.QrCodeAvgOrderByAggregateInput = exports.QrCodeAvgAggregate = exports.QrCodeAvgAggregateInput = exports.QrCodeAggregateArgs = exports.FindUniqueQrCodeArgs = exports.FindUniqueQrCodeOrThrowArgs = exports.FindManyQrCodeArgs = exports.FindFirstQrCodeArgs = exports.FindFirstQrCodeOrThrowArgs = exports.DeleteOneQrCodeArgs = exports.DeleteManyQrCodeArgs = exports.CreateOneQrCodeArgs = exports.CreateManyQrCodeArgs = exports.AggregateQrCode = exports.StringWithAggregatesFilter = exports.StringNullableWithAggregatesFilter = exports.StringNullableFilter = exports.StringFilter = exports.StringFieldUpdateOperationsInput = exports.SortOrderInput = exports.NullableStringFieldUpdateOperationsInput = exports.NullableFloatFieldUpdateOperationsInput = exports.NullableEnumConfirmationStatusFieldUpdateOperationsInput = exports.NullableDateTimeFieldUpdateOperationsInput = exports.NestedStringWithAggregatesFilter = void 0;
exports.UserCountAggregateInput = exports.UserAggregateArgs = exports.UpsertOneUserArgs = exports.UpdateOneUserArgs = exports.UpdateManyUserArgs = exports.FindUniqueUserArgs = exports.FindUniqueUserOrThrowArgs = exports.FindManyUserArgs = exports.FindFirstUserArgs = exports.FindFirstUserOrThrowArgs = exports.DeleteOneUserArgs = exports.DeleteManyUserArgs = exports.CreateOneUserArgs = exports.CreateManyUserArgs = exports.AggregateUser = exports.UpsertOneQrCodeArgs = exports.UpdateOneQrCodeArgs = exports.UpdateManyQrCodeArgs = exports.QrCode = exports.QrCodeWhereInput = exports.QrCodeWhereUniqueInput = exports.QrCodeUpsertWithoutGuestInput = exports.QrCodeUpsertWithWhereUniqueWithoutScannedByInput = exports.QrCodeUpdateInput = exports.QrCodeUpdateWithoutScannedByInput = exports.QrCodeUpdateWithoutGuestInput = exports.QrCodeUpdateWithWhereUniqueWithoutScannedByInput = exports.QrCodeUpdateToOneWithWhereWithoutGuestInput = exports.QrCodeUpdateOneWithoutGuestNestedInput = exports.QrCodeUpdateManyWithoutScannedByNestedInput = exports.QrCodeUpdateManyWithWhereWithoutScannedByInput = exports.QrCodeUpdateManyMutationInput = exports.QrCodeUncheckedUpdateInput = exports.QrCodeUncheckedUpdateWithoutScannedByInput = exports.QrCodeUncheckedUpdateWithoutGuestInput = exports.QrCodeUncheckedUpdateOneWithoutGuestNestedInput = exports.QrCodeUncheckedUpdateManyInput = exports.QrCodeUncheckedUpdateManyWithoutScannedByInput = exports.QrCodeUncheckedUpdateManyWithoutScannedByNestedInput = exports.QrCodeUncheckedCreateInput = exports.QrCodeUncheckedCreateWithoutScannedByInput = exports.QrCodeUncheckedCreateWithoutGuestInput = exports.QrCodeUncheckedCreateNestedOneWithoutGuestInput = exports.QrCodeUncheckedCreateNestedManyWithoutScannedByInput = exports.QrCodeSumOrderByAggregateInput = exports.QrCodeSumAggregate = exports.QrCodeSumAggregateInput = exports.QrCodeScalarWhereInput = exports.QrCodeScalarWhereWithAggregatesInput = exports.QrCodeOrderByWithRelationInput = void 0;
exports.WhatsappStatusAvgAggregate = exports.WhatsappStatusAvgAggregateInput = exports.WhatsappStatusAggregateArgs = exports.UpsertOneWhatsappStatusArgs = exports.UpdateOneWhatsappStatusArgs = exports.UpdateManyWhatsappStatusArgs = exports.FindUniqueWhatsappStatusArgs = exports.FindUniqueWhatsappStatusOrThrowArgs = exports.FindManyWhatsappStatusArgs = exports.FindFirstWhatsappStatusArgs = exports.FindFirstWhatsappStatusOrThrowArgs = exports.DeleteOneWhatsappStatusArgs = exports.DeleteManyWhatsappStatusArgs = exports.CreateOneWhatsappStatusArgs = exports.CreateManyWhatsappStatusArgs = exports.AggregateWhatsappStatus = exports.User = exports.UserWhereInput = exports.UserWhereUniqueInput = exports.UserUpsertWithoutScannedQrsInput = exports.UserUpdateInput = exports.UserUpdateWithoutScannedQrsInput = exports.UserUpdateToOneWithWhereWithoutScannedQrsInput = exports.UserUpdateOneWithoutScannedQrsNestedInput = exports.UserUpdateManyMutationInput = exports.UserUncheckedUpdateInput = exports.UserUncheckedUpdateWithoutScannedQrsInput = exports.UserUncheckedUpdateManyInput = exports.UserUncheckedCreateInput = exports.UserUncheckedCreateWithoutScannedQrsInput = exports.UserScalarWhereWithAggregatesInput = exports.UserOrderByWithRelationInput = exports.UserOrderByWithAggregationInput = exports.UserNullableRelationFilter = exports.UserMinOrderByAggregateInput = exports.UserMinAggregate = exports.UserMinAggregateInput = exports.UserMaxOrderByAggregateInput = exports.UserMaxAggregate = exports.UserMaxAggregateInput = exports.UserGroupBy = exports.UserGroupByArgs = exports.UserCreateInput = exports.UserCreateWithoutScannedQrsInput = exports.UserCreateOrConnectWithoutScannedQrsInput = exports.UserCreateNestedOneWithoutScannedQrsInput = exports.UserCreateManyInput = exports.UserCount = exports.UserCountOrderByAggregateInput = exports.UserCountAggregate = void 0;
exports.WhatsappStatus = exports.WhatsappStatusWhereInput = exports.WhatsappStatusWhereUniqueInput = exports.WhatsappStatusUpsertWithWhereUniqueWithoutGuestInput = exports.WhatsappStatusUpdateInput = exports.WhatsappStatusUpdateWithoutGuestInput = exports.WhatsappStatusUpdateWithWhereUniqueWithoutGuestInput = exports.WhatsappStatusUpdateManyWithoutGuestNestedInput = exports.WhatsappStatusUpdateManyWithWhereWithoutGuestInput = exports.WhatsappStatusUpdateManyMutationInput = exports.WhatsappStatusUncheckedUpdateInput = exports.WhatsappStatusUncheckedUpdateWithoutGuestInput = exports.WhatsappStatusUncheckedUpdateManyInput = exports.WhatsappStatusUncheckedUpdateManyWithoutGuestInput = exports.WhatsappStatusUncheckedUpdateManyWithoutGuestNestedInput = exports.WhatsappStatusUncheckedCreateInput = exports.WhatsappStatusUncheckedCreateWithoutGuestInput = exports.WhatsappStatusUncheckedCreateNestedManyWithoutGuestInput = exports.WhatsappStatusSumOrderByAggregateInput = exports.WhatsappStatusSumAggregate = exports.WhatsappStatusSumAggregateInput = exports.WhatsappStatusScalarWhereInput = exports.WhatsappStatusScalarWhereWithAggregatesInput = exports.WhatsappStatusOrderByWithRelationInput = exports.WhatsappStatusOrderByWithAggregationInput = exports.WhatsappStatusOrderByRelationAggregateInput = exports.WhatsappStatusMinOrderByAggregateInput = exports.WhatsappStatusMinAggregate = exports.WhatsappStatusMinAggregateInput = exports.WhatsappStatusMaxOrderByAggregateInput = exports.WhatsappStatusMaxAggregate = exports.WhatsappStatusMaxAggregateInput = exports.WhatsappStatusListRelationFilter = exports.WhatsappStatusGroupBy = exports.WhatsappStatusGroupByArgs = exports.WhatsappStatusCreateInput = exports.WhatsappStatusCreateWithoutGuestInput = exports.WhatsappStatusCreateOrConnectWithoutGuestInput = exports.WhatsappStatusCreateNestedManyWithoutGuestInput = exports.WhatsappStatusCreateManyInput = exports.WhatsappStatusCreateManyGuestInput = exports.WhatsappStatusCreateManyGuestInputEnvelope = exports.WhatsappStatusCountOrderByAggregateInput = exports.WhatsappStatusCountAggregate = exports.WhatsappStatusCountAggregateInput = exports.WhatsappStatusAvgOrderByAggregateInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const class_transformer_1 = require("class-transformer");
const graphql_4 = require("@nestjs/graphql");
const graphql_5 = require("@nestjs/graphql");
const graphql_6 = require("@nestjs/graphql");
const graphql_7 = require("@nestjs/graphql");
var WhatsappStatusScalarFieldEnum;
(function (WhatsappStatusScalarFieldEnum) {
    WhatsappStatusScalarFieldEnum["id"] = "id";
    WhatsappStatusScalarFieldEnum["refId"] = "refId";
    WhatsappStatusScalarFieldEnum["messageId"] = "messageId";
    WhatsappStatusScalarFieldEnum["message"] = "message";
    WhatsappStatusScalarFieldEnum["createdAt"] = "createdAt";
    WhatsappStatusScalarFieldEnum["status"] = "status";
    WhatsappStatusScalarFieldEnum["guestId"] = "guestId";
})(WhatsappStatusScalarFieldEnum = exports.WhatsappStatusScalarFieldEnum || (exports.WhatsappStatusScalarFieldEnum = {}));
var UserScalarFieldEnum;
(function (UserScalarFieldEnum) {
    UserScalarFieldEnum["id"] = "id";
    UserScalarFieldEnum["fullName"] = "fullName";
    UserScalarFieldEnum["email"] = "email";
    UserScalarFieldEnum["password"] = "password";
    UserScalarFieldEnum["createdAt"] = "createdAt";
    UserScalarFieldEnum["updatedAt"] = "updatedAt";
    UserScalarFieldEnum["deletedAt"] = "deletedAt";
    UserScalarFieldEnum["role"] = "role";
})(UserScalarFieldEnum = exports.UserScalarFieldEnum || (exports.UserScalarFieldEnum = {}));
var QrCodeScalarFieldEnum;
(function (QrCodeScalarFieldEnum) {
    QrCodeScalarFieldEnum["id"] = "id";
    QrCodeScalarFieldEnum["path"] = "path";
    QrCodeScalarFieldEnum["scannedAt"] = "scannedAt";
    QrCodeScalarFieldEnum["createdAt"] = "createdAt";
    QrCodeScalarFieldEnum["raceConditionValue"] = "raceConditionValue";
    QrCodeScalarFieldEnum["guestId"] = "guestId";
    QrCodeScalarFieldEnum["scannedByUserId"] = "scannedByUserId";
})(QrCodeScalarFieldEnum = exports.QrCodeScalarFieldEnum || (exports.QrCodeScalarFieldEnum = {}));
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
    QueueStatus["QUEUE"] = "QUEUE";
    QueueStatus["SENT"] = "SENT";
    QueueStatus["DELIVERED"] = "DELIVERED";
    QueueStatus["READ"] = "READ";
    QueueStatus["ABORT"] = "ABORT";
    QueueStatus["FAILED"] = "FAILED";
})(QueueStatus = exports.QueueStatus || (exports.QueueStatus = {}));
var NullsOrder;
(function (NullsOrder) {
    NullsOrder["first"] = "first";
    NullsOrder["last"] = "last";
})(NullsOrder = exports.NullsOrder || (exports.NullsOrder = {}));
var ConfirmationStatus;
(function (ConfirmationStatus) {
    ConfirmationStatus["UNCONFIRMED"] = "UNCONFIRMED";
    ConfirmationStatus["CONFIRMED"] = "CONFIRMED";
    ConfirmationStatus["REJECTED"] = "REJECTED";
})(ConfirmationStatus = exports.ConfirmationStatus || (exports.ConfirmationStatus = {}));
var InvitationImageScalarFieldEnum;
(function (InvitationImageScalarFieldEnum) {
    InvitationImageScalarFieldEnum["id"] = "id";
    InvitationImageScalarFieldEnum["path"] = "path";
    InvitationImageScalarFieldEnum["createdAt"] = "createdAt";
    InvitationImageScalarFieldEnum["guestId"] = "guestId";
})(InvitationImageScalarFieldEnum = exports.InvitationImageScalarFieldEnum || (exports.InvitationImageScalarFieldEnum = {}));
var GuestScalarFieldEnum;
(function (GuestScalarFieldEnum) {
    GuestScalarFieldEnum["id"] = "id";
    GuestScalarFieldEnum["source"] = "source";
    GuestScalarFieldEnum["invitationName"] = "invitationName";
    GuestScalarFieldEnum["contactList"] = "contactList";
    GuestScalarFieldEnum["whatsapp"] = "whatsapp";
    GuestScalarFieldEnum["category"] = "category";
    GuestScalarFieldEnum["class"] = "class";
    GuestScalarFieldEnum["seat"] = "seat";
    GuestScalarFieldEnum["studio"] = "studio";
    GuestScalarFieldEnum["showTime"] = "showTime";
    GuestScalarFieldEnum["rejectionReason"] = "rejectionReason";
    GuestScalarFieldEnum["createdAt"] = "createdAt";
    GuestScalarFieldEnum["updatedAt"] = "updatedAt";
    GuestScalarFieldEnum["deletedAt"] = "deletedAt";
    GuestScalarFieldEnum["groupMemberOfId"] = "groupMemberOfId";
    GuestScalarFieldEnum["confirmationStatus"] = "confirmationStatus";
})(GuestScalarFieldEnum = exports.GuestScalarFieldEnum || (exports.GuestScalarFieldEnum = {}));
(0, graphql_7.registerEnumType)(GuestScalarFieldEnum, { name: 'GuestScalarFieldEnum', description: undefined });
(0, graphql_7.registerEnumType)(InvitationImageScalarFieldEnum, { name: 'InvitationImageScalarFieldEnum', description: undefined });
(0, graphql_7.registerEnumType)(ConfirmationStatus, { name: 'ConfirmationStatus', description: undefined });
(0, graphql_7.registerEnumType)(NullsOrder, { name: 'NullsOrder', description: undefined });
(0, graphql_7.registerEnumType)(QueueStatus, { name: 'QueueStatus', description: undefined });
(0, graphql_7.registerEnumType)(SortOrder, { name: 'SortOrder', description: undefined });
(0, graphql_7.registerEnumType)(TransactionIsolationLevel, { name: 'TransactionIsolationLevel', description: undefined });
(0, graphql_7.registerEnumType)(UserRole, { name: 'UserRole', description: undefined });
(0, graphql_7.registerEnumType)(QrCodeScalarFieldEnum, { name: 'QrCodeScalarFieldEnum', description: undefined });
(0, graphql_7.registerEnumType)(UserScalarFieldEnum, { name: 'UserScalarFieldEnum', description: undefined });
(0, graphql_7.registerEnumType)(WhatsappStatusScalarFieldEnum, { name: 'WhatsappStatusScalarFieldEnum', description: undefined });
let AggregateGuest = class AggregateGuest {
};
__decorate([
    (0, graphql_1.Field)(() => GuestCountAggregate, { nullable: true })
], AggregateGuest.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestAvgAggregate, { nullable: true })
], AggregateGuest.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestSumAggregate, { nullable: true })
], AggregateGuest.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestMinAggregate, { nullable: true })
], AggregateGuest.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestMaxAggregate, { nullable: true })
], AggregateGuest.prototype, "_max", void 0);
AggregateGuest = __decorate([
    (0, graphql_2.ObjectType)()
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
    (0, graphql_3.ArgsType)()
], CreateManyGuestArgs);
exports.CreateManyGuestArgs = CreateManyGuestArgs;
let CreateOneGuestArgs = class CreateOneGuestArgs {
};
__decorate([
    (0, graphql_1.Field)(() => GuestCreateInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => GuestCreateInput)
], CreateOneGuestArgs.prototype, "data", void 0);
CreateOneGuestArgs = __decorate([
    (0, graphql_3.ArgsType)()
], CreateOneGuestArgs);
exports.CreateOneGuestArgs = CreateOneGuestArgs;
let DeleteManyGuestArgs = class DeleteManyGuestArgs {
};
__decorate([
    (0, graphql_1.Field)(() => GuestWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => GuestWhereInput)
], DeleteManyGuestArgs.prototype, "where", void 0);
DeleteManyGuestArgs = __decorate([
    (0, graphql_3.ArgsType)()
], DeleteManyGuestArgs);
exports.DeleteManyGuestArgs = DeleteManyGuestArgs;
let DeleteOneGuestArgs = class DeleteOneGuestArgs {
};
__decorate([
    (0, graphql_1.Field)(() => GuestWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => GuestWhereUniqueInput)
], DeleteOneGuestArgs.prototype, "where", void 0);
DeleteOneGuestArgs = __decorate([
    (0, graphql_3.ArgsType)()
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
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], FindFirstGuestOrThrowArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], FindFirstGuestOrThrowArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => [GuestScalarFieldEnum], { nullable: true })
], FindFirstGuestOrThrowArgs.prototype, "distinct", void 0);
FindFirstGuestOrThrowArgs = __decorate([
    (0, graphql_3.ArgsType)()
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
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], FindFirstGuestArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], FindFirstGuestArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => [GuestScalarFieldEnum], { nullable: true })
], FindFirstGuestArgs.prototype, "distinct", void 0);
FindFirstGuestArgs = __decorate([
    (0, graphql_3.ArgsType)()
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
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], FindManyGuestArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], FindManyGuestArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => [GuestScalarFieldEnum], { nullable: true })
], FindManyGuestArgs.prototype, "distinct", void 0);
FindManyGuestArgs = __decorate([
    (0, graphql_3.ArgsType)()
], FindManyGuestArgs);
exports.FindManyGuestArgs = FindManyGuestArgs;
let FindUniqueGuestOrThrowArgs = class FindUniqueGuestOrThrowArgs {
};
__decorate([
    (0, graphql_1.Field)(() => GuestWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => GuestWhereUniqueInput)
], FindUniqueGuestOrThrowArgs.prototype, "where", void 0);
FindUniqueGuestOrThrowArgs = __decorate([
    (0, graphql_3.ArgsType)()
], FindUniqueGuestOrThrowArgs);
exports.FindUniqueGuestOrThrowArgs = FindUniqueGuestOrThrowArgs;
let FindUniqueGuestArgs = class FindUniqueGuestArgs {
};
__decorate([
    (0, graphql_1.Field)(() => GuestWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => GuestWhereUniqueInput)
], FindUniqueGuestArgs.prototype, "where", void 0);
FindUniqueGuestArgs = __decorate([
    (0, graphql_3.ArgsType)()
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
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], GuestAggregateArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], GuestAggregateArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestCountAggregateInput, { nullable: true })
], GuestAggregateArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestAvgAggregateInput, { nullable: true })
], GuestAggregateArgs.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestSumAggregateInput, { nullable: true })
], GuestAggregateArgs.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestMinAggregateInput, { nullable: true })
], GuestAggregateArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestMaxAggregateInput, { nullable: true })
], GuestAggregateArgs.prototype, "_max", void 0);
GuestAggregateArgs = __decorate([
    (0, graphql_3.ArgsType)()
], GuestAggregateArgs);
exports.GuestAggregateArgs = GuestAggregateArgs;
let GuestAvgAggregateInput = class GuestAvgAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], GuestAvgAggregateInput.prototype, "whatsapp", void 0);
GuestAvgAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], GuestAvgAggregateInput);
exports.GuestAvgAggregateInput = GuestAvgAggregateInput;
let GuestAvgAggregate = class GuestAvgAggregate {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_6.Float, { nullable: true })
], GuestAvgAggregate.prototype, "whatsapp", void 0);
GuestAvgAggregate = __decorate([
    (0, graphql_2.ObjectType)()
], GuestAvgAggregate);
exports.GuestAvgAggregate = GuestAvgAggregate;
let GuestAvgOrderByAggregateInput = class GuestAvgOrderByAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], GuestAvgOrderByAggregateInput.prototype, "whatsapp", void 0);
GuestAvgOrderByAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], GuestAvgOrderByAggregateInput);
exports.GuestAvgOrderByAggregateInput = GuestAvgOrderByAggregateInput;
let GuestCountAggregateInput = class GuestCountAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], GuestCountAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], GuestCountAggregateInput.prototype, "source", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], GuestCountAggregateInput.prototype, "invitationName", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], GuestCountAggregateInput.prototype, "contactList", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], GuestCountAggregateInput.prototype, "whatsapp", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], GuestCountAggregateInput.prototype, "category", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], GuestCountAggregateInput.prototype, "class", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], GuestCountAggregateInput.prototype, "seat", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], GuestCountAggregateInput.prototype, "studio", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], GuestCountAggregateInput.prototype, "showTime", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], GuestCountAggregateInput.prototype, "rejectionReason", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], GuestCountAggregateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], GuestCountAggregateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], GuestCountAggregateInput.prototype, "deletedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], GuestCountAggregateInput.prototype, "groupMemberOfId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], GuestCountAggregateInput.prototype, "confirmationStatus", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], GuestCountAggregateInput.prototype, "_all", void 0);
GuestCountAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], GuestCountAggregateInput);
exports.GuestCountAggregateInput = GuestCountAggregateInput;
let GuestCountAggregate = class GuestCountAggregate {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], GuestCountAggregate.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], GuestCountAggregate.prototype, "source", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], GuestCountAggregate.prototype, "invitationName", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], GuestCountAggregate.prototype, "contactList", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], GuestCountAggregate.prototype, "whatsapp", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], GuestCountAggregate.prototype, "category", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], GuestCountAggregate.prototype, "class", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], GuestCountAggregate.prototype, "seat", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], GuestCountAggregate.prototype, "studio", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], GuestCountAggregate.prototype, "showTime", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], GuestCountAggregate.prototype, "rejectionReason", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], GuestCountAggregate.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], GuestCountAggregate.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], GuestCountAggregate.prototype, "deletedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], GuestCountAggregate.prototype, "groupMemberOfId", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], GuestCountAggregate.prototype, "confirmationStatus", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], GuestCountAggregate.prototype, "_all", void 0);
GuestCountAggregate = __decorate([
    (0, graphql_2.ObjectType)()
], GuestCountAggregate);
exports.GuestCountAggregate = GuestCountAggregate;
let GuestCountOrderByAggregateInput = class GuestCountOrderByAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], GuestCountOrderByAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], GuestCountOrderByAggregateInput.prototype, "source", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], GuestCountOrderByAggregateInput.prototype, "invitationName", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], GuestCountOrderByAggregateInput.prototype, "contactList", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], GuestCountOrderByAggregateInput.prototype, "whatsapp", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], GuestCountOrderByAggregateInput.prototype, "category", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], GuestCountOrderByAggregateInput.prototype, "class", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], GuestCountOrderByAggregateInput.prototype, "seat", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], GuestCountOrderByAggregateInput.prototype, "studio", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], GuestCountOrderByAggregateInput.prototype, "showTime", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], GuestCountOrderByAggregateInput.prototype, "rejectionReason", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], GuestCountOrderByAggregateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], GuestCountOrderByAggregateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], GuestCountOrderByAggregateInput.prototype, "deletedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], GuestCountOrderByAggregateInput.prototype, "groupMemberOfId", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], GuestCountOrderByAggregateInput.prototype, "confirmationStatus", void 0);
GuestCountOrderByAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], GuestCountOrderByAggregateInput);
exports.GuestCountOrderByAggregateInput = GuestCountOrderByAggregateInput;
let GuestCount = class GuestCount {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], GuestCount.prototype, "groupMembers", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], GuestCount.prototype, "whatsappStatuses", void 0);
GuestCount = __decorate([
    (0, graphql_2.ObjectType)()
], GuestCount);
exports.GuestCount = GuestCount;
let GuestCreateManyGroupMemberOfInputEnvelope = class GuestCreateManyGroupMemberOfInputEnvelope {
};
__decorate([
    (0, graphql_1.Field)(() => [GuestCreateManyGroupMemberOfInput], { nullable: false }),
    (0, class_transformer_1.Type)(() => GuestCreateManyGroupMemberOfInput)
], GuestCreateManyGroupMemberOfInputEnvelope.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], GuestCreateManyGroupMemberOfInputEnvelope.prototype, "skipDuplicates", void 0);
GuestCreateManyGroupMemberOfInputEnvelope = __decorate([
    (0, graphql_5.InputType)()
], GuestCreateManyGroupMemberOfInputEnvelope);
exports.GuestCreateManyGroupMemberOfInputEnvelope = GuestCreateManyGroupMemberOfInputEnvelope;
let GuestCreateManyGroupMemberOfInput = class GuestCreateManyGroupMemberOfInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestCreateManyGroupMemberOfInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestCreateManyGroupMemberOfInput.prototype, "source", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], GuestCreateManyGroupMemberOfInput.prototype, "invitationName", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestCreateManyGroupMemberOfInput.prototype, "contactList", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_6.Float, { nullable: true })
], GuestCreateManyGroupMemberOfInput.prototype, "whatsapp", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestCreateManyGroupMemberOfInput.prototype, "category", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestCreateManyGroupMemberOfInput.prototype, "class", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestCreateManyGroupMemberOfInput.prototype, "seat", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestCreateManyGroupMemberOfInput.prototype, "studio", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestCreateManyGroupMemberOfInput.prototype, "showTime", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestCreateManyGroupMemberOfInput.prototype, "rejectionReason", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], GuestCreateManyGroupMemberOfInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], GuestCreateManyGroupMemberOfInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], GuestCreateManyGroupMemberOfInput.prototype, "deletedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => ConfirmationStatus, { nullable: true })
], GuestCreateManyGroupMemberOfInput.prototype, "confirmationStatus", void 0);
GuestCreateManyGroupMemberOfInput = __decorate([
    (0, graphql_5.InputType)()
], GuestCreateManyGroupMemberOfInput);
exports.GuestCreateManyGroupMemberOfInput = GuestCreateManyGroupMemberOfInput;
let GuestCreateManyInput = class GuestCreateManyInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestCreateManyInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestCreateManyInput.prototype, "source", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], GuestCreateManyInput.prototype, "invitationName", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestCreateManyInput.prototype, "contactList", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_6.Float, { nullable: true })
], GuestCreateManyInput.prototype, "whatsapp", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestCreateManyInput.prototype, "category", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestCreateManyInput.prototype, "class", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestCreateManyInput.prototype, "seat", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestCreateManyInput.prototype, "studio", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestCreateManyInput.prototype, "showTime", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestCreateManyInput.prototype, "rejectionReason", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], GuestCreateManyInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], GuestCreateManyInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], GuestCreateManyInput.prototype, "deletedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestCreateManyInput.prototype, "groupMemberOfId", void 0);
__decorate([
    (0, graphql_1.Field)(() => ConfirmationStatus, { nullable: true })
], GuestCreateManyInput.prototype, "confirmationStatus", void 0);
GuestCreateManyInput = __decorate([
    (0, graphql_5.InputType)()
], GuestCreateManyInput);
exports.GuestCreateManyInput = GuestCreateManyInput;
let GuestCreateNestedManyWithoutGroupMemberOfInput = class GuestCreateNestedManyWithoutGroupMemberOfInput {
};
__decorate([
    (0, graphql_1.Field)(() => [GuestCreateWithoutGroupMemberOfInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => GuestCreateWithoutGroupMemberOfInput)
], GuestCreateNestedManyWithoutGroupMemberOfInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [GuestCreateOrConnectWithoutGroupMemberOfInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => GuestCreateOrConnectWithoutGroupMemberOfInput)
], GuestCreateNestedManyWithoutGroupMemberOfInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestCreateManyGroupMemberOfInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => GuestCreateManyGroupMemberOfInputEnvelope)
], GuestCreateNestedManyWithoutGroupMemberOfInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [GuestWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => GuestWhereUniqueInput)
], GuestCreateNestedManyWithoutGroupMemberOfInput.prototype, "connect", void 0);
GuestCreateNestedManyWithoutGroupMemberOfInput = __decorate([
    (0, graphql_5.InputType)()
], GuestCreateNestedManyWithoutGroupMemberOfInput);
exports.GuestCreateNestedManyWithoutGroupMemberOfInput = GuestCreateNestedManyWithoutGroupMemberOfInput;
let GuestCreateNestedOneWithoutGroupMembersInput = class GuestCreateNestedOneWithoutGroupMembersInput {
};
__decorate([
    (0, graphql_1.Field)(() => GuestCreateWithoutGroupMembersInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => GuestCreateWithoutGroupMembersInput)
], GuestCreateNestedOneWithoutGroupMembersInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestCreateOrConnectWithoutGroupMembersInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => GuestCreateOrConnectWithoutGroupMembersInput)
], GuestCreateNestedOneWithoutGroupMembersInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestWhereUniqueInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => GuestWhereUniqueInput)
], GuestCreateNestedOneWithoutGroupMembersInput.prototype, "connect", void 0);
GuestCreateNestedOneWithoutGroupMembersInput = __decorate([
    (0, graphql_5.InputType)()
], GuestCreateNestedOneWithoutGroupMembersInput);
exports.GuestCreateNestedOneWithoutGroupMembersInput = GuestCreateNestedOneWithoutGroupMembersInput;
let GuestCreateNestedOneWithoutInvitationImageInput = class GuestCreateNestedOneWithoutInvitationImageInput {
};
__decorate([
    (0, graphql_1.Field)(() => GuestCreateWithoutInvitationImageInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => GuestCreateWithoutInvitationImageInput)
], GuestCreateNestedOneWithoutInvitationImageInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestCreateOrConnectWithoutInvitationImageInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => GuestCreateOrConnectWithoutInvitationImageInput)
], GuestCreateNestedOneWithoutInvitationImageInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestWhereUniqueInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => GuestWhereUniqueInput)
], GuestCreateNestedOneWithoutInvitationImageInput.prototype, "connect", void 0);
GuestCreateNestedOneWithoutInvitationImageInput = __decorate([
    (0, graphql_5.InputType)()
], GuestCreateNestedOneWithoutInvitationImageInput);
exports.GuestCreateNestedOneWithoutInvitationImageInput = GuestCreateNestedOneWithoutInvitationImageInput;
let GuestCreateNestedOneWithoutQrcodeInput = class GuestCreateNestedOneWithoutQrcodeInput {
};
__decorate([
    (0, graphql_1.Field)(() => GuestCreateWithoutQrcodeInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => GuestCreateWithoutQrcodeInput)
], GuestCreateNestedOneWithoutQrcodeInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestCreateOrConnectWithoutQrcodeInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => GuestCreateOrConnectWithoutQrcodeInput)
], GuestCreateNestedOneWithoutQrcodeInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestWhereUniqueInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => GuestWhereUniqueInput)
], GuestCreateNestedOneWithoutQrcodeInput.prototype, "connect", void 0);
GuestCreateNestedOneWithoutQrcodeInput = __decorate([
    (0, graphql_5.InputType)()
], GuestCreateNestedOneWithoutQrcodeInput);
exports.GuestCreateNestedOneWithoutQrcodeInput = GuestCreateNestedOneWithoutQrcodeInput;
let GuestCreateNestedOneWithoutWhatsappStatusesInput = class GuestCreateNestedOneWithoutWhatsappStatusesInput {
};
__decorate([
    (0, graphql_1.Field)(() => GuestCreateWithoutWhatsappStatusesInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => GuestCreateWithoutWhatsappStatusesInput)
], GuestCreateNestedOneWithoutWhatsappStatusesInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestCreateOrConnectWithoutWhatsappStatusesInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => GuestCreateOrConnectWithoutWhatsappStatusesInput)
], GuestCreateNestedOneWithoutWhatsappStatusesInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestWhereUniqueInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => GuestWhereUniqueInput)
], GuestCreateNestedOneWithoutWhatsappStatusesInput.prototype, "connect", void 0);
GuestCreateNestedOneWithoutWhatsappStatusesInput = __decorate([
    (0, graphql_5.InputType)()
], GuestCreateNestedOneWithoutWhatsappStatusesInput);
exports.GuestCreateNestedOneWithoutWhatsappStatusesInput = GuestCreateNestedOneWithoutWhatsappStatusesInput;
let GuestCreateOrConnectWithoutGroupMemberOfInput = class GuestCreateOrConnectWithoutGroupMemberOfInput {
};
__decorate([
    (0, graphql_1.Field)(() => GuestWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => GuestWhereUniqueInput)
], GuestCreateOrConnectWithoutGroupMemberOfInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestCreateWithoutGroupMemberOfInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => GuestCreateWithoutGroupMemberOfInput)
], GuestCreateOrConnectWithoutGroupMemberOfInput.prototype, "create", void 0);
GuestCreateOrConnectWithoutGroupMemberOfInput = __decorate([
    (0, graphql_5.InputType)()
], GuestCreateOrConnectWithoutGroupMemberOfInput);
exports.GuestCreateOrConnectWithoutGroupMemberOfInput = GuestCreateOrConnectWithoutGroupMemberOfInput;
let GuestCreateOrConnectWithoutGroupMembersInput = class GuestCreateOrConnectWithoutGroupMembersInput {
};
__decorate([
    (0, graphql_1.Field)(() => GuestWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => GuestWhereUniqueInput)
], GuestCreateOrConnectWithoutGroupMembersInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestCreateWithoutGroupMembersInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => GuestCreateWithoutGroupMembersInput)
], GuestCreateOrConnectWithoutGroupMembersInput.prototype, "create", void 0);
GuestCreateOrConnectWithoutGroupMembersInput = __decorate([
    (0, graphql_5.InputType)()
], GuestCreateOrConnectWithoutGroupMembersInput);
exports.GuestCreateOrConnectWithoutGroupMembersInput = GuestCreateOrConnectWithoutGroupMembersInput;
let GuestCreateOrConnectWithoutInvitationImageInput = class GuestCreateOrConnectWithoutInvitationImageInput {
};
__decorate([
    (0, graphql_1.Field)(() => GuestWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => GuestWhereUniqueInput)
], GuestCreateOrConnectWithoutInvitationImageInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestCreateWithoutInvitationImageInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => GuestCreateWithoutInvitationImageInput)
], GuestCreateOrConnectWithoutInvitationImageInput.prototype, "create", void 0);
GuestCreateOrConnectWithoutInvitationImageInput = __decorate([
    (0, graphql_5.InputType)()
], GuestCreateOrConnectWithoutInvitationImageInput);
exports.GuestCreateOrConnectWithoutInvitationImageInput = GuestCreateOrConnectWithoutInvitationImageInput;
let GuestCreateOrConnectWithoutQrcodeInput = class GuestCreateOrConnectWithoutQrcodeInput {
};
__decorate([
    (0, graphql_1.Field)(() => GuestWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => GuestWhereUniqueInput)
], GuestCreateOrConnectWithoutQrcodeInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestCreateWithoutQrcodeInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => GuestCreateWithoutQrcodeInput)
], GuestCreateOrConnectWithoutQrcodeInput.prototype, "create", void 0);
GuestCreateOrConnectWithoutQrcodeInput = __decorate([
    (0, graphql_5.InputType)()
], GuestCreateOrConnectWithoutQrcodeInput);
exports.GuestCreateOrConnectWithoutQrcodeInput = GuestCreateOrConnectWithoutQrcodeInput;
let GuestCreateOrConnectWithoutWhatsappStatusesInput = class GuestCreateOrConnectWithoutWhatsappStatusesInput {
};
__decorate([
    (0, graphql_1.Field)(() => GuestWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => GuestWhereUniqueInput)
], GuestCreateOrConnectWithoutWhatsappStatusesInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestCreateWithoutWhatsappStatusesInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => GuestCreateWithoutWhatsappStatusesInput)
], GuestCreateOrConnectWithoutWhatsappStatusesInput.prototype, "create", void 0);
GuestCreateOrConnectWithoutWhatsappStatusesInput = __decorate([
    (0, graphql_5.InputType)()
], GuestCreateOrConnectWithoutWhatsappStatusesInput);
exports.GuestCreateOrConnectWithoutWhatsappStatusesInput = GuestCreateOrConnectWithoutWhatsappStatusesInput;
let GuestCreateWithoutGroupMemberOfInput = class GuestCreateWithoutGroupMemberOfInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestCreateWithoutGroupMemberOfInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestCreateWithoutGroupMemberOfInput.prototype, "source", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], GuestCreateWithoutGroupMemberOfInput.prototype, "invitationName", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestCreateWithoutGroupMemberOfInput.prototype, "contactList", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_6.Float, { nullable: true })
], GuestCreateWithoutGroupMemberOfInput.prototype, "whatsapp", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestCreateWithoutGroupMemberOfInput.prototype, "category", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestCreateWithoutGroupMemberOfInput.prototype, "class", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestCreateWithoutGroupMemberOfInput.prototype, "seat", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestCreateWithoutGroupMemberOfInput.prototype, "studio", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestCreateWithoutGroupMemberOfInput.prototype, "showTime", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestCreateWithoutGroupMemberOfInput.prototype, "rejectionReason", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], GuestCreateWithoutGroupMemberOfInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], GuestCreateWithoutGroupMemberOfInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], GuestCreateWithoutGroupMemberOfInput.prototype, "deletedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => ConfirmationStatus, { nullable: true })
], GuestCreateWithoutGroupMemberOfInput.prototype, "confirmationStatus", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestCreateNestedManyWithoutGroupMemberOfInput, { nullable: true })
], GuestCreateWithoutGroupMemberOfInput.prototype, "groupMembers", void 0);
__decorate([
    (0, graphql_1.Field)(() => QrCodeCreateNestedOneWithoutGuestInput, { nullable: true })
], GuestCreateWithoutGroupMemberOfInput.prototype, "qrcode", void 0);
__decorate([
    (0, graphql_1.Field)(() => InvitationImageCreateNestedOneWithoutGuestInput, { nullable: true })
], GuestCreateWithoutGroupMemberOfInput.prototype, "invitationImage", void 0);
__decorate([
    (0, graphql_1.Field)(() => WhatsappStatusCreateNestedManyWithoutGuestInput, { nullable: true })
], GuestCreateWithoutGroupMemberOfInput.prototype, "whatsappStatuses", void 0);
GuestCreateWithoutGroupMemberOfInput = __decorate([
    (0, graphql_5.InputType)()
], GuestCreateWithoutGroupMemberOfInput);
exports.GuestCreateWithoutGroupMemberOfInput = GuestCreateWithoutGroupMemberOfInput;
let GuestCreateWithoutGroupMembersInput = class GuestCreateWithoutGroupMembersInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestCreateWithoutGroupMembersInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestCreateWithoutGroupMembersInput.prototype, "source", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], GuestCreateWithoutGroupMembersInput.prototype, "invitationName", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestCreateWithoutGroupMembersInput.prototype, "contactList", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_6.Float, { nullable: true })
], GuestCreateWithoutGroupMembersInput.prototype, "whatsapp", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestCreateWithoutGroupMembersInput.prototype, "category", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestCreateWithoutGroupMembersInput.prototype, "class", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestCreateWithoutGroupMembersInput.prototype, "seat", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestCreateWithoutGroupMembersInput.prototype, "studio", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestCreateWithoutGroupMembersInput.prototype, "showTime", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestCreateWithoutGroupMembersInput.prototype, "rejectionReason", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], GuestCreateWithoutGroupMembersInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], GuestCreateWithoutGroupMembersInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], GuestCreateWithoutGroupMembersInput.prototype, "deletedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => ConfirmationStatus, { nullable: true })
], GuestCreateWithoutGroupMembersInput.prototype, "confirmationStatus", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestCreateNestedOneWithoutGroupMembersInput, { nullable: true })
], GuestCreateWithoutGroupMembersInput.prototype, "groupMemberOf", void 0);
__decorate([
    (0, graphql_1.Field)(() => QrCodeCreateNestedOneWithoutGuestInput, { nullable: true })
], GuestCreateWithoutGroupMembersInput.prototype, "qrcode", void 0);
__decorate([
    (0, graphql_1.Field)(() => InvitationImageCreateNestedOneWithoutGuestInput, { nullable: true })
], GuestCreateWithoutGroupMembersInput.prototype, "invitationImage", void 0);
__decorate([
    (0, graphql_1.Field)(() => WhatsappStatusCreateNestedManyWithoutGuestInput, { nullable: true })
], GuestCreateWithoutGroupMembersInput.prototype, "whatsappStatuses", void 0);
GuestCreateWithoutGroupMembersInput = __decorate([
    (0, graphql_5.InputType)()
], GuestCreateWithoutGroupMembersInput);
exports.GuestCreateWithoutGroupMembersInput = GuestCreateWithoutGroupMembersInput;
let GuestCreateWithoutInvitationImageInput = class GuestCreateWithoutInvitationImageInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestCreateWithoutInvitationImageInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestCreateWithoutInvitationImageInput.prototype, "source", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], GuestCreateWithoutInvitationImageInput.prototype, "invitationName", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestCreateWithoutInvitationImageInput.prototype, "contactList", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_6.Float, { nullable: true })
], GuestCreateWithoutInvitationImageInput.prototype, "whatsapp", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestCreateWithoutInvitationImageInput.prototype, "category", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestCreateWithoutInvitationImageInput.prototype, "class", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestCreateWithoutInvitationImageInput.prototype, "seat", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestCreateWithoutInvitationImageInput.prototype, "studio", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestCreateWithoutInvitationImageInput.prototype, "showTime", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestCreateWithoutInvitationImageInput.prototype, "rejectionReason", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], GuestCreateWithoutInvitationImageInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], GuestCreateWithoutInvitationImageInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], GuestCreateWithoutInvitationImageInput.prototype, "deletedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => ConfirmationStatus, { nullable: true })
], GuestCreateWithoutInvitationImageInput.prototype, "confirmationStatus", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestCreateNestedOneWithoutGroupMembersInput, { nullable: true })
], GuestCreateWithoutInvitationImageInput.prototype, "groupMemberOf", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestCreateNestedManyWithoutGroupMemberOfInput, { nullable: true })
], GuestCreateWithoutInvitationImageInput.prototype, "groupMembers", void 0);
__decorate([
    (0, graphql_1.Field)(() => QrCodeCreateNestedOneWithoutGuestInput, { nullable: true })
], GuestCreateWithoutInvitationImageInput.prototype, "qrcode", void 0);
__decorate([
    (0, graphql_1.Field)(() => WhatsappStatusCreateNestedManyWithoutGuestInput, { nullable: true })
], GuestCreateWithoutInvitationImageInput.prototype, "whatsappStatuses", void 0);
GuestCreateWithoutInvitationImageInput = __decorate([
    (0, graphql_5.InputType)()
], GuestCreateWithoutInvitationImageInput);
exports.GuestCreateWithoutInvitationImageInput = GuestCreateWithoutInvitationImageInput;
let GuestCreateWithoutQrcodeInput = class GuestCreateWithoutQrcodeInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestCreateWithoutQrcodeInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestCreateWithoutQrcodeInput.prototype, "source", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], GuestCreateWithoutQrcodeInput.prototype, "invitationName", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestCreateWithoutQrcodeInput.prototype, "contactList", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_6.Float, { nullable: true })
], GuestCreateWithoutQrcodeInput.prototype, "whatsapp", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestCreateWithoutQrcodeInput.prototype, "category", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestCreateWithoutQrcodeInput.prototype, "class", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestCreateWithoutQrcodeInput.prototype, "seat", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestCreateWithoutQrcodeInput.prototype, "studio", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestCreateWithoutQrcodeInput.prototype, "showTime", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestCreateWithoutQrcodeInput.prototype, "rejectionReason", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], GuestCreateWithoutQrcodeInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], GuestCreateWithoutQrcodeInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], GuestCreateWithoutQrcodeInput.prototype, "deletedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => ConfirmationStatus, { nullable: true })
], GuestCreateWithoutQrcodeInput.prototype, "confirmationStatus", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestCreateNestedOneWithoutGroupMembersInput, { nullable: true })
], GuestCreateWithoutQrcodeInput.prototype, "groupMemberOf", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestCreateNestedManyWithoutGroupMemberOfInput, { nullable: true })
], GuestCreateWithoutQrcodeInput.prototype, "groupMembers", void 0);
__decorate([
    (0, graphql_1.Field)(() => InvitationImageCreateNestedOneWithoutGuestInput, { nullable: true })
], GuestCreateWithoutQrcodeInput.prototype, "invitationImage", void 0);
__decorate([
    (0, graphql_1.Field)(() => WhatsappStatusCreateNestedManyWithoutGuestInput, { nullable: true })
], GuestCreateWithoutQrcodeInput.prototype, "whatsappStatuses", void 0);
GuestCreateWithoutQrcodeInput = __decorate([
    (0, graphql_5.InputType)()
], GuestCreateWithoutQrcodeInput);
exports.GuestCreateWithoutQrcodeInput = GuestCreateWithoutQrcodeInput;
let GuestCreateWithoutWhatsappStatusesInput = class GuestCreateWithoutWhatsappStatusesInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestCreateWithoutWhatsappStatusesInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestCreateWithoutWhatsappStatusesInput.prototype, "source", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], GuestCreateWithoutWhatsappStatusesInput.prototype, "invitationName", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestCreateWithoutWhatsappStatusesInput.prototype, "contactList", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_6.Float, { nullable: true })
], GuestCreateWithoutWhatsappStatusesInput.prototype, "whatsapp", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestCreateWithoutWhatsappStatusesInput.prototype, "category", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestCreateWithoutWhatsappStatusesInput.prototype, "class", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestCreateWithoutWhatsappStatusesInput.prototype, "seat", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestCreateWithoutWhatsappStatusesInput.prototype, "studio", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestCreateWithoutWhatsappStatusesInput.prototype, "showTime", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestCreateWithoutWhatsappStatusesInput.prototype, "rejectionReason", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], GuestCreateWithoutWhatsappStatusesInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], GuestCreateWithoutWhatsappStatusesInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], GuestCreateWithoutWhatsappStatusesInput.prototype, "deletedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => ConfirmationStatus, { nullable: true })
], GuestCreateWithoutWhatsappStatusesInput.prototype, "confirmationStatus", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestCreateNestedOneWithoutGroupMembersInput, { nullable: true })
], GuestCreateWithoutWhatsappStatusesInput.prototype, "groupMemberOf", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestCreateNestedManyWithoutGroupMemberOfInput, { nullable: true })
], GuestCreateWithoutWhatsappStatusesInput.prototype, "groupMembers", void 0);
__decorate([
    (0, graphql_1.Field)(() => QrCodeCreateNestedOneWithoutGuestInput, { nullable: true })
], GuestCreateWithoutWhatsappStatusesInput.prototype, "qrcode", void 0);
__decorate([
    (0, graphql_1.Field)(() => InvitationImageCreateNestedOneWithoutGuestInput, { nullable: true })
], GuestCreateWithoutWhatsappStatusesInput.prototype, "invitationImage", void 0);
GuestCreateWithoutWhatsappStatusesInput = __decorate([
    (0, graphql_5.InputType)()
], GuestCreateWithoutWhatsappStatusesInput);
exports.GuestCreateWithoutWhatsappStatusesInput = GuestCreateWithoutWhatsappStatusesInput;
let GuestCreateInput = class GuestCreateInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestCreateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestCreateInput.prototype, "source", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], GuestCreateInput.prototype, "invitationName", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestCreateInput.prototype, "contactList", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_6.Float, { nullable: true })
], GuestCreateInput.prototype, "whatsapp", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestCreateInput.prototype, "category", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestCreateInput.prototype, "class", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestCreateInput.prototype, "seat", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestCreateInput.prototype, "studio", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestCreateInput.prototype, "showTime", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestCreateInput.prototype, "rejectionReason", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], GuestCreateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], GuestCreateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], GuestCreateInput.prototype, "deletedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => ConfirmationStatus, { nullable: true })
], GuestCreateInput.prototype, "confirmationStatus", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestCreateNestedOneWithoutGroupMembersInput, { nullable: true })
], GuestCreateInput.prototype, "groupMemberOf", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestCreateNestedManyWithoutGroupMemberOfInput, { nullable: true })
], GuestCreateInput.prototype, "groupMembers", void 0);
__decorate([
    (0, graphql_1.Field)(() => QrCodeCreateNestedOneWithoutGuestInput, { nullable: true })
], GuestCreateInput.prototype, "qrcode", void 0);
__decorate([
    (0, graphql_1.Field)(() => InvitationImageCreateNestedOneWithoutGuestInput, { nullable: true })
], GuestCreateInput.prototype, "invitationImage", void 0);
__decorate([
    (0, graphql_1.Field)(() => WhatsappStatusCreateNestedManyWithoutGuestInput, { nullable: true })
], GuestCreateInput.prototype, "whatsappStatuses", void 0);
GuestCreateInput = __decorate([
    (0, graphql_5.InputType)()
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
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], GuestGroupByArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], GuestGroupByArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestCountAggregateInput, { nullable: true })
], GuestGroupByArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestAvgAggregateInput, { nullable: true })
], GuestGroupByArgs.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestSumAggregateInput, { nullable: true })
], GuestGroupByArgs.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestMinAggregateInput, { nullable: true })
], GuestGroupByArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestMaxAggregateInput, { nullable: true })
], GuestGroupByArgs.prototype, "_max", void 0);
GuestGroupByArgs = __decorate([
    (0, graphql_3.ArgsType)()
], GuestGroupByArgs);
exports.GuestGroupByArgs = GuestGroupByArgs;
let GuestGroupBy = class GuestGroupBy {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], GuestGroupBy.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestGroupBy.prototype, "source", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], GuestGroupBy.prototype, "invitationName", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestGroupBy.prototype, "contactList", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_6.Float, { nullable: true })
], GuestGroupBy.prototype, "whatsapp", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestGroupBy.prototype, "category", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestGroupBy.prototype, "class", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestGroupBy.prototype, "seat", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestGroupBy.prototype, "studio", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestGroupBy.prototype, "showTime", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestGroupBy.prototype, "rejectionReason", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], GuestGroupBy.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], GuestGroupBy.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], GuestGroupBy.prototype, "deletedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestGroupBy.prototype, "groupMemberOfId", void 0);
__decorate([
    (0, graphql_1.Field)(() => ConfirmationStatus, { nullable: true })
], GuestGroupBy.prototype, "confirmationStatus", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestCountAggregate, { nullable: true })
], GuestGroupBy.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestAvgAggregate, { nullable: true })
], GuestGroupBy.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestSumAggregate, { nullable: true })
], GuestGroupBy.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestMinAggregate, { nullable: true })
], GuestGroupBy.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestMaxAggregate, { nullable: true })
], GuestGroupBy.prototype, "_max", void 0);
GuestGroupBy = __decorate([
    (0, graphql_2.ObjectType)()
], GuestGroupBy);
exports.GuestGroupBy = GuestGroupBy;
let GuestListRelationFilter = class GuestListRelationFilter {
};
__decorate([
    (0, graphql_1.Field)(() => GuestWhereInput, { nullable: true })
], GuestListRelationFilter.prototype, "every", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestWhereInput, { nullable: true })
], GuestListRelationFilter.prototype, "some", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestWhereInput, { nullable: true })
], GuestListRelationFilter.prototype, "none", void 0);
GuestListRelationFilter = __decorate([
    (0, graphql_5.InputType)()
], GuestListRelationFilter);
exports.GuestListRelationFilter = GuestListRelationFilter;
let GuestMaxAggregateInput = class GuestMaxAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], GuestMaxAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], GuestMaxAggregateInput.prototype, "source", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], GuestMaxAggregateInput.prototype, "invitationName", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], GuestMaxAggregateInput.prototype, "contactList", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], GuestMaxAggregateInput.prototype, "whatsapp", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], GuestMaxAggregateInput.prototype, "category", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], GuestMaxAggregateInput.prototype, "class", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], GuestMaxAggregateInput.prototype, "seat", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], GuestMaxAggregateInput.prototype, "studio", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], GuestMaxAggregateInput.prototype, "showTime", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], GuestMaxAggregateInput.prototype, "rejectionReason", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], GuestMaxAggregateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], GuestMaxAggregateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], GuestMaxAggregateInput.prototype, "deletedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], GuestMaxAggregateInput.prototype, "groupMemberOfId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], GuestMaxAggregateInput.prototype, "confirmationStatus", void 0);
GuestMaxAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], GuestMaxAggregateInput);
exports.GuestMaxAggregateInput = GuestMaxAggregateInput;
let GuestMaxAggregate = class GuestMaxAggregate {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestMaxAggregate.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestMaxAggregate.prototype, "source", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestMaxAggregate.prototype, "invitationName", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestMaxAggregate.prototype, "contactList", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_6.Float, { nullable: true })
], GuestMaxAggregate.prototype, "whatsapp", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestMaxAggregate.prototype, "category", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestMaxAggregate.prototype, "class", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestMaxAggregate.prototype, "seat", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestMaxAggregate.prototype, "studio", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestMaxAggregate.prototype, "showTime", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestMaxAggregate.prototype, "rejectionReason", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], GuestMaxAggregate.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], GuestMaxAggregate.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], GuestMaxAggregate.prototype, "deletedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestMaxAggregate.prototype, "groupMemberOfId", void 0);
__decorate([
    (0, graphql_1.Field)(() => ConfirmationStatus, { nullable: true })
], GuestMaxAggregate.prototype, "confirmationStatus", void 0);
GuestMaxAggregate = __decorate([
    (0, graphql_2.ObjectType)()
], GuestMaxAggregate);
exports.GuestMaxAggregate = GuestMaxAggregate;
let GuestMaxOrderByAggregateInput = class GuestMaxOrderByAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], GuestMaxOrderByAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], GuestMaxOrderByAggregateInput.prototype, "source", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], GuestMaxOrderByAggregateInput.prototype, "invitationName", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], GuestMaxOrderByAggregateInput.prototype, "contactList", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], GuestMaxOrderByAggregateInput.prototype, "whatsapp", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], GuestMaxOrderByAggregateInput.prototype, "category", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], GuestMaxOrderByAggregateInput.prototype, "class", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], GuestMaxOrderByAggregateInput.prototype, "seat", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], GuestMaxOrderByAggregateInput.prototype, "studio", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], GuestMaxOrderByAggregateInput.prototype, "showTime", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], GuestMaxOrderByAggregateInput.prototype, "rejectionReason", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], GuestMaxOrderByAggregateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], GuestMaxOrderByAggregateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], GuestMaxOrderByAggregateInput.prototype, "deletedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], GuestMaxOrderByAggregateInput.prototype, "groupMemberOfId", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], GuestMaxOrderByAggregateInput.prototype, "confirmationStatus", void 0);
GuestMaxOrderByAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], GuestMaxOrderByAggregateInput);
exports.GuestMaxOrderByAggregateInput = GuestMaxOrderByAggregateInput;
let GuestMinAggregateInput = class GuestMinAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], GuestMinAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], GuestMinAggregateInput.prototype, "source", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], GuestMinAggregateInput.prototype, "invitationName", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], GuestMinAggregateInput.prototype, "contactList", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], GuestMinAggregateInput.prototype, "whatsapp", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], GuestMinAggregateInput.prototype, "category", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], GuestMinAggregateInput.prototype, "class", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], GuestMinAggregateInput.prototype, "seat", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], GuestMinAggregateInput.prototype, "studio", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], GuestMinAggregateInput.prototype, "showTime", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], GuestMinAggregateInput.prototype, "rejectionReason", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], GuestMinAggregateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], GuestMinAggregateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], GuestMinAggregateInput.prototype, "deletedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], GuestMinAggregateInput.prototype, "groupMemberOfId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], GuestMinAggregateInput.prototype, "confirmationStatus", void 0);
GuestMinAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], GuestMinAggregateInput);
exports.GuestMinAggregateInput = GuestMinAggregateInput;
let GuestMinAggregate = class GuestMinAggregate {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestMinAggregate.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestMinAggregate.prototype, "source", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestMinAggregate.prototype, "invitationName", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestMinAggregate.prototype, "contactList", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_6.Float, { nullable: true })
], GuestMinAggregate.prototype, "whatsapp", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestMinAggregate.prototype, "category", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestMinAggregate.prototype, "class", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestMinAggregate.prototype, "seat", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestMinAggregate.prototype, "studio", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestMinAggregate.prototype, "showTime", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestMinAggregate.prototype, "rejectionReason", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], GuestMinAggregate.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], GuestMinAggregate.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], GuestMinAggregate.prototype, "deletedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestMinAggregate.prototype, "groupMemberOfId", void 0);
__decorate([
    (0, graphql_1.Field)(() => ConfirmationStatus, { nullable: true })
], GuestMinAggregate.prototype, "confirmationStatus", void 0);
GuestMinAggregate = __decorate([
    (0, graphql_2.ObjectType)()
], GuestMinAggregate);
exports.GuestMinAggregate = GuestMinAggregate;
let GuestMinOrderByAggregateInput = class GuestMinOrderByAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], GuestMinOrderByAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], GuestMinOrderByAggregateInput.prototype, "source", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], GuestMinOrderByAggregateInput.prototype, "invitationName", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], GuestMinOrderByAggregateInput.prototype, "contactList", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], GuestMinOrderByAggregateInput.prototype, "whatsapp", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], GuestMinOrderByAggregateInput.prototype, "category", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], GuestMinOrderByAggregateInput.prototype, "class", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], GuestMinOrderByAggregateInput.prototype, "seat", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], GuestMinOrderByAggregateInput.prototype, "studio", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], GuestMinOrderByAggregateInput.prototype, "showTime", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], GuestMinOrderByAggregateInput.prototype, "rejectionReason", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], GuestMinOrderByAggregateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], GuestMinOrderByAggregateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], GuestMinOrderByAggregateInput.prototype, "deletedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], GuestMinOrderByAggregateInput.prototype, "groupMemberOfId", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], GuestMinOrderByAggregateInput.prototype, "confirmationStatus", void 0);
GuestMinOrderByAggregateInput = __decorate([
    (0, graphql_5.InputType)()
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
    (0, graphql_5.InputType)()
], GuestNullableRelationFilter);
exports.GuestNullableRelationFilter = GuestNullableRelationFilter;
let GuestOrderByRelationAggregateInput = class GuestOrderByRelationAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], GuestOrderByRelationAggregateInput.prototype, "_count", void 0);
GuestOrderByRelationAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], GuestOrderByRelationAggregateInput);
exports.GuestOrderByRelationAggregateInput = GuestOrderByRelationAggregateInput;
let GuestOrderByWithAggregationInput = class GuestOrderByWithAggregationInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], GuestOrderByWithAggregationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrderInput, { nullable: true })
], GuestOrderByWithAggregationInput.prototype, "source", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], GuestOrderByWithAggregationInput.prototype, "invitationName", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrderInput, { nullable: true })
], GuestOrderByWithAggregationInput.prototype, "contactList", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrderInput, { nullable: true })
], GuestOrderByWithAggregationInput.prototype, "whatsapp", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrderInput, { nullable: true })
], GuestOrderByWithAggregationInput.prototype, "category", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrderInput, { nullable: true })
], GuestOrderByWithAggregationInput.prototype, "class", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrderInput, { nullable: true })
], GuestOrderByWithAggregationInput.prototype, "seat", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrderInput, { nullable: true })
], GuestOrderByWithAggregationInput.prototype, "studio", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrderInput, { nullable: true })
], GuestOrderByWithAggregationInput.prototype, "showTime", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrderInput, { nullable: true })
], GuestOrderByWithAggregationInput.prototype, "rejectionReason", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], GuestOrderByWithAggregationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrderInput, { nullable: true })
], GuestOrderByWithAggregationInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrderInput, { nullable: true })
], GuestOrderByWithAggregationInput.prototype, "deletedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrderInput, { nullable: true })
], GuestOrderByWithAggregationInput.prototype, "groupMemberOfId", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrderInput, { nullable: true })
], GuestOrderByWithAggregationInput.prototype, "confirmationStatus", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestCountOrderByAggregateInput, { nullable: true })
], GuestOrderByWithAggregationInput.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestAvgOrderByAggregateInput, { nullable: true })
], GuestOrderByWithAggregationInput.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestMaxOrderByAggregateInput, { nullable: true })
], GuestOrderByWithAggregationInput.prototype, "_max", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestMinOrderByAggregateInput, { nullable: true })
], GuestOrderByWithAggregationInput.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestSumOrderByAggregateInput, { nullable: true })
], GuestOrderByWithAggregationInput.prototype, "_sum", void 0);
GuestOrderByWithAggregationInput = __decorate([
    (0, graphql_5.InputType)()
], GuestOrderByWithAggregationInput);
exports.GuestOrderByWithAggregationInput = GuestOrderByWithAggregationInput;
let GuestOrderByWithRelationInput = GuestOrderByWithRelationInput_1 = class GuestOrderByWithRelationInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], GuestOrderByWithRelationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrderInput, { nullable: true })
], GuestOrderByWithRelationInput.prototype, "source", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], GuestOrderByWithRelationInput.prototype, "invitationName", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrderInput, { nullable: true })
], GuestOrderByWithRelationInput.prototype, "contactList", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrderInput, { nullable: true })
], GuestOrderByWithRelationInput.prototype, "whatsapp", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrderInput, { nullable: true })
], GuestOrderByWithRelationInput.prototype, "category", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrderInput, { nullable: true })
], GuestOrderByWithRelationInput.prototype, "class", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrderInput, { nullable: true })
], GuestOrderByWithRelationInput.prototype, "seat", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrderInput, { nullable: true })
], GuestOrderByWithRelationInput.prototype, "studio", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrderInput, { nullable: true })
], GuestOrderByWithRelationInput.prototype, "showTime", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrderInput, { nullable: true })
], GuestOrderByWithRelationInput.prototype, "rejectionReason", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], GuestOrderByWithRelationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrderInput, { nullable: true })
], GuestOrderByWithRelationInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrderInput, { nullable: true })
], GuestOrderByWithRelationInput.prototype, "deletedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrderInput, { nullable: true })
], GuestOrderByWithRelationInput.prototype, "groupMemberOfId", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrderInput, { nullable: true })
], GuestOrderByWithRelationInput.prototype, "confirmationStatus", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestOrderByWithRelationInput_1, { nullable: true })
], GuestOrderByWithRelationInput.prototype, "groupMemberOf", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestOrderByRelationAggregateInput, { nullable: true })
], GuestOrderByWithRelationInput.prototype, "groupMembers", void 0);
__decorate([
    (0, graphql_1.Field)(() => QrCodeOrderByWithRelationInput, { nullable: true })
], GuestOrderByWithRelationInput.prototype, "qrcode", void 0);
__decorate([
    (0, graphql_1.Field)(() => InvitationImageOrderByWithRelationInput, { nullable: true })
], GuestOrderByWithRelationInput.prototype, "invitationImage", void 0);
__decorate([
    (0, graphql_1.Field)(() => WhatsappStatusOrderByRelationAggregateInput, { nullable: true })
], GuestOrderByWithRelationInput.prototype, "whatsappStatuses", void 0);
GuestOrderByWithRelationInput = GuestOrderByWithRelationInput_1 = __decorate([
    (0, graphql_5.InputType)()
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
    (0, graphql_5.InputType)()
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
], GuestScalarWhereWithAggregatesInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringNullableWithAggregatesFilter, { nullable: true })
], GuestScalarWhereWithAggregatesInput.prototype, "source", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringWithAggregatesFilter, { nullable: true })
], GuestScalarWhereWithAggregatesInput.prototype, "invitationName", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringNullableWithAggregatesFilter, { nullable: true })
], GuestScalarWhereWithAggregatesInput.prototype, "contactList", void 0);
__decorate([
    (0, graphql_1.Field)(() => FloatNullableWithAggregatesFilter, { nullable: true })
], GuestScalarWhereWithAggregatesInput.prototype, "whatsapp", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringNullableWithAggregatesFilter, { nullable: true })
], GuestScalarWhereWithAggregatesInput.prototype, "category", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringNullableWithAggregatesFilter, { nullable: true })
], GuestScalarWhereWithAggregatesInput.prototype, "class", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringNullableWithAggregatesFilter, { nullable: true })
], GuestScalarWhereWithAggregatesInput.prototype, "seat", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringNullableWithAggregatesFilter, { nullable: true })
], GuestScalarWhereWithAggregatesInput.prototype, "studio", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringNullableWithAggregatesFilter, { nullable: true })
], GuestScalarWhereWithAggregatesInput.prototype, "showTime", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringNullableWithAggregatesFilter, { nullable: true })
], GuestScalarWhereWithAggregatesInput.prototype, "rejectionReason", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeWithAggregatesFilter, { nullable: true })
], GuestScalarWhereWithAggregatesInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeNullableWithAggregatesFilter, { nullable: true })
], GuestScalarWhereWithAggregatesInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeNullableWithAggregatesFilter, { nullable: true })
], GuestScalarWhereWithAggregatesInput.prototype, "deletedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringNullableWithAggregatesFilter, { nullable: true })
], GuestScalarWhereWithAggregatesInput.prototype, "groupMemberOfId", void 0);
__decorate([
    (0, graphql_1.Field)(() => EnumConfirmationStatusNullableWithAggregatesFilter, { nullable: true })
], GuestScalarWhereWithAggregatesInput.prototype, "confirmationStatus", void 0);
GuestScalarWhereWithAggregatesInput = GuestScalarWhereWithAggregatesInput_1 = __decorate([
    (0, graphql_5.InputType)()
], GuestScalarWhereWithAggregatesInput);
exports.GuestScalarWhereWithAggregatesInput = GuestScalarWhereWithAggregatesInput;
let GuestScalarWhereInput = GuestScalarWhereInput_1 = class GuestScalarWhereInput {
};
__decorate([
    (0, graphql_1.Field)(() => [GuestScalarWhereInput_1], { nullable: true })
], GuestScalarWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [GuestScalarWhereInput_1], { nullable: true })
], GuestScalarWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [GuestScalarWhereInput_1], { nullable: true })
], GuestScalarWhereInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFilter, { nullable: true })
], GuestScalarWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringNullableFilter, { nullable: true })
], GuestScalarWhereInput.prototype, "source", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFilter, { nullable: true })
], GuestScalarWhereInput.prototype, "invitationName", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringNullableFilter, { nullable: true })
], GuestScalarWhereInput.prototype, "contactList", void 0);
__decorate([
    (0, graphql_1.Field)(() => FloatNullableFilter, { nullable: true })
], GuestScalarWhereInput.prototype, "whatsapp", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringNullableFilter, { nullable: true })
], GuestScalarWhereInput.prototype, "category", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringNullableFilter, { nullable: true })
], GuestScalarWhereInput.prototype, "class", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringNullableFilter, { nullable: true })
], GuestScalarWhereInput.prototype, "seat", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringNullableFilter, { nullable: true })
], GuestScalarWhereInput.prototype, "studio", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringNullableFilter, { nullable: true })
], GuestScalarWhereInput.prototype, "showTime", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringNullableFilter, { nullable: true })
], GuestScalarWhereInput.prototype, "rejectionReason", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFilter, { nullable: true })
], GuestScalarWhereInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeNullableFilter, { nullable: true })
], GuestScalarWhereInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeNullableFilter, { nullable: true })
], GuestScalarWhereInput.prototype, "deletedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringNullableFilter, { nullable: true })
], GuestScalarWhereInput.prototype, "groupMemberOfId", void 0);
__decorate([
    (0, graphql_1.Field)(() => EnumConfirmationStatusNullableFilter, { nullable: true })
], GuestScalarWhereInput.prototype, "confirmationStatus", void 0);
GuestScalarWhereInput = GuestScalarWhereInput_1 = __decorate([
    (0, graphql_5.InputType)()
], GuestScalarWhereInput);
exports.GuestScalarWhereInput = GuestScalarWhereInput;
let GuestSumAggregateInput = class GuestSumAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], GuestSumAggregateInput.prototype, "whatsapp", void 0);
GuestSumAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], GuestSumAggregateInput);
exports.GuestSumAggregateInput = GuestSumAggregateInput;
let GuestSumAggregate = class GuestSumAggregate {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_6.Float, { nullable: true })
], GuestSumAggregate.prototype, "whatsapp", void 0);
GuestSumAggregate = __decorate([
    (0, graphql_2.ObjectType)()
], GuestSumAggregate);
exports.GuestSumAggregate = GuestSumAggregate;
let GuestSumOrderByAggregateInput = class GuestSumOrderByAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], GuestSumOrderByAggregateInput.prototype, "whatsapp", void 0);
GuestSumOrderByAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], GuestSumOrderByAggregateInput);
exports.GuestSumOrderByAggregateInput = GuestSumOrderByAggregateInput;
let GuestUncheckedCreateNestedManyWithoutGroupMemberOfInput = class GuestUncheckedCreateNestedManyWithoutGroupMemberOfInput {
};
__decorate([
    (0, graphql_1.Field)(() => [GuestCreateWithoutGroupMemberOfInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => GuestCreateWithoutGroupMemberOfInput)
], GuestUncheckedCreateNestedManyWithoutGroupMemberOfInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [GuestCreateOrConnectWithoutGroupMemberOfInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => GuestCreateOrConnectWithoutGroupMemberOfInput)
], GuestUncheckedCreateNestedManyWithoutGroupMemberOfInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestCreateManyGroupMemberOfInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => GuestCreateManyGroupMemberOfInputEnvelope)
], GuestUncheckedCreateNestedManyWithoutGroupMemberOfInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [GuestWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => GuestWhereUniqueInput)
], GuestUncheckedCreateNestedManyWithoutGroupMemberOfInput.prototype, "connect", void 0);
GuestUncheckedCreateNestedManyWithoutGroupMemberOfInput = __decorate([
    (0, graphql_5.InputType)()
], GuestUncheckedCreateNestedManyWithoutGroupMemberOfInput);
exports.GuestUncheckedCreateNestedManyWithoutGroupMemberOfInput = GuestUncheckedCreateNestedManyWithoutGroupMemberOfInput;
let GuestUncheckedCreateWithoutGroupMemberOfInput = class GuestUncheckedCreateWithoutGroupMemberOfInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestUncheckedCreateWithoutGroupMemberOfInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestUncheckedCreateWithoutGroupMemberOfInput.prototype, "source", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], GuestUncheckedCreateWithoutGroupMemberOfInput.prototype, "invitationName", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestUncheckedCreateWithoutGroupMemberOfInput.prototype, "contactList", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_6.Float, { nullable: true })
], GuestUncheckedCreateWithoutGroupMemberOfInput.prototype, "whatsapp", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestUncheckedCreateWithoutGroupMemberOfInput.prototype, "category", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestUncheckedCreateWithoutGroupMemberOfInput.prototype, "class", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestUncheckedCreateWithoutGroupMemberOfInput.prototype, "seat", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestUncheckedCreateWithoutGroupMemberOfInput.prototype, "studio", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestUncheckedCreateWithoutGroupMemberOfInput.prototype, "showTime", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestUncheckedCreateWithoutGroupMemberOfInput.prototype, "rejectionReason", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], GuestUncheckedCreateWithoutGroupMemberOfInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], GuestUncheckedCreateWithoutGroupMemberOfInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], GuestUncheckedCreateWithoutGroupMemberOfInput.prototype, "deletedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => ConfirmationStatus, { nullable: true })
], GuestUncheckedCreateWithoutGroupMemberOfInput.prototype, "confirmationStatus", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestUncheckedCreateNestedManyWithoutGroupMemberOfInput, { nullable: true })
], GuestUncheckedCreateWithoutGroupMemberOfInput.prototype, "groupMembers", void 0);
__decorate([
    (0, graphql_1.Field)(() => QrCodeUncheckedCreateNestedOneWithoutGuestInput, { nullable: true })
], GuestUncheckedCreateWithoutGroupMemberOfInput.prototype, "qrcode", void 0);
__decorate([
    (0, graphql_1.Field)(() => InvitationImageUncheckedCreateNestedOneWithoutGuestInput, { nullable: true })
], GuestUncheckedCreateWithoutGroupMemberOfInput.prototype, "invitationImage", void 0);
__decorate([
    (0, graphql_1.Field)(() => WhatsappStatusUncheckedCreateNestedManyWithoutGuestInput, { nullable: true })
], GuestUncheckedCreateWithoutGroupMemberOfInput.prototype, "whatsappStatuses", void 0);
GuestUncheckedCreateWithoutGroupMemberOfInput = __decorate([
    (0, graphql_5.InputType)()
], GuestUncheckedCreateWithoutGroupMemberOfInput);
exports.GuestUncheckedCreateWithoutGroupMemberOfInput = GuestUncheckedCreateWithoutGroupMemberOfInput;
let GuestUncheckedCreateWithoutGroupMembersInput = class GuestUncheckedCreateWithoutGroupMembersInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestUncheckedCreateWithoutGroupMembersInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestUncheckedCreateWithoutGroupMembersInput.prototype, "source", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], GuestUncheckedCreateWithoutGroupMembersInput.prototype, "invitationName", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestUncheckedCreateWithoutGroupMembersInput.prototype, "contactList", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_6.Float, { nullable: true })
], GuestUncheckedCreateWithoutGroupMembersInput.prototype, "whatsapp", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestUncheckedCreateWithoutGroupMembersInput.prototype, "category", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestUncheckedCreateWithoutGroupMembersInput.prototype, "class", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestUncheckedCreateWithoutGroupMembersInput.prototype, "seat", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestUncheckedCreateWithoutGroupMembersInput.prototype, "studio", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestUncheckedCreateWithoutGroupMembersInput.prototype, "showTime", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestUncheckedCreateWithoutGroupMembersInput.prototype, "rejectionReason", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], GuestUncheckedCreateWithoutGroupMembersInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], GuestUncheckedCreateWithoutGroupMembersInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], GuestUncheckedCreateWithoutGroupMembersInput.prototype, "deletedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestUncheckedCreateWithoutGroupMembersInput.prototype, "groupMemberOfId", void 0);
__decorate([
    (0, graphql_1.Field)(() => ConfirmationStatus, { nullable: true })
], GuestUncheckedCreateWithoutGroupMembersInput.prototype, "confirmationStatus", void 0);
__decorate([
    (0, graphql_1.Field)(() => QrCodeUncheckedCreateNestedOneWithoutGuestInput, { nullable: true })
], GuestUncheckedCreateWithoutGroupMembersInput.prototype, "qrcode", void 0);
__decorate([
    (0, graphql_1.Field)(() => InvitationImageUncheckedCreateNestedOneWithoutGuestInput, { nullable: true })
], GuestUncheckedCreateWithoutGroupMembersInput.prototype, "invitationImage", void 0);
__decorate([
    (0, graphql_1.Field)(() => WhatsappStatusUncheckedCreateNestedManyWithoutGuestInput, { nullable: true })
], GuestUncheckedCreateWithoutGroupMembersInput.prototype, "whatsappStatuses", void 0);
GuestUncheckedCreateWithoutGroupMembersInput = __decorate([
    (0, graphql_5.InputType)()
], GuestUncheckedCreateWithoutGroupMembersInput);
exports.GuestUncheckedCreateWithoutGroupMembersInput = GuestUncheckedCreateWithoutGroupMembersInput;
let GuestUncheckedCreateWithoutInvitationImageInput = class GuestUncheckedCreateWithoutInvitationImageInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestUncheckedCreateWithoutInvitationImageInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestUncheckedCreateWithoutInvitationImageInput.prototype, "source", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], GuestUncheckedCreateWithoutInvitationImageInput.prototype, "invitationName", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestUncheckedCreateWithoutInvitationImageInput.prototype, "contactList", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_6.Float, { nullable: true })
], GuestUncheckedCreateWithoutInvitationImageInput.prototype, "whatsapp", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestUncheckedCreateWithoutInvitationImageInput.prototype, "category", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestUncheckedCreateWithoutInvitationImageInput.prototype, "class", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestUncheckedCreateWithoutInvitationImageInput.prototype, "seat", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestUncheckedCreateWithoutInvitationImageInput.prototype, "studio", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestUncheckedCreateWithoutInvitationImageInput.prototype, "showTime", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestUncheckedCreateWithoutInvitationImageInput.prototype, "rejectionReason", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], GuestUncheckedCreateWithoutInvitationImageInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], GuestUncheckedCreateWithoutInvitationImageInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], GuestUncheckedCreateWithoutInvitationImageInput.prototype, "deletedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestUncheckedCreateWithoutInvitationImageInput.prototype, "groupMemberOfId", void 0);
__decorate([
    (0, graphql_1.Field)(() => ConfirmationStatus, { nullable: true })
], GuestUncheckedCreateWithoutInvitationImageInput.prototype, "confirmationStatus", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestUncheckedCreateNestedManyWithoutGroupMemberOfInput, { nullable: true })
], GuestUncheckedCreateWithoutInvitationImageInput.prototype, "groupMembers", void 0);
__decorate([
    (0, graphql_1.Field)(() => QrCodeUncheckedCreateNestedOneWithoutGuestInput, { nullable: true })
], GuestUncheckedCreateWithoutInvitationImageInput.prototype, "qrcode", void 0);
__decorate([
    (0, graphql_1.Field)(() => WhatsappStatusUncheckedCreateNestedManyWithoutGuestInput, { nullable: true })
], GuestUncheckedCreateWithoutInvitationImageInput.prototype, "whatsappStatuses", void 0);
GuestUncheckedCreateWithoutInvitationImageInput = __decorate([
    (0, graphql_5.InputType)()
], GuestUncheckedCreateWithoutInvitationImageInput);
exports.GuestUncheckedCreateWithoutInvitationImageInput = GuestUncheckedCreateWithoutInvitationImageInput;
let GuestUncheckedCreateWithoutQrcodeInput = class GuestUncheckedCreateWithoutQrcodeInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestUncheckedCreateWithoutQrcodeInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestUncheckedCreateWithoutQrcodeInput.prototype, "source", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], GuestUncheckedCreateWithoutQrcodeInput.prototype, "invitationName", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestUncheckedCreateWithoutQrcodeInput.prototype, "contactList", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_6.Float, { nullable: true })
], GuestUncheckedCreateWithoutQrcodeInput.prototype, "whatsapp", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestUncheckedCreateWithoutQrcodeInput.prototype, "category", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestUncheckedCreateWithoutQrcodeInput.prototype, "class", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestUncheckedCreateWithoutQrcodeInput.prototype, "seat", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestUncheckedCreateWithoutQrcodeInput.prototype, "studio", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestUncheckedCreateWithoutQrcodeInput.prototype, "showTime", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestUncheckedCreateWithoutQrcodeInput.prototype, "rejectionReason", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], GuestUncheckedCreateWithoutQrcodeInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], GuestUncheckedCreateWithoutQrcodeInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], GuestUncheckedCreateWithoutQrcodeInput.prototype, "deletedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestUncheckedCreateWithoutQrcodeInput.prototype, "groupMemberOfId", void 0);
__decorate([
    (0, graphql_1.Field)(() => ConfirmationStatus, { nullable: true })
], GuestUncheckedCreateWithoutQrcodeInput.prototype, "confirmationStatus", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestUncheckedCreateNestedManyWithoutGroupMemberOfInput, { nullable: true })
], GuestUncheckedCreateWithoutQrcodeInput.prototype, "groupMembers", void 0);
__decorate([
    (0, graphql_1.Field)(() => InvitationImageUncheckedCreateNestedOneWithoutGuestInput, { nullable: true })
], GuestUncheckedCreateWithoutQrcodeInput.prototype, "invitationImage", void 0);
__decorate([
    (0, graphql_1.Field)(() => WhatsappStatusUncheckedCreateNestedManyWithoutGuestInput, { nullable: true })
], GuestUncheckedCreateWithoutQrcodeInput.prototype, "whatsappStatuses", void 0);
GuestUncheckedCreateWithoutQrcodeInput = __decorate([
    (0, graphql_5.InputType)()
], GuestUncheckedCreateWithoutQrcodeInput);
exports.GuestUncheckedCreateWithoutQrcodeInput = GuestUncheckedCreateWithoutQrcodeInput;
let GuestUncheckedCreateWithoutWhatsappStatusesInput = class GuestUncheckedCreateWithoutWhatsappStatusesInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestUncheckedCreateWithoutWhatsappStatusesInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestUncheckedCreateWithoutWhatsappStatusesInput.prototype, "source", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], GuestUncheckedCreateWithoutWhatsappStatusesInput.prototype, "invitationName", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestUncheckedCreateWithoutWhatsappStatusesInput.prototype, "contactList", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_6.Float, { nullable: true })
], GuestUncheckedCreateWithoutWhatsappStatusesInput.prototype, "whatsapp", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestUncheckedCreateWithoutWhatsappStatusesInput.prototype, "category", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestUncheckedCreateWithoutWhatsappStatusesInput.prototype, "class", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestUncheckedCreateWithoutWhatsappStatusesInput.prototype, "seat", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestUncheckedCreateWithoutWhatsappStatusesInput.prototype, "studio", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestUncheckedCreateWithoutWhatsappStatusesInput.prototype, "showTime", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestUncheckedCreateWithoutWhatsappStatusesInput.prototype, "rejectionReason", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], GuestUncheckedCreateWithoutWhatsappStatusesInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], GuestUncheckedCreateWithoutWhatsappStatusesInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], GuestUncheckedCreateWithoutWhatsappStatusesInput.prototype, "deletedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestUncheckedCreateWithoutWhatsappStatusesInput.prototype, "groupMemberOfId", void 0);
__decorate([
    (0, graphql_1.Field)(() => ConfirmationStatus, { nullable: true })
], GuestUncheckedCreateWithoutWhatsappStatusesInput.prototype, "confirmationStatus", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestUncheckedCreateNestedManyWithoutGroupMemberOfInput, { nullable: true })
], GuestUncheckedCreateWithoutWhatsappStatusesInput.prototype, "groupMembers", void 0);
__decorate([
    (0, graphql_1.Field)(() => QrCodeUncheckedCreateNestedOneWithoutGuestInput, { nullable: true })
], GuestUncheckedCreateWithoutWhatsappStatusesInput.prototype, "qrcode", void 0);
__decorate([
    (0, graphql_1.Field)(() => InvitationImageUncheckedCreateNestedOneWithoutGuestInput, { nullable: true })
], GuestUncheckedCreateWithoutWhatsappStatusesInput.prototype, "invitationImage", void 0);
GuestUncheckedCreateWithoutWhatsappStatusesInput = __decorate([
    (0, graphql_5.InputType)()
], GuestUncheckedCreateWithoutWhatsappStatusesInput);
exports.GuestUncheckedCreateWithoutWhatsappStatusesInput = GuestUncheckedCreateWithoutWhatsappStatusesInput;
let GuestUncheckedCreateInput = class GuestUncheckedCreateInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestUncheckedCreateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestUncheckedCreateInput.prototype, "source", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], GuestUncheckedCreateInput.prototype, "invitationName", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestUncheckedCreateInput.prototype, "contactList", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_6.Float, { nullable: true })
], GuestUncheckedCreateInput.prototype, "whatsapp", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestUncheckedCreateInput.prototype, "category", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestUncheckedCreateInput.prototype, "class", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestUncheckedCreateInput.prototype, "seat", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestUncheckedCreateInput.prototype, "studio", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestUncheckedCreateInput.prototype, "showTime", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestUncheckedCreateInput.prototype, "rejectionReason", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], GuestUncheckedCreateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], GuestUncheckedCreateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], GuestUncheckedCreateInput.prototype, "deletedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestUncheckedCreateInput.prototype, "groupMemberOfId", void 0);
__decorate([
    (0, graphql_1.Field)(() => ConfirmationStatus, { nullable: true })
], GuestUncheckedCreateInput.prototype, "confirmationStatus", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestUncheckedCreateNestedManyWithoutGroupMemberOfInput, { nullable: true })
], GuestUncheckedCreateInput.prototype, "groupMembers", void 0);
__decorate([
    (0, graphql_1.Field)(() => QrCodeUncheckedCreateNestedOneWithoutGuestInput, { nullable: true })
], GuestUncheckedCreateInput.prototype, "qrcode", void 0);
__decorate([
    (0, graphql_1.Field)(() => InvitationImageUncheckedCreateNestedOneWithoutGuestInput, { nullable: true })
], GuestUncheckedCreateInput.prototype, "invitationImage", void 0);
__decorate([
    (0, graphql_1.Field)(() => WhatsappStatusUncheckedCreateNestedManyWithoutGuestInput, { nullable: true })
], GuestUncheckedCreateInput.prototype, "whatsappStatuses", void 0);
GuestUncheckedCreateInput = __decorate([
    (0, graphql_5.InputType)()
], GuestUncheckedCreateInput);
exports.GuestUncheckedCreateInput = GuestUncheckedCreateInput;
let GuestUncheckedUpdateManyWithoutGroupMemberOfNestedInput = class GuestUncheckedUpdateManyWithoutGroupMemberOfNestedInput {
};
__decorate([
    (0, graphql_1.Field)(() => [GuestCreateWithoutGroupMemberOfInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => GuestCreateWithoutGroupMemberOfInput)
], GuestUncheckedUpdateManyWithoutGroupMemberOfNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [GuestCreateOrConnectWithoutGroupMemberOfInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => GuestCreateOrConnectWithoutGroupMemberOfInput)
], GuestUncheckedUpdateManyWithoutGroupMemberOfNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => [GuestUpsertWithWhereUniqueWithoutGroupMemberOfInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => GuestUpsertWithWhereUniqueWithoutGroupMemberOfInput)
], GuestUncheckedUpdateManyWithoutGroupMemberOfNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestCreateManyGroupMemberOfInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => GuestCreateManyGroupMemberOfInputEnvelope)
], GuestUncheckedUpdateManyWithoutGroupMemberOfNestedInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [GuestWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => GuestWhereUniqueInput)
], GuestUncheckedUpdateManyWithoutGroupMemberOfNestedInput.prototype, "set", void 0);
__decorate([
    (0, graphql_1.Field)(() => [GuestWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => GuestWhereUniqueInput)
], GuestUncheckedUpdateManyWithoutGroupMemberOfNestedInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [GuestWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => GuestWhereUniqueInput)
], GuestUncheckedUpdateManyWithoutGroupMemberOfNestedInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => [GuestWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => GuestWhereUniqueInput)
], GuestUncheckedUpdateManyWithoutGroupMemberOfNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [GuestUpdateWithWhereUniqueWithoutGroupMemberOfInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => GuestUpdateWithWhereUniqueWithoutGroupMemberOfInput)
], GuestUncheckedUpdateManyWithoutGroupMemberOfNestedInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => [GuestUpdateManyWithWhereWithoutGroupMemberOfInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => GuestUpdateManyWithWhereWithoutGroupMemberOfInput)
], GuestUncheckedUpdateManyWithoutGroupMemberOfNestedInput.prototype, "updateMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [GuestScalarWhereInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => GuestScalarWhereInput)
], GuestUncheckedUpdateManyWithoutGroupMemberOfNestedInput.prototype, "deleteMany", void 0);
GuestUncheckedUpdateManyWithoutGroupMemberOfNestedInput = __decorate([
    (0, graphql_5.InputType)()
], GuestUncheckedUpdateManyWithoutGroupMemberOfNestedInput);
exports.GuestUncheckedUpdateManyWithoutGroupMemberOfNestedInput = GuestUncheckedUpdateManyWithoutGroupMemberOfNestedInput;
let GuestUncheckedUpdateManyWithoutGroupMemberOfInput = class GuestUncheckedUpdateManyWithoutGroupMemberOfInput {
};
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateManyWithoutGroupMemberOfInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateManyWithoutGroupMemberOfInput.prototype, "source", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateManyWithoutGroupMemberOfInput.prototype, "invitationName", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateManyWithoutGroupMemberOfInput.prototype, "contactList", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableFloatFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateManyWithoutGroupMemberOfInput.prototype, "whatsapp", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateManyWithoutGroupMemberOfInput.prototype, "category", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateManyWithoutGroupMemberOfInput.prototype, "class", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateManyWithoutGroupMemberOfInput.prototype, "seat", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateManyWithoutGroupMemberOfInput.prototype, "studio", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateManyWithoutGroupMemberOfInput.prototype, "showTime", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateManyWithoutGroupMemberOfInput.prototype, "rejectionReason", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateManyWithoutGroupMemberOfInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateManyWithoutGroupMemberOfInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateManyWithoutGroupMemberOfInput.prototype, "deletedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableEnumConfirmationStatusFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateManyWithoutGroupMemberOfInput.prototype, "confirmationStatus", void 0);
GuestUncheckedUpdateManyWithoutGroupMemberOfInput = __decorate([
    (0, graphql_5.InputType)()
], GuestUncheckedUpdateManyWithoutGroupMemberOfInput);
exports.GuestUncheckedUpdateManyWithoutGroupMemberOfInput = GuestUncheckedUpdateManyWithoutGroupMemberOfInput;
let GuestUncheckedUpdateManyInput = class GuestUncheckedUpdateManyInput {
};
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateManyInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateManyInput.prototype, "source", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateManyInput.prototype, "invitationName", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateManyInput.prototype, "contactList", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableFloatFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateManyInput.prototype, "whatsapp", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateManyInput.prototype, "category", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateManyInput.prototype, "class", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateManyInput.prototype, "seat", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateManyInput.prototype, "studio", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateManyInput.prototype, "showTime", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateManyInput.prototype, "rejectionReason", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateManyInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateManyInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateManyInput.prototype, "deletedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateManyInput.prototype, "groupMemberOfId", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableEnumConfirmationStatusFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateManyInput.prototype, "confirmationStatus", void 0);
GuestUncheckedUpdateManyInput = __decorate([
    (0, graphql_5.InputType)()
], GuestUncheckedUpdateManyInput);
exports.GuestUncheckedUpdateManyInput = GuestUncheckedUpdateManyInput;
let GuestUncheckedUpdateWithoutGroupMemberOfInput = class GuestUncheckedUpdateWithoutGroupMemberOfInput {
};
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutGroupMemberOfInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutGroupMemberOfInput.prototype, "source", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutGroupMemberOfInput.prototype, "invitationName", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutGroupMemberOfInput.prototype, "contactList", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableFloatFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutGroupMemberOfInput.prototype, "whatsapp", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutGroupMemberOfInput.prototype, "category", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutGroupMemberOfInput.prototype, "class", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutGroupMemberOfInput.prototype, "seat", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutGroupMemberOfInput.prototype, "studio", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutGroupMemberOfInput.prototype, "showTime", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutGroupMemberOfInput.prototype, "rejectionReason", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutGroupMemberOfInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutGroupMemberOfInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutGroupMemberOfInput.prototype, "deletedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableEnumConfirmationStatusFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutGroupMemberOfInput.prototype, "confirmationStatus", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestUncheckedUpdateManyWithoutGroupMemberOfNestedInput, { nullable: true })
], GuestUncheckedUpdateWithoutGroupMemberOfInput.prototype, "groupMembers", void 0);
__decorate([
    (0, graphql_1.Field)(() => QrCodeUncheckedUpdateOneWithoutGuestNestedInput, { nullable: true })
], GuestUncheckedUpdateWithoutGroupMemberOfInput.prototype, "qrcode", void 0);
__decorate([
    (0, graphql_1.Field)(() => InvitationImageUncheckedUpdateOneWithoutGuestNestedInput, { nullable: true })
], GuestUncheckedUpdateWithoutGroupMemberOfInput.prototype, "invitationImage", void 0);
__decorate([
    (0, graphql_1.Field)(() => WhatsappStatusUncheckedUpdateManyWithoutGuestNestedInput, { nullable: true })
], GuestUncheckedUpdateWithoutGroupMemberOfInput.prototype, "whatsappStatuses", void 0);
GuestUncheckedUpdateWithoutGroupMemberOfInput = __decorate([
    (0, graphql_5.InputType)()
], GuestUncheckedUpdateWithoutGroupMemberOfInput);
exports.GuestUncheckedUpdateWithoutGroupMemberOfInput = GuestUncheckedUpdateWithoutGroupMemberOfInput;
let GuestUncheckedUpdateWithoutGroupMembersInput = class GuestUncheckedUpdateWithoutGroupMembersInput {
};
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutGroupMembersInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutGroupMembersInput.prototype, "source", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutGroupMembersInput.prototype, "invitationName", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutGroupMembersInput.prototype, "contactList", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableFloatFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutGroupMembersInput.prototype, "whatsapp", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutGroupMembersInput.prototype, "category", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutGroupMembersInput.prototype, "class", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutGroupMembersInput.prototype, "seat", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutGroupMembersInput.prototype, "studio", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutGroupMembersInput.prototype, "showTime", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutGroupMembersInput.prototype, "rejectionReason", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutGroupMembersInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutGroupMembersInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutGroupMembersInput.prototype, "deletedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutGroupMembersInput.prototype, "groupMemberOfId", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableEnumConfirmationStatusFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutGroupMembersInput.prototype, "confirmationStatus", void 0);
__decorate([
    (0, graphql_1.Field)(() => QrCodeUncheckedUpdateOneWithoutGuestNestedInput, { nullable: true })
], GuestUncheckedUpdateWithoutGroupMembersInput.prototype, "qrcode", void 0);
__decorate([
    (0, graphql_1.Field)(() => InvitationImageUncheckedUpdateOneWithoutGuestNestedInput, { nullable: true })
], GuestUncheckedUpdateWithoutGroupMembersInput.prototype, "invitationImage", void 0);
__decorate([
    (0, graphql_1.Field)(() => WhatsappStatusUncheckedUpdateManyWithoutGuestNestedInput, { nullable: true })
], GuestUncheckedUpdateWithoutGroupMembersInput.prototype, "whatsappStatuses", void 0);
GuestUncheckedUpdateWithoutGroupMembersInput = __decorate([
    (0, graphql_5.InputType)()
], GuestUncheckedUpdateWithoutGroupMembersInput);
exports.GuestUncheckedUpdateWithoutGroupMembersInput = GuestUncheckedUpdateWithoutGroupMembersInput;
let GuestUncheckedUpdateWithoutInvitationImageInput = class GuestUncheckedUpdateWithoutInvitationImageInput {
};
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutInvitationImageInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutInvitationImageInput.prototype, "source", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutInvitationImageInput.prototype, "invitationName", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutInvitationImageInput.prototype, "contactList", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableFloatFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutInvitationImageInput.prototype, "whatsapp", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutInvitationImageInput.prototype, "category", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutInvitationImageInput.prototype, "class", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutInvitationImageInput.prototype, "seat", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutInvitationImageInput.prototype, "studio", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutInvitationImageInput.prototype, "showTime", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutInvitationImageInput.prototype, "rejectionReason", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutInvitationImageInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutInvitationImageInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutInvitationImageInput.prototype, "deletedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutInvitationImageInput.prototype, "groupMemberOfId", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableEnumConfirmationStatusFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutInvitationImageInput.prototype, "confirmationStatus", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestUncheckedUpdateManyWithoutGroupMemberOfNestedInput, { nullable: true })
], GuestUncheckedUpdateWithoutInvitationImageInput.prototype, "groupMembers", void 0);
__decorate([
    (0, graphql_1.Field)(() => QrCodeUncheckedUpdateOneWithoutGuestNestedInput, { nullable: true })
], GuestUncheckedUpdateWithoutInvitationImageInput.prototype, "qrcode", void 0);
__decorate([
    (0, graphql_1.Field)(() => WhatsappStatusUncheckedUpdateManyWithoutGuestNestedInput, { nullable: true })
], GuestUncheckedUpdateWithoutInvitationImageInput.prototype, "whatsappStatuses", void 0);
GuestUncheckedUpdateWithoutInvitationImageInput = __decorate([
    (0, graphql_5.InputType)()
], GuestUncheckedUpdateWithoutInvitationImageInput);
exports.GuestUncheckedUpdateWithoutInvitationImageInput = GuestUncheckedUpdateWithoutInvitationImageInput;
let GuestUncheckedUpdateWithoutQrcodeInput = class GuestUncheckedUpdateWithoutQrcodeInput {
};
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutQrcodeInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutQrcodeInput.prototype, "source", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutQrcodeInput.prototype, "invitationName", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutQrcodeInput.prototype, "contactList", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableFloatFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutQrcodeInput.prototype, "whatsapp", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutQrcodeInput.prototype, "category", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutQrcodeInput.prototype, "class", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutQrcodeInput.prototype, "seat", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutQrcodeInput.prototype, "studio", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutQrcodeInput.prototype, "showTime", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutQrcodeInput.prototype, "rejectionReason", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutQrcodeInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutQrcodeInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutQrcodeInput.prototype, "deletedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutQrcodeInput.prototype, "groupMemberOfId", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableEnumConfirmationStatusFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutQrcodeInput.prototype, "confirmationStatus", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestUncheckedUpdateManyWithoutGroupMemberOfNestedInput, { nullable: true })
], GuestUncheckedUpdateWithoutQrcodeInput.prototype, "groupMembers", void 0);
__decorate([
    (0, graphql_1.Field)(() => InvitationImageUncheckedUpdateOneWithoutGuestNestedInput, { nullable: true })
], GuestUncheckedUpdateWithoutQrcodeInput.prototype, "invitationImage", void 0);
__decorate([
    (0, graphql_1.Field)(() => WhatsappStatusUncheckedUpdateManyWithoutGuestNestedInput, { nullable: true })
], GuestUncheckedUpdateWithoutQrcodeInput.prototype, "whatsappStatuses", void 0);
GuestUncheckedUpdateWithoutQrcodeInput = __decorate([
    (0, graphql_5.InputType)()
], GuestUncheckedUpdateWithoutQrcodeInput);
exports.GuestUncheckedUpdateWithoutQrcodeInput = GuestUncheckedUpdateWithoutQrcodeInput;
let GuestUncheckedUpdateWithoutWhatsappStatusesInput = class GuestUncheckedUpdateWithoutWhatsappStatusesInput {
};
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutWhatsappStatusesInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutWhatsappStatusesInput.prototype, "source", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutWhatsappStatusesInput.prototype, "invitationName", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutWhatsappStatusesInput.prototype, "contactList", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableFloatFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutWhatsappStatusesInput.prototype, "whatsapp", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutWhatsappStatusesInput.prototype, "category", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutWhatsappStatusesInput.prototype, "class", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutWhatsappStatusesInput.prototype, "seat", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutWhatsappStatusesInput.prototype, "studio", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutWhatsappStatusesInput.prototype, "showTime", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutWhatsappStatusesInput.prototype, "rejectionReason", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutWhatsappStatusesInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutWhatsappStatusesInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutWhatsappStatusesInput.prototype, "deletedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutWhatsappStatusesInput.prototype, "groupMemberOfId", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableEnumConfirmationStatusFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutWhatsappStatusesInput.prototype, "confirmationStatus", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestUncheckedUpdateManyWithoutGroupMemberOfNestedInput, { nullable: true })
], GuestUncheckedUpdateWithoutWhatsappStatusesInput.prototype, "groupMembers", void 0);
__decorate([
    (0, graphql_1.Field)(() => QrCodeUncheckedUpdateOneWithoutGuestNestedInput, { nullable: true })
], GuestUncheckedUpdateWithoutWhatsappStatusesInput.prototype, "qrcode", void 0);
__decorate([
    (0, graphql_1.Field)(() => InvitationImageUncheckedUpdateOneWithoutGuestNestedInput, { nullable: true })
], GuestUncheckedUpdateWithoutWhatsappStatusesInput.prototype, "invitationImage", void 0);
GuestUncheckedUpdateWithoutWhatsappStatusesInput = __decorate([
    (0, graphql_5.InputType)()
], GuestUncheckedUpdateWithoutWhatsappStatusesInput);
exports.GuestUncheckedUpdateWithoutWhatsappStatusesInput = GuestUncheckedUpdateWithoutWhatsappStatusesInput;
let GuestUncheckedUpdateInput = class GuestUncheckedUpdateInput {
};
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateInput.prototype, "source", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateInput.prototype, "invitationName", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateInput.prototype, "contactList", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableFloatFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateInput.prototype, "whatsapp", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateInput.prototype, "category", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateInput.prototype, "class", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateInput.prototype, "seat", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateInput.prototype, "studio", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateInput.prototype, "showTime", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateInput.prototype, "rejectionReason", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateInput.prototype, "deletedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateInput.prototype, "groupMemberOfId", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableEnumConfirmationStatusFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateInput.prototype, "confirmationStatus", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestUncheckedUpdateManyWithoutGroupMemberOfNestedInput, { nullable: true })
], GuestUncheckedUpdateInput.prototype, "groupMembers", void 0);
__decorate([
    (0, graphql_1.Field)(() => QrCodeUncheckedUpdateOneWithoutGuestNestedInput, { nullable: true })
], GuestUncheckedUpdateInput.prototype, "qrcode", void 0);
__decorate([
    (0, graphql_1.Field)(() => InvitationImageUncheckedUpdateOneWithoutGuestNestedInput, { nullable: true })
], GuestUncheckedUpdateInput.prototype, "invitationImage", void 0);
__decorate([
    (0, graphql_1.Field)(() => WhatsappStatusUncheckedUpdateManyWithoutGuestNestedInput, { nullable: true })
], GuestUncheckedUpdateInput.prototype, "whatsappStatuses", void 0);
GuestUncheckedUpdateInput = __decorate([
    (0, graphql_5.InputType)()
], GuestUncheckedUpdateInput);
exports.GuestUncheckedUpdateInput = GuestUncheckedUpdateInput;
let GuestUpdateManyMutationInput = class GuestUpdateManyMutationInput {
};
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateManyMutationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateManyMutationInput.prototype, "source", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateManyMutationInput.prototype, "invitationName", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateManyMutationInput.prototype, "contactList", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableFloatFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateManyMutationInput.prototype, "whatsapp", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateManyMutationInput.prototype, "category", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateManyMutationInput.prototype, "class", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateManyMutationInput.prototype, "seat", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateManyMutationInput.prototype, "studio", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateManyMutationInput.prototype, "showTime", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateManyMutationInput.prototype, "rejectionReason", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateManyMutationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateManyMutationInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateManyMutationInput.prototype, "deletedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableEnumConfirmationStatusFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateManyMutationInput.prototype, "confirmationStatus", void 0);
GuestUpdateManyMutationInput = __decorate([
    (0, graphql_5.InputType)()
], GuestUpdateManyMutationInput);
exports.GuestUpdateManyMutationInput = GuestUpdateManyMutationInput;
let GuestUpdateManyWithWhereWithoutGroupMemberOfInput = class GuestUpdateManyWithWhereWithoutGroupMemberOfInput {
};
__decorate([
    (0, graphql_1.Field)(() => GuestScalarWhereInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => GuestScalarWhereInput)
], GuestUpdateManyWithWhereWithoutGroupMemberOfInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestUpdateManyMutationInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => GuestUpdateManyMutationInput)
], GuestUpdateManyWithWhereWithoutGroupMemberOfInput.prototype, "data", void 0);
GuestUpdateManyWithWhereWithoutGroupMemberOfInput = __decorate([
    (0, graphql_5.InputType)()
], GuestUpdateManyWithWhereWithoutGroupMemberOfInput);
exports.GuestUpdateManyWithWhereWithoutGroupMemberOfInput = GuestUpdateManyWithWhereWithoutGroupMemberOfInput;
let GuestUpdateManyWithoutGroupMemberOfNestedInput = class GuestUpdateManyWithoutGroupMemberOfNestedInput {
};
__decorate([
    (0, graphql_1.Field)(() => [GuestCreateWithoutGroupMemberOfInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => GuestCreateWithoutGroupMemberOfInput)
], GuestUpdateManyWithoutGroupMemberOfNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [GuestCreateOrConnectWithoutGroupMemberOfInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => GuestCreateOrConnectWithoutGroupMemberOfInput)
], GuestUpdateManyWithoutGroupMemberOfNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => [GuestUpsertWithWhereUniqueWithoutGroupMemberOfInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => GuestUpsertWithWhereUniqueWithoutGroupMemberOfInput)
], GuestUpdateManyWithoutGroupMemberOfNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestCreateManyGroupMemberOfInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => GuestCreateManyGroupMemberOfInputEnvelope)
], GuestUpdateManyWithoutGroupMemberOfNestedInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [GuestWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => GuestWhereUniqueInput)
], GuestUpdateManyWithoutGroupMemberOfNestedInput.prototype, "set", void 0);
__decorate([
    (0, graphql_1.Field)(() => [GuestWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => GuestWhereUniqueInput)
], GuestUpdateManyWithoutGroupMemberOfNestedInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [GuestWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => GuestWhereUniqueInput)
], GuestUpdateManyWithoutGroupMemberOfNestedInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => [GuestWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => GuestWhereUniqueInput)
], GuestUpdateManyWithoutGroupMemberOfNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [GuestUpdateWithWhereUniqueWithoutGroupMemberOfInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => GuestUpdateWithWhereUniqueWithoutGroupMemberOfInput)
], GuestUpdateManyWithoutGroupMemberOfNestedInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => [GuestUpdateManyWithWhereWithoutGroupMemberOfInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => GuestUpdateManyWithWhereWithoutGroupMemberOfInput)
], GuestUpdateManyWithoutGroupMemberOfNestedInput.prototype, "updateMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [GuestScalarWhereInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => GuestScalarWhereInput)
], GuestUpdateManyWithoutGroupMemberOfNestedInput.prototype, "deleteMany", void 0);
GuestUpdateManyWithoutGroupMemberOfNestedInput = __decorate([
    (0, graphql_5.InputType)()
], GuestUpdateManyWithoutGroupMemberOfNestedInput);
exports.GuestUpdateManyWithoutGroupMemberOfNestedInput = GuestUpdateManyWithoutGroupMemberOfNestedInput;
let GuestUpdateOneRequiredWithoutInvitationImageNestedInput = class GuestUpdateOneRequiredWithoutInvitationImageNestedInput {
};
__decorate([
    (0, graphql_1.Field)(() => GuestCreateWithoutInvitationImageInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => GuestCreateWithoutInvitationImageInput)
], GuestUpdateOneRequiredWithoutInvitationImageNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestCreateOrConnectWithoutInvitationImageInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => GuestCreateOrConnectWithoutInvitationImageInput)
], GuestUpdateOneRequiredWithoutInvitationImageNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestUpsertWithoutInvitationImageInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => GuestUpsertWithoutInvitationImageInput)
], GuestUpdateOneRequiredWithoutInvitationImageNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestWhereUniqueInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => GuestWhereUniqueInput)
], GuestUpdateOneRequiredWithoutInvitationImageNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestUpdateToOneWithWhereWithoutInvitationImageInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => GuestUpdateToOneWithWhereWithoutInvitationImageInput)
], GuestUpdateOneRequiredWithoutInvitationImageNestedInput.prototype, "update", void 0);
GuestUpdateOneRequiredWithoutInvitationImageNestedInput = __decorate([
    (0, graphql_5.InputType)()
], GuestUpdateOneRequiredWithoutInvitationImageNestedInput);
exports.GuestUpdateOneRequiredWithoutInvitationImageNestedInput = GuestUpdateOneRequiredWithoutInvitationImageNestedInput;
let GuestUpdateOneRequiredWithoutQrcodeNestedInput = class GuestUpdateOneRequiredWithoutQrcodeNestedInput {
};
__decorate([
    (0, graphql_1.Field)(() => GuestCreateWithoutQrcodeInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => GuestCreateWithoutQrcodeInput)
], GuestUpdateOneRequiredWithoutQrcodeNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestCreateOrConnectWithoutQrcodeInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => GuestCreateOrConnectWithoutQrcodeInput)
], GuestUpdateOneRequiredWithoutQrcodeNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestUpsertWithoutQrcodeInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => GuestUpsertWithoutQrcodeInput)
], GuestUpdateOneRequiredWithoutQrcodeNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestWhereUniqueInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => GuestWhereUniqueInput)
], GuestUpdateOneRequiredWithoutQrcodeNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestUpdateToOneWithWhereWithoutQrcodeInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => GuestUpdateToOneWithWhereWithoutQrcodeInput)
], GuestUpdateOneRequiredWithoutQrcodeNestedInput.prototype, "update", void 0);
GuestUpdateOneRequiredWithoutQrcodeNestedInput = __decorate([
    (0, graphql_5.InputType)()
], GuestUpdateOneRequiredWithoutQrcodeNestedInput);
exports.GuestUpdateOneRequiredWithoutQrcodeNestedInput = GuestUpdateOneRequiredWithoutQrcodeNestedInput;
let GuestUpdateOneRequiredWithoutWhatsappStatusesNestedInput = class GuestUpdateOneRequiredWithoutWhatsappStatusesNestedInput {
};
__decorate([
    (0, graphql_1.Field)(() => GuestCreateWithoutWhatsappStatusesInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => GuestCreateWithoutWhatsappStatusesInput)
], GuestUpdateOneRequiredWithoutWhatsappStatusesNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestCreateOrConnectWithoutWhatsappStatusesInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => GuestCreateOrConnectWithoutWhatsappStatusesInput)
], GuestUpdateOneRequiredWithoutWhatsappStatusesNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestUpsertWithoutWhatsappStatusesInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => GuestUpsertWithoutWhatsappStatusesInput)
], GuestUpdateOneRequiredWithoutWhatsappStatusesNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestWhereUniqueInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => GuestWhereUniqueInput)
], GuestUpdateOneRequiredWithoutWhatsappStatusesNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestUpdateToOneWithWhereWithoutWhatsappStatusesInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => GuestUpdateToOneWithWhereWithoutWhatsappStatusesInput)
], GuestUpdateOneRequiredWithoutWhatsappStatusesNestedInput.prototype, "update", void 0);
GuestUpdateOneRequiredWithoutWhatsappStatusesNestedInput = __decorate([
    (0, graphql_5.InputType)()
], GuestUpdateOneRequiredWithoutWhatsappStatusesNestedInput);
exports.GuestUpdateOneRequiredWithoutWhatsappStatusesNestedInput = GuestUpdateOneRequiredWithoutWhatsappStatusesNestedInput;
let GuestUpdateOneWithoutGroupMembersNestedInput = class GuestUpdateOneWithoutGroupMembersNestedInput {
};
__decorate([
    (0, graphql_1.Field)(() => GuestCreateWithoutGroupMembersInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => GuestCreateWithoutGroupMembersInput)
], GuestUpdateOneWithoutGroupMembersNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestCreateOrConnectWithoutGroupMembersInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => GuestCreateOrConnectWithoutGroupMembersInput)
], GuestUpdateOneWithoutGroupMembersNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestUpsertWithoutGroupMembersInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => GuestUpsertWithoutGroupMembersInput)
], GuestUpdateOneWithoutGroupMembersNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => GuestWhereInput)
], GuestUpdateOneWithoutGroupMembersNestedInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => GuestWhereInput)
], GuestUpdateOneWithoutGroupMembersNestedInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestWhereUniqueInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => GuestWhereUniqueInput)
], GuestUpdateOneWithoutGroupMembersNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestUpdateToOneWithWhereWithoutGroupMembersInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => GuestUpdateToOneWithWhereWithoutGroupMembersInput)
], GuestUpdateOneWithoutGroupMembersNestedInput.prototype, "update", void 0);
GuestUpdateOneWithoutGroupMembersNestedInput = __decorate([
    (0, graphql_5.InputType)()
], GuestUpdateOneWithoutGroupMembersNestedInput);
exports.GuestUpdateOneWithoutGroupMembersNestedInput = GuestUpdateOneWithoutGroupMembersNestedInput;
let GuestUpdateToOneWithWhereWithoutGroupMembersInput = class GuestUpdateToOneWithWhereWithoutGroupMembersInput {
};
__decorate([
    (0, graphql_1.Field)(() => GuestWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => GuestWhereInput)
], GuestUpdateToOneWithWhereWithoutGroupMembersInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestUpdateWithoutGroupMembersInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => GuestUpdateWithoutGroupMembersInput)
], GuestUpdateToOneWithWhereWithoutGroupMembersInput.prototype, "data", void 0);
GuestUpdateToOneWithWhereWithoutGroupMembersInput = __decorate([
    (0, graphql_5.InputType)()
], GuestUpdateToOneWithWhereWithoutGroupMembersInput);
exports.GuestUpdateToOneWithWhereWithoutGroupMembersInput = GuestUpdateToOneWithWhereWithoutGroupMembersInput;
let GuestUpdateToOneWithWhereWithoutInvitationImageInput = class GuestUpdateToOneWithWhereWithoutInvitationImageInput {
};
__decorate([
    (0, graphql_1.Field)(() => GuestWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => GuestWhereInput)
], GuestUpdateToOneWithWhereWithoutInvitationImageInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestUpdateWithoutInvitationImageInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => GuestUpdateWithoutInvitationImageInput)
], GuestUpdateToOneWithWhereWithoutInvitationImageInput.prototype, "data", void 0);
GuestUpdateToOneWithWhereWithoutInvitationImageInput = __decorate([
    (0, graphql_5.InputType)()
], GuestUpdateToOneWithWhereWithoutInvitationImageInput);
exports.GuestUpdateToOneWithWhereWithoutInvitationImageInput = GuestUpdateToOneWithWhereWithoutInvitationImageInput;
let GuestUpdateToOneWithWhereWithoutQrcodeInput = class GuestUpdateToOneWithWhereWithoutQrcodeInput {
};
__decorate([
    (0, graphql_1.Field)(() => GuestWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => GuestWhereInput)
], GuestUpdateToOneWithWhereWithoutQrcodeInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestUpdateWithoutQrcodeInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => GuestUpdateWithoutQrcodeInput)
], GuestUpdateToOneWithWhereWithoutQrcodeInput.prototype, "data", void 0);
GuestUpdateToOneWithWhereWithoutQrcodeInput = __decorate([
    (0, graphql_5.InputType)()
], GuestUpdateToOneWithWhereWithoutQrcodeInput);
exports.GuestUpdateToOneWithWhereWithoutQrcodeInput = GuestUpdateToOneWithWhereWithoutQrcodeInput;
let GuestUpdateToOneWithWhereWithoutWhatsappStatusesInput = class GuestUpdateToOneWithWhereWithoutWhatsappStatusesInput {
};
__decorate([
    (0, graphql_1.Field)(() => GuestWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => GuestWhereInput)
], GuestUpdateToOneWithWhereWithoutWhatsappStatusesInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestUpdateWithoutWhatsappStatusesInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => GuestUpdateWithoutWhatsappStatusesInput)
], GuestUpdateToOneWithWhereWithoutWhatsappStatusesInput.prototype, "data", void 0);
GuestUpdateToOneWithWhereWithoutWhatsappStatusesInput = __decorate([
    (0, graphql_5.InputType)()
], GuestUpdateToOneWithWhereWithoutWhatsappStatusesInput);
exports.GuestUpdateToOneWithWhereWithoutWhatsappStatusesInput = GuestUpdateToOneWithWhereWithoutWhatsappStatusesInput;
let GuestUpdateWithWhereUniqueWithoutGroupMemberOfInput = class GuestUpdateWithWhereUniqueWithoutGroupMemberOfInput {
};
__decorate([
    (0, graphql_1.Field)(() => GuestWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => GuestWhereUniqueInput)
], GuestUpdateWithWhereUniqueWithoutGroupMemberOfInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestUpdateWithoutGroupMemberOfInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => GuestUpdateWithoutGroupMemberOfInput)
], GuestUpdateWithWhereUniqueWithoutGroupMemberOfInput.prototype, "data", void 0);
GuestUpdateWithWhereUniqueWithoutGroupMemberOfInput = __decorate([
    (0, graphql_5.InputType)()
], GuestUpdateWithWhereUniqueWithoutGroupMemberOfInput);
exports.GuestUpdateWithWhereUniqueWithoutGroupMemberOfInput = GuestUpdateWithWhereUniqueWithoutGroupMemberOfInput;
let GuestUpdateWithoutGroupMemberOfInput = class GuestUpdateWithoutGroupMemberOfInput {
};
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateWithoutGroupMemberOfInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateWithoutGroupMemberOfInput.prototype, "source", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateWithoutGroupMemberOfInput.prototype, "invitationName", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateWithoutGroupMemberOfInput.prototype, "contactList", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableFloatFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateWithoutGroupMemberOfInput.prototype, "whatsapp", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateWithoutGroupMemberOfInput.prototype, "category", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateWithoutGroupMemberOfInput.prototype, "class", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateWithoutGroupMemberOfInput.prototype, "seat", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateWithoutGroupMemberOfInput.prototype, "studio", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateWithoutGroupMemberOfInput.prototype, "showTime", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateWithoutGroupMemberOfInput.prototype, "rejectionReason", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateWithoutGroupMemberOfInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateWithoutGroupMemberOfInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateWithoutGroupMemberOfInput.prototype, "deletedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableEnumConfirmationStatusFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateWithoutGroupMemberOfInput.prototype, "confirmationStatus", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestUpdateManyWithoutGroupMemberOfNestedInput, { nullable: true })
], GuestUpdateWithoutGroupMemberOfInput.prototype, "groupMembers", void 0);
__decorate([
    (0, graphql_1.Field)(() => QrCodeUpdateOneWithoutGuestNestedInput, { nullable: true })
], GuestUpdateWithoutGroupMemberOfInput.prototype, "qrcode", void 0);
__decorate([
    (0, graphql_1.Field)(() => InvitationImageUpdateOneWithoutGuestNestedInput, { nullable: true })
], GuestUpdateWithoutGroupMemberOfInput.prototype, "invitationImage", void 0);
__decorate([
    (0, graphql_1.Field)(() => WhatsappStatusUpdateManyWithoutGuestNestedInput, { nullable: true })
], GuestUpdateWithoutGroupMemberOfInput.prototype, "whatsappStatuses", void 0);
GuestUpdateWithoutGroupMemberOfInput = __decorate([
    (0, graphql_5.InputType)()
], GuestUpdateWithoutGroupMemberOfInput);
exports.GuestUpdateWithoutGroupMemberOfInput = GuestUpdateWithoutGroupMemberOfInput;
let GuestUpdateWithoutGroupMembersInput = class GuestUpdateWithoutGroupMembersInput {
};
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateWithoutGroupMembersInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateWithoutGroupMembersInput.prototype, "source", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateWithoutGroupMembersInput.prototype, "invitationName", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateWithoutGroupMembersInput.prototype, "contactList", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableFloatFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateWithoutGroupMembersInput.prototype, "whatsapp", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateWithoutGroupMembersInput.prototype, "category", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateWithoutGroupMembersInput.prototype, "class", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateWithoutGroupMembersInput.prototype, "seat", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateWithoutGroupMembersInput.prototype, "studio", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateWithoutGroupMembersInput.prototype, "showTime", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateWithoutGroupMembersInput.prototype, "rejectionReason", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateWithoutGroupMembersInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateWithoutGroupMembersInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateWithoutGroupMembersInput.prototype, "deletedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableEnumConfirmationStatusFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateWithoutGroupMembersInput.prototype, "confirmationStatus", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestUpdateOneWithoutGroupMembersNestedInput, { nullable: true })
], GuestUpdateWithoutGroupMembersInput.prototype, "groupMemberOf", void 0);
__decorate([
    (0, graphql_1.Field)(() => QrCodeUpdateOneWithoutGuestNestedInput, { nullable: true })
], GuestUpdateWithoutGroupMembersInput.prototype, "qrcode", void 0);
__decorate([
    (0, graphql_1.Field)(() => InvitationImageUpdateOneWithoutGuestNestedInput, { nullable: true })
], GuestUpdateWithoutGroupMembersInput.prototype, "invitationImage", void 0);
__decorate([
    (0, graphql_1.Field)(() => WhatsappStatusUpdateManyWithoutGuestNestedInput, { nullable: true })
], GuestUpdateWithoutGroupMembersInput.prototype, "whatsappStatuses", void 0);
GuestUpdateWithoutGroupMembersInput = __decorate([
    (0, graphql_5.InputType)()
], GuestUpdateWithoutGroupMembersInput);
exports.GuestUpdateWithoutGroupMembersInput = GuestUpdateWithoutGroupMembersInput;
let GuestUpdateWithoutInvitationImageInput = class GuestUpdateWithoutInvitationImageInput {
};
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateWithoutInvitationImageInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateWithoutInvitationImageInput.prototype, "source", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateWithoutInvitationImageInput.prototype, "invitationName", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateWithoutInvitationImageInput.prototype, "contactList", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableFloatFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateWithoutInvitationImageInput.prototype, "whatsapp", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateWithoutInvitationImageInput.prototype, "category", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateWithoutInvitationImageInput.prototype, "class", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateWithoutInvitationImageInput.prototype, "seat", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateWithoutInvitationImageInput.prototype, "studio", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateWithoutInvitationImageInput.prototype, "showTime", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateWithoutInvitationImageInput.prototype, "rejectionReason", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateWithoutInvitationImageInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateWithoutInvitationImageInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateWithoutInvitationImageInput.prototype, "deletedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableEnumConfirmationStatusFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateWithoutInvitationImageInput.prototype, "confirmationStatus", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestUpdateOneWithoutGroupMembersNestedInput, { nullable: true })
], GuestUpdateWithoutInvitationImageInput.prototype, "groupMemberOf", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestUpdateManyWithoutGroupMemberOfNestedInput, { nullable: true })
], GuestUpdateWithoutInvitationImageInput.prototype, "groupMembers", void 0);
__decorate([
    (0, graphql_1.Field)(() => QrCodeUpdateOneWithoutGuestNestedInput, { nullable: true })
], GuestUpdateWithoutInvitationImageInput.prototype, "qrcode", void 0);
__decorate([
    (0, graphql_1.Field)(() => WhatsappStatusUpdateManyWithoutGuestNestedInput, { nullable: true })
], GuestUpdateWithoutInvitationImageInput.prototype, "whatsappStatuses", void 0);
GuestUpdateWithoutInvitationImageInput = __decorate([
    (0, graphql_5.InputType)()
], GuestUpdateWithoutInvitationImageInput);
exports.GuestUpdateWithoutInvitationImageInput = GuestUpdateWithoutInvitationImageInput;
let GuestUpdateWithoutQrcodeInput = class GuestUpdateWithoutQrcodeInput {
};
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateWithoutQrcodeInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateWithoutQrcodeInput.prototype, "source", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateWithoutQrcodeInput.prototype, "invitationName", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateWithoutQrcodeInput.prototype, "contactList", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableFloatFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateWithoutQrcodeInput.prototype, "whatsapp", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateWithoutQrcodeInput.prototype, "category", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateWithoutQrcodeInput.prototype, "class", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateWithoutQrcodeInput.prototype, "seat", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateWithoutQrcodeInput.prototype, "studio", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateWithoutQrcodeInput.prototype, "showTime", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateWithoutQrcodeInput.prototype, "rejectionReason", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateWithoutQrcodeInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateWithoutQrcodeInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateWithoutQrcodeInput.prototype, "deletedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableEnumConfirmationStatusFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateWithoutQrcodeInput.prototype, "confirmationStatus", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestUpdateOneWithoutGroupMembersNestedInput, { nullable: true })
], GuestUpdateWithoutQrcodeInput.prototype, "groupMemberOf", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestUpdateManyWithoutGroupMemberOfNestedInput, { nullable: true })
], GuestUpdateWithoutQrcodeInput.prototype, "groupMembers", void 0);
__decorate([
    (0, graphql_1.Field)(() => InvitationImageUpdateOneWithoutGuestNestedInput, { nullable: true })
], GuestUpdateWithoutQrcodeInput.prototype, "invitationImage", void 0);
__decorate([
    (0, graphql_1.Field)(() => WhatsappStatusUpdateManyWithoutGuestNestedInput, { nullable: true })
], GuestUpdateWithoutQrcodeInput.prototype, "whatsappStatuses", void 0);
GuestUpdateWithoutQrcodeInput = __decorate([
    (0, graphql_5.InputType)()
], GuestUpdateWithoutQrcodeInput);
exports.GuestUpdateWithoutQrcodeInput = GuestUpdateWithoutQrcodeInput;
let GuestUpdateWithoutWhatsappStatusesInput = class GuestUpdateWithoutWhatsappStatusesInput {
};
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateWithoutWhatsappStatusesInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateWithoutWhatsappStatusesInput.prototype, "source", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateWithoutWhatsappStatusesInput.prototype, "invitationName", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateWithoutWhatsappStatusesInput.prototype, "contactList", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableFloatFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateWithoutWhatsappStatusesInput.prototype, "whatsapp", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateWithoutWhatsappStatusesInput.prototype, "category", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateWithoutWhatsappStatusesInput.prototype, "class", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateWithoutWhatsappStatusesInput.prototype, "seat", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateWithoutWhatsappStatusesInput.prototype, "studio", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateWithoutWhatsappStatusesInput.prototype, "showTime", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateWithoutWhatsappStatusesInput.prototype, "rejectionReason", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateWithoutWhatsappStatusesInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateWithoutWhatsappStatusesInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateWithoutWhatsappStatusesInput.prototype, "deletedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableEnumConfirmationStatusFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateWithoutWhatsappStatusesInput.prototype, "confirmationStatus", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestUpdateOneWithoutGroupMembersNestedInput, { nullable: true })
], GuestUpdateWithoutWhatsappStatusesInput.prototype, "groupMemberOf", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestUpdateManyWithoutGroupMemberOfNestedInput, { nullable: true })
], GuestUpdateWithoutWhatsappStatusesInput.prototype, "groupMembers", void 0);
__decorate([
    (0, graphql_1.Field)(() => QrCodeUpdateOneWithoutGuestNestedInput, { nullable: true })
], GuestUpdateWithoutWhatsappStatusesInput.prototype, "qrcode", void 0);
__decorate([
    (0, graphql_1.Field)(() => InvitationImageUpdateOneWithoutGuestNestedInput, { nullable: true })
], GuestUpdateWithoutWhatsappStatusesInput.prototype, "invitationImage", void 0);
GuestUpdateWithoutWhatsappStatusesInput = __decorate([
    (0, graphql_5.InputType)()
], GuestUpdateWithoutWhatsappStatusesInput);
exports.GuestUpdateWithoutWhatsappStatusesInput = GuestUpdateWithoutWhatsappStatusesInput;
let GuestUpdateInput = class GuestUpdateInput {
};
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateInput.prototype, "source", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateInput.prototype, "invitationName", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateInput.prototype, "contactList", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableFloatFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateInput.prototype, "whatsapp", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateInput.prototype, "category", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateInput.prototype, "class", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateInput.prototype, "seat", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateInput.prototype, "studio", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateInput.prototype, "showTime", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateInput.prototype, "rejectionReason", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateInput.prototype, "deletedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableEnumConfirmationStatusFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateInput.prototype, "confirmationStatus", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestUpdateOneWithoutGroupMembersNestedInput, { nullable: true })
], GuestUpdateInput.prototype, "groupMemberOf", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestUpdateManyWithoutGroupMemberOfNestedInput, { nullable: true })
], GuestUpdateInput.prototype, "groupMembers", void 0);
__decorate([
    (0, graphql_1.Field)(() => QrCodeUpdateOneWithoutGuestNestedInput, { nullable: true })
], GuestUpdateInput.prototype, "qrcode", void 0);
__decorate([
    (0, graphql_1.Field)(() => InvitationImageUpdateOneWithoutGuestNestedInput, { nullable: true })
], GuestUpdateInput.prototype, "invitationImage", void 0);
__decorate([
    (0, graphql_1.Field)(() => WhatsappStatusUpdateManyWithoutGuestNestedInput, { nullable: true })
], GuestUpdateInput.prototype, "whatsappStatuses", void 0);
GuestUpdateInput = __decorate([
    (0, graphql_5.InputType)()
], GuestUpdateInput);
exports.GuestUpdateInput = GuestUpdateInput;
let GuestUpsertWithWhereUniqueWithoutGroupMemberOfInput = class GuestUpsertWithWhereUniqueWithoutGroupMemberOfInput {
};
__decorate([
    (0, graphql_1.Field)(() => GuestWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => GuestWhereUniqueInput)
], GuestUpsertWithWhereUniqueWithoutGroupMemberOfInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestUpdateWithoutGroupMemberOfInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => GuestUpdateWithoutGroupMemberOfInput)
], GuestUpsertWithWhereUniqueWithoutGroupMemberOfInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestCreateWithoutGroupMemberOfInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => GuestCreateWithoutGroupMemberOfInput)
], GuestUpsertWithWhereUniqueWithoutGroupMemberOfInput.prototype, "create", void 0);
GuestUpsertWithWhereUniqueWithoutGroupMemberOfInput = __decorate([
    (0, graphql_5.InputType)()
], GuestUpsertWithWhereUniqueWithoutGroupMemberOfInput);
exports.GuestUpsertWithWhereUniqueWithoutGroupMemberOfInput = GuestUpsertWithWhereUniqueWithoutGroupMemberOfInput;
let GuestUpsertWithoutGroupMembersInput = class GuestUpsertWithoutGroupMembersInput {
};
__decorate([
    (0, graphql_1.Field)(() => GuestUpdateWithoutGroupMembersInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => GuestUpdateWithoutGroupMembersInput)
], GuestUpsertWithoutGroupMembersInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestCreateWithoutGroupMembersInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => GuestCreateWithoutGroupMembersInput)
], GuestUpsertWithoutGroupMembersInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => GuestWhereInput)
], GuestUpsertWithoutGroupMembersInput.prototype, "where", void 0);
GuestUpsertWithoutGroupMembersInput = __decorate([
    (0, graphql_5.InputType)()
], GuestUpsertWithoutGroupMembersInput);
exports.GuestUpsertWithoutGroupMembersInput = GuestUpsertWithoutGroupMembersInput;
let GuestUpsertWithoutInvitationImageInput = class GuestUpsertWithoutInvitationImageInput {
};
__decorate([
    (0, graphql_1.Field)(() => GuestUpdateWithoutInvitationImageInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => GuestUpdateWithoutInvitationImageInput)
], GuestUpsertWithoutInvitationImageInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestCreateWithoutInvitationImageInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => GuestCreateWithoutInvitationImageInput)
], GuestUpsertWithoutInvitationImageInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => GuestWhereInput)
], GuestUpsertWithoutInvitationImageInput.prototype, "where", void 0);
GuestUpsertWithoutInvitationImageInput = __decorate([
    (0, graphql_5.InputType)()
], GuestUpsertWithoutInvitationImageInput);
exports.GuestUpsertWithoutInvitationImageInput = GuestUpsertWithoutInvitationImageInput;
let GuestUpsertWithoutQrcodeInput = class GuestUpsertWithoutQrcodeInput {
};
__decorate([
    (0, graphql_1.Field)(() => GuestUpdateWithoutQrcodeInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => GuestUpdateWithoutQrcodeInput)
], GuestUpsertWithoutQrcodeInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestCreateWithoutQrcodeInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => GuestCreateWithoutQrcodeInput)
], GuestUpsertWithoutQrcodeInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => GuestWhereInput)
], GuestUpsertWithoutQrcodeInput.prototype, "where", void 0);
GuestUpsertWithoutQrcodeInput = __decorate([
    (0, graphql_5.InputType)()
], GuestUpsertWithoutQrcodeInput);
exports.GuestUpsertWithoutQrcodeInput = GuestUpsertWithoutQrcodeInput;
let GuestUpsertWithoutWhatsappStatusesInput = class GuestUpsertWithoutWhatsappStatusesInput {
};
__decorate([
    (0, graphql_1.Field)(() => GuestUpdateWithoutWhatsappStatusesInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => GuestUpdateWithoutWhatsappStatusesInput)
], GuestUpsertWithoutWhatsappStatusesInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestCreateWithoutWhatsappStatusesInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => GuestCreateWithoutWhatsappStatusesInput)
], GuestUpsertWithoutWhatsappStatusesInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => GuestWhereInput)
], GuestUpsertWithoutWhatsappStatusesInput.prototype, "where", void 0);
GuestUpsertWithoutWhatsappStatusesInput = __decorate([
    (0, graphql_5.InputType)()
], GuestUpsertWithoutWhatsappStatusesInput);
exports.GuestUpsertWithoutWhatsappStatusesInput = GuestUpsertWithoutWhatsappStatusesInput;
let GuestWhereUniqueInput = class GuestWhereUniqueInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestWhereUniqueInput.prototype, "id", void 0);
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
], GuestWhereUniqueInput.prototype, "source", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFilter, { nullable: true })
], GuestWhereUniqueInput.prototype, "invitationName", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringNullableFilter, { nullable: true })
], GuestWhereUniqueInput.prototype, "contactList", void 0);
__decorate([
    (0, graphql_1.Field)(() => FloatNullableFilter, { nullable: true })
], GuestWhereUniqueInput.prototype, "whatsapp", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringNullableFilter, { nullable: true })
], GuestWhereUniqueInput.prototype, "category", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringNullableFilter, { nullable: true })
], GuestWhereUniqueInput.prototype, "class", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringNullableFilter, { nullable: true })
], GuestWhereUniqueInput.prototype, "seat", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringNullableFilter, { nullable: true })
], GuestWhereUniqueInput.prototype, "studio", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringNullableFilter, { nullable: true })
], GuestWhereUniqueInput.prototype, "showTime", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringNullableFilter, { nullable: true })
], GuestWhereUniqueInput.prototype, "rejectionReason", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFilter, { nullable: true })
], GuestWhereUniqueInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeNullableFilter, { nullable: true })
], GuestWhereUniqueInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeNullableFilter, { nullable: true })
], GuestWhereUniqueInput.prototype, "deletedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringNullableFilter, { nullable: true })
], GuestWhereUniqueInput.prototype, "groupMemberOfId", void 0);
__decorate([
    (0, graphql_1.Field)(() => EnumConfirmationStatusNullableFilter, { nullable: true })
], GuestWhereUniqueInput.prototype, "confirmationStatus", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestNullableRelationFilter, { nullable: true })
], GuestWhereUniqueInput.prototype, "groupMemberOf", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestListRelationFilter, { nullable: true })
], GuestWhereUniqueInput.prototype, "groupMembers", void 0);
__decorate([
    (0, graphql_1.Field)(() => QrCodeNullableRelationFilter, { nullable: true })
], GuestWhereUniqueInput.prototype, "qrcode", void 0);
__decorate([
    (0, graphql_1.Field)(() => InvitationImageNullableRelationFilter, { nullable: true })
], GuestWhereUniqueInput.prototype, "invitationImage", void 0);
__decorate([
    (0, graphql_1.Field)(() => WhatsappStatusListRelationFilter, { nullable: true })
], GuestWhereUniqueInput.prototype, "whatsappStatuses", void 0);
GuestWhereUniqueInput = __decorate([
    (0, graphql_5.InputType)()
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
], GuestWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringNullableFilter, { nullable: true })
], GuestWhereInput.prototype, "source", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFilter, { nullable: true })
], GuestWhereInput.prototype, "invitationName", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringNullableFilter, { nullable: true })
], GuestWhereInput.prototype, "contactList", void 0);
__decorate([
    (0, graphql_1.Field)(() => FloatNullableFilter, { nullable: true })
], GuestWhereInput.prototype, "whatsapp", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringNullableFilter, { nullable: true })
], GuestWhereInput.prototype, "category", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringNullableFilter, { nullable: true })
], GuestWhereInput.prototype, "class", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringNullableFilter, { nullable: true })
], GuestWhereInput.prototype, "seat", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringNullableFilter, { nullable: true })
], GuestWhereInput.prototype, "studio", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringNullableFilter, { nullable: true })
], GuestWhereInput.prototype, "showTime", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringNullableFilter, { nullable: true })
], GuestWhereInput.prototype, "rejectionReason", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFilter, { nullable: true })
], GuestWhereInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeNullableFilter, { nullable: true })
], GuestWhereInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeNullableFilter, { nullable: true })
], GuestWhereInput.prototype, "deletedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringNullableFilter, { nullable: true })
], GuestWhereInput.prototype, "groupMemberOfId", void 0);
__decorate([
    (0, graphql_1.Field)(() => EnumConfirmationStatusNullableFilter, { nullable: true })
], GuestWhereInput.prototype, "confirmationStatus", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestNullableRelationFilter, { nullable: true })
], GuestWhereInput.prototype, "groupMemberOf", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestListRelationFilter, { nullable: true })
], GuestWhereInput.prototype, "groupMembers", void 0);
__decorate([
    (0, graphql_1.Field)(() => QrCodeNullableRelationFilter, { nullable: true })
], GuestWhereInput.prototype, "qrcode", void 0);
__decorate([
    (0, graphql_1.Field)(() => InvitationImageNullableRelationFilter, { nullable: true })
], GuestWhereInput.prototype, "invitationImage", void 0);
__decorate([
    (0, graphql_1.Field)(() => WhatsappStatusListRelationFilter, { nullable: true })
], GuestWhereInput.prototype, "whatsappStatuses", void 0);
GuestWhereInput = GuestWhereInput_1 = __decorate([
    (0, graphql_5.InputType)()
], GuestWhereInput);
exports.GuestWhereInput = GuestWhereInput;
let Guest = Guest_1 = class Guest {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], Guest.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], Guest.prototype, "source", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], Guest.prototype, "invitationName", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], Guest.prototype, "contactList", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_6.Float, { nullable: true })
], Guest.prototype, "whatsapp", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], Guest.prototype, "category", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], Guest.prototype, "class", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], Guest.prototype, "seat", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], Guest.prototype, "studio", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], Guest.prototype, "showTime", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], Guest.prototype, "rejectionReason", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], Guest.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], Guest.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], Guest.prototype, "deletedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], Guest.prototype, "groupMemberOfId", void 0);
__decorate([
    (0, graphql_1.Field)(() => ConfirmationStatus, { nullable: true, defaultValue: 'UNCONFIRMED' })
], Guest.prototype, "confirmationStatus", void 0);
__decorate([
    (0, graphql_1.Field)(() => Guest_1, { nullable: true })
], Guest.prototype, "groupMemberOf", void 0);
__decorate([
    (0, graphql_1.Field)(() => [Guest_1], { nullable: true })
], Guest.prototype, "groupMembers", void 0);
__decorate([
    (0, graphql_1.Field)(() => QrCode, { nullable: true })
], Guest.prototype, "qrcode", void 0);
__decorate([
    (0, graphql_1.Field)(() => InvitationImage, { nullable: true })
], Guest.prototype, "invitationImage", void 0);
__decorate([
    (0, graphql_1.Field)(() => [WhatsappStatus], { nullable: true })
], Guest.prototype, "whatsappStatuses", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestCount, { nullable: false })
], Guest.prototype, "_count", void 0);
Guest = Guest_1 = __decorate([
    (0, graphql_2.ObjectType)()
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
    (0, graphql_3.ArgsType)()
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
    (0, graphql_3.ArgsType)()
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
    (0, graphql_3.ArgsType)()
], UpsertOneGuestArgs);
exports.UpsertOneGuestArgs = UpsertOneGuestArgs;
let AggregateInvitationImage = class AggregateInvitationImage {
};
__decorate([
    (0, graphql_1.Field)(() => InvitationImageCountAggregate, { nullable: true })
], AggregateInvitationImage.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => InvitationImageMinAggregate, { nullable: true })
], AggregateInvitationImage.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => InvitationImageMaxAggregate, { nullable: true })
], AggregateInvitationImage.prototype, "_max", void 0);
AggregateInvitationImage = __decorate([
    (0, graphql_2.ObjectType)()
], AggregateInvitationImage);
exports.AggregateInvitationImage = AggregateInvitationImage;
let CreateManyInvitationImageArgs = class CreateManyInvitationImageArgs {
};
__decorate([
    (0, graphql_1.Field)(() => [InvitationImageCreateManyInput], { nullable: false }),
    (0, class_transformer_1.Type)(() => InvitationImageCreateManyInput)
], CreateManyInvitationImageArgs.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], CreateManyInvitationImageArgs.prototype, "skipDuplicates", void 0);
CreateManyInvitationImageArgs = __decorate([
    (0, graphql_3.ArgsType)()
], CreateManyInvitationImageArgs);
exports.CreateManyInvitationImageArgs = CreateManyInvitationImageArgs;
let CreateOneInvitationImageArgs = class CreateOneInvitationImageArgs {
};
__decorate([
    (0, graphql_1.Field)(() => InvitationImageCreateInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => InvitationImageCreateInput)
], CreateOneInvitationImageArgs.prototype, "data", void 0);
CreateOneInvitationImageArgs = __decorate([
    (0, graphql_3.ArgsType)()
], CreateOneInvitationImageArgs);
exports.CreateOneInvitationImageArgs = CreateOneInvitationImageArgs;
let DeleteManyInvitationImageArgs = class DeleteManyInvitationImageArgs {
};
__decorate([
    (0, graphql_1.Field)(() => InvitationImageWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => InvitationImageWhereInput)
], DeleteManyInvitationImageArgs.prototype, "where", void 0);
DeleteManyInvitationImageArgs = __decorate([
    (0, graphql_3.ArgsType)()
], DeleteManyInvitationImageArgs);
exports.DeleteManyInvitationImageArgs = DeleteManyInvitationImageArgs;
let DeleteOneInvitationImageArgs = class DeleteOneInvitationImageArgs {
};
__decorate([
    (0, graphql_1.Field)(() => InvitationImageWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => InvitationImageWhereUniqueInput)
], DeleteOneInvitationImageArgs.prototype, "where", void 0);
DeleteOneInvitationImageArgs = __decorate([
    (0, graphql_3.ArgsType)()
], DeleteOneInvitationImageArgs);
exports.DeleteOneInvitationImageArgs = DeleteOneInvitationImageArgs;
let FindFirstInvitationImageOrThrowArgs = class FindFirstInvitationImageOrThrowArgs {
};
__decorate([
    (0, graphql_1.Field)(() => InvitationImageWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => InvitationImageWhereInput)
], FindFirstInvitationImageOrThrowArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [InvitationImageOrderByWithRelationInput], { nullable: true })
], FindFirstInvitationImageOrThrowArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => InvitationImageWhereUniqueInput, { nullable: true })
], FindFirstInvitationImageOrThrowArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], FindFirstInvitationImageOrThrowArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], FindFirstInvitationImageOrThrowArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => [InvitationImageScalarFieldEnum], { nullable: true })
], FindFirstInvitationImageOrThrowArgs.prototype, "distinct", void 0);
FindFirstInvitationImageOrThrowArgs = __decorate([
    (0, graphql_3.ArgsType)()
], FindFirstInvitationImageOrThrowArgs);
exports.FindFirstInvitationImageOrThrowArgs = FindFirstInvitationImageOrThrowArgs;
let FindFirstInvitationImageArgs = class FindFirstInvitationImageArgs {
};
__decorate([
    (0, graphql_1.Field)(() => InvitationImageWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => InvitationImageWhereInput)
], FindFirstInvitationImageArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [InvitationImageOrderByWithRelationInput], { nullable: true })
], FindFirstInvitationImageArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => InvitationImageWhereUniqueInput, { nullable: true })
], FindFirstInvitationImageArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], FindFirstInvitationImageArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], FindFirstInvitationImageArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => [InvitationImageScalarFieldEnum], { nullable: true })
], FindFirstInvitationImageArgs.prototype, "distinct", void 0);
FindFirstInvitationImageArgs = __decorate([
    (0, graphql_3.ArgsType)()
], FindFirstInvitationImageArgs);
exports.FindFirstInvitationImageArgs = FindFirstInvitationImageArgs;
let FindManyInvitationImageArgs = class FindManyInvitationImageArgs {
};
__decorate([
    (0, graphql_1.Field)(() => InvitationImageWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => InvitationImageWhereInput)
], FindManyInvitationImageArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [InvitationImageOrderByWithRelationInput], { nullable: true })
], FindManyInvitationImageArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => InvitationImageWhereUniqueInput, { nullable: true })
], FindManyInvitationImageArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], FindManyInvitationImageArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], FindManyInvitationImageArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => [InvitationImageScalarFieldEnum], { nullable: true })
], FindManyInvitationImageArgs.prototype, "distinct", void 0);
FindManyInvitationImageArgs = __decorate([
    (0, graphql_3.ArgsType)()
], FindManyInvitationImageArgs);
exports.FindManyInvitationImageArgs = FindManyInvitationImageArgs;
let FindUniqueInvitationImageOrThrowArgs = class FindUniqueInvitationImageOrThrowArgs {
};
__decorate([
    (0, graphql_1.Field)(() => InvitationImageWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => InvitationImageWhereUniqueInput)
], FindUniqueInvitationImageOrThrowArgs.prototype, "where", void 0);
FindUniqueInvitationImageOrThrowArgs = __decorate([
    (0, graphql_3.ArgsType)()
], FindUniqueInvitationImageOrThrowArgs);
exports.FindUniqueInvitationImageOrThrowArgs = FindUniqueInvitationImageOrThrowArgs;
let FindUniqueInvitationImageArgs = class FindUniqueInvitationImageArgs {
};
__decorate([
    (0, graphql_1.Field)(() => InvitationImageWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => InvitationImageWhereUniqueInput)
], FindUniqueInvitationImageArgs.prototype, "where", void 0);
FindUniqueInvitationImageArgs = __decorate([
    (0, graphql_3.ArgsType)()
], FindUniqueInvitationImageArgs);
exports.FindUniqueInvitationImageArgs = FindUniqueInvitationImageArgs;
let InvitationImageAggregateArgs = class InvitationImageAggregateArgs {
};
__decorate([
    (0, graphql_1.Field)(() => InvitationImageWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => InvitationImageWhereInput)
], InvitationImageAggregateArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [InvitationImageOrderByWithRelationInput], { nullable: true })
], InvitationImageAggregateArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => InvitationImageWhereUniqueInput, { nullable: true })
], InvitationImageAggregateArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], InvitationImageAggregateArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], InvitationImageAggregateArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => InvitationImageCountAggregateInput, { nullable: true })
], InvitationImageAggregateArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => InvitationImageMinAggregateInput, { nullable: true })
], InvitationImageAggregateArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => InvitationImageMaxAggregateInput, { nullable: true })
], InvitationImageAggregateArgs.prototype, "_max", void 0);
InvitationImageAggregateArgs = __decorate([
    (0, graphql_3.ArgsType)()
], InvitationImageAggregateArgs);
exports.InvitationImageAggregateArgs = InvitationImageAggregateArgs;
let InvitationImageCountAggregateInput = class InvitationImageCountAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], InvitationImageCountAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], InvitationImageCountAggregateInput.prototype, "path", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], InvitationImageCountAggregateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], InvitationImageCountAggregateInput.prototype, "guestId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], InvitationImageCountAggregateInput.prototype, "_all", void 0);
InvitationImageCountAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], InvitationImageCountAggregateInput);
exports.InvitationImageCountAggregateInput = InvitationImageCountAggregateInput;
let InvitationImageCountAggregate = class InvitationImageCountAggregate {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], InvitationImageCountAggregate.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], InvitationImageCountAggregate.prototype, "path", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], InvitationImageCountAggregate.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], InvitationImageCountAggregate.prototype, "guestId", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], InvitationImageCountAggregate.prototype, "_all", void 0);
InvitationImageCountAggregate = __decorate([
    (0, graphql_2.ObjectType)()
], InvitationImageCountAggregate);
exports.InvitationImageCountAggregate = InvitationImageCountAggregate;
let InvitationImageCountOrderByAggregateInput = class InvitationImageCountOrderByAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], InvitationImageCountOrderByAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], InvitationImageCountOrderByAggregateInput.prototype, "path", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], InvitationImageCountOrderByAggregateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], InvitationImageCountOrderByAggregateInput.prototype, "guestId", void 0);
InvitationImageCountOrderByAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], InvitationImageCountOrderByAggregateInput);
exports.InvitationImageCountOrderByAggregateInput = InvitationImageCountOrderByAggregateInput;
let InvitationImageCreateManyInput = class InvitationImageCreateManyInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], InvitationImageCreateManyInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], InvitationImageCreateManyInput.prototype, "path", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], InvitationImageCreateManyInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], InvitationImageCreateManyInput.prototype, "guestId", void 0);
InvitationImageCreateManyInput = __decorate([
    (0, graphql_5.InputType)()
], InvitationImageCreateManyInput);
exports.InvitationImageCreateManyInput = InvitationImageCreateManyInput;
let InvitationImageCreateNestedOneWithoutGuestInput = class InvitationImageCreateNestedOneWithoutGuestInput {
};
__decorate([
    (0, graphql_1.Field)(() => InvitationImageCreateWithoutGuestInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => InvitationImageCreateWithoutGuestInput)
], InvitationImageCreateNestedOneWithoutGuestInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => InvitationImageCreateOrConnectWithoutGuestInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => InvitationImageCreateOrConnectWithoutGuestInput)
], InvitationImageCreateNestedOneWithoutGuestInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => InvitationImageWhereUniqueInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => InvitationImageWhereUniqueInput)
], InvitationImageCreateNestedOneWithoutGuestInput.prototype, "connect", void 0);
InvitationImageCreateNestedOneWithoutGuestInput = __decorate([
    (0, graphql_5.InputType)()
], InvitationImageCreateNestedOneWithoutGuestInput);
exports.InvitationImageCreateNestedOneWithoutGuestInput = InvitationImageCreateNestedOneWithoutGuestInput;
let InvitationImageCreateOrConnectWithoutGuestInput = class InvitationImageCreateOrConnectWithoutGuestInput {
};
__decorate([
    (0, graphql_1.Field)(() => InvitationImageWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => InvitationImageWhereUniqueInput)
], InvitationImageCreateOrConnectWithoutGuestInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => InvitationImageCreateWithoutGuestInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => InvitationImageCreateWithoutGuestInput)
], InvitationImageCreateOrConnectWithoutGuestInput.prototype, "create", void 0);
InvitationImageCreateOrConnectWithoutGuestInput = __decorate([
    (0, graphql_5.InputType)()
], InvitationImageCreateOrConnectWithoutGuestInput);
exports.InvitationImageCreateOrConnectWithoutGuestInput = InvitationImageCreateOrConnectWithoutGuestInput;
let InvitationImageCreateWithoutGuestInput = class InvitationImageCreateWithoutGuestInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], InvitationImageCreateWithoutGuestInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], InvitationImageCreateWithoutGuestInput.prototype, "path", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], InvitationImageCreateWithoutGuestInput.prototype, "createdAt", void 0);
InvitationImageCreateWithoutGuestInput = __decorate([
    (0, graphql_5.InputType)()
], InvitationImageCreateWithoutGuestInput);
exports.InvitationImageCreateWithoutGuestInput = InvitationImageCreateWithoutGuestInput;
let InvitationImageCreateInput = class InvitationImageCreateInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], InvitationImageCreateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], InvitationImageCreateInput.prototype, "path", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], InvitationImageCreateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestCreateNestedOneWithoutInvitationImageInput, { nullable: false })
], InvitationImageCreateInput.prototype, "guest", void 0);
InvitationImageCreateInput = __decorate([
    (0, graphql_5.InputType)()
], InvitationImageCreateInput);
exports.InvitationImageCreateInput = InvitationImageCreateInput;
let InvitationImageGroupByArgs = class InvitationImageGroupByArgs {
};
__decorate([
    (0, graphql_1.Field)(() => InvitationImageWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => InvitationImageWhereInput)
], InvitationImageGroupByArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [InvitationImageOrderByWithAggregationInput], { nullable: true })
], InvitationImageGroupByArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => [InvitationImageScalarFieldEnum], { nullable: false })
], InvitationImageGroupByArgs.prototype, "by", void 0);
__decorate([
    (0, graphql_1.Field)(() => InvitationImageScalarWhereWithAggregatesInput, { nullable: true })
], InvitationImageGroupByArgs.prototype, "having", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], InvitationImageGroupByArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], InvitationImageGroupByArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => InvitationImageCountAggregateInput, { nullable: true })
], InvitationImageGroupByArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => InvitationImageMinAggregateInput, { nullable: true })
], InvitationImageGroupByArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => InvitationImageMaxAggregateInput, { nullable: true })
], InvitationImageGroupByArgs.prototype, "_max", void 0);
InvitationImageGroupByArgs = __decorate([
    (0, graphql_3.ArgsType)()
], InvitationImageGroupByArgs);
exports.InvitationImageGroupByArgs = InvitationImageGroupByArgs;
let InvitationImageGroupBy = class InvitationImageGroupBy {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], InvitationImageGroupBy.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], InvitationImageGroupBy.prototype, "path", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], InvitationImageGroupBy.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], InvitationImageGroupBy.prototype, "guestId", void 0);
__decorate([
    (0, graphql_1.Field)(() => InvitationImageCountAggregate, { nullable: true })
], InvitationImageGroupBy.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => InvitationImageMinAggregate, { nullable: true })
], InvitationImageGroupBy.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => InvitationImageMaxAggregate, { nullable: true })
], InvitationImageGroupBy.prototype, "_max", void 0);
InvitationImageGroupBy = __decorate([
    (0, graphql_2.ObjectType)()
], InvitationImageGroupBy);
exports.InvitationImageGroupBy = InvitationImageGroupBy;
let InvitationImageMaxAggregateInput = class InvitationImageMaxAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], InvitationImageMaxAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], InvitationImageMaxAggregateInput.prototype, "path", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], InvitationImageMaxAggregateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], InvitationImageMaxAggregateInput.prototype, "guestId", void 0);
InvitationImageMaxAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], InvitationImageMaxAggregateInput);
exports.InvitationImageMaxAggregateInput = InvitationImageMaxAggregateInput;
let InvitationImageMaxAggregate = class InvitationImageMaxAggregate {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], InvitationImageMaxAggregate.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], InvitationImageMaxAggregate.prototype, "path", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], InvitationImageMaxAggregate.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], InvitationImageMaxAggregate.prototype, "guestId", void 0);
InvitationImageMaxAggregate = __decorate([
    (0, graphql_2.ObjectType)()
], InvitationImageMaxAggregate);
exports.InvitationImageMaxAggregate = InvitationImageMaxAggregate;
let InvitationImageMaxOrderByAggregateInput = class InvitationImageMaxOrderByAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], InvitationImageMaxOrderByAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], InvitationImageMaxOrderByAggregateInput.prototype, "path", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], InvitationImageMaxOrderByAggregateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], InvitationImageMaxOrderByAggregateInput.prototype, "guestId", void 0);
InvitationImageMaxOrderByAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], InvitationImageMaxOrderByAggregateInput);
exports.InvitationImageMaxOrderByAggregateInput = InvitationImageMaxOrderByAggregateInput;
let InvitationImageMinAggregateInput = class InvitationImageMinAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], InvitationImageMinAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], InvitationImageMinAggregateInput.prototype, "path", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], InvitationImageMinAggregateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], InvitationImageMinAggregateInput.prototype, "guestId", void 0);
InvitationImageMinAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], InvitationImageMinAggregateInput);
exports.InvitationImageMinAggregateInput = InvitationImageMinAggregateInput;
let InvitationImageMinAggregate = class InvitationImageMinAggregate {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], InvitationImageMinAggregate.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], InvitationImageMinAggregate.prototype, "path", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], InvitationImageMinAggregate.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], InvitationImageMinAggregate.prototype, "guestId", void 0);
InvitationImageMinAggregate = __decorate([
    (0, graphql_2.ObjectType)()
], InvitationImageMinAggregate);
exports.InvitationImageMinAggregate = InvitationImageMinAggregate;
let InvitationImageMinOrderByAggregateInput = class InvitationImageMinOrderByAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], InvitationImageMinOrderByAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], InvitationImageMinOrderByAggregateInput.prototype, "path", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], InvitationImageMinOrderByAggregateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], InvitationImageMinOrderByAggregateInput.prototype, "guestId", void 0);
InvitationImageMinOrderByAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], InvitationImageMinOrderByAggregateInput);
exports.InvitationImageMinOrderByAggregateInput = InvitationImageMinOrderByAggregateInput;
let InvitationImageNullableRelationFilter = class InvitationImageNullableRelationFilter {
};
__decorate([
    (0, graphql_1.Field)(() => InvitationImageWhereInput, { nullable: true })
], InvitationImageNullableRelationFilter.prototype, "is", void 0);
__decorate([
    (0, graphql_1.Field)(() => InvitationImageWhereInput, { nullable: true })
], InvitationImageNullableRelationFilter.prototype, "isNot", void 0);
InvitationImageNullableRelationFilter = __decorate([
    (0, graphql_5.InputType)()
], InvitationImageNullableRelationFilter);
exports.InvitationImageNullableRelationFilter = InvitationImageNullableRelationFilter;
let InvitationImageOrderByWithAggregationInput = class InvitationImageOrderByWithAggregationInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], InvitationImageOrderByWithAggregationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], InvitationImageOrderByWithAggregationInput.prototype, "path", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], InvitationImageOrderByWithAggregationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], InvitationImageOrderByWithAggregationInput.prototype, "guestId", void 0);
__decorate([
    (0, graphql_1.Field)(() => InvitationImageCountOrderByAggregateInput, { nullable: true })
], InvitationImageOrderByWithAggregationInput.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => InvitationImageMaxOrderByAggregateInput, { nullable: true })
], InvitationImageOrderByWithAggregationInput.prototype, "_max", void 0);
__decorate([
    (0, graphql_1.Field)(() => InvitationImageMinOrderByAggregateInput, { nullable: true })
], InvitationImageOrderByWithAggregationInput.prototype, "_min", void 0);
InvitationImageOrderByWithAggregationInput = __decorate([
    (0, graphql_5.InputType)()
], InvitationImageOrderByWithAggregationInput);
exports.InvitationImageOrderByWithAggregationInput = InvitationImageOrderByWithAggregationInput;
let InvitationImageOrderByWithRelationInput = class InvitationImageOrderByWithRelationInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], InvitationImageOrderByWithRelationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], InvitationImageOrderByWithRelationInput.prototype, "path", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], InvitationImageOrderByWithRelationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], InvitationImageOrderByWithRelationInput.prototype, "guestId", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestOrderByWithRelationInput, { nullable: true })
], InvitationImageOrderByWithRelationInput.prototype, "guest", void 0);
InvitationImageOrderByWithRelationInput = __decorate([
    (0, graphql_5.InputType)()
], InvitationImageOrderByWithRelationInput);
exports.InvitationImageOrderByWithRelationInput = InvitationImageOrderByWithRelationInput;
let InvitationImageScalarWhereWithAggregatesInput = InvitationImageScalarWhereWithAggregatesInput_1 = class InvitationImageScalarWhereWithAggregatesInput {
};
__decorate([
    (0, graphql_1.Field)(() => [InvitationImageScalarWhereWithAggregatesInput_1], { nullable: true })
], InvitationImageScalarWhereWithAggregatesInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [InvitationImageScalarWhereWithAggregatesInput_1], { nullable: true })
], InvitationImageScalarWhereWithAggregatesInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [InvitationImageScalarWhereWithAggregatesInput_1], { nullable: true })
], InvitationImageScalarWhereWithAggregatesInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringWithAggregatesFilter, { nullable: true })
], InvitationImageScalarWhereWithAggregatesInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringWithAggregatesFilter, { nullable: true })
], InvitationImageScalarWhereWithAggregatesInput.prototype, "path", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeWithAggregatesFilter, { nullable: true })
], InvitationImageScalarWhereWithAggregatesInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringWithAggregatesFilter, { nullable: true })
], InvitationImageScalarWhereWithAggregatesInput.prototype, "guestId", void 0);
InvitationImageScalarWhereWithAggregatesInput = InvitationImageScalarWhereWithAggregatesInput_1 = __decorate([
    (0, graphql_5.InputType)()
], InvitationImageScalarWhereWithAggregatesInput);
exports.InvitationImageScalarWhereWithAggregatesInput = InvitationImageScalarWhereWithAggregatesInput;
let InvitationImageUncheckedCreateNestedOneWithoutGuestInput = class InvitationImageUncheckedCreateNestedOneWithoutGuestInput {
};
__decorate([
    (0, graphql_1.Field)(() => InvitationImageCreateWithoutGuestInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => InvitationImageCreateWithoutGuestInput)
], InvitationImageUncheckedCreateNestedOneWithoutGuestInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => InvitationImageCreateOrConnectWithoutGuestInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => InvitationImageCreateOrConnectWithoutGuestInput)
], InvitationImageUncheckedCreateNestedOneWithoutGuestInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => InvitationImageWhereUniqueInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => InvitationImageWhereUniqueInput)
], InvitationImageUncheckedCreateNestedOneWithoutGuestInput.prototype, "connect", void 0);
InvitationImageUncheckedCreateNestedOneWithoutGuestInput = __decorate([
    (0, graphql_5.InputType)()
], InvitationImageUncheckedCreateNestedOneWithoutGuestInput);
exports.InvitationImageUncheckedCreateNestedOneWithoutGuestInput = InvitationImageUncheckedCreateNestedOneWithoutGuestInput;
let InvitationImageUncheckedCreateWithoutGuestInput = class InvitationImageUncheckedCreateWithoutGuestInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], InvitationImageUncheckedCreateWithoutGuestInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], InvitationImageUncheckedCreateWithoutGuestInput.prototype, "path", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], InvitationImageUncheckedCreateWithoutGuestInput.prototype, "createdAt", void 0);
InvitationImageUncheckedCreateWithoutGuestInput = __decorate([
    (0, graphql_5.InputType)()
], InvitationImageUncheckedCreateWithoutGuestInput);
exports.InvitationImageUncheckedCreateWithoutGuestInput = InvitationImageUncheckedCreateWithoutGuestInput;
let InvitationImageUncheckedCreateInput = class InvitationImageUncheckedCreateInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], InvitationImageUncheckedCreateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], InvitationImageUncheckedCreateInput.prototype, "path", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], InvitationImageUncheckedCreateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], InvitationImageUncheckedCreateInput.prototype, "guestId", void 0);
InvitationImageUncheckedCreateInput = __decorate([
    (0, graphql_5.InputType)()
], InvitationImageUncheckedCreateInput);
exports.InvitationImageUncheckedCreateInput = InvitationImageUncheckedCreateInput;
let InvitationImageUncheckedUpdateManyInput = class InvitationImageUncheckedUpdateManyInput {
};
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], InvitationImageUncheckedUpdateManyInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], InvitationImageUncheckedUpdateManyInput.prototype, "path", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], InvitationImageUncheckedUpdateManyInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], InvitationImageUncheckedUpdateManyInput.prototype, "guestId", void 0);
InvitationImageUncheckedUpdateManyInput = __decorate([
    (0, graphql_5.InputType)()
], InvitationImageUncheckedUpdateManyInput);
exports.InvitationImageUncheckedUpdateManyInput = InvitationImageUncheckedUpdateManyInput;
let InvitationImageUncheckedUpdateOneWithoutGuestNestedInput = class InvitationImageUncheckedUpdateOneWithoutGuestNestedInput {
};
__decorate([
    (0, graphql_1.Field)(() => InvitationImageCreateWithoutGuestInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => InvitationImageCreateWithoutGuestInput)
], InvitationImageUncheckedUpdateOneWithoutGuestNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => InvitationImageCreateOrConnectWithoutGuestInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => InvitationImageCreateOrConnectWithoutGuestInput)
], InvitationImageUncheckedUpdateOneWithoutGuestNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => InvitationImageUpsertWithoutGuestInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => InvitationImageUpsertWithoutGuestInput)
], InvitationImageUncheckedUpdateOneWithoutGuestNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => InvitationImageWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => InvitationImageWhereInput)
], InvitationImageUncheckedUpdateOneWithoutGuestNestedInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => InvitationImageWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => InvitationImageWhereInput)
], InvitationImageUncheckedUpdateOneWithoutGuestNestedInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => InvitationImageWhereUniqueInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => InvitationImageWhereUniqueInput)
], InvitationImageUncheckedUpdateOneWithoutGuestNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => InvitationImageUpdateToOneWithWhereWithoutGuestInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => InvitationImageUpdateToOneWithWhereWithoutGuestInput)
], InvitationImageUncheckedUpdateOneWithoutGuestNestedInput.prototype, "update", void 0);
InvitationImageUncheckedUpdateOneWithoutGuestNestedInput = __decorate([
    (0, graphql_5.InputType)()
], InvitationImageUncheckedUpdateOneWithoutGuestNestedInput);
exports.InvitationImageUncheckedUpdateOneWithoutGuestNestedInput = InvitationImageUncheckedUpdateOneWithoutGuestNestedInput;
let InvitationImageUncheckedUpdateWithoutGuestInput = class InvitationImageUncheckedUpdateWithoutGuestInput {
};
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], InvitationImageUncheckedUpdateWithoutGuestInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], InvitationImageUncheckedUpdateWithoutGuestInput.prototype, "path", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], InvitationImageUncheckedUpdateWithoutGuestInput.prototype, "createdAt", void 0);
InvitationImageUncheckedUpdateWithoutGuestInput = __decorate([
    (0, graphql_5.InputType)()
], InvitationImageUncheckedUpdateWithoutGuestInput);
exports.InvitationImageUncheckedUpdateWithoutGuestInput = InvitationImageUncheckedUpdateWithoutGuestInput;
let InvitationImageUncheckedUpdateInput = class InvitationImageUncheckedUpdateInput {
};
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], InvitationImageUncheckedUpdateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], InvitationImageUncheckedUpdateInput.prototype, "path", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], InvitationImageUncheckedUpdateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], InvitationImageUncheckedUpdateInput.prototype, "guestId", void 0);
InvitationImageUncheckedUpdateInput = __decorate([
    (0, graphql_5.InputType)()
], InvitationImageUncheckedUpdateInput);
exports.InvitationImageUncheckedUpdateInput = InvitationImageUncheckedUpdateInput;
let InvitationImageUpdateManyMutationInput = class InvitationImageUpdateManyMutationInput {
};
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], InvitationImageUpdateManyMutationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], InvitationImageUpdateManyMutationInput.prototype, "path", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], InvitationImageUpdateManyMutationInput.prototype, "createdAt", void 0);
InvitationImageUpdateManyMutationInput = __decorate([
    (0, graphql_5.InputType)()
], InvitationImageUpdateManyMutationInput);
exports.InvitationImageUpdateManyMutationInput = InvitationImageUpdateManyMutationInput;
let InvitationImageUpdateOneWithoutGuestNestedInput = class InvitationImageUpdateOneWithoutGuestNestedInput {
};
__decorate([
    (0, graphql_1.Field)(() => InvitationImageCreateWithoutGuestInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => InvitationImageCreateWithoutGuestInput)
], InvitationImageUpdateOneWithoutGuestNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => InvitationImageCreateOrConnectWithoutGuestInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => InvitationImageCreateOrConnectWithoutGuestInput)
], InvitationImageUpdateOneWithoutGuestNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => InvitationImageUpsertWithoutGuestInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => InvitationImageUpsertWithoutGuestInput)
], InvitationImageUpdateOneWithoutGuestNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => InvitationImageWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => InvitationImageWhereInput)
], InvitationImageUpdateOneWithoutGuestNestedInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => InvitationImageWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => InvitationImageWhereInput)
], InvitationImageUpdateOneWithoutGuestNestedInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => InvitationImageWhereUniqueInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => InvitationImageWhereUniqueInput)
], InvitationImageUpdateOneWithoutGuestNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => InvitationImageUpdateToOneWithWhereWithoutGuestInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => InvitationImageUpdateToOneWithWhereWithoutGuestInput)
], InvitationImageUpdateOneWithoutGuestNestedInput.prototype, "update", void 0);
InvitationImageUpdateOneWithoutGuestNestedInput = __decorate([
    (0, graphql_5.InputType)()
], InvitationImageUpdateOneWithoutGuestNestedInput);
exports.InvitationImageUpdateOneWithoutGuestNestedInput = InvitationImageUpdateOneWithoutGuestNestedInput;
let InvitationImageUpdateToOneWithWhereWithoutGuestInput = class InvitationImageUpdateToOneWithWhereWithoutGuestInput {
};
__decorate([
    (0, graphql_1.Field)(() => InvitationImageWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => InvitationImageWhereInput)
], InvitationImageUpdateToOneWithWhereWithoutGuestInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => InvitationImageUpdateWithoutGuestInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => InvitationImageUpdateWithoutGuestInput)
], InvitationImageUpdateToOneWithWhereWithoutGuestInput.prototype, "data", void 0);
InvitationImageUpdateToOneWithWhereWithoutGuestInput = __decorate([
    (0, graphql_5.InputType)()
], InvitationImageUpdateToOneWithWhereWithoutGuestInput);
exports.InvitationImageUpdateToOneWithWhereWithoutGuestInput = InvitationImageUpdateToOneWithWhereWithoutGuestInput;
let InvitationImageUpdateWithoutGuestInput = class InvitationImageUpdateWithoutGuestInput {
};
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], InvitationImageUpdateWithoutGuestInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], InvitationImageUpdateWithoutGuestInput.prototype, "path", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], InvitationImageUpdateWithoutGuestInput.prototype, "createdAt", void 0);
InvitationImageUpdateWithoutGuestInput = __decorate([
    (0, graphql_5.InputType)()
], InvitationImageUpdateWithoutGuestInput);
exports.InvitationImageUpdateWithoutGuestInput = InvitationImageUpdateWithoutGuestInput;
let InvitationImageUpdateInput = class InvitationImageUpdateInput {
};
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], InvitationImageUpdateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], InvitationImageUpdateInput.prototype, "path", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], InvitationImageUpdateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestUpdateOneRequiredWithoutInvitationImageNestedInput, { nullable: true })
], InvitationImageUpdateInput.prototype, "guest", void 0);
InvitationImageUpdateInput = __decorate([
    (0, graphql_5.InputType)()
], InvitationImageUpdateInput);
exports.InvitationImageUpdateInput = InvitationImageUpdateInput;
let InvitationImageUpsertWithoutGuestInput = class InvitationImageUpsertWithoutGuestInput {
};
__decorate([
    (0, graphql_1.Field)(() => InvitationImageUpdateWithoutGuestInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => InvitationImageUpdateWithoutGuestInput)
], InvitationImageUpsertWithoutGuestInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => InvitationImageCreateWithoutGuestInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => InvitationImageCreateWithoutGuestInput)
], InvitationImageUpsertWithoutGuestInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => InvitationImageWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => InvitationImageWhereInput)
], InvitationImageUpsertWithoutGuestInput.prototype, "where", void 0);
InvitationImageUpsertWithoutGuestInput = __decorate([
    (0, graphql_5.InputType)()
], InvitationImageUpsertWithoutGuestInput);
exports.InvitationImageUpsertWithoutGuestInput = InvitationImageUpsertWithoutGuestInput;
let InvitationImageWhereUniqueInput = class InvitationImageWhereUniqueInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], InvitationImageWhereUniqueInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], InvitationImageWhereUniqueInput.prototype, "guestId", void 0);
__decorate([
    (0, graphql_1.Field)(() => [InvitationImageWhereInput], { nullable: true })
], InvitationImageWhereUniqueInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [InvitationImageWhereInput], { nullable: true })
], InvitationImageWhereUniqueInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [InvitationImageWhereInput], { nullable: true })
], InvitationImageWhereUniqueInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFilter, { nullable: true })
], InvitationImageWhereUniqueInput.prototype, "path", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFilter, { nullable: true })
], InvitationImageWhereUniqueInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestRelationFilter, { nullable: true })
], InvitationImageWhereUniqueInput.prototype, "guest", void 0);
InvitationImageWhereUniqueInput = __decorate([
    (0, graphql_5.InputType)()
], InvitationImageWhereUniqueInput);
exports.InvitationImageWhereUniqueInput = InvitationImageWhereUniqueInput;
let InvitationImageWhereInput = InvitationImageWhereInput_1 = class InvitationImageWhereInput {
};
__decorate([
    (0, graphql_1.Field)(() => [InvitationImageWhereInput_1], { nullable: true })
], InvitationImageWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [InvitationImageWhereInput_1], { nullable: true })
], InvitationImageWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [InvitationImageWhereInput_1], { nullable: true })
], InvitationImageWhereInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFilter, { nullable: true })
], InvitationImageWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFilter, { nullable: true })
], InvitationImageWhereInput.prototype, "path", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFilter, { nullable: true })
], InvitationImageWhereInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFilter, { nullable: true })
], InvitationImageWhereInput.prototype, "guestId", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestRelationFilter, { nullable: true })
], InvitationImageWhereInput.prototype, "guest", void 0);
InvitationImageWhereInput = InvitationImageWhereInput_1 = __decorate([
    (0, graphql_5.InputType)()
], InvitationImageWhereInput);
exports.InvitationImageWhereInput = InvitationImageWhereInput;
let InvitationImage = class InvitationImage {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], InvitationImage.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], InvitationImage.prototype, "path", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], InvitationImage.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], InvitationImage.prototype, "guestId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Guest, { nullable: false })
], InvitationImage.prototype, "guest", void 0);
InvitationImage = __decorate([
    (0, graphql_2.ObjectType)()
], InvitationImage);
exports.InvitationImage = InvitationImage;
let UpdateManyInvitationImageArgs = class UpdateManyInvitationImageArgs {
};
__decorate([
    (0, graphql_1.Field)(() => InvitationImageUpdateManyMutationInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => InvitationImageUpdateManyMutationInput)
], UpdateManyInvitationImageArgs.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => InvitationImageWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => InvitationImageWhereInput)
], UpdateManyInvitationImageArgs.prototype, "where", void 0);
UpdateManyInvitationImageArgs = __decorate([
    (0, graphql_3.ArgsType)()
], UpdateManyInvitationImageArgs);
exports.UpdateManyInvitationImageArgs = UpdateManyInvitationImageArgs;
let UpdateOneInvitationImageArgs = class UpdateOneInvitationImageArgs {
};
__decorate([
    (0, graphql_1.Field)(() => InvitationImageUpdateInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => InvitationImageUpdateInput)
], UpdateOneInvitationImageArgs.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => InvitationImageWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => InvitationImageWhereUniqueInput)
], UpdateOneInvitationImageArgs.prototype, "where", void 0);
UpdateOneInvitationImageArgs = __decorate([
    (0, graphql_3.ArgsType)()
], UpdateOneInvitationImageArgs);
exports.UpdateOneInvitationImageArgs = UpdateOneInvitationImageArgs;
let UpsertOneInvitationImageArgs = class UpsertOneInvitationImageArgs {
};
__decorate([
    (0, graphql_1.Field)(() => InvitationImageWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => InvitationImageWhereUniqueInput)
], UpsertOneInvitationImageArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => InvitationImageCreateInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => InvitationImageCreateInput)
], UpsertOneInvitationImageArgs.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => InvitationImageUpdateInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => InvitationImageUpdateInput)
], UpsertOneInvitationImageArgs.prototype, "update", void 0);
UpsertOneInvitationImageArgs = __decorate([
    (0, graphql_3.ArgsType)()
], UpsertOneInvitationImageArgs);
exports.UpsertOneInvitationImageArgs = UpsertOneInvitationImageArgs;
let AffectedRows = class AffectedRows {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], AffectedRows.prototype, "count", void 0);
AffectedRows = __decorate([
    (0, graphql_2.ObjectType)()
], AffectedRows);
exports.AffectedRows = AffectedRows;
let DateTimeFieldUpdateOperationsInput = class DateTimeFieldUpdateOperationsInput {
};
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], DateTimeFieldUpdateOperationsInput.prototype, "set", void 0);
DateTimeFieldUpdateOperationsInput = __decorate([
    (0, graphql_5.InputType)()
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
    (0, graphql_5.InputType)()
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
    (0, graphql_5.InputType)()
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
    (0, graphql_5.InputType)()
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
    (0, graphql_5.InputType)()
], DateTimeWithAggregatesFilter);
exports.DateTimeWithAggregatesFilter = DateTimeWithAggregatesFilter;
let EnumConfirmationStatusNullableFilter = class EnumConfirmationStatusNullableFilter {
};
__decorate([
    (0, graphql_1.Field)(() => ConfirmationStatus, { nullable: true })
], EnumConfirmationStatusNullableFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ConfirmationStatus], { nullable: true })
], EnumConfirmationStatusNullableFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ConfirmationStatus], { nullable: true })
], EnumConfirmationStatusNullableFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedEnumConfirmationStatusNullableFilter, { nullable: true })
], EnumConfirmationStatusNullableFilter.prototype, "not", void 0);
EnumConfirmationStatusNullableFilter = __decorate([
    (0, graphql_5.InputType)()
], EnumConfirmationStatusNullableFilter);
exports.EnumConfirmationStatusNullableFilter = EnumConfirmationStatusNullableFilter;
let EnumConfirmationStatusNullableWithAggregatesFilter = class EnumConfirmationStatusNullableWithAggregatesFilter {
};
__decorate([
    (0, graphql_1.Field)(() => ConfirmationStatus, { nullable: true })
], EnumConfirmationStatusNullableWithAggregatesFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ConfirmationStatus], { nullable: true })
], EnumConfirmationStatusNullableWithAggregatesFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ConfirmationStatus], { nullable: true })
], EnumConfirmationStatusNullableWithAggregatesFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedEnumConfirmationStatusNullableWithAggregatesFilter, { nullable: true })
], EnumConfirmationStatusNullableWithAggregatesFilter.prototype, "not", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedIntNullableFilter, { nullable: true })
], EnumConfirmationStatusNullableWithAggregatesFilter.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedEnumConfirmationStatusNullableFilter, { nullable: true })
], EnumConfirmationStatusNullableWithAggregatesFilter.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedEnumConfirmationStatusNullableFilter, { nullable: true })
], EnumConfirmationStatusNullableWithAggregatesFilter.prototype, "_max", void 0);
EnumConfirmationStatusNullableWithAggregatesFilter = __decorate([
    (0, graphql_5.InputType)()
], EnumConfirmationStatusNullableWithAggregatesFilter);
exports.EnumConfirmationStatusNullableWithAggregatesFilter = EnumConfirmationStatusNullableWithAggregatesFilter;
let EnumQueueStatusFieldUpdateOperationsInput = class EnumQueueStatusFieldUpdateOperationsInput {
};
__decorate([
    (0, graphql_1.Field)(() => QueueStatus, { nullable: true })
], EnumQueueStatusFieldUpdateOperationsInput.prototype, "set", void 0);
EnumQueueStatusFieldUpdateOperationsInput = __decorate([
    (0, graphql_5.InputType)()
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
    (0, graphql_5.InputType)()
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
    (0, graphql_5.InputType)()
], EnumQueueStatusWithAggregatesFilter);
exports.EnumQueueStatusWithAggregatesFilter = EnumQueueStatusWithAggregatesFilter;
let EnumUserRoleFieldUpdateOperationsInput = class EnumUserRoleFieldUpdateOperationsInput {
};
__decorate([
    (0, graphql_1.Field)(() => UserRole, { nullable: true })
], EnumUserRoleFieldUpdateOperationsInput.prototype, "set", void 0);
EnumUserRoleFieldUpdateOperationsInput = __decorate([
    (0, graphql_5.InputType)()
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
    (0, graphql_5.InputType)()
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
    (0, graphql_5.InputType)()
], EnumUserRoleWithAggregatesFilter);
exports.EnumUserRoleWithAggregatesFilter = EnumUserRoleWithAggregatesFilter;
let FloatNullableFilter = class FloatNullableFilter {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_6.Float, { nullable: true })
], FloatNullableFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [graphql_6.Float], { nullable: true })
], FloatNullableFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [graphql_6.Float], { nullable: true })
], FloatNullableFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_6.Float, { nullable: true })
], FloatNullableFilter.prototype, "lt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_6.Float, { nullable: true })
], FloatNullableFilter.prototype, "lte", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_6.Float, { nullable: true })
], FloatNullableFilter.prototype, "gt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_6.Float, { nullable: true })
], FloatNullableFilter.prototype, "gte", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedFloatNullableFilter, { nullable: true })
], FloatNullableFilter.prototype, "not", void 0);
FloatNullableFilter = __decorate([
    (0, graphql_5.InputType)()
], FloatNullableFilter);
exports.FloatNullableFilter = FloatNullableFilter;
let FloatNullableWithAggregatesFilter = class FloatNullableWithAggregatesFilter {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_6.Float, { nullable: true })
], FloatNullableWithAggregatesFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [graphql_6.Float], { nullable: true })
], FloatNullableWithAggregatesFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [graphql_6.Float], { nullable: true })
], FloatNullableWithAggregatesFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_6.Float, { nullable: true })
], FloatNullableWithAggregatesFilter.prototype, "lt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_6.Float, { nullable: true })
], FloatNullableWithAggregatesFilter.prototype, "lte", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_6.Float, { nullable: true })
], FloatNullableWithAggregatesFilter.prototype, "gt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_6.Float, { nullable: true })
], FloatNullableWithAggregatesFilter.prototype, "gte", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedFloatNullableWithAggregatesFilter, { nullable: true })
], FloatNullableWithAggregatesFilter.prototype, "not", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedIntNullableFilter, { nullable: true })
], FloatNullableWithAggregatesFilter.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedFloatNullableFilter, { nullable: true })
], FloatNullableWithAggregatesFilter.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedFloatNullableFilter, { nullable: true })
], FloatNullableWithAggregatesFilter.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedFloatNullableFilter, { nullable: true })
], FloatNullableWithAggregatesFilter.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedFloatNullableFilter, { nullable: true })
], FloatNullableWithAggregatesFilter.prototype, "_max", void 0);
FloatNullableWithAggregatesFilter = __decorate([
    (0, graphql_5.InputType)()
], FloatNullableWithAggregatesFilter);
exports.FloatNullableWithAggregatesFilter = FloatNullableWithAggregatesFilter;
let IntFieldUpdateOperationsInput = class IntFieldUpdateOperationsInput {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], IntFieldUpdateOperationsInput.prototype, "set", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], IntFieldUpdateOperationsInput.prototype, "increment", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], IntFieldUpdateOperationsInput.prototype, "decrement", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], IntFieldUpdateOperationsInput.prototype, "multiply", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], IntFieldUpdateOperationsInput.prototype, "divide", void 0);
IntFieldUpdateOperationsInput = __decorate([
    (0, graphql_5.InputType)()
], IntFieldUpdateOperationsInput);
exports.IntFieldUpdateOperationsInput = IntFieldUpdateOperationsInput;
let IntFilter = class IntFilter {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], IntFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [graphql_4.Int], { nullable: true })
], IntFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [graphql_4.Int], { nullable: true })
], IntFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], IntFilter.prototype, "lt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], IntFilter.prototype, "lte", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], IntFilter.prototype, "gt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], IntFilter.prototype, "gte", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedIntFilter, { nullable: true })
], IntFilter.prototype, "not", void 0);
IntFilter = __decorate([
    (0, graphql_5.InputType)()
], IntFilter);
exports.IntFilter = IntFilter;
let IntWithAggregatesFilter = class IntWithAggregatesFilter {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], IntWithAggregatesFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [graphql_4.Int], { nullable: true })
], IntWithAggregatesFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [graphql_4.Int], { nullable: true })
], IntWithAggregatesFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], IntWithAggregatesFilter.prototype, "lt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], IntWithAggregatesFilter.prototype, "lte", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], IntWithAggregatesFilter.prototype, "gt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
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
    (0, graphql_5.InputType)()
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
    (0, graphql_5.InputType)()
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
    (0, graphql_5.InputType)()
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
    (0, graphql_5.InputType)()
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
    (0, graphql_5.InputType)()
], NestedDateTimeWithAggregatesFilter);
exports.NestedDateTimeWithAggregatesFilter = NestedDateTimeWithAggregatesFilter;
let NestedEnumConfirmationStatusNullableFilter = NestedEnumConfirmationStatusNullableFilter_1 = class NestedEnumConfirmationStatusNullableFilter {
};
__decorate([
    (0, graphql_1.Field)(() => ConfirmationStatus, { nullable: true })
], NestedEnumConfirmationStatusNullableFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ConfirmationStatus], { nullable: true })
], NestedEnumConfirmationStatusNullableFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ConfirmationStatus], { nullable: true })
], NestedEnumConfirmationStatusNullableFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedEnumConfirmationStatusNullableFilter_1, { nullable: true })
], NestedEnumConfirmationStatusNullableFilter.prototype, "not", void 0);
NestedEnumConfirmationStatusNullableFilter = NestedEnumConfirmationStatusNullableFilter_1 = __decorate([
    (0, graphql_5.InputType)()
], NestedEnumConfirmationStatusNullableFilter);
exports.NestedEnumConfirmationStatusNullableFilter = NestedEnumConfirmationStatusNullableFilter;
let NestedEnumConfirmationStatusNullableWithAggregatesFilter = NestedEnumConfirmationStatusNullableWithAggregatesFilter_1 = class NestedEnumConfirmationStatusNullableWithAggregatesFilter {
};
__decorate([
    (0, graphql_1.Field)(() => ConfirmationStatus, { nullable: true })
], NestedEnumConfirmationStatusNullableWithAggregatesFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ConfirmationStatus], { nullable: true })
], NestedEnumConfirmationStatusNullableWithAggregatesFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ConfirmationStatus], { nullable: true })
], NestedEnumConfirmationStatusNullableWithAggregatesFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedEnumConfirmationStatusNullableWithAggregatesFilter_1, { nullable: true })
], NestedEnumConfirmationStatusNullableWithAggregatesFilter.prototype, "not", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedIntNullableFilter, { nullable: true })
], NestedEnumConfirmationStatusNullableWithAggregatesFilter.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedEnumConfirmationStatusNullableFilter, { nullable: true })
], NestedEnumConfirmationStatusNullableWithAggregatesFilter.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedEnumConfirmationStatusNullableFilter, { nullable: true })
], NestedEnumConfirmationStatusNullableWithAggregatesFilter.prototype, "_max", void 0);
NestedEnumConfirmationStatusNullableWithAggregatesFilter = NestedEnumConfirmationStatusNullableWithAggregatesFilter_1 = __decorate([
    (0, graphql_5.InputType)()
], NestedEnumConfirmationStatusNullableWithAggregatesFilter);
exports.NestedEnumConfirmationStatusNullableWithAggregatesFilter = NestedEnumConfirmationStatusNullableWithAggregatesFilter;
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
    (0, graphql_5.InputType)()
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
    (0, graphql_5.InputType)()
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
    (0, graphql_5.InputType)()
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
    (0, graphql_5.InputType)()
], NestedEnumUserRoleWithAggregatesFilter);
exports.NestedEnumUserRoleWithAggregatesFilter = NestedEnumUserRoleWithAggregatesFilter;
let NestedFloatFilter = NestedFloatFilter_1 = class NestedFloatFilter {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_6.Float, { nullable: true })
], NestedFloatFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [graphql_6.Float], { nullable: true })
], NestedFloatFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [graphql_6.Float], { nullable: true })
], NestedFloatFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_6.Float, { nullable: true })
], NestedFloatFilter.prototype, "lt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_6.Float, { nullable: true })
], NestedFloatFilter.prototype, "lte", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_6.Float, { nullable: true })
], NestedFloatFilter.prototype, "gt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_6.Float, { nullable: true })
], NestedFloatFilter.prototype, "gte", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedFloatFilter_1, { nullable: true })
], NestedFloatFilter.prototype, "not", void 0);
NestedFloatFilter = NestedFloatFilter_1 = __decorate([
    (0, graphql_5.InputType)()
], NestedFloatFilter);
exports.NestedFloatFilter = NestedFloatFilter;
let NestedFloatNullableFilter = NestedFloatNullableFilter_1 = class NestedFloatNullableFilter {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_6.Float, { nullable: true })
], NestedFloatNullableFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [graphql_6.Float], { nullable: true })
], NestedFloatNullableFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [graphql_6.Float], { nullable: true })
], NestedFloatNullableFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_6.Float, { nullable: true })
], NestedFloatNullableFilter.prototype, "lt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_6.Float, { nullable: true })
], NestedFloatNullableFilter.prototype, "lte", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_6.Float, { nullable: true })
], NestedFloatNullableFilter.prototype, "gt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_6.Float, { nullable: true })
], NestedFloatNullableFilter.prototype, "gte", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedFloatNullableFilter_1, { nullable: true })
], NestedFloatNullableFilter.prototype, "not", void 0);
NestedFloatNullableFilter = NestedFloatNullableFilter_1 = __decorate([
    (0, graphql_5.InputType)()
], NestedFloatNullableFilter);
exports.NestedFloatNullableFilter = NestedFloatNullableFilter;
let NestedFloatNullableWithAggregatesFilter = NestedFloatNullableWithAggregatesFilter_1 = class NestedFloatNullableWithAggregatesFilter {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_6.Float, { nullable: true })
], NestedFloatNullableWithAggregatesFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [graphql_6.Float], { nullable: true })
], NestedFloatNullableWithAggregatesFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [graphql_6.Float], { nullable: true })
], NestedFloatNullableWithAggregatesFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_6.Float, { nullable: true })
], NestedFloatNullableWithAggregatesFilter.prototype, "lt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_6.Float, { nullable: true })
], NestedFloatNullableWithAggregatesFilter.prototype, "lte", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_6.Float, { nullable: true })
], NestedFloatNullableWithAggregatesFilter.prototype, "gt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_6.Float, { nullable: true })
], NestedFloatNullableWithAggregatesFilter.prototype, "gte", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedFloatNullableWithAggregatesFilter_1, { nullable: true })
], NestedFloatNullableWithAggregatesFilter.prototype, "not", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedIntNullableFilter, { nullable: true })
], NestedFloatNullableWithAggregatesFilter.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedFloatNullableFilter, { nullable: true })
], NestedFloatNullableWithAggregatesFilter.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedFloatNullableFilter, { nullable: true })
], NestedFloatNullableWithAggregatesFilter.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedFloatNullableFilter, { nullable: true })
], NestedFloatNullableWithAggregatesFilter.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedFloatNullableFilter, { nullable: true })
], NestedFloatNullableWithAggregatesFilter.prototype, "_max", void 0);
NestedFloatNullableWithAggregatesFilter = NestedFloatNullableWithAggregatesFilter_1 = __decorate([
    (0, graphql_5.InputType)()
], NestedFloatNullableWithAggregatesFilter);
exports.NestedFloatNullableWithAggregatesFilter = NestedFloatNullableWithAggregatesFilter;
let NestedIntFilter = NestedIntFilter_1 = class NestedIntFilter {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], NestedIntFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [graphql_4.Int], { nullable: true })
], NestedIntFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [graphql_4.Int], { nullable: true })
], NestedIntFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], NestedIntFilter.prototype, "lt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], NestedIntFilter.prototype, "lte", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], NestedIntFilter.prototype, "gt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], NestedIntFilter.prototype, "gte", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedIntFilter_1, { nullable: true })
], NestedIntFilter.prototype, "not", void 0);
NestedIntFilter = NestedIntFilter_1 = __decorate([
    (0, graphql_5.InputType)()
], NestedIntFilter);
exports.NestedIntFilter = NestedIntFilter;
let NestedIntNullableFilter = NestedIntNullableFilter_1 = class NestedIntNullableFilter {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], NestedIntNullableFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [graphql_4.Int], { nullable: true })
], NestedIntNullableFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [graphql_4.Int], { nullable: true })
], NestedIntNullableFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], NestedIntNullableFilter.prototype, "lt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], NestedIntNullableFilter.prototype, "lte", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], NestedIntNullableFilter.prototype, "gt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], NestedIntNullableFilter.prototype, "gte", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedIntNullableFilter_1, { nullable: true })
], NestedIntNullableFilter.prototype, "not", void 0);
NestedIntNullableFilter = NestedIntNullableFilter_1 = __decorate([
    (0, graphql_5.InputType)()
], NestedIntNullableFilter);
exports.NestedIntNullableFilter = NestedIntNullableFilter;
let NestedIntWithAggregatesFilter = NestedIntWithAggregatesFilter_1 = class NestedIntWithAggregatesFilter {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], NestedIntWithAggregatesFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [graphql_4.Int], { nullable: true })
], NestedIntWithAggregatesFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [graphql_4.Int], { nullable: true })
], NestedIntWithAggregatesFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], NestedIntWithAggregatesFilter.prototype, "lt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], NestedIntWithAggregatesFilter.prototype, "lte", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], NestedIntWithAggregatesFilter.prototype, "gt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
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
    (0, graphql_5.InputType)()
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
    (0, graphql_5.InputType)()
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
    (0, graphql_5.InputType)()
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
    (0, graphql_5.InputType)()
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
    (0, graphql_5.InputType)()
], NestedStringWithAggregatesFilter);
exports.NestedStringWithAggregatesFilter = NestedStringWithAggregatesFilter;
let NullableDateTimeFieldUpdateOperationsInput = class NullableDateTimeFieldUpdateOperationsInput {
};
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], NullableDateTimeFieldUpdateOperationsInput.prototype, "set", void 0);
NullableDateTimeFieldUpdateOperationsInput = __decorate([
    (0, graphql_5.InputType)()
], NullableDateTimeFieldUpdateOperationsInput);
exports.NullableDateTimeFieldUpdateOperationsInput = NullableDateTimeFieldUpdateOperationsInput;
let NullableEnumConfirmationStatusFieldUpdateOperationsInput = class NullableEnumConfirmationStatusFieldUpdateOperationsInput {
};
__decorate([
    (0, graphql_1.Field)(() => ConfirmationStatus, { nullable: true })
], NullableEnumConfirmationStatusFieldUpdateOperationsInput.prototype, "set", void 0);
NullableEnumConfirmationStatusFieldUpdateOperationsInput = __decorate([
    (0, graphql_5.InputType)()
], NullableEnumConfirmationStatusFieldUpdateOperationsInput);
exports.NullableEnumConfirmationStatusFieldUpdateOperationsInput = NullableEnumConfirmationStatusFieldUpdateOperationsInput;
let NullableFloatFieldUpdateOperationsInput = class NullableFloatFieldUpdateOperationsInput {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_6.Float, { nullable: true })
], NullableFloatFieldUpdateOperationsInput.prototype, "set", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_6.Float, { nullable: true })
], NullableFloatFieldUpdateOperationsInput.prototype, "increment", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_6.Float, { nullable: true })
], NullableFloatFieldUpdateOperationsInput.prototype, "decrement", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_6.Float, { nullable: true })
], NullableFloatFieldUpdateOperationsInput.prototype, "multiply", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_6.Float, { nullable: true })
], NullableFloatFieldUpdateOperationsInput.prototype, "divide", void 0);
NullableFloatFieldUpdateOperationsInput = __decorate([
    (0, graphql_5.InputType)()
], NullableFloatFieldUpdateOperationsInput);
exports.NullableFloatFieldUpdateOperationsInput = NullableFloatFieldUpdateOperationsInput;
let NullableStringFieldUpdateOperationsInput = class NullableStringFieldUpdateOperationsInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NullableStringFieldUpdateOperationsInput.prototype, "set", void 0);
NullableStringFieldUpdateOperationsInput = __decorate([
    (0, graphql_5.InputType)()
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
    (0, graphql_5.InputType)()
], SortOrderInput);
exports.SortOrderInput = SortOrderInput;
let StringFieldUpdateOperationsInput = class StringFieldUpdateOperationsInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringFieldUpdateOperationsInput.prototype, "set", void 0);
StringFieldUpdateOperationsInput = __decorate([
    (0, graphql_5.InputType)()
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
    (0, graphql_1.Field)(() => NestedStringFilter, { nullable: true })
], StringFilter.prototype, "not", void 0);
StringFilter = __decorate([
    (0, graphql_5.InputType)()
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
    (0, graphql_1.Field)(() => NestedStringNullableFilter, { nullable: true })
], StringNullableFilter.prototype, "not", void 0);
StringNullableFilter = __decorate([
    (0, graphql_5.InputType)()
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
    (0, graphql_5.InputType)()
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
    (0, graphql_5.InputType)()
], StringWithAggregatesFilter);
exports.StringWithAggregatesFilter = StringWithAggregatesFilter;
let AggregateQrCode = class AggregateQrCode {
};
__decorate([
    (0, graphql_1.Field)(() => QrCodeCountAggregate, { nullable: true })
], AggregateQrCode.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => QrCodeAvgAggregate, { nullable: true })
], AggregateQrCode.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => QrCodeSumAggregate, { nullable: true })
], AggregateQrCode.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => QrCodeMinAggregate, { nullable: true })
], AggregateQrCode.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => QrCodeMaxAggregate, { nullable: true })
], AggregateQrCode.prototype, "_max", void 0);
AggregateQrCode = __decorate([
    (0, graphql_2.ObjectType)()
], AggregateQrCode);
exports.AggregateQrCode = AggregateQrCode;
let CreateManyQrCodeArgs = class CreateManyQrCodeArgs {
};
__decorate([
    (0, graphql_1.Field)(() => [QrCodeCreateManyInput], { nullable: false }),
    (0, class_transformer_1.Type)(() => QrCodeCreateManyInput)
], CreateManyQrCodeArgs.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], CreateManyQrCodeArgs.prototype, "skipDuplicates", void 0);
CreateManyQrCodeArgs = __decorate([
    (0, graphql_3.ArgsType)()
], CreateManyQrCodeArgs);
exports.CreateManyQrCodeArgs = CreateManyQrCodeArgs;
let CreateOneQrCodeArgs = class CreateOneQrCodeArgs {
};
__decorate([
    (0, graphql_1.Field)(() => QrCodeCreateInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => QrCodeCreateInput)
], CreateOneQrCodeArgs.prototype, "data", void 0);
CreateOneQrCodeArgs = __decorate([
    (0, graphql_3.ArgsType)()
], CreateOneQrCodeArgs);
exports.CreateOneQrCodeArgs = CreateOneQrCodeArgs;
let DeleteManyQrCodeArgs = class DeleteManyQrCodeArgs {
};
__decorate([
    (0, graphql_1.Field)(() => QrCodeWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => QrCodeWhereInput)
], DeleteManyQrCodeArgs.prototype, "where", void 0);
DeleteManyQrCodeArgs = __decorate([
    (0, graphql_3.ArgsType)()
], DeleteManyQrCodeArgs);
exports.DeleteManyQrCodeArgs = DeleteManyQrCodeArgs;
let DeleteOneQrCodeArgs = class DeleteOneQrCodeArgs {
};
__decorate([
    (0, graphql_1.Field)(() => QrCodeWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => QrCodeWhereUniqueInput)
], DeleteOneQrCodeArgs.prototype, "where", void 0);
DeleteOneQrCodeArgs = __decorate([
    (0, graphql_3.ArgsType)()
], DeleteOneQrCodeArgs);
exports.DeleteOneQrCodeArgs = DeleteOneQrCodeArgs;
let FindFirstQrCodeOrThrowArgs = class FindFirstQrCodeOrThrowArgs {
};
__decorate([
    (0, graphql_1.Field)(() => QrCodeWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => QrCodeWhereInput)
], FindFirstQrCodeOrThrowArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [QrCodeOrderByWithRelationInput], { nullable: true })
], FindFirstQrCodeOrThrowArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => QrCodeWhereUniqueInput, { nullable: true })
], FindFirstQrCodeOrThrowArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], FindFirstQrCodeOrThrowArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], FindFirstQrCodeOrThrowArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => [QrCodeScalarFieldEnum], { nullable: true })
], FindFirstQrCodeOrThrowArgs.prototype, "distinct", void 0);
FindFirstQrCodeOrThrowArgs = __decorate([
    (0, graphql_3.ArgsType)()
], FindFirstQrCodeOrThrowArgs);
exports.FindFirstQrCodeOrThrowArgs = FindFirstQrCodeOrThrowArgs;
let FindFirstQrCodeArgs = class FindFirstQrCodeArgs {
};
__decorate([
    (0, graphql_1.Field)(() => QrCodeWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => QrCodeWhereInput)
], FindFirstQrCodeArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [QrCodeOrderByWithRelationInput], { nullable: true })
], FindFirstQrCodeArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => QrCodeWhereUniqueInput, { nullable: true })
], FindFirstQrCodeArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], FindFirstQrCodeArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], FindFirstQrCodeArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => [QrCodeScalarFieldEnum], { nullable: true })
], FindFirstQrCodeArgs.prototype, "distinct", void 0);
FindFirstQrCodeArgs = __decorate([
    (0, graphql_3.ArgsType)()
], FindFirstQrCodeArgs);
exports.FindFirstQrCodeArgs = FindFirstQrCodeArgs;
let FindManyQrCodeArgs = class FindManyQrCodeArgs {
};
__decorate([
    (0, graphql_1.Field)(() => QrCodeWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => QrCodeWhereInput)
], FindManyQrCodeArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [QrCodeOrderByWithRelationInput], { nullable: true })
], FindManyQrCodeArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => QrCodeWhereUniqueInput, { nullable: true })
], FindManyQrCodeArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], FindManyQrCodeArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], FindManyQrCodeArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => [QrCodeScalarFieldEnum], { nullable: true })
], FindManyQrCodeArgs.prototype, "distinct", void 0);
FindManyQrCodeArgs = __decorate([
    (0, graphql_3.ArgsType)()
], FindManyQrCodeArgs);
exports.FindManyQrCodeArgs = FindManyQrCodeArgs;
let FindUniqueQrCodeOrThrowArgs = class FindUniqueQrCodeOrThrowArgs {
};
__decorate([
    (0, graphql_1.Field)(() => QrCodeWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => QrCodeWhereUniqueInput)
], FindUniqueQrCodeOrThrowArgs.prototype, "where", void 0);
FindUniqueQrCodeOrThrowArgs = __decorate([
    (0, graphql_3.ArgsType)()
], FindUniqueQrCodeOrThrowArgs);
exports.FindUniqueQrCodeOrThrowArgs = FindUniqueQrCodeOrThrowArgs;
let FindUniqueQrCodeArgs = class FindUniqueQrCodeArgs {
};
__decorate([
    (0, graphql_1.Field)(() => QrCodeWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => QrCodeWhereUniqueInput)
], FindUniqueQrCodeArgs.prototype, "where", void 0);
FindUniqueQrCodeArgs = __decorate([
    (0, graphql_3.ArgsType)()
], FindUniqueQrCodeArgs);
exports.FindUniqueQrCodeArgs = FindUniqueQrCodeArgs;
let QrCodeAggregateArgs = class QrCodeAggregateArgs {
};
__decorate([
    (0, graphql_1.Field)(() => QrCodeWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => QrCodeWhereInput)
], QrCodeAggregateArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [QrCodeOrderByWithRelationInput], { nullable: true })
], QrCodeAggregateArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => QrCodeWhereUniqueInput, { nullable: true })
], QrCodeAggregateArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], QrCodeAggregateArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], QrCodeAggregateArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => QrCodeCountAggregateInput, { nullable: true })
], QrCodeAggregateArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => QrCodeAvgAggregateInput, { nullable: true })
], QrCodeAggregateArgs.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => QrCodeSumAggregateInput, { nullable: true })
], QrCodeAggregateArgs.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => QrCodeMinAggregateInput, { nullable: true })
], QrCodeAggregateArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => QrCodeMaxAggregateInput, { nullable: true })
], QrCodeAggregateArgs.prototype, "_max", void 0);
QrCodeAggregateArgs = __decorate([
    (0, graphql_3.ArgsType)()
], QrCodeAggregateArgs);
exports.QrCodeAggregateArgs = QrCodeAggregateArgs;
let QrCodeAvgAggregateInput = class QrCodeAvgAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], QrCodeAvgAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], QrCodeAvgAggregateInput.prototype, "raceConditionValue", void 0);
QrCodeAvgAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], QrCodeAvgAggregateInput);
exports.QrCodeAvgAggregateInput = QrCodeAvgAggregateInput;
let QrCodeAvgAggregate = class QrCodeAvgAggregate {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_6.Float, { nullable: true })
], QrCodeAvgAggregate.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_6.Float, { nullable: true })
], QrCodeAvgAggregate.prototype, "raceConditionValue", void 0);
QrCodeAvgAggregate = __decorate([
    (0, graphql_2.ObjectType)()
], QrCodeAvgAggregate);
exports.QrCodeAvgAggregate = QrCodeAvgAggregate;
let QrCodeAvgOrderByAggregateInput = class QrCodeAvgOrderByAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], QrCodeAvgOrderByAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], QrCodeAvgOrderByAggregateInput.prototype, "raceConditionValue", void 0);
QrCodeAvgOrderByAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], QrCodeAvgOrderByAggregateInput);
exports.QrCodeAvgOrderByAggregateInput = QrCodeAvgOrderByAggregateInput;
let QrCodeCountAggregateInput = class QrCodeCountAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], QrCodeCountAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], QrCodeCountAggregateInput.prototype, "path", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], QrCodeCountAggregateInput.prototype, "scannedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], QrCodeCountAggregateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], QrCodeCountAggregateInput.prototype, "raceConditionValue", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], QrCodeCountAggregateInput.prototype, "guestId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], QrCodeCountAggregateInput.prototype, "scannedByUserId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], QrCodeCountAggregateInput.prototype, "_all", void 0);
QrCodeCountAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], QrCodeCountAggregateInput);
exports.QrCodeCountAggregateInput = QrCodeCountAggregateInput;
let QrCodeCountAggregate = class QrCodeCountAggregate {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], QrCodeCountAggregate.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], QrCodeCountAggregate.prototype, "path", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], QrCodeCountAggregate.prototype, "scannedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], QrCodeCountAggregate.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], QrCodeCountAggregate.prototype, "raceConditionValue", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], QrCodeCountAggregate.prototype, "guestId", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], QrCodeCountAggregate.prototype, "scannedByUserId", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], QrCodeCountAggregate.prototype, "_all", void 0);
QrCodeCountAggregate = __decorate([
    (0, graphql_2.ObjectType)()
], QrCodeCountAggregate);
exports.QrCodeCountAggregate = QrCodeCountAggregate;
let QrCodeCountOrderByAggregateInput = class QrCodeCountOrderByAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], QrCodeCountOrderByAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], QrCodeCountOrderByAggregateInput.prototype, "path", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], QrCodeCountOrderByAggregateInput.prototype, "scannedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], QrCodeCountOrderByAggregateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], QrCodeCountOrderByAggregateInput.prototype, "raceConditionValue", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], QrCodeCountOrderByAggregateInput.prototype, "guestId", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], QrCodeCountOrderByAggregateInput.prototype, "scannedByUserId", void 0);
QrCodeCountOrderByAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], QrCodeCountOrderByAggregateInput);
exports.QrCodeCountOrderByAggregateInput = QrCodeCountOrderByAggregateInput;
let QrCodeCreateManyScannedByInputEnvelope = class QrCodeCreateManyScannedByInputEnvelope {
};
__decorate([
    (0, graphql_1.Field)(() => [QrCodeCreateManyScannedByInput], { nullable: false }),
    (0, class_transformer_1.Type)(() => QrCodeCreateManyScannedByInput)
], QrCodeCreateManyScannedByInputEnvelope.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], QrCodeCreateManyScannedByInputEnvelope.prototype, "skipDuplicates", void 0);
QrCodeCreateManyScannedByInputEnvelope = __decorate([
    (0, graphql_5.InputType)()
], QrCodeCreateManyScannedByInputEnvelope);
exports.QrCodeCreateManyScannedByInputEnvelope = QrCodeCreateManyScannedByInputEnvelope;
let QrCodeCreateManyScannedByInput = class QrCodeCreateManyScannedByInput {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], QrCodeCreateManyScannedByInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], QrCodeCreateManyScannedByInput.prototype, "path", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], QrCodeCreateManyScannedByInput.prototype, "scannedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], QrCodeCreateManyScannedByInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], QrCodeCreateManyScannedByInput.prototype, "raceConditionValue", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], QrCodeCreateManyScannedByInput.prototype, "guestId", void 0);
QrCodeCreateManyScannedByInput = __decorate([
    (0, graphql_5.InputType)()
], QrCodeCreateManyScannedByInput);
exports.QrCodeCreateManyScannedByInput = QrCodeCreateManyScannedByInput;
let QrCodeCreateManyInput = class QrCodeCreateManyInput {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], QrCodeCreateManyInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], QrCodeCreateManyInput.prototype, "path", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], QrCodeCreateManyInput.prototype, "scannedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], QrCodeCreateManyInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], QrCodeCreateManyInput.prototype, "raceConditionValue", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], QrCodeCreateManyInput.prototype, "guestId", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], QrCodeCreateManyInput.prototype, "scannedByUserId", void 0);
QrCodeCreateManyInput = __decorate([
    (0, graphql_5.InputType)()
], QrCodeCreateManyInput);
exports.QrCodeCreateManyInput = QrCodeCreateManyInput;
let QrCodeCreateNestedManyWithoutScannedByInput = class QrCodeCreateNestedManyWithoutScannedByInput {
};
__decorate([
    (0, graphql_1.Field)(() => [QrCodeCreateWithoutScannedByInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => QrCodeCreateWithoutScannedByInput)
], QrCodeCreateNestedManyWithoutScannedByInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [QrCodeCreateOrConnectWithoutScannedByInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => QrCodeCreateOrConnectWithoutScannedByInput)
], QrCodeCreateNestedManyWithoutScannedByInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => QrCodeCreateManyScannedByInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => QrCodeCreateManyScannedByInputEnvelope)
], QrCodeCreateNestedManyWithoutScannedByInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [QrCodeWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => QrCodeWhereUniqueInput)
], QrCodeCreateNestedManyWithoutScannedByInput.prototype, "connect", void 0);
QrCodeCreateNestedManyWithoutScannedByInput = __decorate([
    (0, graphql_5.InputType)()
], QrCodeCreateNestedManyWithoutScannedByInput);
exports.QrCodeCreateNestedManyWithoutScannedByInput = QrCodeCreateNestedManyWithoutScannedByInput;
let QrCodeCreateNestedOneWithoutGuestInput = class QrCodeCreateNestedOneWithoutGuestInput {
};
__decorate([
    (0, graphql_1.Field)(() => QrCodeCreateWithoutGuestInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => QrCodeCreateWithoutGuestInput)
], QrCodeCreateNestedOneWithoutGuestInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => QrCodeCreateOrConnectWithoutGuestInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => QrCodeCreateOrConnectWithoutGuestInput)
], QrCodeCreateNestedOneWithoutGuestInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => QrCodeWhereUniqueInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => QrCodeWhereUniqueInput)
], QrCodeCreateNestedOneWithoutGuestInput.prototype, "connect", void 0);
QrCodeCreateNestedOneWithoutGuestInput = __decorate([
    (0, graphql_5.InputType)()
], QrCodeCreateNestedOneWithoutGuestInput);
exports.QrCodeCreateNestedOneWithoutGuestInput = QrCodeCreateNestedOneWithoutGuestInput;
let QrCodeCreateOrConnectWithoutGuestInput = class QrCodeCreateOrConnectWithoutGuestInput {
};
__decorate([
    (0, graphql_1.Field)(() => QrCodeWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => QrCodeWhereUniqueInput)
], QrCodeCreateOrConnectWithoutGuestInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => QrCodeCreateWithoutGuestInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => QrCodeCreateWithoutGuestInput)
], QrCodeCreateOrConnectWithoutGuestInput.prototype, "create", void 0);
QrCodeCreateOrConnectWithoutGuestInput = __decorate([
    (0, graphql_5.InputType)()
], QrCodeCreateOrConnectWithoutGuestInput);
exports.QrCodeCreateOrConnectWithoutGuestInput = QrCodeCreateOrConnectWithoutGuestInput;
let QrCodeCreateOrConnectWithoutScannedByInput = class QrCodeCreateOrConnectWithoutScannedByInput {
};
__decorate([
    (0, graphql_1.Field)(() => QrCodeWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => QrCodeWhereUniqueInput)
], QrCodeCreateOrConnectWithoutScannedByInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => QrCodeCreateWithoutScannedByInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => QrCodeCreateWithoutScannedByInput)
], QrCodeCreateOrConnectWithoutScannedByInput.prototype, "create", void 0);
QrCodeCreateOrConnectWithoutScannedByInput = __decorate([
    (0, graphql_5.InputType)()
], QrCodeCreateOrConnectWithoutScannedByInput);
exports.QrCodeCreateOrConnectWithoutScannedByInput = QrCodeCreateOrConnectWithoutScannedByInput;
let QrCodeCreateWithoutGuestInput = class QrCodeCreateWithoutGuestInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], QrCodeCreateWithoutGuestInput.prototype, "path", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], QrCodeCreateWithoutGuestInput.prototype, "scannedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], QrCodeCreateWithoutGuestInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], QrCodeCreateWithoutGuestInput.prototype, "raceConditionValue", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserCreateNestedOneWithoutScannedQrsInput, { nullable: true })
], QrCodeCreateWithoutGuestInput.prototype, "scannedBy", void 0);
QrCodeCreateWithoutGuestInput = __decorate([
    (0, graphql_5.InputType)()
], QrCodeCreateWithoutGuestInput);
exports.QrCodeCreateWithoutGuestInput = QrCodeCreateWithoutGuestInput;
let QrCodeCreateWithoutScannedByInput = class QrCodeCreateWithoutScannedByInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], QrCodeCreateWithoutScannedByInput.prototype, "path", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], QrCodeCreateWithoutScannedByInput.prototype, "scannedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], QrCodeCreateWithoutScannedByInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], QrCodeCreateWithoutScannedByInput.prototype, "raceConditionValue", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestCreateNestedOneWithoutQrcodeInput, { nullable: false })
], QrCodeCreateWithoutScannedByInput.prototype, "guest", void 0);
QrCodeCreateWithoutScannedByInput = __decorate([
    (0, graphql_5.InputType)()
], QrCodeCreateWithoutScannedByInput);
exports.QrCodeCreateWithoutScannedByInput = QrCodeCreateWithoutScannedByInput;
let QrCodeCreateInput = class QrCodeCreateInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], QrCodeCreateInput.prototype, "path", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], QrCodeCreateInput.prototype, "scannedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], QrCodeCreateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], QrCodeCreateInput.prototype, "raceConditionValue", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestCreateNestedOneWithoutQrcodeInput, { nullable: false })
], QrCodeCreateInput.prototype, "guest", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserCreateNestedOneWithoutScannedQrsInput, { nullable: true })
], QrCodeCreateInput.prototype, "scannedBy", void 0);
QrCodeCreateInput = __decorate([
    (0, graphql_5.InputType)()
], QrCodeCreateInput);
exports.QrCodeCreateInput = QrCodeCreateInput;
let QrCodeGroupByArgs = class QrCodeGroupByArgs {
};
__decorate([
    (0, graphql_1.Field)(() => QrCodeWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => QrCodeWhereInput)
], QrCodeGroupByArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [QrCodeOrderByWithAggregationInput], { nullable: true })
], QrCodeGroupByArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => [QrCodeScalarFieldEnum], { nullable: false })
], QrCodeGroupByArgs.prototype, "by", void 0);
__decorate([
    (0, graphql_1.Field)(() => QrCodeScalarWhereWithAggregatesInput, { nullable: true })
], QrCodeGroupByArgs.prototype, "having", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], QrCodeGroupByArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], QrCodeGroupByArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => QrCodeCountAggregateInput, { nullable: true })
], QrCodeGroupByArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => QrCodeAvgAggregateInput, { nullable: true })
], QrCodeGroupByArgs.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => QrCodeSumAggregateInput, { nullable: true })
], QrCodeGroupByArgs.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => QrCodeMinAggregateInput, { nullable: true })
], QrCodeGroupByArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => QrCodeMaxAggregateInput, { nullable: true })
], QrCodeGroupByArgs.prototype, "_max", void 0);
QrCodeGroupByArgs = __decorate([
    (0, graphql_3.ArgsType)()
], QrCodeGroupByArgs);
exports.QrCodeGroupByArgs = QrCodeGroupByArgs;
let QrCodeGroupBy = class QrCodeGroupBy {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], QrCodeGroupBy.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], QrCodeGroupBy.prototype, "path", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], QrCodeGroupBy.prototype, "scannedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], QrCodeGroupBy.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], QrCodeGroupBy.prototype, "raceConditionValue", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], QrCodeGroupBy.prototype, "guestId", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], QrCodeGroupBy.prototype, "scannedByUserId", void 0);
__decorate([
    (0, graphql_1.Field)(() => QrCodeCountAggregate, { nullable: true })
], QrCodeGroupBy.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => QrCodeAvgAggregate, { nullable: true })
], QrCodeGroupBy.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => QrCodeSumAggregate, { nullable: true })
], QrCodeGroupBy.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => QrCodeMinAggregate, { nullable: true })
], QrCodeGroupBy.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => QrCodeMaxAggregate, { nullable: true })
], QrCodeGroupBy.prototype, "_max", void 0);
QrCodeGroupBy = __decorate([
    (0, graphql_2.ObjectType)()
], QrCodeGroupBy);
exports.QrCodeGroupBy = QrCodeGroupBy;
let QrCodeListRelationFilter = class QrCodeListRelationFilter {
};
__decorate([
    (0, graphql_1.Field)(() => QrCodeWhereInput, { nullable: true })
], QrCodeListRelationFilter.prototype, "every", void 0);
__decorate([
    (0, graphql_1.Field)(() => QrCodeWhereInput, { nullable: true })
], QrCodeListRelationFilter.prototype, "some", void 0);
__decorate([
    (0, graphql_1.Field)(() => QrCodeWhereInput, { nullable: true })
], QrCodeListRelationFilter.prototype, "none", void 0);
QrCodeListRelationFilter = __decorate([
    (0, graphql_5.InputType)()
], QrCodeListRelationFilter);
exports.QrCodeListRelationFilter = QrCodeListRelationFilter;
let QrCodeMaxAggregateInput = class QrCodeMaxAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], QrCodeMaxAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], QrCodeMaxAggregateInput.prototype, "path", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], QrCodeMaxAggregateInput.prototype, "scannedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], QrCodeMaxAggregateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], QrCodeMaxAggregateInput.prototype, "raceConditionValue", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], QrCodeMaxAggregateInput.prototype, "guestId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], QrCodeMaxAggregateInput.prototype, "scannedByUserId", void 0);
QrCodeMaxAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], QrCodeMaxAggregateInput);
exports.QrCodeMaxAggregateInput = QrCodeMaxAggregateInput;
let QrCodeMaxAggregate = class QrCodeMaxAggregate {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], QrCodeMaxAggregate.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], QrCodeMaxAggregate.prototype, "path", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], QrCodeMaxAggregate.prototype, "scannedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], QrCodeMaxAggregate.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], QrCodeMaxAggregate.prototype, "raceConditionValue", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], QrCodeMaxAggregate.prototype, "guestId", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], QrCodeMaxAggregate.prototype, "scannedByUserId", void 0);
QrCodeMaxAggregate = __decorate([
    (0, graphql_2.ObjectType)()
], QrCodeMaxAggregate);
exports.QrCodeMaxAggregate = QrCodeMaxAggregate;
let QrCodeMaxOrderByAggregateInput = class QrCodeMaxOrderByAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], QrCodeMaxOrderByAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], QrCodeMaxOrderByAggregateInput.prototype, "path", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], QrCodeMaxOrderByAggregateInput.prototype, "scannedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], QrCodeMaxOrderByAggregateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], QrCodeMaxOrderByAggregateInput.prototype, "raceConditionValue", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], QrCodeMaxOrderByAggregateInput.prototype, "guestId", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], QrCodeMaxOrderByAggregateInput.prototype, "scannedByUserId", void 0);
QrCodeMaxOrderByAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], QrCodeMaxOrderByAggregateInput);
exports.QrCodeMaxOrderByAggregateInput = QrCodeMaxOrderByAggregateInput;
let QrCodeMinAggregateInput = class QrCodeMinAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], QrCodeMinAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], QrCodeMinAggregateInput.prototype, "path", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], QrCodeMinAggregateInput.prototype, "scannedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], QrCodeMinAggregateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], QrCodeMinAggregateInput.prototype, "raceConditionValue", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], QrCodeMinAggregateInput.prototype, "guestId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], QrCodeMinAggregateInput.prototype, "scannedByUserId", void 0);
QrCodeMinAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], QrCodeMinAggregateInput);
exports.QrCodeMinAggregateInput = QrCodeMinAggregateInput;
let QrCodeMinAggregate = class QrCodeMinAggregate {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], QrCodeMinAggregate.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], QrCodeMinAggregate.prototype, "path", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], QrCodeMinAggregate.prototype, "scannedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], QrCodeMinAggregate.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], QrCodeMinAggregate.prototype, "raceConditionValue", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], QrCodeMinAggregate.prototype, "guestId", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], QrCodeMinAggregate.prototype, "scannedByUserId", void 0);
QrCodeMinAggregate = __decorate([
    (0, graphql_2.ObjectType)()
], QrCodeMinAggregate);
exports.QrCodeMinAggregate = QrCodeMinAggregate;
let QrCodeMinOrderByAggregateInput = class QrCodeMinOrderByAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], QrCodeMinOrderByAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], QrCodeMinOrderByAggregateInput.prototype, "path", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], QrCodeMinOrderByAggregateInput.prototype, "scannedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], QrCodeMinOrderByAggregateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], QrCodeMinOrderByAggregateInput.prototype, "raceConditionValue", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], QrCodeMinOrderByAggregateInput.prototype, "guestId", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], QrCodeMinOrderByAggregateInput.prototype, "scannedByUserId", void 0);
QrCodeMinOrderByAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], QrCodeMinOrderByAggregateInput);
exports.QrCodeMinOrderByAggregateInput = QrCodeMinOrderByAggregateInput;
let QrCodeNullableRelationFilter = class QrCodeNullableRelationFilter {
};
__decorate([
    (0, graphql_1.Field)(() => QrCodeWhereInput, { nullable: true })
], QrCodeNullableRelationFilter.prototype, "is", void 0);
__decorate([
    (0, graphql_1.Field)(() => QrCodeWhereInput, { nullable: true })
], QrCodeNullableRelationFilter.prototype, "isNot", void 0);
QrCodeNullableRelationFilter = __decorate([
    (0, graphql_5.InputType)()
], QrCodeNullableRelationFilter);
exports.QrCodeNullableRelationFilter = QrCodeNullableRelationFilter;
let QrCodeOrderByRelationAggregateInput = class QrCodeOrderByRelationAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], QrCodeOrderByRelationAggregateInput.prototype, "_count", void 0);
QrCodeOrderByRelationAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], QrCodeOrderByRelationAggregateInput);
exports.QrCodeOrderByRelationAggregateInput = QrCodeOrderByRelationAggregateInput;
let QrCodeOrderByWithAggregationInput = class QrCodeOrderByWithAggregationInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], QrCodeOrderByWithAggregationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], QrCodeOrderByWithAggregationInput.prototype, "path", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrderInput, { nullable: true })
], QrCodeOrderByWithAggregationInput.prototype, "scannedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], QrCodeOrderByWithAggregationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], QrCodeOrderByWithAggregationInput.prototype, "raceConditionValue", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], QrCodeOrderByWithAggregationInput.prototype, "guestId", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrderInput, { nullable: true })
], QrCodeOrderByWithAggregationInput.prototype, "scannedByUserId", void 0);
__decorate([
    (0, graphql_1.Field)(() => QrCodeCountOrderByAggregateInput, { nullable: true })
], QrCodeOrderByWithAggregationInput.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => QrCodeAvgOrderByAggregateInput, { nullable: true })
], QrCodeOrderByWithAggregationInput.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => QrCodeMaxOrderByAggregateInput, { nullable: true })
], QrCodeOrderByWithAggregationInput.prototype, "_max", void 0);
__decorate([
    (0, graphql_1.Field)(() => QrCodeMinOrderByAggregateInput, { nullable: true })
], QrCodeOrderByWithAggregationInput.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => QrCodeSumOrderByAggregateInput, { nullable: true })
], QrCodeOrderByWithAggregationInput.prototype, "_sum", void 0);
QrCodeOrderByWithAggregationInput = __decorate([
    (0, graphql_5.InputType)()
], QrCodeOrderByWithAggregationInput);
exports.QrCodeOrderByWithAggregationInput = QrCodeOrderByWithAggregationInput;
let QrCodeOrderByWithRelationInput = class QrCodeOrderByWithRelationInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], QrCodeOrderByWithRelationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], QrCodeOrderByWithRelationInput.prototype, "path", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrderInput, { nullable: true })
], QrCodeOrderByWithRelationInput.prototype, "scannedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], QrCodeOrderByWithRelationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], QrCodeOrderByWithRelationInput.prototype, "raceConditionValue", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], QrCodeOrderByWithRelationInput.prototype, "guestId", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrderInput, { nullable: true })
], QrCodeOrderByWithRelationInput.prototype, "scannedByUserId", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestOrderByWithRelationInput, { nullable: true })
], QrCodeOrderByWithRelationInput.prototype, "guest", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserOrderByWithRelationInput, { nullable: true })
], QrCodeOrderByWithRelationInput.prototype, "scannedBy", void 0);
QrCodeOrderByWithRelationInput = __decorate([
    (0, graphql_5.InputType)()
], QrCodeOrderByWithRelationInput);
exports.QrCodeOrderByWithRelationInput = QrCodeOrderByWithRelationInput;
let QrCodeScalarWhereWithAggregatesInput = QrCodeScalarWhereWithAggregatesInput_1 = class QrCodeScalarWhereWithAggregatesInput {
};
__decorate([
    (0, graphql_1.Field)(() => [QrCodeScalarWhereWithAggregatesInput_1], { nullable: true })
], QrCodeScalarWhereWithAggregatesInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [QrCodeScalarWhereWithAggregatesInput_1], { nullable: true })
], QrCodeScalarWhereWithAggregatesInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [QrCodeScalarWhereWithAggregatesInput_1], { nullable: true })
], QrCodeScalarWhereWithAggregatesInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => IntWithAggregatesFilter, { nullable: true })
], QrCodeScalarWhereWithAggregatesInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringWithAggregatesFilter, { nullable: true })
], QrCodeScalarWhereWithAggregatesInput.prototype, "path", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeNullableWithAggregatesFilter, { nullable: true })
], QrCodeScalarWhereWithAggregatesInput.prototype, "scannedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeWithAggregatesFilter, { nullable: true })
], QrCodeScalarWhereWithAggregatesInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => IntWithAggregatesFilter, { nullable: true })
], QrCodeScalarWhereWithAggregatesInput.prototype, "raceConditionValue", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringWithAggregatesFilter, { nullable: true })
], QrCodeScalarWhereWithAggregatesInput.prototype, "guestId", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringNullableWithAggregatesFilter, { nullable: true })
], QrCodeScalarWhereWithAggregatesInput.prototype, "scannedByUserId", void 0);
QrCodeScalarWhereWithAggregatesInput = QrCodeScalarWhereWithAggregatesInput_1 = __decorate([
    (0, graphql_5.InputType)()
], QrCodeScalarWhereWithAggregatesInput);
exports.QrCodeScalarWhereWithAggregatesInput = QrCodeScalarWhereWithAggregatesInput;
let QrCodeScalarWhereInput = QrCodeScalarWhereInput_1 = class QrCodeScalarWhereInput {
};
__decorate([
    (0, graphql_1.Field)(() => [QrCodeScalarWhereInput_1], { nullable: true })
], QrCodeScalarWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [QrCodeScalarWhereInput_1], { nullable: true })
], QrCodeScalarWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [QrCodeScalarWhereInput_1], { nullable: true })
], QrCodeScalarWhereInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => IntFilter, { nullable: true })
], QrCodeScalarWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFilter, { nullable: true })
], QrCodeScalarWhereInput.prototype, "path", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeNullableFilter, { nullable: true })
], QrCodeScalarWhereInput.prototype, "scannedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFilter, { nullable: true })
], QrCodeScalarWhereInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => IntFilter, { nullable: true })
], QrCodeScalarWhereInput.prototype, "raceConditionValue", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFilter, { nullable: true })
], QrCodeScalarWhereInput.prototype, "guestId", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringNullableFilter, { nullable: true })
], QrCodeScalarWhereInput.prototype, "scannedByUserId", void 0);
QrCodeScalarWhereInput = QrCodeScalarWhereInput_1 = __decorate([
    (0, graphql_5.InputType)()
], QrCodeScalarWhereInput);
exports.QrCodeScalarWhereInput = QrCodeScalarWhereInput;
let QrCodeSumAggregateInput = class QrCodeSumAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], QrCodeSumAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], QrCodeSumAggregateInput.prototype, "raceConditionValue", void 0);
QrCodeSumAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], QrCodeSumAggregateInput);
exports.QrCodeSumAggregateInput = QrCodeSumAggregateInput;
let QrCodeSumAggregate = class QrCodeSumAggregate {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], QrCodeSumAggregate.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], QrCodeSumAggregate.prototype, "raceConditionValue", void 0);
QrCodeSumAggregate = __decorate([
    (0, graphql_2.ObjectType)()
], QrCodeSumAggregate);
exports.QrCodeSumAggregate = QrCodeSumAggregate;
let QrCodeSumOrderByAggregateInput = class QrCodeSumOrderByAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], QrCodeSumOrderByAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], QrCodeSumOrderByAggregateInput.prototype, "raceConditionValue", void 0);
QrCodeSumOrderByAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], QrCodeSumOrderByAggregateInput);
exports.QrCodeSumOrderByAggregateInput = QrCodeSumOrderByAggregateInput;
let QrCodeUncheckedCreateNestedManyWithoutScannedByInput = class QrCodeUncheckedCreateNestedManyWithoutScannedByInput {
};
__decorate([
    (0, graphql_1.Field)(() => [QrCodeCreateWithoutScannedByInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => QrCodeCreateWithoutScannedByInput)
], QrCodeUncheckedCreateNestedManyWithoutScannedByInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [QrCodeCreateOrConnectWithoutScannedByInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => QrCodeCreateOrConnectWithoutScannedByInput)
], QrCodeUncheckedCreateNestedManyWithoutScannedByInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => QrCodeCreateManyScannedByInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => QrCodeCreateManyScannedByInputEnvelope)
], QrCodeUncheckedCreateNestedManyWithoutScannedByInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [QrCodeWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => QrCodeWhereUniqueInput)
], QrCodeUncheckedCreateNestedManyWithoutScannedByInput.prototype, "connect", void 0);
QrCodeUncheckedCreateNestedManyWithoutScannedByInput = __decorate([
    (0, graphql_5.InputType)()
], QrCodeUncheckedCreateNestedManyWithoutScannedByInput);
exports.QrCodeUncheckedCreateNestedManyWithoutScannedByInput = QrCodeUncheckedCreateNestedManyWithoutScannedByInput;
let QrCodeUncheckedCreateNestedOneWithoutGuestInput = class QrCodeUncheckedCreateNestedOneWithoutGuestInput {
};
__decorate([
    (0, graphql_1.Field)(() => QrCodeCreateWithoutGuestInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => QrCodeCreateWithoutGuestInput)
], QrCodeUncheckedCreateNestedOneWithoutGuestInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => QrCodeCreateOrConnectWithoutGuestInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => QrCodeCreateOrConnectWithoutGuestInput)
], QrCodeUncheckedCreateNestedOneWithoutGuestInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => QrCodeWhereUniqueInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => QrCodeWhereUniqueInput)
], QrCodeUncheckedCreateNestedOneWithoutGuestInput.prototype, "connect", void 0);
QrCodeUncheckedCreateNestedOneWithoutGuestInput = __decorate([
    (0, graphql_5.InputType)()
], QrCodeUncheckedCreateNestedOneWithoutGuestInput);
exports.QrCodeUncheckedCreateNestedOneWithoutGuestInput = QrCodeUncheckedCreateNestedOneWithoutGuestInput;
let QrCodeUncheckedCreateWithoutGuestInput = class QrCodeUncheckedCreateWithoutGuestInput {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], QrCodeUncheckedCreateWithoutGuestInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], QrCodeUncheckedCreateWithoutGuestInput.prototype, "path", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], QrCodeUncheckedCreateWithoutGuestInput.prototype, "scannedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], QrCodeUncheckedCreateWithoutGuestInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], QrCodeUncheckedCreateWithoutGuestInput.prototype, "raceConditionValue", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], QrCodeUncheckedCreateWithoutGuestInput.prototype, "scannedByUserId", void 0);
QrCodeUncheckedCreateWithoutGuestInput = __decorate([
    (0, graphql_5.InputType)()
], QrCodeUncheckedCreateWithoutGuestInput);
exports.QrCodeUncheckedCreateWithoutGuestInput = QrCodeUncheckedCreateWithoutGuestInput;
let QrCodeUncheckedCreateWithoutScannedByInput = class QrCodeUncheckedCreateWithoutScannedByInput {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], QrCodeUncheckedCreateWithoutScannedByInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], QrCodeUncheckedCreateWithoutScannedByInput.prototype, "path", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], QrCodeUncheckedCreateWithoutScannedByInput.prototype, "scannedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], QrCodeUncheckedCreateWithoutScannedByInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], QrCodeUncheckedCreateWithoutScannedByInput.prototype, "raceConditionValue", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], QrCodeUncheckedCreateWithoutScannedByInput.prototype, "guestId", void 0);
QrCodeUncheckedCreateWithoutScannedByInput = __decorate([
    (0, graphql_5.InputType)()
], QrCodeUncheckedCreateWithoutScannedByInput);
exports.QrCodeUncheckedCreateWithoutScannedByInput = QrCodeUncheckedCreateWithoutScannedByInput;
let QrCodeUncheckedCreateInput = class QrCodeUncheckedCreateInput {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], QrCodeUncheckedCreateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], QrCodeUncheckedCreateInput.prototype, "path", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], QrCodeUncheckedCreateInput.prototype, "scannedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], QrCodeUncheckedCreateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], QrCodeUncheckedCreateInput.prototype, "raceConditionValue", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], QrCodeUncheckedCreateInput.prototype, "guestId", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], QrCodeUncheckedCreateInput.prototype, "scannedByUserId", void 0);
QrCodeUncheckedCreateInput = __decorate([
    (0, graphql_5.InputType)()
], QrCodeUncheckedCreateInput);
exports.QrCodeUncheckedCreateInput = QrCodeUncheckedCreateInput;
let QrCodeUncheckedUpdateManyWithoutScannedByNestedInput = class QrCodeUncheckedUpdateManyWithoutScannedByNestedInput {
};
__decorate([
    (0, graphql_1.Field)(() => [QrCodeCreateWithoutScannedByInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => QrCodeCreateWithoutScannedByInput)
], QrCodeUncheckedUpdateManyWithoutScannedByNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [QrCodeCreateOrConnectWithoutScannedByInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => QrCodeCreateOrConnectWithoutScannedByInput)
], QrCodeUncheckedUpdateManyWithoutScannedByNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => [QrCodeUpsertWithWhereUniqueWithoutScannedByInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => QrCodeUpsertWithWhereUniqueWithoutScannedByInput)
], QrCodeUncheckedUpdateManyWithoutScannedByNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => QrCodeCreateManyScannedByInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => QrCodeCreateManyScannedByInputEnvelope)
], QrCodeUncheckedUpdateManyWithoutScannedByNestedInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [QrCodeWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => QrCodeWhereUniqueInput)
], QrCodeUncheckedUpdateManyWithoutScannedByNestedInput.prototype, "set", void 0);
__decorate([
    (0, graphql_1.Field)(() => [QrCodeWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => QrCodeWhereUniqueInput)
], QrCodeUncheckedUpdateManyWithoutScannedByNestedInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [QrCodeWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => QrCodeWhereUniqueInput)
], QrCodeUncheckedUpdateManyWithoutScannedByNestedInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => [QrCodeWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => QrCodeWhereUniqueInput)
], QrCodeUncheckedUpdateManyWithoutScannedByNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [QrCodeUpdateWithWhereUniqueWithoutScannedByInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => QrCodeUpdateWithWhereUniqueWithoutScannedByInput)
], QrCodeUncheckedUpdateManyWithoutScannedByNestedInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => [QrCodeUpdateManyWithWhereWithoutScannedByInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => QrCodeUpdateManyWithWhereWithoutScannedByInput)
], QrCodeUncheckedUpdateManyWithoutScannedByNestedInput.prototype, "updateMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [QrCodeScalarWhereInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => QrCodeScalarWhereInput)
], QrCodeUncheckedUpdateManyWithoutScannedByNestedInput.prototype, "deleteMany", void 0);
QrCodeUncheckedUpdateManyWithoutScannedByNestedInput = __decorate([
    (0, graphql_5.InputType)()
], QrCodeUncheckedUpdateManyWithoutScannedByNestedInput);
exports.QrCodeUncheckedUpdateManyWithoutScannedByNestedInput = QrCodeUncheckedUpdateManyWithoutScannedByNestedInput;
let QrCodeUncheckedUpdateManyWithoutScannedByInput = class QrCodeUncheckedUpdateManyWithoutScannedByInput {
};
__decorate([
    (0, graphql_1.Field)(() => IntFieldUpdateOperationsInput, { nullable: true })
], QrCodeUncheckedUpdateManyWithoutScannedByInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], QrCodeUncheckedUpdateManyWithoutScannedByInput.prototype, "path", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
], QrCodeUncheckedUpdateManyWithoutScannedByInput.prototype, "scannedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], QrCodeUncheckedUpdateManyWithoutScannedByInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => IntFieldUpdateOperationsInput, { nullable: true })
], QrCodeUncheckedUpdateManyWithoutScannedByInput.prototype, "raceConditionValue", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], QrCodeUncheckedUpdateManyWithoutScannedByInput.prototype, "guestId", void 0);
QrCodeUncheckedUpdateManyWithoutScannedByInput = __decorate([
    (0, graphql_5.InputType)()
], QrCodeUncheckedUpdateManyWithoutScannedByInput);
exports.QrCodeUncheckedUpdateManyWithoutScannedByInput = QrCodeUncheckedUpdateManyWithoutScannedByInput;
let QrCodeUncheckedUpdateManyInput = class QrCodeUncheckedUpdateManyInput {
};
__decorate([
    (0, graphql_1.Field)(() => IntFieldUpdateOperationsInput, { nullable: true })
], QrCodeUncheckedUpdateManyInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], QrCodeUncheckedUpdateManyInput.prototype, "path", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
], QrCodeUncheckedUpdateManyInput.prototype, "scannedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], QrCodeUncheckedUpdateManyInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => IntFieldUpdateOperationsInput, { nullable: true })
], QrCodeUncheckedUpdateManyInput.prototype, "raceConditionValue", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], QrCodeUncheckedUpdateManyInput.prototype, "guestId", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], QrCodeUncheckedUpdateManyInput.prototype, "scannedByUserId", void 0);
QrCodeUncheckedUpdateManyInput = __decorate([
    (0, graphql_5.InputType)()
], QrCodeUncheckedUpdateManyInput);
exports.QrCodeUncheckedUpdateManyInput = QrCodeUncheckedUpdateManyInput;
let QrCodeUncheckedUpdateOneWithoutGuestNestedInput = class QrCodeUncheckedUpdateOneWithoutGuestNestedInput {
};
__decorate([
    (0, graphql_1.Field)(() => QrCodeCreateWithoutGuestInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => QrCodeCreateWithoutGuestInput)
], QrCodeUncheckedUpdateOneWithoutGuestNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => QrCodeCreateOrConnectWithoutGuestInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => QrCodeCreateOrConnectWithoutGuestInput)
], QrCodeUncheckedUpdateOneWithoutGuestNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => QrCodeUpsertWithoutGuestInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => QrCodeUpsertWithoutGuestInput)
], QrCodeUncheckedUpdateOneWithoutGuestNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => QrCodeWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => QrCodeWhereInput)
], QrCodeUncheckedUpdateOneWithoutGuestNestedInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => QrCodeWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => QrCodeWhereInput)
], QrCodeUncheckedUpdateOneWithoutGuestNestedInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => QrCodeWhereUniqueInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => QrCodeWhereUniqueInput)
], QrCodeUncheckedUpdateOneWithoutGuestNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => QrCodeUpdateToOneWithWhereWithoutGuestInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => QrCodeUpdateToOneWithWhereWithoutGuestInput)
], QrCodeUncheckedUpdateOneWithoutGuestNestedInput.prototype, "update", void 0);
QrCodeUncheckedUpdateOneWithoutGuestNestedInput = __decorate([
    (0, graphql_5.InputType)()
], QrCodeUncheckedUpdateOneWithoutGuestNestedInput);
exports.QrCodeUncheckedUpdateOneWithoutGuestNestedInput = QrCodeUncheckedUpdateOneWithoutGuestNestedInput;
let QrCodeUncheckedUpdateWithoutGuestInput = class QrCodeUncheckedUpdateWithoutGuestInput {
};
__decorate([
    (0, graphql_1.Field)(() => IntFieldUpdateOperationsInput, { nullable: true })
], QrCodeUncheckedUpdateWithoutGuestInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], QrCodeUncheckedUpdateWithoutGuestInput.prototype, "path", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
], QrCodeUncheckedUpdateWithoutGuestInput.prototype, "scannedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], QrCodeUncheckedUpdateWithoutGuestInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => IntFieldUpdateOperationsInput, { nullable: true })
], QrCodeUncheckedUpdateWithoutGuestInput.prototype, "raceConditionValue", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], QrCodeUncheckedUpdateWithoutGuestInput.prototype, "scannedByUserId", void 0);
QrCodeUncheckedUpdateWithoutGuestInput = __decorate([
    (0, graphql_5.InputType)()
], QrCodeUncheckedUpdateWithoutGuestInput);
exports.QrCodeUncheckedUpdateWithoutGuestInput = QrCodeUncheckedUpdateWithoutGuestInput;
let QrCodeUncheckedUpdateWithoutScannedByInput = class QrCodeUncheckedUpdateWithoutScannedByInput {
};
__decorate([
    (0, graphql_1.Field)(() => IntFieldUpdateOperationsInput, { nullable: true })
], QrCodeUncheckedUpdateWithoutScannedByInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], QrCodeUncheckedUpdateWithoutScannedByInput.prototype, "path", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
], QrCodeUncheckedUpdateWithoutScannedByInput.prototype, "scannedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], QrCodeUncheckedUpdateWithoutScannedByInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => IntFieldUpdateOperationsInput, { nullable: true })
], QrCodeUncheckedUpdateWithoutScannedByInput.prototype, "raceConditionValue", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], QrCodeUncheckedUpdateWithoutScannedByInput.prototype, "guestId", void 0);
QrCodeUncheckedUpdateWithoutScannedByInput = __decorate([
    (0, graphql_5.InputType)()
], QrCodeUncheckedUpdateWithoutScannedByInput);
exports.QrCodeUncheckedUpdateWithoutScannedByInput = QrCodeUncheckedUpdateWithoutScannedByInput;
let QrCodeUncheckedUpdateInput = class QrCodeUncheckedUpdateInput {
};
__decorate([
    (0, graphql_1.Field)(() => IntFieldUpdateOperationsInput, { nullable: true })
], QrCodeUncheckedUpdateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], QrCodeUncheckedUpdateInput.prototype, "path", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
], QrCodeUncheckedUpdateInput.prototype, "scannedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], QrCodeUncheckedUpdateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => IntFieldUpdateOperationsInput, { nullable: true })
], QrCodeUncheckedUpdateInput.prototype, "raceConditionValue", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], QrCodeUncheckedUpdateInput.prototype, "guestId", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], QrCodeUncheckedUpdateInput.prototype, "scannedByUserId", void 0);
QrCodeUncheckedUpdateInput = __decorate([
    (0, graphql_5.InputType)()
], QrCodeUncheckedUpdateInput);
exports.QrCodeUncheckedUpdateInput = QrCodeUncheckedUpdateInput;
let QrCodeUpdateManyMutationInput = class QrCodeUpdateManyMutationInput {
};
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], QrCodeUpdateManyMutationInput.prototype, "path", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
], QrCodeUpdateManyMutationInput.prototype, "scannedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], QrCodeUpdateManyMutationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => IntFieldUpdateOperationsInput, { nullable: true })
], QrCodeUpdateManyMutationInput.prototype, "raceConditionValue", void 0);
QrCodeUpdateManyMutationInput = __decorate([
    (0, graphql_5.InputType)()
], QrCodeUpdateManyMutationInput);
exports.QrCodeUpdateManyMutationInput = QrCodeUpdateManyMutationInput;
let QrCodeUpdateManyWithWhereWithoutScannedByInput = class QrCodeUpdateManyWithWhereWithoutScannedByInput {
};
__decorate([
    (0, graphql_1.Field)(() => QrCodeScalarWhereInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => QrCodeScalarWhereInput)
], QrCodeUpdateManyWithWhereWithoutScannedByInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => QrCodeUpdateManyMutationInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => QrCodeUpdateManyMutationInput)
], QrCodeUpdateManyWithWhereWithoutScannedByInput.prototype, "data", void 0);
QrCodeUpdateManyWithWhereWithoutScannedByInput = __decorate([
    (0, graphql_5.InputType)()
], QrCodeUpdateManyWithWhereWithoutScannedByInput);
exports.QrCodeUpdateManyWithWhereWithoutScannedByInput = QrCodeUpdateManyWithWhereWithoutScannedByInput;
let QrCodeUpdateManyWithoutScannedByNestedInput = class QrCodeUpdateManyWithoutScannedByNestedInput {
};
__decorate([
    (0, graphql_1.Field)(() => [QrCodeCreateWithoutScannedByInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => QrCodeCreateWithoutScannedByInput)
], QrCodeUpdateManyWithoutScannedByNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [QrCodeCreateOrConnectWithoutScannedByInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => QrCodeCreateOrConnectWithoutScannedByInput)
], QrCodeUpdateManyWithoutScannedByNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => [QrCodeUpsertWithWhereUniqueWithoutScannedByInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => QrCodeUpsertWithWhereUniqueWithoutScannedByInput)
], QrCodeUpdateManyWithoutScannedByNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => QrCodeCreateManyScannedByInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => QrCodeCreateManyScannedByInputEnvelope)
], QrCodeUpdateManyWithoutScannedByNestedInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [QrCodeWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => QrCodeWhereUniqueInput)
], QrCodeUpdateManyWithoutScannedByNestedInput.prototype, "set", void 0);
__decorate([
    (0, graphql_1.Field)(() => [QrCodeWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => QrCodeWhereUniqueInput)
], QrCodeUpdateManyWithoutScannedByNestedInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [QrCodeWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => QrCodeWhereUniqueInput)
], QrCodeUpdateManyWithoutScannedByNestedInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => [QrCodeWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => QrCodeWhereUniqueInput)
], QrCodeUpdateManyWithoutScannedByNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [QrCodeUpdateWithWhereUniqueWithoutScannedByInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => QrCodeUpdateWithWhereUniqueWithoutScannedByInput)
], QrCodeUpdateManyWithoutScannedByNestedInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => [QrCodeUpdateManyWithWhereWithoutScannedByInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => QrCodeUpdateManyWithWhereWithoutScannedByInput)
], QrCodeUpdateManyWithoutScannedByNestedInput.prototype, "updateMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [QrCodeScalarWhereInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => QrCodeScalarWhereInput)
], QrCodeUpdateManyWithoutScannedByNestedInput.prototype, "deleteMany", void 0);
QrCodeUpdateManyWithoutScannedByNestedInput = __decorate([
    (0, graphql_5.InputType)()
], QrCodeUpdateManyWithoutScannedByNestedInput);
exports.QrCodeUpdateManyWithoutScannedByNestedInput = QrCodeUpdateManyWithoutScannedByNestedInput;
let QrCodeUpdateOneWithoutGuestNestedInput = class QrCodeUpdateOneWithoutGuestNestedInput {
};
__decorate([
    (0, graphql_1.Field)(() => QrCodeCreateWithoutGuestInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => QrCodeCreateWithoutGuestInput)
], QrCodeUpdateOneWithoutGuestNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => QrCodeCreateOrConnectWithoutGuestInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => QrCodeCreateOrConnectWithoutGuestInput)
], QrCodeUpdateOneWithoutGuestNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => QrCodeUpsertWithoutGuestInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => QrCodeUpsertWithoutGuestInput)
], QrCodeUpdateOneWithoutGuestNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => QrCodeWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => QrCodeWhereInput)
], QrCodeUpdateOneWithoutGuestNestedInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => QrCodeWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => QrCodeWhereInput)
], QrCodeUpdateOneWithoutGuestNestedInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => QrCodeWhereUniqueInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => QrCodeWhereUniqueInput)
], QrCodeUpdateOneWithoutGuestNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => QrCodeUpdateToOneWithWhereWithoutGuestInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => QrCodeUpdateToOneWithWhereWithoutGuestInput)
], QrCodeUpdateOneWithoutGuestNestedInput.prototype, "update", void 0);
QrCodeUpdateOneWithoutGuestNestedInput = __decorate([
    (0, graphql_5.InputType)()
], QrCodeUpdateOneWithoutGuestNestedInput);
exports.QrCodeUpdateOneWithoutGuestNestedInput = QrCodeUpdateOneWithoutGuestNestedInput;
let QrCodeUpdateToOneWithWhereWithoutGuestInput = class QrCodeUpdateToOneWithWhereWithoutGuestInput {
};
__decorate([
    (0, graphql_1.Field)(() => QrCodeWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => QrCodeWhereInput)
], QrCodeUpdateToOneWithWhereWithoutGuestInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => QrCodeUpdateWithoutGuestInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => QrCodeUpdateWithoutGuestInput)
], QrCodeUpdateToOneWithWhereWithoutGuestInput.prototype, "data", void 0);
QrCodeUpdateToOneWithWhereWithoutGuestInput = __decorate([
    (0, graphql_5.InputType)()
], QrCodeUpdateToOneWithWhereWithoutGuestInput);
exports.QrCodeUpdateToOneWithWhereWithoutGuestInput = QrCodeUpdateToOneWithWhereWithoutGuestInput;
let QrCodeUpdateWithWhereUniqueWithoutScannedByInput = class QrCodeUpdateWithWhereUniqueWithoutScannedByInput {
};
__decorate([
    (0, graphql_1.Field)(() => QrCodeWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => QrCodeWhereUniqueInput)
], QrCodeUpdateWithWhereUniqueWithoutScannedByInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => QrCodeUpdateWithoutScannedByInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => QrCodeUpdateWithoutScannedByInput)
], QrCodeUpdateWithWhereUniqueWithoutScannedByInput.prototype, "data", void 0);
QrCodeUpdateWithWhereUniqueWithoutScannedByInput = __decorate([
    (0, graphql_5.InputType)()
], QrCodeUpdateWithWhereUniqueWithoutScannedByInput);
exports.QrCodeUpdateWithWhereUniqueWithoutScannedByInput = QrCodeUpdateWithWhereUniqueWithoutScannedByInput;
let QrCodeUpdateWithoutGuestInput = class QrCodeUpdateWithoutGuestInput {
};
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], QrCodeUpdateWithoutGuestInput.prototype, "path", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
], QrCodeUpdateWithoutGuestInput.prototype, "scannedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], QrCodeUpdateWithoutGuestInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => IntFieldUpdateOperationsInput, { nullable: true })
], QrCodeUpdateWithoutGuestInput.prototype, "raceConditionValue", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserUpdateOneWithoutScannedQrsNestedInput, { nullable: true })
], QrCodeUpdateWithoutGuestInput.prototype, "scannedBy", void 0);
QrCodeUpdateWithoutGuestInput = __decorate([
    (0, graphql_5.InputType)()
], QrCodeUpdateWithoutGuestInput);
exports.QrCodeUpdateWithoutGuestInput = QrCodeUpdateWithoutGuestInput;
let QrCodeUpdateWithoutScannedByInput = class QrCodeUpdateWithoutScannedByInput {
};
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], QrCodeUpdateWithoutScannedByInput.prototype, "path", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
], QrCodeUpdateWithoutScannedByInput.prototype, "scannedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], QrCodeUpdateWithoutScannedByInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => IntFieldUpdateOperationsInput, { nullable: true })
], QrCodeUpdateWithoutScannedByInput.prototype, "raceConditionValue", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestUpdateOneRequiredWithoutQrcodeNestedInput, { nullable: true })
], QrCodeUpdateWithoutScannedByInput.prototype, "guest", void 0);
QrCodeUpdateWithoutScannedByInput = __decorate([
    (0, graphql_5.InputType)()
], QrCodeUpdateWithoutScannedByInput);
exports.QrCodeUpdateWithoutScannedByInput = QrCodeUpdateWithoutScannedByInput;
let QrCodeUpdateInput = class QrCodeUpdateInput {
};
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], QrCodeUpdateInput.prototype, "path", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
], QrCodeUpdateInput.prototype, "scannedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], QrCodeUpdateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => IntFieldUpdateOperationsInput, { nullable: true })
], QrCodeUpdateInput.prototype, "raceConditionValue", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestUpdateOneRequiredWithoutQrcodeNestedInput, { nullable: true })
], QrCodeUpdateInput.prototype, "guest", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserUpdateOneWithoutScannedQrsNestedInput, { nullable: true })
], QrCodeUpdateInput.prototype, "scannedBy", void 0);
QrCodeUpdateInput = __decorate([
    (0, graphql_5.InputType)()
], QrCodeUpdateInput);
exports.QrCodeUpdateInput = QrCodeUpdateInput;
let QrCodeUpsertWithWhereUniqueWithoutScannedByInput = class QrCodeUpsertWithWhereUniqueWithoutScannedByInput {
};
__decorate([
    (0, graphql_1.Field)(() => QrCodeWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => QrCodeWhereUniqueInput)
], QrCodeUpsertWithWhereUniqueWithoutScannedByInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => QrCodeUpdateWithoutScannedByInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => QrCodeUpdateWithoutScannedByInput)
], QrCodeUpsertWithWhereUniqueWithoutScannedByInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => QrCodeCreateWithoutScannedByInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => QrCodeCreateWithoutScannedByInput)
], QrCodeUpsertWithWhereUniqueWithoutScannedByInput.prototype, "create", void 0);
QrCodeUpsertWithWhereUniqueWithoutScannedByInput = __decorate([
    (0, graphql_5.InputType)()
], QrCodeUpsertWithWhereUniqueWithoutScannedByInput);
exports.QrCodeUpsertWithWhereUniqueWithoutScannedByInput = QrCodeUpsertWithWhereUniqueWithoutScannedByInput;
let QrCodeUpsertWithoutGuestInput = class QrCodeUpsertWithoutGuestInput {
};
__decorate([
    (0, graphql_1.Field)(() => QrCodeUpdateWithoutGuestInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => QrCodeUpdateWithoutGuestInput)
], QrCodeUpsertWithoutGuestInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => QrCodeCreateWithoutGuestInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => QrCodeCreateWithoutGuestInput)
], QrCodeUpsertWithoutGuestInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => QrCodeWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => QrCodeWhereInput)
], QrCodeUpsertWithoutGuestInput.prototype, "where", void 0);
QrCodeUpsertWithoutGuestInput = __decorate([
    (0, graphql_5.InputType)()
], QrCodeUpsertWithoutGuestInput);
exports.QrCodeUpsertWithoutGuestInput = QrCodeUpsertWithoutGuestInput;
let QrCodeWhereUniqueInput = class QrCodeWhereUniqueInput {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], QrCodeWhereUniqueInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], QrCodeWhereUniqueInput.prototype, "guestId", void 0);
__decorate([
    (0, graphql_1.Field)(() => [QrCodeWhereInput], { nullable: true })
], QrCodeWhereUniqueInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [QrCodeWhereInput], { nullable: true })
], QrCodeWhereUniqueInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [QrCodeWhereInput], { nullable: true })
], QrCodeWhereUniqueInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFilter, { nullable: true })
], QrCodeWhereUniqueInput.prototype, "path", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeNullableFilter, { nullable: true })
], QrCodeWhereUniqueInput.prototype, "scannedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFilter, { nullable: true })
], QrCodeWhereUniqueInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => IntFilter, { nullable: true })
], QrCodeWhereUniqueInput.prototype, "raceConditionValue", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringNullableFilter, { nullable: true })
], QrCodeWhereUniqueInput.prototype, "scannedByUserId", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestRelationFilter, { nullable: true })
], QrCodeWhereUniqueInput.prototype, "guest", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserNullableRelationFilter, { nullable: true })
], QrCodeWhereUniqueInput.prototype, "scannedBy", void 0);
QrCodeWhereUniqueInput = __decorate([
    (0, graphql_5.InputType)()
], QrCodeWhereUniqueInput);
exports.QrCodeWhereUniqueInput = QrCodeWhereUniqueInput;
let QrCodeWhereInput = QrCodeWhereInput_1 = class QrCodeWhereInput {
};
__decorate([
    (0, graphql_1.Field)(() => [QrCodeWhereInput_1], { nullable: true })
], QrCodeWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [QrCodeWhereInput_1], { nullable: true })
], QrCodeWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [QrCodeWhereInput_1], { nullable: true })
], QrCodeWhereInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => IntFilter, { nullable: true })
], QrCodeWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFilter, { nullable: true })
], QrCodeWhereInput.prototype, "path", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeNullableFilter, { nullable: true })
], QrCodeWhereInput.prototype, "scannedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFilter, { nullable: true })
], QrCodeWhereInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => IntFilter, { nullable: true })
], QrCodeWhereInput.prototype, "raceConditionValue", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFilter, { nullable: true })
], QrCodeWhereInput.prototype, "guestId", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringNullableFilter, { nullable: true })
], QrCodeWhereInput.prototype, "scannedByUserId", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestRelationFilter, { nullable: true })
], QrCodeWhereInput.prototype, "guest", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserNullableRelationFilter, { nullable: true })
], QrCodeWhereInput.prototype, "scannedBy", void 0);
QrCodeWhereInput = QrCodeWhereInput_1 = __decorate([
    (0, graphql_5.InputType)()
], QrCodeWhereInput);
exports.QrCodeWhereInput = QrCodeWhereInput;
let QrCode = class QrCode {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], QrCode.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], QrCode.prototype, "path", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], QrCode.prototype, "scannedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], QrCode.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false, defaultValue: 0 })
], QrCode.prototype, "raceConditionValue", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], QrCode.prototype, "guestId", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], QrCode.prototype, "scannedByUserId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Guest, { nullable: false })
], QrCode.prototype, "guest", void 0);
__decorate([
    (0, graphql_1.Field)(() => User, { nullable: true })
], QrCode.prototype, "scannedBy", void 0);
QrCode = __decorate([
    (0, graphql_2.ObjectType)()
], QrCode);
exports.QrCode = QrCode;
let UpdateManyQrCodeArgs = class UpdateManyQrCodeArgs {
};
__decorate([
    (0, graphql_1.Field)(() => QrCodeUpdateManyMutationInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => QrCodeUpdateManyMutationInput)
], UpdateManyQrCodeArgs.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => QrCodeWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => QrCodeWhereInput)
], UpdateManyQrCodeArgs.prototype, "where", void 0);
UpdateManyQrCodeArgs = __decorate([
    (0, graphql_3.ArgsType)()
], UpdateManyQrCodeArgs);
exports.UpdateManyQrCodeArgs = UpdateManyQrCodeArgs;
let UpdateOneQrCodeArgs = class UpdateOneQrCodeArgs {
};
__decorate([
    (0, graphql_1.Field)(() => QrCodeUpdateInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => QrCodeUpdateInput)
], UpdateOneQrCodeArgs.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => QrCodeWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => QrCodeWhereUniqueInput)
], UpdateOneQrCodeArgs.prototype, "where", void 0);
UpdateOneQrCodeArgs = __decorate([
    (0, graphql_3.ArgsType)()
], UpdateOneQrCodeArgs);
exports.UpdateOneQrCodeArgs = UpdateOneQrCodeArgs;
let UpsertOneQrCodeArgs = class UpsertOneQrCodeArgs {
};
__decorate([
    (0, graphql_1.Field)(() => QrCodeWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => QrCodeWhereUniqueInput)
], UpsertOneQrCodeArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => QrCodeCreateInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => QrCodeCreateInput)
], UpsertOneQrCodeArgs.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => QrCodeUpdateInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => QrCodeUpdateInput)
], UpsertOneQrCodeArgs.prototype, "update", void 0);
UpsertOneQrCodeArgs = __decorate([
    (0, graphql_3.ArgsType)()
], UpsertOneQrCodeArgs);
exports.UpsertOneQrCodeArgs = UpsertOneQrCodeArgs;
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
    (0, graphql_2.ObjectType)()
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
    (0, graphql_3.ArgsType)()
], CreateManyUserArgs);
exports.CreateManyUserArgs = CreateManyUserArgs;
let CreateOneUserArgs = class CreateOneUserArgs {
};
__decorate([
    (0, graphql_1.Field)(() => UserCreateInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => UserCreateInput)
], CreateOneUserArgs.prototype, "data", void 0);
CreateOneUserArgs = __decorate([
    (0, graphql_3.ArgsType)()
], CreateOneUserArgs);
exports.CreateOneUserArgs = CreateOneUserArgs;
let DeleteManyUserArgs = class DeleteManyUserArgs {
};
__decorate([
    (0, graphql_1.Field)(() => UserWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => UserWhereInput)
], DeleteManyUserArgs.prototype, "where", void 0);
DeleteManyUserArgs = __decorate([
    (0, graphql_3.ArgsType)()
], DeleteManyUserArgs);
exports.DeleteManyUserArgs = DeleteManyUserArgs;
let DeleteOneUserArgs = class DeleteOneUserArgs {
};
__decorate([
    (0, graphql_1.Field)(() => UserWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => UserWhereUniqueInput)
], DeleteOneUserArgs.prototype, "where", void 0);
DeleteOneUserArgs = __decorate([
    (0, graphql_3.ArgsType)()
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
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], FindFirstUserOrThrowArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], FindFirstUserOrThrowArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => [UserScalarFieldEnum], { nullable: true })
], FindFirstUserOrThrowArgs.prototype, "distinct", void 0);
FindFirstUserOrThrowArgs = __decorate([
    (0, graphql_3.ArgsType)()
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
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], FindFirstUserArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], FindFirstUserArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => [UserScalarFieldEnum], { nullable: true })
], FindFirstUserArgs.prototype, "distinct", void 0);
FindFirstUserArgs = __decorate([
    (0, graphql_3.ArgsType)()
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
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], FindManyUserArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], FindManyUserArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => [UserScalarFieldEnum], { nullable: true })
], FindManyUserArgs.prototype, "distinct", void 0);
FindManyUserArgs = __decorate([
    (0, graphql_3.ArgsType)()
], FindManyUserArgs);
exports.FindManyUserArgs = FindManyUserArgs;
let FindUniqueUserOrThrowArgs = class FindUniqueUserOrThrowArgs {
};
__decorate([
    (0, graphql_1.Field)(() => UserWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => UserWhereUniqueInput)
], FindUniqueUserOrThrowArgs.prototype, "where", void 0);
FindUniqueUserOrThrowArgs = __decorate([
    (0, graphql_3.ArgsType)()
], FindUniqueUserOrThrowArgs);
exports.FindUniqueUserOrThrowArgs = FindUniqueUserOrThrowArgs;
let FindUniqueUserArgs = class FindUniqueUserArgs {
};
__decorate([
    (0, graphql_1.Field)(() => UserWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => UserWhereUniqueInput)
], FindUniqueUserArgs.prototype, "where", void 0);
FindUniqueUserArgs = __decorate([
    (0, graphql_3.ArgsType)()
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
    (0, graphql_3.ArgsType)()
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
    (0, graphql_3.ArgsType)()
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
    (0, graphql_3.ArgsType)()
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
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], UserAggregateArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
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
    (0, graphql_3.ArgsType)()
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
], UserCountAggregateInput.prototype, "_all", void 0);
UserCountAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], UserCountAggregateInput);
exports.UserCountAggregateInput = UserCountAggregateInput;
let UserCountAggregate = class UserCountAggregate {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], UserCountAggregate.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], UserCountAggregate.prototype, "fullName", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], UserCountAggregate.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], UserCountAggregate.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], UserCountAggregate.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], UserCountAggregate.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], UserCountAggregate.prototype, "deletedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], UserCountAggregate.prototype, "role", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], UserCountAggregate.prototype, "_all", void 0);
UserCountAggregate = __decorate([
    (0, graphql_2.ObjectType)()
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
UserCountOrderByAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], UserCountOrderByAggregateInput);
exports.UserCountOrderByAggregateInput = UserCountOrderByAggregateInput;
let UserCount = class UserCount {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], UserCount.prototype, "scannedQrs", void 0);
UserCount = __decorate([
    (0, graphql_2.ObjectType)()
], UserCount);
exports.UserCount = UserCount;
let UserCreateManyInput = class UserCreateManyInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], UserCreateManyInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], UserCreateManyInput.prototype, "fullName", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], UserCreateManyInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], UserCreateManyInput.prototype, "password", void 0);
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
UserCreateManyInput = __decorate([
    (0, graphql_5.InputType)()
], UserCreateManyInput);
exports.UserCreateManyInput = UserCreateManyInput;
let UserCreateNestedOneWithoutScannedQrsInput = class UserCreateNestedOneWithoutScannedQrsInput {
};
__decorate([
    (0, graphql_1.Field)(() => UserCreateWithoutScannedQrsInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => UserCreateWithoutScannedQrsInput)
], UserCreateNestedOneWithoutScannedQrsInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserCreateOrConnectWithoutScannedQrsInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => UserCreateOrConnectWithoutScannedQrsInput)
], UserCreateNestedOneWithoutScannedQrsInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserWhereUniqueInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => UserWhereUniqueInput)
], UserCreateNestedOneWithoutScannedQrsInput.prototype, "connect", void 0);
UserCreateNestedOneWithoutScannedQrsInput = __decorate([
    (0, graphql_5.InputType)()
], UserCreateNestedOneWithoutScannedQrsInput);
exports.UserCreateNestedOneWithoutScannedQrsInput = UserCreateNestedOneWithoutScannedQrsInput;
let UserCreateOrConnectWithoutScannedQrsInput = class UserCreateOrConnectWithoutScannedQrsInput {
};
__decorate([
    (0, graphql_1.Field)(() => UserWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => UserWhereUniqueInput)
], UserCreateOrConnectWithoutScannedQrsInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserCreateWithoutScannedQrsInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => UserCreateWithoutScannedQrsInput)
], UserCreateOrConnectWithoutScannedQrsInput.prototype, "create", void 0);
UserCreateOrConnectWithoutScannedQrsInput = __decorate([
    (0, graphql_5.InputType)()
], UserCreateOrConnectWithoutScannedQrsInput);
exports.UserCreateOrConnectWithoutScannedQrsInput = UserCreateOrConnectWithoutScannedQrsInput;
let UserCreateWithoutScannedQrsInput = class UserCreateWithoutScannedQrsInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], UserCreateWithoutScannedQrsInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], UserCreateWithoutScannedQrsInput.prototype, "fullName", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], UserCreateWithoutScannedQrsInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], UserCreateWithoutScannedQrsInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], UserCreateWithoutScannedQrsInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], UserCreateWithoutScannedQrsInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], UserCreateWithoutScannedQrsInput.prototype, "deletedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserRole, { nullable: false })
], UserCreateWithoutScannedQrsInput.prototype, "role", void 0);
UserCreateWithoutScannedQrsInput = __decorate([
    (0, graphql_5.InputType)()
], UserCreateWithoutScannedQrsInput);
exports.UserCreateWithoutScannedQrsInput = UserCreateWithoutScannedQrsInput;
let UserCreateInput = class UserCreateInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], UserCreateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], UserCreateInput.prototype, "fullName", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], UserCreateInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], UserCreateInput.prototype, "password", void 0);
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
    (0, graphql_1.Field)(() => QrCodeCreateNestedManyWithoutScannedByInput, { nullable: true })
], UserCreateInput.prototype, "scannedQrs", void 0);
UserCreateInput = __decorate([
    (0, graphql_5.InputType)()
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
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], UserGroupByArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
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
    (0, graphql_3.ArgsType)()
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
    (0, graphql_1.Field)(() => String, { nullable: true })
], UserGroupBy.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], UserGroupBy.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], UserGroupBy.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], UserGroupBy.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], UserGroupBy.prototype, "deletedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserRole, { nullable: false })
], UserGroupBy.prototype, "role", void 0);
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
    (0, graphql_2.ObjectType)()
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
UserMaxAggregateInput = __decorate([
    (0, graphql_5.InputType)()
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
UserMaxAggregate = __decorate([
    (0, graphql_2.ObjectType)()
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
UserMaxOrderByAggregateInput = __decorate([
    (0, graphql_5.InputType)()
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
UserMinAggregateInput = __decorate([
    (0, graphql_5.InputType)()
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
UserMinAggregate = __decorate([
    (0, graphql_2.ObjectType)()
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
UserMinOrderByAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], UserMinOrderByAggregateInput);
exports.UserMinOrderByAggregateInput = UserMinOrderByAggregateInput;
let UserNullableRelationFilter = class UserNullableRelationFilter {
};
__decorate([
    (0, graphql_1.Field)(() => UserWhereInput, { nullable: true })
], UserNullableRelationFilter.prototype, "is", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserWhereInput, { nullable: true })
], UserNullableRelationFilter.prototype, "isNot", void 0);
UserNullableRelationFilter = __decorate([
    (0, graphql_5.InputType)()
], UserNullableRelationFilter);
exports.UserNullableRelationFilter = UserNullableRelationFilter;
let UserOrderByWithAggregationInput = class UserOrderByWithAggregationInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserOrderByWithAggregationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserOrderByWithAggregationInput.prototype, "fullName", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrderInput, { nullable: true })
], UserOrderByWithAggregationInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrderInput, { nullable: true })
], UserOrderByWithAggregationInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserOrderByWithAggregationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrderInput, { nullable: true })
], UserOrderByWithAggregationInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrderInput, { nullable: true })
], UserOrderByWithAggregationInput.prototype, "deletedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserOrderByWithAggregationInput.prototype, "role", void 0);
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
    (0, graphql_5.InputType)()
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
    (0, graphql_1.Field)(() => SortOrderInput, { nullable: true })
], UserOrderByWithRelationInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrderInput, { nullable: true })
], UserOrderByWithRelationInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserOrderByWithRelationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrderInput, { nullable: true })
], UserOrderByWithRelationInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrderInput, { nullable: true })
], UserOrderByWithRelationInput.prototype, "deletedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserOrderByWithRelationInput.prototype, "role", void 0);
__decorate([
    (0, graphql_1.Field)(() => QrCodeOrderByRelationAggregateInput, { nullable: true })
], UserOrderByWithRelationInput.prototype, "scannedQrs", void 0);
UserOrderByWithRelationInput = __decorate([
    (0, graphql_5.InputType)()
], UserOrderByWithRelationInput);
exports.UserOrderByWithRelationInput = UserOrderByWithRelationInput;
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
    (0, graphql_1.Field)(() => StringNullableWithAggregatesFilter, { nullable: true })
], UserScalarWhereWithAggregatesInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringNullableWithAggregatesFilter, { nullable: true })
], UserScalarWhereWithAggregatesInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeWithAggregatesFilter, { nullable: true })
], UserScalarWhereWithAggregatesInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeNullableWithAggregatesFilter, { nullable: true })
], UserScalarWhereWithAggregatesInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeNullableWithAggregatesFilter, { nullable: true })
], UserScalarWhereWithAggregatesInput.prototype, "deletedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => EnumUserRoleWithAggregatesFilter, { nullable: true })
], UserScalarWhereWithAggregatesInput.prototype, "role", void 0);
UserScalarWhereWithAggregatesInput = UserScalarWhereWithAggregatesInput_1 = __decorate([
    (0, graphql_5.InputType)()
], UserScalarWhereWithAggregatesInput);
exports.UserScalarWhereWithAggregatesInput = UserScalarWhereWithAggregatesInput;
let UserUncheckedCreateWithoutScannedQrsInput = class UserUncheckedCreateWithoutScannedQrsInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], UserUncheckedCreateWithoutScannedQrsInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], UserUncheckedCreateWithoutScannedQrsInput.prototype, "fullName", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], UserUncheckedCreateWithoutScannedQrsInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], UserUncheckedCreateWithoutScannedQrsInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], UserUncheckedCreateWithoutScannedQrsInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], UserUncheckedCreateWithoutScannedQrsInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], UserUncheckedCreateWithoutScannedQrsInput.prototype, "deletedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserRole, { nullable: false })
], UserUncheckedCreateWithoutScannedQrsInput.prototype, "role", void 0);
UserUncheckedCreateWithoutScannedQrsInput = __decorate([
    (0, graphql_5.InputType)()
], UserUncheckedCreateWithoutScannedQrsInput);
exports.UserUncheckedCreateWithoutScannedQrsInput = UserUncheckedCreateWithoutScannedQrsInput;
let UserUncheckedCreateInput = class UserUncheckedCreateInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], UserUncheckedCreateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], UserUncheckedCreateInput.prototype, "fullName", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], UserUncheckedCreateInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], UserUncheckedCreateInput.prototype, "password", void 0);
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
    (0, graphql_1.Field)(() => QrCodeUncheckedCreateNestedManyWithoutScannedByInput, { nullable: true })
], UserUncheckedCreateInput.prototype, "scannedQrs", void 0);
UserUncheckedCreateInput = __decorate([
    (0, graphql_5.InputType)()
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
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], UserUncheckedUpdateManyInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], UserUncheckedUpdateManyInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], UserUncheckedUpdateManyInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
], UserUncheckedUpdateManyInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
], UserUncheckedUpdateManyInput.prototype, "deletedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => EnumUserRoleFieldUpdateOperationsInput, { nullable: true })
], UserUncheckedUpdateManyInput.prototype, "role", void 0);
UserUncheckedUpdateManyInput = __decorate([
    (0, graphql_5.InputType)()
], UserUncheckedUpdateManyInput);
exports.UserUncheckedUpdateManyInput = UserUncheckedUpdateManyInput;
let UserUncheckedUpdateWithoutScannedQrsInput = class UserUncheckedUpdateWithoutScannedQrsInput {
};
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], UserUncheckedUpdateWithoutScannedQrsInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], UserUncheckedUpdateWithoutScannedQrsInput.prototype, "fullName", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], UserUncheckedUpdateWithoutScannedQrsInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], UserUncheckedUpdateWithoutScannedQrsInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], UserUncheckedUpdateWithoutScannedQrsInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
], UserUncheckedUpdateWithoutScannedQrsInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
], UserUncheckedUpdateWithoutScannedQrsInput.prototype, "deletedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => EnumUserRoleFieldUpdateOperationsInput, { nullable: true })
], UserUncheckedUpdateWithoutScannedQrsInput.prototype, "role", void 0);
UserUncheckedUpdateWithoutScannedQrsInput = __decorate([
    (0, graphql_5.InputType)()
], UserUncheckedUpdateWithoutScannedQrsInput);
exports.UserUncheckedUpdateWithoutScannedQrsInput = UserUncheckedUpdateWithoutScannedQrsInput;
let UserUncheckedUpdateInput = class UserUncheckedUpdateInput {
};
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], UserUncheckedUpdateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], UserUncheckedUpdateInput.prototype, "fullName", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], UserUncheckedUpdateInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], UserUncheckedUpdateInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], UserUncheckedUpdateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
], UserUncheckedUpdateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
], UserUncheckedUpdateInput.prototype, "deletedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => EnumUserRoleFieldUpdateOperationsInput, { nullable: true })
], UserUncheckedUpdateInput.prototype, "role", void 0);
__decorate([
    (0, graphql_1.Field)(() => QrCodeUncheckedUpdateManyWithoutScannedByNestedInput, { nullable: true })
], UserUncheckedUpdateInput.prototype, "scannedQrs", void 0);
UserUncheckedUpdateInput = __decorate([
    (0, graphql_5.InputType)()
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
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], UserUpdateManyMutationInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], UserUpdateManyMutationInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], UserUpdateManyMutationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
], UserUpdateManyMutationInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
], UserUpdateManyMutationInput.prototype, "deletedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => EnumUserRoleFieldUpdateOperationsInput, { nullable: true })
], UserUpdateManyMutationInput.prototype, "role", void 0);
UserUpdateManyMutationInput = __decorate([
    (0, graphql_5.InputType)()
], UserUpdateManyMutationInput);
exports.UserUpdateManyMutationInput = UserUpdateManyMutationInput;
let UserUpdateOneWithoutScannedQrsNestedInput = class UserUpdateOneWithoutScannedQrsNestedInput {
};
__decorate([
    (0, graphql_1.Field)(() => UserCreateWithoutScannedQrsInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => UserCreateWithoutScannedQrsInput)
], UserUpdateOneWithoutScannedQrsNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserCreateOrConnectWithoutScannedQrsInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => UserCreateOrConnectWithoutScannedQrsInput)
], UserUpdateOneWithoutScannedQrsNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserUpsertWithoutScannedQrsInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => UserUpsertWithoutScannedQrsInput)
], UserUpdateOneWithoutScannedQrsNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => UserWhereInput)
], UserUpdateOneWithoutScannedQrsNestedInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => UserWhereInput)
], UserUpdateOneWithoutScannedQrsNestedInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserWhereUniqueInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => UserWhereUniqueInput)
], UserUpdateOneWithoutScannedQrsNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserUpdateToOneWithWhereWithoutScannedQrsInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => UserUpdateToOneWithWhereWithoutScannedQrsInput)
], UserUpdateOneWithoutScannedQrsNestedInput.prototype, "update", void 0);
UserUpdateOneWithoutScannedQrsNestedInput = __decorate([
    (0, graphql_5.InputType)()
], UserUpdateOneWithoutScannedQrsNestedInput);
exports.UserUpdateOneWithoutScannedQrsNestedInput = UserUpdateOneWithoutScannedQrsNestedInput;
let UserUpdateToOneWithWhereWithoutScannedQrsInput = class UserUpdateToOneWithWhereWithoutScannedQrsInput {
};
__decorate([
    (0, graphql_1.Field)(() => UserWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => UserWhereInput)
], UserUpdateToOneWithWhereWithoutScannedQrsInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserUpdateWithoutScannedQrsInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => UserUpdateWithoutScannedQrsInput)
], UserUpdateToOneWithWhereWithoutScannedQrsInput.prototype, "data", void 0);
UserUpdateToOneWithWhereWithoutScannedQrsInput = __decorate([
    (0, graphql_5.InputType)()
], UserUpdateToOneWithWhereWithoutScannedQrsInput);
exports.UserUpdateToOneWithWhereWithoutScannedQrsInput = UserUpdateToOneWithWhereWithoutScannedQrsInput;
let UserUpdateWithoutScannedQrsInput = class UserUpdateWithoutScannedQrsInput {
};
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], UserUpdateWithoutScannedQrsInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], UserUpdateWithoutScannedQrsInput.prototype, "fullName", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], UserUpdateWithoutScannedQrsInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], UserUpdateWithoutScannedQrsInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], UserUpdateWithoutScannedQrsInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
], UserUpdateWithoutScannedQrsInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
], UserUpdateWithoutScannedQrsInput.prototype, "deletedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => EnumUserRoleFieldUpdateOperationsInput, { nullable: true })
], UserUpdateWithoutScannedQrsInput.prototype, "role", void 0);
UserUpdateWithoutScannedQrsInput = __decorate([
    (0, graphql_5.InputType)()
], UserUpdateWithoutScannedQrsInput);
exports.UserUpdateWithoutScannedQrsInput = UserUpdateWithoutScannedQrsInput;
let UserUpdateInput = class UserUpdateInput {
};
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], UserUpdateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], UserUpdateInput.prototype, "fullName", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], UserUpdateInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], UserUpdateInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], UserUpdateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
], UserUpdateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
], UserUpdateInput.prototype, "deletedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => EnumUserRoleFieldUpdateOperationsInput, { nullable: true })
], UserUpdateInput.prototype, "role", void 0);
__decorate([
    (0, graphql_1.Field)(() => QrCodeUpdateManyWithoutScannedByNestedInput, { nullable: true })
], UserUpdateInput.prototype, "scannedQrs", void 0);
UserUpdateInput = __decorate([
    (0, graphql_5.InputType)()
], UserUpdateInput);
exports.UserUpdateInput = UserUpdateInput;
let UserUpsertWithoutScannedQrsInput = class UserUpsertWithoutScannedQrsInput {
};
__decorate([
    (0, graphql_1.Field)(() => UserUpdateWithoutScannedQrsInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => UserUpdateWithoutScannedQrsInput)
], UserUpsertWithoutScannedQrsInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserCreateWithoutScannedQrsInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => UserCreateWithoutScannedQrsInput)
], UserUpsertWithoutScannedQrsInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => UserWhereInput)
], UserUpsertWithoutScannedQrsInput.prototype, "where", void 0);
UserUpsertWithoutScannedQrsInput = __decorate([
    (0, graphql_5.InputType)()
], UserUpsertWithoutScannedQrsInput);
exports.UserUpsertWithoutScannedQrsInput = UserUpsertWithoutScannedQrsInput;
let UserWhereUniqueInput = class UserWhereUniqueInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], UserWhereUniqueInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], UserWhereUniqueInput.prototype, "email", void 0);
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
    (0, graphql_1.Field)(() => StringNullableFilter, { nullable: true })
], UserWhereUniqueInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFilter, { nullable: true })
], UserWhereUniqueInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeNullableFilter, { nullable: true })
], UserWhereUniqueInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeNullableFilter, { nullable: true })
], UserWhereUniqueInput.prototype, "deletedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => EnumUserRoleFilter, { nullable: true })
], UserWhereUniqueInput.prototype, "role", void 0);
__decorate([
    (0, graphql_1.Field)(() => QrCodeListRelationFilter, { nullable: true })
], UserWhereUniqueInput.prototype, "scannedQrs", void 0);
UserWhereUniqueInput = __decorate([
    (0, graphql_5.InputType)()
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
    (0, graphql_1.Field)(() => StringNullableFilter, { nullable: true })
], UserWhereInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringNullableFilter, { nullable: true })
], UserWhereInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFilter, { nullable: true })
], UserWhereInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeNullableFilter, { nullable: true })
], UserWhereInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeNullableFilter, { nullable: true })
], UserWhereInput.prototype, "deletedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => EnumUserRoleFilter, { nullable: true })
], UserWhereInput.prototype, "role", void 0);
__decorate([
    (0, graphql_1.Field)(() => QrCodeListRelationFilter, { nullable: true })
], UserWhereInput.prototype, "scannedQrs", void 0);
UserWhereInput = UserWhereInput_1 = __decorate([
    (0, graphql_5.InputType)()
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
    (0, graphql_1.Field)(() => String, { nullable: true })
], User.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], User.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], User.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], User.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], User.prototype, "deletedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserRole, { nullable: false })
], User.prototype, "role", void 0);
__decorate([
    (0, graphql_1.Field)(() => [QrCode], { nullable: true })
], User.prototype, "scannedQrs", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserCount, { nullable: false })
], User.prototype, "_count", void 0);
User = __decorate([
    (0, graphql_2.ObjectType)()
], User);
exports.User = User;
let AggregateWhatsappStatus = class AggregateWhatsappStatus {
};
__decorate([
    (0, graphql_1.Field)(() => WhatsappStatusCountAggregate, { nullable: true })
], AggregateWhatsappStatus.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => WhatsappStatusAvgAggregate, { nullable: true })
], AggregateWhatsappStatus.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => WhatsappStatusSumAggregate, { nullable: true })
], AggregateWhatsappStatus.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => WhatsappStatusMinAggregate, { nullable: true })
], AggregateWhatsappStatus.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => WhatsappStatusMaxAggregate, { nullable: true })
], AggregateWhatsappStatus.prototype, "_max", void 0);
AggregateWhatsappStatus = __decorate([
    (0, graphql_2.ObjectType)()
], AggregateWhatsappStatus);
exports.AggregateWhatsappStatus = AggregateWhatsappStatus;
let CreateManyWhatsappStatusArgs = class CreateManyWhatsappStatusArgs {
};
__decorate([
    (0, graphql_1.Field)(() => [WhatsappStatusCreateManyInput], { nullable: false }),
    (0, class_transformer_1.Type)(() => WhatsappStatusCreateManyInput)
], CreateManyWhatsappStatusArgs.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], CreateManyWhatsappStatusArgs.prototype, "skipDuplicates", void 0);
CreateManyWhatsappStatusArgs = __decorate([
    (0, graphql_3.ArgsType)()
], CreateManyWhatsappStatusArgs);
exports.CreateManyWhatsappStatusArgs = CreateManyWhatsappStatusArgs;
let CreateOneWhatsappStatusArgs = class CreateOneWhatsappStatusArgs {
};
__decorate([
    (0, graphql_1.Field)(() => WhatsappStatusCreateInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => WhatsappStatusCreateInput)
], CreateOneWhatsappStatusArgs.prototype, "data", void 0);
CreateOneWhatsappStatusArgs = __decorate([
    (0, graphql_3.ArgsType)()
], CreateOneWhatsappStatusArgs);
exports.CreateOneWhatsappStatusArgs = CreateOneWhatsappStatusArgs;
let DeleteManyWhatsappStatusArgs = class DeleteManyWhatsappStatusArgs {
};
__decorate([
    (0, graphql_1.Field)(() => WhatsappStatusWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => WhatsappStatusWhereInput)
], DeleteManyWhatsappStatusArgs.prototype, "where", void 0);
DeleteManyWhatsappStatusArgs = __decorate([
    (0, graphql_3.ArgsType)()
], DeleteManyWhatsappStatusArgs);
exports.DeleteManyWhatsappStatusArgs = DeleteManyWhatsappStatusArgs;
let DeleteOneWhatsappStatusArgs = class DeleteOneWhatsappStatusArgs {
};
__decorate([
    (0, graphql_1.Field)(() => WhatsappStatusWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => WhatsappStatusWhereUniqueInput)
], DeleteOneWhatsappStatusArgs.prototype, "where", void 0);
DeleteOneWhatsappStatusArgs = __decorate([
    (0, graphql_3.ArgsType)()
], DeleteOneWhatsappStatusArgs);
exports.DeleteOneWhatsappStatusArgs = DeleteOneWhatsappStatusArgs;
let FindFirstWhatsappStatusOrThrowArgs = class FindFirstWhatsappStatusOrThrowArgs {
};
__decorate([
    (0, graphql_1.Field)(() => WhatsappStatusWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => WhatsappStatusWhereInput)
], FindFirstWhatsappStatusOrThrowArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [WhatsappStatusOrderByWithRelationInput], { nullable: true })
], FindFirstWhatsappStatusOrThrowArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => WhatsappStatusWhereUniqueInput, { nullable: true })
], FindFirstWhatsappStatusOrThrowArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], FindFirstWhatsappStatusOrThrowArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], FindFirstWhatsappStatusOrThrowArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => [WhatsappStatusScalarFieldEnum], { nullable: true })
], FindFirstWhatsappStatusOrThrowArgs.prototype, "distinct", void 0);
FindFirstWhatsappStatusOrThrowArgs = __decorate([
    (0, graphql_3.ArgsType)()
], FindFirstWhatsappStatusOrThrowArgs);
exports.FindFirstWhatsappStatusOrThrowArgs = FindFirstWhatsappStatusOrThrowArgs;
let FindFirstWhatsappStatusArgs = class FindFirstWhatsappStatusArgs {
};
__decorate([
    (0, graphql_1.Field)(() => WhatsappStatusWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => WhatsappStatusWhereInput)
], FindFirstWhatsappStatusArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [WhatsappStatusOrderByWithRelationInput], { nullable: true })
], FindFirstWhatsappStatusArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => WhatsappStatusWhereUniqueInput, { nullable: true })
], FindFirstWhatsappStatusArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], FindFirstWhatsappStatusArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], FindFirstWhatsappStatusArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => [WhatsappStatusScalarFieldEnum], { nullable: true })
], FindFirstWhatsappStatusArgs.prototype, "distinct", void 0);
FindFirstWhatsappStatusArgs = __decorate([
    (0, graphql_3.ArgsType)()
], FindFirstWhatsappStatusArgs);
exports.FindFirstWhatsappStatusArgs = FindFirstWhatsappStatusArgs;
let FindManyWhatsappStatusArgs = class FindManyWhatsappStatusArgs {
};
__decorate([
    (0, graphql_1.Field)(() => WhatsappStatusWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => WhatsappStatusWhereInput)
], FindManyWhatsappStatusArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [WhatsappStatusOrderByWithRelationInput], { nullable: true })
], FindManyWhatsappStatusArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => WhatsappStatusWhereUniqueInput, { nullable: true })
], FindManyWhatsappStatusArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], FindManyWhatsappStatusArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], FindManyWhatsappStatusArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => [WhatsappStatusScalarFieldEnum], { nullable: true })
], FindManyWhatsappStatusArgs.prototype, "distinct", void 0);
FindManyWhatsappStatusArgs = __decorate([
    (0, graphql_3.ArgsType)()
], FindManyWhatsappStatusArgs);
exports.FindManyWhatsappStatusArgs = FindManyWhatsappStatusArgs;
let FindUniqueWhatsappStatusOrThrowArgs = class FindUniqueWhatsappStatusOrThrowArgs {
};
__decorate([
    (0, graphql_1.Field)(() => WhatsappStatusWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => WhatsappStatusWhereUniqueInput)
], FindUniqueWhatsappStatusOrThrowArgs.prototype, "where", void 0);
FindUniqueWhatsappStatusOrThrowArgs = __decorate([
    (0, graphql_3.ArgsType)()
], FindUniqueWhatsappStatusOrThrowArgs);
exports.FindUniqueWhatsappStatusOrThrowArgs = FindUniqueWhatsappStatusOrThrowArgs;
let FindUniqueWhatsappStatusArgs = class FindUniqueWhatsappStatusArgs {
};
__decorate([
    (0, graphql_1.Field)(() => WhatsappStatusWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => WhatsappStatusWhereUniqueInput)
], FindUniqueWhatsappStatusArgs.prototype, "where", void 0);
FindUniqueWhatsappStatusArgs = __decorate([
    (0, graphql_3.ArgsType)()
], FindUniqueWhatsappStatusArgs);
exports.FindUniqueWhatsappStatusArgs = FindUniqueWhatsappStatusArgs;
let UpdateManyWhatsappStatusArgs = class UpdateManyWhatsappStatusArgs {
};
__decorate([
    (0, graphql_1.Field)(() => WhatsappStatusUpdateManyMutationInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => WhatsappStatusUpdateManyMutationInput)
], UpdateManyWhatsappStatusArgs.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => WhatsappStatusWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => WhatsappStatusWhereInput)
], UpdateManyWhatsappStatusArgs.prototype, "where", void 0);
UpdateManyWhatsappStatusArgs = __decorate([
    (0, graphql_3.ArgsType)()
], UpdateManyWhatsappStatusArgs);
exports.UpdateManyWhatsappStatusArgs = UpdateManyWhatsappStatusArgs;
let UpdateOneWhatsappStatusArgs = class UpdateOneWhatsappStatusArgs {
};
__decorate([
    (0, graphql_1.Field)(() => WhatsappStatusUpdateInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => WhatsappStatusUpdateInput)
], UpdateOneWhatsappStatusArgs.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => WhatsappStatusWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => WhatsappStatusWhereUniqueInput)
], UpdateOneWhatsappStatusArgs.prototype, "where", void 0);
UpdateOneWhatsappStatusArgs = __decorate([
    (0, graphql_3.ArgsType)()
], UpdateOneWhatsappStatusArgs);
exports.UpdateOneWhatsappStatusArgs = UpdateOneWhatsappStatusArgs;
let UpsertOneWhatsappStatusArgs = class UpsertOneWhatsappStatusArgs {
};
__decorate([
    (0, graphql_1.Field)(() => WhatsappStatusWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => WhatsappStatusWhereUniqueInput)
], UpsertOneWhatsappStatusArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => WhatsappStatusCreateInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => WhatsappStatusCreateInput)
], UpsertOneWhatsappStatusArgs.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => WhatsappStatusUpdateInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => WhatsappStatusUpdateInput)
], UpsertOneWhatsappStatusArgs.prototype, "update", void 0);
UpsertOneWhatsappStatusArgs = __decorate([
    (0, graphql_3.ArgsType)()
], UpsertOneWhatsappStatusArgs);
exports.UpsertOneWhatsappStatusArgs = UpsertOneWhatsappStatusArgs;
let WhatsappStatusAggregateArgs = class WhatsappStatusAggregateArgs {
};
__decorate([
    (0, graphql_1.Field)(() => WhatsappStatusWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => WhatsappStatusWhereInput)
], WhatsappStatusAggregateArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [WhatsappStatusOrderByWithRelationInput], { nullable: true })
], WhatsappStatusAggregateArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => WhatsappStatusWhereUniqueInput, { nullable: true })
], WhatsappStatusAggregateArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], WhatsappStatusAggregateArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], WhatsappStatusAggregateArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => WhatsappStatusCountAggregateInput, { nullable: true })
], WhatsappStatusAggregateArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => WhatsappStatusAvgAggregateInput, { nullable: true })
], WhatsappStatusAggregateArgs.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => WhatsappStatusSumAggregateInput, { nullable: true })
], WhatsappStatusAggregateArgs.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => WhatsappStatusMinAggregateInput, { nullable: true })
], WhatsappStatusAggregateArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => WhatsappStatusMaxAggregateInput, { nullable: true })
], WhatsappStatusAggregateArgs.prototype, "_max", void 0);
WhatsappStatusAggregateArgs = __decorate([
    (0, graphql_3.ArgsType)()
], WhatsappStatusAggregateArgs);
exports.WhatsappStatusAggregateArgs = WhatsappStatusAggregateArgs;
let WhatsappStatusAvgAggregateInput = class WhatsappStatusAvgAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], WhatsappStatusAvgAggregateInput.prototype, "id", void 0);
WhatsappStatusAvgAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], WhatsappStatusAvgAggregateInput);
exports.WhatsappStatusAvgAggregateInput = WhatsappStatusAvgAggregateInput;
let WhatsappStatusAvgAggregate = class WhatsappStatusAvgAggregate {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_6.Float, { nullable: true })
], WhatsappStatusAvgAggregate.prototype, "id", void 0);
WhatsappStatusAvgAggregate = __decorate([
    (0, graphql_2.ObjectType)()
], WhatsappStatusAvgAggregate);
exports.WhatsappStatusAvgAggregate = WhatsappStatusAvgAggregate;
let WhatsappStatusAvgOrderByAggregateInput = class WhatsappStatusAvgOrderByAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], WhatsappStatusAvgOrderByAggregateInput.prototype, "id", void 0);
WhatsappStatusAvgOrderByAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], WhatsappStatusAvgOrderByAggregateInput);
exports.WhatsappStatusAvgOrderByAggregateInput = WhatsappStatusAvgOrderByAggregateInput;
let WhatsappStatusCountAggregateInput = class WhatsappStatusCountAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], WhatsappStatusCountAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], WhatsappStatusCountAggregateInput.prototype, "refId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], WhatsappStatusCountAggregateInput.prototype, "messageId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], WhatsappStatusCountAggregateInput.prototype, "message", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], WhatsappStatusCountAggregateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], WhatsappStatusCountAggregateInput.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], WhatsappStatusCountAggregateInput.prototype, "guestId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], WhatsappStatusCountAggregateInput.prototype, "_all", void 0);
WhatsappStatusCountAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], WhatsappStatusCountAggregateInput);
exports.WhatsappStatusCountAggregateInput = WhatsappStatusCountAggregateInput;
let WhatsappStatusCountAggregate = class WhatsappStatusCountAggregate {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], WhatsappStatusCountAggregate.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], WhatsappStatusCountAggregate.prototype, "refId", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], WhatsappStatusCountAggregate.prototype, "messageId", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], WhatsappStatusCountAggregate.prototype, "message", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], WhatsappStatusCountAggregate.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], WhatsappStatusCountAggregate.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], WhatsappStatusCountAggregate.prototype, "guestId", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], WhatsappStatusCountAggregate.prototype, "_all", void 0);
WhatsappStatusCountAggregate = __decorate([
    (0, graphql_2.ObjectType)()
], WhatsappStatusCountAggregate);
exports.WhatsappStatusCountAggregate = WhatsappStatusCountAggregate;
let WhatsappStatusCountOrderByAggregateInput = class WhatsappStatusCountOrderByAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], WhatsappStatusCountOrderByAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], WhatsappStatusCountOrderByAggregateInput.prototype, "refId", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], WhatsappStatusCountOrderByAggregateInput.prototype, "messageId", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], WhatsappStatusCountOrderByAggregateInput.prototype, "message", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], WhatsappStatusCountOrderByAggregateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], WhatsappStatusCountOrderByAggregateInput.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], WhatsappStatusCountOrderByAggregateInput.prototype, "guestId", void 0);
WhatsappStatusCountOrderByAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], WhatsappStatusCountOrderByAggregateInput);
exports.WhatsappStatusCountOrderByAggregateInput = WhatsappStatusCountOrderByAggregateInput;
let WhatsappStatusCreateManyGuestInputEnvelope = class WhatsappStatusCreateManyGuestInputEnvelope {
};
__decorate([
    (0, graphql_1.Field)(() => [WhatsappStatusCreateManyGuestInput], { nullable: false }),
    (0, class_transformer_1.Type)(() => WhatsappStatusCreateManyGuestInput)
], WhatsappStatusCreateManyGuestInputEnvelope.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], WhatsappStatusCreateManyGuestInputEnvelope.prototype, "skipDuplicates", void 0);
WhatsappStatusCreateManyGuestInputEnvelope = __decorate([
    (0, graphql_5.InputType)()
], WhatsappStatusCreateManyGuestInputEnvelope);
exports.WhatsappStatusCreateManyGuestInputEnvelope = WhatsappStatusCreateManyGuestInputEnvelope;
let WhatsappStatusCreateManyGuestInput = class WhatsappStatusCreateManyGuestInput {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], WhatsappStatusCreateManyGuestInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], WhatsappStatusCreateManyGuestInput.prototype, "refId", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], WhatsappStatusCreateManyGuestInput.prototype, "messageId", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], WhatsappStatusCreateManyGuestInput.prototype, "message", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], WhatsappStatusCreateManyGuestInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => QueueStatus, { nullable: true })
], WhatsappStatusCreateManyGuestInput.prototype, "status", void 0);
WhatsappStatusCreateManyGuestInput = __decorate([
    (0, graphql_5.InputType)()
], WhatsappStatusCreateManyGuestInput);
exports.WhatsappStatusCreateManyGuestInput = WhatsappStatusCreateManyGuestInput;
let WhatsappStatusCreateManyInput = class WhatsappStatusCreateManyInput {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], WhatsappStatusCreateManyInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], WhatsappStatusCreateManyInput.prototype, "refId", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], WhatsappStatusCreateManyInput.prototype, "messageId", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], WhatsappStatusCreateManyInput.prototype, "message", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], WhatsappStatusCreateManyInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => QueueStatus, { nullable: true })
], WhatsappStatusCreateManyInput.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], WhatsappStatusCreateManyInput.prototype, "guestId", void 0);
WhatsappStatusCreateManyInput = __decorate([
    (0, graphql_5.InputType)()
], WhatsappStatusCreateManyInput);
exports.WhatsappStatusCreateManyInput = WhatsappStatusCreateManyInput;
let WhatsappStatusCreateNestedManyWithoutGuestInput = class WhatsappStatusCreateNestedManyWithoutGuestInput {
};
__decorate([
    (0, graphql_1.Field)(() => [WhatsappStatusCreateWithoutGuestInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => WhatsappStatusCreateWithoutGuestInput)
], WhatsappStatusCreateNestedManyWithoutGuestInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [WhatsappStatusCreateOrConnectWithoutGuestInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => WhatsappStatusCreateOrConnectWithoutGuestInput)
], WhatsappStatusCreateNestedManyWithoutGuestInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => WhatsappStatusCreateManyGuestInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => WhatsappStatusCreateManyGuestInputEnvelope)
], WhatsappStatusCreateNestedManyWithoutGuestInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [WhatsappStatusWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => WhatsappStatusWhereUniqueInput)
], WhatsappStatusCreateNestedManyWithoutGuestInput.prototype, "connect", void 0);
WhatsappStatusCreateNestedManyWithoutGuestInput = __decorate([
    (0, graphql_5.InputType)()
], WhatsappStatusCreateNestedManyWithoutGuestInput);
exports.WhatsappStatusCreateNestedManyWithoutGuestInput = WhatsappStatusCreateNestedManyWithoutGuestInput;
let WhatsappStatusCreateOrConnectWithoutGuestInput = class WhatsappStatusCreateOrConnectWithoutGuestInput {
};
__decorate([
    (0, graphql_1.Field)(() => WhatsappStatusWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => WhatsappStatusWhereUniqueInput)
], WhatsappStatusCreateOrConnectWithoutGuestInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => WhatsappStatusCreateWithoutGuestInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => WhatsappStatusCreateWithoutGuestInput)
], WhatsappStatusCreateOrConnectWithoutGuestInput.prototype, "create", void 0);
WhatsappStatusCreateOrConnectWithoutGuestInput = __decorate([
    (0, graphql_5.InputType)()
], WhatsappStatusCreateOrConnectWithoutGuestInput);
exports.WhatsappStatusCreateOrConnectWithoutGuestInput = WhatsappStatusCreateOrConnectWithoutGuestInput;
let WhatsappStatusCreateWithoutGuestInput = class WhatsappStatusCreateWithoutGuestInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], WhatsappStatusCreateWithoutGuestInput.prototype, "refId", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], WhatsappStatusCreateWithoutGuestInput.prototype, "messageId", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], WhatsappStatusCreateWithoutGuestInput.prototype, "message", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], WhatsappStatusCreateWithoutGuestInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => QueueStatus, { nullable: true })
], WhatsappStatusCreateWithoutGuestInput.prototype, "status", void 0);
WhatsappStatusCreateWithoutGuestInput = __decorate([
    (0, graphql_5.InputType)()
], WhatsappStatusCreateWithoutGuestInput);
exports.WhatsappStatusCreateWithoutGuestInput = WhatsappStatusCreateWithoutGuestInput;
let WhatsappStatusCreateInput = class WhatsappStatusCreateInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], WhatsappStatusCreateInput.prototype, "refId", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], WhatsappStatusCreateInput.prototype, "messageId", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], WhatsappStatusCreateInput.prototype, "message", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], WhatsappStatusCreateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => QueueStatus, { nullable: true })
], WhatsappStatusCreateInput.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestCreateNestedOneWithoutWhatsappStatusesInput, { nullable: false })
], WhatsappStatusCreateInput.prototype, "guest", void 0);
WhatsappStatusCreateInput = __decorate([
    (0, graphql_5.InputType)()
], WhatsappStatusCreateInput);
exports.WhatsappStatusCreateInput = WhatsappStatusCreateInput;
let WhatsappStatusGroupByArgs = class WhatsappStatusGroupByArgs {
};
__decorate([
    (0, graphql_1.Field)(() => WhatsappStatusWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => WhatsappStatusWhereInput)
], WhatsappStatusGroupByArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [WhatsappStatusOrderByWithAggregationInput], { nullable: true })
], WhatsappStatusGroupByArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => [WhatsappStatusScalarFieldEnum], { nullable: false })
], WhatsappStatusGroupByArgs.prototype, "by", void 0);
__decorate([
    (0, graphql_1.Field)(() => WhatsappStatusScalarWhereWithAggregatesInput, { nullable: true })
], WhatsappStatusGroupByArgs.prototype, "having", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], WhatsappStatusGroupByArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], WhatsappStatusGroupByArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => WhatsappStatusCountAggregateInput, { nullable: true })
], WhatsappStatusGroupByArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => WhatsappStatusAvgAggregateInput, { nullable: true })
], WhatsappStatusGroupByArgs.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => WhatsappStatusSumAggregateInput, { nullable: true })
], WhatsappStatusGroupByArgs.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => WhatsappStatusMinAggregateInput, { nullable: true })
], WhatsappStatusGroupByArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => WhatsappStatusMaxAggregateInput, { nullable: true })
], WhatsappStatusGroupByArgs.prototype, "_max", void 0);
WhatsappStatusGroupByArgs = __decorate([
    (0, graphql_3.ArgsType)()
], WhatsappStatusGroupByArgs);
exports.WhatsappStatusGroupByArgs = WhatsappStatusGroupByArgs;
let WhatsappStatusGroupBy = class WhatsappStatusGroupBy {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], WhatsappStatusGroupBy.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], WhatsappStatusGroupBy.prototype, "refId", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], WhatsappStatusGroupBy.prototype, "messageId", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], WhatsappStatusGroupBy.prototype, "message", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], WhatsappStatusGroupBy.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => QueueStatus, { nullable: false })
], WhatsappStatusGroupBy.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], WhatsappStatusGroupBy.prototype, "guestId", void 0);
__decorate([
    (0, graphql_1.Field)(() => WhatsappStatusCountAggregate, { nullable: true })
], WhatsappStatusGroupBy.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => WhatsappStatusAvgAggregate, { nullable: true })
], WhatsappStatusGroupBy.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => WhatsappStatusSumAggregate, { nullable: true })
], WhatsappStatusGroupBy.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => WhatsappStatusMinAggregate, { nullable: true })
], WhatsappStatusGroupBy.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => WhatsappStatusMaxAggregate, { nullable: true })
], WhatsappStatusGroupBy.prototype, "_max", void 0);
WhatsappStatusGroupBy = __decorate([
    (0, graphql_2.ObjectType)()
], WhatsappStatusGroupBy);
exports.WhatsappStatusGroupBy = WhatsappStatusGroupBy;
let WhatsappStatusListRelationFilter = class WhatsappStatusListRelationFilter {
};
__decorate([
    (0, graphql_1.Field)(() => WhatsappStatusWhereInput, { nullable: true })
], WhatsappStatusListRelationFilter.prototype, "every", void 0);
__decorate([
    (0, graphql_1.Field)(() => WhatsappStatusWhereInput, { nullable: true })
], WhatsappStatusListRelationFilter.prototype, "some", void 0);
__decorate([
    (0, graphql_1.Field)(() => WhatsappStatusWhereInput, { nullable: true })
], WhatsappStatusListRelationFilter.prototype, "none", void 0);
WhatsappStatusListRelationFilter = __decorate([
    (0, graphql_5.InputType)()
], WhatsappStatusListRelationFilter);
exports.WhatsappStatusListRelationFilter = WhatsappStatusListRelationFilter;
let WhatsappStatusMaxAggregateInput = class WhatsappStatusMaxAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], WhatsappStatusMaxAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], WhatsappStatusMaxAggregateInput.prototype, "refId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], WhatsappStatusMaxAggregateInput.prototype, "messageId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], WhatsappStatusMaxAggregateInput.prototype, "message", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], WhatsappStatusMaxAggregateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], WhatsappStatusMaxAggregateInput.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], WhatsappStatusMaxAggregateInput.prototype, "guestId", void 0);
WhatsappStatusMaxAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], WhatsappStatusMaxAggregateInput);
exports.WhatsappStatusMaxAggregateInput = WhatsappStatusMaxAggregateInput;
let WhatsappStatusMaxAggregate = class WhatsappStatusMaxAggregate {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], WhatsappStatusMaxAggregate.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], WhatsappStatusMaxAggregate.prototype, "refId", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], WhatsappStatusMaxAggregate.prototype, "messageId", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], WhatsappStatusMaxAggregate.prototype, "message", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], WhatsappStatusMaxAggregate.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => QueueStatus, { nullable: true })
], WhatsappStatusMaxAggregate.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], WhatsappStatusMaxAggregate.prototype, "guestId", void 0);
WhatsappStatusMaxAggregate = __decorate([
    (0, graphql_2.ObjectType)()
], WhatsappStatusMaxAggregate);
exports.WhatsappStatusMaxAggregate = WhatsappStatusMaxAggregate;
let WhatsappStatusMaxOrderByAggregateInput = class WhatsappStatusMaxOrderByAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], WhatsappStatusMaxOrderByAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], WhatsappStatusMaxOrderByAggregateInput.prototype, "refId", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], WhatsappStatusMaxOrderByAggregateInput.prototype, "messageId", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], WhatsappStatusMaxOrderByAggregateInput.prototype, "message", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], WhatsappStatusMaxOrderByAggregateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], WhatsappStatusMaxOrderByAggregateInput.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], WhatsappStatusMaxOrderByAggregateInput.prototype, "guestId", void 0);
WhatsappStatusMaxOrderByAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], WhatsappStatusMaxOrderByAggregateInput);
exports.WhatsappStatusMaxOrderByAggregateInput = WhatsappStatusMaxOrderByAggregateInput;
let WhatsappStatusMinAggregateInput = class WhatsappStatusMinAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], WhatsappStatusMinAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], WhatsappStatusMinAggregateInput.prototype, "refId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], WhatsappStatusMinAggregateInput.prototype, "messageId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], WhatsappStatusMinAggregateInput.prototype, "message", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], WhatsappStatusMinAggregateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], WhatsappStatusMinAggregateInput.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], WhatsappStatusMinAggregateInput.prototype, "guestId", void 0);
WhatsappStatusMinAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], WhatsappStatusMinAggregateInput);
exports.WhatsappStatusMinAggregateInput = WhatsappStatusMinAggregateInput;
let WhatsappStatusMinAggregate = class WhatsappStatusMinAggregate {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], WhatsappStatusMinAggregate.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], WhatsappStatusMinAggregate.prototype, "refId", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], WhatsappStatusMinAggregate.prototype, "messageId", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], WhatsappStatusMinAggregate.prototype, "message", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], WhatsappStatusMinAggregate.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => QueueStatus, { nullable: true })
], WhatsappStatusMinAggregate.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], WhatsappStatusMinAggregate.prototype, "guestId", void 0);
WhatsappStatusMinAggregate = __decorate([
    (0, graphql_2.ObjectType)()
], WhatsappStatusMinAggregate);
exports.WhatsappStatusMinAggregate = WhatsappStatusMinAggregate;
let WhatsappStatusMinOrderByAggregateInput = class WhatsappStatusMinOrderByAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], WhatsappStatusMinOrderByAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], WhatsappStatusMinOrderByAggregateInput.prototype, "refId", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], WhatsappStatusMinOrderByAggregateInput.prototype, "messageId", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], WhatsappStatusMinOrderByAggregateInput.prototype, "message", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], WhatsappStatusMinOrderByAggregateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], WhatsappStatusMinOrderByAggregateInput.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], WhatsappStatusMinOrderByAggregateInput.prototype, "guestId", void 0);
WhatsappStatusMinOrderByAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], WhatsappStatusMinOrderByAggregateInput);
exports.WhatsappStatusMinOrderByAggregateInput = WhatsappStatusMinOrderByAggregateInput;
let WhatsappStatusOrderByRelationAggregateInput = class WhatsappStatusOrderByRelationAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], WhatsappStatusOrderByRelationAggregateInput.prototype, "_count", void 0);
WhatsappStatusOrderByRelationAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], WhatsappStatusOrderByRelationAggregateInput);
exports.WhatsappStatusOrderByRelationAggregateInput = WhatsappStatusOrderByRelationAggregateInput;
let WhatsappStatusOrderByWithAggregationInput = class WhatsappStatusOrderByWithAggregationInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], WhatsappStatusOrderByWithAggregationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], WhatsappStatusOrderByWithAggregationInput.prototype, "refId", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrderInput, { nullable: true })
], WhatsappStatusOrderByWithAggregationInput.prototype, "messageId", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrderInput, { nullable: true })
], WhatsappStatusOrderByWithAggregationInput.prototype, "message", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], WhatsappStatusOrderByWithAggregationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], WhatsappStatusOrderByWithAggregationInput.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], WhatsappStatusOrderByWithAggregationInput.prototype, "guestId", void 0);
__decorate([
    (0, graphql_1.Field)(() => WhatsappStatusCountOrderByAggregateInput, { nullable: true })
], WhatsappStatusOrderByWithAggregationInput.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => WhatsappStatusAvgOrderByAggregateInput, { nullable: true })
], WhatsappStatusOrderByWithAggregationInput.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => WhatsappStatusMaxOrderByAggregateInput, { nullable: true })
], WhatsappStatusOrderByWithAggregationInput.prototype, "_max", void 0);
__decorate([
    (0, graphql_1.Field)(() => WhatsappStatusMinOrderByAggregateInput, { nullable: true })
], WhatsappStatusOrderByWithAggregationInput.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => WhatsappStatusSumOrderByAggregateInput, { nullable: true })
], WhatsappStatusOrderByWithAggregationInput.prototype, "_sum", void 0);
WhatsappStatusOrderByWithAggregationInput = __decorate([
    (0, graphql_5.InputType)()
], WhatsappStatusOrderByWithAggregationInput);
exports.WhatsappStatusOrderByWithAggregationInput = WhatsappStatusOrderByWithAggregationInput;
let WhatsappStatusOrderByWithRelationInput = class WhatsappStatusOrderByWithRelationInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], WhatsappStatusOrderByWithRelationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], WhatsappStatusOrderByWithRelationInput.prototype, "refId", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrderInput, { nullable: true })
], WhatsappStatusOrderByWithRelationInput.prototype, "messageId", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrderInput, { nullable: true })
], WhatsappStatusOrderByWithRelationInput.prototype, "message", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], WhatsappStatusOrderByWithRelationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], WhatsappStatusOrderByWithRelationInput.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], WhatsappStatusOrderByWithRelationInput.prototype, "guestId", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestOrderByWithRelationInput, { nullable: true })
], WhatsappStatusOrderByWithRelationInput.prototype, "guest", void 0);
WhatsappStatusOrderByWithRelationInput = __decorate([
    (0, graphql_5.InputType)()
], WhatsappStatusOrderByWithRelationInput);
exports.WhatsappStatusOrderByWithRelationInput = WhatsappStatusOrderByWithRelationInput;
let WhatsappStatusScalarWhereWithAggregatesInput = WhatsappStatusScalarWhereWithAggregatesInput_1 = class WhatsappStatusScalarWhereWithAggregatesInput {
};
__decorate([
    (0, graphql_1.Field)(() => [WhatsappStatusScalarWhereWithAggregatesInput_1], { nullable: true })
], WhatsappStatusScalarWhereWithAggregatesInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [WhatsappStatusScalarWhereWithAggregatesInput_1], { nullable: true })
], WhatsappStatusScalarWhereWithAggregatesInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [WhatsappStatusScalarWhereWithAggregatesInput_1], { nullable: true })
], WhatsappStatusScalarWhereWithAggregatesInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => IntWithAggregatesFilter, { nullable: true })
], WhatsappStatusScalarWhereWithAggregatesInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringWithAggregatesFilter, { nullable: true })
], WhatsappStatusScalarWhereWithAggregatesInput.prototype, "refId", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringNullableWithAggregatesFilter, { nullable: true })
], WhatsappStatusScalarWhereWithAggregatesInput.prototype, "messageId", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringNullableWithAggregatesFilter, { nullable: true })
], WhatsappStatusScalarWhereWithAggregatesInput.prototype, "message", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeWithAggregatesFilter, { nullable: true })
], WhatsappStatusScalarWhereWithAggregatesInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => EnumQueueStatusWithAggregatesFilter, { nullable: true })
], WhatsappStatusScalarWhereWithAggregatesInput.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringWithAggregatesFilter, { nullable: true })
], WhatsappStatusScalarWhereWithAggregatesInput.prototype, "guestId", void 0);
WhatsappStatusScalarWhereWithAggregatesInput = WhatsappStatusScalarWhereWithAggregatesInput_1 = __decorate([
    (0, graphql_5.InputType)()
], WhatsappStatusScalarWhereWithAggregatesInput);
exports.WhatsappStatusScalarWhereWithAggregatesInput = WhatsappStatusScalarWhereWithAggregatesInput;
let WhatsappStatusScalarWhereInput = WhatsappStatusScalarWhereInput_1 = class WhatsappStatusScalarWhereInput {
};
__decorate([
    (0, graphql_1.Field)(() => [WhatsappStatusScalarWhereInput_1], { nullable: true })
], WhatsappStatusScalarWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [WhatsappStatusScalarWhereInput_1], { nullable: true })
], WhatsappStatusScalarWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [WhatsappStatusScalarWhereInput_1], { nullable: true })
], WhatsappStatusScalarWhereInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => IntFilter, { nullable: true })
], WhatsappStatusScalarWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFilter, { nullable: true })
], WhatsappStatusScalarWhereInput.prototype, "refId", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringNullableFilter, { nullable: true })
], WhatsappStatusScalarWhereInput.prototype, "messageId", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringNullableFilter, { nullable: true })
], WhatsappStatusScalarWhereInput.prototype, "message", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFilter, { nullable: true })
], WhatsappStatusScalarWhereInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => EnumQueueStatusFilter, { nullable: true })
], WhatsappStatusScalarWhereInput.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFilter, { nullable: true })
], WhatsappStatusScalarWhereInput.prototype, "guestId", void 0);
WhatsappStatusScalarWhereInput = WhatsappStatusScalarWhereInput_1 = __decorate([
    (0, graphql_5.InputType)()
], WhatsappStatusScalarWhereInput);
exports.WhatsappStatusScalarWhereInput = WhatsappStatusScalarWhereInput;
let WhatsappStatusSumAggregateInput = class WhatsappStatusSumAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], WhatsappStatusSumAggregateInput.prototype, "id", void 0);
WhatsappStatusSumAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], WhatsappStatusSumAggregateInput);
exports.WhatsappStatusSumAggregateInput = WhatsappStatusSumAggregateInput;
let WhatsappStatusSumAggregate = class WhatsappStatusSumAggregate {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], WhatsappStatusSumAggregate.prototype, "id", void 0);
WhatsappStatusSumAggregate = __decorate([
    (0, graphql_2.ObjectType)()
], WhatsappStatusSumAggregate);
exports.WhatsappStatusSumAggregate = WhatsappStatusSumAggregate;
let WhatsappStatusSumOrderByAggregateInput = class WhatsappStatusSumOrderByAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], WhatsappStatusSumOrderByAggregateInput.prototype, "id", void 0);
WhatsappStatusSumOrderByAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], WhatsappStatusSumOrderByAggregateInput);
exports.WhatsappStatusSumOrderByAggregateInput = WhatsappStatusSumOrderByAggregateInput;
let WhatsappStatusUncheckedCreateNestedManyWithoutGuestInput = class WhatsappStatusUncheckedCreateNestedManyWithoutGuestInput {
};
__decorate([
    (0, graphql_1.Field)(() => [WhatsappStatusCreateWithoutGuestInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => WhatsappStatusCreateWithoutGuestInput)
], WhatsappStatusUncheckedCreateNestedManyWithoutGuestInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [WhatsappStatusCreateOrConnectWithoutGuestInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => WhatsappStatusCreateOrConnectWithoutGuestInput)
], WhatsappStatusUncheckedCreateNestedManyWithoutGuestInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => WhatsappStatusCreateManyGuestInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => WhatsappStatusCreateManyGuestInputEnvelope)
], WhatsappStatusUncheckedCreateNestedManyWithoutGuestInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [WhatsappStatusWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => WhatsappStatusWhereUniqueInput)
], WhatsappStatusUncheckedCreateNestedManyWithoutGuestInput.prototype, "connect", void 0);
WhatsappStatusUncheckedCreateNestedManyWithoutGuestInput = __decorate([
    (0, graphql_5.InputType)()
], WhatsappStatusUncheckedCreateNestedManyWithoutGuestInput);
exports.WhatsappStatusUncheckedCreateNestedManyWithoutGuestInput = WhatsappStatusUncheckedCreateNestedManyWithoutGuestInput;
let WhatsappStatusUncheckedCreateWithoutGuestInput = class WhatsappStatusUncheckedCreateWithoutGuestInput {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], WhatsappStatusUncheckedCreateWithoutGuestInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], WhatsappStatusUncheckedCreateWithoutGuestInput.prototype, "refId", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], WhatsappStatusUncheckedCreateWithoutGuestInput.prototype, "messageId", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], WhatsappStatusUncheckedCreateWithoutGuestInput.prototype, "message", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], WhatsappStatusUncheckedCreateWithoutGuestInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => QueueStatus, { nullable: true })
], WhatsappStatusUncheckedCreateWithoutGuestInput.prototype, "status", void 0);
WhatsappStatusUncheckedCreateWithoutGuestInput = __decorate([
    (0, graphql_5.InputType)()
], WhatsappStatusUncheckedCreateWithoutGuestInput);
exports.WhatsappStatusUncheckedCreateWithoutGuestInput = WhatsappStatusUncheckedCreateWithoutGuestInput;
let WhatsappStatusUncheckedCreateInput = class WhatsappStatusUncheckedCreateInput {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], WhatsappStatusUncheckedCreateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], WhatsappStatusUncheckedCreateInput.prototype, "refId", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], WhatsappStatusUncheckedCreateInput.prototype, "messageId", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], WhatsappStatusUncheckedCreateInput.prototype, "message", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], WhatsappStatusUncheckedCreateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => QueueStatus, { nullable: true })
], WhatsappStatusUncheckedCreateInput.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], WhatsappStatusUncheckedCreateInput.prototype, "guestId", void 0);
WhatsappStatusUncheckedCreateInput = __decorate([
    (0, graphql_5.InputType)()
], WhatsappStatusUncheckedCreateInput);
exports.WhatsappStatusUncheckedCreateInput = WhatsappStatusUncheckedCreateInput;
let WhatsappStatusUncheckedUpdateManyWithoutGuestNestedInput = class WhatsappStatusUncheckedUpdateManyWithoutGuestNestedInput {
};
__decorate([
    (0, graphql_1.Field)(() => [WhatsappStatusCreateWithoutGuestInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => WhatsappStatusCreateWithoutGuestInput)
], WhatsappStatusUncheckedUpdateManyWithoutGuestNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [WhatsappStatusCreateOrConnectWithoutGuestInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => WhatsappStatusCreateOrConnectWithoutGuestInput)
], WhatsappStatusUncheckedUpdateManyWithoutGuestNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => [WhatsappStatusUpsertWithWhereUniqueWithoutGuestInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => WhatsappStatusUpsertWithWhereUniqueWithoutGuestInput)
], WhatsappStatusUncheckedUpdateManyWithoutGuestNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => WhatsappStatusCreateManyGuestInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => WhatsappStatusCreateManyGuestInputEnvelope)
], WhatsappStatusUncheckedUpdateManyWithoutGuestNestedInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [WhatsappStatusWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => WhatsappStatusWhereUniqueInput)
], WhatsappStatusUncheckedUpdateManyWithoutGuestNestedInput.prototype, "set", void 0);
__decorate([
    (0, graphql_1.Field)(() => [WhatsappStatusWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => WhatsappStatusWhereUniqueInput)
], WhatsappStatusUncheckedUpdateManyWithoutGuestNestedInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [WhatsappStatusWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => WhatsappStatusWhereUniqueInput)
], WhatsappStatusUncheckedUpdateManyWithoutGuestNestedInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => [WhatsappStatusWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => WhatsappStatusWhereUniqueInput)
], WhatsappStatusUncheckedUpdateManyWithoutGuestNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [WhatsappStatusUpdateWithWhereUniqueWithoutGuestInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => WhatsappStatusUpdateWithWhereUniqueWithoutGuestInput)
], WhatsappStatusUncheckedUpdateManyWithoutGuestNestedInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => [WhatsappStatusUpdateManyWithWhereWithoutGuestInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => WhatsappStatusUpdateManyWithWhereWithoutGuestInput)
], WhatsappStatusUncheckedUpdateManyWithoutGuestNestedInput.prototype, "updateMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [WhatsappStatusScalarWhereInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => WhatsappStatusScalarWhereInput)
], WhatsappStatusUncheckedUpdateManyWithoutGuestNestedInput.prototype, "deleteMany", void 0);
WhatsappStatusUncheckedUpdateManyWithoutGuestNestedInput = __decorate([
    (0, graphql_5.InputType)()
], WhatsappStatusUncheckedUpdateManyWithoutGuestNestedInput);
exports.WhatsappStatusUncheckedUpdateManyWithoutGuestNestedInput = WhatsappStatusUncheckedUpdateManyWithoutGuestNestedInput;
let WhatsappStatusUncheckedUpdateManyWithoutGuestInput = class WhatsappStatusUncheckedUpdateManyWithoutGuestInput {
};
__decorate([
    (0, graphql_1.Field)(() => IntFieldUpdateOperationsInput, { nullable: true })
], WhatsappStatusUncheckedUpdateManyWithoutGuestInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], WhatsappStatusUncheckedUpdateManyWithoutGuestInput.prototype, "refId", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], WhatsappStatusUncheckedUpdateManyWithoutGuestInput.prototype, "messageId", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], WhatsappStatusUncheckedUpdateManyWithoutGuestInput.prototype, "message", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], WhatsappStatusUncheckedUpdateManyWithoutGuestInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => EnumQueueStatusFieldUpdateOperationsInput, { nullable: true })
], WhatsappStatusUncheckedUpdateManyWithoutGuestInput.prototype, "status", void 0);
WhatsappStatusUncheckedUpdateManyWithoutGuestInput = __decorate([
    (0, graphql_5.InputType)()
], WhatsappStatusUncheckedUpdateManyWithoutGuestInput);
exports.WhatsappStatusUncheckedUpdateManyWithoutGuestInput = WhatsappStatusUncheckedUpdateManyWithoutGuestInput;
let WhatsappStatusUncheckedUpdateManyInput = class WhatsappStatusUncheckedUpdateManyInput {
};
__decorate([
    (0, graphql_1.Field)(() => IntFieldUpdateOperationsInput, { nullable: true })
], WhatsappStatusUncheckedUpdateManyInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], WhatsappStatusUncheckedUpdateManyInput.prototype, "refId", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], WhatsappStatusUncheckedUpdateManyInput.prototype, "messageId", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], WhatsappStatusUncheckedUpdateManyInput.prototype, "message", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], WhatsappStatusUncheckedUpdateManyInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => EnumQueueStatusFieldUpdateOperationsInput, { nullable: true })
], WhatsappStatusUncheckedUpdateManyInput.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], WhatsappStatusUncheckedUpdateManyInput.prototype, "guestId", void 0);
WhatsappStatusUncheckedUpdateManyInput = __decorate([
    (0, graphql_5.InputType)()
], WhatsappStatusUncheckedUpdateManyInput);
exports.WhatsappStatusUncheckedUpdateManyInput = WhatsappStatusUncheckedUpdateManyInput;
let WhatsappStatusUncheckedUpdateWithoutGuestInput = class WhatsappStatusUncheckedUpdateWithoutGuestInput {
};
__decorate([
    (0, graphql_1.Field)(() => IntFieldUpdateOperationsInput, { nullable: true })
], WhatsappStatusUncheckedUpdateWithoutGuestInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], WhatsappStatusUncheckedUpdateWithoutGuestInput.prototype, "refId", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], WhatsappStatusUncheckedUpdateWithoutGuestInput.prototype, "messageId", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], WhatsappStatusUncheckedUpdateWithoutGuestInput.prototype, "message", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], WhatsappStatusUncheckedUpdateWithoutGuestInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => EnumQueueStatusFieldUpdateOperationsInput, { nullable: true })
], WhatsappStatusUncheckedUpdateWithoutGuestInput.prototype, "status", void 0);
WhatsappStatusUncheckedUpdateWithoutGuestInput = __decorate([
    (0, graphql_5.InputType)()
], WhatsappStatusUncheckedUpdateWithoutGuestInput);
exports.WhatsappStatusUncheckedUpdateWithoutGuestInput = WhatsappStatusUncheckedUpdateWithoutGuestInput;
let WhatsappStatusUncheckedUpdateInput = class WhatsappStatusUncheckedUpdateInput {
};
__decorate([
    (0, graphql_1.Field)(() => IntFieldUpdateOperationsInput, { nullable: true })
], WhatsappStatusUncheckedUpdateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], WhatsappStatusUncheckedUpdateInput.prototype, "refId", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], WhatsappStatusUncheckedUpdateInput.prototype, "messageId", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], WhatsappStatusUncheckedUpdateInput.prototype, "message", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], WhatsappStatusUncheckedUpdateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => EnumQueueStatusFieldUpdateOperationsInput, { nullable: true })
], WhatsappStatusUncheckedUpdateInput.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], WhatsappStatusUncheckedUpdateInput.prototype, "guestId", void 0);
WhatsappStatusUncheckedUpdateInput = __decorate([
    (0, graphql_5.InputType)()
], WhatsappStatusUncheckedUpdateInput);
exports.WhatsappStatusUncheckedUpdateInput = WhatsappStatusUncheckedUpdateInput;
let WhatsappStatusUpdateManyMutationInput = class WhatsappStatusUpdateManyMutationInput {
};
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], WhatsappStatusUpdateManyMutationInput.prototype, "refId", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], WhatsappStatusUpdateManyMutationInput.prototype, "messageId", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], WhatsappStatusUpdateManyMutationInput.prototype, "message", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], WhatsappStatusUpdateManyMutationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => EnumQueueStatusFieldUpdateOperationsInput, { nullable: true })
], WhatsappStatusUpdateManyMutationInput.prototype, "status", void 0);
WhatsappStatusUpdateManyMutationInput = __decorate([
    (0, graphql_5.InputType)()
], WhatsappStatusUpdateManyMutationInput);
exports.WhatsappStatusUpdateManyMutationInput = WhatsappStatusUpdateManyMutationInput;
let WhatsappStatusUpdateManyWithWhereWithoutGuestInput = class WhatsappStatusUpdateManyWithWhereWithoutGuestInput {
};
__decorate([
    (0, graphql_1.Field)(() => WhatsappStatusScalarWhereInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => WhatsappStatusScalarWhereInput)
], WhatsappStatusUpdateManyWithWhereWithoutGuestInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => WhatsappStatusUpdateManyMutationInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => WhatsappStatusUpdateManyMutationInput)
], WhatsappStatusUpdateManyWithWhereWithoutGuestInput.prototype, "data", void 0);
WhatsappStatusUpdateManyWithWhereWithoutGuestInput = __decorate([
    (0, graphql_5.InputType)()
], WhatsappStatusUpdateManyWithWhereWithoutGuestInput);
exports.WhatsappStatusUpdateManyWithWhereWithoutGuestInput = WhatsappStatusUpdateManyWithWhereWithoutGuestInput;
let WhatsappStatusUpdateManyWithoutGuestNestedInput = class WhatsappStatusUpdateManyWithoutGuestNestedInput {
};
__decorate([
    (0, graphql_1.Field)(() => [WhatsappStatusCreateWithoutGuestInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => WhatsappStatusCreateWithoutGuestInput)
], WhatsappStatusUpdateManyWithoutGuestNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [WhatsappStatusCreateOrConnectWithoutGuestInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => WhatsappStatusCreateOrConnectWithoutGuestInput)
], WhatsappStatusUpdateManyWithoutGuestNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => [WhatsappStatusUpsertWithWhereUniqueWithoutGuestInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => WhatsappStatusUpsertWithWhereUniqueWithoutGuestInput)
], WhatsappStatusUpdateManyWithoutGuestNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => WhatsappStatusCreateManyGuestInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => WhatsappStatusCreateManyGuestInputEnvelope)
], WhatsappStatusUpdateManyWithoutGuestNestedInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [WhatsappStatusWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => WhatsappStatusWhereUniqueInput)
], WhatsappStatusUpdateManyWithoutGuestNestedInput.prototype, "set", void 0);
__decorate([
    (0, graphql_1.Field)(() => [WhatsappStatusWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => WhatsappStatusWhereUniqueInput)
], WhatsappStatusUpdateManyWithoutGuestNestedInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [WhatsappStatusWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => WhatsappStatusWhereUniqueInput)
], WhatsappStatusUpdateManyWithoutGuestNestedInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => [WhatsappStatusWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => WhatsappStatusWhereUniqueInput)
], WhatsappStatusUpdateManyWithoutGuestNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [WhatsappStatusUpdateWithWhereUniqueWithoutGuestInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => WhatsappStatusUpdateWithWhereUniqueWithoutGuestInput)
], WhatsappStatusUpdateManyWithoutGuestNestedInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => [WhatsappStatusUpdateManyWithWhereWithoutGuestInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => WhatsappStatusUpdateManyWithWhereWithoutGuestInput)
], WhatsappStatusUpdateManyWithoutGuestNestedInput.prototype, "updateMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [WhatsappStatusScalarWhereInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => WhatsappStatusScalarWhereInput)
], WhatsappStatusUpdateManyWithoutGuestNestedInput.prototype, "deleteMany", void 0);
WhatsappStatusUpdateManyWithoutGuestNestedInput = __decorate([
    (0, graphql_5.InputType)()
], WhatsappStatusUpdateManyWithoutGuestNestedInput);
exports.WhatsappStatusUpdateManyWithoutGuestNestedInput = WhatsappStatusUpdateManyWithoutGuestNestedInput;
let WhatsappStatusUpdateWithWhereUniqueWithoutGuestInput = class WhatsappStatusUpdateWithWhereUniqueWithoutGuestInput {
};
__decorate([
    (0, graphql_1.Field)(() => WhatsappStatusWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => WhatsappStatusWhereUniqueInput)
], WhatsappStatusUpdateWithWhereUniqueWithoutGuestInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => WhatsappStatusUpdateWithoutGuestInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => WhatsappStatusUpdateWithoutGuestInput)
], WhatsappStatusUpdateWithWhereUniqueWithoutGuestInput.prototype, "data", void 0);
WhatsappStatusUpdateWithWhereUniqueWithoutGuestInput = __decorate([
    (0, graphql_5.InputType)()
], WhatsappStatusUpdateWithWhereUniqueWithoutGuestInput);
exports.WhatsappStatusUpdateWithWhereUniqueWithoutGuestInput = WhatsappStatusUpdateWithWhereUniqueWithoutGuestInput;
let WhatsappStatusUpdateWithoutGuestInput = class WhatsappStatusUpdateWithoutGuestInput {
};
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], WhatsappStatusUpdateWithoutGuestInput.prototype, "refId", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], WhatsappStatusUpdateWithoutGuestInput.prototype, "messageId", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], WhatsappStatusUpdateWithoutGuestInput.prototype, "message", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], WhatsappStatusUpdateWithoutGuestInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => EnumQueueStatusFieldUpdateOperationsInput, { nullable: true })
], WhatsappStatusUpdateWithoutGuestInput.prototype, "status", void 0);
WhatsappStatusUpdateWithoutGuestInput = __decorate([
    (0, graphql_5.InputType)()
], WhatsappStatusUpdateWithoutGuestInput);
exports.WhatsappStatusUpdateWithoutGuestInput = WhatsappStatusUpdateWithoutGuestInput;
let WhatsappStatusUpdateInput = class WhatsappStatusUpdateInput {
};
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], WhatsappStatusUpdateInput.prototype, "refId", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], WhatsappStatusUpdateInput.prototype, "messageId", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], WhatsappStatusUpdateInput.prototype, "message", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], WhatsappStatusUpdateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => EnumQueueStatusFieldUpdateOperationsInput, { nullable: true })
], WhatsappStatusUpdateInput.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestUpdateOneRequiredWithoutWhatsappStatusesNestedInput, { nullable: true })
], WhatsappStatusUpdateInput.prototype, "guest", void 0);
WhatsappStatusUpdateInput = __decorate([
    (0, graphql_5.InputType)()
], WhatsappStatusUpdateInput);
exports.WhatsappStatusUpdateInput = WhatsappStatusUpdateInput;
let WhatsappStatusUpsertWithWhereUniqueWithoutGuestInput = class WhatsappStatusUpsertWithWhereUniqueWithoutGuestInput {
};
__decorate([
    (0, graphql_1.Field)(() => WhatsappStatusWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => WhatsappStatusWhereUniqueInput)
], WhatsappStatusUpsertWithWhereUniqueWithoutGuestInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => WhatsappStatusUpdateWithoutGuestInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => WhatsappStatusUpdateWithoutGuestInput)
], WhatsappStatusUpsertWithWhereUniqueWithoutGuestInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => WhatsappStatusCreateWithoutGuestInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => WhatsappStatusCreateWithoutGuestInput)
], WhatsappStatusUpsertWithWhereUniqueWithoutGuestInput.prototype, "create", void 0);
WhatsappStatusUpsertWithWhereUniqueWithoutGuestInput = __decorate([
    (0, graphql_5.InputType)()
], WhatsappStatusUpsertWithWhereUniqueWithoutGuestInput);
exports.WhatsappStatusUpsertWithWhereUniqueWithoutGuestInput = WhatsappStatusUpsertWithWhereUniqueWithoutGuestInput;
let WhatsappStatusWhereUniqueInput = class WhatsappStatusWhereUniqueInput {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], WhatsappStatusWhereUniqueInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => [WhatsappStatusWhereInput], { nullable: true })
], WhatsappStatusWhereUniqueInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [WhatsappStatusWhereInput], { nullable: true })
], WhatsappStatusWhereUniqueInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [WhatsappStatusWhereInput], { nullable: true })
], WhatsappStatusWhereUniqueInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFilter, { nullable: true })
], WhatsappStatusWhereUniqueInput.prototype, "refId", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringNullableFilter, { nullable: true })
], WhatsappStatusWhereUniqueInput.prototype, "messageId", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringNullableFilter, { nullable: true })
], WhatsappStatusWhereUniqueInput.prototype, "message", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFilter, { nullable: true })
], WhatsappStatusWhereUniqueInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => EnumQueueStatusFilter, { nullable: true })
], WhatsappStatusWhereUniqueInput.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFilter, { nullable: true })
], WhatsappStatusWhereUniqueInput.prototype, "guestId", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestRelationFilter, { nullable: true })
], WhatsappStatusWhereUniqueInput.prototype, "guest", void 0);
WhatsappStatusWhereUniqueInput = __decorate([
    (0, graphql_5.InputType)()
], WhatsappStatusWhereUniqueInput);
exports.WhatsappStatusWhereUniqueInput = WhatsappStatusWhereUniqueInput;
let WhatsappStatusWhereInput = WhatsappStatusWhereInput_1 = class WhatsappStatusWhereInput {
};
__decorate([
    (0, graphql_1.Field)(() => [WhatsappStatusWhereInput_1], { nullable: true })
], WhatsappStatusWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [WhatsappStatusWhereInput_1], { nullable: true })
], WhatsappStatusWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [WhatsappStatusWhereInput_1], { nullable: true })
], WhatsappStatusWhereInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => IntFilter, { nullable: true })
], WhatsappStatusWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFilter, { nullable: true })
], WhatsappStatusWhereInput.prototype, "refId", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringNullableFilter, { nullable: true })
], WhatsappStatusWhereInput.prototype, "messageId", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringNullableFilter, { nullable: true })
], WhatsappStatusWhereInput.prototype, "message", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFilter, { nullable: true })
], WhatsappStatusWhereInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => EnumQueueStatusFilter, { nullable: true })
], WhatsappStatusWhereInput.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFilter, { nullable: true })
], WhatsappStatusWhereInput.prototype, "guestId", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestRelationFilter, { nullable: true })
], WhatsappStatusWhereInput.prototype, "guest", void 0);
WhatsappStatusWhereInput = WhatsappStatusWhereInput_1 = __decorate([
    (0, graphql_5.InputType)()
], WhatsappStatusWhereInput);
exports.WhatsappStatusWhereInput = WhatsappStatusWhereInput;
let WhatsappStatus = class WhatsappStatus {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], WhatsappStatus.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], WhatsappStatus.prototype, "refId", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], WhatsappStatus.prototype, "messageId", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], WhatsappStatus.prototype, "message", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], WhatsappStatus.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => QueueStatus, { nullable: false, defaultValue: 'QUEUE' })
], WhatsappStatus.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], WhatsappStatus.prototype, "guestId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Guest, { nullable: false })
], WhatsappStatus.prototype, "guest", void 0);
WhatsappStatus = __decorate([
    (0, graphql_2.ObjectType)()
], WhatsappStatus);
exports.WhatsappStatus = WhatsappStatus;
//# sourceMappingURL=index.js.map
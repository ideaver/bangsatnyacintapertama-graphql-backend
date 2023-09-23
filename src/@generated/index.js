"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var EmailQueueScalarWhereWithAggregatesInput_1, EmailQueueScalarWhereInput_1, EmailQueueWhereInput_1, GuestOrderByWithRelationInput_1, GuestScalarWhereWithAggregatesInput_1, GuestScalarWhereInput_1, GuestWhereInput_1, Guest_1, InvitationImageScalarWhereWithAggregatesInput_1, InvitationImageWhereInput_1, NestedDateTimeFilter_1, NestedDateTimeNullableFilter_1, NestedDateTimeNullableWithAggregatesFilter_1, NestedDateTimeWithAggregatesFilter_1, NestedEnumConfirmationStatusNullableFilter_1, NestedEnumConfirmationStatusNullableWithAggregatesFilter_1, NestedEnumQueueStatusFilter_1, NestedEnumQueueStatusWithAggregatesFilter_1, NestedEnumUserRoleFilter_1, NestedEnumUserRoleWithAggregatesFilter_1, NestedFloatFilter_1, NestedFloatNullableFilter_1, NestedFloatNullableWithAggregatesFilter_1, NestedIntFilter_1, NestedIntNullableFilter_1, NestedIntNullableWithAggregatesFilter_1, NestedIntWithAggregatesFilter_1, NestedStringFilter_1, NestedStringNullableFilter_1, NestedStringNullableWithAggregatesFilter_1, NestedStringWithAggregatesFilter_1, QrCodeScalarWhereWithAggregatesInput_1, QrCodeScalarWhereInput_1, QrCodeWhereInput_1, UserScalarWhereWithAggregatesInput_1, UserWhereInput_1, WhatsappQueueScalarWhereWithAggregatesInput_1, WhatsappQueueScalarWhereInput_1, WhatsappQueueWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailQueueUncheckedCreateWithoutGuestInput = exports.EmailQueueUncheckedCreateNestedManyWithoutGuestInput = exports.EmailQueueSumOrderByAggregateInput = exports.EmailQueueSumAggregate = exports.EmailQueueSumAggregateInput = exports.EmailQueueScalarWhereInput = exports.EmailQueueScalarWhereWithAggregatesInput = exports.EmailQueueOrderByWithRelationInput = exports.EmailQueueOrderByWithAggregationInput = exports.EmailQueueOrderByRelationAggregateInput = exports.EmailQueueMinOrderByAggregateInput = exports.EmailQueueMinAggregate = exports.EmailQueueMinAggregateInput = exports.EmailQueueMaxOrderByAggregateInput = exports.EmailQueueMaxAggregate = exports.EmailQueueMaxAggregateInput = exports.EmailQueueListRelationFilter = exports.EmailQueueGroupBy = exports.EmailQueueGroupByArgs = exports.EmailQueueCreateInput = exports.EmailQueueCreateWithoutGuestInput = exports.EmailQueueCreateOrConnectWithoutGuestInput = exports.EmailQueueCreateNestedManyWithoutGuestInput = exports.EmailQueueCreateManyInput = exports.EmailQueueCreateManyGuestInput = exports.EmailQueueCreateManyGuestInputEnvelope = exports.EmailQueueCountOrderByAggregateInput = exports.EmailQueueCountAggregate = exports.EmailQueueCountAggregateInput = exports.EmailQueueAvgOrderByAggregateInput = exports.EmailQueueAvgAggregate = exports.EmailQueueAvgAggregateInput = exports.EmailQueueAggregateArgs = exports.DeleteOneEmailQueueArgs = exports.DeleteManyEmailQueueArgs = exports.CreateOneEmailQueueArgs = exports.CreateManyEmailQueueArgs = exports.AggregateEmailQueue = exports.EmailQueueScalarFieldEnum = exports.GuestScalarFieldEnum = exports.InvitationImageScalarFieldEnum = exports.ConfirmationStatus = exports.NullsOrder = exports.QueueStatus = exports.SortOrder = exports.TransactionIsolationLevel = exports.UserRole = exports.QrCodeScalarFieldEnum = exports.UserScalarFieldEnum = exports.WhatsappQueueScalarFieldEnum = void 0;
exports.GuestCreateNestedOneWithoutQrcodeInput = exports.GuestCreateNestedOneWithoutInvitationImageInput = exports.GuestCreateNestedOneWithoutGroupMembersInput = exports.GuestCreateNestedOneWithoutEmailQueueInput = exports.GuestCreateNestedManyWithoutGroupMemberOfInput = exports.GuestCreateManyInput = exports.GuestCreateManyGroupMemberOfInput = exports.GuestCreateManyGroupMemberOfInputEnvelope = exports.GuestCount = exports.GuestCountOrderByAggregateInput = exports.GuestCountAggregate = exports.GuestCountAggregateInput = exports.GuestAvgOrderByAggregateInput = exports.GuestAvgAggregate = exports.GuestAvgAggregateInput = exports.GuestAggregateArgs = exports.FindUniqueGuestArgs = exports.FindUniqueGuestOrThrowArgs = exports.FindManyGuestArgs = exports.FindFirstGuestArgs = exports.FindFirstGuestOrThrowArgs = exports.DeleteOneGuestArgs = exports.DeleteManyGuestArgs = exports.CreateOneGuestArgs = exports.CreateManyGuestArgs = exports.AggregateGuest = exports.UpsertOneEmailQueueArgs = exports.UpdateOneEmailQueueArgs = exports.UpdateManyEmailQueueArgs = exports.FindUniqueEmailQueueArgs = exports.FindUniqueEmailQueueOrThrowArgs = exports.FindManyEmailQueueArgs = exports.FindFirstEmailQueueArgs = exports.FindFirstEmailQueueOrThrowArgs = exports.EmailQueue = exports.EmailQueueWhereInput = exports.EmailQueueWhereUniqueInput = exports.EmailQueueUpsertWithWhereUniqueWithoutGuestInput = exports.EmailQueueUpdateInput = exports.EmailQueueUpdateWithoutGuestInput = exports.EmailQueueUpdateWithWhereUniqueWithoutGuestInput = exports.EmailQueueUpdateManyWithoutGuestNestedInput = exports.EmailQueueUpdateManyWithWhereWithoutGuestInput = exports.EmailQueueUpdateManyMutationInput = exports.EmailQueueUncheckedUpdateInput = exports.EmailQueueUncheckedUpdateWithoutGuestInput = exports.EmailQueueUncheckedUpdateManyInput = exports.EmailQueueUncheckedUpdateManyWithoutGuestInput = exports.EmailQueueUncheckedUpdateManyWithoutGuestNestedInput = exports.EmailQueueUncheckedCreateInput = void 0;
exports.GuestUncheckedUpdateWithoutWhatsappQueueInput = exports.GuestUncheckedUpdateWithoutQrcodeInput = exports.GuestUncheckedUpdateWithoutInvitationImageInput = exports.GuestUncheckedUpdateWithoutGroupMembersInput = exports.GuestUncheckedUpdateWithoutGroupMemberOfInput = exports.GuestUncheckedUpdateWithoutEmailQueueInput = exports.GuestUncheckedUpdateManyInput = exports.GuestUncheckedUpdateManyWithoutGroupMemberOfInput = exports.GuestUncheckedUpdateManyWithoutGroupMemberOfNestedInput = exports.GuestUncheckedCreateInput = exports.GuestUncheckedCreateWithoutWhatsappQueueInput = exports.GuestUncheckedCreateWithoutQrcodeInput = exports.GuestUncheckedCreateWithoutInvitationImageInput = exports.GuestUncheckedCreateWithoutGroupMembersInput = exports.GuestUncheckedCreateWithoutGroupMemberOfInput = exports.GuestUncheckedCreateWithoutEmailQueueInput = exports.GuestUncheckedCreateNestedManyWithoutGroupMemberOfInput = exports.GuestSumOrderByAggregateInput = exports.GuestSumAggregate = exports.GuestSumAggregateInput = exports.GuestScalarWhereInput = exports.GuestScalarWhereWithAggregatesInput = exports.GuestRelationFilter = exports.GuestOrderByWithRelationInput = exports.GuestOrderByWithAggregationInput = exports.GuestOrderByRelationAggregateInput = exports.GuestNullableRelationFilter = exports.GuestMinOrderByAggregateInput = exports.GuestMinAggregate = exports.GuestMinAggregateInput = exports.GuestMaxOrderByAggregateInput = exports.GuestMaxAggregate = exports.GuestMaxAggregateInput = exports.GuestListRelationFilter = exports.GuestGroupBy = exports.GuestGroupByArgs = exports.GuestCreateInput = exports.GuestCreateWithoutWhatsappQueueInput = exports.GuestCreateWithoutQrcodeInput = exports.GuestCreateWithoutInvitationImageInput = exports.GuestCreateWithoutGroupMembersInput = exports.GuestCreateWithoutGroupMemberOfInput = exports.GuestCreateWithoutEmailQueueInput = exports.GuestCreateOrConnectWithoutWhatsappQueueInput = exports.GuestCreateOrConnectWithoutQrcodeInput = exports.GuestCreateOrConnectWithoutInvitationImageInput = exports.GuestCreateOrConnectWithoutGroupMembersInput = exports.GuestCreateOrConnectWithoutGroupMemberOfInput = exports.GuestCreateOrConnectWithoutEmailQueueInput = exports.GuestCreateNestedOneWithoutWhatsappQueueInput = void 0;
exports.InvitationImageCountAggregate = exports.InvitationImageCountAggregateInput = exports.InvitationImageAvgOrderByAggregateInput = exports.InvitationImageAvgAggregate = exports.InvitationImageAvgAggregateInput = exports.InvitationImageAggregateArgs = exports.FindUniqueInvitationImageArgs = exports.FindUniqueInvitationImageOrThrowArgs = exports.FindManyInvitationImageArgs = exports.FindFirstInvitationImageArgs = exports.FindFirstInvitationImageOrThrowArgs = exports.DeleteOneInvitationImageArgs = exports.DeleteManyInvitationImageArgs = exports.CreateOneInvitationImageArgs = exports.CreateManyInvitationImageArgs = exports.AggregateInvitationImage = exports.UpsertOneGuestArgs = exports.UpdateOneGuestArgs = exports.UpdateManyGuestArgs = exports.Guest = exports.GuestWhereInput = exports.GuestWhereUniqueInput = exports.GuestUpsertWithoutWhatsappQueueInput = exports.GuestUpsertWithoutQrcodeInput = exports.GuestUpsertWithoutInvitationImageInput = exports.GuestUpsertWithoutGroupMembersInput = exports.GuestUpsertWithoutEmailQueueInput = exports.GuestUpsertWithWhereUniqueWithoutGroupMemberOfInput = exports.GuestUpdateInput = exports.GuestUpdateWithoutWhatsappQueueInput = exports.GuestUpdateWithoutQrcodeInput = exports.GuestUpdateWithoutInvitationImageInput = exports.GuestUpdateWithoutGroupMembersInput = exports.GuestUpdateWithoutGroupMemberOfInput = exports.GuestUpdateWithoutEmailQueueInput = exports.GuestUpdateWithWhereUniqueWithoutGroupMemberOfInput = exports.GuestUpdateToOneWithWhereWithoutWhatsappQueueInput = exports.GuestUpdateToOneWithWhereWithoutQrcodeInput = exports.GuestUpdateToOneWithWhereWithoutInvitationImageInput = exports.GuestUpdateToOneWithWhereWithoutGroupMembersInput = exports.GuestUpdateToOneWithWhereWithoutEmailQueueInput = exports.GuestUpdateOneWithoutGroupMembersNestedInput = exports.GuestUpdateOneRequiredWithoutWhatsappQueueNestedInput = exports.GuestUpdateOneRequiredWithoutQrcodeNestedInput = exports.GuestUpdateOneRequiredWithoutInvitationImageNestedInput = exports.GuestUpdateOneRequiredWithoutEmailQueueNestedInput = exports.GuestUpdateManyWithoutGroupMemberOfNestedInput = exports.GuestUpdateManyWithWhereWithoutGroupMemberOfInput = exports.GuestUpdateManyMutationInput = exports.GuestUncheckedUpdateInput = void 0;
exports.EnumQueueStatusFilter = exports.EnumQueueStatusFieldUpdateOperationsInput = exports.EnumConfirmationStatusNullableWithAggregatesFilter = exports.EnumConfirmationStatusNullableFilter = exports.DateTimeWithAggregatesFilter = exports.DateTimeNullableWithAggregatesFilter = exports.DateTimeNullableFilter = exports.DateTimeFilter = exports.DateTimeFieldUpdateOperationsInput = exports.AffectedRows = exports.UpsertOneInvitationImageArgs = exports.UpdateOneInvitationImageArgs = exports.UpdateManyInvitationImageArgs = exports.InvitationImage = exports.InvitationImageWhereInput = exports.InvitationImageWhereUniqueInput = exports.InvitationImageUpsertWithoutGuestInput = exports.InvitationImageUpdateInput = exports.InvitationImageUpdateWithoutGuestInput = exports.InvitationImageUpdateToOneWithWhereWithoutGuestInput = exports.InvitationImageUpdateOneWithoutGuestNestedInput = exports.InvitationImageUpdateManyMutationInput = exports.InvitationImageUncheckedUpdateInput = exports.InvitationImageUncheckedUpdateWithoutGuestInput = exports.InvitationImageUncheckedUpdateOneWithoutGuestNestedInput = exports.InvitationImageUncheckedUpdateManyInput = exports.InvitationImageUncheckedCreateInput = exports.InvitationImageUncheckedCreateWithoutGuestInput = exports.InvitationImageUncheckedCreateNestedOneWithoutGuestInput = exports.InvitationImageSumOrderByAggregateInput = exports.InvitationImageSumAggregate = exports.InvitationImageSumAggregateInput = exports.InvitationImageScalarWhereWithAggregatesInput = exports.InvitationImageOrderByWithRelationInput = exports.InvitationImageOrderByWithAggregationInput = exports.InvitationImageNullableRelationFilter = exports.InvitationImageMinOrderByAggregateInput = exports.InvitationImageMinAggregate = exports.InvitationImageMinAggregateInput = exports.InvitationImageMaxOrderByAggregateInput = exports.InvitationImageMaxAggregate = exports.InvitationImageMaxAggregateInput = exports.InvitationImageGroupBy = exports.InvitationImageGroupByArgs = exports.InvitationImageCreateInput = exports.InvitationImageCreateWithoutGuestInput = exports.InvitationImageCreateOrConnectWithoutGuestInput = exports.InvitationImageCreateNestedOneWithoutGuestInput = exports.InvitationImageCreateManyInput = exports.InvitationImageCountOrderByAggregateInput = void 0;
exports.FindFirstQrCodeArgs = exports.FindFirstQrCodeOrThrowArgs = exports.DeleteOneQrCodeArgs = exports.DeleteManyQrCodeArgs = exports.CreateOneQrCodeArgs = exports.CreateManyQrCodeArgs = exports.AggregateQrCode = exports.StringWithAggregatesFilter = exports.StringNullableWithAggregatesFilter = exports.StringNullableFilter = exports.StringFilter = exports.StringFieldUpdateOperationsInput = exports.SortOrderInput = exports.NullableStringFieldUpdateOperationsInput = exports.NullableIntFieldUpdateOperationsInput = exports.NullableFloatFieldUpdateOperationsInput = exports.NullableEnumConfirmationStatusFieldUpdateOperationsInput = exports.NullableDateTimeFieldUpdateOperationsInput = exports.NestedStringWithAggregatesFilter = exports.NestedStringNullableWithAggregatesFilter = exports.NestedStringNullableFilter = exports.NestedStringFilter = exports.NestedIntWithAggregatesFilter = exports.NestedIntNullableWithAggregatesFilter = exports.NestedIntNullableFilter = exports.NestedIntFilter = exports.NestedFloatNullableWithAggregatesFilter = exports.NestedFloatNullableFilter = exports.NestedFloatFilter = exports.NestedEnumUserRoleWithAggregatesFilter = exports.NestedEnumUserRoleFilter = exports.NestedEnumQueueStatusWithAggregatesFilter = exports.NestedEnumQueueStatusFilter = exports.NestedEnumConfirmationStatusNullableWithAggregatesFilter = exports.NestedEnumConfirmationStatusNullableFilter = exports.NestedDateTimeWithAggregatesFilter = exports.NestedDateTimeNullableWithAggregatesFilter = exports.NestedDateTimeNullableFilter = exports.NestedDateTimeFilter = exports.IntWithAggregatesFilter = exports.IntNullableWithAggregatesFilter = exports.IntNullableFilter = exports.IntFilter = exports.IntFieldUpdateOperationsInput = exports.FloatNullableWithAggregatesFilter = exports.FloatNullableFilter = exports.EnumUserRoleWithAggregatesFilter = exports.EnumUserRoleFilter = exports.EnumUserRoleFieldUpdateOperationsInput = exports.EnumQueueStatusWithAggregatesFilter = void 0;
exports.QrCodeUncheckedUpdateInput = exports.QrCodeUncheckedUpdateWithoutScannedByInput = exports.QrCodeUncheckedUpdateWithoutGuestInput = exports.QrCodeUncheckedUpdateOneWithoutGuestNestedInput = exports.QrCodeUncheckedUpdateManyInput = exports.QrCodeUncheckedUpdateManyWithoutScannedByInput = exports.QrCodeUncheckedUpdateManyWithoutScannedByNestedInput = exports.QrCodeUncheckedCreateInput = exports.QrCodeUncheckedCreateWithoutScannedByInput = exports.QrCodeUncheckedCreateWithoutGuestInput = exports.QrCodeUncheckedCreateNestedOneWithoutGuestInput = exports.QrCodeUncheckedCreateNestedManyWithoutScannedByInput = exports.QrCodeSumOrderByAggregateInput = exports.QrCodeSumAggregate = exports.QrCodeSumAggregateInput = exports.QrCodeScalarWhereInput = exports.QrCodeScalarWhereWithAggregatesInput = exports.QrCodeOrderByWithRelationInput = exports.QrCodeOrderByWithAggregationInput = exports.QrCodeOrderByRelationAggregateInput = exports.QrCodeNullableRelationFilter = exports.QrCodeMinOrderByAggregateInput = exports.QrCodeMinAggregate = exports.QrCodeMinAggregateInput = exports.QrCodeMaxOrderByAggregateInput = exports.QrCodeMaxAggregate = exports.QrCodeMaxAggregateInput = exports.QrCodeListRelationFilter = exports.QrCodeGroupBy = exports.QrCodeGroupByArgs = exports.QrCodeCreateInput = exports.QrCodeCreateWithoutScannedByInput = exports.QrCodeCreateWithoutGuestInput = exports.QrCodeCreateOrConnectWithoutScannedByInput = exports.QrCodeCreateOrConnectWithoutGuestInput = exports.QrCodeCreateNestedOneWithoutGuestInput = exports.QrCodeCreateNestedManyWithoutScannedByInput = exports.QrCodeCreateManyInput = exports.QrCodeCreateManyScannedByInput = exports.QrCodeCreateManyScannedByInputEnvelope = exports.QrCodeCountOrderByAggregateInput = exports.QrCodeCountAggregate = exports.QrCodeCountAggregateInput = exports.QrCodeAvgOrderByAggregateInput = exports.QrCodeAvgAggregate = exports.QrCodeAvgAggregateInput = exports.QrCodeAggregateArgs = exports.FindUniqueQrCodeArgs = exports.FindUniqueQrCodeOrThrowArgs = exports.FindManyQrCodeArgs = void 0;
exports.UserOrderByWithAggregationInput = exports.UserNullableRelationFilter = exports.UserMinOrderByAggregateInput = exports.UserMinAggregate = exports.UserMinAggregateInput = exports.UserMaxOrderByAggregateInput = exports.UserMaxAggregate = exports.UserMaxAggregateInput = exports.UserGroupBy = exports.UserGroupByArgs = exports.UserCreateInput = exports.UserCreateWithoutScannedQrsInput = exports.UserCreateOrConnectWithoutScannedQrsInput = exports.UserCreateNestedOneWithoutScannedQrsInput = exports.UserCreateManyInput = exports.UserCount = exports.UserCountOrderByAggregateInput = exports.UserCountAggregate = exports.UserCountAggregateInput = exports.UserAggregateArgs = exports.UpsertOneUserArgs = exports.UpdateOneUserArgs = exports.UpdateManyUserArgs = exports.FindUniqueUserArgs = exports.FindUniqueUserOrThrowArgs = exports.FindManyUserArgs = exports.FindFirstUserArgs = exports.FindFirstUserOrThrowArgs = exports.DeleteOneUserArgs = exports.DeleteManyUserArgs = exports.CreateOneUserArgs = exports.CreateManyUserArgs = exports.AggregateUser = exports.UpsertOneQrCodeArgs = exports.UpdateOneQrCodeArgs = exports.UpdateManyQrCodeArgs = exports.QrCode = exports.QrCodeWhereInput = exports.QrCodeWhereUniqueInput = exports.QrCodeUpsertWithoutGuestInput = exports.QrCodeUpsertWithWhereUniqueWithoutScannedByInput = exports.QrCodeUpdateInput = exports.QrCodeUpdateWithoutScannedByInput = exports.QrCodeUpdateWithoutGuestInput = exports.QrCodeUpdateWithWhereUniqueWithoutScannedByInput = exports.QrCodeUpdateToOneWithWhereWithoutGuestInput = exports.QrCodeUpdateOneWithoutGuestNestedInput = exports.QrCodeUpdateManyWithoutScannedByNestedInput = exports.QrCodeUpdateManyWithWhereWithoutScannedByInput = exports.QrCodeUpdateManyMutationInput = void 0;
exports.WhatsappQueueMinAggregateInput = exports.WhatsappQueueMaxOrderByAggregateInput = exports.WhatsappQueueMaxAggregate = exports.WhatsappQueueMaxAggregateInput = exports.WhatsappQueueListRelationFilter = exports.WhatsappQueueGroupBy = exports.WhatsappQueueGroupByArgs = exports.WhatsappQueueCreateInput = exports.WhatsappQueueCreateWithoutGuestInput = exports.WhatsappQueueCreateOrConnectWithoutGuestInput = exports.WhatsappQueueCreateNestedManyWithoutGuestInput = exports.WhatsappQueueCreateManyInput = exports.WhatsappQueueCreateManyGuestInput = exports.WhatsappQueueCreateManyGuestInputEnvelope = exports.WhatsappQueueCountOrderByAggregateInput = exports.WhatsappQueueCountAggregate = exports.WhatsappQueueCountAggregateInput = exports.WhatsappQueueAvgOrderByAggregateInput = exports.WhatsappQueueAvgAggregate = exports.WhatsappQueueAvgAggregateInput = exports.WhatsappQueueAggregateArgs = exports.UpsertOneWhatsappQueueArgs = exports.UpdateOneWhatsappQueueArgs = exports.UpdateManyWhatsappQueueArgs = exports.FindUniqueWhatsappQueueArgs = exports.FindUniqueWhatsappQueueOrThrowArgs = exports.FindManyWhatsappQueueArgs = exports.FindFirstWhatsappQueueArgs = exports.FindFirstWhatsappQueueOrThrowArgs = exports.DeleteOneWhatsappQueueArgs = exports.DeleteManyWhatsappQueueArgs = exports.CreateOneWhatsappQueueArgs = exports.CreateManyWhatsappQueueArgs = exports.AggregateWhatsappQueue = exports.User = exports.UserWhereInput = exports.UserWhereUniqueInput = exports.UserUpsertWithoutScannedQrsInput = exports.UserUpdateInput = exports.UserUpdateWithoutScannedQrsInput = exports.UserUpdateToOneWithWhereWithoutScannedQrsInput = exports.UserUpdateOneWithoutScannedQrsNestedInput = exports.UserUpdateManyMutationInput = exports.UserUncheckedUpdateInput = exports.UserUncheckedUpdateWithoutScannedQrsInput = exports.UserUncheckedUpdateManyInput = exports.UserUncheckedCreateInput = exports.UserUncheckedCreateWithoutScannedQrsInput = exports.UserScalarWhereWithAggregatesInput = exports.UserOrderByWithRelationInput = void 0;
exports.WhatsappQueue = exports.WhatsappQueueWhereInput = exports.WhatsappQueueWhereUniqueInput = exports.WhatsappQueueUpsertWithWhereUniqueWithoutGuestInput = exports.WhatsappQueueUpdateInput = exports.WhatsappQueueUpdateWithoutGuestInput = exports.WhatsappQueueUpdateWithWhereUniqueWithoutGuestInput = exports.WhatsappQueueUpdateManyWithoutGuestNestedInput = exports.WhatsappQueueUpdateManyWithWhereWithoutGuestInput = exports.WhatsappQueueUpdateManyMutationInput = exports.WhatsappQueueUncheckedUpdateInput = exports.WhatsappQueueUncheckedUpdateWithoutGuestInput = exports.WhatsappQueueUncheckedUpdateManyInput = exports.WhatsappQueueUncheckedUpdateManyWithoutGuestInput = exports.WhatsappQueueUncheckedUpdateManyWithoutGuestNestedInput = exports.WhatsappQueueUncheckedCreateInput = exports.WhatsappQueueUncheckedCreateWithoutGuestInput = exports.WhatsappQueueUncheckedCreateNestedManyWithoutGuestInput = exports.WhatsappQueueSumOrderByAggregateInput = exports.WhatsappQueueSumAggregate = exports.WhatsappQueueSumAggregateInput = exports.WhatsappQueueScalarWhereInput = exports.WhatsappQueueScalarWhereWithAggregatesInput = exports.WhatsappQueueOrderByWithRelationInput = exports.WhatsappQueueOrderByWithAggregationInput = exports.WhatsappQueueOrderByRelationAggregateInput = exports.WhatsappQueueMinOrderByAggregateInput = exports.WhatsappQueueMinAggregate = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const class_transformer_1 = require("class-transformer");
const graphql_4 = require("@nestjs/graphql");
const graphql_5 = require("@nestjs/graphql");
const graphql_6 = require("@nestjs/graphql");
const graphql_7 = require("@nestjs/graphql");
var WhatsappQueueScalarFieldEnum;
(function (WhatsappQueueScalarFieldEnum) {
    WhatsappQueueScalarFieldEnum["id"] = "id";
    WhatsappQueueScalarFieldEnum["createdAt"] = "createdAt";
    WhatsappQueueScalarFieldEnum["status"] = "status";
    WhatsappQueueScalarFieldEnum["guestId"] = "guestId";
})(WhatsappQueueScalarFieldEnum = exports.WhatsappQueueScalarFieldEnum || (exports.WhatsappQueueScalarFieldEnum = {}));
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
    QueueStatus["WAITING"] = "WAITING";
    QueueStatus["SENDING"] = "SENDING";
    QueueStatus["SENT"] = "SENT";
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
    GuestScalarFieldEnum["qrcodeId"] = "qrcodeId";
    GuestScalarFieldEnum["invitationImageId"] = "invitationImageId";
})(GuestScalarFieldEnum = exports.GuestScalarFieldEnum || (exports.GuestScalarFieldEnum = {}));
var EmailQueueScalarFieldEnum;
(function (EmailQueueScalarFieldEnum) {
    EmailQueueScalarFieldEnum["id"] = "id";
    EmailQueueScalarFieldEnum["createdAt"] = "createdAt";
    EmailQueueScalarFieldEnum["status"] = "status";
    EmailQueueScalarFieldEnum["guestId"] = "guestId";
})(EmailQueueScalarFieldEnum = exports.EmailQueueScalarFieldEnum || (exports.EmailQueueScalarFieldEnum = {}));
(0, graphql_7.registerEnumType)(EmailQueueScalarFieldEnum, { name: 'EmailQueueScalarFieldEnum', description: undefined });
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
(0, graphql_7.registerEnumType)(WhatsappQueueScalarFieldEnum, { name: 'WhatsappQueueScalarFieldEnum', description: undefined });
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
    (0, graphql_2.ObjectType)()
], AggregateEmailQueue);
exports.AggregateEmailQueue = AggregateEmailQueue;
let CreateManyEmailQueueArgs = class CreateManyEmailQueueArgs {
};
__decorate([
    (0, graphql_1.Field)(() => [EmailQueueCreateManyInput], { nullable: false }),
    (0, class_transformer_1.Type)(() => EmailQueueCreateManyInput)
], CreateManyEmailQueueArgs.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], CreateManyEmailQueueArgs.prototype, "skipDuplicates", void 0);
CreateManyEmailQueueArgs = __decorate([
    (0, graphql_3.ArgsType)()
], CreateManyEmailQueueArgs);
exports.CreateManyEmailQueueArgs = CreateManyEmailQueueArgs;
let CreateOneEmailQueueArgs = class CreateOneEmailQueueArgs {
};
__decorate([
    (0, graphql_1.Field)(() => EmailQueueCreateInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => EmailQueueCreateInput)
], CreateOneEmailQueueArgs.prototype, "data", void 0);
CreateOneEmailQueueArgs = __decorate([
    (0, graphql_3.ArgsType)()
], CreateOneEmailQueueArgs);
exports.CreateOneEmailQueueArgs = CreateOneEmailQueueArgs;
let DeleteManyEmailQueueArgs = class DeleteManyEmailQueueArgs {
};
__decorate([
    (0, graphql_1.Field)(() => EmailQueueWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => EmailQueueWhereInput)
], DeleteManyEmailQueueArgs.prototype, "where", void 0);
DeleteManyEmailQueueArgs = __decorate([
    (0, graphql_3.ArgsType)()
], DeleteManyEmailQueueArgs);
exports.DeleteManyEmailQueueArgs = DeleteManyEmailQueueArgs;
let DeleteOneEmailQueueArgs = class DeleteOneEmailQueueArgs {
};
__decorate([
    (0, graphql_1.Field)(() => EmailQueueWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => EmailQueueWhereUniqueInput)
], DeleteOneEmailQueueArgs.prototype, "where", void 0);
DeleteOneEmailQueueArgs = __decorate([
    (0, graphql_3.ArgsType)()
], DeleteOneEmailQueueArgs);
exports.DeleteOneEmailQueueArgs = DeleteOneEmailQueueArgs;
let EmailQueueAggregateArgs = class EmailQueueAggregateArgs {
};
__decorate([
    (0, graphql_1.Field)(() => EmailQueueWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => EmailQueueWhereInput)
], EmailQueueAggregateArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [EmailQueueOrderByWithRelationInput], { nullable: true })
], EmailQueueAggregateArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => EmailQueueWhereUniqueInput, { nullable: true })
], EmailQueueAggregateArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], EmailQueueAggregateArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], EmailQueueAggregateArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => EmailQueueCountAggregateInput, { nullable: true })
], EmailQueueAggregateArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => EmailQueueAvgAggregateInput, { nullable: true })
], EmailQueueAggregateArgs.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => EmailQueueSumAggregateInput, { nullable: true })
], EmailQueueAggregateArgs.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => EmailQueueMinAggregateInput, { nullable: true })
], EmailQueueAggregateArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => EmailQueueMaxAggregateInput, { nullable: true })
], EmailQueueAggregateArgs.prototype, "_max", void 0);
EmailQueueAggregateArgs = __decorate([
    (0, graphql_3.ArgsType)()
], EmailQueueAggregateArgs);
exports.EmailQueueAggregateArgs = EmailQueueAggregateArgs;
let EmailQueueAvgAggregateInput = class EmailQueueAvgAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], EmailQueueAvgAggregateInput.prototype, "id", void 0);
EmailQueueAvgAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], EmailQueueAvgAggregateInput);
exports.EmailQueueAvgAggregateInput = EmailQueueAvgAggregateInput;
let EmailQueueAvgAggregate = class EmailQueueAvgAggregate {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_6.Float, { nullable: true })
], EmailQueueAvgAggregate.prototype, "id", void 0);
EmailQueueAvgAggregate = __decorate([
    (0, graphql_2.ObjectType)()
], EmailQueueAvgAggregate);
exports.EmailQueueAvgAggregate = EmailQueueAvgAggregate;
let EmailQueueAvgOrderByAggregateInput = class EmailQueueAvgOrderByAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], EmailQueueAvgOrderByAggregateInput.prototype, "id", void 0);
EmailQueueAvgOrderByAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], EmailQueueAvgOrderByAggregateInput);
exports.EmailQueueAvgOrderByAggregateInput = EmailQueueAvgOrderByAggregateInput;
let EmailQueueCountAggregateInput = class EmailQueueCountAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], EmailQueueCountAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], EmailQueueCountAggregateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], EmailQueueCountAggregateInput.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], EmailQueueCountAggregateInput.prototype, "guestId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], EmailQueueCountAggregateInput.prototype, "_all", void 0);
EmailQueueCountAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], EmailQueueCountAggregateInput);
exports.EmailQueueCountAggregateInput = EmailQueueCountAggregateInput;
let EmailQueueCountAggregate = class EmailQueueCountAggregate {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], EmailQueueCountAggregate.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], EmailQueueCountAggregate.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], EmailQueueCountAggregate.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], EmailQueueCountAggregate.prototype, "guestId", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], EmailQueueCountAggregate.prototype, "_all", void 0);
EmailQueueCountAggregate = __decorate([
    (0, graphql_2.ObjectType)()
], EmailQueueCountAggregate);
exports.EmailQueueCountAggregate = EmailQueueCountAggregate;
let EmailQueueCountOrderByAggregateInput = class EmailQueueCountOrderByAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], EmailQueueCountOrderByAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], EmailQueueCountOrderByAggregateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], EmailQueueCountOrderByAggregateInput.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], EmailQueueCountOrderByAggregateInput.prototype, "guestId", void 0);
EmailQueueCountOrderByAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], EmailQueueCountOrderByAggregateInput);
exports.EmailQueueCountOrderByAggregateInput = EmailQueueCountOrderByAggregateInput;
let EmailQueueCreateManyGuestInputEnvelope = class EmailQueueCreateManyGuestInputEnvelope {
};
__decorate([
    (0, graphql_1.Field)(() => [EmailQueueCreateManyGuestInput], { nullable: false }),
    (0, class_transformer_1.Type)(() => EmailQueueCreateManyGuestInput)
], EmailQueueCreateManyGuestInputEnvelope.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], EmailQueueCreateManyGuestInputEnvelope.prototype, "skipDuplicates", void 0);
EmailQueueCreateManyGuestInputEnvelope = __decorate([
    (0, graphql_5.InputType)()
], EmailQueueCreateManyGuestInputEnvelope);
exports.EmailQueueCreateManyGuestInputEnvelope = EmailQueueCreateManyGuestInputEnvelope;
let EmailQueueCreateManyGuestInput = class EmailQueueCreateManyGuestInput {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], EmailQueueCreateManyGuestInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], EmailQueueCreateManyGuestInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => QueueStatus, { nullable: true })
], EmailQueueCreateManyGuestInput.prototype, "status", void 0);
EmailQueueCreateManyGuestInput = __decorate([
    (0, graphql_5.InputType)()
], EmailQueueCreateManyGuestInput);
exports.EmailQueueCreateManyGuestInput = EmailQueueCreateManyGuestInput;
let EmailQueueCreateManyInput = class EmailQueueCreateManyInput {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], EmailQueueCreateManyInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], EmailQueueCreateManyInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => QueueStatus, { nullable: true })
], EmailQueueCreateManyInput.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], EmailQueueCreateManyInput.prototype, "guestId", void 0);
EmailQueueCreateManyInput = __decorate([
    (0, graphql_5.InputType)()
], EmailQueueCreateManyInput);
exports.EmailQueueCreateManyInput = EmailQueueCreateManyInput;
let EmailQueueCreateNestedManyWithoutGuestInput = class EmailQueueCreateNestedManyWithoutGuestInput {
};
__decorate([
    (0, graphql_1.Field)(() => [EmailQueueCreateWithoutGuestInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => EmailQueueCreateWithoutGuestInput)
], EmailQueueCreateNestedManyWithoutGuestInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [EmailQueueCreateOrConnectWithoutGuestInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => EmailQueueCreateOrConnectWithoutGuestInput)
], EmailQueueCreateNestedManyWithoutGuestInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => EmailQueueCreateManyGuestInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => EmailQueueCreateManyGuestInputEnvelope)
], EmailQueueCreateNestedManyWithoutGuestInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [EmailQueueWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => EmailQueueWhereUniqueInput)
], EmailQueueCreateNestedManyWithoutGuestInput.prototype, "connect", void 0);
EmailQueueCreateNestedManyWithoutGuestInput = __decorate([
    (0, graphql_5.InputType)()
], EmailQueueCreateNestedManyWithoutGuestInput);
exports.EmailQueueCreateNestedManyWithoutGuestInput = EmailQueueCreateNestedManyWithoutGuestInput;
let EmailQueueCreateOrConnectWithoutGuestInput = class EmailQueueCreateOrConnectWithoutGuestInput {
};
__decorate([
    (0, graphql_1.Field)(() => EmailQueueWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => EmailQueueWhereUniqueInput)
], EmailQueueCreateOrConnectWithoutGuestInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => EmailQueueCreateWithoutGuestInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => EmailQueueCreateWithoutGuestInput)
], EmailQueueCreateOrConnectWithoutGuestInput.prototype, "create", void 0);
EmailQueueCreateOrConnectWithoutGuestInput = __decorate([
    (0, graphql_5.InputType)()
], EmailQueueCreateOrConnectWithoutGuestInput);
exports.EmailQueueCreateOrConnectWithoutGuestInput = EmailQueueCreateOrConnectWithoutGuestInput;
let EmailQueueCreateWithoutGuestInput = class EmailQueueCreateWithoutGuestInput {
};
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], EmailQueueCreateWithoutGuestInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => QueueStatus, { nullable: true })
], EmailQueueCreateWithoutGuestInput.prototype, "status", void 0);
EmailQueueCreateWithoutGuestInput = __decorate([
    (0, graphql_5.InputType)()
], EmailQueueCreateWithoutGuestInput);
exports.EmailQueueCreateWithoutGuestInput = EmailQueueCreateWithoutGuestInput;
let EmailQueueCreateInput = class EmailQueueCreateInput {
};
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], EmailQueueCreateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => QueueStatus, { nullable: true })
], EmailQueueCreateInput.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestCreateNestedOneWithoutEmailQueueInput, { nullable: false })
], EmailQueueCreateInput.prototype, "guest", void 0);
EmailQueueCreateInput = __decorate([
    (0, graphql_5.InputType)()
], EmailQueueCreateInput);
exports.EmailQueueCreateInput = EmailQueueCreateInput;
let EmailQueueGroupByArgs = class EmailQueueGroupByArgs {
};
__decorate([
    (0, graphql_1.Field)(() => EmailQueueWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => EmailQueueWhereInput)
], EmailQueueGroupByArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [EmailQueueOrderByWithAggregationInput], { nullable: true })
], EmailQueueGroupByArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => [EmailQueueScalarFieldEnum], { nullable: false })
], EmailQueueGroupByArgs.prototype, "by", void 0);
__decorate([
    (0, graphql_1.Field)(() => EmailQueueScalarWhereWithAggregatesInput, { nullable: true })
], EmailQueueGroupByArgs.prototype, "having", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], EmailQueueGroupByArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], EmailQueueGroupByArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => EmailQueueCountAggregateInput, { nullable: true })
], EmailQueueGroupByArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => EmailQueueAvgAggregateInput, { nullable: true })
], EmailQueueGroupByArgs.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => EmailQueueSumAggregateInput, { nullable: true })
], EmailQueueGroupByArgs.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => EmailQueueMinAggregateInput, { nullable: true })
], EmailQueueGroupByArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => EmailQueueMaxAggregateInput, { nullable: true })
], EmailQueueGroupByArgs.prototype, "_max", void 0);
EmailQueueGroupByArgs = __decorate([
    (0, graphql_3.ArgsType)()
], EmailQueueGroupByArgs);
exports.EmailQueueGroupByArgs = EmailQueueGroupByArgs;
let EmailQueueGroupBy = class EmailQueueGroupBy {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
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
    (0, graphql_2.ObjectType)()
], EmailQueueGroupBy);
exports.EmailQueueGroupBy = EmailQueueGroupBy;
let EmailQueueListRelationFilter = class EmailQueueListRelationFilter {
};
__decorate([
    (0, graphql_1.Field)(() => EmailQueueWhereInput, { nullable: true })
], EmailQueueListRelationFilter.prototype, "every", void 0);
__decorate([
    (0, graphql_1.Field)(() => EmailQueueWhereInput, { nullable: true })
], EmailQueueListRelationFilter.prototype, "some", void 0);
__decorate([
    (0, graphql_1.Field)(() => EmailQueueWhereInput, { nullable: true })
], EmailQueueListRelationFilter.prototype, "none", void 0);
EmailQueueListRelationFilter = __decorate([
    (0, graphql_5.InputType)()
], EmailQueueListRelationFilter);
exports.EmailQueueListRelationFilter = EmailQueueListRelationFilter;
let EmailQueueMaxAggregateInput = class EmailQueueMaxAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], EmailQueueMaxAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], EmailQueueMaxAggregateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], EmailQueueMaxAggregateInput.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], EmailQueueMaxAggregateInput.prototype, "guestId", void 0);
EmailQueueMaxAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], EmailQueueMaxAggregateInput);
exports.EmailQueueMaxAggregateInput = EmailQueueMaxAggregateInput;
let EmailQueueMaxAggregate = class EmailQueueMaxAggregate {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
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
    (0, graphql_2.ObjectType)()
], EmailQueueMaxAggregate);
exports.EmailQueueMaxAggregate = EmailQueueMaxAggregate;
let EmailQueueMaxOrderByAggregateInput = class EmailQueueMaxOrderByAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], EmailQueueMaxOrderByAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], EmailQueueMaxOrderByAggregateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], EmailQueueMaxOrderByAggregateInput.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], EmailQueueMaxOrderByAggregateInput.prototype, "guestId", void 0);
EmailQueueMaxOrderByAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], EmailQueueMaxOrderByAggregateInput);
exports.EmailQueueMaxOrderByAggregateInput = EmailQueueMaxOrderByAggregateInput;
let EmailQueueMinAggregateInput = class EmailQueueMinAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], EmailQueueMinAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], EmailQueueMinAggregateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], EmailQueueMinAggregateInput.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], EmailQueueMinAggregateInput.prototype, "guestId", void 0);
EmailQueueMinAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], EmailQueueMinAggregateInput);
exports.EmailQueueMinAggregateInput = EmailQueueMinAggregateInput;
let EmailQueueMinAggregate = class EmailQueueMinAggregate {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
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
    (0, graphql_2.ObjectType)()
], EmailQueueMinAggregate);
exports.EmailQueueMinAggregate = EmailQueueMinAggregate;
let EmailQueueMinOrderByAggregateInput = class EmailQueueMinOrderByAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], EmailQueueMinOrderByAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], EmailQueueMinOrderByAggregateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], EmailQueueMinOrderByAggregateInput.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], EmailQueueMinOrderByAggregateInput.prototype, "guestId", void 0);
EmailQueueMinOrderByAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], EmailQueueMinOrderByAggregateInput);
exports.EmailQueueMinOrderByAggregateInput = EmailQueueMinOrderByAggregateInput;
let EmailQueueOrderByRelationAggregateInput = class EmailQueueOrderByRelationAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], EmailQueueOrderByRelationAggregateInput.prototype, "_count", void 0);
EmailQueueOrderByRelationAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], EmailQueueOrderByRelationAggregateInput);
exports.EmailQueueOrderByRelationAggregateInput = EmailQueueOrderByRelationAggregateInput;
let EmailQueueOrderByWithAggregationInput = class EmailQueueOrderByWithAggregationInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], EmailQueueOrderByWithAggregationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], EmailQueueOrderByWithAggregationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], EmailQueueOrderByWithAggregationInput.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], EmailQueueOrderByWithAggregationInput.prototype, "guestId", void 0);
__decorate([
    (0, graphql_1.Field)(() => EmailQueueCountOrderByAggregateInput, { nullable: true })
], EmailQueueOrderByWithAggregationInput.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => EmailQueueAvgOrderByAggregateInput, { nullable: true })
], EmailQueueOrderByWithAggregationInput.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => EmailQueueMaxOrderByAggregateInput, { nullable: true })
], EmailQueueOrderByWithAggregationInput.prototype, "_max", void 0);
__decorate([
    (0, graphql_1.Field)(() => EmailQueueMinOrderByAggregateInput, { nullable: true })
], EmailQueueOrderByWithAggregationInput.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => EmailQueueSumOrderByAggregateInput, { nullable: true })
], EmailQueueOrderByWithAggregationInput.prototype, "_sum", void 0);
EmailQueueOrderByWithAggregationInput = __decorate([
    (0, graphql_5.InputType)()
], EmailQueueOrderByWithAggregationInput);
exports.EmailQueueOrderByWithAggregationInput = EmailQueueOrderByWithAggregationInput;
let EmailQueueOrderByWithRelationInput = class EmailQueueOrderByWithRelationInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], EmailQueueOrderByWithRelationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], EmailQueueOrderByWithRelationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], EmailQueueOrderByWithRelationInput.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], EmailQueueOrderByWithRelationInput.prototype, "guestId", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestOrderByWithRelationInput, { nullable: true })
], EmailQueueOrderByWithRelationInput.prototype, "guest", void 0);
EmailQueueOrderByWithRelationInput = __decorate([
    (0, graphql_5.InputType)()
], EmailQueueOrderByWithRelationInput);
exports.EmailQueueOrderByWithRelationInput = EmailQueueOrderByWithRelationInput;
let EmailQueueScalarWhereWithAggregatesInput = EmailQueueScalarWhereWithAggregatesInput_1 = class EmailQueueScalarWhereWithAggregatesInput {
};
__decorate([
    (0, graphql_1.Field)(() => [EmailQueueScalarWhereWithAggregatesInput_1], { nullable: true })
], EmailQueueScalarWhereWithAggregatesInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [EmailQueueScalarWhereWithAggregatesInput_1], { nullable: true })
], EmailQueueScalarWhereWithAggregatesInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [EmailQueueScalarWhereWithAggregatesInput_1], { nullable: true })
], EmailQueueScalarWhereWithAggregatesInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => IntWithAggregatesFilter, { nullable: true })
], EmailQueueScalarWhereWithAggregatesInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeWithAggregatesFilter, { nullable: true })
], EmailQueueScalarWhereWithAggregatesInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => EnumQueueStatusWithAggregatesFilter, { nullable: true })
], EmailQueueScalarWhereWithAggregatesInput.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringWithAggregatesFilter, { nullable: true })
], EmailQueueScalarWhereWithAggregatesInput.prototype, "guestId", void 0);
EmailQueueScalarWhereWithAggregatesInput = EmailQueueScalarWhereWithAggregatesInput_1 = __decorate([
    (0, graphql_5.InputType)()
], EmailQueueScalarWhereWithAggregatesInput);
exports.EmailQueueScalarWhereWithAggregatesInput = EmailQueueScalarWhereWithAggregatesInput;
let EmailQueueScalarWhereInput = EmailQueueScalarWhereInput_1 = class EmailQueueScalarWhereInput {
};
__decorate([
    (0, graphql_1.Field)(() => [EmailQueueScalarWhereInput_1], { nullable: true })
], EmailQueueScalarWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [EmailQueueScalarWhereInput_1], { nullable: true })
], EmailQueueScalarWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [EmailQueueScalarWhereInput_1], { nullable: true })
], EmailQueueScalarWhereInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => IntFilter, { nullable: true })
], EmailQueueScalarWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFilter, { nullable: true })
], EmailQueueScalarWhereInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => EnumQueueStatusFilter, { nullable: true })
], EmailQueueScalarWhereInput.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFilter, { nullable: true })
], EmailQueueScalarWhereInput.prototype, "guestId", void 0);
EmailQueueScalarWhereInput = EmailQueueScalarWhereInput_1 = __decorate([
    (0, graphql_5.InputType)()
], EmailQueueScalarWhereInput);
exports.EmailQueueScalarWhereInput = EmailQueueScalarWhereInput;
let EmailQueueSumAggregateInput = class EmailQueueSumAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], EmailQueueSumAggregateInput.prototype, "id", void 0);
EmailQueueSumAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], EmailQueueSumAggregateInput);
exports.EmailQueueSumAggregateInput = EmailQueueSumAggregateInput;
let EmailQueueSumAggregate = class EmailQueueSumAggregate {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], EmailQueueSumAggregate.prototype, "id", void 0);
EmailQueueSumAggregate = __decorate([
    (0, graphql_2.ObjectType)()
], EmailQueueSumAggregate);
exports.EmailQueueSumAggregate = EmailQueueSumAggregate;
let EmailQueueSumOrderByAggregateInput = class EmailQueueSumOrderByAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], EmailQueueSumOrderByAggregateInput.prototype, "id", void 0);
EmailQueueSumOrderByAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], EmailQueueSumOrderByAggregateInput);
exports.EmailQueueSumOrderByAggregateInput = EmailQueueSumOrderByAggregateInput;
let EmailQueueUncheckedCreateNestedManyWithoutGuestInput = class EmailQueueUncheckedCreateNestedManyWithoutGuestInput {
};
__decorate([
    (0, graphql_1.Field)(() => [EmailQueueCreateWithoutGuestInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => EmailQueueCreateWithoutGuestInput)
], EmailQueueUncheckedCreateNestedManyWithoutGuestInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [EmailQueueCreateOrConnectWithoutGuestInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => EmailQueueCreateOrConnectWithoutGuestInput)
], EmailQueueUncheckedCreateNestedManyWithoutGuestInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => EmailQueueCreateManyGuestInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => EmailQueueCreateManyGuestInputEnvelope)
], EmailQueueUncheckedCreateNestedManyWithoutGuestInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [EmailQueueWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => EmailQueueWhereUniqueInput)
], EmailQueueUncheckedCreateNestedManyWithoutGuestInput.prototype, "connect", void 0);
EmailQueueUncheckedCreateNestedManyWithoutGuestInput = __decorate([
    (0, graphql_5.InputType)()
], EmailQueueUncheckedCreateNestedManyWithoutGuestInput);
exports.EmailQueueUncheckedCreateNestedManyWithoutGuestInput = EmailQueueUncheckedCreateNestedManyWithoutGuestInput;
let EmailQueueUncheckedCreateWithoutGuestInput = class EmailQueueUncheckedCreateWithoutGuestInput {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], EmailQueueUncheckedCreateWithoutGuestInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], EmailQueueUncheckedCreateWithoutGuestInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => QueueStatus, { nullable: true })
], EmailQueueUncheckedCreateWithoutGuestInput.prototype, "status", void 0);
EmailQueueUncheckedCreateWithoutGuestInput = __decorate([
    (0, graphql_5.InputType)()
], EmailQueueUncheckedCreateWithoutGuestInput);
exports.EmailQueueUncheckedCreateWithoutGuestInput = EmailQueueUncheckedCreateWithoutGuestInput;
let EmailQueueUncheckedCreateInput = class EmailQueueUncheckedCreateInput {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], EmailQueueUncheckedCreateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], EmailQueueUncheckedCreateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => QueueStatus, { nullable: true })
], EmailQueueUncheckedCreateInput.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], EmailQueueUncheckedCreateInput.prototype, "guestId", void 0);
EmailQueueUncheckedCreateInput = __decorate([
    (0, graphql_5.InputType)()
], EmailQueueUncheckedCreateInput);
exports.EmailQueueUncheckedCreateInput = EmailQueueUncheckedCreateInput;
let EmailQueueUncheckedUpdateManyWithoutGuestNestedInput = class EmailQueueUncheckedUpdateManyWithoutGuestNestedInput {
};
__decorate([
    (0, graphql_1.Field)(() => [EmailQueueCreateWithoutGuestInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => EmailQueueCreateWithoutGuestInput)
], EmailQueueUncheckedUpdateManyWithoutGuestNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [EmailQueueCreateOrConnectWithoutGuestInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => EmailQueueCreateOrConnectWithoutGuestInput)
], EmailQueueUncheckedUpdateManyWithoutGuestNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => [EmailQueueUpsertWithWhereUniqueWithoutGuestInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => EmailQueueUpsertWithWhereUniqueWithoutGuestInput)
], EmailQueueUncheckedUpdateManyWithoutGuestNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => EmailQueueCreateManyGuestInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => EmailQueueCreateManyGuestInputEnvelope)
], EmailQueueUncheckedUpdateManyWithoutGuestNestedInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [EmailQueueWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => EmailQueueWhereUniqueInput)
], EmailQueueUncheckedUpdateManyWithoutGuestNestedInput.prototype, "set", void 0);
__decorate([
    (0, graphql_1.Field)(() => [EmailQueueWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => EmailQueueWhereUniqueInput)
], EmailQueueUncheckedUpdateManyWithoutGuestNestedInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [EmailQueueWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => EmailQueueWhereUniqueInput)
], EmailQueueUncheckedUpdateManyWithoutGuestNestedInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => [EmailQueueWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => EmailQueueWhereUniqueInput)
], EmailQueueUncheckedUpdateManyWithoutGuestNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [EmailQueueUpdateWithWhereUniqueWithoutGuestInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => EmailQueueUpdateWithWhereUniqueWithoutGuestInput)
], EmailQueueUncheckedUpdateManyWithoutGuestNestedInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => [EmailQueueUpdateManyWithWhereWithoutGuestInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => EmailQueueUpdateManyWithWhereWithoutGuestInput)
], EmailQueueUncheckedUpdateManyWithoutGuestNestedInput.prototype, "updateMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [EmailQueueScalarWhereInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => EmailQueueScalarWhereInput)
], EmailQueueUncheckedUpdateManyWithoutGuestNestedInput.prototype, "deleteMany", void 0);
EmailQueueUncheckedUpdateManyWithoutGuestNestedInput = __decorate([
    (0, graphql_5.InputType)()
], EmailQueueUncheckedUpdateManyWithoutGuestNestedInput);
exports.EmailQueueUncheckedUpdateManyWithoutGuestNestedInput = EmailQueueUncheckedUpdateManyWithoutGuestNestedInput;
let EmailQueueUncheckedUpdateManyWithoutGuestInput = class EmailQueueUncheckedUpdateManyWithoutGuestInput {
};
__decorate([
    (0, graphql_1.Field)(() => IntFieldUpdateOperationsInput, { nullable: true })
], EmailQueueUncheckedUpdateManyWithoutGuestInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], EmailQueueUncheckedUpdateManyWithoutGuestInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => EnumQueueStatusFieldUpdateOperationsInput, { nullable: true })
], EmailQueueUncheckedUpdateManyWithoutGuestInput.prototype, "status", void 0);
EmailQueueUncheckedUpdateManyWithoutGuestInput = __decorate([
    (0, graphql_5.InputType)()
], EmailQueueUncheckedUpdateManyWithoutGuestInput);
exports.EmailQueueUncheckedUpdateManyWithoutGuestInput = EmailQueueUncheckedUpdateManyWithoutGuestInput;
let EmailQueueUncheckedUpdateManyInput = class EmailQueueUncheckedUpdateManyInput {
};
__decorate([
    (0, graphql_1.Field)(() => IntFieldUpdateOperationsInput, { nullable: true })
], EmailQueueUncheckedUpdateManyInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], EmailQueueUncheckedUpdateManyInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => EnumQueueStatusFieldUpdateOperationsInput, { nullable: true })
], EmailQueueUncheckedUpdateManyInput.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], EmailQueueUncheckedUpdateManyInput.prototype, "guestId", void 0);
EmailQueueUncheckedUpdateManyInput = __decorate([
    (0, graphql_5.InputType)()
], EmailQueueUncheckedUpdateManyInput);
exports.EmailQueueUncheckedUpdateManyInput = EmailQueueUncheckedUpdateManyInput;
let EmailQueueUncheckedUpdateWithoutGuestInput = class EmailQueueUncheckedUpdateWithoutGuestInput {
};
__decorate([
    (0, graphql_1.Field)(() => IntFieldUpdateOperationsInput, { nullable: true })
], EmailQueueUncheckedUpdateWithoutGuestInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], EmailQueueUncheckedUpdateWithoutGuestInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => EnumQueueStatusFieldUpdateOperationsInput, { nullable: true })
], EmailQueueUncheckedUpdateWithoutGuestInput.prototype, "status", void 0);
EmailQueueUncheckedUpdateWithoutGuestInput = __decorate([
    (0, graphql_5.InputType)()
], EmailQueueUncheckedUpdateWithoutGuestInput);
exports.EmailQueueUncheckedUpdateWithoutGuestInput = EmailQueueUncheckedUpdateWithoutGuestInput;
let EmailQueueUncheckedUpdateInput = class EmailQueueUncheckedUpdateInput {
};
__decorate([
    (0, graphql_1.Field)(() => IntFieldUpdateOperationsInput, { nullable: true })
], EmailQueueUncheckedUpdateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], EmailQueueUncheckedUpdateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => EnumQueueStatusFieldUpdateOperationsInput, { nullable: true })
], EmailQueueUncheckedUpdateInput.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], EmailQueueUncheckedUpdateInput.prototype, "guestId", void 0);
EmailQueueUncheckedUpdateInput = __decorate([
    (0, graphql_5.InputType)()
], EmailQueueUncheckedUpdateInput);
exports.EmailQueueUncheckedUpdateInput = EmailQueueUncheckedUpdateInput;
let EmailQueueUpdateManyMutationInput = class EmailQueueUpdateManyMutationInput {
};
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], EmailQueueUpdateManyMutationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => EnumQueueStatusFieldUpdateOperationsInput, { nullable: true })
], EmailQueueUpdateManyMutationInput.prototype, "status", void 0);
EmailQueueUpdateManyMutationInput = __decorate([
    (0, graphql_5.InputType)()
], EmailQueueUpdateManyMutationInput);
exports.EmailQueueUpdateManyMutationInput = EmailQueueUpdateManyMutationInput;
let EmailQueueUpdateManyWithWhereWithoutGuestInput = class EmailQueueUpdateManyWithWhereWithoutGuestInput {
};
__decorate([
    (0, graphql_1.Field)(() => EmailQueueScalarWhereInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => EmailQueueScalarWhereInput)
], EmailQueueUpdateManyWithWhereWithoutGuestInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => EmailQueueUpdateManyMutationInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => EmailQueueUpdateManyMutationInput)
], EmailQueueUpdateManyWithWhereWithoutGuestInput.prototype, "data", void 0);
EmailQueueUpdateManyWithWhereWithoutGuestInput = __decorate([
    (0, graphql_5.InputType)()
], EmailQueueUpdateManyWithWhereWithoutGuestInput);
exports.EmailQueueUpdateManyWithWhereWithoutGuestInput = EmailQueueUpdateManyWithWhereWithoutGuestInput;
let EmailQueueUpdateManyWithoutGuestNestedInput = class EmailQueueUpdateManyWithoutGuestNestedInput {
};
__decorate([
    (0, graphql_1.Field)(() => [EmailQueueCreateWithoutGuestInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => EmailQueueCreateWithoutGuestInput)
], EmailQueueUpdateManyWithoutGuestNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [EmailQueueCreateOrConnectWithoutGuestInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => EmailQueueCreateOrConnectWithoutGuestInput)
], EmailQueueUpdateManyWithoutGuestNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => [EmailQueueUpsertWithWhereUniqueWithoutGuestInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => EmailQueueUpsertWithWhereUniqueWithoutGuestInput)
], EmailQueueUpdateManyWithoutGuestNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => EmailQueueCreateManyGuestInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => EmailQueueCreateManyGuestInputEnvelope)
], EmailQueueUpdateManyWithoutGuestNestedInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [EmailQueueWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => EmailQueueWhereUniqueInput)
], EmailQueueUpdateManyWithoutGuestNestedInput.prototype, "set", void 0);
__decorate([
    (0, graphql_1.Field)(() => [EmailQueueWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => EmailQueueWhereUniqueInput)
], EmailQueueUpdateManyWithoutGuestNestedInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [EmailQueueWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => EmailQueueWhereUniqueInput)
], EmailQueueUpdateManyWithoutGuestNestedInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => [EmailQueueWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => EmailQueueWhereUniqueInput)
], EmailQueueUpdateManyWithoutGuestNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [EmailQueueUpdateWithWhereUniqueWithoutGuestInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => EmailQueueUpdateWithWhereUniqueWithoutGuestInput)
], EmailQueueUpdateManyWithoutGuestNestedInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => [EmailQueueUpdateManyWithWhereWithoutGuestInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => EmailQueueUpdateManyWithWhereWithoutGuestInput)
], EmailQueueUpdateManyWithoutGuestNestedInput.prototype, "updateMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [EmailQueueScalarWhereInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => EmailQueueScalarWhereInput)
], EmailQueueUpdateManyWithoutGuestNestedInput.prototype, "deleteMany", void 0);
EmailQueueUpdateManyWithoutGuestNestedInput = __decorate([
    (0, graphql_5.InputType)()
], EmailQueueUpdateManyWithoutGuestNestedInput);
exports.EmailQueueUpdateManyWithoutGuestNestedInput = EmailQueueUpdateManyWithoutGuestNestedInput;
let EmailQueueUpdateWithWhereUniqueWithoutGuestInput = class EmailQueueUpdateWithWhereUniqueWithoutGuestInput {
};
__decorate([
    (0, graphql_1.Field)(() => EmailQueueWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => EmailQueueWhereUniqueInput)
], EmailQueueUpdateWithWhereUniqueWithoutGuestInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => EmailQueueUpdateWithoutGuestInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => EmailQueueUpdateWithoutGuestInput)
], EmailQueueUpdateWithWhereUniqueWithoutGuestInput.prototype, "data", void 0);
EmailQueueUpdateWithWhereUniqueWithoutGuestInput = __decorate([
    (0, graphql_5.InputType)()
], EmailQueueUpdateWithWhereUniqueWithoutGuestInput);
exports.EmailQueueUpdateWithWhereUniqueWithoutGuestInput = EmailQueueUpdateWithWhereUniqueWithoutGuestInput;
let EmailQueueUpdateWithoutGuestInput = class EmailQueueUpdateWithoutGuestInput {
};
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], EmailQueueUpdateWithoutGuestInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => EnumQueueStatusFieldUpdateOperationsInput, { nullable: true })
], EmailQueueUpdateWithoutGuestInput.prototype, "status", void 0);
EmailQueueUpdateWithoutGuestInput = __decorate([
    (0, graphql_5.InputType)()
], EmailQueueUpdateWithoutGuestInput);
exports.EmailQueueUpdateWithoutGuestInput = EmailQueueUpdateWithoutGuestInput;
let EmailQueueUpdateInput = class EmailQueueUpdateInput {
};
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], EmailQueueUpdateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => EnumQueueStatusFieldUpdateOperationsInput, { nullable: true })
], EmailQueueUpdateInput.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestUpdateOneRequiredWithoutEmailQueueNestedInput, { nullable: true })
], EmailQueueUpdateInput.prototype, "guest", void 0);
EmailQueueUpdateInput = __decorate([
    (0, graphql_5.InputType)()
], EmailQueueUpdateInput);
exports.EmailQueueUpdateInput = EmailQueueUpdateInput;
let EmailQueueUpsertWithWhereUniqueWithoutGuestInput = class EmailQueueUpsertWithWhereUniqueWithoutGuestInput {
};
__decorate([
    (0, graphql_1.Field)(() => EmailQueueWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => EmailQueueWhereUniqueInput)
], EmailQueueUpsertWithWhereUniqueWithoutGuestInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => EmailQueueUpdateWithoutGuestInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => EmailQueueUpdateWithoutGuestInput)
], EmailQueueUpsertWithWhereUniqueWithoutGuestInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => EmailQueueCreateWithoutGuestInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => EmailQueueCreateWithoutGuestInput)
], EmailQueueUpsertWithWhereUniqueWithoutGuestInput.prototype, "create", void 0);
EmailQueueUpsertWithWhereUniqueWithoutGuestInput = __decorate([
    (0, graphql_5.InputType)()
], EmailQueueUpsertWithWhereUniqueWithoutGuestInput);
exports.EmailQueueUpsertWithWhereUniqueWithoutGuestInput = EmailQueueUpsertWithWhereUniqueWithoutGuestInput;
let EmailQueueWhereUniqueInput = class EmailQueueWhereUniqueInput {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], EmailQueueWhereUniqueInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => [EmailQueueWhereInput], { nullable: true })
], EmailQueueWhereUniqueInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [EmailQueueWhereInput], { nullable: true })
], EmailQueueWhereUniqueInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [EmailQueueWhereInput], { nullable: true })
], EmailQueueWhereUniqueInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFilter, { nullable: true })
], EmailQueueWhereUniqueInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => EnumQueueStatusFilter, { nullable: true })
], EmailQueueWhereUniqueInput.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFilter, { nullable: true })
], EmailQueueWhereUniqueInput.prototype, "guestId", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestRelationFilter, { nullable: true })
], EmailQueueWhereUniqueInput.prototype, "guest", void 0);
EmailQueueWhereUniqueInput = __decorate([
    (0, graphql_5.InputType)()
], EmailQueueWhereUniqueInput);
exports.EmailQueueWhereUniqueInput = EmailQueueWhereUniqueInput;
let EmailQueueWhereInput = EmailQueueWhereInput_1 = class EmailQueueWhereInput {
};
__decorate([
    (0, graphql_1.Field)(() => [EmailQueueWhereInput_1], { nullable: true })
], EmailQueueWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [EmailQueueWhereInput_1], { nullable: true })
], EmailQueueWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [EmailQueueWhereInput_1], { nullable: true })
], EmailQueueWhereInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => IntFilter, { nullable: true })
], EmailQueueWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFilter, { nullable: true })
], EmailQueueWhereInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => EnumQueueStatusFilter, { nullable: true })
], EmailQueueWhereInput.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFilter, { nullable: true })
], EmailQueueWhereInput.prototype, "guestId", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestRelationFilter, { nullable: true })
], EmailQueueWhereInput.prototype, "guest", void 0);
EmailQueueWhereInput = EmailQueueWhereInput_1 = __decorate([
    (0, graphql_5.InputType)()
], EmailQueueWhereInput);
exports.EmailQueueWhereInput = EmailQueueWhereInput;
let EmailQueue = class EmailQueue {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], EmailQueue.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], EmailQueue.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => QueueStatus, { nullable: false, defaultValue: 'WAITING' })
], EmailQueue.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], EmailQueue.prototype, "guestId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Guest, { nullable: false })
], EmailQueue.prototype, "guest", void 0);
EmailQueue = __decorate([
    (0, graphql_2.ObjectType)({ description: 'Batas Pengiriman 1000 email per hari' })
], EmailQueue);
exports.EmailQueue = EmailQueue;
let FindFirstEmailQueueOrThrowArgs = class FindFirstEmailQueueOrThrowArgs {
};
__decorate([
    (0, graphql_1.Field)(() => EmailQueueWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => EmailQueueWhereInput)
], FindFirstEmailQueueOrThrowArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [EmailQueueOrderByWithRelationInput], { nullable: true })
], FindFirstEmailQueueOrThrowArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => EmailQueueWhereUniqueInput, { nullable: true })
], FindFirstEmailQueueOrThrowArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], FindFirstEmailQueueOrThrowArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], FindFirstEmailQueueOrThrowArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => [EmailQueueScalarFieldEnum], { nullable: true })
], FindFirstEmailQueueOrThrowArgs.prototype, "distinct", void 0);
FindFirstEmailQueueOrThrowArgs = __decorate([
    (0, graphql_3.ArgsType)()
], FindFirstEmailQueueOrThrowArgs);
exports.FindFirstEmailQueueOrThrowArgs = FindFirstEmailQueueOrThrowArgs;
let FindFirstEmailQueueArgs = class FindFirstEmailQueueArgs {
};
__decorate([
    (0, graphql_1.Field)(() => EmailQueueWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => EmailQueueWhereInput)
], FindFirstEmailQueueArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [EmailQueueOrderByWithRelationInput], { nullable: true })
], FindFirstEmailQueueArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => EmailQueueWhereUniqueInput, { nullable: true })
], FindFirstEmailQueueArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], FindFirstEmailQueueArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], FindFirstEmailQueueArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => [EmailQueueScalarFieldEnum], { nullable: true })
], FindFirstEmailQueueArgs.prototype, "distinct", void 0);
FindFirstEmailQueueArgs = __decorate([
    (0, graphql_3.ArgsType)()
], FindFirstEmailQueueArgs);
exports.FindFirstEmailQueueArgs = FindFirstEmailQueueArgs;
let FindManyEmailQueueArgs = class FindManyEmailQueueArgs {
};
__decorate([
    (0, graphql_1.Field)(() => EmailQueueWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => EmailQueueWhereInput)
], FindManyEmailQueueArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [EmailQueueOrderByWithRelationInput], { nullable: true })
], FindManyEmailQueueArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => EmailQueueWhereUniqueInput, { nullable: true })
], FindManyEmailQueueArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], FindManyEmailQueueArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], FindManyEmailQueueArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => [EmailQueueScalarFieldEnum], { nullable: true })
], FindManyEmailQueueArgs.prototype, "distinct", void 0);
FindManyEmailQueueArgs = __decorate([
    (0, graphql_3.ArgsType)()
], FindManyEmailQueueArgs);
exports.FindManyEmailQueueArgs = FindManyEmailQueueArgs;
let FindUniqueEmailQueueOrThrowArgs = class FindUniqueEmailQueueOrThrowArgs {
};
__decorate([
    (0, graphql_1.Field)(() => EmailQueueWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => EmailQueueWhereUniqueInput)
], FindUniqueEmailQueueOrThrowArgs.prototype, "where", void 0);
FindUniqueEmailQueueOrThrowArgs = __decorate([
    (0, graphql_3.ArgsType)()
], FindUniqueEmailQueueOrThrowArgs);
exports.FindUniqueEmailQueueOrThrowArgs = FindUniqueEmailQueueOrThrowArgs;
let FindUniqueEmailQueueArgs = class FindUniqueEmailQueueArgs {
};
__decorate([
    (0, graphql_1.Field)(() => EmailQueueWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => EmailQueueWhereUniqueInput)
], FindUniqueEmailQueueArgs.prototype, "where", void 0);
FindUniqueEmailQueueArgs = __decorate([
    (0, graphql_3.ArgsType)()
], FindUniqueEmailQueueArgs);
exports.FindUniqueEmailQueueArgs = FindUniqueEmailQueueArgs;
let UpdateManyEmailQueueArgs = class UpdateManyEmailQueueArgs {
};
__decorate([
    (0, graphql_1.Field)(() => EmailQueueUpdateManyMutationInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => EmailQueueUpdateManyMutationInput)
], UpdateManyEmailQueueArgs.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => EmailQueueWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => EmailQueueWhereInput)
], UpdateManyEmailQueueArgs.prototype, "where", void 0);
UpdateManyEmailQueueArgs = __decorate([
    (0, graphql_3.ArgsType)()
], UpdateManyEmailQueueArgs);
exports.UpdateManyEmailQueueArgs = UpdateManyEmailQueueArgs;
let UpdateOneEmailQueueArgs = class UpdateOneEmailQueueArgs {
};
__decorate([
    (0, graphql_1.Field)(() => EmailQueueUpdateInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => EmailQueueUpdateInput)
], UpdateOneEmailQueueArgs.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => EmailQueueWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => EmailQueueWhereUniqueInput)
], UpdateOneEmailQueueArgs.prototype, "where", void 0);
UpdateOneEmailQueueArgs = __decorate([
    (0, graphql_3.ArgsType)()
], UpdateOneEmailQueueArgs);
exports.UpdateOneEmailQueueArgs = UpdateOneEmailQueueArgs;
let UpsertOneEmailQueueArgs = class UpsertOneEmailQueueArgs {
};
__decorate([
    (0, graphql_1.Field)(() => EmailQueueWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => EmailQueueWhereUniqueInput)
], UpsertOneEmailQueueArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => EmailQueueCreateInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => EmailQueueCreateInput)
], UpsertOneEmailQueueArgs.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => EmailQueueUpdateInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => EmailQueueUpdateInput)
], UpsertOneEmailQueueArgs.prototype, "update", void 0);
UpsertOneEmailQueueArgs = __decorate([
    (0, graphql_3.ArgsType)()
], UpsertOneEmailQueueArgs);
exports.UpsertOneEmailQueueArgs = UpsertOneEmailQueueArgs;
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
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], GuestAvgAggregateInput.prototype, "qrcodeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], GuestAvgAggregateInput.prototype, "invitationImageId", void 0);
GuestAvgAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], GuestAvgAggregateInput);
exports.GuestAvgAggregateInput = GuestAvgAggregateInput;
let GuestAvgAggregate = class GuestAvgAggregate {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_6.Float, { nullable: true })
], GuestAvgAggregate.prototype, "whatsapp", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_6.Float, { nullable: true })
], GuestAvgAggregate.prototype, "qrcodeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_6.Float, { nullable: true })
], GuestAvgAggregate.prototype, "invitationImageId", void 0);
GuestAvgAggregate = __decorate([
    (0, graphql_2.ObjectType)()
], GuestAvgAggregate);
exports.GuestAvgAggregate = GuestAvgAggregate;
let GuestAvgOrderByAggregateInput = class GuestAvgOrderByAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], GuestAvgOrderByAggregateInput.prototype, "whatsapp", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], GuestAvgOrderByAggregateInput.prototype, "qrcodeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], GuestAvgOrderByAggregateInput.prototype, "invitationImageId", void 0);
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
], GuestCountAggregateInput.prototype, "qrcodeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], GuestCountAggregateInput.prototype, "invitationImageId", void 0);
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
], GuestCountAggregate.prototype, "qrcodeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], GuestCountAggregate.prototype, "invitationImageId", void 0);
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
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], GuestCountOrderByAggregateInput.prototype, "qrcodeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], GuestCountOrderByAggregateInput.prototype, "invitationImageId", void 0);
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
], GuestCount.prototype, "emailQueue", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], GuestCount.prototype, "whatsappQueue", void 0);
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
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], GuestCreateManyGroupMemberOfInput.prototype, "qrcodeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], GuestCreateManyGroupMemberOfInput.prototype, "invitationImageId", void 0);
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
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], GuestCreateManyInput.prototype, "qrcodeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], GuestCreateManyInput.prototype, "invitationImageId", void 0);
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
    (0, graphql_5.InputType)()
], GuestCreateNestedOneWithoutEmailQueueInput);
exports.GuestCreateNestedOneWithoutEmailQueueInput = GuestCreateNestedOneWithoutEmailQueueInput;
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
    (0, graphql_5.InputType)()
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
    (0, graphql_5.InputType)()
], GuestCreateOrConnectWithoutEmailQueueInput);
exports.GuestCreateOrConnectWithoutEmailQueueInput = GuestCreateOrConnectWithoutEmailQueueInput;
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
    (0, graphql_5.InputType)()
], GuestCreateOrConnectWithoutWhatsappQueueInput);
exports.GuestCreateOrConnectWithoutWhatsappQueueInput = GuestCreateOrConnectWithoutWhatsappQueueInput;
let GuestCreateWithoutEmailQueueInput = class GuestCreateWithoutEmailQueueInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestCreateWithoutEmailQueueInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestCreateWithoutEmailQueueInput.prototype, "source", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], GuestCreateWithoutEmailQueueInput.prototype, "invitationName", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestCreateWithoutEmailQueueInput.prototype, "contactList", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_6.Float, { nullable: true })
], GuestCreateWithoutEmailQueueInput.prototype, "whatsapp", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestCreateWithoutEmailQueueInput.prototype, "category", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestCreateWithoutEmailQueueInput.prototype, "class", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestCreateWithoutEmailQueueInput.prototype, "seat", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestCreateWithoutEmailQueueInput.prototype, "studio", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestCreateWithoutEmailQueueInput.prototype, "showTime", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestCreateWithoutEmailQueueInput.prototype, "rejectionReason", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], GuestCreateWithoutEmailQueueInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], GuestCreateWithoutEmailQueueInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], GuestCreateWithoutEmailQueueInput.prototype, "deletedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => ConfirmationStatus, { nullable: true })
], GuestCreateWithoutEmailQueueInput.prototype, "confirmationStatus", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], GuestCreateWithoutEmailQueueInput.prototype, "qrcodeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], GuestCreateWithoutEmailQueueInput.prototype, "invitationImageId", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestCreateNestedOneWithoutGroupMembersInput, { nullable: true })
], GuestCreateWithoutEmailQueueInput.prototype, "groupMemberOf", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestCreateNestedManyWithoutGroupMemberOfInput, { nullable: true })
], GuestCreateWithoutEmailQueueInput.prototype, "groupMembers", void 0);
__decorate([
    (0, graphql_1.Field)(() => QrCodeCreateNestedOneWithoutGuestInput, { nullable: true })
], GuestCreateWithoutEmailQueueInput.prototype, "qrcode", void 0);
__decorate([
    (0, graphql_1.Field)(() => InvitationImageCreateNestedOneWithoutGuestInput, { nullable: true })
], GuestCreateWithoutEmailQueueInput.prototype, "invitationImage", void 0);
__decorate([
    (0, graphql_1.Field)(() => WhatsappQueueCreateNestedManyWithoutGuestInput, { nullable: true })
], GuestCreateWithoutEmailQueueInput.prototype, "whatsappQueue", void 0);
GuestCreateWithoutEmailQueueInput = __decorate([
    (0, graphql_5.InputType)()
], GuestCreateWithoutEmailQueueInput);
exports.GuestCreateWithoutEmailQueueInput = GuestCreateWithoutEmailQueueInput;
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
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], GuestCreateWithoutGroupMemberOfInput.prototype, "qrcodeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], GuestCreateWithoutGroupMemberOfInput.prototype, "invitationImageId", void 0);
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
    (0, graphql_1.Field)(() => EmailQueueCreateNestedManyWithoutGuestInput, { nullable: true })
], GuestCreateWithoutGroupMemberOfInput.prototype, "emailQueue", void 0);
__decorate([
    (0, graphql_1.Field)(() => WhatsappQueueCreateNestedManyWithoutGuestInput, { nullable: true })
], GuestCreateWithoutGroupMemberOfInput.prototype, "whatsappQueue", void 0);
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
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], GuestCreateWithoutGroupMembersInput.prototype, "qrcodeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], GuestCreateWithoutGroupMembersInput.prototype, "invitationImageId", void 0);
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
    (0, graphql_1.Field)(() => EmailQueueCreateNestedManyWithoutGuestInput, { nullable: true })
], GuestCreateWithoutGroupMembersInput.prototype, "emailQueue", void 0);
__decorate([
    (0, graphql_1.Field)(() => WhatsappQueueCreateNestedManyWithoutGuestInput, { nullable: true })
], GuestCreateWithoutGroupMembersInput.prototype, "whatsappQueue", void 0);
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
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], GuestCreateWithoutInvitationImageInput.prototype, "qrcodeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], GuestCreateWithoutInvitationImageInput.prototype, "invitationImageId", void 0);
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
    (0, graphql_1.Field)(() => EmailQueueCreateNestedManyWithoutGuestInput, { nullable: true })
], GuestCreateWithoutInvitationImageInput.prototype, "emailQueue", void 0);
__decorate([
    (0, graphql_1.Field)(() => WhatsappQueueCreateNestedManyWithoutGuestInput, { nullable: true })
], GuestCreateWithoutInvitationImageInput.prototype, "whatsappQueue", void 0);
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
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], GuestCreateWithoutQrcodeInput.prototype, "qrcodeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], GuestCreateWithoutQrcodeInput.prototype, "invitationImageId", void 0);
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
    (0, graphql_1.Field)(() => EmailQueueCreateNestedManyWithoutGuestInput, { nullable: true })
], GuestCreateWithoutQrcodeInput.prototype, "emailQueue", void 0);
__decorate([
    (0, graphql_1.Field)(() => WhatsappQueueCreateNestedManyWithoutGuestInput, { nullable: true })
], GuestCreateWithoutQrcodeInput.prototype, "whatsappQueue", void 0);
GuestCreateWithoutQrcodeInput = __decorate([
    (0, graphql_5.InputType)()
], GuestCreateWithoutQrcodeInput);
exports.GuestCreateWithoutQrcodeInput = GuestCreateWithoutQrcodeInput;
let GuestCreateWithoutWhatsappQueueInput = class GuestCreateWithoutWhatsappQueueInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestCreateWithoutWhatsappQueueInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestCreateWithoutWhatsappQueueInput.prototype, "source", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], GuestCreateWithoutWhatsappQueueInput.prototype, "invitationName", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestCreateWithoutWhatsappQueueInput.prototype, "contactList", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_6.Float, { nullable: true })
], GuestCreateWithoutWhatsappQueueInput.prototype, "whatsapp", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestCreateWithoutWhatsappQueueInput.prototype, "category", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestCreateWithoutWhatsappQueueInput.prototype, "class", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestCreateWithoutWhatsappQueueInput.prototype, "seat", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestCreateWithoutWhatsappQueueInput.prototype, "studio", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestCreateWithoutWhatsappQueueInput.prototype, "showTime", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestCreateWithoutWhatsappQueueInput.prototype, "rejectionReason", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], GuestCreateWithoutWhatsappQueueInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], GuestCreateWithoutWhatsappQueueInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], GuestCreateWithoutWhatsappQueueInput.prototype, "deletedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => ConfirmationStatus, { nullable: true })
], GuestCreateWithoutWhatsappQueueInput.prototype, "confirmationStatus", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], GuestCreateWithoutWhatsappQueueInput.prototype, "qrcodeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], GuestCreateWithoutWhatsappQueueInput.prototype, "invitationImageId", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestCreateNestedOneWithoutGroupMembersInput, { nullable: true })
], GuestCreateWithoutWhatsappQueueInput.prototype, "groupMemberOf", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestCreateNestedManyWithoutGroupMemberOfInput, { nullable: true })
], GuestCreateWithoutWhatsappQueueInput.prototype, "groupMembers", void 0);
__decorate([
    (0, graphql_1.Field)(() => QrCodeCreateNestedOneWithoutGuestInput, { nullable: true })
], GuestCreateWithoutWhatsappQueueInput.prototype, "qrcode", void 0);
__decorate([
    (0, graphql_1.Field)(() => InvitationImageCreateNestedOneWithoutGuestInput, { nullable: true })
], GuestCreateWithoutWhatsappQueueInput.prototype, "invitationImage", void 0);
__decorate([
    (0, graphql_1.Field)(() => EmailQueueCreateNestedManyWithoutGuestInput, { nullable: true })
], GuestCreateWithoutWhatsappQueueInput.prototype, "emailQueue", void 0);
GuestCreateWithoutWhatsappQueueInput = __decorate([
    (0, graphql_5.InputType)()
], GuestCreateWithoutWhatsappQueueInput);
exports.GuestCreateWithoutWhatsappQueueInput = GuestCreateWithoutWhatsappQueueInput;
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
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], GuestCreateInput.prototype, "qrcodeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], GuestCreateInput.prototype, "invitationImageId", void 0);
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
    (0, graphql_1.Field)(() => EmailQueueCreateNestedManyWithoutGuestInput, { nullable: true })
], GuestCreateInput.prototype, "emailQueue", void 0);
__decorate([
    (0, graphql_1.Field)(() => WhatsappQueueCreateNestedManyWithoutGuestInput, { nullable: true })
], GuestCreateInput.prototype, "whatsappQueue", void 0);
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
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], GuestGroupBy.prototype, "qrcodeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], GuestGroupBy.prototype, "invitationImageId", void 0);
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
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], GuestMaxAggregateInput.prototype, "qrcodeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], GuestMaxAggregateInput.prototype, "invitationImageId", void 0);
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
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], GuestMaxAggregate.prototype, "qrcodeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], GuestMaxAggregate.prototype, "invitationImageId", void 0);
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
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], GuestMaxOrderByAggregateInput.prototype, "qrcodeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], GuestMaxOrderByAggregateInput.prototype, "invitationImageId", void 0);
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
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], GuestMinAggregateInput.prototype, "qrcodeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], GuestMinAggregateInput.prototype, "invitationImageId", void 0);
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
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], GuestMinAggregate.prototype, "qrcodeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], GuestMinAggregate.prototype, "invitationImageId", void 0);
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
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], GuestMinOrderByAggregateInput.prototype, "qrcodeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], GuestMinOrderByAggregateInput.prototype, "invitationImageId", void 0);
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
    (0, graphql_1.Field)(() => SortOrderInput, { nullable: true })
], GuestOrderByWithAggregationInput.prototype, "qrcodeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrderInput, { nullable: true })
], GuestOrderByWithAggregationInput.prototype, "invitationImageId", void 0);
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
    (0, graphql_1.Field)(() => SortOrderInput, { nullable: true })
], GuestOrderByWithRelationInput.prototype, "qrcodeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrderInput, { nullable: true })
], GuestOrderByWithRelationInput.prototype, "invitationImageId", void 0);
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
    (0, graphql_1.Field)(() => EmailQueueOrderByRelationAggregateInput, { nullable: true })
], GuestOrderByWithRelationInput.prototype, "emailQueue", void 0);
__decorate([
    (0, graphql_1.Field)(() => WhatsappQueueOrderByRelationAggregateInput, { nullable: true })
], GuestOrderByWithRelationInput.prototype, "whatsappQueue", void 0);
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
__decorate([
    (0, graphql_1.Field)(() => IntNullableWithAggregatesFilter, { nullable: true })
], GuestScalarWhereWithAggregatesInput.prototype, "qrcodeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => IntNullableWithAggregatesFilter, { nullable: true })
], GuestScalarWhereWithAggregatesInput.prototype, "invitationImageId", void 0);
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
__decorate([
    (0, graphql_1.Field)(() => IntNullableFilter, { nullable: true })
], GuestScalarWhereInput.prototype, "qrcodeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => IntNullableFilter, { nullable: true })
], GuestScalarWhereInput.prototype, "invitationImageId", void 0);
GuestScalarWhereInput = GuestScalarWhereInput_1 = __decorate([
    (0, graphql_5.InputType)()
], GuestScalarWhereInput);
exports.GuestScalarWhereInput = GuestScalarWhereInput;
let GuestSumAggregateInput = class GuestSumAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], GuestSumAggregateInput.prototype, "whatsapp", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], GuestSumAggregateInput.prototype, "qrcodeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], GuestSumAggregateInput.prototype, "invitationImageId", void 0);
GuestSumAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], GuestSumAggregateInput);
exports.GuestSumAggregateInput = GuestSumAggregateInput;
let GuestSumAggregate = class GuestSumAggregate {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_6.Float, { nullable: true })
], GuestSumAggregate.prototype, "whatsapp", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], GuestSumAggregate.prototype, "qrcodeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], GuestSumAggregate.prototype, "invitationImageId", void 0);
GuestSumAggregate = __decorate([
    (0, graphql_2.ObjectType)()
], GuestSumAggregate);
exports.GuestSumAggregate = GuestSumAggregate;
let GuestSumOrderByAggregateInput = class GuestSumOrderByAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], GuestSumOrderByAggregateInput.prototype, "whatsapp", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], GuestSumOrderByAggregateInput.prototype, "qrcodeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], GuestSumOrderByAggregateInput.prototype, "invitationImageId", void 0);
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
let GuestUncheckedCreateWithoutEmailQueueInput = class GuestUncheckedCreateWithoutEmailQueueInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestUncheckedCreateWithoutEmailQueueInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestUncheckedCreateWithoutEmailQueueInput.prototype, "source", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], GuestUncheckedCreateWithoutEmailQueueInput.prototype, "invitationName", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestUncheckedCreateWithoutEmailQueueInput.prototype, "contactList", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_6.Float, { nullable: true })
], GuestUncheckedCreateWithoutEmailQueueInput.prototype, "whatsapp", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestUncheckedCreateWithoutEmailQueueInput.prototype, "category", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestUncheckedCreateWithoutEmailQueueInput.prototype, "class", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestUncheckedCreateWithoutEmailQueueInput.prototype, "seat", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestUncheckedCreateWithoutEmailQueueInput.prototype, "studio", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestUncheckedCreateWithoutEmailQueueInput.prototype, "showTime", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestUncheckedCreateWithoutEmailQueueInput.prototype, "rejectionReason", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], GuestUncheckedCreateWithoutEmailQueueInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], GuestUncheckedCreateWithoutEmailQueueInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], GuestUncheckedCreateWithoutEmailQueueInput.prototype, "deletedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestUncheckedCreateWithoutEmailQueueInput.prototype, "groupMemberOfId", void 0);
__decorate([
    (0, graphql_1.Field)(() => ConfirmationStatus, { nullable: true })
], GuestUncheckedCreateWithoutEmailQueueInput.prototype, "confirmationStatus", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], GuestUncheckedCreateWithoutEmailQueueInput.prototype, "qrcodeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], GuestUncheckedCreateWithoutEmailQueueInput.prototype, "invitationImageId", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestUncheckedCreateNestedManyWithoutGroupMemberOfInput, { nullable: true })
], GuestUncheckedCreateWithoutEmailQueueInput.prototype, "groupMembers", void 0);
__decorate([
    (0, graphql_1.Field)(() => QrCodeUncheckedCreateNestedOneWithoutGuestInput, { nullable: true })
], GuestUncheckedCreateWithoutEmailQueueInput.prototype, "qrcode", void 0);
__decorate([
    (0, graphql_1.Field)(() => InvitationImageUncheckedCreateNestedOneWithoutGuestInput, { nullable: true })
], GuestUncheckedCreateWithoutEmailQueueInput.prototype, "invitationImage", void 0);
__decorate([
    (0, graphql_1.Field)(() => WhatsappQueueUncheckedCreateNestedManyWithoutGuestInput, { nullable: true })
], GuestUncheckedCreateWithoutEmailQueueInput.prototype, "whatsappQueue", void 0);
GuestUncheckedCreateWithoutEmailQueueInput = __decorate([
    (0, graphql_5.InputType)()
], GuestUncheckedCreateWithoutEmailQueueInput);
exports.GuestUncheckedCreateWithoutEmailQueueInput = GuestUncheckedCreateWithoutEmailQueueInput;
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
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], GuestUncheckedCreateWithoutGroupMemberOfInput.prototype, "qrcodeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], GuestUncheckedCreateWithoutGroupMemberOfInput.prototype, "invitationImageId", void 0);
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
    (0, graphql_1.Field)(() => EmailQueueUncheckedCreateNestedManyWithoutGuestInput, { nullable: true })
], GuestUncheckedCreateWithoutGroupMemberOfInput.prototype, "emailQueue", void 0);
__decorate([
    (0, graphql_1.Field)(() => WhatsappQueueUncheckedCreateNestedManyWithoutGuestInput, { nullable: true })
], GuestUncheckedCreateWithoutGroupMemberOfInput.prototype, "whatsappQueue", void 0);
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
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], GuestUncheckedCreateWithoutGroupMembersInput.prototype, "qrcodeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], GuestUncheckedCreateWithoutGroupMembersInput.prototype, "invitationImageId", void 0);
__decorate([
    (0, graphql_1.Field)(() => QrCodeUncheckedCreateNestedOneWithoutGuestInput, { nullable: true })
], GuestUncheckedCreateWithoutGroupMembersInput.prototype, "qrcode", void 0);
__decorate([
    (0, graphql_1.Field)(() => InvitationImageUncheckedCreateNestedOneWithoutGuestInput, { nullable: true })
], GuestUncheckedCreateWithoutGroupMembersInput.prototype, "invitationImage", void 0);
__decorate([
    (0, graphql_1.Field)(() => EmailQueueUncheckedCreateNestedManyWithoutGuestInput, { nullable: true })
], GuestUncheckedCreateWithoutGroupMembersInput.prototype, "emailQueue", void 0);
__decorate([
    (0, graphql_1.Field)(() => WhatsappQueueUncheckedCreateNestedManyWithoutGuestInput, { nullable: true })
], GuestUncheckedCreateWithoutGroupMembersInput.prototype, "whatsappQueue", void 0);
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
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], GuestUncheckedCreateWithoutInvitationImageInput.prototype, "qrcodeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], GuestUncheckedCreateWithoutInvitationImageInput.prototype, "invitationImageId", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestUncheckedCreateNestedManyWithoutGroupMemberOfInput, { nullable: true })
], GuestUncheckedCreateWithoutInvitationImageInput.prototype, "groupMembers", void 0);
__decorate([
    (0, graphql_1.Field)(() => QrCodeUncheckedCreateNestedOneWithoutGuestInput, { nullable: true })
], GuestUncheckedCreateWithoutInvitationImageInput.prototype, "qrcode", void 0);
__decorate([
    (0, graphql_1.Field)(() => EmailQueueUncheckedCreateNestedManyWithoutGuestInput, { nullable: true })
], GuestUncheckedCreateWithoutInvitationImageInput.prototype, "emailQueue", void 0);
__decorate([
    (0, graphql_1.Field)(() => WhatsappQueueUncheckedCreateNestedManyWithoutGuestInput, { nullable: true })
], GuestUncheckedCreateWithoutInvitationImageInput.prototype, "whatsappQueue", void 0);
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
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], GuestUncheckedCreateWithoutQrcodeInput.prototype, "qrcodeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], GuestUncheckedCreateWithoutQrcodeInput.prototype, "invitationImageId", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestUncheckedCreateNestedManyWithoutGroupMemberOfInput, { nullable: true })
], GuestUncheckedCreateWithoutQrcodeInput.prototype, "groupMembers", void 0);
__decorate([
    (0, graphql_1.Field)(() => InvitationImageUncheckedCreateNestedOneWithoutGuestInput, { nullable: true })
], GuestUncheckedCreateWithoutQrcodeInput.prototype, "invitationImage", void 0);
__decorate([
    (0, graphql_1.Field)(() => EmailQueueUncheckedCreateNestedManyWithoutGuestInput, { nullable: true })
], GuestUncheckedCreateWithoutQrcodeInput.prototype, "emailQueue", void 0);
__decorate([
    (0, graphql_1.Field)(() => WhatsappQueueUncheckedCreateNestedManyWithoutGuestInput, { nullable: true })
], GuestUncheckedCreateWithoutQrcodeInput.prototype, "whatsappQueue", void 0);
GuestUncheckedCreateWithoutQrcodeInput = __decorate([
    (0, graphql_5.InputType)()
], GuestUncheckedCreateWithoutQrcodeInput);
exports.GuestUncheckedCreateWithoutQrcodeInput = GuestUncheckedCreateWithoutQrcodeInput;
let GuestUncheckedCreateWithoutWhatsappQueueInput = class GuestUncheckedCreateWithoutWhatsappQueueInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestUncheckedCreateWithoutWhatsappQueueInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestUncheckedCreateWithoutWhatsappQueueInput.prototype, "source", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], GuestUncheckedCreateWithoutWhatsappQueueInput.prototype, "invitationName", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestUncheckedCreateWithoutWhatsappQueueInput.prototype, "contactList", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_6.Float, { nullable: true })
], GuestUncheckedCreateWithoutWhatsappQueueInput.prototype, "whatsapp", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestUncheckedCreateWithoutWhatsappQueueInput.prototype, "category", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestUncheckedCreateWithoutWhatsappQueueInput.prototype, "class", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestUncheckedCreateWithoutWhatsappQueueInput.prototype, "seat", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestUncheckedCreateWithoutWhatsappQueueInput.prototype, "studio", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestUncheckedCreateWithoutWhatsappQueueInput.prototype, "showTime", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestUncheckedCreateWithoutWhatsappQueueInput.prototype, "rejectionReason", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], GuestUncheckedCreateWithoutWhatsappQueueInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], GuestUncheckedCreateWithoutWhatsappQueueInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], GuestUncheckedCreateWithoutWhatsappQueueInput.prototype, "deletedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestUncheckedCreateWithoutWhatsappQueueInput.prototype, "groupMemberOfId", void 0);
__decorate([
    (0, graphql_1.Field)(() => ConfirmationStatus, { nullable: true })
], GuestUncheckedCreateWithoutWhatsappQueueInput.prototype, "confirmationStatus", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], GuestUncheckedCreateWithoutWhatsappQueueInput.prototype, "qrcodeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], GuestUncheckedCreateWithoutWhatsappQueueInput.prototype, "invitationImageId", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestUncheckedCreateNestedManyWithoutGroupMemberOfInput, { nullable: true })
], GuestUncheckedCreateWithoutWhatsappQueueInput.prototype, "groupMembers", void 0);
__decorate([
    (0, graphql_1.Field)(() => QrCodeUncheckedCreateNestedOneWithoutGuestInput, { nullable: true })
], GuestUncheckedCreateWithoutWhatsappQueueInput.prototype, "qrcode", void 0);
__decorate([
    (0, graphql_1.Field)(() => InvitationImageUncheckedCreateNestedOneWithoutGuestInput, { nullable: true })
], GuestUncheckedCreateWithoutWhatsappQueueInput.prototype, "invitationImage", void 0);
__decorate([
    (0, graphql_1.Field)(() => EmailQueueUncheckedCreateNestedManyWithoutGuestInput, { nullable: true })
], GuestUncheckedCreateWithoutWhatsappQueueInput.prototype, "emailQueue", void 0);
GuestUncheckedCreateWithoutWhatsappQueueInput = __decorate([
    (0, graphql_5.InputType)()
], GuestUncheckedCreateWithoutWhatsappQueueInput);
exports.GuestUncheckedCreateWithoutWhatsappQueueInput = GuestUncheckedCreateWithoutWhatsappQueueInput;
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
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], GuestUncheckedCreateInput.prototype, "qrcodeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], GuestUncheckedCreateInput.prototype, "invitationImageId", void 0);
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
    (0, graphql_1.Field)(() => EmailQueueUncheckedCreateNestedManyWithoutGuestInput, { nullable: true })
], GuestUncheckedCreateInput.prototype, "emailQueue", void 0);
__decorate([
    (0, graphql_1.Field)(() => WhatsappQueueUncheckedCreateNestedManyWithoutGuestInput, { nullable: true })
], GuestUncheckedCreateInput.prototype, "whatsappQueue", void 0);
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
__decorate([
    (0, graphql_1.Field)(() => NullableIntFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateManyWithoutGroupMemberOfInput.prototype, "qrcodeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableIntFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateManyWithoutGroupMemberOfInput.prototype, "invitationImageId", void 0);
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
__decorate([
    (0, graphql_1.Field)(() => NullableIntFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateManyInput.prototype, "qrcodeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableIntFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateManyInput.prototype, "invitationImageId", void 0);
GuestUncheckedUpdateManyInput = __decorate([
    (0, graphql_5.InputType)()
], GuestUncheckedUpdateManyInput);
exports.GuestUncheckedUpdateManyInput = GuestUncheckedUpdateManyInput;
let GuestUncheckedUpdateWithoutEmailQueueInput = class GuestUncheckedUpdateWithoutEmailQueueInput {
};
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutEmailQueueInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutEmailQueueInput.prototype, "source", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutEmailQueueInput.prototype, "invitationName", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutEmailQueueInput.prototype, "contactList", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableFloatFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutEmailQueueInput.prototype, "whatsapp", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutEmailQueueInput.prototype, "category", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutEmailQueueInput.prototype, "class", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutEmailQueueInput.prototype, "seat", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutEmailQueueInput.prototype, "studio", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutEmailQueueInput.prototype, "showTime", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutEmailQueueInput.prototype, "rejectionReason", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutEmailQueueInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutEmailQueueInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutEmailQueueInput.prototype, "deletedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutEmailQueueInput.prototype, "groupMemberOfId", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableEnumConfirmationStatusFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutEmailQueueInput.prototype, "confirmationStatus", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableIntFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutEmailQueueInput.prototype, "qrcodeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableIntFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutEmailQueueInput.prototype, "invitationImageId", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestUncheckedUpdateManyWithoutGroupMemberOfNestedInput, { nullable: true })
], GuestUncheckedUpdateWithoutEmailQueueInput.prototype, "groupMembers", void 0);
__decorate([
    (0, graphql_1.Field)(() => QrCodeUncheckedUpdateOneWithoutGuestNestedInput, { nullable: true })
], GuestUncheckedUpdateWithoutEmailQueueInput.prototype, "qrcode", void 0);
__decorate([
    (0, graphql_1.Field)(() => InvitationImageUncheckedUpdateOneWithoutGuestNestedInput, { nullable: true })
], GuestUncheckedUpdateWithoutEmailQueueInput.prototype, "invitationImage", void 0);
__decorate([
    (0, graphql_1.Field)(() => WhatsappQueueUncheckedUpdateManyWithoutGuestNestedInput, { nullable: true })
], GuestUncheckedUpdateWithoutEmailQueueInput.prototype, "whatsappQueue", void 0);
GuestUncheckedUpdateWithoutEmailQueueInput = __decorate([
    (0, graphql_5.InputType)()
], GuestUncheckedUpdateWithoutEmailQueueInput);
exports.GuestUncheckedUpdateWithoutEmailQueueInput = GuestUncheckedUpdateWithoutEmailQueueInput;
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
    (0, graphql_1.Field)(() => NullableIntFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutGroupMemberOfInput.prototype, "qrcodeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableIntFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutGroupMemberOfInput.prototype, "invitationImageId", void 0);
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
    (0, graphql_1.Field)(() => EmailQueueUncheckedUpdateManyWithoutGuestNestedInput, { nullable: true })
], GuestUncheckedUpdateWithoutGroupMemberOfInput.prototype, "emailQueue", void 0);
__decorate([
    (0, graphql_1.Field)(() => WhatsappQueueUncheckedUpdateManyWithoutGuestNestedInput, { nullable: true })
], GuestUncheckedUpdateWithoutGroupMemberOfInput.prototype, "whatsappQueue", void 0);
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
    (0, graphql_1.Field)(() => NullableIntFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutGroupMembersInput.prototype, "qrcodeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableIntFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutGroupMembersInput.prototype, "invitationImageId", void 0);
__decorate([
    (0, graphql_1.Field)(() => QrCodeUncheckedUpdateOneWithoutGuestNestedInput, { nullable: true })
], GuestUncheckedUpdateWithoutGroupMembersInput.prototype, "qrcode", void 0);
__decorate([
    (0, graphql_1.Field)(() => InvitationImageUncheckedUpdateOneWithoutGuestNestedInput, { nullable: true })
], GuestUncheckedUpdateWithoutGroupMembersInput.prototype, "invitationImage", void 0);
__decorate([
    (0, graphql_1.Field)(() => EmailQueueUncheckedUpdateManyWithoutGuestNestedInput, { nullable: true })
], GuestUncheckedUpdateWithoutGroupMembersInput.prototype, "emailQueue", void 0);
__decorate([
    (0, graphql_1.Field)(() => WhatsappQueueUncheckedUpdateManyWithoutGuestNestedInput, { nullable: true })
], GuestUncheckedUpdateWithoutGroupMembersInput.prototype, "whatsappQueue", void 0);
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
    (0, graphql_1.Field)(() => NullableIntFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutInvitationImageInput.prototype, "qrcodeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableIntFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutInvitationImageInput.prototype, "invitationImageId", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestUncheckedUpdateManyWithoutGroupMemberOfNestedInput, { nullable: true })
], GuestUncheckedUpdateWithoutInvitationImageInput.prototype, "groupMembers", void 0);
__decorate([
    (0, graphql_1.Field)(() => QrCodeUncheckedUpdateOneWithoutGuestNestedInput, { nullable: true })
], GuestUncheckedUpdateWithoutInvitationImageInput.prototype, "qrcode", void 0);
__decorate([
    (0, graphql_1.Field)(() => EmailQueueUncheckedUpdateManyWithoutGuestNestedInput, { nullable: true })
], GuestUncheckedUpdateWithoutInvitationImageInput.prototype, "emailQueue", void 0);
__decorate([
    (0, graphql_1.Field)(() => WhatsappQueueUncheckedUpdateManyWithoutGuestNestedInput, { nullable: true })
], GuestUncheckedUpdateWithoutInvitationImageInput.prototype, "whatsappQueue", void 0);
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
    (0, graphql_1.Field)(() => NullableIntFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutQrcodeInput.prototype, "qrcodeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableIntFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutQrcodeInput.prototype, "invitationImageId", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestUncheckedUpdateManyWithoutGroupMemberOfNestedInput, { nullable: true })
], GuestUncheckedUpdateWithoutQrcodeInput.prototype, "groupMembers", void 0);
__decorate([
    (0, graphql_1.Field)(() => InvitationImageUncheckedUpdateOneWithoutGuestNestedInput, { nullable: true })
], GuestUncheckedUpdateWithoutQrcodeInput.prototype, "invitationImage", void 0);
__decorate([
    (0, graphql_1.Field)(() => EmailQueueUncheckedUpdateManyWithoutGuestNestedInput, { nullable: true })
], GuestUncheckedUpdateWithoutQrcodeInput.prototype, "emailQueue", void 0);
__decorate([
    (0, graphql_1.Field)(() => WhatsappQueueUncheckedUpdateManyWithoutGuestNestedInput, { nullable: true })
], GuestUncheckedUpdateWithoutQrcodeInput.prototype, "whatsappQueue", void 0);
GuestUncheckedUpdateWithoutQrcodeInput = __decorate([
    (0, graphql_5.InputType)()
], GuestUncheckedUpdateWithoutQrcodeInput);
exports.GuestUncheckedUpdateWithoutQrcodeInput = GuestUncheckedUpdateWithoutQrcodeInput;
let GuestUncheckedUpdateWithoutWhatsappQueueInput = class GuestUncheckedUpdateWithoutWhatsappQueueInput {
};
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutWhatsappQueueInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutWhatsappQueueInput.prototype, "source", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutWhatsappQueueInput.prototype, "invitationName", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutWhatsappQueueInput.prototype, "contactList", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableFloatFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutWhatsappQueueInput.prototype, "whatsapp", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutWhatsappQueueInput.prototype, "category", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutWhatsappQueueInput.prototype, "class", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutWhatsappQueueInput.prototype, "seat", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutWhatsappQueueInput.prototype, "studio", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutWhatsappQueueInput.prototype, "showTime", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutWhatsappQueueInput.prototype, "rejectionReason", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutWhatsappQueueInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutWhatsappQueueInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutWhatsappQueueInput.prototype, "deletedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutWhatsappQueueInput.prototype, "groupMemberOfId", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableEnumConfirmationStatusFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutWhatsappQueueInput.prototype, "confirmationStatus", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableIntFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutWhatsappQueueInput.prototype, "qrcodeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableIntFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateWithoutWhatsappQueueInput.prototype, "invitationImageId", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestUncheckedUpdateManyWithoutGroupMemberOfNestedInput, { nullable: true })
], GuestUncheckedUpdateWithoutWhatsappQueueInput.prototype, "groupMembers", void 0);
__decorate([
    (0, graphql_1.Field)(() => QrCodeUncheckedUpdateOneWithoutGuestNestedInput, { nullable: true })
], GuestUncheckedUpdateWithoutWhatsappQueueInput.prototype, "qrcode", void 0);
__decorate([
    (0, graphql_1.Field)(() => InvitationImageUncheckedUpdateOneWithoutGuestNestedInput, { nullable: true })
], GuestUncheckedUpdateWithoutWhatsappQueueInput.prototype, "invitationImage", void 0);
__decorate([
    (0, graphql_1.Field)(() => EmailQueueUncheckedUpdateManyWithoutGuestNestedInput, { nullable: true })
], GuestUncheckedUpdateWithoutWhatsappQueueInput.prototype, "emailQueue", void 0);
GuestUncheckedUpdateWithoutWhatsappQueueInput = __decorate([
    (0, graphql_5.InputType)()
], GuestUncheckedUpdateWithoutWhatsappQueueInput);
exports.GuestUncheckedUpdateWithoutWhatsappQueueInput = GuestUncheckedUpdateWithoutWhatsappQueueInput;
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
    (0, graphql_1.Field)(() => NullableIntFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateInput.prototype, "qrcodeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableIntFieldUpdateOperationsInput, { nullable: true })
], GuestUncheckedUpdateInput.prototype, "invitationImageId", void 0);
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
    (0, graphql_1.Field)(() => EmailQueueUncheckedUpdateManyWithoutGuestNestedInput, { nullable: true })
], GuestUncheckedUpdateInput.prototype, "emailQueue", void 0);
__decorate([
    (0, graphql_1.Field)(() => WhatsappQueueUncheckedUpdateManyWithoutGuestNestedInput, { nullable: true })
], GuestUncheckedUpdateInput.prototype, "whatsappQueue", void 0);
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
__decorate([
    (0, graphql_1.Field)(() => NullableIntFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateManyMutationInput.prototype, "qrcodeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableIntFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateManyMutationInput.prototype, "invitationImageId", void 0);
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
    (0, graphql_5.InputType)()
], GuestUpdateOneRequiredWithoutEmailQueueNestedInput);
exports.GuestUpdateOneRequiredWithoutEmailQueueNestedInput = GuestUpdateOneRequiredWithoutEmailQueueNestedInput;
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
    (0, graphql_5.InputType)()
], GuestUpdateOneRequiredWithoutWhatsappQueueNestedInput);
exports.GuestUpdateOneRequiredWithoutWhatsappQueueNestedInput = GuestUpdateOneRequiredWithoutWhatsappQueueNestedInput;
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
    (0, graphql_5.InputType)()
], GuestUpdateToOneWithWhereWithoutEmailQueueInput);
exports.GuestUpdateToOneWithWhereWithoutEmailQueueInput = GuestUpdateToOneWithWhereWithoutEmailQueueInput;
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
    (0, graphql_5.InputType)()
], GuestUpdateToOneWithWhereWithoutWhatsappQueueInput);
exports.GuestUpdateToOneWithWhereWithoutWhatsappQueueInput = GuestUpdateToOneWithWhereWithoutWhatsappQueueInput;
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
let GuestUpdateWithoutEmailQueueInput = class GuestUpdateWithoutEmailQueueInput {
};
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateWithoutEmailQueueInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateWithoutEmailQueueInput.prototype, "source", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateWithoutEmailQueueInput.prototype, "invitationName", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateWithoutEmailQueueInput.prototype, "contactList", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableFloatFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateWithoutEmailQueueInput.prototype, "whatsapp", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateWithoutEmailQueueInput.prototype, "category", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateWithoutEmailQueueInput.prototype, "class", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateWithoutEmailQueueInput.prototype, "seat", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateWithoutEmailQueueInput.prototype, "studio", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateWithoutEmailQueueInput.prototype, "showTime", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateWithoutEmailQueueInput.prototype, "rejectionReason", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateWithoutEmailQueueInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateWithoutEmailQueueInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateWithoutEmailQueueInput.prototype, "deletedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableEnumConfirmationStatusFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateWithoutEmailQueueInput.prototype, "confirmationStatus", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableIntFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateWithoutEmailQueueInput.prototype, "qrcodeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableIntFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateWithoutEmailQueueInput.prototype, "invitationImageId", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestUpdateOneWithoutGroupMembersNestedInput, { nullable: true })
], GuestUpdateWithoutEmailQueueInput.prototype, "groupMemberOf", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestUpdateManyWithoutGroupMemberOfNestedInput, { nullable: true })
], GuestUpdateWithoutEmailQueueInput.prototype, "groupMembers", void 0);
__decorate([
    (0, graphql_1.Field)(() => QrCodeUpdateOneWithoutGuestNestedInput, { nullable: true })
], GuestUpdateWithoutEmailQueueInput.prototype, "qrcode", void 0);
__decorate([
    (0, graphql_1.Field)(() => InvitationImageUpdateOneWithoutGuestNestedInput, { nullable: true })
], GuestUpdateWithoutEmailQueueInput.prototype, "invitationImage", void 0);
__decorate([
    (0, graphql_1.Field)(() => WhatsappQueueUpdateManyWithoutGuestNestedInput, { nullable: true })
], GuestUpdateWithoutEmailQueueInput.prototype, "whatsappQueue", void 0);
GuestUpdateWithoutEmailQueueInput = __decorate([
    (0, graphql_5.InputType)()
], GuestUpdateWithoutEmailQueueInput);
exports.GuestUpdateWithoutEmailQueueInput = GuestUpdateWithoutEmailQueueInput;
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
    (0, graphql_1.Field)(() => NullableIntFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateWithoutGroupMemberOfInput.prototype, "qrcodeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableIntFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateWithoutGroupMemberOfInput.prototype, "invitationImageId", void 0);
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
    (0, graphql_1.Field)(() => EmailQueueUpdateManyWithoutGuestNestedInput, { nullable: true })
], GuestUpdateWithoutGroupMemberOfInput.prototype, "emailQueue", void 0);
__decorate([
    (0, graphql_1.Field)(() => WhatsappQueueUpdateManyWithoutGuestNestedInput, { nullable: true })
], GuestUpdateWithoutGroupMemberOfInput.prototype, "whatsappQueue", void 0);
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
    (0, graphql_1.Field)(() => NullableIntFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateWithoutGroupMembersInput.prototype, "qrcodeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableIntFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateWithoutGroupMembersInput.prototype, "invitationImageId", void 0);
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
    (0, graphql_1.Field)(() => EmailQueueUpdateManyWithoutGuestNestedInput, { nullable: true })
], GuestUpdateWithoutGroupMembersInput.prototype, "emailQueue", void 0);
__decorate([
    (0, graphql_1.Field)(() => WhatsappQueueUpdateManyWithoutGuestNestedInput, { nullable: true })
], GuestUpdateWithoutGroupMembersInput.prototype, "whatsappQueue", void 0);
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
    (0, graphql_1.Field)(() => NullableIntFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateWithoutInvitationImageInput.prototype, "qrcodeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableIntFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateWithoutInvitationImageInput.prototype, "invitationImageId", void 0);
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
    (0, graphql_1.Field)(() => EmailQueueUpdateManyWithoutGuestNestedInput, { nullable: true })
], GuestUpdateWithoutInvitationImageInput.prototype, "emailQueue", void 0);
__decorate([
    (0, graphql_1.Field)(() => WhatsappQueueUpdateManyWithoutGuestNestedInput, { nullable: true })
], GuestUpdateWithoutInvitationImageInput.prototype, "whatsappQueue", void 0);
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
    (0, graphql_1.Field)(() => NullableIntFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateWithoutQrcodeInput.prototype, "qrcodeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableIntFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateWithoutQrcodeInput.prototype, "invitationImageId", void 0);
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
    (0, graphql_1.Field)(() => EmailQueueUpdateManyWithoutGuestNestedInput, { nullable: true })
], GuestUpdateWithoutQrcodeInput.prototype, "emailQueue", void 0);
__decorate([
    (0, graphql_1.Field)(() => WhatsappQueueUpdateManyWithoutGuestNestedInput, { nullable: true })
], GuestUpdateWithoutQrcodeInput.prototype, "whatsappQueue", void 0);
GuestUpdateWithoutQrcodeInput = __decorate([
    (0, graphql_5.InputType)()
], GuestUpdateWithoutQrcodeInput);
exports.GuestUpdateWithoutQrcodeInput = GuestUpdateWithoutQrcodeInput;
let GuestUpdateWithoutWhatsappQueueInput = class GuestUpdateWithoutWhatsappQueueInput {
};
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateWithoutWhatsappQueueInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateWithoutWhatsappQueueInput.prototype, "source", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateWithoutWhatsappQueueInput.prototype, "invitationName", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateWithoutWhatsappQueueInput.prototype, "contactList", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableFloatFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateWithoutWhatsappQueueInput.prototype, "whatsapp", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateWithoutWhatsappQueueInput.prototype, "category", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateWithoutWhatsappQueueInput.prototype, "class", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateWithoutWhatsappQueueInput.prototype, "seat", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateWithoutWhatsappQueueInput.prototype, "studio", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateWithoutWhatsappQueueInput.prototype, "showTime", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateWithoutWhatsappQueueInput.prototype, "rejectionReason", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateWithoutWhatsappQueueInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateWithoutWhatsappQueueInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateWithoutWhatsappQueueInput.prototype, "deletedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableEnumConfirmationStatusFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateWithoutWhatsappQueueInput.prototype, "confirmationStatus", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableIntFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateWithoutWhatsappQueueInput.prototype, "qrcodeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableIntFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateWithoutWhatsappQueueInput.prototype, "invitationImageId", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestUpdateOneWithoutGroupMembersNestedInput, { nullable: true })
], GuestUpdateWithoutWhatsappQueueInput.prototype, "groupMemberOf", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestUpdateManyWithoutGroupMemberOfNestedInput, { nullable: true })
], GuestUpdateWithoutWhatsappQueueInput.prototype, "groupMembers", void 0);
__decorate([
    (0, graphql_1.Field)(() => QrCodeUpdateOneWithoutGuestNestedInput, { nullable: true })
], GuestUpdateWithoutWhatsappQueueInput.prototype, "qrcode", void 0);
__decorate([
    (0, graphql_1.Field)(() => InvitationImageUpdateOneWithoutGuestNestedInput, { nullable: true })
], GuestUpdateWithoutWhatsappQueueInput.prototype, "invitationImage", void 0);
__decorate([
    (0, graphql_1.Field)(() => EmailQueueUpdateManyWithoutGuestNestedInput, { nullable: true })
], GuestUpdateWithoutWhatsappQueueInput.prototype, "emailQueue", void 0);
GuestUpdateWithoutWhatsappQueueInput = __decorate([
    (0, graphql_5.InputType)()
], GuestUpdateWithoutWhatsappQueueInput);
exports.GuestUpdateWithoutWhatsappQueueInput = GuestUpdateWithoutWhatsappQueueInput;
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
    (0, graphql_1.Field)(() => NullableIntFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateInput.prototype, "qrcodeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableIntFieldUpdateOperationsInput, { nullable: true })
], GuestUpdateInput.prototype, "invitationImageId", void 0);
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
    (0, graphql_1.Field)(() => EmailQueueUpdateManyWithoutGuestNestedInput, { nullable: true })
], GuestUpdateInput.prototype, "emailQueue", void 0);
__decorate([
    (0, graphql_1.Field)(() => WhatsappQueueUpdateManyWithoutGuestNestedInput, { nullable: true })
], GuestUpdateInput.prototype, "whatsappQueue", void 0);
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
    (0, graphql_5.InputType)()
], GuestUpsertWithoutEmailQueueInput);
exports.GuestUpsertWithoutEmailQueueInput = GuestUpsertWithoutEmailQueueInput;
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
    (0, graphql_5.InputType)()
], GuestUpsertWithoutWhatsappQueueInput);
exports.GuestUpsertWithoutWhatsappQueueInput = GuestUpsertWithoutWhatsappQueueInput;
let GuestWhereUniqueInput = class GuestWhereUniqueInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], GuestWhereUniqueInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], GuestWhereUniqueInput.prototype, "qrcodeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], GuestWhereUniqueInput.prototype, "invitationImageId", void 0);
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
    (0, graphql_1.Field)(() => EmailQueueListRelationFilter, { nullable: true })
], GuestWhereUniqueInput.prototype, "emailQueue", void 0);
__decorate([
    (0, graphql_1.Field)(() => WhatsappQueueListRelationFilter, { nullable: true })
], GuestWhereUniqueInput.prototype, "whatsappQueue", void 0);
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
    (0, graphql_1.Field)(() => IntNullableFilter, { nullable: true })
], GuestWhereInput.prototype, "qrcodeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => IntNullableFilter, { nullable: true })
], GuestWhereInput.prototype, "invitationImageId", void 0);
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
    (0, graphql_1.Field)(() => EmailQueueListRelationFilter, { nullable: true })
], GuestWhereInput.prototype, "emailQueue", void 0);
__decorate([
    (0, graphql_1.Field)(() => WhatsappQueueListRelationFilter, { nullable: true })
], GuestWhereInput.prototype, "whatsappQueue", void 0);
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
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], Guest.prototype, "qrcodeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], Guest.prototype, "invitationImageId", void 0);
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
    (0, graphql_1.Field)(() => [EmailQueue], { nullable: true })
], Guest.prototype, "emailQueue", void 0);
__decorate([
    (0, graphql_1.Field)(() => [WhatsappQueue], { nullable: true })
], Guest.prototype, "whatsappQueue", void 0);
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
    (0, graphql_1.Field)(() => InvitationImageAvgAggregate, { nullable: true })
], AggregateInvitationImage.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => InvitationImageSumAggregate, { nullable: true })
], AggregateInvitationImage.prototype, "_sum", void 0);
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
    (0, graphql_1.Field)(() => InvitationImageAvgAggregateInput, { nullable: true })
], InvitationImageAggregateArgs.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => InvitationImageSumAggregateInput, { nullable: true })
], InvitationImageAggregateArgs.prototype, "_sum", void 0);
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
let InvitationImageAvgAggregateInput = class InvitationImageAvgAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], InvitationImageAvgAggregateInput.prototype, "id", void 0);
InvitationImageAvgAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], InvitationImageAvgAggregateInput);
exports.InvitationImageAvgAggregateInput = InvitationImageAvgAggregateInput;
let InvitationImageAvgAggregate = class InvitationImageAvgAggregate {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_6.Float, { nullable: true })
], InvitationImageAvgAggregate.prototype, "id", void 0);
InvitationImageAvgAggregate = __decorate([
    (0, graphql_2.ObjectType)()
], InvitationImageAvgAggregate);
exports.InvitationImageAvgAggregate = InvitationImageAvgAggregate;
let InvitationImageAvgOrderByAggregateInput = class InvitationImageAvgOrderByAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], InvitationImageAvgOrderByAggregateInput.prototype, "id", void 0);
InvitationImageAvgOrderByAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], InvitationImageAvgOrderByAggregateInput);
exports.InvitationImageAvgOrderByAggregateInput = InvitationImageAvgOrderByAggregateInput;
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
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
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
    (0, graphql_1.Field)(() => InvitationImageAvgAggregateInput, { nullable: true })
], InvitationImageGroupByArgs.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => InvitationImageSumAggregateInput, { nullable: true })
], InvitationImageGroupByArgs.prototype, "_sum", void 0);
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
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
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
    (0, graphql_1.Field)(() => InvitationImageAvgAggregate, { nullable: true })
], InvitationImageGroupBy.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => InvitationImageSumAggregate, { nullable: true })
], InvitationImageGroupBy.prototype, "_sum", void 0);
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
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
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
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
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
    (0, graphql_1.Field)(() => InvitationImageAvgOrderByAggregateInput, { nullable: true })
], InvitationImageOrderByWithAggregationInput.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => InvitationImageMaxOrderByAggregateInput, { nullable: true })
], InvitationImageOrderByWithAggregationInput.prototype, "_max", void 0);
__decorate([
    (0, graphql_1.Field)(() => InvitationImageMinOrderByAggregateInput, { nullable: true })
], InvitationImageOrderByWithAggregationInput.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => InvitationImageSumOrderByAggregateInput, { nullable: true })
], InvitationImageOrderByWithAggregationInput.prototype, "_sum", void 0);
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
    (0, graphql_1.Field)(() => IntWithAggregatesFilter, { nullable: true })
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
let InvitationImageSumAggregateInput = class InvitationImageSumAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], InvitationImageSumAggregateInput.prototype, "id", void 0);
InvitationImageSumAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], InvitationImageSumAggregateInput);
exports.InvitationImageSumAggregateInput = InvitationImageSumAggregateInput;
let InvitationImageSumAggregate = class InvitationImageSumAggregate {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], InvitationImageSumAggregate.prototype, "id", void 0);
InvitationImageSumAggregate = __decorate([
    (0, graphql_2.ObjectType)()
], InvitationImageSumAggregate);
exports.InvitationImageSumAggregate = InvitationImageSumAggregate;
let InvitationImageSumOrderByAggregateInput = class InvitationImageSumOrderByAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], InvitationImageSumOrderByAggregateInput.prototype, "id", void 0);
InvitationImageSumOrderByAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], InvitationImageSumOrderByAggregateInput);
exports.InvitationImageSumOrderByAggregateInput = InvitationImageSumOrderByAggregateInput;
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
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
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
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
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
    (0, graphql_1.Field)(() => IntFieldUpdateOperationsInput, { nullable: true })
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
    (0, graphql_1.Field)(() => IntFieldUpdateOperationsInput, { nullable: true })
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
    (0, graphql_1.Field)(() => IntFieldUpdateOperationsInput, { nullable: true })
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
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
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
    (0, graphql_1.Field)(() => IntFilter, { nullable: true })
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
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
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
let IntNullableFilter = class IntNullableFilter {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], IntNullableFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [graphql_4.Int], { nullable: true })
], IntNullableFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [graphql_4.Int], { nullable: true })
], IntNullableFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], IntNullableFilter.prototype, "lt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], IntNullableFilter.prototype, "lte", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], IntNullableFilter.prototype, "gt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], IntNullableFilter.prototype, "gte", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedIntNullableFilter, { nullable: true })
], IntNullableFilter.prototype, "not", void 0);
IntNullableFilter = __decorate([
    (0, graphql_5.InputType)()
], IntNullableFilter);
exports.IntNullableFilter = IntNullableFilter;
let IntNullableWithAggregatesFilter = class IntNullableWithAggregatesFilter {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], IntNullableWithAggregatesFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [graphql_4.Int], { nullable: true })
], IntNullableWithAggregatesFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [graphql_4.Int], { nullable: true })
], IntNullableWithAggregatesFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], IntNullableWithAggregatesFilter.prototype, "lt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], IntNullableWithAggregatesFilter.prototype, "lte", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], IntNullableWithAggregatesFilter.prototype, "gt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], IntNullableWithAggregatesFilter.prototype, "gte", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedIntNullableWithAggregatesFilter, { nullable: true })
], IntNullableWithAggregatesFilter.prototype, "not", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedIntNullableFilter, { nullable: true })
], IntNullableWithAggregatesFilter.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedFloatNullableFilter, { nullable: true })
], IntNullableWithAggregatesFilter.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedIntNullableFilter, { nullable: true })
], IntNullableWithAggregatesFilter.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedIntNullableFilter, { nullable: true })
], IntNullableWithAggregatesFilter.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedIntNullableFilter, { nullable: true })
], IntNullableWithAggregatesFilter.prototype, "_max", void 0);
IntNullableWithAggregatesFilter = __decorate([
    (0, graphql_5.InputType)()
], IntNullableWithAggregatesFilter);
exports.IntNullableWithAggregatesFilter = IntNullableWithAggregatesFilter;
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
let NestedIntNullableWithAggregatesFilter = NestedIntNullableWithAggregatesFilter_1 = class NestedIntNullableWithAggregatesFilter {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], NestedIntNullableWithAggregatesFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [graphql_4.Int], { nullable: true })
], NestedIntNullableWithAggregatesFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [graphql_4.Int], { nullable: true })
], NestedIntNullableWithAggregatesFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], NestedIntNullableWithAggregatesFilter.prototype, "lt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], NestedIntNullableWithAggregatesFilter.prototype, "lte", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], NestedIntNullableWithAggregatesFilter.prototype, "gt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], NestedIntNullableWithAggregatesFilter.prototype, "gte", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedIntNullableWithAggregatesFilter_1, { nullable: true })
], NestedIntNullableWithAggregatesFilter.prototype, "not", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedIntNullableFilter, { nullable: true })
], NestedIntNullableWithAggregatesFilter.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedFloatNullableFilter, { nullable: true })
], NestedIntNullableWithAggregatesFilter.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedIntNullableFilter, { nullable: true })
], NestedIntNullableWithAggregatesFilter.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedIntNullableFilter, { nullable: true })
], NestedIntNullableWithAggregatesFilter.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedIntNullableFilter, { nullable: true })
], NestedIntNullableWithAggregatesFilter.prototype, "_max", void 0);
NestedIntNullableWithAggregatesFilter = NestedIntNullableWithAggregatesFilter_1 = __decorate([
    (0, graphql_5.InputType)()
], NestedIntNullableWithAggregatesFilter);
exports.NestedIntNullableWithAggregatesFilter = NestedIntNullableWithAggregatesFilter;
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
let NullableIntFieldUpdateOperationsInput = class NullableIntFieldUpdateOperationsInput {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], NullableIntFieldUpdateOperationsInput.prototype, "set", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], NullableIntFieldUpdateOperationsInput.prototype, "increment", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], NullableIntFieldUpdateOperationsInput.prototype, "decrement", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], NullableIntFieldUpdateOperationsInput.prototype, "multiply", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], NullableIntFieldUpdateOperationsInput.prototype, "divide", void 0);
NullableIntFieldUpdateOperationsInput = __decorate([
    (0, graphql_5.InputType)()
], NullableIntFieldUpdateOperationsInput);
exports.NullableIntFieldUpdateOperationsInput = NullableIntFieldUpdateOperationsInput;
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
    (0, graphql_2.ObjectType)()
], AggregateWhatsappQueue);
exports.AggregateWhatsappQueue = AggregateWhatsappQueue;
let CreateManyWhatsappQueueArgs = class CreateManyWhatsappQueueArgs {
};
__decorate([
    (0, graphql_1.Field)(() => [WhatsappQueueCreateManyInput], { nullable: false }),
    (0, class_transformer_1.Type)(() => WhatsappQueueCreateManyInput)
], CreateManyWhatsappQueueArgs.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], CreateManyWhatsappQueueArgs.prototype, "skipDuplicates", void 0);
CreateManyWhatsappQueueArgs = __decorate([
    (0, graphql_3.ArgsType)()
], CreateManyWhatsappQueueArgs);
exports.CreateManyWhatsappQueueArgs = CreateManyWhatsappQueueArgs;
let CreateOneWhatsappQueueArgs = class CreateOneWhatsappQueueArgs {
};
__decorate([
    (0, graphql_1.Field)(() => WhatsappQueueCreateInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => WhatsappQueueCreateInput)
], CreateOneWhatsappQueueArgs.prototype, "data", void 0);
CreateOneWhatsappQueueArgs = __decorate([
    (0, graphql_3.ArgsType)()
], CreateOneWhatsappQueueArgs);
exports.CreateOneWhatsappQueueArgs = CreateOneWhatsappQueueArgs;
let DeleteManyWhatsappQueueArgs = class DeleteManyWhatsappQueueArgs {
};
__decorate([
    (0, graphql_1.Field)(() => WhatsappQueueWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => WhatsappQueueWhereInput)
], DeleteManyWhatsappQueueArgs.prototype, "where", void 0);
DeleteManyWhatsappQueueArgs = __decorate([
    (0, graphql_3.ArgsType)()
], DeleteManyWhatsappQueueArgs);
exports.DeleteManyWhatsappQueueArgs = DeleteManyWhatsappQueueArgs;
let DeleteOneWhatsappQueueArgs = class DeleteOneWhatsappQueueArgs {
};
__decorate([
    (0, graphql_1.Field)(() => WhatsappQueueWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => WhatsappQueueWhereUniqueInput)
], DeleteOneWhatsappQueueArgs.prototype, "where", void 0);
DeleteOneWhatsappQueueArgs = __decorate([
    (0, graphql_3.ArgsType)()
], DeleteOneWhatsappQueueArgs);
exports.DeleteOneWhatsappQueueArgs = DeleteOneWhatsappQueueArgs;
let FindFirstWhatsappQueueOrThrowArgs = class FindFirstWhatsappQueueOrThrowArgs {
};
__decorate([
    (0, graphql_1.Field)(() => WhatsappQueueWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => WhatsappQueueWhereInput)
], FindFirstWhatsappQueueOrThrowArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [WhatsappQueueOrderByWithRelationInput], { nullable: true })
], FindFirstWhatsappQueueOrThrowArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => WhatsappQueueWhereUniqueInput, { nullable: true })
], FindFirstWhatsappQueueOrThrowArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], FindFirstWhatsappQueueOrThrowArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], FindFirstWhatsappQueueOrThrowArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => [WhatsappQueueScalarFieldEnum], { nullable: true })
], FindFirstWhatsappQueueOrThrowArgs.prototype, "distinct", void 0);
FindFirstWhatsappQueueOrThrowArgs = __decorate([
    (0, graphql_3.ArgsType)()
], FindFirstWhatsappQueueOrThrowArgs);
exports.FindFirstWhatsappQueueOrThrowArgs = FindFirstWhatsappQueueOrThrowArgs;
let FindFirstWhatsappQueueArgs = class FindFirstWhatsappQueueArgs {
};
__decorate([
    (0, graphql_1.Field)(() => WhatsappQueueWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => WhatsappQueueWhereInput)
], FindFirstWhatsappQueueArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [WhatsappQueueOrderByWithRelationInput], { nullable: true })
], FindFirstWhatsappQueueArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => WhatsappQueueWhereUniqueInput, { nullable: true })
], FindFirstWhatsappQueueArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], FindFirstWhatsappQueueArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], FindFirstWhatsappQueueArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => [WhatsappQueueScalarFieldEnum], { nullable: true })
], FindFirstWhatsappQueueArgs.prototype, "distinct", void 0);
FindFirstWhatsappQueueArgs = __decorate([
    (0, graphql_3.ArgsType)()
], FindFirstWhatsappQueueArgs);
exports.FindFirstWhatsappQueueArgs = FindFirstWhatsappQueueArgs;
let FindManyWhatsappQueueArgs = class FindManyWhatsappQueueArgs {
};
__decorate([
    (0, graphql_1.Field)(() => WhatsappQueueWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => WhatsappQueueWhereInput)
], FindManyWhatsappQueueArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [WhatsappQueueOrderByWithRelationInput], { nullable: true })
], FindManyWhatsappQueueArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => WhatsappQueueWhereUniqueInput, { nullable: true })
], FindManyWhatsappQueueArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], FindManyWhatsappQueueArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], FindManyWhatsappQueueArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => [WhatsappQueueScalarFieldEnum], { nullable: true })
], FindManyWhatsappQueueArgs.prototype, "distinct", void 0);
FindManyWhatsappQueueArgs = __decorate([
    (0, graphql_3.ArgsType)()
], FindManyWhatsappQueueArgs);
exports.FindManyWhatsappQueueArgs = FindManyWhatsappQueueArgs;
let FindUniqueWhatsappQueueOrThrowArgs = class FindUniqueWhatsappQueueOrThrowArgs {
};
__decorate([
    (0, graphql_1.Field)(() => WhatsappQueueWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => WhatsappQueueWhereUniqueInput)
], FindUniqueWhatsappQueueOrThrowArgs.prototype, "where", void 0);
FindUniqueWhatsappQueueOrThrowArgs = __decorate([
    (0, graphql_3.ArgsType)()
], FindUniqueWhatsappQueueOrThrowArgs);
exports.FindUniqueWhatsappQueueOrThrowArgs = FindUniqueWhatsappQueueOrThrowArgs;
let FindUniqueWhatsappQueueArgs = class FindUniqueWhatsappQueueArgs {
};
__decorate([
    (0, graphql_1.Field)(() => WhatsappQueueWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => WhatsappQueueWhereUniqueInput)
], FindUniqueWhatsappQueueArgs.prototype, "where", void 0);
FindUniqueWhatsappQueueArgs = __decorate([
    (0, graphql_3.ArgsType)()
], FindUniqueWhatsappQueueArgs);
exports.FindUniqueWhatsappQueueArgs = FindUniqueWhatsappQueueArgs;
let UpdateManyWhatsappQueueArgs = class UpdateManyWhatsappQueueArgs {
};
__decorate([
    (0, graphql_1.Field)(() => WhatsappQueueUpdateManyMutationInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => WhatsappQueueUpdateManyMutationInput)
], UpdateManyWhatsappQueueArgs.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => WhatsappQueueWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => WhatsappQueueWhereInput)
], UpdateManyWhatsappQueueArgs.prototype, "where", void 0);
UpdateManyWhatsappQueueArgs = __decorate([
    (0, graphql_3.ArgsType)()
], UpdateManyWhatsappQueueArgs);
exports.UpdateManyWhatsappQueueArgs = UpdateManyWhatsappQueueArgs;
let UpdateOneWhatsappQueueArgs = class UpdateOneWhatsappQueueArgs {
};
__decorate([
    (0, graphql_1.Field)(() => WhatsappQueueUpdateInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => WhatsappQueueUpdateInput)
], UpdateOneWhatsappQueueArgs.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => WhatsappQueueWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => WhatsappQueueWhereUniqueInput)
], UpdateOneWhatsappQueueArgs.prototype, "where", void 0);
UpdateOneWhatsappQueueArgs = __decorate([
    (0, graphql_3.ArgsType)()
], UpdateOneWhatsappQueueArgs);
exports.UpdateOneWhatsappQueueArgs = UpdateOneWhatsappQueueArgs;
let UpsertOneWhatsappQueueArgs = class UpsertOneWhatsappQueueArgs {
};
__decorate([
    (0, graphql_1.Field)(() => WhatsappQueueWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => WhatsappQueueWhereUniqueInput)
], UpsertOneWhatsappQueueArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => WhatsappQueueCreateInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => WhatsappQueueCreateInput)
], UpsertOneWhatsappQueueArgs.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => WhatsappQueueUpdateInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => WhatsappQueueUpdateInput)
], UpsertOneWhatsappQueueArgs.prototype, "update", void 0);
UpsertOneWhatsappQueueArgs = __decorate([
    (0, graphql_3.ArgsType)()
], UpsertOneWhatsappQueueArgs);
exports.UpsertOneWhatsappQueueArgs = UpsertOneWhatsappQueueArgs;
let WhatsappQueueAggregateArgs = class WhatsappQueueAggregateArgs {
};
__decorate([
    (0, graphql_1.Field)(() => WhatsappQueueWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => WhatsappQueueWhereInput)
], WhatsappQueueAggregateArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [WhatsappQueueOrderByWithRelationInput], { nullable: true })
], WhatsappQueueAggregateArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => WhatsappQueueWhereUniqueInput, { nullable: true })
], WhatsappQueueAggregateArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], WhatsappQueueAggregateArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], WhatsappQueueAggregateArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => WhatsappQueueCountAggregateInput, { nullable: true })
], WhatsappQueueAggregateArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => WhatsappQueueAvgAggregateInput, { nullable: true })
], WhatsappQueueAggregateArgs.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => WhatsappQueueSumAggregateInput, { nullable: true })
], WhatsappQueueAggregateArgs.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => WhatsappQueueMinAggregateInput, { nullable: true })
], WhatsappQueueAggregateArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => WhatsappQueueMaxAggregateInput, { nullable: true })
], WhatsappQueueAggregateArgs.prototype, "_max", void 0);
WhatsappQueueAggregateArgs = __decorate([
    (0, graphql_3.ArgsType)()
], WhatsappQueueAggregateArgs);
exports.WhatsappQueueAggregateArgs = WhatsappQueueAggregateArgs;
let WhatsappQueueAvgAggregateInput = class WhatsappQueueAvgAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], WhatsappQueueAvgAggregateInput.prototype, "id", void 0);
WhatsappQueueAvgAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], WhatsappQueueAvgAggregateInput);
exports.WhatsappQueueAvgAggregateInput = WhatsappQueueAvgAggregateInput;
let WhatsappQueueAvgAggregate = class WhatsappQueueAvgAggregate {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_6.Float, { nullable: true })
], WhatsappQueueAvgAggregate.prototype, "id", void 0);
WhatsappQueueAvgAggregate = __decorate([
    (0, graphql_2.ObjectType)()
], WhatsappQueueAvgAggregate);
exports.WhatsappQueueAvgAggregate = WhatsappQueueAvgAggregate;
let WhatsappQueueAvgOrderByAggregateInput = class WhatsappQueueAvgOrderByAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], WhatsappQueueAvgOrderByAggregateInput.prototype, "id", void 0);
WhatsappQueueAvgOrderByAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], WhatsappQueueAvgOrderByAggregateInput);
exports.WhatsappQueueAvgOrderByAggregateInput = WhatsappQueueAvgOrderByAggregateInput;
let WhatsappQueueCountAggregateInput = class WhatsappQueueCountAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], WhatsappQueueCountAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], WhatsappQueueCountAggregateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], WhatsappQueueCountAggregateInput.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], WhatsappQueueCountAggregateInput.prototype, "guestId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], WhatsappQueueCountAggregateInput.prototype, "_all", void 0);
WhatsappQueueCountAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], WhatsappQueueCountAggregateInput);
exports.WhatsappQueueCountAggregateInput = WhatsappQueueCountAggregateInput;
let WhatsappQueueCountAggregate = class WhatsappQueueCountAggregate {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], WhatsappQueueCountAggregate.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], WhatsappQueueCountAggregate.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], WhatsappQueueCountAggregate.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], WhatsappQueueCountAggregate.prototype, "guestId", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], WhatsappQueueCountAggregate.prototype, "_all", void 0);
WhatsappQueueCountAggregate = __decorate([
    (0, graphql_2.ObjectType)()
], WhatsappQueueCountAggregate);
exports.WhatsappQueueCountAggregate = WhatsappQueueCountAggregate;
let WhatsappQueueCountOrderByAggregateInput = class WhatsappQueueCountOrderByAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], WhatsappQueueCountOrderByAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], WhatsappQueueCountOrderByAggregateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], WhatsappQueueCountOrderByAggregateInput.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], WhatsappQueueCountOrderByAggregateInput.prototype, "guestId", void 0);
WhatsappQueueCountOrderByAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], WhatsappQueueCountOrderByAggregateInput);
exports.WhatsappQueueCountOrderByAggregateInput = WhatsappQueueCountOrderByAggregateInput;
let WhatsappQueueCreateManyGuestInputEnvelope = class WhatsappQueueCreateManyGuestInputEnvelope {
};
__decorate([
    (0, graphql_1.Field)(() => [WhatsappQueueCreateManyGuestInput], { nullable: false }),
    (0, class_transformer_1.Type)(() => WhatsappQueueCreateManyGuestInput)
], WhatsappQueueCreateManyGuestInputEnvelope.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], WhatsappQueueCreateManyGuestInputEnvelope.prototype, "skipDuplicates", void 0);
WhatsappQueueCreateManyGuestInputEnvelope = __decorate([
    (0, graphql_5.InputType)()
], WhatsappQueueCreateManyGuestInputEnvelope);
exports.WhatsappQueueCreateManyGuestInputEnvelope = WhatsappQueueCreateManyGuestInputEnvelope;
let WhatsappQueueCreateManyGuestInput = class WhatsappQueueCreateManyGuestInput {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], WhatsappQueueCreateManyGuestInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], WhatsappQueueCreateManyGuestInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => QueueStatus, { nullable: true })
], WhatsappQueueCreateManyGuestInput.prototype, "status", void 0);
WhatsappQueueCreateManyGuestInput = __decorate([
    (0, graphql_5.InputType)()
], WhatsappQueueCreateManyGuestInput);
exports.WhatsappQueueCreateManyGuestInput = WhatsappQueueCreateManyGuestInput;
let WhatsappQueueCreateManyInput = class WhatsappQueueCreateManyInput {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], WhatsappQueueCreateManyInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], WhatsappQueueCreateManyInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => QueueStatus, { nullable: true })
], WhatsappQueueCreateManyInput.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], WhatsappQueueCreateManyInput.prototype, "guestId", void 0);
WhatsappQueueCreateManyInput = __decorate([
    (0, graphql_5.InputType)()
], WhatsappQueueCreateManyInput);
exports.WhatsappQueueCreateManyInput = WhatsappQueueCreateManyInput;
let WhatsappQueueCreateNestedManyWithoutGuestInput = class WhatsappQueueCreateNestedManyWithoutGuestInput {
};
__decorate([
    (0, graphql_1.Field)(() => [WhatsappQueueCreateWithoutGuestInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => WhatsappQueueCreateWithoutGuestInput)
], WhatsappQueueCreateNestedManyWithoutGuestInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [WhatsappQueueCreateOrConnectWithoutGuestInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => WhatsappQueueCreateOrConnectWithoutGuestInput)
], WhatsappQueueCreateNestedManyWithoutGuestInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => WhatsappQueueCreateManyGuestInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => WhatsappQueueCreateManyGuestInputEnvelope)
], WhatsappQueueCreateNestedManyWithoutGuestInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [WhatsappQueueWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => WhatsappQueueWhereUniqueInput)
], WhatsappQueueCreateNestedManyWithoutGuestInput.prototype, "connect", void 0);
WhatsappQueueCreateNestedManyWithoutGuestInput = __decorate([
    (0, graphql_5.InputType)()
], WhatsappQueueCreateNestedManyWithoutGuestInput);
exports.WhatsappQueueCreateNestedManyWithoutGuestInput = WhatsappQueueCreateNestedManyWithoutGuestInput;
let WhatsappQueueCreateOrConnectWithoutGuestInput = class WhatsappQueueCreateOrConnectWithoutGuestInput {
};
__decorate([
    (0, graphql_1.Field)(() => WhatsappQueueWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => WhatsappQueueWhereUniqueInput)
], WhatsappQueueCreateOrConnectWithoutGuestInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => WhatsappQueueCreateWithoutGuestInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => WhatsappQueueCreateWithoutGuestInput)
], WhatsappQueueCreateOrConnectWithoutGuestInput.prototype, "create", void 0);
WhatsappQueueCreateOrConnectWithoutGuestInput = __decorate([
    (0, graphql_5.InputType)()
], WhatsappQueueCreateOrConnectWithoutGuestInput);
exports.WhatsappQueueCreateOrConnectWithoutGuestInput = WhatsappQueueCreateOrConnectWithoutGuestInput;
let WhatsappQueueCreateWithoutGuestInput = class WhatsappQueueCreateWithoutGuestInput {
};
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], WhatsappQueueCreateWithoutGuestInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => QueueStatus, { nullable: true })
], WhatsappQueueCreateWithoutGuestInput.prototype, "status", void 0);
WhatsappQueueCreateWithoutGuestInput = __decorate([
    (0, graphql_5.InputType)()
], WhatsappQueueCreateWithoutGuestInput);
exports.WhatsappQueueCreateWithoutGuestInput = WhatsappQueueCreateWithoutGuestInput;
let WhatsappQueueCreateInput = class WhatsappQueueCreateInput {
};
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], WhatsappQueueCreateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => QueueStatus, { nullable: true })
], WhatsappQueueCreateInput.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestCreateNestedOneWithoutWhatsappQueueInput, { nullable: false })
], WhatsappQueueCreateInput.prototype, "guest", void 0);
WhatsappQueueCreateInput = __decorate([
    (0, graphql_5.InputType)()
], WhatsappQueueCreateInput);
exports.WhatsappQueueCreateInput = WhatsappQueueCreateInput;
let WhatsappQueueGroupByArgs = class WhatsappQueueGroupByArgs {
};
__decorate([
    (0, graphql_1.Field)(() => WhatsappQueueWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => WhatsappQueueWhereInput)
], WhatsappQueueGroupByArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [WhatsappQueueOrderByWithAggregationInput], { nullable: true })
], WhatsappQueueGroupByArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => [WhatsappQueueScalarFieldEnum], { nullable: false })
], WhatsappQueueGroupByArgs.prototype, "by", void 0);
__decorate([
    (0, graphql_1.Field)(() => WhatsappQueueScalarWhereWithAggregatesInput, { nullable: true })
], WhatsappQueueGroupByArgs.prototype, "having", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], WhatsappQueueGroupByArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], WhatsappQueueGroupByArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => WhatsappQueueCountAggregateInput, { nullable: true })
], WhatsappQueueGroupByArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => WhatsappQueueAvgAggregateInput, { nullable: true })
], WhatsappQueueGroupByArgs.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => WhatsappQueueSumAggregateInput, { nullable: true })
], WhatsappQueueGroupByArgs.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => WhatsappQueueMinAggregateInput, { nullable: true })
], WhatsappQueueGroupByArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => WhatsappQueueMaxAggregateInput, { nullable: true })
], WhatsappQueueGroupByArgs.prototype, "_max", void 0);
WhatsappQueueGroupByArgs = __decorate([
    (0, graphql_3.ArgsType)()
], WhatsappQueueGroupByArgs);
exports.WhatsappQueueGroupByArgs = WhatsappQueueGroupByArgs;
let WhatsappQueueGroupBy = class WhatsappQueueGroupBy {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
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
    (0, graphql_2.ObjectType)()
], WhatsappQueueGroupBy);
exports.WhatsappQueueGroupBy = WhatsappQueueGroupBy;
let WhatsappQueueListRelationFilter = class WhatsappQueueListRelationFilter {
};
__decorate([
    (0, graphql_1.Field)(() => WhatsappQueueWhereInput, { nullable: true })
], WhatsappQueueListRelationFilter.prototype, "every", void 0);
__decorate([
    (0, graphql_1.Field)(() => WhatsappQueueWhereInput, { nullable: true })
], WhatsappQueueListRelationFilter.prototype, "some", void 0);
__decorate([
    (0, graphql_1.Field)(() => WhatsappQueueWhereInput, { nullable: true })
], WhatsappQueueListRelationFilter.prototype, "none", void 0);
WhatsappQueueListRelationFilter = __decorate([
    (0, graphql_5.InputType)()
], WhatsappQueueListRelationFilter);
exports.WhatsappQueueListRelationFilter = WhatsappQueueListRelationFilter;
let WhatsappQueueMaxAggregateInput = class WhatsappQueueMaxAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], WhatsappQueueMaxAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], WhatsappQueueMaxAggregateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], WhatsappQueueMaxAggregateInput.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], WhatsappQueueMaxAggregateInput.prototype, "guestId", void 0);
WhatsappQueueMaxAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], WhatsappQueueMaxAggregateInput);
exports.WhatsappQueueMaxAggregateInput = WhatsappQueueMaxAggregateInput;
let WhatsappQueueMaxAggregate = class WhatsappQueueMaxAggregate {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
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
    (0, graphql_2.ObjectType)()
], WhatsappQueueMaxAggregate);
exports.WhatsappQueueMaxAggregate = WhatsappQueueMaxAggregate;
let WhatsappQueueMaxOrderByAggregateInput = class WhatsappQueueMaxOrderByAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], WhatsappQueueMaxOrderByAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], WhatsappQueueMaxOrderByAggregateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], WhatsappQueueMaxOrderByAggregateInput.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], WhatsappQueueMaxOrderByAggregateInput.prototype, "guestId", void 0);
WhatsappQueueMaxOrderByAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], WhatsappQueueMaxOrderByAggregateInput);
exports.WhatsappQueueMaxOrderByAggregateInput = WhatsappQueueMaxOrderByAggregateInput;
let WhatsappQueueMinAggregateInput = class WhatsappQueueMinAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], WhatsappQueueMinAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], WhatsappQueueMinAggregateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], WhatsappQueueMinAggregateInput.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], WhatsappQueueMinAggregateInput.prototype, "guestId", void 0);
WhatsappQueueMinAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], WhatsappQueueMinAggregateInput);
exports.WhatsappQueueMinAggregateInput = WhatsappQueueMinAggregateInput;
let WhatsappQueueMinAggregate = class WhatsappQueueMinAggregate {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
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
    (0, graphql_2.ObjectType)()
], WhatsappQueueMinAggregate);
exports.WhatsappQueueMinAggregate = WhatsappQueueMinAggregate;
let WhatsappQueueMinOrderByAggregateInput = class WhatsappQueueMinOrderByAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], WhatsappQueueMinOrderByAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], WhatsappQueueMinOrderByAggregateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], WhatsappQueueMinOrderByAggregateInput.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], WhatsappQueueMinOrderByAggregateInput.prototype, "guestId", void 0);
WhatsappQueueMinOrderByAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], WhatsappQueueMinOrderByAggregateInput);
exports.WhatsappQueueMinOrderByAggregateInput = WhatsappQueueMinOrderByAggregateInput;
let WhatsappQueueOrderByRelationAggregateInput = class WhatsappQueueOrderByRelationAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], WhatsappQueueOrderByRelationAggregateInput.prototype, "_count", void 0);
WhatsappQueueOrderByRelationAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], WhatsappQueueOrderByRelationAggregateInput);
exports.WhatsappQueueOrderByRelationAggregateInput = WhatsappQueueOrderByRelationAggregateInput;
let WhatsappQueueOrderByWithAggregationInput = class WhatsappQueueOrderByWithAggregationInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], WhatsappQueueOrderByWithAggregationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], WhatsappQueueOrderByWithAggregationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], WhatsappQueueOrderByWithAggregationInput.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], WhatsappQueueOrderByWithAggregationInput.prototype, "guestId", void 0);
__decorate([
    (0, graphql_1.Field)(() => WhatsappQueueCountOrderByAggregateInput, { nullable: true })
], WhatsappQueueOrderByWithAggregationInput.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => WhatsappQueueAvgOrderByAggregateInput, { nullable: true })
], WhatsappQueueOrderByWithAggregationInput.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => WhatsappQueueMaxOrderByAggregateInput, { nullable: true })
], WhatsappQueueOrderByWithAggregationInput.prototype, "_max", void 0);
__decorate([
    (0, graphql_1.Field)(() => WhatsappQueueMinOrderByAggregateInput, { nullable: true })
], WhatsappQueueOrderByWithAggregationInput.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => WhatsappQueueSumOrderByAggregateInput, { nullable: true })
], WhatsappQueueOrderByWithAggregationInput.prototype, "_sum", void 0);
WhatsappQueueOrderByWithAggregationInput = __decorate([
    (0, graphql_5.InputType)()
], WhatsappQueueOrderByWithAggregationInput);
exports.WhatsappQueueOrderByWithAggregationInput = WhatsappQueueOrderByWithAggregationInput;
let WhatsappQueueOrderByWithRelationInput = class WhatsappQueueOrderByWithRelationInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], WhatsappQueueOrderByWithRelationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], WhatsappQueueOrderByWithRelationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], WhatsappQueueOrderByWithRelationInput.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], WhatsappQueueOrderByWithRelationInput.prototype, "guestId", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestOrderByWithRelationInput, { nullable: true })
], WhatsappQueueOrderByWithRelationInput.prototype, "guest", void 0);
WhatsappQueueOrderByWithRelationInput = __decorate([
    (0, graphql_5.InputType)()
], WhatsappQueueOrderByWithRelationInput);
exports.WhatsappQueueOrderByWithRelationInput = WhatsappQueueOrderByWithRelationInput;
let WhatsappQueueScalarWhereWithAggregatesInput = WhatsappQueueScalarWhereWithAggregatesInput_1 = class WhatsappQueueScalarWhereWithAggregatesInput {
};
__decorate([
    (0, graphql_1.Field)(() => [WhatsappQueueScalarWhereWithAggregatesInput_1], { nullable: true })
], WhatsappQueueScalarWhereWithAggregatesInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [WhatsappQueueScalarWhereWithAggregatesInput_1], { nullable: true })
], WhatsappQueueScalarWhereWithAggregatesInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [WhatsappQueueScalarWhereWithAggregatesInput_1], { nullable: true })
], WhatsappQueueScalarWhereWithAggregatesInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => IntWithAggregatesFilter, { nullable: true })
], WhatsappQueueScalarWhereWithAggregatesInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeWithAggregatesFilter, { nullable: true })
], WhatsappQueueScalarWhereWithAggregatesInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => EnumQueueStatusWithAggregatesFilter, { nullable: true })
], WhatsappQueueScalarWhereWithAggregatesInput.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringWithAggregatesFilter, { nullable: true })
], WhatsappQueueScalarWhereWithAggregatesInput.prototype, "guestId", void 0);
WhatsappQueueScalarWhereWithAggregatesInput = WhatsappQueueScalarWhereWithAggregatesInput_1 = __decorate([
    (0, graphql_5.InputType)()
], WhatsappQueueScalarWhereWithAggregatesInput);
exports.WhatsappQueueScalarWhereWithAggregatesInput = WhatsappQueueScalarWhereWithAggregatesInput;
let WhatsappQueueScalarWhereInput = WhatsappQueueScalarWhereInput_1 = class WhatsappQueueScalarWhereInput {
};
__decorate([
    (0, graphql_1.Field)(() => [WhatsappQueueScalarWhereInput_1], { nullable: true })
], WhatsappQueueScalarWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [WhatsappQueueScalarWhereInput_1], { nullable: true })
], WhatsappQueueScalarWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [WhatsappQueueScalarWhereInput_1], { nullable: true })
], WhatsappQueueScalarWhereInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => IntFilter, { nullable: true })
], WhatsappQueueScalarWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFilter, { nullable: true })
], WhatsappQueueScalarWhereInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => EnumQueueStatusFilter, { nullable: true })
], WhatsappQueueScalarWhereInput.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFilter, { nullable: true })
], WhatsappQueueScalarWhereInput.prototype, "guestId", void 0);
WhatsappQueueScalarWhereInput = WhatsappQueueScalarWhereInput_1 = __decorate([
    (0, graphql_5.InputType)()
], WhatsappQueueScalarWhereInput);
exports.WhatsappQueueScalarWhereInput = WhatsappQueueScalarWhereInput;
let WhatsappQueueSumAggregateInput = class WhatsappQueueSumAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], WhatsappQueueSumAggregateInput.prototype, "id", void 0);
WhatsappQueueSumAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], WhatsappQueueSumAggregateInput);
exports.WhatsappQueueSumAggregateInput = WhatsappQueueSumAggregateInput;
let WhatsappQueueSumAggregate = class WhatsappQueueSumAggregate {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], WhatsappQueueSumAggregate.prototype, "id", void 0);
WhatsappQueueSumAggregate = __decorate([
    (0, graphql_2.ObjectType)()
], WhatsappQueueSumAggregate);
exports.WhatsappQueueSumAggregate = WhatsappQueueSumAggregate;
let WhatsappQueueSumOrderByAggregateInput = class WhatsappQueueSumOrderByAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], WhatsappQueueSumOrderByAggregateInput.prototype, "id", void 0);
WhatsappQueueSumOrderByAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], WhatsappQueueSumOrderByAggregateInput);
exports.WhatsappQueueSumOrderByAggregateInput = WhatsappQueueSumOrderByAggregateInput;
let WhatsappQueueUncheckedCreateNestedManyWithoutGuestInput = class WhatsappQueueUncheckedCreateNestedManyWithoutGuestInput {
};
__decorate([
    (0, graphql_1.Field)(() => [WhatsappQueueCreateWithoutGuestInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => WhatsappQueueCreateWithoutGuestInput)
], WhatsappQueueUncheckedCreateNestedManyWithoutGuestInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [WhatsappQueueCreateOrConnectWithoutGuestInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => WhatsappQueueCreateOrConnectWithoutGuestInput)
], WhatsappQueueUncheckedCreateNestedManyWithoutGuestInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => WhatsappQueueCreateManyGuestInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => WhatsappQueueCreateManyGuestInputEnvelope)
], WhatsappQueueUncheckedCreateNestedManyWithoutGuestInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [WhatsappQueueWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => WhatsappQueueWhereUniqueInput)
], WhatsappQueueUncheckedCreateNestedManyWithoutGuestInput.prototype, "connect", void 0);
WhatsappQueueUncheckedCreateNestedManyWithoutGuestInput = __decorate([
    (0, graphql_5.InputType)()
], WhatsappQueueUncheckedCreateNestedManyWithoutGuestInput);
exports.WhatsappQueueUncheckedCreateNestedManyWithoutGuestInput = WhatsappQueueUncheckedCreateNestedManyWithoutGuestInput;
let WhatsappQueueUncheckedCreateWithoutGuestInput = class WhatsappQueueUncheckedCreateWithoutGuestInput {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], WhatsappQueueUncheckedCreateWithoutGuestInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], WhatsappQueueUncheckedCreateWithoutGuestInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => QueueStatus, { nullable: true })
], WhatsappQueueUncheckedCreateWithoutGuestInput.prototype, "status", void 0);
WhatsappQueueUncheckedCreateWithoutGuestInput = __decorate([
    (0, graphql_5.InputType)()
], WhatsappQueueUncheckedCreateWithoutGuestInput);
exports.WhatsappQueueUncheckedCreateWithoutGuestInput = WhatsappQueueUncheckedCreateWithoutGuestInput;
let WhatsappQueueUncheckedCreateInput = class WhatsappQueueUncheckedCreateInput {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], WhatsappQueueUncheckedCreateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], WhatsappQueueUncheckedCreateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => QueueStatus, { nullable: true })
], WhatsappQueueUncheckedCreateInput.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], WhatsappQueueUncheckedCreateInput.prototype, "guestId", void 0);
WhatsappQueueUncheckedCreateInput = __decorate([
    (0, graphql_5.InputType)()
], WhatsappQueueUncheckedCreateInput);
exports.WhatsappQueueUncheckedCreateInput = WhatsappQueueUncheckedCreateInput;
let WhatsappQueueUncheckedUpdateManyWithoutGuestNestedInput = class WhatsappQueueUncheckedUpdateManyWithoutGuestNestedInput {
};
__decorate([
    (0, graphql_1.Field)(() => [WhatsappQueueCreateWithoutGuestInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => WhatsappQueueCreateWithoutGuestInput)
], WhatsappQueueUncheckedUpdateManyWithoutGuestNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [WhatsappQueueCreateOrConnectWithoutGuestInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => WhatsappQueueCreateOrConnectWithoutGuestInput)
], WhatsappQueueUncheckedUpdateManyWithoutGuestNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => [WhatsappQueueUpsertWithWhereUniqueWithoutGuestInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => WhatsappQueueUpsertWithWhereUniqueWithoutGuestInput)
], WhatsappQueueUncheckedUpdateManyWithoutGuestNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => WhatsappQueueCreateManyGuestInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => WhatsappQueueCreateManyGuestInputEnvelope)
], WhatsappQueueUncheckedUpdateManyWithoutGuestNestedInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [WhatsappQueueWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => WhatsappQueueWhereUniqueInput)
], WhatsappQueueUncheckedUpdateManyWithoutGuestNestedInput.prototype, "set", void 0);
__decorate([
    (0, graphql_1.Field)(() => [WhatsappQueueWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => WhatsappQueueWhereUniqueInput)
], WhatsappQueueUncheckedUpdateManyWithoutGuestNestedInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [WhatsappQueueWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => WhatsappQueueWhereUniqueInput)
], WhatsappQueueUncheckedUpdateManyWithoutGuestNestedInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => [WhatsappQueueWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => WhatsappQueueWhereUniqueInput)
], WhatsappQueueUncheckedUpdateManyWithoutGuestNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [WhatsappQueueUpdateWithWhereUniqueWithoutGuestInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => WhatsappQueueUpdateWithWhereUniqueWithoutGuestInput)
], WhatsappQueueUncheckedUpdateManyWithoutGuestNestedInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => [WhatsappQueueUpdateManyWithWhereWithoutGuestInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => WhatsappQueueUpdateManyWithWhereWithoutGuestInput)
], WhatsappQueueUncheckedUpdateManyWithoutGuestNestedInput.prototype, "updateMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [WhatsappQueueScalarWhereInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => WhatsappQueueScalarWhereInput)
], WhatsappQueueUncheckedUpdateManyWithoutGuestNestedInput.prototype, "deleteMany", void 0);
WhatsappQueueUncheckedUpdateManyWithoutGuestNestedInput = __decorate([
    (0, graphql_5.InputType)()
], WhatsappQueueUncheckedUpdateManyWithoutGuestNestedInput);
exports.WhatsappQueueUncheckedUpdateManyWithoutGuestNestedInput = WhatsappQueueUncheckedUpdateManyWithoutGuestNestedInput;
let WhatsappQueueUncheckedUpdateManyWithoutGuestInput = class WhatsappQueueUncheckedUpdateManyWithoutGuestInput {
};
__decorate([
    (0, graphql_1.Field)(() => IntFieldUpdateOperationsInput, { nullable: true })
], WhatsappQueueUncheckedUpdateManyWithoutGuestInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], WhatsappQueueUncheckedUpdateManyWithoutGuestInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => EnumQueueStatusFieldUpdateOperationsInput, { nullable: true })
], WhatsappQueueUncheckedUpdateManyWithoutGuestInput.prototype, "status", void 0);
WhatsappQueueUncheckedUpdateManyWithoutGuestInput = __decorate([
    (0, graphql_5.InputType)()
], WhatsappQueueUncheckedUpdateManyWithoutGuestInput);
exports.WhatsappQueueUncheckedUpdateManyWithoutGuestInput = WhatsappQueueUncheckedUpdateManyWithoutGuestInput;
let WhatsappQueueUncheckedUpdateManyInput = class WhatsappQueueUncheckedUpdateManyInput {
};
__decorate([
    (0, graphql_1.Field)(() => IntFieldUpdateOperationsInput, { nullable: true })
], WhatsappQueueUncheckedUpdateManyInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], WhatsappQueueUncheckedUpdateManyInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => EnumQueueStatusFieldUpdateOperationsInput, { nullable: true })
], WhatsappQueueUncheckedUpdateManyInput.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], WhatsappQueueUncheckedUpdateManyInput.prototype, "guestId", void 0);
WhatsappQueueUncheckedUpdateManyInput = __decorate([
    (0, graphql_5.InputType)()
], WhatsappQueueUncheckedUpdateManyInput);
exports.WhatsappQueueUncheckedUpdateManyInput = WhatsappQueueUncheckedUpdateManyInput;
let WhatsappQueueUncheckedUpdateWithoutGuestInput = class WhatsappQueueUncheckedUpdateWithoutGuestInput {
};
__decorate([
    (0, graphql_1.Field)(() => IntFieldUpdateOperationsInput, { nullable: true })
], WhatsappQueueUncheckedUpdateWithoutGuestInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], WhatsappQueueUncheckedUpdateWithoutGuestInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => EnumQueueStatusFieldUpdateOperationsInput, { nullable: true })
], WhatsappQueueUncheckedUpdateWithoutGuestInput.prototype, "status", void 0);
WhatsappQueueUncheckedUpdateWithoutGuestInput = __decorate([
    (0, graphql_5.InputType)()
], WhatsappQueueUncheckedUpdateWithoutGuestInput);
exports.WhatsappQueueUncheckedUpdateWithoutGuestInput = WhatsappQueueUncheckedUpdateWithoutGuestInput;
let WhatsappQueueUncheckedUpdateInput = class WhatsappQueueUncheckedUpdateInput {
};
__decorate([
    (0, graphql_1.Field)(() => IntFieldUpdateOperationsInput, { nullable: true })
], WhatsappQueueUncheckedUpdateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], WhatsappQueueUncheckedUpdateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => EnumQueueStatusFieldUpdateOperationsInput, { nullable: true })
], WhatsappQueueUncheckedUpdateInput.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], WhatsappQueueUncheckedUpdateInput.prototype, "guestId", void 0);
WhatsappQueueUncheckedUpdateInput = __decorate([
    (0, graphql_5.InputType)()
], WhatsappQueueUncheckedUpdateInput);
exports.WhatsappQueueUncheckedUpdateInput = WhatsappQueueUncheckedUpdateInput;
let WhatsappQueueUpdateManyMutationInput = class WhatsappQueueUpdateManyMutationInput {
};
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], WhatsappQueueUpdateManyMutationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => EnumQueueStatusFieldUpdateOperationsInput, { nullable: true })
], WhatsappQueueUpdateManyMutationInput.prototype, "status", void 0);
WhatsappQueueUpdateManyMutationInput = __decorate([
    (0, graphql_5.InputType)()
], WhatsappQueueUpdateManyMutationInput);
exports.WhatsappQueueUpdateManyMutationInput = WhatsappQueueUpdateManyMutationInput;
let WhatsappQueueUpdateManyWithWhereWithoutGuestInput = class WhatsappQueueUpdateManyWithWhereWithoutGuestInput {
};
__decorate([
    (0, graphql_1.Field)(() => WhatsappQueueScalarWhereInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => WhatsappQueueScalarWhereInput)
], WhatsappQueueUpdateManyWithWhereWithoutGuestInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => WhatsappQueueUpdateManyMutationInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => WhatsappQueueUpdateManyMutationInput)
], WhatsappQueueUpdateManyWithWhereWithoutGuestInput.prototype, "data", void 0);
WhatsappQueueUpdateManyWithWhereWithoutGuestInput = __decorate([
    (0, graphql_5.InputType)()
], WhatsappQueueUpdateManyWithWhereWithoutGuestInput);
exports.WhatsappQueueUpdateManyWithWhereWithoutGuestInput = WhatsappQueueUpdateManyWithWhereWithoutGuestInput;
let WhatsappQueueUpdateManyWithoutGuestNestedInput = class WhatsappQueueUpdateManyWithoutGuestNestedInput {
};
__decorate([
    (0, graphql_1.Field)(() => [WhatsappQueueCreateWithoutGuestInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => WhatsappQueueCreateWithoutGuestInput)
], WhatsappQueueUpdateManyWithoutGuestNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [WhatsappQueueCreateOrConnectWithoutGuestInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => WhatsappQueueCreateOrConnectWithoutGuestInput)
], WhatsappQueueUpdateManyWithoutGuestNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => [WhatsappQueueUpsertWithWhereUniqueWithoutGuestInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => WhatsappQueueUpsertWithWhereUniqueWithoutGuestInput)
], WhatsappQueueUpdateManyWithoutGuestNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => WhatsappQueueCreateManyGuestInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => WhatsappQueueCreateManyGuestInputEnvelope)
], WhatsappQueueUpdateManyWithoutGuestNestedInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [WhatsappQueueWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => WhatsappQueueWhereUniqueInput)
], WhatsappQueueUpdateManyWithoutGuestNestedInput.prototype, "set", void 0);
__decorate([
    (0, graphql_1.Field)(() => [WhatsappQueueWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => WhatsappQueueWhereUniqueInput)
], WhatsappQueueUpdateManyWithoutGuestNestedInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [WhatsappQueueWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => WhatsappQueueWhereUniqueInput)
], WhatsappQueueUpdateManyWithoutGuestNestedInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => [WhatsappQueueWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => WhatsappQueueWhereUniqueInput)
], WhatsappQueueUpdateManyWithoutGuestNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [WhatsappQueueUpdateWithWhereUniqueWithoutGuestInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => WhatsappQueueUpdateWithWhereUniqueWithoutGuestInput)
], WhatsappQueueUpdateManyWithoutGuestNestedInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => [WhatsappQueueUpdateManyWithWhereWithoutGuestInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => WhatsappQueueUpdateManyWithWhereWithoutGuestInput)
], WhatsappQueueUpdateManyWithoutGuestNestedInput.prototype, "updateMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [WhatsappQueueScalarWhereInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => WhatsappQueueScalarWhereInput)
], WhatsappQueueUpdateManyWithoutGuestNestedInput.prototype, "deleteMany", void 0);
WhatsappQueueUpdateManyWithoutGuestNestedInput = __decorate([
    (0, graphql_5.InputType)()
], WhatsappQueueUpdateManyWithoutGuestNestedInput);
exports.WhatsappQueueUpdateManyWithoutGuestNestedInput = WhatsappQueueUpdateManyWithoutGuestNestedInput;
let WhatsappQueueUpdateWithWhereUniqueWithoutGuestInput = class WhatsappQueueUpdateWithWhereUniqueWithoutGuestInput {
};
__decorate([
    (0, graphql_1.Field)(() => WhatsappQueueWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => WhatsappQueueWhereUniqueInput)
], WhatsappQueueUpdateWithWhereUniqueWithoutGuestInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => WhatsappQueueUpdateWithoutGuestInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => WhatsappQueueUpdateWithoutGuestInput)
], WhatsappQueueUpdateWithWhereUniqueWithoutGuestInput.prototype, "data", void 0);
WhatsappQueueUpdateWithWhereUniqueWithoutGuestInput = __decorate([
    (0, graphql_5.InputType)()
], WhatsappQueueUpdateWithWhereUniqueWithoutGuestInput);
exports.WhatsappQueueUpdateWithWhereUniqueWithoutGuestInput = WhatsappQueueUpdateWithWhereUniqueWithoutGuestInput;
let WhatsappQueueUpdateWithoutGuestInput = class WhatsappQueueUpdateWithoutGuestInput {
};
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], WhatsappQueueUpdateWithoutGuestInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => EnumQueueStatusFieldUpdateOperationsInput, { nullable: true })
], WhatsappQueueUpdateWithoutGuestInput.prototype, "status", void 0);
WhatsappQueueUpdateWithoutGuestInput = __decorate([
    (0, graphql_5.InputType)()
], WhatsappQueueUpdateWithoutGuestInput);
exports.WhatsappQueueUpdateWithoutGuestInput = WhatsappQueueUpdateWithoutGuestInput;
let WhatsappQueueUpdateInput = class WhatsappQueueUpdateInput {
};
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], WhatsappQueueUpdateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => EnumQueueStatusFieldUpdateOperationsInput, { nullable: true })
], WhatsappQueueUpdateInput.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestUpdateOneRequiredWithoutWhatsappQueueNestedInput, { nullable: true })
], WhatsappQueueUpdateInput.prototype, "guest", void 0);
WhatsappQueueUpdateInput = __decorate([
    (0, graphql_5.InputType)()
], WhatsappQueueUpdateInput);
exports.WhatsappQueueUpdateInput = WhatsappQueueUpdateInput;
let WhatsappQueueUpsertWithWhereUniqueWithoutGuestInput = class WhatsappQueueUpsertWithWhereUniqueWithoutGuestInput {
};
__decorate([
    (0, graphql_1.Field)(() => WhatsappQueueWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => WhatsappQueueWhereUniqueInput)
], WhatsappQueueUpsertWithWhereUniqueWithoutGuestInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => WhatsappQueueUpdateWithoutGuestInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => WhatsappQueueUpdateWithoutGuestInput)
], WhatsappQueueUpsertWithWhereUniqueWithoutGuestInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => WhatsappQueueCreateWithoutGuestInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => WhatsappQueueCreateWithoutGuestInput)
], WhatsappQueueUpsertWithWhereUniqueWithoutGuestInput.prototype, "create", void 0);
WhatsappQueueUpsertWithWhereUniqueWithoutGuestInput = __decorate([
    (0, graphql_5.InputType)()
], WhatsappQueueUpsertWithWhereUniqueWithoutGuestInput);
exports.WhatsappQueueUpsertWithWhereUniqueWithoutGuestInput = WhatsappQueueUpsertWithWhereUniqueWithoutGuestInput;
let WhatsappQueueWhereUniqueInput = class WhatsappQueueWhereUniqueInput {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], WhatsappQueueWhereUniqueInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => [WhatsappQueueWhereInput], { nullable: true })
], WhatsappQueueWhereUniqueInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [WhatsappQueueWhereInput], { nullable: true })
], WhatsappQueueWhereUniqueInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [WhatsappQueueWhereInput], { nullable: true })
], WhatsappQueueWhereUniqueInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFilter, { nullable: true })
], WhatsappQueueWhereUniqueInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => EnumQueueStatusFilter, { nullable: true })
], WhatsappQueueWhereUniqueInput.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFilter, { nullable: true })
], WhatsappQueueWhereUniqueInput.prototype, "guestId", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestRelationFilter, { nullable: true })
], WhatsappQueueWhereUniqueInput.prototype, "guest", void 0);
WhatsappQueueWhereUniqueInput = __decorate([
    (0, graphql_5.InputType)()
], WhatsappQueueWhereUniqueInput);
exports.WhatsappQueueWhereUniqueInput = WhatsappQueueWhereUniqueInput;
let WhatsappQueueWhereInput = WhatsappQueueWhereInput_1 = class WhatsappQueueWhereInput {
};
__decorate([
    (0, graphql_1.Field)(() => [WhatsappQueueWhereInput_1], { nullable: true })
], WhatsappQueueWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [WhatsappQueueWhereInput_1], { nullable: true })
], WhatsappQueueWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [WhatsappQueueWhereInput_1], { nullable: true })
], WhatsappQueueWhereInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => IntFilter, { nullable: true })
], WhatsappQueueWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFilter, { nullable: true })
], WhatsappQueueWhereInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => EnumQueueStatusFilter, { nullable: true })
], WhatsappQueueWhereInput.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFilter, { nullable: true })
], WhatsappQueueWhereInput.prototype, "guestId", void 0);
__decorate([
    (0, graphql_1.Field)(() => GuestRelationFilter, { nullable: true })
], WhatsappQueueWhereInput.prototype, "guest", void 0);
WhatsappQueueWhereInput = WhatsappQueueWhereInput_1 = __decorate([
    (0, graphql_5.InputType)()
], WhatsappQueueWhereInput);
exports.WhatsappQueueWhereInput = WhatsappQueueWhereInput;
let WhatsappQueue = class WhatsappQueue {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], WhatsappQueue.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], WhatsappQueue.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => QueueStatus, { nullable: false, defaultValue: 'WAITING' })
], WhatsappQueue.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], WhatsappQueue.prototype, "guestId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Guest, { nullable: false })
], WhatsappQueue.prototype, "guest", void 0);
WhatsappQueue = __decorate([
    (0, graphql_2.ObjectType)()
], WhatsappQueue);
exports.WhatsappQueue = WhatsappQueue;
//# sourceMappingURL=index.js.map
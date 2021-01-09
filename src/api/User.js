import { post, get } from "./api.config";

const baseUrl = "/User";

export function apiGetCaptchCode(data) {
    return get(baseUrl + "/GetCaptchCode", data);
}
export function apiLogin(data) {
    return post(baseUrl + "/Login", data);
}
export function apiRegister(data) {
    return post(baseUrl + "/Register", data);
}
export function apiGetSMSCode(data) {
    return get(baseUrl + "/GetSMSCode", data);
}
export function apiPhoneNumberBindInvitationCode(data) {
    return get(baseUrl + "/PhoneNumberBindInvitationCode", data);
}
export function apiRefreshToken(data, needAuth) {
    return get(baseUrl + "/RefreshToken", data, needAuth);
}
export function apiResetPasswordByPhoneNumber(data) {
    return post(baseUrl + "/ResetPasswordByPhoneNumber", data);
}
export function apiGetUserInfo(data, needAuth) {
    return get(baseUrl + "/GetUserInfo", data, needAuth);
}
export function apiUpdateUserInfo(data, needAuth) {
    return get(baseUrl + "/UpdateUserInfo", data, needAuth);
}

//上传头像
export function apiUploadImg(data, needAuth) {
    return get(baseUrl + "/UploadImg", data, needAuth);
}

//签到
export function apiSign(data, needAuth) {
    return get(baseUrl + "/Sign", data, needAuth);
}
export function apiCheckSign(data, needAuth) {
    return get(baseUrl + "/CheckSign", data, needAuth);
}

export function apiUserUseInvitationCode(data, needAuth) {
    return get(baseUrl + "/UserUseInvitationCode", data, needAuth);
}

//修改密码
export function apiChangePwd(data, needAuth) {
    return post(baseUrl + "/ChangePwd", data, needAuth);
}

export function apiGetUserAddress(data, needAuth) {
    return post(baseUrl + "/GetUserAddress", data, needAuth);
}

export function apiAddEditMemAddress(data, needAuth) {
    return post(baseUrl + "/AddEditMemAddress", data, needAuth);
}

export function apiGetJobRecord(data, needAuth) {
    return post(baseUrl + "/GetJobRecord", data, needAuth);
}

export function apiDelMemAddress(data, needAuth) {
    return get(baseUrl + "/DelMemAddress", data, needAuth);
}

export function apiCheckVipGrade(data, needAuth) {
    return get(baseUrl + '/CheckVipGrade', data, needAuth);
}

export function apiGetVipImgHeads(data, needAuth) {
    return post(baseUrl + '/GetVipImgHeads', data, needAuth)
}
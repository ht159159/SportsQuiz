import { post, get } from "./api.config";
const baseUrl = "/Club";

export function apiIsSatisfyMemApplyClub(data, needAuth) {
  return get(baseUrl + "/IsSatisfyMemApplyClub", data, needAuth);
}

export function apiGetClubs(data, needAuth) {
  return get(baseUrl + "/GetClubs", data, needAuth);
}

//上传俱樂部LOGO
export function apiClubUpload(data, needAuth) {
  return post(baseUrl + "/ClubUpload", data, needAuth);
}

//創建俱樂部
export function apiMemApplyClub(data, needAuth) {
  return post(baseUrl + "/MemApplyClub", data, needAuth);
}

//我的權限
export function apiGetClubDetail(data, needAuth) {
  return get(baseUrl + "/GetClubDetail", data, needAuth);
}

//获取广告基础配置
export function apiGetClubAdBaseConfing(data, needAuth) {
  return get(baseUrl + "/GetClubAdBaseConfing", data, needAuth);
}

//提交俱乐部广告申请
export function apiSubmitClubAd(data, needAuth) {
  return post(baseUrl + "/SubmitClubAd", data, needAuth);
}

//俱樂部團隊紅利
export function apiGetClubTeamBonus(data, needAuth) {
  return get(baseUrl + "/GetClubTeamBonus", data, needAuth);
}

// 获取我的俱乐部信息
export function apiGetMyClub(data, needAuth) {
  return get(baseUrl + "/GetMyClub", data, needAuth);
}

// 获取俱乐部会员信息
export function apiGetMemClubs(data, needAuth) {
  return get(baseUrl + "/GetMemClubs", data, needAuth);
}

// 获取成员管理数据
export function apiGetMyClubManagement(data, needAuth) {
  return get(baseUrl + "/GetMyClubManagement", data, needAuth);
}

// 提交加入俱乐部申请
export function apiJoinClub(data, needAuth) {
  return post(baseUrl + "/JoinClub", data, needAuth);
}

// 审核会员，踢人操作
export function apiAuditClubMem(data, needAuth) {
  return post(baseUrl + "/AuditClubMem", data, needAuth);
}

// 获取俱乐部詳細数据
export function apiGetClubRecord(data, needAuth) {
  return get(baseUrl + "/GetClubRecord", data, needAuth);
}

// 获取当前用户可以分配的角色列表
export function apiGetClubRole(data, needAuth) {
  return get(baseUrl + "/GetClubRole", data, needAuth);
}

// 分配修改用户权限
export function apiModifyClubRole(data, needAuth) {
  return post(baseUrl + "/ModifyClubRole", data, needAuth);
}

// 根据条件获取俱乐部
export function apiGetAllClubs(data, needAuth) {
  return get(baseUrl + "/GetAllClubs", data, needAuth);
}

// 获取俱乐部公告
export function apiGetClubAnnouncement(data, needAuth) {
  return get(baseUrl + "/GetClubAnnouncement", data, needAuth);
}

// 添加修改公告
export function apiAddOrUpClubAnnouncement(data, needAuth) {
  return post(baseUrl + "/AddOrUpClubAnnouncement", data, needAuth);
}

// 获取創建俱樂部價錢
export function apiGetClubBaseDataConfing(data, needAuth) {
  return get(baseUrl + "/GetClubBaseDataConfing", data, needAuth);
}

// 退出俱樂部
export function apiExitClub(data, needAuth) {
  return get(baseUrl + "/ExitClub", data, needAuth);
}

// 获取俱乐部成员日志
export function apiGetClubMemLog(data, needAuth) {
  return get(baseUrl + "/GetClubMemLog", data, needAuth);
}

// 金流日誌-获取類別選單
export function apiGetMemLogTypes (data, needAuth) {
  return get(baseUrl + "/GetMemLogTypes", data, needAuth);
}

// 金流日誌-根据ID篩選後的結果
export function apiGetMemFundLogs (data, needAuth) {
  return get(baseUrl + "/GetMemFundLogs", data, needAuth);
}

// 获取紅利清單
export function apiGetClubBonusRpt(data, needAuth) {
  return get(baseUrl + "/GetClubBonusRpt", data, needAuth);
}

// 紅利提取
export function apiReceiveBonus(data, needAuth) {
  return get(baseUrl + "/ReceiveBonus", data, needAuth);
}
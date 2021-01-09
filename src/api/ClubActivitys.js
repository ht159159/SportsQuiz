import { post, get } from "./api.config";
const baseUrl = "/ClubActivitys";

// 新增俱乐部活动時，取得聯賽資料
export function apiGetClubActivityMatchInfo(data, needAuth) {
  return get(baseUrl + "/GetClubActivityMatchInfo", data, needAuth);
}

//新增俱乐部活动-發布
export function apiAddClubActivity(data, needAuth) {
  return post(baseUrl + "/AddClubActivity", data, needAuth);
}

// 購買活動門票
export function apiBuyClubActivityTicket(data, needAuth) {
  return get(baseUrl + "/BuyClubActivityTicket", data, needAuth);
}

// 獲取賽事及玩法
export function apiGetClubActivityMatchAndPlay(data, needAuth) {
  return get(baseUrl + "/GetClubActivityMatchAndPlay", data, needAuth);
}

// 下注接口
export function apiActivityBets(data, needAuth) {
  return post(baseUrl + "/ActivityBets", data, needAuth);
}

// 獲取賽果列表
export function apiGetClubActivityMatchResult(data, needAuth) {
  return get(baseUrl + "/GetClubActivityMatchResult", data, needAuth);
}

// 獲取賽果詳細資料
export function apiGetActivityBetResult(data, needAuth) {
  return get(baseUrl + "/GetActivityBetResult", data, needAuth);
}

// 刪除
export function apiUpdateClubActivityStatus(data, needAuth) {
  return post(baseUrl + "/UpdateClubActivityStatus", data, needAuth);
}

// 獲取活動列表
export function apiGetClubActivityList(data, needAuth) {
  return get(baseUrl + "/GetClubActivityList", data, needAuth);
}

// 獲取俱樂部聯賽資料
export function apiGetClubMatchs(data, needAuth) {
  return get(baseUrl + "/GetClubMatchs", data, needAuth);
}
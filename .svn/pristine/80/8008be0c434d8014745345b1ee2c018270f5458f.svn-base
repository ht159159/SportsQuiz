import { post, get } from "./api.config";
const baseUrl = "/ClubGamblings";

// 取得發起活動的賽事資訊
export function apiGetClubGamblingMatchInfo(data, needAuth) {
  return get(baseUrl + "/GetClubGamblingMatchInfo", data, needAuth);
}

// 發起下注活動
export function apiAddClubGambling(data, needAuth) {
  return post(baseUrl + "/AddClubGambling", data, needAuth);
}

// 取得俱樂部投注列表
export function apiGetClubGamblingList(data, needAuth) {
  return get(baseUrl + "/GetClubGamblingList", data, needAuth);
}

// 取得發起人賽果
export function apiGetMyClubGamblingBetResultList(data, needAuth) {
  return get(baseUrl + "/GetMyClubGamblingBetResultList", data, needAuth);
}

// 取得賽果
export function apiGetClubGamblingBetResultList(data, needAuth) {
  return get(baseUrl + "/GetClubGamblingBetResultList", data, needAuth);
}

// 取得單一賽果
export function apiGetClubGamblingBetResult(data, needAuth) {
  return get(baseUrl + "/GetClubGamblingBetResult", data, needAuth);
}

// 投注頁面資料
export function apiGetClubGamblingBetInfo(data, needAuth) {
  return get(baseUrl + "/GetClubGamblingBetInfo", data, needAuth);
}

// 投注
export function apiClubGamblingBet(data, needAuth) {
  return post(baseUrl + "/ClubGamblingBet", data, needAuth);
}

// 刪除
export function apiUpdateClubGamblingsStatus(data, needAuth) {
  return post(baseUrl + "/UpdateClubGamblingsStatus", data, needAuth);
}
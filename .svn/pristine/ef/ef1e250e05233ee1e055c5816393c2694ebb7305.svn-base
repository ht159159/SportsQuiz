import { post, get } from "./api.config";
const baseUrl = "/Product";

export function apiGetCategoryRecord() {
  return post(baseUrl + "/GetCategoryRecord");
}

export function apiGetGoodsRecordList(data) {
  return get(baseUrl + "/GetGoodsRecordList", data);
}

export function apiAddCashInformation(data, needAuth) {
  return post(baseUrl + "/AddCashInformation", data, needAuth);
}

export function apiGetCashInformation(data, needAuth) {
  return get(baseUrl + "/GetCashInformation", data, needAuth);
}
export function apiLuckDraw(data, needAuth) {
  return post(baseUrl + "/LuckDraw", data, needAuth);
}

export function apiGetPrizePoolSetting(data, needAuth) {
  return get(baseUrl + "/GetPrizePoolSetting", data, needAuth);
}

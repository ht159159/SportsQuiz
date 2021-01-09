import { post, get } from "./api.config";
const baseUrl = "/FlowAd";

// 根据触发类型取得流量广告
export function apiGetFlowAdByType(data, needAuth) {
  return get(baseUrl + "/GetFlowAdByType", data, needAuth);
}

//满足观看时间后发放金币
export function apiWatchedFlowAd(data, needAuth) {
  return post(baseUrl + "/WatchedFlowAd", data, needAuth);
}
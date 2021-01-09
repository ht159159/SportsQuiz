import { post, get } from "./api.config";
const baseUrl = "/Recharge";

export function apiGetRechargeInfo(data, needAuth) {
    return get(baseUrl + "/GetRechargeInfo", data, needAuth);
  }
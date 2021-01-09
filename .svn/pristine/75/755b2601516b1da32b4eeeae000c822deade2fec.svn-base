import { post, get } from "./api.config";
const baseUrl = "/ListType";

export function apiGetListTypeList(data) {
  return get(baseUrl + "/GetListTypeList", data);
}

export function apiGetListTypeListAndUserRank(data, needAuth) {
  return get(baseUrl + "/GetListTypeListAndUserRank", data, needAuth);
}

export function apiGetListByListTypeId(data, needAuth) {
  return get(baseUrl + "/GetListByListTypeId", data, needAuth);
}

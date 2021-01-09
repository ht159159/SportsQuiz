import { post, get } from "./api.config";
const baseUrl = "/News";

export function apiGetNewsList(data, needAuth) {
    return get(baseUrl + '/GetNewsList', data, needAuth)
}

export function apiGetNewsDetailsList(data, needAuth) {
    return get(baseUrl + '/GetNewsDetailsList', data, needAuth)
}

export function apiReadNewsRecord(data, needAuth) {
    return post(baseUrl + '/ReadNewsRecord', data, needAuth)
}

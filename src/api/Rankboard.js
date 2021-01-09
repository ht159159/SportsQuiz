import { post, get } from "./api.config";
const baseUrl = "/Ranking";

export function apiGetBetAmount(data, needAuth) {
    return get(baseUrl + "/GetBetAmount", data, needAuth);
}

export function apiGetWinCount(data, needAuth) {
    return get(baseUrl + "/GetWinCount", data, needAuth);
}

export function apiGetWinAmount(data, needAuth) {
    return get(baseUrl + "/GetWinAmount", data, needAuth);
}

export function apiGetRankingMedal(data, needAuth) {
    return get(baseUrl + "/GetRankingMedal", data, needAuth);
}

export function apiGetMemberRankingInfo(data, needAuth) {
    return get(baseUrl + "/GetMemberRankingInfo", data, needAuth);
}
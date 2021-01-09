import { post, get } from "./api.config";

const baseUrl = "/Mission";

// 获取资讯列表
export function apiGetMissionList(data, needAuth) {
    return get(baseUrl + "/GetMissionList", data, needAuth);
}

// 添加任务
export function apiAddMission(data, needAuth) {
    return post(baseUrl + "/AddMission", data, needAuth);
}

// 领取奖励
export function apiReceiveMissionReward(data, needAuth) {
    return post(baseUrl + "/ReceiveMissionReward", data, needAuth);
}

// 未领取奖励數量
export function apiGetMissionUnGet(data, needAuth) {
    return get(baseUrl + "/GetMissionUnGet", data, needAuth);
}
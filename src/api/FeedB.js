import { post, get } from "./api.config";
const baseUrl = "/Feedback";
export function apiAddFeedback(data, need) {
    return post(baseUrl + "/AddFeedback", data, need);
  }
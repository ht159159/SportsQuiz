import { post, get } from './api.config';

const baseUrl = '/Message';

export function apiGetUnreadMessageCount(data,needAuth) {
    return get(baseUrl + '/GetUnreadMessageCount', data, needAuth)
}
export function apiSetMessageRead(data,needAuth) {
    return get(baseUrl + '/SetMessageRead', data, needAuth)
}
export function apiGetMessageList(data, needAuth) {
    return get(baseUrl + '/GetMessageList', data, needAuth)
}



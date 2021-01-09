import { post, get } from "./api.config";
const baseUrl = "/Questionnaire";

// // 获问卷调查列表
// export function apiGetQuestionnaireList(data,needAuth) {
//     return get(baseUrl + "/GetQuestionnaireList", data,needAuth);
// }

// // 根据问卷Id获取问题
// export function apiGetQuestionnaireQuestionList(data,needAuth) {
//     return get(baseUrl + "/GetQuestionnaireQuestionList", data,needAuth);
// }

// // 根据问题Id获取答案
// export function apiGetQuestionnaireAnswerList(data,needAuth) {
//     return get(baseUrl + "/GetQuestionnaireAnswerList", data,needAuth);
// }

// // 添加问卷反馈
export function apiAddQuestionnaireFeedback(data,needAuth) {
    return post(baseUrl + "/AddQuestionnaireFeedback", data,needAuth);
}

//  获问卷信息
export function apiGetQuestionnaireAndQAList( data, needAuth) {
    return get(baseUrl + "/GetQuestionnaireAndQAList", data, needAuth);
}

// 登入是否跳出问卷调查
// export function apiIsShowQuestionnaire(data,needAuth) {
//     return post(baseUrl + "/IsShowQuestionnaire", data,needAuth);
// }



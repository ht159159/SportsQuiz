//match请求
import {
    apiGetMatchTypes,
    apiGetMatchs,
    apiGetMatch,
    apiGetMatchItemAndMainPlay,
    apiGetHistoryMatchList,
    apiGetMatchItemAndSpecialPlay,
    apiGetChallenge
} from "@/api/match.js";

const match = {
    state: {
        MatchType: [],
        Matchs: [],
        MatchId: "",
        rankmatchlist: [],
        Matchitems: [],
        MatchName: "",
        MatchSpecial: [],
        ChallengeId: 1,
        TotalPages: "",
        time: "",
        lefttab: true,
        righttab: false,
        bgc1: false,
        titlenum: -1,
        loading: false,
        comparisonMatchitems: []
    },
    mutations: {
        uptitlenum(state, payload) {
            state.titlenum = payload.id;
        },
        uptime(state, payload) {
            state.time = payload.slice(0, payload.indexOf("T"));
        },
        upChallengeId(state, payload) {
            state.ChallengeId = payload;
        },
        upMatchitems(state, payload) {
            state.Matchitems = payload;
        },
        upComparisonMatchitems(state, payload) {
            state.comparisonMatchitems = payload;
        },
        upRankmatchlist(state, payload) {
            state.rankmatchlist = payload;
        },
        upMatchType(state, payload) {
            state.MatchType = payload;
        },
        //排位赛赛事
        upMatchId(state, payload) {
            state.MatchId = payload.id;
        },
        //正常赛事 赛事id和赛事名字
        upMatchid(state, payload) {
            state.MatchId = payload.MatchId;
            state.MatchName = payload.MatchName;
        },
        //赛事
        upMatchs(state, payload) {
            state.Matchs = payload.Matchs;
            state.TotalPages = payload.page;
        },
        //特殊赛事
        upMatchSpecial(state, payload) {
            state.MatchSpecial = payload;
        },
        upBoolen(state, payload) {
            state.lefttab = payload.test11;
            state.righttab = payload.test22;
            state.bgc1 = payload.bgc1;
        },
        uploading(state, payload) {
            state.loading = payload;
        }
    },
    actions: {
        asyncChallengeid(context, payload) {
            apiGetChallenge("", true).then(res => {
                context.commit("upChallengeId", res.challengeId);
            });
        },
        asyncgetMatchType(context, payload) {
            apiGetMatchTypes(payload).then(res => {
                context.commit("upMatchType", res.Data);
            });
        },
        asyncgetMatchList(context, payload) {
            apiGetMatchs(payload).then(res => {
                context.commit("upMatchs", {
                    Matchs: res.Data,
                    page: res.TotalPages
                });
            });
        },
        //获取单个赛事
        asyncgetMatch(context, payload) {
            let data = {
                matchId: context.state.MatchId
            };

            apiGetMatch(data).then(res => {});
        },
        //赛事玩法
        async asyncGetMatchplay(context, payload) {
            let data = {
                matchId: context.state.MatchId,
                matchItemType: payload.id,
                index: 1,
                count: 100
            };
            await apiGetMatchItemAndMainPlay(data, true).then(res => {
                // 確認主隊在TeamMatchItemViewModels裡面排在第0個位置，怕後端資料排序不統一，因為HTML那邊是固定抓TeamMatchItemViewModels[1]為主隊
                if(res.Data){
                    let teamAry = res.Data;
                    let ComparisonMatchitems;//比較的資料
                    teamAry.forEach(el => {
                        if (el.TeamMatchItemViewModels[0].IsHome == false) {
                            let newAry =  el.TeamMatchItemViewModels.shift(0);
                            el.TeamMatchItemViewModels.push(newAry)
                        }
                    });
                    if (context.state.Matchitems != []) {

                        // context.commit("upOldMatchitems", context.state.Matchitems);
                        context.commit("upComparisonMatchitems", teamAry);
                        ComparisonMatchitems = context.state.Matchitems;
                        for(let i = 0; ComparisonMatchitems.length > i; i++){
                            for(let j = 0; teamAry.length > j; j++){
                                if(ComparisonMatchitems[i].MatchItemId == teamAry[j].MatchItemId) {
                                        //   console.log(ComparisonMatchitems[i].MatchItemId)
                                    for(let c = 0; ComparisonMatchitems[i].CommonPlayViewModelGroups.length > c; c++) {
                                        for(let cc = 1; ComparisonMatchitems[i].CommonPlayViewModelGroups[c].length > cc; cc++){
                                            //判斷內容是否有一樣，不一樣才開始比較
                                            // console.log(j)
                                            // console.log(c)
                                            // console.log(teamAry)
                                            // console.log(teamAry[j])
                                            // console.log(teamAry[j].CommonPlayViewModelGroups[c])
                                            // console.log(teamAry[j].CommonPlayViewModelGroups[c][2])
                                            // console.log(teamAry[j].CommonPlayViewModelGroups[c][2].PlayId)
                                            // console.log(ComparisonMatchitems[i])
                                            // console.log(ComparisonMatchitems[i].CommonPlayViewModelGroups[c])
                                            // console.log(ComparisonMatchitems[i].CommonPlayViewModelGroups[c][2])
                                            if (teamAry[j].CommonPlayViewModelGroups[c] != undefined && ComparisonMatchitems[j].CommonPlayViewModelGroups[c] != undefined) {                          
                                                if(teamAry[j].CommonPlayViewModelGroups[c][cc].PlayId != -1 && ComparisonMatchitems[i].CommonPlayViewModelGroups[c][cc].Text != teamAry[j].CommonPlayViewModelGroups[c][cc].Text){
                                                    
                                                    //比較2者大小 大是2 小是3
                                                    teamAry[j].CommonPlayViewModelGroups[c][cc].Text.split(" ")[1] > ComparisonMatchitems[j].CommonPlayViewModelGroups[c][cc].Text.split(" ")[1] ? ComparisonMatchitems[j].CommonPlayViewModelGroups[c][cc].compare = 2 : teamAry[j].CommonPlayViewModelGroups[c][cc].Text.split(" ")[1] < ComparisonMatchitems[j].CommonPlayViewModelGroups[c][cc].Text.split(" ")[1] ? ComparisonMatchitems[j].CommonPlayViewModelGroups[c][cc].compare = 3 : ComparisonMatchitems[j].CommonPlayViewModelGroups[c][cc].compare = 1;
                                                    context.commit("upComparisonMatchitems", ComparisonMatchitems);
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        
                        context.commit("upMatchitems", teamAry);
                    }else{
                        context.commit("upComparisonMatchitems", teamAry);
                        context.commit("upMatchitems", teamAry);
                    }
                    context.commit("upMatchitems", teamAry);
                    if (res) {
                        context.commit("uploading", false);
                    }
                    if (res.Data.length == 0) {
                        return 3;
                    }
                }
            });
        },
        // 更多赛事玩法
        asyncGetMatchMorePlay(context, payload) {
            let data = {
                playTypeList: payload.data.playTypeList,
                matchItemType: payload.data.matchItemType,
                matchId: context.state.MatchId,
                index: 1,
                count: 10
            };
            apiGetMatchItemAndSpecialPlay(data, true).then(res => {
                if (res) {
                    context.commit("uploading", false);
                }
                context.commit("upMatchSpecial", res.Data);
            });
        },
        //排行榜
        asyncGetHistoryMatchList(context, payload) {
            apiGetHistoryMatchList("", true).then(res => {
                context.commit("upRankmatchlist", res.Data);
            });
        }
    }
};

export default match;
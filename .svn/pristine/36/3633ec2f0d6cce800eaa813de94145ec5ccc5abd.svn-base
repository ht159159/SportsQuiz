//listtype请求
import {
  apiGetListTypeList,
  apiGetListTypeListAndUserRank,
  apiGetListByListTypeId
} from "@/api/ListType";

import store from "../index";
const ListType = {
  state: {
    rankList: {},
    RankUserlist: [],
    // ListTypeId: [],
    UserRank: "",
    UserIntegral: ""
  },
  mutations: {
    getRankList(state, payload) {
      payload.shift(), payload.pop(), payload.reverse();
      state.rankList = payload;
    },
    upRankUserlist(state, payload) {
      state.RankUserlist = payload;
    },
    upListTypeId(state, payload) {
      state.ListTypeId = payload.id;
      state.UserRank = payload.rank;
      state.UserIntegral = payload.int;
    },
    uplistbylist(state, payload) {
      state.listbylist = payload;
    }
  },
  actions: {
    asyncGetListByListTypeId(context) {
      let data = {
        listTypeId: context.state.ListTypeId,
        index: 1,
        count: 100
      };
      apiGetListByListTypeId(data, true).then(res => {
        context.commit("uplistbylist", res.Data);
      });
    },
    //获取排行榜
    asyncGetListType(context) {
      let matchId = {
        MatchId: store.state.match.MatchId,
        index: 1,
        count: 10
      };

      apiGetListTypeList(matchId).then(res => {
        context.commit("getRankList", res.Data);
      });
    },
    //获取排行榜今日次日总日
    asyncgetranklist(context) {
      let data = {
        matchId: store.state.match.MatchId,
        index: 1,
        count: 100
      };
      apiGetListTypeListAndUserRank(data, true).then(res => {
        let hashdata = res.Data;
        let zuotian = hashdata[hashdata.length - 1];
        let zong = hashdata[0];
        let today = hashdata[hashdata.length - 2];
        let arr = [zong, today, zuotian];

        context.commit("upRankUserlist", arr);
      });
    }
  }
};

export default ListType;

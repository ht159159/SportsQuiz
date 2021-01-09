//user请求
import { apiLogin, apiGetUserInfo } from "@/api/User";

const user = {
  //库
  state: {
    userinfo: [],
    listMsg: [],
    code: "",
    navnum: 0,
    upBack: false,
    // isSafari: localStorage.getItem(key: 'isSafari') === '1' ? 1 : 0,
  },
  mutations: {
    upBack(state, payload) {
      state.upBack = true;
    },
    //底部栏
    upNavnum(state, payload) {
      state.navnum = payload.id;
    },
    //方法
    upMatchId(state, payload) {
      state.MatchId = payload.id;
    },
    upinfo(state, payload) {
      state.userinfo = payload;
    },
    //使用注册方法赋值
    listMsg(state, payload) {
      state.listMsg = payload;
    },
    upCode(state, payload) {
      state.code = payload;
    }
  },
  actions: {
    getMsgList(context, payload) {
      // 需要加token的在请求后加true
      apiGetUserInfo(payload, true).then(res => {
        //注册方法 $store.commit(‘方法名’,传递参数)
        context.commit("listMsg", res);
      });
    }
  }
};

export default user;

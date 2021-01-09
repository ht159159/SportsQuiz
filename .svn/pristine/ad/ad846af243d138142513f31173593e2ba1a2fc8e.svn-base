import Vue from "vue";
import Vuex from "vuex";
import match from "./modules/match";
import ListType from "./modules/ListType";
import user from "./modules/user";
import news from "./modules/myself";
import createPersistedState from "vuex-persistedstate";
import address from './modules/address.js';
Vue.use(Vuex);
const store = new Vuex.Store({
  modules: {
    user,
    match,
    ListType,
    news,
    address
  },
  plugins: [createPersistedState()]
});

export default store;

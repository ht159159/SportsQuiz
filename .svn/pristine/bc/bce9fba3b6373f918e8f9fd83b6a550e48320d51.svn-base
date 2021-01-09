//lang.js
import Vue from "vue";
import VueI18n from "vue-i18n";
import cn from "./i18n/cn.json";
import tw from "./i18n/tw.json";
import vn from "./i18n/vn.json";
import en from "./i18n/en.json";

Vue.use(VueI18n);

const locale = JSON.parse(localStorage.getItem("lang"))
  ? JSON.parse(localStorage.getItem("lang")).tag
  : "zh-CN";
let messages = {};
messages["zh-CN"] = cn;
messages["zh-TW"] = tw;
messages["vi-VN"] = vn;
messages["en-US"] = en;
const i18n = new VueI18n({
  locale,
  messages
});

export default i18n;

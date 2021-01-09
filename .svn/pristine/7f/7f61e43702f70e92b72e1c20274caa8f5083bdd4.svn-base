import axios from "axios";
import { showFullScreenLoading, tryHideFullScreenLoading } from "./loading";
import router from "../router";
import { MessageBox } from "element-ui";
import { apiLogin, apiRefreshToken } from "@/api/User";
import i18n from "@/lang"; // 語言切換

function debounce(fn, wait) {
  let timerId = null;
  let flag = true;
  return function() {
    clearTimeout(timerId);
    if (flag) {
      fn.apply(this, arguments);
      flag = false;
    }
    timerId = setTimeout(() => {
      flag = true;
    }, wait);
  };
}

const authError = debounce(message => {
  localStorage.removeItem("token");

  MessageBox.alert(i18n.t("LoginTimedOutPrompt"), i18n.t("LoginTimeout"), {
    // center: true,

    confirmButtonText: i18n.t("JumpToLoginPage"),
    callback: action => {
      router.push("/");
    }
  });
}, 1000);
let service = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL,
  timeout: 5000,
  headers: {
    "content-type": "application/json"
  }
});

// axios攔截器設定
service.interceptors.request.use(
  config => {
    // if (!config.noLoading) {
    //   // 不需要loading畫面
    // }
    // showFullScreenLoading()

    // 語言
    config.headers["Accept-Language"] = JSON.parse(
      localStorage.getItem("lang")
    ).tag;

    return config;
  },
  error => Promise.reject(error)
);
// axios攔截器設定
service.interceptors.response.use(
  response => {
    if (response.data.result === 0) {
      Message.error(response.data.message);
    }
    // tryHideFullScreenLoading()
    return response.data;
  },
  error => {
    if (error.response.status === 401) {
      // localStorage.removeItem("token");
      // MessageBox.alert("登录信息超时,请重新登录", "登录超时", {
      //   // center: true,
      //   confirmButtonText: "跳转到登录页",
      //   callback: action => {
      //     router.push("/");
      //   }
      // });
      authError();
    }

    Promise.reject(error);
  }
);

/**
 * @param url api網址
 * @param data 資料
 * @param needAuth 是否需要送token
 * @param noLoaging 是否需要loading
 */
export function post(url, data, needAuth, noLoaging = true) {
  if (needAuth) {
    return service.post(url, data, {
      noLoaging,
      headers: {
        authorization: "Bearer " + localStorage.token
      }
    });
  } else {
    return service.post(url, data);
  }
}

/**
 * @param url api網址
 * @param params 資料
 * @param needAuth 是否需要送token
 */
export function get(url, params, needAuth) {
  if (needAuth) {
    return service.get(url, {
      params,
      headers: { authorization: "Bearer " + localStorage.token }
    });
  } else {
    return service.get(url, { params });
  }
}

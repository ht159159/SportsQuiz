import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import i18n from "@/lang"; // 語言切換
import "./style/index.scss";
import "./utils/rem";
import Vant from "vant";
import "vant/lib/index.css";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "animate.css";
import VueTouch from "vue-touch";
import FastClick from "fastclick";
import Vconsole from "vconsole";
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'; 

// 无限滚动

// 封装的公共组件
import Alert from "./components/Alert";
import { apiLogin, apiRefreshToken } from "@/api/User";

Vue.prototype.Alert = Alert;
// if(isDebugger){
//   new Vconsole()
// }

Vue.use(VueTouch, { name: "v-touch" });
Vue.use(Vant);
Vue.use(ElementUI);
Vue.use(VueAwesomeSwiper);
Vue.config.productionTip = false;

//路由守卫 使用钩子函数对路由进行权限跳转
router.beforeEach((to, from, next) => {
    const role = localStorage.getItem("token");
    if (
        to.path == "/register" ||
        to.path == "/Login" ||
        to.path == "/" ||
        to.path == "/myself" ||
        to.path == "/gameSport" ||
        to.path == "/match" ||
        to.path == "/myself" ||
        to.path == "/privacy" ||
        to.path == "/ForgetPassword"
    ) {
        next();
    } else if (!role) {
        // Toast.fail("请您先登录");
        // alert('111')
        next("/myself");
    } else {
        // 简单的判断IE10及以下不进入富文本编辑器，该组件不兼容
        if (navigator.userAgent.indexOf("MSIE") > -1 && to.path === "/editor") {
            Vue.prototype.$alert(
                "vue-quill-editor组件不兼容IE10及以下浏览器，请使用更高版本的浏览器查看",
                "浏览器不兼容通知", {
                    confirmButtonText: "确定"
                }
            );
        } else {
            next();
        }
    }
});

//解决element级联选择器IOS获取不到焦点问题
//FastClick的ios点击穿透解决方案
// window.addEventListener( "load", function() {
//   FastClick.attach( document.body );
//   }, false );
// document.body.addEventListener(
//   "touchmove",
//   function(e) {
//     e.preventDefault(); //阻止默认的处理方式(阻止下拉滑动的效果)
//   },
//   { passive: false }
// ); //passive 参数不能省略，用来兼容ios和android
document.addEventListener("gesturestart", function(event) {
    event.preventDefault();
});

function refresh() {
    let nowDate = new Date().getTime();
    let logintime = localStorage.getItem("logintime");
    if (nowDate - logintime > 172800000) {
        let data = {
            refreshToken: localStorage.getItem("RefreshToken")
        };
        apiRefreshToken(data, true).then(res => {
            localStorage.setItem("token", res.AccessToken);
            localStorage.setItem("RefreshToken", res.RefreshToken);
            localStorage.setItem("logintime",nowDate);
        });
    }
}
//refresh();
setInterval(refresh, 600000);

new Vue({
    router,
    store,
    i18n,
    render: h => h(App)
}).$mount("#app");
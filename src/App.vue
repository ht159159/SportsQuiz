<template>
  <div id="app">
    <transition :name="transitionName">
      <keep-alive>
        <router-view class="Router" v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
    </transition>

    <transition :name="transitionName">
      <router-view class="Router" v-if="!$route.meta.keepAlive"></router-view>
    </transition>

    <div v-if="nowRouter == 'Home'" @click.stop="audioSwitch" :class="isOn ? 'isOn' : 'isOff'"></div>
  </div>
</template>
<script>


// 引入vuex的辅助方法
import { mapState } from "vuex";
import { bgmPlayer } from "@/utils/medias";
// import { apiGetMemClubs } from "@/api/Club.js";
export default {
  //页面加载方法
  provide() {
    return {
      reload: this.reload
    };
  },
  data() {
    return {
      style: "",
      //页面加载方法
      isRouterAlive: true,
      transitionName: "slide-right",

      // 換膚用-讀取localStorage裡的換膚參數
      localStorageTheme: "",
      isOn: true,
      nowRouter: ""
    };
  },
  created() {
    // 判斷裝置語系 設定語系
    if (!localStorage.getItem("lang")) {
      localStorage.setItem("lang", JSON.stringify({ name: "简体中文", tag: "zh-CN" }));
    }

    this.getLocalStorageTheme();
    if (!localStorage.getItem("isOn")) {
      localStorage.setItem("isOn", true);
    }
    this.isOn = localStorage.getItem("isOn") == "true";
    if (isIOS) {
      localStorage.setItem("isOn", false);
      this.isOn = false;
    }
    this.handlePlay();
   
  },
  mounted() {
    this.nowRouter = this.$router.currentRoute.name;
    if (window.plus) {
        this.plusReady()
      } else {
        document.addEventListener('plusready', this.plusReady, false)
      }
  },
  methods: {
    setTheme(name) {
      this.style = localStorage.style = name;
      let theme = {
        primary: ""
      };
      switch (name) {
        case "default":
          theme.primary = "#c12f3e";
          break;
        case "blue":
          theme.primary = "#2f7bc1";
          break;
      }
      let root = document.documentElement;
      root.style.setProperty("--primary-color", theme.primary);
    },
    //页面加载方法
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(function() {
        this.isRouterAlive = true;
      });
    },
    // 讀取localStorageTheme值並換膚
    getLocalStorageTheme() {
      if (localStorage.getItem("theme") == null) {
        localStorage.setItem("theme", "blue");
      }
      this.localStorageTheme = localStorage.getItem("theme");
      window.document.documentElement.setAttribute(
        "data-theme",
        this.localStorageTheme
      );
    },

    // 播放/靜音開關
    audioSwitch() {
      localStorage.setItem("isOn", !this.isOn);
      this.isOn = !this.isOn;
      this.handlePlay();
    },
    handlePlay() {
      var theme = localStorage.getItem("theme");
      if (this.isOn) {
        bgmPlayer.stop();
        bgmPlayer.play(theme);
      } else {
        bgmPlayer.stop();
      }
    },
    plusReady () {
  
        this.webview = window.plus.webview.currentWebview()
     
        window.plus.key.addEventListener('backbutton', () => {
          this.webview.canBack(event => {
            if (event.canBack) {
              this.webview.back()
            } else {
              if (this.first) {
                if (Date.now() - this.first < 1500) {
                  window.plus.runtime.quit()
                }else{
                  this.first = Date.now()
                  this.$toast('再按一次退出应用')
                }
              } else {
                this.first = Date.now()
                this.$toast('再按一次退出应用')
              }
            }
          })
        })
      }
  },
  watch: {
    $route(to, from) {
      // 切换动画
      let isBack = this.$router.isBack; // 监听路由变化时的状态为前进还是后退

      if (isBack) {
        this.transitionName = "slide-left";
      } else {
        this.transitionName = "slide-right";
      }
      this.$router.isBack = false;
      this.nowRouter = to.name;
    },
    style(val) {
      this.setTheme(val);
    }
  }
};
</script>
<style lang="scss">
body {
  overflow-x: hidden;
}

#app {
  margin: 0 auto;
  overflow-x: hidden;
}
/* // 改变elementUI  Loading颜色
// .el-loading-spinner .path{
//   stroke:#ed4014!important;
// }
// .el-loading-spinner .el-loading-text{
//   color: #ed4014!important;
// } */
</style>
<style scoped>
.Router {
  position: absolute;
  width: 100%;
  height: 100%;
  transition: all 0.377s ease;
  box-sizing: border-box;
  overflow-y: auto;
}

.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(-100%, 0);
  transform: translate(-100%, 0);
}

.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(100%, 0);
  transform: translate(100% 0);
}

.isOn {
  width: 0.55rem;
  height: 0.55rem;
  position: absolute;
  z-index: 200;
  top: 1.4rem;
  right: 0.3rem;
  background: url("./assets/icons/playOn.png") 0 0 no-repeat;
  background-size: 100%;
}
.isOff {
  width: 0.55rem;
  height: 0.55rem;
  position: absolute;
  z-index: 2000;
  top: 1.4rem;
  right: 0.3rem;
  background: url("./assets/icons/playOff.png") 0 0 no-repeat;
  background-size: 100%;
}
</style>

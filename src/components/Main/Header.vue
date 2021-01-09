<template>
  <div class="main-header" style='z-index: 1000'>
    <div class="header-marquee">
      <div class="header-marquee-icon"></div>
      <p class="header-marquee-text">{{inform}}</p>
      <a href="#" @click.prevent="singIn" class="sing">
        <span style='margin-left:.12rem'>签到</span>
      </a>
    </div>
        <transition name='fade'>
      <modal-sign-in :showModal.sync="isSignIn"></modal-sign-in>
          </transition>
  </div>
</template>

<script>
import { apiSign,apiCheckSign } from "@/api/User.js";
import ModalSignIn from "@/components/Modal/SignIn.vue";
import Vue from "vue";
import { Toast } from "vant";
import Self from '@/self.js'
Vue.use(Toast);
export default {
  name: "MainHeader",
  components: {
    ModalSignIn
  },
  data() {
    return {
      isSignIn: false,
      inform: "新平台开发，欢迎您来注册",
      show: false,
      messa: '今日已签到'
    };
  },
  methods: {
    singIn() {
      Self.$emit('sss',this.show)
      // this.getDayDate();
      this.isSignIn = true
    },
    // panduan() {
    //   let data = {};
    //   apiCheckSign(data, true).then(res => {
    //     if(res.code == 200) {
    //       this.isSignIn = true
    //       Toast({ message: this.messa, duration: 1000 });
    //     } else {
    //       this.isSignIn = false
    //     }
    //   })
    // },
    getDayDate() {
      let data = {};
      apiSign(data, true).then(res => {
        if (res.IsSuccess) {
          Toast(res.message);
          this.listMsg = res.data;
        } else if (res.code == 600) {
          // Toast({ message: res.message, duration: 1000 });
          // this.isSignIn = true;
          this.messa = res.message;
        }
      });
    }
  },
  created() {
    // this.panduan()
  }
  
};
</script> 
<style scoped>
  .sing{
    float: right;
    width: 1.38rem;
    height: .8rem;
    line-height: .8rem;
    background-image: url('~@/assets/sign_03.png');
    background-size: 100% 100%;
    text-align: center;
    margin-left: 2.3rem;
    font-size: .22rem;
    color: #1d1d1d;
  }
  .fade-enter,
.fade-leave-to {
  opacity: 0;
}
.fade-leave,
.fade-enter-to {
  opacity: 1;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s;
}
</style>

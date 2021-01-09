<template>
  <div class="luck" :class="[lang == 'zh-CN' ? 'luck-CN' : lang == 'en-US' ? 'luck-US' : 'luck-TW']">
    <back class="back-icon"></back>
    <transition name="fade">
      <model v-if="showgold"></model>
    </transition>
    <transition name="fade">
      <div class="luck-dialog" v-if="showgold">
        <p class="luck-dialog-p" v-if="typep == 1">
          {{ this.prizeData[this.prizeIndex].PrizeName }}
        </p>
        <p v-if="typep == 2" class="pgold">{{ $t('NoGoldTip') }}</p>  <!-- 【 金币不足,每天分享可获得金币 】 -->
        <div class="luck-dialog-btn" @click="close">{{ $t('Confirm') }}</div>  <!-- 【 确认 】 -->
      </div>
    </transition>
    <div class="lottery">
      <div class="lottery-top"></div>
      <div class="lottery-bottom"></div>
      <div class="lottery-left"></div>
      <div class="lottery-right"></div>
      <round-turntable
        ref="roundTurntable"
        :prizeData="prizeData"
        :rotateCircle="rotateCircle"
        :duringTime="duringTime"
        :turntableStyleOption="turntableStyleOption"
        @endRotation="endRotation"
        class="turntable"
      >
        <template slot="item" slot-scope="scope">
          <div class="turntable-name">{{ scope.item.PrizeName }}</div>
          <div class="turntable-img">
            <img :src="scope.item.Image" />
          </div>
        </template>
      </round-turntable>
      <div @click="getApiLuckDraw" class="pointer"></div>
      <div class="lotterytai">
        <p>{{ $t('TotalCoins') }}:{{ gold }} {{ $t('Cost') }} {{ prize }}{{ $t('Coins') }} {{ $t('OneSpin') }}</p>  <!-- 【 金币数量 】 --><!-- 【 每花1金币可抽奖一次 】 -->
      </div>
    </div>
    <!-- <div class="share">
      <div
        @click="copy"
        :data-clipboard-text="codeUrl"
        class="tag-read1 copy"
      ></div>
      <div class="pyj" @click="pyj"></div>
      <div class="wexin" @click="wexin"></div>
    </div> -->
    <div class="luck-rule">
      <p class="title">{{ $t('Tips') }}:</p>  <!-- 【 温馨提示 】 -->
      <p>{{ Tips }}</p>
      <router-link v-if="editUserAddress" to="/address">{{ $t('EditShippingAddress') }}</router-link>
      <!-- <p>1.提示提示提示提示提示提示提示提示提示提示提示提示提示提示</p>
      <p>2.提示提示提示提示提示提示提示提示提示提示提示提示提示提示</p>
      <p>3.提示提示提示提示提示提示提示提示提示提示提示提示提示提示</p>
      <p>4.提示提示提示提示提示提示提示提示提示提示提示提示提示提示</p>
      <p>5.提示提示提示提示提示提示提示提示提示提示提示提示提示提示</p> -->
    </div>

  </div>
</template>

<script>
import { apiLuckDraw, apiGetPrizePoolSetting } from "@/api/product.js";

import { apiGetUserInfo, apiGetUserAddress } from "@/api/User.js";
import roundTurntable from "../components/roundTurntable.vue";
import model from "../components/model";
import { apiGetInvitationUrl } from "@/api/InvitationCode.js";
import Clipboard from "clipboard";
import back from "../components/Botton/back.vue";

import {lotteryMusic,lotteryWining} from "@/utils/medias";

export default {
  components: {
    roundTurntable,
    model,
    back,
  },
  created() {
    this.lang = JSON.parse(localStorage.getItem("lang")).tag;
    this.getPrizePoolSetting();
    apiGetUserInfo("", true).then(res => {
      this.gold = res.UDiamond;
      this.num = Math.floor(res.UDiamond / 10);
    });
    // this.geturl();
    this.getUserAddress();
    
  },
  data() {
    return {
      lang: "",
      // 转盘上的奖品数据
      prizeData: [],
      // 转动的圈数
      rotateCircle: 24,
      // 转动需要持续的时间（s）
      duringTime: 6.5,
      // 转盘样式的选项
      turntableStyleOption: {
        // 背景色
        prizeBgColors: [
          "#AE3EFF",
          "#4D3FFF",
          "#FC262C",
          "#3A8BFF",
          "#EE7602",
          "#FE339F"
        ],
        // 转盘的外边框颜色
        borderColor: "#199301"
      },

      // 中奖的奖品的index
      prizeIndex: -1,
      // 用来锁定转盘，避免同时多次点击转动
      isLocking: false,

      // 剩余抽奖次数
      num: 2,
      gold: Number,
      index: "",
      showgold: false,
      typep: "",
      codeUrl: "",
      Tips: [],
      flag: true,
      editUserAddress: false,
      prize: 0,
    };
  },
  methods: {
    // geturl() {
    //   apiGetInvitationUrl("", true).then(res => {
    //     this.codeUrl = res.data;
    //   });
    // },
    copy() {
      var clipboard = new Clipboard(".tag-read1");
      clipboard.on("success", e => {
        // this.$toast.success({
        //   message: "邀请链接复制成功",
        //   duration: 3000
        // });
        const m = this.$message({
          message: "邀请链接复制成功",
          duration: 3000,
          type: "success",
          center: true
        });
        setTimeout(() => m.close(), 1200);
        // success("复制成功");//这里你如果引入了elementui的提示就可以用，没有就注释即可
        // 释放内存
        clipboard.destroy();
      });
      clipboard.on("error", e => {
        // 不支持复制
        // 释放内存
        clipboard.destroy();
      });
    },
    wexin() {
      const m = this.$message({
        type: "warning",
        message: this.$t('NotYetOpen'),
        center: true,
        duration: 1000
      });
      setTimeout(() => m.close(), 1200);
    },
    pyj() {
      const m = this.$message({
        type: "warning",
        message: this.$t('NotYetOpen'),
        center: true,
        duration: 1000
      });
      setTimeout(() => m.close(), 1200);
    },
    close() {
      this.showgold = false;
    },
    getPrizePoolSetting() {
      apiGetPrizePoolSetting("").then(res => {
        this.prizeData = res.Prizes;
        this.prize = res.Price;
        this.Tips = res.Tips;
      });
    },
    getApiLuckDraw() {
      if (!this.flag) {
        return;
      }
      this.flag = false;
      apiLuckDraw("", true).then(res => {
        if (res.isSuccess) {
          for (let i = 0; i < this.prizeData.length; i++) {
            const element = this.prizeData[i].PrizeId;
            if (element == res.PrizeId) {
              this.index = i;
            }
          }
          this.startRotation();
        } else {
          this.flag = true;
          this.$message({
            type: "error",
            message: res.Message,
            center: true,
            duration: 1000,
            typep: ""
          });
          if (res.Message === "抱歉，请先设置默认收货地址！") {
            this.$router.push("/address");
          }
        }
      });
    },
    startRotation() {
      // 如果还不可以转动
      if (!this.canBeRotated()) {
        return false;
      }
      //開始轉動音效
      lotteryMusic.play();
      // 开始转动
      // 先上锁
      this.isLocking = true;
      // 设置在哪里停下，应该与后台交互，这里随机抽取0~5
      // apiLuckDraw("", true).then(res => {
      // if (res.isSuccess) {
      // let index;
      // for (let i = 0; i < this.prizeData.length; i++) {
      //   const element = this.prizeData[i].PrizeId;
      //   if (element == res.PrizeId) {
      //     index = i;
      //   }
      // }
      let index = this.index;
      // 成功后次数减少一次
      this.num--;
      this.prizeIndex = index;
      // 告诉子组件，开始转动了
      this.$refs.roundTurntable.rotate(index);
      // }
      // });
    },
    // 已经转动完转盘触发的函数
    endRotation() {
    // 停止轉動音效
    lotteryMusic.stop();
    this.showgold = true;
    this.typep = 1;
    // 中獎
    lotteryWining.play();
      apiGetUserInfo("", true).then(res => {
        this.gold = res.UDiamond;
      });
      // 提示中奖
      // alert(
      //   `恭喜您获奖啦,您的奖品是：${this.prizeData[this.prizeIndex].PrizeName}`
      // );
      // this.$message({
      //   type: "success",
      //   message: this.prizeData[this.prizeIndex].PrizeName,
      //   center: true,
      //   duration: 3000
      // });
      // 解锁
      this.isLocking = false;
      this.flag = true;
    },
    // 判断是否可以转动
    canBeRotated() {
      if (this.num <= 0) {
        this.showgold = true;
        this.typep = 2;
        return false;
      }
      if (this.isLocking) {
        return false;
      }
      return true;
    },
    //取得地址
    getUserAddress () {
      apiGetUserAddress("", true).then(res => {
        const found = res.Data.find(element => element.IsDefault == 1);
        found != undefined ? this.editUserAddress = false : this.editUserAddress = true;      
      });
    }
  }
};
</script>

<style scoped lang="scss">


.ceng {
  background: url("~@/assets/turntable_a_03.png");
  background-size: 100%;
  width: 7.1rem /* 710/100 */;
  height: 7.11rem /* 711/100 */;
  margin: 0 auto;
  padding-top: 0.22rem;
  /* 14/100 */
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

<template>
  <div class="vip">
    <div class="explain" v-if="ShowExplain">
      <!-- <i class='round' /> -->
      <i class="explain-x" @click="hideExplain"></i>
      <p class="rank-popup-title">{{ $t("VipExplanation") }}</p>
      <p class="rank-popup-content">
        {{ $t("Explanation") }}
      </p>
    </div>
    <div class="vip-head">
      <back></back>
      <div class="vip-head-img">
        <img :src="url" alt="" class="vip-head-img-pic" />
      </div>
      <div class="vip-head-leave" v-for="item in 10">
        <img v-if="item == vip" :src="require('@/assets/vip/V' + item + '.png')" />
      </div>
    </div>
    <div class="vip-main">
      <i class="question" @click="showPopup" />
      <div class="vip-main-desk">
        <div class="img-gray vip-main-desk-vip10" :class="{iscolorful : vip == 10}"></div>
      </div>
      <div class="vip-main-desk">
        <div class="img-gray vip-main-desk-vip8" :class="{iscolorful : vip == 8}"></div>
        <div class="img-gray vip-main-desk-vip9" :class="{iscolorful : vip == 9}"></div>
      </div>
      <div class="vip-main-desk">
        <div class="img-gray vip-main-desk-vip5" :class="{iscolorful : vip == 5}"></div>
        <div class="img-gray vip-main-desk-vip6" :class="{iscolorful : vip == 6}"></div>
        <div class="img-gray vip-main-desk-vip7" :class="{iscolorful : vip == 7}"></div>
      </div>
      <div class="vip-main-desk">
        <div class="img-gray vip-main-desk-vip1" :class="{iscolorful : vip == 1}"></div>
        <div class="img-gray vip-main-desk-vip2" :class="{iscolorful : vip == 2}"></div>
        <div class="img-gray vip-main-desk-vip3" :class="{iscolorful : vip == 3}"></div>
        <div class="img-gray vip-main-desk-vip4" :class="{iscolorful : vip == 4}"></div>
      </div>
    </div>
  </div>
</template>

<script>
import back from "../components/Botton/back.vue";
import { apiGetUserInfo } from "@/api/User";
export default {
  components: {
    back
  },
  created() {
    this.getuser();
  },
  data() {
    return {
      vip: "",
      url: "",
      ShowExplain: false
    };
  },
  methods: {
    showPopup() {
      this.ShowExplain = true;
    },
    hideExplain() {
      this.ShowExplain = false;
    },
    getuser() {
      apiGetUserInfo("", true).then(res => {
        this.vip = res.RankId;
        this.url = res.UImg;
      });
    }
  }
};
</script>

<style spcoped lang="scss">
.explain {
  z-index: 9999;
  position: absolute;
  left: 50%;
  top: 3rem;
  transform: translateX(-50%);
  background-image: url("~@/assets/rank-explain.png");
  background-size: 100%;
  // border-radius: 0.1rem /* 8/100 */;
  box-sizing: border-box;
  width: 6.46rem /* 646/100 */;
  height: 7.72rem /* 772/100 */;
  // background-color: #1c202e;
  // border: 2px solid #9196a6;
  color: #f2f2f2;
  text-align: center;
  padding-top: 0.58rem /* 58/100 */;
  padding-left: 0.47rem /* 47/100 */;
  padding-right: 0.47rem;
  .rank-popup-title {
    font-size: 0.34rem; /* 34/100 */
    margin: 0 auto;
    margin-bottom: 0.48rem; /* 48/100 */
  }
  .rank-popup-content {
    line-height: 0.55rem; /* 55/100 */
    color: #989ca8;
    font-size: 0.18rem; /* 18/100 */
  }
  .explain-x {
    position: absolute;
    top: 0.18rem /* 18/100 */;
    right: 0.19rem /* 19/100 */;
    display: inline-block;
    width: 0.36rem /* 36/100 */;
    height: 0.36rem /* 36/100 */;
    background-image: url("~@/assets/icons/x.png");
    background-size: 100%;
  }
}
.question {
  display: inline-block;
  width: 0.31rem /* 31/100 */;
  height: 0.31rem;
  font-size: 0.5rem; /* 50/100 */
  float: right;
  margin-top: -1.2rem /* 20/100 */;
  margin-right: 0.19rem; /* 19/100 */
  background-image: url("~@/assets/questyellow.png");
  background-repeat: no-repeat;
  background-size: 100%;
  position: relative;
  z-index: 1;
}
.img-gray {
  filter: grayscale(100%);
  opacity: 0.4;
}
.iscolorful {
  filter: grayscale(0);
  opacity: 1;
}
</style>

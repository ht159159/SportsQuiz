<template>
  <div class="Cgold">
    <div class="Cmatch-head">
      <back class="back-icon"></back>
      <div class="title">累计记录</div>
    </div>
    <div class="Cgold-main">
      <div class="Cgold-main-title">
        <div class="Cgold-main-title-left fl">您累计获得</div>
        <div class="Cgold-main-title-mid fl">
          <p class="Cgold-main-title-mid-gold">金币</p>
          <p class="Cgold-main-title-mid-goldnum">{{ item.ZSumGold }}</p>
        </div>
        <div class="Cgold-main-title-right fl">
          <p class="Cgold-main-title-right-jue">奖劵</p>
          <p class="Cgold-main-title-right-juenum">{{ item.ZSumLottery }}</p>
        </div>
      </div>
      <div
        class="Cgold-main-item"
        v-for="(item, index) in item.ChallengePrizeLogs"
        :key="index"
      >
        <div class="Cgold-main-item-mouth">
          <span class="Cgold-main-item-mouth-name">{{ item.month }}月获得</span>
        </div>

        <div class="Cgold-main-item-content">
          <span class="Cgold-main-item-content-gold">金币:</span>
          <span class="Cgold-main-item-content-goldnum">{{
            item.GoldValue
          }}</span>
          <span class="Cgold-main-item-content-jue">奖券:</span>
          <span class="Cgold-main-item-content-juenum">{{
            item.LotteryValue
          }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import back from "../../components/Botton/back.vue";
import { apiGetChallengeCumulativeReward } from "@/api/match";
export default {
  components: {
    back
  },
  data() {
    return {
      item: ""
    };
  },
  created() {
    this.getreward();
  },
  methods: {
    getreward() {
      apiGetChallengeCumulativeReward("", true).then(res => {
        this.item = res;
      });
    }
  }
};
</script>

<style scoped lang="scss">
.Cgold {
  .fl {
    float: left;
  }
  &-main {
    position: relative;
    padding-top: 1.3rem /* 200/100 */;
    &-title {
      position: absolute;
      top: -0.15rem /* 15/100 */;
      left: 0.2rem /* 20/100 */;
      width: 7.1rem /* 710/100 */;
      height: 1.21rem /* 121/100 */;
      background: url("~@/assets/challenge/cumulative_records_03.png");
      background-size: 100%;
      &-left {
        width: 3.1rem /* 310/100 */;
        height: 1.21rem;
        font-size: 0.33rem /* 33/100 */;
        color: #fff;
        text-align: center;

        line-height: 1.21rem;
      }
      &-mid {
        height: 1.21rem;
        width: 2.05rem /* 205/100 */;
        line-height: 1.21rem;
        padding-top: 0.3rem /* 30/100 */;
        p {
          text-align: center;
          font-size: 0.28rem /* 28/100 */;
          color: #5a3d1b;
        }
        &-gold {
          margin-bottom: 0.13rem; /* 10/100 */
        }
        &-goldnum {
          color: #f51341 !important;
        }
      }
      &-right {
        padding-top: 0.3rem /* 30/100 */;
        height: 1.21rem;
        width: 1.92rem /* 192/100 */;
        line-height: 1.21rem;
        p {
          margin: 0 auto;
          text-align: center;
          font-size: 0.28rem /* 28/100 */;
          color: #5a3d1b;
        }
        &-jue {
          margin-bottom: 0.13rem !important; /* 10/100 */
        }
        &-juenum {
          color: #f51341 !important;
        }
      }
    }
    &-item {
      width: 7.1rem /* 710/100 */;
      height: 1.53rem /* 153/100 */;

      margin: 0 auto;
      margin-bottom: 0.2rem /* 10/100 */;

      &-mouth {
        height: 0.7rem /* 70/100 */;
        background-color: #e3e3e3;

        border-top-left-radius: 0.14rem;
        border-top-right-radius: 0.14rem;
        line-height: 0.7rem;
        padding-left: 0.38rem /* 38/100 */;
        &-name {
          font-size: 0.26rem /* 26/100 */;
          color: #2e3955;
        }
      }
      &-content {
        height: 0.83rem;
        padding-left: 0.38rem /* 38/100 */;
        background-color: #ffffff;
        border-bottom-left-radius: 0.14rem;
        border-bottom-right-radius: 0.14rem;
        line-height: 0.83rem;
        span {
          font-size: 0.24rem /* 24/100 */;
        }
        &-gold {
        }
        &-goldnum {
          color: #ffb379;
          margin-right: 0.92rem; /* 92/100 */
        }
        &-juenum {
          color: #ffb379;
        }
      }
    }
  }
}
</style>

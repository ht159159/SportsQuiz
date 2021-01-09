<template>
  <div class="rank-ticket">
    <div class="rank-ticket-head">
      <back class="back-icon"></back>
      <div>{{ $t('ChallengeGame') }}</div>
    </div>
    <!-- <div class="rank-ticket-main">
      购买门票
    </div>
    <div class="rank-ticket-button btn" @click="buy">确认</div> -->
    <div class="rank-ticket-xunzhang"></div>
    <div class="rank-ticket-rules">
      <p class="title">{{ $t("SignUpInstructions") }}</p>
      {{ $t("ChallengeTicketTip1") }}<br />
      {{ $t("ChallengeTicketTip2") }}<br />
      {{ $t("ChallengeTicketTip3") }}
    </div>
    <div class="rank-ticket-button btn" @click="buy">
      <p class="rank-ticket-button-text1">{{ $t("SignUp") }}</p>
      <p class="rank-ticket-button-text2">100</p>
    </div>

    <!-- 廣告 -->
    <FlowAd :isOpenAd.sync="isOpenAd" :adTypeId="adTypeId" :AdObj ="AdObj"/>
  </div>
</template>

<script>
import { apiBuyChallengeTicket } from "@/api/match";
import back from "../../components/Botton/back.vue";
import FlowAd from "@/components/FlowAd";
import { apiGetFlowAdByType} from "@/api/FlowAd.js";
export default {
  components: {
    back,
    FlowAd
  },
  data() {
    return {
      isOpenAd: false,
      adTypeId: 0,
      AdObj: {},
    }
  },
  methods: {
    buy() {
      let data = {
        matchId: this.$route.params.id
      };

      apiBuyChallengeTicket(data, true).then(res => {
        if (res.IsSuccess) {
          this.$message({
            message: "购买成功",
            duration: 3000,
            type: "success",
            center: true
          });
          setTimeout(() => {
            this.$router.push("/challengematch");
          }, 2000);
        } else if (Math.abs(res.Code) >= 600) {
          this.$message({
            message: res.Message,
            duration: 3000,
            type: "error",
            center: true
          });
          // 彈出廣告
          setTimeout(() => {
            this.adTypeId = 2;
            let data = {
              flowAdTypeId: this.adTypeId
            };
            apiGetFlowAdByType(data, true).then(res => {
              if(res.Data.Id == 0) {
                this.isOpenAd = false;
                } else {
                this.isOpenAd = true;
                this.AdObj = res.Data;
              }
            });
          }, 1000);
        }
      });
    }
  }
};
</script>

<style spoced lang="scss">
.rank-ticket {
  background: url("~@/assets/challenge/ticket.png");
  background-repeat: no-repeat;
  background-size: 100%;
  background-color: #293660;
  &-head {
    position: fixed !important;
    top: 0;
    width: 100%;
    z-index: 99;
  }
  &-xunzhang {
    width: 4.66rem /* 466/100 */;
    height: 4.24rem /* 424/100 */;
    background: url("~@/assets/challenge/xunzhang.png");
    background-size: 100%;
    position: absolute;
    left: 50%;
    top: 2.5rem;
    transform: translateX(-50%);
  }
  &-rules {
    position: relative;
    width: 7.1rem /* 710/100 */;
    height: 5.13rem;
    font-size: 0.22rem /* 20/100 */;
    color: #98a5d2;
    line-height: 0.43rem /* 55/100 */;
    margin: 0 auto;
    margin-top: 6.5rem; /* 531/100 */
    background: url("~@/assets/challenge/ticket-text_06.png");

    background-size: 100%;
    padding: 1rem /* 118/100 */ 0.28rem /* 28/100 */ 0.1rem /* 10/100 */ 0.28rem
      /* 28/100 */;
    .title {
      position: absolute;
      top: 0.18rem;
      left: 50%;
      transform: translate(-50%, 0%);
      font-size: 0.32rem;
      line-height: 0.4rem;
      font-weight: bold;
      -webkit-text-stroke: 1px black;
      background: -webkit-linear-gradient(top,#fed295 70%,#fff 30%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
  &-button {
    margin-top: 0.15rem !important;
  }
}
</style>

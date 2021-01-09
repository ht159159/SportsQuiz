<template>
  <div class="activities-bet">
    <div class="activities-bet-header">
      <div class="activities-bet-header-wrap">
        <back class="back-icon img-he"></back>
        <h3>{{ $t("Bet") }}</h3>
        <!--投注-->
      </div>
    </div>

    <div class="activities-bet-content">
      <div class="activities-bet-vsImg">
        <div class="activities-bet-vsImg-top">
          <div class="activities-bet-vsImg-box">
            <img v-if="betObj.HomeTeamImg" :src="betObj.HomeTeamImg" />
            <img v-else src="@/assets/instead_logo1.png" alt="">
            <p>{{ betObj.HomeTeam }}</p>
          </div>
          <div class="activities-bet-vs">VS</div>
          <div class="activities-bet-vsImg-box">
            <img v-if="betObj.AwayTeamImg" :src="betObj.AwayTeamImg" />
            <img v-else src="@/assets/instead_logo1.png" alt="">
            <p>{{ betObj.AwayTeam }}</p>
          </div>
        </div>
        <div class="activities-bet-vsImg-bottom">{{ playList.Position }}</div>
      </div>
      <div class="bet-block">
        <div class="bet-block-box">
          <div class="bet-block-box-title">{{ $t('Odds') }}</div><!--赔率-->
          <div class="odds">
            <p>{{ playList.Position }}</p>
            <p class="blue">{{ playList.OddsValue }}</p>
          </div>
        </div>
        <div class="bet-block-box">
          <div class="bet-block-box-title-wrap">
            <div class="bet-block-box-title">{{ $t("Bet") }}</div><!--赔率-->
            <div class="bet-block-box-tips">{{ $t('TheMaximumBetAmount') }}【{{ betObj.MaxDeposit }}】</div>
            <!-- <div class="bet-block-box-tips" v-if="isOverMaxBetNum">超過最大可投注金額</div> -->
          </div>
          <input type="text" v-model="betNum" />
          <div class="bet-num-select">
            <div
              class="bet-num-select-box"
              :class="{ 'bet-num-select-focus': betNumSelectIndex == index }"
              v-for="(num, index) in betNumSelect"
              @click="selectBetNum(num, index)"
            >
              {{ num }}
            </div>
          </div>
        </div>
        <div class="bet-block-box">
          <div class="bet-block-box-title-wrap">
            <div class="bet-block-box-title">{{ $t("ExpectedProfit") }}</div><!--预计盈利-->
          </div>
          <input type="text" v-model="expectedProfit" />
        </div>
      </div>
    </div>
    <div class="activities-bet-btn" @click="bet()">{{ $t("Confirm") }}</div>
  </div>
</template>
<script>
import back from "@/components/Botton/back.vue";
import {
  apiGetClubGamblingBetInfo,
  apiClubGamblingBet
} from "@/api/ClubGamblings.js";
export default {
  components: {
    back
  },
  data() {
    return {
      uName: "",
      clubGamblingId: "",
      betObj: [],
      playList: "",
      betNum: "",
      betNumSelect: [200, 500, 1000, 2000, 5000, this.$t("MaximumAmount")],
      betNumSelectIndex: undefined,
      expectedProfit: undefined,
      isOverMaxBetNum: false,
    };
  },
  watch: {
    betNum: function(num) {
      if (num > this.betObj.MaxDeposit) {
        let vm = this;
        const m = vm.$message({
          message: this.$t("ExceedsThMaximumAmount"),
          duration: 3000,
          type: "warning",
          center: true
        });
        setTimeout(() => m.close(), 2000);
        this.betNum = 0;
        this.expectedProfit = 0;
      } else {
        this.expectedProfit = (this.betNum * (this.playList.OddsValue - 1)).toFixed(1);
      }
    }
  },
  created() {
    this.getBetId();
    this.getBetInfo();
  },
  mounted() {},
  methods: {
    // 獲取投注id 供API使用
    async getBetId() {
      this.uName = localStorage.getItem("uname");
      this.clubGamblingId = localStorage.getItem("betId");
    },
    // 取得投注資訊
    async getBetInfo() {
      let data = {
        ClubGamblingId: this.clubGamblingId
      };
      await apiGetClubGamblingBetInfo(data, true).then(res => {
        if(Math.abs(res.Code) >= 600) {
          let vm = this;
          const m = vm.$message({
            message: res.Message,
            duration: 3000,
            type: "error",
            center: true
          });
          setTimeout(() => m.close(), 2000);
          return;
        } else {
          this.betObj = res.Data;
          this.playList = res.Data.PlayList[0];
        }
      });
    },
    // 選擇投注金額
    selectBetNum(num, index) {
      this.betNum = num;
      this.betNumSelectIndex = index;

      // 预计盈利
      this.expectedProfit = (this.betNum * this.playList.OddsValue).toFixed(1);
      if (num == "最大金额") {
        this.betNum = this.betObj.MaxDeposit;
        this.expectedProfit = (this.betNum * (this.playList.OddsValue - 1)).toFixed(1);
      }
    },

    // 下注
    bet() {
      if (this.betNum > this.betObj.MaxDeposit) {
        let vm = this;
        const m = vm.$message({
          message: this.$t("betAmountNotMatch"),
          duration: 3000,
          type: "error",
          center: true
        });
        setTimeout(() => m.close(), 2000);
        return;
      }
      let data = {
        UName: this.uName,
        Amount: this.betNum,
        ClubGamblingId: this.clubGamblingId
      };
      apiClubGamblingBet(data, true).then(res => {
        if(Math.abs(res.Code) >= 600) {
          let vm = this;
          const m = vm.$message({
            message: res.Message,
            duration: 3000,
            type: "error",
            center: true
          });
          setTimeout(() => m.close(), 2000);
          return;
        } else {
          if (res.Data) {
            let vm = this;
            const m = vm.$message({
              message: this.$t("BettingSuccess"),
              duration: 3000,
              type: "success",
              center: true
            });
            setTimeout(() => {
              m.close();
              this.$router.push("/myClub");
            }, 750);
            return;
          } else {
            let vm = this;
            const m = vm.$message({
              message: res.Message,
              duration: 3000,
              type: "error",
              center: true
            });
            setTimeout(() => m.close(), 2000);
            return;
          }
          
        }
      });
    }
  }
};
</script>

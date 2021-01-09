<template>
  <div class="initiate-activities">
    <div class="initiate-activities-header">
      <div class="initiate-activities-header-wrap">
        <back class="back-icon img-he"></back>
        <h3>{{ $t("Initiateactivities") }}</h3>
        <!--发起活动-->
      </div>
    </div>

    <div class="initiate-activities-content">
      <div class="initiate-activities-vsImg">
        <div class="initiate-activities-vsImg-top">
          <div class="initiate-activities-vsImg-box">
            <img  v-if="betObj.HomeTeamImg" :src="betObj.HomeTeamImg" />
            <img v-else src="@/assets/instead_logo1.png" alt="" class="sport-main-collapse-img">
            <p>{{ betObj.HomeTeam }}</p>
          </div>
          <div class="initiate-activities-vs">VS</div>
          <div class="initiate-activities-vsImg-box">
            <img v-if="betObj.AwayTeamImg" :src="betObj.AwayTeamImg" />
            <img v-else src="@/assets/instead_logo1.png" alt="" class="sport-main-collapse-img">
            <p>{{ betObj.AwayTeam }}</p>
          </div>
        </div>
        <div class="initiate-activities-vsImg-bottom-wrap">
          <div class="initiate-activities-odds-btn" :class="{ 'odds-btn-focus': oddsIndex == index }" @click="clickOdds(index, item)" v-for="(item, index) in betObj.PlayList">
            {{ item.Position }}
          </div>
        </div>
      </div>
      <div class="bet-block">
        <div class="bet-block-box">
          <div class="bet-block-box-title">{{ $t('RecommendedOdds') }}</div><!--推荐赔率-->
          <div class="odds-wrap">
            <div class="odds" v-for="(item, index) in betObj.PlayList">
              <p>{{ item.Position }}</p>
              <p class="blue">{{ item.OddsValue }}</p>
            </div>
            <!-- <div class="odds">
              <p>{{ betObj.tieOdds }}</p>
              <p class="blue">{{ betObj.awayOoddNum }}</p>
            </div>
            <div class="odds">
              <p>{{ betObj.awayOdds }}</p>
              <p class="blue">{{ betObj.tieOddNum }}</p>
            </div> -->
          </div>
        </div>
        <div class="bet-block-box">
          <div class="bet-block-box-title">
            <p>{{ $t('InitiationOdds') }}</p><!--发起赔率-->
            <div class="alerts" v-if="isBetNum">( {{ $t('OddsRange') }}{{betObj.MinOddsValue}}~{{betObj.MaxOddsValue}} )</div><!--賠率範圍-->
          </div>
          <el-input type="number" v-model="betNum" :placeholder='$t("PleaseEnterTheOdds")'></el-input>
        </div>
        <div class="bet-block-box">
          <div class="bet-block-box-title">
            <p>{{ $t('CashPledge') }}</p><!--押金-->
            <div class="alerts" v-if="isDeposit">( {{ $t('DepositRange') }}{{betObj.MinDeposit}}~{{betObj.MaxDeposit}} )</div><!--押金範圍-->
          </div>
          <!-- <input type="text" v-model="deposit" /> -->
          <el-input type="number" v-model="deposit" @change="validateDeposit" :placeholder="$t('EnterDeposit')"></el-input>
        </div>
        <div class="bet-block-box">
          <div class="bet-block-box-title">{{ $t("ExpectedProfit") }}</div><!--预计盈利-->
          <input type="text" v-model="expectedProfit" disabled="disabled"/>
        </div>
        <div class="bet-block-box">
          <div class="bet-block-box-title">{{ $t('HandlingCharge') }}</div><!--手续费-->
          <input type="text" v-model="handlingCharge" disabled="disabled"/>
        </div>
      </div>
    </div>
    <div class="initiate-activities-btn" @click="isFancyBoxOpen=true">{{ $t("Confirm") }}</div>
    <transition name="fade">
		  <model v-if="isFancyBoxOpen"></model>
	  </transition>
	  <transition name="fade">
      <div class="fancy-box" v-if="isFancyBoxOpen">
        <img src="../../assets/club/ticket-header.png" alt="">
        <div class="fancy-box-content">
          <p>{{ $t('SureToCreateThisEvent') }}?</p>
        </div>
        <div class="fancy-box-btn">
          <div class="fancy-box-btn-confirm" @click="initiate()" :disabled="isClickTwice">{{ $t('Confirm') }}</div>
          <div class="fancy-box-btn-cancel" @click="isFancyBoxOpen = !isFancyBoxOpen">{{ $t('Cancel') }}</div>
        </div>
      </div>
	  </transition>
  </div>
</template>
<script>
import back from "@/components/Botton/back.vue";
import { apiGetClubGamblingMatchInfo, apiAddClubGambling } from "@/api/ClubGamblings.js";
import model from "@/components/model";
export default {
  components: {
    back,
    model
  },
  data() {
    return {
      betObj: [],
      oddsIndex: undefined,
      // 發起賠率文字
      betInfo: 0,
      // 賠率
      betNum: "",
      // 押金
      deposit: "",
      // 預計盈利
      expectedProfit: 0,
      // 手續費
      handlingCharge: 0,
      chargeThreshold: undefined, // 手續費判斷標準
      uName: "",
      clubId: undefined,
      matchItemId: undefined,
      playId: undefined,
      betPosition: "",
      isBetNum: false,
      isDeposit: false,
      isClickTwice: false,
      isFancyBoxOpen: false
    };
  },
    watch: {
    betNum: function() {
      this.betNum = this.betNum * 1 ;
      this.deposit = this.deposit * 1 ;
      this.validateBetNum();
    },
    betInfo: function() {
      this.betNum = this.betNum * 1 ;
      this.deposit = this.deposit * 1 ;
      this.betNum - 1 <= 0 ? this.expectedProfit = 0 : this.expectedProfit = (this.deposit / (this.betNum - 1)).toFixed(2);
      // this.expectedProfit = (this.deposit / (this.betNum - 1)).toFixed(2);
    },
    deposit: function() {
      this.betNum = this.betNum * 1 ;
      this.deposit = this.deposit * 1 ;
      this.betNum - 1 <= 0 ? this.expectedProfit = 0 : this.expectedProfit = (this.deposit / (this.betNum - 1)).toFixed(2);
      // this.expectedProfit = (this.deposit / (this.betNum - 1)).toFixed(2);
      this.getHandlingCharge();
    },
  },
  created() {
    this.getMatchItemId().then(() => {
      this.getMatchInfo();
    })
  },
  methods: {
    // 讀取matchItemId
    async getMatchItemId() {
      this.uName = localStorage.getItem("uname");
      this.clubId = localStorage.getItem("ClubId");
      this.matchItemId = localStorage.getItem("matchItemId");
    },

    // 取得發起活動的賽事資訊
    async getMatchInfo() {
      let data = {
        MatchItemId: this.matchItemId
      };
      await apiGetClubGamblingMatchInfo(data, true).then(res => {
        this.betObj = res.Data;
      });
    },
    // 選擇勝平負
    clickOdds(num, item) {
      this.oddsIndex = num;
      this.betNum = item.OddsValue;
      this.betInfo = item.Position + item.OddsValue; // 發起賠率input值
      
      this.playId = item.PlayId;
      this.betPosition = item.Position;
      if(this.deposit == 0) {
        this.isDeposit = true;
      }
    },

    // 驗證發起賠率
    validateBetNum() {
      this.betNum = this.betNum * 1 ;
      this.deposit = this.deposit * 1 ;
      if (this.betNum <= this.betObj.MaxOddsValue && this.betNum >= this.betObj.MinOddsValue) {
        // this.expectedProfit = (this.deposit / (this.betNum - 1)).toFixed(2);
        this.betNum - 1 <= 0 ? this.expectedProfit = 0 : this.expectedProfit = (this.deposit / (this.betNum - 1)).toFixed(2);
        this.isBetNum = false;
      } else {
        this.betNum = 0;
        this.isBetNum = true;
      }
    },

    // 驗證押金
    validateDeposit() {
      if (this.deposit <= this.betObj.MaxDeposit && this.deposit >= this.betObj.MinDeposit) {
        this.expectedProfit = (this.deposit / (this.betNum - 1)).toFixed(2);
        // 計算手續費
        this.getHandlingCharge();
        this.isDeposit = false;
      } else {
        this.deposit = 0;
        this.handlingCharge = 0;
        this.isDeposit = true;
      }
    },

    // 手續費
    getHandlingCharge() {
      if (this.deposit >= this.betObj.ChargeThreshold) {
        this.handlingCharge = (this.deposit * this.betObj.HandlingCharge).toFixed(2);
      } else {
        this.handlingCharge = this.betObj.FixedHandlingCharge;
      }
    },

    // 發起
    initiate() {
      if (this.isBetNum == true || this.isDeposit == true || this.betNum == 0 || this.deposit == 0) {
        let vm = this;
        const m = vm.$message({
          message: this.$t('EnterCorrectValue'),
          duration: 3000,
          type: "error",
          center: true
        });
        this.isFancyBoxOpen = false;
        setTimeout(() => m.close(), 2000);
        return;
      } else {
        if (this.isClickTwice == false) {
          let data = {
            MatchItemId: this.matchItemId,
            PlayId: this.playId,
            BetPosition: this.betPosition,
            HandlingCharge: this.handlingCharge,
            OddsValue: this.betNum,
            Deposit: this.deposit,
            UName: this.uName
          };
          apiAddClubGambling(data, true).then(res => {
            if(Math.abs(res.Code) >= 600) {
              let vm = this;
              const m = vm.$message({
                message: res.Message,
                duration: 3000,
                type: "error",
                center: true
              });
              setTimeout(() => m.close(), 2000);
            } else {
              let vm = this;
              const m = vm.$message({
                message: res.Message,
                duration: 3000,
                type: "success",
                center: true
              });
              setTimeout(() => {
                m.close();
                this.$router.push("/ClubActivities");
              }, 2000);
            }
            this.isFancyBoxOpen = false;
          });
          this.isClickTwice = true;
        }
      }
    }
  },
};
</script>

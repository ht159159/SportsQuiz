<template>
  <div class="initiator-result">
    <div class="initiator-result-header">
      <div class="initiator-result-header-wrap">
        <back class="back-icon img-he"></back>
        <h3>{{ $t("InitiatorResults") }}</h3>
        <!--发起活动-->
      </div>
    </div>

    <div class="initiator-result-content">
      <div v-if="!noData">
        <div v-if="resultData.length <= 0" class="sipeLoading" style="font-size: .24rem;text-align:center;line-height: .48rem" >{{ $t("WipeLoading") }}</div>
        <div class="result-box" v-for="item in resultData">
          <div class="result-box-title">
            <span>{{ item.HomeTeam }}</span>
            <p class="result-box-title-vs">VS</p>
            <span>{{ item.AwayTeam }}</span>
          </div>

          <div class="result-box-content">
            <!--內容-->
            <!-- <div class="result-box-content-text">
              <div
                class="content-box"
                :class="{ unsettlementContentBox: item.SettlementStatus == 0 }"
              >
                <span>{{ $t('Content') }}:</span>
                <p class="orange">{{ item.BetContent }}</p>
              </div>
              <div class="content-tips" v-if="item.SettlementStatus == 1"> -->
                <!--胜-->
                <!-- {{ item.Position }}{{ $t("Win") }}
              </div>
            </div> -->

            <!--賠率-->
            <!-- <div class="result-box-content-text">
              <span>{{ $t('Odds') }}:</span>
              <p>{{ item.OddsValue }}</p>
            </div> -->

            <!--押金-->
            <!-- <div class="result-box-content-text">
              <span>{{ $t('CashPledge') }}:</span>
              <p>{{ item.Deposit }}</p>
            </div> -->

            <!--暱稱-->
            <div class="result-box-content-text">
              <span>{{ $t('Nickname') }}:</span>
              <p v-if="item.NickName !== null">{{ item.NickName }}</p>
              <p v-if="item.NickName == null">{{ $t('Unnamed') }}</p> <!--未命名-->
            </div>

            <!--手續費
            <div class="result-box-content-text">
              <span>{{ $t('HandlingCharge') }}:</span>
              <p>{{ item.HandlingCharge }}</p>
            </div>
            -->
            <!--下注金額-->
            <div class="result-box-content-text">
              <span>{{ $t('BetAmount') }}:</span>
              <p>{{ item.BetAmount }}</p>
            </div>

            <!--發起時間-->
            <div class="result-box-content-text">
              <span>{{ $t('Starting time') }}:</span>
              <p>{{ item.CreateTime.slice(0, item.CreateTime.indexOf("T")) }}</p>
            </div>

            <!--預計盈利-->
            <div class="result-box-content-text">
              <span>{{ $t('ExpectedProfit') }}:</span>
              <p>{{ item.EstimatedWinIntegral }}</p>
            </div>
            
            <!--盈利-->
            <div class="result-box-content-text">
              <span>{{ $t('Profit') }}:</span>
             <p class="red">{{ item.WinIntegral }}</p>
            </div>
          </div>

          <div class="result-box-footer">
            <div class="result-box-footer-result">
              <!--結果-->
              <span>{{ $t("Result") }} :</span>
              <p>{{ item.MatchResult }}</p>

              <!--勝-->
              <!-- <p
                class="green"
                v-show="item.SettlementStatus == 2 && item.WinIntegral > 0"
              >
                {{ $t("Win") }}
              </p> -->

              <!--負-->
              <!-- <p
                class="green"
                v-show="item.SettlementStatus == 2 && item.WinIntegral < 1"
              >
                {{ $t("Lose") }}
              </p> -->

              <!--已结算-->
              <!-- <p class="green" v-show="item.SettlementStatus == 2">{{ $t('Closed') }}</p> -->
            </div>
            <div class="result-box-footer-result">
              <span>{{ $t('BettingResult') }} :</span>
              <!--結果 betstatus = 0未結算; betstatus = 2勝; betstatus = 4負; betstatus = 6失效-->
              <p class="blue" v-if="item.BetResult == 0">{{ $t('Unsettlement') }}</p>
              <p class="green" v-if="item.BetResult == 2">{{ $t("Win") }}</p>
              <p class="green" v-if="item.BetResult == 4">{{ $t("Lose") }}</p>
              <p class="blue" v-if="item.BetResult == 6">{{ $t("Cancel") }}</p>
            </div>
          </div>
          <!-- 未結算 -->
          <div v-if="lang == 'zh-CN'  && item.SettlementStatus ==  0 " class="no-result"></div>
            <!-- 英文版 -->
          <div v-if="lang == 'en-US'  && item.SettlementStatus ==  0 " class="no-result-US"></div>
            <!-- 繁中版 -->
          <div v-if="lang == 'zh-TW'  && item.SettlementStatus ==  0 " class="no-result"></div>

          <!-- 已結算 -->
            <!-- 簡中版 -->
          <div v-if="lang == 'zh-CN' && item.SettlementStatus == 2" class="have-result"></div>
            <!-- 英文版 -->
          <div v-if="lang == 'en-US' && item.SettlementStatus == 2" class="have-result-US"></div>
            <!-- 繁中版 -->
          <div v-if="lang == 'zh-TW' && item.SettlementStatus == 2" class="have-result"></div>

          <!-- 失效 -->
            <!-- 簡中版 -->
          <div v-if="lang == 'zh-CN' && item.SettlementStatus > 4 " class="invalid-CN"></div>
            <!-- 英文版 -->
          <div v-if="lang == 'en-US' && item.SettlementStatus > 4 " class="invalid-US"></div>
            <!-- 繁中版 -->
          <div v-if="lang == 'zh-TW' && item.SettlementStatus > 4 " class="invalid-TW"></div>
        </div>
      </div>
				<!-- 【 暂无数据 】 -->
			<div class="no-data" v-else>
				<p>{{ $t("NoOneToAttend") }}</p>
			</div>

    </div>
  </div>
</template>
<script>
import back from "@/components/Botton/back.vue";
import {
  apiGetMyClubGamblingBetResultList,
  apiGetClubGamblingBetResult
} from "@/api/ClubGamblings.js";
export default {
  components: {
    back
  },
  created() {
    this.lang = JSON.parse(localStorage.getItem("lang")).tag;
    if ( localStorage.getItem("singleResult") == undefined || localStorage.getItem("singleResult") == null || localStorage.getItem("singleResult") == "false") {
      this.getMyBetResult();
    } else {
      this.betId = localStorage.getItem("betId");
      this.singleBetResult();
    }
  },
  data() {
    return {
      lang: "",
      resultData: [],
      betId: "",
      noData: false
    };
  },
  methods: {
    // 所有發起人賽果列表
    getMyBetResult() {
      this.resultData = [];
      let data = {};
      apiGetMyClubGamblingBetResultList(data, true).then(res => {
        if(Math.abs(res.Code) >= 600) {
          let vm = this;
          const m = vm.$message({
            message: res.Message,
            duration: 3000,
            type: "error",
            center: true
          });
          setTimeout(() => {
            m.close();
            this.$router.push("/myClub");
          }, 2000);
          return;
        }
        this.resultData = res.Data;
        this.resultData.length <= 0 ? this.noData = true : this.noData = false;
      });
    },

    // 單一點擊查看
    singleBetResult() {
      this.resultData = [];
      let data = {
        clubGamblingId: this.betId
      };
      apiGetClubGamblingBetResult(data, true).then(res => {
        if(Math.abs(res.Code) >= 600) {
          let vm = this;
          const m = vm.$message({
            message: res.Message,
            duration: 3000,
            type: "error",
            center: true
          });
          setTimeout(() => {
            m.close();
            this.$router.push("/myClub");
          }, 2000);
          return;
        }
        this.resultData = res.Data;
        this.resultData.length <= 0 ? this.noData = true : this.noData = false;
      });
    }
  },
  destroyed() {
    localStorage.setItem("singleResult", false);
  }
};
</script>

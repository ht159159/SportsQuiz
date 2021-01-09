<template>
  <div class="bet-result">
    <div class="bet-result-header">
      <div class="bet-result-header-wrap">
        <back class="back-icon img-he"></back>
        <h3>{{ $t('Results') }}</h3>
        <!--发起活动-->
      </div>
    </div>

    <div class="bet-result-content">
      <div class="initiator-result-content">
        <div class="result-box" v-for="item in resultData">
          <div class="result-box-title">
            <span>{{ item.HomeTeam }}</span>
            <p class="result-box-title-vs">VS</p>
            <span>{{ item.AwayTeam }}</span>
          </div>

          <div class="result-box-content">
            <!--內容-->
            <div class="result-box-content-text">
              <div
                class="content-box"
                :class="{ unsettlementContentBox: item.SettlementStatus == 0 }"
              >
                <span>{{ $t('Content') }}:</span>
                <p class="orange">{{ item.BetContent }}</p>
              </div>
              <div class="content-tips" v-if="item.SettlementStatus == 1">
                {{ item.Position }}{{ $t('Win') }}
              </div>
            </div>

            <!--賠率-->
            <div class="result-box-content-text">
              <span>{{ $t('Odds') }}:</span>
              <p>{{ item.OddsValue }}</p>
            </div>

            <!--投注-->
            <div class="result-box-content-text">
              <span>{{ $t("BetAmount") }}:</span>
              <p>{{ item.BetAmount }}</p>
            </div>

            <!--下注時間-->
            <div class="result-box-content-text">
              <span>{{ $t("BettingTime") }}:</span>
              <p>
                {{ item.CreateTime.slice(0, item.CreateTime.indexOf("T")) }}
              </p>
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
              <span>{{ $t("Result") }}:</span>
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
                v-show="item.SettlementStatus == 2 && item.WinIntegral < 0"
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
        <div style="font-size: .24rem;text-align:center;line-height: .48rem" v-if="isLoading">
          {{ $t('WipeLoading') }}...  <!-- 【 加载中… 】 -->
        </div>
      </div>

      <div class="no-Data" v-if="isNoData">
        <p>{{ $t("NoData") }}</p>  <!-- 【 暂无数据 】 -->
      </div>
    </div>
  </div>
</template>
<script>
import back from "@/components/Botton/back.vue";
import {
  apiGetClubGamblingBetResultList,
  apiGetClubGamblingBetResult
} from "@/api/ClubGamblings.js";

export default {
  components: {
    back
  },
  data() {
    return {
      lang: "",
      resultData: [],
      betId: "",
      isLoading: false,
      isNoData: false,
    };
  },
  created() {
    this.lang = JSON.parse(localStorage.getItem("lang")).tag;
    if ( localStorage.getItem("singleResult") == undefined || localStorage.getItem("singleResult") == null || localStorage.getItem("singleResult") == "false") {
      this.getBetResult();
    } else {
      this.betId = localStorage.getItem("betId");
      this.singleBetResult();
    }
  },
  methods: {
    getBetResult() {
      // 所有賽果列表()
      this.isLoading = true;
      apiGetClubGamblingBetResultList("", true).then(res => {
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
        } else if (res.Data.length == 0) {
          this.isLoading = false;
          this.isNoData = true;
        } else {
          this.isLoading = false;
          this.isNoData = false
          this.resultData = res.Data;
        }
      });
    },

    // 單一點擊查看
    singleBetResult() {
      let data = {
        clubGamblingId: this.betId
      };
      this.isLoading = true;
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
        }else if (res.Data.length == 0) {
          this.isLoading = false;
          this.isNoData = true;
        } else {
          this.isLoading = false;
          this.isNoData = false
          this.resultData = res.Data;
        }
      });
    }
  },
  destroyed() {
    localStorage.setItem("singleResult", false);
  }
};
</script>

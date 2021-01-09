<template>
  <div class="club-match-result-detail">
    <div class="club-match-result-detail-header">
      <div class="club-match-result-detail-header-wrap">
        <back class="back-icon img-he"></back>
        <h3>{{ $t('Results') }}</h3>
        <!--赛果-->
      </div>
    </div>
    <div class="club-match-result-content">
      <div class="result-box" v-for="item in matchResultDetailObj" v-if="noData == false">
        <div class="result-box-title">
          <span>{{ item.HomeTeam }}</span>
          <p class="result-box-title-vs">VS</p>
          <span>{{ item.AwayTeam }}</span>
        </div>

        <div class="result-box-content">
          <div class="result-box-content-text">
            <span>{{ $t('BettingTime') }}:</span><!--下注時間-->
            <p>{{ item.BetTime }}</p>
          </div>

          <div class="result-box-content-text">
            <span>{{ $t('BetNumber') }}:</span><!--下注單號-->
            <p>{{ item.BetLogId }}</p>
          </div>
          <p class="result-box-content-text">{{ $t('BetContent') }}:</p><!--下注內容-->
          <p class="result-box-content-text">{{ item.BetContent }}</p>
        </div>

        <!-- <div class="result-box-footer">
          <div class="result-box-footer-result">
            <span>{{ $t('Result') }}:</span>結果
            <p v-if="item.SettlementStatus == 0">{{ $t('Unsettlement') }}</p>未结算
            <p v-if="item.SettlementStatus == 1">{{ $t('Closed') }}</p>下注已结算
            <p v-if="item.SettlementStatus == 2">{{ $t('IntegralClosed') }}</p>积分已结算
          </div>
          <div class="result-box-footer-integral">
            <div class="integral-wrap">
              <p>{{ $t('BettingCoins') }}:</p>下注金币
              <p class="integral-wrap-value">{{ item.BetIntegral }}</p>
            </div>
            <div class="integral-wrap">
              <p>{{ $t('ValidBet') }}:</p>有效竞猜
              <p class="integral-wrap-value">{{ item.ValidIntegral }}</p>
            </div>
            <div class="integral-wrap">
              <p>{{ $t('WinOfCoins') }}:</p>赢得金币
              <p class="integral-wrap-value">{{ item.WinIntegral }}</p>
            </div>
          </div>
        </div> -->
            <!-- 未結算 -->
            <img
              class="have-result"
              :src="require('@/assets/club/no-result.png')"
              v-if="item.SettlementStatus == 0 && lang == 'zh-CN'"
            />
            <!-- 未結算英文版 -->
            <img
              class="have-result"
              :src="require('@/assets/club/no-result-US.png')"
              v-if="item.SettlementStatus == 0 && lang == 'en-US'"
            />
            <!-- 未結算繁中版 -->
            <img
              class="have-result"
              :src="require('@/assets/club/no-result.png')"
              v-if="item.SettlementStatus == 0 && lang == 'zh-TW'"
            />
            <!-- 贏 -->
            <img
              class="have-result"
              :src="require('@/assets/challenge/record_03.png')"
              v-if="item.SettlementStatus == 2 && lang == 'zh-CN'"
            />
            <!-- 贏英文版 -->
            <img
              class="have-result"
              :src="require('@/assets/challenge/record_03_US.png')"
              v-if="item.SettlementStatus == 2 && lang == 'en-US'"
            />
            <!-- 贏繁中版 -->
            <img
              class="have-result"
              :src="require('@/assets/challenge/record_03_TW.png')"
              v-if="item.SettlementStatus == 2 && lang == 'zh-TW'"
            />
            <!-- 輸 -->
            <img
              class="have-result"
              :src="require('@/assets/challenge/record_02_03.png')"
              v-if="item.SettlementStatus == 4 && lang == 'zh-CN'"
            />
            <!-- 輸 英文版 -->
            <img
              class="have-result"
              :src="require('@/assets/challenge/record_02_03_US.png')"
              v-if="item.SettlementStatus == 4 && lang == 'en-US'"
            />
            <!-- 輸繁中版 -->
            <img
              class="have-result"
              :src="require('@/assets/challenge/record_02_03_TW.png')"
              v-if="item.SettlementStatus == 4 && lang == 'zh-TW'"
            />
            <!-- 失效 -->
            <img
              class="have-result"
              :src="require('@/assets/challenge/failIcon.png')"
              v-if="item.SettlementStatus == 6 && lang == 'zh-CN'"
            />
            <!-- 失效英文版 -->
            <img
              class="have-result"
              :src="require('@/assets/challenge/failIcon_US.png')"
              v-if="item.SettlementStatus == 6 && lang == 'en-US'"
            />
            <!-- 失效繁中版 -->
            <img
              class="have-result"
              :src="require('@/assets/challenge/failIcon.png')"
              v-if="item.SettlementStatus == 6 && lang == 'zh-TW'"
            />

        <!-- 簡中版已結算 -->
        <!-- <div v-if="lang == 'zh-CN'" :class="[item.SettlementStatus > 0 ? 'have-result' : 'no-result']"></div> -->
        <!-- 英文版已結算 -->
        <!-- <div v-if="lang == 'en-US'" :class="[item.SettlementStatus > 0 ? 'have-result-US' : 'no-result-US']"></div> -->
        <!-- 繁中版已結算 -->
        <!-- <div v-if="lang == 'zh-TW'" :class="[item.SettlementStatus > 0 ? 'have-result' : 'no-result']"></div> -->
      </div>
      <li style="font-size: .24rem;text-align:center;line-height: .48rem" v-if="push">
        {{ $t('WipeLoading') }}...  <!-- 【 加载中… 】 -->
      </li>
      <div class="no-data" v-if="noData == true">
        <p>{{ $t("NoData") }}</p>
        <!-- 【 暂无数据 】 -->
      </div>
    </div>
  </div>
</template>
<script>
import back from "@/components/Botton/back.vue";
import { apiGetActivityBetResult } from "@/api/ClubActivitys.js";
export default {
  components: {
    back
  },
  data() {
    return {
      lang: "",
      ActiveId: "",
      matchResultDetailObj: [],
      noData: false,
      push: false,
    };
  },
  created() {
    localStorage.setItem("categoryIndex", 1);
    this.lang = JSON.parse(localStorage.getItem("lang")).tag;
    this.ActiveId = localStorage.getItem("AcvtiveId");
    this.getResultDetail();
  },
  methods: {
    getResultDetail() {
      this.push = true;
      let data = {
        ClubActivityId: this.ActiveId
      };
      apiGetActivityBetResult(data, true).then(res => {
        if (Math.abs(res.Code) >= 600) {
          this.push = false;
          this.noData = true;
          let vm = this;
          const m = vm.$message({
            message: res.Message,
            duration: 3000,
            type: "error",
            center: true
          });
          setTimeout(() => m.close(), 2000);
        }
        else if (res.Data.length > 0) {
          this.noData =false;
          this.push = false;
          this.matchResultDetailObj = res.Data;
        } 
      });
    }
  },
  beforeDestroy() {
    localStorage.setItem("categoryIndex", 1);
  }
};
</script>

<template>
  <div class="Crecord">
    <div class="Cmatch-head">
      <back class="back-icon"></back>
      <div class="title">{{ $t("ChallengeRecord") }}</div>
    </div>
    <div class="Crecord-main">
      <!-- <div class="Crecord-main-time">
        <i class="Crecord-main-time-icon"></i>
        <span>{{ $store.state.match.time }}</span>
      </div> -->
      <!-- 每次比赛 -->
      <div
        class="Crecord-main-items"
        v-for="(item, index) in match"
        :key="index"
      >
        <div class="Crecord-main-items-title">
          {{ $t("Round") }}{{ item.CurLevel }}
          <span class="title-time">
            {{ item.CreateTime.slice(0, item.CreateTime.indexOf(" ")) }}
            {{ item.CreateTime.slice(item.CreateTime.indexOf(" ") + 1) }}
          </span>
        </div>
        <div class="Crecord-main-items-content">
          <!-- 每次投注 -->
          <div
            class="Crecord-main-items-content-match"
            v-for="(item1, i) in item.Matchlist"
            :key="i"
          >
            <div class="Crecord-main-items-content-name">
              <!-- <span class="Crecord-main-items-content-name-home">
              
              </span>
              <span class="Crecord-main-items-content-name-vs">vs</span>
              <span class="Crecord-main-items-content-name-away">{{
                item1.Team.slice(item1.Team.indexOf("S") + 1)
              }}</span> -->
              <div class="sContent">
                <p class="hong">
                  <span class="hong-span">
                    {{ item1.Team.slice(0, item1.Team.indexOf("V")) }}</span
                  >
                </p>
                <img class="imgVs" src="@/assets/myself/vsgame_03.png" alt="" />
                <p class="lan">
                  <span class="lan-span">{{
                    item1.Team.slice(item1.Team.indexOf("S") + 1)
                  }}</span>
                </p>
              </div>
            </div>
            <div class="Crecord-main-items-content-model">
              {{ $t("TypesPlay") }} : {{ item1.Play }}
            </div>
            <div class="Crecord-main-items-content-result">
              {{ $t("BetInformation") }} : <span v-if="item1.BetStatus == 0">{{ $t("Unsettlement") }}</span>
              <span v-if="item1.BetStatus == 1">{{ $t("WaitingForConfirmation") }}</span>
              <span v-if="item1.BetStatus == 2">{{ $t("Win") }}</span>
              <span v-if="item1.BetStatus == 4">{{ $t("Lose") }}</span>
              <span v-if="item1.BetStatus == 6">{{ $t("BetVoid") }}</span>
              <span v-if="item1.BetStatus == 8">{{ $t("CancelTheOrder") }}</span>
              {{ $t("YourChoiceIs") }} "{{ item1.betValue }}"
            </div>
            <div class="Crecord-main-items-content-time">
              {{ $t("CompetingTime") }} :
              {{ item1.MatchStime.slice(0, item1.MatchStime.indexOf("T")) }}
              <!-- {{ item1.MatchStime.slice(item1.MatchStime.indexOf("T") + 1) }} -->
            </div>
          </div>
          <!-- 结果 -->
          <!-- <div class="Crecord-main-items-content-ceng">
            第{{ item.CurLevel }}关:
            <span v-if="item.Status == 1" class="success">获胜</span
            ><span v-if="item.Status == 2" class="fail">失败</span
            ><span v-if="item.Status == 3">未结算</span>
          </div> -->
          <div class="Crecord-main-items-content-gold">
            {{ $t("TotallyObtained") }} <span>{{ item.Matchlist[0].RewardType }}</span> :
            <span class="success" v-if="item.Status == 1">{{
              item.Matchlist[0].RewardValue
            }}</span>
            <span v-if="item.Status == 2">
              {{ item.Matchlist[0].RewardValue }}</span
            >
            <span v-if="item.Status == 3">0</span>
            <span v-if="item.Status == 4">{{ item.Matchlist[0].RewardValue }}</span>
          </div>
          <!-- 贏 -->
          <div class="bgc1" :class="[lang == 'zh-CN' ? 'bgc1-CN' : lang == 'en-US' ? 'bgc1-US' : 'bgc1-TW']" v-if="item.Status == 1">
            <p>{{ $t("Round") }}{{ item.CurLevel }}{{ $t("Successful") }}</p>
          </div>

          <!-- 輸 -->
          <div class="bgc" :class="[lang == 'zh-CN' ? 'bgc-CN' : lang == 'en-US' ? 'bgc-US' : 'bgc-TW']" v-if="item.Status == 2">
            <p>{{ $t("Round") }}{{ item.CurLevel }}{{ $t("Fail") }}</p>
          </div>
          <div class="Invalidation" :class="[lang == 'zh-CN' ? 'Invalidationd-CN' : lang == 'en-US' ? 'Invalidationd-US' : 'Invalidationd-TW']" v-if="item.Status == 4">
            <p>{{ $t("Round") }}{{ item.CurLevel }}{{ $t("Invalidation") }}</p>
          </div>
        </div>
      </div>
      <div style="font-size: .24rem;text-align:center;line-height: .48rem" v-if="isLoading">
        {{ $t('WipeLoading') }}...  <!-- 【 加载中… 】 -->
      </div>
      <div class="nomatchs" v-if="isNoData">
        <p>{{ $t("NoRecord") }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import back from "../../components/Botton/back.vue";
import { apiGetChallengeMatchItemList } from "@/api/match";
export default {
  components: {
    back
  },
  created() {
    this.lang = JSON.parse(localStorage.getItem("lang")).tag;
    this.getMatchItemList();
  },
  data() {
    return {
      match: "",
      lang: "",
      isLoading: false,
      isNoData: false,
    };
  },
  methods: {
    getMatchItemList() {
      this.isLoading = true;
      let data = {
        challengeId: this.$store.state.match.ChallengeId
      };
      apiGetChallengeMatchItemList(data, true).then(res => {
        if (Math.abs(res.Code) >= 600 || res.length == 0) {
          this.isLoading = false;
          this.isNoData = true;
        } else {
          this.match = res;
          this.isNoData = false;
          this.isLoading = false;
        }
      });
    }
  }
};
</script>

<style spoced lang="scss">
.title-time {
  float: right;
  margin-top: 0.21rem; /* 11/100 */
  margin-right: 0.21rem; /* 10/100 */
}
.sContent {
  // width: 6.9rem;
  margin: 0 auto;
  position: relative;
  display: flex;
  .imgVs {
    position: absolute;
    left: 2.8rem;
    top: 0;
  }
  .hong {
    display: inline-block;
    width: 50%;
    height: 0.48rem;
    box-shadow: 1px 3px 5px #fad9db;
    font-size: 0.2rem;
    color: #fff;
    text-align: center;
    border-radius: 0.4rem;
    line-height: 0.48rem;
    background: linear-gradient(to right, #ba1825, #e22231);
    margin-top: 0.14rem;
    box-shadow: 6px 6px 6px #8c7d7f;
    .hong-span {
      font-size: 0.19rem /* 19/100 */;
    }
  }
  .lan {
    display: inline-block;
    width: 50%;
    height: 0.48rem;
    box-shadow: 1px 3px 5px #d7deeb;
    font-size: 0.2rem;
    color: #fff;
    text-align: center;
    border-radius: 0.4rem;
    line-height: 0.48rem;
    background: linear-gradient(to right, #163f8c, #0d2f6f);
    margin-top: 0.14rem;
    box-shadow: 6px 6px 6px #8c7d7f;
    .lan-span {
      font-size: 0.19rem /* 19/100 */;
    }
  }
}
</style>

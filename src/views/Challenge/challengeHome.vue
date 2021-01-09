<template>
  <div class="challenge">
    <div class="explain" v-if="ShowExplain">
      <!-- <i class='round' /> -->
      <i class="explain-x" @click="hideExplain"></i>
      <p class="rank-popup-title">{{ $t("ChallengeRules") }}</p>
      <p class="rank-popup-content">
        {{ $t("ChallengeRules1") }}<br />
        {{ $t("ChallengeRules2") }}<br />
        {{ $t("ChallengeRules3") }}
      </p>
    </div>
    <div class="challenge-head">{{ $t('ChallengeGame') }}</div>
    <div class="challenge-main">
      <i class="question" @click="showPopup" />
      <div class="challenge-main-top">
        <div class="challenge-throy"></div>
        <van-button class="challenge-button" @click="gojump()"
          ><span v-if="goOnType == 1">{{ $t('GoChallenge') }}</span>
          <span v-if="goOnType == 2">{{ $t('WaitingForStatistics') }}</span>
          <span v-if="goOnType == 3">{{ $t('ContinueToChallenge') }}</span>
          <span v-if="goOnType == 5">{{ $t('Maintain') }}...</span>
        </van-button>
      </div>
      <div class="challenge-main-history">
        <!-- <div class="history-top">历史挑战记录</div>
        <div class="history-title">
          <i class="icon-history"></i>
          <span style="margin-left:0.2rem">{{ year }}</span>
        </div>

        <div
          class="history-mouth"
          v-for="(item, index) in age"
          :key="index"
          @click="goJump(item.num)"
        >
          <p>{{ item.num }}</p>
          <p>{{ item.eng }}</p>
        </div> -->
        <div class="challenge-main-history-year">
          <!-- <van-stepper v-model="value" integer min="2019" max="2100" />
           -->
          <van-icon name="arrow-left" size="0.36rem" @click="lose" />
          <span class="challenge-main-history-year-num">{{ year }}</span>
          <van-icon name="arrow" size="0.36rem" @click="add" />
        </div>
        <!-- <router-link to="/challengegold">
          <div class="btn history-btn">累计获得金币</div>
        </router-link> -->
        <div class="Cgold-main-title">
          <div class="Cgold-main-title-left fl">{{ $t('Accumulate') }}</div>
          <div class="Cgold-main-title-mid fl">
            <p class="Cgold-main-title-mid-gold">{{ $t('Coins') }}</p>
            <p class="Cgold-main-title-mid-goldnum">{{ item.ZSumGold }}</p>
          </div>
          <div class="Cgold-main-title-right fl">
            <p class="Cgold-main-title-right-jue">{{ $t('Lottery') }}</p>
            <p class="Cgold-main-title-right-juenum">{{ item.ZSumLottery }}</p>
          </div>
        </div>
        <van-list
          class="challenge-main-history-challenge"
          @load="onLoad"
          :offset="offset"
          v-model="loading"
          :finished="finished"
          :finished-text="ftext"
        >
          <div
            class="challenge-main-history-challenge-item"
            v-for="(item, index) in match"
            :key="index"
            @click="handleChange(item.ChallengeId, index, item.CreationTime)"
          >
            <span v-if="item.Status == 0">{{ $t('Processing') }}...</span>
            <span v-else> {{ $t('The') }} {{ item.CurIndex }}{{ $t('Times') }} {{ $t('Challenge') }}</span>
            <i class="rank-arrow"></i>
          </div>
          <!-- <el-collapse
            v-model="activeNames"
            @change="handleChange(item.ChallengeId, index, item.CreationTime)"
            accordion
            v-for="(item, index) in match.Data"
            :key="index"
          >
            <el-collapse-item :name="(index + 1).toString()" v-if="match.Data">
              <template slot="title">
                <span v-if="item.Status == 0">进行中...</span>
                <span v-else> 第{{ item.CurIndex }}次挑战赛</span>
              </template>
              <div
                class="item-items"
                v-for="(item, index) in matchitem"
                :key="index"
              >
                <div
                  class="item-items-content"
                  v-for="(item1, i) in item.Matchlist"
                  :key="i"
                >
                  <div class="item-items-name">
                    <span class="item-items-name-home">
                      {{ item1.Team.slice(0, item1.Team.indexOf("V")) }}</span
                    >
                    <span class="item-items-name-vs">vs</span>
                    <span class="item-items-name-away">{{
                      item1.Team.slice(item1.Team.indexOf("S") + 1)
                    }}</span>
                  </div>
                  <div class="item-items-model">玩法 : {{ item1.Play }}</div>
                  <div class="item-items-result">
                    投注信息 : <span v-if="item1.BetStatus == 0">未结算</span>
                    <span v-if="item1.BetStatus == 1">等待确认</span>
                    <span v-if="item1.BetStatus == 2">赢</span>
                    <span v-if="item1.BetStatus == 4">输</span>
                    <span v-if="item1.BetStatus == 6">竞猜失效</span>
                    <span v-if="item1.BetStatus == 8">订单取消</span>
                    (您选择为{{ item1.betValue }})
                  </div>
                  <br />
                </div>

           
                <div class="item-items-gold">
                  共获得<span>{{ item.Matchlist[0].RewardType }}</span> :
                  <span class="success" v-if="item.Status == 1">{{
                    item.Matchlist[0].RewardValue
                  }}</span>
                  <span class="fail" v-if="item.Status == 2">
                    {{ item.Matchlist[0].RewardValue }}</span
                  >
                  <span v-if="item.Status == 3">0</span>
                </div>
                <div class="bgc1" v-if="item.Status == 1">
                  <p>第{{ item.CurLevel }}关成功</p>
                </div>
                <div class="bgc" v-if="item.Status == 2">
                  <p>第{{ item.CurLevel }}关失败</p>
                </div>
              </div>
              <div
                class="nomatchs nomatchitem"
                v-if="matchitem.length === 0"
              ></div>
            </el-collapse-item>
          </el-collapse> -->
          <div class="nomatchs" v-if="nomatchs">
             <p>{{ $t("NoRecord") }}</p>
          </div>
        </van-list>
      </div>
    </div>
    <nav-bottom ref="son"></nav-bottom>
  </div>
</template>

<script>
import NavBottom from "@/components/Main/NavBottom.vue";
import {
  apiGetChallengeIsCanGoOn,
  apiGetChallenge,
  apiGetChallengeMatchList,
  apiGetChallengeCumulativeReward,
  apiGetChallengeMatchByRandom
} from "@/api/match";
export default {
  components: {
    NavBottom
  },
  created() {
    this.getChallengeIsCanGoOn();
    this.getYear();
    this.getChallenge();
    // this.getmatch();
    this.getreward();
    // this.isHaveMatch();
  },
  data() {
    return {
      age: [
        { num: 12, eng: "January" },
        { num: 11, eng: "November" },
        { num: 10, eng: "October" },
        { num: 9, eng: "September" },
        { num: 8, eng: "August" },
        { num: 7, eng: "July" },
        { num: 6, eng: "June" },
        { num: 5, eng: "May" },
        { num: 4, eng: "April" },
        { num: 3, eng: "March" },
        { num: 2, eng: "February" },
        { num: 1, eng: "December" }
      ],
      goOnType: "",
      challengeInfo: "",
      year: "",
      value: 1,
      match: [],
      id: "",
      matchitem: "",
      activeNames: "",
      showcontent: false,
      item: "",
      offset: 10,
      loading: false,
      finished: false,
      index: 1,
      page: "",
      Jump: true,
      ftext: "",
      ShowExplain: false,
      nomatchs: false
    };
  },
  methods: {
    showPopup() {
      this.ShowExplain = true;
    },
    hideExplain() {
      this.ShowExplain = false;
    },
    initialization() {
      this.match = [];
      this.index = 1;
      this.loading = true; //下拉加载中
      this.finished = false; //下拉结束
      this.nomatchs = false;
      if (this.loading) {
        this.onLoad();
      }
    },
    onLoad() {
      this.ftext = this.$t('WipeNomore');
      let data = {
        year: this.year,
        index: this.index,
        count: 10
      };
      apiGetChallengeMatchList(data, true).then(res => {
        this.page = res.TotalPages;
        if (res.Data.length == 0) {
          this.match = "";
          this.ftext = "";
          this.finished = true;
          this.loading = false;
          this.nomatchs = true;
          return;
        }
        if (res.Data.length > 0) {
          this.index++;
          for (let i = 0; i < res.Data.length; i++) {
            this.match.push(res.Data[i]);
          }
          this.loading = false;

          if (this.page == this.index - 1) {
            this.finished = true;

            return;
          }
          return;
        }
      });
    },
    // 判断是否有比赛
    isHaveMatch() {
      apiGetChallengeMatchByRandom("", true).then(res => {
        if (res.data.Data.length == 0) {
          this.Jump = false;
        }
      });
    },

    getreward() {
      apiGetChallengeCumulativeReward("", true).then(res => {
        this.item = res;
      });
    },
    getmatch() {},
    handleChange(value, id, time) {

      this.$router.push("/challengerecord");
      this.$store.commit("upChallengeId", value);
      this.$store.commit("uptime", time);
    },
    add() {
      this.year++;

      this.initialization();
    },
    lose() {
      this.year--;

      this.initialization();
    },
    goJump(id) {
      this.$router.push(`/challengemouth/${id}`);
    },
    //挑战赛是否进行
    getChallengeIsCanGoOn() {
      apiGetChallengeIsCanGoOn("", true).then(res => {
        this.goOnType = res.GoOnType;
      });
    },
    getYear() {
      var date = new Date();
      this.year = date.getFullYear();
    },
    //获得挑战赛
    getChallenge() {
      apiGetChallenge("", true).then(res => {
        this.challengeInfo = res.availableIntegral;
      });
      this.$store.dispatch("asyncChallengeid");
      // this.$store.commit("upChallengeId", {
      //   id: this.challengeInfo.ChallengeId
      // });

      // apiGetChallengeMatchByRandom("", true).then(res => {
      // });
    },
    // IsCanBuyChallengeTicket() {
    //   let data = {
    //     challengeType: 1
    //   };
    //   apiIsCanBuyChallengeTicket(data, true).then(res => {
    //   });
    // },
    gojump() {
      if (this.goOnType == 1) {
        this.$router.push("/challengeticket");
      }
      if (this.Jump) {
        if (this.goOnType == 3) {
          if (this.challengeInfo.CurLevel == 1) {
            this.$router.push("/challengematch");
          }
          if (this.challengeInfo.CurLevel == 2) {
            this.$router.push("/challengetwo");
          }
          if (this.challengeInfo.CurLevel == 3) {
            this.$router.push("/challengethree");
          }
          if (this.challengeInfo.CurLevel == 4) {
            this.$router.push("/challengefour");
          }
          if (this.challengeInfo.CurLevel == 5) {
            this.$router.push("/challengefive");
          }
        }
      } else {
        this.$message({
          message: this.$t('GameMaintenance'),
          duration: 3000,
          type: "error",
          center: true
        });
      }
      // apiGetChallengeIsCanGoOn("", true).then(res => {
      // });
      // this.$router.push("/challengematch");
    }
  }
};
</script>

<style scoped lang="scss">
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

  padding-top: 0.58rem /* 58/100 */;
  padding-left: 0.47rem /* 47/100 */;
  padding-right: 0.47rem;
  .rank-popup-title {
    text-align: center;
    font-size: 0.34rem; /* 34/100 */
    margin: 0 auto;
    margin-bottom: 0.48rem; /* 48/100 */
  }
  .rank-popup-content {
    line-height: 0.55rem; /* 55/100 */
    color: #989ca8;
    font-size: 0.22rem; /* 18/100 */
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
  margin-top: 0.2rem /* 20/100 */;
  margin-right: 0.19rem; /* 19/100 */
  background-image: url("~@/assets/questyellow.png");
  background-repeat: no-repeat;
  background-size: 100%;
  position: relative;
  z-index: 1;
}
.challenge-main-history-challenge {
  &-item {
    width: 7.1rem /* 710/100 */;
    height: 0.7rem;
    margin: 0 auto;
    background-color: #e2e2e2;
    border-radius: 0.15rem; /* 15/100 */
    margin-bottom: 0.16rem; /* 16/100 */
    padding-left: 0.37rem /* 37/100 */;
    line-height: 0.7rem;
    transition: 0.3s;
    .rank-arrow {
      width: 0.28rem;
      height: 0.28rem;
      background-image: url("~@/assets/icons/arrow.png");
      background-size: 100%;
      float: right;
      margin-right: 0.27rem;
      margin-top: 0.18rem;
    }
  }
  &-item:active {
      background-color: #c9c9c9;
      transform: scale(0.95);
  }
}
.fl {
  float: left;
}
.nomatchitem {
  height: 2.4rem;
  margin-top: 0;
  background-size: 50%;
}
.Cgold-main-title {
  // top: -0.15rem /* 15/100 */;
  // left: 0.2rem /* 20/100 */;
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
</style>

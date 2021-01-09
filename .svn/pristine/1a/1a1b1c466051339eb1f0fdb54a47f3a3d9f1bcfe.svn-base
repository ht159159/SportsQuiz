<template>
  <div class="Cmatch">
    <div class="Cmatch-head">
      <back class="back-icon"></back>
      <div class="title">{{ $t('ChallengeGame') }}</div>
    </div>
    <div class="Cmatch-main">
      <div class="Cmatch-main-layer">
        <div class="Cmatch-main-layer-num">{{ $t('Round5') }}</div>
        <div class="Cmatch-main-layer-left">
          <p class="Cmatch-main-layer-left-one">{{ $t('ThisRound') }}</p>
          <p class="Cmatch-main-layer-left-two">{{ $t('WinReward') }}</p>
          <p class="Cmatch-main-layer-left-three" v-if="Reward">
            <span v-if="Reward[0].RewardType == 1"
              >{{ Reward[0].RewardValue }}{{ $t('Coins') }}</span
            >
            <span v-if="Reward[0].RewardType == 2"
              >{{ Reward[0].RewardValue }}{{ Reward[0].RewardValue }} {{ $t('Lottery') }}</span
            >
          </p>
        </div>
        <div class="Cmatch-main-layer-right">
          <!-- <p class="Cmatch-main-layer-left-one">下一关</p>
          <p class="Cmatch-main-layer-left-two">胜出可获得</p>
          <p class="Cmatch-main-layer-left-three" v-if="Reward">
            <span v-if="Reward[1].RewardType == 1"
              >{{ Reward[1].RewardValue }}金币</span
            >
            <span v-if="Reward[1].RewardType == 2"
              >{{ Reward[1].RewardValue }}奖券</span
            >
          </p> -->
        </div>
      </div>
    </div>
    <div class="Cmatch-bottom">
      <div class="Cmatch-bottom-bet">
        <div class="Cmatch-bottom-bet-title">{{ $t('TotalGoals') }}</div>
        <div class="Cmatch-bottom-bet-home" v-if="matchs">
          <img v-if="matchs[0].TeamMatchItemViewModels[0].Img" :src="matchs[0].TeamMatchItemViewModels[0].Img" alt="" class="Cmatch-bottom-bet-home-img">
          <img v-else src="@/assets/instead_logo1.png" class="Cmatch-bottom-bet-home-img">
          <p class="Cmatch-team-name">{{ matchs[0].TeamMatchItemViewModels[0].TeamName }}</p>
        </div>
        <div class="Cmatch-bottom-bet-away" v-if="matchs">
          <img v-if="matchs[0].TeamMatchItemViewModels[1].Img" :src="matchs[0].TeamMatchItemViewModels[1].Img" alt="" class="Cmatch-bottom-bet-away-img">
          <img v-else src="@/assets/instead_logo1.png" class="Cmatch-bottom-bet-away-img">
          <p class="Cmatch-team-name">{{ matchs[0].TeamMatchItemViewModels[1].TeamName }}</p>
        </div>
        <div class="Cmatch-bottom-bet-main">
          <div
            class="Cmatch-bottom-bet-main-win"
            :class="{ active: num == index }"
            @click="bet(index, item.PlayId)"
            v-for="(item, index) in bettype"
            :key="index"
          >
            {{ item.Text }}
          </div>
        </div>
      </div>
      <div class="Cmatch-bottom-button">
        <div class="Cmatch-bottom-button-main">
          <div class="Cmatch-bottom-button-main-button" @click="goBet">
            {{ $t('Done') }}
          </div>

          <div class="Cmatch-bottom-button-main-button" @click="gore">
            {{ $t('ChallengeRecord') }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import back from "../../components/Botton/back.vue";
import {
  apiGetChallengeMatchByRandom,
  apiBet,
  apiGetChallenge
} from "@/api/match";
import { betSuccess } from "@/utils/medias";
export default {
  components: {
    back,
  },
  created() {
    this.getMatch();
    apiGetChallenge("", true).then(res => {
      this.id = res.availableIntegral.ChallengeId;
      this.CreationTime = res.availableIntegral.CreationTime;
    });
  },
  data() {
    return {
      num: -1,
      matchs: "",
      bettype: "",
      playid: "",
      Reward: "",
      id: "",
      CreationTime: ""
    };
  },
  methods: {
    gore() {
      this.$router.push("/challengerecord");

      this.$store.commit("upChallengeId", this.id);
      this.$store.commit("uptime", this.CreationTime);

      // this.$store.commit("upChallengeId", {
      //   id: this.challengeInfo.ChallengeId
      // });

      // apiGetChallengeMatchByRandom("", true).then(res => {
      // });
    },
    goBet() {
      let data = {
        playId: this.playid,
        betType: 3
      };
      apiBet(data, true).then(res => {
        if (res.IsBetSucceed) {
          this.$message({
            message: this.$t('BettingSuccess'),
            duration: 2500,
            type: "success",
            center: true
          });
          // 下注成功音效
          betSuccess.play();
          setTimeout(() => {
            this.$router.push("/challengehome");
          }, 1000);
        } else if (Math.abs(res.Code) >= 600) {
          this.$message({
            message: res.Message,
            duration: 3000,
            type: "error",
            center: true
          });
        }
      });
    },
    bet(id, playid) {
      this.num = id;
      this.playid = playid;
    },
    getMatch() {
      apiGetChallengeMatchByRandom("", true).then(res => {

        this.Reward = res.Reward;
        if (res.data.Data.length === 0) {
          this.$message({
            message: this.$t('NoGameTip'),
            duration: 3000,
            type: "error",
            center: true
          });
        } else {
          this.matchs = res.data.Data;
        }
        // res.data.Data[0].CommonPlayViewModelGroups[0].shift();
        // res.data.Data[1].CommonPlayViewModelGroups[0].shift();
        // this.bettype = res.data.Data[0].CommonPlayViewModelGroups[0];
        // this.bettype = res.data.Data[0].CommonPlayViewModelGroups[0].slice(
        //   res.data.Data[0].CommonPlayViewModelGroups[0].length - 2,
        //   res.data.Data[0].CommonPlayViewModelGroups[0].length
        // );

        // this.bettype2 = res.data.Data[1].CommonPlayViewModelGroups[0].slice(
        //   res.data.Data[1].CommonPlayViewModelGroups[0].length - 2,
        //   res.data.Data[1].CommonPlayViewModelGroups[0].length
        // );
        this.bettype = res.data.Data[0].CommonPlayViewModelGroups[0].filter(
          item => item.PlayId != -1
        );
      });
    }
  }
};
</script>

<style scoped lang="scss">
.Cmatch {
  background-color: #0c160e;
}
.Cmatch-bottom {
  &-bet {
    height: 6.12rem /* 585/100 */;
    background: url("~@/assets/challenge/5_03.png");
    background-size: 100%;

    &-title {
      top: 14%;
    }
    &-home {
      top: 16%;
      display: flex;
      flex-direction: column;
      align-items: center;
      &-img {
        width: 0.5rem;
        height: 0.5rem;
        margin-bottom: 0.1rem;
      }
    }
    &-away {
      top: 16%;
      display: flex;
      flex-direction: column;
      align-items: center;
      &-img {
        width: 0.5rem;
        height: 0.5rem;
        margin-bottom: 0.1rem;
      }
    }
    &-main {
      height: 3.81rem /* 381/100 */;
      background: url("~@/assets/challenge/challenge_stage5_03.png");
      background-size: 100%;
      .win1 {
        margin-top: 0.27rem /* 27/100 */ !important;
      }
    }
  }
}
.Cmatch-bottom-button {
  height: 2.68rem /* 268/100 */;
  &-main {
    height: 2.2rem /* 220/100 */;
    &-button {
      margin-bottom: 0.3rem; /* 15/100 */
    }
  }
}
</style>

<template>
  <div class="Cmatch">
    <div class="Cmatch-head">
      <back class="back-icon"></back>
      <div class="title">{{ $t('ChallengeGame') }}</div>
    </div>
    <div class="Cmatch-main">
      <div class="Cmatch-main-layer">
        <div class="Cmatch-main-layer-num">{{ $t('Round3') }}</div>
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
          <p class="Cmatch-main-layer-left-one">{{ $t('NextRound') }}</p>
          <p class="Cmatch-main-layer-left-two">{{ $t('WinReward') }}</p>
          <p class="Cmatch-main-layer-left-three" v-if="Reward">
            <span v-if="Reward[1].RewardType == 1"
              >{{ Reward[1].RewardValue }} {{ $t('Coins') }}</span
            >
            <span v-if="Reward[1].RewardType == 2"
              >{{ Reward[1].RewardValue }} {{ $t('Lottery') }}</span
            >
          </p>
        </div>
      </div>
    </div>
    <div class="Cmatch-bottom">
      <div class="Cmatch-bottom-bet">
        <div class="Cmatch-bottom-bet-title">{{ $t('OverUnder') }}</div>
        <div class="Cmatch-bottom-bet-home" v-if="matchs">
          <img v-if="matchs[0].TeamMatchItemViewModels[0].Img" :src="matchs[0].TeamMatchItemViewModels[0].Img" alt="" class="Cmatch-bottom-bet-home-img">
          <img v-else src="@/assets/instead_logo1.png" class="Cmatch-bottom-bet-home-img">
          <p class="Cmatch-team-name">{{ matchs[0].TeamMatchItemViewModels[0].TeamName }}</p>
        </div>
        <div class="Cmatch-bottom-bet-away" v-if="matchs">
          <img v-if="matchs[0].TeamMatchItemViewModels[1].Img" :src="matchs[0].TeamMatchItemViewModels[1].Img" alt="" class="Cmatch-bottom-bet-home-img">
          <img v-else src="@/assets/instead_logo1.png" class="Cmatch-bottom-bet-home-img">
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
          <div class="Cmatch-bottom-button-main-button" @click="goBet()">
            {{ $t('Confirm') }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import back from "../../components/Botton/back.vue";
import { apiGetChallengeMatchByRandom, apiBet } from "@/api/match";
import { betSuccess } from "@/utils/medias";
export default {
  components: {
    back,
  },
  created() {
    this.getMatch();
  },
  data() {
    return {
      num: -1,
      matchs: "",
      bettype: "",
      playid: "",
      Reward: ""
    };
  },
  methods: {
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
        // this.bettype = res.data.Data[0].CommonPlayViewModelGroups[0];
        // this.bettype = res.data.Data[0].CommonPlayViewModelGroups[0].slice(
        //   res.data.Data[0].CommonPlayViewModelGroups[0].length - 2,
        //   res.data.Data[0].CommonPlayViewModelGroups[0].length
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
  &-title {
  }
  &-bet {
    &-main {
      padding-left: 0.94rem /* 94/100 */ !important;
      padding-right: 0.94rem !important;
      &-win:first-child {
        margin-right: 0.62rem; /* 62/100 */
      }
    }
  }
}
</style>

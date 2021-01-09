<template>
  <div class="Cmatch">
    <div class="Cmatch-head">
      <back class="back-icon"></back>
      <div class="title">{{ $t('ChallengeGame') }}</div>
    </div>
    <div class="Cmatch-main">
      <div class="Cmatch-main-layer">
        <div class="Cmatch-main-layer-num">{{ $t('Round2') }}</div>
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
        <div class="Cmatch-bottom-bet-title">{{ $t('PleaseChooseMatchOdds') }}</div>
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
        <div class="Cmatch-bottom-bet-home2" v-if="matchs">
          <img v-if="matchs[1].TeamMatchItemViewModels[0].Img" :src="matchs[1].TeamMatchItemViewModels[0].Img" alt="" class="Cmatch-bottom-bet-away-img">
          <img v-else src="@/assets/instead_logo1.png" class="Cmatch-bottom-bet-home-img">
          <p class="Cmatch-team-name">{{ matchs[1].TeamMatchItemViewModels[0].TeamName }}</p>
        </div>
        <div class="Cmatch-bottom-bet-away2" v-if="matchs">
          <img v-if="matchs[1].TeamMatchItemViewModels[1].Img" :src="matchs[1].TeamMatchItemViewModels[1].Img" alt="" class="Cmatch-bottom-bet-away-img">
          <img v-else src="@/assets/instead_logo1.png" class="Cmatch-bottom-bet-away-img">
          <p class="Cmatch-team-name">{{ matchs[1].TeamMatchItemViewModels[1].TeamName }}</p>
        </div>
        <div class="Cmatch-bottom-bet-main">
          <div
            class="Cmatch-bottom-bet-main-win"
            :class="{ active: num == index }"
            @click="bet(index, item.PlayId)"
            v-for="(item, index) in bettype"
            :key="index"
          >
            {{ item.Text.slice(0, item.Text.indexOf(" ")) }}
          </div>
        </div>
        <div class="Cmatch-bottom-bet-main main2">
          <div
            class="Cmatch-bottom-bet-main-win"
            :class="{ active: num2 == index }"
            @click="bet1(index, item.PlayId)"
            v-for="(item, index) in bettype2"
            :key="index"
          >
            {{ item.Text }}
          </div>
        </div>
      </div>
      <div class="Cmatch-bottom-button">
        <div class="Cmatch-bottom-button-main">
          <div class="Cmatch-bottom-button-main-button" @click="goBet">
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
      num2: -1,
      matchs: "",
      bettype: "",
      bettype2: "",
      playid: 0,
      playid2: 0,
      bet3: "",
      bet2: "",
      Reward: ""
    };
  },
  methods: {
    goBet() {
      if (this.playid == 0) {
        alert(this.$t('PleaseSelectTheFirstMatch'));
        return;
      }

      if (this.playid2 == 0) {
        alert(this.$t('PleaseSelectTheSecondMatch'));
        return;
      }
      //第一次投注
      let data = {
        playId: this.playid,
        betType: 3
      };
      //第二次投注
      let data1 = {
        playId: this.playid2,
        betType: 3
      };

      apiBet(data, true).then(res => {
        // this.bet3 = res.IsBetSucceed;
        if (res.IsBetSucceed) {
          this.$message({
            message: this.$t('BettingSuccess'),
            duration: 2500,
            center: true,
            type: "success"
          });
          // 下注成功音效
          betSuccess.play();
          setTimeout(() => {
            this.$router.push("/challengehome");
          }, 1000);
        }
      });

      apiBet(data1, true).then(res => {
        // this.bet2 = res.IsBetSucceed;
        if (Math.abs(res.Code) >= 600) {
          this.$message({
            message: res.Message,
            duration: 3000,
            type: "error",
            center: true
          });
        }
      });
      // this.$nextTick(() => {
      //   if (this.bet1 == true && this.bet2 == true) {
      //     this.$toast.success({
      //       message: "下注成功",
      //       duration: 1000
      //     });
      //   }
      // });
    },

    bet(id, playid) {
      this.num = id;
      this.playid = playid;
    },
    bet1(id, playid) {
      this.num2 = id;
      this.playid2 = playid;
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
        // this.bettype2 = res.data.Data[1].CommonPlayViewModelGroups[0];
        this.bettype = res.data.Data[0].CommonPlayViewModelGroups[0].filter(
          item => item.PlayId != -1
        );
        this.bettype2 = res.data.Data[1].CommonPlayViewModelGroups[0].filter(
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
    height: 7.52rem /* 752/100 */;
    background: url("~@/assets/challenge/r2.png");
    background-size: 100%;
    &-title {
      top: 12%;
    }
    &-home {
      top: 14%;
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
      top: 14%;
      display: flex;
      flex-direction: column;
      align-items: center;
      &-img {
        width: 0.5rem;
        height: 0.5rem;
        margin-bottom: 0.1rem;
      }
    }
    &-home2 {
      width: 40%;
      position: absolute;
      left: 19%;
      transform: translateX(-50%);
      top: 56%;
      font-size: 0.3rem /* 30/100 */;
      font-weight: 600;
      color: #ffffff;
      display: flex;
      flex-direction: column;
      align-items: center;
      &-img {
        width: 0.5rem;
        height: 0.5rem;
        margin-bottom: 0.1rem;
        }
    }
    &-away2 {
      width: 40%;
      position: absolute;
      color: #ffffff;
      right: 23%;
      transform: translateX(50%);
      top: 56%;
      font-size: 0.3rem /* 30/100 */;
      font-weight: 600;
      display: flex;
      flex-direction: column;
      align-items: center;
      &-img {
        width: 0.5rem;
        height: 0.5rem;
        margin-bottom: 0.1rem;
      }
    }
    .main2 {
      margin-top: 1rem;
    }
  }
}
</style>

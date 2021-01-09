<template>
  <div style="height:100%">
    <Tinder
      ref="tinder"
      :max="2"
      :allowSuper="false"
      key-name="PlayId"
      :queue.sync="MatchList"
      :offset-y="10"
      @submit="onSubmit"
      v-if="MatchList.length>0"
    >
    
      <template slot-scope="scope">
        <div class="mainHome-card">
          <div class="mainHome-card-title">
            <img v-if="scope.data.MatchLogo" :src="scope.data.MatchLogo" class="pic_champion"/>
            <img v-else src="@/assets/champion.png" class="pic_champion" />
            <span class="game-name">{{scope.data.MatchName}}</span>
          </div>
          <div class="vsImg">
            <template v-if="isSwipe">
              <div class="vsImg-content" style="position: relative;">
                <div class="left-team">
                  <div class="team-pic-wrap">
                    <img v-if="scope.data.HomeLogo" class="left-team-pic" :src="scope.data.HomeLogo"/>
                    <img v-else src="@/assets/instead_logo1.png" class="left-team-pic" />
                  </div>
                  <p class="left-team-name">
                    {{scope.data.HomeName}}
                  </p>
                </div>
                <h1 class="vs-pic">V</h1>
                <h2 class="vs-pic">S</h2>
                <div class="right-team">
                  <div class="team-pic-wrap">
                    <img v-if="scope.data.AwayLogo" class="right-team-pic" :src="scope.data.AwayLogo"/>
                    <img v-else src="@/assets/instead_logo1.png" class="right-team-pic"/>
                  </div>
                  <p class="right-team-name">
                    {{scope.data.AwayHome}}
                  </p>
                </div>
              </div>
            </template>
          </div>
          <div class="startTime">
            {{ $t("StartGameTime") }}: {{ scope.data.MatchItemStartTime }}
          </div>
          <div class="slide-pic-wrap">
            <div class="slide-pic">
              <p class="swipe-text">{{ $t("SlideLeft") }}</p><!-- 左滑更多推荐赛事 -->
              <p class="swipe-right">{{ $t("SlideRight") }}</p><!-- 右滑可直接投注 -->
            </div>
          </div>
          <div class="info-block-wrap">
            <div class="info-block">
              <span class="info-block-font team-name">{{scope.data.Position}}</span>
              <span class="text-focus-red info-block-font result">{{scope.data.PlayName}}</span>
            </div>
            <div class="info-block">
              <span class="info-block-font">{{ $t("Odds") }}:</span><!-- 赔率 -->
              <span class="text-focus-blue info-block-font font result">{{scope.data.Odds}}</span>
              <span class="info-block-font">{{ $t("GuessCoins") }}:</span><!-- 竞猜金币 -->
              <span class="text-focus-blue info-block-font result">{{scope.data.MinBetAmount}}</span>
            </div>
            <div class="info-block2">
              <span class="info-block-font">{{ $t("WinningReward") }}:</span><!-- 本场获胜可获得 -->
              <span class="text-focus-blue info-block-font result2">{{scope.data.WinningAmount}}{{ $t("Coins") }}</span><!-- 金币 -->
            </div>
          </div>
        </div>
      </template>
    </Tinder>
    <img v-if="blank||isMaintenance" src="@/assets/weihu.jpg" style=" position: absolute;top: .1rem;width: 100%;height: 100%;"/>
    <div class="btns"></div>
    <!-- <div class="gomatch" @click="gomatch">
      <p class="gomatch-text">{{ $t("GameIcon") }}</p>
    </div> -->
  </div>
</template>

<script>
import {
  apiGetRecommendMatchItem,
  apiGetBetResponse,
  apiBetRecommend,
  apiIsMaintenance
} from "@/api/match.js";
import Tinder from "vue-tinder";
import Vue from "vue";
import { Dialog , Image} from "vant";
import { randomBytes } from "crypto";
import { betSuccess, betPass } from "@/utils/medias";
import { apiGetUserInfo } from "@/api/User.js";
Vue.use(Dialog).use(Image);
export default {
  name: "homeCard",
  components: {
    Tinder
  },
  data() {
    return {
      isMaintenance: false,
      isSwipe: true,
      MatchList: [], //比赛集
      previousGame: null,
      playIdIndex: 0, //当前盘口位置
      pageIndex: 1,
      pageSize: 30,
      blank: false
    };
  },
  filters: {
    host(val) {
      if (val) {
        return "主";
      } else if (!val) {
        return "客";
      }
    }
  },
  computed: {},
  created() {
    this.getMatchList();
    let token = localStorage.getItem("token");
    if (token) {
      this.getUserInfo();
    }
  },
  methods: {
    getUserInfo() {
      let data = {};
      apiGetUserInfo(data, true).then(res => {
        localStorage.setItem("RankId", res.RankId);
        localStorage.setItem("nickName", res.NickName);
        localStorage.setItem("UImg", res.UImg);
      });
    },
    onSubmit(item) {
      if (this.$refs.tinder.queue.length == 1) {
        this.getMatchList();
        return;
      }
      // item.type： 结果，'like'：右滑, 'nope'：左滑, 'super'：上滑
      // item.key：  被移除卡片的 keyName
      // item.item： queue 中的子对象
      this.previousGame = item.item;
      if (item.type == "nope") {
        // 左滑音效
        betPass.play();
      } 
      if (item.type == "like") {
        let token = localStorage.getItem("token");
        if (token) {
          this.like(item.type);
          // 右滑音效
          betSuccess.play();
        } else {
          this.$router.push("/myself")
        }
      }
      
    },
    goGames() {
      this.$router.push("/gamesport");
    },
    //获取比赛信息
    getMatchList() {
      // let data = {
      //   index: this.pageIndex,
      //   count: this.pageSize
      // };
      apiGetRecommendMatchItem("").then(res => {
        // this.pageIndex++;
        if (res.length == 0) {
          //维护检查
          apiIsMaintenance().then(res => {
            this.isMaintenance = res.IsMaintenance;
          });
        } else {
          this.MatchList = res;
          // this.randomGames();
        }
        // if (this.pageIndex > res.TotalPages) {
        //   this.pageIndex = 1;
        // }
        if (this.MatchList.length == 0) {
          setTimeout(() => {
            this.blank = true;
          }, 500);
        } else {
          this.blank = false;
        }
      });
    },
    //右滑投注
    async like(choice) {
      console.log(choice)
      let data = {
        playId: this.previousGame.PlayId,
        betIntegral: this.previousGame.MinBetAmount
      };
      apiBetRecommend(data, true).then(res => {
        if (res.IsBetSucceed) {
          const m = this.$message({
            message: this.$t("BettingSuccessfulPrompt") + res.AvailableIntegral,
            type: "success",
            duration: 2000
          });
          setTimeout(() => m.close(), 2000);
        } else if (Math.abs(res.Code) >= 600) {
          const m = this.$message({
            message: res.Message,
            type: "error",
            duration: 2000
          });
          setTimeout(() => m.close(), 2000);
        }
      });
    },
    // 隨機組合
    randomGames() {
      if (this.MatchList) {
        this.MatchList.sort(function() {
          return 0.5 - Math.random();
        });
      }
    }

  }
};
</script>
<style scoped>
.vue-tinder {
  position: absolute;
  z-index: 1;
  left: 0;
  right: 0;
  top: 10px;
  margin: auto;
  border-radius: 10px;
  height: calc(100% - 0.4rem);
} 
</style>

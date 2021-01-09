<template>
  <div class="rank-match">
    <!-- 投注 -->
    <transition name="fade">
      <model v-if="$store.state.match.loading"></model>
    </transition>
    <transition name="fade">
      <i v-if="$store.state.match.loading" class="el-icon-loading"></i>
    </transition>
    <transition name="fade">
      <model v-if="showbet"></model>
    </transition>
    <transition name="fade">
      <div class="dialog" v-if="showbet">
        <div class="bet-head">
          <div class="home">
            <p>
              {{
                betinfo.MatchItemName.slice(
                  0,
                  betinfo.MatchItemName.indexOf("V")
                )
              }}
            </p>
          </div>
          <div class="away">
            <p>
              {{
                betinfo.MatchItemName.slice(
                  betinfo.MatchItemName.indexOf("S") + 1
                )
              }}
            </p>
          </div>
        </div>
        <div class="bet-main">
          <div class="bet-main__wrap">
            <div class="betinfo">
              <span class="betinfo__title">{{ this.betinfo.Position }}</span>
              <span class="betinfo__title">@{{ this.betinfo.OddsValue }}</span>
            </div>
            <!-- 下注 -->
            <div class="betin">
              <span class="betin-span">{{ $t("BetAmount") }}</span
              ><input
                @input="getmoney1"
                class="betin-input"
                type="text"
                v-model="betnum"
              />
              <i class="add" @click="addbet"> </i
              ><i class="lose" @click="losebet"></i>
            </div>
            <!-- 获得金额 -->
            <div class="getmoney">
              <span class="betin-span">{{ $t("WinableAmount") }}</span
              ><input
                class="betin-input"
                type="text"
                v-model="money"
                disabled="disabled"
              />
            </div>
          </div>
          <div class="fastbet">
            <!-- <div
              class="fastbet-num "
              :class="{ fastbetactive: fastnum == 10 }"
              @click="fastbet(10)"
            >
              10金币
            </div>
            <div
              class="fastbet-num "
              :class="{ fastbetactive: fastnum == 30 }"
              @click="fastbet(30)"
            >
              30金币
            </div>
            <div
              class="fastbet-num "
              :class="{ fastbetactive: fastnum == 50 }"
              @click="fastbet(50)"
            >
              50金币
            </div>
            <div
              class="fastbet-num "
              :class="{ fastbetactive: fastnum == 100 }"
              @click="fastbet(100)"
            >
              100金币
            </div> -->
            <div class="slide-tooltip">
              <span class="slide-tooltip-text">{{ rangeValue }}</span>
            </div>
            <el-slider
              v-model="rangeValue"
              :show-tooltip="false"
              :min="betinfo.MinBetIntegral"
              :max="rangeMaxVal"
              @input="changeRangeVal()"
            ></el-slider>
          </div>
          <div class="bet-main__second__wrap">
            <div class="fastbet-text-wrap">
              <span class="fastbet_text">{{ $t("QuicklySelectAmount") }}</span>
            </div>
            <div class="rules">
              <span class="rules-text">{{ $t("MinimumBetAmount") }}</span
              ><span class="rules-money"
                >{{ this.betinfo.MinBetIntegral }} {{ $t("Coins") }}</span
              >
            </div>
            <div class="btn betbtn" @click="betClick()">{{ $t("Bet") }}</div>
          </div>
        </div>
        <div class="close" @click="closedialog"></div>
      </div>
    </transition>

    <!-- 賠率變化時的彈窗 -->
    <transition name="fade">
      <model v-if="IsOddsChange"></model>
    </transition>
    <transition name="fade">
      <div class="IsOddsChange" v-if="IsOddsChange">
        <p>{{ $t("OddsChanged") }}</p>
        <div class="IsOddsChangeBtn" @click="closeOddsChange()">
          {{ $t("Confirm") }}
        </div>
      </div>
    </transition>

    <div class="match">
      <div class="rank-match-head">
        <back class="back-icon"></back>
        <div class="title">{{ $store.state.match.MatchName }}</div>
        <div class="num"></div>
        <div
          class="count-down-wrap"
          v-if="
            tab1 == true ||
              tab2 == true ||
              $store.state.match.Matchitems.length == 0
          "
        >
          <div class="countdown-second" @click="refresh()">
            {{ countDownTime }}
          </div>
          <!-- <div class="refresh" ></div> --><!-- 手動刷新按鈕，目前點選時鐘代替這個按鈕 -->
        </div>
      </div>
      <div class="banner " id="banner4">
        <div class="myrank">
          <p class="ptop">{{ $t("MyRank") }}</p>
          <p class="pcontent" v-if="rankinfo.Rank == -1">
            {{ $t("NoRanking") }}
          </p>
          <p class="pcontent" v-else>{{ rankinfo.Rank }}</p>
        </div>
        <div class="gold">
          <p class="ptop">{{ $t("TotalCoins") }}</p>
          <p class="pcontent" v-if="rankinfo.AvailableIntegral === -1">
            {{ $t("No") }}
          </p>
          <p class="pcontent" v-else>{{ rankinfo.AvailableIntegral }}</p>
        </div>
        <div class="banner-tabs">
          <div :class="{ 'tab-active': tab3, tab: true }" @click="tabshow(2)">
            {{ $t("Boules") }}
          </div>

          <div :class="{ 'tab-active': tab2, tab: true }" @click="tabshow(1)">
            {{ $t("Today") }}
          </div>
          <div :class="{ 'tab-active': tab1, tab: true }" @click="tabshow(0)">
            {{ $t("MorningSession") }}
          </div>
        </div>

        <router-link to="/guize"> <i class="banner-quset"></i></router-link>
      </div>
      <div class="main-main">
        <div
          class="rank-match-main"
          v-for="item in $store.state.match.Matchitems"
          :key="item.MatchItemId"
        >
          <div class="title">
            <div class="title-left">
              <img
                v-if="item.TeamMatchItemViewModels[0].Img"
                :src="item.TeamMatchItemViewModels[0].Img"
                class="home-img"
              />
              <img v-else src="@/assets/instead_logo1.png" class="home-img" />
              <span class="homename">{{item.TeamMatchItemViewModels[0].TeamName}}</span>
            </div>

            <div class="title-center">
              <span class="home commondiv">{{ $t("Host") }}</span>
              <span class="away commondiv">{{ $t("Guest") }}</span>
            </div>

            <div class="title-right">
              <span class="awayname">{{item.TeamMatchItemViewModels[1].TeamName}}</span>
              <img
                v-if="item.TeamMatchItemViewModels[1].Img"
                :src="item.TeamMatchItemViewModels[1].Img"
                class="away-img"
              />
              <img v-else src="@/assets/instead_logo1.png" class="away-img" />
            </div>
          </div>
          <!-- tab -->

          <div class="guess-main">
            <div class="guess-main-title">
              <div v-if="playtype == 2" class="left">
                <p v-if="playtype == 2">上27</p>
                <p v-if="playtype == 2">
                  {{ item.TeamMatchItemViewModels[0].Score }}:
                  {{ item.TeamMatchItemViewModels[1].Score }}
                </p>
              </div>
              <div class="time">
                {{
                  item.MatchItemStartTime.slice(
                    0,
                    item.MatchItemStartTime.indexOf("T")
                  )
                }}
                {{
                  item.MatchItemStartTime.slice(
                    item.MatchItemStartTime.indexOf("T") + 1
                  )
                }}
              </div>
              <div
                class="more"
                @click="gojump(item.MatchId)"
                v-if="playtype == 1 || playtype == 0"
              >
                {{ $t("More") }}
              </div>
            </div>
            <div class="guess-main-content">
              <div
                class="content-item"
                v-for="itembets in item.CommonPlayViewModelGroups"
                :key="itembets.id"
              >
                <div
                  v-for="itembet in itembets"
                  :key="itembet.id"
                  @click="showBetFn(itembet.PlayId)"
                  :class="{ pstyle: itembet.PlayId != -1 }"
                >
                  {{ itembet.Text }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="nodata" v-if="$store.state.match.Matchitems.length == 0">
          <p>{{ $t("NoData") }}</p>
        </div>
      </div>
    </div>
    <!-- 廣告 -->
    <FlowAd
      :isOpenAd.sync="isOpenAd"
      :adTypeId="adTypeId"
      :isFinished.sync="isFinished"
      :AdObj ="AdObj"
      @isFinished="finishedAd"
    />
    <nav-bottom class="match-bottom"></nav-bottom>
  </div>
</template>

<script>
import NavBottom from "@/components/Main/NavBottom.vue";
import back from "../components/Botton/back.vue";
import model from "../components/model";
import { betSuccess } from "@/utils/medias";
import FlowAd from "@/components/FlowAd";
import {
  apiGetBetResponse,
  apiBet,
  apiGetMemberMatchViewModel
} from "../api/match.js";
import { apiGetFlowAdByType } from "@/api/FlowAd.js";
export default {
  watch: {
    betnum: function() {
      if (
        this.betinfo.PlayType == 3 ||
        this.betinfo.PlayType == 4 ||
        this.betinfo.PlayType == 5 ||
        this.betinfo.PlayType == 6
      ) {
        this.money = (this.betnum * this.betinfo.OddsValue).toFixed(2);
      } else {
        this.money = (
          this.betnum * this.betinfo.OddsValue -
          this.betnum
        ).toFixed(2);
      }
      this.rangeValue = parseInt(this.betnum);
    }
  },
  components: {
    NavBottom,
    back,
    model,
    FlowAd
  },

  data() {
    return {
      tab1: true,
      tab2: false,
      tab3: false,

      show: false,
      showbet: false,
      betnum: 0,
      rangeValue: 0,
      rangeMaxVal: 0,
      money: "",
      playtype: 0,
      playId: "",
      betinfo: "",
      rankinfo: "",
      fastnum: "",
      IsOddsChange: false,
      lastOdds: "",
      newOdds: "",
      timer: {
        timer1: "",
        timer2: "",
        timer3: ""
      },
      countDownTimer: "",
      countDownTime: 30,
      qualifyingMinBet: 1,
      isBetDisable: false,
      isOpenAd: false,
      adTypeId: 0,
      isFinished: false,
      AdObj: {},
    };
  },
  created() {
    // this.getMatchPlay();
    this.initGetMatchPlay();
    this.getrankmatchinfo();
    // this.cycling();
  },
  methods: {
    fastbet(id) {
      this.fastnum = id;
      this.betnum = id;
    },
    getrankmatchinfo() {
      let data = {
        matchId: this.$store.state.match.MatchId
      };
      apiGetMemberMatchViewModel(data, true).then(res => {
        this.rankinfo = res;
      });
    },
    gojump(id) {
      this.$router.push("/matchmore");
    },
    //关闭下注
    closedialog() {
      this.showbet = false;
    },

    //下注界面
    showBetFn(id) {
      this.betnum = 0;
      // if (id > 0) {
      //   this.showbet = true;
      // }
      this.playId = id;
      if (this.playId == -1) {
        return;
      }
      let data = {
        playId: id,
        betType: 2
      };
      apiGetBetResponse(data, true).then(res => {
        if(Math.abs(res.Code) >= 600) {
          this.$message({
            message: res.Message,
            duration: 3000,
            type: "error",
            center: true
          });
        } else {
          this.showbet = true;

          this.betinfo = res;
          // 上次的舊賠率
          this.lastOdds = this.betinfo.OddsValue;
          // 投注金額預設最低投注金額
          this.betnum = res.MinBetIntegral;
          this.rangeValue = this.betnum;

          // 判斷最大單筆投注金額回傳是否為-1 如是拉桿的最大值為10000
          if (res.MaxBetIntegral === -1) this.rangeMaxVal = 10000;
          else this.rangeMaxVal = res.MaxBetIntegral;

          }
          // 判斷玩家餘額小於最小可投注額時，指针放置在开始位置显示最小可投注额 且不可拖动
          if (this.betinfo.AvailableIntegral < this.betinfo.MinBetIntegral) {
            this.isDisable = true;
            return;
          // 判斷玩家餘額跟回傳的MaxBetIntegral 哪個小就取哪個
          if (this.betinfo.AvailableIntegral > res.MaxBetIntegral) {
            this.rangeMaxVal = res.MaxBetIntegral;
            this.isDisable = false;
          }
          else if (this.betinfo.AvailableIntegral < res.MaxBetIntegral) {
            this.rangeMaxVal = this.betinfo.AvailableIntegral;
            this.isDisable = false;
          }
          else if (this.betinfo.AvailableIntegral = res.MaxBetIntegral) {
            this.rangeMaxVal = this.betinfo.AvailableIntegral;
            this.isDisable = false;
          }
        }
      });
    },
    changeRangeVal() {
      this.betnum = this.rangeValue;

      let tooltip = document.querySelector(".slide-tooltip");
      let rangeBtn = document.querySelector(".el-slider__bar");

      let tooltipWidth = tooltip.getBoundingClientRect().width; // 提示框最正確的寬度
      let rangeBtnOffset = rangeBtn.offsetWidth; // 拖動拉桿時拉桿條的偏移量
      let rangeBtnOffsetParent = rangeBtn.offsetParent.offsetLeft; // 拉桿條離父層左邊(父層padding-left)的偏移量

      let tolerance = tooltipWidth / 2 + (rangeBtnOffsetParent - tooltipWidth); // 公差
      if (!this.isrunTwice) {
        tooltip.style.left = tolerance + "px";
        this.isrunTwice = true;
      } else {
        tooltip.style.left = rangeBtnOffset + tolerance + "px";
      }
    },
    //投注金额
    addbet() {
      this.betnum = this.betnum + 1;
    },
    losebet() {
      if (this.betnum == 0) {
        return;
      }
      this.betnum = this.betnum - 1;
    },
    //可赢金额
    getmoney1() {
      // this.money = this.betnum * this.betinfo.OddsValue;
      // this.money = this.money.toFixed(2);
    },
    // 點擊下注時判斷
    betClick() {
      this.newChangeOdds().then(() => {
        // 如果兩個賠率不同
        if (this.lastOdds !== this.newOdds) {
          this.showbet = false;
          this.IsOddsChange = true;
          this.getMatchPlay();
        } else {
          this.bet();
        }
      });
    },
    //下注
    async bet() {
      // 防止连点
      if (this.isBetDisable || !this.showbet) {
        return false;
      }
      this.isBetDisable = true; // 防止连点

      let data = {
        playId: this.playId,
        betIntegral: this.betnum,
        betType: 2
      };
      if (this.betnum >= 1) {
        await apiBet(data, true).then(res => {
          if (res.IsBetSucceed) {
            this.$message({
              message: this.$t("BettingSuccess"),
              duration: 2500,
              type: "success",
              center: true
            });
            // this.Alert.showMsg("下注成功", "success", 2500, true, true);
            this.showbet = false;
            this.getrankmatchinfo();
            this.fastnum = "";
            // 下注成功音效
            betSuccess.play();
            // 彈出廣告
            this.adTypeId = 2;
            let data = {
              flowAdTypeId: this.adTypeId
            };
            apiGetFlowAdByType(data, true).then(res => {
              if(res.Data.Id == 0) {
                this.isOpenAd = false;
              } else {
                this.isOpenAd = true;
                this.AdObj = res.Data;
              }
              this.isBetDisable = false; // 防止连点
            });
            this.isFinished = false;
          } else if(Math.abs(res.Code) >= 600) {
            this.$message({
              message: res.Message,
              duration: 1000,
              type: "error",
              center: true
            });
            if (res.Message == "余额不足") {
              // 彈出廣告
              setTimeout(() => {
                this.adTypeId = 2;
                let data = {
                  flowAdTypeId: this.adTypeId
                };
                apiGetFlowAdByType(data, true).then(res => {
                  if(res.Data.Id == 0) {
                    this.isOpenAd = false;
                    } else {
                    this.isOpenAd = true;
                    this.AdObj = res.Data;
                  }
                });
              }, 1000);
              this.showbet = false;
              this.isBetDisable = false; // 防止连点
            }
            this.isBetDisable = false; // 防止连点
          }
        });
      } else {
        this.$message.error("投注金额需要大于1元");
      }
      // 刷新API
      this.getMatchPlay();
    },
    async default() {      
      // 沒有早盤的話跑今日
      if (this.$store.state.match.Matchitems.length == 0) {
        this.tabshow(1)
        .then(() => {
          // 沒有今日的話跑滾球
          if (this.$store.state.match.Matchitems.length == 0) {
            this.tabshow(2)
          }
        });
      }
      this.cycling();
    },
    //畫面一進來時候获取早盤玩法
    async initGetMatchPlay() {
      this.tabshow(0).then(() => {
        this.default()
      });
    },
    //获取赛事玩法
    getMatchPlay() {
      this.$store.dispatch("asyncGetMatchplay", {
        id: this.playtype
      });
    },
    async tabshow(id) {
      this.$store.commit("uploading", true);
      this.loading = true;
      this.playtype = id;
      if (id == 0) {
        this.tab1 = true;
        this.tab2 = false;
        this.tab3 = false;
      }
      if (id == 1) {
        this.tab1 = false;
        this.tab2 = true;
        this.tab3 = false;
      }
      if (id == 2) {
        this.tab1 = false;
        this.tab2 = false;
        this.tab3 = true;
      }
       await this.$store.dispatch("asyncGetMatchplay", {
        id: id
      });
      this.cycling();
    },

    cycling() {
      // 早盤
      if (this.tab1) {
        // 停止全部計時器
        this.destroyed();
        // 再開啟計時器
        this.timer.timer1 = setInterval(() => {
          this.getMatchPlay();
        }, 30000);
        this.countDownTime = 30;
        this.countDown();
      }

      // 今日
      if (this.tab2) {
        // 停止全部計時器
        this.destroyed();
        // 再開啟計時器
        this.timer.timer2 = setInterval(() => {
          this.getMatchPlay();
        }, 30000);
        this.countDownTime = 30;
        this.countDown();
      }

      // 滾球
      if (this.tab3) {
        // 停止全部計時器
        this.destroyed();
        // 再開啟計時器
        this.timer.timer3 = setInterval(() => {
          this.getMatchPlay();
        }, 2000);
      }
    },
    // 倒數計時
    countDown() {
      this.countDownTimer = setInterval(() => {
        if (this.countDownTime <= 0) {
          this.countDownTime = 30;
        }
        this.countDownTime = this.countDownTime - 1;
      }, 1000);
    },
    // 手動刷新
    refresh() {
      this.getMatchPlay();
      this.cycling();

      let vm = this;
        const m = vm.$message({
          message: this.$t("RefreshedSuccessfully"),
          duration: 3000,
          type: "success",
          center: true
        });
        setTimeout(() => {m.close()}, 2000);
    },
    // 停止全部計時器
    destroyed() {
      clearInterval(this.timer.timer1);
      clearInterval(this.timer.timer2);
      clearInterval(this.timer.timer3);
      clearInterval(this.countDownTimer);
    },

    // 新賠率
    async newChangeOdds() {
      if (this.playId == -1) {
        return;
      }
      let data = {
        playId: this.playId,
        betType: 2
      };
      await apiGetBetResponse(data, true).then(res => {
        if(Math.abs(res.Code) >= 600) {
          this.$message({
            message: res.Message,
            duration: 3000,
            type: "error",
            center: true
          });
        } else {
          this.betinfo = res;
          this.newOdds = this.betinfo.OddsValue;
        }
      });
    },

    closeOddsChange() {
      this.getMatchPlay();
      this.showbet = false;
      this.IsOddsChange = false;
    },

    // 廣告結束時傳回的值
    finishedAd(bool) {
      this.isFinished = bool;
    }
  },

  // 跳出本頁時 vue hook(生命週期)
  destroyed() {
    clearInterval(this.timer.timer1);
    clearInterval(this.timer.timer2);
    clearInterval(this.timer.timer3);
    clearInterval(this.countDownTimer);
  }
};
</script>

<style scoped lang="scss">
.el-icon-loading {
  position: absolute;
  left: 44%;
  top: 34%;
  transform: translateX(-50%);
  z-index: 1111;
  font-size: 1rem;
  color: #fff;
}
#banner4 {
  margin-top: 2.13rem !important;
  position: relative;
  .myrank {
    text-align: center;
    position: absolute;
    left: 1.18rem;
    bottom: 0.7rem;
  }
  .gold {
    text-align: center;
    position: absolute;
    right: 1.35rem;
    bottom: 0.7rem;
  }
  .ptop {
    font-size: 0.3rem /* 30/100 */;
    color: white;
    line-height: 0.33rem /* 0.33/100 */;
    margin-bottom: 0.05rem /* 5/100 */;
  }
  .pcontent {
    font-size: 0.22rem /* 22/100 */;
    color: #ffc700;
    font-weight: 700;
  }
}
/* .fade-enter,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition:  0.5s;
} */
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.fade-leave,
.fade-enter-to {
  opacity: 1;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s;
}

// element UI 的 slide拉桿樣式
::v-deep .el-slider__button {
  width: 0.32rem !important;
  height: 0.32rem !important;
  border: none !important;
  box-shadow: 0rem 0rem 0.05rem 0.02rem rgba(51, 51, 102, 0.5);
}
::v-deep .el-slider__runway {
  background-color: #949494;
}
::v-deep .el-tooltip__popper {
  padding: 0.05rem 0.02rem !important;
}
</style>

<template>
  <div class="rank-match">
    <!-- <div
      class="loadclass"
      v-if="loading"
     >
      <p class="loadclass-p">加载中....</p>
    </div> -->
    <transition name="fade">
      <model v-if="$store.state.match.loading"></model>
    </transition>
    <transition name="fade">
      <i v-if="$store.state.match.loading" class="el-icon-loading"></i>
    </transition>
    <!-- 遮罩层 -->

    <transition name="fade">
      <model v-if="showbet"></model>
    </transition>
    <!-- <div class="modal"></div> -->
    <!-- 投注 -->
    <transition name="fade">
      <div class="dialog" v-if="showbet">
        <div class="bet-head">
          <!-- <div class="home">
          <p>{{ this.betinfo.TeamMatchItemViewModels[0].TeamName }}</p>
        </div>
        <div class="away">
          <p>{{ this.betinfo.TeamMatchItemViewModels[1].TeamName }}</p>
        </div> -->
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
              <span class="betin-span">{{ $t("BetAmount") }}</span>
              <!-- 【 投注金额 】 -->
              <input
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
              <span class="betin-span">{{ $t("WinableAmount") }}</span>
              <!-- 【 可赢金额 】 -->
              <input class="betin-input" type="text" v-model="money" />
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
              :disabled="isDisable"
            ></el-slider>
          </div>
          <div class="bet-main__second__wrap">
            <div class="fastbet-text-wrap">
              <span class="fastbet_text">{{ $t("QuicklySelectAmount") }}</span>
              <!-- 【 左右滑动快速选择金额 】 -->
            </div>
            <div class="rules">
              <span class="rules-text">{{ $t("MinimumBetAmount") }}</span>
              <!-- 【 最低投注金额 】 -->
              <span class="rules-money"
                >{{ this.betinfo.MinBetIntegral }} {{ $t("Coins") }}</span
              >
              <!-- 【 金币 】 -->
            </div>
            <div
              class="btn betbtn"
              @click.stop="betClick()"
              :disabled="isBetDisable"
            >
              {{ $t("Bet") }}
            </div>
            <!-- 【 投注 】 -->
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
        <!-- 【 确认 】 -->
      </div>
    </transition>
    <!--  -->
    <div class="match">
      <div class="rank-match-head">
        <back class="back-icon"></back>
        <div class="title">{{ $store.state.match.MatchName }}</div>
        <div class="num"></div>
        <div class="count-down-wrap" v-if="tab1 == true || tab2 == true">
          <div class="countdown-second" @click="refresh()">
            {{ countDownTime }}
          </div>
          <!-- <div class="refresh" ></div> --><!-- 手動刷新按鈕，目前點選時鐘代替這個按鈕 -->
        </div>
      </div>
      <!--  -->
      <div class="banner">
        <div class="banner-tabs">
          <div :class="{ 'tab-active': tab3, tab: true }" @click="tabshow(2)">
            {{ $t("Boules") }}
            <!-- 【 滚球 】 -->
          </div>

          <div :class="{ 'tab-active': tab2, tab: true }" @click="tabshow(1)">
            {{ $t("Today") }}
            <!-- 【 今日 】 -->
          </div>
          <div :class="{ 'tab-active': tab1, tab: true }" @click="tabshow(0)">
            {{ $t("MorningSession") }}
            <!-- 【 早盘 】 -->
          </div>
        </div>
        <router-link to="/guize"> <i class="banner-quset"></i></router-link>
      </div>
      <!--  -->
      <div class="main-main" v-if="!$store.state.match.loading && $store.state.match.comparisonMatchitems && $store.state.match.comparisonMatchitems.length > 0">
        <div
          class="rank-match-main"
          v-for="(item, itemI) in $store.state.match.Matchitems"
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
              <span class="homename">{{
                item.TeamMatchItemViewModels[0].TeamName
              }}</span>
            </div>

            <div class="title-center">
              <span class="home commondiv">{{ $t("Host") }}</span>
              <!-- 【 主 】 -->
              <span class="away commondiv">{{ $t("Guest") }}</span>
              <!-- 【 客 】 -->
            </div>

            <div class="title-right">
              <span class="awayname">{{
                item.TeamMatchItemViewModels[1].TeamName
              }}</span>
              <img
                v-if="item.TeamMatchItemViewModels[1].Img"
                :src="item.TeamMatchItemViewModels[1].Img"
                class="away-img"
              />
              <img v-else src="@/assets/instead_logo1.png" class="away-img" />
            </div>
          </div>
          <!-- tab -->

          <div class="guess-main" v-if="$store.state.match.comparisonMatchitems[itemI].CommonPlayViewModelGroups != undefined  && $store.state.match.comparisonMatchitems[itemI].CommonPlayViewModelGroups.length > 0">
            <div class="guess-main-title">
              <div class="left" v-if="tab3 && item.MatchTypeId == 2">
                <p v-if="playtype == 2" v-text="getTime(item.ElapsedTime)"></p>
                <p v-if="playtype == 2">
                  {{ item.TeamMatchItemViewModels[0].Score }}:
                  {{ item.TeamMatchItemViewModels[1].Score }}
                </p>
              </div>
              <div
                class="go-club-bet"
                v-if="tab1 == true || tab2 == true"
                @click="goClubBet(item)"
              >
                {{ $t("ClubBetting") }}
              </div>
              <!-- 【 俱乐部投注 】 -->
              <div class="time" v-if="tab1 == true || tab2 == true">
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
                <!-- 【 更多玩法 】 -->
              </div>
            </div>
            <div class="guess-main-content" v-if="$store.state.match.comparisonMatchitems[itemI].CommonPlayViewModelGroups != undefined  && $store.state.match.comparisonMatchitems[itemI].CommonPlayViewModelGroups.length > 0">
              <div
                class="content-item"
                v-for="(itembets, itembetsI) in item.CommonPlayViewModelGroups"
                :key="itembets.id"
              >
                <div
                  v-for="(itembet, itembetI) in itembets"
                  :key="itembet.id"
                  @click="showBetFn(itembet.PlayId)"
                  :class="{ pstyle: itembet.PlayId != -1,
                  moreStyle: $store.state.match.comparisonMatchitems[itemI].CommonPlayViewModelGroups[itembetsI][itembetI].compare && itembetI != 0 && $store.state.match.comparisonMatchitems[itemI].CommonPlayViewModelGroups[itembetsI][itembetI].compare == 2,
                  lessStyle: $store.state.match.comparisonMatchitems[itemI].CommonPlayViewModelGroups[itembetsI][itembetI].compare && itembetI != 0 && $store.state.match.comparisonMatchitems[itemI].CommonPlayViewModelGroups[itembetsI][itembetI].compare == 3}"
                >
                <!-- moreStyle: $store.state.match.comparisonMatchitems[itemI].CommonPlayViewModelGroups[itembetsI][itembetI].compare && itembetI != 0 && $store.state.match.comparisonMatchitems[itemI].CommonPlayViewModelGroups[itembetsI][itembetI].compare == 2,
                  lessStyle: $store.state.match.comparisonMatchitems[itemI].CommonPlayViewModelGroups[itembetsI][itembetI].compare && itembetI != 0 && $store.state.match.comparisonMatchitems[itemI].CommonPlayViewModelGroups[itembetsI][itembetI].compare == 3 -->
                  {{ itembet.Text }}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="nodata" v-if="$store.state.match.Matchitems.length == 0">
          <p>{{ $t("NoData") }}</p>
          <!-- 【 暂无数据 】 -->
        </div>
      </div>
    </div>
    <!-- 廣告 -->
    <FlowAd :isOpenAd.sync="isOpenAd" :adTypeId="adTypeId" :AdObj ="AdObj"/>
    <nav-bottom class="match-bottom"></nav-bottom>
  </div>
</template>

<script>
import NavBottom from "@/components/Main/NavBottom.vue";
import back from "../components/Botton/back.vue";
import model from "../components/model";
import FlowAd from "@/components/FlowAd";
import { apiGetFlowAdByType } from "@/api/FlowAd.js";
import {
  apiGetBetResponse,
  apiBet,
  apiGetMatchItemAndMainPlay,
} from "../api/match.js";
import { betSuccess, betPass } from "@/utils/medias";

export default {
  watch: {
    //获得钱
    betnum: function () {
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
    },
  },
  components: {
    NavBottom,
    back,
    model,
    FlowAd,
  },

  data() {
    return {
      titlenum: "",

      tab1: false,
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
      num: 0,
      fastnum: "",
      loading: false,
      isrunTwice: false,
      IsOddsChange: false,
      lastOdds: "",
      newOdds: "",
      timer: {
        timer1: "",
        timer2: "",
        timer3: "",
      },
      countDownTimer: "",
      countDownTime: 30,
      isOpenAd: false,
      adTypeId: 0,
      isDisable: false,
      teamMatchItem: [],
      isBetDisable: false,
      isFirst: true,
      AdObj: {},
      newMatchitems: "",
      comparisonMatchitems: ""
    };
  },
  created() {
    // this.gettitlenum();
    this.$store.commit("upMatchitems", "");
    this.titlenum = localStorage.getItem("titlenum");
    this.$store.commit("upComparisonMatchitems", "");
    this.initGetMatchPlay();
    // await this.default();
  },
  methods: {
    fastbet(id) {
      this.fastnum = id;
      this.betnum = id;
    },
    getTime(time) {
      if (time == "") {
        return "0";
      }

      let timeNum = Number(time);
      return timeNum < 45
        ? this.$t("FirstHalf") + timeNum + "'" // 【 上半场 】
        : timeNum == 45
        ? this.$t("Halftime") // 【 半场 】
        : this.$t("SecondHalf") + (timeNum - 45) + ""; // 【 下半场 】
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
      let token = localStorage.getItem("token");
      if (!token) {
        this.$router.push("myself");
        return;
      }
      this.betnum = 0;
      this.playId = id;
      if (this.playId == -1) {
        return;
      }
      let data = {
        playId: id,
        betType: 1,
      };
      apiGetBetResponse(data, true).then((res) => {
        if (Math.abs(res.Code) >= 600) {
          this.$message({
            message: res.Message,
            duration: 3000,
            type: "error",
            center: true,
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

          // 判斷玩家餘額小於最小可投注額時，指针放置在开始位置显示最小可投注额 且不可拖动
          if (this.betinfo.AvailableIntegral < this.betinfo.MinBetIntegral) {
            this.isDisable = true;
            return;
          }
          // 判斷玩家餘額跟回傳的MaxBetIntegral 哪個小就取哪個
          if (this.betinfo.AvailableIntegral > res.MaxBetIntegral) {
            this.rangeMaxVal = res.MaxBetIntegral;
            this.isDisable = false;
          } else if (this.betinfo.AvailableIntegral < res.MaxBetIntegral) {
            this.rangeMaxVal = this.betinfo.AvailableIntegral;
            this.isDisable = false;
          } else if ((this.betinfo.AvailableIntegral = res.MaxBetIntegral)) {
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
      this.betnum = this.betnum + 10;
    },
    losebet() {
      if (this.betnum == 0) {
        return;
      }
      this.betnum = this.betnum - 10;
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

    // 若前後賠率相同則執行投注
    async bet() {
      // 防止连点
      if (this.isBetDisable || !this.showbet) {
        return false;
      }
      this.isBetDisable = true; // 防止连点

      let hthis = this;
      let data = {
        playId: this.playId,
        betIntegral: this.betnum,
        betType: 1,
      };

      if (this.betnum >= 10) {
        await apiBet(data, true).then((res) => {
          if (res.IsBetSucceed) {
            this.$message({
              message: this.$t("BettingSuccess"), // 【 下注成功 】
              duration: 2500,
              type: "success",
              center: true,
            });
            this.fastnum = "";
            this.showbet = false;
            // 下注成功音效
            betSuccess.play();
            // 彈出廣告
            this.adTypeId = 2;
            let data = {
              flowAdTypeId: this.adTypeId,
            };
            apiGetFlowAdByType(data, true).then((res) => {
              if (res.Data.Id == 0) {
                this.isOpenAd = false;
              } else {
                this.isOpenAd = true;
                this.AdObj = res.Data;
              }
              this.isBetDisable = false; // 防止连点
            });
          } else if (Math.abs(res.Code) >= 600) {
            this.$message({
              message: res.Message,
              duration: 3000,
              type: "error",
              center: true,
            });
            if (res.Message == "余额不足") {
              // 彈出廣告
              setTimeout(() => {
                this.adTypeId = 2;
                let data = {
                  flowAdTypeId: this.adTypeId,
                };
                apiGetFlowAdByType(data, true).then((res) => {
                  if (res.Data.Id == 0) {
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
            this.isBetDisable = false;  // 防止连点
          }
        });
      } else {
        this.$message.error(this.$t("BetErrorMessage")); // 【 投注金额需要大于10元 】
      }
      // 刷新API
      this.getMatchPlay();
    },
    async default() {
      // 如果外面是點選[全部]進來的
      if (this.titlenum == -1) {
        // 沒有早盤的話跑今日
        if (this.$store.state.match.Matchitems.length == 0) {
          this.tabshow(1).then(() => {
            // 沒有今日的話跑滾球
            if (this.$store.state.match.Matchitems.length == 0) {
              this.tabshow(2);
            }
          });
        }
      }
      // 如果外面是點選[早盤]進來的
      else if (this.titlenum == 0) {
        this.tabshow(0);
      }
      // 如果外面是點選[今日]進來的
      else if (this.titlenum == 1) {
        this.tabshow(1);
      }
      // 如果外面是點選[滾球]進來的
      else if (this.titlenum == 2) {
        this.tabshow(2);
      }
      this.cycling();
    },

    //畫面一進來時候获取早盤玩法
    async initGetMatchPlay() {
      this.tabshow(0).then(() => {
        this.default();
      });
    },

    //获取赛事玩法
    async getMatchPlay() {
      this.$store.dispatch("asyncGetMatchplay", {
        id: this.playtype,
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
        id: id,
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
        center: true,
      });
      setTimeout(() => {
        m.close();
      }, 2000);
    },
    // 停止全部計時器
    destroyed() {
      clearInterval(this.timer.timer1);
      clearInterval(this.timer.timer2);
      clearInterval(this.timer.timer3);
      clearInterval(this.countDownTimer);
    },
    gettitlenum() {
      if (this.$store.state.match.titlenum == 2) {
        this.tabshow(2);
        this.$store.commit("uptitlenum", {
          id: -1,
        });
        return;
      }
      if (this.$store.state.match.titlenum == 0) {
        this.tabshow(0);
        this.$store.commit("uptitlenum", {
          id: -1,
        });
        return;
      }
    },

    // 新賠率
    async newChangeOdds() {
      if (this.playId == -1) {
        return;
      }
      let data = {
        playId: this.playId,
        betType: 1,
      };
      await apiGetBetResponse(data, true).then((res) => {
        if (Math.abs(res.Code) >= 600) {
          this.$message({
            message: res.Message,
            duration: 3000,
            type: "error",
            center: true,
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

    // 俱樂部投注
    goClubBet(item) {
      // 判斷有無獨贏玩法
      if (item.CanJoinGambling == true) {
        localStorage.setItem("matchItemId", item.MatchItemId);
        setTimeout(() => {
          this.$router.push("InitiateActivities");
        }, 250);
      } else {
        let vm = this;
        const m = vm.$message({
          message: "无独赢赔率，请选择其他比赛。",
          duration: 3000,
          type: "error",
          center: true,
        });
        setTimeout(() => m.close(), 2000);
      }
    },
  },

  // 跳出本頁時 vue hook(生命週期)
  destroyed() {
    clearInterval(this.timer.timer1);
    clearInterval(this.timer.timer2);
    clearInterval(this.timer.timer3);
    clearInterval(this.countDownTimer);
    // this.$store.commit("upMatchitems", "")
  },
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
.loadclass {
  position: absolute;
  z-index: 998;
  width: 100%;
  height: 3rem;
  text-align: center;
  font-size: 0.5rem;
  background-color: #171d2d;
  margin: 0 auto;

  &-p {
    margin: 0 auto;
    font-size: 0.5rem;
    padding-top: 3.1rem;
    color: #fff;
  }
}
.rank-match .banner {
  margin-top: 1.3rem !important;
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

<template>
  <div class="rank-match" v-cloak>
    <transition name="fade">
      <model v-if="$store.state.match.loading"></model>
    </transition>
    <transition name="fade">
      <i v-if="$store.state.match.loading" class="el-icon-loading"></i>
    </transition>
    <transition name="fade">
      <model v-if="showbet"></model>
    </transition>
    <!-- 投注 -->
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
              <span>{{ this.betinfo.Position }}</span>
              <span>@{{ this.betinfo.OddsValue }}</span>
            </div>
            <!-- 下注 -->
            <div class="betin">
              <span class="betin-span">{{ $t("BetAmount") }}</span>  <!-- 【 投注金额 】 -->
              <input class="betin-input" type="text" v-model="betnum" />
              <i class="add" @click="addbet"> </i
              ><i class="lose" @click="losebet"></i>
            </div>
            <!-- 获得金额 -->
            <div class="getmoney">
              <span class="betin-span">{{ $t("WinableAmount") }}</span>  <!-- 【 可赢金额 】 -->
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
            ></el-slider>
          </div>
          <div class="bet-main__second__wrap">
            <div class="fastbet-text-wrap">
              <span class="fastbet_text">{{ $t("QuicklySelectAmount") }}</span>  <!-- 【 左右滑动快速选择金额 】 -->
            </div>
            <div class="rules">
              <span class="rules-text">{{ $t("MinimumBetAmount") }}</span>  <!-- 【 最低投注金额 】 -->
              <span class="rules-money">{{ this.betinfo.MinBetIntegral }} {{ $t("Coins") }}</span>  <!-- 【 Coins 】 -->
            </div>
            <div class="btn betbtn" @click="bet">{{ $t("Bet") }}</div>
          </div>
        </div>
        <div class="close" @click="closedialog"></div>
      </div>
    </transition>
    <div class="match">
      <div class="rank-match-head">
        <back class="back-icon"></back>

        <div class="title">{{ $store.state.match.MatchName }}</div>
        <div class="num"></div>
      </div>
      <div class="banner">
        <div class="banner-tabs">
          <div :class="{ 'tab-active': tab1, tab: true }" @click="tabshow1(11)">
            {{ $t("CorrectScore") }}  <!-- 【 波胆 】 -->
          </div>
          <div :class="{ 'tab-active': tab2, tab: true }" @click="tabshow2(9)">
            {{ $t("Goals") }}  <!-- 【 入球数 】 -->
          </div>
          <div :class="{ 'tab-active': tab3, tab: true }" @click="tabshow3(10)">
            {{ $t("DoubleResult") }}  <!-- 【 半全场 】 -->
          </div>
        </div>

        <router-link to="/guize"> <i class="banner-quset"></i></router-link>
      </div>
      <div class="main-main">
        <div
          class="rank-match-main"
          v-for="(item, index) in $store.state.match.MatchSpecial"
          :key="item.index"
        >
          <div class="title">
            <div class="left">
              <img
                v-if="item.TeamMatchItemViewModels[0].Img"
                :src="item.TeamMatchItemViewModels[0].Img"
                class="home-img"
              />
              <img v-else src="@/assets/instead_logo1.png" class="home-img" />
              <span class="homename">{{
                item.MatchItemName.slice(0, item.MatchItemName.indexOf("V"))
              }}</span>
            </div>
            <div class="title-center">
              <span class="home commondiv">{{ $t("Host") }}</span>  <!-- 【 主 】 -->
              <span class="away commondiv">{{ $t("Guest") }}</span>  <!-- 【 客 】 -->
            </div>
            <div class="right">
              <span class="awayname">{{
                item.MatchItemName.slice(item.MatchItemName.indexOf("S") + 1)
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

          <div class="guess-main">
            <div class="guess-main-title">
              <div class="left"></div>
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
              <div class="more" @click="gojump">{{ $t("Return") }}</div>  <!-- 【 返回 】 -->
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
        <div class="nodata" v-if="$store.state.match.MatchSpecial.length == 0">
          <p>{{ $t("NoData") }}</p>  <!-- 【 暂无数据 】 -->
        </div>
      </div>
    </div>
    <nav-bottom class="match-bottom"></nav-bottom>
  </div>
</template>

<script>
import NavBottom from "@/components/Main/NavBottom.vue";
import back from "../components/Botton/back.vue";
import model from "../components/model";
import { apiGetBetResponse, apiBet } from "../api/match.js";
import { betSuccess } from "@/utils/medias";
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
    model
  },
  created() {
    // this.getMatchPlay();
    this.getMatchMorePlay();
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
      playtype: 11,
      playId: "",
      betinfo: "",
      fastnum: ""
    };
  },
  methods: {
    fastbet(id) {
      this.fastnum = id;
      this.betnum = id;
    },
    gojump() {
      this.$router.go(-1);
    },
    //关闭下注
    closedialog() {
      this.showbet = false;
    },

    showBetFn(id) {
      // if (id > 0) {
      //   this.showbet = true;
      // }
      this.playId = id;
      if (this.playId == -1) {
        return;
      }
      let data = {
        playId: id,
        betType: 1
      };
      apiGetBetResponse(data, true).then(res => {
        if (Math.abs(res.Code) >= 600) {
          this.$message({
            message: res.Message,
            duration: 3000,
            type: "error",
            center: true
          });
        } else {
          this.showbet = true;

          this.betinfo = res;

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
      this.betnum = this.betnum + 10;
    },
    losebet() {
      this.betnum = this.betnum - 10;
    },
    //可赢金额
    getmoney() {
      this.money = this.betnum * this.betinfo.OddsValue;
    },
    //下注
    bet() {
      let data = {
        playId: this.playId,
        betIntegral: this.betnum,
        betType: 1
      };
      if (this.betnum >= 10) {
        apiBet(data, true).then(res => {
          if (res.IsBetSucceed) {
            this.$message({
              message: this.$t("BettingSuccess"),
              duration: 2500,
              type: "success",
              center: true
            });
            this.showbet = false;
            this.fastnum = "";
            // 下注成功音效
            betSuccess.play();
          } else if (Math.abs(res.Code) >= 600) {
            this.$message({
              message: res.Message,
              duration: 1000,
              type: "error",
              center: true
            });
          }
        });
      } else {
        this.$message.error(this.$t("BetErrorMessage"));
      }
    },
    //获取赛事玩法
    getMatchPlay() {
      this.$store.dispatch("asyncGetMatchplay", {
        id: this.playtype
      });
    },
    //更多玩法
    getMatchMorePlay(id) {
      let data = {
        playTypeList: id || this.playtype
      };
      this.$store.dispatch("asyncGetMatchMorePlay", {
        data
      });
    },
    tabshow1(id) {
      this.$store.commit("uploading", true);
      this.playtype = id;
      this.tab1 = true;
      this.tab2 = false;
      this.tab3 = false;
      this.getMatchMorePlay(id);
    },
    tabshow2(id) {
      this.$store.commit("uploading", true);
      this.playtype = id;
      this.tab1 = false;
      this.tab2 = true;
      this.tab3 = false;
      this.getMatchMorePlay(id);
    },
    tabshow3(id) {
      this.$store.commit("uploading", true);
      this.playtype = id;
      this.tab1 = false;
      this.tab2 = false;
      this.tab3 = true;
      this.getMatchMorePlay(id);
    }
  }
};
</script>

<style scoped>
.el-icon-loading {
  position: absolute;
  left: 44%;
  top: 34%;
  transform: translateX(-50%);
  z-index: 1111;
  font-size: 1rem;
  color: #fff;
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

 /* element UI 的 slide拉桿樣式 */
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

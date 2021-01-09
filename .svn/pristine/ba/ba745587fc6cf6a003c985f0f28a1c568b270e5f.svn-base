<template>
  <main class="guize" ref="cont" style="-webkit-overflow-scrolling: touch;">
    <div class="guize-header" style="position: fixed;top: 0;z-index: 2;">
      <back class="back-icon img-he"></back>
      <h3>{{ $t("Guide") }}</h3>
    </div>
    <div class="guize-content" style="padding: 1.1rem 0 1rem 0;">
      <!-- <div class="tab">
                <a href="#" @click="Tocontone">基本信息</a>
                <a href="#" @click="Toconttwo">使用状态</a>
                <a href="#" @click="Tocontthree">位置信息</a>
                <a href="#" @click="Tocontfour">采购信息</a>
                <a href="#" @click="Tocontfive">质保信息</a>
                <a href="#" @click="Tocontsix">折旧信息</a>
            </div> -->

      <div class="title">
        <p class="title-big" style="text-align: center;height: .82rem;">
          <img src="@/assets/te_03.png" alt="" />
          {{ $t("GameRules") }}
          <img
            style="transform: rotate(180deg);position: relative; z-index: 1"
            src="@/assets/te_03.png"
            alt=""
          />
        </p>
        <!-- <p class="title-time">2019-09-22</p> -->
        <!-- <p class="title-time">投注类型</p> -->
        <div>
          <p class="bold">
            <img class="smallImg" src="@/assets/small.png" />
            <span>{{ $t("Market") }}：</span>
          </p>
          <p class="count">
            {{ $t("MarketContent") }}
          </p>
          <p class="bold">
            <img class="smallImg" src="@/assets/small.png" />
            <span>{{ $t("MatchOdds") }}：</span>
          </p>
          <p class="count">
            {{ $t("MatchOddsContent") }}
          </p>
          <p class="bold">
            <img class="smallImg" src="@/assets/small.png" />
            <span>{{ $t("Handicap") }}：</span>
          </p>
          <p class="count">
            {{ $t("HandicapContent") }}<br />
            {{ $t("HandicapContentC1") }}<br />
            {{ $t("HandicapContentC2") }}
          </p>
          <p class="bold">
            <img class="smallImg" src="@/assets/small.png" />
            <span>{{ $t("OverUnder") }}：</span>
          </p>
          <p class="count">
            {{ $t("OverUnderContent") }}<br />
            {{ $t("OverUnderContentA1") }}<br />
            {{ $t("OverUnderContentA2") }}
          </p>
          <p class="bold">
            <img class="smallImg" src="@/assets/small.png" />
            <span>{{ $t("OddEven") }}：</span>
          </p>
          <p class="count">
            {{ $t("OddEvenContent") }}<br />
            {{ $t("OddEvenContentB1") }}<br />
            {{ $t("OddEvenContentB2") }}<br />
            {{ $t("OddEvenContentB3") }}
          </p>
          <p class="bold">
            <img class="smallImg" src="@/assets/small.png" />
            <span>{{ $t("FirstHalfHandicap") }}：</span>
          </p>
          <p class="count">
            {{ $t("FirstHalfHandicapContent") }}
          </p>
          <p class="bold">
            <img class="smallImg" src="@/assets/small.png" />
            <span>{{ $t("CorrectScore") }}：</span>
          </p>
          <p class="count">
            {{ $t("CorrectScoreContent") }}
          </p>
          <p class="bold">
            <img class="smallImg" src="@/assets/small.png" />
            <span>{{ $t("TotalGoalsGuide") }}：</span>
          </p>
          <p class="count">
            {{ $t("TotalGoalsGuideContent") }}
          </p>
          <p class="bold">
            <img class="smallImg" src="@/assets/small.png" />
            <span>{{ $t("HalfTimeFullTime") }}：</span>
          </p>
          <p class="count">
            {{ $t("HalfTimeFullTimeContent") }}
          </p>
          <p class="bold">
            <img class="smallImg" src="@/assets/small.png" />
            <span>{{ $t("HandicapOfRollingBall") }}：</span>
          </p>
          <p class="count">
            {{ $t("HandicapOfRollingBallContent") }}
          </p>
        </div>

        <!-- <p style="margin: .28rem 0;height: .3rem;">
                    <img style="display: block; width: calc(100% - .4rem);margin: 0 auto;" src="@/assets/te_07.png" alt="">
                </p> -->

        <!-- <p class="title-time">投注规则</p>
                <div>
                    <p class="bold">
                        <img class='smallImg' src='@/assets/small.png' />
                        <span>大小盘投注：</span>
                    </p>
                    <p class="count">
                        大小盘（总入球数）：在指定球赛中当投注该场比赛的大小盘（全场总入球数）时，若总入球数高于该场比赛的大小盘球数则为大盘，若总进球数低于该场比赛的大小盘球数则为小盘。赛事结束如总进球数恰好等于[大小盘球数]，则该竞猜分数将全数退回，比赛结果以以法定比赛时间结果为准。
                    </p>
                    <p class="blue">
                        <span style="margin-left: .7rem;"> A.1）让球方式1：在一场球赛中，如大小盘“3球”</span>（竞猜的分数被投注在“3球”大/小的球盘上）。
                    </p>
                    <p class="blue">
                            <span style="margin-left: .7rem;">A.A.2）让球方式2：在一场球赛中，如开出两个大小盘</span>“2.5球/3球”（竞猜的分数被平分为两份，一半投注在大/小“2.5”的球盘上。而另一半竞猜则投注在大/小“3球”的球盘上）。/小的球盘上）。
                    </p>

                    <p class="bold">
                        <img class='smallImg' src='@/assets/small.png' />
                        <span>单/双投注：</span>
                    </p>
                    <p class="count">在指定球赛中，两队在全场法定时间内入球的总数为[单]或[双]。球赛以法定时间结果为准。[大小盘球数]，则该竞猜分数将全数退回，比赛结果以以法定比赛时间结果为准。</p>
                    <p class="count">
                        <span style="margin-left: .7rem;">
                            B.1）入球单数：即全场总入球数为单数。
                        </span>
                    </p>
                    <p class="count">
                        <span style="margin-left: .7rem;">
                            B.2）入球双数：即全场入球数为双数或零。
                        </span>
                    </p>
                    <p class="count">
                        <span style="margin-left: .7rem;">
                            B.3）预测一场比赛中的进球总数是单数还是双数的投注方法，如果比赛结果0-0被视为双数。乌龙球将被予以计算在内。
                        </span>
                    </p>

                    <p class="bold">
                        <img class='smallImg' src='@/assets/small.png' />
                        <span>让球盘投注：</span>
                    </p>
                    <p class="count">
                            在指定球赛中，其中一队球队提供让球作为比赛条件，赛果以法定时间结果为准。如果用户竞猜被让球一方，比分需要在比赛最终比分上再加上虚拟领先分数，以此结果为准计算输赢。
                    </p>
                    <p class="blue">
                        <span style="margin-left: .7rem;">C.1）让球方式1：在一场球赛中，其中一队球队开出[一</span>个]让球球盘。如让“一”球。(竞猜的分数将全数被投注在让“一”球的球盘上)。
                    </p>
                    <p class="blue">
                        <span style="margin-left: .7rem;">C.2）让球方式2：在一场球赛中，其中一队球队开出[二</span>个]让球球盘。如让“半/一”球。(在竞猜的分数将被平分为两份，一半金额投注在让“半”球的球盘上而另一半金额则投注在让“一”球的球盘上。)
                    </p>

                    <p class="bold">
                        <img class='smallImg' src='@/assets/small.png' />
                        <span>让球上半场投注：</span>
                    </p>
                    <p class="count">
                        所有赛事竞猜皆以上半场的球赛结果为准。竞猜上半场所有种类竞猜，皆以上半场比赛结果为准。如上半场比赛取消或赛程中断，竞猜上半场所有投注一律取消。如下半场比赛取消或赛程中断，竞猜上半场所有投注均属有效。如果赛事中，主队的球场被换到一个中立的球场或原本是在（中立）球场的赛事被换到（主队）的球场进行，所有的竞猜将保持有效。
                    </p>

                    <p class="bold">
                        <img class='smallImg' src='@/assets/small.png' />
                        <span>波胆投注：</span>
                    </p>
                    <p class="count">
                        在指定的球赛中，<span style="color: #18bf02">完全100%正确的预测比赛正确比分。</span> 
                    </p>

                    <p class="bold">
                        <img class='smallImg' src='@/assets/small.png' />
                        <span>总入球投注：</span>
                    </p>
                    <p class="count">
                        在指定球赛中，两队在全场法定时间内入球之总数。竞猜选项：0-1球，2-3球，4-6球，7球或以上。
                    </p>

                    <p class="bold">
                        <img class='smallImg' src='@/assets/small.png' />
                        <span>独赢盘投注：</span>
                    </p>
                    <p class="count">
                        在指定球赛中，两队以平手的方式（不计算让分在内）选择其中一队胜出，赛果均以球赛法定时间结果为准。乌龙球将被予以计算在内。
                    </p>

                    <p class="bold">
                        <img class='smallImg' src='@/assets/small.png' />
                        <span>半全场投注：</span>
                    </p>
                    <p class="count">
                            竞猜指定一场球赛的半场及全场赛果。乌龙球将被予以计算在内。
                    </p>

                    <p class="bold">
                        <img class='smallImg' src='@/assets/small.png' />
                        <span>滚球让球盘投注：</span>
                    </p>
                    <p class="count">
                        在滚球赛事中，其中一队球队提供让球之条件，赛果以法定时间球赛结果为准。胜出：滚球让球盘输赢是以比赛最终比分减去竞猜当时的比赛分数，根据竞猜当时的赔率，作为胜出条件。
                    </p>

                    <p class="bold">
                        <img class='smallImg' src='@/assets/small.png' />
                        <span>滚球大小盘投注：</span>
                    </p>
                    <p class="count">
                            在滚球球赛中当竞猜该场比赛的大小盘（全场总入球数）时，若总入球数高于该场的大小盘球数则被视为大盘，若总入球数低于该场比赛的大小盘球数则被视为小盘。如果总入球数等于大小盘，将退回竞猜积分。胜出：滚球大小盘是以根据比赛最终结果总入球数决定，与竞猜时大/小的赔率比对，作为胜出之条件。
                    </p> -->
        <!-- </div> -->
        <div
          style="position:fixed;bottom:0;right:0"
          class="backTop"
          @click="like"
        >
          <img
            v-show="lice"
            style="display:inline-block;width:.8rem;height:.8rem"
            src="@/assets/up.png"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import back from "@/components/Botton/back.vue";
export default {
  components: {
    back
  },
  data() {
    return {
      list: {
        title: "大将：上赛季的争冠经验帮助利物浦成长",
        time: "2019-09-22"
      },
      lice: false,
      t: ""
    };
  },
  methods: {
    like() {
      clearInterval(this.t);
      this.t = setInterval(() => {
        if (this.$refs.cont.scrollTop >= 200) {
          this.$refs.cont.scrollTop -= this.$refs.cont.scrollTop / 10;
        } else if (this.$refs.cont.scrollTop >= 20) {
          this.$refs.cont.scrollTop = 0;
          clearInterval(this.t);
        }
      }, 1);
    },
    scrollTop() {
      // 判断回到顶部的元素是否显示
      let lik = this.$refs.cont.scrollTop;
      if (lik >= 300) {
        this.lice = true;
      } else {
        this.lice = false;
      }
    },
    goBack() {
      this.$router.go(-1);
    },
    Tocontone() {
      document.querySelector("#contone").scrollIntoView(true);
    },
    Toconttwo() {
      document.querySelector("#conttwo").scrollIntoView(true);
    },
    Tocontthree() {
      document.querySelector("#contthree").scrollIntoView(true);
    },
    Tocontfour() {
      document.querySelector("#contfour").scrollIntoView(true);
    },
    Tocontfive() {
      document.querySelector("#contfive").scrollIntoView(true);
    },
    Tocontsix() {
      document.querySelector("#contsix").scrollIntoView(true);
    }
  },
  mounted() {
    const id = this.$route.params.id;
    this.$refs.cont.addEventListener("scroll", this.scrollTop); // 绑定scroll事件
  }
};
</script>

<style scoped>
.smallImg {
  display: inline-block;
  vertical-align: middle;
  width: 0.5rem;
  height: 0.4rem;
}
</style>

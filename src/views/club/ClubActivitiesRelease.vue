<template>
  <div class="activities-release">
    <div class="activities-release-header">
      <div class="activities-release-header-wrap">
        <back class="back-icon img-he"></back>
        <h3>{{ $t("MyClub") }}</h3>
        <!--我的俱乐部-->
      </div>
    </div>

    <div class="activities-release-content">
      <p class="activities-release-title">{{ $t("PleaseSelectALeague") }}</p>
      <!-- 请选择联赛 -->
      <!-- Swiper -->
      <swiper class="swiper" :options="swiperOption" ref="mySwiper">
        <swiper-slide v-for="(item, index) in leagueNewAry">
          <div class="league-box" v-for="(items, indexs) in item" @click="selectLeague(index, indexs)">
            <div :class="[leagueNewAryIndex == index && leagueNewAryItemIndex == indexs? 'selested': 'unSelect']"></div>
            <!-- <img :src="items.MatchImg" /> -->
            <div v-if="items.MatchImg" class="league-box-img" :style="{ backgroundImage: 'url(' + items.MatchImg + ')' }"></div>
            <div v-else class="league-box-no-img"></div>
            <p class="matchName">{{ items.MatchName }}</p>
          </div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>

      <!-- 輸入活動標題 -->
      <p class="activities-release-title">{{ $t("ActiveTitle") }}</p>
      <input class="enter-title" type="text" :placeholder="$t('ActiveTitleTip')" v-model="acvtiveTitle">
      <!-- 選擇門票 -->
      <p class="activities-release-title">{{ $t("PleaseSelectTickets") }}</p>
      <!-- 请选择门票 -->
      <div class="select-wrap">
        <p class="select-title">{{ $t("Tickets") }}</p>
        <!-- 门票 -->
        <input type="text" placeholder="0" v-model="ticket" disabled="disabled"/>
      </div>

      <!-- 選擇場次 -->
      <p class="activities-release-title">{{ $t("PleaseSelectTheSession") }}</p>
      <!-- 请选择场次 -->
      <div class="select-wrap">
        <p class="select-titlet">{{ $t("Session") }}</p><!-- 場次 -->
        <div :class="[sessionIndex == index ?'select-num-active':'select-num']" v-for="(num, index) in selectNum" @click="selectSession(index)">{{ num }}</div>
      </div>
    </div>
    <button class="activities-release-btn" @click="isFancyBoxOpen = true">{{ $t('Confirm') }}</button>
    <transition name="fade">
		  <model v-if="isFancyBoxOpen"></model>
	  </transition>
	  <transition name="fade">
      <div class="fancy-box" v-if="isFancyBoxOpen">
        <img src="../../assets/club/ticket-header.png" alt="">
        <div class="fancy-box-content">
          <p>{{ $t('SureToCreateThisEvent') }}?</p>
        </div>
        <div class="fancy-box-btn">
          <div class="fancy-box-btn-confirm" @click="releaseActive()" :disabled="isClickTwice">{{ $t('Confirm') }}</div>
          <div class="fancy-box-btn-cancel" @click="isFancyBoxOpen = !isFancyBoxOpen">{{ $t('Cancel') }}</div>
        </div>
      </div>
	  </transition>
  </div>
</template>
<script>
import back from "@/components/Botton/back.vue";
import model from "@/components/model";
import { apiGetClubActivityMatchInfo, apiAddClubActivity } from "@/api/ClubActivitys.js";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  components: {
    back,
    swiper,
    swiperSlide,
    model
  },
  data() {
    return {
      league: [],
      leagueNewAry: [],
      leagueId: "",
      isSelect: false,
      leagueNewAryIndex: undefined,
      leagueNewAryItemIndex: undefined,
      ticket: "",
      selectNum: [],
      sessionIndex: undefined,
      acvtiveTitle: "",
      sessionNum: "",
      isClickTwice: false,
      // clubId
      clubId: "",
      //swiper
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        },
        // on: {
        //   // 使用es6的箭头函数，使this指向vue对象
        //   slideNextTransitionEnd: () => {
        //     this.index += 1;
        //     this.loadActivityMatchInfo()
        //   }
        // }
      },
      isFancyBoxOpen: false
    };
  },
  created() {
    localStorage.setItem("categoryIndex", 1);
    this.clubId = localStorage.getItem("ClubId");
    this.getActivityMatchInfo();
  },
  methods: {
    // 活動發布輪播
    activesSlide() {
      this.leagueNewAry = [];
      for (var i = 0, len = this.league.length; i < len; i += 6) {
        this.leagueNewAry.push(this.league.slice(i, i + 6));
      }
    },

    // 獲取聯賽資料
    getActivityMatchInfo() {
      apiGetClubActivityMatchInfo("", true).then(res => {
        this.league = res.Data.ActivityMatches;

        // 門票
        this.ticket = res.Data.JoinAmount;
        // 場次
        let str = res.Data.SelectNum;
        this.selectNum = str.split(',');

        this.activesSlide();
      });
    },

    // 聯賽資料加載
    // loadActivityMatchInfo() {
    //   // 獲取clubId
    //   // this.clubId = localStorage.getItem("ClubId");
    //   let data = {
    //     clubId: this.clubId,
    //     index: this.index,
    //     count: 7
    //   };
    //   apiGetClubActivityMatchInfo(data, true).then(res => {
    //     res.Data.ActivityMatches.Data.forEach(el => {
    //       this.league.push(el);
    //     });
    //     this.activesSlide();
    //   });
    // },

    // 點選聯賽
    selectLeague(index, indexs) {
      if (this.leagueNewAryIndex == index && this.leagueNewAryItemIndex == indexs) {
        this.leagueNewAryIndex = undefined;
        this.leagueNewAryItemIndex = undefined;
        this.leagueId = "";
        return;
      }
      this.leagueNewAryIndex = index;
      this.leagueNewAryItemIndex = indexs;

      // 儲存點選到的聯賽ID
      this.leagueId = this.leagueNewAry[index][indexs].MatchId;
      this.isClickTwice = false;
    },

    //選擇場次
    selectSession(index) {
      if (this.sessionIndex == index) {
        this.sessionIndex = undefined;
        this.sessionNum = "";
        return;
      }
      this.sessionIndex = index;
      this.sessionNum = this.selectNum[index];
    },

    // 發布活動
    releaseActive() {
      // 防止连点
      if(this.isClickTwice){
        return false;
      }
      this.isClickTwice = true

      if(this.leagueId == "") {
        this.$message({
          message: this.$t("PleaseSelectALeague"),
          type: "warning",
          center: true,
          duration: 1200
      });
        this.isFancyBoxOpen = false;
        return;
      } 
      if(this.acvtiveTitle == "") {
        this.$message({
          message: this.$t("ActiveTitle"),
          type: "warning",
          center: true,
          duration: 1200
        });
        this.isFancyBoxOpen = false;
        return;
      }
      if(this.sessionNum == "") {
        this.$message({
          message: this.$t("PleaseSelectTheSession"),
          type: "warning",
          center: true,
          duration: 1200
        });
        this.isFancyBoxOpen = false;
        return;
      }

        let data = {
          SelectLeague: this.leagueId,
          NumGames: this.sessionNum,
          ActivityContent: this.acvtiveTitle,
        };
        apiAddClubActivity(data, true).then(res => {
          if (Math.abs(res.Code) >= 600) {
            this.$message({
              message: res.Message,
              type: "warning",
              center: true,
              duration: 3000
            });
          } else {
            this.$message({
              message: res.Message,
              type: "success",
              center: true,
              duration: 3000
            });
            setTimeout(() => {
              this.$router.push('/ClubActivities')
            }, 3000);
          }
          this.isFancyBoxOpen = false;
          this.isClickTwice = false// 防止连点
        });
    }
  },
  beforeDestroy() {
    localStorage.setItem("categoryIndex", 1);
  }
};
</script>

<template>
  <div class="myclub">
    <div class="myclub-header">
      <div class="myclub-header-wrap">
        <back class="back-icon img-he"></back>
        <h3>{{ clubData1.clubName }}</h3>
        <!--我的俱乐部-->
      </div>
      <div class="my-authority" v-if="isManagement == 1 || isManagement == 2" @click="myAuthority()">
        <span>{{ $t("MyPermissions") }}</span
        ><!--我的权限-->
        <img src="../../assets/club/arrow.png" />
      </div>
    </div>

    <div class="club-info">
      <div class="club-info-content">
        <!-- 俱樂部列表連結按鈕 -->
        <div class="club-list-btn" @click="$router.push('/CreateClub')"></div>

        <!-- 俱樂部活動連結按鈕 -->
        <div class="activies-btn" @click="goClubActivities()">
          {{$t('ClubActivities')}}
        </div>

        <!-- 大頭照 -->
        <img class="club-data-personal-img" :src="Uimg" />

        <!-- 進度條 -->
        <div class="scale"></div>
        <div class="club-grow-bar">
          <div class="grow-bar-tooltip" :style="{ left: tipCssLeft + 'px' }">
            <span class="grow-bar-tooltip-text">{{ growValue }} / {{growMaxValue}}</span>
          </div>
          <el-slider v-show="true" v-model="growValue" :show-tooltip="false" :min="growMinValue" :max="growMaxValue" disabled="disabled"></el-slider>
        </div>

        <!-- 俱樂部等級 -->
        <div class="club-data-level-wrap">
          <div class="club-data-club-info">
            <p>{{ clubData1.clubLevel }}</p>
            <span>{{ $t("ClubLevel") }}</span><!--俱乐部等级-->
          </div>
          <div class="club-data-club-info" @click="$router.push('/MemberDynamic')">
            <p>{{ clubData1.memberNum }}</p>
            <span>{{ $t("ClubMembers") }}</span><!--俱乐部成员-->
          </div>
        </div>

        <!-- 成員動態 -->
        <div class="member-dynamics">
          <!-- <div class="member-dynamics-box"> -->
            <ul class="info" :class="{marquee_top:animate}">
              <li v-for="item in marqueeList">
                <p>{{ item.NickName }}</p>
                <p>{{ $t('TotalBetting') }}{{ item.BetSumNum }}{{ $t('Times') }}</p><!-- 次 -->
                <p>{{ $t('Contribution') }}{{ item.Contribution }}</p>
              </li>
            </ul>
          <!-- </div> -->
          <div class="scroll-icon"></div>
        </div>
      </div>
    </div>

    <!-- 俱樂部戰績 -->
    <div class="club-data-record">
      <p class="club-title">{{ $t("ClubRecord") }}</p><!--俱乐部战绩-->
      <div class="club-data-record-content">
        <div v-for="(item, index) in recordObj" class="club-data-record-content-box" :style="{ 'background': 'url(' + require('@/assets/club/record_'+ index +'.png') + ') no-repeat center center', 'background-size': 'cover'}">
          <div class="state" :class="'text-bgcolor' + index">
            <p>{{ item.state }}</p>
          </div>
          <div class="times">
            <p v-if="index == 0 || index == 2 || index == 3">{{ item.times }}</p>
            <p v-if="index == 1" :class="{'smallText': smallText}">{{ item.times }}</p>
            <span  v-if="index == 0 || index == 2 || index == 3" class="green">{{ $t("Times") }}</span><!--次-->
            <span  v-if="index == 1" class="green">{{ $t("Coins") }}</span><!--金幣-->
          </div>
          <p class="tip">{{ item.tip }}</p>
        </div>
      </div>
    </div>

    <!-- 俱樂部公告 -->
    <div class="club-notice">
      <p class="club-title">{{ $t("ClubNotice") }}</p><!--俱樂部公告-->
      <div class="club-notice-message-list">
        <div class="club-notice-message-list-up">
          <img src="@/assets/club/message.png" />
          <div class="club-notice-message-list-up-right">
            <div class="club-notice-message-list-wrap">
              <div class="club-notice-message-list-title">{{ clubMsgList.Title }}</div>
              <div class="club-notice-message-list-date">{{ clubMsgTime }}</div>
            </div>
            <div class="club-notice-message-list-detail">
              {{ clubMsgList.Content }}
            </div>
          </div>
        </div>
        <!--顯示更多-->
        <!-- <div class="club-notice-message-list-down" v-if="!isOpenDetail">{{ $t('DisplayMore') }}</div> -->
        <!--隱藏-->
        <!-- <div class="club-notice-message-list-down" v-if="isOpenDetail">{{ $t('Hide') }}</div> -->
      </div>
    </div>

    <!-- 退出俱樂部按鈕 -->
    <div class="quit-club">
      <div class="quit-club-btn" @click="isFancyBoxOpen = !isFancyBoxOpen">{{ $t('ExitClub') }}</div><!--退出俱樂部-->
    </div>

    <!-- 退出俱樂部彈窗 -->
    <transition name="fade">
		  <model v-if="isFancyBoxOpen"></model>
	  </transition>
	  <transition name="fade">
		<div class="fancy-box" v-if="isFancyBoxOpen">
			<img src="../../assets/club/ticket-header.png" alt="">
      <div class="fancy-box-content">
			  <p>{{ $t('ExitClub') }}?</p>
      </div>
			<div class="fancy-box-btn">
				<div class="fancy-box-btn-confirm" @click="exitClub()">{{ $t('Confirm') }}</div>
				<div class="fancy-box-btn-cancel" @click="isFancyBoxOpen = !isFancyBoxOpen">{{ $t('Cancel') }}</div>
			</div>
		</div>
	</transition>
  </div>
</template>
<script>
import back from "@/components/Botton/back.vue";
import model from "@/components/model";
import { apiGetMyClub, apiGetClubAnnouncement, apiExitClub} from "@/api/Club.js";
import { apiGetClubRecord } from "@/api/Club.js";
export default {
  components: {
    back,
    model
  },
  data() {
    return {
      Uimg: "",
      clubId: "",

      // 進度條
      growValue: 0,
      growMinValue: 0,
      growMaxValue: 0,
      tipCssLeft: 0,

      // 成員動態
      marqueeList: [],
      animate: false,

      // 戰績
      clubData1: {
        clubName: "",
        clubLevel: "",
        memberNum: ""
      },
      recordObj: [
        {
          state: this.$t('MyClubRecord'), // 戰
          times: "",
          tip: this.$t('TotalNumbeOfBetsOfMembers'), //成员总投注次数
        },
        {
          state: this.$t('Total'), //總
          times: "",
          tip: this.$t('TotalBetOfMembers'), //成员总投注额
        },
        {
          state: this.$t('ClubIndexWin'), // 贏
          times: "",
          tip: this.$t('WinOrLoseCount'), //成员总输赢次数
        },
        {
          state: this.$t('ClubIndexLose'), // 負
          times: "",
          tip: this.$t('WinOrLoseCount'), //成员总输赢次数
        }
      ],
      smallText: false,
      // 公告
      clubMsgList: [],
      clubMsgTime:"",
      // isOpenDetail: false,

      // 退出俱樂部
      isFancyBoxOpen: false,
    }
  },
  created() {
    // 讀取是否為管理階
    this.isManagement = localStorage.getItem("isManagement");

    // 獲取俱樂部ID
    this.clubId = localStorage.getItem("ClubId");

    // 獲取使用者大頭照
    this.Uimg = localStorage.getItem("UImg");

    this.getMyClub();

    setInterval(this.showMarquee, 2000);

    // 獲取戰績
    this.getClubRecord();

    // 獲取公告
    this.getNoticeList();
  },
  methods: {
    // 前往我的權限判斷
    myAuthority() {
      if (this.isManagement == "1") {
        this.$router.push('/myAuthority');
        return
      }
      if (this.isManagement == "2") {
        this.$router.push('/memberManagement');
      }
    },

    // 獲取會員俱樂部資訊
    getMyClub() {
      apiGetMyClub("", true).then(res => {
        this.growMaxValue = res.Data.NextLvContribution;
        this.growValue = res.Data.Contribution;
        this.marqueeList = res.Data.ClubMemLogs;
      }).then(() => {
        this.changeRangeVal();
      })
    },

    // 前往俱樂部活動
    goClubActivities() {
      localStorage.setItem("activeCategoryIndex", 0);
      localStorage.setItem("tabIndex", 0);
      localStorage.setItem("betTabIndex", 0);
      this.$router.push('/ClubActivities');
    },
    // tooltip跟著拉趕跑
    changeRangeVal() {
      let tooltip = document.querySelector(".grow-bar-tooltip");
      let rangeBtn = document.querySelector(".el-slider__bar");
      let sliderRunway = document.querySelector(".el-slider__runway");
      let buttonWrapper = document.querySelector(".el-slider__button-wrapper");
      let tooltipWidth = tooltip.getBoundingClientRect().width; // 提示框最正確的寬度
      let buttonWrapperWidth = buttonWrapper.getBoundingClientRect().width; // 箭頭圖案最正確的寬度
      let rangeBtnOffset = rangeBtn.offsetWidth; // 拖動拉桿時拉桿條的偏移量
      let tolerance = sliderRunway.offsetLeft-(tooltipWidth / 2) + rangeBtnOffset;
      // let tolerance = rangeBtnOffset-((tooltipWidth-buttonWrapperWidth) / 2)+sliderRunway.offsetLeft;

      this.tipCssLeft = tolerance;
    },

    showMarquee: function () {
      this.animate = true;
      setTimeout(()=>{
        this.marqueeList.push(this.marqueeList[0]);
        this.marqueeList.shift();
        this.animate = false;
      },500)
    },

    // 獲取戰績
    getClubRecord() {
      let data = {
        ClubId: this.clubId,
      }
      apiGetClubRecord(data, true).then(res => {
        this.clubData1.clubName = res.Data.ClubName;
        this.clubData1.clubLevel = res.Data.LevelId;
        this.clubData1.memberNum = res.Data.PeopleCount;

        this.recordObj[0].times = res.Data.SumBetCount;
        this.recordObj[1].times = res.Data.SumBetAmounCount;
        this.recordObj[2].times = res.Data.SumWinCount;
        this.recordObj[3].times = res.Data.SumLoseCount;

        // 判斷投注總額位數，超過6位數的話縮小文字大小
        let digits = res.Data.SumBetAmounCount.toString().length; // 先轉成文字算位數
        if (digits >= 6) {
          this.smallText = true;
        } else {
          this.smallText = false;
        }
      })

    },

    // 獲取公告列表
    getNoticeList() {
      let data = {
        index: this.indexNum,
        count: 10
      };
      apiGetClubAnnouncement(data, true).then(res => {
        this.clubMsgList = res.Data;
        this.clubMsgTime = this.clubMsgList.CreateTime.slice(0, this.clubMsgList.CreateTime.indexOf("T"))
        if (this.clubMsgList.length == 0) {
          this.wipeLoading = true;
        } 
      });
    },

    // 退出俱樂部
    exitClub() {
      apiExitClub("", true).then(res => {
        if(Math.abs(res.Code) >= 600) {
          let vm = this;
          const m = vm.$message({
            message: res.Message,
            duration: 3000,
            type: "error",
            center: true
          });
          setTimeout(() => {m.close()}, 2000);
          this.isFancyBoxOpen = false;
          return
        } else {
          let vm = this;
          const m = vm.$message({
            message: res.Message,
            duration: 3000,
            type: "success",
            center: true
          });
          setTimeout(() => {
            m.close()
            this.$router.push("/");
          }, 2000);
        }
      });
    }
  },
}
</script>
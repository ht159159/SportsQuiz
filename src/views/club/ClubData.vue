<template>
  <div class="club-data">
    <div class="club-data-header">
      <div class="club-data-header-wrap">
        <back class="back-icon img-he"></back>
        <h3>{{ $t("Club") }}</h3><!--俱乐部-->
      </div>
    </div>
    <div class="club-data-content">
      <div class="club-data-detail">
        <div class="club-data-personal">
          <img
            class="club-data-personal-img"
            src="../../assets/club/player.png"
            alt=""
          />

          <div class="club-data-personal-info">
            <p>{{ clubData1.clubName }}</p>
            <span>{{ clubData1.NickName }}</span>
          </div>
        </div>
        <div class="club-data-level-wrap">
          <div class="club-data-club-info">
            <p>{{ clubData1.clubLevel }}</p>
            <span>{{ $t("ClubLevel") }}</span><!--俱乐部等级-->
          </div>
          <div class="club-data-club-info">
            <p>{{ clubData1.memberNum }}</p>
            <span>{{ $t("ClubMembers") }}</span><!--俱乐部成员-->
          </div>
        </div>
      </div>
      <div class="club-data-record">
        <p class="club-data-record-title">{{ $t("ClubRecord") }}</p><!--俱乐部战绩-->
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
        <div class="join-btn" v-if="isMember == 2" @click="isOpen = !isOpen"></div>
      </div>
    </div>

    <!-- 是否加入俱樂部彈窗 -->
    <transition name="fade">
		  <model v-if="isOpen"></model>
	  </transition>
	  <transition name="fade">
		<div class="fancy-box" v-if="isOpen">
			<img src="../../assets/club/ticket-header.png" alt="">
      <div class="fancy-box-content">
			  <p>{{ $t('WantToJoinClub') }}?</p><!--是否加入俱樂部-->
      </div>
			<div class="fancy-box-btn">
				<div class="fancy-box-btn-confirm" @click="joinClub()">{{ $t('Confirm') }}</div>
				<div class="fancy-box-btn-cancel" @click="isOpen = !isOpen">{{ $t('Cancel') }}</div>
			</div>
		</div>
	</transition>

    <!-- 加入後訊息彈窗 -->
    <transition name="fade">
		  <model v-if="isError"></model>
	  </transition>
	  <transition name="fade">
		<div class="fancy-box" v-if="isError">
			<img src="../../assets/club/ticket-header.png" alt="">
      <div class="fancy-box-content">
			  <p>{{ errorMsg }}</p><!--錯誤訊息-->
      </div>
			<div class="fancy-box-btn">
				<div class="fancy-box-btn-confirm" @click="isError = !isError">{{ $t('Confirm') }}</div>
			</div>
		</div>
	</transition>
  </div>
</template>
<script>
import back from "@/components/Botton/back.vue";
import { apiJoinClub, apiGetClubRecord } from "@/api/Club.js";
import model from "@/components/model";
export default {
  name: "clubData",
  components: {
    back,
    model,
  },
  data() {
    return {
      selectClubId: undefined,
      isMember: 0,
      isOpen: false,
      isError: false,
      nickName: "",
      errorMsg: "",
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
          state: this.$t('Win'), // 贏
          times: "",
          tip: this.$t('WinOrLoseCount'), //成员总输赢次数
        },
        {
          state: this.$t('Lose'), // 負
          times: "",
          tip: this.$t('WinOrLoseCount'), //成员总输赢次数
        }
      ],
      smallText: false,
    };
  },
  created() {
    // 獲取使用者暱稱
    this.nickName = localStorage.getItem('nickName');

    // 判斷是否有會員 1 = 有  2 = 無
    this.isMember = localStorage.getItem("isMember");

    // 獲取選取的俱樂部ID
    this.selectClubId = localStorage.getItem("selectClub");

    // 獲取俱樂部詳細資訊
    this.getClubRecord();

  },
  methods: {
    // 獲取俱樂部詳細資訊
    getClubRecord() {
      let data = {
        ClubId: this.selectClubId,
      }
      apiGetClubRecord(data, true).then(res => {
        this.clubData1.clubName = res.Data.ClubName;
        this.clubData1.clubLevel = res.Data.LevelId;
        this.clubData1.memberNum = res.Data.PeopleCount;
        this.clubData1.NickName = res.Data.NickName;

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
    // 申請加入俱樂部
    joinClub() {
      let data = {
        ClubId: this.selectClubId,
        UName: this.uname,
        Type: 0    // 0 申请进入  1 退出  2 被踢
      }
      apiJoinClub(data, true).then(res => {
        this.isError = true;
        this.errorMsg = res.Message;
        this.isOpen = false;
      });
    }
  },
};
</script>

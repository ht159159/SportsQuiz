<template>
  <div class="myauthority">
    <div class="myauthority-header">
      <div class="myauthority-header-wrap">
        <back class="back-icon img-he"></back>
        <h3>{{ $t('MyPermissions') }}</h3><!--我的权限-->
      </div>
      <div class="my-data">
        <div class="my-data-wrap">
          <div class="my-data-name">
            <div class="my-data-name-wrap">{{ myData.ClubName }}</div>
            <div class="lv">LV.{{ myData.Level }}</div>
          </div>
          <div class="my-data-id">ID:{{ clubId }}</div>
        </div>
        <img :src="myData.ClubImg" alt="" />
      </div>
    </div>
    <div class="club-data-box">
      <div class="club-data">
        <div class="club-data-content-wrap">
          <div class="club-data-wrap">
            <p>{{ myData.Bonus }}</p>
            <div class="bonus-wrap">
              <span>{{ $t('ClubBonus') }}</span><!--俱乐部红利-->
              <img class="question" src="@/assets/questyellow.png" @click="isOpenBonus = !isOpenBonus">
              <!-- <div class="withdrawal" @click="withdraw"></div>提款 -->
            </div>
          </div>
          <div class="club-data-wrap">
            <p>{{ myData.Level }}</p>
            <span>{{ $t('ClubLevel') }}</span><!--俱乐部等级-->
          </div>
          <div class="club-data-wrap">
            <p>{{ myData.PeopleNum }}</p>
            <span>{{ $t('ClubMembers') }}</span><!--俱乐部成员-->
          </div>
        </div>
      </div>

      <div class="my-authority-list-wrap">
        <div class="my-authority-list" v-for="(list, i) in myAuthorityList" @click="myAuthorityListAction(list.url)" :key="i">
          <div class="my-authority-list-left">
            <img :src="list.imgurl" alt="" />
            <p>{{ list.topic }}</p>
          </div>
          <div class="my-authority-list-right">
            <img src="@/assets/club/leftjian.png"/>
          </div>
        </div>
      </div>

      <div class="my-authority-list-wrap">
        <div class="my-authority-list" v-for="(list, i) in myAuthorityList2" @click="myAuthorityListAction(list.url)" :key="i">
          <div class="my-authority-list-left">
            <img :src="list.imgurl" alt="" />
            <p>{{ list.topic }}</p>
          </div>
          <div class="my-authority-list-right">
            <img src="@/assets/club/leftjian.png"/>
          </div>
        </div>
      </div>
    </div>

    <!-- 紅利說明彈窗 -->
    <div class="explain" v-if="isOpenBonus">
      <!-- <i class='round' /> -->
      <i class="explain-x" @click="isOpenBonus = !isOpenBonus"></i>
      <p class="rank-popup-title">{{ $t("BonuDescription") }}</p>
      <p class="rank-popup-content">
        {{ $t("BonusRules1") }}<br />
        {{ $t("BonusRules2") }}
      </p>
    </div>
    <!-- 無會員彈窗 -->
    <transition name="fade">
      <model v-if="isOpen"></model>
    </transition>
    <transition name="fade">
      <div class="fancyBox" v-if="isOpen">
        <span>{{ callBackMsg }}?</span>
        <div class="fancy-box-btn-wrap">
          <div class="commit confirmBtn" @click="confirmBtnEvent()">{{ $t('Confirm') }}</div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import back from "@/components/Botton/back.vue";
import { apiGetClubDetail } from "@/api/Club";
import model from "@/components/model";
export default {
  name: "myAuthority",
  components: {
    back,
    model
  },
  data() {
    return {
      myData: {},
      clubId: "",
      myAuthorityList: [
        {
          imgurl: require("@/assets/club/list_1.png"),
          topic: this.$t('MemberManagement'), // 成员管理
          url: "memberManagement"
        },
        {
          imgurl: require("@/assets/club/list_2.png"),
          topic: this.$t('Advertising'), //广告投放
          url: "ClubAdPutIn"
        },
        {
          imgurl: require("@/assets/club/list_3.png"),
          topic: this.$t('TeamBonus'), //团队红利
          url: "CreateTeamBonus"
        },
        {
          imgurl: require("@/assets/club/withdrawal.png"),
          topic: this.$t('BonusWithdrawal'), //红利提現
          url: "ClubDividendWithdrawal"
        },
        // {
        //   imgurl: require("@/assets/club/list_4.png"),
        //   topic: this.$t('BonuDescription'), // 红利说明
        //   url: "BonuDescription"
        // },
        {
          imgurl: require("@/assets/club/edit_icon.png"),
          topic: this.$t('ClubNotice'), // 俱樂部公告
          url: "Notice"
        }
      ],
      myAuthorityList2: [{
          imgurl: require("@/assets/club/list_5.png"),
          topic: this.$t('ClubPromotion'), //俱乐部推广
          url: ""
      }],
      isOpen: false,
      callBackMsg: "",
      isOpenBonus: false,
    };
  },
  created() {
    this.clubId = localStorage.getItem("ClubId");
    this.getDetail();
  },
  methods:{
    withdraw() {
        this.$message({
          message: this.$t('NotYetOpen'),  //【 暂未开放 】
          type: "warning",
          center: true,
          duration: 1200
        });
    },

    // 獲取俱樂部詳細資料
    getDetail() {
      apiGetClubDetail("", true).then(res =>{
        if (Math.abs(res.Code) >= 600) {
          this.isOpen = true;
          this.callBackMsg = res.Message;
          return;
        }
        this.myData = res.Data;
      })
    },

    // 彈窗確定按鈕事件
    confirmBtnEvent() {
      this.$router.push("/CreateClub");
    },
    myAuthorityListAction(url) {
      url != "" ? this.$router.push(`/${url}`) : this.withdraw();
    }
  }
};
</script>

<template>
  <main class="createClub">
    <div class="createClub-header" style="position:fixed;top: 0">
      <back class="back-icon img-he"></back>
      <h3>{{ $t("Club") }}</h3><!--俱乐部-->
    </div>

    <!-- 分頁切換 -->
    <!-- <div class="category">
      <div class="category-type" v-for="(type, index) in category" :key="index">
        <p :class="{ 'category-type-active': categoryType == index }">
          {{ type }}
        </p>
      </div>
    </div> -->

    <div class="club-Box">
      <!-- 推薦俱樂部 -->
      <div class="recommended">
        <div class="title">
          <div class="title_list"></div>
          <p>{{ $t("RecommendedClub") }}</p><!-- 推荐俱乐部 -->
        </div>

        <!-- 暂无信息 -->
        <!-- <div class="noMissionBg" v-if="noMission">
          <img class="noMission"  src="../../assets/noInfo.png" alt=""/>
          <p>{{ $t("NoInformation") }}</p>
        </div> -->
        <div class="recommendedNoMissionBg" v-if="noMission">
          <img v-if="lang!='en-US'" class="recommendedNoMission"  src="../../assets/club/recommendedNoMissionTwo.png" alt=""/>
          <img v-if="lang!='en-US'" class="recommendedNoMission"  src="../../assets/club/recommendedNoMission.png" alt=""/>
          <img v-if="lang=='en-US'" class="recommendedNoMission"  src="../../assets/club/recommendedNoMissionTwo-en.png" alt=""/>
          <img v-if="lang=='en-US'" class="recommendedNoMission"  src="../../assets/club/recommendedNoMission-en.png" alt=""/>
        </div>

        <div class="content"  v-if="!noMission">
          <div v-if="RecommendList.length <= 0" style='color:#fff;font-size: .24rem;text-align:center;line-height: .48rem;margin: 0 auto'>
            {{ $t("WipeLoading")}}
          </div>
          <div class="recommended-club" v-for="item in RecommendList">
            <img  class="recommended-club-img"  :src="item.ClubImg" @click="selectClub(item.Id)"/>
          </div>
        </div>
      </div>

      <!-- 熱門俱樂部 -->
      <div class="popularClubs">
        <div class="title">
          <div class="title-wrap">
            <div class="title-list"></div>
            <p>{{ $t("PopularClubs") }}</p><!-- 热门俱乐部 -->
          </div>
          <div class="go-search-wrap" @click="$router.push('/searchClub')">
            <p>{{ $t('MoreClub') }}</p>
            <div class="go-search"></div>
          </div>
        </div>

        <!-- 暂无信息 -->
        <div class="noMissionBg" v-if="popularListNoData">
          <img class="noMission"  src="../../assets/noInfo.png" alt=""/>
          <p>{{ $t("NoInformation") }}</p> 
        </div>

        <div v-if="!popularListNoData">
          <div v-if="PopularList.length <= 0" style='color:#000;font-size: .24rem;text-align:center;line-height: .48rem;margin: 0 auto'>
            {{ $t("WipeLoading")}}
          </div>
          <div class="clubs" v-for="item in PopularList" @click="selectClub(item.Id)">
            <div class="clubs-box">
              <div class="clubs-box-bg">
                <img :src="item.ClubImg" />
              </div>
              <div class="clubs-box-content">
                <div class="content-box">
                  <div class="content-box-title">{{ item.ClubName }}</div>
                  <div class="content-box-statement">{{ item.SloganLabel }}</div>
                </div>
                <div class="clubs-btn-member" v-if="isMember == 1"></div>
                <div class="clubs-btn" v-if="isMember == 2" @click.stop=" isOpen = !isOpen; clickClubId = item.Id;"></div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
    <button class="changeBtn" @click="$router.push('/myClub')" v-if="isMember == 1">{{ $t("MyClub") }}</button><!-- 创建我的俱乐部 -->
    <button class="changeBtn" @click="toCreatRule" v-if="isMember == 2">{{ $t("CreateMyClub") }}</button><!-- 创建我的俱乐部 -->

    <!-- 是否加入俱樂部彈窗 -->
    <transition name="fade">
		  <model v-if="isOpen"></model>
	  </transition>
	  <transition name="fade">
		  <div class="fancy-box" v-if="isOpen">
			  <img src="../../assets/club/ticket-header.png" alt="">
        <div class="fancy-box-content">
			    <p>{{ $t('WantToJoinClub') }}?</p>
        </div>
			  <div class="fancy-box-btn">
				  <div class="fancy-box-btn-confirm" @click="joinClub()">{{ $t('Confirm') }}</div>
				  <div class="fancy-box-btn-cancel" @click="isOpen = !isOpen">{{ $t('Cancel') }}</div>
			  </div>
		  </div>
	  </transition>
    <!-- 加入後訊息彈窗 -->
    <transition name="fade">
		  <model v-if="isCallBack"></model>
	  </transition>
	  <transition name="fade">
      <div class="fancy-box" v-if="isCallBack">
        <img src="../../assets/club/ticket-header.png" alt="">
        <div class="fancy-box-content">
          <p>{{ callBackMsg }}</p>
        </div>
        <div class="fancy-box-btn">
          <div class="fancy-box-btn-confirm" @click="isCallBack = !isCallBack">{{ $t('Confirm') }}</div>
        </div>
      </div>
    </transition>
  </main>
</template>

<script>
import back from "@/components/Botton/back.vue";
import model from "@/components/model";
import { apiGetClubs, apiGetMemClubs, apiJoinClub } from "@/api/Club.js";
export default {
  components: {
    back,
    model
  },
  data() {
    return {
      PopularList: [],
      RecommendList: [],
      isMember: 0,

      // 防止连点
      isDisable: false,

      noMission: false,
      popularListNoData: false,
      isOpen: false,
      isCallBack: false,
      callBackMsg: "",
      lang: ""
    };
  },

  created() {
    // 判斷是否有會員 1 = 有  2 = 無
    this.isMember = localStorage.getItem("isMember");
    this.lang = JSON.parse(localStorage.getItem("lang")).tag;
    this.getClubList();
  },

  methods: {
    toCreatRule () {
      this.$router.push("/CreateClubRule");
    },

    // 獲取俱樂部列表
    getClubList() {
      let data = {
        ClubId: 0
      };
      apiGetClubs(data, true).then(res => {
        // 獲取推薦俱樂部列表
        this.RecommendList = res.Data.RecommendList;
        // 獲取熱門俱樂部列表
        this.PopularList = res.Data.PopularList;
        this.RecommendList.length > 0 ? this.noMission = false : this.noMission = true;
        this.PopularList.length > 0 ? this.popularListNoData = false : this.popularListNoData = true;
      });
    },

    // 選取俱樂部
    selectClub(id) {
      localStorage.setItem("selectClub", id);
      this.$router.push("/clubData");
    },

    // 申請加入俱樂部
    joinClub() {
      let data = {
        ClubId: this.clickClubId,
        UName: this.uname,
        Type: 0 // 0 申请进入  1 退出  2 被踢
      };
      apiJoinClub(data, true).then(res => {
        this.isCallBack = true;
        this.callBackMsg = res.Message;
        this.isOpen = false;
      });
    },
  }
};
</script>

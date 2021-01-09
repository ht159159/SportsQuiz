<template>
  <!-- 俱乐部活动 -->
  <div class="myclub-activities">
	<div class="myclub-activities-header">
		<div class="myclub-activities-header-wrap">
			<back class="back-icon img-he"></back>
			<h3>{{ $t("ClubActivities") }}</h3>
			<!--俱乐部活动-->
		</div>
	</div>
	<div class="activities-type">
		<div class="activities-type-btn" :class="{ 'activities-type-btn-active': activeCategoryIndex == 0 }" @click="activeCategoryIndex = 0; getLastestActivies();">{{ $t("ClubChallenge") }}</div>
		<div class="activities-type-btn" :class="{ 'activities-type-btn-active': activeCategoryIndex == 1 }" @click="activeCategoryIndex = 1; getActiveBetList();">{{ $t("ClubBetting") }}</div>
	</div>
	<!-- 俱樂部挑戰 -->
	<div class="activities-challenge-wrap" v-show="activeCategoryIndex == 0">
		<!-- 挑戰最新活動 -->
		<div class="activities-challenge-tab">
			<div class="activities-challenge-tab-wrap">
				<p class="activities-challenge-title" :class="{ 'titile-focus': tabIndex == 0 }" @click="changeTabIndex(0)">{{ $t("latestActivity") }}</p>
				<!-- 最新活動 -->
				<div class="divider"></div>
				<!-- 分隔線 -->
				<p class="activities-challenge-title" :class="{ 'titile-focus': tabIndex == 1 }" @click="changeTabIndex(1)">{{ $t("HistoricalActivity") }}</p>
				<!-- 历史活动 -->
			</div>
			<div class="check-result" @click="$router.push('/ClubActivityMatchResult')">
				<p class="check-result-text">{{ $t("ViewResults") }}</p>
				<!-- 查看赛果 -->
				<div class="check-result-arrow"></div>
			</div>
		</div>
		<div class="activities-challenge" :class="[isManagement== 1 ? 'activities-challenge-new': 'activities-challenge-new-member']" v-show="tabIndex == 0">
			<div v-if="activeNodata == false" class="activities-challenge-content-wrap">
				<div v-if="latestActivitiesObj.length <= 0" class="sipeLoading">{{ $t("WipeLoading") }}</div>
				<div class="activities-challenge-content" v-infinite-scroll="loadLastest"  infinite-scroll-disabled="busy" infinite-scroll-immediate="immediate">
					<div class="block" v-for="item in latestActivitiesObj">
						<img :src="item.ActivityImg" alt="" />
						<p class="date">{{ item.CreateTime }}</p>
						<div class="abridge-content">{{ item.ActivityContent }}</div>
						<div class="activities-challenge-btn-wrap">
							<!-- 立即参与 -->
							<div class="join" v-if="item.Status == 1" @click="isTicketTipShow($event); avtiveId = item.Id; matchName = item.MatchName; isEnglish = true">{{ $t("JoinNow") }}</div>
							<!-- 繼續下注 -->
							<div class="join" v-if="item.Status == 2" @click=" avtiveId = item.Id; continueBet(avtiveId); isEnglish = false">{{ $t("KeepBetting") }}</div>
							<!--  活動結束 -->
							<div class="notJoin" v-if="item.Status == 0">{{ $t("CanNotBet") }}</div>
							<!-- 參加成功 -->
							<div class="joinSuccess" v-if="item.Status == 3" @click=" avtiveId = item.Id; goResultDetail(avtiveId); isEnglish = false">{{ $t("BetSuccessful") }}</div>
              <!-- 刪除 -->
							<div class="delete" v-if="isManagement == 1" @click="isTicketTipShow($event,latestActivitiesObj); avtiveId = item.Id; isEnglish = false"></div>
						</div>
					</div>
				</div>
			</div>
			<!-- 俱乐部活动無資料 -->
			<div class="no-data" v-else>
				<p>{{ $t("NoData") }}</p>
				<!-- 【 暂无数据 】 -->
			</div>
		</div>
		<!-- 歷史活動 -->
		<div class="activities-challenge " :class="[isManagement== 1 ? 'activities-challenge-history': 'activities-challenge-history-member']" v-show="tabIndex == 1">
			<div v-if="historyNoData == false" class="activities-challenge-content">
				<div v-if="historyActivitiesObj.length <= 0" class="sipeLoading">{{ $t("WipeLoading") }}</div>
				<div class="activities-challenge-content" v-infinite-scroll="loadHistory"  infinite-scroll-disabled="busy" infinite-scroll-immediate="immediate">
					<div class="block" v-for="(item, index) in historyActivitiesObj">
						<img :src="item.ActivityImg" alt="" />
						<p class="date">{{ item.CreateTime }}</p>
						<div class="abridge-content">{{ item.ActivityContent }}</div>
						<div class="activities-challenge-btn-wrap">
							<!-- 立即参与 -->
							<div class="join" v-if="item.Status == 1" @click="isTicketTipShow($event); avtiveId = item.Id; matchName = item.MatchName;">{{ $t("JoinNow") }}</div>
							<!-- 繼續下注 -->
							<div class="join" v-if="item.Status == 2" @click=" avtiveId = item.Id; continueBet(avtiveId);">{{ $t("KeepBetting") }}</div>
							<!--  活動結束 -->
							<div class="notJoin" v-if="item.Status == 0">{{ $t("CanNotBet") }}</div>
							<!-- 參加成功 -->
							<div class="joinSuccess" v-if="item.Status == 3" @click=" avtiveId = item.Id; goResultDetail(avtiveId);">{{ $t("BetSuccessful") }}</div>
              <!-- 刪除 -->
							<!-- <div class="delete" v-if="isManagement == 1" @click="isTicketTipShow($event,item); avtiveId = item.Id"></div> -->
						</div>
					</div>
				</div>
			</div>
			<!-- 俱乐部活动無資料 -->
			<div class="no-data" v-else>
				<p>{{ $t("NoData") }}</p>
				<!-- 【 暂无数据 】 -->
			</div>
		</div>
		<div class="release-btn-wrap" v-if="isManagement == 1">
			<div class="release-btn" @click="activesRelease()">{{ $t("Release") }}</div>
			<!--發布-->
		</div>
	</div>
	<!-- 俱樂部投注 -->
	<div class="activities-bet-wrap" v-show="activeCategoryIndex == 1">
		<!-- 我的活动 -->
		<div class="activities-bet-tab">
			<div class="activities-bet-tab-wrap">
				<p class="activities-bet-tab-title" :class="{ 'titile-focus': betTabIndex == 0 }" @click="changeBetTabIndex(0)">{{ $t("MyActivities") }}</p>
				<!-- 我的活动 -->
				<div class="divider"></div>
				<p class="activities-bet-tab-title" :class="{ 'titile-focus': betTabIndex == 1 }" @click="changeBetTabIndex(1)">{{ $t("ClubActivities") }}</p>
				<!-- 俱樂部活動 -->
			</div>
			<div class="check-result" v-if="betTabIndex == 0" @click="$router.push('/InitiatorBetResult')">
				<p class="check-result-text">{{ $t("ViewResults") }}</p>
				<!-- 查看赛果 -->
				<div class="check-result-arrow"></div>
			</div>
			<div class="check-result" v-if="betTabIndex == 1" @click="$router.push('/BetResult')">
				<p class="check-result-text">{{ $t("ViewResults") }}</p>
				<!-- 查看赛果 -->
				<div class="check-result-arrow"></div>
			</div>
		</div>
		<div class="activities-bet" v-show="betTabIndex == 0">
			<div v-if="betMyListNoData == false" class="activities-bet-content-list-wrap">
				<div v-if="betMyList.length <= 0" class="sipeLoading">{{ $t("WipeLoading") }}</div>
				<div class="activities-bet-content">
					<div class="activities-bet-content-list" v-for="item in betMyList">
						<img v-if="item.ClubGambling.GamblingImg" :src="item.ClubGambling.GamblingImg" />
            <img v-else src="@/assets/instead_logo1.png" alt="" class="sport-main-collapse-img">
						<div class="activities-bet-content-list-left">
							<div class="activities-bet-content-list-left-up">
								<div class="activities-bet-content-list-left-up-title">{{ item.ClubGambling.GamblingTitle }}</div>
							</div>
							<div class="activities-bet-content-list-left-up-date">
                <span>{{ $t('Deadline') }} : </span> 
                <p>{{ item.ClubGambling.Etime.slice( 0, item.ClubGambling.Etime.indexOf("T") ) }}</p> 
                </div>
							<div class="activities-bet-content-list-left-down">
								<div class="activities-bet-content-list-detail">
                  <p>{{ $t('Position') }} : </p>
                  <p class="text-blue">{{ item.ClubGambling.BetPosition }}</p>
                  </div>
                <div class="activities-bet-content-list-detail">
                  <p>{{ $t('Odds') }} : </p>
                  <span>{{ item.ClubGambling.OddsValue }}</span>
                </div>
                <div class="activities-bet-content-list-detail">
                  <p>{{ $t('CashPledge') }} : </p>
                  <span>{{ item.ClubGambling.Deposit }}</span>
                </div>
                <div class="activities-bet-content-list-detail">
                  <p>{{ $t('TotalAmountBet') }} : </p>
                  <span>{{ item.ClubGambling.BettedAmount }}</span>
                </div>
							</div>
						</div>
						<div class="activities-bet-content-list-right">
							<div class="bet-status-btn watchResult" @click="goBetResult(1, item.ClubGambling.Id)"></div>
							<div class="del" @click="isTicketTipShow($event,item.ClubGambling)"></div>
              <!-- betDelete(item.ClubGambling) -->
						</div>
					</div>
				</div>
			</div>
			<!-- 我的投注無資料 -->
			<div class="no-data" v-else>
				<p>{{ $t("NoData") }}</p>
				<!-- 【 暂无数据 】 -->
			</div>
		</div>
		<!-- 投注俱樂部活動 -->
		<div class="activities-bet" v-show="betTabIndex == 1">
			<div v-if="betOtherListNoData == false" class="activities-bet-content-list-wrap">
				<div v-if="betOtherList.length <= 0" class="sipeLoading">{{ $t("WipeLoading") }}</div>
				<div class="activities-bet-content">
					<div class="activities-bet-content-list" v-for="item in betOtherList">
						<img v-if="item.ClubGambling.GamblingImg" :src="item.ClubGambling.GamblingImg" />
            <img v-else src="@/assets/instead_logo1.png" alt="" class="sport-main-collapse-img">
						<div class="activities-bet-content-list-left">
							<div class="activities-bet-content-list-left-up">
								<div class="activities-bet-content-list-left-up-title">{{ item.ClubGambling.GamblingTitle }}</div>
							</div>
							<div class="activities-bet-content-list-left-up-date">
                <span>{{ $t('Deadline') }} : </span> 
                <p>{{ item.ClubGambling.Etime.slice( 0, item.ClubGambling.Etime.indexOf("T") ) }}</p>
              </div>
							<div class="activities-bet-content-list-left-down">
								<div class="activities-bet-content-list-detail">
                  <p>{{ $t('Position') }} : </p>
                  <span class="text-blue">{{ item.ClubGambling.BetPosition }}</span>
                  </div>
                <div class="activities-bet-content-list-detail">
                  <p>{{ $t('Odds') }} : </p>
                  <span>{{ item.ClubGambling.OddsValue }}</span>
                </div>
                <div class="activities-bet-content-list-detail">
                  <p>{{ $t('CashPledge') }} : </p>
                  <span>{{ item.ClubGambling.Deposit }}</span>
                </div>
                <div class="activities-bet-content-list-detail">
                  <p>{{ $t('TotalAmountBet') }} : </p>
                  <span>{{ item.ClubGambling.BettedAmount }}</span>
                </div>
							</div>
						</div>
						<div class="activities-bet-content-list-right">
							<div class="bet-status-btn watchResult" v-if="item.JoinStatus == '观看赛果' || item.JoinStatus == 'Watch the result'" @click="goBetResult(2, item.ClubGambling.Id)"></div>
							<!-- 查看賽果 -->
							<div class="bet-status-btn participate" v-if="item.JoinStatus == '参与活动'  || item.JoinStatus == 'Participate'" @click="goBet(item.ClubGambling.Id)"></div>
							<!-- 立即参与 -->
							<div class="bet-status-btn unableParticipate" v-if="item.JoinStatus == '无法参加' || item.JoinStatus == 'Unable to participate'"></div>
							<!--  活動結束 -->
						</div>
					</div>
				</div>
			</div>
			<!-- 其他投注無資料 -->
			<div class="no-data" v-else>
				<p>{{ $t("NoData") }}</p>
				<!-- 【 暂无数据 】 -->
			</div>
		</div>
		<div class="release-btn-wrap">
			<div class="release-btn" @click="$router.push('/gameSport')">{{ $t("Release") }}</div>
			<!--發布-->
		</div>
	</div>
	<!-- 購買門票彈窗 -->
	<transition name="fade">
		<model v-if="isTicketTipOpen"></model>
	</transition>
	<transition name="fade">
		<div class="ticketTip" :class="{'ticketTip-US': lang == 'en-US' && isEnglish == true}" v-if="isTicketTipOpen">
			<img src="../../assets/club/ticket-header.png" alt="">
			<p class="ticketTip-title" :class="{ deleteConent: isTicketTipType == 'del' || isTicketTipType == 'delete' }">
        <span v-if="isTicketTipType == 'join'">{{ $t('LeagueGame') }}</span>
				<!-- 本次联赛的竞赛活动为 --> 
        <span v-if="isTicketTipType == 'join'">{{ matchName }}</span>
        <span v-if="isTicketTipType == 'del' || isTicketTipType == 'delete'">{{ $t('SureToDeleteThisEvent') }}</span>

			</p>
			<p class="ticketTip-content" v-html="ticketTipText" v-if="isTicketTipType == 'join'"></p>
			<div class="ticketTip-btn">
				<p v-if="isTicketTipType == 'join'">{{ $t('ActiveTicket') }}</p>
				<!-- 门票需消耗100金币 -->
				<div class="ticketTip-btn-buy" @click="getTicket()" v-if="isTicketTipType == 'join'">{{ $t('BuyNow') }}</div>
				<!-- 立即购买 -->

        <!-- 確定刪除活動 -->
        <div class="ticketTip-btn-buy" @click="deleteFunction()" v-if="isTicketTipType == 'del' || isTicketTipType == 'delete'">{{ $t('Confirm') }}</div>
        
				<div class="ticketTip-btn-cancel" @click="isTicketTipOpen = !isTicketTipOpen">{{ $t('Cancel') }}</div>
			</div>
		</div>
	</transition>

    <!-- 彈窗 -->
    <transition name="fade">
      <model v-if="isOpen"></model>
    </transition>
    <transition name="fade">
      <div class="fancyBox" v-if="isOpen">
        <span>{{ callBackMsg }}!</span>
        <div class="fancy-box-btn-wrap">
          <p class="confirmBtn" @click="confirmBtnEvent()">
            {{ $t("Confirm") }}
          </p>
        </div>
      </div>
    </transition>
</div>
</template>
<script>
import back from "@/components/Botton/back.vue";
import model from "@/components/model";
import { apiBuyClubActivityTicket, apiUpdateClubActivityStatus, apiGetClubActivityList} from "@/api/ClubActivitys.js";
import { apiGetClubGamblingList, apiUpdateClubGamblingsStatus} from "@/api/ClubGamblings.js";
export default {
  components: {
    back,
    model
  },
  data() {
    return {
      lang: "",
      isEnglish: false,

      isManagement: 0,
      clubId: undefined,
      isOpen: false,

      activeCategoryIndex: 0,
      tabIndex: 0,
      betTabIndex: 0,
      latestActivitiesObj: [],
      historyActivitiesObj: [],
      isTicketTipOpen: false,
      ticketTipText:
        `${this.$t("RuleOfActivity")}：<br />1、${this.$t("VictoryOrDefeat")}：<br />①${this.$t("VictoryOrDefeatOne")}<br />②${this.$t("VictoryOrDefeatTwo")}<br />2、${this.$t("ParticipationRules")}：<br />①${this.$t("ParticipationRulesOne")}<br />②${this.$t("ParticipationRulesTwo")}<br />3、${this.$t("RewardRules")}：<br />①${this.$t("RewardRulesOne")}<br />②${this.$t("RewardRulesTwo")}<br />③${this.$t("RewardRulesThree")}<br />${this.$t("ActivityRulesWarning")}`,
      avtiveId: "",
      activeNodata: false,
      historyNoData: false,
      matchName: "",
      // 投注活動
      betMyList: [],
      betOtherList: [],
      betMyListNoData: false,
      betOtherListNoData: false,

      wipeLoading: false,
      callBackMsg: "",

      // v-infinite-scroll 套件
      busy: false,
      immediate: false,
      lastestIndexNum: 1,
      historyIndexNum: 1,
      lastestTotalPages: "",
      historyTotalPages:"",

      // 彈窗
      isTicketTipType: "",
      deleteData:""
    };
  },
  created() {
    // 讀取語系
    this.lang = JSON.parse(localStorage.getItem("lang")).tag;
    // 讀取是否為管理階
    this.isManagement = localStorage.getItem("isManagement");
    // 取得clubId
    this.clubId = localStorage.getItem("ClubId");


    if (localStorage.getItem("activeCategoryIndex") == null) {
      localStorage.setItem("activeCategoryIndex", 0);
    }
    if (localStorage.getItem("tabIndex") == null) {
      localStorage.setItem("tabIndex", 0);
    }
    if (localStorage.getItem("betTabIndex") == null) {
      localStorage.setItem("betTabIndex", 0);
    }

    if (localStorage.getItem("activeCategoryIndex") == "0") {
      this.getLastestActivies();
      this.activeCategoryIndex = 0;
      this.tabIndex = localStorage.getItem("tabIndex");
      if (this.tabIndex == 1) {
        this.getHistoryActivies();
      }
    } else if (localStorage.getItem("activeCategoryIndex") == "1") {
      this.activeCategoryIndex = 1;
      this.getActiveBetList();
      this.betTabIndex = localStorage.getItem("betTabIndex");
    }
  },
  methods: {
    // 獲取最新活動
    getLastestActivies() {
      let data = {
        Type: 1,
        index: this.lastestIndexNum,
        count: 10
      }
      apiGetClubActivityList(data, true).then(res => {
        if (res.Code == "600") {
          this.isOpen = true;
          this.callBackMsg = res.Message;
          this.busy = true;
          return;
        }
        res.Data.Data.length <= 0 ? this.activeNodata = true : this.activeNodata = false;
        // 俱樂部活動頁的資料
        this.latestActivitiesObj = res.Data.Data;
        this.lastestTotalPages = res.Data.TotalPages;
      })
      // this.busy = false;
      this.tabIndex = 0;
      localStorage.setItem("activeCategoryIndex", this.activeCategoryIndex);
    },

    // 無限加載最新活動
    loadLastest() {
      if (this.lastestIndexNum >= this.lastestTotalPages ) {
        return
      }
      this.busy = true;
      this.lastestIndexNum++;
      let data = {
        Type: 1,
        index: this.lastestIndexNum,
        count: 10
      }
      apiGetClubActivityList(data, true).then(res => {
        if (res.Code == "600") {
          this.isOpen = true;
          this.callBackMsg = res.Message;
          this.busy = true;
          return;
        }
        // 俱樂部活動頁的資料
        if (res.Data.Data.length == 0) {
          this.busy = true;
        } else if(res.Data.Data.length > 0){
          res.Data.Data.forEach(el => {
            this.latestActivitiesObj.push(el);
            this.busy = false;
          })
        }
      })
    },


    // 獲取歷史活動
    getHistoryActivies() {
      let data = {
        Type: 2,
        index: this.historyIndexNum,
        count: 10
      }
      apiGetClubActivityList(data, true).then(res => {
        if (res.Code == "600") {
          this.isOpen = true;
          this.callBackMsg = res.Message;
          return;
        }
        res.Data.Data.length <= 0 ? this.historyNoData = true : this.historyNoData = false;
        // 俱樂部活動頁的資料
        this.historyActivitiesObj = res.Data.Data;
        this.historyTotalPages = res.Data.TotalPages;
      })
      this.tabIndex = 1;
      localStorage.setItem("activeCategoryIndex", this.activeCategoryIndex);
    },

    // 無限加載歷史活動
    loadHistory() {
      if (this.historyIndexNum >= this.historyTotalPages ) {
        return
      }
      this.busy = true;
      this.historyIndexNum++;
      let data = {
        Type: 2,
        index: this.historyIndexNum,
        count: 10
      }
      apiGetClubActivityList(data, true).then(res => {
        if (res.Code == "600") {
          this.isOpen = true;
          this.callBackMsg = res.Message;
          this.busy = true;
          return;
        }
        // 俱樂部活動頁的資料
        if (res.Data.Data.length == 0) {
          this.busy = true;
        } else if(res.Data.Data.length > 0){
          res.Data.Data.forEach(el => {
            this.historyActivitiesObj.push(el);
            this.busy = false;
          })
        }
      })
    },

    // 取得俱樂部投注列表
    getActiveBetList() {
      apiGetClubGamblingList("", true).then(res => {
        this.betMyList = res.Data.MyGamblings;
        this.betOtherList = res.Data.OtherGamblings;
        if (this.betMyList == null || this.betMyList.length == 0) {
          this.betMyListNoData = true;
        }
        if (this.betOtherList == null || this.betOtherList.length == 0) {
          this.betOtherListNoData = true;
        }
      });
       this.betTabIndex = 0;
      localStorage.setItem("activeCategoryIndex", this.activeCategoryIndex);
    },

    // 切換俱樂部挑戰分頁
    changeTabIndex(index) {
      this.tabIndex = index;
      localStorage.setItem("tabIndex", index);
      // 最新
      if (index == 0) {
        this.latestActivitiesObj = [];
        this.lastestIndexNum = 1;
        this.busy = false;
        this.getLastestActivies();
      }
      // 歷史
      if (index == 1) {
        this.historyActivitiesObj = [];
        this.historyIndexNum = 1;
        this.busy = false;
        this.getHistoryActivies();
      }
    },
    // 切換俱樂部投注分頁
    changeBetTabIndex(index) {
      this.betTabIndex = index;
      localStorage.setItem("betTabIndex", index);
    },

    // 活動開啟發佈頁面
    activesRelease() {
      this.$router.push('/ClubActivitiesRelease');
    },

    // 購買活動門票
    getTicket() {
      console.log(this.avtiveId)
      let data = {
        ClubActivityId: this.avtiveId
      };
      apiBuyClubActivityTicket(data, true).then(res => {
        if(Math.abs(res.Code) >= 600) {
          let vm = this;
          const m = vm.$message({
            message: res.Message,
            duration: 3000,
            type: "error",
            center: true
          });
          setTimeout(() => m.close(), 2000);
          return;
        }
        localStorage.setItem("AcvtiveId", this.avtiveId);
        let vm = this;
        const m = vm.$message({
          message: this.$t('SuccessfulPurchase'),
          duration: 3000,
          type: "success",
          center: true
        });
        setTimeout(() => m.close(), 2000);
        setTimeout(() => {
          this.isTicketTipOpen = false;
          this.$router.push("/ClubActivityMatch");
        }, 3000);
      });
    },

    // 繼續下注
    continueBet(avtiveId) {
      localStorage.setItem("AcvtiveId", avtiveId);
      this.$router.push("/ClubActivityMatch");
    },

    // 參加成功
    goResultDetail(avtiveId){
      localStorage.setItem("AcvtiveId", avtiveId);
      this.$router.push("/ActivityMatchResultDetail");
    },

    // 刪除最新活動
    deleteActive(){
      let data = {
          Status: -1,
          ClubActivityId: this.avtiveId,
      };
      apiUpdateClubActivityStatus(data, true).then(res => {
        if (Math.abs(res.Code) >= 600) {
          let vm = this;
          const x = vm.$message({
            message: res.Message,
            duration: 3000,
            type: "warning",
            center: true
          });
          setTimeout(() => x.close(), 1000);
        } else {
          let vm = this;
          const m = vm.$message({
            message: this.$t('successfullyDeleted'),
            duration: 3000,
            type: "success",
            center: true
          });
          setTimeout(() => {
            m.close();
            if (this.tabIndex == 0) {
              this.getLastestActivies();
              this.tabIndex = 0
              return;
            }
            if (this.tabIndex == 1) {
              this.getHistoryActivies();
              this.tabIndex = 1;
              return;
            }
          }, 1000);
        }
        this.isTicketTipOpen = false;
      });
    },

    // 前往俱樂部投注
    goBet(id) {
      localStorage.setItem("betId", id);
      setTimeout(() => {
        this.$router.push("/clubActiveBet");
      }, 250);
    },

    // 查看單一賽果 type:  1 = 發起人賽果;  2 = 其他人賽果
    goBetResult(type, id) {
      localStorage.setItem("betId", id);
      localStorage.setItem("singleResult", true)
      if (type == 1) {
        setTimeout(() => {
          this.$router.push("/InitiatorBetResult");
        }, 250);
      } else {
        setTimeout(() => {
          this.$router.push("/BetResult");
        }, 250);
      }
    },

    // 俱樂部投注刪除
    betDelete() {
      let data = {
        Id: this.deleteData.Id,
        Status: -1,
      }
      apiUpdateClubGamblingsStatus(data, true).then(res => {
        if (Math.abs(res.Code) >= 600) {
          let vm = this;
          const m = vm.$message({
            message: res.Message,
            duration: 3000,
            type: "warning",
            center: true
          });
          setTimeout(() => m.close(), 2000);
          this.isTicketTipOpen = false;
          return;
        }
        if(res.Success) {
          let vm = this;
          const m = vm.$message({
            message: this.$t('successfullyDeleted'),
            duration: 3000,
            type: "success",
            center: true
          });
          setTimeout(() => m.close(), 2000);
          // 再獲取一次列表
          this.getActiveBetList();
          this.isTicketTipOpen = false;
          return;
        }else if (res.Success == false) {
          let vm = this;
          const m = vm.$message({
            message: this.$t("DataError"),
            duration: 3000,
            type: "warning",
            center: true
          });
          setTimeout(() => m.close(), 2000);
          return;
        }
        this.isTicketTipOpen = false;
      });
    },
    //刪除活動function選擇
    deleteFunction () {
      this.isTicketTipType == 'delete' ? this.deleteActive() : this.betDelete()
    },

    //彈窗顯示
    isTicketTipShow (e,delData) {
      this.isTicketTipType = e.toElement.className;
      this.deleteData = delData;
      this.isTicketTipOpen = !this.isTicketTipOpen;

    },
    // 彈窗確認按鈕事件
    confirmBtnEvent() {
      this.$router.push("/CreateClub");
    },
  },
};
</script>

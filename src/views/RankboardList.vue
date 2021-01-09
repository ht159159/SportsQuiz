<template>
  <main class="rankboardList">
    <!-- header -->
    <div class="rankboard-list-head">
      <div class="rankboard-list-head-wrap-1">
        <back class="back-icon"></back>
        <p>{{ rankTypeName }}</p>
      </div>
    </div>

    <!-- content -->
    <div class="details-main">
      <!-- 自己 -->
      <div class="my-self-rank">
        <img class="my-img" :src="player.UImg" />
        <div>{{ $t('YouAreRankedNo') }}{{ player.No }},{{ $t('TotalCoins') }}：{{ player.Amount }}</div> <!-- 【 您在本榜排行第 】 --><!-- 【 金币数量 】 -->
      </div>
      <!-- 前三 -->
      <div class="top-three">
        <!-- 第二名 -->
        <div class="ranking" v-if="second">
          <img class="trophy" src="@/assets/rankboard/second.png" alt="" />
          <img :src="second.UImg" alt="" class="rankingimg" @click="peek(second.UId)"/>
          <div class="ranking-main">
            <p class="rankname">{{ second.NickName }}</p>
            <p class="yellow-text">{{ unit }} : {{ second.Amount }}</p>
          </div>
        </div>
        <div class="ranking" v-else>
          <img class="trophy" src="@/assets/rankboard/second.png" alt="" />
          <img src="../assets/rank_08.jpg" alt="" class="rankingimg" />
          <div class="ranking-main">
            <p class="rankname">{{ $t('WaitAndSee') }}</p>  <!-- 【 虚以待位 】 -->
            <p class="yellow-text">{{ unit }} : 0</p>
          </div>
        </div>

        <!-- 冠軍 -->
        <div class="ranking champ" v-if="champion">
          <img class="trophy champ-trophy" src="@/assets/rankboard/champion.png"/>
          <img :src="champion.UImg" alt="" class="champ-img rankingimg" @click="peek(champion.UId)"/>
          <div class="ranking-main">
            <p class="rankname">{{ champion.NickName }}</p>
            <p class="yellow-text">{{ unit }} : {{ champion.Amount }}</p>
          </div>
        </div>

        <div class="ranking" v-else>
          <img class="trophy champ-trophy" src="@/assets/rankboard/champion.png"/>
          <img
            src="../assets/rank_08.jpg"
            alt=""
            class="champ-img rankingimg"
          />
          <div class="ranking-main">
            <p class="rankname">{{ $t('WaitAndSee') }}</p>  <!-- 【 虚以待位 】 -->
            <p class="yellow-text">{{ unit }} : 0</p>
          </div>
        </div>

        <!-- 第三名 -->
        <div class="ranking" v-if="third">
          <img class="trophy" src="@/assets/rankboard/third.png" />
          <img :src="third.UImg" alt="" class="rankingimg" @click="peek(third.UId)"/>
          <div class="ranking-main">
            <p class="rankname">{{ third.NickName }}</p>
            <p class="yellow-text">{{ unit }} : {{ third.Amount }}</p>
          </div>
        </div>
        <div class="ranking" v-else>
          <img class="trophy" src="@/assets/rankboard/third.png" />
          <img src="../assets/rank_08.jpg" alt="" class="rankingimg" />
          <div class="ranking-main">
            <p class="rankname">{{ $t('WaitAndSee') }}</p>  <!-- 【 虚以待位 】 -->
            <p class="yellow-text">{{ unit }} : 0</p>
          </div>
        </div>
      </div>

      <!-- 其他名次 -->
      <div class="other-rankins">
        <div class="rank-item">
          <p class="purple-text">{{ $t('Rank') }}</p>  <!-- 【 排位 】 -->
          <p class="purple-text"></p>  <!-- 【 空的 】 -->
          <p class="purple-text">{{ $t('Nickname') }}</p>  <!-- 【 昵称 】 -->
          <p class="purple-text">{{ unit }}</p>
          <p class="purple-text">{{ $t('Detailed') }}</p>  <!-- 【 详细 】 -->
        </div>

        <!-- 第四名以下資料 -->
        <ul  class="other-rankins-wrap"  v-infinite-scroll="load"  infinite-scroll-disabled="busy">
          <li v-for="(item, index) in list">
            <div>TOP {{ index + 4 }}</div>
            <div>
              <img :src="second.UImg" />
            </div>
            <div class="other-rankings-NickName">{{ item.NickName }}</div>
            <div :class="[index + 4 <= 10 ? 'orange-text' : 'gold-text']">
              {{ item.Amount }}
            </div>
            <div class="detail-wrap">
              <span class="detail-check" @click="peek(item.UId)">{{ $t('TakePeek') }}</span>  <!-- 【 瞄一眼 】 -->
            </div>
          </li>
          <div
            style="font-size: .24rem;text-align:center;line-height: .48rem"
            v-if="isLoading"
          >
            {{ $t('WipeLoading') }}...  <!-- 【 加载中… 】 -->
          </div>
        </ul>
        <!-- 無第四名以下資料時 -->
        <div class="noDataRank" v-if="isNoData">
          <p>{{ $t("NoData") }}</p>  <!-- 【 暂无数据 】 -->
        </div>
      </div>
    </div>

    <!-- 瞄一眼彈窗 -->
    <div class="fanybox-wrap" v-if="openPeek"></div>
    <transition name="fanybox" >
      <div class="peek" v-if="openPeek">
        <div class="user-info">
          <img :src="userImg">
          <div class="user-name">{{ userNickName }}</div>
        </div>
        <div class="user-info-content">
          <div class="user-info-box" v-for="item in userInfo">
            <p>{{ item.title }}</p>
            <p>{{ item.val }}</p>
          </div>
        </div>
        <div class="peek-btn" @click="openPeek = !openPeek"></div>
      </div>
    </transition>
  </main>
</template>
<script>
import back from "@/components/Botton/back.vue";
import model from "../components/model";
import {
  apiGetBetAmount,
  apiGetWinCount,
  apiGetWinAmount,
  apiGetMemberRankingInfo
} from "@/api/Rankboard";
export default {
  components: {
    back,
    model
  },
  data() {
    return {
      rankType: undefined,
      rankTypeName: "",
      unit: "",
      list: [],
      rankinfo: [],
      champion: [],
      second: [],
      third: [],
      player: [],
      openPeek: false,
      championUid: "",
      secodUid: "",
      thirdUid: "",
      isNoData: false,
      isLoading: false,

      // 瞄一眼彈窗  ["投注场次：","投注胜率：","VIP等级：","所属俱乐部：","所屬俱樂部：","挑戰賽次數：","挑戰賽通過率：","當前挑戰賽排名："]
      userInfo: [
        { title: this.$t('BettingGames'), val: ""}, //投注场次
        { title: this.$t('BettingOdds'), val: ""}, //投注胜率
        { title: this.$t('VIPLevel'), val: ""},  //VIP等級
        { title: this.$t('MemberClub'), val: ""},  //所属俱乐部
        { title: this.$t('NumberOfChallenges'), val: ""},  //挑戰賽次數
        { title: this.$t('ChallengePassRate'), val: ""},  //挑戰賽通過率
        { title: this.$t('ChallengeRanking'), val: ""},  //當前挑戰賽排名
      ],
      userImg: "",
      userNickName: "",
      // v-infinite-scroll 套件
      busy: true,
      push: false,
      IndexNum: 2,
      noMore: false,
      totalPage: "",
    };
  },
  created() {
    this.getRankType();
  },
  methods: {
    // 讀取localstorage 排行榜類型 並執行撈取API
    getRankType() {
      this.rankType = localStorage.getItem("rankType");

      if (this.rankType == 1) {
        this.rankTypeName = this.$t("TotalBetLeaderboard");  // [投注总额排行榜]
        this.unit = this.$t('TotalBet');  // [投注]
        this.getBetAmount();
      }
      if (this.rankType == 2) {
        this.rankTypeName = this.$t("WinLeaderboard");
        this.unit = this.$t('Wins');  // [胜次]
        this.getWinCount();
      }
      if (this.rankType == 3) {
        this.rankTypeName = this.$t("WinCoinLeaderboard");
        this.unit = this.$t('WinCoin');  // [赢币]
        this.getWinAmount();
      }
    },

    //投注总额排行榜
    getBetAmount() {
      let data = {
        PageIndex: 1,
        PageSize: 20
      };
      this.isLoading = true;
      apiGetBetAmount(data, true).then(res => {
        if(Math.abs(res.Code) >= 600) {
          this.isLoading = false;
          this.isNoData = true;
        } else {
          this.totalPage = res.TotalPage;
          if (res.Data.Others.length > 0) {
            this.isLoading = false;
            this.isNoData = false;
            this.list = res.Data.Others;
            this.player = res.Data.Oneself;
            this.busy = false;
          } else {
            this.isLoading = false;
            this.isNoData = true;
          }
        }
        })
        .then(() => {
          // 第四名之後排名
          this.otherRank();
        });
    },

    // 胜次排行榜
    getWinCount() {
      let data = {
        PageIndex: 1,
        PageSize: 20
      };
      this.isLoading = true;
      apiGetWinCount(data, true).then(res => {
        if(Math.abs(res.Code) >= 600) {
          this.isLoading = false;
          this.isNoData = true;
        } else {
          this.totalPage = res.TotalPage;
          if (res.Data.Others.length > 0) {
            this.isLoading = false;
            this.isNoData = false;
            this.list = res.Data.Others;
            this.player = res.Data.Oneself;
            this.busy = false;
          } else {
            this.isLoading = false;
            this.isNoData = true;
          }
        }
      })
      .then(() => {
        // 第四名之後排名
        this.otherRank();
      });
    },

    // 赢币排行榜
    getWinAmount() {
      let data = {
        PageIndex: 1,
        PageSize: 20
      };
      this.isLoading = true;
      apiGetWinAmount(data, true).then(res => {
        if(Math.abs(res.Code) >= 600) {
          this.isLoading = false;
          this.isNoData = true;
        } else {
          this.totalPage = res.TotalPage;
          if (res.Data.Others.length > 0) {
          this.isLoading = false;
          this.isNoData = false;
          this.list = res.Data.Others;
          this.player = res.Data.Oneself;
          this.busy = false;
          } else {
            this.isLoading = false;
            this.isNoData = true;
          }
        }
      })
      .then(() => {
        // 第四名之後排名
        this.otherRank();
      });
    },
    otherRank() {
      this.champion = this.list.shift();
      this.second = this.list.shift();
      this.third = this.list.shift();
    },

    // v-infinite-scroll 套件滑到底加載
    load() {
      if (this.IndexNum > this.totalPage ) {
        return
      }
      this.busy = true;
      let data = {
        PageIndex: this.IndexNum,
        PageSize: 20
      };
      if (this.rankType == 1) {
        apiGetBetAmount(data, true).then(res => {
          if (res.Data.Others.length == 0) {
            this.busy = true;
            this.push = false;
          } else if (res.Data.Others.length > 0) {
            // for (let i = 0; i < res.Data.Others.length; i++) {
            //   this.list.push(res.Data.Others[i]);
            // }
            res.Data.Others.forEach(el => {
              this.list.push(el);
              this.busy = false;
            });
            this.IndexNum++;
          }
        });
      }
      if (this.rankType == 2) {
        apiGetWinCount(data, true).then(res => {
          if (res.Data.Others.length == 0) {
            this.busy = true;
            this.push = false;
            // this.noMore = true
          } else if (res.Data.Others.length > 0) {
            for (let i = 0; i < res.Data.Others.length; i++) {
              this.list.push(res.Data.Others[i]);
              this.busy = false;
            }
            this.IndexNum++;
          }
        });
      }
      if (this.rankType == 3) {
        apiGetWinAmount(data, true).then(res => {
          if (res.Data.Others.length == 0) {
            this.busy = true;
            this.push = false;
            // this.noMore = true
          } else if (res.Data.Others.length > 0) {
            for (let i = 0; i < res.Data.Others.length; i++) {
              this.list.push(res.Data.Others[i]);
              this.busy = false;
            }
            this.IndexNum++;
          }
        });
      }
    },

    //瞄一眼
    peek(uid) {
      let data = {
        uid: uid
      };
      apiGetMemberRankingInfo(data, true).then(res => {
        if(Math.abs(res.Code) >= 600 || res.Message == "VIP等级不足") {
          let vm = this;
          const m = vm.$message({
            message: res.Message,
            duration: 3000,
            type: "error",
            center: true
          });
          setTimeout(() => {m.close()}, 2000);
        }
        else {
          this.openPeek = true;
          this.userImg = res.Data.Img
          this.userNickName = res.Data.NickName;
          this.userInfo[0].val = res.Data.BetNum;
          this.userInfo[1].val = res.Data.BetWinRate+ "%";
          this.userInfo[2].val = res.Data.MemberRankName;
          if (res.Data.ClubName == "") {
            this.userInfo[3].val = "-"
            } else {
              this.userInfo[3].val = res.Data.ClubName;
          }
          this.userInfo[4].val = res.Data.ChallengeNum;
          this.userInfo[5].val = res.Data.ChallengePassRate + "%";
          if (res.Data.ChallengeRank == "0") {
            this.userInfo[6].val = "-"
          } else {
            this.userInfo[6].val = res.Data.ChallengeRank;
          }
        }
      })
    }
  }
};
</script>

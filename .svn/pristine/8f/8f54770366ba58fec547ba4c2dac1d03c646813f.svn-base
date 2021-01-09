<template>
  <div class="details">
    <div class="details-head">
      <back class="back-icon"></back>
      <div class="myrank">
        <p class="ptop">{{ $t("MyRank") }}</p>  <!-- 【 我的排位 】 -->
        <p class="pcontent" v-if="rankinfo.Rank === -1">
          {{ $t("NoRanking") }}
        </p>
        <p class="pcontent" v-else>{{ rankinfo.Rank }}</p>
      </div>
      <p class="rank-title">{{ $t("RankLeaderBoard") }}</p>  <!-- 【 排位赛排行榜 】 -->
      <p class="rank-match11">{{ $store.state.match.MatchName }}</p>
      <div class="gold">
        <p class="ptop">{{ $t('TotalCoins') }}</p>  <!-- 【 金币数量 】 -->
        <p class="pcontent" v-if="rankinfo.RankIntegral === -1">
          {{ $t('No') }}
        </p>

        <p class="pcontent" v-else>{{ rankinfo.RankIntegral }}</p>
      </div>
    </div>

    <div class="details-tabs" v-if="ranklist[0]">
      <ul class="tabs-ul">
        <li
          v-for="(item, index) in ranklist"
          @click="tabshow(index, item.ListTypeId)"
          :key="index"
        >
          {{ item.ListTypeName }}
          <span class="heng"></span>
          <span class="lineH" v-show="num == index"></span>
        </li>
      </ul>
    </div>
    <div class="details-main">
      <!-- <div class="top-head">
          <i class="start"></i>
          第九期
          <i class="start"></i>
        </div> -->

      <!-- 第二名 -->
      <div class="top-main">
        <div class="ranking" v-if="second">
          <img class="trophy" src="@/assets/rank/second.png" alt="" />
          <img
            :src="second.UImg"
            alt=""
            class="rankingimg"
            @click="peek(second.UId)"
          />
          <div class="ranking-main">
            <p class="rankname">{{ second.NickName }}</p>
            <p class="yellow-text">{{ $t("Coins") }}{{ second.Integral }}</p>  <!-- 【 金币 】 -->
          </div>
        </div>
        <div class="ranking" v-else>
          <img class="trophy" src="@/assets/rank/second.png" alt="" />
          <img src="../assets/rank_08.jpg" alt="" class="rankingimg" />
          <div class="ranking-main">
            <p class="rankname">{{ $t("WaitAndSee") }}</p>  <!-- 【 虚以待位 】 -->
            <p class="yellow-text">{{ $t("Coins") }}:0</p>  <!-- 【 金币 】 -->
          </div>
        </div>

        <!-- 冠軍 -->
        <div class="ranking champ" v-if="first">
          <img
            class="trophy champ-trophy"
            src="@/assets/rank/champion.png"
            alt=""
          />
          <img
            :src="first.UImg"
            alt=""
            class="champ-img rankingimg"
            @click="peek(first.UId)"
          />
          <div class="ranking-main">
            <p class="rankname">{{ first.NickName }}</p>
            <p class="yellow-text">{{ $t("Coins") }} {{ first.Integral }}</p>  <!-- 【 金币 】 -->
          </div>
        </div>
        <div class="ranking" v-else>
          <img
            class="trophy champ-trophy"
            src="@/assets/rank/champion.png"
            alt=""
          />
          <img
            src="../assets/rank_08.jpg"
            alt=""
            class="champ-img rankingimg"
          />
          <div class="ranking-main">
            <p class="rankname">
              {{ $t("WaitAndSee") }}  <!-- 【 虚以待位 】 -->
            </p>
            <p class="yellow-text">{{ $t("Coins") }}:0</p>  <!-- 【 金币 】 -->
          </div>
        </div>

        <!-- 第三名 -->
        <div class="ranking" v-if="third">
          <img class="trophy" src="@/assets/rank/third.png" alt="" />
          <img :src="third.UImg" alt="" class="rankingimg" @click="peek(third.UId)" />
          <div class="ranking-main">
            <p class="rankname">{{ third.NickName }}</p>
            <p class="yellow-text">{{ $t("Coins") }} {{ third.Integral }}</p>  <!-- 【 金币 】 -->
          </div>
        </div>
        <div class="ranking" v-else>
          <img class="trophy" src="@/assets/rank/third.png" alt="" />
          <img src="../assets/rank_08.jpg" alt="" class="rankingimg" />
          <div class="ranking-main">
            <p class="rankname">{{ $t("WaitAndSee") }}</p>  <!-- 【 虚以待位 】 -->
            <p class="yellow-text">{{ $t("Coins") }}:0</p>  <!-- 【 金币 】 -->
          </div>
        </div>
      </div>

      <!-- 第四名以後名次 -->
      <div class="other-rankins">
        <div class="rank-item">
          <p class="purple-text">{{ $t("Rank") }}</p>  <!-- 【 排位 】 -->
          <p class="purple-text"></p>  <!-- 【 空的 】 -->
          <p class="purple-text">{{ $t("Nickname") }}</p>  <!-- 【 昵称 】 -->
          <p class="purple-text">{{ $t("Coins") }}</p>  <!-- 【 金币 】 -->
          <p class="purple-text">{{ $t("Detailed") }}</p>  <!-- 【 详细 】 -->
        </div>
        <div class="noDataRank" v-if="isNoData">
          <p>{{ $t("NoData") }}</p>
        </div>
        <ul
          class="other-rankins-wrap"
          v-infinite-scroll="load"
          infinite-scroll-disabled="busy"
          infinite-scroll-immediate="immediate"
          v-else
        >
          <!-- v-infinite-scroll="load(listtype)"  infinite-scroll-disabled="busy" -->
          <li v-for="(item, index) in list" :key="item.Rank">
            <div class="title-rank">TOP{{ item.Rank }}</div>
            <div>
              <img :src="item.UImg" />
            </div>
            <div class="other-rankings-NickName">
              <p>{{ item.NickName }}</p>
            </div>
            <div :class="[index + 4 <= 10 ? 'orange-text' : 'gold-text']">
              {{ item.Integral }}
            </div>
            <div class="detail-wrap">
              <span class="detail-check" @click="peek(item.UId)">{{ $t("TakePeek") }}</span>  <!-- 【 瞄一眼 】 -->
            </div>
          </li>
          <div
            style="font-size: .24rem;text-align:center;line-height: .48rem"
            v-if="isLoading"
          >
            {{ $t('WipeLoading') }}...  <!-- 【 加载中… 】 -->
          </div>
        </ul>
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
  </div>
</template>

<script>
import {
  apiGetListByListTypeId,
  apiGetListTypeListAndUserRank
} from "@/api/ListType";
import { apiGetMemberMatchViewModel } from "@/api/match";
import back from "../components/Botton/back.vue";
import { apiGetMemberRankingInfo } from "@/api/Rankboard";
import model from "../components/model";
export default {
  components: {
    back,
    model
  },
  created() {
    this.getUserInfo();
    this.getrankmatchinfo();
  },

  data() {
    return {
      active: 1,
      list: [],
      list2: [],
      list3: [],
      data11: 1,
      first: "",
      second: "",
      third: "",
      index: 0,
      num: 0,
      listtype: "",
      ranklist: "",
      cid: "",
      rankinfo: "",
      time: "",
      isNoData: false,
      isLoading:　false,
      openPeek: false,
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
      busy: false,
      push: false,
      IndexNum: 2,
      noMore: false,
      immediate: false,
    };
  },
  methods: {
    // getTime() {
    //   let date = new Date(new Date().getTime() - 12 * 60 * 60 * 1000);
    //   // let time1 = time.slice(time.indexOf(" ", 2), time.indexOf(":"));
    //   var YY = date.getFullYear() + "-";
    //   var MM =
    //     (date.getMonth() + 1 < 10
    //       ? "0" + (date.getMonth() + 1)
    //       : date.getMonth() + 1) + "-";
    //   var jD = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
    //   var zD = date.getDate() < 10 ? "0" + date.getDate() : date.getDate() - 1;
    //   let zuori = YY + MM + zD;
    //   let jinri = YY + MM + jD;
    // },
    //列表
    // getrankList() {
    //   this.$store.dispatch("asyncgetranklist");
    // },
    //切换榜单
    getrankmatchinfo() {
      let data = {
        matchId: this.$store.state.match.MatchId
      };
      apiGetMemberMatchViewModel(data, true).then(res => {
        this.rankinfo = res;
      });
    },
    tabshow(index, id) {
      let date = new Date(new Date().getTime() - 12 * 60 * 60 * 1000);
      // let time1 = time.slice(time.indexOf(" ", 2), time.indexOf(":"));
      var YY = date.getFullYear() + "-";
      var MM =
        (date.getMonth() + 1 < 10
          ? "0" + (date.getMonth() + 1)
          : date.getMonth() + 1) + "-";
      var jD = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
      var zD =
        (date.getDate() < 10 ? "0" + date.getDate() : date.getDate()) - 1;

      let zuori = YY + MM + zD;
      let jinri = YY + MM + jD;
      this.num = index;
      this.index = index;
      this.listtype = id;
      if (index == 0) {
        this.time = "";
      }
      if (index == 1) {
        this.time = jinri;
      }
      if (index == 2) {
        this.time = zuori;
      }
      this.first = null;
      this.second = null;
      this.third = null;
      this.list = null;
      this.getrankrender();
    },
    //排名用户
    getrankrender(id) {
      let data = {
        listTypeId: id || this.listtype,
        index: 1,
        count: 20,
        dateEasternNow: this.time
      };
      this.isLoading = true;
      this.isNoData = false;
      apiGetListByListTypeId(data, true).then(res => {
        if(Math.abs(res.Code) >= 600) {
          this.isLoading = false;
          this.isNoData = true;
        } else {
          if (res.Data.length > 0) {
            this.list = res.Data;
            this.first = this.list.shift();
            this.second = this.list.shift();
            this.third = this.list.shift();
            this.isLoading = false;
            this.isNoData = false;
          } else {
            this.isLoading = false;
            this.isNoData = true;
          }
        }
        
      });
    },
    //获取用户排名金币
    getUserInfo() {
      let data = {
        matchId: this.$store.state.match.MatchId,
        index: 1,
        count: 10,
        rank: true
      };
      this.isLoading = true;
      this.isNoData = false;
      apiGetListTypeListAndUserRank(data, true).then(res => {
        if(!res.Data || Math.abs(res.Code) >= 600) {
          this.isLoading = false;
          this.isNoData = true;
        } else {
          if (res.Data.length > 0) {
            let hashdata = res.Data;
            let zuotian = hashdata[hashdata.length - 1];
            let zong = hashdata[0];
            let today = hashdata[hashdata.length - 2];
            let arr = [zong, today, zuotian];

            this.ranklist = arr;
            console.log(this.ranklist[0])
            this.cid = today.ListTypeId;
            this.getrankrender(this.cid);
            this.listtype = this.cid;
            this.isLoading = false;
            this.isNoData = false;
          } else {
            this.isLoading = false;
            this.isNoData = true;
          }
        }
      });
    },

    // v-infinite-scroll 套件滑到底加載
    load() {
      let data = {
        listTypeId: this.listtype,
        index: this.IndexNum,
        count: 20,
        dateEasternNow: this.time
      };
      apiGetListByListTypeId(data, true).then(res => {
        if (res.Data) {
          if (res.Data.length == 0) {
            this.busy = true;
            this.push = false;
          } else if (res.Data.length > 0) {
            for (let i = 0; i < res.Data.length; i++) {
              this.list.push(res.Data[i]);
              this.busy = false;
            }
            this.IndexNum++;
          }
        }
      });
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

<style></style>

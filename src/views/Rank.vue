<template>
  <div class="rank">
    <!-- 弹出说明框 -->
    <div class="explain" v-if="ShowExplain">
      <!-- <i class='round' /> -->
      <i class="explain-x" @click="hideExplain"></i>
      <p class="rank-popup-title">{{ $t("RankGameRules") }}</p>
      <p class="rank-popup-content">
        {{ $t("RankGameRules1") }}<br />
        {{ $t("RankGameRules2") }}
      </p>
    </div>
    <div class="rank-head">{{ $t('RankGame') }}</div> <!-- 【 排位赛 】 -->
    <div class="rank-main">
      <div class="rank-main-top" :class="[lang == 'zh-CN' ? 'rank-main-top-CN' : lang == 'en-US' ? 'rank-main-top-US' : 'rank-main-top-TW']">
        <!-- 弹出功能 -->
        <i class="question" @click="showPopup" />
        <van-button round type="default" @click="goChoose" :class="[lang == 'zh-CN' ? 'van-button-CN' : lang == 'en-US' ? 'van-button-US' : 'van-button-TW']"></van-button>
      </div>
      <!-- 切换页tabs -->
      <div class="rank-main-tabs">
        <div>
          <div class="hide1" @click="test1"></div>
          <div class="hide2" @click="test2"></div>
          <div
            class="test1"
            :class="{
              'test-active': $store.state.match.lefttab,
              'test1-bgc': $store.state.match.bgc1
            }"
          >
            <span class="myrank">{{ $t('MyRankGame') }}</span>  <!-- 【 我的排位赛 】 -->
          </div>
          <div
            class="test2"
            :class="{
              'test-active': false,
              'test2-bgc': $store.state.match.bgc1
            }"
          >
            <span class="tab-ranklist">{{ $t('Leaderboard') }}</span>  <!-- 【 排行榜 】 -->
          </div>
        </div>
      </div>
      <!-- 我的排位 -->
      <div
        class="rank-myrank"
        v-show="$store.state.match.lefttab"
      >
        <div class="wipeLoading" v-if="wipeLoading">
          <p>{{ $t("WipeLoading") }}</p>
        </div>
        <div class="myrank-list" v-for="item in myranklist" :key="item.id" @click="gorankmatch(item.MatchId, item.MatchName)">
          <img v-if="item.Img" :src="item.Img" alt="" class="myrank-list-img">
          <img v-else src="@/assets/instead_logo1.png" class="myrank-list-img">
          <span>{{ item.MatchName }}</span>
          <i class="rank-arrow"></i>
          <!-- <div class="sport-main-collapse-icon"></div> -->
        </div>
        <div class="noData" v-if="lefttabNomatchs">
          <p>{{ $t("NoData") }}</p>  <!-- 【 暂无数据 】 -->
        </div>
      </div>
      <!-- 排行榜 -->
      <div 
        class="rank-match-list"
        v-show="$store.state.match.righttab"
        :class="{ 'rank-myrank-active': righttabNomatchs }"
      >
        <div class="wipeLoading" v-if="wipeLoading">
          <p>{{ $t("WipeLoading") }}</p>
        </div>
        <div class="match-list-football" v-for="item in matchlist" :key="item.id" @click="goJump(item.MatchId, item.MatchName)">
          <img v-if="item.Img" :src="item.Img" alt="" class="match-list-football-img">
          <img v-else src="@/assets/instead_logo1.png" alt="" class="match-list-football-img">
          <span>{{ item.MatchName }}</span>
          <i class="rank-arrow"></i>
        </div>
      </div>
    </div>
    <nav-bottom ref="son"></nav-bottom>
  </div>
</template>

<script>
    import NavBottom from "@/components/Main/NavBottom.vue";

    import {
        apiGetMatchs,
        apiGetMyMatchList,
        apiGetRankMatchList
    } from "../api/match.js";

    export default {
        created() {
            // this.showmatchlist2();
            this.lang = JSON.parse(localStorage.getItem("lang")).tag;
            this.getrankmatch();
            this.getMyrank();
        },
        data() {
            return {
                ShowExplain: false,
                test11: true,
                test22: false,
                bgc1: false,
                matchId: {
                    matchTypeId: "2",
                    index: 1
                },
                matchlist: [],
                testlist: [1],
                myranklist: [],
                lang: "",
                wipeLoading: true,
                lefttabNomatchs: false,
                righttabNomatchs: false
            };
        },
        components: {
            NavBottom
        },
        methods: {
            //跳转排位赛事
            getrankmatch() {
                let data = {
                    index: 1,
                    count: 100,
                    isAll: true
                };
                apiGetRankMatchList(data, true).then(res => {
                  if(res.Data){
                    this.wipeLoading = false;
                    this.matchlist = res.Data;
                    res.Data.length > 0 ? this.righttabNomatchs = false : this.righttabNomatchs = true;
                  }
                });
            },
            gorankmatch(id, name) {
                this.$refs.son.show = false;
                this.$store.commit("upMatchid", {
                    MatchId: id,
                    MatchName: name
                });
                this.$router.push("/rankmatch");
            },
            //排位赛选择
            goChoose() {
                this.$router.push("/rankchoose");
            },
            //获得个人排位赛信息
            getUserRankInfo() {
                this.$refs.son.show = false;
                this.$store.dispatch("asyncGetUserRankInfo");
            },
            showmatchlist2() {
                let data = {
                    matchTypeId: "2",
                    index: 1,
                    count: 100
                };
                this.$store.dispatch("asyncgetMatchList", data);
            },
            //我的排位
            getMyrank() {
                let data = {
                    index: 1,
                    count: 100
                };
                apiGetMyMatchList(data, true).then(res => {
                  if(res.Data){
                    this.wipeLoading = false;
                    this.myranklist = res.Data;
                    res.Data.length > 0 ? this.lefttabNomatchs = false : this.lefttabNomatchs = true;
                  }
                });
            },
            //跳转
            goJump(id, name) {
                this.$store.commit("upMatchid", {
                    MatchId: id,
                    MatchName: name
                });
                this.$router.push("/ranklistdetails");
            },
            //列表
            getmatchlist() {
                this.$refs.son.show = false;
                this.$store.dispatch("asyncGetHistoryMatchList");
            },
            //  tab栏
            //左
            test1() {
              this.matchlist = [];
              this.myranklist = [];
              this.wipeLoading = true;
              this.righttabNomatchs = false;
              this.lefttabNomatchs = false;
              this.getMyrank();
              this.$refs.son.show = false;
              this.test11 = true;
              this.test22 = false;
              this.bgc1 = false;
              let data = {
                  test11: true,
                  test22: false,
                  bgc1: false
              };
              this.$store.commit("upBoolen", data);
              // alert(1);
            },
            // tab栏
            test2() {
              this.matchlist = [];
              this.myranklist = [];
              this.wipeLoading = true;
              this.righttabNomatchs = false;
              this.lefttabNomatchs = false;
              this.getrankmatch();
              this.$refs.son.show = false;
              this.test11 = false;
              this.test22 = true;
              this.bgc1 = true;
              let data = {
                  test11: false,
                  test22: true,
                  bgc1: true
              };
              this.$store.commit("upBoolen", data);
              // alert(2);
            },
            showPopup() {
                this.$refs.son.show = false;
                this.ShowExplain = true;
            },
            hideExplain() {
                this.$refs.son.show = false;
                this.ShowExplain = false;
            }
        }
    };
</script>

<style></style>
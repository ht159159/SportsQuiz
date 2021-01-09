<template>
  <main class="game">
    <div class="ss">
      <div class="sport-header">
        <h3>{{ $t("SportGame") }}</h3>
        <!-- 【 赛事 】 -->
      </div>

      <nav class="match-tabs">
        <div class="searchBox">
          <input class="searchInput" type="text" id="fname" name="fname" :placeholder='$t("SearchPlaceholder")' v-model="searchValue">
          <div class="searchBtn" for="fname" @click="search()"></div>
        </div>

        <van-tabs v-model="active" class="match-tab">
          <van-tab
            :title="item.MatchTypeName"
            v-for="item in ballTypes"
            :key="item.MatchTypeId"
          >
            <div
              slot="title"
              @click="showtabs(item.MatchTypeId)"
              class="matchbutton"
            >
              <span>{{ item.MatchTypeName }}</span>
            </div>
            <main class="sport-main">
              <div class="sport-main-tabtitle">
                <div class="sport-main-tabtitle-tabs" @click="fntab(-1)">
                  <span
                    :class="{
                      'sport-main-tabtitle-tabs-active': titlenum == -1,
                    }"
                    >{{ $t("All") }}</span
                  >
                  <!-- 【 全部 】 -->
                </div>
                <div class="sport-main-tabtitle-tabs" @click="fntab(0)">
                  <span
                    :class="{
                      'sport-main-tabtitle-tabs-active': titlenum == 0,
                    }"
                    >{{ $t("MorningSession") }}</span
                  >
                  <!-- 【 早盘 】 -->
                </div>
                <div class="sport-main-tabtitle-tabs" @click="fntab(1)">
                  <span
                    :class="{
                      'sport-main-tabtitle-tabs-active': titlenum == 1,
                    }"
                    >{{ $t("Today") }}<span class="glow">Live</span></span
                  >
                  <!-- 【 今日 】 -->
                </div>
                <div class="sport-main-tabtitle-tabs" @click="fntab(2)">
                  <span
                    :class="{
                      'sport-main-tabtitle-tabs-active': titlenum == 2,
                    }"
                    >{{ $t("Boules") }}<span class="glow">Live</span></span
                  >
                  <!-- 【 滚球 】 -->
                </div>
              </div>
              <van-list
                class="sport-main-collapses"
                v-model="loading"
                :finished="finished"
                @load="onLoad"
                :finished-text="ftext"
                :offset="offsetnum"
                :loading-text="$t('WipeLoading')"
              >
                <div
                  class="sport-main-collapse"
                  v-for="(item, index) in msgList"
                  :key="index"
                  @click="gojump(item.MatchId, item.MatchName)"
                >
                  <img
                    v-if="item.Img"
                    :src="item.Img"
                    alt=""
                    class="sport-main-collapse-img"
                  />
                  <img
                    v-else
                    src="@/assets/instead_logo1.png"
                    alt=""
                    class="sport-main-collapse-img"
                  />
                  <div class="sport-main-collapse-name">
                    {{ item.MatchName }}
                  </div>
                  <div class="sport-main-collapse-icon"></div>
                </div>

              <!-- 【 暂无赛事 】 -->
              <div
                class="nomatchs"
                v-if="msgList.length === 0 && loading == false"
              >
                <p>{{ $t("NoMatch") }}</p>
              </div>
              </van-list>
            </main>
          </van-tab>
        </van-tabs>
      </nav>
    </div>
    <nav-bottom></nav-bottom>
  </main>
</template>

<script>
import NavBottom from "@/components/Main/NavBottom.vue";
import { apiGetMatchs, apiGetMatchTypes } from "@/api/match";
export default {
  created() {
    // this.getMatchType();
    localStorage.setItem("titlenum", -1);
    this.getmatchs();
    // this.showtabs2(this.football.matchTypeId);
  },
  name: "gameSport",
  components: {
    NavBottom,
  },
  data() {
    return {
      ballTypes: [],
      currenBallTypes: 0,
      matchs: [],
      pageIndex: 1,
      pageSize: 10,

      active: 0,
      tab1: false,
      tab2: true,
      tab3: false,
      tab4: false,
      tab5: false,
      tab6: false,
      // football: {
      //   matchTypeId: this.$store.state.match.MatchType[0].MatchTypeId
      // },
      date: "",
      count: "",
      mid: "",
      mlist: "",
      msgList: [],
      IndexNum: 1,
      busy: false,
      loading: false,
      finished: false,
      cid: "",
      page: "",
      ftext: "",
      matchItemTypeId: -1,
      titlenum: -1,
      offsetnum: 50,
      totalCount: "",
      totalMatchs: "",
      searchValue: ""
    };
  },
  methods: {
    fntab(id) {
      this.searchValue = "";
      localStorage.setItem("titlenum", id);
      this.matchItemTypeId = id;
      this.titlenum = id;
      this.initialization();
      if (id == 2) {
        this.$store.commit("uptitlenum", {
          id,
        });
        return;
      }
      if (id == 0) {
        this.$store.commit("uptitlenum", {
          id,
        });
        return;
      }
      if (id == 1 || id == -1) {
        this.$store.commit("uptitlenum", {
          id,
        });
        return;
      }
    },
    // getBallTypes(){
    //   let data = {
    //     index: 1,
    //     count: 10
    //   };
    //   this.$store.dispatch("asyncgetMatchType", data);
    // },

    // getMatchs(){
    //  let data={
    // matchTypeId: this.currenBallTypes,
    //     index: 1,
    //     count: 10
    //  };
    //  this.$store.dispatch("asyncgetMatchList", data);
    // },

    // onLoad() {
    //   setTimeout(() => {

    //     let data = {
    //       matchTypeId:
    //         this.cid || this.$store.state.match.MatchType[0].MatchTypeId,
    //       index: this.IndexNum,
    //       count: 10
    //     };
    //     // }
    //     this.$store.dispatch("asyncgetMatchList", data);

    //     setTimeout(() => {
    //       //是否全部加载

    //       //没有比赛
    //       if (this.$store.state.match.Matchs.length == 0) {
    //         this.msgList = this.$store.state.match.Matchs;
    //         this.finished = true;
    //         this.loading = false;
    //         // this.finished = true;
    //         return;
    //       }
    //       //添加比赛
    //       if (this.$store.state.match.Matchs.length == 10) {
    //         for (let i = 0; i < this.$store.state.match.Matchs.length; i++) {
    //           this.msgList.push(this.$store.state.match.Matchs[i]);
    //         }
    //         this.loading = false;
    //         this.IndexNum++;
    //         if (this.$store.state.match.TotalPages == this.IndexNum - 1) {

    //           this.finished = true;
    //           return;
    //         }
    //         return;
    //       }
    //       //剩余比赛
    //       if (
    //         this.$store.state.match.Matchs.length < 10 &&
    //         this.$store.state.match.Matchs.length > 0
    //       ) {
    //         for (let i = 0; i < this.$store.state.match.Matchs.length; i++) {
    //           this.msgList.push(this.$store.state.match.Matchs[i]);
    //         }
    //         this.loading = false;
    //         this.finished = true;
    //         return;
    //       }
    //     }, 500);
    //   }, 500);
    // },

    // load() {
    //   this.busy = true;
    //   let data = {
    //     matchTypeId: this.$store.state.match.MatchType[0].MatchTypeId,
    //     index: this.IndexNum,
    //     count: 10
    //   };

    //   this.$store.dispatch("asyncgetMatchList", data);
    //   if (this.$store.state.match.Matchs.length == 0) {
    //     this.busy = true;
    //     return;
    //   } else if (this.$store.state.match.Matchs.length > 0) {
    //     for (let i = 0; i < this.$store.state.match.Matchs.length; i++) {
    //       this.msgList.push(this.$store.state.match.Matchs[i]);
    //       this.busy = false;
    //     }
    //     this.IndexNum++;
    //   }
    // },
    onLoad() {
      // debugger;
      this.one = true;
      this.ftext = this.$t("WipeNomore"); // 【 沒有更多了 】
      let data1 = {
        matchTypeId: this.cid || this.ballTypes[0].MatchTypeId,
        index: this.IndexNum,
        count: 10,
        havaPlay: true,
        matchItemTypeId: this.matchItemTypeId,
      };
      apiGetMatchs(data1, true).then((res) => {
        this.matchs = res.Data;
        this.page = res.TotalPages;
        this.totalCount = res.TotalCount;

        //獲取全部隊伍
        let totalCountData = {
        matchTypeId: this.cid || this.ballTypes[0].MatchTypeId,
        index: this.IndexNum,
        count: this.totalCount,
        havaPlay: true,
        matchItemTypeId: this.matchItemTypeId,
        };
        apiGetMatchs(totalCountData, true).then((res) => {
          this.totalMatchs = res.Data;
        });

        //没有比赛
        if (this.matchs.length == 0) {
          this.msgList = this.matchs;
          this.finished = true;
          this.loading = false;
          // this.finished = true;
          this.ftext = "";
          return;
        }
        //添加比赛
        if (this.matchs.length == 10) {
          this.IndexNum++;
          for (let i = 0; i < this.matchs.length; i++) {
            this.msgList.push(this.matchs[i]);
          }
          this.loading = false;

          if (this.page == this.IndexNum - 1) {
            this.finished = true;
            return;
          }
          return;
        }
        if (this.matchs.length < 10 && this.matchs.length > 0) {
          for (let i = 0; i < this.matchs.length; i++) {
            this.msgList.push(this.matchs[i]);
          }
          this.loading = false;
          this.finished = true;
          return;
        }

      });
    },
    getmatchs() {
      // new Promise(())
      let data = {
        index: 1,
        count: 10,
      };
      apiGetMatchTypes(data, true).then((res) => {
        this.ballTypes = res.Data;
        let data1 = {
          matchTypeId: res.Data[0].MatchTypeId,
          index: 1,
          count: 10,
          havaPlay: true,
        };
        // apiGetMatchs(data1, true).then(res => {
        //   this.matchs = res.Data;
        // });
      });
    },
    gojump(id, name) {
      this.$store.commit("upMatchid", {
        MatchId: id,
        MatchName: name,
      });
      this.$router.push("/match");
    },
    initialization() {
      this.msgList = [];
      this.IndexNum = 1;
      this.loading = true; //下拉加载中
      this.finished = false; //下拉结束
      if (this.loading) {
        this.onLoad();
      }
    },

    showtabs(id) {
      this.searchValue = "";
      this.cid = id;

      this.initialization();
      // let data = {
      //   matchTypeId: id,
      //   index: 1,
      //   count: 10
      // };
      // this.$store.dispatch("asyncgetMatchList", data);
      // this.msgList = this.$store.state.match.Matchs;
      //   let data1 = {
      //   matchTypeId: this.cid || this.ballTypes[0].MatchTypeId,
      //   index: this.IndexNum,
      //   count: 10,
      //   havaPlay: true
      // };
      // apiGetMatchs(data1,true).then(res=>{
      // })
      this.finished = false;
    },
    showtabs2(id) {
      let data = {
        matchTypeId: id,
        index: 1,
        count: 10,
      };
      this.$store.dispatch("asyncgetMatchList", data);
    },
    getMatchType() {
      let data = {
        index: 1,
        count: 10,
      };
      this.$store.dispatch("asyncgetMatchType", data);
    },

    //搜寻
    search() {
      if (this.searchValue == "") {
        this.msgList = [];
        this.loading = true;
        this.IndexNum = 1;
        this.onLoad();
        // let vm = this;
        // const m = vm.$message({
        //   message: this.$t("SearchTimeError"),
        //   duration: 3000,
        //   type: "error",
        //   center: true
        // });
        // setTimeout(() => {m.close()}, 2000);
        return
      }
      this.msgList = [];
      this.totalMatchs.forEach(element => {
        // element.MatchName.indexOf(this.searchValue)
        if(element.MatchName.indexOf(this.searchValue) != -1){
          this.msgList.push(element);
        };
      });
    }
  },
};
</script>
<style lang="scss" scoped>
.ss {
  height: calc(100% - 1rem);
}

.glow {
  font-weight: bold;
  -webkit-animation: glow 1s infinite;
  -khtml-animation: glow 1s infinite;
  -moz-animation: glow 1s infinite;
  -ms-animation: glow 1s infinite;
  -o-animation: glow 1s infinite;
  animation: glow 1s infinite;
}
@-webkit-keyframes glow {
  0%,
  100% {
    color: red;
  }
  50% {
    color: orange;
  }
}
@-moz-keyframes glow {
  0%,
  100% {
    color: red;
  }
  50% {
    color: orange;
  }
}
@-ms-keyframes glow {
  0%,
  100% {
    color: red;
  }
  50% {
    color: orange;
  }
}
@-o-keyframes glow {
  0%,
  100% {
    color: red;
  }
  50% {
    color: orange;
  }
}
@keyframes glow {
  0%,
  100% {
    color: red;
  }
  50% {
    color: orange;
  }
}
</style>

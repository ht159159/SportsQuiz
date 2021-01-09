<template>
  <main
    class="gameRes"
    v-cloak
  >
    <div class="gameRes-header">
      <!-- <back
        class="back-icon"
        style="margin-top: .4rem"
      ></back> -->
      <h3>赛事</h3>
    </div>
    <div class="gameRes-content">
      <ul
        class="contentUl"
        v-cloak
      >
        <li
          style="margin-left: .2rem"
          :class="{ active: num == index }"
          @click="getNumL(item.MatchTypeId, index)"
          v-for="(item, index) in $store.state.match.MatchType"
          :key="item.index"
        >
          {{ item.MatchTypeName }}
          <span class="heng"></span>
          <span
            class="lineH"
            v-show="num == index"
          ></span>
        </li>
      </ul>
    </div>
    <div
      class="soprtList"
      v-cloak
    >
      <ul
        v-show="num === Pindex"
        v-cloak
      >
        <van-list
          class="sport-main-collapses"
          v-if="matchs"
          v-cloak
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
          <div
            class="sport-main-collapse"
            v-for="(item, index) in msgList"
            :key="index"
            @click="showitems(item.MatchId, item.MatchName)"
          >
            <div class="sport-main-collapse-name">{{ item.MatchName }}</div>
            <div class="sport-main-collapse-icon"></div>
          </div>
          <div
            class="nomatchs"
            v-if="$store.state.match.Matchs.length === 0"
          >
          {{ $t("NoMatch") }}</div>
        </van-list>

        <li
          class="soprtList-ul-item"
          v-for="(item, index) in MatchItems"
          :key="index"
          v-show="items"
          v-cloak
        >
          <p class="soprtList-ul-item-p">
            <img
              class="soprtList-ul-item-p-img"
              src="@/assets/timer_03.png"
              alt=""
            />
            <span class="soprtList-ul-item-p-span">
              {{ item.DateTime }}
            </span>
          </p>
          <div class="soprtList-ul-item-div">
            <p class="sP">{{ MatchName }}</p>
            <div class="sContent">
              <p class="hong">
                <span class="hong-span">{{ item.HomeTeamName }}</span>
              </p>
              <img
                class="imgVs"
                src="@/assets/myself/vsgame_03.png"
                alt=""
              />
              <p class="lan">
                <span class="lan-span">{{ item.AwayTeamName }}</span>
              </p>
            </div>
          </div>
        </li>
        <!-- <div
          class="nomatchs"
          v-if="$store.state.match.Matchs.length === 0"
        ></div> -->
      </ul>
    </div>
    <navbottom></navbottom>
  </main>
</template>

<script>
    import {
        apiGetMatchResultByMatchId
    } from "@/api/match.js";
    import back from "../components/Botton/back.vue";
    import navbottom from "../components/Main/NavBottom";
    export default {
        components: {
            back,
            navbottom
        },
        name: "gameRes",
        created() {
            this.getMatchType();
            // this.getNumL(this.$store.state.match.MatchType[0].MatchTypeId, 0);
        },
        data() {
            return {
                Pindex: 0,
                num: 0,
                list: ["篮球", "足球", "优胜冠军", "网球", "冰球", "台球"],
                gameTime: " 26-09-2019 12 :01",
                HalfNumLeft: 0,
                AllNumLeft: 0,
                HalfNumRight: 0,
                AllNumRight: 0,
                startTime: new Date(),
                endTime: new Date(),
                items: false,
                matchs: true,
                MatchItems: "",
                MatchName: "",
                cid: "",
                loading: false,
                finished: false,
                msgList: [],
                IndexNum: 1
            };
        },
        methods: {
            // onLoad() {
            //   // 异步更新数据
            //   setTimeout(() => {
            //     // for (let i = 0; i < 10; i++) {
            //     //   this.list.push(this.list.length + 1);
            //     // }
            //     // 加载状态结束
            //     // this.loading = false;

            //     // // 数据全部加载完成
            //     // if (this.list.length >= 40) {
            //     //   this.finished = true;
            //     // }
            //      let data = {
            //     matchTypeId:this.cid,
            //     index: 1,
            //     count: 10
            //   };
            //   }, 500);
            // },
            onLoad() {
                setTimeout(() => {
                    // for (let i = 0; i < 10; i++) {
                    //   this.list.push(this.list.length + 1);
                    // }
                    // 加载状态结束
                    // this.loading = false;

                    // // 数据全部加载完成
                    // // if (this.list.length >= 40) {
                    // this.finished = true;
                    let data = {
                        matchTypeId: this.cid || this.$store.state.match.MatchType[0].MatchTypeId,
                        index: this.IndexNum,
                        count: 10
                    };
                    // }
                    this.$store.dispatch("asyncgetMatchList", data);
                    // this.loading = false;
                    setTimeout(() => {
                        if (this.$store.state.match.Matchs.length == 0) {
                            this.msgList = this.$store.state.match.Matchs;
                            this.finished = true;
                            this.loading = false;
                            // this.finished = true;
                            return;
                        } else if (this.$store.state.match.Matchs.length == 10) {
                            for (let i = 0; i < this.$store.state.match.Matchs.length; i++) {
                                this.msgList.push(this.$store.state.match.Matchs[i]);
                            }
                            this.loading = false;
                            this.IndexNum++;
                            return;
                        } else if (
                            this.$store.state.match.Matchs.length < 10 &&
                            this.$store.state.match.Matchs.length > 0
                        ) {
                            for (let i = 0; i < this.$store.state.match.Matchs.length; i++) {
                                this.msgList.push(this.$store.state.match.Matchs[i]);
                            }
                            this.loading = false;
                            this.finished = true;
                            return;
                        }
                        if (this.$store.state.match.TotalPages + 1 == this.IndexNum) {

                            this.finished = true;
                            return;
                        }
                    }, 500);
                }, 500);
            },

            //赛事种类
            getMatchType() {
                let data = {
                    index: 1,
                    count: 10
                };
                this.$store.dispatch("asyncgetMatchType", data);
            },
            goBack() {
                this.$router.go(-1);
            },
            //篮球
            getNumL(id, index) {
                this.IndexNum = 1;
                this.cid = id;
                this.Pindex = index;
                this.num = index;
                // let data = {
                //   matchTypeId: id,
                //   index: 1,
                //   count: 10
                // };
                // this.$store.dispatch("asyncgetMatchList", data);
                this.finished = false;
                setTimeout(() => {
                    // this.msgList = this.$store.state.match.Matchs;
                    this.onLoad();
                }, 0);
                this.items = false;
                this.matchs = true;
                this.MatchItems = [1];
            },

            pickTime() {

            },
            //赛事结果
            showitems(id, name) {
                this.$store.commit("upMatchid", {
                    MatchName: name,
                    MatchId: id
                });
                // this.$router.push({
                //   name: "game",
                //   params: {
                //     id,
                //     name
                //   }
                // });
                this.$router.push("/match");
                this.matchs = false;
                this.MatchName = name;
                let data = {
                    matchId: id,
                    sDate: this.startTime,
                    eDate: this.endTime,
                    // matchId: 7218,
                    // sDate: "2019-10-11",
                    // eDate: "2019-10-14",
                    index: 1,
                    count: 10
                };
                this.MatchItems = [1];
                apiGetMatchResultByMatchId(data).then(res => {
                    if (res.Data.length > 0) {
                        this.items = true;
                    }
                    this.MatchItems = res.Data;
                });
            }
        },
        watch: {
            endTime: (newVal, oldVal) => {
                
            }
        }
    };
</script>
<style>
    .el-date-editor.el-input,
    .el-date-editor.el-input__inner {
        width: 10rem;
    }
    
    .left .el-input__inner {
        width: 3.15rem;
        height: 0.56rem;
        margin-top: 0.12rem;
        margin-left: 0.2rem;
        float: left;
        background: #f3f3f3;
        text-align: center;
        color: #676767;
    }
    
    .left .el-input__prefix {
        display: none;
    }
    
    .right .el-input__prefix {
        display: none;
    }
    
    .right .el-input__inner {
        width: 3.15rem;
        height: 0.56rem;
        margin-top: 0.12rem;
        float: right;
        margin-right: 0.2rem;
        background: #f3f3f3;
        text-align: center;
        color: #676767;
    }
</style>
<style scoped>
    .contentUl {
        display: flex;
        /* justify-content: space-around; */
        width: 100%;
        height: 1.06rem;
        /* line-height: 1.06rem; */
        list-style: none;
        margin: 0 auto;
        text-align: center;
        position: relative;
    }
    
    .contentUl li {
        line-height: 1.06rem;
        width: 1.07rem;
        position: relative;
    }
    
    .contentUl .te {
        line-height: 1.06rem;
        width: 1.65rem;
    }
    
    .active {
        color: #c12e3e;
        /* border-bottom: .07rem solid #c12e3e; */
    }
    
    .heng {
        float: right;
        width: 1px;
        height: 0.36rem;
        background: #d1d1d1;
        margin-top: 0.33rem;
    }
    
    .henLine {
        float: left;
        /* margin-left: 316rem; */
        margin-top: 0.38rem;
        width: 0.27rem;
        height: 0.03rem;
        background: #9f9f9f;
    }
    
    .lineH {
        position: absolute;
        display: inline-block;
        width: calc(100% - 0.05rem);
        border-radius: 0.2rem;
        height: 0.07rem;
        background: #c12e3e;
        left: 0;
        bottom: 0;
    }
</style>
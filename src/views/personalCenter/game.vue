<template>
  <main class="gameRes" v-cloak>
    <div class="gameRes-header">
      <back class="back-icon grs"></back>
      <h3>{{ $store.state.match.MatchName }}</h3>
    </div>
    <div class="gameRes-content">
      <div class="gameRes-content-time">
        <el-date-picker
          class="left"
          :placeholder="$t('StartTime')"
          v-model="startTime"
          @change="pickTime"
          format="yyyy-MM-dd"
          value-format="yyyy-MM-dd"
        >
        </el-date-picker>
        <span class="henLine"></span>
        <el-date-picker
          class="right"
          :placeholder="$t('EndTime')"
          v-model="endTime"
          @change="pickTime"
          format="yyyy-MM-dd"
          value-format="yyyy-MM-dd"
        >
        </el-date-picker>
      </div>
    </div>
    <div class="soprtList" v-cloak>
      <ul>
        <li
          class="soprtList-ul-item"
          v-for="(item, index) in MatchItems"
          :key="index"
          v-cloak
        >
          <div class="soprtList-ul-item-div">
            <p class="soprtList-ul-item-p">
              <img
                class="soprtList-ul-item-p-img"
                src="@/assets/timer_03.png"
                alt=""
              />
              <span class="soprtList-ul-item-p-span">
                {{ item.DateTime.slice(0, item.DateTime.indexOf("T")) }}
                {{ item.DateTime.slice(item.DateTime.indexOf("T") + 1) }}
              </span>
            </p>
            <div class="sContent">
              <p class="hong">
                <span class="hong-span">{{ item.HomeTeamName }}</span>
              </p>
              <img class="imgVs" src="@/assets/myself/vsgame_03.png" alt="" />
              <p class="lan">
                <span class="lan-span">{{ item.AwayTeamName }}</span>
              </p>
            </div>
            <div class="gameFoot">
              <div class="gameFoot-left">
                <p>
                  {{ $t("FirstHalf") }}
                  <!-- <span class="gameRight">比数</span> -->
                </p>
                <p>
                  <span class="gameRightA" v-if="item.HHomeScore !== -1"> {{ item.HHomeScore }} -</span>

                  <span class="gameRightB" v-if="item.HomeScore == -1"
                    ><span class="gameH">{{ $t("Cancellation") }}</span></span
                  >
                  <span class="gameRightB" v-else-if="item.HomeScore == -2"
                    ><span class="gameH">{{ $t("NoResults") }}</span></span
                  >
                  <span class="gameRightB" v-if="item.HAwayScore !== -1"> {{ item.HAwayScore }}</span>
                </p>
              </div>
              <div class="gameFoot-right">
                <p>
                  <span>{{ $t("WholeAudience") }}</span>
                  <!-- <span class="gameRight">比数</span> -->
                </p>
                <p>
                  <span class="gameRightA" v-if="item.HHomeScore !== -1">{{ item.HomeScore }} -</span>

                  <span class="gameRightB" v-if="item.AwayScore == -1"
                    ><span class="gameH">{{ $t("Cancellation") }}</span></span
                  >
                  <span class="gameRightB" v-else-if="item.AwayScore == -2"
                    ><span class="gameH">{{ $t("NoResults") }}</span></span
                  >
                  <span class="gameRightB" v-if="item.HAwayScore !== -1"> {{ item.AwayScore }}</span>
                </p>
              </div>
            </div>
          </div>
        </li>
        <div class="nomatchs" v-if="MatchItems.length === 0">
          <p>{{ $t("NoMatch") }}</p>
        </div>
      </ul>
    </div>
  </main>
</template>

<script>
import { apiGetMatchResultByMatchId } from "@/api/match.js";
import back from "../../components/Botton/back.vue";
export default {
  components: {
    back
  },
  name: "gameRes",
  created() {
    this.getMatch();
  },
  data() {
    return {
      Pindex: 0,
      num: 0,
      HalfNumLeft: 0,
      AllNumLeft: 0,
      HalfNumRight: 0,
      AllNumRight: 0,
      startTime: this.yesterdayDate(),
      endTime: this.todayDate(),
      items: false,
      matchs: true,
      MatchItems: "",
      MatchName: "",
      match: ""
    };
  },
  methods: {
    todayDate() {
      //今天的时间
      var day = new Date();
      var s1 = day.getFullYear() + "-" + (day.getMonth() + 1) + "-" + day.getDate();
      return s1;
    },
    yesterdayDate() {
      //昨天的时间
      var day = new Date();
      var s1 = day.getFullYear() + "-" + (day.getMonth() + 1) + "-" + (day.getDate() -7);
      return s1;
    },
    getMatch() {
      this.match = this.$route.params.name;

      let data = {
        matchId: this.$route.params.id,
        sDate: this.startTime,
        eDate: this.endTime,
        // matchId: 7218,
        // sDate: "2019-10-11",
        // eDate: "2019-10-14",
        index: 1,
        count: 10
      };

      apiGetMatchResultByMatchId(data).then(res => {
        this.MatchItems = res.Data;
      });
    },
    //赛事种类

    goBack() {
      this.$router.go(-1);
    },
    //篮球

    pickTime() {
      let data = {
        matchId: this.$route.params.id,
        sDate: this.startTime,
        eDate: this.endTime,
        // matchId: 7218,
        // sDate: "2019-10-11",
        // eDate: "2019-10-14",
        index: 1,
        count: 20
      };

      apiGetMatchResultByMatchId(data).then(res => {
        this.MatchItems = res.Data;
      });
    },
    //赛事结果
    showitems(id, name) {
      this.$router.push("/game");
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
.grs {
  margin-top: 0.4rem !important;
}
.contentUl {
  display: flex;
  /* justify-content: space-around; */
  width: 100%;
  height: 1.06rem;
  /* line-height: 1.06rem; */
  background: #fff;
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

<template>
  <div class="club-Activity-match">
    <div class="club-Activity-match-header">
      <div class="club-Activity-match-header-wrap">
        <back class="back-icon img-he"></back>
        <h3>{{$t('ClubActivities')}}</h3>
        <!--俱樂部活動-->
      </div>
    </div>

    <div class="club-Activity-match-content">
      <div class="match-box" v-for="(item, index) in matchObj">
        <p class="match-box-title">{{ $t('SportGame') }}{{ index + 1 }}</p><!--賽事-->
        <div class="match-box-team">
          <div class="match-box-team-wrap">
            <div class="team-name">
              <p>{{ item.HomeTeam}}</p>
              <div class="team-img" :style="{backgroundImage: 'url(' + item.HomeTeamImg + ')'}"></div>
            </div>
            <p class="vs">VS</p>
            <div class="team-name">
              <div class="team-img" :style="{backgroundImage: 'url(' + item.AwayTeamImg + ')'}"></div>
              <p>{{ item.AwayTeam}}</p>
            </div>
          </div>
          <div class="gametip">{{ $t('Select') }}{{ item.SelectPosition }}</div>
        </div>
        <div class="bet-btn-wrap">
          <div class="bet-btn" v-model="active" :class="{'bet-btn-active': play.isClick == 1}" v-for="(play, btnIndexs) in item.Plays" @click="choosePlay(play,index, btnIndexs)">{{ play.Position}}</div>
        </div>
      </div>
    </div>
    <div class="confirm-btn-wrap">
      <div class="confirm-btn" @click="send()">
        {{ this.$t('Confirm') }}
      </div>
    </div>
  </div>
</template>
<script>
import back from "@/components/Botton/back.vue";
import { apiGetClubActivityMatchAndPlay, apiActivityBets } from "@/api/ClubActivitys.js";
export default {
  name: "myClub",
  components: {
    back,
  },
  data() {
    return {
      matchObj: [],
      matchObjIndex: undefined,
      btnIndex: undefined,
      active: undefined,
      newPlayAry: [],
      clubActivityId: "",
    }
  },
  created() {
    localStorage.setItem("categoryIndex", 1);
    this.getMatch();
  },
  methods: {
    getMatch() {
      this.clubActivityId = localStorage.getItem("AcvtiveId");
      let data = {
        ClubActivityId: this.clubActivityId,
      }
      apiGetClubActivityMatchAndPlay(data, true).then((res) => {
        this.matchObj = res.Data;

        // 替Plays的每個按鈕添加一個isClick，供點選使用 + 塞一包空陣列進去給副標題使用
        this.matchObj.forEach(el => {
          el.PlayText = "";
          el.Plays.forEach(play => {
            play.isClick = 0;
          })
        });

        // 副標題
        for (let i = 0 ; i < this.matchObj.length; i ++) {
          for (let j = 0 ; j < this.matchObj[i].Plays.length; j++) {
            this.matchObj[i].PlayText += this.matchObj[i].Plays[j].Position;
          }
        }
      });
    },

    // 點選玩法
    choosePlay(play, index, btnIndexs) {
      this.matchObj[index].Plays.forEach(el => {
        if (el.isClick == 1) {
          el.isClick = 0;
          this.active = 0;
        }
      })
      this.active = 0;
      this.matchObjIndex = index;
      this.matchObj[this.matchObjIndex].Plays[btnIndexs].isClick = 1;
      this.active = this.matchObj[this.matchObjIndex].Plays[btnIndexs].isClick;

      // 把全部按鈕都放進同一個陣列
      let playArray = [];
      this.matchObj.forEach(el => {
        el.Plays.forEach(play => {
          playArray.push(play);
        });
      });
      // 過濾按鈕陣列，isClick == 1 的才留下
      let filterPlayAry = playArray.filter(el => {
        return el.isClick > 0;
      });
      // 取過濾出來的PlayId
      this.newPlayAry = filterPlayAry.map(el => {
        return el.PlayId;
      })
    },

    //送出
    send() {
      let data = {
        ClubActivityId: this.clubActivityId,
        PlayIds: this.newPlayAry
      }
      apiActivityBets(data, true).then((res) => {
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
        } else {
          let vm = this;
          const m = vm.$message({
            message: this.$t('BettingSuccess'),
            duration: 3000,
            type: "success",
            center: true
          });
          setTimeout(() => m.close(), 2000);
          setTimeout(() => {
            localStorage.setItem("categoryIndex", 1);
            this.$router.push("/ClubActivities");
          }, 3000);
        }
      });
    }
  },
  beforeDestroy() {
    localStorage.setItem("categoryIndex", 1);
  }
}
</script>

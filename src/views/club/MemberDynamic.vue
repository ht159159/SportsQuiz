<template>
  <div class="member-dynamic">
    <div class="member-dynamic-header">
      <div class="member-dynamic-header-wrap">
        <back class="back-icon img-he"></back>
        <h3>{{ $t("MemberDynamics") }}</h3>
        <!--成员动态-->
      </div>
    </div>

    <!-- TOP5動態 -->
    <div class="member-dynamic-content-wrap">
      <div class="member-dynamic-title-wrap">
        <div :class="[categoryIndex == 0 ? 'member-dynamic-title-focus' : 'member-dynamic-title']" @click="categoryIndex = 0; getlist()">{{ $t("MemberDynamics") }}</div>
        <div class="divider"></div>
        <div :class="[categoryIndex == 1 ? 'member-dynamic-title-focus' : 'member-dynamic-title']" @click="categoryIndex = 1; getlist()">{{ $t("AllMembers") }}</div>
      </div>

      <div class="member-dynamic-content" v-infinite-scroll="load"  infinite-scroll-disabled="busy" infinite-scroll-immediate="immediate">
      <!--成员动态-->
        <div class="members" v-for="item in top10List" v-if="categoryIndex == 0">
          <img class="members-head-shot" :src="item.UImg" alt="" />
          <div class="members-data">
            <div class="members-name-wrap">
              <div class="members-name">{{ item.NickName }}</div>
              <!-- 會長 -->
              <div class="present" v-if="item.Name == '会长'">{{ item.Name }}</div>
              <!-- 副會長 -->
              <div class="vice-present" v-if="item.Name == '副会长'">{{ item.Name }}</div>
            </div>
            <div class="members-bet">
              <div class="bet-times">
                <span>{{ $t("NumberOfBets") }}:  </span
                ><!--投注次數-->
                <span class="blue-text">{{ item.BetSumNum }}</span>
              </div>
              <div class="contribution">
                <span>{{ $t("Contribution") }}: </span
                ><!--贡献值-->
                <span class="green-text">+{{ item.Contribution }}</span>
              </div>
            </div>
            <div class="last-bet-time">
              <!-- 最后投注时间 -->
              <p>{{ $t('LastBetTime') }} : {{ item.LastBetTime}}</p>
            </div>
          </div>
        </div>

        <!-- 所有成員動態 -->
        <div class="members" v-for="item in allList" v-if="categoryIndex == 1">
          <img class="members-head-shot" :src="item.UImg" alt="" />
          <div class="members-data">
           <div class="members-name-wrap">
              <div class="members-name">{{ item.NickName }}</div>
              <!-- 會長 -->
              <div class="present" v-if="item.Name == '会长'">{{ item.Name }}</div>
              <!-- 副會長 -->
              <div class="vice-present" v-if="item.Name == '副会长'">{{ item.Name }}</div>
            </div>
            <div class="members-bet">
              <div class="bet-times">
                <span>{{ $t("NumberOfBets") }}: </span
                ><!--投注次數-->
                <span class="blue-text">{{ item.BetSumNum }}</span>
              </div>
              <div class="contribution">
                <span>{{ $t("Contribution") }}: </span
                ><!--贡献值-->
                <span class="green-text">+{{ item.Contribution }}</span>
              </div>
            </div>
            <div class="last-bet-time">
              <!-- 最后投注时间 -->
              <p>{{ $t('LastBetTime') }} : {{ item.LastBetTime}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import back from "@/components/Botton/back.vue";
import { apiGetClubMemLog } from "@/api/Club.js";
export default {
  components: {
    back,
  },
  data() {
    return {
      categoryIndex: 0,
      top10List: [
        {
          UImg: "",
          UName: "",
          BetSumNum: 0,
          Contribution: 0
        }
      ],

      allList: [
        {
          UImg: "",
          UName: "",
          BetSumNum: 0,
          Contribution: 0
        }
      ],

      // v-infinite-scroll 套件
      busy: false,
      immediate: false,
      indexNum: 1,
      totalPages: 0,
    };
  },
  created() {
    this.getlist();
  },
  methods: {
    // 獲取會員俱樂部資訊
    getlist() {
      let data = {
        index: this.indexNum,
        count : 10
      }
      apiGetClubMemLog(data, true).then(res => {
        this.top10List = res.Top5Data;
        this.allList = res.Data.Data;
        this.totalPages = res.Data.TotalPages;
      });
    },

    // 所有成員無限加載
    load() {
      console.log('dasd')
      if (this.indexNum >= this.totalPages) {
        this.busy = true;
        return;
      }
      this.indexNum++;
      let data = {
        index: this.indexNum,
        count : 10
      }
      apiGetClubMemLog(data, true).then(res => {
        res.Data.Data.forEach(el => {
          this.allList.push(el);
        });
      });
    }
  }
};
</script>

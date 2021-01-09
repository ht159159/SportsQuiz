<template>
  <div class="club-match-result">
    <div class="club-match-result-header">
      <div class="club-match-result-header-wrap">
        <back class="back-icon img-he"></back>
        <h3>{{ $t('Results') }}</h3>
        <!--赛果-->
      </div>
    </div>


    <div class="match-content" v-infinite-scroll="load"  infinite-scroll-disabled="busy" infinite-scroll-immediate="immediate">
      <div
        class="block"
        v-for="(item, index) in matchResultObj"
        @click="goResultDetail(item)"
        v-if="noData == false"
      >
        <img :src="item.ActivityImg" alt="" />
        <p class="date">{{ item.CreateTime }}</p>
        <div class="abridge-content">
          {{ item.ActivityContent }}
        </div>
        <div class="match-btn-wrap">
          <div class="have-result" v-if="item.IsFinished">{{ $t('Closed') }}</div><!-- 【 已結算 】 -->
          <div class="no-result" v-else>{{ $t('Unsettlement') }}</div><!-- 【 未結算 】 -->
        </div>
      </div>
      <div style="font-size: .24rem;text-align:center;line-height: .48rem" v-if="isLoading">
        {{ $t('WipeLoading') }}...  <!-- 【 加载中… 】 -->
      </div>
    <div class="no-data" v-if="noData">
      <p>{{ $t("NoData") }}</p>
      <!-- 【 暂无数据 】 -->
    </div>
    </div>

  </div>
</template>
<script>
import back from "@/components/Botton/back.vue";
import { apiGetClubActivityMatchResult } from "@/api/ClubActivitys.js";
export default {
  components: {
    back
  },
  data() {
    return {
      clubId: "",
      matchResultObj: [],
      noData: false,
      isLoading: false,

      // v-infinite-scroll 套件
      busy: false,
      immediate: false,
      indexNum: 1,
      totalPages: undefined,
    };
  },
  created() {
    localStorage.setItem("categoryIndex", 1);
    this.clubId = localStorage.getItem("ClubId");
    this.getMatchResult();
  },
  methods: {
    getMatchResult() {
      let data = {
        index: this.indexNum,
        count: 10,
      };
      this.isLoading = true;
      this.noData = false;
      apiGetClubActivityMatchResult(data, true).then(res => {
        if(Math.abs(res.Code) >= 600) {
          this.noData = true;
          this.isLoading = false;
        } else {
          this.matchResultObj = res.Data.Data;
          this.totalPages = res.Data.TotalPages;
          this.isLoading = false;
          this.noData = false;
        } 
      });
    },
    goResultDetail(item) {
      localStorage.setItem("AcvtiveId", item.Id);
      this.$router.push("/ActivityMatchResultDetail");
    },

    // 無限加載
    load() {
      if (this.indexNum >= this.totalPages) {

        this.busy = true;
        return;
      }
      this.indexNum++;
      let data = {
        index: this.indexNum,
        count: 10,
      }
      apiGetClubActivityMatchResult(data, true).then(res => {
        res.Data.Data.forEach(el => {
          this.matchResultObj.push(el);
        });
      });
    }
  },
  beforeDestroy() {
    localStorage.setItem("categoryIndex", 1);
  }
};
</script>

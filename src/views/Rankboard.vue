<template>
  <main class="rank-board">
    <div class="rank-board-header">
      <back class="back-icon img-he"></back>
      <h3>{{ $t('Leaderboard') }}</h3>  <!-- 【 排行榜 】 -->
    </div>
    <div class="rank-board-banner"></div>

    <div class="main-content-wrap">
      <template v-for="(node, index) in rankName">
        <div class="rank-board-list" @click="gojump(index+1)">
          <div class="rank-img" :style="{ backgroundImage: 'url(' + node.url + ')' }"></div>
          <p>{{ node.title }}</p>
          <div class="arrow"></div>
        </div>
      </template>
    </div>
  </main>
</template>

<script>
import back from "@/components/Botton/back.vue";
export default {
  components: {
    back
  },
  data() {
    return {
      rankType: 0,
      rankTypeName: '',
      rankName: [
          { title: this.$t("TotalBetLeaderboard"), url: require(('@/assets/rankboard/rankboard_1.png'))}, //投注总额排行榜
          { title: this.$t("WinLeaderboard"), url: require('@/assets/rankboard/rankboard_2.png')},  // 胜次排行榜
          { title: this.$t("WinCoinLeaderboard"),  url: require('@/assets/rankboard/rankboard_3.png')} // 赢币排行榜
    ],
    };
  },
  methods: {
    gojump(type) {
        this.rankType = type
        localStorage.setItem('rankType', this.rankType)
        this.$router.push("/rankboardlist");
    }
  }
};
</script>

<template>
  <div class="main-nav-top" style='z-index: 999'>
    <div class="nav-top-item" @click="gopath('/rank')">
      <div class="nav-top-item-icon-pw"></div>
      <div class="nav-top-item-text" style="line-height:.44rem">{{ $t('RankGame') }}</div><!-- 排位赛 -->
    </div>
    <div class="nav-top-item" @click="noChange">
      <div class="nav-top-item-icon-tz"></div>
      <div class="nav-top-item-text" style="line-height:.44rem">{{ $t('ChallengeGame') }}</div><!-- 挑战赛 -->
    </div>
    <div class="nav-top-item" @click="goLottery">
      <div class="nav-top-item-icon-cj"></div>
      <div class="nav-top-item-text" style="line-height:.44rem">{{ $t('Loterie') }}</div><!-- 抽奖 -->
    </div>
    <div class="nav-top-item" @click="noChou">
      <div class="nav-top-item-icon-zx"></div>
      <div class="nav-top-item-text" style="line-height:.44rem">{{ $t('Information') }}</div><!-- 资讯 -->
    </div>
  </div>
</template>

<script>
export default {
  name: "MainNavTop",
  methods: {
    gopath(id) {
      this.$router.push(id);
    },
    noGo() {
      this.$message({
            message: this.$t('NotYetOpen'),
            type: 'warning',
            center: true,
            duration: 1200
        });
    },
    noChou() {
      this.$router.push('/information')
    },
    noChange() {
      this.$router.push('/challengehome')
    },
    goLottery() {
      this.$router.push('/lottery')
    }
  }
};
</script>

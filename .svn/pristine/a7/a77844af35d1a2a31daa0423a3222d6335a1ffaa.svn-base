<template>
  <i class="back-icon" @click="gojump"> </i>
</template>

<script>
export default {
  methods: {
    gojump() {
      // 如果再俱樂部首頁，則跳轉回個人頁面
      // if (this.$route.path == "/CreateClub") {
      //   this.$router.push("/myself");
      //   return;
      // }

      // 如果在俱樂部投注的發起人賽果或其他人賽果頁面
      // if(this.$route.path == "/InitiatorBetResult" || this.$route.path == "/BetResult" || this.$route.path == "/clubActiveBet") {
      //   localStorage.setItem("categoryIndex", 1);
      //   localStorage.setItem("isFromBetResultPage", true)
      //   setTimeout(() => {
      //     this.$router.push("/myClub");
      //   }, 1000)
      // }

      // 在俱樂部首頁返回我的頁面
      if (this.$route.path == "/myClub") {
        this.$router.push("/myself");
        return;
      }

      // 在我的頁面直接返回競猜首頁
      if (this.$route.path == "/myself") {
        this.$router.push("/");
        return;
      }

      // 在俱樂部活動返回我的俱樂部
      if (this.$route.path == "/ClubActivities") {
        this.$router.push("/myClub");
        return;
      }

      this.$router.goBack();
      // this.$router.go(-1);
      this.$store.commit("upBack");
    }
  }
};
</script>

<style></style>

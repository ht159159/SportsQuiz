<template>
  <div class="rank-choose">
    <div class="rank-choose-head">
      <back class="back-icon"></back>
      <div>{{ $t("RankGame") }}</div>
    </div>
    <div class="rank-choose-main">
      <div
        class="rank-match-list"
        v-for="item in $store.state.match.rankmatchlist"
        :key="item.MatchId"
        @click="getIsMatchticket(item.MatchId, item.MatchName)"
      >
        <div class="match-list-football">
		  <img v-if="item.Img" :src="item.Img" alt="" class="match-list-football-img">
          <img v-else src="@/assets/instead_logo2.png" class="match-list-football-img">
          <span class="text">{{ item.MatchName }}</span>
          <i class="rank-arrow"></i>
        </div>
      </div>
    </div>
    <div
      class="nomatchs"
      v-if="this.$store.state.match.rankmatchlist.length === 0"
    >
        <p>{{ $t("NoRecord") }}</p>
    </div>
  </div>
</template>

<script>
    import {
        apiIsBoughtMatchTicket,
        apiIsCanBuyMatchTicket
    } from "../api/match.js";
    import back from "../components/Botton/back.vue";
    export default {
        components: {
            back
        },
        created() {
            this.getrender();
        },
        methods: {
            // 是否买过票
            getIsMatchticket(id, name) {
                let data = {
                    matchId: id
                };
                this.$store.commit("upMatchid", {
                    MatchId: id,
                    MatchName: name
                });
                apiIsCanBuyMatchTicket(data, true).then(res => {
                    if (Math.abs(res.Code) >= 600 || res.IsCanBuyMatchTicket == false) {
                        // this.$router.push(`/rankticket/${id}`);
                        const m = this.$message({
                            type: "error",
                            duration: 3000,
                            message: res.Message,
                            center: true
                        });
                        setTimeout(() => m.close(), 1200)
                    } else {
                        // this.gojump(id, name);
                        this.$router.push(`/rankticket/${id}`);
                    }
                });
            },

            gojump(id, name) {
                this.$store.commit("upMatchid", {
                    MatchId: id,
                    MatchName: name
                });
                this.$router.push("/rankmatch");
            },
            getrender() {
                this.$store.dispatch("asyncGetHistoryMatchList");
            }
        }
    };
</script>

<style></style>
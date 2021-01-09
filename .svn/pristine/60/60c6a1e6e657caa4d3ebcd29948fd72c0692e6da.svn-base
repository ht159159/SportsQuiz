<template>
  <div class="rank-ticket">
    <div class="rank-ticket-head">
      <back class="back-icon"></back>
      <div>{{ $t("RankGame") }}</div>
    </div>
    <!-- <div class="rank-ticket-main">
      购买门票
    </div>
    <div class="rank-ticket-button btn" @click="buy">确认</div> -->
    <div class="rank-ticket-top">
      <div class="rank-ticket-top-one"></div>
      <div class="rank-ticket-top-two"></div>
      <div class="rank-ticket-top-three"></div>
    </div>
    <div class="rank-ticket-rule">
      <div class="rank-ticket-rule-title">{{ $t("Guide") }}</div>
      <div class="rank-ticket-rule-content">
        {{ $t("TicketGuide1") }} <br/>
        {{ $t("TicketGuide2") }}
      </div>
    </div>
    <div class="rank-ticket-button btn" @click="buy">
      <p class="rank-ticket-button-text1">{{ $t("SignUp") }}</p>
      <p class="rank-ticket-button-text2">100</p>
    </div>
  </div>
</template>

<script>
    import {
        apiBuyTicket
    } from "../api/match.js";
    import back from "../components/Botton/back.vue";

    export default {
        components: {
            back
        },
        methods: {
            buy() {
                let data = {
                    matchId: this.$route.params.id
                };

                // this.$store.commit("upMatchId", {
                //   MatchId: this.$route.params.id
                //   // MatchName: this.$store.state.match.MatchName
                // });
                apiBuyTicket(data, true).then(res => {
                    if (res.availableIntegral) {
                        const m = this.$message({
                            message: this.$t("SuccessfulPurchase"),
                            duration: 3000,
                            type: "success",
                            center: true
                        });
                        setTimeout(() => m.close(), 1200)
                        setTimeout(() => {
                            this.$router.push("/rankmatch");
                        }, 2000);
                    } else if (res.Code == 600) {
                        const m = this.$message({
                            message: res.Message,
                            duration: 3000,
                            type: "error",
                            center: "error"
                        });
                        setTimeout(() => m.close(), 1200)
                    }
                });
            }
        }
    };
</script>

<style></style>
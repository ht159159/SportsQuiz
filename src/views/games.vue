<template>
  <div class="games">
    <div class="sport-header">
      <h3>赛事</h3>
    </div>

    <nav class="games-match-tabs">
      <div class="games-match-tabs-tab">
        <div
          class="games-match-tabs-tab-title"
          v-for="item in $store.state.match.MatchType"
          :key="item.MatchTypeId"
        >
          <span class="span-acitve">{{ item.MatchTypeName }}</span>
        </div>
      </div>
    </nav>
    <nav-bottom></nav-bottom>
  </div>
</template>

<script>
import NavBottom from "@/components/Main/NavBottom.vue";

export default {
  created () {
    this.getMatchType();
    this.showtabs2(this.football.matchTypeId);
  },
  name: "gameSport",
  components: {
    NavBottom
  },
  data () {
    return {
      active: 0,
      tab1: false,
      tab2: true,
      tab3: false,
      tab4: false,
      tab5: false,
      tab6: false,
      football: {
        matchTypeId: this.$store.state.match.MatchType[0].MatchTypeId
      },
      date: "",
      count: "",
      mid: "",
      mlist: "",
      msgList: [],
      IndexNum: 1,
      busy: false,
      loading: false,
      finished: false,
      cid: ""
    };
  },
  methods: {
    onLoad () {
      setTimeout(() => {

        let data = {
          matchTypeId:
            this.cid || this.$store.state.match.MatchType[0].MatchTypeId,
          index: this.IndexNum,
          count: 10
        };

        this.$store.dispatch("asyncgetMatchList", data);

        if (this.$store.state.match.Matchs.length == 10) {
          for (let i = 0; i < this.$store.state.match.Matchs.length; i++) {
            this.msgList.push(this.$store.state.match.Matchs[i]);
          }
          this.loading = false;
          this.IndexNum++;
        } else if (
          this.$store.state.match.Matchs.length < 10 &&
          this.$store.state.match.Matchs.length > 0
        ) {
          for (let i = 0; i < this.$store.state.match.Matchs.length; i++) {
            this.msgList.push(this.$store.state.match.Matchs[i]);
          }
          this.loading = false;
          this.finished = true;
        }
      }, 500);
    },

    // load() {
    //   this.busy = true;
    //   let data = {
    //     matchTypeId: this.$store.state.match.MatchType[0].MatchTypeId,
    //     index: this.IndexNum,
    //     count: 10
    //   };

    //   this.$store.dispatch("asyncgetMatchList", data);
    //   if (this.$store.state.match.Matchs.length == 0) {
    //     this.busy = true;
    //     return;
    //   } else if (this.$store.state.match.Matchs.length > 0) {
    //     for (let i = 0; i < this.$store.state.match.Matchs.length; i++) {
    //       this.msgList.push(this.$store.state.match.Matchs[i]);
    //       this.busy = false;
    //     }
    //     this.IndexNum++;
    //   }
    // },
    gojump (id, name) {
      this.$store.commit("upMatchid", {
        MatchId: id,
        MatchName: name
      });
      this.$router.push("/match");
    },
    showtabs (id) {
      this.cid = id;
      let data = {
        matchTypeId: id,
        index: 1,
        count: 10
      };
      this.$store.dispatch("asyncgetMatchList", data);
    },
    showtabs2 (id) {
      let data = {
        matchTypeId: id,
        index: 1,
        count: 10
      };
      this.$store.dispatch("asyncgetMatchList", data);
    },
    getMatchType () {
      let data = {
        index: 1,
        count: 10
      };
      this.$store.dispatch("asyncgetMatchType", data);
    }
  }
};
</script>

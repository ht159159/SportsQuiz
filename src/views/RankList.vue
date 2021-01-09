<template>
  <div class="ranklist">
    <div class="ranklist-head">
      <back class="back-icon"></back>
      <p>{{ $store.state.match.MatchName }}</p>
    </div>
    <div class="ranklist-main">
      <div
        class="list"
        v-for="(item, index) in $store.state.ListType.RankUserlist"
        @click="gojump(item.ListTypeId, item.Rank, item.Integral)"
        :key="index"
      >
        <div class="list-content">
          <div class="round">{{ index + 1 }}</div>
          <div class="list-date">
            <span>{{ item.ListTypeName }}</span>
            <i class="list-arrow"></i>
          </div>
          <!-- <div class="list-info">
            <span class="date">20191.2</span>
            <span class="left">西班牙</span>
            <span>vs</span>
            <span class="right">中国</span>
          </div> -->

          <img :src="item.Img" alt="" class="start" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import back from "../components/Botton/back.vue";
export default {
  components: {
    back
  },
  created() {
    this.getrankList();
  },
  data() {
    return {};
  },
  methods: {
    gojump(id, rank, int) {
      this.$store.commit("upListTypeId", {
        id,
        rank,
        int
      });
      this.$router.push("/ranklistdetails");
    },
    getrankList() {
      this.$store.dispatch("asyncgetranklist");
    }
  }
};
</script>

<style></style>

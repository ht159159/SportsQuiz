<template>
  <div class="Cmouth">
    <div class="Cmatch-head">
      <back class="back-icon"></back>
      <div class="title">第{{ mouth }}月记录</div>
    </div>
    <div class="Cmouth-main">
      <el-collapse
        v-model="activeNames"
        @change="handleChange(item.ChallengeId)"
        accordion
        v-for="(item, index) in match.Data"
        :key="index"
      >
        <el-collapse-item :name="(index + 1).toString()" v-if="match.Data">
          <template slot="title">
            第{{ index + 1 }}次挑战赛
          </template>
          <div
            class="item-items"
            v-for="(item, index) in matchitem"
            :key="index"
          >
            <div
              class="item-items-content"
              v-for="(item1, i) in item.Matchlist"
              :key="i"
            >
              <div class="item-items-name">
                <span class="item-items-name-home">
                  {{ item1.Team.slice(0, item1.Team.indexOf("V")) }}</span
                >
                <span class="item-items-name-vs">vs</span>
                <span class="item-items-name-away">{{
                  item1.Team.slice(item1.Team.indexOf("S") + 1)
                }}</span>
              </div>
              <div class="item-items-model">类型:{{ item1.Play }}</div>
              <div class="item-items-result">
                结果:<span v-if="item1.BetStatus == 0">未结算</span>
                <span v-if="item1.BetStatus == 1">等待确认</span>
                <span v-if="item1.BetStatus == 2">赢</span>
                <span v-if="item1.BetStatus == 4">输</span>
                <span v-if="item1.BetStatus == 6">竞猜失效</span>
                <span v-if="item1.BetStatus == 8">订单取消</span>
                (您选择为{{ item1.betValue }})
              </div>
            </div>

            <div class="item-items-ceng">
              第{{ item.CurLevel }}关:
              <span v-if="item.Status == 1" class="success">获胜</span
              ><span v-if="item.Status == 2">失败</span
              ><span v-if="item.Status == 3">未结算</span>
            </div>
            <div class="item-items-gold">
              共获得<span>{{ item.Matchlist[0].RewardType }}</span> :
              <span class="success" v-if="item.Status == 1">{{
                item.Matchlist[0].RewardValue
              }}</span>
              <span class="fail" v-if="item.Status == 2">
                item.Matchlist[0].RewardValue</span
              >
              <span v-if="item.Status == 3">0</span>
            </div>
            <!-- 贏 -->
            <div class="bgc1" :class="[lang == 'zh-CN' ? 'bgc1-CN' : lang == 'en-US' ? 'bgc1-US' : 'bgc1-TW']" v-if="item.Status == 1"></div>
            <!-- 輸 -->
            <div class="bgc" :class="[lang == 'zh-CN' ? 'bgc-CN' : lang == 'en-US' ? 'bgc-US' : 'bgc-TW']" v-if="item.Status == 2"></div>
          </div>
        </el-collapse-item>
      </el-collapse>
      <div class="nomatchs" v-if="match.TotalCount === 0">
        <p>{{ $t("NoRecord") }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import back from "../../components/Botton/back.vue";
import {
  apiGetChallengeMatchList,
  apiGetChallengeMatchItemList
} from "@/api/match";
export default {
  components: {
    back
  },
  created() {
    this.getmatch();
  },
  data() {
    return {
      activeNames: ["1"],
      match: "",
      matchitem: "",
      mouth: this.$route.params.id,
      id: "",
      loading: true
    };
  },
  methods: {
    handleChange(val) {
      this.id = val;

      let id1 = {
        challengeId: this.id
      };
      apiGetChallengeMatchItemList(id1, true).then(res => {
        this.matchitem = res;
      });
    },
    getmatch() {
      let data = {
        month: this.$route.params.id
      };
      apiGetChallengeMatchList(data, true).then(res => {
        this.match = res;
        this.id = res.Data[0].ChallengeId;
        let id1 = {
          challengeId: this.id
        };
        apiGetChallengeMatchItemList(id1, true).then(res => {
          this.matchitem = res;
        });
      });
      // let id1 = {
      //   challengeId: this.$store.state.match.ChallengeId
      // };
    }
  }
};
</script>

<style></style>

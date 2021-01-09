<template>
  <div class="medal-wrap">
    <main class="medal">
      <!-- 彈窗 -->
      <div class="explain" v-if="ShowExplain">
        <i class="explain-x" @click="ShowExplain = !ShowExplain"></i>
        <p class="rank-popup-title">{{ $t("MedalDescription") }}</p>  <!-- 【 勋章说明 】 -->
        <div class="rank-popup-content">
          <div class="text-wrap">
            <p>
              <span class="green-title">{{ $t("BetMedal") }}</span>  <!-- 【 投注勋章 】 -->
              ：{{ $t("BetMedalTip") }}
            </p>
            <p>
              <span class="green-title">{{ $t("MedalVictory") }}</span>  <!-- 【 胜次勋章 】 -->
              ：{{ $t("MedalVictoryTip") }}  <!-- 【 根据用户在普通投注内的投注胜利次数，计算排行榜，胜利次数最高的用户获得第一名勋章。以此类推 】 -->
            </p>
            <p>
              <span class="green-title">{{ $t("MedalWinningCoins") }}</span>  <!-- 【 赢币勋章 】 -->
              ：{{ $t("MedalWinningCoinsTip") }}
            </p>
            <span class="blue-text">{{ $t("UpdateCycle") }}：{{ $t("UpdateTime") }}</span>  <!-- 【 更新周期 】 -->
          </div>
        </div>
      </div>
      <!-- 彈窗END -->

      <div class="medal-header">
        <back class="back-icon img-he"></back>
        <h3>{{  $t('MedalDisplay') }}</h3>  <!-- 【 勋章展示 】 -->
      </div>
      <div class="main-content-wrap">
        <div class="banner"></div>
        <div class="category-wrap">
          <div
            class="category"
            v-for="(item, index) in category"
            :key="index"
            @click="
              changeCategory(index);
              getMedalRank(index);
            "
            :class="{ 'category-focus': categoryType === index }"
          >
            <span>{{ item }}</span>
          </div>
          <!-- 彈窗按鈕 -->
          <div class="tip" @click="showPopup"></div>
        </div>
        <div class="content">
          <div class="medal-wrap">
            <div class="medal-category">
              <div
                class="category-block"
                v-for="(item, index) in imgAry"
                :key="index"
              >
                <div
                  class="category-content-wrap "
                  v-for="(pic, i) in item"
                  :key="i"
                >
                  <img
                    :class="[pic.IsShow ? 'iscolorful' : 'isGray']"
                    :src="pic.ImageUrl"
                    alt=""
                  />
                  <!-- 進度條 -->
                  <el-slider
                    v-show="pic.IsBar"
                    v-model="pic.Amount"
                    :show-tooltip="false"
                    :min="pic.MinValue"
                    :max="pic.MaxValue"
                    :class="[pic.IsBar ? 'iscolorful' : 'isGray']"
                    disabled="disabled"
                  ></el-slider>
                  <div
                    v-show="pic.IsBar"
                    class="bar-value"
                    :class="[pic.IsBar ? 'iscolorful' : 'isGray']"
                  >
                    {{ pic.Amount }} / {{ pic.MaxValue }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
<script>
import back from "@/components/Botton/back.vue";
import { apiGetRankingMedal } from "@/api/Rankboard";
export default {
  components: {
    back
  },
  data() {
    return {
      category: [this.$t('BetMedal'), this.$t('MedalVictory'), this.$t('MedalWinningCoins')],  // 【 投注勋章 】【 胜次勋章 】【 赢币勋章 】
      categoryType: 0,
      imgAry: [],
      imgData: [],
      ShowExplain: false
    };
  },

  created() {
    // 類別選擇- 呼叫API
    this.getMedalRank(this.categoryType);

    //類別選擇-切換畫面顯示
    this.changeCategory(this.categoryType);
  },

  methods: {
    //類別選擇-切換畫面顯示
    changeCategory(index) {
      this.categoryType = index;
    },

    // 類別選擇- 呼叫API
    getMedalRank(index) {
      this.imgAry = [];
      let data = {
        type: index
      };
      apiGetRankingMedal(data, true).then(res => {
        this.imgData = res;
        // 把陣列變成兩個一包
        for (let i = 0; i < this.imgData.length; i += 2) {
          this.imgAry.push(this.imgData.slice(i, i + 2));
        }
      });
    },

    // 彈窗
    showPopup() {
      this.ShowExplain = true;
    }
  }
};
</script>

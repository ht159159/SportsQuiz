<template>
  <div class="Cmatch-bottom">
    <div class="Cmatch-bottom-bet">
      <div class="Cmatch-bottom-bet-title"></div>
      <div class="Cmatch-bottom-bet-main">
        <div
          class="Cmatch-bottom-bet-main-win"
          :class="{ active: num == 1 }"
          @click="bet(1)"
        >
          胜
        </div>
        <div
          class="Cmatch-bottom-bet-main-flat"
          :class="{ active: num == 2 }"
          @click="bet(2)"
        >
          平
        </div>
        <div
          class="Cmatch-bottom-bet-main-lose"
          :class="{ active: num == 3 }"
          @click="bet(3)"
        >
          负
        </div>
      </div>
    </div>
    <div class="Cmatch-bottom-button">
      <div class="Cmatch-bottom-button-main">
        <div class="Cmatch-bottom-button-main-button">确认</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 0
    };
  },
  methods: {
    bet(id) {
      this.num = id;
    }
  }
};
</script>

<style></style>

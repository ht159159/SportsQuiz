<template>
  <div>
    <!-- 色系選擇 -->
    <div class="colorful">
      <div class="title">
        <!-- <img src="@/assets/myself/list-13.png" /> -->
        <div class="icon"></div>
        <span>{{ $t('ThemerSelection') }}</span>
      </div>
      <div class="content">
        <!-- 紅色系 -->
        <div :class="[ isRed ? 'switch-red-focus':'switch-red']"  @click="changeColor('red')">
          <div class="switch-red-btn"></div>
        </div>

        <!-- 藍色系 -->
        <div :class="[ isBlue ? 'switch-blue-focus':'switch-blue']" @click="changeColor('blue')">
          <div class="switch-blue-btn"></div>
        </div>

        <!-- 黑色系 -->
        <div :class="[ isBlack ? 'switch-black-focus':'switch-black']" @click="changeColor('black')">
          <div class="switch-black-btn"></div>
        </div>

        <!-- 黃色系 -->
        <div :class="[ isYellow ? 'switch-yellow-focus':'switch-yellow']" @click="changeColor('yellow')">
          <div class="switch-yellow-btn"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isRed: false,
      isBlue: false,
      isBlack: false,
      isYellow: false,

      theme: ""
    };
  },
  created() {
    this.loadColorTheme();
  },
  methods: {
    changeColor(color) {
      const token = localStorage.getItem("token");
      if (!token) {
        const m = this.$message({
          message: this.$t("Please_Login"),  // 【 请登录 】
          duration: 1000,
          type: "error",
          center: true
        });
        setTimeout(() => m.close(), 1200);
        return;
      }else {
        //初始化
        this.isRed = false;
        this.isBlue = false;
        this.isBlack = false;
        this.isYellow = false;
        switch (color) {
          case "red":
            this.isRed = true;
            break;
          case "blue":
            this.isBlue = true;
            break;
          case "black":
            this.isBlack = true;
            break;
          case "yellow":
            this.isYellow = true;
            break;
        }
  
        this.theme = color;
        window.document.documentElement.setAttribute("data-theme", this.theme)
        localStorage.setItem("theme", this.theme);
        this.$parent.$parent.handlePlay()
      }
    },

    // 刷新頁面維持按扭不會重置
    loadColorTheme() {
      //如果一開始theme為空或是theme值不存在，則預設紅色
      if (localStorage.getItem("theme") == "" || localStorage.getItem("theme") == null) {
        this.isRed = true;
      }
      if (localStorage.getItem("theme") == "red") {
        this.isRed = true;
      }
      if (localStorage.getItem("theme") == "blue") {
        this.isBlue = true;
      }
      if (localStorage.getItem("theme") == "black") {
        this.isBlack = true;
      }
      if (localStorage.getItem("theme") == "yellow") {
        this.isYellow = true;
      }
    }
  }
};
</script>
<style scoped lang="scss"></style>

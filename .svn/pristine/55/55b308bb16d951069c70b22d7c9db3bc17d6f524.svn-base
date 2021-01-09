<template>
  <div v-if="isEntery == 2">
    <transition name="fade">
      <model ></model>
    </transition>
    <transition name="fade">
      <div class="fancyBox">
        <span>{{ $t("PleaseJoinTheClubFirst") }}!</span
        ><!--請加入會員-->
        <div class="fancy-box-btn-wrap">
          <div class="commit confirmBtn" @click="AlertMsg()">
            {{ $t("Confirm") }}
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import model from "@/components/model";
export default {
  components: {
    model
  },
  data() {
    return {
      isEntery: 0,
    };
  },
  created() {
    this.isEntery = localStorage.getItem("NoEntry");
  },
  methods: {
    AlertMsg() {
      this.$router.push("/CreateClub");
    }
  }
};
</script>
<style lang="scss" scope>
.fancyBox {
  position: fixed;
  top: calc((100% - 3.44rem) / 2);
  left: calc((100% - 6.44rem) / 2);
  width: 6.44rem;
  height: 3.44rem;
  background: #fff;
  z-index: 1002;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border-radius: 0.2rem;
  span {
    font-size: 0.36rem;
    color: #64656d;
    line-height: 0.48rem;
    text-align: center;
  }
  .fancy-box-btn-wrap {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .commit {
      width: 2.5rem;
      height: 0.8rem;
      border: none;
      font-size: 0.32rem;
      line-height: 0.8rem;
      border-radius: 40px;
      color: #ffffff;
      display: block;
      margin: 0 auto;
      -webkit-transition: 0.3s;
      transition: 0.3s;
      text-align: center;
      box-shadow: 6px 6px 6px #8c7d7f;
    }
    .cancelBtn {
      background: #64656d;
    }
    .confirmBtn {
      // @include myself_btn();
      background-color: #c12f3e;
    }
  }
}
</style>

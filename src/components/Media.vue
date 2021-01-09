<template>
  <div>
    <!-- 全站背景音樂 -->
    <!-- <audio id="bgm" :src="require('../assets/audio/bgm.mp3')" autoplay loop></audio> -->

    <!-- 投注音效 -->
    <audio id="sucess" :src="require('../assets/audio/done.mp3')" preload="auto"></audio>
    <audio id="pass" :src="require('../assets/audio/pass.mp3')" preload="auto"></audio>

    <!-- 轉盤音效 -->
    <audio id="lottery" :src="require('../assets/audio/lottery.mp3')" preload="auto"></audio>
    <audio id="winning" :src="require('../assets/audio/winning.mp3')" preload="auto"></audio>
  </div>
</template>
<script>
export default {
  methods: {
    // 全站背景音樂
    bgm() {
      let bgm = document.querySelector("#bgm");
      // bgm.currentTime = 0; //  讓每次回到音效檔的起始點
      // bgm.play(); //  播放元素的音效
    },
    // 首頁左滑音效
    slidePassSound() {
      let passSound = document.querySelector("#pass");
      passSound.currentTime = 0; //  讓每次回到音效檔的起始點
      passSound.play(); //  播放元素的音效
    },
    // 下注成功音效
    betSucessSound() {
      let sucessSound = document.querySelector("#sucess");
      sucessSound.currentTime = 0; //  讓每次回到音效檔的起始點
      sucessSound.play(); //  播放元素的音效
    },

    // 轉盤音效
    lottery() {

      let lottery = document.querySelector("#lottery");
      lottery.currentTime = 0; //  讓每次回到音效檔的起始點
      lottery.play(); //  播放元素的音效
    },
    lotteryStop() {
      let lottery = document.querySelector("#lottery");
      lottery.pause();
    },

    // 轉盤中獎
    winning() {
      let winning = document.querySelector("#winning");
      winning.currentTime = 0; //  讓每次回到音效檔的起始點
      winning.play(); //  播放元素的音效
    },
  }
};
</script>
<style lang="sass" scoped></style>

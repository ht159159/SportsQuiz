import { Howl, Howler } from "howler";

const bgmPlayer = {
  src: {
    red: require("@/assets/audio/bgm_red.mp3"),
    blue: require("@/assets/theme-blue/audio/bgm_blue.mp3"),
    black: require("@/assets/theme-black/audio/bgm_black.mp3"),
    yellow: require("@/assets/theme-yellow/audio/bgm_yellow.mp3")
  },
  sound: new Howl({
    src: require("@/assets/theme-blue/audio/bgm_blue.mp3"),
    loop: true
  }),
  play: function(theme) {
    this.sound.unload();
    this.sound._src = this.src[theme];
    this.sound.load();
    this.sound.play();
  },
  stop: function() {
    this.sound.stop();
  }
};

const lotteryMusic = new Howl({
  src: require("../assets/audio/lottery.mp3"),
  preload: true
});
const lotteryWining = new Howl({
  src: require("../assets/audio/winning.mp3"),
  preload: true
});

const betSuccess = new Howl({
  src: require("../assets/audio/done.mp3"),
  preload: true
});
const betPass = new Howl({
  src: require("../assets/audio/pass.mp3"),
  preload: true
});

export { bgmPlayer, lotteryMusic, lotteryWining, betSuccess, betPass };

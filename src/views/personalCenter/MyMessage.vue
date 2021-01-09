<template>
  <main class="message">
    <div class="message-header">
      <back class="back-icon img-he"></back>
      <h3>{{ $t("Notification") }}</h3>  <!-- 【 系统消息 】 -->
    </div>
    <ul
      :class="{ activeImg: msgList.length == 0 }"
      class="message-ul"
      v-infinite-scroll="load"
      infinite-scroll-disabled="busy"
    >
    <p v-if="msgList.length == 0 ">{{ $t("NoRecord") }}</p>
      <li
        class="message-ul-item"
        v-for="(item, index) in msgList"
        :key="index"
        @click="getId(item.MessageContent, item.MessageTypeName)"
      >
        <p class="message-ul-item-p">{{ item.MessageContent }}</p>
        <img
          class="message-ul-item-img"
          :src="
            item.MessageTypeName == '签到'
              ? require('@/assets/qiandao.png')
              : require('@/assets/myself/lingdang_03.png')
          "
          alt
        />
        <div class="message-ul-item-div">
          <p class="message-ul-item-div-hei">{{ item.MessageTypeName }}</p>
          <div class="message-ul-item-div-span_box spanBox">
            <p class="message-ul-item-div-span">{{ item.MessageContent }}</p>
          </div>
        </div>
        <span class="message-ul-item-time">{{
          item.CreationTime | fileStr
        }}</span>
        <div class="showMore" @click="showMore(index)">{{ $t("DisplayMore") }}</div>
      </li>
      <li
        v-if="push"
        style="font-size: .24rem;text-align:center;line-height: .48rem"
      >
        {{ $t("WipeLoading") }}...  <!-- 【 加载中… 】 -->
      </li>
      <li
        v-if="noMore"
        style="font-size: .24rem;text-align:center;line-height: .48rem"
      >
        {{ $t("WipeNomore") }}  <!-- 【 沒有更多了 】 -->
      </li>
    </ul>
  </main>
</template>

<script>
import { apiGetUnreadMessageCount, apiGetMessageList } from "@/api/Message.js";
import back from "@/components/Botton/back.vue";
var isbool = true;
export default {
  name: "MyMessage",
  components: {
    back
  },
  data() {
    return {
      msgTime: "2019-09-10",
      msgList: [],
      myCont: "",
      msgCont: "",
      myTitle: "",
      disPlay: "none",
      IndexNum: 1,
      loading: false,
      srcIcon: require("@/assets/myself/lingdang_03.png"),
      imgSrc: false,
      busy: false,
      noMore: false,
      push: false
    };
  },
  filters: {
    fileStr(val) {
      if (val && val.length > 19) {
        val = val.substring(0, 10) + " " + val.substring(11, 16);
      }
      return val;
    }
  },
  computed: {},
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    getId(name, title) {
      this.msgCont = name;
      this.disPlay = "block";
    },
    getMessageList() {
      let data = {
        index: 1,
        count: 10
      };
      apiGetMessageList(data, true).then(res => {
        this.msgList = res.Data;
      });
    },
    load() {
      this.busy = true;
      let data = {
        index: this.IndexNum,
        count: 10
      };
      apiGetMessageList(data, true).then(res => {
        if (res.Data.length == 0) {
          this.busy = true;
          this.push = false;
          // this.noMore = true
        } else if (res.Data.length > 0) {
          for (let i = 0; i < res.Data.length; i++) {
            this.msgList.push(res.Data[i]);
            this.busy = false;
          }
          this.IndexNum++;
        }
      });
    },

    // 顯示更多
    showMore(e) {
      document
        .querySelectorAll(".message-ul-item-div-span")
        [e].classList.remove("hideMore");
      document
        .querySelectorAll(".message-ul-item-div-span_box")
        [e].classList.remove("spanBox");
      document.querySelectorAll(".showMore")[e].style.display = "none";
      document.querySelectorAll(".message-ul-item")[e].classList.add("showAll");
    }
  },
  mounted() {
    // 顯示更多
    setTimeout(() => {
      for (
        let i = 0;
        document.querySelectorAll(".message-ul-item").length > i;
        i++
      ) {
        if (
          document.querySelectorAll(".message-ul-item-div-span")[i]
            .clientHeight > 22
        ) {
          document
            .querySelectorAll(".message-ul-item-div-span")
            [i].classList.add("hideMore");
          document.querySelectorAll(".showMore")[i].style.display = "block";
        }
      }
    }, 600);
  }
};
</script>

<style scoped>
.activeImg {
  background-image: url('~@/assets/noInfo.png');
  background-repeat: no-repeat;
  background-position: center 1rem;
  background-size: 70%;
  margin: 0 auto;
}
.activeImg p {
  position: absolute;
  top: 5.5rem;
  left: 50%;
  transform: translateX(-50%);
  color: #8b8b8b;
}
</style>

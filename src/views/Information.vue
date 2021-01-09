<template>
  <main class="news">
    <div class="news-header" style="position: fixed; top: 0; z-index: 111">
      <back class="back-icon img-he"></back>
      <h3>{{ $t("Information") }}</h3>
      <!-- 【 资讯 】 -->
    </div>

    <!--滑动区域-->
    <ul
      class="news-ul"
      style="margin-top: 1.1rem"
      v-infinite-scroll="load"
      infinite-scroll-disabled="busy"
    >
      <li
        class="news-ul-item"
        @click="goNewsDetail(item.Id)"
        v-for="(item, index) in newsList"
        :key="index"
      >
        <!-- <img style='float: left; width: 2.4rem;height: 1.8rem' :src='item.ImageUrl' /> -->
        <van-image
          style="float: left"
          :width="Wid"
          :height="Hei"
          :src="item.ImageUrl"
        />
        <div style="float: left; width: 4.6rem; margin-left: 0.2rem">
          <p
            style="
              font-size: 0.26rem;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 2;
              line-height: 0.42rem;
              overflow: hidden;
              text-overflow: ellipsis;
              font-weight: bold;
            "
          >
            {{ item.Title }}
          </p>
          <p style="margin-top: 0.7rem; text-align: right">
            {{ item.PublishTime.slice(0, 10) }}
          </p>
        </div>
      </li>
      <li
        v-if="push"
        style="font-size: 0.24rem; text-align: center; line-height: 0.48rem"
      >
        {{ $t("WipeLoading") }}
      </li>
      <li
        v-if="noMore"
        style="font-size: 0.24rem; text-align: center; line-height: 0.48rem"
      >
        没有更多了
      </li>
    </ul>
  </main>
</template>

<script>
import { apiGetNewsList, apiReadNewsRecord } from "@/api/News.js";
import back from "@/components/Botton/back.vue";
import Vue from "vue";

export default {
  name: "News",
  components: {
    back,
  },
  data() {
    return {
      newsList: [],
      Wid: "2.08rem",
      Hei: "1.64rem",

      // v-infinite-scroll 套件
      busy: false,
      push: false,
      IndexNum: 1,
      noMore: false,
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    goNewsDetail(id) {
      let data = {};
      apiReadNewsRecord(data, true).then((res) => {});
      this.$router.push({ path: `./information/${id}` });
    },
    getNewsList() {
      let data = {};
      apiGetNewsList(data, true).then((res) => {
        this.newsList = res;
      });

      //actions的提取方法
      //    this.$store.dispatch('asyncGetNewsList');
    },

    // v-infinite-scroll 套件滑到底加載
    load() {
      this.busy = true;
      let data = {
        index: this.IndexNum,
        count: 10,
      };
      apiGetNewsList(data, true).then((res) => {
        if (res.news.length == 0) {
          this.busy = true;
          this.push = false;
          // this.noMore = true
        } else if (res.news.length > 0) {
          for (let i = 0; i < res.news.length; i++) {
            this.newsList.push(res.news[i]);
            this.busy = false;
          }
          this.IndexNum++;
        }
      });
    },
  },
  computed: {},
  mounted() {
    // const { $route: { params: { id } } } = this;
    // this.getNewsList()
  },
};
</script>

<style scoped>
html,
body {
  position: relative;
  height: 100%;
}
body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}
.swiper-container {
  width: 100%;
  height: 100%;
}
.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}
/*以fixed的方式固定mescroll的高度*/
.mescroll {
  position: fixed;
  top: 0;
  bottom: 0;
  height: auto;
}
</style>
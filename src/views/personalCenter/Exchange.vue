<template>
  <main class="exchange">
    <div class="exchange-header" style='position:fixed;top: 0'>
      <back class='back-icon img-he'></back>
      <h3>兑换记录</h3>
    </div>

    <ul v-if='!noMore' class="exchange-ul" style='margin-top: 1.1rem' :class="{activeImg: listLi.length == 0}" v-infinite-scroll="load" infinite-scroll-disabled="disabled">
      <p>{{ $t("NoRecord") }}</p>
      <li class="exchange-ul-item" v-for="(item, index) in listLi" :key="index">
        <img class="exchange-ul-item-img" src="@/assets/myself/exchange_07.png" alt />
        <div class="exchange-ul-item-div">
          <p class="exchange-ul-item-div-hei">消息通知</p>
          <p class="exchange-ul-item-div-span">{{item.Message}}</p>
        </div>
        <span class="exchange-ul-item-time">{{item.Time}}</span>
      </li>
      <li v-if="noMore" style='font-size: .24rem;text-align:center;line-height: .48rem'>没有更多了</li>
    </ul>
  </main>
</template>

<script>
import { apiGetCashInformation } from "@/api/product.js";
import back from "@/components/Botton/back.vue";
export default {
  name: "exchange",
  components: {
    back
  },
  data() {
    return {
      msgTime: "2019-11-09",
      listLi: [],
      noMore: false,
      tishi: false,
      indexPlus: 1,
      disabled:false
    };
  },
  computed: {},
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    load() {
      this.busy = true;
      let data = {
        index: this.indexPlus,
        count: 10
      };
      apiGetCashInformation(data, true).then(res => {
        if(res.Data.length == 0) {
            // this.noMore = true
            this.disabled = true
        } else if (res.Data.length > 0) {
          for(let i in res.Data) {
            this.listLi.push(res.Data[i])
            this.disabled = false
          }
          this.noMore = false
          this.indexPlus++
        }
      });
    },
    listMsg() {
      let data = {
        index: 1,
        count: 10
      };
      apiGetCashInformation(data, true).then(res => {
        this.listLi = res.Data;
        if(this.listLi.length == 0) {
              
          } else {
              this.nomsg4 = false
              this.listLi = res.Data;
          }
      });
    }
  },
  created() {

  }
};
</script>

<style scoped>
  .activeImg{
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
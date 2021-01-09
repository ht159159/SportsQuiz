<template>
  <div class="layout">
    <main class="shop">
      <div class="shop-header">
        <!-- <img class="img" src="@/assets/top_01.png" alt /> -->
        <div class="shop-header-img" :style="{ backgroundImage: 'url(' + matchUrl + ')' }"></div>
      </div>
      <ul class="shop-ul">
        <li
          class="shop-ul-item"
          v-for="(item, index) in priceList"
          :key="index"
          @click="moneyC(index)"
        >
          <span
            :class="{ span: money == index }"
            @click="changePri(item.CategoryID)"
            >{{ item.Amount }}</span
          >
          <img
            class="imgBg"
            src="@/assets/bgImg_03.png"
            v-show="money == index"
          />
        </li>
      </ul>

      <div class="shop-changeWays">
        <ul class="shop-changeWays-ul">
          <li
            class="shop-changeWays-ul-iteml"
            :class="{ activeTwo: num == 0 }"
            @click="changeM()"
          >
            <!-- <img
              style="display: inline-block;width: .3rem;height: .24rem"
              :src="imgIcon"
            /> -->
            <div
              class="coin-change-icon"
              :class="[isChange == 1 ? 'active-bg-coin' : 'coin-change-icon']"
            ></div>
            <span>{{ $t("CoinsExchange") }}</span>  <!-- 【 金币兑换 】 -->
          </li>
          <li
            class="shop-changeWays-ul-itemr"
            :class="{ activeTwo: num == 1 }"
            @click="changeQ()"
          >
            <!-- <img
              style="display: inline-block;width: .3rem;height: .3rem;vertical-align: middle;"
              :src="imgIcon1"
            /> -->
            <div
              class="cupon-change-icon"
              :class="[isChange == 2 ? 'active-bg-cupon' : 'cupon-change-icon']"
            ></div>
            <span>{{ $t("LotteryRedemption") }}</span>  <!-- 【 奖券兑换 】 -->
          </li>
        </ul>
        <ul class="shop-changeWays-list" v-show="num == 0">
          <li
            v-for="(item, index) in listShop"
            :key="index"
            class="shop-changeWays-list-item"
          >
            <div class="top">
              <!-- <img :src="item.ImagePath" alt=""> -->
              <van-image
                class="img"
                width="100%"
                height="2.16rem"
                fit="cover"
                :src="item.ImagePath"
              />
            </div>
            <p class="title">{{ item.GoodsTitle }}</p>
            <p class="price">{{ $t("MarketPrice") }}：{{ amountSum + 400 }}</p>  <!-- 【 市场价 】 -->
            <p class="changeMoney">
              {{ $t("need") }}{{ amountSum }}{{ $t("CoinsExchange") }}  <!-- 【 需 】 --><!-- 【 金币兑换 】 -->
            </p>
            <p class="sure" @click="queryChange(item.GoodsTitle, item.GoodsID)">
              {{ $t("RedeemNow") }}  <!-- 【 立即兑换 】 -->
            </p>
          </li>
        </ul>
        <ul class="shop-changeWays-two" v-show="num == 1">
          <li
            v-for="(item, index) in listShop"
            :key="index"
            class="shop-changeWays-two-item"
          >
            <div class="top">
              <van-image
                class="img"
                width="100%"
                height="2.16rem"
                fit="cover"
                :src="item.ImagePath"
              />
            </div>
            <p class="title">{{ item.GoodsTitle }}</p>
            <p class="price">{{ $t("MarketPrice") }}：{{ amountSum + 400 }}</p>  <!-- 【 市场价 】 -->
            <p class="changeMoney">
              {{ $t("need") }}{{ amountSum }}{{ $t("CoinsExchange") }}  <!-- 【 需 】 --><!-- 【 金币兑换 】 -->
            </p>
            <p class="sure" @click="queryChange(item.GoodsTitle, item.GoodsID)">
              {{ $t("RedeemNow") }}  <!-- 【 立即兑换 】 -->
            </p>
          </li>
        </ul>
        <div
          v-if="imgMsg"
          style="background:#fff;padding:1rem 0;width: calc(100% - .2rem);margin: 0 auto;position: absolute;
    margin-top: 0.57rem;"
        >
          <img
            style="display:block;margin:0 auto;width:4rem;margin-top: .2rem;position: relative"
            src="@/assets/noInfo.png"
          />
          <p style="text-align:center; margin-top:0.2rem;color: #8b8b8b;">{{ $t("NoData") }}</p>  <!-- 【 暂无数据 】 -->
        </div>

        <transition name="fade" :duration="{ enter: 500, leave: 300 }">
          <div class="boxBig animated" v-show="show" style="z-index: 1000;">
            <div class="box">
              <div class="head">
                <img
                  class="img"
                  src="@/assets/guanggao_03.png"
                  alt
                  style="width:5rem;height:.96rem"
                />
                <div class="head-title">
                  <img
                    class="head-icon"
                    src="@/assets/guanggao_03_icon.png"
                    alt=""
                  />
                  <div class="head-text">{{ $t("EditShippingAddress") }}</div>  <!-- 【 编辑收货地址 】 -->
                </div>
              </div>
              <div class="foot" style="-webkit-user-select:text !important;">
                <p
                  @click="goAddress"
                  style="text-align:right; font-size: .24rem;line-height: .36rem;color: #222"
                >
                  {{ $t("AddressManagement") }} >  <!-- 【 地址管理 】 -->
                </p>
                <!-- 【 姓名 】 -->
                <input
                  v-model="shopsList[1]"
                  :placeholder="$t('Name')"  
                  class="input1"
                />
                <!-- 【 手机号码 】 -->
                <input
                  v-model="shopsList[2]"
                  :placeholder="$t('Mobile')"
                  class="input1"
                />
                <!-- 【 收货地址 】 -->
                <input
                  v-model="shopsList[4]"
                  :placeholder="$t('ShippingAddress')"
                  class="input1"
                />
                <!-- 【 兑换数量 】 -->
                <input
                  v-model.number="Num"
                  :placeholder="$t('ExchangeQuantity')"
                  class="input1"
                  type="number"
                  @keyup="downNum"
                />

                <p class="commit" @click="commit">
                  {{ $t("Submit") }}  <!-- 【 提交 】 -->
                </p>
                <p class="word">
                  {{ $t("AccountDeducted") }}{{ lastMoney * Num}}{{ types | wayW(that) }} <!-- 【 提交后将扣除您账户 】 -->
                </p>
              </div>
            </div>
            <img
              @click="cancel"
              class="imgBB"
              src="@/assets/error_03.png"
              alt
            />
          </div>
        </transition>
      </div>
    </main>
    <nav-bottom ref="son"></nav-bottom>
  </div>
</template>

<script>
import inputComp from "@/components/Index/Input.vue";
import NavBottom from "@/components/Main/NavBottom.vue";
import {
  apiGetCategoryRecord,
  apiGetGoodsRecordList,
  apiAddCashInformation
} from "@/api/product.js";
import { apiGetUserAddress, apiAddEditMemAddress } from "@/api/User.js";
import Vue from "vue";
import { Notify, Toast, Field, Image, Button } from "vant";

Vue.use(Notify)
  .use(Toast)
  .use(Field)
  .use(Image);
export default {
  //  从List组件离开时,修改keepAlive值为false，保证进入该页面时页面刷新  to===> 去哪个路由  from ==>从哪个路由来
  // beforeRouteEnter(to, from, next) {
  //   if (from.name !== "shopList") {
  //     next(vm => {
  //       vm._data.show = false;
  //     });
  //   } else {
  //     next(vm => {
  //       vm._data.show = true;
  //     });
  //   }
  // },
  name: "shop",
  components: {
    NavBottom
  },
  filters: {
    wayW(val, that) {
      if (val == 1) {
        return that.$t("Coins");
      } else {
        return that.$t("Lottery");
      }
    }
  },
  watch: {
    $route() {
      let listArr = JSON.stringify(this.shopsList);
      // debugger
      if (listArr == "[]") {
      } else {
        // 這邊切換商城及切換其他頁面時候會瘋狂報錯，先加個判斷限制一下，原因是上面的 "listArr"陣列第0及第3個 值為空
        if (this.shopsList[0] == undefined || this.shopsList[2] == undefined) {
          return;
        } else {
          var aid = this.shopsList[0];
          var oldAid = JSON.parse(localStorage.getItem("shops"))[0];
          if (aid != oldAid) {
            this.shopsList = JSON.parse(localStorage.getItem("shops"));
          }
        }
      }
    }
  },

  data() {
    return {
      includedComponents: "shop",
      num: 0,
      priceList: [200, 500, 1000, 2000, 3000, 5000],
      money: 0,
      show: false,
      Idd: "",
      listShop: [],
      listShopQ: [],
      Num: 1,
      value: "",
      types: 1,
      amountSum: "",
      lastMoney: "",
      ways: this.$t("Coins"),
      titleNm: "",
      imgMsg: false,
      shopsList: [],
      img1: true,
      img2: false,
      isChange: 1,
      that: this,
      noAddressSet: false,

      lang: "",
      theme: "",
      themeType: ["red", "blue", "black", "yellow"],
      matchUrl: require("@/assets/shop/shop_header.png"),

      CNMatchPicUrl: {
        red: require("@/assets/shop/shop_header.png"),
        blue: require("@/assets/theme-blue/shop/shop_header.png"),
        black: require("@/assets/theme-black/shop/shop_header.png"),
        yellow: require("@/assets/theme-yellow/shop/shop_header.png")
      },

       EnMatchPicUrl: {
        red: require("@/assets/shop/shop_header_US.png"),
        blue: require("@/assets/theme-blue/shop/shop_header_US.png"),
        black: require("@/assets/theme-black/shop/shop_header_US.png"),
        yellow: require("@/assets/theme-yellow/shop/shop_header_US.png")
      },

      TWMatchPicUrl: {
        red: require("@/assets/shop/shop_header_TW.png"),
        blue: require("@/assets/theme-blue/shop/shop_header_TW.png"),
        black: require("@/assets/theme-black/shop/shop_header_TW.png"),
        yellow: require("@/assets/theme-yellow/shop/shop_header_TW.png")
      },
    };
  },
  created() {
    console.log('fsdfsdf')
    this.lang = JSON.parse(localStorage.getItem("lang")).tag;
    this.theme = localStorage.getItem("theme");
    this.section();
    this.changePri(3);
    this.getAddMsg();
  },
  mounted() {
    console.log('fsdfsdf')
    this.changePic();
  },
  methods: {
    changePic() {
      if (this.lang == "zh-CN" || this.lang == "zh-TW") {
        for (let i of this.themeType) {
          if (i == this.theme) {
            this.matchUrl = this.CNMatchPicUrl[i];
            // this.matchPopUrl = this.CNMatchPopPicUrl[i];
          }
        }
      }
      if (this.lang == "en-US") {
        for (let i of this.themeType) {
          if (i == this.theme) {
            this.matchUrl = this.EnMatchPicUrl[i];
            // this.matchPopUrl = this.EnMatchPopPicUrl[i];
          }
        }
      }
      if (this.lang == "zh-TW") {
        for (let i of this.themeType) {
          if (i == this.theme) {
            this.matchUrl = this.TWMatchPicUrl[i];
            // this.matchPopUrl = this.EnMatchPopPicUrl[i];
          }
        }
      }
    },

    downNum() {
      if (this.Num > 99) {
        const m = this.$message({
          message: this.$t("RedeemSingle"),
          type: "warning",
          center: true,
          duration: 1000
        });
        setTimeout(() => m.close(), 1200);
        this.Num = 99;
      }
    },
    goAddress() {
      let data = {};
      apiGetUserAddress(data, true).then(res => {
        if (res.Data.length > 0) {
          this.$router.push("/shopList");
        } else {
          this.$router.push("/address");
        }
      });
    },
    cancel() {
      this.show = false;
    },
    queryChange(name, id) {
      this.titleNm = name;
      this.show = true;
      this.lastMoney = this.amountSum;
      this.$refs.son.show = false;
      this.getAddMsg();
    },
    commit() {
      this.$refs.son.show = false;
      let Token = localStorage.getItem("token");
      if (
        this.shopsList[1] == undefined || this.shopsList[1] == "" ||
        this.shopsList[2] == undefined || this.shopsList[2] == "" ||
        this.shopsList[4] == undefined || this.shopsList[4] == ""
      ) {
        Notify({
          type: "warning",
          message: this.$t("AllMustFilled")
        });
        return;
      }
      let data = {
        Name: this.shopsList[1],
        Phone: this.shopsList[2],
        Address: this.shopsList[4],
        IdentityCard: "",
        CashNum: this.Num,
        Type: this.types,
        Lotteries: this.amountSum,
        Uid: "",
        GoodDescription: this.titleNm,
        Status: 0,
        CreateTime: new Date(),
        AuditTime: "",
        AuditName: ""
      };

      if (data.CashNum < 0 || !/^\d+$/.test(this.Num)) {
        const m = this.$message({
          message: this.$t("FillPositiveInteger"),
          type: "warning",
          center: true,
          duration: 1200
        });
        setTimeout(() => m.close(), 1200);
        this.Num = parseInt(this.Num);
        return;
      }
      if(this.noAddressSet){
        console.log("5256555")
        let addressSetData = {
          AId: '',
          UId: '',
          UName: this.shopsList[1],
          UPhoneNumber: this.shopsList[2],
          URedeemAddress: this.shopsList[4],
          IdentityCard: '123123',
          CreateTime: new Date(),
          IsDefault: 0,
        }
        apiAddEditMemAddress(addressSetData, true).then(res => {

        })
      }

      apiAddCashInformation(data, true).then(res => {
        if (res.IsSuccess) {
          this.Num = 1;
          this.show = false;
          const m = this.$message({
            message: this.$t("SuccessfulPurchase"),
            type: "success",
            center: true,
            duration: 1200
          });
          setTimeout(() => m.close(), 1200);
        } else {
          this.show = false;
          // this.$Alert.showError.call(this, '购买失败')
          const m = this.$message({
            message: this.$t("FailedPurchase"),
            type: "error",
            duration: 2000
          });
          setTimeout(() => m.close(), 2000);
        }
      });
    },
    getAddMsg() {
      let data = {};
      apiGetUserAddress(data, true).then(res => {
        // debugger
        if (res.Data.length > 0) {
          this.noAddressSet = false;
          let listAdd = res.Data;
          let newObj = {};
          for (let i = 0; i < listAdd.length; i++) {
            if (listAdd[i].IsDefault == 1) {
              newObj = listAdd[i];
            }
          }
          let arr = [];
          for (let j in newObj) {
            arr.push(newObj[j]);
          }

          if (arr.length == 0) {
            this.shopsList[1] = res.Data[0].UName;
            this.shopsList[2] = res.Data[0].UPhoneNumber;
            this.shopsList[4] = res.Data[0].URedeemAddress;
          } else {
            this.shopsList[1] = arr[2];
            this.shopsList[2] = arr[3];
            this.shopsList[4] = arr[4];
          }
        } else {
          this.shopsList = [];
          this.noAddressSet = true;
        }
      });
    },
    changeM() {
      this.num = 0;
      this.types = 1;
      // this.imgIcon = require("@/assets/jinbi.png");
      // this.imgIcon1 = require("@/assets/jiang.png");
      this.isChange = 1;
      this.getCommut();
    },
    changeQ() {
      this.num = 1;
      this.types = 2;
      this.img2 = !this.img2;
      // this.imgIcon = require("@/assets/jinbi1.png");
      // this.imgIcon1 = require("@/assets/jiang1.png");
      this.isChange = 2;
      this.getCommut();
    },
    moneyC(index) {
      this.money = index;
      this.$refs.son.show = false;
    },
    section() {
      apiGetCategoryRecord().then(res => {
        this.priceList = res.Data;
      });
    },
    changePri(id) {
      this.Idd = id;
      if (id == 3) {
        this.amountSum = 200;
      }
      if (id == 4) {
        this.amountSum = 500;
      }
      if (id == 5) {
        this.amountSum = 1000;
      }
      if (id == 6) {
        this.amountSum = 2000;
      }
      if (id == 7) {
        this.amountSum = 3000;
      }
      if (id == 8) {
        this.amountSum = 5000;
      }
      this.getCommut();
    },
    getCommut() {
      let data = {
        categoryId: this.Idd,
        index: 1,
        count: 10,
        type: this.types //金币兑换 2奖券兑换
      };
      apiGetGoodsRecordList(data).then(res => {
        if(Math.abs(res.Code) >= 600) {
          this.imgMsg = true;
        } else {
          this.listShop = res.Data;
          this.$forceUpdate();
          if (this.listShop.length == 0) {
            this.imgMsg = true;
          } else {
            this.imgMsg = false;
            this.listShop = res.Data;
          }
        }
      });
    }
  },
  computed: {
    // amountSum() {
    //   return
    //     this.priceList.filter(c=>c.categoryId==this.Idd)
    // },
  },
  //可以在此进行强制数据刷新。
  activated() {
    // this.getAddMsg()
  }
};
</script>

<style>
.swipp {
}

.switch .el-switch__core {
  margin-top: -1rem;
  line-height: 6.74rem;
  margin-left: 5rem;
  width: 0.82rem;
  height: 0.44rem;
  border-radius: 0.4rem;
}

.switch .el-switch__core:after {
  width: 0.4rem;
  height: 0.4rem;
}

.switch .el-switch.is-checked .el-switch__core::after {
  margin-left: 0.82rem;
}

.input1 .el-input {
  width: 4rem;
}

.input1 .el-input__inner {
  display: inline-block;
  width: 4rem;
  font-size: 0.24rem;
  border: 0;
  padding: 0;
  /* height: 36px; */
}
/*  transtition  */
</style>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-leave,
.fade-enter-to {
  opacity: 1;
}
</style>

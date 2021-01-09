<template>
  <div class="recharge">
    <div class="recharge-header">
      <div class="recharge-header-wrap">
        <back class="back-icon img-he"></back>
        <h3>{{ $t("Deposit") }}</h3>
        <!--充值-->
      </div>
    </div>

    <div class="recharge-content">
      <div class="recharge-way">
        <p class="recharge-way-title">{{ $t('RechargeMethod' )}}</p><!--充值方式-->
        <div class="recharge-way-wrap" @click="isOpen = !isOpen">
          <p class="recharge-way-select">{{ payName }}</p>
          <div class="arrow"></div>
        </div>
      </div>

      <div class="protocol-wrap">
        <p class="protocol-text">{{ $t('rechargeAgreement' )}}</p><!--请选择充值协议-->
        <div class="protocol-tab-wrap">
          <div
            :class="[tabIndex == index ? 'protocol-tab-focus' : 'protocol-tab']"
            v-for="(item, index) in protocolTab"
            @click="tabIndex = index"
          >
            {{ item }}
          </div>
        </div>
        <div class="protocol-tab-content" v-if="tabIndex == 0">
          <div class="address-wrap">
            <p>{{ $t('TransferToReceivingAddress' )}}:</p><!--转账至收款地址-->
            <p id="Address" class="address">{{ address }}</p>
            <div class="copy-address" @click="copyAddress()">
              <img src="@/assets/icons/copy.png" />
              <p>{{ $t('CopyAddress' )}}</p><!--复制地址-->
            </div>
          </div>
          <div class="qrcode-wrap">
            <p>{{ $t('ReceivingQRcode' )}}</p><!--或收款二维码（长按二维码即可保存）-->
            <img src="@/assets/myself/recharge/QRCode.png" />
            <p class="red-text">{{ $t('CurrentExchangeRate' )}}：{{ exchangeRate }}CNY=1USDT</p><!--当前参考汇率-->
          </div>
          <p class="remarks"><!--备注：我们收到款后，转账金额会自动到您的账户，如未到账请联系客服-->
            {{ $t('RechargeNote' )}}
          </p>
        </div>
      </div>
    </div>

    <!-- 支付彈窗 -->
    <transition name="fade">
      <model v-if="isOpen"></model>
    </transition>
    <transition name="fade">
      <div class="fancyBox" v-if="isOpen"><!--选择充值方式-->
        <div class="fancyBox-title">{{ $t('ChooseRechargeMethod' )}}</div>
        <div
          class="pay"
          v-for="(item, index) in payList"
          @click="selectPay(index)"
        >
          <p>{{ item }}</p>
          <div class="arrow"></div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import back from "@/components/Botton/back.vue";
import model from "@/components/model";
import { apiGetRechargeInfo } from "@/api/Recharge.js";
export default {
  components: {
    back,
    model
  },
  created() {
    this.payName = this.payList[0];
    this.getApiGetRechargeInfo();
  },
  data() {
    return {
      payList: ["USDT"],
      payName: "",
      address: "",
      protocolTab: ["ERC20"],
      tabIndex: 0,
      isOpen: false,
      exchangeRate: "",
    };
  },
  methods: {
    // 取得地址
    getApiGetRechargeInfo() {
      apiGetRechargeInfo("", true).then(res => {
        this.address = res.Address;
        this.exchangeRate = res.UsdtPrice;
      });
    },

    // 選擇支付方式
    selectPay(index) {
      this.payName = this.payList[index];
      this.isOpen = false;
    },

    // 複製地址
    copyAddress() {
      let TextRange = document.createRange();
      TextRange.selectNode(document.getElementById("Address"));
      let sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(TextRange);
      document.execCommand("copy");
    }
  }
};
</script>

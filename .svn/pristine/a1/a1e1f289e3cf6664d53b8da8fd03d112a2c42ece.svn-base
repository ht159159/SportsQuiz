<template>
  <main class="createClubRule">
    <div class="createClubRule-header" style="position:fixed;top: 0">
      <back class="back-icon img-he"></back>
      <h3>{{ $t("CreateClub") }}</h3>
    </div>

    <div class="createClubRule-level">
      <div class="createClubRule-level-titleBox">
        <p class="createClubRule-level-title">{{ $t("MyVIPlevel") }} :</p>
        <span>{{ RankId }}</span>
      </div>
      <div class="deposit" @click="goDeposit">
        {{ $t("Deposit") }}
      </div>
    </div>

    <div class="club-Box">
      <!-- <div class="noMissionBg">
        <img
          class="noMission"
          v-if="noMission"
          src="../../assets/noInfo.png"
          alt=""
        />
        <p>{{ $t("NoInformation") }}</p>
      </div> -->

      <div class="createRule">
        <div class="title">
          <div class="title-list"></div>
          <p>{{ $t("CreateConditions") }}</p>
        </div>

        <div class="rule">
          1、{{ $t("CreateRule1") }}<br>
          2、{{ $t("CreateRule2") }}<br>
          3、{{ $t("CreateRule3") }}<br>
          4、{{ $t("CreateRule4") }}<br>
          5、{{ $t("CreateRule5") }}<br>
          6、{{ $t("CreateRule6") }}<br>
          7、{{ $t("CreateRule7") }}<br>
          8、{{ $t("CreateRule8") }}{{ clubBaseData.NeedAmount }}。
        </div>
      </div>
    </div>
    <button class="changeBtn" @click="IsSatisfyMemApplyClub">{{ $t("CreateMyClub") }}</button>
        <!-- 提示弹窗 -->
    <transition name="fade" :duration="{ enter: 500, leave: 300 }">
      <div class="boxBig" v-show="meetConditionsAlert" style="z-index: 1000;">
        <div class="box">
          <div class="head">
            <div>{{ $t('CreationFailed') }}</div>  <!-- 【 創建失敗 】 -->
          </div>
            <div class="foot" style="-webkit-user-select:text !important;">
            <p>{{ isSatisfyMessage }}</p>
            <div class="btn-wrap">
              <div class="commit cancelBtn" @click="goDeposit">
                {{ $t('Deposit') }}  <!-- 【 充值 】 -->
              </div>
              <div class="commit confirmBtn" @click="meetConditionsAlert = false">
                {{ $t('IKnow') }}  <!-- 【 我知道了 】 -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </main>
</template>

<script>
import back from "@/components/Botton/back.vue";
import { apiIsSatisfyMemApplyClub, apiGetClubBaseDataConfing } from "@/api/Club.js";
export default {
  components: {
    back
  },
  data() {
    return {
      meetConditionsAlert: false,
      // dataMemApplyClub:{
      //   UName: ""
      // },
      isSatisfyMessage: "",
      RankId: "",
      clubBaseData:""
    };
  },

  created() {
    // this.dataMemApplyClub.UName = localStorage.getItem("uname");
    this.RankId = localStorage.getItem("RankId");
    this.GetClubBaseDataConfing();
  },

  methods: {
    IsSatisfyMemApplyClub () {
      apiIsSatisfyMemApplyClub("", true).then(res => {
        if(Math.abs(res.Code) >= 600) {
          this.meetConditionsAlert = true
          this.isSatisfyMessage = res.Message
        } else {
          this.$router.push("/CreateClubSet");
        }
      });
    },
    goDeposit () {
      this.$router.push("/recharge");
    },
    noGo() {
      const m = this.$message({
        message: this.$t('NotYetOpen'),  //【 暂未开放 】
        type: "warning",
        center: true,
        duration: 1200,
        UName: "no namends"
      });
      setTimeout(() => m.close(), 1200);
    },
    GetClubBaseDataConfing () {
      apiGetClubBaseDataConfing("", true).then(res => {
        this.clubBaseData = res.Data
      });
    }
  }
};
</script>

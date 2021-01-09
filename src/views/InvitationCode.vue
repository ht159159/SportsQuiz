<template>
  <div class="maincode">
    <div class="code">
      <!-- 头部图片 -->
      <div class="code-header" :class="[lang == 'zh-CN' ? 'code-header-CN' : lang == 'en-US' ? 'code-header-US' : 'code-header-TW']">
        <p :class="[lang == 'zh-CN' ? 'CN-text' : lang == 'en-US' ? 'US-text' : 'TW-text']">{{ $t('Get') }} {{InvitationGold}} {{ $t('GoldCoins') }}</p>
      </div>
      <div class="code-main">
        <!-- 邀请部分 -->
        <p class="code-main-p">{{ $t('FriendsInvited') }}：{{ this.InvitationNum }}{{ $t('People') }}</p>  <!-- 【 已邀请好友 】 --><!-- 【 人 】 -->
        <p class="code-main-p">
          {{ $t('EarnCoins') }}：{{ this.InvitationNum * 20 }}{{ $t('Coins') }}  <!-- 【 金币 】 -->
        </p>
        <div class="code-main-invent">
          <van-field
            id="mycode"
            :value="this.InvitationCodeId"
            disabled
            class="my-code"
          />
          <van-button
            type="default"
            class="button1 tag-read"
            @click="copy"
            :data-clipboard-text="InvitationCodeId"
            >{{ $t('Copy') }}</van-button
          >
          <van-field
            :placeholder="$t('FriendInvitationCode')"
            v-model="inviter"
            class="friendcode"
            style="padding-top:.2rem"
            :disabled="IsInvit"
          />
          <van-button
            type="default"
            class="button2"
            @click="goInvet"
            :disabled="IsInvit"
            >{{ $t('Confirm') }}</van-button
          >
        </div>
      </div>
      <div class="code-rules">
        <p>———— {{ $t('InvitationRules') }} ————</p>  <!-- 【 邀请规则 】-->
        <p class="code-rules-text">{{ $t('InvitationRulesTips1') }} {{InvitationGold}} {{$t('InvitationRulesTips2')}}</p>  <!-- 【 用户微信邀请好友,每一个好友成为有效注册 】 -->
      </div>
      <!-- 邀请按钮   【 立即邀请 】-->
      <div class="code-middle">
        <van-button
          round
          type="info"
          @click="gotinventurl"
          :data-clipboard-text="codeUrl"
          class="tag-read1 btn"
          >{{ $t('InviteNow') }}</van-button
        >
      </div>
    </div>

    <nav-bottom class="code-bottom"></nav-bottom>
  </div>
</template>

<script>
/* eslint-disable */
import NavBottom from "@/components/Main/NavBottom.vue";
import {
  apiGetInvitationCode,
  apiGetUserInvitationNum,
  apiCheckInvitationCode
} from "@/api/InvitationCode.js";
import { apiUserUseInvitationCode } from "@/api/User.js";
import { apiGetInvitationUrl, apiGetInviter } from "@/api/InvitationCode.js";
import Clipboard from "clipboard";
export default {
  components: {
    NavBottom
  },
  created () {
    this.lang = JSON.parse(localStorage.getItem("lang")).tag;
    this.getRender(), this.getUserinfo();
    this.getinventurl();
    this.checkInvitationCode();
  },

  data () {
    return {
      lang: "",
      InvitationCodeId: "",
      friendcode: "",
      InvitationNum: 0,
      codeUrl: "",
      inviter: "",
      IsInvit: "",
      InvitationGold: "",
    };
  },
  methods: {
    //是否被邀请
    checkInvitationCode () {
      apiCheckInvitationCode("", true).then(res => {
        this.IsInvit = !res.InvitationNum.IsSuccess;
        this.inviter = res.InvitationNum.data;
      });
    },
    //邀请者
    GetInviter () {
      apiGetInviter("", true).then(res => {
        this.inviter = res.UId;
      });
    },
    //获取邀请链接
    getinventurl () {
      apiGetInvitationUrl("", true).then(res => {
        this.codeUrl = res.data;
      });
    },
    gotinventurl () {
      var clipboard = new Clipboard(".tag-read1");
      clipboard.on("success", e => {
        // this.$toast.success({
        //   message: "邀请链接复制成功",
        //   duration: 3000
        // });
        this.$message({
          message: this.$t('InvitationlinkCopiedSuccessfully'),  // 【 邀请链接复制成功 】
          duration: 3000,
          type: "success",
          center: true
        });

        // success("复制成功");//这里你如果引入了elementui的提示就可以用，没有就注释即可
        // 释放内存
        clipboard.destroy();
      });
      clipboard.on("error", e => {
        // 不支持复制
        // 释放内存
        clipboard.destroy();
      });
    },
    getRender () {
      let data = "";
      apiGetInvitationCode(data, true).then(res => {
        this.InvitationCodeId = this.$t('MyInvitationCode') + " : " + res.InvitationCodeId;  // 【 我的邀请码 】
      });
    },
    getUserinfo () {
      let data = "";
      apiGetUserInvitationNum(data, true).then(res => {
        this.InvitationNum = res.Data.InvitationNum;
        this.InvitationGold = res.Data.InvitationGold;
      });
    },
    //文本复制
    copy () {
      var clipboard = new Clipboard(".tag-read");
      clipboard.on("success", e => {
        this.$message({
          message: this.$t('CopySuccessful'),  // 【 复制成功 】
          duration: 3000,
          type: "success",
          center: true
        });

        // success("复制成功");//这里你如果引入了elementui的提示就可以用，没有就注释即可
        // 释放内存
        clipboard.destroy();
      });
      clipboard.on("error", e => {
        // 不支持复制
        // 释放内存
        clipboard.destroy();
      });
    },

    goInvet () {
      let data = {
        invitationCodeId: this.inviter
      };

      apiUserUseInvitationCode(data, true).then(res => {
        if (res.Code === 200) {
          this.$message({
            message: res.Message,
            duration: 3000,
            type: "success",
            center: true
          });
          localStorage.setItem("IsInvit", true);
          this.IsInvit = true;
        } else if (Math.abs(res.Code) >= 600) {
          this.$message({
            message: res.Message,
            duration: 3000,
            type: "error",
            center: true
          });
        }
        // else if (res.code == 300) {

        //   this.$toast.fail({
        //     message: res.Message,
        //     duration: 3000
        //   });
        // }
      });
    }
  }
};
</script>

<style></style>

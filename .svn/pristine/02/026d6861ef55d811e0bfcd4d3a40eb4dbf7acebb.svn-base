<template>
  <div class="forgetpassword">
    <div class="fp-head">
      <!-- <i class="back-icon"></i> -->
      <back class="back-icon"></back>
    </div>
    <div class="fp-main">
      <div class="inputComponent">
        <img
          class="inputComponent-icon"
          src="~@/assets/icons/account.png"
          alt=""
        />

        <input
          v-model="UName"
          :placeholder="$t('Placehoder_Accout')"
          class="inputComponent-input"
        />
      </div>
      <div class="inputComponent">
        <img
          class="inputComponent-icon"
          src="~@/assets/icons/phone.png"
          alt=""
        />

        <input
          v-model="PhoneNumber"
          :placeholder="$t('LoginCell')"
          class="inputComponent-input"
        />
      </div>
      <!-- <div class="user">
        <i class="user-icon comment-icon"></i>
        <i class="comment-text">账号</i>

        <input
          type="text"
          class="fp-main-input"
          placeholder="请输入您的账号"
          v-model="UName"
        />
      </div> -->
      <!-- <div class="phone">
        <i class="phone-icon comment-icon"></i>
        <i class="comment-text">手机号</i>
        <input
          type="text"
          class="fp-main-input"
          placeholder="请输入您的手机"
          v-model="PhoneNumber"
        />
        <button class="getcode" @click="getCode" :disabled="button">
          <span v-if="CodeContent === '获取验证码'">获取验证码</span>
          <span v-else>{{ CodeContent }}s可发送</span>
        </button>
      </div> -->
      <div class="inputComponent">
        <img
          class="inputComponent-icon"
          src="~@/assets/icons/captcha.png"
          alt=""
        />

        <input
          v-model="SMSCode"
          :placeholder="$t('Placeholder_SMSCode')"
          class="inputComponent-input"
        />
        <button class="getcode" @click="getCode" :disabled="button">
          <span v-if="CodeContent === '获取验证码'">{{
            $t("Send_ValidationCode")
          }}</span>
          <span v-else>{{ CodeContent }}s可发送</span>
        </button>
      </div>
      <div class="inputComponent">
        <img
          class="inputComponent-icon"
          src="~@/assets/icons/password.png"
          alt=""
        />

        <input
          :placeholder="$t('Placeholder_NewPassword')"
          v-model="ResetPassword"
          class="inputComponent-input"
          type="password"
        />
      </div>
      <div class="inputComponent">
        <img
          class="inputComponent-icon"
          src="~@/assets/icons/password.png"
          alt=""
        />

        <input
          :placeholder="$t('Placeholder_ConfirmNewPassword')"
          v-model="ResetPasswordVerify"
          class="inputComponent-input"
          type="password"
        />
      </div>
      <!-- <div class="code">
        <i class="code-icon comment-icon"></i>
        <i class="comment-text">验证码</i>
        <input
          type="text"
          class="fp-main-input"
          placeholder="请输入您的验证码"
          v-model="SMSCode"
        />
      </div> -->
      <div class="fp-btn btn" @click="backPassword">
        {{ $t("Confirm") }}
      </div>
    </div>
    <!-- <div class="fp-password">
      <div class="newpassword">
        <i class="newpassword-icon comment-icon"></i>
        <i class="comment-text">新密码</i>
        <input
          type="password"
          class="fp-password-input"
          placeholder="请输入您的新密码"
          v-model="ResetPassword"
        />
      </div>
      <div class="reset">
        <i class="reset-icon comment-icon"></i>
        <i class="comment-text">再次输入</i>
        <input
          type="password"
          class="fp-password-input"
          placeholder="请再次输入您的新密码"
          v-model="ResetPasswordVerify"
        />
      </div>
    </div> -->

    <!-- <div class="forget-phone">
      <router-link to="/home" class="">忘记手机号？</router-link>
    </div> -->
  </div>
</template>

<script>
import { apiResetPasswordByPhoneNumber, apiGetSMSCode } from "@/api/User";
import back from "../components/Botton/back.vue";

export default {
  components: {
    back
  },
  data() {
    return {
      UName: "",
      PhoneNumber: "",
      SMSCode: "",
      ResetPassword: "",
      ResetPasswordVerify: "",
      CodeContent: "获取验证码",
      button: false
    };
  },
  methods: {
    backPassword() {
      let data = {
        UName: this.UName,
        PhoneNumber: this.PhoneNumber,
        SMSCode: this.SMSCode,
        ResetPassword: this.ResetPassword,
        ResetPasswordVerify: this.ResetPasswordVerify
      };
      if (this.UName == "") {
        const m = this.$message({
          message: this.$t("AccountEmpty"),
          duration: 1000,
          type: "error",
          center: true
        });
        setTimeout(() => m.close(), 1200);
        return;
      };
      if (this.PhoneNumber == "") {
        const m = this.$message({
          message: this.$t("PhoneBlank"),
          duration: 1000,
          type: "error",
          center: true
        });
        setTimeout(() => m.close(), 1200);
        return;
      };
      if (this.SMSCode == "") {
        const m = this.$message({
          message: this.$t("SMSEmpty"),
          duration: 1000,
          type: "error",
          center: true
        });
        setTimeout(() => m.close(), 1200);
        return;
      };
      if (this.ResetPassword == "") {
        const m = this.$message({
          message: this.$t("PasswordBlank"),
          duration: 1000,
          type: "error",
          center: true
        });
        setTimeout(() => m.close(), 1200);
        return;
      };
      if (this.ResetPassword != this.ResetPasswordVerify) {
        const m = this.$message({
          message: this.$t("PasswordAreInconsistent"),
          duration: 1000,
          type: "error",
          center: true
        });
        setTimeout(() => m.close(), 1200);
        return;
      }
      apiResetPasswordByPhoneNumber(data).then(res => {
        if(Math.abs(res.Code) >= 600) {
          const m = this.$message({
            message: res.Message,
            duration: 1000,
            type: "error",
            center: true
          });
          setTimeout(() => m.close(), 1200);
        } else {
          const m = this.$message({
            message: this.$t("Modify_Success"),
            duration: 1000,
            type: "success",
            center: true
          });
          setTimeout(() => m.close(), 1200);
          setTimeout(() => {
            this.$router.push("/");
          });
        }
      });
    },
    getCode() {
      if (!/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.PhoneNumber)) {
        this.$message({
          message: this.$t("WrongFormatOfPhoneNumber"),
          duration: 3000,
          type: "error",
          center: true
        });
        return false;
      }
      this.CodeContent = 60;
      let cleari = setInterval(() => {
        let second = this.CodeContent;
        second = second - 1;
        this.CodeContent = second;
        this.button = true;
        if (this.CodeContent === 0) {
          clearInterval(cleari);
          this.CodeContent = "获取验证码";
          this.button = false;
        }
      }, 1000);

      let phone = this.PhoneNumber;

      apiGetSMSCode(phone).then(res => {});
    }
  }
};
</script>

<style></style>

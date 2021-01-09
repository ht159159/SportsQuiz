<template>
  <main class="change">
    <div class="changePass">
      <div class="changePass-header" style="position: fixed; top: 0">
        <back class="back-icon img-he"></back>
        <h3>{{ $t("ChangePassword") }}</h3>
      </div>
      <div class="changeList" style="margin-top: 1.3rem">
        <div class="inputList">
          <p class="inputList-old">
            <span class="span">{{ $t("OldPassword") }}：</span>  <!-- 【 OldPassword 】 -->

            <!-- 【 请输入您的原密码 】 -->
            <el-input
              :type="types1"
              class="input"
              v-model="pass1"
              :placeholder="$t('Placeholder_Origin_Password')"
            ></el-input>
            <img
              @click="really1 = !really1"
              :src="
                really1
                  ? require('@/assets/icons/hide1.png')
                  : require('@/assets/icons/hide.png')
              "
            />
          </p>
          <p class="inputList-new">
            <span>{{ $t("NewPassword") }}：</span>  <!-- 【 新密码 】 -->

            <!-- 【 请输入您的新密码 】 -->
            <el-input
              :type="types2"
              class="input"
              v-model="pass2"
              :placeholder="$t('Placeholder_NewPassword')"
            ></el-input>
            <img
              @click="really2 = !really2"
              :src="
                really2
                  ? require('@/assets/icons/hide1.png')
                  : require('@/assets/icons/hide.png')
              "
            />
          </p>
          <p class="inputList-new">
            <span>{{ $t("ConfirmNewPassword") }}：</span>  <!-- 【 确认新密码 】 -->

            <!-- 【 请再次输入您的新密码 】 -->
            <el-input
              :type="types"
              class="input"
              v-model="pass3"
              :placeholder="$t('Placeholder_ConfirmNewPassword')"
            ></el-input>
            <img
              @click="really = !really"
              :src="
                really
                  ? require('@/assets/icons/hide1.png')
                  : require('@/assets/icons/hide.png')
              "
            />
          </p>
        </div>
        <button @click="saveUp" class="changeBtn">{{ $t("Submit") }}</button>  <!-- 【 提交请输入图形验证码 】 -->
      </div>
    </div>
  </main>
</template>

<script>
import { apiChangePwd } from "@/api/User.js";
import back from "@/components/Botton/back.vue";
import Vue from "vue";
import { Toast } from "vant";
Vue.use(Toast);
export default {
  inject: ["reload"], //注入reload方法
  components: {
    back
  },
  data() {
    return {
      pass1: "",
      pass2: "",
      pass3: "",
      iconPass: require("@/assets/icons/hide1.png"),
      really: true,
      really2: true,
      really1: true
    };
  },
  computed: {
    types() {
      return this.really ? "password" : "text";
    },
    types2() {
      return this.really2 ? "password" : "text";
    },
    types1() {
      return this.really1 ? "password" : "text";
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    saveUp() {
      let data = {
        OldPwd: this.pass1,
        NewPwd: this.pass2,
        ConfirmNewPwd: this.pass3
      };
      if (data.OldPwd == "" || data.NewPwd == "" || data.ConfirmNewPwd == "") {
        // return this.$Alert.showWarning.call(this, this.$t("PasswordNotFilled"))
        return this.Alert.showMsg(
          this.$t("PasswordNotFilled"),
          "warning",
          1200,
          true,
          true
        );
      }
      apiChangePwd(data, true).then(res => {
        if (Math.abs(res.Code) >= 600) {
          const m = this.$message({
            message: res.message,
            type: "error",
            center: true,
            duration: 1000
          });
          setTimeout(() => m.close(), 1200);
        } else {
          if (res.IsSuccess) {
            localStorage.removeItem("token");
            const m = this.$message({
              message: res.message,
              type: "success",
              center: true,
              duration: 1000
            });
            setTimeout(() => m.close(), 1200);
            setTimeout(() => {
              this.$router.push("/");
            }, 1500);
          }
        }
      });
    }
  }
};
</script>

<style>
.el-input {
  width: 4rem;
  border: 0;
  /* height: 34px; */
  margin-right: 0.1rem;
  margin-left: 0.5rem;
}

.input .el-input__inner {
  display: inline-block;
  width: 4rem;
  font-size: 0.24rem;
  border: 0;
  padding-left: 0.1rem;
  height: 0.8rem;
  background-color: #f2f2f2;
}
</style>

<template>
  <div class="login">
    <!-- <div class="logo"></div> -->
    <i class="back-icon" @click="gojump"> </i>
    <div class="inputComponent">
      <img class="inputComponent-icon" src="~@/assets/icons/account.png" alt />
      <input v-model="account" :placeholder= "$t('Placehoder_Accout')" class="inputComponent-input" />
    </div>
    <div class="inputComponent">
      <img class="inputComponent-icon" src="~@/assets/icons/password.png" alt />
      <input
        :type="ifPassword"
        v-model="password"
        :placeholder="$t('Placeholder_Password')"
        class="inputComponent-input"
        @keyup.enter="login(3)"
      />

      <a
        href="#"
        @click.prevent="togglePassword = !togglePassword"
        class="inputComponent-suffix inputComponent-password"
      >
        <img
          :src="
            togglePassword
              ? require('@/assets/icons/hide1.png')
              : require('@/assets/icons/hide.png')
          "
          alt
        />
      </a>
      <a href>
        <img src alt />
      </a>
    </div>

    <button class="login-btn btn" @click.stop="login(3)">{{ $t('Login') }}</button>  <!-- 【 登录账号 】 -->
    <div class="login-actions">
      <span class="login-action_action" @click="gofp">{{ $t('Forget_Password') }}</span>  <!-- 【 找回密码 】 -->
      <div class="line"></div>
      <span class="login-action_action" @click="gorg">{{ $t('Register') }}</span>  <!-- 【 新用户注册 】 -->
    </div>

    <!-- 語系選擇 -->
    <div class="lang-select">
      <p>{{ $t("SwitchLanguage") }}</p>
      <div class="lang-select-wrap">
        <div class="cn" @click="langSelect('简体中文', 'zh-CN')"></div>
        <div class="en" @click="langSelect('English', 'en-US')"></div>
      </div>
    </div>
  </div>
</template>

<script>
import inputComp from "@/components/Index/Input.vue";
import { apiLogin } from "@/api/User";
import { apiGetMemClubs } from "@/api/Club.js";
export default {
  components: {
    inputComp
  },
  computed: {
    ifPassword() {
      return this.togglePassword ? "password" : "text";
    }
  },
  created() {
    if(this.$route.query.token){
      localStorage.setItem("token", this.$route.query.token);
    }
    let token = localStorage.getItem("token");
    if (token) {
      this.$router.push("/");
    }
  },
  data() {
    return {
      account: "",
      password: "",
      imgCode: "",
      togglePassword: true
    };
  },
  methods: {
    gojump() {
      this.$router.push("/");
    },
    gofp() {
      this.$router.push("/ForgetPassword");
    },
    gorg() {
      this.$router.push("/register");
    },
    getAccount(res) {
      this.account = res;
    },
    getPassword(res) {
      this.password = res;
    },
    // login () {
    //   let data = {
    //     Name: this.account,
    //     Password: this.password
    //   };
    //   this.$store.dispatch("asyncLogin", data);
    //   // let result = this.$store.state.user.code;
    //   // if (result === 200) {
    //   //   this.$toast.success("登录成功");
    //   //   setTimeout(() => {
    //   //     this.$router.push("/home");
    //   //   });
    //   // }
    // }
    login(v) {
      let data = {
        Name: this.account,
        Password: this.password
      };
      if (this.account == "") {
        const m = this.$message({
          message: this.$t("AccountEmpty"),  // 【 帐号不能为空 】
          duration: 1000,
          type: "error",
          center: true
        });
        setTimeout(() => m.close(), 1200);
        return;
      };
      if (this.password == "") {
        const m = this.$message({
          message: this.$t("PasswordBlank"),  // 【 密码不能为空 】
          duration: 1000,
          type: "error",
          center: true
        });
        setTimeout(() => m.close(), 1200);
        return;
      };
      let vm = this;
      apiLogin(data).then(res => {
        if (res.code === 200) {
          localStorage.setItem("token", res.AccessToken);
          localStorage.setItem("UId", res.UId);
          localStorage.setItem("RefreshToken", res.RefreshToken);
          localStorage.setItem("logintime", new Date().getTime());
          localStorage.setItem("uname", vm.account);
          const m = vm.$message({
            message: this.$t('LoginSuccessful'),  // 【 登录成功 】
            duration: 1000,
            type: "success",
            center: true
          });
          vm.$parent.isOn = true;
          localStorage.setItem("isOn",true)
          vm.$parent.handlePlay();
          vm.$router.push("/");
          // 獲取俱樂部會員資格與否 
          this.isMember();
        } else if (Math.abs(res.Code) >= 600) {
          const m = vm.$message({
            message: res.Message,
            duration: 3000,
            type: "error",
            center: true
          });
          setTimeout(() => m.close(), 1200);
        }
      })
      // .then(()=> {
      //   // 獲取俱樂部會員資格與否 
      //   this.isMember();
      // });
    },

    // 語系選擇
    langSelect(name, tag) {
      localStorage.setItem("lang", JSON.stringify({ name: name, tag: tag }));
      location.reload();
    },

    // 獲取俱樂部會員資格與否   1 = 有資格;  2 = 無資格
    isMember() {
      // let userName = localStorage.getItem('uname')
      // let data = {}
      apiGetMemClubs("", true).then(res => {
        if (res.Data == null) {
          // 無會員
          localStorage.setItem("isMember", 2);
        } else {
          // 有會員
          localStorage.setItem("isMember", 1);
          localStorage.setItem("ClubId", res.Data.ClubId);
          // 判斷是否為管理階級
          if (res.Data.Name == "会长") {
            localStorage.setItem("isManagement", 1);
          } else if (res.Data.Name == "副会长"){
            localStorage.setItem("isManagement", 2);
          }
          else if (res.Data.Name == "会员"){
            localStorage.setItem("isManagement", 3);
          }
        }
      });
    }
  },
  mounted() {
    this.account = localStorage.getItem("uname");
  }
};
</script>

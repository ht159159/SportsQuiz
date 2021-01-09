<template>
  <div class="inputComponent">
    <img
      class="inputComponent-icon"
      v-if="account"
      src="~@/assets/icons/account.png"
      alt=""
    />
    <img
      class="inputComponent-icon"
      v-if="password"
      src="~@/assets/icons/password.png"
      alt=""
    />
    <img
      class="inputComponent-icon"
      v-if="phone"
      src="~@/assets/icons/phone.png"
      alt=""
    />
    <img
      class="inputComponent-icon"
      v-if="captcha"
      src="~@/assets/icons/captcha.png"
      alt=""
    />
    <input
      :type="ifPassword"
      v-model="val"
      @input="handleInput"
      :placeholder="placeholder"
      class="inputComponent-input"
    />
    <a
      href="#"
      v-if="clear"
      @click.prevent="clearData"
      class="inputComponent-suffix inputComponent-clear"
      >x</a
    >
    <a
      href="#"
      v-if="password"
      @click.prevent="togglePassword = !togglePassword"
      class="inputComponent-suffix inputComponent-password"
    >
      <img
        :src="
          togglePassword
            ? require('@/assets/icons/hide.png')
            : require('@/assets/icons/hide.png')
        "
        alt
      />
    </a>
    <a href=""><img src="" alt=""/></a>
  </div>
</template>

<script>
export default {
  props: {
    placeholder: String,
    value: String,
    clear: Boolean,
    password: Boolean,
    account: Boolean,
    phone: Boolean,
    captcha: Boolean
  },
  data() {
    return {
      isActive: true,
      togglePassword: false,
      val: ""
    };
  },
  methods: {
    clearData() {
      this.val = "";
      this.$emit("update:value", "");
    },
    handleInput(e) {
      this.$emit("update:value", e.target.value);
    }
  },
  computed: {
    ifPassword() {
      return this.togglePassword ? "password" : "text";
    }
  }
};
</script>



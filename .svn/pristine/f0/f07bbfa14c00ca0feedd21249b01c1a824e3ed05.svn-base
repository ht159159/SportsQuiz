<template>
    <div>
        <!-- 註冊提示彈窗 -->
        <transition name="fade">
            <model v-if="isNoRegister"></model>
        </transition>
        <transition name="fade">
            <div class="regist-tip-fancy-box" v-if="isNoRegister">
                <img v-if="lang == 'zh-CN' || lang == 'zh-TW'" src="../assets/index/regist_tip/regist-tip.png" alt="">
                <img  v-if="lang == 'en-US'" src="../assets/index/regist_tip/regist-tip-EN.png" alt="">
                <div class="regist-tip-fancy-box-btn">
                    <div class="regist-tip-fancy-box-btn-confirm" @click="regiseterNow()">{{ $t('RegisterNow') }}</div>
                    <div class="regist-tip-fancy-box-btn-cancel" @click="isNoRegister = !isNoRegister"></div>
                </div>
            </div>
        </transition>
    </div>
</template>
<script>
import model from "@/components/model";
export default {
    components: {
        model
    },
    created() {
    this.lang = JSON.parse(localStorage.getItem("lang")).tag;
    let token = localStorage.getItem("token");
    if (token) {
        this.isNoRegister = false;
    } else {
        this.isNoRegister = true;
    }
    },
    data() {
        return {
        isNoRegister: true,
        lang: ""
        }
    },
    methods: {
        regiseterNow() {
        this.$router.push("/register")
        }
    },
}
</script>
<style lang="scss">
.regist-tip-fancy-box {
    top: 50%;
    left: 50%;
    -webkit-transform: translateX(-50%) translateY(-50%);
    -moz-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
    width: 95%;
    height: auto;
    background-size: contain;
    position: fixed;
    z-index: 2000;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    border-radius: 0.2rem;
    img {
        width: 100%;
    }
    &-content {
        width: 100%;
        height: 3rem;
      // background-color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        p {
        font-size: 0.32rem;
        line-height: 0.32rem;
        }
    }
    &-btn {
        width: 100%;
        // height: 3rem;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        // background-color: #fff;
        padding-bottom: 0.2rem;
        // border-radius: 0 0 0.2rem 0.2rem;
        p {
        font-size: 0.28rem;
        color: #dc3849;
        margin-top: 0.25rem;
        }
        &-confirm {
            width: 85%;
            font-size: 0.4rem;
            line-height: 0.4rem;
            color: #ffffff;
            padding: 0.3rem;
            text-align: center;
            border-radius: 0.5rem;
            //   @include myself_btn();
            background-color: #dc3849;
            margin-top: 0.5rem;
        }
        &-confirm:active {
            background-color: #c9c9c9;
            transform: scale(0.9);
        }
        &-cancel {
            width: 0.78rem;
            height: 0.78rem;
            background: url("~@/assets/index/regist_tip/regist-tip-close.png") no-repeat center;
            background-size: 100% 100%;
            margin-top: 0.5rem;
        }
    }
}
</style>
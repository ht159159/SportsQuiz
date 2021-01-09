<template>
    <main class='edit'>
        <div class="edit-header">
            <back class='back-icon img-he'></back>
            <h3>{{ $t("EditShippingAddress") }}</h3>
            <span class="save" @click='commit'>{{ $t("Save") }}</span>
        </div>
        <div class='edit-couent'>
            <ul class='ul'>
                <li class='item'>
                    <el-input class='input1' v-model="openList[1]" placeholder=""></el-input>
                </li>
                <li class='item'>
                    <el-input class='input1' v-model.number="openList[2]" placeholder=""></el-input>
                    <!-- <span>+86</span> -->
                </li>
                <li class='item'>
                    <el-input class='input1' v-model="openList[4]" placeholder=""></el-input>
                    
                </li>
                <li class='item' style='border: 0'>
                    <span>{{ $t("DefaultAddress") }}</span>
                    <el-switch
                        v-model="value2"
                        @change='changes'
                        active-color="#34c759"
                        inactive-color="#bfbfbf">
                    </el-switch>    
                </li>
            </ul>
            <div class='del' @click='deltel'>
                {{ $t("DeleteShippingAddress") }}
            </div>
        </div>
        <transition name='fade'>
        <div v-show='tan' style="width: 100%;height: 100%;background: rgba(0,0,0,.5);position:absolute;z-index:22;top: 0">
            <div class='boxB' style='position: absolute; top: 0; bottom: 0;left: 0; right: 0'>
                <div class='top'>
                <img src='@/assets/imgg_03.png' />
                </div>
                <div class='bottom'>
                    <p style= "line-height: .38rem;text-align: center;font-size: .26rem">{{ $t("SureDelete") }}</p>
                <p class='di'>
                    <span @click='quxiao' style="background: linear-gradient(to right, #c5c5c5, #acacac)">{{ $t("Cancel") }}</span>
                    <span @click='que' style="background: linear-gradient(to right, #e73a51, #dc3849);margin-left: .4rem">{{ $t("Confirm") }}</span>
                </p>
                </div>
            </div>
        </div>
        </transition>
    </main>
</template>

<script>
    import back from "@/components/Botton/back.vue";
    import {
        apiGetUserAddress,
        apiAddEditMemAddress,
        apiDelMemAddress
    } from '@/api/User.js'
    import Vue from 'vue';
    import {
        Area,
        Toast
    } from 'vant';

    Vue.use(Area).use(Toast);
    export default {
        components: {
            back
        },
        filters: {
            openMo(val) {
                if (val == 1) {
                    return true
                } else {
                    return false
                }
            }
        },
        data() {
            return {
                openList: [],
                value2: '',
                tan: false,
            }
        },
        methods: {
            quxiao() {
                this.tan = false
            },
            goBack() {
                this.$router.go(-1)
            },
            que() {
                let data = {
                    AID: this.openList[0]
                }
                apiDelMemAddress(data, true).then(res => {
                    if (Math.abs(res.Code) >= 600) {
                        this.$message({
                        message: res.Message,
                        type: "error",
                        center: true,
                        duration: 3000
                        });
                    } else {
                        const m = this.$message({
                            message: this.$t("successfullyDeleted"),
                            type: "success",
                            duration: 1000
                        });
                        setTimeout(() => m.close(), 1200)
                        this.$router.replace('/address')
                        this.$router.go(-1)
                    }
                })
            },
            changes() {

            },
            deltel() {
                this.tan = true
            },
            commit() {
                let isMo = 0
                if (this.value2) {
                    isMo = 1
                } else {
                    isMo = 0
                }
                let data = {
                    AId: this.openList[0],
                    UId: '',
                    UName: this.openList[1],
                    UPhoneNumber: this.openList[2],
                    URedeemAddress: this.openList[4],
                    // IdentityCard: this.detailAdd,
                    CreateTime: this.openList[5],
                    IsDefault: isMo,
                }
                apiAddEditMemAddress(data, true).then(res => {
                    if (Math.abs(res.Code) >= 600) {
                        this.$message({
                        message: res.Message,
                        type: "warning",
                        center: true,
                        duration: 3000
                        });
                    } else {
                        const m = this.$message({
                            message: this.$t("SavedSuccessfully"),
                            type: "success",
                            duration: 1000
                        });
                        setTimeout(() => m.close(), 1200)
                        this.$router.push('/address')
                    }
                })
            }
        },
        created() {
            this.openList = this.$route.query.arrs;
            if (this.openList[3] == 0) {
                return this.value2 = false
            } else {
                return this.value2 = true
            }
        }
    }
</script>

<style>
    .el-input {
        width: 6rem;
        border: 0;
    }
    
    .input1 .el-input__inner {
        display: inline-block;
        width: 5rem;
        border: 0;
        padding: 0;
        font-size: .24rem;
        color: #1f1f1f
    }
    
    .el-switch__core {
        margin-left: 4.6rem
    }
</style>
<style scoped>
    .boxB {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        width: 5.5rem;
        height: 3.4rem;
        /* transform: translate(-50%,-50%); */
        animation: show 1s;
        z-index: 55;
    }
    
    .boxB .top {
        width: 100%;
        height: 0.8rem;
        background: #c12f3e;
        border-top-left-radius: 0.2rem;
        border-top-right-radius: 0.2rem;
        position: relative;
    }
    
    .boxB .top img {
        position: absolute;
        width: 4.36rem;
        height: 0.92rem;
        left: 0;
        top: -0.1rem;
        right: 0;
        bottom: 0;
        margin: auto;
    }
    
    .boxB .bottom {
        width: 100%;
        border-bottom-left-radius: 0.2rem;
        border-bottom-right-radius: 0.2rem;
        background: #f3f3f3;
        font-size: 0.3rem;
        text-align: center;
        color: #4d4d4d;
        padding-top: 0.36rem;
    }
    
    .di {
        width: 100%;
        border-top: 1px solid #d8d8d8;
        padding: 0.37rem 0 0.34rem 0;
    }
    
    .di span {
        display: inline-block;
        width: 2.1rem;
        height: 0.6rem;
        border-radius: 0.4rem;
        text-align: center;
        line-height: 0.6rem;
        font-size: 0.24rem;
        color: #fff;
        box-shadow: 1px 3px 6px #d8d8d8;
    }
</style>
<style scoped>
    .fade-enter,
    .fade-leave-to {
        opacity: 0;
    }
    
    .fade-leave,
    .fade-enter-to {
        opacity: 1;
    }
    
    .fade-enter-active,
    .fade-leave-active {
        transition: all 0.5s;
    }
</style>
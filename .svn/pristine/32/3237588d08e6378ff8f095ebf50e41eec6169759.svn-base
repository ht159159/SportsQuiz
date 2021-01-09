<template>
    <main class='address'>
        <div class="address-header" style='position:fixed;top: 0'>
            <!-- <img src='@/assets/back.png' style='width: .25rem;height: .35rem' @click.stop='goHome' class='img-he' /> -->
            <back class='back-icon img-he'></back>
            <h3 style='margin-left: -.4rem'>{{ $t("ShippingAddress") }}</h3>
            <span v-if='!noMsg' class='addAdddress' @click='goAdd'>{{ $t("AddNewAddress") }}</span>
        </div>
        <div class='address-couent' style='margin-top:1.1rem'>
            <ul class='address-couent-ul' style='padding-top: 0' v-if='!noMsg'>
                <!-- <li class='address-couent-ul-item' v-for='(item, index) in addList' :key='index' v-if='item.IsDefault == 1'>
                    <div class='address-couent-ul-item-top'>
                        <span class='name' style='display: inline-block;width:1.1rem;'>{{item.UName}}</span>
                        <span class='phone'>{{item.UPhoneNumber}}</span>
                    </div>
                    <div class='address-couent-ul-item-bottom'>
                        <span class='mo' style='display: inline-block;width:.8rem;line-height: .27rem;' v-if='item.IsDefault == 1'>默认</span>
                        <span class='mo active' style='display: inline-block;width:.8rem;line-height: .27rem;' v-else>默认</span>
                        <span class='dizhi' style='margin-left: .5rem'>{{item.URedeemAddress}}</span>
                        <p class='bian' style='margin-left: .4rem;' @click='goEdit(item.AId,item.UName,item.UPhoneNumber,item.IsDefault,item.URedeemAddress,item.CreateTime)'>
                            编辑
                        </p>
                    </div>
                </li>
                <li class='address-couent-ul-item' v-for='(item, index) in addList' :key='index' v-if='item.IsDefault == 0'>
                    <div class='address-couent-ul-item-top'>
                        <span class='name' style='display: inline-block;width:1.1rem;'>{{item.UName}}</span>
                        <span class='phone'>{{item.UPhoneNumber}}</span>
                    </div>
                    <div class='address-couent-ul-item-bottom'>
                        <span class='mo' style='display: inline-block;width:.8rem;line-height: .27rem;' v-if='item.IsDefault == 1'>默认</span>
                        <span class='mo active' style='display: inline-block;width:.8rem;line-height: .27rem;' v-else>默认</span>
                        <span class='dizhi' style='margin-left: .5rem'>{{item.URedeemAddress}}</span>
                        <p class='bian' style='margin-left: .4rem;' @click='goEdit(item.AId,item.UName,item.UPhoneNumber,item.IsDefault,item.URedeemAddress,item.CreateTime)'>
                            编辑
                        </p>
                    </div>
                </li> -->
                <li class='listBoss' v-for='(item, index) in addList' :key='index' v-if='item.IsDefault == 1'>
                    <div class='divOne'>
                        <span class='name' style='width:1.1rem;line-height: .36rem'>{{item.UName}}</span>
                        <span class='mo' style='line-height: .27rem;' v-if='item.IsDefault == 1'>{{ $t("Default") }}</span>
                        <span class='mo active' style='line-height: .27rem;' v-else>{{ $t("Default") }}</span>
                    </div>
                    <div class='divTwo'>
                        <span class='phone'>{{item.UPhoneNumber}}</span>
                        <span class='dizhi' style='width: 4.4rem;line-height: .32rem'>{{item.URedeemAddress}}</span>
                        
                    </div>
                    <p class='pThree' style='' @click='goEdit(item.AId,item.UName,item.UPhoneNumber,item.IsDefault,item.URedeemAddress,item.CreateTime)'>
                        {{ $t("Edit") }}
                    </p>
                </li>
                <li class='listBoss' v-for='(item, index) in addList' :key='index' v-if='item.IsDefault == 0'>
                    <div class='divOne'>
                        <span class='name' style='width:1.1rem;line-height: .36rem'>{{item.UName}}</span>
                    </div>
                    <div class='divTwo'>
                        <span class='phone'>{{item.UPhoneNumber}}</span>
                        <span class='dizhi' style='width: 4.4rem;line-height: .32rem'>{{item.URedeemAddress}}</span>
                    </div>
                    <p class='pThree' style='' @click='goEdit(item.AId,item.UName,item.UPhoneNumber,item.IsDefault,item.URedeemAddress,item.CreateTime)'>
                        {{ $t("Edit") }}
                    </p>
                </li>
            </ul>
            <div class='noMsg' v-if='noMsg'>
                <img src='@/assets/address_03.png' />
                <p @click='goAdd'>{{ $t("AddShippingAddress") }}</p>
            </div>
        </div>
    </main>
</template>

<script>
import { apiGetUserAddress,apiAddEditMemAddress } from  '@/api/User.js'
import back from "@/components/Botton/back.vue";
    export default{
           components: {
                back
            },
        data() {
            return {
                ren: false,
                noMsg: '',
                addList: [],
            }
        },
        methods: {
            goHome() {
                // this.$router.push('/shop')
                this.$router.go(-1)
            },
            goEdit(id,name,phone,address,moren,timer) {       
                let arrs = []
                arrs.push(id,name,phone,address,moren,timer)
                this.$router.push({
                    path:'/editAddress',
                    query: {
                        arrs: arrs
                    }
                })
            },
            goAdd() {
                this.$router.push('/add')
            },
            getAddMsg() {
                let data = {}
                apiGetUserAddress(data, true).then(res => {
                    if (Math.abs(res.Code) >= 600) {
                        this.noMsg = true
                    } else {
                        this.addList = res.Data
                        if(this.addList.length > 0) {
                            this.noMsg = false
                        } else {
                            this.noMsg = true
                        }
                    }
                })
            }
        },
        created() {
            this.getAddMsg();
        }
    }
</script>

<style scoped>
    .active{
        width: .62rem;
        height: .27rem;
        border-radius: .1rem;
        background: rgba(0,0,0,0);
        float: left;
        color: rgba(0,0,0,0)
    }
    .listBoss{
        height: 1.4rem;
        padding-top: 0.1rem;
        width: calc(100% - .3rem);
        margin: 0 auto;
        border-bottom: 1px solid #d7d7d7
    }
    .listBoss .divOne{
        float: left;
        margin-top:.2rem
    }
    .listBoss .divOne span{
        display: block;
    }
    .listBoss .divOne .mo{
        height: 0.27rem;
        border-radius: 0.1rem;
        background: #f0b9bf;
        color: #fff;
        text-align: center;
        font-size: 0.2rem;
        margin-top: .1rem;
        padding: 0 8px;
    }
    .listBoss .divTwo{
        float: left;
        margin-left: .1rem
    }
    .listBoss .divTwo span{
        display: block;
        
    }
     .listBoss .divTwo .phone{
        line-height: 0.47rem;
        font-size: 0.25rem;
        color: #828282;
        margin-left: 0.25rem;
     }
     .listBoss .divTwo .dizhi{
        font-size: 0.26rem;
        color: #1f1f1f;
        line-height: 0.26rem;
        margin-left: 0.25rem;
        float: left;
        width: 4.4rem;
        overflow-wrap: break-word;
     }
    .listBoss .pThree{
        float: left;
        margin-left: 0.26rem;
        font-size: 0.25rem;
        color: #c3c3c3;
        text-align: center;
        border-left: 1px solid #c3c3c3;
        line-height: 0.7rem;
        width: 0.9rem;
        margin-top: .2rem
    }
</style>

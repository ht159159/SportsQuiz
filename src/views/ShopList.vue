<template>
    <main class='address'>
        <div class="address-header" style='position:fixed; top: 0'>
            <img src='@/assets/back.png' style='width: .25rem;height: .35rem' @click.stop='goHome' class='img-he' />
            <h3 style='margin-left: -.4rem'>{{ $t("ShippingAddress") }}</h3>
            <span v-if='!noMsg' style='
            font-size: .23rem;
            color: #fff;
            position:absolute;
            top:.5rem;right:.32rem;
            display: inline-block;' @click='goAdd'>{{ $t("AddNewAddress") }}</span>
        </div>
        <div class='address-couent' style='margin-top: 1.3rem'>
            <ul class='address-couent-ul' v-if='!noMsg' style='padding-top: 0'>
                <li class='listBoss' v-for='(item, index) in addList' :key='index' v-if='item.IsDefault == 1'>
                    <div class='divOne'>
                        <span class='name' style='width:1.1rem;line-height: .36rem'>{{item.UName}}</span>
                        <span class='mo' style='line-height: .27rem;' v-if='item.IsDefault == 1'>{{ $t("Default") }}</span>
                        <span class='mo active' style='width:.8rem;line-height: .27rem;' v-else>{{ $t("Default") }}</span>
                    </div>
                    <div class='divTwo'>
                        <span class='phone'>{{item.UPhoneNumber}}</span>
                        <span class='dizhi' style='width: 4.4rem;line-height: .32rem' @click='goShop(item.AId,item.UName,item.UPhoneNumber,item.IsDefault,item.URedeemAddress,item.CreateTime)'>{{item.URedeemAddress}}</span>
                        
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
                        <span class='dizhi' style='width: 4.4rem;line-height: .32rem' @click='goShop(item.AId,item.UName,item.UPhoneNumber,item.IsDefault,item.URedeemAddress,item.CreateTime)'>{{item.URedeemAddress}}</span>
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
    import {
        apiGetUserAddress,
        apiAddEditMemAddress
    } from '@/api/User.js'
    import back from "@/components/Botton/back.vue";
    export default {
        //从Detail返回List时，修改List的keepAlive为true,确保返回List页面时使用缓存不刷新页面
        beforeRouteLeave(to, from, next) {
            if (to.name === 'shoplists') {
                to.meta.keepAlive = true
            }
            next()
        },
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
                this.$router.push('/shop')
            },
            goEdit(id, name, phone, address, moren, timer) {
                let arrs = []
                arrs.push(id, name, phone, address, moren, timer)
                this.$router.push({
                    path: '/edit',
                    query: {
                        arrs: arrs
                    }
                })
            },
            goAdd() {
                this.$router.push('/addList')
            },
            goShop(id, name, phone, address, moren, timer) {
                let shops = []
                shops.push(id, name, phone, address, moren, timer)
                    // 数组转字符串
                let shopRess = JSON.stringify(shops)
                localStorage.setItem('shops', shopRess)
                this.$router.push({
                    path: '/shop',
                    name: 'shoplists',
                    params: {
                        shops: shops
                    }
                })
            },
            getAddMsg() {
                let data = {}
                apiGetUserAddress(data, true).then(res => {
                    if (Math.abs(res.Code) >= 600) {
                        this.noMsg = true
                    } else {
                        this.addList = res.Data
                        if (this.addList.length > 0) {
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
    .active {
        width: .62rem;
        height: .27rem;
        border-radius: .1rem;
        background: rgba(0, 0, 0, 0);
        float: left;
        color: rgba(0, 0, 0, 0)
    }
    
    .listBoss {
        height: 1.4rem;
        padding-top: 0.1rem;
        width: calc(100% - .3rem);
        margin: 0 auto;
        border-bottom: 1px solid #d7d7d7
    }
    
    .listBoss .divOne {
        float: left;
        margin-top: .2rem
    }
    
    .listBoss .divOne span {
        display: block;
    }
    
    .listBoss .divOne .mo {
        height: 0.27rem;
        border-radius: 0.1rem;
        background: #f0b9bf;
        color: #fff;
        text-align: center;
        font-size: 0.2rem;
        margin-top: .1rem;
        padding: 0 8px;
    }
    
    .listBoss .divTwo {
        float: left;
        margin-left: .1rem
    }
    
    .listBoss .divTwo span {
        display: block;
    }
    
    .listBoss .divTwo .phone {
        line-height: 0.47rem;
        font-size: 0.25rem;
        color: #828282;
        margin-left: 0.25rem;
    }
    
    .listBoss .divTwo .dizhi {
        font-size: 0.26rem;
        color: #1f1f1f;
        line-height: 0.26rem;
        margin-left: 0.25rem;
        float: left;
        width: 4.4rem;
        overflow-wrap: break-word;
    }
    
    .listBoss .pThree {
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
<template>
    <div class="home-foot">
        <div style="height:.6rem;">
            <h1 class="home-foot-title">赛事</h1>
            <div class="home-foot-more"  @click="getMore">更多</div>
        </div>
        
        <!-- <div class="home-foot-show" v-show="gameWays">
            <span class="spanLeft">排位赛</span>
            <span class="spanRight">挑战赛</span>
        </div> -->
        <ul class="home-foot-ul">
            <li class="home-foot-ul-item">
                <p class="time">
                    <span>{{fristTime}}</span>
                    <span class="right">{{lastTime}}</span>
                </p>
                <p class="gameName">俄罗斯超级职业联赛</p>
                <ul class="teamList">
                    <li class="teamList-left">
                        <img class="teamList-left-img" src="" alt="">
                        <div class="teamList-left-div">
                            <p class="top">安迪马哈奇卡拉</p>
                            <p class="bot">1.13</p>
                        </div>
                    </li>
                    <li class="teamList-center">
                        <p class="top">平</p>
                        <p class="bot">1.23</p>
                    </li>
                    <li class="teamList-right">
                        <img class="teamList-right-img" src="" alt="">
                        <div class="teamList-right-div">
                            <p class="top">安迪马哈奇卡拉</p>
                            <p class="bot">1.13</p>
                        </div>
                    </li>
                </ul>
                <p>
                    胜{{winRate}} 平{{flatRate}} 负{{failRate}} 
                    预计可得奖金：<span>{{getMoney}}</span>元
                    <span class="btn">下注</span>
                </p>
            </li>
            <li class="home-foot-ul-item">
                <p class="time">
                    <span>{{fristTime}}</span>
                    <span class="right">{{lastTime}}</span>
                </p>
                <p class="gameName">俄罗斯超级职业联赛</p>
                <ul class="teamList">
                    <li class="teamList-left"></li>
                    <li class="teamList-center"></li>
                    <li class="teamList-right"></li>
                </ul>
                <p>
                    胜{{winRate}} 平{{flatRate}} 负{{failRate}} 
                    预计可得奖金：<span>{{getMoney}}</span>元
                    <span class="btn">下注</span>
                </p>
            </li>
            <li class="home-foot-ul-item">
                <p class="time">
                    <span>{{fristTime}}</span>
                    <span class="right">{{lastTime}}</span>
                </p>
                <p class="gameName">俄罗斯超级职业联赛</p>
                <ul class="teamList">
                    <li class="teamList-left"></li>
                    <li class="teamList-center"></li>
                    <li class="teamList-right"></li>
                </ul>
                <p>
                    胜{{winRate}} 平{{flatRate}} 负{{failRate}} 
                    预计可得奖金：<span>{{getMoney}}</span>元
                    <span class="btn">下注</span>
                </p>
            </li>
        </ul>
        
    </div>
</template>

<script>
import { apiGetMyMatchList } from '@/api/match.js';
export default {
    name: 'homeFoot',
    data() {
        return{
            gameWays: false,
            fristTime: '19:00',
            lastTime: '14:00',
            winRate: 1.10, //胜赔率
            flatRate: 0.08,
            failRate: 2.9,
            getMoney: 50,
        }
    },
    methods: {
        getMore() {
            this.gameWays = !this.gameWays;
        },
        matchList() {
            let data = {
                matchBetType: 2,
                index: 1,
                count: 5,
            }
            apiGetMyMatchList(data, true).then(res => {
            })
        }
    },
    mounted() {
        this.matchList();
    }
}
</script>
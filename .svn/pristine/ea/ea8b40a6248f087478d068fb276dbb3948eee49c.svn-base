<template>
    <main class="clubDividendWithdrawal">
        <div class="clubDividendWithdrawal-header" style="position:fixed;top: 0">
            <back class="back-icon img-he"></back>
            <h3>{{ $t("ClubBonusWithdrawal") }}</h3>
        </div>
        <div 
            class="clubDividendWithdrawal-main"
            v-infinite-scroll="load"
            infinite-scroll-disabled="busy"
        >
            <div class="dividendList">
                <div class="noMissionBg" v-if="noMission">
                    <img class="noMission" src="../../assets/noInfo.png" alt="">
                    <p>{{ $t("NoInformation") }}</p>  <!-- 【 暂无信息 】 -->
                </div>
                <div class="dividendList-box" v-for="(item, itemI) in clubBonusRptList" :key="itemI">
                    <div class="dividendList-box-icon" alt></div>
                    <div class="dividendList-box-content">
                    <div class="content-box">
                        <div class="content-box-title">{{ $t("BonusAmount") }} : {{ item.SumBonus }}</div>
                        <!-- 【 时间 】 -->
                        <div class="content-box-statement">{{ item.DateStr }}</div>
                    </div>
                    <!-- 【 提取 】 -->
                    <div class="dividendList-btn" @click="isDividendBoxOpen = true,itemId = item.Id">{{ $t('Extract') }}</div> 
                    </div>
                </div>

                <!-- <div class="more">
                    查看更多
                </div>-->
            </div>
            <div style="font-size: .24rem;text-align:center;line-height: .48rem" v-if="isLoading">
                {{ $t('WipeLoading') }}...  <!-- 【 加载中… 】 -->
            </div>
        </div>
    <!-- 確定領取紅利彈窗 -->
    <transition name="fade">
		<model v-if="isDividendBoxOpen"></model>
	</transition>
	<transition name="fade">
	<div class="fancy-box" v-if="isDividendBoxOpen">
		<img src="../../assets/club/ticket-header.png" alt="">
        <div class="fancy-box-content">
            <p>{{ $t('ExtractDividends') }}?</p>
        </div>
		<div class="fancy-box-btn">
			<div class="fancy-box-btn-confirm" @click="dividend(itemId)">{{ $t('Confirm') }}</div>
			<div class="fancy-box-btn-cancel" @click="isDividendBoxOpen = !isDividendBoxOpen">{{ $t('Cancel') }}</div>
		</div>
	</div>
	</transition>
    </main>
</template>
<script>
import back from "@/components/Botton/back.vue";
import model from "@/components/model";
import { apiGetClubBonusRpt, apiReceiveBonus } from "@/api/Club";
export default {
    components: {
        back,
        model
    },
    data () {
        return {
            clubBonusRptList: [],
            isLoading: true,
            noMission: false,
            busy: false,
            IndexNum: 1,
            isDividendBoxOpen: false,
            itemId: "",
            tatolPages: 1
        }
    },
    methods:{
        load() {
        this.busy = true;
        let data = {
            index: this.IndexNum,
            count: 10
        };
        this.getClubBonusRpt(data);
        },
        getClubBonusRpt(Data) {
            apiGetClubBonusRpt(Data ,true).then(res =>{
                if(res.data.Data.length == 0 || Math.abs(res.Code) >= 600){
                    this.isLoading = false;
                    this.busy = true;
                    if (this.clubBonusRptList.length == 0) {
                        
                        this.noMission = true;
                    }
                }else {
                    this.tatolPages = res.data.TatolPages;
                    this.busy = false;
                    if (this.IndexNum == res.data.TatolPages) {
                        this.busy = true;
                    }
                    this.isLoading = false;
                    for (let i = 0; i < res.data.Data.length; i++) {
                        this.clubBonusRptList.push(res.data.Data[i]);
                    }
                    this.IndexNum++;
                    
                }
            })
        },
        dividend(Id) {
            let dividendData = {
                rptId: Id
            }
            apiReceiveBonus(dividendData, true).then(res => {
                if(Math.abs(res.Code) >= 600) {
                    let vm = this;
                    const m = vm.$message({
                        message: res.data.message,
                        duration: 3000,
                        type: "error",
                        center: true
                    });
                    setTimeout(() => {m.close()}, 2000);
                    this.isDividendBoxOpen = false;
                    return
                }else {
                    let vm = this;
                    const m = vm.$message({
                        message: res.data.message,
                        duration: 3000,
                        type: "success",
                        center: true
                    });
                    setTimeout(() => {m.close()}, 2000);
                    this.isLoading = true;
                    this.clubBonusRptList= [];
                    this.IndexNum = 1;
                    let data = {
                        index: this.IndexNum,
                        count: 10
                    };
                    this.getClubBonusRpt(data);
                    this.isDividendBoxOpen = false;
                }
            })
        }
    }
}
</script>
<template>
    <div class="cash-flow-log">
        <div class="cash-flow-log-header">
            <div class="cash-flow-log-header-wrap">
                <back class="back-icon img-he"></back>
                <h3>{{ $t('CashFlowLog') }}</h3>
                <!--金流日志-->
            </div>
            <div class="filter" @click="filter = !filter">
                <span>{{ $t("Filter") }}</span
                ><!--篩選-->
            </div>
        </div>

        <!--篩選頁-->
        <div class="filter-wrap" :class="{ popLeftIn: filter }">
            <div class="back-cash-flow-log-list-wrap" @click="filter = false">
                <div class="back-cash-flow-log-list"></div>
                <!-- 回金流日志 -->
                <p>{{ $t("BackCashFlowLog") }}</p>
            </div> 
            <ul class="category-wrap">
                <li class="category-list" @click="clickType(0)">
                    <p>{{ $t('All') }}</p>
                </li>
                <li class="category-list" v-for="item in cashFlowCategory" @click="clickType(item.Id)">
                    <p>{{ item.Name }}</p>
                </li>
            </ul>
        </div>

        <ul v-if="!filter" class="cash-flow-log-content" v-infinite-scroll="load" infinite-scroll-disabled="busy" infinite-scroll-immediate="immediate">
            <li class="cash-flow-log-list" v-for="item in cashFlowLog">
                <img class="icon" src="../../assets/myself/lingdang_03.png">
                <div class="cash-flow-log-list-text">
                    <div class="title">{{ item.TypeName }}</div>
                    <div class="date">{{ item.CreateTime }}</div>
                </div>
                <div class="amount">
                    <span v-if="item.Amount > 0">+</span>
                    {{ item.Amount }}
                </div>
            </li>
            <!-- 【 加载中… 】 -->
            <li style="font-size: .24rem;text-align:center;line-height: .48rem" v-if="loading">
                {{ $t('WipeLoading') }}...  
            </li>
            <!-- 【 暂无数据 】 -->
            <div class="no-Data" v-if="noData == true">
                <p>{{ $t("NoData") }}</p>
            </div>
        </ul>

    </div>
</template>
<script>
import back from "@/components/Botton/back.vue";
import { apiGetMemLogTypes, apiGetMemFundLogs } from "@/api/Club.js";
export default {
    components: {
        back
    },
    data() {
        return {
            filter:　false,
            typeId: "0",
            indexNum: 1,
            totalPages: "",
            count: 5,
            cashFlowLog: [],
            cashFlowCategory: [],
            busy: false,
            immediate: false,
            loading: false,
            noData: false,
        }
    },
    created() {
        this.getMemLogTypes();
        this.getMemFundLogs();
    },
    methods: {
        // 獲取類別列表
        getMemLogTypes() {
            let data = {
                rptId: 0
            }
            apiGetMemLogTypes(data, true).then(res => {
                if (res.Code == "600" || res.data.length == 0) {
                    this.loading = false;
                    this.noData = true;
                    return
                }
                this.cashFlowCategory = res.data;
            });
        },

        // 獲取金流列表
        getMemFundLogs() {
            this.loading = true;
            this.noData = false;
            let data = {
                typeId: this.typeId,
                index: this.indexNum,
                count: 10 
            };
            apiGetMemFundLogs(data, true).then(res => {
                if (res.Code == "600" || res.data.Data.length == 0) {
                    this.loading = false;
                    this.noData = true;
                    return
                }
                this.loading = false;
                this.noData = false;
                this.cashFlowLog = res.data.Data;
                this.totalPages = res.data.TatolPages;
            });
        },

        // 點選類別
        clickType(typeId) {
            this.cashFlowLog = [];
            this.indexNum = 1;
            this.typeId = typeId;
            this.getMemFundLogs();
            this.filter = false;
        },

        // 無限加載
        load() {
            console.log(this.totalPages)
            if(this.indexNum >= this.totalPages) {
                return
            }
            this.busy = true;
            this.indexNum++;
            let data = {
                typeId: this.typeId,
                index: this.indexNum,
                count: 10 
            };
            this.loading = true;
            apiGetMemFundLogs(data, true).then(res => {
                if (res.Code == "600" || res.data.Data.length == 0) {
                    this.loading = false;
                    this.busy = true;
                    return
                } else {
                    res.data.Data.forEach(el => {
                        this.cashFlowLog.push(el);
                        this.busy = false;
                    });
                    this.loading = false;
                    this.noData = false;
                }
            });
        }
    },
}
</script>
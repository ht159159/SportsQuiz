<template>
    <main class="detail">
        <div class="detail-header" style='position: fixed; top: 0'>
            <back class='back-icon img-he'></back>
            <h3>资讯</h3>
        </div>
        <div class="detail-content" style='margin-top: 1.1rem'>
            <div class="title">
                <p class="title-big">{{list[0].Title}}</p><br>
                <p class="title-time">{{list[0].CreateTime}}</p><br>
                <div class="wen" v-html='list[0].Content'>

                </div>
            </div>
        </div>
    </main>
</template>

<script>
import { apiGetNewsDetailsList } from '@/api/News.js'
import back from "@/components/Botton/back.vue";
    export default{
           components: {
                back
            },
    data() {
        return{
            list: [{
                Title: '',
                Content: ''
            }],
            Id: '',
        }
    },
    methods: {
        goBack() {
            this.$router.go(-1);
        }
    },
    created() {
        this.Id = this.$route.params.id;
        let data = {
            newsTypeId: 1,
            id: this.Id,
            index: 1,
            count: 10
        }
        apiGetNewsDetailsList(data, true).then(res =>{
            this.list = res
        })
    }
}
</script>

<style>
    .wen p{
        line-height: .48rem;
    }
</style>
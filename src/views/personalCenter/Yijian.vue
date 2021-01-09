<template>
    <main class="yijian">
        <div class="yijian-header">
            <img class="img-he" src="@/assets/back.png" alt="" @click="goBack">
            <h3>意见反馈</h3>
        </div>
        <div class="yijian-text">
            <el-input
            type="textarea"
            :rows="2"
            placeholder="请输入内容"
            v-model="textarea">
            </el-input>
            <div class="divdiv" @click="sure">确认提交</div>
        </div>
    </main>
</template>

<script>
import { apiAddFeedback } from '@/api/FeedB.js'
import Vue from 'vue';
import { Toast,Notify  } from 'vant';

Vue.use(Toast).use(Notify);
export default {
    data() {
        return{
            textarea: ''
        }
    },
    methods: {
        goBack() {
            this.$router.go(-1)
        },
        sure() {
            let data = {
                // FeedbackId: null,
                FeedbackTypeId: null,
                FeedbackContent: this.textarea,
                CreationTime: new Date(),
                LastModifyTime: "2019-10-14T08:05:22.363Z"
            }
            apiAddFeedback(data, true).then(res => {
                if(this.textarea === '') {
                     this.$message({
                        message: '反馈内容不能为空',
                        type: 'success',
                        center: true,
                        duration: 800
                    });
                    
                } else if(res.IsSuccess) {
                    Toast.success({
                        message: '反馈提交成功',
                        duration: 1000
                    });
                    this.textarea = ''
                    // ，我会回尽快给您反馈
                } else {
                    Toast.fail({
                        message: '意见提交失败',
                        duration: 1000
                        });
                }
            })
        }
    }
}
</script>

<style>
.el-textarea__inner{
    width: calc(100% - .5rem);
    margin: 0 auto;
    height: 3.44rem;
    margin-top: .6rem;
    display: block;
}
.divdiv{
    height: .8rem;
    width: 6.46rem;
    background: linear-gradient(to right, #e73a51, #dc3849);
    text-align: center;
    font-size: .24rem;
    color: #fff;
    line-height: .8rem;
    margin: .7rem auto;
    border-radius: .4rem;
    box-shadow: 1px 2px 3px #e3bbbf;
}
</style>
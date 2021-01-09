//news请求
import { apiGetNewsList, apiGetNewsDetailsList } from '@/api/News.js';

import { apiAddEditMemAddress, apiGetUserAddress, apiGetUserInfo } from '@/api/User.js'
const news = {
    //库
    state: {
        //新闻列表
        newsList: [],
        //收货地址列表
        addressList: [],
        //新增地址列表
        newAddress: [],
        rankId: '',
    },
    // 得到state内的值
    getters: {

    },
    //更新getters内的值  同步
    mutations: {
        changeNewsList(state, payload) {
            //payload是从组件中传来的参数
            state.newsList = payload;
        },
        changeAddressList(state, payload) {
            state.addressList = payload
        },
        changeNewAddress(state, payload) {
            state.newAddress = payload
        },
        // changeRankId(state, payload) {
        //     state.rankId = payload
        // }
    },
    //异步请求数据
    actions: {
        //获取新闻列表
        asyncGetNewsList(context, payload) {
            apiGetNewsList(payload, true).then(res => {
                //提交mutations里的方法
                context.commit('changeNewsList', res)
            })
        },
        //获取地址列表
        asyncGetAddressList(context) {
            let data = {}
            apiGetUserAddress(data, true).then(res => {
                if (res.Data.length > 0) {

                }
                context.commit('changeAddressList', res.Data)
            })
        },
        //新增地址列表
        asyncGetNewAddress(context, payload) {
            apiAddEditMemAddress(payload, true).then(res => {
                context.commit('changeNewAddress', res)
            })
        },
        //用户信息
        asyncGetUserInfo(context, payload) {
            apiGetUserInfo(payload, true).then(res => {
                context.state.rankId = res.RankId
            })
        }
    }
}


// 导出模块
export default news;
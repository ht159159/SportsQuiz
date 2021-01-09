import { apiGetUserAddress, apiAddEditMemAddress } from '@/api/User.js'

const address = {
    // 库
    state: {
        addressList: [],
        addAddress: []
    },
    // 改变state内的值
    mutations: {
        // 地址列表
        changeAddressList(state, payload) {
            state.addressList = payload;
        }
    },
    //异步请求数据
    actions: {
        asyncChangeAddressList(context, payload) {
            apiGetUserAddress(payload, true).then(res => {
                //提交mutations里的方法
                context.commit('changeAddressList', res.Data)
            })
        }
    }
}

export default address
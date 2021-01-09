<template>
  <main class="self">
    <div class="self-header" style="position: fixed;top: 0;">
      <back class="back-icon img-he"></back>
      <h3>{{ $t('Profile') }}</h3>  <!-- 【 个人讯息 】 -->
    </div>
    <ul
      class="self-ul"
      style="-webkit-user-select:text !important;margin-top: 1.1rem"
    >
      <!-- <li class="self-ul-item">
                <span class="self-ul-item-span">姓名</span>
                <input class="self-ul-item-input" type="text" v-model="msgList.UName" readonly>
            </li> -->
      <li class="self-ul-item">
        <span class="self-ul-item-span">{{ $t('Nickname') }}</span>  <!-- 【 昵称 】 -->
        <!-- <input style="overflow:hidden;-webkit-user-select:text !important;" class="self-ul-item-input" type="text" v-model="selfNickName" placeholder="修改个性昵称"> -->
        <el-input
          style="padding: 0 .5rem"
          class="input"
          v-model="selfNickName"
          :placeholder="$t('EditNickName')"
        ></el-input>
        <!-- <img class="imgIcon" src="@/assets/myself/xiugai.png" alt="" @click="nickNameBox"> -->
      </li>
      <li class="self-ul-item">
        <span class="self-ul-item-span">{{ $t('Mobile') }}</span>  <!-- 【 手机号码 】 -->
        <!-- <input style="overflow:hidden;-webkit-user-select:text !important;" class="self-ul-item-input" type="text" v-model="selfPhone" readonly> -->
        <el-input
          style="padding: 0 .5rem;"
          readonly
          class="input"
          v-model="selfPhone"
        ></el-input>
        <!-- <img class="imgIcon" src="@/assets/myself/xiugai.png" alt="" @click="phoneBox"> -->
      </li>
      <li class="self-ul-item" style="-webkit-user-select:text !important;">
        <span class="self-ul-item-span">{{ $t('Email') }}</span>  <!-- 【 邮箱 】 -->
        <!-- <input style="overflow:hidden;-webkit-user-select:text !important;" class="self-ul-item-input" type="text" v-model="selfEmail" placeholder="请填写邮箱"> -->
        
        <!-- 【 请填写邮箱 】 -->
        <el-input
          style="padding: 0 .5rem"
          class="input"
          v-model="selfEmail"
          :placeholder="$t('FillMailbox')"
        ></el-input>
        <!-- <img class="imgIcon" src="@/assets/myself/xiugai.png" alt="" @click="emailBox"> -->
      </li>
      <li class="self-ul-item">
        <span class="self-ul-item-span">{{ $t('Gendere') }}</span>  <!-- 【 性别 】 -->
        <div class="righDiv">
          <p
            :style="{ background: gender == 1 ? '#6eb5ea' : '#aaa' }"
            @click="getBg"
          >
            <span
              style="float: left; width: .42rem; height: .42rem; background: #fff; border-radius: 50%;margin-top: .04rem;margin-left: .04rem;"
            >
              <img
                style="display: inline-block; width: .3rem; height: .3rem;margin: .05rem"
                :src="gender == 1 ? nanHea : nanHeaA"
                alt=""
              />
            </span>
            <span class="zi">{{ $t('Male') }}</span>  <!-- 【 男 】 -->
          </p>
          <p
            style="margin-left: .3rem;"
            :style="{ background: gender == 0 ? '#ff3ec9' : '#aaa' }"
            @click="getBg1"
          >
            <span
              style="float: left; width: .42rem; height: .42rem; background: #fff; border-radius: 50%;margin-top: .04rem;margin-left: .04rem;"
            >
              <img
                style="display: inline-block; width: .3rem; height: .3rem;margin: .05rem"
                :src="gender == 1 ? nvHea : nvHeaA"
                alt=""
              />
            </span>
            <span class="zi">{{ $t('Female') }}</span>  <!-- 【 女 】 -->
          </p>
        </div>
      </li>
      <li class="self-ul-item" style="height:2.8rem">
        <ul class="imgList" v-show="gender == 1">
          <!-- <li @click='getNumMan(index)' v-for="(item,index) in imgList" :key="index">
                        <img :src="item" alt="">
                    </li> -->
          <li
            @click="getNumMan(item.Id, item.M)"
            v-for="(item, index) in manList"
            :key="index"
          >
            <van-image round width="1rem" height="1rem" :src="item.M" />
          </li>
        </ul>
        <ul class="imgList" v-show="gender == 0">
          <!-- <li @click='getNumWoman(index)' v-for="(item,index) in imgList2" :key="index">
                        <img :src="item" alt="">
                    </li> -->
          <li
            @click="getNumWoman(item.Id, item.W)"
            v-for="(item, index) in manList"
            :key="index"
          >
            <van-image round width="1rem" height="1rem" :src="item.W" />
          </li>
        </ul>
      </li>
      <li class="self-ul-item" style="height: 2.2rem;border: 0">
        <p class="bigp">
          <img :src="num" alt="" />
        </p>
      </li>

      <!-- <li class="self-ul-item" style="-webkit-user-select:text !important;">
                <span class="self-ul-item-span">地址</span>
                <el-input style="padding: 0 .5rem" class="input" v-model="selfAddress" placeholder="请填写地址"></el-input> 
            </li> -->
    </ul>
    <!-- 昵称弹出框 -->
    <div class="phoneBox" v-show="nickNameB">
      <p class="phoneBox-p">
        <span class="phoneBox-p-span">{{ $t('EditNickName') }}</span>  <!-- 【 修改个性昵称 】 -->
        <img
          @click="cancelNick"
          class="phoneBox-p-img"
          src="@/assets/myself/false.png"
          alt=""
        />
      </p>
      <div class="phoneBox-div">
        <p class="phoneBox-div-p">
          <span class="phoneBox-div-p-span">{{ $t('Nickname') }}</span>  <!-- 【 昵称 】 -->
          <input
            style="overflow:hidden;"
            class="phoneBox-div-p-input"
            v-model="newNiceName"
            type="text"
            :placeholder="$t('SetANickName')"
          />
        </p>
        <button class="phoneBox-div-botton">{{ $t('Save') }}</button>  <!-- 【 保存 】 -->
      </div>
    </div>
    <!-- email弹出框 -->
    <div class="phoneBox" v-show="emailB">
      <p class="phoneBox-p">
        <span class="phoneBox-p-span">{{ $t('EditMail') }}</span>  <!-- 【 修改邮箱 】 -->
        <img
          @click="cancelNick"
          class="phoneBox-p-img"
          src="@/assets/myself/false.png"
          alt=""
        />
      </p>
      <div class="phoneBox-div">
        <p class="phoneBox-div-p">
          <span class="phoneBox-div-p-span">{{ $t('Nickname') }}</span>  <!-- 【 昵称 】 -->
          <input class="phoneBox-div-p-input" v-model="newEmail" type="text" />
        </p>
        <button
          class="phoneBox-div-botton"
          style="box-shadow: rgb(140, 125, 127) 6px 6px 6px;"
        >
          {{ $t('Save') }}  <!-- 【 保存 】 -->
        </button>
      </div>
    </div>
    <!-- 手机弹出框 -->
    <div class="phoneBox" v-show="phoneB">
      <p class="phoneBox-p">
        <span class="phoneBox-p-span">{{ $t('EditAddress') }}</span>  <!-- 【 修改地址信息 】 -->
        <img
          @click="cancel"
          class="phoneBox-p-img"
          src="@/assets/myself/false.png"
          alt=""
        />
      </p>
      <div class="phoneBox-div">
        <p class="phoneBox-div-p">
          <span class="phoneBox-div-p-span">{{ $t('Mobile') }}</span>  <!-- 【 手机号码 】 -->
          <input class="phoneBox-div-p-input" v-model="newPhone" type="text" />
        </p>
        <button
          class="phoneBox-div-botton"
          style="box-shadow:6px 6px 6px #8c7d7f"
        >
          {{ $t('Save') }}  <!-- 【 保存 】 -->
        </button>
      </div>
    </div>
    <!-- 地址弹出框 -->
    <div class="addressBox" v-show="addressB">
      <p class="addressBox-p">
        <span class="addressBox-p-span">{{ $t('ChangeMobile') }}</span>  <!-- 【 修改手机号码 】 -->
        <img
          @click="cancelAdd"
          class="addressBox-p-img"
          src="@/assets/myself/false.png"
          alt=""
        />
      </p>
      <div class="addressBox-div">
        <p class="addressBox-div-p">
          <span class="addressBox-div-p-span">{{ $t('Receiver') }}</span>  <!-- 【 称呼 】 -->
          <input class="addressBox-div-p-input" v-model="accept" type="text" />
        </p>
        <p class="addressBox-div-p1">
          <span class="addressBox-div-p1-span">{{ $t('DetailAddress') }}</span>  <!-- 【 详细地址 】 -->
          <input
            class="addressBox-div-p1-input"
            v-model="detailAdd"
            type="text"
          />
        </p>
        <button class="addressBox-div-botton" @click="addressSave">{{ $t('Save') }}</button>  <!-- 【 保存 】 -->
      </div>
    </div>
    <!-- <button class="changeBtn" @click="selfSave">保存</button> -->
    <button @click="selfSave" class="changeBtn">{{ $t('Save') }}</button>  <!-- 【 保存 】 -->
    <!-- <el-button type="text" @click="selfSave">保存</el-button> -->
  </main>
</template>

<script>
import {
  apiGetUserInfo,
  apiUpdateUserInfo,
  apiCheckVipGrade,
  apiGetVipImgHeads
} from "@/api/User.js";
// import Notify from 'path/to/vant-weapp/dist/notify/notify';
import back from "@/components/Botton/back.vue";
export default {
  name: "self",
  inject: ["reload"], //注入reload方法
  components: {
    back
  },
  data() {
    return {
      warning: false,
      phoneB: false,
      addressB: false,
      nickNameB: false,
      emailB: false,
      selfName: "张某某",
      selfNickName: "张某某",
      selfPhone: "17775207577",
      selfEmail: "1040631720@qq.com",
      selfAddress: "上海市浦东新区",
      accept: "", //接收人
      detailAdd: "", //详细地址
      newPhone: "", //修改电话号码
      newNiceName: "", //修改昵称
      newEmail: "", //修改电子邮箱
      msgList: {},
      bgColor1: "#6eb5ea",
      bgColor2: "#aaaaaa",
      changeBg: true,
      imgList: [
        require("@/assets/man_01.png"),
        require("@/assets/man_02.png"),
        require("@/assets/man_03.png"),
        require("@/assets/man_04.png")
      ],
      imgList2: [
        require("@/assets/woman_01.png"),
        require("@/assets/woman_02.png"),
        require("@/assets/woman_03.png"),
        require("@/assets/woman_04.png")
      ],
      manList: [],
      womanList: [],
      // num: require('@/assets/bigman_01.png'),
      num: "",
      gender: 1,
      nanHea: require("@/assets/male_1.png"),
      nanHeaA: require("@/assets/male.png"),
      nvHea: require("@/assets/female.png"),
      nvHeaA: require("@/assets/female_1.png"),
      getId: ""
    };
  },
  methods: {
    getImg() {
      // let data = {}
      // apiGetVipGrade(data, true).then(res => {
      //     this.womanList.push(res.WomanImgHead);
      //     this.manList.push(res.ManImgHead)
      //     this.num = this.manList[0]
      // })
    },
    goBack() {
      this.$router.go(-1);
    },
    phoneBox() {
      this.phoneB = true;
    },
    nickNameBox() {
      this.nickNameB = true;
    },
    emailBox() {
      this.emailB = true;
    },
    // 地址弹出框
    addressBox() {
      this.addressB = true;
    },
    //地址修改保存
    addressSave() {
      let data = {
        UName: this.accept,
        URedeemAddress: this.detailAdd
      };
      apiUpdateUserInfo(data, true).then(res => {
        if (Math.abs(res.Code) >= 600) {
          let vm = this;
          const m = vm.$message({
            message: res.Message,
            duration: 3000,
            type: "error",
            center: true
          });
          setTimeout(() => m.close(), 2000);
        } else if (res.IsSuccess) {
            this.addressB = false;
            this.reload(); //直接调用该方法
        }
      });
    },
    cancel() {
      this.phoneB = false;
    },
    cancelAdd() {
      this.addressB = false;
    },
    cancelNick() {
      this.nickNameB = false;
      this.emailB = false;
    },
    selfSave() {
      if (this.selfNickName == "") {
        this.Alert.showMsg("昵称为必填选项", "warning", 1200, true, true);
        return;
      }
      let data = {
        UNickName: this.selfNickName,
        URedeemAddress: this.selfAddress,
        UEmail: this.selfEmail,
        RankId: this.getId,
        Gander: this.gender
      };
      if (data.UNickName == null) {
        this.Alert.showMsg(this.$t("NickNameEmpty"), "warning", 1200, true, true);  // 【 昵称为必填项 】
        return;
      }
      // if (data.RankId == "") {
      //   this.Alert.showMsg(this.$t("SelectAvatar"), "warning", 1200, true, true);  // 【 选择需要修改的头像 】
      //   return;
      // }
      apiUpdateUserInfo(data, true).then(res => {
        if (Math.abs(res.Code) >= 600){
          this.Alert.showMsg(res.Message, "error", 1200, true, true);
          return;
        };
        this.getMsg();
        this.addressB = false;
        this.Alert.showMsg(this.$t("Modify_Success"), "success", 1200, true, true);  // 【 修改成功 】
        this.reload(); //直接调用该方法
        this.$router.push('/myself')
      });
    },
    getMsg() {
      let data = {};
      apiGetUserInfo(data, true).then(res => {
        //有token要加ture
        this.msgList = res;
        this.selfPhone = res.UPhoneNumber;
        this.selfAddress = res.URedeemAddress;
        this.selfNickName = res.NickName;
        this.selfEmail = res.Email;
        this.num = res.UImg;
        this.gender = res.Gender;
      });
    },
    getBg() {
      this.gender = 1;
      this.num = this.msgList.UImg;
    },
    getBg1() {
      this.gender = 0;
      this.num = this.msgList.UImg;
    },
    getNumMan(id, img) {
      this.getId = id;
      let data = {
        RankId: id
      };
      apiCheckVipGrade(data, true).then(res => {
        if (res.IsSuccess) {
          this.num = img;
        } else {
          this.Alert.showMsg(res.message, "warning", 1200, true, true);
        }
      });
      // switch (index) {
      //     case 0:
      //         this.num = require('@/assets/bigman_01.png')
      //         break;
      //     case 1:
      //         this.num = require('@/assets/bigman_02.png')
      //         break;
      //     case 2:
      //         this.num = require('@/assets/bigman_03.png')
      //         break;
      //     case 3:
      //         this.num = require('@/assets/bigman_04.png')
      //         break;
      // }
    },
    getNumWoman(id, img) {
      this.getId = id;
      let data = {
        RankId: id
      };
      apiCheckVipGrade(data, true).then(res => {
        if (res.IsSuccess) {
          this.num = img;
        } else {
          this.Alert.showMsg(res.message, "warning", 1200, true, true);
        }
      });
    },
    getVipimgs() {
      let data = {};
      apiGetVipImgHeads(data, true).then(res => {
        this.manList = res;
        // this.womanList = womanL;
      });
    }
  },
  mounted() {
    this.getMsg();
    this.getImg();
    this.getVipimgs();
  }
};
</script>

<style>
.el-button {
  display: block;
  border: 0;
  width: 6.82rem;
  height: 0.8rem;
  border-radius: 0.6rem;
  background: linear-gradient(to right, #e73a51, #dc3849);
  color: #fff;
  margin: 0 auto;
  margin-top: 0.71rem;
  outline: none;
  box-shadow: 1px 4px 6px #e6c6c9;
}

.el-input {
  width: 4rem;
  border: 0;
}

.input .el-input__inner {
  display: inline-block;
  width: 4rem;
  font-size: 0.24rem;
  border: 0;
  padding: 0;
  height: 34px;
}
</style>

<style scoped></style>

<template>
  <main class="clubAdPutIn">
    <div class="clubAdPutIn-header" style="position:fixed;top: 0">
      <back class="back-icon img-he"></back>
      <h3>{{ $t("Advertising") }}</h3>
    </div>

    <div class="club-Box">
      <!-- <div class="noMissionBg">
        <img class="noMission" v-if="noMission" src="../../assets/noInfo.png" alt />
        <p>{{ $t("NoInformation") }}</p>
      </div> -->

      <!-- 發布廣告 -->
      <div class="createSet">
        <div class="setField">
          <div class="title">
            <div class="title-list"></div>
            <p>
              {{ $t("PlaceAd") }}
              <!-- <span class="required">*</span> -->
            </p>
          </div>
          <div class="uploadImg">
            <div v-if="!upImg" class="uploadIcon"></div>
            <div v-if="!upImg" class="uploadContent">{{ $t("UploadYourClubLogo") }}</div>
            <div v-if="!upImg" class="uploadContent">{{ $t("RecommendedImageSize") }}</div>
            <img id="demo" alt="">
            <input type="file" class="imgInput" name="saveFile" @change="tirggerFile($event)"/>
          </div>
          <div class="changeAdTitle">{{ $t("PleaseSelectAd") }}</div>
          <el-checkbox-group v-model="checkList" border>
            <el-checkbox v-for="(item, i) in typeList" :key=i class="chooseRace" border :label='item.typeName' @change="bindCheckBox(i)">
            </el-checkbox>
            <!-- <el-checkbox class="chooseRace" border :label='$t("Popular")'></el-checkbox> -->
          </el-checkbox-group>
          <div class="uploadRulesBox">
            <div class="uploadRules">
              <!-- <div class="uploadRulesNumber">1</div> -->
              <div class="uploadRulesContent">{{ $t("AdvertisingPriceRules") }} : <br>
                {{ $t("AdvertisingPriceRulesContent") }}<br>
                {{ $t("Top") }}：{{ recommendPrice }}{{ $t("Coins") }}/{{ $t("Day") }}<br>
                {{ $t("Popular") }}：{{ popularPrice }}{{ $t("Coins") }}/{{ $t("Day") }}
              </div>
            </div>
            <!-- <div class="uploadRules">
              <div class="uploadRulesNumber">2</div>
              <div>{{ $t("UploadRuleDescription") }}</div>
            </div> -->
          </div>
        </div>
      </div>
    </div>
    <div class="btnBox">
      <button class="changeBtn" @click="clubAdPutInSubmit">{{ $t("ConfirmSubmission") }}</button>
      <button class="changeBtn depositBtn" @click="deposit">{{ $t("Deposit") }}</button>
    </div>
  </main>
</template>

<script>
import back from "@/components/Botton/back.vue";
import { apiClubUpload, apiGetClubAdBaseConfing, apiSubmitClubAd } from "@/api/Club";
export default {
  components: {
    back,
  },
  data() {
    return {
      noMission: false,
      typeList:[
        {
          typeName:this.$t("Top"),
          price: 0
        },
        {
          typeName:this.$t("Popular"),
          price: 0
        }
      ],
      checkList: [],
      submitClubAdData:{
        ClubId:"",
        Type:"",
        Day:"",
        Img:"",
        Amount:"",
        UName:""
      },
      upImg: false,
      recommendPrice:"",
      popularPrice:""
    };
  },

  created() {
    this.submitClubAdData.ClubId = localStorage.getItem("ClubId")
    this.submitClubAdData.UName = localStorage.getItem("uname")
  },
  mounted() {
    apiGetClubAdBaseConfing("", true).then(res => {
      this.recommendPrice = res.Data.RecommendPrice
      this.popularPrice = res.Data.PopularPrice
      this.typeList[0].price = res.Data.MaxDay * res.Data.RecommendPrice
      this.typeList[1].price = res.Data.MaxDay * res.Data.PopularPrice
      this.submitClubAdData.Day = res.Data.MaxDay
    })
  },
  methods: {
    // 图片上传功能
    tirggerFile (event) {
      let file = event.target.files[0]
      let imgSize = file.size
      
      var param = new FormData() // 创建form对象
      param.append('file', file, file.name) // 通过append向form对象添加数据
      param.append('type', '1') // 添加form表单中其他数据
      // console.log(param.get('file')) // FormData私有类对象，访问不到，可以通过get判断值是否传进去

      if (!event.target.files.length) return
      if (imgSize / 1024 > 10000) {
        this.$message({
          message: this.$t("PictureIsTooBig"),
          type: "warning",
          center: true,
          duration: 1200
        });
      } else {
        this.imgPreview(file)
      }
    },

    // 获取图片
    imgPreview (file, callback) {
      let _this = this // this指向问题，所以在外面先定义
      let config = {
        headers: { 'Content-Type': 'multipart/form-data' },
        contentType: false, //required
        processData: false // required
      }
      // 判断是否支持FileReader
      if (!file || !window.FileReader) return
      // 创建一个reader
      var reader = new FileReader()
      // 将图片转成base64格式
      reader.readAsDataURL(file)
      reader.onloadend = function () {
        let result = this.result
        let img = new Image()
        img.src = result
        // console.log('============未压缩图片===========')
        img.onload = function () {
          let data = _this.compress(img)
          _this.imgUrl = result
          let blob = _this.dataURItoBlob(data)

          // console.log('*******base64转blob对象******')
          let param = new FormData() // 创建form对象
          param.append('file', blob, file.name) // 通过append向form对象添加数据
          param.append('type', "clubad")

          apiClubUpload(param, config).then(res => {
            if (res.Success) {
              _this.$message({
                message: _this.$t("UploadSuccessfully"),
                type: "success",
                center: true,
                duration: 1200
              });
              //顯示圖片
              _this.upImg = true
              document.querySelector('#demo').setAttribute('src', result);
              _this.submitClubAdData.Img = file.name
            }else {
              _this.$message({
                message: _this.$t("UploadFailed"),
                type: "error",
                center: true,
                duration: 1200
              });
            }
          })
        }
      }
    },
    // 压缩图片
    compress (img) {
      let canvas = document.createElement('canvas')
      let ctx = canvas.getContext('2d')
      // let initSize = img.src.length
      let width = img.width
      let height = img.height
      canvas.width = width
      canvas.height = height
      // 铺底色
      ctx.fillStyle = '#fff'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.drawImage(img, 0, 0, width, height)

      // 进行最小压缩
      let ndata = canvas.toDataURL('image/jpeg', 0.1)
      // console.log('*******压缩后的图片大小*******')
      return ndata
    },
    dataURItoBlob (base64Data) {
      var byteString
      if (base64Data.split(',')[0].indexOf('base64') >= 0) byteString = atob(base64Data.split(',')[1])
      else byteString = unescape(base64Data.split(',')[1])
      var mimeString = base64Data
        .split(',')[0]
        .split(':')[1]
        .split(';')[0]
      var ia = new Uint8Array(byteString.length)
      for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i)
      }
      return new Blob([ia], { type: mimeString })
    },

    //廣告種類選擇
    bindCheckBox (i) {
      this.submitClubAdData.Type = i
      this.submitClubAdData.Amount = this.typeList[i].price
      if (this.checkList.length > 1) {
        this.checkList.splice(0, 1)
      }
      if (this.checkList.length == 0) {
        this.submitClubAdData.Type = ""
        this.submitClubAdData.Amount = ""
      }
    },

    clubAdPutInSubmit() {
      if(!this.upImg){
        this.$message({
          message: this.$t("UploadYourClubLogo"),
          type: "error",
          center: true,
          duration: 1200
        });
      }else if(this.submitClubAdData.Type === ""){
        this.$message({
          message: this.$t("PleaseSelectAd"),
          type: "error",
          center: true,
          duration: 1200
        });
      }else{
        apiSubmitClubAd(this.submitClubAdData, true).then(res =>{
          if(Math.abs(res.Code) >= 600) {
            this.$message({
              message: res.Message,
              type: "error",
              center: true,
              duration: 1200
            });
          } else {
            this.$message({
              message: res.Message,
              type: "success",
              center: true,
              duration: 1200
            });
            this.$router.push("/myAuthority");
          }
        })
      }
    },

    deposit() {
      this.$router.push("/recharge");
    }
  }
};
</script>

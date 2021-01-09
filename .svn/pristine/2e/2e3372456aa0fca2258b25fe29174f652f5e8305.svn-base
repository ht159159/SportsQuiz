<template>
  <main class="createClubSet">
    <div class="createClubRule-header" style="position:fixed;top: 0">
      <back class="back-icon img-he"></back>
      <h3>{{ $t("CreateClub") }}</h3>
    </div>

    <div class="club-Box">
      <!-- <div class="noMissionBg">
        <img class="noMission" v-if="noMission" src="../../assets/noInfo.png" alt />
        <p>{{ $t("NoInformation") }}</p>
      </div> -->
      <div class="createSet">
        <div class="setField">
          <div class="title">
            <div class="title-list"></div>
            <p>
              {{ $t("FillYourClub") }}
              <span class="required">*</span>
            </p>
          </div>
          <input type="text" class="setInformation" v-model="clubName" />
        </div>

        <div class="setField">
          <div class="title">
            <div class="title-list"></div>
            <p>
              {{ $t("FillYourClubSlogan") }}
              <span class="required">*</span>
            </p>
          </div>
          <input type="text" class="setInformation" v-model="clubSlogan" />
        </div>

        <div class="setField">
          <div class="title">
            <div class="title-list"></div>
            <p>
              {{ $t("FillYourFavoriteEvent") }}
              <span class="multipleChoice">({{ $t("MultipleChoice") }})</span>
            </p>
          </div>
          <!-- <div class="chooseRace">
            <img src="../../assets/club/club-chooseLogo.png" class="race">

          </div>-->
  <swiper ref="mySwiper" :options="swiperOptions">
    <swiper-slide v-for="(matchsListItem, matchsListItemI) in matchsList" :key=matchsListItemI>
      <el-checkbox-group v-model="checkList">
        <div class="push" v-if="matchsList[matchsListItemI].length < 1" style='font-size: .24rem;text-align:center;line-height: .48rem'>{{ $t("WipeLoading") }}</div>
        <el-checkbox class="chooseRace" v-for="(item,i) in matchsListItem" :key=i :label="item.MatchId">
          <img v-if="item.MatchImg" :src="item.MatchImg" class="race" />
          <img v-else src="@/assets/instead_logo1.png" alt="" class="sport-main-collapse-img">
          <p>{{ item.MatchName }}</p>
        </el-checkbox>
        <!-- <div class="push" v-if="push" style='font-size: .24rem;text-align:center;line-height: .48rem'>{{ $t("WipeLoading") }}</div>
        <div class="noMore" v-if="noMore" style='font-size: .24rem;text-align:center;line-height: .48rem'>没有更多了</div> -->
      </el-checkbox-group>
    </swiper-slide>
    <!-- <swiper-slide> 加載中..456.....</swiper-slide> -->
    <!-- <swiper-slide>Slide 1</swiper-slide>
    <swiper-slide>Slide 2</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
    <swiper-slide>Slide 4</swiper-slide>
    <swiper-slide>Slide 5</swiper-slide> -->
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>


          <!-- <el-checkbox-group v-model="checkList" v-infinite-scroll="onLoad" infinite-scroll-disabled="busy" infinite-scroll-immediate="immediate">
            <el-checkbox class="chooseRace" v-for="(item,i) in matchsList" :key=i :label="item.MatchId">
              <img v-if="item.MatchImg" :src="item.MatchImg" class="race" />
              <img v-else src="@/assets/instead_logo1.png" alt="" class="sport-main-collapse-img">
            </el-checkbox>
          <div class="push" v-if="push" style='font-size: .24rem;text-align:center;line-height: .48rem'>{{ $t("WipeLoading") }}</div>
          <div class="noMore" v-if="noMore" style='font-size: .24rem;text-align:center;line-height: .48rem'>没有更多了</div>
          </el-checkbox-group> -->
        </div>

        <div class="setField">
          <div class="title">
            <div class="title-list"></div>
            <p>
              {{ $t("UploadYourClubLogo") }}
              <span class="required">*</span>
            </p>
          </div>
          <div class="uploadRulesBox">
            <div class="uploadRules">
              <div class="uploadRulesNumber">1</div>
              <div class="uploadRulesContent">{{ $t("ClubLOGOuploadRules") }}</div>
            </div>
          </div>
          <div class="uploadImg">
            <div v-if="!upImg" class="uploadIcon"></div>
            <div v-if="!upImg" class="uploadContent">{{ $t("AddPictures") }}</div>
            <div v-if="!upImg" class="uploadContent">{{ $t("RecommendedImageSize") }}</div>
            <img id="demo" alt="">
            <input type="file" class="imgInput" name="saveFile" @change="tirggerFile($event)"/>
          </div>
        </div>
      </div>
    </div>
    <button class="changeBtn" @click="creat">{{ $t("ConfirmSubmission") }}</button>
  </main>
</template>

<script>
import back from "@/components/Botton/back.vue";
// import { apiGetMissionList, apiAddMission, apiReceiveMissionReward } from "@/api/mission.js";
// import { apiGetMatchs } from "@/api/match";
import { apiGetClubMatchs } from "@/api/ClubActivitys.js";
import { apiClubUpload, apiMemApplyClub } from "@/api/Club";
import { swiper, swiperSlide, directive } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  components: {
    back,
    swiper,
    swiperSlide
  },
  directives: {
    swiper: directive
  },
  data() {
    return {
      noMission: false,
      checkList: [],
      matchsList: [],
      busy: false,
      loading: false,
      push: true,
      IndexNum: 1,
      noMore: false,
      clubName: '',
      clubSlogan: '',
      upImg: false,
      getClubMatchsData:{
        matchTypeId: 2,
        index: 1,
        count: 8,
        havaPlay: true,
        matchItemTypeId: -1
      },
      totalPages: "",

      swiperOptions: {
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true
        },
        // Some Swiper option/callback...
      }
    };
  },

  created() {
    // this.getTaskList(this.categoryType);

  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted() {
    // console.log('Current Swiper instance object', this.swiper)
    apiGetClubMatchs(this.getClubMatchsData, true).then(res => {
      // this.swiper.appendSlide('<div class="swiper-slide">加載中.......</div>')
      this.totalPages = res.Data.TotalPages;
      for(let i = 0; res.Data.TotalPages>i; i++){
        this.matchsList.push([])
      };
      for(let i = 0; res.Data.Data.length>i; i++){
        this.matchsList[this.swiper.activeIndex].push(res.Data.Data[i])
      };
      this.getClubMatchsData.index++;
    })

    this.swiper.on('slideChange', ()=> { 
      // console.log(this.swiper.activeIndex); //滑动打印当前索引
      if(this.getClubMatchsData.index > this.totalPages) {
        return
      }
      this.onLoad(this.swiper.activeIndex);
    });
      //   let data1 = {
      //   matchTypeId: 2,
      //   index: 1,
      //   count: 10,
      //   havaPlay: true,
      //   matchItemTypeId: -1
      // };
      // apiGetMatchs(data1, true).then(res => {
      //   console.log(res)
      //   this.matchsList = res.Data;
      // });
  },
  methods: {
    creat () {
      if(this.clubName == ""){
        this.$message({
          message: this.$t("FillYourClub"),
          type: "error",
          center: true,
          duration: 1200
        });
      }else if(this.clubSlogan == ""){
        this.$message({
          message: this.$t("FillYourClubSlogan"),
          type: "error",
          center: true,
          duration: 1200
        });
      }else if(this.checkList.toString() == ""){
        this.$message({
          message: this.$t("FillYourFavoriteEvent"),
          type: "error",
          center: true,
          duration: 1200
        });
      }else if(localStorage.getItem("imgName") == ""){
        this.$message({
          message: this.$t("UploadYourClubLogo"),
          type: "error",
          center: true,
          duration: 1200
        });
      }else {
        let memApplyClubData = {
          ClubName: this.clubName,
          SloganLabel: this.clubSlogan,
          MatchId: this.checkList.toString()+",",
          ClubImg: localStorage.getItem("imgName"),
          UName: localStorage.getItem("uname")
        }
        apiMemApplyClub(memApplyClubData, true).then(res =>{
          if(res.Success){
            this.$message({
              message: res.Message,
              type: "success",
              center: true,
              duration: 1200
            });
            this.$router.push("/Myself");
          }else{
            this.$message({
              message: res.Message,
              type: "error",
              center: true,
              duration: 1200
            });
          }
        })
      }
    },
    onLoad(activeIndex) {
      // this.busy = true;
      //  let data1 = {
      //   matchTypeId: 2,
      //   index: this.IndexNum,
      //   count: 8,
      //   havaPlay: true,
      //   matchItemTypeId: -1
      // }
       apiGetClubMatchs(this.getClubMatchsData, true).then(res => {
        // if(res.Data.length == 0){
        //   this.swiper.appendSlide('<div class="swiper-slide">noMore.......</div>')
        //   this.noMore = true
        //   // this.push = false;
        //   return
        // }
        // this.swiper.appendSlide('<div class="swiper-slide">加載中.......</div>')
        for(let i = 0; res.Data.Data.length>i; i++){
          this.matchsList[activeIndex].push(res.Data.Data[i])
        }
        // for(let i = 0; res.Data.length>i; i++){
        //   this.matchsList.push(res.Data[i])
        //   this.busy = false;
        // }
        this.getClubMatchsData.index++
       })
    },
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
          param.append('type', "club")

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
              localStorage.setItem("imgName", file.name)
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
    }
  },
  destroyed() {
    localStorage.setItem("imgName","")
  }
};
</script>

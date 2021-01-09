<template>
  <main class="task">
    <div class="task-header" style="position:fixed;top: 0">
      <back class="back-icon img-he"></back>
      <h3>{{ $t('TaskList') }}</h3>  <!-- 【 任务列表 】 -->
    </div>

    <!-- 分頁切換 -->
    <div class="category">
      <div class="category-type" v-for="(type, index) in category" @click="getTaskList(index)">
        <p :class="{ 'category-type-active': categoryType == index }">{{ type }}</p>
      </div>
    </div>

    <!-- 分頁=推薦任務 -->
    <div class="recommend" v-if="categoryType == 0">
      <!-- 日常任務 -->
      <div class="noMissionBg">
        <img class="noMission" v-if="noMission" src="../assets/noInfo.png" alt="">
        <p>{{ $t("NoInformation") }}</p>  <!-- 【 暂无信息 】 -->
      </div>
      <div class="daily" v-if="dailyMissionList != null && dailyMissionList.length > 0">
        <div class="title">
          <div class="title_list"></div>
          <p>{{ $t('DailyTasks') }}</p>  <!-- 【 日常任务 】 -->
        </div>
        <div class="content">
          <div class="daily_mission" v-for="(item, index) in dailyMissionList" :class="{'readBg':item.ConditionType === 2, 'betBg':item.ConditionType === 1, 'storedBg':item.ConditionType === 4, 'lotteryBg':item.ConditionType === 3}" @click="alertBox(item)">
            <div class="daily_mission-name">{{ item.Name}}</div>
            <div class="daily_mission-reward">+{{ item.Reward}}</div>
            <div class="daily_mission-statement">
              {{ item.Description}}
            </div>
            <img
              class="content-icon"
              src="../assets/icons/halfArrow.png"
              alt
              srcset
            />
          </div>
        </div>
      </div>

      <!-- 进阶任务 -->
      <div class="advanced" v-if="specialMissionList != null && specialMissionList.length > 0">
        <div class="title">
          <div class="title-list"></div>
          <p>{{ $t('AdvancedTasks') }}</p>  <!-- 【 进阶任务 】 -->
        </div>
        <div class="mission">
          <div class="mission-box" v-for="(item, i) in specialMissionList" >
            <div class="mission-box-icon" alt></div>
            <div class="mission-box-content">
              <div class="content-box">
                <div class="content-box-title">{{item.Name}}</div>
                <div class="content-box-statement">{{item.Description}}</div>
              </div>
              <div class="mission-btn" @click="alertBox(item)">{{ $t('DoTask') }}</div>  <!-- 【 做任務 】 -->
            </div>
          </div>

          <!-- <div class="more">
            查看更多
          </div>-->
        </div>
      </div>

      <!-- 进阶任务 -->
      <div class="advanced" v-if="activityMissionList != null && activityMissionList.length > 0">
        <div class="title">
          <div class="title-list"></div>
          <p>{{ $t('ActiveTask') }}</p>  <!-- 【 活動任務 】 -->
        </div>
        <div class="mission">
          <div class="mission-box" v-for="(item, i) in activityMissionList">
            <div class="mission-box-icon" alt></div>
            <div class="mission-box-content">
              <div class="content-box">
                <div class="content-box-title">{{item.Name}}</div>
                <div class="content-box-statement">{{item.Description}}</div>
                <div class="content-box-statement">{{ $t('EndTime') }} : {{item.EndDate}}</div>  <!-- 【 结束时间 】 -->
              </div>
              <div class="mission-btn" @click="alertBox(item)">{{ $t('DoTask') }}</div>  <!-- 【 做任務 】 -->
            </div>
          </div>

          <!-- <div class="more">
            查看更多
          </div>-->
        </div>
      </div>
      <div style="font-size: .24rem;text-align:center;line-height: .48rem" v-if="isLoading">
        {{ $t('WipeLoading') }}...  <!-- 【 加载中… 】 -->
      </div>
    </div>

    <!-- 分頁=進行中任務 -->
    <div class="ongoing" v-if="categoryType == 1">
      <div class="noMissionBg">
        <img class="noMission" v-if="noMission" src="../assets/noInfo.png" alt="">
        <p>{{ $t("NoInformation") }}</p>  <!-- 【 暂无信息 】 -->
      </div>
      <div class="mission">
        <div class="mission-box" v-for="(item, i) in ongoingMissionList">
          <div class="mission-box-icon" alt></div>
          <div class="mission-box-content">
            <div class="content-box">
              <div class="content-box-title">{{item.Name}}</div>
              <div class="content-box-statement">{{item.Description}}</div>
              <div class="content-box-statement" v-if="item.MissionType === 3">{{ $t('EndTime') }} : {{item.EndDate}}</div>  <!-- 【 结束时间 】 -->
            </div>

            <div class="content-rightBox">
              <div class="mission-btn"  v-if="item.IsAward === 0">{{ $t('Processing') }}</div>  
               <div class="redBtn" v-if="item.IsAward === 1" @click="receive(item)">{{ $t('Receive') }}</div>
              <div class="content-rightBox-schedule"> {{item.Accumulated}} / {{item.Condition}}</div>
            </div>
          </div>
        </div>
      </div>
      <div style="font-size: .24rem;text-align:center;line-height: .48rem" v-if="isLoading">
        {{ $t('WipeLoading') }}...  <!-- 【 加载中… 】 -->
      </div>
    </div>

    <!-- 分頁=已完成任務 -->
    <div class="complete" v-if="categoryType == 2">
      <div class="noMissionBg">
        <img class="noMission" v-if="noMission" src="../assets/noInfo.png" alt="">
        <p>{{ $t("NoInformation") }}</p>  <!-- 【 暂无信息 】 -->
      </div>
      <div class="mission">
        <div class="mission-box" v-for="(item, i) in ongoingMissionList">
          <div class="mission-box-icon" alt></div>
          <div class="mission-box-content">
            <div class="content-box">
              <div class="content-box-title">{{item.Name}}</div>
              <p class="content-box-statement">{{item.Description}}<a><span class="coin-icon"></span><span>+{{ item.Reward}}</span></a></p>
            </div>
            <div class="mission-btn" v-if="item.IsAward === 1" @click="receive(item)">{{ $t('Receive') }}</div>
            <div class="mission-btn receive" v-if="item.IsAward === 0" >{{ $t('Received') }}</div>  <!-- 【 已领 】 -->
          </div>
        </div>
      </div>
      <div style="font-size: .24rem;text-align:center;line-height: .48rem" v-if="isLoading">
        {{ $t('WipeLoading') }}...  <!-- 【 加载中… 】 -->
      </div>
    </div>

    <!-- 提示弹窗 -->
    <transition name="fade" :duration="{ enter: 500, leave: 300 }">
      <div class="boxBig" v-show="confirmAlert" style="z-index: 1000;">
        <div class="box">
          <div class="head">
            <div>{{ $t('Task') }}</div>  <!-- 【 任务 】 -->
          </div>
          <div class="foot" style="-webkit-user-select:text !important;">
            <p v-if="!selectMission.IsComplete">{{ $t('GetTask') }}</p>  <!-- 【 是否确定领取此任务 】 -->
            <p v-else>{{ $t('ReceiveReward') }}</p>  <!-- 【 是否确定领取此奖励 】 -->
            <div class="commit" @click.stop="confirm" :disabled="isDisable">
              {{ $t('Confirm') }}  <!-- 【 确认 】 -->
            </div>
          </div>
        </div>
        <img
          @click="close"
          class="imgBB"
          src="@/assets/error_03.png"
          alt
        />
      </div>
    </transition>
  </main>
</template>

<script>
import back from "@/components/Botton/back.vue";
import { apiGetMissionList, apiAddMission, apiReceiveMissionReward } from "@/api/mission.js";
export default {
  components: {
    back
  },
  data() {
    return {
      category: [this.$t('RecommendedTasks'), this.$t('Processing'), this.$t('Completed')], //  【 推荐任务 】【 进行中 】【 已完成 】
      categoryType: 0,
      dailyMissionList: [],
      specialMissionList: [],
      activityMissionList: [],
      ongoingMissionList: [],
      confirmAlert: false,
      addMissionData: {
        missionId: ''
      },
      selectMission: '',
      ReceiveMissionRewardData: {
        umissionid: ''
      },

      // 防止连点
      isDisable: false,

      noMission: false,
      isLoading: false,
    };
  },

  created() {
    this.getTaskList(this.categoryType);
  },

  methods: {
    alertBox(i) {
      this.confirmAlert = true
      this.selectMission = i
      // 推荐任务
      if (!this.selectMission.IsComplete) {
        this.addMissionData.missionId = i.Id
      }

      // 已完成任务
      // if (this.selectMission.IsComplete) {
      //   this.ReceiveMissionRewardData.umissionid = i.UMissionId

      // }
    },

    confirm() {

      // 防止连点
      if(this.isDisable){
        return false;
      }
      this.isDisable = true

      // 推荐任务
      if (!this.selectMission.IsComplete) {
        apiAddMission(this.addMissionData, true).then(res => {
          this.Alert.showMsg('领取成功', 'success', 1200, true, true);
          this.getTaskList(0)
          this.confirmAlert = false
          this.isDisable = false// 防止连点
        })
      }

      // 已完成任务
      // if (this.selectMission.IsComplete) {
      //   apiReceiveMissionReward(this.ReceiveMissionRewardData, true).then(res => {
      //     this.Alert.showMsg('领取成功', 'success', 1200, true);
      //     this.getTaskList(2)
      //     this.confirmAlert = false
      //     this.isDisable = false// 防止连点
      //   })
      // }
    },

    close() {
      this.confirmAlert = false
    },

    receive(i) {
      this.ReceiveMissionRewardData.umissionid = i.UMissionId
      apiReceiveMissionReward(this.ReceiveMissionRewardData, true).then(res => {
        this.Alert.showMsg('领取成功', 'success', 1200, true, true);
        this.getTaskList(2)
        this.confirmAlert = false
        this.isDisable = false// 防止连点
      })
    },

    // 獲取任務列表
    // 推薦任務   > api 參數帶0，分頁categoryType =  0
    // 进行中任務 > api 參數帶1，分頁categoryType =  1
    // 已完成任務 > api 參數帶2，分頁categoryType =  2
    getTaskList(index) {
      this.noMission = false
      this.dailyMissionList = [];
      this.specialMissionList = [];
      this.activityMissionList = [];
      this.ongoingMissionList = [];
      this.categoryType = index;
      this.isLoading = true;
      let data = {
        status: index
      };
      apiGetMissionList(data, true).then(res => {
        if (index == 0) {
          this.dailyMissionList = res.DailyMission;
          this.specialMissionList = res.SpecialMission;
          this.activityMissionList = res.ActivityMission;
          this.timeDelT()
          if (this.dailyMissionList.length < 1 && this.specialMissionList.length < 1 && this.activityMissionList.length < 1) {
            this.noMission = true;
            this.isLoading = false;
          } else {
            this.noMission = false;
            this.isLoading = false;
          }
        }
        if (index == 1 || index == 2) {
          this.dailyMissionList = res.DailyMission;
          this.specialMissionList = res.SpecialMission;
          this.activityMissionList = res.ActivityMission;
          for (let d = 0; d < this.dailyMissionList.length; d++) {
            this.ongoingMissionList.push(this.dailyMissionList[d]);
          }
          for (let s = 0; s < this.specialMissionList.length; s++) {
            this.ongoingMissionList.push(this.specialMissionList[s]);
          }
          for (let a = 0; a < this.activityMissionList.length; a++) {
            this.timeDelT()
            this.ongoingMissionList.push(this.activityMissionList[a]);
          }

          if (this.ongoingMissionList.length < 1) {
            this.noMission = true;
            this.isLoading = false;
          } else {
            this.noMission = false;
            this.isLoading = false;
          }
        }
      });

    },

    // 时间去掉T
    timeDelT () {
      for (let i = 0; i < this.activityMissionList.length; i++) {
        this.activityMissionList[i].EndDate = this.activityMissionList[i].EndDate.replace('T', ' ')
      }
    }
  }
};
</script>
<style scoped>
.redBtn{
  color: #fff !important;
    border-radius: 0.5rem;
    padding: 0.15rem 0.35rem;
    background-image: linear-gradient(-29deg, #dc3848 2%, #e73951 100%);
}
</style>
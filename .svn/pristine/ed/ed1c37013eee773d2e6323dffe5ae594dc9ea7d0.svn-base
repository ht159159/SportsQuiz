<template>
  <main class="createTeamBonus">
    <div class="createTeamBonus-header" style="position:fixed;top: 0">
      <back class="back-icon img-he"></back>
      <h3>{{ $t("TeamBonus") }}</h3>
    </div>

    <div class="createTeamBonus-level">
      <div class="createTeamBonus-level-titleBox">
        <p class="createTeamBonus-level-title">{{ $t("NumberClubs") }}:</p><span>{{ getClubTeamBonusData.SumPeopleNum }}</span>
      </div>
      |
      <div class="createTeamBonus-level-titleBox">
        <p class="createTeamBonus-level-title">{{ $t("NewAddYesterday") }}:</p><span>{{ getClubTeamBonusData.YesterdayPeopleNum }}</span>
      </div>
      |
      <div class="createTeamBonus-level-titleBox">
        <p class="createTeamBonus-level-title">{{ $t("NewPeopleThisMonth") }}:</p><span>{{ getClubTeamBonusData.ThisMonthPeopleNum }}</span>
      </div>
    </div>

    <div class="club-Box">
      <div class="noMissionBg">
        <img
          class="noMission"
          v-if="noMission"
          src="../../assets/noInfo.png"
          alt=""
        />
        <p>{{ $t("NoInformation") }}</p>
      </div>

      <div class="dataBox">

        <div class="todayData">
          <div class="todayData-title">{{ $t("TodayData") }}</div>
          <div class="todayData-content">
            <div class="todayData-content-box"><p>{{ $t("TeamBonus") }}</p><p class="teamValue">{{ getClubTeamBonusData.ToDaySumBonus }}</p></div>
            <div class="todayData-content-box"><p>{{ $t("TeamPerformance") }}</p><p class="teamValue">{{ getClubTeamBonusData.ToDayPerformance }}</p></div>
          </div>
                    <div class="todayData-content">
            <div class="todayData-content-box"><p>{{ $t("MyBonus") }}</p><p class="teamValue myBonus">{{ getClubTeamBonusData.ToDaySumBonusSelf }}</p></div>
            <div class="todayData-content-box"><p>{{ $t("MyBonus") }}</p><p class="teamValue myBonus">{{ getClubTeamBonusData.ToDayPerformanceSelf }}</p></div>
          </div>
                    <div class="todayData-content">
            <div class="todayData-content-box"><p class="description">{{ $t("Dividend") }}</p></div>
            <div class="todayData-content-box"><p class="description">{{ $t("Performance") }}</p></div>
          </div>
        </div>

                <div class="todayData">
          <div class="todayData-title">{{ $t("YesterdayData") }}</div>
          <div class="todayData-content">
            <div class="todayData-content-box"><p>{{ $t("TeamBonus") }}</p><p class="teamValue">{{ getClubTeamBonusData.YesterdaySumBonus }}</p></div>
            <div class="todayData-content-box"><p>{{ $t("TeamPerformance") }}</p><p class="teamValue">{{ getClubTeamBonusData.YesterdayPerformance }}</p></div>
          </div>
                    <div class="todayData-content">
            <div class="todayData-content-box"><p>{{ $t("MyBonus") }}</p><p class="teamValue myBonus">{{ getClubTeamBonusData.YesterdaySumBonusSelf }}</p></div>
            <div class="todayData-content-box"><p>{{ $t("MyBonus") }}</p><p class="teamValue myBonus">{{ getClubTeamBonusData.YesterdayPerformanceSelf }}</p></div>
          </div>
                    <div class="todayData-content">
            <div class="todayData-content-box"><p class="description">{{ $t("Dividend") }}</p></div>
            <div class="todayData-content-box"><p class="description">{{ $t("Performance") }}</p></div>
          </div>
        </div>

                <div class="todayData">
          <div class="todayData-title">{{ $t("DataThisMonth") }}</div>
          <div class="todayData-content">
            <div class="todayData-content-box"><p>{{ $t("TeamBonus") }}</p><p class="teamValue">{{ getClubTeamBonusData.ThisMonthSumBonus }}</p></div>
            <div class="todayData-content-box"><p>{{ $t("TeamPerformance") }}</p><p class="teamValue">{{ getClubTeamBonusData.ThisMonthPerformance }}</p></div>
          </div>
                    <div class="todayData-content">
            <div class="todayData-content-box"><p>{{ $t("MyBonus") }}</p><p class="teamValue myBonus">{{ getClubTeamBonusData.ThisMonthSumBonusSelf }}</p></div>
            <div class="todayData-content-box"><p>{{ $t("MyBonus") }}</p><p class="teamValue myBonus">{{ getClubTeamBonusData.ThisMonthPerformanceSelf }}</p></div>
          </div>
                    <div class="todayData-content">
            <div class="todayData-content-box"><p class="description">{{ $t("Dividend") }}</p></div>
            <div class="todayData-content-box"><p class="description">{{ $t("Performance") }}</p></div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import back from "@/components/Botton/back.vue";
import { apiGetClubTeamBonus } from "@/api/Club";
export default {
  components: {
    back
  },
  data() {
    return {
      noMission: false,
      clubId: "",
      getClubTeamBonusData:""
    };
  },

  created() {
    this.clubId = localStorage.getItem("ClubId")
  },
  mounted () {
    (()=>{
      apiGetClubTeamBonus("" ,true).then(res =>{
        this.getClubTeamBonusData = res.Data
      })
    })()
  },

  methods: {}
};
</script>

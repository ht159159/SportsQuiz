<template>
  <div class="member-management">
    <div class="member-management-header">
      <div class="member-management-header-wrap">
        <back class="back-icon img-he"></back>
        <h3>{{ $t("MemberManagement") }}</h3>
        <!--成员管理-->
      </div>
    </div>

    <div class="member-info">
      <div class="totalMembers">
        {{ $t("TotalNumberOfClubs") }}:{{ totalMembers }}
      </div>
      <!--俱乐部总人数-->
      <div class="yesterdayAdd">
        {{ $t("ClubAddedYesterday") }}:{{ yesterdayAdd }}
      </div>
      <!--俱乐部昨日新增-->
    </div>

    <div class="member-management-content">
      <div class="managementBtn">
        <!--所有成员-->
        <div
          :class="[btnChoice == 0 ? 'onFocus' : 'notFocus']"
          @click="allMember()"
        >
          {{ $t("AllMembers") }}
        </div>

        <!--待审核-->
        <div
          class="under-review"
          :class="[btnChoice == 1 ? 'onFocus' : 'notFocus']"
          @click="underReview()"
        >
          {{ $t("UnderReview") }}
          <span v-if="underReviewNum > 0">{{ underReviewNum }}</span>
        </div>
      </div>

      <!-- 所有成员 -->
      <div class="member-list-wrap" v-if="btnChoice === 0">
        <div class="member-list" v-for="(list, index) in memberList">
          <img :src="list.UImg" alt="" />
          <div class="member-list-info">
            <p class="member-list-info-name">{{ list.NickName }}</p>
            <!--发送消息-->
            <!-- <div class="member-list-send-message" @click="openChat()">{{ $t("SendMessage") }}</div> -->
            <div class="member-list-info-vip-wrap">
              <p>{{ $t('Office') }} : {{ list.RoleName }}</p>
              <p>{{ $t('VIPLevel') }}: {{ list.Vip }}</p>  <!--VIP等級-->
            </div>
            <div class="member-list-info-last-bet-time">{{ $t("LastBetTime") }} : {{ list.LastBetTime }}</div> <!--最後投注時間-->
          </div>
          <div class="member-list-btn-wrap">
            <div class="drop" @click="openFancyBox(1); UId = list.UId;"></div>
            <!-- 踢人 -->
            <div class="closed" @click="openFancyBox(2); pkId = list.PkId; UId = list.UId;"></div>
          </div>
        </div>
      </div>

      <!-- 待审核 -->
      <div class="member-list-wrap" v-if="btnChoice === 1">
        <div class="member-list" v-for="list in unMemberList">
          <img :src="list.UImg" alt="" />
          <div class="member-list-info">
            <p class="member-list-info-name">{{ list.NickName }}</p>
            <div class="member-list-info-detail">
              <p>
                {{ $t("NumberOfBets") }}: {{ list.BetCount }}{{ $t("Times") }}
              </p>
              <!--投注数-->
              <p>{{ $t("VIPLevel") }}: {{ list.Vip }}</p>
              <!--VIP等级-->
            </div>
          </div>
          <div class="member-list-btn-wrap">
            <!--通过-->
            <div class="member-list-btn pass" @click=" openFancyBox(3); pkId = list.PkId; UId = list.UId;">
              {{ $t("Pass") }}
            </div>
            <!--拒绝-->
            <div class="member-list-btn reject" @click="openFancyBox(4); pkId = list.PkId; UId = list.UId;">
              {{ $t("Reject") }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 發送訊息 -->
    <div class="chat" v-if="isOpenChat">
      
    </div>

    <!-- 彈窗 -->
    <transition name="fade">
		  <model v-if="isOpen"></model>
	  </transition>
	  <transition name="fade">
		<div class="fancy-box" v-if="isOpen">
			<img src="../../assets/club/ticket-header.png" alt="">
      <div class="fancy-box-content">
			  <div class="upgrade" v-if="type == 1">
          <p>{{ $t("AdjustTheRole") }}</p>
          <!-- <select v-model="clubRole">
            <option value="" disabled selected>--請選擇--</option>
            <option class="upgrade-option" v-for="role in clubRoleList" :value="role.Id">{{ role.Name }}</option>
          </select> -->
          <el-select v-model="clubRole" :placeholder='$t("Select")'>
            <el-option
              v-for="item in clubRoleList"
              :key="item.value"
              :label="item.Name"
              :value="item.Id">
            </el-option>
          </el-select>
        </div>
        <p v-if="type == 2">{{ $t("RemoveMember") }}?</p><!--是否將此會員汰除-->
        <p v-if="type == 3">{{ $t("JoinMember") }}?</v-pre><!--是否加入此會員-->
        <p v-if="type == 4">{{ $t("RejectMember") }}?</p><!--是否拒絕此會員-->
        <p v-if="type == 5">{{ callBackMsg }}</p><!--錯誤訊息-->
        <p v-if="type == 6">{{ callBackMsg }}</p><!--無會員訊息-->
      </div>
			<div class="fancy-box-btn">
				<div class="fancy-box-btn-confirm" @click="confirmBtnEvent(type)">{{ $t('Confirm') }}</div>
				<div class="fancy-box-btn-cancel" @click="isOpen = !isOpen" v-if="type !== 5 && type !== 6">{{ $t('Cancel') }}</div>
			</div>
		</div>
	</transition>
  </div>
</template>
<script>
import back from "@/components/Botton/back.vue";
import model from "@/components/model";
import { apiGetMyClubManagement, apiAuditClubMem, apiGetClubRole, apiModifyClubRole } from "@/api/Club.js";
export default {
  name: "memberManagement",
  components: {
    back,
    model,
  },
  data() {
    return {
      totalMembers: 0,
      yesterdayAdd: 0,
      btnChoice: 0,
      closedIndex: undefined,
      isOpen: false,
      clubId: undefined,
      UName: "",
      UId: "",
      underReviewNum: undefined,
      type: 0,
      memberList: [],
      unMemberList: [],
      pkId: undefined,
      callBackMsg: "",
      clubRoleList: [],
      clubRole: "",
      isOpenChat: false,
    };
  },
  created() {
    // 獲取clubId
    this.clubId = localStorage.getItem("ClubId");

    // 獲取成員管理數據
    this.getMyClubManagement();
  },
  methods: {
    allMember() {
      this.btnChoice = 0;
      this.getMyClubManagement();
    },
    underReview() {
      this.btnChoice = 1;
      this.getMyClubManagement();
    },

    // 開啟彈窗
    openFancyBox(type) {
      this.isOpen = true;
      this.type = type;

      // type = 1 ， 點選會員進階跳出彈窗時，需跑API撈取升級資訊列表
      if (type == 1) {
        apiGetClubRole("", true).then(res => {
          this.clubRoleList = res.Data;
      });
      }
    },

    // type : 1 = 升級修改會員; 2 = 移除會員; 3 = 通過審核; 4 = 拒絕審核
    async confirmBtnEvent(type) {
      if (type === 1) {
        let data = {
          UId: this.UId,
          RoleId: this.clubRole
        }
        apiModifyClubRole(data, true).then(res => {
          if (res.Success) {
            this.type = 5;
            this.callBackMsg = this.$t("SuccessfulOperation");
          }else {
            this.type = 5;
            this.callBackMsg = res.Message;
          }
      });
      }
      if (type === 2) {
        let data = {
          MemClubChangeId: this.pkId,
          ClubId: this.clubId,
          UId: this.UId,
          Type: 2, // 2 踢人
          Status: 1 // status = 1是同意  2是不同意
        };
        await apiAuditClubMem(data, true)
          .then(res => {
            if (res.Success) {
              this.type = 5;
              this.callBackMsg = this.$t("SuccessfulOperation");
            } else {
              this.type = 5;
              this.callBackMsg = res.Message;
            }
          })
          .then(() => {
            this.getMyClubManagement();
          });
      }
      if (type === 3) {
        let data = {
          MemClubChangeId: this.pkId,
          ClubId: this.clubId,
          UId: this.UId,
          Type: 0, // 0 審核
          Status: 1 // status = 1是同意  2是不同意
        };
        await apiAuditClubMem(data, true)
          .then(res => {
            if (res.Success) {
              this.type = 5;
              this.callBackMsg = this.$t("SuccessfulOperation");
            } else {
              this.type = 5;
              this.callBackMsg = res.Message;
            }
          })
          .then(() => {
            this.getMyClubManagement();
          });
      }
      if (type === 4) {
          let data = {
          MemClubChangeId: this.pkId,
          ClubId: this.clubId,
          UId: this.UId,
          Type: 0, // 0 審核
          Status: 2 // status = 1是同意  2是不同意
        };
        await apiAuditClubMem(data, true)
          .then(res => {
            if (res.Success) {
              this.type = 5;
              this.callBackMsg = this.$t("SuccessfulOperation");
            } else {
              this.type = 5;
              this.callBackMsg = res.Message;
            }
          })
          .then(() => {
            this.getMyClubManagement();
          });
      }
      // 回傳訊息
      if (type === 5) {
        this.isOpen = false;
      }

      // 無會員錯誤訊息
      if (type === 6) {
        this.$router.push("/CreateClub");
      }

      this.getMyClubManagement();
    },

    // 獲取成員管理數據
    getMyClubManagement() {
      let data = {
        ClubId: this.clubId
      };
      apiGetMyClubManagement(data, true).then(res => {
        // 無會員時跳出彈窗錯誤訊息
        if (Math.abs(res.Code) >= 600) {
          this.isOpen = true;
          this.type = 6;
          this.callBackMsg = res.Message;
          return;
        }
        this.memberList = res.Data.Members;
        this.unMemberList = res.Data.UnMembers;
        this.totalMembers = res.Data.PeoNum;
        this.yesterdayAdd = res.Data.YesterdayPeoNum;

        this.underReviewNum = this.unMemberList.length;
      })
    },

    // 發送訊息
    openChat() {
      this.isOpenChat = true
    }
  }
};
</script>

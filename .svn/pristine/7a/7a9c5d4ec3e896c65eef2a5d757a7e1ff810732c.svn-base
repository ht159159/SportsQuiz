<template>
    <div class="notice">
      <div class="notice-header">
		<div class="notice-header-wrap">
			<back class="back-icon img-he"></back>
			<h3>{{ $t("ClubNotice") }}</h3>
			<!--俱乐部公告-->
		</div>
	</div>

    <div class="release">
        <input class="input-title" type="text" :placeholder="$t('enterTitle')" v-model="inputTitle">
        <textarea class="input-textarea" cols="30" rows="10" :placeholder="$t('EnterText')" v-model="inputTextarea" @input="textcontrol()"></textarea>
        <span class="text-len" :class="{'alert-char': textLen > maxTextLen}">{{ textLen + "/" + maxTextLen}}</span>
        <div class="release-Btn2" @click="addOrEditNotice()">{{ $t('Release') }}</div> <!--發布-->
    </div>
    </div>
</template>
<script>
import back from "@/components/Botton/back.vue";
import { apiGetClubAnnouncement, apiAddOrUpClubAnnouncement} from "@/api/Club.js";
export default {
  components: {
    back,
  },
  data() {
      return {
          inputTitle: "",
          inputTextarea: "",
          id: 0,
          textLen: 0,
          maxTextLen: 200,
          doubleClick: false,
      }
  },
  created() {
      this.getNoticeList();
  },
  methods: {
    // 獲取公告列表
    getNoticeList() {
      let data = {
        ndex: this.indexNum,
        count: 10
      };
      apiGetClubAnnouncement(data, true).then(res => {
        this.inputTitle = res.Data.Title;
        this.inputTextarea = res.Data.Content;
        this.id = res.Data.Id;
      }).then(() => {
        this.textLen = this.inputTextarea.length;
      });
    },

    // 字數檢測
    textcontrol() {
      let len = this.inputTextarea.length;
      this.textLen = len;
    },
    // 編輯公告
    addOrEditNotice() {
      if (this.textLen > this.maxTextLen) {
        this.$message({
          message: this.$t('MoreEditableWords'),
          type: "warning",
          center: true,
          duration: 1200
        });
        return;
      }
      if (this.doubleClick == false) {
        let data = {
          Title: this.inputTitle,
          Content: this.inputTextarea,
          Status: 1,
          Id: this.id
        }
        apiAddOrUpClubAnnouncement(data, true).then(res => {
          if (res.Success) {
            let vm = this;
            const m = vm.$message({
                message: res.Message,
                duration: 3000,
                type: "success",
                center: true
            });
            setTimeout(() => {
                m.close();
                this.$router.push("/myClub");
            }, 2000);
          } else {
              let vm = this;
            const m = vm.$message({
                message: res.Message,
                duration: 3000,
                type: "warning",
                center: true
            });
            setTimeout(() => m.close(), 2000);
          }
        });
      }
      this.doubleClick = true
    },
  },
}
</script>
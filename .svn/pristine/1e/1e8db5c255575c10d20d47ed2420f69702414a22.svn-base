<template>
  <main class="questionnaire" ref="cont" style="-webkit-overflow-scrolling: touch;">
    <div class="questionnaire-header">
      <back class="back-icon img-he"></back>
      <h3>{{ $t("Questionnaire") }}</h3>
    </div>
    <div class="title">
      <p class="title-big" style="text-align: center;">{{questionList.Questionnaire}}</p>
    </div>
    <div class="questionnaire-content">
      <div class="questionnaire-wrap" v-for="(node, i) in questionList.questionnaires">
        <div v-if="node.IsChooseMore === 0 && node.Type === 0">
          <div class="questionnaire-topic">
            {{ (i+1) + "." + node.Title}} (
            <span class="questionnaire-style">{{ $t("Radio") }}</span> )
          </div>
          <el-checkbox-group v-model="newQuestionList[i]">
            <el-checkbox
              :label="answer.Id"
              @change="bindCheckBox(i,index,$event)"
              v-for="(answer, index) in node.questionnaireAnswers"
            >{{ answer.AnswerTxt}}</el-checkbox>
          </el-checkbox-group>
        </div>

        <div v-if="node.IsChooseMore === 1 && node.Type === 0">
          <div class="questionnaire-topic">
            {{ (i+1) + "." + node.Title}}(
            <span class="questionnaire-style">{{ $t("MultipleChoice") }}</span> )
          </div>
          <el-checkbox-group v-model="newQuestionList[i]">
            <el-checkbox
              :label="answer.Id"
              @change="bindCheckBox(i,index,$event)"
              v-for="(answer, index) in node.questionnaireAnswers"
            >{{ answer.AnswerTxt }}</el-checkbox>
          </el-checkbox-group>
        </div>

        <!-- 您的建議 -->
        <div class="suggestion-wrap" v-if="node.Type === 1">
          <div class="questionnaire-topic">{{ (i + 1) + "." +$t("YourSuggestion")}}</div>
          <textarea
            class="textarea"
            cols="50"
            rows="5"
            v-model="textContent"
            maxlength="50"
            @input="textcontrol(i)"
            :placeholder="$t('PleaseEnter')"
          ></textarea>
          <span class="text-len">{{ textLen + "/50"}}</span>
        </div>
      </div>

      <!-- 提交按鈕 -->
      <div type="submit" class="submit" @click="submit()">{{ $t("Submit") }}</div>
    </div>
  </main>
</template>

<script>
import {
  apiGetQuestionnaireAndQAList,
  apiAddQuestionnaireFeedback
} from "@/api/Questionnaire.js";
import back from "@/components/Botton/back.vue";
export default {
  components: {
    back
  },
  data() {
    return {
      questionListData: {
        id: 0,
        index: 1,
        count: 10
      },
      questionList: [],
      newQuestionList: [],
      textContent: "",
      textLen: 0,
      questionIndex: 0,
      uid: "",
      submitData: [],
      answerIdList: [],
      contentStrList: []
    };
  },
  async created() {
    this.uid = localStorage.getItem("UId");
    await apiGetQuestionnaireAndQAList(this.questionListData, true).then(
      res => {
        this.questionList = res;
        this.newQuestionListAry();
      }
    );
  },
  methods: {
    // 判斷API資料有幾道題目，生成幾個空陣列
    newQuestionListAry() {
      for (let i = 0; i < this.questionList.questionnaires.length; i++) {
        this.newQuestionList.push([]);
        this.questionList.questionnaires[i].IsChooseMore == 1 ? this.contentStrList.push([]) : this.contentStrList.push("")
        this.questionList.questionnaires[i].IsChooseMore == 1 ? this.answerIdList.push([]) : this.answerIdList.push("")
      }
    },

    // 判斷多選或單選
    bindCheckBox(i, index, e) {
      this.questionIndex = i;
      if (this.questionList.questionnaires[i].IsChooseMore === 0) {
        if (e === true) {
          this.submitData[i] = {
            Id: 0,
            Uid: this.uid,
            QuestionnaireId: this.questionList.Id,
            QuestionId: this.questionList.questionnaires[i].Id,
            AnswerId: this.questionList.questionnaires[i].questionnaireAnswers[
              index
            ].Id,
            ContentStr: this.questionList.questionnaires[i]
              .questionnaireAnswers[index].AnswerTxt
          };
          if (this.newQuestionList[i].length > 1) {
            this.newQuestionList[i].splice(0, 1);
          }
        } else {
          this.submitData[i] = "";
        }
      }
      if (this.questionList.questionnaires[i].IsChooseMore === 1) {
        let answerId = "";
        let contentStr = "";
        answerId = String(
          this.questionList.questionnaires[i].questionnaireAnswers[index].Id
        );
        contentStr = this.questionList.questionnaires[i].questionnaireAnswers[
          index
        ].AnswerTxt;
        if (e === true) {
          if (typeof this.contentStrList[i] === "string") {
            this.contentStrList[i] = this.contentStrList[i].split(",");
            this.contentStrList[i].push(contentStr);
            this.contentStrList[i] = this.contentStrList[i].join(",");
          } else {
            this.contentStrList[i].push(contentStr);
            this.contentStrList[i] = this.contentStrList[i].join(",");
          }

          if (typeof this.answerIdList[i] === "string") {
            this.answerIdList[i] = this.answerIdList[i].split(",");
            this.answerIdList[i].push(answerId);
            this.answerIdList[i] = this.answerIdList[i].join(",");
          } else {
            this.answerIdList[i].push(answerId);
            this.answerIdList[i] = this.answerIdList[i].join(",");
          }
        } else {
          if (typeof this.contentStrList[i] === "string") {
            this.contentStrList[i] = this.contentStrList[i].split(",");

            if (this.contentStrList[i].indexOf(contentStr) >= 0) {
              this.contentStrList[i].splice(
                this.contentStrList[i].indexOf(contentStr),
                1
              );
              if (this.contentStrList[i].length > 0)
                this.contentStrList[i] = this.contentStrList[i].join(",");
            }
          }
          if (typeof this.answerIdList[i] === "string") {
            this.answerIdList[i] = this.answerIdList[i].split(",");

            if (this.answerIdList[i].indexOf(answerId) >= 0) {
              this.answerIdList[i].splice(this.answerIdList[i].indexOf(answerId), 1);
              if (this.answerIdList[i].length > 0)
                this.answerIdList[i] = this.answerIdList[i].join(",");
            }
          }
        }
        this.submitData[i] = {
          Id: 0,
          Uid: this.uid,
          QuestionnaireId: this.questionList.Id,
          QuestionId: this.questionList.questionnaires[i].Id,
          AnswerId: this.answerIdList[i],
          ContentStr: this.contentStrList[i]
        };

        if (this.submitData[i].AnswerId == "") {
          this.submitData[i] = "";
        }
      }
    },

    // 字數限制
    textcontrol(i) {
      let len = this.textContent.length;
      this.textLen = len;
      this.submitData[i] = {
        Id: 0,
        Uid: this.uid,
        QuestionnaireId: this.questionList.Id,
        QuestionId: this.questionList.questionnaires[i].Id,
        AnswerId: "",
        ContentStr: this.textContent
      };
    },

    // 送出
    submit() {
      // this.questionList.questionnaires.length
      let submitDataJSON;
      var promise = new Promise((resolve, reject) => {
//         for (let i = 0; i < this.newQuestionList.length - 1; i++) {
//           if (this.newQuestionList[i].length < 1) {
//             // alert("請填選答案");
//             this.$message({
//               message: this.$t("FillAnswer"),
//               type: "error",
//               center: true,
//               duration: 1200
//             });
// console.log(this.submitData)
//             return;
//           }
//         }

          // if (this.textContent != "") {
          //   this.submitData[this.submitData.length] = {
          //     Id: 0,
          //     Uid: this.uid,
          //     QuestionnaireId: this.questionList.Id,
          //     QuestionId: this.questionList.questionnaires[
          //       this.questionList.questionnaires.length - 1
          //     ].Id,
          //     AnswerId: "",
          //     ContentStr: this.textContent
          //   };
          // }
        for (let i = 0; i < this.newQuestionList.length; i++) {
          if (this.submitData[i] == undefined || this.submitData[i] == "") {
            // alert("請填選答案");
            this.$message({
              message: this.$t("FillAnswer"),
              type: "error",
              center: true,
              duration: 1200
            });
            return;
          }
        }
        resolve();
      });

      promise.then(() => {
        submitDataJSON = this.submitData;
        apiAddQuestionnaireFeedback(submitDataJSON, true).then(res => {
          var messagePromise = new Promise((resolve, reject) => {
            if (Math.abs(res.Code) >= 600) {
              this.$message({
                message: res.Message,
                type: "warning",
                center: true,
                duration: 1800
              });
            } else {
              this.$message({
                message: this.$t("SubmittedSuccessfully"),
                type: "success",
                center: true,
                duration: 1800
              });
            }
            resolve();
          });
          messagePromise.then(() => {
            history.back();
          });
        });
      });
    }
  }
};
</script>
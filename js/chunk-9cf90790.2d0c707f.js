(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9cf90790"],{"0546":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"myclub-activities"},[s("div",{staticClass:"myclub-activities-header"},[s("div",{staticClass:"myclub-activities-header-wrap"},[s("back",{staticClass:"back-icon img-he"}),s("h3",[t._v(t._s(t.$t("ClubActivities")))])],1)]),s("div",{staticClass:"activities-type"},[s("div",{staticClass:"activities-type-btn",class:{"activities-type-btn-active":0==t.activeCategoryIndex},on:{click:function(e){t.activeCategoryIndex=0,t.getLastestActivies()}}},[t._v(t._s(t.$t("ClubChallenge")))]),s("div",{staticClass:"activities-type-btn",class:{"activities-type-btn-active":1==t.activeCategoryIndex},on:{click:function(e){t.activeCategoryIndex=1,t.getActiveBetList()}}},[t._v(t._s(t.$t("ClubBetting")))])]),s("div",{directives:[{name:"show",rawName:"v-show",value:0==t.activeCategoryIndex,expression:"activeCategoryIndex == 0"}],staticClass:"activities-challenge-wrap"},[s("div",{staticClass:"activities-challenge-tab"},[s("div",{staticClass:"activities-challenge-tab-wrap"},[s("p",{staticClass:"activities-challenge-title",class:{"titile-focus":0==t.tabIndex},on:{click:function(e){return t.changeTabIndex(0)}}},[t._v(t._s(t.$t("latestActivity")))]),s("div",{staticClass:"divider"}),s("p",{staticClass:"activities-challenge-title",class:{"titile-focus":1==t.tabIndex},on:{click:function(e){return t.changeTabIndex(1)}}},[t._v(t._s(t.$t("HistoricalActivity")))])]),s("div",{staticClass:"check-result",on:{click:function(e){return t.$router.push("/ClubActivityMatchResult")}}},[s("p",{staticClass:"check-result-text"},[t._v(t._s(t.$t("ViewResults")))]),s("div",{staticClass:"check-result-arrow"})])]),s("div",{directives:[{name:"show",rawName:"v-show",value:0==t.tabIndex,expression:"tabIndex == 0"}],staticClass:"activities-challenge",class:[1==t.isManagement?"activities-challenge-new":"activities-challenge-new-member"]},[0==t.activeNodata?s("div",{staticClass:"activities-challenge-content-wrap"},[t.latestActivitiesObj.length<=0?s("div",{staticClass:"sipeLoading"},[t._v(t._s(t.$t("WipeLoading")))]):t._e(),s("div",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:t.loadLastest,expression:"loadLastest"}],staticClass:"activities-challenge-content",attrs:{"infinite-scroll-disabled":"busy","infinite-scroll-immediate":"immediate"}},t._l(t.latestActivitiesObj,(function(e){return s("div",{staticClass:"block"},[s("img",{attrs:{src:e.ActivityImg,alt:""}}),s("p",{staticClass:"date"},[t._v(t._s(e.CreateTime))]),s("div",{staticClass:"abridge-content"},[t._v(t._s(e.ActivityContent))]),s("div",{staticClass:"activities-challenge-btn-wrap"},[1==e.Status?s("div",{staticClass:"join",on:{click:function(i){t.isTicketTipShow(i),t.avtiveId=e.Id,t.matchName=e.MatchName,t.isEnglish=!0}}},[t._v(t._s(t.$t("JoinNow")))]):t._e(),2==e.Status?s("div",{staticClass:"join",on:{click:function(i){t.avtiveId=e.Id,t.continueBet(t.avtiveId),t.isEnglish=!1}}},[t._v(t._s(t.$t("KeepBetting")))]):t._e(),0==e.Status?s("div",{staticClass:"notJoin"},[t._v(t._s(t.$t("CanNotBet")))]):t._e(),3==e.Status?s("div",{staticClass:"joinSuccess",on:{click:function(i){t.avtiveId=e.Id,t.goResultDetail(t.avtiveId),t.isEnglish=!1}}},[t._v(t._s(t.$t("BetSuccessful")))]):t._e(),1==t.isManagement?s("div",{staticClass:"delete",on:{click:function(i){t.isTicketTipShow(i,t.latestActivitiesObj),t.avtiveId=e.Id,t.isEnglish=!1}}}):t._e()])])})),0)]):s("div",{staticClass:"no-data"},[s("p",[t._v(t._s(t.$t("NoData")))])])]),s("div",{directives:[{name:"show",rawName:"v-show",value:1==t.tabIndex,expression:"tabIndex == 1"}],staticClass:"activities-challenge ",class:[1==t.isManagement?"activities-challenge-history":"activities-challenge-history-member"]},[0==t.historyNoData?s("div",{staticClass:"activities-challenge-content"},[t.historyActivitiesObj.length<=0?s("div",{staticClass:"sipeLoading"},[t._v(t._s(t.$t("WipeLoading")))]):t._e(),s("div",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:t.loadHistory,expression:"loadHistory"}],staticClass:"activities-challenge-content",attrs:{"infinite-scroll-disabled":"busy","infinite-scroll-immediate":"immediate"}},t._l(t.historyActivitiesObj,(function(e,i){return s("div",{staticClass:"block"},[s("img",{attrs:{src:e.ActivityImg,alt:""}}),s("p",{staticClass:"date"},[t._v(t._s(e.CreateTime))]),s("div",{staticClass:"abridge-content"},[t._v(t._s(e.ActivityContent))]),s("div",{staticClass:"activities-challenge-btn-wrap"},[1==e.Status?s("div",{staticClass:"join",on:{click:function(i){t.isTicketTipShow(i),t.avtiveId=e.Id,t.matchName=e.MatchName}}},[t._v(t._s(t.$t("JoinNow")))]):t._e(),2==e.Status?s("div",{staticClass:"join",on:{click:function(i){t.avtiveId=e.Id,t.continueBet(t.avtiveId)}}},[t._v(t._s(t.$t("KeepBetting")))]):t._e(),0==e.Status?s("div",{staticClass:"notJoin"},[t._v(t._s(t.$t("CanNotBet")))]):t._e(),3==e.Status?s("div",{staticClass:"joinSuccess",on:{click:function(i){t.avtiveId=e.Id,t.goResultDetail(t.avtiveId)}}},[t._v(t._s(t.$t("BetSuccessful")))]):t._e()])])})),0)]):s("div",{staticClass:"no-data"},[s("p",[t._v(t._s(t.$t("NoData")))])])]),1==t.isManagement?s("div",{staticClass:"release-btn-wrap"},[s("div",{staticClass:"release-btn",on:{click:function(e){return t.activesRelease()}}},[t._v(t._s(t.$t("Release")))])]):t._e()]),s("div",{directives:[{name:"show",rawName:"v-show",value:1==t.activeCategoryIndex,expression:"activeCategoryIndex == 1"}],staticClass:"activities-bet-wrap"},[s("div",{staticClass:"activities-bet-tab"},[s("div",{staticClass:"activities-bet-tab-wrap"},[s("p",{staticClass:"activities-bet-tab-title",class:{"titile-focus":0==t.betTabIndex},on:{click:function(e){return t.changeBetTabIndex(0)}}},[t._v(t._s(t.$t("MyActivities")))]),s("div",{staticClass:"divider"}),s("p",{staticClass:"activities-bet-tab-title",class:{"titile-focus":1==t.betTabIndex},on:{click:function(e){return t.changeBetTabIndex(1)}}},[t._v(t._s(t.$t("ClubActivities")))])]),0==t.betTabIndex?s("div",{staticClass:"check-result",on:{click:function(e){return t.$router.push("/InitiatorBetResult")}}},[s("p",{staticClass:"check-result-text"},[t._v(t._s(t.$t("ViewResults")))]),s("div",{staticClass:"check-result-arrow"})]):t._e(),1==t.betTabIndex?s("div",{staticClass:"check-result",on:{click:function(e){return t.$router.push("/BetResult")}}},[s("p",{staticClass:"check-result-text"},[t._v(t._s(t.$t("ViewResults")))]),s("div",{staticClass:"check-result-arrow"})]):t._e()]),s("div",{directives:[{name:"show",rawName:"v-show",value:0==t.betTabIndex,expression:"betTabIndex == 0"}],staticClass:"activities-bet"},[0==t.betMyListNoData?s("div",{staticClass:"activities-bet-content-list-wrap"},[t.betMyList.length<=0?s("div",{staticClass:"sipeLoading"},[t._v(t._s(t.$t("WipeLoading")))]):t._e(),s("div",{staticClass:"activities-bet-content"},t._l(t.betMyList,(function(e){return s("div",{staticClass:"activities-bet-content-list"},[e.ClubGambling.GamblingImg?s("img",{attrs:{src:e.ClubGambling.GamblingImg}}):s("img",{staticClass:"sport-main-collapse-img",attrs:{src:i("4b29"),alt:""}}),s("div",{staticClass:"activities-bet-content-list-left"},[s("div",{staticClass:"activities-bet-content-list-left-up"},[s("div",{staticClass:"activities-bet-content-list-left-up-title"},[t._v(t._s(e.ClubGambling.GamblingTitle))])]),s("div",{staticClass:"activities-bet-content-list-left-up-date"},[s("span",[t._v(t._s(t.$t("Deadline"))+" : ")]),s("p",[t._v(t._s(e.ClubGambling.Etime.slice(0,e.ClubGambling.Etime.indexOf("T"))))])]),s("div",{staticClass:"activities-bet-content-list-left-down"},[s("div",{staticClass:"activities-bet-content-list-detail"},[s("p",[t._v(t._s(t.$t("Position"))+" : ")]),s("p",{staticClass:"text-blue"},[t._v(t._s(e.ClubGambling.BetPosition))])]),s("div",{staticClass:"activities-bet-content-list-detail"},[s("p",[t._v(t._s(t.$t("Odds"))+" : ")]),s("span",[t._v(t._s(e.ClubGambling.OddsValue))])]),s("div",{staticClass:"activities-bet-content-list-detail"},[s("p",[t._v(t._s(t.$t("CashPledge"))+" : ")]),s("span",[t._v(t._s(e.ClubGambling.Deposit))])]),s("div",{staticClass:"activities-bet-content-list-detail"},[s("p",[t._v(t._s(t.$t("TotalAmountBet"))+" : ")]),s("span",[t._v(t._s(e.ClubGambling.BettedAmount))])])])]),s("div",{staticClass:"activities-bet-content-list-right"},[s("div",{staticClass:"bet-status-btn watchResult",on:{click:function(i){return t.goBetResult(1,e.ClubGambling.Id)}}}),s("div",{staticClass:"del",on:{click:function(i){return t.isTicketTipShow(i,e.ClubGambling)}}})])])})),0)]):s("div",{staticClass:"no-data"},[s("p",[t._v(t._s(t.$t("NoData")))])])]),s("div",{directives:[{name:"show",rawName:"v-show",value:1==t.betTabIndex,expression:"betTabIndex == 1"}],staticClass:"activities-bet"},[0==t.betOtherListNoData?s("div",{staticClass:"activities-bet-content-list-wrap"},[t.betOtherList.length<=0?s("div",{staticClass:"sipeLoading"},[t._v(t._s(t.$t("WipeLoading")))]):t._e(),s("div",{staticClass:"activities-bet-content"},t._l(t.betOtherList,(function(e){return s("div",{staticClass:"activities-bet-content-list"},[e.ClubGambling.GamblingImg?s("img",{attrs:{src:e.ClubGambling.GamblingImg}}):s("img",{staticClass:"sport-main-collapse-img",attrs:{src:i("4b29"),alt:""}}),s("div",{staticClass:"activities-bet-content-list-left"},[s("div",{staticClass:"activities-bet-content-list-left-up"},[s("div",{staticClass:"activities-bet-content-list-left-up-title"},[t._v(t._s(e.ClubGambling.GamblingTitle))])]),s("div",{staticClass:"activities-bet-content-list-left-up-date"},[s("span",[t._v(t._s(t.$t("Deadline"))+" : ")]),s("p",[t._v(t._s(e.ClubGambling.Etime.slice(0,e.ClubGambling.Etime.indexOf("T"))))])]),s("div",{staticClass:"activities-bet-content-list-left-down"},[s("div",{staticClass:"activities-bet-content-list-detail"},[s("p",[t._v(t._s(t.$t("Position"))+" : ")]),s("span",{staticClass:"text-blue"},[t._v(t._s(e.ClubGambling.BetPosition))])]),s("div",{staticClass:"activities-bet-content-list-detail"},[s("p",[t._v(t._s(t.$t("Odds"))+" : ")]),s("span",[t._v(t._s(e.ClubGambling.OddsValue))])]),s("div",{staticClass:"activities-bet-content-list-detail"},[s("p",[t._v(t._s(t.$t("CashPledge"))+" : ")]),s("span",[t._v(t._s(e.ClubGambling.Deposit))])]),s("div",{staticClass:"activities-bet-content-list-detail"},[s("p",[t._v(t._s(t.$t("TotalAmountBet"))+" : ")]),s("span",[t._v(t._s(e.ClubGambling.BettedAmount))])])])]),s("div",{staticClass:"activities-bet-content-list-right"},["观看赛果"==e.JoinStatus||"Watch the result"==e.JoinStatus?s("div",{staticClass:"bet-status-btn watchResult",on:{click:function(i){return t.goBetResult(2,e.ClubGambling.Id)}}}):t._e(),"参与活动"==e.JoinStatus||"Participate"==e.JoinStatus?s("div",{staticClass:"bet-status-btn participate",on:{click:function(i){return t.goBet(e.ClubGambling.Id)}}}):t._e(),"无法参加"==e.JoinStatus||"Unable to participate"==e.JoinStatus?s("div",{staticClass:"bet-status-btn unableParticipate"}):t._e()])])})),0)]):s("div",{staticClass:"no-data"},[s("p",[t._v(t._s(t.$t("NoData")))])])]),s("div",{staticClass:"release-btn-wrap"},[s("div",{staticClass:"release-btn",on:{click:function(e){return t.$router.push("/gameSport")}}},[t._v(t._s(t.$t("Release")))])])]),s("transition",{attrs:{name:"fade"}},[t.isTicketTipOpen?s("model"):t._e()],1),s("transition",{attrs:{name:"fade"}},[t.isTicketTipOpen?s("div",{staticClass:"ticketTip",class:{"ticketTip-US":"en-US"==t.lang&&1==t.isEnglish}},[s("img",{attrs:{src:i("07cd"),alt:""}}),s("p",{staticClass:"ticketTip-title",class:{deleteConent:"del"==t.isTicketTipType||"delete"==t.isTicketTipType}},["join"==t.isTicketTipType?s("span",[t._v(t._s(t.$t("LeagueGame")))]):t._e(),"join"==t.isTicketTipType?s("span",[t._v(t._s(t.matchName))]):t._e(),"del"==t.isTicketTipType||"delete"==t.isTicketTipType?s("span",[t._v(t._s(t.$t("SureToDeleteThisEvent")))]):t._e()]),"join"==t.isTicketTipType?s("p",{staticClass:"ticketTip-content",domProps:{innerHTML:t._s(t.ticketTipText)}}):t._e(),s("div",{staticClass:"ticketTip-btn"},["join"==t.isTicketTipType?s("p",[t._v(t._s(t.$t("ActiveTicket")))]):t._e(),"join"==t.isTicketTipType?s("div",{staticClass:"ticketTip-btn-buy",on:{click:function(e){return t.getTicket()}}},[t._v(t._s(t.$t("BuyNow")))]):t._e(),"del"==t.isTicketTipType||"delete"==t.isTicketTipType?s("div",{staticClass:"ticketTip-btn-buy",on:{click:function(e){return t.deleteFunction()}}},[t._v(t._s(t.$t("Confirm")))]):t._e(),s("div",{staticClass:"ticketTip-btn-cancel",on:{click:function(e){t.isTicketTipOpen=!t.isTicketTipOpen}}},[t._v(t._s(t.$t("Cancel")))])])]):t._e()]),s("transition",{attrs:{name:"fade"}},[t.isOpen?s("model"):t._e()],1),s("transition",{attrs:{name:"fade"}},[t.isOpen?s("div",{staticClass:"fancyBox"},[s("span",[t._v(t._s(t.callBackMsg)+"!")]),s("div",{staticClass:"fancy-box-btn-wrap"},[s("p",{staticClass:"confirmBtn",on:{click:function(e){return t.confirmBtnEvent()}}},[t._v("\n            "+t._s(t.$t("Confirm"))+"\n          ")])])]):t._e()])],1)},a=[],n=(i("ac6a"),i("cc22")),c=i("ebd9"),l=i("4113"),o=i("bb64"),r={components:{back:n["a"],model:c["a"]},data:function(){return{lang:"",isEnglish:!1,isManagement:0,clubId:void 0,isOpen:!1,activeCategoryIndex:0,tabIndex:0,betTabIndex:0,latestActivitiesObj:[],historyActivitiesObj:[],isTicketTipOpen:!1,ticketTipText:"".concat(this.$t("RuleOfActivity"),"：<br />1、").concat(this.$t("VictoryOrDefeat"),"：<br />①").concat(this.$t("VictoryOrDefeatOne"),"<br />②").concat(this.$t("VictoryOrDefeatTwo"),"<br />2、").concat(this.$t("ParticipationRules"),"：<br />①").concat(this.$t("ParticipationRulesOne"),"<br />②").concat(this.$t("ParticipationRulesTwo"),"<br />3、").concat(this.$t("RewardRules"),"：<br />①").concat(this.$t("RewardRulesOne"),"<br />②").concat(this.$t("RewardRulesTwo"),"<br />③").concat(this.$t("RewardRulesThree"),"<br />").concat(this.$t("ActivityRulesWarning")),avtiveId:"",activeNodata:!1,historyNoData:!1,matchName:"",betMyList:[],betOtherList:[],betMyListNoData:!1,betOtherListNoData:!1,wipeLoading:!1,callBackMsg:"",busy:!1,immediate:!1,lastestIndexNum:1,historyIndexNum:1,lastestTotalPages:"",historyTotalPages:"",isTicketTipType:"",deleteData:""}},created:function(){this.lang=JSON.parse(localStorage.getItem("lang")).tag,this.isManagement=localStorage.getItem("isManagement"),this.clubId=localStorage.getItem("ClubId"),null==localStorage.getItem("activeCategoryIndex")&&localStorage.setItem("activeCategoryIndex",0),null==localStorage.getItem("tabIndex")&&localStorage.setItem("tabIndex",0),null==localStorage.getItem("betTabIndex")&&localStorage.setItem("betTabIndex",0),"0"==localStorage.getItem("activeCategoryIndex")?(this.getLastestActivies(),this.activeCategoryIndex=0,this.tabIndex=localStorage.getItem("tabIndex"),1==this.tabIndex&&this.getHistoryActivies()):"1"==localStorage.getItem("activeCategoryIndex")&&(this.activeCategoryIndex=1,this.getActiveBetList(),this.betTabIndex=localStorage.getItem("betTabIndex"))},methods:{getLastestActivies:function(){var t=this,e={Type:1,index:this.lastestIndexNum,count:10};Object(l["e"])(e,!0).then((function(e){if("600"==e.Code)return t.isOpen=!0,t.callBackMsg=e.Message,void(t.busy=!0);e.Data.Data.length<=0?t.activeNodata=!0:t.activeNodata=!1,t.latestActivitiesObj=e.Data.Data,t.lastestTotalPages=e.Data.TotalPages})),this.tabIndex=0,localStorage.setItem("activeCategoryIndex",this.activeCategoryIndex)},loadLastest:function(){var t=this;if(!(this.lastestIndexNum>=this.lastestTotalPages)){this.busy=!0,this.lastestIndexNum++;var e={Type:1,index:this.lastestIndexNum,count:10};Object(l["e"])(e,!0).then((function(e){if("600"==e.Code)return t.isOpen=!0,t.callBackMsg=e.Message,void(t.busy=!0);0==e.Data.Data.length?t.busy=!0:e.Data.Data.length>0&&e.Data.Data.forEach((function(e){t.latestActivitiesObj.push(e),t.busy=!1}))}))}},getHistoryActivies:function(){var t=this,e={Type:2,index:this.historyIndexNum,count:10};Object(l["e"])(e,!0).then((function(e){if("600"==e.Code)return t.isOpen=!0,void(t.callBackMsg=e.Message);e.Data.Data.length<=0?t.historyNoData=!0:t.historyNoData=!1,t.historyActivitiesObj=e.Data.Data,t.historyTotalPages=e.Data.TotalPages})),this.tabIndex=1,localStorage.setItem("activeCategoryIndex",this.activeCategoryIndex)},loadHistory:function(){var t=this;if(!(this.historyIndexNum>=this.historyTotalPages)){this.busy=!0,this.historyIndexNum++;var e={Type:2,index:this.historyIndexNum,count:10};Object(l["e"])(e,!0).then((function(e){if("600"==e.Code)return t.isOpen=!0,t.callBackMsg=e.Message,void(t.busy=!0);0==e.Data.Data.length?t.busy=!0:e.Data.Data.length>0&&e.Data.Data.forEach((function(e){t.historyActivitiesObj.push(e),t.busy=!1}))}))}},getActiveBetList:function(){var t=this;Object(o["f"])("",!0).then((function(e){t.betMyList=e.Data.MyGamblings,t.betOtherList=e.Data.OtherGamblings,null!=t.betMyList&&0!=t.betMyList.length||(t.betMyListNoData=!0),null!=t.betOtherList&&0!=t.betOtherList.length||(t.betOtherListNoData=!0)})),this.betTabIndex=0,localStorage.setItem("activeCategoryIndex",this.activeCategoryIndex)},changeTabIndex:function(t){this.tabIndex=t,localStorage.setItem("tabIndex",t),0==t&&(this.latestActivitiesObj=[],this.lastestIndexNum=1,this.busy=!1,this.getLastestActivies()),1==t&&(this.historyActivitiesObj=[],this.historyIndexNum=1,this.busy=!1,this.getHistoryActivies())},changeBetTabIndex:function(t){this.betTabIndex=t,localStorage.setItem("betTabIndex",t)},activesRelease:function(){this.$router.push("/ClubActivitiesRelease")},getTicket:function(){var t=this;console.log(this.avtiveId);var e={ClubActivityId:this.avtiveId};Object(l["c"])(e,!0).then((function(e){if(Math.abs(e.Code)>=600){var i=t,s=i.$message({message:e.Message,duration:3e3,type:"error",center:!0});setTimeout((function(){return s.close()}),2e3)}else{localStorage.setItem("AcvtiveId",t.avtiveId);var a=t,n=a.$message({message:t.$t("SuccessfulPurchase"),duration:3e3,type:"success",center:!0});setTimeout((function(){return n.close()}),2e3),setTimeout((function(){t.isTicketTipOpen=!1,t.$router.push("/ClubActivityMatch")}),3e3)}}))},continueBet:function(t){localStorage.setItem("AcvtiveId",t),this.$router.push("/ClubActivityMatch")},goResultDetail:function(t){localStorage.setItem("AcvtiveId",t),this.$router.push("/ActivityMatchResultDetail")},deleteActive:function(){var t=this,e={Status:-1,ClubActivityId:this.avtiveId};Object(l["j"])(e,!0).then((function(e){if(Math.abs(e.Code)>=600){var i=t,s=i.$message({message:e.Message,duration:3e3,type:"warning",center:!0});setTimeout((function(){return s.close()}),1e3)}else{var a=t,n=a.$message({message:t.$t("successfullyDeleted"),duration:3e3,type:"success",center:!0});setTimeout((function(){return n.close(),0==t.tabIndex?(t.getLastestActivies(),void(t.tabIndex=0)):1==t.tabIndex?(t.getHistoryActivies(),void(t.tabIndex=1)):void 0}),1e3)}t.isTicketTipOpen=!1}))},goBet:function(t){var e=this;localStorage.setItem("betId",t),setTimeout((function(){e.$router.push("/clubActiveBet")}),250)},goBetResult:function(t,e){var i=this;localStorage.setItem("betId",e),localStorage.setItem("singleResult",!0),1==t?setTimeout((function(){i.$router.push("/InitiatorBetResult")}),250):setTimeout((function(){i.$router.push("/BetResult")}),250)},betDelete:function(){var t=this,e={Id:this.deleteData.Id,Status:-1};Object(o["i"])(e,!0).then((function(e){if(Math.abs(e.Code)>=600){var i=t,s=i.$message({message:e.Message,duration:3e3,type:"warning",center:!0});return setTimeout((function(){return s.close()}),2e3),void(t.isTicketTipOpen=!1)}if(e.Success){var a=t,n=a.$message({message:t.$t("successfullyDeleted"),duration:3e3,type:"success",center:!0});return setTimeout((function(){return n.close()}),2e3),t.getActiveBetList(),void(t.isTicketTipOpen=!1)}if(0!=e.Success)t.isTicketTipOpen=!1;else{var c=t,l=c.$message({message:t.$t("DataError"),duration:3e3,type:"warning",center:!0});setTimeout((function(){return l.close()}),2e3)}}))},deleteFunction:function(){"delete"==this.isTicketTipType?this.deleteActive():this.betDelete()},isTicketTipShow:function(t,e){this.isTicketTipType=t.toElement.className,this.deleteData=e,this.isTicketTipOpen=!this.isTicketTipOpen},confirmBtnEvent:function(){this.$router.push("/CreateClub")}}},u=r,v=i("2877"),d=Object(v["a"])(u,s,a,!1,null,null,null);e["default"]=d.exports},"07cd":function(t,e,i){t.exports=i.p+"img/ticket-header.28dba83f.png"},4113:function(t,e,i){"use strict";i.d(e,"g",(function(){return n})),i.d(e,"b",(function(){return c})),i.d(e,"c",(function(){return l})),i.d(e,"f",(function(){return o})),i.d(e,"a",(function(){return r})),i.d(e,"h",(function(){return u})),i.d(e,"d",(function(){return v})),i.d(e,"j",(function(){return d})),i.d(e,"e",(function(){return b})),i.d(e,"i",(function(){return g}));var s=i("f6ae"),a="/ClubActivitys";function n(t,e){return Object(s["a"])(a+"/GetClubActivityMatchInfo",t,e)}function c(t,e){return Object(s["b"])(a+"/AddClubActivity",t,e)}function l(t,e){return Object(s["a"])(a+"/BuyClubActivityTicket",t,e)}function o(t,e){return Object(s["a"])(a+"/GetClubActivityMatchAndPlay",t,e)}function r(t,e){return Object(s["b"])(a+"/ActivityBets",t,e)}function u(t,e){return Object(s["a"])(a+"/GetClubActivityMatchResult",t,e)}function v(t,e){return Object(s["a"])(a+"/GetActivityBetResult",t,e)}function d(t,e){return Object(s["b"])(a+"/UpdateClubActivityStatus",t,e)}function b(t,e){return Object(s["a"])(a+"/GetClubActivityList",t,e)}function g(t,e){return Object(s["a"])(a+"/GetClubMatchs",t,e)}},bb64:function(t,e,i){"use strict";i.d(e,"g",(function(){return n})),i.d(e,"a",(function(){return c})),i.d(e,"f",(function(){return l})),i.d(e,"h",(function(){return o})),i.d(e,"e",(function(){return r})),i.d(e,"d",(function(){return u})),i.d(e,"c",(function(){return v})),i.d(e,"b",(function(){return d})),i.d(e,"i",(function(){return b}));var s=i("f6ae"),a="/ClubGamblings";function n(t,e){return Object(s["a"])(a+"/GetClubGamblingMatchInfo",t,e)}function c(t,e){return Object(s["b"])(a+"/AddClubGambling",t,e)}function l(t,e){return Object(s["a"])(a+"/GetClubGamblingList",t,e)}function o(t,e){return Object(s["a"])(a+"/GetMyClubGamblingBetResultList",t,e)}function r(t,e){return Object(s["a"])(a+"/GetClubGamblingBetResultList",t,e)}function u(t,e){return Object(s["a"])(a+"/GetClubGamblingBetResult",t,e)}function v(t,e){return Object(s["a"])(a+"/GetClubGamblingBetInfo",t,e)}function d(t,e){return Object(s["b"])(a+"/ClubGamblingBet",t,e)}function b(t,e){return Object(s["b"])(a+"/UpdateClubGamblingsStatus",t,e)}},cc22:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("i",{staticClass:"back-icon",on:{click:t.gojump}})},a=[],n={methods:{gojump:function(){"/myClub"!=this.$route.path?"/myself"!=this.$route.path?"/ClubActivities"!=this.$route.path?(this.$router.goBack(),this.$store.commit("upBack")):this.$router.push("/myClub"):this.$router.push("/"):this.$router.push("/myself")}}},c=n,l=i("2877"),o=Object(l["a"])(c,s,a,!1,null,null,null);e["a"]=o.exports}}]);
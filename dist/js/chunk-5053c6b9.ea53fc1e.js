(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5053c6b9"],{"07cd":function(e,t,i){e.exports=i.p+"img/ticket-header.28dba83f.png"},"7f9b":function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"activities-release"},[s("div",{staticClass:"activities-release-header"},[s("div",{staticClass:"activities-release-header-wrap"},[s("back",{staticClass:"back-icon img-he"}),s("h3",[e._v(e._s(e.$t("MyClub")))])],1)]),s("div",{staticClass:"activities-release-content"},[s("p",{staticClass:"activities-release-title"},[e._v(e._s(e.$t("PleaseSelectALeague")))]),s("swiper",{ref:"mySwiper",staticClass:"swiper",attrs:{options:e.swiperOption}},[e._l(e.leagueNewAry,(function(t,i){return s("swiper-slide",e._l(t,(function(t,a){return s("div",{staticClass:"league-box",on:{click:function(t){return e.selectLeague(i,a)}}},[s("div",{class:[e.leagueNewAryIndex==i&&e.leagueNewAryItemIndex==a?"selested":"unSelect"]}),t.MatchImg?s("div",{staticClass:"league-box-img",style:{backgroundImage:"url("+t.MatchImg+")"}}):s("div",{staticClass:"league-box-no-img"}),s("p",{staticClass:"matchName"},[e._v(e._s(t.MatchName))])])})),0)})),s("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2),s("p",{staticClass:"activities-release-title"},[e._v(e._s(e.$t("ActiveTitle")))]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.acvtiveTitle,expression:"acvtiveTitle"}],staticClass:"enter-title",attrs:{type:"text",placeholder:e.$t("ActiveTitleTip")},domProps:{value:e.acvtiveTitle},on:{input:function(t){t.target.composing||(e.acvtiveTitle=t.target.value)}}}),s("p",{staticClass:"activities-release-title"},[e._v(e._s(e.$t("PleaseSelectTickets")))]),s("div",{staticClass:"select-wrap"},[s("p",{staticClass:"select-title"},[e._v(e._s(e.$t("Tickets")))]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.ticket,expression:"ticket"}],attrs:{type:"text",placeholder:"0",disabled:"disabled"},domProps:{value:e.ticket},on:{input:function(t){t.target.composing||(e.ticket=t.target.value)}}})]),s("p",{staticClass:"activities-release-title"},[e._v(e._s(e.$t("PleaseSelectTheSession")))]),s("div",{staticClass:"select-wrap"},[s("p",{staticClass:"select-titlet"},[e._v(e._s(e.$t("Session")))]),e._l(e.selectNum,(function(t,i){return s("div",{class:[e.sessionIndex==i?"select-num-active":"select-num"],on:{click:function(t){return e.selectSession(i)}}},[e._v(e._s(t))])}))],2)],1),s("button",{staticClass:"activities-release-btn",on:{click:function(t){e.isFancyBoxOpen=!0}}},[e._v(e._s(e.$t("Confirm")))]),s("transition",{attrs:{name:"fade"}},[e.isFancyBoxOpen?s("model"):e._e()],1),s("transition",{attrs:{name:"fade"}},[e.isFancyBoxOpen?s("div",{staticClass:"fancy-box"},[s("img",{attrs:{src:i("07cd"),alt:""}}),s("div",{staticClass:"fancy-box-content"},[s("p",[e._v(e._s(e.$t("SureToCreateThisEvent"))+"?")])]),s("div",{staticClass:"fancy-box-btn"},[s("div",{staticClass:"fancy-box-btn-confirm",attrs:{disabled:e.isClickTwice},on:{click:function(t){return e.releaseActive()}}},[e._v(e._s(e.$t("Confirm")))]),s("div",{staticClass:"fancy-box-btn-cancel",on:{click:function(t){e.isFancyBoxOpen=!e.isFancyBoxOpen}}},[e._v(e._s(e.$t("Cancel")))])])]):e._e()])],1)},a=[],n=(i("28a5"),i("cc22")),c=i("ebd9"),l=i("4113"),o=i("7212"),r=(i("a7a3"),{components:{back:n["a"],swiper:o["swiper"],swiperSlide:o["swiperSlide"],model:c["a"]},data:function(){return{league:[],leagueNewAry:[],leagueId:"",isSelect:!1,leagueNewAryIndex:void 0,leagueNewAryItemIndex:void 0,ticket:"",selectNum:[],sessionIndex:void 0,acvtiveTitle:"",sessionNum:"",isClickTwice:!1,clubId:"",swiperOption:{pagination:{el:".swiper-pagination"}},isFancyBoxOpen:!1}},created:function(){localStorage.setItem("categoryIndex",1),this.getActivityMatchInfo()},methods:{activesSlide:function(){this.leagueNewAry=[];for(var e=0,t=this.league.length;e<t;e+=6)this.leagueNewAry.push(this.league.slice(e,e+6))},getActivityMatchInfo:function(){var e=this;this.clubId=localStorage.getItem("ClubId");var t={clubId:this.clubId};Object(l["g"])(t,!0).then((function(t){e.league=t.Data.ActivityMatches,e.ticket=t.Data.JoinAmount;var i=t.Data.SelectNum;e.selectNum=i.split(","),e.activesSlide()}))},selectLeague:function(e,t){if(this.leagueNewAryIndex==e&&this.leagueNewAryItemIndex==t)return this.leagueNewAryIndex=void 0,this.leagueNewAryItemIndex=void 0,void(this.leagueId="");this.leagueNewAryIndex=e,this.leagueNewAryItemIndex=t,this.leagueId=this.leagueNewAry[e][t].MatchId,this.isClickTwice=!1},selectSession:function(e){if(this.sessionIndex==e)return this.sessionIndex=void 0,void(this.sessionNum="");this.sessionIndex=e,this.sessionNum=this.selectNum[e]},releaseActive:function(){var e=this;if(this.isClickTwice)return!1;if(this.isClickTwice=!0,""==this.leagueId)return this.$message({message:this.$t("PleaseSelectALeague"),type:"warning",center:!0,duration:1200}),void(this.isFancyBoxOpen=!1);if(""==this.acvtiveTitle)return this.$message({message:this.$t("ActiveTitle"),type:"warning",center:!0,duration:1200}),void(this.isFancyBoxOpen=!1);if(""==this.sessionNum)return this.$message({message:this.$t("PleaseSelectTheSession"),type:"warning",center:!0,duration:1200}),void(this.isFancyBoxOpen=!1);var t={ClubId:this.clubId,SelectLeague:this.leagueId,NumGames:this.sessionNum,ActivityContent:this.acvtiveTitle};Object(l["b"])(t,!0).then((function(t){0==t.Success?e.$message({message:t.Message,type:"warning",center:!0,duration:3e3}):(e.$message({message:t.Message,type:"success",center:!0,duration:3e3}),setTimeout((function(){e.$router.push("/ClubActivities")}),3e3)),e.isFancyBoxOpen=!1,e.isClickTwice=!1}))}},beforeDestroy:function(){localStorage.setItem("categoryIndex",1)}}),u=r,d=i("2877"),v=Object(d["a"])(u,s,a,!1,null,null,null);t["default"]=v.exports}}]);
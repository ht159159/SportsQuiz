(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1bec8c35"],{"1c48":function(t,e,n){},4949:function(t,e,n){"use strict";var a=n("1c48"),i=n.n(a);i.a},c02e:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"challenge"},[t.ShowExplain?n("div",{staticClass:"explain"},[n("i",{staticClass:"explain-x",on:{click:t.hideExplain}}),n("p",{staticClass:"rank-popup-title"},[t._v(t._s(t.$t("ChallengeRules")))]),n("p",{staticClass:"rank-popup-content"},[t._v("\n      "+t._s(t.$t("ChallengeRules1"))),n("br"),t._v("\n      "+t._s(t.$t("ChallengeRules2"))),n("br"),t._v("\n      "+t._s(t.$t("ChallengeRules3"))+"\n    ")])]):t._e(),n("div",{staticClass:"challenge-head"},[t._v(t._s(t.$t("ChallengeGame")))]),n("div",{staticClass:"challenge-main"},[n("i",{staticClass:"question",on:{click:t.showPopup}}),n("div",{staticClass:"challenge-main-top"},[n("div",{staticClass:"challenge-throy"}),n("van-button",{staticClass:"challenge-button",on:{click:function(e){return t.gojump()}}},[1==t.goOnType?n("span",[t._v(t._s(t.$t("GoChallenge")))]):t._e(),2==t.goOnType?n("span",[t._v(t._s(t.$t("WaitingForStatistics")))]):t._e(),3==t.goOnType?n("span",[t._v(t._s(t.$t("ContinueToChallenge")))]):t._e(),5==t.goOnType?n("span",[t._v(t._s(t.$t("Maintain"))+"...")]):t._e()])],1),n("div",{staticClass:"challenge-main-history"},[n("div",{staticClass:"challenge-main-history-year"},[n("van-icon",{attrs:{name:"arrow-left",size:"0.36rem"},on:{click:t.lose}}),n("span",{staticClass:"challenge-main-history-year-num"},[t._v(t._s(t.year))]),n("van-icon",{attrs:{name:"arrow",size:"0.36rem"},on:{click:t.add}})],1),n("div",{staticClass:"Cgold-main-title"},[n("div",{staticClass:"Cgold-main-title-left fl"},[t._v(t._s(t.$t("Accumulate")))]),n("div",{staticClass:"Cgold-main-title-mid fl"},[n("p",{staticClass:"Cgold-main-title-mid-gold"},[t._v(t._s(t.$t("Coins")))]),n("p",{staticClass:"Cgold-main-title-mid-goldnum"},[t._v(t._s(t.item.ZSumGold))])]),n("div",{staticClass:"Cgold-main-title-right fl"},[n("p",{staticClass:"Cgold-main-title-right-jue"},[t._v(t._s(t.$t("LotteryTicket")))]),n("p",{staticClass:"Cgold-main-title-right-juenum"},[t._v(t._s(t.item.ZSumLottery))])])]),n("van-list",{staticClass:"challenge-main-history-challenge",attrs:{offset:t.offset,finished:t.finished,"finished-text":t.ftext},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[t._l(t.match,(function(e,a){return n("div",{key:a,staticClass:"challenge-main-history-challenge-item",on:{click:function(n){return t.handleChange(e.ChallengeId,a,e.CreationTime)}}},[0==e.Status?n("span",[t._v(t._s(t.$t("Processing"))+"...")]):n("span",[t._v(" "+t._s(t.$t("Round"))+t._s(e.CurIndex))]),n("i",{staticClass:"rank-arrow"})])})),0===t.match.length?n("div",{staticClass:"nomatchs"},[n("p",[t._v(t._s(t.$t("NoRecord")))])]):t._e()],2)],1)]),n("nav-bottom",{ref:"son"})],1)},i=[],s=(n("4917"),n("e6c2")),l=n("c5c2"),o={components:{NavBottom:s["a"]},created:function(){this.getChallengeIsCanGoOn(),this.getYear(),this.getChallenge(),this.getreward()},data:function(){return{age:[{num:12,eng:"January"},{num:11,eng:"November"},{num:10,eng:"October"},{num:9,eng:"September"},{num:8,eng:"August"},{num:7,eng:"July"},{num:6,eng:"June"},{num:5,eng:"May"},{num:4,eng:"April"},{num:3,eng:"March"},{num:2,eng:"February"},{num:1,eng:"December"}],goOnType:"",challengeInfo:"",year:"",value:1,match:[],id:"",matchitem:"",activeNames:"",showcontent:!1,item:"",offset:10,loading:!1,finished:!1,index:1,page:"",Jump:!0,ftext:"",ShowExplain:!1}},methods:{showPopup:function(){this.ShowExplain=!0},hideExplain:function(){this.ShowExplain=!1},initialization:function(){this.match=[],this.index=1,this.loading=!0,this.finished=!1,this.loading&&this.onLoad()},onLoad:function(){var t=this;this.ftext=this.$t("WipeNomore");var e={year:this.year,index:this.index,count:10};Object(l["k"])(e,!0).then((function(e){if(t.page=e.TotalPages,0==e.Data.length)return t.match="",t.ftext="",t.finished=!0,void(t.loading=!1);if(e.Data.length>0){t.index++;for(var n=0;n<e.Data.length;n++)t.match.push(e.Data[n]);return t.loading=!1,t.page==t.index-1?void(t.finished=!0):void 0}}))},isHaveMatch:function(){var t=this;Object(l["i"])("",!0).then((function(e){0==e.data.Data.length&&(t.Jump=!1)}))},getreward:function(){var t=this;Object(l["g"])("",!0).then((function(e){t.item=e}))},getmatch:function(){},handleChange:function(t,e,n){this.$router.push("/challengerecord"),this.$store.commit("upChallengeId",t),this.$store.commit("uptime",n)},add:function(){this.year++,this.initialization()},lose:function(){this.year--,this.initialization()},goJump:function(t){this.$router.push("/challengemouth/".concat(t))},getChallengeIsCanGoOn:function(){var t=this;Object(l["h"])("",!0).then((function(e){t.goOnType=e.GoOnType}))},getYear:function(){var t=new Date;this.year=t.getFullYear()},getChallenge:function(){var t=this;Object(l["f"])("",!0).then((function(e){t.challengeInfo=e.availableIntegral})),this.$store.dispatch("asyncChallengeid")},gojump:function(){1==this.goOnType&&this.$router.push("/challengeticket"),this.Jump?3==this.goOnType&&(1==this.challengeInfo.CurLevel&&this.$router.push("/challengematch"),2==this.challengeInfo.CurLevel&&this.$router.push("/challengetwo"),3==this.challengeInfo.CurLevel&&this.$router.push("/challengethree"),4==this.challengeInfo.CurLevel&&this.$router.push("/challengefour"),5==this.challengeInfo.CurLevel&&this.$router.push("/challengefive")):this.$message({message:this.$t("GameMaintenance"),duration:3e3,type:"error",center:!0})}}},h=o,c=(n("4949"),n("2877")),r=Object(c["a"])(h,a,i,!1,null,"055049aa",null);e["default"]=r.exports}}]);
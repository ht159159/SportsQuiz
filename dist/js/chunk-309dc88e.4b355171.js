(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-309dc88e"],{"0bdc":function(t,e,s){"use strict";var a=s("72f5"),i=s.n(a);i.a},2685:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"rank-match"},[a("transition",{attrs:{name:"fade"}},[t.$store.state.match.loading?a("model"):t._e()],1),a("transition",{attrs:{name:"fade"}},[t.$store.state.match.loading?a("i",{staticClass:"el-icon-loading"}):t._e()]),a("transition",{attrs:{name:"fade"}},[t.showbet?a("model"):t._e()],1),a("transition",{attrs:{name:"fade"}},[t.showbet?a("div",{staticClass:"dialog"},[a("div",{staticClass:"bet-head"},[a("div",{staticClass:"home"},[a("p",[t._v("\n            "+t._s(t.betinfo.MatchItemName.slice(0,t.betinfo.MatchItemName.indexOf("V")))+"\n          ")])]),a("div",{staticClass:"away"},[a("p",[t._v("\n            "+t._s(t.betinfo.MatchItemName.slice(t.betinfo.MatchItemName.indexOf("S")+1))+"\n          ")])])]),a("div",{staticClass:"bet-main"},[a("div",{staticClass:"bet-main__wrap"},[a("div",{staticClass:"betinfo"},[a("span",{staticClass:"betinfo__title"},[t._v(t._s(this.betinfo.Position))]),a("span",{staticClass:"betinfo__title"},[t._v("@"+t._s(this.betinfo.OddsValue))])]),a("div",{staticClass:"betin"},[a("span",{staticClass:"betin-span"},[t._v(t._s(t.$t("BetAmount")))]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.betnum,expression:"betnum"}],staticClass:"betin-input",attrs:{type:"text"},domProps:{value:t.betnum},on:{input:[function(e){e.target.composing||(t.betnum=e.target.value)},t.getmoney1]}}),a("i",{staticClass:"add",on:{click:t.addbet}}),a("i",{staticClass:"lose",on:{click:t.losebet}})]),a("div",{staticClass:"getmoney"},[a("span",{staticClass:"betin-span"},[t._v(t._s(t.$t("WinableAmount")))]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.money,expression:"money"}],staticClass:"betin-input",attrs:{type:"text",disabled:"disabled"},domProps:{value:t.money},on:{input:function(e){e.target.composing||(t.money=e.target.value)}}})])]),a("div",{staticClass:"fastbet"},[a("div",{staticClass:"slide-tooltip"},[a("span",{staticClass:"slide-tooltip-text"},[t._v(t._s(t.rangeValue))])]),a("el-slider",{attrs:{"show-tooltip":!1,min:t.betinfo.MinBetIntegral,max:t.rangeMaxVal},on:{input:function(e){return t.changeRangeVal()}},model:{value:t.rangeValue,callback:function(e){t.rangeValue=e},expression:"rangeValue"}})],1),a("div",{staticClass:"bet-main__second__wrap"},[a("div",{staticClass:"fastbet-text-wrap"},[a("span",{staticClass:"fastbet_text"},[t._v(t._s(t.$t("QuicklySelectAmount")))])]),a("div",{staticClass:"rules"},[a("span",{staticClass:"rules-text"},[t._v(t._s(t.$t("MinimumBetAmount")))]),a("span",{staticClass:"rules-money"},[t._v(t._s(this.betinfo.MinBetIntegral)+" "+t._s(t.$t("Coins")))])]),a("div",{staticClass:"btn betbtn",on:{click:function(e){return t.betClick()}}},[t._v(t._s(t.$t("Bet")))])])]),a("div",{staticClass:"close",on:{click:t.closedialog}})]):t._e()]),a("transition",{attrs:{name:"fade"}},[t.IsOddsChange?a("model"):t._e()],1),a("transition",{attrs:{name:"fade"}},[t.IsOddsChange?a("div",{staticClass:"IsOddsChange"},[a("p",[t._v(t._s(t.$t("OddsChanged")))]),a("div",{staticClass:"IsOddsChangeBtn",on:{click:function(e){return t.closeOddsChange()}}},[t._v("\n        "+t._s(t.$t("Confirm"))+"\n      ")])]):t._e()]),a("div",{staticClass:"match"},[a("div",{staticClass:"rank-match-head"},[a("back",{staticClass:"back-icon"}),a("div",{staticClass:"title"},[t._v(t._s(t.$store.state.match.MatchName))]),a("div",{staticClass:"num"}),1==t.tab1||1==t.tab2||0==t.$store.state.match.Matchitems.length?a("div",{staticClass:"count-down-wrap"},[a("div",{staticClass:"countdown-second",on:{click:function(e){return t.refresh()}}},[t._v("\n          "+t._s(t.countDownTime)+"\n        ")])]):t._e()],1),a("div",{staticClass:"banner ",attrs:{id:"banner4"}},[a("div",{staticClass:"myrank"},[a("p",{staticClass:"ptop"},[t._v(t._s(t.$t("MyRank")))]),-1==t.rankinfo.Rank?a("p",{staticClass:"pcontent"},[t._v("\n          "+t._s(t.$t("NoRanking"))+"\n        ")]):a("p",{staticClass:"pcontent"},[t._v(t._s(t.rankinfo.Rank))])]),a("div",{staticClass:"gold"},[a("p",{staticClass:"ptop"},[t._v(t._s(t.$t("TotalCoins")))]),-1===t.rankinfo.AvailableIntegral?a("p",{staticClass:"pcontent"},[t._v("\n          "+t._s(t.$t("No"))+"\n        ")]):a("p",{staticClass:"pcontent"},[t._v(t._s(t.rankinfo.AvailableIntegral))])]),a("div",{staticClass:"banner-tabs"},[a("div",{class:{"tab-active":t.tab3,tab:!0},on:{click:function(e){return t.tabshow(2)}}},[t._v("\n          "+t._s(t.$t("Boules"))+"\n        ")]),a("div",{class:{"tab-active":t.tab2,tab:!0},on:{click:function(e){return t.tabshow(1)}}},[t._v("\n          "+t._s(t.$t("Today"))+"\n        ")]),a("div",{class:{"tab-active":t.tab1,tab:!0},on:{click:function(e){return t.tabshow(0)}}},[t._v("\n          "+t._s(t.$t("MorningSession"))+"\n        ")])]),a("router-link",{attrs:{to:"/guize"}},[a("i",{staticClass:"banner-quset"})])],1),a("div",{staticClass:"main-main"},[t._l(t.$store.state.match.Matchitems,(function(e){return a("div",{key:e.MatchItemId,staticClass:"rank-match-main"},[a("div",{staticClass:"title"},[a("div",{staticClass:"title-left"},[e.TeamMatchItemViewModels[0].Img?a("img",{staticClass:"home-img",attrs:{src:e.TeamMatchItemViewModels[0].Img}}):a("img",{staticClass:"home-img",attrs:{src:s("4b29")}}),a("span",{staticClass:"homename"},[t._v(t._s(e.TeamMatchItemViewModels[0].TeamName))])]),a("div",{staticClass:"title-center"},[a("span",{staticClass:"home commondiv"},[t._v(t._s(t.$t("Host")))]),a("span",{staticClass:"away commondiv"},[t._v(t._s(t.$t("Guest")))])]),a("div",{staticClass:"title-right"},[a("span",{staticClass:"awayname"},[t._v(t._s(e.TeamMatchItemViewModels[1].TeamName))]),e.TeamMatchItemViewModels[1].Img?a("img",{staticClass:"away-img",attrs:{src:e.TeamMatchItemViewModels[1].Img}}):a("img",{staticClass:"away-img",attrs:{src:s("4b29")}})])]),a("div",{staticClass:"guess-main"},[a("div",{staticClass:"guess-main-title"},[2==t.playtype?a("div",{staticClass:"left"},[2==t.playtype?a("p",[t._v("上27")]):t._e(),2==t.playtype?a("p",[t._v("\n                "+t._s(e.TeamMatchItemViewModels[0].Score)+":\n                "+t._s(e.TeamMatchItemViewModels[1].Score)+"\n              ")]):t._e()]):t._e(),a("div",{staticClass:"time"},[t._v("\n              "+t._s(e.MatchItemStartTime.slice(0,e.MatchItemStartTime.indexOf("T")))+"\n              "+t._s(e.MatchItemStartTime.slice(e.MatchItemStartTime.indexOf("T")+1))+"\n            ")]),1==t.playtype||0==t.playtype?a("div",{staticClass:"more",on:{click:function(s){return t.gojump(e.MatchId)}}},[t._v("\n              "+t._s(t.$t("More"))+"\n            ")]):t._e()]),a("div",{staticClass:"guess-main-content"},t._l(e.CommonPlayViewModelGroups,(function(e){return a("div",{key:e.id,staticClass:"content-item"},t._l(e,(function(e){return a("div",{key:e.id,class:{pstyle:-1!=e.PlayId},on:{click:function(s){return t.showBetFn(e.PlayId)}}},[t._v("\n                "+t._s(e.Text)+"\n              ")])})),0)})),0)])])})),0==t.$store.state.match.Matchitems.length?a("div",{staticClass:"nodata"},[a("p",[t._v(t._s(t.$t("NoData")))])]):t._e()],2)]),a("FlowAd",{attrs:{isOpenAd:t.isOpenAd,adTypeId:t.adTypeId,isFinished:t.isFinished,AdObj:t.AdObj},on:{"update:isOpenAd":function(e){t.isOpenAd=e},"update:is-open-ad":function(e){t.isOpenAd=e},"update:isFinished":function(e){t.isFinished=e},"update:is-finished":function(e){t.isFinished=e},isFinished:t.finishedAd}}),a("nav-bottom",{staticClass:"match-bottom"})],1)},i=[],n=(s("96cf"),s("3b8d")),c=(s("4917"),s("e6c2")),o=s("cc22"),r=s("ebd9"),l=s("9481"),d=s("2f68"),u=s("c5c2"),h=s("f6ba"),m={watch:{betnum:function(){3==this.betinfo.PlayType||4==this.betinfo.PlayType||5==this.betinfo.PlayType||6==this.betinfo.PlayType?this.money=(this.betnum*this.betinfo.OddsValue).toFixed(2):this.money=(this.betnum*this.betinfo.OddsValue-this.betnum).toFixed(2),this.rangeValue=parseInt(this.betnum)}},components:{NavBottom:c["a"],back:o["a"],model:r["a"],FlowAd:d["a"]},data:function(){return{tab1:!0,tab2:!1,tab3:!1,show:!1,showbet:!1,betnum:0,rangeValue:0,rangeMaxVal:0,money:"",playtype:0,playId:"",betinfo:"",rankinfo:"",fastnum:"",IsOddsChange:!1,lastOdds:"",newOdds:"",timer:{timer1:"",timer2:"",timer3:""},countDownTimer:"",countDownTime:30,qualifyingMinBet:1,isBetDisable:!1,isOpenAd:!1,adTypeId:0,isFinished:!1,AdObj:{}}},created:function(){this.initGetMatchPlay(),this.getrankmatchinfo()},methods:{fastbet:function(t){this.fastnum=t,this.betnum=t},getrankmatchinfo:function(){var t=this,e={matchId:this.$store.state.match.MatchId};Object(u["t"])(e,!0).then((function(e){t.rankinfo=e}))},gojump:function(t){this.$router.push("/matchmore")},closedialog:function(){this.showbet=!1},showBetFn:function(t){var e=this;if(this.betnum=0,this.playId=t,-1!=this.playId){var s={playId:t,betType:2};Object(u["e"])(s,!0).then((function(t){Math.abs(t.Code)>=600?e.$message({message:t.Message,duration:3e3,type:"error",center:!0}):(e.showbet=!0,e.betinfo=t,e.lastOdds=e.betinfo.OddsValue,e.betnum=t.MinBetIntegral,e.rangeValue=e.betnum,-1===t.MaxBetIntegral?e.rangeMaxVal=1e4:e.rangeMaxVal=t.MaxBetIntegral),e.betinfo.AvailableIntegral<e.betinfo.MinBetIntegral&&(e.isDisable=!0)}))}},changeRangeVal:function(){this.betnum=this.rangeValue;var t=document.querySelector(".slide-tooltip"),e=document.querySelector(".el-slider__bar"),s=t.getBoundingClientRect().width,a=e.offsetWidth,i=e.offsetParent.offsetLeft,n=s/2+(i-s);this.isrunTwice?t.style.left=a+n+"px":(t.style.left=n+"px",this.isrunTwice=!0)},addbet:function(){this.betnum=this.betnum+1},losebet:function(){0!=this.betnum&&(this.betnum=this.betnum-1)},getmoney1:function(){},betClick:function(){var t=this;this.newChangeOdds().then((function(){t.lastOdds!==t.newOdds?(t.showbet=!1,t.IsOddsChange=!0,t.getMatchPlay()):t.bet()}))},bet:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){var e,s=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!this.isBetDisable&&this.showbet){t.next=2;break}return t.abrupt("return",!1);case 2:if(this.isBetDisable=!0,e={playId:this.playId,betIntegral:this.betnum,betType:2},!(this.betnum>=1)){t.next=9;break}return t.next=7,Object(u["a"])(e,!0).then((function(t){if(t.IsBetSucceed){s.$message({message:s.$t("BettingSuccess"),duration:2500,type:"success",center:!0}),s.showbet=!1,s.getrankmatchinfo(),s.fastnum="",l["b"].play(),s.adTypeId=2;var e={flowAdTypeId:s.adTypeId};Object(h["a"])(e,!0).then((function(t){0==t.Data.Id?s.isOpenAd=!1:(s.isOpenAd=!0,s.AdObj=t.Data),s.isBetDisable=!1})),s.isFinished=!1}else Math.abs(t.Code)>=600&&(s.$message({message:t.Message,duration:1e3,type:"error",center:!0}),"余额不足"==t.Message&&(setTimeout((function(){s.adTypeId=2;var t={flowAdTypeId:s.adTypeId};Object(h["a"])(t,!0).then((function(t){0==t.Data.Id?s.isOpenAd=!1:(s.isOpenAd=!0,s.AdObj=t.Data)}))}),1e3),s.showbet=!1,s.isBetDisable=!1),s.isBetDisable=!1)}));case 7:t.next=10;break;case 9:this.$message.error("投注金额需要大于1元");case 10:this.getMatchPlay();case 11:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),default:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:0==this.$store.state.match.Matchitems.length&&this.tabshow(1).then((function(){0==e.$store.state.match.Matchitems.length&&e.tabshow(2)})),this.cycling();case 2:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),initGetMatchPlay:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.tabshow(0).then((function(){e.default()}));case 1:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),getMatchPlay:function(){this.$store.dispatch("asyncGetMatchplay",{id:this.playtype})},tabshow:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.$store.commit("uploading",!0),this.loading=!0,this.playtype=e,0==e&&(this.tab1=!0,this.tab2=!1,this.tab3=!1),1==e&&(this.tab1=!1,this.tab2=!0,this.tab3=!1),2==e&&(this.tab1=!1,this.tab2=!1,this.tab3=!0),t.next=8,this.$store.dispatch("asyncGetMatchplay",{id:e});case 8:this.cycling();case 9:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),cycling:function(){var t=this;this.tab1&&(this.destroyed(),this.timer.timer1=setInterval((function(){t.getMatchPlay()}),3e4),this.countDownTime=30,this.countDown()),this.tab2&&(this.destroyed(),this.timer.timer2=setInterval((function(){t.getMatchPlay()}),3e4),this.countDownTime=30,this.countDown()),this.tab3&&(this.destroyed(),this.timer.timer3=setInterval((function(){t.getMatchPlay()}),2e3))},countDown:function(){var t=this;this.countDownTimer=setInterval((function(){t.countDownTime<=0&&(t.countDownTime=30),t.countDownTime=t.countDownTime-1}),1e3)},refresh:function(){this.getMatchPlay(),this.cycling();var t=this,e=t.$message({message:this.$t("RefreshedSuccessfully"),duration:3e3,type:"success",center:!0});setTimeout((function(){e.close()}),2e3)},destroyed:function(){clearInterval(this.timer.timer1),clearInterval(this.timer.timer2),clearInterval(this.timer.timer3),clearInterval(this.countDownTimer)},newChangeOdds:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){var e,s=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(-1!=this.playId){t.next=2;break}return t.abrupt("return");case 2:return e={playId:this.playId,betType:2},t.next=5,Object(u["e"])(e,!0).then((function(t){Math.abs(t.Code)>=600?s.$message({message:t.Message,duration:3e3,type:"error",center:!0}):(s.betinfo=t,s.newOdds=s.betinfo.OddsValue)}));case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),closeOddsChange:function(){this.getMatchPlay(),this.showbet=!1,this.IsOddsChange=!1},finishedAd:function(t){this.isFinished=t}},destroyed:function(){clearInterval(this.timer.timer1),clearInterval(this.timer.timer2),clearInterval(this.timer.timer3),clearInterval(this.countDownTimer)}},b=m,p=(s("0bdc"),s("2877")),f=Object(p["a"])(b,a,i,!1,null,"6dceb0b5",null);e["default"]=f.exports},"72f5":function(t,e,s){},cc22:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("i",{staticClass:"back-icon",on:{click:t.gojump}})},i=[],n={methods:{gojump:function(){"/myClub"!=this.$route.path?"/myself"!=this.$route.path?"/ClubActivities"!=this.$route.path?(this.$router.goBack(),this.$store.commit("upBack")):this.$router.push("/myClub"):this.$router.push("/"):this.$router.push("/myself")}}},c=n,o=s("2877"),r=Object(o["a"])(c,a,i,!1,null,null,null);e["a"]=r.exports}}]);
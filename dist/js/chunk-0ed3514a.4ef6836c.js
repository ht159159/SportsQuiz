(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0ed3514a"],{"063c":function(t,a,e){},b9f4:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"Cmatch"},[s("div",{staticClass:"Cmatch-head"},[s("back",{staticClass:"back-icon"}),s("div",{staticClass:"title"},[t._v(t._s(t.$t("ChallengeGame")))])],1),s("div",{staticClass:"Cmatch-main"},[s("div",{staticClass:"Cmatch-main-layer"},[s("div",{staticClass:"Cmatch-main-layer-num"},[t._v(t._s(t.$t("Round4")))]),s("div",{staticClass:"Cmatch-main-layer-left"},[s("p",{staticClass:"Cmatch-main-layer-left-one"},[t._v(t._s(t.$t("ThisRound")))]),s("p",{staticClass:"Cmatch-main-layer-left-two"},[t._v(t._s(t.$t("WinReward")))]),t.Reward?s("p",{staticClass:"Cmatch-main-layer-left-three"},[1==t.Reward[0].RewardType?s("span",[t._v(t._s(t.Reward[0].RewardValue)+t._s(t.$t("Coins")))]):t._e(),2==t.Reward[0].RewardType?s("span",[t._v(t._s(t.Reward[0].RewardValue)+t._s(t.Reward[0].RewardValue)+" "+t._s(t.$t("Lottery")))]):t._e()]):t._e()]),s("div",{staticClass:"Cmatch-main-layer-right"},[s("p",{staticClass:"Cmatch-main-layer-left-one"},[t._v(t._s(t.$t("NextRound")))]),s("p",{staticClass:"Cmatch-main-layer-left-two"},[t._v(t._s(t.$t("WinReward")))]),t.Reward?s("p",{staticClass:"Cmatch-main-layer-left-three"},[1==t.Reward[1].RewardType?s("span",[t._v(t._s(t.Reward[1].RewardValue)+" "+t._s(t.$t("Coins")))]):t._e(),2==t.Reward[1].RewardType?s("span",[t._v(t._s(t.Reward[1].RewardValue)+" "+t._s(t.$t("Lottery")))]):t._e()]):t._e()])])]),s("div",{staticClass:"Cmatch-bottom"},[s("div",{staticClass:"Cmatch-bottom-bet"},[s("div",{staticClass:"Cmatch-bottom-bet-title"},[t._v(t._s(t.$t("OverUnder")))]),t.matchs?s("div",{staticClass:"Cmatch-bottom-bet-home"},[t.matchs[0].TeamMatchItemViewModels[0].Img?s("img",{staticClass:"Cmatch-bottom-bet-home-img",attrs:{src:t.matchs[0].TeamMatchItemViewModels[0].Img,alt:""}}):s("img",{staticClass:"Cmatch-bottom-bet-home-img",attrs:{src:e("4b29")}}),s("p",{staticClass:"Cmatch-team-name"},[t._v(t._s(t.matchs[0].TeamMatchItemViewModels[0].TeamName))])]):t._e(),t.matchs?s("div",{staticClass:"Cmatch-bottom-bet-away"},[t.matchs[0].TeamMatchItemViewModels[1].Img?s("img",{staticClass:"Cmatch-bottom-bet-away-img",attrs:{src:t.matchs[0].TeamMatchItemViewModels[1].Img,alt:""}}):s("img",{staticClass:"Cmatch-bottom-bet-away-img",attrs:{src:e("4b29")}}),s("p",{staticClass:"Cmatch-team-name"},[t._v(t._s(t.matchs[0].TeamMatchItemViewModels[1].TeamName))])]):t._e(),t.matchs?s("div",{staticClass:"Cmatch-bottom-bet-home2"},[t.matchs[1].TeamMatchItemViewModels[0].Img?s("img",{staticClass:"Cmatch-bottom-bet-home-img",attrs:{src:t.matchs[1].TeamMatchItemViewModels[0].Img,alt:""}}):s("img",{staticClass:"Cmatch-bottom-bet-home-img",attrs:{src:e("4b29")}}),s("p",{staticClass:"Cmatch-team-name"},[t._v(t._s(t.matchs[1].TeamMatchItemViewModels[0].TeamName))])]):t._e(),t.matchs?s("div",{staticClass:"Cmatch-bottom-bet-away2"},[t.matchs[1].TeamMatchItemViewModels[1].Img?s("img",{staticClass:"Cmatch-bottom-bet-away-img",attrs:{src:t.matchs[1].TeamMatchItemViewModels[1].Img,alt:""}}):s("img",{staticClass:"Cmatch-bottom-bet-away-img",attrs:{src:e("4b29")}}),s("p",{staticClass:"Cmatch-team-name"},[t._v(t._s(t.matchs[1].TeamMatchItemViewModels[1].TeamName))])]):t._e(),s("div",{staticClass:"Cmatch-bottom-bet-main"},t._l(t.bettype,(function(a,e){return s("div",{key:e,staticClass:"Cmatch-bottom-bet-main-win",class:{active:t.num==e},on:{click:function(s){return t.bet(e,a.PlayId)}}},[t._v("\n          "+t._s(a.Text)+"\n        ")])})),0),s("div",{staticClass:"Cmatch-bottom-bet-main main2"},t._l(t.bettype2,(function(a,e){return s("div",{key:e,staticClass:"Cmatch-bottom-bet-main-win",class:{active:t.num2==e},on:{click:function(s){return t.bet1(e,a.PlayId)}}},[t._v("\n          "+t._s(a.Text)+"\n        ")])})),0)]),s("div",{staticClass:"Cmatch-bottom-button"},[s("div",{staticClass:"Cmatch-bottom-button-main"},[s("div",{staticClass:"Cmatch-bottom-button-main-button",on:{click:t.goBet}},[t._v("\n          "+t._s(t.$t("Confirm"))+"\n        ")])])])])])},c=[],i=e("cc22"),m=e("c5c2"),o=e("9481"),n={components:{back:i["a"]},created:function(){this.getMatch()},data:function(){return{num:-1,num2:-1,matchs:"",bettype:"",bettype2:"",playid:0,playid2:0,bet3:"",bet2:"",Reward:""}},methods:{goBet:function(){var t=this;if(0!=this.playid)if(0!=this.playid2){var a={playId:this.playid,betType:3},e={playId:this.playid2,betType:3};Object(m["a"])(a,!0).then((function(a){a.IsBetSucceed&&(t.$message({message:t.$t("BettingSuccess"),duration:2500,type:"success",center:!0}),o["b"].play(),setTimeout((function(){t.$router.push("/challengehome")}),1e3))})),Object(m["a"])(e,!0).then((function(a){Math.abs(a.Code)>=600&&t.$message({message:a.Message,duration:2e3,type:"error",center:!0})}))}else alert(this.$t("PleaseSelectTheSecondMatch"));else alert(this.$t("PleaseSelectTheFirstMatch"))},bet:function(t,a){this.num=t,this.playid=a},bet1:function(t,a){this.num2=t,this.playid2=a},getMatch:function(){var t=this;Object(m["i"])("",!0).then((function(a){t.Reward=a.Reward,0===a.data.Data.length?t.$message({message:t.$t("NoGameTip"),duration:3e3,type:"error",center:!0}):t.matchs=a.data.Data,t.bettype=a.data.Data[0].CommonPlayViewModelGroups[0].filter((function(t){return-1!=t.PlayId})),t.bettype2=a.data.Data[1].CommonPlayViewModelGroups[0].filter((function(t){return-1!=t.PlayId}))}))}}},l=n,h=(e("ce8b"),e("2877")),r=Object(h["a"])(l,s,c,!1,null,"eefd63d4",null);a["default"]=r.exports},cc22:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("i",{staticClass:"back-icon",on:{click:t.gojump}})},c=[],i={methods:{gojump:function(){"/myClub"!=this.$route.path?"/myself"!=this.$route.path?"/ClubActivities"!=this.$route.path?(this.$router.goBack(),this.$store.commit("upBack")):this.$router.push("/myClub"):this.$router.push("/"):this.$router.push("/myself")}}},m=i,o=e("2877"),n=Object(o["a"])(m,s,c,!1,null,null,null);a["a"]=n.exports},ce8b:function(t,a,e){"use strict";var s=e("063c"),c=e.n(s);c.a}}]);
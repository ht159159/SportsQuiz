(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8497c8a8"],{"66a4":function(t,a,s){t.exports=s.p+"img/third.800333bb.png"},7728:function(t,a,s){"use strict";s.d(a,"a",(function(){return n})),s.d(a,"e",(function(){return r})),s.d(a,"d",(function(){return A})),s.d(a,"c",(function(){return o})),s.d(a,"b",(function(){return l}));var i=s("f6ae"),e="/Ranking";function n(t,a){return Object(i["a"])(e+"/GetBetAmount",t,a)}function r(t,a){return Object(i["a"])(e+"/GetWinCount",t,a)}function A(t,a){return Object(i["a"])(e+"/GetWinAmount",t,a)}function o(t,a){return Object(i["a"])(e+"/GetRankingMedal",t,a)}function l(t,a){return Object(i["a"])(e+"/GetMemberRankingInfo",t,a)}},"78cc":function(t,a,s){t.exports=s.p+"img/champion.d8c116fc.png"},"87bb":function(t,a,s){t.exports=s.p+"img/second.72690e8a.png"},b614:function(t,a,s){"use strict";s.r(a);var i=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("main",{staticClass:"rankboardList"},[i("div",{staticClass:"rankboard-list-head"},[i("div",{staticClass:"rankboard-list-head-wrap-1"},[i("back",{staticClass:"back-icon"}),i("p",[t._v(t._s(t.rankTypeName))])],1)]),i("div",{staticClass:"details-main"},[i("div",{staticClass:"my-self-rank"},[i("img",{staticClass:"my-img",attrs:{src:t.player.UImg}}),i("div",[t._v(t._s(t.$t("YouAreRankedNo"))+t._s(t.player.No)+","+t._s(t.$t("TotalCoins"))+"："+t._s(t.player.Amount))])]),i("div",{staticClass:"top-three"},[t.second?i("div",{staticClass:"ranking"},[i("img",{staticClass:"trophy",attrs:{src:s("87bb"),alt:""}}),i("img",{staticClass:"rankingimg",attrs:{src:t.second.UImg,alt:""},on:{click:function(a){return t.peek(t.second.UId)}}}),i("div",{staticClass:"ranking-main"},[i("p",{staticClass:"rankname"},[t._v(t._s(t.second.NickName))]),i("p",{staticClass:"yellow-text"},[t._v(t._s(t.unit)+" : "+t._s(t.second.Amount))])])]):i("div",{staticClass:"ranking"},[i("img",{staticClass:"trophy",attrs:{src:s("87bb"),alt:""}}),i("img",{staticClass:"rankingimg",attrs:{src:s("f631"),alt:""}}),i("div",{staticClass:"ranking-main"},[i("p",{staticClass:"rankname"},[t._v(t._s(t.$t("WaitAndSee")))]),i("p",{staticClass:"yellow-text"},[t._v(t._s(t.unit)+" : 0")])])]),t.champion?i("div",{staticClass:"ranking champ"},[i("img",{staticClass:"trophy champ-trophy",attrs:{src:s("78cc")}}),i("img",{staticClass:"champ-img rankingimg",attrs:{src:t.champion.UImg,alt:""},on:{click:function(a){return t.peek(t.champion.UId)}}}),i("div",{staticClass:"ranking-main"},[i("p",{staticClass:"rankname"},[t._v(t._s(t.champion.NickName))]),i("p",{staticClass:"yellow-text"},[t._v(t._s(t.unit)+" : "+t._s(t.champion.Amount))])])]):i("div",{staticClass:"ranking"},[i("img",{staticClass:"trophy champ-trophy",attrs:{src:s("78cc")}}),i("img",{staticClass:"champ-img rankingimg",attrs:{src:s("f631"),alt:""}}),i("div",{staticClass:"ranking-main"},[i("p",{staticClass:"rankname"},[t._v(t._s(t.$t("WaitAndSee")))]),i("p",{staticClass:"yellow-text"},[t._v(t._s(t.unit)+" : 0")])])]),t.third?i("div",{staticClass:"ranking"},[i("img",{staticClass:"trophy",attrs:{src:s("66a4")}}),i("img",{staticClass:"rankingimg",attrs:{src:t.third.UImg,alt:""},on:{click:function(a){return t.peek(t.third.UId)}}}),i("div",{staticClass:"ranking-main"},[i("p",{staticClass:"rankname"},[t._v(t._s(t.third.NickName))]),i("p",{staticClass:"yellow-text"},[t._v(t._s(t.unit)+" : "+t._s(t.third.Amount))])])]):i("div",{staticClass:"ranking"},[i("img",{staticClass:"trophy",attrs:{src:s("66a4")}}),i("img",{staticClass:"rankingimg",attrs:{src:s("f631"),alt:""}}),i("div",{staticClass:"ranking-main"},[i("p",{staticClass:"rankname"},[t._v(t._s(t.$t("WaitAndSee")))]),i("p",{staticClass:"yellow-text"},[t._v(t._s(t.unit)+" : 0")])])])]),i("div",{staticClass:"other-rankins"},[i("div",{staticClass:"rank-item"},[i("p",{staticClass:"purple-text"},[t._v(t._s(t.$t("Rank")))]),i("p",{staticClass:"purple-text"}),i("p",{staticClass:"purple-text"},[t._v(t._s(t.$t("Nickname")))]),i("p",{staticClass:"purple-text"},[t._v(t._s(t.unit))]),i("p",{staticClass:"purple-text"},[t._v(t._s(t.$t("Detailed")))])]),i("ul",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:t.load,expression:"load"}],staticClass:"other-rankins-wrap",attrs:{"infinite-scroll-disabled":"busy"}},[t._l(t.list,(function(a,s){return i("li",[i("div",[t._v("TOP "+t._s(s+4))]),i("div",[i("img",{attrs:{src:t.second.UImg}})]),i("div",{staticClass:"other-rankings-NickName"},[t._v(t._s(a.NickName))]),i("div",{class:[s+4<=10?"orange-text":"gold-text"]},[t._v("\n            "+t._s(a.Amount)+"\n          ")]),i("div",{staticClass:"detail-wrap"},[i("span",{staticClass:"detail-check",on:{click:function(s){return t.peek(a.UId)}}},[t._v(t._s(t.$t("TakePeek")))])])])})),t.isLoading?i("div",{staticStyle:{"font-size":".24rem","text-align":"center","line-height":".48rem"}},[t._v("\n          "+t._s(t.$t("WipeLoading"))+"...  ")]):t._e()],2),t.isNoData?i("div",{staticClass:"noDataRank"},[i("p",[t._v(t._s(t.$t("NoData")))])]):t._e()])]),t.openPeek?i("div",{staticClass:"fanybox-wrap"}):t._e(),i("transition",{attrs:{name:"fanybox"}},[t.openPeek?i("div",{staticClass:"peek"},[i("div",{staticClass:"user-info"},[i("img",{attrs:{src:t.userImg}}),i("div",{staticClass:"user-name"},[t._v(t._s(t.userNickName))])]),i("div",{staticClass:"user-info-content"},t._l(t.userInfo,(function(a){return i("div",{staticClass:"user-info-box"},[i("p",[t._v(t._s(a.title))]),i("p",[t._v(t._s(a.val))])])})),0),i("div",{staticClass:"peek-btn",on:{click:function(a){t.openPeek=!t.openPeek}}})]):t._e()])],1)},e=[],n=s("cc22"),r=s("ebd9"),A=s("7728"),o={components:{back:n["a"],model:r["a"]},data:function(){return{rankType:void 0,rankTypeName:"",unit:"",list:[],rankinfo:[],champion:[],second:[],third:[],player:[],openPeek:!1,championUid:"",secodUid:"",thirdUid:"",isNoData:!1,isLoading:!1,userInfo:[{title:this.$t("BettingGames"),val:""},{title:this.$t("BettingOdds"),val:""},{title:this.$t("VIPLevel"),val:""},{title:this.$t("MemberClub"),val:""},{title:this.$t("NumberOfChallenges"),val:""},{title:this.$t("ChallengePassRate"),val:""},{title:this.$t("ChallengeRanking"),val:""}],userImg:"",userNickName:"",busy:!1,push:!1,IndexNum:2,noMore:!1}},created:function(){this.getRankType()},methods:{getRankType:function(){this.rankType=localStorage.getItem("rankType"),1==this.rankType&&(this.rankTypeName=this.$t("TotalBetLeaderboard"),this.unit=this.$t("TotalBet"),this.getBetAmount()),2==this.rankType&&(this.rankTypeName=this.$t("WinLeaderboard"),this.unit=this.$t("Wins"),this.getWinCount()),3==this.rankType&&(this.rankTypeName=this.$t("WinCoinLeaderboard"),this.unit=this.$t("WinCoin"),this.getWinAmount())},getBetAmount:function(){var t=this,a={PageIndex:1,PageSize:20};this.isLoading=!0,Object(A["a"])(a,!0).then((function(a){a.Data.Others.length>0?(t.isLoading=!1,t.isNoData=!1,t.list=a.Data.Others,t.player=a.Data.Oneself):(t.isLoading=!1,t.isNoData=!0)})).then((function(){t.otherRank()}))},getWinCount:function(){var t=this,a={PageIndex:1,PageSize:20};this.isLoading=!0,Object(A["e"])(a,!0).then((function(a){a.Data.Others.length>0?(t.isLoading=!1,t.isNoData=!1,t.list=a.Data.Others,t.player=a.Data.Oneself):t.isNoData=!0})).then((function(){t.otherRank()}))},getWinAmount:function(){var t=this,a={PageIndex:1,PageSize:20};this.isLoading=!0,Object(A["d"])(a,!0).then((function(a){a.Data.Others.length>0?(t.isLoading=!1,t.isNoData=!1,t.list=a.Data.Others,t.player=a.Data.Oneself):t.isNoData=!0})).then((function(){t.otherRank()}))},otherRank:function(){this.champion=this.list.shift(),this.second=this.list.shift(),this.third=this.list.shift()},load:function(){var t=this;this.busy=!0;var a={PageIndex:this.IndexNum,PageSize:20};1==this.rankType&&Object(A["a"])(a,!0).then((function(a){if(0==a.Data.Others.length)t.busy=!0,t.push=!1;else if(a.Data.Others.length>0){for(var s=0;s<a.Data.Others.length;s++)t.list.push(a.Data.Others[s]),t.busy=!1;t.IndexNum++}})),2==this.rankType&&Object(A["e"])(a,!0).then((function(a){if(0==a.Data.Others.length)t.busy=!0,t.push=!1;else if(a.Data.Others.length>0){for(var s=0;s<a.Data.Others.length;s++)t.list.push(a.Data.Others[s]),t.busy=!1;t.IndexNum++}})),3==this.rankType&&Object(A["d"])(a,!0).then((function(a){if(0==a.Data.Others.length)t.busy=!0,t.push=!1;else if(a.Data.Others.length>0){for(var s=0;s<a.Data.Others.length;s++)t.list.push(a.Data.Others[s]),t.busy=!1;t.IndexNum++}}))},peek:function(t){var a=this,s={uid:t};Object(A["b"])(s,!0).then((function(t){if("600"==t.Code||"VIP等级不足"==t.Message){var s=a,i=s.$message({message:t.Message,duration:3e3,type:"error",center:!0});setTimeout((function(){i.close()}),2e3)}else a.openPeek=!0,a.userImg=t.Data.Img,a.userNickName=t.Data.NickName,a.userInfo[0].val=t.Data.BetNum,a.userInfo[1].val=t.Data.BetWinRate+"%",a.userInfo[2].val=t.Data.MemberRankName,""==t.Data.ClubName?a.userInfo[3].val="-":a.userInfo[3].val=t.Data.ClubName,a.userInfo[4].val=t.Data.ChallengeNum,a.userInfo[5].val=t.Data.ChallengePassRate+"%","0"==t.Data.ChallengeRank?a.userInfo[6].val="-":a.userInfo[6].val=t.Data.ChallengeRank}))}}},l=o,c=s("2877"),g=Object(c["a"])(l,i,e,!1,null,null,null);a["default"]=g.exports},cc22:function(t,a,s){"use strict";var i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("i",{staticClass:"back-icon",on:{click:t.gojump}})},e=[],n={methods:{gojump:function(){"/myClub"!=this.$route.path?"/myself"!=this.$route.path?"/ClubActivities"!=this.$route.path?(this.$router.goBack(),this.$store.commit("upBack")):this.$router.push("/myClub"):this.$router.push("/"):this.$router.push("/myself")}}},r=n,A=s("2877"),o=Object(A["a"])(r,i,e,!1,null,null,null);a["a"]=o.exports},f631:function(t,a){t.exports="data:image/jpeg;base64,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"}}]);
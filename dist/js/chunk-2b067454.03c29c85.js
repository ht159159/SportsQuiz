(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2b067454"],{4113:function(t,c,i){"use strict";i.d(c,"g",(function(){return n})),i.d(c,"b",(function(){return s})),i.d(c,"c",(function(){return u})),i.d(c,"f",(function(){return r})),i.d(c,"a",(function(){return o})),i.d(c,"h",(function(){return l})),i.d(c,"d",(function(){return h})),i.d(c,"j",(function(){return b})),i.d(c,"e",(function(){return m})),i.d(c,"i",(function(){return v}));var e=i("f6ae"),a="/ClubActivitys";function n(t,c){return Object(e["a"])(a+"/GetClubActivityMatchInfo",t,c)}function s(t,c){return Object(e["b"])(a+"/AddClubActivity",t,c)}function u(t,c){return Object(e["a"])(a+"/BuyClubActivityTicket",t,c)}function r(t,c){return Object(e["a"])(a+"/GetClubActivityMatchAndPlay",t,c)}function o(t,c){return Object(e["b"])(a+"/ActivityBets",t,c)}function l(t,c){return Object(e["a"])(a+"/GetClubActivityMatchResult",t,c)}function h(t,c){return Object(e["a"])(a+"/GetActivityBetResult",t,c)}function b(t,c){return Object(e["b"])(a+"/UpdateClubActivityStatus",t,c)}function m(t,c){return Object(e["a"])(a+"/GetClubActivityList",t,c)}function v(t,c){return Object(e["a"])(a+"/GetClubMatchs",t,c)}},c1e8:function(t,c,i){"use strict";i.r(c);var e=function(){var t=this,c=t.$createElement,i=t._self._c||c;return i("div",{staticClass:"club-Activity-match"},[i("div",{staticClass:"club-Activity-match-header"},[i("div",{staticClass:"club-Activity-match-header-wrap"},[i("back",{staticClass:"back-icon img-he"}),i("h3",[t._v(t._s(t.$t("ClubActivities")))])],1)]),i("div",{staticClass:"club-Activity-match-content"},t._l(t.matchObj,(function(c,e){return i("div",{staticClass:"match-box"},[i("p",{staticClass:"match-box-title"},[t._v(t._s(t.$t("SportGame"))+t._s(e+1))]),i("div",{staticClass:"match-box-team"},[i("div",{staticClass:"match-box-team-wrap"},[i("div",{staticClass:"team-name"},[i("p",[t._v(t._s(c.HomeTeam))]),i("div",{staticClass:"team-img",style:{backgroundImage:"url("+c.HomeTeamImg+")"}})]),i("p",{staticClass:"vs"},[t._v("VS")]),i("div",{staticClass:"team-name"},[i("div",{staticClass:"team-img",style:{backgroundImage:"url("+c.AwayTeamImg+")"}}),i("p",[t._v(t._s(c.AwayTeam))])])]),i("div",{staticClass:"gametip"},[t._v(t._s(t.$t("Select"))+t._s(c.SelectPosition))])]),i("div",{staticClass:"bet-btn-wrap"},t._l(c.Plays,(function(c,a){return i("div",{staticClass:"bet-btn",class:{"bet-btn-active":1==c.isClick},on:{click:function(i){return t.choosePlay(c,e,a)}},model:{value:t.active,callback:function(c){t.active=c},expression:"active"}},[t._v(t._s(c.Position))])})),0)])})),0),i("div",{staticClass:"confirm-btn-wrap"},[i("div",{staticClass:"confirm-btn",on:{click:function(c){return t.send()}}},[t._v("\n      "+t._s(this.$t("Confirm"))+"\n    ")])])])},a=[],n=(i("ac6a"),i("cc22")),s=i("4113"),u={name:"myClub",components:{back:n["a"]},data:function(){return{matchObj:[],matchObjIndex:void 0,btnIndex:void 0,active:void 0,newPlayAry:[],clubActivityId:""}},created:function(){localStorage.setItem("categoryIndex",1),this.getMatch()},methods:{getMatch:function(){var t=this;this.clubActivityId=localStorage.getItem("AcvtiveId");var c={ClubActivityId:this.clubActivityId};Object(s["f"])(c,!0).then((function(c){t.matchObj=c.Data,t.matchObj.forEach((function(t){t.PlayText="",t.Plays.forEach((function(t){t.isClick=0}))}));for(var i=0;i<t.matchObj.length;i++)for(var e=0;e<t.matchObj[i].Plays.length;e++)t.matchObj[i].PlayText+=t.matchObj[i].Plays[e].Position}))},choosePlay:function(t,c,i){var e=this;this.matchObj[c].Plays.forEach((function(t){1==t.isClick&&(t.isClick=0,e.active=0)})),this.active=0,this.matchObjIndex=c,this.matchObj[this.matchObjIndex].Plays[i].isClick=1,this.active=this.matchObj[this.matchObjIndex].Plays[i].isClick;var a=[];this.matchObj.forEach((function(t){t.Plays.forEach((function(t){a.push(t)}))}));var n=a.filter((function(t){return t.isClick>0}));this.newPlayAry=n.map((function(t){return t.PlayId}))},send:function(){var t=this,c={ClubActivityId:this.clubActivityId,PlayIds:this.newPlayAry};Object(s["a"])(c,!0).then((function(c){if(600!=c.Code){var i=t,e=i.$message({message:t.$t("BettingSuccess"),duration:3e3,type:"success",center:!0});setTimeout((function(){return e.close()}),2e3),setTimeout((function(){localStorage.setItem("categoryIndex",1),t.$router.push("/ClubActivities")}),3e3)}else{var a=t,n=a.$message({message:c.Message,duration:3e3,type:"error",center:!0});setTimeout((function(){return n.close()}),2e3)}}))}},beforeDestroy:function(){localStorage.setItem("categoryIndex",1)}},r=u,o=i("2877"),l=Object(o["a"])(r,e,a,!1,null,null,null);c["default"]=l.exports},cc22:function(t,c,i){"use strict";var e=function(){var t=this,c=t.$createElement,i=t._self._c||c;return i("i",{staticClass:"back-icon",on:{click:t.gojump}})},a=[],n={methods:{gojump:function(){"/myClub"!=this.$route.path?"/myself"!=this.$route.path?"/ClubActivities"!=this.$route.path?(this.$router.goBack(),this.$store.commit("upBack")):this.$router.push("/myClub"):this.$router.push("/"):this.$router.push("/myself")}}},s=n,u=i("2877"),r=Object(u["a"])(s,e,a,!1,null,null,null);c["a"]=r.exports}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5f5152f2"],{cc22:function(t,s,a){"use strict";var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("i",{staticClass:"back-icon",on:{click:t.gojump}})},i=[],n={methods:{gojump:function(){"/myClub"!=this.$route.path?"/myself"!=this.$route.path?"/ClubActivities"!=this.$route.path?(this.$router.goBack(),this.$store.commit("upBack")):this.$router.push("/myClub"):this.$router.push("/"):this.$router.push("/myself")}}},c=n,l=a("2877"),u=Object(l["a"])(c,e,i,!1,null,null,null);s["a"]=u.exports},db44:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"Cmouth"},[a("div",{staticClass:"Cmatch-head"},[a("back",{staticClass:"back-icon"}),a("div",{staticClass:"title"},[t._v("第"+t._s(t.mouth)+"月记录")])],1),a("div",{staticClass:"Cmouth-main"},[t._l(t.match.Data,(function(s,e){return a("el-collapse",{key:e,attrs:{accordion:""},on:{change:function(a){return t.handleChange(s.ChallengeId)}},model:{value:t.activeNames,callback:function(s){t.activeNames=s},expression:"activeNames"}},[t.match.Data?a("el-collapse-item",{attrs:{name:(e+1).toString()}},[a("template",{slot:"title"},[t._v("\n          第"+t._s(e+1)+"次挑战赛\n        ")]),t._l(t.matchitem,(function(s,e){return a("div",{key:e,staticClass:"item-items"},[t._l(s.Matchlist,(function(s,e){return a("div",{key:e,staticClass:"item-items-content"},[a("div",{staticClass:"item-items-name"},[a("span",{staticClass:"item-items-name-home"},[t._v("\n                "+t._s(s.Team.slice(0,s.Team.indexOf("V"))))]),a("span",{staticClass:"item-items-name-vs"},[t._v("vs")]),a("span",{staticClass:"item-items-name-away"},[t._v(t._s(s.Team.slice(s.Team.indexOf("S")+1)))])]),a("div",{staticClass:"item-items-model"},[t._v("类型:"+t._s(s.Play))]),a("div",{staticClass:"item-items-result"},[t._v("\n              结果:"),0==s.BetStatus?a("span",[t._v("未结算")]):t._e(),1==s.BetStatus?a("span",[t._v("等待确认")]):t._e(),2==s.BetStatus?a("span",[t._v("赢")]):t._e(),4==s.BetStatus?a("span",[t._v("输")]):t._e(),6==s.BetStatus?a("span",[t._v("竞猜失效")]):t._e(),8==s.BetStatus?a("span",[t._v("订单取消")]):t._e(),t._v("\n              (您选择为"+t._s(s.betValue)+")\n            ")])])})),a("div",{staticClass:"item-items-ceng"},[t._v("\n            第"+t._s(s.CurLevel)+"关:\n            "),1==s.Status?a("span",{staticClass:"success"},[t._v("获胜")]):t._e(),2==s.Status?a("span",[t._v("失败")]):t._e(),3==s.Status?a("span",[t._v("未结算")]):t._e()]),a("div",{staticClass:"item-items-gold"},[t._v("\n            共获得"),a("span",[t._v(t._s(s.Matchlist[0].RewardType))]),t._v(" :\n            "),1==s.Status?a("span",{staticClass:"success"},[t._v(t._s(s.Matchlist[0].RewardValue))]):t._e(),2==s.Status?a("span",{staticClass:"fail"},[t._v("\n              item.Matchlist[0].RewardValue")]):t._e(),3==s.Status?a("span",[t._v("0")]):t._e()]),1==s.Status?a("div",{staticClass:"bgc1",class:["zh-CN"==t.lang?"bgc1-CN":"en-US"==t.lang?"bgc1-US":"bgc1-TW"]}):t._e(),2==s.Status?a("div",{staticClass:"bgc",class:["zh-CN"==t.lang?"bgc-CN":"en-US"==t.lang?"bgc-US":"bgc-TW"]}):t._e()],2)}))],2):t._e()],1)})),0===t.match.TotalCount?a("div",{staticClass:"nomatchs"},[a("p",[t._v(t._s(t.$t("NoRecord")))])]):t._e()],2)])},i=[],n=a("cc22"),c=a("c5c2"),l={components:{back:n["a"]},created:function(){this.getmatch()},data:function(){return{activeNames:["1"],match:"",matchitem:"",mouth:this.$route.params.id,id:"",loading:!0}},methods:{handleChange:function(t){var s=this;this.id=t;var a={challengeId:this.id};Object(c["j"])(a,!0).then((function(t){s.matchitem=t}))},getmatch:function(){var t=this,s={month:this.$route.params.id};Object(c["k"])(s,!0).then((function(s){t.match=s,t.id=s.Data[0].ChallengeId;var a={challengeId:t.id};Object(c["j"])(a,!0).then((function(s){t.matchitem=s}))}))}}},u=l,m=a("2877"),o=Object(m["a"])(u,e,i,!1,null,null,null);s["default"]=o.exports}}]);
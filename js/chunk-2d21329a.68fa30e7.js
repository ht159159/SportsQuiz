(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21329a"],{ac02:function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"games"},[t._m(0),s("nav",{staticClass:"games-match-tabs"},[s("div",{staticClass:"games-match-tabs-tab"},t._l(t.$store.state.match.MatchType,(function(a){return s("div",{key:a.MatchTypeId,staticClass:"games-match-tabs-tab-title"},[s("span",{staticClass:"span-acitve"},[t._v(t._s(a.MatchTypeName))])])})),0)]),s("nav-bottom")],1)},c=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"sport-header"},[s("h3",[t._v("赛事")])])}],h=(s("4917"),s("e6c2")),i={created:function(){this.getMatchType(),this.showtabs2(this.football.matchTypeId)},name:"gameSport",components:{NavBottom:h["a"]},data:function(){return{active:0,tab1:!1,tab2:!0,tab3:!1,tab4:!1,tab5:!1,tab6:!1,football:{matchTypeId:this.$store.state.match.MatchType[0].MatchTypeId},date:"",count:"",mid:"",mlist:"",msgList:[],IndexNum:1,busy:!1,loading:!1,finished:!1,cid:""}},methods:{onLoad:function(){var t=this;setTimeout((function(){var a={matchTypeId:t.cid||t.$store.state.match.MatchType[0].MatchTypeId,index:t.IndexNum,count:10};if(t.$store.dispatch("asyncgetMatchList",a),10==t.$store.state.match.Matchs.length){for(var s=0;s<t.$store.state.match.Matchs.length;s++)t.msgList.push(t.$store.state.match.Matchs[s]);t.loading=!1,t.IndexNum++}else if(t.$store.state.match.Matchs.length<10&&t.$store.state.match.Matchs.length>0){for(var e=0;e<t.$store.state.match.Matchs.length;e++)t.msgList.push(t.$store.state.match.Matchs[e]);t.loading=!1,t.finished=!0}}),500)},gojump:function(t,a){this.$store.commit("upMatchid",{MatchId:t,MatchName:a}),this.$router.push("/match")},showtabs:function(t){this.cid=t;var a={matchTypeId:t,index:1,count:10};this.$store.dispatch("asyncgetMatchList",a)},showtabs2:function(t){var a={matchTypeId:t,index:1,count:10};this.$store.dispatch("asyncgetMatchList",a)},getMatchType:function(){var t={index:1,count:10};this.$store.dispatch("asyncgetMatchType",t)}}},n=i,o=s("2877"),m=Object(o["a"])(n,e,c,!1,null,null,null);a["default"]=m.exports}}]);
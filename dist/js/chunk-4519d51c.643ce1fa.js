(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4519d51c"],{"15e1":function(t,a,s){},"3c52":function(t,a,s){"use strict";var i=s("15e1"),n=s.n(i);n.a},6396:function(t,a,s){"use strict";s.r(a);var i=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("main",{staticClass:"game"},[i("div",{staticClass:"ss"},[i("div",{staticClass:"sport-header"},[i("h3",[t._v(t._s(t.$t("SportGame")))])]),i("nav",{staticClass:"match-tabs"},[i("van-tabs",{staticClass:"match-tab",model:{value:t.active,callback:function(a){t.active=a},expression:"active"}},t._l(t.ballTypes,(function(a){return i("van-tab",{key:a.MatchTypeId,attrs:{title:a.MatchTypeName}},[i("div",{staticClass:"matchbutton",attrs:{slot:"title"},on:{click:function(s){return t.showtabs(a.MatchTypeId)}},slot:"title"},[i("span",[t._v(t._s(a.MatchTypeName))])]),i("main",{staticClass:"sport-main"},[i("div",{staticClass:"sport-main-tabtitle"},[i("div",{staticClass:"sport-main-tabtitle-tabs",on:{click:function(a){return t.fntab(-1)}}},[i("span",{class:{"sport-main-tabtitle-tabs-active":-1==t.titlenum}},[t._v(t._s(t.$t("All")))])]),i("div",{staticClass:"sport-main-tabtitle-tabs",on:{click:function(a){return t.fntab(0)}}},[i("span",{class:{"sport-main-tabtitle-tabs-active":0==t.titlenum}},[t._v(t._s(t.$t("MorningSession")))])]),i("div",{staticClass:"sport-main-tabtitle-tabs",on:{click:function(a){return t.fntab(1)}}},[i("span",{class:{"sport-main-tabtitle-tabs-active":1==t.titlenum}},[t._v(t._s(t.$t("Today")))])]),i("div",{staticClass:"sport-main-tabtitle-tabs",on:{click:function(a){return t.fntab(2)}}},[i("span",{class:{"sport-main-tabtitle-tabs-active":2==t.titlenum}},[t._v(t._s(t.$t("Boules")))])])]),i("van-list",{staticClass:"sport-main-collapses",attrs:{finished:t.finished,"finished-text":t.ftext,offset:t.offsetnum,"loading-text":t.$t("WipeLoading")},on:{load:t.onLoad},model:{value:t.loading,callback:function(a){t.loading=a},expression:"loading"}},t._l(t.msgList,(function(a,n){return i("div",{key:n,staticClass:"sport-main-collapse",on:{click:function(s){return t.gojump(a.MatchId,a.MatchName)}}},[a.Img?i("img",{staticClass:"sport-main-collapse-img",attrs:{src:a.Img,alt:""}}):i("img",{staticClass:"sport-main-collapse-img",attrs:{src:s("4b29"),alt:""}}),i("div",{staticClass:"sport-main-collapse-name"},[t._v("\n                  "+t._s(a.MatchName)+"\n                ")]),i("div",{staticClass:"sport-main-collapse-icon"})])})),0),0===t.msgList.length&&0==t.loading?i("div",{staticClass:"nomatchs"},[i("p",[t._v(t._s(t.$t("NoMatch")))])]):t._e()],1)])})),1)],1)]),i("nav-bottom")],1)},n=[],e=s("e6c2"),c=s("c5c2"),o={created:function(){localStorage.setItem("titlenum",-1),this.getmatchs()},name:"gameSport",components:{NavBottom:e["a"]},data:function(){return{ballTypes:[],currenBallTypes:0,matchs:[],pageIndex:1,pageSize:10,active:0,tab1:!1,tab2:!0,tab3:!1,tab4:!1,tab5:!1,tab6:!1,date:"",count:"",mid:"",mlist:"",msgList:[],IndexNum:1,busy:!1,loading:!1,finished:!1,cid:"",page:"",ftext:"",matchItemTypeId:-1,titlenum:-1,offsetnum:50}},methods:{fntab:function(t){localStorage.setItem("titlenum",t),this.matchItemTypeId=t,this.titlenum=t,this.initialization(),2!=t&&0!=t&&1!=t&&-1!=t||this.$store.commit("uptitlenum",{id:t})},onLoad:function(){var t=this;this.one=!0,this.ftext=this.$t("WipeNomore");var a={matchTypeId:this.cid||this.ballTypes[0].MatchTypeId,index:this.IndexNum,count:10,havaPlay:!0,matchItemTypeId:this.matchItemTypeId};Object(c["r"])(a,!0).then((function(a){if(t.matchs=a.Data,t.page=a.TotalPages,0==t.matchs.length)return t.msgList=t.matchs,t.finished=!0,t.loading=!1,void(t.ftext="");if(10==t.matchs.length){t.IndexNum++;for(var s=0;s<t.matchs.length;s++)t.msgList.push(t.matchs[s]);return t.loading=!1,t.page==t.IndexNum-1?void(t.finished=!0):void 0}if(t.matchs.length<10&&t.matchs.length>0){for(var i=0;i<t.matchs.length;i++)t.msgList.push(t.matchs[i]);return t.loading=!1,void(t.finished=!0)}}))},getmatchs:function(){var t=this,a={index:1,count:10};Object(c["q"])(a,!0).then((function(a){t.ballTypes=a.Data;a.Data[0].MatchTypeId}))},gojump:function(t,a){this.$store.commit("upMatchid",{MatchId:t,MatchName:a}),this.$router.push("/match")},initialization:function(){this.msgList=[],this.IndexNum=1,this.loading=!0,this.finished=!1,this.loading&&this.onLoad()},showtabs:function(t){this.cid=t,this.initialization(),this.finished=!1},showtabs2:function(t){var a={matchTypeId:t,index:1,count:10};this.$store.dispatch("asyncgetMatchList",a)},getMatchType:function(){var t={index:1,count:10};this.$store.dispatch("asyncgetMatchType",t)}}},l=o,m=(s("3c52"),s("2877")),h=Object(m["a"])(l,i,n,!1,null,"798b5342",null);a["default"]=h.exports}}]);
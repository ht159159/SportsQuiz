(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-399484a0"],{"3c6b":function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"medal-wrap"},[s("main",{staticClass:"medal"},[t.ShowExplain?s("div",{staticClass:"explain"},[s("i",{staticClass:"explain-x",on:{click:function(a){t.ShowExplain=!t.ShowExplain}}}),s("p",{staticClass:"rank-popup-title"},[t._v(t._s(t.$t("MedalDescription")))]),s("div",{staticClass:"rank-popup-content"},[s("div",{staticClass:"text-wrap"},[s("p",[s("span",{staticClass:"green-title"},[t._v(t._s(t.$t("BetMedal")))]),t._v("\n            ："+t._s(t.$t("BetMedalTip"))+"\n          ")]),s("p",[s("span",{staticClass:"green-title"},[t._v(t._s(t.$t("MedalVictory")))]),t._v("\n            ："+t._s(t.$t("MedalVictoryTip"))+"  ")]),s("p",[s("span",{staticClass:"green-title"},[t._v(t._s(t.$t("MedalWinningCoins")))]),t._v("\n            ："+t._s(t.$t("MedalWinningCoinsTip"))+"\n          ")]),s("span",{staticClass:"blue-text"},[t._v(t._s(t.$t("UpdateCycle"))+"："+t._s(t.$t("UpdateTime")))])])])]):t._e(),s("div",{staticClass:"medal-header"},[s("back",{staticClass:"back-icon img-he"}),s("h3",[t._v(t._s(t.$t("MedalDisplay")))])],1),s("div",{staticClass:"main-content-wrap"},[s("div",{staticClass:"banner"}),s("div",{staticClass:"category-wrap"},[t._l(t.category,(function(a,e){return s("div",{key:e,staticClass:"category",class:{"category-focus":t.categoryType===e},on:{click:function(a){t.changeCategory(e),t.getMedalRank(e)}}},[s("span",[t._v(t._s(a))])])})),s("div",{staticClass:"tip",on:{click:t.showPopup}})],2),s("div",{staticClass:"content"},[s("div",{staticClass:"medal-wrap"},[s("div",{staticClass:"medal-category"},t._l(t.imgAry,(function(a,e){return s("div",{key:e,staticClass:"category-block"},t._l(a,(function(a,e){return s("div",{key:e,staticClass:"category-content-wrap "},[s("img",{class:[a.IsShow?"iscolorful":"isGray"],attrs:{src:a.ImageUrl,alt:""}}),s("el-slider",{directives:[{name:"show",rawName:"v-show",value:a.IsBar,expression:"pic.IsBar"}],class:[a.IsBar?"iscolorful":"isGray"],attrs:{"show-tooltip":!1,min:a.MinValue,max:a.MaxValue,disabled:"disabled"},model:{value:a.Amount,callback:function(s){t.$set(a,"Amount",s)},expression:"pic.Amount"}}),s("div",{directives:[{name:"show",rawName:"v-show",value:a.IsBar,expression:"pic.IsBar"}],staticClass:"bar-value",class:[a.IsBar?"iscolorful":"isGray"]},[t._v("\n                  "+t._s(a.Amount)+" / "+t._s(a.MaxValue)+"\n                ")])],1)})),0)})),0)])])])])])},i=[],n=s("cc22"),c=s("7728"),r={components:{back:n["a"]},data:function(){return{category:[this.$t("BetMedal"),this.$t("MedalVictory"),this.$t("MedalWinningCoins")],categoryType:0,imgAry:[],imgData:[],ShowExplain:!1}},created:function(){this.getMedalRank(this.categoryType),this.changeCategory(this.categoryType)},methods:{changeCategory:function(t){this.categoryType=t},getMedalRank:function(t){var a=this;this.imgAry=[];var s={type:t};Object(c["c"])(s,!0).then((function(t){a.imgData=t;for(var s=0;s<a.imgData.length;s+=2)a.imgAry.push(a.imgData.slice(s,s+2))}))},showPopup:function(){this.ShowExplain=!0}}},o=r,l=s("2877"),u=Object(l["a"])(o,e,i,!1,null,null,null);a["default"]=u.exports},7728:function(t,a,s){"use strict";s.d(a,"a",(function(){return n})),s.d(a,"e",(function(){return c})),s.d(a,"d",(function(){return r})),s.d(a,"c",(function(){return o})),s.d(a,"b",(function(){return l}));var e=s("f6ae"),i="/Ranking";function n(t,a){return Object(e["a"])(i+"/GetBetAmount",t,a)}function c(t,a){return Object(e["a"])(i+"/GetWinCount",t,a)}function r(t,a){return Object(e["a"])(i+"/GetWinAmount",t,a)}function o(t,a){return Object(e["a"])(i+"/GetRankingMedal",t,a)}function l(t,a){return Object(e["a"])(i+"/GetMemberRankingInfo",t,a)}},cc22:function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("i",{staticClass:"back-icon",on:{click:t.gojump}})},i=[],n={methods:{gojump:function(){"/myClub"!=this.$route.path?"/myself"!=this.$route.path?"/ClubActivities"!=this.$route.path?(this.$router.goBack(),this.$store.commit("upBack")):this.$router.push("/myClub"):this.$router.push("/"):this.$router.push("/myself")}}},c=n,r=s("2877"),o=Object(r["a"])(c,e,i,!1,null,null,null);a["a"]=o.exports}}]);
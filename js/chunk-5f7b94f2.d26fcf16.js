(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5f7b94f2"],{7478:function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"member-dynamic"},[e("div",{staticClass:"member-dynamic-header"},[e("div",{staticClass:"member-dynamic-header-wrap"},[e("back",{staticClass:"back-icon img-he"}),e("h3",[t._v(t._s(t.$t("MemberDynamics")))])],1)]),e("div",{staticClass:"member-dynamic-content-wrap"},[e("div",{staticClass:"member-dynamic-title-wrap"},[e("div",{class:[0==t.categoryIndex?"member-dynamic-title-focus":"member-dynamic-title"],on:{click:function(s){t.categoryIndex=0,t.getlist()}}},[t._v(t._s(t.$t("MemberDynamics")))]),e("div",{staticClass:"divider"}),e("div",{class:[1==t.categoryIndex?"member-dynamic-title-focus":"member-dynamic-title"],on:{click:function(s){t.categoryIndex=1,t.getlist()}}},[t._v(t._s(t.$t("AllMembers")))])]),e("div",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:t.load,expression:"load"}],staticClass:"member-dynamic-content",attrs:{"infinite-scroll-disabled":"busy","infinite-scroll-immediate":"immediate"}},[t._l(t.top10List,(function(s){return 0==t.categoryIndex?e("div",{staticClass:"members"},[e("img",{staticClass:"members-head-shot",attrs:{src:s.UImg,alt:""}}),e("div",{staticClass:"members-data"},[e("div",{staticClass:"members-name-wrap"},[e("div",{staticClass:"members-name"},[t._v(t._s(s.NickName))]),"会长"==s.Name?e("div",{staticClass:"present"},[t._v(t._s(s.Name))]):t._e(),"副会长"==s.Name?e("div",{staticClass:"vice-present"},[t._v(t._s(s.Name))]):t._e()]),e("div",{staticClass:"members-bet"},[e("div",{staticClass:"bet-times"},[e("span",[t._v(t._s(t.$t("NumberOfBets"))+":  ")]),e("span",{staticClass:"blue-text"},[t._v(t._s(s.BetSumNum))])]),e("div",{staticClass:"contribution"},[e("span",[t._v(t._s(t.$t("Contribution"))+": ")]),e("span",{staticClass:"green-text"},[t._v("+"+t._s(s.Contribution))])])]),e("div",{staticClass:"last-bet-time"},[e("p",[t._v(t._s(t.$t("LastBetTime"))+" : "+t._s(s.LastBetTime))])])])]):t._e()})),t._l(t.allList,(function(s){return 1==t.categoryIndex?e("div",{staticClass:"members"},[e("img",{staticClass:"members-head-shot",attrs:{src:s.UImg,alt:""}}),e("div",{staticClass:"members-data"},[e("div",{staticClass:"members-name-wrap"},[e("div",{staticClass:"members-name"},[t._v(t._s(s.NickName))]),"会长"==s.Name?e("div",{staticClass:"present"},[t._v(t._s(s.Name))]):t._e(),"副会长"==s.Name?e("div",{staticClass:"vice-present"},[t._v(t._s(s.Name))]):t._e()]),e("div",{staticClass:"members-bet"},[e("div",{staticClass:"bet-times"},[e("span",[t._v(t._s(t.$t("NumberOfBets"))+": ")]),e("span",{staticClass:"blue-text"},[t._v(t._s(s.BetSumNum))])]),e("div",{staticClass:"contribution"},[e("span",[t._v(t._s(t.$t("Contribution"))+": ")]),e("span",{staticClass:"green-text"},[t._v("+"+t._s(s.Contribution))])])]),e("div",{staticClass:"last-bet-time"},[e("p",[t._v(t._s(t.$t("LastBetTime"))+" : "+t._s(s.LastBetTime))])])])]):t._e()}))],2)])])},i=[],n=(e("ac6a"),e("cc22")),c=e("a5c1"),m={components:{back:n["a"]},data:function(){return{categoryIndex:0,top10List:[{UImg:"",UName:"",BetSumNum:0,Contribution:0}],allList:[{UImg:"",UName:"",BetSumNum:0,Contribution:0}],busy:!1,immediate:!1,indexNum:1,totalPages:0}},created:function(){this.getlist()},methods:{getlist:function(){var t=this,s={index:this.indexNum,count:10};Object(c["k"])(s,!0).then((function(s){t.top10List=s.Top5Data,t.allList=s.Data.Data,t.totalPages=s.Data.TotalPages}))},load:function(){var t=this;if(console.log("dasd"),this.indexNum>=this.totalPages)this.busy=!0;else{this.indexNum++;var s={index:this.indexNum,count:10};Object(c["k"])(s,!0).then((function(s){s.Data.Data.forEach((function(s){t.allList.push(s)}))}))}}}},l=m,r=e("2877"),o=Object(r["a"])(l,a,i,!1,null,null,null);s["default"]=o.exports},cc22:function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("i",{staticClass:"back-icon",on:{click:t.gojump}})},i=[],n={methods:{gojump:function(){"/myClub"!=this.$route.path?"/myself"!=this.$route.path?"/ClubActivities"!=this.$route.path?(this.$router.goBack(),this.$store.commit("upBack")):this.$router.push("/myClub"):this.$router.push("/"):this.$router.push("/myself")}}},c=n,m=e("2877"),l=Object(m["a"])(c,a,i,!1,null,null,null);s["a"]=l.exports}}]);
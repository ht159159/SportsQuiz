(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ff26d218"],{"2d3d":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("main",{staticClass:"add",staticStyle:{"overflow-x":"hidden"}},[a("div",{staticClass:"add-header",staticStyle:{position:"fixed",top:"0"}},[a("back",{staticClass:"back-icon img-he",on:{click:e.goHome}}),a("h3",[e._v(e._s(e.$t("ShippingAddress")))]),a("span",{staticClass:"save",on:{click:e.addAddress}},[e._v(e._s(e.$t("Save")))])],1),a("div",{staticClass:"add-couent",staticStyle:{"margin-top":"1.1rem"}},[a("ul",{staticClass:"add-couent-ul"},[a("li",{staticClass:"add-couent-ul-item"},[a("span",{staticClass:"zileft"},[e._v(e._s(e.$t("Receiver")))]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.getPer,expression:"getPer"}],staticClass:"bigInp",staticStyle:{"margin-left":".4rem"},attrs:{placeholder:"",maxlength:e.Max},domProps:{value:e.getPer},on:{input:function(t){t.target.composing||(e.getPer=t.target.value)}}})]),a("li",{staticClass:"add-couent-ul-item"},[a("span",{staticClass:"zileft"},[e._v(e._s(e.$t("Mobile")))]),a("input",{directives:[{name:"model",rawName:"v-model.number",value:e.phone,expression:"phone",modifiers:{number:!0}}],staticClass:"bigInp",attrs:{placeholder:"",type:"number",oninput:"oninput"},domProps:{value:e.phone},on:{input:function(t){t.target.composing||(e.phone=e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}})]),a("li",{staticClass:"add-couent-ul-item",staticStyle:{position:"relative"}},[a("span",{staticClass:"zileft"},[e._v(e._s(e.$t("Area")))]),a("el-cascader",{staticClass:"citySelect",attrs:{options:e.cityListNew,clearable:e.clear,props:{expandTrigger:"hover"},placeholder:e.$t("Select")},on:{change:e.handleChange},model:{value:e.cityCodeList,callback:function(t){e.cityCodeList=t},expression:"cityCodeList"}})],1),a("li",{staticClass:"add-couent-ul-item",staticStyle:{border:"0",height:"1.4rem"}},[a("span",{staticClass:"zileft"},[e._v(e._s(e.$t("DetailAddress")))]),a("el-input",{staticClass:"input",attrs:{type:"textarea",autosize:{minRows:2,maxRows:2},placeholder:e.$t("AddressPlaceholder")},model:{value:e.detailAdd,callback:function(t){e.detailAdd=t},expression:"detailAdd"}})],1)]),a("div",{staticClass:"sure"},[a("span",[e._v(e._s(e.$t("DefaultAddress")))]),a("el-switch",{attrs:{"active-color":"#34c759","inactive-color":"#bfbfbf"},on:{change:e.changes},model:{value:e.value2,callback:function(t){e.value2=t},expression:"value2"}})],1)])])},i=[],n=(a("a481"),a("ac6a"),a("cc22")),r=a("2e8e"),c=a("9fb8"),o=(a("2f62"),a("2b0e")),l=a("1125"),d=a("d399");o["default"].use(l["a"]).use(d["a"]);var u={components:{back:n["a"]},data:function(){return{clear:!0,getPer:"",phone:"",address:"",detailAdd:"",value2:!0,isDefault:0,cityListNew:r["a"],cityCodeList:[],Max:4}},watch:{},mounted:function(){console.log(JSON.stringify(r["a"]))},methods:{oninput:function(e){},goHome:function(){this.$router.push("/address")},handleChange:function(){},easyCity:function(){var e=this,t="";this.cityListNew.forEach((function(a){a.value==e.cityCodeList[0]&&(t+=a.label,a.children.forEach((function(a){a.value==e.cityCodeList[1]&&(t+=a.label),a.children.forEach((function(a){a.value==e.cityCodeList[2]&&(t+=a.label)}))})))})),this.address=t},goBack:function(){this.$router.go(-1)},changes:function(){return this.value2?1:0},addAddress:function(){var e=this;this.easyCity();var t=0;t=this.value2?1:0;var a={AId:"",UId:"",UName:this.getPer,UPhoneNumber:this.phone,URedeemAddress:this.address+this.detailAdd,IdentityCard:"123123",CreateTime:new Date,IsDefault:t};if(""==a.UName||""==a.UPhoneNumber||""==a.URedeemAddress){var s=this.$message({message:this.$t("CompleteAddressInformation"),type:"warning",duration:1e3});setTimeout((function(){return s.close()}),1200)}else Object(c["a"])(a,!0).then((function(t){if(1==t.Data){var a=e.$message({message:e.$t("SavedSuccessfully"),type:"success",duration:1e3});setTimeout((function(){return a.close()}),1200),e.$router.replace("/address"),e.$router.go(-1)}else{var s=e.$message({message:e.$t("successfullyDeleted"),type:"error",duration:1e3});setTimeout((function(){return s.close()}),1200)}}))}},created:function(){}},f=u,v=(a("f446"),a("efbd"),a("2877")),h=Object(v["a"])(f,s,i,!1,null,"034039ed",null);t["default"]=h.exports},"5d49":function(e,t,a){},a481:function(e,t,a){"use strict";var s=a("cb7c"),i=a("4bf8"),n=a("9def"),r=a("4588"),c=a("0390"),o=a("5f1b"),l=Math.max,d=Math.min,u=Math.floor,f=/\$([$&`']|\d\d?|<[^>]*>)/g,v=/\$([$&`']|\d\d?)/g,h=function(e){return void 0===e?e:String(e)};a("214f")("replace",2,(function(e,t,a,p){return[function(s,i){var n=e(this),r=void 0==s?void 0:s[t];return void 0!==r?r.call(s,n,i):a.call(String(n),s,i)},function(e,t){var i=p(a,e,this,t);if(i.done)return i.value;var u=s(e),f=String(this),v="function"===typeof t;v||(t=String(t));var m=u.global;if(m){var b=u.unicode;u.lastIndex=0}var C=[];while(1){var y=o(u,f);if(null===y)break;if(C.push(y),!m)break;var $=String(y[0]);""===$&&(u.lastIndex=c(f,n(u.lastIndex),b))}for(var w="",S=0,x=0;x<C.length;x++){y=C[x];for(var A=String(y[0]),_=l(d(r(y.index),f.length),0),k=[],P=1;P<y.length;P++)k.push(h(y[P]));var I=y.groups;if(v){var L=[A].concat(k,_,f);void 0!==I&&L.push(I);var N=String(t.apply(void 0,L))}else N=g(A,f,_,k,I,t);_>=S&&(w+=f.slice(S,_)+N,S=_+A.length)}return w+f.slice(S)}];function g(e,t,s,n,r,c){var o=s+e.length,l=n.length,d=v;return void 0!==r&&(r=i(r),d=f),a.call(c,d,(function(a,i){var c;switch(i.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,s);case"'":return t.slice(o);case"<":c=r[i.slice(1,-1)];break;default:var d=+i;if(0===d)return a;if(d>l){var f=u(d/10);return 0===f?a:f<=l?void 0===n[f-1]?i.charAt(1):n[f-1]+i.charAt(1):a}c=n[d-1]}return void 0===c?"":c}))}}))},ce01:function(e,t,a){},efbd:function(e,t,a){"use strict";var s=a("ce01"),i=a.n(s);i.a},f446:function(e,t,a){"use strict";var s=a("5d49"),i=a.n(s);i.a}}]);
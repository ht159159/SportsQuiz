(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d6d35"],{"73cf":function(e,t,s){"use strict";s.r(t);var o=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"register"},[o("i",{staticClass:"back-icon",on:{click:e.gojump}}),o("input-Comp",{staticClass:"register-input",attrs:{placeholder:e.$t("Placehoder_Accout"),clear:"",account:""},on:{"update:value":e.getAccount},model:{value:e.account,callback:function(t){e.account=t},expression:"account"}}),o("div",{staticClass:"inputComponent"},[o("img",{staticClass:"inputComponent-icon",attrs:{src:s("5d06"),alt:""}}),"checkbox"===e.ifPassword?o("input",{directives:[{name:"model",rawName:"v-model",value:e.confirmPassword,expression:"confirmPassword"}],staticClass:"inputComponent-input",attrs:{placeholder:e.$t("Placeholder_Password"),type:"checkbox"},domProps:{checked:Array.isArray(e.confirmPassword)?e._i(e.confirmPassword,null)>-1:e.confirmPassword},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.login(t)},change:function(t){var s=e.confirmPassword,o=t.target,n=!!o.checked;if(Array.isArray(s)){var r=null,a=e._i(s,r);o.checked?a<0&&(e.confirmPassword=s.concat([r])):a>-1&&(e.confirmPassword=s.slice(0,a).concat(s.slice(a+1)))}else e.confirmPassword=n}}}):"radio"===e.ifPassword?o("input",{directives:[{name:"model",rawName:"v-model",value:e.confirmPassword,expression:"confirmPassword"}],staticClass:"inputComponent-input",attrs:{placeholder:e.$t("Placeholder_Password"),type:"radio"},domProps:{checked:e._q(e.confirmPassword,null)},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.login(t)},change:function(t){e.confirmPassword=null}}}):o("input",{directives:[{name:"model",rawName:"v-model",value:e.confirmPassword,expression:"confirmPassword"}],staticClass:"inputComponent-input",attrs:{placeholder:e.$t("Placeholder_Password"),type:e.ifPassword},domProps:{value:e.confirmPassword},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.login(t)},input:function(t){t.target.composing||(e.confirmPassword=t.target.value)}}}),o("a",{staticClass:"inputComponent-suffix inputComponent-password",attrs:{href:"#"},on:{click:function(t){t.preventDefault(),e.togglePassword=!e.togglePassword}}},[o("img",{attrs:{src:(e.togglePassword,s("c6f0")),alt:""}})]),e._m(0)]),o("div",{staticClass:"inputComponent"},[o("img",{staticClass:"inputComponent-icon",attrs:{src:s("5d06"),alt:""}}),"checkbox"===e.ifPassword?o("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"inputComponent-input",attrs:{placeholder:e.$t("Placeholder_Password"),type:"checkbox"},domProps:{checked:Array.isArray(e.password)?e._i(e.password,null)>-1:e.password},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.login(t)},change:function(t){var s=e.password,o=t.target,n=!!o.checked;if(Array.isArray(s)){var r=null,a=e._i(s,r);o.checked?a<0&&(e.password=s.concat([r])):a>-1&&(e.password=s.slice(0,a).concat(s.slice(a+1)))}else e.password=n}}}):"radio"===e.ifPassword?o("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"inputComponent-input",attrs:{placeholder:e.$t("Placeholder_Password"),type:"radio"},domProps:{checked:e._q(e.password,null)},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.login(t)},change:function(t){e.password=null}}}):o("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"inputComponent-input",attrs:{placeholder:e.$t("Placeholder_Password"),type:e.ifPassword},domProps:{value:e.password},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.login(t)},input:function(t){t.target.composing||(e.password=t.target.value)}}}),o("a",{staticClass:"inputComponent-suffix inputComponent-password",attrs:{href:"#"},on:{click:function(t){t.preventDefault(),e.togglePassword=!e.togglePassword}}},[o("img",{attrs:{src:(e.togglePassword,s("c6f0")),alt:""}})]),e._m(1)]),o("input-Comp",{staticClass:"register-input",attrs:{placeholder:e.$t("LoginCell"),clear:"",phone:""},on:{"update:value":e.getPhone},model:{value:e.phone,callback:function(t){e.phone=t},expression:"phone"}}),o("input-Comp",{staticClass:"register-input",attrs:{placeholder:e.$t("Placeholder_Validation"),captcha:""},on:{"update:value":e.getImgCode},model:{value:e.imgCode,callback:function(t){e.imgCode=t},expression:"imgCode"}}),o("div",{staticClass:"code"},[o("img",{attrs:{src:e.url,alt:""},on:{click:e.recode}})]),o("div",{staticClass:"inputComponent"},[o("img",{staticClass:"inputComponent-icon",attrs:{src:s("5d06"),alt:""}}),o("input",{directives:[{name:"model",rawName:"v-model",value:e.InvitationCode,expression:"InvitationCode"}],staticClass:"inputComponent-input",attrs:{type:"text",placeholder:e.$t("InvitationCode"),disabled:"disabled"},domProps:{value:e.InvitationCode},on:{input:function(t){t.target.composing||(e.InvitationCode=t.target.value)}}}),e._m(2)]),o("div",{staticClass:"privacy-wrap"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.isCheck,expression:"isCheck"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.isCheck)?e._i(e.isCheck,null)>-1:e.isCheck},on:{change:function(t){var s=e.isCheck,o=t.target,n=!!o.checked;if(Array.isArray(s)){var r=null,a=e._i(s,r);o.checked?a<0&&(e.isCheck=s.concat([r])):a>-1&&(e.isCheck=s.slice(0,a).concat(s.slice(a+1)))}else e.isCheck=n}}}),o("p",{on:{click:function(t){return e.$router.push("/privacy")}}},[e._v(e._s(e.$t("PrivacyPolicy")))])]),o("div",{staticClass:"register-btn btn",on:{click:function(t){return t.preventDefault(),e.sendRegister(t)}}},[e._v("\n    "+e._s(e.$t("Register"))+"\n  ")])],1)},n=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("a",{attrs:{href:""}},[s("img",{attrs:{src:"",alt:""}})])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("a",{attrs:{href:""}},[s("img",{attrs:{src:"",alt:""}})])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("a",{attrs:{href:""}},[s("img",{attrs:{src:"",alt:""}})])}],r=s("e5cc"),a=s("9fb8"),i={components:{inputComp:r["a"]},created:function(){this.getParams()},computed:{ifPassword:function(){return this.togglePassword?"password":"text"}},data:function(){return{togglePassword:!0,account:"",password:"",imgCode:"",phone:"",confirmPassword:"",showcode:!0,InvitationCode:"",url:"https://guess-api.linsio.cn/api/User/GetCaptchCode",GetCaptchCodeIndex:0,isCheck:!0}},methods:{getParams:function(){var e=this.$route.query.InviterId;this.InvitationCode=e},gojump:function(){this.$router.push("/")},recode:function(){this.url="https://guess-api.linsio.cn/api/User/GetCaptchCode?"+this.GetCaptchCodeIndex,this.GetCaptchCodeIndex++,(new Date).getTime()},sendRegister:function(){var e=this,t={Name:this.account,Password:this.password,ConfirmPassword:this.confirmPassword,PhoneNumber:this.phone,ImgCode:this.imgCode,InvitationCode:this.InvitationCode};if(""!=this.account)if(""!=this.password)if(""!=this.phone)if(""!=this.imgCode)if(this.isCheck)Object(a["k"])(t).then((function(t){if(t.AccessToken){var s=e.$message({message:e.$t("RegisteredSuccessfully"),duration:3e3,center:!0,type:"success"});setTimeout((function(){return s.close()}),1200),setTimeout((function(){e.$router.push("/Login")}),3e3)}else if(Math.abs(t.Code)>=600){var o=e.$message({message:t.Message,duration:3e3,center:!0,type:"error"});setTimeout((function(){return o.close()}),1200)}}));else{var s=this.$message({message:this.$t("AgreePrivacy"),duration:1e3,type:"error",center:!0});setTimeout((function(){return s.close()}),1200)}else{var o=this.$message({message:this.$t("VerificationCodeEmpty"),duration:1e3,type:"error",center:!0});setTimeout((function(){return o.close()}),1200)}else{var n=this.$message({message:this.$t("PhoneBlank"),duration:1e3,type:"error",center:!0});setTimeout((function(){return n.close()}),1200)}else{var r=this.$message({message:this.$t("PasswordBlank"),duration:1e3,type:"error",center:!0});setTimeout((function(){return r.close()}),1200)}else{var i=this.$message({message:this.$t("AccountEmpty"),duration:1e3,type:"error",center:!0});setTimeout((function(){return i.close()}),1200)}},getAccount:function(e){this.account=e},GetPassword:function(e){this.password=e},getConfirmPassword:function(e){this.confirmPassword=e},getPhone:function(e){this.phone=e},getImgCode:function(e){this.imgCode=e}}},c=i,d=s("2877"),l=Object(d["a"])(c,o,n,!1,null,null,null);t["default"]=l.exports}}]);
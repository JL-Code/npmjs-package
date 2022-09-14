!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n(require("lodash")):"function"==typeof define&&define.amd?define(["lodash"],n):"object"==typeof exports?exports.plugins=n(require("lodash")):e.plugins=n(e._)}(self,(e=>(()=>{var n={369:e=>{"use strict";function n(){return n=Object.assign?Object.assign.bind():function(e){for(var n,t=1;t<arguments.length;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},n.apply(this,arguments)}var t=["attrs","props","domProps"],o=["class","style","directives"],i=["on","nativeOn"],r=function(e,n){return function(){e&&e.apply(this,arguments),n&&n.apply(this,arguments)}};e.exports=function(e){return e.reduce((function(e,a){for(var s in a)if(e[s])if(-1!==t.indexOf(s))e[s]=n({},e[s],a[s]);else if(-1!==o.indexOf(s)){var l=e[s]instanceof Array?e[s]:[e[s]],d=a[s]instanceof Array?a[s]:[a[s]];e[s]=[].concat(l,d)}else if(-1!==i.indexOf(s))for(var c in a[s])if(e[s][c]){var u=e[s][c]instanceof Array?e[s][c]:[e[s][c]],p=a[s][c]instanceof Array?a[s][c]:[a[s][c]];e[s][c]=[].concat(u,p)}else e[s][c]=a[s][c];else if("hook"===s)for(var f in a[s])e[s][f]=e[s][f]?r(e[s][f],a[s][f]):a[s][f];else e[s]=a[s];else e[s]=a[s];return e}),{})}},705:e=>{"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,i,r){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(o)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(a[l]=!0)}for(var d=0;d<e.length;d++){var c=[].concat(e[d]);o&&a[c[0]]||(void 0!==r&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=r),t&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=t):c[2]=t),i&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=i):c[4]="".concat(i)),n.push(c))}},n}},738:e=>{"use strict";e.exports=function(e){return e[1]}},271:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>s});var o=t(738),i=t.n(o),r=t(705),a=t.n(r)()(i());a.push([e.id,'/*\n* Tencent is pleased to support the open source community by making WeUI available.\n* \n* Copyright (C) 2017 THL A29 Limited, a Tencent company. All rights reserved.\n* \n* Licensed under the MIT License (the "License"); you may not use this file except in compliance\n* with the License. You may obtain a copy of the License at\n* \n*       http://opensource.org/licenses/MIT\n* \n* Unless required by applicable law or agreed to in writing, software distributed under the License is\n* distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,\n* either express or implied. See the License for the specific language governing permissions and\n* limitations under the License.\n*/\n.fix_dialog .is-fullscreen {\n  top: 0 !important;\n  left: 0 !important;\n}\n.fix_dialog .is-fullscreen .el-dialog__body {\n  height: calc(100% - 51px);\n}\n.fix_dialog .is-fullscreen .el-dialog__body .dialog-body__embedded {\n  height: 100% !important;\n}\n.fix_dialog .el-dialog__header {\n  display: flex;\n  padding: 16px 16px 10px;\n  border-bottom: 1px solid #e8e8e8;\n}\n.fix_dialog .el-dialog__body {\n  padding: 0;\n}\n.fix_dialog .el-dialog__body .el-tabs--border-card {\n  border-top: none;\n}\n.fix_dialog .el-dialog__body .el-tabs--left .el-tabs__header.is-left {\n  margin-right: 0;\n}\n.fix_dialog .el-dialog__body .el-tabs__item {\n  min-width: 140px;\n}\n.fix_dialog .el-dialog__body > .fix_el-tabs {\n  padding: 0;\n}\n.fix_dialog .el-dialog__title {\n  line-height: 22px;\n}\n.fix_dialog .el-dialog__headerbtn {\n  position: static;\n  margin-left: 10px;\n}\n.fix_dialog .el-dialog__headerbtn i {\n  font-size: 16px;\n  line-height: 1;\n}\n.fix_dialog .fix_el-tabs.el-tabs {\n  height: 100%;\n}\n.fix_dialog .fix_el-tabs.el-tabs .el-tabs__content {\n  padding: 0;\n  height: 100%;\n}\n.fix_dialog .fix_el-tabs.el-tabs .el-tabs__content .el-tab-pane {\n  height: 100%;\n}\n.dialog-header__title {\n  flex: 1;\n  height: 24px;\n  line-height: 24px;\n  font-size: 18px;\n  color: #303133;\n  width: auto;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  word-wrap: normal;\n}\n.header-btn_maximizable {\n  font-size: 16px;\n  padding: 0;\n  background: 0 0;\n  border: none;\n  outline: 0;\n  cursor: pointer;\n}\n.header-btn_maximizable i.iconfont {\n  color: #909399;\n}\n.header-btn_maximizable i.iconfont:focus,\n.header-btn_maximizable i.iconfont:hover {\n  color: #409eff;\n}\n',""]);const s=a},37:(e,n,t)=>{var o=t(271);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[e.id,o,""]]),o.locals&&(e.exports=o.locals),(0,t(23).Z)("40c94704",o,!1,{})},23:(e,n,t)=>{"use strict";function o(e,n){for(var t=[],o={},i=0;i<n.length;i++){var r=n[i],a=r[0],s={id:e+":"+i,css:r[1],media:r[2],sourceMap:r[3]};o[a]?o[a].parts.push(s):t.push(o[a]={id:a,parts:[s]})}return t}t.d(n,{Z:()=>h});var i="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!i)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var r={},a=i&&(document.head||document.getElementsByTagName("head")[0]),s=null,l=0,d=!1,c=function(){},u=null,p="data-vue-ssr-id",f="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function h(e,n,t,i){d=t,u=i||{};var a=o(e,n);return g(a),function(n){for(var t=[],i=0;i<a.length;i++){var s=a[i];(l=r[s.id]).refs--,t.push(l)}for(n?g(a=o(e,n)):a=[],i=0;i<t.length;i++){var l;if(0===(l=t[i]).refs){for(var d=0;d<l.parts.length;d++)l.parts[d]();delete r[l.id]}}}}function g(e){for(var n=0;n<e.length;n++){var t=e[n],o=r[t.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](t.parts[i]);for(;i<t.parts.length;i++)o.parts.push(m(t.parts[i]));o.parts.length>t.parts.length&&(o.parts.length=t.parts.length)}else{var a=[];for(i=0;i<t.parts.length;i++)a.push(m(t.parts[i]));r[t.id]={id:t.id,refs:1,parts:a}}}}function b(){var e=document.createElement("style");return e.type="text/css",a.appendChild(e),e}function m(e){var n,t,o=document.querySelector("style["+p+'~="'+e.id+'"]');if(o){if(d)return c;o.parentNode.removeChild(o)}if(f){var i=l++;o=s||(s=b()),n=_.bind(null,o,i,!1),t=_.bind(null,o,i,!0)}else o=b(),n=x.bind(null,o),t=function(){o.parentNode.removeChild(o)};return n(e),function(o){if(o){if(o.css===e.css&&o.media===e.media&&o.sourceMap===e.sourceMap)return;n(e=o)}else t()}}var v,y=(v=[],function(e,n){return v[e]=n,v.filter(Boolean).join("\n")});function _(e,n,t,o){var i=t?"":o.css;if(e.styleSheet)e.styleSheet.cssText=y(n,i);else{var r=document.createTextNode(i),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(r,a[n]):e.appendChild(r)}}function x(e,n){var t=n.css,o=n.media,i=n.sourceMap;if(o&&e.setAttribute("media",o),u.ssrId&&e.setAttribute(p,n.id),i&&(t+="\n/*# sourceURL="+i.sources[0]+" */",t+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},607:n=>{"use strict";n.exports=e}},t={};function o(e){var i=t[e];if(void 0!==i)return i.exports;var r=t[e]={id:e,exports:{}};return n[e](r,r.exports,o),r.exports}o.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return o.d(n,{a:n}),n},o.d=(e,n)=>{for(var t in n)o.o(n,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},o.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};return(()=>{"use strict";o.r(i),o.d(i,{VueAccessControl:()=>r,VueDialog:()=>p,default:()=>f});const e="TOKEN_KEY",n={getToken(){const n=localStorage.getItem(e);return console.debug(["get token",n]),n},setToken(n){console.debug(["set token",n]),localStorage.setItem(e,n)},verifyToken(){return console.debug(["verify token",this.getToken()]),!!this.getToken()}},t=["Login"],r={install(e,o){const{loginRoute:i,whiteList:r}=o,a=Object.assign({},t,r);console.debug("[vue-access-control] installed");const{router:s}=o;s.beforeEach(((e,t,o)=>{console.debug("[router beforeEach]",e.fullPath,t.fullPath),n.verifyToken()||a.includes(e.name)?o():o({name:i})}))}};var a=o(369),s=o.n(a);o(37);const l={props:{fullscreen:{type:Boolean,default:!1}},computed:{iconClass(){return{iconfont:!0,"icon-square":!this.fullscreen,"el-icon-copy-document":this.fullscreen}}},render(){const e=arguments[0],{iconClass:n,handleClick:t}=this,o={on:{click:t}};return e("button",s()([{},o,{class:"header-btn_maximizable el-dialog__headerbtn"}]),[e("i",{class:n})])},methods:{handleClick(e){this.$emit("click",e)}}};var d=o(607);const c={};function u(e){e()}c.install=function(e,n){e.prototype.$dialog=function(n,t={}){const o=n;return new Promise(((n,i)=>{const{payload:r}=t,a=t.beforeClose||u;t.beforeClose=function(e){f.$data.done=e,a(f.handleClose)},delete t.payload;const c=(0,d.assign)({},{el:void 0,appendToBody:!0,destroyOnClose:!0,title:"标题",top:"10vh",width:"60vw",height:"70vh",maximizable:!0,fullscreen:!1,closeOnClickModal:!1,closeOnPressEscape:!1},t),p=new e({name:"IntermediateComponent",components:{embedded:o,HeadButton:l},data:()=>({visible:!0,done:function(){},...c}),mounted(){this.visible=!0,console.debug("IntermediateComponent mounted")},beforeDestroy(){this.$el.remove()},methods:{handleClose(){this.done&&this.done(),this.handleCancel("取消")},handleSubmit(e){this.hide(),n(e)},handleCancel(e){this.hide(),i(e)},hide(){this.visible=!1,this.$destroy()},setTitle(e){this.title=e},setFullscreen(){this.fullscreen=!this.fullscreen}},render(){const e=arguments[0],{$data:n,title:t,setTitle:i,handleSubmit:a,handleCancel:l,setFullscreen:d}=this,c=isNaN(n.height)?n.height:`${n.height}px`,u={props:{...n},on:{"update:visible":e=>this.visible=e}},p={style:{height:c},class:["dialog-body__embedded"],props:{...r},on:{title:i,submit:a,cancel:l}},f={props:{fullscreen:n.fullscreen},on:{click:d}},h=n.maximizable?e("template",{slot:"title"},[e("div",{class:"dialog-header__title",on:{dblclick:d}},[t]),e("head-button",s()([{},f]))]):e("div",{slot:"title",class:"dialog-header__title"},[t]);return e("el-dialog",s()([{},u,{class:"fix_dialog",directives:[{name:"draggable",value:!0},{name:"resizable",value:!0}]}]),[h,e(o,s()([{},p]))])}}),f=p.$mount();c.el?c.el.appendChild(f.$el):c.appendToBody?document.body.appendChild(f.$el):console.error("Missing required parameter el or appendToBody !")}))},console.debug("[vue-dialog] installed")};const p=c,f={VueAccessControl:r,VueDialog:c}})(),i})()));
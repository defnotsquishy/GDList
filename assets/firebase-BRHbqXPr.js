const Bg=()=>{};var Dl={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Od=function(r){const e=[];let t=0;for(let n=0;n<r.length;n++){let i=r.charCodeAt(n);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&n+1<r.length&&(r.charCodeAt(n+1)&64512)===56320?(i=65536+((i&1023)<<10)+(r.charCodeAt(++n)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},jg=function(r){const e=[];let t=0,n=0;for(;t<r.length;){const i=r[t++];if(i<128)e[n++]=String.fromCharCode(i);else if(i>191&&i<224){const s=r[t++];e[n++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=r[t++],o=r[t++],c=r[t++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|c&63)-65536;e[n++]=String.fromCharCode(55296+(u>>10)),e[n++]=String.fromCharCode(56320+(u&1023))}else{const s=r[t++],o=r[t++];e[n++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Md={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let i=0;i<r.length;i+=3){const s=r[i],o=i+1<r.length,c=o?r[i+1]:0,u=i+2<r.length,h=u?r[i+2]:0,f=s>>2,m=(s&3)<<4|c>>4;let g=(c&15)<<2|h>>6,b=h&63;u||(b=64,o||(g=64)),n.push(t[f],t[m],t[g],t[b])}return n.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(Od(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):jg(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let i=0;i<r.length;){const s=t[r.charAt(i++)],c=i<r.length?t[r.charAt(i)]:0;++i;const h=i<r.length?t[r.charAt(i)]:64;++i;const m=i<r.length?t[r.charAt(i)]:64;if(++i,s==null||c==null||h==null||m==null)throw new qg;const g=s<<2|c>>4;if(n.push(g),h!==64){const b=c<<4&240|h>>2;if(n.push(b),m!==64){const C=h<<6&192|m;n.push(C)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class qg extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const $g=function(r){const e=Od(r);return Md.encodeByteArray(e,!0)},$s=function(r){return $g(r).replace(/\./g,"")},Ld=function(r){try{return Md.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fd(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zg=()=>Fd().__FIREBASE_DEFAULTS__,Kg=()=>{if(typeof process>"u"||typeof Dl>"u")return;const r=Dl.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},Gg=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&Ld(r[1]);return e&&JSON.parse(e)},To=()=>{try{return Bg()||zg()||Kg()||Gg()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},Ud=r=>{var e,t;return(t=(e=To())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[r]},Wg=r=>{const e=Ud(r);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const n=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),n]:[e.substring(0,t),n]},Bd=()=>{var r;return(r=To())===null||r===void 0?void 0:r.config},jd=r=>{var e;return(e=To())===null||e===void 0?void 0:e[`_${r}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hg{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,n))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ln(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function _c(r){return(await fetch(r,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qg(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},n=e||"demo-project",i=r.iat||0,s=r.sub||r.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},r);return[$s(JSON.stringify(t)),$s(JSON.stringify(o)),""].join(".")}const ai={};function Xg(){const r={prod:[],emulator:[]};for(const e of Object.keys(ai))ai[e]?r.emulator.push(e):r.prod.push(e);return r}function Jg(r){let e=document.getElementById(r),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",r),t=!0),{created:t,element:e}}let kl=!1;function qd(r,e){if(typeof window>"u"||typeof document>"u"||!Ln(window.location.host)||ai[r]===e||ai[r]||kl)return;ai[r]=e;function t(g){return`__firebase__banner__${g}`}const n="__firebase__banner",s=Xg().prod.length>0;function o(){const g=document.getElementById(n);g&&g.remove()}function c(g){g.style.display="flex",g.style.background="#7faaf0",g.style.position="fixed",g.style.bottom="5px",g.style.left="5px",g.style.padding=".5em",g.style.borderRadius="5px",g.style.alignItems="center"}function u(g,b){g.setAttribute("width","24"),g.setAttribute("id",b),g.setAttribute("height","24"),g.setAttribute("viewBox","0 0 24 24"),g.setAttribute("fill","none"),g.style.marginLeft="-6px"}function h(){const g=document.createElement("span");return g.style.cursor="pointer",g.style.marginLeft="16px",g.style.fontSize="24px",g.innerHTML=" &times;",g.onclick=()=>{kl=!0,o()},g}function f(g,b){g.setAttribute("id",b),g.innerText="Learn more",g.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",g.setAttribute("target","__blank"),g.style.paddingLeft="5px",g.style.textDecoration="underline"}function m(){const g=Jg(n),b=t("text"),C=document.getElementById(b)||document.createElement("span"),k=t("learnmore"),V=document.getElementById(k)||document.createElement("a"),$=t("preprendIcon"),j=document.getElementById($)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(g.created){const L=g.element;c(L),f(V,k);const K=h();u(j,$),L.append(j,C,V,K),document.body.appendChild(L)}s?(C.innerText="Preview backend disconnected.",j.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(j.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,C.innerText="Preview backend running in this workspace."),C.setAttribute("id",b)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",m):m()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ye(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Yg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ye())}function $d(){var r;const e=(r=To())===null||r===void 0?void 0:r.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Zg(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function e_(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function t_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function n_(){const r=ye();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function zd(){return!$d()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Kd(){return!$d()&&!!navigator.userAgent&&(navigator.userAgent.includes("Safari")||navigator.userAgent.includes("WebKit"))&&!navigator.userAgent.includes("Chrome")}function Gd(){try{return typeof indexedDB=="object"}catch{return!1}}function r_(){return new Promise((r,e)=>{try{let t=!0;const n="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(n);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(n),r(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i_="FirebaseError";class ut extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=i_,Object.setPrototypeOf(this,ut.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,xi.prototype.create)}}class xi{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?s_(s,n):"Error",c=`${this.serviceName}: ${o} (${i}).`;return new ut(i,c,n)}}function s_(r,e){return r.replace(o_,(t,n)=>{const i=e[n];return i!=null?String(i):`<${n}?>`})}const o_=/\{\$([^}]+)}/g;function a_(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function Rn(r,e){if(r===e)return!0;const t=Object.keys(r),n=Object.keys(e);for(const i of t){if(!n.includes(i))return!1;const s=r[i],o=e[i];if(Nl(s)&&Nl(o)){if(!Rn(s,o))return!1}else if(s!==o)return!1}for(const i of n)if(!t.includes(i))return!1;return!0}function Nl(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oi(r){const e=[];for(const[t,n]of Object.entries(r))Array.isArray(n)?n.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}function ti(r){const e={};return r.replace(/^\?/,"").split("&").forEach(n=>{if(n){const[i,s]=n.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function ni(r){const e=r.indexOf("?");if(!e)return"";const t=r.indexOf("#",e);return r.substring(e,t>0?t:void 0)}function c_(r,e){const t=new u_(r,e);return t.subscribe.bind(t)}class u_{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(n=>{this.error(n)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let i;if(e===void 0&&t===void 0&&n===void 0)throw new Error("Missing Observer.");l_(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:n},i.next===void 0&&(i.next=Ia),i.error===void 0&&(i.error=Ia),i.complete===void 0&&(i.complete=Ia);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function l_(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function Ia(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ee(r){return r&&r._delegate?r._delegate:r}class Xt{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h_{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const n=new Hg;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&n.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(f_(e))try{this.getOrInitializeService({instanceIdentifier:pn})}catch{}for(const[t,n]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});n.resolve(s)}catch{}}}}clearInstance(e=pn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=pn){return this.instances.has(e)}getOptions(e=pn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[s,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(s);n===c&&o.resolve(i)}return i}onInit(e,t){var n;const i=this.normalizeInstanceIdentifier(t),s=(n=this.onInitCallbacks.get(i))!==null&&n!==void 0?n:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:d_(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=pn){return this.component?this.component.multipleInstances?e:pn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function d_(r){return r===pn?void 0:r}function f_(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p_{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new h_(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var H;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(H||(H={}));const m_={debug:H.DEBUG,verbose:H.VERBOSE,info:H.INFO,warn:H.WARN,error:H.ERROR,silent:H.SILENT},g_=H.INFO,__={[H.DEBUG]:"log",[H.VERBOSE]:"log",[H.INFO]:"info",[H.WARN]:"warn",[H.ERROR]:"error"},y_=(r,e,...t)=>{if(e<r.logLevel)return;const n=new Date().toISOString(),i=__[e];if(i)console[i](`[${n}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class yc{constructor(e){this.name=e,this._logLevel=g_,this._logHandler=y_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in H))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?m_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,H.DEBUG,...e),this._logHandler(this,H.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,H.VERBOSE,...e),this._logHandler(this,H.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,H.INFO,...e),this._logHandler(this,H.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,H.WARN,...e),this._logHandler(this,H.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,H.ERROR,...e),this._logHandler(this,H.ERROR,...e)}}const I_=(r,e)=>e.some(t=>r instanceof t);let xl,Ol;function E_(){return xl||(xl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function T_(){return Ol||(Ol=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Wd=new WeakMap,Oa=new WeakMap,Hd=new WeakMap,Ea=new WeakMap,Ic=new WeakMap;function v_(r){const e=new Promise((t,n)=>{const i=()=>{r.removeEventListener("success",s),r.removeEventListener("error",o)},s=()=>{t(zt(r.result)),i()},o=()=>{n(r.error),i()};r.addEventListener("success",s),r.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Wd.set(t,r)}).catch(()=>{}),Ic.set(e,r),e}function w_(r){if(Oa.has(r))return;const e=new Promise((t,n)=>{const i=()=>{r.removeEventListener("complete",s),r.removeEventListener("error",o),r.removeEventListener("abort",o)},s=()=>{t(),i()},o=()=>{n(r.error||new DOMException("AbortError","AbortError")),i()};r.addEventListener("complete",s),r.addEventListener("error",o),r.addEventListener("abort",o)});Oa.set(r,e)}let Ma={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return Oa.get(r);if(e==="objectStoreNames")return r.objectStoreNames||Hd.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return zt(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function A_(r){Ma=r(Ma)}function R_(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const n=r.call(Ta(this),e,...t);return Hd.set(n,e.sort?e.sort():[e]),zt(n)}:T_().includes(r)?function(...e){return r.apply(Ta(this),e),zt(Wd.get(this))}:function(...e){return zt(r.apply(Ta(this),e))}}function b_(r){return typeof r=="function"?R_(r):(r instanceof IDBTransaction&&w_(r),I_(r,E_())?new Proxy(r,Ma):r)}function zt(r){if(r instanceof IDBRequest)return v_(r);if(Ea.has(r))return Ea.get(r);const e=b_(r);return e!==r&&(Ea.set(r,e),Ic.set(e,r)),e}const Ta=r=>Ic.get(r);function P_(r,e,{blocked:t,upgrade:n,blocking:i,terminated:s}={}){const o=indexedDB.open(r,e),c=zt(o);return n&&o.addEventListener("upgradeneeded",u=>{n(zt(o.result),u.oldVersion,u.newVersion,zt(o.transaction),u)}),t&&o.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),c.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const S_=["get","getKey","getAll","getAllKeys","count"],C_=["put","add","delete","clear"],va=new Map;function Ml(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(va.get(e))return va.get(e);const t=e.replace(/FromIndex$/,""),n=e!==t,i=C_.includes(t);if(!(t in(n?IDBIndex:IDBObjectStore).prototype)||!(i||S_.includes(t)))return;const s=async function(o,...c){const u=this.transaction(o,i?"readwrite":"readonly");let h=u.store;return n&&(h=h.index(c.shift())),(await Promise.all([h[t](...c),i&&u.done]))[0]};return va.set(e,s),s}A_(r=>({...r,get:(e,t,n)=>Ml(e,t)||r.get(e,t,n),has:(e,t)=>!!Ml(e,t)||r.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V_{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(D_(t)){const n=t.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(t=>t).join(" ")}}function D_(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const La="@firebase/app",Ll="0.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Et=new yc("@firebase/app"),k_="@firebase/app-compat",N_="@firebase/analytics-compat",x_="@firebase/analytics",O_="@firebase/app-check-compat",M_="@firebase/app-check",L_="@firebase/auth",F_="@firebase/auth-compat",U_="@firebase/database",B_="@firebase/data-connect",j_="@firebase/database-compat",q_="@firebase/functions",$_="@firebase/functions-compat",z_="@firebase/installations",K_="@firebase/installations-compat",G_="@firebase/messaging",W_="@firebase/messaging-compat",H_="@firebase/performance",Q_="@firebase/performance-compat",X_="@firebase/remote-config",J_="@firebase/remote-config-compat",Y_="@firebase/storage",Z_="@firebase/storage-compat",ey="@firebase/firestore",ty="@firebase/ai",ny="@firebase/firestore-compat",ry="firebase",iy="11.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fa="[DEFAULT]",sy={[La]:"fire-core",[k_]:"fire-core-compat",[x_]:"fire-analytics",[N_]:"fire-analytics-compat",[M_]:"fire-app-check",[O_]:"fire-app-check-compat",[L_]:"fire-auth",[F_]:"fire-auth-compat",[U_]:"fire-rtdb",[B_]:"fire-data-connect",[j_]:"fire-rtdb-compat",[q_]:"fire-fn",[$_]:"fire-fn-compat",[z_]:"fire-iid",[K_]:"fire-iid-compat",[G_]:"fire-fcm",[W_]:"fire-fcm-compat",[H_]:"fire-perf",[Q_]:"fire-perf-compat",[X_]:"fire-rc",[J_]:"fire-rc-compat",[Y_]:"fire-gcs",[Z_]:"fire-gcs-compat",[ey]:"fire-fst",[ny]:"fire-fst-compat",[ty]:"fire-vertex","fire-js":"fire-js",[ry]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zs=new Map,oy=new Map,Ua=new Map;function Fl(r,e){try{r.container.addComponent(e)}catch(t){Et.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function bn(r){const e=r.name;if(Ua.has(e))return Et.debug(`There were multiple attempts to register component ${e}.`),!1;Ua.set(e,r);for(const t of zs.values())Fl(t,r);for(const t of oy.values())Fl(t,r);return!0}function vo(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function Oe(r){return r==null?!1:r.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ay={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Kt=new xi("app","Firebase",ay);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cy{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Xt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Kt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fn=iy;function uy(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const n=Object.assign({name:Fa,automaticDataCollectionEnabled:!0},e),i=n.name;if(typeof i!="string"||!i)throw Kt.create("bad-app-name",{appName:String(i)});if(t||(t=Bd()),!t)throw Kt.create("no-options");const s=zs.get(i);if(s){if(Rn(t,s.options)&&Rn(n,s.config))return s;throw Kt.create("duplicate-app",{appName:i})}const o=new p_(i);for(const u of Ua.values())o.addComponent(u);const c=new cy(t,n,o);return zs.set(i,c),c}function Qd(r=Fa){const e=zs.get(r);if(!e&&r===Fa&&Bd())return uy();if(!e)throw Kt.create("no-app",{appName:r});return e}function rt(r,e,t){var n;let i=(n=sy[r])!==null&&n!==void 0?n:r;t&&(i+=`-${t}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const c=[`Unable to register library "${i}" with version "${e}":`];s&&c.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Et.warn(c.join(" "));return}bn(new Xt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ly="firebase-heartbeat-database",hy=1,yi="firebase-heartbeat-store";let wa=null;function Xd(){return wa||(wa=P_(ly,hy,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(yi)}catch(t){console.warn(t)}}}}).catch(r=>{throw Kt.create("idb-open",{originalErrorMessage:r.message})})),wa}async function dy(r){try{const t=(await Xd()).transaction(yi),n=await t.objectStore(yi).get(Jd(r));return await t.done,n}catch(e){if(e instanceof ut)Et.warn(e.message);else{const t=Kt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Et.warn(t.message)}}}async function Ul(r,e){try{const n=(await Xd()).transaction(yi,"readwrite");await n.objectStore(yi).put(e,Jd(r)),await n.done}catch(t){if(t instanceof ut)Et.warn(t.message);else{const n=Kt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Et.warn(n.message)}}}function Jd(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fy=1024,py=30;class my{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new _y(t),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Bl();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>py){const o=yy(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(n){Et.warn(n)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Bl(),{heartbeatsToSend:n,unsentEntries:i}=gy(this._heartbeatsCache.heartbeats),s=$s(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return Et.warn(t),""}}}function Bl(){return new Date().toISOString().substring(0,10)}function gy(r,e=fy){const t=[];let n=r.slice();for(const i of r){const s=t.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),jl(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),jl(t)>e){t.pop();break}n=n.slice(1)}return{heartbeatsToSend:t,unsentEntries:n}}class _y{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Gd()?r_().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await dy(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ul(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ul(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function jl(r){return $s(JSON.stringify({version:2,heartbeats:r})).length}function yy(r){if(r.length===0)return-1;let e=0,t=r[0].date;for(let n=1;n<r.length;n++)r[n].date<t&&(t=r[n].date,e=n);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iy(r){bn(new Xt("platform-logger",e=>new V_(e),"PRIVATE")),bn(new Xt("heartbeat",e=>new my(e),"PRIVATE")),rt(La,Ll,r),rt(La,Ll,"esm2017"),rt("fire-js","")}Iy("");function Ec(r,e){var t={};for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&e.indexOf(n)<0&&(t[n]=r[n]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(r);i<n.length;i++)e.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(r,n[i])&&(t[n[i]]=r[n[i]]);return t}function Yd(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ey=Yd,Zd=new xi("auth","Firebase",Yd());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ks=new yc("@firebase/auth");function Ty(r,...e){Ks.logLevel<=H.WARN&&Ks.warn(`Auth (${Fn}): ${r}`,...e)}function Ps(r,...e){Ks.logLevel<=H.ERROR&&Ks.error(`Auth (${Fn}): ${r}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function We(r,...e){throw vc(r,...e)}function Ge(r,...e){return vc(r,...e)}function Tc(r,e,t){const n=Object.assign(Object.assign({},Ey()),{[e]:t});return new xi("auth","Firebase",n).create(e,{appName:r.name})}function _t(r){return Tc(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ef(r,e,t){const n=t;if(!(e instanceof n))throw n.name!==e.constructor.name&&We(r,"argument-error"),Tc(r,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function vc(r,...e){if(typeof r!="string"){const t=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=r.name),r._errorFactory.create(t,...n)}return Zd.create(r,...e)}function q(r,e,...t){if(!r)throw vc(e,...t)}function pt(r){const e="INTERNAL ASSERTION FAILED: "+r;throw Ps(e),new Error(e)}function Tt(r,e){r||pt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ba(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function vy(){return ql()==="http:"||ql()==="https:"}function ql(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wy(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(vy()||e_()||"connection"in navigator)?navigator.onLine:!0}function Ay(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(e,t){this.shortDelay=e,this.longDelay=t,Tt(t>e,"Short delay should be less than long delay!"),this.isMobile=Yg()||t_()}get(){return wy()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wc(r,e){Tt(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;pt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;pt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;pt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ry={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const by=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Py=new Mi(3e4,6e4);function At(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function Ye(r,e,t,n,i={}){return nf(r,i,async()=>{let s={},o={};n&&(e==="GET"?o=n:s={body:JSON.stringify(n)});const c=Oi(Object.assign({key:r.config.apiKey},o)).slice(1),u=await r._getAdditionalHeaders();u["Content-Type"]="application/json",r.languageCode&&(u["X-Firebase-Locale"]=r.languageCode);const h=Object.assign({method:e,headers:u},s);return Zg()||(h.referrerPolicy="no-referrer"),r.emulatorConfig&&Ln(r.emulatorConfig.host)&&(h.credentials="include"),tf.fetch()(await rf(r,r.config.apiHost,t,c),h)})}async function nf(r,e,t){r._canInitEmulator=!1;const n=Object.assign(Object.assign({},Ry),e);try{const i=new Cy(r),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw ys(r,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const c=s.ok?o.errorMessage:o.error.message,[u,h]=c.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw ys(r,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw ys(r,"email-already-in-use",o);if(u==="USER_DISABLED")throw ys(r,"user-disabled",o);const f=n[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Tc(r,f,h);We(r,f)}}catch(i){if(i instanceof ut)throw i;We(r,"network-request-failed",{message:String(i)})}}async function Li(r,e,t,n,i={}){const s=await Ye(r,e,t,n,i);return"mfaPendingCredential"in s&&We(r,"multi-factor-auth-required",{_serverResponse:s}),s}async function rf(r,e,t,n){const i=`${e}${t}?${n}`,s=r,o=s.config.emulator?wc(r.config,i):`${r.config.apiScheme}://${i}`;return by.includes(t)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function Sy(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Cy{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,n)=>{this.timer=setTimeout(()=>n(Ge(this.auth,"network-request-failed")),Py.get())})}}function ys(r,e,t){const n={appName:r.name};t.email&&(n.email=t.email),t.phoneNumber&&(n.phoneNumber=t.phoneNumber);const i=Ge(r,e,n);return i.customData._tokenResponse=t,i}function $l(r){return r!==void 0&&r.enterprise!==void 0}class Vy{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Sy(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Dy(r,e){return Ye(r,"GET","/v2/recaptchaConfig",At(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ky(r,e){return Ye(r,"POST","/v1/accounts:delete",e)}async function Gs(r,e){return Ye(r,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ci(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BA(r,e=!1){return ee(r).getIdToken(e)}async function Ny(r,e=!1){const t=ee(r),n=await t.getIdToken(e),i=Ac(n);q(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:n,authTime:ci(Aa(i.auth_time)),issuedAtTime:ci(Aa(i.iat)),expirationTime:ci(Aa(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Aa(r){return Number(r)*1e3}function Ac(r){const[e,t,n]=r.split(".");if(e===void 0||t===void 0||n===void 0)return Ps("JWT malformed, contained fewer than 3 sections"),null;try{const i=Ld(t);return i?JSON.parse(i):(Ps("Failed to decode base64 JWT payload"),null)}catch(i){return Ps("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function zl(r){const e=Ac(r);return q(e,"internal-error"),q(typeof e.exp<"u","internal-error"),q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pn(r,e,t=!1){if(t)return e;try{return await e}catch(n){throw n instanceof ut&&xy(n)&&r.auth.currentUser===r&&await r.auth.signOut(),n}}function xy({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oy{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ci(this.lastLoginAt),this.creationTime=ci(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ws(r){var e;const t=r.auth,n=await r.getIdToken(),i=await Pn(r,Gs(t,{idToken:n}));q(i==null?void 0:i.users.length,t,"internal-error");const s=i.users[0];r._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?sf(s.providerUserInfo):[],c=Ly(r.providerData,o),u=r.isAnonymous,h=!(r.email&&s.passwordHash)&&!(c!=null&&c.length),f=u?h:!1,m={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:c,metadata:new ja(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(r,m)}async function My(r){const e=ee(r);await Ws(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Ly(r,e){return[...r.filter(n=>!e.some(i=>i.providerId===n.providerId)),...e]}function sf(r){return r.map(e=>{var{providerId:t}=e,n=Ec(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fy(r,e){const t=await nf(r,{},async()=>{const n=Oi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=r.config,o=await rf(r,i,"/v1/token",`key=${s}`),c=await r._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:c,body:n};return r.emulatorConfig&&Ln(r.emulatorConfig.host)&&(u.credentials="include"),tf.fetch()(o,u)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Uy(r,e){return Ye(r,"POST","/v2/accounts:revokeToken",At(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){q(e.idToken,"internal-error"),q(typeof e.idToken<"u","internal-error"),q(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):zl(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){q(e.length!==0,"internal-error");const t=zl(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(q(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:i,expiresIn:s}=await Fy(e,t);this.updateTokensAndExpiration(n,i,Number(s))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(e,t){const{refreshToken:n,accessToken:i,expirationTime:s}=t,o=new nr;return n&&(q(typeof n=="string","internal-error",{appName:e}),o.refreshToken=n),i&&(q(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(q(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new nr,this.toJSON())}_performRefresh(){return pt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kt(r,e){q(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class Xe{constructor(e){var{uid:t,auth:n,stsTokenManager:i}=e,s=Ec(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Oy(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new ja(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await Pn(this,this.stsTokenManager.getToken(this.auth,e));return q(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Ny(this,e)}reload(){return My(this)}_assign(e){this!==e&&(q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Xe(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Ws(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Oe(this.auth.app))return Promise.reject(_t(this.auth));const e=await this.getIdToken();return await Pn(this,ky(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,i,s,o,c,u,h,f;const m=(n=t.displayName)!==null&&n!==void 0?n:void 0,g=(i=t.email)!==null&&i!==void 0?i:void 0,b=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,C=(o=t.photoURL)!==null&&o!==void 0?o:void 0,k=(c=t.tenantId)!==null&&c!==void 0?c:void 0,V=(u=t._redirectEventId)!==null&&u!==void 0?u:void 0,$=(h=t.createdAt)!==null&&h!==void 0?h:void 0,j=(f=t.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:L,emailVerified:K,isAnonymous:X,providerData:G,stsTokenManager:E}=t;q(L&&E,e,"internal-error");const _=nr.fromJSON(this.name,E);q(typeof L=="string",e,"internal-error"),kt(m,e.name),kt(g,e.name),q(typeof K=="boolean",e,"internal-error"),q(typeof X=="boolean",e,"internal-error"),kt(b,e.name),kt(C,e.name),kt(k,e.name),kt(V,e.name),kt($,e.name),kt(j,e.name);const I=new Xe({uid:L,auth:e,email:g,emailVerified:K,displayName:m,isAnonymous:X,photoURL:C,phoneNumber:b,tenantId:k,stsTokenManager:_,createdAt:$,lastLoginAt:j});return G&&Array.isArray(G)&&(I.providerData=G.map(T=>Object.assign({},T))),V&&(I._redirectEventId=V),I}static async _fromIdTokenResponse(e,t,n=!1){const i=new nr;i.updateFromServerResponse(t);const s=new Xe({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await Ws(s),s}static async _fromGetAccountInfoResponse(e,t,n){const i=t.users[0];q(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?sf(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),c=new nr;c.updateFromIdToken(n);const u=new Xe({uid:i.localId,auth:e,stsTokenManager:c,isAnonymous:o}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new ja(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,h),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kl=new Map;function mt(r){Tt(r instanceof Function,"Expected a class definition");let e=Kl.get(r);return e?(Tt(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,Kl.set(r,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}of.type="NONE";const Gl=of;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ss(r,e,t){return`firebase:${r}:${e}:${t}`}class rr{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:i,name:s}=this.auth;this.fullUserKey=Ss(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ss("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Gs(this.auth,{idToken:e}).catch(()=>{});return t?Xe._fromGetAccountInfoResponse(this.auth,t,e):null}return Xe._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new rr(mt(Gl),e,n);const i=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||mt(Gl);const o=Ss(n,e.config.apiKey,e.name);let c=null;for(const h of t)try{const f=await h._get(o);if(f){let m;if(typeof f=="string"){const g=await Gs(e,{idToken:f}).catch(()=>{});if(!g)break;m=await Xe._fromGetAccountInfoResponse(e,g,f)}else m=Xe._fromJSON(e,f);h!==s&&(c=m),s=h;break}}catch{}const u=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new rr(s,e,n):(s=u[0],c&&await s._set(o,c.toJSON()),await Promise.all(t.map(async h=>{if(h!==s)try{await h._remove(o)}catch{}})),new rr(s,e,n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wl(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(lf(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(af(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(df(e))return"Blackberry";if(ff(e))return"Webos";if(cf(e))return"Safari";if((e.includes("chrome/")||uf(e))&&!e.includes("edge/"))return"Chrome";if(hf(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=r.match(t);if((n==null?void 0:n.length)===2)return n[1]}return"Other"}function af(r=ye()){return/firefox\//i.test(r)}function cf(r=ye()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function uf(r=ye()){return/crios\//i.test(r)}function lf(r=ye()){return/iemobile/i.test(r)}function hf(r=ye()){return/android/i.test(r)}function df(r=ye()){return/blackberry/i.test(r)}function ff(r=ye()){return/webos/i.test(r)}function Rc(r=ye()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function By(r=ye()){var e;return Rc(r)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function jy(){return n_()&&document.documentMode===10}function pf(r=ye()){return Rc(r)||hf(r)||ff(r)||df(r)||/windows phone/i.test(r)||lf(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mf(r,e=[]){let t;switch(r){case"Browser":t=Wl(ye());break;case"Worker":t=`${Wl(ye())}-${r}`;break;default:t=r}const n=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Fn}/${n}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qy{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=s=>new Promise((o,c)=>{try{const u=e(s);o(u)}catch(u){c(u)}});n.onAbort=t,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n==null?void 0:n.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $y(r,e={}){return Ye(r,"GET","/v2/passwordPolicy",At(r,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zy=6;class Ky{constructor(e){var t,n,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:zy,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(n=e.allowedNonAlphanumericCharacters)===null||n===void 0?void 0:n.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,n,i,s,o,c;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(t=u.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),u.isValid&&(u.isValid=(n=u.meetsMaxPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(c=u.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),u}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let n;for(let i=0;i<e.length;i++)n=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gy{constructor(e,t,n,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Hl(this),this.idTokenSubscription=new Hl(this),this.beforeStateQueue=new qy(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Zd,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=mt(t)),this._initializationPromise=this.queue(async()=>{var n,i,s;if(!this._deleted&&(this.persistenceManager=await rr.create(this,e),(n=this._resolvePersistenceManagerAvailable)===null||n===void 0||n.call(this),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Gs(this,{idToken:e}),n=await Xe._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Oe(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let i=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===c)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ws(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Ay()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Oe(this.app))return Promise.reject(_t(this));const t=e?ee(e):null;return t&&q(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Oe(this.app)?Promise.reject(_t(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Oe(this.app)?Promise.reject(_t(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(mt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await $y(this),t=new Ky(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new xi("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(n.tenantId=this.tenantId),await Uy(this,n)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&mt(e)||this._popupRedirectResolver;q(t,this,"argument-error"),this.redirectPersistenceManager=await rr.create(this,[mt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(q(c,this,"internal-error"),c.then(()=>{o||s(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,n,i);return()=>{o=!0,u()}}else{const u=e.addObserver(t);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=mf(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;if(Oe(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&Ty(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Rt(r){return ee(r)}class Hl{constructor(e){this.auth=e,this.observer=null,this.addObserver=c_(t=>this.observer=t)}get next(){return q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wo={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Wy(r){wo=r}function gf(r){return wo.loadJS(r)}function Hy(){return wo.recaptchaEnterpriseScript}function Qy(){return wo.gapiScript}function Xy(r){return`__${r}${Math.floor(Math.random()*1e6)}`}class Jy{constructor(){this.enterprise=new Yy}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class Yy{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const Zy="recaptcha-enterprise",_f="NO_RECAPTCHA";class eI{constructor(e){this.type=Zy,this.auth=Rt(e)}async verify(e="verify",t=!1){async function n(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,c)=>{Dy(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const h=new Vy(u);return s.tenantId==null?s._agentRecaptchaConfig=h:s._tenantRecaptchaConfigs[s.tenantId]=h,o(h.siteKey)}}).catch(u=>{c(u)})})}function i(s,o,c){const u=window.grecaptcha;$l(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(h=>{o(h)}).catch(()=>{o(_f)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Jy().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{n(this.auth).then(c=>{if(!t&&$l(window.grecaptcha))i(c,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=Hy();u.length!==0&&(u+=c),gf(u).then(()=>{i(c,s,o)}).catch(h=>{o(h)})}}).catch(c=>{o(c)})})}}async function Ql(r,e,t,n=!1,i=!1){const s=new eI(r);let o;if(i)o=_f;else try{o=await s.verify(t)}catch{o=await s.verify(t,!0)}const c=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const u=c.phoneEnrollmentInfo.phoneNumber,h=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:h,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const u=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return n?Object.assign(c,{captchaResp:o}):Object.assign(c,{captchaResponse:o}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function Hs(r,e,t,n,i){var s;if(!((s=r._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Ql(r,e,t,t==="getOobCode");return n(r,o)}else return n(r,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await Ql(r,e,t,t==="getOobCode");return n(r,c)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tI(r,e){const t=vo(r,"auth");if(t.isInitialized()){const i=t.getImmediate(),s=t.getOptions();if(Rn(s,e??{}))return i;We(i,"already-initialized")}return t.initialize({options:e})}function nI(r,e){const t=(e==null?void 0:e.persistence)||[],n=(Array.isArray(t)?t:[t]).map(mt);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(n,e==null?void 0:e.popupRedirectResolver)}function rI(r,e,t){const n=Rt(r);q(/^https?:\/\//.test(e),n,"invalid-emulator-scheme");const i=!1,s=yf(e),{host:o,port:c}=iI(e),u=c===null?"":`:${c}`,h={url:`${s}//${o}${u}/`},f=Object.freeze({host:o,port:c,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!n._canInitEmulator){q(n.config.emulator&&n.emulatorConfig,n,"emulator-config-failed"),q(Rn(h,n.config.emulator)&&Rn(f,n.emulatorConfig),n,"emulator-config-failed");return}n.config.emulator=h,n.emulatorConfig=f,n.settings.appVerificationDisabledForTesting=!0,Ln(o)?(_c(`${s}//${o}${u}`),qd("Auth",!0)):sI()}function yf(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function iI(r){const e=yf(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const n=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(n);if(i){const s=i[1];return{host:s,port:Xl(n.substr(s.length+1))}}else{const[s,o]=n.split(":");return{host:s,port:Xl(o)}}}function Xl(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function sI(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bc{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return pt("not implemented")}_getIdTokenResponse(e){return pt("not implemented")}_linkToIdToken(e,t){return pt("not implemented")}_getReauthenticationResolver(e){return pt("not implemented")}}async function oI(r,e){return Ye(r,"POST","/v1/accounts:update",e)}async function aI(r,e){return Ye(r,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cI(r,e){return Li(r,"POST","/v1/accounts:signInWithPassword",At(r,e))}async function If(r,e){return Ye(r,"POST","/v1/accounts:sendOobCode",At(r,e))}async function uI(r,e){return If(r,e)}async function lI(r,e){return If(r,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hI(r,e){return Li(r,"POST","/v1/accounts:signInWithEmailLink",At(r,e))}async function dI(r,e){return Li(r,"POST","/v1/accounts:signInWithEmailLink",At(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii extends bc{constructor(e,t,n,i=null){super("password",n),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new Ii(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Ii(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Hs(e,t,"signInWithPassword",cI);case"emailLink":return hI(e,{email:this._email,oobCode:this._password});default:We(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const n={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Hs(e,n,"signUpPassword",aI);case"emailLink":return dI(e,{idToken:t,email:this._email,oobCode:this._password});default:We(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ir(r,e){return Li(r,"POST","/v1/accounts:signInWithIdp",At(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fI="http://localhost";class Sn extends bc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Sn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):We("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:i}=t,s=Ec(t,["providerId","signInMethod"]);if(!n||!i)return null;const o=new Sn(n,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return ir(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,ir(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ir(e,t)}buildRequest(){const e={requestUri:fI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Oi(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pI(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function mI(r){const e=ti(ni(r)).link,t=e?ti(ni(e)).deep_link_id:null,n=ti(ni(r)).deep_link_id;return(n?ti(ni(n)).link:null)||n||t||e||r}class Pc{constructor(e){var t,n,i,s,o,c;const u=ti(ni(e)),h=(t=u.apiKey)!==null&&t!==void 0?t:null,f=(n=u.oobCode)!==null&&n!==void 0?n:null,m=pI((i=u.mode)!==null&&i!==void 0?i:null);q(h&&f&&m,"argument-error"),this.apiKey=h,this.operation=m,this.code=f,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.lang)!==null&&o!==void 0?o:null,this.tenantId=(c=u.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const t=mI(e);try{return new Pc(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{constructor(){this.providerId=Ar.PROVIDER_ID}static credential(e,t){return Ii._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Pc.parseLink(t);return q(n,"argument-error"),Ii._fromEmailAndCode(e,n.code,n.tenantId)}}Ar.PROVIDER_ID="password";Ar.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ar.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi extends Ao{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt extends Fi{constructor(){super("facebook.com")}static credential(e){return Sn._fromParams({providerId:Mt.PROVIDER_ID,signInMethod:Mt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Mt.credentialFromTaggedObject(e)}static credentialFromError(e){return Mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Mt.credential(e.oauthAccessToken)}catch{return null}}}Mt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Mt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt extends Fi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Sn._fromParams({providerId:Lt.PROVIDER_ID,signInMethod:Lt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Lt.credentialFromTaggedObject(e)}static credentialFromError(e){return Lt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Lt.credential(t,n)}catch{return null}}}Lt.GOOGLE_SIGN_IN_METHOD="google.com";Lt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft extends Fi{constructor(){super("github.com")}static credential(e){return Sn._fromParams({providerId:Ft.PROVIDER_ID,signInMethod:Ft.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ft.credentialFromTaggedObject(e)}static credentialFromError(e){return Ft.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ft.credential(e.oauthAccessToken)}catch{return null}}}Ft.GITHUB_SIGN_IN_METHOD="github.com";Ft.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut extends Fi{constructor(){super("twitter.com")}static credential(e,t){return Sn._fromParams({providerId:Ut.PROVIDER_ID,signInMethod:Ut.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ut.credentialFromTaggedObject(e)}static credentialFromError(e){return Ut.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Ut.credential(t,n)}catch{return null}}}Ut.TWITTER_SIGN_IN_METHOD="twitter.com";Ut.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gI(r,e){return Li(r,"POST","/v1/accounts:signUp",At(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,i=!1){const s=await Xe._fromIdTokenResponse(e,n,i),o=Jl(n);return new Cn({user:s,providerId:o,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const i=Jl(n);return new Cn({user:e,providerId:i,_tokenResponse:n,operationType:t})}}function Jl(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs extends ut{constructor(e,t,n,i){var s;super(t.code,t.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,Qs.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,i){return new Qs(e,t,n,i)}}function Ef(r,e,t,n){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Qs._fromErrorAndOperation(r,s,e,n):s})}async function _I(r,e,t=!1){const n=await Pn(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return Cn._forOperation(r,"link",n)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tf(r,e,t=!1){const{auth:n}=r;if(Oe(n.app))return Promise.reject(_t(n));const i="reauthenticate";try{const s=await Pn(r,Ef(n,i,e,r),t);q(s.idToken,n,"internal-error");const o=Ac(s.idToken);q(o,n,"internal-error");const{sub:c}=o;return q(r.uid===c,n,"user-mismatch"),Cn._forOperation(r,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&We(n,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vf(r,e,t=!1){if(Oe(r.app))return Promise.reject(_t(r));const n="signIn",i=await Ef(r,n,e),s=await Cn._fromIdTokenResponse(r,n,i);return t||await r._updateCurrentUser(s.user),s}async function yI(r,e){return vf(Rt(r),e)}async function jA(r,e){return Tf(ee(r),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wf(r,e,t){var n;q(((n=t.url)===null||n===void 0?void 0:n.length)>0,r,"invalid-continue-uri"),q(typeof t.dynamicLinkDomain>"u"||t.dynamicLinkDomain.length>0,r,"invalid-dynamic-link-domain"),q(typeof t.linkDomain>"u"||t.linkDomain.length>0,r,"invalid-hosting-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.linkDomain=t.linkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(q(t.iOS.bundleId.length>0,r,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(q(t.android.packageName.length>0,r,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Af(r){const e=Rt(r);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function qA(r,e,t){const n=Rt(r),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};t&&wf(n,i,t),await Hs(n,i,"getOobCode",lI)}async function $A(r,e,t){if(Oe(r.app))return Promise.reject(_t(r));const n=Rt(r),o=await Hs(n,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",gI).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&Af(r),u}),c=await Cn._fromIdTokenResponse(n,"signIn",o);return await n._updateCurrentUser(c.user),c}function zA(r,e,t){return Oe(r.app)?Promise.reject(_t(r)):yI(ee(r),Ar.credential(e,t)).catch(async n=>{throw n.code==="auth/password-does-not-meet-requirements"&&Af(r),n})}async function KA(r,e){const t=ee(r),i={requestType:"VERIFY_EMAIL",idToken:await r.getIdToken()};e&&wf(t.auth,i,e);const{email:s}=await uI(t.auth,i);s!==r.email&&await r.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function II(r,e){return Ye(r,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GA(r,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const n=ee(r),s={idToken:await n.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},o=await Pn(n,II(n.auth,s));n.displayName=o.displayName||null,n.photoURL=o.photoUrl||null;const c=n.providerData.find(({providerId:u})=>u==="password");c&&(c.displayName=n.displayName,c.photoURL=n.photoURL),await n._updateTokensIfNecessary(o)}function WA(r,e){return EI(ee(r),null,e)}async function EI(r,e,t){const{auth:n}=r,s={idToken:await r.getIdToken(),returnSecureToken:!0};t&&(s.password=t);const o=await Pn(r,oI(n,s));await r._updateTokensIfNecessary(o,!0)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HA(r,e){return ee(r).setPersistence(e)}function TI(r,e,t,n){return ee(r).onIdTokenChanged(e,t,n)}function vI(r,e,t){return ee(r).beforeAuthStateChanged(e,t)}function QA(r,e,t,n){return ee(r).onAuthStateChanged(e,t,n)}function XA(r){return ee(r).signOut()}async function JA(r){return ee(r).delete()}const Xs="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rf{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Xs,"1"),this.storage.removeItem(Xs),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wI=1e3,AI=10;class bf extends Rf{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=pf(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),i=this.localCache[t];n!==i&&e(t,i,n)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,c,u)=>{this.notifyListeners(o,u)});return}const n=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(n);!t&&this.localCache[n]===o||this.notifyListeners(n,o)},s=this.storage.getItem(n);jy()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,AI):i()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},wI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}bf.type="LOCAL";const RI=bf;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pf extends Rf{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Pf.type="SESSION";const Sf=Pf;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bI(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const n=new Ro(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:i,data:s}=t.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const c=Array.from(o).map(async h=>h(t.origin,s)),u=await bI(c);t.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ro.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sc(r="",e=10){let t="";for(let n=0;n<e;n++)t+=Math.floor(Math.random()*10);return r+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((c,u)=>{const h=Sc("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},n);o={messageChannel:i,onMessage(m){const g=m;if(g.data.eventId===h)switch(g.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),c(g.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function it(){return window}function SI(r){it().location.href=r}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cf(){return typeof it().WorkerGlobalScope<"u"&&typeof it().importScripts=="function"}async function CI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function VI(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function DI(){return Cf()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vf="firebaseLocalStorageDb",kI=1,Js="firebaseLocalStorage",Df="fbase_key";class Ui{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function bo(r,e){return r.transaction([Js],e?"readwrite":"readonly").objectStore(Js)}function NI(){const r=indexedDB.deleteDatabase(Vf);return new Ui(r).toPromise()}function qa(){const r=indexedDB.open(Vf,kI);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const n=r.result;try{n.createObjectStore(Js,{keyPath:Df})}catch(i){t(i)}}),r.addEventListener("success",async()=>{const n=r.result;n.objectStoreNames.contains(Js)?e(n):(n.close(),await NI(),e(await qa()))})})}async function Yl(r,e,t){const n=bo(r,!0).put({[Df]:e,value:t});return new Ui(n).toPromise()}async function xI(r,e){const t=bo(r,!1).get(e),n=await new Ui(t).toPromise();return n===void 0?null:n.value}function Zl(r,e){const t=bo(r,!0).delete(e);return new Ui(t).toPromise()}const OI=800,MI=3;class kf{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await qa(),this.db)}async _withRetries(e){let t=0;for(;;)try{const n=await this._openDb();return await e(n)}catch(n){if(t++>MI)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Cf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ro._getInstance(DI()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await CI(),!this.activeServiceWorker)return;this.sender=new PI(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&!((e=n[0])===null||e===void 0)&&e.fulfilled&&!((t=n[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||VI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await qa();return await Yl(e,Xs,"1"),await Zl(e,Xs),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Yl(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(n=>xI(n,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Zl(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=bo(i,!1).getAll();return new Ui(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],n=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!n.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),OI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}kf.type="LOCAL";const LI=kf;new Mi(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cc(r,e){return e?mt(e):(q(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc extends bc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ir(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ir(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ir(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function FI(r){return vf(r.auth,new Vc(r),r.bypassAuthState)}function UI(r){const{auth:e,user:t}=r;return q(t,e,"internal-error"),Tf(t,new Vc(r),r.bypassAuthState)}async function BI(r){const{auth:e,user:t}=r;return q(t,e,"internal-error"),_I(t,new Vc(r),r.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nf{constructor(e,t,n,i,s=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:i,tenantId:s,error:o,type:c}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:t,sessionId:n,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return FI;case"linkViaPopup":case"linkViaRedirect":return BI;case"reauthViaPopup":case"reauthViaRedirect":return UI;default:We(this.auth,"internal-error")}}resolve(e){Tt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Tt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jI=new Mi(2e3,1e4);async function YA(r,e,t){if(Oe(r.app))return Promise.reject(Ge(r,"operation-not-supported-in-this-environment"));const n=Rt(r);ef(r,e,Ao);const i=Cc(n,t);return new jt(n,"signInViaPopup",e,i).executeNotNull()}async function ZA(r,e,t){const n=ee(r);if(Oe(n.auth.app))return Promise.reject(Ge(n.auth,"operation-not-supported-in-this-environment"));ef(n.auth,e,Ao);const i=Cc(n.auth,t);return new jt(n.auth,"reauthViaPopup",e,i,n).executeNotNull()}class jt extends Nf{constructor(e,t,n,i,s){super(e,t,i,s),this.provider=n,this.authWindow=null,this.pollId=null,jt.currentPopupAction&&jt.currentPopupAction.cancel(),jt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return q(e,this.auth,"internal-error"),e}async onExecution(){Tt(this.filter.length===1,"Popup operations only handle one event");const e=Sc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Ge(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ge(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,jt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;if(!((n=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||n===void 0)&&n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ge(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,jI.get())};e()}}jt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qI="pendingRedirect",Cs=new Map;class $I extends Nf{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Cs.get(this.auth._key());if(!e){try{const n=await zI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}Cs.set(this.auth._key(),e)}return this.bypassAuthState||Cs.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function zI(r,e){const t=WI(e),n=GI(r);if(!await n._isAvailable())return!1;const i=await n._get(t)==="true";return await n._remove(t),i}function KI(r,e){Cs.set(r._key(),e)}function GI(r){return mt(r._redirectPersistence)}function WI(r){return Ss(qI,r.config.apiKey,r.name)}async function HI(r,e,t=!1){if(Oe(r.app))return Promise.reject(_t(r));const n=Rt(r),i=Cc(n,e),o=await new $I(n,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await n._persistUserIfCurrent(o.user),await n._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QI=600*1e3;class XI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!JI(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!xf(e)){const i=((n=e.error.code)===null||n===void 0?void 0:n.split("auth/")[1])||"internal-error";t.onError(Ge(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=QI&&this.cachedEventUids.clear(),this.cachedEventUids.has(eh(e))}saveEventToCache(e){this.cachedEventUids.add(eh(e)),this.lastProcessedEventTime=Date.now()}}function eh(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function xf({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function JI(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return xf(r);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YI(r,e={}){return Ye(r,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,eE=/^https?/;async function tE(r){if(r.config.emulator)return;const{authorizedDomains:e}=await YI(r);for(const t of e)try{if(nE(t))return}catch{}We(r,"unauthorized-domain")}function nE(r){const e=Ba(),{protocol:t,hostname:n}=new URL(e);if(r.startsWith("chrome-extension://")){const o=new URL(r);return o.hostname===""&&n===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===n}if(!eE.test(t))return!1;if(ZI.test(r))return n===r;const i=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(n)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rE=new Mi(3e4,6e4);function th(){const r=it().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function iE(r){return new Promise((e,t)=>{var n,i,s;function o(){th(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{th(),t(Ge(r,"network-request-failed"))},timeout:rE.get()})}if(!((i=(n=it().gapi)===null||n===void 0?void 0:n.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=it().gapi)===null||s===void 0)&&s.load)o();else{const c=Xy("iframefcb");return it()[c]=()=>{gapi.load?o():t(Ge(r,"network-request-failed"))},gf(`${Qy()}?onload=${c}`).catch(u=>t(u))}}).catch(e=>{throw Vs=null,e})}let Vs=null;function sE(r){return Vs=Vs||iE(r),Vs}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oE=new Mi(5e3,15e3),aE="__/auth/iframe",cE="emulator/auth/iframe",uE={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},lE=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function hE(r){const e=r.config;q(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?wc(e,cE):`https://${r.config.authDomain}/${aE}`,n={apiKey:e.apiKey,appName:r.name,v:Fn},i=lE.get(r.config.apiHost);i&&(n.eid=i);const s=r._getFrameworks();return s.length&&(n.fw=s.join(",")),`${t}?${Oi(n).slice(1)}`}async function dE(r){const e=await sE(r),t=it().gapi;return q(t,r,"internal-error"),e.open({where:document.body,url:hE(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:uE,dontclear:!0},n=>new Promise(async(i,s)=>{await n.restyle({setHideOnLeave:!1});const o=Ge(r,"network-request-failed"),c=it().setTimeout(()=>{s(o)},oE.get());function u(){it().clearTimeout(c),i(n)}n.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fE={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},pE=500,mE=600,gE="_blank",_E="http://localhost";class nh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function yE(r,e,t,n=pE,i=mE){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-n)/2,0).toString();let c="";const u=Object.assign(Object.assign({},fE),{width:n.toString(),height:i.toString(),top:s,left:o}),h=ye().toLowerCase();t&&(c=uf(h)?gE:t),af(h)&&(e=e||_E,u.scrollbars="yes");const f=Object.entries(u).reduce((g,[b,C])=>`${g}${b}=${C},`,"");if(By(h)&&c!=="_self")return IE(e||"",c),new nh(null);const m=window.open(e||"",c,f);q(m,r,"popup-blocked");try{m.focus()}catch{}return new nh(m)}function IE(r,e){const t=document.createElement("a");t.href=r,t.target=e;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(n)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EE="__/auth/handler",TE="emulator/auth/handler",vE=encodeURIComponent("fac");async function rh(r,e,t,n,i,s){q(r.config.authDomain,r,"auth-domain-config-required"),q(r.config.apiKey,r,"invalid-api-key");const o={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:n,v:Fn,eventId:i};if(e instanceof Ao){e.setDefaultLanguage(r.languageCode),o.providerId=e.providerId||"",a_(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,m]of Object.entries({}))o[f]=m}if(e instanceof Fi){const f=e.getScopes().filter(m=>m!=="");f.length>0&&(o.scopes=f.join(","))}r.tenantId&&(o.tid=r.tenantId);const c=o;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const u=await r._getAppCheckToken(),h=u?`#${vE}=${encodeURIComponent(u)}`:"";return`${wE(r)}?${Oi(c).slice(1)}${h}`}function wE({config:r}){return r.emulator?wc(r,TE):`https://${r.authDomain}/${EE}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ra="webStorageSupport";class AE{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Sf,this._completeRedirectFn=HI,this._overrideRedirectResult=KI}async _openPopup(e,t,n,i){var s;Tt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await rh(e,t,n,Ba(),i);return yE(e,o,Sc())}async _openRedirect(e,t,n,i){await this._originValidation(e);const s=await rh(e,t,n,Ba(),i);return SI(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(Tt(s,"If manager is not set, promise should be"),s)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await dE(e),n=new XI(e);return t.register("authEvent",i=>(q(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:n.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Ra,{type:Ra},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Ra];o!==void 0&&t(!!o),We(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=tE(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return pf()||cf()||Rc()}}const RE=AE;var ih="@firebase/auth",sh="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bE{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(n=>{e((n==null?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PE(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function SE(r){bn(new Xt("auth",(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=n.options;q(o&&!o.includes(":"),"invalid-api-key",{appName:n.name});const u={apiKey:o,authDomain:c,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:mf(r)},h=new Gy(n,i,s,u);return nI(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),bn(new Xt("auth-internal",e=>{const t=Rt(e.getProvider("auth").getImmediate());return(n=>new bE(n))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),rt(ih,sh,PE(r)),rt(ih,sh,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CE=300,VE=jd("authIdTokenMaxAge")||CE;let oh=null;const DE=r=>async e=>{const t=e&&await e.getIdTokenResult(),n=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>VE)return;const i=t==null?void 0:t.token;oh!==i&&(oh=i,await fetch(r,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function eR(r=Qd()){const e=vo(r,"auth");if(e.isInitialized())return e.getImmediate();const t=tI(r,{popupRedirectResolver:RE,persistence:[LI,RI,Sf]}),n=jd("authTokenSyncURL");if(n&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(n,location.origin);if(location.origin===s.origin){const o=DE(s.toString());vI(t,o,()=>o(t.currentUser)),TI(t,c=>o(c))}}const i=Ud("auth");return i&&rI(t,`http://${i}`),t}function kE(){var r,e;return(e=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:document}Wy({loadJS(r){return new Promise((e,t)=>{const n=document.createElement("script");n.setAttribute("src",r),n.onload=e,n.onerror=i=>{const s=Ge("internal-error");s.customData=i,t(s)},n.type="text/javascript",n.charset="UTF-8",kE().appendChild(n)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});SE("Browser");var ah=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Gt,Of;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,_){function I(){}I.prototype=_.prototype,E.D=_.prototype,E.prototype=new I,E.prototype.constructor=E,E.C=function(T,v,R){for(var y=Array(arguments.length-2),ht=2;ht<arguments.length;ht++)y[ht-2]=arguments[ht];return _.prototype[v].apply(T,y)}}function t(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(n,t),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(E,_,I){I||(I=0);var T=Array(16);if(typeof _=="string")for(var v=0;16>v;++v)T[v]=_.charCodeAt(I++)|_.charCodeAt(I++)<<8|_.charCodeAt(I++)<<16|_.charCodeAt(I++)<<24;else for(v=0;16>v;++v)T[v]=_[I++]|_[I++]<<8|_[I++]<<16|_[I++]<<24;_=E.g[0],I=E.g[1],v=E.g[2];var R=E.g[3],y=_+(R^I&(v^R))+T[0]+3614090360&4294967295;_=I+(y<<7&4294967295|y>>>25),y=R+(v^_&(I^v))+T[1]+3905402710&4294967295,R=_+(y<<12&4294967295|y>>>20),y=v+(I^R&(_^I))+T[2]+606105819&4294967295,v=R+(y<<17&4294967295|y>>>15),y=I+(_^v&(R^_))+T[3]+3250441966&4294967295,I=v+(y<<22&4294967295|y>>>10),y=_+(R^I&(v^R))+T[4]+4118548399&4294967295,_=I+(y<<7&4294967295|y>>>25),y=R+(v^_&(I^v))+T[5]+1200080426&4294967295,R=_+(y<<12&4294967295|y>>>20),y=v+(I^R&(_^I))+T[6]+2821735955&4294967295,v=R+(y<<17&4294967295|y>>>15),y=I+(_^v&(R^_))+T[7]+4249261313&4294967295,I=v+(y<<22&4294967295|y>>>10),y=_+(R^I&(v^R))+T[8]+1770035416&4294967295,_=I+(y<<7&4294967295|y>>>25),y=R+(v^_&(I^v))+T[9]+2336552879&4294967295,R=_+(y<<12&4294967295|y>>>20),y=v+(I^R&(_^I))+T[10]+4294925233&4294967295,v=R+(y<<17&4294967295|y>>>15),y=I+(_^v&(R^_))+T[11]+2304563134&4294967295,I=v+(y<<22&4294967295|y>>>10),y=_+(R^I&(v^R))+T[12]+1804603682&4294967295,_=I+(y<<7&4294967295|y>>>25),y=R+(v^_&(I^v))+T[13]+4254626195&4294967295,R=_+(y<<12&4294967295|y>>>20),y=v+(I^R&(_^I))+T[14]+2792965006&4294967295,v=R+(y<<17&4294967295|y>>>15),y=I+(_^v&(R^_))+T[15]+1236535329&4294967295,I=v+(y<<22&4294967295|y>>>10),y=_+(v^R&(I^v))+T[1]+4129170786&4294967295,_=I+(y<<5&4294967295|y>>>27),y=R+(I^v&(_^I))+T[6]+3225465664&4294967295,R=_+(y<<9&4294967295|y>>>23),y=v+(_^I&(R^_))+T[11]+643717713&4294967295,v=R+(y<<14&4294967295|y>>>18),y=I+(R^_&(v^R))+T[0]+3921069994&4294967295,I=v+(y<<20&4294967295|y>>>12),y=_+(v^R&(I^v))+T[5]+3593408605&4294967295,_=I+(y<<5&4294967295|y>>>27),y=R+(I^v&(_^I))+T[10]+38016083&4294967295,R=_+(y<<9&4294967295|y>>>23),y=v+(_^I&(R^_))+T[15]+3634488961&4294967295,v=R+(y<<14&4294967295|y>>>18),y=I+(R^_&(v^R))+T[4]+3889429448&4294967295,I=v+(y<<20&4294967295|y>>>12),y=_+(v^R&(I^v))+T[9]+568446438&4294967295,_=I+(y<<5&4294967295|y>>>27),y=R+(I^v&(_^I))+T[14]+3275163606&4294967295,R=_+(y<<9&4294967295|y>>>23),y=v+(_^I&(R^_))+T[3]+4107603335&4294967295,v=R+(y<<14&4294967295|y>>>18),y=I+(R^_&(v^R))+T[8]+1163531501&4294967295,I=v+(y<<20&4294967295|y>>>12),y=_+(v^R&(I^v))+T[13]+2850285829&4294967295,_=I+(y<<5&4294967295|y>>>27),y=R+(I^v&(_^I))+T[2]+4243563512&4294967295,R=_+(y<<9&4294967295|y>>>23),y=v+(_^I&(R^_))+T[7]+1735328473&4294967295,v=R+(y<<14&4294967295|y>>>18),y=I+(R^_&(v^R))+T[12]+2368359562&4294967295,I=v+(y<<20&4294967295|y>>>12),y=_+(I^v^R)+T[5]+4294588738&4294967295,_=I+(y<<4&4294967295|y>>>28),y=R+(_^I^v)+T[8]+2272392833&4294967295,R=_+(y<<11&4294967295|y>>>21),y=v+(R^_^I)+T[11]+1839030562&4294967295,v=R+(y<<16&4294967295|y>>>16),y=I+(v^R^_)+T[14]+4259657740&4294967295,I=v+(y<<23&4294967295|y>>>9),y=_+(I^v^R)+T[1]+2763975236&4294967295,_=I+(y<<4&4294967295|y>>>28),y=R+(_^I^v)+T[4]+1272893353&4294967295,R=_+(y<<11&4294967295|y>>>21),y=v+(R^_^I)+T[7]+4139469664&4294967295,v=R+(y<<16&4294967295|y>>>16),y=I+(v^R^_)+T[10]+3200236656&4294967295,I=v+(y<<23&4294967295|y>>>9),y=_+(I^v^R)+T[13]+681279174&4294967295,_=I+(y<<4&4294967295|y>>>28),y=R+(_^I^v)+T[0]+3936430074&4294967295,R=_+(y<<11&4294967295|y>>>21),y=v+(R^_^I)+T[3]+3572445317&4294967295,v=R+(y<<16&4294967295|y>>>16),y=I+(v^R^_)+T[6]+76029189&4294967295,I=v+(y<<23&4294967295|y>>>9),y=_+(I^v^R)+T[9]+3654602809&4294967295,_=I+(y<<4&4294967295|y>>>28),y=R+(_^I^v)+T[12]+3873151461&4294967295,R=_+(y<<11&4294967295|y>>>21),y=v+(R^_^I)+T[15]+530742520&4294967295,v=R+(y<<16&4294967295|y>>>16),y=I+(v^R^_)+T[2]+3299628645&4294967295,I=v+(y<<23&4294967295|y>>>9),y=_+(v^(I|~R))+T[0]+4096336452&4294967295,_=I+(y<<6&4294967295|y>>>26),y=R+(I^(_|~v))+T[7]+1126891415&4294967295,R=_+(y<<10&4294967295|y>>>22),y=v+(_^(R|~I))+T[14]+2878612391&4294967295,v=R+(y<<15&4294967295|y>>>17),y=I+(R^(v|~_))+T[5]+4237533241&4294967295,I=v+(y<<21&4294967295|y>>>11),y=_+(v^(I|~R))+T[12]+1700485571&4294967295,_=I+(y<<6&4294967295|y>>>26),y=R+(I^(_|~v))+T[3]+2399980690&4294967295,R=_+(y<<10&4294967295|y>>>22),y=v+(_^(R|~I))+T[10]+4293915773&4294967295,v=R+(y<<15&4294967295|y>>>17),y=I+(R^(v|~_))+T[1]+2240044497&4294967295,I=v+(y<<21&4294967295|y>>>11),y=_+(v^(I|~R))+T[8]+1873313359&4294967295,_=I+(y<<6&4294967295|y>>>26),y=R+(I^(_|~v))+T[15]+4264355552&4294967295,R=_+(y<<10&4294967295|y>>>22),y=v+(_^(R|~I))+T[6]+2734768916&4294967295,v=R+(y<<15&4294967295|y>>>17),y=I+(R^(v|~_))+T[13]+1309151649&4294967295,I=v+(y<<21&4294967295|y>>>11),y=_+(v^(I|~R))+T[4]+4149444226&4294967295,_=I+(y<<6&4294967295|y>>>26),y=R+(I^(_|~v))+T[11]+3174756917&4294967295,R=_+(y<<10&4294967295|y>>>22),y=v+(_^(R|~I))+T[2]+718787259&4294967295,v=R+(y<<15&4294967295|y>>>17),y=I+(R^(v|~_))+T[9]+3951481745&4294967295,E.g[0]=E.g[0]+_&4294967295,E.g[1]=E.g[1]+(v+(y<<21&4294967295|y>>>11))&4294967295,E.g[2]=E.g[2]+v&4294967295,E.g[3]=E.g[3]+R&4294967295}n.prototype.u=function(E,_){_===void 0&&(_=E.length);for(var I=_-this.blockSize,T=this.B,v=this.h,R=0;R<_;){if(v==0)for(;R<=I;)i(this,E,R),R+=this.blockSize;if(typeof E=="string"){for(;R<_;)if(T[v++]=E.charCodeAt(R++),v==this.blockSize){i(this,T),v=0;break}}else for(;R<_;)if(T[v++]=E[R++],v==this.blockSize){i(this,T),v=0;break}}this.h=v,this.o+=_},n.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var _=1;_<E.length-8;++_)E[_]=0;var I=8*this.o;for(_=E.length-8;_<E.length;++_)E[_]=I&255,I/=256;for(this.u(E),E=Array(16),_=I=0;4>_;++_)for(var T=0;32>T;T+=8)E[I++]=this.g[_]>>>T&255;return E};function s(E,_){var I=c;return Object.prototype.hasOwnProperty.call(I,E)?I[E]:I[E]=_(E)}function o(E,_){this.h=_;for(var I=[],T=!0,v=E.length-1;0<=v;v--){var R=E[v]|0;T&&R==_||(I[v]=R,T=!1)}this.g=I}var c={};function u(E){return-128<=E&&128>E?s(E,function(_){return new o([_|0],0>_?-1:0)}):new o([E|0],0>E?-1:0)}function h(E){if(isNaN(E)||!isFinite(E))return m;if(0>E)return V(h(-E));for(var _=[],I=1,T=0;E>=I;T++)_[T]=E/I|0,I*=4294967296;return new o(_,0)}function f(E,_){if(E.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(E.charAt(0)=="-")return V(f(E.substring(1),_));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var I=h(Math.pow(_,8)),T=m,v=0;v<E.length;v+=8){var R=Math.min(8,E.length-v),y=parseInt(E.substring(v,v+R),_);8>R?(R=h(Math.pow(_,R)),T=T.j(R).add(h(y))):(T=T.j(I),T=T.add(h(y)))}return T}var m=u(0),g=u(1),b=u(16777216);r=o.prototype,r.m=function(){if(k(this))return-V(this).m();for(var E=0,_=1,I=0;I<this.g.length;I++){var T=this.i(I);E+=(0<=T?T:4294967296+T)*_,_*=4294967296}return E},r.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(C(this))return"0";if(k(this))return"-"+V(this).toString(E);for(var _=h(Math.pow(E,6)),I=this,T="";;){var v=K(I,_).g;I=$(I,v.j(_));var R=((0<I.g.length?I.g[0]:I.h)>>>0).toString(E);if(I=v,C(I))return R+T;for(;6>R.length;)R="0"+R;T=R+T}},r.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function C(E){if(E.h!=0)return!1;for(var _=0;_<E.g.length;_++)if(E.g[_]!=0)return!1;return!0}function k(E){return E.h==-1}r.l=function(E){return E=$(this,E),k(E)?-1:C(E)?0:1};function V(E){for(var _=E.g.length,I=[],T=0;T<_;T++)I[T]=~E.g[T];return new o(I,~E.h).add(g)}r.abs=function(){return k(this)?V(this):this},r.add=function(E){for(var _=Math.max(this.g.length,E.g.length),I=[],T=0,v=0;v<=_;v++){var R=T+(this.i(v)&65535)+(E.i(v)&65535),y=(R>>>16)+(this.i(v)>>>16)+(E.i(v)>>>16);T=y>>>16,R&=65535,y&=65535,I[v]=y<<16|R}return new o(I,I[I.length-1]&-2147483648?-1:0)};function $(E,_){return E.add(V(_))}r.j=function(E){if(C(this)||C(E))return m;if(k(this))return k(E)?V(this).j(V(E)):V(V(this).j(E));if(k(E))return V(this.j(V(E)));if(0>this.l(b)&&0>E.l(b))return h(this.m()*E.m());for(var _=this.g.length+E.g.length,I=[],T=0;T<2*_;T++)I[T]=0;for(T=0;T<this.g.length;T++)for(var v=0;v<E.g.length;v++){var R=this.i(T)>>>16,y=this.i(T)&65535,ht=E.i(v)>>>16,Nr=E.i(v)&65535;I[2*T+2*v]+=y*Nr,j(I,2*T+2*v),I[2*T+2*v+1]+=R*Nr,j(I,2*T+2*v+1),I[2*T+2*v+1]+=y*ht,j(I,2*T+2*v+1),I[2*T+2*v+2]+=R*ht,j(I,2*T+2*v+2)}for(T=0;T<_;T++)I[T]=I[2*T+1]<<16|I[2*T];for(T=_;T<2*_;T++)I[T]=0;return new o(I,0)};function j(E,_){for(;(E[_]&65535)!=E[_];)E[_+1]+=E[_]>>>16,E[_]&=65535,_++}function L(E,_){this.g=E,this.h=_}function K(E,_){if(C(_))throw Error("division by zero");if(C(E))return new L(m,m);if(k(E))return _=K(V(E),_),new L(V(_.g),V(_.h));if(k(_))return _=K(E,V(_)),new L(V(_.g),_.h);if(30<E.g.length){if(k(E)||k(_))throw Error("slowDivide_ only works with positive integers.");for(var I=g,T=_;0>=T.l(E);)I=X(I),T=X(T);var v=G(I,1),R=G(T,1);for(T=G(T,2),I=G(I,2);!C(T);){var y=R.add(T);0>=y.l(E)&&(v=v.add(I),R=y),T=G(T,1),I=G(I,1)}return _=$(E,v.j(_)),new L(v,_)}for(v=m;0<=E.l(_);){for(I=Math.max(1,Math.floor(E.m()/_.m())),T=Math.ceil(Math.log(I)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),R=h(I),y=R.j(_);k(y)||0<y.l(E);)I-=T,R=h(I),y=R.j(_);C(R)&&(R=g),v=v.add(R),E=$(E,y)}return new L(v,E)}r.A=function(E){return K(this,E).h},r.and=function(E){for(var _=Math.max(this.g.length,E.g.length),I=[],T=0;T<_;T++)I[T]=this.i(T)&E.i(T);return new o(I,this.h&E.h)},r.or=function(E){for(var _=Math.max(this.g.length,E.g.length),I=[],T=0;T<_;T++)I[T]=this.i(T)|E.i(T);return new o(I,this.h|E.h)},r.xor=function(E){for(var _=Math.max(this.g.length,E.g.length),I=[],T=0;T<_;T++)I[T]=this.i(T)^E.i(T);return new o(I,this.h^E.h)};function X(E){for(var _=E.g.length+1,I=[],T=0;T<_;T++)I[T]=E.i(T)<<1|E.i(T-1)>>>31;return new o(I,E.h)}function G(E,_){var I=_>>5;_%=32;for(var T=E.g.length-I,v=[],R=0;R<T;R++)v[R]=0<_?E.i(R+I)>>>_|E.i(R+I+1)<<32-_:E.i(R+I);return new o(v,E.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,Of=n,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,Gt=o}).apply(typeof ah<"u"?ah:typeof self<"u"?self:typeof window<"u"?window:{});var Is=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Mf,ri,Lf,Ds,$a,Ff,Uf,Bf;(function(){var r,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,l,d){return a==Array.prototype||a==Object.prototype||(a[l]=d.value),a};function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Is=="object"&&Is];for(var l=0;l<a.length;++l){var d=a[l];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var n=t(this);function i(a,l){if(l)e:{var d=n;a=a.split(".");for(var p=0;p<a.length-1;p++){var A=a[p];if(!(A in d))break e;d=d[A]}a=a[a.length-1],p=d[a],l=l(p),l!=p&&l!=null&&e(d,a,{configurable:!0,writable:!0,value:l})}}function s(a,l){a instanceof String&&(a+="");var d=0,p=!1,A={next:function(){if(!p&&d<a.length){var P=d++;return{value:l(P,a[P]),done:!1}}return p=!0,{done:!0,value:void 0}}};return A[Symbol.iterator]=function(){return A},A}i("Array.prototype.values",function(a){return a||function(){return s(this,function(l,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},c=this||self;function u(a){var l=typeof a;return l=l!="object"?l:a?Array.isArray(a)?"array":l:"null",l=="array"||l=="object"&&typeof a.length=="number"}function h(a){var l=typeof a;return l=="object"&&a!=null||l=="function"}function f(a,l,d){return a.call.apply(a.bind,arguments)}function m(a,l,d){if(!a)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var A=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(A,p),a.apply(l,A)}}return function(){return a.apply(l,arguments)}}function g(a,l,d){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:m,g.apply(null,arguments)}function b(a,l){var d=Array.prototype.slice.call(arguments,1);return function(){var p=d.slice();return p.push.apply(p,arguments),a.apply(this,p)}}function C(a,l){function d(){}d.prototype=l.prototype,a.aa=l.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(p,A,P){for(var x=Array(arguments.length-2),ie=2;ie<arguments.length;ie++)x[ie-2]=arguments[ie];return l.prototype[A].apply(p,x)}}function k(a){const l=a.length;if(0<l){const d=Array(l);for(let p=0;p<l;p++)d[p]=a[p];return d}return[]}function V(a,l){for(let d=1;d<arguments.length;d++){const p=arguments[d];if(u(p)){const A=a.length||0,P=p.length||0;a.length=A+P;for(let x=0;x<P;x++)a[A+x]=p[x]}else a.push(p)}}class ${constructor(l,d){this.i=l,this.j=d,this.h=0,this.g=null}get(){let l;return 0<this.h?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function j(a){return/^[\s\xa0]*$/.test(a)}function L(){var a=c.navigator;return a&&(a=a.userAgent)?a:""}function K(a){return K[" "](a),a}K[" "]=function(){};var X=L().indexOf("Gecko")!=-1&&!(L().toLowerCase().indexOf("webkit")!=-1&&L().indexOf("Edge")==-1)&&!(L().indexOf("Trident")!=-1||L().indexOf("MSIE")!=-1)&&L().indexOf("Edge")==-1;function G(a,l,d){for(const p in a)l.call(d,a[p],p,a)}function E(a,l){for(const d in a)l.call(void 0,a[d],d,a)}function _(a){const l={};for(const d in a)l[d]=a[d];return l}const I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(a,l){let d,p;for(let A=1;A<arguments.length;A++){p=arguments[A];for(d in p)a[d]=p[d];for(let P=0;P<I.length;P++)d=I[P],Object.prototype.hasOwnProperty.call(p,d)&&(a[d]=p[d])}}function v(a){var l=1;a=a.split(":");const d=[];for(;0<l&&a.length;)d.push(a.shift()),l--;return a.length&&d.push(a.join(":")),d}function R(a){c.setTimeout(()=>{throw a},0)}function y(){var a=Qo;let l=null;return a.g&&(l=a.g,a.g=a.g.next,a.g||(a.h=null),l.next=null),l}class ht{constructor(){this.h=this.g=null}add(l,d){const p=Nr.get();p.set(l,d),this.h?this.h.next=p:this.g=p,this.h=p}}var Nr=new $(()=>new sg,a=>a.reset());class sg{constructor(){this.next=this.g=this.h=null}set(l,d){this.h=l,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let xr,Or=!1,Qo=new ht,Du=()=>{const a=c.Promise.resolve(void 0);xr=()=>{a.then(og)}};var og=()=>{for(var a;a=y();){try{a.h.call(a.g)}catch(d){R(d)}var l=Nr;l.j(a),100>l.h&&(l.h++,a.next=l.g,l.g=a)}Or=!1};function St(){this.s=this.s,this.C=this.C}St.prototype.s=!1,St.prototype.ma=function(){this.s||(this.s=!0,this.N())},St.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Re(a,l){this.type=a,this.g=this.target=l,this.defaultPrevented=!1}Re.prototype.h=function(){this.defaultPrevented=!0};var ag=(function(){if(!c.addEventListener||!Object.defineProperty)return!1;var a=!1,l=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};c.addEventListener("test",d,l),c.removeEventListener("test",d,l)}catch{}return a})();function Mr(a,l){if(Re.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,p=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=l,l=a.relatedTarget){if(X){e:{try{K(l.nodeName);var A=!0;break e}catch{}A=!1}A||(l=null)}}else d=="mouseover"?l=a.fromElement:d=="mouseout"&&(l=a.toElement);this.relatedTarget=l,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:cg[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Mr.aa.h.call(this)}}C(Mr,Re);var cg={2:"touch",3:"pen",4:"mouse"};Mr.prototype.h=function(){Mr.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Zi="closure_listenable_"+(1e6*Math.random()|0),ug=0;function lg(a,l,d,p,A){this.listener=a,this.proxy=null,this.src=l,this.type=d,this.capture=!!p,this.ha=A,this.key=++ug,this.da=this.fa=!1}function es(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function ts(a){this.src=a,this.g={},this.h=0}ts.prototype.add=function(a,l,d,p,A){var P=a.toString();a=this.g[P],a||(a=this.g[P]=[],this.h++);var x=Jo(a,l,p,A);return-1<x?(l=a[x],d||(l.fa=!1)):(l=new lg(l,this.src,P,!!p,A),l.fa=d,a.push(l)),l};function Xo(a,l){var d=l.type;if(d in a.g){var p=a.g[d],A=Array.prototype.indexOf.call(p,l,void 0),P;(P=0<=A)&&Array.prototype.splice.call(p,A,1),P&&(es(l),a.g[d].length==0&&(delete a.g[d],a.h--))}}function Jo(a,l,d,p){for(var A=0;A<a.length;++A){var P=a[A];if(!P.da&&P.listener==l&&P.capture==!!d&&P.ha==p)return A}return-1}var Yo="closure_lm_"+(1e6*Math.random()|0),Zo={};function ku(a,l,d,p,A){if(Array.isArray(l)){for(var P=0;P<l.length;P++)ku(a,l[P],d,p,A);return null}return d=Ou(d),a&&a[Zi]?a.K(l,d,h(p)?!!p.capture:!1,A):hg(a,l,d,!1,p,A)}function hg(a,l,d,p,A,P){if(!l)throw Error("Invalid event type");var x=h(A)?!!A.capture:!!A,ie=ta(a);if(ie||(a[Yo]=ie=new ts(a)),d=ie.add(l,d,p,x,P),d.proxy)return d;if(p=dg(),d.proxy=p,p.src=a,p.listener=d,a.addEventListener)ag||(A=x),A===void 0&&(A=!1),a.addEventListener(l.toString(),p,A);else if(a.attachEvent)a.attachEvent(xu(l.toString()),p);else if(a.addListener&&a.removeListener)a.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return d}function dg(){function a(d){return l.call(a.src,a.listener,d)}const l=fg;return a}function Nu(a,l,d,p,A){if(Array.isArray(l))for(var P=0;P<l.length;P++)Nu(a,l[P],d,p,A);else p=h(p)?!!p.capture:!!p,d=Ou(d),a&&a[Zi]?(a=a.i,l=String(l).toString(),l in a.g&&(P=a.g[l],d=Jo(P,d,p,A),-1<d&&(es(P[d]),Array.prototype.splice.call(P,d,1),P.length==0&&(delete a.g[l],a.h--)))):a&&(a=ta(a))&&(l=a.g[l.toString()],a=-1,l&&(a=Jo(l,d,p,A)),(d=-1<a?l[a]:null)&&ea(d))}function ea(a){if(typeof a!="number"&&a&&!a.da){var l=a.src;if(l&&l[Zi])Xo(l.i,a);else{var d=a.type,p=a.proxy;l.removeEventListener?l.removeEventListener(d,p,a.capture):l.detachEvent?l.detachEvent(xu(d),p):l.addListener&&l.removeListener&&l.removeListener(p),(d=ta(l))?(Xo(d,a),d.h==0&&(d.src=null,l[Yo]=null)):es(a)}}}function xu(a){return a in Zo?Zo[a]:Zo[a]="on"+a}function fg(a,l){if(a.da)a=!0;else{l=new Mr(l,this);var d=a.listener,p=a.ha||a.src;a.fa&&ea(a),a=d.call(p,l)}return a}function ta(a){return a=a[Yo],a instanceof ts?a:null}var na="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ou(a){return typeof a=="function"?a:(a[na]||(a[na]=function(l){return a.handleEvent(l)}),a[na])}function be(){St.call(this),this.i=new ts(this),this.M=this,this.F=null}C(be,St),be.prototype[Zi]=!0,be.prototype.removeEventListener=function(a,l,d,p){Nu(this,a,l,d,p)};function Ne(a,l){var d,p=a.F;if(p)for(d=[];p;p=p.F)d.push(p);if(a=a.M,p=l.type||l,typeof l=="string")l=new Re(l,a);else if(l instanceof Re)l.target=l.target||a;else{var A=l;l=new Re(p,a),T(l,A)}if(A=!0,d)for(var P=d.length-1;0<=P;P--){var x=l.g=d[P];A=ns(x,p,!0,l)&&A}if(x=l.g=a,A=ns(x,p,!0,l)&&A,A=ns(x,p,!1,l)&&A,d)for(P=0;P<d.length;P++)x=l.g=d[P],A=ns(x,p,!1,l)&&A}be.prototype.N=function(){if(be.aa.N.call(this),this.i){var a=this.i,l;for(l in a.g){for(var d=a.g[l],p=0;p<d.length;p++)es(d[p]);delete a.g[l],a.h--}}this.F=null},be.prototype.K=function(a,l,d,p){return this.i.add(String(a),l,!1,d,p)},be.prototype.L=function(a,l,d,p){return this.i.add(String(a),l,!0,d,p)};function ns(a,l,d,p){if(l=a.i.g[String(l)],!l)return!0;l=l.concat();for(var A=!0,P=0;P<l.length;++P){var x=l[P];if(x&&!x.da&&x.capture==d){var ie=x.listener,ve=x.ha||x.src;x.fa&&Xo(a.i,x),A=ie.call(ve,p)!==!1&&A}}return A&&!p.defaultPrevented}function Mu(a,l,d){if(typeof a=="function")d&&(a=g(a,d));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(l)?-1:c.setTimeout(a,l||0)}function Lu(a){a.g=Mu(()=>{a.g=null,a.i&&(a.i=!1,Lu(a))},a.l);const l=a.h;a.h=null,a.m.apply(null,l)}class pg extends St{constructor(l,d){super(),this.m=l,this.l=d,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:Lu(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Lr(a){St.call(this),this.h=a,this.g={}}C(Lr,St);var Fu=[];function Uu(a){G(a.g,function(l,d){this.g.hasOwnProperty(d)&&ea(l)},a),a.g={}}Lr.prototype.N=function(){Lr.aa.N.call(this),Uu(this)},Lr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ra=c.JSON.stringify,mg=c.JSON.parse,gg=class{stringify(a){return c.JSON.stringify(a,void 0)}parse(a){return c.JSON.parse(a,void 0)}};function ia(){}ia.prototype.h=null;function Bu(a){return a.h||(a.h=a.i())}function ju(){}var Fr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function sa(){Re.call(this,"d")}C(sa,Re);function oa(){Re.call(this,"c")}C(oa,Re);var un={},qu=null;function rs(){return qu=qu||new be}un.La="serverreachability";function $u(a){Re.call(this,un.La,a)}C($u,Re);function Ur(a){const l=rs();Ne(l,new $u(l))}un.STAT_EVENT="statevent";function zu(a,l){Re.call(this,un.STAT_EVENT,a),this.stat=l}C(zu,Re);function xe(a){const l=rs();Ne(l,new zu(l,a))}un.Ma="timingevent";function Ku(a,l){Re.call(this,un.Ma,a),this.size=l}C(Ku,Re);function Br(a,l){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){a()},l)}function jr(){this.g=!0}jr.prototype.xa=function(){this.g=!1};function _g(a,l,d,p,A,P){a.info(function(){if(a.g)if(P)for(var x="",ie=P.split("&"),ve=0;ve<ie.length;ve++){var Z=ie[ve].split("=");if(1<Z.length){var Pe=Z[0];Z=Z[1];var Se=Pe.split("_");x=2<=Se.length&&Se[1]=="type"?x+(Pe+"="+Z+"&"):x+(Pe+"=redacted&")}}else x=null;else x=P;return"XMLHTTP REQ ("+p+") [attempt "+A+"]: "+l+`
`+d+`
`+x})}function yg(a,l,d,p,A,P,x){a.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+A+"]: "+l+`
`+d+`
`+P+" "+x})}function jn(a,l,d,p){a.info(function(){return"XMLHTTP TEXT ("+l+"): "+Eg(a,d)+(p?" "+p:"")})}function Ig(a,l){a.info(function(){return"TIMEOUT: "+l})}jr.prototype.info=function(){};function Eg(a,l){if(!a.g)return l;if(!l)return null;try{var d=JSON.parse(l);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var p=d[a];if(!(2>p.length)){var A=p[1];if(Array.isArray(A)&&!(1>A.length)){var P=A[0];if(P!="noop"&&P!="stop"&&P!="close")for(var x=1;x<A.length;x++)A[x]=""}}}}return ra(d)}catch{return l}}var is={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Gu={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},aa;function ss(){}C(ss,ia),ss.prototype.g=function(){return new XMLHttpRequest},ss.prototype.i=function(){return{}},aa=new ss;function Ct(a,l,d,p){this.j=a,this.i=l,this.l=d,this.R=p||1,this.U=new Lr(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Wu}function Wu(){this.i=null,this.g="",this.h=!1}var Hu={},ca={};function ua(a,l,d){a.L=1,a.v=us(dt(l)),a.m=d,a.P=!0,Qu(a,null)}function Qu(a,l){a.F=Date.now(),os(a),a.A=dt(a.v);var d=a.A,p=a.R;Array.isArray(p)||(p=[String(p)]),ul(d.i,"t",p),a.C=0,d=a.j.J,a.h=new Wu,a.g=Pl(a.j,d?l:null,!a.m),0<a.O&&(a.M=new pg(g(a.Y,a,a.g),a.O)),l=a.U,d=a.g,p=a.ca;var A="readystatechange";Array.isArray(A)||(A&&(Fu[0]=A.toString()),A=Fu);for(var P=0;P<A.length;P++){var x=ku(d,A[P],p||l.handleEvent,!1,l.h||l);if(!x)break;l.g[x.key]=x}l=a.H?_(a.H):{},a.m?(a.u||(a.u="POST"),l["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,l)):(a.u="GET",a.g.ea(a.A,a.u,null,l)),Ur(),_g(a.i,a.u,a.A,a.l,a.R,a.m)}Ct.prototype.ca=function(a){a=a.target;const l=this.M;l&&ft(a)==3?l.j():this.Y(a)},Ct.prototype.Y=function(a){try{if(a==this.g)e:{const Se=ft(this.g);var l=this.g.Ba();const zn=this.g.Z();if(!(3>Se)&&(Se!=3||this.g&&(this.h.h||this.g.oa()||gl(this.g)))){this.J||Se!=4||l==7||(l==8||0>=zn?Ur(3):Ur(2)),la(this);var d=this.g.Z();this.X=d;t:if(Xu(this)){var p=gl(this.g);a="";var A=p.length,P=ft(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ln(this),qr(this);var x="";break t}this.h.i=new c.TextDecoder}for(l=0;l<A;l++)this.h.h=!0,a+=this.h.i.decode(p[l],{stream:!(P&&l==A-1)});p.length=0,this.h.g+=a,this.C=0,x=this.h.g}else x=this.g.oa();if(this.o=d==200,yg(this.i,this.u,this.A,this.l,this.R,Se,d),this.o){if(this.T&&!this.K){t:{if(this.g){var ie,ve=this.g;if((ie=ve.g?ve.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!j(ie)){var Z=ie;break t}}Z=null}if(d=Z)jn(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ha(this,d);else{this.o=!1,this.s=3,xe(12),ln(this),qr(this);break e}}if(this.P){d=!0;let He;for(;!this.J&&this.C<x.length;)if(He=Tg(this,x),He==ca){Se==4&&(this.s=4,xe(14),d=!1),jn(this.i,this.l,null,"[Incomplete Response]");break}else if(He==Hu){this.s=4,xe(15),jn(this.i,this.l,x,"[Invalid Chunk]"),d=!1;break}else jn(this.i,this.l,He,null),ha(this,He);if(Xu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Se!=4||x.length!=0||this.h.h||(this.s=1,xe(16),d=!1),this.o=this.o&&d,!d)jn(this.i,this.l,x,"[Invalid Chunked Response]"),ln(this),qr(this);else if(0<x.length&&!this.W){this.W=!0;var Pe=this.j;Pe.g==this&&Pe.ba&&!Pe.M&&(Pe.j.info("Great, no buffering proxy detected. Bytes received: "+x.length),_a(Pe),Pe.M=!0,xe(11))}}else jn(this.i,this.l,x,null),ha(this,x);Se==4&&ln(this),this.o&&!this.J&&(Se==4?wl(this.j,this):(this.o=!1,os(this)))}else Fg(this.g),d==400&&0<x.indexOf("Unknown SID")?(this.s=3,xe(12)):(this.s=0,xe(13)),ln(this),qr(this)}}}catch{}finally{}};function Xu(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function Tg(a,l){var d=a.C,p=l.indexOf(`
`,d);return p==-1?ca:(d=Number(l.substring(d,p)),isNaN(d)?Hu:(p+=1,p+d>l.length?ca:(l=l.slice(p,p+d),a.C=p+d,l)))}Ct.prototype.cancel=function(){this.J=!0,ln(this)};function os(a){a.S=Date.now()+a.I,Ju(a,a.I)}function Ju(a,l){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Br(g(a.ba,a),l)}function la(a){a.B&&(c.clearTimeout(a.B),a.B=null)}Ct.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(Ig(this.i,this.A),this.L!=2&&(Ur(),xe(17)),ln(this),this.s=2,qr(this)):Ju(this,this.S-a)};function qr(a){a.j.G==0||a.J||wl(a.j,a)}function ln(a){la(a);var l=a.M;l&&typeof l.ma=="function"&&l.ma(),a.M=null,Uu(a.U),a.g&&(l=a.g,a.g=null,l.abort(),l.ma())}function ha(a,l){try{var d=a.j;if(d.G!=0&&(d.g==a||da(d.h,a))){if(!a.K&&da(d.h,a)&&d.G==3){try{var p=d.Da.g.parse(l)}catch{p=null}if(Array.isArray(p)&&p.length==3){var A=p;if(A[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)ms(d),fs(d);else break e;ga(d),xe(18)}}else d.za=A[1],0<d.za-d.T&&37500>A[2]&&d.F&&d.v==0&&!d.C&&(d.C=Br(g(d.Za,d),6e3));if(1>=el(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else dn(d,11)}else if((a.K||d.g==a)&&ms(d),!j(l))for(A=d.Da.g.parse(l),l=0;l<A.length;l++){let Z=A[l];if(d.T=Z[0],Z=Z[1],d.G==2)if(Z[0]=="c"){d.K=Z[1],d.ia=Z[2];const Pe=Z[3];Pe!=null&&(d.la=Pe,d.j.info("VER="+d.la));const Se=Z[4];Se!=null&&(d.Aa=Se,d.j.info("SVER="+d.Aa));const zn=Z[5];zn!=null&&typeof zn=="number"&&0<zn&&(p=1.5*zn,d.L=p,d.j.info("backChannelRequestTimeoutMs_="+p)),p=d;const He=a.g;if(He){const _s=He.g?He.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(_s){var P=p.h;P.g||_s.indexOf("spdy")==-1&&_s.indexOf("quic")==-1&&_s.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(fa(P,P.h),P.h=null))}if(p.D){const ya=He.g?He.g.getResponseHeader("X-HTTP-Session-Id"):null;ya&&(p.ya=ya,oe(p.I,p.D,ya))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),p=d;var x=a;if(p.qa=bl(p,p.J?p.ia:null,p.W),x.K){tl(p.h,x);var ie=x,ve=p.L;ve&&(ie.I=ve),ie.B&&(la(ie),os(ie)),p.g=x}else Tl(p);0<d.i.length&&ps(d)}else Z[0]!="stop"&&Z[0]!="close"||dn(d,7);else d.G==3&&(Z[0]=="stop"||Z[0]=="close"?Z[0]=="stop"?dn(d,7):ma(d):Z[0]!="noop"&&d.l&&d.l.ta(Z),d.v=0)}}Ur(4)}catch{}}var vg=class{constructor(a,l){this.g=a,this.map=l}};function Yu(a){this.l=a||10,c.PerformanceNavigationTiming?(a=c.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Zu(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function el(a){return a.h?1:a.g?a.g.size:0}function da(a,l){return a.h?a.h==l:a.g?a.g.has(l):!1}function fa(a,l){a.g?a.g.add(l):a.h=l}function tl(a,l){a.h&&a.h==l?a.h=null:a.g&&a.g.has(l)&&a.g.delete(l)}Yu.prototype.cancel=function(){if(this.i=nl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function nl(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let l=a.i;for(const d of a.g.values())l=l.concat(d.D);return l}return k(a.i)}function wg(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var l=[],d=a.length,p=0;p<d;p++)l.push(a[p]);return l}l=[],d=0;for(p in a)l[d++]=a[p];return l}function Ag(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var l=[];a=a.length;for(var d=0;d<a;d++)l.push(d);return l}l=[],d=0;for(const p in a)l[d++]=p;return l}}}function rl(a,l){if(a.forEach&&typeof a.forEach=="function")a.forEach(l,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,l,void 0);else for(var d=Ag(a),p=wg(a),A=p.length,P=0;P<A;P++)l.call(void 0,p[P],d&&d[P],a)}var il=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Rg(a,l){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var p=a[d].indexOf("="),A=null;if(0<=p){var P=a[d].substring(0,p);A=a[d].substring(p+1)}else P=a[d];l(P,A?decodeURIComponent(A.replace(/\+/g," ")):"")}}}function hn(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof hn){this.h=a.h,as(this,a.j),this.o=a.o,this.g=a.g,cs(this,a.s),this.l=a.l;var l=a.i,d=new Kr;d.i=l.i,l.g&&(d.g=new Map(l.g),d.h=l.h),sl(this,d),this.m=a.m}else a&&(l=String(a).match(il))?(this.h=!1,as(this,l[1]||"",!0),this.o=$r(l[2]||""),this.g=$r(l[3]||"",!0),cs(this,l[4]),this.l=$r(l[5]||"",!0),sl(this,l[6]||"",!0),this.m=$r(l[7]||"")):(this.h=!1,this.i=new Kr(null,this.h))}hn.prototype.toString=function(){var a=[],l=this.j;l&&a.push(zr(l,ol,!0),":");var d=this.g;return(d||l=="file")&&(a.push("//"),(l=this.o)&&a.push(zr(l,ol,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(zr(d,d.charAt(0)=="/"?Sg:Pg,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",zr(d,Vg)),a.join("")};function dt(a){return new hn(a)}function as(a,l,d){a.j=d?$r(l,!0):l,a.j&&(a.j=a.j.replace(/:$/,""))}function cs(a,l){if(l){if(l=Number(l),isNaN(l)||0>l)throw Error("Bad port number "+l);a.s=l}else a.s=null}function sl(a,l,d){l instanceof Kr?(a.i=l,Dg(a.i,a.h)):(d||(l=zr(l,Cg)),a.i=new Kr(l,a.h))}function oe(a,l,d){a.i.set(l,d)}function us(a){return oe(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function $r(a,l){return a?l?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function zr(a,l,d){return typeof a=="string"?(a=encodeURI(a).replace(l,bg),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function bg(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var ol=/[#\/\?@]/g,Pg=/[#\?:]/g,Sg=/[#\?]/g,Cg=/[#\?@]/g,Vg=/#/g;function Kr(a,l){this.h=this.g=null,this.i=a||null,this.j=!!l}function Vt(a){a.g||(a.g=new Map,a.h=0,a.i&&Rg(a.i,function(l,d){a.add(decodeURIComponent(l.replace(/\+/g," ")),d)}))}r=Kr.prototype,r.add=function(a,l){Vt(this),this.i=null,a=qn(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(l),this.h+=1,this};function al(a,l){Vt(a),l=qn(a,l),a.g.has(l)&&(a.i=null,a.h-=a.g.get(l).length,a.g.delete(l))}function cl(a,l){return Vt(a),l=qn(a,l),a.g.has(l)}r.forEach=function(a,l){Vt(this),this.g.forEach(function(d,p){d.forEach(function(A){a.call(l,A,p,this)},this)},this)},r.na=function(){Vt(this);const a=Array.from(this.g.values()),l=Array.from(this.g.keys()),d=[];for(let p=0;p<l.length;p++){const A=a[p];for(let P=0;P<A.length;P++)d.push(l[p])}return d},r.V=function(a){Vt(this);let l=[];if(typeof a=="string")cl(this,a)&&(l=l.concat(this.g.get(qn(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)l=l.concat(a[d])}return l},r.set=function(a,l){return Vt(this),this.i=null,a=qn(this,a),cl(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[l]),this.h+=1,this},r.get=function(a,l){return a?(a=this.V(a),0<a.length?String(a[0]):l):l};function ul(a,l,d){al(a,l),0<d.length&&(a.i=null,a.g.set(qn(a,l),k(d)),a.h+=d.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],l=Array.from(this.g.keys());for(var d=0;d<l.length;d++){var p=l[d];const P=encodeURIComponent(String(p)),x=this.V(p);for(p=0;p<x.length;p++){var A=P;x[p]!==""&&(A+="="+encodeURIComponent(String(x[p]))),a.push(A)}}return this.i=a.join("&")};function qn(a,l){return l=String(l),a.j&&(l=l.toLowerCase()),l}function Dg(a,l){l&&!a.j&&(Vt(a),a.i=null,a.g.forEach(function(d,p){var A=p.toLowerCase();p!=A&&(al(this,p),ul(this,A,d))},a)),a.j=l}function kg(a,l){const d=new jr;if(c.Image){const p=new Image;p.onload=b(Dt,d,"TestLoadImage: loaded",!0,l,p),p.onerror=b(Dt,d,"TestLoadImage: error",!1,l,p),p.onabort=b(Dt,d,"TestLoadImage: abort",!1,l,p),p.ontimeout=b(Dt,d,"TestLoadImage: timeout",!1,l,p),c.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=a}else l(!1)}function Ng(a,l){const d=new jr,p=new AbortController,A=setTimeout(()=>{p.abort(),Dt(d,"TestPingServer: timeout",!1,l)},1e4);fetch(a,{signal:p.signal}).then(P=>{clearTimeout(A),P.ok?Dt(d,"TestPingServer: ok",!0,l):Dt(d,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(A),Dt(d,"TestPingServer: error",!1,l)})}function Dt(a,l,d,p,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),p(d)}catch{}}function xg(){this.g=new gg}function Og(a,l,d){const p=d||"";try{rl(a,function(A,P){let x=A;h(A)&&(x=ra(A)),l.push(p+P+"="+encodeURIComponent(x))})}catch(A){throw l.push(p+"type="+encodeURIComponent("_badmap")),A}}function ls(a){this.l=a.Ub||null,this.j=a.eb||!1}C(ls,ia),ls.prototype.g=function(){return new hs(this.l,this.j)},ls.prototype.i=(function(a){return function(){return a}})({});function hs(a,l){be.call(this),this.D=a,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(hs,be),r=hs.prototype,r.open=function(a,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=l,this.readyState=1,Wr(this)},r.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const l={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(l.body=a),(this.D||c).fetch(new Request(this.A,l)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Gr(this)),this.readyState=0},r.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Wr(this)),this.g&&(this.readyState=3,Wr(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ll(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function ll(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}r.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var l=a.value?a.value:new Uint8Array(0);(l=this.v.decode(l,{stream:!a.done}))&&(this.response=this.responseText+=l)}a.done?Gr(this):Wr(this),this.readyState==3&&ll(this)}},r.Ra=function(a){this.g&&(this.response=this.responseText=a,Gr(this))},r.Qa=function(a){this.g&&(this.response=a,Gr(this))},r.ga=function(){this.g&&Gr(this)};function Gr(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Wr(a)}r.setRequestHeader=function(a,l){this.u.append(a,l)},r.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],l=this.h.entries();for(var d=l.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=l.next();return a.join(`\r
`)};function Wr(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(hs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function hl(a){let l="";return G(a,function(d,p){l+=p,l+=":",l+=d,l+=`\r
`}),l}function pa(a,l,d){e:{for(p in d){var p=!1;break e}p=!0}p||(d=hl(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):oe(a,l,d))}function de(a){be.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(de,be);var Mg=/^https?$/i,Lg=["POST","PUT"];r=de.prototype,r.Ha=function(a){this.J=a},r.ea=function(a,l,d,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);l=l?l.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():aa.g(),this.v=this.o?Bu(this.o):Bu(aa),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(l,String(a),!0),this.B=!1}catch(P){dl(this,P);return}if(a=d||"",d=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var A in p)d.set(A,p[A]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const P of p.keys())d.set(P,p.get(P));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(d.keys()).find(P=>P.toLowerCase()=="content-type"),A=c.FormData&&a instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Lg,l,void 0))||p||A||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,x]of d)this.g.setRequestHeader(P,x);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ml(this),this.u=!0,this.g.send(a),this.u=!1}catch(P){dl(this,P)}};function dl(a,l){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=l,a.m=5,fl(a),ds(a)}function fl(a){a.A||(a.A=!0,Ne(a,"complete"),Ne(a,"error"))}r.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,Ne(this,"complete"),Ne(this,"abort"),ds(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ds(this,!0)),de.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?pl(this):this.bb())},r.bb=function(){pl(this)};function pl(a){if(a.h&&typeof o<"u"&&(!a.v[1]||ft(a)!=4||a.Z()!=2)){if(a.u&&ft(a)==4)Mu(a.Ea,0,a);else if(Ne(a,"readystatechange"),ft(a)==4){a.h=!1;try{const x=a.Z();e:switch(x){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var d;if(!(d=l)){var p;if(p=x===0){var A=String(a.D).match(il)[1]||null;!A&&c.self&&c.self.location&&(A=c.self.location.protocol.slice(0,-1)),p=!Mg.test(A?A.toLowerCase():"")}d=p}if(d)Ne(a,"complete"),Ne(a,"success");else{a.m=6;try{var P=2<ft(a)?a.g.statusText:""}catch{P=""}a.l=P+" ["+a.Z()+"]",fl(a)}}finally{ds(a)}}}}function ds(a,l){if(a.g){ml(a);const d=a.g,p=a.v[0]?()=>{}:null;a.g=null,a.v=null,l||Ne(a,"ready");try{d.onreadystatechange=p}catch{}}}function ml(a){a.I&&(c.clearTimeout(a.I),a.I=null)}r.isActive=function(){return!!this.g};function ft(a){return a.g?a.g.readyState:0}r.Z=function(){try{return 2<ft(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(a){if(this.g){var l=this.g.responseText;return a&&l.indexOf(a)==0&&(l=l.substring(a.length)),mg(l)}};function gl(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Fg(a){const l={};a=(a.g&&2<=ft(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<a.length;p++){if(j(a[p]))continue;var d=v(a[p]);const A=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const P=l[A]||[];l[A]=P,P.push(d)}E(l,function(p){return p.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Hr(a,l,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||l}function _l(a){this.Aa=0,this.i=[],this.j=new jr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Hr("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Hr("baseRetryDelayMs",5e3,a),this.cb=Hr("retryDelaySeedMs",1e4,a),this.Wa=Hr("forwardChannelMaxRetries",2,a),this.wa=Hr("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Yu(a&&a.concurrentRequestLimit),this.Da=new xg,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=_l.prototype,r.la=8,r.G=1,r.connect=function(a,l,d,p){xe(0),this.W=a,this.H=l||{},d&&p!==void 0&&(this.H.OSID=d,this.H.OAID=p),this.F=this.X,this.I=bl(this,null,this.W),ps(this)};function ma(a){if(yl(a),a.G==3){var l=a.U++,d=dt(a.I);if(oe(d,"SID",a.K),oe(d,"RID",l),oe(d,"TYPE","terminate"),Qr(a,d),l=new Ct(a,a.j,l),l.L=2,l.v=us(dt(d)),d=!1,c.navigator&&c.navigator.sendBeacon)try{d=c.navigator.sendBeacon(l.v.toString(),"")}catch{}!d&&c.Image&&(new Image().src=l.v,d=!0),d||(l.g=Pl(l.j,null),l.g.ea(l.v)),l.F=Date.now(),os(l)}Rl(a)}function fs(a){a.g&&(_a(a),a.g.cancel(),a.g=null)}function yl(a){fs(a),a.u&&(c.clearTimeout(a.u),a.u=null),ms(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&c.clearTimeout(a.s),a.s=null)}function ps(a){if(!Zu(a.h)&&!a.s){a.s=!0;var l=a.Ga;xr||Du(),Or||(xr(),Or=!0),Qo.add(l,a),a.B=0}}function Ug(a,l){return el(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=l.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Br(g(a.Ga,a,l),Al(a,a.B)),a.B++,!0)}r.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const A=new Ct(this,this.j,a);let P=this.o;if(this.S&&(P?(P=_(P),T(P,this.S)):P=this.S),this.m!==null||this.O||(A.H=P,P=null),this.P)e:{for(var l=0,d=0;d<this.i.length;d++){t:{var p=this.i[d];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(l+=p,4096<l){l=d;break e}if(l===4096||d===this.i.length-1){l=d+1;break e}}l=1e3}else l=1e3;l=El(this,A,l),d=dt(this.I),oe(d,"RID",a),oe(d,"CVER",22),this.D&&oe(d,"X-HTTP-Session-Id",this.D),Qr(this,d),P&&(this.O?l="headers="+encodeURIComponent(String(hl(P)))+"&"+l:this.m&&pa(d,this.m,P)),fa(this.h,A),this.Ua&&oe(d,"TYPE","init"),this.P?(oe(d,"$req",l),oe(d,"SID","null"),A.T=!0,ua(A,d,null)):ua(A,d,l),this.G=2}}else this.G==3&&(a?Il(this,a):this.i.length==0||Zu(this.h)||Il(this))};function Il(a,l){var d;l?d=l.l:d=a.U++;const p=dt(a.I);oe(p,"SID",a.K),oe(p,"RID",d),oe(p,"AID",a.T),Qr(a,p),a.m&&a.o&&pa(p,a.m,a.o),d=new Ct(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),l&&(a.i=l.D.concat(a.i)),l=El(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),fa(a.h,d),ua(d,p,l)}function Qr(a,l){a.H&&G(a.H,function(d,p){oe(l,p,d)}),a.l&&rl({},function(d,p){oe(l,p,d)})}function El(a,l,d){d=Math.min(a.i.length,d);var p=a.l?g(a.l.Na,a.l,a):null;e:{var A=a.i;let P=-1;for(;;){const x=["count="+d];P==-1?0<d?(P=A[0].g,x.push("ofs="+P)):P=0:x.push("ofs="+P);let ie=!0;for(let ve=0;ve<d;ve++){let Z=A[ve].g;const Pe=A[ve].map;if(Z-=P,0>Z)P=Math.max(0,A[ve].g-100),ie=!1;else try{Og(Pe,x,"req"+Z+"_")}catch{p&&p(Pe)}}if(ie){p=x.join("&");break e}}}return a=a.i.splice(0,d),l.D=a,p}function Tl(a){if(!a.g&&!a.u){a.Y=1;var l=a.Fa;xr||Du(),Or||(xr(),Or=!0),Qo.add(l,a),a.v=0}}function ga(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Br(g(a.Fa,a),Al(a,a.v)),a.v++,!0)}r.Fa=function(){if(this.u=null,vl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Br(g(this.ab,this),a)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,xe(10),fs(this),vl(this))};function _a(a){a.A!=null&&(c.clearTimeout(a.A),a.A=null)}function vl(a){a.g=new Ct(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var l=dt(a.qa);oe(l,"RID","rpc"),oe(l,"SID",a.K),oe(l,"AID",a.T),oe(l,"CI",a.F?"0":"1"),!a.F&&a.ja&&oe(l,"TO",a.ja),oe(l,"TYPE","xmlhttp"),Qr(a,l),a.m&&a.o&&pa(l,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=us(dt(l)),d.m=null,d.P=!0,Qu(d,a)}r.Za=function(){this.C!=null&&(this.C=null,fs(this),ga(this),xe(19))};function ms(a){a.C!=null&&(c.clearTimeout(a.C),a.C=null)}function wl(a,l){var d=null;if(a.g==l){ms(a),_a(a),a.g=null;var p=2}else if(da(a.h,l))d=l.D,tl(a.h,l),p=1;else return;if(a.G!=0){if(l.o)if(p==1){d=l.m?l.m.length:0,l=Date.now()-l.F;var A=a.B;p=rs(),Ne(p,new Ku(p,d)),ps(a)}else Tl(a);else if(A=l.s,A==3||A==0&&0<l.X||!(p==1&&Ug(a,l)||p==2&&ga(a)))switch(d&&0<d.length&&(l=a.h,l.i=l.i.concat(d)),A){case 1:dn(a,5);break;case 4:dn(a,10);break;case 3:dn(a,6);break;default:dn(a,2)}}}function Al(a,l){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*l}function dn(a,l){if(a.j.info("Error code "+l),l==2){var d=g(a.fb,a),p=a.Xa;const A=!p;p=new hn(p||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||as(p,"https"),us(p),A?kg(p.toString(),d):Ng(p.toString(),d)}else xe(2);a.G=0,a.l&&a.l.sa(l),Rl(a),yl(a)}r.fb=function(a){a?(this.j.info("Successfully pinged google.com"),xe(2)):(this.j.info("Failed to ping google.com"),xe(1))};function Rl(a){if(a.G=0,a.ka=[],a.l){const l=nl(a.h);(l.length!=0||a.i.length!=0)&&(V(a.ka,l),V(a.ka,a.i),a.h.i.length=0,k(a.i),a.i.length=0),a.l.ra()}}function bl(a,l,d){var p=d instanceof hn?dt(d):new hn(d);if(p.g!="")l&&(p.g=l+"."+p.g),cs(p,p.s);else{var A=c.location;p=A.protocol,l=l?l+"."+A.hostname:A.hostname,A=+A.port;var P=new hn(null);p&&as(P,p),l&&(P.g=l),A&&cs(P,A),d&&(P.l=d),p=P}return d=a.D,l=a.ya,d&&l&&oe(p,d,l),oe(p,"VER",a.la),Qr(a,p),p}function Pl(a,l,d){if(l&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return l=a.Ca&&!a.pa?new de(new ls({eb:d})):new de(a.pa),l.Ha(a.J),l}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Sl(){}r=Sl.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function gs(){}gs.prototype.g=function(a,l){return new Fe(a,l)};function Fe(a,l){be.call(this),this.g=new _l(l),this.l=a,this.h=l&&l.messageUrlParams||null,a=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(a?a["X-WebChannel-Content-Type"]=l.messageContentType:a={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.va&&(a?a["X-WebChannel-Client-Profile"]=l.va:a={"X-WebChannel-Client-Profile":l.va}),this.g.S=a,(a=l&&l.Sb)&&!j(a)&&(this.g.m=a),this.v=l&&l.supportsCrossDomainXhr||!1,this.u=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!j(l)&&(this.g.D=l,a=this.h,a!==null&&l in a&&(a=this.h,l in a&&delete a[l])),this.j=new $n(this)}C(Fe,be),Fe.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Fe.prototype.close=function(){ma(this.g)},Fe.prototype.o=function(a){var l=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=ra(a),a=d);l.i.push(new vg(l.Ya++,a)),l.G==3&&ps(l)},Fe.prototype.N=function(){this.g.l=null,delete this.j,ma(this.g),delete this.g,Fe.aa.N.call(this)};function Cl(a){sa.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var l=a.__sm__;if(l){e:{for(const d in l){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,l=l!==null&&a in l?l[a]:void 0),this.data=l}else this.data=a}C(Cl,sa);function Vl(){oa.call(this),this.status=1}C(Vl,oa);function $n(a){this.g=a}C($n,Sl),$n.prototype.ua=function(){Ne(this.g,"a")},$n.prototype.ta=function(a){Ne(this.g,new Cl(a))},$n.prototype.sa=function(a){Ne(this.g,new Vl)},$n.prototype.ra=function(){Ne(this.g,"b")},gs.prototype.createWebChannel=gs.prototype.g,Fe.prototype.send=Fe.prototype.o,Fe.prototype.open=Fe.prototype.m,Fe.prototype.close=Fe.prototype.close,Bf=function(){return new gs},Uf=function(){return rs()},Ff=un,$a={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},is.NO_ERROR=0,is.TIMEOUT=8,is.HTTP_ERROR=6,Ds=is,Gu.COMPLETE="complete",Lf=Gu,ju.EventType=Fr,Fr.OPEN="a",Fr.CLOSE="b",Fr.ERROR="c",Fr.MESSAGE="d",be.prototype.listen=be.prototype.K,ri=ju,de.prototype.listenOnce=de.prototype.L,de.prototype.getLastError=de.prototype.Ka,de.prototype.getLastErrorCode=de.prototype.Ba,de.prototype.getStatus=de.prototype.Z,de.prototype.getResponseJson=de.prototype.Oa,de.prototype.getResponseText=de.prototype.oa,de.prototype.send=de.prototype.ea,de.prototype.setWithCredentials=de.prototype.Ha,Mf=de}).apply(typeof Is<"u"?Is:typeof self<"u"?self:typeof window<"u"?window:{});const ch="@firebase/firestore",uh="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ve.UNAUTHENTICATED=new Ve(null),Ve.GOOGLE_CREDENTIALS=new Ve("google-credentials-uid"),Ve.FIRST_PARTY=new Ve("first-party-uid"),Ve.MOCK_USER=new Ve("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rr="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vn=new yc("@firebase/firestore");function Jn(){return Vn.logLevel}function D(r,...e){if(Vn.logLevel<=H.DEBUG){const t=e.map(Dc);Vn.debug(`Firestore (${Rr}): ${r}`,...t)}}function fe(r,...e){if(Vn.logLevel<=H.ERROR){const t=e.map(Dc);Vn.error(`Firestore (${Rr}): ${r}`,...t)}}function Jt(r,...e){if(Vn.logLevel<=H.WARN){const t=e.map(Dc);Vn.warn(`Firestore (${Rr}): ${r}`,...t)}}function Dc(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(t){return JSON.stringify(t)})(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(r,e,t){let n="Unexpected state";typeof e=="string"?n=e:t=e,jf(r,n,t)}function jf(r,e,t){let n=`FIRESTORE (${Rr}) INTERNAL ASSERTION FAILED: ${e} (ID: ${r.toString(16)})`;if(t!==void 0)try{n+=" CONTEXT: "+JSON.stringify(t)}catch{n+=" CONTEXT: "+t}throw fe(n),new Error(n)}function U(r,e,t,n){let i="Unexpected state";typeof t=="string"?i=t:n=t,r||jf(e,i,n)}function F(r,e){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class N extends ut{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NE{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class xE{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Ve.UNAUTHENTICATED)))}shutdown(){}}class OE{constructor(e){this.t=e,this.currentUser=Ve.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){U(this.o===void 0,42304);let n=this.i;const i=u=>this.i!==n?(n=this.i,t(u)):Promise.resolve();let s=new qe;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new qe,e.enqueueRetryable((()=>i(this.currentUser)))};const o=()=>{const u=s;e.enqueueRetryable((async()=>{await u.promise,await i(this.currentUser)}))},c=u=>{D("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((u=>c(u))),setTimeout((()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?c(u):(D("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new qe)}}),0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((n=>this.i!==e?(D("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(U(typeof n.accessToken=="string",31837,{l:n}),new NE(n.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return U(e===null||typeof e=="string",2055,{h:e}),new Ve(e)}}class ME{constructor(e,t,n){this.P=e,this.T=t,this.I=n,this.type="FirstParty",this.user=Ve.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class LE{constructor(e,t,n){this.P=e,this.T=t,this.I=n}getToken(){return Promise.resolve(new ME(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Ve.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class lh{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class FE{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Oe(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){U(this.o===void 0,3512);const n=s=>{s.error!=null&&D("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,D("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable((()=>n(s)))};const i=s=>{D("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((s=>i(s))),setTimeout((()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):D("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new lh(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(U(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new lh(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UE(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let n=0;n<r;n++)t[n]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qf(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let n="";for(;n.length<20;){const i=UE(40);for(let s=0;s<i.length;++s)n.length<20&&i[s]<t&&(n+=e.charAt(i[s]%62))}return n}}function z(r,e){return r<e?-1:r>e?1:0}function za(r,e){let t=0;for(;t<r.length&&t<e.length;){const n=r.codePointAt(t),i=e.codePointAt(t);if(n!==i){if(n<128&&i<128)return z(n,i);{const s=qf(),o=BE(s.encode(hh(r,t)),s.encode(hh(e,t)));return o!==0?o:z(n,i)}}t+=n>65535?2:1}return z(r.length,e.length)}function hh(r,e){return r.codePointAt(e)>65535?r.substring(e,e+2):r.substring(e,e+1)}function BE(r,e){for(let t=0;t<r.length&&t<e.length;++t)if(r[t]!==e[t])return z(r[t],e[t]);return z(r.length,e.length)}function or(r,e,t){return r.length===e.length&&r.every(((n,i)=>t(n,e[i])))}function $f(r){return r+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ka="__name__";class Ze{constructor(e,t,n){t===void 0?t=0:t>e.length&&M(637,{offset:t,range:e.length}),n===void 0?n=e.length-t:n>e.length-t&&M(1746,{length:n,range:e.length-t}),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return Ze.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ze?e.forEach((n=>{t.push(n)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let i=0;i<n;i++){const s=Ze.compareSegments(e.get(i),t.get(i));if(s!==0)return s}return z(e.length,t.length)}static compareSegments(e,t){const n=Ze.isNumericId(e),i=Ze.isNumericId(t);return n&&!i?-1:!n&&i?1:n&&i?Ze.extractNumericId(e).compare(Ze.extractNumericId(t)):za(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Gt.fromString(e.substring(4,e.length-2))}}class Y extends Ze{construct(e,t,n){return new Y(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new N(S.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((i=>i.length>0)))}return new Y(t)}static emptyPath(){return new Y([])}}const jE=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class he extends Ze{construct(e,t,n){return new he(e,t,n)}static isValidIdentifier(e){return jE.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),he.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Ka}static keyField(){return new he([Ka])}static fromServerFormat(e){const t=[];let n="",i=0;const s=()=>{if(n.length===0)throw new N(S.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let o=!1;for(;i<e.length;){const c=e[i];if(c==="\\"){if(i+1===e.length)throw new N(S.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new N(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=u,i+=2}else c==="`"?(o=!o,i++):c!=="."||o?(n+=c,i++):(s(),i++)}if(s(),o)throw new N(S.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new he(t)}static emptyPath(){return new he([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(e){this.path=e}static fromPath(e){return new O(Y.fromString(e))}static fromName(e){return new O(Y.fromString(e).popFirst(5))}static empty(){return new O(Y.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Y.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Y.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new O(new Y(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zf(r,e,t){if(!t)throw new N(S.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function qE(r,e,t,n){if(e===!0&&n===!0)throw new N(S.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function dh(r){if(!O.isDocumentKey(r))throw new N(S.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function fh(r){if(O.isDocumentKey(r))throw new N(S.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function Kf(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function Po(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=(function(n){return n.constructor?n.constructor.name:null})(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":M(12329,{type:typeof r})}function _e(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new N(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Po(r);throw new N(S.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ge(r,e){const t={typeString:r};return e&&(t.value=e),t}function Bi(r,e){if(!Kf(r))throw new N(S.INVALID_ARGUMENT,"JSON must be an object");let t;for(const n in e)if(e[n]){const i=e[n].typeString,s="value"in e[n]?{value:e[n].value}:void 0;if(!(n in r)){t=`JSON missing required field: '${n}'`;break}const o=r[n];if(i&&typeof o!==i){t=`JSON field '${n}' must be a ${i}.`;break}if(s!==void 0&&o!==s.value){t=`Expected '${n}' field to equal '${s.value}'`;break}}if(t)throw new N(S.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ph=-62135596800,mh=1e6;class te{static now(){return te.fromMillis(Date.now())}static fromDate(e){return te.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor((e-1e3*t)*mh);return new te(t,n)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new N(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new N(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<ph)throw new N(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new N(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/mh}_compareTo(e){return this.seconds===e.seconds?z(this.nanoseconds,e.nanoseconds):z(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:te._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Bi(e,te._jsonSchema))return new te(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-ph;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}te._jsonSchemaVersion="firestore/timestamp/1.0",te._jsonSchema={type:ge("string",te._jsonSchemaVersion),seconds:ge("number"),nanoseconds:ge("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{static fromTimestamp(e){return new B(e)}static min(){return new B(new te(0,0))}static max(){return new B(new te(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ar=-1;class Ys{constructor(e,t,n,i){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=i}}function Ga(r){return r.fields.find((e=>e.kind===2))}function mn(r){return r.fields.filter((e=>e.kind!==2))}Ys.UNKNOWN_ID=-1;class ks{constructor(e,t){this.fieldPath=e,this.kind=t}}class Ei{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new Ei(0,ze.min())}}function Gf(r,e){const t=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,i=B.fromTimestamp(n===1e9?new te(t+1,0):new te(t,n));return new ze(i,O.empty(),e)}function Wf(r){return new ze(r.readTime,r.key,ar)}class ze{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new ze(B.min(),O.empty(),ar)}static max(){return new ze(B.max(),O.empty(),ar)}}function Nc(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=O.comparator(r.documentKey,e.documentKey),t!==0?t:z(r.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hf="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Qf{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nn(r){if(r.code!==S.FAILED_PRECONDITION||r.message!==Hf)throw r;D("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&M(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new w(((n,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(n,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(n,i)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof w?t:w.resolve(t)}catch(t){return w.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):w.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):w.reject(t)}static resolve(e){return new w(((t,n)=>{t(e)}))}static reject(e){return new w(((t,n)=>{n(e)}))}static waitFor(e){return new w(((t,n)=>{let i=0,s=0,o=!1;e.forEach((c=>{++i,c.next((()=>{++s,o&&s===i&&t()}),(u=>n(u)))})),o=!0,s===i&&t()}))}static or(e){let t=w.resolve(!1);for(const n of e)t=t.next((i=>i?w.resolve(i):n()));return t}static forEach(e,t){const n=[];return e.forEach(((i,s)=>{n.push(t.call(this,i,s))})),this.waitFor(n)}static mapArray(e,t){return new w(((n,i)=>{const s=e.length,o=new Array(s);let c=0;for(let u=0;u<s;u++){const h=u;t(e[h]).next((f=>{o[h]=f,++c,c===s&&n(o)}),(f=>i(f)))}}))}static doWhile(e,t){return new w(((n,i)=>{const s=()=>{e()===!0?t().next((()=>{s()}),i):n()};s()}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ue="SimpleDb";class So{static open(e,t,n,i){try{return new So(t,e.transaction(i,n))}catch(s){throw new ui(t,s)}}constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.S=new qe,this.transaction.oncomplete=()=>{this.S.resolve()},this.transaction.onabort=()=>{t.error?this.S.reject(new ui(e,t.error)):this.S.resolve()},this.transaction.onerror=n=>{const i=xc(n.target.error);this.S.reject(new ui(e,i))}}get D(){return this.S.promise}abort(e){e&&this.S.reject(e),this.aborted||(D(Ue,"Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}v(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new zE(t)}}class Wt{static delete(e){return D(Ue,"Removing database:",e),_n(Fd().indexedDB.deleteDatabase(e)).toPromise()}static C(){if(!Gd())return!1;if(Wt.F())return!0;const e=ye(),t=Wt.M(e),n=0<t&&t<10,i=Xf(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||n||s)}static F(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.O)==="YES"}static N(e,t){return e.store(t)}static M(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(n)}constructor(e,t,n){this.name=e,this.version=t,this.B=n,this.L=null,Wt.M(ye())===12.2&&fe("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}async k(e){return this.db||(D(Ue,"Opening database:",this.name),this.db=await new Promise(((t,n)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;t(o)},i.onblocked=()=>{n(new ui(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?n(new N(S.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?n(new N(S.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):n(new ui(e,o))},i.onupgradeneeded=s=>{D(Ue,'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;if(this.L!==null&&this.L!==s.oldVersion)throw new Error(`refusing to open IndexedDB database due to potential corruption of the IndexedDB database data; this corruption could be caused by clicking the "clear site data" button in a web browser; try reloading the web page to re-initialize the IndexedDB database: lastClosedDbVersion=${this.L}, event.oldVersion=${s.oldVersion}, event.newVersion=${s.newVersion}, db.version=${o.version}`);this.B.q(o,i.transaction,s.oldVersion,this.version).next((()=>{D(Ue,"Database upgrade to version "+this.version+" complete")}))}})),this.db.addEventListener("close",(t=>{const n=t.target;this.L=n.version}),{passive:!0})),this.db.addEventListener("versionchange",(t=>{var n;t.newVersion===null&&(Jt('Received "versionchange" event with newVersion===null; notifying the registered DatabaseDeletedListener, if any'),(n=this.databaseDeletedListener)===null||n===void 0||n.call(this))}),{passive:!0}),this.db}setDatabaseDeletedListener(e){if(this.databaseDeletedListener)throw new Error("setDatabaseDeletedListener() may only be called once, and it has already been called");this.databaseDeletedListener=e}async runTransaction(e,t,n,i){const s=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.k(e);const c=So.open(this.db,e,s?"readonly":"readwrite",n),u=i(c).next((h=>(c.v(),h))).catch((h=>(c.abort(h),w.reject(h)))).toPromise();return u.catch((()=>{})),await c.D,u}catch(c){const u=c,h=u.name!=="FirebaseError"&&o<3;if(D(Ue,"Transaction failed with error:",u.message,"Retrying:",h),this.close(),!h)return Promise.reject(u)}}}close(){this.db&&this.db.close(),this.db=void 0}}function Xf(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}class $E{constructor(e){this.$=e,this.U=!1,this.K=null}get isDone(){return this.U}get W(){return this.K}set cursor(e){this.$=e}done(){this.U=!0}G(e){this.K=e}delete(){return _n(this.$.delete())}}class ui extends N{constructor(e,t){super(S.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function rn(r){return r.name==="IndexedDbTransactionError"}class zE{constructor(e){this.store=e}put(e,t){let n;return t!==void 0?(D(Ue,"PUT",this.store.name,e,t),n=this.store.put(t,e)):(D(Ue,"PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),_n(n)}add(e){return D(Ue,"ADD",this.store.name,e,e),_n(this.store.add(e))}get(e){return _n(this.store.get(e)).next((t=>(t===void 0&&(t=null),D(Ue,"GET",this.store.name,e,t),t)))}delete(e){return D(Ue,"DELETE",this.store.name,e),_n(this.store.delete(e))}count(){return D(Ue,"COUNT",this.store.name),_n(this.store.count())}j(e,t){const n=this.options(e,t),i=n.index?this.store.index(n.index):this.store;if(typeof i.getAll=="function"){const s=i.getAll(n.range);return new w(((o,c)=>{s.onerror=u=>{c(u.target.error)},s.onsuccess=u=>{o(u.target.result)}}))}{const s=this.cursor(n),o=[];return this.J(s,((c,u)=>{o.push(u)})).next((()=>o))}}H(e,t){const n=this.store.getAll(e,t===null?void 0:t);return new w(((i,s)=>{n.onerror=o=>{s(o.target.error)},n.onsuccess=o=>{i(o.target.result)}}))}Y(e,t){D(Ue,"DELETE ALL",this.store.name);const n=this.options(e,t);n.Z=!1;const i=this.cursor(n);return this.J(i,((s,o,c)=>c.delete()))}X(e,t){let n;t?n=e:(n={},t=e);const i=this.cursor(n);return this.J(i,t)}ee(e){const t=this.cursor({});return new w(((n,i)=>{t.onerror=s=>{const o=xc(s.target.error);i(o)},t.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next((c=>{c?o.continue():n()})):n()}}))}J(e,t){const n=[];return new w(((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const c=o.target.result;if(!c)return void i();const u=new $E(c),h=t(c.primaryKey,c.value,u);if(h instanceof w){const f=h.catch((m=>(u.done(),w.reject(m))));n.push(f)}u.isDone?i():u.W===null?c.continue():c.continue(u.W)}})).next((()=>w.waitFor(n)))}options(e,t){let n;return e!==void 0&&(typeof e=="string"?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const n=this.store.index(e.index);return e.Z?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function _n(r){return new w(((e,t)=>{r.onsuccess=n=>{const i=n.target.result;e(i)},r.onerror=n=>{const i=xc(n.target.error);t(i)}}))}let gh=!1;function xc(r){const e=Wt.M(ye());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(r.message.indexOf(t)>=0){const n=new N("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return gh||(gh=!0,setTimeout((()=>{throw n}),0)),n}}return r}const li="IndexBackfiller";class KE{constructor(e,t){this.asyncQueue=e,this.te=t,this.task=null}start(){this.ne(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}ne(e){D(li,`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,(async()=>{this.task=null;try{const t=await this.te.re();D(li,`Documents written: ${t}`)}catch(t){rn(t)?D(li,"Ignoring IndexedDB error during index backfill: ",t):await nn(t)}await this.ne(6e4)}))}}class GE{constructor(e,t){this.localStore=e,this.persistence=t}async re(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",(t=>this.ie(t,e)))}ie(e,t){const n=new Set;let i=t,s=!0;return w.doWhile((()=>s===!0&&i>0),(()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next((o=>{if(o!==null&&!n.has(o))return D(li,`Processing collection: ${o}`),this.se(e,o,i).next((c=>{i-=c,n.add(o)}));s=!1})))).next((()=>t-i))}se(e,t,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next((i=>this.localStore.localDocuments.getNextDocuments(e,t,i,n).next((s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next((()=>this.oe(i,s))).next((c=>(D(li,`Updating offset: ${c}`),this.localStore.indexManager.updateCollectionGroup(e,t,c)))).next((()=>o.size))}))))}oe(e,t){let n=e;return t.changes.forEach(((i,s)=>{const o=Wf(s);Nc(o,n)>0&&(n=o)})),new ze(n.readTime,n.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=n=>this._e(n),this.ae=n=>t.writeSequenceNumber(n))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}Me.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wn=-1;function ji(r){return r==null}function Ti(r){return r===0&&1/r==-1/0}function Jf(r){return typeof r=="number"&&Number.isInteger(r)&&!Ti(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zs="";function ke(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=_h(e)),e=WE(r.get(t),e);return _h(e)}function WE(r,e){let t=e;const n=r.length;for(let i=0;i<n;i++){const s=r.charAt(i);switch(s){case"\0":t+="";break;case Zs:t+="";break;default:t+=s}}return t}function _h(r){return r+Zs+""}function tt(r){const e=r.length;if(U(e>=2,64408,{path:r}),e===2)return U(r.charAt(0)===Zs&&r.charAt(1)==="",56145,{path:r}),Y.emptyPath();const t=e-2,n=[];let i="";for(let s=0;s<e;){const o=r.indexOf(Zs,s);switch((o<0||o>t)&&M(50515,{path:r}),r.charAt(o+1)){case"":const c=r.substring(s,o);let u;i.length===0?u=c:(i+=c,u=i,i=""),n.push(u);break;case"":i+=r.substring(s,o),i+="\0";break;case"":i+=r.substring(s,o+1);break;default:M(61167,{path:r})}s=o+2}return new Y(n)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gn="remoteDocuments",qi="owner",Kn="owner",vi="mutationQueues",HE="userId",Qe="mutations",yh="batchId",Tn="userMutationsIndex",Ih=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ns(r,e){return[r,ke(e)]}function Yf(r,e,t){return[r,ke(e),t]}const QE={},cr="documentMutations",eo="remoteDocumentsV14",XE=["prefixPath","collectionGroup","readTime","documentId"],xs="documentKeyIndex",JE=["prefixPath","collectionGroup","documentId"],Zf="collectionGroupIndex",YE=["collectionGroup","readTime","prefixPath","documentId"],wi="remoteDocumentGlobal",Wa="remoteDocumentGlobalKey",ur="targets",ep="queryTargetsIndex",ZE=["canonicalId","targetId"],lr="targetDocuments",eT=["targetId","path"],Oc="documentTargetsIndex",tT=["path","targetId"],to="targetGlobalKey",An="targetGlobal",Ai="collectionParents",nT=["collectionId","parent"],hr="clientMetadata",rT="clientId",Co="bundles",iT="bundleId",Vo="namedQueries",sT="name",Mc="indexConfiguration",oT="indexId",Ha="collectionGroupIndex",aT="collectionGroup",hi="indexState",cT=["indexId","uid"],tp="sequenceNumberIndex",uT=["uid","sequenceNumber"],di="indexEntries",lT=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],np="documentKeyIndex",hT=["indexId","uid","orderedDocumentKey"],Do="documentOverlays",dT=["userId","collectionPath","documentId"],Qa="collectionPathOverlayIndex",fT=["userId","collectionPath","largestBatchId"],rp="collectionGroupOverlayIndex",pT=["userId","collectionGroup","largestBatchId"],Lc="globals",mT="name",ip=[vi,Qe,cr,gn,ur,qi,An,lr,hr,wi,Ai,Co,Vo],gT=[...ip,Do],sp=[vi,Qe,cr,eo,ur,qi,An,lr,hr,wi,Ai,Co,Vo,Do],op=sp,Fc=[...op,Mc,hi,di],_T=Fc,ap=[...Fc,Lc],yT=ap;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa extends Qf{constructor(e,t){super(),this.ce=e,this.currentSequenceNumber=t}}function Ie(r,e){const t=F(r);return Wt.N(t.ce,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eh(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function sn(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function cp(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(e,t){this.comparator=e,this.root=t||we.EMPTY}insert(e,t){return new se(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,we.BLACK,null,null))}remove(e){return new se(this.comparator,this.root.remove(e,this.comparator).copy(null,null,we.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(n===0)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(i===0)return t+n.left.size;i<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Es(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Es(this.root,e,this.comparator,!1)}getReverseIterator(){return new Es(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Es(this.root,e,this.comparator,!0)}}class Es{constructor(e,t,n,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?n(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class we{constructor(e,t,n,i,s){this.key=e,this.value=t,this.color=n??we.RED,this.left=i??we.EMPTY,this.right=s??we.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,i,s){return new we(e??this.key,t??this.value,n??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const s=n(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,n),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return we.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return we.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,we.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,we.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw M(43730,{key:this.key,value:this.value});if(this.right.isRed())throw M(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw M(27949);return e+(this.isRed()?0:1)}}we.EMPTY=null,we.RED=!0,we.BLACK=!1;we.EMPTY=new class{constructor(){this.size=0}get key(){throw M(57766)}get value(){throw M(16141)}get color(){throw M(16727)}get left(){throw M(29726)}get right(){throw M(36894)}copy(e,t,n,i,s){return this}insert(e,t,n){return new we(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e){this.comparator=e,this.data=new se(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let n;for(n=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Th(this.data.getIterator())}getIteratorFrom(e){return new Th(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((n=>{t=t.add(n)})),t}isEqual(e){if(!(e instanceof re)||this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=n.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new re(this.comparator);return t.data=e,t}}class Th{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Gn(r){return r.hasNext()?r.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e){this.fields=e,e.sort(he.comparator)}static empty(){return new Le([])}unionWith(e){let t=new re(he.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new Le(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return or(this.fields,e.fields,((t,n)=>t.isEqual(n)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class up extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new up("Invalid base64 string: "+s):s}})(e);return new pe(t)}static fromUint8Array(e){const t=(function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s})(e);return new pe(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const n=new Uint8Array(t.length);for(let i=0;i<t.length;i++)n[i]=t.charCodeAt(i);return n})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return z(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}pe.EMPTY_BYTE_STRING=new pe("");const IT=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function vt(r){if(U(!!r,39018),typeof r=="string"){let e=0;const t=IT.exec(r);if(U(!!t,46558,{timestamp:r}),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:e}}return{seconds:ae(r.seconds),nanos:ae(r.nanos)}}function ae(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function wt(r){return typeof r=="string"?pe.fromBase64String(r):pe.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lp="server_timestamp",hp="__type__",dp="__previous_value__",fp="__local_write_time__";function Uc(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{})[hp])===null||t===void 0?void 0:t.stringValue)===lp}function ko(r){const e=r.mapValue.fields[dp];return Uc(e)?ko(e):e}function Ri(r){const e=vt(r.mapValue.fields[fp].timestampValue);return new te(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ET{constructor(e,t,n,i,s,o,c,u,h,f){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=u,this.useFetchStreams=h,this.isUsingEmulator=f}}const no="(default)";class Dn{constructor(e,t){this.projectId=e,this.database=t||no}static empty(){return new Dn("","")}get isDefaultDatabase(){return this.database===no}isEqual(e){return e instanceof Dn&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bc="__type__",pp="__max__",qt={mapValue:{fields:{__type__:{stringValue:pp}}}},jc="__vector__",dr="value",Os={nullValue:"NULL_VALUE"};function Yt(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Uc(r)?4:mp(r)?9007199254740991:No(r)?10:11:M(28295,{value:r})}function at(r,e){if(r===e)return!0;const t=Yt(r);if(t!==Yt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return Ri(r).isEqual(Ri(e));case 3:return(function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=vt(i.timestampValue),c=vt(s.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos})(r,e);case 5:return r.stringValue===e.stringValue;case 6:return(function(i,s){return wt(i.bytesValue).isEqual(wt(s.bytesValue))})(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return(function(i,s){return ae(i.geoPointValue.latitude)===ae(s.geoPointValue.latitude)&&ae(i.geoPointValue.longitude)===ae(s.geoPointValue.longitude)})(r,e);case 2:return(function(i,s){if("integerValue"in i&&"integerValue"in s)return ae(i.integerValue)===ae(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=ae(i.doubleValue),c=ae(s.doubleValue);return o===c?Ti(o)===Ti(c):isNaN(o)&&isNaN(c)}return!1})(r,e);case 9:return or(r.arrayValue.values||[],e.arrayValue.values||[],at);case 10:case 11:return(function(i,s){const o=i.mapValue.fields||{},c=s.mapValue.fields||{};if(Eh(o)!==Eh(c))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(c[u]===void 0||!at(o[u],c[u])))return!1;return!0})(r,e);default:return M(52216,{left:r})}}function bi(r,e){return(r.values||[]).find((t=>at(t,e)))!==void 0}function Zt(r,e){if(r===e)return 0;const t=Yt(r),n=Yt(e);if(t!==n)return z(t,n);switch(t){case 0:case 9007199254740991:return 0;case 1:return z(r.booleanValue,e.booleanValue);case 2:return(function(s,o){const c=ae(s.integerValue||s.doubleValue),u=ae(o.integerValue||o.doubleValue);return c<u?-1:c>u?1:c===u?0:isNaN(c)?isNaN(u)?0:-1:1})(r,e);case 3:return vh(r.timestampValue,e.timestampValue);case 4:return vh(Ri(r),Ri(e));case 5:return za(r.stringValue,e.stringValue);case 6:return(function(s,o){const c=wt(s),u=wt(o);return c.compareTo(u)})(r.bytesValue,e.bytesValue);case 7:return(function(s,o){const c=s.split("/"),u=o.split("/");for(let h=0;h<c.length&&h<u.length;h++){const f=z(c[h],u[h]);if(f!==0)return f}return z(c.length,u.length)})(r.referenceValue,e.referenceValue);case 8:return(function(s,o){const c=z(ae(s.latitude),ae(o.latitude));return c!==0?c:z(ae(s.longitude),ae(o.longitude))})(r.geoPointValue,e.geoPointValue);case 9:return wh(r.arrayValue,e.arrayValue);case 10:return(function(s,o){var c,u,h,f;const m=s.fields||{},g=o.fields||{},b=(c=m[dr])===null||c===void 0?void 0:c.arrayValue,C=(u=g[dr])===null||u===void 0?void 0:u.arrayValue,k=z(((h=b==null?void 0:b.values)===null||h===void 0?void 0:h.length)||0,((f=C==null?void 0:C.values)===null||f===void 0?void 0:f.length)||0);return k!==0?k:wh(b,C)})(r.mapValue,e.mapValue);case 11:return(function(s,o){if(s===qt.mapValue&&o===qt.mapValue)return 0;if(s===qt.mapValue)return 1;if(o===qt.mapValue)return-1;const c=s.fields||{},u=Object.keys(c),h=o.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let m=0;m<u.length&&m<f.length;++m){const g=za(u[m],f[m]);if(g!==0)return g;const b=Zt(c[u[m]],h[f[m]]);if(b!==0)return b}return z(u.length,f.length)})(r.mapValue,e.mapValue);default:throw M(23264,{le:t})}}function vh(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return z(r,e);const t=vt(r),n=vt(e),i=z(t.seconds,n.seconds);return i!==0?i:z(t.nanos,n.nanos)}function wh(r,e){const t=r.values||[],n=e.values||[];for(let i=0;i<t.length&&i<n.length;++i){const s=Zt(t[i],n[i]);if(s)return s}return z(t.length,n.length)}function fr(r){return Ja(r)}function Ja(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?(function(t){const n=vt(t);return`time(${n.seconds},${n.nanos})`})(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?(function(t){return wt(t).toBase64()})(r.bytesValue):"referenceValue"in r?(function(t){return O.fromName(t).toString()})(r.referenceValue):"geoPointValue"in r?(function(t){return`geo(${t.latitude},${t.longitude})`})(r.geoPointValue):"arrayValue"in r?(function(t){let n="[",i=!0;for(const s of t.values||[])i?i=!1:n+=",",n+=Ja(s);return n+"]"})(r.arrayValue):"mapValue"in r?(function(t){const n=Object.keys(t.fields||{}).sort();let i="{",s=!0;for(const o of n)s?s=!1:i+=",",i+=`${o}:${Ja(t.fields[o])}`;return i+"}"})(r.mapValue):M(61005,{value:r})}function Ms(r){switch(Yt(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ko(r);return e?16+Ms(e):16;case 5:return 2*r.stringValue.length;case 6:return wt(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return(function(n){return(n.values||[]).reduce(((i,s)=>i+Ms(s)),0)})(r.arrayValue);case 10:case 11:return(function(n){let i=0;return sn(n.fields,((s,o)=>{i+=s.length+Ms(o)})),i})(r.mapValue);default:throw M(13486,{value:r})}}function Pi(r,e){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${e.path.canonicalString()}`}}function Ya(r){return!!r&&"integerValue"in r}function Si(r){return!!r&&"arrayValue"in r}function Ah(r){return!!r&&"nullValue"in r}function Rh(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Ls(r){return!!r&&"mapValue"in r}function No(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{})[Bc])===null||t===void 0?void 0:t.stringValue)===jc}function fi(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const e={mapValue:{fields:{}}};return sn(r.mapValue.fields,((t,n)=>e.mapValue.fields[t]=fi(n))),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=fi(r.arrayValue.values[t]);return e}return Object.assign({},r)}function mp(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===pp}const gp={mapValue:{fields:{[Bc]:{stringValue:jc},[dr]:{arrayValue:{}}}}};function TT(r){return"nullValue"in r?Os:"booleanValue"in r?{booleanValue:!1}:"integerValue"in r||"doubleValue"in r?{doubleValue:NaN}:"timestampValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in r?{stringValue:""}:"bytesValue"in r?{bytesValue:""}:"referenceValue"in r?Pi(Dn.empty(),O.empty()):"geoPointValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in r?{arrayValue:{}}:"mapValue"in r?No(r)?gp:{mapValue:{}}:M(35942,{value:r})}function vT(r){return"nullValue"in r?{booleanValue:!1}:"booleanValue"in r?{doubleValue:NaN}:"integerValue"in r||"doubleValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in r?{stringValue:""}:"stringValue"in r?{bytesValue:""}:"bytesValue"in r?Pi(Dn.empty(),O.empty()):"referenceValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in r?{arrayValue:{}}:"arrayValue"in r?gp:"mapValue"in r?No(r)?{mapValue:{}}:qt:M(61959,{value:r})}function bh(r,e){const t=Zt(r.value,e.value);return t!==0?t:r.inclusive&&!e.inclusive?-1:!r.inclusive&&e.inclusive?1:0}function Ph(r,e){const t=Zt(r.value,e.value);return t!==0?t:r.inclusive&&!e.inclusive?1:!r.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(e){this.value=e}static empty(){return new Ae({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!Ls(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=fi(t)}setAll(e){let t=he.emptyPath(),n={},i=[];e.forEach(((o,c)=>{if(!t.isImmediateParentOf(c)){const u=this.getFieldsMap(t);this.applyChanges(u,n,i),n={},i=[],t=c.popLast()}o?n[c.lastSegment()]=fi(o):i.push(c.lastSegment())}));const s=this.getFieldsMap(t);this.applyChanges(s,n,i)}delete(e){const t=this.field(e.popLast());Ls(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return at(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let i=t.mapValue.fields[e.get(n)];Ls(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,n){sn(t,((i,s)=>e[i]=s));for(const i of n)delete e[i]}clone(){return new Ae(fi(this.value))}}function _p(r){const e=[];return sn(r.fields,((t,n)=>{const i=new he([t]);if(Ls(n)){const s=_p(n.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)})),new Le(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(e,t,n,i,s,o,c){this.key=e,this.documentType=t,this.version=n,this.readTime=i,this.createTime=s,this.data=o,this.documentState=c}static newInvalidDocument(e){return new ce(e,0,B.min(),B.min(),B.min(),Ae.empty(),0)}static newFoundDocument(e,t,n,i){return new ce(e,1,t,B.min(),n,i,0)}static newNoDocument(e,t){return new ce(e,2,t,B.min(),B.min(),Ae.empty(),0)}static newUnknownDocument(e,t){return new ce(e,3,t,B.min(),B.min(),Ae.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(B.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ae.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ae.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=B.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ce&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ce(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(e,t){this.position=e,this.inclusive=t}}function Sh(r,e,t){let n=0;for(let i=0;i<r.position.length;i++){const s=e[i],o=r.position[i];if(s.field.isKeyField()?n=O.comparator(O.fromName(o.referenceValue),t.key):n=Zt(o,t.data.field(s.field)),s.dir==="desc"&&(n*=-1),n!==0)break}return n}function Ch(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!at(r.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(e,t="asc"){this.field=e,this.dir=t}}function wT(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yp{}class Q extends yp{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,n):new AT(e,t,n):t==="array-contains"?new PT(e,n):t==="in"?new Ap(e,n):t==="not-in"?new ST(e,n):t==="array-contains-any"?new CT(e,n):new Q(e,t,n)}static createKeyFieldInFilter(e,t,n){return t==="in"?new RT(e,n):new bT(e,n)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Zt(t,this.value)):t!==null&&Yt(this.value)===Yt(t)&&this.matchesComparison(Zt(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return M(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ne extends yp{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new ne(e,t)}matches(e){return mr(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function mr(r){return r.op==="and"}function Za(r){return r.op==="or"}function qc(r){return Ip(r)&&mr(r)}function Ip(r){for(const e of r.filters)if(e instanceof ne)return!1;return!0}function ec(r){if(r instanceof Q)return r.field.canonicalString()+r.op.toString()+fr(r.value);if(qc(r))return r.filters.map((e=>ec(e))).join(",");{const e=r.filters.map((t=>ec(t))).join(",");return`${r.op}(${e})`}}function Ep(r,e){return r instanceof Q?(function(n,i){return i instanceof Q&&n.op===i.op&&n.field.isEqual(i.field)&&at(n.value,i.value)})(r,e):r instanceof ne?(function(n,i){return i instanceof ne&&n.op===i.op&&n.filters.length===i.filters.length?n.filters.reduce(((s,o,c)=>s&&Ep(o,i.filters[c])),!0):!1})(r,e):void M(19439)}function Tp(r,e){const t=r.filters.concat(e);return ne.create(t,r.op)}function vp(r){return r instanceof Q?(function(t){return`${t.field.canonicalString()} ${t.op} ${fr(t.value)}`})(r):r instanceof ne?(function(t){return t.op.toString()+" {"+t.getFilters().map(vp).join(" ,")+"}"})(r):"Filter"}class AT extends Q{constructor(e,t,n){super(e,t,n),this.key=O.fromName(n.referenceValue)}matches(e){const t=O.comparator(e.key,this.key);return this.matchesComparison(t)}}class RT extends Q{constructor(e,t){super(e,"in",t),this.keys=wp("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class bT extends Q{constructor(e,t){super(e,"not-in",t),this.keys=wp("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function wp(r,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map((n=>O.fromName(n.referenceValue)))}class PT extends Q{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Si(t)&&bi(t.arrayValue,this.value)}}class Ap extends Q{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&bi(this.value.arrayValue,t)}}class ST extends Q{constructor(e,t){super(e,"not-in",t)}matches(e){if(bi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!bi(this.value.arrayValue,t)}}class CT extends Q{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Si(t)||!t.arrayValue.values)&&t.arrayValue.values.some((n=>bi(this.value.arrayValue,n)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VT{constructor(e,t=null,n=[],i=[],s=null,o=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=i,this.limit=s,this.startAt=o,this.endAt=c,this.Pe=null}}function tc(r,e=null,t=[],n=[],i=null,s=null,o=null){return new VT(r,e,t,n,i,s,o)}function kn(r){const e=F(r);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((n=>ec(n))).join(","),t+="|ob:",t+=e.orderBy.map((n=>(function(s){return s.field.canonicalString()+s.dir})(n))).join(","),ji(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((n=>fr(n))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((n=>fr(n))).join(",")),e.Pe=t}return e.Pe}function $i(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!wT(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!Ep(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!Ch(r.startAt,e.startAt)&&Ch(r.endAt,e.endAt)}function io(r){return O.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}function so(r,e){return r.filters.filter((t=>t instanceof Q&&t.field.isEqual(e)))}function Vh(r,e,t){let n=Os,i=!0;for(const s of so(r,e)){let o=Os,c=!0;switch(s.op){case"<":case"<=":o=TT(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,c=!1;break;case"!=":case"not-in":o=Os}bh({value:n,inclusive:i},{value:o,inclusive:c})<0&&(n=o,i=c)}if(t!==null){for(let s=0;s<r.orderBy.length;++s)if(r.orderBy[s].field.isEqual(e)){const o=t.position[s];bh({value:n,inclusive:i},{value:o,inclusive:t.inclusive})<0&&(n=o,i=t.inclusive);break}}return{value:n,inclusive:i}}function Dh(r,e,t){let n=qt,i=!0;for(const s of so(r,e)){let o=qt,c=!0;switch(s.op){case">=":case">":o=vT(s.value),c=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,c=!1;break;case"!=":case"not-in":o=qt}Ph({value:n,inclusive:i},{value:o,inclusive:c})>0&&(n=o,i=c)}if(t!==null){for(let s=0;s<r.orderBy.length;++s)if(r.orderBy[s].field.isEqual(e)){const o=t.position[s];Ph({value:n,inclusive:i},{value:o,inclusive:t.inclusive})>0&&(n=o,i=t.inclusive);break}}return{value:n,inclusive:i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(e,t=null,n=[],i=[],s=null,o="F",c=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=i,this.limit=s,this.limitType=o,this.startAt=c,this.endAt=u,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function Rp(r,e,t,n,i,s,o,c){return new zi(r,e,t,n,i,s,o,c)}function Ki(r){return new zi(r)}function kh(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function bp(r){return r.collectionGroup!==null}function pi(r){const e=F(r);if(e.Te===null){e.Te=[];const t=new Set;for(const s of e.explicitOrderBy)e.Te.push(s),t.add(s.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new re(he.comparator);return o.filters.forEach((u=>{u.getFlattenedFilters().forEach((h=>{h.isInequality()&&(c=c.add(h.field))}))})),c})(e).forEach((s=>{t.has(s.canonicalString())||s.isKeyField()||e.Te.push(new ro(s,n))})),t.has(he.keyField().canonicalString())||e.Te.push(new ro(he.keyField(),n))}return e.Te}function $e(r){const e=F(r);return e.Ie||(e.Ie=DT(e,pi(r))),e.Ie}function DT(r,e){if(r.limitType==="F")return tc(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map((i=>{const s=i.dir==="desc"?"asc":"desc";return new ro(i.field,s)}));const t=r.endAt?new pr(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new pr(r.startAt.position,r.startAt.inclusive):null;return tc(r.path,r.collectionGroup,e,r.filters,r.limit,t,n)}}function nc(r,e){const t=r.filters.concat([e]);return new zi(r.path,r.collectionGroup,r.explicitOrderBy.slice(),t,r.limit,r.limitType,r.startAt,r.endAt)}function rc(r,e,t){return new zi(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function xo(r,e){return $i($e(r),$e(e))&&r.limitType===e.limitType}function Pp(r){return`${kn($e(r))}|lt:${r.limitType}`}function Yn(r){return`Query(target=${(function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map((i=>vp(i))).join(", ")}]`),ji(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map((i=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(i))).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map((i=>fr(i))).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map((i=>fr(i))).join(",")),`Target(${n})`})($e(r))}; limitType=${r.limitType})`}function Gi(r,e){return e.isFoundDocument()&&(function(n,i){const s=i.key.path;return n.collectionGroup!==null?i.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(s):O.isDocumentKey(n.path)?n.path.isEqual(s):n.path.isImmediateParentOf(s)})(r,e)&&(function(n,i){for(const s of pi(n))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0})(r,e)&&(function(n,i){for(const s of n.filters)if(!s.matches(i))return!1;return!0})(r,e)&&(function(n,i){return!(n.startAt&&!(function(o,c,u){const h=Sh(o,c,u);return o.inclusive?h<=0:h<0})(n.startAt,pi(n),i)||n.endAt&&!(function(o,c,u){const h=Sh(o,c,u);return o.inclusive?h>=0:h>0})(n.endAt,pi(n),i))})(r,e)}function Sp(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function Cp(r){return(e,t)=>{let n=!1;for(const i of pi(r)){const s=kT(i,e,t);if(s!==0)return s;n=n||i.field.isKeyField()}return 0}}function kT(r,e,t){const n=r.field.isKeyField()?O.comparator(e.key,t.key):(function(s,o,c){const u=o.data.field(s),h=c.data.field(s);return u!==null&&h!==null?Zt(u,h):M(42886)})(r.field,e,t);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return M(19790,{direction:r.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n!==void 0){for(const[i,s]of n)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const n=this.mapKeyFn(e),i=this.inner[n];if(i===void 0)return this.inner[n]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n===void 0)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],e))return n.length===1?delete this.inner[t]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(e){sn(this.inner,((t,n)=>{for(const[i,s]of n)e(i,s)}))}isEmpty(){return cp(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NT=new se(O.comparator);function je(){return NT}const Vp=new se(O.comparator);function ii(...r){let e=Vp;for(const t of r)e=e.insert(t.key,t);return e}function Dp(r){let e=Vp;return r.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function nt(){return mi()}function kp(){return mi()}function mi(){return new bt((r=>r.toString()),((r,e)=>r.isEqual(e)))}const xT=new se(O.comparator),OT=new re(O.comparator);function W(...r){let e=OT;for(const t of r)e=e.add(t);return e}const MT=new re(z);function $c(){return MT}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zc(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ti(e)?"-0":e}}function Np(r){return{integerValue:""+r}}function LT(r,e){return Jf(e)?Np(e):zc(r,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(){this._=void 0}}function FT(r,e,t){return r instanceof gr?(function(i,s){const o={fields:{[hp]:{stringValue:lp},[fp]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Uc(s)&&(s=ko(s)),s&&(o.fields[dp]=s),{mapValue:o}})(t,e):r instanceof _r?Op(r,e):r instanceof yr?Mp(r,e):(function(i,s){const o=xp(i,s),c=Nh(o)+Nh(i.Ee);return Ya(o)&&Ya(i.Ee)?Np(c):zc(i.serializer,c)})(r,e)}function UT(r,e,t){return r instanceof _r?Op(r,e):r instanceof yr?Mp(r,e):t}function xp(r,e){return r instanceof Ci?(function(n){return Ya(n)||(function(s){return!!s&&"doubleValue"in s})(n)})(e)?e:{integerValue:0}:null}class gr extends Oo{}class _r extends Oo{constructor(e){super(),this.elements=e}}function Op(r,e){const t=Lp(e);for(const n of r.elements)t.some((i=>at(i,n)))||t.push(n);return{arrayValue:{values:t}}}class yr extends Oo{constructor(e){super(),this.elements=e}}function Mp(r,e){let t=Lp(e);for(const n of r.elements)t=t.filter((i=>!at(i,n)));return{arrayValue:{values:t}}}class Ci extends Oo{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function Nh(r){return ae(r.integerValue||r.doubleValue)}function Lp(r){return Si(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fp{constructor(e,t){this.field=e,this.transform=t}}function BT(r,e){return r.field.isEqual(e.field)&&(function(n,i){return n instanceof _r&&i instanceof _r||n instanceof yr&&i instanceof yr?or(n.elements,i.elements,at):n instanceof Ci&&i instanceof Ci?at(n.Ee,i.Ee):n instanceof gr&&i instanceof gr})(r.transform,e.transform)}class jT{constructor(e,t){this.version=e,this.transformResults=t}}class ue{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new ue}static exists(e){return new ue(void 0,e)}static updateTime(e){return new ue(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Fs(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class Mo{}function Up(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new Pr(r.key,ue.none()):new br(r.key,r.data,ue.none());{const t=r.data,n=Ae.empty();let i=new re(he.comparator);for(let s of e.fields)if(!i.has(s)){let o=t.field(s);o===null&&s.length>1&&(s=s.popLast(),o=t.field(s)),o===null?n.delete(s):n.set(s,o),i=i.add(s)}return new Pt(r.key,n,new Le(i.toArray()),ue.none())}}function qT(r,e,t){r instanceof br?(function(i,s,o){const c=i.value.clone(),u=Oh(i.fieldTransforms,s,o.transformResults);c.setAll(u),s.convertToFoundDocument(o.version,c).setHasCommittedMutations()})(r,e,t):r instanceof Pt?(function(i,s,o){if(!Fs(i.precondition,s))return void s.convertToUnknownDocument(o.version);const c=Oh(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(Bp(i)),u.setAll(c),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()})(r,e,t):(function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()})(0,e,t)}function gi(r,e,t,n){return r instanceof br?(function(s,o,c,u){if(!Fs(s.precondition,o))return c;const h=s.value.clone(),f=Mh(s.fieldTransforms,u,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null})(r,e,t,n):r instanceof Pt?(function(s,o,c,u){if(!Fs(s.precondition,o))return c;const h=Mh(s.fieldTransforms,u,o),f=o.data;return f.setAll(Bp(s)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),c===null?null:c.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map((m=>m.field)))})(r,e,t,n):(function(s,o,c){return Fs(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c})(r,e,t)}function $T(r,e){let t=null;for(const n of r.fieldTransforms){const i=e.data.field(n.field),s=xp(n.transform,i||null);s!=null&&(t===null&&(t=Ae.empty()),t.set(n.field,s))}return t||null}function xh(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!(function(n,i){return n===void 0&&i===void 0||!(!n||!i)&&or(n,i,((s,o)=>BT(s,o)))})(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class br extends Mo{constructor(e,t,n,i=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Pt extends Mo{constructor(e,t,n,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Bp(r){const e=new Map;return r.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const n=r.data.field(t);e.set(t,n)}})),e}function Oh(r,e,t){const n=new Map;U(r.length===t.length,32656,{Ae:t.length,Re:r.length});for(let i=0;i<t.length;i++){const s=r[i],o=s.transform,c=e.data.field(s.field);n.set(s.field,UT(o,c,t[i]))}return n}function Mh(r,e,t){const n=new Map;for(const i of r){const s=i.transform,o=t.data.field(i.field);n.set(i.field,FT(s,o,e))}return n}class Pr extends Mo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Kc extends Mo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc{constructor(e,t,n,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&qT(s,e,n[i])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=gi(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=gi(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=kp();return this.mutations.forEach((i=>{const s=e.get(i.key),o=s.overlayedDocument;let c=this.applyToLocalView(o,s.mutatedFields);c=t.has(i.key)?null:c;const u=Up(o,c);u!==null&&n.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(B.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),W())}isEqual(e){return this.batchId===e.batchId&&or(this.mutations,e.mutations,((t,n)=>xh(t,n)))&&or(this.baseMutations,e.baseMutations,((t,n)=>xh(t,n)))}}class Wc{constructor(e,t,n,i){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=i}static from(e,t,n){U(e.mutations.length===n.length,58842,{Ve:e.mutations.length,me:n.length});let i=(function(){return xT})();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,n[o].version);return new Wc(e,t,n,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zT{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var me,J;function jp(r){switch(r){case S.OK:return M(64938);case S.CANCELLED:case S.UNKNOWN:case S.DEADLINE_EXCEEDED:case S.RESOURCE_EXHAUSTED:case S.INTERNAL:case S.UNAVAILABLE:case S.UNAUTHENTICATED:return!1;case S.INVALID_ARGUMENT:case S.NOT_FOUND:case S.ALREADY_EXISTS:case S.PERMISSION_DENIED:case S.FAILED_PRECONDITION:case S.ABORTED:case S.OUT_OF_RANGE:case S.UNIMPLEMENTED:case S.DATA_LOSS:return!0;default:return M(15467,{code:r})}}function qp(r){if(r===void 0)return fe("GRPC error has no .code"),S.UNKNOWN;switch(r){case me.OK:return S.OK;case me.CANCELLED:return S.CANCELLED;case me.UNKNOWN:return S.UNKNOWN;case me.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case me.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case me.INTERNAL:return S.INTERNAL;case me.UNAVAILABLE:return S.UNAVAILABLE;case me.UNAUTHENTICATED:return S.UNAUTHENTICATED;case me.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case me.NOT_FOUND:return S.NOT_FOUND;case me.ALREADY_EXISTS:return S.ALREADY_EXISTS;case me.PERMISSION_DENIED:return S.PERMISSION_DENIED;case me.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case me.ABORTED:return S.ABORTED;case me.OUT_OF_RANGE:return S.OUT_OF_RANGE;case me.UNIMPLEMENTED:return S.UNIMPLEMENTED;case me.DATA_LOSS:return S.DATA_LOSS;default:return M(39323,{code:r})}}(J=me||(me={}))[J.OK=0]="OK",J[J.CANCELLED=1]="CANCELLED",J[J.UNKNOWN=2]="UNKNOWN",J[J.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",J[J.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",J[J.NOT_FOUND=5]="NOT_FOUND",J[J.ALREADY_EXISTS=6]="ALREADY_EXISTS",J[J.PERMISSION_DENIED=7]="PERMISSION_DENIED",J[J.UNAUTHENTICATED=16]="UNAUTHENTICATED",J[J.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",J[J.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",J[J.ABORTED=10]="ABORTED",J[J.OUT_OF_RANGE=11]="OUT_OF_RANGE",J[J.UNIMPLEMENTED=12]="UNIMPLEMENTED",J[J.INTERNAL=13]="INTERNAL",J[J.UNAVAILABLE=14]="UNAVAILABLE",J[J.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KT=new Gt([4294967295,4294967295],0);function Lh(r){const e=qf().encode(r),t=new Of;return t.update(e),new Uint8Array(t.digest())}function Fh(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),n=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Gt([t,n],0),new Gt([i,s],0)]}class Qc{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new si(`Invalid padding: ${t}`);if(n<0)throw new si(`Invalid hash count: ${n}`);if(e.length>0&&this.hashCount===0)throw new si(`Invalid hash count: ${n}`);if(e.length===0&&t!==0)throw new si(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=Gt.fromNumber(this.fe)}pe(e,t,n){let i=e.add(t.multiply(Gt.fromNumber(n)));return i.compare(KT)===1&&(i=new Gt([i.getBits(0),i.getBits(1)],0)),i.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=Lh(e),[n,i]=Fh(t);for(let s=0;s<this.hashCount;s++){const o=this.pe(n,i,s);if(!this.ye(o))return!1}return!0}static create(e,t,n){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Qc(s,i,t);return n.forEach((c=>o.insert(c))),o}insert(e){if(this.fe===0)return;const t=Lh(e),[n,i]=Fh(t);for(let s=0;s<this.hashCount;s++){const o=this.pe(n,i,s);this.we(o)}}we(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class si extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi{constructor(e,t,n,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const i=new Map;return i.set(e,Hi.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new Wi(B.min(),i,new se(z),je(),W())}}class Hi{constructor(e,t,n,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new Hi(n,t,W(),W(),W())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(e,t,n,i){this.Se=e,this.removedTargetIds=t,this.key=n,this.be=i}}class $p{constructor(e,t){this.targetId=e,this.De=t}}class zp{constructor(e,t,n=pe.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=i}}class Uh{constructor(){this.ve=0,this.Ce=Bh(),this.Fe=pe.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=W(),t=W(),n=W();return this.Ce.forEach(((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:n=n.add(i);break;default:M(38017,{changeType:s})}})),new Hi(this.Fe,this.Me,e,t,n)}ke(){this.xe=!1,this.Ce=Bh()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,U(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class GT{constructor(e){this.We=e,this.Ge=new Map,this.ze=je(),this.je=Ts(),this.Je=Ts(),this.He=new se(z)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,(t=>{const n=this.tt(t);switch(e.state){case 0:this.nt(t)&&n.Be(e.resumeToken);break;case 1:n.Ue(),n.Oe||n.ke(),n.Be(e.resumeToken);break;case 2:n.Ue(),n.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(n.Ke(),n.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),n.Be(e.resumeToken));break;default:M(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach(((n,i)=>{this.nt(i)&&t(i)}))}it(e){const t=e.targetId,n=e.De.count,i=this.st(t);if(i){const s=i.target;if(io(s))if(n===0){const o=new O(s.path);this.Xe(t,o,ce.newNoDocument(o,B.min()))}else U(n===1,20013,{expectedCount:n});else{const o=this.ot(t);if(o!==n){const c=this._t(e),u=c?this.ut(c,e,o):1;if(u!==0){this.rt(t);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,h)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:i=0},hashCount:s=0}=t;let o,c;try{o=wt(n).toUint8Array()}catch(u){if(u instanceof up)return Jt("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{c=new Qc(o,i,s)}catch(u){return Jt(u instanceof si?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return c.fe===0?null:c}ut(e,t,n){return t.De.count===n-this.ht(e,t.targetId)?0:2}ht(e,t){const n=this.We.getRemoteKeysForTarget(t);let i=0;return n.forEach((s=>{const o=this.We.lt(),c=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(c)||(this.Xe(t,s,null),i++)})),i}Pt(e){const t=new Map;this.Ge.forEach(((s,o)=>{const c=this.st(o);if(c){if(s.current&&io(c.target)){const u=new O(c.target.path);this.Tt(u).has(o)||this.It(o,u)||this.Xe(o,u,ce.newNoDocument(u,e))}s.Ne&&(t.set(o,s.Le()),s.ke())}}));let n=W();this.Je.forEach(((s,o)=>{let c=!0;o.forEachWhile((u=>{const h=this.st(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)})),c&&(n=n.add(s))})),this.ze.forEach(((s,o)=>o.setReadTime(e)));const i=new Wi(e,t,this.He,this.ze,n);return this.ze=je(),this.je=Ts(),this.Je=Ts(),this.He=new se(z),i}Ze(e,t){if(!this.nt(e))return;const n=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,n),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,n){if(!this.nt(e))return;const i=this.tt(e);this.It(e,t)?i.qe(t,1):i.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),n&&(this.ze=this.ze.insert(t,n))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new Uh,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new re(z),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new re(z),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||D("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new Uh),this.We.getRemoteKeysForTarget(e).forEach((t=>{this.Xe(e,t,null)}))}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function Ts(){return new se(O.comparator)}function Bh(){return new se(O.comparator)}const WT={asc:"ASCENDING",desc:"DESCENDING"},HT={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},QT={and:"AND",or:"OR"};class XT{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function ic(r,e){return r.useProto3Json||ji(e)?e:{value:e}}function Ir(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Kp(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function JT(r,e){return Ir(r,e.toTimestamp())}function Te(r){return U(!!r,49232),B.fromTimestamp((function(t){const n=vt(t);return new te(n.seconds,n.nanos)})(r))}function Xc(r,e){return sc(r,e).canonicalString()}function sc(r,e){const t=(function(i){return new Y(["projects",i.projectId,"databases",i.database])})(r).child("documents");return e===void 0?t:t.child(e)}function Gp(r){const e=Y.fromString(r);return U(tm(e),10190,{key:e.toString()}),e}function Vi(r,e){return Xc(r.databaseId,e.path)}function yt(r,e){const t=Gp(e);if(t.get(1)!==r.databaseId.projectId)throw new N(S.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new N(S.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new O(Qp(t))}function Wp(r,e){return Xc(r.databaseId,e)}function Hp(r){const e=Gp(r);return e.length===4?Y.emptyPath():Qp(e)}function oc(r){return new Y(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function Qp(r){return U(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function jh(r,e,t){return{name:Vi(r,e),fields:t.value.mapValue.fields}}function YT(r,e,t){const n=yt(r,e.name),i=Te(e.updateTime),s=e.createTime?Te(e.createTime):B.min(),o=new Ae({mapValue:{fields:e.fields}}),c=ce.newFoundDocument(n,i,s,o);return t&&c.setHasCommittedMutations(),t?c.setHasCommittedMutations():c}function ZT(r,e){return"found"in e?(function(n,i){U(!!i.found,43571),i.found.name,i.found.updateTime;const s=yt(n,i.found.name),o=Te(i.found.updateTime),c=i.found.createTime?Te(i.found.createTime):B.min(),u=new Ae({mapValue:{fields:i.found.fields}});return ce.newFoundDocument(s,o,c,u)})(r,e):"missing"in e?(function(n,i){U(!!i.missing,3894),U(!!i.readTime,22933);const s=yt(n,i.missing),o=Te(i.readTime);return ce.newNoDocument(s,o)})(r,e):M(7234,{result:e})}function ev(r,e){let t;if("targetChange"in e){e.targetChange;const n=(function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:M(39313,{state:h})})(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=(function(h,f){return h.useProto3Json?(U(f===void 0||typeof f=="string",58123),pe.fromBase64String(f||"")):(U(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),pe.fromUint8Array(f||new Uint8Array))})(r,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&(function(h){const f=h.code===void 0?S.UNKNOWN:qp(h.code);return new N(f,h.message||"")})(o);t=new zp(n,i,s,c||null)}else if("documentChange"in e){e.documentChange;const n=e.documentChange;n.document,n.document.name,n.document.updateTime;const i=yt(r,n.document.name),s=Te(n.document.updateTime),o=n.document.createTime?Te(n.document.createTime):B.min(),c=new Ae({mapValue:{fields:n.document.fields}}),u=ce.newFoundDocument(i,s,o,c),h=n.targetIds||[],f=n.removedTargetIds||[];t=new Us(h,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const n=e.documentDelete;n.document;const i=yt(r,n.document),s=n.readTime?Te(n.readTime):B.min(),o=ce.newNoDocument(i,s),c=n.removedTargetIds||[];t=new Us([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const n=e.documentRemove;n.document;const i=yt(r,n.document),s=n.removedTargetIds||[];t=new Us([],s,i,null)}else{if(!("filter"in e))return M(11601,{At:e});{e.filter;const n=e.filter;n.targetId;const{count:i=0,unchangedNames:s}=n,o=new zT(i,s),c=n.targetId;t=new $p(c,o)}}return t}function Di(r,e){let t;if(e instanceof br)t={update:jh(r,e.key,e.value)};else if(e instanceof Pr)t={delete:Vi(r,e.key)};else if(e instanceof Pt)t={update:jh(r,e.key,e.data),updateMask:ov(e.fieldMask)};else{if(!(e instanceof Kc))return M(16599,{Rt:e.type});t={verify:Vi(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((n=>(function(s,o){const c=o.transform;if(c instanceof gr)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof _r)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof yr)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Ci)return{fieldPath:o.field.canonicalString(),increment:c.Ee};throw M(20930,{transform:o.transform})})(0,n)))),e.precondition.isNone||(t.currentDocument=(function(i,s){return s.updateTime!==void 0?{updateTime:JT(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:M(27497)})(r,e.precondition)),t}function ac(r,e){const t=e.currentDocument?(function(s){return s.updateTime!==void 0?ue.updateTime(Te(s.updateTime)):s.exists!==void 0?ue.exists(s.exists):ue.none()})(e.currentDocument):ue.none(),n=e.updateTransforms?e.updateTransforms.map((i=>(function(o,c){let u=null;if("setToServerValue"in c)U(c.setToServerValue==="REQUEST_TIME",16630,{proto:c}),u=new gr;else if("appendMissingElements"in c){const f=c.appendMissingElements.values||[];u=new _r(f)}else if("removeAllFromArray"in c){const f=c.removeAllFromArray.values||[];u=new yr(f)}else"increment"in c?u=new Ci(o,c.increment):M(16584,{proto:c});const h=he.fromServerFormat(c.fieldPath);return new Fp(h,u)})(r,i))):[];if(e.update){e.update.name;const i=yt(r,e.update.name),s=new Ae({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=(function(u){const h=u.fieldPaths||[];return new Le(h.map((f=>he.fromServerFormat(f))))})(e.updateMask);return new Pt(i,s,o,t,n)}return new br(i,s,t,n)}if(e.delete){const i=yt(r,e.delete);return new Pr(i,t)}if(e.verify){const i=yt(r,e.verify);return new Kc(i,t)}return M(1463,{proto:e})}function tv(r,e){return r&&r.length>0?(U(e!==void 0,14353),r.map((t=>(function(i,s){let o=i.updateTime?Te(i.updateTime):Te(s);return o.isEqual(B.min())&&(o=Te(s)),new jT(o,i.transformResults||[])})(t,e)))):[]}function Xp(r,e){return{documents:[Wp(r,e.path)]}}function Jp(r,e){const t={structuredQuery:{}},n=e.path;let i;e.collectionGroup!==null?(i=n,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=n.popLast(),t.structuredQuery.from=[{collectionId:n.lastSegment()}]),t.parent=Wp(r,i);const s=(function(h){if(h.length!==0)return em(ne.create(h,"and"))})(e.filters);s&&(t.structuredQuery.where=s);const o=(function(h){if(h.length!==0)return h.map((f=>(function(g){return{field:Zn(g.field),direction:rv(g.dir)}})(f)))})(e.orderBy);o&&(t.structuredQuery.orderBy=o);const c=ic(r,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=(function(h){return{before:h.inclusive,values:h.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(h){return{before:!h.inclusive,values:h.position}})(e.endAt)),{Vt:t,parent:i}}function Yp(r){let e=Hp(r.parent);const t=r.structuredQuery,n=t.from?t.from.length:0;let i=null;if(n>0){U(n===1,65062);const f=t.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];t.where&&(s=(function(m){const g=Zp(m);return g instanceof ne&&qc(g)?g.getFilters():[g]})(t.where));let o=[];t.orderBy&&(o=(function(m){return m.map((g=>(function(C){return new ro(er(C.field),(function(V){switch(V){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(C.direction))})(g)))})(t.orderBy));let c=null;t.limit&&(c=(function(m){let g;return g=typeof m=="object"?m.value:m,ji(g)?null:g})(t.limit));let u=null;t.startAt&&(u=(function(m){const g=!!m.before,b=m.values||[];return new pr(b,g)})(t.startAt));let h=null;return t.endAt&&(h=(function(m){const g=!m.before,b=m.values||[];return new pr(b,g)})(t.endAt)),Rp(e,i,o,s,c,"F",u,h)}function nv(r,e){const t=(function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return M(28987,{purpose:i})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Zp(r){return r.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=er(t.unaryFilter.field);return Q.create(n,"==",{doubleValue:NaN});case"IS_NULL":const i=er(t.unaryFilter.field);return Q.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=er(t.unaryFilter.field);return Q.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=er(t.unaryFilter.field);return Q.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return M(61313);default:return M(60726)}})(r):r.fieldFilter!==void 0?(function(t){return Q.create(er(t.fieldFilter.field),(function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return M(58110);default:return M(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(r):r.compositeFilter!==void 0?(function(t){return ne.create(t.compositeFilter.filters.map((n=>Zp(n))),(function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return M(1026)}})(t.compositeFilter.op))})(r):M(30097,{filter:r})}function rv(r){return WT[r]}function iv(r){return HT[r]}function sv(r){return QT[r]}function Zn(r){return{fieldPath:r.canonicalString()}}function er(r){return he.fromServerFormat(r.fieldPath)}function em(r){return r instanceof Q?(function(t){if(t.op==="=="){if(Rh(t.value))return{unaryFilter:{field:Zn(t.field),op:"IS_NAN"}};if(Ah(t.value))return{unaryFilter:{field:Zn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Rh(t.value))return{unaryFilter:{field:Zn(t.field),op:"IS_NOT_NAN"}};if(Ah(t.value))return{unaryFilter:{field:Zn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Zn(t.field),op:iv(t.op),value:t.value}}})(r):r instanceof ne?(function(t){const n=t.getFilters().map((i=>em(i)));return n.length===1?n[0]:{compositeFilter:{op:sv(t.op),filters:n}}})(r):M(54877,{filter:r})}function ov(r){const e=[];return r.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function tm(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e,t,n,i,s=B.min(),o=B.min(),c=pe.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=u}withSequenceNumber(e){return new gt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new gt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new gt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new gt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nm{constructor(e){this.gt=e}}function av(r,e){let t;if(e.document)t=YT(r.gt,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const n=O.fromSegments(e.noDocument.path),i=xn(e.noDocument.readTime);t=ce.newNoDocument(n,i),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return M(56709);{const n=O.fromSegments(e.unknownDocument.path),i=xn(e.unknownDocument.version);t=ce.newUnknownDocument(n,i)}}return e.readTime&&t.setReadTime((function(i){const s=new te(i[0],i[1]);return B.fromTimestamp(s)})(e.readTime)),t}function qh(r,e){const t=e.key,n={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:oo(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())n.document=(function(s,o){return{name:Vi(s,o.key),fields:o.data.value.mapValue.fields,updateTime:Ir(s,o.version.toTimestamp()),createTime:Ir(s,o.createTime.toTimestamp())}})(r.gt,e);else if(e.isNoDocument())n.noDocument={path:t.path.toArray(),readTime:Nn(e.version)};else{if(!e.isUnknownDocument())return M(57904,{document:e});n.unknownDocument={path:t.path.toArray(),version:Nn(e.version)}}return n}function oo(r){const e=r.toTimestamp();return[e.seconds,e.nanoseconds]}function Nn(r){const e=r.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function xn(r){const e=new te(r.seconds,r.nanoseconds);return B.fromTimestamp(e)}function yn(r,e){const t=(e.baseMutations||[]).map((s=>ac(r.gt,s)));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const c=e.mutations[s+1];o.updateTransforms=c.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const n=e.mutations.map((s=>ac(r.gt,s))),i=te.fromMillis(e.localWriteTimeMs);return new Gc(e.batchId,i,t,n)}function oi(r){const e=xn(r.readTime),t=r.lastLimboFreeSnapshotVersion!==void 0?xn(r.lastLimboFreeSnapshotVersion):B.min();let n;return n=(function(s){return s.documents!==void 0})(r.query)?(function(s){const o=s.documents.length;return U(o===1,1966,{count:o}),$e(Ki(Hp(s.documents[0])))})(r.query):(function(s){return $e(Yp(s))})(r.query),new gt(n,r.targetId,"TargetPurposeListen",r.lastListenSequenceNumber,e,t,pe.fromBase64String(r.resumeToken))}function rm(r,e){const t=Nn(e.snapshotVersion),n=Nn(e.lastLimboFreeSnapshotVersion);let i;i=io(e.target)?Xp(r.gt,e.target):Jp(r.gt,e.target).Vt;const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:kn(e.target),readTime:t,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:n,query:i}}function im(r){const e=Yp({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?rc(e,e.limit,"L"):e}function ba(r,e){return new Hc(e.largestBatchId,ac(r.gt,e.overlayMutation))}function $h(r,e){const t=e.path.lastSegment();return[r,ke(e.path.popLast()),t]}function zh(r,e,t,n){return{indexId:r,uid:e,sequenceNumber:t,readTime:Nn(n.readTime),documentKey:ke(n.documentKey.path),largestBatchId:n.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cv{getBundleMetadata(e,t){return Kh(e).get(t).next((n=>{if(n)return(function(s){return{id:s.bundleId,createTime:xn(s.createTime),version:s.version}})(n)}))}saveBundleMetadata(e,t){return Kh(e).put((function(i){return{bundleId:i.id,createTime:Nn(Te(i.createTime)),version:i.version}})(t))}getNamedQuery(e,t){return Gh(e).get(t).next((n=>{if(n)return(function(s){return{name:s.name,query:im(s.bundledQuery),readTime:xn(s.readTime)}})(n)}))}saveNamedQuery(e,t){return Gh(e).put((function(i){return{name:i.name,readTime:Nn(Te(i.readTime)),bundledQuery:i.bundledQuery}})(t))}}function Kh(r){return Ie(r,Co)}function Gh(r){return Ie(r,Vo)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(e,t){this.serializer=e,this.userId=t}static yt(e,t){const n=t.uid||"";return new Lo(e,n)}getOverlay(e,t){return Xr(e).get($h(this.userId,t)).next((n=>n?ba(this.serializer,n):null))}getOverlays(e,t){const n=nt();return w.forEach(t,(i=>this.getOverlay(e,i).next((s=>{s!==null&&n.set(i,s)})))).next((()=>n))}saveOverlays(e,t,n){const i=[];return n.forEach(((s,o)=>{const c=new Hc(t,o);i.push(this.wt(e,c))})),w.waitFor(i)}removeOverlaysForBatchId(e,t,n){const i=new Set;t.forEach((o=>i.add(ke(o.getCollectionPath()))));const s=[];return i.forEach((o=>{const c=IDBKeyRange.bound([this.userId,o,n],[this.userId,o,n+1],!1,!0);s.push(Xr(e).Y(Qa,c))})),w.waitFor(s)}getOverlaysForCollection(e,t,n){const i=nt(),s=ke(t),o=IDBKeyRange.bound([this.userId,s,n],[this.userId,s,Number.POSITIVE_INFINITY],!0);return Xr(e).j(Qa,o).next((c=>{for(const u of c){const h=ba(this.serializer,u);i.set(h.getKey(),h)}return i}))}getOverlaysForCollectionGroup(e,t,n,i){const s=nt();let o;const c=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,Number.POSITIVE_INFINITY],!0);return Xr(e).X({index:rp,range:c},((u,h,f)=>{const m=ba(this.serializer,h);s.size()<i||m.largestBatchId===o?(s.set(m.getKey(),m),o=m.largestBatchId):f.done()})).next((()=>s))}wt(e,t){return Xr(e).put((function(i,s,o){const[c,u,h]=$h(s,o.mutation.key);return{userId:s,collectionPath:u,documentId:h,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:Di(i.gt,o.mutation)}})(this.serializer,this.userId,t))}}function Xr(r){return Ie(r,Do)}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uv{St(e){return Ie(e,Lc)}getSessionToken(e){return this.St(e).get("sessionToken").next((t=>{const n=t==null?void 0:t.value;return n?pe.fromUint8Array(n):pe.EMPTY_BYTE_STRING}))}setSessionToken(e,t){return this.St(e).put({name:"sessionToken",value:t.toUint8Array()})}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{constructor(){}bt(e,t){this.Dt(e,t),t.vt()}Dt(e,t){if("nullValue"in e)this.Ct(t,5);else if("booleanValue"in e)this.Ct(t,10),t.Ft(e.booleanValue?1:0);else if("integerValue"in e)this.Ct(t,15),t.Ft(ae(e.integerValue));else if("doubleValue"in e){const n=ae(e.doubleValue);isNaN(n)?this.Ct(t,13):(this.Ct(t,15),Ti(n)?t.Ft(0):t.Ft(n))}else if("timestampValue"in e){let n=e.timestampValue;this.Ct(t,20),typeof n=="string"&&(n=vt(n)),t.Mt(`${n.seconds||""}`),t.Ft(n.nanos||0)}else if("stringValue"in e)this.xt(e.stringValue,t),this.Ot(t);else if("bytesValue"in e)this.Ct(t,30),t.Nt(wt(e.bytesValue)),this.Ot(t);else if("referenceValue"in e)this.Bt(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.Ct(t,45),t.Ft(n.latitude||0),t.Ft(n.longitude||0)}else"mapValue"in e?mp(e)?this.Ct(t,Number.MAX_SAFE_INTEGER):No(e)?this.Lt(e.mapValue,t):(this.kt(e.mapValue,t),this.Ot(t)):"arrayValue"in e?(this.qt(e.arrayValue,t),this.Ot(t)):M(19022,{Qt:e})}xt(e,t){this.Ct(t,25),this.$t(e,t)}$t(e,t){t.Mt(e)}kt(e,t){const n=e.fields||{};this.Ct(t,55);for(const i of Object.keys(n))this.xt(i,t),this.Dt(n[i],t)}Lt(e,t){var n,i;const s=e.fields||{};this.Ct(t,53);const o=dr,c=((i=(n=s[o].arrayValue)===null||n===void 0?void 0:n.values)===null||i===void 0?void 0:i.length)||0;this.Ct(t,15),t.Ft(ae(c)),this.xt(o,t),this.Dt(s[o],t)}qt(e,t){const n=e.values||[];this.Ct(t,50);for(const i of n)this.Dt(i,t)}Bt(e,t){this.Ct(t,37),O.fromName(e).path.forEach((n=>{this.Ct(t,60),this.$t(n,t)}))}Ct(e,t){e.Ft(t)}Ot(e){e.Ft(2)}}In.Ut=new In;/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law | agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES | CONDITIONS OF ANY KIND, either express | implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wn=255;function lv(r){if(r===0)return 8;let e=0;return r>>4||(e+=4,r<<=4),r>>6||(e+=2,r<<=2),r>>7||(e+=1),e}function Wh(r){const e=64-(function(n){let i=0;for(let s=0;s<8;++s){const o=lv(255&n[s]);if(i+=o,o!==8)break}return i})(r);return Math.ceil(e/8)}class hv{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Kt(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Wt(n.value),n=t.next();this.Gt()}zt(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.jt(n.value),n=t.next();this.Jt()}Ht(e){for(const t of e){const n=t.charCodeAt(0);if(n<128)this.Wt(n);else if(n<2048)this.Wt(960|n>>>6),this.Wt(128|63&n);else if(t<"\uD800"||"\uDBFF"<t)this.Wt(480|n>>>12),this.Wt(128|63&n>>>6),this.Wt(128|63&n);else{const i=t.codePointAt(0);this.Wt(240|i>>>18),this.Wt(128|63&i>>>12),this.Wt(128|63&i>>>6),this.Wt(128|63&i)}}this.Gt()}Yt(e){for(const t of e){const n=t.charCodeAt(0);if(n<128)this.jt(n);else if(n<2048)this.jt(960|n>>>6),this.jt(128|63&n);else if(t<"\uD800"||"\uDBFF"<t)this.jt(480|n>>>12),this.jt(128|63&n>>>6),this.jt(128|63&n);else{const i=t.codePointAt(0);this.jt(240|i>>>18),this.jt(128|63&i>>>12),this.jt(128|63&i>>>6),this.jt(128|63&i)}}this.Jt()}Zt(e){const t=this.Xt(e),n=Wh(t);this.en(1+n),this.buffer[this.position++]=255&n;for(let i=t.length-n;i<t.length;++i)this.buffer[this.position++]=255&t[i]}tn(e){const t=this.Xt(e),n=Wh(t);this.en(1+n),this.buffer[this.position++]=~(255&n);for(let i=t.length-n;i<t.length;++i)this.buffer[this.position++]=~(255&t[i])}nn(){this.rn(Wn),this.rn(255)}sn(){this._n(Wn),this._n(255)}reset(){this.position=0}seed(e){this.en(e.length),this.buffer.set(e,this.position),this.position+=e.length}an(){return this.buffer.slice(0,this.position)}Xt(e){const t=(function(s){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,s,!1),new Uint8Array(o.buffer)})(e),n=!!(128&t[0]);t[0]^=n?255:128;for(let i=1;i<t.length;++i)t[i]^=n?255:0;return t}Wt(e){const t=255&e;t===0?(this.rn(0),this.rn(255)):t===Wn?(this.rn(Wn),this.rn(0)):this.rn(t)}jt(e){const t=255&e;t===0?(this._n(0),this._n(255)):t===Wn?(this._n(Wn),this._n(0)):this._n(e)}Gt(){this.rn(0),this.rn(1)}Jt(){this._n(0),this._n(1)}rn(e){this.en(1),this.buffer[this.position++]=e}_n(e){this.en(1),this.buffer[this.position++]=~e}en(e){const t=e+this.position;if(t<=this.buffer.length)return;let n=2*this.buffer.length;n<t&&(n=t);const i=new Uint8Array(n);i.set(this.buffer),this.buffer=i}}class dv{constructor(e){this.un=e}Nt(e){this.un.Kt(e)}Mt(e){this.un.Ht(e)}Ft(e){this.un.Zt(e)}vt(){this.un.nn()}}class fv{constructor(e){this.un=e}Nt(e){this.un.zt(e)}Mt(e){this.un.Yt(e)}Ft(e){this.un.tn(e)}vt(){this.un.sn()}}class Jr{constructor(){this.un=new hv,this.cn=new dv(this.un),this.ln=new fv(this.un)}seed(e){this.un.seed(e)}hn(e){return e===0?this.cn:this.ln}an(){return this.un.an()}reset(){this.un.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(e,t,n,i){this.Pn=e,this.Tn=t,this.In=n,this.dn=i}En(){const e=this.dn.length,t=e===0||this.dn[e-1]===255?e+1:e,n=new Uint8Array(t);return n.set(this.dn,0),t!==e?n.set([0],this.dn.length):++n[n.length-1],new En(this.Pn,this.Tn,this.In,n)}An(e,t,n){return{indexId:this.Pn,uid:e,arrayValue:Bs(this.In),directionalValue:Bs(this.dn),orderedDocumentKey:Bs(t),documentKey:n.path.toArray()}}Rn(e,t,n){const i=this.An(e,t,n);return[i.indexId,i.uid,i.arrayValue,i.directionalValue,i.orderedDocumentKey,i.documentKey]}}function Nt(r,e){let t=r.Pn-e.Pn;return t!==0?t:(t=Hh(r.In,e.In),t!==0?t:(t=Hh(r.dn,e.dn),t!==0?t:O.comparator(r.Tn,e.Tn)))}function Hh(r,e){for(let t=0;t<r.length&&t<e.length;++t){const n=r[t]-e[t];if(n!==0)return n}return r.length-e.length}function Bs(r){return Kd()?(function(t){let n="";for(let i=0;i<t.length;i++)n+=String.fromCharCode(t[i]);return n})(r):r}function Qh(r){return typeof r!="string"?r:(function(t){const n=new Uint8Array(t.length);for(let i=0;i<t.length;i++)n[i]=t.charCodeAt(i);return n})(r)}class Xh{constructor(e){this.Vn=new re(((t,n)=>he.comparator(t.field,n.field))),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.mn=e.orderBy,this.fn=[];for(const t of e.filters){const n=t;n.isInequality()?this.Vn=this.Vn.add(n):this.fn.push(n)}}get gn(){return this.Vn.size>1}pn(e){if(U(e.collectionGroup===this.collectionId,49279),this.gn)return!1;const t=Ga(e);if(t!==void 0&&!this.yn(t))return!1;const n=mn(e);let i=new Set,s=0,o=0;for(;s<n.length&&this.yn(n[s]);++s)i=i.add(n[s].fieldPath.canonicalString());if(s===n.length)return!0;if(this.Vn.size>0){const c=this.Vn.getIterator().getNext();if(!i.has(c.field.canonicalString())){const u=n[s];if(!this.wn(c,u)||!this.Sn(this.mn[o++],u))return!1}++s}for(;s<n.length;++s){const c=n[s];if(o>=this.mn.length||!this.Sn(this.mn[o++],c))return!1}return!0}bn(){if(this.gn)return null;let e=new re(he.comparator);const t=[];for(const n of this.fn)if(!n.field.isKeyField())if(n.op==="array-contains"||n.op==="array-contains-any")t.push(new ks(n.field,2));else{if(e.has(n.field))continue;e=e.add(n.field),t.push(new ks(n.field,0))}for(const n of this.mn)n.field.isKeyField()||e.has(n.field)||(e=e.add(n.field),t.push(new ks(n.field,n.dir==="asc"?0:1)));return new Ys(Ys.UNKNOWN_ID,this.collectionId,t,Ei.empty())}yn(e){for(const t of this.fn)if(this.wn(t,e))return!0;return!1}wn(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const n=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===n}Sn(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sm(r){var e,t;if(U(r instanceof Q||r instanceof ne,20012),r instanceof Q){if(r instanceof Ap){const i=((t=(e=r.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map((s=>Q.create(r.field,"==",s))))||[];return ne.create(i,"or")}return r}const n=r.filters.map((i=>sm(i)));return ne.create(n,r.op)}function pv(r){if(r.getFilters().length===0)return[];const e=lc(sm(r));return U(om(e),7391),cc(e)||uc(e)?[e]:e.getFilters()}function cc(r){return r instanceof Q}function uc(r){return r instanceof ne&&qc(r)}function om(r){return cc(r)||uc(r)||(function(t){if(t instanceof ne&&Za(t)){for(const n of t.getFilters())if(!cc(n)&&!uc(n))return!1;return!0}return!1})(r)}function lc(r){if(U(r instanceof Q||r instanceof ne,34018),r instanceof Q)return r;if(r.filters.length===1)return lc(r.filters[0]);const e=r.filters.map((n=>lc(n)));let t=ne.create(e,r.op);return t=ao(t),om(t)?t:(U(t instanceof ne,64498),U(mr(t),40251),U(t.filters.length>1,57927),t.filters.reduce(((n,i)=>Jc(n,i))))}function Jc(r,e){let t;return U(r instanceof Q||r instanceof ne,38388),U(e instanceof Q||e instanceof ne,25473),t=r instanceof Q?e instanceof Q?(function(i,s){return ne.create([i,s],"and")})(r,e):Jh(r,e):e instanceof Q?Jh(e,r):(function(i,s){if(U(i.filters.length>0&&s.filters.length>0,48005),mr(i)&&mr(s))return Tp(i,s.getFilters());const o=Za(i)?i:s,c=Za(i)?s:i,u=o.filters.map((h=>Jc(h,c)));return ne.create(u,"or")})(r,e),ao(t)}function Jh(r,e){if(mr(e))return Tp(e,r.getFilters());{const t=e.filters.map((n=>Jc(r,n)));return ne.create(t,"or")}}function ao(r){if(U(r instanceof Q||r instanceof ne,11850),r instanceof Q)return r;const e=r.getFilters();if(e.length===1)return ao(e[0]);if(Ip(r))return r;const t=e.map((i=>ao(i))),n=[];return t.forEach((i=>{i instanceof Q?n.push(i):i instanceof ne&&(i.op===r.op?n.push(...i.filters):n.push(i))})),n.length===1?n[0]:ne.create(n,r.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mv{constructor(){this.Dn=new Yc}addToCollectionParentIndex(e,t){return this.Dn.add(t),w.resolve()}getCollectionParents(e,t){return w.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return w.resolve()}deleteFieldIndex(e,t){return w.resolve()}deleteAllFieldIndexes(e){return w.resolve()}createTargetIndexes(e,t){return w.resolve()}getDocumentsMatchingTarget(e,t){return w.resolve(null)}getIndexType(e,t){return w.resolve(0)}getFieldIndexes(e,t){return w.resolve([])}getNextCollectionGroupToUpdate(e){return w.resolve(null)}getMinOffset(e,t){return w.resolve(ze.min())}getMinOffsetFromCollectionGroup(e,t){return w.resolve(ze.min())}updateCollectionGroup(e,t,n){return w.resolve()}updateIndexEntries(e,t){return w.resolve()}}class Yc{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),i=this.index[t]||new re(Y.comparator),s=!i.has(n);return this.index[t]=i.add(n),s}has(e){const t=e.lastSegment(),n=e.popLast(),i=this.index[t];return i&&i.has(n)}getEntries(e){return(this.index[e]||new re(Y.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yh="IndexedDbIndexManager",vs=new Uint8Array(0);class gv{constructor(e,t){this.databaseId=t,this.vn=new Yc,this.Cn=new bt((n=>kn(n)),((n,i)=>$i(n,i))),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.vn.has(t)){const n=t.lastSegment(),i=t.popLast();e.addOnCommittedListener((()=>{this.vn.add(t)}));const s={collectionId:n,parent:ke(i)};return Zh(e).put(s)}return w.resolve()}getCollectionParents(e,t){const n=[],i=IDBKeyRange.bound([t,""],[$f(t),""],!1,!0);return Zh(e).j(i).next((s=>{for(const o of s){if(o.collectionId!==t)break;n.push(tt(o.parent))}return n}))}addFieldIndex(e,t){const n=Yr(e),i=(function(c){return{indexId:c.indexId,collectionGroup:c.collectionGroup,fields:c.fields.map((u=>[u.fieldPath.canonicalString(),u.kind]))}})(t);delete i.indexId;const s=n.add(i);if(t.indexState){const o=Qn(e);return s.next((c=>{o.put(zh(c,this.uid,t.indexState.sequenceNumber,t.indexState.offset))}))}return s.next()}deleteFieldIndex(e,t){const n=Yr(e),i=Qn(e),s=Hn(e);return n.delete(t.indexId).next((()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))).next((()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))))}deleteAllFieldIndexes(e){const t=Yr(e),n=Hn(e),i=Qn(e);return t.Y().next((()=>n.Y())).next((()=>i.Y()))}createTargetIndexes(e,t){return w.forEach(this.Fn(t),(n=>this.getIndexType(e,n).next((i=>{if(i===0||i===1){const s=new Xh(n).bn();if(s!=null)return this.addFieldIndex(e,s)}}))))}getDocumentsMatchingTarget(e,t){const n=Hn(e);let i=!0;const s=new Map;return w.forEach(this.Fn(t),(o=>this.Mn(e,o).next((c=>{i&&(i=!!c),s.set(o,c)})))).next((()=>{if(i){let o=W();const c=[];return w.forEach(s,((u,h)=>{D(Yh,`Using index ${(function(L){return`id=${L.indexId}|cg=${L.collectionGroup}|f=${L.fields.map((K=>`${K.fieldPath}:${K.kind}`)).join(",")}`})(u)} to execute ${kn(t)}`);const f=(function(L,K){const X=Ga(K);if(X===void 0)return null;for(const G of so(L,X.fieldPath))switch(G.op){case"array-contains-any":return G.value.arrayValue.values||[];case"array-contains":return[G.value]}return null})(h,u),m=(function(L,K){const X=new Map;for(const G of mn(K))for(const E of so(L,G.fieldPath))switch(E.op){case"==":case"in":X.set(G.fieldPath.canonicalString(),E.value);break;case"not-in":case"!=":return X.set(G.fieldPath.canonicalString(),E.value),Array.from(X.values())}return null})(h,u),g=(function(L,K){const X=[];let G=!0;for(const E of mn(K)){const _=E.kind===0?Vh(L,E.fieldPath,L.startAt):Dh(L,E.fieldPath,L.startAt);X.push(_.value),G&&(G=_.inclusive)}return new pr(X,G)})(h,u),b=(function(L,K){const X=[];let G=!0;for(const E of mn(K)){const _=E.kind===0?Dh(L,E.fieldPath,L.endAt):Vh(L,E.fieldPath,L.endAt);X.push(_.value),G&&(G=_.inclusive)}return new pr(X,G)})(h,u),C=this.xn(u,h,g),k=this.xn(u,h,b),V=this.On(u,h,m),$=this.Nn(u.indexId,f,C,g.inclusive,k,b.inclusive,V);return w.forEach($,(j=>n.H(j,t.limit).next((L=>{L.forEach((K=>{const X=O.fromSegments(K.documentKey);o.has(X)||(o=o.add(X),c.push(X))}))}))))})).next((()=>c))}return w.resolve(null)}))}Fn(e){let t=this.Cn.get(e);return t||(e.filters.length===0?t=[e]:t=pv(ne.create(e.filters,"and")).map((n=>tc(e.path,e.collectionGroup,e.orderBy,n.getFilters(),e.limit,e.startAt,e.endAt))),this.Cn.set(e,t),t)}Nn(e,t,n,i,s,o,c){const u=(t!=null?t.length:1)*Math.max(n.length,s.length),h=u/(t!=null?t.length:1),f=[];for(let m=0;m<u;++m){const g=t?this.Bn(t[m/h]):vs,b=this.Ln(e,g,n[m%h],i),C=this.kn(e,g,s[m%h],o),k=c.map((V=>this.Ln(e,g,V,!0)));f.push(...this.createRange(b,C,k))}return f}Ln(e,t,n,i){const s=new En(e,O.empty(),t,n);return i?s:s.En()}kn(e,t,n,i){const s=new En(e,O.empty(),t,n);return i?s.En():s}Mn(e,t){const n=new Xh(t),i=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,i).next((s=>{let o=null;for(const c of s)n.pn(c)&&(!o||c.fields.length>o.fields.length)&&(o=c);return o}))}getIndexType(e,t){let n=2;const i=this.Fn(t);return w.forEach(i,(s=>this.Mn(e,s).next((o=>{o?n!==0&&o.fields.length<(function(u){let h=new re(he.comparator),f=!1;for(const m of u.filters)for(const g of m.getFlattenedFilters())g.field.isKeyField()||(g.op==="array-contains"||g.op==="array-contains-any"?f=!0:h=h.add(g.field));for(const m of u.orderBy)m.field.isKeyField()||(h=h.add(m.field));return h.size+(f?1:0)})(s)&&(n=1):n=0})))).next((()=>(function(o){return o.limit!==null})(t)&&i.length>1&&n===2?1:n))}qn(e,t){const n=new Jr;for(const i of mn(e)){const s=t.data.field(i.fieldPath);if(s==null)return null;const o=n.hn(i.kind);In.Ut.bt(s,o)}return n.an()}Bn(e){const t=new Jr;return In.Ut.bt(e,t.hn(0)),t.an()}Qn(e,t){const n=new Jr;return In.Ut.bt(Pi(this.databaseId,t),n.hn((function(s){const o=mn(s);return o.length===0?0:o[o.length-1].kind})(e))),n.an()}On(e,t,n){if(n===null)return[];let i=[];i.push(new Jr);let s=0;for(const o of mn(e)){const c=n[s++];for(const u of i)if(this.$n(t,o.fieldPath)&&Si(c))i=this.Un(i,o,c);else{const h=u.hn(o.kind);In.Ut.bt(c,h)}}return this.Kn(i)}xn(e,t,n){return this.On(e,t,n.position)}Kn(e){const t=[];for(let n=0;n<e.length;++n)t[n]=e[n].an();return t}Un(e,t,n){const i=[...e],s=[];for(const o of n.arrayValue.values||[])for(const c of i){const u=new Jr;u.seed(c.an()),In.Ut.bt(o,u.hn(t.kind)),s.push(u)}return s}$n(e,t){return!!e.filters.find((n=>n instanceof Q&&n.field.isEqual(t)&&(n.op==="in"||n.op==="not-in")))}getFieldIndexes(e,t){const n=Yr(e),i=Qn(e);return(t?n.j(Ha,IDBKeyRange.bound(t,t)):n.j()).next((s=>{const o=[];return w.forEach(s,(c=>i.get([c.indexId,this.uid]).next((u=>{o.push((function(f,m){const g=m?new Ei(m.sequenceNumber,new ze(xn(m.readTime),new O(tt(m.documentKey)),m.largestBatchId)):Ei.empty(),b=f.fields.map((([C,k])=>new ks(he.fromServerFormat(C),k)));return new Ys(f.indexId,f.collectionGroup,b,g)})(c,u))})))).next((()=>o))}))}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next((t=>t.length===0?null:(t.sort(((n,i)=>{const s=n.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:z(n.collectionGroup,i.collectionGroup)})),t[0].collectionGroup)))}updateCollectionGroup(e,t,n){const i=Yr(e),s=Qn(e);return this.Wn(e).next((o=>i.j(Ha,IDBKeyRange.bound(t,t)).next((c=>w.forEach(c,(u=>s.put(zh(u.indexId,this.uid,o,n))))))))}updateIndexEntries(e,t){const n=new Map;return w.forEach(t,((i,s)=>{const o=n.get(i.collectionGroup);return(o?w.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next((c=>(n.set(i.collectionGroup,c),w.forEach(c,(u=>this.Gn(e,i,u).next((h=>{const f=this.zn(s,u);return h.isEqual(f)?w.resolve():this.jn(e,s,u,h,f)})))))))}))}Jn(e,t,n,i){return Hn(e).put(i.An(this.uid,this.Qn(n,t.key),t.key))}Hn(e,t,n,i){return Hn(e).delete(i.Rn(this.uid,this.Qn(n,t.key),t.key))}Gn(e,t,n){const i=Hn(e);let s=new re(Nt);return i.X({index:np,range:IDBKeyRange.only([n.indexId,this.uid,Bs(this.Qn(n,t))])},((o,c)=>{s=s.add(new En(n.indexId,t,Qh(c.arrayValue),Qh(c.directionalValue)))})).next((()=>s))}zn(e,t){let n=new re(Nt);const i=this.qn(t,e);if(i==null)return n;const s=Ga(t);if(s!=null){const o=e.data.field(s.fieldPath);if(Si(o))for(const c of o.arrayValue.values||[])n=n.add(new En(t.indexId,e.key,this.Bn(c),i))}else n=n.add(new En(t.indexId,e.key,vs,i));return n}jn(e,t,n,i,s){D(Yh,"Updating index entries for document '%s'",t.key);const o=[];return(function(u,h,f,m,g){const b=u.getIterator(),C=h.getIterator();let k=Gn(b),V=Gn(C);for(;k||V;){let $=!1,j=!1;if(k&&V){const L=f(k,V);L<0?j=!0:L>0&&($=!0)}else k!=null?j=!0:$=!0;$?(m(V),V=Gn(C)):j?(g(k),k=Gn(b)):(k=Gn(b),V=Gn(C))}})(i,s,Nt,(c=>{o.push(this.Jn(e,t,n,c))}),(c=>{o.push(this.Hn(e,t,n,c))})),w.waitFor(o)}Wn(e){let t=1;return Qn(e).X({index:tp,reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},((n,i,s)=>{s.done(),t=i.sequenceNumber+1})).next((()=>t))}createRange(e,t,n){n=n.sort(((o,c)=>Nt(o,c))).filter(((o,c,u)=>!c||Nt(o,u[c-1])!==0));const i=[];i.push(e);for(const o of n){const c=Nt(o,e),u=Nt(o,t);if(c===0)i[0]=e.En();else if(c>0&&u<0)i.push(o),i.push(o.En());else if(u>0)break}i.push(t);const s=[];for(let o=0;o<i.length;o+=2){if(this.Yn(i[o],i[o+1]))return[];const c=i[o].Rn(this.uid,vs,O.empty()),u=i[o+1].Rn(this.uid,vs,O.empty());s.push(IDBKeyRange.bound(c,u))}return s}Yn(e,t){return Nt(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(ed)}getMinOffset(e,t){return w.mapArray(this.Fn(t),(n=>this.Mn(e,n).next((i=>i||M(44426))))).next(ed)}}function Zh(r){return Ie(r,Ai)}function Hn(r){return Ie(r,di)}function Yr(r){return Ie(r,Mc)}function Qn(r){return Ie(r,hi)}function ed(r){U(r.length!==0,28825);let e=r[0].indexState.offset,t=e.largestBatchId;for(let n=1;n<r.length;n++){const i=r[n].indexState.offset;Nc(i,e)<0&&(e=i),t<i.largestBatchId&&(t=i.largestBatchId)}return new ze(e.readTime,e.documentKey,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const td={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},am=41943040;class De{static withCacheSize(e){return new De(e,De.DEFAULT_COLLECTION_PERCENTILE,De.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cm(r,e,t){const n=r.store(Qe),i=r.store(cr),s=[],o=IDBKeyRange.only(t.batchId);let c=0;const u=n.X({range:o},((f,m,g)=>(c++,g.delete())));s.push(u.next((()=>{U(c===1,47070,{batchId:t.batchId})})));const h=[];for(const f of t.mutations){const m=Yf(e,f.key.path,t.batchId);s.push(i.delete(m)),h.push(f.key)}return w.waitFor(s).next((()=>h))}function co(r){if(!r)return 0;let e;if(r.document)e=r.document;else if(r.unknownDocument)e=r.unknownDocument;else{if(!r.noDocument)throw M(14731);e=r.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */De.DEFAULT_COLLECTION_PERCENTILE=10,De.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,De.DEFAULT=new De(am,De.DEFAULT_COLLECTION_PERCENTILE,De.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),De.DISABLED=new De(-1,0,0);class Fo{constructor(e,t,n,i){this.userId=e,this.serializer=t,this.indexManager=n,this.referenceDelegate=i,this.Zn={}}static yt(e,t,n,i){U(e.uid!=="",64387);const s=e.isAuthenticated()?e.uid:"";return new Fo(s,t,n,i)}checkEmpty(e){let t=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return xt(e).X({index:Tn,range:n},((i,s,o)=>{t=!1,o.done()})).next((()=>t))}addMutationBatch(e,t,n,i){const s=tr(e),o=xt(e);return o.add({}).next((c=>{U(typeof c=="number",49019);const u=new Gc(c,t,n,i),h=(function(b,C,k){const V=k.baseMutations.map((j=>Di(b.gt,j))),$=k.mutations.map((j=>Di(b.gt,j)));return{userId:C,batchId:k.batchId,localWriteTimeMs:k.localWriteTime.toMillis(),baseMutations:V,mutations:$}})(this.serializer,this.userId,u),f=[];let m=new re(((g,b)=>z(g.canonicalString(),b.canonicalString())));for(const g of i){const b=Yf(this.userId,g.key.path,c);m=m.add(g.key.path.popLast()),f.push(o.put(h)),f.push(s.put(b,QE))}return m.forEach((g=>{f.push(this.indexManager.addToCollectionParentIndex(e,g))})),e.addOnCommittedListener((()=>{this.Zn[c]=u.keys()})),w.waitFor(f).next((()=>u))}))}lookupMutationBatch(e,t){return xt(e).get(t).next((n=>n?(U(n.userId===this.userId,48,"Unexpected user for mutation batch",{userId:n.userId,batchId:t}),yn(this.serializer,n)):null))}Xn(e,t){return this.Zn[t]?w.resolve(this.Zn[t]):this.lookupMutationBatch(e,t).next((n=>{if(n){const i=n.keys();return this.Zn[t]=i,i}return null}))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,i=IDBKeyRange.lowerBound([this.userId,n]);let s=null;return xt(e).X({index:Tn,range:i},((o,c,u)=>{c.userId===this.userId&&(U(c.batchId>=n,47524,{er:n}),s=yn(this.serializer,c)),u.done()})).next((()=>s))}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=wn;return xt(e).X({index:Tn,range:t,reverse:!0},((i,s,o)=>{n=s.batchId,o.done()})).next((()=>n))}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,wn],[this.userId,Number.POSITIVE_INFINITY]);return xt(e).j(Tn,t).next((n=>n.map((i=>yn(this.serializer,i)))))}getAllMutationBatchesAffectingDocumentKey(e,t){const n=Ns(this.userId,t.path),i=IDBKeyRange.lowerBound(n),s=[];return tr(e).X({range:i},((o,c,u)=>{const[h,f,m]=o,g=tt(f);if(h===this.userId&&t.path.isEqual(g))return xt(e).get(m).next((b=>{if(!b)throw M(61480,{tr:o,batchId:m});U(b.userId===this.userId,10503,"Unexpected user for mutation batch",{userId:b.userId,batchId:m}),s.push(yn(this.serializer,b))}));u.done()})).next((()=>s))}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new re(z);const i=[];return t.forEach((s=>{const o=Ns(this.userId,s.path),c=IDBKeyRange.lowerBound(o),u=tr(e).X({range:c},((h,f,m)=>{const[g,b,C]=h,k=tt(b);g===this.userId&&s.path.isEqual(k)?n=n.add(C):m.done()}));i.push(u)})),w.waitFor(i).next((()=>this.nr(e,n)))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,i=n.length+1,s=Ns(this.userId,n),o=IDBKeyRange.lowerBound(s);let c=new re(z);return tr(e).X({range:o},((u,h,f)=>{const[m,g,b]=u,C=tt(g);m===this.userId&&n.isPrefixOf(C)?C.length===i&&(c=c.add(b)):f.done()})).next((()=>this.nr(e,c)))}nr(e,t){const n=[],i=[];return t.forEach((s=>{i.push(xt(e).get(s).next((o=>{if(o===null)throw M(35274,{batchId:s});U(o.userId===this.userId,9748,"Unexpected user for mutation batch",{userId:o.userId,batchId:s}),n.push(yn(this.serializer,o))})))})),w.waitFor(i).next((()=>n))}removeMutationBatch(e,t){return cm(e.ce,this.userId,t).next((n=>(e.addOnCommittedListener((()=>{this.rr(t.batchId)})),w.forEach(n,(i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))))}rr(e){delete this.Zn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next((t=>{if(!t)return w.resolve();const n=IDBKeyRange.lowerBound((function(o){return[o]})(this.userId)),i=[];return tr(e).X({range:n},((s,o,c)=>{if(s[0]===this.userId){const u=tt(s[1]);i.push(u)}else c.done()})).next((()=>{U(i.length===0,56720,{ir:i.map((s=>s.canonicalString()))})}))}))}containsKey(e,t){return um(e,this.userId,t)}sr(e){return lm(e).get(this.userId).next((t=>t||{userId:this.userId,lastAcknowledgedBatchId:wn,lastStreamToken:""}))}}function um(r,e,t){const n=Ns(e,t.path),i=n[1],s=IDBKeyRange.lowerBound(n);let o=!1;return tr(r).X({range:s,Z:!0},((c,u,h)=>{const[f,m,g]=c;f===e&&m===i&&(o=!0),h.done()})).next((()=>o))}function xt(r){return Ie(r,Qe)}function tr(r){return Ie(r,cr)}function lm(r){return Ie(r,vi)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new On(0)}static ur(){return new On(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _v{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.cr(e).next((t=>{const n=new On(t.highestTargetId);return t.highestTargetId=n.next(),this.lr(e,t).next((()=>t.highestTargetId))}))}getLastRemoteSnapshotVersion(e){return this.cr(e).next((t=>B.fromTimestamp(new te(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds))))}getHighestSequenceNumber(e){return this.cr(e).next((t=>t.highestListenSequenceNumber))}setTargetsMetadata(e,t,n){return this.cr(e).next((i=>(i.highestListenSequenceNumber=t,n&&(i.lastRemoteSnapshotVersion=n.toTimestamp()),t>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=t),this.lr(e,i))))}addTargetData(e,t){return this.hr(e,t).next((()=>this.cr(e).next((n=>(n.targetCount+=1,this.Pr(t,n),this.lr(e,n))))))}updateTargetData(e,t){return this.hr(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next((()=>Xn(e).delete(t.targetId))).next((()=>this.cr(e))).next((n=>(U(n.targetCount>0,8065),n.targetCount-=1,this.lr(e,n))))}removeTargets(e,t,n){let i=0;const s=[];return Xn(e).X(((o,c)=>{const u=oi(c);u.sequenceNumber<=t&&n.get(u.targetId)===null&&(i++,s.push(this.removeTargetData(e,u)))})).next((()=>w.waitFor(s))).next((()=>i))}forEachTarget(e,t){return Xn(e).X(((n,i)=>{const s=oi(i);t(s)}))}cr(e){return nd(e).get(to).next((t=>(U(t!==null,2888),t)))}lr(e,t){return nd(e).put(to,t)}hr(e,t){return Xn(e).put(rm(this.serializer,t))}Pr(e,t){let n=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,n=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,n=!0),n}getTargetCount(e){return this.cr(e).next((t=>t.targetCount))}getTargetData(e,t){const n=kn(t),i=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let s=null;return Xn(e).X({range:i,index:ep},((o,c,u)=>{const h=oi(c);$i(t,h.target)&&(s=h,u.done())})).next((()=>s))}addMatchingKeys(e,t,n){const i=[],s=Bt(e);return t.forEach((o=>{const c=ke(o.path);i.push(s.put({targetId:n,path:c})),i.push(this.referenceDelegate.addReference(e,n,o))})),w.waitFor(i)}removeMatchingKeys(e,t,n){const i=Bt(e);return w.forEach(t,(s=>{const o=ke(s.path);return w.waitFor([i.delete([n,o]),this.referenceDelegate.removeReference(e,n,s)])}))}removeMatchingKeysForTargetId(e,t){const n=Bt(e),i=IDBKeyRange.bound([t],[t+1],!1,!0);return n.delete(i)}getMatchingKeysForTargetId(e,t){const n=IDBKeyRange.bound([t],[t+1],!1,!0),i=Bt(e);let s=W();return i.X({range:n,Z:!0},((o,c,u)=>{const h=tt(o[1]),f=new O(h);s=s.add(f)})).next((()=>s))}containsKey(e,t){const n=ke(t.path),i=IDBKeyRange.bound([n],[$f(n)],!1,!0);let s=0;return Bt(e).X({index:Oc,Z:!0,range:i},(([o,c],u,h)=>{o!==0&&(s++,h.done())})).next((()=>s>0))}Et(e,t){return Xn(e).get(t).next((n=>n?oi(n):null))}}function Xn(r){return Ie(r,ur)}function nd(r){return Ie(r,An)}function Bt(r){return Ie(r,lr)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rd="LruGarbageCollector",hm=1048576;function id([r,e],[t,n]){const i=z(r,t);return i===0?z(e,n):i}class yv{constructor(e){this.Tr=e,this.buffer=new re(id),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const n=this.buffer.last();id(t,n)<0&&(this.buffer=this.buffer.delete(n).add(t))}}get maxValue(){return this.buffer.last()[0]}}class dm{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){D(rd,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){rn(t)?D(rd,"Ignoring IndexedDB error during garbage collection: ",t):await nn(t)}await this.Rr(3e5)}))}}class Iv{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next((n=>Math.floor(t/100*n)))}nthSequenceNumber(e,t){if(t===0)return w.resolve(Me.ue);const n=new yv(t);return this.Vr.forEachTarget(e,(i=>n.Er(i.sequenceNumber))).next((()=>this.Vr.gr(e,(i=>n.Er(i))))).next((()=>n.maxValue))}removeTargets(e,t,n){return this.Vr.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(D("LruGarbageCollector","Garbage collection skipped; disabled"),w.resolve(td)):this.getCacheSize(e).next((n=>n<this.params.cacheSizeCollectionThreshold?(D("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),td):this.pr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let n,i,s,o,c,u,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((m=>(m>this.params.maximumSequenceNumbersToCollect?(D("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),i=this.params.maximumSequenceNumbersToCollect):i=m,o=Date.now(),this.nthSequenceNumber(e,i)))).next((m=>(n=m,c=Date.now(),this.removeTargets(e,n,t)))).next((m=>(s=m,u=Date.now(),this.removeOrphanedDocuments(e,n)))).next((m=>(h=Date.now(),Jn()<=H.DEBUG&&D("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${i} in `+(c-o)+`ms
	Removed ${s} targets in `+(u-c)+`ms
	Removed ${m} documents in `+(h-u)+`ms
Total Duration: ${h-f}ms`),w.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:m}))))}}function fm(r,e){return new Iv(r,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ev{constructor(e,t){this.db=e,this.garbageCollector=fm(this,t)}mr(e){const t=this.yr(e);return this.db.getTargetCache().getTargetCount(e).next((n=>t.next((i=>n+i))))}yr(e){let t=0;return this.gr(e,(n=>{t++})).next((()=>t))}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}gr(e,t){return this.wr(e,((n,i)=>t(i)))}addReference(e,t,n){return ws(e,n)}removeReference(e,t,n){return ws(e,n)}removeTargets(e,t,n){return this.db.getTargetCache().removeTargets(e,t,n)}markPotentiallyOrphaned(e,t){return ws(e,t)}Sr(e,t){return(function(i,s){let o=!1;return lm(i).ee((c=>um(i,c,s).next((u=>(u&&(o=!0),w.resolve(!u)))))).next((()=>o))})(e,t)}removeOrphanedDocuments(e,t){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.wr(e,((o,c)=>{if(c<=t){const u=this.Sr(e,o).next((h=>{if(!h)return s++,n.getEntry(e,o).next((()=>(n.removeEntry(o,B.min()),Bt(e).delete((function(m){return[0,ke(m.path)]})(o)))))}));i.push(u)}})).next((()=>w.waitFor(i))).next((()=>n.apply(e))).next((()=>s))}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,n)}updateLimboDocument(e,t){return ws(e,t)}wr(e,t){const n=Bt(e);let i,s=Me.ue;return n.X({index:Oc},(([o,c],{path:u,sequenceNumber:h})=>{o===0?(s!==Me.ue&&t(new O(tt(i)),s),s=h,i=u):s=Me.ue})).next((()=>{s!==Me.ue&&t(new O(tt(i)),s)}))}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function ws(r,e){return Bt(r).put((function(n,i){return{targetId:0,path:ke(n.path),sequenceNumber:i}})(e,r.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pm{constructor(){this.changes=new bt((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ce.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return n!==void 0?w.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tv{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,n){return fn(e).put(n)}removeEntry(e,t,n){return fn(e).delete((function(s,o){const c=s.path.toArray();return[c.slice(0,c.length-2),c[c.length-2],oo(o),c[c.length-1]]})(t,n))}updateMetadata(e,t){return this.getMetadata(e).next((n=>(n.byteSize+=t,this.br(e,n))))}getEntry(e,t){let n=ce.newInvalidDocument(t);return fn(e).X({index:xs,range:IDBKeyRange.only(Zr(t))},((i,s)=>{n=this.Dr(t,s)})).next((()=>n))}vr(e,t){let n={size:0,document:ce.newInvalidDocument(t)};return fn(e).X({index:xs,range:IDBKeyRange.only(Zr(t))},((i,s)=>{n={document:this.Dr(t,s),size:co(s)}})).next((()=>n))}getEntries(e,t){let n=je();return this.Cr(e,t,((i,s)=>{const o=this.Dr(i,s);n=n.insert(i,o)})).next((()=>n))}Fr(e,t){let n=je(),i=new se(O.comparator);return this.Cr(e,t,((s,o)=>{const c=this.Dr(s,o);n=n.insert(s,c),i=i.insert(s,co(o))})).next((()=>({documents:n,Mr:i})))}Cr(e,t,n){if(t.isEmpty())return w.resolve();let i=new re(ad);t.forEach((u=>i=i.add(u)));const s=IDBKeyRange.bound(Zr(i.first()),Zr(i.last())),o=i.getIterator();let c=o.getNext();return fn(e).X({index:xs,range:s},((u,h,f)=>{const m=O.fromSegments([...h.prefixPath,h.collectionGroup,h.documentId]);for(;c&&ad(c,m)<0;)n(c,null),c=o.getNext();c&&c.isEqual(m)&&(n(c,h),c=o.hasNext()?o.getNext():null),c?f.G(Zr(c)):f.done()})).next((()=>{for(;c;)n(c,null),c=o.hasNext()?o.getNext():null}))}getDocumentsMatchingQuery(e,t,n,i,s){const o=t.path,c=[o.popLast().toArray(),o.lastSegment(),oo(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],u=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return fn(e).j(IDBKeyRange.bound(c,u,!0)).next((h=>{s==null||s.incrementDocumentReadCount(h.length);let f=je();for(const m of h){const g=this.Dr(O.fromSegments(m.prefixPath.concat(m.collectionGroup,m.documentId)),m);g.isFoundDocument()&&(Gi(t,g)||i.has(g.key))&&(f=f.insert(g.key,g))}return f}))}getAllFromCollectionGroup(e,t,n,i){let s=je();const o=od(t,n),c=od(t,ze.max());return fn(e).X({index:Zf,range:IDBKeyRange.bound(o,c,!0)},((u,h,f)=>{const m=this.Dr(O.fromSegments(h.prefixPath.concat(h.collectionGroup,h.documentId)),h);s=s.insert(m.key,m),s.size===i&&f.done()})).next((()=>s))}newChangeBuffer(e){return new vv(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next((t=>t.byteSize))}getMetadata(e){return sd(e).get(Wa).next((t=>(U(!!t,20021),t)))}br(e,t){return sd(e).put(Wa,t)}Dr(e,t){if(t){const n=av(this.serializer,t);if(!(n.isNoDocument()&&n.version.isEqual(B.min())))return n}return ce.newInvalidDocument(e)}}function mm(r){return new Tv(r)}class vv extends pm{constructor(e,t){super(),this.Or=e,this.trackRemovals=t,this.Nr=new bt((n=>n.toString()),((n,i)=>n.isEqual(i)))}applyChanges(e){const t=[];let n=0,i=new re(((s,o)=>z(s.canonicalString(),o.canonicalString())));return this.changes.forEach(((s,o)=>{const c=this.Nr.get(s);if(t.push(this.Or.removeEntry(e,s,c.readTime)),o.isValidDocument()){const u=qh(this.Or.serializer,o);i=i.add(s.path.popLast());const h=co(u);n+=h-c.size,t.push(this.Or.addEntry(e,s,u))}else if(n-=c.size,this.trackRemovals){const u=qh(this.Or.serializer,o.convertToNoDocument(B.min()));t.push(this.Or.addEntry(e,s,u))}})),i.forEach((s=>{t.push(this.Or.indexManager.addToCollectionParentIndex(e,s))})),t.push(this.Or.updateMetadata(e,n)),w.waitFor(t)}getFromCache(e,t){return this.Or.vr(e,t).next((n=>(this.Nr.set(t,{size:n.size,readTime:n.document.readTime}),n.document)))}getAllFromCache(e,t){return this.Or.Fr(e,t).next((({documents:n,Mr:i})=>(i.forEach(((s,o)=>{this.Nr.set(s,{size:o,readTime:n.get(s).readTime})})),n)))}}function sd(r){return Ie(r,wi)}function fn(r){return Ie(r,eo)}function Zr(r){const e=r.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function od(r,e){const t=e.documentKey.path.toArray();return[r,oo(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function ad(r,e){const t=r.path.toArray(),n=e.path.toArray();let i=0;for(let s=0;s<t.length-2&&s<n.length-2;++s)if(i=z(t[s],n[s]),i)return i;return i=z(t.length,n.length),i||(i=z(t[t.length-2],n[n.length-2]),i||z(t[t.length-1],n[n.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wv{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gm{constructor(e,t,n,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=i}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((i=>(n=i,this.remoteDocumentCache.getEntry(e,t)))).next((i=>(n!==null&&gi(n.mutation,i,Le.empty(),te.now()),i)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((n=>this.getLocalViewOfDocuments(e,n,W()).next((()=>n))))}getLocalViewOfDocuments(e,t,n=W()){const i=nt();return this.populateOverlays(e,i,t).next((()=>this.computeViews(e,t,i,n).next((s=>{let o=ii();return s.forEach(((c,u)=>{o=o.insert(c,u.overlayedDocument)})),o}))))}getOverlayedDocuments(e,t){const n=nt();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,W())))}populateOverlays(e,t,n){const i=[];return n.forEach((s=>{t.has(s)||i.push(s)})),this.documentOverlayCache.getOverlays(e,i).next((s=>{s.forEach(((o,c)=>{t.set(o,c)}))}))}computeViews(e,t,n,i){let s=je();const o=mi(),c=(function(){return mi()})();return t.forEach(((u,h)=>{const f=n.get(h.key);i.has(h.key)&&(f===void 0||f.mutation instanceof Pt)?s=s.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),gi(f.mutation,h,f.mutation.getFieldMask(),te.now())):o.set(h.key,Le.empty())})),this.recalculateAndSaveOverlays(e,s).next((u=>(u.forEach(((h,f)=>o.set(h,f))),t.forEach(((h,f)=>{var m;return c.set(h,new wv(f,(m=o.get(h))!==null&&m!==void 0?m:null))})),c)))}recalculateAndSaveOverlays(e,t){const n=mi();let i=new se(((o,c)=>o-c)),s=W();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((o=>{for(const c of o)c.keys().forEach((u=>{const h=t.get(u);if(h===null)return;let f=n.get(u)||Le.empty();f=c.applyToLocalView(h,f),n.set(u,f);const m=(i.get(c.batchId)||W()).add(u);i=i.insert(c.batchId,m)}))})).next((()=>{const o=[],c=i.getReverseIterator();for(;c.hasNext();){const u=c.getNext(),h=u.key,f=u.value,m=kp();f.forEach((g=>{if(!s.has(g)){const b=Up(t.get(g),n.get(g));b!==null&&m.set(g,b),s=s.add(g)}})),o.push(this.documentOverlayCache.saveOverlays(e,h,m))}return w.waitFor(o)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((n=>this.recalculateAndSaveOverlays(e,n)))}getDocumentsMatchingQuery(e,t,n,i){return(function(o){return O.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):bp(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,i):this.getDocumentsMatchingCollectionQuery(e,t,n,i)}getNextDocuments(e,t,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,i).next((s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,i-s.size):w.resolve(nt());let c=ar,u=s;return o.next((h=>w.forEach(h,((f,m)=>(c<m.largestBatchId&&(c=m.largestBatchId),s.get(f)?w.resolve():this.remoteDocumentCache.getEntry(e,f).next((g=>{u=u.insert(f,g)}))))).next((()=>this.populateOverlays(e,h,s))).next((()=>this.computeViews(e,u,h,W()))).next((f=>({batchId:c,changes:Dp(f)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new O(t)).next((n=>{let i=ii();return n.isFoundDocument()&&(i=i.insert(n.key,n)),i}))}getDocumentsMatchingCollectionGroupQuery(e,t,n,i){const s=t.collectionGroup;let o=ii();return this.indexManager.getCollectionParents(e,s).next((c=>w.forEach(c,(u=>{const h=(function(m,g){return new zi(g,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)})(t,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,n,i).next((f=>{f.forEach(((m,g)=>{o=o.insert(m,g)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,t,n,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next((o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,s,i)))).next((o=>{s.forEach(((u,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,ce.newInvalidDocument(f)))}));let c=ii();return o.forEach(((u,h)=>{const f=s.get(u);f!==void 0&&gi(f.mutation,h,Le.empty(),te.now()),Gi(t,h)&&(c=c.insert(u,h))})),c}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Av{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return w.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,(function(i){return{id:i.id,version:i.version,createTime:Te(i.createTime)}})(t)),w.resolve()}getNamedQuery(e,t){return w.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,(function(i){return{name:i.name,query:im(i.bundledQuery),readTime:Te(i.readTime)}})(t)),w.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rv{constructor(){this.overlays=new se(O.comparator),this.kr=new Map}getOverlay(e,t){return w.resolve(this.overlays.get(t))}getOverlays(e,t){const n=nt();return w.forEach(t,(i=>this.getOverlay(e,i).next((s=>{s!==null&&n.set(i,s)})))).next((()=>n))}saveOverlays(e,t,n){return n.forEach(((i,s)=>{this.wt(e,t,s)})),w.resolve()}removeOverlaysForBatchId(e,t,n){const i=this.kr.get(n);return i!==void 0&&(i.forEach((s=>this.overlays=this.overlays.remove(s))),this.kr.delete(n)),w.resolve()}getOverlaysForCollection(e,t,n){const i=nt(),s=t.length+1,o=new O(t.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const u=c.getNext().value,h=u.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===s&&u.largestBatchId>n&&i.set(u.getKey(),u)}return w.resolve(i)}getOverlaysForCollectionGroup(e,t,n,i){let s=new se(((h,f)=>h-f));const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>n){let f=s.get(h.largestBatchId);f===null&&(f=nt(),s=s.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const c=nt(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach(((h,f)=>c.set(h,f))),!(c.size()>=i)););return w.resolve(c)}wt(e,t,n){const i=this.overlays.get(n.key);if(i!==null){const o=this.kr.get(i.largestBatchId).delete(n.key);this.kr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(n.key,new Hc(t,n));let s=this.kr.get(t);s===void 0&&(s=W(),this.kr.set(t,s)),this.kr.set(t,s.add(n.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bv{constructor(){this.sessionToken=pe.EMPTY_BYTE_STRING}getSessionToken(e){return w.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,w.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc{constructor(){this.qr=new re(Ee.Qr),this.$r=new re(Ee.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const n=new Ee(e,t);this.qr=this.qr.add(n),this.$r=this.$r.add(n)}Kr(e,t){e.forEach((n=>this.addReference(n,t)))}removeReference(e,t){this.Wr(new Ee(e,t))}Gr(e,t){e.forEach((n=>this.removeReference(n,t)))}zr(e){const t=new O(new Y([])),n=new Ee(t,e),i=new Ee(t,e+1),s=[];return this.$r.forEachInRange([n,i],(o=>{this.Wr(o),s.push(o.key)})),s}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new O(new Y([])),n=new Ee(t,e),i=new Ee(t,e+1);let s=W();return this.$r.forEachInRange([n,i],(o=>{s=s.add(o.key)})),s}containsKey(e){const t=new Ee(e,0),n=this.qr.firstAfterOrEqual(t);return n!==null&&e.isEqual(n.key)}}class Ee{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return O.comparator(e.key,t.key)||z(e.Hr,t.Hr)}static Ur(e,t){return z(e.Hr,t.Hr)||O.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pv{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new re(Ee.Qr)}checkEmpty(e){return w.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,n,i){const s=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Gc(s,t,n,i);this.mutationQueue.push(o);for(const c of i)this.Yr=this.Yr.add(new Ee(c.key,s)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return w.resolve(o)}lookupMutationBatch(e,t){return w.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,i=this.Xr(n),s=i<0?0:i;return w.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return w.resolve(this.mutationQueue.length===0?wn:this.er-1)}getAllMutationBatches(e){return w.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new Ee(t,0),i=new Ee(t,Number.POSITIVE_INFINITY),s=[];return this.Yr.forEachInRange([n,i],(o=>{const c=this.Zr(o.Hr);s.push(c)})),w.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new re(z);return t.forEach((i=>{const s=new Ee(i,0),o=new Ee(i,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([s,o],(c=>{n=n.add(c.Hr)}))})),w.resolve(this.ei(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,i=n.length+1;let s=n;O.isDocumentKey(s)||(s=s.child(""));const o=new Ee(new O(s),0);let c=new re(z);return this.Yr.forEachWhile((u=>{const h=u.key.path;return!!n.isPrefixOf(h)&&(h.length===i&&(c=c.add(u.Hr)),!0)}),o),w.resolve(this.ei(c))}ei(e){const t=[];return e.forEach((n=>{const i=this.Zr(n);i!==null&&t.push(i)})),t}removeMutationBatch(e,t){U(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let n=this.Yr;return w.forEach(t.mutations,(i=>{const s=new Ee(i.key,t.batchId);return n=n.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)})).next((()=>{this.Yr=n}))}rr(e){}containsKey(e,t){const n=new Ee(t,0),i=this.Yr.firstAfterOrEqual(n);return w.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,w.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sv{constructor(e){this.ni=e,this.docs=(function(){return new se(O.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,i=this.docs.get(n),s=i?i.size:0,o=this.ni(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return w.resolve(n?n.document.mutableCopy():ce.newInvalidDocument(t))}getEntries(e,t){let n=je();return t.forEach((i=>{const s=this.docs.get(i);n=n.insert(i,s?s.document.mutableCopy():ce.newInvalidDocument(i))})),w.resolve(n)}getDocumentsMatchingQuery(e,t,n,i){let s=je();const o=t.path,c=new O(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(c);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||Nc(Wf(f),n)<=0||(i.has(f.key)||Gi(t,f))&&(s=s.insert(f.key,f.mutableCopy()))}return w.resolve(s)}getAllFromCollectionGroup(e,t,n,i){M(9500)}ri(e,t){return w.forEach(this.docs,(n=>t(n)))}newChangeBuffer(e){return new Cv(this)}getSize(e){return w.resolve(this.size)}}class Cv extends pm{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach(((n,i)=>{i.isValidDocument()?t.push(this.Or.addEntry(e,i)):this.Or.removeEntry(n)})),w.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vv{constructor(e){this.persistence=e,this.ii=new bt((t=>kn(t)),$i),this.lastRemoteSnapshotVersion=B.min(),this.highestTargetId=0,this.si=0,this.oi=new Zc,this.targetCount=0,this._i=On.ar()}forEachTarget(e,t){return this.ii.forEach(((n,i)=>t(i))),w.resolve()}getLastRemoteSnapshotVersion(e){return w.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return w.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),w.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.si&&(this.si=t),w.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new On(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,w.resolve()}updateTargetData(e,t){return this.hr(t),w.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,w.resolve()}removeTargets(e,t,n){let i=0;const s=[];return this.ii.forEach(((o,c)=>{c.sequenceNumber<=t&&n.get(c.targetId)===null&&(this.ii.delete(o),s.push(this.removeMatchingKeysForTargetId(e,c.targetId)),i++)})),w.waitFor(s).next((()=>i))}getTargetCount(e){return w.resolve(this.targetCount)}getTargetData(e,t){const n=this.ii.get(t)||null;return w.resolve(n)}addMatchingKeys(e,t,n){return this.oi.Kr(t,n),w.resolve()}removeMatchingKeys(e,t,n){this.oi.Gr(t,n);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach((o=>{s.push(i.markPotentiallyOrphaned(e,o))})),w.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),w.resolve()}getMatchingKeysForTargetId(e,t){const n=this.oi.Jr(t);return w.resolve(n)}containsKey(e,t){return w.resolve(this.oi.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{constructor(e,t){this.ai={},this.overlays={},this.ui=new Me(0),this.ci=!1,this.ci=!0,this.li=new bv,this.referenceDelegate=e(this),this.hi=new Vv(this),this.indexManager=new mv,this.remoteDocumentCache=(function(i){return new Sv(i)})((n=>this.referenceDelegate.Pi(n))),this.serializer=new nm(t),this.Ti=new Av(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Rv,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.ai[e.toKey()];return n||(n=new Pv(t,this.referenceDelegate),this.ai[e.toKey()]=n),n}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,n){D("MemoryPersistence","Starting transaction:",e);const i=new Dv(this.ui.next());return this.referenceDelegate.Ii(),n(i).next((s=>this.referenceDelegate.di(i).next((()=>s)))).toPromise().then((s=>(i.raiseOnCommittedEvent(),s)))}Ei(e,t){return w.or(Object.values(this.ai).map((n=>()=>n.containsKey(e,t))))}}class Dv extends Qf{constructor(e){super(),this.currentSequenceNumber=e}}class Uo{constructor(e){this.persistence=e,this.Ai=new Zc,this.Ri=null}static Vi(e){return new Uo(e)}get mi(){if(this.Ri)return this.Ri;throw M(60996)}addReference(e,t,n){return this.Ai.addReference(n,t),this.mi.delete(n.toString()),w.resolve()}removeReference(e,t,n){return this.Ai.removeReference(n,t),this.mi.add(n.toString()),w.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),w.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach((i=>this.mi.add(i.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((i=>{i.forEach((s=>this.mi.add(s.toString())))})).next((()=>n.removeTargetData(e,t)))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return w.forEach(this.mi,(n=>{const i=O.fromPath(n);return this.fi(e,i).next((s=>{s||t.removeEntry(i,B.min())}))})).next((()=>(this.Ri=null,t.apply(e))))}updateLimboDocument(e,t){return this.fi(e,t).next((n=>{n?this.mi.delete(t.toString()):this.mi.add(t.toString())}))}Pi(e){return 0}fi(e,t){return w.or([()=>w.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class uo{constructor(e,t){this.persistence=e,this.gi=new bt((n=>ke(n.path)),((n,i)=>n.isEqual(i))),this.garbageCollector=fm(this,t)}static Vi(e,t){return new uo(e,t)}Ii(){}di(e){return w.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((n=>t.next((i=>n+i))))}yr(e){let t=0;return this.gr(e,(n=>{t++})).next((()=>t))}gr(e,t){return w.forEach(this.gi,((n,i)=>this.Sr(e,n,i).next((s=>s?w.resolve():t(i)))))}removeTargets(e,t,n){return this.persistence.getTargetCache().removeTargets(e,t,n)}removeOrphanedDocuments(e,t){let n=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ri(e,(o=>this.Sr(e,o,t).next((c=>{c||(n++,s.removeEntry(o,B.min()))})))).next((()=>s.apply(e))).next((()=>n))}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),w.resolve()}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,n)}addReference(e,t,n){return this.gi.set(n,e.currentSequenceNumber),w.resolve()}removeReference(e,t,n){return this.gi.set(n,e.currentSequenceNumber),w.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),w.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Ms(e.data.value)),t}Sr(e,t,n){return w.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const i=this.gi.get(t);return w.resolve(i!==void 0&&i>n)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kv{constructor(e){this.serializer=e}q(e,t,n,i){const s=new So("createOrUpgrade",t);n<1&&i>=1&&((function(u){u.createObjectStore(qi)})(e),(function(u){u.createObjectStore(vi,{keyPath:HE}),u.createObjectStore(Qe,{keyPath:yh,autoIncrement:!0}).createIndex(Tn,Ih,{unique:!0}),u.createObjectStore(cr)})(e),cd(e),(function(u){u.createObjectStore(gn)})(e));let o=w.resolve();return n<3&&i>=3&&(n!==0&&((function(u){u.deleteObjectStore(lr),u.deleteObjectStore(ur),u.deleteObjectStore(An)})(e),cd(e)),o=o.next((()=>(function(u){const h=u.store(An),f={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:B.min().toTimestamp(),targetCount:0};return h.put(to,f)})(s)))),n<4&&i>=4&&(n!==0&&(o=o.next((()=>(function(u,h){return h.store(Qe).j().next((m=>{u.deleteObjectStore(Qe),u.createObjectStore(Qe,{keyPath:yh,autoIncrement:!0}).createIndex(Tn,Ih,{unique:!0});const g=h.store(Qe),b=m.map((C=>g.put(C)));return w.waitFor(b)}))})(e,s)))),o=o.next((()=>{(function(u){u.createObjectStore(hr,{keyPath:rT})})(e)}))),n<5&&i>=5&&(o=o.next((()=>this.pi(s)))),n<6&&i>=6&&(o=o.next((()=>((function(u){u.createObjectStore(wi)})(e),this.yi(s))))),n<7&&i>=7&&(o=o.next((()=>this.wi(s)))),n<8&&i>=8&&(o=o.next((()=>this.Si(e,s)))),n<9&&i>=9&&(o=o.next((()=>{(function(u){u.objectStoreNames.contains("remoteDocumentChanges")&&u.deleteObjectStore("remoteDocumentChanges")})(e)}))),n<10&&i>=10&&(o=o.next((()=>this.bi(s)))),n<11&&i>=11&&(o=o.next((()=>{(function(u){u.createObjectStore(Co,{keyPath:iT})})(e),(function(u){u.createObjectStore(Vo,{keyPath:sT})})(e)}))),n<12&&i>=12&&(o=o.next((()=>{(function(u){const h=u.createObjectStore(Do,{keyPath:dT});h.createIndex(Qa,fT,{unique:!1}),h.createIndex(rp,pT,{unique:!1})})(e)}))),n<13&&i>=13&&(o=o.next((()=>(function(u){const h=u.createObjectStore(eo,{keyPath:XE});h.createIndex(xs,JE),h.createIndex(Zf,YE)})(e))).next((()=>this.Di(e,s))).next((()=>e.deleteObjectStore(gn)))),n<14&&i>=14&&(o=o.next((()=>this.Ci(e,s)))),n<15&&i>=15&&(o=o.next((()=>(function(u){u.createObjectStore(Mc,{keyPath:oT,autoIncrement:!0}).createIndex(Ha,aT,{unique:!1}),u.createObjectStore(hi,{keyPath:cT}).createIndex(tp,uT,{unique:!1}),u.createObjectStore(di,{keyPath:lT}).createIndex(np,hT,{unique:!1})})(e)))),n<16&&i>=16&&(o=o.next((()=>{t.objectStore(hi).clear()})).next((()=>{t.objectStore(di).clear()}))),n<17&&i>=17&&(o=o.next((()=>{(function(u){u.createObjectStore(Lc,{keyPath:mT})})(e)}))),n<18&&i>=18&&Kd()&&(o=o.next((()=>{t.objectStore(hi).clear()})).next((()=>{t.objectStore(di).clear()}))),o}yi(e){let t=0;return e.store(gn).X(((n,i)=>{t+=co(i)})).next((()=>{const n={byteSize:t};return e.store(wi).put(Wa,n)}))}pi(e){const t=e.store(vi),n=e.store(Qe);return t.j().next((i=>w.forEach(i,(s=>{const o=IDBKeyRange.bound([s.userId,wn],[s.userId,s.lastAcknowledgedBatchId]);return n.j(Tn,o).next((c=>w.forEach(c,(u=>{U(u.userId===s.userId,18650,"Cannot process batch from unexpected user",{batchId:u.batchId});const h=yn(this.serializer,u);return cm(e,s.userId,h).next((()=>{}))}))))}))))}wi(e){const t=e.store(lr),n=e.store(gn);return e.store(An).get(to).next((i=>{const s=[];return n.X(((o,c)=>{const u=new Y(o),h=(function(m){return[0,ke(m)]})(u);s.push(t.get(h).next((f=>f?w.resolve():(m=>t.put({targetId:0,path:ke(m),sequenceNumber:i.highestListenSequenceNumber}))(u))))})).next((()=>w.waitFor(s)))}))}Si(e,t){e.createObjectStore(Ai,{keyPath:nT});const n=t.store(Ai),i=new Yc,s=o=>{if(i.add(o)){const c=o.lastSegment(),u=o.popLast();return n.put({collectionId:c,parent:ke(u)})}};return t.store(gn).X({Z:!0},((o,c)=>{const u=new Y(o);return s(u.popLast())})).next((()=>t.store(cr).X({Z:!0},(([o,c,u],h)=>{const f=tt(c);return s(f.popLast())}))))}bi(e){const t=e.store(ur);return t.X(((n,i)=>{const s=oi(i),o=rm(this.serializer,s);return t.put(o)}))}Di(e,t){const n=t.store(gn),i=[];return n.X(((s,o)=>{const c=t.store(eo),u=(function(m){return m.document?new O(Y.fromString(m.document.name).popFirst(5)):m.noDocument?O.fromSegments(m.noDocument.path):m.unknownDocument?O.fromSegments(m.unknownDocument.path):M(36783)})(o).path.toArray(),h={prefixPath:u.slice(0,u.length-2),collectionGroup:u[u.length-2],documentId:u[u.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(c.put(h))})).next((()=>w.waitFor(i)))}Ci(e,t){const n=t.store(Qe),i=mm(this.serializer),s=new eu(Uo.Vi,this.serializer.gt);return n.j().next((o=>{const c=new Map;return o.forEach((u=>{var h;let f=(h=c.get(u.userId))!==null&&h!==void 0?h:W();yn(this.serializer,u).keys().forEach((m=>f=f.add(m))),c.set(u.userId,f)})),w.forEach(c,((u,h)=>{const f=new Ve(h),m=Lo.yt(this.serializer,f),g=s.getIndexManager(f),b=Fo.yt(f,this.serializer,g,s.referenceDelegate);return new gm(i,b,m,g).recalculateAndSaveOverlaysForDocumentKeys(new Xa(t,Me.ue),u).next()}))}))}}function cd(r){r.createObjectStore(lr,{keyPath:eT}).createIndex(Oc,tT,{unique:!0}),r.createObjectStore(ur,{keyPath:"targetId"}).createIndex(ep,ZE,{unique:!0}),r.createObjectStore(An)}const Ot="IndexedDbPersistence",Pa=18e5,Sa=5e3,Ca="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.",Nv="main";class tu{constructor(e,t,n,i,s,o,c,u,h,f,m=18){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=n,this.Fi=s,this.window=o,this.document=c,this.Mi=h,this.xi=f,this.Oi=m,this.ui=null,this.ci=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Ni=null,this.inForeground=!1,this.Bi=null,this.Li=null,this.ki=Number.NEGATIVE_INFINITY,this.qi=g=>Promise.resolve(),!tu.C())throw new N(S.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new Ev(this,i),this.Qi=t+Nv,this.serializer=new nm(u),this.$i=new Wt(this.Qi,this.Oi,new kv(this.serializer)),this.li=new uv,this.hi=new _v(this.referenceDelegate,this.serializer),this.remoteDocumentCache=mm(this.serializer),this.Ti=new cv,this.window&&this.window.localStorage?this.Ui=this.window.localStorage:(this.Ui=null,f===!1&&fe(Ot,"LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Ki().then((()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new N(S.FAILED_PRECONDITION,Ca);return this.Wi(),this.Gi(),this.zi(),this.runTransaction("getHighestListenSequenceNumber","readonly",(e=>this.hi.getHighestSequenceNumber(e)))})).then((e=>{this.ui=new Me(e,this.Mi)})).then((()=>{this.ci=!0})).catch((e=>(this.$i&&this.$i.close(),Promise.reject(e))))}ji(e){return this.qi=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.$i.setDatabaseDeletedListener(e)}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Fi.enqueueAndForget((async()=>{this.started&&await this.Ki()})))}Ki(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",(e=>As(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next((()=>{if(this.isPrimary)return this.Ji(e).next((t=>{t||(this.isPrimary=!1,this.Fi.enqueueRetryable((()=>this.qi(!1))))}))})).next((()=>this.Hi(e))).next((t=>this.isPrimary&&!t?this.Yi(e).next((()=>!1)):!!t&&this.Zi(e).next((()=>!0)))))).catch((e=>{if(rn(e))return D(Ot,"Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return D(Ot,"Releasing owner lease after error during lease refresh",e),!1})).then((e=>{this.isPrimary!==e&&this.Fi.enqueueRetryable((()=>this.qi(e))),this.isPrimary=e}))}Ji(e){return ei(e).get(Kn).next((t=>w.resolve(this.Xi(t))))}es(e){return As(e).delete(this.clientId)}async ts(){if(this.isPrimary&&!this.ns(this.ki,Pa)){this.ki=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",(t=>{const n=Ie(t,hr);return n.j().next((i=>{const s=this.rs(i,Pa),o=i.filter((c=>s.indexOf(c)===-1));return w.forEach(o,(c=>n.delete(c.clientId))).next((()=>o))}))})).catch((()=>[]));if(this.Ui)for(const t of e)this.Ui.removeItem(this.ss(t.clientId))}}zi(){this.Li=this.Fi.enqueueAfterDelay("client_metadata_refresh",4e3,(()=>this.Ki().then((()=>this.ts())).then((()=>this.zi()))))}Xi(e){return!!e&&e.ownerId===this.clientId}Hi(e){return this.xi?w.resolve(!0):ei(e).get(Kn).next((t=>{if(t!==null&&this.ns(t.leaseTimestampMs,Sa)&&!this._s(t.ownerId)){if(this.Xi(t)&&this.networkEnabled)return!0;if(!this.Xi(t)){if(!t.allowTabSynchronization)throw new N(S.FAILED_PRECONDITION,Ca);return!1}}return!(!this.networkEnabled||!this.inForeground)||As(e).j().next((n=>this.rs(n,Sa).find((i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,c=this.networkEnabled===i.networkEnabled;if(s||o&&c)return!0}return!1}))===void 0))})).next((t=>(this.isPrimary!==t&&D(Ot,`Client ${t?"is":"is not"} eligible for a primary lease.`),t)))}async shutdown(){this.ci=!1,this.us(),this.Li&&(this.Li.cancel(),this.Li=null),this.cs(),this.ls(),await this.$i.runTransaction("shutdown","readwrite",[qi,hr],(e=>{const t=new Xa(e,Me.ue);return this.Yi(t).next((()=>this.es(t)))})),this.$i.close(),this.hs()}rs(e,t){return e.filter((n=>this.ns(n.updateTimeMs,t)&&!this._s(n.clientId)))}Ps(){return this.runTransaction("getActiveClients","readonly",(e=>As(e).j().next((t=>this.rs(t,Pa).map((n=>n.clientId))))))}get started(){return this.ci}getGlobalsCache(){return this.li}getMutationQueue(e,t){return Fo.yt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new gv(e,this.serializer.gt.databaseId)}getDocumentOverlayCache(e){return Lo.yt(this.serializer,e)}getBundleCache(){return this.Ti}runTransaction(e,t,n){D(Ot,"Starting transaction:",e);const i=t==="readonly"?"readonly":"readwrite",s=(function(u){return u===18?yT:u===17?ap:u===16?_T:u===15?Fc:u===14?op:u===13?sp:u===12?gT:u===11?ip:void M(60245)})(this.Oi);let o;return this.$i.runTransaction(e,i,s,(c=>(o=new Xa(c,this.ui?this.ui.next():Me.ue),t==="readwrite-primary"?this.Ji(o).next((u=>!!u||this.Hi(o))).next((u=>{if(!u)throw fe(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Fi.enqueueRetryable((()=>this.qi(!1))),new N(S.FAILED_PRECONDITION,Hf);return n(o)})).next((u=>this.Zi(o).next((()=>u)))):this.Ts(o).next((()=>n(o)))))).then((c=>(o.raiseOnCommittedEvent(),c)))}Ts(e){return ei(e).get(Kn).next((t=>{if(t!==null&&this.ns(t.leaseTimestampMs,Sa)&&!this._s(t.ownerId)&&!this.Xi(t)&&!(this.xi||this.allowTabSynchronization&&t.allowTabSynchronization))throw new N(S.FAILED_PRECONDITION,Ca)}))}Zi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return ei(e).put(Kn,t)}static C(){return Wt.C()}Yi(e){const t=ei(e);return t.get(Kn).next((n=>this.Xi(n)?(D(Ot,"Releasing primary lease."),t.delete(Kn)):w.resolve()))}ns(e,t){const n=Date.now();return!(e<n-t)&&(!(e>n)||(fe(`Detected an update time that is in the future: ${e} > ${n}`),!1))}Wi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Bi=()=>{this.Fi.enqueueAndForget((()=>(this.inForeground=this.document.visibilityState==="visible",this.Ki())))},this.document.addEventListener("visibilitychange",this.Bi),this.inForeground=this.document.visibilityState==="visible")}cs(){this.Bi&&(this.document.removeEventListener("visibilitychange",this.Bi),this.Bi=null)}Gi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Ni=()=>{this.us();const t=/(?:Version|Mobile)\/1[456]/;zd()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.Fi.enterRestrictedMode(!0),this.Fi.enqueueAndForget((()=>this.shutdown()))},this.window.addEventListener("pagehide",this.Ni))}ls(){this.Ni&&(this.window.removeEventListener("pagehide",this.Ni),this.Ni=null)}_s(e){var t;try{const n=((t=this.Ui)===null||t===void 0?void 0:t.getItem(this.ss(e)))!==null;return D(Ot,`Client '${e}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(n){return fe(Ot,"Failed to get zombied client id.",n),!1}}us(){if(this.Ui)try{this.Ui.setItem(this.ss(this.clientId),String(Date.now()))}catch(e){fe("Failed to set zombie client id.",e)}}hs(){if(this.Ui)try{this.Ui.removeItem(this.ss(this.clientId))}catch{}}ss(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function ei(r){return Ie(r,qi)}function As(r){return Ie(r,hr)}function _m(r,e){let t=r.projectId;return r.isDefaultDatabase||(t+="."+r.database),"firestore/"+e+"/"+t+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{constructor(e,t,n,i){this.targetId=e,this.fromCache=t,this.Is=n,this.ds=i}static Es(e,t){let n=W(),i=W();for(const s of t.docChanges)switch(s.type){case 0:n=n.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new nu(e,t.fromCache,n,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xv{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ym{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return zd()?8:Xf(ye())>0?6:4})()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,n,i){const s={result:null};return this.ps(e,t).next((o=>{s.result=o})).next((()=>{if(!s.result)return this.ys(e,t,i,n).next((o=>{s.result=o}))})).next((()=>{if(s.result)return;const o=new xv;return this.ws(e,t,o).next((c=>{if(s.result=c,this.Rs)return this.Ss(e,t,o,c.size)}))})).next((()=>s.result))}Ss(e,t,n,i){return n.documentReadCount<this.Vs?(Jn()<=H.DEBUG&&D("QueryEngine","SDK will not create cache indexes for query:",Yn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),w.resolve()):(Jn()<=H.DEBUG&&D("QueryEngine","Query:",Yn(t),"scans",n.documentReadCount,"local documents and returns",i,"documents as results."),n.documentReadCount>this.fs*i?(Jn()<=H.DEBUG&&D("QueryEngine","The SDK decides to create cache indexes for query:",Yn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,$e(t))):w.resolve())}ps(e,t){if(kh(t))return w.resolve(null);let n=$e(t);return this.indexManager.getIndexType(e,n).next((i=>i===0?null:(t.limit!==null&&i===1&&(t=rc(t,null,"F"),n=$e(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next((s=>{const o=W(...s);return this.gs.getDocuments(e,o).next((c=>this.indexManager.getMinOffset(e,n).next((u=>{const h=this.bs(t,c);return this.Ds(t,h,o,u.readTime)?this.ps(e,rc(t,null,"F")):this.vs(e,h,t,u)}))))})))))}ys(e,t,n,i){return kh(t)||i.isEqual(B.min())?w.resolve(null):this.gs.getDocuments(e,n).next((s=>{const o=this.bs(t,s);return this.Ds(t,o,n,i)?w.resolve(null):(Jn()<=H.DEBUG&&D("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Yn(t)),this.vs(e,o,t,Gf(i,ar)).next((c=>c)))}))}bs(e,t){let n=new re(Cp(e));return t.forEach(((i,s)=>{Gi(e,s)&&(n=n.add(s))})),n}Ds(e,t,n,i){if(e.limit===null)return!1;if(n.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ws(e,t,n){return Jn()<=H.DEBUG&&D("QueryEngine","Using full collection scan to execute query:",Yn(t)),this.gs.getDocumentsMatchingQuery(e,t,ze.min(),n)}vs(e,t,n,i){return this.gs.getDocumentsMatchingQuery(e,n,i).next((s=>(t.forEach((o=>{s=s.insert(o.key,o)})),s)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ru="LocalStore",Ov=3e8;class Mv{constructor(e,t,n,i){this.persistence=e,this.Cs=t,this.serializer=i,this.Fs=new se(z),this.Ms=new bt((s=>kn(s)),$i),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(n)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new gm(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Fs)))}}function Im(r,e,t,n){return new Mv(r,e,t,n)}async function Em(r,e){const t=F(r);return await t.persistence.runTransaction("Handle user change","readonly",(n=>{let i;return t.mutationQueue.getAllMutationBatches(n).next((s=>(i=s,t.Ns(e),t.mutationQueue.getAllMutationBatches(n)))).next((s=>{const o=[],c=[];let u=W();for(const h of i){o.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of s){c.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return t.localDocuments.getDocuments(n,u).next((h=>({Bs:h,removedBatchIds:o,addedBatchIds:c})))}))}))}function Lv(r,e){const t=F(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(n=>{const i=e.batch.keys(),s=t.Os.newChangeBuffer({trackRemovals:!0});return(function(c,u,h,f){const m=h.batch,g=m.keys();let b=w.resolve();return g.forEach((C=>{b=b.next((()=>f.getEntry(u,C))).next((k=>{const V=h.docVersions.get(C);U(V!==null,48541),k.version.compareTo(V)<0&&(m.applyToRemoteDocument(k,h),k.isValidDocument()&&(k.setReadTime(h.commitVersion),f.addEntry(k)))}))})),b.next((()=>c.mutationQueue.removeMutationBatch(u,m)))})(t,n,e,s).next((()=>s.apply(n))).next((()=>t.mutationQueue.performConsistencyCheck(n))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(n,i,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,(function(c){let u=W();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(u=u.add(c.batch.mutations[h].key));return u})(e)))).next((()=>t.localDocuments.getDocuments(n,i)))}))}function Tm(r){const e=F(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.hi.getLastRemoteSnapshotVersion(t)))}function Fv(r,e){const t=F(r),n=e.snapshotVersion;let i=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(s=>{const o=t.Os.newChangeBuffer({trackRemovals:!0});i=t.Fs;const c=[];e.targetChanges.forEach(((f,m)=>{const g=i.get(m);if(!g)return;c.push(t.hi.removeMatchingKeys(s,f.removedDocuments,m).next((()=>t.hi.addMatchingKeys(s,f.addedDocuments,m))));let b=g.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(m)!==null?b=b.withResumeToken(pe.EMPTY_BYTE_STRING,B.min()).withLastLimboFreeSnapshotVersion(B.min()):f.resumeToken.approximateByteSize()>0&&(b=b.withResumeToken(f.resumeToken,n)),i=i.insert(m,b),(function(k,V,$){return k.resumeToken.approximateByteSize()===0||V.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=Ov?!0:$.addedDocuments.size+$.modifiedDocuments.size+$.removedDocuments.size>0})(g,b,f)&&c.push(t.hi.updateTargetData(s,b))}));let u=je(),h=W();if(e.documentUpdates.forEach((f=>{e.resolvedLimboDocuments.has(f)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(s,f))})),c.push(Uv(s,o,e.documentUpdates).next((f=>{u=f.Ls,h=f.ks}))),!n.isEqual(B.min())){const f=t.hi.getLastRemoteSnapshotVersion(s).next((m=>t.hi.setTargetsMetadata(s,s.currentSequenceNumber,n)));c.push(f)}return w.waitFor(c).next((()=>o.apply(s))).next((()=>t.localDocuments.getLocalViewOfDocuments(s,u,h))).next((()=>u))})).then((s=>(t.Fs=i,s)))}function Uv(r,e,t){let n=W(),i=W();return t.forEach((s=>n=n.add(s))),e.getEntries(r,n).next((s=>{let o=je();return t.forEach(((c,u)=>{const h=s.get(c);u.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(c)),u.isNoDocument()&&u.version.isEqual(B.min())?(e.removeEntry(c,u.readTime),o=o.insert(c,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),o=o.insert(c,u)):D(ru,"Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",u.version)})),{Ls:o,ks:i}}))}function Bv(r,e){const t=F(r);return t.persistence.runTransaction("Get next mutation batch","readonly",(n=>(e===void 0&&(e=wn),t.mutationQueue.getNextMutationBatchAfterBatchId(n,e))))}function lo(r,e){const t=F(r);return t.persistence.runTransaction("Allocate target","readwrite",(n=>{let i;return t.hi.getTargetData(n,e).next((s=>s?(i=s,w.resolve(i)):t.hi.allocateTargetId(n).next((o=>(i=new gt(e,o,"TargetPurposeListen",n.currentSequenceNumber),t.hi.addTargetData(n,i).next((()=>i)))))))})).then((n=>{const i=t.Fs.get(n.targetId);return(i===null||n.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(n.targetId,n),t.Ms.set(e,n.targetId)),n}))}async function Er(r,e,t){const n=F(r),i=n.Fs.get(e),s=t?"readwrite":"readwrite-primary";try{t||await n.persistence.runTransaction("Release target",s,(o=>n.persistence.referenceDelegate.removeTarget(o,i)))}catch(o){if(!rn(o))throw o;D(ru,`Failed to update sequence numbers for target ${e}: ${o}`)}n.Fs=n.Fs.remove(e),n.Ms.delete(i.target)}function ho(r,e,t){const n=F(r);let i=B.min(),s=W();return n.persistence.runTransaction("Execute query","readwrite",(o=>(function(u,h,f){const m=F(u),g=m.Ms.get(f);return g!==void 0?w.resolve(m.Fs.get(g)):m.hi.getTargetData(h,f)})(n,o,$e(e)).next((c=>{if(c)return i=c.lastLimboFreeSnapshotVersion,n.hi.getMatchingKeysForTargetId(o,c.targetId).next((u=>{s=u}))})).next((()=>n.Cs.getDocumentsMatchingQuery(o,e,t?i:B.min(),t?s:W()))).next((c=>(Am(n,Sp(e),c),{documents:c,qs:s})))))}function vm(r,e){const t=F(r),n=F(t.hi),i=t.Fs.get(e);return i?Promise.resolve(i.target):t.persistence.runTransaction("Get target data","readonly",(s=>n.Et(s,e).next((o=>o?o.target:null))))}function wm(r,e){const t=F(r),n=t.xs.get(e)||B.min();return t.persistence.runTransaction("Get new document changes","readonly",(i=>t.Os.getAllFromCollectionGroup(i,e,Gf(n,ar),Number.MAX_SAFE_INTEGER))).then((i=>(Am(t,e,i),i)))}function Am(r,e,t){let n=r.xs.get(e)||B.min();t.forEach(((i,s)=>{s.readTime.compareTo(n)>0&&(n=s.readTime)})),r.xs.set(e,n)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rm="firestore_clients";function ud(r,e){return`${Rm}_${r}_${e}`}const bm="firestore_mutations";function ld(r,e,t){let n=`${bm}_${r}_${t}`;return e.isAuthenticated()&&(n+=`_${e.uid}`),n}const Pm="firestore_targets";function Va(r,e){return`${Pm}_${r}_${e}`}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const et="SharedClientState";class fo{constructor(e,t,n,i){this.user=e,this.batchId=t,this.state=n,this.error=i}static Ks(e,t,n){const i=JSON.parse(n);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new N(i.error.code,i.error.message))),o?new fo(e,t,i.state,s):(fe(et,`Failed to parse mutation state for ID '${t}': ${n}`),null)}Ws(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class _i{constructor(e,t,n){this.targetId=e,this.state=t,this.error=n}static Ks(e,t){const n=JSON.parse(t);let i,s=typeof n=="object"&&["not-current","current","rejected"].indexOf(n.state)!==-1&&(n.error===void 0||typeof n.error=="object");return s&&n.error&&(s=typeof n.error.message=="string"&&typeof n.error.code=="string",s&&(i=new N(n.error.code,n.error.message))),s?new _i(e,n.state,i):(fe(et,`Failed to parse target state for ID '${e}': ${t}`),null)}Ws(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class po{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Ks(e,t){const n=JSON.parse(t);let i=typeof n=="object"&&n.activeTargetIds instanceof Array,s=$c();for(let o=0;i&&o<n.activeTargetIds.length;++o)i=Jf(n.activeTargetIds[o]),s=s.add(n.activeTargetIds[o]);return i?new po(e,s):(fe(et,`Failed to parse client data for instance '${e}': ${t}`),null)}}class iu{constructor(e,t){this.clientId=e,this.onlineState=t}static Ks(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new iu(t.clientId,t.onlineState):(fe(et,`Failed to parse online state: ${e}`),null)}}class hc{constructor(){this.activeTargetIds=$c()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Da{constructor(e,t,n,i,s){this.window=e,this.Fi=t,this.persistenceKey=n,this.js=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.Js=this.Hs.bind(this),this.Ys=new se(z),this.started=!1,this.Zs=[];const o=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.Xs=ud(this.persistenceKey,this.js),this.eo=(function(u){return`firestore_sequence_number_${u}`})(this.persistenceKey),this.Ys=this.Ys.insert(this.js,new hc),this.no=new RegExp(`^${Rm}_${o}_([^_]*)$`),this.ro=new RegExp(`^${bm}_${o}_(\\d+)(?:_(.*))?$`),this.io=new RegExp(`^${Pm}_${o}_(\\d+)$`),this.so=(function(u){return`firestore_online_state_${u}`})(this.persistenceKey),this.oo=(function(u){return`firestore_bundle_loaded_v2_${u}`})(this.persistenceKey),this.window.addEventListener("storage",this.Js)}static C(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Ps();for(const n of e){if(n===this.js)continue;const i=this.getItem(ud(this.persistenceKey,n));if(i){const s=po.Ks(n,i);s&&(this.Ys=this.Ys.insert(s.clientId,s))}}this._o();const t=this.storage.getItem(this.so);if(t){const n=this.ao(t);n&&this.uo(n)}for(const n of this.Zs)this.Hs(n);this.Zs=[],this.window.addEventListener("pagehide",(()=>this.shutdown())),this.started=!0}writeSequenceNumber(e){this.setItem(this.eo,JSON.stringify(e))}getAllActiveQueryTargets(){return this.co(this.Ys)}isActiveQueryTarget(e){let t=!1;return this.Ys.forEach(((n,i)=>{i.activeTargetIds.has(e)&&(t=!0)})),t}addPendingMutation(e){this.lo(e,"pending")}updateMutationState(e,t,n){this.lo(e,t,n),this.ho(e)}addLocalQueryTarget(e,t=!0){let n="not-current";if(this.isActiveQueryTarget(e)){const i=this.storage.getItem(Va(this.persistenceKey,e));if(i){const s=_i.Ks(e,i);s&&(n=s.state)}}return t&&this.Po.Gs(e),this._o(),n}removeLocalQueryTarget(e){this.Po.zs(e),this._o()}isLocalQueryTarget(e){return this.Po.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Va(this.persistenceKey,e))}updateQueryState(e,t,n){this.To(e,t,n)}handleUserChange(e,t,n){t.forEach((i=>{this.ho(i)})),this.currentUser=e,n.forEach((i=>{this.addPendingMutation(i)}))}setOnlineState(e){this.Io(e)}notifyBundleLoaded(e){this.Eo(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.Js),this.removeItem(this.Xs),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return D(et,"READ",e,t),t}setItem(e,t){D(et,"SET",e,t),this.storage.setItem(e,t)}removeItem(e){D(et,"REMOVE",e),this.storage.removeItem(e)}Hs(e){const t=e;if(t.storageArea===this.storage){if(D(et,"EVENT",t.key,t.newValue),t.key===this.Xs)return void fe("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Fi.enqueueRetryable((async()=>{if(this.started){if(t.key!==null){if(this.no.test(t.key)){if(t.newValue==null){const n=this.Ao(t.key);return this.Ro(n,null)}{const n=this.Vo(t.key,t.newValue);if(n)return this.Ro(n.clientId,n)}}else if(this.ro.test(t.key)){if(t.newValue!==null){const n=this.mo(t.key,t.newValue);if(n)return this.fo(n)}}else if(this.io.test(t.key)){if(t.newValue!==null){const n=this.po(t.key,t.newValue);if(n)return this.yo(n)}}else if(t.key===this.so){if(t.newValue!==null){const n=this.ao(t.newValue);if(n)return this.uo(n)}}else if(t.key===this.eo){const n=(function(s){let o=Me.ue;if(s!=null)try{const c=JSON.parse(s);U(typeof c=="number",30636,{wo:s}),o=c}catch(c){fe(et,"Failed to read sequence number from WebStorage",c)}return o})(t.newValue);n!==Me.ue&&this.sequenceNumberHandler(n)}else if(t.key===this.oo){const n=this.So(t.newValue);await Promise.all(n.map((i=>this.syncEngine.bo(i))))}}}else this.Zs.push(t)}))}}get Po(){return this.Ys.get(this.js)}_o(){this.setItem(this.Xs,this.Po.Ws())}lo(e,t,n){const i=new fo(this.currentUser,e,t,n),s=ld(this.persistenceKey,this.currentUser,e);this.setItem(s,i.Ws())}ho(e){const t=ld(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Io(e){const t={clientId:this.js,onlineState:e};this.storage.setItem(this.so,JSON.stringify(t))}To(e,t,n){const i=Va(this.persistenceKey,e),s=new _i(e,t,n);this.setItem(i,s.Ws())}Eo(e){const t=JSON.stringify(Array.from(e));this.setItem(this.oo,t)}Ao(e){const t=this.no.exec(e);return t?t[1]:null}Vo(e,t){const n=this.Ao(e);return po.Ks(n,t)}mo(e,t){const n=this.ro.exec(e),i=Number(n[1]),s=n[2]!==void 0?n[2]:null;return fo.Ks(new Ve(s),i,t)}po(e,t){const n=this.io.exec(e),i=Number(n[1]);return _i.Ks(i,t)}ao(e){return iu.Ks(e)}So(e){return JSON.parse(e)}async fo(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Do(e.batchId,e.state,e.error);D(et,`Ignoring mutation for non-active user ${e.user.uid}`)}yo(e){return this.syncEngine.vo(e.targetId,e.state,e.error)}Ro(e,t){const n=t?this.Ys.insert(e,t):this.Ys.remove(e),i=this.co(this.Ys),s=this.co(n),o=[],c=[];return s.forEach((u=>{i.has(u)||o.push(u)})),i.forEach((u=>{s.has(u)||c.push(u)})),this.syncEngine.Co(o,c).then((()=>{this.Ys=n}))}uo(e){this.Ys.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}co(e){let t=$c();return e.forEach(((n,i)=>{t=t.unionWith(i.activeTargetIds)})),t}}class Sm{constructor(){this.Fo=new hc,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,n){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new hc,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jv{xo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hd="ConnectivityMonitor";class dd{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){D(hd,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){D(hd,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rs=null;function dc(){return Rs===null?Rs=(function(){return 268435456+Math.round(2147483648*Math.random())})():Rs++,"0x"+Rs.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ka="RestConnection",qv={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class $v{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${n}/databases/${i}`,this.Ko=this.databaseId.database===no?`project_id=${n}`:`project_id=${n}&database_id=${i}`}Wo(e,t,n,i,s){const o=dc(),c=this.Go(e,t.toUriEncodedString());D(ka,`Sending RPC '${e}' ${o}:`,c,n);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(u,i,s);const{host:h}=new URL(c),f=Ln(h);return this.jo(e,c,u,n,f).then((m=>(D(ka,`Received RPC '${e}' ${o}: `,m),m)),(m=>{throw Jt(ka,`RPC '${e}' ${o} failed with error: `,m,"url: ",c,"request:",n),m}))}Jo(e,t,n,i,s,o){return this.Wo(e,t,n,i,s)}zo(e,t,n){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Rr})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((i,s)=>e[s]=i)),n&&n.headers.forEach(((i,s)=>e[s]=i))}Go(e,t){const n=qv[e];return`${this.$o}/v1/${t}:${n}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zv{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ce="WebChannelConnection";class Kv extends $v{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,n,i,s){const o=dc();return new Promise(((c,u)=>{const h=new Mf;h.setWithCredentials(!0),h.listenOnce(Lf.COMPLETE,(()=>{try{switch(h.getLastErrorCode()){case Ds.NO_ERROR:const m=h.getResponseJson();D(Ce,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(m)),c(m);break;case Ds.TIMEOUT:D(Ce,`RPC '${e}' ${o} timed out`),u(new N(S.DEADLINE_EXCEEDED,"Request time out"));break;case Ds.HTTP_ERROR:const g=h.getStatus();if(D(Ce,`RPC '${e}' ${o} failed with status:`,g,"response text:",h.getResponseText()),g>0){let b=h.getResponseJson();Array.isArray(b)&&(b=b[0]);const C=b==null?void 0:b.error;if(C&&C.status&&C.message){const k=(function($){const j=$.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf(j)>=0?j:S.UNKNOWN})(C.status);u(new N(k,C.message))}else u(new N(S.UNKNOWN,"Server responded with status "+h.getStatus()))}else u(new N(S.UNAVAILABLE,"Connection failed."));break;default:M(9055,{c_:e,streamId:o,l_:h.getLastErrorCode(),h_:h.getLastError()})}}finally{D(Ce,`RPC '${e}' ${o} completed.`)}}));const f=JSON.stringify(i);D(Ce,`RPC '${e}' ${o} sending request:`,i),h.send(t,"POST",f,n,15)}))}P_(e,t,n){const i=dc(),s=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Bf(),c=Uf(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.zo(u.initMessageHeaders,t,n),u.encodeInitMessageHeaders=!0;const f=s.join("");D(Ce,`Creating RPC '${e}' stream ${i}: ${f}`,u);const m=o.createWebChannel(f,u);this.T_(m);let g=!1,b=!1;const C=new zv({Ho:V=>{b?D(Ce,`Not sending because RPC '${e}' stream ${i} is closed:`,V):(g||(D(Ce,`Opening RPC '${e}' stream ${i} transport.`),m.open(),g=!0),D(Ce,`RPC '${e}' stream ${i} sending:`,V),m.send(V))},Yo:()=>m.close()}),k=(V,$,j)=>{V.listen($,(L=>{try{j(L)}catch(K){setTimeout((()=>{throw K}),0)}}))};return k(m,ri.EventType.OPEN,(()=>{b||(D(Ce,`RPC '${e}' stream ${i} transport opened.`),C.s_())})),k(m,ri.EventType.CLOSE,(()=>{b||(b=!0,D(Ce,`RPC '${e}' stream ${i} transport closed`),C.__(),this.I_(m))})),k(m,ri.EventType.ERROR,(V=>{b||(b=!0,Jt(Ce,`RPC '${e}' stream ${i} transport errored. Name:`,V.name,"Message:",V.message),C.__(new N(S.UNAVAILABLE,"The operation could not be completed")))})),k(m,ri.EventType.MESSAGE,(V=>{var $;if(!b){const j=V.data[0];U(!!j,16349);const L=j,K=(L==null?void 0:L.error)||(($=L[0])===null||$===void 0?void 0:$.error);if(K){D(Ce,`RPC '${e}' stream ${i} received error:`,K);const X=K.status;let G=(function(I){const T=me[I];if(T!==void 0)return qp(T)})(X),E=K.message;G===void 0&&(G=S.INTERNAL,E="Unknown error status: "+X+" with message "+K.message),b=!0,C.__(new N(G,E)),m.close()}else D(Ce,`RPC '${e}' stream ${i} received:`,j),C.a_(j)}})),k(c,Ff.STAT_EVENT,(V=>{V.stat===$a.PROXY?D(Ce,`RPC '${e}' stream ${i} detected buffering proxy`):V.stat===$a.NOPROXY&&D(Ce,`RPC '${e}' stream ${i} detected no buffering proxy`)})),setTimeout((()=>{C.o_()}),0),C}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((t=>t===e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cm(){return typeof window<"u"?window:null}function js(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bo(r){return new XT(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{constructor(e,t,n=1e3,i=1.5,s=6e4){this.Fi=e,this.timerId=t,this.d_=n,this.E_=i,this.A_=s,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),n=Math.max(0,Date.now()-this.m_),i=Math.max(0,t-n);i>0&&D("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,i,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fd="PersistentStream";class Vm{constructor(e,t,n,i,s,o,c,u){this.Fi=e,this.w_=n,this.S_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=u,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new su(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===S.RESOURCE_EXHAUSTED?(fe(t.toString()),fe("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===S.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([n,i])=>{this.b_===t&&this.W_(n,i)}),(n=>{e((()=>{const i=new N(S.UNKNOWN,"Fetching auth token failed: "+n.message);return this.G_(i)}))}))}W_(e,t){const n=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo((()=>{n((()=>this.listener.Zo()))})),this.stream.e_((()=>{n((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((i=>{n((()=>this.G_(i)))})),this.stream.onMessage((i=>{n((()=>++this.C_==1?this.j_(i):this.onNext(i)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return D(fd,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget((()=>this.b_===e?t():(D(fd,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Gv extends Vm{constructor(e,t,n,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,i,o),this.serializer=s}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=ev(this.serializer,e),n=(function(s){if(!("targetChange"in s))return B.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?B.min():o.readTime?Te(o.readTime):B.min()})(e);return this.listener.J_(t,n)}H_(e){const t={};t.database=oc(this.serializer),t.addTarget=(function(s,o){let c;const u=o.target;if(c=io(u)?{documents:Xp(s,u)}:{query:Jp(s,u).Vt},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=Kp(s,o.resumeToken);const h=ic(s,o.expectedCount);h!==null&&(c.expectedCount=h)}else if(o.snapshotVersion.compareTo(B.min())>0){c.readTime=Ir(s,o.snapshotVersion.toTimestamp());const h=ic(s,o.expectedCount);h!==null&&(c.expectedCount=h)}return c})(this.serializer,e);const n=nv(this.serializer,e);n&&(t.labels=n),this.k_(t)}Y_(e){const t={};t.database=oc(this.serializer),t.removeTarget=e,this.k_(t)}}class Wv extends Vm{constructor(e,t,n,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,i,o),this.serializer=s}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return U(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,U(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){U(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=tv(e.writeResults,e.commitTime),n=Te(e.commitTime);return this.listener.ta(n,t)}na(){const e={};e.database=oc(this.serializer),this.k_(e)}X_(e){const t={streamToken:this.lastStreamToken,writes:e.map((n=>Di(this.serializer,n)))};this.k_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hv{}class Qv extends Hv{constructor(e,t,n,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=i,this.ra=!1}ia(){if(this.ra)throw new N(S.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,n,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,o])=>this.connection.Wo(e,sc(t,n),i,s,o))).catch((s=>{throw s.name==="FirebaseError"?(s.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new N(S.UNKNOWN,s.toString())}))}Jo(e,t,n,i,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,c])=>this.connection.Jo(e,sc(t,n),i,o,c,s))).catch((o=>{throw o.name==="FirebaseError"?(o.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new N(S.UNKNOWN,o.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class Xv{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(fe(t),this._a=!1):D("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mn="RemoteStore";class Jv{constructor(e,t,n,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=s,this.Ea.xo((o=>{n.enqueueAndForget((async()=>{Un(this)&&(D(Mn,"Restarting streams for network reachability change."),await(async function(u){const h=F(u);h.Ia.add(4),await Qi(h),h.Aa.set("Unknown"),h.Ia.delete(4),await jo(h)})(this))}))})),this.Aa=new Xv(n,i)}}async function jo(r){if(Un(r))for(const e of r.da)await e(!0)}async function Qi(r){for(const e of r.da)await e(!1)}function qo(r,e){const t=F(r);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),cu(t)?au(t):Cr(t).x_()&&ou(t,e))}function Tr(r,e){const t=F(r),n=Cr(t);t.Ta.delete(e),n.x_()&&Dm(t,e),t.Ta.size===0&&(n.x_()?n.B_():Un(t)&&t.Aa.set("Unknown"))}function ou(r,e){if(r.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(B.min())>0){const t=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Cr(r).H_(e)}function Dm(r,e){r.Ra.$e(e),Cr(r).Y_(e)}function au(r){r.Ra=new GT({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>r.Ta.get(e)||null,lt:()=>r.datastore.serializer.databaseId}),Cr(r).start(),r.Aa.aa()}function cu(r){return Un(r)&&!Cr(r).M_()&&r.Ta.size>0}function Un(r){return F(r).Ia.size===0}function km(r){r.Ra=void 0}async function Yv(r){r.Aa.set("Online")}async function Zv(r){r.Ta.forEach(((e,t)=>{ou(r,e)}))}async function ew(r,e){km(r),cu(r)?(r.Aa.la(e),au(r)):r.Aa.set("Unknown")}async function tw(r,e,t){if(r.Aa.set("Online"),e instanceof zp&&e.state===2&&e.cause)try{await(async function(i,s){const o=s.cause;for(const c of s.targetIds)i.Ta.has(c)&&(await i.remoteSyncer.rejectListen(c,o),i.Ta.delete(c),i.Ra.removeTarget(c))})(r,e)}catch(n){D(Mn,"Failed to remove targets %s: %s ",e.targetIds.join(","),n),await mo(r,n)}else if(e instanceof Us?r.Ra.Ye(e):e instanceof $p?r.Ra.it(e):r.Ra.et(e),!t.isEqual(B.min()))try{const n=await Tm(r.localStore);t.compareTo(n)>=0&&await(function(s,o){const c=s.Ra.Pt(o);return c.targetChanges.forEach(((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.Ta.get(h);f&&s.Ta.set(h,f.withResumeToken(u.resumeToken,o))}})),c.targetMismatches.forEach(((u,h)=>{const f=s.Ta.get(u);if(!f)return;s.Ta.set(u,f.withResumeToken(pe.EMPTY_BYTE_STRING,f.snapshotVersion)),Dm(s,u);const m=new gt(f.target,u,h,f.sequenceNumber);ou(s,m)})),s.remoteSyncer.applyRemoteEvent(c)})(r,t)}catch(n){D(Mn,"Failed to raise snapshot:",n),await mo(r,n)}}async function mo(r,e,t){if(!rn(e))throw e;r.Ia.add(1),await Qi(r),r.Aa.set("Offline"),t||(t=()=>Tm(r.localStore)),r.asyncQueue.enqueueRetryable((async()=>{D(Mn,"Retrying IndexedDB access"),await t(),r.Ia.delete(1),await jo(r)}))}function Nm(r,e){return e().catch((t=>mo(r,t,e)))}async function Sr(r){const e=F(r),t=en(e);let n=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:wn;for(;nw(e);)try{const i=await Bv(e.localStore,n);if(i===null){e.Pa.length===0&&t.B_();break}n=i.batchId,rw(e,i)}catch(i){await mo(e,i)}xm(e)&&Om(e)}function nw(r){return Un(r)&&r.Pa.length<10}function rw(r,e){r.Pa.push(e);const t=en(r);t.x_()&&t.Z_&&t.X_(e.mutations)}function xm(r){return Un(r)&&!en(r).M_()&&r.Pa.length>0}function Om(r){en(r).start()}async function iw(r){en(r).na()}async function sw(r){const e=en(r);for(const t of r.Pa)e.X_(t.mutations)}async function ow(r,e,t){const n=r.Pa.shift(),i=Wc.from(n,e,t);await Nm(r,(()=>r.remoteSyncer.applySuccessfulWrite(i))),await Sr(r)}async function aw(r,e){e&&en(r).Z_&&await(async function(n,i){if((function(o){return jp(o)&&o!==S.ABORTED})(i.code)){const s=n.Pa.shift();en(n).N_(),await Nm(n,(()=>n.remoteSyncer.rejectFailedWrite(s.batchId,i))),await Sr(n)}})(r,e),xm(r)&&Om(r)}async function pd(r,e){const t=F(r);t.asyncQueue.verifyOperationInProgress(),D(Mn,"RemoteStore received new credentials");const n=Un(t);t.Ia.add(3),await Qi(t),n&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await jo(t)}async function fc(r,e){const t=F(r);e?(t.Ia.delete(2),await jo(t)):e||(t.Ia.add(2),await Qi(t),t.Aa.set("Unknown"))}function Cr(r){return r.Va||(r.Va=(function(t,n,i){const s=F(t);return s.ia(),new Gv(n,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)})(r.datastore,r.asyncQueue,{Zo:Yv.bind(null,r),e_:Zv.bind(null,r),n_:ew.bind(null,r),J_:tw.bind(null,r)}),r.da.push((async e=>{e?(r.Va.N_(),cu(r)?au(r):r.Aa.set("Unknown")):(await r.Va.stop(),km(r))}))),r.Va}function en(r){return r.ma||(r.ma=(function(t,n,i){const s=F(t);return s.ia(),new Wv(n,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)})(r.datastore,r.asyncQueue,{Zo:()=>Promise.resolve(),e_:iw.bind(null,r),n_:aw.bind(null,r),ea:sw.bind(null,r),ta:ow.bind(null,r)}),r.da.push((async e=>{e?(r.ma.N_(),await Sr(r)):(await r.ma.stop(),r.Pa.length>0&&(D(Mn,`Stopping write stream with ${r.Pa.length} pending writes`),r.Pa=[]))}))),r.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu{constructor(e,t,n,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=i,this.removalCallback=s,this.deferred=new qe,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,i,s){const o=Date.now()+n,c=new uu(e,t,o,i,s);return c.start(n),c}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new N(S.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Xi(r,e){if(fe("AsyncQueue",`${e}: ${r}`),rn(r))return new N(S.UNAVAILABLE,`${e}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{static emptySet(e){return new sr(e.comparator)}constructor(e){this.comparator=e?(t,n)=>e(t,n)||O.comparator(t.key,n.key):(t,n)=>O.comparator(t.key,n.key),this.keyedMap=ii(),this.sortedSet=new se(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof sr)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=n.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const n=new sr;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class md{constructor(){this.fa=new se(O.comparator)}track(e){const t=e.doc.key,n=this.fa.get(t);n?e.type!==0&&n.type===3?this.fa=this.fa.insert(t,e):e.type===3&&n.type!==1?this.fa=this.fa.insert(t,{type:n.type,doc:e.doc}):e.type===2&&n.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&n.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&n.type===0?this.fa=this.fa.remove(t):e.type===1&&n.type===2?this.fa=this.fa.insert(t,{type:1,doc:n.doc}):e.type===0&&n.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):M(63341,{At:e,ga:n}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal(((t,n)=>{e.push(n)})),e}}class vr{constructor(e,t,n,i,s,o,c,u,h){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,t,n,i,s){const o=[];return t.forEach((c=>{o.push({type:0,doc:c})})),new vr(e,t,sr.emptySet(t),o,n,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&xo(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==n[i].type||!t[i].doc.isEqual(n[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cw{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((e=>e.ba()))}}class uw{constructor(){this.queries=gd(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,n){const i=F(t),s=i.queries;i.queries=gd(),s.forEach(((o,c)=>{for(const u of c.wa)u.onError(n)}))})(this,new N(S.ABORTED,"Firestore shutting down"))}}function gd(){return new bt((r=>Pp(r)),xo)}async function lu(r,e){const t=F(r);let n=3;const i=e.query;let s=t.queries.get(i);s?!s.Sa()&&e.ba()&&(n=2):(s=new cw,n=e.ba()?0:1);try{switch(n){case 0:s.ya=await t.onListen(i,!0);break;case 1:s.ya=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(o){const c=Xi(o,`Initialization of query '${Yn(e.query)}' failed`);return void e.onError(c)}t.queries.set(i,s),s.wa.push(e),e.va(t.onlineState),s.ya&&e.Ca(s.ya)&&du(t)}async function hu(r,e){const t=F(r),n=e.query;let i=3;const s=t.queries.get(n);if(s){const o=s.wa.indexOf(e);o>=0&&(s.wa.splice(o,1),s.wa.length===0?i=e.ba()?0:1:!s.Sa()&&e.ba()&&(i=2))}switch(i){case 0:return t.queries.delete(n),t.onUnlisten(n,!0);case 1:return t.queries.delete(n),t.onUnlisten(n,!1);case 2:return t.onLastRemoteStoreUnlisten(n);default:return}}function lw(r,e){const t=F(r);let n=!1;for(const i of e){const s=i.query,o=t.queries.get(s);if(o){for(const c of o.wa)c.Ca(i)&&(n=!0);o.ya=i}}n&&du(t)}function hw(r,e,t){const n=F(r),i=n.queries.get(e);if(i)for(const s of i.wa)s.onError(t);n.queries.delete(e)}function du(r){r.Da.forEach((e=>{e.next()}))}var pc,_d;(_d=pc||(pc={})).Fa="default",_d.Cache="cache";class fu{constructor(e,t,n){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=n||{}}Ca(e){if(!this.options.includeMetadataChanges){const n=[];for(const i of e.docChanges)i.type!==3&&n.push(i);e=new vr(e.query,e.docs,e.oldDocs,n,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const n=t!=="Offline";return(!this.options.ka||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=vr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==pc.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mm{constructor(e){this.key=e}}class Lm{constructor(e){this.key=e}}class Fm{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=W(),this.mutatedKeys=W(),this.Xa=Cp(e),this.eu=new sr(this.Xa)}get tu(){return this.Ha}nu(e,t){const n=t?t.ru:new md,i=t?t.eu:this.eu;let s=t?t.mutatedKeys:this.mutatedKeys,o=i,c=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal(((f,m)=>{const g=i.get(f),b=Gi(this.query,m)?m:null,C=!!g&&this.mutatedKeys.has(g.key),k=!!b&&(b.hasLocalMutations||this.mutatedKeys.has(b.key)&&b.hasCommittedMutations);let V=!1;g&&b?g.data.isEqual(b.data)?C!==k&&(n.track({type:3,doc:b}),V=!0):this.iu(g,b)||(n.track({type:2,doc:b}),V=!0,(u&&this.Xa(b,u)>0||h&&this.Xa(b,h)<0)&&(c=!0)):!g&&b?(n.track({type:0,doc:b}),V=!0):g&&!b&&(n.track({type:1,doc:g}),V=!0,(u||h)&&(c=!0)),V&&(b?(o=o.add(b),s=k?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))})),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),n.track({type:1,doc:f})}return{eu:o,ru:n,Ds:c,mutatedKeys:s}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,i){const s=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const o=e.ru.pa();o.sort(((f,m)=>(function(b,C){const k=V=>{switch(V){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return M(20277,{At:V})}};return k(b)-k(C)})(f.type,m.type)||this.Xa(f.doc,m.doc))),this.su(n),i=i!=null&&i;const c=t&&!i?this.ou():[],u=this.Za.size===0&&this.current&&!i?1:0,h=u!==this.Ya;return this.Ya=u,o.length!==0||h?{snapshot:new vr(this.query,e.eu,s,o,e.mutatedKeys,u===0,h,!1,!!n&&n.resumeToken.approximateByteSize()>0),_u:c}:{_u:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new md,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach((t=>this.Ha=this.Ha.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ha=this.Ha.delete(t))),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=W(),this.eu.forEach((n=>{this.au(n.key)&&(this.Za=this.Za.add(n.key))}));const t=[];return e.forEach((n=>{this.Za.has(n)||t.push(new Lm(n))})),this.Za.forEach((n=>{e.has(n)||t.push(new Mm(n))})),t}uu(e){this.Ha=e.qs,this.Za=W();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return vr.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const Vr="SyncEngine";class dw{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class fw{constructor(e){this.key=e,this.lu=!1}}class pw{constructor(e,t,n,i,s,o){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.hu={},this.Pu=new bt((c=>Pp(c)),xo),this.Tu=new Map,this.Iu=new Set,this.du=new se(O.comparator),this.Eu=new Map,this.Au=new Zc,this.Ru={},this.Vu=new Map,this.mu=On.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function mw(r,e,t=!0){const n=$o(r);let i;const s=n.Pu.get(e);return s?(n.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.cu()):i=await Um(n,e,t,!0),i}async function gw(r,e){const t=$o(r);await Um(t,e,!0,!1)}async function Um(r,e,t,n){const i=await lo(r.localStore,$e(e)),s=i.targetId,o=r.sharedClientState.addLocalQueryTarget(s,t);let c;return n&&(c=await pu(r,e,s,o==="current",i.resumeToken)),r.isPrimaryClient&&t&&qo(r.remoteStore,i),c}async function pu(r,e,t,n,i){r.gu=(m,g,b)=>(async function(k,V,$,j){let L=V.view.nu($);L.Ds&&(L=await ho(k.localStore,V.query,!1).then((({documents:E})=>V.view.nu(E,L))));const K=j&&j.targetChanges.get(V.targetId),X=j&&j.targetMismatches.get(V.targetId)!=null,G=V.view.applyChanges(L,k.isPrimaryClient,K,X);return mc(k,V.targetId,G._u),G.snapshot})(r,m,g,b);const s=await ho(r.localStore,e,!0),o=new Fm(e,s.qs),c=o.nu(s.documents),u=Hi.createSynthesizedTargetChangeForCurrentChange(t,n&&r.onlineState!=="Offline",i),h=o.applyChanges(c,r.isPrimaryClient,u);mc(r,t,h._u);const f=new dw(e,t,o);return r.Pu.set(e,f),r.Tu.has(t)?r.Tu.get(t).push(e):r.Tu.set(t,[e]),h.snapshot}async function _w(r,e,t){const n=F(r),i=n.Pu.get(e),s=n.Tu.get(i.targetId);if(s.length>1)return n.Tu.set(i.targetId,s.filter((o=>!xo(o,e)))),void n.Pu.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await Er(n.localStore,i.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(i.targetId),t&&Tr(n.remoteStore,i.targetId),wr(n,i.targetId)})).catch(nn)):(wr(n,i.targetId),await Er(n.localStore,i.targetId,!0))}async function yw(r,e){const t=F(r),n=t.Pu.get(e),i=t.Tu.get(n.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(n.targetId),Tr(t.remoteStore,n.targetId))}async function Iw(r,e,t){const n=yu(r);try{const i=await(function(o,c){const u=F(o),h=te.now(),f=c.reduce(((b,C)=>b.add(C.key)),W());let m,g;return u.persistence.runTransaction("Locally write mutations","readwrite",(b=>{let C=je(),k=W();return u.Os.getEntries(b,f).next((V=>{C=V,C.forEach((($,j)=>{j.isValidDocument()||(k=k.add($))}))})).next((()=>u.localDocuments.getOverlayedDocuments(b,C))).next((V=>{m=V;const $=[];for(const j of c){const L=$T(j,m.get(j.key).overlayedDocument);L!=null&&$.push(new Pt(j.key,L,_p(L.value.mapValue),ue.exists(!0)))}return u.mutationQueue.addMutationBatch(b,h,$,c)})).next((V=>{g=V;const $=V.applyToLocalDocumentSet(m,k);return u.documentOverlayCache.saveOverlays(b,V.batchId,$)}))})).then((()=>({batchId:g.batchId,changes:Dp(m)})))})(n.localStore,e);n.sharedClientState.addPendingMutation(i.batchId),(function(o,c,u){let h=o.Ru[o.currentUser.toKey()];h||(h=new se(z)),h=h.insert(c,u),o.Ru[o.currentUser.toKey()]=h})(n,i.batchId,t),await on(n,i.changes),await Sr(n.remoteStore)}catch(i){const s=Xi(i,"Failed to persist write");t.reject(s)}}async function Bm(r,e){const t=F(r);try{const n=await Fv(t.localStore,e);e.targetChanges.forEach(((i,s)=>{const o=t.Eu.get(s);o&&(U(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.lu=!0:i.modifiedDocuments.size>0?U(o.lu,14607):i.removedDocuments.size>0&&(U(o.lu,42227),o.lu=!1))})),await on(t,n,e)}catch(n){await nn(n)}}function yd(r,e,t){const n=F(r);if(n.isPrimaryClient&&t===0||!n.isPrimaryClient&&t===1){const i=[];n.Pu.forEach(((s,o)=>{const c=o.view.va(e);c.snapshot&&i.push(c.snapshot)})),(function(o,c){const u=F(o);u.onlineState=c;let h=!1;u.queries.forEach(((f,m)=>{for(const g of m.wa)g.va(c)&&(h=!0)})),h&&du(u)})(n.eventManager,e),i.length&&n.hu.J_(i),n.onlineState=e,n.isPrimaryClient&&n.sharedClientState.setOnlineState(e)}}async function Ew(r,e,t){const n=F(r);n.sharedClientState.updateQueryState(e,"rejected",t);const i=n.Eu.get(e),s=i&&i.key;if(s){let o=new se(O.comparator);o=o.insert(s,ce.newNoDocument(s,B.min()));const c=W().add(s),u=new Wi(B.min(),new Map,new se(z),o,c);await Bm(n,u),n.du=n.du.remove(s),n.Eu.delete(e),_u(n)}else await Er(n.localStore,e,!1).then((()=>wr(n,e,t))).catch(nn)}async function Tw(r,e){const t=F(r),n=e.batch.batchId;try{const i=await Lv(t.localStore,e);gu(t,n,null),mu(t,n),t.sharedClientState.updateMutationState(n,"acknowledged"),await on(t,i)}catch(i){await nn(i)}}async function vw(r,e,t){const n=F(r);try{const i=await(function(o,c){const u=F(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",(h=>{let f;return u.mutationQueue.lookupMutationBatch(h,c).next((m=>(U(m!==null,37113),f=m.keys(),u.mutationQueue.removeMutationBatch(h,m)))).next((()=>u.mutationQueue.performConsistencyCheck(h))).next((()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,c))).next((()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f))).next((()=>u.localDocuments.getDocuments(h,f)))}))})(n.localStore,e);gu(n,e,t),mu(n,e),n.sharedClientState.updateMutationState(e,"rejected",t),await on(n,i)}catch(i){await nn(i)}}function mu(r,e){(r.Vu.get(e)||[]).forEach((t=>{t.resolve()})),r.Vu.delete(e)}function gu(r,e,t){const n=F(r);let i=n.Ru[n.currentUser.toKey()];if(i){const s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),n.Ru[n.currentUser.toKey()]=i}}function wr(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const n of r.Tu.get(e))r.Pu.delete(n),t&&r.hu.pu(n,t);r.Tu.delete(e),r.isPrimaryClient&&r.Au.zr(e).forEach((n=>{r.Au.containsKey(n)||jm(r,n)}))}function jm(r,e){r.Iu.delete(e.path.canonicalString());const t=r.du.get(e);t!==null&&(Tr(r.remoteStore,t),r.du=r.du.remove(e),r.Eu.delete(t),_u(r))}function mc(r,e,t){for(const n of t)n instanceof Mm?(r.Au.addReference(n.key,e),ww(r,n)):n instanceof Lm?(D(Vr,"Document no longer in limbo: "+n.key),r.Au.removeReference(n.key,e),r.Au.containsKey(n.key)||jm(r,n.key)):M(19791,{yu:n})}function ww(r,e){const t=e.key,n=t.path.canonicalString();r.du.get(t)||r.Iu.has(n)||(D(Vr,"New document in limbo: "+t),r.Iu.add(n),_u(r))}function _u(r){for(;r.Iu.size>0&&r.du.size<r.maxConcurrentLimboResolutions;){const e=r.Iu.values().next().value;r.Iu.delete(e);const t=new O(Y.fromString(e)),n=r.mu.next();r.Eu.set(n,new fw(t)),r.du=r.du.insert(t,n),qo(r.remoteStore,new gt($e(Ki(t.path)),n,"TargetPurposeLimboResolution",Me.ue))}}async function on(r,e,t){const n=F(r),i=[],s=[],o=[];n.Pu.isEmpty()||(n.Pu.forEach(((c,u)=>{o.push(n.gu(u,e,t).then((h=>{var f;if((h||t)&&n.isPrimaryClient){const m=h?!h.fromCache:(f=t==null?void 0:t.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;n.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(h){i.push(h);const m=nu.Es(u.targetId,h);s.push(m)}})))})),await Promise.all(o),n.hu.J_(i),await(async function(u,h){const f=F(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",(m=>w.forEach(h,(g=>w.forEach(g.Is,(b=>f.persistence.referenceDelegate.addReference(m,g.targetId,b))).next((()=>w.forEach(g.ds,(b=>f.persistence.referenceDelegate.removeReference(m,g.targetId,b)))))))))}catch(m){if(!rn(m))throw m;D(ru,"Failed to update sequence numbers: "+m)}for(const m of h){const g=m.targetId;if(!m.fromCache){const b=f.Fs.get(g),C=b.snapshotVersion,k=b.withLastLimboFreeSnapshotVersion(C);f.Fs=f.Fs.insert(g,k)}}})(n.localStore,s))}async function Aw(r,e){const t=F(r);if(!t.currentUser.isEqual(e)){D(Vr,"User change. New user:",e.toKey());const n=await Em(t.localStore,e);t.currentUser=e,(function(s,o){s.Vu.forEach((c=>{c.forEach((u=>{u.reject(new N(S.CANCELLED,o))}))})),s.Vu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,n.removedBatchIds,n.addedBatchIds),await on(t,n.Bs)}}function Rw(r,e){const t=F(r),n=t.Eu.get(e);if(n&&n.lu)return W().add(n.key);{let i=W();const s=t.Tu.get(e);if(!s)return i;for(const o of s){const c=t.Pu.get(o);i=i.unionWith(c.view.tu)}return i}}async function bw(r,e){const t=F(r),n=await ho(t.localStore,e.query,!0),i=e.view.uu(n);return t.isPrimaryClient&&mc(t,e.targetId,i._u),i}async function Pw(r,e){const t=F(r);return wm(t.localStore,e).then((n=>on(t,n)))}async function Sw(r,e,t,n){const i=F(r),s=await(function(c,u){const h=F(c),f=F(h.mutationQueue);return h.persistence.runTransaction("Lookup mutation documents","readonly",(m=>f.Xn(m,u).next((g=>g?h.localDocuments.getDocuments(m,g):w.resolve(null)))))})(i.localStore,e);s!==null?(t==="pending"?await Sr(i.remoteStore):t==="acknowledged"||t==="rejected"?(gu(i,e,n||null),mu(i,e),(function(c,u){F(F(c).mutationQueue).rr(u)})(i.localStore,e)):M(6720,"Unknown batchState",{wu:t}),await on(i,s)):D(Vr,"Cannot apply mutation batch with id: "+e)}async function Cw(r,e){const t=F(r);if($o(t),yu(t),e===!0&&t.fu!==!0){const n=t.sharedClientState.getAllActiveQueryTargets(),i=await Id(t,n.toArray());t.fu=!0,await fc(t.remoteStore,!0);for(const s of i)qo(t.remoteStore,s)}else if(e===!1&&t.fu!==!1){const n=[];let i=Promise.resolve();t.Tu.forEach(((s,o)=>{t.sharedClientState.isLocalQueryTarget(o)?n.push(o):i=i.then((()=>(wr(t,o),Er(t.localStore,o,!0)))),Tr(t.remoteStore,o)})),await i,await Id(t,n),(function(o){const c=F(o);c.Eu.forEach(((u,h)=>{Tr(c.remoteStore,h)})),c.Au.jr(),c.Eu=new Map,c.du=new se(O.comparator)})(t),t.fu=!1,await fc(t.remoteStore,!1)}}async function Id(r,e,t){const n=F(r),i=[],s=[];for(const o of e){let c;const u=n.Tu.get(o);if(u&&u.length!==0){c=await lo(n.localStore,$e(u[0]));for(const h of u){const f=n.Pu.get(h),m=await bw(n,f);m.snapshot&&s.push(m.snapshot)}}else{const h=await vm(n.localStore,o);c=await lo(n.localStore,h),await pu(n,qm(h),o,!1,c.resumeToken)}i.push(c)}return n.hu.J_(s),i}function qm(r){return Rp(r.path,r.collectionGroup,r.orderBy,r.filters,r.limit,"F",r.startAt,r.endAt)}function Vw(r){return(function(t){return F(F(t).persistence).Ps()})(F(r).localStore)}async function Dw(r,e,t,n){const i=F(r);if(i.fu)return void D(Vr,"Ignoring unexpected query state notification.");const s=i.Tu.get(e);if(s&&s.length>0)switch(t){case"current":case"not-current":{const o=await wm(i.localStore,Sp(s[0])),c=Wi.createSynthesizedRemoteEventForCurrentChange(e,t==="current",pe.EMPTY_BYTE_STRING);await on(i,o,c);break}case"rejected":await Er(i.localStore,e,!0),wr(i,e,n);break;default:M(64155,t)}}async function kw(r,e,t){const n=$o(r);if(n.fu){for(const i of e){if(n.Tu.has(i)&&n.sharedClientState.isActiveQueryTarget(i)){D(Vr,"Adding an already active target "+i);continue}const s=await vm(n.localStore,i),o=await lo(n.localStore,s);await pu(n,qm(s),o.targetId,!1,o.resumeToken),qo(n.remoteStore,o)}for(const i of t)n.Tu.has(i)&&await Er(n.localStore,i,!1).then((()=>{Tr(n.remoteStore,i),wr(n,i)})).catch(nn)}}function $o(r){const e=F(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=Bm.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Rw.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Ew.bind(null,e),e.hu.J_=lw.bind(null,e.eventManager),e.hu.pu=hw.bind(null,e.eventManager),e}function yu(r){const e=F(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Tw.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=vw.bind(null,e),e}class ki{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Bo(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return Im(this.persistence,new ym,e.initialUser,this.serializer)}Du(e){return new eu(Uo.Vi,this.serializer)}bu(e){return new Sm}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ki.provider={build:()=>new ki};class Nw extends ki{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){U(this.persistence.referenceDelegate instanceof uo,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new dm(n,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?De.withCacheSize(this.cacheSizeBytes):De.DEFAULT;return new eu((n=>uo.Vi(n,t)),this.serializer)}}class $m extends ki{constructor(e,t,n){super(),this.Mu=e,this.cacheSizeBytes=t,this.forceOwnership=n,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Mu.initialize(this,e),await yu(this.Mu.syncEngine),await Sr(this.Mu.remoteStore),await this.persistence.ji((()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve())))}vu(e){return Im(this.persistence,new ym,e.initialUser,this.serializer)}Cu(e,t){const n=this.persistence.referenceDelegate.garbageCollector;return new dm(n,e.asyncQueue,t)}Fu(e,t){const n=new GE(t,this.persistence);return new KE(e.asyncQueue,n)}Du(e){const t=_m(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),n=this.cacheSizeBytes!==void 0?De.withCacheSize(this.cacheSizeBytes):De.DEFAULT;return new tu(this.synchronizeTabs,t,e.clientId,n,e.asyncQueue,Cm(),js(),this.serializer,this.sharedClientState,!!this.forceOwnership)}bu(e){return new Sm}}class xw extends $m{constructor(e,t){super(e,t,!1),this.Mu=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.Mu.syncEngine;this.sharedClientState instanceof Da&&(this.sharedClientState.syncEngine={Do:Sw.bind(null,t),vo:Dw.bind(null,t),Co:kw.bind(null,t),Ps:Vw.bind(null,t),bo:Pw.bind(null,t)},await this.sharedClientState.start()),await this.persistence.ji((async n=>{await Cw(this.Mu.syncEngine,n),this.gcScheduler&&(n&&!this.gcScheduler.started?this.gcScheduler.start():n||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(n&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():n||this.indexBackfillerScheduler.stop())}))}bu(e){const t=Cm();if(!Da.C(t))throw new N(S.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const n=_m(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Da(t,e.asyncQueue,n,e.clientId,e.initialUser)}}class Ni{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>yd(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=Aw.bind(null,this.syncEngine),await fc(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new uw})()}createDatastore(e){const t=Bo(e.databaseInfo.databaseId),n=(function(s){return new Kv(s)})(e.databaseInfo);return(function(s,o,c,u){return new Qv(s,o,c,u)})(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return(function(n,i,s,o,c){return new Jv(n,i,s,o,c)})(this.localStore,this.datastore,e.asyncQueue,(t=>yd(this.syncEngine,t,0)),(function(){return dd.C()?new dd:new jv})())}createSyncEngine(e,t){return(function(i,s,o,c,u,h,f){const m=new pw(i,s,o,c,u,h);return f&&(m.fu=!0),m})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(i){const s=F(i);D(Mn,"RemoteStore shutting down."),s.Ia.add(5),await Qi(s),s.Ea.shutdown(),s.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Ni.provider={build:()=>new Ni};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iu{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):fe("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ow{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new N(S.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const t=await(async function(i,s){const o=F(i),c={documents:s.map((m=>Vi(o.serializer,m)))},u=await o.Jo("BatchGetDocuments",o.serializer.databaseId,Y.emptyPath(),c,s.length),h=new Map;u.forEach((m=>{const g=ZT(o.serializer,m);h.set(g.key.toString(),g)}));const f=[];return s.forEach((m=>{const g=h.get(m.toString());U(!!g,55234,{key:m}),f.push(g)})),f})(this.datastore,e);return t.forEach((n=>this.recordVersion(n))),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(n){this.lastTransactionError=n}this.writtenDocs.add(e.toString())}delete(e){this.write(new Pr(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach((t=>{e.delete(t.key.toString())})),e.forEach(((t,n)=>{const i=O.fromPath(n);this.mutations.push(new Kc(i,this.precondition(i)))})),await(async function(n,i){const s=F(n),o={writes:i.map((c=>Di(s.serializer,c)))};await s.Wo("Commit",s.serializer.databaseId,Y.emptyPath(),o)})(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw M(50498,{Wu:e.constructor.name});t=B.min()}const n=this.readVersions.get(e.key.toString());if(n){if(!t.isEqual(n))throw new N(S.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(B.min())?ue.exists(!1):ue.updateTime(t):ue.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(B.min()))throw new N(S.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return ue.updateTime(t)}return ue.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mw{constructor(e,t,n,i,s){this.asyncQueue=e,this.datastore=t,this.options=n,this.updateFunction=i,this.deferred=s,this.Gu=n.maxAttempts,this.F_=new su(this.asyncQueue,"transaction_retry")}zu(){this.Gu-=1,this.ju()}ju(){this.F_.g_((async()=>{const e=new Ow(this.datastore),t=this.Ju(e);t&&t.then((n=>{this.asyncQueue.enqueueAndForget((()=>e.commit().then((()=>{this.deferred.resolve(n)})).catch((i=>{this.Hu(i)}))))})).catch((n=>{this.Hu(n)}))}))}Ju(e){try{const t=this.updateFunction(e);return!ji(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}Hu(e){this.Gu>0&&this.Yu(e)?(this.Gu-=1,this.asyncQueue.enqueueAndForget((()=>(this.ju(),Promise.resolve())))):this.deferred.reject(e)}Yu(e){if(e.name==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||t==="already-exists"||!jp(t)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tn="FirestoreClient";class Lw{constructor(e,t,n,i,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=i,this.user=Ve.UNAUTHENTICATED,this.clientId=kc.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(n,(async o=>{D(tn,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(n,(o=>(D(tn,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new qe;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=Xi(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function Na(r,e){r.asyncQueue.verifyOperationInProgress(),D(tn,"Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let n=t.initialUser;r.setCredentialChangeListener((async i=>{n.isEqual(i)||(await Em(e.localStore,i),n=i)})),e.persistence.setDatabaseDeletedListener((()=>{Jt("Terminating Firestore due to IndexedDb database deletion"),r.terminate().then((()=>{D("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((i=>{Jt("Terminating Firestore due to IndexedDb database deletion failed",i)}))})),r._offlineComponents=e}async function Ed(r,e){r.asyncQueue.verifyOperationInProgress();const t=await zm(r);D(tn,"Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener((n=>pd(e.remoteStore,n))),r.setAppCheckTokenChangeListener(((n,i)=>pd(e.remoteStore,i))),r._onlineComponents=e}async function zm(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){D(tn,"Using user provided OfflineComponentProvider");try{await Na(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(i){return i.name==="FirebaseError"?i.code===S.FAILED_PRECONDITION||i.code===S.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11})(t))throw t;Jt("Error using user provided cache. Falling back to memory cache: "+t),await Na(r,new ki)}}else D(tn,"Using default OfflineComponentProvider"),await Na(r,new Nw(void 0));return r._offlineComponents}async function Eu(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(D(tn,"Using user provided OnlineComponentProvider"),await Ed(r,r._uninitializedComponentsProvider._online)):(D(tn,"Using default OnlineComponentProvider"),await Ed(r,new Ni))),r._onlineComponents}function Km(r){return zm(r).then((e=>e.localStore))}function Fw(r){return Eu(r).then((e=>e.syncEngine))}function Uw(r){return Eu(r).then((e=>e.datastore))}async function go(r){const e=await Eu(r),t=e.eventManager;return t.onListen=mw.bind(null,e.syncEngine),t.onUnlisten=_w.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=gw.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=yw.bind(null,e.syncEngine),t}function Bw(r,e){const t=new qe;return r.asyncQueue.enqueueAndForget((async()=>(async function(i,s,o){try{const c=await(function(h,f){const m=F(h);return m.persistence.runTransaction("read document","readonly",(g=>m.localDocuments.getDocument(g,f)))})(i,s);c.isFoundDocument()?o.resolve(c):c.isNoDocument()?o.resolve(null):o.reject(new N(S.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(c){const u=Xi(c,`Failed to get document '${s} from cache`);o.reject(u)}})(await Km(r),e,t))),t.promise}function jw(r,e,t={}){const n=new qe;return r.asyncQueue.enqueueAndForget((async()=>(function(s,o,c,u,h){const f=new Iu({next:g=>{f.Ou(),o.enqueueAndForget((()=>hu(s,m)));const b=g.docs.has(c);!b&&g.fromCache?h.reject(new N(S.UNAVAILABLE,"Failed to get document because the client is offline.")):b&&g.fromCache&&u&&u.source==="server"?h.reject(new N(S.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(g)},error:g=>h.reject(g)}),m=new fu(Ki(c.path),f,{includeMetadataChanges:!0,ka:!0});return lu(s,m)})(await go(r),r.asyncQueue,e,t,n))),n.promise}function qw(r,e){const t=new qe;return r.asyncQueue.enqueueAndForget((async()=>(async function(i,s,o){try{const c=await ho(i,s,!0),u=new Fm(s,c.qs),h=u.nu(c.documents),f=u.applyChanges(h,!1);o.resolve(f.snapshot)}catch(c){const u=Xi(c,`Failed to execute query '${s} against cache`);o.reject(u)}})(await Km(r),e,t))),t.promise}function $w(r,e,t={}){const n=new qe;return r.asyncQueue.enqueueAndForget((async()=>(function(s,o,c,u,h){const f=new Iu({next:g=>{f.Ou(),o.enqueueAndForget((()=>hu(s,m))),g.fromCache&&u.source==="server"?h.reject(new N(S.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(g)},error:g=>h.reject(g)}),m=new fu(c,f,{includeMetadataChanges:!0,ka:!0});return lu(s,m)})(await go(r),r.asyncQueue,e,t,n))),n.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gm(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Td=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zw="firestore.googleapis.com",vd=!0;class wd{constructor(e){var t,n;if(e.host===void 0){if(e.ssl!==void 0)throw new N(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=zw,this.ssl=vd}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:vd;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=am;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<hm)throw new N(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}qE("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Gm((n=e.experimentalLongPollingOptions)!==null&&n!==void 0?n:{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new N(S.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new N(S.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new N(S.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(n,i){return n.timeoutSeconds===i.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Tu{constructor(e,t,n,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new wd({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new N(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new N(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new wd(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(n){if(!n)return new xE;switch(n.type){case"firstParty":return new LE(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new N(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const n=Td.get(t);n&&(D("ComponentProvider","Removing Datastore"),Td.delete(t),n.terminate())})(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new an(this.firestore,e,this._query)}}class le{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ht(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new le(this.firestore,e,this._key)}toJSON(){return{type:le._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,n){if(Bi(t,le._jsonSchema))return new le(e,n||null,new O(Y.fromString(t.referencePath)))}}le._jsonSchemaVersion="firestore/documentReference/1.0",le._jsonSchema={type:ge("string",le._jsonSchemaVersion),referencePath:ge("string")};class Ht extends an{constructor(e,t,n){super(e,t,Ki(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new le(this.firestore,null,new O(e))}withConverter(e){return new Ht(this.firestore,e,this._path)}}function nR(r,e,...t){if(r=ee(r),zf("collection","path",e),r instanceof Tu){const n=Y.fromString(e,...t);return fh(n),new Ht(r,null,n)}{if(!(r instanceof le||r instanceof Ht))throw new N(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(Y.fromString(e,...t));return fh(n),new Ht(r.firestore,null,n)}}function Kw(r,e,...t){if(r=ee(r),arguments.length===1&&(e=kc.newId()),zf("doc","path",e),r instanceof Tu){const n=Y.fromString(e,...t);return dh(n),new le(r,null,new O(n))}{if(!(r instanceof le||r instanceof Ht))throw new N(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(Y.fromString(e,...t));return dh(n),new le(r.firestore,r instanceof Ht?r.converter:null,new O(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ad="AsyncQueue";class Rd{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new su(this,"async_queue_retry"),this.oc=()=>{const n=js();n&&D(Ad,"Visibility state changed to "+n.visibilityState),this.F_.y_()},this._c=e;const t=js();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=js();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const t=new qe;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!rn(e))throw e;D(Ad,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const t=this._c.then((()=>(this.nc=!0,e().catch((n=>{throw this.tc=n,this.nc=!1,fe("INTERNAL UNHANDLED ERROR: ",bd(n)),n})).then((n=>(this.nc=!1,n))))));return this._c=t,t}enqueueAfterDelay(e,t,n){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const i=uu.createAndSchedule(this,e,t,n,(s=>this.lc(s)));return this.ec.push(i),i}ac(){this.tc&&M(47125,{hc:bd(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((t,n)=>t.targetTimeMs-n.targetTimeMs));for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function bd(r){let e=r.message||"";return r.stack&&(e=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pd(r){return(function(t,n){if(typeof t!="object"||t===null)return!1;const i=t;for(const s of n)if(s in i&&typeof i[s]=="function")return!0;return!1})(r,["next","error","complete"])}class Ke extends Tu{constructor(e,t,n,i){super(e,t,n,i),this.type="firestore",this._queue=new Rd,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Rd(e),this._firestoreClient=void 0,await e}}}function rR(r,e,t){t||(t=no);const n=vo(r,"firestore");if(n.isInitialized(t)){const i=n.getImmediate({identifier:t}),s=n.getOptions(t);if(Rn(s,e))return i;throw new N(S.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(e.cacheSizeBytes!==void 0&&e.localCache!==void 0)throw new N(S.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(e.cacheSizeBytes!==void 0&&e.cacheSizeBytes!==-1&&e.cacheSizeBytes<hm)throw new N(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return e.host&&Ln(e.host)&&_c(e.host),n.initialize({options:e,instanceIdentifier:t})}function cn(r){if(r._terminated)throw new N(S.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||Gw(r),r._firestoreClient}function Gw(r){var e,t,n;const i=r._freezeSettings(),s=(function(c,u,h,f){return new ET(c,u,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,Gm(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)})(r._databaseId,((e=r._app)===null||e===void 0?void 0:e.options.appId)||"",r._persistenceKey,i);r._componentsProvider||!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((n=i.localCache)===null||n===void 0)&&n._onlineComponentProvider)&&(r._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),r._firestoreClient=new Lw(r._authCredentials,r._appCheckCredentials,r._queue,s,r._componentsProvider&&(function(c){const u=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(u),_online:u}})(r._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Be(pe.fromBase64String(e))}catch(t){throw new N(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Be(pe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Be._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Bi(e,Be._jsonSchema))return Be.fromBase64String(e.bytes)}}Be._jsonSchemaVersion="firestore/bytes/1.0",Be._jsonSchema={type:ge("string",Be._jsonSchemaVersion),bytes:ge("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new N(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new he(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}function iR(){return new Bn(Ka)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new N(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new N(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return z(this._lat,e._lat)||z(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:st._jsonSchemaVersion}}static fromJSON(e){if(Bi(e,st._jsonSchema))return new st(e.latitude,e.longitude)}}st._jsonSchemaVersion="firestore/geoPoint/1.0",st._jsonSchema={type:ge("string",st._jsonSchemaVersion),latitude:ge("number"),longitude:ge("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(n,i){if(n.length!==i.length)return!1;for(let s=0;s<n.length;++s)if(n[s]!==i[s])return!1;return!0})(this._values,e._values)}toJSON(){return{type:ot._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Bi(e,ot._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new ot(e.vectorValues);throw new N(S.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}ot._jsonSchemaVersion="firestore/vectorValue/1.0",ot._jsonSchema={type:ge("string",ot._jsonSchemaVersion),vectorValues:ge("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ww=/^__.*__$/;class Hw{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return this.fieldMask!==null?new Pt(e,this.data,this.fieldMask,t,this.fieldTransforms):new br(e,this.data,t,this.fieldTransforms)}}class Wm{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new Pt(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Hm(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw M(40011,{Ec:r})}}class vu{constructor(e,t,n,i,s,o){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=i,s===void 0&&this.Ac(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new vu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const n=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Rc({path:n,mc:!1});return i.fc(e),i}gc(e){var t;const n=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Rc({path:n,mc:!1});return i.Ac(),i}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return _o(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(Hm(this.Ec)&&Ww.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class Qw{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||Bo(e)}Dc(e,t,n,i=!1){return new vu({Ec:e,methodName:t,bc:n,path:he.emptyPath(),mc:!1,Sc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Dr(r){const e=r._freezeSettings(),t=Bo(r._databaseId);return new Qw(r._databaseId,!!e.ignoreUndefinedProperties,t)}function Ko(r,e,t,n,i,s={}){const o=r.Dc(s.merge||s.mergeFields?2:0,e,t,i);bu("Data must be an object, but it was:",o,n);const c=Qm(n,o);let u,h;if(s.merge)u=new Le(o.fieldMask),h=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const m of s.mergeFields){const g=gc(e,m,t);if(!o.contains(g))throw new N(S.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);Jm(f,g)||f.push(g)}u=new Le(f),h=o.fieldTransforms.filter((m=>u.covers(m.field)))}else u=null,h=o.fieldTransforms;return new Hw(new Ae(c),u,h)}class Go extends zo{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Go}}class wu extends zo{_toFieldTransform(e){return new Fp(e.path,new gr)}isEqual(e){return e instanceof wu}}function Au(r,e,t,n){const i=r.Dc(1,e,t);bu("Data must be an object, but it was:",i,n);const s=[],o=Ae.empty();sn(n,((u,h)=>{const f=Pu(e,u,t);h=ee(h);const m=i.gc(f);if(h instanceof Go)s.push(f);else{const g=Ji(h,m);g!=null&&(s.push(f),o.set(f,g))}}));const c=new Le(s);return new Wm(o,c,i.fieldTransforms)}function Ru(r,e,t,n,i,s){const o=r.Dc(1,e,t),c=[gc(e,n,t)],u=[i];if(s.length%2!=0)throw new N(S.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<s.length;g+=2)c.push(gc(e,s[g])),u.push(s[g+1]);const h=[],f=Ae.empty();for(let g=c.length-1;g>=0;--g)if(!Jm(h,c[g])){const b=c[g];let C=u[g];C=ee(C);const k=o.gc(b);if(C instanceof Go)h.push(b);else{const V=Ji(C,k);V!=null&&(h.push(b),f.set(b,V))}}const m=new Le(h);return new Wm(f,m,o.fieldTransforms)}function Xw(r,e,t,n=!1){return Ji(t,r.Dc(n?4:3,e))}function Ji(r,e){if(Xm(r=ee(r)))return bu("Unsupported field value:",e,r),Qm(r,e);if(r instanceof zo)return(function(n,i){if(!Hm(i.Ec))throw i.wc(`${n._methodName}() can only be used with update() and set()`);if(!i.path)throw i.wc(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(i);s&&i.fieldTransforms.push(s)})(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return(function(n,i){const s=[];let o=0;for(const c of n){let u=Ji(c,i.yc(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}})(r,e)}return(function(n,i){if((n=ee(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return LT(i.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=te.fromDate(n);return{timestampValue:Ir(i.serializer,s)}}if(n instanceof te){const s=new te(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Ir(i.serializer,s)}}if(n instanceof st)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Be)return{bytesValue:Kp(i.serializer,n._byteString)};if(n instanceof le){const s=i.databaseId,o=n.firestore._databaseId;if(!o.isEqual(s))throw i.wc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Xc(n.firestore._databaseId||i.databaseId,n._key.path)}}if(n instanceof ot)return(function(o,c){return{mapValue:{fields:{[Bc]:{stringValue:jc},[dr]:{arrayValue:{values:o.toArray().map((h=>{if(typeof h!="number")throw c.wc("VectorValues must only contain numeric values.");return zc(c.serializer,h)}))}}}}}})(n,i);throw i.wc(`Unsupported field value: ${Po(n)}`)})(r,e)}function Qm(r,e){const t={};return cp(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):sn(r,((n,i)=>{const s=Ji(i,e.Vc(n));s!=null&&(t[n]=s)})),{mapValue:{fields:t}}}function Xm(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof te||r instanceof st||r instanceof Be||r instanceof le||r instanceof zo||r instanceof ot)}function bu(r,e,t){if(!Xm(t)||!Kf(t)){const n=Po(t);throw n==="an object"?e.wc(r+" a custom object"):e.wc(r+" "+n)}}function gc(r,e,t){if((e=ee(e))instanceof Bn)return e._internalPath;if(typeof e=="string")return Pu(r,e);throw _o("Field path arguments must be of type string or ",r,!1,void 0,t)}const Jw=new RegExp("[~\\*/\\[\\]]");function Pu(r,e,t){if(e.search(Jw)>=0)throw _o(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new Bn(...e.split("."))._internalPath}catch{throw _o(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function _o(r,e,t,n,i){const s=n&&!n.isEmpty(),o=i!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${n}`),o&&(u+=` in document ${i}`),u+=")"),new N(S.INVALID_ARGUMENT,c+r+u)}function Jm(r,e){return r.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(e,t,n,i,s){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new le(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Yw(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Su("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Yw extends yo{data(){return super.data()}}function Su(r,e){return typeof e=="string"?Pu(r,e):e instanceof Bn?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ym(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new N(S.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Cu{}class Zw extends Cu{}function sR(r,e,...t){let n=[];e instanceof Cu&&n.push(e),n=n.concat(t),(function(s){const o=s.filter((u=>u instanceof Vu)).length,c=s.filter((u=>u instanceof Wo)).length;if(o>1||o>0&&c>0)throw new N(S.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(n);for(const i of n)r=i._apply(r);return r}class Wo extends Zw{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new Wo(e,t,n)}_apply(e){const t=this._parse(e);return Zm(e._query,t),new an(e.firestore,e.converter,nc(e._query,t))}_parse(e){const t=Dr(e.firestore);return(function(s,o,c,u,h,f,m){let g;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new N(S.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Cd(m,f);const C=[];for(const k of m)C.push(Sd(u,s,k));g={arrayValue:{values:C}}}else g=Sd(u,s,m)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Cd(m,f),g=Xw(c,o,m,f==="in"||f==="not-in");return Q.create(h,f,g)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function oR(r,e,t){const n=e,i=Su("where",r);return Wo._create(i,n,t)}class Vu extends Cu{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Vu(e,t)}_parse(e){const t=this._queryConstraints.map((n=>n._parse(e))).filter((n=>n.getFilters().length>0));return t.length===1?t[0]:ne.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(i,s){let o=i;const c=s.getFlattenedFilters();for(const u of c)Zm(o,u),o=nc(o,u)})(e._query,t),new an(e.firestore,e.converter,nc(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Sd(r,e,t){if(typeof(t=ee(t))=="string"){if(t==="")throw new N(S.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!bp(e)&&t.indexOf("/")!==-1)throw new N(S.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const n=e.path.child(Y.fromString(t));if(!O.isDocumentKey(n))throw new N(S.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return Pi(r,new O(n))}if(t instanceof le)return Pi(r,t._key);throw new N(S.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Po(t)}.`)}function Cd(r,e){if(!Array.isArray(r)||r.length===0)throw new N(S.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Zm(r,e){const t=(function(i,s){for(const o of i)for(const c of o.getFlattenedFilters())if(s.indexOf(c.op)>=0)return c.op;return null})(r.filters,(function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new N(S.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new N(S.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class eg{convertValue(e,t="none"){switch(Yt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ae(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(wt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw M(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return sn(e,((i,s)=>{n[i]=this.convertValue(s,t)})),n}convertVectorValue(e){var t,n,i;const s=(i=(n=(t=e.fields)===null||t===void 0?void 0:t[dr].arrayValue)===null||n===void 0?void 0:n.values)===null||i===void 0?void 0:i.map((o=>ae(o.doubleValue)));return new ot(s)}convertGeoPoint(e){return new st(ae(e.latitude),ae(e.longitude))}convertArray(e,t){return(e.values||[]).map((n=>this.convertValue(n,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=ko(e);return n==null?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(Ri(e));default:return null}}convertTimestamp(e){const t=vt(e);return new te(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=Y.fromString(e);U(tm(n),9688,{name:e});const i=new Dn(n.get(1),n.get(3)),s=new O(n.popFirst(5));return i.isEqual(t)||fe(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ho(r,e,t){let n;return n=r?t&&(t.merge||t.mergeFields)?r.toFirestore(e,t):r.toFirestore(e):e,n}class eA extends eg{constructor(e){super(),this.firestore=e}convertBytes(e){return new Be(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new le(this.firestore,null,t)}}class vn{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class It extends yo{constructor(e,t,n,i,s,o){super(e,t,n,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new qs(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(Su("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new N(S.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=It._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}It._jsonSchemaVersion="firestore/documentSnapshot/1.0",It._jsonSchema={type:ge("string",It._jsonSchemaVersion),bundleSource:ge("string","DocumentSnapshot"),bundleName:ge("string"),bundle:ge("string")};class qs extends It{data(e={}){return super.data(e)}}class Qt{constructor(e,t,n,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new vn(i.hasPendingWrites,i.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new qs(this._firestore,this._userDataWriter,n.key,n,new vn(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new N(S.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map((c=>{const u=new qs(i._firestore,i._userDataWriter,c.doc.key,c.doc,new vn(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);return c.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}}))}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter((c=>s||c.type!==3)).map((c=>{const u=new qs(i._firestore,i._userDataWriter,c.doc.key,c.doc,new vn(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,f=-1;return c.type!==0&&(h=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),f=o.indexOf(c.doc.key)),{type:tA(c.type),doc:u,oldIndex:h,newIndex:f}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new N(S.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Qt._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=kc.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],n=[],i=[];return this.docs.forEach((s=>{s._document!==null&&(t.push(s._document),n.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function tA(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return M(61501,{type:r})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aR(r){r=_e(r,le);const e=_e(r.firestore,Ke);return jw(cn(e),r._key).then((t=>tg(e,r,t)))}Qt._jsonSchemaVersion="firestore/querySnapshot/1.0",Qt._jsonSchema={type:ge("string",Qt._jsonSchemaVersion),bundleSource:ge("string","QuerySnapshot"),bundleName:ge("string"),bundle:ge("string")};class kr extends eg{constructor(e){super(),this.firestore=e}convertBytes(e){return new Be(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new le(this.firestore,null,t)}}function cR(r){r=_e(r,le);const e=_e(r.firestore,Ke),t=cn(e),n=new kr(e);return Bw(t,r._key).then((i=>new It(e,n,r._key,i,new vn(i!==null&&i.hasLocalMutations,!0),r.converter)))}function uR(r){r=_e(r,an);const e=_e(r.firestore,Ke),t=cn(e),n=new kr(e);return Ym(r._query),$w(t,r._query).then((i=>new Qt(e,n,r,i)))}function lR(r){r=_e(r,an);const e=_e(r.firestore,Ke),t=cn(e),n=new kr(e);return qw(t,r._query).then((i=>new Qt(e,n,r,i)))}function hR(r,e,t){r=_e(r,le);const n=_e(r.firestore,Ke),i=Ho(r.converter,e,t);return Yi(n,[Ko(Dr(n),"setDoc",r._key,i,r.converter!==null,t).toMutation(r._key,ue.none())])}function dR(r,e,t,...n){r=_e(r,le);const i=_e(r.firestore,Ke),s=Dr(i);let o;return o=typeof(e=ee(e))=="string"||e instanceof Bn?Ru(s,"updateDoc",r._key,e,t,n):Au(s,"updateDoc",r._key,e),Yi(i,[o.toMutation(r._key,ue.exists(!0))])}function fR(r){return Yi(_e(r.firestore,Ke),[new Pr(r._key,ue.none())])}function pR(r,e){const t=_e(r.firestore,Ke),n=Kw(r),i=Ho(r.converter,e);return Yi(t,[Ko(Dr(r.firestore),"addDoc",n._key,i,r.converter!==null,{}).toMutation(n._key,ue.exists(!1))]).then((()=>n))}function mR(r,...e){var t,n,i;r=ee(r);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||Pd(e[o])||(s=e[o++]);const c={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(Pd(e[o])){const m=e[o];e[o]=(t=m.next)===null||t===void 0?void 0:t.bind(m),e[o+1]=(n=m.error)===null||n===void 0?void 0:n.bind(m),e[o+2]=(i=m.complete)===null||i===void 0?void 0:i.bind(m)}let u,h,f;if(r instanceof le)h=_e(r.firestore,Ke),f=Ki(r._key.path),u={next:m=>{e[o]&&e[o](tg(h,r,m))},error:e[o+1],complete:e[o+2]};else{const m=_e(r,an);h=_e(m.firestore,Ke),f=m._query;const g=new kr(h);u={next:b=>{e[o]&&e[o](new Qt(h,g,m,b))},error:e[o+1],complete:e[o+2]},Ym(r._query)}return(function(g,b,C,k){const V=new Iu(k),$=new fu(b,V,C);return g.asyncQueue.enqueueAndForget((async()=>lu(await go(g),$))),()=>{V.Ou(),g.asyncQueue.enqueueAndForget((async()=>hu(await go(g),$)))}})(cn(h),f,c,u)}function Yi(r,e){return(function(n,i){const s=new qe;return n.asyncQueue.enqueueAndForget((async()=>Iw(await Fw(n),i,s))),s.promise})(cn(r),e)}function tg(r,e,t){const n=t.docs.get(e._key),i=new kr(r);return new It(r,i,e._key,n,new vn(t.hasPendingWrites,t.fromCache),e.converter)}class nA{constructor(e){let t;this.kind="persistent",e!=null&&e.tabManager?(e.tabManager._initialize(e),t=e.tabManager):(t=sA(),t._initialize(e)),this._onlineComponentProvider=t._onlineComponentProvider,this._offlineComponentProvider=t._offlineComponentProvider}toJSON(){return{kind:this.kind}}}function gR(r){return new nA(r)}class rA{constructor(e){this.forceOwnership=e,this.kind="persistentSingleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=Ni.provider,this._offlineComponentProvider={build:t=>new $m(t,e==null?void 0:e.cacheSizeBytes,this.forceOwnership)}}}class iA{constructor(){this.kind="PersistentMultipleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=Ni.provider,this._offlineComponentProvider={build:t=>new xw(t,e==null?void 0:e.cacheSizeBytes)}}}function sA(r){return new rA(void 0)}function _R(){return new iA}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oA={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aA{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Dr(e)}set(e,t,n){this._verifyNotCommitted();const i=$t(e,this._firestore),s=Ho(i.converter,t,n),o=Ko(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,n);return this._mutations.push(o.toMutation(i._key,ue.none())),this}update(e,t,n,...i){this._verifyNotCommitted();const s=$t(e,this._firestore);let o;return o=typeof(t=ee(t))=="string"||t instanceof Bn?Ru(this._dataReader,"WriteBatch.update",s._key,t,n,i):Au(this._dataReader,"WriteBatch.update",s._key,t),this._mutations.push(o.toMutation(s._key,ue.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=$t(e,this._firestore);return this._mutations=this._mutations.concat(new Pr(t._key,ue.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new N(S.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function $t(r,e){if((r=ee(r)).firestore!==e)throw new N(S.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cA{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=Dr(e)}get(e){const t=$t(e,this._firestore),n=new eA(this._firestore);return this._transaction.lookup([t._key]).then((i=>{if(!i||i.length!==1)return M(24041);const s=i[0];if(s.isFoundDocument())return new yo(this._firestore,n,s.key,s,t.converter);if(s.isNoDocument())return new yo(this._firestore,n,t._key,null,t.converter);throw M(18433,{doc:s})}))}set(e,t,n){const i=$t(e,this._firestore),s=Ho(i.converter,t,n),o=Ko(this._dataReader,"Transaction.set",i._key,s,i.converter!==null,n);return this._transaction.set(i._key,o),this}update(e,t,n,...i){const s=$t(e,this._firestore);let o;return o=typeof(t=ee(t))=="string"||t instanceof Bn?Ru(this._dataReader,"Transaction.update",s._key,t,n,i):Au(this._dataReader,"Transaction.update",s._key,t),this._transaction.update(s._key,o),this}delete(e){const t=$t(e,this._firestore);return this._transaction.delete(t._key),this}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uA extends cA{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=$t(e,this._firestore),n=new kr(this._firestore);return super.get(e).then((i=>new It(this._firestore,n,t._key,i._document,new vn(!1,!1),t.converter)))}}function yR(r,e,t){r=_e(r,Ke);const n=Object.assign(Object.assign({},oA),t);return(function(s){if(s.maxAttempts<1)throw new N(S.INVALID_ARGUMENT,"Max attempts must be at least 1")})(n),(function(s,o,c){const u=new qe;return s.asyncQueue.enqueueAndForget((async()=>{const h=await Uw(s);new Mw(s.asyncQueue,h,c,o,u).zu()})),u.promise})(cn(r),(i=>e(new uA(r,i))),n)}function IR(){return new wu("serverTimestamp")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ER(r){return cn(r=_e(r,Ke)),new aA(r,(e=>Yi(r,e)))}(function(e,t=!0){(function(i){Rr=i})(Fn),bn(new Xt("firestore",((n,{instanceIdentifier:i,options:s})=>{const o=n.getProvider("app").getImmediate(),c=new Ke(new OE(n.getProvider("auth-internal")),new FE(o,n.getProvider("app-check-internal")),(function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new N(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Dn(h.options.projectId,f)})(o,i),o);return s=Object.assign({useFetchStreams:t},s),c._setSettings(s),c}),"PUBLIC").setMultipleInstances(!0)),rt(ch,uh,e),rt(ch,uh,"esm2017")})();var lA="firebase",hA="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */rt(lA,hA,"app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ng="firebasestorage.googleapis.com",dA="storageBucket",fA=120*1e3,pA=600*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt extends ut{constructor(e,t,n=0){super(xa(e),`Firebase Storage: ${t} (${xa(e)})`),this.status_=n,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,lt.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return xa(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ct;(function(r){r.UNKNOWN="unknown",r.OBJECT_NOT_FOUND="object-not-found",r.BUCKET_NOT_FOUND="bucket-not-found",r.PROJECT_NOT_FOUND="project-not-found",r.QUOTA_EXCEEDED="quota-exceeded",r.UNAUTHENTICATED="unauthenticated",r.UNAUTHORIZED="unauthorized",r.UNAUTHORIZED_APP="unauthorized-app",r.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",r.INVALID_CHECKSUM="invalid-checksum",r.CANCELED="canceled",r.INVALID_EVENT_NAME="invalid-event-name",r.INVALID_URL="invalid-url",r.INVALID_DEFAULT_BUCKET="invalid-default-bucket",r.NO_DEFAULT_BUCKET="no-default-bucket",r.CANNOT_SLICE_BLOB="cannot-slice-blob",r.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",r.NO_DOWNLOAD_URL="no-download-url",r.INVALID_ARGUMENT="invalid-argument",r.INVALID_ARGUMENT_COUNT="invalid-argument-count",r.APP_DELETED="app-deleted",r.INVALID_ROOT_OPERATION="invalid-root-operation",r.INVALID_FORMAT="invalid-format",r.INTERNAL_ERROR="internal-error",r.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ct||(ct={}));function xa(r){return"storage/"+r}function mA(){const r="An unknown error occurred, please check the error payload for server response.";return new lt(ct.UNKNOWN,r)}function gA(){return new lt(ct.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function _A(){return new lt(ct.CANCELED,"User canceled the upload/download.")}function yA(r){return new lt(ct.INVALID_URL,"Invalid URL '"+r+"'.")}function IA(r){return new lt(ct.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+r+"'.")}function Vd(r){return new lt(ct.INVALID_ARGUMENT,r)}function rg(){return new lt(ct.APP_DELETED,"The Firebase app was deleted.")}function EA(r){return new lt(ct.INVALID_ROOT_OPERATION,"The operation '"+r+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let n;try{n=Je.makeFromUrl(e,t)}catch{return new Je(e,"")}if(n.path==="")return n;throw IA(e)}static makeFromUrl(e,t){let n=null;const i="([A-Za-z0-9.\\-_]+)";function s(K){K.path.charAt(K.path.length-1)==="/"&&(K.path_=K.path_.slice(0,-1))}const o="(/(.*))?$",c=new RegExp("^gs://"+i+o,"i"),u={bucket:1,path:3};function h(K){K.path_=decodeURIComponent(K.path)}const f="v[A-Za-z0-9_]+",m=t.replace(/[.]/g,"\\."),g="(/([^?#]*).*)?$",b=new RegExp(`^https?://${m}/${f}/b/${i}/o${g}`,"i"),C={bucket:1,path:3},k=t===ng?"(?:storage.googleapis.com|storage.cloud.google.com)":t,V="([^?#]*)",$=new RegExp(`^https?://${k}/${i}/${V}`,"i"),L=[{regex:c,indices:u,postModify:s},{regex:b,indices:C,postModify:h},{regex:$,indices:{bucket:1,path:2},postModify:h}];for(let K=0;K<L.length;K++){const X=L[K],G=X.regex.exec(e);if(G){const E=G[X.indices.bucket];let _=G[X.indices.path];_||(_=""),n=new Je(E,_),X.postModify(n);break}}if(n==null)throw yA(e);return n}}class TA{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vA(r,e,t){let n=1,i=null,s=null,o=!1,c=0;function u(){return c===2}let h=!1;function f(...V){h||(h=!0,e.apply(null,V))}function m(V){i=setTimeout(()=>{i=null,r(b,u())},V)}function g(){s&&clearTimeout(s)}function b(V,...$){if(h){g();return}if(V){g(),f.call(null,V,...$);return}if(u()||o){g(),f.call(null,V,...$);return}n<64&&(n*=2);let L;c===1?(c=2,L=0):L=(n+Math.random())*1e3,m(L)}let C=!1;function k(V){C||(C=!0,g(),!h&&(i!==null?(V||(c=2),clearTimeout(i),m(0)):V||(c=1)))}return m(0),s=setTimeout(()=>{o=!0,k(!0)},t),k}function wA(r){r(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AA(r){return r!==void 0}function Dd(r,e,t,n){if(n<e)throw Vd(`Invalid value for '${r}'. Expected ${e} or greater.`);if(n>t)throw Vd(`Invalid value for '${r}'. Expected ${t} or less.`)}function RA(r){const e=encodeURIComponent;let t="?";for(const n in r)if(r.hasOwnProperty(n)){const i=e(n)+"="+e(r[n]);t=t+i+"&"}return t=t.slice(0,-1),t}var Io;(function(r){r[r.NO_ERROR=0]="NO_ERROR",r[r.NETWORK_ERROR=1]="NETWORK_ERROR",r[r.ABORT=2]="ABORT"})(Io||(Io={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bA(r,e){const t=r>=500&&r<600,i=[408,429].indexOf(r)!==-1,s=e.indexOf(r)!==-1;return t||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PA{constructor(e,t,n,i,s,o,c,u,h,f,m,g=!0,b=!1){this.url_=e,this.method_=t,this.headers_=n,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=c,this.errorCallback_=u,this.timeout_=h,this.progressCallback_=f,this.connectionFactory_=m,this.retry=g,this.isUsingEmulator=b,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((C,k)=>{this.resolve_=C,this.reject_=k,this.start_()})}start_(){const e=(n,i)=>{if(i){n(!1,new bs(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=c=>{const u=c.loaded,h=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,h)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const c=s.getErrorCode()===Io.NO_ERROR,u=s.getStatus();if(!c||bA(u,this.additionalRetryCodes_)&&this.retry){const f=s.getErrorCode()===Io.ABORT;n(!1,new bs(!1,null,f));return}const h=this.successCodes_.indexOf(u)!==-1;n(!0,new bs(h,s))})},t=(n,i)=>{const s=this.resolve_,o=this.reject_,c=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(c,c.getResponse());AA(u)?s(u):s()}catch(u){o(u)}else if(c!==null){const u=mA();u.serverResponse=c.getErrorText(),this.errorCallback_?o(this.errorCallback_(c,u)):o(u)}else if(i.canceled){const u=this.appDelete_?rg():_A();o(u)}else{const u=gA();o(u)}};this.canceled_?t(!1,new bs(!1,null,!0)):this.backoffId_=vA(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&wA(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class bs{constructor(e,t,n){this.wasSuccessCode=e,this.connection=t,this.canceled=!!n}}function SA(r,e){e!==null&&e.length>0&&(r.Authorization="Firebase "+e)}function CA(r,e){r["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function VA(r,e){e&&(r["X-Firebase-GMPID"]=e)}function DA(r,e){e!==null&&(r["X-Firebase-AppCheck"]=e)}function kA(r,e,t,n,i,s,o=!0,c=!1){const u=RA(r.urlParams),h=r.url+u,f=Object.assign({},r.headers);return VA(f,e),SA(f,t),CA(f,s),DA(f,n),new PA(h,r.method,f,r.body,r.successCodes,r.additionalRetryCodes,r.handler,r.errorHandler,r.timeout,r.progressCallback,i,o,c)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NA(r){if(r.length===0)return null;const e=r.lastIndexOf("/");return e===-1?"":r.slice(0,e)}function xA(r){const e=r.lastIndexOf("/",r.length-2);return e===-1?r:r.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{constructor(e,t){this._service=e,t instanceof Je?this._location=t:this._location=Je.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Eo(e,t)}get root(){const e=new Je(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return xA(this._location.path)}get storage(){return this._service}get parent(){const e=NA(this._location.path);if(e===null)return null;const t=new Je(this._location.bucket,e);return new Eo(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw EA(e)}}function kd(r,e){const t=e==null?void 0:e[dA];return t==null?null:Je.makeFromBucketSpec(t,r)}function OA(r,e,t,n={}){r.host=`${e}:${t}`;const i=Ln(e);i&&(_c(`https://${r.host}/b`),qd("Storage",!0)),r._isUsingEmulator=!0,r._protocol=i?"https":"http";const{mockUserToken:s}=n;s&&(r._overrideAuthToken=typeof s=="string"?s:Qg(s,r.app.options.projectId))}class MA{constructor(e,t,n,i,s,o=!1){this.app=e,this._authProvider=t,this._appCheckProvider=n,this._url=i,this._firebaseVersion=s,this._isUsingEmulator=o,this._bucket=null,this._host=ng,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=fA,this._maxUploadRetryTime=pA,this._requests=new Set,i!=null?this._bucket=Je.makeFromBucketSpec(i,this._host):this._bucket=kd(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Je.makeFromBucketSpec(this._url,e):this._bucket=kd(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Dd("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Dd("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(Oe(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Eo(this,e)}_makeRequest(e,t,n,i,s=!0){if(this._deleted)return new TA(rg());{const o=kA(e,this._appId,n,i,t,this._firebaseVersion,s,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,t){const[n,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,n,i).getPromise()}}const Nd="@firebase/storage",xd="0.13.14";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ig="storage";function TR(r=Qd(),e){r=ee(r);const n=vo(r,ig).getImmediate({identifier:e}),i=Wg("storage");return i&&LA(n,...i),n}function LA(r,e,t,n={}){OA(r,e,t,n)}function FA(r,{instanceIdentifier:e}){const t=r.getProvider("app").getImmediate(),n=r.getProvider("auth-internal"),i=r.getProvider("app-check-internal");return new MA(t,n,i,e,Fn)}function UA(){bn(new Xt(ig,FA,"PUBLIC").setMultipleInstances(!0)),rt(Nd,xd,""),rt(Nd,xd,"esm2017")}UA();export{$A as A,JA as B,KA as C,qA as D,Ar as E,My as F,Lt as G,BA as H,HA as I,yR as J,RI as K,Sf as L,QA as M,mR as N,oR as O,iR as P,rR as a,TR as b,_R as c,nR as d,uR as e,lR as f,eR as g,pR as h,uy as i,Kw as j,aR as k,cR as l,fR as m,hR as n,GA as o,gR as p,sR as q,jA as r,IR as s,ZA as t,dR as u,XA as v,ER as w,WA as x,zA as y,YA as z};

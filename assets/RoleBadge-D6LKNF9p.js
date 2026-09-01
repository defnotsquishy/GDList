import{j as e,r as c}from"./react-vendor-DSqCpQl4.js";import{B as s}from"./Badge-B8YZZiUJ.js";import{c as i,w as h,T as p}from"./index-DHAAIN1J.js";import{C as u}from"./crown-CO5xABlb.js";/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=i("Ban",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m4.9 4.9 14.2 14.2",key:"1m5liu"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=i("CodeXml",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]),f=new Set(["ntyu2","ksois"]);function g({role:n="user",title:t="",username:d="",banned:o=!1,isDeveloper:l=!1,size:r="sm"}){if(o)return e.jsxs(s,{variant:"red",size:r,children:[e.jsx(x,{size:12,"aria-hidden":"true"})," Banned"]});const m=!!l||t==="List Developer"||f.has(d.trim().toLowerCase()),a=n==="developer"?"owner":n;return e.jsxs(c.Fragment,{children:[a==="owner"&&e.jsxs(s,{variant:"gold",size:r,children:[e.jsx(u,{size:12,"aria-hidden":"true"})," Owner"]}),a==="admin"&&e.jsxs(s,{variant:"purple",size:r,children:[e.jsx(h,{size:12,"aria-hidden":"true"})," Admin"]}),a!=="owner"&&a!=="admin"&&e.jsxs(s,{variant:"default",size:r,children:[e.jsx(p,{size:12,"aria-hidden":"true"})," Player"]}),(m||a==="developer")&&e.jsxs(s,{variant:"blue",size:r,children:[e.jsx(j,{size:12,"aria-hidden":"true"})," List Developer"]})]})}export{x as B,j as C,g as R};

(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{8116:function(e,t,n){Promise.resolve().then(n.t.bind(n,7533,23)),Promise.resolve().then(n.bind(n,6210))},6210:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return g}});var a=n(9268),r=n(3350),s=n.n(r),i=n(6006),o=n(6008);function c(e){let{width:t,length:n,depth:r,unitDetails:s}=e,i=Array.from(Array(s.unitCount)).map((e,t)=>(0,a.jsx)("div",{className:"unit-circle",style:{width:"".concat(s.baseDiameter,"mm"),height:"".concat(s.baseDiameter,"mm"),border:"3px solid white",borderRadius:"100px",backgroundColor:"lightgray"}},"circle-".concat(t)));return(0,a.jsx)("div",{id:"tray",style:{border:"".concat(Math.ceil(r/2),"px solid white"),width:"".concat(t,"mm"),height:"".concat(n,"mm"),display:"flex",flexWrap:"wrap",justifyContent:"space-evenly",alignItems:"center"},children:i})}let l=e=>({length:parseInt(e.get("length")||"80",10),width:parseInt(e.get("width")||"120",10),depth:parseInt(e.get("depth")||"6",10)}),u=e=>parseInt(e.get("baseDiameter")||"25",10),p=e=>parseInt(e.get("baseDepth")||"3",10),d=e=>parseInt(e.get("unitCount")||"10",10),_=(e,t)=>parseInt(e,10)?t(parseInt(e,10)):void 0,h=e=>{let{name:t,value:n,onChange:r}=e;return(0,a.jsx)("span",{className:s().trayDimension,children:(0,a.jsxs)("label",{htmlFor:"tray-".concat(t),children:[t,(0,a.jsx)("input",{onChange:e=>_(e.target.value,r),className:s().dimensionInput,type:"number",id:"tray-".concat(t),value:n})]})})};function g(){let e=(0,o.useRouter)(),t=(0,o.useSearchParams)(),[n,r]=(0,i.useState)(l(t)),[s,_]=(0,i.useState)(u(t)),[g,m]=(0,i.useState)(p(t)),[f,x]=(0,i.useState)(d(t)),{length:y,width:v,depth:j}=n;return(0,i.useEffect)(()=>{e.replace("/?length=".concat(y,"&width=").concat(v,"&depth=").concat(j,"&baseDiameter=").concat(s,"&baseDepth=").concat(g,"&unitCount=").concat(f))},[y,v,j,e,s,g,f]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("h2",{children:"Tray Dimensions"}),(0,a.jsx)(h,{name:"Length",value:y,onChange:e=>r({...n,length:e})}),(0,a.jsx)(h,{name:"Width",value:v,onChange:e=>r({...n,width:e})}),(0,a.jsx)(h,{name:"Depth",value:j,onChange:e=>r({...n,depth:e})})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h2",{children:"Unit Details"}),(0,a.jsx)(h,{name:"Unit Count",value:f,onChange:x}),(0,a.jsx)(h,{name:"Base Diameter",value:s,onChange:_}),(0,a.jsx)(h,{name:"Base Depth",value:g,onChange:m})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h2",{children:"Preview"}),(0,a.jsx)(c,{...n,unitDetails:{tag:"n-circular-bases",unitCount:f,baseDiameter:s,baseDepth:g}})]})]})}},7533:function(e){e.exports={main:"page_main__ibFHK",description:"page_description__s_Lqk",code:"page_code__Cdcue",grid:"page_grid__2WZXq",card:"page_card__ftWzl",center:"page_center__GvJ9Y",logo:"page_logo__M5piD",content:"page_content__rFejU",vercelLogo:"page_vercelLogo__1QD2W",rotate:"page_rotate__P15uU"}},3350:function(e){e.exports={trayDimension:"tray-designer_trayDimension__XDpGn",dimensionInput:"tray-designer_dimensionInput__3GwsM"}},3177:function(e,t,n){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a=n(6006),r=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var a,s={},l=null,u=null;for(a in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(u=t.ref),t)i.call(t,a)&&!c.hasOwnProperty(a)&&(s[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===s[a]&&(s[a]=t[a]);return{$$typeof:r,type:e,key:l,ref:u,props:s,_owner:o.current}}t.Fragment=s,t.jsx=l,t.jsxs=l},9268:function(e,t,n){"use strict";e.exports=n(3177)},6008:function(e,t,n){e.exports=n(3027)}},function(e){e.O(0,[667,488,744],function(){return e(e.s=8116)}),_N_E=e.O()}]);
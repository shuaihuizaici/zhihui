import{r as z,u as I}from"./use-route-Ty0eFOKu.js";import{c as R,e as w,$ as l,n as C,d as D,aG as N,a as o,I as q,a0 as L,aw as O,w as U}from"./index-Bo7BXbGR.js";const[_,a]=R("button"),p=w({},z,{tag:l("button"),text:String,icon:String,type:l("default"),size:l("normal"),color:String,block:Boolean,plain:Boolean,round:Boolean,square:Boolean,loading:Boolean,hairline:Boolean,disabled:Boolean,iconPrefix:String,nativeType:l("button"),loadingSize:C,loadingText:String,loadingType:String,iconPosition:l("left")});var E=D({name:_,props:p,emits:["click"],setup(n,{emit:g,slots:t}){const f=I(),b=()=>t.loading?t.loading():o(O,{size:n.loadingSize,type:n.loadingType,class:a("loading")},null),c=()=>{if(n.loading)return b();if(t.icon)return o("div",{class:a("icon")},[t.icon()]);if(n.icon)return o(q,{name:n.icon,class:a("icon"),classPrefix:n.iconPrefix},null)},m=()=>{let e;if(n.loading?e=n.loadingText:e=t.default?t.default():n.text,e)return o("span",{class:a("text")},[e])},x=()=>{const{color:e,plain:r}=n;if(e){const i={color:r?e:"white"};return r||(i.background=e),e.includes("gradient")?i.border=0:i.borderColor=e,i}},y=e=>{n.loading?L(e):n.disabled||(g("click",e),f())};return()=>{const{tag:e,type:r,size:i,block:S,round:B,plain:P,square:k,loading:T,disabled:s,hairline:d,nativeType:h,iconPosition:u}=n,v=[a([r,i,{plain:P,block:S,round:B,square:k,loading:T,disabled:s,hairline:d}]),{[N]:d}];return o(e,{type:h,class:v,style:x(),disabled:s,onClick:y},{default:()=>[o("div",{class:a("content")},[u==="left"&&c(),m(),u==="right"&&c()])]})}}});const $=U(E);export{$ as B};

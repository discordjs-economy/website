import{o as e,b as l,e as n,d as s,k as a,l as r,c as t,r as o,w as u,t as i,F as d,A as p,f as m,z as v,M as c}from"./vendor.79db57bd.js";import{u as y}from"./index.41ccb31b.js";import{m as h,_ as k}from"./SourceButton.vue_vue&type=script&setup=true&lang.974261a6.js";import{d as f,t as w,_ as b,a as g,c as x,b as M}from"./See.vue_vue&type=script&setup=true&lang.0bd80ccb.js";import{a as j,b as A,D as T}from"./headlessui.esm.5f2b3dc4.js";const _={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},H=n("g",{fill:"none"},[n("path",{d:"M12 4v16m8-8H4",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1);var B={name:"heroicons-outline-plus",render:function(n,s){return e(),l("svg",_,[H])}};const L={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},R=n("g",{fill:"none"},[n("path",{d:"M20 12H4",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1);var S={name:"heroicons-outline-minus",render:function(n,s){return e(),l("svg",L,[R])}};const C={class:"flex gap-1 items-center -ml-1"},E={class:"font-semibold"},P={class:"sr-only"};var Y=s({props:["names","variable","nullable"],setup(s){var c;const k=s,M=a(),_=r(),H=y(),L=t((()=>H.state.docs)),R=o(null==(c=L.value)?void 0:c.typedefs.find((e=>e.name===k.names[0][0]))),Y=t((()=>{var e,l;return h(null!=(l=x(null==(e=R.value)?void 0:e.description,L.value,M,_))?l:"")}));return(a,r)=>{const t=B,o=S;return R.value?(e(),l(m(T),{key:0,as:"div"},{default:u((({open:a})=>[n(m(j),{as:"div",class:"focus:outline-none"},{default:u((()=>[n("div",C,[n("span",E,i(s.nullable?"?":"")+i(s.variable?"...":""),1),(e(!0),l(d,null,p(s.names,(n=>(e(),l(f,{key:m(w)(n),type:n},null,8,["type"])))),128)),n("button",{class:"leading-3 focus:outline-none","aria-expanded":a},[n("span",P,i(a?"Shrink":"Expand"),1),n(t,{class:["inline-block",{hidden:a}],"aria-hidden":"true"},null,8,["class"]),n(o,{class:["inline-block",{hidden:!a}],"aria-hidden":"true"},null,8,["class"])],8,["aria-expanded"])])])),_:2},1024),n(m(A),null,{default:u((()=>{var n,s;return[m(Y)?(e(),l("div",{key:0,innerHTML:m(Y)},null,8,["innerHTML"])):v("",!0),(null==(n=R.value)?void 0:n.props)?(e(),l(b,{key:1,parameters:null==(s=R.value)?void 0:s.props},null,8,["parameters"])):v("",!0)]})),_:1})])),_:1})):(e(),l(g,{key:1,names:s.names},null,8,["names"]))}}});const z={class:"mx-auto py-16 px-4 sm:px-8 lg:py-8 w-full"},D={class:"prose prose-discord dark:prose-light break-words-legacy mx-auto max-w-4xl lg:max-w-full"},F=n("h2",null,"Types",-1),I={id:"typedef-types"},$={key:2},q=n("h2",null,"Properties",-1),G={key:3},J=n("h2",null,"Parameters",-1),K={key:4},N=n("h2",null,"Returns",-1),O={key:0},Q={key:1};var U=s({setup(s){var o;const u=a(),f=r(),j=y(),A=t((()=>j.state.docs)),T=null==(o=A.value)?void 0:o.typedefs.find((e=>e.name===f.params.typedef)),_=t((()=>h(x(null==T?void 0:T.description,A.value,u,f))));return c((()=>{const e=document.getElementById("container");e&&e.scrollTop>200&&e.scrollTo({top:0,behavior:"smooth"})})),(s,a)=>{var r,t,o,u,c,y,h,f,x,j,A,H,B;return e(),l("div",z,[n(k,{class:"float-right mt-2",meta:null==(r=m(T))?void 0:r.meta},null,8,["meta"]),n("div",D,[n("h1",{id:`doc-for-${null==(t=m(T))?void 0:t.name}`},i(null==(o=m(T))?void 0:o.name),9,["id"]),(null==(u=m(T))?void 0:u.description)?(e(),l("p",{key:0,innerHTML:m(_)},null,8,["innerHTML"])):v("",!0),(null==(y=null==(c=m(T))?void 0:c.see)?void 0:y.length)?(e(),l(M,{key:1,see:null==(h=m(T))?void 0:h.see},null,8,["see"])):v("",!0),F,n("ul",I,[(e(!0),l(d,null,p(null==(f=m(T))?void 0:f.type,(s=>(e(),l("li",{key:m(w)(s)},[n(Y,{class:"!m-0",names:s},null,8,["names"])])))),128))]),(null==(x=m(T))?void 0:x.props)&&(null==(j=m(T))?void 0:j.props.length)?(e(),l("div",$,[q,n(b,{parameters:m(T).props},null,8,["parameters"])])):v("",!0),(null==(A=m(T))?void 0:A.params)&&(null==(H=m(T))?void 0:H.params.length)?(e(),l("div",G,[J,n(b,{parameters:m(T).params},null,8,["parameters"])])):v("",!0),(null==(B=m(T))?void 0:B.returns)?(e(),l("div",K,[N,n("p",null,[m(T).returns&&Array.isArray(m(T).returns)?(e(),l("span",O,[(e(!0),l(d,null,p(m(T).returns,(n=>(e(),l(g,{key:m(w)(n),names:n},null,8,["names"])))),128))])):m(T).returns&&!Array.isArray(m(T).returns)?(e(),l("span",Q,[(e(!0),l(d,null,p(m(T).returns.types||m(T).returns,(n=>(e(),l(g,{key:m(w)(n),names:n,variable:m(T).returns.variable,nullable:m(T).returns.nullable},null,8,["names","variable","nullable"])))),128))])):v("",!0)])])):v("",!0)])])}}});export{U as default};

import{S as N,i as A,s as O,e as d,a as _,b as h,u as oe,g as ce,c as ae,t as $,d as m,f as g,h as P,j as b,k as j,l as u,m as C,n as q,o as H,p as ue,q as fe,r as M,v as F,w,F as V,x as de,y as L,z as _e,A as J,B as G,C as ve,D as pe,E as $e,G as me}from"./vendor.7484d19a.js";const he=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))t(l);new MutationObserver(l=>{for(const s of l)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function n(l){const s={};return l.integrity&&(s.integrity=l.integrity),l.referrerpolicy&&(s.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?s.credentials="include":l.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(l){if(l.ep)return;l.ep=!0;const s=n(l);fetch(l.href,s)}};he();const ge=r=>({}),Q=r=>({});function W(r){let e,n;const t=r[5].icon,l=fe(t,r,r[4],Q);return{c(){e=d("span"),l&&l.c(),_(e,"class","icon-container svelte-7t3h26")},m(s,i){h(s,e,i),l&&l.m(e,null),n=!0},p(s,i){l&&l.p&&(!n||i&16)&&oe(l,t,s,s[4],n?ae(t,s[4],i,ge):ce(s[4]),Q)},i(s){n||($(l,s),n=!0)},o(s){m(l,s),n=!1},d(s){s&&g(e),l&&l.d(s)}}}function be(r){let e,n,t,l,s=r[2].icon&&W(r);return{c(){e=d("button"),n=P(r[0]),t=b(),s&&s.c(),_(e,"class","svelte-7t3h26"),j(e,"icon-top",ye==="top"),j(e,"contained",r[1]==="contained"),j(e,"outlined",r[1]==="outlined")},m(i,o){h(i,e,o),u(e,n),u(e,t),s&&s.m(e,null),l=!0},p(i,[o]){(!l||o&1)&&C(n,i[0]),i[2].icon?s?(s.p(i,o),o&4&&$(s,1)):(s=W(i),s.c(),$(s,1),s.m(e,null)):s&&(q(),m(s,1,1,()=>{s=null}),H()),o&2&&j(e,"contained",i[1]==="contained"),o&2&&j(e,"outlined",i[1]==="outlined")},i(i){l||($(s),l=!0)},o(i){m(s),l=!1},d(i){i&&g(e),s&&s.d()}}}let ye="top";function ke(r,e,n){let{$$slots:t={},$$scope:l}=e;const s=ue(t);let{text:i=""}=e,{variant:o="contained"}=e,{color:c="primary"}=e;return r.$$set=a=>{"text"in a&&n(0,i=a.text),"variant"in a&&n(1,o=a.variant),"color"in a&&n(3,c=a.color),"$$scope"in a&&n(4,l=a.$$scope)},[i,o,s,c,l,t]}class X extends N{constructor(e){super();A(this,e,ke,be,O,{text:0,variant:1,color:3})}}var k;(function(r){r.MAIN="Main",r.SORT="Sort",r.SERVICE="Service"})(k||(k={}));const Y=[{title:"\u0413\u043B\u0430\u0432\u043D\u0430\u044F",type:k.MAIN},{title:"\u0423\u043F\u043E\u0440\u044F\u0434\u043E\u0447\u0438\u0432\u0430\u043D\u0438\u0435",type:k.SORT},{title:"\u0421\u0435\u0440\u0432\u0438\u0441",type:k.SERVICE}];function Z(r){let e,n,t,l,s,i,o,c;return l=new X({props:{variant:"outlined",color:"primary",text:"\u0441\u043E\u0437\u0434\u0430\u0442\u044C",$$slots:{icon:[Me]},$$scope:{ctx:r}}}),o=new X({props:{variant:"outlined",color:"primary",text:"\u0443\u0434\u0430\u043B\u0438\u0442\u044C",$$slots:{icon:[Fe]},$$scope:{ctx:r}}}),{c(){e=d("div"),n=d("ul"),t=d("li"),M(l.$$.fragment),s=b(),i=d("li"),M(o.$$.fragment),_(t,"class","svelte-s9vjz0"),_(i,"class","svelte-s9vjz0"),_(n,"class","buttons svelte-s9vjz0"),_(e,"class","panel")},m(a,f){h(a,e,f),u(e,n),u(n,t),F(l,t,null),u(n,s),u(n,i),F(o,i,null),c=!0},p(a,f){const v={};f&2&&(v.$$scope={dirty:f,ctx:a}),l.$set(v);const p={};f&2&&(p.$$scope={dirty:f,ctx:a}),o.$set(p)},i(a){c||($(l.$$.fragment,a),$(o.$$.fragment,a),c=!0)},o(a){m(l.$$.fragment,a),m(o.$$.fragment,a),c=!1},d(a){a&&g(e),w(l),w(o)}}}function Me(r){let e,n;return e=new V({props:{icon:de,size:"1.6x"}}),{c(){M(e.$$.fragment)},m(t,l){F(e,t,l),n=!0},p:L,i(t){n||($(e.$$.fragment,t),n=!0)},o(t){m(e.$$.fragment,t),n=!1},d(t){w(e,t)}}}function Fe(r){let e,n;return e=new V({props:{icon:_e,size:"1.6x"}}),{c(){M(e.$$.fragment)},m(t,l){F(e,t,l),n=!0},p:L,i(t){n||($(e.$$.fragment,t),n=!0)},o(t){m(e.$$.fragment,t),n=!1},d(t){w(e,t)}}}function x(r){let e;return{c(){e=d("div"),_(e,"class","panel")},m(n,t){h(n,e,t)},d(n){n&&g(e)}}}function we(r){let e,n,t,l=r[0]===k.MAIN&&Z(r),s=r[0]===k.SORT&&x();return{c(){e=d("div"),l&&l.c(),n=b(),s&&s.c(),_(e,"class","container svelte-s9vjz0")},m(i,o){h(i,e,o),l&&l.m(e,null),u(e,n),s&&s.m(e,null),t=!0},p(i,[o]){i[0]===k.MAIN?l?(l.p(i,o),o&1&&$(l,1)):(l=Z(i),l.c(),$(l,1),l.m(e,n)):l&&(q(),m(l,1,1,()=>{l=null}),H()),i[0]===k.SORT?s||(s=x(),s.c(),s.m(e,null)):s&&(s.d(1),s=null)},i(i){t||($(l),t=!0)},o(i){m(l),t=!1},d(i){i&&g(e),l&&l.d(),s&&s.d()}}}function je(r,e,n){let{activeMenu:t=k.MAIN}=e;return r.$$set=l=>{"activeMenu"in l&&n(0,t=l.activeMenu)},[t]}class Ie extends N{constructor(e){super();A(this,e,je,we,O,{activeMenu:0})}}function ee(r,e,n){const t=r.slice();return t[3]=e[n].type,t[4]=e[n].title,t}function te(r){let e,n,t=r[4]+"",l,s,i,o;function c(){return r[2](r[3])}return{c(){e=d("li"),n=d("button"),l=P(t),s=b(),_(n,"class","svelte-48shyi"),j(n,"is-active",r[3]===r[0])},m(a,f){h(a,e,f),u(e,n),u(n,l),u(e,s),i||(o=J(n,"click",c),i=!0)},p(a,f){r=a,f&1&&j(n,"is-active",r[3]===r[0])},d(a){a&&g(e),i=!1,o()}}}function Ee(r){let e,n,t,l,s,i=Y,o=[];for(let c=0;c<i.length;c+=1)o[c]=te(ee(r,i,c));return l=new Ie({props:{activeMenu:r[0]}}),{c(){e=d("header"),n=d("ul");for(let c=0;c<o.length;c+=1)o[c].c();t=b(),M(l.$$.fragment),_(n,"class","buttons svelte-48shyi"),_(e,"class","container")},m(c,a){h(c,e,a),u(e,n);for(let f=0;f<o.length;f+=1)o[f].m(n,null);h(c,t,a),F(l,c,a),s=!0},p(c,[a]){if(a&3){i=Y;let v;for(v=0;v<i.length;v+=1){const p=ee(c,i,v);o[v]?o[v].p(p,a):(o[v]=te(p),o[v].c(),o[v].m(n,null))}for(;v<o.length;v+=1)o[v].d(1);o.length=i.length}const f={};a&1&&(f.activeMenu=c[0]),l.$set(f)},i(c){s||($(l.$$.fragment,c),s=!0)},o(c){m(l.$$.fragment,c),s=!1},d(c){c&&g(e),G(o,c),c&&g(t),w(l,c)}}}function Ne(r,e,n){let t=k.MAIN;const l=i=>n(0,t=i);return[t,l,i=>l(i)]}class Ae extends N{constructor(e){super();A(this,e,Ne,Ee,O,{})}}var z;(function(r){r.INPUT="Input",r.OUTPUT="Output"})(z||(z={}));const le=[{title:"\u0412\u0445\u043E\u0434\u044F\u0449\u0438\u0435",type:z.INPUT,icon:ve},{title:"\u0418\u0441\u0445\u043E\u0434\u044F\u0449\u0438\u0435",type:z.OUTPUT,icon:pe}];function ne(r,e,n){const t=r.slice();return t[4]=e[n].title,t[5]=e[n].type,t[6]=e[n].icon,t}function ie(r){let e,n,t,l,s=r[4]+"",i,o,c,a,f;t=new V({props:{icon:r[6],size:"1x",class:"icon"}});function v(){return r[2](r[5])}return{c(){e=d("li"),n=d("button"),M(t.$$.fragment),l=b(),i=P(s),o=b(),_(n,"class","svelte-i4t9ze"),j(n,"is-active",r[5]===r[0]),_(e,"class","svelte-i4t9ze")},m(p,y){h(p,e,y),u(e,n),F(t,n,null),u(n,l),u(n,i),u(e,o),c=!0,a||(f=J(n,"click",v),a=!0)},p(p,y){r=p,y&1&&j(n,"is-active",r[5]===r[0])},i(p){c||($(t.$$.fragment,p),c=!0)},o(p){m(t.$$.fragment,p),c=!1},d(p){p&&g(e),w(t),a=!1,f()}}}function Oe(r){let e,n,t=le,l=[];for(let i=0;i<t.length;i+=1)l[i]=ie(ne(r,t,i));const s=i=>m(l[i],1,1,()=>{l[i]=null});return{c(){e=d("ul");for(let i=0;i<l.length;i+=1)l[i].c();_(e,"class","svelte-i4t9ze")},m(i,o){h(i,e,o);for(let c=0;c<l.length;c+=1)l[c].m(e,null);n=!0},p(i,[o]){if(o&3){t=le;let c;for(c=0;c<t.length;c+=1){const a=ne(i,t,c);l[c]?(l[c].p(a,o),$(l[c],1)):(l[c]=ie(a),l[c].c(),$(l[c],1),l[c].m(e,null))}for(q(),c=t.length;c<l.length;c+=1)s(c);H()}},i(i){if(!n){for(let o=0;o<t.length;o+=1)$(l[o]);n=!0}},o(i){l=l.filter(Boolean);for(let o=0;o<l.length;o+=1)m(l[o]);n=!1},d(i){i&&g(e),G(l,i)}}}function Pe(r,e,n){let{activeFolder:t}=e;const l=$e(),s=o=>l("click",{type:o}),i=o=>s(o);return r.$$set=o=>{"activeFolder"in o&&n(0,t=o.activeFolder)},[t,s,i]}class Se extends N{constructor(e){super();A(this,e,Pe,Oe,O,{activeFolder:0})}}function se(r,e,n){const t=r.slice();return t[1]=e[n].sender,t[2]=e[n].subject,t[3]=e[n].time,t[4]=e[n].body,t}function re(r){let e,n,t,l,s=r[1].title+"",i,o,c,a,f=r[2]+"",v,p,y,E=r[3]+"",S,U,R,D=r[4].title+"",B,K;return{c(){e=d("li"),n=d("button"),t=d("div"),l=d("div"),i=P(s),o=b(),c=d("div"),a=d("span"),v=P(f),p=b(),y=d("time"),S=P(E),U=b(),R=d("div"),B=P(D),K=b(),_(l,"class","title svelte-1952uk0"),_(a,"class","svelte-1952uk0"),_(y,"class","svelte-1952uk0"),_(c,"class","subject svelte-1952uk0"),_(R,"class","body svelte-1952uk0"),_(t,"class","wrapper svelte-1952uk0"),_(n,"class","svelte-1952uk0"),_(e,"class","svelte-1952uk0")},m(I,T){h(I,e,T),u(e,n),u(n,t),u(t,l),u(l,i),u(t,o),u(t,c),u(c,a),u(a,v),u(c,p),u(c,y),u(y,S),u(t,U),u(t,R),u(R,B),u(e,K)},p(I,T){T&1&&s!==(s=I[1].title+"")&&C(i,s),T&1&&f!==(f=I[2]+"")&&C(v,f),T&1&&E!==(E=I[3]+"")&&C(S,E),T&1&&D!==(D=I[4].title+"")&&C(B,D)},d(I){I&&g(e)}}}function Te(r){let e,n=r[0],t=[];for(let l=0;l<n.length;l+=1)t[l]=re(se(r,n,l));return{c(){e=d("ul");for(let l=0;l<t.length;l+=1)t[l].c();_(e,"class","svelte-1952uk0")},m(l,s){h(l,e,s);for(let i=0;i<t.length;i+=1)t[i].m(e,null)},p(l,[s]){if(s&1){n=l[0];let i;for(i=0;i<n.length;i+=1){const o=se(l,n,i);t[i]?t[i].p(o,s):(t[i]=re(o),t[i].c(),t[i].m(e,null))}for(;i<t.length;i+=1)t[i].d(1);t.length=n.length}},i:L,o:L,d(l){l&&g(e),G(t,l)}}}function ze(r,e,n){let{messages:t=[]}=e;return r.$$set=l=>{"messages"in l&&n(0,t=l.messages)},[t]}class Ue extends N{constructor(e){super();A(this,e,ze,Te,O,{messages:0})}}const Ce=async r=>{try{return await(await fetch(r)).json()}catch(e){return alert(e==null?void 0:e.message),{errorMessage:e==null?void 0:e.message}}},Le=async r=>{const e=r===z.INPUT?"/data/mail/inbox.json":"/data/mail/outbox.json",n=await Ce(e);return"data"in n&&n.data?n.data.map(t=>{var l,s,i,o,c,a,f,v,p,y;return{id:(l=t.id)!=null?l:0,sender:{login:(i=(s=t==null?void 0:t.sender)==null?void 0:s.login)!=null?i:"",title:(c=(o=t==null?void 0:t.sender)==null?void 0:o.title)!=null?c:""},recipients:t==null?void 0:t.recipients.map(E=>{var S,U;return{login:(S=E.login)!=null?S:"",title:(U=E.title)!=null?U:""}}),subject:(a=t==null?void 0:t.subject)!=null?a:"",time:(t==null?void 0:t.time)?me(t.time).format("HH:MM"):"",body:{title:(v=(f=t==null?void 0:t.body)==null?void 0:f.title)!=null?v:"",html:(y=(p=t==null?void 0:t.body)==null?void 0:p.html)!=null?y:""}}}):[]};function Re(r){let e,n,t,l;return e=new Se({props:{activeFolder:r[0]}}),e.$on("click",r[2]),t=new Ue({props:{messages:r[1]}}),{c(){M(e.$$.fragment),n=b(),M(t.$$.fragment)},m(s,i){F(e,s,i),h(s,n,i),F(t,s,i),l=!0},p(s,[i]){const o={};i&1&&(o.activeFolder=s[0]),e.$set(o);const c={};i&2&&(c.messages=s[1]),t.$set(c)},i(s){l||($(e.$$.fragment,s),$(t.$$.fragment,s),l=!0)},o(s){m(e.$$.fragment,s),m(t.$$.fragment,s),l=!1},d(s){w(e,s),s&&g(n),w(t,s)}}}function De(r,e,n){let t=z.INPUT,l=[];const s=o=>{n(0,t=o.detail.type)},i=async()=>{n(1,l=await Le(t))};return r.$$.update=()=>{r.$$.dirty&1&&t&&i()},[t,l,s]}class Be extends N{constructor(e){super();A(this,e,De,Re,O,{})}}function qe(r){let e,n,t,l,s,i,o;return t=new Ae({}),i=new Be({}),{c(){e=d("div"),n=d("div"),M(t.$$.fragment),l=b(),s=d("main"),M(i.$$.fragment),_(s,"class","main svelte-3yjb9v"),_(n,"class","app svelte-3yjb9v"),_(e,"class","container svelte-3yjb9v")},m(c,a){h(c,e,a),u(e,n),F(t,n,null),u(n,l),u(n,s),F(i,s,null),o=!0},p:L,i(c){o||($(t.$$.fragment,c),$(i.$$.fragment,c),o=!0)},o(c){m(t.$$.fragment,c),m(i.$$.fragment,c),o=!1},d(c){c&&g(e),w(t),w(i)}}}class He extends N{constructor(e){super();A(this,e,null,qe,O,{})}}new He({target:document.getElementById("app")});
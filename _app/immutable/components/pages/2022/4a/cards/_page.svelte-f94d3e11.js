import{I as oe,J as ds,K as re,L as hs,M as fs,S as le,i as ae,s as ie,k as w,a as I,l as b,m as f,h as d,c as A,n,N as Rt,b as $,G as a,O as S,g as ce,t as kt,d as ue,f as gt,P as qt,H as Xe,o as _s,Q as ps,B as Vt,R as vs,e as Nt,T as ms,v as Fe,w as Ht,x as de,y as Gt,U as ks,V as gs,z as Lt,W as ws,X as Ke,Y as bs,Z as ys,_ as Es,$ as Bs,a0 as Ds,a1 as js,a2 as Ts,a3 as O,q as V,a4 as P,r as N,a5 as Cs,u as se}from"../../../../../chunks/index-8a91b636.js";import{w as Ze}from"../../../../../chunks/index-465534bb.js";function $e(r){const t=r-1;return t*t*t+1}function Is(r,{delay:t=0,duration:e=400,easing:s=oe}={}){const o=+getComputedStyle(r).opacity;return{delay:t,duration:e,easing:s,css:u=>`opacity: ${u*o}`}}function As(r,{delay:t=0,duration:e=400,easing:s=$e,x:o=0,y:u=0,opacity:_=0}={}){const i=getComputedStyle(r),l=+i.opacity,c=i.transform==="none"?"":i.transform,g=l*(1-_);return{delay:t,duration:e,easing:s,css:(v,h)=>`
			transform: ${c} translate(${(1-v)*o}px, ${(1-v)*u}px);
			opacity: ${l-g*h}`}}function Ms(r,{from:t,to:e},s={}){const o=getComputedStyle(r),u=o.transform==="none"?"":o.transform,[_,i]=o.transformOrigin.split(" ").map(parseFloat),l=t.left+t.width*_/e.width-(e.left+_),c=t.top+t.height*i/e.height-(e.top+i),{delay:g=0,duration:v=k=>Math.sqrt(k)*120,easing:h=$e}=s;return{delay:g,duration:ds(v)?v(Math.sqrt(l*l+c*c)):v,easing:h,css:(k,p)=>{const y=p*l,E=p*c,m=k+p*t.width/e.width,R=k+p*t.height/e.height;return`transform: ${u} translate(${y}px, ${E}px) scale(${m}, ${R});`}}}const Ss={duration:4e3,initial:1,next:0,pausable:!1,dismissable:!0,reversed:!1,intro:{x:256}},Os=()=>{const{subscribe:r,update:t}=Ze([]);let e=0;const s={},o=c=>c instanceof Object;return{subscribe:r,push:(c,g={})=>{const v={target:"default",...o(c)?c:{...g,msg:c}},h=s[v.target]||{},k={...Ss,...h,...v,theme:{...h.theme,...v.theme},classes:[...h.classes||[],...v.classes||[]],id:++e};return t(p=>k.reversed?[...p,k]:[k,...p]),e},pop:c=>{t(g=>{if(!g.length||c===0)return[];if(o(c))return g.filter(h=>c(h));const v=c||Math.max(...g.map(h=>h.id));return g.filter(h=>h.id!==v)})},set:(c,g={})=>{const v=o(c)?{...c}:{...g,id:c};t(h=>{const k=h.findIndex(p=>p.id===v.id);return k>-1&&(h[k]={...h[k],...v}),h})},_init:(c="default",g={})=>(s[c]=g,s)}},At=Os();function Ue(r){return Object.prototype.toString.call(r)==="[object Date]"}function ne(r,t){if(r===t||r!==r)return()=>r;const e=typeof r;if(e!==typeof t||Array.isArray(r)!==Array.isArray(t))throw new Error("Cannot interpolate values of different type");if(Array.isArray(r)){const s=t.map((o,u)=>ne(r[u],o));return o=>s.map(u=>u(o))}if(e==="object"){if(!r||!t)throw new Error("Object cannot be null");if(Ue(r)&&Ue(t)){r=r.getTime(),t=t.getTime();const u=t-r;return _=>new Date(r+_*u)}const s=Object.keys(t),o={};return s.forEach(u=>{o[u]=ne(r[u],t[u])}),u=>{const _={};return s.forEach(i=>{_[i]=o[i](u)}),_}}if(e==="number"){const s=t-r;return o=>r+o*s}throw new Error(`Cannot interpolate ${e} values`)}function Ps(r,t={}){const e=Ze(r);let s,o=r;function u(_,i){if(r==null)return e.set(r=_),Promise.resolve();o=_;let l=s,c=!1,{delay:g=0,duration:v=400,easing:h=oe,interpolate:k=ne}=re(re({},t),i);if(v===0)return l&&(l.abort(),l=null),e.set(r=o),Promise.resolve();const p=hs()+g;let y;return s=fs(E=>{if(E<p)return!0;c||(y=k(r,_),typeof v=="function"&&(v=v(r,_)),c=!0),l&&(l.abort(),l=null);const m=E-p;return m>v?(e.set(r=_),!1):(e.set(r=y(h(m/v))),!0)}),s.promise}return{set:u,update:(_,i)=>u(_(o,r),i),subscribe:e.subscribe}}function Rs(r){let t,e=r[0].msg+"",s;return{c(){t=new vs(!1),s=Nt(),this.h()},l(o){t=ms(o,!1),s=Nt(),this.h()},h(){t.a=s},m(o,u){t.m(e,o,u),$(o,s,u)},p(o,u){u&1&&e!==(e=o[0].msg+"")&&t.p(e)},i:Vt,o:Vt,d(o){o&&d(s),o&&t.d()}}}function Vs(r){let t,e,s;const o=[r[2]];var u=r[0].component.src;function _(i){let l={};for(let c=0;c<o.length;c+=1)l=re(l,o[c]);return{props:l}}return u&&(t=Fe(u,_())),{c(){t&&Ht(t.$$.fragment),e=Nt()},l(i){t&&de(t.$$.fragment,i),e=Nt()},m(i,l){t&&Gt(t,i,l),$(i,e,l),s=!0},p(i,l){const c=l&4?ks(o,[gs(i[2])]):{};if(u!==(u=i[0].component.src)){if(t){ce();const g=t;kt(g.$$.fragment,1,0,()=>{Lt(g,1)}),ue()}u?(t=Fe(u,_()),Ht(t.$$.fragment),gt(t.$$.fragment,1),Gt(t,e.parentNode,e)):t=null}else u&&t.$set(c)},i(i){s||(t&&gt(t.$$.fragment,i),s=!0)},o(i){t&&kt(t.$$.fragment,i),s=!1},d(i){i&&d(e),t&&Lt(t,i)}}}function Ye(r){let t,e,s;return{c(){t=w("div"),this.h()},l(o){t=b(o,"DIV",{class:!0,role:!0,tabindex:!0}),f(t).forEach(d),this.h()},h(){n(t,"class","_toastBtn pe svelte-l65oht"),n(t,"role","button"),n(t,"tabindex","0")},m(o,u){$(o,t,u),e||(s=[S(t,"click",r[4]),S(t,"keydown",r[8])],e=!0)},p:Vt,d(o){o&&d(t),e=!1,qt(s)}}}function Ns(r){let t,e,s,o,u,_,i,l,c,g;const v=[Vs,Rs],h=[];function k(y,E){return y[0].component?0:1}s=k(r),o=h[s]=v[s](r);let p=r[0].dismissable&&Ye(r);return{c(){t=w("div"),e=w("div"),o.c(),u=I(),p&&p.c(),_=I(),i=w("progress"),this.h()},l(y){t=b(y,"DIV",{class:!0});var E=f(t);e=b(E,"DIV",{role:!0,class:!0});var m=f(e);o.l(m),m.forEach(d),u=A(E),p&&p.l(E),_=A(E),i=b(E,"PROGRESS",{class:!0}),f(i).forEach(d),E.forEach(d),this.h()},h(){n(e,"role","status"),n(e,"class","_toastMsg svelte-l65oht"),Rt(e,"pe",r[0].component),n(i,"class","_toastBar svelte-l65oht"),i.value=r[1],n(t,"class","_toastItem svelte-l65oht"),Rt(t,"pe",r[0].pausable)},m(y,E){$(y,t,E),a(t,e),h[s].m(e,null),a(t,u),p&&p.m(t,null),a(t,_),a(t,i),l=!0,c||(g=[S(t,"mouseenter",r[9]),S(t,"mouseleave",r[6])],c=!0)},p(y,[E]){let m=s;s=k(y),s===m?h[s].p(y,E):(ce(),kt(h[m],1,1,()=>{h[m]=null}),ue(),o=h[s],o?o.p(y,E):(o=h[s]=v[s](y),o.c()),gt(o,1),o.m(e,null)),(!l||E&1)&&Rt(e,"pe",y[0].component),y[0].dismissable?p?p.p(y,E):(p=Ye(y),p.c(),p.m(t,_)):p&&(p.d(1),p=null),(!l||E&2)&&(i.value=y[1]),(!l||E&1)&&Rt(t,"pe",y[0].pausable)},i(y){l||(gt(o),l=!0)},o(y){kt(o),l=!1},d(y){y&&d(t),h[s].d(),p&&p.d(),c=!1,qt(g)}}}function Hs(r,t,e){let s,{item:o}=t;const u=Ps(o.initial,{duration:o.duration,easing:oe});Xe(r,u,B=>e(1,s=B));const _=()=>At.pop(o.id),i=()=>{(s===1||s===0)&&_()};let l=o.initial,c=l,g=!1;const v=()=>{!g&&s!==l&&(u.set(s,{duration:0}),g=!0)},h=()=>{if(g){const B=o.duration,j=B-B*((s-c)/(l-c));u.set(l,{duration:j}).then(i),g=!1}};let k={};const p=(B,j="undefined")=>typeof B===j;let y;_s((B=document)=>{if(p(B.hidden))return;const j=()=>B.hidden?v():h(),z="visibilitychange";B.addEventListener(z,j),y=()=>B.removeEventListener(z,j),j()}),ps(()=>{p(o.onpop,"function")&&o.onpop(o.id),y&&y()});const m=B=>{B instanceof KeyboardEvent&&["Enter"," "].includes(B.key)&&_()},R=()=>{o.pausable&&v()};return r.$$set=B=>{"item"in B&&e(0,o=B.item)},r.$$.update=()=>{if(r.$$.dirty&1&&(p(o.progress)||e(0,o.next=o.progress,o)),r.$$.dirty&131&&l!==o.next&&(e(7,l=o.next),c=s,g=!1,u.set(l).then(i)),r.$$.dirty&1&&o.component){const{props:B={},sendIdTo:j}=o.component;e(2,k={...B,...j&&{[j]:o.id}})}},[o,s,k,u,_,v,h,l,m,R]}class Gs extends le{constructor(t){super(),ae(this,t,Hs,Ns,ie,{item:0})}}function xe(r,t,e){const s=r.slice();return s[5]=t[e],s}function Je(r,t){let e,s,o,u,_,i,l,c,g=Vt,v;return s=new Gs({props:{item:t[5]}}),{key:r,first:null,c(){e=w("li"),Ht(s.$$.fragment),o=I(),this.h()},l(h){e=b(h,"LI",{class:!0,style:!0});var k=f(e);de(s.$$.fragment,k),o=A(k),k.forEach(d),this.h()},h(){n(e,"class",u=Ke(t[5].classes.join(" "))+" svelte-yh90az"),n(e,"style",_=t[1](t[5].theme)),this.first=e},m(h,k){$(h,e,k),Gt(s,e,null),a(e,o),v=!0},p(h,k){t=h;const p={};k&1&&(p.item=t[5]),s.$set(p),(!v||k&1&&u!==(u=Ke(t[5].classes.join(" "))+" svelte-yh90az"))&&n(e,"class",u),(!v||k&1&&_!==(_=t[1](t[5].theme)))&&n(e,"style",_)},r(){c=e.getBoundingClientRect()},f(){bs(e),g(),ys(e,c)},a(){g(),g=Es(e,c,Ms,{duration:200})},i(h){v||(gt(s.$$.fragment,h),Bs(()=>{l&&l.end(1),i=Ds(e,As,t[5].intro),i.start()}),v=!0)},o(h){kt(s.$$.fragment,h),i&&i.invalidate(),l=js(e,Is,{}),v=!1},d(h){h&&d(e),Lt(s),h&&l&&l.end()}}}function Ls(r){let t,e=[],s=new Map,o,u=r[0];const _=i=>i[5].id;for(let i=0;i<u.length;i+=1){let l=xe(r,u,i),c=_(l);s.set(c,e[i]=Je(c,l))}return{c(){t=w("ul");for(let i=0;i<e.length;i+=1)e[i].c();this.h()},l(i){t=b(i,"UL",{class:!0});var l=f(t);for(let c=0;c<e.length;c+=1)e[c].l(l);l.forEach(d),this.h()},h(){n(t,"class","_toastContainer svelte-yh90az")},m(i,l){$(i,t,l);for(let c=0;c<e.length;c+=1)e[c].m(t,null);o=!0},p(i,[l]){if(l&3){u=i[0],ce();for(let c=0;c<e.length;c+=1)e[c].r();e=ws(e,l,_,1,i,u,s,t,Ts,Je,null,xe);for(let c=0;c<e.length;c+=1)e[c].a();ue()}},i(i){if(!o){for(let l=0;l<u.length;l+=1)gt(e[l]);o=!0}},o(i){for(let l=0;l<e.length;l+=1)kt(e[l]);o=!1},d(i){i&&d(t);for(let l=0;l<e.length;l+=1)e[l].d()}}}function qs(r,t,e){let s;Xe(r,At,l=>e(4,s=l));let{options:o={}}=t,{target:u="default"}=t,_;const i=l=>Object.keys(l).reduce((c,g)=>`${c}${g}:${l[g]};`,"");return r.$$set=l=>{"options"in l&&e(2,o=l.options),"target"in l&&e(3,u=l.target)},r.$$.update=()=>{r.$$.dirty&12&&At._init(u,o),r.$$.dirty&24&&e(0,_=s.filter(l=>l.target===u))},[_,i,o,u,s]}class zs extends le{constructor(t){super(),ae(this,t,qs,Ls,ie,{options:2,target:3})}}function Qe(r,t,e){const s=r.slice();s[14]=t[e],s[17]=e;const o=s[17];return s[15]=o,s}function We(r){let t,e,s,o=r[17]+1+"",u,_,i,l,c,g,v,h,k,p,y,E,m,R,B,j,z,L,H,T,D,M,C=r[0][r[15]].c+"",F,wt,K,G,Q,tt,bt,W,et,U,st,zt,yt=r[0][r[15]].h+"",Mt,Ft,rt,Y,nt,Kt,Et,X,ot,x,lt,Ut,Bt=r[0][r[15]].o+"",St,Yt,at,J,it,xt,Dt,ct,Jt,jt,ut,Qt,Tt,dt,Wt,Ct,ht,Xt,It,ft,Zt,$t,te,he;function ts(){return r[3](r[15])}function es(){return r[4](r[15])}function ss(){return r[5](r[15])}function rs(){return r[6](r[15])}function ns(){return r[7](r[15])}function os(){return r[8](r[15])}function ls(){return r[9](r[15])}function as(){return r[10](r[15])}function is(){return r[11](r[15])}function cs(){return r[12](r[15])}function us(){return r[13](r[15])}return{c(){t=w("div"),e=w("h3"),s=V("Player "),u=V(o),_=I(),i=w("br"),l=I(),c=w("table"),g=w("thead"),v=w("tr"),h=w("td"),k=V("Carbon"),p=w("td"),y=V("Hydrogen"),E=w("td"),m=V("Oxygen"),R=I(),B=w("tbody"),j=w("tr"),z=w("td"),L=w("div"),H=w("span"),T=O("svg"),D=O("path"),M=I(),F=V(C),wt=I(),K=w("span"),G=O("svg"),Q=O("path"),tt=I(),bt=w("td"),W=w("div"),et=w("span"),U=O("svg"),st=O("path"),zt=I(),Mt=V(yt),Ft=I(),rt=w("span"),Y=O("svg"),nt=O("path"),Kt=I(),Et=w("td"),X=w("div"),ot=w("span"),x=O("svg"),lt=O("path"),Ut=I(),St=V(Bt),Yt=I(),at=w("span"),J=O("svg"),it=O("path"),xt=I(),Dt=w("td"),ct=w("div"),Jt=V(`Make glucose
								`),jt=w("td"),ut=w("div"),Qt=V(`Get water
								`),Tt=w("td"),dt=w("div"),Wt=V(`Get CO2
								`),Ct=w("td"),ht=w("div"),Xt=V(`Remove water
								`),It=w("td"),ft=w("div"),Zt=V("Remove CO2"),$t=I(),this.h()},l(_t){t=b(_t,"DIV",{class:!0});var q=f(t);e=b(q,"H3",{class:!0});var ee=f(e);s=N(ee,"Player "),u=N(ee,o),ee.forEach(d),_=A(q),i=b(q,"BR",{}),l=A(q),c=b(q,"TABLE",{class:!0});var Ot=f(c);g=b(Ot,"THEAD",{});var fe=f(g);v=b(fe,"TR",{});var Pt=f(v);h=b(Pt,"TD",{});var _e=f(h);k=N(_e,"Carbon"),_e.forEach(d),p=b(Pt,"TD",{});var pe=f(p);y=N(pe,"Hydrogen"),pe.forEach(d),E=b(Pt,"TD",{});var ve=f(E);m=N(ve,"Oxygen"),ve.forEach(d),Pt.forEach(d),fe.forEach(d),R=A(Ot),B=b(Ot,"TBODY",{});var me=f(B);j=b(me,"TR",{});var Z=f(j);z=b(Z,"TD",{});var ke=f(z);L=b(ke,"DIV",{});var pt=f(L);H=b(pt,"SPAN",{class:!0});var ge=f(H);T=P(ge,"svg",{xmlns:!0,fill:!0,viewBox:!0,"stroke-width":!0,stroke:!0,class:!0});var we=f(T);D=P(we,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,d:!0}),f(D).forEach(d),we.forEach(d),ge.forEach(d),M=A(pt),F=N(pt,C),wt=A(pt),K=b(pt,"SPAN",{class:!0});var be=f(K);G=P(be,"svg",{xmlns:!0,fill:!0,viewBox:!0,"stroke-width":!0,stroke:!0,class:!0});var ye=f(G);Q=P(ye,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,d:!0}),f(Q).forEach(d),ye.forEach(d),be.forEach(d),tt=A(pt),pt.forEach(d),ke.forEach(d),bt=b(Z,"TD",{});var Ee=f(bt);W=b(Ee,"DIV",{});var vt=f(W);et=b(vt,"SPAN",{class:!0});var Be=f(et);U=P(Be,"svg",{xmlns:!0,fill:!0,viewBox:!0,"stroke-width":!0,stroke:!0,class:!0});var De=f(U);st=P(De,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,d:!0}),f(st).forEach(d),De.forEach(d),Be.forEach(d),zt=A(vt),Mt=N(vt,yt),Ft=A(vt),rt=b(vt,"SPAN",{class:!0});var je=f(rt);Y=P(je,"svg",{xmlns:!0,fill:!0,viewBox:!0,"stroke-width":!0,stroke:!0,class:!0});var Te=f(Y);nt=P(Te,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,d:!0}),f(nt).forEach(d),Te.forEach(d),je.forEach(d),Kt=A(vt),vt.forEach(d),Ee.forEach(d),Et=b(Z,"TD",{});var Ce=f(Et);X=b(Ce,"DIV",{});var mt=f(X);ot=b(mt,"SPAN",{class:!0});var Ie=f(ot);x=P(Ie,"svg",{xmlns:!0,fill:!0,viewBox:!0,"stroke-width":!0,stroke:!0,class:!0});var Ae=f(x);lt=P(Ae,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,d:!0}),f(lt).forEach(d),Ae.forEach(d),Ie.forEach(d),Ut=A(mt),St=N(mt,Bt),Yt=A(mt),at=b(mt,"SPAN",{class:!0});var Me=f(at);J=P(Me,"svg",{xmlns:!0,fill:!0,viewBox:!0,"stroke-width":!0,stroke:!0,class:!0});var Se=f(J);it=P(Se,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,d:!0}),f(it).forEach(d),Se.forEach(d),Me.forEach(d),xt=A(mt),mt.forEach(d),Ce.forEach(d),Dt=b(Z,"TD",{});var Oe=f(Dt);ct=b(Oe,"DIV",{class:!0});var Pe=f(ct);Jt=N(Pe,`Make glucose
								`),Pe.forEach(d),Oe.forEach(d),jt=b(Z,"TD",{});var Re=f(jt);ut=b(Re,"DIV",{class:!0});var Ve=f(ut);Qt=N(Ve,`Get water
								`),Ve.forEach(d),Re.forEach(d),Tt=b(Z,"TD",{});var Ne=f(Tt);dt=b(Ne,"DIV",{class:!0});var He=f(dt);Wt=N(He,`Get CO2
								`),He.forEach(d),Ne.forEach(d),Ct=b(Z,"TD",{});var Ge=f(Ct);ht=b(Ge,"DIV",{class:!0});var Le=f(ht);Xt=N(Le,`Remove water
								`),Le.forEach(d),Ge.forEach(d),It=b(Z,"TD",{});var qe=f(It);ft=b(qe,"DIV",{class:!0});var ze=f(ft);Zt=N(ze,"Remove CO2"),ze.forEach(d),qe.forEach(d),Z.forEach(d),me.forEach(d),Ot.forEach(d),$t=A(q),q.forEach(d),this.h()},h(){n(e,"class","ml-3"),n(D,"stroke-linecap","round"),n(D,"stroke-linejoin","round"),n(D,"d","M12 4.5v15m7.5-7.5h-15"),n(T,"xmlns","http://www.w3.org/2000/svg"),n(T,"fill","none"),n(T,"viewBox","0 0 24 24"),n(T,"stroke-width","1.5"),n(T,"stroke","currentColor"),n(T,"class","w-6 h-6 inline"),n(H,"class","btn btn-success"),n(Q,"stroke-linecap","round"),n(Q,"stroke-linejoin","round"),n(Q,"d","M19.5 12h-15"),n(G,"xmlns","http://www.w3.org/2000/svg"),n(G,"fill","none"),n(G,"viewBox","0 0 24 24"),n(G,"stroke-width","1.5"),n(G,"stroke","currentColor"),n(G,"class","w-6 h-6 inline"),n(K,"class","btn btn-error"),n(st,"stroke-linecap","round"),n(st,"stroke-linejoin","round"),n(st,"d","M12 4.5v15m7.5-7.5h-15"),n(U,"xmlns","http://www.w3.org/2000/svg"),n(U,"fill","none"),n(U,"viewBox","0 0 24 24"),n(U,"stroke-width","1.5"),n(U,"stroke","currentColor"),n(U,"class","w-6 h-6 inline"),n(et,"class","btn btn-success"),n(nt,"stroke-linecap","round"),n(nt,"stroke-linejoin","round"),n(nt,"d","M19.5 12h-15"),n(Y,"xmlns","http://www.w3.org/2000/svg"),n(Y,"fill","none"),n(Y,"viewBox","0 0 24 24"),n(Y,"stroke-width","1.5"),n(Y,"stroke","currentColor"),n(Y,"class","w-6 h-6 inline"),n(rt,"class","btn btn-error"),n(lt,"stroke-linecap","round"),n(lt,"stroke-linejoin","round"),n(lt,"d","M12 4.5v15m7.5-7.5h-15"),n(x,"xmlns","http://www.w3.org/2000/svg"),n(x,"fill","none"),n(x,"viewBox","0 0 24 24"),n(x,"stroke-width","1.5"),n(x,"stroke","currentColor"),n(x,"class","w-6 h-6 inline"),n(ot,"class","btn btn-success"),n(it,"stroke-linecap","round"),n(it,"stroke-linejoin","round"),n(it,"d","M19.5 12h-15"),n(J,"xmlns","http://www.w3.org/2000/svg"),n(J,"fill","none"),n(J,"viewBox","0 0 24 24"),n(J,"stroke-width","1.5"),n(J,"stroke","currentColor"),n(J,"class","w-6 h-6 inline"),n(at,"class","btn btn-error"),n(ct,"class","btn btn-secondary"),n(ut,"class","btn btn-success"),n(dt,"class","btn btn-success"),n(ht,"class","btn btn-error"),n(ft,"class","btn btn-error"),n(c,"class","table"),n(t,"class","border rounded")},m(_t,q){$(_t,t,q),a(t,e),a(e,s),a(e,u),a(t,_),a(t,i),a(t,l),a(t,c),a(c,g),a(g,v),a(v,h),a(h,k),a(v,p),a(p,y),a(v,E),a(E,m),a(c,R),a(c,B),a(B,j),a(j,z),a(z,L),a(L,H),a(H,T),a(T,D),a(L,M),a(L,F),a(L,wt),a(L,K),a(K,G),a(G,Q),a(L,tt),a(j,bt),a(bt,W),a(W,et),a(et,U),a(U,st),a(W,zt),a(W,Mt),a(W,Ft),a(W,rt),a(rt,Y),a(Y,nt),a(W,Kt),a(j,Et),a(Et,X),a(X,ot),a(ot,x),a(x,lt),a(X,Ut),a(X,St),a(X,Yt),a(X,at),a(at,J),a(J,it),a(X,xt),a(j,Dt),a(Dt,ct),a(ct,Jt),a(j,jt),a(jt,ut),a(ut,Qt),a(j,Tt),a(Tt,dt),a(dt,Wt),a(j,Ct),a(Ct,ht),a(ht,Xt),a(j,It),a(It,ft),a(ft,Zt),a(t,$t),te||(he=[S(H,"click",ts),S(K,"click",es),S(et,"click",ss),S(rt,"click",rs),S(ot,"click",ns),S(at,"click",os),S(ct,"click",ls),S(ut,"click",as),S(dt,"click",is),S(ht,"click",cs),S(ft,"click",us)],te=!0)},p(_t,q){r=_t,q&1&&C!==(C=r[0][r[15]].c+"")&&se(F,C),q&1&&yt!==(yt=r[0][r[15]].h+"")&&se(Mt,yt),q&1&&Bt!==(Bt=r[0][r[15]].o+"")&&se(St,Bt)},d(_t){_t&&d(t),te=!1,qt(he)}}}function Fs(r){let t,e,s,o,u,_,i,l,c,g,v,h,k,p,y,E,m,R,B,j,z,L;e=new zs({});let H=r[0],T=[];for(let D=0;D<H.length;D+=1)T[D]=We(Qe(r,H,D));return{c(){t=w("main"),Ht(e.$$.fragment),s=I(),o=w("br"),u=I(),_=w("div"),i=w("span"),l=O("svg"),c=O("path"),g=V(`
			Add player`),v=I(),h=w("span"),k=O("svg"),p=O("path"),y=V(`
			Remove player`),E=I(),m=w("br"),R=I(),B=w("div");for(let D=0;D<T.length;D+=1)T[D].c();this.h()},l(D){t=b(D,"MAIN",{});var M=f(t);de(e.$$.fragment,M),s=A(M),o=b(M,"BR",{}),u=A(M),_=b(M,"DIV",{class:!0});var C=f(_);i=b(C,"SPAN",{class:!0});var F=f(i);l=P(F,"svg",{xmlns:!0,fill:!0,viewBox:!0,"stroke-width":!0,stroke:!0,class:!0});var wt=f(l);c=P(wt,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,d:!0}),f(c).forEach(d),wt.forEach(d),g=N(F,`
			Add player`),F.forEach(d),v=A(C),h=b(C,"SPAN",{class:!0});var K=f(h);k=P(K,"svg",{xmlns:!0,fill:!0,viewBox:!0,"stroke-width":!0,stroke:!0,class:!0});var G=f(k);p=P(G,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,d:!0}),f(p).forEach(d),G.forEach(d),y=N(K,`
			Remove player`),K.forEach(d),C.forEach(d),E=A(M),m=b(M,"BR",{}),R=A(M),B=b(M,"DIV",{class:!0});var Q=f(B);for(let tt=0;tt<T.length;tt+=1)T[tt].l(Q);Q.forEach(d),M.forEach(d),this.h()},h(){n(c,"stroke-linecap","round"),n(c,"stroke-linejoin","round"),n(c,"d","M12 4.5v15m7.5-7.5h-15"),n(l,"xmlns","http://www.w3.org/2000/svg"),n(l,"fill","none"),n(l,"viewBox","0 0 24 24"),n(l,"stroke-width","1.5"),n(l,"stroke","currentColor"),n(l,"class","w-6 h-6 inline"),n(i,"class","btn btn-primary ml-3"),n(p,"stroke-linecap","round"),n(p,"stroke-linejoin","round"),n(p,"d","M19.5 12h-15"),n(k,"xmlns","http://www.w3.org/2000/svg"),n(k,"fill","none"),n(k,"viewBox","0 0 24 24"),n(k,"stroke-width","1.5"),n(k,"stroke","currentColor"),n(k,"class","w-6 h-6 inline"),n(h,"class","btn btn-primary ml-3"),n(_,"class","button-panel"),n(B,"class","players")},m(D,M){$(D,t,M),Gt(e,t,null),a(t,s),a(t,o),a(t,u),a(t,_),a(_,i),a(i,l),a(l,c),a(i,g),a(_,v),a(_,h),a(h,k),a(k,p),a(h,y),a(t,E),a(t,m),a(t,R),a(t,B);for(let C=0;C<T.length;C+=1)T[C].m(B,null);j=!0,z||(L=[S(i,"click",r[1]),S(h,"click",r[2])],z=!0)},p(D,[M]){if(M&1){H=D[0];let C;for(C=0;C<H.length;C+=1){const F=Qe(D,H,C);T[C]?T[C].p(F,M):(T[C]=We(F),T[C].c(),T[C].m(B,null))}for(;C<T.length;C+=1)T[C].d(1);T.length=H.length}},i(D){j||(gt(e.$$.fragment,D),j=!0)},o(D){kt(e.$$.fragment,D),j=!1},d(D){D&&d(t),Lt(e),Cs(T,D),z=!1,qt(L)}}}function Ks(r,t,e){let s=[{c:0,o:0,h:0},{c:0,o:0,h:0}];return[s,()=>{e(0,s=[...s,{c:0,o:0,h:0}])},()=>{e(0,s=s.slice(0,s.length-1))},m=>{e(0,s[m].c++,s)},m=>{e(0,s[m].c--,s)},m=>{e(0,s[m].h++,s)},m=>{e(0,s[m].h--,s)},m=>{e(0,s[m].o++,s)},m=>{e(0,s[m].o--,s)},m=>{const R=s[m];R.o>=6&&R.h>=12&&R.c>=6?(e(0,s[m].o-=6,s),e(0,s[m].h-=12,s),e(0,s[m].c-=6,s),At.push("Done! Created <i>1</i> glucose",{theme:{"--toastBackground":"#48BB78","--toastBarBackground":"#2F855A"}})):At.push("Error! Not enough resources",{theme:{"--toastBackground":"#F56565","--toastBarBackground":"#C53030"}})},m=>{e(0,s[m].h+=2,s),e(0,s[m].o++,s)},m=>{e(0,s[m].c++,s),e(0,s[m].o+=2,s)},m=>{e(0,s[m].h-=2,s),e(0,s[m].o--,s)},m=>{e(0,s[m].c--,s),e(0,s[m].o-=2,s)}]}class xs extends le{constructor(t){super(),ae(this,t,Ks,Fs,ie,{})}}export{xs as default};

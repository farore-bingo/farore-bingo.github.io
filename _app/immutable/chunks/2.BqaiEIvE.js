var ne=Object.defineProperty;var oe=(a,e,r)=>e in a?ne(a,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[e]=r;var B=(a,e,r)=>oe(a,typeof e!="symbol"?e+"":e,r);import{a as F,e as ie,b as w,t as S}from"./disclose-version.yeATZpFv.js";import{k as _,m as x,I as ue,l as I,j as $,K as J,i as ce,W as K,H as fe,r as O,n as M,u as E,Q as he,p as Q,q as N,t as me,ak as de,e as U,c as ve,al as pe,am as _e,D as ge,s as D,an as be,ao as ke,V as ye,ap as Ee,aq as W,N as X,R as Te,O as xe,Y as Z,Z as j,ad as L,d as H,ab as q,ac as G,B as we,a9 as Le}from"./runtime.-mTNNiNv.js";import{d as Se,s as Re}from"./render.Dg9z-rH5.js";import{p as Ae,a as Me,i as Ce}from"./props.DPMlCbym.js";let C=null;function Ie(a,e){return e}function qe(a,e,r,l){for(var o=[],n=e.length,s=0;s<n;s++)ke(e[s].e,o,!0);var f=n>0&&o.length===0&&r!==null;if(f){var u=r.parentNode;ye(u),u.append(r),l.clear(),k(a,e[0].prev,e[n-1].next)}Ee(o,()=>{for(var t=0;t<n;t++){var c=e[t];f||(l.delete(c.k),k(a,c.prev,c.next)),W(c.e,!f)}})}function Ne(a,e,r,l,o,n=null){var s=a,f={flags:e,items:new Map,first:null};{var u=a;s=_?x(J(u)):u.appendChild(ue())}_&&I();var t=null;$(()=>{var c=r(),i=ce(c)?c:c==null?[]:K(c),m=i.length;let v=!1;if(_){var d=s.data===fe;d!==(m===0)&&(s=O(),x(s),M(!1),v=!0)}if(_){for(var g=null,h,p=0;p<m;p++){if(E.nodeType===8&&E.data===he){s=E,v=!0,M(!1);break}var T=i[p],y=l(T,p);h=ee(E,f,g,null,T,y,p,o,e),f.items.set(y,h),g=h}m>0&&x(O())}_||ze(i,f,s,o,e,l),n!==null&&(m===0?t?Q(t):t=N(()=>n(s)):t!==null&&me(t,()=>{t=null})),v&&M(!0)}),_&&(s=E)}function ze(a,e,r,l,o,n){var s=a.length,f=e.items,u=e.first,t=u,c,i=null,m=[],v=[],d,g,h,p;for(p=0;p<s;p+=1){if(d=a[p],g=n(d,p),h=f.get(g),h===void 0){var T=t?t.e.nodes_start:r;i=ee(T,e,i,i===null?e.first:i.next,d,g,p,l,o),f.set(g,i),m=[],v=[],t=i.next;continue}if(Be(h,d,p),h.e.f&de&&Q(h.e),h!==t){if(c!==void 0&&c.has(h)){if(m.length<v.length){var y=v[0],b;i=y.prev;var z=m[0],R=m[m.length-1];for(b=0;b<m.length;b+=1)P(m[b],y,r);for(b=0;b<v.length;b+=1)c.delete(v[b]);k(e,z.prev,R.next),k(e,i,z),k(e,R,y),t=y,i=R,p-=1,m=[],v=[]}else c.delete(h),P(h,t,r),k(e,h.prev,h.next),k(e,h,i===null?e.first:i.next),k(e,i,h),i=h;continue}for(m=[],v=[];t!==null&&t.k!==g;)(c??(c=new Set)).add(t),v.push(t),t=t.next;if(t===null)continue;h=t}m.push(h),i=h,t=h.next}if(t!==null||c!==void 0){for(var A=c===void 0?[]:K(c);t!==null;)A.push(t),t=t.next;var se=A.length;if(se>0){var le=s===0?r:null;qe(e,A,le,f)}}U.first=e.first&&e.first.e,U.last=i&&i.e}function Be(a,e,r,l){ve(a.v,e),a.i=r}function ee(a,e,r,l,o,n,s,f,u){var t=C;try{var c=(u&pe)!==0,i=(u&_e)===0,m=c?i?ge(o):D(o):o,v=u&be?D(s):s,d={i:v,v:m,k:n,a:null,e:null,prev:r,next:l};return C=d,d.e=N(()=>f(a,m,v),_),d.e.prev=r&&r.e,d.e.next=l&&l.e,r===null?e.first=d:(r.next=d,r.e.next=d.e),l!==null&&(l.prev=d,l.e.prev=d.e),d}finally{C=t}}function P(a,e,r){for(var l=a.next?a.next.e.nodes_start:r,o=e?e.e.nodes_start:r,n=a.e.nodes_start;n!==l;){var s=X(n);o.before(n),n=s}}function k(a,e,r){e===null?a.first=r:(e.next=r,e.e.next=r&&r.e),r!==null&&(r.prev=e,r.e.prev=e&&e.e)}function Fe(a,e,r,l,o){var n=a,s="",f;$(()=>{if(s===(s=e())){_&&I();return}f!==void 0&&(W(f),f=void 0),s!==""&&(f=N(()=>{if(_){E.data;for(var u=I(),t=u;u!==null&&(u.nodeType!==8||u.data!=="");)t=u,u=X(u);if(u===null)throw Te(),xe;F(E,t),n=x(u);return}var c=s+"",i=ie(c);F(J(i),i.lastChild),n.before(i)}))})}function Oe(a,e,r){if(r){if(a.classList.contains(e))return;a.classList.add(e)}else{if(!a.classList.contains(e))return;a.classList.remove(e)}}const re="./schema.json",ae=[{html:"Farore esquive avec la tête"}],te=[{html:'Les fifrelins écrivent&nbsp;: "rien évidemment"'},{html:"Un shmik shmik"},{html:"Crie parce qu'un mob lui tombe dessus"},{html:"Crie parce qu'un mob a fait un nouveau move"},{html:"Le boss peut aller voir sa mère"},{html:"Les devs peuvent aller voir leur mère"},{html:"Mort par gravité"},{html:"Mort par greed "},{html:"Farore s'excuse auprès du boss"},{html:"Farore s'excuse auprès du mob"},{html:"Farore s'excuse auprès de la mère du mob/boss"},{html:"Un raid 10 mins avant la fin du live"},{html:"First try du boss"},{html:"Un e-zizi se fait ban"},{html:"Un e-zizi se fait TO"},{html:"Un boss reçoit son petit nom"},{html:'5ème mention de "Michel" (jean-michel ça compte pas)'},{html:'10ème mention de "Jean" (tous jeans confondus)'},{html:`"S'il te plaît Pépito"`},{html:"Les fifrelins parlent de fromage"},{html:'"Le mob est beau"'},{html:'"Ah non tu pues&nbsp;!"'},{html:'"La zone est belle"'},{html:'"La zone est terrible"'},{html:'"La musique de mort là"'},{html:'"La musique est incroyable"'},{html:'"Le boss est beau"'},{html:"La monocouille de Radagon"},{html:"Une référence à Sekiro"},{html:"Note dans le carnet"},{html:'"FEUR" (par Farore ou par les fifrelins)'},{html:"5 mins sans gros mots est utilisé"},{html:`"C'est pas grave"`},{html:`"C'est tranquille ici"`},{html:`"Buvez de l'eau"`},{html:"Rosé pamplemousse"},{html:"BPM à 120"},{html:"Mamie s'accroupit (mais pas volontaire)"},{html:`"T'es pas très gentil"`},{html:'12eme mention de "cul"'},{html:`"T'es qu'un gros bébé"`}],Ue={$schema:re,freeSpaces:ae,spaces:te},De=Object.freeze(Object.defineProperty({__proto__:null,$schema:re,default:Ue,freeSpaces:ae,spaces:te},Symbol.toStringTag,{value:"Module"})),Y=De;function He(){let a=V(Y.freeSpaces,1),e=V(Y.spaces,24);return e.splice(12,0,a[0]),{spaces:e.map(({html:r})=>r),checked:Array.from({length:25}).fill(!1)}}class Pe extends Error{constructor(r,l){super(`Tried to pick ${l} elements from a bag of ${r} elements`);B(this,"name","BagTooSmallError");this.bagLength=r,this.n=l}}function V(a,e){if(a.length<e)throw new Pe(a.length,e);let r=[];for(let o=0;o<a.length;o++){let{weight:n=1}=a[o];for(let s=0;s<n;s++)r.push(o)}let l=new Set;for(;e>0;){let o=r[Math.floor(Math.random()*r.length)];l.has(a[o])||(l.add(a[o]),e--)}return Array.from(l)}var Ye=S('<button class="grid aspect-square cursor-pointer place-items-center overflow-y-auto border-b border-r border-current p-2 text-center"><!></button>'),Ve=S('<section id="board" class="m-auto max-w-screen-md border-l border-t border-current text-lg svelte-3lsu2h"></section>');function $e(a,e){Z(e,!0);let r=Ae(e,"board",15);function l(n){return function(){r(r().checked[n]=!r().checked[n],!0)}}var o=Ve();Ne(o,21,()=>r().spaces,Ie,(n,s,f)=>{var u=Ye(),t=we(()=>l(f));u.__click=function(...i){var m;(m=H(t))==null||m.apply(this,i)};var c=q(u);Fe(c,()=>H(s)),L(u),G(()=>Oe(u,"bg-cyan-900",r().checked[f])),w(n,u)}),L(o),w(a,o),j()}Se(["click"]);function Je(a){try{return{kind:"success",value:a()}}catch(e){return{kind:"error",error:e}}}var Ke=S("<p> </p>"),Qe=S('<main class="flex flex-col gap-12 bg-slate-900 p-8 text-blue-100"><h1 class="m-auto text-center text-5xl">Farore bingo !</h1> <!></main>');function er(a,e){Z(e,!0);let r=Me(Je(He));var l=Qe(),o=Le(q(l),2);Ce(o,()=>r.kind=="success",n=>{$e(n,{get board(){return r.value},set board(s){r.value=s}})},n=>{var s=Ke(),f=q(s);L(s),G(()=>Re(f,r.error.message)),w(n,s)}),L(l),w(a,l),j()}export{er as component};

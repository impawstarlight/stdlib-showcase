(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(a){if(a.ep)return;a.ep=!0;const i=t(a);fetch(a.href,i)}})();const Um=!1;var SR=Array.isArray,A8=Array.prototype.indexOf,M8=Array.from,P8=Object.defineProperty,Te=Object.getOwnPropertyDescriptor,TR=Object.getOwnPropertyDescriptors,I8=Object.prototype,F8=Array.prototype,tm=Object.getPrototypeOf,Wm=Object.isExtensible;function j8(r){return r()}function Qg(r){for(var e=0;e<r.length;e++)r[e]()}const Dr=2,AR=4,Ze=8,nm=16,te=32,he=64,We=128,Fr=256,ze=512,kr=1024,ne=2048,de=4096,De=8192,Qe=16384,V8=32768,G8=65536,C8=1<<19,MR=1<<20,xg=1<<21,Ae=Symbol("$state"),B8=Symbol("");function PR(r){return r===this.v}function k8(r,e){return r!=r?e==e:r!==e||r!==null&&typeof r=="object"||typeof r=="function"}function IR(r){return!k8(r,this.v)}function H8(r){throw new Error("https://svelte.dev/e/effect_in_teardown")}function U8(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function W8(r){throw new Error("https://svelte.dev/e/effect_orphan")}function z8(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function D8(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function J8(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function X8(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let xe=!1,Y8=!1;function K8(){xe=!0}const Z8=2,Ar=Symbol(),Q8="http://www.w3.org/1999/xhtml";let br=null;function zm(r){br=r}function FR(r,e=!1,t){var n=br={p:br,c:null,d:!1,e:null,m:!1,s:r,x:null,l:null};xe&&!e&&(br.l={s:null,u:null,r1:[],r2:am(!1)}),DR(()=>{n.d=!0})}function jR(r){const e=br;if(e!==null){const o=e.e;if(o!==null){var t=gr,n=vr;e.e=null;try{for(var a=0;a<o.length;a++){var i=o[a];ee(i.effect),Jr(i.reaction),JR(i.fn)}}finally{ee(t),Jr(n)}}br=e.p,e.m=!0}return{}}function Pe(){return!xe||br!==null&&br.l===null}function pe(r,e){if(typeof r!="object"||r===null||Ae in r)return r;const t=tm(r);if(t!==I8&&t!==F8)return r;var n=new Map,a=SR(r),i=xr(0),o=vr,s=l=>{var g=vr;Jr(o);var d;return d=l(),Jr(g),d};return a&&n.set("length",xr(r.length)),new Proxy(r,{defineProperty(l,g,d){(!("value"in d)||d.configurable===!1||d.enumerable===!1||d.writable===!1)&&D8();var p=n.get(g);return p===void 0?(p=s(()=>xr(d.value)),n.set(g,p)):cr(p,s(()=>pe(d.value))),!0},deleteProperty(l,g){var d=n.get(g);if(d===void 0)g in l&&n.set(g,s(()=>xr(Ar)));else{if(a&&typeof g=="string"){var p=n.get("length"),b=Number(g);Number.isInteger(b)&&b<p.v&&cr(p,b)}cr(d,Ar),Dm(i)}return!0},get(l,g,d){var q;if(g===Ae)return r;var p=n.get(g),b=g in l;if(p===void 0&&(!b||(q=Te(l,g))!=null&&q.writable)&&(p=s(()=>xr(pe(b?l[g]:Ar))),n.set(g,p)),p!==void 0){var m=fr(p);return m===Ar?void 0:m}return Reflect.get(l,g,d)},getOwnPropertyDescriptor(l,g){var d=Reflect.getOwnPropertyDescriptor(l,g);if(d&&"value"in d){var p=n.get(g);p&&(d.value=fr(p))}else if(d===void 0){var b=n.get(g),m=b==null?void 0:b.v;if(b!==void 0&&m!==Ar)return{enumerable:!0,configurable:!0,value:m,writable:!0}}return d},has(l,g){var m;if(g===Ae)return!0;var d=n.get(g),p=d!==void 0&&d.v!==Ar||Reflect.has(l,g);if(d!==void 0||gr!==null&&(!p||(m=Te(l,g))!=null&&m.writable)){d===void 0&&(d=s(()=>xr(p?pe(l[g]):Ar)),n.set(g,d));var b=fr(d);if(b===Ar)return!1}return p},set(l,g,d,p){var h;var b=n.get(g),m=g in l;if(a&&g==="length")for(var q=d;q<b.v;q+=1){var v=n.get(q+"");v!==void 0?cr(v,Ar):q in l&&(v=s(()=>xr(Ar)),n.set(q+"",v))}b===void 0?(!m||(h=Te(l,g))!=null&&h.writable)&&(b=s(()=>xr(void 0)),cr(b,s(()=>pe(d))),n.set(g,b)):(m=b.v!==Ar,cr(b,s(()=>pe(d))));var f=Reflect.getOwnPropertyDescriptor(l,g);if(f!=null&&f.set&&f.set.call(p,d),!m){if(a&&typeof g=="string"){var u=n.get("length"),c=Number(g);Number.isInteger(c)&&c>=u.v&&cr(u,c+1)}Dm(i)}return!0},ownKeys(l){fr(i);var g=Reflect.ownKeys(l).filter(b=>{var m=n.get(b);return m===void 0||m.v!==Ar});for(var[d,p]of n)p.v!==Ar&&!(d in l)&&g.push(d);return g},setPrototypeOf(){J8()}})}function Dm(r,e=1){cr(r,r.v+e)}const Me=new Map;function am(r,e){var t={f:0,v:r,reactions:null,equals:PR,rv:0,wv:0};return t}function xr(r,e){const t=am(r);return yL(t),t}function Br(r,e=!1){var n;const t=am(r);return e||(t.equals=IR),xe&&br!==null&&br.l!==null&&((n=br.l).s??(n.s=[])).push(t),t}function cr(r,e,t=!1){vr!==null&&!zr&&Pe()&&(vr.f&(Dr|nm))!==0&&!(Or!=null&&Or.includes(r))&&X8();let n=t?pe(e):e;return x8(r,n)}function x8(r,e){if(!r.equals(e)){var t=r.v;Ie?Me.set(r,e):Me.set(r,t),r.v=e,r.wv=rE(),VR(r,ne),Pe()&&gr!==null&&(gr.f&kr)!==0&&(gr.f&(te|he))===0&&(Ir===null?bL([r]):Ir.push(r))}return e}function rL(r,e=1){var t=fr(r),n=e===1?t++:t--;return cr(r,t),n}function VR(r,e){var t=r.reactions;if(t!==null)for(var n=Pe(),a=t.length,i=0;i<a;i++){var o=t[i],s=o.f;(s&ne)===0&&(!n&&o===gr||(Zr(o,e),(s&(kr|Fr))!==0&&((s&Dr)!==0?VR(o,de):om(o))))}}var Jm,GR,CR,BR;function eL(){if(Jm===void 0){Jm=window,GR=/Firefox/.test(navigator.userAgent);var r=Element.prototype,e=Node.prototype,t=Text.prototype;CR=Te(e,"firstChild").get,BR=Te(e,"nextSibling").get,Wm(r)&&(r.__click=void 0,r.__className=void 0,r.__attributes=null,r.__style=void 0,r.__e=void 0),Wm(t)&&(t.__t=void 0)}}function tL(r=""){return document.createTextNode(r)}function kR(r){return CR.call(r)}function HR(r){return BR.call(r)}function Tr(r,e){return kR(r)}function $r(r,e=1,t=!1){let n=r;for(;e--;)n=HR(n);return n}function im(r){var e=Dr|ne,t=vr!==null&&(vr.f&Dr)!==0?vr:null;return gr===null||t!==null&&(t.f&Fr)!==0?e|=Fr:gr.f|=MR,{ctx:br,deps:null,effects:null,equals:PR,f:e,fn:r,reactions:null,rv:0,v:null,wv:0,parent:t??gr}}function nL(r){const e=im(r);return e.equals=IR,e}function UR(r){var e=r.effects;if(e!==null){r.effects=null;for(var t=0;t<e.length;t+=1)fe(e[t])}}function aL(r){for(var e=r.parent;e!==null;){if((e.f&Dr)===0)return e;e=e.parent}return null}function iL(r){var e,t=gr;ee(aL(r));try{UR(r),e=tE(r)}finally{ee(t)}return e}function WR(r){var e=iL(r),t=(re||(r.f&Fr)!==0)&&r.deps!==null?de:kr;Zr(r,t),r.equals(e)||(r.v=e,r.wv=rE())}function zR(r){gr===null&&vr===null&&W8(),vr!==null&&(vr.f&Fr)!==0&&gr===null&&U8(),Ie&&H8()}function uL(r,e){var t=e.last;t===null?e.last=e.first=r:(t.next=r,r.prev=t,e.last=r)}function ye(r,e,t,n=!0){var a=gr,i={ctx:br,deps:null,nodes_start:null,nodes_end:null,f:r|ne,first:null,fn:e,last:null,next:null,parent:a,prev:null,teardown:null,transitions:null,wv:0};if(t)try{um(i),i.f|=V8}catch(l){throw fe(i),l}else e!==null&&om(i);var o=t&&i.deps===null&&i.first===null&&i.nodes_start===null&&i.teardown===null&&(i.f&(MR|We))===0;if(!o&&n&&(a!==null&&uL(i,a),vr!==null&&(vr.f&Dr)!==0)){var s=vr;(s.effects??(s.effects=[])).push(i)}return i}function DR(r){const e=ye(Ze,null,!1);return Zr(e,kr),e.teardown=r,e}function Xm(r){zR();var e=gr!==null&&(gr.f&te)!==0&&br!==null&&!br.m;if(e){var t=br;(t.e??(t.e=[])).push({fn:r,effect:gr,reaction:vr})}else{var n=JR(r);return n}}function oL(r){return zR(),XR(r)}function sL(r){const e=ye(he,r,!0);return(t={})=>new Promise(n=>{t.outro?gL(e,()=>{fe(e),n(void 0)}):(fe(e),n(void 0))})}function JR(r){return ye(AR,r,!1)}function XR(r){return ye(Ze,r,!0)}function fL(r,e=[],t=im){const n=e.map(t);return vL(()=>r(...n.map(fr)))}function vL(r,e=0){return ye(Ze|nm|e,r,!0)}function lL(r,e=!0){return ye(Ze|te,r,!0,e)}function YR(r){var e=r.teardown;if(e!==null){const t=Ie,n=vr;Ym(!0),Jr(null);try{e.call(null)}finally{Ym(t),Jr(n)}}}function KR(r,e=!1){var t=r.first;for(r.first=r.last=null;t!==null;){var n=t.next;(t.f&he)!==0?t.parent=null:fe(t,e),t=n}}function cL(r){for(var e=r.first;e!==null;){var t=e.next;(e.f&te)===0&&fe(e),e=t}}function fe(r,e=!0){var t=!1;if((e||(r.f&C8)!==0)&&r.nodes_start!==null){for(var n=r.nodes_start,a=r.nodes_end;n!==null;){var i=n===a?null:HR(n);n.remove(),n=i}t=!0}KR(r,e&&!t),Ke(r,0),Zr(r,Qe);var o=r.transitions;if(o!==null)for(const l of o)l.stop();YR(r);var s=r.parent;s!==null&&s.first!==null&&ZR(r),r.next=r.prev=r.teardown=r.ctx=r.deps=r.fn=r.nodes_start=r.nodes_end=null}function ZR(r){var e=r.parent,t=r.prev,n=r.next;t!==null&&(t.next=n),n!==null&&(n.prev=t),e!==null&&(e.first===r&&(e.first=n),e.last===r&&(e.last=t))}function gL(r,e){var t=[];QR(r,t,!0),mL(t,()=>{fe(r),e&&e()})}function mL(r,e){var t=r.length;if(t>0){var n=()=>--t||e();for(var a of r)a.out(n)}else e()}function QR(r,e,t){if((r.f&De)===0){if(r.f^=De,r.transitions!==null)for(const o of r.transitions)(o.is_global||t)&&e.push(o);for(var n=r.first;n!==null;){var a=n.next,i=(n.f&G8)!==0||(n.f&te)!==0;QR(n,e,i?t:!1),n=a}}}let Je=[];function pL(){var r=Je;Je=[],Qg(r)}function hL(r){Je.length===0&&queueMicrotask(pL),Je.push(r)}let He=!1,rm=!1,Xe=null,se=!1,Ie=!1;function Ym(r){Ie=r}let Ue=[];let vr=null,zr=!1;function Jr(r){vr=r}let gr=null;function ee(r){gr=r}let Or=null;function dL(r){Or=r}function yL(r){vr!==null&&vr.f&xg&&(Or===null?dL([r]):Or.push(r))}let Lr=null,Mr=0,Ir=null;function bL(r){Ir=r}let xR=1,Ye=0,re=!1;function rE(){return++xR}function rt(r){var p;var e=r.f;if((e&ne)!==0)return!0;if((e&de)!==0){var t=r.deps,n=(e&Fr)!==0;if(t!==null){var a,i,o=(e&ze)!==0,s=n&&gr!==null&&!re,l=t.length;if(o||s){var g=r,d=g.parent;for(a=0;a<l;a++)i=t[a],(o||!((p=i==null?void 0:i.reactions)!=null&&p.includes(g)))&&(i.reactions??(i.reactions=[])).push(g);o&&(g.f^=ze),s&&d!==null&&(d.f&Fr)===0&&(g.f^=Fr)}for(a=0;a<l;a++)if(i=t[a],rt(i)&&WR(i),i.wv>r.wv)return!0}(!n||gr!==null&&!re)&&Zr(r,kr)}return!1}function $L(r,e){for(var t=e;t!==null;){if((t.f&We)!==0)try{t.fn(r);return}catch{t.f^=We}t=t.parent}throw He=!1,r}function qL(r){return(r.f&Qe)===0&&(r.parent===null||(r.parent.f&We)===0)}function et(r,e,t,n){if(He){if(t===null&&(He=!1),qL(e))throw r;return}t!==null&&(He=!0);{$L(r,e);return}}function eE(r,e,t=!0){var n=r.reactions;if(n!==null)for(var a=0;a<n.length;a++){var i=n[a];Or!=null&&Or.includes(r)||((i.f&Dr)!==0?eE(i,e,!1):e===i&&(t?Zr(i,ne):(i.f&kr)!==0&&Zr(i,de),om(i)))}}function tE(r){var m;var e=Lr,t=Mr,n=Ir,a=vr,i=re,o=Or,s=br,l=zr,g=r.f;Lr=null,Mr=0,Ir=null,re=(g&Fr)!==0&&(zr||!se||vr===null),vr=(g&(te|he))===0?r:null,Or=null,zm(r.ctx),zr=!1,Ye++,r.f|=xg;try{var d=(0,r.fn)(),p=r.deps;if(Lr!==null){var b;if(Ke(r,Mr),p!==null&&Mr>0)for(p.length=Mr+Lr.length,b=0;b<Lr.length;b++)p[Mr+b]=Lr[b];else r.deps=p=Lr;if(!re)for(b=Mr;b<p.length;b++)((m=p[b]).reactions??(m.reactions=[])).push(r)}else p!==null&&Mr<p.length&&(Ke(r,Mr),p.length=Mr);if(Pe()&&Ir!==null&&!zr&&p!==null&&(r.f&(Dr|de|ne))===0)for(b=0;b<Ir.length;b++)eE(Ir[b],r);return a!==r&&(Ye++,Ir!==null&&(n===null?n=Ir:n.push(...Ir))),d}finally{Lr=e,Mr=t,Ir=n,vr=a,re=i,Or=o,zm(s),zr=l,r.f^=xg}}function wL(r,e){let t=e.reactions;if(t!==null){var n=A8.call(t,r);if(n!==-1){var a=t.length-1;a===0?t=e.reactions=null:(t[n]=t[a],t.pop())}}t===null&&(e.f&Dr)!==0&&(Lr===null||!Lr.includes(e))&&(Zr(e,de),(e.f&(Fr|ze))===0&&(e.f^=ze),UR(e),Ke(e,0))}function Ke(r,e){var t=r.deps;if(t!==null)for(var n=e;n<t.length;n++)wL(r,t[n])}function um(r){var e=r.f;if((e&Qe)===0){Zr(r,kr);var t=gr,n=br,a=se;gr=r,se=!0;try{(e&nm)!==0?cL(r):KR(r),YR(r);var i=tE(r);r.teardown=typeof i=="function"?i:null,r.wv=xR;var o=r.deps,s;Um&&Y8&&r.f&ne}catch(l){et(l,r,t,n||r.ctx)}finally{se=a,gr=t}}}function _L(){try{z8()}catch(r){if(Xe!==null)et(r,Xe,null);else throw r}}function RL(){var r=se;try{var e=0;for(se=!0;Ue.length>0;){e++>1e3&&_L();var t=Ue,n=t.length;Ue=[];for(var a=0;a<n;a++){var i=LL(t[a]);EL(i)}Me.clear()}}finally{rm=!1,se=r,Xe=null}}function EL(r){var e=r.length;if(e!==0)for(var t=0;t<e;t++){var n=r[t];if((n.f&(Qe|De))===0)try{rt(n)&&(um(n),n.deps===null&&n.first===null&&n.nodes_start===null&&(n.teardown===null?ZR(n):n.fn=null))}catch(a){et(a,n,null,n.ctx)}}}function om(r){rm||(rm=!0,queueMicrotask(RL));for(var e=Xe=r;e.parent!==null;){e=e.parent;var t=e.f;if((t&(he|te))!==0){if((t&kr)===0)return;e.f^=kr}}Ue.push(e)}function LL(r){for(var e=[],t=r;t!==null;){var n=t.f,a=(n&(te|he))!==0,i=a&&(n&kr)!==0;if(!i&&(n&De)===0){if((n&AR)!==0)e.push(t);else if(a)t.f^=kr;else{var o=vr;try{vr=t,rt(t)&&um(t)}catch(g){et(g,t,null,t.ctx)}finally{vr=o}}var s=t.first;if(s!==null){t=s;continue}}var l=t.parent;for(t=t.next;t===null&&l!==null;)t=l.next,l=l.parent}return e}function fr(r){var e=r.f,t=(e&Dr)!==0;if(vr!==null&&!zr){if(!(Or!=null&&Or.includes(r))){var n=vr.deps;r.rv<Ye&&(r.rv=Ye,Lr===null&&n!==null&&n[Mr]===r?Mr++:Lr===null?Lr=[r]:(!re||!Lr.includes(r))&&Lr.push(r))}}else if(t&&r.deps===null&&r.effects===null){var a=r,i=a.parent;i!==null&&(i.f&Fr)===0&&(a.f^=Fr)}return t&&(a=r,rt(a)&&WR(a)),Ie&&Me.has(r)?Me.get(r):r.v}function nE(r){var e=zr;try{return zr=!0,r()}finally{zr=e}}const OL=-7169;function Zr(r,e){r.f=r.f&OL|e}function NL(r){if(!(typeof r!="object"||!r||r instanceof EventTarget)){if(Ae in r)em(r);else if(!Array.isArray(r))for(let e in r){const t=r[e];typeof t=="object"&&t&&Ae in t&&em(t)}}}function em(r,e=new Set){if(typeof r=="object"&&r!==null&&!(r instanceof EventTarget)&&!e.has(r)){e.add(r),r instanceof Date&&r.getTime();for(let n in r)try{em(r[n],e)}catch{}const t=tm(r);if(t!==Object.prototype&&t!==Array.prototype&&t!==Map.prototype&&t!==Set.prototype&&t!==Date.prototype){const n=TR(t);for(let a in n){const i=n[a].get;if(i)try{i.call(r)}catch{}}}}}const SL=["touchstart","touchmove"];function TL(r){return SL.includes(r)}let Km=!1;function AL(){Km||(Km=!0,document.addEventListener("reset",r=>{Promise.resolve().then(()=>{var e;if(!r.defaultPrevented)for(const t of r.target.elements)(e=t.__on_r)==null||e.call(t)})},{capture:!0}))}function aE(r){var e=vr,t=gr;Jr(null),ee(null);try{return r()}finally{Jr(e),ee(t)}}function ML(r,e,t,n=t){r.addEventListener(e,()=>aE(t));const a=r.__on_r;a?r.__on_r=()=>{a(),n(!0)}:r.__on_r=()=>n(!0),AL()}const PL=new Set,Zm=new Set;function IL(r,e,t,n={}){function a(i){if(n.capture||Se.call(e,i),!i.cancelBubble)return aE(()=>t==null?void 0:t.call(this,i))}return r.startsWith("pointer")||r.startsWith("touch")||r==="wheel"?hL(()=>{e.addEventListener(r,a,n)}):e.addEventListener(r,a,n),a}function ht(r,e,t,n,a){var i={capture:n,passive:a},o=IL(r,e,t,i);(e===document.body||e===window||e===document)&&DR(()=>{e.removeEventListener(r,o,i)})}function Se(r){var c;var e=this,t=e.ownerDocument,n=r.type,a=((c=r.composedPath)==null?void 0:c.call(r))||[],i=a[0]||r.target,o=0,s=r.__root;if(s){var l=a.indexOf(s);if(l!==-1&&(e===document||e===window)){r.__root=e;return}var g=a.indexOf(e);if(g===-1)return;l<=g&&(o=l)}if(i=a[o]||r.target,i!==e){P8(r,"currentTarget",{configurable:!0,get(){return i||t}});var d=vr,p=gr;Jr(null),ee(null);try{for(var b,m=[];i!==null;){var q=i.assignedSlot||i.parentNode||i.host||null;try{var v=i["__"+n];if(v!=null&&(!i.disabled||r.target===i))if(SR(v)){var[f,...u]=v;f.apply(i,[r,...u])}else v.call(i,r)}catch(h){b?m.push(h):b=h}if(r.cancelBubble||q===e||q===null)break;i=q}if(b){for(let h of m)queueMicrotask(()=>{throw h});throw b}}finally{r.__root=e,delete r.currentTarget,Jr(d),ee(p)}}}function FL(r){var e=document.createElement("template");return e.innerHTML=r,e.content}function jL(r,e){var t=gr;t.nodes_start===null&&(t.nodes_start=r,t.nodes_end=e)}function VL(r,e){var t=(e&Z8)!==0,n,a=!r.startsWith("<!>");return()=>{n===void 0&&(n=FL(a?r:"<!>"+r),n=kR(n));var i=t||GR?document.importNode(n,!0):n.cloneNode(!0);return jL(i,i),i}}function GL(r,e){r!==null&&r.before(e)}function ke(r,e){var t=e==null?"":typeof e=="object"?e+"":e;t!==(r.__t??(r.__t=r.nodeValue))&&(r.__t=t,r.nodeValue=t+"")}function CL(r,e){return BL(r,e)}const me=new Map;function BL(r,{target:e,anchor:t,props:n={},events:a,context:i,intro:o=!0}){eL();var s=new Set,l=p=>{for(var b=0;b<p.length;b++){var m=p[b];if(!s.has(m)){s.add(m);var q=TL(m);e.addEventListener(m,Se,{passive:q});var v=me.get(m);v===void 0?(document.addEventListener(m,Se,{passive:q}),me.set(m,1)):me.set(m,v+1)}}};l(M8(PL)),Zm.add(l);var g=void 0,d=sL(()=>{var p=t??e.appendChild(tL());return lL(()=>{if(i){FR({});var b=br;b.c=i}a&&(n.$$events=a),g=r(p,n)||{},i&&jR()}),()=>{var q;for(var b of s){e.removeEventListener(b,Se);var m=me.get(b);--m===0?(document.removeEventListener(b,Se),me.delete(b)):me.set(b,m)}Zm.delete(l),p!==t&&((q=p.parentNode)==null||q.removeChild(p))}});return kL.set(g,d),g}let kL=new WeakMap;function iE(r){var e,t,n="";if(typeof r=="string"||typeof r=="number")n+=r;else if(typeof r=="object")if(Array.isArray(r)){var a=r.length;for(e=0;e<a;e++)r[e]&&(t=iE(r[e]))&&(n&&(n+=" "),n+=t)}else for(t in r)r[t]&&(n&&(n+=" "),n+=t);return n}function HL(){for(var r,e,t=0,n="",a=arguments.length;t<a;t++)(r=arguments[t])&&(e=iE(r))&&(n&&(n+=" "),n+=e);return n}function UL(r){return typeof r=="object"?HL(r):r??""}function WL(r,e,t){var n=r==null?"":""+r;return n=n?n+" "+e:e,n===""?null:n}function zL(r,e){return r==null?null:String(r)}function DL(r,e,t,n,a,i){var o=r.__className;if(o!==t||o===void 0){var s=WL(t,n);s==null?r.removeAttribute("class"):r.className=s,r.__className=t}return i}function JL(r,e,t,n){var a=r.__style;if(a!==e){var i=zL(e);i==null?r.removeAttribute("style"):r.style.cssText=i,r.__style=e}return n}const XL=Symbol("is custom element"),YL=Symbol("is html");function dt(r,e,t,n){var a=KL(r);a[e]!==(a[e]=t)&&(e==="loading"&&(r[B8]=t),t==null?r.removeAttribute(e):typeof t!="string"&&ZL(r).includes(e)?r[e]=t:r.setAttribute(e,t))}function KL(r){return r.__attributes??(r.__attributes={[XL]:r.nodeName.includes("-"),[YL]:r.namespaceURI===Q8})}var Qm=new Map;function ZL(r){var e=Qm.get(r.nodeName);if(e)return e;Qm.set(r.nodeName,e=[]);for(var t,n=r,a=Element.prototype;a!==n;){t=TR(n);for(var i in t)t[i].set&&e.push(i);n=tm(n)}return e}function Ne(r,e,t=e){var n=Pe();ML(r,"input",a=>{var i=a?r.defaultValue:r.value;if(i=yt(r)?bt(i):i,t(i),n&&i!==(i=e())){var o=r.selectionStart,s=r.selectionEnd;r.value=i??"",s!==null&&(r.selectionStart=o,r.selectionEnd=Math.min(s,r.value.length))}}),nE(e)==null&&r.value&&t(yt(r)?bt(r.value):r.value),XR(()=>{var a=e();yt(r)&&a===bt(r.value)||r.type==="date"&&!a&&!r.value||a!==r.value&&(r.value=a??"")})}function yt(r){var e=r.type;return e==="number"||e==="range"}function bt(r){return r===""?null:+r}function QL(r=!1){const e=br,t=e.l.u;if(!t)return;let n=()=>NL(e.s);if(r){let a=0,i={};const o=im(()=>{let s=!1;const l=e.s;for(const g in l)l[g]!==i[g]&&(i[g]=l[g],s=!0);return s&&a++,a});n=()=>fr(o)}t.b.length&&oL(()=>{xm(e,n),Qg(t.b)}),Xm(()=>{const a=nE(()=>t.m.map(j8));return()=>{for(const i of a)typeof i=="function"&&i()}}),t.a.length&&Xm(()=>{xm(e,n),Qg(t.a)})}function xm(r,e){if(r.l.s)for(const t of r.l.s)fr(t);e()}const xL="5";var NR;typeof window<"u"&&((NR=window.__svelte??(window.__svelte={})).v??(NR.v=new Set)).add(xL);K8();const r7="data:image/svg+xml,%3csvg%20height='24'%20width='24'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20transform='translate(0%20-1028.4)'%3e%3cpath%20d='m0%201050.4h24l-4-6h-16z'%20fill='%2395a5a6'/%3e%3cpath%20d='m2%201032.4h20v17h-20z'%20fill='%23f1c40f'/%3e%3cpath%20d='m4%201039.4h9v9h-9z'%20fill='%23ecf0f1'/%3e%3cpath%20d='m14%201040.4h6v9h-6z'%20fill='%23ecf0f1'/%3e%3cpath%20d='m2%201037.4h20v4h-20z'%20fill='%23f39c12'/%3e%3cpath%20d='m14%201039.4h6v1h-6z'%20fill='%23bdc3c7'/%3e%3cpath%20d='m4%201039.4h9v2h-9z'%20fill='%23bdc3c7'/%3e%3cpath%20d='m0%201036.4v1.5c0%20.8.67157%201.5%201.5%201.5.8284%200%201.5-.7%201.5-1.5v-1.5h-1.5z'%20fill='%23c0392b'/%3e%3cpath%20d='m3%201036.4v1.5c0%20.8.6716%201.5%201.5%201.5s1.5-.7%201.5-1.5v-1.5h-1.5z'%20fill='%23bdc3c7'/%3e%3cpath%20d='m6%201036.4v1.5c0%20.8.6716%201.5%201.5%201.5s1.5-.7%201.5-1.5v-1.5h-1.5z'%20fill='%23c0392b'/%3e%3cpath%20d='m9%201036.4v1.5c0%20.8.6716%201.5%201.5%201.5.828%200%201.5-.7%201.5-1.5v-1.5h-1.5z'%20fill='%23bdc3c7'/%3e%3cpath%20d='m12%201036.4v1.5c0%20.8.672%201.5%201.5%201.5s1.5-.7%201.5-1.5v-1.5h-1.5z'%20fill='%23c0392b'/%3e%3cpath%20d='m15%201036.4v1.5c0%20.8.672%201.5%201.5%201.5s1.5-.7%201.5-1.5v-1.5h-1.5z'%20fill='%23bdc3c7'/%3e%3cpath%20d='m18%201036.4v1.5c0%20.8.672%201.5%201.5%201.5s1.5-.7%201.5-1.5v-1.5h-1.5z'%20fill='%23c0392b'/%3e%3cpath%20d='m21%201036.4v1.5c0%20.8.672%201.5%201.5%201.5s1.5-.7%201.5-1.5v-1.5h-1.5z'%20fill='%23bdc3c7'/%3e%3cpath%20d='m10%201032.4h2v4h-3z'%20fill='%23ecf0f1'/%3e%3cpath%20d='m12%201032.4h2l1%204h-3z'%20fill='%23e74c3c'/%3e%3cpath%20d='m5%201032.4h3l-2%204h-3z'%20fill='%23ecf0f1'/%3e%3cpath%20d='m8%201032.4h2l-1%204h-3z'%20fill='%23e74c3c'/%3e%3cpath%20d='m16%201032.4h-2l1%204h3z'%20fill='%23ecf0f1'/%3e%3cpath%20d='m19%201032.4h-3l2%204h3z'%20fill='%23e74c3c'/%3e%3cpath%20d='m2%201032.4h3l-2%204h-3z'%20fill='%23e74c3c'/%3e%3cpath%20d='m22%201032.4h-3l2%204h3z'%20fill='%23ecf0f1'/%3e%3cpath%20d='m15%201041.4h4v8h-4z'%20fill='%233498db'/%3e%3cpath%20d='m14%201044.4h5v1h-5z'%20fill='%23ecf0f1'/%3e%3cpath%20d='m19%201040.4h1v1h-1z'%20fill='%23bdc3c7'/%3e%3cpath%20d='m15%201040.4h4v1h-4z'%20fill='%232980b9'/%3e%3cpath%20d='m14%201040.4h1v1h-1z'%20fill='%23bdc3c7'/%3e%3cpath%20d='m5%201040.4h7v7h-7z'%20fill='%233498db'/%3e%3cg%20fill='%23ecf0f1'%3e%3cpath%20d='m4%201043.4h9v1h-9z'/%3e%3cpath%20d='m8%201040.4h1v7h-1z'/%3e%3cpath%20d='m1%201032.4h22l-3.667-2h-14.666l-3.667%202'/%3e%3c/g%3e%3cpath%20d='m8%201040.4h1v1h-1z'%20fill='%23bdc3c7'/%3e%3cpath%20d='m1%201031.4h22l-3.667-2h-14.666l-3.667%202'%20fill='%23bdc3c7'/%3e%3cpath%20d='m1%201031.4h22v1h-22z'%20fill='%237f8c8d'/%3e%3cpath%20d='m15%201046.4h4v3h-4z'%20fill='%232980b9'/%3e%3cpath%20d='m0%201050.4h24v1h-24z'%20fill='%237f8c8d'/%3e%3cpath%20d='m5%2012v1h3v-1zm4%200v1h3v-1z'%20fill='%232980b9'%20transform='translate(0%201028.4)'/%3e%3cpath%20d='m5%201046.4v1h3v-1zm4%200v1h3v-1z'%20fill='%232980b9'/%3e%3cpath%20d='m2%201032.4-.5%201h3l.5-1zm5%200-.25%201h3l.25-1zm5%200v1h2.25l-.25-1zm4%200%20.5%201h3l-.5-1z'%20fill='%23c0392b'/%3e%3cpath%20d='m5%201032.4-.5%201h3.0013l.4987-1zm5%200-.25%201h2.25v-1zm4%200%20.25%201h2.25l-.5-1zm5%200%20.5%201h3l-.5-1z'%20fill='%23bdc3c7'/%3e%3c/g%3e%3c/svg%3e",e7="/assets/customer-B35tVt3y.png";/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $t,rp;function t7(){if(rp)return $t;rp=1;var r=typeof Object.defineProperty=="function"?Object.defineProperty:null;return $t=r,$t}/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var qt,ep;function n7(){if(ep)return qt;ep=1;var r=t7();function e(){try{return r({},"x",{}),!0}catch{return!1}}return qt=e,qt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wt,tp;function a7(){if(tp)return wt;tp=1;var r=Object.defineProperty;return wt=r,wt}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _t,np;function uE(){if(np)return _t;np=1;function r(e){return typeof e=="number"}return _t=r,_t}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Rt,ap;function oE(){if(ap)return Rt;ap=1;function r(n){return n[0]==="-"}function e(n){var a="",i;for(i=0;i<n;i++)a+="0";return a}function t(n,a,i){var o=!1,s=a-n.length;return s<0||(r(n)&&(o=!0,n=n.substr(1)),n=i?n+e(s):e(s)+n,o&&(n="-"+n)),n}return Rt=t,Rt}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Et,ip;function i7(){if(ip)return Et;ip=1;var r=uE(),e=oE(),t=String.prototype.toLowerCase,n=String.prototype.toUpperCase;function a(i){var o,s,l;switch(i.specifier){case"b":o=2;break;case"o":o=8;break;case"x":case"X":o=16;break;case"d":case"i":case"u":default:o=10;break}if(s=i.arg,l=parseInt(s,10),!isFinite(l)){if(!r(s))throw new Error("invalid integer. Value: "+s);l=0}return l<0&&(i.specifier==="u"||o!==10)&&(l=4294967295+l+1),l<0?(s=(-l).toString(o),i.precision&&(s=e(s,i.precision,i.padRight)),s="-"+s):(s=l.toString(o),!l&&!i.precision?s="":i.precision&&(s=e(s,i.precision,i.padRight)),i.sign&&(s=i.sign+s)),o===16&&(i.alternate&&(s="0x"+s),s=i.specifier===n.call(i.specifier)?n.call(s):t.call(s)),o===8&&i.alternate&&s.charAt(0)!=="0"&&(s="0"+s),s}return Et=a,Et}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Lt,up;function u7(){if(up)return Lt;up=1;function r(e){return typeof e=="string"}return Lt=r,Lt}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ot,op;function o7(){if(op)return Ot;op=1;var r=uE(),e=Math.abs,t=String.prototype.toLowerCase,n=String.prototype.toUpperCase,a=String.prototype.replace,i=/e\+(\d)$/,o=/e-(\d)$/,s=/^(\d+)$/,l=/^(\d+)e/,g=/\.0$/,d=/\.0*e/,p=/(\..*[^0])0*e/;function b(m){var q,v,f=parseFloat(m.arg);if(!isFinite(f)){if(!r(m.arg))throw new Error("invalid floating-point number. Value: "+v);f=m.arg}switch(m.specifier){case"e":case"E":v=f.toExponential(m.precision);break;case"f":case"F":v=f.toFixed(m.precision);break;case"g":case"G":e(f)<1e-4?(q=m.precision,q>0&&(q-=1),v=f.toExponential(q)):v=f.toPrecision(m.precision),m.alternate||(v=a.call(v,p,"$1e"),v=a.call(v,d,"e"),v=a.call(v,g,""));break;default:throw new Error("invalid double notation. Value: "+m.specifier)}return v=a.call(v,i,"e+0$1"),v=a.call(v,o,"e-0$1"),m.alternate&&(v=a.call(v,s,"$1."),v=a.call(v,l,"$1.e")),f>=0&&m.sign&&(v=m.sign+v),v=m.specifier===n.call(m.specifier)?n.call(v):t.call(v),v}return Ot=b,Ot}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Nt,sp;function s7(){if(sp)return Nt;sp=1;function r(t){var n="",a;for(a=0;a<t;a++)n+=" ";return n}function e(t,n,a){var i=n-t.length;return i<0||(t=a?t+r(i):r(i)+t),t}return Nt=e,Nt}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var St,fp;function f7(){if(fp)return St;fp=1;var r=i7(),e=u7(),t=o7(),n=s7(),a=oE(),i=String.fromCharCode,o=Array.isArray;function s(d){return d!==d}function l(d){var p={};return p.specifier=d.specifier,p.precision=d.precision===void 0?1:d.precision,p.width=d.width,p.flags=d.flags||"",p.mapping=d.mapping,p}function g(d){var p,b,m,q,v,f,u,c,h;if(!o(d))throw new TypeError("invalid argument. First argument must be an array. Value: `"+d+"`.");for(f="",u=1,c=0;c<d.length;c++)if(m=d[c],e(m))f+=m;else{if(p=m.precision!==void 0,m=l(m),!m.specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+m+"`.");for(m.mapping&&(u=m.mapping),b=m.flags,h=0;h<b.length;h++)switch(q=b.charAt(h),q){case" ":m.sign=" ";break;case"+":m.sign="+";break;case"-":m.padRight=!0,m.padZeros=!1;break;case"0":m.padZeros=b.indexOf("-")<0;break;case"#":m.alternate=!0;break;default:throw new Error("invalid flag: "+q)}if(m.width==="*"){if(m.width=parseInt(arguments[u],10),u+=1,s(m.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+m.width+"`.");m.width<0&&(m.padRight=!0,m.width=-m.width)}if(p&&m.precision==="*"){if(m.precision=parseInt(arguments[u],10),u+=1,s(m.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+m.precision+"`.");m.precision<0&&(m.precision=1,p=!1)}switch(m.arg=arguments[u],m.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":p&&(m.padZeros=!1),m.arg=r(m);break;case"s":m.maxWidth=p?m.precision:-1,m.arg=String(m.arg);break;case"c":if(!s(m.arg)){if(v=parseInt(m.arg,10),v<0||v>127)throw new Error("invalid character code. Value: "+m.arg);m.arg=s(v)?String(m.arg):i(v)}break;case"e":case"E":case"f":case"F":case"g":case"G":p||(m.precision=6),m.arg=t(m);break;default:throw new Error("invalid specifier: "+m.specifier)}m.maxWidth>=0&&m.arg.length>m.maxWidth&&(m.arg=m.arg.substring(0,m.maxWidth)),m.padZeros?m.arg=a(m.arg,m.width||m.precision,m.padRight):m.width&&(m.arg=n(m.arg,m.width,m.padRight)),f+=m.arg||"",u+=1}return f}return St=g,St}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Tt,vp;function v7(){if(vp)return Tt;vp=1;var r=f7();return Tt=r,Tt}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var At,lp;function l7(){if(lp)return At;lp=1;var r=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function e(n){var a={mapping:n[1]?parseInt(n[1],10):void 0,flags:n[2],width:n[3],precision:n[5],specifier:n[6]};return n[4]==="."&&n[5]===void 0&&(a.precision="1"),a}function t(n){var a,i,o,s;for(i=[],s=0,o=r.exec(n);o;)a=n.slice(s,r.lastIndex-o[0].length),a.length&&i.push(a),i.push(e(o)),s=r.lastIndex,o=r.exec(n);return a=n.slice(s),a.length&&i.push(a),i}return At=t,At}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Mt,cp;function c7(){if(cp)return Mt;cp=1;var r=l7();return Mt=r,Mt}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Pt,gp;function g7(){if(gp)return Pt;gp=1;function r(e){return typeof e=="string"}return Pt=r,Pt}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var It,mp;function m7(){if(mp)return It;mp=1;var r=v7(),e=c7(),t=g7();function n(a){var i,o;if(!t(a))throw new TypeError(n("invalid argument. First argument must be a string. Value: `%s`.",a));for(i=[e(a)],o=1;o<arguments.length;o++)i.push(arguments[o]);return r.apply(null,i)}return It=n,It}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ft,pp;function Y(){if(pp)return Ft;pp=1;var r=m7();return Ft=r,Ft}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var jt,hp;function p7(){if(hp)return jt;hp=1;var r=Y(),e=Object.prototype,t=e.toString,n=e.__defineGetter__,a=e.__defineSetter__,i=e.__lookupGetter__,o=e.__lookupSetter__;function s(l,g,d){var p,b,m,q;if(typeof l!="object"||l===null||t.call(l)==="[object Array]")throw new TypeError(r("invalid argument. First argument must be an object. Value: `%s`.",l));if(typeof d!="object"||d===null||t.call(d)==="[object Array]")throw new TypeError(r("invalid argument. Property descriptor must be an object. Value: `%s`.",d));if(b="value"in d,b&&(i.call(l,g)||o.call(l,g)?(p=l.__proto__,l.__proto__=e,delete l[g],l[g]=d.value,l.__proto__=p):l[g]=d.value),m="get"in d,q="set"in d,b&&(m||q))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return m&&n&&n.call(l,g,d.get),q&&a&&a.call(l,g,d.set),l}return jt=s,jt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Vt,dp;function ae(){if(dp)return Vt;dp=1;var r=n7(),e=a7(),t=p7(),n;return r()?n=e:n=t,Vt=n,Vt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Gt,yp;function h7(){if(yp)return Gt;yp=1;var r=ae();function e(t,n,a){r(t,n,{configurable:!1,enumerable:!0,writable:!1,value:a})}return Gt=e,Gt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ct,bp;function d7(){if(bp)return Ct;bp=1;var r=h7();return Ct=r,Ct}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Bt,$p;function y7(){if($p)return Bt;$p=1;var r=ae();function e(t,n,a){r(t,n,{configurable:!1,enumerable:!1,writable:!1,value:a})}return Bt=e,Bt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var kt,qp;function D(){if(qp)return kt;qp=1;var r=y7();return kt=r,kt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ht,wp;function b7(){if(wp)return Ht;wp=1;var r=ae();function e(t,n,a){r(t,n,{configurable:!1,enumerable:!1,get:a})}return Ht=e,Ht}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ut,_p;function er(){if(_p)return Ut;_p=1;var r=b7();return Ut=r,Ut}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Wt,Rp;function $7(){if(Rp)return Wt;Rp=1;var r=ae();function e(t,n,a,i){r(t,n,{configurable:!1,enumerable:!1,get:a,set:i})}return Wt=e,Wt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zt,Ep;function nr(){if(Ep)return zt;Ep=1;var r=$7();return zt=r,zt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Dt,Lp;function q7(){if(Lp)return Dt;Lp=1;function r(){return typeof Symbol=="function"&&typeof Symbol("foo")=="symbol"}return Dt=r,Dt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Jt,Op;function w7(){if(Op)return Jt;Op=1;var r=q7();return Jt=r,Jt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Xt,Np;function _7(){if(Np)return Xt;Np=1;var r=w7(),e=r();function t(){return e&&typeof Symbol.toStringTag=="symbol"}return Xt=t,Xt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Yt,Sp;function tt(){if(Sp)return Yt;Sp=1;var r=_7();return Yt=r,Yt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Kt,Tp;function sE(){if(Tp)return Kt;Tp=1;var r=Object.prototype.toString;return Kt=r,Kt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Zt,Ap;function R7(){if(Ap)return Zt;Ap=1;var r=sE();function e(t){return r.call(t)}return Zt=e,Zt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Qt,Mp;function E7(){if(Mp)return Qt;Mp=1;var r=Object.prototype.hasOwnProperty;function e(t,n){return t==null?!1:r.call(t,n)}return Qt=e,Qt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xt,Pp;function rr(){if(Pp)return xt;Pp=1;var r=E7();return xt=r,xt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var rn,Ip;function L7(){if(Ip)return rn;Ip=1;var r=typeof Symbol=="function"?Symbol:void 0;return rn=r,rn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var en,Fp;function fE(){if(Fp)return en;Fp=1;var r=L7();return en=r,en}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var tn,jp;function O7(){if(jp)return tn;jp=1;var r=fE(),e=typeof r=="function"?r.toStringTag:"";return tn=e,tn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var nn,Vp;function N7(){if(Vp)return nn;Vp=1;var r=rr(),e=O7(),t=sE();function n(a){var i,o,s;if(a==null)return t.call(a);o=a[e],i=r(a,e);try{a[e]=void 0}catch{return t.call(a)}return s=t.call(a),i?a[e]=o:delete a[e],s}return nn=n,nn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var an,Gp;function qr(){if(Gp)return an;Gp=1;var r=tt(),e=R7(),t=N7(),n;return r()?n=t:n=e,an=n,an}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var un,Cp;function S7(){if(Cp)return un;Cp=1;var r=qr(),e;function t(n){return r(n)==="[object Array]"}return Array.isArray?e=Array.isArray:e=t,un=e,un}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var on,Bp;function ve(){if(Bp)return on;Bp=1;var r=S7();return on=r,on}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var sn,kp;function T7(){if(kp)return sn;kp=1;var r=ve();function e(t){return typeof t=="object"&&t!==null&&!r(t)}return sn=e,sn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fn,Hp;function sm(){if(Hp)return fn;Hp=1;var r=T7();return fn=r,fn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vn,Up;function A7(){if(Up)return vn;Up=1;var r=/./;return vn=r,vn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ln,Wp;function vE(){if(Wp)return ln;Wp=1;function r(e){return typeof e=="boolean"}return ln=r,ln}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var cn,zp;function M7(){if(zp)return cn;zp=1;var r=Boolean;return cn=r,cn}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gn,Dp;function P7(){if(Dp)return gn;Dp=1;var r=M7();return gn=r,gn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var mn,Jp;function I7(){if(Jp)return mn;Jp=1;var r=Boolean.prototype.toString;return mn=r,mn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pn,Xp;function F7(){if(Xp)return pn;Xp=1;var r=I7();function e(t){try{return r.call(t),!0}catch{return!1}}return pn=e,pn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var hn,Yp;function lE(){if(Yp)return hn;Yp=1;var r=tt(),e=qr(),t=P7(),n=F7(),a=r();function i(o){return typeof o=="object"?o instanceof t?!0:a?n(o):e(o)==="[object Boolean]":!1}return hn=i,hn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var dn,Kp;function j7(){if(Kp)return dn;Kp=1;var r=vE(),e=lE();function t(n){return r(n)||e(n)}return dn=t,dn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var yn,Zp;function Pr(){if(Zp)return yn;Zp=1;var r=D(),e=j7(),t=vE(),n=lE();return r(e,"isPrimitive",t),r(e,"isObject",n),yn=e,yn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var bn,Qp;function V7(){if(Qp)return bn;Qp=1;function r(){return new Function("return this;")()}return bn=r,bn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $n,xp;function G7(){if(xp)return $n;xp=1;var r=typeof self=="object"?self:null;return $n=r,$n}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var qn,rh;function C7(){if(rh)return qn;rh=1;var r=typeof window=="object"?window:null;return qn=r,qn}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wn,eh;function B7(){if(eh)return wn;eh=1;var r=typeof globalThis=="object"?globalThis:null;return wn=r,wn}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _n,th;function k7(){if(th)return _n;th=1;var r=Pr().isPrimitive,e=Y(),t=V7(),n=G7(),a=C7(),i=B7();function o(s){if(arguments.length){if(!r(s))throw new TypeError(e("invalid argument. Must provide a boolean. Value: `%s`.",s));if(s)return t()}if(i)return i;if(n)return n;if(a)return a;throw new Error("unexpected error. Unable to resolve global object.")}return _n=o,_n}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Rn,nh;function H7(){if(nh)return Rn;nh=1;var r=k7(),e=r(),t=e.document&&e.document.childNodes;return Rn=t,Rn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var En,ah;function U7(){if(ah)return En;ah=1;var r=Int8Array;return En=r,En}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ln,ih;function W7(){if(ih)return Ln;ih=1;var r=A7(),e=H7(),t=U7();function n(){return typeof r=="function"||typeof t=="object"||typeof e=="function"}return Ln=n,Ln}/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var On,uh;function cE(){if(uh)return On;uh=1;function r(){return/^\s*function\s*([^(]*)/i}return On=r,On}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Nn,oh;function z7(){if(oh)return Nn;oh=1;var r=cE(),e=r();return Nn=e,Nn}/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Sn,sh;function gE(){if(sh)return Sn;sh=1;var r=D(),e=cE(),t=z7();return r(e,"REGEXP",t),Sn=e,Sn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Tn,fh;function D7(){if(fh)return Tn;fh=1;var r=ve(),e=Y();function t(n){if(typeof n!="function")throw new TypeError(e("invalid argument. Must provide a function. Value: `%s`.",n));return a;function a(i){var o,s;if(!r(i)||(o=i.length,o===0))return!1;for(s=0;s<o;s++)if(n(i[s])===!1)return!1;return!0}}return Tn=t,Tn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var An,vh;function J7(){if(vh)return An;vh=1;var r=D7();return An=r,An}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Mn,lh;function X7(){if(lh)return Mn;lh=1;function r(e){return e!==null&&typeof e=="object"}return Mn=r,Mn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Pn,ch;function mE(){if(ch)return Pn;ch=1;var r=D(),e=J7(),t=X7(),n=e(t);return r(t,"isObjectLikeArray",n),Pn=t,Pn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var In,gh;function Y7(){if(gh)return In;gh=1;var r=mE();function e(t){return r(t)&&(t._isBuffer||t.constructor&&typeof t.constructor.isBuffer=="function"&&t.constructor.isBuffer(t))}return In=e,In}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Fn,mh;function pE(){if(mh)return Fn;mh=1;var r=Y7();return Fn=r,Fn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var jn,ph;function K7(){if(ph)return jn;ph=1;var r=qr(),e=gE().REGEXP,t=pE();function n(a){var i,o,s;if(o=r(a).slice(8,-1),(o==="Object"||o==="Error")&&a.constructor){if(s=a.constructor,typeof s.name=="string")return s.name;if(i=e.exec(s.toString()),i)return i[1]}return t(a)?"Buffer":o}return jn=n,jn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Vn,hh;function be(){if(hh)return Vn;hh=1;var r=K7();return Vn=r,Vn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Gn,dh;function Z7(){if(dh)return Gn;dh=1;var r=be();function e(t){var n;return t===null?"null":(n=typeof t,n==="object"?r(t).toLowerCase():n)}return Gn=e,Gn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Cn,yh;function Q7(){if(yh)return Cn;yh=1;var r=be();function e(t){return r(t).toLowerCase()}return Cn=e,Cn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Bn,bh;function hE(){if(bh)return Bn;bh=1;var r=W7(),e=Z7(),t=Q7(),n=r()?t:e;return Bn=n,Bn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var kn,$h;function x7(){if($h)return kn;$h=1;var r=hE();function e(t){return r(t)==="function"}return kn=e,kn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Hn,qh;function ur(){if(qh)return Hn;qh=1;var r=x7();return Hn=r,Hn}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Un,wh;function r9(){if(wh)return Un;wh=1;var r=Object;return Un=r,Un}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Wn,_h;function fm(){if(_h)return Wn;_h=1;var r=r9();return Wn=r,Wn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zn,Rh;function e9(){if(Rh)return zn;Rh=1;var r=Object.getPrototypeOf;return zn=r,zn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Dn,Eh;function t9(){if(Eh)return Dn;Eh=1;function r(e){return e.__proto__}return Dn=r,Dn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Jn,Lh;function n9(){if(Lh)return Jn;Lh=1;var r=qr(),e=t9();function t(n){var a=e(n);return a||a===null?a:r(n.constructor)==="[object Function]"?n.constructor.prototype:n instanceof Object?Object.prototype:null}return Jn=t,Jn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Xn,Oh;function a9(){if(Oh)return Xn;Oh=1;var r=ur(),e=e9(),t=n9(),n;return r(Object.getPrototypeOf)?n=e:n=t,Xn=n,Xn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Yn,Nh;function i9(){if(Nh)return Yn;Nh=1;var r=fm(),e=a9();function t(n){return n==null?null:(n=r(n),e(n))}return Yn=t,Yn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Kn,Sh;function nt(){if(Sh)return Kn;Sh=1;var r=i9();return Kn=r,Kn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Zn,Th;function u9(){if(Th)return Zn;Th=1;var r=sm(),e=ur(),t=nt(),n=rr(),a=qr(),i=Object.prototype;function o(l){var g;for(g in l)if(!n(l,g))return!1;return!0}function s(l){var g;return r(l)?(g=t(l),g?!n(l,"constructor")&&n(g,"constructor")&&e(g.constructor)&&a(g.constructor)==="[object Function]"&&n(g,"isPrototypeOf")&&e(g.isPrototypeOf)&&(g===i||o(l)):!0):!1}return Zn=s,Zn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Qn,Ah;function tr(){if(Ah)return Qn;Ah=1;var r=u9();return Qn=r,Qn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xn,Mh;function o9(){if(Mh)return xn;Mh=1;function r(e){return t;function t(){return e}}return xn=r,xn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ra,Ph;function ar(){if(Ph)return ra;Ph=1;var r=o9();return ra=r,ra}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ea,Ih;function s9(){if(Ih)return ea;Ih=1;function r(){}return ea=r,ea}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ta,Fh;function or(){if(Fh)return ta;Fh=1;var r=s9();return ta=r,ta}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var na,jh;function f9(){if(jh)return na;jh=1;var r=Math.floor;return na=r,na}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var aa,Vh;function wr(){if(Vh)return aa;Vh=1;var r=f9();return aa=r,aa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ia,Gh;function v9(){if(Gh)return ia;Gh=1;var r=wr();function e(t){return r(t)===t}return ia=e,ia}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ua,Ch;function Hr(){if(Ch)return ua;Ch=1;var r=v9();return ua=r,ua}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var oa,Bh;function l9(){if(Bh)return oa;Bh=1;var r=9007199254740991;return oa=r,oa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var sa,kh;function c9(){if(kh)return sa;kh=1;var r=Hr(),e=l9();function t(n){return typeof n=="object"&&n!==null&&typeof n.length=="number"&&r(n.length)&&n.length>=0&&n.length<=e}return sa=t,sa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fa,Hh;function le(){if(Hh)return fa;Hh=1;var r=c9();return fa=r,fa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var va,Uh;function g9(){if(Uh)return va;Uh=1;var r=qr(),e=typeof Uint32Array=="function";function t(n){return e&&n instanceof Uint32Array||r(n)==="[object Uint32Array]"}return va=t,va}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var la,Wh;function ie(){if(Wh)return la;Wh=1;var r=g9();return la=r,la}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ca,zh;function dE(){if(zh)return ca;zh=1;function r(e){return typeof e=="number"}return ca=r,ca}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ga,Dh;function m9(){return Dh||(Dh=1,ga=Number),ga}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ma,Jh;function vm(){if(Jh)return ma;Jh=1;var r=m9();return ma=r,ma}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pa,Xh;function p9(){if(Xh)return pa;Xh=1;var r=vm(),e=r.prototype.toString;return pa=e,pa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ha,Yh;function h9(){if(Yh)return ha;Yh=1;var r=p9();function e(t){try{return r.call(t),!0}catch{return!1}}return ha=e,ha}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var da,Kh;function yE(){if(Kh)return da;Kh=1;var r=tt(),e=qr(),t=vm(),n=h9(),a=r();function i(o){return typeof o=="object"?o instanceof t?!0:a?n(o):e(o)==="[object Number]":!1}return da=i,da}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ya,Zh;function d9(){if(Zh)return ya;Zh=1;var r=dE(),e=yE();function t(n){return r(n)||e(n)}return ya=t,ya}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ba,Qh;function mr(){if(Qh)return ba;Qh=1;var r=D(),e=d9(),t=dE(),n=yE();return r(e,"isPrimitive",t),r(e,"isObject",n),ba=e,ba}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $a,xh;function Nr(){if(xh)return $a;xh=1;var r=Number.POSITIVE_INFINITY;return $a=r,$a}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var qa,rd;function Xr(){if(rd)return qa;rd=1;var r=vm(),e=r.NEGATIVE_INFINITY;return qa=e,qa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wa,ed;function bE(){if(ed)return wa;ed=1;var r=Nr(),e=Xr(),t=Hr();function n(a){return a<r&&a>e&&t(a)}return wa=n,wa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _a,td;function $E(){if(td)return _a;td=1;var r=mr().isPrimitive,e=bE();function t(n){return r(n)&&e(n)}return _a=t,_a}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ra,nd;function qE(){if(nd)return Ra;nd=1;var r=mr().isObject,e=bE();function t(n){return r(n)&&e(n.valueOf())}return Ra=t,Ra}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ea,ad;function y9(){if(ad)return Ea;ad=1;var r=$E(),e=qE();function t(n){return r(n)||e(n)}return Ea=t,Ea}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var La,id;function ue(){if(id)return La;id=1;var r=D(),e=y9(),t=$E(),n=qE();return r(e,"isPrimitive",t),r(e,"isObject",n),La=e,La}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Oa,ud;function wE(){if(ud)return Oa;ud=1;var r=ue().isPrimitive;function e(t){return r(t)&&t>0}return Oa=e,Oa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Na,od;function _E(){if(od)return Na;od=1;var r=ue().isObject;function e(t){return r(t)&&t.valueOf()>0}return Na=e,Na}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Sa,sd;function b9(){if(sd)return Sa;sd=1;var r=wE(),e=_E();function t(n){return r(n)||e(n)}return Sa=t,Sa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ta,fd;function Fe(){if(fd)return Ta;fd=1;var r=D(),e=b9(),t=wE(),n=_E();return r(e,"isPrimitive",t),r(e,"isObject",n),Ta=e,Ta}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Aa,vd;function RE(){if(vd)return Aa;vd=1;var r=9007199254740991;return Aa=r,Aa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ma,ld;function je(){if(ld)return Ma;ld=1;var r=4294967295;return Ma=r,Ma}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Pa,cd;function $9(){if(cd)return Pa;cd=1;var r=typeof Uint32Array=="function"?Uint32Array:null;return Pa=r,Pa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ia,gd;function q9(){if(gd)return Ia;gd=1;var r=ie(),e=je(),t=$9();function n(){var a,i;if(typeof t!="function")return!1;try{i=[1,3.14,-3.14,e+1,e+2],i=new t(i),a=r(i)&&i[0]===1&&i[1]===3&&i[2]===e-2&&i[3]===0&&i[4]===1}catch{a=!1}return a}return Ia=n,Ia}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Fa,md;function w9(){if(md)return Fa;md=1;var r=q9();return Fa=r,Fa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ja,pd;function _9(){if(pd)return ja;pd=1;var r=typeof Uint32Array=="function"?Uint32Array:void 0;return ja=r,ja}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Va,hd;function R9(){if(hd)return Va;hd=1;function r(){throw new Error("not implemented")}return Va=r,Va}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ga,dd;function Sr(){if(dd)return Ga;dd=1;var r=w9(),e=_9(),t=R9(),n;return r()?n=e:n=t,Ga=n,Ga}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ca,yd;function E9(){if(yd)return Ca;yd=1;var r=Nr();function e(t){return t===0&&1/t===r}return Ca=e,Ca}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ba,bd;function L9(){if(bd)return Ba;bd=1;var r=E9();return Ba=r,Ba}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ka,$d;function O9(){if($d)return ka;$d=1;function r(e){return e!==e}return ka=r,ka}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ha,qd;function Q(){if(qd)return Ha;qd=1;var r=O9();return Ha=r,Ha}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ua,wd;function N9(){if(wd)return Ua;wd=1;var r=L9(),e=Q(),t=Nr();function n(a,i){return e(a)||e(i)?NaN:a===t||i===t?t:a===i&&a===0?r(a)?a:i:a>i?a:i}return Ua=n,Ua}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Wa,_d;function S9(){if(_d)return Wa;_d=1;var r=N9();return Wa=r,Wa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var za,Rd;function T9(){if(Rd)return za;Rd=1;var r=65535;function e(t,n){var a,i,o,s,l,g;return t>>>=0,n>>>=0,o=t>>>16>>>0,s=n>>>16>>>0,l=(t&r)>>>0,g=(n&r)>>>0,a=l*g>>>0,i=o*g+l*s<<16>>>0,a+i>>>0}return za=e,za}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Da,Ed;function A9(){if(Ed)return Da;Ed=1;var r=T9();return Da=r,Da}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ja,Ld;function M9(){if(Ld)return Ja;Ld=1;var r="function";function e(t){return typeof t.get===r&&typeof t.set===r}return Ja=e,Ja}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Xa,Od;function P9(){if(Od)return Xa;Od=1;var r=M9();return Xa=r,Xa}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ya,Nd;function I9(){if(Nd)return Ya;Nd=1;var r={float64:e,float32:t,int32:n,int16:a,int8:i,uint32:o,uint16:s,uint8:l,uint8c:g,generic:d,default:p};function e(m,q){return m[q]}function t(m,q){return m[q]}function n(m,q){return m[q]}function a(m,q){return m[q]}function i(m,q){return m[q]}function o(m,q){return m[q]}function s(m,q){return m[q]}function l(m,q){return m[q]}function g(m,q){return m[q]}function d(m,q){return m[q]}function p(m,q){return m[q]}function b(m){var q=r[m];return typeof q=="function"?q:r.default}return Ya=b,Ya}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ka,Sd;function lm(){if(Sd)return Ka;Sd=1;var r=I9();return Ka=r,Ka}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Za,Td;function F9(){if(Td)return Za;Td=1;var r={float64:e,float32:t,int32:n,int16:a,int8:i,uint32:o,uint16:s,uint8:l,uint8c:g,generic:d,default:p};function e(m,q,v){m[q]=v}function t(m,q,v){m[q]=v}function n(m,q,v){m[q]=v}function a(m,q,v){m[q]=v}function i(m,q,v){m[q]=v}function o(m,q,v){m[q]=v}function s(m,q,v){m[q]=v}function l(m,q,v){m[q]=v}function g(m,q,v){m[q]=v}function d(m,q,v){m[q]=v}function p(m,q,v){m[q]=v}function b(m){var q=r[m];return typeof q=="function"?q:r.default}return Za=b,Za}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Qa,Ad;function j9(){if(Ad)return Qa;Ad=1;var r=F9();return Qa=r,Qa}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xa,Md;function V9(){if(Md)return xa;Md=1;var r={complex128:e,complex64:t,default:n};function e(i,o){return i.get(o)}function t(i,o){return i.get(o)}function n(i,o){return i.get(o)}function a(i){var o=r[i];return typeof o=="function"?o:r.default}return xa=a,xa}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ri,Pd;function cm(){if(Pd)return ri;Pd=1;var r=V9();return ri=r,ri}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ei,Id;function G9(){if(Id)return ei;Id=1;var r={complex128:e,complex64:t,default:n};function e(i,o,s){i.set(s,o)}function t(i,o,s){i.set(s,o)}function n(i,o,s){i.set(s,o)}function a(i){var o=r[i];return typeof o=="function"?o:r.default}return ei=a,ei}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ti,Fd;function C9(){if(Fd)return ti;Fd=1;var r=G9();return ti=r,ti}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ni,jd;function B9(){if(jd)return ni;jd=1;var r={Float32Array:"float32",Float64Array:"float64",Array:"generic",Int16Array:"int16",Int32Array:"int32",Int8Array:"int8",Uint16Array:"uint16",Uint32Array:"uint32",Uint8Array:"uint8",Uint8ClampedArray:"uint8c",Complex64Array:"complex64",Complex128Array:"complex128"};return ni=r,ni}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ai,Vd;function k9(){if(Vd)return ai;Vd=1;var r=qr(),e=typeof Float64Array=="function";function t(n){return e&&n instanceof Float64Array||r(n)==="[object Float64Array]"}return ai=t,ai}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ii,Gd;function H9(){if(Gd)return ii;Gd=1;var r=k9();return ii=r,ii}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ui,Cd;function U9(){if(Cd)return ui;Cd=1;var r=typeof Float64Array=="function"?Float64Array:null;return ui=r,ui}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var oi,Bd;function W9(){if(Bd)return oi;Bd=1;var r=H9(),e=U9();function t(){var n,a;if(typeof e!="function")return!1;try{a=new e([1,3.14,-3.14,NaN]),n=r(a)&&a[0]===1&&a[1]===3.14&&a[2]===-3.14&&a[3]!==a[3]}catch{n=!1}return n}return oi=t,oi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var si,kd;function EE(){if(kd)return si;kd=1;var r=W9();return si=r,si}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fi,Hd;function z9(){if(Hd)return fi;Hd=1;var r=typeof Float64Array=="function"?Float64Array:void 0;return fi=r,fi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vi,Ud;function D9(){if(Ud)return vi;Ud=1;function r(){throw new Error("not implemented")}return vi=r,vi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var li,Wd;function jr(){if(Wd)return li;Wd=1;var r=EE(),e=z9(),t=D9(),n;return r()?n=e:n=t,li=n,li}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ci,zd;function J9(){if(zd)return ci;zd=1;var r=qr(),e=typeof Float32Array=="function";function t(n){return e&&n instanceof Float32Array||r(n)==="[object Float32Array]"}return ci=t,ci}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gi,Dd;function X9(){if(Dd)return gi;Dd=1;var r=J9();return gi=r,gi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var mi,Jd;function Y9(){if(Jd)return mi;Jd=1;var r=typeof Float32Array=="function"?Float32Array:null;return mi=r,mi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pi,Xd;function K9(){if(Xd)return pi;Xd=1;var r=X9(),e=Nr(),t=Y9();function n(){var a,i;if(typeof t!="function")return!1;try{i=new t([1,3.14,-3.14,5e40]),a=r(i)&&i[0]===1&&i[1]===3.140000104904175&&i[2]===-3.140000104904175&&i[3]===e}catch{a=!1}return a}return pi=n,pi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var hi,Yd;function Z9(){if(Yd)return hi;Yd=1;var r=K9();return hi=r,hi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var di,Kd;function Q9(){if(Kd)return di;Kd=1;var r=typeof Float32Array=="function"?Float32Array:void 0;return di=r,di}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var yi,Zd;function x9(){if(Zd)return yi;Zd=1;function r(){throw new Error("not implemented")}return yi=r,yi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var bi,Qd;function $e(){if(Qd)return bi;Qd=1;var r=Z9(),e=Q9(),t=x9(),n;return r()?n=e:n=t,bi=n,bi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $i,xd;function rO(){if(xd)return $i;xd=1;var r=qr(),e=typeof Int32Array=="function";function t(n){return e&&n instanceof Int32Array||r(n)==="[object Int32Array]"}return $i=t,$i}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var qi,r2;function gm(){if(r2)return qi;r2=1;var r=rO();return qi=r,qi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wi,e2;function eO(){if(e2)return wi;e2=1;var r=2147483647;return wi=r,wi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _i,t2;function tO(){if(t2)return _i;t2=1;var r=-2147483648;return _i=r,_i}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ri,n2;function nO(){if(n2)return Ri;n2=1;var r=typeof Int32Array=="function"?Int32Array:null;return Ri=r,Ri}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ei,a2;function aO(){if(a2)return Ei;a2=1;var r=gm(),e=eO(),t=tO(),n=nO();function a(){var i,o;if(typeof n!="function")return!1;try{o=new n([1,3.14,-3.14,e+1]),i=r(o)&&o[0]===1&&o[1]===3&&o[2]===-3&&o[3]===t}catch{i=!1}return i}return Ei=a,Ei}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Li,i2;function iO(){if(i2)return Li;i2=1;var r=aO();return Li=r,Li}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Oi,u2;function uO(){if(u2)return Oi;u2=1;var r=typeof Int32Array=="function"?Int32Array:void 0;return Oi=r,Oi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ni,o2;function oO(){if(o2)return Ni;o2=1;function r(){throw new Error("not implemented")}return Ni=r,Ni}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Si,s2;function qe(){if(s2)return Si;s2=1;var r=iO(),e=uO(),t=oO(),n;return r()?n=e:n=t,Si=n,Si}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ti,f2;function sO(){if(f2)return Ti;f2=1;var r=qr(),e=typeof Uint16Array=="function";function t(n){return e&&n instanceof Uint16Array||r(n)==="[object Uint16Array]"}return Ti=t,Ti}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ai,v2;function fO(){if(v2)return Ai;v2=1;var r=sO();return Ai=r,Ai}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Mi,l2;function vO(){if(l2)return Mi;l2=1;var r=65535;return Mi=r,Mi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Pi,c2;function lO(){if(c2)return Pi;c2=1;var r=typeof Uint16Array=="function"?Uint16Array:null;return Pi=r,Pi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ii,g2;function cO(){if(g2)return Ii;g2=1;var r=fO(),e=vO(),t=lO();function n(){var a,i;if(typeof t!="function")return!1;try{i=[1,3.14,-3.14,e+1,e+2],i=new t(i),a=r(i)&&i[0]===1&&i[1]===3&&i[2]===e-2&&i[3]===0&&i[4]===1}catch{a=!1}return a}return Ii=n,Ii}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Fi,m2;function gO(){if(m2)return Fi;m2=1;var r=cO();return Fi=r,Fi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ji,p2;function mO(){if(p2)return ji;p2=1;var r=typeof Uint16Array=="function"?Uint16Array:void 0;return ji=r,ji}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Vi,h2;function pO(){if(h2)return Vi;h2=1;function r(){throw new Error("not implemented")}return Vi=r,Vi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Gi,d2;function at(){if(d2)return Gi;d2=1;var r=gO(),e=mO(),t=pO(),n;return r()?n=e:n=t,Gi=n,Gi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ci,y2;function hO(){if(y2)return Ci;y2=1;var r=qr(),e=typeof Int16Array=="function";function t(n){return e&&n instanceof Int16Array||r(n)==="[object Int16Array]"}return Ci=t,Ci}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Bi,b2;function dO(){if(b2)return Bi;b2=1;var r=hO();return Bi=r,Bi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ki,$2;function yO(){if($2)return ki;$2=1;var r=32767;return ki=r,ki}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Hi,q2;function bO(){if(q2)return Hi;q2=1;var r=-32768;return Hi=r,Hi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ui,w2;function $O(){if(w2)return Ui;w2=1;var r=typeof Int16Array=="function"?Int16Array:null;return Ui=r,Ui}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Wi,_2;function qO(){if(_2)return Wi;_2=1;var r=dO(),e=yO(),t=bO(),n=$O();function a(){var i,o;if(typeof n!="function")return!1;try{o=new n([1,3.14,-3.14,e+1]),i=r(o)&&o[0]===1&&o[1]===3&&o[2]===-3&&o[3]===t}catch{i=!1}return i}return Wi=a,Wi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zi,R2;function wO(){if(R2)return zi;R2=1;var r=qO();return zi=r,zi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Di,E2;function _O(){if(E2)return Di;E2=1;var r=typeof Int16Array=="function"?Int16Array:void 0;return Di=r,Di}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ji,L2;function RO(){if(L2)return Ji;L2=1;function r(){throw new Error("not implemented")}return Ji=r,Ji}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Xi,O2;function mm(){if(O2)return Xi;O2=1;var r=wO(),e=_O(),t=RO(),n;return r()?n=e:n=t,Xi=n,Xi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Yi,N2;function EO(){if(N2)return Yi;N2=1;var r=qr(),e=typeof Uint8Array=="function";function t(n){return e&&n instanceof Uint8Array||r(n)==="[object Uint8Array]"}return Yi=t,Yi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ki,S2;function LO(){if(S2)return Ki;S2=1;var r=EO();return Ki=r,Ki}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Zi,T2;function OO(){if(T2)return Zi;T2=1;var r=255;return Zi=r,Zi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Qi,A2;function NO(){if(A2)return Qi;A2=1;var r=typeof Uint8Array=="function"?Uint8Array:null;return Qi=r,Qi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xi,M2;function SO(){if(M2)return xi;M2=1;var r=LO(),e=OO(),t=NO();function n(){var a,i;if(typeof t!="function")return!1;try{i=[1,3.14,-3.14,e+1,e+2],i=new t(i),a=r(i)&&i[0]===1&&i[1]===3&&i[2]===e-2&&i[3]===0&&i[4]===1}catch{a=!1}return a}return xi=n,xi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ru,P2;function TO(){if(P2)return ru;P2=1;var r=SO();return ru=r,ru}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var eu,I2;function AO(){if(I2)return eu;I2=1;var r=typeof Uint8Array=="function"?Uint8Array:void 0;return eu=r,eu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var tu,F2;function MO(){if(F2)return tu;F2=1;function r(){throw new Error("not implemented")}return tu=r,tu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var nu,j2;function it(){if(j2)return nu;j2=1;var r=TO(),e=AO(),t=MO(),n;return r()?n=e:n=t,nu=n,nu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var au,V2;function PO(){if(V2)return au;V2=1;var r=qr(),e=typeof Uint8ClampedArray=="function";function t(n){return e&&n instanceof Uint8ClampedArray||r(n)==="[object Uint8ClampedArray]"}return au=t,au}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var iu,G2;function IO(){if(G2)return iu;G2=1;var r=PO();return iu=r,iu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var uu,C2;function FO(){if(C2)return uu;C2=1;var r=typeof Uint8ClampedArray=="function"?Uint8ClampedArray:null;return uu=r,uu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ou,B2;function jO(){if(B2)return ou;B2=1;var r=IO(),e=FO();function t(){var n,a;if(typeof e!="function")return!1;try{a=new e([-1,0,1,3.14,4.99,255,256]),n=r(a)&&a[0]===0&&a[1]===0&&a[2]===1&&a[3]===3&&a[4]===5&&a[5]===255&&a[6]===255}catch{n=!1}return n}return ou=t,ou}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var su,k2;function VO(){if(k2)return su;k2=1;var r=jO();return su=r,su}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fu,H2;function GO(){if(H2)return fu;H2=1;var r=typeof Uint8ClampedArray=="function"?Uint8ClampedArray:void 0;return fu=r,fu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vu,U2;function CO(){if(U2)return vu;U2=1;function r(){throw new Error("not implemented")}return vu=r,vu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var lu,W2;function pm(){if(W2)return lu;W2=1;var r=VO(),e=GO(),t=CO(),n;return r()?n=e:n=t,lu=n,lu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var cu,z2;function BO(){if(z2)return cu;z2=1;var r=qr(),e=typeof Int8Array=="function";function t(n){return e&&n instanceof Int8Array||r(n)==="[object Int8Array]"}return cu=t,cu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gu,D2;function kO(){if(D2)return gu;D2=1;var r=BO();return gu=r,gu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var mu,J2;function HO(){if(J2)return mu;J2=1;var r=127;return mu=r,mu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pu,X2;function UO(){if(X2)return pu;X2=1;var r=-128;return pu=r,pu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var hu,Y2;function WO(){if(Y2)return hu;Y2=1;var r=typeof Int8Array=="function"?Int8Array:null;return hu=r,hu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var du,K2;function zO(){if(K2)return du;K2=1;var r=kO(),e=HO(),t=UO(),n=WO();function a(){var i,o;if(typeof n!="function")return!1;try{o=new n([1,3.14,-3.14,e+1]),i=r(o)&&o[0]===1&&o[1]===3&&o[2]===-3&&o[3]===t}catch{i=!1}return i}return du=a,du}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var yu,Z2;function DO(){if(Z2)return yu;Z2=1;var r=zO();return yu=r,yu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var bu,Q2;function JO(){if(Q2)return bu;Q2=1;var r=typeof Int8Array=="function"?Int8Array:void 0;return bu=r,bu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $u,x2;function XO(){if(x2)return $u;x2=1;function r(){throw new Error("not implemented")}return $u=r,$u}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var qu,ry;function hm(){if(ry)return qu;ry=1;var r=DO(),e=JO(),t=XO(),n;return r()?n=e:n=t,qu=n,qu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wu,ey;function LE(){if(ey)return wu;ey=1;var r=ue().isPrimitive;function e(t){return r(t)&&t>=0}return wu=e,wu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _u,ty;function OE(){if(ty)return _u;ty=1;var r=ue().isObject;function e(t){return r(t)&&t.valueOf()>=0}return _u=e,_u}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ru,ny;function YO(){if(ny)return Ru;ny=1;var r=LE(),e=OE();function t(n){return r(n)||e(n)}return Ru=t,Ru}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Eu,ay;function dm(){if(ay)return Eu;ay=1;var r=D(),e=YO(),t=LE(),n=OE();return r(e,"isPrimitive",t),r(e,"isObject",n),Eu=e,Eu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Lu,iy;function KO(){if(iy)return Lu;iy=1;var r=4294967295;return Lu=r,Lu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ou,uy;function ZO(){if(uy)return Ou;uy=1;var r=Hr(),e=KO();function t(n){return typeof n=="object"&&n!==null&&typeof n.length=="number"&&r(n.length)&&n.length>=0&&n.length<=e}return Ou=t,Ou}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Nu,oy;function we(){if(oy)return Nu;oy=1;var r=ZO();return Nu=r,Nu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Su,sy;function QO(){if(sy)return Su;sy=1;var r=qr(),e=typeof ArrayBuffer=="function";function t(n){return e&&n instanceof ArrayBuffer||r(n)==="[object ArrayBuffer]"}return Su=t,Su}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Tu,fy;function NE(){if(fy)return Tu;fy=1;var r=QO();return Tu=r,Tu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Au,vy;function SE(){if(vy)return Au;vy=1;function r(e){return typeof e=="string"}return Au=r,Au}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Mu,ly;function xO(){if(ly)return Mu;ly=1;var r=String.prototype.valueOf;return Mu=r,Mu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Pu,cy;function rN(){if(cy)return Pu;cy=1;var r=xO();function e(t){try{return r.call(t),!0}catch{return!1}}return Pu=e,Pu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Iu,gy;function TE(){if(gy)return Iu;gy=1;var r=tt(),e=qr(),t=rN(),n=r();function a(i){return typeof i=="object"?i instanceof String?!0:n?t(i):e(i)==="[object String]":!1}return Iu=a,Iu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Fu,my;function eN(){if(my)return Fu;my=1;var r=SE(),e=TE();function t(n){return r(n)||e(n)}return Fu=t,Fu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ju,py;function _e(){if(py)return ju;py=1;var r=D(),e=eN(),t=SE(),n=TE();return r(e,"isPrimitive",t),r(e,"isObject",n),ju=e,ju}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Vu,hy;function tN(){if(hy)return Vu;hy=1;function r(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i",e}return Vu=r,Vu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Gu,dy;function nN(){if(dy)return Gu;dy=1;function r(){var e={};return e.type="Complex128",e.re=this.re,e.im=this.im,e}return Gu=r,Gu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Cu,yy;function aN(){if(yy)return Cu;yy=1;var r=mr().isPrimitive,e=ae(),t=D(),n=Y(),a=tN(),i=nN();function o(s,l){if(!(this instanceof o))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!r(s))throw new TypeError(n("invalid argument. Real component must be a number. Value: `%s`.",s));if(!r(l))throw new TypeError(n("invalid argument. Imaginary component must be a number. Value: `%s`.",l));return e(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:s}),e(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:l}),this}return t(o,"BYTES_PER_ELEMENT",8),t(o.prototype,"BYTES_PER_ELEMENT",8),t(o.prototype,"byteLength",16),t(o.prototype,"toString",a),t(o.prototype,"toJSON",i),Cu=o,Cu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Bu,by;function iN(){if(by)return Bu;by=1;var r=aN();return Bu=r,Bu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ku,$y;function uN(){if($y)return ku;$y=1;var r=typeof Math.fround=="function"?Math.fround:null;return ku=r,ku}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Hu,qy;function oN(){if(qy)return Hu;qy=1;var r=$e(),e=new r(1);function t(n){return e[0]=n,e[0]}return Hu=t,Hu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Uu,wy;function AE(){if(wy)return Uu;wy=1;var r=uN(),e=oN(),t;return typeof r=="function"?t=r:t=e,Uu=t,Uu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Wu,_y;function sN(){if(_y)return Wu;_y=1;function r(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i",e}return Wu=r,Wu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zu,Ry;function fN(){if(Ry)return zu;Ry=1;function r(){var e={};return e.type="Complex64",e.re=this.re,e.im=this.im,e}return zu=r,zu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Du,Ey;function vN(){if(Ey)return Du;Ey=1;var r=mr().isPrimitive,e=ae(),t=D(),n=AE(),a=Y(),i=sN(),o=fN();function s(l,g){if(!(this instanceof s))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!r(l))throw new TypeError(a("invalid argument. Real component must be a number. Value: `%s`.",l));if(!r(g))throw new TypeError(a("invalid argument. Imaginary component must be a number. Value: `%s`.",g));return e(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:n(l)}),e(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:n(g)}),this}return t(s,"BYTES_PER_ELEMENT",4),t(s.prototype,"BYTES_PER_ELEMENT",4),t(s.prototype,"byteLength",8),t(s.prototype,"toString",i),t(s.prototype,"toJSON",o),Du=s,Du}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ju,Ly;function lN(){if(Ly)return Ju;Ly=1;var r=vN();return Ju=r,Ju}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Xu,Oy;function cN(){if(Oy)return Xu;Oy=1;var r=iN(),e=lN();function t(n){return n instanceof r||n instanceof e?!0:typeof n=="object"&&n!==null&&typeof n.re=="number"&&typeof n.im=="number"}return Xu=t,Xu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Yu,Ny;function oe(){if(Ny)return Yu;Ny=1;var r=cN();return Yu=r,Yu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ku,Sy;function gN(){if(Sy)return Ku;Sy=1;var r=Hr();function e(t){return r(t/2)}return Ku=e,Ku}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Zu,Ty;function ym(){if(Ty)return Zu;Ty=1;var r=gN();return Zu=r,Zu}/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Qu,Ay;function mN(){if(Ay)return Qu;Ay=1;var r=8;function e(t){return typeof t=="object"&&t!==null&&t.constructor.name==="Complex64Array"&&t.BYTES_PER_ELEMENT===r}return Qu=e,Qu}/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xu,My;function ME(){if(My)return xu;My=1;var r=mN();return xu=r,xu}/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ro,Py;function pN(){if(Py)return ro;Py=1;var r=16;function e(t){return typeof t=="object"&&t!==null&&t.constructor.name==="Complex128Array"&&t.BYTES_PER_ELEMENT===r}return ro=e,ro}/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var eo,Iy;function PE(){if(Iy)return eo;Iy=1;var r=pN();return eo=r,eo}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var to,Fy;function hN(){if(Fy)return to;Fy=1;var r=rr(),e=fE();function t(){return typeof e=="function"&&typeof e("foo")=="symbol"&&r(e,"iterator")&&typeof e.iterator=="symbol"}return to=t,to}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var no,jy;function bm(){if(jy)return no;jy=1;var r=hN();return no=r,no}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ao,Vy;function dN(){if(Vy)return ao;Vy=1;var r=bm(),e=r()?Symbol.iterator:null;return ao=e,ao}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var io,Gy;function IE(){if(Gy)return io;Gy=1;var r=dN();return io=r,io}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var uo,Cy;function yN(){if(Cy)return uo;Cy=1;function r(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i",e}return uo=r,uo}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var oo,By;function bN(){if(By)return oo;By=1;function r(){var e={};return e.type="Complex64",e.re=this.re,e.im=this.im,e}return oo=r,oo}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var so,ky;function $N(){if(ky)return so;ky=1;var r=mr().isPrimitive,e=ae(),t=D(),n=AE(),a=Y(),i=yN(),o=bN();function s(l,g){if(!(this instanceof s))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!r(l))throw new TypeError(a("invalid argument. Real component must be a number. Value: `%s`.",l));if(!r(g))throw new TypeError(a("invalid argument. Imaginary component must be a number. Value: `%s`.",g));return e(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:n(l)}),e(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:n(g)}),this}return t(s,"BYTES_PER_ELEMENT",4),t(s.prototype,"BYTES_PER_ELEMENT",4),t(s.prototype,"byteLength",8),t(s.prototype,"toString",i),t(s.prototype,"toJSON",o),so=s,so}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fo,Hy;function qN(){if(Hy)return fo;Hy=1;var r=$N();return fo=r,fo}/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vo,Uy;function wN(){if(Uy)return vo;Uy=1;function r(e){return e.re}return vo=r,vo}/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var lo,Wy;function ut(){if(Wy)return lo;Wy=1;var r=wN();return lo=r,lo}/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var co,zy;function _N(){if(zy)return co;zy=1;function r(e){return e.im}return co=r,co}/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var go,Dy;function ot(){if(Dy)return go;Dy=1;var r=_N();return go=r,go}/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var mo,Jy;function RN(){if(Jy)return mo;Jy=1;var r=$e();function e(t,n){return new r(t.buffer,t.byteOffset+t.BYTES_PER_ELEMENT*n,2*(t.length-n))}return mo=e,mo}/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var po,Xy;function $m(){if(Xy)return po;Xy=1;var r=RN();return po=r,po}/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ho,Yy;function EN(){if(Yy)return ho;Yy=1;var r=jr();function e(t,n){return new r(t.buffer,t.byteOffset+t.BYTES_PER_ELEMENT*n,2*(t.length-n))}return ho=e,ho}/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var yo,Ky;function qm(){if(Ky)return yo;Ky=1;var r=EN();return yo=r,yo}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var bo,Zy;function LN(){if(Zy)return bo;Zy=1;var r=we(),e=oe(),t=ut(),n=ot(),a=Y();function i(o){var s,l,g;for(s=[];l=o.next(),!l.done;)if(g=l.value,r(g)&&g.length>=2)s.push(g[0],g[1]);else if(e(g))s.push(t(g),n(g));else return new TypeError(a("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",g));return s}return bo=i,bo}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $o,Qy;function ON(){if(Qy)return $o;Qy=1;var r=we(),e=oe(),t=ut(),n=ot(),a=Y();function i(o,s,l){var g,d,p,b;for(g=[],b=-1;d=o.next(),!d.done;)if(b+=1,p=s.call(l,d.value,b),r(p)&&p.length>=2)g.push(p[0],p[1]);else if(e(p))g.push(t(p),n(p));else return new TypeError(a("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",p));return g}return $o=i,$o}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var qo,xy;function NN(){if(xy)return qo;xy=1;var r=oe(),e=ut(),t=ot();function n(a,i){var o,s,l,g;for(o=i.length,g=0,l=0;l<o;l++){if(s=i[l],!r(s))return null;a[g]=e(s),a[g+1]=t(s),g+=2}return a}return qo=n,qo}var wo,rb;function SN(){if(rb)return wo;rb=1;var r=dm().isPrimitive,e=we(),t=le(),n=NE(),a=sm(),i=ve(),o=_e().isPrimitive,s=ur(),l=oe(),g=ym(),d=Hr(),p=ME(),b=PE(),m=bm(),q=IE(),v=D(),f=er(),u=$e(),c=qN(),h=Y(),R=ut(),A=ot(),G=wr(),M=$m(),C=qm(),N=lm(),E=cm(),P=LN(),O=ON(),F=NN(),S=u.BYTES_PER_ELEMENT*2,I=m();function T(j){return j instanceof W||typeof j=="object"&&j!==null&&(j.constructor.name==="Complex64Array"||j.constructor.name==="Complex128Array")&&typeof j._length=="number"&&typeof j._buffer=="object"}function z(j){return j===W||j.name==="Complex128Array"}function X(j,$){return $*=2,new c(j[$],j[$+1])}function W(){var j,$,y,w;if($=arguments.length,!(this instanceof W))return $===0?new W:$===1?new W(arguments[0]):$===2?new W(arguments[0],arguments[1]):new W(arguments[0],arguments[1],arguments[2]);if($===0)y=new u(0);else if($===1)if(r(arguments[0]))y=new u(arguments[0]*2);else if(t(arguments[0]))if(y=arguments[0],w=y.length,w&&i(y)&&l(y[0])){if(y=F(new u(w*2),y),y===null){if(!g(w))throw new RangeError(h("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",w));y=new u(arguments[0])}}else{if(p(y))y=M(y,0);else if(b(y))y=C(y,0);else if(!g(w))throw new RangeError(h("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",w));y=new u(y)}else if(n(arguments[0])){if(y=arguments[0],!d(y.byteLength/S))throw new RangeError(h("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",S,y.byteLength));y=new u(y)}else if(a(arguments[0])){if(y=arguments[0],I===!1)throw new TypeError(h("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",y));if(!s(y[q]))throw new TypeError(h("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",y));if(y=y[q](),!s(y.next))throw new TypeError(h("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",y));if(y=P(y),y instanceof Error)throw y;y=new u(y)}else throw new TypeError(h("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));else{if(y=arguments[0],!n(y))throw new TypeError(h("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",y));if(j=arguments[1],!r(j))throw new TypeError(h("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",j));if(!d(j/S))throw new RangeError(h("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",S,j));if($===2){if(w=y.byteLength-j,!d(w/S))throw new RangeError(h("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",S,w));y=new u(y,j)}else{if(w=arguments[2],!r(w))throw new TypeError(h("invalid argument. Length must be a nonnegative integer. Value: `%s`.",w));if(w*S>y.byteLength-j)throw new RangeError(h("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",w*S));y=new u(y,j,w*2)}}return v(this,"_buffer",y),v(this,"_length",y.length/2),this}return v(W,"BYTES_PER_ELEMENT",S),v(W,"name","Complex64Array"),v(W,"from",function($){var y,w,L,_,B,k,Z,H,K,U,V,J;if(!s(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!z(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(w=arguments.length,w>1){if(L=arguments[1],!s(L))throw new TypeError(h("invalid argument. Second argument must be a function. Value: `%s`.",L));w>2&&(y=arguments[2])}if(T($)){if(H=$.length,L){for(_=new this(H),B=_._buffer,J=0,V=0;V<H;V++){if(U=L.call(y,$.get(V),V),l(U))B[J]=R(U),B[J+1]=A(U);else if(e(U)&&U.length>=2)B[J]=U[0],B[J+1]=U[1];else throw new TypeError(h("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",U));J+=2}return _}return new this($)}if(t($)){if(L){for(H=$.length,$.get&&$.set?Z=E("default"):Z=N("default"),V=0;V<H;V++)if(!l(Z($,V))){K=!0;break}if(K){if(!g(H))throw new RangeError(h("invalid argument. First argument must have a length which is a multiple of %u. Length: `%u`.",2,H));for(_=new this(H/2),B=_._buffer,V=0;V<H;V++)B[V]=L.call(y,Z($,V),V);return _}for(_=new this(H),B=_._buffer,J=0,V=0;V<H;V++){if(U=L.call(y,Z($,V),V),l(U))B[J]=R(U),B[J+1]=A(U);else if(e(U)&&U.length>=2)B[J]=U[0],B[J+1]=U[1];else throw new TypeError(h("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",U));J+=2}return _}return new this($)}if(a($)&&I&&s($[q])){if(B=$[q](),!s(B.next))throw new TypeError(h("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",$));if(L?k=O(B,L,y):k=P(B),k instanceof Error)throw k;for(H=k.length/2,_=new this(H),B=_._buffer,V=0;V<H;V++)B[V]=k[V];return _}throw new TypeError(h("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",$))}),v(W,"of",function(){var $,y;if(!s(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!z(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for($=[],y=0;y<arguments.length;y++)$.push(arguments[y]);return new this($)}),v(W.prototype,"at",function($){if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!d($))throw new TypeError(h("invalid argument. Must provide an integer. Value: `%s`.",$));if($<0&&($+=this._length),!($<0||$>=this._length))return X(this._buffer,$)}),f(W.prototype,"buffer",function(){return this._buffer.buffer}),f(W.prototype,"byteLength",function(){return this._buffer.byteLength}),f(W.prototype,"byteOffset",function(){return this._buffer.byteOffset}),v(W.prototype,"BYTES_PER_ELEMENT",W.BYTES_PER_ELEMENT),v(W.prototype,"copyWithin",function($,y){if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return arguments.length===2?this._buffer.copyWithin($*2,y*2):this._buffer.copyWithin($*2,y*2,arguments[2]*2),this}),v(W.prototype,"entries",function(){var $,y,w,L,_,B,k;if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return y=this,$=this._buffer,L=this._length,B=-1,k=-2,w={},v(w,"next",Z),v(w,"return",H),q&&v(w,q,K),w;function Z(){var U;return B+=1,_||B>=L?{done:!0}:(k+=2,U=new c($[k],$[k+1]),{value:[B,U],done:!1})}function H(U){return _=!0,arguments.length?{value:U,done:!0}:{done:!0}}function K(){return y.entries()}}),v(W.prototype,"every",function($,y){var w,L;if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!s($))throw new TypeError(h("invalid argument. First argument must be a function. Value: `%s`.",$));for(w=this._buffer,L=0;L<this._length;L++)if(!$.call(y,X(w,L),L,this))return!1;return!0}),v(W.prototype,"fill",function($,y,w){var L,_,B,k,Z,H;if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!l($))throw new TypeError(h("invalid argument. First argument must be a complex number. Value: `%s`.",$));if(L=this._buffer,_=this._length,arguments.length>1){if(!d(y))throw new TypeError(h("invalid argument. Second argument must be an integer. Value: `%s`.",y));if(y<0&&(y+=_,y<0&&(y=0)),arguments.length>2){if(!d(w))throw new TypeError(h("invalid argument. Third argument must be an integer. Value: `%s`.",w));w<0&&(w+=_,w<0&&(w=0)),w>_&&(w=_)}else w=_}else y=0,w=_;for(k=R($),Z=A($),H=y;H<w;H++)B=2*H,L[B]=k,L[B+1]=Z;return this}),v(W.prototype,"filter",function($,y){var w,L,_,B;if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!s($))throw new TypeError(h("invalid argument. First argument must be a function. Value: `%s`.",$));for(w=this._buffer,L=[],_=0;_<this._length;_++)B=X(w,_),$.call(y,B,_,this)&&L.push(B);return new this.constructor(L)}),v(W.prototype,"find",function($,y){var w,L,_;if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!s($))throw new TypeError(h("invalid argument. First argument must be a function. Value: `%s`.",$));for(w=this._buffer,L=0;L<this._length;L++)if(_=X(w,L),$.call(y,_,L,this))return _}),v(W.prototype,"findIndex",function($,y){var w,L,_;if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!s($))throw new TypeError(h("invalid argument. First argument must be a function. Value: `%s`.",$));for(w=this._buffer,L=0;L<this._length;L++)if(_=X(w,L),$.call(y,_,L,this))return L;return-1}),v(W.prototype,"findLast",function($,y){var w,L,_;if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!s($))throw new TypeError(h("invalid argument. First argument must be a function. Value: `%s`.",$));for(w=this._buffer,L=this._length-1;L>=0;L--)if(_=X(w,L),$.call(y,_,L,this))return _}),v(W.prototype,"findLastIndex",function($,y){var w,L,_;if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!s($))throw new TypeError(h("invalid argument. First argument must be a function. Value: `%s`.",$));for(w=this._buffer,L=this._length-1;L>=0;L--)if(_=X(w,L),$.call(y,_,L,this))return L;return-1}),v(W.prototype,"forEach",function($,y){var w,L,_;if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!s($))throw new TypeError(h("invalid argument. First argument must be a function. Value: `%s`.",$));for(w=this._buffer,L=0;L<this._length;L++)_=X(w,L),$.call(y,_,L,this)}),v(W.prototype,"get",function($){if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!r($))throw new TypeError(h("invalid argument. Must provide a nonnegative integer. Value: `%s`.",$));if(!($>=this._length))return X(this._buffer,$)}),v(W.prototype,"includes",function($,y){var w,L,_,B,k;if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!l($))throw new TypeError(h("invalid argument. First argument must be a complex number. Value: `%s`.",$));if(arguments.length>1){if(!d(y))throw new TypeError(h("invalid argument. Second argument must be an integer. Value: `%s`.",y));y<0&&(y+=this._length,y<0&&(y=0))}else y=0;for(_=R($),B=A($),w=this._buffer,k=y;k<this._length;k++)if(L=2*k,_===w[L]&&B===w[L+1])return!0;return!1}),v(W.prototype,"indexOf",function($,y){var w,L,_,B,k;if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!l($))throw new TypeError(h("invalid argument. First argument must be a complex number. Value: `%s`.",$));if(arguments.length>1){if(!d(y))throw new TypeError(h("invalid argument. Second argument must be an integer. Value: `%s`.",y));y<0&&(y+=this._length,y<0&&(y=0))}else y=0;for(_=R($),B=A($),w=this._buffer,k=y;k<this._length;k++)if(L=2*k,_===w[L]&&B===w[L+1])return k;return-1}),v(W.prototype,"join",function($){var y,w,L,_;if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(arguments.length===0)L=",";else if(o($))L=$;else throw new TypeError(h("invalid argument. First argument must be a string. Value: `%s`.",$));for(y=[],w=this._buffer,_=0;_<this._length;_++)y.push(X(w,_).toString());return y.join(L)}),v(W.prototype,"lastIndexOf",function($,y){var w,L,_,B,k;if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!l($))throw new TypeError(h("invalid argument. First argument must be a complex number. Value: `%s`.",$));if(arguments.length>1){if(!d(y))throw new TypeError(h("invalid argument. Second argument must be an integer. Value: `%s`.",y));y>=this._length?y=this._length-1:y<0&&(y+=this._length)}else y=this._length-1;for(_=R($),B=A($),w=this._buffer,k=y;k>=0;k--)if(L=2*k,_===w[L]&&B===w[L+1])return k;return-1}),f(W.prototype,"length",function(){return this._length}),v(W.prototype,"map",function($,y){var w,L,_,B,k;if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!s($))throw new TypeError(h("invalid argument. First argument must be a function. Value: `%s`.",$));for(L=this._buffer,_=new this.constructor(this._length),w=_._buffer,B=0;B<this._length;B++)if(k=$.call(y,X(L,B),B,this),l(k))w[2*B]=R(k),w[2*B+1]=A(k);else if(e(k)&&k.length===2)w[2*B]=k[0],w[2*B+1]=k[1];else throw new TypeError(h("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",k));return _}),v(W.prototype,"reduce",function($,y){var w,L,_,B,k;if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!s($))throw new TypeError(h("invalid argument. First argument must be a function. Value: `%s`.",$));if(w=this._buffer,_=this._length,arguments.length>1)L=y,k=0;else{if(_===0)throw new Error("invalid operation. If not provided an initial value, an array must contain at least one element.");L=X(w,0),k=1}for(;k<_;k++)B=X(w,k),L=$(L,B,k,this);return L}),v(W.prototype,"reverse",function(){var $,y,w,L,_,B;if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(w=this._length,$=this._buffer,L=G(w/2),_=0;_<L;_++)B=w-_-1,y=$[2*_],$[2*_]=$[2*B],$[2*B]=y,y=$[2*_+1],$[2*_+1]=$[2*B+1],$[2*B+1]=y;return this}),v(W.prototype,"set",function($){var y,w,L,_,B,k,Z,H,K;if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(L=this._buffer,arguments.length>1){if(w=arguments[1],!r(w))throw new TypeError(h("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",w))}else w=0;if(l($)){if(w>=this._length)throw new RangeError(h("invalid argument. Index argument is out-of-bounds. Value: `%u`.",w));w*=2,L[w]=R($),L[w+1]=A($);return}if(T($)){if(k=$._length,w+k>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(y=$._buffer,K=L.byteOffset+w*S,y.buffer===L.buffer&&y.byteOffset<K&&y.byteOffset+y.byteLength>K){for(_=new u(y.length),H=0;H<y.length;H++)_[H]=y[H];y=_}for(w*=2,K=0,H=0;H<k;H++)L[w]=y[K],L[w+1]=y[K+1],w+=2,K+=2;return}if(t($)){for(k=$.length,H=0;H<k;H++)if(!l($[H])){B=!0;break}if(B){if(!g(k))throw new RangeError(h("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",k));if(w+k/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(y=$,K=L.byteOffset+w*S,y.buffer===L.buffer&&y.byteOffset<K&&y.byteOffset+y.byteLength>K){for(_=new u(k),H=0;H<k;H++)_[H]=y[H];y=_}for(w*=2,k/=2,K=0,H=0;H<k;H++)L[w]=y[K],L[w+1]=y[K+1],w+=2,K+=2;return}if(w+k>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(w*=2,H=0;H<k;H++)Z=$[H],L[w]=R(Z),L[w+1]=A(Z),w+=2;return}throw new TypeError(h("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",$))}),v(W.prototype,"slice",function($,y){var w,L,_,B,k,Z,H;if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(k=this._buffer,Z=this._length,arguments.length===0)$=0,y=Z;else{if(!d($))throw new TypeError(h("invalid argument. First argument must be an integer. Value: `%s`.",$));if($<0&&($+=Z,$<0&&($=0)),arguments.length===1)y=Z;else{if(!d(y))throw new TypeError(h("invalid argument. Second argument must be an integer. Value: `%s`.",y));y<0?(y+=Z,y<0&&(y=0)):y>Z&&(y=Z)}}for($<y?w=y-$:w=0,_=new this.constructor(w),L=_._buffer,H=0;H<w;H++)B=2*(H+$),L[2*H]=k[B],L[2*H+1]=k[B+1];return _}),v(W.prototype,"some",function($,y){var w,L;if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!s($))throw new TypeError(h("invalid argument. First argument must be a function. Value: `%s`.",$));for(w=this._buffer,L=0;L<this._length;L++)if($.call(y,X(w,L),L,this))return!0;return!1}),v(W.prototype,"subarray",function($,y){var w,L,_;if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(L=this._buffer,_=this._length,arguments.length===0)$=0,y=_;else{if(!d($))throw new TypeError(h("invalid argument. First argument must be an integer. Value: `%s`.",$));if($<0&&($+=_,$<0&&($=0)),arguments.length===1)y=_;else{if(!d(y))throw new TypeError(h("invalid argument. Second argument must be an integer. Value: `%s`.",y));y<0?(y+=_,y<0&&(y=0)):y>_&&(y=_)}}return $>=_?(_=0,w=L.byteLength):$>=y?(_=0,w=L.byteOffset+$*S):(_=y-$,w=L.byteOffset+$*S),new this.constructor(L.buffer,w,_<0?0:_)}),v(W.prototype,"toReversed",function(){var $,y,w,L,_,B;if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(w=this._length,y=new this.constructor(w),L=this._buffer,$=y._buffer,_=0;_<w;_++)B=w-_-1,$[2*_]=L[2*B],$[2*_+1]=L[2*B+1];return y}),v(W.prototype,"toString",function(){var $,y,w;if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for($=[],y=this._buffer,w=0;w<this._length;w++)$.push(X(y,w).toString());return $.join(",")}),v(W.prototype,"with",function($,y){var w,L,_;if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!d($))throw new TypeError(h("invalid argument. First argument must be an integer. Value: `%s`.",$));if(_=this._length,$<0&&($+=_),$<0||$>=_)throw new RangeError(h("invalid argument. Index argument is out-of-bounds. Value: `%s`.",$));if(!l(y))throw new TypeError(h("invalid argument. Second argument must be a complex number. Value: `%s`.",y));return L=new this.constructor(this._buffer),w=L._buffer,w[2*$]=R(y),w[2*$+1]=A(y),L}),wo=W,wo}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _o,eb;function wm(){if(eb)return _o;eb=1;var r=SN();return _o=r,_o}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ro,tb;function TN(){if(tb)return Ro;tb=1;function r(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i",e}return Ro=r,Ro}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Eo,nb;function AN(){if(nb)return Eo;nb=1;function r(){var e={};return e.type="Complex128",e.re=this.re,e.im=this.im,e}return Eo=r,Eo}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Lo,ab;function MN(){if(ab)return Lo;ab=1;var r=mr().isPrimitive,e=ae(),t=D(),n=Y(),a=TN(),i=AN();function o(s,l){if(!(this instanceof o))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!r(s))throw new TypeError(n("invalid argument. Real component must be a number. Value: `%s`.",s));if(!r(l))throw new TypeError(n("invalid argument. Imaginary component must be a number. Value: `%s`.",l));return e(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:s}),e(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:l}),this}return t(o,"BYTES_PER_ELEMENT",8),t(o.prototype,"BYTES_PER_ELEMENT",8),t(o.prototype,"byteLength",16),t(o.prototype,"toString",a),t(o.prototype,"toJSON",i),Lo=o,Lo}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Oo,ib;function PN(){if(ib)return Oo;ib=1;var r=MN();return Oo=r,Oo}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var No,ub;function IN(){if(ub)return No;ub=1;function r(e){return e.re}return No=r,No}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var So,ob;function st(){if(ob)return So;ob=1;var r=IN();return So=r,So}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var To,sb;function FN(){if(sb)return To;sb=1;function r(e){return e.im}return To=r,To}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ao,fb;function ft(){if(fb)return Ao;fb=1;var r=FN();return Ao=r,Ao}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Mo,vb;function jN(){if(vb)return Mo;vb=1;var r=we(),e=oe(),t=Y(),n=st(),a=ft();function i(o){var s,l,g;for(s=[];l=o.next(),!l.done;)if(g=l.value,r(g)&&g.length>=2)s.push(g[0],g[1]);else if(e(g))s.push(n(g),a(g));else return new TypeError(t("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",g));return s}return Mo=i,Mo}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Po,lb;function VN(){if(lb)return Po;lb=1;var r=we(),e=oe(),t=Y(),n=st(),a=ft();function i(o,s,l){var g,d,p,b;for(g=[],b=-1;d=o.next(),!d.done;)if(b+=1,p=s.call(l,d.value,b),r(p)&&p.length>=2)g.push(p[0],p[1]);else if(e(p))g.push(n(p),a(p));else return new TypeError(t("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",p));return g}return Po=i,Po}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Io,cb;function GN(){if(cb)return Io;cb=1;var r=oe(),e=st(),t=ft();function n(a,i){var o,s,l,g;for(o=i.length,g=0,l=0;l<o;l++){if(s=i[l],!r(s))return null;a[g]=e(s),a[g+1]=t(s),g+=2}return a}return Io=n,Io}var Fo,gb;function CN(){if(gb)return Fo;gb=1;var r=dm().isPrimitive,e=we(),t=le(),n=NE(),a=sm(),i=ve(),o=_e(),s=ur(),l=oe(),g=ym(),d=Hr(),p=ME(),b=PE(),m=bm(),q=IE(),v=D(),f=er(),u=jr(),c=PN(),h=st(),R=ft(),A=wr(),G=$m(),M=qm(),C=lm(),N=cm(),E=Y(),P=jN(),O=VN(),F=GN(),S=u.BYTES_PER_ELEMENT*2,I=m();function T(j){return j instanceof W||typeof j=="object"&&j!==null&&(j.constructor.name==="Complex64Array"||j.constructor.name==="Complex128Array")&&typeof j._length=="number"&&typeof j._buffer=="object"}function z(j){return j===W||j.name==="Complex64Array"}function X(j,$){return $*=2,new c(j[$],j[$+1])}function W(){var j,$,y,w;if($=arguments.length,!(this instanceof W))return $===0?new W:$===1?new W(arguments[0]):$===2?new W(arguments[0],arguments[1]):new W(arguments[0],arguments[1],arguments[2]);if($===0)y=new u(0);else if($===1)if(r(arguments[0]))y=new u(arguments[0]*2);else if(t(arguments[0]))if(y=arguments[0],w=y.length,w&&i(y)&&l(y[0])){if(y=F(new u(w*2),y),y===null){if(!g(w))throw new RangeError(E("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",w));y=new u(arguments[0])}}else{if(p(y))y=G(y,0);else if(b(y))y=M(y,0);else if(!g(w))throw new RangeError(E("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",w));y=new u(y)}else if(n(arguments[0])){if(y=arguments[0],!d(y.byteLength/S))throw new RangeError(E("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",S,y.byteLength));y=new u(y)}else if(a(arguments[0])){if(y=arguments[0],I===!1)throw new TypeError(E("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",y));if(!s(y[q]))throw new TypeError(E("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",y));if(y=y[q](),!s(y.next))throw new TypeError(E("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",y));if(y=P(y),y instanceof Error)throw y;y=new u(y)}else throw new TypeError(E("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));else{if(y=arguments[0],!n(y))throw new TypeError(E("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",y));if(j=arguments[1],!r(j))throw new TypeError(E("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",j));if(!d(j/S))throw new RangeError(E("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",S,j));if($===2){if(w=y.byteLength-j,!d(w/S))throw new RangeError(E("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",S,w));y=new u(y,j)}else{if(w=arguments[2],!r(w))throw new TypeError(E("invalid argument. Length must be a nonnegative integer. Value: `%s`.",w));if(w*S>y.byteLength-j)throw new RangeError(E("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",w*S));y=new u(y,j,w*2)}}return v(this,"_buffer",y),v(this,"_length",y.length/2),this}return v(W,"BYTES_PER_ELEMENT",S),v(W,"name","Complex128Array"),v(W,"from",function($){var y,w,L,_,B,k,Z,H,K,U,V,J;if(!s(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!z(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(w=arguments.length,w>1){if(L=arguments[1],!s(L))throw new TypeError(E("invalid argument. Second argument must be a function. Value: `%s`.",L));w>2&&(y=arguments[2])}if(T($)){if(H=$.length,L){for(_=new this(H),B=_._buffer,J=0,V=0;V<H;V++){if(U=L.call(y,$.get(V),V),l(U))B[J]=h(U),B[J+1]=R(U);else if(e(U)&&U.length>=2)B[J]=U[0],B[J+1]=U[1];else throw new TypeError(E("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",U));J+=2}return _}return new this($)}if(t($)){if(L){for(H=$.length,$.get&&$.set?Z=N("default"):Z=C("default"),V=0;V<H;V++)if(!l(Z($,V))){K=!0;break}if(K){if(!g(H))throw new RangeError(E("invalid argument. First argument must have a length which is a multiple of two. Length: `%u`.",H));for(_=new this(H/2),B=_._buffer,V=0;V<H;V++)B[V]=L.call(y,Z($,V),V);return _}for(_=new this(H),B=_._buffer,J=0,V=0;V<H;V++){if(U=L.call(y,Z($,V),V),l(U))B[J]=h(U),B[J+1]=R(U);else if(e(U)&&U.length>=2)B[J]=U[0],B[J+1]=U[1];else throw new TypeError(E("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",U));J+=2}return _}return new this($)}if(a($)&&I&&s($[q])){if(B=$[q](),!s(B.next))throw new TypeError(E("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",$));if(L?k=O(B,L,y):k=P(B),k instanceof Error)throw k;for(H=k.length/2,_=new this(H),B=_._buffer,V=0;V<H;V++)B[V]=k[V];return _}throw new TypeError(E("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",$))}),v(W,"of",function(){var $,y;if(!s(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!z(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for($=[],y=0;y<arguments.length;y++)$.push(arguments[y]);return new this($)}),v(W.prototype,"at",function($){if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!d($))throw new TypeError(E("invalid argument. Must provide an integer. Value: `%s`.",$));if($<0&&($+=this._length),!($<0||$>=this._length))return X(this._buffer,$)}),f(W.prototype,"buffer",function(){return this._buffer.buffer}),f(W.prototype,"byteLength",function(){return this._buffer.byteLength}),f(W.prototype,"byteOffset",function(){return this._buffer.byteOffset}),v(W.prototype,"BYTES_PER_ELEMENT",W.BYTES_PER_ELEMENT),v(W.prototype,"copyWithin",function($,y){if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return arguments.length===2?this._buffer.copyWithin($*2,y*2):this._buffer.copyWithin($*2,y*2,arguments[2]*2),this}),v(W.prototype,"entries",function(){var $,y,w,L,_,B,k;if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return y=this,$=this._buffer,L=this._length,B=-1,k=-2,w={},v(w,"next",Z),v(w,"return",H),q&&v(w,q,K),w;function Z(){var U;return B+=1,_||B>=L?{done:!0}:(k+=2,U=new c($[k],$[k+1]),{value:[B,U],done:!1})}function H(U){return _=!0,arguments.length?{value:U,done:!0}:{done:!0}}function K(){return y.entries()}}),v(W.prototype,"every",function($,y){var w,L;if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!s($))throw new TypeError(E("invalid argument. First argument must be a function. Value: `%s`.",$));for(w=this._buffer,L=0;L<this._length;L++)if(!$.call(y,X(w,L),L,this))return!1;return!0}),v(W.prototype,"fill",function($,y,w){var L,_,B,k,Z,H;if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!l($))throw new TypeError(E("invalid argument. First argument must be a complex number. Value: `%s`.",$));if(L=this._buffer,_=this._length,arguments.length>1){if(!d(y))throw new TypeError(E("invalid argument. Second argument must be an integer. Value: `%s`.",y));if(y<0&&(y+=_,y<0&&(y=0)),arguments.length>2){if(!d(w))throw new TypeError(E("invalid argument. Third argument must be an integer. Value: `%s`.",w));w<0&&(w+=_,w<0&&(w=0)),w>_&&(w=_)}else w=_}else y=0,w=_;for(k=h($),Z=R($),H=y;H<w;H++)B=2*H,L[B]=k,L[B+1]=Z;return this}),v(W.prototype,"filter",function($,y){var w,L,_,B;if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!s($))throw new TypeError(E("invalid argument. First argument must be a function. Value: `%s`.",$));for(w=this._buffer,L=[],_=0;_<this._length;_++)B=X(w,_),$.call(y,B,_,this)&&L.push(B);return new this.constructor(L)}),v(W.prototype,"find",function($,y){var w,L,_;if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!s($))throw new TypeError(E("invalid argument. First argument must be a function. Value: `%s`.",$));for(w=this._buffer,L=0;L<this._length;L++)if(_=X(w,L),$.call(y,_,L,this))return _}),v(W.prototype,"findIndex",function($,y){var w,L,_;if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!s($))throw new TypeError(E("invalid argument. First argument must be a function. Value: `%s`.",$));for(w=this._buffer,L=0;L<this._length;L++)if(_=X(w,L),$.call(y,_,L,this))return L;return-1}),v(W.prototype,"findLast",function($,y){var w,L,_;if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!s($))throw new TypeError(E("invalid argument. First argument must be a function. Value: `%s`.",$));for(w=this._buffer,L=this._length-1;L>=0;L--)if(_=X(w,L),$.call(y,_,L,this))return _}),v(W.prototype,"findLastIndex",function($,y){var w,L,_;if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!s($))throw new TypeError(E("invalid argument. First argument must be a function. Value: `%s`.",$));for(w=this._buffer,L=this._length-1;L>=0;L--)if(_=X(w,L),$.call(y,_,L,this))return L;return-1}),v(W.prototype,"forEach",function($,y){var w,L,_;if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!s($))throw new TypeError(E("invalid argument. First argument must be a function. Value: `%s`.",$));for(w=this._buffer,L=0;L<this._length;L++)_=X(w,L),$.call(y,_,L,this)}),v(W.prototype,"get",function($){if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!r($))throw new TypeError(E("invalid argument. Must provide a nonnegative integer. Value: `%s`.",$));if(!($>=this._length))return X(this._buffer,$)}),f(W.prototype,"length",function(){return this._length}),v(W.prototype,"includes",function($,y){var w,L,_,B,k;if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!l($))throw new TypeError(E("invalid argument. First argument must be a complex number. Value: `%s`.",$));if(arguments.length>1){if(!d(y))throw new TypeError(E("invalid argument. Second argument must be an integer. Value: `%s`.",y));y<0&&(y+=this._length,y<0&&(y=0))}else y=0;for(_=h($),B=R($),w=this._buffer,k=y;k<this._length;k++)if(L=2*k,_===w[L]&&B===w[L+1])return!0;return!1}),v(W.prototype,"indexOf",function($,y){var w,L,_,B,k;if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!l($))throw new TypeError(E("invalid argument. First argument must be a complex number. Value: `%s`.",$));if(arguments.length>1){if(!d(y))throw new TypeError(E("invalid argument. Second argument must be an integer. Value: `%s`.",y));y<0&&(y+=this._length,y<0&&(y=0))}else y=0;for(_=h($),B=R($),w=this._buffer,k=y;k<this._length;k++)if(L=2*k,_===w[L]&&B===w[L+1])return k;return-1}),v(W.prototype,"join",function($){var y,w,L,_;if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(arguments.length===0)L=",";else if(o($))L=$;else throw new TypeError(E("invalid argument. First argument must be a string. Value: `%s`.",$));for(y=[],w=this._buffer,_=0;_<this._length;_++)y.push(X(w,_).toString());return y.join(L)}),v(W.prototype,"lastIndexOf",function($,y){var w,L,_,B,k;if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!l($))throw new TypeError(E("invalid argument. First argument must be a complex number. Value: `%s`.",$));if(arguments.length>1){if(!d(y))throw new TypeError(E("invalid argument. Second argument must be an integer. Value: `%s`.",y));y>=this._length?y=this._length-1:y<0&&(y+=this._length)}else y=this._length-1;for(_=h($),B=R($),w=this._buffer,k=y;k>=0;k--)if(L=2*k,_===w[L]&&B===w[L+1])return k;return-1}),v(W.prototype,"map",function($,y){var w,L,_,B,k;if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!s($))throw new TypeError(E("invalid argument. First argument must be a function. Value: `%s`.",$));for(L=this._buffer,_=new this.constructor(this._length),w=_._buffer,B=0;B<this._length;B++)if(k=$.call(y,X(L,B),B,this),l(k))w[2*B]=h(k),w[2*B+1]=R(k);else if(e(k)&&k.length===2)w[2*B]=k[0],w[2*B+1]=k[1];else throw new TypeError(E("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",k));return _}),v(W.prototype,"reduce",function($,y){var w,L,_,B,k;if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!s($))throw new TypeError(E("invalid argument. First argument must be a function. Value: `%s`.",$));if(w=this._buffer,_=this._length,arguments.length>1)L=y,k=0;else{if(_===0)throw new Error("invalid operation. If not provided an initial value, an array must contain at least one element.");L=X(w,0),k=1}for(;k<_;k++)B=X(w,k),L=$(L,B,k,this);return L}),v(W.prototype,"reverse",function(){var $,y,w,L,_,B;if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(w=this._length,$=this._buffer,L=A(w/2),_=0;_<L;_++)B=w-_-1,y=$[2*_],$[2*_]=$[2*B],$[2*B]=y,y=$[2*_+1],$[2*_+1]=$[2*B+1],$[2*B+1]=y;return this}),v(W.prototype,"set",function($){var y,w,L,_,B,k,Z,H,K;if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(L=this._buffer,arguments.length>1){if(w=arguments[1],!r(w))throw new TypeError(E("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",w))}else w=0;if(l($)){if(w>=this._length)throw new RangeError(E("invalid argument. Index argument is out-of-bounds. Value: `%u`.",w));w*=2,L[w]=h($),L[w+1]=R($);return}if(T($)){if(k=$._length,w+k>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(y=$._buffer,K=L.byteOffset+w*S,y.buffer===L.buffer&&y.byteOffset<K&&y.byteOffset+y.byteLength>K){for(_=new u(y.length),H=0;H<y.length;H++)_[H]=y[H];y=_}for(w*=2,K=0,H=0;H<k;H++)L[w]=y[K],L[w+1]=y[K+1],w+=2,K+=2;return}if(t($)){for(k=$.length,H=0;H<k;H++)if(!l($[H])){B=!0;break}if(B){if(!g(k))throw new RangeError(E("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",k));if(w+k/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(y=$,K=L.byteOffset+w*S,y.buffer===L.buffer&&y.byteOffset<K&&y.byteOffset+y.byteLength>K){for(_=new u(k),H=0;H<k;H++)_[H]=y[H];y=_}for(w*=2,k/=2,K=0,H=0;H<k;H++)L[w]=y[K],L[w+1]=y[K+1],w+=2,K+=2;return}if(w+k>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(w*=2,H=0;H<k;H++)Z=$[H],L[w]=h(Z),L[w+1]=R(Z),w+=2;return}throw new TypeError(E("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",$))}),v(W.prototype,"slice",function($,y){var w,L,_,B,k,Z,H;if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(k=this._buffer,Z=this._length,arguments.length===0)$=0,y=Z;else{if(!d($))throw new TypeError(E("invalid argument. First argument must be an integer. Value: `%s`.",$));if($<0&&($+=Z,$<0&&($=0)),arguments.length===1)y=Z;else{if(!d(y))throw new TypeError(E("invalid argument. Second argument must be an integer. Value: `%s`.",y));y<0?(y+=Z,y<0&&(y=0)):y>Z&&(y=Z)}}for($<y?w=y-$:w=0,_=new this.constructor(w),L=_._buffer,H=0;H<w;H++)B=2*(H+$),L[2*H]=k[B],L[2*H+1]=k[B+1];return _}),v(W.prototype,"some",function($,y){var w,L;if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!s($))throw new TypeError(E("invalid argument. First argument must be a function. Value: `%s`.",$));for(w=this._buffer,L=0;L<this._length;L++)if($.call(y,X(w,L),L,this))return!0;return!1}),v(W.prototype,"subarray",function($,y){var w,L,_;if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(L=this._buffer,_=this._length,arguments.length===0)$=0,y=_;else{if(!d($))throw new TypeError(E("invalid argument. First argument must be an integer. Value: `%s`.",$));if($<0&&($+=_,$<0&&($=0)),arguments.length===1)y=_;else{if(!d(y))throw new TypeError(E("invalid argument. Second argument must be an integer. Value: `%s`.",y));y<0?(y+=_,y<0&&(y=0)):y>_&&(y=_)}}return $>=_?(_=0,w=L.byteLength):$>=y?(_=0,w=L.byteOffset+$*S):(_=y-$,w=L.byteOffset+$*S),new this.constructor(L.buffer,w,_<0?0:_)}),v(W.prototype,"toReversed",function(){var $,y,w,L,_,B;if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(w=this._length,y=new this.constructor(w),L=this._buffer,$=y._buffer,_=0;_<w;_++)B=w-_-1,$[2*_]=L[2*B],$[2*_+1]=L[2*B+1];return y}),v(W.prototype,"toString",function(){var $,y,w;if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for($=[],y=this._buffer,w=0;w<this._length;w++)$.push(X(y,w).toString());return $.join(",")}),v(W.prototype,"with",function($,y){var w,L,_;if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!d($))throw new TypeError(E("invalid argument. First argument must be an integer. Value: `%s`.",$));if(_=this._length,$<0&&($+=_),$<0||$>=_)throw new RangeError(E("invalid argument. Index argument is out-of-bounds. Value: `%s`.",$));if(!l(y))throw new TypeError(E("invalid argument. Second argument must be a complex number. Value: `%s`.",y));return L=new this.constructor(this._buffer),w=L._buffer,w[2*$]=h(y),w[2*$+1]=R(y),L}),Fo=W,Fo}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var jo,mb;function _m(){if(mb)return jo;mb=1;var r=CN();return jo=r,jo}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Vo,pb;function BN(){if(pb)return Vo;pb=1;var r=jr(),e=$e(),t=Sr(),n=qe(),a=at(),i=mm(),o=it(),s=pm(),l=hm(),g=wm(),d=_m(),p=[r,e,n,t,i,a,l,o,s,g,d];return Vo=p,Vo}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Go,hb;function kN(){if(hb)return Go;hb=1;var r=["float64","float32","int32","uint32","int16","uint16","int8","uint8","uint8c","complex64","complex128"];return Go=r,Go}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Co,db;function HN(){if(db)return Co;db=1;var r=pE(),e=ve(),t=be(),n=B9(),a=BN(),i=kN(),o=i.length;function s(l){var g;if(e(l))return"generic";if(r(l))return null;for(g=0;g<o;g++)if(l instanceof a[g])return i[g];return n[t(l)]||null}return Co=s,Co}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Bo,yb;function UN(){if(yb)return Bo;yb=1;var r=HN();return Bo=r,Bo}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ko,bb;function WN(){if(bb)return ko;bb=1;var r=P9(),e=lm(),t=j9(),n=cm(),a=C9(),i=UN();function o(s){var l=i(s);return r(s)?{data:s,dtype:l,accessorProtocol:!0,accessors:[n(l),a(l)]}:{data:s,dtype:l,accessorProtocol:!1,accessors:[e(l),t(l)]}}return ko=o,ko}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ho,$b;function FE(){if($b)return Ho;$b=1;var r=WN();return Ho=r,Ho}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Uo,qb;function jE(){if(qb)return Uo;qb=1;function r(e,t,n,a,i,o,s){var l,g,d,p,b,m,q;for(l=t.data,g=i.data,p=t.accessors[0],d=i.accessors[1],b=a,m=s,q=0;q<e;q++)d(g,m,p(l,b)),b+=n,m+=o;return t}return Uo=r,Uo}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Wo,wb;function zN(){if(wb)return Wo;wb=1;var r=FE(),e=jE(),t=8;function n(a,i,o,s,l){var g,d,p,b,m,q;if(a<=0)return s;if(p=r(i),b=r(s),p.accessorProtocol||b.accessorProtocol)return o<0?g=(1-a)*o:g=0,l<0?d=(1-a)*l:d=0,e(a,p,o,g,b,l,d),b.data;if(o===1&&l===1){if(m=a%t,m>0)for(q=0;q<m;q++)s[q]=i[q];if(a<t)return s;for(q=m;q<a;q+=t)s[q]=i[q],s[q+1]=i[q+1],s[q+2]=i[q+2],s[q+3]=i[q+3],s[q+4]=i[q+4],s[q+5]=i[q+5],s[q+6]=i[q+6],s[q+7]=i[q+7];return s}for(o<0?g=(1-a)*o:g=0,l<0?d=(1-a)*l:d=0,q=0;q<a;q++)s[d]=i[g],g+=o,d+=l;return s}return Wo=n,Wo}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zo,_b;function DN(){if(_b)return zo;_b=1;var r=FE(),e=jE(),t=8;function n(a,i,o,s,l,g,d){var p,b,m,q,v,f;if(a<=0)return l;if(m=r(i),q=r(l),m.accessorProtocol||q.accessorProtocol)return e(a,m,o,s,q,g,d),q.data;if(p=s,b=d,o===1&&g===1){if(v=a%t,v>0)for(f=0;f<v;f++)l[b]=i[p],p+=o,b+=g;if(a<t)return l;for(f=v;f<a;f+=t)l[b]=i[p],l[b+1]=i[p+1],l[b+2]=i[p+2],l[b+3]=i[p+3],l[b+4]=i[p+4],l[b+5]=i[p+5],l[b+6]=i[p+6],l[b+7]=i[p+7],p+=t,b+=t;return l}for(f=0;f<a;f++)l[b]=i[p],p+=o,b+=g;return l}return zo=n,zo}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Do,Rb;function ce(){if(Rb)return Do;Rb=1;var r=D(),e=zN(),t=DN();return r(e,"ndarray",t),Do=e,Do}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Jo,Eb;function JN(){if(Eb)return Jo;Eb=1;function r(){}return Jo=r,Jo}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Xo,Lb;function XN(){if(Lb)return Xo;Lb=1;var r=JN();function e(){return r.name==="foo"}return Xo=e,Xo}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Yo,Ob;function YN(){if(Ob)return Yo;Ob=1;var r=XN();return Yo=r,Yo}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ko,Nb;function KN(){if(Nb)return Ko;Nb=1;var r=ur(),e=YN(),t=Y(),n=gE().REGEXP,a=e();function i(o){if(r(o)===!1)throw new TypeError(t("invalid argument. Must provide a function. Value: `%s`.",o));return a?o.name:n.exec(o.toString())[1]}return Ko=i,Ko}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Zo,Sb;function ZN(){if(Sb)return Zo;Sb=1;var r=KN();return Zo=r,Zo}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Qo,Tb;function QN(){if(Tb)return Qo;Tb=1;var r=hm(),e=it(),t=pm(),n=mm(),a=at(),i=qe(),o=Sr(),s=$e(),l=jr(),g=[l,s,i,o,n,a,r,e,t];return Qo=g,Qo}const xN=["Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array"];/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xo,Ab;function rS(){if(Ab)return xo;Ab=1;var r=be(),e=ZN(),t=nt(),n=EE(),a=jr(),i=QN(),o=xN,s=n()?t(a):l;s=e(s)==="TypedArray"?s:l;function l(){}function g(d){var p,b;if(typeof d!="object"||d===null)return!1;if(d instanceof s)return!0;for(b=0;b<i.length;b++)if(d instanceof i[b])return!0;for(;d;){for(p=r(d),b=0;b<o.length;b++)if(o[b]===p)return!0;d=t(d)}return!1}return xo=g,xo}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var rs,Mb;function eS(){if(Mb)return rs;Mb=1;var r=rS();return rs=r,rs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var es,Pb;function tS(){if(Pb)return es;Pb=1;var r=wm(),e=_m(),t=[e,r];return es=t,es}const nS=["Complex64Array","Complex128Array"];/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ts,Ib;function aS(){if(Ib)return ts;Ib=1;var r=be(),e=nt(),t=tS(),n=nS;function a(i){var o,s;if(typeof i!="object"||i===null)return!1;for(s=0;s<t.length;s++)if(i instanceof t[s])return!0;for(;i;){for(o=r(i),s=0;s<n.length;s++)if(n[s]===o)return!0;i=e(i)}return!1}return ts=a,ts}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ns,Fb;function iS(){if(Fb)return ns;Fb=1;var r=aS();return ns=r,ns}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var as,jb;function uS(){if(jb)return as;jb=1;var r=Y();function e(t,n){if(typeof n!="function")throw new TypeError(r("invalid argument. Second argument must be callable. Value: `%s`.",n));return t instanceof n}return as=e,as}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var is,Vb;function oS(){if(Vb)return is;Vb=1;var r=uS();return is=r,is}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var us,Gb;function sS(){if(Gb)return us;Gb=1;var r=hm(),e=it(),t=pm(),n=mm(),a=at(),i=qe(),o=Sr(),s=$e(),l=jr(),g=wm(),d=_m(),p=[[l,"Float64Array"],[s,"Float32Array"],[i,"Int32Array"],[o,"Uint32Array"],[n,"Int16Array"],[a,"Uint16Array"],[r,"Int8Array"],[e,"Uint8Array"],[t,"Uint8ClampedArray"],[g,"Complex64Array"],[d,"Complex128Array"]];return us=p,us}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var os,Cb;function fS(){if(Cb)return os;Cb=1;var r=oS(),e=be(),t=nt(),n=sS();function a(i){var o,s;for(s=0;s<n.length;s++)if(r(i,n[s][0]))return n[s][1];for(;i;){for(o=e(i),s=0;s<n.length;s++)if(o===n[s][1])return n[s][1];i=t(i)}}return os=a,os}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ss,Bb;function vS(){if(Bb)return ss;Bb=1;var r=eS(),e=iS(),t=$m(),n=qm(),a=Y(),i=fS();function o(s){var l,g,d;if(r(s))l=s;else if(e(s))s.BYTES_PER_ELEMENT===8?l=t(s,0):l=n(s,0);else throw new TypeError(a("invalid argument. Must provide a typed array. Value: `%s`.",s));for(g={type:i(s),data:[]},d=0;d<l.length;d++)g.data.push(l[d]);return g}return ss=o,ss}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fs,kb;function ir(){if(kb)return fs;kb=1;var r=vS();return fs=r,fs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vs,Hb;function VE(){if(Hb)return vs;Hb=1;var r=je(),e=wr(),t=r-1;function n(){var a=e(1+t*Math.random());return a>>>0}return vs=n,vs}var ls,Ub;function GE(){if(Ub)return ls;Ub=1;var r=D(),e=er(),t=nr(),n=rr(),a=tr(),i=le(),o=ie(),s=Pr().isPrimitive,l=Fe().isPrimitive,g=RE(),d=je(),p=Sr(),b=S9(),m=A9(),q=ce(),v=ir(),f=Y(),u=VE(),c=624,h=397,R=d>>>0,A=19650218,G=2147483648,M=2147483647,C=1812433253,N=1664525,E=1566083941,P=2636928640,O=4022730752,F=2567483615,S=[0,F>>>0],I=1/(g+1),T=67108864,z=2147483648,X=1,W=g*I,j=1,$=3,y=2,w=c+3,L=c+5,_=c+6;function B(U,V){var J;return V?J="option":J="argument",U.length<_+1?new RangeError(f("invalid %s. `state` array has insufficient length.",J)):U[0]!==j?new RangeError(f("invalid %s. `state` array has an incompatible schema version. Expected: `%s`. Actual: `%s.`",J,j,U[0])):U[1]!==$?new RangeError(f("invalid %s. `state` array has an incompatible number of sections. Expected: `%s`. Actual: `%s`.",J,$,U[1])):U[y]!==c?new RangeError(f("invalid %s. `state` array has an incompatible state length. Expected: `%u`. Actual: `%u`.",J,c,U[y])):U[w]!==1?new RangeError(f("invalid %s. `state` array has an incompatible section length. Expected: `%u`. Actual: `%u`.",J,1,U[w])):U[L]!==U.length-_?new RangeError(f("invalid %s. `state` array length is incompatible with seed section length. Expected: `%u`. Actual: `%u`.",J,U.length-_,U[L])):null}function k(U,V,J){var hr;for(U[0]=J>>>0,hr=1;hr<V;hr++)J=U[hr-1]>>>0,J=(J^J>>>30)>>>0,U[hr]=m(J,C)+hr>>>0;return U}function Z(U,V,J,hr){var x,yr,Ur,Kr;for(yr=1,Ur=0,Kr=b(V,hr);Kr>0;Kr--)x=U[yr-1]>>>0,x=(x^x>>>30)>>>0,x=m(x,N)>>>0,U[yr]=(U[yr]>>>0^x)+J[Ur]+Ur>>>0,yr+=1,Ur+=1,yr>=V&&(U[0]=U[V-1],yr=1),Ur>=hr&&(Ur=0);for(Kr=V-1;Kr>0;Kr--)x=U[yr-1]>>>0,x=(x^x>>>30)>>>0,x=m(x,E)>>>0,U[yr]=(U[yr]>>>0^x)-yr>>>0,yr+=1,yr>=V&&(U[0]=U[V-1],yr=1);return U[0]=z,U}function H(U){var V,J,hr,x;for(x=c-h,J=0;J<x;J++)V=U[J]&G|U[J+1]&M,U[J]=U[J+h]^V>>>1^S[V&X];for(hr=c-1;J<hr;J++)V=U[J]&G|U[J+1]&M,U[J]=U[J-x]^V>>>1^S[V&X];return V=U[hr]&G|U[0]&M,U[hr]=U[h-1]^V>>>1^S[V&X],U}function K(U){var V,J,hr,x,yr,Ur;if(hr={},arguments.length){if(!a(U))throw new TypeError(f("invalid argument. Options argument must be an object. Value: `%s`.",U));if(n(U,"copy")&&(hr.copy=U.copy,!s(U.copy)))throw new TypeError(f("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",U.copy));if(n(U,"state")){if(J=U.state,hr.state=!0,!o(J))throw new TypeError(f("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",J));if(Ur=B(J,!0),Ur)throw Ur;hr.copy===!1?V=J:(V=new p(J.length),q(J.length,J,1,V,1)),J=new p(V.buffer,V.byteOffset+(y+1)*V.BYTES_PER_ELEMENT,c),x=new p(V.buffer,V.byteOffset+(L+1)*V.BYTES_PER_ELEMENT,J[L])}if(x===void 0)if(n(U,"seed"))if(x=U.seed,hr.seed=!0,l(x)){if(x>R)throw new RangeError(f("invalid option. `%s` option must be a positive integer less than or equal to the maximum unsigned 32-bit integer. Option: `%u`.","seed",x));x>>>=0}else{if(i(x)===!1||x.length<1)throw new TypeError(f("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",x));if(x.length===1){if(x=x[0],!l(x))throw new TypeError(f("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",x));if(x>R)throw new RangeError(f("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%u`.","seed",x));x>>>=0}else yr=x.length,V=new p(_+yr),V[0]=j,V[1]=$,V[y]=c,V[w]=1,V[w+1]=c,V[L]=yr,q.ndarray(yr,x,1,0,V,1,L+1),J=new p(V.buffer,V.byteOffset+(y+1)*V.BYTES_PER_ELEMENT,c),x=new p(V.buffer,V.byteOffset+(L+1)*V.BYTES_PER_ELEMENT,yr),J=k(J,c,A),J=Z(J,c,x,yr)}else x=u()>>>0}else x=u()>>>0;return J===void 0&&(V=new p(_+1),V[0]=j,V[1]=$,V[y]=c,V[w]=1,V[w+1]=c,V[L]=1,V[L+1]=x,J=new p(V.buffer,V.byteOffset+(y+1)*V.BYTES_PER_ELEMENT,c),x=new p(V.buffer,V.byteOffset+(L+1)*V.BYTES_PER_ELEMENT,1),J=k(J,c,x)),r(Er,"NAME","mt19937"),e(Er,"seed",Kr),e(Er,"seedLength",Vm),t(Er,"state",Bm,km),e(Er,"stateLength",Gm),e(Er,"byteLength",Cm),r(Er,"toJSON",Hm),r(Er,"MIN",0),r(Er,"MAX",d),r(Er,"normalized",Wr),r(Wr,"NAME",Er.NAME),e(Wr,"seed",Kr),e(Wr,"seedLength",Vm),t(Wr,"state",Bm,km),e(Wr,"stateLength",Gm),e(Wr,"byteLength",Cm),r(Wr,"toJSON",Hm),r(Wr,"MIN",0),r(Wr,"MAX",W),Er;function Kr(){var sr=V[L];return q(sr,x,1,new p(sr),1)}function Vm(){return V[L]}function Gm(){return V.length}function Cm(){return V.byteLength}function Bm(){var sr=V.length;return q(sr,V,1,new p(sr),1)}function km(sr){var Cr;if(!o(sr))throw new TypeError(f("invalid argument. Must provide a Uint32Array. Value: `%s`.",sr));if(Cr=B(sr,!1),Cr)throw Cr;hr.copy===!1?hr.state&&sr.length===V.length?q(sr.length,sr,1,V,1):(V=sr,hr.state=!0):(sr.length!==V.length&&(V=new p(sr.length)),q(sr.length,sr,1,V,1)),J=new p(V.buffer,V.byteOffset+(y+1)*V.BYTES_PER_ELEMENT,c),x=new p(V.buffer,V.byteOffset+(L+1)*V.BYTES_PER_ELEMENT,V[L])}function Hm(){var sr={};return sr.type="PRNG",sr.name=Er.NAME,sr.state=v(V),sr.params=[],sr}function Er(){var sr,Cr;return Cr=V[w+1],Cr>=c&&(J=H(J),Cr=0),sr=J[Cr],V[w+1]=Cr+1,sr^=sr>>>11,sr^=sr<<7&P,sr^=sr<<15&O,sr^=sr>>>18,sr>>>0}function Wr(){var sr=Er()>>>5,Cr=Er()>>>6;return(sr*T+Cr)*I}}return ls=K,ls}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var cs,Wb;function lS(){if(Wb)return cs;Wb=1;var r=GE(),e=VE(),t=r({seed:e()});return cs=t,cs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gs,zb;function lr(){if(zb)return gs;zb=1;var r=D(),e=lS(),t=GE();return r(e,"factory",t),gs=e,gs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ms,Db;function CE(){if(Db)return ms;Db=1;var r=mr().isPrimitive,e=Q();function t(n){return r(n)&&e(n)}return ms=t,ms}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ps,Jb;function BE(){if(Jb)return ps;Jb=1;var r=mr().isObject,e=Q();function t(n){return r(n)&&e(n.valueOf())}return ps=t,ps}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var hs,Xb;function cS(){if(Xb)return hs;Xb=1;var r=CE(),e=BE();function t(n){return r(n)||e(n)}return hs=t,hs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ds,Yb;function _r(){if(Yb)return ds;Yb=1;var r=D(),e=cS(),t=CE(),n=BE();return r(e,"isPrimitive",t),r(e,"isObject",n),ds=e,ds}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ys,Kb;function gS(){if(Kb)return ys;Kb=1;var r=mr().isPrimitive,e=Y(),t=_r();function n(a,i){return!r(a)||t(a)?new TypeError(e("invalid argument. First argument must be a number and not NaN. Value: `%s`.",a)):!r(i)||t(i)?new TypeError(e("invalid argument. Second argument must be a number and not NaN. Value: `%s`.",i)):a>=i?new RangeError(e("invalid argument. Minimum support must be less than maximum support. Value: `[%f, %f]`.",a,i)):null}return ys=n,ys}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var bs,Zb;function mS(){if(Zb)return bs;Zb=1;var r=ym();function e(t){return t>0?r(t-1):r(t+1)}return bs=e,bs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $s,Qb;function kE(){if(Qb)return $s;Qb=1;var r=mS();return $s=r,$s}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var qs,xb;function pS(){if(xb)return qs;xb=1;var r=Nr(),e=Xr();function t(n){return n===r||n===e}return qs=t,qs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ws,r3;function Ve(){if(r3)return ws;r3=1;var r=pS();return ws=r,ws}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _s,e3;function hS(){if(e3)return _s;e3=1;var r=Math.sqrt;return _s=r,_s}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Rs,t3;function Rr(){if(t3)return Rs;t3=1;var r=hS();return Rs=r,Rs}/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Es,n3;function dS(){if(n3)return Es;n3=1;function r(e){return Math.abs(e)}return Es=r,Es}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ls,a3;function Yr(){if(a3)return Ls;a3=1;var r=dS();return Ls=r,Ls}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Os,i3;function yS(){if(i3)return Os;i3=1;var r=it(),e=at(),t={uint16:e,uint8:r};return Os=t,Os}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ns,u3;function bS(){if(u3)return Ns;u3=1;var r=yS(),e;function t(){var n,a;return n=new r.uint16(1),n[0]=4660,a=new r.uint8(n.buffer),a[0]===52}return e=t(),Ns=e,Ns}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ss,o3;function Re(){if(o3)return Ss;o3=1;var r=bS();return Ss=r,Ss}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ts,s3;function $S(){if(s3)return Ts;s3=1;var r=Re(),e,t,n;return r===!0?(t=1,n=0):(t=0,n=1),e={HIGH:t,LOW:n},Ts=e,Ts}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var As,f3;function HE(){if(f3)return As;f3=1;var r=Sr(),e=jr(),t=$S(),n=new e(1),a=new r(n.buffer),i=t.HIGH,o=t.LOW;function s(l,g,d,p){return n[0]=l,g[p]=a[i],g[p+d]=a[o],g}return As=s,As}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ms,v3;function qS(){if(v3)return Ms;v3=1;var r=HE();function e(t){return r(t,[0,0],1,0)}return Ms=e,Ms}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ps,l3;function Rm(){if(l3)return Ps;l3=1;var r=D(),e=qS(),t=HE();return r(e,"assign",t),Ps=e,Ps}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Is,c3;function wS(){if(c3)return Is;c3=1;var r=Re(),e;return r===!0?e=0:e=1,Is=e,Is}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Fs,g3;function _S(){if(g3)return Fs;g3=1;var r=Sr(),e=jr(),t=wS(),n=new e(1),a=new r(n.buffer);function i(o,s){return n[0]=o,a[t]=s>>>0,n[0]}return Fs=i,Fs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var js,m3;function Ge(){if(m3)return js;m3=1;var r=_S();return js=r,js}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Vs,p3;function RS(){if(p3)return Vs;p3=1;function r(e){return e|0}return Vs=r,Vs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Gs,h3;function UE(){if(h3)return Gs;h3=1;var r=RS();return Gs=r,Gs}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Cs,d3;function Ee(){if(d3)return Cs;d3=1;var r=2147483647;return Cs=r,Cs}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Bs,y3;function ES(){if(y3)return Bs;y3=1;var r=2147483648;return Bs=r,Bs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ks,b3;function LS(){if(b3)return ks;b3=1;var r=Re(),e;return r===!0?e=1:e=0,ks=e,ks}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Hs,$3;function OS(){if($3)return Hs;$3=1;var r=Sr(),e=jr(),t=LS(),n=new e(1),a=new r(n.buffer);function i(o){return n[0]=o,a[t]}return Hs=i,Hs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Us,q3;function Vr(){if(q3)return Us;q3=1;var r=OS();return Us=r,Us}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ws,w3;function NS(){if(w3)return Ws;w3=1;var r=Re(),e,t,n;return r===!0?(t=1,n=0):(t=0,n=1),e={HIGH:t,LOW:n},Ws=e,Ws}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zs,_3;function SS(){if(_3)return zs;_3=1;var r=Sr(),e=jr(),t=NS(),n=new e(1),a=new r(n.buffer),i=t.HIGH,o=t.LOW;function s(l,g){return a[i]=l,a[o]=g,n[0]}return zs=s,zs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ds,R3;function Em(){if(R3)return Ds;R3=1;var r=SS();return Ds=r,Ds}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Js,E3;function TS(){if(E3)return Js;E3=1;var r=ES(),e=Ee(),t=Rm(),n=Vr(),a=Em(),i=[0,0];function o(s,l){var g,d;return t.assign(s,i,1,0),g=i[0],g&=e,d=n(l),d&=r,g|=d,a(g,i[1])}return Js=o,Js}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Xs,L3;function Lm(){if(L3)return Xs;L3=1;var r=TS();return Xs=r,Xs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_pow.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var Ys,O3;function AS(){if(O3)return Ys;O3=1;var r=kE(),e=Lm(),t=Xr(),n=Nr();function a(i,o){return o===t?n:o===n?0:o>0?r(o)?i:0:r(o)?e(n,i):n}return Ys=a,Ys}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_pow.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var Ks,N3;function MS(){if(N3)return Ks;N3=1;var r=Ee(),e=Vr(),t=1072693247,n=1e300,a=1e-300;function i(o,s){var l,g;return g=e(o),l=g&r,l<=t?s<0?n*n:a*a:s>0?n*n:a*a}return Ks=i,Ks}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Zs,S3;function PS(){if(S3)return Zs;S3=1;var r=Yr(),e=Nr();function t(n,a){return n===-1?(n-n)/(n-n):n===1?1:r(n)<1==(a===e)?0:e}return Zs=t,Zs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Qs,T3;function IS(){if(T3)return Qs;T3=1;var r=Re(),e;return r===!0?e=1:e=0,Qs=e,Qs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xs,A3;function FS(){if(A3)return xs;A3=1;var r=Sr(),e=jr(),t=IS(),n=new e(1),a=new r(n.buffer);function i(o,s){return n[0]=o,a[t]=s>>>0,n[0]}return xs=i,xs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var rf,M3;function Om(){if(M3)return rf;M3=1;var r=FS();return rf=r,rf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ef,P3;function Ce(){if(P3)return ef;P3=1;var r=1023;return ef=r,ef}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var tf,I3;function jS(){if(I3)return tf;I3=1;function r(e){return e===0?.5999999999999946:.5999999999999946+e*(.4285714285785502+e*(.33333332981837743+e*(.272728123808534+e*(.23066074577556175+e*.20697501780033842))))}return tf=r,tf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_pow.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var nf,F3;function VS(){if(F3)return nf;F3=1;var r=Vr(),e=Ge(),t=Om(),n=Ce(),a=jS(),i=1048575,o=1048576,s=1072693248,l=536870912,g=524288,d=20,p=9007199254740992,b=.9617966939259756,m=.9617967009544373,q=-7028461650952758e-24,v=[1,1.5],f=[0,.5849624872207642],u=[0,1350039202129749e-23];function c(h,R,A){var G,M,C,N,E,P,O,F,S,I,T,z,X,W,j,$,y,w,L,_,B,k;return _=0,A<o&&(R*=p,_-=53,A=r(R)),_+=(A>>d)-n|0,B=A&i|0,A=B|s|0,B<=235662?k=0:B<767610?k=1:(k=0,_+=1,A-=o),R=t(R,A),F=v[k],w=R-F,L=1/(R+F),M=w*L,N=e(M,0),G=(A>>1|l)+g,G+=k<<18,P=t(0,G),O=R-(P-F),E=L*(w-N*P-N*O),C=M*M,y=C*C*a(C),y+=E*(N+M),C=N*N,P=3+C+y,P=e(P,0),O=y-(P-3-C),w=N*P,L=E*P+O*M,I=w+L,I=e(I,0),T=L-(I-w),z=m*I,X=q*I+T*b+u[k],S=f[k],$=_,W=z+X+S+$,W=e(W,0),j=X-(W-$-S-z),h[0]=W,h[1]=j,h}return nf=c,nf}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var af,j3;function GS(){if(j3)return af;j3=1;function r(e){return e===0?.5:.5+e*(-.3333333333333333+e*.25)}return af=r,af}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_pow.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var uf,V3;function CS(){if(V3)return uf;V3=1;var r=Ge(),e=GS(),t=1.4426950408889634,n=1.4426950216293335,a=19259629911266175e-24;function i(o,s){var l,g,d,p,b,m;return d=s-1,p=d*d*e(d),b=n*d,m=d*a-p*t,g=b+m,g=r(g,0),l=m-(g-b),o[0]=g,o[1]=l,o}return uf=i,uf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var of,G3;function BS(){if(G3)return of;G3=1;var r=1023;return of=r,of}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var sf,C3;function kS(){if(C3)return sf;C3=1;var r=-1023;return sf=r,sf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ff,B3;function HS(){if(B3)return ff;B3=1;var r=-1074;return ff=r,ff}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vf,k3;function US(){if(k3)return vf;k3=1;var r=22250738585072014e-324;return vf=r,vf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var lf,H3;function WE(){if(H3)return lf;H3=1;var r=US(),e=Ve(),t=Q(),n=Yr(),a=4503599627370496;function i(o,s,l,g){return t(o)||e(o)?(s[g]=o,s[g+l]=0,s):o!==0&&n(o)<r?(s[g]=o*a,s[g+l]=-52,s):(s[g]=o,s[g+l]=0,s)}return lf=i,lf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var cf,U3;function WS(){if(U3)return cf;U3=1;var r=WE();function e(t){return r(t,[0,0],1,0)}return cf=e,cf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gf,W3;function zS(){if(W3)return gf;W3=1;var r=D(),e=WS(),t=WE();return r(e,"assign",t),gf=e,gf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var mf,z3;function Nm(){if(z3)return mf;z3=1;var r=2146435072;return mf=r,mf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pf,D3;function DS(){if(D3)return pf;D3=1;var r=Vr(),e=Nm(),t=Ce();function n(a){var i=r(a);return i=(i&e)>>>20,i-t|0}return pf=n,pf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var hf,J3;function JS(){if(J3)return hf;J3=1;var r=DS();return hf=r,hf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var df,X3;function XS(){if(X3)return df;X3=1;var r=Nr(),e=Xr(),t=Ce(),n=BS(),a=kS(),i=HS(),o=Q(),s=Ve(),l=Lm(),g=zS().assign,d=JS(),p=Rm(),b=Em(),m=2220446049250313e-31,q=2148532223,v=[0,0],f=[0,0];function u(c,h){var R,A;return h===0||c===0||o(c)||s(c)?c:(g(c,v,1,0),c=v[0],h+=v[1],h+=d(c),h<i?l(0,c):h>n?c<0?e:r:(h<=a?(h+=52,A=m):A=1,p.assign(c,f,1,0),R=f[0],R&=q,R|=h+t<<20,A*b(R,f[1])))}return df=u,df}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var yf,Y3;function Sm(){if(Y3)return yf;Y3=1;var r=XS();return yf=r,yf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var bf,K3;function YS(){if(K3)return bf;K3=1;var r=.6931471805599453;return bf=r,bf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $f,Z3;function zE(){if(Z3)return $f;Z3=1;var r=1048575;return $f=r,$f}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var qf,Q3;function KS(){if(Q3)return qf;Q3=1;function r(e){return e===0?.16666666666666602:.16666666666666602+e*(-.0027777777777015593+e*(6613756321437934e-20+e*(-16533902205465252e-22+e*41381367970572385e-24)))}return qf=r,qf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_pow.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var wf,x3;function ZS(){if(x3)return wf;x3=1;var r=Vr(),e=Om(),t=Ge(),n=UE(),a=Sm(),i=YS(),o=Ce(),s=Ee(),l=zE(),g=KS(),d=1048576,p=1071644672,b=20,m=.6931471824645996,q=-1904654299957768e-24;function v(f,u,c){var h,R,A,G,M,C,N,E,P,O,F;return O=f&s|0,F=(O>>b)-o|0,P=0,O>p&&(P=f+(d>>F+1)>>>0,F=((P&s)>>b)-o|0,h=(P&~(l>>F))>>>0,A=e(0,h),P=(P&l|d)>>b-F>>>0,f<0&&(P=-P),u-=A),A=c+u,A=t(A,0),M=A*m,C=(c-(A-u))*i+A*q,E=M+C,N=C-(E-M),A=E*E,R=E-A*g(A),G=E*R/(R-2)-(N+E*N),E=1-(G-E),f=r(E),f=n(f),f+=P<<b>>>0,f>>b<=0?E=a(E,P):E=e(E,f),E}return wf=v,wf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_pow.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var _f,r$;function QS(){if(r$)return _f;r$=1;var r=Q(),e=kE(),t=Ve(),n=Hr(),a=Rr(),i=Yr(),o=Rm(),s=Ge(),l=UE(),g=Xr(),d=Nr(),p=Ee(),b=AS(),m=MS(),q=PS(),v=VS(),f=CS(),u=ZS(),c=1072693247,h=1105199104,R=1139802112,A=1083179008,G=1072693248,M=1083231232,C=3230714880,N=31,E=1e300,P=1e-300,O=8008566259537294e-32,F=[0,0],S=[0,0];function I(T,z){var X,W,j,$,y,w,L,_,B,k,Z,H,K,U,V,J;if(r(T)||r(z))return NaN;if(o.assign(z,F,1,0),w=F[0],L=F[1],L===0){if(z===0)return 1;if(z===1)return T;if(z===-1)return 1/T;if(z===.5)return a(T);if(z===-.5)return 1/a(T);if(z===2)return T*T;if(z===3)return T*T*T;if(z===4)return T*=T,T*T;if(t(z))return q(T,z)}if(o.assign(T,F,1,0),$=F[0],y=F[1],y===0){if($===0)return b(T,z);if(T===1)return 1;if(T===-1&&e(z))return-1;if(t(T))return T===g?I(-0,-z):z<0?0:d}if(T<0&&n(z)===!1)return(T-T)/(T-T);if(j=i(T),X=$&p|0,W=w&p|0,_=$>>>N|0,B=w>>>N|0,_&&e(z)?_=-1:_=1,W>h){if(W>R)return m(T,z);if(X<c)return B===1?_*E*E:_*P*P;if(X>G)return B===0?_*E*E:_*P*P;K=f(S,j)}else K=v(S,j,X);if(k=s(z,0),H=(z-k)*K[0]+z*K[1],Z=k*K[0],U=H+Z,o.assign(U,F,1,0),V=l(F[0]),J=l(F[1]),V>=A){if((V-A|J)!==0||H+O>U-Z)return _*E*E}else if((V&p)>=M&&((V-C|J)!==0||H<=U-Z))return _*P*P;return U=u(V,Z,H),_*U}return _f=I,_f}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Rf,e$;function Gr(){if(e$)return Rf;e$=1;var r=QS();return Rf=r,Rf}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ef,t$;function xS(){if(t$)return Ef;t$=1;function r(e){return e===0?.0416666666666666:.0416666666666666+e*(-.001388888888887411+e*2480158728947673e-20)}return Ef=r,Ef}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Lf,n$;function rT(){if(n$)return Lf;n$=1;function r(e){return e===0?-27557314351390663e-23:-27557314351390663e-23+e*(2087572321298175e-24+e*-11359647557788195e-27)}return Lf=r,Lf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright, license, and long comment were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/12.2.0/lib/msun/src/k_cos.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 1993 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var Of,a$;function eT(){if(a$)return Of;a$=1;var r=xS(),e=rT();function t(n,a){var i,o,s,l;return l=n*n,s=l*l,o=l*r(l),o+=s*s*e(l),i=.5*l,s=1-i,s+(1-s-i+(l*o-n*a))}return Of=t,Of}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Nf,i$;function DE(){if(i$)return Nf;i$=1;var r=eT();return Nf=r,Nf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright, license, and long comment were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/k_sin.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 1993 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var Sf,u$;function tT(){if(u$)return Sf;u$=1;var r=-.16666666666666632,e=.00833333333332249,t=-.0001984126982985795,n=27557313707070068e-22,a=-25050760253406863e-24,i=158969099521155e-24;function o(s,l){var g,d,p,b;return b=s*s,p=b*b,g=e+b*(t+b*n)+b*p*(a+b*i),d=b*s,l===0?s+d*(r+b*g):s-(b*(.5*l-d*g)-l-d*r)}return Sf=o,Sf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Tf,o$;function JE(){if(o$)return Tf;o$=1;var r=tT();return Tf=r,Tf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Af,s$;function nT(){if(s$)return Af;s$=1;var r=Re(),e;return r===!0?e=0:e=1,Af=e,Af}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Mf,f$;function aT(){if(f$)return Mf;f$=1;var r=Sr(),e=jr(),t=nT(),n=new e(1),a=new r(n.buffer);function i(o){return n[0]=o,a[t]}return Mf=i,Mf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Pf,v$;function iT(){if(v$)return Pf;v$=1;var r=aT();return Pf=r,Pf}/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var If,l$;function uT(){if(l$)return If;l$=1;function r(e,t){var n,a;for(n=[],a=0;a<t;a++)n.push(e);return n}return If=r,If}/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ff,c$;function oT(){if(c$)return Ff;c$=1;var r=uT();return Ff=r,Ff}/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var jf,g$;function sT(){if(g$)return jf;g$=1;var r=oT();function e(t){return r(0,t)}return jf=e,jf}/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Vf,m$;function fT(){if(m$)return Vf;m$=1;var r=sT();return Vf=r,Vf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/k_rem_pio2.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 1993 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var Gf,p$;function vT(){if(p$)return Gf;p$=1;var r=wr(),e=Sm(),t=fT(),n=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],a=[1.570796251296997,7549789415861596e-23,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],i=16777216,o=5960464477539063e-23,s=t(20),l=t(20),g=t(20),d=t(20);function p(m,q,v,f,u,c,h,R,A){var G,M,C,N,E,P,O,F,S;for(N=c,S=f[v],F=v,E=0;F>0;E++)M=o*S|0,d[E]=S-i*M|0,S=f[F-1]+M,F-=1;if(S=e(S,u),S-=8*r(S*.125),O=S|0,S-=O,C=0,u>0?(E=d[v-1]>>24-u,O+=E,d[v-1]-=E<<24-u,C=d[v-1]>>23-u):u===0?C=d[v-1]>>23:S>=.5&&(C=2),C>0){for(O+=1,G=0,E=0;E<v;E++)F=d[E],G===0?F!==0&&(G=1,d[E]=16777216-F):d[E]=16777215-F;if(u>0)switch(u){case 1:d[v-1]&=8388607;break;case 2:d[v-1]&=4194303;break}C===2&&(S=1-S,G!==0&&(S-=e(1,u)))}if(S===0){for(F=0,E=v-1;E>=c;E--)F|=d[E];if(F===0){for(P=1;d[c-P]===0;P++);for(E=v+1;E<=v+P;E++){for(A[R+E]=n[h+E],M=0,F=0;F<=R;F++)M+=m[F]*A[R+(E-F)];f[E]=M}return v+=P,p(m,q,v,f,u,c,h,R,A)}}if(S===0)for(v-=1,u-=24;d[v]===0;)v-=1,u-=24;else S=e(S,-u),S>=i?(M=o*S|0,d[v]=S-i*M|0,v+=1,u+=24,d[v]=M):d[v]=S|0;for(M=e(1,u),E=v;E>=0;E--)f[E]=M*d[E],M*=o;for(E=v;E>=0;E--){for(M=0,P=0;P<=N&&P<=v-E;P++)M+=a[P]*f[E+P];g[v-E]=M}for(M=0,E=v;E>=0;E--)M+=g[E];for(C===0?q[0]=M:q[0]=-M,M=g[0]-M,E=1;E<=v;E++)M+=g[E];return C===0?q[1]=M:q[1]=-M,O&7}function b(m,q,v,f){var u,c,h,R,A,G,M,C,N;for(c=4,R=f-1,h=(v-3)/24|0,h<0&&(h=0),G=v-24*(h+1),C=h-R,N=R+c,M=0;M<=N;M++)C<0?s[M]=0:s[M]=n[C],C+=1;for(M=0;M<=c;M++){for(u=0,C=0;C<=R;C++)u+=m[C]*s[R+(M-C)];l[M]=u}return A=c,p(m,q,A,l,G,c,h,R,s)}return Gf=b,Gf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Cf,h$;function lT(){if(h$)return Cf;h$=1;var r=Math.round;return Cf=r,Cf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Bf,d$;function cT(){if(d$)return Bf;d$=1;var r=lT();return Bf=r,Bf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/k_rem_pio2.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 1993 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var kf,y$;function gT(){if(y$)return kf;y$=1;var r=cT(),e=Vr(),t=.6366197723675814,n=1.5707963267341256,a=6077100506506192e-26,i=6077100506303966e-26,o=20222662487959506e-37,s=20222662487111665e-37,l=84784276603689e-45,g=2047;function d(p,b,m){var q,v,f,u,c,h,R;return v=r(p*t),u=p-v*n,c=v*a,R=b>>20|0,m[0]=u-c,q=e(m[0]),h=R-(q>>20&g),h>16&&(f=u,c=v*i,u=f-c,c=v*o-(f-u-c),m[0]=u-c,q=e(m[0]),h=R-(q>>20&g),h>49&&(f=u,c=v*s,u=f-c,c=v*l-(f-u-c),m[0]=u-c)),m[1]=u-m[0]-c,v}return kf=d,kf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/e_rem_pio2.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 1993 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
*
* Optimized by Bruce D. Evans.
* ```
*/var Hf,b$;function mT(){if(b$)return Hf;b$=1;var r=Ee(),e=Nm(),t=zE(),n=Vr(),a=iT(),i=Em(),o=vT(),s=gT(),l=0,g=16777216,d=1.5707963267341256,p=6077100506506192e-26,b=2*p,m=3*p,q=4*p,v=598523,f=1072243195,u=1073928572,c=1074752122,h=1074977148,R=1075183036,A=1075388923,G=1075594811,M=1094263291,C=[0,0,0],N=[0,0];function E(P,O){var F,S,I,T,z,X,W,j;if(I=n(P),T=I&r|0,T<=f)return O[0]=P,O[1]=0,0;if(T<=c)return(T&t)===v?s(P,T,O):T<=u?P>0?(j=P-d,O[0]=j-p,O[1]=j-O[0]-p,1):(j=P+d,O[0]=j+p,O[1]=j-O[0]+p,-1):P>0?(j=P-2*d,O[0]=j-b,O[1]=j-O[0]-b,2):(j=P+2*d,O[0]=j+b,O[1]=j-O[0]+b,-2);if(T<=G)return T<=R?T===h?s(P,T,O):P>0?(j=P-3*d,O[0]=j-m,O[1]=j-O[0]-m,3):(j=P+3*d,O[0]=j+m,O[1]=j-O[0]+m,-3):T===A?s(P,T,O):P>0?(j=P-4*d,O[0]=j-q,O[1]=j-O[0]-q,4):(j=P+4*d,O[0]=j+q,O[1]=j-O[0]+q,-4);if(T<M)return s(P,T,O);if(T>=e)return O[0]=NaN,O[1]=NaN,0;for(F=a(P),S=(T>>20)-1046,j=i(T-(S<<20|0),F),X=0;X<2;X++)C[X]=j|0,j=(j-C[X])*g;for(C[2]=j,z=3;C[z-1]===l;)z-=1;return W=o(C,N,S,z,1),P<0?(O[0]=-N[0],O[1]=-N[1],-W):(O[0]=N[0],O[1]=N[1],W)}return Hf=E,Hf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Uf,$$;function Tm(){if($$)return Uf;$$=1;var r=mT();return Uf=r,Uf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright, license, and long comment were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_sin.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 1993 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var Wf,q$;function pT(){if(q$)return Wf;q$=1;var r=Ee(),e=Nm(),t=Vr(),n=DE(),a=JE(),i=Tm(),o=1072243195,s=1045430272,l=[0,0];function g(d){var p,b;if(p=t(d),p&=r,p<=o)return p<s?d:a(d,0);if(p>=e)return NaN;switch(b=i(d,l),b&3){case 0:return a(l[0],l[1]);case 1:return n(l[0],l[1]);case 2:return-a(l[0],l[1]);default:return-n(l[0],l[1])}}return Wf=g,Wf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zf,w$;function vt(){if(w$)return zf;w$=1;var r=pT();return zf=r,zf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Df,_$;function hT(){if(_$)return Df;_$=1;var r=1.5707963267948966;return Df=r,Df}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Jf,R$;function dT(){if(R$)return Jf;R$=1;var r=Gr(),e=vt(),t=hT();function n(a,i,o){return i+r(e(t*a()),2)*(o-i)}return Jf=n,Jf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Xf,E$;function XE(){if(E$)return Xf;E$=1;var r=D(),e=er(),t=nr(),n=tr(),a=ur(),i=rr(),o=ar(),s=or(),l=lr().factory,g=Q(),d=ir(),p=Y(),b=gS(),m=dT();function q(){var v,f,u,c,h,R;if(arguments.length===0)f=l();else if(arguments.length===1){if(v=arguments[0],!n(v))throw new TypeError(p("invalid argument. Options argument must be an object. Value: `%s`.",v));if(i(v,"prng")){if(!a(v.prng))throw new TypeError(p("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",v.prng));f=v.prng}else f=l(v)}else{if(h=arguments[0],R=arguments[1],c=b(h,R),c)throw c;if(arguments.length>2){if(v=arguments[2],!n(v))throw new TypeError(p("invalid argument. Options argument must be an object. Value: `%s`.",v));if(i(v,"prng")){if(!a(v.prng))throw new TypeError(p("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",v.prng));f=v.prng}else f=l(v)}else f=l()}return h===void 0?u=F:u=O,r(u,"NAME","arcsine"),v&&v.prng?(r(u,"seed",null),r(u,"seedLength",null),t(u,"state",o(null),s),r(u,"stateLength",null),r(u,"byteLength",null),r(u,"toJSON",o(null)),r(u,"PRNG",f)):(e(u,"seed",A),e(u,"seedLength",G),t(u,"state",N,E),e(u,"stateLength",M),e(u,"byteLength",C),r(u,"toJSON",P),r(u,"PRNG",f),f=f.normalized),u;function A(){return f.seed}function G(){return f.seedLength}function M(){return f.stateLength}function C(){return f.byteLength}function N(){return f.state}function E(S){f.state=S}function P(){var S={};return S.type="PRNG",S.name=u.NAME,S.state=d(f.state),h===void 0?S.params=[]:S.params=[h,R],S}function O(){return m(f,h,R)}function F(S,I){return g(S)||g(I)||S>=I?NaN:m(f,S,I)}}return Xf=q,Xf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Yf,L$;function yT(){if(L$)return Yf;L$=1;var r=XE(),e=r();return Yf=e,Yf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Kf,O$;function YE(){if(O$)return Kf;O$=1;var r=D(),e=yT(),t=XE();return r(e,"factory",t),Kf=e,Kf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Zf,N$;function KE(){if(N$)return Zf;N$=1;var r=mr().isPrimitive;function e(t){return r(t)&&t>=0&&t<=1}return Zf=e,Zf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Qf,S$;function ZE(){if(S$)return Qf;S$=1;var r=mr().isObject;function e(t){return r(t)&&t.valueOf()>=0&&t.valueOf()<=1}return Qf=e,Qf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xf,T$;function bT(){if(T$)return xf;T$=1;var r=KE(),e=ZE();function t(n){return r(n)||e(n)}return xf=t,xf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var rv,A$;function Am(){if(A$)return rv;A$=1;var r=D(),e=bT(),t=KE(),n=ZE();return r(e,"isPrimitive",t),r(e,"isObject",n),rv=e,rv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ev,M$;function QE(){if(M$)return ev;M$=1;var r=D(),e=er(),t=nr(),n=tr(),a=Am().isPrimitive,i=ur(),o=rr(),s=ar(),l=or(),g=lr().factory,d=Q(),p=ir(),b=Y();function m(){var q,v,f,u;if(arguments.length===0)v=g();else if(arguments.length===1&&n(arguments[0]))if(q=arguments[0],o(q,"prng")){if(!i(q.prng))throw new TypeError(b("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",q.prng));v=q.prng}else v=g(q);else{if(u=arguments[0],!a(u))throw new TypeError(b("invalid argument. First argument must be a probability. Value: `%s`.",u));if(arguments.length>1){if(q=arguments[1],!n(q))throw new TypeError(b("invalid argument. Options argument must be an object. Value: `%s`.",q));if(o(q,"prng")){if(!i(q.prng))throw new TypeError(b("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",q.prng));v=q.prng}else v=g(q)}else v=g()}return u===void 0?f=E:f=N,r(f,"NAME","bernoulli"),q&&q.prng?(r(f,"seed",null),r(f,"seedLength",null),t(f,"state",s(null),l),r(f,"stateLength",null),r(f,"byteLength",null),r(f,"toJSON",s(null)),r(f,"PRNG",v)):(e(f,"seed",c),e(f,"seedLength",h),t(f,"state",G,M),e(f,"stateLength",R),e(f,"byteLength",A),r(f,"toJSON",C),r(f,"PRNG",v),v=v.normalized),f;function c(){return v.seed}function h(){return v.seedLength}function R(){return v.stateLength}function A(){return v.byteLength}function G(){return v.state}function M(P){v.state=P}function C(){var P={};return P.type="PRNG",P.name=f.NAME,P.state=p(v.state),u===void 0?P.params=[]:P.params=[u],P}function N(){return v()<=u?1:0}function E(P){return d(P)||P<0||P>1?NaN:v()<=P?1:0}}return ev=m,ev}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var tv,P$;function $T(){if(P$)return tv;P$=1;var r=QE(),e=r();return tv=e,tv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var nv,I$;function xE(){if(I$)return nv;I$=1;var r=D(),e=$T(),t=QE();return r(e,"factory",t),nv=e,nv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var av,F$;function qT(){if(F$)return av;F$=1;var r=Math.ceil;return av=r,av}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var iv,j$;function wT(){if(j$)return iv;j$=1;var r=qT();return iv=r,iv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var uv,V$;function _T(){if(V$)return uv;V$=1;var r=wr(),e=wT();function t(n){return n<0?e(n):r(n)}return uv=t,uv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ov,G$;function r5(){if(G$)return ov;G$=1;var r=_T();return ov=r,ov}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var sv,C$;function RT(){if(C$)return sv;C$=1;function r(e){return e===0?.16666666666666602:.16666666666666602+e*(-.0027777777777015593+e*(6613756321437934e-20+e*(-16533902205465252e-22+e*41381367970572385e-24)))}return sv=r,sv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyrights, licenses, and long comment were part of the original implementation available as part of [Go]{@link https://github.com/golang/go/blob/cb07765045aed5104a3df31507564ac99e6ddce8/src/math/exp.go}, which in turn was based on an implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/e_exp.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (c) 2009 The Go Authors. All rights reserved.
*
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are
* met:
*
*    * Redistributions of source code must retain the above copyright
* notice, this list of conditions and the following disclaimer.
*    * Redistributions in binary form must reproduce the above
* copyright notice, this list of conditions and the following disclaimer
* in the documentation and/or other materials provided with the
* distribution.
*    * Neither the name of Google Inc. nor the names of its
* contributors may be used to endorse or promote products derived from
* this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
* "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
* LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
* A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
* OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
* SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
* LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
* DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
* THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
* OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
* ```
*
* ```text
* Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var fv,B$;function ET(){if(B$)return fv;B$=1;var r=Sm(),e=RT();function t(n,a,i){var o,s,l,g;return o=n-a,s=o*o,l=o-s*e(s),g=1-(a-o*l/(2-l)-n),r(g,i)}return fv=t,fv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyrights, licenses, and long comment were part of the original implementation available as part of [Go]{@link https://github.com/golang/go/blob/cb07765045aed5104a3df31507564ac99e6ddce8/src/math/exp.go}, which in turn was based on an implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/e_exp.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (c) 2009 The Go Authors. All rights reserved.
*
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are
* met:
*
*    * Redistributions of source code must retain the above copyright
* notice, this list of conditions and the following disclaimer.
*    * Redistributions in binary form must reproduce the above
* copyright notice, this list of conditions and the following disclaimer
* in the documentation and/or other materials provided with the
* distribution.
*    * Neither the name of Google Inc. nor the names of its
* contributors may be used to endorse or promote products derived from
* this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
* "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
* LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
* A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
* OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
* SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
* LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
* DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
* THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
* OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
* ```
*
* ```text
* Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var vv,k$;function LT(){if(k$)return vv;k$=1;var r=Q(),e=r5(),t=Xr(),n=Nr(),a=ET(),i=.6931471803691238,o=19082149292705877e-26,s=1.4426950408889634,l=709.782712893384,g=-745.1332191019411,d=1/(1<<28),p=-3725290298461914e-24;function b(m){var q,v,f;return r(m)||m===n?m:m===t?0:m>l?n:m<g?0:m>p&&m<d?1+m:(m<0?f=e(s*m-.5):f=e(s*m+.5),q=m-f*i,v=f*o,a(q,v,f))}return vv=b,vv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var lv,H$;function Le(){if(H$)return lv;H$=1;var r=LT();return lv=r,lv}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var cv,U$;function OT(){if(U$)return cv;U$=1;function r(e){return e===0?.3999999999940942:.3999999999940942+e*(.22222198432149784+e*.15313837699209373)}return cv=r,cv}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gv,W$;function NT(){if(W$)return gv;W$=1;function r(e){return e===0?.6666666666666735:.6666666666666735+e*(.2857142874366239+e*(.1818357216161805+e*.14798198605116586))}return gv=r,gv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/e_log.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 1993 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var mv,z$;function ST(){if(z$)return mv;z$=1;var r=Vr(),e=Om(),t=Q(),n=Ce(),a=Xr(),i=OT(),o=NT(),s=.6931471803691238,l=19082149292705877e-26,g=0x40000000000000,d=.3333333333333333,p=1048575,b=2146435072,m=1048576,q=1072693248;function v(f){var u,c,h,R,A,G,M,C,N,E,P,O;return f===0?a:t(f)||f<0?NaN:(c=r(f),A=0,c<m&&(A-=54,f*=g,c=r(f)),c>=b?f+f:(A+=(c>>20)-n|0,c&=p,C=c+614244&1048576|0,f=e(f,c|C^q),A+=C>>20|0,M=f-1,(p&2+c)<3?M===0?A===0?0:A*s+A*l:(G=M*M*(.5-d*M),A===0?M-G:A*s-(G-A*l-M)):(E=M/(2+M),O=E*E,C=c-398458|0,P=O*O,N=440401-c|0,R=P*i(P),h=O*o(P),C|=N,G=h+R,C>0?(u=.5*M*M,A===0?M-(u-E*(u+G)):A*s-(u-(E*(u+G)+A*l)-M)):A===0?M-E*(M-G):A*s-(E*(M-G)-A*l-M))))}return mv=v,mv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pv,D$;function dr(){if(D$)return pv;D$=1;var r=ST();return pv=r,pv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var hv,J$;function TT(){if(J$)return hv;J$=1;var r=Rr(),e=Le(),t=dr(),n=.00991256303526217;function a(i,o){var s,l,g;for(l=e(-.5*o*o),s=[],s.push(n/l),s.push(o),g=2;g<i;g++)s[g]=r(-2*t(n/s[g-1]+l)),l=e(-.5*s[g]*s[g]);return s.push(0),s}return hv=a,hv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var dv,X$;function AT(){if(X$)return dv;X$=1;function r(e){var t,n;for(t=[],n=0;n<e.length-1;n++)t.push(e[n+1]/e[n]);return t}return dv=r,dv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var yv,Y$;function MT(){if(Y$)return yv;Y$=1;var r=dr();function e(t,n,a){var i,o;do i=r(t())/n,o=r(t());while(-2*o<i*i);return a?i-n:n-i}return yv=e,yv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var bv,K$;function PT(){if(K$)return bv;K$=1;var r=Yr(),e=Le(),t=TT(),n=AT(),a=MT(),i=128,o=3.442619855899,s=t(i,o),l=n(s),g=127;function d(p,b){return m;function m(){for(var q,v,f,u,c,h,R;;){if(c=2*p()-1,h=b()&g,r(c)<l[h])return c*s[h];if(h===0)return a(p,o,c<0);if(u=c*s[h],f=u*u,R=h+1,q=e(-.5*(s[h]*s[h]-f)),v=e(-.5*(s[R]*s[R]-f)),v+p()*(q-v)<1)return u}}}return bv=d,bv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $v,Z$;function e5(){if(Z$)return $v;Z$=1;var r=D(),e=er(),t=nr(),n=ur(),a=tr(),i=Pr().isPrimitive,o=rr(),s=ie(),l=lr().factory,g=ar(),d=or(),p=wr(),b=je(),m=ir(),q=Y(),v=PT();function f(u){var c,h,R,A;if(A={copy:!0},arguments.length){if(!a(u))throw new TypeError(q("invalid argument. Must provide an object. Value: `%s`.",u));if(o(u,"copy")&&(A.copy=u.copy,!i(u.copy)))throw new TypeError(q("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",u.copy));if(o(u,"prng")){if(!n(u.prng))throw new TypeError(q("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",u.prng));c=u.prng}else if(o(u,"state")){if(A.state=u.state,!s(u.state))throw new TypeError(q("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",u.state))}else if(o(u,"seed")&&(A.seed=u.seed,u.seed===void 0))throw new TypeError(q("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",u.seed))}return A.state===void 0?c===void 0?(h=l(A),c=h.normalized):(h=l({seed:p(1+b*c()),copy:A.copy}),A.seed=null):(h=l(A),c=h.normalized),R=v(c,h),r(R,"NAME","improved-ziggurat"),A.seed===null?(r(R,"seed",null),r(R,"seedLength",null)):(e(R,"seed",G),e(R,"seedLength",M)),u&&u.prng?(t(R,"state",g(null),d),r(R,"stateLength",null),r(R,"byteLength",null),r(R,"toJSON",g(null))):(t(R,"state",E,P),e(R,"stateLength",C),e(R,"byteLength",N),r(R,"toJSON",O)),r(R,"PRNG",c),R;function G(){return h.seed}function M(){return h.seedLength}function C(){return h.stateLength}function N(){return h.byteLength}function E(){return h.state}function P(F){h.state=F}function O(){var F={};return F.type="PRNG",F.name=R.NAME,F.state=m(h.state),F.params=[],F}}return $v=f,$v}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var qv,Q$;function IT(){if(Q$)return qv;Q$=1;var r=e5(),e=r();return qv=e,qv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wv,x$;function Qr(){if(x$)return wv;x$=1;var r=D(),e=IT(),t=e5();return r(e,"factory",t),wv=e,wv}/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _v,rq;function FT(){if(rq)return _v;rq=1;var r=ur(),e=r(Object.assign);return _v=e,_v}/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Rv,eq;function jT(){if(eq)return Rv;eq=1;var r=Object.assign;return Rv=r,Rv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ev,tq;function Mm(){if(tq)return Ev;tq=1;function r(e){return Object.keys(Object(e))}return Ev=r,Ev}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Lv,nq;function VT(){if(nq)return Lv;nq=1;var r=Mm();function e(){return(r(arguments)||"").length!==2}function t(){return e(1,2)}return Lv=t,Lv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ov,aq;function GT(){if(aq)return Ov;aq=1;var r=typeof Object.keys<"u";return Ov=r,Ov}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Nv,iq;function t5(){if(iq)return Nv;iq=1;var r=qr();function e(t){return r(t)==="[object Arguments]"}return Nv=e,Nv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Sv,uq;function CT(){if(uq)return Sv;uq=1;var r=t5(),e;function t(){return r(arguments)}return e=t(),Sv=e,Sv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Tv,oq;function n5(){if(oq)return Tv;oq=1;var r=Object.prototype.propertyIsEnumerable;return Tv=r,Tv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Av,sq;function BT(){if(sq)return Av;sq=1;var r=n5(),e;function t(){return!r.call("beep","0")}return e=t(),Av=e,Av}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Mv,fq;function kT(){if(fq)return Mv;fq=1;var r=_e(),e=_r().isPrimitive,t=ue().isPrimitive,n=n5(),a=BT();function i(o,s){var l;return o==null?!1:(l=n.call(o,s),!l&&a&&r(o)?(s=+s,!e(s)&&t(s)&&s>=0&&s<o.length):l)}return Mv=i,Mv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Pv,vq;function lt(){if(vq)return Pv;vq=1;var r=kT();return Pv=r,Pv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Iv,lq;function HT(){if(lq)return Iv;lq=1;var r=rr(),e=lt(),t=ve(),n=Hr(),a=je();function i(o){return o!==null&&typeof o=="object"&&!t(o)&&typeof o.length=="number"&&n(o.length)&&o.length>=0&&o.length<=a&&r(o,"callee")&&!e(o,"callee")}return Iv=i,Iv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Fv,cq;function a5(){if(cq)return Fv;cq=1;var r=CT(),e=t5(),t=HT(),n;return r?n=e:n=t,Fv=n,Fv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var jv,gq;function UT(){if(gq)return jv;gq=1;var r=a5(),e=Mm(),t=Array.prototype.slice;function n(a){return r(a)?e(t.call(a)):e(a)}return jv=n,jv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Vv,mq;function WT(){if(mq)return Vv;mq=1;var r=lt(),e=or(),t=r(e,"prototype");return Vv=t,Vv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Gv,pq;function zT(){if(pq)return Gv;pq=1;var r=lt(),e={toString:null},t=!r(e,"toString");return Gv=t,Gv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Cv,hq;function DT(){if(hq)return Cv;hq=1;var r=_r(),e=le(),t=_e().isPrimitive,n=ue().isPrimitive,a=Y();function i(o,s,l){var g,d;if(!e(o)&&!t(o))throw new TypeError(a("invalid argument. First argument must be an array-like object. Value: `%s`.",o));if(g=o.length,g===0)return-1;if(arguments.length===3){if(!n(l))throw new TypeError(a("invalid argument. Third argument must be an integer. Value: `%s`.",l));if(l>=0){if(l>=g)return-1;d=l}else d=g+l,d<0&&(d=0)}else d=0;if(r(s)){for(;d<g;d++)if(r(o[d]))return d}else for(;d<g;d++)if(o[d]===s)return d;return-1}return Cv=i,Cv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Bv,dq;function JT(){if(dq)return Bv;dq=1;var r=DT();return Bv=r,Bv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var kv,yq;function i5(){if(yq)return kv;yq=1;function r(e){return e.constructor&&e.constructor.prototype===e}return kv=r,kv}const XT=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"];/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Hv,bq;function YT(){if(bq)return Hv;bq=1;var r=typeof window>"u"?void 0:window;return Hv=r,Hv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Uv,$q;function KT(){if($q)return Uv;$q=1;var r=rr(),e=JT(),t=hE(),n=i5(),a=XT,i=YT(),o;function s(){var l;if(t(i)==="undefined")return!1;for(l in i)try{e(a,l)===-1&&r(i,l)&&i[l]!==null&&t(i[l])==="object"&&n(i[l])}catch{return!0}return!1}return o=s(),Uv=o,Uv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Wv,qq;function ZT(){if(qq)return Wv;qq=1;var r=typeof window<"u";return Wv=r,Wv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zv,wq;function QT(){if(wq)return zv;wq=1;var r=KT(),e=i5(),t=ZT();function n(a){if(t===!1&&!r)return e(a);try{return e(a)}catch{return!1}}return zv=n,zv}const xT=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Dv,_q;function rA(){if(_q)return Dv;_q=1;var r=mE(),e=rr(),t=a5(),n=WT(),a=zT(),i=QT(),o=xT;function s(l){var g,d,p,b,m,q,v;if(b=[],t(l)){for(v=0;v<l.length;v++)b.push(v.toString());return b}if(typeof l=="string"){if(l.length>0&&!e(l,"0"))for(v=0;v<l.length;v++)b.push(v.toString())}else{if(p=typeof l=="function",p===!1&&!r(l))return b;d=n&&p}for(m in l)!(d&&m==="prototype")&&e(l,m)&&b.push(String(m));if(a)for(g=i(l),v=0;v<o.length;v++)q=o[v],!(g&&q==="constructor")&&e(l,q)&&b.push(String(q));return b}return Dv=s,Dv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Jv,Rq;function eA(){if(Rq)return Jv;Rq=1;var r=VT(),e=GT(),t=Mm(),n=UT(),a=rA(),i;return e?r()?i=n:i=t:i=a,Jv=i,Jv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Xv,Eq;function tA(){if(Eq)return Xv;Eq=1;var r=eA();return Xv=r,Xv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Yv,Lq;function nA(){if(Lq)return Yv;Lq=1;var r=typeof Object.getOwnPropertySymbols<"u";return Yv=r,Yv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Kv,Oq;function aA(){if(Oq)return Kv;Oq=1;var r=fm(),e=r.getOwnPropertySymbols;function t(n){return e(r(n))}return Kv=t,Kv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Zv,Nq;function iA(){if(Nq)return Zv;Nq=1;function r(){return[]}return Zv=r,Zv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Qv,Sq;function uA(){if(Sq)return Qv;Sq=1;var r=nA(),e=aA(),t=iA(),n;return r?n=e:n=t,Qv=n,Qv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xv,Tq;function oA(){if(Tq)return xv;Tq=1;var r=tA(),e=uA(),t=lt();function n(a){var i,o,s;for(i=r(a),o=e(a),s=0;s<o.length;s++)t(a,o[s])&&i.push(o[s]);return i}return xv=n,xv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var rl,Aq;function sA(){if(Aq)return rl;Aq=1;var r=oA();return rl=r,rl}/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var el,Mq;function fA(){if(Mq)return el;Mq=1;var r=sA(),e=fm(),t=Y();function n(a){var i,o,s,l,g,d,p;if(a==null)throw new TypeError(t("invalid argument. First argument must be a non-null object. Value: `%s`.",a));for(g=e(a),d=1;d<arguments.length;d++)if(i=arguments[d],i!=null)for(o=r(e(i)),l=o.length,p=0;p<l;p++)s=o[p],g[s]=i[s];return g}return el=n,el}/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var tl,Pq;function ct(){if(Pq)return tl;Pq=1;var r=FT(),e=jT(),t=fA(),n;return r?n=e:n=t,tl=n,tl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var nl,Iq;function u5(){if(Iq)return nl;Iq=1;var r=mr().isPrimitive;function e(t){return r(t)&&t>0}return nl=e,nl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var al,Fq;function o5(){if(Fq)return al;Fq=1;var r=mr().isObject;function e(t){return r(t)&&t.valueOf()>0}return al=e,al}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var il,jq;function vA(){if(jq)return il;jq=1;var r=u5(),e=o5();function t(n){return r(n)||e(n)}return il=t,il}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ul,Vq;function pr(){if(Vq)return ul;Vq=1;var r=D(),e=vA(),t=u5(),n=o5();return r(e,"isPrimitive",t),r(e,"isObject",n),ul=e,ul}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ol,Gq;function lA(){if(Gq)return ol;Gq=1;var r=pr().isPrimitive,e=Y();function t(n,a){return r(n)?r(a)?null:new TypeError(e("invalid argument. Second argument must be a positive number. Value: `%s`.",a)):new TypeError(e("invalid argument. First argument must be a positive number. Value: `%s`.",n))}return ol=t,ol}/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var sl,Cq;function cA(){if(Cq)return sl;Cq=1;var r=dr(),e=Rr(),t=Gr(),n=1/3;function a(i,o,s){var l,g,d,p,b,m,q,v,f,u;for(s<1?(m=s+1-n,b=1/e(9*m),v=t(i(),1/s)):(m=s-n,b=1/e(9*m),v=1),l=!0;l;){do q=o(),u=1+b*q;while(u<=0);u*=u*u,g=q*q,d=1-.331*g*g,p=.5*g+m*(1-u+r(u)),f=i(),(f<d||r(f)<p)&&(l=!1)}return m*u*v}return sl=a,sl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fl,Bq;function gA(){if(Bq)return fl;Bq=1;var r=Gr(),e=dr();function t(n,a,i){var o,s,l,g,d,p,b,m;for(l=i-1,d=r(l+l,.5),o=!0;o===!0;)g=a(),b=.5*(1+g/d),b>=0&&b<=1&&(p=n(),s=r(g,4),m=8*i-12,m=1-s/m,p<=m?o=!1:(m+=.5*r(s/(8*i-8),2),p<m&&(m=l*e(4*b*(1-b)),m+=g*g/2,m>=e(p)&&(o=!1))));return b}return fl=t,fl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vl,kq;function mA(){if(kq)return vl;kq=1;var r=Gr(),e=dr();function t(n,a,i,o){var s,l,g,d,p,b,m,q,v,f,u;for(d=i-1,p=o-1,b=d+p,m=b*e(b),g=d/b,s=.5/r(b,.5),l=!0;l===!0;)q=a(),f=g+q*s,f>=0&&f<=1&&(v=n(),u=d*e(f/d),u+=p*e((1-f)/p),u+=m+.5*q*q,u>=e(v)&&(l=!1));return f}return vl=t,vl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ll,Hq;function pA(){if(Hq)return ll;Hq=1;var r=Le(),e=Gr(),t=dr();function n(a,i,o){for(var s,l,g,d,p,b,m;;)if(d=a(),p=a(),b=e(d,1/i),m=e(p,1/o),g=b+m,g<=1)return g>0?b/g:(s=t(d)/i,l=t(p)/o,s>l?(l-=s,s=0):(s-=l,l=0),r(s-t(r(s)+r(l))))}return ll=n,ll}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var cl,Uq;function hA(){if(Uq)return cl;Uq=1;var r=cA(),e=gA(),t=mA(),n=pA();function a(i,o,s,l){var g,d;return s===l&&s>1.5?e(i,o,s):s>1&&l>1?t(i,o,s,l):s<1&&l<1?n(i,s,l):(g=r(i,o,s),d=r(i,o,l),g/(g+d))}return cl=a,cl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gl,Wq;function s5(){if(Wq)return gl;Wq=1;var r=D(),e=er(),t=nr(),n=tr(),a=Pr().isPrimitive,i=ur(),o=rr(),s=ar(),l=or(),g=Qr().factory,d=lr().factory,p=Q(),b=ce(),m=Sr(),q=ie(),v=ct(),f=ir(),u=Y(),c=lA(),h=hA();function R(){var A,G,M,C,N,E,P,O,F;if(O=!0,arguments.length===0)N={copy:!1},E=d(N);else if(arguments.length===1){if(N=arguments[0],!n(N))throw new TypeError(u("invalid argument. Options argument must be an object. Value: `%s`.",N));if(o(N,"copy")&&!a(N.copy))throw new TypeError(u("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",N.copy));if(o(N,"prng")){if(!i(N.prng))throw new TypeError(u("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",N.prng));E=N.prng}else{if(o(N,"state")&&!q(N.state))throw new TypeError(u("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",N.state));N=v({},N),N.copy===!1?O=!1:N.state&&(N.state=b(N.state.length,N.state,1,new m(N.state.length),1)),N.copy=!1,E=d(N)}}else{if(M=arguments[0],C=arguments[1],F=c(M,C),F)throw F;if(arguments.length>2){if(N=arguments[2],!n(N))throw new TypeError(u("invalid argument. Options argument must be an object. Value: `%s`.",N));if(o(N,"copy")&&!a(N.copy))throw new TypeError(u("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",N.copy));if(o(N,"prng")){if(!i(N.prng))throw new TypeError(u("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",N.prng));E=N.prng}else{if(o(N,"state")&&!q(N.state))throw new TypeError(u("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",N.state));N=v({},N),N.copy===!1?O=!1:N.state&&(N.state=b(N.state.length,N.state,1,new m(N.state.length),1)),N.copy=!1,E=d(N)}}else N={copy:!1},E=d(N)}return N&&N.prng?G=g({prng:N.prng}):(N.state?A=N.state:(A=E.state,E.state=A),G=g({state:A,copy:!1})),M===void 0?P=y:P=$,r(P,"NAME","beta"),N&&N.prng?(r(P,"seed",null),r(P,"seedLength",null),t(P,"state",s(null),l),r(P,"stateLength",null),r(P,"byteLength",null),r(P,"toJSON",s(null)),r(P,"PRNG",E)):(e(P,"seed",S),e(P,"seedLength",I),t(P,"state",X,W),e(P,"stateLength",T),e(P,"byteLength",z),r(P,"toJSON",j),r(P,"PRNG",E),E=E.normalized),P;function S(){return E.seed}function I(){return E.seedLength}function T(){return E.stateLength}function z(){return E.byteLength}function X(){return E.state}function W(w){if(!q(w))throw new TypeError(u("invalid argument. Must provide a Uint32Array. Value: `%s`.",w));O&&(w=b(w.length,w,1,new m(w.length),1)),E.state=w}function j(){var w={};return w.type="PRNG",w.name=P.NAME,w.state=f(E.state),M===void 0?w.params=[]:w.params=[M,C],w}function $(){return h(E,G,M,C)}function y(w,L){return p(w)||p(L)||w<=0||L<=0?NaN:h(E,G,w,L)}}return gl=R,gl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ml,zq;function dA(){if(zq)return ml;zq=1;var r=s5(),e=r();return ml=e,ml}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pl,Dq;function f5(){if(Dq)return pl;Dq=1;var r=D(),e=dA(),t=s5();return r(e,"factory",t),pl=e,pl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var hl,Jq;function yA(){if(Jq)return hl;Jq=1;var r=pr().isPrimitive,e=Y();function t(n,a){return r(n)?r(a)?null:new TypeError(e("invalid argument. Second argument must be a positive number. Value: `%s`.",a)):new TypeError(e("invalid argument. First argument must be a positive number. Value: `%s`.",n))}return hl=t,hl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var dl,Xq;function bA(){if(Xq)return dl;Xq=1;var r=dr();function e(t,n,a,i,o){var s,l,g,d,p,b,m;for(s=!0;s;){do p=n(),m=1+o*p;while(m<=0);m*=m*m,l=p*p,g=1-.331*l*l,d=.5*l+i*(1-m+r(m)),b=t(),(b<g||r(b)<d)&&(s=!1)}return 1/a*i*m}return dl=e,dl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var yl,Yq;function v5(){if(Yq)return yl;Yq=1;var r=D(),e=er(),t=nr(),n=tr(),a=ie(),i=Pr().isPrimitive,o=ur(),s=rr(),l=ar(),g=or(),d=Qr().factory,p=lr().factory,b=Q(),m=Rr(),q=Gr(),v=ce(),f=Sr(),u=ir(),c=ct(),h=Y(),R=yA(),A=bA(),G=1/3;function M(){var C,N,E,P,O,F,S,I,T,z,X;if(I=!0,arguments.length===0)O={copy:!1},F=p(O);else if(arguments.length===1){if(O=arguments[0],!n(O))throw new TypeError(h("invalid argument. Options argument must be an object. Value: `%s`.",O));if(s(O,"copy")&&!i(O.copy))throw new TypeError(h("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",O.copy));if(s(O,"prng")){if(!o(O.prng))throw new TypeError(h("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",O.prng));F=O.prng}else{if(s(O,"state")&&!a(O.state))throw new TypeError(h("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",O.state));O=c({},O),O.copy===!1?I=!1:O.state&&(O.state=v(O.state.length,O.state,1,new f(O.state.length),1)),O.copy=!1,F=p(O)}}else{if(N=arguments[0],P=arguments[1],T=R(N,P),T)throw T;if(arguments.length>2){if(O=arguments[2],!n(O))throw new TypeError(h("invalid argument. Options argument must be an object. Value: `%s`.",O));if(s(O,"copy")&&!i(O.copy))throw new TypeError(h("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",O.copy));if(s(O,"prng")){if(!o(O.prng))throw new TypeError(h("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",O.prng));F=O.prng}else{if(s(O,"state")&&!a(O.state))throw new TypeError(h("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",O.state));O=c({},O),O.copy===!1?I=!1:O.state&&(O.state=v(O.state.length,O.state,1,new f(O.state.length),1)),O.copy=!1,F=p(O)}}else O={copy:!1},F=p(O)}return O&&O.prng?E=d({prng:O.prng}):(O.state?C=O.state:(C=F.state,F.state=C),E=d({state:C,copy:!1})),N===void 0?S=Z:(N>=1?(S=B,X=N-G):(S=k,X=N+1-G),z=1/m(9*X)),r(S,"NAME","gamma"),O&&O.prng?(r(S,"seed",null),r(S,"seedLength",null),t(S,"state",l(null),g),r(S,"stateLength",null),r(S,"byteLength",null),r(S,"toJSON",l(null)),r(S,"PRNG",F)):(e(S,"seed",W),e(S,"seedLength",j),t(S,"state",w,L),e(S,"stateLength",$),e(S,"byteLength",y),r(S,"toJSON",_),r(S,"PRNG",F),F=F.normalized),S;function W(){return F.seed}function j(){return F.seedLength}function $(){return F.stateLength}function y(){return F.byteLength}function w(){return F.state}function L(H){if(!a(H))throw new TypeError(h("invalid argument. Must provide a Uint32Array. Value: `%s`.",H));I&&(H=v(H.length,H,1,new f(H.length),1)),F.state=H}function _(){var H={};return H.type="PRNG",H.name=S.NAME,H.state=u(F.state),N===void 0?H.params=[]:H.params=[N,P],H}function B(){return A(F,E,P,X,z)}function k(){return A(F,E,P,X,z)*q(F(),1/N)}function Z(H,K){var U,V;return b(H)||b(K)||H<=0||K<=0?NaN:H<1?(V=H+1-G,U=1/m(9*V),A(F,E,K,V,U)*q(F(),1/H)):(V=H-G,U=1/m(9*V),A(F,E,K,V,U))}}return yl=M,yl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var bl,Kq;function $A(){if(Kq)return bl;Kq=1;var r=v5(),e=r();return bl=e,bl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $l,Zq;function Oe(){if(Zq)return $l;Zq=1;var r=D(),e=$A(),t=v5();return r(e,"factory",t),$l=e,$l}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ql,Qq;function qA(){if(Qq)return ql;Qq=1;var r=pr().isPrimitive,e=Y();function t(n,a){return r(n)?r(a)?null:new TypeError(e("invalid argument. Second argument must be a positive number. Value: `%s`.",a)):new TypeError(e("invalid argument. First argument must be a positive number. Value: `%s`.",n))}return ql=t,ql}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wl,xq;function wA(){if(xq)return wl;xq=1;function r(e,t,n){return e(t,1)/e(n,1)}return wl=r,wl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _l,rw;function l5(){if(rw)return _l;rw=1;var r=D(),e=er(),t=nr(),n=tr(),a=ar(),i=or(),o=Oe().factory,s=Q(),l=ir(),g=Y(),d=qA(),p=wA();function b(){var m,q,v,f,u,c,h;if(arguments.length===0)m=o();else if(arguments.length===1){if(f=arguments[0],!n(f))throw new TypeError(g("invalid argument. Options argument must be an object. Value: `%s`.",f));m=o(f)}else{if(q=arguments[0],v=arguments[1],h=d(q,v),h)throw h;if(arguments.length>2){if(f=arguments[2],!n(f))throw new TypeError(g("invalid argument. Options argument must be an object. Value: `%s`.",f));m=o(f)}else m=o()}return q===void 0?c=O:c=P,u=m.PRNG,r(c,"NAME","betaprime"),f&&f.prng?(r(c,"seed",null),r(c,"seedLength",null),t(c,"state",a(null),i),r(c,"stateLength",null),r(c,"byteLength",null),r(c,"toJSON",a(null))):(e(c,"seed",R),e(c,"seedLength",A),t(c,"state",C,N),e(c,"stateLength",G),e(c,"byteLength",M),r(c,"toJSON",E)),r(c,"PRNG",u),c;function R(){return u.seed}function A(){return u.seedLength}function G(){return u.stateLength}function M(){return u.byteLength}function C(){return u.state}function N(F){u.state=F}function E(){var F={};return F.type="PRNG",F.name=c.NAME,F.state=l(u.state),q===void 0?F.params=[]:F.params=[q,v],F}function P(){return p(m,q,v)}function O(F,S){return s(F)||s(S)||F<=0||S<=0?NaN:p(m,F,S)}}return _l=b,_l}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Rl,ew;function _A(){if(ew)return Rl;ew=1;var r=l5(),e=r();return Rl=e,Rl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var El,tw;function c5(){if(tw)return El;tw=1;var r=D(),e=_A(),t=l5();return r(e,"factory",t),El=e,El}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ll,nw;function RA(){if(nw)return Ll;nw=1;var r=wr();function e(t){return r(t)===t&&t>0}return Ll=e,Ll}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ol,aw;function g5(){if(aw)return Ol;aw=1;var r=RA();return Ol=r,Ol}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Nl,iw;function EA(){if(iw)return Nl;iw=1;function r(e){return e>=0&&e<=1}return Nl=r,Nl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Sl,uw;function LA(){if(uw)return Sl;uw=1;var r=EA();return Sl=r,Sl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Tl,ow;function OA(){if(ow)return Tl;ow=1;var r=Fe().isPrimitive,e=Am().isPrimitive,t=Y();function n(a,i){return r(a)?e(i)?null:new TypeError(t("invalid argument. Second argument must be a probability. Value: `%s`.",i)):new TypeError(t("invalid argument. First argument must be a positive integer. Value: `%s`.",i))}return Tl=n,Tl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Al,sw;function NA(){if(sw)return Al;sw=1;function r(e,t,n){var a=0,i;for(i=0;i<t;i++)e()<=n&&(a+=1);return a}return Al=r,Al}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ml,fw;function SA(){if(fw)return Ml;fw=1;var r=Q();function e(t){return t===0||r(t)?t:t<0?-1:1}return Ml=e,Ml}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Pl,vw;function Pm(){if(vw)return Pl;vw=1;var r=SA();return Pl=r,Pl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Il,lw;function TA(){if(lw)return Il;lw=1;var r=Gr(),e=1/12,t=1/360,n=1/1260;function a(i){var o;switch(i){case 0:return .08106146679532726;case 1:return .04134069595540929;case 2:return .02767792568499834;case 3:return .02079067210376509;case 4:return .01664469118982119;case 5:return .01387612882307075;case 6:return .01189670994589177;case 7:return .01041126526197209;case 8:return .009255462182712733;case 9:return .00833056343336287;default:return i+=1,o=r(i,2),(e-(t-n/o)/o)/i}}return Il=a,Il}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Fl,cw;function AA(){if(cw)return Fl;cw=1;var r=wr(),e=Pm(),t=Rr(),n=Yr(),a=dr(),i=TA(),o=1/6;function s(l,g,d){var p,b,m,q,v,f,u,c,h,R,A,G,M,C,N,E,P,O,F,S,I,T,z,X,W,j;for(S=r((g+1)*d),u=g-S+1,I=1-d,T=d/I,c=(g+1)*T,q=g*d*I,m=t(q),C=1.15+2.53*m,M=-.0873+.0248*C+.01*d,N=g*d+.5,p=(2.83+5.1/C)*m,G=.92-4.2/C,b=.86*G,P=(S+.5)*a((S+1)/(T*u)),P+=i(S)+i(g-S);;){if(W=l(),W<=b)return X=W/G-.43,T=X*(2*M/(.5-n(X))+C)+N,r(T);if(W>=G?X=l()-.5:(X=W/G-.93,X=e(X)*.5-X,W=G*l()),h=.5-n(X),F=r(X*(2*M/h+C)+N),!(F<0||F>g))if(W=W*p/(M/(h*h)+C),R=n(F-S),R>15){if(W=a(W),v=R/q,f=(R/3+.625)*R,f+=o,f/=q,v*=f+.5,z=-(R*R)/(2*q),W<z-v||W<=z+v&&(A=g-F+1,j=P+(g+1)*a(u/A),j+=(F+.5)*a(A*T/(F+1)),j+=-(i(F)+i(g-F)),W<=j))return F}else{if(E=1,S<F)for(O=S;O<=F;O++)E*=c/O-T;else if(S>F)for(O=F;O<=S;O++)W*=c/O-T;if(W<=E)return F}}}return Fl=s,Fl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var jl,gw;function MA(){if(gw)return jl;gw=1;var r=NA(),e=AA();function t(n,a,i){return i>.5?a-t(n,a,1-i):a*i<10?r(n,a,i):e(n,a,i)}return jl=t,jl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Vl,mw;function m5(){if(mw)return Vl;mw=1;var r=D(),e=er(),t=nr(),n=tr(),a=ur(),i=rr(),o=ar(),s=or(),l=Q(),g=g5(),d=LA(),p=lr().factory,b=ir(),m=Y(),q=OA(),v=MA();function f(){var u,c,h,R,A,G;if(arguments.length===0)c=p();else if(arguments.length===1){if(u=arguments[0],!n(u))throw new TypeError(m("invalid argument. Options argument must be an object. Value: `%s`.",u));if(i(u,"prng")){if(!a(u.prng))throw new TypeError(m("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",u.prng));c=u.prng}else c=p(u)}else{if(A=arguments[0],G=arguments[1],R=q(A,G),R)throw R;if(arguments.length>2){if(u=arguments[2],!n(u))throw new TypeError(m("invalid argument. Options argument must be an object. Value: `%s`.",u));if(i(u,"prng")){if(!a(u.prng))throw new TypeError(m("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",u.prng));c=u.prng}else c=p(u)}else c=p()}return A===void 0?h=I:h=S,r(h,"NAME","binomial"),u&&u.prng?(r(h,"seed",null),r(h,"seedLength",null),t(h,"state",o(null),s),r(h,"stateLength",null),r(h,"byteLength",null),r(h,"toJSON",o(null)),r(h,"PRNG",c)):(e(h,"seed",M),e(h,"seedLength",C),t(h,"state",P,O),e(h,"stateLength",N),e(h,"byteLength",E),r(h,"toJSON",F),r(h,"PRNG",c),c=c.normalized),h;function M(){return c.seed}function C(){return c.seedLength}function N(){return c.stateLength}function E(){return c.byteLength}function P(){return c.state}function O(T){c.state=T}function F(){var T={};return T.type="PRNG",T.name=h.NAME,T.state=b(c.state),A===void 0?T.params=[]:T.params=[A,G],T}function S(){return v(c,A,G)}function I(T,z){return l(T)||l(z)||!g(T)||!d(z)?NaN:v(c,T,z)}}return Vl=f,Vl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Gl,pw;function PA(){if(pw)return Gl;pw=1;var r=m5(),e=r();return Gl=e,Gl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Cl,hw;function p5(){if(hw)return Cl;hw=1;var r=D(),e=PA(),t=m5();return r(e,"factory",t),Cl=e,Cl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright, license, and long comment were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_cos.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 1993 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var Bl,dw;function IA(){if(dw)return Bl;dw=1;var r=Vr(),e=DE(),t=JE(),n=Tm(),a=[0,0],i=2147483647,o=1072243195,s=1044381696,l=2146435072;function g(d){var p,b;if(p=r(d),p&=i,p<=o)return p<s?1:e(d,0);if(p>=l)return NaN;switch(b=n(d,a),b&3){case 0:return e(a[0],a[1]);case 1:return-t(a[0],a[1]);case 2:return-e(a[0],a[1]);default:return t(a[0],a[1])}}return Bl=g,Bl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var kl,yw;function gt(){if(yw)return kl;yw=1;var r=IA();return kl=r,kl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Hl,bw;function h5(){if(bw)return Hl;bw=1;var r=6.283185307179586;return Hl=r,Hl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ul,$w;function FA(){if($w)return Ul;$w=1;var r=Rr(),e=dr(),t=vt(),n=gt(),a=h5();function i(o){var s,l;return s=!0,g;function g(){var d,p,b,m;if(s){do d=o(),p=o();while(d===0);return b=r(-2*e(d)),m=a*p,l=b*n(m),s=!1,b*t(m)}return s=!0,l}}return Ul=i,Ul}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Wl,qw;function ge(){if(qw)return Wl;qw=1;var r=3.141592653589793;return Wl=r,Wl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zl,ww;function jA(){if(ww)return zl;ww=1;var r=Rr(),e=dr(),t=gt(),n=ge(),a=t(n);function i(o){var s=r(-2*e(o));return s*a}return zl=i,zl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Dl,_w;function VA(){if(_w)return Dl;_w=1;var r=Rr(),e=dr(),t=gt(),n=h5();function a(i){var o=r(-2*e(i)),s=n*i;return o*t(s)}return Dl=a,Dl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Jl,Rw;function d5(){if(Rw)return Jl;Rw=1;var r=D(),e=er(),t=nr(),n=tr(),a=ur(),i=Pr().isPrimitive,o=rr(),s=ie(),l=lr().factory,g=ar(),d=or(),p=ir(),b=Y(),m=FA(),q=jA(),v=VA();function f(u){var c,h,R,A;if(A={copy:!0},arguments.length){if(!n(u))throw new TypeError(b("invalid argument. Must provide an object. Value: `%s`.",u));if(o(u,"copy")&&(A.copy=u.copy,!i(u.copy)))throw new TypeError(b("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",u.copy));if(o(u,"prng")){if(!a(u.prng))throw new TypeError(b("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",u.prng));c=u.prng}else if(o(u,"state")){if(A.state=u.state,!s(u.state))throw new TypeError(b("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",u.state))}else if(o(u,"seed")&&(A.seed=u.seed,u.seed===void 0))throw new TypeError(b("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",u.seed))}return A.state===void 0?c===void 0?(R=l(A),c=R.normalized):A.seed=null:(R=l(A),c=R.normalized),h=m(c),r(h,"NAME","box-muller"),A.seed===null?(r(h,"seed",null),r(h,"seedLength",null)):(e(h,"seed",G),e(h,"seedLength",M)),u&&u.prng?(t(h,"state",g(null),d),r(h,"stateLength",null),r(h,"byteLength",null),r(h,"toJSON",g(null))):(t(h,"state",E,P),e(h,"stateLength",C),e(h,"byteLength",N),r(h,"toJSON",O)),r(h,"PRNG",c),o(c,"MIN")?(r(h,"MIN",q(c.MIN)),r(h,"MAX",v(c.MIN))):(r(h,"MIN",null),r(h,"MAX",null)),h;function G(){return R.seed}function M(){return R.seedLength}function C(){return R.stateLength}function N(){return R.byteLength}function E(){return R.state}function P(F){R.state=F}function O(){var F={};return F.type="PRNG",F.name=h.NAME,F.state=p(R.state),F.params=[],F}}return Jl=f,Jl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Xl,Ew;function GA(){if(Ew)return Xl;Ew=1;var r=d5(),e=r();return Xl=e,Xl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Yl,Lw;function Im(){if(Lw)return Yl;Lw=1;var r=D(),e=GA(),t=d5();return r(e,"factory",t),Yl=e,Yl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Kl,Ow;function CA(){if(Ow)return Kl;Ow=1;var r=mr().isPrimitive,e=pr().isPrimitive,t=Y(),n=_r();function a(i,o){return!r(i)||n(i)?new TypeError(t("invalid argument. First argument must be a number and not NaN. Value: `%s`.",i)):e(o)?null:new TypeError(t("invalid argument. Second argument must be a positive number. Value: `%s`.",o))}return Kl=a,Kl}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Zl,Nw;function BA(){if(Nw)return Zl;Nw=1;function r(e){return e===0?.13333333333320124:.13333333333320124+e*(.021869488294859542+e*(.0035920791075913124+e*(.0005880412408202641+e*(7817944429395571e-20+e*-18558637485527546e-21))))}return Zl=r,Zl}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ql,Sw;function kA(){if(Sw)return Ql;Sw=1;function r(e){return e===0?.05396825397622605:.05396825397622605+e*(.0088632398235993+e*(.0014562094543252903+e*(.0002464631348184699+e*(7140724913826082e-20+e*2590730518636337e-20))))}return Ql=r,Ql}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright, license, and long comment were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/12.2.0/lib/msun/src/k_tan.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var xl,Tw;function HA(){if(Tw)return xl;Tw=1;var r=Vr(),e=Ge(),t=BA(),n=kA(),a=.7853981633974483,i=3061616997868383e-32,o=.3333333333333341,s=2147483647;function l(g,d,p){var b,m,q,v,f,u,c,h,R;return b=r(g),m=b&s|0,m>=1072010280&&(g<0&&(g=-g,d=-d),R=a-g,h=i-d,g=R+h,d=0),R=g*g,h=R*R,v=t(h),c=R*n(h),f=R*g,v=d+R*(f*(v+c)+d),v+=o*f,h=g+v,m>=1072010280?(c=p,(1-(b>>30&2))*(c-2*(g-(h*h/(h+c)-v)))):p===1?h:(R=e(h,0),c=v-(R-g),q=-1/h,u=e(q,0),f=1+u*R,u+q*(f+u*c))}return xl=l,xl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var rc,Aw;function UA(){if(Aw)return rc;Aw=1;var r=HA();return rc=r,rc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright, license, and long comment were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_tan.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 1993 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var ec,Mw;function WA(){if(Mw)return ec;Mw=1;var r=Vr(),e=UA(),t=Tm(),n=[0,0],a=2147483647,i=1072243195,o=2146435072,s=1044381696;function l(g){var d,p;return d=r(g),d&=a,d<=i?d<s?g:e(g,0,1):d>=o?NaN:(p=t(g,n),e(n[0],n[1],1-((p&1)<<1)))}return ec=l,ec}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var tc,Pw;function zA(){if(Pw)return tc;Pw=1;var r=WA();return tc=r,tc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var nc,Iw;function DA(){if(Iw)return nc;Iw=1;var r=zA(),e=ge();function t(n,a,i){return a+i*r(e*(n()-.5))}return nc=t,nc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ac,Fw;function y5(){if(Fw)return ac;Fw=1;var r=D(),e=er(),t=nr(),n=tr(),a=ur(),i=rr(),o=ar(),s=or(),l=Q(),g=Qr().factory,d=ir(),p=Y(),b=CA(),m=DA();function q(){var v,f,u,c,h,R,A;if(arguments.length===0)f=g();else if(arguments.length===1){if(u=arguments[0],!n(u))throw new TypeError(p("invalid argument. Options argument must be an object. Value: `%s`.",u));if(i(u,"prng")){if(!a(u.prng))throw new TypeError(p("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",u.prng));f=g({prng:u.prng})}else f=g(u)}else{if(A=arguments[0],v=arguments[1],R=b(A,v),R)throw R;if(arguments.length>2){if(u=arguments[2],!n(u))throw new TypeError(p("invalid argument. Options argument must be an object. Value: `%s`.",u));if(i(u,"prng")){if(!a(u.prng))throw new TypeError(p("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",u.prng));f=g({prng:u.prng})}else f=g(u)}else f=g()}return A===void 0?h=S:h=F,c=f.PRNG,r(h,"NAME","cauchy"),u&&u.prng?(r(h,"seed",null),r(h,"seedLength",null),t(h,"state",o(null),s),r(h,"stateLength",null),r(h,"byteLength",null),r(h,"toJSON",o(null))):(e(h,"seed",G),e(h,"seedLength",M),t(h,"state",E,P),e(h,"stateLength",C),e(h,"byteLength",N),r(h,"toJSON",O)),r(h,"PRNG",c),h;function G(){return c.seed}function M(){return c.seedLength}function C(){return c.stateLength}function N(){return c.byteLength}function E(){return c.state}function P(I){c.state=I}function O(){var I={};return I.type="PRNG",I.name=h.NAME,I.state=d(c.state),A===void 0?I.params=[]:I.params=[A,v],I}function F(){return m(f,A,v)}function S(I,T){return l(I)||l(T)||T<=0?NaN:m(f,I,T)}}return ac=q,ac}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ic,jw;function JA(){if(jw)return ic;jw=1;var r=y5(),e=r();return ic=e,ic}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var uc,Vw;function b5(){if(Vw)return uc;Vw=1;var r=D(),e=JA(),t=y5();return r(e,"factory",t),uc=e,uc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var oc,Gw;function $5(){if(Gw)return oc;Gw=1;var r=D(),e=er(),t=nr(),n=pr().isPrimitive,a=tr(),i=ur(),o=rr(),s=ar(),l=or(),g=Q(),d=Oe().factory,p=ir(),b=Y();function m(){var q,v,f,u,c;if(arguments.length===0)q=d();else if(arguments.length===1&&a(arguments[0]))if(f=arguments[0],o(f,"prng")){if(!i(f.prng))throw new TypeError(b("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",f.prng));q=d({prng:f.prng})}else q=d(f);else{if(c=arguments[0],!n(c))throw new TypeError(b("invalid argument. First argument must be a positive number. Value: `%s`.",c));if(arguments.length>1){if(f=arguments[1],!a(f))throw new TypeError(b("invalid argument. Options argument must be an object. Value: `%s`.",f));if(o(f,"prng")){if(!i(f.prng))throw new TypeError(b("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",f.prng));q=d(c/2,.5,{prng:f.prng})}else q=d(c/2,.5,f)}else q=d(c/2,.5)}return c===void 0?u=P:u=E,v=q.PRNG,r(u,"NAME","chisquare"),f&&f.prng?(r(u,"seed",null),r(u,"seedLength",null),t(u,"state",s(null),l),r(u,"stateLength",null),r(u,"byteLength",null),r(u,"toJSON",s(null))):(e(u,"seed",h),e(u,"seedLength",R),t(u,"state",M,C),e(u,"stateLength",A),e(u,"byteLength",G),r(u,"toJSON",N)),r(u,"PRNG",v),u;function h(){return v.seed}function R(){return v.seedLength}function A(){return v.stateLength}function G(){return v.byteLength}function M(){return v.state}function C(O){v.state=O}function N(){var O={};return O.type="PRNG",O.name=u.NAME,O.state=p(v.state),c===void 0?O.params=[]:O.params=[c],O}function E(){return q()}function P(O){return g(O)||O<=0?NaN:q(O/2,.5)}}return oc=m,oc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var sc,Cw;function XA(){if(Cw)return sc;Cw=1;var r=$5(),e=r();return sc=e,sc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fc,Bw;function Be(){if(Bw)return fc;Bw=1;var r=D(),e=XA(),t=$5();return r(e,"factory",t),fc=e,fc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vc,kw;function q5(){if(kw)return vc;kw=1;var r=D(),e=er(),t=nr(),n=pr().isPrimitive,a=tr(),i=ur(),o=rr(),s=ar(),l=or(),g=Q(),d=Be().factory,p=ir(),b=Rr(),m=Y();function q(){var v,f,u,c,h;if(arguments.length===0)v=d();else if(arguments.length===1&&a(arguments[0]))if(u=arguments[0],o(u,"prng")){if(!i(u.prng))throw new TypeError(m("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",u.prng));v=d({prng:u.prng})}else v=d(u);else{if(h=arguments[0],!n(h))throw new TypeError(m("invalid argument. First argument must be a positive number. Value: `%s`.",h));if(arguments.length>1){if(u=arguments[1],!a(u))throw new TypeError(m("invalid argument. Options argument must be an object. Value: `%s`.",u));if(o(u,"prng")){if(!i(u.prng))throw new TypeError(m("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",u.prng));v=d(h,{prng:u.prng})}else v=d(h,u)}else v=d(h)}return h===void 0?c=O:c=P,f=v.PRNG,r(c,"NAME","chi"),u&&u.prng?(r(c,"seed",null),r(c,"seedLength",null),t(c,"state",s(null),l),r(c,"stateLength",null),r(c,"byteLength",null),r(c,"toJSON",s(null))):(e(c,"seed",R),e(c,"seedLength",A),t(c,"state",C,N),e(c,"stateLength",G),e(c,"byteLength",M),r(c,"toJSON",E)),r(c,"PRNG",f),c;function R(){return f.seed}function A(){return f.seedLength}function G(){return f.stateLength}function M(){return f.byteLength}function C(){return f.state}function N(F){f.state=F}function E(){var F={};return F.type="PRNG",F.name=c.NAME,F.state=p(f.state),h===void 0?F.params=[]:F.params=[h],F}function P(){return b(v())}function O(F){return g(F)||F<=0?NaN:b(v(F))}}return vc=q,vc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var lc,Hw;function YA(){if(Hw)return lc;Hw=1;var r=q5(),e=r();return lc=e,lc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var cc,Uw;function w5(){if(Uw)return cc;Uw=1;var r=D(),e=YA(),t=q5();return r(e,"factory",t),cc=e,cc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gc,Ww;function KA(){if(Ww)return gc;Ww=1;var r=mr().isPrimitive,e=pr().isPrimitive,t=Y(),n=_r();function a(i,o){return!r(i)||n(i)?new TypeError(t("invalid argument. First argument must be a number and not NaN. Value: `%s`.",i)):e(o)?null:new TypeError(t("invalid argument. Second argument must be a positive number. Value: `%s`.",o))}return gc=a,gc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var mc,zw;function ZA(){if(zw)return mc;zw=1;var r=Q(),e=Ve(),t=gt(),n=vt(),a=Yr(),i=Lm(),o=ge();function s(l){var g,d;return r(l)?NaN:e(l)?NaN:(d=l%2,g=a(d),g===0||g===1?i(0,d):g<.25?n(o*d):g<.75?(g=.5-g,i(t(o*g),d)):g<1.25?(d=i(1,d)-d,n(o*d)):g<1.75?(g-=1.5,-i(t(o*g),d)):(d-=i(2,d),n(o*d)))}return mc=s,mc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pc,Dw;function Fm(){if(Dw)return pc;Dw=1;var r=ZA();return pc=r,pc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var hc,Jw;function QA(){if(Jw)return hc;Jw=1;var r=Q(),e=Fm(),t=ge();function n(a,i,o){var s;return r(a)||r(i)||r(o)||o<0?NaN:o===0?a<i?0:1:a<i-o?0:a>i+o?1:(s=(a-i)/o,(1+s+e(s)/t)/2)}return hc=n,hc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var dc,Xw;function xA(){if(Xw)return dc;Xw=1;var r=Q();function e(t,n){return r(t)||r(n)?NaN:t<n?0:1}return dc=e,dc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var yc,Yw;function rM(){if(Yw)return yc;Yw=1;var r=ar(),e=Q();function t(n){if(e(n))return r(NaN);return a;function a(i){return e(i)?NaN:i<n?0:1}}return yc=t,yc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var bc,Kw;function eM(){if(Kw)return bc;Kw=1;var r=D(),e=xA(),t=rM();return r(e,"factory",t),bc=e,bc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $c,Zw;function tM(){if(Zw)return $c;Zw=1;var r=ar(),e=eM().factory,t=Q(),n=Fm(),a=ge();function i(o,s){if(t(o)||t(s)||s<0)return r(NaN);if(s===0)return e(o);return l;function l(g){var d;return t(g)?NaN:g<o-s?0:g>o+s?1:(d=(g-o)/s,(1+d+n(d)/a)/2)}}return $c=i,$c}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var qc,Qw;function nM(){if(Qw)return qc;Qw=1;var r=D(),e=QA(),t=tM();return r(e,"factory",t),qc=e,qc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wc,xw;function _5(){if(xw)return wc;xw=1;var r=nM(),e=1e4,t=1e-12;function n(a,i,o){var s,l,g,d,p;for(p=1,s=i-o,l=i+o;p<e;){if(d=(s+l)/2,l-s<t)return d;g=r(d,i,o),a>g?s=d:l=d,p+=1}return d}return wc=n,wc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _c,r4;function aM(){if(r4)return _c;r4=1;var r=Q(),e=_5();function t(n,a,i){return r(a)||r(i)||r(n)||i<0||n<0||n>1?NaN:i===0?a:e(n,a,i)}return _c=t,_c}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Rc,e4;function iM(){if(e4)return Rc;e4=1;var r=Q();function e(t,n){return r(t)||t<0||t>1?NaN:n}return Rc=e,Rc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ec,t4;function uM(){if(t4)return Ec;t4=1;var r=ar(),e=Q();function t(n){if(e(n))return r(NaN);return a;function a(i){return e(i)||i<0||i>1?NaN:n}}return Ec=t,Ec}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Lc,n4;function R5(){if(n4)return Lc;n4=1;var r=D(),e=iM(),t=uM();return r(e,"factory",t),Lc=e,Lc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Oc,a4;function oM(){if(a4)return Oc;a4=1;var r=ar(),e=R5().factory,t=Q(),n=_5();function a(i,o){if(t(i)||t(o)||o<0)return r(NaN);if(o===0)return e(i);return s;function s(l){return t(l)||l<0||l>1?NaN:n(l,i,o)}}return Oc=a,Oc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Nc,i4;function sM(){if(i4)return Nc;i4=1;var r=D(),e=aM(),t=oM();return r(e,"factory",t),Nc=e,Nc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Sc,u4;function fM(){if(u4)return Sc;u4=1;var r=sM();function e(t,n,a){return r(t(),n,a)}return Sc=e,Sc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Tc,o4;function E5(){if(o4)return Tc;o4=1;var r=D(),e=er(),t=nr(),n=tr(),a=ur(),i=rr(),o=ar(),s=or(),l=lr().factory,g=Q(),d=ir(),p=Y(),b=KA(),m=fM();function q(){var v,f,u,c,h,R;if(arguments.length===0)f=l();else if(arguments.length===1){if(v=arguments[0],!n(v))throw new TypeError(p("invalid argument. Options argument must be an object. Value: `%s`.",v));if(i(v,"prng")){if(!a(v.prng))throw new TypeError(p("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",v.prng));f=v.prng}else f=l(v)}else{if(h=arguments[0],R=arguments[1],c=b(h,R),c)throw c;if(arguments.length>2){if(v=arguments[2],!n(v))throw new TypeError(p("invalid argument. Options argument must be an object. Value: `%s`.",v));if(i(v,"prng")){if(!a(v.prng))throw new TypeError(p("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",v.prng));f=v.prng}else f=l(v)}else f=l()}return h===void 0?u=F:u=O,r(u,"NAME","cosine"),v&&v.prng?(r(u,"seed",null),r(u,"seedLength",null),t(u,"state",o(null),s),r(u,"stateLength",null),r(u,"byteLength",null),r(u,"toJSON",o(null)),r(u,"PRNG",f)):(e(u,"seed",A),e(u,"seedLength",G),t(u,"state",N,E),e(u,"stateLength",M),e(u,"byteLength",C),r(u,"toJSON",P),r(u,"PRNG",f),f=f.normalized),u;function A(){return f.seed}function G(){return f.seedLength}function M(){return f.stateLength}function C(){return f.byteLength}function N(){return f.state}function E(S){f.state=S}function P(){var S={};return S.type="PRNG",S.name=u.NAME,S.state=d(f.state),h===void 0?S.params=[]:S.params=[h,R],S}function O(){return m(f,h,R)}function F(S,I){return g(S)||g(I)||I<=0?NaN:m(f,S,I)}}return Tc=q,Tc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ac,s4;function vM(){if(s4)return Ac;s4=1;var r=E5(),e=r();return Ac=e,Ac}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Mc,f4;function L5(){if(f4)return Mc;f4=1;var r=D(),e=vM(),t=E5();return r(e,"factory",t),Mc=e,Mc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Pc,v4;function lM(){if(v4)return Pc;v4=1;var r=ue().isPrimitive,e=Y(),t=_r();function n(a,i){return!r(a)||t(a)?new TypeError(e("invalid argument. First argument must be an integer and not NaN. Value: `%s`.",a)):!r(i)||t(i)?new TypeError(e("invalid argument. Second argument must be an integer and not NaN. Value: `%s`.",i)):a>i?new RangeError(e("invalid argument. Minimum support must be less than or equal to maximum support. Value: `[%d, %d]`.",a,i)):null}return Pc=n,Pc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{http://www.boost.org/doc/libs/1_65_1/doc/html/boost/random/uniform_int_distribution.html}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
* (C) Copyright Steven Watanabe 2011.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var Ic,l4;function cM(){if(l4)return Ic;l4=1;var r=RE(),e=wr();function t(n,a,i){var o,s,l,g,d,p,b,m,q;if(l=i-a,l===0)return a;if(b=n.MIN,m=n.MAX,s=m-b,s===l)return n()-b+a;if(s<l)for(g=0;;){for(l===r?(g=e(l/(s+1)),l%(s+1)===s&&(g+=1)):g=e((l+1)/(s+1)),o=0,p=1;p<=g;){if(o+=(n()-b)*p,p*s===l-p+1)return o;p*=s+1}if(q=t(n,0,e(l/p)),!(q>r/p)&&(q*=p,o+=q,!(o>l)))return o+a}for(s===r?(d=e(s/(l+1)),s%(l+1)===l&&(d+=1)):d=e((s+1)/(l+1));;)if(o=n()-b,o=e(o/d),o<=l)return o+a}return Ic=t,Ic}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Fc,c4;function O5(){if(c4)return Fc;c4=1;var r=D(),e=er(),t=nr(),n=tr(),a=ur(),i=rr(),o=ar(),s=or(),l=lr().factory,g=Q(),d=Hr(),p=ir(),b=Y(),m=lM(),q=cM();function v(){var f,u,c,h,R,A;if(arguments.length===0)u=l();else if(arguments.length===1){if(f=arguments[0],!n(f))throw new TypeError(b("invalid argument. Options argument must be an object. Value: `%s`.",f));if(i(f,"prng")){if(!a(f.prng))throw new TypeError(b("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",f.prng));if(u=f.prng,!d(u.MIN))throw new TypeError(b("invalid option. `%s` option must have a `MIN` property specifying the minimum possible pseudorandom integer value.","prng"));if(!d(u.MAX))throw new TypeError(b("invalid option. `%s` option must have a `MAX` property specifying the maximum possible pseudorandom integer value.","prng"))}else u=l(f)}else{if(R=arguments[0],A=arguments[1],h=m(R,A),h)throw h;if(arguments.length>2){if(f=arguments[2],!n(f))throw new TypeError(b("invalid argument. Options argument must be an object. Value: `%s`.",f));if(i(f,"prng")){if(!a(f.prng))throw new TypeError(b("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",f.prng));if(u=f.prng,!d(u.MIN))throw new TypeError(b("invalid option. `%s` option must have a `MIN` property specifying the minimum possible pseudorandom integer value.","prng"));if(!d(u.MAX))throw new TypeError(b("invalid option. `%s` option must have a `MAX` property specifying the maximum possible pseudorandom integer value.","prng"))}else u=l(f)}else u=l()}return R===void 0?c=S:c=F,r(c,"NAME","discrete-uniform"),f&&f.prng?(r(c,"seed",null),r(c,"seedLength",null),t(c,"state",o(null),s),r(c,"stateLength",null),r(c,"byteLength",null),r(c,"toJSON",o(null)),r(c,"PRNG",u)):(e(c,"seed",G),e(c,"seedLength",M),t(c,"state",E,P),e(c,"stateLength",C),e(c,"byteLength",N),r(c,"toJSON",O),r(c,"PRNG",u)),c;function G(){return u.seed}function M(){return u.seedLength}function C(){return u.stateLength}function N(){return u.byteLength}function E(){return u.state}function P(I){u.state=I}function O(){var I={};return I.type="PRNG",I.name=c.NAME,I.state=p(u.state),R===void 0?I.params=[]:I.params=[R,A],I}function F(){return q(u,R,A)}function S(I,T){return g(I)||g(T)||!d(I)||!d(T)||I>T?NaN:q(u,I,T)}}return Fc=v,Fc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var jc,g4;function gM(){if(g4)return jc;g4=1;var r=O5(),e=r();return jc=e,jc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Vc,m4;function N5(){if(m4)return Vc;m4=1;var r=D(),e=gM(),t=O5();return r(e,"factory",t),Vc=e,Vc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Gc,p4;function mM(){if(p4)return Gc;p4=1;var r=pr().isPrimitive,e=Fe().isPrimitive,t=Y();function n(a,i){return e(a)?r(i)?null:new TypeError(t("invalid argument. Second argument must be a positive number. Value: `%s`.",i)):new TypeError(t("invalid argument. First argument must be a positive integer. Value: `%s`.",a))}return Gc=n,Gc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Cc,h4;function pM(){if(h4)return Cc;h4=1;var r=dr();function e(t,n,a){var i,o;for(i=1,o=0;o<n;o++)i*=t();return-(1/a)*r(i)}return Cc=e,Cc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Bc,d4;function S5(){if(d4)return Bc;d4=1;var r=D(),e=er(),t=nr(),n=tr(),a=ur(),i=rr(),o=ar(),s=or(),l=lr().factory,g=Q(),d=g5(),p=ir(),b=Y(),m=mM(),q=pM();function v(){var f,u,c,h,R,A;if(arguments.length===0)u=l();else if(arguments.length===1){if(c=arguments[0],!n(c))throw new TypeError(b("invalid argument. Options argument must be an object. Value: `%s`.",c));if(i(c,"prng")){if(!a(c.prng))throw new TypeError(b("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",c.prng));u=c.prng}else u=l(c)}else{if(A=arguments[0],f=arguments[1],R=m(A,f),R)throw R;if(arguments.length>2){if(c=arguments[2],!n(c))throw new TypeError(b("invalid argument. Options argument must be an object. Value: `%s`.",c));if(i(c,"prng")){if(!a(c.prng))throw new TypeError(b("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",c.prng));u=c.prng}else u=l(c)}else u=l()}return A===void 0?h=S:h=F,r(h,"NAME","erlang"),c&&c.prng?(r(h,"seed",null),r(h,"seedLength",null),t(h,"state",o(null),s),r(h,"stateLength",null),r(h,"byteLength",null),r(h,"toJSON",o(null)),r(h,"PRNG",u)):(e(h,"seed",G),e(h,"seedLength",M),t(h,"state",E,P),e(h,"stateLength",C),e(h,"byteLength",N),r(h,"toJSON",O),r(h,"PRNG",u),u=u.normalized),h;function G(){return u.seed}function M(){return u.seedLength}function C(){return u.stateLength}function N(){return u.byteLength}function E(){return u.state}function P(I){u.state=I}function O(){var I={};return I.type="PRNG",I.name=h.NAME,I.state=p(u.state),A===void 0?I.params=[]:I.params=[A,f],I}function F(){return q(u,A,f)}function S(I,T){return g(I)||g(T)||!d(I)||T<=0?NaN:q(u,I,T)}}return Bc=v,Bc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var kc,y4;function hM(){if(y4)return kc;y4=1;var r=S5(),e=r();return kc=e,kc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Hc,b4;function T5(){if(b4)return Hc;b4=1;var r=D(),e=hM(),t=S5();return r(e,"factory",t),Hc=e,Hc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Uc,$4;function dM(){if($4)return Uc;$4=1;var r=dr();function e(t,n){return-r(1-t())/n}return Uc=e,Uc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Wc,q4;function A5(){if(q4)return Wc;q4=1;var r=D(),e=er(),t=nr(),n=pr().isPrimitive,a=tr(),i=ur(),o=rr(),s=ar(),l=or(),g=lr().factory,d=Q(),p=ir(),b=Y(),m=dM();function q(){var v,f,u,c;if(arguments.length===0)u=g();else if(arguments.length===1&&a(arguments[0]))if(f=arguments[0],o(f,"prng")){if(!i(f.prng))throw new TypeError(b("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",f.prng));u=f.prng}else u=g(f);else{if(v=arguments[0],!n(v))throw new TypeError(b("invalid argument. First argument must be a positive number. Value: `%s`.",v));if(arguments.length>1){if(f=arguments[1],!a(f))throw new TypeError(b("invalid argument. Options argument must be an object. Value: `%s`.",f));if(o(f,"prng")){if(!i(f.prng))throw new TypeError(b("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",f.prng));u=f.prng}else u=g(f)}else u=g()}return v===void 0?c=P:c=E,r(c,"NAME","exponential"),f&&f.prng?(r(c,"seed",null),r(c,"seedLength",null),t(c,"state",s(null),l),r(c,"stateLength",null),r(c,"byteLength",null),r(c,"toJSON",s(null)),r(c,"PRNG",u)):(e(c,"seed",h),e(c,"seedLength",R),t(c,"state",M,C),e(c,"stateLength",A),e(c,"byteLength",G),r(c,"toJSON",N),r(c,"PRNG",u),u=u.normalized),c;function h(){return u.seed}function R(){return u.seedLength}function A(){return u.stateLength}function G(){return u.byteLength}function M(){return u.state}function C(O){u.state=O}function N(){var O={};return O.type="PRNG",O.name=c.NAME,O.state=p(u.state),v===void 0?O.params=[]:O.params=[v],O}function E(){return m(u,v)}function P(O){return d(O)||O<=0?NaN:m(u,O)}}return Wc=q,Wc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zc,w4;function yM(){if(w4)return zc;w4=1;var r=A5(),e=r();return zc=e,zc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Dc,_4;function M5(){if(_4)return Dc;_4=1;var r=D(),e=yM(),t=A5();return r(e,"factory",t),Dc=e,Dc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Jc,R4;function bM(){if(R4)return Jc;R4=1;var r=pr().isPrimitive,e=Y();function t(n,a){return r(n)?r(a)?null:new TypeError(e("invalid argument. Second argument must be a positive number. Value: `%s`.",a)):new TypeError(e("invalid argument. First argument must be a positive number. Value: `%s`.",n))}return Jc=t,Jc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Xc,E4;function $M(){if(E4)return Xc;E4=1;function r(e,t,n){var a=e(t)/t,i=e(n)/n;return a/i}return Xc=r,Xc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Yc,L4;function P5(){if(L4)return Yc;L4=1;var r=D(),e=er(),t=nr(),n=tr(),a=ur(),i=rr(),o=ar(),s=or(),l=Be().factory,g=Q(),d=ir(),p=Y(),b=bM(),m=$M();function q(){var v,f,u,c,h,R,A;if(arguments.length===0)v=l();else if(arguments.length===1){if(f=arguments[0],!n(f))throw new TypeError(p("invalid argument. Options argument must be an object. Value: `%s`.",f));if(i(f,"prng")){if(!a(f.prng))throw new TypeError(p("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",f.prng));v=l({prng:f.prng})}else v=l(f)}else{if(R=arguments[0],A=arguments[1],h=b(R,A),h)throw h;if(arguments.length>2){if(f=arguments[2],!n(f))throw new TypeError(p("invalid argument. Options argument must be an object. Value: `%s`.",f));if(i(f,"prng")){if(!a(f.prng))throw new TypeError(p("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",f.prng));v=l({prng:f.prng})}else v=l(f)}else v=l()}return R===void 0?c=S:c=F,u=v.PRNG,r(c,"NAME","f"),f&&f.prng?(r(c,"seed",null),r(c,"seedLength",null),t(c,"state",o(null),s),r(c,"stateLength",null),r(c,"byteLength",null),r(c,"toJSON",o(null))):(e(c,"seed",G),e(c,"seedLength",M),t(c,"state",E,P),e(c,"stateLength",C),e(c,"byteLength",N),r(c,"toJSON",O)),r(c,"PRNG",u),c;function G(){return u.seed}function M(){return u.seedLength}function C(){return u.stateLength}function N(){return u.byteLength}function E(){return u.state}function P(I){u.state=I}function O(){var I={};return I.type="PRNG",I.name=c.NAME,I.state=d(u.state),R===void 0?I.params=[]:I.params=[R,A],I}function F(){return m(v,R,A)}function S(I,T){return g(I)||g(T)||I<=0||T<=0?NaN:m(v,I,T)}}return Yc=q,Yc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Kc,O4;function qM(){if(O4)return Kc;O4=1;var r=P5(),e=r();return Kc=e,Kc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Zc,N4;function I5(){if(N4)return Zc;N4=1;var r=D(),e=qM(),t=P5();return r(e,"factory",t),Zc=e,Zc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Qc,S4;function wM(){if(S4)return Qc;S4=1;var r=pr().isPrimitive,e=mr().isPrimitive,t=_r(),n=Y();function a(i,o,s){return!r(i)||t(i)?new TypeError(n("invalid argument. First argument must be a positive number and not NaN. Value: `%s`.",i)):!r(o)||t(o)?new TypeError(n("invalid argument. Second argument must be a positive number and not NaN. Value: `%s`.",o)):!e(s)||t(s)?new TypeError(n("invalid argument. Third argument must be a number and not NaN. Value: `%s`.",s)):null}return Qc=a,Qc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xc,T4;function _M(){if(T4)return xc;T4=1;var r=Gr(),e=dr();function t(n,a,i,o){return o+i*r(-e(n()),-1/a)}return xc=t,xc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r0,A4;function F5(){if(A4)return r0;A4=1;var r=D(),e=er(),t=nr(),n=tr(),a=ur(),i=rr(),o=ar(),s=or(),l=lr().factory,g=Q(),d=ir(),p=Y(),b=wM(),m=_M();function q(){var v,f,u,c,h,R,A;if(arguments.length===0)u=l();else if(arguments.length===1){if(f=arguments[0],!n(f))throw new TypeError(p("invalid argument. Options argument must be an object. Value: `%s`.",f));if(i(f,"prng")){if(!a(f.prng))throw new TypeError(p("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",f.prng));u=f.prng}else u=l(f)}else{if(v=arguments[0],R=arguments[1],A=arguments[2],h=b(v,R,A),h)throw h;if(arguments.length>3){if(f=arguments[3],!n(f))throw new TypeError(p("invalid argument. Options argument must be an object. Value: `%s`.",f));if(i(f,"prng")){if(!a(f.prng))throw new TypeError(p("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",f.prng));u=f.prng}else u=l(f)}else u=l()}return v===void 0?c=S:c=F,r(c,"NAME","frechet"),f&&f.prng?(r(c,"seed",null),r(c,"seedLength",null),t(c,"state",o(null),s),r(c,"stateLength",null),r(c,"byteLength",null),r(c,"toJSON",o(null)),r(c,"PRNG",u)):(e(c,"seed",G),e(c,"seedLength",M),t(c,"state",E,P),e(c,"stateLength",C),e(c,"byteLength",N),r(c,"toJSON",O),r(c,"PRNG",u),u=u.normalized),c;function G(){return u.seed}function M(){return u.seedLength}function C(){return u.stateLength}function N(){return u.byteLength}function E(){return u.state}function P(I){u.state=I}function O(){var I={};return I.type="PRNG",I.name=c.NAME,I.state=d(u.state),v===void 0?I.params=[]:I.params=[v,R,A],I}function F(){return m(u,v,R,A)}function S(I,T,z){return g(I)||g(T)||g(z)||I<=0||T<=0?NaN:m(u,I,T,z)}}return r0=q,r0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e0,M4;function RM(){if(M4)return e0;M4=1;var r=F5(),e=r();return e0=e,e0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t0,P4;function j5(){if(P4)return t0;P4=1;var r=D(),e=RM(),t=F5();return r(e,"factory",t),t0=e,t0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n0,I4;function EM(){if(I4)return n0;I4=1;var r=wr(),e=dr();function t(n,a){var i=n();return i===0&&(i=n()),r(e(i)/e(1-a))}return n0=t,n0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var a0,F4;function V5(){if(F4)return a0;F4=1;var r=D(),e=er(),t=nr(),n=tr(),a=Am().isPrimitive,i=ur(),o=rr(),s=ar(),l=or(),g=lr().factory,d=Q(),p=ir(),b=Y(),m=EM();function q(){var v,f,u,c;if(arguments.length===0)f=g();else if(arguments.length===1&&n(arguments[0]))if(v=arguments[0],o(v,"prng")){if(!i(v.prng))throw new TypeError(b("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",v.prng));f=v.prng}else f=g(v);else{if(c=arguments[0],!a(c))throw new TypeError(b("invalid argument. First argument must be a probability. Value: `%s`.",c));if(arguments.length>1){if(v=arguments[1],!n(v))throw new TypeError(b("invalid argument. Options argument must be an object. Value: `%s`.",v));if(o(v,"prng")){if(!i(v.prng))throw new TypeError(b("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",v.prng));f=v.prng}else f=g(v)}else f=g()}return c===void 0?u=P:u=E,r(u,"NAME","geometric"),v&&v.prng?(r(u,"seed",null),r(u,"seedLength",null),t(u,"state",s(null),l),r(u,"stateLength",null),r(u,"byteLength",null),r(u,"toJSON",s(null)),r(u,"PRNG",f)):(e(u,"seed",h),e(u,"seedLength",R),t(u,"state",M,C),e(u,"stateLength",A),e(u,"byteLength",G),r(u,"toJSON",N),r(u,"PRNG",f),f=f.normalized),u;function h(){return f.seed}function R(){return f.seedLength}function A(){return f.stateLength}function G(){return f.byteLength}function M(){return f.state}function C(O){f.state=O}function N(){var O={};return O.type="PRNG",O.name=u.NAME,O.state=p(f.state),c===void 0?O.params=[]:O.params=[c],O}function E(){return m(f,c)}function P(O){return d(O)||O<0||O>1?NaN:m(f,O)}}return a0=q,a0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var i0,j4;function LM(){if(j4)return i0;j4=1;var r=V5(),e=r();return i0=e,i0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var u0,V4;function G5(){if(V4)return u0;V4=1;var r=D(),e=LM(),t=V5();return r(e,"factory",t),u0=e,u0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var o0,G4;function OM(){if(G4)return o0;G4=1;var r=mr().isPrimitive,e=pr().isPrimitive,t=Y(),n=_r();function a(i,o){return!r(i)||n(i)?new TypeError(t("invalid argument. First argument must be a number and not NaN. Value: `%s`.",i)):e(o)?null:new TypeError(t("invalid argument. Second argument must be a positive number. Value: `%s`.",o))}return o0=a,o0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var s0,C4;function NM(){if(C4)return s0;C4=1;var r=dr();function e(t,n,a){return n-a*r(-r(t()))}return s0=e,s0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var f0,B4;function C5(){if(B4)return f0;B4=1;var r=D(),e=er(),t=nr(),n=tr(),a=ur(),i=rr(),o=ar(),s=or(),l=lr().factory,g=Q(),d=ir(),p=Y(),b=OM(),m=NM();function q(){var v,f,u,c,h,R;if(arguments.length===0)u=l();else if(arguments.length===1){if(f=arguments[0],!n(f))throw new TypeError(p("invalid argument. Options argument must be an object. Value: `%s`.",f));if(i(f,"prng")){if(!a(f.prng))throw new TypeError(p("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",f.prng));u=f.prng}else u=l(f)}else{if(R=arguments[0],v=arguments[1],h=b(R,v),h)throw h;if(arguments.length>2){if(f=arguments[2],!n(f))throw new TypeError(p("invalid argument. Options argument must be an object. Value: `%s`.",f));if(i(f,"prng")){if(!a(f.prng))throw new TypeError(p("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",f.prng));u=f.prng}else u=l(f)}else u=l()}return R===void 0?c=F:c=O,r(c,"NAME","gumbel"),f&&f.prng?(r(c,"seed",null),r(c,"seedLength",null),t(c,"state",o(null),s),r(c,"stateLength",null),r(c,"byteLength",null),r(c,"toJSON",o(null)),r(c,"PRNG",u)):(e(c,"seed",A),e(c,"seedLength",G),t(c,"state",N,E),e(c,"stateLength",M),e(c,"byteLength",C),r(c,"toJSON",P),r(c,"PRNG",u),u=u.normalized),c;function A(){return u.seed}function G(){return u.seedLength}function M(){return u.stateLength}function C(){return u.byteLength}function N(){return u.state}function E(S){u.state=S}function P(){var S={};return S.type="PRNG",S.name=c.NAME,S.state=d(u.state),R===void 0?S.params=[]:S.params=[R,v],S}function O(){return m(u,R,v)}function F(S,I){return g(S)||g(I)||I<=0?NaN:m(u,S,I)}}return f0=q,f0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var v0,k4;function SM(){if(k4)return v0;k4=1;var r=C5(),e=r();return v0=e,v0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var l0,H4;function B5(){if(H4)return l0;H4=1;var r=D(),e=SM(),t=C5();return r(e,"factory",t),l0=e,l0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var c0,U4;function TM(){if(U4)return c0;U4=1;var r=wr();function e(t){return r(t)===t&&t>=0}return c0=e,c0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var g0,W4;function AM(){if(W4)return g0;W4=1;var r=TM();return g0=r,g0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var m0,z4;function MM(){if(z4)return m0;z4=1;var r=dm().isPrimitive,e=Y();function t(n,a,i){return r(n)?r(a)?r(i)?i>n?new RangeError(e("invalid argument. Third argument must be less than or equal to the first argument. Value: `%u`.",i)):a>n?new RangeError(e("invalid argument. Second argument must be less than or equal to the first argument. Value: `%u`.",a)):null:new TypeError(e("invalid argument. Third argument must be a nonnegative integer. Value: `%s`.",i)):new TypeError(e("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",a)):new TypeError(e("invalid argument. First argument must be a nonnegative integer. Value: `%s`.",n))}return m0=t,m0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var p0,D4;function PM(){if(D4)return p0;D4=1;var r=Xr();function e(t){return t===0&&1/t===r}return p0=e,p0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var h0,J4;function IM(){if(J4)return h0;J4=1;var r=PM();return h0=r,h0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var d0,X4;function FM(){if(X4)return d0;X4=1;var r=2.5066282746310007;return d0=r,d0}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var y0,Y4;function jM(){if(Y4)return y0;Y4=1;function r(e){return e===0?.08333333333334822:.08333333333334822+e*(.0034722222160545866+e*(-.0026813261780578124+e*(-.00022954996161337813+e*.0007873113957930937)))}return y0=r,y0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C code, copyright, license, and constants are from [Cephes]{@link http://www.netlib.org/cephes}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright 1984, 1987, 1989, 1992, 2000 by Stephen L. Moshier
*
* Some software in this archive may be from the book _Methods and Programs for Mathematical Functions_ (Prentice-Hall or Simon & Schuster International, 1989) or from the Cephes Mathematical Library, a commercial product. In either event, it is copyrighted by the author. What you see here may be used freely but it comes with no support or guarantee.
*
* Stephen L. Moshier
* moshier@na-net.ornl.gov
* ```
*/var b0,K4;function VM(){if(K4)return b0;K4=1;var r=FM(),e=Gr(),t=Le(),n=jM(),a=143.01608;function i(o){var s,l,g;return s=1/o,s=1+s*n(s),l=t(o),o>a?(g=e(o,.5*o-.25),l=g*(g/l)):l=e(o,o-.5)/l,r*l*s}return b0=i,b0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $0,Z4;function GM(){if(Z4)return $0;Z4=1;var r=.5772156649015329;return $0=r,$0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C code, copyright, license, and constants are from [Cephes]{@link http://www.netlib.org/cephes}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright 1984, 1987, 1989, 1992, 2000 by Stephen L. Moshier
*
* Some software in this archive may be from the book _Methods and Programs for Mathematical Functions_ (Prentice-Hall or Simon & Schuster International, 1989) or from the Cephes Mathematical Library, a commercial product. In either event, it is copyrighted by the author. What you see here may be used freely but it comes with no support or guarantee.
*
* Stephen L. Moshier
* moshier@na-net.ornl.gov
* ```
*/var q0,Q4;function CM(){if(Q4)return q0;Q4=1;var r=GM();function e(t,n){return n/((1+r*t)*t)}return q0=e,q0}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var w0,x4;function BM(){if(x4)return w0;x4=1;function r(e){var t,n,a;return e===0?1:(e<0?t=-e:t=e,t<=1?(n=1+e*(.4942148268014971+e*(.20744822764843598+e*(.04763678004571372+e*(.010421379756176158+e*(.0011913514700658638+e*(.00016011952247675185+e*0)))))),a=1+e*(.0714304917030273+e*(-.23459179571824335+e*(.035823639860549865+e*(.011813978522206043+e*(-.004456419138517973+e*(.0005396055804933034+e*-23158187332412014e-21))))))):(e=1/e,n=0+e*(.00016011952247675185+e*(.0011913514700658638+e*(.010421379756176158+e*(.04763678004571372+e*(.20744822764843598+e*(.4942148268014971+e*1)))))),a=-23158187332412014e-21+e*(.0005396055804933034+e*(-.004456419138517973+e*(.011813978522206043+e*(.035823639860549865+e*(-.23459179571824335+e*(.0714304917030273+e*1))))))),n/a)}return w0=r,w0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C code, long comment, copyright, license, and constants are from [Cephes]{@link http://www.netlib.org/cephes}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright 1984, 1987, 1989, 1992, 2000 by Stephen L. Moshier
*
* Some software in this archive may be from the book _Methods and Programs for Mathematical Functions_ (Prentice-Hall or Simon & Schuster International, 1989) or from the Cephes Mathematical Library, a commercial product. In either event, it is copyrighted by the author. What you see here may be used freely but it comes with no support or guarantee.
*
* Stephen L. Moshier
* moshier@na-net.ornl.gov
* ```
*/var _0,r_;function kM(){if(r_)return _0;r_=1;var r=Q(),e=Hr(),t=IM(),n=Yr(),a=wr(),i=vt(),o=Nr(),s=Xr(),l=ge(),g=VM(),d=CM(),p=BM();function b(m){var q,v,f,u;if(e(m)&&m<0||m===s||r(m))return NaN;if(m===0)return t(m)?s:o;if(m>171.61447887182297)return o;if(m<-170.5674972726612)return 0;if(v=n(m),v>33)return m>=0?g(m):(f=a(v),(f&1)===0?q=-1:q=1,u=v-f,u>.5&&(f+=1,u=v-f),u=v*i(l*u),q*l/(n(u)*g(v)));for(u=1;m>=3;)m-=1,u*=m;for(;m<0;){if(m>-1e-9)return d(m,u);u/=m,m+=1}for(;m<2;){if(m<1e-9)return d(m,u);u/=m,m+=1}return m===2?u:(m-=2,u*p(m))}return _0=b,_0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var R0,e_;function HM(){if(e_)return R0;e_=1;var r=kM();return R0=r,R0}const UM=[1,1,2,6,24,120,720,5040,40320,362880,3628800,39916800,479001600,6227020800,87178291200,1307674368e3,20922789888e3,355687428096e3,6402373705728e3,121645100408832e3,243290200817664e4,5109094217170944e4,11240007277776077e5,2585201673888498e7,6204484017332394e8,15511210043330986e9,40329146112660565e10,10888869450418352e12,30488834461171387e13,8841761993739702e15,26525285981219107e16,8222838654177922e18,2631308369336935e20,8683317618811886e21,29523279903960416e22,10333147966386145e24,37199332678990125e25,13763753091226346e27,5230226174666011e29,20397882081197444e30,8159152832478977e32,3345252661316381e34,140500611775288e37,6041526306337383e37,2658271574788449e39,11962222086548019e40,5502622159812089e42,25862324151116818e43,12413915592536073e45,6082818640342675e47,30414093201713376e48,15511187532873822e50,8065817517094388e52,42748832840600255e53,2308436973392414e56,12696403353658276e57,7109985878048635e59,40526919504877214e60,23505613312828785e62,13868311854568984e64,832098711274139e67,5075802138772248e68,3146997326038794e70,198260831540444e73,12688693218588417e73,8247650592082472e75,5443449390774431e77,3647111091818868e79,24800355424368305e80,1711224524281413e83,11978571669969892e84,8504785885678623e86,61234458376886085e87,44701154615126844e89,3307885441519386e92,248091408113954e95,18854947016660504e95,14518309202828587e97,11324281178206297e99,8946182130782976e101,7156945704626381e103,5797126020747368e105,4753643337012842e107,3945523969720659e109,3314240134565353e111,281710411438055e114,24227095383672734e114,2107757298379528e117,18548264225739844e118,1650795516090846e121,14857159644817615e122,1352001527678403e125,12438414054641308e126,11567725070816416e128,1087366156656743e131,1032997848823906e133,9916779348709496e134,9619275968248212e136,9426890448883248e138,9332621544394415e140,9332621544394415e142,942594775983836e145,9614466715035127e146,990290071648618e149,10299016745145628e150,1081396758240291e153,11462805637347084e154,1226520203196138e157,1324641819451829e159,14438595832024937e160,1588245541522743e163,17629525510902446e164,1974506857221074e167,22311927486598138e168,25435597334721877e170,2925093693493016e173,3393108684451898e175,3969937160808721e177,4684525849754291e179,5574585761207606e181,6689502913449127e183,8094298525273444e185,9875044200833601e187,1214630436702533e190,1506141741511141e192,1882677176888926e194,2372173242880047e196,30126600184576594e197,3856204823625804e200,4974504222477287e202,6466855489220474e204,847158069087882e207,11182486511960043e208,14872707060906857e210,19929427461615188e212,26904727073180504e214,3659042881952549e217,5012888748274992e219,6917786472619489e221,9615723196941089e223,13462012475717526e225,1898143759076171e228,2695364137888163e230,3854370717180073e232,55502938327393044e233,8047926057471992e236,11749972043909107e238,1727245890454639e241,25563239178728654e242,380892263763057e246,5713383956445855e247,862720977423324e250,13113358856834524e251,20063439050956823e253,30897696138473508e255,4789142901463394e258,7471062926282894e260,11729568794264145e262,1853271869493735e265,29467022724950384e266,47147236359920616e268,7590705053947219e271,12296942187394494e273,20044015765453026e275,3287218585534296e278,5423910666131589e280,9003691705778438e282,1503616514864999e285,25260757449731984e286,4269068009004705e289,7257415615307999e291];/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var E0,t_;function WM(){if(t_)return E0;t_=1;var r=Q(),e=Hr(),t=HM(),n=Nr(),a=UM,i=170;function o(s){return r(s)?NaN:e(s)?s<0?NaN:s<=i?a[s]:n:t(s+1)}return E0=o,E0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var L0,n_;function zM(){if(n_)return L0;n_=1;var r=WM();return L0=r,L0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var O0,a_;function DM(){if(a_)return O0;a_=1;var r=zM();function e(t,n,a,i){var o,s,l;for(i<a?(o=r(a)*r(n+a-i)/(r(n+a)*r(a-i)),l=0):(o=r(n)*r(i)/(r(i-a)*r(n+a)),l=i-a),s=t();s>o;)s-=o,o*=(n-l)*(i-l)/((l+1)*(a-i+1+l)),l+=1;return l}return O0=e,O0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var N0,i_;function JM(){if(i_)return N0;i_=1;var r=DM();function e(t,n,a,i){var o,s,l,g;return i>n/2?(l=n-i,2*a<=n?(o=a,s=n-a,g=r(t,o,s,l),a-g):(s=a,o=n-a,g=r(t,o,s,l),i-n+a+g)):(l=i,2*a<=n?(o=a,s=n-a,g=r(t,o,s,l),g):(o=n-a,s=a,g=r(t,o,s,l),i-g))}return N0=e,N0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var S0,u_;function k5(){if(u_)return S0;u_=1;var r=D(),e=er(),t=nr(),n=tr(),a=ur(),i=rr(),o=ar(),s=or(),l=lr().factory,g=AM(),d=Nr(),p=ir(),b=Y(),m=MM(),q=JM();function v(){var f,u,c,h,R,A,G;if(arguments.length===0)u=l();else if(arguments.length===1){if(f=arguments[0],!n(f))throw new TypeError(b("invalid argument. Options argument must be an object. Value: `%s`.",f));if(i(f,"prng")){if(!a(f.prng))throw new TypeError(b("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",f.prng));u=f.prng}else u=l(f)}else{if(R=arguments[0],A=arguments[1],G=arguments[2],h=m(R,A,G),h)throw h;if(arguments.length>3){if(f=arguments[3],!n(f))throw new TypeError(b("invalid argument. Options argument must be an object. Value: `%s`.",f));if(i(f,"prng")){if(!a(f.prng))throw new TypeError(b("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",f.prng));u=f.prng}else u=l(f)}else u=l()}return R===void 0?c=I:c=S,r(c,"NAME","hypergeometric"),f&&f.prng?(r(c,"seed",null),r(c,"seedLength",null),t(c,"state",o(null),s),r(c,"stateLength",null),r(c,"byteLength",null),r(c,"toJSON",o(null)),r(c,"PRNG",u)):(e(c,"seed",M),e(c,"seedLength",C),t(c,"state",P,O),e(c,"stateLength",N),e(c,"byteLength",E),r(c,"toJSON",F),r(c,"PRNG",u),u=u.normalized),c;function M(){return u.seed}function C(){return u.seedLength}function N(){return u.stateLength}function E(){return u.byteLength}function P(){return u.state}function O(T){u.state=T}function F(){var T={};return T.type="PRNG",T.name=c.NAME,T.state=p(u.state),R===void 0?T.params=[]:T.params=[R,A,G],T}function S(){return q(u,R,A,G)}function I(T,z,X){return T===d||z===d||!g(T)||!g(z)||!g(X)||X>T?NaN:q(u,T,z,X)}}return S0=v,S0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var T0,o_;function XM(){if(o_)return T0;o_=1;var r=k5(),e=r();return T0=e,T0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var A0,s_;function H5(){if(s_)return A0;s_=1;var r=D(),e=XM(),t=k5();return r(e,"factory",t),A0=e,A0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var M0,f_;function YM(){if(f_)return M0;f_=1;var r=pr().isPrimitive,e=Y();function t(n,a){return r(n)?r(a)?null:new TypeError(e("invalid argument. Second argument must be a positive number. Value: `%s`.",a)):new TypeError(e("invalid argument. First argument must be a positive number. Value: `%s`.",n))}return M0=t,M0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var P0,v_;function U5(){if(v_)return P0;v_=1;var r=D(),e=er(),t=nr(),n=tr(),a=ur(),i=rr(),o=ar(),s=or(),l=Oe().factory,g=Q(),d=ir(),p=Y(),b=YM();function m(){var q,v,f,u,c,h,R;if(arguments.length===0)q=l();else if(arguments.length===1){if(u=arguments[0],!n(u))throw new TypeError(p("invalid argument. Options argument must be an object. Value: `%s`.",u));if(i(u,"prng")){if(!a(u.prng))throw new TypeError(p("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",u.prng));q=l({prng:u.prng})}else q=l(u)}else{if(v=arguments[0],f=arguments[1],R=b(v,f),R)throw R;if(arguments.length>2){if(u=arguments[2],!n(u))throw new TypeError(p("invalid argument. Options argument must be an object. Value: `%s`.",u));if(i(u,"prng")){if(!a(u.prng))throw new TypeError(p("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",u.prng));q=l(v,f,{prng:u.prng})}else q=l(v,f,u)}else q=l(v,f)}return v===void 0?h=F:h=O,c=q.PRNG,r(h,"NAME","invgamma"),u&&u.prng?(r(h,"seed",null),r(h,"seedLength",null),t(h,"state",o(null),s),r(h,"stateLength",null),r(h,"byteLength",null),r(h,"toJSON",o(null))):(e(h,"seed",A),e(h,"seedLength",G),t(h,"state",N,E),e(h,"stateLength",M),e(h,"byteLength",C),r(h,"toJSON",P)),r(h,"PRNG",c),h;function A(){return c.seed}function G(){return c.seedLength}function M(){return c.stateLength}function C(){return c.byteLength}function N(){return c.state}function E(S){c.state=S}function P(){var S={};return S.type="PRNG",S.name=h.NAME,S.state=d(c.state),v===void 0?S.params=[]:S.params=[v,f],S}function O(){return 1/q()}function F(S,I){return g(S)||g(I)||S<=0||I<=0?NaN:1/q(S,I)}}return P0=m,P0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var I0,l_;function KM(){if(l_)return I0;l_=1;var r=U5(),e=r();return I0=e,I0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var F0,c_;function W5(){if(c_)return F0;c_=1;var r=D(),e=KM(),t=U5();return r(e,"factory",t),F0=e,F0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var j0,g_;function ZM(){if(g_)return j0;g_=1;var r=pr().isPrimitive,e=Y();function t(n,a){return r(n)?r(a)?null:new TypeError(e("invalid argument. Second argument must be a positive number. Value: `%s`.",a)):new TypeError(e("invalid argument. First argument must be a positive number. Value: `%s`.",n))}return j0=t,j0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var V0,m_;function QM(){if(m_)return V0;m_=1;var r=Gr();function e(t,n,a){var i=t();return r(1-r(1-i,1/a),1/n)}return V0=e,V0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var G0,p_;function z5(){if(p_)return G0;p_=1;var r=D(),e=er(),t=nr(),n=tr(),a=ur(),i=rr(),o=ar(),s=or(),l=lr().factory,g=Q(),d=ir(),p=Y(),b=ZM(),m=QM();function q(){var v,f,u,c,h,R;if(arguments.length===0)f=l();else if(arguments.length===1){if(v=arguments[0],!n(v))throw new TypeError(p("invalid argument. Options argument must be an object. Value: `%s`.",v));if(i(v,"prng")){if(!a(v.prng))throw new TypeError(p("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",v.prng));f=v.prng}else f=l(v)}else{if(h=arguments[0],R=arguments[1],c=b(h,R),c)throw c;if(arguments.length>2){if(v=arguments[2],!n(v))throw new TypeError(p("invalid argument. Options argument must be an object. Value: `%s`.",v));if(i(v,"prng")){if(!a(v.prng))throw new TypeError(p("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",v.prng));f=v.prng}else f=l(v)}else f=l()}return h===void 0?u=F:u=O,r(u,"NAME","kumaraswamy"),v&&v.prng?(r(u,"seed",null),r(u,"seedLength",null),t(u,"state",o(null),s),r(u,"stateLength",null),r(u,"byteLength",null),r(u,"toJSON",o(null)),r(u,"PRNG",f)):(e(u,"seed",A),e(u,"seedLength",G),t(u,"state",N,E),e(u,"stateLength",M),e(u,"byteLength",C),r(u,"toJSON",P),r(u,"PRNG",f),f=f.normalized),u;function A(){return f.seed}function G(){return f.seedLength}function M(){return f.stateLength}function C(){return f.byteLength}function N(){return f.state}function E(S){f.state=S}function P(){var S={};return S.type="PRNG",S.name=u.NAME,S.state=d(f.state),h===void 0?S.params=[]:S.params=[h,R],S}function O(){return m(f,h,R)}function F(S,I){return g(S)||g(I)||S<=0||I<=0?NaN:m(f,S,I)}}return G0=q,G0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var C0,h_;function xM(){if(h_)return C0;h_=1;var r=z5(),e=r();return C0=e,C0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var B0,d_;function D5(){if(d_)return B0;d_=1;var r=D(),e=xM(),t=z5();return r(e,"factory",t),B0=e,B0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var k0,y_;function rP(){if(y_)return k0;y_=1;var r=mr().isPrimitive,e=pr().isPrimitive,t=Y(),n=_r();function a(i,o){return!r(i)||n(i)?new TypeError(t("invalid argument. First argument must be a number and not NaN. Value: `%s`.",i)):e(o)?null:new TypeError(t("invalid argument. Second argument must be a positive number. Value: `%s`.",o))}return k0=a,k0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var H0,b_;function eP(){if(b_)return H0;b_=1;var r=Pm(),e=Yr(),t=dr();function n(a,i,o){var s=a()-.5;return i-o*r(s)*t(1-2*e(s))}return H0=n,H0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var U0,$_;function J5(){if($_)return U0;$_=1;var r=D(),e=er(),t=nr(),n=tr(),a=ur(),i=rr(),o=ar(),s=or(),l=lr().factory,g=Q(),d=ir(),p=Y(),b=rP(),m=eP();function q(){var v,f,u,c,h,R;if(arguments.length===0)f=l();else if(arguments.length===1){if(v=arguments[0],!n(v))throw new TypeError(p("invalid argument. Options argument must be an object. Value: `%s`.",v));if(i(v,"prng")){if(!a(v.prng))throw new TypeError(p("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",v.prng));f=v.prng}else f=l(v)}else{if(h=arguments[0],R=arguments[1],c=b(h,R),c)throw c;if(arguments.length>2){if(v=arguments[2],!n(v))throw new TypeError(p("invalid argument. Options argument must be an object. Value: `%s`.",v));if(i(v,"prng")){if(!a(v.prng))throw new TypeError(p("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",v.prng));f=v.prng}else f=l(v)}else f=l()}return h===void 0?u=F:u=O,r(u,"NAME","laplace"),v&&v.prng?(r(u,"seed",null),r(u,"seedLength",null),t(u,"state",o(null),s),r(u,"stateLength",null),r(u,"byteLength",null),r(u,"toJSON",o(null)),r(u,"PRNG",f)):(e(u,"seed",A),e(u,"seedLength",G),t(u,"state",N,E),e(u,"stateLength",M),e(u,"byteLength",C),r(u,"toJSON",P),r(u,"PRNG",f),f=f.normalized),u;function A(){return f.seed}function G(){return f.seedLength}function M(){return f.stateLength}function C(){return f.byteLength}function N(){return f.state}function E(S){f.state=S}function P(){var S={};return S.type="PRNG",S.name=u.NAME,S.state=d(f.state),h===void 0?S.params=[]:S.params=[h,R],S}function O(){return m(f,h,R)}function F(S,I){return g(S)||g(I)||I<=0?NaN:m(f,S,I)}}return U0=q,U0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var W0,q_;function tP(){if(q_)return W0;q_=1;var r=J5(),e=r();return W0=e,W0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var z0,w_;function X5(){if(w_)return z0;w_=1;var r=D(),e=tP(),t=J5();return r(e,"factory",t),z0=e,z0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var D0,__;function nP(){if(__)return D0;__=1;var r=mr().isPrimitive,e=pr().isPrimitive,t=Y(),n=_r();function a(i,o){return!r(i)||n(i)?new TypeError(t("invalid argument. First argument must be a number and not NaN. Value: `%s`.",i)):e(o)?null:new TypeError(t("invalid argument. Second argument must be a positive number. Value: `%s`.",o))}return D0=a,D0}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var J0,R_;function aP(){if(R_)return J0;R_=1;function r(e){var t,n,a;return e===0?-.0005087819496582806:(e<0?t=-e:t=e,t<=1?(n=-.0005087819496582806+e*(-.008368748197417368+e*(.03348066254097446+e*(-.012692614766297404+e*(-.03656379714117627+e*(.02198786811111689+e*(.008226878746769157+e*(-.005387729650712429+e*(0+e*0)))))))),a=1+e*(-.9700050433032906+e*(-1.5657455823417585+e*(1.5622155839842302+e*(.662328840472003+e*(-.7122890234154284+e*(-.05273963823400997+e*(.07952836873415717+e*(-.0023339375937419+e*.0008862163904564247))))))))):(e=1/e,n=0+e*(0+e*(-.005387729650712429+e*(.008226878746769157+e*(.02198786811111689+e*(-.03656379714117627+e*(-.012692614766297404+e*(.03348066254097446+e*(-.008368748197417368+e*-.0005087819496582806)))))))),a=.0008862163904564247+e*(-.0023339375937419+e*(.07952836873415717+e*(-.05273963823400997+e*(-.7122890234154284+e*(.662328840472003+e*(1.5622155839842302+e*(-1.5657455823417585+e*(-.9700050433032906+e*1))))))))),n/a)}return J0=r,J0}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var X0,E_;function iP(){if(E_)return X0;E_=1;function r(e){var t,n,a;return e===0?-.20243350835593876:(e<0?t=-e:t=e,t<=1?(n=-.20243350835593876+e*(.10526468069939171+e*(8.3705032834312+e*(17.644729840837403+e*(-18.851064805871424+e*(-44.6382324441787+e*(17.445385985570866+e*(21.12946554483405+e*-3.6719225470772936))))))),a=1+e*(6.242641248542475+e*(3.971343795334387+e*(-28.66081804998+e*(-20.14326346804852+e*(48.560921310873994+e*(10.826866735546016+e*(-22.643693341313973+e*1.7211476576120028)))))))):(e=1/e,n=-3.6719225470772936+e*(21.12946554483405+e*(17.445385985570866+e*(-44.6382324441787+e*(-18.851064805871424+e*(17.644729840837403+e*(8.3705032834312+e*(.10526468069939171+e*-.20243350835593876))))))),a=1.7211476576120028+e*(-22.643693341313973+e*(10.826866735546016+e*(48.560921310873994+e*(-20.14326346804852+e*(-28.66081804998+e*(3.971343795334387+e*(6.242641248542475+e*1)))))))),n/a)}return X0=r,X0}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Y0,L_;function uP(){if(L_)return Y0;L_=1;function r(e){var t,n,a;return e===0?-.1311027816799519:(e<0?t=-e:t=e,t<=1?(n=-.1311027816799519+e*(-.16379404719331705+e*(.11703015634199525+e*(.38707973897260434+e*(.3377855389120359+e*(.14286953440815717+e*(.029015791000532906+e*(.0021455899538880526+e*(-6794655751811263e-22+e*(28522533178221704e-24+e*-681149956853777e-24))))))))),a=1+e*(3.4662540724256723+e*(5.381683457070069+e*(4.778465929458438+e*(2.5930192162362027+e*(.848854343457902+e*(.15226433829533179+e*(.011059242293464892+e*(0+e*(0+e*0)))))))))):(e=1/e,n=-681149956853777e-24+e*(28522533178221704e-24+e*(-6794655751811263e-22+e*(.0021455899538880526+e*(.029015791000532906+e*(.14286953440815717+e*(.3377855389120359+e*(.38707973897260434+e*(.11703015634199525+e*(-.16379404719331705+e*-.1311027816799519))))))))),a=0+e*(0+e*(0+e*(.011059242293464892+e*(.15226433829533179+e*(.848854343457902+e*(2.5930192162362027+e*(4.778465929458438+e*(5.381683457070069+e*(3.4662540724256723+e*1)))))))))),n/a)}return Y0=r,Y0}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var K0,O_;function oP(){if(O_)return K0;O_=1;function r(e){var t,n,a;return e===0?-.0350353787183178:(e<0?t=-e:t=e,t<=1?(n=-.0350353787183178+e*(-.0022242652921344794+e*(.018557330651423107+e*(.009508047013259196+e*(.0018712349281955923+e*(.00015754461742496055+e*(460469890584318e-20+e*(-2304047769118826e-25+e*26633922742578204e-28))))))),a=1+e*(1.3653349817554064+e*(.7620591645536234+e*(.22009110576413124+e*(.03415891436709477+e*(.00263861676657016+e*(7646752923027944e-20+e*(0+e*0)))))))):(e=1/e,n=26633922742578204e-28+e*(-2304047769118826e-25+e*(460469890584318e-20+e*(.00015754461742496055+e*(.0018712349281955923+e*(.009508047013259196+e*(.018557330651423107+e*(-.0022242652921344794+e*-.0350353787183178))))))),a=0+e*(0+e*(7646752923027944e-20+e*(.00263861676657016+e*(.03415891436709477+e*(.22009110576413124+e*(.7620591645536234+e*(1.3653349817554064+e*1)))))))),n/a)}return K0=r,K0}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Z0,N_;function sP(){if(N_)return Z0;N_=1;function r(e){var t,n,a;return e===0?-.016743100507663373:(e<0?t=-e:t=e,t<=1?(n=-.016743100507663373+e*(-.0011295143874558028+e*(.001056288621524929+e*(.00020938631748758808+e*(14962478375834237e-21+e*(44969678992770644e-23+e*(4625961635228786e-24+e*(-2811287356288318e-29+e*9905570997331033e-32))))))),a=1+e*(.5914293448864175+e*(.1381518657490833+e*(.016074608709367652+e*(.0009640118070051656+e*(27533547476472603e-21+e*(282243172016108e-21+e*(0+e*0)))))))):(e=1/e,n=9905570997331033e-32+e*(-2811287356288318e-29+e*(4625961635228786e-24+e*(44969678992770644e-23+e*(14962478375834237e-21+e*(.00020938631748758808+e*(.001056288621524929+e*(-.0011295143874558028+e*-.016743100507663373))))))),a=0+e*(0+e*(282243172016108e-21+e*(27533547476472603e-21+e*(.0009640118070051656+e*(.016074608709367652+e*(.1381518657490833+e*(.5914293448864175+e*1)))))))),n/a)}return Z0=r,Z0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_48_0/boost/math/special_functions/detail/erf_inv.hpp}. This implementation follows the original, but has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var Q0,S_;function fP(){if(S_)return Q0;S_=1;var r=Q(),e=Rr(),t=dr(),n=Nr(),a=Xr(),i=aP(),o=iP(),s=uP(),l=oP(),g=sP(),d=.08913147449493408,p=2.249481201171875,b=.807220458984375,m=.9399557113647461,q=.9836282730102539;function v(f){var u,c,h,R,A,G;return r(f)?NaN:f===1?n:f===-1?a:f===0?f:f>1||f<-1?NaN:(f<0?(u=-1,c=-f):(u=1,c=f),R=1-c,c<=.5?(A=c*(c+10),G=i(c),u*(A*d+A*G)):R>=.25?(A=e(-2*t(R)),R-=.25,G=o(R),u*(A/(p+G))):(R=e(-t(R)),R<3?(h=R-1.125,G=s(h),u*(b*R+G*R)):R<6?(h=R-3,G=l(h),u*(m*R+G*R)):(h=R-6,G=g(h),u*(q*R+G*R))))}return Q0=v,Q0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var x0,T_;function Y5(){if(T_)return x0;T_=1;var r=fP();return x0=r,x0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r1,A_;function vP(){if(A_)return r1;A_=1;var r=Y5(),e=Q(),t=Rr();function n(a,i,o){var s,l;return e(i)||e(o)||e(a)||o<0||a<0||a>1?NaN:o===0?i:(s=i,l=o*t(2),s+l*r(2*a-1))}return r1=n,r1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e1,M_;function lP(){if(M_)return e1;M_=1;var r=ar(),e=R5().factory,t=Y5(),n=Q(),a=Rr();function i(o,s){var l,g;if(n(o)||n(s)||s<0)return r(NaN);return s===0&&e(o),l=o,g=s*a(2),d;function d(p){return n(p)||p<0||p>1?NaN:l+g*t(2*p-1)}}return e1=i,e1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t1,P_;function cP(){if(P_)return t1;P_=1;var r=D(),e=vP(),t=lP();return r(e,"factory",t),t1=e,t1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n1,I_;function gP(){if(I_)return n1;I_=1;var r=cP();function e(t,n,a){var i=r(1-t()/2,0,1);return n+a/(i*i)}return n1=e,n1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var a1,F_;function K5(){if(F_)return a1;F_=1;var r=D(),e=er(),t=nr(),n=tr(),a=ur(),i=rr(),o=ar(),s=or(),l=lr().factory,g=Q(),d=ir(),p=Y(),b=nP(),m=gP();function q(){var v,f,u,c,h,R;if(arguments.length===0)f=l();else if(arguments.length===1){if(v=arguments[0],!n(v))throw new TypeError(p("invalid argument. Options argument must be an object. Value: `%s`.",v));if(i(v,"prng")){if(!a(v.prng))throw new TypeError(p("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",v.prng));f=v.prng}else f=l(v)}else{if(h=arguments[0],R=arguments[1],c=b(h,R),c)throw c;if(arguments.length>2){if(v=arguments[2],!n(v))throw new TypeError(p("invalid argument. Options argument must be an object. Value: `%s`.",v));if(i(v,"prng")){if(!a(v.prng))throw new TypeError(p("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",v.prng));f=v.prng}else f=l(v)}else f=l()}return h===void 0?u=F:u=O,r(u,"NAME","levy"),v&&v.prng?(r(u,"seed",null),r(u,"seedLength",null),t(u,"state",o(null),s),r(u,"stateLength",null),r(u,"byteLength",null),r(u,"toJSON",o(null)),r(u,"PRNG",f)):(e(u,"seed",A),e(u,"seedLength",G),t(u,"state",N,E),e(u,"stateLength",M),e(u,"byteLength",C),r(u,"toJSON",P),r(u,"PRNG",f),f=f.normalized),u;function A(){return f.seed}function G(){return f.seedLength}function M(){return f.stateLength}function C(){return f.byteLength}function N(){return f.state}function E(S){f.state=S}function P(){var S={};return S.type="PRNG",S.name=u.NAME,S.state=d(f.state),h===void 0?S.params=[]:S.params=[h,R],S}function O(){return m(f,h,R)}function F(S,I){return g(S)||g(I)||I<=0?NaN:m(f,S,I)}}return a1=q,a1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var i1,j_;function mP(){if(j_)return i1;j_=1;var r=K5(),e=r();return i1=e,i1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var u1,V_;function Z5(){if(V_)return u1;V_=1;var r=D(),e=mP(),t=K5();return r(e,"factory",t),u1=e,u1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var o1,G_;function pP(){if(G_)return o1;G_=1;var r=mr().isPrimitive,e=pr().isPrimitive,t=_r(),n=Y();function a(i,o){return!r(i)||t(i)?new TypeError(n("invalid argument. First argument must be a number and not NaN. Value: `%s`.",i)):e(o)?null:new TypeError(n("invalid argument. Second argument must be a positive number. Value: `%s`.",o))}return o1=a,o1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var s1,C_;function hP(){if(C_)return s1;C_=1;var r=dr();function e(t,n,a){var i=t();return n+a*r(i/(1-i))}return s1=e,s1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var f1,B_;function Q5(){if(B_)return f1;B_=1;var r=D(),e=er(),t=nr(),n=tr(),a=ur(),i=rr(),o=ar(),s=or(),l=lr().factory,g=Q(),d=ir(),p=Y(),b=pP(),m=hP();function q(){var v,f,u,c,h,R;if(arguments.length===0)f=l();else if(arguments.length===1){if(v=arguments[0],!n(v))throw new TypeError(p("invalid argument. Options argument must be an object. Value: `%s`.",v));if(i(v,"prng")){if(!a(v.prng))throw new TypeError(p("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",v.prng));f=v.prng}else f=l(v)}else{if(h=arguments[0],R=arguments[1],c=b(h,R),c)throw c;if(arguments.length>2){if(v=arguments[2],!n(v))throw new TypeError(p("invalid argument. Options argument must be an object. Value: `%s`.",v));if(i(v,"prng")){if(!a(v.prng))throw new TypeError(p("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",v.prng));f=v.prng}else f=l(v)}else f=l()}return h===void 0?u=F:u=O,r(u,"NAME","logistic"),v&&v.prng?(r(u,"seed",null),r(u,"seedLength",null),t(u,"state",o(null),s),r(u,"stateLength",null),r(u,"byteLength",null),r(u,"toJSON",o(null)),r(u,"PRNG",f)):(e(u,"seed",A),e(u,"seedLength",G),t(u,"state",N,E),e(u,"stateLength",M),e(u,"byteLength",C),r(u,"toJSON",P),r(u,"PRNG",f),f=f.normalized),u;function A(){return f.seed}function G(){return f.seedLength}function M(){return f.stateLength}function C(){return f.byteLength}function N(){return f.state}function E(S){f.state=S}function P(){var S={};return S.type="PRNG",S.name=u.NAME,S.state=d(f.state),h===void 0?S.params=[]:S.params=[h,R],S}function O(){return m(f,h,R)}function F(S,I){return g(S)||g(I)||I<=0?NaN:m(f,S,I)}}return f1=q,f1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var v1,k_;function dP(){if(k_)return v1;k_=1;var r=Q5(),e=r();return v1=e,v1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var l1,H_;function x5(){if(H_)return l1;H_=1;var r=D(),e=dP(),t=Q5();return r(e,"factory",t),l1=e,l1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var c1,U_;function yP(){if(U_)return c1;U_=1;var r=mr().isPrimitive,e=pr().isPrimitive,t=Y(),n=_r();function a(i,o){return!r(i)||n(i)?new TypeError(t("invalid argument. First argument must be a number and not NaN. Value: `%s`.",i)):e(o)?null:new TypeError(t("invalid argument. Second argument must be a positive number. Value: `%s`.",o))}return c1=a,c1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var g1,W_;function bP(){if(W_)return g1;W_=1;var r=Le();function e(t,n,a){return r(n+a*t())}return g1=e,g1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var m1,z_;function r8(){if(z_)return m1;z_=1;var r=D(),e=er(),t=nr(),n=tr(),a=ur(),i=rr(),o=ar(),s=or(),l=Qr().factory,g=Q(),d=ir(),p=Y(),b=yP(),m=bP();function q(){var v,f,u,c,h,R,A;if(arguments.length===0)f=l();else if(arguments.length===1){if(u=arguments[0],!n(u))throw new TypeError(p("invalid argument. Options argument must be an object. Value: `%s`.",u));if(i(u,"prng")){if(!a(u.prng))throw new TypeError(p("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",u.prng));f=l({prng:u.prng})}else f=l(u)}else{if(A=arguments[0],v=arguments[1],R=b(A,v),R)throw R;if(arguments.length>2){if(u=arguments[2],!n(u))throw new TypeError(p("invalid argument. Options argument must be an object. Value: `%s`.",u));if(i(u,"prng")){if(!a(u.prng))throw new TypeError(p("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",u.prng));f=l({prng:u.prng})}else f=l(u)}else f=l()}return A===void 0?h=S:h=F,c=f.PRNG,r(h,"NAME","lognormal"),u&&u.prng?(r(h,"seed",null),r(h,"seedLength",null),t(h,"state",o(null),s),r(h,"stateLength",null),r(h,"byteLength",null),r(h,"toJSON",o(null))):(e(h,"seed",G),e(h,"seedLength",M),t(h,"state",E,P),e(h,"stateLength",C),e(h,"byteLength",N),r(h,"toJSON",O)),r(h,"PRNG",c),h;function G(){return c.seed}function M(){return c.seedLength}function C(){return c.stateLength}function N(){return c.byteLength}function E(){return c.state}function P(I){c.state=I}function O(){var I={};return I.type="PRNG",I.name=h.NAME,I.state=d(c.state),A===void 0?I.params=[]:I.params=[A,v],I}function F(){return m(f,A,v)}function S(I,T){return g(I)||g(T)||T<=0?NaN:m(f,I,T)}}return m1=q,m1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var p1,D_;function $P(){if(D_)return p1;D_=1;var r=r8(),e=r();return p1=e,p1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var h1,J_;function e8(){if(J_)return h1;J_=1;var r=D(),e=$P(),t=r8();return r(e,"factory",t),h1=e,h1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var d1,X_;function t8(){if(X_)return d1;X_=1;var r=2147483647;return d1=r,d1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var y1,Y_;function n8(){if(Y_)return y1;Y_=1;var r=t8(),e=wr(),t=r-1;function n(){var a=e(1+t*Math.random());return a|0}return y1=n,y1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var b1,K_;function a8(){if(K_)return b1;K_=1;var r=D(),e=er(),t=nr(),n=rr(),a=tr(),i=Pr().isPrimitive,o=le(),s=Fe().isPrimitive,l=gm(),g=Y(),d=t8(),p=qe(),b=ce(),m=ir(),q=n8(),v=d-1|0,f=d-1|0,u=16807,c=1,h=2,R=2,A=4,G=5;function M(N,E){var P;return E?P="option":P="argument",N.length<G+1?new RangeError(g("invalid %s. State array has insufficient length.",P)):N[0]!==c?new RangeError(g("invalid %s. State array has an incompatible schema version. Expected: `%s`. Actual: `%s`.",P,c,N[0])):N[1]!==h?new RangeError(g("invalid %s. State array has an incompatible number of sections. Expected: `%s`. Actual: `%s`.",P,h,N[1])):N[R]!==1?new RangeError(g("invalid %s. State array has an incompatible state length. Expected: `%u`. Actual: `%u`.",P,1,N[R])):N[A]!==N.length-G?new RangeError(g("invalid %s. State array length is incompatible with seed section length. Expected: `%u`. Actual: `%u`.",P,N.length-G,N[A])):null}function C(N){var E,P,O,F,S,I;if(O={},arguments.length){if(!a(N))throw new TypeError(g("invalid argument. Options argument must be an object. Value: `%s`.",N));if(n(N,"copy")&&(O.copy=N.copy,!i(N.copy)))throw new TypeError(g("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",N.copy));if(n(N,"state")){if(P=N.state,O.state=!0,!l(P))throw new TypeError(g("invalid option. `%s` option must be an Int32Array. Option: `%s`.","state",P));if(I=M(P,!0),I)throw I;O.copy===!1?E=P:(E=new p(P.length),b(P.length,P,1,E,1)),P=new p(E.buffer,E.byteOffset+(R+1)*E.BYTES_PER_ELEMENT,1),F=new p(E.buffer,E.byteOffset+(A+1)*E.BYTES_PER_ELEMENT,P[A])}if(F===void 0)if(n(N,"seed"))if(F=N.seed,O.seed=!0,s(F)){if(F>f)throw new RangeError(g("invalid option. `%s` option must be a positive integer less than the maximum signed 32-bit integer. Option: `%u`.","seed",F));F|=0}else if(o(F)&&F.length>0)S=F.length,E=new p(G+S),E[0]=c,E[1]=h,E[R]=1,E[A]=S,b.ndarray(S,F,1,0,E,1,A+1),P=new p(E.buffer,E.byteOffset+(R+1)*E.BYTES_PER_ELEMENT,1),F=new p(E.buffer,E.byteOffset+(A+1)*E.BYTES_PER_ELEMENT,S),P[0]=F[0];else throw new TypeError(g("invalid option. `%s` option must be either a positive integer less than the maximum signed 32-bit integer or an array-like object containing integer values less than the maximum signed 32-bit integer. Option: `%s`.","seed",F));else F=q()|0}else F=q()|0;return P===void 0&&(E=new p(G+1),E[0]=c,E[1]=h,E[R]=1,E[A]=1,E[A+1]=F,P=new p(E.buffer,E.byteOffset+(R+1)*E.BYTES_PER_ELEMENT,1),F=new p(E.buffer,E.byteOffset+(A+1)*E.BYTES_PER_ELEMENT,1),P[0]=F[0]),r(w,"NAME","minstd"),e(w,"seed",T),e(w,"seedLength",z),t(w,"state",j,$),e(w,"stateLength",X),e(w,"byteLength",W),r(w,"toJSON",y),r(w,"MIN",1),r(w,"MAX",d-1),r(w,"normalized",L),r(L,"NAME",w.NAME),e(L,"seed",T),e(L,"seedLength",z),t(L,"state",j,$),e(L,"stateLength",X),e(L,"byteLength",W),r(L,"toJSON",y),r(L,"MIN",(w.MIN-1)/v),r(L,"MAX",(w.MAX-1)/v),w;function T(){var _=E[A];return b(_,F,1,new p(_),1)}function z(){return E[A]}function X(){return E.length}function W(){return E.byteLength}function j(){var _=E.length;return b(_,E,1,new p(_),1)}function $(_){var B;if(!l(_))throw new TypeError(g("invalid argument. Must provide an Int32Array. Value: `%s`.",_));if(B=M(_,!1),B)throw B;O.copy===!1?O.state&&_.length===E.length?b(_.length,_,1,E,1):(E=_,O.state=!0):(_.length!==E.length&&(E=new p(_.length)),b(_.length,_,1,E,1)),P=new p(E.buffer,E.byteOffset+(R+1)*E.BYTES_PER_ELEMENT,1),F=new p(E.buffer,E.byteOffset+(A+1)*E.BYTES_PER_ELEMENT,E[A])}function y(){var _={};return _.type="PRNG",_.name=w.NAME,_.state=m(E),_.params=[],_}function w(){var _=P[0]|0;return _=u*_%d|0,P[0]=_,_|0}function L(){return(w()-1)/v}}return b1=C,b1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $1,Z_;function qP(){if(Z_)return $1;Z_=1;var r=a8(),e=n8(),t=r({seed:e()});return $1=t,$1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var q1,Q_;function mt(){if(Q_)return q1;Q_=1;var r=D(),e=qP(),t=a8();return r(e,"factory",t),q1=e,q1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var w1,x_;function i8(){if(x_)return w1;x_=1;var r=2147483647;return w1=r,w1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _1,r6;function wP(){if(r6)return _1;r6=1;var r=Q(),e=8;function t(n,a,i){var o,s;for(s=0;s<e;s++)if(o=n(),r(o))throw new Error("unexpected error. PRNG returned NaN.");for(s=i-1;s>=0;s--)a[s]=n();return a}return _1=t,_1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var R1,e6;function u8(){if(e6)return R1;e6=1;var r=i8(),e=wr(),t=r-1;function n(){var a=e(1+t*Math.random());return a|0}return R1=n,R1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var E1,t6;function o8(){if(t6)return E1;t6=1;var r=D(),e=er(),t=nr(),n=rr(),a=tr(),i=Pr().isPrimitive,o=le(),s=Fe().isPrimitive,l=gm(),g=ce(),d=wr(),p=qe(),b=i8(),m=ir(),q=Y(),v=wP(),f=u8(),u=b-1|0,c=b-1|0,h=16807,R=32,A=1,G=3,M=2,C=R+3,N=R+6,E=R+7,P=C+1,O=C+2;function F(I,T){var z;return T?z="option":z="argument",I.length<E+1?new RangeError(q("invalid %s. State array has insufficient length.",z)):I[0]!==A?new RangeError(q("invalid %s. State array has an incompatible schema version. Expected: `%s`. Actual: `%s`.",z,A,I[0])):I[1]!==G?new RangeError(q("invalid %s. State array has an incompatible number of sections. Expected: `%s`. Actual: `%s`.",z,G,I[1])):I[M]!==R?new RangeError(q("invalid %s. State array has an incompatible table length. Expected: `%s`. Actual: `%s`.",z,R,I[M])):I[C]!==2?new RangeError(q("invalid %s. State array has an incompatible state length. Expected: `%u`. Actual: `%u`.",z,2,I[C])):I[N]!==I.length-E?new RangeError(q("invalid %s. State array length is incompatible with seed section length. Expected: `%u`. Actual: `%u`.",z,I.length-E,I[N])):null}function S(I){var T,z,X,W,j,$;if(X={},arguments.length){if(!a(I))throw new TypeError(q("invalid argument. Options argument must be an object. Value: `%s`.",I));if(n(I,"copy")&&(X.copy=I.copy,!i(I.copy)))throw new TypeError(q("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",I.copy));if(n(I,"state")){if(z=I.state,X.state=!0,!l(z))throw new TypeError(q("invalid option. `%s` option must be an Int32Array. Option: `%s`.","state",z));if($=F(z,!0),$)throw $;X.copy===!1?T=z:(T=new p(z.length),g(z.length,z,1,T,1)),z=new p(T.buffer,T.byteOffset+(M+1)*T.BYTES_PER_ELEMENT,R),W=new p(T.buffer,T.byteOffset+(N+1)*T.BYTES_PER_ELEMENT,z[N])}if(W===void 0)if(n(I,"seed"))if(W=I.seed,X.seed=!0,s(W)){if(W>c)throw new RangeError(q("invalid option. `%s` option must be a positive integer less than the maximum signed 32-bit integer. Option: `%u`.","seed",W));W|=0}else if(o(W)&&W.length>0)j=W.length,T=new p(E+j),T[0]=A,T[1]=G,T[M]=R,T[C]=2,T[O]=W[0],T[N]=j,g.ndarray(j,W,1,0,T,1,N+1),z=new p(T.buffer,T.byteOffset+(M+1)*T.BYTES_PER_ELEMENT,R),W=new p(T.buffer,T.byteOffset+(N+1)*T.BYTES_PER_ELEMENT,j),z=v(H,z,R),T[P]=z[0];else throw new TypeError(q("invalid option. `%s` option must be either a positive integer less than the maximum signed 32-bit integer or an array-like object containing integer values less than the maximum signed 32-bit integer. Option: `%s`.","seed",W));else W=f()|0}else W=f()|0;return z===void 0&&(T=new p(E+1),T[0]=A,T[1]=G,T[M]=R,T[C]=2,T[O]=W,T[N]=1,T[N+1]=W,z=new p(T.buffer,T.byteOffset+(M+1)*T.BYTES_PER_ELEMENT,R),W=new p(T.buffer,T.byteOffset+(N+1)*T.BYTES_PER_ELEMENT,1),z=v(H,z,R),T[P]=z[0]),r(K,"NAME","minstd-shuffle"),e(K,"seed",y),e(K,"seedLength",w),t(K,"state",B,k),e(K,"stateLength",L),e(K,"byteLength",_),r(K,"toJSON",Z),r(K,"MIN",1),r(K,"MAX",b-1),r(K,"normalized",U),r(U,"NAME",K.NAME),e(U,"seed",y),e(U,"seedLength",w),t(U,"state",B,k),e(U,"stateLength",L),e(U,"byteLength",_),r(U,"toJSON",Z),r(U,"MIN",(K.MIN-1)/u),r(U,"MAX",(K.MAX-1)/u),K;function y(){var V=T[N];return g(V,W,1,new p(V),1)}function w(){return T[N]}function L(){return T.length}function _(){return T.byteLength}function B(){var V=T.length;return g(V,T,1,new p(V),1)}function k(V){var J;if(!l(V))throw new TypeError(q("invalid argument. Must provide an Int32Array. Value: `%s`.",V));if(J=F(V,!1),J)throw J;X.copy===!1?X.state&&V.length===T.length?g(V.length,V,1,T,1):(T=V,X.state=!0):(V.length!==T.length&&(T=new p(V.length)),g(V.length,V,1,T,1)),z=new p(T.buffer,T.byteOffset+(M+1)*T.BYTES_PER_ELEMENT,R),W=new p(T.buffer,T.byteOffset+(N+1)*T.BYTES_PER_ELEMENT,T[N])}function Z(){var V={};return V.type="PRNG",V.name=K.NAME,V.state=m(T),V.params=[],V}function H(){var V=T[O]|0;return V=h*V%b|0,T[O]=V,V|0}function K(){var V,J;return V=T[P],J=d(R*(V/b)),V=z[J],T[P]=V,z[J]=H(),V}function U(){return(K()-1)/u}}return E1=S,E1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var L1,n6;function _P(){if(n6)return L1;n6=1;var r=o8(),e=u8(),t=r({seed:e()});return L1=t,L1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var O1,a6;function pt(){if(a6)return O1;a6=1;var r=D(),e=_P(),t=o8();return r(e,"factory",t),O1=e,O1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var N1,i6;function RP(){if(i6)return N1;i6=1;var r=Le();function e(t,n){for(var a=t(),i=1;a>r(-n);)i+=1,a*=t();return i-1}return N1=e,N1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var S1,u6;function EP(){if(u6)return S1;u6=1;var r=wr();function e(t){return r(t)===t&&t<0}return S1=e,S1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var T1,o6;function LP(){if(o6)return T1;o6=1;var r=EP();return T1=r,T1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var A1,s6;function OP(){if(s6)return A1;s6=1;function r(e){return e===0?.06735230105312927:.06735230105312927+e*(.007385550860814029+e*(.0011927076318336207+e*(.00022086279071390839+e*25214456545125733e-21)))}return A1=r,A1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var M1,f6;function NP(){if(f6)return M1;f6=1;function r(e){return e===0?.020580808432516733:.020580808432516733+e*(.0028905138367341563+e*(.0005100697921535113+e*(.00010801156724758394+e*44864094961891516e-21)))}return M1=r,M1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var P1,v6;function SP(){if(v6)return P1;v6=1;function r(e){return e===0?1.3920053346762105:1.3920053346762105+e*(.7219355475671381+e*(.17193386563280308+e*(.01864591917156529+e*(.0007779424963818936+e*7326684307446256e-21))))}return P1=r,P1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var I1,l6;function TP(){if(l6)return I1;l6=1;function r(e){return e===0?.21498241596060885:.21498241596060885+e*(.325778796408931+e*(.14635047265246445+e*(.02664227030336386+e*(.0018402845140733772+e*3194753265841009e-20))))}return I1=r,I1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var F1,c6;function AP(){if(c6)return F1;c6=1;function r(e){return e===0?-.032788541075985965:-.032788541075985965+e*(.006100538702462913+e*(-.0014034646998923284+e*.00031563207090362595))}return F1=r,F1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var j1,g6;function MP(){if(g6)return j1;g6=1;function r(e){return e===0?.01797067508118204:.01797067508118204+e*(-.0036845201678113826+e*(.000881081882437654+e*-.00031275416837512086))}return j1=r,j1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var V1,m6;function PP(){if(m6)return V1;m6=1;function r(e){return e===0?-.010314224129834144:-.010314224129834144+e*(.0022596478090061247+e*(-.0005385953053567405+e*.0003355291926355191))}return V1=r,V1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var G1,p6;function IP(){if(p6)return G1;p6=1;function r(e){return e===0?.6328270640250934:.6328270640250934+e*(1.4549225013723477+e*(.9777175279633727+e*(.22896372806469245+e*.013381091853678766)))}return G1=r,G1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var C1,h6;function FP(){if(h6)return C1;h6=1;function r(e){return e===0?2.4559779371304113:2.4559779371304113+e*(2.128489763798934+e*(.7692851504566728+e*(.10422264559336913+e*.003217092422824239)))}return C1=r,C1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var B1,d6;function jP(){if(d6)return B1;d6=1;function r(e){return e===0?.08333333333333297:.08333333333333297+e*(-.0027777777772877554+e*(.0007936505586430196+e*(-.00059518755745034+e*(.0008363399189962821+e*-.0016309293409657527))))}return B1=r,B1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright, license, and long comment were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/e_lgamma_r.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 1993 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var k1,y6;function VP(){if(y6)return k1;y6=1;var r=Q(),e=Ve(),t=Yr(),n=dr(),a=r5(),i=Fm(),o=ge(),s=Nr(),l=OP(),g=NP(),d=SP(),p=TP(),b=AP(),m=MP(),q=PP(),v=IP(),f=FP(),u=jP(),c=.07721566490153287,h=.3224670334241136,R=1,A=-.07721566490153287,G=.48383612272381005,M=-.1475877229945939,C=.06462494023913339,N=-.07721566490153287,E=1,P=.4189385332046727,O=1.4616321449683622,F=4503599627370496,S=0x400000000000000,I=8470329472543003e-37,T=1.4616321449683622,z=-.12148629053584961,X=-3638676997039505e-33;function W(j){var $,y,w,L,_,B,k,Z,H,K,U,V,J;if(r(j)||e(j))return j;if(j===0)return s;if(j<0?($=!0,j=-j):$=!1,j<I)return-n(j);if($){if(j>=F||(H=i(j),H===0))return s;y=n(o/t(H*j))}if(j===1||j===2)return 0;if(j<2)switch(j<=.9?(J=-n(j),j>=O-1+.27?(U=1-j,w=0):j>=O-1-.27?(U=j-(T-1),w=1):(U=j,w=2)):(J=0,j>=O+.27?(U=2-j,w=0):j>=O-.27?(U=j-T,w=1):(U=j-1,w=2)),w){case 0:V=U*U,B=c+V*l(V),_=V*(h+V*g(V)),k=U*B+_,J+=k-.5*U;break;case 1:V=U*U,K=V*U,B=G+K*b(K),_=M+K*m(K),L=C+K*q(K),k=V*B-(X-K*(_+U*L)),J+=z+k;break;case 2:B=U*(N+U*v(U)),_=E+U*f(U),J+=-.5*U+B/_;break}else if(j<8)switch(w=a(j),U=j-w,k=U*(A+U*p(U)),Z=R+U*d(U),J=.5*U+k/Z,V=1,w){case 7:V*=U+6;case 6:V*=U+5;case 5:V*=U+4;case 4:V*=U+3;case 3:V*=U+2,J+=n(V)}else j<S?(H=n(j),V=1/j,U=V*V,K=P+V*u(U),J=(j-.5)*(H-1)+K):J=j*(n(j)-1);return $&&(J=y-J),J}return k1=W,k1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var H1,b6;function GP(){if(b6)return H1;b6=1;var r=VP();return H1=r,H1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var U1,$6;function CP(){if($6)return U1;$6=1;var r=LP(),e=GP();function t(n){return r(n)?NaN:e(n+1)}return U1=t,U1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var W1,q6;function BP(){if(q6)return W1;q6=1;var r=CP();return W1=r,W1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var z1,w6;function kP(){if(w6)return z1;w6=1;var r=.9189385332046728;return z1=r,z1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var D1,_6;function HP(){if(_6)return D1;_6=1;var r=BP(),e=wr(),t=Pm(),n=Rr(),a=Yr(),i=dr(),o=kP(),s=1/12,l=1/360;function g(d,p){var b,m,q,v,f,u,c,h,R,A;for(b=n(p),c=2.53*b+.931,u=.02483*c-.059,m=1.1328/(c-3.4)+1.1239,f=-3.6224/(c-2)+.9277,q=.86*f;;){if(A=d(),A<=q)return R=A/f-.43,R*=2*u/(.5-a(R))+c,R+=p+.445,e(R);if(A>=f?R=d()-.5:(R=A/f-.93,R=t(R)*.5-R,A=f*d()),v=.5-a(R),(v>=.013||v>=A)&&(h=e((2*u/v+c)*R+p+.445),A*=m/(u/(v*v)+c),R=(h+.5)*i(p/h),R+=-p-o+h,R-=(s-l/(h*h))/h,h>=10&&R>=i(A*b)||(R=h*i(p)-p-r(h),h>=0&&h<=9&&R>=i(A))))return h}}return D1=g,D1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var J1,R6;function UP(){if(R6)return J1;R6=1;var r=RP(),e=HP();function t(n,a){return a<30?r(n,a):e(n,a)}return J1=t,J1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var X1,E6;function s8(){if(E6)return X1;E6=1;var r=D(),e=er(),t=nr(),n=pr().isPrimitive,a=tr(),i=ur(),o=rr(),s=ar(),l=or(),g=lr().factory,d=Q(),p=ir(),b=Y(),m=UP();function q(){var v,f,u,c;if(arguments.length===0)u=g();else if(arguments.length===1&&a(arguments[0]))if(f=arguments[0],o(f,"prng")){if(!i(f.prng))throw new TypeError(b("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",f.prng));u=f.prng}else u=g(f);else{if(v=arguments[0],!n(v))throw new TypeError(b("invalid argument. First argument must be a positive number. Value: `%s`.",v));if(arguments.length>1){if(f=arguments[1],!a(f))throw new TypeError(b("invalid argument. Options argument must be an object. Value: `%s`.",f));if(o(f,"prng")){if(!i(f.prng))throw new TypeError(b("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",f.prng));u=f.prng}else u=g(f)}else u=g()}return v===void 0?c=P:c=E,r(c,"NAME","poisson"),f&&f.prng?(r(c,"seed",null),r(c,"seedLength",null),t(c,"state",s(null),l),r(c,"stateLength",null),r(c,"byteLength",null),r(c,"toJSON",s(null)),r(c,"PRNG",u)):(e(c,"seed",h),e(c,"seedLength",R),t(c,"state",M,C),e(c,"stateLength",A),e(c,"byteLength",G),r(c,"toJSON",N),r(c,"PRNG",u),u=u.normalized),c;function h(){return u.seed}function R(){return u.seedLength}function A(){return u.stateLength}function G(){return u.byteLength}function M(){return u.state}function C(O){u.state=O}function N(){var O={};return O.type="PRNG",O.name=c.NAME,O.state=p(u.state),v===void 0?O.params=[]:O.params=[v],O}function E(){return m(u,v)}function P(O){return d(O)||O<=0?NaN:m(u,O)}}return X1=q,X1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Y1,L6;function WP(){if(L6)return Y1;L6=1;var r=s8(),e=r();return Y1=e,Y1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var K1,O6;function jm(){if(O6)return K1;O6=1;var r=D(),e=WP(),t=s8();return r(e,"factory",t),K1=e,K1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Z1,N6;function zP(){if(N6)return Z1;N6=1;var r=pr().isPrimitive,e=mr().isPrimitive,t=Y(),n=_r();function a(i,o){return r(i)?!e(o)||n(o)?new TypeError(t("invalid argument. Second argument must be a number and not NaN. Value: `%s`.",o)):o<=0||o>=1?new RangeError(t("invalid argument. Second argument must be on the interval: (0, 1). Value: `%f`.",o)):null:new TypeError(t("invalid argument. First argument must be a positive number. Value: `%s`.",i))}return Z1=a,Z1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Q1,S6;function f8(){if(S6)return Q1;S6=1;var r=D(),e=er(),t=nr(),n=rr(),a=tr(),i=ie(),o=Pr().isPrimitive,s=ur(),l=ar(),g=or(),d=Q(),p=jm().factory,b=Oe().factory,m=ce(),q=Sr(),v=ct(),f=ir(),u=Y(),c=zP();function h(){var R,A,G,M,C,N,E,P,O,F;if(E=!0,arguments.length===0)M={copy:!1},G=p(M);else if(arguments.length===1){if(M=arguments[0],!a(M))throw new TypeError(u("invalid argument. Options argument must be an object. Value: `%s`.",M));if(n(M,"copy")&&!o(M.copy))throw new TypeError(u("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",M.copy));if(n(M,"prng")){if(!s(M.prng))throw new TypeError(u("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",M.prng));G=p({prng:M.prng})}else{if(n(M,"state")&&!i(M.state))throw new TypeError(u("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",M.state));M=v({},M),M.copy===!1?E=!1:M.state&&(M.state=m(M.state.length,M.state,1,new q(M.state.length),1)),M.copy=!1,G=p(M)}}else{if(F=arguments[0],O=arguments[1],P=c(F,O),P)throw P;if(arguments.length>2){if(M=arguments[2],!a(M))throw new TypeError(u("invalid argument. Options argument must be an object. Value: `%s`.",M));if(n(M,"copy")&&!o(M.copy))throw new TypeError(u("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",M.copy));if(n(M,"prng")){if(!s(M.prng))throw new TypeError(u("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",M.prng));G=p({prng:M.prng})}else{if(n(M,"state")&&!i(M.state))throw new TypeError(u("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",M.state));M=v({},M),M.copy===!1?E=!1:M.state&&(M.state=m(M.state.length,M.state,1,new q(M.state.length),1)),M.copy=!1,G=p(M)}}else M={copy:!1},G=p(M)}return M&&M.prng?F===void 0?R=b({prng:M.prng}):R=b(F,O/(1-O),{prng:M.prng}):(M.state?A=M.state:(A=G.state,G.state=A),F===void 0?R=b({state:A,copy:!1}):R=b(F,O/(1-O),{state:A,copy:!1})),F===void 0?C=y:C=$,N=G.PRNG,r(C,"NAME","negative-binomial"),M&&M.prng?(r(C,"seed",null),r(C,"seedLength",null),t(C,"state",l(null),g),r(C,"stateLength",null),r(C,"byteLength",null),r(C,"toJSON",l(null))):(e(C,"seed",S),e(C,"seedLength",I),t(C,"state",X,W),e(C,"stateLength",T),e(C,"byteLength",z),r(C,"toJSON",j)),r(C,"PRNG",N),C;function S(){return N.seed}function I(){return N.seedLength}function T(){return N.stateLength}function z(){return N.byteLength}function X(){return N.state}function W(w){if(!i(w))throw new TypeError(u("invalid argument. Must provide a Uint32Array. Value: `%s`.",w));E&&(w=m(w.length,w,1,new q(w.length),1)),N.state=w}function j(){var w={};return w.type="PRNG",w.name=C.NAME,w.state=f(N.state),F===void 0?w.params=[]:w.params=[F,O],w}function $(){return G(R())}function y(w,L){return d(w)||d(L)||L<=0||L>=1?NaN:G(R(w,L/(1-L)))}}return Q1=h,Q1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var x1,T6;function DP(){if(T6)return x1;T6=1;var r=f8(),e=r();return x1=e,x1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var rg,A6;function v8(){if(A6)return rg;A6=1;var r=D(),e=DP(),t=f8();return r(e,"factory",t),rg=e,rg}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var eg,M6;function JP(){if(M6)return eg;M6=1;var r=mr().isPrimitive,e=pr().isPrimitive,t=Y(),n=_r();function a(i,o){return!r(i)||n(i)?new TypeError(t("invalid argument. First argument must be a number and not NaN. Value: `%s`.",i)):e(o)?null:new TypeError(t("invalid argument. Second argument must be a positive number. Value: `%s`.",o))}return eg=a,eg}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var tg,P6;function XP(){if(P6)return tg;P6=1;function r(e,t,n){return t+n*e()}return tg=r,tg}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ng,I6;function l8(){if(I6)return ng;I6=1;var r=D(),e=er(),t=nr(),n=tr(),a=ur(),i=rr(),o=ar(),s=or(),l=Qr().factory,g=Q(),d=ir(),p=Y(),b=JP(),m=XP();function q(){var v,f,u,c,h,R,A;if(arguments.length===0)f=l();else if(arguments.length===1){if(u=arguments[0],!n(u))throw new TypeError(p("invalid argument. Options argument must be an object. Value: `%s`.",u));if(i(u,"prng")){if(!a(u.prng))throw new TypeError(p("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",u.prng));f=l({prng:u.prng})}else f=l(u)}else{if(A=arguments[0],v=arguments[1],R=b(A,v),R)throw R;if(arguments.length>2){if(u=arguments[2],!n(u))throw new TypeError(p("invalid argument. Options argument must be an object. Value: `%s`.",u));if(i(u,"prng")){if(!a(u.prng))throw new TypeError(p("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",u.prng));f=l({prng:u.prng})}else f=l(u)}else f=l()}return A===void 0?h=S:h=F,c=f.PRNG,r(h,"NAME","normal"),u&&u.prng?(r(h,"seed",null),r(h,"seedLength",null),t(h,"state",o(null),s),r(h,"stateLength",null),r(h,"byteLength",null),r(h,"toJSON",o(null))):(e(h,"seed",G),e(h,"seedLength",M),t(h,"state",E,P),e(h,"stateLength",C),e(h,"byteLength",N),r(h,"toJSON",O)),r(h,"PRNG",c),h;function G(){return c.seed}function M(){return c.seedLength}function C(){return c.stateLength}function N(){return c.byteLength}function E(){return c.state}function P(I){c.state=I}function O(){var I={};return I.type="PRNG",I.name=h.NAME,I.state=d(c.state),A===void 0?I.params=[]:I.params=[A,v],I}function F(){return m(f,A,v)}function S(I,T){return g(I)||g(T)||T<=0?NaN:m(f,I,T)}}return ng=q,ng}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ag,F6;function YP(){if(F6)return ag;F6=1;var r=l8(),e=r();return ag=e,ag}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ig,j6;function c8(){if(j6)return ig;j6=1;var r=D(),e=YP(),t=l8();return r(e,"factory",t),ig=e,ig}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ug,V6;function KP(){if(V6)return ug;V6=1;var r=pr().isPrimitive,e=Y();function t(n,a){return r(n)?r(a)?null:new TypeError(e("invalid argument. Second argument must be a positive number. Value: `%s`.",a)):new TypeError(e("invalid argument. First argument must be a positive number. Value: `%s`.",n))}return ug=t,ug}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var og,G6;function ZP(){if(G6)return og;G6=1;var r=Gr();function e(t,n,a){return a/r(t(),1/n)}return og=e,og}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var sg,C6;function g8(){if(C6)return sg;C6=1;var r=D(),e=er(),t=nr(),n=tr(),a=ur(),i=rr(),o=ar(),s=or(),l=lr().factory,g=Q(),d=ir(),p=Y(),b=KP(),m=ZP();function q(){var v,f,u,c,h,R;if(arguments.length===0)c=l();else if(arguments.length===1){if(u=arguments[0],!n(u))throw new TypeError(p("invalid argument. Options argument must be an object. Value: `%s`.",u));if(i(u,"prng")){if(!a(u.prng))throw new TypeError(p("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",u.prng));c=u.prng}else c=l(u)}else{if(v=arguments[0],f=arguments[1],R=b(v,f),R)throw R;if(arguments.length>2){if(u=arguments[2],!n(u))throw new TypeError(p("invalid argument. Options argument must be an object. Value: `%s`.",u));if(i(u,"prng")){if(!a(u.prng))throw new TypeError(p("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",u.prng));c=u.prng}else c=l(u)}else c=l()}return v===void 0?h=F:h=O,r(h,"NAME","pareto-type1"),u&&u.prng?(r(h,"seed",null),r(h,"seedLength",null),t(h,"state",o(null),s),r(h,"stateLength",null),r(h,"byteLength",null),r(h,"toJSON",o(null)),r(h,"PRNG",c)):(e(h,"seed",A),e(h,"seedLength",G),t(h,"state",N,E),e(h,"stateLength",M),e(h,"byteLength",C),r(h,"toJSON",P),r(h,"PRNG",c),c=c.normalized),h;function A(){return c.seed}function G(){return c.seedLength}function M(){return c.stateLength}function C(){return c.byteLength}function N(){return c.state}function E(S){c.state=S}function P(){var S={};return S.type="PRNG",S.name=h.NAME,S.state=d(c.state),v===void 0?S.params=[]:S.params=[v,f],S}function O(){return m(c,v,f)}function F(S,I){return g(S)||g(I)||S<=0||I<=0?NaN:m(c,S,I)}}return sg=q,sg}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fg,B6;function QP(){if(B6)return fg;B6=1;var r=g8(),e=r();return fg=e,fg}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vg,k6;function m8(){if(k6)return vg;k6=1;var r=D(),e=QP(),t=g8();return r(e,"factory",t),vg=e,vg}const xP="mt19937",rI=!0,eI={name:xP,copy:rI};/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var lg,H6;function tI(){if(H6)return lg;H6=1;var r=mt(),e=pt(),t=lr(),n={};return n.minstd=r,n["minstd-shuffle"]=e,n.mt19937=t,lg=n,lg}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var cg,U6;function p8(){if(U6)return cg;U6=1;var r=D(),e=er(),t=nr(),n=tr(),a=Pr().isPrimitive,i=rr(),o=ir(),s=Y(),l=eI,g=tI();function d(p){var b,m,q;if(b={name:l.name,copy:l.copy},arguments.length){if(!n(p))throw new TypeError(s("invalid argument. Must provide an object. Value: `%s`.",p));if(i(p,"name")&&(b.name=p.name),i(p,"state")){if(b.state=p.state,b.state===void 0)throw new TypeError(s("invalid option. `%s` option cannot be undefined. Option: `%s`.","state",b.state))}else if(i(p,"seed")&&(b.seed=p.seed,b.seed===void 0))throw new TypeError(s("invalid option. `%s` option cannot be undefined. Option: `%s`.","seed",b.seed));if(i(p,"copy")&&(b.copy=p.copy,!a(b.copy)))throw new TypeError(s("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",b.copy))}if(q=g[b.name],q===void 0)throw new Error(s("invalid option. Unrecognized/unsupported PRNG. Option: `%s`.",b.name));return b.state===void 0?b.seed===void 0?m=q.factory():m=q.factory({seed:b.seed}):m=q.factory({state:b.state,copy:b.copy}),r(G,"NAME","randi"),e(G,"seed",v),e(G,"seedLength",f),t(G,"state",h,R),e(G,"stateLength",u),e(G,"byteLength",c),r(G,"toJSON",A),r(G,"PRNG",m),r(G,"MIN",m.MIN),r(G,"MAX",m.MAX),G;function v(){return m.seed}function f(){return m.seedLength}function u(){return m.stateLength}function c(){return m.byteLength}function h(){return m.state}function R(M){m.state=M}function A(){var M={};return M.type="PRNG",M.name=G.NAME+"-"+m.NAME,M.state=o(m.state),M.params=[],M}function G(){return m()}}return cg=d,cg}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gg,W6;function nI(){if(W6)return gg;W6=1;var r=p8(),e=r();return gg=e,gg}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var mg,z6;function h8(){if(z6)return mg;z6=1;var r=D(),e=nI(),t=p8();return r(e,"factory",t),mg=e,mg}const aI="improved-ziggurat",iI=!0,uI={name:aI,copy:iI};/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pg,D6;function oI(){if(D6)return pg;D6=1;var r=Im(),e=Qr(),t={};return t["box-muller"]=r,t["improved-ziggurat"]=e,pg=t,pg}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var hg,J6;function d8(){if(J6)return hg;J6=1;var r=D(),e=er(),t=nr(),n=tr(),a=Pr().isPrimitive,i=rr(),o=ar(),s=Y(),l=or(),g=ir(),d=uI,p=oI();function b(m){var q,v,f;if(q={name:d.name,copy:d.copy},arguments.length){if(!n(m))throw new TypeError(s("invalid argument. Must provide an object. Value: `%s`.",m));if(i(m,"name")&&(q.name=m.name),i(m,"prng")){if(q.prng=m.prng,q.prng===void 0)throw new TypeError(s("invalid option. `%s` option cannot be undefined. Option: `%s`.","prng",q.prng))}else if(i(m,"state")){if(q.state=m.state,q.state===void 0)throw new TypeError(s("invalid option. `%s` option cannot be undefined. Option: `%s`.","state",q.state))}else if(i(m,"seed")&&(q.seed=m.seed,q.seed===void 0))throw new TypeError(s("invalid option. `%s` option cannot be undefined. Option: `%s`.","seed",q.seed));if(i(m,"copy")&&(q.copy=m.copy,!a(q.copy)))throw new TypeError(s("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",q.copy))}if(f=p[q.name],f===void 0)throw new Error(s("invalid option. Unrecognized/unsupported PRNG. Option: `%s`.",q.name));return q.prng===void 0?q.state===void 0?q.seed===void 0?v=f.factory():v=f.factory({seed:q.seed}):v=f.factory({state:q.state,copy:q.copy}):v=f.factory({prng:q.prng}),r(C,"NAME","randn"),q.prng?(r(C,"seed",null),r(C,"seedLength",null),t(C,"state",o(null),l),r(C,"stateLength",null),r(C,"byteLength",null),r(C,"toJSON",o(null))):(e(C,"seed",u),e(C,"seedLength",c),t(C,"state",A,G),e(C,"stateLength",h),e(C,"byteLength",R),r(C,"toJSON",M)),r(C,"PRNG",v.PRNG),C;function u(){return v.seed}function c(){return v.seedLength}function h(){return v.stateLength}function R(){return v.byteLength}function A(){return v.state}function G(N){v.state=N}function M(){var N={};return N.type="PRNG",N.name=C.NAME+"-"+v.NAME,N.state=g(v.state),N.params=[],N}function C(){return v()}}return hg=b,hg}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var dg,X6;function sI(){if(X6)return dg;X6=1;var r=d8(),e=r();return dg=e,dg}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var yg,Y6;function y8(){if(Y6)return yg;Y6=1;var r=D(),e=sI(),t=d8();return r(e,"factory",t),yg=e,yg}const fI="mt19937",vI=!0,lI={name:fI,copy:vI};/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var bg,K6;function cI(){if(K6)return bg;K6=1;var r=mt(),e=pt(),t=lr(),n={};return n.minstd=r,n["minstd-shuffle"]=e,n.mt19937=t,bg=n,bg}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $g,Z6;function b8(){if(Z6)return $g;Z6=1;var r=D(),e=er(),t=nr(),n=tr(),a=Pr().isPrimitive,i=rr(),o=ir(),s=Y(),l=lI,g=cI();function d(p){var b,m,q;if(b={name:l.name,copy:l.copy},arguments.length){if(!n(p))throw new TypeError(s("invalid argument. Must provide an object. Value: `%s`.",p));if(i(p,"name")&&(b.name=p.name),i(p,"state")){if(b.state=p.state,b.state===void 0)throw new TypeError(s("invalid option. `%s` option cannot be undefined. Option: `%s`.","state",b.state))}else if(i(p,"seed")&&(b.seed=p.seed,b.seed===void 0))throw new TypeError(s("invalid option. `%s` option cannot be undefined. Option: `%s`.","seed",b.seed));if(i(p,"copy")&&(b.copy=p.copy,!a(b.copy)))throw new TypeError(s("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",b.copy))}if(q=g[b.name],q===void 0)throw new Error(s("invalid option. Unrecognized/unsupported PRNG. Option: `%s`.",b.name));return b.state===void 0?b.seed===void 0?m=q.factory():m=q.factory({seed:b.seed}):m=q.factory({state:b.state,copy:b.copy}),r(G,"NAME","randu"),e(G,"seed",v),e(G,"seedLength",f),t(G,"state",h,R),e(G,"stateLength",u),e(G,"byteLength",c),r(G,"toJSON",A),r(G,"PRNG",m),r(G,"MIN",m.normalized.MIN),r(G,"MAX",m.normalized.MAX),G;function v(){return m.seed}function f(){return m.seedLength}function u(){return m.stateLength}function c(){return m.byteLength}function h(){return m.state}function R(M){m.state=M}function A(){var M={};return M.type="PRNG",M.name=G.NAME+"-"+m.NAME,M.state=o(m.state),M.params=[],M}function G(){return m.normalized()}}return $g=d,$g}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var qg,Q6;function gI(){if(Q6)return qg;Q6=1;var r=b8(),e=r();return qg=e,qg}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wg,x6;function $8(){if(x6)return wg;x6=1;var r=D(),e=gI(),t=b8();return r(e,"factory",t),wg=e,wg}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _g,rR;function mI(){if(rR)return _g;rR=1;var r=Rr(),e=dr();function t(n,a){return a*r(-2*e(n()))}return _g=t,_g}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Rg,eR;function q8(){if(eR)return Rg;eR=1;var r=D(),e=er(),t=nr(),n=pr().isPrimitive,a=tr(),i=ur(),o=rr(),s=ar(),l=or(),g=lr().factory,d=Q(),p=ir(),b=Y(),m=mI();function q(){var v,f,u,c;if(arguments.length===0)u=g();else if(arguments.length===1&&a(arguments[0]))if(f=arguments[0],o(f,"prng")){if(!i(f.prng))throw new TypeError(b("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",f.prng));u=f.prng}else u=g(f);else{if(v=arguments[0],!n(v))throw new TypeError(b("invalid argument. First argument must be a positive number. Value: `%s`.",v));if(arguments.length>1){if(f=arguments[1],!a(f))throw new TypeError(b("invalid argument. Options argument must be an object. Value: `%s`.",f));if(o(f,"prng")){if(!i(f.prng))throw new TypeError(b("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",f.prng));u=f.prng}else u=g(f)}else u=g()}return v===void 0?c=P:c=E,r(c,"NAME","rayleigh"),f&&f.prng?(r(c,"seed",null),r(c,"seedLength",null),t(c,"state",s(null),l),r(c,"stateLength",null),r(c,"byteLength",null),r(c,"toJSON",s(null)),r(c,"PRNG",u)):(e(c,"seed",h),e(c,"seedLength",R),t(c,"state",M,C),e(c,"stateLength",A),e(c,"byteLength",G),r(c,"toJSON",N),r(c,"PRNG",u),u=u.normalized),c;function h(){return u.seed}function R(){return u.seedLength}function A(){return u.stateLength}function G(){return u.byteLength}function M(){return u.state}function C(O){u.state=O}function N(){var O={};return O.type="PRNG",O.name=c.NAME,O.state=p(u.state),v===void 0?O.params=[]:O.params=[v],O}function E(){return m(u,v)}function P(O){return d(O)||O<=0?NaN:m(u,O)}}return Rg=q,Rg}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Eg,tR;function pI(){if(tR)return Eg;tR=1;var r=q8(),e=r();return Eg=e,Eg}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Lg,nR;function w8(){if(nR)return Lg;nR=1;var r=D(),e=pI(),t=q8();return r(e,"factory",t),Lg=e,Lg}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Og,aR;function hI(){if(aR)return Og;aR=1;var r=le(),e=ue().isPrimitive,t=_e().isPrimitive,n=_r().isPrimitive,a=Y();function i(o,s,l){var g,d,p;if(!r(o)&&!t(o))throw new TypeError(a("invalid argument. First argument must be array-like. Value: `%s`.",o));if(arguments.length<2)throw new Error("insufficient arguments. Must provide a search value.");if(arguments.length>2){if(!e(l))throw new TypeError(a("invalid argument. Third argument must be an integer. Value: `%s`.",l));d=l,d<0&&(d=0)}else d=0;if(t(o)){if(!t(s))throw new TypeError(a("invalid argument. Second argument must be a string. Value: `%s`.",s));return o.indexOf(s,d)!==-1}if(g=o.length,n(s)){for(p=d;p<g;p++)if(n(o[p]))return!0;return!1}for(p=d;p<g;p++)if(o[p]===s)return!0;return!1}return Og=i,Og}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ng,iR;function dI(){if(iR)return Ng;iR=1;var r=hI();return Ng=r,Ng}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Sg,uR;function _8(){if(uR)return Sg;uR=1;var r=D(),e=er(),t=nr(),n=rr(),a=pr().isPrimitive,i=tr(),o=ie(),s=Pr().isPrimitive,l=Q(),g=ur(),d=ar(),p=or(),b=Be().factory,m=Qr().factory,q=ce(),v=Sr(),f=ct(),u=ir(),c=Y(),h=Rr();function R(){var A,G,M,C,N,E,P,O;if(P=!0,arguments.length===0)N={copy:!1},M=m(N);else if(arguments.length===1)if(i(arguments[0])){if(N=arguments[0],n(N,"copy")&&!s(N.copy))throw new TypeError(c("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",N.copy));if(n(N,"prng")){if(!g(N.prng))throw new TypeError(c("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",N.prng));M=m({prng:N.prng})}else{if(n(N,"state")&&!o(N.state))throw new TypeError(c("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",N.state));N=f({},N),N.copy===!1?P=!1:N.state&&(N.state=q(N.state.length,N.state,1,new v(N.state.length),1)),N.copy=!1,M=m(N)}}else{if(O=arguments[0],!a(O))throw new TypeError(c("invalid argument. First argument must be a positive number or an options object. Value: `%s`.",O));N={copy:!1},M=m(N)}else{if(O=arguments[0],!a(O))throw new TypeError(c("invalid argument. First argument must be a positive number. Value: `%s`.",O));if(N=arguments[1],!i(N))throw new TypeError(c("invalid argument. Options argument must be an object. Value: `%s`.",N));if(n(N,"copy")&&!s(N.copy))throw new TypeError(c("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",N.copy));if(n(N,"prng")){if(!g(N.prng))throw new TypeError(c("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",N.prng));M=m({prng:N.prng})}else{if(n(N,"state")&&!o(N.state))throw new TypeError(c("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",N.state));N=f({},N),N.copy===!1?P=!1:N.state&&(N.state=q(N.state.length,N.state,1,new v(N.state.length),1)),N.copy=!1,M=m(N)}}return N&&N.prng?O===void 0?A=b({prng:N.prng}):A=b(O,{prng:N.prng}):(N.state?G=N.state:(G=M.state,M.state=G),O===void 0?A=b({state:G,copy:!1}):A=b(O,{state:G,copy:!1})),O===void 0?E=$:E=j,C=M.PRNG,r(E,"NAME","t"),N&&N.prng?(r(E,"seed",null),r(E,"seedLength",null),t(E,"state",d(null),p),r(E,"stateLength",null),r(E,"byteLength",null),r(E,"toJSON",d(null))):(e(E,"seed",F),e(E,"seedLength",S),t(E,"state",z,X),e(E,"stateLength",I),e(E,"byteLength",T),r(E,"toJSON",W)),r(E,"PRNG",C),E;function F(){return C.seed}function S(){return C.seedLength}function I(){return C.stateLength}function T(){return C.byteLength}function z(){return C.state}function X(y){if(!o(y))throw new TypeError(c("invalid argument. Must provide a Uint32Array. Value: `%s`.",y));P&&(y=q(y.length,y,1,new v(y.length),1)),C.state=y}function W(){var y={};return y.type="PRNG",y.name=E.NAME,y.state=u(C.state),O===void 0?y.params=[]:y.params=[O],y}function j(){return M()/h(A()/O)}function $(y){return l(y)||y<=0?NaN:M()/h(A(y)/y)}}return Sg=R,Sg}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Tg,oR;function yI(){if(oR)return Tg;oR=1;var r=_8(),e=r();return Tg=e,Tg}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ag,sR;function R8(){if(sR)return Ag;sR=1;var r=D(),e=yI(),t=_8();return r(e,"factory",t),Ag=e,Ag}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Mg,fR;function bI(){if(fR)return Mg;fR=1;var r=mr().isPrimitive,e=Y(),t=_r();function n(a,i,o){return!r(a)||t(a)?new TypeError(e("invalid argument. First argument must be a number and not NaN. Value: `%s`.",a)):!r(i)||t(i)?new TypeError(e("invalid argument. Second argument must be a number and not NaN. Value: `%s`.",i)):!r(o)||t(o)?new TypeError(e("invalid argument. Third argument must be a number and not NaN. Value: `%s`.",o)):a<=o&&o<=i?null:new RangeError(e("invalid arguments. Parameters must satisfy the following condition: %s. a: `%f`. b: `%f`. c: `%f`.","a <= c <= b",a,i,o))}return Mg=n,Mg}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Pg,vR;function $I(){if(vR)return Pg;vR=1;var r=Rr();function e(t,n,a,i){var o,s,l;return o=(i-n)/(a-n),l=t(),l<o?(s=(a-n)*(i-n),n+r(s*l)):(s=(a-n)*(a-i),a-r(s*(1-l)))}return Pg=e,Pg}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ig,lR;function E8(){if(lR)return Ig;lR=1;var r=D(),e=er(),t=nr(),n=tr(),a=ur(),i=rr(),o=ar(),s=or(),l=lr().factory,g=Q(),d=ir(),p=Y(),b=bI(),m=$I();function q(){var v,f,u,c,h,R,A;if(arguments.length===0)f=l();else if(arguments.length===1){if(v=arguments[0],!n(v))throw new TypeError(p("invalid argument. Options argument must be an object. Value: `%s`.",v));if(i(v,"prng")){if(!a(v.prng))throw new TypeError(p("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",v.prng));f=v.prng}else f=l(v)}else{if(h=arguments[0],R=arguments[1],A=arguments[2],c=b(h,R,A),c)throw c;if(arguments.length>3){if(v=arguments[3],!n(v))throw new TypeError(p("invalid argument. Options argument must be an object. Value: `%s`.",v));if(i(v,"prng")){if(!a(v.prng))throw new TypeError(p("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",v.prng));f=v.prng}else f=l(v)}else f=l()}return h===void 0?u=S:u=F,r(u,"NAME","triangular"),v&&v.prng?(r(u,"seed",null),r(u,"seedLength",null),t(u,"state",o(null),s),r(u,"stateLength",null),r(u,"byteLength",null),r(u,"toJSON",o(null)),r(u,"PRNG",f)):(e(u,"seed",G),e(u,"seedLength",M),t(u,"state",E,P),e(u,"stateLength",C),e(u,"byteLength",N),r(u,"toJSON",O),r(u,"PRNG",f),f=f.normalized),u;function G(){return f.seed}function M(){return f.seedLength}function C(){return f.stateLength}function N(){return f.byteLength}function E(){return f.state}function P(I){f.state=I}function O(){var I={};return I.type="PRNG",I.name=u.NAME,I.state=d(f.state),h===void 0?I.params=[]:I.params=[h,R,A],I}function F(){return m(f,h,R,A)}function S(I,T,z){return g(I)||g(T)||g(z)||!(I<=z&&z<=T)?NaN:m(f,I,T,z)}}return Ig=q,Ig}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Fg,cR;function qI(){if(cR)return Fg;cR=1;var r=E8(),e=r();return Fg=e,Fg}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var jg,gR;function L8(){if(gR)return jg;gR=1;var r=D(),e=qI(),t=E8();return r(e,"factory",t),jg=e,jg}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Vg,mR;function wI(){if(mR)return Vg;mR=1;var r=mr().isPrimitive,e=Y(),t=_r();function n(a,i){return!r(a)||t(a)?new TypeError(e("invalid argument. First argument must be a number and not NaN. Value: `%s`.",a)):!r(i)||t(i)?new TypeError(e("invalid argument. Second argument must be a number and not NaN. Value: `%s`.",i)):a>=i?new RangeError(e("invalid argument. Minimum support must be less than maximum support. Value: `[%f, %f]`.",a,i)):null}return Vg=n,Vg}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Gg,pR;function _I(){if(pR)return Gg;pR=1;function r(e,t,n){var a=e();return n*a+(1-a)*t}return Gg=r,Gg}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Cg,hR;function O8(){if(hR)return Cg;hR=1;var r=D(),e=er(),t=nr(),n=tr(),a=ur(),i=rr(),o=ar(),s=or(),l=lr().factory,g=Q(),d=ir(),p=Y(),b=wI(),m=_I();function q(){var v,f,u,c,h,R;if(arguments.length===0)f=l();else if(arguments.length===1){if(v=arguments[0],!n(v))throw new TypeError(p("invalid argument. Options argument must be an object. Value: `%s`.",v));if(i(v,"prng")){if(!a(v.prng))throw new TypeError(p("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",v.prng));f=v.prng}else f=l(v)}else{if(h=arguments[0],R=arguments[1],c=b(h,R),c)throw c;if(arguments.length>2){if(v=arguments[2],!n(v))throw new TypeError(p("invalid argument. Options argument must be an object. Value: `%s`.",v));if(i(v,"prng")){if(!a(v.prng))throw new TypeError(p("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",v.prng));f=v.prng}else f=l(v)}else f=l()}return h===void 0?u=F:u=O,r(u,"NAME","uniform"),v&&v.prng?(r(u,"seed",null),r(u,"seedLength",null),t(u,"state",o(null),s),r(u,"stateLength",null),r(u,"byteLength",null),r(u,"toJSON",o(null)),r(u,"PRNG",f)):(e(u,"seed",A),e(u,"seedLength",G),t(u,"state",N,E),e(u,"stateLength",M),e(u,"byteLength",C),r(u,"toJSON",P),r(u,"PRNG",f),f=f.normalized),u;function A(){return f.seed}function G(){return f.seedLength}function M(){return f.stateLength}function C(){return f.byteLength}function N(){return f.state}function E(S){f.state=S}function P(){var S={};return S.type="PRNG",S.name=u.NAME,S.state=d(f.state),h===void 0?S.params=[]:S.params=[h,R],S}function O(){return m(f,h,R)}function F(S,I){return g(S)||g(I)||S>=I?NaN:m(f,S,I)}}return Cg=q,Cg}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Bg,dR;function RI(){if(dR)return Bg;dR=1;var r=O8(),e=r();return Bg=e,Bg}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var kg,yR;function N8(){if(yR)return kg;yR=1;var r=D(),e=RI(),t=O8();return r(e,"factory",t),kg=e,kg}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Hg,bR;function EI(){if(bR)return Hg;bR=1;var r=pr().isPrimitive,e=Y();function t(n,a){return r(n)?r(a)?null:new TypeError(e("invalid argument. Shape parameter must be a positive number. Value: `%s`.",a)):new TypeError(e("invalid argument. Scale parameter must be a positive number. Value: `%s`.",n))}return Hg=t,Hg}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ug,$R;function LI(){if($R)return Ug;$R=1;var r=Gr(),e=dr();function t(n,a,i){return i*r(-e(1-n()),1/a)}return Ug=t,Ug}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Wg,qR;function S8(){if(qR)return Wg;qR=1;var r=D(),e=er(),t=nr(),n=tr(),a=ur(),i=rr(),o=ar(),s=or(),l=lr().factory,g=Q(),d=ir(),p=Y(),b=EI(),m=LI();function q(){var v,f,u,c,h,R;if(arguments.length===0)u=l();else if(arguments.length===1){if(f=arguments[0],!n(f))throw new TypeError(p("invalid argument. Options argument must be an object. Value: `%s`.",f));if(i(f,"prng")){if(!a(f.prng))throw new TypeError(p("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",f.prng));u=f.prng}else u=l(f)}else{if(R=arguments[0],v=arguments[1],h=b(v,R),h)throw h;if(arguments.length>2){if(f=arguments[2],!n(f))throw new TypeError(p("invalid argument. Options argument must be an object. Value: `%s`.",f));if(i(f,"prng")){if(!a(f.prng))throw new TypeError(p("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",f.prng));u=f.prng}else u=l(f)}else u=l()}return v===void 0?c=F:c=O,r(c,"NAME","weibull"),f&&f.prng?(r(c,"seed",null),r(c,"seedLength",null),t(c,"state",o(null),s),r(c,"stateLength",null),r(c,"byteLength",null),r(c,"toJSON",o(null)),r(c,"PRNG",u)):(e(c,"seed",A),e(c,"seedLength",G),t(c,"state",N,E),e(c,"stateLength",M),e(c,"byteLength",C),r(c,"toJSON",P),r(c,"PRNG",u),u=u.normalized),c;function A(){return u.seed}function G(){return u.seedLength}function M(){return u.stateLength}function C(){return u.byteLength}function N(){return u.state}function E(S){u.state=S}function P(){var S={};return S.type="PRNG",S.name=c.NAME,S.state=d(u.state),R===void 0?S.params=[]:S.params=[R,v],S}function O(){return m(u,R,v)}function F(S,I){return g(S)||g(I)||S<=0||I<=0?NaN:m(u,S,I)}}return Wg=q,Wg}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zg,wR;function OI(){if(wR)return zg;wR=1;var r=S8(),e=r();return zg=e,zg}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Dg,_R;function T8(){if(_R)return Dg;_R=1;var r=D(),e=OI(),t=S8();return r(e,"factory",t),Dg=e,Dg}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Jg,RR;function NI(){if(RR)return Jg;RR=1;var r=YE(),e=xE(),t=f5(),n=c5(),a=p5(),i=Im(),o=b5(),s=w5(),l=Be(),g=L5(),d=N5(),p=T5(),b=M5(),m=I5(),q=j5(),v=Oe(),f=G5(),u=B5(),c=H5(),h=Qr(),R=W5(),A=D5(),G=X5(),M=Z5(),C=x5(),N=e8(),E=mt(),P=pt(),O=lr(),F=v8(),S=c8(),I=m8(),T=jm(),z=h8(),X=y8(),W=$8(),j=w8(),$=R8(),y=L8(),w=N8(),L=T8(),_={};return _.arcsine=r.factory,_.bernoulli=e.factory,_.beta=t.factory,_.betaprime=n.factory,_.binomial=a.factory,_["box-muller"]=i.factory,_.cauchy=o.factory,_.chi=s.factory,_.chisquare=l.factory,_.cosine=g.factory,_["discrete-uniform"]=d.factory,_.erlang=p.factory,_.exponential=b.factory,_.f=m.factory,_.frechet=q.factory,_.gamma=v.factory,_.geometric=f.factory,_.gumbel=u.factory,_.hypergeometric=c.factory,_["improved-ziggurat"]=h.factory,_.invgamma=R.factory,_.kumaraswamy=A.factory,_.laplace=G.factory,_.levy=M.factory,_.logistic=C.factory,_.lognormal=N.factory,_.minstd=E.factory,_["minstd-shuffle"]=P.factory,_.mt19937=O.factory,_["negative-binomial"]=F.factory,_.normal=S.factory,_["pareto-type1"]=I.factory,_.poisson=T.factory,_.randi=z.factory,_.randn=X.factory,_.randu=W.factory,_.rayleigh=j.factory,_.t=$.factory,_.triangular=y.factory,_.uniform=w.factory,_.weibull=L.factory,Jg=_,Jg}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Xg,ER;function SI(){if(ER)return Xg;ER=1;var r=_e().isPrimitive,e=tr(),t=ve(),n=dI(),a=qe(),i=Sr(),o=NI(),s={Int32Array:a,Uint32Array:i},l=["randi","randn","randu"];function g(d,p){var b,m,q,v,f;if(p&&p.type==="PRNG"&&r(p.name)&&e(p.state)&&t(p.params)&&r(p.state.type)&&t(p.state.data)&&(m={},b=o[p.name],b===void 0&&(f=p.name.split("-"),n(l,f[0])&&(b=o[f[0]],m.name=f.slice(1).join("-"))),b&&(v=s[p.state.type],v))){m.state=new v(p.state.data),q=p.params.slice(),q.push(m);try{return b.apply(null,q)}catch{}}return p}return Xg=g,Xg}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Yg,LR;function TI(){if(LR)return Yg;LR=1;var r=SI();return Yg=r,Yg}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Kg,OR;function AI(){if(OR)return Kg;OR=1;var r=d7(),e={};return r(e,"arcsine",YE()),r(e,"bernoulli",xE()),r(e,"beta",f5()),r(e,"betaprime",c5()),r(e,"binomial",p5()),r(e,"boxMuller",Im()),r(e,"cauchy",b5()),r(e,"chi",w5()),r(e,"chisquare",Be()),r(e,"cosine",L5()),r(e,"discreteUniform",N5()),r(e,"erlang",T5()),r(e,"exponential",M5()),r(e,"f",I5()),r(e,"frechet",j5()),r(e,"gamma",Oe()),r(e,"geometric",G5()),r(e,"gumbel",B5()),r(e,"hypergeometric",H5()),r(e,"improvedZiggurat",Qr()),r(e,"invgamma",W5()),r(e,"kumaraswamy",D5()),r(e,"laplace",X5()),r(e,"levy",Z5()),r(e,"logistic",x5()),r(e,"lognormal",e8()),r(e,"minstd",mt()),r(e,"minstdShuffle",pt()),r(e,"mt19937",lr()),r(e,"negativeBinomial",v8()),r(e,"normal",c8()),r(e,"pareto1",m8()),r(e,"poisson",jm()),r(e,"randi",h8()),r(e,"randn",y8()),r(e,"randu",$8()),r(e,"rayleigh",w8()),r(e,"reviveBasePRNG",TI()),r(e,"t",R8()),r(e,"triangular",L8()),r(e,"uniform",N8()),r(e,"weibull",T8()),Kg=e,Kg}var Zg=AI(),MI=VL('<main class="svelte-kkr7vi"><div id="stonks" class="svelte-kkr7vi"><h4 class="svelte-kkr7vi"> </h4> <h4 class="svelte-kkr7vi"> </h4> <h4 class="svelte-kkr7vi"> </h4> <h4 class="svelte-kkr7vi"> </h4></div> <div id="shop-container" class="svelte-kkr7vi"><div id="icons-container" class="svelte-kkr7vi"><img id="customer-icon" alt="Customer icon"> <img id="shop-icon" alt="Shop icon" class="svelte-kkr7vi"></div></div> <br class="svelte-kkr7vi"> <button class="svelte-kkr7vi">Start Simulation</button> <button class="svelte-kkr7vi">Stop Simulation</button> <br class="svelte-kkr7vi"> <br class="svelte-kkr7vi"> <section id="simulation-parameters" class="svelte-kkr7vi"><h2 class="svelte-kkr7vi">Simulation Parameters</h2> <div class="svelte-kkr7vi"><label for="customersPerHour" class="svelte-kkr7vi">Customers per Hour:</label> <input type="number" id="customersPerHour" min="1" class="svelte-kkr7vi"></div> <div class="svelte-kkr7vi"><label for="purchaseProbability" class="svelte-kkr7vi">Purchase Probability (0-1):</label> <input type="number" id="purchaseProbability" min="0" max="1" step="0.01" class="svelte-kkr7vi"></div> <div class="svelte-kkr7vi"><label for="minPurchasePrice" class="svelte-kkr7vi">Minimum Purchase Price:</label> <input type="number" id="minPurchasePrice" min="0" class="svelte-kkr7vi"></div> <div class="svelte-kkr7vi"><label for="maxPurchasePrice" class="svelte-kkr7vi">Maximum Purchase Price:</label> <input type="number" id="maxPurchasePrice" class="svelte-kkr7vi"></div> <div class="svelte-kkr7vi"><label for="simulationSpeed" class="svelte-kkr7vi">Simulation Speed: (minutes per real second)</label> <input type="number" id="simulationSpeed" min="0.1" step="0.1" class="svelte-kkr7vi"></div></section></main>');function PI(r,e){FR(e,!1);let t=Br(0),n=Br("N/A"),a=Br(),i=Br(!1),o=Br(!1),s=Br(10),l=Br(.7),g=Br(5),d=Br(20),p=Br(5),b=Br(0),m;function q(){fr(i)||(cr(i,!0),cr(a,f()),cr(o,!0),m=setInterval(()=>rL(b),1e3/fr(p)))}function v(){if(console.log("I was here"),Zg.uniform(0,1)<fr(l)){let H=(Zg.beta(20,20)*(fr(d)-fr(g))+fr(g)).toFixed(2);cr(t,fr(t)+ +H),cr(n,"+$"+H)}else cr(n,"No purchase");cr(a,f()),cr(o,!1),setTimeout(()=>cr(o,!0),0)}function f(){return+Zg.exponential(fr(s)/60).toFixed(0)+1}function u(){cr(i,!1),cr(o,!1),clearInterval(m)}QL();var c=MI(),h=Tr(c),R=Tr(h),A=Tr(R),G=$r(R,2),M=Tr(G),C=$r(G,2),N=Tr(C),E=$r(C,2),P=Tr(E),O=$r(h,2),F=Tr(O),S=Tr(F);dt(S,"src",e7);var I=$r(S,2);dt(I,"src",r7);var T=$r(O,4),z=$r(T,2),X=$r(z,6),W=$r(Tr(X),2),j=$r(Tr(W),2),$=$r(W,2),y=$r(Tr($),2),w=$r($,2),L=$r(Tr(w),2),_=$r(w,2),B=$r(Tr(_),2),k=$r(_,2),Z=$r(Tr(k),2);fL(H=>{ke(A,`Time passed: ${fr(b)??""} minutes`),ke(M,`Next Customer: in ${fr(a)??""} minutes`),ke(N,`Revenue: $${H??""}`),ke(P,`Last Customer: ${fr(n)??""}`),DL(S,1,UL(fr(o)?"in-shop":""),"svelte-kkr7vi"),JL(S,`--transition-duration: ${fr(a)/fr(p)}s;`),T.disabled=fr(i),z.disabled=!fr(i),j.disabled=fr(i),y.disabled=fr(i),L.disabled=fr(i),dt(B,"min",fr(g)),B.disabled=fr(i),Z.disabled=fr(i)},[()=>fr(t).toFixed(2)],nL),ht("transitionend",S,v),ht("click",T,q),ht("click",z,u),Ne(j,()=>fr(s),H=>cr(s,H)),Ne(y,()=>fr(l),H=>cr(l,H)),Ne(L,()=>fr(g),H=>cr(g,H)),Ne(B,()=>fr(d),H=>cr(d,H)),Ne(Z,()=>fr(p),H=>cr(p,H)),GL(r,c),jR()}CL(PI,{target:document.getElementById("app")});

(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(a){if(a.ep)return;a.ep=!0;const i=t(a);fetch(a.href,i)}})();const Wp=!1;var SR=Array.isArray,A8=Array.prototype.indexOf,M8=Array.from,P8=Object.defineProperty,Te=Object.getOwnPropertyDescriptor,TR=Object.getOwnPropertyDescriptors,I8=Object.prototype,F8=Array.prototype,tp=Object.getPrototypeOf,zp=Object.isExtensible;function j8(r){return r()}function Qg(r){for(var e=0;e<r.length;e++)r[e]()}const Dr=2,AR=4,Ze=8,np=16,te=32,he=64,ze=128,Fr=256,ke=512,Hr=1024,ne=2048,de=4096,De=8192,Qe=16384,V8=32768,G8=65536,C8=1<<19,MR=1<<20,xg=1<<21,Ae=Symbol("$state"),B8=Symbol("");function PR(r){return r===this.v}function H8(r,e){return r!=r?e==e:r!==e||r!==null&&typeof r=="object"||typeof r=="function"}function IR(r){return!H8(r,this.v)}function U8(r){throw new Error("https://svelte.dev/e/effect_in_teardown")}function W8(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function z8(r){throw new Error("https://svelte.dev/e/effect_orphan")}function k8(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function D8(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function J8(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function X8(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let xe=!1,Y8=!1;function K8(){xe=!0}const Z8=2,Ar=Symbol(),Q8="http://www.w3.org/1999/xhtml";let br=null;function kp(r){br=r}function FR(r,e=!1,t){var n=br={p:br,c:null,d:!1,e:null,m:!1,s:r,x:null,l:null};xe&&!e&&(br.l={s:null,u:null,r1:[],r2:ap(!1)}),DR(()=>{n.d=!0})}function jR(r){const e=br;if(e!==null){const o=e.e;if(o!==null){var t=gr,n=vr;e.e=null;try{for(var a=0;a<o.length;a++){var i=o[a];ee(i.effect),Jr(i.reaction),JR(i.fn)}}finally{ee(t),Jr(n)}}br=e.p,e.m=!0}return{}}function Pe(){return!xe||br!==null&&br.l===null}function me(r,e){if(typeof r!="object"||r===null||Ae in r)return r;const t=tp(r);if(t!==I8&&t!==F8)return r;var n=new Map,a=SR(r),i=xr(0),o=vr,s=l=>{var g=vr;Jr(o);var d;return d=l(),Jr(g),d};return a&&n.set("length",xr(r.length)),new Proxy(r,{defineProperty(l,g,d){(!("value"in d)||d.configurable===!1||d.enumerable===!1||d.writable===!1)&&D8();var m=n.get(g);return m===void 0?(m=s(()=>xr(d.value)),n.set(g,m)):cr(m,s(()=>me(d.value))),!0},deleteProperty(l,g){var d=n.get(g);if(d===void 0)g in l&&n.set(g,s(()=>xr(Ar)));else{if(a&&typeof g=="string"){var m=n.get("length"),b=Number(g);Number.isInteger(b)&&b<m.v&&cr(m,b)}cr(d,Ar),Dp(i)}return!0},get(l,g,d){var q;if(g===Ae)return r;var m=n.get(g),b=g in l;if(m===void 0&&(!b||(q=Te(l,g))!=null&&q.writable)&&(m=s(()=>xr(me(b?l[g]:Ar))),n.set(g,m)),m!==void 0){var p=fr(m);return p===Ar?void 0:p}return Reflect.get(l,g,d)},getOwnPropertyDescriptor(l,g){var d=Reflect.getOwnPropertyDescriptor(l,g);if(d&&"value"in d){var m=n.get(g);m&&(d.value=fr(m))}else if(d===void 0){var b=n.get(g),p=b==null?void 0:b.v;if(b!==void 0&&p!==Ar)return{enumerable:!0,configurable:!0,value:p,writable:!0}}return d},has(l,g){var p;if(g===Ae)return!0;var d=n.get(g),m=d!==void 0&&d.v!==Ar||Reflect.has(l,g);if(d!==void 0||gr!==null&&(!m||(p=Te(l,g))!=null&&p.writable)){d===void 0&&(d=s(()=>xr(m?me(l[g]):Ar)),n.set(g,d));var b=fr(d);if(b===Ar)return!1}return m},set(l,g,d,m){var h;var b=n.get(g),p=g in l;if(a&&g==="length")for(var q=d;q<b.v;q+=1){var v=n.get(q+"");v!==void 0?cr(v,Ar):q in l&&(v=s(()=>xr(Ar)),n.set(q+"",v))}b===void 0?(!p||(h=Te(l,g))!=null&&h.writable)&&(b=s(()=>xr(void 0)),cr(b,s(()=>me(d))),n.set(g,b)):(p=b.v!==Ar,cr(b,s(()=>me(d))));var f=Reflect.getOwnPropertyDescriptor(l,g);if(f!=null&&f.set&&f.set.call(m,d),!p){if(a&&typeof g=="string"){var u=n.get("length"),c=Number(g);Number.isInteger(c)&&c>=u.v&&cr(u,c+1)}Dp(i)}return!0},ownKeys(l){fr(i);var g=Reflect.ownKeys(l).filter(b=>{var p=n.get(b);return p===void 0||p.v!==Ar});for(var[d,m]of n)m.v!==Ar&&!(d in l)&&g.push(d);return g},setPrototypeOf(){J8()}})}function Dp(r,e=1){cr(r,r.v+e)}const Me=new Map;function ap(r,e){var t={f:0,v:r,reactions:null,equals:PR,rv:0,wv:0};return t}function xr(r,e){const t=ap(r);return yL(t),t}function Br(r,e=!1){var n;const t=ap(r);return e||(t.equals=IR),xe&&br!==null&&br.l!==null&&((n=br.l).s??(n.s=[])).push(t),t}function cr(r,e,t=!1){vr!==null&&!kr&&Pe()&&(vr.f&(Dr|np))!==0&&!(Or!=null&&Or.includes(r))&&X8();let n=t?me(e):e;return x8(r,n)}function x8(r,e){if(!r.equals(e)){var t=r.v;Ie?Me.set(r,e):Me.set(r,t),r.v=e,r.wv=rE(),VR(r,ne),Pe()&&gr!==null&&(gr.f&Hr)!==0&&(gr.f&(te|he))===0&&(Ir===null?bL([r]):Ir.push(r))}return e}function rL(r,e=1){var t=fr(r),n=e===1?t++:t--;return cr(r,t),n}function VR(r,e){var t=r.reactions;if(t!==null)for(var n=Pe(),a=t.length,i=0;i<a;i++){var o=t[i],s=o.f;(s&ne)===0&&(!n&&o===gr||(Zr(o,e),(s&(Hr|Fr))!==0&&((s&Dr)!==0?VR(o,de):op(o))))}}var Jp,GR,CR,BR;function eL(){if(Jp===void 0){Jp=window,GR=/Firefox/.test(navigator.userAgent);var r=Element.prototype,e=Node.prototype,t=Text.prototype;CR=Te(e,"firstChild").get,BR=Te(e,"nextSibling").get,zp(r)&&(r.__click=void 0,r.__className=void 0,r.__attributes=null,r.__style=void 0,r.__e=void 0),zp(t)&&(t.__t=void 0)}}function tL(r=""){return document.createTextNode(r)}function HR(r){return CR.call(r)}function UR(r){return BR.call(r)}function Tr(r,e){return HR(r)}function $r(r,e=1,t=!1){let n=r;for(;e--;)n=UR(n);return n}function ip(r){var e=Dr|ne,t=vr!==null&&(vr.f&Dr)!==0?vr:null;return gr===null||t!==null&&(t.f&Fr)!==0?e|=Fr:gr.f|=MR,{ctx:br,deps:null,effects:null,equals:PR,f:e,fn:r,reactions:null,rv:0,v:null,wv:0,parent:t??gr}}function nL(r){const e=ip(r);return e.equals=IR,e}function WR(r){var e=r.effects;if(e!==null){r.effects=null;for(var t=0;t<e.length;t+=1)fe(e[t])}}function aL(r){for(var e=r.parent;e!==null;){if((e.f&Dr)===0)return e;e=e.parent}return null}function iL(r){var e,t=gr;ee(aL(r));try{WR(r),e=tE(r)}finally{ee(t)}return e}function zR(r){var e=iL(r),t=(re||(r.f&Fr)!==0)&&r.deps!==null?de:Hr;Zr(r,t),r.equals(e)||(r.v=e,r.wv=rE())}function kR(r){gr===null&&vr===null&&z8(),vr!==null&&(vr.f&Fr)!==0&&gr===null&&W8(),Ie&&U8()}function uL(r,e){var t=e.last;t===null?e.last=e.first=r:(t.next=r,r.prev=t,e.last=r)}function ye(r,e,t,n=!0){var a=gr,i={ctx:br,deps:null,nodes_start:null,nodes_end:null,f:r|ne,first:null,fn:e,last:null,next:null,parent:a,prev:null,teardown:null,transitions:null,wv:0};if(t)try{up(i),i.f|=V8}catch(l){throw fe(i),l}else e!==null&&op(i);var o=t&&i.deps===null&&i.first===null&&i.nodes_start===null&&i.teardown===null&&(i.f&(MR|ze))===0;if(!o&&n&&(a!==null&&uL(i,a),vr!==null&&(vr.f&Dr)!==0)){var s=vr;(s.effects??(s.effects=[])).push(i)}return i}function DR(r){const e=ye(Ze,null,!1);return Zr(e,Hr),e.teardown=r,e}function Xp(r){kR();var e=gr!==null&&(gr.f&te)!==0&&br!==null&&!br.m;if(e){var t=br;(t.e??(t.e=[])).push({fn:r,effect:gr,reaction:vr})}else{var n=JR(r);return n}}function oL(r){return kR(),XR(r)}function sL(r){const e=ye(he,r,!0);return(t={})=>new Promise(n=>{t.outro?gL(e,()=>{fe(e),n(void 0)}):(fe(e),n(void 0))})}function JR(r){return ye(AR,r,!1)}function XR(r){return ye(Ze,r,!0)}function fL(r,e=[],t=ip){const n=e.map(t);return vL(()=>r(...n.map(fr)))}function vL(r,e=0){return ye(Ze|np|e,r,!0)}function lL(r,e=!0){return ye(Ze|te,r,!0,e)}function YR(r){var e=r.teardown;if(e!==null){const t=Ie,n=vr;Yp(!0),Jr(null);try{e.call(null)}finally{Yp(t),Jr(n)}}}function KR(r,e=!1){var t=r.first;for(r.first=r.last=null;t!==null;){var n=t.next;(t.f&he)!==0?t.parent=null:fe(t,e),t=n}}function cL(r){for(var e=r.first;e!==null;){var t=e.next;(e.f&te)===0&&fe(e),e=t}}function fe(r,e=!0){var t=!1;if((e||(r.f&C8)!==0)&&r.nodes_start!==null){for(var n=r.nodes_start,a=r.nodes_end;n!==null;){var i=n===a?null:UR(n);n.remove(),n=i}t=!0}KR(r,e&&!t),Ke(r,0),Zr(r,Qe);var o=r.transitions;if(o!==null)for(const l of o)l.stop();YR(r);var s=r.parent;s!==null&&s.first!==null&&ZR(r),r.next=r.prev=r.teardown=r.ctx=r.deps=r.fn=r.nodes_start=r.nodes_end=null}function ZR(r){var e=r.parent,t=r.prev,n=r.next;t!==null&&(t.next=n),n!==null&&(n.prev=t),e!==null&&(e.first===r&&(e.first=n),e.last===r&&(e.last=t))}function gL(r,e){var t=[];QR(r,t,!0),pL(t,()=>{fe(r),e&&e()})}function pL(r,e){var t=r.length;if(t>0){var n=()=>--t||e();for(var a of r)a.out(n)}else e()}function QR(r,e,t){if((r.f&De)===0){if(r.f^=De,r.transitions!==null)for(const o of r.transitions)(o.is_global||t)&&e.push(o);for(var n=r.first;n!==null;){var a=n.next,i=(n.f&G8)!==0||(n.f&te)!==0;QR(n,e,i?t:!1),n=a}}}let Je=[];function mL(){var r=Je;Je=[],Qg(r)}function hL(r){Je.length===0&&queueMicrotask(mL),Je.push(r)}let Ue=!1,rp=!1,Xe=null,se=!1,Ie=!1;function Yp(r){Ie=r}let We=[];let vr=null,kr=!1;function Jr(r){vr=r}let gr=null;function ee(r){gr=r}let Or=null;function dL(r){Or=r}function yL(r){vr!==null&&vr.f&xg&&(Or===null?dL([r]):Or.push(r))}let Lr=null,Mr=0,Ir=null;function bL(r){Ir=r}let xR=1,Ye=0,re=!1;function rE(){return++xR}function rt(r){var m;var e=r.f;if((e&ne)!==0)return!0;if((e&de)!==0){var t=r.deps,n=(e&Fr)!==0;if(t!==null){var a,i,o=(e&ke)!==0,s=n&&gr!==null&&!re,l=t.length;if(o||s){var g=r,d=g.parent;for(a=0;a<l;a++)i=t[a],(o||!((m=i==null?void 0:i.reactions)!=null&&m.includes(g)))&&(i.reactions??(i.reactions=[])).push(g);o&&(g.f^=ke),s&&d!==null&&(d.f&Fr)===0&&(g.f^=Fr)}for(a=0;a<l;a++)if(i=t[a],rt(i)&&zR(i),i.wv>r.wv)return!0}(!n||gr!==null&&!re)&&Zr(r,Hr)}return!1}function $L(r,e){for(var t=e;t!==null;){if((t.f&ze)!==0)try{t.fn(r);return}catch{t.f^=ze}t=t.parent}throw Ue=!1,r}function qL(r){return(r.f&Qe)===0&&(r.parent===null||(r.parent.f&ze)===0)}function et(r,e,t,n){if(Ue){if(t===null&&(Ue=!1),qL(e))throw r;return}t!==null&&(Ue=!0);{$L(r,e);return}}function eE(r,e,t=!0){var n=r.reactions;if(n!==null)for(var a=0;a<n.length;a++){var i=n[a];Or!=null&&Or.includes(r)||((i.f&Dr)!==0?eE(i,e,!1):e===i&&(t?Zr(i,ne):(i.f&Hr)!==0&&Zr(i,de),op(i)))}}function tE(r){var p;var e=Lr,t=Mr,n=Ir,a=vr,i=re,o=Or,s=br,l=kr,g=r.f;Lr=null,Mr=0,Ir=null,re=(g&Fr)!==0&&(kr||!se||vr===null),vr=(g&(te|he))===0?r:null,Or=null,kp(r.ctx),kr=!1,Ye++,r.f|=xg;try{var d=(0,r.fn)(),m=r.deps;if(Lr!==null){var b;if(Ke(r,Mr),m!==null&&Mr>0)for(m.length=Mr+Lr.length,b=0;b<Lr.length;b++)m[Mr+b]=Lr[b];else r.deps=m=Lr;if(!re)for(b=Mr;b<m.length;b++)((p=m[b]).reactions??(p.reactions=[])).push(r)}else m!==null&&Mr<m.length&&(Ke(r,Mr),m.length=Mr);if(Pe()&&Ir!==null&&!kr&&m!==null&&(r.f&(Dr|de|ne))===0)for(b=0;b<Ir.length;b++)eE(Ir[b],r);return a!==r&&(Ye++,Ir!==null&&(n===null?n=Ir:n.push(...Ir))),d}finally{Lr=e,Mr=t,Ir=n,vr=a,re=i,Or=o,kp(s),kr=l,r.f^=xg}}function wL(r,e){let t=e.reactions;if(t!==null){var n=A8.call(t,r);if(n!==-1){var a=t.length-1;a===0?t=e.reactions=null:(t[n]=t[a],t.pop())}}t===null&&(e.f&Dr)!==0&&(Lr===null||!Lr.includes(e))&&(Zr(e,de),(e.f&(Fr|ke))===0&&(e.f^=ke),WR(e),Ke(e,0))}function Ke(r,e){var t=r.deps;if(t!==null)for(var n=e;n<t.length;n++)wL(r,t[n])}function up(r){var e=r.f;if((e&Qe)===0){Zr(r,Hr);var t=gr,n=br,a=se;gr=r,se=!0;try{(e&np)!==0?cL(r):KR(r),YR(r);var i=tE(r);r.teardown=typeof i=="function"?i:null,r.wv=xR;var o=r.deps,s;Wp&&Y8&&r.f&ne}catch(l){et(l,r,t,n||r.ctx)}finally{se=a,gr=t}}}function _L(){try{k8()}catch(r){if(Xe!==null)et(r,Xe,null);else throw r}}function RL(){var r=se;try{var e=0;for(se=!0;We.length>0;){e++>1e3&&_L();var t=We,n=t.length;We=[];for(var a=0;a<n;a++){var i=LL(t[a]);EL(i)}Me.clear()}}finally{rp=!1,se=r,Xe=null}}function EL(r){var e=r.length;if(e!==0)for(var t=0;t<e;t++){var n=r[t];if((n.f&(Qe|De))===0)try{rt(n)&&(up(n),n.deps===null&&n.first===null&&n.nodes_start===null&&(n.teardown===null?ZR(n):n.fn=null))}catch(a){et(a,n,null,n.ctx)}}}function op(r){rp||(rp=!0,queueMicrotask(RL));for(var e=Xe=r;e.parent!==null;){e=e.parent;var t=e.f;if((t&(he|te))!==0){if((t&Hr)===0)return;e.f^=Hr}}We.push(e)}function LL(r){for(var e=[],t=r;t!==null;){var n=t.f,a=(n&(te|he))!==0,i=a&&(n&Hr)!==0;if(!i&&(n&De)===0){if((n&AR)!==0)e.push(t);else if(a)t.f^=Hr;else{var o=vr;try{vr=t,rt(t)&&up(t)}catch(g){et(g,t,null,t.ctx)}finally{vr=o}}var s=t.first;if(s!==null){t=s;continue}}var l=t.parent;for(t=t.next;t===null&&l!==null;)t=l.next,l=l.parent}return e}function fr(r){var e=r.f,t=(e&Dr)!==0;if(vr!==null&&!kr){if(!(Or!=null&&Or.includes(r))){var n=vr.deps;r.rv<Ye&&(r.rv=Ye,Lr===null&&n!==null&&n[Mr]===r?Mr++:Lr===null?Lr=[r]:(!re||!Lr.includes(r))&&Lr.push(r))}}else if(t&&r.deps===null&&r.effects===null){var a=r,i=a.parent;i!==null&&(i.f&Fr)===0&&(a.f^=Fr)}return t&&(a=r,rt(a)&&zR(a)),Ie&&Me.has(r)?Me.get(r):r.v}function nE(r){var e=kr;try{return kr=!0,r()}finally{kr=e}}const OL=-7169;function Zr(r,e){r.f=r.f&OL|e}function NL(r){if(!(typeof r!="object"||!r||r instanceof EventTarget)){if(Ae in r)ep(r);else if(!Array.isArray(r))for(let e in r){const t=r[e];typeof t=="object"&&t&&Ae in t&&ep(t)}}}function ep(r,e=new Set){if(typeof r=="object"&&r!==null&&!(r instanceof EventTarget)&&!e.has(r)){e.add(r),r instanceof Date&&r.getTime();for(let n in r)try{ep(r[n],e)}catch{}const t=tp(r);if(t!==Object.prototype&&t!==Array.prototype&&t!==Map.prototype&&t!==Set.prototype&&t!==Date.prototype){const n=TR(t);for(let a in n){const i=n[a].get;if(i)try{i.call(r)}catch{}}}}}const SL=["touchstart","touchmove"];function TL(r){return SL.includes(r)}let Kp=!1;function AL(){Kp||(Kp=!0,document.addEventListener("reset",r=>{Promise.resolve().then(()=>{var e;if(!r.defaultPrevented)for(const t of r.target.elements)(e=t.__on_r)==null||e.call(t)})},{capture:!0}))}function aE(r){var e=vr,t=gr;Jr(null),ee(null);try{return r()}finally{Jr(e),ee(t)}}function ML(r,e,t,n=t){r.addEventListener(e,()=>aE(t));const a=r.__on_r;a?r.__on_r=()=>{a(),n(!0)}:r.__on_r=()=>n(!0),AL()}const PL=new Set,Zp=new Set;function IL(r,e,t,n={}){function a(i){if(n.capture||Se.call(e,i),!i.cancelBubble)return aE(()=>t==null?void 0:t.call(this,i))}return r.startsWith("pointer")||r.startsWith("touch")||r==="wheel"?hL(()=>{e.addEventListener(r,a,n)}):e.addEventListener(r,a,n),a}function ht(r,e,t,n,a){var i={capture:n,passive:a},o=IL(r,e,t,i);(e===document.body||e===window||e===document)&&DR(()=>{e.removeEventListener(r,o,i)})}function Se(r){var c;var e=this,t=e.ownerDocument,n=r.type,a=((c=r.composedPath)==null?void 0:c.call(r))||[],i=a[0]||r.target,o=0,s=r.__root;if(s){var l=a.indexOf(s);if(l!==-1&&(e===document||e===window)){r.__root=e;return}var g=a.indexOf(e);if(g===-1)return;l<=g&&(o=l)}if(i=a[o]||r.target,i!==e){P8(r,"currentTarget",{configurable:!0,get(){return i||t}});var d=vr,m=gr;Jr(null),ee(null);try{for(var b,p=[];i!==null;){var q=i.assignedSlot||i.parentNode||i.host||null;try{var v=i["__"+n];if(v!=null&&(!i.disabled||r.target===i))if(SR(v)){var[f,...u]=v;f.apply(i,[r,...u])}else v.call(i,r)}catch(h){b?p.push(h):b=h}if(r.cancelBubble||q===e||q===null)break;i=q}if(b){for(let h of p)queueMicrotask(()=>{throw h});throw b}}finally{r.__root=e,delete r.currentTarget,Jr(d),ee(m)}}}function FL(r){var e=document.createElement("template");return e.innerHTML=r,e.content}function jL(r,e){var t=gr;t.nodes_start===null&&(t.nodes_start=r,t.nodes_end=e)}function VL(r,e){var t=(e&Z8)!==0,n,a=!r.startsWith("<!>");return()=>{n===void 0&&(n=FL(a?r:"<!>"+r),n=HR(n));var i=t||GR?document.importNode(n,!0):n.cloneNode(!0);return jL(i,i),i}}function GL(r,e){r!==null&&r.before(e)}function He(r,e){var t=e==null?"":typeof e=="object"?e+"":e;t!==(r.__t??(r.__t=r.nodeValue))&&(r.__t=t,r.nodeValue=t+"")}function CL(r,e){return BL(r,e)}const pe=new Map;function BL(r,{target:e,anchor:t,props:n={},events:a,context:i,intro:o=!0}){eL();var s=new Set,l=m=>{for(var b=0;b<m.length;b++){var p=m[b];if(!s.has(p)){s.add(p);var q=TL(p);e.addEventListener(p,Se,{passive:q});var v=pe.get(p);v===void 0?(document.addEventListener(p,Se,{passive:q}),pe.set(p,1)):pe.set(p,v+1)}}};l(M8(PL)),Zp.add(l);var g=void 0,d=sL(()=>{var m=t??e.appendChild(tL());return lL(()=>{if(i){FR({});var b=br;b.c=i}a&&(n.$$events=a),g=r(m,n)||{},i&&jR()}),()=>{var q;for(var b of s){e.removeEventListener(b,Se);var p=pe.get(b);--p===0?(document.removeEventListener(b,Se),pe.delete(b)):pe.set(b,p)}Zp.delete(l),m!==t&&((q=m.parentNode)==null||q.removeChild(m))}});return HL.set(g,d),g}let HL=new WeakMap;function iE(r){var e,t,n="";if(typeof r=="string"||typeof r=="number")n+=r;else if(typeof r=="object")if(Array.isArray(r)){var a=r.length;for(e=0;e<a;e++)r[e]&&(t=iE(r[e]))&&(n&&(n+=" "),n+=t)}else for(t in r)r[t]&&(n&&(n+=" "),n+=t);return n}function UL(){for(var r,e,t=0,n="",a=arguments.length;t<a;t++)(r=arguments[t])&&(e=iE(r))&&(n&&(n+=" "),n+=e);return n}function WL(r){return typeof r=="object"?UL(r):r??""}function zL(r,e,t){var n=r==null?"":""+r;return n=n?n+" "+e:e,n===""?null:n}function kL(r,e){return r==null?null:String(r)}function DL(r,e,t,n,a,i){var o=r.__className;if(o!==t||o===void 0){var s=zL(t,n);s==null?r.removeAttribute("class"):r.className=s,r.__className=t}return i}function JL(r,e,t,n){var a=r.__style;if(a!==e){var i=kL(e);i==null?r.removeAttribute("style"):r.style.cssText=i,r.__style=e}return n}const XL=Symbol("is custom element"),YL=Symbol("is html");function dt(r,e,t,n){var a=KL(r);a[e]!==(a[e]=t)&&(e==="loading"&&(r[B8]=t),t==null?r.removeAttribute(e):typeof t!="string"&&ZL(r).includes(e)?r[e]=t:r.setAttribute(e,t))}function KL(r){return r.__attributes??(r.__attributes={[XL]:r.nodeName.includes("-"),[YL]:r.namespaceURI===Q8})}var Qp=new Map;function ZL(r){var e=Qp.get(r.nodeName);if(e)return e;Qp.set(r.nodeName,e=[]);for(var t,n=r,a=Element.prototype;a!==n;){t=TR(n);for(var i in t)t[i].set&&e.push(i);n=tp(n)}return e}function Ne(r,e,t=e){var n=Pe();ML(r,"input",a=>{var i=a?r.defaultValue:r.value;if(i=yt(r)?bt(i):i,t(i),n&&i!==(i=e())){var o=r.selectionStart,s=r.selectionEnd;r.value=i??"",s!==null&&(r.selectionStart=o,r.selectionEnd=Math.min(s,r.value.length))}}),nE(e)==null&&r.value&&t(yt(r)?bt(r.value):r.value),XR(()=>{var a=e();yt(r)&&a===bt(r.value)||r.type==="date"&&!a&&!r.value||a!==r.value&&(r.value=a??"")})}function yt(r){var e=r.type;return e==="number"||e==="range"}function bt(r){return r===""?null:+r}function QL(r=!1){const e=br,t=e.l.u;if(!t)return;let n=()=>NL(e.s);if(r){let a=0,i={};const o=ip(()=>{let s=!1;const l=e.s;for(const g in l)l[g]!==i[g]&&(i[g]=l[g],s=!0);return s&&a++,a});n=()=>fr(o)}t.b.length&&oL(()=>{xp(e,n),Qg(t.b)}),Xp(()=>{const a=nE(()=>t.m.map(j8));return()=>{for(const i of a)typeof i=="function"&&i()}}),t.a.length&&Xp(()=>{xp(e,n),Qg(t.a)})}function xp(r,e){if(r.l.s)for(const t of r.l.s)fr(t);e()}const xL="5";var NR;typeof window<"u"&&((NR=window.__svelte??(window.__svelte={})).v??(NR.v=new Set)).add(xL);K8();const r7="data:image/svg+xml,%3csvg%20height='24'%20width='24'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20transform='translate(0%20-1028.4)'%3e%3cpath%20d='m0%201050.4h24l-4-6h-16z'%20fill='%2395a5a6'/%3e%3cpath%20d='m2%201032.4h20v17h-20z'%20fill='%23f1c40f'/%3e%3cpath%20d='m4%201039.4h9v9h-9z'%20fill='%23ecf0f1'/%3e%3cpath%20d='m14%201040.4h6v9h-6z'%20fill='%23ecf0f1'/%3e%3cpath%20d='m2%201037.4h20v4h-20z'%20fill='%23f39c12'/%3e%3cpath%20d='m14%201039.4h6v1h-6z'%20fill='%23bdc3c7'/%3e%3cpath%20d='m4%201039.4h9v2h-9z'%20fill='%23bdc3c7'/%3e%3cpath%20d='m0%201036.4v1.5c0%20.8.67157%201.5%201.5%201.5.8284%200%201.5-.7%201.5-1.5v-1.5h-1.5z'%20fill='%23c0392b'/%3e%3cpath%20d='m3%201036.4v1.5c0%20.8.6716%201.5%201.5%201.5s1.5-.7%201.5-1.5v-1.5h-1.5z'%20fill='%23bdc3c7'/%3e%3cpath%20d='m6%201036.4v1.5c0%20.8.6716%201.5%201.5%201.5s1.5-.7%201.5-1.5v-1.5h-1.5z'%20fill='%23c0392b'/%3e%3cpath%20d='m9%201036.4v1.5c0%20.8.6716%201.5%201.5%201.5.828%200%201.5-.7%201.5-1.5v-1.5h-1.5z'%20fill='%23bdc3c7'/%3e%3cpath%20d='m12%201036.4v1.5c0%20.8.672%201.5%201.5%201.5s1.5-.7%201.5-1.5v-1.5h-1.5z'%20fill='%23c0392b'/%3e%3cpath%20d='m15%201036.4v1.5c0%20.8.672%201.5%201.5%201.5s1.5-.7%201.5-1.5v-1.5h-1.5z'%20fill='%23bdc3c7'/%3e%3cpath%20d='m18%201036.4v1.5c0%20.8.672%201.5%201.5%201.5s1.5-.7%201.5-1.5v-1.5h-1.5z'%20fill='%23c0392b'/%3e%3cpath%20d='m21%201036.4v1.5c0%20.8.672%201.5%201.5%201.5s1.5-.7%201.5-1.5v-1.5h-1.5z'%20fill='%23bdc3c7'/%3e%3cpath%20d='m10%201032.4h2v4h-3z'%20fill='%23ecf0f1'/%3e%3cpath%20d='m12%201032.4h2l1%204h-3z'%20fill='%23e74c3c'/%3e%3cpath%20d='m5%201032.4h3l-2%204h-3z'%20fill='%23ecf0f1'/%3e%3cpath%20d='m8%201032.4h2l-1%204h-3z'%20fill='%23e74c3c'/%3e%3cpath%20d='m16%201032.4h-2l1%204h3z'%20fill='%23ecf0f1'/%3e%3cpath%20d='m19%201032.4h-3l2%204h3z'%20fill='%23e74c3c'/%3e%3cpath%20d='m2%201032.4h3l-2%204h-3z'%20fill='%23e74c3c'/%3e%3cpath%20d='m22%201032.4h-3l2%204h3z'%20fill='%23ecf0f1'/%3e%3cpath%20d='m15%201041.4h4v8h-4z'%20fill='%233498db'/%3e%3cpath%20d='m14%201044.4h5v1h-5z'%20fill='%23ecf0f1'/%3e%3cpath%20d='m19%201040.4h1v1h-1z'%20fill='%23bdc3c7'/%3e%3cpath%20d='m15%201040.4h4v1h-4z'%20fill='%232980b9'/%3e%3cpath%20d='m14%201040.4h1v1h-1z'%20fill='%23bdc3c7'/%3e%3cpath%20d='m5%201040.4h7v7h-7z'%20fill='%233498db'/%3e%3cg%20fill='%23ecf0f1'%3e%3cpath%20d='m4%201043.4h9v1h-9z'/%3e%3cpath%20d='m8%201040.4h1v7h-1z'/%3e%3cpath%20d='m1%201032.4h22l-3.667-2h-14.666l-3.667%202'/%3e%3c/g%3e%3cpath%20d='m8%201040.4h1v1h-1z'%20fill='%23bdc3c7'/%3e%3cpath%20d='m1%201031.4h22l-3.667-2h-14.666l-3.667%202'%20fill='%23bdc3c7'/%3e%3cpath%20d='m1%201031.4h22v1h-22z'%20fill='%237f8c8d'/%3e%3cpath%20d='m15%201046.4h4v3h-4z'%20fill='%232980b9'/%3e%3cpath%20d='m0%201050.4h24v1h-24z'%20fill='%237f8c8d'/%3e%3cpath%20d='m5%2012v1h3v-1zm4%200v1h3v-1z'%20fill='%232980b9'%20transform='translate(0%201028.4)'/%3e%3cpath%20d='m5%201046.4v1h3v-1zm4%200v1h3v-1z'%20fill='%232980b9'/%3e%3cpath%20d='m2%201032.4-.5%201h3l.5-1zm5%200-.25%201h3l.25-1zm5%200v1h2.25l-.25-1zm4%200%20.5%201h3l-.5-1z'%20fill='%23c0392b'/%3e%3cpath%20d='m5%201032.4-.5%201h3.0013l.4987-1zm5%200-.25%201h2.25v-1zm4%200%20.25%201h2.25l-.5-1zm5%200%20.5%201h3l-.5-1z'%20fill='%23bdc3c7'/%3e%3c/g%3e%3c/svg%3e",e7="/stdlib-showcase/assets/customer-B35tVt3y.png";/**
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
*/var $t,rm;function t7(){if(rm)return $t;rm=1;var r=typeof Object.defineProperty=="function"?Object.defineProperty:null;return $t=r,$t}/**
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
*/var qt,em;function n7(){if(em)return qt;em=1;var r=t7();function e(){try{return r({},"x",{}),!0}catch{return!1}}return qt=e,qt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wt,tm;function a7(){if(tm)return wt;tm=1;var r=Object.defineProperty;return wt=r,wt}/**
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
*/var _t,nm;function uE(){if(nm)return _t;nm=1;function r(e){return typeof e=="number"}return _t=r,_t}/**
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
*/var Rt,am;function oE(){if(am)return Rt;am=1;function r(n){return n[0]==="-"}function e(n){var a="",i;for(i=0;i<n;i++)a+="0";return a}function t(n,a,i){var o=!1,s=a-n.length;return s<0||(r(n)&&(o=!0,n=n.substr(1)),n=i?n+e(s):e(s)+n,o&&(n="-"+n)),n}return Rt=t,Rt}/**
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
*/var Et,im;function i7(){if(im)return Et;im=1;var r=uE(),e=oE(),t=String.prototype.toLowerCase,n=String.prototype.toUpperCase;function a(i){var o,s,l;switch(i.specifier){case"b":o=2;break;case"o":o=8;break;case"x":case"X":o=16;break;case"d":case"i":case"u":default:o=10;break}if(s=i.arg,l=parseInt(s,10),!isFinite(l)){if(!r(s))throw new Error("invalid integer. Value: "+s);l=0}return l<0&&(i.specifier==="u"||o!==10)&&(l=4294967295+l+1),l<0?(s=(-l).toString(o),i.precision&&(s=e(s,i.precision,i.padRight)),s="-"+s):(s=l.toString(o),!l&&!i.precision?s="":i.precision&&(s=e(s,i.precision,i.padRight)),i.sign&&(s=i.sign+s)),o===16&&(i.alternate&&(s="0x"+s),s=i.specifier===n.call(i.specifier)?n.call(s):t.call(s)),o===8&&i.alternate&&s.charAt(0)!=="0"&&(s="0"+s),s}return Et=a,Et}/**
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
*/var Lt,um;function u7(){if(um)return Lt;um=1;function r(e){return typeof e=="string"}return Lt=r,Lt}/**
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
*/var Ot,om;function o7(){if(om)return Ot;om=1;var r=uE(),e=Math.abs,t=String.prototype.toLowerCase,n=String.prototype.toUpperCase,a=String.prototype.replace,i=/e\+(\d)$/,o=/e-(\d)$/,s=/^(\d+)$/,l=/^(\d+)e/,g=/\.0$/,d=/\.0*e/,m=/(\..*[^0])0*e/;function b(p){var q,v,f=parseFloat(p.arg);if(!isFinite(f)){if(!r(p.arg))throw new Error("invalid floating-point number. Value: "+v);f=p.arg}switch(p.specifier){case"e":case"E":v=f.toExponential(p.precision);break;case"f":case"F":v=f.toFixed(p.precision);break;case"g":case"G":e(f)<1e-4?(q=p.precision,q>0&&(q-=1),v=f.toExponential(q)):v=f.toPrecision(p.precision),p.alternate||(v=a.call(v,m,"$1e"),v=a.call(v,d,"e"),v=a.call(v,g,""));break;default:throw new Error("invalid double notation. Value: "+p.specifier)}return v=a.call(v,i,"e+0$1"),v=a.call(v,o,"e-0$1"),p.alternate&&(v=a.call(v,s,"$1."),v=a.call(v,l,"$1.e")),f>=0&&p.sign&&(v=p.sign+v),v=p.specifier===n.call(p.specifier)?n.call(v):t.call(v),v}return Ot=b,Ot}/**
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
*/var Nt,sm;function s7(){if(sm)return Nt;sm=1;function r(t){var n="",a;for(a=0;a<t;a++)n+=" ";return n}function e(t,n,a){var i=n-t.length;return i<0||(t=a?t+r(i):r(i)+t),t}return Nt=e,Nt}/**
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
*/var St,fm;function f7(){if(fm)return St;fm=1;var r=i7(),e=u7(),t=o7(),n=s7(),a=oE(),i=String.fromCharCode,o=Array.isArray;function s(d){return d!==d}function l(d){var m={};return m.specifier=d.specifier,m.precision=d.precision===void 0?1:d.precision,m.width=d.width,m.flags=d.flags||"",m.mapping=d.mapping,m}function g(d){var m,b,p,q,v,f,u,c,h;if(!o(d))throw new TypeError("invalid argument. First argument must be an array. Value: `"+d+"`.");for(f="",u=1,c=0;c<d.length;c++)if(p=d[c],e(p))f+=p;else{if(m=p.precision!==void 0,p=l(p),!p.specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+p+"`.");for(p.mapping&&(u=p.mapping),b=p.flags,h=0;h<b.length;h++)switch(q=b.charAt(h),q){case" ":p.sign=" ";break;case"+":p.sign="+";break;case"-":p.padRight=!0,p.padZeros=!1;break;case"0":p.padZeros=b.indexOf("-")<0;break;case"#":p.alternate=!0;break;default:throw new Error("invalid flag: "+q)}if(p.width==="*"){if(p.width=parseInt(arguments[u],10),u+=1,s(p.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+p.width+"`.");p.width<0&&(p.padRight=!0,p.width=-p.width)}if(m&&p.precision==="*"){if(p.precision=parseInt(arguments[u],10),u+=1,s(p.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+p.precision+"`.");p.precision<0&&(p.precision=1,m=!1)}switch(p.arg=arguments[u],p.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":m&&(p.padZeros=!1),p.arg=r(p);break;case"s":p.maxWidth=m?p.precision:-1,p.arg=String(p.arg);break;case"c":if(!s(p.arg)){if(v=parseInt(p.arg,10),v<0||v>127)throw new Error("invalid character code. Value: "+p.arg);p.arg=s(v)?String(p.arg):i(v)}break;case"e":case"E":case"f":case"F":case"g":case"G":m||(p.precision=6),p.arg=t(p);break;default:throw new Error("invalid specifier: "+p.specifier)}p.maxWidth>=0&&p.arg.length>p.maxWidth&&(p.arg=p.arg.substring(0,p.maxWidth)),p.padZeros?p.arg=a(p.arg,p.width||p.precision,p.padRight):p.width&&(p.arg=n(p.arg,p.width,p.padRight)),f+=p.arg||"",u+=1}return f}return St=g,St}/**
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
*/var Tt,vm;function v7(){if(vm)return Tt;vm=1;var r=f7();return Tt=r,Tt}/**
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
*/var At,lm;function l7(){if(lm)return At;lm=1;var r=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function e(n){var a={mapping:n[1]?parseInt(n[1],10):void 0,flags:n[2],width:n[3],precision:n[5],specifier:n[6]};return n[4]==="."&&n[5]===void 0&&(a.precision="1"),a}function t(n){var a,i,o,s;for(i=[],s=0,o=r.exec(n);o;)a=n.slice(s,r.lastIndex-o[0].length),a.length&&i.push(a),i.push(e(o)),s=r.lastIndex,o=r.exec(n);return a=n.slice(s),a.length&&i.push(a),i}return At=t,At}/**
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
*/var Mt,cm;function c7(){if(cm)return Mt;cm=1;var r=l7();return Mt=r,Mt}/**
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
*/var Pt,gm;function g7(){if(gm)return Pt;gm=1;function r(e){return typeof e=="string"}return Pt=r,Pt}/**
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
*/var It,pm;function p7(){if(pm)return It;pm=1;var r=v7(),e=c7(),t=g7();function n(a){var i,o;if(!t(a))throw new TypeError(n("invalid argument. First argument must be a string. Value: `%s`.",a));for(i=[e(a)],o=1;o<arguments.length;o++)i.push(arguments[o]);return r.apply(null,i)}return It=n,It}/**
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
*/var Ft,mm;function Y(){if(mm)return Ft;mm=1;var r=p7();return Ft=r,Ft}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var jt,hm;function m7(){if(hm)return jt;hm=1;var r=Y(),e=Object.prototype,t=e.toString,n=e.__defineGetter__,a=e.__defineSetter__,i=e.__lookupGetter__,o=e.__lookupSetter__;function s(l,g,d){var m,b,p,q;if(typeof l!="object"||l===null||t.call(l)==="[object Array]")throw new TypeError(r("invalid argument. First argument must be an object. Value: `%s`.",l));if(typeof d!="object"||d===null||t.call(d)==="[object Array]")throw new TypeError(r("invalid argument. Property descriptor must be an object. Value: `%s`.",d));if(b="value"in d,b&&(i.call(l,g)||o.call(l,g)?(m=l.__proto__,l.__proto__=e,delete l[g],l[g]=d.value,l.__proto__=m):l[g]=d.value),p="get"in d,q="set"in d,b&&(p||q))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&n&&n.call(l,g,d.get),q&&a&&a.call(l,g,d.set),l}return jt=s,jt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Vt,dm;function ae(){if(dm)return Vt;dm=1;var r=n7(),e=a7(),t=m7(),n;return r()?n=e:n=t,Vt=n,Vt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Gt,ym;function h7(){if(ym)return Gt;ym=1;var r=ae();function e(t,n,a){r(t,n,{configurable:!1,enumerable:!0,writable:!1,value:a})}return Gt=e,Gt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ct,bm;function d7(){if(bm)return Ct;bm=1;var r=h7();return Ct=r,Ct}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Bt,$m;function y7(){if($m)return Bt;$m=1;var r=ae();function e(t,n,a){r(t,n,{configurable:!1,enumerable:!1,writable:!1,value:a})}return Bt=e,Bt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ht,qm;function D(){if(qm)return Ht;qm=1;var r=y7();return Ht=r,Ht}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ut,wm;function b7(){if(wm)return Ut;wm=1;var r=ae();function e(t,n,a){r(t,n,{configurable:!1,enumerable:!1,get:a})}return Ut=e,Ut}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Wt,_m;function er(){if(_m)return Wt;_m=1;var r=b7();return Wt=r,Wt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zt,Rm;function $7(){if(Rm)return zt;Rm=1;var r=ae();function e(t,n,a,i){r(t,n,{configurable:!1,enumerable:!1,get:a,set:i})}return zt=e,zt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var kt,Em;function nr(){if(Em)return kt;Em=1;var r=$7();return kt=r,kt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Dt,Lm;function q7(){if(Lm)return Dt;Lm=1;function r(){return typeof Symbol=="function"&&typeof Symbol("foo")=="symbol"}return Dt=r,Dt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Jt,Om;function w7(){if(Om)return Jt;Om=1;var r=q7();return Jt=r,Jt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Xt,Nm;function _7(){if(Nm)return Xt;Nm=1;var r=w7(),e=r();function t(){return e&&typeof Symbol.toStringTag=="symbol"}return Xt=t,Xt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Yt,Sm;function tt(){if(Sm)return Yt;Sm=1;var r=_7();return Yt=r,Yt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Kt,Tm;function sE(){if(Tm)return Kt;Tm=1;var r=Object.prototype.toString;return Kt=r,Kt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Zt,Am;function R7(){if(Am)return Zt;Am=1;var r=sE();function e(t){return r.call(t)}return Zt=e,Zt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Qt,Mm;function E7(){if(Mm)return Qt;Mm=1;var r=Object.prototype.hasOwnProperty;function e(t,n){return t==null?!1:r.call(t,n)}return Qt=e,Qt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xt,Pm;function rr(){if(Pm)return xt;Pm=1;var r=E7();return xt=r,xt}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var rn,Im;function L7(){if(Im)return rn;Im=1;var r=typeof Symbol=="function"?Symbol:void 0;return rn=r,rn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var en,Fm;function fE(){if(Fm)return en;Fm=1;var r=L7();return en=r,en}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var tn,jm;function O7(){if(jm)return tn;jm=1;var r=fE(),e=typeof r=="function"?r.toStringTag:"";return tn=e,tn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var nn,Vm;function N7(){if(Vm)return nn;Vm=1;var r=rr(),e=O7(),t=sE();function n(a){var i,o,s;if(a==null)return t.call(a);o=a[e],i=r(a,e);try{a[e]=void 0}catch{return t.call(a)}return s=t.call(a),i?a[e]=o:delete a[e],s}return nn=n,nn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var an,Gm;function qr(){if(Gm)return an;Gm=1;var r=tt(),e=R7(),t=N7(),n;return r()?n=t:n=e,an=n,an}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var un,Cm;function S7(){if(Cm)return un;Cm=1;var r=qr(),e;function t(n){return r(n)==="[object Array]"}return Array.isArray?e=Array.isArray:e=t,un=e,un}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var on,Bm;function ve(){if(Bm)return on;Bm=1;var r=S7();return on=r,on}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var sn,Hm;function T7(){if(Hm)return sn;Hm=1;var r=ve();function e(t){return typeof t=="object"&&t!==null&&!r(t)}return sn=e,sn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fn,Um;function sp(){if(Um)return fn;Um=1;var r=T7();return fn=r,fn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vn,Wm;function A7(){if(Wm)return vn;Wm=1;var r=/./;return vn=r,vn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ln,zm;function vE(){if(zm)return ln;zm=1;function r(e){return typeof e=="boolean"}return ln=r,ln}/**
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
*/var cn,km;function M7(){if(km)return cn;km=1;var r=Boolean;return cn=r,cn}/**
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
*/var gn,Dm;function P7(){if(Dm)return gn;Dm=1;var r=M7();return gn=r,gn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pn,Jm;function I7(){if(Jm)return pn;Jm=1;var r=Boolean.prototype.toString;return pn=r,pn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var mn,Xm;function F7(){if(Xm)return mn;Xm=1;var r=I7();function e(t){try{return r.call(t),!0}catch{return!1}}return mn=e,mn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var hn,Ym;function lE(){if(Ym)return hn;Ym=1;var r=tt(),e=qr(),t=P7(),n=F7(),a=r();function i(o){return typeof o=="object"?o instanceof t?!0:a?n(o):e(o)==="[object Boolean]":!1}return hn=i,hn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var dn,Km;function j7(){if(Km)return dn;Km=1;var r=vE(),e=lE();function t(n){return r(n)||e(n)}return dn=t,dn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var yn,Zm;function Pr(){if(Zm)return yn;Zm=1;var r=D(),e=j7(),t=vE(),n=lE();return r(e,"isPrimitive",t),r(e,"isObject",n),yn=e,yn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var bn,Qm;function V7(){if(Qm)return bn;Qm=1;function r(){return new Function("return this;")()}return bn=r,bn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $n,xm;function G7(){if(xm)return $n;xm=1;var r=typeof self=="object"?self:null;return $n=r,$n}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var _n,th;function H7(){if(th)return _n;th=1;var r=Pr().isPrimitive,e=Y(),t=V7(),n=G7(),a=C7(),i=B7();function o(s){if(arguments.length){if(!r(s))throw new TypeError(e("invalid argument. Must provide a boolean. Value: `%s`.",s));if(s)return t()}if(i)return i;if(n)return n;if(a)return a;throw new Error("unexpected error. Unable to resolve global object.")}return _n=o,_n}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Rn,nh;function U7(){if(nh)return Rn;nh=1;var r=H7(),e=r(),t=e.document&&e.document.childNodes;return Rn=t,Rn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var En,ah;function W7(){if(ah)return En;ah=1;var r=Int8Array;return En=r,En}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ln,ih;function z7(){if(ih)return Ln;ih=1;var r=A7(),e=U7(),t=W7();function n(){return typeof r=="function"||typeof t=="object"||typeof e=="function"}return Ln=n,Ln}/**
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
*/var Nn,oh;function k7(){if(oh)return Nn;oh=1;var r=cE(),e=r();return Nn=e,Nn}/**
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
*/var Sn,sh;function gE(){if(sh)return Sn;sh=1;var r=D(),e=cE(),t=k7();return r(e,"REGEXP",t),Sn=e,Sn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Pn,ch;function pE(){if(ch)return Pn;ch=1;var r=D(),e=J7(),t=X7(),n=e(t);return r(t,"isObjectLikeArray",n),Pn=t,Pn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var In,gh;function Y7(){if(gh)return In;gh=1;var r=pE();function e(t){return r(t)&&(t._isBuffer||t.constructor&&typeof t.constructor.isBuffer=="function"&&t.constructor.isBuffer(t))}return In=e,In}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Fn,ph;function mE(){if(ph)return Fn;ph=1;var r=Y7();return Fn=r,Fn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var jn,mh;function K7(){if(mh)return jn;mh=1;var r=qr(),e=gE().REGEXP,t=mE();function n(a){var i,o,s;if(o=r(a).slice(8,-1),(o==="Object"||o==="Error")&&a.constructor){if(s=a.constructor,typeof s.name=="string")return s.name;if(i=e.exec(s.toString()),i)return i[1]}return t(a)?"Buffer":o}return jn=n,jn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Bn,bh;function hE(){if(bh)return Bn;bh=1;var r=z7(),e=Z7(),t=Q7(),n=r()?t:e;return Bn=n,Bn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Hn,$h;function x7(){if($h)return Hn;$h=1;var r=hE();function e(t){return r(t)==="function"}return Hn=e,Hn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Un,qh;function ur(){if(qh)return Un;qh=1;var r=x7();return Un=r,Un}/**
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
*/var Wn,wh;function r9(){if(wh)return Wn;wh=1;var r=Object;return Wn=r,Wn}/**
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
*/var zn,_h;function fp(){if(_h)return zn;_h=1;var r=r9();return zn=r,zn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var kn,Rh;function e9(){if(Rh)return kn;Rh=1;var r=Object.getPrototypeOf;return kn=r,kn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Yn,Nh;function i9(){if(Nh)return Yn;Nh=1;var r=fp(),e=a9();function t(n){return n==null?null:(n=r(n),e(n))}return Yn=t,Yn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Zn,Th;function u9(){if(Th)return Zn;Th=1;var r=sp(),e=ur(),t=nt(),n=rr(),a=qr(),i=Object.prototype;function o(l){var g;for(g in l)if(!n(l,g))return!1;return!0}function s(l){var g;return r(l)?(g=t(l),g?!n(l,"constructor")&&n(g,"constructor")&&e(g.constructor)&&a(g.constructor)==="[object Function]"&&n(g,"isPrototypeOf")&&e(g.isPrototypeOf)&&(g===i||o(l)):!0):!1}return Zn=s,Zn}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var ua,Ch;function Ur(){if(Ch)return ua;Ch=1;var r=v9();return ua=r,ua}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var sa,Hh;function c9(){if(Hh)return sa;Hh=1;var r=Ur(),e=l9();function t(n){return typeof n=="object"&&n!==null&&typeof n.length=="number"&&r(n.length)&&n.length>=0&&n.length<=e}return sa=t,sa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fa,Uh;function le(){if(Uh)return fa;Uh=1;var r=c9();return fa=r,fa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var va,Wh;function g9(){if(Wh)return va;Wh=1;var r=qr(),e=typeof Uint32Array=="function";function t(n){return e&&n instanceof Uint32Array||r(n)==="[object Uint32Array]"}return va=t,va}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var la,zh;function ie(){if(zh)return la;zh=1;var r=g9();return la=r,la}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ca,kh;function dE(){if(kh)return ca;kh=1;function r(e){return typeof e=="number"}return ca=r,ca}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ga,Dh;function p9(){return Dh||(Dh=1,ga=Number),ga}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pa,Jh;function vp(){if(Jh)return pa;Jh=1;var r=p9();return pa=r,pa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ma,Xh;function m9(){if(Xh)return ma;Xh=1;var r=vp(),e=r.prototype.toString;return ma=e,ma}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ha,Yh;function h9(){if(Yh)return ha;Yh=1;var r=m9();function e(t){try{return r.call(t),!0}catch{return!1}}return ha=e,ha}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var da,Kh;function yE(){if(Kh)return da;Kh=1;var r=tt(),e=qr(),t=vp(),n=h9(),a=r();function i(o){return typeof o=="object"?o instanceof t?!0:a?n(o):e(o)==="[object Number]":!1}return da=i,da}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var ba,Qh;function pr(){if(Qh)return ba;Qh=1;var r=D(),e=d9(),t=dE(),n=yE();return r(e,"isPrimitive",t),r(e,"isObject",n),ba=e,ba}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var qa,rd;function Xr(){if(rd)return qa;rd=1;var r=vp(),e=r.NEGATIVE_INFINITY;return qa=e,qa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wa,ed;function bE(){if(ed)return wa;ed=1;var r=Nr(),e=Xr(),t=Ur();function n(a){return a<r&&a>e&&t(a)}return wa=n,wa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _a,td;function $E(){if(td)return _a;td=1;var r=pr().isPrimitive,e=bE();function t(n){return r(n)&&e(n)}return _a=t,_a}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ra,nd;function qE(){if(nd)return Ra;nd=1;var r=pr().isObject,e=bE();function t(n){return r(n)&&e(n.valueOf())}return Ra=t,Ra}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Fa,pd;function w9(){if(pd)return Fa;pd=1;var r=q9();return Fa=r,Fa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ja,md;function _9(){if(md)return ja;md=1;var r=typeof Uint32Array=="function"?Uint32Array:void 0;return ja=r,ja}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Ha,$d;function O9(){if($d)return Ha;$d=1;function r(e){return e!==e}return Ha=r,Ha}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ua,qd;function Q(){if(qd)return Ua;qd=1;var r=O9();return Ua=r,Ua}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Wa,wd;function N9(){if(wd)return Wa;wd=1;var r=L9(),e=Q(),t=Nr();function n(a,i){return e(a)||e(i)?NaN:a===t||i===t?t:a===i&&a===0?r(a)?a:i:a>i?a:i}return Wa=n,Wa}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var za,_d;function S9(){if(_d)return za;_d=1;var r=N9();return za=r,za}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ka,Rd;function T9(){if(Rd)return ka;Rd=1;var r=65535;function e(t,n){var a,i,o,s,l,g;return t>>>=0,n>>>=0,o=t>>>16>>>0,s=n>>>16>>>0,l=(t&r)>>>0,g=(n&r)>>>0,a=l*g>>>0,i=o*g+l*s<<16>>>0,a+i>>>0}return ka=e,ka}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Ya,Nd;function I9(){if(Nd)return Ya;Nd=1;var r={float64:e,float32:t,int32:n,int16:a,int8:i,uint32:o,uint16:s,uint8:l,uint8c:g,generic:d,default:m};function e(p,q){return p[q]}function t(p,q){return p[q]}function n(p,q){return p[q]}function a(p,q){return p[q]}function i(p,q){return p[q]}function o(p,q){return p[q]}function s(p,q){return p[q]}function l(p,q){return p[q]}function g(p,q){return p[q]}function d(p,q){return p[q]}function m(p,q){return p[q]}function b(p){var q=r[p];return typeof q=="function"?q:r.default}return Ya=b,Ya}/**
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
*/var Ka,Sd;function lp(){if(Sd)return Ka;Sd=1;var r=I9();return Ka=r,Ka}/**
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
*/var Za,Td;function F9(){if(Td)return Za;Td=1;var r={float64:e,float32:t,int32:n,int16:a,int8:i,uint32:o,uint16:s,uint8:l,uint8c:g,generic:d,default:m};function e(p,q,v){p[q]=v}function t(p,q,v){p[q]=v}function n(p,q,v){p[q]=v}function a(p,q,v){p[q]=v}function i(p,q,v){p[q]=v}function o(p,q,v){p[q]=v}function s(p,q,v){p[q]=v}function l(p,q,v){p[q]=v}function g(p,q,v){p[q]=v}function d(p,q,v){p[q]=v}function m(p,q,v){p[q]=v}function b(p){var q=r[p];return typeof q=="function"?q:r.default}return Za=b,Za}/**
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
*/var ri,Pd;function cp(){if(Pd)return ri;Pd=1;var r=V9();return ri=r,ri}/**
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
*/var ai,Vd;function H9(){if(Vd)return ai;Vd=1;var r=qr(),e=typeof Float64Array=="function";function t(n){return e&&n instanceof Float64Array||r(n)==="[object Float64Array]"}return ai=t,ai}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ii,Gd;function U9(){if(Gd)return ii;Gd=1;var r=H9();return ii=r,ii}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ui,Cd;function W9(){if(Cd)return ui;Cd=1;var r=typeof Float64Array=="function"?Float64Array:null;return ui=r,ui}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var oi,Bd;function z9(){if(Bd)return oi;Bd=1;var r=U9(),e=W9();function t(){var n,a;if(typeof e!="function")return!1;try{a=new e([1,3.14,-3.14,NaN]),n=r(a)&&a[0]===1&&a[1]===3.14&&a[2]===-3.14&&a[3]!==a[3]}catch{n=!1}return n}return oi=t,oi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var si,Hd;function EE(){if(Hd)return si;Hd=1;var r=z9();return si=r,si}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fi,Ud;function k9(){if(Ud)return fi;Ud=1;var r=typeof Float64Array=="function"?Float64Array:void 0;return fi=r,fi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vi,Wd;function D9(){if(Wd)return vi;Wd=1;function r(){throw new Error("not implemented")}return vi=r,vi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var li,zd;function jr(){if(zd)return li;zd=1;var r=EE(),e=k9(),t=D9(),n;return r()?n=e:n=t,li=n,li}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ci,kd;function J9(){if(kd)return ci;kd=1;var r=qr(),e=typeof Float32Array=="function";function t(n){return e&&n instanceof Float32Array||r(n)==="[object Float32Array]"}return ci=t,ci}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var pi,Jd;function Y9(){if(Jd)return pi;Jd=1;var r=typeof Float32Array=="function"?Float32Array:null;return pi=r,pi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var mi,Xd;function K9(){if(Xd)return mi;Xd=1;var r=X9(),e=Nr(),t=Y9();function n(){var a,i;if(typeof t!="function")return!1;try{i=new t([1,3.14,-3.14,5e40]),a=r(i)&&i[0]===1&&i[1]===3.140000104904175&&i[2]===-3.140000104904175&&i[3]===e}catch{a=!1}return a}return mi=n,mi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var qi,r2;function gp(){if(r2)return qi;r2=1;var r=rO();return qi=r,qi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Ei,a2;function aO(){if(a2)return Ei;a2=1;var r=gp(),e=eO(),t=tO(),n=nO();function a(){var i,o;if(typeof n!="function")return!1;try{o=new n([1,3.14,-3.14,e+1]),i=r(o)&&o[0]===1&&o[1]===3&&o[2]===-3&&o[3]===t}catch{i=!1}return i}return Ei=a,Ei}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Fi,p2;function gO(){if(p2)return Fi;p2=1;var r=cO();return Fi=r,Fi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ji,m2;function pO(){if(m2)return ji;m2=1;var r=typeof Uint16Array=="function"?Uint16Array:void 0;return ji=r,ji}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Vi,h2;function mO(){if(h2)return Vi;h2=1;function r(){throw new Error("not implemented")}return Vi=r,Vi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Gi,d2;function at(){if(d2)return Gi;d2=1;var r=gO(),e=pO(),t=mO(),n;return r()?n=e:n=t,Gi=n,Gi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Hi,$2;function yO(){if($2)return Hi;$2=1;var r=32767;return Hi=r,Hi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ui,q2;function bO(){if(q2)return Ui;q2=1;var r=-32768;return Ui=r,Ui}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Wi,w2;function $O(){if(w2)return Wi;w2=1;var r=typeof Int16Array=="function"?Int16Array:null;return Wi=r,Wi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zi,_2;function qO(){if(_2)return zi;_2=1;var r=dO(),e=yO(),t=bO(),n=$O();function a(){var i,o;if(typeof n!="function")return!1;try{o=new n([1,3.14,-3.14,e+1]),i=r(o)&&o[0]===1&&o[1]===3&&o[2]===-3&&o[3]===t}catch{i=!1}return i}return zi=a,zi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ki,R2;function wO(){if(R2)return ki;R2=1;var r=qO();return ki=r,ki}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Xi,O2;function pp(){if(O2)return Xi;O2=1;var r=wO(),e=_O(),t=RO(),n;return r()?n=e:n=t,Xi=n,Xi}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var su,H2;function VO(){if(H2)return su;H2=1;var r=jO();return su=r,su}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fu,U2;function GO(){if(U2)return fu;U2=1;var r=typeof Uint8ClampedArray=="function"?Uint8ClampedArray:void 0;return fu=r,fu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vu,W2;function CO(){if(W2)return vu;W2=1;function r(){throw new Error("not implemented")}return vu=r,vu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var lu,z2;function mp(){if(z2)return lu;z2=1;var r=VO(),e=GO(),t=CO(),n;return r()?n=e:n=t,lu=n,lu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var cu,k2;function BO(){if(k2)return cu;k2=1;var r=qr(),e=typeof Int8Array=="function";function t(n){return e&&n instanceof Int8Array||r(n)==="[object Int8Array]"}return cu=t,cu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gu,D2;function HO(){if(D2)return gu;D2=1;var r=BO();return gu=r,gu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pu,J2;function UO(){if(J2)return pu;J2=1;var r=127;return pu=r,pu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var mu,X2;function WO(){if(X2)return mu;X2=1;var r=-128;return mu=r,mu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var hu,Y2;function zO(){if(Y2)return hu;Y2=1;var r=typeof Int8Array=="function"?Int8Array:null;return hu=r,hu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var du,K2;function kO(){if(K2)return du;K2=1;var r=HO(),e=UO(),t=WO(),n=zO();function a(){var i,o;if(typeof n!="function")return!1;try{o=new n([1,3.14,-3.14,e+1]),i=r(o)&&o[0]===1&&o[1]===3&&o[2]===-3&&o[3]===t}catch{i=!1}return i}return du=a,du}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var yu,Z2;function DO(){if(Z2)return yu;Z2=1;var r=kO();return yu=r,yu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var qu,ry;function hp(){if(ry)return qu;ry=1;var r=DO(),e=JO(),t=XO(),n;return r()?n=e:n=t,qu=n,qu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Eu,ay;function dp(){if(ay)return Eu;ay=1;var r=D(),e=YO(),t=LE(),n=OE();return r(e,"isPrimitive",t),r(e,"isObject",n),Eu=e,Eu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Ou,uy;function ZO(){if(uy)return Ou;uy=1;var r=Ur(),e=KO();function t(n){return typeof n=="object"&&n!==null&&typeof n.length=="number"&&r(n.length)&&n.length>=0&&n.length<=e}return Ou=t,Ou}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Fu,py;function eN(){if(py)return Fu;py=1;var r=SE(),e=TE();function t(n){return r(n)||e(n)}return Fu=t,Fu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ju,my;function _e(){if(my)return ju;my=1;var r=D(),e=eN(),t=SE(),n=TE();return r(e,"isPrimitive",t),r(e,"isObject",n),ju=e,ju}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Cu,yy;function aN(){if(yy)return Cu;yy=1;var r=pr().isPrimitive,e=ae(),t=D(),n=Y(),a=tN(),i=nN();function o(s,l){if(!(this instanceof o))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!r(s))throw new TypeError(n("invalid argument. Real component must be a number. Value: `%s`.",s));if(!r(l))throw new TypeError(n("invalid argument. Imaginary component must be a number. Value: `%s`.",l));return e(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:s}),e(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:l}),this}return t(o,"BYTES_PER_ELEMENT",8),t(o.prototype,"BYTES_PER_ELEMENT",8),t(o.prototype,"byteLength",16),t(o.prototype,"toString",a),t(o.prototype,"toJSON",i),Cu=o,Cu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Hu,$y;function uN(){if($y)return Hu;$y=1;var r=typeof Math.fround=="function"?Math.fround:null;return Hu=r,Hu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Uu,qy;function oN(){if(qy)return Uu;qy=1;var r=$e(),e=new r(1);function t(n){return e[0]=n,e[0]}return Uu=t,Uu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Wu,wy;function AE(){if(wy)return Wu;wy=1;var r=uN(),e=oN(),t;return typeof r=="function"?t=r:t=e,Wu=t,Wu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zu,_y;function sN(){if(_y)return zu;_y=1;function r(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i",e}return zu=r,zu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ku,Ry;function fN(){if(Ry)return ku;Ry=1;function r(){var e={};return e.type="Complex64",e.re=this.re,e.im=this.im,e}return ku=r,ku}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Du,Ey;function vN(){if(Ey)return Du;Ey=1;var r=pr().isPrimitive,e=ae(),t=D(),n=AE(),a=Y(),i=sN(),o=fN();function s(l,g){if(!(this instanceof s))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!r(l))throw new TypeError(a("invalid argument. Real component must be a number. Value: `%s`.",l));if(!r(g))throw new TypeError(a("invalid argument. Imaginary component must be a number. Value: `%s`.",g));return e(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:n(l)}),e(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:n(g)}),this}return t(s,"BYTES_PER_ELEMENT",4),t(s.prototype,"BYTES_PER_ELEMENT",4),t(s.prototype,"byteLength",8),t(s.prototype,"toString",i),t(s.prototype,"toJSON",o),Du=s,Du}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Ku,Sy;function gN(){if(Sy)return Ku;Sy=1;var r=Ur();function e(t){return r(t/2)}return Ku=e,Ku}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Zu,Ty;function yp(){if(Ty)return Zu;Ty=1;var r=gN();return Zu=r,Zu}/**
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
*/var Qu,Ay;function pN(){if(Ay)return Qu;Ay=1;var r=8;function e(t){return typeof t=="object"&&t!==null&&t.constructor.name==="Complex64Array"&&t.BYTES_PER_ELEMENT===r}return Qu=e,Qu}/**
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
*/var xu,My;function ME(){if(My)return xu;My=1;var r=pN();return xu=r,xu}/**
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
*/var ro,Py;function mN(){if(Py)return ro;Py=1;var r=16;function e(t){return typeof t=="object"&&t!==null&&t.constructor.name==="Complex128Array"&&t.BYTES_PER_ELEMENT===r}return ro=e,ro}/**
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
*/var eo,Iy;function PE(){if(Iy)return eo;Iy=1;var r=mN();return eo=r,eo}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var no,jy;function bp(){if(jy)return no;jy=1;var r=hN();return no=r,no}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ao,Vy;function dN(){if(Vy)return ao;Vy=1;var r=bp(),e=r()?Symbol.iterator:null;return ao=e,ao}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var so,Hy;function $N(){if(Hy)return so;Hy=1;var r=pr().isPrimitive,e=ae(),t=D(),n=AE(),a=Y(),i=yN(),o=bN();function s(l,g){if(!(this instanceof s))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!r(l))throw new TypeError(a("invalid argument. Real component must be a number. Value: `%s`.",l));if(!r(g))throw new TypeError(a("invalid argument. Imaginary component must be a number. Value: `%s`.",g));return e(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:n(l)}),e(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:n(g)}),this}return t(s,"BYTES_PER_ELEMENT",4),t(s.prototype,"BYTES_PER_ELEMENT",4),t(s.prototype,"byteLength",8),t(s.prototype,"toString",i),t(s.prototype,"toJSON",o),so=s,so}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fo,Uy;function qN(){if(Uy)return fo;Uy=1;var r=$N();return fo=r,fo}/**
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
*/var vo,Wy;function wN(){if(Wy)return vo;Wy=1;function r(e){return e.re}return vo=r,vo}/**
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
*/var lo,zy;function ut(){if(zy)return lo;zy=1;var r=wN();return lo=r,lo}/**
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
*/var co,ky;function _N(){if(ky)return co;ky=1;function r(e){return e.im}return co=r,co}/**
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
*/var po,Jy;function RN(){if(Jy)return po;Jy=1;var r=$e();function e(t,n){return new r(t.buffer,t.byteOffset+t.BYTES_PER_ELEMENT*n,2*(t.length-n))}return po=e,po}/**
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
*/var mo,Xy;function $p(){if(Xy)return mo;Xy=1;var r=RN();return mo=r,mo}/**
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
*/var yo,Ky;function qp(){if(Ky)return yo;Ky=1;var r=EN();return yo=r,yo}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var $o,Qy;function ON(){if(Qy)return $o;Qy=1;var r=we(),e=oe(),t=ut(),n=ot(),a=Y();function i(o,s,l){var g,d,m,b;for(g=[],b=-1;d=o.next(),!d.done;)if(b+=1,m=s.call(l,d.value,b),r(m)&&m.length>=2)g.push(m[0],m[1]);else if(e(m))g.push(t(m),n(m));else return new TypeError(a("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",m));return g}return $o=i,$o}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var qo,xy;function NN(){if(xy)return qo;xy=1;var r=oe(),e=ut(),t=ot();function n(a,i){var o,s,l,g;for(o=i.length,g=0,l=0;l<o;l++){if(s=i[l],!r(s))return null;a[g]=e(s),a[g+1]=t(s),g+=2}return a}return qo=n,qo}var wo,rb;function SN(){if(rb)return wo;rb=1;var r=dp().isPrimitive,e=we(),t=le(),n=NE(),a=sp(),i=ve(),o=_e().isPrimitive,s=ur(),l=oe(),g=yp(),d=Ur(),m=ME(),b=PE(),p=bp(),q=IE(),v=D(),f=er(),u=$e(),c=qN(),h=Y(),R=ut(),A=ot(),G=wr(),M=$p(),C=qp(),N=lp(),E=cp(),P=LN(),O=ON(),F=NN(),S=u.BYTES_PER_ELEMENT*2,I=p();function T(j){return j instanceof z||typeof j=="object"&&j!==null&&(j.constructor.name==="Complex64Array"||j.constructor.name==="Complex128Array")&&typeof j._length=="number"&&typeof j._buffer=="object"}function k(j){return j===z||j.name==="Complex128Array"}function X(j,$){return $*=2,new c(j[$],j[$+1])}function z(){var j,$,y,w;if($=arguments.length,!(this instanceof z))return $===0?new z:$===1?new z(arguments[0]):$===2?new z(arguments[0],arguments[1]):new z(arguments[0],arguments[1],arguments[2]);if($===0)y=new u(0);else if($===1)if(r(arguments[0]))y=new u(arguments[0]*2);else if(t(arguments[0]))if(y=arguments[0],w=y.length,w&&i(y)&&l(y[0])){if(y=F(new u(w*2),y),y===null){if(!g(w))throw new RangeError(h("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",w));y=new u(arguments[0])}}else{if(m(y))y=M(y,0);else if(b(y))y=C(y,0);else if(!g(w))throw new RangeError(h("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",w));y=new u(y)}else if(n(arguments[0])){if(y=arguments[0],!d(y.byteLength/S))throw new RangeError(h("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",S,y.byteLength));y=new u(y)}else if(a(arguments[0])){if(y=arguments[0],I===!1)throw new TypeError(h("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",y));if(!s(y[q]))throw new TypeError(h("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",y));if(y=y[q](),!s(y.next))throw new TypeError(h("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",y));if(y=P(y),y instanceof Error)throw y;y=new u(y)}else throw new TypeError(h("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));else{if(y=arguments[0],!n(y))throw new TypeError(h("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",y));if(j=arguments[1],!r(j))throw new TypeError(h("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",j));if(!d(j/S))throw new RangeError(h("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",S,j));if($===2){if(w=y.byteLength-j,!d(w/S))throw new RangeError(h("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",S,w));y=new u(y,j)}else{if(w=arguments[2],!r(w))throw new TypeError(h("invalid argument. Length must be a nonnegative integer. Value: `%s`.",w));if(w*S>y.byteLength-j)throw new RangeError(h("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",w*S));y=new u(y,j,w*2)}}return v(this,"_buffer",y),v(this,"_length",y.length/2),this}return v(z,"BYTES_PER_ELEMENT",S),v(z,"name","Complex64Array"),v(z,"from",function($){var y,w,L,_,B,H,Z,U,K,W,V,J;if(!s(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!k(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(w=arguments.length,w>1){if(L=arguments[1],!s(L))throw new TypeError(h("invalid argument. Second argument must be a function. Value: `%s`.",L));w>2&&(y=arguments[2])}if(T($)){if(U=$.length,L){for(_=new this(U),B=_._buffer,J=0,V=0;V<U;V++){if(W=L.call(y,$.get(V),V),l(W))B[J]=R(W),B[J+1]=A(W);else if(e(W)&&W.length>=2)B[J]=W[0],B[J+1]=W[1];else throw new TypeError(h("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",W));J+=2}return _}return new this($)}if(t($)){if(L){for(U=$.length,$.get&&$.set?Z=E("default"):Z=N("default"),V=0;V<U;V++)if(!l(Z($,V))){K=!0;break}if(K){if(!g(U))throw new RangeError(h("invalid argument. First argument must have a length which is a multiple of %u. Length: `%u`.",2,U));for(_=new this(U/2),B=_._buffer,V=0;V<U;V++)B[V]=L.call(y,Z($,V),V);return _}for(_=new this(U),B=_._buffer,J=0,V=0;V<U;V++){if(W=L.call(y,Z($,V),V),l(W))B[J]=R(W),B[J+1]=A(W);else if(e(W)&&W.length>=2)B[J]=W[0],B[J+1]=W[1];else throw new TypeError(h("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",W));J+=2}return _}return new this($)}if(a($)&&I&&s($[q])){if(B=$[q](),!s(B.next))throw new TypeError(h("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",$));if(L?H=O(B,L,y):H=P(B),H instanceof Error)throw H;for(U=H.length/2,_=new this(U),B=_._buffer,V=0;V<U;V++)B[V]=H[V];return _}throw new TypeError(h("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",$))}),v(z,"of",function(){var $,y;if(!s(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!k(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for($=[],y=0;y<arguments.length;y++)$.push(arguments[y]);return new this($)}),v(z.prototype,"at",function($){if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!d($))throw new TypeError(h("invalid argument. Must provide an integer. Value: `%s`.",$));if($<0&&($+=this._length),!($<0||$>=this._length))return X(this._buffer,$)}),f(z.prototype,"buffer",function(){return this._buffer.buffer}),f(z.prototype,"byteLength",function(){return this._buffer.byteLength}),f(z.prototype,"byteOffset",function(){return this._buffer.byteOffset}),v(z.prototype,"BYTES_PER_ELEMENT",z.BYTES_PER_ELEMENT),v(z.prototype,"copyWithin",function($,y){if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return arguments.length===2?this._buffer.copyWithin($*2,y*2):this._buffer.copyWithin($*2,y*2,arguments[2]*2),this}),v(z.prototype,"entries",function(){var $,y,w,L,_,B,H;if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return y=this,$=this._buffer,L=this._length,B=-1,H=-2,w={},v(w,"next",Z),v(w,"return",U),q&&v(w,q,K),w;function Z(){var W;return B+=1,_||B>=L?{done:!0}:(H+=2,W=new c($[H],$[H+1]),{value:[B,W],done:!1})}function U(W){return _=!0,arguments.length?{value:W,done:!0}:{done:!0}}function K(){return y.entries()}}),v(z.prototype,"every",function($,y){var w,L;if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!s($))throw new TypeError(h("invalid argument. First argument must be a function. Value: `%s`.",$));for(w=this._buffer,L=0;L<this._length;L++)if(!$.call(y,X(w,L),L,this))return!1;return!0}),v(z.prototype,"fill",function($,y,w){var L,_,B,H,Z,U;if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!l($))throw new TypeError(h("invalid argument. First argument must be a complex number. Value: `%s`.",$));if(L=this._buffer,_=this._length,arguments.length>1){if(!d(y))throw new TypeError(h("invalid argument. Second argument must be an integer. Value: `%s`.",y));if(y<0&&(y+=_,y<0&&(y=0)),arguments.length>2){if(!d(w))throw new TypeError(h("invalid argument. Third argument must be an integer. Value: `%s`.",w));w<0&&(w+=_,w<0&&(w=0)),w>_&&(w=_)}else w=_}else y=0,w=_;for(H=R($),Z=A($),U=y;U<w;U++)B=2*U,L[B]=H,L[B+1]=Z;return this}),v(z.prototype,"filter",function($,y){var w,L,_,B;if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!s($))throw new TypeError(h("invalid argument. First argument must be a function. Value: `%s`.",$));for(w=this._buffer,L=[],_=0;_<this._length;_++)B=X(w,_),$.call(y,B,_,this)&&L.push(B);return new this.constructor(L)}),v(z.prototype,"find",function($,y){var w,L,_;if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!s($))throw new TypeError(h("invalid argument. First argument must be a function. Value: `%s`.",$));for(w=this._buffer,L=0;L<this._length;L++)if(_=X(w,L),$.call(y,_,L,this))return _}),v(z.prototype,"findIndex",function($,y){var w,L,_;if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!s($))throw new TypeError(h("invalid argument. First argument must be a function. Value: `%s`.",$));for(w=this._buffer,L=0;L<this._length;L++)if(_=X(w,L),$.call(y,_,L,this))return L;return-1}),v(z.prototype,"findLast",function($,y){var w,L,_;if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!s($))throw new TypeError(h("invalid argument. First argument must be a function. Value: `%s`.",$));for(w=this._buffer,L=this._length-1;L>=0;L--)if(_=X(w,L),$.call(y,_,L,this))return _}),v(z.prototype,"findLastIndex",function($,y){var w,L,_;if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!s($))throw new TypeError(h("invalid argument. First argument must be a function. Value: `%s`.",$));for(w=this._buffer,L=this._length-1;L>=0;L--)if(_=X(w,L),$.call(y,_,L,this))return L;return-1}),v(z.prototype,"forEach",function($,y){var w,L,_;if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!s($))throw new TypeError(h("invalid argument. First argument must be a function. Value: `%s`.",$));for(w=this._buffer,L=0;L<this._length;L++)_=X(w,L),$.call(y,_,L,this)}),v(z.prototype,"get",function($){if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!r($))throw new TypeError(h("invalid argument. Must provide a nonnegative integer. Value: `%s`.",$));if(!($>=this._length))return X(this._buffer,$)}),v(z.prototype,"includes",function($,y){var w,L,_,B,H;if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!l($))throw new TypeError(h("invalid argument. First argument must be a complex number. Value: `%s`.",$));if(arguments.length>1){if(!d(y))throw new TypeError(h("invalid argument. Second argument must be an integer. Value: `%s`.",y));y<0&&(y+=this._length,y<0&&(y=0))}else y=0;for(_=R($),B=A($),w=this._buffer,H=y;H<this._length;H++)if(L=2*H,_===w[L]&&B===w[L+1])return!0;return!1}),v(z.prototype,"indexOf",function($,y){var w,L,_,B,H;if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!l($))throw new TypeError(h("invalid argument. First argument must be a complex number. Value: `%s`.",$));if(arguments.length>1){if(!d(y))throw new TypeError(h("invalid argument. Second argument must be an integer. Value: `%s`.",y));y<0&&(y+=this._length,y<0&&(y=0))}else y=0;for(_=R($),B=A($),w=this._buffer,H=y;H<this._length;H++)if(L=2*H,_===w[L]&&B===w[L+1])return H;return-1}),v(z.prototype,"join",function($){var y,w,L,_;if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(arguments.length===0)L=",";else if(o($))L=$;else throw new TypeError(h("invalid argument. First argument must be a string. Value: `%s`.",$));for(y=[],w=this._buffer,_=0;_<this._length;_++)y.push(X(w,_).toString());return y.join(L)}),v(z.prototype,"lastIndexOf",function($,y){var w,L,_,B,H;if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!l($))throw new TypeError(h("invalid argument. First argument must be a complex number. Value: `%s`.",$));if(arguments.length>1){if(!d(y))throw new TypeError(h("invalid argument. Second argument must be an integer. Value: `%s`.",y));y>=this._length?y=this._length-1:y<0&&(y+=this._length)}else y=this._length-1;for(_=R($),B=A($),w=this._buffer,H=y;H>=0;H--)if(L=2*H,_===w[L]&&B===w[L+1])return H;return-1}),f(z.prototype,"length",function(){return this._length}),v(z.prototype,"map",function($,y){var w,L,_,B,H;if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!s($))throw new TypeError(h("invalid argument. First argument must be a function. Value: `%s`.",$));for(L=this._buffer,_=new this.constructor(this._length),w=_._buffer,B=0;B<this._length;B++)if(H=$.call(y,X(L,B),B,this),l(H))w[2*B]=R(H),w[2*B+1]=A(H);else if(e(H)&&H.length===2)w[2*B]=H[0],w[2*B+1]=H[1];else throw new TypeError(h("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",H));return _}),v(z.prototype,"reduce",function($,y){var w,L,_,B,H;if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!s($))throw new TypeError(h("invalid argument. First argument must be a function. Value: `%s`.",$));if(w=this._buffer,_=this._length,arguments.length>1)L=y,H=0;else{if(_===0)throw new Error("invalid operation. If not provided an initial value, an array must contain at least one element.");L=X(w,0),H=1}for(;H<_;H++)B=X(w,H),L=$(L,B,H,this);return L}),v(z.prototype,"reverse",function(){var $,y,w,L,_,B;if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(w=this._length,$=this._buffer,L=G(w/2),_=0;_<L;_++)B=w-_-1,y=$[2*_],$[2*_]=$[2*B],$[2*B]=y,y=$[2*_+1],$[2*_+1]=$[2*B+1],$[2*B+1]=y;return this}),v(z.prototype,"set",function($){var y,w,L,_,B,H,Z,U,K;if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(L=this._buffer,arguments.length>1){if(w=arguments[1],!r(w))throw new TypeError(h("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",w))}else w=0;if(l($)){if(w>=this._length)throw new RangeError(h("invalid argument. Index argument is out-of-bounds. Value: `%u`.",w));w*=2,L[w]=R($),L[w+1]=A($);return}if(T($)){if(H=$._length,w+H>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(y=$._buffer,K=L.byteOffset+w*S,y.buffer===L.buffer&&y.byteOffset<K&&y.byteOffset+y.byteLength>K){for(_=new u(y.length),U=0;U<y.length;U++)_[U]=y[U];y=_}for(w*=2,K=0,U=0;U<H;U++)L[w]=y[K],L[w+1]=y[K+1],w+=2,K+=2;return}if(t($)){for(H=$.length,U=0;U<H;U++)if(!l($[U])){B=!0;break}if(B){if(!g(H))throw new RangeError(h("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",H));if(w+H/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(y=$,K=L.byteOffset+w*S,y.buffer===L.buffer&&y.byteOffset<K&&y.byteOffset+y.byteLength>K){for(_=new u(H),U=0;U<H;U++)_[U]=y[U];y=_}for(w*=2,H/=2,K=0,U=0;U<H;U++)L[w]=y[K],L[w+1]=y[K+1],w+=2,K+=2;return}if(w+H>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(w*=2,U=0;U<H;U++)Z=$[U],L[w]=R(Z),L[w+1]=A(Z),w+=2;return}throw new TypeError(h("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",$))}),v(z.prototype,"slice",function($,y){var w,L,_,B,H,Z,U;if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(H=this._buffer,Z=this._length,arguments.length===0)$=0,y=Z;else{if(!d($))throw new TypeError(h("invalid argument. First argument must be an integer. Value: `%s`.",$));if($<0&&($+=Z,$<0&&($=0)),arguments.length===1)y=Z;else{if(!d(y))throw new TypeError(h("invalid argument. Second argument must be an integer. Value: `%s`.",y));y<0?(y+=Z,y<0&&(y=0)):y>Z&&(y=Z)}}for($<y?w=y-$:w=0,_=new this.constructor(w),L=_._buffer,U=0;U<w;U++)B=2*(U+$),L[2*U]=H[B],L[2*U+1]=H[B+1];return _}),v(z.prototype,"some",function($,y){var w,L;if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!s($))throw new TypeError(h("invalid argument. First argument must be a function. Value: `%s`.",$));for(w=this._buffer,L=0;L<this._length;L++)if($.call(y,X(w,L),L,this))return!0;return!1}),v(z.prototype,"subarray",function($,y){var w,L,_;if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(L=this._buffer,_=this._length,arguments.length===0)$=0,y=_;else{if(!d($))throw new TypeError(h("invalid argument. First argument must be an integer. Value: `%s`.",$));if($<0&&($+=_,$<0&&($=0)),arguments.length===1)y=_;else{if(!d(y))throw new TypeError(h("invalid argument. Second argument must be an integer. Value: `%s`.",y));y<0?(y+=_,y<0&&(y=0)):y>_&&(y=_)}}return $>=_?(_=0,w=L.byteLength):$>=y?(_=0,w=L.byteOffset+$*S):(_=y-$,w=L.byteOffset+$*S),new this.constructor(L.buffer,w,_<0?0:_)}),v(z.prototype,"toReversed",function(){var $,y,w,L,_,B;if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(w=this._length,y=new this.constructor(w),L=this._buffer,$=y._buffer,_=0;_<w;_++)B=w-_-1,$[2*_]=L[2*B],$[2*_+1]=L[2*B+1];return y}),v(z.prototype,"toString",function(){var $,y,w;if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for($=[],y=this._buffer,w=0;w<this._length;w++)$.push(X(y,w).toString());return $.join(",")}),v(z.prototype,"with",function($,y){var w,L,_;if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!d($))throw new TypeError(h("invalid argument. First argument must be an integer. Value: `%s`.",$));if(_=this._length,$<0&&($+=_),$<0||$>=_)throw new RangeError(h("invalid argument. Index argument is out-of-bounds. Value: `%s`.",$));if(!l(y))throw new TypeError(h("invalid argument. Second argument must be a complex number. Value: `%s`.",y));return L=new this.constructor(this._buffer),w=L._buffer,w[2*$]=R(y),w[2*$+1]=A(y),L}),wo=z,wo}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _o,eb;function wp(){if(eb)return _o;eb=1;var r=SN();return _o=r,_o}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Lo,ab;function MN(){if(ab)return Lo;ab=1;var r=pr().isPrimitive,e=ae(),t=D(),n=Y(),a=TN(),i=AN();function o(s,l){if(!(this instanceof o))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!r(s))throw new TypeError(n("invalid argument. Real component must be a number. Value: `%s`.",s));if(!r(l))throw new TypeError(n("invalid argument. Imaginary component must be a number. Value: `%s`.",l));return e(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:s}),e(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:l}),this}return t(o,"BYTES_PER_ELEMENT",8),t(o.prototype,"BYTES_PER_ELEMENT",8),t(o.prototype,"byteLength",16),t(o.prototype,"toString",a),t(o.prototype,"toJSON",i),Lo=o,Lo}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Po,lb;function VN(){if(lb)return Po;lb=1;var r=we(),e=oe(),t=Y(),n=st(),a=ft();function i(o,s,l){var g,d,m,b;for(g=[],b=-1;d=o.next(),!d.done;)if(b+=1,m=s.call(l,d.value,b),r(m)&&m.length>=2)g.push(m[0],m[1]);else if(e(m))g.push(n(m),a(m));else return new TypeError(t("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",m));return g}return Po=i,Po}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Io,cb;function GN(){if(cb)return Io;cb=1;var r=oe(),e=st(),t=ft();function n(a,i){var o,s,l,g;for(o=i.length,g=0,l=0;l<o;l++){if(s=i[l],!r(s))return null;a[g]=e(s),a[g+1]=t(s),g+=2}return a}return Io=n,Io}var Fo,gb;function CN(){if(gb)return Fo;gb=1;var r=dp().isPrimitive,e=we(),t=le(),n=NE(),a=sp(),i=ve(),o=_e(),s=ur(),l=oe(),g=yp(),d=Ur(),m=ME(),b=PE(),p=bp(),q=IE(),v=D(),f=er(),u=jr(),c=PN(),h=st(),R=ft(),A=wr(),G=$p(),M=qp(),C=lp(),N=cp(),E=Y(),P=jN(),O=VN(),F=GN(),S=u.BYTES_PER_ELEMENT*2,I=p();function T(j){return j instanceof z||typeof j=="object"&&j!==null&&(j.constructor.name==="Complex64Array"||j.constructor.name==="Complex128Array")&&typeof j._length=="number"&&typeof j._buffer=="object"}function k(j){return j===z||j.name==="Complex64Array"}function X(j,$){return $*=2,new c(j[$],j[$+1])}function z(){var j,$,y,w;if($=arguments.length,!(this instanceof z))return $===0?new z:$===1?new z(arguments[0]):$===2?new z(arguments[0],arguments[1]):new z(arguments[0],arguments[1],arguments[2]);if($===0)y=new u(0);else if($===1)if(r(arguments[0]))y=new u(arguments[0]*2);else if(t(arguments[0]))if(y=arguments[0],w=y.length,w&&i(y)&&l(y[0])){if(y=F(new u(w*2),y),y===null){if(!g(w))throw new RangeError(E("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",w));y=new u(arguments[0])}}else{if(m(y))y=G(y,0);else if(b(y))y=M(y,0);else if(!g(w))throw new RangeError(E("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",w));y=new u(y)}else if(n(arguments[0])){if(y=arguments[0],!d(y.byteLength/S))throw new RangeError(E("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",S,y.byteLength));y=new u(y)}else if(a(arguments[0])){if(y=arguments[0],I===!1)throw new TypeError(E("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",y));if(!s(y[q]))throw new TypeError(E("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",y));if(y=y[q](),!s(y.next))throw new TypeError(E("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",y));if(y=P(y),y instanceof Error)throw y;y=new u(y)}else throw new TypeError(E("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));else{if(y=arguments[0],!n(y))throw new TypeError(E("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",y));if(j=arguments[1],!r(j))throw new TypeError(E("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",j));if(!d(j/S))throw new RangeError(E("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",S,j));if($===2){if(w=y.byteLength-j,!d(w/S))throw new RangeError(E("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",S,w));y=new u(y,j)}else{if(w=arguments[2],!r(w))throw new TypeError(E("invalid argument. Length must be a nonnegative integer. Value: `%s`.",w));if(w*S>y.byteLength-j)throw new RangeError(E("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",w*S));y=new u(y,j,w*2)}}return v(this,"_buffer",y),v(this,"_length",y.length/2),this}return v(z,"BYTES_PER_ELEMENT",S),v(z,"name","Complex128Array"),v(z,"from",function($){var y,w,L,_,B,H,Z,U,K,W,V,J;if(!s(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!k(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(w=arguments.length,w>1){if(L=arguments[1],!s(L))throw new TypeError(E("invalid argument. Second argument must be a function. Value: `%s`.",L));w>2&&(y=arguments[2])}if(T($)){if(U=$.length,L){for(_=new this(U),B=_._buffer,J=0,V=0;V<U;V++){if(W=L.call(y,$.get(V),V),l(W))B[J]=h(W),B[J+1]=R(W);else if(e(W)&&W.length>=2)B[J]=W[0],B[J+1]=W[1];else throw new TypeError(E("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",W));J+=2}return _}return new this($)}if(t($)){if(L){for(U=$.length,$.get&&$.set?Z=N("default"):Z=C("default"),V=0;V<U;V++)if(!l(Z($,V))){K=!0;break}if(K){if(!g(U))throw new RangeError(E("invalid argument. First argument must have a length which is a multiple of two. Length: `%u`.",U));for(_=new this(U/2),B=_._buffer,V=0;V<U;V++)B[V]=L.call(y,Z($,V),V);return _}for(_=new this(U),B=_._buffer,J=0,V=0;V<U;V++){if(W=L.call(y,Z($,V),V),l(W))B[J]=h(W),B[J+1]=R(W);else if(e(W)&&W.length>=2)B[J]=W[0],B[J+1]=W[1];else throw new TypeError(E("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",W));J+=2}return _}return new this($)}if(a($)&&I&&s($[q])){if(B=$[q](),!s(B.next))throw new TypeError(E("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",$));if(L?H=O(B,L,y):H=P(B),H instanceof Error)throw H;for(U=H.length/2,_=new this(U),B=_._buffer,V=0;V<U;V++)B[V]=H[V];return _}throw new TypeError(E("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",$))}),v(z,"of",function(){var $,y;if(!s(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!k(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for($=[],y=0;y<arguments.length;y++)$.push(arguments[y]);return new this($)}),v(z.prototype,"at",function($){if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!d($))throw new TypeError(E("invalid argument. Must provide an integer. Value: `%s`.",$));if($<0&&($+=this._length),!($<0||$>=this._length))return X(this._buffer,$)}),f(z.prototype,"buffer",function(){return this._buffer.buffer}),f(z.prototype,"byteLength",function(){return this._buffer.byteLength}),f(z.prototype,"byteOffset",function(){return this._buffer.byteOffset}),v(z.prototype,"BYTES_PER_ELEMENT",z.BYTES_PER_ELEMENT),v(z.prototype,"copyWithin",function($,y){if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return arguments.length===2?this._buffer.copyWithin($*2,y*2):this._buffer.copyWithin($*2,y*2,arguments[2]*2),this}),v(z.prototype,"entries",function(){var $,y,w,L,_,B,H;if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return y=this,$=this._buffer,L=this._length,B=-1,H=-2,w={},v(w,"next",Z),v(w,"return",U),q&&v(w,q,K),w;function Z(){var W;return B+=1,_||B>=L?{done:!0}:(H+=2,W=new c($[H],$[H+1]),{value:[B,W],done:!1})}function U(W){return _=!0,arguments.length?{value:W,done:!0}:{done:!0}}function K(){return y.entries()}}),v(z.prototype,"every",function($,y){var w,L;if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!s($))throw new TypeError(E("invalid argument. First argument must be a function. Value: `%s`.",$));for(w=this._buffer,L=0;L<this._length;L++)if(!$.call(y,X(w,L),L,this))return!1;return!0}),v(z.prototype,"fill",function($,y,w){var L,_,B,H,Z,U;if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!l($))throw new TypeError(E("invalid argument. First argument must be a complex number. Value: `%s`.",$));if(L=this._buffer,_=this._length,arguments.length>1){if(!d(y))throw new TypeError(E("invalid argument. Second argument must be an integer. Value: `%s`.",y));if(y<0&&(y+=_,y<0&&(y=0)),arguments.length>2){if(!d(w))throw new TypeError(E("invalid argument. Third argument must be an integer. Value: `%s`.",w));w<0&&(w+=_,w<0&&(w=0)),w>_&&(w=_)}else w=_}else y=0,w=_;for(H=h($),Z=R($),U=y;U<w;U++)B=2*U,L[B]=H,L[B+1]=Z;return this}),v(z.prototype,"filter",function($,y){var w,L,_,B;if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!s($))throw new TypeError(E("invalid argument. First argument must be a function. Value: `%s`.",$));for(w=this._buffer,L=[],_=0;_<this._length;_++)B=X(w,_),$.call(y,B,_,this)&&L.push(B);return new this.constructor(L)}),v(z.prototype,"find",function($,y){var w,L,_;if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!s($))throw new TypeError(E("invalid argument. First argument must be a function. Value: `%s`.",$));for(w=this._buffer,L=0;L<this._length;L++)if(_=X(w,L),$.call(y,_,L,this))return _}),v(z.prototype,"findIndex",function($,y){var w,L,_;if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!s($))throw new TypeError(E("invalid argument. First argument must be a function. Value: `%s`.",$));for(w=this._buffer,L=0;L<this._length;L++)if(_=X(w,L),$.call(y,_,L,this))return L;return-1}),v(z.prototype,"findLast",function($,y){var w,L,_;if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!s($))throw new TypeError(E("invalid argument. First argument must be a function. Value: `%s`.",$));for(w=this._buffer,L=this._length-1;L>=0;L--)if(_=X(w,L),$.call(y,_,L,this))return _}),v(z.prototype,"findLastIndex",function($,y){var w,L,_;if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!s($))throw new TypeError(E("invalid argument. First argument must be a function. Value: `%s`.",$));for(w=this._buffer,L=this._length-1;L>=0;L--)if(_=X(w,L),$.call(y,_,L,this))return L;return-1}),v(z.prototype,"forEach",function($,y){var w,L,_;if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!s($))throw new TypeError(E("invalid argument. First argument must be a function. Value: `%s`.",$));for(w=this._buffer,L=0;L<this._length;L++)_=X(w,L),$.call(y,_,L,this)}),v(z.prototype,"get",function($){if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!r($))throw new TypeError(E("invalid argument. Must provide a nonnegative integer. Value: `%s`.",$));if(!($>=this._length))return X(this._buffer,$)}),f(z.prototype,"length",function(){return this._length}),v(z.prototype,"includes",function($,y){var w,L,_,B,H;if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!l($))throw new TypeError(E("invalid argument. First argument must be a complex number. Value: `%s`.",$));if(arguments.length>1){if(!d(y))throw new TypeError(E("invalid argument. Second argument must be an integer. Value: `%s`.",y));y<0&&(y+=this._length,y<0&&(y=0))}else y=0;for(_=h($),B=R($),w=this._buffer,H=y;H<this._length;H++)if(L=2*H,_===w[L]&&B===w[L+1])return!0;return!1}),v(z.prototype,"indexOf",function($,y){var w,L,_,B,H;if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!l($))throw new TypeError(E("invalid argument. First argument must be a complex number. Value: `%s`.",$));if(arguments.length>1){if(!d(y))throw new TypeError(E("invalid argument. Second argument must be an integer. Value: `%s`.",y));y<0&&(y+=this._length,y<0&&(y=0))}else y=0;for(_=h($),B=R($),w=this._buffer,H=y;H<this._length;H++)if(L=2*H,_===w[L]&&B===w[L+1])return H;return-1}),v(z.prototype,"join",function($){var y,w,L,_;if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(arguments.length===0)L=",";else if(o($))L=$;else throw new TypeError(E("invalid argument. First argument must be a string. Value: `%s`.",$));for(y=[],w=this._buffer,_=0;_<this._length;_++)y.push(X(w,_).toString());return y.join(L)}),v(z.prototype,"lastIndexOf",function($,y){var w,L,_,B,H;if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!l($))throw new TypeError(E("invalid argument. First argument must be a complex number. Value: `%s`.",$));if(arguments.length>1){if(!d(y))throw new TypeError(E("invalid argument. Second argument must be an integer. Value: `%s`.",y));y>=this._length?y=this._length-1:y<0&&(y+=this._length)}else y=this._length-1;for(_=h($),B=R($),w=this._buffer,H=y;H>=0;H--)if(L=2*H,_===w[L]&&B===w[L+1])return H;return-1}),v(z.prototype,"map",function($,y){var w,L,_,B,H;if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!s($))throw new TypeError(E("invalid argument. First argument must be a function. Value: `%s`.",$));for(L=this._buffer,_=new this.constructor(this._length),w=_._buffer,B=0;B<this._length;B++)if(H=$.call(y,X(L,B),B,this),l(H))w[2*B]=h(H),w[2*B+1]=R(H);else if(e(H)&&H.length===2)w[2*B]=H[0],w[2*B+1]=H[1];else throw new TypeError(E("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",H));return _}),v(z.prototype,"reduce",function($,y){var w,L,_,B,H;if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!s($))throw new TypeError(E("invalid argument. First argument must be a function. Value: `%s`.",$));if(w=this._buffer,_=this._length,arguments.length>1)L=y,H=0;else{if(_===0)throw new Error("invalid operation. If not provided an initial value, an array must contain at least one element.");L=X(w,0),H=1}for(;H<_;H++)B=X(w,H),L=$(L,B,H,this);return L}),v(z.prototype,"reverse",function(){var $,y,w,L,_,B;if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(w=this._length,$=this._buffer,L=A(w/2),_=0;_<L;_++)B=w-_-1,y=$[2*_],$[2*_]=$[2*B],$[2*B]=y,y=$[2*_+1],$[2*_+1]=$[2*B+1],$[2*B+1]=y;return this}),v(z.prototype,"set",function($){var y,w,L,_,B,H,Z,U,K;if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(L=this._buffer,arguments.length>1){if(w=arguments[1],!r(w))throw new TypeError(E("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",w))}else w=0;if(l($)){if(w>=this._length)throw new RangeError(E("invalid argument. Index argument is out-of-bounds. Value: `%u`.",w));w*=2,L[w]=h($),L[w+1]=R($);return}if(T($)){if(H=$._length,w+H>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(y=$._buffer,K=L.byteOffset+w*S,y.buffer===L.buffer&&y.byteOffset<K&&y.byteOffset+y.byteLength>K){for(_=new u(y.length),U=0;U<y.length;U++)_[U]=y[U];y=_}for(w*=2,K=0,U=0;U<H;U++)L[w]=y[K],L[w+1]=y[K+1],w+=2,K+=2;return}if(t($)){for(H=$.length,U=0;U<H;U++)if(!l($[U])){B=!0;break}if(B){if(!g(H))throw new RangeError(E("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",H));if(w+H/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(y=$,K=L.byteOffset+w*S,y.buffer===L.buffer&&y.byteOffset<K&&y.byteOffset+y.byteLength>K){for(_=new u(H),U=0;U<H;U++)_[U]=y[U];y=_}for(w*=2,H/=2,K=0,U=0;U<H;U++)L[w]=y[K],L[w+1]=y[K+1],w+=2,K+=2;return}if(w+H>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(w*=2,U=0;U<H;U++)Z=$[U],L[w]=h(Z),L[w+1]=R(Z),w+=2;return}throw new TypeError(E("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",$))}),v(z.prototype,"slice",function($,y){var w,L,_,B,H,Z,U;if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(H=this._buffer,Z=this._length,arguments.length===0)$=0,y=Z;else{if(!d($))throw new TypeError(E("invalid argument. First argument must be an integer. Value: `%s`.",$));if($<0&&($+=Z,$<0&&($=0)),arguments.length===1)y=Z;else{if(!d(y))throw new TypeError(E("invalid argument. Second argument must be an integer. Value: `%s`.",y));y<0?(y+=Z,y<0&&(y=0)):y>Z&&(y=Z)}}for($<y?w=y-$:w=0,_=new this.constructor(w),L=_._buffer,U=0;U<w;U++)B=2*(U+$),L[2*U]=H[B],L[2*U+1]=H[B+1];return _}),v(z.prototype,"some",function($,y){var w,L;if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!s($))throw new TypeError(E("invalid argument. First argument must be a function. Value: `%s`.",$));for(w=this._buffer,L=0;L<this._length;L++)if($.call(y,X(w,L),L,this))return!0;return!1}),v(z.prototype,"subarray",function($,y){var w,L,_;if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(L=this._buffer,_=this._length,arguments.length===0)$=0,y=_;else{if(!d($))throw new TypeError(E("invalid argument. First argument must be an integer. Value: `%s`.",$));if($<0&&($+=_,$<0&&($=0)),arguments.length===1)y=_;else{if(!d(y))throw new TypeError(E("invalid argument. Second argument must be an integer. Value: `%s`.",y));y<0?(y+=_,y<0&&(y=0)):y>_&&(y=_)}}return $>=_?(_=0,w=L.byteLength):$>=y?(_=0,w=L.byteOffset+$*S):(_=y-$,w=L.byteOffset+$*S),new this.constructor(L.buffer,w,_<0?0:_)}),v(z.prototype,"toReversed",function(){var $,y,w,L,_,B;if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(w=this._length,y=new this.constructor(w),L=this._buffer,$=y._buffer,_=0;_<w;_++)B=w-_-1,$[2*_]=L[2*B],$[2*_+1]=L[2*B+1];return y}),v(z.prototype,"toString",function(){var $,y,w;if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for($=[],y=this._buffer,w=0;w<this._length;w++)$.push(X(y,w).toString());return $.join(",")}),v(z.prototype,"with",function($,y){var w,L,_;if(!T(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!d($))throw new TypeError(E("invalid argument. First argument must be an integer. Value: `%s`.",$));if(_=this._length,$<0&&($+=_),$<0||$>=_)throw new RangeError(E("invalid argument. Index argument is out-of-bounds. Value: `%s`.",$));if(!l(y))throw new TypeError(E("invalid argument. Second argument must be a complex number. Value: `%s`.",y));return L=new this.constructor(this._buffer),w=L._buffer,w[2*$]=h(y),w[2*$+1]=R(y),L}),Fo=z,Fo}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var jo,pb;function _p(){if(pb)return jo;pb=1;var r=CN();return jo=r,jo}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Vo,mb;function BN(){if(mb)return Vo;mb=1;var r=jr(),e=$e(),t=Sr(),n=qe(),a=at(),i=pp(),o=it(),s=mp(),l=hp(),g=wp(),d=_p(),m=[r,e,n,t,i,a,l,o,s,g,d];return Vo=m,Vo}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Go,hb;function HN(){if(hb)return Go;hb=1;var r=["float64","float32","int32","uint32","int16","uint16","int8","uint8","uint8c","complex64","complex128"];return Go=r,Go}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Co,db;function UN(){if(db)return Co;db=1;var r=mE(),e=ve(),t=be(),n=B9(),a=BN(),i=HN(),o=i.length;function s(l){var g;if(e(l))return"generic";if(r(l))return null;for(g=0;g<o;g++)if(l instanceof a[g])return i[g];return n[t(l)]||null}return Co=s,Co}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Bo,yb;function WN(){if(yb)return Bo;yb=1;var r=UN();return Bo=r,Bo}/**
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
*/var Ho,bb;function zN(){if(bb)return Ho;bb=1;var r=P9(),e=lp(),t=j9(),n=cp(),a=C9(),i=WN();function o(s){var l=i(s);return r(s)?{data:s,dtype:l,accessorProtocol:!0,accessors:[n(l),a(l)]}:{data:s,dtype:l,accessorProtocol:!1,accessors:[e(l),t(l)]}}return Ho=o,Ho}/**
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
*/var Uo,$b;function FE(){if($b)return Uo;$b=1;var r=zN();return Uo=r,Uo}/**
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
*/var Wo,qb;function jE(){if(qb)return Wo;qb=1;function r(e,t,n,a,i,o,s){var l,g,d,m,b,p,q;for(l=t.data,g=i.data,m=t.accessors[0],d=i.accessors[1],b=a,p=s,q=0;q<e;q++)d(g,p,m(l,b)),b+=n,p+=o;return t}return Wo=r,Wo}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zo,wb;function kN(){if(wb)return zo;wb=1;var r=FE(),e=jE(),t=8;function n(a,i,o,s,l){var g,d,m,b,p,q;if(a<=0)return s;if(m=r(i),b=r(s),m.accessorProtocol||b.accessorProtocol)return o<0?g=(1-a)*o:g=0,l<0?d=(1-a)*l:d=0,e(a,m,o,g,b,l,d),b.data;if(o===1&&l===1){if(p=a%t,p>0)for(q=0;q<p;q++)s[q]=i[q];if(a<t)return s;for(q=p;q<a;q+=t)s[q]=i[q],s[q+1]=i[q+1],s[q+2]=i[q+2],s[q+3]=i[q+3],s[q+4]=i[q+4],s[q+5]=i[q+5],s[q+6]=i[q+6],s[q+7]=i[q+7];return s}for(o<0?g=(1-a)*o:g=0,l<0?d=(1-a)*l:d=0,q=0;q<a;q++)s[d]=i[g],g+=o,d+=l;return s}return zo=n,zo}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ko,_b;function DN(){if(_b)return ko;_b=1;var r=FE(),e=jE(),t=8;function n(a,i,o,s,l,g,d){var m,b,p,q,v,f;if(a<=0)return l;if(p=r(i),q=r(l),p.accessorProtocol||q.accessorProtocol)return e(a,p,o,s,q,g,d),q.data;if(m=s,b=d,o===1&&g===1){if(v=a%t,v>0)for(f=0;f<v;f++)l[b]=i[m],m+=o,b+=g;if(a<t)return l;for(f=v;f<a;f+=t)l[b]=i[m],l[b+1]=i[m+1],l[b+2]=i[m+2],l[b+3]=i[m+3],l[b+4]=i[m+4],l[b+5]=i[m+5],l[b+6]=i[m+6],l[b+7]=i[m+7],m+=t,b+=t;return l}for(f=0;f<a;f++)l[b]=i[m],m+=o,b+=g;return l}return ko=n,ko}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Do,Rb;function ce(){if(Rb)return Do;Rb=1;var r=D(),e=kN(),t=DN();return r(e,"ndarray",t),Do=e,Do}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Qo,Tb;function QN(){if(Tb)return Qo;Tb=1;var r=hp(),e=it(),t=mp(),n=pp(),a=at(),i=qe(),o=Sr(),s=$e(),l=jr(),g=[l,s,i,o,n,a,r,e,t];return Qo=g,Qo}const xN=["Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array"];/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xo,Ab;function rS(){if(Ab)return xo;Ab=1;var r=be(),e=ZN(),t=nt(),n=EE(),a=jr(),i=QN(),o=xN,s=n()?t(a):l;s=e(s)==="TypedArray"?s:l;function l(){}function g(d){var m,b;if(typeof d!="object"||d===null)return!1;if(d instanceof s)return!0;for(b=0;b<i.length;b++)if(d instanceof i[b])return!0;for(;d;){for(m=r(d),b=0;b<o.length;b++)if(o[b]===m)return!0;d=t(d)}return!1}return xo=g,xo}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var es,Pb;function tS(){if(Pb)return es;Pb=1;var r=wp(),e=_p(),t=[e,r];return es=t,es}const nS=["Complex64Array","Complex128Array"];/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var us,Gb;function sS(){if(Gb)return us;Gb=1;var r=hp(),e=it(),t=mp(),n=pp(),a=at(),i=qe(),o=Sr(),s=$e(),l=jr(),g=wp(),d=_p(),m=[[l,"Float64Array"],[s,"Float32Array"],[i,"Int32Array"],[o,"Uint32Array"],[n,"Int16Array"],[a,"Uint16Array"],[r,"Int8Array"],[e,"Uint8Array"],[t,"Uint8ClampedArray"],[g,"Complex64Array"],[d,"Complex128Array"]];return us=m,us}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var ss,Bb;function vS(){if(Bb)return ss;Bb=1;var r=eS(),e=iS(),t=$p(),n=qp(),a=Y(),i=fS();function o(s){var l,g,d;if(r(s))l=s;else if(e(s))s.BYTES_PER_ELEMENT===8?l=t(s,0):l=n(s,0);else throw new TypeError(a("invalid argument. Must provide a typed array. Value: `%s`.",s));for(g={type:i(s),data:[]},d=0;d<l.length;d++)g.data.push(l[d]);return g}return ss=o,ss}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fs,Hb;function ir(){if(Hb)return fs;Hb=1;var r=vS();return fs=r,fs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vs,Ub;function VE(){if(Ub)return vs;Ub=1;var r=je(),e=wr(),t=r-1;function n(){var a=e(1+t*Math.random());return a>>>0}return vs=n,vs}var ls,Wb;function GE(){if(Wb)return ls;Wb=1;var r=D(),e=er(),t=nr(),n=rr(),a=tr(),i=le(),o=ie(),s=Pr().isPrimitive,l=Fe().isPrimitive,g=RE(),d=je(),m=Sr(),b=S9(),p=A9(),q=ce(),v=ir(),f=Y(),u=VE(),c=624,h=397,R=d>>>0,A=19650218,G=2147483648,M=2147483647,C=1812433253,N=1664525,E=1566083941,P=2636928640,O=4022730752,F=2567483615,S=[0,F>>>0],I=1/(g+1),T=67108864,k=2147483648,X=1,z=g*I,j=1,$=3,y=2,w=c+3,L=c+5,_=c+6;function B(W,V){var J;return V?J="option":J="argument",W.length<_+1?new RangeError(f("invalid %s. `state` array has insufficient length.",J)):W[0]!==j?new RangeError(f("invalid %s. `state` array has an incompatible schema version. Expected: `%s`. Actual: `%s.`",J,j,W[0])):W[1]!==$?new RangeError(f("invalid %s. `state` array has an incompatible number of sections. Expected: `%s`. Actual: `%s`.",J,$,W[1])):W[y]!==c?new RangeError(f("invalid %s. `state` array has an incompatible state length. Expected: `%u`. Actual: `%u`.",J,c,W[y])):W[w]!==1?new RangeError(f("invalid %s. `state` array has an incompatible section length. Expected: `%u`. Actual: `%u`.",J,1,W[w])):W[L]!==W.length-_?new RangeError(f("invalid %s. `state` array length is incompatible with seed section length. Expected: `%u`. Actual: `%u`.",J,W.length-_,W[L])):null}function H(W,V,J){var hr;for(W[0]=J>>>0,hr=1;hr<V;hr++)J=W[hr-1]>>>0,J=(J^J>>>30)>>>0,W[hr]=p(J,C)+hr>>>0;return W}function Z(W,V,J,hr){var x,yr,Wr,Kr;for(yr=1,Wr=0,Kr=b(V,hr);Kr>0;Kr--)x=W[yr-1]>>>0,x=(x^x>>>30)>>>0,x=p(x,N)>>>0,W[yr]=(W[yr]>>>0^x)+J[Wr]+Wr>>>0,yr+=1,Wr+=1,yr>=V&&(W[0]=W[V-1],yr=1),Wr>=hr&&(Wr=0);for(Kr=V-1;Kr>0;Kr--)x=W[yr-1]>>>0,x=(x^x>>>30)>>>0,x=p(x,E)>>>0,W[yr]=(W[yr]>>>0^x)-yr>>>0,yr+=1,yr>=V&&(W[0]=W[V-1],yr=1);return W[0]=k,W}function U(W){var V,J,hr,x;for(x=c-h,J=0;J<x;J++)V=W[J]&G|W[J+1]&M,W[J]=W[J+h]^V>>>1^S[V&X];for(hr=c-1;J<hr;J++)V=W[J]&G|W[J+1]&M,W[J]=W[J-x]^V>>>1^S[V&X];return V=W[hr]&G|W[0]&M,W[hr]=W[h-1]^V>>>1^S[V&X],W}function K(W){var V,J,hr,x,yr,Wr;if(hr={},arguments.length){if(!a(W))throw new TypeError(f("invalid argument. Options argument must be an object. Value: `%s`.",W));if(n(W,"copy")&&(hr.copy=W.copy,!s(W.copy)))throw new TypeError(f("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",W.copy));if(n(W,"state")){if(J=W.state,hr.state=!0,!o(J))throw new TypeError(f("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",J));if(Wr=B(J,!0),Wr)throw Wr;hr.copy===!1?V=J:(V=new m(J.length),q(J.length,J,1,V,1)),J=new m(V.buffer,V.byteOffset+(y+1)*V.BYTES_PER_ELEMENT,c),x=new m(V.buffer,V.byteOffset+(L+1)*V.BYTES_PER_ELEMENT,J[L])}if(x===void 0)if(n(W,"seed"))if(x=W.seed,hr.seed=!0,l(x)){if(x>R)throw new RangeError(f("invalid option. `%s` option must be a positive integer less than or equal to the maximum unsigned 32-bit integer. Option: `%u`.","seed",x));x>>>=0}else{if(i(x)===!1||x.length<1)throw new TypeError(f("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",x));if(x.length===1){if(x=x[0],!l(x))throw new TypeError(f("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",x));if(x>R)throw new RangeError(f("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%u`.","seed",x));x>>>=0}else yr=x.length,V=new m(_+yr),V[0]=j,V[1]=$,V[y]=c,V[w]=1,V[w+1]=c,V[L]=yr,q.ndarray(yr,x,1,0,V,1,L+1),J=new m(V.buffer,V.byteOffset+(y+1)*V.BYTES_PER_ELEMENT,c),x=new m(V.buffer,V.byteOffset+(L+1)*V.BYTES_PER_ELEMENT,yr),J=H(J,c,A),J=Z(J,c,x,yr)}else x=u()>>>0}else x=u()>>>0;return J===void 0&&(V=new m(_+1),V[0]=j,V[1]=$,V[y]=c,V[w]=1,V[w+1]=c,V[L]=1,V[L+1]=x,J=new m(V.buffer,V.byteOffset+(y+1)*V.BYTES_PER_ELEMENT,c),x=new m(V.buffer,V.byteOffset+(L+1)*V.BYTES_PER_ELEMENT,1),J=H(J,c,x)),r(Er,"NAME","mt19937"),e(Er,"seed",Kr),e(Er,"seedLength",Vp),t(Er,"state",Bp,Hp),e(Er,"stateLength",Gp),e(Er,"byteLength",Cp),r(Er,"toJSON",Up),r(Er,"MIN",0),r(Er,"MAX",d),r(Er,"normalized",zr),r(zr,"NAME",Er.NAME),e(zr,"seed",Kr),e(zr,"seedLength",Vp),t(zr,"state",Bp,Hp),e(zr,"stateLength",Gp),e(zr,"byteLength",Cp),r(zr,"toJSON",Up),r(zr,"MIN",0),r(zr,"MAX",z),Er;function Kr(){var sr=V[L];return q(sr,x,1,new m(sr),1)}function Vp(){return V[L]}function Gp(){return V.length}function Cp(){return V.byteLength}function Bp(){var sr=V.length;return q(sr,V,1,new m(sr),1)}function Hp(sr){var Cr;if(!o(sr))throw new TypeError(f("invalid argument. Must provide a Uint32Array. Value: `%s`.",sr));if(Cr=B(sr,!1),Cr)throw Cr;hr.copy===!1?hr.state&&sr.length===V.length?q(sr.length,sr,1,V,1):(V=sr,hr.state=!0):(sr.length!==V.length&&(V=new m(sr.length)),q(sr.length,sr,1,V,1)),J=new m(V.buffer,V.byteOffset+(y+1)*V.BYTES_PER_ELEMENT,c),x=new m(V.buffer,V.byteOffset+(L+1)*V.BYTES_PER_ELEMENT,V[L])}function Up(){var sr={};return sr.type="PRNG",sr.name=Er.NAME,sr.state=v(V),sr.params=[],sr}function Er(){var sr,Cr;return Cr=V[w+1],Cr>=c&&(J=U(J),Cr=0),sr=J[Cr],V[w+1]=Cr+1,sr^=sr>>>11,sr^=sr<<7&P,sr^=sr<<15&O,sr^=sr>>>18,sr>>>0}function zr(){var sr=Er()>>>5,Cr=Er()>>>6;return(sr*T+Cr)*I}}return ls=K,ls}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var cs,zb;function lS(){if(zb)return cs;zb=1;var r=GE(),e=VE(),t=r({seed:e()});return cs=t,cs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gs,kb;function lr(){if(kb)return gs;kb=1;var r=D(),e=lS(),t=GE();return r(e,"factory",t),gs=e,gs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ps,Db;function CE(){if(Db)return ps;Db=1;var r=pr().isPrimitive,e=Q();function t(n){return r(n)&&e(n)}return ps=t,ps}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ms,Jb;function BE(){if(Jb)return ms;Jb=1;var r=pr().isObject,e=Q();function t(n){return r(n)&&e(n.valueOf())}return ms=t,ms}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var ys,Kb;function gS(){if(Kb)return ys;Kb=1;var r=pr().isPrimitive,e=Y(),t=_r();function n(a,i){return!r(a)||t(a)?new TypeError(e("invalid argument. First argument must be a number and not NaN. Value: `%s`.",a)):!r(i)||t(i)?new TypeError(e("invalid argument. Second argument must be a number and not NaN. Value: `%s`.",i)):a>=i?new RangeError(e("invalid argument. Minimum support must be less than maximum support. Value: `[%f, %f]`.",a,i)):null}return ys=n,ys}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var bs,Zb;function pS(){if(Zb)return bs;Zb=1;var r=yp();function e(t){return t>0?r(t-1):r(t+1)}return bs=e,bs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $s,Qb;function HE(){if(Qb)return $s;Qb=1;var r=pS();return $s=r,$s}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var qs,xb;function mS(){if(xb)return qs;xb=1;var r=Nr(),e=Xr();function t(n){return n===r||n===e}return qs=t,qs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ws,r3;function Ve(){if(r3)return ws;r3=1;var r=mS();return ws=r,ws}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var As,f3;function UE(){if(f3)return As;f3=1;var r=Sr(),e=jr(),t=$S(),n=new e(1),a=new r(n.buffer),i=t.HIGH,o=t.LOW;function s(l,g,d,m){return n[0]=l,g[m]=a[i],g[m+d]=a[o],g}return As=s,As}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ms,v3;function qS(){if(v3)return Ms;v3=1;var r=UE();function e(t){return r(t,[0,0],1,0)}return Ms=e,Ms}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ps,l3;function Rp(){if(l3)return Ps;l3=1;var r=D(),e=qS(),t=UE();return r(e,"assign",t),Ps=e,Ps}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var js,p3;function Ge(){if(p3)return js;p3=1;var r=_S();return js=r,js}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Vs,m3;function RS(){if(m3)return Vs;m3=1;function r(e){return e|0}return Vs=r,Vs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Gs,h3;function WE(){if(h3)return Gs;h3=1;var r=RS();return Gs=r,Gs}/**
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
*/var Hs,b3;function LS(){if(b3)return Hs;b3=1;var r=Re(),e;return r===!0?e=1:e=0,Hs=e,Hs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Us,$3;function OS(){if($3)return Us;$3=1;var r=Sr(),e=jr(),t=LS(),n=new e(1),a=new r(n.buffer);function i(o){return n[0]=o,a[t]}return Us=i,Us}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ws,q3;function Vr(){if(q3)return Ws;q3=1;var r=OS();return Ws=r,Ws}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zs,w3;function NS(){if(w3)return zs;w3=1;var r=Re(),e,t,n;return r===!0?(t=1,n=0):(t=0,n=1),e={HIGH:t,LOW:n},zs=e,zs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ks,_3;function SS(){if(_3)return ks;_3=1;var r=Sr(),e=jr(),t=NS(),n=new e(1),a=new r(n.buffer),i=t.HIGH,o=t.LOW;function s(l,g){return a[i]=l,a[o]=g,n[0]}return ks=s,ks}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ds,R3;function Ep(){if(R3)return Ds;R3=1;var r=SS();return Ds=r,Ds}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Js,E3;function TS(){if(E3)return Js;E3=1;var r=ES(),e=Ee(),t=Rp(),n=Vr(),a=Ep(),i=[0,0];function o(s,l){var g,d;return t.assign(s,i,1,0),g=i[0],g&=e,d=n(l),d&=r,g|=d,a(g,i[1])}return Js=o,Js}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Xs,L3;function Lp(){if(L3)return Xs;L3=1;var r=TS();return Xs=r,Xs}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Ys,O3;function AS(){if(O3)return Ys;O3=1;var r=HE(),e=Lp(),t=Xr(),n=Nr();function a(i,o){return o===t?n:o===n?0:o>0?r(o)?i:0:r(o)?e(n,i):n}return Ys=a,Ys}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var rf,M3;function Op(){if(M3)return rf;M3=1;var r=FS();return rf=r,rf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var nf,F3;function VS(){if(F3)return nf;F3=1;var r=Vr(),e=Ge(),t=Op(),n=Ce(),a=jS(),i=1048575,o=1048576,s=1072693248,l=536870912,g=524288,d=20,m=9007199254740992,b=.9617966939259756,p=.9617967009544373,q=-7028461650952758e-24,v=[1,1.5],f=[0,.5849624872207642],u=[0,1350039202129749e-23];function c(h,R,A){var G,M,C,N,E,P,O,F,S,I,T,k,X,z,j,$,y,w,L,_,B,H;return _=0,A<o&&(R*=m,_-=53,A=r(R)),_+=(A>>d)-n|0,B=A&i|0,A=B|s|0,B<=235662?H=0:B<767610?H=1:(H=0,_+=1,A-=o),R=t(R,A),F=v[H],w=R-F,L=1/(R+F),M=w*L,N=e(M,0),G=(A>>1|l)+g,G+=H<<18,P=t(0,G),O=R-(P-F),E=L*(w-N*P-N*O),C=M*M,y=C*C*a(C),y+=E*(N+M),C=N*N,P=3+C+y,P=e(P,0),O=y-(P-3-C),w=N*P,L=E*P+O*M,I=w+L,I=e(I,0),T=L-(I-w),k=p*I,X=q*I+T*b+u[H],S=f[H],$=_,z=k+X+S+$,z=e(z,0),j=X-(z-$-S-k),h[0]=z,h[1]=j,h}return nf=c,nf}/**
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
*/var uf,V3;function CS(){if(V3)return uf;V3=1;var r=Ge(),e=GS(),t=1.4426950408889634,n=1.4426950216293335,a=19259629911266175e-24;function i(o,s){var l,g,d,m,b,p;return d=s-1,m=d*d*e(d),b=n*d,p=d*a-m*t,g=b+p,g=r(g,0),l=p-(g-b),o[0]=g,o[1]=l,o}return uf=i,uf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var sf,C3;function HS(){if(C3)return sf;C3=1;var r=-1023;return sf=r,sf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ff,B3;function US(){if(B3)return ff;B3=1;var r=-1074;return ff=r,ff}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vf,H3;function WS(){if(H3)return vf;H3=1;var r=22250738585072014e-324;return vf=r,vf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var lf,U3;function zE(){if(U3)return lf;U3=1;var r=WS(),e=Ve(),t=Q(),n=Yr(),a=4503599627370496;function i(o,s,l,g){return t(o)||e(o)?(s[g]=o,s[g+l]=0,s):o!==0&&n(o)<r?(s[g]=o*a,s[g+l]=-52,s):(s[g]=o,s[g+l]=0,s)}return lf=i,lf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var cf,W3;function zS(){if(W3)return cf;W3=1;var r=zE();function e(t){return r(t,[0,0],1,0)}return cf=e,cf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gf,z3;function kS(){if(z3)return gf;z3=1;var r=D(),e=zS(),t=zE();return r(e,"assign",t),gf=e,gf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pf,k3;function Np(){if(k3)return pf;k3=1;var r=2146435072;return pf=r,pf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var mf,D3;function DS(){if(D3)return mf;D3=1;var r=Vr(),e=Np(),t=Ce();function n(a){var i=r(a);return i=(i&e)>>>20,i-t|0}return mf=n,mf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var df,X3;function XS(){if(X3)return df;X3=1;var r=Nr(),e=Xr(),t=Ce(),n=BS(),a=HS(),i=US(),o=Q(),s=Ve(),l=Lp(),g=kS().assign,d=JS(),m=Rp(),b=Ep(),p=2220446049250313e-31,q=2148532223,v=[0,0],f=[0,0];function u(c,h){var R,A;return h===0||c===0||o(c)||s(c)?c:(g(c,v,1,0),c=v[0],h+=v[1],h+=d(c),h<i?l(0,c):h>n?c<0?e:r:(h<=a?(h+=52,A=p):A=1,m.assign(c,f,1,0),R=f[0],R&=q,R|=h+t<<20,A*b(R,f[1])))}return df=u,df}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var yf,Y3;function Sp(){if(Y3)return yf;Y3=1;var r=XS();return yf=r,yf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var $f,Z3;function kE(){if(Z3)return $f;Z3=1;var r=1048575;return $f=r,$f}/**
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
*/var wf,x3;function ZS(){if(x3)return wf;x3=1;var r=Vr(),e=Op(),t=Ge(),n=WE(),a=Sp(),i=YS(),o=Ce(),s=Ee(),l=kE(),g=KS(),d=1048576,m=1071644672,b=20,p=.6931471824645996,q=-1904654299957768e-24;function v(f,u,c){var h,R,A,G,M,C,N,E,P,O,F;return O=f&s|0,F=(O>>b)-o|0,P=0,O>m&&(P=f+(d>>F+1)>>>0,F=((P&s)>>b)-o|0,h=(P&~(l>>F))>>>0,A=e(0,h),P=(P&l|d)>>b-F>>>0,f<0&&(P=-P),u-=A),A=c+u,A=t(A,0),M=A*p,C=(c-(A-u))*i+A*q,E=M+C,N=C-(E-M),A=E*E,R=E-A*g(A),G=E*R/(R-2)-(N+E*N),E=1-(G-E),f=r(E),f=n(f),f+=P<<b>>>0,f>>b<=0?E=a(E,P):E=e(E,f),E}return wf=v,wf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var _f,r$;function QS(){if(r$)return _f;r$=1;var r=Q(),e=HE(),t=Ve(),n=Ur(),a=Rr(),i=Yr(),o=Rp(),s=Ge(),l=WE(),g=Xr(),d=Nr(),m=Ee(),b=AS(),p=MS(),q=PS(),v=VS(),f=CS(),u=ZS(),c=1072693247,h=1105199104,R=1139802112,A=1083179008,G=1072693248,M=1083231232,C=3230714880,N=31,E=1e300,P=1e-300,O=8008566259537294e-32,F=[0,0],S=[0,0];function I(T,k){var X,z,j,$,y,w,L,_,B,H,Z,U,K,W,V,J;if(r(T)||r(k))return NaN;if(o.assign(k,F,1,0),w=F[0],L=F[1],L===0){if(k===0)return 1;if(k===1)return T;if(k===-1)return 1/T;if(k===.5)return a(T);if(k===-.5)return 1/a(T);if(k===2)return T*T;if(k===3)return T*T*T;if(k===4)return T*=T,T*T;if(t(k))return q(T,k)}if(o.assign(T,F,1,0),$=F[0],y=F[1],y===0){if($===0)return b(T,k);if(T===1)return 1;if(T===-1&&e(k))return-1;if(t(T))return T===g?I(-0,-k):k<0?0:d}if(T<0&&n(k)===!1)return(T-T)/(T-T);if(j=i(T),X=$&m|0,z=w&m|0,_=$>>>N|0,B=w>>>N|0,_&&e(k)?_=-1:_=1,z>h){if(z>R)return p(T,k);if(X<c)return B===1?_*E*E:_*P*P;if(X>G)return B===0?_*E*E:_*P*P;K=f(S,j)}else K=v(S,j,X);if(H=s(k,0),U=(k-H)*K[0]+k*K[1],Z=H*K[0],W=U+Z,o.assign(W,F,1,0),V=l(F[0]),J=l(F[1]),V>=A){if((V-A|J)!==0||U+O>W-Z)return _*E*E}else if((V&m)>=M&&((V-C|J)!==0||U<=W-Z))return _*P*P;return W=u(V,Z,U),_*W}return _f=I,_f}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Sf,u$;function tT(){if(u$)return Sf;u$=1;var r=-.16666666666666632,e=.00833333333332249,t=-.0001984126982985795,n=27557313707070068e-22,a=-25050760253406863e-24,i=158969099521155e-24;function o(s,l){var g,d,m,b;return b=s*s,m=b*b,g=e+b*(t+b*n)+b*m*(a+b*i),d=b*s,l===0?s+d*(r+b*g):s-(b*(.5*l-d*g)-l-d*r)}return Sf=o,Sf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Vf,p$;function fT(){if(p$)return Vf;p$=1;var r=sT();return Vf=r,Vf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Gf,m$;function vT(){if(m$)return Gf;m$=1;var r=wr(),e=Sp(),t=fT(),n=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],a=[1.570796251296997,7549789415861596e-23,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],i=16777216,o=5960464477539063e-23,s=t(20),l=t(20),g=t(20),d=t(20);function m(p,q,v,f,u,c,h,R,A){var G,M,C,N,E,P,O,F,S;for(N=c,S=f[v],F=v,E=0;F>0;E++)M=o*S|0,d[E]=S-i*M|0,S=f[F-1]+M,F-=1;if(S=e(S,u),S-=8*r(S*.125),O=S|0,S-=O,C=0,u>0?(E=d[v-1]>>24-u,O+=E,d[v-1]-=E<<24-u,C=d[v-1]>>23-u):u===0?C=d[v-1]>>23:S>=.5&&(C=2),C>0){for(O+=1,G=0,E=0;E<v;E++)F=d[E],G===0?F!==0&&(G=1,d[E]=16777216-F):d[E]=16777215-F;if(u>0)switch(u){case 1:d[v-1]&=8388607;break;case 2:d[v-1]&=4194303;break}C===2&&(S=1-S,G!==0&&(S-=e(1,u)))}if(S===0){for(F=0,E=v-1;E>=c;E--)F|=d[E];if(F===0){for(P=1;d[c-P]===0;P++);for(E=v+1;E<=v+P;E++){for(A[R+E]=n[h+E],M=0,F=0;F<=R;F++)M+=p[F]*A[R+(E-F)];f[E]=M}return v+=P,m(p,q,v,f,u,c,h,R,A)}}if(S===0)for(v-=1,u-=24;d[v]===0;)v-=1,u-=24;else S=e(S,-u),S>=i?(M=o*S|0,d[v]=S-i*M|0,v+=1,u+=24,d[v]=M):d[v]=S|0;for(M=e(1,u),E=v;E>=0;E--)f[E]=M*d[E],M*=o;for(E=v;E>=0;E--){for(M=0,P=0;P<=N&&P<=v-E;P++)M+=a[P]*f[E+P];g[v-E]=M}for(M=0,E=v;E>=0;E--)M+=g[E];for(C===0?q[0]=M:q[0]=-M,M=g[0]-M,E=1;E<=v;E++)M+=g[E];return C===0?q[1]=M:q[1]=-M,O&7}function b(p,q,v,f){var u,c,h,R,A,G,M,C,N;for(c=4,R=f-1,h=(v-3)/24|0,h<0&&(h=0),G=v-24*(h+1),C=h-R,N=R+c,M=0;M<=N;M++)C<0?s[M]=0:s[M]=n[C],C+=1;for(M=0;M<=c;M++){for(u=0,C=0;C<=R;C++)u+=p[C]*s[R+(M-C)];l[M]=u}return A=c,m(p,q,A,l,G,c,h,R,s)}return Gf=b,Gf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Hf,y$;function gT(){if(y$)return Hf;y$=1;var r=cT(),e=Vr(),t=.6366197723675814,n=1.5707963267341256,a=6077100506506192e-26,i=6077100506303966e-26,o=20222662487959506e-37,s=20222662487111665e-37,l=84784276603689e-45,g=2047;function d(m,b,p){var q,v,f,u,c,h,R;return v=r(m*t),u=m-v*n,c=v*a,R=b>>20|0,p[0]=u-c,q=e(p[0]),h=R-(q>>20&g),h>16&&(f=u,c=v*i,u=f-c,c=v*o-(f-u-c),p[0]=u-c,q=e(p[0]),h=R-(q>>20&g),h>49&&(f=u,c=v*s,u=f-c,c=v*l-(f-u-c),p[0]=u-c)),p[1]=u-p[0]-c,v}return Hf=d,Hf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Uf,b$;function pT(){if(b$)return Uf;b$=1;var r=Ee(),e=Np(),t=kE(),n=Vr(),a=iT(),i=Ep(),o=vT(),s=gT(),l=0,g=16777216,d=1.5707963267341256,m=6077100506506192e-26,b=2*m,p=3*m,q=4*m,v=598523,f=1072243195,u=1073928572,c=1074752122,h=1074977148,R=1075183036,A=1075388923,G=1075594811,M=1094263291,C=[0,0,0],N=[0,0];function E(P,O){var F,S,I,T,k,X,z,j;if(I=n(P),T=I&r|0,T<=f)return O[0]=P,O[1]=0,0;if(T<=c)return(T&t)===v?s(P,T,O):T<=u?P>0?(j=P-d,O[0]=j-m,O[1]=j-O[0]-m,1):(j=P+d,O[0]=j+m,O[1]=j-O[0]+m,-1):P>0?(j=P-2*d,O[0]=j-b,O[1]=j-O[0]-b,2):(j=P+2*d,O[0]=j+b,O[1]=j-O[0]+b,-2);if(T<=G)return T<=R?T===h?s(P,T,O):P>0?(j=P-3*d,O[0]=j-p,O[1]=j-O[0]-p,3):(j=P+3*d,O[0]=j+p,O[1]=j-O[0]+p,-3):T===A?s(P,T,O):P>0?(j=P-4*d,O[0]=j-q,O[1]=j-O[0]-q,4):(j=P+4*d,O[0]=j+q,O[1]=j-O[0]+q,-4);if(T<M)return s(P,T,O);if(T>=e)return O[0]=NaN,O[1]=NaN,0;for(F=a(P),S=(T>>20)-1046,j=i(T-(S<<20|0),F),X=0;X<2;X++)C[X]=j|0,j=(j-C[X])*g;for(C[2]=j,k=3;C[k-1]===l;)k-=1;return z=o(C,N,S,k,1),P<0?(O[0]=-N[0],O[1]=-N[1],-z):(O[0]=N[0],O[1]=N[1],z)}return Uf=E,Uf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Wf,$$;function Tp(){if($$)return Wf;$$=1;var r=pT();return Wf=r,Wf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var zf,q$;function mT(){if(q$)return zf;q$=1;var r=Ee(),e=Np(),t=Vr(),n=DE(),a=JE(),i=Tp(),o=1072243195,s=1045430272,l=[0,0];function g(d){var m,b;if(m=t(d),m&=r,m<=o)return m<s?d:a(d,0);if(m>=e)return NaN;switch(b=i(d,l),b&3){case 0:return a(l[0],l[1]);case 1:return n(l[0],l[1]);case 2:return-a(l[0],l[1]);default:return-n(l[0],l[1])}}return zf=g,zf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var kf,w$;function vt(){if(w$)return kf;w$=1;var r=mT();return kf=r,kf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Xf,E$;function XE(){if(E$)return Xf;E$=1;var r=D(),e=er(),t=nr(),n=tr(),a=ur(),i=rr(),o=ar(),s=or(),l=lr().factory,g=Q(),d=ir(),m=Y(),b=gS(),p=dT();function q(){var v,f,u,c,h,R;if(arguments.length===0)f=l();else if(arguments.length===1){if(v=arguments[0],!n(v))throw new TypeError(m("invalid argument. Options argument must be an object. Value: `%s`.",v));if(i(v,"prng")){if(!a(v.prng))throw new TypeError(m("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",v.prng));f=v.prng}else f=l(v)}else{if(h=arguments[0],R=arguments[1],c=b(h,R),c)throw c;if(arguments.length>2){if(v=arguments[2],!n(v))throw new TypeError(m("invalid argument. Options argument must be an object. Value: `%s`.",v));if(i(v,"prng")){if(!a(v.prng))throw new TypeError(m("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",v.prng));f=v.prng}else f=l(v)}else f=l()}return h===void 0?u=F:u=O,r(u,"NAME","arcsine"),v&&v.prng?(r(u,"seed",null),r(u,"seedLength",null),t(u,"state",o(null),s),r(u,"stateLength",null),r(u,"byteLength",null),r(u,"toJSON",o(null)),r(u,"PRNG",f)):(e(u,"seed",A),e(u,"seedLength",G),t(u,"state",N,E),e(u,"stateLength",M),e(u,"byteLength",C),r(u,"toJSON",P),r(u,"PRNG",f),f=f.normalized),u;function A(){return f.seed}function G(){return f.seedLength}function M(){return f.stateLength}function C(){return f.byteLength}function N(){return f.state}function E(S){f.state=S}function P(){var S={};return S.type="PRNG",S.name=u.NAME,S.state=d(f.state),h===void 0?S.params=[]:S.params=[h,R],S}function O(){return p(f,h,R)}function F(S,I){return g(S)||g(I)||S>=I?NaN:p(f,S,I)}}return Xf=q,Xf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Zf,N$;function KE(){if(N$)return Zf;N$=1;var r=pr().isPrimitive;function e(t){return r(t)&&t>=0&&t<=1}return Zf=e,Zf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Qf,S$;function ZE(){if(S$)return Qf;S$=1;var r=pr().isObject;function e(t){return r(t)&&t.valueOf()>=0&&t.valueOf()<=1}return Qf=e,Qf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var rv,A$;function Ap(){if(A$)return rv;A$=1;var r=D(),e=bT(),t=KE(),n=ZE();return r(e,"isPrimitive",t),r(e,"isObject",n),rv=e,rv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ev,M$;function QE(){if(M$)return ev;M$=1;var r=D(),e=er(),t=nr(),n=tr(),a=Ap().isPrimitive,i=ur(),o=rr(),s=ar(),l=or(),g=lr().factory,d=Q(),m=ir(),b=Y();function p(){var q,v,f,u;if(arguments.length===0)v=g();else if(arguments.length===1&&n(arguments[0]))if(q=arguments[0],o(q,"prng")){if(!i(q.prng))throw new TypeError(b("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",q.prng));v=q.prng}else v=g(q);else{if(u=arguments[0],!a(u))throw new TypeError(b("invalid argument. First argument must be a probability. Value: `%s`.",u));if(arguments.length>1){if(q=arguments[1],!n(q))throw new TypeError(b("invalid argument. Options argument must be an object. Value: `%s`.",q));if(o(q,"prng")){if(!i(q.prng))throw new TypeError(b("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",q.prng));v=q.prng}else v=g(q)}else v=g()}return u===void 0?f=E:f=N,r(f,"NAME","bernoulli"),q&&q.prng?(r(f,"seed",null),r(f,"seedLength",null),t(f,"state",s(null),l),r(f,"stateLength",null),r(f,"byteLength",null),r(f,"toJSON",s(null)),r(f,"PRNG",v)):(e(f,"seed",c),e(f,"seedLength",h),t(f,"state",G,M),e(f,"stateLength",R),e(f,"byteLength",A),r(f,"toJSON",C),r(f,"PRNG",v),v=v.normalized),f;function c(){return v.seed}function h(){return v.seedLength}function R(){return v.stateLength}function A(){return v.byteLength}function G(){return v.state}function M(P){v.state=P}function C(){var P={};return P.type="PRNG",P.name=f.NAME,P.state=m(v.state),u===void 0?P.params=[]:P.params=[u],P}function N(){return v()<=u?1:0}function E(P){return d(P)||P<0||P>1?NaN:v()<=P?1:0}}return ev=p,ev}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var fv,B$;function ET(){if(B$)return fv;B$=1;var r=Sp(),e=RT();function t(n,a,i){var o,s,l,g;return o=n-a,s=o*o,l=o-s*e(s),g=1-(a-o*l/(2-l)-n),r(g,i)}return fv=t,fv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var vv,H$;function LT(){if(H$)return vv;H$=1;var r=Q(),e=r5(),t=Xr(),n=Nr(),a=ET(),i=.6931471803691238,o=19082149292705877e-26,s=1.4426950408889634,l=709.782712893384,g=-745.1332191019411,d=1/(1<<28),m=-3725290298461914e-24;function b(p){var q,v,f;return r(p)||p===n?p:p===t?0:p>l?n:p<g?0:p>m&&p<d?1+p:(p<0?f=e(s*p-.5):f=e(s*p+.5),q=p-f*i,v=f*o,a(q,v,f))}return vv=b,vv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var lv,U$;function Le(){if(U$)return lv;U$=1;var r=LT();return lv=r,lv}/**
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
*/var cv,W$;function OT(){if(W$)return cv;W$=1;function r(e){return e===0?.3999999999940942:.3999999999940942+e*(.22222198432149784+e*.15313837699209373)}return cv=r,cv}/**
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
*/var gv,z$;function NT(){if(z$)return gv;z$=1;function r(e){return e===0?.6666666666666735:.6666666666666735+e*(.2857142874366239+e*(.1818357216161805+e*.14798198605116586))}return gv=r,gv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var pv,k$;function ST(){if(k$)return pv;k$=1;var r=Vr(),e=Op(),t=Q(),n=Ce(),a=Xr(),i=OT(),o=NT(),s=.6931471803691238,l=19082149292705877e-26,g=0x40000000000000,d=.3333333333333333,m=1048575,b=2146435072,p=1048576,q=1072693248;function v(f){var u,c,h,R,A,G,M,C,N,E,P,O;return f===0?a:t(f)||f<0?NaN:(c=r(f),A=0,c<p&&(A-=54,f*=g,c=r(f)),c>=b?f+f:(A+=(c>>20)-n|0,c&=m,C=c+614244&1048576|0,f=e(f,c|C^q),A+=C>>20|0,M=f-1,(m&2+c)<3?M===0?A===0?0:A*s+A*l:(G=M*M*(.5-d*M),A===0?M-G:A*s-(G-A*l-M)):(E=M/(2+M),O=E*E,C=c-398458|0,P=O*O,N=440401-c|0,R=P*i(P),h=O*o(P),C|=N,G=h+R,C>0?(u=.5*M*M,A===0?M-(u-E*(u+G)):A*s-(u-(E*(u+G)+A*l)-M)):A===0?M-E*(M-G):A*s-(E*(M-G)-A*l-M))))}return pv=v,pv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var mv,D$;function dr(){if(D$)return mv;D$=1;var r=ST();return mv=r,mv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var bv,K$;function PT(){if(K$)return bv;K$=1;var r=Yr(),e=Le(),t=TT(),n=AT(),a=MT(),i=128,o=3.442619855899,s=t(i,o),l=n(s),g=127;function d(m,b){return p;function p(){for(var q,v,f,u,c,h,R;;){if(c=2*m()-1,h=b()&g,r(c)<l[h])return c*s[h];if(h===0)return a(m,o,c<0);if(u=c*s[h],f=u*u,R=h+1,q=e(-.5*(s[h]*s[h]-f)),v=e(-.5*(s[R]*s[R]-f)),v+m()*(q-v)<1)return u}}}return bv=d,bv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $v,Z$;function e5(){if(Z$)return $v;Z$=1;var r=D(),e=er(),t=nr(),n=ur(),a=tr(),i=Pr().isPrimitive,o=rr(),s=ie(),l=lr().factory,g=ar(),d=or(),m=wr(),b=je(),p=ir(),q=Y(),v=PT();function f(u){var c,h,R,A;if(A={copy:!0},arguments.length){if(!a(u))throw new TypeError(q("invalid argument. Must provide an object. Value: `%s`.",u));if(o(u,"copy")&&(A.copy=u.copy,!i(u.copy)))throw new TypeError(q("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",u.copy));if(o(u,"prng")){if(!n(u.prng))throw new TypeError(q("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",u.prng));c=u.prng}else if(o(u,"state")){if(A.state=u.state,!s(u.state))throw new TypeError(q("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",u.state))}else if(o(u,"seed")&&(A.seed=u.seed,u.seed===void 0))throw new TypeError(q("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",u.seed))}return A.state===void 0?c===void 0?(h=l(A),c=h.normalized):(h=l({seed:m(1+b*c()),copy:A.copy}),A.seed=null):(h=l(A),c=h.normalized),R=v(c,h),r(R,"NAME","improved-ziggurat"),A.seed===null?(r(R,"seed",null),r(R,"seedLength",null)):(e(R,"seed",G),e(R,"seedLength",M)),u&&u.prng?(t(R,"state",g(null),d),r(R,"stateLength",null),r(R,"byteLength",null),r(R,"toJSON",g(null))):(t(R,"state",E,P),e(R,"stateLength",C),e(R,"byteLength",N),r(R,"toJSON",O)),r(R,"PRNG",c),R;function G(){return h.seed}function M(){return h.seedLength}function C(){return h.stateLength}function N(){return h.byteLength}function E(){return h.state}function P(F){h.state=F}function O(){var F={};return F.type="PRNG",F.name=R.NAME,F.state=p(h.state),F.params=[],F}}return $v=f,$v}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Ev,tq;function Mp(){if(tq)return Ev;tq=1;function r(e){return Object.keys(Object(e))}return Ev=r,Ev}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Lv,nq;function VT(){if(nq)return Lv;nq=1;var r=Mp();function e(){return(r(arguments)||"").length!==2}function t(){return e(1,2)}return Lv=t,Lv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Mv,fq;function HT(){if(fq)return Mv;fq=1;var r=_e(),e=_r().isPrimitive,t=ue().isPrimitive,n=n5(),a=BT();function i(o,s){var l;return o==null?!1:(l=n.call(o,s),!l&&a&&r(o)?(s=+s,!e(s)&&t(s)&&s>=0&&s<o.length):l)}return Mv=i,Mv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Pv,vq;function lt(){if(vq)return Pv;vq=1;var r=HT();return Pv=r,Pv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Iv,lq;function UT(){if(lq)return Iv;lq=1;var r=rr(),e=lt(),t=ve(),n=Ur(),a=je();function i(o){return o!==null&&typeof o=="object"&&!t(o)&&typeof o.length=="number"&&n(o.length)&&o.length>=0&&o.length<=a&&r(o,"callee")&&!e(o,"callee")}return Iv=i,Iv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Fv,cq;function a5(){if(cq)return Fv;cq=1;var r=CT(),e=t5(),t=UT(),n;return r?n=e:n=t,Fv=n,Fv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var jv,gq;function WT(){if(gq)return jv;gq=1;var r=a5(),e=Mp(),t=Array.prototype.slice;function n(a){return r(a)?e(t.call(a)):e(a)}return jv=n,jv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Vv,pq;function zT(){if(pq)return Vv;pq=1;var r=lt(),e=or(),t=r(e,"prototype");return Vv=t,Vv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Gv,mq;function kT(){if(mq)return Gv;mq=1;var r=lt(),e={toString:null},t=!r(e,"toString");return Gv=t,Gv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Hv,yq;function i5(){if(yq)return Hv;yq=1;function r(e){return e.constructor&&e.constructor.prototype===e}return Hv=r,Hv}const XT=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"];/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Uv,bq;function YT(){if(bq)return Uv;bq=1;var r=typeof window>"u"?void 0:window;return Uv=r,Uv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Wv,$q;function KT(){if($q)return Wv;$q=1;var r=rr(),e=JT(),t=hE(),n=i5(),a=XT,i=YT(),o;function s(){var l;if(t(i)==="undefined")return!1;for(l in i)try{e(a,l)===-1&&r(i,l)&&i[l]!==null&&t(i[l])==="object"&&n(i[l])}catch{return!0}return!1}return o=s(),Wv=o,Wv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zv,qq;function ZT(){if(qq)return zv;qq=1;var r=typeof window<"u";return zv=r,zv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var kv,wq;function QT(){if(wq)return kv;wq=1;var r=KT(),e=i5(),t=ZT();function n(a){if(t===!1&&!r)return e(a);try{return e(a)}catch{return!1}}return kv=n,kv}const xT=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Dv,_q;function rA(){if(_q)return Dv;_q=1;var r=pE(),e=rr(),t=a5(),n=zT(),a=kT(),i=QT(),o=xT;function s(l){var g,d,m,b,p,q,v;if(b=[],t(l)){for(v=0;v<l.length;v++)b.push(v.toString());return b}if(typeof l=="string"){if(l.length>0&&!e(l,"0"))for(v=0;v<l.length;v++)b.push(v.toString())}else{if(m=typeof l=="function",m===!1&&!r(l))return b;d=n&&m}for(p in l)!(d&&p==="prototype")&&e(l,p)&&b.push(String(p));if(a)for(g=i(l),v=0;v<o.length;v++)q=o[v],!(g&&q==="constructor")&&e(l,q)&&b.push(String(q));return b}return Dv=s,Dv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Jv,Rq;function eA(){if(Rq)return Jv;Rq=1;var r=VT(),e=GT(),t=Mp(),n=WT(),a=rA(),i;return e?r()?i=n:i=t:i=a,Jv=i,Jv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Kv,Oq;function aA(){if(Oq)return Kv;Oq=1;var r=fp(),e=r.getOwnPropertySymbols;function t(n){return e(r(n))}return Kv=t,Kv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var el,Mq;function fA(){if(Mq)return el;Mq=1;var r=sA(),e=fp(),t=Y();function n(a){var i,o,s,l,g,d,m;if(a==null)throw new TypeError(t("invalid argument. First argument must be a non-null object. Value: `%s`.",a));for(g=e(a),d=1;d<arguments.length;d++)if(i=arguments[d],i!=null)for(o=r(e(i)),l=o.length,m=0;m<l;m++)s=o[m],g[s]=i[s];return g}return el=n,el}/**
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
*/var nl,Iq;function u5(){if(Iq)return nl;Iq=1;var r=pr().isPrimitive;function e(t){return r(t)&&t>0}return nl=e,nl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var al,Fq;function o5(){if(Fq)return al;Fq=1;var r=pr().isObject;function e(t){return r(t)&&t.valueOf()>0}return al=e,al}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var ul,Vq;function mr(){if(Vq)return ul;Vq=1;var r=D(),e=vA(),t=u5(),n=o5();return r(e,"isPrimitive",t),r(e,"isObject",n),ul=e,ul}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ol,Gq;function lA(){if(Gq)return ol;Gq=1;var r=mr().isPrimitive,e=Y();function t(n,a){return r(n)?r(a)?null:new TypeError(e("invalid argument. Second argument must be a positive number. Value: `%s`.",a)):new TypeError(e("invalid argument. First argument must be a positive number. Value: `%s`.",n))}return ol=t,ol}/**
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
*/var sl,Cq;function cA(){if(Cq)return sl;Cq=1;var r=dr(),e=Rr(),t=Gr(),n=1/3;function a(i,o,s){var l,g,d,m,b,p,q,v,f,u;for(s<1?(p=s+1-n,b=1/e(9*p),v=t(i(),1/s)):(p=s-n,b=1/e(9*p),v=1),l=!0;l;){do q=o(),u=1+b*q;while(u<=0);u*=u*u,g=q*q,d=1-.331*g*g,m=.5*g+p*(1-u+r(u)),f=i(),(f<d||r(f)<m)&&(l=!1)}return p*u*v}return sl=a,sl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fl,Bq;function gA(){if(Bq)return fl;Bq=1;var r=Gr(),e=dr();function t(n,a,i){var o,s,l,g,d,m,b,p;for(l=i-1,d=r(l+l,.5),o=!0;o===!0;)g=a(),b=.5*(1+g/d),b>=0&&b<=1&&(m=n(),s=r(g,4),p=8*i-12,p=1-s/p,m<=p?o=!1:(p+=.5*r(s/(8*i-8),2),m<p&&(p=l*e(4*b*(1-b)),p+=g*g/2,p>=e(m)&&(o=!1))));return b}return fl=t,fl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vl,Hq;function pA(){if(Hq)return vl;Hq=1;var r=Gr(),e=dr();function t(n,a,i,o){var s,l,g,d,m,b,p,q,v,f,u;for(d=i-1,m=o-1,b=d+m,p=b*e(b),g=d/b,s=.5/r(b,.5),l=!0;l===!0;)q=a(),f=g+q*s,f>=0&&f<=1&&(v=n(),u=d*e(f/d),u+=m*e((1-f)/m),u+=p+.5*q*q,u>=e(v)&&(l=!1));return f}return vl=t,vl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ll,Uq;function mA(){if(Uq)return ll;Uq=1;var r=Le(),e=Gr(),t=dr();function n(a,i,o){for(var s,l,g,d,m,b,p;;)if(d=a(),m=a(),b=e(d,1/i),p=e(m,1/o),g=b+p,g<=1)return g>0?b/g:(s=t(d)/i,l=t(m)/o,s>l?(l-=s,s=0):(s-=l,l=0),r(s-t(r(s)+r(l))))}return ll=n,ll}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var cl,Wq;function hA(){if(Wq)return cl;Wq=1;var r=cA(),e=gA(),t=pA(),n=mA();function a(i,o,s,l){var g,d;return s===l&&s>1.5?e(i,o,s):s>1&&l>1?t(i,o,s,l):s<1&&l<1?n(i,s,l):(g=r(i,o,s),d=r(i,o,l),g/(g+d))}return cl=a,cl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gl,zq;function s5(){if(zq)return gl;zq=1;var r=D(),e=er(),t=nr(),n=tr(),a=Pr().isPrimitive,i=ur(),o=rr(),s=ar(),l=or(),g=Qr().factory,d=lr().factory,m=Q(),b=ce(),p=Sr(),q=ie(),v=ct(),f=ir(),u=Y(),c=lA(),h=hA();function R(){var A,G,M,C,N,E,P,O,F;if(O=!0,arguments.length===0)N={copy:!1},E=d(N);else if(arguments.length===1){if(N=arguments[0],!n(N))throw new TypeError(u("invalid argument. Options argument must be an object. Value: `%s`.",N));if(o(N,"copy")&&!a(N.copy))throw new TypeError(u("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",N.copy));if(o(N,"prng")){if(!i(N.prng))throw new TypeError(u("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",N.prng));E=N.prng}else{if(o(N,"state")&&!q(N.state))throw new TypeError(u("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",N.state));N=v({},N),N.copy===!1?O=!1:N.state&&(N.state=b(N.state.length,N.state,1,new p(N.state.length),1)),N.copy=!1,E=d(N)}}else{if(M=arguments[0],C=arguments[1],F=c(M,C),F)throw F;if(arguments.length>2){if(N=arguments[2],!n(N))throw new TypeError(u("invalid argument. Options argument must be an object. Value: `%s`.",N));if(o(N,"copy")&&!a(N.copy))throw new TypeError(u("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",N.copy));if(o(N,"prng")){if(!i(N.prng))throw new TypeError(u("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",N.prng));E=N.prng}else{if(o(N,"state")&&!q(N.state))throw new TypeError(u("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",N.state));N=v({},N),N.copy===!1?O=!1:N.state&&(N.state=b(N.state.length,N.state,1,new p(N.state.length),1)),N.copy=!1,E=d(N)}}else N={copy:!1},E=d(N)}return N&&N.prng?G=g({prng:N.prng}):(N.state?A=N.state:(A=E.state,E.state=A),G=g({state:A,copy:!1})),M===void 0?P=y:P=$,r(P,"NAME","beta"),N&&N.prng?(r(P,"seed",null),r(P,"seedLength",null),t(P,"state",s(null),l),r(P,"stateLength",null),r(P,"byteLength",null),r(P,"toJSON",s(null)),r(P,"PRNG",E)):(e(P,"seed",S),e(P,"seedLength",I),t(P,"state",X,z),e(P,"stateLength",T),e(P,"byteLength",k),r(P,"toJSON",j),r(P,"PRNG",E),E=E.normalized),P;function S(){return E.seed}function I(){return E.seedLength}function T(){return E.stateLength}function k(){return E.byteLength}function X(){return E.state}function z(w){if(!q(w))throw new TypeError(u("invalid argument. Must provide a Uint32Array. Value: `%s`.",w));O&&(w=b(w.length,w,1,new p(w.length),1)),E.state=w}function j(){var w={};return w.type="PRNG",w.name=P.NAME,w.state=f(E.state),M===void 0?w.params=[]:w.params=[M,C],w}function $(){return h(E,G,M,C)}function y(w,L){return m(w)||m(L)||w<=0||L<=0?NaN:h(E,G,w,L)}}return gl=R,gl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pl,kq;function dA(){if(kq)return pl;kq=1;var r=s5(),e=r();return pl=e,pl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ml,Dq;function f5(){if(Dq)return ml;Dq=1;var r=D(),e=dA(),t=s5();return r(e,"factory",t),ml=e,ml}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var hl,Jq;function yA(){if(Jq)return hl;Jq=1;var r=mr().isPrimitive,e=Y();function t(n,a){return r(n)?r(a)?null:new TypeError(e("invalid argument. Second argument must be a positive number. Value: `%s`.",a)):new TypeError(e("invalid argument. First argument must be a positive number. Value: `%s`.",n))}return hl=t,hl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var dl,Xq;function bA(){if(Xq)return dl;Xq=1;var r=dr();function e(t,n,a,i,o){var s,l,g,d,m,b,p;for(s=!0;s;){do m=n(),p=1+o*m;while(p<=0);p*=p*p,l=m*m,g=1-.331*l*l,d=.5*l+i*(1-p+r(p)),b=t(),(b<g||r(b)<d)&&(s=!1)}return 1/a*i*p}return dl=e,dl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var yl,Yq;function v5(){if(Yq)return yl;Yq=1;var r=D(),e=er(),t=nr(),n=tr(),a=ie(),i=Pr().isPrimitive,o=ur(),s=rr(),l=ar(),g=or(),d=Qr().factory,m=lr().factory,b=Q(),p=Rr(),q=Gr(),v=ce(),f=Sr(),u=ir(),c=ct(),h=Y(),R=yA(),A=bA(),G=1/3;function M(){var C,N,E,P,O,F,S,I,T,k,X;if(I=!0,arguments.length===0)O={copy:!1},F=m(O);else if(arguments.length===1){if(O=arguments[0],!n(O))throw new TypeError(h("invalid argument. Options argument must be an object. Value: `%s`.",O));if(s(O,"copy")&&!i(O.copy))throw new TypeError(h("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",O.copy));if(s(O,"prng")){if(!o(O.prng))throw new TypeError(h("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",O.prng));F=O.prng}else{if(s(O,"state")&&!a(O.state))throw new TypeError(h("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",O.state));O=c({},O),O.copy===!1?I=!1:O.state&&(O.state=v(O.state.length,O.state,1,new f(O.state.length),1)),O.copy=!1,F=m(O)}}else{if(N=arguments[0],P=arguments[1],T=R(N,P),T)throw T;if(arguments.length>2){if(O=arguments[2],!n(O))throw new TypeError(h("invalid argument. Options argument must be an object. Value: `%s`.",O));if(s(O,"copy")&&!i(O.copy))throw new TypeError(h("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",O.copy));if(s(O,"prng")){if(!o(O.prng))throw new TypeError(h("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",O.prng));F=O.prng}else{if(s(O,"state")&&!a(O.state))throw new TypeError(h("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",O.state));O=c({},O),O.copy===!1?I=!1:O.state&&(O.state=v(O.state.length,O.state,1,new f(O.state.length),1)),O.copy=!1,F=m(O)}}else O={copy:!1},F=m(O)}return O&&O.prng?E=d({prng:O.prng}):(O.state?C=O.state:(C=F.state,F.state=C),E=d({state:C,copy:!1})),N===void 0?S=Z:(N>=1?(S=B,X=N-G):(S=H,X=N+1-G),k=1/p(9*X)),r(S,"NAME","gamma"),O&&O.prng?(r(S,"seed",null),r(S,"seedLength",null),t(S,"state",l(null),g),r(S,"stateLength",null),r(S,"byteLength",null),r(S,"toJSON",l(null)),r(S,"PRNG",F)):(e(S,"seed",z),e(S,"seedLength",j),t(S,"state",w,L),e(S,"stateLength",$),e(S,"byteLength",y),r(S,"toJSON",_),r(S,"PRNG",F),F=F.normalized),S;function z(){return F.seed}function j(){return F.seedLength}function $(){return F.stateLength}function y(){return F.byteLength}function w(){return F.state}function L(U){if(!a(U))throw new TypeError(h("invalid argument. Must provide a Uint32Array. Value: `%s`.",U));I&&(U=v(U.length,U,1,new f(U.length),1)),F.state=U}function _(){var U={};return U.type="PRNG",U.name=S.NAME,U.state=u(F.state),N===void 0?U.params=[]:U.params=[N,P],U}function B(){return A(F,E,P,X,k)}function H(){return A(F,E,P,X,k)*q(F(),1/N)}function Z(U,K){var W,V;return b(U)||b(K)||U<=0||K<=0?NaN:U<1?(V=U+1-G,W=1/p(9*V),A(F,E,K,V,W)*q(F(),1/U)):(V=U-G,W=1/p(9*V),A(F,E,K,V,W))}}return yl=M,yl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var ql,Qq;function qA(){if(Qq)return ql;Qq=1;var r=mr().isPrimitive,e=Y();function t(n,a){return r(n)?r(a)?null:new TypeError(e("invalid argument. Second argument must be a positive number. Value: `%s`.",a)):new TypeError(e("invalid argument. First argument must be a positive number. Value: `%s`.",n))}return ql=t,ql}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var _l,rw;function l5(){if(rw)return _l;rw=1;var r=D(),e=er(),t=nr(),n=tr(),a=ar(),i=or(),o=Oe().factory,s=Q(),l=ir(),g=Y(),d=qA(),m=wA();function b(){var p,q,v,f,u,c,h;if(arguments.length===0)p=o();else if(arguments.length===1){if(f=arguments[0],!n(f))throw new TypeError(g("invalid argument. Options argument must be an object. Value: `%s`.",f));p=o(f)}else{if(q=arguments[0],v=arguments[1],h=d(q,v),h)throw h;if(arguments.length>2){if(f=arguments[2],!n(f))throw new TypeError(g("invalid argument. Options argument must be an object. Value: `%s`.",f));p=o(f)}else p=o()}return q===void 0?c=O:c=P,u=p.PRNG,r(c,"NAME","betaprime"),f&&f.prng?(r(c,"seed",null),r(c,"seedLength",null),t(c,"state",a(null),i),r(c,"stateLength",null),r(c,"byteLength",null),r(c,"toJSON",a(null))):(e(c,"seed",R),e(c,"seedLength",A),t(c,"state",C,N),e(c,"stateLength",G),e(c,"byteLength",M),r(c,"toJSON",E)),r(c,"PRNG",u),c;function R(){return u.seed}function A(){return u.seedLength}function G(){return u.stateLength}function M(){return u.byteLength}function C(){return u.state}function N(F){u.state=F}function E(){var F={};return F.type="PRNG",F.name=c.NAME,F.state=l(u.state),q===void 0?F.params=[]:F.params=[q,v],F}function P(){return m(p,q,v)}function O(F,S){return s(F)||s(S)||F<=0||S<=0?NaN:m(p,F,S)}}return _l=b,_l}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Tl,ow;function OA(){if(ow)return Tl;ow=1;var r=Fe().isPrimitive,e=Ap().isPrimitive,t=Y();function n(a,i){return r(a)?e(i)?null:new TypeError(t("invalid argument. Second argument must be a probability. Value: `%s`.",i)):new TypeError(t("invalid argument. First argument must be a positive integer. Value: `%s`.",i))}return Tl=n,Tl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Pl,vw;function Pp(){if(vw)return Pl;vw=1;var r=SA();return Pl=r,Pl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Fl,cw;function AA(){if(cw)return Fl;cw=1;var r=wr(),e=Pp(),t=Rr(),n=Yr(),a=dr(),i=TA(),o=1/6;function s(l,g,d){var m,b,p,q,v,f,u,c,h,R,A,G,M,C,N,E,P,O,F,S,I,T,k,X,z,j;for(S=r((g+1)*d),u=g-S+1,I=1-d,T=d/I,c=(g+1)*T,q=g*d*I,p=t(q),C=1.15+2.53*p,M=-.0873+.0248*C+.01*d,N=g*d+.5,m=(2.83+5.1/C)*p,G=.92-4.2/C,b=.86*G,P=(S+.5)*a((S+1)/(T*u)),P+=i(S)+i(g-S);;){if(z=l(),z<=b)return X=z/G-.43,T=X*(2*M/(.5-n(X))+C)+N,r(T);if(z>=G?X=l()-.5:(X=z/G-.93,X=e(X)*.5-X,z=G*l()),h=.5-n(X),F=r(X*(2*M/h+C)+N),!(F<0||F>g))if(z=z*m/(M/(h*h)+C),R=n(F-S),R>15){if(z=a(z),v=R/q,f=(R/3+.625)*R,f+=o,f/=q,v*=f+.5,k=-(R*R)/(2*q),z<k-v||z<=k+v&&(A=g-F+1,j=P+(g+1)*a(u/A),j+=(F+.5)*a(A*T/(F+1)),j+=-(i(F)+i(g-F)),z<=j))return F}else{if(E=1,S<F)for(O=S;O<=F;O++)E*=c/O-T;else if(S>F)for(O=F;O<=S;O++)z*=c/O-T;if(z<=E)return F}}}return Fl=s,Fl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Vl,pw;function p5(){if(pw)return Vl;pw=1;var r=D(),e=er(),t=nr(),n=tr(),a=ur(),i=rr(),o=ar(),s=or(),l=Q(),g=g5(),d=LA(),m=lr().factory,b=ir(),p=Y(),q=OA(),v=MA();function f(){var u,c,h,R,A,G;if(arguments.length===0)c=m();else if(arguments.length===1){if(u=arguments[0],!n(u))throw new TypeError(p("invalid argument. Options argument must be an object. Value: `%s`.",u));if(i(u,"prng")){if(!a(u.prng))throw new TypeError(p("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",u.prng));c=u.prng}else c=m(u)}else{if(A=arguments[0],G=arguments[1],R=q(A,G),R)throw R;if(arguments.length>2){if(u=arguments[2],!n(u))throw new TypeError(p("invalid argument. Options argument must be an object. Value: `%s`.",u));if(i(u,"prng")){if(!a(u.prng))throw new TypeError(p("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",u.prng));c=u.prng}else c=m(u)}else c=m()}return A===void 0?h=I:h=S,r(h,"NAME","binomial"),u&&u.prng?(r(h,"seed",null),r(h,"seedLength",null),t(h,"state",o(null),s),r(h,"stateLength",null),r(h,"byteLength",null),r(h,"toJSON",o(null)),r(h,"PRNG",c)):(e(h,"seed",M),e(h,"seedLength",C),t(h,"state",P,O),e(h,"stateLength",N),e(h,"byteLength",E),r(h,"toJSON",F),r(h,"PRNG",c),c=c.normalized),h;function M(){return c.seed}function C(){return c.seedLength}function N(){return c.stateLength}function E(){return c.byteLength}function P(){return c.state}function O(T){c.state=T}function F(){var T={};return T.type="PRNG",T.name=h.NAME,T.state=b(c.state),A===void 0?T.params=[]:T.params=[A,G],T}function S(){return v(c,A,G)}function I(T,k){return l(T)||l(k)||!g(T)||!d(k)?NaN:v(c,T,k)}}return Vl=f,Vl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Gl,mw;function PA(){if(mw)return Gl;mw=1;var r=p5(),e=r();return Gl=e,Gl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Cl,hw;function m5(){if(hw)return Cl;hw=1;var r=D(),e=PA(),t=p5();return r(e,"factory",t),Cl=e,Cl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Bl,dw;function IA(){if(dw)return Bl;dw=1;var r=Vr(),e=DE(),t=JE(),n=Tp(),a=[0,0],i=2147483647,o=1072243195,s=1044381696,l=2146435072;function g(d){var m,b;if(m=r(d),m&=i,m<=o)return m<s?1:e(d,0);if(m>=l)return NaN;switch(b=n(d,a),b&3){case 0:return e(a[0],a[1]);case 1:return-t(a[0],a[1]);case 2:return-e(a[0],a[1]);default:return t(a[0],a[1])}}return Bl=g,Bl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Hl,yw;function gt(){if(yw)return Hl;yw=1;var r=IA();return Hl=r,Hl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ul,bw;function h5(){if(bw)return Ul;bw=1;var r=6.283185307179586;return Ul=r,Ul}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Wl,$w;function FA(){if($w)return Wl;$w=1;var r=Rr(),e=dr(),t=vt(),n=gt(),a=h5();function i(o){var s,l;return s=!0,g;function g(){var d,m,b,p;if(s){do d=o(),m=o();while(d===0);return b=r(-2*e(d)),p=a*m,l=b*n(p),s=!1,b*t(p)}return s=!0,l}}return Wl=i,Wl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zl,qw;function ge(){if(qw)return zl;qw=1;var r=3.141592653589793;return zl=r,zl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var kl,ww;function jA(){if(ww)return kl;ww=1;var r=Rr(),e=dr(),t=gt(),n=ge(),a=t(n);function i(o){var s=r(-2*e(o));return s*a}return kl=i,kl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Jl,Rw;function d5(){if(Rw)return Jl;Rw=1;var r=D(),e=er(),t=nr(),n=tr(),a=ur(),i=Pr().isPrimitive,o=rr(),s=ie(),l=lr().factory,g=ar(),d=or(),m=ir(),b=Y(),p=FA(),q=jA(),v=VA();function f(u){var c,h,R,A;if(A={copy:!0},arguments.length){if(!n(u))throw new TypeError(b("invalid argument. Must provide an object. Value: `%s`.",u));if(o(u,"copy")&&(A.copy=u.copy,!i(u.copy)))throw new TypeError(b("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",u.copy));if(o(u,"prng")){if(!a(u.prng))throw new TypeError(b("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",u.prng));c=u.prng}else if(o(u,"state")){if(A.state=u.state,!s(u.state))throw new TypeError(b("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",u.state))}else if(o(u,"seed")&&(A.seed=u.seed,u.seed===void 0))throw new TypeError(b("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",u.seed))}return A.state===void 0?c===void 0?(R=l(A),c=R.normalized):A.seed=null:(R=l(A),c=R.normalized),h=p(c),r(h,"NAME","box-muller"),A.seed===null?(r(h,"seed",null),r(h,"seedLength",null)):(e(h,"seed",G),e(h,"seedLength",M)),u&&u.prng?(t(h,"state",g(null),d),r(h,"stateLength",null),r(h,"byteLength",null),r(h,"toJSON",g(null))):(t(h,"state",E,P),e(h,"stateLength",C),e(h,"byteLength",N),r(h,"toJSON",O)),r(h,"PRNG",c),o(c,"MIN")?(r(h,"MIN",q(c.MIN)),r(h,"MAX",v(c.MIN))):(r(h,"MIN",null),r(h,"MAX",null)),h;function G(){return R.seed}function M(){return R.seedLength}function C(){return R.stateLength}function N(){return R.byteLength}function E(){return R.state}function P(F){R.state=F}function O(){var F={};return F.type="PRNG",F.name=h.NAME,F.state=m(R.state),F.params=[],F}}return Jl=f,Jl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Yl,Lw;function Ip(){if(Lw)return Yl;Lw=1;var r=D(),e=GA(),t=d5();return r(e,"factory",t),Yl=e,Yl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Kl,Ow;function CA(){if(Ow)return Kl;Ow=1;var r=pr().isPrimitive,e=mr().isPrimitive,t=Y(),n=_r();function a(i,o){return!r(i)||n(i)?new TypeError(t("invalid argument. First argument must be a number and not NaN. Value: `%s`.",i)):e(o)?null:new TypeError(t("invalid argument. Second argument must be a positive number. Value: `%s`.",o))}return Kl=a,Kl}/**
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
*/var Ql,Sw;function HA(){if(Sw)return Ql;Sw=1;function r(e){return e===0?.05396825397622605:.05396825397622605+e*(.0088632398235993+e*(.0014562094543252903+e*(.0002464631348184699+e*(7140724913826082e-20+e*2590730518636337e-20))))}return Ql=r,Ql}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var xl,Tw;function UA(){if(Tw)return xl;Tw=1;var r=Vr(),e=Ge(),t=BA(),n=HA(),a=.7853981633974483,i=3061616997868383e-32,o=.3333333333333341,s=2147483647;function l(g,d,m){var b,p,q,v,f,u,c,h,R;return b=r(g),p=b&s|0,p>=1072010280&&(g<0&&(g=-g,d=-d),R=a-g,h=i-d,g=R+h,d=0),R=g*g,h=R*R,v=t(h),c=R*n(h),f=R*g,v=d+R*(f*(v+c)+d),v+=o*f,h=g+v,p>=1072010280?(c=m,(1-(b>>30&2))*(c-2*(g-(h*h/(h+c)-v)))):m===1?h:(R=e(h,0),c=v-(R-g),q=-1/h,u=e(q,0),f=1+u*R,u+q*(f+u*c))}return xl=l,xl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var rc,Aw;function WA(){if(Aw)return rc;Aw=1;var r=UA();return rc=r,rc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var ec,Mw;function zA(){if(Mw)return ec;Mw=1;var r=Vr(),e=WA(),t=Tp(),n=[0,0],a=2147483647,i=1072243195,o=2146435072,s=1044381696;function l(g){var d,m;return d=r(g),d&=a,d<=i?d<s?g:e(g,0,1):d>=o?NaN:(m=t(g,n),e(n[0],n[1],1-((m&1)<<1)))}return ec=l,ec}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var tc,Pw;function kA(){if(Pw)return tc;Pw=1;var r=zA();return tc=r,tc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var nc,Iw;function DA(){if(Iw)return nc;Iw=1;var r=kA(),e=ge();function t(n,a,i){return a+i*r(e*(n()-.5))}return nc=t,nc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ac,Fw;function y5(){if(Fw)return ac;Fw=1;var r=D(),e=er(),t=nr(),n=tr(),a=ur(),i=rr(),o=ar(),s=or(),l=Q(),g=Qr().factory,d=ir(),m=Y(),b=CA(),p=DA();function q(){var v,f,u,c,h,R,A;if(arguments.length===0)f=g();else if(arguments.length===1){if(u=arguments[0],!n(u))throw new TypeError(m("invalid argument. Options argument must be an object. Value: `%s`.",u));if(i(u,"prng")){if(!a(u.prng))throw new TypeError(m("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",u.prng));f=g({prng:u.prng})}else f=g(u)}else{if(A=arguments[0],v=arguments[1],R=b(A,v),R)throw R;if(arguments.length>2){if(u=arguments[2],!n(u))throw new TypeError(m("invalid argument. Options argument must be an object. Value: `%s`.",u));if(i(u,"prng")){if(!a(u.prng))throw new TypeError(m("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",u.prng));f=g({prng:u.prng})}else f=g(u)}else f=g()}return A===void 0?h=S:h=F,c=f.PRNG,r(h,"NAME","cauchy"),u&&u.prng?(r(h,"seed",null),r(h,"seedLength",null),t(h,"state",o(null),s),r(h,"stateLength",null),r(h,"byteLength",null),r(h,"toJSON",o(null))):(e(h,"seed",G),e(h,"seedLength",M),t(h,"state",E,P),e(h,"stateLength",C),e(h,"byteLength",N),r(h,"toJSON",O)),r(h,"PRNG",c),h;function G(){return c.seed}function M(){return c.seedLength}function C(){return c.stateLength}function N(){return c.byteLength}function E(){return c.state}function P(I){c.state=I}function O(){var I={};return I.type="PRNG",I.name=h.NAME,I.state=d(c.state),A===void 0?I.params=[]:I.params=[A,v],I}function F(){return p(f,A,v)}function S(I,T){return l(I)||l(T)||T<=0?NaN:p(f,I,T)}}return ac=q,ac}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var oc,Gw;function $5(){if(Gw)return oc;Gw=1;var r=D(),e=er(),t=nr(),n=mr().isPrimitive,a=tr(),i=ur(),o=rr(),s=ar(),l=or(),g=Q(),d=Oe().factory,m=ir(),b=Y();function p(){var q,v,f,u,c;if(arguments.length===0)q=d();else if(arguments.length===1&&a(arguments[0]))if(f=arguments[0],o(f,"prng")){if(!i(f.prng))throw new TypeError(b("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",f.prng));q=d({prng:f.prng})}else q=d(f);else{if(c=arguments[0],!n(c))throw new TypeError(b("invalid argument. First argument must be a positive number. Value: `%s`.",c));if(arguments.length>1){if(f=arguments[1],!a(f))throw new TypeError(b("invalid argument. Options argument must be an object. Value: `%s`.",f));if(o(f,"prng")){if(!i(f.prng))throw new TypeError(b("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",f.prng));q=d(c/2,.5,{prng:f.prng})}else q=d(c/2,.5,f)}else q=d(c/2,.5)}return c===void 0?u=P:u=E,v=q.PRNG,r(u,"NAME","chisquare"),f&&f.prng?(r(u,"seed",null),r(u,"seedLength",null),t(u,"state",s(null),l),r(u,"stateLength",null),r(u,"byteLength",null),r(u,"toJSON",s(null))):(e(u,"seed",h),e(u,"seedLength",R),t(u,"state",M,C),e(u,"stateLength",A),e(u,"byteLength",G),r(u,"toJSON",N)),r(u,"PRNG",v),u;function h(){return v.seed}function R(){return v.seedLength}function A(){return v.stateLength}function G(){return v.byteLength}function M(){return v.state}function C(O){v.state=O}function N(){var O={};return O.type="PRNG",O.name=u.NAME,O.state=m(v.state),c===void 0?O.params=[]:O.params=[c],O}function E(){return q()}function P(O){return g(O)||O<=0?NaN:q(O/2,.5)}}return oc=p,oc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var vc,Hw;function q5(){if(Hw)return vc;Hw=1;var r=D(),e=er(),t=nr(),n=mr().isPrimitive,a=tr(),i=ur(),o=rr(),s=ar(),l=or(),g=Q(),d=Be().factory,m=ir(),b=Rr(),p=Y();function q(){var v,f,u,c,h;if(arguments.length===0)v=d();else if(arguments.length===1&&a(arguments[0]))if(u=arguments[0],o(u,"prng")){if(!i(u.prng))throw new TypeError(p("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",u.prng));v=d({prng:u.prng})}else v=d(u);else{if(h=arguments[0],!n(h))throw new TypeError(p("invalid argument. First argument must be a positive number. Value: `%s`.",h));if(arguments.length>1){if(u=arguments[1],!a(u))throw new TypeError(p("invalid argument. Options argument must be an object. Value: `%s`.",u));if(o(u,"prng")){if(!i(u.prng))throw new TypeError(p("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",u.prng));v=d(h,{prng:u.prng})}else v=d(h,u)}else v=d(h)}return h===void 0?c=O:c=P,f=v.PRNG,r(c,"NAME","chi"),u&&u.prng?(r(c,"seed",null),r(c,"seedLength",null),t(c,"state",s(null),l),r(c,"stateLength",null),r(c,"byteLength",null),r(c,"toJSON",s(null))):(e(c,"seed",R),e(c,"seedLength",A),t(c,"state",C,N),e(c,"stateLength",G),e(c,"byteLength",M),r(c,"toJSON",E)),r(c,"PRNG",f),c;function R(){return f.seed}function A(){return f.seedLength}function G(){return f.stateLength}function M(){return f.byteLength}function C(){return f.state}function N(F){f.state=F}function E(){var F={};return F.type="PRNG",F.name=c.NAME,F.state=m(f.state),h===void 0?F.params=[]:F.params=[h],F}function P(){return b(v())}function O(F){return g(F)||F<=0?NaN:b(v(F))}}return vc=q,vc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var lc,Uw;function YA(){if(Uw)return lc;Uw=1;var r=q5(),e=r();return lc=e,lc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var cc,Ww;function w5(){if(Ww)return cc;Ww=1;var r=D(),e=YA(),t=q5();return r(e,"factory",t),cc=e,cc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gc,zw;function KA(){if(zw)return gc;zw=1;var r=pr().isPrimitive,e=mr().isPrimitive,t=Y(),n=_r();function a(i,o){return!r(i)||n(i)?new TypeError(t("invalid argument. First argument must be a number and not NaN. Value: `%s`.",i)):e(o)?null:new TypeError(t("invalid argument. Second argument must be a positive number. Value: `%s`.",o))}return gc=a,gc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pc,kw;function ZA(){if(kw)return pc;kw=1;var r=Q(),e=Ve(),t=gt(),n=vt(),a=Yr(),i=Lp(),o=ge();function s(l){var g,d;return r(l)?NaN:e(l)?NaN:(d=l%2,g=a(d),g===0||g===1?i(0,d):g<.25?n(o*d):g<.75?(g=.5-g,i(t(o*g),d)):g<1.25?(d=i(1,d)-d,n(o*d)):g<1.75?(g-=1.5,-i(t(o*g),d)):(d-=i(2,d),n(o*d)))}return pc=s,pc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var mc,Dw;function Fp(){if(Dw)return mc;Dw=1;var r=ZA();return mc=r,mc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var hc,Jw;function QA(){if(Jw)return hc;Jw=1;var r=Q(),e=Fp(),t=ge();function n(a,i,o){var s;return r(a)||r(i)||r(o)||o<0?NaN:o===0?a<i?0:1:a<i-o?0:a>i+o?1:(s=(a-i)/o,(1+s+e(s)/t)/2)}return hc=n,hc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var $c,Zw;function tM(){if(Zw)return $c;Zw=1;var r=ar(),e=eM().factory,t=Q(),n=Fp(),a=ge();function i(o,s){if(t(o)||t(s)||s<0)return r(NaN);if(s===0)return e(o);return l;function l(g){var d;return t(g)?NaN:g<o-s?0:g>o+s?1:(d=(g-o)/s,(1+d+n(d)/a)/2)}}return $c=i,$c}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var wc,xw;function _5(){if(xw)return wc;xw=1;var r=nM(),e=1e4,t=1e-12;function n(a,i,o){var s,l,g,d,m;for(m=1,s=i-o,l=i+o;m<e;){if(d=(s+l)/2,l-s<t)return d;g=r(d,i,o),a>g?s=d:l=d,m+=1}return d}return wc=n,wc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Tc,o4;function E5(){if(o4)return Tc;o4=1;var r=D(),e=er(),t=nr(),n=tr(),a=ur(),i=rr(),o=ar(),s=or(),l=lr().factory,g=Q(),d=ir(),m=Y(),b=KA(),p=fM();function q(){var v,f,u,c,h,R;if(arguments.length===0)f=l();else if(arguments.length===1){if(v=arguments[0],!n(v))throw new TypeError(m("invalid argument. Options argument must be an object. Value: `%s`.",v));if(i(v,"prng")){if(!a(v.prng))throw new TypeError(m("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",v.prng));f=v.prng}else f=l(v)}else{if(h=arguments[0],R=arguments[1],c=b(h,R),c)throw c;if(arguments.length>2){if(v=arguments[2],!n(v))throw new TypeError(m("invalid argument. Options argument must be an object. Value: `%s`.",v));if(i(v,"prng")){if(!a(v.prng))throw new TypeError(m("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",v.prng));f=v.prng}else f=l(v)}else f=l()}return h===void 0?u=F:u=O,r(u,"NAME","cosine"),v&&v.prng?(r(u,"seed",null),r(u,"seedLength",null),t(u,"state",o(null),s),r(u,"stateLength",null),r(u,"byteLength",null),r(u,"toJSON",o(null)),r(u,"PRNG",f)):(e(u,"seed",A),e(u,"seedLength",G),t(u,"state",N,E),e(u,"stateLength",M),e(u,"byteLength",C),r(u,"toJSON",P),r(u,"PRNG",f),f=f.normalized),u;function A(){return f.seed}function G(){return f.seedLength}function M(){return f.stateLength}function C(){return f.byteLength}function N(){return f.state}function E(S){f.state=S}function P(){var S={};return S.type="PRNG",S.name=u.NAME,S.state=d(f.state),h===void 0?S.params=[]:S.params=[h,R],S}function O(){return p(f,h,R)}function F(S,I){return g(S)||g(I)||I<=0?NaN:p(f,S,I)}}return Tc=q,Tc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Ic,l4;function cM(){if(l4)return Ic;l4=1;var r=RE(),e=wr();function t(n,a,i){var o,s,l,g,d,m,b,p,q;if(l=i-a,l===0)return a;if(b=n.MIN,p=n.MAX,s=p-b,s===l)return n()-b+a;if(s<l)for(g=0;;){for(l===r?(g=e(l/(s+1)),l%(s+1)===s&&(g+=1)):g=e((l+1)/(s+1)),o=0,m=1;m<=g;){if(o+=(n()-b)*m,m*s===l-m+1)return o;m*=s+1}if(q=t(n,0,e(l/m)),!(q>r/m)&&(q*=m,o+=q,!(o>l)))return o+a}for(s===r?(d=e(s/(l+1)),s%(l+1)===l&&(d+=1)):d=e((s+1)/(l+1));;)if(o=n()-b,o=e(o/d),o<=l)return o+a}return Ic=t,Ic}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Fc,c4;function O5(){if(c4)return Fc;c4=1;var r=D(),e=er(),t=nr(),n=tr(),a=ur(),i=rr(),o=ar(),s=or(),l=lr().factory,g=Q(),d=Ur(),m=ir(),b=Y(),p=lM(),q=cM();function v(){var f,u,c,h,R,A;if(arguments.length===0)u=l();else if(arguments.length===1){if(f=arguments[0],!n(f))throw new TypeError(b("invalid argument. Options argument must be an object. Value: `%s`.",f));if(i(f,"prng")){if(!a(f.prng))throw new TypeError(b("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",f.prng));if(u=f.prng,!d(u.MIN))throw new TypeError(b("invalid option. `%s` option must have a `MIN` property specifying the minimum possible pseudorandom integer value.","prng"));if(!d(u.MAX))throw new TypeError(b("invalid option. `%s` option must have a `MAX` property specifying the maximum possible pseudorandom integer value.","prng"))}else u=l(f)}else{if(R=arguments[0],A=arguments[1],h=p(R,A),h)throw h;if(arguments.length>2){if(f=arguments[2],!n(f))throw new TypeError(b("invalid argument. Options argument must be an object. Value: `%s`.",f));if(i(f,"prng")){if(!a(f.prng))throw new TypeError(b("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",f.prng));if(u=f.prng,!d(u.MIN))throw new TypeError(b("invalid option. `%s` option must have a `MIN` property specifying the minimum possible pseudorandom integer value.","prng"));if(!d(u.MAX))throw new TypeError(b("invalid option. `%s` option must have a `MAX` property specifying the maximum possible pseudorandom integer value.","prng"))}else u=l(f)}else u=l()}return R===void 0?c=S:c=F,r(c,"NAME","discrete-uniform"),f&&f.prng?(r(c,"seed",null),r(c,"seedLength",null),t(c,"state",o(null),s),r(c,"stateLength",null),r(c,"byteLength",null),r(c,"toJSON",o(null)),r(c,"PRNG",u)):(e(c,"seed",G),e(c,"seedLength",M),t(c,"state",E,P),e(c,"stateLength",C),e(c,"byteLength",N),r(c,"toJSON",O),r(c,"PRNG",u)),c;function G(){return u.seed}function M(){return u.seedLength}function C(){return u.stateLength}function N(){return u.byteLength}function E(){return u.state}function P(I){u.state=I}function O(){var I={};return I.type="PRNG",I.name=c.NAME,I.state=m(u.state),R===void 0?I.params=[]:I.params=[R,A],I}function F(){return q(u,R,A)}function S(I,T){return g(I)||g(T)||!d(I)||!d(T)||I>T?NaN:q(u,I,T)}}return Fc=v,Fc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Vc,p4;function N5(){if(p4)return Vc;p4=1;var r=D(),e=gM(),t=O5();return r(e,"factory",t),Vc=e,Vc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Gc,m4;function pM(){if(m4)return Gc;m4=1;var r=mr().isPrimitive,e=Fe().isPrimitive,t=Y();function n(a,i){return e(a)?r(i)?null:new TypeError(t("invalid argument. Second argument must be a positive number. Value: `%s`.",i)):new TypeError(t("invalid argument. First argument must be a positive integer. Value: `%s`.",a))}return Gc=n,Gc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Cc,h4;function mM(){if(h4)return Cc;h4=1;var r=dr();function e(t,n,a){var i,o;for(i=1,o=0;o<n;o++)i*=t();return-(1/a)*r(i)}return Cc=e,Cc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Bc,d4;function S5(){if(d4)return Bc;d4=1;var r=D(),e=er(),t=nr(),n=tr(),a=ur(),i=rr(),o=ar(),s=or(),l=lr().factory,g=Q(),d=g5(),m=ir(),b=Y(),p=pM(),q=mM();function v(){var f,u,c,h,R,A;if(arguments.length===0)u=l();else if(arguments.length===1){if(c=arguments[0],!n(c))throw new TypeError(b("invalid argument. Options argument must be an object. Value: `%s`.",c));if(i(c,"prng")){if(!a(c.prng))throw new TypeError(b("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",c.prng));u=c.prng}else u=l(c)}else{if(A=arguments[0],f=arguments[1],R=p(A,f),R)throw R;if(arguments.length>2){if(c=arguments[2],!n(c))throw new TypeError(b("invalid argument. Options argument must be an object. Value: `%s`.",c));if(i(c,"prng")){if(!a(c.prng))throw new TypeError(b("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",c.prng));u=c.prng}else u=l(c)}else u=l()}return A===void 0?h=S:h=F,r(h,"NAME","erlang"),c&&c.prng?(r(h,"seed",null),r(h,"seedLength",null),t(h,"state",o(null),s),r(h,"stateLength",null),r(h,"byteLength",null),r(h,"toJSON",o(null)),r(h,"PRNG",u)):(e(h,"seed",G),e(h,"seedLength",M),t(h,"state",E,P),e(h,"stateLength",C),e(h,"byteLength",N),r(h,"toJSON",O),r(h,"PRNG",u),u=u.normalized),h;function G(){return u.seed}function M(){return u.seedLength}function C(){return u.stateLength}function N(){return u.byteLength}function E(){return u.state}function P(I){u.state=I}function O(){var I={};return I.type="PRNG",I.name=h.NAME,I.state=m(u.state),A===void 0?I.params=[]:I.params=[A,f],I}function F(){return q(u,A,f)}function S(I,T){return g(I)||g(T)||!d(I)||T<=0?NaN:q(u,I,T)}}return Bc=v,Bc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Hc,y4;function hM(){if(y4)return Hc;y4=1;var r=S5(),e=r();return Hc=e,Hc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Uc,b4;function T5(){if(b4)return Uc;b4=1;var r=D(),e=hM(),t=S5();return r(e,"factory",t),Uc=e,Uc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Wc,$4;function dM(){if($4)return Wc;$4=1;var r=dr();function e(t,n){return-r(1-t())/n}return Wc=e,Wc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zc,q4;function A5(){if(q4)return zc;q4=1;var r=D(),e=er(),t=nr(),n=mr().isPrimitive,a=tr(),i=ur(),o=rr(),s=ar(),l=or(),g=lr().factory,d=Q(),m=ir(),b=Y(),p=dM();function q(){var v,f,u,c;if(arguments.length===0)u=g();else if(arguments.length===1&&a(arguments[0]))if(f=arguments[0],o(f,"prng")){if(!i(f.prng))throw new TypeError(b("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",f.prng));u=f.prng}else u=g(f);else{if(v=arguments[0],!n(v))throw new TypeError(b("invalid argument. First argument must be a positive number. Value: `%s`.",v));if(arguments.length>1){if(f=arguments[1],!a(f))throw new TypeError(b("invalid argument. Options argument must be an object. Value: `%s`.",f));if(o(f,"prng")){if(!i(f.prng))throw new TypeError(b("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",f.prng));u=f.prng}else u=g(f)}else u=g()}return v===void 0?c=P:c=E,r(c,"NAME","exponential"),f&&f.prng?(r(c,"seed",null),r(c,"seedLength",null),t(c,"state",s(null),l),r(c,"stateLength",null),r(c,"byteLength",null),r(c,"toJSON",s(null)),r(c,"PRNG",u)):(e(c,"seed",h),e(c,"seedLength",R),t(c,"state",M,C),e(c,"stateLength",A),e(c,"byteLength",G),r(c,"toJSON",N),r(c,"PRNG",u),u=u.normalized),c;function h(){return u.seed}function R(){return u.seedLength}function A(){return u.stateLength}function G(){return u.byteLength}function M(){return u.state}function C(O){u.state=O}function N(){var O={};return O.type="PRNG",O.name=c.NAME,O.state=m(u.state),v===void 0?O.params=[]:O.params=[v],O}function E(){return p(u,v)}function P(O){return d(O)||O<=0?NaN:p(u,O)}}return zc=q,zc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var kc,w4;function yM(){if(w4)return kc;w4=1;var r=A5(),e=r();return kc=e,kc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Jc,R4;function bM(){if(R4)return Jc;R4=1;var r=mr().isPrimitive,e=Y();function t(n,a){return r(n)?r(a)?null:new TypeError(e("invalid argument. Second argument must be a positive number. Value: `%s`.",a)):new TypeError(e("invalid argument. First argument must be a positive number. Value: `%s`.",n))}return Jc=t,Jc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Yc,L4;function P5(){if(L4)return Yc;L4=1;var r=D(),e=er(),t=nr(),n=tr(),a=ur(),i=rr(),o=ar(),s=or(),l=Be().factory,g=Q(),d=ir(),m=Y(),b=bM(),p=$M();function q(){var v,f,u,c,h,R,A;if(arguments.length===0)v=l();else if(arguments.length===1){if(f=arguments[0],!n(f))throw new TypeError(m("invalid argument. Options argument must be an object. Value: `%s`.",f));if(i(f,"prng")){if(!a(f.prng))throw new TypeError(m("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",f.prng));v=l({prng:f.prng})}else v=l(f)}else{if(R=arguments[0],A=arguments[1],h=b(R,A),h)throw h;if(arguments.length>2){if(f=arguments[2],!n(f))throw new TypeError(m("invalid argument. Options argument must be an object. Value: `%s`.",f));if(i(f,"prng")){if(!a(f.prng))throw new TypeError(m("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",f.prng));v=l({prng:f.prng})}else v=l(f)}else v=l()}return R===void 0?c=S:c=F,u=v.PRNG,r(c,"NAME","f"),f&&f.prng?(r(c,"seed",null),r(c,"seedLength",null),t(c,"state",o(null),s),r(c,"stateLength",null),r(c,"byteLength",null),r(c,"toJSON",o(null))):(e(c,"seed",G),e(c,"seedLength",M),t(c,"state",E,P),e(c,"stateLength",C),e(c,"byteLength",N),r(c,"toJSON",O)),r(c,"PRNG",u),c;function G(){return u.seed}function M(){return u.seedLength}function C(){return u.stateLength}function N(){return u.byteLength}function E(){return u.state}function P(I){u.state=I}function O(){var I={};return I.type="PRNG",I.name=c.NAME,I.state=d(u.state),R===void 0?I.params=[]:I.params=[R,A],I}function F(){return p(v,R,A)}function S(I,T){return g(I)||g(T)||I<=0||T<=0?NaN:p(v,I,T)}}return Yc=q,Yc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Qc,S4;function wM(){if(S4)return Qc;S4=1;var r=mr().isPrimitive,e=pr().isPrimitive,t=_r(),n=Y();function a(i,o,s){return!r(i)||t(i)?new TypeError(n("invalid argument. First argument must be a positive number and not NaN. Value: `%s`.",i)):!r(o)||t(o)?new TypeError(n("invalid argument. Second argument must be a positive number and not NaN. Value: `%s`.",o)):!e(s)||t(s)?new TypeError(n("invalid argument. Third argument must be a number and not NaN. Value: `%s`.",s)):null}return Qc=a,Qc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var r0,A4;function F5(){if(A4)return r0;A4=1;var r=D(),e=er(),t=nr(),n=tr(),a=ur(),i=rr(),o=ar(),s=or(),l=lr().factory,g=Q(),d=ir(),m=Y(),b=wM(),p=_M();function q(){var v,f,u,c,h,R,A;if(arguments.length===0)u=l();else if(arguments.length===1){if(f=arguments[0],!n(f))throw new TypeError(m("invalid argument. Options argument must be an object. Value: `%s`.",f));if(i(f,"prng")){if(!a(f.prng))throw new TypeError(m("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",f.prng));u=f.prng}else u=l(f)}else{if(v=arguments[0],R=arguments[1],A=arguments[2],h=b(v,R,A),h)throw h;if(arguments.length>3){if(f=arguments[3],!n(f))throw new TypeError(m("invalid argument. Options argument must be an object. Value: `%s`.",f));if(i(f,"prng")){if(!a(f.prng))throw new TypeError(m("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",f.prng));u=f.prng}else u=l(f)}else u=l()}return v===void 0?c=S:c=F,r(c,"NAME","frechet"),f&&f.prng?(r(c,"seed",null),r(c,"seedLength",null),t(c,"state",o(null),s),r(c,"stateLength",null),r(c,"byteLength",null),r(c,"toJSON",o(null)),r(c,"PRNG",u)):(e(c,"seed",G),e(c,"seedLength",M),t(c,"state",E,P),e(c,"stateLength",C),e(c,"byteLength",N),r(c,"toJSON",O),r(c,"PRNG",u),u=u.normalized),c;function G(){return u.seed}function M(){return u.seedLength}function C(){return u.stateLength}function N(){return u.byteLength}function E(){return u.state}function P(I){u.state=I}function O(){var I={};return I.type="PRNG",I.name=c.NAME,I.state=d(u.state),v===void 0?I.params=[]:I.params=[v,R,A],I}function F(){return p(u,v,R,A)}function S(I,T,k){return g(I)||g(T)||g(k)||I<=0||T<=0?NaN:p(u,I,T,k)}}return r0=q,r0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var a0,F4;function V5(){if(F4)return a0;F4=1;var r=D(),e=er(),t=nr(),n=tr(),a=Ap().isPrimitive,i=ur(),o=rr(),s=ar(),l=or(),g=lr().factory,d=Q(),m=ir(),b=Y(),p=EM();function q(){var v,f,u,c;if(arguments.length===0)f=g();else if(arguments.length===1&&n(arguments[0]))if(v=arguments[0],o(v,"prng")){if(!i(v.prng))throw new TypeError(b("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",v.prng));f=v.prng}else f=g(v);else{if(c=arguments[0],!a(c))throw new TypeError(b("invalid argument. First argument must be a probability. Value: `%s`.",c));if(arguments.length>1){if(v=arguments[1],!n(v))throw new TypeError(b("invalid argument. Options argument must be an object. Value: `%s`.",v));if(o(v,"prng")){if(!i(v.prng))throw new TypeError(b("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",v.prng));f=v.prng}else f=g(v)}else f=g()}return c===void 0?u=P:u=E,r(u,"NAME","geometric"),v&&v.prng?(r(u,"seed",null),r(u,"seedLength",null),t(u,"state",s(null),l),r(u,"stateLength",null),r(u,"byteLength",null),r(u,"toJSON",s(null)),r(u,"PRNG",f)):(e(u,"seed",h),e(u,"seedLength",R),t(u,"state",M,C),e(u,"stateLength",A),e(u,"byteLength",G),r(u,"toJSON",N),r(u,"PRNG",f),f=f.normalized),u;function h(){return f.seed}function R(){return f.seedLength}function A(){return f.stateLength}function G(){return f.byteLength}function M(){return f.state}function C(O){f.state=O}function N(){var O={};return O.type="PRNG",O.name=u.NAME,O.state=m(f.state),c===void 0?O.params=[]:O.params=[c],O}function E(){return p(f,c)}function P(O){return d(O)||O<0||O>1?NaN:p(f,O)}}return a0=q,a0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var o0,G4;function OM(){if(G4)return o0;G4=1;var r=pr().isPrimitive,e=mr().isPrimitive,t=Y(),n=_r();function a(i,o){return!r(i)||n(i)?new TypeError(t("invalid argument. First argument must be a number and not NaN. Value: `%s`.",i)):e(o)?null:new TypeError(t("invalid argument. Second argument must be a positive number. Value: `%s`.",o))}return o0=a,o0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var f0,B4;function C5(){if(B4)return f0;B4=1;var r=D(),e=er(),t=nr(),n=tr(),a=ur(),i=rr(),o=ar(),s=or(),l=lr().factory,g=Q(),d=ir(),m=Y(),b=OM(),p=NM();function q(){var v,f,u,c,h,R;if(arguments.length===0)u=l();else if(arguments.length===1){if(f=arguments[0],!n(f))throw new TypeError(m("invalid argument. Options argument must be an object. Value: `%s`.",f));if(i(f,"prng")){if(!a(f.prng))throw new TypeError(m("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",f.prng));u=f.prng}else u=l(f)}else{if(R=arguments[0],v=arguments[1],h=b(R,v),h)throw h;if(arguments.length>2){if(f=arguments[2],!n(f))throw new TypeError(m("invalid argument. Options argument must be an object. Value: `%s`.",f));if(i(f,"prng")){if(!a(f.prng))throw new TypeError(m("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",f.prng));u=f.prng}else u=l(f)}else u=l()}return R===void 0?c=F:c=O,r(c,"NAME","gumbel"),f&&f.prng?(r(c,"seed",null),r(c,"seedLength",null),t(c,"state",o(null),s),r(c,"stateLength",null),r(c,"byteLength",null),r(c,"toJSON",o(null)),r(c,"PRNG",u)):(e(c,"seed",A),e(c,"seedLength",G),t(c,"state",N,E),e(c,"stateLength",M),e(c,"byteLength",C),r(c,"toJSON",P),r(c,"PRNG",u),u=u.normalized),c;function A(){return u.seed}function G(){return u.seedLength}function M(){return u.stateLength}function C(){return u.byteLength}function N(){return u.state}function E(S){u.state=S}function P(){var S={};return S.type="PRNG",S.name=c.NAME,S.state=d(u.state),R===void 0?S.params=[]:S.params=[R,v],S}function O(){return p(u,R,v)}function F(S,I){return g(S)||g(I)||I<=0?NaN:p(u,S,I)}}return f0=q,f0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var v0,H4;function SM(){if(H4)return v0;H4=1;var r=C5(),e=r();return v0=e,v0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var l0,U4;function B5(){if(U4)return l0;U4=1;var r=D(),e=SM(),t=C5();return r(e,"factory",t),l0=e,l0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var c0,W4;function TM(){if(W4)return c0;W4=1;var r=wr();function e(t){return r(t)===t&&t>=0}return c0=e,c0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var g0,z4;function AM(){if(z4)return g0;z4=1;var r=TM();return g0=r,g0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var p0,k4;function MM(){if(k4)return p0;k4=1;var r=dp().isPrimitive,e=Y();function t(n,a,i){return r(n)?r(a)?r(i)?i>n?new RangeError(e("invalid argument. Third argument must be less than or equal to the first argument. Value: `%u`.",i)):a>n?new RangeError(e("invalid argument. Second argument must be less than or equal to the first argument. Value: `%u`.",a)):null:new TypeError(e("invalid argument. Third argument must be a nonnegative integer. Value: `%s`.",i)):new TypeError(e("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",a)):new TypeError(e("invalid argument. First argument must be a nonnegative integer. Value: `%s`.",n))}return p0=t,p0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var m0,D4;function PM(){if(D4)return m0;D4=1;var r=Xr();function e(t){return t===0&&1/t===r}return m0=e,m0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var _0,r_;function HM(){if(r_)return _0;r_=1;var r=Q(),e=Ur(),t=IM(),n=Yr(),a=wr(),i=vt(),o=Nr(),s=Xr(),l=ge(),g=VM(),d=CM(),m=BM();function b(p){var q,v,f,u;if(e(p)&&p<0||p===s||r(p))return NaN;if(p===0)return t(p)?s:o;if(p>171.61447887182297)return o;if(p<-170.5674972726612)return 0;if(v=n(p),v>33)return p>=0?g(p):(f=a(v),(f&1)===0?q=-1:q=1,u=v-f,u>.5&&(f+=1,u=v-f),u=v*i(l*u),q*l/(n(u)*g(v)));for(u=1;p>=3;)p-=1,u*=p;for(;p<0;){if(p>-1e-9)return d(p,u);u/=p,p+=1}for(;p<2;){if(p<1e-9)return d(p,u);u/=p,p+=1}return p===2?u:(p-=2,u*m(p))}return _0=b,_0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var R0,e_;function UM(){if(e_)return R0;e_=1;var r=HM();return R0=r,R0}const WM=[1,1,2,6,24,120,720,5040,40320,362880,3628800,39916800,479001600,6227020800,87178291200,1307674368e3,20922789888e3,355687428096e3,6402373705728e3,121645100408832e3,243290200817664e4,5109094217170944e4,11240007277776077e5,2585201673888498e7,6204484017332394e8,15511210043330986e9,40329146112660565e10,10888869450418352e12,30488834461171387e13,8841761993739702e15,26525285981219107e16,8222838654177922e18,2631308369336935e20,8683317618811886e21,29523279903960416e22,10333147966386145e24,37199332678990125e25,13763753091226346e27,5230226174666011e29,20397882081197444e30,8159152832478977e32,3345252661316381e34,140500611775288e37,6041526306337383e37,2658271574788449e39,11962222086548019e40,5502622159812089e42,25862324151116818e43,12413915592536073e45,6082818640342675e47,30414093201713376e48,15511187532873822e50,8065817517094388e52,42748832840600255e53,2308436973392414e56,12696403353658276e57,7109985878048635e59,40526919504877214e60,23505613312828785e62,13868311854568984e64,832098711274139e67,5075802138772248e68,3146997326038794e70,198260831540444e73,12688693218588417e73,8247650592082472e75,5443449390774431e77,3647111091818868e79,24800355424368305e80,1711224524281413e83,11978571669969892e84,8504785885678623e86,61234458376886085e87,44701154615126844e89,3307885441519386e92,248091408113954e95,18854947016660504e95,14518309202828587e97,11324281178206297e99,8946182130782976e101,7156945704626381e103,5797126020747368e105,4753643337012842e107,3945523969720659e109,3314240134565353e111,281710411438055e114,24227095383672734e114,2107757298379528e117,18548264225739844e118,1650795516090846e121,14857159644817615e122,1352001527678403e125,12438414054641308e126,11567725070816416e128,1087366156656743e131,1032997848823906e133,9916779348709496e134,9619275968248212e136,9426890448883248e138,9332621544394415e140,9332621544394415e142,942594775983836e145,9614466715035127e146,990290071648618e149,10299016745145628e150,1081396758240291e153,11462805637347084e154,1226520203196138e157,1324641819451829e159,14438595832024937e160,1588245541522743e163,17629525510902446e164,1974506857221074e167,22311927486598138e168,25435597334721877e170,2925093693493016e173,3393108684451898e175,3969937160808721e177,4684525849754291e179,5574585761207606e181,6689502913449127e183,8094298525273444e185,9875044200833601e187,1214630436702533e190,1506141741511141e192,1882677176888926e194,2372173242880047e196,30126600184576594e197,3856204823625804e200,4974504222477287e202,6466855489220474e204,847158069087882e207,11182486511960043e208,14872707060906857e210,19929427461615188e212,26904727073180504e214,3659042881952549e217,5012888748274992e219,6917786472619489e221,9615723196941089e223,13462012475717526e225,1898143759076171e228,2695364137888163e230,3854370717180073e232,55502938327393044e233,8047926057471992e236,11749972043909107e238,1727245890454639e241,25563239178728654e242,380892263763057e246,5713383956445855e247,862720977423324e250,13113358856834524e251,20063439050956823e253,30897696138473508e255,4789142901463394e258,7471062926282894e260,11729568794264145e262,1853271869493735e265,29467022724950384e266,47147236359920616e268,7590705053947219e271,12296942187394494e273,20044015765453026e275,3287218585534296e278,5423910666131589e280,9003691705778438e282,1503616514864999e285,25260757449731984e286,4269068009004705e289,7257415615307999e291];/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var E0,t_;function zM(){if(t_)return E0;t_=1;var r=Q(),e=Ur(),t=UM(),n=Nr(),a=WM,i=170;function o(s){return r(s)?NaN:e(s)?s<0?NaN:s<=i?a[s]:n:t(s+1)}return E0=o,E0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var L0,n_;function kM(){if(n_)return L0;n_=1;var r=zM();return L0=r,L0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var O0,a_;function DM(){if(a_)return O0;a_=1;var r=kM();function e(t,n,a,i){var o,s,l;for(i<a?(o=r(a)*r(n+a-i)/(r(n+a)*r(a-i)),l=0):(o=r(n)*r(i)/(r(i-a)*r(n+a)),l=i-a),s=t();s>o;)s-=o,o*=(n-l)*(i-l)/((l+1)*(a-i+1+l)),l+=1;return l}return O0=e,O0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var S0,u_;function H5(){if(u_)return S0;u_=1;var r=D(),e=er(),t=nr(),n=tr(),a=ur(),i=rr(),o=ar(),s=or(),l=lr().factory,g=AM(),d=Nr(),m=ir(),b=Y(),p=MM(),q=JM();function v(){var f,u,c,h,R,A,G;if(arguments.length===0)u=l();else if(arguments.length===1){if(f=arguments[0],!n(f))throw new TypeError(b("invalid argument. Options argument must be an object. Value: `%s`.",f));if(i(f,"prng")){if(!a(f.prng))throw new TypeError(b("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",f.prng));u=f.prng}else u=l(f)}else{if(R=arguments[0],A=arguments[1],G=arguments[2],h=p(R,A,G),h)throw h;if(arguments.length>3){if(f=arguments[3],!n(f))throw new TypeError(b("invalid argument. Options argument must be an object. Value: `%s`.",f));if(i(f,"prng")){if(!a(f.prng))throw new TypeError(b("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",f.prng));u=f.prng}else u=l(f)}else u=l()}return R===void 0?c=I:c=S,r(c,"NAME","hypergeometric"),f&&f.prng?(r(c,"seed",null),r(c,"seedLength",null),t(c,"state",o(null),s),r(c,"stateLength",null),r(c,"byteLength",null),r(c,"toJSON",o(null)),r(c,"PRNG",u)):(e(c,"seed",M),e(c,"seedLength",C),t(c,"state",P,O),e(c,"stateLength",N),e(c,"byteLength",E),r(c,"toJSON",F),r(c,"PRNG",u),u=u.normalized),c;function M(){return u.seed}function C(){return u.seedLength}function N(){return u.stateLength}function E(){return u.byteLength}function P(){return u.state}function O(T){u.state=T}function F(){var T={};return T.type="PRNG",T.name=c.NAME,T.state=m(u.state),R===void 0?T.params=[]:T.params=[R,A,G],T}function S(){return q(u,R,A,G)}function I(T,k,X){return T===d||k===d||!g(T)||!g(k)||!g(X)||X>T?NaN:q(u,T,k,X)}}return S0=v,S0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var T0,o_;function XM(){if(o_)return T0;o_=1;var r=H5(),e=r();return T0=e,T0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var A0,s_;function U5(){if(s_)return A0;s_=1;var r=D(),e=XM(),t=H5();return r(e,"factory",t),A0=e,A0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var M0,f_;function YM(){if(f_)return M0;f_=1;var r=mr().isPrimitive,e=Y();function t(n,a){return r(n)?r(a)?null:new TypeError(e("invalid argument. Second argument must be a positive number. Value: `%s`.",a)):new TypeError(e("invalid argument. First argument must be a positive number. Value: `%s`.",n))}return M0=t,M0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var P0,v_;function W5(){if(v_)return P0;v_=1;var r=D(),e=er(),t=nr(),n=tr(),a=ur(),i=rr(),o=ar(),s=or(),l=Oe().factory,g=Q(),d=ir(),m=Y(),b=YM();function p(){var q,v,f,u,c,h,R;if(arguments.length===0)q=l();else if(arguments.length===1){if(u=arguments[0],!n(u))throw new TypeError(m("invalid argument. Options argument must be an object. Value: `%s`.",u));if(i(u,"prng")){if(!a(u.prng))throw new TypeError(m("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",u.prng));q=l({prng:u.prng})}else q=l(u)}else{if(v=arguments[0],f=arguments[1],R=b(v,f),R)throw R;if(arguments.length>2){if(u=arguments[2],!n(u))throw new TypeError(m("invalid argument. Options argument must be an object. Value: `%s`.",u));if(i(u,"prng")){if(!a(u.prng))throw new TypeError(m("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",u.prng));q=l(v,f,{prng:u.prng})}else q=l(v,f,u)}else q=l(v,f)}return v===void 0?h=F:h=O,c=q.PRNG,r(h,"NAME","invgamma"),u&&u.prng?(r(h,"seed",null),r(h,"seedLength",null),t(h,"state",o(null),s),r(h,"stateLength",null),r(h,"byteLength",null),r(h,"toJSON",o(null))):(e(h,"seed",A),e(h,"seedLength",G),t(h,"state",N,E),e(h,"stateLength",M),e(h,"byteLength",C),r(h,"toJSON",P)),r(h,"PRNG",c),h;function A(){return c.seed}function G(){return c.seedLength}function M(){return c.stateLength}function C(){return c.byteLength}function N(){return c.state}function E(S){c.state=S}function P(){var S={};return S.type="PRNG",S.name=h.NAME,S.state=d(c.state),v===void 0?S.params=[]:S.params=[v,f],S}function O(){return 1/q()}function F(S,I){return g(S)||g(I)||S<=0||I<=0?NaN:1/q(S,I)}}return P0=p,P0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var I0,l_;function KM(){if(l_)return I0;l_=1;var r=W5(),e=r();return I0=e,I0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var F0,c_;function z5(){if(c_)return F0;c_=1;var r=D(),e=KM(),t=W5();return r(e,"factory",t),F0=e,F0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var j0,g_;function ZM(){if(g_)return j0;g_=1;var r=mr().isPrimitive,e=Y();function t(n,a){return r(n)?r(a)?null:new TypeError(e("invalid argument. Second argument must be a positive number. Value: `%s`.",a)):new TypeError(e("invalid argument. First argument must be a positive number. Value: `%s`.",n))}return j0=t,j0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var V0,p_;function QM(){if(p_)return V0;p_=1;var r=Gr();function e(t,n,a){var i=t();return r(1-r(1-i,1/a),1/n)}return V0=e,V0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var G0,m_;function k5(){if(m_)return G0;m_=1;var r=D(),e=er(),t=nr(),n=tr(),a=ur(),i=rr(),o=ar(),s=or(),l=lr().factory,g=Q(),d=ir(),m=Y(),b=ZM(),p=QM();function q(){var v,f,u,c,h,R;if(arguments.length===0)f=l();else if(arguments.length===1){if(v=arguments[0],!n(v))throw new TypeError(m("invalid argument. Options argument must be an object. Value: `%s`.",v));if(i(v,"prng")){if(!a(v.prng))throw new TypeError(m("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",v.prng));f=v.prng}else f=l(v)}else{if(h=arguments[0],R=arguments[1],c=b(h,R),c)throw c;if(arguments.length>2){if(v=arguments[2],!n(v))throw new TypeError(m("invalid argument. Options argument must be an object. Value: `%s`.",v));if(i(v,"prng")){if(!a(v.prng))throw new TypeError(m("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",v.prng));f=v.prng}else f=l(v)}else f=l()}return h===void 0?u=F:u=O,r(u,"NAME","kumaraswamy"),v&&v.prng?(r(u,"seed",null),r(u,"seedLength",null),t(u,"state",o(null),s),r(u,"stateLength",null),r(u,"byteLength",null),r(u,"toJSON",o(null)),r(u,"PRNG",f)):(e(u,"seed",A),e(u,"seedLength",G),t(u,"state",N,E),e(u,"stateLength",M),e(u,"byteLength",C),r(u,"toJSON",P),r(u,"PRNG",f),f=f.normalized),u;function A(){return f.seed}function G(){return f.seedLength}function M(){return f.stateLength}function C(){return f.byteLength}function N(){return f.state}function E(S){f.state=S}function P(){var S={};return S.type="PRNG",S.name=u.NAME,S.state=d(f.state),h===void 0?S.params=[]:S.params=[h,R],S}function O(){return p(f,h,R)}function F(S,I){return g(S)||g(I)||S<=0||I<=0?NaN:p(f,S,I)}}return G0=q,G0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var C0,h_;function xM(){if(h_)return C0;h_=1;var r=k5(),e=r();return C0=e,C0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var B0,d_;function D5(){if(d_)return B0;d_=1;var r=D(),e=xM(),t=k5();return r(e,"factory",t),B0=e,B0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var H0,y_;function rP(){if(y_)return H0;y_=1;var r=pr().isPrimitive,e=mr().isPrimitive,t=Y(),n=_r();function a(i,o){return!r(i)||n(i)?new TypeError(t("invalid argument. First argument must be a number and not NaN. Value: `%s`.",i)):e(o)?null:new TypeError(t("invalid argument. Second argument must be a positive number. Value: `%s`.",o))}return H0=a,H0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var U0,b_;function eP(){if(b_)return U0;b_=1;var r=Pp(),e=Yr(),t=dr();function n(a,i,o){var s=a()-.5;return i-o*r(s)*t(1-2*e(s))}return U0=n,U0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var W0,$_;function J5(){if($_)return W0;$_=1;var r=D(),e=er(),t=nr(),n=tr(),a=ur(),i=rr(),o=ar(),s=or(),l=lr().factory,g=Q(),d=ir(),m=Y(),b=rP(),p=eP();function q(){var v,f,u,c,h,R;if(arguments.length===0)f=l();else if(arguments.length===1){if(v=arguments[0],!n(v))throw new TypeError(m("invalid argument. Options argument must be an object. Value: `%s`.",v));if(i(v,"prng")){if(!a(v.prng))throw new TypeError(m("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",v.prng));f=v.prng}else f=l(v)}else{if(h=arguments[0],R=arguments[1],c=b(h,R),c)throw c;if(arguments.length>2){if(v=arguments[2],!n(v))throw new TypeError(m("invalid argument. Options argument must be an object. Value: `%s`.",v));if(i(v,"prng")){if(!a(v.prng))throw new TypeError(m("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",v.prng));f=v.prng}else f=l(v)}else f=l()}return h===void 0?u=F:u=O,r(u,"NAME","laplace"),v&&v.prng?(r(u,"seed",null),r(u,"seedLength",null),t(u,"state",o(null),s),r(u,"stateLength",null),r(u,"byteLength",null),r(u,"toJSON",o(null)),r(u,"PRNG",f)):(e(u,"seed",A),e(u,"seedLength",G),t(u,"state",N,E),e(u,"stateLength",M),e(u,"byteLength",C),r(u,"toJSON",P),r(u,"PRNG",f),f=f.normalized),u;function A(){return f.seed}function G(){return f.seedLength}function M(){return f.stateLength}function C(){return f.byteLength}function N(){return f.state}function E(S){f.state=S}function P(){var S={};return S.type="PRNG",S.name=u.NAME,S.state=d(f.state),h===void 0?S.params=[]:S.params=[h,R],S}function O(){return p(f,h,R)}function F(S,I){return g(S)||g(I)||I<=0?NaN:p(f,S,I)}}return W0=q,W0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var z0,q_;function tP(){if(q_)return z0;q_=1;var r=J5(),e=r();return z0=e,z0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var k0,w_;function X5(){if(w_)return k0;w_=1;var r=D(),e=tP(),t=J5();return r(e,"factory",t),k0=e,k0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var D0,__;function nP(){if(__)return D0;__=1;var r=pr().isPrimitive,e=mr().isPrimitive,t=Y(),n=_r();function a(i,o){return!r(i)||n(i)?new TypeError(t("invalid argument. First argument must be a number and not NaN. Value: `%s`.",i)):e(o)?null:new TypeError(t("invalid argument. Second argument must be a positive number. Value: `%s`.",o))}return D0=a,D0}/**
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
*/var Q0,S_;function fP(){if(S_)return Q0;S_=1;var r=Q(),e=Rr(),t=dr(),n=Nr(),a=Xr(),i=aP(),o=iP(),s=uP(),l=oP(),g=sP(),d=.08913147449493408,m=2.249481201171875,b=.807220458984375,p=.9399557113647461,q=.9836282730102539;function v(f){var u,c,h,R,A,G;return r(f)?NaN:f===1?n:f===-1?a:f===0?f:f>1||f<-1?NaN:(f<0?(u=-1,c=-f):(u=1,c=f),R=1-c,c<=.5?(A=c*(c+10),G=i(c),u*(A*d+A*G)):R>=.25?(A=e(-2*t(R)),R-=.25,G=o(R),u*(A/(m+G))):(R=e(-t(R)),R<3?(h=R-1.125,G=s(h),u*(b*R+G*R)):R<6?(h=R-3,G=l(h),u*(p*R+G*R)):(h=R-6,G=g(h),u*(q*R+G*R))))}return Q0=v,Q0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var e1,M_;function lP(){if(M_)return e1;M_=1;var r=ar(),e=R5().factory,t=Y5(),n=Q(),a=Rr();function i(o,s){var l,g;if(n(o)||n(s)||s<0)return r(NaN);return s===0&&e(o),l=o,g=s*a(2),d;function d(m){return n(m)||m<0||m>1?NaN:l+g*t(2*m-1)}}return e1=i,e1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var a1,F_;function K5(){if(F_)return a1;F_=1;var r=D(),e=er(),t=nr(),n=tr(),a=ur(),i=rr(),o=ar(),s=or(),l=lr().factory,g=Q(),d=ir(),m=Y(),b=nP(),p=gP();function q(){var v,f,u,c,h,R;if(arguments.length===0)f=l();else if(arguments.length===1){if(v=arguments[0],!n(v))throw new TypeError(m("invalid argument. Options argument must be an object. Value: `%s`.",v));if(i(v,"prng")){if(!a(v.prng))throw new TypeError(m("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",v.prng));f=v.prng}else f=l(v)}else{if(h=arguments[0],R=arguments[1],c=b(h,R),c)throw c;if(arguments.length>2){if(v=arguments[2],!n(v))throw new TypeError(m("invalid argument. Options argument must be an object. Value: `%s`.",v));if(i(v,"prng")){if(!a(v.prng))throw new TypeError(m("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",v.prng));f=v.prng}else f=l(v)}else f=l()}return h===void 0?u=F:u=O,r(u,"NAME","levy"),v&&v.prng?(r(u,"seed",null),r(u,"seedLength",null),t(u,"state",o(null),s),r(u,"stateLength",null),r(u,"byteLength",null),r(u,"toJSON",o(null)),r(u,"PRNG",f)):(e(u,"seed",A),e(u,"seedLength",G),t(u,"state",N,E),e(u,"stateLength",M),e(u,"byteLength",C),r(u,"toJSON",P),r(u,"PRNG",f),f=f.normalized),u;function A(){return f.seed}function G(){return f.seedLength}function M(){return f.stateLength}function C(){return f.byteLength}function N(){return f.state}function E(S){f.state=S}function P(){var S={};return S.type="PRNG",S.name=u.NAME,S.state=d(f.state),h===void 0?S.params=[]:S.params=[h,R],S}function O(){return p(f,h,R)}function F(S,I){return g(S)||g(I)||I<=0?NaN:p(f,S,I)}}return a1=q,a1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var i1,j_;function pP(){if(j_)return i1;j_=1;var r=K5(),e=r();return i1=e,i1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var u1,V_;function Z5(){if(V_)return u1;V_=1;var r=D(),e=pP(),t=K5();return r(e,"factory",t),u1=e,u1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var o1,G_;function mP(){if(G_)return o1;G_=1;var r=pr().isPrimitive,e=mr().isPrimitive,t=_r(),n=Y();function a(i,o){return!r(i)||t(i)?new TypeError(n("invalid argument. First argument must be a number and not NaN. Value: `%s`.",i)):e(o)?null:new TypeError(n("invalid argument. Second argument must be a positive number. Value: `%s`.",o))}return o1=a,o1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var f1,B_;function Q5(){if(B_)return f1;B_=1;var r=D(),e=er(),t=nr(),n=tr(),a=ur(),i=rr(),o=ar(),s=or(),l=lr().factory,g=Q(),d=ir(),m=Y(),b=mP(),p=hP();function q(){var v,f,u,c,h,R;if(arguments.length===0)f=l();else if(arguments.length===1){if(v=arguments[0],!n(v))throw new TypeError(m("invalid argument. Options argument must be an object. Value: `%s`.",v));if(i(v,"prng")){if(!a(v.prng))throw new TypeError(m("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",v.prng));f=v.prng}else f=l(v)}else{if(h=arguments[0],R=arguments[1],c=b(h,R),c)throw c;if(arguments.length>2){if(v=arguments[2],!n(v))throw new TypeError(m("invalid argument. Options argument must be an object. Value: `%s`.",v));if(i(v,"prng")){if(!a(v.prng))throw new TypeError(m("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",v.prng));f=v.prng}else f=l(v)}else f=l()}return h===void 0?u=F:u=O,r(u,"NAME","logistic"),v&&v.prng?(r(u,"seed",null),r(u,"seedLength",null),t(u,"state",o(null),s),r(u,"stateLength",null),r(u,"byteLength",null),r(u,"toJSON",o(null)),r(u,"PRNG",f)):(e(u,"seed",A),e(u,"seedLength",G),t(u,"state",N,E),e(u,"stateLength",M),e(u,"byteLength",C),r(u,"toJSON",P),r(u,"PRNG",f),f=f.normalized),u;function A(){return f.seed}function G(){return f.seedLength}function M(){return f.stateLength}function C(){return f.byteLength}function N(){return f.state}function E(S){f.state=S}function P(){var S={};return S.type="PRNG",S.name=u.NAME,S.state=d(f.state),h===void 0?S.params=[]:S.params=[h,R],S}function O(){return p(f,h,R)}function F(S,I){return g(S)||g(I)||I<=0?NaN:p(f,S,I)}}return f1=q,f1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var v1,H_;function dP(){if(H_)return v1;H_=1;var r=Q5(),e=r();return v1=e,v1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var l1,U_;function x5(){if(U_)return l1;U_=1;var r=D(),e=dP(),t=Q5();return r(e,"factory",t),l1=e,l1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var c1,W_;function yP(){if(W_)return c1;W_=1;var r=pr().isPrimitive,e=mr().isPrimitive,t=Y(),n=_r();function a(i,o){return!r(i)||n(i)?new TypeError(t("invalid argument. First argument must be a number and not NaN. Value: `%s`.",i)):e(o)?null:new TypeError(t("invalid argument. Second argument must be a positive number. Value: `%s`.",o))}return c1=a,c1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var g1,z_;function bP(){if(z_)return g1;z_=1;var r=Le();function e(t,n,a){return r(n+a*t())}return g1=e,g1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var p1,k_;function r8(){if(k_)return p1;k_=1;var r=D(),e=er(),t=nr(),n=tr(),a=ur(),i=rr(),o=ar(),s=or(),l=Qr().factory,g=Q(),d=ir(),m=Y(),b=yP(),p=bP();function q(){var v,f,u,c,h,R,A;if(arguments.length===0)f=l();else if(arguments.length===1){if(u=arguments[0],!n(u))throw new TypeError(m("invalid argument. Options argument must be an object. Value: `%s`.",u));if(i(u,"prng")){if(!a(u.prng))throw new TypeError(m("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",u.prng));f=l({prng:u.prng})}else f=l(u)}else{if(A=arguments[0],v=arguments[1],R=b(A,v),R)throw R;if(arguments.length>2){if(u=arguments[2],!n(u))throw new TypeError(m("invalid argument. Options argument must be an object. Value: `%s`.",u));if(i(u,"prng")){if(!a(u.prng))throw new TypeError(m("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",u.prng));f=l({prng:u.prng})}else f=l(u)}else f=l()}return A===void 0?h=S:h=F,c=f.PRNG,r(h,"NAME","lognormal"),u&&u.prng?(r(h,"seed",null),r(h,"seedLength",null),t(h,"state",o(null),s),r(h,"stateLength",null),r(h,"byteLength",null),r(h,"toJSON",o(null))):(e(h,"seed",G),e(h,"seedLength",M),t(h,"state",E,P),e(h,"stateLength",C),e(h,"byteLength",N),r(h,"toJSON",O)),r(h,"PRNG",c),h;function G(){return c.seed}function M(){return c.seedLength}function C(){return c.stateLength}function N(){return c.byteLength}function E(){return c.state}function P(I){c.state=I}function O(){var I={};return I.type="PRNG",I.name=h.NAME,I.state=d(c.state),A===void 0?I.params=[]:I.params=[A,v],I}function F(){return p(f,A,v)}function S(I,T){return g(I)||g(T)||T<=0?NaN:p(f,I,T)}}return p1=q,p1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var m1,D_;function $P(){if(D_)return m1;D_=1;var r=r8(),e=r();return m1=e,m1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var b1,K_;function a8(){if(K_)return b1;K_=1;var r=D(),e=er(),t=nr(),n=rr(),a=tr(),i=Pr().isPrimitive,o=le(),s=Fe().isPrimitive,l=gp(),g=Y(),d=t8(),m=qe(),b=ce(),p=ir(),q=n8(),v=d-1|0,f=d-1|0,u=16807,c=1,h=2,R=2,A=4,G=5;function M(N,E){var P;return E?P="option":P="argument",N.length<G+1?new RangeError(g("invalid %s. State array has insufficient length.",P)):N[0]!==c?new RangeError(g("invalid %s. State array has an incompatible schema version. Expected: `%s`. Actual: `%s`.",P,c,N[0])):N[1]!==h?new RangeError(g("invalid %s. State array has an incompatible number of sections. Expected: `%s`. Actual: `%s`.",P,h,N[1])):N[R]!==1?new RangeError(g("invalid %s. State array has an incompatible state length. Expected: `%u`. Actual: `%u`.",P,1,N[R])):N[A]!==N.length-G?new RangeError(g("invalid %s. State array length is incompatible with seed section length. Expected: `%u`. Actual: `%u`.",P,N.length-G,N[A])):null}function C(N){var E,P,O,F,S,I;if(O={},arguments.length){if(!a(N))throw new TypeError(g("invalid argument. Options argument must be an object. Value: `%s`.",N));if(n(N,"copy")&&(O.copy=N.copy,!i(N.copy)))throw new TypeError(g("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",N.copy));if(n(N,"state")){if(P=N.state,O.state=!0,!l(P))throw new TypeError(g("invalid option. `%s` option must be an Int32Array. Option: `%s`.","state",P));if(I=M(P,!0),I)throw I;O.copy===!1?E=P:(E=new m(P.length),b(P.length,P,1,E,1)),P=new m(E.buffer,E.byteOffset+(R+1)*E.BYTES_PER_ELEMENT,1),F=new m(E.buffer,E.byteOffset+(A+1)*E.BYTES_PER_ELEMENT,P[A])}if(F===void 0)if(n(N,"seed"))if(F=N.seed,O.seed=!0,s(F)){if(F>f)throw new RangeError(g("invalid option. `%s` option must be a positive integer less than the maximum signed 32-bit integer. Option: `%u`.","seed",F));F|=0}else if(o(F)&&F.length>0)S=F.length,E=new m(G+S),E[0]=c,E[1]=h,E[R]=1,E[A]=S,b.ndarray(S,F,1,0,E,1,A+1),P=new m(E.buffer,E.byteOffset+(R+1)*E.BYTES_PER_ELEMENT,1),F=new m(E.buffer,E.byteOffset+(A+1)*E.BYTES_PER_ELEMENT,S),P[0]=F[0];else throw new TypeError(g("invalid option. `%s` option must be either a positive integer less than the maximum signed 32-bit integer or an array-like object containing integer values less than the maximum signed 32-bit integer. Option: `%s`.","seed",F));else F=q()|0}else F=q()|0;return P===void 0&&(E=new m(G+1),E[0]=c,E[1]=h,E[R]=1,E[A]=1,E[A+1]=F,P=new m(E.buffer,E.byteOffset+(R+1)*E.BYTES_PER_ELEMENT,1),F=new m(E.buffer,E.byteOffset+(A+1)*E.BYTES_PER_ELEMENT,1),P[0]=F[0]),r(w,"NAME","minstd"),e(w,"seed",T),e(w,"seedLength",k),t(w,"state",j,$),e(w,"stateLength",X),e(w,"byteLength",z),r(w,"toJSON",y),r(w,"MIN",1),r(w,"MAX",d-1),r(w,"normalized",L),r(L,"NAME",w.NAME),e(L,"seed",T),e(L,"seedLength",k),t(L,"state",j,$),e(L,"stateLength",X),e(L,"byteLength",z),r(L,"toJSON",y),r(L,"MIN",(w.MIN-1)/v),r(L,"MAX",(w.MAX-1)/v),w;function T(){var _=E[A];return b(_,F,1,new m(_),1)}function k(){return E[A]}function X(){return E.length}function z(){return E.byteLength}function j(){var _=E.length;return b(_,E,1,new m(_),1)}function $(_){var B;if(!l(_))throw new TypeError(g("invalid argument. Must provide an Int32Array. Value: `%s`.",_));if(B=M(_,!1),B)throw B;O.copy===!1?O.state&&_.length===E.length?b(_.length,_,1,E,1):(E=_,O.state=!0):(_.length!==E.length&&(E=new m(_.length)),b(_.length,_,1,E,1)),P=new m(E.buffer,E.byteOffset+(R+1)*E.BYTES_PER_ELEMENT,1),F=new m(E.buffer,E.byteOffset+(A+1)*E.BYTES_PER_ELEMENT,E[A])}function y(){var _={};return _.type="PRNG",_.name=w.NAME,_.state=p(E),_.params=[],_}function w(){var _=P[0]|0;return _=u*_%d|0,P[0]=_,_|0}function L(){return(w()-1)/v}}return b1=C,b1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var q1,Q_;function pt(){if(Q_)return q1;Q_=1;var r=D(),e=qP(),t=a8();return r(e,"factory",t),q1=e,q1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var E1,t6;function o8(){if(t6)return E1;t6=1;var r=D(),e=er(),t=nr(),n=rr(),a=tr(),i=Pr().isPrimitive,o=le(),s=Fe().isPrimitive,l=gp(),g=ce(),d=wr(),m=qe(),b=i8(),p=ir(),q=Y(),v=wP(),f=u8(),u=b-1|0,c=b-1|0,h=16807,R=32,A=1,G=3,M=2,C=R+3,N=R+6,E=R+7,P=C+1,O=C+2;function F(I,T){var k;return T?k="option":k="argument",I.length<E+1?new RangeError(q("invalid %s. State array has insufficient length.",k)):I[0]!==A?new RangeError(q("invalid %s. State array has an incompatible schema version. Expected: `%s`. Actual: `%s`.",k,A,I[0])):I[1]!==G?new RangeError(q("invalid %s. State array has an incompatible number of sections. Expected: `%s`. Actual: `%s`.",k,G,I[1])):I[M]!==R?new RangeError(q("invalid %s. State array has an incompatible table length. Expected: `%s`. Actual: `%s`.",k,R,I[M])):I[C]!==2?new RangeError(q("invalid %s. State array has an incompatible state length. Expected: `%u`. Actual: `%u`.",k,2,I[C])):I[N]!==I.length-E?new RangeError(q("invalid %s. State array length is incompatible with seed section length. Expected: `%u`. Actual: `%u`.",k,I.length-E,I[N])):null}function S(I){var T,k,X,z,j,$;if(X={},arguments.length){if(!a(I))throw new TypeError(q("invalid argument. Options argument must be an object. Value: `%s`.",I));if(n(I,"copy")&&(X.copy=I.copy,!i(I.copy)))throw new TypeError(q("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",I.copy));if(n(I,"state")){if(k=I.state,X.state=!0,!l(k))throw new TypeError(q("invalid option. `%s` option must be an Int32Array. Option: `%s`.","state",k));if($=F(k,!0),$)throw $;X.copy===!1?T=k:(T=new m(k.length),g(k.length,k,1,T,1)),k=new m(T.buffer,T.byteOffset+(M+1)*T.BYTES_PER_ELEMENT,R),z=new m(T.buffer,T.byteOffset+(N+1)*T.BYTES_PER_ELEMENT,k[N])}if(z===void 0)if(n(I,"seed"))if(z=I.seed,X.seed=!0,s(z)){if(z>c)throw new RangeError(q("invalid option. `%s` option must be a positive integer less than the maximum signed 32-bit integer. Option: `%u`.","seed",z));z|=0}else if(o(z)&&z.length>0)j=z.length,T=new m(E+j),T[0]=A,T[1]=G,T[M]=R,T[C]=2,T[O]=z[0],T[N]=j,g.ndarray(j,z,1,0,T,1,N+1),k=new m(T.buffer,T.byteOffset+(M+1)*T.BYTES_PER_ELEMENT,R),z=new m(T.buffer,T.byteOffset+(N+1)*T.BYTES_PER_ELEMENT,j),k=v(U,k,R),T[P]=k[0];else throw new TypeError(q("invalid option. `%s` option must be either a positive integer less than the maximum signed 32-bit integer or an array-like object containing integer values less than the maximum signed 32-bit integer. Option: `%s`.","seed",z));else z=f()|0}else z=f()|0;return k===void 0&&(T=new m(E+1),T[0]=A,T[1]=G,T[M]=R,T[C]=2,T[O]=z,T[N]=1,T[N+1]=z,k=new m(T.buffer,T.byteOffset+(M+1)*T.BYTES_PER_ELEMENT,R),z=new m(T.buffer,T.byteOffset+(N+1)*T.BYTES_PER_ELEMENT,1),k=v(U,k,R),T[P]=k[0]),r(K,"NAME","minstd-shuffle"),e(K,"seed",y),e(K,"seedLength",w),t(K,"state",B,H),e(K,"stateLength",L),e(K,"byteLength",_),r(K,"toJSON",Z),r(K,"MIN",1),r(K,"MAX",b-1),r(K,"normalized",W),r(W,"NAME",K.NAME),e(W,"seed",y),e(W,"seedLength",w),t(W,"state",B,H),e(W,"stateLength",L),e(W,"byteLength",_),r(W,"toJSON",Z),r(W,"MIN",(K.MIN-1)/u),r(W,"MAX",(K.MAX-1)/u),K;function y(){var V=T[N];return g(V,z,1,new m(V),1)}function w(){return T[N]}function L(){return T.length}function _(){return T.byteLength}function B(){var V=T.length;return g(V,T,1,new m(V),1)}function H(V){var J;if(!l(V))throw new TypeError(q("invalid argument. Must provide an Int32Array. Value: `%s`.",V));if(J=F(V,!1),J)throw J;X.copy===!1?X.state&&V.length===T.length?g(V.length,V,1,T,1):(T=V,X.state=!0):(V.length!==T.length&&(T=new m(V.length)),g(V.length,V,1,T,1)),k=new m(T.buffer,T.byteOffset+(M+1)*T.BYTES_PER_ELEMENT,R),z=new m(T.buffer,T.byteOffset+(N+1)*T.BYTES_PER_ELEMENT,T[N])}function Z(){var V={};return V.type="PRNG",V.name=K.NAME,V.state=p(T),V.params=[],V}function U(){var V=T[O]|0;return V=h*V%b|0,T[O]=V,V|0}function K(){var V,J;return V=T[P],J=d(R*(V/b)),V=k[J],T[P]=V,k[J]=U(),V}function W(){return(K()-1)/u}}return E1=S,E1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var O1,a6;function mt(){if(a6)return O1;a6=1;var r=D(),e=_P(),t=o8();return r(e,"factory",t),O1=e,O1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var V1,p6;function PP(){if(p6)return V1;p6=1;function r(e){return e===0?-.010314224129834144:-.010314224129834144+e*(.0022596478090061247+e*(-.0005385953053567405+e*.0003355291926355191))}return V1=r,V1}/**
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
*/var G1,m6;function IP(){if(m6)return G1;m6=1;function r(e){return e===0?.6328270640250934:.6328270640250934+e*(1.4549225013723477+e*(.9777175279633727+e*(.22896372806469245+e*.013381091853678766)))}return G1=r,G1}/**
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
*/var H1,y6;function VP(){if(y6)return H1;y6=1;var r=Q(),e=Ve(),t=Yr(),n=dr(),a=r5(),i=Fp(),o=ge(),s=Nr(),l=OP(),g=NP(),d=SP(),m=TP(),b=AP(),p=MP(),q=PP(),v=IP(),f=FP(),u=jP(),c=.07721566490153287,h=.3224670334241136,R=1,A=-.07721566490153287,G=.48383612272381005,M=-.1475877229945939,C=.06462494023913339,N=-.07721566490153287,E=1,P=.4189385332046727,O=1.4616321449683622,F=4503599627370496,S=0x400000000000000,I=8470329472543003e-37,T=1.4616321449683622,k=-.12148629053584961,X=-3638676997039505e-33;function z(j){var $,y,w,L,_,B,H,Z,U,K,W,V,J;if(r(j)||e(j))return j;if(j===0)return s;if(j<0?($=!0,j=-j):$=!1,j<I)return-n(j);if($){if(j>=F||(U=i(j),U===0))return s;y=n(o/t(U*j))}if(j===1||j===2)return 0;if(j<2)switch(j<=.9?(J=-n(j),j>=O-1+.27?(W=1-j,w=0):j>=O-1-.27?(W=j-(T-1),w=1):(W=j,w=2)):(J=0,j>=O+.27?(W=2-j,w=0):j>=O-.27?(W=j-T,w=1):(W=j-1,w=2)),w){case 0:V=W*W,B=c+V*l(V),_=V*(h+V*g(V)),H=W*B+_,J+=H-.5*W;break;case 1:V=W*W,K=V*W,B=G+K*b(K),_=M+K*p(K),L=C+K*q(K),H=V*B-(X-K*(_+W*L)),J+=k+H;break;case 2:B=W*(N+W*v(W)),_=E+W*f(W),J+=-.5*W+B/_;break}else if(j<8)switch(w=a(j),W=j-w,H=W*(A+W*m(W)),Z=R+W*d(W),J=.5*W+H/Z,V=1,w){case 7:V*=W+6;case 6:V*=W+5;case 5:V*=W+4;case 4:V*=W+3;case 3:V*=W+2,J+=n(V)}else j<S?(U=n(j),V=1/j,W=V*V,K=P+V*u(W),J=(j-.5)*(U-1)+K):J=j*(n(j)-1);return $&&(J=y-J),J}return H1=z,H1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var U1,b6;function GP(){if(b6)return U1;b6=1;var r=VP();return U1=r,U1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var W1,$6;function CP(){if($6)return W1;$6=1;var r=LP(),e=GP();function t(n){return r(n)?NaN:e(n+1)}return W1=t,W1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var z1,q6;function BP(){if(q6)return z1;q6=1;var r=CP();return z1=r,z1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var k1,w6;function HP(){if(w6)return k1;w6=1;var r=.9189385332046728;return k1=r,k1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var D1,_6;function UP(){if(_6)return D1;_6=1;var r=BP(),e=wr(),t=Pp(),n=Rr(),a=Yr(),i=dr(),o=HP(),s=1/12,l=1/360;function g(d,m){var b,p,q,v,f,u,c,h,R,A;for(b=n(m),c=2.53*b+.931,u=.02483*c-.059,p=1.1328/(c-3.4)+1.1239,f=-3.6224/(c-2)+.9277,q=.86*f;;){if(A=d(),A<=q)return R=A/f-.43,R*=2*u/(.5-a(R))+c,R+=m+.445,e(R);if(A>=f?R=d()-.5:(R=A/f-.93,R=t(R)*.5-R,A=f*d()),v=.5-a(R),(v>=.013||v>=A)&&(h=e((2*u/v+c)*R+m+.445),A*=p/(u/(v*v)+c),R=(h+.5)*i(m/h),R+=-m-o+h,R-=(s-l/(h*h))/h,h>=10&&R>=i(A*b)||(R=h*i(m)-m-r(h),h>=0&&h<=9&&R>=i(A))))return h}}return D1=g,D1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var J1,R6;function WP(){if(R6)return J1;R6=1;var r=RP(),e=UP();function t(n,a){return a<30?r(n,a):e(n,a)}return J1=t,J1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var X1,E6;function s8(){if(E6)return X1;E6=1;var r=D(),e=er(),t=nr(),n=mr().isPrimitive,a=tr(),i=ur(),o=rr(),s=ar(),l=or(),g=lr().factory,d=Q(),m=ir(),b=Y(),p=WP();function q(){var v,f,u,c;if(arguments.length===0)u=g();else if(arguments.length===1&&a(arguments[0]))if(f=arguments[0],o(f,"prng")){if(!i(f.prng))throw new TypeError(b("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",f.prng));u=f.prng}else u=g(f);else{if(v=arguments[0],!n(v))throw new TypeError(b("invalid argument. First argument must be a positive number. Value: `%s`.",v));if(arguments.length>1){if(f=arguments[1],!a(f))throw new TypeError(b("invalid argument. Options argument must be an object. Value: `%s`.",f));if(o(f,"prng")){if(!i(f.prng))throw new TypeError(b("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",f.prng));u=f.prng}else u=g(f)}else u=g()}return v===void 0?c=P:c=E,r(c,"NAME","poisson"),f&&f.prng?(r(c,"seed",null),r(c,"seedLength",null),t(c,"state",s(null),l),r(c,"stateLength",null),r(c,"byteLength",null),r(c,"toJSON",s(null)),r(c,"PRNG",u)):(e(c,"seed",h),e(c,"seedLength",R),t(c,"state",M,C),e(c,"stateLength",A),e(c,"byteLength",G),r(c,"toJSON",N),r(c,"PRNG",u),u=u.normalized),c;function h(){return u.seed}function R(){return u.seedLength}function A(){return u.stateLength}function G(){return u.byteLength}function M(){return u.state}function C(O){u.state=O}function N(){var O={};return O.type="PRNG",O.name=c.NAME,O.state=m(u.state),v===void 0?O.params=[]:O.params=[v],O}function E(){return p(u,v)}function P(O){return d(O)||O<=0?NaN:p(u,O)}}return X1=q,X1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Y1,L6;function zP(){if(L6)return Y1;L6=1;var r=s8(),e=r();return Y1=e,Y1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var K1,O6;function jp(){if(O6)return K1;O6=1;var r=D(),e=zP(),t=s8();return r(e,"factory",t),K1=e,K1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Z1,N6;function kP(){if(N6)return Z1;N6=1;var r=mr().isPrimitive,e=pr().isPrimitive,t=Y(),n=_r();function a(i,o){return r(i)?!e(o)||n(o)?new TypeError(t("invalid argument. Second argument must be a number and not NaN. Value: `%s`.",o)):o<=0||o>=1?new RangeError(t("invalid argument. Second argument must be on the interval: (0, 1). Value: `%f`.",o)):null:new TypeError(t("invalid argument. First argument must be a positive number. Value: `%s`.",i))}return Z1=a,Z1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Q1,S6;function f8(){if(S6)return Q1;S6=1;var r=D(),e=er(),t=nr(),n=rr(),a=tr(),i=ie(),o=Pr().isPrimitive,s=ur(),l=ar(),g=or(),d=Q(),m=jp().factory,b=Oe().factory,p=ce(),q=Sr(),v=ct(),f=ir(),u=Y(),c=kP();function h(){var R,A,G,M,C,N,E,P,O,F;if(E=!0,arguments.length===0)M={copy:!1},G=m(M);else if(arguments.length===1){if(M=arguments[0],!a(M))throw new TypeError(u("invalid argument. Options argument must be an object. Value: `%s`.",M));if(n(M,"copy")&&!o(M.copy))throw new TypeError(u("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",M.copy));if(n(M,"prng")){if(!s(M.prng))throw new TypeError(u("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",M.prng));G=m({prng:M.prng})}else{if(n(M,"state")&&!i(M.state))throw new TypeError(u("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",M.state));M=v({},M),M.copy===!1?E=!1:M.state&&(M.state=p(M.state.length,M.state,1,new q(M.state.length),1)),M.copy=!1,G=m(M)}}else{if(F=arguments[0],O=arguments[1],P=c(F,O),P)throw P;if(arguments.length>2){if(M=arguments[2],!a(M))throw new TypeError(u("invalid argument. Options argument must be an object. Value: `%s`.",M));if(n(M,"copy")&&!o(M.copy))throw new TypeError(u("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",M.copy));if(n(M,"prng")){if(!s(M.prng))throw new TypeError(u("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",M.prng));G=m({prng:M.prng})}else{if(n(M,"state")&&!i(M.state))throw new TypeError(u("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",M.state));M=v({},M),M.copy===!1?E=!1:M.state&&(M.state=p(M.state.length,M.state,1,new q(M.state.length),1)),M.copy=!1,G=m(M)}}else M={copy:!1},G=m(M)}return M&&M.prng?F===void 0?R=b({prng:M.prng}):R=b(F,O/(1-O),{prng:M.prng}):(M.state?A=M.state:(A=G.state,G.state=A),F===void 0?R=b({state:A,copy:!1}):R=b(F,O/(1-O),{state:A,copy:!1})),F===void 0?C=y:C=$,N=G.PRNG,r(C,"NAME","negative-binomial"),M&&M.prng?(r(C,"seed",null),r(C,"seedLength",null),t(C,"state",l(null),g),r(C,"stateLength",null),r(C,"byteLength",null),r(C,"toJSON",l(null))):(e(C,"seed",S),e(C,"seedLength",I),t(C,"state",X,z),e(C,"stateLength",T),e(C,"byteLength",k),r(C,"toJSON",j)),r(C,"PRNG",N),C;function S(){return N.seed}function I(){return N.seedLength}function T(){return N.stateLength}function k(){return N.byteLength}function X(){return N.state}function z(w){if(!i(w))throw new TypeError(u("invalid argument. Must provide a Uint32Array. Value: `%s`.",w));E&&(w=p(w.length,w,1,new q(w.length),1)),N.state=w}function j(){var w={};return w.type="PRNG",w.name=C.NAME,w.state=f(N.state),F===void 0?w.params=[]:w.params=[F,O],w}function $(){return G(R())}function y(w,L){return d(w)||d(L)||L<=0||L>=1?NaN:G(R(w,L/(1-L)))}}return Q1=h,Q1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var eg,M6;function JP(){if(M6)return eg;M6=1;var r=pr().isPrimitive,e=mr().isPrimitive,t=Y(),n=_r();function a(i,o){return!r(i)||n(i)?new TypeError(t("invalid argument. First argument must be a number and not NaN. Value: `%s`.",i)):e(o)?null:new TypeError(t("invalid argument. Second argument must be a positive number. Value: `%s`.",o))}return eg=a,eg}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var ng,I6;function l8(){if(I6)return ng;I6=1;var r=D(),e=er(),t=nr(),n=tr(),a=ur(),i=rr(),o=ar(),s=or(),l=Qr().factory,g=Q(),d=ir(),m=Y(),b=JP(),p=XP();function q(){var v,f,u,c,h,R,A;if(arguments.length===0)f=l();else if(arguments.length===1){if(u=arguments[0],!n(u))throw new TypeError(m("invalid argument. Options argument must be an object. Value: `%s`.",u));if(i(u,"prng")){if(!a(u.prng))throw new TypeError(m("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",u.prng));f=l({prng:u.prng})}else f=l(u)}else{if(A=arguments[0],v=arguments[1],R=b(A,v),R)throw R;if(arguments.length>2){if(u=arguments[2],!n(u))throw new TypeError(m("invalid argument. Options argument must be an object. Value: `%s`.",u));if(i(u,"prng")){if(!a(u.prng))throw new TypeError(m("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",u.prng));f=l({prng:u.prng})}else f=l(u)}else f=l()}return A===void 0?h=S:h=F,c=f.PRNG,r(h,"NAME","normal"),u&&u.prng?(r(h,"seed",null),r(h,"seedLength",null),t(h,"state",o(null),s),r(h,"stateLength",null),r(h,"byteLength",null),r(h,"toJSON",o(null))):(e(h,"seed",G),e(h,"seedLength",M),t(h,"state",E,P),e(h,"stateLength",C),e(h,"byteLength",N),r(h,"toJSON",O)),r(h,"PRNG",c),h;function G(){return c.seed}function M(){return c.seedLength}function C(){return c.stateLength}function N(){return c.byteLength}function E(){return c.state}function P(I){c.state=I}function O(){var I={};return I.type="PRNG",I.name=h.NAME,I.state=d(c.state),A===void 0?I.params=[]:I.params=[A,v],I}function F(){return p(f,A,v)}function S(I,T){return g(I)||g(T)||T<=0?NaN:p(f,I,T)}}return ng=q,ng}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var ug,V6;function KP(){if(V6)return ug;V6=1;var r=mr().isPrimitive,e=Y();function t(n,a){return r(n)?r(a)?null:new TypeError(e("invalid argument. Second argument must be a positive number. Value: `%s`.",a)):new TypeError(e("invalid argument. First argument must be a positive number. Value: `%s`.",n))}return ug=t,ug}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var sg,C6;function g8(){if(C6)return sg;C6=1;var r=D(),e=er(),t=nr(),n=tr(),a=ur(),i=rr(),o=ar(),s=or(),l=lr().factory,g=Q(),d=ir(),m=Y(),b=KP(),p=ZP();function q(){var v,f,u,c,h,R;if(arguments.length===0)c=l();else if(arguments.length===1){if(u=arguments[0],!n(u))throw new TypeError(m("invalid argument. Options argument must be an object. Value: `%s`.",u));if(i(u,"prng")){if(!a(u.prng))throw new TypeError(m("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",u.prng));c=u.prng}else c=l(u)}else{if(v=arguments[0],f=arguments[1],R=b(v,f),R)throw R;if(arguments.length>2){if(u=arguments[2],!n(u))throw new TypeError(m("invalid argument. Options argument must be an object. Value: `%s`.",u));if(i(u,"prng")){if(!a(u.prng))throw new TypeError(m("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",u.prng));c=u.prng}else c=l(u)}else c=l()}return v===void 0?h=F:h=O,r(h,"NAME","pareto-type1"),u&&u.prng?(r(h,"seed",null),r(h,"seedLength",null),t(h,"state",o(null),s),r(h,"stateLength",null),r(h,"byteLength",null),r(h,"toJSON",o(null)),r(h,"PRNG",c)):(e(h,"seed",A),e(h,"seedLength",G),t(h,"state",N,E),e(h,"stateLength",M),e(h,"byteLength",C),r(h,"toJSON",P),r(h,"PRNG",c),c=c.normalized),h;function A(){return c.seed}function G(){return c.seedLength}function M(){return c.stateLength}function C(){return c.byteLength}function N(){return c.state}function E(S){c.state=S}function P(){var S={};return S.type="PRNG",S.name=h.NAME,S.state=d(c.state),v===void 0?S.params=[]:S.params=[v,f],S}function O(){return p(c,v,f)}function F(S,I){return g(S)||g(I)||S<=0||I<=0?NaN:p(c,S,I)}}return sg=q,sg}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var vg,H6;function p8(){if(H6)return vg;H6=1;var r=D(),e=QP(),t=g8();return r(e,"factory",t),vg=e,vg}const xP="mt19937",rI=!0,eI={name:xP,copy:rI};/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var lg,U6;function tI(){if(U6)return lg;U6=1;var r=pt(),e=mt(),t=lr(),n={};return n.minstd=r,n["minstd-shuffle"]=e,n.mt19937=t,lg=n,lg}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var cg,W6;function m8(){if(W6)return cg;W6=1;var r=D(),e=er(),t=nr(),n=tr(),a=Pr().isPrimitive,i=rr(),o=ir(),s=Y(),l=eI,g=tI();function d(m){var b,p,q;if(b={name:l.name,copy:l.copy},arguments.length){if(!n(m))throw new TypeError(s("invalid argument. Must provide an object. Value: `%s`.",m));if(i(m,"name")&&(b.name=m.name),i(m,"state")){if(b.state=m.state,b.state===void 0)throw new TypeError(s("invalid option. `%s` option cannot be undefined. Option: `%s`.","state",b.state))}else if(i(m,"seed")&&(b.seed=m.seed,b.seed===void 0))throw new TypeError(s("invalid option. `%s` option cannot be undefined. Option: `%s`.","seed",b.seed));if(i(m,"copy")&&(b.copy=m.copy,!a(b.copy)))throw new TypeError(s("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",b.copy))}if(q=g[b.name],q===void 0)throw new Error(s("invalid option. Unrecognized/unsupported PRNG. Option: `%s`.",b.name));return b.state===void 0?b.seed===void 0?p=q.factory():p=q.factory({seed:b.seed}):p=q.factory({state:b.state,copy:b.copy}),r(G,"NAME","randi"),e(G,"seed",v),e(G,"seedLength",f),t(G,"state",h,R),e(G,"stateLength",u),e(G,"byteLength",c),r(G,"toJSON",A),r(G,"PRNG",p),r(G,"MIN",p.MIN),r(G,"MAX",p.MAX),G;function v(){return p.seed}function f(){return p.seedLength}function u(){return p.stateLength}function c(){return p.byteLength}function h(){return p.state}function R(M){p.state=M}function A(){var M={};return M.type="PRNG",M.name=G.NAME+"-"+p.NAME,M.state=o(p.state),M.params=[],M}function G(){return p()}}return cg=d,cg}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gg,z6;function nI(){if(z6)return gg;z6=1;var r=m8(),e=r();return gg=e,gg}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pg,k6;function h8(){if(k6)return pg;k6=1;var r=D(),e=nI(),t=m8();return r(e,"factory",t),pg=e,pg}const aI="improved-ziggurat",iI=!0,uI={name:aI,copy:iI};/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var mg,D6;function oI(){if(D6)return mg;D6=1;var r=Ip(),e=Qr(),t={};return t["box-muller"]=r,t["improved-ziggurat"]=e,mg=t,mg}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var hg,J6;function d8(){if(J6)return hg;J6=1;var r=D(),e=er(),t=nr(),n=tr(),a=Pr().isPrimitive,i=rr(),o=ar(),s=Y(),l=or(),g=ir(),d=uI,m=oI();function b(p){var q,v,f;if(q={name:d.name,copy:d.copy},arguments.length){if(!n(p))throw new TypeError(s("invalid argument. Must provide an object. Value: `%s`.",p));if(i(p,"name")&&(q.name=p.name),i(p,"prng")){if(q.prng=p.prng,q.prng===void 0)throw new TypeError(s("invalid option. `%s` option cannot be undefined. Option: `%s`.","prng",q.prng))}else if(i(p,"state")){if(q.state=p.state,q.state===void 0)throw new TypeError(s("invalid option. `%s` option cannot be undefined. Option: `%s`.","state",q.state))}else if(i(p,"seed")&&(q.seed=p.seed,q.seed===void 0))throw new TypeError(s("invalid option. `%s` option cannot be undefined. Option: `%s`.","seed",q.seed));if(i(p,"copy")&&(q.copy=p.copy,!a(q.copy)))throw new TypeError(s("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",q.copy))}if(f=m[q.name],f===void 0)throw new Error(s("invalid option. Unrecognized/unsupported PRNG. Option: `%s`.",q.name));return q.prng===void 0?q.state===void 0?q.seed===void 0?v=f.factory():v=f.factory({seed:q.seed}):v=f.factory({state:q.state,copy:q.copy}):v=f.factory({prng:q.prng}),r(C,"NAME","randn"),q.prng?(r(C,"seed",null),r(C,"seedLength",null),t(C,"state",o(null),l),r(C,"stateLength",null),r(C,"byteLength",null),r(C,"toJSON",o(null))):(e(C,"seed",u),e(C,"seedLength",c),t(C,"state",A,G),e(C,"stateLength",h),e(C,"byteLength",R),r(C,"toJSON",M)),r(C,"PRNG",v.PRNG),C;function u(){return v.seed}function c(){return v.seedLength}function h(){return v.stateLength}function R(){return v.byteLength}function A(){return v.state}function G(N){v.state=N}function M(){var N={};return N.type="PRNG",N.name=C.NAME+"-"+v.NAME,N.state=g(v.state),N.params=[],N}function C(){return v()}}return hg=b,hg}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var bg,K6;function cI(){if(K6)return bg;K6=1;var r=pt(),e=mt(),t=lr(),n={};return n.minstd=r,n["minstd-shuffle"]=e,n.mt19937=t,bg=n,bg}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $g,Z6;function b8(){if(Z6)return $g;Z6=1;var r=D(),e=er(),t=nr(),n=tr(),a=Pr().isPrimitive,i=rr(),o=ir(),s=Y(),l=lI,g=cI();function d(m){var b,p,q;if(b={name:l.name,copy:l.copy},arguments.length){if(!n(m))throw new TypeError(s("invalid argument. Must provide an object. Value: `%s`.",m));if(i(m,"name")&&(b.name=m.name),i(m,"state")){if(b.state=m.state,b.state===void 0)throw new TypeError(s("invalid option. `%s` option cannot be undefined. Option: `%s`.","state",b.state))}else if(i(m,"seed")&&(b.seed=m.seed,b.seed===void 0))throw new TypeError(s("invalid option. `%s` option cannot be undefined. Option: `%s`.","seed",b.seed));if(i(m,"copy")&&(b.copy=m.copy,!a(b.copy)))throw new TypeError(s("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",b.copy))}if(q=g[b.name],q===void 0)throw new Error(s("invalid option. Unrecognized/unsupported PRNG. Option: `%s`.",b.name));return b.state===void 0?b.seed===void 0?p=q.factory():p=q.factory({seed:b.seed}):p=q.factory({state:b.state,copy:b.copy}),r(G,"NAME","randu"),e(G,"seed",v),e(G,"seedLength",f),t(G,"state",h,R),e(G,"stateLength",u),e(G,"byteLength",c),r(G,"toJSON",A),r(G,"PRNG",p),r(G,"MIN",p.normalized.MIN),r(G,"MAX",p.normalized.MAX),G;function v(){return p.seed}function f(){return p.seedLength}function u(){return p.stateLength}function c(){return p.byteLength}function h(){return p.state}function R(M){p.state=M}function A(){var M={};return M.type="PRNG",M.name=G.NAME+"-"+p.NAME,M.state=o(p.state),M.params=[],M}function G(){return p.normalized()}}return $g=d,$g}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var _g,rR;function pI(){if(rR)return _g;rR=1;var r=Rr(),e=dr();function t(n,a){return a*r(-2*e(n()))}return _g=t,_g}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Rg,eR;function q8(){if(eR)return Rg;eR=1;var r=D(),e=er(),t=nr(),n=mr().isPrimitive,a=tr(),i=ur(),o=rr(),s=ar(),l=or(),g=lr().factory,d=Q(),m=ir(),b=Y(),p=pI();function q(){var v,f,u,c;if(arguments.length===0)u=g();else if(arguments.length===1&&a(arguments[0]))if(f=arguments[0],o(f,"prng")){if(!i(f.prng))throw new TypeError(b("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",f.prng));u=f.prng}else u=g(f);else{if(v=arguments[0],!n(v))throw new TypeError(b("invalid argument. First argument must be a positive number. Value: `%s`.",v));if(arguments.length>1){if(f=arguments[1],!a(f))throw new TypeError(b("invalid argument. Options argument must be an object. Value: `%s`.",f));if(o(f,"prng")){if(!i(f.prng))throw new TypeError(b("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",f.prng));u=f.prng}else u=g(f)}else u=g()}return v===void 0?c=P:c=E,r(c,"NAME","rayleigh"),f&&f.prng?(r(c,"seed",null),r(c,"seedLength",null),t(c,"state",s(null),l),r(c,"stateLength",null),r(c,"byteLength",null),r(c,"toJSON",s(null)),r(c,"PRNG",u)):(e(c,"seed",h),e(c,"seedLength",R),t(c,"state",M,C),e(c,"stateLength",A),e(c,"byteLength",G),r(c,"toJSON",N),r(c,"PRNG",u),u=u.normalized),c;function h(){return u.seed}function R(){return u.seedLength}function A(){return u.stateLength}function G(){return u.byteLength}function M(){return u.state}function C(O){u.state=O}function N(){var O={};return O.type="PRNG",O.name=c.NAME,O.state=m(u.state),v===void 0?O.params=[]:O.params=[v],O}function E(){return p(u,v)}function P(O){return d(O)||O<=0?NaN:p(u,O)}}return Rg=q,Rg}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Eg,tR;function mI(){if(tR)return Eg;tR=1;var r=q8(),e=r();return Eg=e,Eg}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Lg,nR;function w8(){if(nR)return Lg;nR=1;var r=D(),e=mI(),t=q8();return r(e,"factory",t),Lg=e,Lg}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Og,aR;function hI(){if(aR)return Og;aR=1;var r=le(),e=ue().isPrimitive,t=_e().isPrimitive,n=_r().isPrimitive,a=Y();function i(o,s,l){var g,d,m;if(!r(o)&&!t(o))throw new TypeError(a("invalid argument. First argument must be array-like. Value: `%s`.",o));if(arguments.length<2)throw new Error("insufficient arguments. Must provide a search value.");if(arguments.length>2){if(!e(l))throw new TypeError(a("invalid argument. Third argument must be an integer. Value: `%s`.",l));d=l,d<0&&(d=0)}else d=0;if(t(o)){if(!t(s))throw new TypeError(a("invalid argument. Second argument must be a string. Value: `%s`.",s));return o.indexOf(s,d)!==-1}if(g=o.length,n(s)){for(m=d;m<g;m++)if(n(o[m]))return!0;return!1}for(m=d;m<g;m++)if(o[m]===s)return!0;return!1}return Og=i,Og}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Sg,uR;function _8(){if(uR)return Sg;uR=1;var r=D(),e=er(),t=nr(),n=rr(),a=mr().isPrimitive,i=tr(),o=ie(),s=Pr().isPrimitive,l=Q(),g=ur(),d=ar(),m=or(),b=Be().factory,p=Qr().factory,q=ce(),v=Sr(),f=ct(),u=ir(),c=Y(),h=Rr();function R(){var A,G,M,C,N,E,P,O;if(P=!0,arguments.length===0)N={copy:!1},M=p(N);else if(arguments.length===1)if(i(arguments[0])){if(N=arguments[0],n(N,"copy")&&!s(N.copy))throw new TypeError(c("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",N.copy));if(n(N,"prng")){if(!g(N.prng))throw new TypeError(c("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",N.prng));M=p({prng:N.prng})}else{if(n(N,"state")&&!o(N.state))throw new TypeError(c("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",N.state));N=f({},N),N.copy===!1?P=!1:N.state&&(N.state=q(N.state.length,N.state,1,new v(N.state.length),1)),N.copy=!1,M=p(N)}}else{if(O=arguments[0],!a(O))throw new TypeError(c("invalid argument. First argument must be a positive number or an options object. Value: `%s`.",O));N={copy:!1},M=p(N)}else{if(O=arguments[0],!a(O))throw new TypeError(c("invalid argument. First argument must be a positive number. Value: `%s`.",O));if(N=arguments[1],!i(N))throw new TypeError(c("invalid argument. Options argument must be an object. Value: `%s`.",N));if(n(N,"copy")&&!s(N.copy))throw new TypeError(c("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",N.copy));if(n(N,"prng")){if(!g(N.prng))throw new TypeError(c("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",N.prng));M=p({prng:N.prng})}else{if(n(N,"state")&&!o(N.state))throw new TypeError(c("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",N.state));N=f({},N),N.copy===!1?P=!1:N.state&&(N.state=q(N.state.length,N.state,1,new v(N.state.length),1)),N.copy=!1,M=p(N)}}return N&&N.prng?O===void 0?A=b({prng:N.prng}):A=b(O,{prng:N.prng}):(N.state?G=N.state:(G=M.state,M.state=G),O===void 0?A=b({state:G,copy:!1}):A=b(O,{state:G,copy:!1})),O===void 0?E=$:E=j,C=M.PRNG,r(E,"NAME","t"),N&&N.prng?(r(E,"seed",null),r(E,"seedLength",null),t(E,"state",d(null),m),r(E,"stateLength",null),r(E,"byteLength",null),r(E,"toJSON",d(null))):(e(E,"seed",F),e(E,"seedLength",S),t(E,"state",k,X),e(E,"stateLength",I),e(E,"byteLength",T),r(E,"toJSON",z)),r(E,"PRNG",C),E;function F(){return C.seed}function S(){return C.seedLength}function I(){return C.stateLength}function T(){return C.byteLength}function k(){return C.state}function X(y){if(!o(y))throw new TypeError(c("invalid argument. Must provide a Uint32Array. Value: `%s`.",y));P&&(y=q(y.length,y,1,new v(y.length),1)),C.state=y}function z(){var y={};return y.type="PRNG",y.name=E.NAME,y.state=u(C.state),O===void 0?y.params=[]:y.params=[O],y}function j(){return M()/h(A()/O)}function $(y){return l(y)||y<=0?NaN:M()/h(A(y)/y)}}return Sg=R,Sg}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Mg,fR;function bI(){if(fR)return Mg;fR=1;var r=pr().isPrimitive,e=Y(),t=_r();function n(a,i,o){return!r(a)||t(a)?new TypeError(e("invalid argument. First argument must be a number and not NaN. Value: `%s`.",a)):!r(i)||t(i)?new TypeError(e("invalid argument. Second argument must be a number and not NaN. Value: `%s`.",i)):!r(o)||t(o)?new TypeError(e("invalid argument. Third argument must be a number and not NaN. Value: `%s`.",o)):a<=o&&o<=i?null:new RangeError(e("invalid arguments. Parameters must satisfy the following condition: %s. a: `%f`. b: `%f`. c: `%f`.","a <= c <= b",a,i,o))}return Mg=n,Mg}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Ig,lR;function E8(){if(lR)return Ig;lR=1;var r=D(),e=er(),t=nr(),n=tr(),a=ur(),i=rr(),o=ar(),s=or(),l=lr().factory,g=Q(),d=ir(),m=Y(),b=bI(),p=$I();function q(){var v,f,u,c,h,R,A;if(arguments.length===0)f=l();else if(arguments.length===1){if(v=arguments[0],!n(v))throw new TypeError(m("invalid argument. Options argument must be an object. Value: `%s`.",v));if(i(v,"prng")){if(!a(v.prng))throw new TypeError(m("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",v.prng));f=v.prng}else f=l(v)}else{if(h=arguments[0],R=arguments[1],A=arguments[2],c=b(h,R,A),c)throw c;if(arguments.length>3){if(v=arguments[3],!n(v))throw new TypeError(m("invalid argument. Options argument must be an object. Value: `%s`.",v));if(i(v,"prng")){if(!a(v.prng))throw new TypeError(m("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",v.prng));f=v.prng}else f=l(v)}else f=l()}return h===void 0?u=S:u=F,r(u,"NAME","triangular"),v&&v.prng?(r(u,"seed",null),r(u,"seedLength",null),t(u,"state",o(null),s),r(u,"stateLength",null),r(u,"byteLength",null),r(u,"toJSON",o(null)),r(u,"PRNG",f)):(e(u,"seed",G),e(u,"seedLength",M),t(u,"state",E,P),e(u,"stateLength",C),e(u,"byteLength",N),r(u,"toJSON",O),r(u,"PRNG",f),f=f.normalized),u;function G(){return f.seed}function M(){return f.seedLength}function C(){return f.stateLength}function N(){return f.byteLength}function E(){return f.state}function P(I){f.state=I}function O(){var I={};return I.type="PRNG",I.name=u.NAME,I.state=d(f.state),h===void 0?I.params=[]:I.params=[h,R,A],I}function F(){return p(f,h,R,A)}function S(I,T,k){return g(I)||g(T)||g(k)||!(I<=k&&k<=T)?NaN:p(f,I,T,k)}}return Ig=q,Ig}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Vg,pR;function wI(){if(pR)return Vg;pR=1;var r=pr().isPrimitive,e=Y(),t=_r();function n(a,i){return!r(a)||t(a)?new TypeError(e("invalid argument. First argument must be a number and not NaN. Value: `%s`.",a)):!r(i)||t(i)?new TypeError(e("invalid argument. Second argument must be a number and not NaN. Value: `%s`.",i)):a>=i?new RangeError(e("invalid argument. Minimum support must be less than maximum support. Value: `[%f, %f]`.",a,i)):null}return Vg=n,Vg}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Gg,mR;function _I(){if(mR)return Gg;mR=1;function r(e,t,n){var a=e();return n*a+(1-a)*t}return Gg=r,Gg}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Cg,hR;function O8(){if(hR)return Cg;hR=1;var r=D(),e=er(),t=nr(),n=tr(),a=ur(),i=rr(),o=ar(),s=or(),l=lr().factory,g=Q(),d=ir(),m=Y(),b=wI(),p=_I();function q(){var v,f,u,c,h,R;if(arguments.length===0)f=l();else if(arguments.length===1){if(v=arguments[0],!n(v))throw new TypeError(m("invalid argument. Options argument must be an object. Value: `%s`.",v));if(i(v,"prng")){if(!a(v.prng))throw new TypeError(m("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",v.prng));f=v.prng}else f=l(v)}else{if(h=arguments[0],R=arguments[1],c=b(h,R),c)throw c;if(arguments.length>2){if(v=arguments[2],!n(v))throw new TypeError(m("invalid argument. Options argument must be an object. Value: `%s`.",v));if(i(v,"prng")){if(!a(v.prng))throw new TypeError(m("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",v.prng));f=v.prng}else f=l(v)}else f=l()}return h===void 0?u=F:u=O,r(u,"NAME","uniform"),v&&v.prng?(r(u,"seed",null),r(u,"seedLength",null),t(u,"state",o(null),s),r(u,"stateLength",null),r(u,"byteLength",null),r(u,"toJSON",o(null)),r(u,"PRNG",f)):(e(u,"seed",A),e(u,"seedLength",G),t(u,"state",N,E),e(u,"stateLength",M),e(u,"byteLength",C),r(u,"toJSON",P),r(u,"PRNG",f),f=f.normalized),u;function A(){return f.seed}function G(){return f.seedLength}function M(){return f.stateLength}function C(){return f.byteLength}function N(){return f.state}function E(S){f.state=S}function P(){var S={};return S.type="PRNG",S.name=u.NAME,S.state=d(f.state),h===void 0?S.params=[]:S.params=[h,R],S}function O(){return p(f,h,R)}function F(S,I){return g(S)||g(I)||S>=I?NaN:p(f,S,I)}}return Cg=q,Cg}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Hg,yR;function N8(){if(yR)return Hg;yR=1;var r=D(),e=RI(),t=O8();return r(e,"factory",t),Hg=e,Hg}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ug,bR;function EI(){if(bR)return Ug;bR=1;var r=mr().isPrimitive,e=Y();function t(n,a){return r(n)?r(a)?null:new TypeError(e("invalid argument. Shape parameter must be a positive number. Value: `%s`.",a)):new TypeError(e("invalid argument. Scale parameter must be a positive number. Value: `%s`.",n))}return Ug=t,Ug}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Wg,$R;function LI(){if($R)return Wg;$R=1;var r=Gr(),e=dr();function t(n,a,i){return i*r(-e(1-n()),1/a)}return Wg=t,Wg}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zg,qR;function S8(){if(qR)return zg;qR=1;var r=D(),e=er(),t=nr(),n=tr(),a=ur(),i=rr(),o=ar(),s=or(),l=lr().factory,g=Q(),d=ir(),m=Y(),b=EI(),p=LI();function q(){var v,f,u,c,h,R;if(arguments.length===0)u=l();else if(arguments.length===1){if(f=arguments[0],!n(f))throw new TypeError(m("invalid argument. Options argument must be an object. Value: `%s`.",f));if(i(f,"prng")){if(!a(f.prng))throw new TypeError(m("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",f.prng));u=f.prng}else u=l(f)}else{if(R=arguments[0],v=arguments[1],h=b(v,R),h)throw h;if(arguments.length>2){if(f=arguments[2],!n(f))throw new TypeError(m("invalid argument. Options argument must be an object. Value: `%s`.",f));if(i(f,"prng")){if(!a(f.prng))throw new TypeError(m("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",f.prng));u=f.prng}else u=l(f)}else u=l()}return v===void 0?c=F:c=O,r(c,"NAME","weibull"),f&&f.prng?(r(c,"seed",null),r(c,"seedLength",null),t(c,"state",o(null),s),r(c,"stateLength",null),r(c,"byteLength",null),r(c,"toJSON",o(null)),r(c,"PRNG",u)):(e(c,"seed",A),e(c,"seedLength",G),t(c,"state",N,E),e(c,"stateLength",M),e(c,"byteLength",C),r(c,"toJSON",P),r(c,"PRNG",u),u=u.normalized),c;function A(){return u.seed}function G(){return u.seedLength}function M(){return u.stateLength}function C(){return u.byteLength}function N(){return u.state}function E(S){u.state=S}function P(){var S={};return S.type="PRNG",S.name=c.NAME,S.state=d(u.state),R===void 0?S.params=[]:S.params=[R,v],S}function O(){return p(u,R,v)}function F(S,I){return g(S)||g(I)||S<=0||I<=0?NaN:p(u,S,I)}}return zg=q,zg}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var kg,wR;function OI(){if(wR)return kg;wR=1;var r=S8(),e=r();return kg=e,kg}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Jg,RR;function NI(){if(RR)return Jg;RR=1;var r=YE(),e=xE(),t=f5(),n=c5(),a=m5(),i=Ip(),o=b5(),s=w5(),l=Be(),g=L5(),d=N5(),m=T5(),b=M5(),p=I5(),q=j5(),v=Oe(),f=G5(),u=B5(),c=U5(),h=Qr(),R=z5(),A=D5(),G=X5(),M=Z5(),C=x5(),N=e8(),E=pt(),P=mt(),O=lr(),F=v8(),S=c8(),I=p8(),T=jp(),k=h8(),X=y8(),z=$8(),j=w8(),$=R8(),y=L8(),w=N8(),L=T8(),_={};return _.arcsine=r.factory,_.bernoulli=e.factory,_.beta=t.factory,_.betaprime=n.factory,_.binomial=a.factory,_["box-muller"]=i.factory,_.cauchy=o.factory,_.chi=s.factory,_.chisquare=l.factory,_.cosine=g.factory,_["discrete-uniform"]=d.factory,_.erlang=m.factory,_.exponential=b.factory,_.f=p.factory,_.frechet=q.factory,_.gamma=v.factory,_.geometric=f.factory,_.gumbel=u.factory,_.hypergeometric=c.factory,_["improved-ziggurat"]=h.factory,_.invgamma=R.factory,_.kumaraswamy=A.factory,_.laplace=G.factory,_.levy=M.factory,_.logistic=C.factory,_.lognormal=N.factory,_.minstd=E.factory,_["minstd-shuffle"]=P.factory,_.mt19937=O.factory,_["negative-binomial"]=F.factory,_.normal=S.factory,_["pareto-type1"]=I.factory,_.poisson=T.factory,_.randi=k.factory,_.randn=X.factory,_.randu=z.factory,_.rayleigh=j.factory,_.t=$.factory,_.triangular=y.factory,_.uniform=w.factory,_.weibull=L.factory,Jg=_,Jg}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Xg,ER;function SI(){if(ER)return Xg;ER=1;var r=_e().isPrimitive,e=tr(),t=ve(),n=dI(),a=qe(),i=Sr(),o=NI(),s={Int32Array:a,Uint32Array:i},l=["randi","randn","randu"];function g(d,m){var b,p,q,v,f;if(m&&m.type==="PRNG"&&r(m.name)&&e(m.state)&&t(m.params)&&r(m.state.type)&&t(m.state.data)&&(p={},b=o[m.name],b===void 0&&(f=m.name.split("-"),n(l,f[0])&&(b=o[f[0]],p.name=f.slice(1).join("-"))),b&&(v=s[m.state.type],v))){p.state=new v(m.state.data),q=m.params.slice(),q.push(p);try{return b.apply(null,q)}catch{}}return m}return Xg=g,Xg}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Kg,OR;function AI(){if(OR)return Kg;OR=1;var r=d7(),e={};return r(e,"arcsine",YE()),r(e,"bernoulli",xE()),r(e,"beta",f5()),r(e,"betaprime",c5()),r(e,"binomial",m5()),r(e,"boxMuller",Ip()),r(e,"cauchy",b5()),r(e,"chi",w5()),r(e,"chisquare",Be()),r(e,"cosine",L5()),r(e,"discreteUniform",N5()),r(e,"erlang",T5()),r(e,"exponential",M5()),r(e,"f",I5()),r(e,"frechet",j5()),r(e,"gamma",Oe()),r(e,"geometric",G5()),r(e,"gumbel",B5()),r(e,"hypergeometric",U5()),r(e,"improvedZiggurat",Qr()),r(e,"invgamma",z5()),r(e,"kumaraswamy",D5()),r(e,"laplace",X5()),r(e,"levy",Z5()),r(e,"logistic",x5()),r(e,"lognormal",e8()),r(e,"minstd",pt()),r(e,"minstdShuffle",mt()),r(e,"mt19937",lr()),r(e,"negativeBinomial",v8()),r(e,"normal",c8()),r(e,"pareto1",p8()),r(e,"poisson",jp()),r(e,"randi",h8()),r(e,"randn",y8()),r(e,"randu",$8()),r(e,"rayleigh",w8()),r(e,"reviveBasePRNG",TI()),r(e,"t",R8()),r(e,"triangular",L8()),r(e,"uniform",N8()),r(e,"weibull",T8()),Kg=e,Kg}var Zg=AI(),MI=VL('<main class="svelte-1pr1re9"><div id="stonks" class="svelte-1pr1re9"><h4> </h4> <h4> </h4> <h4> </h4> <h4> </h4></div> <div id="shop-container" class="svelte-1pr1re9"><div id="icons-container" class="svelte-1pr1re9"><img id="customer-icon" alt="Customer icon"> <img id="shop-icon" alt="Shop icon" class="svelte-1pr1re9"></div></div> <br> <button>Start Simulation</button> <button>Stop Simulation</button> <br> <br> <section id="simulation-parameters" class="svelte-1pr1re9"><h2 class="svelte-1pr1re9">Simulation Parameters</h2> <div class="svelte-1pr1re9"><label for="customersPerHour" class="svelte-1pr1re9">Customers per Hour:</label> <input type="number" id="customersPerHour" min="1" class="svelte-1pr1re9"></div> <div class="svelte-1pr1re9"><label for="purchaseProbability" class="svelte-1pr1re9">Purchase Probability (0-1):</label> <input type="number" id="purchaseProbability" min="0" max="1" step="0.01" class="svelte-1pr1re9"></div> <div class="svelte-1pr1re9"><label for="minPurchasePrice" class="svelte-1pr1re9">Minimum Purchase Price:</label> <input type="number" id="minPurchasePrice" min="0" class="svelte-1pr1re9"></div> <div class="svelte-1pr1re9"><label for="maxPurchasePrice" class="svelte-1pr1re9">Maximum Purchase Price:</label> <input type="number" id="maxPurchasePrice" class="svelte-1pr1re9"></div> <div class="svelte-1pr1re9"><label for="simulationSpeed" class="svelte-1pr1re9">Simulation Speed: (minutes per real second)</label> <input type="number" id="simulationSpeed" min="0.1" step="0.1" class="svelte-1pr1re9"></div></section></main>');function PI(r,e){FR(e,!1);let t=Br(0),n=Br("N/A"),a=Br(),i=Br(!1),o=Br(!1),s=Br(10),l=Br(.7),g=Br(5),d=Br(20),m=Br(5),b=Br(0),p;function q(){fr(i)||(cr(i,!0),cr(a,f()),cr(o,!0),p=setInterval(()=>rL(b),1e3/fr(m)))}function v(){if(Zg.uniform(0,1)<fr(l)){let U=(Zg.beta(5,5)*(fr(d)-fr(g))+fr(g)).toFixed(2);cr(t,fr(t)+ +U),cr(n,"+$"+U)}else cr(n,"No purchase");cr(a,f()),cr(o,!1),setTimeout(()=>cr(o,!0),0)}function f(){return+Zg.exponential(fr(s)/60).toFixed(0)+1}function u(){cr(i,!1),cr(o,!1),clearInterval(p)}QL();var c=MI(),h=Tr(c),R=Tr(h),A=Tr(R),G=$r(R,2),M=Tr(G),C=$r(G,2),N=Tr(C),E=$r(C,2),P=Tr(E),O=$r(h,2),F=Tr(O),S=Tr(F);dt(S,"src",e7);var I=$r(S,2);dt(I,"src",r7);var T=$r(O,4),k=$r(T,2),X=$r(k,6),z=$r(Tr(X),2),j=$r(Tr(z),2),$=$r(z,2),y=$r(Tr($),2),w=$r($,2),L=$r(Tr(w),2),_=$r(w,2),B=$r(Tr(_),2),H=$r(_,2),Z=$r(Tr(H),2);fL(U=>{He(A,`Time passed: ${fr(b)??""} minutes`),He(M,`Next Customer: in ${fr(a)??""} minutes`),He(N,`Revenue: $${U??""}`),He(P,`Last Customer: ${fr(n)??""}`),DL(S,1,WL(fr(o)?"in-shop":""),"svelte-1pr1re9"),JL(S,`--transition-duration: ${fr(a)/fr(m)}s;`),T.disabled=fr(i),k.disabled=!fr(i),j.disabled=fr(i),y.disabled=fr(i),L.disabled=fr(i),dt(B,"min",fr(g)),B.disabled=fr(i),Z.disabled=fr(i)},[()=>fr(t).toFixed(2)],nL),ht("transitionend",S,v),ht("click",T,q),ht("click",k,u),Ne(j,()=>fr(s),U=>cr(s,U)),Ne(y,()=>fr(l),U=>cr(l,U)),Ne(L,()=>fr(g),U=>cr(g,U)),Ne(B,()=>fr(d),U=>cr(d,U)),Ne(Z,()=>fr(m),U=>cr(m,U)),GL(r,c),jR()}CL(PI,{target:document.getElementById("app")});

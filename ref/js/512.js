const Ds=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=t(o);fetch(o.href,s)}};Ds();const Os="modulepreload",gr={},Ms="/projects/shells/",Fs=function(n,t){return!t||t.length===0?n():Promise.all(t.map(r=>{if(r=`${Ms}${r}`,r in gr)return;gr[r]=!0;const o=r.endsWith(".css"),s=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${s}`))return;const a=document.createElement("link");if(a.rel=o?"stylesheet":Os,o||(a.as="script",a.crossOrigin=""),a.href=r,document.head.appendChild(a),o)return new Promise((i,l)=>{a.addEventListener("load",i),a.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>n())};function qt(e,n){const t=Object.create(null),r=e.split(",");for(let o=0;o<r.length;o++)t[r[o]]=!0;return n?o=>!!t[o.toLowerCase()]:o=>!!t[o]}const Ls="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ns=qt(Ls);function uo(e){return!!e||e===""}function He(e){if(s0(e)){const n={};for(let t=0;t<e.length;t++){const r=e[t],o=M0(r)?Vs(r):He(r);if(o)for(const s in o)n[s]=o[s]}return n}else{if(M0(e))return e;if(I0(e))return e}}const Ks=/;(?![^(]*\))/g,Hs=/:(.+)/;function Vs(e){const n={};return e.split(Ks).forEach(t=>{if(t){const r=t.split(Hs);r.length>1&&(n[r[0].trim()]=r[1].trim())}}),n}function de(e){let n="";if(M0(e))n=e;else if(s0(e))for(let t=0;t<e.length;t++){const r=de(e[t]);r&&(n+=r+" ")}else if(I0(e))for(const t in e)e[t]&&(n+=t+" ");return n.trim()}function Gs(e,n){if(e.length!==n.length)return!1;let t=!0;for(let r=0;t&&r<e.length;r++)t=Pn(e[r],n[r]);return t}function Pn(e,n){if(e===n)return!0;let t=br(e),r=br(n);if(t||r)return t&&r?e.getTime()===n.getTime():!1;if(t=wn(e),r=wn(n),t||r)return e===n;if(t=s0(e),r=s0(n),t||r)return t&&r?Gs(e,n):!1;if(t=I0(e),r=I0(n),t||r){if(!t||!r)return!1;const o=Object.keys(e).length,s=Object.keys(n).length;if(o!==s)return!1;for(const a in e){const i=e.hasOwnProperty(a),l=n.hasOwnProperty(a);if(i&&!l||!i&&l||!Pn(e[a],n[a]))return!1}}return String(e)===String(n)}function Xt(e,n){return e.findIndex(t=>Pn(t,n))}const a0=e=>M0(e)?e:e==null?"":s0(e)||I0(e)&&(e.toString===ho||!u0(e.toString))?JSON.stringify(e,fo,2):String(e),fo=(e,n)=>n&&n.__v_isRef?fo(e,n.value):Ye(n)?{[`Map(${n.size})`]:[...n.entries()].reduce((t,[r,o])=>(t[`${r} =>`]=o,t),{})}:rn(n)?{[`Set(${n.size})`]:[...n.values()]}:I0(n)&&!s0(n)&&!mo(n)?String(n):n,$0={},Xe=[],te=()=>{},zs=()=>!1,js=/^on[^a-z]/,nt=e=>js.test(e),Yt=e=>e.startsWith("onUpdate:"),K0=Object.assign,Qt=(e,n)=>{const t=e.indexOf(n);t>-1&&e.splice(t,1)},Us=Object.prototype.hasOwnProperty,g0=(e,n)=>Us.call(e,n),s0=Array.isArray,Ye=e=>Bn(e)==="[object Map]",rn=e=>Bn(e)==="[object Set]",br=e=>Bn(e)==="[object Date]",u0=e=>typeof e=="function",M0=e=>typeof e=="string",wn=e=>typeof e=="symbol",I0=e=>e!==null&&typeof e=="object",po=e=>I0(e)&&u0(e.then)&&u0(e.catch),ho=Object.prototype.toString,Bn=e=>ho.call(e),Ws=e=>Bn(e).slice(8,-1),mo=e=>Bn(e)==="[object Object]",Jt=e=>M0(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Nn=qt(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),tt=e=>{const n=Object.create(null);return t=>n[t]||(n[t]=e(t))},qs=/-(\w)/g,fe=tt(e=>e.replace(qs,(n,t)=>t?t.toUpperCase():"")),Xs=/\B([A-Z])/g,on=tt(e=>e.replace(Xs,"-$1").toLowerCase()),rt=tt(e=>e.charAt(0).toUpperCase()+e.slice(1)),gt=tt(e=>e?`on${rt(e)}`:""),xn=(e,n)=>!Object.is(e,n),Kn=(e,n)=>{for(let t=0;t<e.length;t++)e[t](n)},Un=(e,n,t)=>{Object.defineProperty(e,n,{configurable:!0,enumerable:!1,value:t})},Wn=e=>{const n=parseFloat(e);return isNaN(n)?e:n};let yr;const Ys=()=>yr||(yr=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let ie;class Qs{constructor(n=!1){this.active=!0,this.effects=[],this.cleanups=[],!n&&ie&&(this.parent=ie,this.index=(ie.scopes||(ie.scopes=[])).push(this)-1)}run(n){if(this.active){const t=ie;try{return ie=this,n()}finally{ie=t}}}on(){ie=this}off(){ie=this.parent}stop(n){if(this.active){let t,r;for(t=0,r=this.effects.length;t<r;t++)this.effects[t].stop();for(t=0,r=this.cleanups.length;t<r;t++)this.cleanups[t]();if(this.scopes)for(t=0,r=this.scopes.length;t<r;t++)this.scopes[t].stop(!0);if(this.parent&&!n){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.active=!1}}}function Js(e,n=ie){n&&n.active&&n.effects.push(e)}const Zt=e=>{const n=new Set(e);return n.w=0,n.n=0,n},go=e=>(e.w&Ae)>0,bo=e=>(e.n&Ae)>0,Zs=({deps:e})=>{if(e.length)for(let n=0;n<e.length;n++)e[n].w|=Ae},ea=e=>{const{deps:n}=e;if(n.length){let t=0;for(let r=0;r<n.length;r++){const o=n[r];go(o)&&!bo(o)?o.delete(e):n[t++]=o,o.w&=~Ae,o.n&=~Ae}n.length=t}},kt=new WeakMap;let dn=0,Ae=1;const Rt=30;let Z0;const Ne=Symbol(""),$t=Symbol("");class er{constructor(n,t=null,r){this.fn=n,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,Js(this,r)}run(){if(!this.active)return this.fn();let n=Z0,t=Re;for(;n;){if(n===this)return;n=n.parent}try{return this.parent=Z0,Z0=this,Re=!0,Ae=1<<++dn,dn<=Rt?Zs(this):vr(this),this.fn()}finally{dn<=Rt&&ea(this),Ae=1<<--dn,Z0=this.parent,Re=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Z0===this?this.deferStop=!0:this.active&&(vr(this),this.onStop&&this.onStop(),this.active=!1)}}function vr(e){const{deps:n}=e;if(n.length){for(let t=0;t<n.length;t++)n[t].delete(e);n.length=0}}let Re=!0;const yo=[];function sn(){yo.push(Re),Re=!1}function an(){const e=yo.pop();Re=e===void 0?!0:e}function W0(e,n,t){if(Re&&Z0){let r=kt.get(e);r||kt.set(e,r=new Map);let o=r.get(t);o||r.set(t,o=Zt()),vo(o)}}function vo(e,n){let t=!1;dn<=Rt?bo(e)||(e.n|=Ae,t=!go(e)):t=!e.has(Z0),t&&(e.add(Z0),Z0.deps.push(e))}function me(e,n,t,r,o,s){const a=kt.get(e);if(!a)return;let i=[];if(n==="clear")i=[...a.values()];else if(t==="length"&&s0(e))a.forEach((l,u)=>{(u==="length"||u>=r)&&i.push(l)});else switch(t!==void 0&&i.push(a.get(t)),n){case"add":s0(e)?Jt(t)&&i.push(a.get("length")):(i.push(a.get(Ne)),Ye(e)&&i.push(a.get($t)));break;case"delete":s0(e)||(i.push(a.get(Ne)),Ye(e)&&i.push(a.get($t)));break;case"set":Ye(e)&&i.push(a.get(Ne));break}if(i.length===1)i[0]&&At(i[0]);else{const l=[];for(const u of i)u&&l.push(...u);At(Zt(l))}}function At(e,n){const t=s0(e)?e:[...e];for(const r of t)r.computed&&_r(r);for(const r of t)r.computed||_r(r)}function _r(e,n){(e!==Z0||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const na=qt("__proto__,__v_isRef,__isVue"),_o=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(wn)),ta=nr(),ra=nr(!1,!0),oa=nr(!0),wr=sa();function sa(){const e={};return["includes","indexOf","lastIndexOf"].forEach(n=>{e[n]=function(...t){const r=w0(this);for(let s=0,a=this.length;s<a;s++)W0(r,"get",s+"");const o=r[n](...t);return o===-1||o===!1?r[n](...t.map(w0)):o}}),["push","pop","shift","unshift","splice"].forEach(n=>{e[n]=function(...t){sn();const r=w0(this)[n].apply(this,t);return an(),r}}),e}function nr(e=!1,n=!1){return function(r,o,s){if(o==="__v_isReactive")return!e;if(o==="__v_isReadonly")return e;if(o==="__v_isShallow")return n;if(o==="__v_raw"&&s===(e?n?wa:Ro:n?ko:Co).get(r))return r;const a=s0(r);if(!e&&a&&g0(wr,o))return Reflect.get(wr,o,s);const i=Reflect.get(r,o,s);return(wn(o)?_o.has(o):na(o))||(e||W0(r,"get",o),n)?i:P0(i)?a&&Jt(o)?i:i.value:I0(i)?e?Ao(i):Se(i):i}}const aa=wo(),ia=wo(!0);function wo(e=!1){return function(t,r,o,s){let a=t[r];if(Cn(a)&&P0(a)&&!P0(o))return!1;if(!e&&!Cn(o)&&(Et(o)||(o=w0(o),a=w0(a)),!s0(t)&&P0(a)&&!P0(o)))return a.value=o,!0;const i=s0(t)&&Jt(r)?Number(r)<t.length:g0(t,r),l=Reflect.set(t,r,o,s);return t===w0(s)&&(i?xn(o,a)&&me(t,"set",r,o):me(t,"add",r,o)),l}}function la(e,n){const t=g0(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&t&&me(e,"delete",n,void 0),r}function ca(e,n){const t=Reflect.has(e,n);return(!wn(n)||!_o.has(n))&&W0(e,"has",n),t}function ua(e){return W0(e,"iterate",s0(e)?"length":Ne),Reflect.ownKeys(e)}const xo={get:ta,set:aa,deleteProperty:la,has:ca,ownKeys:ua},da={get:oa,set(e,n){return!0},deleteProperty(e,n){return!0}},fa=K0({},xo,{get:ra,set:ia}),tr=e=>e,ot=e=>Reflect.getPrototypeOf(e);function Dn(e,n,t=!1,r=!1){e=e.__v_raw;const o=w0(e),s=w0(n);t||(n!==s&&W0(o,"get",n),W0(o,"get",s));const{has:a}=ot(o),i=r?tr:t?sr:kn;if(a.call(o,n))return i(e.get(n));if(a.call(o,s))return i(e.get(s));e!==o&&e.get(n)}function On(e,n=!1){const t=this.__v_raw,r=w0(t),o=w0(e);return n||(e!==o&&W0(r,"has",e),W0(r,"has",o)),e===o?t.has(e):t.has(e)||t.has(o)}function Mn(e,n=!1){return e=e.__v_raw,!n&&W0(w0(e),"iterate",Ne),Reflect.get(e,"size",e)}function xr(e){e=w0(e);const n=w0(this);return ot(n).has.call(n,e)||(n.add(e),me(n,"add",e,e)),this}function Cr(e,n){n=w0(n);const t=w0(this),{has:r,get:o}=ot(t);let s=r.call(t,e);s||(e=w0(e),s=r.call(t,e));const a=o.call(t,e);return t.set(e,n),s?xn(n,a)&&me(t,"set",e,n):me(t,"add",e,n),this}function kr(e){const n=w0(this),{has:t,get:r}=ot(n);let o=t.call(n,e);o||(e=w0(e),o=t.call(n,e)),r&&r.call(n,e);const s=n.delete(e);return o&&me(n,"delete",e,void 0),s}function Rr(){const e=w0(this),n=e.size!==0,t=e.clear();return n&&me(e,"clear",void 0,void 0),t}function Fn(e,n){return function(r,o){const s=this,a=s.__v_raw,i=w0(a),l=n?tr:e?sr:kn;return!e&&W0(i,"iterate",Ne),a.forEach((u,c)=>r.call(o,l(u),l(c),s))}}function Ln(e,n,t){return function(...r){const o=this.__v_raw,s=w0(o),a=Ye(s),i=e==="entries"||e===Symbol.iterator&&a,l=e==="keys"&&a,u=o[e](...r),c=t?tr:n?sr:kn;return!n&&W0(s,"iterate",l?$t:Ne),{next(){const{value:f,done:d}=u.next();return d?{value:f,done:d}:{value:i?[c(f[0]),c(f[1])]:c(f),done:d}},[Symbol.iterator](){return this}}}}function be(e){return function(...n){return e==="delete"?!1:this}}function pa(){const e={get(s){return Dn(this,s)},get size(){return Mn(this)},has:On,add:xr,set:Cr,delete:kr,clear:Rr,forEach:Fn(!1,!1)},n={get(s){return Dn(this,s,!1,!0)},get size(){return Mn(this)},has:On,add:xr,set:Cr,delete:kr,clear:Rr,forEach:Fn(!1,!0)},t={get(s){return Dn(this,s,!0)},get size(){return Mn(this,!0)},has(s){return On.call(this,s,!0)},add:be("add"),set:be("set"),delete:be("delete"),clear:be("clear"),forEach:Fn(!0,!1)},r={get(s){return Dn(this,s,!0,!0)},get size(){return Mn(this,!0)},has(s){return On.call(this,s,!0)},add:be("add"),set:be("set"),delete:be("delete"),clear:be("clear"),forEach:Fn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=Ln(s,!1,!1),t[s]=Ln(s,!0,!1),n[s]=Ln(s,!1,!0),r[s]=Ln(s,!0,!0)}),[e,t,n,r]}const[ha,ma,ga,ba]=pa();function rr(e,n){const t=n?e?ba:ga:e?ma:ha;return(r,o,s)=>o==="__v_isReactive"?!e:o==="__v_isReadonly"?e:o==="__v_raw"?r:Reflect.get(g0(t,o)&&o in r?t:r,o,s)}const ya={get:rr(!1,!1)},va={get:rr(!1,!0)},_a={get:rr(!0,!1)},Co=new WeakMap,ko=new WeakMap,Ro=new WeakMap,wa=new WeakMap;function xa(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ca(e){return e.__v_skip||!Object.isExtensible(e)?0:xa(Ws(e))}function Se(e){return Cn(e)?e:or(e,!1,xo,ya,Co)}function $o(e){return or(e,!1,fa,va,ko)}function Ao(e){return or(e,!0,da,_a,Ro)}function or(e,n,t,r,o){if(!I0(e)||e.__v_raw&&!(n&&e.__v_isReactive))return e;const s=o.get(e);if(s)return s;const a=Ca(e);if(a===0)return e;const i=new Proxy(e,a===2?r:t);return o.set(e,i),i}function Qe(e){return Cn(e)?Qe(e.__v_raw):!!(e&&e.__v_isReactive)}function Cn(e){return!!(e&&e.__v_isReadonly)}function Et(e){return!!(e&&e.__v_isShallow)}function Eo(e){return Qe(e)||Cn(e)}function w0(e){const n=e&&e.__v_raw;return n?w0(n):e}function Io(e){return Un(e,"__v_skip",!0),e}const kn=e=>I0(e)?Se(e):e,sr=e=>I0(e)?Ao(e):e;function So(e){Re&&Z0&&(e=w0(e),vo(e.dep||(e.dep=Zt())))}function Po(e,n){e=w0(e),e.dep&&At(e.dep)}function P0(e){return!!(e&&e.__v_isRef===!0)}function _0(e){return Bo(e,!1)}function ze(e){return Bo(e,!0)}function Bo(e,n){return P0(e)?e:new ka(e,n)}class ka{constructor(n,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?n:w0(n),this._value=t?n:kn(n)}get value(){return So(this),this._value}set value(n){n=this.__v_isShallow?n:w0(n),xn(n,this._rawValue)&&(this._rawValue=n,this._value=this.__v_isShallow?n:kn(n),Po(this))}}function L(e){return P0(e)?e.value:e}const Ra={get:(e,n,t)=>L(Reflect.get(e,n,t)),set:(e,n,t,r)=>{const o=e[n];return P0(o)&&!P0(t)?(o.value=t,!0):Reflect.set(e,n,t,r)}};function To(e){return Qe(e)?e:new Proxy(e,Ra)}class $a{constructor(n,t,r,o){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new er(n,()=>{this._dirty||(this._dirty=!0,Po(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!o,this.__v_isReadonly=r}get value(){const n=w0(this);return So(n),(n._dirty||!n._cacheable)&&(n._dirty=!1,n._value=n.effect.run()),n._value}set value(n){this._setter(n)}}function Aa(e,n,t=!1){let r,o;const s=u0(e);return s?(r=e,o=te):(r=e.get,o=e.set),new $a(r,o,s||!o,t)}function $e(e,n,t,r){let o;try{o=r?e(...r):e()}catch(s){st(s,n,t)}return o}function Y0(e,n,t,r){if(u0(e)){const s=$e(e,n,t,r);return s&&po(s)&&s.catch(a=>{st(a,n,t)}),s}const o=[];for(let s=0;s<e.length;s++)o.push(Y0(e[s],n,t,r));return o}function st(e,n,t,r=!0){const o=n?n.vnode:null;if(n){let s=n.parent;const a=n.proxy,i=t;for(;s;){const u=s.ec;if(u){for(let c=0;c<u.length;c++)if(u[c](e,a,i)===!1)return}s=s.parent}const l=n.appContext.config.errorHandler;if(l){$e(l,null,10,[e,a,i]);return}}Ea(e,t,o,r)}function Ea(e,n,t,r=!0){console.error(e)}let qn=!1,It=!1;const U0=[];let he=0;const hn=[];let fn=null,je=0;const mn=[];let _e=null,Ue=0;const Do=Promise.resolve();let ar=null,St=null;function Oo(e){const n=ar||Do;return e?n.then(this?e.bind(this):e):n}function Ia(e){let n=he+1,t=U0.length;for(;n<t;){const r=n+t>>>1;Rn(U0[r])<e?n=r+1:t=r}return n}function Mo(e){(!U0.length||!U0.includes(e,qn&&e.allowRecurse?he+1:he))&&e!==St&&(e.id==null?U0.push(e):U0.splice(Ia(e.id),0,e),Fo())}function Fo(){!qn&&!It&&(It=!0,ar=Do.then(Ko))}function Sa(e){const n=U0.indexOf(e);n>he&&U0.splice(n,1)}function Lo(e,n,t,r){s0(e)?t.push(...e):(!n||!n.includes(e,e.allowRecurse?r+1:r))&&t.push(e),Fo()}function Pa(e){Lo(e,fn,hn,je)}function Ba(e){Lo(e,_e,mn,Ue)}function at(e,n=null){if(hn.length){for(St=n,fn=[...new Set(hn)],hn.length=0,je=0;je<fn.length;je++)fn[je]();fn=null,je=0,St=null,at(e,n)}}function No(e){if(at(),mn.length){const n=[...new Set(mn)];if(mn.length=0,_e){_e.push(...n);return}for(_e=n,_e.sort((t,r)=>Rn(t)-Rn(r)),Ue=0;Ue<_e.length;Ue++)_e[Ue]();_e=null,Ue=0}}const Rn=e=>e.id==null?1/0:e.id;function Ko(e){It=!1,qn=!0,at(e),U0.sort((t,r)=>Rn(t)-Rn(r));const n=te;try{for(he=0;he<U0.length;he++){const t=U0[he];t&&t.active!==!1&&$e(t,null,14)}}finally{he=0,U0.length=0,No(),qn=!1,ar=null,(U0.length||hn.length||mn.length)&&Ko(e)}}function Ta(e,n,...t){if(e.isUnmounted)return;const r=e.vnode.props||$0;let o=t;const s=n.startsWith("update:"),a=s&&n.slice(7);if(a&&a in r){const c=`${a==="modelValue"?"model":a}Modifiers`,{number:f,trim:d}=r[c]||$0;d&&(o=t.map(h=>h.trim())),f&&(o=t.map(Wn))}let i,l=r[i=gt(n)]||r[i=gt(fe(n))];!l&&s&&(l=r[i=gt(on(n))]),l&&Y0(l,e,6,o);const u=r[i+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[i])return;e.emitted[i]=!0,Y0(u,e,6,o)}}function Ho(e,n,t=!1){const r=n.emitsCache,o=r.get(e);if(o!==void 0)return o;const s=e.emits;let a={},i=!1;if(!u0(e)){const l=u=>{const c=Ho(u,n,!0);c&&(i=!0,K0(a,c))};!t&&n.mixins.length&&n.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!s&&!i?(r.set(e,null),null):(s0(s)?s.forEach(l=>a[l]=null):K0(a,s),r.set(e,a),a)}function it(e,n){return!e||!nt(n)?!1:(n=n.slice(2).replace(/Once$/,""),g0(e,n[0].toLowerCase()+n.slice(1))||g0(e,on(n))||g0(e,n))}let N0=null,lt=null;function Xn(e){const n=N0;return N0=e,lt=e&&e.type.__scopeId||null,n}function Da(e){lt=e}function Oa(){lt=null}function S0(e,n=N0,t){if(!n||e._n)return e;const r=(...o)=>{r._d&&Mr(-1);const s=Xn(n),a=e(...o);return Xn(s),r._d&&Mr(1),a};return r._n=!0,r._c=!0,r._d=!0,r}function bt(e){const{type:n,vnode:t,proxy:r,withProxy:o,props:s,propsOptions:[a],slots:i,attrs:l,emit:u,render:c,renderCache:f,data:d,setupState:h,ctx:w,inheritAttrs:E}=e;let m,v;const S=Xn(e);try{if(t.shapeFlag&4){const C=o||r;m=ce(c.call(C,C,f,s,h,d,w)),v=l}else{const C=n;m=ce(C.length>1?C(s,{attrs:l,slots:i,emit:u}):C(s,null)),v=n.props?l:Ma(l)}}catch(C){bn.length=0,st(C,e,1),m=m0(Q0)}let _=m;if(v&&E!==!1){const C=Object.keys(v),{shapeFlag:V}=_;C.length&&V&7&&(a&&C.some(Yt)&&(v=Fa(v,a)),_=Ie(_,v))}return t.dirs&&(_=Ie(_),_.dirs=_.dirs?_.dirs.concat(t.dirs):t.dirs),t.transition&&(_.transition=t.transition),m=_,Xn(S),m}const Ma=e=>{let n;for(const t in e)(t==="class"||t==="style"||nt(t))&&((n||(n={}))[t]=e[t]);return n},Fa=(e,n)=>{const t={};for(const r in e)(!Yt(r)||!(r.slice(9)in n))&&(t[r]=e[r]);return t};function La(e,n,t){const{props:r,children:o,component:s}=e,{props:a,children:i,patchFlag:l}=n,u=s.emitsOptions;if(n.dirs||n.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return r?$r(r,a,u):!!a;if(l&8){const c=n.dynamicProps;for(let f=0;f<c.length;f++){const d=c[f];if(a[d]!==r[d]&&!it(u,d))return!0}}}else return(o||i)&&(!i||!i.$stable)?!0:r===a?!1:r?a?$r(r,a,u):!0:!!a;return!1}function $r(e,n,t){const r=Object.keys(n);if(r.length!==Object.keys(e).length)return!0;for(let o=0;o<r.length;o++){const s=r[o];if(n[s]!==e[s]&&!it(t,s))return!0}return!1}function Na({vnode:e,parent:n},t){for(;n&&n.subTree===e;)(e=n.vnode).el=t,n=n.parent}const Ka=e=>e.__isSuspense;function Ha(e,n){n&&n.pendingBranch?s0(e)?n.effects.push(...e):n.effects.push(e):Ba(e)}function ee(e,n){if(T0){let t=T0.provides;const r=T0.parent&&T0.parent.provides;r===t&&(t=T0.provides=Object.create(r)),t[e]=n}}function O0(e,n,t=!1){const r=T0||N0;if(r){const o=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(o&&e in o)return o[e];if(arguments.length>1)return t&&u0(n)?n.call(r.proxy):n}}const Ar={};function Je(e,n,t){return Vo(e,n,t)}function Vo(e,n,{immediate:t,deep:r,flush:o,onTrack:s,onTrigger:a}=$0){const i=T0;let l,u=!1,c=!1;if(P0(e)?(l=()=>e.value,u=Et(e)):Qe(e)?(l=()=>e,r=!0):s0(e)?(c=!0,u=e.some(v=>Qe(v)||Et(v)),l=()=>e.map(v=>{if(P0(v))return v.value;if(Qe(v))return Le(v);if(u0(v))return $e(v,i,2)})):u0(e)?n?l=()=>$e(e,i,2):l=()=>{if(!(i&&i.isUnmounted))return f&&f(),Y0(e,i,3,[d])}:l=te,n&&r){const v=l;l=()=>Le(v())}let f,d=v=>{f=m.onStop=()=>{$e(v,i,4)}};if(En)return d=te,n?t&&Y0(n,i,3,[l(),c?[]:void 0,d]):l(),te;let h=c?[]:Ar;const w=()=>{if(!!m.active)if(n){const v=m.run();(r||u||(c?v.some((S,_)=>xn(S,h[_])):xn(v,h)))&&(f&&f(),Y0(n,i,3,[v,h===Ar?void 0:h,d]),h=v)}else m.run()};w.allowRecurse=!!n;let E;o==="sync"?E=w:o==="post"?E=()=>G0(w,i&&i.suspense):E=()=>Pa(w);const m=new er(l,E);return n?t?w():h=m.run():o==="post"?G0(m.run.bind(m),i&&i.suspense):m.run(),()=>{m.stop(),i&&i.scope&&Qt(i.scope.effects,m)}}function Va(e,n,t){const r=this.proxy,o=M0(e)?e.includes(".")?Go(r,e):()=>r[e]:e.bind(r,r);let s;u0(n)?s=n:(s=n.handler,t=n);const a=T0;Ze(this);const i=Vo(o,s.bind(r),t);return a?Ze(a):Ke(),i}function Go(e,n){const t=n.split(".");return()=>{let r=e;for(let o=0;o<t.length&&r;o++)r=r[t[o]];return r}}function Le(e,n){if(!I0(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),P0(e))Le(e.value,n);else if(s0(e))for(let t=0;t<e.length;t++)Le(e[t],n);else if(rn(e)||Ye(e))e.forEach(t=>{Le(t,n)});else if(mo(e))for(const t in e)Le(e[t],n);return e}function Ga(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ln(()=>{e.isMounted=!0}),qo(()=>{e.isUnmounting=!0}),e}const X0=[Function,Array],za={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:X0,onEnter:X0,onAfterEnter:X0,onEnterCancelled:X0,onBeforeLeave:X0,onLeave:X0,onAfterLeave:X0,onLeaveCancelled:X0,onBeforeAppear:X0,onAppear:X0,onAfterAppear:X0,onAppearCancelled:X0},setup(e,{slots:n}){const t=Ei(),r=Ga();let o;return()=>{const s=n.default&&jo(n.default(),!0);if(!s||!s.length)return;let a=s[0];if(s.length>1){for(const E of s)if(E.type!==Q0){a=E;break}}const i=w0(e),{mode:l}=i;if(r.isLeaving)return yt(a);const u=Er(a);if(!u)return yt(a);const c=Pt(u,i,r,t);Bt(u,c);const f=t.subTree,d=f&&Er(f);let h=!1;const{getTransitionKey:w}=u.type;if(w){const E=w();o===void 0?o=E:E!==o&&(o=E,h=!0)}if(d&&d.type!==Q0&&(!Me(u,d)||h)){const E=Pt(d,i,r,t);if(Bt(d,E),l==="out-in")return r.isLeaving=!0,E.afterLeave=()=>{r.isLeaving=!1,t.update()},yt(a);l==="in-out"&&u.type!==Q0&&(E.delayLeave=(m,v,S)=>{const _=zo(r,d);_[String(d.key)]=d,m._leaveCb=()=>{v(),m._leaveCb=void 0,delete c.delayedLeave},c.delayedLeave=S})}return a}}},ja=za;function zo(e,n){const{leavingVNodes:t}=e;let r=t.get(n.type);return r||(r=Object.create(null),t.set(n.type,r)),r}function Pt(e,n,t,r){const{appear:o,mode:s,persisted:a=!1,onBeforeEnter:i,onEnter:l,onAfterEnter:u,onEnterCancelled:c,onBeforeLeave:f,onLeave:d,onAfterLeave:h,onLeaveCancelled:w,onBeforeAppear:E,onAppear:m,onAfterAppear:v,onAppearCancelled:S}=n,_=String(e.key),C=zo(t,e),V=(F,k)=>{F&&Y0(F,r,9,k)},J=(F,k)=>{const $=k[1];V(F,k),s0(F)?F.every(O=>O.length<=1)&&$():F.length<=1&&$()},l0={mode:s,persisted:a,beforeEnter(F){let k=i;if(!t.isMounted)if(o)k=E||i;else return;F._leaveCb&&F._leaveCb(!0);const $=C[_];$&&Me(e,$)&&$.el._leaveCb&&$.el._leaveCb(),V(k,[F])},enter(F){let k=l,$=u,O=c;if(!t.isMounted)if(o)k=m||l,$=v||u,O=S||c;else return;let n0=!1;const p0=F._enterCb=Q=>{n0||(n0=!0,Q?V(O,[F]):V($,[F]),l0.delayedLeave&&l0.delayedLeave(),F._enterCb=void 0)};k?J(k,[F,p0]):p0()},leave(F,k){const $=String(e.key);if(F._enterCb&&F._enterCb(!0),t.isUnmounting)return k();V(f,[F]);let O=!1;const n0=F._leaveCb=p0=>{O||(O=!0,k(),p0?V(w,[F]):V(h,[F]),F._leaveCb=void 0,C[$]===e&&delete C[$])};C[$]=e,d?J(d,[F,n0]):n0()},clone(F){return Pt(F,n,t,r)}};return l0}function yt(e){if(ct(e))return e=Ie(e),e.children=null,e}function Er(e){return ct(e)?e.children?e.children[0]:void 0:e}function Bt(e,n){e.shapeFlag&6&&e.component?Bt(e.component.subTree,n):e.shapeFlag&128?(e.ssContent.transition=n.clone(e.ssContent),e.ssFallback.transition=n.clone(e.ssFallback)):e.transition=n}function jo(e,n=!1,t){let r=[],o=0;for(let s=0;s<e.length;s++){let a=e[s];const i=t==null?a.key:String(t)+String(a.key!=null?a.key:s);a.type===d0?(a.patchFlag&128&&o++,r=r.concat(jo(a.children,n,i))):(n||a.type!==Q0)&&r.push(i!=null?Ie(a,{key:i}):a)}if(o>1)for(let s=0;s<r.length;s++)r[s].patchFlag=-2;return r}function Uo(e){return u0(e)?{setup:e,name:e.name}:e}const gn=e=>!!e.type.__asyncLoader,ct=e=>e.type.__isKeepAlive;function Ua(e,n){Wo(e,"a",n)}function Wa(e,n){Wo(e,"da",n)}function Wo(e,n,t=T0){const r=e.__wdc||(e.__wdc=()=>{let o=t;for(;o;){if(o.isDeactivated)return;o=o.parent}return e()});if(ut(n,r,t),t){let o=t.parent;for(;o&&o.parent;)ct(o.parent.vnode)&&qa(r,n,t,o),o=o.parent}}function qa(e,n,t,r){const o=ut(n,e,r,!0);Tn(()=>{Qt(r[n],o)},t)}function ut(e,n,t=T0,r=!1){if(t){const o=t[e]||(t[e]=[]),s=n.__weh||(n.__weh=(...a)=>{if(t.isUnmounted)return;sn(),Ze(t);const i=Y0(n,t,e,a);return Ke(),an(),i});return r?o.unshift(s):o.push(s),s}}const ge=e=>(n,t=T0)=>(!En||e==="sp")&&ut(e,n,t),Xa=ge("bm"),ln=ge("m"),Ya=ge("bu"),Qa=ge("u"),qo=ge("bum"),Tn=ge("um"),Ja=ge("sp"),Za=ge("rtg"),ei=ge("rtc");function ni(e,n=T0){ut("ec",e,n)}function we(e,n){const t=N0;if(t===null)return e;const r=pt(t)||t.proxy,o=e.dirs||(e.dirs=[]);for(let s=0;s<n.length;s++){let[a,i,l,u=$0]=n[s];u0(a)&&(a={mounted:a,updated:a}),a.deep&&Le(i),o.push({dir:a,instance:r,value:i,oldValue:void 0,arg:l,modifiers:u})}return e}function Be(e,n,t,r){const o=e.dirs,s=n&&n.dirs;for(let a=0;a<o.length;a++){const i=o[a];s&&(i.oldValue=s[a].value);let l=i.dir[r];l&&(sn(),Y0(l,t,8,[e.el,i,e,n]),an())}}const Xo="components";function $n(e,n){return ri(Xo,e,!0,n)||e}const ti=Symbol();function ri(e,n,t=!0,r=!1){const o=N0||T0;if(o){const s=o.type;if(e===Xo){const i=Ti(s,!1);if(i&&(i===n||i===fe(n)||i===rt(fe(n))))return s}const a=Ir(o[e]||s[e],n)||Ir(o.appContext[e],n);return!a&&r?s:a}}function Ir(e,n){return e&&(e[n]||e[fe(n)]||e[rt(fe(n))])}function D0(e,n,t,r){let o;const s=t&&t[r];if(s0(e)||M0(e)){o=new Array(e.length);for(let a=0,i=e.length;a<i;a++)o[a]=n(e[a],a,void 0,s&&s[a])}else if(typeof e=="number"){o=new Array(e);for(let a=0;a<e;a++)o[a]=n(a+1,a,void 0,s&&s[a])}else if(I0(e))if(e[Symbol.iterator])o=Array.from(e,(a,i)=>n(a,i,void 0,s&&s[i]));else{const a=Object.keys(e);o=new Array(a.length);for(let i=0,l=a.length;i<l;i++){const u=a[i];o[i]=n(e[u],u,i,s&&s[i])}}else o=[];return t&&(t[r]=o),o}function dt(e,n,t={},r,o){if(N0.isCE||N0.parent&&gn(N0.parent)&&N0.parent.isCE)return m0("slot",n==="default"?null:{name:n},r&&r());let s=e[n];s&&s._c&&(s._d=!1),j();const a=s&&Yo(s(t)),i=Ee(d0,{key:t.key||`_${n}`},a||(r?r():[]),a&&e._===1?64:-2);return!o&&i.scopeId&&(i.slotScopeIds=[i.scopeId+"-s"]),s&&s._c&&(s._d=!0),i}function Yo(e){return e.some(n=>Jn(n)?!(n.type===Q0||n.type===d0&&!Yo(n.children)):!0)?e:null}const Tt=e=>e?cs(e)?pt(e)||e.proxy:Tt(e.parent):null,Yn=K0(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Tt(e.parent),$root:e=>Tt(e.root),$emit:e=>e.emit,$options:e=>Jo(e),$forceUpdate:e=>e.f||(e.f=()=>Mo(e.update)),$nextTick:e=>e.n||(e.n=Oo.bind(e.proxy)),$watch:e=>Va.bind(e)}),oi={get({_:e},n){const{ctx:t,setupState:r,data:o,props:s,accessCache:a,type:i,appContext:l}=e;let u;if(n[0]!=="$"){const h=a[n];if(h!==void 0)switch(h){case 1:return r[n];case 2:return o[n];case 4:return t[n];case 3:return s[n]}else{if(r!==$0&&g0(r,n))return a[n]=1,r[n];if(o!==$0&&g0(o,n))return a[n]=2,o[n];if((u=e.propsOptions[0])&&g0(u,n))return a[n]=3,s[n];if(t!==$0&&g0(t,n))return a[n]=4,t[n];Dt&&(a[n]=0)}}const c=Yn[n];let f,d;if(c)return n==="$attrs"&&W0(e,"get",n),c(e);if((f=i.__cssModules)&&(f=f[n]))return f;if(t!==$0&&g0(t,n))return a[n]=4,t[n];if(d=l.config.globalProperties,g0(d,n))return d[n]},set({_:e},n,t){const{data:r,setupState:o,ctx:s}=e;return o!==$0&&g0(o,n)?(o[n]=t,!0):r!==$0&&g0(r,n)?(r[n]=t,!0):g0(e.props,n)||n[0]==="$"&&n.slice(1)in e?!1:(s[n]=t,!0)},has({_:{data:e,setupState:n,accessCache:t,ctx:r,appContext:o,propsOptions:s}},a){let i;return!!t[a]||e!==$0&&g0(e,a)||n!==$0&&g0(n,a)||(i=s[0])&&g0(i,a)||g0(r,a)||g0(Yn,a)||g0(o.config.globalProperties,a)},defineProperty(e,n,t){return t.get!=null?e._.accessCache[n]=0:g0(t,"value")&&this.set(e,n,t.value,null),Reflect.defineProperty(e,n,t)}};let Dt=!0;function si(e){const n=Jo(e),t=e.proxy,r=e.ctx;Dt=!1,n.beforeCreate&&Sr(n.beforeCreate,e,"bc");const{data:o,computed:s,methods:a,watch:i,provide:l,inject:u,created:c,beforeMount:f,mounted:d,beforeUpdate:h,updated:w,activated:E,deactivated:m,beforeDestroy:v,beforeUnmount:S,destroyed:_,unmounted:C,render:V,renderTracked:J,renderTriggered:l0,errorCaptured:F,serverPrefetch:k,expose:$,inheritAttrs:O,components:n0,directives:p0,filters:Q}=n;if(u&&ai(u,r,null,e.appContext.config.unwrapInjectedRef),a)for(const b0 in a){const h0=a[b0];u0(h0)&&(r[b0]=h0.bind(t))}if(o){const b0=o.call(t,t);I0(b0)&&(e.data=Se(b0))}if(Dt=!0,s)for(const b0 in s){const h0=s[b0],L0=u0(h0)?h0.bind(t,t):u0(h0.get)?h0.get.bind(t,t):te,pe=!u0(h0)&&u0(h0.set)?h0.set.bind(t):te,q0=x0({get:L0,set:pe});Object.defineProperty(r,b0,{enumerable:!0,configurable:!0,get:()=>q0.value,set:z0=>q0.value=z0})}if(i)for(const b0 in i)Qo(i[b0],r,t,b0);if(l){const b0=u0(l)?l.call(t):l;Reflect.ownKeys(b0).forEach(h0=>{ee(h0,b0[h0])})}c&&Sr(c,e,"c");function E0(b0,h0){s0(h0)?h0.forEach(L0=>b0(L0.bind(t))):h0&&b0(h0.bind(t))}if(E0(Xa,f),E0(ln,d),E0(Ya,h),E0(Qa,w),E0(Ua,E),E0(Wa,m),E0(ni,F),E0(ei,J),E0(Za,l0),E0(qo,S),E0(Tn,C),E0(Ja,k),s0($))if($.length){const b0=e.exposed||(e.exposed={});$.forEach(h0=>{Object.defineProperty(b0,h0,{get:()=>t[h0],set:L0=>t[h0]=L0})})}else e.exposed||(e.exposed={});V&&e.render===te&&(e.render=V),O!=null&&(e.inheritAttrs=O),n0&&(e.components=n0),p0&&(e.directives=p0)}function ai(e,n,t=te,r=!1){s0(e)&&(e=Ot(e));for(const o in e){const s=e[o];let a;I0(s)?"default"in s?a=O0(s.from||o,s.default,!0):a=O0(s.from||o):a=O0(s),P0(a)&&r?Object.defineProperty(n,o,{enumerable:!0,configurable:!0,get:()=>a.value,set:i=>a.value=i}):n[o]=a}}function Sr(e,n,t){Y0(s0(e)?e.map(r=>r.bind(n.proxy)):e.bind(n.proxy),n,t)}function Qo(e,n,t,r){const o=r.includes(".")?Go(t,r):()=>t[r];if(M0(e)){const s=n[e];u0(s)&&Je(o,s)}else if(u0(e))Je(o,e.bind(t));else if(I0(e))if(s0(e))e.forEach(s=>Qo(s,n,t,r));else{const s=u0(e.handler)?e.handler.bind(t):n[e.handler];u0(s)&&Je(o,s,e)}}function Jo(e){const n=e.type,{mixins:t,extends:r}=n,{mixins:o,optionsCache:s,config:{optionMergeStrategies:a}}=e.appContext,i=s.get(n);let l;return i?l=i:!o.length&&!t&&!r?l=n:(l={},o.length&&o.forEach(u=>Qn(l,u,a,!0)),Qn(l,n,a)),s.set(n,l),l}function Qn(e,n,t,r=!1){const{mixins:o,extends:s}=n;s&&Qn(e,s,t,!0),o&&o.forEach(a=>Qn(e,a,t,!0));for(const a in n)if(!(r&&a==="expose")){const i=ii[a]||t&&t[a];e[a]=i?i(e[a],n[a]):n[a]}return e}const ii={data:Pr,props:De,emits:De,methods:De,computed:De,beforeCreate:H0,created:H0,beforeMount:H0,mounted:H0,beforeUpdate:H0,updated:H0,beforeDestroy:H0,beforeUnmount:H0,destroyed:H0,unmounted:H0,activated:H0,deactivated:H0,errorCaptured:H0,serverPrefetch:H0,components:De,directives:De,watch:ci,provide:Pr,inject:li};function Pr(e,n){return n?e?function(){return K0(u0(e)?e.call(this,this):e,u0(n)?n.call(this,this):n)}:n:e}function li(e,n){return De(Ot(e),Ot(n))}function Ot(e){if(s0(e)){const n={};for(let t=0;t<e.length;t++)n[e[t]]=e[t];return n}return e}function H0(e,n){return e?[...new Set([].concat(e,n))]:n}function De(e,n){return e?K0(K0(Object.create(null),e),n):n}function ci(e,n){if(!e)return n;if(!n)return e;const t=K0(Object.create(null),e);for(const r in n)t[r]=H0(e[r],n[r]);return t}function ui(e,n,t,r=!1){const o={},s={};Un(s,ft,1),e.propsDefaults=Object.create(null),Zo(e,n,o,s);for(const a in e.propsOptions[0])a in o||(o[a]=void 0);t?e.props=r?o:$o(o):e.type.props?e.props=o:e.props=s,e.attrs=s}function di(e,n,t,r){const{props:o,attrs:s,vnode:{patchFlag:a}}=e,i=w0(o),[l]=e.propsOptions;let u=!1;if((r||a>0)&&!(a&16)){if(a&8){const c=e.vnode.dynamicProps;for(let f=0;f<c.length;f++){let d=c[f];if(it(e.emitsOptions,d))continue;const h=n[d];if(l)if(g0(s,d))h!==s[d]&&(s[d]=h,u=!0);else{const w=fe(d);o[w]=Mt(l,i,w,h,e,!1)}else h!==s[d]&&(s[d]=h,u=!0)}}}else{Zo(e,n,o,s)&&(u=!0);let c;for(const f in i)(!n||!g0(n,f)&&((c=on(f))===f||!g0(n,c)))&&(l?t&&(t[f]!==void 0||t[c]!==void 0)&&(o[f]=Mt(l,i,f,void 0,e,!0)):delete o[f]);if(s!==i)for(const f in s)(!n||!g0(n,f)&&!0)&&(delete s[f],u=!0)}u&&me(e,"set","$attrs")}function Zo(e,n,t,r){const[o,s]=e.propsOptions;let a=!1,i;if(n)for(let l in n){if(Nn(l))continue;const u=n[l];let c;o&&g0(o,c=fe(l))?!s||!s.includes(c)?t[c]=u:(i||(i={}))[c]=u:it(e.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,a=!0)}if(s){const l=w0(t),u=i||$0;for(let c=0;c<s.length;c++){const f=s[c];t[f]=Mt(o,l,f,u[f],e,!g0(u,f))}}return a}function Mt(e,n,t,r,o,s){const a=e[t];if(a!=null){const i=g0(a,"default");if(i&&r===void 0){const l=a.default;if(a.type!==Function&&u0(l)){const{propsDefaults:u}=o;t in u?r=u[t]:(Ze(o),r=u[t]=l.call(null,n),Ke())}else r=l}a[0]&&(s&&!i?r=!1:a[1]&&(r===""||r===on(t))&&(r=!0))}return r}function es(e,n,t=!1){const r=n.propsCache,o=r.get(e);if(o)return o;const s=e.props,a={},i=[];let l=!1;if(!u0(e)){const c=f=>{l=!0;const[d,h]=es(f,n,!0);K0(a,d),h&&i.push(...h)};!t&&n.mixins.length&&n.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}if(!s&&!l)return r.set(e,Xe),Xe;if(s0(s))for(let c=0;c<s.length;c++){const f=fe(s[c]);Br(f)&&(a[f]=$0)}else if(s)for(const c in s){const f=fe(c);if(Br(f)){const d=s[c],h=a[f]=s0(d)||u0(d)?{type:d}:d;if(h){const w=Or(Boolean,h.type),E=Or(String,h.type);h[0]=w>-1,h[1]=E<0||w<E,(w>-1||g0(h,"default"))&&i.push(f)}}}const u=[a,i];return r.set(e,u),u}function Br(e){return e[0]!=="$"}function Tr(e){const n=e&&e.toString().match(/^\s*function (\w+)/);return n?n[1]:e===null?"null":""}function Dr(e,n){return Tr(e)===Tr(n)}function Or(e,n){return s0(n)?n.findIndex(t=>Dr(t,e)):u0(n)&&Dr(n,e)?0:-1}const ns=e=>e[0]==="_"||e==="$stable",ir=e=>s0(e)?e.map(ce):[ce(e)],fi=(e,n,t)=>{if(n._n)return n;const r=S0((...o)=>ir(n(...o)),t);return r._c=!1,r},ts=(e,n,t)=>{const r=e._ctx;for(const o in e){if(ns(o))continue;const s=e[o];if(u0(s))n[o]=fi(o,s,r);else if(s!=null){const a=ir(s);n[o]=()=>a}}},rs=(e,n)=>{const t=ir(n);e.slots.default=()=>t},pi=(e,n)=>{if(e.vnode.shapeFlag&32){const t=n._;t?(e.slots=w0(n),Un(n,"_",t)):ts(n,e.slots={})}else e.slots={},n&&rs(e,n);Un(e.slots,ft,1)},hi=(e,n,t)=>{const{vnode:r,slots:o}=e;let s=!0,a=$0;if(r.shapeFlag&32){const i=n._;i?t&&i===1?s=!1:(K0(o,n),!t&&i===1&&delete o._):(s=!n.$stable,ts(n,o)),a=n}else n&&(rs(e,n),a={default:1});if(s)for(const i in o)!ns(i)&&!(i in a)&&delete o[i]};function os(){return{app:null,config:{isNativeTag:zs,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let mi=0;function gi(e,n){return function(r,o=null){u0(r)||(r=Object.assign({},r)),o!=null&&!I0(o)&&(o=null);const s=os(),a=new Set;let i=!1;const l=s.app={_uid:mi++,_component:r,_props:o,_container:null,_context:s,_instance:null,version:Oi,get config(){return s.config},set config(u){},use(u,...c){return a.has(u)||(u&&u0(u.install)?(a.add(u),u.install(l,...c)):u0(u)&&(a.add(u),u(l,...c))),l},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),l},component(u,c){return c?(s.components[u]=c,l):s.components[u]},directive(u,c){return c?(s.directives[u]=c,l):s.directives[u]},mount(u,c,f){if(!i){const d=m0(r,o);return d.appContext=s,c&&n?n(d,u):e(d,u,f),i=!0,l._container=u,u.__vue_app__=l,pt(d.component)||d.component.proxy}},unmount(){i&&(e(null,l._container),delete l._container.__vue_app__)},provide(u,c){return s.provides[u]=c,l}};return l}}function Ft(e,n,t,r,o=!1){if(s0(e)){e.forEach((d,h)=>Ft(d,n&&(s0(n)?n[h]:n),t,r,o));return}if(gn(r)&&!o)return;const s=r.shapeFlag&4?pt(r.component)||r.component.proxy:r.el,a=o?null:s,{i,r:l}=e,u=n&&n.r,c=i.refs===$0?i.refs={}:i.refs,f=i.setupState;if(u!=null&&u!==l&&(M0(u)?(c[u]=null,g0(f,u)&&(f[u]=null)):P0(u)&&(u.value=null)),u0(l))$e(l,i,12,[a,c]);else{const d=M0(l),h=P0(l);if(d||h){const w=()=>{if(e.f){const E=d?c[l]:l.value;o?s0(E)&&Qt(E,s):s0(E)?E.includes(s)||E.push(s):d?(c[l]=[s],g0(f,l)&&(f[l]=c[l])):(l.value=[s],e.k&&(c[e.k]=l.value))}else d?(c[l]=a,g0(f,l)&&(f[l]=a)):h&&(l.value=a,e.k&&(c[e.k]=a))};a?(w.id=-1,G0(w,t)):w()}}}const G0=Ha;function bi(e){return yi(e)}function yi(e,n){const t=Ys();t.__VUE__=!0;const{insert:r,remove:o,patchProp:s,createElement:a,createText:i,createComment:l,setText:u,setElementText:c,parentNode:f,nextSibling:d,setScopeId:h=te,cloneNode:w,insertStaticContent:E}=e,m=(p,b,x,T=null,P=null,K=null,U=!1,N=null,z=!!b.dynamicChildren)=>{if(p===b)return;p&&!Me(p,b)&&(T=M(p),V0(p,P,K,!0),p=null),b.patchFlag===-2&&(z=!1,b.dynamicChildren=null);const{type:D,ref:r0,shapeFlag:e0}=b;switch(D){case lr:v(p,b,x,T);break;case Q0:S(p,b,x,T);break;case Hn:p==null&&_(b,x,T,U);break;case d0:p0(p,b,x,T,P,K,U,N,z);break;default:e0&1?J(p,b,x,T,P,K,U,N,z):e0&6?Q(p,b,x,T,P,K,U,N,z):(e0&64||e0&128)&&D.process(p,b,x,T,P,K,U,N,z,t0)}r0!=null&&P&&Ft(r0,p&&p.ref,K,b||p,!b)},v=(p,b,x,T)=>{if(p==null)r(b.el=i(b.children),x,T);else{const P=b.el=p.el;b.children!==p.children&&u(P,b.children)}},S=(p,b,x,T)=>{p==null?r(b.el=l(b.children||""),x,T):b.el=p.el},_=(p,b,x,T)=>{[p.el,p.anchor]=E(p.children,b,x,T,p.el,p.anchor)},C=({el:p,anchor:b},x,T)=>{let P;for(;p&&p!==b;)P=d(p),r(p,x,T),p=P;r(b,x,T)},V=({el:p,anchor:b})=>{let x;for(;p&&p!==b;)x=d(p),o(p),p=x;o(b)},J=(p,b,x,T,P,K,U,N,z)=>{U=U||b.type==="svg",p==null?l0(b,x,T,P,K,U,N,z):$(p,b,P,K,U,N,z)},l0=(p,b,x,T,P,K,U,N)=>{let z,D;const{type:r0,props:e0,shapeFlag:o0,transition:i0,patchFlag:y0,dirs:C0}=p;if(p.el&&w!==void 0&&y0===-1)z=p.el=w(p.el);else{if(z=p.el=a(p.type,K,e0&&e0.is,e0),o0&8?c(z,p.children):o0&16&&k(p.children,z,null,T,P,K&&r0!=="foreignObject",U,N),C0&&Be(p,null,T,"created"),e0){for(const A0 in e0)A0!=="value"&&!Nn(A0)&&s(z,A0,null,e0[A0],K,p.children,T,P,H);"value"in e0&&s(z,"value",null,e0.value),(D=e0.onVnodeBeforeMount)&&ae(D,T,p)}F(z,p,p.scopeId,U,T)}C0&&Be(p,null,T,"beforeMount");const k0=(!P||P&&!P.pendingBranch)&&i0&&!i0.persisted;k0&&i0.beforeEnter(z),r(z,b,x),((D=e0&&e0.onVnodeMounted)||k0||C0)&&G0(()=>{D&&ae(D,T,p),k0&&i0.enter(z),C0&&Be(p,null,T,"mounted")},P)},F=(p,b,x,T,P)=>{if(x&&h(p,x),T)for(let K=0;K<T.length;K++)h(p,T[K]);if(P){let K=P.subTree;if(b===K){const U=P.vnode;F(p,U,U.scopeId,U.slotScopeIds,P.parent)}}},k=(p,b,x,T,P,K,U,N,z=0)=>{for(let D=z;D<p.length;D++){const r0=p[D]=N?xe(p[D]):ce(p[D]);m(null,r0,b,x,T,P,K,U,N)}},$=(p,b,x,T,P,K,U)=>{const N=b.el=p.el;let{patchFlag:z,dynamicChildren:D,dirs:r0}=b;z|=p.patchFlag&16;const e0=p.props||$0,o0=b.props||$0;let i0;x&&Te(x,!1),(i0=o0.onVnodeBeforeUpdate)&&ae(i0,x,b,p),r0&&Be(b,p,x,"beforeUpdate"),x&&Te(x,!0);const y0=P&&b.type!=="foreignObject";if(D?O(p.dynamicChildren,D,N,x,T,y0,K):U||L0(p,b,N,null,x,T,y0,K,!1),z>0){if(z&16)n0(N,b,e0,o0,x,T,P);else if(z&2&&e0.class!==o0.class&&s(N,"class",null,o0.class,P),z&4&&s(N,"style",e0.style,o0.style,P),z&8){const C0=b.dynamicProps;for(let k0=0;k0<C0.length;k0++){const A0=C0[k0],J0=e0[A0],Ve=o0[A0];(Ve!==J0||A0==="value")&&s(N,A0,J0,Ve,P,p.children,x,T,H)}}z&1&&p.children!==b.children&&c(N,b.children)}else!U&&D==null&&n0(N,b,e0,o0,x,T,P);((i0=o0.onVnodeUpdated)||r0)&&G0(()=>{i0&&ae(i0,x,b,p),r0&&Be(b,p,x,"updated")},T)},O=(p,b,x,T,P,K,U)=>{for(let N=0;N<b.length;N++){const z=p[N],D=b[N],r0=z.el&&(z.type===d0||!Me(z,D)||z.shapeFlag&70)?f(z.el):x;m(z,D,r0,null,T,P,K,U,!0)}},n0=(p,b,x,T,P,K,U)=>{if(x!==T){for(const N in T){if(Nn(N))continue;const z=T[N],D=x[N];z!==D&&N!=="value"&&s(p,N,D,z,U,b.children,P,K,H)}if(x!==$0)for(const N in x)!Nn(N)&&!(N in T)&&s(p,N,x[N],null,U,b.children,P,K,H);"value"in T&&s(p,"value",x.value,T.value)}},p0=(p,b,x,T,P,K,U,N,z)=>{const D=b.el=p?p.el:i(""),r0=b.anchor=p?p.anchor:i("");let{patchFlag:e0,dynamicChildren:o0,slotScopeIds:i0}=b;i0&&(N=N?N.concat(i0):i0),p==null?(r(D,x,T),r(r0,x,T),k(b.children,x,r0,P,K,U,N,z)):e0>0&&e0&64&&o0&&p.dynamicChildren?(O(p.dynamicChildren,o0,x,P,K,U,N),(b.key!=null||P&&b===P.subTree)&&ss(p,b,!0)):L0(p,b,x,r0,P,K,U,N,z)},Q=(p,b,x,T,P,K,U,N,z)=>{b.slotScopeIds=N,p==null?b.shapeFlag&512?P.ctx.activate(b,x,T,U,z):F0(b,x,T,P,K,U,z):E0(p,b,z)},F0=(p,b,x,T,P,K,U)=>{const N=p.component=Ai(p,T,P);if(ct(p)&&(N.ctx.renderer=t0),Ii(N),N.asyncDep){if(P&&P.registerDep(N,b0),!p.el){const z=N.subTree=m0(Q0);S(null,z,b,x)}return}b0(N,p,b,x,P,K,U)},E0=(p,b,x)=>{const T=b.component=p.component;if(La(p,b,x))if(T.asyncDep&&!T.asyncResolved){h0(T,b,x);return}else T.next=b,Sa(T.update),T.update();else b.el=p.el,T.vnode=b},b0=(p,b,x,T,P,K,U)=>{const N=()=>{if(p.isMounted){let{next:r0,bu:e0,u:o0,parent:i0,vnode:y0}=p,C0=r0,k0;Te(p,!1),r0?(r0.el=y0.el,h0(p,r0,U)):r0=y0,e0&&Kn(e0),(k0=r0.props&&r0.props.onVnodeBeforeUpdate)&&ae(k0,i0,r0,y0),Te(p,!0);const A0=bt(p),J0=p.subTree;p.subTree=A0,m(J0,A0,f(J0.el),M(J0),p,P,K),r0.el=A0.el,C0===null&&Na(p,A0.el),o0&&G0(o0,P),(k0=r0.props&&r0.props.onVnodeUpdated)&&G0(()=>ae(k0,i0,r0,y0),P)}else{let r0;const{el:e0,props:o0}=b,{bm:i0,m:y0,parent:C0}=p,k0=gn(b);if(Te(p,!1),i0&&Kn(i0),!k0&&(r0=o0&&o0.onVnodeBeforeMount)&&ae(r0,C0,b),Te(p,!0),e0&&f0){const A0=()=>{p.subTree=bt(p),f0(e0,p.subTree,p,P,null)};k0?b.type.__asyncLoader().then(()=>!p.isUnmounted&&A0()):A0()}else{const A0=p.subTree=bt(p);m(null,A0,x,T,p,P,K),b.el=A0.el}if(y0&&G0(y0,P),!k0&&(r0=o0&&o0.onVnodeMounted)){const A0=b;G0(()=>ae(r0,C0,A0),P)}(b.shapeFlag&256||C0&&gn(C0.vnode)&&C0.vnode.shapeFlag&256)&&p.a&&G0(p.a,P),p.isMounted=!0,b=x=T=null}},z=p.effect=new er(N,()=>Mo(D),p.scope),D=p.update=()=>z.run();D.id=p.uid,Te(p,!0),D()},h0=(p,b,x)=>{b.component=p;const T=p.vnode.props;p.vnode=b,p.next=null,di(p,b.props,T,x),hi(p,b.children,x),sn(),at(void 0,p.update),an()},L0=(p,b,x,T,P,K,U,N,z=!1)=>{const D=p&&p.children,r0=p?p.shapeFlag:0,e0=b.children,{patchFlag:o0,shapeFlag:i0}=b;if(o0>0){if(o0&128){q0(D,e0,x,T,P,K,U,N,z);return}else if(o0&256){pe(D,e0,x,T,P,K,U,N,z);return}}i0&8?(r0&16&&H(D,P,K),e0!==D&&c(x,e0)):r0&16?i0&16?q0(D,e0,x,T,P,K,U,N,z):H(D,P,K,!0):(r0&8&&c(x,""),i0&16&&k(e0,x,T,P,K,U,N,z))},pe=(p,b,x,T,P,K,U,N,z)=>{p=p||Xe,b=b||Xe;const D=p.length,r0=b.length,e0=Math.min(D,r0);let o0;for(o0=0;o0<e0;o0++){const i0=b[o0]=z?xe(b[o0]):ce(b[o0]);m(p[o0],i0,x,null,P,K,U,N,z)}D>r0?H(p,P,K,!0,!1,e0):k(b,x,T,P,K,U,N,z,e0)},q0=(p,b,x,T,P,K,U,N,z)=>{let D=0;const r0=b.length;let e0=p.length-1,o0=r0-1;for(;D<=e0&&D<=o0;){const i0=p[D],y0=b[D]=z?xe(b[D]):ce(b[D]);if(Me(i0,y0))m(i0,y0,x,null,P,K,U,N,z);else break;D++}for(;D<=e0&&D<=o0;){const i0=p[e0],y0=b[o0]=z?xe(b[o0]):ce(b[o0]);if(Me(i0,y0))m(i0,y0,x,null,P,K,U,N,z);else break;e0--,o0--}if(D>e0){if(D<=o0){const i0=o0+1,y0=i0<r0?b[i0].el:T;for(;D<=o0;)m(null,b[D]=z?xe(b[D]):ce(b[D]),x,y0,P,K,U,N,z),D++}}else if(D>o0)for(;D<=e0;)V0(p[D],P,K,!0),D++;else{const i0=D,y0=D,C0=new Map;for(D=y0;D<=o0;D++){const j0=b[D]=z?xe(b[D]):ce(b[D]);j0.key!=null&&C0.set(j0.key,D)}let k0,A0=0;const J0=o0-y0+1;let Ve=!1,pr=0;const cn=new Array(J0);for(D=0;D<J0;D++)cn[D]=0;for(D=i0;D<=e0;D++){const j0=p[D];if(A0>=J0){V0(j0,P,K,!0);continue}let se;if(j0.key!=null)se=C0.get(j0.key);else for(k0=y0;k0<=o0;k0++)if(cn[k0-y0]===0&&Me(j0,b[k0])){se=k0;break}se===void 0?V0(j0,P,K,!0):(cn[se-y0]=D+1,se>=pr?pr=se:Ve=!0,m(j0,b[se],x,null,P,K,U,N,z),A0++)}const hr=Ve?vi(cn):Xe;for(k0=hr.length-1,D=J0-1;D>=0;D--){const j0=y0+D,se=b[j0],mr=j0+1<r0?b[j0+1].el:T;cn[D]===0?m(null,se,x,mr,P,K,U,N,z):Ve&&(k0<0||D!==hr[k0]?z0(se,x,mr,2):k0--)}}},z0=(p,b,x,T,P=null)=>{const{el:K,type:U,transition:N,children:z,shapeFlag:D}=p;if(D&6){z0(p.component.subTree,b,x,T);return}if(D&128){p.suspense.move(b,x,T);return}if(D&64){U.move(p,b,x,t0);return}if(U===d0){r(K,b,x);for(let e0=0;e0<z.length;e0++)z0(z[e0],b,x,T);r(p.anchor,b,x);return}if(U===Hn){C(p,b,x);return}if(T!==2&&D&1&&N)if(T===0)N.beforeEnter(K),r(K,b,x),G0(()=>N.enter(K),P);else{const{leave:e0,delayLeave:o0,afterLeave:i0}=N,y0=()=>r(K,b,x),C0=()=>{e0(K,()=>{y0(),i0&&i0()})};o0?o0(K,y0,C0):C0()}else r(K,b,x)},V0=(p,b,x,T=!1,P=!1)=>{const{type:K,props:U,ref:N,children:z,dynamicChildren:D,shapeFlag:r0,patchFlag:e0,dirs:o0}=p;if(N!=null&&Ft(N,null,x,p,!0),r0&256){b.ctx.deactivate(p);return}const i0=r0&1&&o0,y0=!gn(p);let C0;if(y0&&(C0=U&&U.onVnodeBeforeUnmount)&&ae(C0,b,p),r0&6)Z(p.component,x,T);else{if(r0&128){p.suspense.unmount(x,T);return}i0&&Be(p,null,b,"beforeUnmount"),r0&64?p.type.remove(p,b,x,P,t0,T):D&&(K!==d0||e0>0&&e0&64)?H(D,b,x,!1,!0):(K===d0&&e0&384||!P&&r0&16)&&H(z,b,x),T&&Pe(p)}(y0&&(C0=U&&U.onVnodeUnmounted)||i0)&&G0(()=>{C0&&ae(C0,b,p),i0&&Be(p,null,b,"unmounted")},x)},Pe=p=>{const{type:b,el:x,anchor:T,transition:P}=p;if(b===d0){I(x,T);return}if(b===Hn){V(p);return}const K=()=>{o(x),P&&!P.persisted&&P.afterLeave&&P.afterLeave()};if(p.shapeFlag&1&&P&&!P.persisted){const{leave:U,delayLeave:N}=P,z=()=>U(x,K);N?N(p.el,K,z):z()}else K()},I=(p,b)=>{let x;for(;p!==b;)x=d(p),o(p),p=x;o(b)},Z=(p,b,x)=>{const{bum:T,scope:P,update:K,subTree:U,um:N}=p;T&&Kn(T),P.stop(),K&&(K.active=!1,V0(U,p,b,x)),N&&G0(N,b),G0(()=>{p.isUnmounted=!0},b),b&&b.pendingBranch&&!b.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===b.pendingId&&(b.deps--,b.deps===0&&b.resolve())},H=(p,b,x,T=!1,P=!1,K=0)=>{for(let U=K;U<p.length;U++)V0(p[U],b,x,T,P)},M=p=>p.shapeFlag&6?M(p.component.subTree):p.shapeFlag&128?p.suspense.next():d(p.anchor||p.el),W=(p,b,x)=>{p==null?b._vnode&&V0(b._vnode,null,null,!0):m(b._vnode||null,p,b,null,null,null,x),No(),b._vnode=p},t0={p:m,um:V0,m:z0,r:Pe,mt:F0,mc:k,pc:L0,pbc:O,n:M,o:e};let c0,f0;return n&&([c0,f0]=n(t0)),{render:W,hydrate:c0,createApp:gi(W,c0)}}function Te({effect:e,update:n},t){e.allowRecurse=n.allowRecurse=t}function ss(e,n,t=!1){const r=e.children,o=n.children;if(s0(r)&&s0(o))for(let s=0;s<r.length;s++){const a=r[s];let i=o[s];i.shapeFlag&1&&!i.dynamicChildren&&((i.patchFlag<=0||i.patchFlag===32)&&(i=o[s]=xe(o[s]),i.el=a.el),t||ss(a,i))}}function vi(e){const n=e.slice(),t=[0];let r,o,s,a,i;const l=e.length;for(r=0;r<l;r++){const u=e[r];if(u!==0){if(o=t[t.length-1],e[o]<u){n[r]=o,t.push(r);continue}for(s=0,a=t.length-1;s<a;)i=s+a>>1,e[t[i]]<u?s=i+1:a=i;u<e[t[s]]&&(s>0&&(n[r]=t[s-1]),t[s]=r)}}for(s=t.length,a=t[s-1];s-- >0;)t[s]=a,a=n[a];return t}const _i=e=>e.__isTeleport,d0=Symbol(void 0),lr=Symbol(void 0),Q0=Symbol(void 0),Hn=Symbol(void 0),bn=[];let ne=null;function j(e=!1){bn.push(ne=e?null:[])}function wi(){bn.pop(),ne=bn[bn.length-1]||null}let An=1;function Mr(e){An+=e}function as(e){return e.dynamicChildren=An>0?ne||Xe:null,wi(),An>0&&ne&&ne.push(e),e}function q(e,n,t,r,o,s){return as(g(e,n,t,r,o,s,!0))}function Ee(e,n,t,r,o){return as(m0(e,n,t,r,o,!0))}function Jn(e){return e?e.__v_isVNode===!0:!1}function Me(e,n){return e.type===n.type&&e.key===n.key}const ft="__vInternal",is=({key:e})=>e!=null?e:null,Vn=({ref:e,ref_key:n,ref_for:t})=>e!=null?M0(e)||P0(e)||u0(e)?{i:N0,r:e,k:n,f:!!t}:e:null;function g(e,n=null,t=null,r=0,o=null,s=e===d0?0:1,a=!1,i=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:n,key:n&&is(n),ref:n&&Vn(n),scopeId:lt,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:o,dynamicChildren:null,appContext:null};return i?(cr(l,t),s&128&&e.normalize(l)):t&&(l.shapeFlag|=M0(t)?8:16),An>0&&!a&&ne&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&ne.push(l),l}const m0=xi;function xi(e,n=null,t=null,r=0,o=null,s=!1){if((!e||e===ti)&&(e=Q0),Jn(e)){const i=Ie(e,n,!0);return t&&cr(i,t),An>0&&!s&&ne&&(i.shapeFlag&6?ne[ne.indexOf(e)]=i:ne.push(i)),i.patchFlag|=-2,i}if(Di(e)&&(e=e.__vccOpts),n){n=Ci(n);let{class:i,style:l}=n;i&&!M0(i)&&(n.class=de(i)),I0(l)&&(Eo(l)&&!s0(l)&&(l=K0({},l)),n.style=He(l))}const a=M0(e)?1:Ka(e)?128:_i(e)?64:I0(e)?4:u0(e)?2:0;return g(e,n,t,r,o,a,s,!0)}function Ci(e){return e?Eo(e)||ft in e?K0({},e):e:null}function Ie(e,n,t=!1){const{props:r,ref:o,patchFlag:s,children:a}=e,i=n?ki(r||{},n):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:i,key:i&&is(i),ref:n&&n.ref?t&&o?s0(o)?o.concat(Vn(n)):[o,Vn(n)]:Vn(n):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:n&&e.type!==d0?s===-1?16:s|16:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Ie(e.ssContent),ssFallback:e.ssFallback&&Ie(e.ssFallback),el:e.el,anchor:e.anchor}}function v0(e=" ",n=0){return m0(lr,null,e,n)}function ls(e,n){const t=m0(Hn,null,e);return t.staticCount=n,t}function B0(e="",n=!1){return n?(j(),Ee(Q0,null,e)):m0(Q0,null,e)}function ce(e){return e==null||typeof e=="boolean"?m0(Q0):s0(e)?m0(d0,null,e.slice()):typeof e=="object"?xe(e):m0(lr,null,String(e))}function xe(e){return e.el===null||e.memo?e:Ie(e)}function cr(e,n){let t=0;const{shapeFlag:r}=e;if(n==null)n=null;else if(s0(n))t=16;else if(typeof n=="object")if(r&65){const o=n.default;o&&(o._c&&(o._d=!1),cr(e,o()),o._c&&(o._d=!0));return}else{t=32;const o=n._;!o&&!(ft in n)?n._ctx=N0:o===3&&N0&&(N0.slots._===1?n._=1:(n._=2,e.patchFlag|=1024))}else u0(n)?(n={default:n,_ctx:N0},t=32):(n=String(n),r&64?(t=16,n=[v0(n)]):t=8);e.children=n,e.shapeFlag|=t}function ki(...e){const n={};for(let t=0;t<e.length;t++){const r=e[t];for(const o in r)if(o==="class")n.class!==r.class&&(n.class=de([n.class,r.class]));else if(o==="style")n.style=He([n.style,r.style]);else if(nt(o)){const s=n[o],a=r[o];a&&s!==a&&!(s0(s)&&s.includes(a))&&(n[o]=s?[].concat(s,a):a)}else o!==""&&(n[o]=r[o])}return n}function ae(e,n,t,r=null){Y0(e,n,7,[t,r])}const Ri=os();let $i=0;function Ai(e,n,t){const r=e.type,o=(n?n.appContext:e.appContext)||Ri,s={uid:$i++,vnode:e,type:r,parent:n,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new Qs(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:es(r,o),emitsOptions:Ho(r,o),emit:null,emitted:null,propsDefaults:$0,inheritAttrs:r.inheritAttrs,ctx:$0,data:$0,props:$0,attrs:$0,slots:$0,refs:$0,setupState:$0,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=n?n.root:s,s.emit=Ta.bind(null,s),e.ce&&e.ce(s),s}let T0=null;const Ei=()=>T0||N0,Ze=e=>{T0=e,e.scope.on()},Ke=()=>{T0&&T0.scope.off(),T0=null};function cs(e){return e.vnode.shapeFlag&4}let En=!1;function Ii(e,n=!1){En=n;const{props:t,children:r}=e.vnode,o=cs(e);ui(e,t,o,n),pi(e,r);const s=o?Si(e,n):void 0;return En=!1,s}function Si(e,n){const t=e.type;e.accessCache=Object.create(null),e.proxy=Io(new Proxy(e.ctx,oi));const{setup:r}=t;if(r){const o=e.setupContext=r.length>1?Bi(e):null;Ze(e),sn();const s=$e(r,e,0,[e.props,o]);if(an(),Ke(),po(s)){if(s.then(Ke,Ke),n)return s.then(a=>{Fr(e,a,n)}).catch(a=>{st(a,e,0)});e.asyncDep=s}else Fr(e,s,n)}else us(e,n)}function Fr(e,n,t){u0(n)?e.type.__ssrInlineRender?e.ssrRender=n:e.render=n:I0(n)&&(e.setupState=To(n)),us(e,t)}let Lr;function us(e,n,t){const r=e.type;if(!e.render){if(!n&&Lr&&!r.render){const o=r.template;if(o){const{isCustomElement:s,compilerOptions:a}=e.appContext.config,{delimiters:i,compilerOptions:l}=r,u=K0(K0({isCustomElement:s,delimiters:i},a),l);r.render=Lr(o,u)}}e.render=r.render||te}Ze(e),sn(),si(e),an(),Ke()}function Pi(e){return new Proxy(e.attrs,{get(n,t){return W0(e,"get","$attrs"),n[t]}})}function Bi(e){const n=r=>{e.exposed=r||{}};let t;return{get attrs(){return t||(t=Pi(e))},slots:e.slots,emit:e.emit,expose:n}}function pt(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(To(Io(e.exposed)),{get(n,t){if(t in n)return n[t];if(t in Yn)return Yn[t](e)}}))}function Ti(e,n=!0){return u0(e)?e.displayName||e.name:e.name||n&&e.__name}function Di(e){return u0(e)&&"__vccOpts"in e}const x0=(e,n)=>Aa(e,n,En);function ds(e,n,t){const r=arguments.length;return r===2?I0(n)&&!s0(n)?Jn(n)?m0(e,null,[n]):m0(e,n):m0(e,null,n):(r>3?t=Array.prototype.slice.call(arguments,2):r===3&&Jn(t)&&(t=[t]),m0(e,n,t))}const Oi="3.2.37",Mi="http://www.w3.org/2000/svg",Fe=typeof document!="undefined"?document:null,Nr=Fe&&Fe.createElement("template"),Fi={insert:(e,n,t)=>{n.insertBefore(e,t||null)},remove:e=>{const n=e.parentNode;n&&n.removeChild(e)},createElement:(e,n,t,r)=>{const o=n?Fe.createElementNS(Mi,e):Fe.createElement(e,t?{is:t}:void 0);return e==="select"&&r&&r.multiple!=null&&o.setAttribute("multiple",r.multiple),o},createText:e=>Fe.createTextNode(e),createComment:e=>Fe.createComment(e),setText:(e,n)=>{e.nodeValue=n},setElementText:(e,n)=>{e.textContent=n},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Fe.querySelector(e),setScopeId(e,n){e.setAttribute(n,"")},cloneNode(e){const n=e.cloneNode(!0);return"_value"in e&&(n._value=e._value),n},insertStaticContent(e,n,t,r,o,s){const a=t?t.previousSibling:n.lastChild;if(o&&(o===s||o.nextSibling))for(;n.insertBefore(o.cloneNode(!0),t),!(o===s||!(o=o.nextSibling)););else{Nr.innerHTML=r?`<svg>${e}</svg>`:e;const i=Nr.content;if(r){const l=i.firstChild;for(;l.firstChild;)i.appendChild(l.firstChild);i.removeChild(l)}n.insertBefore(i,t)}return[a?a.nextSibling:n.firstChild,t?t.previousSibling:n.lastChild]}};function Li(e,n,t){const r=e._vtc;r&&(n=(n?[n,...r]:[...r]).join(" ")),n==null?e.removeAttribute("class"):t?e.setAttribute("class",n):e.className=n}function Ni(e,n,t){const r=e.style,o=M0(t);if(t&&!o){for(const s in t)Lt(r,s,t[s]);if(n&&!M0(n))for(const s in n)t[s]==null&&Lt(r,s,"")}else{const s=r.display;o?n!==t&&(r.cssText=t):n&&e.removeAttribute("style"),"_vod"in e&&(r.display=s)}}const Kr=/\s*!important$/;function Lt(e,n,t){if(s0(t))t.forEach(r=>Lt(e,n,r));else if(t==null&&(t=""),n.startsWith("--"))e.setProperty(n,t);else{const r=Ki(e,n);Kr.test(t)?e.setProperty(on(r),t.replace(Kr,""),"important"):e[r]=t}}const Hr=["Webkit","Moz","ms"],vt={};function Ki(e,n){const t=vt[n];if(t)return t;let r=fe(n);if(r!=="filter"&&r in e)return vt[n]=r;r=rt(r);for(let o=0;o<Hr.length;o++){const s=Hr[o]+r;if(s in e)return vt[n]=s}return n}const Vr="http://www.w3.org/1999/xlink";function Hi(e,n,t,r,o){if(r&&n.startsWith("xlink:"))t==null?e.removeAttributeNS(Vr,n.slice(6,n.length)):e.setAttributeNS(Vr,n,t);else{const s=Ns(n);t==null||s&&!uo(t)?e.removeAttribute(n):e.setAttribute(n,s?"":t)}}function Vi(e,n,t,r,o,s,a){if(n==="innerHTML"||n==="textContent"){r&&a(r,o,s),e[n]=t==null?"":t;return}if(n==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=t;const l=t==null?"":t;(e.value!==l||e.tagName==="OPTION")&&(e.value=l),t==null&&e.removeAttribute(n);return}let i=!1;if(t===""||t==null){const l=typeof e[n];l==="boolean"?t=uo(t):t==null&&l==="string"?(t="",i=!0):l==="number"&&(t=0,i=!0)}try{e[n]=t}catch{}i&&e.removeAttribute(n)}const[fs,Gi]=(()=>{let e=Date.now,n=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(e=performance.now.bind(performance));const t=navigator.userAgent.match(/firefox\/(\d+)/i);n=!!(t&&Number(t[1])<=53)}return[e,n]})();let Nt=0;const zi=Promise.resolve(),ji=()=>{Nt=0},Ui=()=>Nt||(zi.then(ji),Nt=fs());function ke(e,n,t,r){e.addEventListener(n,t,r)}function Wi(e,n,t,r){e.removeEventListener(n,t,r)}function qi(e,n,t,r,o=null){const s=e._vei||(e._vei={}),a=s[n];if(r&&a)a.value=r;else{const[i,l]=Xi(n);if(r){const u=s[n]=Yi(r,o);ke(e,i,u,l)}else a&&(Wi(e,i,a,l),s[n]=void 0)}}const Gr=/(?:Once|Passive|Capture)$/;function Xi(e){let n;if(Gr.test(e)){n={};let t;for(;t=e.match(Gr);)e=e.slice(0,e.length-t[0].length),n[t[0].toLowerCase()]=!0}return[on(e.slice(2)),n]}function Yi(e,n){const t=r=>{const o=r.timeStamp||fs();(Gi||o>=t.attached-1)&&Y0(Qi(r,t.value),n,5,[r])};return t.value=e,t.attached=Ui(),t}function Qi(e,n){if(s0(n)){const t=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{t.call(e),e._stopped=!0},n.map(r=>o=>!o._stopped&&r&&r(o))}else return n}const zr=/^on[a-z]/,Ji=(e,n,t,r,o=!1,s,a,i,l)=>{n==="class"?Li(e,r,o):n==="style"?Ni(e,t,r):nt(n)?Yt(n)||qi(e,n,t,r,a):(n[0]==="."?(n=n.slice(1),!0):n[0]==="^"?(n=n.slice(1),!1):Zi(e,n,r,o))?Vi(e,n,r,s,a,i,l):(n==="true-value"?e._trueValue=r:n==="false-value"&&(e._falseValue=r),Hi(e,n,r,o))};function Zi(e,n,t,r){return r?!!(n==="innerHTML"||n==="textContent"||n in e&&zr.test(n)&&u0(t)):n==="spellcheck"||n==="draggable"||n==="translate"||n==="form"||n==="list"&&e.tagName==="INPUT"||n==="type"&&e.tagName==="TEXTAREA"||zr.test(n)&&M0(t)?!1:n in e}const el={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};ja.props;const en=e=>{const n=e.props["onUpdate:modelValue"]||!1;return s0(n)?t=>Kn(n,t):n};function nl(e){e.target.composing=!0}function jr(e){const n=e.target;n.composing&&(n.composing=!1,n.dispatchEvent(new Event("input")))}const Kt={created(e,{modifiers:{lazy:n,trim:t,number:r}},o){e._assign=en(o);const s=r||o.props&&o.props.type==="number";ke(e,n?"change":"input",a=>{if(a.target.composing)return;let i=e.value;t&&(i=i.trim()),s&&(i=Wn(i)),e._assign(i)}),t&&ke(e,"change",()=>{e.value=e.value.trim()}),n||(ke(e,"compositionstart",nl),ke(e,"compositionend",jr),ke(e,"change",jr))},mounted(e,{value:n}){e.value=n==null?"":n},beforeUpdate(e,{value:n,modifiers:{lazy:t,trim:r,number:o}},s){if(e._assign=en(s),e.composing||document.activeElement===e&&e.type!=="range"&&(t||r&&e.value.trim()===n||(o||e.type==="number")&&Wn(e.value)===n))return;const a=n==null?"":n;e.value!==a&&(e.value=a)}},Gn={deep:!0,created(e,n,t){e._assign=en(t),ke(e,"change",()=>{const r=e._modelValue,o=In(e),s=e.checked,a=e._assign;if(s0(r)){const i=Xt(r,o),l=i!==-1;if(s&&!l)a(r.concat(o));else if(!s&&l){const u=[...r];u.splice(i,1),a(u)}}else if(rn(r)){const i=new Set(r);s?i.add(o):i.delete(o),a(i)}else a(ps(e,s))})},mounted:Ur,beforeUpdate(e,n,t){e._assign=en(t),Ur(e,n,t)}};function Ur(e,{value:n,oldValue:t},r){e._modelValue=n,s0(n)?e.checked=Xt(n,r.props.value)>-1:rn(n)?e.checked=n.has(r.props.value):n!==t&&(e.checked=Pn(n,ps(e,!0)))}const tl={deep:!0,created(e,{value:n,modifiers:{number:t}},r){const o=rn(n);ke(e,"change",()=>{const s=Array.prototype.filter.call(e.options,a=>a.selected).map(a=>t?Wn(In(a)):In(a));e._assign(e.multiple?o?new Set(s):s:s[0])}),e._assign=en(r)},mounted(e,{value:n}){Wr(e,n)},beforeUpdate(e,n,t){e._assign=en(t)},updated(e,{value:n}){Wr(e,n)}};function Wr(e,n){const t=e.multiple;if(!(t&&!s0(n)&&!rn(n))){for(let r=0,o=e.options.length;r<o;r++){const s=e.options[r],a=In(s);if(t)s0(n)?s.selected=Xt(n,a)>-1:s.selected=n.has(a);else if(Pn(In(s),n)){e.selectedIndex!==r&&(e.selectedIndex=r);return}}!t&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function In(e){return"_value"in e?e._value:e.value}function ps(e,n){const t=n?"_trueValue":"_falseValue";return t in e?e[t]:n}const rl=["ctrl","shift","alt","meta"],ol={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,n)=>rl.some(t=>e[`${t}Key`]&&!n.includes(t))},We=(e,n)=>(t,...r)=>{for(let o=0;o<n.length;o++){const s=ol[n[o]];if(s&&s(t,n))return}return e(t,...r)},sl=K0({patchProp:Ji},Fi);let qr;function al(){return qr||(qr=bi(sl))}const il=(...e)=>{const n=al().createApp(...e),{mount:t}=n;return n.mount=r=>{const o=ll(r);if(!o)return;const s=n._component;!u0(s)&&!s.render&&!s.template&&(s.template=o.innerHTML),o.innerHTML="";const a=t(o,!1,o instanceof SVGElement);return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),a},n};function ll(e){return M0(e)?document.querySelector(e):e}/*!
  * vue-router v4.1.2
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const qe=typeof window!="undefined";function cl(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const R0=Object.assign;function _t(e,n){const t={};for(const r in n){const o=n[r];t[r]=re(o)?o.map(e):e(o)}return t}const yn=()=>{},re=Array.isArray,ul=/\/$/,dl=e=>e.replace(ul,"");function wt(e,n,t="/"){let r,o={},s="",a="";const i=n.indexOf("#");let l=n.indexOf("?");return i<l&&i>=0&&(l=-1),l>-1&&(r=n.slice(0,l),s=n.slice(l+1,i>-1?i:n.length),o=e(s)),i>-1&&(r=r||n.slice(0,i),a=n.slice(i,n.length)),r=ml(r!=null?r:n,t),{fullPath:r+(s&&"?")+s+a,path:r,query:o,hash:a}}function fl(e,n){const t=n.query?e(n.query):"";return n.path+(t&&"?")+t+(n.hash||"")}function Xr(e,n){return!n||!e.toLowerCase().startsWith(n.toLowerCase())?e:e.slice(n.length)||"/"}function pl(e,n,t){const r=n.matched.length-1,o=t.matched.length-1;return r>-1&&r===o&&nn(n.matched[r],t.matched[o])&&hs(n.params,t.params)&&e(n.query)===e(t.query)&&n.hash===t.hash}function nn(e,n){return(e.aliasOf||e)===(n.aliasOf||n)}function hs(e,n){if(Object.keys(e).length!==Object.keys(n).length)return!1;for(const t in e)if(!hl(e[t],n[t]))return!1;return!0}function hl(e,n){return re(e)?Yr(e,n):re(n)?Yr(n,e):e===n}function Yr(e,n){return re(n)?e.length===n.length&&e.every((t,r)=>t===n[r]):e.length===1&&e[0]===n}function ml(e,n){if(e.startsWith("/"))return e;if(!e)return n;const t=n.split("/"),r=e.split("/");let o=t.length-1,s,a;for(s=0;s<r.length;s++)if(a=r[s],a!==".")if(a==="..")o>1&&o--;else break;return t.slice(0,o).join("/")+"/"+r.slice(s-(s===r.length?1:0)).join("/")}var Sn;(function(e){e.pop="pop",e.push="push"})(Sn||(Sn={}));var vn;(function(e){e.back="back",e.forward="forward",e.unknown=""})(vn||(vn={}));function gl(e){if(!e)if(qe){const n=document.querySelector("base");e=n&&n.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),dl(e)}const bl=/^[^#]+#/;function yl(e,n){return e.replace(bl,"#")+n}function vl(e,n){const t=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:n.behavior,left:r.left-t.left-(n.left||0),top:r.top-t.top-(n.top||0)}}const ht=()=>({left:window.pageXOffset,top:window.pageYOffset});function _l(e){let n;if("el"in e){const t=e.el,r=typeof t=="string"&&t.startsWith("#"),o=typeof t=="string"?r?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!o)return;n=vl(o,e)}else n=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(n):window.scrollTo(n.left!=null?n.left:window.pageXOffset,n.top!=null?n.top:window.pageYOffset)}function Qr(e,n){return(history.state?history.state.position-n:-1)+e}const Ht=new Map;function wl(e,n){Ht.set(e,n)}function xl(e){const n=Ht.get(e);return Ht.delete(e),n}let Cl=()=>location.protocol+"//"+location.host;function ms(e,n){const{pathname:t,search:r,hash:o}=n,s=e.indexOf("#");if(s>-1){let i=o.includes(e.slice(s))?e.slice(s).length:1,l=o.slice(i);return l[0]!=="/"&&(l="/"+l),Xr(l,"")}return Xr(t,e)+r+o}function kl(e,n,t,r){let o=[],s=[],a=null;const i=({state:d})=>{const h=ms(e,location),w=t.value,E=n.value;let m=0;if(d){if(t.value=h,n.value=d,a&&a===w){a=null;return}m=E?d.position-E.position:0}else r(h);o.forEach(v=>{v(t.value,w,{delta:m,type:Sn.pop,direction:m?m>0?vn.forward:vn.back:vn.unknown})})};function l(){a=t.value}function u(d){o.push(d);const h=()=>{const w=o.indexOf(d);w>-1&&o.splice(w,1)};return s.push(h),h}function c(){const{history:d}=window;!d.state||d.replaceState(R0({},d.state,{scroll:ht()}),"")}function f(){for(const d of s)d();s=[],window.removeEventListener("popstate",i),window.removeEventListener("beforeunload",c)}return window.addEventListener("popstate",i),window.addEventListener("beforeunload",c),{pauseListeners:l,listen:u,destroy:f}}function Jr(e,n,t,r=!1,o=!1){return{back:e,current:n,forward:t,replaced:r,position:window.history.length,scroll:o?ht():null}}function Rl(e){const{history:n,location:t}=window,r={value:ms(e,t)},o={value:n.state};o.value||s(r.value,{back:null,current:r.value,forward:null,position:n.length-1,replaced:!0,scroll:null},!0);function s(l,u,c){const f=e.indexOf("#"),d=f>-1?(t.host&&document.querySelector("base")?e:e.slice(f))+l:Cl()+e+l;try{n[c?"replaceState":"pushState"](u,"",d),o.value=u}catch(h){console.error(h),t[c?"replace":"assign"](d)}}function a(l,u){const c=R0({},n.state,Jr(o.value.back,l,o.value.forward,!0),u,{position:o.value.position});s(l,c,!0),r.value=l}function i(l,u){const c=R0({},o.value,n.state,{forward:l,scroll:ht()});s(c.current,c,!0);const f=R0({},Jr(r.value,l,null),{position:c.position+1},u);s(l,f,!1),r.value=l}return{location:r,state:o,push:i,replace:a}}function $l(e){e=gl(e);const n=Rl(e),t=kl(e,n.state,n.location,n.replace);function r(s,a=!0){a||t.pauseListeners(),history.go(s)}const o=R0({location:"",base:e,go:r,createHref:yl.bind(null,e)},n,t);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>n.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>n.state.value}),o}function Al(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),$l(e)}function El(e){return typeof e=="string"||e&&typeof e=="object"}function gs(e){return typeof e=="string"||typeof e=="symbol"}const ye={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},bs=Symbol("");var Zr;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Zr||(Zr={}));function tn(e,n){return R0(new Error,{type:e,[bs]:!0},n)}function ve(e,n){return e instanceof Error&&bs in e&&(n==null||!!(e.type&n))}const eo="[^/]+?",Il={sensitive:!1,strict:!1,start:!0,end:!0},Sl=/[.+*?^${}()[\]/\\]/g;function Pl(e,n){const t=R0({},Il,n),r=[];let o=t.start?"^":"";const s=[];for(const u of e){const c=u.length?[]:[90];t.strict&&!u.length&&(o+="/");for(let f=0;f<u.length;f++){const d=u[f];let h=40+(t.sensitive?.25:0);if(d.type===0)f||(o+="/"),o+=d.value.replace(Sl,"\\$&"),h+=40;else if(d.type===1){const{value:w,repeatable:E,optional:m,regexp:v}=d;s.push({name:w,repeatable:E,optional:m});const S=v||eo;if(S!==eo){h+=10;try{new RegExp(`(${S})`)}catch(C){throw new Error(`Invalid custom RegExp for param "${w}" (${S}): `+C.message)}}let _=E?`((?:${S})(?:/(?:${S}))*)`:`(${S})`;f||(_=m&&u.length<2?`(?:/${_})`:"/"+_),m&&(_+="?"),o+=_,h+=20,m&&(h+=-8),E&&(h+=-20),S===".*"&&(h+=-50)}c.push(h)}r.push(c)}if(t.strict&&t.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}t.strict||(o+="/?"),t.end?o+="$":t.strict&&(o+="(?:/|$)");const a=new RegExp(o,t.sensitive?"":"i");function i(u){const c=u.match(a),f={};if(!c)return null;for(let d=1;d<c.length;d++){const h=c[d]||"",w=s[d-1];f[w.name]=h&&w.repeatable?h.split("/"):h}return f}function l(u){let c="",f=!1;for(const d of e){(!f||!c.endsWith("/"))&&(c+="/"),f=!1;for(const h of d)if(h.type===0)c+=h.value;else if(h.type===1){const{value:w,repeatable:E,optional:m}=h,v=w in u?u[w]:"";if(re(v)&&!E)throw new Error(`Provided param "${w}" is an array but it is not repeatable (* or + modifiers)`);const S=re(v)?v.join("/"):v;if(!S)if(m)d.length<2&&e.length>1&&(c.endsWith("/")?c=c.slice(0,-1):f=!0);else throw new Error(`Missing required param "${w}"`);c+=S}}return c}return{re:a,score:r,keys:s,parse:i,stringify:l}}function Bl(e,n){let t=0;for(;t<e.length&&t<n.length;){const r=n[t]-e[t];if(r)return r;t++}return e.length<n.length?e.length===1&&e[0]===40+40?-1:1:e.length>n.length?n.length===1&&n[0]===40+40?1:-1:0}function Tl(e,n){let t=0;const r=e.score,o=n.score;for(;t<r.length&&t<o.length;){const s=Bl(r[t],o[t]);if(s)return s;t++}if(Math.abs(o.length-r.length)===1){if(no(r))return 1;if(no(o))return-1}return o.length-r.length}function no(e){const n=e[e.length-1];return e.length>0&&n[n.length-1]<0}const Dl={type:0,value:""},Ol=/[a-zA-Z0-9_]/;function Ml(e){if(!e)return[[]];if(e==="/")return[[Dl]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function n(h){throw new Error(`ERR (${t})/"${u}": ${h}`)}let t=0,r=t;const o=[];let s;function a(){s&&o.push(s),s=[]}let i=0,l,u="",c="";function f(){!u||(t===0?s.push({type:0,value:u}):t===1||t===2||t===3?(s.length>1&&(l==="*"||l==="+")&&n(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:u,regexp:c,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):n("Invalid state to consume buffer"),u="")}function d(){u+=l}for(;i<e.length;){if(l=e[i++],l==="\\"&&t!==2){r=t,t=4;continue}switch(t){case 0:l==="/"?(u&&f(),a()):l===":"?(f(),t=1):d();break;case 4:d(),t=r;break;case 1:l==="("?t=2:Ol.test(l)?d():(f(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&i--);break;case 2:l===")"?c[c.length-1]=="\\"?c=c.slice(0,-1)+l:t=3:c+=l;break;case 3:f(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&i--,c="";break;default:n("Unknown state");break}}return t===2&&n(`Unfinished custom RegExp for param "${u}"`),f(),a(),o}function Fl(e,n,t){const r=Pl(Ml(e.path),t),o=R0(r,{record:e,parent:n,children:[],alias:[]});return n&&!o.record.aliasOf==!n.record.aliasOf&&n.children.push(o),o}function Ll(e,n){const t=[],r=new Map;n=ro({strict:!1,end:!0,sensitive:!1},n);function o(c){return r.get(c)}function s(c,f,d){const h=!d,w=Kl(c);w.aliasOf=d&&d.record;const E=ro(n,c),m=[w];if("alias"in c){const _=typeof c.alias=="string"?[c.alias]:c.alias;for(const C of _)m.push(R0({},w,{components:d?d.record.components:w.components,path:C,aliasOf:d?d.record:w}))}let v,S;for(const _ of m){const{path:C}=_;if(f&&C[0]!=="/"){const V=f.record.path,J=V[V.length-1]==="/"?"":"/";_.path=f.record.path+(C&&J+C)}if(v=Fl(_,f,E),d?d.alias.push(v):(S=S||v,S!==v&&S.alias.push(v),h&&c.name&&!to(v)&&a(c.name)),w.children){const V=w.children;for(let J=0;J<V.length;J++)s(V[J],v,d&&d.children[J])}d=d||v,l(v)}return S?()=>{a(S)}:yn}function a(c){if(gs(c)){const f=r.get(c);f&&(r.delete(c),t.splice(t.indexOf(f),1),f.children.forEach(a),f.alias.forEach(a))}else{const f=t.indexOf(c);f>-1&&(t.splice(f,1),c.record.name&&r.delete(c.record.name),c.children.forEach(a),c.alias.forEach(a))}}function i(){return t}function l(c){let f=0;for(;f<t.length&&Tl(c,t[f])>=0&&(c.record.path!==t[f].record.path||!ys(c,t[f]));)f++;t.splice(f,0,c),c.record.name&&!to(c)&&r.set(c.record.name,c)}function u(c,f){let d,h={},w,E;if("name"in c&&c.name){if(d=r.get(c.name),!d)throw tn(1,{location:c});E=d.record.name,h=R0(Nl(f.params,d.keys.filter(S=>!S.optional).map(S=>S.name)),c.params),w=d.stringify(h)}else if("path"in c)w=c.path,d=t.find(S=>S.re.test(w)),d&&(h=d.parse(w),E=d.record.name);else{if(d=f.name?r.get(f.name):t.find(S=>S.re.test(f.path)),!d)throw tn(1,{location:c,currentLocation:f});E=d.record.name,h=R0({},f.params,c.params),w=d.stringify(h)}const m=[];let v=d;for(;v;)m.unshift(v.record),v=v.parent;return{name:E,path:w,params:h,matched:m,meta:Vl(m)}}return e.forEach(c=>s(c)),{addRoute:s,resolve:u,removeRoute:a,getRoutes:i,getRecordMatcher:o}}function Nl(e,n){const t={};for(const r of n)r in e&&(t[r]=e[r]);return t}function Kl(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Hl(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function Hl(e){const n={},t=e.props||!1;if("component"in e)n.default=t;else for(const r in e.components)n[r]=typeof t=="boolean"?t:t[r];return n}function to(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Vl(e){return e.reduce((n,t)=>R0(n,t.meta),{})}function ro(e,n){const t={};for(const r in e)t[r]=r in n?n[r]:e[r];return t}function ys(e,n){return n.children.some(t=>t===e||ys(e,t))}const vs=/#/g,Gl=/&/g,zl=/\//g,jl=/=/g,Ul=/\?/g,_s=/\+/g,Wl=/%5B/g,ql=/%5D/g,ws=/%5E/g,Xl=/%60/g,xs=/%7B/g,Yl=/%7C/g,Cs=/%7D/g,Ql=/%20/g;function ur(e){return encodeURI(""+e).replace(Yl,"|").replace(Wl,"[").replace(ql,"]")}function Jl(e){return ur(e).replace(xs,"{").replace(Cs,"}").replace(ws,"^")}function Vt(e){return ur(e).replace(_s,"%2B").replace(Ql,"+").replace(vs,"%23").replace(Gl,"%26").replace(Xl,"`").replace(xs,"{").replace(Cs,"}").replace(ws,"^")}function Zl(e){return Vt(e).replace(jl,"%3D")}function e1(e){return ur(e).replace(vs,"%23").replace(Ul,"%3F")}function n1(e){return e==null?"":e1(e).replace(zl,"%2F")}function Zn(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function t1(e){const n={};if(e===""||e==="?")return n;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let o=0;o<r.length;++o){const s=r[o].replace(_s," "),a=s.indexOf("="),i=Zn(a<0?s:s.slice(0,a)),l=a<0?null:Zn(s.slice(a+1));if(i in n){let u=n[i];re(u)||(u=n[i]=[u]),u.push(l)}else n[i]=l}return n}function oo(e){let n="";for(let t in e){const r=e[t];if(t=Zl(t),r==null){r!==void 0&&(n+=(n.length?"&":"")+t);continue}(re(r)?r.map(s=>s&&Vt(s)):[r&&Vt(r)]).forEach(s=>{s!==void 0&&(n+=(n.length?"&":"")+t,s!=null&&(n+="="+s))})}return n}function r1(e){const n={};for(const t in e){const r=e[t];r!==void 0&&(n[t]=re(r)?r.map(o=>o==null?null:""+o):r==null?r:""+r)}return n}const o1=Symbol(""),so=Symbol(""),dr=Symbol(""),fr=Symbol(""),Gt=Symbol("");function un(){let e=[];function n(r){return e.push(r),()=>{const o=e.indexOf(r);o>-1&&e.splice(o,1)}}function t(){e=[]}return{add:n,list:()=>e,reset:t}}function Ce(e,n,t,r,o){const s=r&&(r.enterCallbacks[o]=r.enterCallbacks[o]||[]);return()=>new Promise((a,i)=>{const l=f=>{f===!1?i(tn(4,{from:t,to:n})):f instanceof Error?i(f):El(f)?i(tn(2,{from:n,to:f})):(s&&r.enterCallbacks[o]===s&&typeof f=="function"&&s.push(f),a())},u=e.call(r&&r.instances[o],n,t,l);let c=Promise.resolve(u);e.length<3&&(c=c.then(l)),c.catch(f=>i(f))})}function xt(e,n,t,r){const o=[];for(const s of e)for(const a in s.components){let i=s.components[a];if(!(n!=="beforeRouteEnter"&&!s.instances[a]))if(s1(i)){const u=(i.__vccOpts||i)[n];u&&o.push(Ce(u,t,r,s,a))}else{let l=i();o.push(()=>l.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${s.path}"`));const c=cl(u)?u.default:u;s.components[a]=c;const d=(c.__vccOpts||c)[n];return d&&Ce(d,t,r,s,a)()}))}}return o}function s1(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function ao(e){const n=O0(dr),t=O0(fr),r=x0(()=>n.resolve(L(e.to))),o=x0(()=>{const{matched:l}=r.value,{length:u}=l,c=l[u-1],f=t.matched;if(!c||!f.length)return-1;const d=f.findIndex(nn.bind(null,c));if(d>-1)return d;const h=io(l[u-2]);return u>1&&io(c)===h&&f[f.length-1].path!==h?f.findIndex(nn.bind(null,l[u-2])):d}),s=x0(()=>o.value>-1&&c1(t.params,r.value.params)),a=x0(()=>o.value>-1&&o.value===t.matched.length-1&&hs(t.params,r.value.params));function i(l={}){return l1(l)?n[L(e.replace)?"replace":"push"](L(e.to)).catch(yn):Promise.resolve()}return{route:r,href:x0(()=>r.value.href),isActive:s,isExactActive:a,navigate:i}}const a1=Uo({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ao,setup(e,{slots:n}){const t=Se(ao(e)),{options:r}=O0(dr),o=x0(()=>({[lo(e.activeClass,r.linkActiveClass,"router-link-active")]:t.isActive,[lo(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const s=n.default&&n.default(t);return e.custom?s:ds("a",{"aria-current":t.isExactActive?e.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:o.value},s)}}}),i1=a1;function l1(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const n=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(n))return}return e.preventDefault&&e.preventDefault(),!0}}function c1(e,n){for(const t in n){const r=n[t],o=e[t];if(typeof r=="string"){if(r!==o)return!1}else if(!re(o)||o.length!==r.length||r.some((s,a)=>s!==o[a]))return!1}return!0}function io(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const lo=(e,n,t)=>e!=null?e:n!=null?n:t,u1=Uo({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:n,slots:t}){const r=O0(Gt),o=x0(()=>e.route||r.value),s=O0(so,0),a=x0(()=>{let u=L(s);const{matched:c}=o.value;let f;for(;(f=c[u])&&!f.components;)u++;return u}),i=x0(()=>o.value.matched[a.value]);ee(so,x0(()=>a.value+1)),ee(o1,i),ee(Gt,o);const l=_0();return Je(()=>[l.value,i.value,e.name],([u,c,f],[d,h,w])=>{c&&(c.instances[f]=u,h&&h!==c&&u&&u===d&&(c.leaveGuards.size||(c.leaveGuards=h.leaveGuards),c.updateGuards.size||(c.updateGuards=h.updateGuards))),u&&c&&(!h||!nn(c,h)||!d)&&(c.enterCallbacks[f]||[]).forEach(E=>E(u))},{flush:"post"}),()=>{const u=o.value,c=i.value,f=c&&c.components[e.name],d=e.name;if(!f)return co(t.default,{Component:f,route:u});const h=c.props[e.name],w=h?h===!0?u.params:typeof h=="function"?h(u):h:null,m=ds(f,R0({},w,n,{onVnodeUnmounted:v=>{v.component.isUnmounted&&(c.instances[d]=null)},ref:l}));return co(t.default,{Component:m,route:u})||m}}});function co(e,n){if(!e)return null;const t=e(n);return t.length===1?t[0]:t}const d1=u1;function f1(e){const n=Ll(e.routes,e),t=e.parseQuery||t1,r=e.stringifyQuery||oo,o=e.history,s=un(),a=un(),i=un(),l=ze(ye);let u=ye;qe&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const c=_t.bind(null,I=>""+I),f=_t.bind(null,n1),d=_t.bind(null,Zn);function h(I,Z){let H,M;return gs(I)?(H=n.getRecordMatcher(I),M=Z):M=I,n.addRoute(M,H)}function w(I){const Z=n.getRecordMatcher(I);Z&&n.removeRoute(Z)}function E(){return n.getRoutes().map(I=>I.record)}function m(I){return!!n.getRecordMatcher(I)}function v(I,Z){if(Z=R0({},Z||l.value),typeof I=="string"){const f0=wt(t,I,Z.path),p=n.resolve({path:f0.path},Z),b=o.createHref(f0.fullPath);return R0(f0,p,{params:d(p.params),hash:Zn(f0.hash),redirectedFrom:void 0,href:b})}let H;if("path"in I)H=R0({},I,{path:wt(t,I.path,Z.path).path});else{const f0=R0({},I.params);for(const p in f0)f0[p]==null&&delete f0[p];H=R0({},I,{params:f(I.params)}),Z.params=f(Z.params)}const M=n.resolve(H,Z),W=I.hash||"";M.params=c(d(M.params));const t0=fl(r,R0({},I,{hash:Jl(W),path:M.path})),c0=o.createHref(t0);return R0({fullPath:t0,hash:W,query:r===oo?r1(I.query):I.query||{}},M,{redirectedFrom:void 0,href:c0})}function S(I){return typeof I=="string"?wt(t,I,l.value.path):R0({},I)}function _(I,Z){if(u!==I)return tn(8,{from:Z,to:I})}function C(I){return l0(I)}function V(I){return C(R0(S(I),{replace:!0}))}function J(I){const Z=I.matched[I.matched.length-1];if(Z&&Z.redirect){const{redirect:H}=Z;let M=typeof H=="function"?H(I):H;return typeof M=="string"&&(M=M.includes("?")||M.includes("#")?M=S(M):{path:M},M.params={}),R0({query:I.query,hash:I.hash,params:"path"in M?{}:I.params},M)}}function l0(I,Z){const H=u=v(I),M=l.value,W=I.state,t0=I.force,c0=I.replace===!0,f0=J(H);if(f0)return l0(R0(S(f0),{state:W,force:t0,replace:c0}),Z||H);const p=H;p.redirectedFrom=Z;let b;return!t0&&pl(r,M,H)&&(b=tn(16,{to:p,from:M}),pe(M,M,!0,!1)),(b?Promise.resolve(b):k(p,M)).catch(x=>ve(x)?ve(x,2)?x:L0(x):b0(x,p,M)).then(x=>{if(x){if(ve(x,2))return l0(R0(S(x.to),{state:W,force:t0,replace:c0}),Z||p)}else x=O(p,M,!0,c0,W);return $(p,M,x),x})}function F(I,Z){const H=_(I,Z);return H?Promise.reject(H):Promise.resolve()}function k(I,Z){let H;const[M,W,t0]=p1(I,Z);H=xt(M.reverse(),"beforeRouteLeave",I,Z);for(const f0 of M)f0.leaveGuards.forEach(p=>{H.push(Ce(p,I,Z))});const c0=F.bind(null,I,Z);return H.push(c0),Ge(H).then(()=>{H=[];for(const f0 of s.list())H.push(Ce(f0,I,Z));return H.push(c0),Ge(H)}).then(()=>{H=xt(W,"beforeRouteUpdate",I,Z);for(const f0 of W)f0.updateGuards.forEach(p=>{H.push(Ce(p,I,Z))});return H.push(c0),Ge(H)}).then(()=>{H=[];for(const f0 of I.matched)if(f0.beforeEnter&&!Z.matched.includes(f0))if(re(f0.beforeEnter))for(const p of f0.beforeEnter)H.push(Ce(p,I,Z));else H.push(Ce(f0.beforeEnter,I,Z));return H.push(c0),Ge(H)}).then(()=>(I.matched.forEach(f0=>f0.enterCallbacks={}),H=xt(t0,"beforeRouteEnter",I,Z),H.push(c0),Ge(H))).then(()=>{H=[];for(const f0 of a.list())H.push(Ce(f0,I,Z));return H.push(c0),Ge(H)}).catch(f0=>ve(f0,8)?f0:Promise.reject(f0))}function $(I,Z,H){for(const M of i.list())M(I,Z,H)}function O(I,Z,H,M,W){const t0=_(I,Z);if(t0)return t0;const c0=Z===ye,f0=qe?history.state:{};H&&(M||c0?o.replace(I.fullPath,R0({scroll:c0&&f0&&f0.scroll},W)):o.push(I.fullPath,W)),l.value=I,pe(I,Z,H,c0),L0()}let n0;function p0(){n0||(n0=o.listen((I,Z,H)=>{if(!Pe.listening)return;const M=v(I),W=J(M);if(W){l0(R0(W,{replace:!0}),M).catch(yn);return}u=M;const t0=l.value;qe&&wl(Qr(t0.fullPath,H.delta),ht()),k(M,t0).catch(c0=>ve(c0,12)?c0:ve(c0,2)?(l0(c0.to,M).then(f0=>{ve(f0,20)&&!H.delta&&H.type===Sn.pop&&o.go(-1,!1)}).catch(yn),Promise.reject()):(H.delta&&o.go(-H.delta,!1),b0(c0,M,t0))).then(c0=>{c0=c0||O(M,t0,!1),c0&&(H.delta?o.go(-H.delta,!1):H.type===Sn.pop&&ve(c0,20)&&o.go(-1,!1)),$(M,t0,c0)}).catch(yn)}))}let Q=un(),F0=un(),E0;function b0(I,Z,H){L0(I);const M=F0.list();return M.length?M.forEach(W=>W(I,Z,H)):console.error(I),Promise.reject(I)}function h0(){return E0&&l.value!==ye?Promise.resolve():new Promise((I,Z)=>{Q.add([I,Z])})}function L0(I){return E0||(E0=!I,p0(),Q.list().forEach(([Z,H])=>I?H(I):Z()),Q.reset()),I}function pe(I,Z,H,M){const{scrollBehavior:W}=e;if(!qe||!W)return Promise.resolve();const t0=!H&&xl(Qr(I.fullPath,0))||(M||!H)&&history.state&&history.state.scroll||null;return Oo().then(()=>W(I,Z,t0)).then(c0=>c0&&_l(c0)).catch(c0=>b0(c0,I,Z))}const q0=I=>o.go(I);let z0;const V0=new Set,Pe={currentRoute:l,listening:!0,addRoute:h,removeRoute:w,hasRoute:m,getRoutes:E,resolve:v,options:e,push:C,replace:V,go:q0,back:()=>q0(-1),forward:()=>q0(1),beforeEach:s.add,beforeResolve:a.add,afterEach:i.add,onError:F0.add,isReady:h0,install(I){const Z=this;I.component("RouterLink",i1),I.component("RouterView",d1),I.config.globalProperties.$router=Z,Object.defineProperty(I.config.globalProperties,"$route",{enumerable:!0,get:()=>L(l)}),qe&&!z0&&l.value===ye&&(z0=!0,C(o.location).catch(W=>{}));const H={};for(const W in ye)H[W]=x0(()=>l.value[W]);I.provide(dr,Z),I.provide(fr,Se(H)),I.provide(Gt,l);const M=I.unmount;V0.add(I),I.unmount=function(){V0.delete(I),V0.size<1&&(u=ye,n0&&n0(),n0=null,l.value=ye,z0=!1,E0=!1),M()}}};return Pe}function Ge(e){return e.reduce((n,t)=>n.then(()=>t()),Promise.resolve())}function p1(e,n){const t=[],r=[],o=[],s=Math.max(n.matched.length,e.matched.length);for(let a=0;a<s;a++){const i=n.matched[a];i&&(e.matched.find(u=>nn(u,i))?r.push(i):t.push(i));const l=e.matched[a];l&&(n.matched.find(u=>nn(u,l))||o.push(l))}return[t,r,o]}function zt(){return O0(fr)}const h1=["id"],m1=["onClick"],g1=["onClick"],b1={class:"panelContent"},pn={__name:"Panel",props:["id","title","closed","hidden","collapsed"],setup(e){const n=e,{registerPanel:t,unregisterPanel:r,deactivatePanel:o,activatePanel:s,closePanel:a,openPanel:i}=O0("wm.actions"),l=O0("wm.panelOrder"),u=O0("wm.activePanel"),c=Se([10,0]),f=_0(!1);let d,h;const w=n.id||random().toString(36),E=x0(()=>100+l.value.indexOf(w)),m=_0(n.closed!==void 0),v=_0(n.hidden!==void 0),S=_0(n.collapsed!==void 0),_=x0(()=>w==u.value);ln(()=>{t(w,{props:n,state:{isHidden:v,isClosed:m,isCollapsed:S,isActive:_},setP:([O,n0])=>{c[X]=O,c[Y]=n0}})}),Tn(()=>{r(w)});const C=O=>{const n0=[O.clientX,O.clientY],p0=add(d,sub(n0,h));c[X]=p0[X],c[Y]=p0[Y]},V=()=>{f.value=!1,removeEventListener("mouseleave",V),removeEventListener("mouseup",V),removeEventListener("mousemove",C)},J=O=>s(w),l0=O=>{f.value=!0,d=[...c],h=[O.clientX,O.clientY],addEventListener("mousemove",C),addEventListener("mouseleave",V),addEventListener("mouseup",V)},F=O=>{a(w)},k=()=>{S.value=!S.value,o(w)},$=()=>{v.value=!v.value,o(w)};return(O,n0)=>(j(),q("section",{id:L(w),class:de(["panel",{"panel--dragging":f.value,"panel--closed":m.value,"panel--hidden":v.value,"panel--collapsed":S.value,"panel--active":L(_)}]),style:He({left:`${c[0]}px`,"--top":`${c[1]}px`,zIndex:L(E)}),onMousedown:J,onFocusin:J},[g("header",{class:"panelHeader",onMousedown:l0,onDblclick:k},[v0(a0(n.title)+" ",1),g("menu",{class:"panelHeader-menu",onMousedown:n0[1]||(n0[1]=We(()=>{},["stop"])),onFocusin:n0[2]||(n0[2]=We(()=>{},["stop"]))},[g("button",{class:"panelHeader-button panelHeader-button--hide",onClick:n0[0]||(n0[0]=We(p0=>$()||p0.target.blur(),["stop"]))},a0(v.value?"\u203F":"\u{1F441}"),1),g("button",{class:"panelHeader-button panelHeader-button--collapse",onClick:We(k,["stop"])},a0(S.value?"+":"\u2212"),9,m1),g("button",{class:"panelHeader-button panelHeader-button--close",onClick:We(F,["stop"])}," \xD7 ",8,g1)],32)],32),g("div",b1,[dt(O.$slots,"default")])],46,h1))}};const y1=g("legend",null,"Interface",-1),v1=v0(" Auto-hide windows "),_1={__name:"WindowManager",props:["autoHide"],emits:["activate"],setup(e,{emit:n}){const t=e,r=_0(),o=matchMedia("(max-width: 800px)"),s=_0(o.matches);o.addEventListener("change",d=>s.value=d.matches);const a=_0(),i=$o(new Map),l=_0([]),u=_0(),c=Se({autoHide:t.autoHide,hiddenOpacity:.4,sidebar:!1});Je(a,d=>{d=="interfacePanel"&&setTimeout(()=>{f.setP("interfacePanel",[0,30]);const h=u.value.$el.getBoundingClientRect();console.log("box",h),f.setP("interfacePanel",[innerWidth-32-h.width,50+16])})});const f={setP:(d,h)=>i.get(d).setP(h),registerPanel:(d,h)=>(console.log("registering panel",d,h),i.has(d)&&console.warn("Overriding existing panel!",d,i.get(d),h),i.set(d,h),l.value=[...l.value,d],f),unregisterPanel:d=>{i.delete(d),l.value=l.value.filter(h=>h!=d),a.value==d&&(a.value=null)},deactivatePanel:d=>{a.value==d&&(a.value=null)},activatePanel:d=>{if(c.sidebar)for(let h of i.keys())f.closePanel(h);a.value=d,l.value=[...l.value.filter(h=>h!=d),d],f.openPanel(d)},openPanel:d=>{i.get(d).state.isClosed.value=!1},closePanel:d=>{i.get(d).state.isClosed.value=!0,a.value==d&&(a.value=null)}};return ee("wm.panels",i),ee("wm.activePanel",a),ee("wm.panelOrder",l),ee("wm.actions",f),ln(()=>{n("activate",f)}),(d,h)=>(j(),q("div",{ref_key:"$wm",ref:r,class:de(["windowManager",{"windowManager--autoHide":c.autoHide,"windowManager--sidebar":s.value||c.sidebar}]),style:He({"--hiddenOpacity":c.hiddenOpacity})},[dt(d.$slots,"default"),m0(pn,{id:"interfacePanel",title:"Settings",ref_key:"$interfacePanel",ref:u,closed:""},{default:S0(()=>[g("fieldset",null,[y1,g("p",null,[g("label",null,[we(g("input",{type:"checkbox","onUpdate:modelValue":h[0]||(h[0]=w=>c.autoHide=w)},null,512),[[Gn,c.autoHide]]),v1])]),g("p",null,[g("label",null,[we(g("input",{type:"range",min:"0",max:"1",step:"0.05","onUpdate:modelValue":h[1]||(h[1]=w=>c.hiddenOpacity=w)},null,512),[[Kt,c.hiddenOpacity]]),v0(" "+a0(c.hiddenOpacity)+" Hidden opacity ",1)])])])]),_:1},512)],6))}};const w1=["onClick"],x1={__name:"PanelBar",setup(e){const n=O0("wm.panels"),{activatePanel:t}=O0("wm.actions"),r=matchMedia("(max-width: 700px)"),o=_0(!0),s=_0(r.matches);r.addEventListener("change",i=>s.value=i.matches);const a=_0();return addEventListener("click",i=>{console.log("click",a.value,i.target,o.value),a.value!=i.target&&(o.value=!0)}),(i,l)=>(j(),q(d0,null,[g("menu",{class:de(["panelBar",{"panelBar--collapsed":o.value,"panelBar--expanded":!o.value,"panelBar--canCollapse":s.value}])},[(j(!0),q(d0,null,D0(L(n).entries(),([u,c])=>(j(),q("button",{key:u,type:"button",class:de(["panelBar-panel",{[`panelBar-panel--${u}`]:!0,"panelBar-panel--active":c.state.isActive.value,"panelBar-panel--hidden":c.state.isHidden.value,"panelBar-panel--closed":c.state.isClosed.value,"panelBar-panel--collapsed":c.state.isCollapsed.value}]),onClick:f=>L(t)(u)},a0(u=="interfacePanel"?"\u2699":c.props.title),11,w1))),128))],2),s.value?(j(),q("button",{key:0,ref_key:"$menuButton",ref:a,type:"button",onClick:l[0]||(l[0]=u=>o.value=!o.value),class:"panelBar-panel panelBar-panel--hamburger"},"\u2261",512)):B0("",!0)],64))}};const C1={class:"mainBar"},k1={class:"mainNav"},R1=v0("Info"),$1=v0("Gallery"),A1=v0("Patterns"),E1=v0("Shells"),I1={__name:"App",setup(e){const n=x0(()=>zt().name||"notFound"),t=x0(()=>{var r;return(r=zt())==null?void 0:r.meta.panels});return(r,o)=>{const s=$n("router-link"),a=$n("router-view");return j(),Ee(_1,{class:"mainWM"},{default:S0(()=>[g("header",C1,[g("nav",k1,[v0(a0()+" ",1),m0(s,{to:"/"},{default:S0(()=>[R1]),_:1}),m0(s,{to:"/gallery"},{default:S0(()=>[$1]),_:1}),m0(s,{to:"/patterns"},{default:S0(()=>[A1]),_:1}),m0(s,{to:"/shells"},{default:S0(()=>[E1]),_:1})]),L(t)?(j(),Ee(x1,{key:0})):B0("",!0)]),g("main",{class:de(["mainContent",`mainContent--${L(n)}`])},[m0(a)],2)]),_:1})}}};var mt=(e,n)=>{const t=e.__vccOpts||e;for(const[r,o]of n)t[r]=o;return t};const S1={},P1={class:"scrollWrapper"},B1={class:"textWrapper"},T1=ls('<h1>Fantastic sea shells and how to grow them</h1><p class="lead"> A playground for the models described in Meinhardt&#39;s <em>&quot;The Algorithmic beauty of sea shells&quot;</em></p><p> It is easy to miss, but sea shells come in a surprising variety of patterns. Even between specimens of some species there can be a large diversity of patterns. Since it is unlikely that the pattern-generating process is very different within a species, this must mean the same dynamics can generate very different results with only minor changes. We also see some patterns show up between several species. This implies these dynamics are shared, or at least similar between shells. </p><p> Meinhardt set out to find models that could describe this rich variety in patterns. In his book he presents several variations of a 1D <em>reaction-diffusion</em> model with an <em>autocatalyst</em>, and shows how these models can describe many intricate patterns we see in real shells. </p><p> The book is filled with patterns generated by his models. I set out to write my own implementations of these models, initially for my own edification. However, though the book comes with a CD with the code to generate and play with all the plots in the book, it seems to me the models deserve an easily accessible and interactive web implementation. </p><h2>What&#39;s included</h2>',6),D1=v0(" I implemented all the models described by the author, and recreate as many of the figures from the book as possible. The book comes with a CD that includes the source code and configurations that Meinhardt used to generate these figures, and I can now use these configurations to verify my own implementations. You can see these figures in "),O1=v0("the gallery"),M1=v0(". "),F1=g("p",null," With twelve described models, numerous ways to initialize the system and modulate the parameters, and configurations for over 200 figures, it is a considerable effort to cover all cases. To keep the project manageable, some features used to render these figures will not be included. Most notably, I am not planning to implement most of the alternative rendering modes or growth. ",-1),L1=g("p",null," During this project, I found that many of the figures are generated by models not described directly in the book. These mostly seem to be slight variations of other models. Even though these models cover nearly half of the figures, I have not implemented them yet. ",-1),N1=v0(" Besides recreating the figures from the book, I wanted a playground where you can interactively see the effect of the different parameters of the models. The "),K1=v0("playground"),H1=v0(" lets you choose which substances to render and how, change parameters on the fly or choose parameter modulations. "),V1=v0(" The book also includes a chapter by guest authors "),G1=g("em",null,"P. Prusinkiewicz",-1),z1=v0(" and "),j1=g("em",null,"D. R. Fowler",-1),U1=v0(", who describe a model for the 3D shapes of shells. This model is not as deeply developed as the pattern models; the chapter focuses on describing shapes, without trying to explain why we find these shapes in nature. Because of this, and because of the simplicity of the model itself, I did not spend as much effort implementing the model for this project. Still, 3D shapes are fun, even with a limited model and "),W1=v0("implementation"),q1=v0(". I might at some point spend more time improving this, mainly so it produces nice meshes that you could download. ");function X1(e,n){const t=$n("router-link");return j(),q("div",P1,[g("div",B1,[T1,g("p",null,[D1,m0(t,{to:"/gallery"},{default:S0(()=>[O1]),_:1}),M1]),F1,L1,g("p",null,[N1,m0(t,{to:"/patterns"},{default:S0(()=>[K1]),_:1}),H1]),g("p",null,[V1,G1,z1,j1,U1,m0(t,{to:"/shells"},{default:S0(()=>[W1]),_:1}),q1])])])}var Y1=mt(S1,[["render",X1]]);const ks=window.toHex=(e=[0,0,0])=>"#"+e.map(floor).map(n=>n.toString(16).padStart(2,"0")).join(""),Q1=([e,n,t,r]=[0,0,0,0])=>`rgba(${e}, ${n}, ${t}, ${r/255} )`,J1=window.stopsToGradient=e=>`linear-gradient(to right, ${e.map(({stop:t,color:r})=>`${Q1(r)} ${t*100}%`).join(", ")})`,Rs=e=>[parseInt(e.substring(1,3),16),parseInt(e.substring(3,5),16),parseInt(e.substring(5,7),16)],Z1=(e,n)=>{let t=0;for(;e[t].stop<n&&t<e.length-1;)t++;if(t==0)return e[0].color;if(t>=e.length)return e[e.length-1].color;if(e[t].stop==n)return e[t].color;const r=e[t-1],o=e[t],s=(n-r.stop)/(o.stop-r.stop);return lerp4(r.color,o.color,s)},$s=window.modulations=[{name:"Reset",type:"reset",code:"rst",fields:[],eq:"$ = $."},{name:"Random fluctuations",type:"random",code:"rnd",fields:[{type:"number",name:"Amount",symbol:"a",field:"amount",show:!0}],eq:"$ = $ k / 100, k ~ U(-a, a)"},{name:"Sinusoidal",type:"sinusoidal",code:"sin",fields:[{type:"select",name:"Operation",symbol:"",field:"operation",default:"scale",options:["scale","add"],show:!1},{type:"number",name:"Base",symbol:"b",field:"base",default:1,show:!1,step:.1},{type:"number",name:"Power",symbol:"p",field:"power",default:1,show:!1,step:.1},{type:"number",name:"Amplitude",symbol:"a",field:"amplitude",default:1,show:!0,step:.1},{type:"number",name:"Phase",symbol:"p",field:"phase",default:0,show:!0,step:.1},{type:"number",name:"Wavelength",symbol:"m",field:"wavelength",default:5,show:!0,step:1},{type:"number",name:"Gradient",symbol:"k",field:"gradient",default:0,show:!0,step:.1},{type:"checkbox",name:"Normalize",field:"normalize",show:!0,default:!0}],eq:"$ = $ ( 1 + a \\Sin( (p + x) \\pi / m )^2 + x k / width"},{name:"Exponential distribution",type:"exponentialDistribution",code:"exp",fields:[{type:"number",name:"Exponent",field:"exponent",symbol:"e",show:!0,default:1}],eq:"$ = ???"},{name:"Set cell",type:"setCell",code:"stc",fields:[{type:"number",name:"Cell",field:"cell",symbol:"i",show:!0,default:0},{type:"number",name:"Value",field:"value",symbol:"v",show:!0,default:0}],eq:"$ = ???"},{name:"Repeated pattern",type:"pattern",code:"p1d",fields:[],eq:"$ = ???"},{name:"Step pattern",type:"step",code:"stp",fields:[],eq:"$ = ???"},{name:"Bitmap",type:"bitmap",code:"p2d",fields:[],eq:"$ = ???"}],Oe=({type:e,fields:n})=>{const t={type:e};return n.forEach(r=>{t[r.field]=r.default}),t},ue=window.modulationTypeIndex={};$s.forEach(e=>ue[e.type]=e);const oe=(e,n,t,r)=>{Object.entries(n).forEach(([o,s])=>{s.modulations.forEach(a=>{switch(a.type){case"reset":e[o].fill(Number(s.value));break;case"random":{const i=Number(a.amount);for(let l=0;l<e[o].length;++l){const u=1+r*t.bilateral()*i/100;e[o][l]*=u}}break;case"setCell":{const i=Number(a.value);let l=saw(floor(Number(a.cell)),e[o].length);e[o][l]=i}break;case"sinusoidal":{let{operation:i,base:l,amplitude:u,phase:c,wavelength:f,power:d,gradient:h,normalize:w}=a;l=Number(l),u=Number(u),c=Number(c),f=Number(f),d=Number(d),h=Number(h),w=Number(w);const E=e[o].length;for(let m=0;m<E;++m){let v=l+u*cos((m-c)*PI/f)**d+h*m/E;switch(w&&(v=v/(u+h)),i){case"add":e[o][m]+=v;break;case"scale":e[o][m]*=v;break;default:debugger}}}break;case"exponentialDistribution":{let{exponent:i}=a;i=Number(i);for(let l=0;l<e[o].length;++l){const u=exp(-i*l);e[o][l]*=u}}break;default:throw new Error(`Unknow modulator type ${a.type}`)}})})},ec=(e,n,t,r,o)=>{const{activator:s,inhibitor:a}=t,{Da:i,ra:l,ba:u,Db:c,rb:f,bb:d,s:h}=n,w=s.length;let E=ddF(s,o.wrap),m=ddF(a,o.wrap),v=new Array(w),S=new Array(w);for(let _=0;_<w;++_){const C=s[_],V=a[_];v[_]=h[_]*(C**2/V+u[_])-l[_]*C+i[_]*E[_],S[_]=h[_]*C**2-f[_]*V+c[_]*m[_]+d[_]}for(let _=0;_<w;++_)s[_]+=o.dt*v[_],a[_]+=o.dt*S[_];oe(n,r,e,o.dt)},nc=(e,n,t,r,o)=>{const{activator:s,inhibitor:a}=t,{Da:i,ra:l,ba:u,sa:c,Db:f,rb:d,bb:h,s:w}=n,E=s.length;let m=ddF(s,o.wrap),v=ddF(a,o.wrap),S=new Array(E),_=new Array(E);for(let C=0;C<E;++C){const V=s[C],J=a[C];S[C]=w[C]*(V**2/(J*(1+c[C]*V**2))+u[C])-l[C]*V+i[C]*m[C],_[C]=w[C]*V**2-d[C]*J+f[C]*v[C]+h[C]}for(let C=0;C<E;++C)s[C]+=o.dt*S[C],a[C]+=o.dt*_[C];oe(n,r,e,o.dt)},tc=(e,n,t,r,o)=>{const{activator:s,substrate:a}=t,{Da:i,ra:l,ba:u,sa:c,Db:f,rb:d,bb:h,s:w}=n,E=s.length;let m=ddF(s,o.wrap),v=ddF(a,o.wrap),S=new Array(E),_=new Array(E);for(let C=0;C<E;++C){const V=s[C],J=a[C],l0=V**2/(1+c[C]*V**2)+u[C];S[C]=w[C]*J*l0-l[C]*V+i[C]*m[C],_[C]=h[C]-w[C]*J*l0-d[C]*J+f[C]*v[C]}for(let C=0;C<E;++C)s[C]+=o.dt*S[C],a[C]+=o.dt*_[C];oe(n,r,e,o.dt)},rc=(e,n,t,r,o)=>{const{activator:s,inhibitor:a}=t,{Da:i,ra:l,ba:u,Db:c,rb:f,bb:d,s:h}=n,w=s.length;let E=ddF(s,o.wrap),m=ddF(a,o.wrap),v=new Array(w),S=new Array(w);for(let _=0;_<w;++_){const C=s[_],V=a[_];v[_]=h[_]*(C**2+u[_])-l[_]*C*V+i[_]*E[_],S[_]=h[_]*C**2-f[_]*V+c[_]*m[_]+d[_]}for(let _=0;_<w;++_)s[_]+=o.dt*v[_],a[_]+=o.dt*S[_];oe(n,r,e,o.dt)},oc=(e,n,t,r,o)=>{const{activator:s,inhibitorB:a,inhibitorC:i}=t,{Da:l,ra:u,ba:c,sa:f,Db:d,rb:h,Dc:w,rc:E,sc:m,s:v}=n,S=s.length;let _=ddF(s,o.wrap),C=ddF(a,o.wrap),V=ddF(i,o.wrap),J=new Array(S),l0=new Array(S),F=new Array(S);for(let k=0;k<S;++k){const $=s[k],O=a[k],n0=i[k];J[k]=v[k]/(f[k]+n0**2)-u[k]*$+l[k]*_[k]+c[k],l0[k]=h[k]*$-h[k]*O+d[k]*C[k],F[k]=v[k]/(m[k]+$**2/O**2)-E[k]*n0+w[k]*V[k]}for(let k=0;k<S;++k)s[k]+=o.dt*J[k],a[k]+=o.dt*l0[k],i[k]+=o.dt*F[k];oe(n,r,e,o.dt)},sc=(e,n,t,r,o)=>{const{activator:s,substrate:a,inhibitorC:i}=t,{Da:l,ra:u,ba:c,sa:f,sb:d,Db:h,rb:w,bb:E,Dc:m,rc:v,sc:S,s:_}=n,C=s.length;let V=ddF(s,o.wrap),J=ddF(a,o.wrap),l0=ddF(i,o.wrap),F=new Array(C),k=new Array(C),$=new Array(C);for(let O=0;O<C;++O){const n0=s[O],p0=a[O],Q=i[O],F0=_[O]*p0*(n0*n0+c[O])/(1+f[O]*n0*n0)/(d[O]+S[O]*Q);F[O]=F0-u[O]*n0+l[O]*V[O],k[O]=E[O]-F0-w[O]*p0+h[O]*J[O],$[O]=v[O]*(n0-Q)+m[O]*l0[O]}for(let O=0;O<C;++O)s[O]+=o.dt*F[O],a[O]+=o.dt*k[O],i[O]+=o.dt*$[O],a[O]=max(0,a[O]);oe(n,r,e,o.dt)},ac=(e,n,t,r,o)=>{const{activator:s,substrateB:a,substrateC:i}=t,{Da:l,ra:u,ba:c,sa:f,Db:d,rb:h,bb:w,Dc:E,rc:m,bc:v,s:S}=n,_=s.length;let C=ddF(s,o.wrap),V=ddF(a,o.wrap),J=ddF(i,o.wrap),l0=new Array(_),F=new Array(_),k=new Array(_);for(let $=0;$<_;++$){const O=s[$],n0=a[$],p0=i[$],Q=(O**2+c[$])/(1+f[$]*O**2);l0[$]=S[$]*Q*(n0+p0)-u[$]*O+l[$]*C[$],F[$]=w[$]-S[$]*n0*Q-h[$]*n0+d[$]*V[$],k[$]=v[$]-S[$]*p0*Q-m[$]*p0+E[$]*J[$]}for(let $=0;$<_;++$)s[$]+=o.dt*l0[$],a[$]+=o.dt*F[$],i[$]+=o.dt*k[$];oe(n,r,e,o.dt)},ic=(e,n,t,r,o)=>{const{activator:s,inhibitorB:a,inhibitorC:i}=t,{Da:l,ra:u,ba:c,Db:f,rb:d,bb:h,Dc:w,rc:E,s:m}=n,v=s.length;let S=ddF(s,o.wrap),_=ddF(a,o.wrap),C=ddF(i,o.wrap),V=new Array(v),J=new Array(v),l0=new Array(v);for(let F=0;F<v;++F){const k=s[F],$=a[F],O=i[F];V[F]=m[F]/O*(k**2/$+c[F])-u[F]*k+l[F]*S[F],J[F]=d[F]*k**2/O-d[F]*$+f[F]*_[F]+h[F],l0[F]=E[F]*(k-O)+w[F]*C[F]}for(let F=0;F<v;++F)s[F]+=o.dt*V[F],a[F]+=o.dt*J[F],i[F]+=o.dt*l0[F];oe(n,r,e,o.dt)},lc=(e,n,t,r,o)=>{const{activator:s,inhibitorB:a,inhibitorC:i}=t,{Da:l,ra:u,ba:c,Db:f,rb:d,bb:h,sb:w,Dc:E,rc:m,sc:v,s:S}=n,_=s.length;let C=ddF(s,o.wrap),V=ddF(a,o.wrap),J=ddF(i,o.wrap),l0=new Array(_),F=new Array(_),k=new Array(_);for(let $=0;$<_;++$){const O=s[$],n0=a[$],p0=i[$];l0[$]=S[$]*(O**2+c[$])/(w[$]*n0+v[$]*p0)-u[$]*O+l[$]*C[$],F[$]=d[$]*(O**2-n0)+f[$]*V[$]+h[$],k[$]=m[$]*(O-p0)+E[$]*J[$]}for(let $=0;$<_;++$)s[$]+=o.dt*l0[$],a[$]+=o.dt*F[$],i[$]+=o.dt*k[$];oe(n,r,e,o.dt)};let Ct=-1;const cc=(e,n,t,r,o)=>{const{activator:s,inhibitor:a,hormone:i}=t,l=s.length;let u=ddF(s,o.wrap),c=ddF(a,o.wrap),f=new Array(l),d=new Array(l),h=new Array(l);const{s:w,Da:E,ra:m,ba:v,Db:S,rb:_,bb:C,sb:V,rc:J}=n;let l0=0;for(let k=0;k<l;++k)l0+=s[k];const F=Ct==-1?i[0]:Ct;for(let k=0;k<l;++k){const $=s[k],O=a[k],n0=.25,p0=w[k]*$*$/(1+n0*$*$)+v[k];f[k]=p0/(V[k]+O)+-m[k]*$+E[k]*u[k],d[k]=p0+-(_[k]/F)*O+S[k]*c[k]+C[k],h[k]=J[k]*l0/l+-J[k]*i[k]}Ct=i[0];for(let k=0;k<l;++k)s[k]+=o.dt*f[k],a[k]+=o.dt*d[k],i[k]+=o.dt*h[k];oe(n,r,e,o.dt)},uc=(e,n,t,r,o)=>{const{activator:s,inhibitorB:a,inhibitorD:i,hormone:l}=t,u=s.length;let c=ddF(s,o.wrap),f=ddF(a,o.wrap),d=ddF(i,o.wrap),h=new Array(u),w=new Array(u),E=new Array(u),m=new Array(u);const{s:v,Da:S,ra:_,ba:C,Db:V,rb:J,bb:l0,sb:F,rc:k,rd:$,Dd:O,sd:n0}=n;let p0=0;for(let Q=0;Q<u;++Q)p0+=s[Q];for(let Q=0;Q<u;++Q){const F0=s[Q],E0=a[Q],b0=l[Q],h0=i[Q];h[Q]=v[Q]*(F0**2/(F[Q]+n0[Q]*h0**2+E0)+C[Q])-_[Q]*F0+S[Q]*c[Q],w[Q]=v[Q]*F0**2-J[Q]/b0*E0+V[Q]*f[Q]+l0[Q],E[Q]=$[Q]*(F0-h0)+O[Q]*d[Q],m[Q]=k[Q]*p0/u-k[Q]*b0}for(let Q=0;Q<u;++Q)s[Q]+=o.dt*h[Q],a[Q]+=o.dt*w[Q],i[Q]+=o.dt*E[Q],l[Q]+=o.dt*m[Q];oe(n,r,e,o.dt)};var dc=[{name:"SP48F.PRM",content:`Nautilus, merging waves by diffusion, movie\r
 400,  10,   1,  35,  19,   7,  24,   1,   2,   0\r
  65,  34,   0,   0,  6.0000,  1.0000,  0.0300\r
  0.0300,  0.1000,  0.0040,  4.0000,  0.0000,  1.0000,  1.0000\r
  0.1500,  0.0000,  0.0300,  0.0000,  0.0000,  0.0000,  2.5000\r
   0.000, 100.000,   1.000,   0,   0,   2\r
 220.000, 200.000,   4.000,   0,   0,   2\r
 220.000, 200.000,   0.300,   0,  12,   0\r
ab,   0.00,   0.00,   0.00,   0.00, 9 \r
5,0,15,0,0\r
9\r
`},{name:"SP52A.PRM",content:`A single long-lasting and long-ranging inhibitor is insufficient \r
 250,  12,   1,  20,  19,   1,  21,   1,   2,   0\r
   2,   2,  80,   2, 24.0000,  0.0000,  0.0200\r
  0.0100,  0.0500,  0.1000,  0.0000,  0.0000,  1.5000,  1.5000\r
  0.4000,  0.0800,  0.0000,  0.0000,  0.0000,  1.5000,  1.5000\r
   0.000, 100.000, 100.000,   0,  14,   2\r
   0.000, 150.000,   1.000,   0,   2,   4\r
   0.000, 150.000,   1.000,   0,  52,   4\r
ab,  24.00,   0.00,   0.00,   0.16,9\r
5,0,15,1,1\r
9\r
`},{name:"sp1.prm",content:`Stable periodic pattern\r
  45,  12,   1,  20,   1,   1,  21,   3,   2,   0\r
   2,   2,   0,   0, 16.0000,  0.0000, 12.0000\r
  0.0100,  0.0500,  0.0100,  0.0000,  0.0000,  1.5000,  1.5000\r
  0.4000,  0.0800,  0.0000,  0.0000,  0.0000,  1.5000,  1.5000\r
   0.000, 100.000, 100.000,   0,  14,   2\r
  60.000, 270.000,   0.500,   0,   2,   0\r
  60.000,  70.000,   0.500,   0,  12,   0\r
ab,  16.00,   0.00,   0.00,   0.16,9\r
5,0,15,1,1\r
12\r
`},{name:"sp122.prm",content:`Annabaena\r
 240, 300,   1,   5,  19,   1,  21,   3,   2,   3\r
   1,   2,   0,   0,  6.0000,  0.0000, 12.0000\r
  0.0000,  0.0200,  0.0500,  0.0000,  0.0000,  0.0000,  0.0000\r
  0.3000,  0.0300,  0.0000,  0.0000,  0.0000,  1.0000,  1.0000\r
   0.000, 100.000, 100.000,   0,  14,   2\r
   0.000, 150.000,   0.400,   0,  22,   4\r
   0.000, 150.000,   0.300,   0,  52,   4\r
ba,   6.00,   0.00,   0.00,   0.20,9\r
5,0,15,1,2\r
9\r
`},{name:"sp125.prm",content:`Hydra: hypostome (blue), tentacles (red), foot (black), source density (green)\r
  50, 800,   1,   7,  19, 126, 126,   3,   7,   2\r
   2,   3,   0,   0, 12.0000,  0.0000, 12.0000\r
  0.0015,  0.0030,  0.0500,  0.0000,  0.0000,  1.3000,  1.0000\r
  0.2000,  0.0060,  0.0000,  0.0000,  0.0000,  0.0000,  1.8000\r
  0.0020,  0.0001,  0.0001,  0.0001,  0.0002, -0.0500,  0.2000\r
  0.0050,  0.0200,  0.0050,  0.0100,  0.0200,  0.0000,  0.0000\r
  0.2000,  0.0300,  0.0040,  0.0000,  0.2000,  0.0000,  0.1000\r
  0.0030,  0.0020,  0.0100,  0.0000,  0.0000,  0.0000,  1.3000\r
  0.2000,  0.0030,  0.0001,  0.0000,  0.0000,  0.0000,  2.0000\r
   0.000, 100.000,   1.000,   0,  14,   2\r
   0.000, 150.000,   0.400,   0,   2,   1\r
   0.000, 150.000,   0.050,   0,   2,   1\r
   0.000, 150.000,   0.500,   0,   1,   1\r
   0.000, 150.000,   1.000,   0,   4,   1\r
   0.000, 150.000,   0.300,   0,  12,   0\r
   0.000, 150.000,   0.500,   0,  13,   0\r
   0.000, 150.000,   0.030,   0,   3,   0\r
adcf,  12.00,   0.00,   0.00,   0.30,9\r
0,0,15,0,3\r
12\r
`},{name:"sp125a.prm",content:`Head (blue) and foot (black) appear at opposite ends of the field\r
  60, 100,   1,  16,  19, 126, 126,   1,   7,   0\r
   1,   3,   0,   0, 24.0000,  0.0000, 12.0000\r
  0.0015,  0.0030,  0.0500,  0.0000,  0.0000,  1.3000,  1.0000\r
  0.2000,  0.0050,  0.0000,  0.0000,  0.0000,  0.0000,  1.8000\r
  0.0020,  0.0001,  0.0001,  0.0001,  0.0002, -0.0100,  1.0000\r
  0.0050,  0.0200,  0.0050,  0.0100,  0.0200,  0.0000,  0.0000\r
  0.2000,  0.0300,  0.0040,  0.0000,  0.2000,  0.0000,  0.1000\r
  0.0030,  0.0020,  0.0100,  0.0000,  0.0000,  0.0000,  1.3000\r
  0.2000,  0.0030,  0.0001,  0.0000,  0.0000,  0.0000,  2.0000\r
   0.000, 100.000,   1.000,   0,  14,   2\r
   0.000, 150.000,   0.700,   0,   2,   1\r
   0.000, 150.000,   0.050,   0,   2,   1\r
   0.000, 150.000,   1.300,   0,   1,   1\r
   0.000, 150.000,   1.500,   0,   4,   1\r
   0.000, 150.000,   0.300,   0,  12,   0\r
   0.000, 150.000,   0.800,   0,  13,   0\r
   0.000, 150.000,   0.030,   0,   3,   0\r
afc,  24.00,   0.00,   0.00,   0.30,9\r
0,0,15,0,3\r
12\r
`},{name:"sp125c.prm",content:`For demonstration for regeneration with polarity reversal (see gt125b)\r
  30,  50,   1,  25,   3,   1,  21,   0,   2,   0\r
   2,   2,   0,   0, 20.0000,  0.0000, 12.0000\r
  0.0030,  0.0030,  0.0200,  0.0000,  0.0000,  3.0000,  0.0000\r
  0.4000,  0.0070,  0.0000,  0.0000,  0.0000,  1.4000,  1.0000\r
   0.000, 100.000, 100.000,   0,  14,   2\r
   0.000, 150.000,   0.800,   0,   2,   5\r
   0.000, 150.000,   0.800,   0,  12,   5\r
ab,  20.00,   0.00,   0.00,   0.25,9\r
0,0,15,1,1\r
9\r
`},{name:"sp125d.prm",content:`The inhibitor (red) has a feedback on the source density (green)\r
  72, 200,  10,  18,   3,   1, 127,   3,   3,   3\r
   1,   3,   0,   0, 12.0000,  0.0000, 12.0000\r
  0.0015,  0.0030,  0.0500,  0.0000,  0.0000,  2.0000,  1.0000\r
  0.3000,  0.0060,  0.0000,  0.0000,  0.0000,  0.0500,  1.0000\r
  0.0000,  0.0005,  0.0000,  0.0000,  0.0020,  6.0000,  6.0000\r
   0.000, 100.000,   1.000,   0,  14,   2\r
  50.000, 150.000,   0.400,   0,   2,   4\r
  50.000, 150.000,   0.020,   0,  12,   4\r
  50.000, 150.000,   0.100,   0,   1,   4\r
acb,  12.00,   0.00,   0.00,   0.30,9\r
3,0,15,1,3\r
9\r
`},{name:"sp125e.prm",content:`Aktivator (green) has a feedback on the source density (blue)\r
  56, 200,  10,  18,   3, 126, 127,   0,   3,   3\r
   1,   3,   0,   0, 14.0000,  0.0000, 12.0000\r
  0.0030,  0.0030,  0.0700,  0.0000,  0.0000,  1.3000,  1.0000\r
  0.3000,  0.0060,  0.0000,  0.0000,  0.0000,  0.0500,  1.0000\r
  0.0100,  0.0005,  0.0000,  0.0005,  0.0000,  0.0100,  1.0000\r
   0.000, 100.000,   1.000,   0,  14,   2\r
  50.000, 150.000,   0.800,   0,   2,   4\r
  50.000, 150.000,   0.200,   0,  12,   4\r
  50.000, 150.000,   1.500,   0,   1,   4\r
acb,  14.00,   0.00,   0.00,   0.30,9\r
3,0,15,1,3\r
9\r
`},{name:"sp125f.prm",content:`Mutual induction and local exclusion: controlled neighborhood, continue with C\r
  36,1000,   1,   4,  19,   1, 128,   1,   8,   6\r
   1,   0,   0,   0, 24.0000, 30.0000,  0.0000\r
  0.0020,  0.0100,  0.1000,  0.1000,  0.0000,  1.5000,  1.0000\r
  0.4000,  0.0150,  0.0000,  0.1000,  0.0000,  0.0000,  0.5000\r
  0.0020,  0.0100,  0.1000,  0.1000,  0.0000,  1.0000,  1.0000\r
  0.4000,  0.0150,  0.0000,  0.1000,  0.0000,  0.0000,  1.0000\r
  0.0020,  0.0100,  0.0500,  0.1000,  0.0000,  0.5000,  0.5000\r
  0.4000,  0.0150,  0.0005,  0.1000,  0.0000,  0.0000,  0.5000\r
  0.0020,  0.0100,  0.1000,  0.1000,  0.0000,  0.0000,  1.0000\r
  0.4000,  0.0150,  0.0000,  0.1000,  0.0000,  0.0000,  0.5000\r
   0.000,   0.080,   0.000,   0,   0,   0\r
   0.000, 300.000,   1.000,   0,   1,   4\r
   5.000, 150.000,   3.000,   0,  41,   4\r
   0.000, 300.000,   1.000,   0,   2,   4\r
   0.000, 150.000,   3.000,   0,  42,   4\r
   0.000, 300.000,   1.000,   0,  12,   4\r
   0.000, 150.000,   3.000,   0,  52,   4\r
   0.000, 300.000,   1.000,   0,   6,   4\r
   0.000, 150.000,   3.000,   0,  46,   4\r
abcdefgh,  24.00,   0.00,   0.00,   0.16,9\r
5,0,15,1,1\r
9\r
`},{name:"sp127.prm",content:`Organizer by inhibition of an inhibition: Chordin, BMP and ADMP\r
 100, 200,   1,  24,  17,   7,  27,   1,   3,   0\r
  16,   2,   0,   0, 12.0000,  0.0000, 12.0000\r
  0.0020,  0.0030,  0.0020,  0.2000,  0.0000,  1.0000,  1.0000\r
  0.4000,  0.0050,  0.0000,  0.0000,  0.0000,  0.0000,  1.0000\r
  0.0030,  0.0100,  0.0000,  0.2000,  0.0000,  1.0000,  1.0000\r
 320.000, 180.000, 400.000,   0,  33,   6\r
 320.000, 180.000,   1.200,   0,   2,   4\r
 320.000, 180.000,   1.500,   0,  32,   4\r
 320.000, 180.000,   2.000,   0,   1,   4\r
acbs,  12.00,   0.00,   0.00,   0.25,9\r
5,0,15,1,1\r
9\r
`},{name:"sp128.prm",content:`A gene with threshold under morphogen control\r
  80,  40,   1,  30,  19, 124, 124,   0,   2,   0\r
   2,   2,   0,   0, 18.0000,  0.0001, 12.0000\r
  0.0000,  0.0500,  0.0090,  0.2000,  0.0000,  0.0000,  0.0000\r
  0.4000,  0.0800,  0.0000,  0.0000,  0.0000,  0.8000,  1.0000\r
  20.000, 100.000,  50.000,   0,  12,   6\r
   0.000, 100.000,   2.000,   0,  32,   6\r
   0.000, 100.000, 240.000,   0,  42,   6\r
ba,  18.00,   0.00,   0.00,   0.16,9\r
7,0,15,0,0\r
9\r
`},{name:"sp128a.prm",content:`5 autoregulatory and competing genes in a single cell; switch -> ba=.3\r
 100,   4,   1,   5,  21, 123, 123,   2,   3,   0\r
  11,   2,   0,   0, 80.0000,  0.0000, 12.0000\r
  0.0000,  0.0300,  0.0000,  0.0000,  0.0000,  0.5000,  0.4000\r
  0.0000,  0.0000,  0.0000,  0.0000,  0.0000,  1.0000,  0.0000\r
  0.0000,  0.1000,  0.0000,  0.0000,  0.0000,  1.0000,  0.5000\r
   0.000, 100.000, 100.000,   0,   1,   1\r
   5.000, 100.000,   2.500,   0,   0,   7\r
   5.000, 300.000,   2.500,   0,  12,   7\r
   0.000, 100.000,   1.500,   0,  12,   7\r
abc,  80.00,   0.00,   0.00,   0.20,9\r
3,0,15,1,1\r
9\r
`},{name:"sp129.prm",content:`Four genes under the influence of a morphogen gradient\r
 130,  50,   1,  32,  19, 121, 121,   2,   6,   0\r
  11,   2,   0,   0, 16.0000,  0.0000, 12.0000\r
  0.0000,  0.0100,  0.0010,  1.0000,  0.3500,  0.5000,  0.9000\r
  0.0000,  0.0100,  0.0000,  1.4200,  0.0480,  1.0000,  0.0000\r
  0.0000,  0.0100,  0.0000,  2.0000,  0.0000,  1.0000,  0.0000\r
  0.0000,  0.0100,  0.0000,  2.8000,  0.0000,  0.0000,  0.0000\r
  0.0000,  0.0150,  0.0000,  0.0000,  0.0000,  0.0000,  0.7000\r
  0.0000,  0.0000,  0.0000,  0.0000,  0.0000,  0.0000,  0.0000\r
   0.000, 100.000, 100.000,   0,   1,   1\r
   0.000,  80.000,   1.600,   0,  21,   4\r
   0.000, 160.000,   1.600,   0,  32,   4\r
   0.000, 240.000,   1.600,   0,  23,   4\r
   0.000, 320.000,   1.600,   0,  24,   4\r
   0.000, 380.000,   1.600,   0,  13,   4\r
   0.000, 400.000, 400.000,   0,  42,   4\r
fabcd,  16.00,   0.00,   0.00,   0.20,9\r
3,0,15,0,1\r
9\r
`},{name:"sp129a.prm",content:`Four genes under the influence of a morphogen gradient\r
  10, 400,   1,  32,  25, 121, 121,   2,   6,   0\r
  11,   2,   0,   0, 16.0000,  0.0000, 12.0000\r
  0.0000,  0.0100,  0.0010,  1.0000,  0.3500,  0.5000,  0.9000\r
  0.0000,  0.0100,  0.0000,  1.4200,  0.0480,  1.0000,  0.0000\r
  0.0000,  0.0100,  0.0000,  2.0000,  0.0000,  1.0000,  0.0000\r
  0.0000,  0.0100,  0.0000,  2.8000,  0.0000,  0.0000,  0.0000\r
  0.0000,  0.0150,  0.0000,  0.0000,  0.0000,  0.0000,  0.7000\r
  0.0000,  0.0000,  0.0000,  0.0000,  0.0000,  0.0000,  0.0000\r
   0.000, 100.000, 100.000,   0,   1,   1\r
  50.000, 440.000,   2.500,   0,   1,   4\r
  50.000, 440.000,   2.500,   0,  12,   4\r
  50.000, 440.000,   2.500,   0,  11,   4\r
  50.000, 440.000,   2.500,   0,   6,   4\r
  50.000, 440.000,   2.500,   0,  13,   4\r
  50.000, 440.000,   2.500,   0,   2,   4\r
abcd,   0.00,   0.00,   0.00,   0.20,   0.00\r
3,0,15,30,40\r
12\r
`},{name:"sp129b.prm",content:`All-or-non JAK/STAT activation during oocyte development\r
 100, 250,   1,  24,  19, 125, 125,   0,   5,   0\r
   2,   2,   0,   0, 24.0000, 25.0000, 12.0000\r
  0.0000,  0.0100,  0.0400,  0.1000,  0.0000,  0.0000,  0.0000\r
  0.1000,  0.0060,  0.0100,  0.0000, 33.0000,  0.0000,  0.0000\r
  0.0000,  0.0000,  0.0000,  1.0000, 10.0000,  0.0000,  0.0000\r
  0.0000,  0.0001,  0.0001,  4.0000, 15.0000,  0.2000,  0.0000\r
  0.0000,  0.0005,  0.0020,  0.1000,  0.5000,  0.0000,  0.0000\r
   6.667, 533.333,  13.333,  19,   2,   6\r
   0.000, 130.000,   4.000,   0,  32,   4\r
   0.000, 130.000,   8.000,   0,  47,   3\r
   0.000, 130.000,   6.000,   0,  22,   0\r
   0.000, 130.000,   6.000,   0,  61,   3\r
   0.000, 130.000,   1.200,   0,  60,   2\r
edbca,  24.00,   0.00,   0.00,   0.16,9\r
7,0,15,2,0\r
9\r
`},{name:"sp133.prm",content:`Helical arrangement, depletion and inhbition\r
 450, 200,   1,  24,  17,   5,  51,   1,   3,   0\r
  99,   2,   0,   0, 12.0000,  0.0000,  5.0000\r
  0.0010,  0.0020,  0.4000,  0.0000,  0.0000,  1.0000,  1.0000\r
  0.4000,  0.0000,  0.0030,  1.0000,  0.0000,  0.0000,  1.0000\r
  0.0002,  0.0002,  0.0001,  5.0000,  0.0000,  1.0000,  1.0000\r
 320.000, 100.000,   1.000,   0,   0,   2\r
 400.000, 100.000,   0.200,   0,   0,   6\r
 400.000, 100.000,   0.500,   0,  32,   6\r
 400.000, 100.000,   0.600,   0,   2,   6\r
abc,  12.00,   0.00,   0.00,   0.20,9\r
3,0,15,0,0\r
9\r
`},{name:"sp133a.prm",content:`Helical arrangement, long range by auxin depletion\r
 450, 100,   1,  24,  14,   5,  51,   1,   3,   0\r
  99,   2,   0,   0, 12.0000,  0.0000,  5.0000\r
  0.0020,  0.0040,  0.3000,  0.0000,  0.0000,  1.0000,  1.0000\r
  0.4000,  0.0000,  0.0030,  1.0000,  0.0000,  0.0000,  1.0000\r
  0.0003,  0.0001,  0.0000, 10.0000,  0.0000,  1.0000,  1.0000\r
 320.000, 100.000,   1.000,   0,   0,   2\r
 120.000,  20.000,   0.300,   0,   0,   2\r
 120.000,  20.000,   0.200,   0,  12,   2\r
 120.000,  20.000,   0.500,   0,   2,   2\r
acb,  12.00,   0.00,   0.00,   0.20,12\r
3,0,15,0,0\r
12\r
`},{name:"sp133a1.prm",content:`Helical arrangement, long range: depletion of auxin; movie\r
 450, 100,   1,  24,  16,   5,  51,   1,   3,   0\r
  99,   2,   0,   0, 12.0000,  0.0000,  5.0000\r
  0.0010,  0.0030,  0.3000,  0.0000,  0.0000,  1.0000,  1.0000\r
  0.4000,  0.0000,  0.0030,  1.0000,  0.0000,  0.0000,  1.0000\r
  0.0003,  0.0001,  0.0001, 10.0000,  0.0000,  1.0000,  1.0000\r
 320.000, 100.000,   1.000,   0,   0,   2\r
 320.000, 240.000,   0.200,   0,   6,   2\r
 320.000, 240.000,   0.300,   0,  12,   0\r
 320.000, 240.000,   0.300,   0,   2,   0\r
acb,   0.00,   0.00,   0.00,   1.00, 9 \r
3,0,15,0,0\r
9\r
`},{name:"sp133a2.prm",content:`Helical arrangement, plot outside-in\r
 300, 100,   1,  24,  27,   5,  51,   1,   3,   0\r
  99,   2,   0,   0, 12.0000,  0.0000,  5.0000\r
  0.0010,  0.0030,  0.3000,  0.0000,  0.0000,  1.0000,  1.0000\r
  0.4000,  0.0000,  0.0030,  1.0000,  0.0000,  0.0000,  1.0000\r
  0.0003,  0.0001,  0.0001, 10.0000,  0.0000,  1.0000,  1.0000\r
 320.000, 100.000,   1.000,   0,   0,   2\r
 320.000, 240.000,   0.400,   0,   0,   2\r
 320.000, 240.000,   0.300,   0,  12,   0\r
 320.000, 240.000,   0.700,   0,   2,   0\r
acb,  12.00,   0.00,   0.00,   1.00,12\r
3,0,15,0,0\r
12\r
`},{name:"sp133a3.prm",content:`Helical arrangement, plot as a tranparent cylinder\r
 450, 200,   1,  24,  28,   5,  51,   1,   3,   0\r
  99,   2,   0,   0,  3.0000,  0.0000,  5.0000\r
  0.0010,  0.0040,  0.4000,  0.0000,  0.0000,  1.0000,  1.0000\r
  0.4000,  0.0000,  0.0030,  1.0000,  0.0000,  0.0000,  1.0000\r
  0.0002,  0.0002,  0.0001, 10.0000,  0.0000,  1.0000,  1.0000\r
 320.000, 100.000,   1.000,   0,   0,   2\r
 400.000,  30.000,   1.000,   0,   0,   1\r
 240.000, 240.000,   0.250,   0,  12,   1\r
 240.000, 240.000,   0.500,   0,   2,   1\r
a,   3.00,   0.00,   0.00,   0.20,9\r
3,0,15,0,0\r
12\r
`},{name:"sp133b.prm",content:`Opposite (distichous) arrangement\r
 455, 100,   1,  24,  14,   5,  51,   1,   3,   0\r
  99,   2,   0,   0, 12.0000,  0.0000,  5.0000\r
  0.0010,  0.0030,  0.4000,  0.0000,  0.0000,  1.0000,  1.0000\r
  0.4000,  0.0000,  0.0030,  1.0000,  0.0000,  0.0000,  1.0000\r
  0.0050,  0.0002,  0.0001, 10.0000,  0.0000,  1.0000,  1.0000\r
 320.000, 100.000,   1.000,   0,   0,   2\r
 120.000, 240.000,   0.200,   0,   0,   2\r
 120.000, 240.000,   0.250,   0,  12,   0\r
 120.000, 240.000,   0.500,   0,   2,   0\r
acb,  12.00,   0.00,   0.00,   1.00,12\r
3,0,15,0,0\r
12\r
`},{name:"sp133b1.prm",content:`Opposite (distichous) arrangement, movie\r
 400, 100,   1,  24,  16,   5,  51,   1,   3,   0\r
  99,   2,   0,   0,  6.0000,  0.0000,  5.0000\r
  0.0010,  0.0030,  0.2000,  0.0000,  0.0000,  1.0000,  1.0000\r
  0.4000,  0.0000,  0.0030,  1.0000,  0.0000,  0.0000,  1.0000\r
  0.0050,  0.0002,  0.0001, 10.0000,  0.0000,  1.0000,  1.0000\r
 320.000, 100.000,   1.000,   0,   0,   2\r
 320.000, 240.000,   0.080,   0,   6,   2\r
 320.000, 240.000,   0.200,   0,  12,   0\r
 320.000, 240.000,   0.500,   0,   2,   0\r
acb,   6.00,   0.00,   0.00,   1.00,9\r
3,0,15,0,0\r
9\r
`},{name:"sp133b2.prm",content:`Opposite (distichous) arrangement, plot outside in\r
 300, 100,   1,  24,  27,   5,  51,   1,   3,   0\r
  99,   2,   0,   0,  6.0000,  0.0000,  5.0000\r
  0.0010,  0.0030,  0.2000,  0.0000,  0.0000,  1.0000,  1.0000\r
  0.4000,  0.0000,  0.0030,  1.0000,  0.0000,  0.0000,  1.0000\r
  0.0050,  0.0002,  0.0001, 10.0000,  0.0000,  1.0000,  1.0000\r
 320.000, 100.000,   1.000,   0,   0,   2\r
 320.000, 240.000,   0.200,   0,   0,   2\r
 320.000, 240.000,   0.200,   0,  12,   0\r
 320.000, 240.000,   0.800,   0,   2,   0\r
acb,   6.00,   0.00,   0.00,   1.00,12\r
3,0,15,0,0\r
9\r
`},{name:"sp133c.prm",content:`90-degree, decussate\r
 450, 100,   1,  48,  14,   5,  51,   1,   3,   0\r
  99,   2,   0,   0, 12.0000,  0.0000,  5.0000\r
  0.0010,  0.0030,  0.4000,  0.0000,  0.0000,  1.0000,  1.0000\r
  0.4000,  0.0000,  0.0030,  1.0000,  0.0000,  0.0000,  1.0000\r
  0.0030,  0.0002,  0.0001, 10.0000,  0.0000,  1.0000,  1.0000\r
 320.000, 100.000,   1.000,   0,   0,   2\r
  20.000, 240.000,   0.300,   0,   0,   2\r
  20.000, 240.000,   0.300,   0,  12,   0\r
  20.000, 240.000,   0.500,   0,   2,   0\r
acb,  12.00,   0.00,   0.00,   1.00,12\r
3,0,15,0,0\r
12\r
`},{name:"sp133c1.prm",content:`90-degree pairs (decussate), long range = aux, movie\r
 400, 200,   1,  48,  16,   5,  51,   1,   3,   0\r
  99,   2,   0,   0,  6.0000,  0.0000,  5.0000\r
  0.0010,  0.0030,  0.2000,  0.0000,  0.0000,  1.0000,  1.0000\r
  0.4000,  0.0000,  0.0030,  1.0000,  0.0000,  0.0000,  1.0000\r
  0.0030,  0.0002,  0.0001, 10.0000,  0.0000,  1.0000,  1.0000\r
 320.000, 100.000,   1.000,   0,   0,   2\r
 320.000, 240.000,   0.040,   0,   6,   2\r
 320.000, 240.000,   0.100,   0,  12,   0\r
 320.000, 240.000,   0.300,   0,   2,   0\r
acb,   6.00,   0.00,   0.00,   1.00,9\r
3,0,15,0,0\r
9\r
`},{name:"sp133c2.prm",content:`90-degree pairs, outside-in\r
 300, 100,   1,  48,  27,   5,  51,   1,   3,   0\r
  99,   2,   0,   0,  6.0000,  0.0000,  5.0000\r
  0.0010,  0.0030,  0.2000,  0.0000,  0.0000,  1.0000,  1.0000\r
  0.4000,  0.0000,  0.0030,  1.0000,  0.0000,  0.0000,  1.0000\r
  0.0030,  0.0002,  0.0001, 10.0000,  0.0000,  1.0000,  1.0000\r
 320.000, 100.000,   1.000,   0,   0,   2\r
 320.000, 240.000,   0.500,   0,   0,   2\r
 320.000, 240.000,   0.200,   0,  12,   0\r
 320.000, 240.000,   0.700,   0,   2,   0\r
acb,   6.00,   0.00,   0.00,   1.00,12\r
3,0,15,0,0\r
12\r
`},{name:"sp133f.prm",content:`Helical arrangement of leaf initiation signals; small field\r
 450,  12,   1,  18,  14,   5,  53,   5,   3,   0\r
  11,   2,   0,   1,  8.0000,  0.0000,  0.3000\r
  0.0100,  0.0200,  0.0500,  0.0000,  0.0000,  1.0000,  1.0000\r
  0.0025,  0.0015,  0.0000,  0.0000,  0.0000,  1.0000,  1.0000\r
  0.4000,  0.0100,  0.0000,  0.0000,  0.0000,  1.0000,  1.0000\r
   0.000, 100.000,   1.000,   0,   0,   2\r
 200.000, 100.000,   1.000,   0,   0,   2\r
 200.000,   0.000,   0.800,   0,  10,   0\r
 200.000,   0.000,   0.800,   0,  12,   0\r
acb,   0.00,   0.00,   0.00,   0.25, 12 \r
1,0,15,0,0\r
12\r
`},{name:"sp133x.prm",content:`Depletion, for preparation of helical arrangement\r
 200, 100,   1,  24,  17,   5,  51,   1,   3,   0\r
  99,   2,   0,   0, 12.0000,  0.0000,  5.0000\r
  0.0010,  0.0020,  0.4000,  0.0000,  0.0000,  1.0000,  1.0000\r
  0.4000,  0.0000,  0.0030,  1.0000,  0.0000,  0.0000,  1.0000\r
  0.0002,  0.0002,  0.0001,  0.0000,  0.0000,  1.0000,  1.0000\r
 320.000, 100.000,   1.000,   0,   0,   2\r
 400.000, 100.000,   0.400,   0,   0,   6\r
 400.000, 100.000,   3.000,   0,  32,   6\r
 400.000, 100.000,   1.000,   0,   2,   6\r
ab,  12.00,   0.00,   0.00,   0.20,12\r
3,0,15,0,0\r
12\r
`},{name:"sp133x1.prm",content:`Helical arrangement, long range by auxin depletion\r
 450, 100,   1,  24,  17,   5,  51,   1,   3,   0\r
  99,   2,   0,   0, 12.0000,  0.0000,  5.0000\r
  0.0020,  0.0040,  0.4000,  0.0000,  0.0000,  1.0000,  1.0000\r
  0.4000,  0.0000,  0.0030,  1.0000,  0.0000,  0.0000,  1.0000\r
  0.0003,  0.0001,  0.0000, 10.0000,  0.0000,  1.0000,  1.0000\r
 320.000, 100.000,   1.000,   0,   0,   2\r
 320.000, 100.000,   0.350,   0,   0,   2\r
 320.000, 100.000,   0.300,   0,  32,   6\r
 320.000, 100.000,   0.800,   0,   2,   2\r
acb,  12.00,   0.00,   0.00,   0.20,9\r
3,0,15,0,0\r
12\r
`},{name:"sp136.prm",content:`Orientation of chemotactic cells: two antagonists\r
 299,  40,   1,  50,  16,  12, 135,   1,   4,   0\r
  99,  34, 100,  16,  5.0000,  0.0200, 30.0000\r
  0.0000,  0.0200,  0.1000,  0.0050,  0.0000,  0.5000,  0.5000\r
  0.4000,  0.0300,  0.0000,  0.0000,  0.0000,  0.0000,  1.0000\r
  0.0000,  0.0130,  0.0050,  0.2000,  1.0000,  0.0000,  0.0500\r
  0.0000,  0.0000,  0.0000,  0.0000,  0.0000,  0.0000,  0.0000\r
 320.000, 240.000, 100.000,   0,   1,   3\r
 320.000, 240.000,   0.300,   0,   2,   1\r
 320.000, 240.000,   0.100,   0,  12,   1\r
 320.000, 240.000,   1.000,   0,  13,   1\r
 320.000, 240.000,  60.000,   0,   0,   1\r
acs,   0.00,   0.00,   0.00,   1.00, 9 \r
7,0,15,1,1\r
9\r
`},{name:"sp136a.prm",content:`Orientation of a single maximum by a small asymmetry\r
  80,  50,   1,  16,  16,  12,  21,   1,   2,   0\r
  99,   4,   0,  16, 16.0000,  0.0200,  6.0000\r
  0.0020,  0.0050,  0.2000,  0.0000,  0.0000,  1.6000,  1.6000\r
  0.4000,  0.0080,  0.0000,  0.0000,  0.0000,  0.0000,  1.6000\r
 320.000, 240.000, 500.000,   0,   1,   1\r
 320.000, 240.000,   0.300,   0,   2,   1\r
 320.000, 240.000,   0.200,   0,  12,   1\r
abs,  16.00, 230.00,   0.00,   1.00,9\r
5,0,15,1,1\r
9\r
`},{name:"sp136b.prm",content:`Multiple signals if inhibitory range if too small - inappropriate\r
  50,  50,   1,  40,  16,  12,  21,   1,   2,   0\r
  99,  31,   0,  12,  6.0000,  0.0000,  0.0000\r
  0.0010,  0.0300,  0.2000,  0.0000,  0.0000,  0.5000,  0.5000\r
  0.4000,  0.0500,  0.0000,  0.0000,  0.0000,  0.0000,  1.0000\r
 320.000, 215.000, 400.000,   0,   1,   6\r
 320.000, 215.000,   0.400,   0,   2,   1\r
 320.000, 215.000,   0.300,   0,  12,   1\r
ab,   0.00,   0.00,   0.00,   1.00, 9 \r
5,0,15,1,1\r
9\r
`},{name:"sp136c.prm",content:`Two peaks in a large asymmetric field if inhibitory range is limited\r
  70, 100,   1,  40,  16,  12,  21,   0,   2,   0\r
  99,  22,   0,  12,  6.0000,  0.1500,  0.0000\r
  0.0050,  0.0060,  0.2000,  0.0000,  0.0000,  0.5000,  0.5000\r
  0.4000,  0.0120,  0.0000,  0.0000,  0.0000,  0.0000,  1.0000\r
 320.000, 240.000, 200.000,   0,   1,   6\r
 320.000, 240.000,   0.500,   0,   2,   1\r
 320.000, 240.000,   0.300,   0,  12,   1\r
abs,   0.00,   0.00,   0.00,   1.00, 9 \r
5,0,15,1,1\r
9\r
`},{name:"sp136d.prm",content:`activator-inhibitor, homogeneous inhibitor, no saturation\r
 120,  50,   1,  40,  16,  12, 132,   0,   2,   0\r
  99,   7,   0,  12,  6.0000,  0.0200, 10.0000\r
  0.0000,  0.0050,  0.2000,  0.0000,  0.0000,  0.5000,  0.5000\r
  0.4000,  0.0080,  0.0000,  0.0000,  0.0000,  0.0000,  1.0000\r
 320.000, 240.000, 400.000,   0,   1,   6\r
 320.000, 240.000,   0.100,   0,   2,   1\r
 320.000, 240.000,   0.020,   0,  12,   1\r
abs,   6.00,   0.00,   0.00,   1.00,9\r
5,0,15,1,1\r
9\r
`},{name:"sp136e.prm",content:`Activator - homogeneously distributed inhibitor, circular field\r
 120,  50,   1,  40,  16,  12, 132,   0,   2,   0\r
  99,  22,   0,  12,  6.0000,  0.0200, 10.0000\r
  0.0000,  0.0050,  0.2000,  0.1000,  0.0000,  0.5000,  0.5000\r
  0.4000,  0.0080,  0.0000,  0.0000,  0.0000,  0.0000,  1.0000\r
 320.000, 240.000, 400.000,   0,   1,   6\r
 320.000, 240.000,   0.800,   0,   2,   1\r
 320.000, 240.000,   0.500,   0,  12,   1\r
abs,   0.00,   0.00,   0.00,   1.00, 9 \r
5,0,15,1,1\r
9\r
`},{name:"sp136f.prm",content:`oscillation allows adaptation\r
 380,  10,   1,  16,  16,   8,  21,   1,   2,   0\r
  99,  12, 130,  16, 16.0000,  0.0500,  6.0000\r
  0.0050,  0.0400,  0.0800,  0.0000,  0.0000,  1.6000,  0.5000\r
  0.4000,  0.0100,  0.0000,  0.0000,  0.0000,  0.0000,  1.6000\r
 320.000, 240.000,  40.000,   0,   1,   1\r
 320.000, 240.000,   1.000,   0,   2,   1\r
 320.000, 240.000,   0.800,   0,  12,   1\r
abs,  16.00, 230.00,   0.00,   1.00,9\r
5,0,15,1,1\r
9\r
`},{name:"sp136v.prm",content:`Simulation Vickers Experiment: Non-Random protrusions without stimulation\r
 500,  20,   1,  20,  16,   1,  51,   5,   3,   0\r
  11,   2,   0,   0,  9.0000,  0.0000,  5.0000\r
  0.0015,  0.0200,  0.0030,  3.0000,  0.0000,  1.0000,  1.0000\r
  0.4000,  0.0000,  0.0035,  0.0000,  0.0000,  0.0050,  1.0000\r
  0.0020,  0.0040,  0.0000,  1.0000,  0.0000,  1.0000,  1.0000\r
 320.000, 215.000,   1.000,   0,   0,   2\r
 320.000, 215.000,   3.000,   0,   2,   2\r
 320.000, 215.000,   1.000,   0,   8,   0\r
 320.000, 215.000,   3.000,   0,  12,   0\r
acb,   9.00,   0.00,   0.00,   1.00,9\r
7,0,15,0,0\r
9\r
`},{name:"sp137.prm",content:`Pole-to-pole oscillation in E.coli\r
 450, 800,   1,  19,  19,   3, 136,   1,   6,   0\r
   0,   0,   0,   0, 24.0000,  0.0000,  5.0000\r
  0.0200,  0.0020,  0.0500,  0.0000,  0.0000,  0.0000,  0.0000\r
  0.2000,  0.0000,  0.0035,  0.0000,  0.0000,  0.0000,  3.0000\r
  0.0004,  0.0005,  0.1000,  0.0020,  0.0004,  0.0000,  0.0000\r
  0.2000,  0.0002,  0.0020,  0.5000,  0.0000,  0.0000,  3.0000\r
  0.0020,  0.0040,  0.1000,  0.0000,  0.2000,  0.0000,  0.0000\r
  0.2000,  0.0020,  0.0060,  0.0000,  0.0000,  0.0000,  0.0000\r
   0.000, 133.333,   1.333,   0,   0,   2\r
   0.000, 160.000,   1.333,   0,   2,   2\r
   0.000, 160.000,   5.333,   0,  12,   2\r
   0.000, 160.000,   0.400,   0,  12,   2\r
   0.000, 160.000,   1.333,   0,  14,   2\r
   0.000, 160.000,   1.067,   0,   1,   2\r
   0.000, 160.000,   1.333,   0,  14,   2\r
cae,  24.00,   0.00,   0.00,   0.20,9\r
7,0,15,1,0\r
9\r
`},{name:"sp137a.prm",content:`Ecoli: growing field; after continuation [n] split occurs\r
 450, 800,   1,   6,   9,   3, 136,   1,   6,  30\r
   0,   0,   0,   0, 15.0000,  0.0000,  5.0000\r
  0.0200,  0.0020,  0.0500,  0.0000,  0.0000,  0.0000,  0.0000\r
  0.2000,  0.0000,  0.0035,  0.0000,  0.0000,  0.0000,  3.0000\r
  0.0004,  0.0005,  0.1000,  0.0020,  0.0004,  0.0000,  0.0000\r
  0.2000,  0.0002,  0.0020,  0.5000,  0.0000,  0.0000,  3.0000\r
  0.0020,  0.0040,  0.1000,  0.0010,  0.1000,  0.0000,  0.0000\r
  0.2000,  0.0020,  0.0060,  0.0000,  0.0000,  0.0000,  0.0000\r
   0.000, 100.000,   1.000,   0,   0,   2\r
 100.000,  50.000,   1.000,   0,   2,   2\r
 100.000,  50.000,   4.000,   0,  12,   2\r
 100.000,  50.000,   0.300,   0,  12,   2\r
 100.000,  50.000,   1.000,   0,  14,   2\r
 100.000,  50.000,   0.800,   0,   1,   2\r
 100.000,  50.000,   1.000,   0,  14,   2\r
cae,   0.00,   0.00,   0.00,   0.20,   0.00\r
7,0,15,1,0\r
12\r
`},{name:"sp137b.prm",content:`E.coli, scmall field\r
 450, 800,   1,  15,   9,   3, 136,   1,   6,   0\r
   0,   0,   0,   0, 15.0000,  0.0000,  5.0000\r
  0.0200,  0.0020,  0.0500,  0.0000,  0.0000,  0.0000,  0.0000\r
  0.2000,  0.0000,  0.0035,  0.0000,  0.0000,  0.0000,  3.0000\r
  0.0004,  0.0005,  0.1000,  0.0020,  0.0004,  0.0000,  0.0000\r
  0.2000,  0.0002,  0.0020,  0.5000,  0.0000,  0.0000,  3.0000\r
  0.0020,  0.0040,  0.1000,  0.0010,  0.1000,  0.0000,  0.0000\r
  0.2000,  0.0020,  0.0060,  0.0000,  0.0000,  0.0000,  0.0000\r
   0.000, 100.000,   1.000,   0,   0,   2\r
 100.000,  50.000,   1.000,   0,   2,   2\r
 100.000,  50.000,   4.000,   0,  12,   2\r
 100.000,  50.000,   0.300,   0,  12,   2\r
 100.000,  50.000,   1.000,   0,  14,   2\r
 100.000,  50.000,   0.800,   0,   1,   2\r
 100.000,  50.000,   1.000,   0,  14,   2\r
cae,   0.00,   0.00,   0.00,   0.20, 12 \r
7,0,15,1,0\r
12\r
`},{name:"sp137c.prm",content:`Multiple peaks in long cells (after inhibition of cell division)\r
 450, 600,   1,  48,   9,   3, 136,   1,   6,   0\r
   0,   0,   0,   0, 12.0000,  0.0000,  5.0000\r
  0.0200,  0.0020,  0.0500,  0.0000,  0.0000,  0.0000,  0.0000\r
  0.2000,  0.0000,  0.0035,  0.0000,  0.0000,  0.0000,  3.0000\r
  0.0004,  0.0005,  0.1000,  0.0020,  0.0004,  0.0000,  0.0000\r
  0.2000,  0.0002,  0.0020,  0.5000,  0.0000,  0.0000,  3.0000\r
  0.0020,  0.0040,  0.1000,  0.0010,  0.1000,  0.0000,  0.0000\r
  0.2000,  0.0020,  0.0060,  0.0000,  0.0000,  0.0000,  0.0000\r
   0.000, 100.000,   1.000,   0,   0,   2\r
   0.000, 200.000,   1.000,   0,   2,   2\r
   0.000, 200.000,   4.000,   0,  12,   1\r
   0.000, 200.000,   0.300,   0,  12,   2\r
   0.000, 200.000,   1.000,   0,  14,   1\r
   0.000, 200.000,   0.800,   0,   1,   2\r
   0.000, 200.000,   1.000,   0,  14,   4\r
ace,   0.00,   0.00,   0.00,   0.20,   0.00\r
7,0,15,40,0\r
12\r
`},{name:"sp137d.prm",content:`Multiple peaks in long cells (after inhibition of cell division)\r
 200,1000,   1,  48,  19,   3, 136,   1,   6,   0\r
   0,   0,   0,   0, 12.0000,  0.0000,  5.0000\r
  0.0200,  0.0020,  0.0500,  0.0000,  0.0000,  0.0000,  0.0000\r
  0.2000,  0.0000,  0.0035,  0.0000,  0.0000,  0.0000,  3.0000\r
  0.0004,  0.0005,  0.1000,  0.0020,  0.0004,  0.0000,  0.0000\r
  0.2000,  0.0002,  0.0020,  0.5000,  0.0000,  0.0000,  3.0000\r
  0.0020,  0.0040,  0.1000,  0.0010,  0.1000,  0.0000,  0.0000\r
  0.2000,  0.0020,  0.0060,  0.0000,  0.0000,  0.0000,  0.0000\r
   0.000, 100.000,   1.000,   0,   0,   2\r
   0.000, 200.000,   1.000,   0,   2,   4\r
   0.000, 200.000,   4.000,   0,  12,   1\r
   0.000, 200.000,   0.300,   0,  12,   4\r
   0.000, 200.000,   1.000,   0,  14,   1\r
   0.000, 200.000,   0.800,   0,   1,   4\r
   0.000, 200.000,   1.000,   0,  14,   4\r
ac,  12.00,   0.00,   0.00,   0.20,9\r
7,0,15,40,0\r
9\r
`},{name:"sp137e.prm",content:`Ecoli, transition to periodic patterns is growth continues\r
 450, 800,   1,  15,   9,   3, 136,   1,   6,  24\r
   0,   0,   0,   0, 15.0000,  0.0000,  5.0000\r
  0.0200,  0.0020,  0.0500,  0.0000,  0.0000,  0.0000,  0.0000\r
  0.2000,  0.0000,  0.0035,  0.0000,  0.0000,  0.0000,  3.0000\r
  0.0004,  0.0005,  0.1000,  0.0020,  0.0004,  0.0000,  0.0000\r
  0.2000,  0.0002,  0.0020,  0.5000,  0.0000,  0.0000,  3.0000\r
  0.0020,  0.0040,  0.1000,  0.0010,  0.1000,  0.0000,  0.0000\r
  0.2000,  0.0020,  0.0060,  0.0000,  0.0000,  0.0000,  0.0000\r
   0.000, 100.000,   1.000,   0,   0,   2\r
 100.000,  50.000,   1.000,   0,   2,   2\r
 100.000,  50.000,   4.000,   0,  12,   2\r
 100.000,  50.000,   0.300,   0,  12,   2\r
 100.000,  50.000,   1.000,   0,  14,   2\r
 100.000,  50.000,   0.800,   0,   1,   2\r
 100.000,  50.000,   1.000,   0,  14,   2\r
cae,  15.00,   0.00,   0.00,   0.20,0\r
7,0,15,1,0\r
2\r
`},{name:"sp138.prm",content:`waves for feathers, rachis and anti-rachis via d,f and h\r
 450, 150,   1, 180,   9, 130, 130,   1,   8,   0\r
  99,  55,   0,  60,  3.0000,  1.0000, 50.0000\r
  0.0040,  0.0100,  0.0000,  1.8000,  0.0000,  2.0000,  1.0000\r
  0.4000,  0.0150,  0.0020,  1.0000,  0.0000,  0.0000,  0.1000\r
  0.0000,  0.0003,  0.0002,  0.3000,  0.0000,  1.0000,  0.0000\r
  0.0200,  0.0040,  0.0000,  2.0000,  0.0000,  1.0000,  0.0000\r
  0.4000,  0.0050,  0.0001,  1.0000,  0.0000,  1.0000,  0.0010\r
  0.0200,  0.0040,  0.0000,  0.5000,  0.0000,  1.0000,  0.0000\r
  0.4000,  0.0050,  0.0001,  0.5000,  0.0000,  1.0000,  0.0100\r
  0.0000,  0.0000,  0.0000,  0.0000,  0.0000,  0.0000,  0.0000\r
   0.000, 100.000,   1.000,   0,   0,   2\r
  40.000, 100.000,   3.000,   0,   2,   2\r
  40.000, 100.000,   3.000,   0,  32,   0\r
  40.000, 100.000,   5.000,   0,  21,   0\r
  40.000, 100.000,   2.000,   0,   6,   4\r
  40.000, 100.000,   2.000,   0,  13,   4\r
  40.000, 100.000,   2.000,   0,  13,   4\r
  40.000, 100.000,   4.000,   0,   6,   0\r
  40.000, 100.000,   0.250,   0,   0,   0\r
adf,   3.00,   0.00,   0.00,   0.30,0\r
3,0,15,12,0\r
12\r
`},{name:"sp138a.prm",content:`waves for barbs, rachis and antirachis -> two AI systems\r
 100, 150,   1, 180,  17, 130, 130,   1,   7,   0\r
  99,  20,   0,  60,  2.0000,  1.0000, 50.0000\r
  0.0040,  0.0100,  0.0000,  1.8000,  0.0000,  2.0000,  1.0000\r
  0.4000,  0.0150,  0.0020,  1.0000,  0.0000,  0.0000,  0.1000\r
  0.0000,  0.0003,  0.0002,  0.0000,  0.0000,  1.0000,  0.0000\r
  0.0200,  0.0040,  0.0000,  0.0000,  0.0000,  1.0000,  0.0000\r
  0.4000,  0.0050,  0.0001,  1.0000,  0.0000,  1.0000,  0.0010\r
  0.0200,  0.0040,  0.0000,  0.0000,  0.0000,  1.0000,  0.0000\r
  0.4000,  0.0050,  0.0001,  0.5000,  0.0000,  1.0000,  0.0100\r
   0.000, 100.000,   1.000,   0,   0,   2\r
   0.000, 120.000,   3.000,   0,   2,   2\r
   0.000, 120.000,   4.000,   0,  32,   4\r
   0.000, 120.000,  15.000,   0,   7,   0\r
   0.000, 120.000,   2.000,   0,   6,   4\r
   0.000, 120.000,   2.000,   0,  13,   4\r
   0.000, 120.000,   2.000,   0,  14,   4\r
   0.000, 120.000,   4.000,   0,   6,   0\r
ab,   2.00,   0.00,   0.00,   0.40,9\r
3,0,15,1,0\r
9\r
`},{name:"sp138b.prm",content:`from downy feathers to rachis and barbs\r
 450, 150,   1, 180,  17, 130, 130,   1,   8,   0\r
  99,  20,   0,  60,  2.0000,  1.0000, 50.0000\r
  0.0040,  0.0100,  0.0000,  1.8000,  0.0000,  2.0000,  1.0000\r
  0.4000,  0.0150,  0.0020,  1.0000,  0.0000,  0.0000,  0.1000\r
  0.0000,  0.0003,  0.0002,  0.3000,  0.0000,  1.0000,  0.0000\r
  0.0200,  0.0040,  0.0000,  2.0000,  0.0000,  1.0000,  0.0000\r
  0.4000,  0.0050,  0.0001,  1.0000,  0.0000,  1.0000,  0.0010\r
  0.0200,  0.0040,  0.0000,  0.5000,  0.0000,  1.0000,  0.0000\r
  0.4000,  0.0050,  0.0001,  0.5000,  0.0000,  1.0000,  0.0100\r
  0.0000,  0.0000,  0.0000,  0.0000,  0.0000,  0.0000,  0.0000\r
   0.000, 100.000,   1.000,   0,   0,   2\r
   0.000,  80.000,   3.000,   0,   2,   3\r
   0.000,  80.000,   4.000,   0,  32,   3\r
   0.000,  80.000,   4.000,   0,  21,   3\r
   0.000, 310.000,   0.800,   0,   6,   3\r
   0.000, 120.000,   2.000,   0,  13,   3\r
   0.000, 310.000,   0.800,   0,  13,   3\r
   0.000, 120.000,   4.000,   0,   6,   3\r
   0.000, 310.000,   0.800,   0,  27,   3\r
abchdf,   2.00,   0.00,   0.00,   0.40,9\r
3,0,15,1,0\r
9\r
`},{name:"sp138c.prm",content:`waves without cut-open zone and annihilation zone (rachis)\r
 450, 150,   1, 180,  17, 130, 130,   1,   8,   0\r
  99,  20,   0,  60,  2.0000,  1.0000, 50.0000\r
  0.0040,  0.0100,  0.0000,  1.8000,  0.0000,  2.0000,  1.0000\r
  0.4000,  0.0150,  0.0020,  1.0000,  0.0000,  0.0000,  0.1000\r
  0.0000,  0.0003,  0.0002,  0.3000,  0.0000,  1.0000,  0.0000\r
  0.0200,  0.0040,  0.0000,  0.0000,  0.0000,  1.0000,  0.0000\r
  0.4000,  0.0050,  0.0001,  1.0000,  0.0000,  1.0000,  0.0010\r
  0.0200,  0.0040,  0.0000,  0.0000,  0.0000,  1.0000,  0.0000\r
  0.4000,  0.0050,  0.0001,  0.5000,  0.0000,  1.0000,  0.0100\r
  0.0000,  0.0000,  0.0000,  0.0000,  0.0000,  0.0000,  0.0000\r
   0.000, 100.000,   1.000,   0,   0,   2\r
   0.000, 120.000,   3.000,   0,   2,   3\r
   0.000, 120.000,   4.000,   0,  32,   3\r
   0.000, 120.000,   4.000,   0,  21,   3\r
   0.000, 350.000,   2.000,   0,   6,   3\r
   0.000, 120.000,   2.000,   0,  13,   3\r
   0.000, 350.000,   1.000,   0,  13,   3\r
   0.000, 120.000,   4.000,   0,   6,   3\r
   0.000, 350.000,   1.000,   0,  21,   3\r
abc,   2.00,   0.00,   0.00,   0.40,9\r
3,0,15,1,0\r
9\r
`},{name:"sp138d.prm",content:`waves for feathers; cut open signal brown, rachis signal pink\r
 450, 150,   1, 180,   9, 130, 130,   1,   8,   0\r
  99,  55,   0,  60,  3.0000,  1.0000, 50.0000\r
  0.0040,  0.0100,  0.0000,  1.8000,  0.0000,  2.0000,  1.0000\r
  0.4000,  0.0150,  0.0020,  1.0000,  0.0000,  0.0000,  0.1000\r
  0.0000,  0.0003,  0.0002,  0.3000,  0.0000,  1.0000,  0.0000\r
  0.0200,  0.0040,  0.0000,  2.0000,  0.0000,  1.0000,  0.0000\r
  0.4000,  0.0050,  0.0001,  1.0000,  0.0000,  1.0000,  0.0010\r
  0.0200,  0.0040,  0.0000,  0.5000,  0.0000,  1.0000,  0.0000\r
  0.4000,  0.0050,  0.0001,  0.5000,  0.0000,  1.0000,  0.0100\r
  0.0000,  0.0000,  0.0000,  0.0000,  0.0000,  0.0000,  0.0000\r
   0.000, 100.000,   1.000,   0,   0,   2\r
  40.000, 100.000,   3.000,   0,   2,   2\r
  40.000, 100.000,   2.000,   0,  12,   0\r
  40.000, 100.000,   7.000,   0,  21,   0\r
  40.000, 100.000,   2.000,   0,   6,   4\r
  40.000, 100.000,   2.000,   0,  13,   4\r
  40.000, 100.000,   2.000,   0,  13,   4\r
  40.000, 100.000,   4.000,   0,   6,   0\r
  40.000, 100.000,   0.250,   0,   0,   0\r
abcdf,   3.00,   0.00,   0.00,   0.30,0\r
3,0,15,12,0\r
12\r
`},{name:"sp138m.prm",content:`rachis and anti-rachis, via bb, movie\r
 400, 150,   1, 180,  17, 130, 130,   1,   8,   0\r
  99,  20,   0,  60,  2.0000,  1.0000, 50.0000\r
  0.0040,  0.0100,  0.0000,  1.8000,  0.0000,  2.0000,  1.0000\r
  0.4000,  0.0150,  0.0020,  1.0000,  0.0000,  0.0000,  0.1000\r
  0.0000,  0.0003,  0.0002,  0.3000,  0.0000,  1.0000,  0.0000\r
  0.0200,  0.0040,  0.0000,  2.0000,  0.0000,  1.0000,  0.0000\r
  0.4000,  0.0050,  0.0001,  1.0000,  0.0000,  1.0000,  0.0010\r
  0.0200,  0.0040,  0.0000,  0.5000,  0.0000,  1.0000,  0.0000\r
  0.4000,  0.0050,  0.0001,  0.5000,  0.0000,  1.0000,  0.0100\r
  0.0000,  0.0000,  0.0000,  0.0000,  0.0000,  0.0000,  0.0000\r
   0.000, 100.000,   1.000,   0,   0,   2\r
   0.000,  80.000,   3.000,   0,   2,   3\r
   0.000,  80.000,   3.000,   0,  32,   3\r
   0.000,  80.000,   5.000,   0,  21,   3\r
   0.000, 300.000,   1.000,   0,   6,   3\r
   0.000, 100.000,   2.000,   0,  13,   3\r
   0.000, 300.000,   1.000,   0,  13,   3\r
   0.000, 100.000,   4.000,   0,   6,   3\r
   0.000, 300.000,   1.000,   0,  27,   3\r
abcdfh,   2.00,   0.00,   0.00,   0.30,0\r
3,0,15,0,0\r
9\r
`},{name:"sp1a.prm",content:`A-I, Stable periodic pattern, KD=3\r
  90,  10,   1,  30,   3,   1,  21,   1,   2,   0\r
   2,   2,   0,   0, 18.0000,  0.0000, 12.0000\r
  0.0100,  0.0500,  0.0100,  0.0000,  0.0000,  1.5000,  1.5000\r
  0.4000,  0.0800,  0.0000,  0.0000,  0.0000,  1.5000,  1.5000\r
   0.000, 100.000, 100.000,   0,   1,   6\r
  60.000, 100.000,   1.000,   0,   2,   6\r
  60.000, 100.000,   0.900,   0,  12,   6\r
sab,  18.00,   0.00,   0.00,   0.16,9\r
5,0,15,1,1\r
9\r
`},{name:"sp1b.prm",content:`formation of a gradient in a non-growing field\r
 100,  80,   1,  12,   3,   1,  21,   1,   2,   0\r
   1,   2,   0,   8, 45.0000,  0.0000, 12.0000\r
  0.0100,  0.0040,  0.0500,  0.0000,  0.0000,  2.0000,  2.0000\r
  0.4000,  0.0060,  0.0000,  0.0000,  0.0000,  0.0000,  1.8000\r
   0.000,  60.000,1600.000,   0,   1,   6\r
   0.000,  60.000,   2.000,   0,   2,   4\r
   0.000,  60.000,   1.900,   0,  12,   4\r
sab,  45.00,   0.00,   0.00,   0.20,9\r
0,0,15,460,4\r
9\r
`},{name:"sp1c.prm",content:`Generation of a maximum at a terminal position\r
 200,  30,   1,  12,   3,   8,  21,   3,   2,   0\r
   1,   2,   0,   8, 36.0000,  0.0000, 12.0000\r
  0.0100,  0.0040,  0.0500,  0.0000,  0.0000,  2.0000,  2.0000\r
  0.4000,  0.0060,  0.0000,  0.0000,  0.0000,  0.0000,  1.9000\r
   0.000, 100.000,1200.000,   0,   1,   6\r
   0.000, 100.000,   1.600,   0,   2,   4\r
   0.000, 100.000,   1.500,   0,  12,   4\r
sab,  36.00,   0.00,   0.00,   0.20,9\r
0,0,15,1,1\r
9\r
`},{name:"sp1d.prm",content:`Generation of a gradient during growth\r
 200,  30,   7,   9,   3,   1,  21,   3,   2,  30\r
   1,   2,   0,   8, 38.0000,  0.0000, 12.0000\r
  0.0100,  0.0050,  0.0500,  0.0000,  0.0000,  1.8500,  1.8500\r
  0.4000,  0.0090,  0.0000,  0.0000,  0.0000,  0.0000,  1.9000\r
   5.000, 100.000, 100.000,   0,   1,   6\r
   0.000, 100.000,   1.600,   0,   2,   4\r
   0.000, 100.000,   1.550,   0,  12,   4\r
ab,  38.00,   0.00,   0.00,   0.20,9\r
0,0,15,1,1\r
9\r
`},{name:"sp22.prm",content:`Pattern formation after a local perturbation\r
 100,  25,   1,  19,   3,   3,  21,   0,   2,   0\r
   2,   2,   0,   0, 30.0000,  0.0000, 12.0000\r
  0.0150,  0.0100,  0.0500,  0.0000,  0.0000,  1.2000,  1.0000\r
  0.4000,  0.0150,  0.0000,  0.0000,  0.0000,  1.4000,  1.0000\r
   0.000, 100.000, 100.000,   0,  14,   2\r
   0.000, 100.000,   1.500,   0,   2,   8\r
   0.000, 100.000,   1.450,   0,  12,   8\r
ab,  30.00,   0.00,   0.00,   0.25,9\r
0,8,15,1,1\r
9\r
`},{name:"sp22a.prm",content:`formation of a gradient in a non-growing field\r
 120,  80,   1,  12,   3,   1,  21,   1,   2,   0\r
   1,   2,   0,   8, 45.0000,  0.0000, 12.0000\r
  0.0100,  0.0040,  0.0500,  0.0000,  0.0000,  1.0000,  1.0000\r
  0.4000,  0.0060,  0.0000,  0.0000,  0.0000,  0.0000,  1.0000\r
   0.000,  60.000,1600.000,   0,   1,   6\r
   0.000,  60.000,   2.000,   0,   2,   4\r
   0.000,  60.000,   1.900,   0,  12,   4\r
sab,  45.00,   0.00,   0.00,   0.20,9\r
0,0,15,460,4\r
9\r
`},{name:"sp22b.prm",content:`Generation of a gradient during growth\r
  60, 100,   7,   9,   3,   1,  21,   3,   2,  10\r
   1,   2,   0,   8, 36.0000,  0.0000, 12.0000\r
  0.0100,  0.0050,  0.0500,  0.0000,  0.0000,  1.8000,  1.8000\r
  0.4000,  0.0090,  0.0000,  0.0000,  0.0000,  0.0000,  1.8000\r
   0.000,  60.000,1000.000,   0,   1,   6\r
   0.000,  60.000,   1.500,   0,   2,   4\r
   0.000,  60.000,   1.400,   0,  12,   4\r
ab,  36.00,   0.00,   0.00,   0.20,9\r
0,0,15,460,4\r
9\r
`},{name:"sp23a.prm",content:`Stable periodic pattern in space\r
  45,  12,   1,  20,   2,   1,  21,   3,   2,   0\r
   2,   2,   0,   0, 20.0000,  0.0000, 12.0000\r
  0.0100,  0.0500,  0.0100,  0.0000,  0.0000,  1.5000,  1.5000\r
  0.4000,  0.0800,  0.0000,  0.0000,  0.0000,  1.5000,  1.5000\r
   0.000, 100.000, 100.000,   0,  14,   2\r
  30.000, 430.000,   0.500,   0,   2,   0\r
  30.000, 230.000,   0.500,   0,  12,   0\r
ab,  20.00,   0.00,   0.00,   0.16,9\r
5,0,15,1,1\r
12\r
`},{name:"sp23b.prm",content:`Stripes perpendicular to the growing edge\r
 455,  10,   1, 155,   9,   1,  21,   3,   2,   0\r
   2,   2,   0,   0,  4.0000,  0.0000, 12.0000\r
  0.0050,  0.0100,  0.0500,  0.0000,  0.0000,  1.0000,  1.0000\r
  0.4000,  0.0150,  0.0000,  0.0000,  0.0000,  1.0000,  1.0000\r
   0.000, 100.000, 100.000,   0,  14,   2\r
  10.000, 380.000,   1.000,   0,   6,   0\r
  50.000, 180.000,   1.000,   0,  12,   0\r
a,   0.00,   0.00,   0.00,   0.20,   0.00\r
5,0,15,1,1\r
12\r
`},{name:"sp23c.prm",content:`Stable pattern, periodic in space; kd=3\r
  90,   6,   1,  40,   3,   1,  21,   3,   2,   0\r
   2,   2,   0,   0, 15.0000,  0.0000, 12.0000\r
  0.0100,  0.0500,  0.0100,  0.0000,  0.0000,  1.5000,  1.5000\r
  0.4000,  0.0800,  0.0000,  0.0000,  0.0000,  1.5000,  1.5000\r
   0.000, 100.000, 100.000,   0,  14,   2\r
  30.000, 150.000,   1.000,   0,   2,   6\r
  30.000, 150.000,   1.000,   0,  12,   6\r
ab,  15.00,   0.00,   0.00,   0.16,9\r
5,0,15,1,1\r
9\r
`},{name:"sp24a.prm",content:`Width of stripes\r
 455,  15,   1,  76,   9,   1,  23,   3,   2,   0\r
   2,   2,   0,   0,  8.0000,  0.0000, 12.0000\r
  0.0010,  0.0100,  0.0500,  0.0000,  0.0000,  1.0000,  1.0000\r
  0.4000,  0.0150,  0.0000,  0.0000,  0.0000,  1.0000,  1.0000\r
   0.000, 100.000, 100.000,   0,  14,   2\r
   5.000, 380.000,   2.000,   0,   2,   0\r
   5.000, 180.000,   0.500,   0,  12,   0\r
ab,   0.00,   0.00,   0.00,   0.20,   0.00\r
5,0,15,1,1\r
12\r
`},{name:"sp24b.prm",content:`Broad stripes due to saturation (sa=.3)\r
 455,  20,   1,  75,   9,   1,  23,   3,   2,   0\r
   2,   2,   0,   0,  8.0000,  0.0000, 12.0000\r
  0.0010,  0.0100,  0.0500,  0.3000,  0.0000,  1.0000,  1.0000\r
  0.4000,  0.0150,  0.0000,  0.0000,  0.0000,  1.0000,  1.0000\r
   0.000, 100.000, 100.000,   0,  14,   2\r
  20.000, 380.000,   4.000,   0,   6,   0\r
  20.000, 180.000,   0.500,   0,  12,   0\r
a,   0.00,   0.00,   0.00,   0.20,   0.00\r
5,0,15,1,1\r
12\r
`},{name:"sp24c.prm",content:`Early fixation, larger field\r
 455,  30,   1, 155,   9,   1,  21,   3,   2,   0\r
   2,   2,  32,  11,  4.0000,  0.0000, 12.0000\r
  0.0080,  0.0100,  0.0100,  0.0000,  0.0000,  1.0000,  1.0000\r
  0.3500,  0.0150,  0.0055,  0.0000,  0.0000,  1.0000,  1.0000\r
   0.000, 100.000, 100.000,   0,  14,   2\r
   5.000, 380.000,   5.000,   0,   6,   0\r
   5.000, 180.000,   0.500,   0,  12,   0\r
a,   0.00,   0.00,   0.00,   0.20, 12 \r
5,0,15,1,1\r
12\r
`},{name:"sp24d.prm",content:`Early fixation of an evolving pattern\r
 455,  15,   1,  76,   9,   1,  21,   3,   2,   0\r
   2,   2,  45,  11,  8.0000,  0.0000, 12.0000\r
  0.0080,  0.0100,  0.0100,  0.0000,  0.0000,  1.0000,  1.0000\r
  0.4000,  0.0150,  0.0055,  0.0000,  0.0000,  1.0000,  1.0000\r
   0.000, 100.000, 100.000,   0,  14,   2\r
   5.000, 380.000,   5.000,   0,   6,   0\r
   5.000, 180.000,   0.500,   0,  12,   0\r
a,   0.00,   0.00,   0.00,   0.20,   0.00\r
5,0,15,1,1\r
12\r
`},{name:"sp24e.prm",content:`Early fixation, larger field\r
 455,  30,   1, 155,   9,   1,  21,   3,   2,   0\r
   2,   2,  32,  11,  4.0000,  0.0000, 12.0000\r
  0.0080,  0.0100,  0.0100,  0.0000,  0.0000,  1.0000,  1.0000\r
  0.3500,  0.0150,  0.0055,  0.0000,  0.0000,  1.0000,  1.0000\r
   0.000, 100.000, 100.000,   0,  14,   2\r
   5.000, 380.000,   5.000,   0,   6,   0\r
   5.000, 180.000,   0.500,   0,  12,   0\r
a,   0.00,   0.00,   0.00,   0.20,   0.00\r
5,0,15,1,1\r
12\r
`},{name:"sp25.prm",content:`Activator-depletion mechanism, periodic, 3D\r
  50,  24,   1,  27,   2,   1,  24,   0,   2,   0\r
   1,   2,   0,   0, 12.0000,  0.0000, 12.0000\r
  0.0100,  0.0400,  0.0000,  0.0100,  0.0000,  3.0000,  2.7000\r
  0.3500,  0.0000,  0.0600,  0.0000,  0.0000,  1.0000,  0.7000\r
   0.000, 100.000,   1.000,   0,  14,   2\r
  30.000, 410.000,   0.400,   0,   2,   1\r
  30.000, 170.000,   2.000,   0,  12,   1\r
ab,  12.00,   0.00,   0.00,   0.25,9\r
3,0,15,1,3\r
12\r
`},{name:"sp25a.prm",content:`Activator-depleted substrate model, periodic pattern, KD=3\r
 150,  12,   1,  27,   3,   1,  24,   1,   2,   0\r
   1,   2,   0,   0, 20.0000,  0.0000, 12.0000\r
  0.0100,  0.0400,  0.0000,  0.0100,  0.0000,  1.5000,  1.5000\r
  0.3500,  0.0000,  0.0600,  0.0000,  0.0000,  1.0000,  0.7000\r
  50.000, 150.000, 180.000,   0,   1,   6\r
  50.000, 150.000,   1.000,   0,   2,   6\r
  50.000, 150.000,   4.000,   0,  12,   6\r
sab,  20.00,   0.00,   0.00,   0.25,9\r
3,0,15,1,3\r
9\r
`},{name:"sp25b.prm",content:`Activator-depletion mechanism, stripes as on shells\r
 455,  30,   1,  80,   9,   1,  24,   3,   2,   0\r
   1,   2,   0,   0,  7.0000,  0.0000, 12.0000\r
  0.0040,  0.0200,  0.0000,  0.0050,  0.0000,  1.5000,  1.5000\r
  0.3000,  0.0000,  0.0300,  0.0000,  0.0000,  1.0000,  0.7000\r
   0.000, 100.000,   1.000,   0,  14,   2\r
  30.000, 410.000,   0.800,   0,   6,   2\r
  30.000, 170.000,   4.000,   0,  12,   2\r
a,   0.00,   0.00,   0.00,   0.25,   0.00\r
3,0,15,1,3\r
12\r
`},{name:"sp26b.prm",content:`Stripes with growth, split of lines, set sa=0 for insertion of lines (c)\r
 435,  20,  75,  85,   9,   1,  23,   3,   2,   6\r
   1,   2,   0,   0,  4.0000,  0.0000, 12.0000\r
  0.0100,  0.0200,  0.0300,  0.0080,  0.0000,  1.0000,  1.0000\r
  0.4000,  0.0600,  0.0000,  0.0000,  0.0000,  1.0000,  1.0000\r
   0.000, 100.000, 100.000,   0,  14,   2\r
   0.000, 350.000,   2.500,   0,   0,   1\r
   0.000, 150.000,   1.000,   0,  12,   1\r
a,   0.00,   0.00,   0.00,   0.25,   0.00\r
2,0,15,1,1\r
12\r
`},{name:"sp26d.prm",content:`Wedges generated by growth; diffusion is early switched off\r
 435,  20,  75,  85,   6,   1,  23,   3,   2,   6\r
   1,   2,  80,  11,  4.0000,  0.0000, 12.0000\r
  0.0100,  0.0200,  0.0300,  0.0000,  0.0000,  1.0000,  1.0000\r
  0.4000,  0.0600,  0.0200,  0.0000,  0.0000,  1.0000,  1.0000\r
0,100,100,0,14,2\r
0,350,2.5,0,0,1\r
0,150,1,0,12,1\r
"a",0,0,0,.25,0\r
2,0,15,1,1\r
12\r
`},{name:"sp26m.prm",content:`Split due to saturation\r
  80, 500,  15,  19,  19,   3,  23,   1,   2,   6\r
   0,   0,   0,   0, 20.0000, 30.0000,  0.0000\r
  0.0020,  0.0100,  0.1000,  0.2000,  0.0000,  1.5000,  1.0000\r
  0.4000,  0.0150,  0.0000,  0.1000,  0.0000,  0.0000,  0.5000\r
   0.000,   0.080,   0.000,   0,   0,   0\r
   0.000, 100.000,   1.000,   0,   2,   4\r
   5.000, 100.000,   1.000,   0,  52,   4\r
ab,  20.00,   0.00,   0.00,   0.16,9\r
5,0,15,1,1\r
9\r
`},{name:"sp27a.prm",content:`Activator-Inhibitor system in a growing field: insertion of maxima\r
  50, 200,  29,  33,   2,   1,  21,   3,   2,   2\r
   1,   2,   0,   0,  8.0000,  0.0000, 12.0000\r
  0.0100,  0.0200,  0.1500,  0.0000,  0.0000,  1.0000,  1.0000\r
  0.4000,  0.0250,  0.0000,  0.0000,  0.0000,  1.0000,  1.0000\r
   0.000, 100.000, 100.000,   0,  14,   2\r
   5.000, 400.000,   0.500,   0,   2,   1\r
   5.000, 180.000,   0.600,   0,  12,   1\r
ab,   8.00,   0.00,   0.00,   0.30,9\r
4,0,15,1,1\r
12\r
`},{name:"sp27b.prm",content:`Activator-depleted substrate mechanism in a growing field: split of maxima\r
  55, 500,  30,  33,   2,   1,  24,   3,   2,   2\r
   1,   2,   0,   0,  8.0000,  0.0000, 12.0000\r
  0.0050,  0.0050,  0.0000,  0.0000,  0.0000,  1.0000,  1.0000\r
  0.4000,  0.0000,  0.0080,  0.0000,  0.0000,  1.0000,  0.6000\r
   0.000, 100.000, 100.000,   0,  14,   2\r
  20.000, 400.000,   0.300,   0,   2,   1\r
  20.000, 180.000,   1.400,   0,  12,   1\r
ab,   8.00,   0.00,   0.00,   0.35,9\r
3,0,15,1,2\r
12\r
`},{name:"sp27c.prm",content:`Organizer formation by inhibiting an inhibition: Chordin/BMP/ADMP\r
  80,  80,   1,  16,  17,   8,  27,   1,   3,   0\r
   5,   1,   0,   0, 20.0000,  0.1000, 12.0000\r
  0.0030,  0.0100,  0.0020,  0.2000,  0.0000,  1.0000,  1.0000\r
  0.4000,  0.0150,  0.0000,  0.0000,  0.0000,  0.0000,  1.0000\r
  0.0030,  0.0100,  0.0000,  0.2000,  1.0000,  1.0000,  1.0000\r
 320.000, 240.000, 360.000,   0,  13,   6\r
 320.000, 100.000,   1.500,   0,   2,   4\r
 320.000, 100.000,   2.000,   0,  32,   4\r
 320.000, 100.000,   1.500,   0,   1,   4\r
acb,   0.00,   0.00,   0.00,   0.30, 9 \r
5,0,15,1,1\r
9\r
`},{name:"sp28.prm",content:`Activation by an inhibition of an inhibition\r
 440,  12,   1,  60,   9,   1,  27,   3,   3,   0\r
   2,   2,   0,   0,  5.0000,  0.0000, 12.0000\r
  0.0050,  0.0200,  0.0000,  0.1000,  0.0000,  1.0000,  1.0000\r
  0.4000,  0.0300,  0.0000,  0.0000,  0.0000,  1.0000,  1.0000\r
  0.0050,  0.0200,  0.0000,  0.1000,  0.0000,  1.0000,  1.0000\r
   0.000, 100.000, 100.000,   0,  14,   2\r
   5.000, 380.000,   2.000,   0,   0,   0\r
  50.000, 180.000,   0.500,   0,  12,   0\r
 320.000,   0.000,   0.500,   0,   0,   0\r
ac,   0.00,   0.00,   0.00,   0.16,   0.00\r
5,0,15,1,1\r
12\r
`},{name:"sp29.prm",content:`Activator-inhibitor mechanism: gradient formation in a growing field\r
  60, 200,  12,  14,   2,   1,  21,   3,   2,   5\r
   1,   2,   0,   0, 12.0000,  0.0000, 12.0000\r
  0.0150,  0.0050,  0.0200,  0.0000,  0.0000,  1.0000,  1.5000\r
  0.4000,  0.0080,  0.0000,  0.0000,  0.0000,  1.0000,  1.5000\r
   0.000, 100.000, 100.000,   0,  14,   2\r
  50.000, 410.000,   0.600,   0,   2,   1\r
  50.000, 180.000,   0.900,   0,  12,   1\r
ab,   0.00,   0.00,   0.00,   0.20,   0.00\r
6,0,15,1,2\r
12\r
`},{name:"sp29a.prm",content:`Generation of a gradient during growth\r
 130, 100,   7,   9,   3,   1,  21,   3,   2,  20\r
   1,   2,   0,   8, 38.0000,  0.0000, 12.0000\r
  0.0100,  0.0050,  0.0500,  0.0000,  0.0000,  1.8500,  1.8500\r
  0.4000,  0.0090,  0.0000,  0.0000,  0.0000,  0.0000,  1.9000\r
   5.000, 100.000, 100.000,   0,   1,   6\r
   0.000, 150.000,   1.500,   0,   2,   4\r
   0.000, 150.000,   1.400,   0,  12,   4\r
ab,  38.00,   0.00,   0.00,   0.20,9\r
0,0,15,1,1\r
9\r
`},{name:"sp29b.prm",content:`Properties of an organizing region, use GT29\r
 100,  30,   1,  22,   3,   1,  21,   3,   2,   0\r
   2,   2,   0,   8, 26.0000,  0.0000, 12.0000\r
  0.0100,  0.0050,  0.0700,  0.0000,  0.0000,  3.0000,  0.0000\r
  0.4000,  0.0090,  0.0000,  0.0000,  0.0000,  0.0000,  1.0000\r
   5.000, 100.000, 100.000,   0,   1,   6\r
   0.000, 200.000,   1.000,   0,   2,   4\r
   0.000, 200.000,   0.950,   0,  12,   4\r
ab,  26.00,   0.00,   0.00,   0.20,9\r
0,0,15,1,1\r
9\r
`},{name:"sp29c.prm",content:`Generation of a maximum at a terminal position\r
 200,  30,   1,  12,   3,   8,  21,   3,   2,   0\r
   1,   2,   0,   8, 40.0000,  0.0000, 12.0000\r
  0.0100,  0.0040,  0.0500,  0.0000,  0.0000,  2.0000,  2.0000\r
  0.4000,  0.0060,  0.0000,  0.0000,  0.0000,  0.0000,  1.9000\r
   0.000, 150.000,1200.000,   0,   1,   6\r
   0.000, 150.000,   1.600,   0,   2,   4\r
   0.000, 150.000,   1.500,   0,  12,   4\r
sab,  40.00,   0.00,   0.00,   0.20,9\r
0,0,15,1,1\r
9\r
`},{name:"sp32.prm",content:`Oscillation in a single cell, use the command GT32  to get the simulation\r
 600,   2,   1,   1,  20,   1,  23,   0,   2,   0\r
   3,   2,   0,   0,  1.0000, 80.0000,  0.0000\r
  0.0000,  0.0800,  0.0400,  0.0000,  0.0000,  1.0000,  1.0000\r
  0.0000,  0.0400,  0.0020,  0.0000,  0.0000,  1.0000,  0.2000\r
   0.000, 100.000,   1.000,   0,   0,   2\r
  10.000, 200.000,   1.000,   0,   2,   3\r
  10.000, 200.000,   0.250,   0,  12,   3\r
ab,   1.00,   0.00,   0.00,   0.25,9\r
3,0,15,0,0\r
12\r
`},{name:"sp33.prm",content:`Activator-depletion mechanism, oscillation in a single cell, use GT33\r
 300,   4,   1,   1,  20,   1,  24,   0,   2,   0\r
   3,   2,   0,   1,  1.0000, 80.0000,  0.1000\r
  0.0000,  0.0800,  0.0200,  0.0000,  0.0000,  0.0000,  0.0000\r
  0.0000,  0.0030,  0.0400,  0.0000,  0.0000,  1.0000,  0.1000\r
   0.000, 100.000,   1.000,   0,   0,   2\r
  10.000, 200.000,   0.500,   0,   2,   2\r
  10.000, 200.000,   0.300,   0,  12,   2\r
ab,   1.00,   0.00,   0.00,   0.25,9\r
3,0,15,0,0\r
12\r
`},{name:"sp33f.prm",content:`Activator-depletion mechanism, oscillation in a single cell, use GT33\r
 300,   2,   1,   1,  20,   1,  24,   0,   2,   0\r
   3,   2,   0,   1,  1.0000, 80.0000,  0.1000\r
  0.0000,  0.0800,  0.0200,  0.0000,  0.0000,  0.0000,  0.0000\r
  0.0000,  0.0030,  0.0400,  0.0000,  0.0000,  1.0000,  0.1000\r
   0.000, 100.000,   1.000,   0,   0,   2\r
  10.000, 200.000,   1.000,   0,   2,   2\r
  10.000, 200.000,   0.600,   0,  12,   2\r
ab,   1.00,   0.00,   0.00,   0.25,9\r
3,0,15,0,0\r
12\r
`},{name:"sp34.prm",content:`Oscillation, XT-3D- display\r
 110,   8,   1,  24,   2,   1,  21,   1,   2,   0\r
   1,   2,   0,   0,  7.0000,  0.0000, 12.0000\r
  0.1000,  0.0600,  0.0500,  0.0000,  0.0000,  0.5000,  0.5000\r
  0.4000,  0.0300,  0.0000,  0.0000,  0.0000,  1.0000,  1.0000\r
   0.000, 100.000, 100.000,   0,  14,   2\r
  50.000, 430.000,   0.500,   0,   2,   1\r
  50.000, 210.000,   0.200,   0,  12,   1\r
ab,   7.00,   0.00,   0.00,   0.30,9\r
2,0,15,1,2\r
12\r
`},{name:"sp34a.prm",content:`Oscillations, kd=3\r
 500,   2,   1,  24,   3,   1,  21,   1,   2,   0\r
   1,   2,   0,   0, 24.0000,  0.0000, 12.0000\r
  0.1000,  0.0600,  0.1000,  0.0000,  0.0000,  0.5000,  0.5000\r
  0.4000,  0.0300,  0.0000,  0.0000,  0.0000,  1.0000,  1.0000\r
   0.000, 100.000, 100.000,   0,  14,   2\r
   0.000, 100.000,   2.000,   0,   2,   6\r
   0.000, 100.000,   1.500,   0,  12,   6\r
ab,  24.00,   0.00,   0.00,   0.30,9\r
2,0,15,1,2\r
9\r
`},{name:"sp35a.prm",content:`Synchronous oscillation, parallel stripes on the shell\r
 455,   4,   1, 100,   9,  10,  23,   5,   2,   0\r
   3,   2,   0,   5,  6.0000,  0.0000,  0.0000\r
  0.0150,  0.0500,  0.0200,  0.0000,  0.0000,  0.0000,  0.1000\r
  0.0000,  0.0300,  0.0000,  0.0000,  0.0000,  1.0000,  0.2000\r
   0.000, 100.000,   1.000,   0,   0,   2\r
  10.000, 100.000,   2.000,   0,   6,   1\r
  10.000, 190.000,   0.070,   0,  12,   1\r
a,   0.00,   0.00,   0.00,   0.30,   0.00\r
1,0,15,1,1\r
12\r
`},{name:"sp35b.prm",content:`Thicker stripes due to saturation - but lower absolute level\r
 430,   4,   1,  50,   9,  10,  23,   5,   2,   0\r
   3,   2,   0,   5,  6.0000,  0.0000,  0.0000\r
  0.0150,  0.0500,  0.0200,  0.6000,  0.0000,  0.0000,  0.1000\r
  0.0000,  0.0300,  0.0000,  0.0000,  0.0000,  1.0000,  0.2000\r
   0.000, 100.000,   1.000,   0,   0,   2\r
 120.000, 100.000,   8.000,   0,   6,   1\r
 120.000, 190.000,   0.070,   0,  12,   1\r
a,   0.00,   0.00,   0.00,   0.30,   0.00\r
1,0,15,1,1\r
12\r
`},{name:"sp35c.prm",content:`Stripes parallel to the edge change to a perpendicular orientation\r
 430,   6,   1,  50,   9,  10,  21,   3,   2,   0\r
   3,   2, 200,   2,  6.0000,  0.0000,  0.0600\r
  0.0150,  0.0500,  0.0200,  0.0000,  0.0000,  0.0000,  0.1000\r
  0.4000,  0.0300,  0.0000,  0.0000,  0.0000,  1.0000,  0.2000\r
   0.000, 100.000,   1.000,   0,   0,   2\r
 120.000, 100.000,   2.000,   0,   6,   1\r
 120.000, 190.000,   0.070,   0,  12,   1\r
a,   0.00,   0.00,   0.00,   0.30,   0.00\r
2,0,15,1,1\r
12\r
`},{name:"sp37.prm",content:`Role of pace maker, use command GT37 for complete simulation\r
 440,  10,   1, 100,   9,  10,  24,  10,   2,   0\r
   3,   2,   0,   5,  3.0000,  0.0000,  0.0000\r
  0.0050,  0.0800,  0.0080,  0.0500,  0.0000,  0.0000,  0.1000\r
  0.0000,  0.0060,  0.0400,  0.0600,  0.0000,  1.3000,  2.0000\r
   0.000, 100.000,   1.000,   0,   0,   2\r
 120.000, 350.000,   3.000,   0,   0,   1\r
 120.000, 150.000,   0.650,   0,  12,   1\r
ab,   0.00,   0.00,   0.00,   0.30,   0.00\r
2,0,15,1,1\r
12\r
`},{name:"sp37a.prm",content:`Pace-maker and wave formation - the growing edge\r
 700,   8,   1, 100,  19,  10,  24,  10,   2,   0\r
   3,   2,   0,   5,  6.0000,  0.0000,  0.0000\r
  0.0050,  0.0800,  0.0080,  0.0500,  0.0000,  0.0000,  0.1000\r
  0.0000,  0.0059,  0.0400,  0.0600,  0.0000,  1.3000,  2.0000\r
   0.000, 100.000,   1.000,   0,   0,   2\r
  20.000, 120.000,   1.000,   0,   0,   1\r
  20.000, 120.000,   0.700,   0,  12,   1\r
ab,   6.00,   0.00,   0.00,   0.30,9\r
0,0,15,1,1\r
12\r
`},{name:"sp38.prm",content:`For simulation of pattern regulation in Strigilla, use GT38\r
 440,   8,   1,  90,   9,  10,  24,   8,   2,   0\r
   3,   2,   0,   5,  3.0000,  0.0000,  0.0000\r
  0.0050,  0.0800,  0.0080,  0.0500,  0.0000,  0.0000,  0.1000\r
  0.0000,  0.0058,  0.0400,  0.0600,  0.0000,  1.3000,  2.0000\r
   0.000, 100.000,   1.000,   0,   0,   2\r
 160.000, 350.000,   3.000,   0,   0,   1\r
 160.000, 150.000,   0.700,   0,  12,   1\r
a,   3.00,   0.00,   0.00,   0.30,0\r
2,0,15,1,1\r
12\r
`},{name:"sp410.prm",content:`Fish-bone pattern\r
 390,   3,   1,  80,   8,   9,  24,   0,   2,   0\r
  40,  20,   0,  24,  4.0000,  0.8000,  2.0000\r
  0.0100,  0.1000,  0.0025,  0.5000,  0.1000,  7.0000,  0.4000\r
  0.0300,  0.0020,  0.1000,  0.0000,  0.0000,  0.0000,  4.0000\r
   0.000, 100.000,   1.000,   0,   0,   2\r
 100.000, 100.000,   4.000,   0,   0,   2\r
 100.000,   0.000,   1.000,   0,  12,   0\r
a,   0.00,   0.00,   0.00,   0.25,   0.00\r
3,0,15,0,0\r
12\r
`},{name:"sp411.prm",content:`Dots by feedback on the source density\r
 430,   8,   1,  80,   9,  10,  41,   3,   3,   0\r
   3,   2,   0,   5,  4.0000,  0.0000,  0.0000\r
  0.0150,  0.0500,  0.0300,  0.0000,  0.0000,  0.0000,  0.1000\r
  0.4000,  0.0200,  0.0000,  0.0000,  0.0000,  1.0000,  0.2000\r
  0.0000,  0.0010,  0.0000,  0.0000,  0.0000,  0.0000,  1.0000\r
   0.000, 100.000,   1.000,   0,   0,   2\r
  20.000, 100.000,   5.000,   0,   0,   1\r
  20.000, 190.000,   0.070,   0,  12,   1\r
  20.000,   0.000,   3.000,   0,  10,   0\r
ac,   0.00,   0.00,   0.00,   0.30,   0.00\r
2,0,15,1,1\r
12\r
`},{name:"sp412.prm",content:`in this case, a spreading extinguishing reaction is assumed, see chapter 7, eq. 7.\r
 395,   3,   1,  88,   8,   9, 711,  10,   6,   0\r
  12,   1,   0,   4,  3.0000,100.0000,  0.0000\r
  0.0400,  0.0100,  0.0500,  0.2000,  0.0000,  0.0000,  0.0000\r
  0.1000,  0.0030,  0.1400,  0.0000,  0.0000,  0.0000,  4.0000\r
  0.0000,  0.0000,  0.0000,  0.0000,  0.0000,  0.0000,  0.0000\r
  0.0000,  0.0000,  0.0000,  0.0000,  0.0000,  0.0000,  0.0000\r
  0.0010,  0.0300,  0.0150,  0.0500,  0.0800,  1.0000,  1.0000\r
  0.0000,  0.0000,  0.0050,  0.0000,  0.0400,  0.0000,  4.0000\r
   0.000, 100.000,   1.000,   0,   0,   2\r
 120.000, 100.000,   0.500,   0,   0,   2\r
 120.000,   0.000,   1.000,   0,  12,   0\r
 120.000,   0.000,   1.000,   0,  12,   0\r
 120.000,   4.000,   0.000,   0,   0,   0\r
 120.000,   0.000,   0.500,   0,  12,   0\r
 120.000,   0.000,  15.000,   0,   0,  12\r
ae,   3.00,   0.00,   0.00,   0.16,   0.00\r
5,0,15,1,1\r
12\r
`},{name:"sp413b.prm",content:`Rows of patches: two activator-inhibitor systems superimposed\r
 450,   6,   1, 300,   9,   1,  42,   5,   4,   0\r
  30,  10,   0,  25,  2.0000,  0.2000, 10.0000\r
  0.0300,  0.0300,  0.0500,  0.1000,  0.0000,  0.0000,  0.0000\r
  0.0100,  0.0100,  0.0000,  1.0000,  0.0000,  0.0000,  0.3000\r
  0.0100,  0.0100,  0.0050,  0.0000,  0.0000,  0.0000,  1.0000\r
  0.4000,  0.0150,  0.0000,  0.0000,  0.0000,  0.0000,  1.0000\r
   0.000, 100.000,   1.000,   0,   0,   2\r
  20.000, 100.000,   2.000,   0,   0,   2\r
  20.000,   0.000,   1.000,   0,  12,   0\r
  20.000,   0.000,   1.000,   0,  12,   0\r
  20.000,   0.000,   0.000,   0,   0,   0\r
ac,   2.00,   0.00,   0.00,   0.00,   0.00\r
4,0,15,0,0\r
12\r
`},{name:"sp413c.prm",content:`Rows of patches: two activator-inhibitor systems superimposed: growing field\r
 450,   7, 120, 200,   9,   1,  42,   5,   4,   4\r
   1,  10,   0,  25,  2.0000,  0.2000, 10.0000\r
  0.0300,  0.0300,  0.0500,  0.1000,  0.0000,  0.0000,  0.0000\r
  0.0100,  0.0100,  0.0000,  1.0000,  0.0000,  0.0000,  0.3000\r
  0.0100,  0.0100,  0.0150,  0.0000,  0.0000,  0.0000,  1.0000\r
  0.4000,  0.0150,  0.0000,  0.0000,  0.0000,  0.0000,  1.0000\r
   0.000, 100.000,   1.000,   0,   0,   2\r
   0.000, 100.000,   2.000,   0,   0,   2\r
   0.000,   0.000,   1.000,   0,  12,   0\r
   0.000,   0.000,   1.000,   0,  12,   0\r
   0.000,   0.000,   0.000,   0,   0,   0\r
ac,   0.00,   0.00,   0.00,   0.00,   0.00\r
4,0,15,0,0\r
12\r
`},{name:"sp413d.prm",content:`Rows of Patches; AS system, AI system for control\r
 450,  12,   1, 150,   9,   1,  45,   5,   4,   0\r
  30,  10,   0,  25,  2.0000,  0.2000, 10.0000\r
  0.0300,  0.0300,  0.0100,  1.0000,  0.0000,  0.0000,  0.0000\r
  0.0100,  0.0000,  0.0100,  5.0000,  0.0000,  0.0000,  2.0000\r
  0.0100,  0.0100,  0.0050,  0.0000,  0.0000,  0.0000,  1.0000\r
  0.4000,  0.0150,  0.0000,  0.0000,  0.0000,  0.0000,  1.0000\r
   0.000, 100.000,   1.000,   0,   0,   2\r
  20.000, 100.000,   3.000,   0,   0,   2\r
  20.000,   0.000,   1.000,   0,  12,   0\r
  20.000,   0.000,   2.000,   0,  12,   0\r
  20.000,   0.000,   0.000,   0,   0,   0\r
ac,   0.00,   0.00,   0.00,   0.00, 12 \r
4,0,15,0,0\r
12\r
`},{name:"sp413e.prm",content:`Rows of patches, substrate is produced at high c\r
 450,  12,   1, 150,   9,   1,  45,   5,   4,   0\r
  30,  10,   0,  25,  2.0000,  0.2000, 10.0000\r
  0.0300,  0.0300,  0.0100,  1.0000,  0.0000,  0.0000,  0.0000\r
  0.0100,  0.0000,  0.0000,  0.0000,  0.0000,  0.0000,  2.0000\r
  0.0050,  0.0050,  0.0050,  0.1000,  0.0100,  0.0000,  1.0000\r
  0.4000,  0.0080,  0.0000,  0.0000,  0.0000,  0.0000,  1.0000\r
   0.000, 100.000,   1.000,   0,   0,   2\r
  20.000, 100.000,   3.000,   0,   0,   2\r
  20.000,   0.000,   1.000,   0,  12,   0\r
  20.000,   0.000,   2.000,   0,  12,   0\r
  20.000,   0.000,   0.000,   0,   0,   0\r
ac,   0.00,   0.00,   0.00,   0.00, 12 \r
4,0,15,0,0\r
12\r
`},{name:"sp414b.prm",content:`Shifted horizontal lines, one system\r
 390,  16,   1,  75,   8,   7,  43,   0,   2,   0\r
 200,   0,   0,  30,  3.0000,  0.3000, 12.0000\r
  0.0030,  0.1000,  0.0040,  0.1000,  0.0000,  1.0000,  1.0000\r
  0.0100,  0.0300,  0.0000,  0.0000,  0.0000,  0.0000,  2.5000\r
   0.000, 100.000, 100.000,   0,  14,   2\r
  30.000, 380.000,  50.000,   0,   0,   0\r
  30.000, 180.000,   0.700,   0,  12,   0\r
a,   3.00,   0.00,   0.00,   0.16,   0.00\r
5,0,15,1,1\r
12\r
`},{name:"sp414c.prm",content:`Shifted parallel lines: an oscillating system and a central clock\r
 390,  12,   1,  80,   8,   7,  44,   2,   4,   0\r
 200,   0,   0,  30,  4.0000,  0.3000, 12.0000\r
  0.0400,  0.0800,  0.0100,  0.1000,  0.0000,  1.0000,  1.0000\r
  0.4000,  0.0000,  0.0400,  0.0000,  0.0000,  0.0000,  1.0000\r
  0.0100,  0.0800,  0.0100,  0.0500,  0.0020,  1.0000,  1.0000\r
  0.0100,  0.0000,  0.0400,  0.0000,  0.0000,  0.0000,  1.0000\r
   0.000, 100.000, 100.000,   0,  14,   2\r
 100.000, 380.000,   8.000,   0,   0,   0\r
 100.000, 180.000,   0.700,   0,  12,   0\r
 100.000,   0.000,   8.000,   0,  10,   0\r
 100.000,   0.000,   0.000,   0,   0,   0\r
ac,   4.00,   0.00,   0.00,   0.16,   0.00\r
5,0,15,1,1\r
12\r
`},{name:"sp42.prm",content:`Natica euzona: an invisible stable system controls oscillating pigmentation\r
 390,  12,   1, 250,   8,   9, 242,  15,   2,   0\r
 140,  25,   0,  90,  2.0000,  3.0000, 30.0000\r
  0.0150,  0.1000,  0.0100,  0.5000,  0.1000,  2.5000,  0.0000\r
  0.0500,  0.0000,  0.0500,  0.0000,  0.0000,  0.0000,  2.5000\r
   0.000, 100.000,   1.000,   0,   0,   2\r
  50.000, 100.000,   4.000,   0,   6,   2\r
  50.000,   0.000,   1.000,   0,  12,   0\r
a,   2.00,   0.00,   0.00,  10.00,   0.00\r
0,0,15,0,0\r
12\r
`},{name:"sp42a.prm",content:`Natica, movie\r
 390,  12,   1, 250,  19,   9, 242,   1,   8,   0\r
 140,  25,   0,  90,  2.0000,  3.0000, 30.0000\r
  0.0150,  0.1000,  0.0100,  0.5000,  0.1000,  2.5000,  0.0000\r
  0.0500,  0.0000,  0.0500,  0.0000,  0.0000,  0.0000,  2.5000\r
  0.0000,  0.0000,  0.0000,  0.0000,  0.0000,  0.0000,  0.0000\r
  0.0000,  0.0000,  0.0000,  0.0000,  0.0000,  0.0000,  0.0000\r
  0.0000,  0.0000,  0.0000,  0.0000,  0.0000,  0.0000,  0.0000\r
  0.0000,  0.0000,  0.0000,  0.0000,  0.0000,  0.0000,  0.0000\r
  0.0000,  0.0000,  0.0000,  0.0000,  0.0000,  0.0000,  0.0000\r
  0.0000,  0.0000,  0.0000,  0.0000,  0.0000,  0.0000,  0.0000\r
   0.000, 100.000,   1.000,   0,   0,   2\r
  50.000, 100.000,   1.000,   0,   6,   2\r
  50.000, 100.000,   0.200,   0,  12,   0\r
   0.000, 100.000,   0.000,   0,   0,   0\r
   0.000, 100.000,   0.000,   0,   0,   0\r
   0.000, 100.000,   0.000,   0,   0,   0\r
   0.000, 100.000,   0.000,   0,   0,   0\r
   0.000, 100.000,   0.000,   0,   0,   0\r
   0.000, 200.000,   0.800,   0,   0,   0\r
abh,   2.00,   0.00,   0.00,  10.00,9\r
0,0,15,0,0\r
9\r
`},{name:"sp43.prm",content:`Stable and oscilllating patterns: termination of travelling waves\r
 390,  20,   1,  35,   8,   7,  24,   1,   2,   0\r
  65,  34,   0,   0,  4.0000,  1.0000,  0.0300\r
  0.0030,  0.1000,  0.0040,  0.0500,  0.0000,  1.0000,  1.0000\r
  0.0000,  0.0000,  0.0200,  0.0000,  0.0000,  0.0000,  2.5000\r
   0.000, 100.000,   1.000,   0,   0,   2\r
 200.000, 100.000,  12.000,   0,   0,   2\r
 200.000,   0.000,   0.500,   0,  12,   0\r
ab,   4.00,   0.00,   0.00,   0.00,   0.00\r
5,0,15,0,0\r
12\r
`},{name:"sp43a.prm",content:`termination of traveling waves - movie\r
 300,  15,   1,  35,  19,   7,  24,   1,   8,   0\r
  65,  34,   0,   0,  6.0000,  1.0000,  0.0300\r
  0.0030,  0.1000,  0.0040,  0.0500,  0.0000,  1.0000,  1.0000\r
  0.0000,  0.0000,  0.0200,  0.0000,  0.0000,  0.0000,  2.5000\r
  0.0000,  0.0000,  0.0000,  0.0000,  0.0000,  0.0000,  0.0000\r
  0.0000,  0.0000,  0.0000,  0.0000,  0.0000,  0.0000,  0.0000\r
  0.0000,  0.0000,  0.0000,  0.0000,  0.0000,  0.0000,  0.0000\r
  0.0000,  0.0000,  0.0000,  0.0000,  0.0000,  0.0000,  0.0000\r
  0.0000,  0.0000,  0.0000,  0.0000,  0.0000,  0.0000,  0.0000\r
  0.0000,  0.0000,  0.0000,  0.0000,  0.0000,  0.0000,  0.0000\r
   0.000, 100.000,   1.000,   0,   0,   2\r
 200.000, 100.000,   0.400,   0,   6,   2\r
 200.000, 100.000,   0.100,   0,  12,   0\r
   0.000, 100.000,   0.000,   0,   0,   0\r
   0.000, 100.000,   0.000,   0,   0,   0\r
   0.000, 100.000,   0.000,   0,   0,   0\r
   0.000, 100.000,   0.000,   0,   0,   0\r
   0.000, 100.000,   0.000,   0,   0,   0\r
   0.000, 180.000,   0.800,   0,   0,   0\r
abh,   6.00,   0.00,   0.00,   0.00,9\r
5,0,15,0,0\r
12\r
`},{name:"sp45b.prm",content:`Amorina marcandrewi: more frequent wave terminations\r
 390,  16,   1, 140,   8,   9,  24,   3,   2,   0\r
  75,  10,   0,  45,  3.0000,  1.0000, 20.0000\r
  0.0020,  0.1000,  0.0020,  8.0000,  0.0000,  1.0000,  0.0000\r
  0.0010,  0.0000,  0.0200,  0.0000,  0.0000,  0.2000,  6.0000\r
   0.000, 100.000,   1.000,   0,   0,   2\r
  80.000, 100.000,  12.000,   0,   6,   2\r
  80.000,   0.000,   0.300,   0,  12,   0\r
a,   3.00,   0.00,   0.00,   0.25,   0.00\r
4,0,15,0,0\r
12\r
`},{name:"sp45c.prm",content:`Amorina undulata, less termination\r
 390,   8,   1, 265,   8,   9,  24,   2,   2,   0\r
 160,  30,   0,  80,  1.0000,  1.0000, 10.0000\r
  0.0030,  0.1000,  0.0030,  2.0000,  0.0000,  1.0000,  0.0000\r
  0.0000,  0.0000,  0.0400,  0.0000,  0.0000,  0.0000,  2.0000\r
   0.000, 100.000,   1.000,   0,   0,   2\r
   5.000, 100.000,   9.000,   0,   0,   2\r
   5.000,   0.000,   1.000,   0,  12,   0\r
a,   1.00,   0.00,   0.00,   0.00,   0.00\r
5,0,15,0,0\r
12\r
`},{name:"sp46.prm",content:`Palmadusta diluculum (continue with N to get the full steep lines)\r
 390,   8,   1, 300,   8,   9,  24,   2,   2,   0\r
 160,  30,   0,  90,  2.0000, -0.4000, 10.0000\r
  0.0030,  0.1000,  0.0050,  4.0000,  0.0000,  1.0000,  0.0000\r
  0.0000,  0.0000,  0.0400,  0.0000,  0.0000,  0.0000,  2.0000\r
   0.000, 100.000,   1.000,   0,   0,   2\r
   5.000, 100.000,   9.000,   0,   4,   2\r
   5.000,   0.000,   1.000,   0,  12,   0\r
a,   2.00,   0.00,   0.00,   0.00,   0.00\r
5,0,15,0,0\r
12\r
`},{name:"sp46a.prm",content:`Palmadusta Movie\r
 390,   8,   1, 300,  19,   9,  24,   2,   8,   0\r
 160,  30,   0,  90,  2.0000, -0.4000, 10.0000\r
  0.0030,  0.1000,  0.0050,  4.0000,  0.0000,  1.0000,  0.0000\r
  0.0000,  0.0000,  0.0400,  0.0000,  0.0000,  0.0000,  2.0000\r
  0.0000,  0.0000,  0.0000,  0.0000,  0.0000,  0.0000,  0.0000\r
  0.0000,  0.0000,  0.0000,  0.0000,  0.0000,  0.0000,  0.0000\r
  0.0000,  0.0000,  0.0000,  0.0000,  0.0000,  0.0000,  0.0000\r
  0.0000,  0.0000,  0.0000,  0.0000,  0.0000,  0.0000,  0.0000\r
  0.0000,  0.0000,  0.0000,  0.0000,  0.0000,  0.0000,  0.0000\r
  0.0000,  0.0000,  0.0000,  0.0000,  0.0000,  0.0000,  0.0000\r
   0.000, 100.000,   1.000,   0,   0,   2\r
   0.000, 100.000,   5.000,   0,   4,   2\r
   0.000,   0.000,   1.000,   0,  12,   0\r
   0.000, 100.000,   0.000,   0,   0,   0\r
   0.000, 100.000,   0.000,   0,   0,   0\r
   0.000, 100.000,   0.000,   0,   0,   0\r
   0.000, 100.000,   0.000,   0,   0,   0\r
   0.000, 100.000,   0.000,   0,   0,   0\r
   0.000,  50.000,   0.800,   0,   0,   0\r
ah,   2.00,   0.00,   0.00,   0.00,9\r
5,0,15,0,0\r
12\r
`},{name:"sp47.prm",content:`Connected arches\r
 390,  16,   1, 180,   8,   9, 242,  10,   2,   0\r
 100,  30,   0,  60,  1.0000,  3.0000, 20.0000\r
  0.0200,  0.1000,  0.0100,  0.5000,  0.0000,  1.0000,  0.0000\r
  0.0600,  0.0000,  0.0250,  0.0000,  0.0000,  0.0000,  2.0000\r
   0.000, 100.000,   1.000,   0,   0,   2\r
 120.000, 100.000,   3.000,   0,   0,   2\r
 120.000,   0.000,   0.500,   0,  12,   0\r
a,   1.00,   0.00,   0.00,   0.60,   0.00\r
3,0,15,0,0\r
12\r
`},{name:"sp48c.prm",content:`Nautilus\r
 550,  10,   1,  60,  15,   7,  24,   0,   2,   0\r
   3,   0,   0,   4,  2.0000,  0.0000,  0.0000\r
  0.0600,  0.1000,  0.0080,  3.0000,  0.0000,  1.0000,  1.0000\r
  0.1500,  0.0000,  0.0450,  0.0000,  0.0000,  2.5000,  2.5000\r
   0.000, 100.000,   1.000,   0,   0,   2\r
  10.000, 100.000,   3.000,   0,   4,   2\r
  10.000,   0.000,   1.000,   0,  12,   0\r
a,   2.00,   0.00,   0.00,  -0.02,9\r
5,0,15,0,0\r
12\r
`},{name:"sp48d.prm",content:`Nautilus, side view\r
 390,  10,   1, 140,   8,   7,  24,   0,   2,   0\r
 160,  70,   0,   4,  2.0000,  2.5000,  0.0000\r
  0.0600,  0.1000,  0.0055,  3.0000,  0.0000,  1.0000,  1.0000\r
  0.1500,  0.0000,  0.0500,  0.0000,  0.0000,  0.0000,  2.5000\r
   0.000, 100.000,   1.000,   0,   0,   2\r
 100.000, 100.000,   6.000,   0,   4,   2\r
 100.000,   0.000,   1.000,   0,  12,   0\r
a,   2.00,   0.00,   0.00,  -0.02,9\r
5,0,15,0,0\r
12\r
`},{name:"sp48e.prm",content:`Nautilus; normal XT-plot\r
 550,  10,   1,  60,   8,   7,  24,   0,   2,   0\r
   3,   0,   0,   4,  2.0000,  0.0000,  0.0000\r
  0.0600,  0.1000,  0.0080,  3.0000,  0.0000,  1.0000,  1.0000\r
  0.1500,  0.0000,  0.0450,  0.0000,  0.0000,  2.5000,  2.5000\r
   0.000, 100.000,   1.000,   0,   0,   2\r
 200.000, 200.000,   3.000,   0,   4,   2\r
 200.000,   0.000,   1.000,   0,  12,   0\r
a,   2.00,   0.00,   0.00,  -0.02,0\r
5,0,15,0,0\r
12\r
`},{name:"sp49.prm",content:`Voluta musica: transition of oscillating into stable patterns\r
 390,  15,   1, 100,   8,   7,  24,   0,   2,   0\r
  90,  50,   0,   4,  3.0000,  1.0000,  0.0000\r
  0.0030,  0.1000,  0.0040,  2.0000,  0.0000,  1.0000,  1.0000\r
  0.0200,  0.0000,  0.0300,  0.0000,  0.0000,  0.0000,  2.5000\r
   0.000, 100.000,   1.000,   0,   0,   2\r
 100.000, 100.000,  10.000,   0,   0,   2\r
 100.000,   0.000,   0.300,   0,  12,   0\r
a,   3.00,   0.00,   0.00,   0.00,   0.00\r
5,0,15,0,0\r
12\r
`},{name:"sp510.prm",content:`Oblique rows of dots, set DB=.03 for parallel rows\r
 450,  12,   1, 205,   9,   5,  53,   5,   3,   0\r
   3,   2,   0,   1,  3.0000,  0.0000,  0.3000\r
  0.0100,  0.0200,  0.0500,  0.0000,  0.0000,  1.0000,  1.0000\r
  0.0040,  0.0020,  0.0000,  0.0000,  0.0000,  1.0000,  1.0000\r
  0.4000,  0.0100,  0.0000,  0.0000,  0.0000,  1.0000,  1.0000\r
   0.000, 100.000,   1.000,   0,   0,   2\r
  20.000, 100.000,   2.000,   0,   0,   2\r
  20.000,   0.000,   1.000,   0,  10,   0\r
  20.000,   0.000,   4.000,   0,  12,   0\r
abc,   3.00,   0.00,   0.00,   0.25,0\r
1,0,15,0,0\r
12\r
`},{name:"sp510a.prm",content:`Oblique row of dots, b is short-ranging\r
 450,  30,   1, 300,   9,   5,  53,   5,   3,   0\r
   3,   2,   0,   1,  2.0000,  0.0000,  0.3000\r
  0.0050,  0.0050,  0.0100,  0.0500,  0.0000,  1.0000,  1.0000\r
  0.4000,  0.0020,  0.0000,  0.0000,  0.0000,  1.0000,  1.0000\r
  0.0050,  0.0010,  0.0000,  0.0000,  0.0000,  1.0000,  1.0000\r
   0.000, 100.000,   1.000,   0,   0,   2\r
  20.000, 100.000,   2.000,   0,   0,   4\r
  20.000, 100.000,   1.000,   0,  12,   4\r
  20.000, 100.000,   4.000,   0,  13,   4\r
a,   2.00,   0.00,   0.00,   0.25,12\r
1,0,15,0,0\r
12\r
`},{name:"sp511b.prm",content:`Oblique row of dots\r
 450,  12,   1, 120,   9,   5,  53,   5,   3,   0\r
   3,   2,   0,   1,  3.0000,  0.0000,  0.3000\r
  0.0100,  0.0200,  0.0500,  0.0000,  0.0000,  1.0000,  1.0000\r
  0.0040,  0.0020,  0.0000,  0.0000,  0.0000,  1.0000,  1.0000\r
  0.4000,  0.0100,  0.0000,  0.0000,  0.0000,  1.0000,  1.0000\r
   0.000, 100.000,   1.000,   0,   0,   2\r
 120.000, 100.000,   1.500,   0,   6,   2\r
 120.000,   0.000,   1.000,   0,  10,   0\r
 120.000,   0.000,   4.000,   0,  12,   0\r
a,   3.00,   0.00,   0.00,   0.25,0\r
1,0,15,0,0\r
12\r
`},{name:"sp511c.prm",content:`spots and stripes\r
 450,  12,   1, 120,   9,   5, 532,   5,   3,   0\r
   3,   2,   0,   1,  3.0000,  0.0000,  0.3000\r
  0.0100,  0.0200,  0.0500,  0.0500,  0.0000,  1.0000,  1.0000\r
  0.0100,  0.0020,  0.0000,  0.0000,  0.0000,  1.0000,  1.0000\r
  0.4000,  0.0100,  0.0000,  0.0000,  0.0000,  1.0000,  1.0000\r
   0.000, 100.000,   1.000,   0,   0,   2\r
 120.000, 100.000,   2.000,   0,   6,   2\r
 120.000,   0.000,   1.000,   0,  10,   0\r
 120.000,   0.000,   4.000,   0,  12,   0\r
a,   3.00,   0.00,   0.00,   0.25,   0.00\r
1,0,15,0,0\r
12\r
`},{name:"sp511d.prm",content:`Signals jumping around a circle\r
 300,  50,   1,  32,  17,   5,  53,   1,   3,   0\r
  99,   2,   0,   1,  8.0000,  0.0000,  0.3000\r
  0.0100,  0.0100,  0.1000,  0.0000,  0.0000,  1.0000,  1.0000\r
  0.0060,  0.0010,  0.0000,  0.0000,  0.0000,  1.0000,  1.0000\r
  0.4000,  0.0050,  0.0000,  0.0000,  0.0000,  1.0000,  1.0000\r
   0.000, 100.000,   1.000,   0,   0,   2\r
 320.000, 200.000,   0.300,   0,   0,   2\r
 320.000, 200.000,   0.300,   0,  10,   0\r
 320.000, 200.000,   0.300,   0,  12,   0\r
abc,   0.00,   0.00,   0.00,   0.25, 9 \r
1,0,15,0,0\r
9\r
`},{name:"sp512.prm",content:`Isolated triangles, set db=0 for connected triangles\r
 450,  20,   1, 120,   6,   5,  54,   5,   3,   0\r
   3,   2,   0,   1,  3.0000,  0.0000,  0.3000\r
  0.0100,  0.0100,  0.0800,  0.0000,  0.0000,  0.0000,  0.0000\r
  0.0050,  0.0015,  0.0000,  0.1000,  0.0000,  1.0000,  0.1000\r
  0.4000,  0.0150,  0.0000,  1.0000,  0.0000,  1.0000,  0.1000\r
   0.000, 100.000,   1.000,   0,   0,   2\r
 100.000, 100.000,   1.000,   0,   0,   2\r
 100.000,   0.000,   1.000,   0,  10,   0\r
 100.000,   0.000,   4.000,   0,  12,   0\r
a,   0.00,   0.00,   0.00,   0.25,   0.00\r
3,0,15,0,0\r
12\r
`},{name:"sp512b.prm",content:`Isolated triangles, set db=0 for connected triangles\r
 450,  20,   1, 120,   6,   5,  54,   5,   3,   0\r
   3,   2,   0,   1,  3.0000,  0.0000,  0.3000\r
  0.0100,  0.0100,  0.0800,  0.0000,  0.0000,  0.0000,  0.0000\r
  0.0000,  0.0015,  0.0000,  0.1000,  0.0000,  1.0000,  0.1000\r
  0.4000,  0.0150,  0.0000,  1.0000,  0.0000,  1.0000,  0.1000\r
   0.000, 100.000,   1.000,   0,   0,   2\r
 100.000, 100.000,   1.000,   0,   0,   2\r
 100.000,   0.000,   1.000,   0,  10,   0\r
 100.000,   0.000,   4.000,   0,  12,   0\r
a,   0.00,   0.00,   0.00,   0.25, 12 \r
3,0,15,0,0\r
12\r
`},{name:"sp51a.prm",content:`Spontaneous wave formation by destabilization of a stable pattern (XT)\r
 455, 100,   1,  50,   9,   5,  51,   5,   3,   0\r
   3,   2,   0,   0,  5.0000,  0.0000,  3.0000\r
  0.0050,  0.0100,  0.0000,  0.0000,  0.0000,  1.0000,  1.0000\r
  0.4000,  0.0000,  0.0150,  1.0000,  0.0000,  0.0500,  2.0000\r
  0.0000,  0.0010,  0.0000,  1.0000,  0.0000,  1.0000,  1.0000\r
   0.000, 100.000,   1.000,   0,   0,   2\r
 180.000, 180.000,   0.500,   0,   0,   4\r
 180.000, 180.000,   0.500,   0,   2,   4\r
 180.000, 180.000,   0.500,   0,  12,   4\r
abc,   5.00,   0.00,   0.00,   0.25,0\r
3,0,15,0,0\r
12\r
`},{name:"sp51b.prm",content:`on ring, very fast orientation of waves\r
 455, 100,   1, 100,   9,   5,  51,   5,   3,   0\r
  99,   2,   0,   0,  5.0000,  0.0000,  3.0000\r
  0.0050,  0.0100,  0.0000,  0.0000,  0.0000,  1.0000,  1.0000\r
  0.4000,  0.0000,  0.0150,  1.0000,  0.0000,  0.0500,  2.0000\r
  0.0030,  0.0010,  0.0100,  2.0000,  0.0000,  1.0000,  1.0000\r
   0.000, 100.000,   1.000,   0,   0,   2\r
  50.000, 180.000,   0.500,   0,   0,   4\r
  50.000, 180.000,   0.500,   0,   2,   4\r
  50.000, 180.000,   0.500,   0,  12,   4\r
abc,   5.00,   0.00,   0.00,   0.25,0\r
3,0,15,0,0\r
12\r
`},{name:"sp51m.prm",content:`Spontaneous wave formation by destabilizing a stable pattern\r
 250, 100,   1,  50,  19,   5,  51,   5,   3,   0\r
   3,   2,   0,   0, 10.0000,  0.0000,  3.0000\r
  0.0050,  0.0100,  0.0000,  0.0000,  0.0000,  1.0000,  1.0000\r
  0.4000,  0.0000,  0.0150,  1.0000,  0.0000,  0.0500,  2.0000\r
  0.0000,  0.0010,  0.0000,  1.0000,  0.0000,  1.0000,  1.0000\r
   0.000, 100.000,   1.000,   0,   0,   2\r
  50.000, 180.000,   0.500,   0,   0,   4\r
  50.000, 180.000,   0.500,   0,   2,   4\r
  50.000, 180.000,   0.500,   0,  52,   4\r
cab,  10.00,   0.00,   0.00,   0.25,9\r
3,0,15,0,0\r
9\r
`},{name:"sp51n.prm",content:`Spontaneous generation of travelling waves in a circle\r
 800,   8,   1,  24,  17,   5,  51,   5,   3,   0\r
   3,   2,   0,   0, 24.0000,  0.0000,  3.0000\r
  0.0100,  0.0500,  0.0050,  1.0000,  0.0500,  1.0000,  1.0000\r
  0.0000,  0.0000,  0.0300,  1.0000,  0.0000,  0.0500,  7.0000\r
  0.4000,  0.0350,  0.0000,  2.0000,  0.0000,  1.0000,  1.0000\r
   0.000, 100.000,   1.000,   0,   0,   2\r
   0.000, 150.000,   3.000,   0,   2,   2\r
  50.000, 150.000,   0.200,   0,   1,   0\r
  50.000, 150.000,   1.000,   0,  32,   4\r
abc,  24.00,   0.00,   0.00,   0.25,9\r
3,0,15,0,0\r
1\r
`},{name:"sp52.prm",content:`Meshwork-oblique line transition; set bb to .05 or .03\r
 450,   6,   1,  80,   9,   5,  51,   5,   3,   0\r
   3,   2,   0,   0,  5.0000,  0.0000,  5.0000\r
  0.0100,  0.0800,  0.0100,  0.1000,  0.0000,  1.0000,  1.0000\r
  0.3000,  0.0000,  0.0800,  0.0000,  0.0000,  0.0000,  1.0000\r
  0.0020,  0.0100,  0.0000,  1.0000,  0.0000,  1.0000,  1.0000\r
   0.000, 100.000,   1.000,   0,   0,   2\r
   0.000, 100.000,   3.000,   0,   0,   2\r
 310.000,   0.000,   1.000,   0,  12,   0\r
   0.000,   0.000,   3.000,   0,  10,   0\r
a,   0.00,   0.00,   0.00,   0.25,   0.00\r
3,0,15,0,0\r
12\r
`},{name:"sp53.prm",content:`Kos-shells, set rc = 0.033 for transition to oblique lines\r
 452,   8,   1, 100,   9,   5,  51,   5,   3,   0\r
   3,   2,   0,   0,  5.0000,  0.0000,  3.0000\r
  0.0100,  0.0500,  0.0050,  1.0000,  0.0500,  1.0000,  1.0000\r
  0.0000,  0.0000,  0.0300,  1.0000,  0.0000,  0.0500,  7.0000\r
  0.4000,  0.0220,  0.0000,  2.0000,  0.0000,  1.0000,  1.0000\r
   0.000, 100.000,   1.000,   0,   0,   2\r
  50.000, 100.000,   3.000,   0,   6,   2\r
  50.000,   0.000,   1.000,   0,  12,   0\r
  50.000,   0.000,   0.000,   0,  10,   0\r
a,   0.00,   0.00,   0.00,   0.25, 12 \r
3,0,15,0,0\r
12\r
`},{name:"sp53a.prm",content:`Koos-shells as movie, the wave-solution\r
 800,  12,   1, 100,  17,   5,  51,   5,   3,   0\r
  99,   2,   0,   0,  5.0000,  0.0000,  3.0000\r
  0.0100,  0.0500,  0.0050,  1.0000,  0.0500,  1.0000,  1.0000\r
  0.0000,  0.0000,  0.0300,  1.0000,  0.0000,  0.0500,  7.0000\r
  0.4000,  0.0330,  0.0000,  2.0000,  0.0000,  1.0000,  1.0000\r
   0.000, 100.000,   1.000,   0,   0,   2\r
   0.000, 180.000,   1.500,   0,   0,   2\r
   0.000, 180.000,   0.200,   0,   2,   0\r
   0.000, 180.000,   1.000,   0,  32,   4\r
abc,   5.00,   0.00,   0.00,   0.25,9\r
3,0,15,0,0\r
12\r
`},{name:"sp54.prm",content:`Oblique-wavy transition, k3 determines time of perturbation\r
 450,   9,   1, 140,   6,   5,  51,   5,   3,   0\r
   3,   2, 300,   6,  3.0000,  0.0000,  0.1000\r
  0.0100,  0.0500,  0.0030,  1.0000,  0.0500,  1.0000,  1.0000\r
  0.0000,  0.0000,  0.0200,  1.0000,  0.0000,  0.0500,  9.0000\r
  0.4000,  0.0300,  0.0000,  5.0000,  0.0000,  1.0000,  1.0000\r
   0.000, 100.000,   1.000,   0,   0,   2\r
 120.000, 100.000,   4.000,   0,   6,   2\r
 120.000,   0.000,   1.000,   0,  12,   0\r
 120.000,   0.000,   0.000,   0,  10,   0\r
a,   3.00,   0.00,   0.00,   0.25,   0.00\r
3,0,15,0,0\r
12\r
`},{name:"sp55.prm",content:`Oblique lines, begin and end partially out of phase (continue with <N>)\r
 440,  16,   1, 140,   6,   5,  51,   5,   3,   0\r
   3,   2,   0,   6,  4.0000,  0.0000,  0.1000\r
  0.0015,  0.0200,  0.0050,  1.0000,  0.0000,  1.0000,  1.0000\r
  0.4000,  0.0000,  0.0060,  0.0000,  0.0000,  0.0050,  1.0000\r
  0.0020,  0.0040,  0.0000,  1.0000,  0.0000,  1.0000,  1.0000\r
   0.000, 100.000,   1.000,   0,   0,   2\r
  40.000, 100.000,  10.000,   0,   0,   2\r
  40.000,   0.000,   1.000,   0,  12,   0\r
  40.000,   0.000,   3.000,   0,  10,   0\r
a,   4.00,   0.00,   0.00,   0.25,   0.00\r
3,0,15,0,0\r
12\r
`},{name:"sp56.prm",content:`Chess board, change bb to .006 for oblique lines\r
 750,   8,   1,  70,   9,   5,  51,   5,   3,   0\r
   3,   2,   0,   6,  8.0000,  0.0000,  0.1000\r
  0.0015,  0.0200,  0.0050,  1.0000,  0.0000,  1.0000,  1.0000\r
  0.4000,  0.0000,  0.0040,  0.0000,  0.0000,  0.0050,  1.0000\r
  0.0020,  0.0040,  0.0000,  1.0000,  0.0000,  1.0000,  1.0000\r
   0.000, 100.000,   1.000,   0,   0,   2\r
  20.000, 100.000,  10.000,   0,   6,   2\r
  20.000,   0.000,   1.000,   0,  12,   0\r
  20.000,   0.000,   3.000,   0,  10,   0\r
a,   8.00,   0.00,   0.00,   0.25,0\r
3,0,15,0,0\r
6\r
`},{name:"sp56b.prm",content:`Spontaneous generation of traveling waves \r
 800,  30,   1,  40,  17,   5,  51,   2,   3,   0\r
  99,   2,   0,   0,  8.0000,  0.0000,  5.0000\r
  0.0015,  0.0200,  0.0060,  2.0000,  0.0000,  1.0000,  1.0000\r
  0.4000,  0.0000,  0.0050,  0.0000,  0.0000,  0.0050,  1.0000\r
  0.0020,  0.0040,  0.0000,  1.0000,  0.0000,  1.0000,  1.0000\r
   0.000, 100.000,   1.000,   0,   0,   2\r
   0.000, 100.000,   3.000,   0,   0,   6\r
   0.000, 100.000,   1.300,   0,  22,   6\r
   0.000, 100.000,   4.000,   0,  12,   6\r
acb,   8.00,   0.00,   0.00,   0.25,9\r
3,0,15,0,0\r
9\r
`},{name:"sp56m.prm",content:`Chessboard, kd= 19; movie\r
 600,  15,   1,  40,  19,   5,  51,   2,   3,   0\r
   3,   2,   0,   0,  8.0000,  0.0000,  5.0000\r
  0.0015,  0.0200,  0.0030,  3.0000,  0.0000,  1.0000,  1.0000\r
  0.4000,  0.0000,  0.0030,  0.0000,  0.0000,  0.0050,  1.0000\r
  0.0020,  0.0040,  0.0000,  1.0000,  0.0000,  1.0000,  1.0000\r
   0.000, 100.000,   1.000,   0,   0,   2\r
   0.000, 100.000,   3.000,   0,   6,   6\r
   0.000, 100.000,   1.300,   0,   2,   6\r
   0.000, 100.000,   4.000,   0,  12,   6\r
acb,   8.00,   0.00,   0.00,   0.25,9\r
3,0,15,0,0\r
9\r
`},{name:"sp57.prm",content:`Crossings, without branches\r
 450,   6,   1, 205,   9,   5,  51,   5,   3,   0\r
   3,   2, 300,   6,  3.0000,  0.0000,  0.2000\r
  0.0100,  0.0800,  0.0001,  0.5000,  0.0000,  1.0000,  0.0000\r
  0.0000,  0.0050,  0.1000,  1.0000,  0.0000,  0.0000,  5.0000\r
  0.4000,  0.0200,  0.0000,  3.0000,  0.0000,  0.1000,  0.0000\r
   0.000, 100.000,   1.000,   0,   0,   2\r
   5.000, 100.000,   2.000,   0,   0,   2\r
   5.000, 100.000,   0.100,   0,  10,   0\r
   5.000, 100.000,   1.000,   0,  12,   0\r
acb,   3.00,   0.00,   0.00,   0.25,   0.00\r
3,0,15,0,0\r
12\r
`},{name:"sp57a.prm",content:`Crossing without branches: situation at the growing edge\r
 180,   6,   1,  75,  19,   5,  51,   5,   3,   0\r
   3,   2,   0,   6,  8.0000,  0.0000,  0.2000\r
  0.0100,  0.0800,  0.0001,  0.5000,  0.0000,  1.0000,  0.0000\r
  0.0000,  0.0050,  0.1000,  1.0000,  0.0000,  0.0000,  5.0000\r
  0.4000,  0.0200,  0.0000,  3.0000,  0.0000,  0.1000,  0.0000\r
   0.000, 100.000,   1.000,   0,   0,   2\r
   0.000, 100.000,   1.000,   0,   0,   2\r
   0.000, 100.000,   0.100,   0,  10,   0\r
   0.000, 100.000,   1.000,   0,  12,   0\r
acb,   8.00,   0.00,   0.00,   0.25,9\r
3,0,15,0,0\r
9\r
`},{name:"sp57b.prm",content:`Demo for crossing step by step, continue with C\r
   1,  50,   3,  44,  19,   2,  51,   0,   3,   0\r
   3,   2, 300,   6,  8.0000,  0.0000,  0.2000\r
  0.0100,  0.0800,  0.0001,  0.5000,  0.0000,  1.0000,  0.0000\r
  0.0000,  0.0050,  0.1000,  1.0000,  0.0000,  0.0000,  5.0000\r
  0.4000,  0.0200,  0.0000,  3.0000,  0.0000,  0.1000,  0.0000\r
   0.000, 100.000,   1.000,   0,   0,   2\r
   0.000, 100.000,   0.500,   0,   0,   2\r
   0.000, 100.000,   0.090,   0,  10,   0\r
   0.000, 100.000,   1.000,   0,  52,   4\r
cab,   8.00,   0.00,   0.00,   0.25,0\r
3,0,15,0,0\r
12\r
`},{name:"sp57c.prm",content:`Tapes literatus (movie): after a perturbation wave splitting occurs\r
 455,   2,   1,  50,  19,   1,  51,   5,   3,   0\r
   3,   2, 250,   6, 10.0000,  0.0000,  0.2000\r
  0.0100,  0.0800,  0.0001,  0.5000,  0.0000,  1.0000,  0.0000\r
  0.0000,  0.0050,  0.1000,  1.0000,  0.0000,  0.0000,  5.0000\r
  0.4000,  0.0200,  0.0000,  3.0000,  0.0000,  0.1000,  0.0000\r
   0.000, 100.000,   1.000,   0,   0,   2\r
   0.000, 100.000,   1.500,   0,   0,   2\r
   0.000, 100.000,   0.200,   0,  10,   0\r
   0.000, 100.000,   1.500,   0,  12,   0\r
acb,  10.00,   0.00,   0.00,   0.25,9\r
3,0,15,0,0\r
9\r
`},{name:"sp58.prm",content:`Wave penetrations and backwards waves\r
 455,  18,   1, 200,   9,   5,  51,   5,   3,   0\r
   3,   2, 300,   6,  3.0000,  0.0000,  0.2000\r
  0.0100,  0.0800,  0.0001,  1.0000,  0.0000,  1.0000,  0.0000\r
  0.0000,  0.0040,  0.1000,  1.0000,  0.0000,  0.0000, 15.0000\r
  0.4000,  0.1000,  0.0000, 11.0000,  0.0000,  0.1000,  0.0000\r
   0.000, 100.000,   1.000,   0,   0,   2\r
  20.000, 100.000,   3.000,   0,   0,   2\r
  20.000,   0.000,   1.000,   0,  12,   0\r
  20.000,   0.000,   2.000,   0,  12,   0\r
ac,   3.00,   0.00,   0.00,   0.25,0\r
3,0,15,0,0\r
12\r
`},{name:"sp58a.prm",content:`Initiation of backwards waves in the crossing model, depends on fluktuations\r
 400,  20,   1,  70,  19,   1,  51,   5,   3,   0\r
   3,   2,   0,   6,  9.0000,  0.0000,  0.2000\r
  0.0100,  0.0800,  0.0001,  1.1000,  0.0000,  1.0000,  0.0000\r
  0.0000,  0.0040,  0.1000,  1.0000,  0.0000,  0.0000, 15.0000\r
  0.4000,  0.1000,  0.0000, 11.0000,  0.0000,  0.1000,  0.0000\r
   0.000, 100.000,   1.000,   0,   0,   2\r
   5.000, 100.000,   3.000,   0,   0,   2\r
   5.000, 100.000,   0.100,   0,  10,   0\r
   5.000, 100.000,   2.000,   0,  12,   0\r
acb,   9.00,   0.00,   0.00,   0.25,9\r
3,0,15,0,0\r
9\r
`},{name:"sp58m.prm",content:`Crossing and branching, movie\r
 455,  18,   1, 150,  19,   5,  51,   5,   3,   0\r
   3,   2, 300,   6,  4.0000,  0.0000,  0.2000\r
  0.0100,  0.0800,  0.0001,  1.0000,  0.0000,  1.0000,  0.0000\r
  0.0000,  0.0040,  0.1000,  1.0000,  0.0000,  0.0000, 15.0000\r
  0.4000,  0.1000,  0.0000, 11.0000,  0.0000,  0.1000,  0.0000\r
   0.000, 100.000,   1.000,   0,   0,   2\r
   0.000, 100.000,   2.000,   0,   0,   2\r
   0.000, 100.000,   0.040,   0,   2,   0\r
   0.000, 100.000,   2.000,   0,  12,   0\r
acb,   4.00,   0.00,   0.00,   0.25,9\r
3,0,15,0,0\r
9\r
`},{name:"sp59.prm",content:`Tiling pattern: one activator and two substrates\r
 445,  12,   1, 305,   6,   5,  52,   0,   3,   0\r
   3,   2,   0,   0,  2.0000,  0.0000,  4.0000\r
  0.0050,  0.0300,  0.0000,  0.0500,  0.0000,  1.0000,  0.0001\r
  0.0000,  0.0000,  0.0100,  0.0500,  0.0100,  1.0000,  4.0000\r
  0.3000,  0.0000,  0.0200,  0.0000,  0.0000,  1.0000,  0.0001\r
   0.000, 100.000,   1.000,   0,   0,   2\r
   0.000, 100.000,   2.000,   0,   0,   2\r
 310.000,   0.000,   1.000,   0,  12,   0\r
   0.000,   0.000,   1.000,   0,  12,   0\r
a,   2.00,  15.00,   0.00,   0.00,0\r
3,0,15,0,0\r
12\r
`},{name:"sp59m.prm",content:`one activator, two substrates, movie: tiling pattern\r
 300,  16,   1, 155,  19,   5,  52,   0,   3,   0\r
   3,   2,   0,   0,  3.0000,  0.0000,  4.0000\r
  0.0050,  0.0300,  0.0000,  0.0500,  0.0000,  1.0000,  0.0001\r
  0.0000,  0.0000,  0.0100,  0.0500,  0.0100,  1.0000,  4.0000\r
  0.3000,  0.0000,  0.0200,  0.0000,  0.0000,  1.0000,  0.0001\r
   0.000, 100.000,   1.000,   0,   0,   2\r
   0.000, 100.000,   0.300,   0,   0,   2\r
   0.000, 100.000,   0.300,   0,  12,   0\r
   0.000, 100.000,   0.250,   0,   2,   0\r
abc,   3.00,  15.00,   0.00,   0.00,9\r
3,0,15,0,0\r
9\r
`},{name:"sp61.prm",content:`Oliva porphyria\r
 455,   4,   1, 206,   9,   5,  61,  15,   3,   0\r
   3,   2,   0,   0,  3.0000,  0.0000,  5.0000\r
  0.0150,  0.1000,  0.0001,  0.2500,  0.1000,  2.5000,  0.0001\r
  0.0000,  0.0180,  0.0000,  0.1000,  0.0000,  0.0000,  0.1000\r
  0.0000,  0.1000,  0.0000,  0.0000,  0.0000,  0.1000,  0.3000\r
   0.000, 100.000,   1.000,   0,   0,   2\r
  10.000, 100.000,   2.500,   0,   0,   2\r
  10.000, 100.000,   5.000,   0,  12,   0\r
  10.000, 100.000,  10.000,   0,  10,   0\r
abc,   3.00,   0.00,   0.00,   0.25,12\r
0,0,15,0,0\r
12\r
`},{name:"sp62.prm",content:`Oliva porphyra: movie of the growing edge\r
 445,   3,   1,  85,  19,   5,  61,  15,   3,   0\r
   3,   2,   0,   0,  7.0000,  0.0000,  5.0000\r
  0.0150,  0.1000,  0.0001,  0.2500,  0.1000,  2.5000,  0.0001\r
  0.0000,  0.0180,  0.0000,  0.1000,  0.0000,  0.0000,  0.1000\r
  0.0000,  0.1000,  0.0000,  0.0000,  0.0000,  0.1000,  0.1000\r
   0.000, 100.000,   1.000,   0,   0,   2\r
  10.000,  60.000,   1.000,   0,   0,   5\r
  10.000,  60.000,   1.500,   0,  12,   5\r
  10.000,  60.000,   3.000,   0,  10,   5\r
abc,   0.00,   0.00,   0.00,   0.25, 9 \r
0,0,15,0,0\r
9\r
`},{name:"sp63.prm",content:`Oliva porphyria, larger field\r
 450,  12,   1, 630,   7,   5,  61,   5,   3,   0\r
   3,   2,   0,   0,  1.0000,  0.0000,  5.0000\r
  0.0150,  0.1000,  0.0001,  0.2500,  0.1000,  2.5000,  0.0001\r
  0.0000,  0.0140,  0.0000,  0.1000,  0.0000,  0.0000,  0.1000\r
  0.0000,  0.1000,  0.0000,  0.0000,  0.0000,  0.1000,  0.1000\r
   0.000, 100.000,   1.000,   0,   0,   2\r
   4.000, 100.000,   2.500,   0,   6,   2\r
   4.000,   0.000,   3.000,   0,  12,   0\r
   4.000,   0.000,  10.000,   0,  10,   0\r
a,   1.00,   0.00,   0.00,   0.25,   0.00\r
4,0,15,0,0\r
12\r
`},{name:"sp65.prm",content:`Oliva: for GUIDED TOUR GT65 to demonstrate influence of initial conditions\r
 455,   4,   1, 210,   9,   5,  61,  10,   3,   0\r
   3,   2,   0,   0,  3.0000,  0.0000,  5.0000\r
  0.0150,  0.1000,  0.0001,  0.2500,  0.1000,  2.5000,  0.0001\r
  0.0000,  0.0180,  0.0000,  0.1000,  0.0000,  0.0000,  0.1000\r
  0.0000,  0.1000,  0.0000,  0.0000,  0.0000,  0.1000,  0.1000\r
   0.000, 100.000,   1.000,   0,   0,   2\r
   5.000, 100.000,   2.500,   0,   0,   2\r
   5.000,   0.000,   3.000,   0,  12,   0\r
   5.000,   0.000,  10.000,   0,  10,   0\r
a,   0.00,   0.00,   0.00,   0.25,   0.00\r
3,0,15,0,0\r
12\r
`},{name:"sp66a.prm",content:`Oliva, change of cell density, rb changed to .01\r
 445,   6,   1, 315,   6,   5,  61,   5,   3,   0\r
   3,   2, 120,   2,  2.0000,  0.0000,  0.0100\r
  0.0150,  0.1000,  0.0001,  0.2500,  0.1000,  2.5000,  0.0001\r
  0.0000,  0.0280,  0.0000,  0.1000,  0.0000,  0.0000,  0.1000\r
  0.0000,  0.1000,  0.0000,  0.0000,  0.0000,  0.1000,  0.1000\r
   0.000, 100.000,   1.000,   0,   0,   2\r
   2.000, 100.000,   6.000,   0,   0,   2\r
   2.000,   0.000,   3.000,   0,  12,   0\r
   2.000,   0.000,  10.000,   0,  10,   0\r
a,   2.00,   0.00,   0.00,   0.25,0\r
4,0,15,0,0\r
12\r
`},{name:"sp66b.prm",content:`Oliva, oblique lines preferentially parallel to each other\r
 455,  12,   1, 610,   6,   5,  61,   5,   3,   0\r
   3,   2,   0,   0,  1.0000,  0.0000,  5.0000\r
  0.0150,  0.1000,  0.0001,  0.2500,  0.1000,  2.5000,  0.0001\r
  0.0000,  0.0120,  0.0000,  0.1000,  0.0000,  0.0000,  0.1000\r
  0.0000,  0.0050,  0.0000,  0.0000,  0.0000,  0.1000,  0.1000\r
   0.000, 100.000,   1.000,   0,   0,   2\r
   2.000, 100.000,   6.000,   0,   0,   2\r
   2.000,   0.000,   3.000,   0,  12,   0\r
   2.000,   0.000,  10.000,   0,  10,   0\r
a,   0.00,   0.00,   0.00,   0.25,   0.00\r
4,0,15,0,0\r
12\r
`},{name:"sp66c.prm",content:`Oliva, dense lines\r
 445,  12,   1, 610,   6,   5,  61,   5,   3,   0\r
   0,   0,   0,   2,  1.0000,  0.0000,  0.0100\r
  0.0150,  0.1000,  0.0001,  0.2500,  0.1000,  2.5000,  0.0001\r
  0.0000,  0.0300,  0.0000,  0.1000,  0.0000,  0.0000,  0.1000\r
  0.0000,  0.0050,  0.0000,  0.0000,  0.0000,  0.1000,  0.1000\r
   0.000, 100.000,   1.000,   0,   0,   2\r
  20.000, 100.000,   4.000,   0,   0,   2\r
  20.000,   0.000,   3.000,   0,  12,   0\r
  20.000,   0.000,  10.000,   0,  10,   0\r
a,   0.00,   0.00,   0.00,   0.25,   0.00\r
4,0,15,0,0\r
12\r
`},{name:"sp66d.prm",content:`Triangles by the Oliva-mechanism\r
 445,   6,   1, 315,   6,   5,  61,   5,   3,   0\r
   0,   0,   0,   2,  2.0000,  0.0000,  0.0100\r
  0.0150,  0.1000,  0.0001,  0.2500,  0.1000,  2.5000,  0.0001\r
  0.0000,  0.0400,  0.0000,  0.1000,  0.0000,  0.0000,  0.1000\r
  0.0000,  0.1000,  0.0000,  0.0000,  0.0000,  0.1000,  0.1000\r
   0.000, 100.000,   1.000,   0,   0,   2\r
   2.000, 100.000,   5.000,   0,   0,   2\r
   2.000,   0.000,   3.000,   0,  12,   0\r
   2.000,   0.000,  10.000,   0,  10,   0\r
a,   0.00,   0.00,   0.00,   0.25,   0.00\r
4,0,15,0,0\r
12\r
`},{name:"sp67a.prm",content:`Oliva: hormon enhances activator destruction\r
 445,   6,   3, 315,   6,   5,  62,   5,   3,   0\r
   3,   2,   0,   0,  2.0000,  0.0000,  5.0000\r
  0.0150,  0.1000,  0.0000,  0.2500,  0.1000,  2.5000,  0.0000\r
  0.0000,  0.0200,  0.0000,  0.1000,  0.0000,  0.0000,  4.0000\r
  0.0000,  0.1000,  0.0000,  0.0000,  0.0000,  0.1000,  0.1000\r
   0.000, 100.000,   1.000,   0,   0,   2\r
   2.000, 100.000,   6.000,   0,   0,   2\r
   2.000,   0.000,   3.000,   0,  12,   0\r
   2.000,   0.000,  10.000,   0,  10,   0\r
a,   2.00,   0.00,   0.00,   0.25,   0.00\r
0,0,15,0,0\r
12\r
`},{name:"sp67b.prm",content:`Oliva porphyria: depletion mechanism\r
 455,   4,   1, 315,   6,   5,  63,   5,   3,   0\r
   3,   2,   0,   0,  2.0000,  0.0000,  5.0000\r
  0.0150,  0.1000,  0.0001,  0.2500,  0.1000,  2.5000,  0.0001\r
  0.0000,  0.0040,  0.0400,  1.0000,  0.0000,  0.0000,  4.0000\r
  0.0000,  0.1000,  0.0000,  0.0000,  0.0000,  0.1000,  0.1000\r
   0.000, 100.000,   1.000,   0,   0,   2\r
   2.000, 100.000,   6.000,   0,   0,   2\r
   2.000,   0.000,   3.000,   0,  12,   0\r
   2.000,   0.000,  10.000,   0,  10,   0\r
a,   0.00,   0.00,   0.00,   0.25,   0.00\r
4,0,15,0,0\r
12\r
`},{name:"sp67c.prm",content:`Oliva porphyria: two antagonists allow spontaneous initiation\r
 455,   8,   1, 305,   6,   5,  64,  10,   4,   0\r
   3,   2,   0,   0,  2.0000,  0.0000,  5.0000\r
  0.0150,  0.1100,  0.0004,  0.2500,  0.1000,  0.3000,  0.3000\r
  0.0000,  0.0070,  0.0000,  0.0300,  0.0000,  0.0000,  0.1000\r
  0.0000,  0.2000,  0.0000,  0.0000,  0.0000,  0.1000,  0.1000\r
  0.4000,  0.0500,  0.0000,  0.3000,  0.0000,  0.0000,  0.0000\r
   0.000, 100.000,   1.000,   0,   0,   2\r
  10.000, 100.000,  10.000,   0,   0,   2\r
  10.000,   0.000,   3.000,   0,  12,   0\r
  10.000,   0.000,  10.000,   0,  10,   0\r
  10.000,   0.000,   0.000,   0,   0,   0\r
a,   2.00,   0.00,   0.00,   0.25,0\r
3,0,15,0,0\r
2\r
`},{name:"sp67ca.prm",content:`Oliva porphyria, two antagonists, larger field\r
 455,  16,   1, 610,   7,   5,  64,  10,   4,   0\r
   3,   2,   0,   0,  1.0000,  0.0000,  5.0000\r
  0.0150,  0.1100,  0.0004,  0.2500,  0.1000,  0.3000,  0.3000\r
  0.0000,  0.0070,  0.0000,  0.0300,  0.0000,  0.0000,  0.1000\r
  0.0000,  0.2000,  0.0000,  0.0000,  0.0000,  0.1000,  0.1000\r
  0.4000,  0.0500,  0.0000,  0.3000,  0.0000,  0.0000,  0.0000\r
   0.000, 100.000,   1.000,   0,   0,   2\r
  10.000, 100.000,   3.000,   0,   6,   2\r
  10.000,   0.000,   3.000,   0,  12,   0\r
  10.000,   0.000,  10.000,   0,  10,   0\r
  10.000,   0.000,   0.000,   0,   0,   0\r
a,   1.00,   0.00,   0.00,   0.25,0\r
3,0,15,0,0\r
12\r
`},{name:"sp67cb.prm",content:`Oliva porphyria: two antagonists allow spontaneous initiation\r
 455,   8,   1, 305,   6,   5,  64,  10,   4,   0\r
   3,   2,   0,   0,  2.0000,  0.0000,  5.0000\r
  0.0150,  0.0950,  0.0004,  0.2500,  0.1000,  0.3000,  0.3000\r
  0.0000,  0.0070,  0.0003,  0.0300,  0.0000,  0.0000,  0.1000\r
  0.0000,  0.2000,  0.0000,  0.0000,  0.0000,  0.1000,  0.1000\r
  0.4000,  0.0500,  0.0000,  0.3000,  0.0000,  0.0000,  0.0000\r
   0.000, 100.000,   1.000,   0,   0,   2\r
  10.000, 100.000,  10.000,   0,   0,   2\r
  10.000,   0.000,   3.000,   0,  12,   0\r
  10.000,   0.000,  10.000,   0,  10,   0\r
  10.000,   0.000,   0.000,   0,   0,   0\r
a,   2.00,   0.00,   0.00,   0.25,0\r
3,0,15,0,0\r
12\r
`},{name:"sp68.prm",content:`Global control and line termination\r
 450,   5,   1, 159,   9,   5,  61,  15,   3,   0\r
   3,   2,   0,   0,  4.0000,  0.0000,  5.0000\r
  0.0150,  0.1000,  0.0001,  0.2500,  0.1000,  2.5000,  0.0000\r
  0.0000,  0.0180,  0.0000,  0.1500,  0.0000,  3.0000,  0.1000\r
  0.0000,  0.1000,  0.0000,  0.0000,  0.0000, 10.0000,  0.1000\r
   0.000, 100.000,   1.000,   0,   0,   2\r
   2.000, 100.000,   6.000,   0,   4,   2\r
   2.000,   0.000,   3.000,   0,  12,   0\r
   2.000,   0.000,  10.000,   0,  10,   0\r
a,   4.00,   0.00,   0.00,   0.25,0\r
3,0,15,0,0\r
12\r
`},{name:"sp68a.prm",content:`Two inhibitors, branches with termination\r
 440,   5,   1, 155,   9,   5,  64,  15,   4,   0\r
   3,   2,   0,   0,  4.0000,  0.0000,  5.0000\r
  0.0150,  0.1000,  0.0030,  0.2500,  0.1000,  2.5000,  0.0000\r
  0.0000,  0.0180,  0.0000,  0.1200,  0.0000,  3.0000,  0.1000\r
  0.0000,  0.1000,  0.0000,  0.0000,  0.0000, 10.0000,  0.1000\r
  0.4000,  0.0050,  0.0000,  0.1000,  0.0000,  0.0000,  0.0000\r
   0.000, 100.000,   1.000,   0,   0,   2\r
   0.000, 100.000,   6.000,   0,   4,   2\r
 310.000,   0.000,   3.000,   0,  12,   0\r
   0.000,   0.000,  10.000,   0,  10,   0\r
  10.000,   0.000,   0.000,   0,   0,   0\r
a,   0.00,   0.00,   0.00,   0.25,   0.00\r
3,0,15,0,0\r
12\r
`},{name:"sp68b.prm",content:`lines, inhibition strong enough\r
 440,   5,   1, 155,   9,   5,  64,  15,   4,   0\r
   3,   2,   0,   0,  4.0000,  0.0000,  5.0000\r
  0.0150,  0.1000,  0.0100,  0.2500,  0.1000,  2.5000,  0.0000\r
  0.0000,  0.0180,  0.0000,  0.1500,  0.0000,  3.0000,  0.1000\r
  0.0000,  0.1000,  0.0000,  0.0000,  0.0000, 10.0000,  0.1000\r
  0.4000,  0.0050,  0.0000,  0.2000,  0.0000,  0.0000,  0.0000\r
   0.000, 100.000,   1.000,   0,   0,   2\r
   0.000, 100.000,   4.000,   0,   4,   2\r
 310.000,   0.000,   3.000,   0,  12,   0\r
   0.000,   0.000,  10.000,   0,  10,   0\r
  10.000,   0.000,   0.000,   0,   0,   0\r
a,   4.00,   0.00,   0.00,   0.25,0\r
3,0,15,0,0\r
12\r
`},{name:"sp710.prm",content:`Conus episcopus, not yet perfect\r
 396,   4,   1, 205,   8,   9,  71,  10,   6,   0\r
 400,  50,   0, 160,  3.0000, 10.0000,120.0000\r
  0.0040,  0.0100,  0.0000,  0.1000,  0.0000,  1.0000,  1.0000\r
  0.0000,  0.0000,  0.1200,  0.3000,  0.0080,  0.0000,  6.0000\r
  0.0100,  0.0150,  0.0050,  0.0000,  0.0000,  0.0000,  1.0000\r
  0.4000,  0.0200,  0.0100,  0.0000,  0.0000,  0.0000,  1.0000\r
  0.0200,  0.1000,  0.0050,  0.1000,  0.1500,  0.0000,  0.0001\r
  0.2000,  0.0010,  0.0015,  0.0005,  0.0400,  0.0000,  0.0000\r
   0.000, 100.000,   1.000,   0,   0,   2\r
  10.000, 100.000,   0.400,   0,   0,   2\r
  10.000,   0.000,   1.000,   0,  12,   0\r
  10.000,   0.000,   4.000,   0,  10,   0\r
  10.000,   4.000,   0.000,   0,   0,   0\r
  10.000,   0.000,   1.000,   0,  12,   0\r
  10.000,   0.000,   0.000,   0,   0,   0\r
aec,   0.00,  15.00,   0.00,   0.00, 12 \r
3,0,15,0,0\r
12\r
`},{name:"sp710a.prm",content:`Conus episcopus or pennacaeus, only pigment reaction\r
 600,   4,   1, 205,  10,   9,  71,  10,   6,   0\r
 400,  50,   0, 160,  3.0000, 10.0000,120.0000\r
  0.0040,  0.0100,  0.0000,  0.1000,  0.0000,  1.0000,  1.0000\r
  0.0000,  0.0000,  0.1200,  0.3000,  0.0080,  0.0000,  6.0000\r
  0.0100,  0.0150,  0.0050,  0.0000,  0.0000,  0.0000,  1.0000\r
  0.4000,  0.0200,  0.0100,  0.0000,  0.0000,  0.0000,  1.0000\r
  0.0200,  0.1000,  0.0050,  0.1000,  0.1500,  0.0000,  0.0001\r
  0.2000,  0.0010,  0.0015,  0.0005,  0.0400,  0.0000,  0.0000\r
   0.000, 100.000,   1.000,   0,   0,   2\r
  10.000, 100.000,   0.400,   0,   0,   2\r
  10.000,   0.000,   1.000,   0,  12,   0\r
  10.000,   0.000,   4.000,   0,  10,   0\r
  10.000,   4.000,   0.000,   0,   0,   0\r
  10.000,   0.000,   1.000,   0,  12,   0\r
  10.000,   0.000,   0.000,   0,   0,   0\r
a,   3.00,  15.00,   0.00,   0.00,12\r
3,0,15,0,0\r
12\r
`},{name:"sp711.prm",content:`Conus auratus, change BE to .035 for netlike structures (and back to .06)\r
 452,   8,   1, 305,   9,   5,  72,   5,   6,   0\r
   0,   0, 100,  14,  2.0000,  0.0000,  0.0350\r
  0.0100,  0.0500,  0.0000,  0.0500,  0.0000,  1.5000,  1.0000\r
  0.0000,  0.0030,  0.0600,  0.0000,  0.0000,  0.0000,  5.0000\r
  0.0100,  0.0100,  0.0100,  0.5000,  0.0000,  1.0000,  0.0000\r
  0.4000,  0.0130,  0.0000,  0.0100,  0.0000,  0.0000,  0.4000\r
  0.0000,  0.0000,  0.0600,  1.0000,  1.0000,  0.0000, 10.0000\r
  0.0000,  0.0000,  0.0000,  0.0000,  0.0000,  0.0000,  0.0000\r
   0.000, 100.000,   1.000,   0,   0,   2\r
   2.000, 100.000,   2.000,   0,   6,   4\r
   2.000,   0.000,   3.000,   0,  12,   0\r
   2.000,   0.000,   1.000,   0,  10,   1\r
   2.000,   0.000,   0.000,   0,   0,   1\r
 333.000,   0.000,   2.000,   0,  13,   1\r
   2.000,   0.000,   0.000,   0,   0,   1\r
ac,   2.00,   0.00,   0.00,   0.25,0\r
3,0,15,0,0\r
12\r
`},{name:"sp713.prm",content:`Unpigmented patches with an i-dot: Cymbiolacca wisemani\r
 455,   8,   4, 150,   9,   1,  77,  10,   7,   0\r
   0,   0, 150,  13,  4.0000,100.0000,  4.0000\r
  0.0050,  0.0100,  0.0600,  0.0500,  0.0000,  1.0000,  1.0000\r
  0.0000,  0.0030,  0.0120,  0.0000,  0.0000,  0.0000,  1.0000\r
  0.1000,  0.1000,  0.0020,  0.0500,  0.1000,  0.0000,  0.0001\r
  0.1000,  0.0080,  0.0150,  0.0000,  0.0000,  0.0000,  0.0000\r
  0.0040,  0.0200,  0.0500,  0.0000,  0.2000,  0.0000,  1.0000\r
  0.0080,  0.0020,  0.0000,  0.0000,  0.0000,  0.0000,  1.0000\r
  0.4000,  0.0100,  0.0000,  0.0000,  0.0000,  0.0000,  1.0000\r
   0.000, 100.000,   1.000,   0,   0,   2\r
   2.000, 100.000,   2.000,   0,   6,   2\r
   2.000,   0.000,   1.000,   0,  12,   0\r
   2.000,   0.000,  10.000,   0,  12,   0\r
   2.000,   4.000,   1.000,   0,  13,   0\r
   2.000,   0.000,   1.000,   0,  10,   0\r
   2.000,   0.000,   0.000,   0,   0,   0\r
   2.000,   0.000,   0.000,   0,   0,   0\r
ace,   0.00,  15.00,   0.00,   0.00,   0.00\r
3,0,15,0,0\r
12\r
`},{name:"sp714.prm",content:`Sharp dots along invisible lines\r
 440,   6,   1, 111,   9,   5, 714,   4,   6,   0\r
 305,   1,   0, 100,  3.0000,  1.0000,  4.0000\r
  0.0150,  0.0300,  0.0200,  0.5000,  0.0000,  1.0000,  0.0000\r
  0.0000,  0.0010,  0.0200,  0.0000,  0.0000,  0.0000,  4.0000\r
  0.0000,  0.1000,  0.0000,  0.0000,  0.0000,  1.0000,  0.0000\r
  0.0000,  0.0000,  0.0000,  0.0000,  0.0000,  0.0000,  2.0000\r
  0.0000,  0.1000,  0.0150,  0.0000, 10.0000,  1.0000,  0.0001\r
  0.0000,  0.0400,  0.0000,  0.0500,  0.0000,  0.0000,  2.0000\r
   0.000, 100.000,   1.000,   0,   0,   2\r
 120.000, 100.000,   1.200,   0,   6,   2\r
 120.000,   0.000,   1.000,   0,  12,   0\r
 120.000,   0.000,   4.000,   0,  10,   0\r
 120.000,   4.000,   1.000,   0,  10,   0\r
 120.000,   0.000,   2.000,   0,  10,   0\r
 120.000,   0.000,   0.000,   0,   0,   0\r
ea,   3.00,  15.00,   0.00,   0.00,0\r
3,0,15,0,0\r
12\r
`},{name:"sp72a.prm",content:`White drop pattern (substance c and d not in use)\r
 455,   3,   1, 195,   9,   5, 711,   0,   6,   0\r
   0,   0,   0,   0,  3.2000,  0.0000,  4.0000\r
  0.0050,  0.0100,  0.0000,  0.0500,  0.0000,  1.0000,  0.0001\r
  0.0000,  0.0000,  0.1000,  0.0000,  0.0000,  0.0000,  4.0000\r
  0.0000,  0.0000,  0.0000,  0.0000,  0.0000,  0.0000,  0.0000\r
  0.0000,  0.0000,  0.0000,  0.0000,  0.0000,  0.0000,  0.0000\r
  0.3000,  0.1000,  0.0130,  0.0500,  0.0700,  0.0000,  0.0001\r
  0.3000,  0.0000,  0.0100,  0.0000,  0.0000,  0.0000,  0.0000\r
   0.000, 100.000,   1.000,   0,   0,   2\r
   2.000, 100.000,   1.000,   0,   0,   2\r
   2.000,   0.000,   1.000,   0,  12,   0\r
   2.000,   0.000,   1.000,   0,  12,   0\r
   2.000,   4.000,   0.000,   0,   0,   0\r
   2.000,   0.000,   1.000,   0,  12,   0\r
   2.000,   0.000,  15.000,   0,   0,  12\r
ae,   3.20,   0.00,   0.00,   0.16,   0.00\r
5,0,15,1,1\r
12\r
`},{name:"sp72b.prm",content:`Conus Marmoreus: stronger extinguishing reaction\r
 455,   4,   1, 305,   9,   5, 711,   0,   6,   0\r
   0,   0,   0,   0,  2.0000,  0.0000,  4.0000\r
  0.0050,  0.0100,  0.0000,  0.0500,  0.0000,  1.0000,  0.0001\r
  0.0000,  0.0000,  0.1000,  0.0000,  0.0000,  0.0000,  4.0000\r
  0.0000,  0.0000,  0.0000,  0.0000,  0.0000,  0.0000,  0.0000\r
  0.0000,  0.0000,  0.0000,  0.0000,  0.0000,  0.0000,  0.0000\r
  0.3000,  0.1000,  0.0130,  0.0500,  0.2500,  0.0000,  0.0001\r
  0.3000,  0.0000,  0.0070,  0.0000,  0.0000,  0.0000,  0.0000\r
   0.000, 100.000,   1.000,   0,   0,   2\r
   2.000, 100.000,   1.000,   0,   0,   2\r
   2.000,   0.000,   1.000,   0,  12,   0\r
   2.000,   0.000,   1.000,   0,  12,   0\r
   2.000,   4.000,   0.000,   0,   0,   0\r
   2.000,   0.000,   1.000,   0,  12,   0\r
   2.000,   0.000,  15.000,   0,   0,  12\r
a,   2.00,   0.00,   0.00,   0.16,   0.00\r
5,0,15,1,1\r
12\r
`},{name:"sp72c.prm",content:`White drop-like pattern on black background: movie C.marmoreus\r
 455,   3,   1, 155,  19,   5, 711,   0,   6,   0\r
   0,   0,   0,   0,  4.0000,  0.0000,  4.0000\r
  0.0050,  0.0100,  0.0000,  0.0500,  0.0000,  1.0000,  0.0001\r
  0.0000,  0.0000,  0.1000,  0.0000,  0.0000,  0.0000,  4.0000\r
  0.0000,  0.0000,  0.0000,  0.0000,  0.0000,  0.0000,  0.0000\r
  0.0000,  0.0000,  0.0000,  0.0000,  0.0000,  0.0000,  0.0000\r
  0.3000,  0.1000,  0.0130,  0.0500,  0.0700,  0.0000,  0.0001\r
  0.3000,  0.0000,  0.0100,  0.0000,  0.0000,  0.0000,  0.0000\r
   0.000, 100.000,   1.000,   0,   0,   2\r
   2.000, 100.000,   0.200,   0,   0,   2\r
   2.000, 100.000,   1.000,   0,  12,   0\r
   2.000, 100.000,   1.000,   0,  12,   0\r
   2.000, 100.000,   0.000,   0,   0,   0\r
   2.000, 100.000,   0.200,   0,  12,   0\r
   2.000, 100.000,  15.000,   0,   0,  12\r
ae,   4.00,   0.00,   0.00,   0.16,9\r
5,0,15,1,1\r
9\r
`},{name:"sp73.prm",content:`Conus nobilis: white drop pattern (substance c and d not in use)\r
 440,   3,   1, 155,   9,   5, 711,   0,   6,   0\r
   0,   0,   0,   0,  4.0000,  0.0000,  4.0000\r
  0.0050,  0.0100,  0.0000,  0.0500,  0.0000,  1.0000,  0.0001\r
  0.0000,  0.0000,  0.1000,  0.0000,  0.0000,  0.0000,  4.0000\r
  0.0000,  0.0000,  0.0000,  0.0000,  0.0000,  0.0000,  0.0000\r
  0.0000,  0.0000,  0.0000,  0.0000,  0.0000,  0.0000,  0.0000\r
  0.0200,  0.0700,  0.0250,  0.1000,  0.1000,  0.0000,  0.0001\r
  0.4000,  0.0000,  0.0040,  0.0010,  0.0200,  0.0000,  0.0000\r
   0.000, 100.000,   1.000,   0,   0,   2\r
   2.000, 100.000,   1.000,   0,   0,   2\r
   2.000,   0.000,   1.000,   0,  12,   0\r
   2.000,   0.000,   1.000,   0,  12,   0\r
   2.000,   4.000,   0.000,   0,   0,   0\r
   2.000,   0.000,   1.000,   0,  12,   0\r
   2.000,   0.000,  15.000,   0,   0,  12\r
ae,   4.00,   0.00,   0.00,   0.16,0\r
5,0,15,1,1\r
12\r
`},{name:"sp73b.prm",content:`Conus nobilis: white drop pattern (substance c and d not in use)\r
 440,   3,   1, 155,  19,   5, 711,   0,   6,   0\r
   0,   0,   0,   0,  4.0000,  0.0000,  4.0000\r
  0.0050,  0.0100,  0.0000,  0.0500,  0.0000,  1.0000,  0.0001\r
  0.0000,  0.0000,  0.1000,  0.0000,  0.0000,  0.0000,  4.0000\r
  0.0000,  0.0000,  0.0000,  0.0000,  0.0000,  0.0000,  0.0000\r
  0.0000,  0.0000,  0.0000,  0.0000,  0.0000,  0.0000,  0.0000\r
  0.0200,  0.0700,  0.0250,  0.1000,  0.1000,  0.0000,  0.0001\r
  0.4000,  0.0000,  0.0040,  0.0010,  0.0200,  0.0000,  0.0000\r
   0.000, 100.000,   1.000,   0,   0,   2\r
   2.000, 100.000,   0.180,   0,   0,   2\r
   2.000, 100.000,   1.000,   0,  12,   0\r
   2.000, 100.000,   1.000,   0,  12,   0\r
   2.000, 100.000,   0.000,   0,   0,   0\r
   2.000, 100.000,   1.000,   0,  12,   0\r
   2.000, 100.000,  15.000,   0,   0,  12\r
ae,   4.00,   0.00,   0.00,   0.16,9\r
5,0,15,1,1\r
12\r
`},{name:"sp73c.prm",content:`White drop pattern, lighter pigmentation (substances c and d not in use)\r
 440,   3,   1, 155,   9,   5, 711,   0,   6,   0\r
   0,   0,   0,   0,  4.0000,  0.0000,  4.0000\r
  0.0050,  0.0300,  0.0000,  0.0500,  0.0000,  1.0000,  0.0001\r
  0.0000,  0.0010,  0.1000,  0.0000,  0.0000,  0.0000,  4.0000\r
  0.0000,  0.0000,  0.0000,  0.0000,  0.0000,  0.0000,  0.0000\r
  0.0000,  0.0000,  0.0000,  0.0000,  0.0000,  0.0000,  0.0000\r
  0.3000,  0.0500,  0.1000,  0.0500,  0.0700,  0.0000,  0.0001\r
  0.3000,  0.0000,  0.0200,  0.0000,  0.0000,  0.0000,  0.0000\r
   0.000, 100.000,   1.000,   0,   0,   2\r
   2.000, 100.000,   1.000,   0,   0,   2\r
   2.000,   0.000,   1.000,   0,  12,   0\r
   2.000,   0.000,   1.000,   0,  12,   0\r
   2.000,   4.000,   0.000,   0,   0,   0\r
   2.000,   0.000,   1.000,   0,  12,   0\r
   2.000,   0.000,  15.000,   0,   0,  12\r
ae,   0.00,   0.00,   0.00,   0.16,   0.00\r
5,0,15,1,1\r
12\r
`},{name:"sp73d.prm",content:`White drop mechanism, more dense pigmentation (substances c and d not in use)\r
 440,   7,   1, 155,   9,   5, 711,   0,   6,   0\r
   0,   0,   0,   0,  4.0000,  0.0000,  4.0000\r
  0.0050,  0.0300,  0.0000,  2.0000,  0.0000,  1.0000,  0.0001\r
  0.0000,  0.0010,  0.1000,  0.0000,  0.0000,  0.0000,  4.0000\r
  0.0000,  0.0000,  0.0000,  0.0000,  0.0000,  0.0000,  0.0000\r
  0.0000,  0.0000,  0.0000,  0.0000,  0.0000,  0.0000,  0.0000\r
  0.1000,  0.0500,  0.1000,  0.0500,  0.0700,  0.0000,  0.0001\r
  0.4000,  0.0000,  0.0250,  0.0000,  0.0000,  0.0000,  0.0000\r
   0.000, 100.000,   1.000,   0,   0,   2\r
   2.000, 100.000,   2.000,   0,   0,   2\r
   2.000,   0.000,   1.000,   0,  12,   0\r
   2.000,   0.000,   2.000,   0,  12,   0\r
   2.000,   4.000,   0.000,   0,   0,   0\r
   2.000,   0.000,   2.000,   0,  12,   0\r
   2.000,   0.000,  15.000,   0,   0,  12\r
ae,   0.00,   0.00,   0.00,   0.16,   0.00\r
5,0,15,1,1\r
12\r
`},{name:"sp74.prm",content:`A plateau of activation by a bistable system + extinguishing reaction\r
 395,   3,   1, 155,   8,   9, 711,  10,   6,   0\r
  50,   1,   0,  12,  3.0000,100.0000,  0.0000\r
  0.0400,  0.0100,  0.0500,  0.0500,  0.0000,  0.0000,  0.0000\r
  0.2000,  0.0030,  0.1400,  0.0000,  0.0000,  0.0000,  4.0000\r
  0.0000,  0.0000,  0.0000,  0.0000,  0.0000,  0.0000,  0.0000\r
  0.0000,  0.0000,  0.0000,  0.0000,  0.0000,  0.0000,  0.0000\r
  0.0050,  0.0300,  0.0150,  0.0500,  0.0800,  1.0000,  1.0000\r
  0.0500,  0.0000,  0.0050,  0.0000,  0.0600,  0.0000,  4.0000\r
   0.000, 100.000,   1.000,   0,   0,   2\r
  50.000, 100.000,   1.000,   0,   0,   2\r
  50.000,   0.000,   1.000,   0,  12,   0\r
  50.000,   0.000,   1.000,   0,  12,   0\r
  50.000,   4.000,   0.000,   0,   0,   0\r
  50.000,   0.000,   1.000,   0,  12,   0\r
  50.000,   0.000,  15.000,   0,   0,  12\r
ae,   3.00,   0.00,   0.00,   0.16,   0.00\r
5,0,15,1,1\r
12\r
`},{name:"sp75a.prm",content:`A not realized pattern: Survival by increasing b-production via C\r
 455,   6,   1, 305,   9,   5,  73,   5,   3,   0\r
   0,   0,   0,   0,  2.0000,  0.8000,  6.0000\r
  0.0120,  0.0500,  0.0000,  0.2500,  0.0000,  1.0000,  0.0000\r
  0.0800,  0.0001,  0.0100,  0.0000,  0.0000,  0.0000, 10.0000\r
  0.0000,  0.0060,  0.0000,  0.0000,  0.0000,  1.0000,  1.0000\r
   0.000, 100.000,   1.000,   0,   0,   2\r
  10.000, 100.000,   2.000,   0,   0,   2\r
  10.000,   0.000,   1.000,   0,  12,   0\r
  10.000,   0.000,   0.180,   0,  10,   0\r
ac,   0.00,  15.00,   0.00,   0.00,   0.00\r
3,0,15,0,0\r
12\r
`},{name:"sp75b.prm",content:`Substrate production increases in non-activated periods\r
 455,   8,   1, 305,   9,   5, 731,   5,   3,   0\r
   0,   0,   0,   0,  2.0000,  0.0000,  0.0000\r
  0.0100,  0.0500,  0.0000,  3.0000,  0.0000,  1.0000,  0.0000\r
  0.0000,  0.0001,  0.0100,  0.0000,  0.0000,  0.0000, 12.0000\r
  0.4000,  0.0050,  1.0000,  0.0000,  0.1000,  2.0000,  2.0000\r
   0.000, 100.000,   1.000,   0,   0,   2\r
  10.000, 100.000,   2.000,   0,   0,   2\r
  10.000,   0.000,   3.000,   0,  12,   0\r
  10.000,   0.000,   0.200,   0,  10,   0\r
ac,   0.00,   0.00,   0.00,   0.25,   0.00\r
3,0,15,0,0\r
12\r
`},{name:"sp75c.prm",content:`Substrate production increases in nonactivated phases, new parameter\r
 455,  16,   1, 620,   9,   3, 731,   5,   3,   0\r
   0,   0,   0,   0,  1.0000,  0.0000,  0.0000\r
  0.0100,  0.0500,  0.0000,  3.0000,  0.0000,  1.0000,  0.0000\r
  0.0000,  0.0050,  0.0100,  0.0000,  0.0000,  0.0000, 12.0000\r
  0.4000,  0.0010,  1.0000,  0.0000,  0.1000,  2.0000,  2.0000\r
   0.000, 100.000,   1.000,   0,   0,   2\r
  10.000, 100.000,   2.000,   0,   0,   2\r
  10.000,   0.000,   3.000,   0,  12,   0\r
  10.000,   0.000,   0.100,   0,  10,   0\r
ac,   1.00,   0.00,   0.00,   0.25,   0.00\r
3,0,15,0,0\r
12\r
`},{name:"sp75d.prm",content:`Substrate production increases in nonactivated phases, new parameter\r
 500,  24,   1, 625,   9,   5, 731,   5,   3,   0\r
   0,   0,   0,   0,  1.0000,  0.0000,  0.0000\r
  0.0100,  0.0500,  0.0000,  3.0000,  0.0000,  1.0000,  0.0000\r
  0.0000,  0.0050,  0.0100,  0.0000,  0.0000,  0.0000, 12.0000\r
  0.4000,  0.0010,  4.0000,  0.0000,  0.1000,  2.0000,  2.0000\r
   0.000, 100.000,   1.000,   0,   0,   2\r
  10.000, 100.000,   2.000,   0,   6,   2\r
  10.000,   0.000,   3.000,   0,  12,   0\r
  10.000,   0.000,   0.200,   0,  10,   0\r
a,   0.00,   0.00,   0.00,   0.25, 12 \r
3,0,15,0,0\r
12\r
`},{name:"sp77a.prm",content:`Branching induced by a second, elongating system (green in the upper part)\r
 455,   7,   1, 305,   9,   5, 712,   5,   4,   0\r
   0,   0, 180,  13,  2.0000,  0.0000,  0.0000\r
  0.0100,  0.0500,  0.0000,  0.0100,  0.0000,  1.5000,  0.0000\r
  0.0000,  0.0045,  0.0350,  0.2500,  0.0000,  0.0000,  5.0000\r
  0.0100,  0.0200,  0.0100,  0.0000,  0.0000,  0.0000,  0.0000\r
  0.4000,  0.0100,  0.0000,  0.0100,  0.0000,  0.0000,  1.5000\r
   0.000, 100.000,   1.000,   0,   0,   2\r
  10.000, 100.000,   4.000,   0,   6,   2\r
  10.000,   0.000,   3.000,   0,  12,   0\r
  10.000,   0.000,   4.000,   0,  10,   0\r
  10.000,   0.000,   0.000,   0,   0,   0\r
ca,   0.00,   0.00,   0.00,   0.25,   0.00\r
3,0,15,0,0\r
12\r
`},{name:"sp77b.prm",content:`Branching by elongation mediated by the inhibitor\r
 455,   5,   1, 200,   9,   5, 712,   5,   4,   0\r
   0,   0, 180,  13,  3.0000,  0.0000,  0.0000\r
  0.0100,  0.0500,  0.0000,  0.0100,  0.0000,  1.5000,  0.0000\r
  0.0000,  0.0045,  0.0350,  0.0000,  0.2000,  0.0000,  5.0000\r
  0.0100,  0.0500,  0.0100,  0.0000,  0.0000,  0.0000,  0.0000\r
  0.4000,  0.0130,  0.0000,  0.0100,  0.0000,  0.0000,  1.5000\r
   0.000, 100.000,   1.000,   0,   0,   2\r
  20.000, 100.000,   4.000,   0,   6,   2\r
  20.000,   0.000,   3.000,   0,  12,   0\r
  20.000,   0.000,   4.000,   0,  10,   0\r
  20.000,   0.000,   1.000,   0,  12,   0\r
ca,   0.00,   0.00,   0.00,   0.25,   0.00\r
3,0,15,0,0\r
12\r
`},{name:"sp77c.prm",content:`Enhancing reaction: fishbone pattern\r
 455,   5,   1, 120,   9,   5, 712,   5,   4,   0\r
   0,   0, 180,  13,  4.0000,  0.0000,  0.0000\r
  0.0100,  0.0500,  0.0000,  0.0100,  0.0000,  1.5000,  0.0000\r
  0.0000,  0.0045,  0.0350,  0.3000,  0.0000,  0.0000,  5.0000\r
  0.0050,  0.0100,  0.0050,  0.0000,  0.0000,  0.0000,  0.0000\r
  0.4000,  0.0140,  0.0000,  0.0100,  0.0000,  0.0000,  2.5000\r
   0.000, 100.000,   1.000,   0,   0,   2\r
  50.000, 100.000,   4.000,   0,   6,   2\r
  50.000,   0.000,   3.000,   0,  12,   0\r
  50.000,   0.000,   4.000,   0,  10,   0\r
  50.000,   0.000,   0.000,   0,   0,   0\r
ca,   0.00,   0.00,   0.00,   0.25,   0.00\r
3,0,15,0,0\r
12\r
`},{name:"sp77d.prm",content:`Stable enhanced reaction: perpendicular lines\r
 455,   5,   1, 120,   9,   5, 712,   5,   4,   0\r
   0,   0, 180,  13,  4.0000,  0.0000,  5.0000\r
  0.0100,  0.0500,  0.0000,  0.0100,  0.0000,  1.5000,  0.0000\r
  0.0000,  0.0045,  0.0600,  0.5000,  0.0000,  0.0000,  5.0000\r
  0.0100,  0.0100,  0.0200,  0.0000,  0.0000,  0.0000,  0.0000\r
  0.4000,  0.0130,  0.0000,  0.0100,  0.0000,  0.0000,  1.5000\r
   0.000, 100.000,   1.000,   0,   0,   2\r
  50.000, 100.000,   1.200,   0,   6,   2\r
  50.000,   0.000,   3.000,   0,  12,   0\r
  50.000,   0.000,   2.000,   0,  10,   0\r
  50.000,   0.000,   0.000,   0,   0,   0\r
ca,   0.00,   0.00,   0.00,   0.25,   0.00\r
3,0,15,0,0\r
12\r
`},{name:"sp77e.prm",content:`Oscillating enhancement reaction: white triangles\r
 455,   8,   1, 120,   9,   5, 712,   5,   4,   0\r
   0,   0, 180,  13,  4.0000,  0.1000, 80.0000\r
  0.0100,  0.0500,  0.0000,  1.0000,  0.0000,  1.5000,  0.0000\r
  0.0000,  0.0045,  0.0220,  3.0000,  0.0000,  0.0000,  5.0000\r
  0.2000,  0.1000,  0.0200,  0.0000,  0.0000,  0.0000,  0.0000\r
  0.1000,  0.0500,  0.0000,  0.0100,  0.0000,  0.0000,  1.5000\r
   0.000, 100.000,   1.000,   0,   0,   2\r
  50.000, 100.000,   4.000,   0,   6,   2\r
  50.000,   0.000,   3.000,   0,  12,   0\r
  50.000,   0.000,   4.000,   0,  10,   0\r
  50.000,   0.000,   0.000,   0,   0,   0\r
ca,   0.00,   0.00,   0.00,   0.25,   0.00\r
3,0,15,0,0\r
12\r
`},{name:"sp77f.prm",content:`Enhancement reaction: parallel lines\r
 455,   5,   1, 120,   9,   5, 712,   5,   4,   0\r
   0,   0, 180,  13,  4.0000,  0.0000,  5.0000\r
  0.0100,  0.0500,  0.0000,  0.0100,  0.0000,  1.5000,  0.0000\r
  0.0000,  0.0045,  0.0600,  0.5000,  0.0000,  0.0000,  5.0000\r
  0.0100,  0.0200,  0.0200,  0.0000,  0.0000,  0.0000,  0.0000\r
  0.4000,  0.0130,  0.0000,  0.0100,  0.0000,  0.0000,  1.5000\r
   0.000, 100.000,   1.000,   0,   0,   2\r
  50.000, 100.000,   1.200,   0,   6,   2\r
  50.000,   0.000,   3.000,   0,  12,   0\r
  50.000,   0.000,   2.000,   0,  10,   0\r
  50.000,   0.000,   0.000,   0,   0,   0\r
ca,   0.00,   0.00,   0.00,   0.25,   0.00\r
3,0,15,0,0\r
12\r
`},{name:"sp77g.prm",content:`Branching by elongation via second system (green); movie\r
 600,   5,   1, 180,  19,   5, 712,   5,   4,   0\r
   0,   0,   0,  13,  3.0000,  0.0000,  0.0000\r
  0.0100,  0.0500,  0.0000,  0.0100,  0.0000,  1.5000,  0.0000\r
  0.0000,  0.0045,  0.0350,  0.0000,  0.2000,  0.0000,  5.0000\r
  0.0100,  0.0500,  0.0100,  0.0000,  0.0000,  0.0000,  0.0000\r
  0.4000,  0.0130,  0.0000,  0.0100,  0.0000,  0.0000,  1.5000\r
   0.000, 100.000,   1.000,   0,   0,   2\r
  50.000,  80.000,   1.000,   0,   0,   2\r
  50.000,  80.000,   0.400,   0,   7,   0\r
  50.000,  80.000,   1.000,   0,   2,   0\r
  50.000,  80.000,   1.000,   0,  12,   0\r
cab,   3.00,   0.00,   0.00,   0.25,9\r
3,0,15,0,0\r
9\r
`},{name:"sp78.prm",content:`Volutoconus bednalli: branching and stable enhacement\r
 390,  10,   1, 200,   8,   9, 712,   5,   4,   0\r
  72,  30,   0,  36,  3.0000,  2.0000,  2.0000\r
  0.0100,  0.0500,  0.0000,  0.1000,  0.0000,  1.5000,  1.0000\r
  0.0000,  0.0030,  0.0600,  1.0000,  0.0000,  0.0000,  5.0000\r
  0.1000,  0.0100,  0.0050,  0.0000,  0.0100,  0.0000,  0.0000\r
  0.1000,  0.0050,  0.0000,  0.0100,  0.0000,  0.0000,  1.0000\r
   0.000, 100.000,   1.000,   0,   0,   2\r
  10.000, 100.000,   4.000,   0,   0,   2\r
  10.000,   0.000,   3.000,   0,  12,   0\r
  10.000,   0.000,   4.000,   0,  10,   0\r
  10.000,   0.000,   0.000,   0,   0,   0\r
ac,   3.00,   0.00,   0.00,   0.25,0\r
3,0,15,0,0\r
12\r
`},{name:"sp79.prm",content:`Volutoconus bednalli: branching and stable enhacement\r
 390,  10,   1, 200,   8,   9, 712,   5,   4,   0\r
  72,  30,   0,  36,  3.0000,  2.0000,  2.0000\r
  0.0100,  0.0500,  0.0000,  0.1000,  0.0000,  1.5000,  1.0000\r
  0.0000,  0.0030,  0.0600,  1.0000,  0.0000,  0.0000,  5.0000\r
  0.1000,  0.0100,  0.0050,  0.0000,  0.0100,  0.0000,  0.0000\r
  0.1000,  0.0050,  0.0000,  0.0100,  0.0000,  0.0000,  1.0000\r
   0.000, 100.000,   1.000,   0,   0,   2\r
  10.000, 100.000,   4.000,   0,   0,   2\r
  10.000,   0.000,   3.000,   0,  12,   0\r
  10.000,   0.000,   4.000,   0,  10,   0\r
  10.000,   0.000,   0.000,   0,   0,   0\r
ac,   3.00,   0.00,   0.00,   0.25,0\r
3,0,15,0,0\r
12\r
`},{name:"sp810.prm",content:`Triangles with global stop and restart\r
 440,  10,   1, 203,   9,   5,  84,   0,   6,   0\r
   3,   2,   0,   1,  3.0000,  0.0000,  0.3000\r
  0.0200,  0.0500,  0.0040,  1.0000,  0.0000,  1.0000,  0.0000\r
  0.0050,  0.1000,  0.0000,  0.0000,  0.0000,  1.0000,  0.1000\r
  0.1000,  0.0070,  0.0500,  0.1000,  0.0420,  1.0000,  0.3000\r
  0.0000,  0.1000,  0.0500,  0.1000,  0.0000,  0.0000,  0.1000\r
  0.0000,  0.0000,  0.0500,  0.0000,  0.0000,  0.0000,  2.0000\r
  0.0000,  0.0200,  0.0000,  0.4000,  0.0000,  0.0000,  0.3000\r
   0.000, 100.000,   1.000,   0,   0,   2\r
  20.000, 100.000,   4.000,   0,   4,   2\r
  20.000,   0.000,   1.000,   0,  10,   0\r
  20.000,   0.000,   1.000,   0,  12,   0\r
  20.000,   4.000,   1.000,   0,  12,   0\r
  20.000,   0.000,   4.000,   0,  13,   0\r
  20.000,   0.000,   3.000,   0,  10,   0\r
a,   0.00,   0.00,   0.00,   0.25,   0.00\r
3,0,15,0,0\r
12\r
`},{name:"sp811e.prm",content:`Cymbiola vespertilio, larger pigmented regions\r
 390,  16,   1, 305,   8,  15, 712,   5,   4,   0\r
 162,  40,   0, 100,  2.0000,  0.4000,120.0000\r
  0.0100,  0.0500,  0.0000,  1.0000,  0.0000,  1.5000,  0.0000\r
  0.0000,  0.0045,  0.0250,  3.0000,  0.0000,  0.0000,  5.0000\r
  0.2000,  0.1000,  0.0200,  0.0000,  0.0000,  0.0000,  0.0000\r
  0.1000,  0.0500,  0.0000,  0.0100,  0.0000,  0.0000,  1.5000\r
   0.000, 100.000,   1.000,   0,   0,   2\r
   2.000, 100.000,   4.000,   0,   6,   2\r
   2.000,   0.000,   3.000,   0,  12,   0\r
   2.000,   0.000,   4.000,   0,  10,   0\r
   2.000,   0.000,   0.000,   0,   0,   0\r
a,   2.00,   0.00,   0.00,   0.25,   0.00\r
3,0,15,0,0\r
12\r
`},{name:"sp811f.prm",content:`Cymbiola vespertilio: pigmented areas and oblique lines\r
 395,  16,   1, 305,   8,  15, 712,   5,   4,   0\r
 162,  45,   0,  95,  2.0000,  0.1000, 80.0000\r
  0.0100,  0.0500,  0.0000,  1.0000,  0.0000,  1.5000,  0.0000\r
  0.0000,  0.0045,  0.0200,  3.0000,  0.0000,  0.0000,  5.0000\r
  0.2000,  0.1000,  0.0200,  0.0000,  0.0000,  0.0000,  0.0000\r
  0.1000,  0.0500,  0.0000,  0.0100,  0.0000,  0.0000,  1.5000\r
   0.000, 100.000,   1.000,   0,   0,   2\r
   2.000, 100.000,   4.000,   0,   6,   2\r
   2.000,   0.000,   3.000,   0,  12,   0\r
 333.000,   0.000,   4.000,   0,  10,   0\r
   2.000,   0.000,   0.000,   0,   0,   0\r
a,   2.00,   0.00,   0.00,   0.25,   0.00\r
3,0,15,0,0\r
12\r
`},{name:"sp82a.prm",content:`Triangles via inhibition of substrate production\r
 455,   6,   1, 150,   9,   5,  81,   5,   4,   0\r
   3,   2,   0,   0,  3.0000,  0.0000,  4.0000\r
  0.0030,  0.0800,  0.0001,  5.0000,  0.0000,  1.0000,  0.0000\r
  0.0000,  0.0000,  0.2500, 48.0000,  0.0000,  1.0000, 12.0000\r
  0.0000,  0.1000,  0.0150,  0.1000,  0.0000,  0.0000,  0.0000\r
  0.0000,  0.0000,  0.0500,  0.0000,  0.0000,  0.0000,  2.0000\r
   0.000, 100.000,   1.000,   0,   0,   2\r
  50.000, 100.000,   8.000,   0,   0,   2\r
  50.000,   0.000,   0.300,   0,  12,   0\r
  50.000,   0.000,   1.000,   0,  12,   0\r
  50.000,   4.000,   0.500,   0,  10,   0\r
ac,   0.00,  15.00,   0.00,   0.00,   0.00\r
3,0,15,0,0\r
12\r
`},{name:"sp82b.prm",content:`Triangles, Sierpinsky-like\r
 455,   8,   1,  90,   9,   5,  81,   5,   4,   0\r
   3,   2,   0,   0,  5.0000,  0.0000,  4.0000\r
  0.0020,  0.0400,  0.0001,  0.5000,  0.0000,  1.0000,  0.0000\r
  0.0000,  0.0100,  0.1000,  0.0000,  0.0000,  1.0000,  7.0000\r
  0.0000,  0.1000,  0.0300,  0.2000,  0.0500,  0.0000,  0.0000\r
  0.0000,  0.0000,  0.0300,  0.0000,  0.0000,  0.0000,  2.0000\r
   0.000, 100.000,   1.000,   0,   0,   2\r
  50.000, 100.000,   4.000,   0,   0,   2\r
  50.000,   0.000,   0.300,   0,  12,   0\r
  50.000,   0.000,   1.000,   0,  12,   0\r
  50.000,   4.000,   0.500,   0,  10,   0\r
ac,   0.00,  15.00,   0.00,   0.00,   0.00\r
3,0,15,0,0\r
12\r
`},{name:"sp82c.prm",content:`Triangles by shortening of activator life time (strong)\r
 455,   8,   1,  90,   9,   5,  81,   5,   4,   0\r
   3,   2,   0,   0,  5.0000,  0.0000,  4.0000\r
  0.0020,  0.0400,  0.0001,  0.5000,  0.0000,  1.0000,  0.0000\r
  0.0000,  0.0100,  0.1000,  0.0000,  0.0000,  1.0000,  7.0000\r
  0.0000,  0.1000,  0.0300,  0.2000,  0.0570,  0.0000,  0.0000\r
  0.0000,  0.0000,  0.0300,  0.0000,  0.0000,  0.0000,  2.0000\r
   0.000, 100.000,   1.000,   0,   0,   2\r
  50.000, 100.000,   4.000,   0,   0,   2\r
  50.000,   0.000,   0.300,   0,  12,   0\r
  50.000,   0.000,   1.000,   0,  12,   0\r
  50.000,   4.000,   0.500,   0,  10,   0\r
ac,   0.00,  15.00,   0.00,   0.00,   0.00\r
3,0,15,0,0\r
12\r
`},{name:"sp83.prm",content:`Sierpinsky-triangles with fine structure\r
 450,  30,   1, 305,   9,   6,  81,   5,   4,   0\r
   3,   2,   0,  13,  2.0000,  0.0000,  4.0000\r
  0.0100,  0.0800,  0.0010,  1.0000,  0.0000,  1.0000,  0.0000\r
  0.0100,  0.0200,  0.2000,  2.4000,  0.0000,  1.0000,  4.0000\r
  0.0000,  0.1000,  0.0800,  0.0100,  0.0000,  0.0000,  0.0000\r
  0.0000,  0.0000,  0.0500,  0.0000,  0.0000,  0.0000,  2.0000\r
   0.000, 100.000,   1.000,   0,   0,   2\r
  10.000, 100.000,   6.000,   0,   6,   2\r
  10.000,   0.000,   0.300,   0,  12,   0\r
  10.000,   0.000,   0.800,   0,  12,   0\r
  10.000,   4.000,   0.500,   0,  10,   0\r
a,   2.00,  15.00,   0.00,   0.00,0\r
3,0,15,0,0\r
12\r
`},{name:"sp85a.prm",content:`Lyoconcha castrensis - connected triangles\r
 440,   6,   1, 110,   9,   5,  83,   8,   5,   0\r
   3,   2, 100,  13,  4.0000,  0.0000,  0.0050\r
  0.0100,  0.0800,  0.0005,  3.0000,  0.0000,  1.0000,  0.0000\r
  0.0000,  0.0050,  0.1000,  0.7000,  0.0000,  0.0000, 15.0000\r
  0.4000,  0.0400,  0.0000,  4.0000,  0.0400,  0.0000,  0.1000\r
  0.0000,  0.1000,  0.0150,  0.0000,  0.0000,  0.0000,  0.1000\r
  0.0000,  0.0000,  0.0500,  0.0000,  0.0000,  0.0000,  0.0000\r
   0.000, 100.000,   1.000,   0,   0,   2\r
  80.000, 100.000,   8.000,   0,   0,   2\r
  80.000,   0.000,   1.000,   0,  12,   0\r
  80.000,   0.000,   2.000,   0,  12,   0\r
  80.000,   4.000,   1.000,   0,  12,   0\r
  80.000,   0.000,   1.000,   0,  13,   0\r
ad,   0.00,   0.00,   0.00,   0.25,   0.00\r
3,0,15,0,0\r
12\r
`},{name:"sp85b.prm",content:`Crossings-solution plus oscillation\r
 440,   8,   1, 110,   9,   5,  83,   5,   5,   0\r
   3,   2,  60,  13,  4.0000,  0.0000,  0.0050\r
  0.0100,  0.0800,  0.0002,  3.0000,  0.0800,  1.0000,  0.0000\r
  0.0000,  0.0050,  0.1200,  0.3000,  0.0000,  0.0000,  9.0000\r
  0.4000,  0.0100,  0.0000, 10.0000,  0.0450,  0.1000,  0.1000\r
  0.0000,  0.1000,  0.0500,  0.0000,  0.0000,  0.0000,  0.1000\r
  0.0000,  0.0000,  0.0500,  0.0000,  0.0000,  0.0000,  0.0000\r
   0.000, 100.000,   1.000,   0,   0,   2\r
  80.000, 100.000,   5.000,   0,   6,   2\r
   4.000,   0.000,   1.000,   0,  12,   0\r
   4.000,   0.000,   2.000,   0,  12,   0\r
  80.000,   4.000,   1.000,   0,  12,   0\r
  80.000,   0.000,   1.000,   0,  13,   0\r
ad,   0.00,   0.00,   0.00,   0.25,   0.00\r
3,0,15,0,0\r
12\r
`},{name:"sp85c.prm",content:`Broad triangles and oscillations, enhancement and extinguishing reaction\r
 450,   5,   1, 150,   9,   5, 832,   5,   5,   0\r
   3,   2, 140,  13,  3.0000,  0.0000,  3.0000\r
  0.0100,  0.0500,  0.0060,  1.0000,  0.0500,  1.0000,  0.0000\r
  0.0000,  0.0000,  0.0200,  1.0000,  2.0000,  0.0500, 10.0000\r
  0.4000,  0.0300,  0.0000,  2.0000,  0.0300,  1.0000,  1.0000\r
  0.0000,  0.1000,  0.0100,  0.0000,  0.0000,  0.0000,  1.0000\r
  0.0000,  0.0400,  0.0000,  0.0000,  0.0000,  1.0000,  1.0000\r
   0.000, 100.000,   1.000,   0,   0,   2\r
  80.000, 100.000,   3.000,   0,   6,   2\r
  80.000,   0.000,   1.000,   0,  12,   0\r
  80.000,   0.000,   0.000,   0,  10,   0\r
  80.000,   4.000,   1.000,   0,  12,   0\r
  80.000,   0.000,   1.000,   0,  10,   0\r
ad,   3.00,   0.00,   0.00,   0.25,12\r
3,0,15,0,0\r
12\r
`},{name:"sp85d.prm",content:`Triangles, calculated from initially homogenious conditions\r
 440,   8,   1, 110,   9,   5,  83,   5,   5,   0\r
   3,   2,   0,   6,  4.0000,  0.0000,  0.2000\r
  0.0100,  0.0800,  0.0010,  1.0000,  0.0000,  0.0000,  0.0000\r
  0.0000,  0.0040,  0.1000,  1.0000,  0.0000,  0.0000, 15.0000\r
  0.4000,  0.1000,  0.0000,  7.0000,  0.0300,  0.1000,  0.0000\r
  0.0000,  0.1000,  0.0200,  0.1000,  0.0000,  0.0000,  0.1000\r
  0.0000,  0.0000,  0.0500,  0.0000,  0.0000,  0.0000,  0.0000\r
   0.000, 100.000,   1.000,   0,   0,   2\r
  80.000, 100.000,   8.000,   0,   0,   2\r
  80.000,   0.000,   1.000,   0,  12,   0\r
  80.000,   0.000,   2.000,   0,  12,   0\r
   4.000,   4.000,   2.000,   0,  10,   0\r
   4.000,   0.000,   1.000,   0,  13,   0\r
a,   0.00,   0.00,   0.00,   0.25,   0.00\r
1,0,15,0,0\r
12\r
`},{name:"sp87a.prm",content:`Triangles (versus branches): antagonistic action of c and d\r
 440,   5,   1, 200,   9,   5,  85,   5,   5,   0\r
   1,   0,   0,  13,  3.0000,  0.0000,  5.0000\r
  0.0100,  0.1000,  0.0000,  0.2500,  0.0000,  1.0000,  0.0000\r
  0.0000,  0.1200,  0.0000,  0.1000,  0.0000,  0.0000,  0.0000\r
  0.2000,  0.1000,  0.0100,  0.0000,  2.0000,  0.0000,  0.0000\r
  0.2000,  0.0300,  0.0000,  0.0400,  0.0000,  0.0000,  1.5000\r
  0.0000,  0.0100,  0.0000,  0.2300,  0.0000,  0.0000,  0.0000\r
   0.000, 100.000,   1.000,   0,   0,   2\r
   2.000, 100.000,   8.000,   0,   6,   2\r
   2.000,   0.000,   3.000,   0,  12,   0\r
   2.000,   0.000,   4.000,   0,  12,   0\r
   2.000,   0.000,   2.000,   0,  10,   0\r
   2.000,   0.000,   2.000,   0,  13,   1\r
acd,   0.00,   0.00,   0.00,   0.25,   0.00\r
3,0,15,0,0\r
12\r
`},{name:"sp87b.prm",content:`Branches (versus triangles): c and d acts antagonistically\r
 440,   5,   1, 150,   9,   5,  85,   5,   5,   0\r
   1,   0,   0,  13,  4.0000,  0.0000,  5.0000\r
  0.0050,  0.1000,  0.0000,  0.2500,  0.0000,  1.0000,  0.0000\r
  0.0000,  0.0600,  0.0000,  0.0800,  1.0000,  0.0000,  0.0000\r
  0.2000,  0.1000,  0.0200,  3.0000,  4.0000,  0.0000,  0.0000\r
  0.2000,  0.0500,  0.0000,  0.0400,  0.0000,  0.0000,  1.5000\r
  0.4000,  0.0040,  0.0000,  0.0500,  3.0000,  0.0000,  0.0000\r
   0.000, 100.000,   1.000,   0,   0,   2\r
   2.000, 100.000,  20.000,   0,   6,   2\r
   2.000,   0.000,   3.000,   0,  12,   0\r
   2.000,   0.000,   2.000,   0,  12,   0\r
   2.000,   0.000,   2.000,   0,  10,   0\r
   2.000,   0.000,   1.000,   0,  13,   1\r
acd,   0.00,   0.00,   0.00,   0.25,   0.00\r
3,0,15,0,0\r
12\r
`},{name:"sp88.prm",content:`Interrupted lines with branches: Liochoncha hieroglyphica\r
 730,  12,   1, 330,  13,   6,  86,   5,   6,   0\r
   1,   0,   0,  13,  3.0000,  0.0000,  5.0000\r
  0.0025,  0.1000,  0.0001,  0.2500,  0.0000,  1.0000,  0.0000\r
  0.0000,  0.0600,  0.0000,  0.0000,  1.0000,  0.0000,  0.0000\r
  0.2000,  0.1000,  0.0200,  0.0000,  1.0000,  0.0000,  0.0000\r
  0.2000,  0.0500,  0.0000,  0.0400,  0.0000,  0.0000,  1.5000\r
  0.4000,  0.0050,  0.0000,  0.4000,  3.0000,  0.0000,  0.0500\r
  0.0000,  0.0010,  0.0000,  0.2000,  0.0000,  0.0000,  0.0500\r
   0.000, 100.000,   1.000,   0,   0,   2\r
   2.000, 100.000,  12.000,   0,   0,   2\r
   2.000,   0.000,   3.000,   0,  12,   0\r
   2.000,   0.000,   2.000,   0,  12,   0\r
   2.000,   0.000,   2.000,   0,  10,   0\r
   2.000,   0.000,   6.000,   0,  13,   1\r
   2.000,   0.000,  12.000,   0,   3,   1\r
aef,   3.00,   0.00,   0.00,   0.25,0\r
3,0,15,0,0\r
6\r
`},{name:"sp89a.prm",content:`Activator-substrate model and two inhibitors:crossings and spontaneous trigger\r
 450,  12,   1, 150,   9,   5,  87,   5,   4,   0\r
   3,   2,   0,   6,  4.0000,  0.0000,  0.2000\r
  0.0060,  0.0800,  0.0005,  1.0000,  0.0000,  1.0000,  0.0000\r
  0.0000,  0.0060,  0.1000,  6.0000,  0.0000,  0.0000, 15.0000\r
  0.4000,  0.1000,  0.0000,  0.0000,  0.0000,  0.1000,  0.0000\r
  0.0100,  0.0007,  0.0030,  0.0000,  0.0000,  0.0000,  0.8000\r
   0.000, 100.000,   1.000,   0,   0,   2\r
  20.000, 100.000,   3.000,   0,   0,   2\r
  20.000,   0.000,   1.000,   0,  12,   0\r
  20.000,   0.000,   2.000,   0,  12,   0\r
  20.000,   0.000,   1.000,   0,   0,   0\r
a,   4.00,   0.00,   0.00,   0.25,0\r
3,0,15,0,0\r
12\r
`},{name:"sp89b.prm",content:`Pigmentation fading away, A-S system + two inhibitors\r
 440,  12,   1,  80,   9,   5,  87,   5,   4,   0\r
   3,   2,   0,   6,  5.0000,  0.0000,  0.2000\r
  0.0040,  0.0800,  0.0004,  1.0000,  0.0000,  1.0000,  0.0000\r
  0.0000,  0.0080,  0.1000,  4.0000,  0.0000,  0.0000, 15.0000\r
  0.0400,  0.1000,  0.0000,  0.0300,  0.0000,  0.1000,  0.0000\r
  0.0000,  0.0005,  0.0030,  0.0000,  0.0000,  0.0000,  0.8000\r
   0.000, 100.000,   1.000,   0,   0,   2\r
 100.000, 100.000,   5.000,   0,   0,   2\r
 100.000,   0.000,   1.000,   0,  12,   0\r
 100.000,   0.000,   2.000,   0,  12,   0\r
 100.000,   0.000,   1.000,   0,   0,   0\r
a,   5.00,   0.00,   0.00,   0.25,0\r
3,0,15,0,0\r
12\r
`},{name:"sp93a.prm",content:`Precondition via substrate production of the (c,d) system\r
 440,  11,   1,  80,   9,   3,  92,   5,   4,   0\r
   3,   2, 180,  12,  3.0000,  0.0000,  0.0000\r
  0.0100,  0.0800,  0.0100,  0.2000,  0.0000,  0.0000,  0.0000\r
  0.0300,  0.0000,  0.0200,  0.0000,  0.0000,  3.0000,  0.1000\r
  0.0010,  0.0100,  0.0000,  0.4000,  0.0000, 10.0000,  0.0000\r
  0.0000,  0.0200,  0.0200,  0.0000,  0.0000,  0.0000,  0.0000\r
   0.000, 100.000,   1.000,   0,   0,   2\r
 100.000, 100.000,   4.000,   0,   0,   2\r
 100.000,   0.000,   3.000,   0,  12,   0\r
 100.000,   0.000,   5.000,   0,  10,   0\r
 100.000,   0.000,   0.000,   0,   0,   0\r
ac,   0.00,   0.00,   0.00,   0.25,   0.00\r
3,0,15,0,0\r
12\r
`},{name:"sp93c.prm",content:`Precondition, oscillation and extinguishing (cc=0 -> no kill)\r
 440,  20,   1, 155,   9,   5,  93,   5,   6,   0\r
   0,   0,   0,   0,  3.0000,  0.0000,  5.0000\r
  0.0300,  0.0800,  0.0100,  0.2000,  0.0000,  0.0000,  0.0000\r
  0.0200,  0.0010,  0.0350,  0.0000,  0.0000,  3.0000,  8.0000\r
  0.0000,  0.0100,  0.0500,  0.4000,  0.0200,  1.0000,  0.0000\r
  0.0000,  0.0030,  0.0200,  0.0000,  0.0000,  0.0000,  8.0000\r
  0.0500,  0.1000,  0.0040,  0.0500,  0.0000,  0.0000,  0.0000\r
  0.1000,  0.0000,  0.0090,  0.0000,  0.0000,  0.0000,  0.0000\r
   0.000, 100.000,   1.000,   0,   0,   2\r
   2.000,   0.000,   5.000,   0,   0,   0\r
   2.000,   0.000,   0.000,   0,   0,   0\r
   2.000, 100.000,   4.000,   0,  10,   2\r
   2.000,   0.000,   3.000,   0,  12,   0\r
   2.000,   0.000,  10.000,   0,  12,   0\r
   2.000,   0.000,   0.000,   0,   0,   0\r
aec,   0.00,   0.00,   0.00,   0.25,   0.00\r
3,0,15,0,0\r
12\r
`},{name:"sp94.prm",content:`Clithon; parallel lines and tongues (set also se to .05 or .12)\r
 440,  20,   1, 205,   9,   5,  91,   0,   5,   0\r
   3,   2,   0,  10,  3.0000,  0.0000,  5.0000\r
  0.0500,  0.1200,  0.0100,  1.0000,  0.0000,  1.0000,  0.0000\r
  0.1000,  0.0030,  0.0600,  0.0000,  0.0000,  0.0000,  8.0000\r
  0.0100,  0.0400,  0.0000,  0.4000,  0.0000,  1.0000,  0.0000\r
  0.0000,  0.0500,  0.0000,  0.0000,  0.0300,  0.0000,  0.1000\r
  0.0000,  0.0020,  0.0020,  0.0800,  0.0000,  0.0000,  0.0000\r
   0.000, 100.000,   1.000,   0,   0,   2\r
  11.000, 100.000,   4.000,   0,   0,   2\r
  11.000,   0.000,   3.000,   0,  12,   0\r
  11.000,   0.000,   5.000,   0,  10,   0\r
  11.000,   0.000,   0.000,   0,   0,   0\r
  11.000,   0.000,   2.000,   0,  13,   0\r
ac,   0.00,   0.00,   0.00,   0.25,   0.00\r
3,0,15,0,0\r
12\r
`},{name:"sp95.prm",content:`Clithon: parallel lines and isolated travelling waves\r
 390,  10,   1, 205,   8,   7,  91,   5,   5,   0\r
 150,  75,   0,  10,  3.0000,  1.3000,  5.0000\r
  0.1000,  0.1200,  0.0100,  1.0000,  0.0000,  0.0000,  0.0000\r
  0.0500,  0.0030,  0.0600,  0.0000,  0.0000,  0.0000,  4.0000\r
  0.0100,  0.0400,  0.0000,  0.4000,  0.0000,  1.0000,  1.0000\r
  0.0000,  0.0500,  0.0000,  0.0000,  0.0200,  0.0000,  0.1000\r
  0.0000,  0.0050,  0.0050,  0.3000,  0.0000,  0.0000,  0.0000\r
   0.000, 100.000,   1.000,   0,   0,   2\r
   2.000, 100.000,   4.000,   0,   0,   2\r
   2.000,   0.000,   3.000,   0,  12,   0\r
   2.000,   0.000,   5.000,   0,  10,   0\r
   2.000,   0.000,   0.000,   0,   0,   0\r
   2.000,   0.000,   2.000,   0,   1,   0\r
ac,   3.00,   0.00,   0.00,   0.25,   0.00\r
3,0,15,0,0\r
12\r
`},{name:"sp96.prm",content:`Neritina virginea: continue with N to see the traveling gaps\r
 395,  10,   1, 100,   8,   7,  91,   5,   5,   0\r
 100,  50,   0,  10,  3.0000,  1.0000,  5.0000\r
  0.1000,  0.1200,  0.0100,  1.0000,  0.0000,  0.0000,  0.0000\r
  0.0500,  0.0030,  0.0600,  0.0000,  0.0000,  0.0000,  4.0000\r
  0.0100,  0.0400,  0.0000,  0.4000,  0.0000,  1.0000,  1.0000\r
  0.0000,  0.0500,  0.0000,  0.0000,  0.0200,  0.0000,  0.1000\r
  0.0000,  0.0020,  0.0020,  0.2200,  0.0000,  0.0000,  0.0000\r
   0.000, 100.000,   1.000,   0,   0,   2\r
 100.000, 100.000,   5.000,   0,   0,   2\r
 100.000,   0.000,   3.000,   0,  12,   0\r
 100.000,   0.000,   4.000,   0,  10,   0\r
 100.000,   0.000,   0.000,   0,   0,   0\r
 100.000,   0.000,   2.000,   0,   1,   0\r
ac,   3.00,   0.00,   0.00,   0.25,   0.00\r
3,0,15,0,0\r
12\r
`},{name:"sp96a.prm",content:`Neritina, moving tongues, animated\r
 395,  10,   1, 100,  19,   7,  91,   5,   5,   0\r
 100,  50,   0,  10,  3.0000,  1.0000,  5.0000\r
  0.1000,  0.1200,  0.0100,  1.0000,  0.0000,  0.0000,  0.0000\r
  0.0500,  0.0030,  0.0600,  0.0000,  0.0000,  0.0000,  4.0000\r
  0.0100,  0.0400,  0.0000,  0.4000,  0.0000,  1.0000,  1.0000\r
  0.0000,  0.0500,  0.0000,  0.0000,  0.0200,  0.0000,  0.1000\r
  0.0000,  0.0020,  0.0020,  0.2200,  0.0000,  0.0000,  0.0000\r
   0.000, 100.000,   1.000,   0,   0,   2\r
   0.000, 100.000,   1.000,   0,   0,   2\r
   0.000, 100.000,   3.000,   0,  12,   0\r
   0.000, 100.000,   1.000,   0,  10,   0\r
   0.000, 100.000,   0.000,   0,   0,   0\r
   0.000, 100.000,   2.000,   0,   1,   0\r
ac,   0.00,   0.00,   0.00,   0.25, 12 \r
3,0,15,0,0\r
12\r
`},{name:"sp98.prm",content:`Conus textile\r
 600,  12,   1, 300,  10,  15, 712,   5,   4,   0\r
 200,   1,   0,  80,  2.0000,  1.0000,100.0000\r
  0.0100,  0.0500,  0.0000,  2.0000,  0.0000,  1.5000,  1.0000\r
  0.0000,  0.0045,  0.0600,  0.0000,  1.0000,  0.0000,  5.0000\r
  0.1000,  0.0500,  0.0050,  0.0000,  0.0000,  0.0000,  0.0000\r
  0.4000,  0.0100,  0.0000,  0.0100,  0.0200,  0.0000,  0.1000\r
   0.000, 100.000,   1.000,   0,   0,   2\r
   2.000, 100.000,   1.300,   0,   4,   2\r
   2.000,   0.000,   3.000,   0,  12,   0\r
   2.000,   0.000,   2.000,   0,  10,   0\r
   2.000,   0.000,   0.000,   0,   0,   0\r
a,   2.00,   0.00,   0.00,   0.25,0\r
3,0,15,0,0\r
12\r
`},{name:"sp98a.prm",content:`Conus textile, with stable pattern and enhancing reaction\r
 390,  12,   1, 300,   8,  15, 712,   5,   4,   0\r
 200,   1,   0,  80,  2.0000,  1.0000,100.0000\r
  0.0100,  0.0500,  0.0000,  2.0000,  0.0000,  1.5000,  1.0000\r
  0.0000,  0.0045,  0.0600,  0.0000,  1.0000,  0.0000,  5.0000\r
  0.1000,  0.0500,  0.0050,  0.0000,  0.0000,  0.0000,  0.0000\r
  0.4000,  0.0100,  0.0000,  0.0100,  0.0200,  0.0000,  0.1000\r
   0.000, 100.000,   1.000,   0,   0,   2\r
   2.000, 100.000,   1.300,   0,   4,   2\r
   2.000,   0.000,   3.000,   0,  12,   0\r
   2.000,   0.000,   2.000,   0,  10,   0\r
   2.000,   0.000,   0.000,   0,   0,   0\r
ac,   2.00,   0.00,   0.00,   0.25,0\r
3,0,15,0,0\r
12\r
`}];const fc=window.PARAM=dc,pc=e=>{const n=e.content.split(`
`).map(a=>a.trim().replace(/,$/,"")),[t,...r]=n,s=r.join(",").split(",").map(a=>Number(a.trim()));return{name:e.name,description:t,raw:e,KT:s[0],KP:s[1],KX:s[2],KY:s[3],KD:s[4],KI:s[5],KE:s[6],KR:s[7],KN:s[8],KG:s[9],K1:s[10],K2:s[11],K3:s[12],K4:s[13],DX:s[14],DY:s[15],DZ:s[16],DA:s[17],RA:s[18],BA:s[19],SA:s[20],CA:s[21],AA:s[22],GA:s[23],DB:s[24],RB:s[25],BB:s[26],SB:s[27],CB:s[28],AB:s[29],GB:s[30],DC:s[31],RC:s[32],BC:s[33],SC:s[34],CC:s[35],AC:s[36],GC:s[37],DD:s[38],RD:s[39],BD:s[40],SD:s[41],CD:s[42],AD:s[43],GD:s[44],DE:s[45],RE:s[46],BE:s[47],SE:s[48],CE:s[49],AE:s[50],GE:s[51],DF:s[52],RF:s[53],BF:s[54],SF:s[55],CF:s[56],AF:s[57],GF:s[58],DG:s[59],RG:s[60],BG:s[61],SG:s[62],CG:s[63],AG:s[64],GG:s[65],DH:s[66],RH:s[67],BH:s[68],SH:s[69],CH:s[70],AH:s[71],GH:s[72]}},le=window.bookParams=fc.map(pc);let jt=new Set;const _n=window.bookParamsByEquation={};le.forEach(e=>{jt.has(e.KE)||(_n[e.KE]=[]),jt.add(e.KE),_n[e.KE].push(e)});Array.from(jt).sort((e,n)=>e-n);const hc=e=>{let n=e.name;return n.endsWith(".PRM")&&(n=n.substr(0,n.length-4)),`${n}: ${e.description}`},As=(e,n)=>{let t={};return n.forEach(r=>{switch(r.type){case"scalar":r.field=="s"?t.s=e.RA:(t[r.field]=e[r.field.toUpperCase()],console.log(`grabbed field ${r.field}: ${t[r.field]}`));break;case"group":t={...t,...As(e,r.children)};break;default:console.error(`Skipping unknown parameter type ${r.type}`,r);break}}),t},mc=(e,n)=>{const t={};return n.forEach(r=>{const o=r.symbol.toUpperCase();if(e.KI>6||!["a","c","e"].includes(r.symbol))t[r.field]={mode:"constant",value:e[`G${o}`]};else{const s=t[r.field]={mode:e.KI,value:e[`G${o}`],generalValue:e[`G${o}`],specifiedValue:e[`A${o}`]};switch(s.mode){case 1:case 2:case 3:case 4:break;case 5:s.cells=[10,22,55,75,115,180,195,240,310,352,375,425,455,555,585,595,630,700,750,780,932,999,1024,9999];break;case 6:s.chance=.1;break}}}),t},gc=e=>({wrap:!1,dt:1,stepCount:e.KP,renderMode:e.KD,growth:{rate:e.KG,mode:e.K1}}),bc=e=>({...Ss,name:hc(e),bookParams:e,simulation:{updateStepCount:e.KP,updateDt:1}}),yc=e=>{const n={s:[]};e.KR&&(n.s=[{type:"reset"},{type:"random",amount:.5*e.KR}]);let t=[];switch(e.KE){case 24:case 51:case 712:t.push("bb");break;case 71:case 711:t.push("cf");break;case 712:t.push("ra");break;case 72:t.push("be");break;case 91:t.push("bd","be");break;default:console.warn(`Unsupported equation ${e.KE} in modulation parsing`);break}let r=[];switch(e.KI){case 7:r=[{type:"reset"},{...Oe(ue.sinusoidal),amplitude:e.DY,phase:e.K2,wavelength:e.K1,gradient:e.AB}];break;case 8:n.s.length==0&&(n.s=[{type:"reset"}]),n.s.push({...Oe(ue.exponentialDistribution),exponent:e.AB},{...Oe(ue.sinusoidal),amplitude:e.DY,phase:e.K2,wavelength:e.KY,normalize:!1});break;case 9:r=[{...Oe(ue.setCell),cell:0,value:e.AB}];break;case 10:r=[{...Oe(ue.setCell),cell:0,value:e.AB},{...Oe(ue.setCell),cell:-1,value:e.AB}];break}return t.forEach(o=>n[o]=r),n},Es=(e,n,t={})=>{const r=yc(n);return{...Ss,...bc(n),stateInitialization:mc(n,e.state),simulationConfig:{...gc(n),...t},paramConfig:_c(As(n,e.parameters),r)}},vc=(e,n,t)=>{const r=new Array(t*3);for(let o=0;o<t;++o){const s=3*o;r[s+R]=n.background[R],r[s+G]=n.background[G],r[s+B]=n.background[B]}return n.layers.forEach(o=>{const s=e[o.source];for(let a=0;a<t;++a){const i=3*a,l=s[a]**o.power*o.scale,u=Z1(o.gradient,l);r[i+R]=lerp1(r[i+R],u[R],min(u[A]/255,1)),r[i+G]=lerp1(r[i+G],u[G],min(u[A]/255,1)),r[i+B]=lerp1(r[i+B],u[B],min(u[A]/255,1))}}),r},Ut=(e,n,t,r,o,s,a,i)=>{const{simulationConfig:l,paramConfig:u,renderConfig:c}=a;for(let d=0;d<l.stepCount;++d)s.update(t,r,o,u,l);const f=vc({...o,...r},c,l.dim[X]);for(let d=0;d<l.dim[X];++d){const h=d*4;n.data[h+R]=floor(f[d*3+R]),n.data[h+G]=floor(f[d*3+G]),n.data[h+B]=floor(f[d*3+B]),n.data[h+A]=255}return e.putImageData(n,0,i),i=(i+1)%l.dim[Y],c.showGrowingEdge&&(e.fillStyle="rgba(120,0,0)",e.fillRect(0,i,l.dim[X],1)),i},_c=(e,n={})=>{const t={};return Object.entries(e).forEach(([r,o])=>t[r]={value:o,modulations:n[r]||[]}),t},zn=(e,n)=>{const t={};return Object.entries(e).forEach(([r,o])=>t[r]=new Array(n).fill(Number(o.value))),t},Wt=(e,n,t)=>{const r={};return Object.entries(e).forEach(([o,s])=>{switch(s.mode){case"constant":r[o]=new Array(n).fill(s.value);break;case"single":r[o]=s.value;break;case"uniform":{let a=r[o]=new Array(n);for(let i=0;i<n;++i)a[i]=t.uniformBetween(s.min||0,s.max||1)}break;case 1:{let a=r[o]=new Array(n).fill(s.generalValue);a[0]=s.specifiedValue}break;case 2:{let a=r[o]=new Array(n).fill(s.generalValue);a[0]=a[n-1]=s.specifiedValue}break;case 3:{let a=r[o]=new Array(n).fill(s.generalValue);a[floor(n/2)]=s.specifiedValue}break;case 5:{let a=r[o]=new Array(n).fill(s.generalValue);Array.isArray(s.cells)?s.cells.forEach(i=>{0<=i&&i<n&&(a[i]=s.specifiedValue)}):console.warn("No chosen cells to set")}break;case 6:{let a=r[o]=new Array(n).fill(s.generalValue),i=Number(s.chance);if(i&&!Number.isNaN(i))for(let l=0;l<n;++l)t.flip(i)&&(a[l]=s.specifiedValue)}break;case 7:case 8:case 9:case 10:case 11:console.log("The specified value doesn't do anything, right?",s.specifiedValue),r[o]=new Array(n).fill(s.generalValue);break;default:throw new Error(`Unhandled initialization mode ${s.mode} for ${o}`)}}),r},Is={background:[17,17,17],layers:[{source:"activator",scale:.75,power:1,gradient:[{stop:0,color:[17,17,17,0]},{stop:1,color:[255,255,255,255]}]}]},Ss={renderConfig:Is,simulationConfig:{}},y={state:{activator:{name:"Activator",field:"activator",symbol:"a"},inhibitor:{name:"Inhibitor",field:"inhibitor",symbol:"b"},substrate:{name:"Substrate",field:"substrate",symbol:"b"},substrateB:{name:"Substrate",field:"substrateB",symbol:"b"},substrateC:{name:"Substrate",field:"substrateC",symbol:"c"},hormone:{name:"Hormone",field:"hormone",symbol:"c"},inhibitorB:{name:"Inhibitor",field:"inhibitorB",symbol:"b"},inhibitorC:{name:"Inhibitor",field:"inhibitorC",symbol:"c"},inhibitorD:{name:"Inhibitor",field:"inhibitorD",symbol:"d"}},parameters:{sourceDensitiy:{type:"scalar",name:"Source density",symbol:"s"},diffusionRate:{type:"scalar",name:"Diffusion rate",symbol:"D"},decayRate:{type:"scalar",name:"Decay rate",symbol:"r"},baseRate:{type:"scalar",name:"Base production rate",symbol:"b"},saturation:{type:"scalar",name:"Saturation",symbol:"s"},efficiency:{type:"scalar",name:"Reaction efficiency",symbol:"s"},activatorGroup:{type:"group",name:"Activator",field:"activator",symbol:"a"},substrateGroup:{type:"group",name:"Substrate",field:"substrate",symbol:"b"},substrateBGroup:{type:"group",name:"Substrate",field:"substrate",symbol:"b"},substrateCGroup:{type:"group",name:"Substrate",field:"substrate",symbol:"c"},inhibitorGroup:{type:"group",name:"Inhibitor",field:"inhibitor",symbol:"b"},inhibitorBGroup:{type:"group",name:"Inhibitor",field:"inhibitorB",symbol:"b"},inhibitorCGroup:{type:"group",name:"Inhibitor",field:"inhibitorC",symbol:"c"},inhibitorDGroup:{type:"group",name:"Inhibitor",field:"inhibitorD",symbol:"d"},hormoneGroup:{type:"group",name:"Hormone",field:"hormone",symbol:"c"}}},et={activatorInhibitor:{name:"Activator-inhibitor",KE:21,description:`A system of two substances; the autocatalystic <em>activator</em> (a) and the
<em>inhibitor</em> (b). The activator wants to grow explosively, and needs the
antagonist to be kept in check. When the inhibitor diffuses faster than the
activator, a stable pattern will emerge.`,update:ec,variables:{state:[{...y.state.activator},{...y.state.inhibitor}],parameters:[{field:"s",...y.parameters.sourceDensitiy},{...y.parameters.activatorGroup,children:[{field:"Da",...y.parameters.diffusionRate},{field:"ra",...y.parameters.decayRate},{field:"ba",...y.parameters.baseRate}]},{...y.parameters.inhibitorGroup,children:[{field:"Db",...y.parameters.diffusionRate},{field:"rb",...y.parameters.decayRate},{field:"bb",...y.parameters.baseRate}]}]}},activatorInhibitorWithSaturation:{name:"Activator-inhibitor with saturation",KE:23,description:`A system of two substances; the autocatalystic <em>activator</em> (a) and the
<em>inhibitor</em> (b). The activator wants to grow explosively, and needs the
antagonist to be kept in check. When the inhibitor diffuses faster than the
activator, a stable pattern will emerge.`,update:nc,variables:{state:[{...y.state.activator},{...y.state.inhibitor}],parameters:[{field:"s",...y.parameters.sourceDensitiy},{...y.parameters.activatorGroup,children:[{field:"Da",...y.parameters.diffusionRate},{field:"ra",...y.parameters.decayRate},{field:"ba",...y.parameters.baseRate},{field:"sa",...y.parameters.saturation}]},{...y.parameters.inhibitorGroup,children:[{field:"Db",...y.parameters.diffusionRate},{field:"rb",...y.parameters.decayRate},{field:"bb",...y.parameters.baseRate}]}]}},activatorDepletion:{name:"Activator-depletion",KE:24,description:`A system of two substances; the autocatalystic <em>activator</em> (a) and the
<em>inhibitor</em> (b). The activator wants to grow explosively, and needs the
antagonist to be kept in check. When the inhibitor diffuses faster than the
activator, a stable pattern will emerge.`,update:tc,variables:{state:[{...y.state.activator},{...y.state.substrate}],parameters:[{field:"s",...y.parameters.sourceDensitiy},{...y.parameters.activatorGroup,children:[{field:"Da",...y.parameters.diffusionRate},{field:"ra",...y.parameters.decayRate},{field:"ba",...y.parameters.baseRate},{field:"sa",...y.parameters.saturation}]},{...y.parameters.substrateGroup,children:[{field:"Db",...y.parameters.diffusionRate},{field:"rb",...y.parameters.decayRate},{field:"bb",...y.parameters.baseRate}]}]}},activatorDestructiveInhibitor:{name:"Activator-destructive inhibitor",KE:25,description:`A system of two substances; the autocatalystic <em>activator</em> (a) and the
<em>inhibitor</em> (b). The activator wants to grow explosively, and needs the
antagonist to be kept in check. When the inhibitor diffuses faster than the
activator, a stable pattern will emerge.`,update:rc,variables:{state:[{...y.state.activator},{...y.state.inhibitor}],parameters:[{field:"s",...y.parameters.sourceDensitiy},{...y.parameters.activatorGroup,children:[{field:"Da",...y.parameters.diffusionRate},{field:"ra",...y.parameters.decayRate},{field:"ba",...y.parameters.baseRate}]},{...y.parameters.inhibitorGroup,children:[{field:"Db",...y.parameters.diffusionRate},{field:"rb",...y.parameters.decayRate},{field:"bb",...y.parameters.baseRate}]}]}},activatorInhibitedInhibitor:{name:"Activator-inhibited inhibitor",KE:27,description:`A system of two substances; the autocatalystic <em>activator</em> (a) and the
<em>inhibitor</em> (b). The activator wants to grow explosively, and needs the
antagonist to be kept in check. When the inhibitor diffuses faster than the
activator, a stable pattern will emerge.`,update:oc,variables:{state:[{...y.state.activator},{...y.state.inhibitorB},{...y.state.inhibitorC}],parameters:[{field:"s",...y.parameters.sourceDensitiy},{...y.parameters.activatorGroup,children:[{field:"Da",...y.parameters.diffusionRate},{field:"ra",...y.parameters.decayRate},{field:"ba",...y.parameters.baseRate},{field:"sa",...y.parameters.saturation}]},{...y.parameters.inhibitorBGroup,children:[{field:"Db",...y.parameters.diffusionRate},{field:"rb",...y.parameters.decayRate}]},{...y.parameters.inhibitorCGroup,children:[{field:"Dc",...y.parameters.diffusionRate},{field:"rc",...y.parameters.decayRate},{field:"sc",...y.parameters.saturation}]}]}},activatorSubstrateInhibitorCrossing:{name:"Crossings with an Activator-substrate-inhibitor system",description:"Crossings  a: activator, b: substrate c: inhibitor",KE:51,update:sc,variables:{state:[{...y.state.activator},{...y.state.substrate},{...y.state.inhibitorC}],parameters:[{field:"s",...y.parameters.sourceDensitiy},{...y.parameters.activatorGroup,children:[{field:"Da",...y.parameters.diffusionRate},{field:"ra",...y.parameters.decayRate},{field:"ba",...y.parameters.baseRate},{field:"sa",...y.parameters.saturation}]},{...y.parameters.substrateGroup,children:[{field:"Db",...y.parameters.diffusionRate},{field:"rb",...y.parameters.decayRate},{field:"bb",...y.parameters.baseRate},{field:"sb",...y.parameters.saturation}]},{...y.parameters.inhibitorCGroup,children:[{field:"Dc",...y.parameters.diffusionRate},{field:"rc",...y.parameters.decayRate},{field:"sc",...y.parameters.efficiency}]}]}},activatorSubstrateSubstrateCrossing:{name:"Crossings with an Activator-substrate-substrate system",description:"One activator - two substrates",KE:52,update:ac,variables:{state:[{...y.state.activator},{...y.state.substrateB},{...y.state.substrateC}],parameters:[{field:"s",...y.parameters.sourceDensitiy},{...y.parameters.activatorGroup,children:[{field:"Da",...y.parameters.diffusionRate},{field:"ra",...y.parameters.decayRate},{field:"ba",...y.parameters.baseRate},{field:"sa",...y.parameters.saturation}]},{...y.parameters.substrateBGroup,children:[{field:"Db",...y.parameters.diffusionRate},{field:"rb",...y.parameters.decayRate},{field:"bb",...y.parameters.baseRate}]},{...y.parameters.substrateCGroup,children:[{field:"Dc",...y.parameters.diffusionRate},{field:"rc",...y.parameters.decayRate},{field:"bc",...y.parameters.baseRate}]}]}},activatorInhibitorInhibitorCrossing:{name:"Crossings with an Activator-inhibitor-inhibitor system",description:"shifted dots = c has negative feedback on a and b",KE:53,update:ic,variables:{state:[{...y.state.activator},{...y.state.inhibitorB},{...y.state.inhibitorC}],parameters:[{field:"s",...y.parameters.sourceDensitiy},{...y.parameters.activatorGroup,children:[{field:"Da",...y.parameters.diffusionRate},{field:"ra",...y.parameters.decayRate},{field:"ba",...y.parameters.baseRate}]},{...y.parameters.substrateBGroup,children:[{field:"Db",...y.parameters.diffusionRate},{field:"rb",...y.parameters.decayRate},{field:"bb",...y.parameters.baseRate}]},{...y.parameters.substrateCGroup,children:[{field:"Dc",...y.parameters.diffusionRate},{field:"rc",...y.parameters.decayRate}]}]}},activatorInhibitorAdditiveInhibitorCrossing:{name:"Crossings with a secondary additive inhibitor",description:"shifted dots triangles =  sum of two inhibitors",KE:54,update:lc,variables:{state:[{...y.state.activator},{...y.state.inhibitorB},{...y.state.inhibitorC}],parameters:[{field:"s",...y.parameters.sourceDensitiy},{...y.parameters.activatorGroup,children:[{field:"Da",...y.parameters.diffusionRate},{field:"ra",...y.parameters.decayRate},{field:"ba",...y.parameters.baseRate}]},{...y.parameters.substrateBGroup,children:[{field:"Db",...y.parameters.diffusionRate},{field:"rb",...y.parameters.decayRate},{field:"bb",...y.parameters.baseRate},{field:"sb",...y.parameters.efficiency}]},{...y.parameters.substrateCGroup,children:[{field:"Dc",...y.parameters.diffusionRate},{field:"rc",...y.parameters.decayRate},{field:"sc",...y.parameters.efficiency}]}]}},activatorInhibitorWithGlobalControl:{name:"Activator-inhibitor with global control",KE:61,update:cc,variables:{state:[{...y.state.activator},{...y.state.inhibitor},{...y.state.hormone}],parameters:[{field:"s",...y.parameters.sourceDensitiy},{...y.parameters.activatorGroup,children:[{field:"Da",...y.parameters.diffusionRate},{field:"ra",...y.parameters.decayRate},{field:"ba",...y.parameters.baseRate}]},{...y.parameters.inhibitorGroup,children:[{field:"Db",...y.parameters.diffusionRate},{field:"rb",...y.parameters.decayRate},{field:"bb",...y.parameters.baseRate},{field:"sb",...y.parameters.efficiency}]},{...y.parameters.hormoneGroup,children:[{field:"rc",...y.parameters.decayRate}]}]}},activatorInhibitorInhibitorWithGlobalControl:{name:"Activator-inhibitor-inhibitor with global control",KE:"61d",update:uc,variables:{state:[{...y.state.activator},{...y.state.inhibitorB},{...y.state.hormone},{...y.state.inhibitorD}],parameters:[{field:"s",...y.parameters.sourceDensitiy},{...y.parameters.activatorGroup,children:[{field:"Da",...y.parameters.diffusionRate},{field:"ra",...y.parameters.decayRate},{field:"ba",...y.parameters.baseRate}]},{...y.parameters.inhibitorBGroup,children:[{field:"Db",...y.parameters.diffusionRate},{field:"rb",...y.parameters.decayRate},{field:"bb",...y.parameters.baseRate},{field:"sb",...y.parameters.efficiency}]},{...y.parameters.hormoneGroup,children:[{field:"rc",...y.parameters.decayRate}]},{type:"group",name:"Inhibitor",field:"inhibitorD",symbol:"d",children:[{field:"Dd",...y.parameters.diffusionRate},{field:"rd",...y.parameters.decayRate},{field:"sd",...y.parameters.efficiency}]}]}}},jn={};Object.values(et).forEach(e=>jn[e.KE]=e);const wc={class:"galleryWrapper"},xc=g("h1",null,"Gallery",-1),Cc=g("h2",null,"Configurations from the book",-1),kc=g("aside",{class:"galleryBar--warning"},[g("header",{class:"galleryBar-header"},[g("h3",null,"Notice")]),g("p",null,[v0(" All figures are simulated and rendered on your computer. This can be "),g("strong",null,"very slow"),v0(". Please be patient. ")]),g("p",null," There are also many missing features, leading to differences between images in the book and our renders -- or even completely missing figures. Some features may be added later. Other features, like alternative render modes, are not currently on the roadmap. "),g("p",null," I have tried to annotate the missing features for each figure. This should explain the differences between the book and what you see here. It is possible, and even very likely, that small differences in initialization, rendering and implementation still lead to differences between the intention and the outcome. ")],-1),Rc={class:"galleryGroup systemGroup"},$c=["for"],Ac=["id","checked"],Ec={class:"galleryItem-list"},Ic={class:"galleryItem-container"},Sc={class:"galleryItem"},Pc=["width","height"],Bc={class:"gallerItem-name"},Tc={key:0,class:"galleryItem-status"},Dc=["onClick"],Oc={class:"galleryItem-description"},Mc={key:0,class:"unsupportedFeaturesBar"},Fc={class:"unsupportedFeatures-title"},Lc={class:"unsupportedFeature-list"},Nc={class:"unsupportedFeatures"},Kc=["for"],Hc=["id"],Vc={class:"galleryItem-rawParams"},Gc={__name:"Gallery",setup(e){const n=async(m,v)=>new Promise(S=>setTimeout(()=>S(m()),v)),t=async m=>n(()=>{},m),r={};for(const m of Object.values(et))r[m.KE]=m;const o=window.bookCanva={},s=window.bookStatus={},a={};let i=new Set;le.forEach(m=>{i.has(m.KE)||(a[m.KE]=[]),i.add(m.KE),a[m.KE].push(m),s[m.name]=_0("")}),i=Array.from(i),i.sort((m,v)=>m-v);const l=[300,320];let u;const c=Noise(),f=m=>{const v=[];switch(m.KG>0&&v.push(`Growth (${m.KG} cells per step, mode ${m.K1}) `),m.KI==9&&v.push("Modulation: complex step functions"),m.KI>11&&v.push(`Initialization: unknown initialization mode ${m.KI}`),m.KD){case 1:v.push(`Render mode ${m.KD}: 3D XT plot, past in the background`);break;case 2:v.push(`Render mode ${m.KD}: 3D XT plot, past in the foreground`);break;case 3:v.push(`Render mode ${m.KD}: Density line graph`);break;case 6:v.push(`Render mode ${m.KD}: False colors`);break;case 8:v.push(`Render mode ${m.KD}: Prepattern displayed on top`);break;case 10:v.push(`Render mode ${m.KD}: Brown color palette`);break;case 11:v.push(`Render mode ${m.KD}: Binary rendering`);break;case 14:v.push(`Render mode ${m.KD}`);break;case 15:v.push(`Render mode ${m.KD}`);break;case 16:v.push(`Render mode ${m.KD}`);break;case 18:v.push(`Render mode ${m.KD}`);break;case 19:v.push(`Render mode ${m.KD}`);break;case 20:v.push(`Render mode ${m.KD}`);break;case 21:v.push(`Render mode ${m.KD}`);break;case 22:v.push(`Render mode ${m.KD}`);break}return m.K3!=0&&v.push(`Delayed modulation after ${m.K3} steps, type ${m.K4}`),v};let d="done";const h=async(m,v=-1)=>{const S=le[m],_=r[S.KE];if(_){await n(()=>s[S.name].value="Rendering...",0);try{const C=o[S.name];[C.width,C.height]=l;const V=C.getContext("2d"),J=window.config=Es(_.variables,S,{dim:l}),l0=window.paramState=zn(J.paramConfig,l[X]),F=window.state=Wt(J.stateInitialization,l[X],c);if(v<0)for(let k=0;k<l[Y];++k)Ut(V,u,c,l0,F,_,J,k);else for(let $=0;$<l[Y]&&d!="done";$+=10)await n(()=>{for(let O=0;O<10;++O)Ut(V,u,c,l0,F,_,J,$+O)},v);s[S.name].value="Done"}catch(C){console.log(m),s[S.name].value=`Error: ${C.message}`,console.error(C)}}else s[S.name].value="Not implemented"},w=async(m,v=-1,S)=>{if(S===void 0&&(S=v),m=m.filter(_=>s[le[_].name].value==""),m.forEach(_=>s[le[_].name].value="Queued..."),d="running",v<0)m.forEach(_=>h(_,S));else for(let _ of m){if(d=="done")break;await h(_,S),await t(v)}d="done"},E=0;return ln(()=>{u=Object.values(o)[0].getContext("2d").createImageData(l[X],1),w(Object.keys(le).filter(S=>le[S].KE>=E),0,0)}),Tn(()=>d="done"),(m,v)=>{const S=$n("router-link");return j(),q("section",wc,[xc,Cc,kc,(j(!0),q(d0,null,D0(L(i),_=>{var C;return j(),q("section",Rc,[_>=E?(j(),q(d0,{key:0},[g("label",{class:"galleryGroup-header systemGroup-header",for:`galleryGroup-collapseControl--${_}`},[g("h3",null,a0(_)+": "+a0(((C=r[_])==null?void 0:C.name)||"Not implemented"),1),g("span",null,"("+a0(a[_].length)+")",1)],8,$c),g("input",{id:`galleryGroup-collapseControl--${_}`,class:"galleryGroup-collapseControl hidden",type:"checkbox",checked:r[_]},null,8,Ac),g("ul",Ec,[(j(!0),q(d0,null,D0(a[_],V=>(j(),q("li",Ic,[g("figure",Sc,[m0(S,{to:{path:"/patterns",query:{bookParam:V.name}}},{default:S0(()=>[g("canvas",{width:l[0],height:l[1],class:"galleryItem-canvas",ref_for:!0,ref:J=>L(o)[V.name]=J},null,8,Pc)]),_:2},1032,["to"]),g("figcaption",null,[g("header",null,[g("span",Bc,a0(V.name),1),L(s)[V.name].value?(j(),q("small",Tc," ("+a0(L(s)[V.name].value)+") ",1)):(j(),q("button",{key:1,class:"galleryItem-renderButton",onClick:()=>h(L(le).findIndex(J=>J.name==V.name))}," Render ",8,Dc))]),g("p",Oc,a0(V.description),1),f(V).length?(j(),q("aside",Mc,[g("h4",Fc,a0(f(V).length)+" Unsupported feature"+a0(f(V).length>1?"s":""),1),g("ul",Lc,[(j(!0),q(d0,null,D0(f(V),J=>(j(),q("li",Nc,a0(J),1))),256))])])):B0("",!0),g("label",{for:`show-param-${V.name}`}," Show full parameters ",8,Kc),g("input",{type:"checkbox",id:`show-param-${V.name}`},null,8,Hc),g("pre",Vc,a0(V.raw.content),1)])])]))),256))])],64)):B0("",!0)])}),256))])}}};const zc={class:"gradientPicker"},jc=["for"],Uc={class:"gradientStopList"},Wc={class:"gradientStop"},qc={class:"stopInputGroup"},Xc=["for"],Yc=g("span",{class:"stopInputGroup_text"},"Stop",-1),Qc=["id","value","onInput"],Jc={class:"gradient-alphaColorControl"},Zc={class:"gradient-colorControl"},eu=["value","onInput"],nu=g("span",{class:"stopColor-symbol"},"#",-1),tu={class:"stopColor-component"},ru={class:"gradient-alphaControl"},ou=g("span",{class:"stopColor-symbol"},"A",-1),su={class:"stopColor-alpha"},au=["id","value","onInput"],iu={key:0,class:"addStopControls"},lu=["onClick"],cu=g("span",{class:"addStopButton-text"},"+ add stop",-1),uu=[cu],du={__name:"GradientPicker",props:["id","modelValue","swatchStyle"],emits:["update:modelValue"],setup(e,{emit:n}){const t=e,r=x0(()=>t.id||random().toString(36)),o=(l,u)=>{let c=Number(u.target.value);const f=t.modelValue[l],d=t.modelValue[l+1],h=t.modelValue[l-1];d&&d.stop<=c&&(c=d.stop),h&&h.stop>=c&&(c=h.stop);const w=[...t.modelValue];w[l]={...f,stop:c},w.sort((E,m)=>E.stop-m.stop),n("update:modelValue",w)},s=(l,u)=>{const c=t.modelValue[l],f=[...t.modelValue];f[l]={...c,color:[...Rs(u.target.value),c.color[3]]},n("update:modelValue",f)},a=(l,u)=>{const c=t.modelValue[l],f=[...t.modelValue];f[l]={...c,color:[...c.color.slice(0,3),Number(u.target.value)]},n("update:modelValue",f)},i=l=>{const u=[...t.modelValue],c=u[l],f=u[l+1],d={stop:(c.stop+f.stop)/2,color:lerp4(c.color,f.color,.5)};console.log("stop",d),u.splice(l+1,0,d),n("update:modelValue",u)};return(l,u)=>(j(),q("form",zc,[g("label",{class:"gradientSwatch",style:He({...e.swatchStyle||{},backgroundImage:L(J1)(t.modelValue)}),for:`${L(r)}-alphaInput-0`},null,12,jc),g("ol",Uc,[(j(!0),q(d0,null,D0(t.modelValue,({stop:c,color:f},d)=>(j(),q("li",Wc,[g("p",qc,[g("label",{for:`${L(r)}-stepInput-${d}`,class:"stopInputGroup_label"},[Yc,v0(a0(c.toFixed(2)),1)],8,Xc),g("input",{id:`${L(r)}-stepInput-${d}`,class:"stopInputGroup_input",type:"range",min:"0",max:"1",step:"0.01",value:c,onInput:h=>o(d,h)},null,40,Qc)]),g("p",Jc,[g("label",Zc,[g("input",{type:"color",value:L(ks)(f.slice(0,3)),style:He({opacity:f[3]/255}),onInput:h=>s(d,h)},null,44,eu),nu,g("span",tu,a0(f[0].toString(16))+a0(f[1].toString(16))+a0(f[2].toString(16)),1)]),g("label",ru,[ou,g("span",su,a0((f[3]/255).toFixed(2)),1),g("input",{id:`${L(r)}-alphaInput-${d}`,class:"stopColor-alphaSlider",type:"range",min:"0",max:"255",step:"1",value:f[3],onInput:h=>a(d,h)},null,40,au)])]),t.modelValue[d+1]?(j(),q("footer",iu,[g("button",{type:"button",class:"text-button addStopButton",onClick:h=>i(d)},uu,8,lu)])):B0("",!0)]))),256))])]))}};const fu={class:"shuffleList"},pu={class:"shuffleAddControls"},hu=["data-index","data-target"],mu={class:"shuffleAddButton-text"},Ps={__name:"ShuffleList",props:["addItemLabel","ls","newItem","minLength"],emits:["update:ls"],setup(e,{emit:n}){const t=e;ee("ls.addItemLabel",t.addItemLabel),ee("ls.lastIndex",x0(()=>{var o,s;return((s=(o=t.ls)==null?void 0:o.length)!=null?s:0)-1})),ee("ls.minLength",x0(()=>{var o;return(o=t.minLength)!=null?o:0}));const r=o=>{if(o.target.classList.contains("shuffleButton")){const{action:s,index:a,target:i}=o.target.dataset;console.log("shufflebutton");let l=[...t.ls];switch(s){case"insert":{let u;typeof t.newItem=="function"?u=t.newItem(l,i):u={...t.newItem},l.splice(i,0,u)}break;case"move":{if(i==a)break;const u=a<i?i+1:i,[c]=l.splice(a,1);l.splice(u,0,c)}break;case"delete":(t.minLength===void 0||t.minLength<l.length-1)&&l.splice(i,1)}n("update:ls",l)}};return(o,s)=>{var a,i,l,u;return j(),q("div",{class:"shuffleListContainer",onClick:r},[g("ol",fu,[dt(o.$slots,"default")]),g("div",pu,[g("button",{type:"button",class:"shuffleButton shuffleAddButton","data-index":(i=(a=t.ls)==null?void 0:a.length)!=null?i:0,"data-action":"insert","data-target":(u=(l=t.ls)==null?void 0:l.length)!=null?u:0},[g("span",mu,a0(t.addItemLabel),1)],8,hu)])])}}};const gu={class:"shuffleItem"},bu={class:"shuffleAddControls"},yu=["data-index","data-target"],vu={class:"shuffleAddButton-text"},_u={class:"shuffleSideControls shuffleOrderControls"},wu=["data-index","data-target","disabled"],xu=["data-index","data-target","disabled"],Cu={class:"shuffleContent"},ku={class:"shuffleSideControls"},Ru=["data-index","disabled"],Bs={__name:"ShuffleItem",props:["index"],setup(e){const n=e,t=O0("ls.addItemLabel"),r=O0("ls.lastIndex"),o=O0("ls.minLength");return(s,a)=>(j(),q("li",gu,[g("div",bu,[g("button",{type:"button",class:"shuffleButton shuffleAddButton","data-index":n.index,"data-action":"insert","data-target":e.index},[g("span",vu,a0(L(t)),1)],8,yu)]),g("div",_u,[g("button",{class:"shuffleButton shuffleOrderButton","data-index":n.index,"data-action":"move","data-target":e.index-1,disabled:L(r)<=0||e.index==0,type:"button"},"\u2227",8,wu),g("button",{class:"shuffleButton shuffleOrderButton","data-index":n.index,"data-action":"move","data-target":e.index+1,disabled:L(r)<=0||e.index==L(r),type:"button"},"\u2228",8,xu)]),g("div",Cu,[dt(s.$slots,"default")]),g("div",ku,[g("button",{type:"button",class:"shuffleButton shuffleDeleteButton","data-index":n.index,"data-action":"delete",disabled:L(r)<=L(o)},"\xD7",8,Ru)])]))}};const $u=g("legend",null,"Render parameters",-1),Au=["value"],Eu=g("label",{for:"COLOR"},"Background color",-1),Iu=["checked"],Su=v0("Show growing edge "),Pu=g("legend",{style:{display:"flex","justify-content":"space-between",width:"100%"}},[g("span",null,"Layers")],-1),Bu=g("label",null," Source: ",-1),Tu=["value","onInput"],Du={label:"State"},Ou=["value"],Mu=["value"],Fu=["label"],Lu=["value"],Nu=v0(" Power: "),Ku=["value","onInput"],Hu=v0(" Scale: "),Vu=["value","onInput"],Gu={__name:"RenderConfigPanel",props:["modelValue","system"],emits:["update:modelValue"],setup(e,{emit:n}){const t=e,r=x0(()=>t.system),o=x0(()=>t.modelValue),s=d=>{n("update:modelValue",{...o.value,showGrowingEdge:d})},a=d=>{const h=Rs(d);n("update:modelValue",{...o.value,background:h})},i=(d,h)=>{const E={...o.value.layers[d],scale:h},m={...o.value};m.layers=[...m.layers],m.layers[d]=E,n("update:modelValue",m)},l=(d,h)=>{const E={...o.value.layers[d],power:h},m={...o.value};m.layers=[...m.layers],m.layers[d]=E,n("update:modelValue",m)},u=(d,h)=>{const E={...o.value.layers[d],source:h},m={...o.value};m.layers=[...m.layers],m.layers[d]=E,n("update:modelValue",m)},c=(d,h)=>{console.log("new gradient",h);const E={...o.value.layers[d],gradient:h},m={...o.value};m.layers=[...m.layers],m.layers[d]=E,n("update:modelValue",m)},f=d=>{const h={...o.value,layers:d};n("update:modelValue",h)};return _0(-1),(d,h)=>(j(),q("form",null,[g("fieldset",null,[$u,g("p",null,[g("input",{id:"COLOR",type:"color",value:L(ks)(L(o).background),onInput:h[0]||(h[0]=w=>a(w.target.value))},null,40,Au),Eu]),g("p",null,[g("label",null,[g("input",{style:{margin:"0 .55em .5em 0"},type:"checkbox",checked:L(o).showGrowingEdge,onInput:h[1]||(h[1]=w=>s(w.target.checked))},null,40,Iu),Su])]),g("fieldset",null,[Pu,m0(Ps,{class:"layerList",ls:L(o).layers,"onUpdate:ls":f,"add-item-label":"+ Insert layer","new-item":L(Is).layers[0]},{default:S0(()=>[(j(!0),q(d0,null,D0(L(o).layers,(w,E)=>(j(),Ee(Bs,{index:E},{default:S0(()=>[g("p",null,[Bu,g("select",{class:"config-input",value:w.source,style:{width:"220px"},onInput:m=>u(E,m.target.value)},[g("optgroup",Du,[(j(!0),q(d0,null,D0(L(r).variables.state,m=>(j(),q("option",{value:m.field},a0(m.name)+" "+a0(m.symbol),9,Ou))),256))]),(j(!0),q(d0,null,D0(L(r).variables.parameters,m=>(j(),q(d0,null,[m.type=="scalar"?(j(),q("option",{key:0,value:m.field},a0(m.name)+" "+a0(m.symbol),9,Mu)):B0("",!0),m.type=="group"?(j(),q("optgroup",{key:1,label:`${m.name} ${m.symbol} parameters`},[(j(!0),q(d0,null,D0(m.children,v=>(j(),q("option",{value:v.field},a0(v.name)+" "+a0(v.symbol)+a0(m.symbol),9,Lu))),256))],8,Fu)):B0("",!0)],64))),256))],40,Tu)]),g("p",null,[g("label",null,[Nu,g("input",{class:"config-input",type:"number",value:w.power,onInput:m=>l(E,m.target.value)},null,40,Ku)]),g("label",null,[Hu,g("input",{class:"config-input",type:"number",value:w.scale,onInput:m=>i(E,m.target.value)},null,40,Vu)])]),m0(du,{"model-value":w.gradient,"onUpdate:modelValue":m=>c(E,m)},null,8,["model-value","onUpdate:modelValue"])]),_:2},1032,["index"]))),256))]),_:1},8,["ls","new-item"])])])]))}};const zu=e=>(Da("data-v-1e61d6dc"),e=e(),Oa(),e),ju=["onInput"],Uu={class:"configRow modulationRow"},Wu=zu(()=>g("label",null," Type ",-1)),qu=["value","data-mod"],Xu=["value"],Yu={class:"modulationCode-config"},Qu={key:1,class:"configRow modulationRow"},Ju=["value","data-field","data-mod"],Zu={key:2,class:"configRow"},ed=["checked","data-field","data-mod"],nd={__name:"ModulationConfigurator",props:["id","param","description","parent"],emits:["update:modulations"],setup(e,{emit:n}){const t=e,r=x0(()=>r||`${random().toString(36)}-${t.description.field}`),o=a=>{const{field:i,mod:l}=a.target.dataset,u=[...t.param.modulations];if(i=="type"){const c=u[l]={...u[l]},f=a.target.type=="checkbox"?a.target.checked:a.target.value;c[i]=f}else u[l]=Oe(ue[a.target.value]);n("update:modulations",u)},s=a=>n("update:modulations",a);return(a,i)=>(j(),q("form",{onInput:We(o,["stop"]),class:"modulationListConfigurator"},[m0(Ps,{ls:t.param.modulations,"onUpdate:ls":s,"add-item-label":"+ Insert modulation","new-item":{type:"reset"}},{default:S0(()=>[(j(!0),q(d0,null,D0(t.param.modulations,(l,u)=>(j(),Ee(Bs,{index:u},{default:S0(()=>[g("p",Uu,[Wu,g("select",{class:"config-input",value:l.type,"data-field":"type","data-mod":u},[(j(!0),q(d0,null,D0(L($s),c=>(j(),q("option",{value:c.type},a0(c.name),9,Xu))),256))],8,qu)]),g("div",Yu,[(j(!0),q(d0,null,D0(L(ue)[l.type].fields,c=>(j(),q(d0,null,[c.show?c.type=="number"?(j(),q("p",Qu,[g("label",null,[v0(a0(c.name)+" ",1),g("em",null,a0(c.symbol),1)]),g("input",{class:"config-input",value:l[c.field],"data-field":c.field,"data-mod":u},null,8,Ju)])):c.type=="checkbox"?(j(),q("p",Zu,[g("input",{class:"config-input",type:"checkbox",checked:l[c.field],"data-field":c.field,"data-mod":u},null,8,ed),g("label",null,a0(" "+c.name),1)])):B0("",!0):(j(),q(d0,{key:0},[],64))],64))),256))])]),_:2},1032,["index"]))),256))]),_:1},8,["ls"])],40,ju))}};var td=mt(nd,[["__scopeId","data-v-1e61d6dc"]]);const rd={class:"text-button config-groupCollapse",type:"button"},od={class:"math config-variableName"},sd={class:"config-groupContent"},ad=["for"],id={class:"config-variableDescription"},ld={class:"math config-variableName"},cd={key:0,class:"config-variableDescription"},ud=["id","data-field","value"],dd={key:1,class:"config-modulationContainer"},fd={class:"modulationCodeList"},pd={class:"modulationCode"},hd={__name:"ParamEditor",props:["parameters","description","id","parent"],emits:["update:parameters","update:modulations"],setup(e,{emit:n}){const t=e,r=x0(()=>t.id||`${random().toString(36)}-${t.description.field}`),o=x0(()=>t.description.type=="scalar"&&t.parameters[t.description.field]),s=_0(),a=_0(t.description.type=="scalar"),i=u=>{s.value.contains(u.target)||(a.value=!0,removeEventListener("click",i))},l=()=>{addEventListener("click",i),a.value=!1};return(u,c)=>{const f=$n("param-editor",!0);return j(),q(d0,null,[t.description.type=="group"?(j(),q("fieldset",{key:0,class:de(["config-group",{"config-group--collapsed":a.value}])},[g("legend",{class:"config-groupName",onClick:c[0]||(c[0]=d=>a.value=!a.value)},[g("button",rd,[g("span",null,[v0(a0(t.description.name)+" ",1),g("em",od,a0(t.description.symbol),1)]),g("span",null," ["+a0(a.value?"+":"\u2013")+"] ",1)])]),g("div",sd,[(j(!0),q(d0,null,D0(t.description.children,d=>(j(),Ee(f,{description:d,parent:t.description,parameters:t.parameters,"onUpdate:modulations":c[1]||(c[1]=h=>n("update:modulations",h))},null,8,["description","parent","parameters"]))),256))])],2)):B0("",!0),t.description.type=="scalar"?(j(),q("p",{key:1,ref_key:"$editor",ref:s,class:de(["configRow paramEditor","paramEditor--"+(a.value?"collapsed":"expanded")]),onClick:l},[g("label",{for:`${L(r)}-input`,class:"config-label"},[g("span",id,a0(t.description.name),1),g("em",ld,[v0(a0(t.description.symbol),1),t.parent?(j(),q("sub",cd,a0(t.parent.symbol),1)):B0("",!0)])],8,ad),L(o)?(j(),q("input",{key:0,id:`${L(r)}-input`,class:"config-input","data-field":t.description.field,value:L(o).value,type:"number"},null,8,ud)):B0("",!0),L(o)?(j(),q("footer",dd,[g("ol",fd,[(j(!0),q(d0,null,D0(L(o).modulations,d=>(j(),q("li",pd,a0(L(ue)[d.type].code),1))),256))]),m0(td,{param:L(o),parent:e.parent,description:t.description,"onUpdate:modulations":c[2]||(c[2]=d=>n("update:modulations",{field:t.description.field,modulations:d}))},null,8,["param","parent","description"])])):B0("",!0)],2)):B0("",!0)],64)}}};var md=mt(hd,[["__scopeId","data-v-2f0e2dc8"]]);const gd=g("h2",{class:"config-title"},"Parameters",-1),bd={__name:"ParamConfigurator",props:["modelValue","system"],emits:["update:modelValue"],setup(e,{emit:n}){const t=e;t.modelValue;const r=x0(()=>t.system),o=(a,i)=>{if(i!=t.modelValue[a].value&&!Number.isNaN(Number(i))){const l={...t.modelValue,[a]:{...t.modelValue[a],value:i}};console.log("emit",l),n("update:modelValue",l)}},s=({field:a,modulations:i})=>{const l={...t.modelValue,[a]:{...t.modelValue[a],modulations:i}};console.log("modulations emit",l),n("update:modelValue",l)};return(a,i)=>(j(),q("form",{class:"configurator",onInput:i[0]||(i[0]=l=>o(l.target.dataset.field,l.target.value))},[gd,(j(!0),q(d0,null,D0(L(r).variables.parameters,l=>(j(),Ee(md,{description:l,parameters:t.modelValue,"onUpdate:modulations":s},null,8,["description","parameters"]))),256))],32))}};const yd=["id"],vd={class:"configRow labelInputRow"},_d=["for"],wd=["id","value"],xd=ls('<option value="constant" data-v-26811301> Constant </option><option value="uniform" data-v-26811301> Uniform random </option><optgroup label="From the book" data-v-26811301><option value="1" data-v-26811301> Set the leftmost cell </option><option value="2" data-v-26811301> Set the leftmost and rightmost cells </option><option value="3" data-v-26811301> Set the central cell </option><option value="5" data-v-26811301> Set the cells at specific positions </option><option value="6" data-v-26811301> Set the cells at random positions </option></optgroup>',3),Cd=[xd],kd={class:"initializationDetails"},Rd={key:0,class:"configRow"},$d=["for"],Ad=["id","data-field","value"],Ed={class:"configRow"},Id=["for"],Sd=["id","data-field","value"],Pd={class:"configRow"},Bd=["for"],Td=["id","data-field","value"],Dd={class:"configRow"},Od=["for"],Md=["id","data-field","value"],Fd={class:"configRow"},Ld=["for"],Nd=["id","data-field","value"],Kd={__name:"InitializationConfigurator",props:["modelValue","system","id"],emits:["update:modelValue"],setup(e,{emit:n}){const t=e,r=x0(()=>t.modelValue),o=x0(()=>t.id||"_"+random().toString(36)),s=x0(()=>t.system),a=i=>{const l={[i.target.dataset.field]:{...t.modelValue[i.target.dataset.field],[i.target.name]:i.target.type=="number"?Number(i.target.value):i.target.value}};console.log("initialization update",l),n("update:modelValue",{...t.modelValue,...l})};return _0(!1),(i,l)=>(j(),q("form",{class:"initializationConfig",onInput:a},[(j(!0),q(d0,null,D0(L(s).variables.state,({name:u,symbol:c,field:f})=>(j(),q("fieldset",{class:"initializationGroup",id:`${L(o)}-${f}`},[L(r)[f]?(j(),q(d0,{key:0},[g("p",vd,[g("label",{class:"selectLabel",for:`${L(o)}-${f}-select`},[v0(a0(u)+" ",1),g("em",null,a0(c),1)],8,_d),g("select",{id:`${L(o)}-${f}-select`,class:"config-input",value:L(r)[f].mode},Cd,8,wd)]),g("aside",kd,[L(r)[f].mode=="constant"?(j(),q("p",Rd,[g("label",{for:`${L(o)}-${f}-value`}," Value ",8,$d),g("input",{id:`${L(o)}-${f}-value`,class:"config-input",type:"number",min:"0",name:"value","data-field":f,value:L(r)[f].min||0},null,8,Ad)])):B0("",!0),L(r)[f].mode=="uniform"?(j(),q(d0,{key:1},[g("p",Ed,[g("label",{for:`${L(o)}-${f}-min`}," Minimum ",8,Id),g("input",{id:`${L(o)}-${f}-min`,class:"config-input",type:"number",min:"0",name:"min","data-field":f,value:L(r)[f].min||0},null,8,Sd)]),g("p",Pd,[g("label",{for:`${L(o)}-${f}-max`}," Max ",8,Bd),g("input",{id:`${L(o)}-${f}-max`,class:"config-input",name:"max","data-field":f,type:"number",min:"0",value:L(r)[f].min||1},null,8,Td)])],64)):B0("",!0),[1,2,3,5,6].includes(L(r)[f].mode)?(j(),q(d0,{key:2},[g("p",Dd,[g("label",{for:`${L(o)}-${f}-specifiedValue`},"Set to",8,Od),g("input",{id:`${L(o)}-${f}-specifiedValue`,class:"config-input",name:"specifiedValue","data-field":f,type:"number",min:"0",value:L(r)[f].specifiedValue},null,8,Md)]),g("p",Fd,[g("label",{for:`${L(o)}-${f}-generalValue`},"Other cells",8,Ld),g("input",{id:`${L(o)}-${f}-generalValue`,class:"config-input",name:"generalValue","data-field":f,type:"number",min:"0",value:L(r)[f].generalValue},null,8,Nd)])],64)):B0("",!0)])],64)):B0("",!0)],8,yd))),256))],32))}};var Hd=mt(Kd,[["__scopeId","data-v-26811301"]]);const Vd={class:"configRow labelInputRow"},Gd=g("label",{for:"presetSelector",class:"selectLabel"}," Configurations from the book: ",-1),zd=["label"],jd=["value"],Ud={style:{display:"flex","justify-content":"space-between"}},Wd=g("legend",null,"Simulation size",-1),qd=v0(" auto "),Xd={class:"configRow"},Yd=g("label",{for:"simWidthInput"}," Simulation width ",-1),Qd={class:"configRow"},Jd=["disabled"],Zd=g("label",{for:"simHeightInput"}," Simulation height ",-1),ef=g("legend",null,"Simulation parameters",-1),nf={class:"configRow"},tf=["value"],rf=g("label",{for:"simUpdateStepInput"}," Steps per line ",-1),of={class:"configRow"},sf=["value"],af=g("label",{for:"simUpdateSizeInput"}," Step size (dt) ",-1),lf=g("legend",null,"Boundary behavior",-1),cf={class:"configRow"},uf=["checked"],df=g("span",null," Wrap horizontally",-1),ff={class:"configRow"},pf=g("span",null," Wrap vertically",-1),hf={style:{display:"flex","justify-content":"space-between"}},mf=g("legend",null,"Controls",-1),gf={style:{"padding-top":"6px",display:"flex",gap:"6px"}},bf=["disabled"],yf={class:"configRow labelInputRow"},vf=g("span",{class:"selectLabel"},"System:",-1),_f={style:{"max-width":"192px"}},wf={style:{display:"flex","justify-content":"space-between","align-items":"center"}},xf=g("h2",null,"State initialization",-1),Cf=v0(" auto-reset "),kf={__name:"PatternWorkspace",setup(e){const n=Object.keys(_n).filter(M=>jn[M]),t=zt();window.RdSystems=et;const r=O0("wm.actions");let o=_0(),s=_0(),a=_0(),i=_0(),l=Noise(3),u,c,f;const d=_0(),h=Se([800,0]),w=_0(!0),E=_0(!0),m=window.updateDim=()=>{if(w.value=!1,E.value){const M=d.value.getBoundingClientRect(),W=floor(M.height/(M.width/h[X]));h[Y]=W}[d.value.width,d.value.height]=h,f=u.createImageData(h[X],1),J.value&&b0()},v=_0(!0),S=_0(!0),_=ze({width:800,stepCount:100,dt:.8,wrap:!0}),C=M=>{const W=M.target.type=="checkbox"?M.target.checked:M.target.value,t0={..._.value,[M.target.dataset.field]:W};_.value=t0},V=_0(),J=window.system=ze(null),l0=Object.keys(et);_0(l0[0]);let F,k,$=0,O=_0(0);const n0=ze({}),p0=window.initialization=ze({}),Q=window.renderConfig=ze({showGrowingEdge:!0}),F0=M=>{_.value={..._.value,...M.simulationConfig},n0.value={...M.paramConfig},Q.value={...Q.value,...M.renderConfig},p0.value={...M.stateInitialization},v.value&&b0()},E0=(M,W)=>{console.log("changing to",M),J.value=M,F0(W),v.value||(F=window.state=Wt(p0.value,h[X],l),k=window.params=zn(n0.value,h[X]))},b0=()=>{l=Noise(3),$=0,O.value=0,F=window.state=Wt(p0.value,h[X],l),k=window.params=zn(n0.value,h[X])};Je(n0,M=>{k=window.params=zn(n0.value,h[X])});const h0=_0(!1);x0(()=>!h0.value);const L0=M=>{c=requestAnimationFrame(L0),w.value&&m(),J.value&&z0(),!S.value&&$==0&&pe()},pe=()=>{h0.value=!1,cancelAnimationFrame(c)},q0=()=>{h0.value=!0,c=requestAnimationFrame(L0)},z0=()=>{const M={paramConfig:n0.value,simulationConfig:{..._.value,dim:h},renderConfig:Q.value};$=Ut(u,f,l,k,F,J.value,M,$),O.value+=_.value.stepCount*_.value.dt},V0=()=>{h0.value?pe():q0()},Pe=()=>{setTimeout(()=>{const M=a.value.$el.getBoundingClientRect();o.value.$el.getBoundingClientRect();const W=s.value.$el.getBoundingClientRect(),t0=i.value.$el.getBoundingClientRect();max(W.width,t0.width),r.setP("presetPanel",[16,16]),r.setP("systemPanel",[16+M.width+16,16]),r.setP("renderPanel",[16+M.width+16,16+t0.height+16]),r.setP("configPanel",[16,16+M.height+16])},0)},I=()=>w.value=!0,Z=M=>{const W=jn[M.KE],t0=Es(W.variables,M);V.value=M.name,E0(W,t0)},H=()=>{const M=Random.pick(n),W=Random.pick(_n[M]);Z(W)};return ln(()=>{u=d.value.getContext("2d"),window.route=t;let M=le.find(W=>W.name==t.query.bookParam);M?Z(M):H(),q0(),Pe(),addEventListener("resize",I)}),Tn(()=>{stop(),removeEventListener("resize",I)}),(M,W)=>(j(),q(d0,null,[g("canvas",{ref_key:"$renderTarget",ref:d,class:"renderTarget"},null,512),m0(pn,{id:"presetPanel",ref_key:"$presetPanel",ref:a,title:"Presets"},{default:S0(()=>[g("p",Vd,[Gd,we(g("select",{id:"presetSelector",class:"config-input","onUpdate:modelValue":W[0]||(W[0]=t0=>V.value=t0),onChange:W[1]||(W[1]=t0=>Z(L(le).find(c0=>c0.name==t0.target.value)))},[(j(!0),q(d0,null,D0(L(n),t0=>(j(),q("optgroup",{label:L(jn)[t0].name},[(j(!0),q(d0,null,D0(L(_n)[t0],c0=>(j(),q("option",{value:c0.name},a0(c0.name),9,jd))),256))],8,zd))),256))],544),[[tl,V.value]])]),g("button",{type:"button",class:"configButton",style:{display:"block","margin-left":"auto"},onClick:H}," Randomize ")]),_:1},512),m0(pn,{id:"systemPanel",ref_key:"$systemPanel",ref:i,title:"System"},{default:S0(()=>[g("fieldset",null,[g("header",Ud,[Wd,g("label",null,[we(g("input",{type:"checkbox","onUpdate:modelValue":W[2]||(W[2]=t0=>E.value=t0),onChange:W[3]||(W[3]=t0=>w.value=!0)},null,544),[[Gn,E.value]]),qd])]),g("p",Xd,[we(g("input",{id:"simWidthInput",class:"config-input",type:"number",onInput:W[4]||(W[4]=t0=>w.value=!0),"onUpdate:modelValue":W[5]||(W[5]=t0=>h[0]=t0)},null,544),[[Kt,h[0]]]),Yd]),g("p",Qd,[we(g("input",{id:"simHeightInput",class:"config-input",type:"number",onInput:W[6]||(W[6]=t0=>w.value=!0),"onUpdate:modelValue":W[7]||(W[7]=t0=>h[1]=t0),disabled:E.value},null,40,Jd),[[Kt,h[1]]]),Zd])]),g("fieldset",null,[ef,g("p",nf,[g("input",{id:"simUpdateStepInput",class:"config-input",type:"number",min:"1",step:"1",value:L(_).stepCount,"data-field":"stepCount",onInput:C},null,40,tf),rf]),g("p",of,[g("input",{id:"simUpdateSizeInput",class:"config-input",type:"number",value:L(_).dt,min:"0",step:"0.1","data-field":"dt",onInput:C},null,40,sf),af])]),g("fieldset",null,[lf,g("p",cf,[g("label",null,[g("input",{type:"checkbox",checkbox:"",class:"config-input","data-field":"wrap",onInput:C,checked:L(_).wrap},null,40,uf),df])]),g("p",ff,[g("label",null,[we(g("input",{type:"checkbox",checkbox:"",class:"config-input","onUpdate:modelValue":W[8]||(W[8]=t0=>S.value=t0)},null,512),[[Gn,S.value]]),pf])])]),g("fieldset",null,[g("header",hf,[mf,g("span",null,"t = "+a0(L(O)),1)]),g("p",gf,[g("button",{class:"configButton",onClick:V0},a0(h0.value?"Pause":"Play"),1),g("button",{class:"configButton",onClick:z0,disabled:h0.value}," Step ",8,bf),g("button",{class:"configButton",onClick:b0}," Restart ")])])]),_:1},512),m0(pn,{id:"configPanel",ref_key:"$configPanel",ref:o,title:"Pattern generator"},{default:S0(()=>[L(J)?(j(),q(d0,{key:0},[g("fieldset",null,[g("p",yf,[vf,g("span",_f,a0(L(J).name),1)])]),g("header",wf,[xf,g("label",null,[we(g("input",{type:"checkbox","onUpdate:modelValue":W[9]||(W[9]=t0=>v.value=t0)},null,512),[[Gn,v.value]]),Cf])]),m0(Hd,{modelValue:L(p0),"onUpdate:modelValue":W[10]||(W[10]=t0=>P0(p0)?p0.value=t0:null),system:L(J)},null,8,["modelValue","system"]),m0(bd,{system:L(J),modelValue:L(n0),"onUpdate:modelValue":W[11]||(W[11]=t0=>P0(n0)?n0.value=t0:null)},null,8,["system","modelValue"])],64)):B0("",!0)]),_:1},512),m0(pn,{id:"renderPanel",title:"Rendering",ref_key:"$renderPanel",ref:s},{default:S0(()=>[m0(Gu,{system:L(J),modelValue:L(Q),"onUpdate:modelValue":W[12]||(W[12]=t0=>P0(Q)?Q.value=t0:null)},null,8,["system","modelValue"])]),_:1},512)],64))}},Rf=()=>Fs(()=>import("./ShellWorkspace.00ceb483.js"),[]),$f=window.router=f1({history:Al(),routes:[{name:"home",path:"/",component:Y1,meta:{panels:!1}},{name:"gallery",path:"/gallery",component:Gc,meta:{panels:!1}},{name:"patterns",path:"/patterns",component:kf,meta:{panels:!0}},{name:"manifolds",path:"/shells",component:Rf,meta:{panels:!0}}]}),Ts=window.app=il(I1);Ts.use($f);Ts.mount("#app");export{d0 as F,pn as _,g as a,ln as b,q as c,Tn as d,m0 as e,we as f,v0 as g,O0 as i,j as o,_0 as r,L as u,Kt as v,S0 as w};

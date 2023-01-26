(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function e(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=e(r);fetch(r.href,i)}})();function u6(c,a){const e=Object.create(null),s=c.split(",");for(let r=0;r<s.length;r++)e[s[r]]=!0;return a?r=>!!e[r.toLowerCase()]:r=>!!e[r]}function h6(c){if(B(c)){const a={};for(let e=0;e<c.length;e++){const s=c[e],r=c2(s)?en(s):h6(s);if(r)for(const i in r)a[i]=r[i]}return a}else{if(c2(c))return c;if(Y(c))return c}}const Zi=/;(?![^(]*\))/g,cn=/:([^]+)/,an=/\/\*.*?\*\//gs;function en(c){const a={};return c.replace(an,"").split(Zi).forEach(e=>{if(e){const s=e.split(cn);s.length>1&&(a[s[0].trim()]=s[1].trim())}}),a}function r4(c){let a="";if(c2(c))a=c;else if(B(c))for(let e=0;e<c.length;e++){const s=r4(c[e]);s&&(a+=s+" ")}else if(Y(c))for(const e in c)c[e]&&(a+=e+" ");return a.trim()}const sn="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",rn=u6(sn);function Z0(c){return!!c||c===""}const I3=c=>c2(c)?c:c==null?"":B(c)||Y(c)&&(c.toString===s5||!R(c.toString))?JSON.stringify(c,c5,2):String(c),c5=(c,a)=>a&&a.__v_isRef?c5(c,a.value):b1(a)?{[`Map(${a.size})`]:[...a.entries()].reduce((e,[s,r])=>(e[`${s} =>`]=r,e),{})}:a5(a)?{[`Set(${a.size})`]:[...a.values()]}:Y(a)&&!B(a)&&!r5(a)?String(a):a,j={},x1=[],w2=()=>{},nn=()=>!1,ln=/^on[^a-z]/,Q4=c=>ln.test(c),V6=c=>c.startsWith("onUpdate:"),o2=Object.assign,p6=(c,a)=>{const e=c.indexOf(a);e>-1&&c.splice(e,1)},fn=Object.prototype.hasOwnProperty,E=(c,a)=>fn.call(c,a),B=Array.isArray,b1=c=>J4(c)==="[object Map]",a5=c=>J4(c)==="[object Set]",R=c=>typeof c=="function",c2=c=>typeof c=="string",M6=c=>typeof c=="symbol",Y=c=>c!==null&&typeof c=="object",e5=c=>Y(c)&&R(c.then)&&R(c.catch),s5=Object.prototype.toString,J4=c=>s5.call(c),tn=c=>J4(c).slice(8,-1),r5=c=>J4(c)==="[object Object]",d6=c=>c2(c)&&c!=="NaN"&&c[0]!=="-"&&""+parseInt(c,10)===c,P4=u6(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Z4=c=>{const a=Object.create(null);return e=>a[e]||(a[e]=c(e))},on=/-(\w)/g,_2=Z4(c=>c.replace(on,(a,e)=>e?e.toUpperCase():"")),mn=/\B([A-Z])/g,p1=Z4(c=>c.replace(mn,"-$1").toLowerCase()),c3=Z4(c=>c.charAt(0).toUpperCase()+c.slice(1)),A3=Z4(c=>c?`on${c3(c)}`:""),O4=(c,a)=>!Object.is(c,a),B4=(c,a)=>{for(let e=0;e<c.length;e++)c[e](a)},I4=(c,a,e)=>{Object.defineProperty(c,a,{configurable:!0,enumerable:!1,value:e})},q4=c=>{const a=parseFloat(c);return isNaN(a)?c:a};let Y8;const Hn=()=>Y8||(Y8=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let B2;class vn{constructor(a=!1){this.detached=a,this.active=!0,this.effects=[],this.cleanups=[],this.parent=B2,!a&&B2&&(this.index=(B2.scopes||(B2.scopes=[])).push(this)-1)}run(a){if(this.active){const e=B2;try{return B2=this,a()}finally{B2=e}}}on(){B2=this}off(){B2=this.parent}stop(a){if(this.active){let e,s;for(e=0,s=this.effects.length;e<s;e++)this.effects[e].stop();for(e=0,s=this.cleanups.length;e<s;e++)this.cleanups[e]();if(this.scopes)for(e=0,s=this.scopes.length;e<s;e++)this.scopes[e].stop(!0);if(!this.detached&&this.parent&&!a){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this.active=!1}}}function zn(c,a=B2){a&&a.active&&a.effects.push(c)}const C6=c=>{const a=new Set(c);return a.w=0,a.n=0,a},i5=c=>(c.w&Z2)>0,n5=c=>(c.n&Z2)>0,un=({deps:c})=>{if(c.length)for(let a=0;a<c.length;a++)c[a].w|=Z2},hn=c=>{const{deps:a}=c;if(a.length){let e=0;for(let s=0;s<a.length;s++){const r=a[s];i5(r)&&!n5(r)?r.delete(c):a[e++]=r,r.w&=~Z2,r.n&=~Z2}a.length=e}},q3=new WeakMap;let U1=0,Z2=1;const W3=30;let x2;const z1=Symbol(""),G3=Symbol("");class L6{constructor(a,e=null,s){this.fn=a,this.scheduler=e,this.active=!0,this.deps=[],this.parent=void 0,zn(this,s)}run(){if(!this.active)return this.fn();let a=x2,e=Q2;for(;a;){if(a===this)return;a=a.parent}try{return this.parent=x2,x2=this,Q2=!0,Z2=1<<++U1,U1<=W3?un(this):X8(this),this.fn()}finally{U1<=W3&&hn(this),Z2=1<<--U1,x2=this.parent,Q2=e,this.parent=void 0,this.deferStop&&this.stop()}}stop(){x2===this?this.deferStop=!0:this.active&&(X8(this),this.onStop&&this.onStop(),this.active=!1)}}function X8(c){const{deps:a}=c;if(a.length){for(let e=0;e<a.length;e++)a[e].delete(c);a.length=0}}let Q2=!0;const l5=[];function T1(){l5.push(Q2),Q2=!1}function P1(){const c=l5.pop();Q2=c===void 0?!0:c}function h2(c,a,e){if(Q2&&x2){let s=q3.get(c);s||q3.set(c,s=new Map);let r=s.get(e);r||s.set(e,r=C6()),f5(r)}}function f5(c,a){let e=!1;U1<=W3?n5(c)||(c.n|=Z2,e=!i5(c)):e=!c.has(x2),e&&(c.add(x2),x2.deps.push(c))}function I2(c,a,e,s,r,i){const n=q3.get(c);if(!n)return;let l=[];if(a==="clear")l=[...n.values()];else if(e==="length"&&B(c)){const f=q4(s);n.forEach((o,H)=>{(H==="length"||H>=f)&&l.push(o)})}else switch(e!==void 0&&l.push(n.get(e)),a){case"add":B(c)?d6(e)&&l.push(n.get("length")):(l.push(n.get(z1)),b1(c)&&l.push(n.get(G3)));break;case"delete":B(c)||(l.push(n.get(z1)),b1(c)&&l.push(n.get(G3)));break;case"set":b1(c)&&l.push(n.get(z1));break}if(l.length===1)l[0]&&j3(l[0]);else{const f=[];for(const o of l)o&&f.push(...o);j3(C6(f))}}function j3(c,a){const e=B(c)?c:[...c];for(const s of e)s.computed&&Q8(s);for(const s of e)s.computed||Q8(s)}function Q8(c,a){(c!==x2||c.allowRecurse)&&(c.scheduler?c.scheduler():c.run())}const Vn=u6("__proto__,__v_isRef,__isVue"),t5=new Set(Object.getOwnPropertyNames(Symbol).filter(c=>c!=="arguments"&&c!=="caller").map(c=>Symbol[c]).filter(M6)),pn=g6(),Mn=g6(!1,!0),dn=g6(!0),J8=Cn();function Cn(){const c={};return["includes","indexOf","lastIndexOf"].forEach(a=>{c[a]=function(...e){const s=q(this);for(let i=0,n=this.length;i<n;i++)h2(s,"get",i+"");const r=s[a](...e);return r===-1||r===!1?s[a](...e.map(q)):r}}),["push","pop","shift","unshift","splice"].forEach(a=>{c[a]=function(...e){T1();const s=q(this)[a].apply(this,e);return P1(),s}}),c}function g6(c=!1,a=!1){return function(s,r,i){if(r==="__v_isReactive")return!c;if(r==="__v_isReadonly")return c;if(r==="__v_isShallow")return a;if(r==="__v_raw"&&i===(c?a?Dn:z5:a?v5:H5).get(s))return s;const n=B(s);if(!c&&n&&E(J8,r))return Reflect.get(J8,r,i);const l=Reflect.get(s,r,i);return(M6(r)?t5.has(r):Vn(r))||(c||h2(s,"get",r),a)?l:t2(l)?n&&d6(r)?l:l.value:Y(l)?c?u5(l):S6(l):l}}const Ln=o5(),gn=o5(!0);function o5(c=!1){return function(e,s,r,i){let n=e[s];if($1(n)&&t2(n)&&!t2(r))return!1;if(!c&&(!$3(r)&&!$1(r)&&(n=q(n),r=q(r)),!B(e)&&t2(n)&&!t2(r)))return n.value=r,!0;const l=B(e)&&d6(s)?Number(s)<e.length:E(e,s),f=Reflect.set(e,s,r,i);return e===q(i)&&(l?O4(r,n)&&I2(e,"set",s,r):I2(e,"add",s,r)),f}}function xn(c,a){const e=E(c,a);c[a];const s=Reflect.deleteProperty(c,a);return s&&e&&I2(c,"delete",a,void 0),s}function bn(c,a){const e=Reflect.has(c,a);return(!M6(a)||!t5.has(a))&&h2(c,"has",a),e}function Sn(c){return h2(c,"iterate",B(c)?"length":z1),Reflect.ownKeys(c)}const m5={get:pn,set:Ln,deleteProperty:xn,has:bn,ownKeys:Sn},Nn={get:dn,set(c,a){return!0},deleteProperty(c,a){return!0}},wn=o2({},m5,{get:Mn,set:gn}),x6=c=>c,a3=c=>Reflect.getPrototypeOf(c);function V4(c,a,e=!1,s=!1){c=c.__v_raw;const r=q(c),i=q(a);e||(a!==i&&h2(r,"get",a),h2(r,"get",i));const{has:n}=a3(r),l=s?x6:e?y6:w6;if(n.call(r,a))return l(c.get(a));if(n.call(r,i))return l(c.get(i));c!==r&&c.get(a)}function p4(c,a=!1){const e=this.__v_raw,s=q(e),r=q(c);return a||(c!==r&&h2(s,"has",c),h2(s,"has",r)),c===r?e.has(c):e.has(c)||e.has(r)}function M4(c,a=!1){return c=c.__v_raw,!a&&h2(q(c),"iterate",z1),Reflect.get(c,"size",c)}function Z8(c){c=q(c);const a=q(this);return a3(a).has.call(a,c)||(a.add(c),I2(a,"add",c,c)),this}function c0(c,a){a=q(a);const e=q(this),{has:s,get:r}=a3(e);let i=s.call(e,c);i||(c=q(c),i=s.call(e,c));const n=r.call(e,c);return e.set(c,a),i?O4(a,n)&&I2(e,"set",c,a):I2(e,"add",c,a),this}function a0(c){const a=q(this),{has:e,get:s}=a3(a);let r=e.call(a,c);r||(c=q(c),r=e.call(a,c)),s&&s.call(a,c);const i=a.delete(c);return r&&I2(a,"delete",c,void 0),i}function e0(){const c=q(this),a=c.size!==0,e=c.clear();return a&&I2(c,"clear",void 0,void 0),e}function d4(c,a){return function(s,r){const i=this,n=i.__v_raw,l=q(n),f=a?x6:c?y6:w6;return!c&&h2(l,"iterate",z1),n.forEach((o,H)=>s.call(r,f(o),f(H),i))}}function C4(c,a,e){return function(...s){const r=this.__v_raw,i=q(r),n=b1(i),l=c==="entries"||c===Symbol.iterator&&n,f=c==="keys"&&n,o=r[c](...s),H=e?x6:a?y6:w6;return!a&&h2(i,"iterate",f?G3:z1),{next(){const{value:v,done:u}=o.next();return u?{value:v,done:u}:{value:l?[H(v[0]),H(v[1])]:H(v),done:u}},[Symbol.iterator](){return this}}}}function K2(c){return function(...a){return c==="delete"?!1:this}}function yn(){const c={get(i){return V4(this,i)},get size(){return M4(this)},has:p4,add:Z8,set:c0,delete:a0,clear:e0,forEach:d4(!1,!1)},a={get(i){return V4(this,i,!1,!0)},get size(){return M4(this)},has:p4,add:Z8,set:c0,delete:a0,clear:e0,forEach:d4(!1,!0)},e={get(i){return V4(this,i,!0)},get size(){return M4(this,!0)},has(i){return p4.call(this,i,!0)},add:K2("add"),set:K2("set"),delete:K2("delete"),clear:K2("clear"),forEach:d4(!0,!1)},s={get(i){return V4(this,i,!0,!0)},get size(){return M4(this,!0)},has(i){return p4.call(this,i,!0)},add:K2("add"),set:K2("set"),delete:K2("delete"),clear:K2("clear"),forEach:d4(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{c[i]=C4(i,!1,!1),e[i]=C4(i,!0,!1),a[i]=C4(i,!1,!0),s[i]=C4(i,!0,!0)}),[c,e,a,s]}const[kn,An,Tn,Pn]=yn();function b6(c,a){const e=a?c?Pn:Tn:c?An:kn;return(s,r,i)=>r==="__v_isReactive"?!c:r==="__v_isReadonly"?c:r==="__v_raw"?s:Reflect.get(E(e,r)&&r in s?e:s,r,i)}const Bn={get:b6(!1,!1)},Fn={get:b6(!1,!0)},Rn={get:b6(!0,!1)},H5=new WeakMap,v5=new WeakMap,z5=new WeakMap,Dn=new WeakMap;function _n(c){switch(c){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function En(c){return c.__v_skip||!Object.isExtensible(c)?0:_n(tn(c))}function S6(c){return $1(c)?c:N6(c,!1,m5,Bn,H5)}function Un(c){return N6(c,!1,wn,Fn,v5)}function u5(c){return N6(c,!0,Nn,Rn,z5)}function N6(c,a,e,s,r){if(!Y(c)||c.__v_raw&&!(a&&c.__v_isReactive))return c;const i=r.get(c);if(i)return i;const n=En(c);if(n===0)return c;const l=new Proxy(c,n===2?s:e);return r.set(c,l),l}function S1(c){return $1(c)?S1(c.__v_raw):!!(c&&c.__v_isReactive)}function $1(c){return!!(c&&c.__v_isReadonly)}function $3(c){return!!(c&&c.__v_isShallow)}function h5(c){return S1(c)||$1(c)}function q(c){const a=c&&c.__v_raw;return a?q(a):c}function V5(c){return I4(c,"__v_skip",!0),c}const w6=c=>Y(c)?S6(c):c,y6=c=>Y(c)?u5(c):c;function On(c){Q2&&x2&&(c=q(c),f5(c.dep||(c.dep=C6())))}function In(c,a){c=q(c),c.dep&&j3(c.dep)}function t2(c){return!!(c&&c.__v_isRef===!0)}function qn(c){return t2(c)?c.value:c}const Wn={get:(c,a,e)=>qn(Reflect.get(c,a,e)),set:(c,a,e,s)=>{const r=c[a];return t2(r)&&!t2(e)?(r.value=e,!0):Reflect.set(c,a,e,s)}};function p5(c){return S1(c)?c:new Proxy(c,Wn)}var M5;class Gn{constructor(a,e,s,r){this._setter=e,this.dep=void 0,this.__v_isRef=!0,this[M5]=!1,this._dirty=!0,this.effect=new L6(a,()=>{this._dirty||(this._dirty=!0,In(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const a=q(this);return On(a),(a._dirty||!a._cacheable)&&(a._dirty=!1,a._value=a.effect.run()),a._value}set value(a){this._setter(a)}}M5="__v_isReadonly";function jn(c,a,e=!1){let s,r;const i=R(c);return i?(s=c,r=w2):(s=c.get,r=c.set),new Gn(s,r,i||!r,e)}function J2(c,a,e,s){let r;try{r=s?c(...s):c()}catch(i){e3(i,a,e)}return r}function y2(c,a,e,s){if(R(c)){const i=J2(c,a,e,s);return i&&e5(i)&&i.catch(n=>{e3(n,a,e)}),i}const r=[];for(let i=0;i<c.length;i++)r.push(y2(c[i],a,e,s));return r}function e3(c,a,e,s=!0){const r=a?a.vnode:null;if(a){let i=a.parent;const n=a.proxy,l=e;for(;i;){const o=i.ec;if(o){for(let H=0;H<o.length;H++)if(o[H](c,n,l)===!1)return}i=i.parent}const f=a.appContext.config.errorHandler;if(f){J2(f,null,10,[c,n,l]);return}}$n(c,e,r,s)}function $n(c,a,e,s=!0){console.error(c)}let K1=!1,K3=!1;const n2=[];let R2=0;const N1=[];let O2=null,f1=0;const d5=Promise.resolve();let k6=null;function Kn(c){const a=k6||d5;return c?a.then(this?c.bind(this):c):a}function Yn(c){let a=R2+1,e=n2.length;for(;a<e;){const s=a+e>>>1;Y1(n2[s])<c?a=s+1:e=s}return a}function A6(c){(!n2.length||!n2.includes(c,K1&&c.allowRecurse?R2+1:R2))&&(c.id==null?n2.push(c):n2.splice(Yn(c.id),0,c),C5())}function C5(){!K1&&!K3&&(K3=!0,k6=d5.then(g5))}function Xn(c){const a=n2.indexOf(c);a>R2&&n2.splice(a,1)}function Qn(c){B(c)?N1.push(...c):(!O2||!O2.includes(c,c.allowRecurse?f1+1:f1))&&N1.push(c),C5()}function s0(c,a=K1?R2+1:0){for(;a<n2.length;a++){const e=n2[a];e&&e.pre&&(n2.splice(a,1),a--,e())}}function L5(c){if(N1.length){const a=[...new Set(N1)];if(N1.length=0,O2){O2.push(...a);return}for(O2=a,O2.sort((e,s)=>Y1(e)-Y1(s)),f1=0;f1<O2.length;f1++)O2[f1]();O2=null,f1=0}}const Y1=c=>c.id==null?1/0:c.id,Jn=(c,a)=>{const e=Y1(c)-Y1(a);if(e===0){if(c.pre&&!a.pre)return-1;if(a.pre&&!c.pre)return 1}return e};function g5(c){K3=!1,K1=!0,n2.sort(Jn);const a=w2;try{for(R2=0;R2<n2.length;R2++){const e=n2[R2];e&&e.active!==!1&&J2(e,null,14)}}finally{R2=0,n2.length=0,L5(),K1=!1,k6=null,(n2.length||N1.length)&&g5()}}function Zn(c,a,...e){if(c.isUnmounted)return;const s=c.vnode.props||j;let r=e;const i=a.startsWith("update:"),n=i&&a.slice(7);if(n&&n in s){const H=`${n==="modelValue"?"model":n}Modifiers`,{number:v,trim:u}=s[H]||j;u&&(r=e.map(g=>c2(g)?g.trim():g)),v&&(r=e.map(q4))}let l,f=s[l=A3(a)]||s[l=A3(_2(a))];!f&&i&&(f=s[l=A3(p1(a))]),f&&y2(f,c,6,r);const o=s[l+"Once"];if(o){if(!c.emitted)c.emitted={};else if(c.emitted[l])return;c.emitted[l]=!0,y2(o,c,6,r)}}function x5(c,a,e=!1){const s=a.emitsCache,r=s.get(c);if(r!==void 0)return r;const i=c.emits;let n={},l=!1;if(!R(c)){const f=o=>{const H=x5(o,a,!0);H&&(l=!0,o2(n,H))};!e&&a.mixins.length&&a.mixins.forEach(f),c.extends&&f(c.extends),c.mixins&&c.mixins.forEach(f)}return!i&&!l?(Y(c)&&s.set(c,null),null):(B(i)?i.forEach(f=>n[f]=null):o2(n,i),Y(c)&&s.set(c,n),n)}function s3(c,a){return!c||!Q4(a)?!1:(a=a.slice(2).replace(/Once$/,""),E(c,a[0].toLowerCase()+a.slice(1))||E(c,p1(a))||E(c,a))}let C2=null,b5=null;function W4(c){const a=C2;return C2=c,b5=c&&c.type.__scopeId||null,a}function cl(c,a=C2,e){if(!a||c._n)return c;const s=(...r)=>{s._d&&v0(-1);const i=W4(a);let n;try{n=c(...r)}finally{W4(i),s._d&&v0(1)}return n};return s._n=!0,s._c=!0,s._d=!0,s}function T3(c){const{type:a,vnode:e,proxy:s,withProxy:r,props:i,propsOptions:[n],slots:l,attrs:f,emit:o,render:H,renderCache:v,data:u,setupState:g,ctx:F,inheritAttrs:T}=c;let U,C;const N=W4(c);try{if(e.shapeFlag&4){const D=r||s;U=F2(H.call(D,D,v,i,g,u,F)),C=f}else{const D=a;U=F2(D.length>1?D(i,{attrs:f,slots:l,emit:o}):D(i,null)),C=a.props?f:al(f)}}catch(D){q1.length=0,e3(D,c,1),U=e2(X1)}let S=U;if(C&&T!==!1){const D=Object.keys(C),{shapeFlag:O}=S;D.length&&O&7&&(n&&D.some(V6)&&(C=el(C,n)),S=y1(S,C))}return e.dirs&&(S=y1(S),S.dirs=S.dirs?S.dirs.concat(e.dirs):e.dirs),e.transition&&(S.transition=e.transition),U=S,W4(N),U}const al=c=>{let a;for(const e in c)(e==="class"||e==="style"||Q4(e))&&((a||(a={}))[e]=c[e]);return a},el=(c,a)=>{const e={};for(const s in c)(!V6(s)||!(s.slice(9)in a))&&(e[s]=c[s]);return e};function sl(c,a,e){const{props:s,children:r,component:i}=c,{props:n,children:l,patchFlag:f}=a,o=i.emitsOptions;if(a.dirs||a.transition)return!0;if(e&&f>=0){if(f&1024)return!0;if(f&16)return s?r0(s,n,o):!!n;if(f&8){const H=a.dynamicProps;for(let v=0;v<H.length;v++){const u=H[v];if(n[u]!==s[u]&&!s3(o,u))return!0}}}else return(r||l)&&(!l||!l.$stable)?!0:s===n?!1:s?n?r0(s,n,o):!0:!!n;return!1}function r0(c,a,e){const s=Object.keys(a);if(s.length!==Object.keys(c).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(a[i]!==c[i]&&!s3(e,i))return!0}return!1}function rl({vnode:c,parent:a},e){for(;a&&a.subTree===c;)(c=a.vnode).el=e,a=a.parent}const il=c=>c.__isSuspense;function nl(c,a){a&&a.pendingBranch?B(c)?a.effects.push(...c):a.effects.push(c):Qn(c)}function ll(c,a){if(r2){let e=r2.provides;const s=r2.parent&&r2.parent.provides;s===e&&(e=r2.provides=Object.create(s)),e[c]=a}}function F4(c,a,e=!1){const s=r2||C2;if(s){const r=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(r&&c in r)return r[c];if(arguments.length>1)return e&&R(a)?a.call(s.proxy):a}}const L4={};function R4(c,a,e){return S5(c,a,e)}function S5(c,a,{immediate:e,deep:s,flush:r,onTrack:i,onTrigger:n}=j){const l=r2;let f,o=!1,H=!1;if(t2(c)?(f=()=>c.value,o=$3(c)):S1(c)?(f=()=>c,s=!0):B(c)?(H=!0,o=c.some(S=>S1(S)||$3(S)),f=()=>c.map(S=>{if(t2(S))return S.value;if(S1(S))return m1(S);if(R(S))return J2(S,l,2)})):R(c)?a?f=()=>J2(c,l,2):f=()=>{if(!(l&&l.isUnmounted))return v&&v(),y2(c,l,3,[u])}:f=w2,a&&s){const S=f;f=()=>m1(S())}let v,u=S=>{v=C.onStop=()=>{J2(S,l,4)}},g;if(J1)if(u=w2,a?e&&y2(a,l,3,[f(),H?[]:void 0,u]):f(),r==="sync"){const S=cf();g=S.__watcherHandles||(S.__watcherHandles=[])}else return w2;let F=H?new Array(c.length).fill(L4):L4;const T=()=>{if(!!C.active)if(a){const S=C.run();(s||o||(H?S.some((D,O)=>O4(D,F[O])):O4(S,F)))&&(v&&v(),y2(a,l,3,[S,F===L4?void 0:H&&F[0]===L4?[]:F,u]),F=S)}else C.run()};T.allowRecurse=!!a;let U;r==="sync"?U=T:r==="post"?U=()=>v2(T,l&&l.suspense):(T.pre=!0,l&&(T.id=l.uid),U=()=>A6(T));const C=new L6(f,U);a?e?T():F=C.run():r==="post"?v2(C.run.bind(C),l&&l.suspense):C.run();const N=()=>{C.stop(),l&&l.scope&&p6(l.scope.effects,C)};return g&&g.push(N),N}function fl(c,a,e){const s=this.proxy,r=c2(c)?c.includes(".")?N5(s,c):()=>s[c]:c.bind(s,s);let i;R(a)?i=a:(i=a.handler,e=a);const n=r2;k1(this);const l=S5(r,i.bind(s),e);return n?k1(n):u1(),l}function N5(c,a){const e=a.split(".");return()=>{let s=c;for(let r=0;r<e.length&&s;r++)s=s[e[r]];return s}}function m1(c,a){if(!Y(c)||c.__v_skip||(a=a||new Set,a.has(c)))return c;if(a.add(c),t2(c))m1(c.value,a);else if(B(c))for(let e=0;e<c.length;e++)m1(c[e],a);else if(a5(c)||b1(c))c.forEach(e=>{m1(e,a)});else if(r5(c))for(const e in c)m1(c[e],a);return c}function T6(c){return R(c)?{setup:c,name:c.name}:c}const D4=c=>!!c.type.__asyncLoader,w5=c=>c.type.__isKeepAlive;function tl(c,a){y5(c,"a",a)}function ol(c,a){y5(c,"da",a)}function y5(c,a,e=r2){const s=c.__wdc||(c.__wdc=()=>{let r=e;for(;r;){if(r.isDeactivated)return;r=r.parent}return c()});if(r3(a,s,e),e){let r=e.parent;for(;r&&r.parent;)w5(r.parent.vnode)&&ml(s,a,e,r),r=r.parent}}function ml(c,a,e,s){const r=r3(a,c,s,!0);k5(()=>{p6(s[a],r)},e)}function r3(c,a,e=r2,s=!1){if(e){const r=e[c]||(e[c]=[]),i=a.__weh||(a.__weh=(...n)=>{if(e.isUnmounted)return;T1(),k1(e);const l=y2(a,e,c,n);return u1(),P1(),l});return s?r.unshift(i):r.push(i),i}}const j2=c=>(a,e=r2)=>(!J1||c==="sp")&&r3(c,(...s)=>a(...s),e),Hl=j2("bm"),vl=j2("m"),zl=j2("bu"),ul=j2("u"),hl=j2("bum"),k5=j2("um"),Vl=j2("sp"),pl=j2("rtg"),Ml=j2("rtc");function dl(c,a=r2){r3("ec",c,a)}function P6(c,a){const e=C2;if(e===null)return c;const s=l3(e)||e.proxy,r=c.dirs||(c.dirs=[]);for(let i=0;i<a.length;i++){let[n,l,f,o=j]=a[i];n&&(R(n)&&(n={mounted:n,updated:n}),n.deep&&m1(l),r.push({dir:n,instance:s,value:l,oldValue:void 0,arg:f,modifiers:o}))}return c}function i1(c,a,e,s){const r=c.dirs,i=a&&a.dirs;for(let n=0;n<r.length;n++){const l=r[n];i&&(l.oldValue=i[n].value);let f=l.dir[s];f&&(T1(),y2(f,e,8,[c.el,l,c,a]),P1())}}const A5="components";function t1(c,a){return Ll(A5,c,!0,a)||c}const Cl=Symbol();function Ll(c,a,e=!0,s=!1){const r=C2||r2;if(r){const i=r.type;if(c===A5){const l=Ql(i,!1);if(l&&(l===a||l===_2(a)||l===c3(_2(a))))return i}const n=i0(r[c]||i[c],a)||i0(r.appContext[c],a);return!n&&s?i:n}}function i0(c,a){return c&&(c[a]||c[_2(a)]||c[c3(_2(a))])}function n0(c,a,e,s){let r;const i=e&&e[s];if(B(c)||c2(c)){r=new Array(c.length);for(let n=0,l=c.length;n<l;n++)r[n]=a(c[n],n,void 0,i&&i[n])}else if(typeof c=="number"){r=new Array(c);for(let n=0;n<c;n++)r[n]=a(n+1,n,void 0,i&&i[n])}else if(Y(c))if(c[Symbol.iterator])r=Array.from(c,(n,l)=>a(n,l,void 0,i&&i[l]));else{const n=Object.keys(c);r=new Array(n.length);for(let l=0,f=n.length;l<f;l++){const o=n[l];r[l]=a(c[o],o,l,i&&i[l])}}else r=[];return e&&(e[s]=r),r}const Y3=c=>c?q5(c)?l3(c)||c.proxy:Y3(c.parent):null,I1=o2(Object.create(null),{$:c=>c,$el:c=>c.vnode.el,$data:c=>c.data,$props:c=>c.props,$attrs:c=>c.attrs,$slots:c=>c.slots,$refs:c=>c.refs,$parent:c=>Y3(c.parent),$root:c=>Y3(c.root),$emit:c=>c.emit,$options:c=>B6(c),$forceUpdate:c=>c.f||(c.f=()=>A6(c.update)),$nextTick:c=>c.n||(c.n=Kn.bind(c.proxy)),$watch:c=>fl.bind(c)}),P3=(c,a)=>c!==j&&!c.__isScriptSetup&&E(c,a),gl={get({_:c},a){const{ctx:e,setupState:s,data:r,props:i,accessCache:n,type:l,appContext:f}=c;let o;if(a[0]!=="$"){const g=n[a];if(g!==void 0)switch(g){case 1:return s[a];case 2:return r[a];case 4:return e[a];case 3:return i[a]}else{if(P3(s,a))return n[a]=1,s[a];if(r!==j&&E(r,a))return n[a]=2,r[a];if((o=c.propsOptions[0])&&E(o,a))return n[a]=3,i[a];if(e!==j&&E(e,a))return n[a]=4,e[a];X3&&(n[a]=0)}}const H=I1[a];let v,u;if(H)return a==="$attrs"&&h2(c,"get",a),H(c);if((v=l.__cssModules)&&(v=v[a]))return v;if(e!==j&&E(e,a))return n[a]=4,e[a];if(u=f.config.globalProperties,E(u,a))return u[a]},set({_:c},a,e){const{data:s,setupState:r,ctx:i}=c;return P3(r,a)?(r[a]=e,!0):s!==j&&E(s,a)?(s[a]=e,!0):E(c.props,a)||a[0]==="$"&&a.slice(1)in c?!1:(i[a]=e,!0)},has({_:{data:c,setupState:a,accessCache:e,ctx:s,appContext:r,propsOptions:i}},n){let l;return!!e[n]||c!==j&&E(c,n)||P3(a,n)||(l=i[0])&&E(l,n)||E(s,n)||E(I1,n)||E(r.config.globalProperties,n)},defineProperty(c,a,e){return e.get!=null?c._.accessCache[a]=0:E(e,"value")&&this.set(c,a,e.value,null),Reflect.defineProperty(c,a,e)}};let X3=!0;function xl(c){const a=B6(c),e=c.proxy,s=c.ctx;X3=!1,a.beforeCreate&&l0(a.beforeCreate,c,"bc");const{data:r,computed:i,methods:n,watch:l,provide:f,inject:o,created:H,beforeMount:v,mounted:u,beforeUpdate:g,updated:F,activated:T,deactivated:U,beforeDestroy:C,beforeUnmount:N,destroyed:S,unmounted:D,render:O,renderTracked:m2,renderTriggered:i2,errorCaptured:L2,serverPrefetch:p2,expose:E2,inheritAttrs:R1,components:v4,directives:z4,filters:w3}=a;if(o&&bl(o,s,null,c.appContext.config.unwrapInjectedRef),n)for(const X in n){const W=n[X];R(W)&&(s[X]=W.bind(e))}if(r){const X=r.call(e,e);Y(X)&&(c.data=S6(X))}if(X3=!0,i)for(const X in i){const W=i[X],s1=R(W)?W.bind(e,e):R(W.get)?W.get.bind(e,e):w2,u4=!R(W)&&R(W.set)?W.set.bind(e):w2,r1=d2({get:s1,set:u4});Object.defineProperty(s,X,{enumerable:!0,configurable:!0,get:()=>r1.value,set:A2=>r1.value=A2})}if(l)for(const X in l)T5(l[X],s,e,X);if(f){const X=R(f)?f.call(e):f;Reflect.ownKeys(X).forEach(W=>{ll(W,X[W])})}H&&l0(H,c,"c");function l2(X,W){B(W)?W.forEach(s1=>X(s1.bind(e))):W&&X(W.bind(e))}if(l2(Hl,v),l2(vl,u),l2(zl,g),l2(ul,F),l2(tl,T),l2(ol,U),l2(dl,L2),l2(Ml,m2),l2(pl,i2),l2(hl,N),l2(k5,D),l2(Vl,p2),B(E2))if(E2.length){const X=c.exposed||(c.exposed={});E2.forEach(W=>{Object.defineProperty(X,W,{get:()=>e[W],set:s1=>e[W]=s1})})}else c.exposed||(c.exposed={});O&&c.render===w2&&(c.render=O),R1!=null&&(c.inheritAttrs=R1),v4&&(c.components=v4),z4&&(c.directives=z4)}function bl(c,a,e=w2,s=!1){B(c)&&(c=Q3(c));for(const r in c){const i=c[r];let n;Y(i)?"default"in i?n=F4(i.from||r,i.default,!0):n=F4(i.from||r):n=F4(i),t2(n)&&s?Object.defineProperty(a,r,{enumerable:!0,configurable:!0,get:()=>n.value,set:l=>n.value=l}):a[r]=n}}function l0(c,a,e){y2(B(c)?c.map(s=>s.bind(a.proxy)):c.bind(a.proxy),a,e)}function T5(c,a,e,s){const r=s.includes(".")?N5(e,s):()=>e[s];if(c2(c)){const i=a[c];R(i)&&R4(r,i)}else if(R(c))R4(r,c.bind(e));else if(Y(c))if(B(c))c.forEach(i=>T5(i,a,e,s));else{const i=R(c.handler)?c.handler.bind(e):a[c.handler];R(i)&&R4(r,i,c)}}function B6(c){const a=c.type,{mixins:e,extends:s}=a,{mixins:r,optionsCache:i,config:{optionMergeStrategies:n}}=c.appContext,l=i.get(a);let f;return l?f=l:!r.length&&!e&&!s?f=a:(f={},r.length&&r.forEach(o=>G4(f,o,n,!0)),G4(f,a,n)),Y(a)&&i.set(a,f),f}function G4(c,a,e,s=!1){const{mixins:r,extends:i}=a;i&&G4(c,i,e,!0),r&&r.forEach(n=>G4(c,n,e,!0));for(const n in a)if(!(s&&n==="expose")){const l=Sl[n]||e&&e[n];c[n]=l?l(c[n],a[n]):a[n]}return c}const Sl={data:f0,props:l1,emits:l1,methods:l1,computed:l1,beforeCreate:f2,created:f2,beforeMount:f2,mounted:f2,beforeUpdate:f2,updated:f2,beforeDestroy:f2,beforeUnmount:f2,destroyed:f2,unmounted:f2,activated:f2,deactivated:f2,errorCaptured:f2,serverPrefetch:f2,components:l1,directives:l1,watch:wl,provide:f0,inject:Nl};function f0(c,a){return a?c?function(){return o2(R(c)?c.call(this,this):c,R(a)?a.call(this,this):a)}:a:c}function Nl(c,a){return l1(Q3(c),Q3(a))}function Q3(c){if(B(c)){const a={};for(let e=0;e<c.length;e++)a[c[e]]=c[e];return a}return c}function f2(c,a){return c?[...new Set([].concat(c,a))]:a}function l1(c,a){return c?o2(o2(Object.create(null),c),a):a}function wl(c,a){if(!c)return a;if(!a)return c;const e=o2(Object.create(null),c);for(const s in a)e[s]=f2(c[s],a[s]);return e}function yl(c,a,e,s=!1){const r={},i={};I4(i,n3,1),c.propsDefaults=Object.create(null),P5(c,a,r,i);for(const n in c.propsOptions[0])n in r||(r[n]=void 0);e?c.props=s?r:Un(r):c.type.props?c.props=r:c.props=i,c.attrs=i}function kl(c,a,e,s){const{props:r,attrs:i,vnode:{patchFlag:n}}=c,l=q(r),[f]=c.propsOptions;let o=!1;if((s||n>0)&&!(n&16)){if(n&8){const H=c.vnode.dynamicProps;for(let v=0;v<H.length;v++){let u=H[v];if(s3(c.emitsOptions,u))continue;const g=a[u];if(f)if(E(i,u))g!==i[u]&&(i[u]=g,o=!0);else{const F=_2(u);r[F]=J3(f,l,F,g,c,!1)}else g!==i[u]&&(i[u]=g,o=!0)}}}else{P5(c,a,r,i)&&(o=!0);let H;for(const v in l)(!a||!E(a,v)&&((H=p1(v))===v||!E(a,H)))&&(f?e&&(e[v]!==void 0||e[H]!==void 0)&&(r[v]=J3(f,l,v,void 0,c,!0)):delete r[v]);if(i!==l)for(const v in i)(!a||!E(a,v)&&!0)&&(delete i[v],o=!0)}o&&I2(c,"set","$attrs")}function P5(c,a,e,s){const[r,i]=c.propsOptions;let n=!1,l;if(a)for(let f in a){if(P4(f))continue;const o=a[f];let H;r&&E(r,H=_2(f))?!i||!i.includes(H)?e[H]=o:(l||(l={}))[H]=o:s3(c.emitsOptions,f)||(!(f in s)||o!==s[f])&&(s[f]=o,n=!0)}if(i){const f=q(e),o=l||j;for(let H=0;H<i.length;H++){const v=i[H];e[v]=J3(r,f,v,o[v],c,!E(o,v))}}return n}function J3(c,a,e,s,r,i){const n=c[e];if(n!=null){const l=E(n,"default");if(l&&s===void 0){const f=n.default;if(n.type!==Function&&R(f)){const{propsDefaults:o}=r;e in o?s=o[e]:(k1(r),s=o[e]=f.call(null,a),u1())}else s=f}n[0]&&(i&&!l?s=!1:n[1]&&(s===""||s===p1(e))&&(s=!0))}return s}function B5(c,a,e=!1){const s=a.propsCache,r=s.get(c);if(r)return r;const i=c.props,n={},l=[];let f=!1;if(!R(c)){const H=v=>{f=!0;const[u,g]=B5(v,a,!0);o2(n,u),g&&l.push(...g)};!e&&a.mixins.length&&a.mixins.forEach(H),c.extends&&H(c.extends),c.mixins&&c.mixins.forEach(H)}if(!i&&!f)return Y(c)&&s.set(c,x1),x1;if(B(i))for(let H=0;H<i.length;H++){const v=_2(i[H]);t0(v)&&(n[v]=j)}else if(i)for(const H in i){const v=_2(H);if(t0(v)){const u=i[H],g=n[v]=B(u)||R(u)?{type:u}:Object.assign({},u);if(g){const F=H0(Boolean,g.type),T=H0(String,g.type);g[0]=F>-1,g[1]=T<0||F<T,(F>-1||E(g,"default"))&&l.push(v)}}}const o=[n,l];return Y(c)&&s.set(c,o),o}function t0(c){return c[0]!=="$"}function o0(c){const a=c&&c.toString().match(/^\s*function (\w+)/);return a?a[1]:c===null?"null":""}function m0(c,a){return o0(c)===o0(a)}function H0(c,a){return B(a)?a.findIndex(e=>m0(e,c)):R(a)&&m0(a,c)?0:-1}const F5=c=>c[0]==="_"||c==="$stable",F6=c=>B(c)?c.map(F2):[F2(c)],Al=(c,a,e)=>{if(a._n)return a;const s=cl((...r)=>F6(a(...r)),e);return s._c=!1,s},R5=(c,a,e)=>{const s=c._ctx;for(const r in c){if(F5(r))continue;const i=c[r];if(R(i))a[r]=Al(r,i,s);else if(i!=null){const n=F6(i);a[r]=()=>n}}},D5=(c,a)=>{const e=F6(a);c.slots.default=()=>e},Tl=(c,a)=>{if(c.vnode.shapeFlag&32){const e=a._;e?(c.slots=q(a),I4(a,"_",e)):R5(a,c.slots={})}else c.slots={},a&&D5(c,a);I4(c.slots,n3,1)},Pl=(c,a,e)=>{const{vnode:s,slots:r}=c;let i=!0,n=j;if(s.shapeFlag&32){const l=a._;l?e&&l===1?i=!1:(o2(r,a),!e&&l===1&&delete r._):(i=!a.$stable,R5(a,r)),n=a}else a&&(D5(c,a),n={default:1});if(i)for(const l in r)!F5(l)&&!(l in n)&&delete r[l]};function _5(){return{app:null,config:{isNativeTag:nn,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Bl=0;function Fl(c,a){return function(s,r=null){R(s)||(s=Object.assign({},s)),r!=null&&!Y(r)&&(r=null);const i=_5(),n=new Set;let l=!1;const f=i.app={_uid:Bl++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:af,get config(){return i.config},set config(o){},use(o,...H){return n.has(o)||(o&&R(o.install)?(n.add(o),o.install(f,...H)):R(o)&&(n.add(o),o(f,...H))),f},mixin(o){return i.mixins.includes(o)||i.mixins.push(o),f},component(o,H){return H?(i.components[o]=H,f):i.components[o]},directive(o,H){return H?(i.directives[o]=H,f):i.directives[o]},mount(o,H,v){if(!l){const u=e2(s,r);return u.appContext=i,H&&a?a(u,o):c(u,o,v),l=!0,f._container=o,o.__vue_app__=f,l3(u.component)||u.component.proxy}},unmount(){l&&(c(null,f._container),delete f._container.__vue_app__)},provide(o,H){return i.provides[o]=H,f}};return f}}function Z3(c,a,e,s,r=!1){if(B(c)){c.forEach((u,g)=>Z3(u,a&&(B(a)?a[g]:a),e,s,r));return}if(D4(s)&&!r)return;const i=s.shapeFlag&4?l3(s.component)||s.component.proxy:s.el,n=r?null:i,{i:l,r:f}=c,o=a&&a.r,H=l.refs===j?l.refs={}:l.refs,v=l.setupState;if(o!=null&&o!==f&&(c2(o)?(H[o]=null,E(v,o)&&(v[o]=null)):t2(o)&&(o.value=null)),R(f))J2(f,l,12,[n,H]);else{const u=c2(f),g=t2(f);if(u||g){const F=()=>{if(c.f){const T=u?E(v,f)?v[f]:H[f]:f.value;r?B(T)&&p6(T,i):B(T)?T.includes(i)||T.push(i):u?(H[f]=[i],E(v,f)&&(v[f]=H[f])):(f.value=[i],c.k&&(H[c.k]=f.value))}else u?(H[f]=n,E(v,f)&&(v[f]=n)):g&&(f.value=n,c.k&&(H[c.k]=n))};n?(F.id=-1,v2(F,e)):F()}}}const v2=nl;function Rl(c){return Dl(c)}function Dl(c,a){const e=Hn();e.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:n,createText:l,createComment:f,setText:o,setElementText:H,parentNode:v,nextSibling:u,setScopeId:g=w2,insertStaticContent:F}=c,T=(t,m,z,V=null,h=null,d=null,x=!1,M=null,L=!!m.dynamicChildren)=>{if(t===m)return;t&&!_1(t,m)&&(V=h4(t),A2(t,h,d,!0),t=null),m.patchFlag===-2&&(L=!1,m.dynamicChildren=null);const{type:p,ref:k,shapeFlag:w}=m;switch(p){case i3:U(t,m,z,V);break;case X1:C(t,m,z,V);break;case B3:t==null&&N(m,z,V,x);break;case M2:v4(t,m,z,V,h,d,x,M,L);break;default:w&1?O(t,m,z,V,h,d,x,M,L):w&6?z4(t,m,z,V,h,d,x,M,L):(w&64||w&128)&&p.process(t,m,z,V,h,d,x,M,L,M1)}k!=null&&h&&Z3(k,t&&t.ref,d,m||t,!m)},U=(t,m,z,V)=>{if(t==null)s(m.el=l(m.children),z,V);else{const h=m.el=t.el;m.children!==t.children&&o(h,m.children)}},C=(t,m,z,V)=>{t==null?s(m.el=f(m.children||""),z,V):m.el=t.el},N=(t,m,z,V)=>{[t.el,t.anchor]=F(t.children,m,z,V,t.el,t.anchor)},S=({el:t,anchor:m},z,V)=>{let h;for(;t&&t!==m;)h=u(t),s(t,z,V),t=h;s(m,z,V)},D=({el:t,anchor:m})=>{let z;for(;t&&t!==m;)z=u(t),r(t),t=z;r(m)},O=(t,m,z,V,h,d,x,M,L)=>{x=x||m.type==="svg",t==null?m2(m,z,V,h,d,x,M,L):p2(t,m,h,d,x,M,L)},m2=(t,m,z,V,h,d,x,M)=>{let L,p;const{type:k,props:w,shapeFlag:A,transition:P,dirs:_}=t;if(L=t.el=n(t.type,d,w&&w.is,w),A&8?H(L,t.children):A&16&&L2(t.children,L,null,V,h,d&&k!=="foreignObject",x,M),_&&i1(t,null,V,"created"),w){for(const I in w)I!=="value"&&!P4(I)&&i(L,I,null,w[I],d,t.children,V,h,U2);"value"in w&&i(L,"value",null,w.value),(p=w.onVnodeBeforeMount)&&P2(p,V,t)}i2(L,t,t.scopeId,x,V),_&&i1(t,null,V,"beforeMount");const G=(!h||h&&!h.pendingBranch)&&P&&!P.persisted;G&&P.beforeEnter(L),s(L,m,z),((p=w&&w.onVnodeMounted)||G||_)&&v2(()=>{p&&P2(p,V,t),G&&P.enter(L),_&&i1(t,null,V,"mounted")},h)},i2=(t,m,z,V,h)=>{if(z&&g(t,z),V)for(let d=0;d<V.length;d++)g(t,V[d]);if(h){let d=h.subTree;if(m===d){const x=h.vnode;i2(t,x,x.scopeId,x.slotScopeIds,h.parent)}}},L2=(t,m,z,V,h,d,x,M,L=0)=>{for(let p=L;p<t.length;p++){const k=t[p]=M?X2(t[p]):F2(t[p]);T(null,k,m,z,V,h,d,x,M)}},p2=(t,m,z,V,h,d,x)=>{const M=m.el=t.el;let{patchFlag:L,dynamicChildren:p,dirs:k}=m;L|=t.patchFlag&16;const w=t.props||j,A=m.props||j;let P;z&&n1(z,!1),(P=A.onVnodeBeforeUpdate)&&P2(P,z,m,t),k&&i1(m,t,z,"beforeUpdate"),z&&n1(z,!0);const _=h&&m.type!=="foreignObject";if(p?E2(t.dynamicChildren,p,M,z,V,_,d):x||W(t,m,M,null,z,V,_,d,!1),L>0){if(L&16)R1(M,m,w,A,z,V,h);else if(L&2&&w.class!==A.class&&i(M,"class",null,A.class,h),L&4&&i(M,"style",w.style,A.style,h),L&8){const G=m.dynamicProps;for(let I=0;I<G.length;I++){const J=G[I],g2=w[J],d1=A[J];(d1!==g2||J==="value")&&i(M,J,g2,d1,h,t.children,z,V,U2)}}L&1&&t.children!==m.children&&H(M,m.children)}else!x&&p==null&&R1(M,m,w,A,z,V,h);((P=A.onVnodeUpdated)||k)&&v2(()=>{P&&P2(P,z,m,t),k&&i1(m,t,z,"updated")},V)},E2=(t,m,z,V,h,d,x)=>{for(let M=0;M<m.length;M++){const L=t[M],p=m[M],k=L.el&&(L.type===M2||!_1(L,p)||L.shapeFlag&70)?v(L.el):z;T(L,p,k,null,V,h,d,x,!0)}},R1=(t,m,z,V,h,d,x)=>{if(z!==V){if(z!==j)for(const M in z)!P4(M)&&!(M in V)&&i(t,M,z[M],null,x,m.children,h,d,U2);for(const M in V){if(P4(M))continue;const L=V[M],p=z[M];L!==p&&M!=="value"&&i(t,M,p,L,x,m.children,h,d,U2)}"value"in V&&i(t,"value",z.value,V.value)}},v4=(t,m,z,V,h,d,x,M,L)=>{const p=m.el=t?t.el:l(""),k=m.anchor=t?t.anchor:l("");let{patchFlag:w,dynamicChildren:A,slotScopeIds:P}=m;P&&(M=M?M.concat(P):P),t==null?(s(p,z,V),s(k,z,V),L2(m.children,z,k,h,d,x,M,L)):w>0&&w&64&&A&&t.dynamicChildren?(E2(t.dynamicChildren,A,z,h,d,x,M),(m.key!=null||h&&m===h.subTree)&&E5(t,m,!0)):W(t,m,z,k,h,d,x,M,L)},z4=(t,m,z,V,h,d,x,M,L)=>{m.slotScopeIds=M,t==null?m.shapeFlag&512?h.ctx.activate(m,z,V,x,L):w3(m,z,V,h,d,x,L):q8(t,m,L)},w3=(t,m,z,V,h,d,x)=>{const M=t.component=jl(t,V,h);if(w5(t)&&(M.ctx.renderer=M1),$l(M),M.asyncDep){if(h&&h.registerDep(M,l2),!t.el){const L=M.subTree=e2(X1);C(null,L,m,z)}return}l2(M,t,m,z,h,d,x)},q8=(t,m,z)=>{const V=m.component=t.component;if(sl(t,m,z))if(V.asyncDep&&!V.asyncResolved){X(V,m,z);return}else V.next=m,Xn(V.update),V.update();else m.el=t.el,V.vnode=m},l2=(t,m,z,V,h,d,x)=>{const M=()=>{if(t.isMounted){let{next:k,bu:w,u:A,parent:P,vnode:_}=t,G=k,I;n1(t,!1),k?(k.el=_.el,X(t,k,x)):k=_,w&&B4(w),(I=k.props&&k.props.onVnodeBeforeUpdate)&&P2(I,P,k,_),n1(t,!0);const J=T3(t),g2=t.subTree;t.subTree=J,T(g2,J,v(g2.el),h4(g2),t,h,d),k.el=J.el,G===null&&rl(t,J.el),A&&v2(A,h),(I=k.props&&k.props.onVnodeUpdated)&&v2(()=>P2(I,P,k,_),h)}else{let k;const{el:w,props:A}=m,{bm:P,m:_,parent:G}=t,I=D4(m);if(n1(t,!1),P&&B4(P),!I&&(k=A&&A.onVnodeBeforeMount)&&P2(k,G,m),n1(t,!0),w&&k3){const J=()=>{t.subTree=T3(t),k3(w,t.subTree,t,h,null)};I?m.type.__asyncLoader().then(()=>!t.isUnmounted&&J()):J()}else{const J=t.subTree=T3(t);T(null,J,z,V,t,h,d),m.el=J.el}if(_&&v2(_,h),!I&&(k=A&&A.onVnodeMounted)){const J=m;v2(()=>P2(k,G,J),h)}(m.shapeFlag&256||G&&D4(G.vnode)&&G.vnode.shapeFlag&256)&&t.a&&v2(t.a,h),t.isMounted=!0,m=z=V=null}},L=t.effect=new L6(M,()=>A6(p),t.scope),p=t.update=()=>L.run();p.id=t.uid,n1(t,!0),p()},X=(t,m,z)=>{m.component=t;const V=t.vnode.props;t.vnode=m,t.next=null,kl(t,m.props,V,z),Pl(t,m.children,z),T1(),s0(),P1()},W=(t,m,z,V,h,d,x,M,L=!1)=>{const p=t&&t.children,k=t?t.shapeFlag:0,w=m.children,{patchFlag:A,shapeFlag:P}=m;if(A>0){if(A&128){u4(p,w,z,V,h,d,x,M,L);return}else if(A&256){s1(p,w,z,V,h,d,x,M,L);return}}P&8?(k&16&&U2(p,h,d),w!==p&&H(z,w)):k&16?P&16?u4(p,w,z,V,h,d,x,M,L):U2(p,h,d,!0):(k&8&&H(z,""),P&16&&L2(w,z,V,h,d,x,M,L))},s1=(t,m,z,V,h,d,x,M,L)=>{t=t||x1,m=m||x1;const p=t.length,k=m.length,w=Math.min(p,k);let A;for(A=0;A<w;A++){const P=m[A]=L?X2(m[A]):F2(m[A]);T(t[A],P,z,null,h,d,x,M,L)}p>k?U2(t,h,d,!0,!1,w):L2(m,z,V,h,d,x,M,L,w)},u4=(t,m,z,V,h,d,x,M,L)=>{let p=0;const k=m.length;let w=t.length-1,A=k-1;for(;p<=w&&p<=A;){const P=t[p],_=m[p]=L?X2(m[p]):F2(m[p]);if(_1(P,_))T(P,_,z,null,h,d,x,M,L);else break;p++}for(;p<=w&&p<=A;){const P=t[w],_=m[A]=L?X2(m[A]):F2(m[A]);if(_1(P,_))T(P,_,z,null,h,d,x,M,L);else break;w--,A--}if(p>w){if(p<=A){const P=A+1,_=P<k?m[P].el:V;for(;p<=A;)T(null,m[p]=L?X2(m[p]):F2(m[p]),z,_,h,d,x,M,L),p++}}else if(p>A)for(;p<=w;)A2(t[p],h,d,!0),p++;else{const P=p,_=p,G=new Map;for(p=_;p<=A;p++){const z2=m[p]=L?X2(m[p]):F2(m[p]);z2.key!=null&&G.set(z2.key,p)}let I,J=0;const g2=A-_+1;let d1=!1,j8=0;const D1=new Array(g2);for(p=0;p<g2;p++)D1[p]=0;for(p=P;p<=w;p++){const z2=t[p];if(J>=g2){A2(z2,h,d,!0);continue}let T2;if(z2.key!=null)T2=G.get(z2.key);else for(I=_;I<=A;I++)if(D1[I-_]===0&&_1(z2,m[I])){T2=I;break}T2===void 0?A2(z2,h,d,!0):(D1[T2-_]=p+1,T2>=j8?j8=T2:d1=!0,T(z2,m[T2],z,null,h,d,x,M,L),J++)}const $8=d1?_l(D1):x1;for(I=$8.length-1,p=g2-1;p>=0;p--){const z2=_+p,T2=m[z2],K8=z2+1<k?m[z2+1].el:V;D1[p]===0?T(null,T2,z,K8,h,d,x,M,L):d1&&(I<0||p!==$8[I]?r1(T2,z,K8,2):I--)}}},r1=(t,m,z,V,h=null)=>{const{el:d,type:x,transition:M,children:L,shapeFlag:p}=t;if(p&6){r1(t.component.subTree,m,z,V);return}if(p&128){t.suspense.move(m,z,V);return}if(p&64){x.move(t,m,z,M1);return}if(x===M2){s(d,m,z);for(let w=0;w<L.length;w++)r1(L[w],m,z,V);s(t.anchor,m,z);return}if(x===B3){S(t,m,z);return}if(V!==2&&p&1&&M)if(V===0)M.beforeEnter(d),s(d,m,z),v2(()=>M.enter(d),h);else{const{leave:w,delayLeave:A,afterLeave:P}=M,_=()=>s(d,m,z),G=()=>{w(d,()=>{_(),P&&P()})};A?A(d,_,G):G()}else s(d,m,z)},A2=(t,m,z,V=!1,h=!1)=>{const{type:d,props:x,ref:M,children:L,dynamicChildren:p,shapeFlag:k,patchFlag:w,dirs:A}=t;if(M!=null&&Z3(M,null,z,t,!0),k&256){m.ctx.deactivate(t);return}const P=k&1&&A,_=!D4(t);let G;if(_&&(G=x&&x.onVnodeBeforeUnmount)&&P2(G,m,t),k&6)Ji(t.component,z,V);else{if(k&128){t.suspense.unmount(z,V);return}P&&i1(t,null,m,"beforeUnmount"),k&64?t.type.remove(t,m,z,h,M1,V):p&&(d!==M2||w>0&&w&64)?U2(p,m,z,!1,!0):(d===M2&&w&384||!h&&k&16)&&U2(L,m,z),V&&W8(t)}(_&&(G=x&&x.onVnodeUnmounted)||P)&&v2(()=>{G&&P2(G,m,t),P&&i1(t,null,m,"unmounted")},z)},W8=t=>{const{type:m,el:z,anchor:V,transition:h}=t;if(m===M2){Qi(z,V);return}if(m===B3){D(t);return}const d=()=>{r(z),h&&!h.persisted&&h.afterLeave&&h.afterLeave()};if(t.shapeFlag&1&&h&&!h.persisted){const{leave:x,delayLeave:M}=h,L=()=>x(z,d);M?M(t.el,d,L):L()}else d()},Qi=(t,m)=>{let z;for(;t!==m;)z=u(t),r(t),t=z;r(m)},Ji=(t,m,z)=>{const{bum:V,scope:h,update:d,subTree:x,um:M}=t;V&&B4(V),h.stop(),d&&(d.active=!1,A2(x,t,m,z)),M&&v2(M,m),v2(()=>{t.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&t.asyncDep&&!t.asyncResolved&&t.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},U2=(t,m,z,V=!1,h=!1,d=0)=>{for(let x=d;x<t.length;x++)A2(t[x],m,z,V,h)},h4=t=>t.shapeFlag&6?h4(t.component.subTree):t.shapeFlag&128?t.suspense.next():u(t.anchor||t.el),G8=(t,m,z)=>{t==null?m._vnode&&A2(m._vnode,null,null,!0):T(m._vnode||null,t,m,null,null,null,z),s0(),L5(),m._vnode=t},M1={p:T,um:A2,m:r1,r:W8,mt:w3,mc:L2,pc:W,pbc:E2,n:h4,o:c};let y3,k3;return a&&([y3,k3]=a(M1)),{render:G8,hydrate:y3,createApp:Fl(G8,y3)}}function n1({effect:c,update:a},e){c.allowRecurse=a.allowRecurse=e}function E5(c,a,e=!1){const s=c.children,r=a.children;if(B(s)&&B(r))for(let i=0;i<s.length;i++){const n=s[i];let l=r[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=r[i]=X2(r[i]),l.el=n.el),e||E5(n,l)),l.type===i3&&(l.el=n.el)}}function _l(c){const a=c.slice(),e=[0];let s,r,i,n,l;const f=c.length;for(s=0;s<f;s++){const o=c[s];if(o!==0){if(r=e[e.length-1],c[r]<o){a[s]=r,e.push(s);continue}for(i=0,n=e.length-1;i<n;)l=i+n>>1,c[e[l]]<o?i=l+1:n=l;o<c[e[i]]&&(i>0&&(a[s]=e[i-1]),e[i]=s)}}for(i=e.length,n=e[i-1];i-- >0;)e[i]=n,n=a[n];return e}const El=c=>c.__isTeleport,M2=Symbol(void 0),i3=Symbol(void 0),X1=Symbol(void 0),B3=Symbol(void 0),q1=[];let S2=null;function u2(c=!1){q1.push(S2=c?null:[])}function Ul(){q1.pop(),S2=q1[q1.length-1]||null}let Q1=1;function v0(c){Q1+=c}function U5(c){return c.dynamicChildren=Q1>0?S2||x1:null,Ul(),Q1>0&&S2&&S2.push(c),c}function k2(c,a,e,s,r,i){return U5(Z(c,a,e,s,r,i,!0))}function z0(c,a,e,s,r){return U5(e2(c,a,e,s,r,!0))}function c6(c){return c?c.__v_isVNode===!0:!1}function _1(c,a){return c.type===a.type&&c.key===a.key}const n3="__vInternal",O5=({key:c})=>c!=null?c:null,_4=({ref:c,ref_key:a,ref_for:e})=>c!=null?c2(c)||t2(c)||R(c)?{i:C2,r:c,k:a,f:!!e}:c:null;function Z(c,a=null,e=null,s=0,r=null,i=c===M2?0:1,n=!1,l=!1){const f={__v_isVNode:!0,__v_skip:!0,type:c,props:a,key:a&&O5(a),ref:a&&_4(a),scopeId:b5,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:C2};return l?(R6(f,e),i&128&&c.normalize(f)):e&&(f.shapeFlag|=c2(e)?8:16),Q1>0&&!n&&S2&&(f.patchFlag>0||i&6)&&f.patchFlag!==32&&S2.push(f),f}const e2=Ol;function Ol(c,a=null,e=null,s=0,r=null,i=!1){if((!c||c===Cl)&&(c=X1),c6(c)){const l=y1(c,a,!0);return e&&R6(l,e),Q1>0&&!i&&S2&&(l.shapeFlag&6?S2[S2.indexOf(c)]=l:S2.push(l)),l.patchFlag|=-2,l}if(Jl(c)&&(c=c.__vccOpts),a){a=Il(a);let{class:l,style:f}=a;l&&!c2(l)&&(a.class=r4(l)),Y(f)&&(h5(f)&&!B(f)&&(f=o2({},f)),a.style=h6(f))}const n=c2(c)?1:il(c)?128:El(c)?64:Y(c)?4:R(c)?2:0;return Z(c,a,e,s,r,n,i,!0)}function Il(c){return c?h5(c)||n3 in c?o2({},c):c:null}function y1(c,a,e=!1){const{props:s,ref:r,patchFlag:i,children:n}=c,l=a?I5(s||{},a):s;return{__v_isVNode:!0,__v_skip:!0,type:c.type,props:l,key:l&&O5(l),ref:a&&a.ref?e&&r?B(r)?r.concat(_4(a)):[r,_4(a)]:_4(a):r,scopeId:c.scopeId,slotScopeIds:c.slotScopeIds,children:n,target:c.target,targetAnchor:c.targetAnchor,staticCount:c.staticCount,shapeFlag:c.shapeFlag,patchFlag:a&&c.type!==M2?i===-1?16:i|16:i,dynamicProps:c.dynamicProps,dynamicChildren:c.dynamicChildren,appContext:c.appContext,dirs:c.dirs,transition:c.transition,component:c.component,suspense:c.suspense,ssContent:c.ssContent&&y1(c.ssContent),ssFallback:c.ssFallback&&y1(c.ssFallback),el:c.el,anchor:c.anchor,ctx:c.ctx}}function ql(c=" ",a=0){return e2(i3,null,c,a)}function F2(c){return c==null||typeof c=="boolean"?e2(X1):B(c)?e2(M2,null,c.slice()):typeof c=="object"?X2(c):e2(i3,null,String(c))}function X2(c){return c.el===null&&c.patchFlag!==-1||c.memo?c:y1(c)}function R6(c,a){let e=0;const{shapeFlag:s}=c;if(a==null)a=null;else if(B(a))e=16;else if(typeof a=="object")if(s&65){const r=a.default;r&&(r._c&&(r._d=!1),R6(c,r()),r._c&&(r._d=!0));return}else{e=32;const r=a._;!r&&!(n3 in a)?a._ctx=C2:r===3&&C2&&(C2.slots._===1?a._=1:(a._=2,c.patchFlag|=1024))}else R(a)?(a={default:a,_ctx:C2},e=32):(a=String(a),s&64?(e=16,a=[ql(a)]):e=8);c.children=a,c.shapeFlag|=e}function I5(...c){const a={};for(let e=0;e<c.length;e++){const s=c[e];for(const r in s)if(r==="class")a.class!==s.class&&(a.class=r4([a.class,s.class]));else if(r==="style")a.style=h6([a.style,s.style]);else if(Q4(r)){const i=a[r],n=s[r];n&&i!==n&&!(B(i)&&i.includes(n))&&(a[r]=i?[].concat(i,n):n)}else r!==""&&(a[r]=s[r])}return a}function P2(c,a,e,s=null){y2(c,a,7,[e,s])}const Wl=_5();let Gl=0;function jl(c,a,e){const s=c.type,r=(a?a.appContext:c.appContext)||Wl,i={uid:Gl++,vnode:c,type:s,parent:a,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new vn(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:a?a.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:B5(s,r),emitsOptions:x5(s,r),emit:null,emitted:null,propsDefaults:j,inheritAttrs:s.inheritAttrs,ctx:j,data:j,props:j,attrs:j,slots:j,refs:j,setupState:j,setupContext:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=a?a.root:i,i.emit=Zn.bind(null,i),c.ce&&c.ce(i),i}let r2=null;const k1=c=>{r2=c,c.scope.on()},u1=()=>{r2&&r2.scope.off(),r2=null};function q5(c){return c.vnode.shapeFlag&4}let J1=!1;function $l(c,a=!1){J1=a;const{props:e,children:s}=c.vnode,r=q5(c);yl(c,e,r,a),Tl(c,s);const i=r?Kl(c,a):void 0;return J1=!1,i}function Kl(c,a){const e=c.type;c.accessCache=Object.create(null),c.proxy=V5(new Proxy(c.ctx,gl));const{setup:s}=e;if(s){const r=c.setupContext=s.length>1?Xl(c):null;k1(c),T1();const i=J2(s,c,0,[c.props,r]);if(P1(),u1(),e5(i)){if(i.then(u1,u1),a)return i.then(n=>{u0(c,n,a)}).catch(n=>{e3(n,c,0)});c.asyncDep=i}else u0(c,i,a)}else W5(c,a)}function u0(c,a,e){R(a)?c.type.__ssrInlineRender?c.ssrRender=a:c.render=a:Y(a)&&(c.setupState=p5(a)),W5(c,e)}let h0;function W5(c,a,e){const s=c.type;if(!c.render){if(!a&&h0&&!s.render){const r=s.template||B6(c).template;if(r){const{isCustomElement:i,compilerOptions:n}=c.appContext.config,{delimiters:l,compilerOptions:f}=s,o=o2(o2({isCustomElement:i,delimiters:l},n),f);s.render=h0(r,o)}}c.render=s.render||w2}k1(c),T1(),xl(c),P1(),u1()}function Yl(c){return new Proxy(c.attrs,{get(a,e){return h2(c,"get","$attrs"),a[e]}})}function Xl(c){const a=s=>{c.exposed=s||{}};let e;return{get attrs(){return e||(e=Yl(c))},slots:c.slots,emit:c.emit,expose:a}}function l3(c){if(c.exposed)return c.exposeProxy||(c.exposeProxy=new Proxy(p5(V5(c.exposed)),{get(a,e){if(e in a)return a[e];if(e in I1)return I1[e](c)},has(a,e){return e in a||e in I1}}))}function Ql(c,a=!0){return R(c)?c.displayName||c.name:c.name||a&&c.__name}function Jl(c){return R(c)&&"__vccOpts"in c}const d2=(c,a)=>jn(c,a,J1);function G5(c,a,e){const s=arguments.length;return s===2?Y(a)&&!B(a)?c6(a)?e2(c,null,[a]):e2(c,a):e2(c,null,a):(s>3?e=Array.prototype.slice.call(arguments,2):s===3&&c6(e)&&(e=[e]),e2(c,a,e))}const Zl=Symbol(""),cf=()=>F4(Zl),af="3.2.45",ef="http://www.w3.org/2000/svg",o1=typeof document<"u"?document:null,V0=o1&&o1.createElement("template"),sf={insert:(c,a,e)=>{a.insertBefore(c,e||null)},remove:c=>{const a=c.parentNode;a&&a.removeChild(c)},createElement:(c,a,e,s)=>{const r=a?o1.createElementNS(ef,c):o1.createElement(c,e?{is:e}:void 0);return c==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:c=>o1.createTextNode(c),createComment:c=>o1.createComment(c),setText:(c,a)=>{c.nodeValue=a},setElementText:(c,a)=>{c.textContent=a},parentNode:c=>c.parentNode,nextSibling:c=>c.nextSibling,querySelector:c=>o1.querySelector(c),setScopeId(c,a){c.setAttribute(a,"")},insertStaticContent(c,a,e,s,r,i){const n=e?e.previousSibling:a.lastChild;if(r&&(r===i||r.nextSibling))for(;a.insertBefore(r.cloneNode(!0),e),!(r===i||!(r=r.nextSibling)););else{V0.innerHTML=s?`<svg>${c}</svg>`:c;const l=V0.content;if(s){const f=l.firstChild;for(;f.firstChild;)l.appendChild(f.firstChild);l.removeChild(f)}a.insertBefore(l,e)}return[n?n.nextSibling:a.firstChild,e?e.previousSibling:a.lastChild]}};function rf(c,a,e){const s=c._vtc;s&&(a=(a?[a,...s]:[...s]).join(" ")),a==null?c.removeAttribute("class"):e?c.setAttribute("class",a):c.className=a}function nf(c,a,e){const s=c.style,r=c2(e);if(e&&!r){for(const i in e)a6(s,i,e[i]);if(a&&!c2(a))for(const i in a)e[i]==null&&a6(s,i,"")}else{const i=s.display;r?a!==e&&(s.cssText=e):a&&c.removeAttribute("style"),"_vod"in c&&(s.display=i)}}const p0=/\s*!important$/;function a6(c,a,e){if(B(e))e.forEach(s=>a6(c,a,s));else if(e==null&&(e=""),a.startsWith("--"))c.setProperty(a,e);else{const s=lf(c,a);p0.test(e)?c.setProperty(p1(s),e.replace(p0,""),"important"):c[s]=e}}const M0=["Webkit","Moz","ms"],F3={};function lf(c,a){const e=F3[a];if(e)return e;let s=_2(a);if(s!=="filter"&&s in c)return F3[a]=s;s=c3(s);for(let r=0;r<M0.length;r++){const i=M0[r]+s;if(i in c)return F3[a]=i}return a}const d0="http://www.w3.org/1999/xlink";function ff(c,a,e,s,r){if(s&&a.startsWith("xlink:"))e==null?c.removeAttributeNS(d0,a.slice(6,a.length)):c.setAttributeNS(d0,a,e);else{const i=rn(a);e==null||i&&!Z0(e)?c.removeAttribute(a):c.setAttribute(a,i?"":e)}}function tf(c,a,e,s,r,i,n){if(a==="innerHTML"||a==="textContent"){s&&n(s,r,i),c[a]=e==null?"":e;return}if(a==="value"&&c.tagName!=="PROGRESS"&&!c.tagName.includes("-")){c._value=e;const f=e==null?"":e;(c.value!==f||c.tagName==="OPTION")&&(c.value=f),e==null&&c.removeAttribute(a);return}let l=!1;if(e===""||e==null){const f=typeof c[a];f==="boolean"?e=Z0(e):e==null&&f==="string"?(e="",l=!0):f==="number"&&(e=0,l=!0)}try{c[a]=e}catch{}l&&c.removeAttribute(a)}function C1(c,a,e,s){c.addEventListener(a,e,s)}function of(c,a,e,s){c.removeEventListener(a,e,s)}function mf(c,a,e,s,r=null){const i=c._vei||(c._vei={}),n=i[a];if(s&&n)n.value=s;else{const[l,f]=Hf(a);if(s){const o=i[a]=uf(s,r);C1(c,l,o,f)}else n&&(of(c,l,n,f),i[a]=void 0)}}const C0=/(?:Once|Passive|Capture)$/;function Hf(c){let a;if(C0.test(c)){a={};let s;for(;s=c.match(C0);)c=c.slice(0,c.length-s[0].length),a[s[0].toLowerCase()]=!0}return[c[2]===":"?c.slice(3):p1(c.slice(2)),a]}let R3=0;const vf=Promise.resolve(),zf=()=>R3||(vf.then(()=>R3=0),R3=Date.now());function uf(c,a){const e=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=e.attached)return;y2(hf(s,e.value),a,5,[s])};return e.value=c,e.attached=zf(),e}function hf(c,a){if(B(a)){const e=c.stopImmediatePropagation;return c.stopImmediatePropagation=()=>{e.call(c),c._stopped=!0},a.map(s=>r=>!r._stopped&&s&&s(r))}else return a}const L0=/^on[a-z]/,Vf=(c,a,e,s,r=!1,i,n,l,f)=>{a==="class"?rf(c,s,r):a==="style"?nf(c,e,s):Q4(a)?V6(a)||mf(c,a,e,s,n):(a[0]==="."?(a=a.slice(1),!0):a[0]==="^"?(a=a.slice(1),!1):pf(c,a,s,r))?tf(c,a,s,i,n,l,f):(a==="true-value"?c._trueValue=s:a==="false-value"&&(c._falseValue=s),ff(c,a,s,r))};function pf(c,a,e,s){return s?!!(a==="innerHTML"||a==="textContent"||a in c&&L0.test(a)&&R(e)):a==="spellcheck"||a==="draggable"||a==="translate"||a==="form"||a==="list"&&c.tagName==="INPUT"||a==="type"&&c.tagName==="TEXTAREA"||L0.test(a)&&c2(e)?!1:a in c}const g0=c=>{const a=c.props["onUpdate:modelValue"]||!1;return B(a)?e=>B4(a,e):a};function Mf(c){c.target.composing=!0}function x0(c){const a=c.target;a.composing&&(a.composing=!1,a.dispatchEvent(new Event("input")))}const j5={created(c,{modifiers:{lazy:a,trim:e,number:s}},r){c._assign=g0(r);const i=s||r.props&&r.props.type==="number";C1(c,a?"change":"input",n=>{if(n.target.composing)return;let l=c.value;e&&(l=l.trim()),i&&(l=q4(l)),c._assign(l)}),e&&C1(c,"change",()=>{c.value=c.value.trim()}),a||(C1(c,"compositionstart",Mf),C1(c,"compositionend",x0),C1(c,"change",x0))},mounted(c,{value:a}){c.value=a==null?"":a},beforeUpdate(c,{value:a,modifiers:{lazy:e,trim:s,number:r}},i){if(c._assign=g0(i),c.composing||document.activeElement===c&&c.type!=="range"&&(e||s&&c.value.trim()===a||(r||c.type==="number")&&q4(c.value)===a))return;const n=a==null?"":a;c.value!==n&&(c.value=n)}},df=["ctrl","shift","alt","meta"],Cf={stop:c=>c.stopPropagation(),prevent:c=>c.preventDefault(),self:c=>c.target!==c.currentTarget,ctrl:c=>!c.ctrlKey,shift:c=>!c.shiftKey,alt:c=>!c.altKey,meta:c=>!c.metaKey,left:c=>"button"in c&&c.button!==0,middle:c=>"button"in c&&c.button!==1,right:c=>"button"in c&&c.button!==2,exact:(c,a)=>df.some(e=>c[`${e}Key`]&&!a.includes(e))},$5=(c,a)=>(e,...s)=>{for(let r=0;r<a.length;r++){const i=Cf[a[r]];if(i&&i(e,a))return}return c(e,...s)},Lf={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},gf=(c,a)=>e=>{if(!("key"in e))return;const s=p1(e.key);if(a.some(r=>r===s||Lf[r]===s))return c(e)},xf={beforeMount(c,{value:a},{transition:e}){c._vod=c.style.display==="none"?"":c.style.display,e&&a?e.beforeEnter(c):E1(c,a)},mounted(c,{value:a},{transition:e}){e&&a&&e.enter(c)},updated(c,{value:a,oldValue:e},{transition:s}){!a!=!e&&(s?a?(s.beforeEnter(c),E1(c,!0),s.enter(c)):s.leave(c,()=>{E1(c,!1)}):E1(c,a))},beforeUnmount(c,{value:a}){E1(c,a)}};function E1(c,a){c.style.display=a?c._vod:"none"}const bf=o2({patchProp:Vf},sf);let b0;function Sf(){return b0||(b0=Rl(bf))}const Nf=(...c)=>{const a=Sf().createApp(...c),{mount:e}=a;return a.mount=s=>{const r=wf(s);if(!r)return;const i=a._component;!R(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const n=e(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),n},a};function wf(c){return c2(c)?document.querySelector(c):c}const B1=(c,a)=>{const e=c.__vccOpts||c;for(const[s,r]of a)e[s]=r;return e},yf={props:{theme:{default:!0,type:Boolean}},emits:["toggleTheme"]},kf={class:"header"},Af=Z("h1",{class:"header__heading"},"Assignments App",-1);function Tf(c,a,e,s,r,i){const n=t1("font-awesome-icon");return u2(),k2("header",null,[Z("div",kf,[Af,Z("div",{class:"icon header__theme-toggle",onClick:a[0]||(a[0]=l=>c.$emit("toggleTheme"))},[e2(n,{icon:`fa-solid fa-${e.theme?"moon":"sun"}`},null,8,["icon"])])])])}const Pf=B1(yf,[["render",Tf]]);const Bf={emits:["addItem"],data(){return{newAssignmentTitle:""}},methods:{addItem(){this.newAssignmentTitle!==""&&(this.$emit("addItem",this.newAssignmentTitle),this.newAssignmentTitle="",this.$refs.titleInput.focus())}},mounted(){this.$refs.titleInput.focus()}},Ff=Z("h2",{class:"assignment-form__heading"},[Z("label",{for:"new-assignment-input"},"New Assignment")],-1),Rf=Z("button",{type:"submit",class:"assignment-form__submit-button"}," Add ",-1);function Df(c,a,e,s,r,i){return u2(),k2("form",{onSubmit:a[1]||(a[1]=$5((...n)=>i.addItem&&i.addItem(...n),["prevent"])),class:"assignment-form"},[Ff,P6(Z("input",{name:"new-assignment-input",id:"new-assignment-input",ref:"titleInput",class:"assignment-form__input",autocomplete:"off","onUpdate:modelValue":a[0]||(a[0]=n=>r.newAssignmentTitle=n)},null,512),[[j5,r.newAssignmentTitle,void 0,{trim:!0}]]),Rf],32)}const _f=B1(Bf,[["render",Df]]);var g4,Ef=new Uint8Array(16);function Uf(){if(!g4&&(g4=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto<"u"&&typeof msCrypto.getRandomValues=="function"&&msCrypto.getRandomValues.bind(msCrypto),!g4))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return g4(Ef)}const Of=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function If(c){return typeof c=="string"&&Of.test(c)}var s2=[];for(var D3=0;D3<256;++D3)s2.push((D3+256).toString(16).substr(1));function qf(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,e=(s2[c[a+0]]+s2[c[a+1]]+s2[c[a+2]]+s2[c[a+3]]+"-"+s2[c[a+4]]+s2[c[a+5]]+"-"+s2[c[a+6]]+s2[c[a+7]]+"-"+s2[c[a+8]]+s2[c[a+9]]+"-"+s2[c[a+10]]+s2[c[a+11]]+s2[c[a+12]]+s2[c[a+13]]+s2[c[a+14]]+s2[c[a+15]]).toLowerCase();if(!If(e))throw TypeError("Stringified UUID is invalid");return e}function K5(c,a,e){c=c||{};var s=c.random||(c.rng||Uf)();if(s[6]=s[6]&15|64,s[8]=s[8]&63|128,a){e=e||0;for(var r=0;r<16;++r)a[e+r]=s[r];return a}return qf(s)}const Wf={props:{totalAssignments:{required:!0,type:Number},activeAssignments:{required:!0,type:Number},completedAssignments:{required:!0,type:Number}},emits:["generateData","clearAll","checkAll","uncheckAll"],methods:{shuffleArray(c){for(let a=c.length-1;a>0;a--){const e=Math.floor(Math.random()*(a+1));[c[a],c[e]]=[c[e],c[a]]}},generateData(){const c=["Switch the theme by clicking the toggle in the top-right corner","Create a new assignment","Enter three new assignments using only a keyboard","Make sure empty assignments are not allowed by trying to add one","Clear out the assignment list","Check all the assignments","Uncheck all the assignments","Click on a different tab to filter the assignment list","Check/uncheck multiple assignments at once with Shift + mouse click","Check/uncheck multiple assignments at once with Shift + Spacebar","Change the order of assignments by clicking on and dragging the list items","Edit the title of an assignment","Delete an assignment","Mark an active assignment as completed by clicking its checkbox or title","Mark a completed assignment as active by clicking its checkbox or title","Clear all the assignments and generate them again to see how the list updates","Refresh the page to see how the data is preserved","Close and reopen the page to see how the state persists"];this.shuffleArray(c);const a=c.slice(0,10).reduce((e,s)=>{const r={};return r.title=s,r.completed=Boolean(Math.trunc(Math.random()*2)),r.id=K5(),e.concat(r)},[]);this.$emit("generateData",a)}}},Gf={key:0,class:"controls"},jf={key:1,class:"controls"},$f=["disabled"],Kf=["disabled"];function Yf(c,a,e,s,r,i){return e.totalAssignments?(u2(),k2("div",jf,[Z("button",{type:"button",class:"controls__clear",onClick:a[1]||(a[1]=n=>c.$emit("clearAll"))}," Clear All "),Z("button",{type:"button",class:"controls__check",disabled:!e.activeAssignments,onClick:a[2]||(a[2]=n=>c.$emit("checkAll"))}," Check All ",8,$f),Z("button",{type:"button",class:"controls__uncheck",disabled:!e.completedAssignments,onClick:a[3]||(a[3]=n=>c.$emit("uncheckAll"))}," Uncheck All ",8,Kf)])):(u2(),k2("div",Gf,[Z("button",{type:"button",class:"controls__generate",onClick:a[0]||(a[0]=(...n)=>i.generateData&&i.generateData(...n))}," Generate Data ")]))}const Xf=B1(Wf,[["render",Yf]]);const Qf={props:{tab:{required:!0,type:String},count:{required:!0,type:Number},currentTab:{required:!0,type:String}},emits:["update:currentTab"]},Jf=["disabled"];function Zf(c,a,e,s,r,i){return u2(),k2("button",{type:"button",class:r4(["tabs__tab",{"tabs__tab--selected":e.tab===e.currentTab}]),disabled:e.tab===e.currentTab,onClick:a[0]||(a[0]=n=>c.$emit("update:currentTab",e.tab))},I3(e.tab)+" ("+I3(e.count)+") ",11,Jf)}const ct=B1(Qf,[["render",Zf]]);const at={props:{title:{required:!0,type:String},completed:{default:!1,type:Boolean},id:{required:!0,type:String}},emits:["toggleCheckbox","editItem","removeItem"],data(){return{modifiedTitle:this.title,isEditing:!1}},methods:{editItem(){this.isEditing=!0,this.$nextTick(()=>this.$refs.editingInput.focus())},saveEdit(){this.modifiedTitle&&(this.$emit("editItem",this.modifiedTitle),this.isEditing=!1)},cancelEdit(){this.isEditing=!1},removeItem(){this.$emit("removeItem")}}},et=["id","checked"],st=["for"],rt={class:"assignment-item__control-buttons"};function it(c,a,e,s,r,i){const n=t1("font-awesome-icon");return u2(),k2("li",{class:r4(["assignment-item",{"assignment-item--completed":e.completed}]),draggable:"true"},[Z("input",{name:"assignment-status",type:"checkbox",class:"assignment-item__checkbox",id:e.id,checked:e.completed,onClick:a[0]||(a[0]=l=>c.$emit("toggleCheckbox",l)),onKeyup:a[1]||(a[1]=$5(l=>c.$emit("toggleCheckbox",l),["shift"]))},null,40,et),r.isEditing?P6((u2(),k2("input",{key:1,name:"assignment-title",class:"assignment-item__editing-input",ref:"editingInput",autocomplete:"off","onUpdate:modelValue":a[2]||(a[2]=l=>r.modifiedTitle=l),onKeydown:a[3]||(a[3]=gf((...l)=>i.saveEdit&&i.saveEdit(...l),["enter"]))},null,544)),[[j5,r.modifiedTitle,void 0,{trim:!0}]]):(u2(),k2("label",{key:0,for:e.id,class:"assignment-item__title"},I3(e.title),9,st)),Z("div",rt,[Z("div",{class:"icon",onClick:a[4]||(a[4]=l=>r.isEditing?i.saveEdit():i.editItem())},[e2(n,{icon:`fa-solid fa-${r.isEditing?"check":"pen"}`},null,8,["icon"])]),Z("div",{class:"icon",onClick:a[5]||(a[5]=l=>r.isEditing?i.cancelEdit():i.removeItem())},[e2(n,{icon:`fa-solid fa-${r.isEditing?"xmark":"trash"}`},null,8,["icon"])])])],2)}const nt=B1(at,[["render",it]]);const lt={components:{AssignmentHeader:Pf,AssignmentForm:_f,AssignmentControls:Xf,AssignmentItem:nt,AssignmentTabs:ct},data(){var c;return{assignments:JSON.parse(localStorage.getItem("assignments"))||[],previouslyToggled:"",currentTab:localStorage.getItem("current-tab")||"all",darkTheme:(c=JSON.parse(localStorage.getItem("theme")))!=null?c:!0}},computed:{filteredAssignments(){return{all:this.assignments,active:this.assignments.filter(c=>!c.completed),completed:this.assignments.filter(c=>c.completed)}}},watch:{assignments:{handler(){localStorage.setItem("assignments",JSON.stringify(this.assignments))},deep:!0},currentTab(){localStorage.setItem("current-tab",this.currentTab)},darkTheme(){localStorage.setItem("theme",JSON.stringify(this.darkTheme))}},methods:{addItem(c){const a={title:c,completed:!1,id:K5()};this.assignments.unshift(a)},updateCompletedStatus(c,a){if(a.type==="keyup"&&a.key!==" ")return;a.type==="keyup"&&a.key===" "&&a.preventDefault();const e=this.assignments.find(s=>s.id===c);if(e.completed=!e.completed,a.shiftKey&&this.previouslyToggled){const s=this.assignments.indexOf(e),r=this.assignments.findIndex(l=>l.id===this.previouslyToggled),[i,n]=[s,r].sort((l,f)=>l-f);for(let l=i;l<=n;l++)this.assignments[l].completed=e.completed}this.previouslyToggled=c},removeItem(c){const a=this.assignments.findIndex(e=>e.id===c);this.assignments.splice(a,1)},editItem(c,a){const e=this.assignments.find(s=>s.id===c);e.title=a},clearAll(){this.assignments=[],this.currentTab="all"},checkAll(){this.filteredAssignments.active.forEach(c=>c.completed=!0)},uncheckAll(){this.filteredAssignments.completed.forEach(c=>c.completed=!1)},toggleTheme(){this.darkTheme=!this.darkTheme,document.documentElement.classList.toggle("dark-theme")},onDragStart(c){c.dataTransfer.dropEffect="move",c.dataTransfer.effectAllowed="move",c.dataTransfer.setData("text/plain","e.target.textContent"),c.target.classList.add("assignment-item--dragging")},onDrag(c){c.preventDefault();const a=document.querySelector("ul"),e=Array.from(a.children),s=document.querySelector(".assignment-item--dragging"),r=e.reduce((i,n)=>{const l=n.getBoundingClientRect(),f=c.y-(l.top+l.height/2);return f<0&&f>i.offset?{offset:f,element:n}:i},{offset:Number.NEGATIVE_INFINITY}).element;r?r.before(s):a.append(s)},onDrop(c){c.preventDefault();const a=document.querySelector(".assignment-item--dragging");document.querySelectorAll("li").forEach((s,r)=>{var l;const i=s.children[0],n=s.children[1];this.filteredAssignments[this.currentTab][r].completed=i.checked,this.filteredAssignments[this.currentTab][r].id=i.id,this.filteredAssignments[this.currentTab][r].title=(l=n.value)!=null?l:n.textContent}),a.classList.remove("assignment-item--dragging")}},created(){this.darkTheme&&document.documentElement.classList.add("dark-theme")},mounted(){window.addEventListener("dragenter",c=>c.preventDefault()),window.addEventListener("dragover",this.onDrag),window.addEventListener("drop",this.onDrop),document.documentElement.classList.add("transition")}},ft={class:"tabs"};function tt(c,a,e,s,r,i){const n=t1("AssignmentHeader"),l=t1("AssignmentForm"),f=t1("AssignmentControls"),o=t1("AssignmentTabs"),H=t1("AssignmentItem");return u2(),k2(M2,null,[e2(n,{onToggleTheme:i.toggleTheme,theme:r.darkTheme},null,8,["onToggleTheme","theme"]),Z("main",null,[e2(l,{onAddItem:i.addItem},null,8,["onAddItem"]),e2(f,{"total-assignments":r.assignments.length,"active-assignments":i.filteredAssignments.active.length,"completed-assignments":i.filteredAssignments.completed.length,onClearAll:i.clearAll,onCheckAll:i.checkAll,onUncheckAll:i.uncheckAll,onGenerateData:a[0]||(a[0]=v=>r.assignments=v)},null,8,["total-assignments","active-assignments","completed-assignments","onClearAll","onCheckAll","onUncheckAll"]),P6(Z("div",ft,[(u2(!0),k2(M2,null,n0(i.filteredAssignments,(v,u)=>(u2(),z0(o,{key:u,tab:u,count:v.length,currentTab:r.currentTab,"onUpdate:currentTab":a[1]||(a[1]=g=>r.currentTab=g)},null,8,["tab","count","currentTab"]))),128))],512),[[xf,r.assignments.length]]),Z("ul",null,[(u2(!0),k2(M2,null,n0(i.filteredAssignments[r.currentTab],v=>(u2(),z0(H,I5(v,{key:v.id,onToggleCheckbox:u=>i.updateCompletedStatus(v.id,u),onEditItem:u=>i.editItem(v.id,u),onRemoveItem:u=>i.removeItem(v.id),onDragstart:i.onDragStart}),null,16,["onToggleCheckbox","onEditItem","onRemoveItem","onDragstart"]))),128))])])],64)}const ot=B1(lt,[["render",tt]]);function S0(c,a){var e=Object.keys(c);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(c);a&&(s=s.filter(function(r){return Object.getOwnPropertyDescriptor(c,r).enumerable})),e.push.apply(e,s)}return e}function b(c){for(var a=1;a<arguments.length;a++){var e=arguments[a]!=null?arguments[a]:{};a%2?S0(Object(e),!0).forEach(function(s){a2(c,s,e[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(e)):S0(Object(e)).forEach(function(s){Object.defineProperty(c,s,Object.getOwnPropertyDescriptor(e,s))})}return c}function j4(c){return j4=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},j4(c)}function mt(c,a){if(!(c instanceof a))throw new TypeError("Cannot call a class as a function")}function N0(c,a){for(var e=0;e<a.length;e++){var s=a[e];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(c,s.key,s)}}function Ht(c,a,e){return a&&N0(c.prototype,a),e&&N0(c,e),Object.defineProperty(c,"prototype",{writable:!1}),c}function a2(c,a,e){return a in c?Object.defineProperty(c,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):c[a]=e,c}function D6(c,a){return zt(c)||ht(c,a)||Y5(c,a)||pt()}function i4(c){return vt(c)||ut(c)||Y5(c)||Vt()}function vt(c){if(Array.isArray(c))return e6(c)}function zt(c){if(Array.isArray(c))return c}function ut(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function ht(c,a){var e=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(e!=null){var s=[],r=!0,i=!1,n,l;try{for(e=e.call(c);!(r=(n=e.next()).done)&&(s.push(n.value),!(a&&s.length===a));r=!0);}catch(f){i=!0,l=f}finally{try{!r&&e.return!=null&&e.return()}finally{if(i)throw l}}return s}}function Y5(c,a){if(!!c){if(typeof c=="string")return e6(c,a);var e=Object.prototype.toString.call(c).slice(8,-1);if(e==="Object"&&c.constructor&&(e=c.constructor.name),e==="Map"||e==="Set")return Array.from(c);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return e6(c,a)}}function e6(c,a){(a==null||a>c.length)&&(a=c.length);for(var e=0,s=new Array(a);e<a;e++)s[e]=c[e];return s}function Vt(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function pt(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var w0=function(){},_6={},X5={},Q5=null,J5={mark:w0,measure:w0};try{typeof window<"u"&&(_6=window),typeof document<"u"&&(X5=document),typeof MutationObserver<"u"&&(Q5=MutationObserver),typeof performance<"u"&&(J5=performance)}catch{}var Mt=_6.navigator||{},y0=Mt.userAgent,k0=y0===void 0?"":y0,c1=_6,K=X5,A0=Q5,x4=J5;c1.document;var $2=!!K.documentElement&&!!K.head&&typeof K.addEventListener=="function"&&typeof K.createElement=="function",Z5=~k0.indexOf("MSIE")||~k0.indexOf("Trident/"),b4,S4,N4,w4,y4,q2="___FONT_AWESOME___",s6=16,c7="fa",a7="svg-inline--fa",h1="data-fa-i2svg",r6="data-fa-pseudo-element",dt="data-fa-pseudo-element-pending",E6="data-prefix",U6="data-icon",T0="fontawesome-i2svg",Ct="async",Lt=["HTML","HEAD","STYLE","SCRIPT"],e7=function(){try{return!0}catch{return!1}}(),$="classic",Q="sharp",O6=[$,Q];function n4(c){return new Proxy(c,{get:function(e,s){return s in e?e[s]:e[$]}})}var Z1=n4((b4={},a2(b4,$,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),a2(b4,Q,{fa:"solid",fass:"solid","fa-solid":"solid"}),b4)),c4=n4((S4={},a2(S4,$,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),a2(S4,Q,{solid:"fass"}),S4)),a4=n4((N4={},a2(N4,$,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),a2(N4,Q,{fass:"fa-solid"}),N4)),gt=n4((w4={},a2(w4,$,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),a2(w4,Q,{"fa-solid":"fass"}),w4)),xt=/fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,s7="fa-layers-text",bt=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,St=n4((y4={},a2(y4,$,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),a2(y4,Q,{900:"fass"}),y4)),r7=[1,2,3,4,5,6,7,8,9,10],Nt=r7.concat([11,12,13,14,15,16,17,18,19,20]),wt=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],H1={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},e4=new Set;Object.keys(c4[$]).map(e4.add.bind(e4));Object.keys(c4[Q]).map(e4.add.bind(e4));var yt=[].concat(O6,i4(e4),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",H1.GROUP,H1.SWAP_OPACITY,H1.PRIMARY,H1.SECONDARY]).concat(r7.map(function(c){return"".concat(c,"x")})).concat(Nt.map(function(c){return"w-".concat(c)})),W1=c1.FontAwesomeConfig||{};function kt(c){var a=K.querySelector("script["+c+"]");if(a)return a.getAttribute(c)}function At(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}if(K&&typeof K.querySelector=="function"){var Tt=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Tt.forEach(function(c){var a=D6(c,2),e=a[0],s=a[1],r=At(kt(e));r!=null&&(W1[s]=r)})}var i7={styleDefault:"solid",familyDefault:"classic",cssPrefix:c7,replacementClass:a7,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};W1.familyPrefix&&(W1.cssPrefix=W1.familyPrefix);var A1=b(b({},i7),W1);A1.autoReplaceSvg||(A1.observeMutations=!1);var y={};Object.keys(i7).forEach(function(c){Object.defineProperty(y,c,{enumerable:!0,set:function(e){A1[c]=e,G1.forEach(function(s){return s(y)})},get:function(){return A1[c]}})});Object.defineProperty(y,"familyPrefix",{enumerable:!0,set:function(a){A1.cssPrefix=a,G1.forEach(function(e){return e(y)})},get:function(){return A1.cssPrefix}});c1.FontAwesomeConfig=y;var G1=[];function Pt(c){return G1.push(c),function(){G1.splice(G1.indexOf(c),1)}}var Y2=s6,D2={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Bt(c){if(!(!c||!$2)){var a=K.createElement("style");a.setAttribute("type","text/css"),a.innerHTML=c;for(var e=K.head.childNodes,s=null,r=e.length-1;r>-1;r--){var i=e[r],n=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(n)>-1&&(s=i)}return K.head.insertBefore(a,s),c}}var Ft="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function s4(){for(var c=12,a="";c-- >0;)a+=Ft[Math.random()*62|0];return a}function F1(c){for(var a=[],e=(c||[]).length>>>0;e--;)a[e]=c[e];return a}function I6(c){return c.classList?F1(c.classList):(c.getAttribute("class")||"").split(" ").filter(function(a){return a})}function n7(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Rt(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,'="').concat(n7(c[e]),'" ')},"").trim()}function f3(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,": ").concat(c[e].trim(),";")},"")}function q6(c){return c.size!==D2.size||c.x!==D2.x||c.y!==D2.y||c.rotate!==D2.rotate||c.flipX||c.flipY}function Dt(c){var a=c.transform,e=c.containerWidth,s=c.iconWidth,r={transform:"translate(".concat(e/2," 256)")},i="translate(".concat(a.x*32,", ").concat(a.y*32,") "),n="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),l="rotate(".concat(a.rotate," 0 0)"),f={transform:"".concat(i," ").concat(n," ").concat(l)},o={transform:"translate(".concat(s/2*-1," -256)")};return{outer:r,inner:f,path:o}}function _t(c){var a=c.transform,e=c.width,s=e===void 0?s6:e,r=c.height,i=r===void 0?s6:r,n=c.startCentered,l=n===void 0?!1:n,f="";return l&&Z5?f+="translate(".concat(a.x/Y2-s/2,"em, ").concat(a.y/Y2-i/2,"em) "):l?f+="translate(calc(-50% + ".concat(a.x/Y2,"em), calc(-50% + ").concat(a.y/Y2,"em)) "):f+="translate(".concat(a.x/Y2,"em, ").concat(a.y/Y2,"em) "),f+="scale(".concat(a.size/Y2*(a.flipX?-1:1),", ").concat(a.size/Y2*(a.flipY?-1:1),") "),f+="rotate(".concat(a.rotate,"deg) "),f}var Et=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function l7(){var c=c7,a=a7,e=y.cssPrefix,s=y.replacementClass,r=Et;if(e!==c||s!==a){var i=new RegExp("\\.".concat(c,"\\-"),"g"),n=new RegExp("\\--".concat(c,"\\-"),"g"),l=new RegExp("\\.".concat(a),"g");r=r.replace(i,".".concat(e,"-")).replace(n,"--".concat(e,"-")).replace(l,".".concat(s))}return r}var P0=!1;function _3(){y.autoAddCss&&!P0&&(Bt(l7()),P0=!0)}var Ut={mixout:function(){return{dom:{css:l7,insertCss:_3}}},hooks:function(){return{beforeDOMElementCreation:function(){_3()},beforeI2svg:function(){_3()}}}},W2=c1||{};W2[q2]||(W2[q2]={});W2[q2].styles||(W2[q2].styles={});W2[q2].hooks||(W2[q2].hooks={});W2[q2].shims||(W2[q2].shims=[]);var N2=W2[q2],f7=[],Ot=function c(){K.removeEventListener("DOMContentLoaded",c),$4=1,f7.map(function(a){return a()})},$4=!1;$2&&($4=(K.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(K.readyState),$4||K.addEventListener("DOMContentLoaded",Ot));function It(c){!$2||($4?setTimeout(c,0):f7.push(c))}function l4(c){var a=c.tag,e=c.attributes,s=e===void 0?{}:e,r=c.children,i=r===void 0?[]:r;return typeof c=="string"?n7(c):"<".concat(a," ").concat(Rt(s),">").concat(i.map(l4).join(""),"</").concat(a,">")}function B0(c,a,e){if(c&&c[a]&&c[a][e])return{prefix:a,iconName:e,icon:c[a][e]}}var qt=function(a,e){return function(s,r,i,n){return a.call(e,s,r,i,n)}},E3=function(a,e,s,r){var i=Object.keys(a),n=i.length,l=r!==void 0?qt(e,r):e,f,o,H;for(s===void 0?(f=1,H=a[i[0]]):(f=0,H=s);f<n;f++)o=i[f],H=l(H,a[o],o,a);return H};function Wt(c){for(var a=[],e=0,s=c.length;e<s;){var r=c.charCodeAt(e++);if(r>=55296&&r<=56319&&e<s){var i=c.charCodeAt(e++);(i&64512)==56320?a.push(((r&1023)<<10)+(i&1023)+65536):(a.push(r),e--)}else a.push(r)}return a}function i6(c){var a=Wt(c);return a.length===1?a[0].toString(16):null}function Gt(c,a){var e=c.length,s=c.charCodeAt(a),r;return s>=55296&&s<=56319&&e>a+1&&(r=c.charCodeAt(a+1),r>=56320&&r<=57343)?(s-55296)*1024+r-56320+65536:s}function F0(c){return Object.keys(c).reduce(function(a,e){var s=c[e],r=!!s.icon;return r?a[s.iconName]=s.icon:a[e]=s,a},{})}function n6(c,a){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s=e.skipHooks,r=s===void 0?!1:s,i=F0(a);typeof N2.hooks.addPack=="function"&&!r?N2.hooks.addPack(c,F0(a)):N2.styles[c]=b(b({},N2.styles[c]||{}),i),c==="fas"&&n6("fa",a)}var k4,A4,T4,L1=N2.styles,jt=N2.shims,$t=(k4={},a2(k4,$,Object.values(a4[$])),a2(k4,Q,Object.values(a4[Q])),k4),W6=null,t7={},o7={},m7={},H7={},v7={},Kt=(A4={},a2(A4,$,Object.keys(Z1[$])),a2(A4,Q,Object.keys(Z1[Q])),A4);function Yt(c){return~yt.indexOf(c)}function Xt(c,a){var e=a.split("-"),s=e[0],r=e.slice(1).join("-");return s===c&&r!==""&&!Yt(r)?r:null}var z7=function(){var a=function(i){return E3(L1,function(n,l,f){return n[f]=E3(l,i,{}),n},{})};t7=a(function(r,i,n){if(i[3]&&(r[i[3]]=n),i[2]){var l=i[2].filter(function(f){return typeof f=="number"});l.forEach(function(f){r[f.toString(16)]=n})}return r}),o7=a(function(r,i,n){if(r[n]=n,i[2]){var l=i[2].filter(function(f){return typeof f=="string"});l.forEach(function(f){r[f]=n})}return r}),v7=a(function(r,i,n){var l=i[2];return r[n]=n,l.forEach(function(f){r[f]=n}),r});var e="far"in L1||y.autoFetchSvg,s=E3(jt,function(r,i){var n=i[0],l=i[1],f=i[2];return l==="far"&&!e&&(l="fas"),typeof n=="string"&&(r.names[n]={prefix:l,iconName:f}),typeof n=="number"&&(r.unicodes[n.toString(16)]={prefix:l,iconName:f}),r},{names:{},unicodes:{}});m7=s.names,H7=s.unicodes,W6=t3(y.styleDefault,{family:y.familyDefault})};Pt(function(c){W6=t3(c.styleDefault,{family:y.familyDefault})});z7();function G6(c,a){return(t7[c]||{})[a]}function Qt(c,a){return(o7[c]||{})[a]}function v1(c,a){return(v7[c]||{})[a]}function u7(c){return m7[c]||{prefix:null,iconName:null}}function Jt(c){var a=H7[c],e=G6("fas",c);return a||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function a1(){return W6}var j6=function(){return{prefix:null,iconName:null,rest:[]}};function t3(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.family,s=e===void 0?$:e,r=Z1[s][c],i=c4[s][c]||c4[s][r],n=c in N2.styles?c:null;return i||n||null}var R0=(T4={},a2(T4,$,Object.keys(a4[$])),a2(T4,Q,Object.keys(a4[Q])),T4);function o3(c){var a,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=e.skipLookups,r=s===void 0?!1:s,i=(a={},a2(a,$,"".concat(y.cssPrefix,"-").concat($)),a2(a,Q,"".concat(y.cssPrefix,"-").concat(Q)),a),n=null,l=$;(c.includes(i[$])||c.some(function(o){return R0[$].includes(o)}))&&(l=$),(c.includes(i[Q])||c.some(function(o){return R0[Q].includes(o)}))&&(l=Q);var f=c.reduce(function(o,H){var v=Xt(y.cssPrefix,H);if(L1[H]?(H=$t[l].includes(H)?gt[l][H]:H,n=H,o.prefix=H):Kt[l].indexOf(H)>-1?(n=H,o.prefix=t3(H,{family:l})):v?o.iconName=v:H!==y.replacementClass&&H!==i[$]&&H!==i[Q]&&o.rest.push(H),!r&&o.prefix&&o.iconName){var u=n==="fa"?u7(o.iconName):{},g=v1(o.prefix,o.iconName);u.prefix&&(n=null),o.iconName=u.iconName||g||o.iconName,o.prefix=u.prefix||o.prefix,o.prefix==="far"&&!L1.far&&L1.fas&&!y.autoFetchSvg&&(o.prefix="fas")}return o},j6());return(c.includes("fa-brands")||c.includes("fab"))&&(f.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(f.prefix="fad"),!f.prefix&&l===Q&&(L1.fass||y.autoFetchSvg)&&(f.prefix="fass",f.iconName=v1(f.prefix,f.iconName)||f.iconName),(f.prefix==="fa"||n==="fa")&&(f.prefix=a1()||"fas"),f}var Zt=function(){function c(){mt(this,c),this.definitions={}}return Ht(c,[{key:"add",value:function(){for(var e=this,s=arguments.length,r=new Array(s),i=0;i<s;i++)r[i]=arguments[i];var n=r.reduce(this._pullDefinitions,{});Object.keys(n).forEach(function(l){e.definitions[l]=b(b({},e.definitions[l]||{}),n[l]),n6(l,n[l]);var f=a4[$][l];f&&n6(f,n[l]),z7()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,s){var r=s.prefix&&s.iconName&&s.icon?{0:s}:s;return Object.keys(r).map(function(i){var n=r[i],l=n.prefix,f=n.iconName,o=n.icon,H=o[2];e[l]||(e[l]={}),H.length>0&&H.forEach(function(v){typeof v=="string"&&(e[l][v]=o)}),e[l][f]=o}),e}}]),c}(),D0=[],g1={},w1={},co=Object.keys(w1);function ao(c,a){var e=a.mixoutsTo;return D0=c,g1={},Object.keys(w1).forEach(function(s){co.indexOf(s)===-1&&delete w1[s]}),D0.forEach(function(s){var r=s.mixout?s.mixout():{};if(Object.keys(r).forEach(function(n){typeof r[n]=="function"&&(e[n]=r[n]),j4(r[n])==="object"&&Object.keys(r[n]).forEach(function(l){e[n]||(e[n]={}),e[n][l]=r[n][l]})}),s.hooks){var i=s.hooks();Object.keys(i).forEach(function(n){g1[n]||(g1[n]=[]),g1[n].push(i[n])})}s.provides&&s.provides(w1)}),e}function l6(c,a){for(var e=arguments.length,s=new Array(e>2?e-2:0),r=2;r<e;r++)s[r-2]=arguments[r];var i=g1[c]||[];return i.forEach(function(n){a=n.apply(null,[a].concat(s))}),a}function V1(c){for(var a=arguments.length,e=new Array(a>1?a-1:0),s=1;s<a;s++)e[s-1]=arguments[s];var r=g1[c]||[];r.forEach(function(i){i.apply(null,e)})}function G2(){var c=arguments[0],a=Array.prototype.slice.call(arguments,1);return w1[c]?w1[c].apply(null,a):void 0}function f6(c){c.prefix==="fa"&&(c.prefix="fas");var a=c.iconName,e=c.prefix||a1();if(!!a)return a=v1(e,a)||a,B0(h7.definitions,e,a)||B0(N2.styles,e,a)}var h7=new Zt,eo=function(){y.autoReplaceSvg=!1,y.observeMutations=!1,V1("noAuto")},so={i2svg:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return $2?(V1("beforeI2svg",a),G2("pseudoElements2svg",a),G2("i2svg",a)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot;y.autoReplaceSvg===!1&&(y.autoReplaceSvg=!0),y.observeMutations=!0,It(function(){io({autoReplaceSvgRoot:e}),V1("watch",a)})}},ro={icon:function(a){if(a===null)return null;if(j4(a)==="object"&&a.prefix&&a.iconName)return{prefix:a.prefix,iconName:v1(a.prefix,a.iconName)||a.iconName};if(Array.isArray(a)&&a.length===2){var e=a[1].indexOf("fa-")===0?a[1].slice(3):a[1],s=t3(a[0]);return{prefix:s,iconName:v1(s,e)||e}}if(typeof a=="string"&&(a.indexOf("".concat(y.cssPrefix,"-"))>-1||a.match(xt))){var r=o3(a.split(" "),{skipLookups:!0});return{prefix:r.prefix||a1(),iconName:v1(r.prefix,r.iconName)||r.iconName}}if(typeof a=="string"){var i=a1();return{prefix:i,iconName:v1(i,a)||a}}}},V2={noAuto:eo,config:y,dom:so,parse:ro,library:h7,findIconDefinition:f6,toHtml:l4},io=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot,s=e===void 0?K:e;(Object.keys(N2.styles).length>0||y.autoFetchSvg)&&$2&&y.autoReplaceSvg&&V2.dom.i2svg({node:s})};function m3(c,a){return Object.defineProperty(c,"abstract",{get:a}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(function(s){return l4(s)})}}),Object.defineProperty(c,"node",{get:function(){if(!!$2){var s=K.createElement("div");return s.innerHTML=c.html,s.children}}}),c}function no(c){var a=c.children,e=c.main,s=c.mask,r=c.attributes,i=c.styles,n=c.transform;if(q6(n)&&e.found&&!s.found){var l=e.width,f=e.height,o={x:l/f/2,y:.5};r.style=f3(b(b({},i),{},{"transform-origin":"".concat(o.x+n.x/16,"em ").concat(o.y+n.y/16,"em")}))}return[{tag:"svg",attributes:r,children:a}]}function lo(c){var a=c.prefix,e=c.iconName,s=c.children,r=c.attributes,i=c.symbol,n=i===!0?"".concat(a,"-").concat(y.cssPrefix,"-").concat(e):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:b(b({},r),{},{id:n}),children:s}]}]}function $6(c){var a=c.icons,e=a.main,s=a.mask,r=c.prefix,i=c.iconName,n=c.transform,l=c.symbol,f=c.title,o=c.maskId,H=c.titleId,v=c.extra,u=c.watchable,g=u===void 0?!1:u,F=s.found?s:e,T=F.width,U=F.height,C=r==="fak",N=[y.replacementClass,i?"".concat(y.cssPrefix,"-").concat(i):""].filter(function(p2){return v.classes.indexOf(p2)===-1}).filter(function(p2){return p2!==""||!!p2}).concat(v.classes).join(" "),S={children:[],attributes:b(b({},v.attributes),{},{"data-prefix":r,"data-icon":i,class:N,role:v.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(T," ").concat(U)})},D=C&&!~v.classes.indexOf("fa-fw")?{width:"".concat(T/U*16*.0625,"em")}:{};g&&(S.attributes[h1]=""),f&&(S.children.push({tag:"title",attributes:{id:S.attributes["aria-labelledby"]||"title-".concat(H||s4())},children:[f]}),delete S.attributes.title);var O=b(b({},S),{},{prefix:r,iconName:i,main:e,mask:s,maskId:o,transform:n,symbol:l,styles:b(b({},D),v.styles)}),m2=s.found&&e.found?G2("generateAbstractMask",O)||{children:[],attributes:{}}:G2("generateAbstractIcon",O)||{children:[],attributes:{}},i2=m2.children,L2=m2.attributes;return O.children=i2,O.attributes=L2,l?lo(O):no(O)}function _0(c){var a=c.content,e=c.width,s=c.height,r=c.transform,i=c.title,n=c.extra,l=c.watchable,f=l===void 0?!1:l,o=b(b(b({},n.attributes),i?{title:i}:{}),{},{class:n.classes.join(" ")});f&&(o[h1]="");var H=b({},n.styles);q6(r)&&(H.transform=_t({transform:r,startCentered:!0,width:e,height:s}),H["-webkit-transform"]=H.transform);var v=f3(H);v.length>0&&(o.style=v);var u=[];return u.push({tag:"span",attributes:o,children:[a]}),i&&u.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),u}function fo(c){var a=c.content,e=c.title,s=c.extra,r=b(b(b({},s.attributes),e?{title:e}:{}),{},{class:s.classes.join(" ")}),i=f3(s.styles);i.length>0&&(r.style=i);var n=[];return n.push({tag:"span",attributes:r,children:[a]}),e&&n.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),n}var U3=N2.styles;function t6(c){var a=c[0],e=c[1],s=c.slice(4),r=D6(s,1),i=r[0],n=null;return Array.isArray(i)?n={tag:"g",attributes:{class:"".concat(y.cssPrefix,"-").concat(H1.GROUP)},children:[{tag:"path",attributes:{class:"".concat(y.cssPrefix,"-").concat(H1.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(y.cssPrefix,"-").concat(H1.PRIMARY),fill:"currentColor",d:i[1]}}]}:n={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:a,height:e,icon:n}}var to={found:!1,width:512,height:512};function oo(c,a){!e7&&!y.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(a,'" is missing.'))}function o6(c,a){var e=a;return a==="fa"&&y.styleDefault!==null&&(a=a1()),new Promise(function(s,r){if(G2("missingIconAbstract"),e==="fa"){var i=u7(c)||{};c=i.iconName||c,a=i.prefix||a}if(c&&a&&U3[a]&&U3[a][c]){var n=U3[a][c];return s(t6(n))}oo(c,a),s(b(b({},to),{},{icon:y.showMissingIcons&&c?G2("missingIconAbstract")||{}:{}}))})}var E0=function(){},m6=y.measurePerformance&&x4&&x4.mark&&x4.measure?x4:{mark:E0,measure:E0},O1='FA "6.2.1"',mo=function(a){return m6.mark("".concat(O1," ").concat(a," begins")),function(){return V7(a)}},V7=function(a){m6.mark("".concat(O1," ").concat(a," ends")),m6.measure("".concat(O1," ").concat(a),"".concat(O1," ").concat(a," begins"),"".concat(O1," ").concat(a," ends"))},K6={begin:mo,end:V7},E4=function(){};function U0(c){var a=c.getAttribute?c.getAttribute(h1):null;return typeof a=="string"}function Ho(c){var a=c.getAttribute?c.getAttribute(E6):null,e=c.getAttribute?c.getAttribute(U6):null;return a&&e}function vo(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(y.replacementClass)}function zo(){if(y.autoReplaceSvg===!0)return U4.replace;var c=U4[y.autoReplaceSvg];return c||U4.replace}function uo(c){return K.createElementNS("http://www.w3.org/2000/svg",c)}function ho(c){return K.createElement(c)}function p7(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.ceFn,s=e===void 0?c.tag==="svg"?uo:ho:e;if(typeof c=="string")return K.createTextNode(c);var r=s(c.tag);Object.keys(c.attributes||[]).forEach(function(n){r.setAttribute(n,c.attributes[n])});var i=c.children||[];return i.forEach(function(n){r.appendChild(p7(n,{ceFn:s}))}),r}function Vo(c){var a=" ".concat(c.outerHTML," ");return a="".concat(a,"Font Awesome fontawesome.com "),a}var U4={replace:function(a){var e=a[0];if(e.parentNode)if(a[1].forEach(function(r){e.parentNode.insertBefore(p7(r),e)}),e.getAttribute(h1)===null&&y.keepOriginalSource){var s=K.createComment(Vo(e));e.parentNode.replaceChild(s,e)}else e.remove()},nest:function(a){var e=a[0],s=a[1];if(~I6(e).indexOf(y.replacementClass))return U4.replace(a);var r=new RegExp("".concat(y.cssPrefix,"-.*"));if(delete s[0].attributes.id,s[0].attributes.class){var i=s[0].attributes.class.split(" ").reduce(function(l,f){return f===y.replacementClass||f.match(r)?l.toSvg.push(f):l.toNode.push(f),l},{toNode:[],toSvg:[]});s[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}var n=s.map(function(l){return l4(l)}).join(`
`);e.setAttribute(h1,""),e.innerHTML=n}};function O0(c){c()}function M7(c,a){var e=typeof a=="function"?a:E4;if(c.length===0)e();else{var s=O0;y.mutateApproach===Ct&&(s=c1.requestAnimationFrame||O0),s(function(){var r=zo(),i=K6.begin("mutate");c.map(r),i(),e()})}}var Y6=!1;function d7(){Y6=!0}function H6(){Y6=!1}var K4=null;function I0(c){if(!!A0&&!!y.observeMutations){var a=c.treeCallback,e=a===void 0?E4:a,s=c.nodeCallback,r=s===void 0?E4:s,i=c.pseudoElementsCallback,n=i===void 0?E4:i,l=c.observeMutationsRoot,f=l===void 0?K:l;K4=new A0(function(o){if(!Y6){var H=a1();F1(o).forEach(function(v){if(v.type==="childList"&&v.addedNodes.length>0&&!U0(v.addedNodes[0])&&(y.searchPseudoElements&&n(v.target),e(v.target)),v.type==="attributes"&&v.target.parentNode&&y.searchPseudoElements&&n(v.target.parentNode),v.type==="attributes"&&U0(v.target)&&~wt.indexOf(v.attributeName))if(v.attributeName==="class"&&Ho(v.target)){var u=o3(I6(v.target)),g=u.prefix,F=u.iconName;v.target.setAttribute(E6,g||H),F&&v.target.setAttribute(U6,F)}else vo(v.target)&&r(v.target)})}}),$2&&K4.observe(f,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function po(){!K4||K4.disconnect()}function Mo(c){var a=c.getAttribute("style"),e=[];return a&&(e=a.split(";").reduce(function(s,r){var i=r.split(":"),n=i[0],l=i.slice(1);return n&&l.length>0&&(s[n]=l.join(":").trim()),s},{})),e}function Co(c){var a=c.getAttribute("data-prefix"),e=c.getAttribute("data-icon"),s=c.innerText!==void 0?c.innerText.trim():"",r=o3(I6(c));return r.prefix||(r.prefix=a1()),a&&e&&(r.prefix=a,r.iconName=e),r.iconName&&r.prefix||(r.prefix&&s.length>0&&(r.iconName=Qt(r.prefix,c.innerText)||G6(r.prefix,i6(c.innerText))),!r.iconName&&y.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=c.firstChild.data)),r}function Lo(c){var a=F1(c.attributes).reduce(function(r,i){return r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r},{}),e=c.getAttribute("title"),s=c.getAttribute("data-fa-title-id");return y.autoA11y&&(e?a["aria-labelledby"]="".concat(y.replacementClass,"-title-").concat(s||s4()):(a["aria-hidden"]="true",a.focusable="false")),a}function go(){return{iconName:null,title:null,titleId:null,prefix:null,transform:D2,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function q0(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},e=Co(c),s=e.iconName,r=e.prefix,i=e.rest,n=Lo(c),l=l6("parseNodeAttributes",{},c),f=a.styleParser?Mo(c):[];return b({iconName:s,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:r,transform:D2,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:f,attributes:n}},l)}var xo=N2.styles;function C7(c){var a=y.autoReplaceSvg==="nest"?q0(c,{styleParser:!1}):q0(c);return~a.extra.classes.indexOf(s7)?G2("generateLayersText",c,a):G2("generateSvgReplacementMutation",c,a)}var e1=new Set;O6.map(function(c){e1.add("fa-".concat(c))});Object.keys(Z1[$]).map(e1.add.bind(e1));Object.keys(Z1[Q]).map(e1.add.bind(e1));e1=i4(e1);function W0(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!$2)return Promise.resolve();var e=K.documentElement.classList,s=function(v){return e.add("".concat(T0,"-").concat(v))},r=function(v){return e.remove("".concat(T0,"-").concat(v))},i=y.autoFetchSvg?e1:O6.map(function(H){return"fa-".concat(H)}).concat(Object.keys(xo));i.includes("fa")||i.push("fa");var n=[".".concat(s7,":not([").concat(h1,"])")].concat(i.map(function(H){return".".concat(H,":not([").concat(h1,"])")})).join(", ");if(n.length===0)return Promise.resolve();var l=[];try{l=F1(c.querySelectorAll(n))}catch{}if(l.length>0)s("pending"),r("complete");else return Promise.resolve();var f=K6.begin("onTree"),o=l.reduce(function(H,v){try{var u=C7(v);u&&H.push(u)}catch(g){e7||g.name==="MissingIcon"&&console.error(g)}return H},[]);return new Promise(function(H,v){Promise.all(o).then(function(u){M7(u,function(){s("active"),s("complete"),r("pending"),typeof a=="function"&&a(),f(),H()})}).catch(function(u){f(),v(u)})})}function bo(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;C7(c).then(function(e){e&&M7([e],a)})}function So(c){return function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=(a||{}).icon?a:f6(a||{}),r=e.mask;return r&&(r=(r||{}).icon?r:f6(r||{})),c(s,b(b({},e),{},{mask:r}))}}var No=function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=e.transform,r=s===void 0?D2:s,i=e.symbol,n=i===void 0?!1:i,l=e.mask,f=l===void 0?null:l,o=e.maskId,H=o===void 0?null:o,v=e.title,u=v===void 0?null:v,g=e.titleId,F=g===void 0?null:g,T=e.classes,U=T===void 0?[]:T,C=e.attributes,N=C===void 0?{}:C,S=e.styles,D=S===void 0?{}:S;if(!!a){var O=a.prefix,m2=a.iconName,i2=a.icon;return m3(b({type:"icon"},a),function(){return V1("beforeDOMElementCreation",{iconDefinition:a,params:e}),y.autoA11y&&(u?N["aria-labelledby"]="".concat(y.replacementClass,"-title-").concat(F||s4()):(N["aria-hidden"]="true",N.focusable="false")),$6({icons:{main:t6(i2),mask:f?t6(f.icon):{found:!1,width:null,height:null,icon:{}}},prefix:O,iconName:m2,transform:b(b({},D2),r),symbol:n,title:u,maskId:H,titleId:F,extra:{attributes:N,styles:D,classes:U}})})}},wo={mixout:function(){return{icon:So(No)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=W0,e.nodeCallback=bo,e}}},provides:function(a){a.i2svg=function(e){var s=e.node,r=s===void 0?K:s,i=e.callback,n=i===void 0?function(){}:i;return W0(r,n)},a.generateSvgReplacementMutation=function(e,s){var r=s.iconName,i=s.title,n=s.titleId,l=s.prefix,f=s.transform,o=s.symbol,H=s.mask,v=s.maskId,u=s.extra;return new Promise(function(g,F){Promise.all([o6(r,l),H.iconName?o6(H.iconName,H.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(T){var U=D6(T,2),C=U[0],N=U[1];g([e,$6({icons:{main:C,mask:N},prefix:l,iconName:r,transform:f,symbol:o,maskId:v,title:i,titleId:n,extra:u,watchable:!0})])}).catch(F)})},a.generateAbstractIcon=function(e){var s=e.children,r=e.attributes,i=e.main,n=e.transform,l=e.styles,f=f3(l);f.length>0&&(r.style=f);var o;return q6(n)&&(o=G2("generateAbstractTransformGrouping",{main:i,transform:n,containerWidth:i.width,iconWidth:i.width})),s.push(o||i.icon),{children:s,attributes:r}}}},yo={mixout:function(){return{layer:function(e){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=s.classes,i=r===void 0?[]:r;return m3({type:"layer"},function(){V1("beforeDOMElementCreation",{assembler:e,params:s});var n=[];return e(function(l){Array.isArray(l)?l.map(function(f){n=n.concat(f.abstract)}):n=n.concat(l.abstract)}),[{tag:"span",attributes:{class:["".concat(y.cssPrefix,"-layers")].concat(i4(i)).join(" ")},children:n}]})}}}},ko={mixout:function(){return{counter:function(e){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=s.title,i=r===void 0?null:r,n=s.classes,l=n===void 0?[]:n,f=s.attributes,o=f===void 0?{}:f,H=s.styles,v=H===void 0?{}:H;return m3({type:"counter",content:e},function(){return V1("beforeDOMElementCreation",{content:e,params:s}),fo({content:e.toString(),title:i,extra:{attributes:o,styles:v,classes:["".concat(y.cssPrefix,"-layers-counter")].concat(i4(l))}})})}}}},Ao={mixout:function(){return{text:function(e){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=s.transform,i=r===void 0?D2:r,n=s.title,l=n===void 0?null:n,f=s.classes,o=f===void 0?[]:f,H=s.attributes,v=H===void 0?{}:H,u=s.styles,g=u===void 0?{}:u;return m3({type:"text",content:e},function(){return V1("beforeDOMElementCreation",{content:e,params:s}),_0({content:e,transform:b(b({},D2),i),title:l,extra:{attributes:v,styles:g,classes:["".concat(y.cssPrefix,"-layers-text")].concat(i4(o))}})})}}},provides:function(a){a.generateLayersText=function(e,s){var r=s.title,i=s.transform,n=s.extra,l=null,f=null;if(Z5){var o=parseInt(getComputedStyle(e).fontSize,10),H=e.getBoundingClientRect();l=H.width/o,f=H.height/o}return y.autoA11y&&!r&&(n.attributes["aria-hidden"]="true"),Promise.resolve([e,_0({content:e.innerHTML,width:l,height:f,transform:i,title:r,extra:n,watchable:!0})])}}},To=new RegExp('"',"ug"),G0=[1105920,1112319];function Po(c){var a=c.replace(To,""),e=Gt(a,0),s=e>=G0[0]&&e<=G0[1],r=a.length===2?a[0]===a[1]:!1;return{value:i6(r?a[0]:a),isSecondary:s||r}}function j0(c,a){var e="".concat(dt).concat(a.replace(":","-"));return new Promise(function(s,r){if(c.getAttribute(e)!==null)return s();var i=F1(c.children),n=i.filter(function(i2){return i2.getAttribute(r6)===a})[0],l=c1.getComputedStyle(c,a),f=l.getPropertyValue("font-family").match(bt),o=l.getPropertyValue("font-weight"),H=l.getPropertyValue("content");if(n&&!f)return c.removeChild(n),s();if(f&&H!=="none"&&H!==""){var v=l.getPropertyValue("content"),u=~["Sharp"].indexOf(f[2])?Q:$,g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(f[2])?c4[u][f[2].toLowerCase()]:St[u][o],F=Po(v),T=F.value,U=F.isSecondary,C=f[0].startsWith("FontAwesome"),N=G6(g,T),S=N;if(C){var D=Jt(T);D.iconName&&D.prefix&&(N=D.iconName,g=D.prefix)}if(N&&!U&&(!n||n.getAttribute(E6)!==g||n.getAttribute(U6)!==S)){c.setAttribute(e,S),n&&c.removeChild(n);var O=go(),m2=O.extra;m2.attributes[r6]=a,o6(N,g).then(function(i2){var L2=$6(b(b({},O),{},{icons:{main:i2,mask:j6()},prefix:g,iconName:S,extra:m2,watchable:!0})),p2=K.createElement("svg");a==="::before"?c.insertBefore(p2,c.firstChild):c.appendChild(p2),p2.outerHTML=L2.map(function(E2){return l4(E2)}).join(`
`),c.removeAttribute(e),s()}).catch(r)}else s()}else s()})}function Bo(c){return Promise.all([j0(c,"::before"),j0(c,"::after")])}function Fo(c){return c.parentNode!==document.head&&!~Lt.indexOf(c.tagName.toUpperCase())&&!c.getAttribute(r6)&&(!c.parentNode||c.parentNode.tagName!=="svg")}function $0(c){if(!!$2)return new Promise(function(a,e){var s=F1(c.querySelectorAll("*")).filter(Fo).map(Bo),r=K6.begin("searchPseudoElements");d7(),Promise.all(s).then(function(){r(),H6(),a()}).catch(function(){r(),H6(),e()})})}var Ro={hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=$0,e}}},provides:function(a){a.pseudoElements2svg=function(e){var s=e.node,r=s===void 0?K:s;y.searchPseudoElements&&$0(r)}}},K0=!1,Do={mixout:function(){return{dom:{unwatch:function(){d7(),K0=!0}}}},hooks:function(){return{bootstrap:function(){I0(l6("mutationObserverCallbacks",{}))},noAuto:function(){po()},watch:function(e){var s=e.observeMutationsRoot;K0?H6():I0(l6("mutationObserverCallbacks",{observeMutationsRoot:s}))}}}},Y0=function(a){var e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return a.toLowerCase().split(" ").reduce(function(s,r){var i=r.toLowerCase().split("-"),n=i[0],l=i.slice(1).join("-");if(n&&l==="h")return s.flipX=!0,s;if(n&&l==="v")return s.flipY=!0,s;if(l=parseFloat(l),isNaN(l))return s;switch(n){case"grow":s.size=s.size+l;break;case"shrink":s.size=s.size-l;break;case"left":s.x=s.x-l;break;case"right":s.x=s.x+l;break;case"up":s.y=s.y-l;break;case"down":s.y=s.y+l;break;case"rotate":s.rotate=s.rotate+l;break}return s},e)},_o={mixout:function(){return{parse:{transform:function(e){return Y0(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,s){var r=s.getAttribute("data-fa-transform");return r&&(e.transform=Y0(r)),e}}},provides:function(a){a.generateAbstractTransformGrouping=function(e){var s=e.main,r=e.transform,i=e.containerWidth,n=e.iconWidth,l={transform:"translate(".concat(i/2," 256)")},f="translate(".concat(r.x*32,", ").concat(r.y*32,") "),o="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),H="rotate(".concat(r.rotate," 0 0)"),v={transform:"".concat(f," ").concat(o," ").concat(H)},u={transform:"translate(".concat(n/2*-1," -256)")},g={outer:l,inner:v,path:u};return{tag:"g",attributes:b({},g.outer),children:[{tag:"g",attributes:b({},g.inner),children:[{tag:s.icon.tag,children:s.icon.children,attributes:b(b({},s.icon.attributes),g.path)}]}]}}}},O3={x:0,y:0,width:"100%",height:"100%"};function X0(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return c.attributes&&(c.attributes.fill||a)&&(c.attributes.fill="black"),c}function Eo(c){return c.tag==="g"?c.children:[c]}var Uo={hooks:function(){return{parseNodeAttributes:function(e,s){var r=s.getAttribute("data-fa-mask"),i=r?o3(r.split(" ").map(function(n){return n.trim()})):j6();return i.prefix||(i.prefix=a1()),e.mask=i,e.maskId=s.getAttribute("data-fa-mask-id"),e}}},provides:function(a){a.generateAbstractMask=function(e){var s=e.children,r=e.attributes,i=e.main,n=e.mask,l=e.maskId,f=e.transform,o=i.width,H=i.icon,v=n.width,u=n.icon,g=Dt({transform:f,containerWidth:v,iconWidth:o}),F={tag:"rect",attributes:b(b({},O3),{},{fill:"white"})},T=H.children?{children:H.children.map(X0)}:{},U={tag:"g",attributes:b({},g.inner),children:[X0(b({tag:H.tag,attributes:b(b({},H.attributes),g.path)},T))]},C={tag:"g",attributes:b({},g.outer),children:[U]},N="mask-".concat(l||s4()),S="clip-".concat(l||s4()),D={tag:"mask",attributes:b(b({},O3),{},{id:N,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[F,C]},O={tag:"defs",children:[{tag:"clipPath",attributes:{id:S},children:Eo(u)},D]};return s.push(O,{tag:"rect",attributes:b({fill:"currentColor","clip-path":"url(#".concat(S,")"),mask:"url(#".concat(N,")")},O3)}),{children:s,attributes:r}}}},Oo={provides:function(a){var e=!1;c1.matchMedia&&(e=c1.matchMedia("(prefers-reduced-motion: reduce)").matches),a.missingIconAbstract=function(){var s=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};s.push({tag:"path",attributes:b(b({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var n=b(b({},i),{},{attributeName:"opacity"}),l={tag:"circle",attributes:b(b({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||l.children.push({tag:"animate",attributes:b(b({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:b(b({},n),{},{values:"1;0;1;1;0;1;"})}),s.push(l),s.push({tag:"path",attributes:b(b({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:b(b({},n),{},{values:"1;0;0;0;0;1;"})}]}),e||s.push({tag:"path",attributes:b(b({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:b(b({},n),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:s}}}},Io={hooks:function(){return{parseNodeAttributes:function(e,s){var r=s.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return e.symbol=i,e}}}},qo=[Ut,wo,yo,ko,Ao,Ro,Do,_o,Uo,Oo,Io];ao(qo,{mixoutsTo:V2});V2.noAuto;var L7=V2.config,Wo=V2.library;V2.dom;var Y4=V2.parse;V2.findIconDefinition;V2.toHtml;var Go=V2.icon;V2.layer;var jo=V2.text;V2.counter;function Q0(c,a){var e=Object.keys(c);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(c);a&&(s=s.filter(function(r){return Object.getOwnPropertyDescriptor(c,r).enumerable})),e.push.apply(e,s)}return e}function b2(c){for(var a=1;a<arguments.length;a++){var e=arguments[a]!=null?arguments[a]:{};a%2?Q0(Object(e),!0).forEach(function(s){H2(c,s,e[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(e)):Q0(Object(e)).forEach(function(s){Object.defineProperty(c,s,Object.getOwnPropertyDescriptor(e,s))})}return c}function X4(c){return X4=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},X4(c)}function H2(c,a,e){return a in c?Object.defineProperty(c,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):c[a]=e,c}function $o(c,a){if(c==null)return{};var e={},s=Object.keys(c),r,i;for(i=0;i<s.length;i++)r=s[i],!(a.indexOf(r)>=0)&&(e[r]=c[r]);return e}function Ko(c,a){if(c==null)return{};var e=$o(c,a),s,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(c);for(r=0;r<i.length;r++)s=i[r],!(a.indexOf(s)>=0)&&(!Object.prototype.propertyIsEnumerable.call(c,s)||(e[s]=c[s]))}return e}function v6(c){return Yo(c)||Xo(c)||Qo(c)||Jo()}function Yo(c){if(Array.isArray(c))return z6(c)}function Xo(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function Qo(c,a){if(!!c){if(typeof c=="string")return z6(c,a);var e=Object.prototype.toString.call(c).slice(8,-1);if(e==="Object"&&c.constructor&&(e=c.constructor.name),e==="Map"||e==="Set")return Array.from(c);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return z6(c,a)}}function z6(c,a){(a==null||a>c.length)&&(a=c.length);for(var e=0,s=new Array(a);e<a;e++)s[e]=c[e];return s}function Jo(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
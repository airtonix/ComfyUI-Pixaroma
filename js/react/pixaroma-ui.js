function ev(u,d){for(var h=0;h<d.length;h++){const s=d[h];if(typeof s!="string"&&!Array.isArray(s)){for(const T in s)if(T!=="default"&&!(T in u)){const S=Object.getOwnPropertyDescriptor(s,T);S&&Object.defineProperty(u,T,S.get?S:{enumerable:!0,get:()=>s[T]})}}}return Object.freeze(Object.defineProperty(u,Symbol.toStringTag,{value:"Module"}))}(function(){const d=document.createElement("link").relList;if(d&&d.supports&&d.supports("modulepreload"))return;for(const T of document.querySelectorAll('link[rel="modulepreload"]'))s(T);new MutationObserver(T=>{for(const S of T)if(S.type==="childList")for(const z of S.addedNodes)z.tagName==="LINK"&&z.rel==="modulepreload"&&s(z)}).observe(document,{childList:!0,subtree:!0});function h(T){const S={};return T.integrity&&(S.integrity=T.integrity),T.referrerPolicy&&(S.referrerPolicy=T.referrerPolicy),T.crossOrigin==="use-credentials"?S.credentials="include":T.crossOrigin==="anonymous"?S.credentials="omit":S.credentials="same-origin",S}function s(T){if(T.ep)return;T.ep=!0;const S=h(T);fetch(T.href,S)}})();function tv(u){return u&&u.__esModule&&Object.prototype.hasOwnProperty.call(u,"default")?u.default:u}var Us={exports:{}},gl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vm;function nv(){if(vm)return gl;vm=1;var u=Symbol.for("react.transitional.element"),d=Symbol.for("react.fragment");function h(s,T,S){var z=null;if(S!==void 0&&(z=""+S),T.key!==void 0&&(z=""+T.key),"key"in T){S={};for(var _ in T)_!=="key"&&(S[_]=T[_])}else S=T;return T=S.ref,{$$typeof:u,type:s,key:z,ref:T!==void 0?T:null,props:S}}return gl.Fragment=d,gl.jsx=h,gl.jsxs=h,gl}var wm;function av(){return wm||(wm=1,Us.exports=nv()),Us.exports}var E=av(),Ds={exports:{}},K={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bm;function ov(){if(bm)return K;bm=1;var u=Symbol.for("react.transitional.element"),d=Symbol.for("react.portal"),h=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),T=Symbol.for("react.profiler"),S=Symbol.for("react.consumer"),z=Symbol.for("react.context"),_=Symbol.for("react.forward_ref"),U=Symbol.for("react.suspense"),j=Symbol.for("react.memo"),N=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),M=Symbol.for("react.view_transition"),ie=Symbol.iterator;function re(m){return m===null||typeof m!="object"?null:(m=ie&&m[ie]||m["@@iterator"],typeof m=="function"?m:null)}var P={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Y=Object.assign,ge={};function Se(m,A,G){this.props=m,this.context=A,this.refs=ge,this.updater=G||P}Se.prototype.isReactComponent={},Se.prototype.setState=function(m,A){if(typeof m!="object"&&typeof m!="function"&&m!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,m,A,"setState")},Se.prototype.forceUpdate=function(m){this.updater.enqueueForceUpdate(this,m,"forceUpdate")};function ae(){}ae.prototype=Se.prototype;function ke(m,A,G){this.props=m,this.context=A,this.refs=ge,this.updater=G||P}var lt=ke.prototype=new ae;lt.constructor=ke,Y(lt,Se.prototype),lt.isPureReactComponent=!0;var tt=Array.isArray;function F(){}var se={H:null,A:null,T:null,S:null},ct=Object.prototype.hasOwnProperty;function nt(m,A,G){var q=G.ref;return{$$typeof:u,type:m,key:A,ref:q!==void 0?q:null,props:G}}function at(m,A){return nt(m.type,A,m.props)}function ee(m){return typeof m=="object"&&m!==null&&m.$$typeof===u}function Bt(m){var A={"=":"=0",":":"=2"};return"$"+m.replace(/[=:]/g,function(G){return A[G]})}var At=/\/+/g;function De(m,A){return typeof m=="object"&&m!==null&&m.key!=null?Bt(""+m.key):A.toString(36)}function R(m){switch(m.status){case"fulfilled":return m.value;case"rejected":throw m.reason;default:switch(typeof m.status=="string"?m.then(F,F):(m.status="pending",m.then(function(A){m.status==="pending"&&(m.status="fulfilled",m.value=A)},function(A){m.status==="pending"&&(m.status="rejected",m.reason=A)})),m.status){case"fulfilled":return m.value;case"rejected":throw m.reason}}throw m}function V(m,A,G,q,he){var me=typeof m;(me==="undefined"||me==="boolean")&&(m=null);var ye=!1;if(m===null)ye=!0;else switch(me){case"bigint":case"string":case"number":ye=!0;break;case"object":switch(m.$$typeof){case u:case d:ye=!0;break;case N:return ye=m._init,V(ye(m._payload),A,G,q,he)}}if(ye)return he=he(m),ye=q===""?"."+De(m,0):q,tt(he)?(G="",ye!=null&&(G=ye.replace(At,"$&/")+"/"),V(he,A,G,"",function(rn){return rn})):he!=null&&(ee(he)&&(he=at(he,G+(he.key==null||m&&m.key===he.key?"":(""+he.key).replace(At,"$&/")+"/")+ye)),A.push(he)),1;ye=0;var B=q===""?".":q+":";if(tt(m))for(var Z=0;Z<m.length;Z++)q=m[Z],me=B+De(q,Z),ye+=V(q,A,G,me,he);else if(Z=re(m),typeof Z=="function")for(m=Z.call(m),Z=0;!(q=m.next()).done;)q=q.value,me=B+De(q,Z++),ye+=V(q,A,G,me,he);else if(me==="object"){if(typeof m.then=="function")return V(R(m),A,G,q,he);throw A=String(m),Error("Objects are not valid as a React child (found: "+(A==="[object Object]"?"object with keys {"+Object.keys(m).join(", ")+"}":A)+"). If you meant to render a collection of children, use an array instead.")}return ye}function Q(m,A,G){if(m==null)return m;var q=[],he=0;return V(m,q,"","",function(me){return A.call(G,me,he++)}),q}function de(m){if(m._status===-1){var A=m._result,G=A();G.then(function(q){(m._status===0||m._status===-1)&&(m._status=1,m._result=q,G.status===void 0&&(G.status="fulfilled",G.value=q))},function(q){(m._status===0||m._status===-1)&&(m._status=2,m._result=q,G.status===void 0&&(G.status="rejected",G.reason=q))}),m._status===-1&&(m._status=0,m._result=G)}if(m._status===1)return m._result.default;throw m._result}var fe=typeof reportError=="function"?reportError:function(m){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var A=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof m=="object"&&m!==null&&typeof m.message=="string"?String(m.message):String(m),error:m});if(!window.dispatchEvent(A))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",m);return}console.error(m)};function He(m){var A=se.T,G={};G.types=A!==null?A.types:null,se.T=G;try{var q=m(),he=se.S;he!==null&&he(G,q),typeof q=="object"&&q!==null&&typeof q.then=="function"&&q.then(F,fe)}catch(me){fe(me)}finally{A!==null&&G.types!==null&&(A.types=G.types),se.T=A}}function ln(m){var A=se.T;if(A!==null){var G=A.types;G===null?A.types=[m]:G.indexOf(m)===-1&&G.push(m)}else He(ln.bind(null,m))}var aa={map:Q,forEach:function(m,A,G){Q(m,function(){A.apply(this,arguments)},G)},count:function(m){var A=0;return Q(m,function(){A++}),A},toArray:function(m){return Q(m,function(A){return A})||[]},only:function(m){if(!ee(m))throw Error("React.Children.only expected to receive a single React element child.");return m}};return K.Activity=x,K.Children=aa,K.Component=Se,K.Fragment=h,K.Profiler=T,K.PureComponent=ke,K.StrictMode=s,K.Suspense=U,K.ViewTransition=M,K.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=se,K.__COMPILER_RUNTIME={__proto__:null,c:function(m){return se.H.useMemoCache(m)}},K.addTransitionType=ln,K.cache=function(m){return function(){return m.apply(null,arguments)}},K.cacheSignal=function(){return null},K.cloneElement=function(m,A,G){if(m==null)throw Error("The argument must be a React element, but you passed "+m+".");var q=Y({},m.props),he=m.key;if(A!=null)for(me in A.key!==void 0&&(he=""+A.key),A)!ct.call(A,me)||me==="key"||me==="__self"||me==="__source"||me==="ref"&&A.ref===void 0||(q[me]=A[me]);var me=arguments.length-2;if(me===1)q.children=G;else if(1<me){for(var ye=Array(me),B=0;B<me;B++)ye[B]=arguments[B+2];q.children=ye}return nt(m.type,he,q)},K.createContext=function(m){return m={$$typeof:z,_currentValue:m,_currentValue2:m,_threadCount:0,Provider:null,Consumer:null},m.Provider=m,m.Consumer={$$typeof:S,_context:m},m},K.createElement=function(m,A,G){var q,he={},me=null;if(A!=null)for(q in A.key!==void 0&&(me=""+A.key),A)ct.call(A,q)&&q!=="key"&&q!=="__self"&&q!=="__source"&&(he[q]=A[q]);var ye=arguments.length-2;if(ye===1)he.children=G;else if(1<ye){for(var B=Array(ye),Z=0;Z<ye;Z++)B[Z]=arguments[Z+2];he.children=B}if(m&&m.defaultProps)for(q in ye=m.defaultProps,ye)he[q]===void 0&&(he[q]=ye[q]);return nt(m,me,he)},K.createRef=function(){return{current:null}},K.forwardRef=function(m){return{$$typeof:_,render:m}},K.isValidElement=ee,K.lazy=function(m){return{$$typeof:N,_payload:{_status:-1,_result:m},_init:de}},K.memo=function(m,A){return{$$typeof:j,type:m,compare:A===void 0?null:A}},K.startTransition=He,K.unstable_useCacheRefresh=function(){return se.H.useCacheRefresh()},K.use=function(m){return se.H.use(m)},K.useActionState=function(m,A,G){return se.H.useActionState(m,A,G)},K.useCallback=function(m,A){return se.H.useCallback(m,A)},K.useContext=function(m){return se.H.useContext(m)},K.useDebugValue=function(){},K.useDeferredValue=function(m,A){return se.H.useDeferredValue(m,A)},K.useEffect=function(m,A){return se.H.useEffect(m,A)},K.useEffectEvent=function(m){return se.H.useEffectEvent(m)},K.useId=function(){return se.H.useId()},K.useImperativeHandle=function(m,A,G){return se.H.useImperativeHandle(m,A,G)},K.useInsertionEffect=function(m,A){return se.H.useInsertionEffect(m,A)},K.useLayoutEffect=function(m,A){return se.H.useLayoutEffect(m,A)},K.useMemo=function(m,A){return se.H.useMemo(m,A)},K.useOptimistic=function(m,A){return se.H.useOptimistic(m,A)},K.useReducer=function(m,A,G){return se.H.useReducer(m,A,G)},K.useRef=function(m){return se.H.useRef(m)},K.useState=function(m){return se.H.useState(m)},K.useSyncExternalStore=function(m,A,G){return se.H.useSyncExternalStore(m,A,G)},K.useTransition=function(){return se.H.useTransition()},K.version="19.3.0",K}var xm;function Qs(){return xm||(xm=1,Ds.exports=ov()),Ds.exports}var ue=Qs();const lv=tv(ue),iv=ev({__proto__:null,default:lv},[ue]);var Hs={exports:{}},yl={},js={exports:{}},Bs={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tm;function rv(){return Tm||(Tm=1,(function(u){function d(R,V){var Q=R.length;R.push(V);e:for(;0<Q;){var de=Q-1>>>1,fe=R[de];if(0<T(fe,V))R[de]=V,R[Q]=fe,Q=de;else break e}}function h(R){return R.length===0?null:R[0]}function s(R){if(R.length===0)return null;var V=R[0],Q=R.pop();if(Q!==V){R[0]=Q;e:for(var de=0,fe=R.length,He=fe>>>1;de<He;){var ln=2*(de+1)-1,aa=R[ln],m=ln+1,A=R[m];if(0>T(aa,Q))m<fe&&0>T(A,aa)?(R[de]=A,R[m]=Q,de=m):(R[de]=aa,R[ln]=Q,de=ln);else if(m<fe&&0>T(A,Q))R[de]=A,R[m]=Q,de=m;else break e}}return V}function T(R,V){var Q=R.sortIndex-V.sortIndex;return Q!==0?Q:R.id-V.id}if(u.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var S=performance;u.unstable_now=function(){return S.now()}}else{var z=Date,_=z.now();u.unstable_now=function(){return z.now()-_}}var U=[],j=[],N=1,x=null,M=3,ie=!1,re=!1,P=!1,Y=!1,ge=typeof setTimeout=="function"?setTimeout:null,Se=typeof clearTimeout=="function"?clearTimeout:null,ae=typeof setImmediate<"u"?setImmediate:null;function ke(R){for(var V=h(j);V!==null;){if(V.callback===null)s(j);else if(V.startTime<=R)s(j),V.sortIndex=V.expirationTime,d(U,V);else break;V=h(j)}}function lt(R){if(P=!1,ke(R),!re)if(h(U)!==null)re=!0,tt||(tt=!0,ee());else{var V=h(j);V!==null&&De(lt,V.startTime-R)}}var tt=!1,F=-1,se=5,ct=-1;function nt(){return Y?!0:!(u.unstable_now()-ct<se)}function at(){if(Y=!1,tt){var R=u.unstable_now();ct=R;var V=!0;try{e:{re=!1,P&&(P=!1,Se(F),F=-1),ie=!0;var Q=M;try{t:{for(ke(R),x=h(U);x!==null&&!(x.expirationTime>R&&nt());){var de=x.callback;if(typeof de=="function"){x.callback=null,M=x.priorityLevel;var fe=de(x.expirationTime<=R);if(R=u.unstable_now(),typeof fe=="function"){x.callback=fe,ke(R),V=!0;break t}x===h(U)&&s(U),ke(R)}else s(U);x=h(U)}if(x!==null)V=!0;else{var He=h(j);He!==null&&De(lt,He.startTime-R),V=!1}}break e}finally{x=null,M=Q,ie=!1}V=void 0}}finally{V?ee():tt=!1}}}var ee;if(typeof ae=="function")ee=function(){ae(at)};else if(typeof MessageChannel<"u"){var Bt=new MessageChannel,At=Bt.port2;Bt.port1.onmessage=at,ee=function(){At.postMessage(null)}}else ee=function(){ge(at,0)};function De(R,V){F=ge(function(){R(u.unstable_now())},V)}u.unstable_IdlePriority=5,u.unstable_ImmediatePriority=1,u.unstable_LowPriority=4,u.unstable_NormalPriority=3,u.unstable_Profiling=null,u.unstable_UserBlockingPriority=2,u.unstable_cancelCallback=function(R){R.callback=null},u.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):se=0<R?Math.floor(1e3/R):5},u.unstable_getCurrentPriorityLevel=function(){return M},u.unstable_next=function(R){switch(M){case 1:case 2:case 3:var V=3;break;default:V=M}var Q=M;M=V;try{return R()}finally{M=Q}},u.unstable_requestPaint=function(){Y=!0},u.unstable_runWithPriority=function(R,V){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var Q=M;M=R;try{return V()}finally{M=Q}},u.unstable_scheduleCallback=function(R,V,Q){var de=u.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?de+Q:de):Q=de,R){case 1:var fe=-1;break;case 2:fe=250;break;case 5:fe=1073741823;break;case 4:fe=1e4;break;default:fe=5e3}return fe=Q+fe,R={id:N++,callback:V,priorityLevel:R,startTime:Q,expirationTime:fe,sortIndex:-1},Q>de?(R.sortIndex=Q,d(j,R),h(U)===null&&R===h(j)&&(P?(Se(F),F=-1):P=!0,De(lt,Q-de))):(R.sortIndex=fe,d(U,R),re||ie||(re=!0,tt||(tt=!0,ee()))),R},u.unstable_shouldYield=nt,u.unstable_wrapCallback=function(R){var V=M;return function(){var Q=M;M=V;try{return R.apply(this,arguments)}finally{M=Q}}}})(Bs)),Bs}var Sm;function uv(){return Sm||(Sm=1,js.exports=rv()),js.exports}var Ls={exports:{}},et={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cm;function sv(){if(Cm)return et;Cm=1;var u=Qs();function d(N){var x="https://react.dev/errors/"+N;if(1<arguments.length){x+="?args[]="+encodeURIComponent(arguments[1]);for(var M=2;M<arguments.length;M++)x+="&args[]="+encodeURIComponent(arguments[M])}return"Minified React error #"+N+"; visit "+x+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function h(){}var s={d:{f:h,r:function(){throw Error(d(522))},D:h,C:h,L:h,m:h,X:h,S:h,M:h},p:0,findDOMNode:null},T=Symbol.for("react.portal"),S=Symbol.for("react.recoverable"),z=Symbol.for("react.optimistic_key");function _(N,x,M){var ie=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:T,key:ie==null?null:ie===z?z:""+ie,children:N,containerInfo:x,implementation:M}}var U=u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function j(N,x){if(N==="font")return"";if(typeof x=="string")return x==="use-credentials"?x:""}return et.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,et.browser=function(N){return{$$typeof:S,_reason:N}},et.createPortal=function(N,x){var M=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!x||x.nodeType!==1&&x.nodeType!==9&&x.nodeType!==11)throw Error(d(299));return _(N,x,null,M)},et.flushSync=function(N){var x=U.T,M=s.p;try{if(U.T=null,s.p=2,N)return N()}finally{U.T=x,s.p=M,s.d.f()}},et.preconnect=function(N,x){typeof N=="string"&&(x?(x=x.crossOrigin,x=typeof x=="string"?x==="use-credentials"?x:"":void 0):x=null,s.d.C(N,x))},et.prefetchDNS=function(N){typeof N=="string"&&s.d.D(N)},et.preinit=function(N,x){if(typeof N=="string"&&x&&typeof x.as=="string"){var M=x.as,ie=j(M,x.crossOrigin),re=typeof x.integrity=="string"?x.integrity:void 0,P=typeof x.fetchPriority=="string"?x.fetchPriority:void 0;M==="style"?s.d.S(N,typeof x.precedence=="string"?x.precedence:void 0,{crossOrigin:ie,integrity:re,fetchPriority:P}):M==="script"&&s.d.X(N,{crossOrigin:ie,integrity:re,fetchPriority:P,nonce:typeof x.nonce=="string"?x.nonce:void 0})}},et.preinitModule=function(N,x){if(typeof N=="string")if(typeof x=="object"&&x!==null){if(x.as==null||x.as==="script"){var M=j(x.as,x.crossOrigin);s.d.M(N,{crossOrigin:M,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0,fetchPriority:typeof x.fetchPriority=="string"?x.fetchPriority:void 0})}}else x==null&&s.d.M(N)},et.preload=function(N,x){if(typeof N=="string"&&typeof x=="object"&&x!==null&&typeof x.as=="string"){var M=x.as,ie=j(M,x.crossOrigin);s.d.L(N,M,{crossOrigin:ie,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0,type:typeof x.type=="string"?x.type:void 0,fetchPriority:typeof x.fetchPriority=="string"?x.fetchPriority:void 0,referrerPolicy:typeof x.referrerPolicy=="string"?x.referrerPolicy:void 0,imageSrcSet:typeof x.imageSrcSet=="string"?x.imageSrcSet:void 0,imageSizes:typeof x.imageSizes=="string"?x.imageSizes:void 0,media:typeof x.media=="string"?x.media:void 0})}},et.preloadModule=function(N,x){if(typeof N=="string")if(x){var M=j(x.as,x.crossOrigin);s.d.m(N,{as:typeof x.as=="string"&&x.as!=="script"?x.as:void 0,crossOrigin:M,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0,fetchPriority:typeof x.fetchPriority=="string"?x.fetchPriority:void 0})}else s.d.m(N)},et.requestFormReset=function(N){s.d.r(N)},et.unstable_batchedUpdates=function(N,x){return N(x)},et.useFormState=function(N,x,M){return U.H.useFormState(N,x,M)},et.useFormStatus=function(){return U.H.useHostTransitionStatus()},et.version="19.3.0",et}var km;function cv(){if(km)return Ls.exports;km=1;function u(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u)}catch(d){console.error(d)}}return u(),Ls.exports=sv(),Ls.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zm;function dv(){if(zm)return yl;zm=1;var u=uv(),d=Qs(),h=cv();function s(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function T(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function S(e){for(var t=e,n=t;n&&!n.alternate;)t=n,(t.flags&4098)!==0&&(e=t.return),n=t.return;for(;t.return;)t=t.return;return t.tag===3?e:null}function z(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function _(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function U(e){if(S(e)!==e)throw Error(s(188))}function j(e){var t=e.alternate;if(!t){if(t=S(e),t===null)throw Error(s(188));return t!==e?null:e}for(var n=e,a=t;;){var o=n.return;if(o===null)break;var l=o.alternate;if(l===null){if(a=o.return,a!==null){n=a;continue}break}if(o.child===l.child){for(l=o.child;l;){if(l===n)return U(o),e;if(l===a)return U(o),t;l=l.sibling}throw Error(s(188))}if(n.return!==a.return)n=o,a=l;else{for(var i=!1,r=o.child;r;){if(r===n){i=!0,n=o,a=l;break}if(r===a){i=!0,a=o,n=l;break}r=r.sibling}if(!i){for(r=l.child;r;){if(r===n){i=!0,n=l,a=o;break}if(r===a){i=!0,a=l,n=o;break}r=r.sibling}if(!i)throw Error(s(189))}}if(n.alternate!==a)throw Error(s(190))}if(n.tag!==3)throw Error(s(188));return n.stateNode.current===n?e:t}function N(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=N(e),t!==null)return t;e=e.sibling}return null}function x(e,t,n,a,o,l){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&n(e,a,o,l)||(e.tag!==22||e.memoizedState===null)&&(t||e.tag!==5&&e.tag!==27)&&x(e.child,t,n,a,o,l))return!0;e=e.sibling}return!1}function M(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function ie(e){var t=!1;for(e=e.return;e!==null&&(e.tag===4&&(t=!0),!(e.tag===3||e.tag===5||e.tag===27));)e=e.return;return t}function re(e){var t=[null,null],n=M(e);return n===null||P(t,e,n.child,{foundSelf:!1}),t}function P(e,t,n,a){for(;n!==null;){if(n===t)a.foundSelf=!0;else if(n.tag===5||n.tag===27||n.tag===6){if(a.foundSelf)return e[1]=n,!0;e[0]=n}else if((n.tag!==22||n.memoizedState===null)&&P(e,t,n.child,a))return!0;n=n.sibling}return!1}function Y(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(s(559))}}var ge=null,Se=null;function ae(e,t,n){return e===n?!0:e===t?(ge=e,!0):!1}function ke(e,t,n){return e===n?(Se=e,!1):e===t?(Se!==null&&(ge=e),!0):!1}function lt(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function tt(e,t,n){for(var a=0,o=e;o;o=n(o))a++;o=0;for(var l=t;l;l=n(l))o++;for(;0<a-o;)e=n(e),a--;for(;0<o-a;)t=n(t),o--;for(;a--;){if(e===t||t!==null&&e===t.alternate)return e;e=n(e),t=n(t)}return null}var F=Object.assign,se=Symbol.for("react.element"),ct=Symbol.for("react.transitional.element"),nt=Symbol.for("react.portal"),at=Symbol.for("react.fragment"),ee=Symbol.for("react.strict_mode"),Bt=Symbol.for("react.profiler"),At=Symbol.for("react.consumer"),De=Symbol.for("react.context"),R=Symbol.for("react.forward_ref"),V=Symbol.for("react.suspense"),Q=Symbol.for("react.suspense_list"),de=Symbol.for("react.memo"),fe=Symbol.for("react.lazy"),He=Symbol.for("react.activity"),ln=Symbol.for("react.legacy_hidden"),aa=Symbol.for("react.memo_cache_sentinel"),m=Symbol.for("react.view_transition"),A=Symbol.for("react.recoverable"),G=Symbol.iterator;function q(e){return e===null||typeof e!="object"?null:(e=G&&e[G]||e["@@iterator"],typeof e=="function"?e:null)}var he=Symbol.for("react.client.reference");function me(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===he?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case at:return"Fragment";case Bt:return"Profiler";case ee:return"StrictMode";case V:return"Suspense";case Q:return"SuspenseList";case He:return"Activity";case m:return"ViewTransition"}if(typeof e=="object")switch(e.$$typeof){case nt:return"Portal";case De:return e.displayName||"Context";case At:return(e._context.displayName||"Context")+".Consumer";case R:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case de:return t=e.displayName||null,t!==null?t:me(e.type)||"Memo";case fe:t=e._payload,e=e._init;try{return me(e(t))}catch{}}return null}var ye=Array.isArray,B=d.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z=h.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,rn={pending:!1,data:null,method:null,action:null},$i=[],Aa=-1;function Zt(e){return{current:e}}function Ke(e){0>Aa||(e.current=$i[Aa],$i[Aa]=null,Aa--)}function Ee(e,t){Aa++,$i[Aa]=e.current,e.current=t}var Kt=Zt(null),To=Zt(null),kn=Zt(null),bl=Zt(null);function xl(e,t){switch(Ee(kn,t),Ee(To,e),Ee(Kt,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Eh(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Eh(t),e=Ah(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Ke(Kt),Ee(Kt,e)}function Oa(){Ke(Kt),Ke(To),Ke(kn)}function er(e){var t=e.memoizedState;t!==null&&(yo._currentValue=t.memoizedState,Ee(bl,e)),t=Kt.current;var n=Ah(t,e.type);t!==n&&(Ee(To,e),Ee(Kt,n))}function Tl(e){To.current===e&&(Ke(Kt),Ke(To)),bl.current===e&&(Ke(bl),yo._currentValue=rn)}var tr,Ks;function zn(e){if(tr===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);tr=t&&t[1]||"",Ks=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+tr+e+Ks}var nr=!1;function ar(e,t){if(!e||nr)return"";nr=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var k=function(){throw Error()};if(Object.defineProperty(k.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(k,[])}catch(O){var p=O}Reflect.construct(e,[],k)}else{try{k.call()}catch(O){p=O}k=!1;try{var w=Object.getOwnPropertyDescriptor(e.prototype,"props");Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),k=!0,new e}finally{k&&(w!==void 0?Object.defineProperty(e.prototype,"props",w):delete e.prototype.props)}}}else{try{throw Error()}catch(O){p=O}(k=e())&&typeof k.catch=="function"&&k.catch(function(){})}}catch(O){if(O&&p&&typeof O.stack=="string")return[O.stack,p.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var o=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");o&&o.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var l=a.DetermineComponentFrameRoot(),i=l[0],r=l[1];if(i&&r){var c=i.split(`
`),y=r.split(`
`);for(o=a=0;a<c.length&&!c[a].includes("DetermineComponentFrameRoot");)a++;for(;o<y.length&&!y[o].includes("DetermineComponentFrameRoot");)o++;if(a===c.length||o===y.length)for(a=c.length-1,o=y.length-1;1<=a&&0<=o&&c[a]!==y[o];)o--;for(;1<=a&&0<=o;a--,o--)if(c[a]!==y[o]){if(a!==1||o!==1)do if(a--,o--,0>o||c[a]!==y[o]){var b=`
`+c[a].replace(" at new "," at ");return e.displayName&&b.includes("<anonymous>")&&(b=b.replace("<anonymous>",e.displayName)),b}while(1<=a&&0<=o);break}}}finally{nr=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?zn(n):""}function op(e,t){switch(e.tag){case 26:case 27:case 5:return zn(e.type);case 16:return zn("Lazy");case 13:return e.child!==t&&t!==null?zn("Suspense Fallback"):zn("Suspense");case 19:return zn("SuspenseList");case 0:case 15:return ar(e.type,!1);case 11:return ar(e.type.render,!1);case 1:return ar(e.type,!0);case 31:return zn("Activity");case 30:return zn("ViewTransition");default:return""}}function Ps(e){try{var t="",n=null;do t+=op(e,n),n=e,e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var or=Object.prototype.hasOwnProperty,lr=u.unstable_scheduleCallback,ir=u.unstable_cancelCallback,lp=u.unstable_shouldYield,ip=u.unstable_requestPaint,yt=u.unstable_now,rp=u.unstable_getCurrentPriorityLevel,Is=u.unstable_ImmediatePriority,Ws=u.unstable_UserBlockingPriority,Sl=u.unstable_NormalPriority,up=u.unstable_LowPriority,Js=u.unstable_IdlePriority,sp=u.log,cp=u.unstable_setDisableYieldValue,So=null,vt=null;function En(e){if(typeof sp=="function"&&cp(e),vt&&typeof vt.setStrictMode=="function")try{vt.setStrictMode(So,e)}catch{}}var wt=Math.clz32?Math.clz32:hp,dp=Math.log,fp=Math.LN2;function hp(e){return e>>>=0,e===0?32:31-(dp(e)/fp|0)|0}var Cl=256,kl=262144,zl=4194304;function oa(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function El(e,t,n){var a=e.pendingLanes;if(a===0)return 0;var o=0,l=e.suspendedLanes,i=e.pingedLanes;e=e.warmLanes;var r=a&134217727;return r!==0?(a=r&~l,a!==0?o=oa(a):(i&=r,i!==0?o=oa(i):n||(n=r&~e,n!==0&&(o=oa(n))))):(r=a&~l,r!==0?o=oa(r):i!==0?o=oa(i):n||(n=a&~e,n!==0&&(o=oa(n)))),o===0?0:t!==0&&t!==o&&(t&l)===0&&(l=o&-o,n=t&-t,l>=n||l===32&&(n&4194048)!==0)?t:o}function Co(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Fs(e,t){(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var a=31-wt(n),o=1<<a;t|=e[a],n&=~o}return t}function mp(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $s(){var e=zl;return zl<<=1,(zl&62914560)===0&&(zl=4194304),e}function rr(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ko(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function pp(e,t,n,a,o,l){var i=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var r=e.entanglements,c=e.expirationTimes,y=e.hiddenUpdates;for(n=i&~n;0<n;){var b=31-wt(n),k=1<<b;r[b]=0,c[b]=-1;var p=y[b];if(p!==null)for(y[b]=null,b=0;b<p.length;b++){var w=p[b];w!==null&&(w.lane&=-536870913)}n&=~k}a!==0&&ec(e,a,0),l!==0&&o===0&&e.tag!==0&&(e.suspendedLanes|=l&~(i&~t))}function ec(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-wt(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|n&261930}function tc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var a=31-wt(n),o=1<<a;o&t|e[a]&t&&(e[a]|=t),n&=~o}}function nc(e,t){var n=t&-t;return n=(n&42)!==0?1:ur(n),(n&(e.suspendedLanes|t))!==0?0:n}function ur(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function sr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function ac(){var e=Z.p;return e!==0?e:(e=window.event,e===void 0?32:dm(e.type))}function oc(e,t){var n=Z.p;try{return Z.p=e,t()}finally{Z.p=n}}var un=Math.random().toString(36).slice(2),Pe="__reactFiber$"+un,dt="__reactProps$"+un,_a="__reactContainer$"+un,lc="__reactEvents$"+un,gp="__reactListeners$"+un,yp="__reactHandles$"+un,ic="__reactResources$"+un,zo="__reactMarker$"+un,Al="__reactLoad$"+un;function Ol(e){delete e[Pe],delete e[dt],delete e[gp],delete e[yp]}function la(e){var t;if(t=e[Pe])return t;for(var n=e.parentNode;n;){if(t=n[_a]||n[Pe]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Xh(e);e!==null;){if(n=e[Pe])return n;e=Xh(e)}return t}e=n,n=e.parentNode}return null}function Na(e){if(e=e[Pe]||e[_a]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Eo(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(s(33))}function Ra(e){var t=e[ic];return t||(t=e[ic]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ve(e){e[zo]=!0}function rc(e){e[Al]=void 0}var uc=new Set,sc={};function ia(e,t){Ma(e,t),Ma(e+"Capture",t)}function Ma(e,t){for(sc[e]=t,e=0;e<t.length;e++)uc.add(t[e])}var vp=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),cc={},dc={};function wp(e){return or.call(dc,e)?!0:or.call(cc,e)?!1:vp.test(e)?dc[e]=!0:(cc[e]=!0,!1)}var pe=!1;function fc(){var e=pe;return pe=!1,e}function _l(e,t,n){if(wp(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,n)}}function Nl(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,n)}}function sn(e,t,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,a)}}function bt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function hc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function bp(e,t,n){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var o=a.get,l=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(i){n=""+i,l.call(this,i)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return n},setValue:function(i){n=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function cr(e){if(!e._valueTracker){var t=hc(e)?"checked":"value";e._valueTracker=bp(e,t,""+e[t])}}function mc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return e&&(a=hc(e)?e.checked?"true":"false":e.value),e=a,e!==n?(t.setValue(e),!0):!1}var xp=/[\n"\\]/g;function Ot(e){return e.replace(xp,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function dr(e,t,n,a,o,l,i,r){e.name="",i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"?e.type=i:e.removeAttribute("type"),t!=null?i==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+bt(t)):e.value!==""+bt(t)&&(e.value=""+bt(t)):i!=="submit"&&i!=="reset"||e.removeAttribute("value"),t!=null?i==="number"&&e.value==t?fr(e,bt(e.value)):fr(e,bt(t)):n!=null?fr(e,bt(n)):a!=null&&e.removeAttribute("value"),o==null&&l!=null&&(e.defaultChecked=!!l),o!=null&&(e.checked=o&&typeof o!="function"&&typeof o!="symbol"),r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.name=""+bt(r):e.removeAttribute("name")}function pc(e,t,n,a,o,l,i,r){if(l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"&&(e.type=l),t!=null||n!=null){if(!(l!=="submit"&&l!=="reset"||t!=null)){cr(e);return}n=n!=null?""+bt(n):"",t=t!=null?""+bt(t):n,r||t===e.value||(e.value=t),e.defaultValue=t}a=a??o,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=r?e.checked:!!a,e.defaultChecked=!!a,i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.name=i),cr(e)}function fr(e,t){e.defaultValue!==""+t&&(e.defaultValue=""+t)}function Ua(e,t,n,a){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&a&&(e[n].defaultSelected=!0)}else{for(n=""+bt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,a&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function gc(e,t,n){if(t!=null&&(t=""+bt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+bt(n):""}function yc(e,t,n,a){if(t==null){if(a!=null){if(n!=null)throw Error(s(92));if(ye(a)){if(1<a.length)throw Error(s(93));a=a[0]}n=a}n==null&&(n=""),t=n}n=bt(t),e.defaultValue=n,a=e.textContent,a===n&&a!==""&&a!==null&&(e.value=a),cr(e)}function Da(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Tp=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function vc(e,t,n){var a=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,n):typeof n!="number"||n===0||Tp.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function wc(e,t,n){if(t!=null&&typeof t!="object")throw Error(s(62));if(e=e.style,n!=null){for(var a in n)!n.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="",pe=!0);for(var o in t)a=t[o],t.hasOwnProperty(o)&&n[o]!==a&&(vc(e,o,a),pe=!0)}else for(var l in t)t.hasOwnProperty(l)&&vc(e,l,t[l])}function hr(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Sp=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Cp=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Rl(e){return Cp.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Pt(){}var mr=null;function pr(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ha=null,ja=null;function bc(e){var t=Na(e);if(t&&(e=t.stateNode)){var n=e[dt]||null;e:switch(e=t.stateNode,t.type){case"input":if(dr(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Ot(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var o=a[dt]||null;if(!o)throw Error(s(90));dr(a,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name)}}for(t=0;t<n.length;t++)a=n[t],a.form===e.form&&mc(a)}break e;case"textarea":gc(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&Ua(e,!!n.multiple,t,!1)}}}var gr=!1;function xc(e,t,n){if(gr)return e(t,n);gr=!0;try{var a=e(t);return a}finally{if(gr=!1,(Ha!==null||ja!==null)&&(Ri(),Ha&&(t=Ha,e=ja,ja=Ha=null,bc(t),e)))for(t=0;t<e.length;t++)bc(e[t])}}function Ao(e,t){var n=e.stateNode;if(n===null)return null;var a=n[dt]||null;if(a===null)return null;n=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(s(231,t,typeof n));return n}var cn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),yr=!1;if(cn)try{var Oo={};Object.defineProperty(Oo,"passive",{get:function(){yr=!0}}),window.addEventListener("test",Oo,Oo),window.removeEventListener("test",Oo,Oo)}catch{yr=!1}var An=null,vr=null,Ml=null;function Tc(){if(Ml)return Ml;var e,t=vr,n=t.length,a,o="value"in An?An.value:An.textContent,l=o.length;for(e=0;e<n&&t[e]===o[e];e++);var i=n-e;for(a=1;a<=i&&t[n-a]===o[l-a];a++);return Ml=o.slice(e,1<a?1-a:void 0)}function Ul(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Dl(){return!0}function Sc(){return!1}function it(e){function t(n,a,o,l,i){this._reactName=n,this._targetInst=o,this.type=a,this.nativeEvent=l,this.target=i,this.currentTarget=null;for(var r in e)e.hasOwnProperty(r)&&(n=e[r],this[r]=n?n(l):l[r]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Dl:Sc,this.isPropagationStopped=Sc,this}return F(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Dl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Dl)},persist:function(){},isPersistent:Dl}),t}var On={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Hl=it(On),_o=F({},On,{view:0,detail:0}),kp=it(_o),wr,br,No,jl=F({},_o,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Tr,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==No&&(No&&e.type==="mousemove"?(wr=e.screenX-No.screenX,br=e.screenY-No.screenY):br=wr=0,No=e),wr)},movementY:function(e){return"movementY"in e?e.movementY:br}}),Cc=it(jl),zp=F({},jl,{dataTransfer:0}),Ep=it(zp),Ap=F({},_o,{relatedTarget:0}),xr=it(Ap),Op=F({},On,{animationName:0,elapsedTime:0,pseudoElement:0}),_p=it(Op),Np=F({},On,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Rp=it(Np),Mp=F({},On,{data:0}),kc=it(Mp),Up={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Dp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Hp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function jp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Hp[e])?!!t[e]:!1}function Tr(){return jp}var Bp=F({},_o,{key:function(e){if(e.key){var t=Up[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ul(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Dp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Tr,charCode:function(e){return e.type==="keypress"?Ul(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ul(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Lp=it(Bp),Gp=F({},jl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),zc=it(Gp),qp=F({},On,{submitter:0}),Yp=it(qp),Vp=F({},_o,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Tr}),Qp=it(Vp),Xp=F({},On,{propertyName:0,elapsedTime:0,pseudoElement:0}),Zp=it(Xp),Kp=F({},jl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Pp=it(Kp),Ip=F({},On,{newState:0,oldState:0,source:0}),Wp=it(Ip),Jp=[9,13,27,32],Sr=cn&&"CompositionEvent"in window,Ro=null;cn&&"documentMode"in document&&(Ro=document.documentMode);var Fp=cn&&"TextEvent"in window&&!Ro,Ec=cn&&(!Sr||Ro&&8<Ro&&11>=Ro),Ac=" ",Oc=!1;function _c(e,t){switch(e){case"keyup":return Jp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Nc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ba=!1;function $p(e,t){switch(e){case"compositionend":return Nc(t);case"keypress":return t.which!==32?null:(Oc=!0,Ac);case"textInput":return e=t.data,e===Ac&&Oc?null:e;default:return null}}function eg(e,t){if(Ba)return e==="compositionend"||!Sr&&_c(e,t)?(e=Tc(),Ml=vr=An=null,Ba=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ec&&t.locale!=="ko"?null:t.data;default:return null}}var tg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Rc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!tg[e.type]:t==="textarea"}function Mc(e,t,n,a){Ha?ja?ja.push(a):ja=[a]:Ha=a,t=Bi(t,"onChange"),0<t.length&&(n=new Hl("onChange","change",null,n,a),e.push({event:n,listeners:t}))}var Mo=null,Uo=null;function ng(e){xh(e,0)}function Bl(e){var t=Eo(e);if(mc(t))return e}function Uc(e,t){if(e==="change")return t}var Dc=!1;if(cn){var Cr;if(cn){var kr="oninput"in document;if(!kr){var Hc=document.createElement("div");Hc.setAttribute("oninput","return;"),kr=typeof Hc.oninput=="function"}Cr=kr}else Cr=!1;Dc=Cr&&(!document.documentMode||9<document.documentMode)}function jc(){Mo&&(Mo.detachEvent("onpropertychange",Bc),Uo=Mo=null)}function Bc(e){if(e.propertyName==="value"&&Bl(Uo)){var t=[];Mc(t,Uo,e,pr(e)),xc(ng,t)}}function ag(e,t,n){e==="focusin"?(jc(),Mo=t,Uo=n,Mo.attachEvent("onpropertychange",Bc)):e==="focusout"&&jc()}function og(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Bl(Uo)}function lg(e,t){if(e==="click")return Bl(t)}function ig(e,t){if(e==="input"||e==="change")return Bl(t)}function rg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var xt=typeof Object.is=="function"?Object.is:rg;function Do(e,t){if(xt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var o=n[a];if(!or.call(t,o)||!xt(e[o],t[o]))return!1}return!0}function zr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Lc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Gc(e,t){var n=Lc(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=t&&a>=t)return{node:n,offset:t-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Lc(n)}}function qc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?qc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Yc(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=zr(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=zr(e.document)}return t}function Er(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var ug=cn&&"documentMode"in document&&11>=document.documentMode,La=null,Ar=null,Ho=null,Or=!1;function Vc(e,t,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Or||La==null||La!==zr(a)||(a=La,"selectionStart"in a&&Er(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Ho&&Do(Ho,a)||(Ho=a,a=Bi(Ar,"onSelect"),0<a.length&&(t=new Hl("onSelect","select",null,t,n),e.push({event:t,listeners:a}),t.target=La)))}function ra(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ga={animationend:ra("Animation","AnimationEnd"),animationiteration:ra("Animation","AnimationIteration"),animationstart:ra("Animation","AnimationStart"),transitionrun:ra("Transition","TransitionRun"),transitionstart:ra("Transition","TransitionStart"),transitioncancel:ra("Transition","TransitionCancel"),transitionend:ra("Transition","TransitionEnd")},_r={},Qc={};cn&&(Qc=document.createElement("div").style,"AnimationEvent"in window||(delete Ga.animationend.animation,delete Ga.animationiteration.animation,delete Ga.animationstart.animation),"TransitionEvent"in window||delete Ga.transitionend.transition);function ua(e){if(_r[e])return _r[e];if(!Ga[e])return e;var t=Ga[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Qc)return _r[e]=t[n];return e}var Xc=ua("animationend"),Zc=ua("animationiteration"),Kc=ua("animationstart"),sg=ua("transitionrun"),cg=ua("transitionstart"),dg=ua("transitioncancel"),Pc=ua("transitionend"),Ic=new Map,Nr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Nr.push("scrollEnd");function Lt(e,t){Ic.set(e,t),ia(t,[e])}var fg=0;function dn(e,t){if(e.name!=null&&e.name!=="auto")return e.name;if(t.autoName!==null)return t.autoName;e=Vt.identifierPrefix;var n=fg++;return e="_"+e+"t_"+n.toString(32)+"_",t.autoName=e}function Wc(e){if(e==null||typeof e=="string")return e;var t=null,n=io;if(n!==null)for(var a=0;a<n.length;a++){var o=e[n[a]];if(o!=null){if(o==="none")return"none";t=t==null?o:t+(" "+o)}}return t??e.default}function fn(e,t){return e=Wc(e),t=Wc(t),t==null?e==="auto"?null:e:t==="auto"?null:t}var Ll=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},_t=[],qa=0,Rr=0;function Gl(){for(var e=qa,t=Rr=qa=0;t<e;){var n=_t[t];_t[t++]=null;var a=_t[t];_t[t++]=null;var o=_t[t];_t[t++]=null;var l=_t[t];if(_t[t++]=null,a!==null&&o!==null){var i=a.pending;i===null?o.next=o:(o.next=i.next,i.next=o),a.pending=o}l!==0&&Jc(n,o,l)}}function ql(e,t,n,a){_t[qa++]=e,_t[qa++]=t,_t[qa++]=n,_t[qa++]=a,Rr|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function Mr(e,t,n,a){return ql(e,t,n,a),Yl(e)}function sa(e,t){return ql(e,null,null,t),Yl(e)}function Jc(e,t,n){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n);for(var o=!1,l=e.return;l!==null;)l.childLanes|=n,a=l.alternate,a!==null&&(a.childLanes|=n),l.tag===22&&(e=l.stateNode,e===null||e._visibility&1||(o=!0)),e=l,l=l.return;return e.tag===3?(l=e.stateNode,o&&t!==null&&(o=31-wt(n),e=l.hiddenUpdates,a=e[o],a===null?e[o]=[t]:a.push(t),t.lane=n|536870912),l):null}function Yl(e){if(50<ol)throw ol=0,Ni=null,Error(s(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Ya={};function hg(e,t,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ft(e,t,n,a){return new hg(e,t,n,a)}function Ur(e){return e=e.prototype,!(!e||!e.isReactComponent)}function hn(e,t){var n=e.alternate;return n===null?(n=ft(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&1206910976,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Fc(e,t){e.flags&=1206910978;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Vl(e,t,n,a,o,l){var i=0;if(a=e,typeof a=="function")Ur(a)&&(i=1);else if(typeof a=="string")i=qy(e,n,Kt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(a){case He:return e=ft(31,n,t,o),e.elementType=He,e.lanes=l,e;case at:return ca(n.children,o,l,t);case ee:i=8,o|=24;break;case Bt:return e=ft(12,n,t,o|2),e.elementType=Bt,e.lanes=l,e;case V:return e=ft(13,n,t,o),e.elementType=V,e.lanes=l,e;case Q:return e=ft(19,n,t,o),e.elementType=Q,e.lanes=l,e;case ln:case m:return e=o|32,e=ft(30,n,t,e),e.elementType=m,e.lanes=l,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof a=="object"&&a!==null)switch(a.$$typeof){case De:i=10;break e;case At:i=9;break e;case R:i=11;break e;case de:i=14;break e;case fe:i=16,a=null;break e}i=29,n=Error(s(130,e===null?"null":typeof e,"")),a=null}return t=ft(i,n,t,o),t.elementType=e,t.type=a,t.lanes=l,t}function ca(e,t,n,a){return e=ft(7,e,a,t),e.lanes=n,e}function Dr(e,t,n){return e=ft(6,e,null,t),e.lanes=n,e}function $c(e){var t=ft(18,null,null,0);return t.stateNode=e,t}function Hr(e,t,n){return t=ft(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var ed=new WeakMap;function Nt(e,t){if(typeof e=="object"&&e!==null){var n=ed.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Ps(t)},ed.set(e,t),t)}return{value:e,source:t,stack:Ps(t)}}var Va=[],Qa=0,Ql=null,jo=0,Rt=[],Mt=0,_n=null,It=1,Wt="";function mn(e,t){Va[Qa++]=jo,Va[Qa++]=Ql,Ql=e,jo=t}function td(e,t,n){Rt[Mt++]=It,Rt[Mt++]=Wt,Rt[Mt++]=_n,_n=e;var a=It;e=Wt;var o=32-wt(a)-1;a&=~(1<<o),n+=1;var l=32-wt(t)+o;if(30<l){var i=o-o%5;l=(a&(1<<i)-1).toString(32),a>>=i,o-=i,It=1<<32-wt(t)+o|n<<o|a,Wt=l+e}else It=1<<l|n<<o|a,Wt=e}function Xl(e){e.return!==null&&(mn(e,1),td(e,1,0))}function jr(e){for(;e===Ql;)Ql=Va[--Qa],Va[Qa]=null,jo=Va[--Qa],Va[Qa]=null;for(;e===_n;)_n=Rt[--Mt],Rt[Mt]=null,Wt=Rt[--Mt],Rt[Mt]=null,It=Rt[--Mt],Rt[Mt]=null}function nd(e,t){Rt[Mt++]=It,Rt[Mt++]=Wt,Rt[Mt++]=_n,It=t.id,Wt=t.overflow,_n=e}var Qe=null,Ae=null,$=!1,Nn=null,Ut=!1,Br=Error(s(519));function Rn(e){var t=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Bo(Nt(t,e)),Br}function ad(e){var t=e.stateNode,n=e.type,a=e.memoizedProps;switch(t[Pe]=e,t[dt]=a,n){case"dialog":ne("cancel",t),ne("close",t);break;case"iframe":case"object":case"embed":ne("load",t);break;case"video":case"audio":for(n=0;n<il.length;n++)ne(il[n],t);break;case"source":ne("error",t);break;case"img":case"image":case"link":ne("error",t),ne("load",t);break;case"details":ne("toggle",t);break;case"input":ne("invalid",t),pc(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":ne("invalid",t);break;case"textarea":ne("invalid",t),yc(t,a.value,a.defaultValue,a.children)}n=a.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||a.suppressHydrationWarning===!0||kh(t.textContent,n)?(a.popover!=null&&(ne("beforetoggle",t),ne("toggle",t)),a.onScroll!=null&&ne("scroll",t),a.onScrollEnd!=null&&ne("scrollend",t),a.onClick!=null&&(t.onclick=Pt),t=!0):t=!1,t||Rn(e,!0)}function Zl(e){for(Qe=e.return;Qe;)switch(Qe.tag){case 5:case 31:case 13:Ut=!1;return;case 27:case 3:Ut=!0;return;default:Qe=Qe.return}}function Xa(e){if(e!==Qe)return!1;if(!$)return Zl(e),$=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||ms(e.type,e.memoizedProps)),n=!n),n&&Ae&&Rn(e),Zl(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ae=Qh(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ae=Qh(e)}else t===27?(t=Ae,Pn(e.type)?(e=Ss,Ss=null,Ae=e):Ae=t):Ae=Qe?Ht(e.stateNode.nextSibling):null;return!0}function da(){Ae=Qe=null,$=!1}function Lr(){var e=Nn;return e!==null&&(pt===null?pt=e:pt.push.apply(pt,e),Nn=null),e}function Bo(e){Nn===null?Nn=[e]:Nn.push(e)}var Gr=Zt(null),fa=null,pn=null;function Mn(e,t,n){Ee(Gr,t._currentValue),t._currentValue=n}function gn(e){e._currentValue=Gr.current,Ke(Gr)}function Kl(e,t,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===n)break;e=e.return}}function qr(e,t,n,a){var o=e.child;for(o!==null&&(o.return=e);o!==null;){var l=o.dependencies;if(l!==null){var i=o.child;l=l.firstContext;e:for(;l!==null;){var r=l;l=o;for(var c=0;c<t.length;c++)if(r.context===t[c]){l.lanes|=n,r=l.alternate,r!==null&&(r.lanes|=n),Kl(l.return,n,e),a||(i=null);break e}l=r.next}}else if(o.tag===18){if(i=o.return,i===null)throw Error(s(341));i.lanes|=n,l=i.alternate,l!==null&&(l.lanes|=n),Kl(i,n,e),i=null}else o.tag===13&&o.memoizedState!==null&&o.memoizedState.dehydrated===null?(o.lanes|=n,i=o.alternate,i!==null&&(i.lanes|=n),Kl(o.return,n,e),i=o.child,i=i!==null?i.sibling:null):i=o.child;if(i!==null)i.return=o;else for(i=o;i!==null;){if(i===e){i=null;break}if(o=i.sibling,o!==null){o.return=i.return,i=o;break}i=i.return}o=i}}function ha(e,t,n,a){e=null;for(var o=t,l=!1;o!==null;){if(!l){if((o.flags&524288)!==0)l=!0;else if((o.flags&262144)!==0)break}if(o.tag===10){var i=o.alternate;if(i===null)throw Error(s(387));if(i=i.memoizedProps,i!==null){var r=o.type;xt(o.pendingProps.value,i.value)||(e!==null?e.push(r):e=[r])}}else if(o===bl.current){if(i=o.alternate,i===null)throw Error(s(387));i.memoizedState.memoizedState!==o.memoizedState.memoizedState&&(e!==null?e.push(yo):e=[yo])}o=o.return}return e!==null&&qr(t,e,n,a),t.flags|=262144,e!==null}function Pl(e){for(e=e.firstContext;e!==null;){if(!xt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ma(e){fa=e,pn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ie(e){return od(fa,e)}function Il(e,t){return fa===null&&ma(e),od(e,t)}function od(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},pn===null){if(e===null)throw Error(s(308));pn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else pn=pn.next=t;return n}var mg=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},pg=u.unstable_scheduleCallback,gg=u.unstable_NormalPriority,Be={$$typeof:De,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Yr(){return{controller:new mg,data:new Map,refCount:0}}function Lo(e){e.refCount--,e.refCount===0&&pg(gg,function(){e.controller.abort()})}function ld(e,t){if((e.pendingLanes&4194048)!==0){var n=e.transitionTypes;for(n===null&&(n=e.transitionTypes=[]),e=0;e<t.length;e++){var a=t[e];n.indexOf(a)===-1&&n.push(a)}}}var Go=null;function yg(e){var t=e.transitionTypes;return e.transitionTypes=null,t}var qo=null,Vr=0,pa=0,Za=null;function vg(e,t){if(qo===null){var n=qo=[];Vr=0,pa=ls(),Za={status:"pending",value:void 0,then:function(a){n.push(a)}}}return Vr++,t.then(id,id),t}function id(){if(--Vr===0&&(Go=null,qo!==null)){Za!==null&&(Za.status="fulfilled");var e=qo;qo=null,pa=0,Za=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function wg(e,t){var n=[],a={status:"pending",value:null,reason:null,then:function(o){n.push(o)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var o=0;o<n.length;o++)(0,n[o])(t)},function(o){for(a.status="rejected",a.reason=o,o=0;o<n.length;o++)(0,n[o])(void 0)}),a}var rd=B.S;B.S=function(e,t){if(eh=yt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&vg(e,t),Go!==null)for(var n=co;n!==null;)ld(n,Go),n=n.next;if(n=e.types,n!==null){for(var a=co;a!==null;)ld(a,n),a=a.next;if(pa!==0){a=Go,a===null&&(a=Go=[]);for(var o=0;o<n.length;o++){var l=n[o];a.indexOf(l)===-1&&a.push(l)}}}rd!==null&&rd(e,t)};var ga=Zt(null);function Qr(){var e=ga.current;return e!==null?e:ze.pooledCache}function Wl(e,t){t===null?Ee(ga,ga.current):Ee(ga,t.pool)}function ud(){var e=Qr();return e===null?null:{parent:Be._currentValue,pool:e}}var Ka=Error(s(460)),Xr=Error(s(474)),Jl=Error(s(542)),Fl={then:function(){}};function sd(e){return e=e.status,e==="fulfilled"||e==="rejected"}function cd(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Pt,Pt),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,fd(e),e===void 0&&!("reason"in t)?Error(s(600)):e;default:if(typeof t.status=="string")t.then(Pt,Pt);else{if(e=ze,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var o=t;o.status="fulfilled",o.value=a}},function(a){if(t.status==="pending"){var o=t;o.status="rejected",o.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,fd(e),e}throw va=t,Ka}}function ya(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(va=n,Ka):n}}var va=null;function dd(){if(va===null)throw Error(s(459));var e=va;return va=null,e}function fd(e){if(e===Ka||e===Jl)throw Error(s(483))}var Pa=null,Yo=0;function $l(e){var t=Yo;return Yo+=1,Pa===null&&(Pa=[]),cd(Pa,e,t)}function Un(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function ei(e,t){throw t.$$typeof===se?Error(s(525)):(e=Object.prototype.toString.call(t),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function hd(e){function t(g,f){if(e){var v=g.deletions;v===null?(g.deletions=[f],g.flags|=16):v.push(f)}}function n(g,f){if(!e)return null;for(;f!==null;)t(g,f),f=f.sibling;return null}function a(g){for(var f=new Map;g!==null;)g.key===null?f.set(g.index,g):f.set(g.key,g),g=g.sibling;return f}function o(g,f){return g=hn(g,f),g.index=0,g.sibling=null,g}function l(g,f,v){return g.index=v,e?(v=g.alternate,v!==null?(v=v.index,v<f?(g.flags|=2,f):v):(g.flags|=134217730,f)):(g.flags|=1048576,f)}function i(g){return e&&g.alternate===null&&(g.flags|=134217730),g}function r(g,f,v,C){return f===null||f.tag!==6?(f=Dr(v,g.mode,C),f.return=g,f):(f=o(f,v),f.return=g,f)}function c(g,f,v,C){var D=v.type;return D===at?(g=b(g,f,v.props.children,C,v.key),Un(g,v),g):f!==null&&(f.elementType===D||typeof D=="object"&&D!==null&&D.$$typeof===fe&&ya(D)===f.type)?(f=o(f,v.props),Un(f,v),f.return=g,f):(f=Vl(v.type,v.key,v.props,null,g.mode,C),Un(f,v),f.return=g,f)}function y(g,f,v,C){return f===null||f.tag!==4||f.stateNode.containerInfo!==v.containerInfo||f.stateNode.implementation!==v.implementation?(f=Hr(v,g.mode,C),f.return=g,f):(f=o(f,v.children||[]),f.return=g,f)}function b(g,f,v,C,D){return f===null||f.tag!==7?(f=ca(v,g.mode,C,D),f.return=g,f):(f=o(f,v),f.return=g,f)}function k(g,f,v){if(typeof f=="string"&&f!==""||typeof f=="number"||typeof f=="bigint")return f=Dr(""+f,g.mode,v),f.return=g,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case ct:return v=Vl(f.type,f.key,f.props,null,g.mode,v),Un(v,f),v.return=g,v;case nt:return f=Hr(f,g.mode,v),f.return=g,f;case fe:return f=ya(f),k(g,f,v)}if(ye(f)||q(f))return f=ca(f,g.mode,v,null),f.return=g,f;if(typeof f.then=="function")return k(g,$l(f),v);if(f.$$typeof===De)return k(g,Il(g,f),v);ei(g,f)}return null}function p(g,f,v,C){var D=f!==null?f.key:null;if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return D!==null?null:r(g,f,""+v,C);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ct:return v.key===D?c(g,f,v,C):null;case nt:return v.key===D?y(g,f,v,C):null;case fe:return v=ya(v),p(g,f,v,C)}if(ye(v)||q(v))return D!==null?null:b(g,f,v,C,null);if(typeof v.then=="function")return p(g,f,$l(v),C);if(v.$$typeof===De)return p(g,f,Il(g,v),C);ei(g,v)}return null}function w(g,f,v,C,D){if(typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint")return g=g.get(v)||null,r(f,g,""+C,D);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case ct:return g=g.get(C.key===null?v:C.key)||null,c(f,g,C,D);case nt:return g=g.get(C.key===null?v:C.key)||null,y(f,g,C,D);case fe:return C=ya(C),w(g,f,v,C,D)}if(ye(C)||q(C))return g=g.get(v)||null,b(f,g,C,D,null);if(typeof C.then=="function")return w(g,f,v,$l(C),D);if(C.$$typeof===De)return w(g,f,v,Il(f,C),D);ei(f,C)}return null}function O(g,f,v,C){for(var D=null,le=null,L=f,X=f=0,qe=null;L!==null&&X<v.length;X++){L.index>X?(qe=L,L=null):qe=L.sibling;var ce=p(g,L,v[X],C);if(ce===null){L===null&&(L=qe);break}e&&L&&ce.alternate===null&&t(g,L),f=l(ce,f,X),le===null?D=ce:le.sibling=ce,le=ce,L=qe}if(X===v.length)return n(g,L),$&&mn(g,X),D;if(L===null){for(;X<v.length;X++)L=k(g,v[X],C),L!==null&&(f=l(L,f,X),le===null?D=L:le.sibling=L,le=L);return $&&mn(g,X),D}for(L=a(L);X<v.length;X++)qe=w(L,g,X,v[X],C),qe!==null&&(e&&(ce=qe.alternate,ce!==null&&L.delete(ce.key===null?X:ce.key)),f=l(qe,f,X),le===null?D=qe:le.sibling=qe,le=qe);return e&&L.forEach(function($n){return t(g,$n)}),$&&mn(g,X),D}function H(g,f,v,C){if(v==null)throw Error(s(151));for(var D=null,le=null,L=f,X=f=0,qe=null,ce=v.next();L!==null&&!ce.done;X++,ce=v.next()){L.index>X?(qe=L,L=null):qe=L.sibling;var $n=p(g,L,ce.value,C);if($n===null){L===null&&(L=qe);break}e&&L&&$n.alternate===null&&t(g,L),f=l($n,f,X),le===null?D=$n:le.sibling=$n,le=$n,L=qe}if(ce.done)return n(g,L),$&&mn(g,X),D;if(L===null){for(;!ce.done;X++,ce=v.next())ce=k(g,ce.value,C),ce!==null&&(f=l(ce,f,X),le===null?D=ce:le.sibling=ce,le=ce);return $&&mn(g,X),D}for(L=a(L);!ce.done;X++,ce=v.next())ce=w(L,g,X,ce.value,C),ce!==null&&(e&&(qe=ce.alternate,qe!==null&&L.delete(qe.key===null?X:qe.key)),f=l(ce,f,X),le===null?D=ce:le.sibling=ce,le=ce);return e&&L.forEach(function($y){return t(g,$y)}),$&&mn(g,X),D}function W(g,f,v,C){if(typeof v=="object"&&v!==null&&v.type===at&&v.key===null&&v.props.ref===void 0&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case ct:e:{for(var D=v.key;f!==null;){if(f.key===D){if(D=v.type,D===at){if(f.tag===7){n(g,f.sibling),C=o(f,v.props.children),Un(C,v),C.return=g,g=C;break e}}else if(f.elementType===D||typeof D=="object"&&D!==null&&D.$$typeof===fe&&ya(D)===f.type){n(g,f.sibling),C=o(f,v.props),Un(C,v),C.return=g,g=C;break e}n(g,f);break}else t(g,f);f=f.sibling}v.type===at?(C=ca(v.props.children,g.mode,C,v.key),Un(C,v),C.return=g,g=C):(C=Vl(v.type,v.key,v.props,null,g.mode,C),Un(C,v),C.return=g,g=C)}return i(g);case nt:e:{for(D=v.key;f!==null;){if(f.key===D)if(f.tag===4&&f.stateNode.containerInfo===v.containerInfo&&f.stateNode.implementation===v.implementation){n(g,f.sibling),C=o(f,v.children||[]),C.return=g,g=C;break e}else{n(g,f);break}else t(g,f);f=f.sibling}C=Hr(v,g.mode,C),C.return=g,g=C}return i(g);case fe:return v=ya(v),W(g,f,v,C)}if(ye(v))return O(g,f,v,C);if(q(v)){if(D=q(v),typeof D!="function")throw Error(s(150));return v=D.call(v),H(g,f,v,C)}if(typeof v.then=="function")return W(g,f,$l(v),C);if(v.$$typeof===De)return W(g,f,Il(g,v),C);ei(g,v)}return typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint"?(v=""+v,f!==null&&f.tag===6?(n(g,f.sibling),C=o(f,v),C.return=g,g=C):(n(g,f),C=Dr(v,g.mode,C),C.return=g,g=C),i(g)):n(g,f)}return function(g,f,v,C){try{Yo=0;var D=W(g,f,v,C);return Pa=null,D}catch(L){if(L===Ka||L===Jl)throw L;var le=ft(29,L,null,g.mode);return le.lanes=C,le.return=g,le}finally{}}}var wa=hd(!0),md=hd(!1),Dn=!1;function Zr(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Kr(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Hn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function jn(e,t,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(ve&2)!==0){var o=a.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),a.pending=t,t=Yl(e),Jc(e,null,n),t}return ql(e,a,t,n),Yl(e)}function Vo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,tc(e,n)}}function Pr(e,t){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var o=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var i={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};l===null?o=l=i:l=l.next=i,n=n.next}while(n!==null);l===null?o=l=t:l=l.next=t}else o=l=t;n={baseState:a.baseState,firstBaseUpdate:o,lastBaseUpdate:l,shared:a.shared,callbacks:a.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Ir=!1;function Qo(){if(Ir){var e=Za;if(e!==null)throw e}}function Xo(e,t,n,a){Ir=!1;var o=e.updateQueue;Dn=!1;var l=o.firstBaseUpdate,i=o.lastBaseUpdate,r=o.shared.pending;if(r!==null){o.shared.pending=null;var c=r,y=c.next;c.next=null,i===null?l=y:i.next=y,i=c;var b=e.alternate;b!==null&&(b=b.updateQueue,r=b.lastBaseUpdate,r!==i&&(r===null?b.firstBaseUpdate=y:r.next=y,b.lastBaseUpdate=c))}if(l!==null){var k=o.baseState;i=0,b=y=c=null,r=l;do{var p=r.lane&-536870913,w=p!==r.lane;if(w?(oe&p)===p:(a&p)===p){p!==0&&p===pa&&(Ir=!0),b!==null&&(b=b.next={lane:0,tag:r.tag,payload:r.payload,callback:null,next:null});e:{var O=e,H=r;p=t;var W=n;switch(H.tag){case 1:if(O=H.payload,typeof O=="function"){k=O.call(W,k,p);break e}k=O;break e;case 3:O.flags=O.flags&-65537|128;case 0:if(O=H.payload,p=typeof O=="function"?O.call(W,k,p):O,p==null)break e;k=F({},k,p);break e;case 2:Dn=!0}}p=r.callback,p!==null&&(e.flags|=64,w&&(e.flags|=8192),w=o.callbacks,w===null?o.callbacks=[p]:w.push(p))}else w={lane:p,tag:r.tag,payload:r.payload,callback:r.callback,next:null},b===null?(y=b=w,c=k):b=b.next=w,i|=p;if(r=r.next,r===null){if(r=o.shared.pending,r===null)break;w=r,r=w.next,w.next=null,o.lastBaseUpdate=w,o.shared.pending=null}}while(!0);b===null&&(c=k),o.baseState=c,o.firstBaseUpdate=y,o.lastBaseUpdate=b,l===null&&(o.shared.lanes=0),Qn|=i,e.lanes=i,e.memoizedState=k}}function pd(e,t){if(typeof e!="function")throw Error(s(191,e));e.call(t)}function gd(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)pd(n[e],t)}var Bn=Zt(null),ti=Zt(0);function yd(e,t){e=xn,Ee(ti,e),Ee(Bn,t),xn=e|t.baseLanes}function Wr(){Ee(ti,xn),Ee(Bn,Bn.current)}function Jr(){xn=ti.current,Ke(Bn),Ke(ti)}var We=Zt(null),ot=null;function Ln(e){var t=e.alternate;Ee(Je,Je.current&1),Ee(We,e),ot===null&&(t===null||Bn.current!==null||t.memoizedState!==null)&&(ot=e)}function Fr(e){Ee(Je,Je.current),Ee(We,e),ot===null&&(ot=e)}function vd(e){e.tag===22?(Ee(Je,Je.current),Ee(We,e),ot===null&&(ot=e)):Gn()}function Gn(){Ee(Je,Je.current),Ee(We,We.current)}function Tt(e){Ke(We),ot===e&&(ot=null),Ke(Je)}var Je=Zt(0);function Zo(e,t){Ee(We,We.current),Ee(Je,t)}function $r(e){Ke(Je),Ke(We),ot===e&&(ot=null)}function ni(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||xs(n)||Ts(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!=="independent"){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var yn=0,I=null,Ce=null,Le=null,ai=!1,Ia=!1,ba=!1,oi=0,Ko=0,Wa=null,bg=0;function Me(){throw Error(s(321))}function eu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!xt(e[n],t[n]))return!1;return!0}function tu(e,t,n,a,o,l){return yn=l,I=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,B.H=e===null||e.memoizedState===null?tf:nf,ba=!1,l=n(a,o),ba=!1,Ia&&(l=bd(t,n,a,o)),wd(e),l}function wd(e){B.H=di;var t=Ce!==null&&Ce.next!==null;if(yn=0,Le=Ce=I=null,ai=!1,Ko=0,Wa=null,t)throw Error(s(300));e===null||Ge||(e=e.dependencies,e!==null&&Pl(e)&&(Ge=!0))}function bd(e,t,n,a){I=e;var o=0;do{if(Ia&&(Wa=null),Ko=0,Ia=!1,25<=o)throw Error(s(301));if(o+=1,Le=Ce=null,e.updateQueue!=null){var l=e.updateQueue;l.lastEffect=null,l.events=null,l.stores=null,l.memoCache!=null&&(l.memoCache.index=0)}B.H=Ag,l=t(n,a)}while(Ia);return l}function xg(){var e=B.H,t=e.useState()[0];return t=typeof t.then=="function"?Po(t):t,e=e.useState()[0],(Ce!==null?Ce.memoizedState:null)!==e&&(I.flags|=1024),t}function nu(){var e=oi!==0;return oi=0,e}function au(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function ou(e){if(ai){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}ai=!1}yn=0,Le=Ce=I=null,Ia=!1,Ko=oi=0,Wa=null}function rt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Le===null?I.memoizedState=Le=e:Le=Le.next=e,Le}function je(){if(Ce===null){var e=I.alternate;e=e!==null?e.memoizedState:null}else e=Ce.next;var t=Le===null?I.memoizedState:Le.next;if(t!==null)Le=t,Ce=e;else{if(e===null)throw I.alternate===null?Error(s(467)):Error(s(310));Ce=e,e={memoizedState:Ce.memoizedState,baseState:Ce.baseState,baseQueue:Ce.baseQueue,queue:Ce.queue,next:null},Le===null?I.memoizedState=Le=e:Le=Le.next=e}return Le}function li(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Po(e){var t=Ko;return Ko+=1,Wa===null&&(Wa=[]),e=cd(Wa,e,t),t=I,(Le===null?t.memoizedState:Le.next)===null&&(t=t.alternate,B.H=t===null||t.memoizedState===null?tf:nf),e}function ii(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Po(e);if(e.$$typeof===A)return;if(e.$$typeof===De)return Ie(e)}throw Error(s(438,String(e)))}function lu(e){var t=null,n=I.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var a=I.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(o){return o.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=li(),I.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),a=0;a<e;a++)n[a]=aa;return t.index++,n}function vn(e,t){return typeof t=="function"?t(e):t}function ri(e){var t=je();return iu(t,Ce,e)}function iu(e,t,n){var a=e.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=n;var o=e.baseQueue,l=a.pending;if(l!==null){if(o!==null){var i=o.next;o.next=l.next,l.next=i}t.baseQueue=o=l,a.pending=null}if(l=e.baseState,o===null)e.memoizedState=l;else{t=o.next;var r=i=null,c=null,y=t,b=!1;do{var k=y.lane&-536870913;if(k!==y.lane?(oe&k)===k:(yn&k)===k){var p=y.revertLane;if(p===0)c!==null&&(c=c.next={lane:0,revertLane:0,gesture:null,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null}),k===pa&&(b=!0);else if((yn&p)===p){y=y.next,p===pa&&(b=!0);continue}else k={lane:0,revertLane:y.revertLane,gesture:null,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null},c===null?(r=c=k,i=l):c=c.next=k,I.lanes|=p,Qn|=p;k=y.action,ba&&n(l,k),l=y.hasEagerState?y.eagerState:n(l,k)}else p={lane:k,revertLane:y.revertLane,gesture:y.gesture,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null},c===null?(r=c=p,i=l):c=c.next=p,I.lanes|=k,Qn|=k;y=y.next}while(y!==null&&y!==t);if(c===null?i=l:c.next=r,!xt(l,e.memoizedState)&&(Ge=!0,b&&(n=Za,n!==null)))throw n;e.memoizedState=l,e.baseState=i,e.baseQueue=c,a.lastRenderedState=l}return o===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function ru(e){var t=je(),n=t.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=e;var a=n.dispatch,o=n.pending,l=t.memoizedState;if(o!==null){n.pending=null;var i=o=o.next;do l=e(l,i.action),i=i.next;while(i!==o);xt(l,t.memoizedState)||(Ge=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,a]}function xd(e,t,n){var a=I,o=je(),l=$;if(l){if(n===void 0)throw Error(s(407));n=n()}else n=t();var i=!xt((Ce||o).memoizedState,n);if(i&&(o.memoizedState=n,Ge=!0),o=o.queue,cu(Cd.bind(null,a,o,e),[e]),e=o.getSnapshot!==t||i||Le!==null&&(Le.memoizedState.tag&1)!==0,Ja(e?9:8,{destroy:void 0},Sd.bind(null,a,o,n,t),null),e){if(a.flags|=2048,ze===null)throw Error(s(349));l||(yn&127)!==0||Td(a,t,n)}return n}function Td(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=I.updateQueue,t===null?(t=li(),I.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Sd(e,t,n,a){t.value=n,t.getSnapshot=a,kd(t)&&zd(e)}function Cd(e,t,n){return n(function(){kd(t)&&zd(e)})}function kd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!xt(e,n)}catch{return!0}}function zd(e){var t=sa(e,2);t!==null&&gt(t,e,2)}function uu(e){var t=rt();if(typeof e=="function"){var n=e;if(e=n(),ba){En(!0);try{n()}finally{En(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:vn,lastRenderedState:e},t}function Ed(e,t,n,a){return e.baseState=n,iu(e,Ce,typeof a=="function"?a:vn)}function Tg(e,t,n,a,o){if(ci(e))throw Error(s(485));if(e=t.action,e!==null){var l={payload:o,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(i){l.listeners.push(i)}};B.T!==null?n(!0):l.isTransition=!1,a(l),n=t.pending,n===null?(l.next=t.pending=l,Ad(t,l)):(l.next=n.next,t.pending=n.next=l)}}function Ad(e,t){var n=t.action,a=t.payload,o=e.state;if(t.isTransition){var l=B.T,i={};i.types=l!==null?l.types:null,B.T=i;try{var r=n(o,a),c=B.S;c!==null&&c(i,r),Od(e,t,r)}catch(y){su(e,t,y)}finally{l!==null&&i.types!==null&&(l.types=i.types),B.T=l}}else try{l=n(o,a),Od(e,t,l)}catch(y){su(e,t,y)}}function Od(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(a){_d(e,t,a)},function(a){return su(e,t,a)}):_d(e,t,n)}function _d(e,t,n){t.status="fulfilled",t.value=n,Nd(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Ad(e,n)))}function su(e,t,n){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=n,Nd(t),t=t.next;while(t!==a)}e.action=null}function Nd(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Rd(e,t){return t}function Md(e,t){if($){var n=ze.formState;if(n!==null){e:{var a=I;if($){if(Ae){t:{for(var o=Ae,l=Ut;o.nodeType!==8;){if(!l){o=null;break t}if(o=Ht(o.nextSibling),o===null){o=null;break t}}l=o.data,o=l==="F!"||l==="F"?o:null}if(o){Ae=Ht(o.nextSibling),a=o.data==="F!";break e}}Rn(a)}a=!1}a&&(t=n[0])}}return n=rt(),n.memoizedState=n.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Rd,lastRenderedState:t},n.queue=a,n=Fd.bind(null,I,a),a.dispatch=n,a=uu(!1),l=pu.bind(null,I,!1,a.queue),a=rt(),o={state:t,dispatch:null,action:e,pending:null},a.queue=o,n=Tg.bind(null,I,o,l,n),o.dispatch=n,a.memoizedState=e,[t,n,!1]}function Ud(e){var t=je();return Dd(t,Ce,e)}function Dd(e,t,n){if(t=iu(e,t,Rd)[0],e=ri(vn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=Po(t)}catch(i){throw i===Ka?Jl:i}else a=t;t=je();var o=t.queue,l=o.dispatch;return n!==t.memoizedState&&(I.flags|=2048,Ja(9,{destroy:void 0},Sg.bind(null,o,n),null)),[a,l,e]}function Sg(e,t){e.action=t}function Hd(e){var t=je(),n=Ce;if(n!==null)return Dd(t,n,e);je(),t=t.memoizedState,n=je();var a=n.queue.dispatch;return n.memoizedState=e,[t,a,!1]}function Ja(e,t,n,a){return e={tag:e,create:n,deps:a,inst:t,next:null},t=I.updateQueue,t===null&&(t=li(),I.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,t.lastEffect=e),e}function jd(){return je().memoizedState}function ui(e,t,n,a){var o=rt();I.flags|=e,o.memoizedState=Ja(1|t,{destroy:void 0},n,a===void 0?null:a)}function si(e,t,n,a){var o=je();a=a===void 0?null:a;var l=o.memoizedState.inst;Ce!==null&&a!==null&&eu(a,Ce.memoizedState.deps)?o.memoizedState=Ja(t,l,n,a):(I.flags|=e,o.memoizedState=Ja(1|t,l,n,a))}function Bd(e,t){ui(8390656,8,e,t)}function cu(e,t){si(2048,8,e,t)}function Cg(e){I.flags|=4;var t=I.updateQueue;if(t===null)t=li(),I.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Ld(e){var t=je().memoizedState;return Cg({ref:t,nextImpl:e}),function(){if((ve&2)!==0)throw Error(s(440));return t.impl.apply(void 0,arguments)}}function Gd(e,t){return si(4,2,e,t)}function qd(e,t){return si(4,4,e,t)}function Yd(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Vd(e,t,n){n=n!=null?n.concat([e]):null,si(4,4,Yd.bind(null,t,e),n)}function du(){}function Qd(e,t){var n=je();t=t===void 0?null:t;var a=n.memoizedState;return t!==null&&eu(t,a[1])?a[0]:(n.memoizedState=[e,t],e)}function Xd(e,t){var n=je();t=t===void 0?null:t;var a=n.memoizedState;if(t!==null&&eu(t,a[1]))return a[0];if(a=e(),ba){En(!0);try{e()}finally{En(!1)}}return n.memoizedState=[a,t],a}function fu(e,t,n){return n===void 0||(yn&1073741824)!==0&&(oe&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=nh(),I.lanes|=e,Qn|=e,n)}function Zd(e,t,n,a){return xt(n,t)?n:Bn.current!==null?(e=fu(e,n,a),xt(e,t)||(Ge=!0),e):(yn&106)===0||(yn&1073741824)!==0&&(oe&261930)===0?(Ge=!0,e.memoizedState=n):(e=nh(),I.lanes|=e,Qn|=e,t)}function Kd(e,t,n,a,o){var l=Z.p;Z.p=l!==0&&8>l?l:8;var i=B.T,r={};r.types=i!==null?i.types:null,B.T=r,pu(e,!1,t,n);try{var c=o(),y=B.S;if(y!==null&&y(r,c),c!==null&&typeof c=="object"&&typeof c.then=="function"){var b=wg(c,a);Io(e,t,b,zt(e))}else Io(e,t,a,zt(e))}catch(k){Io(e,t,{then:function(){},status:"rejected",reason:k},zt())}finally{Z.p=l,i!==null&&r.types!==null&&(i.types=r.types),B.T=i}}function kg(){}function hu(e,t,n,a){if(e.tag!==5)throw Error(s(476));var o=Pd(e).queue;Kd(e,o,t,rn,n===null?kg:function(){return Id(e),n(a)})}function Pd(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:rn,baseState:rn,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:vn,lastRenderedState:rn},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:vn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Id(e){var t=Pd(e);t.next===null&&(t=e.alternate.memoizedState),Io(e,t.next.queue,{},zt())}function mu(){return Ie(yo)}function Wd(){return je().memoizedState}function Jd(){return je().memoizedState}function zg(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=zt();e=Hn(n);var a=jn(t,e,n);a!==null&&(gt(a,t,n),Vo(a,t,n)),t={cache:Yr()},e.payload=t;return}t=t.return}}function Eg(e,t,n){var a=zt();n={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},ci(e)?$d(t,n):(n=Mr(e,t,n,a),n!==null&&(gt(n,e,a),ef(n,t,a)))}function Fd(e,t,n){var a=zt();Io(e,t,n,a)}function Io(e,t,n,a){var o={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(ci(e))$d(t,o);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var i=t.lastRenderedState,r=l(i,n);if(o.hasEagerState=!0,o.eagerState=r,xt(r,i))return ql(e,t,o,0),ze===null&&Gl(),!1}catch{}finally{}if(n=Mr(e,t,o,a),n!==null)return gt(n,e,a),ef(n,t,a),!0}return!1}function pu(e,t,n,a){if(a={lane:2,revertLane:ls(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},ci(e)){if(t)throw Error(s(479))}else t=Mr(e,n,a,2),t!==null&&gt(t,e,2)}function ci(e){var t=e.alternate;return e===I||t!==null&&t===I}function $d(e,t){Ia=ai=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ef(e,t,n){if((n&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,tc(e,n)}}var di={readContext:Ie,use:ii,useCallback:Me,useContext:Me,useEffect:Me,useImperativeHandle:Me,useLayoutEffect:Me,useInsertionEffect:Me,useMemo:Me,useReducer:Me,useRef:Me,useState:Me,useDebugValue:Me,useDeferredValue:Me,useTransition:Me,useSyncExternalStore:Me,useId:Me,useHostTransitionStatus:Me,useFormState:Me,useActionState:Me,useOptimistic:Me,useMemoCache:Me,useCacheRefresh:Me,useEffectEvent:Me},tf={readContext:Ie,use:ii,useCallback:function(e,t){return rt().memoizedState=[e,t===void 0?null:t],e},useContext:Ie,useEffect:Bd,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,ui(4194308,4,Yd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ui(4194308,4,e,t)},useInsertionEffect:function(e,t){ui(4,2,e,t)},useMemo:function(e,t){var n=rt();t=t===void 0?null:t;var a=e();if(ba){En(!0);try{e()}finally{En(!1)}}return n.memoizedState=[a,t],a},useReducer:function(e,t,n){var a=rt();if(n!==void 0){var o=n(t);if(ba){En(!0);try{n(t)}finally{En(!1)}}}else o=t;return a.memoizedState=a.baseState=o,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:o},a.queue=e,e=e.dispatch=Eg.bind(null,I,e),[a.memoizedState,e]},useRef:function(e){var t=rt();return e={current:e},t.memoizedState=e},useState:function(e){e=uu(e);var t=e.queue,n=Fd.bind(null,I,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:du,useDeferredValue:function(e,t){var n=rt();return fu(n,e,t)},useTransition:function(){var e=uu(!1);return e=Kd.bind(null,I,e.queue,!0,!1),rt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var a=I,o=rt();if($){if(n===void 0)throw Error(s(407));n=n()}else{if(n=t(),ze===null)throw Error(s(349));(oe&127)!==0||Td(a,t,n)}o.memoizedState=n;var l={value:n,getSnapshot:t};return o.queue=l,Bd(Cd.bind(null,a,l,e),[e]),a.flags|=2048,Ja(9,{destroy:void 0},Sd.bind(null,a,l,n,t),null),n},useId:function(){var e=rt(),t=ze.identifierPrefix;if($){var n=Wt,a=It;n=(a&~(1<<32-wt(a)-1)).toString(32)+n,t="_"+t+"R_"+n,n=oi++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=bg++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:mu,useFormState:Md,useActionState:Md,useOptimistic:function(e){var t=rt();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=pu.bind(null,I,!0,n),n.dispatch=t,[e,t]},useMemoCache:lu,useCacheRefresh:function(){return rt().memoizedState=zg.bind(null,I)},useEffectEvent:function(e){var t=rt(),n={impl:e};return t.memoizedState=n,function(){if((ve&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}},nf={readContext:Ie,use:ii,useCallback:Qd,useContext:Ie,useEffect:cu,useImperativeHandle:Vd,useInsertionEffect:Gd,useLayoutEffect:qd,useMemo:Xd,useReducer:ri,useRef:jd,useState:function(){return ri(vn)},useDebugValue:du,useDeferredValue:function(e,t){var n=je();return Zd(n,Ce.memoizedState,e,t)},useTransition:function(){var e=ri(vn)[0],t=je().memoizedState;return[typeof e=="boolean"?e:Po(e),t]},useSyncExternalStore:xd,useId:Wd,useHostTransitionStatus:mu,useFormState:Ud,useActionState:Ud,useOptimistic:function(e,t){var n=je();return Ed(n,Ce,e,t)},useMemoCache:lu,useCacheRefresh:Jd,useEffectEvent:Ld},Ag={readContext:Ie,use:ii,useCallback:Qd,useContext:Ie,useEffect:cu,useImperativeHandle:Vd,useInsertionEffect:Gd,useLayoutEffect:qd,useMemo:Xd,useReducer:ru,useRef:jd,useState:function(){return ru(vn)},useDebugValue:du,useDeferredValue:function(e,t){var n=je();return Ce===null?fu(n,e,t):Zd(n,Ce.memoizedState,e,t)},useTransition:function(){var e=ru(vn)[0],t=je().memoizedState;return[typeof e=="boolean"?e:Po(e),t]},useSyncExternalStore:xd,useId:Wd,useHostTransitionStatus:mu,useFormState:Hd,useActionState:Hd,useOptimistic:function(e,t){var n=je();return Ce!==null?Ed(n,Ce,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:lu,useCacheRefresh:Jd,useEffectEvent:Ld};function gu(e,t,n,a){t=e.memoizedState,n=n(a,t),n=n==null?t:F({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var yu={enqueueSetState:function(e,t,n){e=e._reactInternals;var a=zt(),o=Hn(a);o.payload=t,n!=null&&(o.callback=n),t=jn(e,o,a),t!==null&&(gt(t,e,a),Vo(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var a=zt(),o=Hn(a);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=jn(e,o,a),t!==null&&(gt(t,e,a),Vo(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=zt(),a=Hn(n);a.tag=2,t!=null&&(a.callback=t),t=jn(e,a,n),t!==null&&(gt(t,e,n),Vo(t,e,n))}};function af(e,t,n,a,o,l,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,l,i):t.prototype&&t.prototype.isPureReactComponent?!Do(n,a)||!Do(o,l):!0}function of(e,t,n,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==e&&yu.enqueueReplaceState(t,t.state,null)}function xa(e,t){var n=t;if("ref"in t){n={};for(var a in t)a!=="ref"&&(n[a]=t[a])}if(e=e.defaultProps){n===t&&(n=F({},n));for(var o in e)n[o]===void 0&&(n[o]=e[o])}return n}function lf(e){Ll(e)}function rf(e){console.error(e)}function uf(e){Ll(e)}function fi(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function sf(e,t,n){try{var a=e.onCaughtError;a(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(o){setTimeout(function(){throw o})}}function vu(e,t,n){return n=Hn(n),n.tag=3,n.payload={element:null},n.callback=function(){fi(e,t)},n}function cf(e){return e=Hn(e),e.tag=3,e}function df(e,t,n,a){var o=n.type.getDerivedStateFromError;if(typeof o=="function"){var l=a.value;e.payload=function(){return o(l)},e.callback=function(){sf(t,n,a)}}var i=n.stateNode;i!==null&&typeof i.componentDidCatch=="function"&&(e.callback=function(){sf(t,n,a),typeof o!="function"&&(Xn===null?Xn=new Set([this]):Xn.add(this));var r=a.stack;this.componentDidCatch(a.value,{componentStack:r!==null?r:""})})}function Og(e,t,n,a,o){if(n.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=n.alternate,t!==null&&ha(t,n,o,!0),n=We.current,n!==null){switch(n.tag){case 31:case 13:case 19:return ot===null?Mi():n.alternate===null&&Ue===0&&(Ue=3),n.flags&=-257,n.flags|=65536,n.lanes=o,a===Fl?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([a]):t.add(a),ns(e,a,o)),!1;case 22:return n.flags|=65536,a===Fl?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([a]):n.add(a)),ns(e,a,o)),!1}throw Error(s(435,n.tag))}return ns(e,a,o),Mi(),!1}if($)return t=We.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=o,a!==Br&&(e=Error(s(422),{cause:a}),Bo(Nt(e,n)))):(a!==Br&&(t=Error(s(423),{cause:a}),Bo(Nt(t,n))),e=e.current.alternate,e.flags|=65536,o&=-o,e.lanes|=o,a=Nt(a,n),o=vu(e.stateNode,a,o),Pr(e,o),Ue!==4&&(Ue=2)),!1;var l=Error(s(520),{cause:a});if(l=Nt(l,n),al===null?al=[l]:al.push(l),Ue!==4&&(Ue=2),t===null)return!0;a=Nt(a,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=o&-o,n.lanes|=e,e=vu(n.stateNode,a,e),Pr(n,e),!1;case 1:if(t=n.type,l=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||l!==null&&typeof l.componentDidCatch=="function"&&(Xn===null||!Xn.has(l))))return n.flags|=65536,o&=-o,n.lanes|=o,o=cf(o),df(o,e,n,a),Pr(n,o),!1;break;case 22:if(n.memoizedState!==null)return n.flags|=65536,!1}n=n.return}while(n!==null);return!1}var wu=Error(s(461)),Ge=!1;function Ye(e,t,n,a){t.child=e===null?md(t,null,n,a):wa(t,e.child,n,a)}function ff(e,t,n,a,o){n=n.render;var l=t.ref;if("ref"in a){var i={};for(var r in a)r!=="ref"&&(i[r]=a[r])}else i=a;return ma(t),a=tu(e,t,n,i,l,o),r=nu(),e!==null&&!Ge?(au(e,t,o),wn(e,t,o)):($&&r&&Xl(t),t.flags|=1,Ye(e,t,a,o),t.child)}function hf(e,t,n,a,o){if(e===null){var l=n.type;return typeof l=="function"&&!Ur(l)&&l.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=l,mf(e,t,l,a,o)):(e=Vl(n.type,null,a,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!Eu(e,o)){var i=l.memoizedProps;if(n=n.compare,n=n!==null?n:Do,n(i,a)&&e.ref===t.ref)return wn(e,t,o)}return t.flags|=1,e=hn(l,a),e.ref=t.ref,e.return=t,t.child=e}function mf(e,t,n,a,o){if(e!==null){var l=e.memoizedProps;if(Do(l,a)&&e.ref===t.ref)if(Ge=!1,t.pendingProps=a=l,Eu(e,o))(e.flags&131072)!==0&&(Ge=!0);else return t.lanes=e.lanes,wn(e,t,o)}return bu(e,t,n,a,o)}function pf(e,t,n,a){var o=a.children,l=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((t.flags&128)!==0){if(l=l!==null?l.baseLanes|n:n,e!==null){for(a=t.child=e.child,o=0;a!==null;)o=o|a.lanes|a.childLanes,a=a.sibling;a=o&~l}else a=0,t.child=null;return gf(e,t,l,n,a)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Wl(t,l!==null?l.cachePool:null),l!==null?yd(t,l):Wr(),vd(t);else return a=t.lanes=536870912,gf(e,t,l!==null?l.baseLanes|n:n,n,a)}else l!==null?(Wl(t,l.cachePool),yd(t,l),Gn(),t.memoizedState=null):(e!==null&&Wl(t,null),Wr(),Gn());return Ye(e,t,o,n),t.child}function Wo(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function gf(e,t,n,a,o){var l=Qr();return l=l===null?null:{parent:Be._currentValue,pool:l},t.memoizedState={baseLanes:n,cachePool:l},e!==null&&Wl(t,null),Wr(),vd(t),e!==null&&ha(e,t,a,!0),t.childLanes=o,null}function hi(e,t){return t=mi({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function yf(e,t,n){return wa(t,e.child,null,n),e=hi(t,t.pendingProps),e.flags|=2,Tt(t),t.memoizedState=null,e}function _g(e,t,n){var a=t.pendingProps,o=(t.flags&128)!==0;if(t.flags&=-129,e===null){if($){if(a.mode==="hidden")return e=hi(t,a),t.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},Wo(null,e);if(Fr(t),(e=Ae)?(e=Vh(e,Ut),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:_n!==null?{id:It,overflow:Wt}:null,retryLane:536870912,hydrationErrors:null},n=$c(e),n.return=t,t.child=n,Qe=t,Ae=null)):e=null,e===null)throw Rn(t);return t.lanes=536870912,null}return hi(t,a)}var l=e.memoizedState;if(l!==null){var i=l.dehydrated;if(Fr(t),o)if(t.flags&256)t.flags&=-257,t=yf(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(s(558));else if(Ge||ha(e,t,n,!1),o=(n&e.childLanes)!==0,Ge||o){if(Bn.current===null){if(a=ze,a!==null&&(i=nc(a,n),i!==0&&i!==l.retryLane))throw l.retryLane=i,sa(e,i),gt(a,e,i),wu;Mi()}t=yf(e,t,n)}else e=l.treeContext,Ae=Ht(i.nextSibling),Qe=t,$=!0,Nn=null,Ut=!1,e!==null&&nd(t,e),t=hi(t,a),t.flags|=134221824;return t}return e=hn(e.child,{mode:a.mode,children:a.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Fa(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(s(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function bu(e,t,n,a,o){return ma(t),n=tu(e,t,n,a,void 0,o),a=nu(),e!==null&&!Ge?(au(e,t,o),wn(e,t,o)):($&&a&&Xl(t),t.flags|=1,Ye(e,t,n,o),t.child)}function vf(e,t,n,a,o,l){return ma(t),t.updateQueue=null,n=bd(t,a,n,o),wd(e),a=nu(),e!==null&&!Ge?(au(e,t,l),wn(e,t,l)):($&&a&&Xl(t),t.flags|=1,Ye(e,t,n,l),t.child)}function wf(e,t,n,a,o){if(ma(t),t.stateNode===null){var l=Ya,i=n.contextType;typeof i=="object"&&i!==null&&(l=Ie(i)),l=new n(a,l),t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,l.updater=yu,t.stateNode=l,l._reactInternals=t,l=t.stateNode,l.props=a,l.state=t.memoizedState,l.refs={},Zr(t),i=n.contextType,l.context=typeof i=="object"&&i!==null?Ie(i):Ya,l.state=t.memoizedState,i=n.getDerivedStateFromProps,typeof i=="function"&&(gu(t,n,i,a),l.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(i=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),i!==l.state&&yu.enqueueReplaceState(l,l.state,null),Xo(t,a,l,o),Qo(),l.state=t.memoizedState),typeof l.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){l=t.stateNode;var r=t.memoizedProps,c=xa(n,r);l.props=c;var y=l.context,b=n.contextType;i=Ya,typeof b=="object"&&b!==null&&(i=Ie(b));var k=n.getDerivedStateFromProps;b=typeof k=="function"||typeof l.getSnapshotBeforeUpdate=="function",r=t.pendingProps!==r,b||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(r||y!==i)&&of(t,l,a,i),Dn=!1;var p=t.memoizedState;l.state=p,Xo(t,a,l,o),Qo(),y=t.memoizedState,r||p!==y||Dn?(typeof k=="function"&&(gu(t,n,k,a),y=t.memoizedState),(c=Dn||af(t,n,c,a,p,y,i))?(b||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=y),l.props=a,l.state=y,l.context=i,a=c):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{l=t.stateNode,Kr(e,t),i=t.memoizedProps,b=xa(n,i),l.props=b,k=t.pendingProps,p=l.context,y=n.contextType,c=Ya,typeof y=="object"&&y!==null&&(c=Ie(y)),r=n.getDerivedStateFromProps,(y=typeof r=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(i!==k||p!==c)&&of(t,l,a,c),Dn=!1,p=t.memoizedState,l.state=p,Xo(t,a,l,o),Qo();var w=t.memoizedState;i!==k||p!==w||Dn||e!==null&&e.dependencies!==null&&Pl(e.dependencies)?(typeof r=="function"&&(gu(t,n,r,a),w=t.memoizedState),(b=Dn||af(t,n,b,a,p,w,c)||e!==null&&e.dependencies!==null&&Pl(e.dependencies))?(y||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(a,w,c),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(a,w,c)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||i===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=w),l.props=a,l.state=w,l.context=c,a=b):(typeof l.componentDidUpdate!="function"||i===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),a=!1)}return l=a,Fa(e,t),a=(t.flags&128)!==0,l||a?(l=t.stateNode,n=a&&typeof n.getDerivedStateFromError!="function"?null:l.render(),t.flags|=1,e!==null&&a?(t.child=wa(t,e.child,null,o),t.child=wa(t,null,n,o)):Ye(e,t,n,o),t.memoizedState=l.state,e=t.child):e=wn(e,t,o),e}function bf(e,t,n,a){return da(),t.flags|=256,Ye(e,t,n,a),t.child}var xu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Tu(e){return{baseLanes:e,cachePool:ud()}}function Su(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=kt),e}function xf(e,t,n){var a=t.pendingProps,o=!1,l=(t.flags&128)!==0,i;if((i=l)||(i=e!==null&&e.memoizedState===null?!1:(Je.current&2)!==0),i&&(o=!0,t.flags&=-129),i=(t.flags&32)!==0,t.flags&=-33,e===null){if($){if(o?Ln(t):Gn(),(e=Ae)?(e=Vh(e,Ut),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:_n!==null?{id:It,overflow:Wt}:null,retryLane:536870912,hydrationErrors:null},n=$c(e),n.return=t,t.child=n,Qe=t,Ae=null)):e=null,e===null)throw Rn(t);return Ts(e)?t.lanes=32:t.lanes=536870912,null}return l=a.children,a=a.fallback,o?(Gn(),o=t.mode,l=mi({mode:"hidden",children:l},o),a=ca(a,o,n,null),l.return=t,a.return=t,l.sibling=a,t.child=l,a=t.child,a.memoizedState=Tu(n),a.childLanes=Su(e,i,n),t.memoizedState=xu,Wo(null,a)):(Ln(t),Cu(t,l))}var r=e.memoizedState;if(r!==null){var c=r.dehydrated;if(c!==null)return Ng(e,t,l,i,a,c,r,n)}return o?(Gn(),o=a.fallback,l=t.mode,r=e.child,c=r.sibling,a=hn(r,{mode:"hidden",children:a.children}),a.subtreeFlags=r.subtreeFlags&1206910976,c!==null?o=hn(c,o):(o=ca(o,l,n,null),o.flags|=2),o.return=t,a.return=t,a.sibling=o,t.child=a,Wo(null,a),a=t.child,o=e.child.memoizedState,o===null?o=Tu(n):(l=o.cachePool,l!==null?(r=Be._currentValue,l=l.parent!==r?{parent:r,pool:r}:l):l=ud(),o={baseLanes:o.baseLanes|n,cachePool:l}),a.memoizedState=o,a.childLanes=Su(e,i,n),t.memoizedState=xu,Wo(e.child,a)):(Ln(t),n=e.child,e=n.sibling,n=hn(n,{mode:"visible",children:a.children}),n.return=t,n.sibling=null,e!==null&&(i=t.deletions,i===null?(t.deletions=[e],t.flags|=16):i.push(e)),t.child=n,t.memoizedState=null,n)}function Cu(e,t){return t=mi({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function mi(e,t){return e=ft(22,e,null,t),e.lanes=0,e}function pi(e,t,n){return wa(t,e.child,null,n),e=Cu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ng(e,t,n,a,o,l,i,r){if(n)return t.flags&256?(Ln(t),t.flags&=-257,pi(e,t,r)):t.memoizedState!==null?(Gn(),t.child=e.child,t.flags|=128,null):(Gn(),l=o.fallback,i=t.mode,o=mi({mode:"visible",children:o.children},i),l=ca(l,i,r,null),l.flags|=2,o.return=t,l.return=t,o.sibling=l,t.child=o,wa(t,e.child,null,r),o=t.child,o.memoizedState=Tu(r),o.childLanes=Su(e,a,r),t.memoizedState=xu,Wo(null,o));if(Ln(t),Ts(l)){if(a=l.nextSibling&&l.nextSibling.dataset,a)var c=a.dgst;return a=c,a!==""&&(o=Error(s(419)),o.stack="",o.digest=a,Bo({value:o,source:null,stack:null})),pi(e,t,r)}if(Ge||ha(e,t,r,!1),a=(r&e.childLanes)!==0,Ge||a){if(Bn.current!==null)return pi(e,t,r);if(a=ze,a!==null&&(o=nc(a,r),o!==0&&o!==i.retryLane))throw i.retryLane=o,sa(e,o),gt(a,e,o),wu;return xs(l)||Mi(),pi(e,t,r)}return xs(l)?(t.flags|=192,t.child=e.child,null):(e=i.treeContext,Ae=Ht(l.nextSibling),Qe=t,$=!0,Nn=null,Ut=!1,e!==null&&nd(t,e),t=Cu(t,o.children),t.flags|=134221824,t)}function Tf(e,t,n){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),Kl(e.return,t,n)}function Sf(e){for(var t=null;e!==null;){var n=e.alternate;n!==null&&ni(n)===null&&(t=e),e=e.sibling}return t}function gi(e,t,n,a,o,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:o,treeForkCount:l}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=a,i.tail=n,i.tailMode=o,i.treeForkCount=l)}function ku(e){var t=e.child;for(e.child=null;t!==null;){var n=t.sibling;t.sibling=e.child,e.child=t,t=n}}function zu(e,t,n){var a=t.pendingProps,o=a.revealOrder,l=a.tail;a=a.children;var i=Je.current;if(t.flags&128)return Zo(t,i),null;var r=(i&2)!==0;if(r?(i=i&1|2,t.flags|=128):i&=1,Zo(t,i),o==="backwards"&&e!==null?(ku(e),Ye(e,t,a,n),ku(e)):Ye(e,t,a,n),a=$?jo:0,!r&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Tf(e,n,t);else if(e.tag===19)Tf(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(o){case"backwards":n=Sf(t.child),n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null,ku(t)),gi(t,!0,o,null,l,a);break;case"unstable_legacy-backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&ni(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}gi(t,!0,n,null,l,a);break;case"together":gi(t,!1,null,null,void 0,a);break;case"independent":t.memoizedState=null;break;default:n=Sf(t.child),n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),gi(t,!1,o,n,l,a)}return t.child}function Cf(e,t,n){var a=t.pendingProps;return Mn(t,t.type,a.value),Ye(e,t,a.children,n),t.child}function wn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Qn|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(ha(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,n=hn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=hn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Eu(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Pl(e)))}function Rg(e,t,n){switch(t.tag){case 3:xl(t,t.stateNode.containerInfo),Mn(t,Be,e.memoizedState.cache),da();break;case 27:case 5:er(t);break;case 4:xl(t,t.stateNode.containerInfo);break;case 10:Mn(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Fr(t),null;break;case 13:var a=t.memoizedState;if(a!==null){if(a.dehydrated!==null)return Ln(t),t.flags|=128,null;a=ha(e,t,n,!1);var o=t.child.childLanes;return a||(n&o)!==0?xf(e,t,n):(Ln(t),e=wn(e,t,n),e!==null?e.sibling:null)}Ln(t);break;case 19:if(t.flags&128)return zu(e,t,n);if(o=(e.flags&128)!==0,a=(n&t.childLanes)!==0,a||(ha(e,t,n,!1),a=(n&t.childLanes)!==0),o){if(a)return zu(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),Zo(t,Je.current),a)break;return null;case 22:return t.lanes=0,pf(e,t,n,t.pendingProps);case 24:Mn(t,Be,e.memoizedState.cache)}return wn(e,t,n)}function kf(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ge=!0;else{if(!Eu(e,n)&&(t.flags&128)===0)return Ge=!1,Rg(e,t,n);Ge=(e.flags&131072)!==0}else Ge=!1,$&&(t.flags&1048576)!==0&&td(t,jo,t.index);switch(t.lanes=0,t.tag){case 16:e:{var a=t.pendingProps;if(e=ya(t.elementType),t.type=e,typeof e=="function")Ur(e)?(a=xa(e,a),t.tag=1,t=wf(null,t,e,a,n)):(t.tag=0,t=bu(null,t,e,a,n));else{if(e!=null){var o=e.$$typeof;if(o===R){t.tag=11,t=ff(null,t,e,a,n);break e}else if(o===de){t.tag=14,t=hf(null,t,e,a,n);break e}else if(o===De){t.tag=10,t.type=e,t=Cf(null,t,n);break e}}throw t=me(e)||e,Error(s(306,t,""))}}return t;case 0:return bu(e,t,t.type,t.pendingProps,n);case 1:return a=t.type,o=xa(a,t.pendingProps),wf(e,t,a,o,n);case 3:e:{if(xl(t,t.stateNode.containerInfo),e===null)throw Error(s(387));a=t.pendingProps;var l=t.memoizedState;o=l.element,Kr(e,t),Xo(t,a,null,n);var i=t.memoizedState;if(a=i.cache,Mn(t,Be,a),a!==l.cache&&qr(t,[Be],n,!0),Qo(),a=i.element,l.isDehydrated)if(l={element:a,isDehydrated:!1,cache:i.cache},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){t=bf(e,t,a,n);break e}else if(a!==o){o=Nt(Error(s(424)),t),Bo(o),t=bf(e,t,a,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ae=Ht(e.firstChild),Qe=t,$=!0,Nn=null,Ut=!0,n=md(t,null,a,n),t.child=n;n;)n.flags=n.flags&-3|134221824,n=n.sibling}else{if(da(),a===o){t=wn(e,t,n);break e}Ye(e,t,a,n)}t=t.child}return t;case 26:return Fa(e,t),e===null?(n=Wh(t.type,null,t.pendingProps,null))?t.memoizedState=n:$||(t.stateNode=Oh(t.type,t.pendingProps,kn.current,t)):t.memoizedState=Wh(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return er(t),e===null&&$&&(a=t.stateNode=Zh(t.type,t.pendingProps,kn.current),Qe=t,Ut=!0,o=Ae,Pn(t.type)?(Ss=o,Ae=Ht(a.firstChild)):Ae=o),Ye(e,t,t.pendingProps.children,n),Fa(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&$&&((o=a=Ae)&&(a=zy(a,t.type,t.pendingProps,Ut),a!==null?(t.stateNode=a,Qe=t,Ae=Ht(a.firstChild),Ut=!1,o=!0):o=!1),o||Rn(t)),er(t),o=t.type,l=t.pendingProps,i=e!==null?e.memoizedProps:null,a=l.children,ms(o,l)?a=null:i!==null&&ms(o,i)&&(t.flags|=32),t.memoizedState!==null&&(o=tu(e,t,xg,null,null,n),yo._currentValue=o),Fa(e,t),Ye(e,t,a,n),t.child;case 6:return e===null&&$&&((e=n=Ae)&&(n=Ey(n,t.pendingProps,Ut),n!==null?(t.stateNode=n,Qe=t,Ae=null,e=!0):e=!1),e||Rn(t)),null;case 13:return xf(e,t,n);case 4:return xl(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=wa(t,null,a,n):Ye(e,t,a,n),t.child;case 11:return ff(e,t,t.type,t.pendingProps,n);case 7:return a=t.pendingProps,Fa(e,t),Ye(e,t,a,n),t.child;case 8:return Ye(e,t,t.pendingProps.children,n),t.child;case 12:return Ye(e,t,t.pendingProps.children,n),t.child;case 10:return Cf(e,t,n);case 9:return o=t.type._context,a=t.pendingProps.children,ma(t),o=Ie(o),a=a(o),t.flags|=1,Ye(e,t,a,n),t.child;case 14:return hf(e,t,t.type,t.pendingProps,n);case 15:return mf(e,t,t.type,t.pendingProps,n);case 19:return zu(e,t,n);case 31:return _g(e,t,n);case 22:return pf(e,t,n,t.pendingProps);case 24:return ma(t),a=Ie(Be),e===null?(o=Qr(),o===null&&(o=ze,l=Yr(),o.pooledCache=l,l.refCount++,l!==null&&(o.pooledCacheLanes|=n),o=l),t.memoizedState={parent:a,cache:o},Zr(t),Mn(t,Be,o)):((e.lanes&n)!==0&&(Kr(e,t),Xo(t,null,null,n),Qo()),o=e.memoizedState,l=t.memoizedState,o.parent!==a?(o={parent:a,cache:a},t.memoizedState=o,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=o),Mn(t,Be,a)):(a=l.cache,Mn(t,Be,a),a!==o.cache&&qr(t,[Be],n,!0))),Ye(e,t,t.pendingProps.children,n),t.child;case 30:return t.stateNode===null&&(t.stateNode={autoName:null,paired:null,clones:null,ref:null}),a=t.pendingProps,a.name!=null&&a.name!=="auto"?t.flags|=e===null?18882560:18874368:$&&Xl(t),e!==null&&e.memoizedProps.name!==a.name?t.flags|=4194816:Fa(e,t),Ye(e,t,a.children,n),t.child;case 29:throw t.pendingProps}throw Error(s(156,t.tag))}function bn(e){e.flags|=4}function Au(e,t,n,a,o){var l;if((l=(e.mode&32)!==0)&&(l=n===null?em(t,a):em(t,a)&&(a.src!==n.src||a.srcSet!==n.srcSet)),l){if(e.flags|=16777216,(o&335544128)===o)if(e.stateNode.complete)e.flags|=8192;else if(ih())e.flags|=8192;else throw va=Fl,Xr}else e.flags&=-16777217}function zf(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!tm(t))if(ih())e.flags|=8192;else throw va=Fl,Xr}function yi(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?$s():536870912,e.lanes|=t,ao|=t)}function Jo(e,t){if(!$)switch(e.tailMode){case"visible":break;case"collapsed":for(var n=e.tail,a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null;break;default:for(t=e.tail,n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null}}function Oe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,a|=o.subtreeFlags&1206910976,a|=o.flags&1206910976,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,a|=o.subtreeFlags,a|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=a,e.childLanes=n,t}function Mg(e,t,n){var a=t.pendingProps;switch(jr(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Oe(t),null;case 1:return Oe(t),null;case 3:return n=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),gn(Be),Oa(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Xa(t)?bn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Lr())),Oe(t),null;case 26:var o=t.type,l=t.memoizedState;return e===null?(bn(t),l!==null?(Oe(t),zf(t,l)):(Oe(t),Au(t,o,null,a,n))):l?l!==e.memoizedState?(bn(t),Oe(t),zf(t,l)):(Oe(t),t.flags&=-16777217):(e=e.memoizedProps,e!==a&&bn(t),Oe(t),Au(t,o,e,a,n)),null;case 27:if(Tl(t),n=kn.current,o=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&bn(t);else{if(!a){if(t.stateNode===null)throw Error(s(166));return Oe(t),t.subtreeFlags&=-33554433,null}e=Kt.current,Xa(t)?ad(t):(e=Zh(o,a,n),t.stateNode=e,bn(t))}return Oe(t),t.subtreeFlags&=-33554433,null;case 5:if(Tl(t),o=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&bn(t);else{if(!a){if(t.stateNode===null)throw Error(s(166));return Oe(t),t.subtreeFlags&=-33554433,null}if(l=Kt.current,Xa(t))ad(t);else{var i=ul(kn.current);switch(l){case 1:l=i.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:l=i.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":l=i.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":l=i.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":l=i.createElement("div"),l.innerHTML="<script><\/script>",l=l.removeChild(l.firstChild);break;case"select":l=typeof a.is=="string"?i.createElement("select",{is:a.is}):i.createElement("select"),a.multiple?l.multiple=!0:a.size&&(l.size=a.size);break;default:l=typeof a.is=="string"?i.createElement(o,{is:a.is}):i.createElement(o)}}l[Pe]=t,l[dt]=a;e:for(i=t.child;i!==null;){if(i.tag===5||i.tag===6)l.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}t.stateNode=l;e:switch($e(l,o,a),o){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&bn(t)}}return Oe(t),t.subtreeFlags&=-33554433,Au(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&bn(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(s(166));if(e=kn.current,Xa(t)){if(e=t.stateNode,n=t.memoizedProps,a=null,o=Qe,o!==null)switch(o.tag){case 27:case 5:a=o.memoizedProps}e[Pe]=t,e=!!(e.nodeValue===n||a!==null&&a.suppressHydrationWarning===!0||kh(e.nodeValue,n)),e||Rn(t,!0)}else e=ul(e).createTextNode(a),e[Pe]=t,t.stateNode=e}return Oe(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(a=Xa(t),n!==null){if(e===null){if(!a)throw Error(s(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[Pe]=t}else da(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Oe(t),e=!1}else n=Lr(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Tt(t),t):(Tt(t),null);if((t.flags&128)!==0)throw Error(s(558))}return Oe(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(o=Xa(t),a!==null&&a.dehydrated!==null){if(e===null){if(!o)throw Error(s(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(s(317));o[Pe]=t}else da(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Oe(t),o=!1}else o=Lr(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=o),o=!0;if(!o)return t.flags&256?(Tt(t),t):(Tt(t),null)}return Tt(t),(t.flags&128)!==0?(t.lanes=n,t):(n=a!==null,e=e!==null&&e.memoizedState!==null,n&&(a=t.child,o=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(o=a.alternate.memoizedState.cachePool.pool),l=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(l=a.memoizedState.cachePool.pool),l!==o&&(a.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),yi(t,t.updateQueue),Oe(t),null);case 4:return Oa(),e===null&&ss(t.stateNode.containerInfo),t.flags|=67108864,Oe(t),null;case 10:return gn(t.type),Oe(t),null;case 19:if($r(t),a=t.memoizedState,a===null)return Oe(t),null;if(o=(t.flags&128)!==0,l=a.rendering,l===null)if(o)Jo(a,!1);else{if(Ue!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(l=ni(e),l!==null){for(t.flags|=128,Jo(a,!1),e=l.updateQueue,t.updateQueue=e,yi(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Fc(n,e),n=n.sibling;return Zo(t,Je.current&1|2),$&&mn(t,a.treeForkCount),t.child}e=e.sibling}a.tail!==null&&yt()>Oi&&(t.flags|=128,o=!0,Jo(a,!1),t.lanes=4194304)}else{if(!o)if(e=ni(l),e!==null){if(t.flags|=128,o=!0,e=e.updateQueue,t.updateQueue=e,yi(t,e),Jo(a,!0),a.tail===null&&a.tailMode!=="collapsed"&&a.tailMode!=="visible"&&!l.alternate&&!$)return Oe(t),null}else 2*yt()-a.renderingStartTime>Oi&&n!==536870912&&(t.flags|=128,o=!0,Jo(a,!1),t.lanes=4194304);a.isBackwards?(l.sibling=t.child,t.child=l):(e=a.last,e!==null?e.sibling=l:t.child=l,a.last=l)}if(a.tail!==null){e=a.tail;e:{for(n=e;n!==null;){if(n.alternate!==null){n=!1;break e}n=n.sibling}n=!0}return a.rendering=e,a.tail=e.sibling,a.renderingStartTime=yt(),e.sibling=null,l=Je.current,l=o?l&1|2:l&1,a.tailMode==="visible"||a.tailMode==="collapsed"||!n||$?Zo(t,l):(n=l,Ee(We,t),Ee(Je,n),ot===null&&(ot=t)),$&&mn(t,a.treeForkCount),e}return Oe(t),null;case 22:case 23:return Tt(t),Jr(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(n&536870912)!==0&&(t.flags&128)===0&&(Oe(t),t.subtreeFlags&6&&(t.flags|=8192)):Oe(t),n=t.updateQueue,n!==null&&yi(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==n&&(t.flags|=2048),e!==null&&Ke(ga),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),gn(Be),Oe(t),null;case 25:return null;case 30:return t.flags|=33554432,Oe(t),null}throw Error(s(156,t.tag))}function Ug(e,t){switch(jr(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return gn(Be),Oa(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Tl(t),null;case 31:if(t.memoizedState!==null){if(Tt(t),t.alternate===null)throw Error(s(340));da()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Tt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));da()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return $r(t),e=t.flags,e&65536?(t.flags=e&-65537|128,e=t.memoizedState,e!==null&&(e.rendering=null,e.tail=null),t.flags|=4,t):null;case 4:return Oa(),null;case 10:return gn(t.type),null;case 22:case 23:return Tt(t),Jr(),e!==null&&Ke(ga),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return gn(Be),null;case 25:return null;default:return null}}function Ef(e,t){switch(jr(t),t.tag){case 3:gn(Be),Oa();break;case 26:case 27:case 5:Tl(t);break;case 4:Oa();break;case 31:t.memoizedState!==null&&Tt(t);break;case 13:Tt(t);break;case 19:$r(t);break;case 10:gn(t.type);break;case 22:case 23:Tt(t),Jr(),e!==null&&Ke(ga);break;case 24:gn(Be)}}function Fo(e,t){try{var n=t.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var o=a.next;n=o;do{if((n.tag&e)===e){a=void 0;var l=n.create,i=n.inst;a=l(),i.destroy=a}n=n.next}while(n!==o)}}catch(r){xe(t,t.return,r)}}function qn(e,t,n){try{var a=t.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var l=o.next;a=l;do{if((a.tag&e)===e){var i=a.inst,r=i.destroy;if(r!==void 0){i.destroy=void 0,o=t;var c=n,y=r;try{y()}catch(b){xe(o,c,b)}}}a=a.next}while(a!==l)}}catch(b){xe(t,t.return,b)}}function Af(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{gd(t,n)}catch(a){xe(e,e.return,a)}}}function Of(e,t,n){n.props=xa(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(a){xe(e,t,a)}}function Jt(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:var o=e.stateNode,l=dn(e.memoizedProps,o);(o.ref===null||o.ref.name!==l)&&(o.ref=Hh(l)),a=o.ref;break;case 7:if(e.stateNode===null){var i=new Et(e);x(e.child,!1,Cy,i,void 0,void 0),e.stateNode=i}a=e.stateNode;break;default:a=e.stateNode}typeof n=="function"?e.refCleanup=n(a):n.current=a}}catch(r){xe(e,t,r)}}function Fe(e,t){var n=e.ref,a=e.refCleanup;if(n!==null)if(typeof a=="function")try{a()}catch(o){xe(e,t,o)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(o){xe(e,t,o)}else n.current=null}function vi(e,t){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&t!==null)for(var n=0;n<t.length;n++)Yh(e.stateNode,t[n])}function _f(e){for(var t=e.return;t!==null&&(_u(t)&&Yh(e.stateNode,t.stateNode),!Ou(t));)t=t.return}function $o(e){for(var t=e.return;t!==null&&(_u(t)&&ky(e.stateNode,t.stateNode),!Ou(t));)t=t.return}function Ou(e){return e.tag===5||e.tag===3||e.tag===27}function _u(e){return e&&e.tag===7&&e.stateNode!==null}function Nu(e){var t=e.type,n=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&a.focus();break e;case"img":n.src?a.src=n.src:n.srcSet&&(a.srcset=n.srcSet)}}catch(o){xe(e,e.return,o)}}function Ru(e,t,n){try{var a=e.stateNode;iy(a,e.type,n,t),a[dt]=t}catch(o){xe(e,e.return,o)}}function Nf(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Pn(e.type)||e.tag===4}function Mu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Nf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Pn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Uu(e,t,n,a){var o=e.tag;if(o===5||o===6)o=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(o,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(o),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Pt)),vi(e,a),pe=!0;else if(o!==4&&(o===27&&(vi(e,a),a=null,Pn(e.type)&&(n=e.stateNode,t=null)),e=e.child,e!==null))for(Uu(e,t,n,a),e=e.sibling;e!==null;)Uu(e,t,n,a),e=e.sibling}function wi(e,t,n,a){var o=e.tag;if(o===5||o===6)o=e.stateNode,t?n.insertBefore(o,t):n.appendChild(o),vi(e,a),pe=!0;else if(o!==4&&(o===27&&(vi(e,a),a=null,Pn(e.type)&&(n=e.stateNode)),e=e.child,e!==null))for(wi(e,t,n,a),e=e.sibling;e!==null;)wi(e,t,n,a),e=e.sibling}function Rf(e){var t=e.stateNode,n=e.memoizedProps;try{for(var a=e.type,o=t.attributes;o.length;)t.removeAttributeNode(o[0]);$e(t,a,n),t[Pe]=e,t[dt]=n}catch(l){xe(e,e.return,l)}}var bi=!1,St=null;function Mf(e){(e.tag===30||(e.subtreeFlags&33554432)!==0)&&(bi=!0)}var Ft=null;function Uf(){var e=Ft;return Ft=null,e}var ht=0;function $a(e,t,n,a,o){return ht=0,Df(e.child,t,n,a,o)}function Df(e,t,n,a,o){for(var l=!1;e!==null;){if(e.tag===5){var i=e.stateNode;if(a!==null){var r=ys(i);a.push(r),r.view&&(l=!0)}else l||ys(i).view&&(l=!0);bi=!0,Uh(i,ht===0?t:t+"_"+ht,n),ht++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&o||Df(e.child,t,n,a,o)&&(l=!0));e=e.sibling}return l}function $t(e,t){for(;e!==null;)e.tag===5?Dh(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&t||$t(e.child,t)),e=e.sibling}function xi(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(xi(e),e.tag===30&&(e.flags&18874368)!==0&&e.stateNode.paired)){var t=e.memoizedProps;if(t.name==null||t.name==="auto")throw Error(s(544));var n=t.name;t=fn(t.default,t.share),t!=="none"&&($a(e,n,t,null,!1)||$t(e.child,!1))}e=e.sibling}}function Du(e,t){if(e.tag===30){var n=e.stateNode,a=e.memoizedProps,o=dn(a,n),l=fn(a.default,n.paired?a.share:a.enter);l!=="none"?$a(e,o,l,null,!1)?(xi(e),n.paired||t||ro(e,a.onEnter)):$t(e.child,!1):xi(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Du(e,t),e=e.sibling;else xi(e)}function Hu(e){if(St!==null&&St.size!==0){var t=St;if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var n=e.memoizedProps,a=n.name;if(a!=null&&a!=="auto"){var o=t.get(a);if(o!==void 0){var l=fn(n.default,n.share);if(l!=="none"&&($a(e,a,l,null,!1)?(l=e.stateNode,o.paired=l,l.paired=o,ro(e,n.onShare)):$t(e.child,!1)),t.delete(a),t.size===0)break}}}Hu(e)}e=e.sibling}}}function ju(e){if(e.tag===30){var t=e.memoizedProps,n=dn(t,e.stateNode),a=St!==null?St.get(n):void 0,o=fn(t.default,a!==void 0?t.share:t.exit);o!=="none"&&($a(e,n,o,null,!1)?a!==void 0?(o=e.stateNode,a.paired=o,o.paired=a,St.delete(n),ro(e,t.onShare)):ro(e,t.onExit):$t(e.child,!1)),St!==null&&Hu(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)ju(e),e=e.sibling;else St!==null&&Hu(e)}function Hf(e){for(e=e.child;e!==null;){if(e.tag===30){var t=e.memoizedProps,n=dn(t,e.stateNode);t=fn(t.default,t.update),e.flags&=-5,t!=="none"&&$a(e,n,t,e.memoizedState=[],!1)}else(e.subtreeFlags&33554432)!==0&&Hf(e);e=e.sibling}}function Bu(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var t=e.stateNode;t.paired!==null&&(t.paired=null,$t(e.child,!1))}Bu(e)}e=e.sibling}}function Ti(e){if(e.tag===30)e.stateNode.paired=null,$t(e.child,!1),Bu(e);else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Ti(e),e=e.sibling;else Bu(e)}function jf(e){for(e=e.child;e!==null;)e.tag===30?$t(e.child,!1):(e.subtreeFlags&33554432)!==0&&jf(e),e=e.sibling}function Lu(e,t,n,a,o,l,i){for(var r=!1;t!==null;){if(t.tag===5){var c=t.stateNode;if(l!==null&&ht<l.length){var y=l[ht],b=ys(c);(y.view||b.view)&&(r=!0);var k;if(k=(e.flags&4)===0)if(b.clip)k=!0;else{k=y.rect;var p=b.rect;k=k.y!==p.y||k.x!==p.x||k.height!==p.height||k.width!==p.width}k&&(e.flags|=4),b.abs?b=!y.abs:(y=y.rect,b=b.rect,b=y.height!==b.height||y.width!==b.width),b&&(e.flags|=32)}else e.flags|=32;(e.flags&4)!==0&&Uh(c,ht===0?n:n+"_"+ht,o),r&&(e.flags&4)!==0||(Ft===null&&(Ft=[]),Ft.push(c,ht===0?a:a+"_"+ht,t.memoizedProps)),ht++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&i?e.flags|=t.flags&32:Lu(e,t.child,n,a,o,l,i)&&(r=!0));t=t.sibling}return r}function Bf(e,t){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,a=e.stateNode,o=dn(n,a),l=fn(n.default,n.update),i;i=e.memoizedState,e.memoizedState=null,a=e;var r=e.child;ht=0,o=Lu(a,r,o,o,l,i,!1),(e.flags&4)!==0&&o&&ro(e,n.onUpdate)}else(e.subtreeFlags&33554432)!==0&&Bf(e);e=e.sibling}}var Xe=!1,we=!1,en=!1,Gu=!1,Lf=typeof WeakSet=="function"?WeakSet:Set,Ze=null,tn=!1,el=!1,Si=!1,qu=!1;function Dg(e,t,n){if(e=e.containerInfo,fs=vo,e=Yc(e),Er(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var l=o.anchorOffset,i=o.focusNode;o=o.focusOffset;try{a.nodeType,i.nodeType}catch{a=null;break e}var r=0,c=-1,y=-1,b=0,k=0,p=e,w=null;t:for(;;){for(var O;p!==a||l!==0&&p.nodeType!==3||(c=r+l),p!==i||o!==0&&p.nodeType!==3||(y=r+o),p.nodeType===3&&(r+=p.nodeValue.length),(O=p.firstChild)!==null;)w=p,p=O;for(;;){if(p===e)break t;if(w===a&&++b===l&&(c=r),w===i&&++k===o&&(y=r),(O=p.nextSibling)!==null)break;p=w,w=p.parentNode}p=O}a=c===-1||y===-1?null:{start:c,end:y}}else a=null}a=a||{start:0,end:0}}else a=null;for(hs={focusedElem:e,selectionRange:a},vo=!1,n=(n&335544064)===n,Ze=t,t=n?9270:1024;Ze!==null;){if(e=Ze,n&&(a=e.deletions,a!==null))for(l=0;l<a.length;l++)n&&ju(a[l]);if(e.alternate===null&&(e.flags&2)!==0)n&&Mf(e),Ci(n);else{if(e.tag===22){if(a=e.alternate,e.memoizedState!==null){a!==null&&a.memoizedState===null&&n&&ju(a),Ci(n);continue}else if(a!==null&&a.memoizedState!==null){n&&Mf(e),Ci(n);continue}}a=e.child,(e.subtreeFlags&t)!==0&&a!==null?(a.return=e,Ze=a):(n&&Hf(e),Ci(n))}}St=null}function Ci(e){for(;Ze!==null;){var t=Ze,n=e,a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 15:break;case 1:if((o&1024)!==0&&a!==null){n=void 0,o=a.memoizedProps,a=a.memoizedState;var l=t.stateNode;try{var i=xa(t.type,o);n=l.getSnapshotBeforeUpdate(i,a),l.__reactInternalSnapshotBeforeUpdate=n}catch(r){xe(t,t.return,r)}}break;case 3:if((o&1024)!==0){if(a=t.stateNode.containerInfo,n=a.nodeType,n===9)bs(a);else if(n===1)switch(a.nodeName){case"HEAD":case"HTML":case"BODY":bs(a);break;default:a.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:n&&a!==null&&(n=dn(a.memoizedProps,a.stateNode),o=t.memoizedProps,o=fn(o.default,o.update),o!=="none"&&$a(a,n,o,a.memoizedState=[],!0));break;default:if((o&1024)!==0)throw Error(s(163))}if(a=t.sibling,a!==null){a.return=t.return,Ze=a;break}Ze=t.return}}function Gf(e,t,n){var a=n.flags;switch(n.tag){case 0:case 11:case 15:nn(e,n),a&4&&Fo(5,n);break;case 1:if(nn(e,n),a&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(i){xe(n,n.return,i)}else{var o=xa(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(o,t,e.__reactInternalSnapshotBeforeUpdate)}catch(i){xe(n,n.return,i)}}a&64&&Af(n),a&512&&Jt(n,n.return);break;case 3:if(nn(e,n),a&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{gd(e,t)}catch(i){xe(n,n.return,i)}}break;case 27:t===null&&a&4&&Rf(n);case 26:case 5:nn(e,n),t===null&&a&4&&Nu(n),a&512&&Jt(n,n.return);break;case 12:nn(e,n);break;case 31:nn(e,n),a&4&&Qf(e,n);break;case 13:nn(e,n),a&4&&Xf(e,n),a&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Kg.bind(null,n),Ay(e,n))));break;case 22:if(a=n.memoizedState!==null||Xe,!a){var l=t!==null&&t.memoizedState!==null||we;t=Xe,o=we,Xe=a,(we=l)&&!o?(a=2,(n.subtreeFlags&8772)!==0&&(a|=1),Yt(e,n,a)):nn(e,n),Xe=t,we=o}break;case 30:nn(e,n),a&512&&Jt(n,n.return);break;case 7:a&512&&Jt(n,n.return);default:nn(e,n)}}function Yu(e,t){for(e=e.child;e!==null;)qf(e,t),e=e.sibling}function qf(e,t){switch(e.tag){case 5:case 26:try{var n=e.stateNode;if(t){var a=n.style;typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"}else{var o=e.stateNode,l=e.memoizedProps.style,i=l!=null&&l.hasOwnProperty("display")?l.display:null;o.style.display=i==null||typeof i=="boolean"?"":(""+i).trim()}}catch(c){xe(e,e.return,c)}Vu(e,t);break;case 6:try{e.stateNode.nodeValue=t?"":e.memoizedProps,pe=!0}catch(c){xe(e,e.return,c)}break;case 18:try{var r=e.stateNode;t?Mh(r,!0):Mh(e.stateNode,!1)}catch(c){xe(e,e.return,c)}break;case 22:case 23:e.memoizedState===null&&Yu(e,t);break;default:Yu(e,t)}}function Vu(e,t){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){e:{var n=e,a=t;switch(n.tag){case 4:qf(n,a);break e;case 22:n.memoizedState===null&&Vu(n,a);break e;default:Vu(n,a)}}e=e.sibling}}function Yf(e){var t=e.alternate;t!==null&&(e.alternate=null,Yf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Ol(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ne=null,mt=!1;function Gt(e,t,n){for(n=n.child;n!==null;)Vf(e,t,n),n=n.sibling}function Vf(e,t,n){if(vt&&typeof vt.onCommitFiberUnmount=="function")try{vt.onCommitFiberUnmount(So,n)}catch{}switch(n.tag){case 26:we||Fe(n,t),Gt(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&!we&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:we||Fe(n,t),$o(n);var a=Ne,o=mt;Pn(n.type)&&(Ne=n.stateNode,mt=!1),Gt(e,t,n),Kh(n.stateNode,n.type,n.memoizedProps),Ne=a,mt=o;break;case 5:we||Fe(n,t),$o(n);case 6:if(n.tag===6&&$o(n),a=Ne,o=mt,Ne=null,Gt(e,t,n),Ne=a,mt=o,Ne!==null)if(mt)try{(Ne.nodeType===9?Ne.body:Ne.nodeName==="HTML"?Ne.ownerDocument.body:Ne).removeChild(n.stateNode),pe=!0}catch(l){xe(n,t,l)}else try{Ne.removeChild(n.stateNode),pe=!0}catch(l){xe(n,t,l)}break;case 18:Ne!==null&&(mt?(e=Ne,Rh(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),wo(e)):Rh(Ne,n.stateNode));break;case 4:a=Ne,o=mt,Ne=n.stateNode.containerInfo,mt=!0,Gt(e,t,n),Ne=a,mt=o;break;case 0:case 11:case 14:case 15:qn(2,n,t),we||qn(4,n,t),Gt(e,t,n);break;case 1:we||(Fe(n,t),a=n.stateNode,typeof a.componentWillUnmount=="function"&&Of(n,t,a)),Gt(e,t,n);break;case 21:Gt(e,t,n);break;case 22:we=(a=we)||n.memoizedState!==null,Gt(e,t,n),we=a;break;case 30:Fe(n,t),Gt(e,t,n);break;case 7:we||Fe(n,t),Gt(e,t,n);break;default:Gt(e,t,n)}}function Qf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{wo(e)}catch(n){xe(t,t.return,n)}}}function Xf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{wo(e)}catch(n){xe(t,t.return,n)}}function Hg(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Lf),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Lf),t;default:throw Error(s(435,e.tag))}}function ki(e,t){var n=Hg(e);t.forEach(function(a){if(!n.has(a)){n.add(a);var o=Pg.bind(null,e,a);a.then(o,o)}})}function ut(e,t,n){var a=t.deletions;if(a!==null)for(var o=0;o<a.length;o++){var l=a[o],i=e,r=t,c=r;e:for(;c!==null;){switch(c.tag){case 27:if(Pn(c.type)){Ne=c.stateNode,mt=!1;break e}break;case 5:Ne=c.stateNode,mt=!1;break e;case 3:case 4:Ne=c.stateNode.containerInfo,mt=!0;break e}c=c.return}if(Ne===null)throw Error(s(160));Vf(i,r,l),Ne=null,mt=!1,i=l.alternate,i!==null&&(i.return=null),l.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Zf(t,e,n),t=t.sibling}var qt=null;function Zf(e,t,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(o&4&&(a=e.updateQueue,a=a!==null?a.events:null,a!==null))for(var l=0;l<a.length;l++){var i=a[l];i.ref.impl=i.nextImpl}ut(t,e,n),st(e),o&4&&(qn(3,e,e.return),Fo(3,e),qn(5,e,e.return));break;case 1:ut(t,e,n),st(e),o&512&&(we||a===null||Fe(a,a.return)),o&64&&Xe&&(e=e.updateQueue,e!==null&&(t=e.callbacks,t!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?t:n.concat(t))));break;case 26:if(l=qt,ut(t,e,n),st(e),o&512&&(we||a===null||Fe(a,a.return)),o&4)if(o=a!==null?a.memoizedState:null,n=e.memoizedState,a===null)if(n===null)if(e.stateNode===null)if(Xe)e.stateNode=Oh(e.type,e.memoizedProps,t.containerInfo,e);else{e:{t=e.type,n=e.memoizedProps,o=l.ownerDocument||l;t:switch(t){case"title":a=o.getElementsByTagName("title")[0],(!a||a[zo]||a[Pe]||a.namespaceURI==="http://www.w3.org/2000/svg"||a.hasAttribute("itemprop"))&&(a=o.createElement(t),o.head.insertBefore(a,o.querySelector("head > title"))),$e(a,t,n),a[Pe]=e,Ve(a),t=a;break e;case"link":if(l=$h("link","href",o).get(t+(n.href||""))){for(i=0;i<l.length;i++)if(a=l[i],a.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&a.getAttribute("rel")===(n.rel==null?null:n.rel)&&a.getAttribute("title")===(n.title==null?null:n.title)&&a.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){l.splice(i,1);break t}}a=o.createElement(t),$e(a,t,n),o.head.appendChild(a);break;case"meta":if(l=$h("meta","content",o).get(t+(n.content||""))){for(i=0;i<l.length;i++)if(a=l[i],a.getAttribute("content")===(n.content==null?null:""+n.content)&&a.getAttribute("name")===(n.name==null?null:n.name)&&a.getAttribute("property")===(n.property==null?null:n.property)&&a.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&a.getAttribute("charset")===(n.charSet==null?null:n.charSet)){l.splice(i,1);break t}}a=o.createElement(t),$e(a,t,n),o.head.appendChild(a);break;default:throw Error(s(468,t))}a[Pe]=e,Ve(a),t=a}e.stateNode=t}else Xe||Es(l,e.type,e.stateNode);else e.stateNode=Fh(l,n,e.memoizedProps);else o!==n?(o===null?(t=a.stateNode,t===null||we||t.parentNode.removeChild(t)):o.count--,n===null?Xe||Es(l,e.type,e.stateNode):Fh(l,n,e.memoizedProps)):n===null&&e.stateNode!==null&&Ru(e,e.memoizedProps,a.memoizedProps);break;case 27:ut(t,e,n),st(e),o&512&&(we||a===null||Fe(a,a.return)),a!==null&&o&4&&Ru(e,e.memoizedProps,a.memoizedProps);break;case 5:if(l=en,en=!1,ut(t,e,n),en=l,st(e),o&512&&(we||a===null||Fe(a,a.return)),e.flags&32){t=e.stateNode;try{Da(t,""),pe=!0}catch(b){xe(e,e.return,b)}}o&4&&e.stateNode!=null&&(t=e.memoizedProps,Ru(e,t,a!==null?a.memoizedProps:t)),o&1024&&(Gu=!0);break;case 6:if(ut(t,e,n),st(e),o&4){if(e.stateNode===null)throw Error(s(162));t=e.memoizedProps,n=e.stateNode;try{n.nodeValue=t,pe=!0}catch(b){xe(e,e.return,b)}}break;case 3:if(pe=!1,Gi=null,l=qt,qt=sl(t.containerInfo),ut(t,e,n),qt=l,st(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{wo(t.containerInfo)}catch(b){xe(e,e.return,b)}Gu&&(Gu=!1,Kf(e)),pe=!1;break;case 4:o=en,en=Xe,a=fc(),l=qt,qt=sl(e.stateNode.containerInfo),ut(t,e,n),st(e),qt=l,pe&&el&&(Si=!0),pe=a,en=o;break;case 12:ut(t,e,n),st(e);break;case 31:ut(t,e,n),st(e),o&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,ki(e,t)));break;case 13:ut(t,e,n),st(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Ai=yt()),o&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,ki(e,t)));break;case 22:l=e.memoizedState!==null,i=a!==null&&a.memoizedState!==null;var r=Xe,c=we,y=en;Xe=r||l,en=y||l,we=c||i,ut(t,e,n),we=c,en=y,Xe=r,st(e),o&8192&&(t=e.stateNode,t._visibility=l?t._visibility&-2:t._visibility|1,!l||a===null||i||Xe||we||(t=i||we,n=Xe,a=we,Xe=l||Xe,we=t,Yn(e,2),Xe=n,we=a),!l&&en||Yu(e,l)),o&4&&(t=e.updateQueue,t!==null&&(n=t.retryQueue,n!==null&&(t.retryQueue=null,ki(e,n))));break;case 19:ut(t,e,n),st(e),o&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,ki(e,t)));break;case 30:o&512&&(we||a===null||Fe(a,a.return)),o=fc(),l=el,i=(n&335544064)===n,r=e.memoizedProps,el=i&&fn(r.default,r.update)!=="none",ut(t,e,n),st(e),i&&a!==null&&pe&&(e.flags|=4),el=l,pe=o;break;case 21:break;case 7:o&512&&(we||a===null||Fe(a,a.return)),a&&a.stateNode!==null&&(a.stateNode._fragmentFiber=e);default:ut(t,e,n),st(e)}}function st(e){var t=e.flags;if(t&2){try{for(var n,a=e.return;a!==null;){if(Nf(a)){n=a;break}a=a.return}a=null;for(var o=e.return;o!==null;){if(_u(o)){var l=o.stateNode;a===null?a=[l]:a.push(l)}if(Ou(o))break;o=o.return}var i=a;if(n==null)throw Error(s(160));switch(n.tag){case 27:var r=n.stateNode,c=Mu(e);wi(e,c,r,i);break;case 5:var y=n.stateNode;n.flags&32&&(Da(y,""),n.flags&=-33);var b=Mu(e);wi(e,b,y,i);break;case 3:case 4:var k=n.stateNode.containerInfo,p=Mu(e);Uu(e,p,k,i);break;default:throw Error(s(161))}}catch(w){xe(e,e.return,w)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Kf(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Kf(t),t.tag===5&&t.flags&1024&&(t=t.stateNode,vo=!0,t.reset(),vo=!1),e=e.sibling}}function eo(e,t){if(t.subtreeFlags&9270)for(t=t.child;t!==null;)Pf(t,e),t=t.sibling;else Bf(t)}function Pf(e,t){var n=e.alternate;if(n===null)Du(e,!1);else switch(e.tag){case 3:if(qu=tn=!1,Uf(),eo(t,e),!tn&&!Si){if(e=Ft,e!==null)for(var a=0;a<e.length;a+=3){n=e[a];var o=e[a+1];Dh(n,e[a+2]),n=n.ownerDocument.documentElement,n!==null&&n.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+o+")"})}e=t.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===""&&(e.style.viewTransitionName="none",e.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),qu=!0}Ft=null;break;case 5:eo(t,e);break;case 4:a=tn,tn=!1,eo(t,e),tn&&(Si=!0),tn=a;break;case 22:e.memoizedState===null&&(n.memoizedState!==null?Du(e,!1):eo(t,e));break;case 30:a=tn,o=Uf(),tn=!1,eo(t,e),tn&&(e.flags|=4);var l=e.memoizedProps,i=e.stateNode;t=dn(l,i),i=dn(n.memoizedProps,i);var r=fn(l.default,l.update);r==="none"?t=!1:(l=n.memoizedState,n.memoizedState=null,n=e.child,ht=0,t=Lu(e,n,t,i,r,l,!0),ht!==(l===null?0:l.length)&&(e.flags|=32)),(e.flags&4)!==0&&t?(ro(e,e.memoizedProps.onUpdate),Ft=o):o!==null&&(o.push.apply(o,Ft),Ft=o),tn=(e.flags&32)!==0?!0:a;break;default:eo(t,e)}}function nn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Gf(e,t.alternate,t),t=t.sibling}function Yn(e,t){for(e=e.child;e!==null;){var n=e,a=t;switch(n.tag){case 0:case 11:case 14:case 15:qn(4,n,n.return),Yn(n,a);break;case 1:Fe(n,n.return);var o=n.stateNode;typeof o.componentWillUnmount=="function"&&Of(n,n.return,o),Yn(n,a);break;case 27:(a&2)!==0&&Kh(n.stateNode,n.type,n.memoizedProps);case 5:Fe(n,n.return),n.tag!==5&&n.tag!==27||$o(n),Yn(n,a);break;case 6:$o(n);break;case 26:Fe(n,n.return),o=n.stateNode,n.memoizedState!==null||o===null||we||o.parentNode.removeChild(o),Yn(n,a);break;case 22:n.memoizedState===null&&Yn(n,a);break;case 30:Fe(n,n.return),Yn(n,a);break;case 7:Fe(n,n.return);default:Yn(n,a)}e=e.sibling}}function Yt(e,t,n){for(n=(t.subtreeFlags&8772)!==0?n:n&-2,t=t.child;t!==null;){var a=t.alternate,o=e,l=t,i=l.flags,r=(n&1)!==0;switch(l.tag){case 0:case 11:case 15:Yt(o,l,n),Fo(4,l);break;case 1:if(Yt(o,l,n),a=l,o=a.stateNode,typeof o.componentDidMount=="function")try{o.componentDidMount()}catch(b){xe(a,a.return,b)}if(a=l,o=a.updateQueue,o!==null){var c=a.stateNode;try{var y=o.shared.hiddenCallbacks;if(y!==null)for(o.shared.hiddenCallbacks=null,o=0;o<y.length;o++)pd(y[o],c)}catch(b){xe(a,a.return,b)}}r&&i&64&&Af(l),Jt(l,l.return);break;case 27:(n&2)!==0&&Rf(l);case 5:l.tag!==5&&l.tag!==27||_f(l),Yt(o,l,n),r&&a===null&&i&4&&Nu(l),Jt(l,l.return);break;case 6:_f(l);break;case 26:c=l.stateNode,l.memoizedState!==null||c===null||Xe||Es(sl(c.ownerDocument),l.type,c),Yt(o,l,n),r&&a===null&&i&4&&Nu(l),Jt(l,l.return);break;case 12:Yt(o,l,n);break;case 31:Yt(o,l,n),r&&i&4&&Qf(o,l);break;case 13:Yt(o,l,n),r&&i&4&&Xf(o,l);break;case 22:l.memoizedState===null&&Yt(o,l,n),Jt(l,l.return);break;case 30:Yt(o,l,n),Jt(l,l.return);break;case 7:Jt(l,l.return);default:Yt(o,l,n)}t=t.sibling}}function Qu(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Lo(n))}function Xu(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Lo(e))}function Dt(e,t,n,a){var o=(n&335544064)===n;if(t.subtreeFlags&(o?10262:10256))for(t=t.child;t!==null;)If(e,t,n,a),t=t.sibling;else o&&jf(t)}function If(e,t,n,a){var o=(n&335544064)===n;o&&t.alternate===null&&t.return!==null&&t.return.alternate!==null&&Ti(t);var l=t.flags;switch(t.tag){case 0:case 11:case 15:Dt(e,t,n,a),l&2048&&Fo(9,t);break;case 1:Dt(e,t,n,a);break;case 3:Dt(e,t,n,a),o&&qu&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,e.style.viewTransitionName==="root"&&(e.style.viewTransitionName=""),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName==="none"&&(e.style.viewTransitionName="")),l&2048&&(l=null,t.alternate!==null&&(l=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==l&&(t.refCount++,l!=null&&Lo(l)));break;case 12:if(l&2048){Dt(e,t,n,a),l=t.stateNode;try{var i=t.memoizedProps,r=i.id,c=i.onPostCommit;typeof c=="function"&&c(r,t.alternate===null?"mount":"update",l.passiveEffectDuration,-0)}catch(y){xe(t,t.return,y)}}else Dt(e,t,n,a);break;case 31:Dt(e,t,n,a);break;case 13:Dt(e,t,n,a);break;case 23:break;case 22:i=t.stateNode,r=t.alternate,t.memoizedState!==null?(o&&r!==null&&r.memoizedState===null&&Ti(r),i._visibility&2?Dt(e,t,n,a):tl(e,t)):(o&&r!==null&&r.memoizedState!==null&&Ti(t),i._visibility&2?Dt(e,t,n,a):(i._visibility|=2,to(e,t,n,a,(t.subtreeFlags&10256)!==0||!1))),l&2048&&Qu(r,t);break;case 24:Dt(e,t,n,a),l&2048&&Xu(t.alternate,t);break;case 30:o&&(l=t.alternate,l!==null&&($t(l.child,!0),$t(t.child,!0))),Dt(e,t,n,a);break;default:Dt(e,t,n,a)}}function to(e,t,n,a,o){for(o=o&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var l=e,i=t,r=n,c=a,y=i.flags;switch(i.tag){case 0:case 11:case 15:to(l,i,r,c,o),Fo(8,i);break;case 23:break;case 22:var b=i.stateNode;i.memoizedState!==null?b._visibility&2?to(l,i,r,c,o):tl(l,i):(b._visibility|=2,to(l,i,r,c,o)),o&&y&2048&&Qu(i.alternate,i);break;case 24:to(l,i,r,c,o),o&&y&2048&&Xu(i.alternate,i);break;default:to(l,i,r,c,o)}t=t.sibling}}function tl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,a=t,o=a.flags;switch(a.tag){case 22:tl(n,a),o&2048&&Qu(a.alternate,a);break;case 24:tl(n,a),o&2048&&Xu(a.alternate,a);break;default:tl(n,a)}t=t.sibling}}var Ta=8192;function Sa(e,t,n){if(e.subtreeFlags&Ta)for(e=e.child;e!==null;)Wf(e,t,n),e=e.sibling}function Wf(e,t,n){switch(e.tag){case 26:Sa(e,t,n),e.flags&Ta&&(e.memoizedState!==null?Yy(n,qt,e.memoizedState,e.memoizedProps):(e=e.stateNode,(t&335544128)===t&&am(n,e)));break;case 5:Sa(e,t,n),e.flags&Ta&&(e=e.stateNode,(t&335544128)===t&&am(n,e));break;case 3:case 4:var a=qt;qt=sl(e.stateNode.containerInfo),Sa(e,t,n),qt=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=Ta,Ta=16777216,Sa(e,t,n),Ta=a):Sa(e,t,n));break;case 30:if((e.flags&Ta)!==0&&(a=e.memoizedProps.name,a!=null&&a!=="auto")){var o=e.stateNode;o.paired=null,St===null&&(St=new Map),St.set(a,o)}Sa(e,t,n);break;default:Sa(e,t,n)}}function Jf(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function nl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];Ze=a,$f(a,e)}Jf(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Ff(e),e=e.sibling}function Ff(e){switch(e.tag){case 0:case 11:case 15:nl(e),e.flags&2048&&qn(9,e,e.return);break;case 3:nl(e);break;case 12:nl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,zi(e)):nl(e);break;default:nl(e)}}function zi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];Ze=a,$f(a,e)}Jf(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:qn(8,t,t.return),zi(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,zi(t));break;default:zi(t)}e=e.sibling}}function $f(e,t){for(;Ze!==null;){var n=Ze;switch(n.tag){case 0:case 11:case 15:qn(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var a=n.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Lo(n.memoizedState.cache)}if(a=n.child,a!==null)a.return=n,Ze=a;else e:for(n=e;Ze!==null;){a=Ze;var o=a.sibling,l=a.return;if(Yf(a),a===n){Ze=null;break e}if(o!==null){o.return=l,Ze=o;break e}Ze=l}}}var jg={getCacheForType:function(e){var t=Ie(Be),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Ie(Be).controller.signal}},Bg=typeof WeakMap=="function"?WeakMap:Map,ve=0,ze=null,te=null,oe=0,be=0,Ct=null,Vn=!1,no=!1,Zu=!1,xn=0,Ue=0,Qn=0,Ca=0,Ei=0,kt=0,ao=0,al=null,pt=null,Ku=!1,Ai=0,eh=0,Oi=1/0,_i=null,Xn=null,Re=0,Vt=null,ka=null,an=0,Pu=0,Iu=null,th=null,oo=null,lo=null,io=null,ol=0,Ni=null;function zt(){return(ve&2)!==0&&oe!==0?oe&-oe:B.T!==null?ls():ac()}function nh(){if(kt===0)if((oe&536870912)===0||$){var e=kl;kl<<=1,(kl&3932160)===0&&(kl=262144),kt=e}else kt=536870912;return e=We.current,e!==null&&(e.flags|=32),kt}function ro(e,t){if(t!=null){var n=e.stateNode,a=n.ref;a===null&&(a=n.ref=Hh(dn(e.memoizedProps,n))),lo===null&&(lo=[]),lo.push(t.bind(null,a))}}function gt(e,t,n){(e===ze&&(be===2||be===9)||e.cancelPendingCommit!==null)&&(uo(e,0),Zn(e,oe,kt,!1)),ko(e,n),((ve&2)===0||e!==ze)&&(e===ze&&((ve&2)===0&&(Ca|=n),Ue===4&&Zn(e,oe,kt,!1)),on(e))}function ah(e,t,n){if((ve&6)!==0)throw Error(s(327));var a=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Co(e,t),o=a?qg(e,t):Ju(e,t,!0),l=a;do{if(o===0){no&&!a&&Zn(e,t,0,!1);break}else{if(n=e.current.alternate,l&&!Lg(n)){o=Ju(e,t,!1),l=!1;continue}if(o===2){if(l=t,e.errorRecoveryDisabledLanes&l)var i=0;else i=e.pendingLanes&-536870913,i=i!==0?i:i&536870912?536870912:0;if(i!==0){t=i;e:{var r=e;o=al;var c=r.current.memoizedState.isDehydrated;if(c&&(uo(r,i).flags|=256),i=Ju(r,i,!1),i!==2&&i!==6){if(Zu&&!c){r.errorRecoveryDisabledLanes|=l,Ca|=l,o=4;break e}l=pt,pt=o,l!==null&&(pt===null?pt=l:pt.push.apply(pt,l))}o=i}if(l=!1,o!==2)continue}}if(o===1){uo(e,0),Zn(e,t,0,!0);break}e:{switch(a=e,l=o,l){case 0:case 1:throw Error(s(345));case 4:if((t&4194048)!==t&&(t&62914560)!==t)break;case 6:Zn(a,t,kt,!Vn);break e;case 2:pt=null;break;case 3:case 5:break;default:throw Error(s(329))}if((t&62914560)===t&&(o=Ai+300-yt(),10<o)){if(Zn(a,t,kt,!Vn),El(a,0,!0)!==0)break e;an=t,a.timeoutHandle=gs(oh.bind(null,a,n,pt,_i,Ku,t,kt,Ca,ao,Vn,l,"Throttled",-0,0),o);break e}oh(a,n,pt,_i,Ku,t,kt,Ca,ao,Vn,l,null,-0,0)}}break}while(!0);on(e)}function oh(e,t,n,a,o,l,i,r,c,y,b,k,p,w){e.timeoutHandle=-1;var O=t.subtreeFlags,H=(l&335544064)===l;if(k=null,(H||O&8192||(O&16785408)===16785408)&&(k={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Pt},St=null,Wf(t,l,k),H&&(O=k,H=e.containerInfo,H=(H.nodeType===9?H:H.ownerDocument).__reactViewTransition,H!=null&&(O.count++,O.waitingForViewTransition=!0,O=fl.bind(O),H.finished.then(O,O))),O=(l&62914560)===l?Ai-yt():(l&4194048)===l?eh-yt():0,O=Vy(k,O),O!==null)){an=l,e.cancelPendingCommit=O(fh.bind(null,e,t,l,n,a,o,i,r,c,y,b,k,null,p,w)),Zn(e,l,i,!y);return}fh(e,t,l,n,a,o,i,r,c,y,b,k)}function Lg(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var a=0;a<n.length;a++){var o=n[a],l=o.getSnapshot;o=o.value;try{if(!xt(l(),o))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Zn(e,t,n,a){t=Fs(e,t),t&=~Ei,t&=~Ca,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var o=t;0<o;){var l=31-wt(o),i=1<<l;a[l]=-1,o&=~i}n!==0&&ec(e,n,t)}function Ri(){return(ve&6)===0?(ll(0),!1):!0}function Wu(){if(te!==null){if(be===0)var e=te.return;else e=te,pn=fa=null,ou(e),Pa=null,Yo=0,e=te;for(;e!==null;)Ef(e.alternate,e),e=e.return;te=null}}function uo(e,t){var n=e.timeoutHandle;return n!==-1&&(e.timeoutHandle=-1,sy(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),an=0,Wu(),ze=e,te=n=hn(e.current,null),oe=t,be=0,Ct=null,Vn=!1,no=Co(e,t),Zu=!1,ao=kt=Ei=Ca=Qn=Ue=0,pt=al=null,Ku=!1,xn=Fs(e,t),Gl(),n}function lh(e,t){I=null,B.H=di,t===Ka||t===Jl?(t=dd(),be=3):t===Xr?(t=dd(),be=4):be=t===wu?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Ct=t,te===null&&(Ue=1,fi(e,Nt(t,e.current)))}function ih(){var e=We.current;return e===null?!0:(oe&4194048)===oe?ot===null:(oe&62914560)===oe||(oe&536870912)!==0?e===ot:!1}function rh(){var e=B.H;return B.H=di,e===null?di:e}function uh(){var e=B.A;return B.A=jg,e}function Mi(){Ue=4,Vn||(oe&4194048)!==oe&&We.current!==null||(no=!0),(Qn&134217727)===0&&(Ca&134217727)===0||ze===null||Zn(ze,oe,kt,!1)}function Ju(e,t,n){var a=ve;ve|=2;var o=rh(),l=uh();(ze!==e||oe!==t)&&(_i=null,uo(e,t)),t=!1;var i=Ue;e:do try{if(be!==0&&te!==null){var r=te,c=Ct;switch(be){case 8:Wu(),i=6;break e;case 3:case 2:case 9:case 6:We.current===null&&(t=!0);var y=be;if(be=0,Ct=null,so(e,r,c,y),n&&no){i=0;break e}break;default:y=be,be=0,Ct=null,so(e,r,c,y)}}Gg(),i=Ue;break}catch(b){lh(e,b)}while(!0);return t&&e.shellSuspendCounter++,pn=fa=null,ve=a,B.H=o,B.A=l,te===null&&(ze=null,oe=0,Gl()),i}function Gg(){for(;te!==null;)sh(te)}function qg(e,t){var n=ve;ve|=2;var a=rh(),o=uh();ze!==e||oe!==t?(_i=null,Oi=yt()+500,uo(e,t)):no=Co(e,t);e:do try{if(be!==0&&te!==null){t=te;var l=Ct;t:switch(be){case 1:be=0,Ct=null,so(e,t,l,1);break;case 2:case 9:if(sd(l)){be=0,Ct=null,ch(t);break}t=function(){be!==2&&be!==9||ze!==e||(be=7),on(e)},l.then(t,t);break e;case 3:be=7;break e;case 4:be=5;break e;case 7:sd(l)?(be=0,Ct=null,ch(t)):(be=0,Ct=null,so(e,t,l,7));break;case 5:var i=null;switch(te.tag){case 26:i=te.memoizedState;case 5:case 27:var r=te;if(i?tm(i):r.stateNode.complete){be=0,Ct=null;var c=r.sibling;if(c!==null)te=c;else{var y=r.return;y!==null?(te=y,Ui(y)):te=null}break t}}be=0,Ct=null,so(e,t,l,5);break;case 6:be=0,Ct=null,so(e,t,l,6);break;case 8:Wu(),Ue=6;break e;default:throw Error(s(462))}}Yg();break}catch(b){lh(e,b)}while(!0);return pn=fa=null,B.H=a,B.A=o,ve=n,te!==null?0:(ze=null,oe=0,Gl(),Ue)}function Yg(){for(;te!==null&&!lp();)sh(te)}function sh(e){var t=kf(e.alternate,e,xn);e.memoizedProps=e.pendingProps,t===null?Ui(e):te=t}function ch(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=vf(n,t,t.pendingProps,t.type,void 0,oe);break;case 11:t=vf(n,t,t.pendingProps,t.type.render,t.ref,oe);break;case 5:ou(t);var a=t;a===Qe&&($?(Zl(a),a.tag===5&&a.stateNode!=null&&(Ae=a.stateNode)):(Zl(a),$=!0));default:Ef(n,t),t=te=Fc(t,xn),t=kf(n,t,xn)}e.memoizedProps=e.pendingProps,t===null?Ui(e):te=t}function so(e,t,n,a){pn=fa=null,ou(t),Pa=null,Yo=0;var o=t.return;try{if(Og(e,o,t,n,oe)){Ue=1,fi(e,Nt(n,e.current)),te=null;return}}catch(l){if(o!==null)throw te=o,l;Ue=1,fi(e,Nt(n,e.current)),te=null;return}t.flags&32768?($||a===1?e=!0:no||(oe&536870912)!==0?e=!1:(Vn=e=!0,(a===2||a===9||a===3||a===6)&&(a=We.current,a!==null&&a.tag===13&&(a.flags|=16384))),dh(t,e)):Ui(t)}function Ui(e){var t=e;do{if((t.flags&32768)!==0){dh(t,Vn);return}e=t.return;var n=Mg(t.alternate,t,xn);if(n!==null){te=n;return}if(t=t.sibling,t!==null){te=t;return}te=t=e}while(t!==null);Ue===0&&(Ue=5)}function dh(e,t){do{var n=Ug(e.alternate,e);if(n!==null){n.flags&=32767,te=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){te=e;return}te=e=n}while(e!==null);Ue=6,te=null}function fh(e,t,n,a,o,l,i,r,c,y,b,k){e.cancelPendingCommit=null;do Di();while(Re!==0);if((ve&6)!==0)throw Error(s(327));if(t!==null){if(t===e.current)throw Error(s(177));e===ze&&(te=ze=null,oe=0),ka=t,Vt=e,an=n,Iu=o,th=a,Vg(e,t,n,i,r,c,k)}}function Vg(e,t,n,a,o,l,i){var r=t.lanes|t.childLanes;if(Pu=r,r|=Rr,pp(e,n,r,a,o,l),lo=null,(n&335544064)===n?(io=yg(e),a=10262):(io=null,a=10256),(t.subtreeFlags&a)!==0||(t.flags&a)!==0?(e.callbackNode=null,e.callbackPriority=0,Ig(Sl,function(){return ts(),null})):(e.callbackNode=null,e.callbackPriority=0),bi=!1,a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=B.T,B.T=null,o=Z.p,Z.p=2,l=ve,ve|=4;try{Dg(e,t,n)}finally{ve=l,Z.p=o,B.T=a}}Re=1,bi?oo=py(i,e.containerInfo,io,Fu,$u,Xg,es,ts,Qg):(Fu(),$u(),es())}function Qg(e){if(Re!==0){var t=Vt.onRecoverableError;t(e,{componentStack:null})}}function Xg(){Re===3&&(Re=0,Pf(ka,Vt),Re=4)}function Fu(){if(Re===1){Re=0;var e=Vt,t=ka,n=an,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=B.T,B.T=null;var o=Z.p;Z.p=2;var l=ve;ve|=4;try{el=Si=!1,Zf(t,e,n),n=hs;var i=Yc(e.containerInfo),r=n.focusedElem,c=n.selectionRange;if(i!==r&&r&&r.ownerDocument&&qc(r.ownerDocument.documentElement,r)){if(c!==null&&Er(r)){var y=c.start,b=c.end;if(b===void 0&&(b=y),"selectionStart"in r)r.selectionStart=y,r.selectionEnd=Math.min(b,r.value.length);else{var k=r.ownerDocument||document,p=k&&k.defaultView||window;if(p.getSelection){var w=p.getSelection(),O=r.textContent.length,H=Math.min(c.start,O),W=c.end===void 0?H:Math.min(c.end,O);!w.extend&&H>W&&(i=W,W=H,H=i);var g=Gc(r,H),f=Gc(r,W);if(g&&f&&(w.rangeCount!==1||w.anchorNode!==g.node||w.anchorOffset!==g.offset||w.focusNode!==f.node||w.focusOffset!==f.offset)){var v=k.createRange();v.setStart(g.node,g.offset),w.removeAllRanges(),H>W?(w.addRange(v),w.extend(f.node,f.offset)):(v.setEnd(f.node,f.offset),w.addRange(v))}}}}for(k=[],w=r;w=w.parentNode;)w.nodeType===1&&k.push({element:w,left:w.scrollLeft,top:w.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<k.length;r++){var C=k[r];C.element.scrollLeft=C.left,C.element.scrollTop=C.top}}vo=!!fs,hs=fs=null}finally{ve=l,Z.p=o,B.T=a}}e.current=t,Re=2}}function $u(){if(Re===2){Re=0;var e=Vt,t=ka,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=B.T,B.T=null;var a=Z.p;Z.p=2;var o=ve;ve|=4;try{Gf(e,t.alternate,t)}finally{ve=o,Z.p=a,B.T=n}}Re=3}}function es(){if(Re===4||Re===3){Re=0;var e=oo;oo=null,ip();var t=Vt,n=ka,a=an,o=th,l=(a&335544064)===a?10262:10256;if((n.subtreeFlags&l)!==0||(n.flags&l)!==0?Re=5:(Re=0,ka=Vt=null,hh(t,t.pendingLanes)),l=t.pendingLanes,l===0&&(Xn=null),sr(a),n=n.stateNode,vt&&typeof vt.onCommitFiberRoot=="function")try{vt.onCommitFiberRoot(So,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=B.T,l=Z.p,Z.p=2,B.T=null;try{for(var i=t.onRecoverableError,r=0;r<o.length;r++){var c=o[r];i(c.value,{componentStack:c.stack})}}finally{B.T=n,Z.p=l}}if(o=lo,i=io,io=null,o!==null&&(lo=null,i===null&&(i=[]),e!==null))for(c=0;c<o.length;c++)n=(0,o[c])(i),n!==void 0&&e.finished.finally(n);(an&3)!==0&&Di(),on(t),l=t.pendingLanes,(a&261930)!==0&&(l&42)!==0?t===Ni?ol++:(ol=0,Ni=t):(ol=0,Ni=null),ll(0)}}function hh(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Lo(t)))}function Di(){return oo!==null&&(oo.skipTransition(),oo=null),Fu(),$u(),es(),ts()}function ts(){if(Re!==5)return!1;var e=Vt,t=Pu;Pu=0;var n=sr(an),a=B.T,o=Z.p;try{Z.p=32>n?32:n,B.T=null,n=Iu,Iu=null;var l=Vt,i=an;if(Re=0,ka=Vt=null,an=0,(ve&6)!==0)throw Error(s(331));var r=ve;if(ve|=4,Ff(l.current),If(l,l.current,i,n),ve=r,ll(0,!1),vt&&typeof vt.onPostCommitFiberRoot=="function")try{vt.onPostCommitFiberRoot(So,l)}catch{}return!0}finally{Z.p=o,B.T=a,hh(e,t)}}function mh(e,t,n){t=Nt(n,t),t=vu(e.stateNode,t,2),e=jn(e,t,2),e!==null&&(ko(e,2),on(e))}function xe(e,t,n){if(e.tag===3)mh(e,e,n);else for(;t!==null;){if(t.tag===3){mh(t,e,n);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Xn===null||!Xn.has(a))){e=Nt(n,e),n=cf(2),a=jn(t,n,2),a!==null&&(df(n,a,t,e),ko(a,2),on(a));break}}t=t.return}}function ns(e,t,n){var a=e.pingCache;if(a===null){a=e.pingCache=new Bg;var o=new Set;a.set(t,o)}else o=a.get(t),o===void 0&&(o=new Set,a.set(t,o));o.has(n)||(Zu=!0,o.add(n),e=Zg.bind(null,e,t,n),t.then(e,e))}function Zg(e,t,n){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,ze===e&&(oe&n)===n&&((Ue===4||Ue===3&&(oe&62914560)===oe&&300>yt()-Ai)&&(ve&2)===0?uo(e,0):Ei|=n,ao===oe&&(ao=0)),on(e)}function ph(e,t){t===0&&(t=$s()),e=sa(e,t),e!==null&&(ko(e,t),on(e))}function Kg(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),ph(e,n)}function Pg(e,t){var n=0;switch(e.tag){case 31:case 13:var a=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(s(314))}a!==null&&a.delete(t),ph(e,n)}function Ig(e,t){return lr(e,t)}var co=null,fo=null,as=!1,Hi=!1,os=!1,Kn=0;function on(e){e!==fo&&e.next===null&&(fo===null?co=fo=e:fo=fo.next=e),Hi=!0,as||(as=!0,Jg())}function ll(e,t){if(!os&&Hi){os=!0;do for(var n=!1,a=co;a!==null;){if(e!==0){var o=a.pendingLanes;if(o===0)var l=0;else{var i=a.suspendedLanes,r=a.pingedLanes;l=(1<<31-wt(42|e)+1)-1,l&=o&~(i&~r),l=l&201326741?l&201326741|1:l?l|2:0}l!==0&&(n=!0,wh(a,l))}else l=oe,l=El(a,a===ze?l:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(l&3)===0||Co(a,l)||(n=!0,wh(a,l));a=a.next}while(n);os=!1}}function Wg(){gh()}function gh(){Hi=as=!1;var e=0;Kn!==0&&uy()&&(e=Kn);for(var t=yt(),n=null,a=co;a!==null;){var o=a.next,l=yh(a,t);l===0?(a.next=null,n===null?co=o:n.next=o,o===null&&(fo=n)):(n=a,(e!==0||(l&3)!==0)&&(Hi=!0)),a=o}Re!==0&&Re!==5||ll(e),Kn!==0&&(Kn=0)}function yh(e,t){for(var n=e.suspendedLanes,a=e.pingedLanes,o=e.expirationTimes,l=e.pendingLanes&-62914561;0<l;){var i=31-wt(l),r=1<<i,c=o[i];c===-1?((r&n)===0||(r&a)!==0)&&(o[i]=mp(r,t)):c<=t&&(e.expiredLanes|=r),l&=~r}if(t=ze,n=oe,n=El(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,n===0||e===t&&(be===2||be===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&ir(a),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Co(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(a!==null&&ir(a),sr(n)){case 2:case 8:n=Ws;break;case 32:n=Sl;break;case 268435456:n=Js;break;default:n=Sl}return a=vh.bind(null,e),n=lr(n,a),e.callbackPriority=t,e.callbackNode=n,t}return a!==null&&a!==null&&ir(a),e.callbackPriority=2,e.callbackNode=null,2}function vh(e,t){if(Re!==0&&Re!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Di()&&e.callbackNode!==n)return null;var a=oe;return a=El(e,e===ze?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(ah(e,a,t),yh(e,yt()),e.callbackNode!=null&&e.callbackNode===n?vh.bind(null,e):null)}function wh(e,t){if(Di())return null;ah(e,t,!0)}function Jg(){cy(function(){(ve&6)!==0?lr(Is,Wg):gh()})}function ls(){if(Kn===0){var e=pa;e===0&&(e=Cl,Cl<<=1,(Cl&261888)===0&&(Cl=256)),Kn=e}return Kn}function bh(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Rl(e)}function Fg(e,t,n,a,o){if(t==="submit"&&n&&n.stateNode===o){var l=bh((o[dt]||null).action),i=a.submitter;i&&(t=(t=i[dt]||null)?bh(t.formAction):i.getAttribute("formAction"),t!==null&&(l=t,i=null));var r=new Hl("action","action",null,a,o);e.push({event:r,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(Kn!==0){var c=new FormData(o,i);hu(n,{pending:!0,data:c,method:o.method,action:l},null,c)}}else typeof l=="function"&&(r.preventDefault(),c=new FormData(o,i),hu(n,{pending:!0,data:c,method:o.method,action:l},l,c))},currentTarget:o}]})}}for(var is=0;is<Nr.length;is++){var rs=Nr[is],$g=rs.toLowerCase(),ey=rs[0].toUpperCase()+rs.slice(1);Lt($g,"on"+ey)}Lt(Xc,"onAnimationEnd"),Lt(Zc,"onAnimationIteration"),Lt(Kc,"onAnimationStart"),Lt("dblclick","onDoubleClick"),Lt("focusin","onFocus"),Lt("focusout","onBlur"),Lt(sg,"onTransitionRun"),Lt(cg,"onTransitionStart"),Lt(dg,"onTransitionCancel"),Lt(Pc,"onTransitionEnd"),Ma("onMouseEnter",["mouseout","mouseover"]),Ma("onMouseLeave",["mouseout","mouseover"]),Ma("onPointerEnter",["pointerout","pointerover"]),Ma("onPointerLeave",["pointerout","pointerover"]),ia("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ia("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ia("onBeforeInput",["compositionend","keypress","textInput","paste"]),ia("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ia("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ia("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var il="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ty=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(il));function xh(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],o=a.event;a=a.listeners;e:{var l=void 0;if(t)for(var i=a.length-1;0<=i;i--){var r=a[i],c=r.instance,y=r.currentTarget;if(r=r.listener,c!==l&&o.isPropagationStopped())break e;l=r,o.currentTarget=y;try{l(o)}catch(b){Ll(b)}o.currentTarget=null,l=c}else for(i=0;i<a.length;i++){if(r=a[i],c=r.instance,y=r.currentTarget,r=r.listener,c!==l&&o.isPropagationStopped())break e;l=r,o.currentTarget=y;try{l(o)}catch(b){Ll(b)}o.currentTarget=null,l=c}}}}function ne(e,t){var n=t[lc];n===void 0&&(n=t[lc]=new Set);var a=e+"__bubble";n.has(a)||(Th(t,e,2,!1),n.add(a))}function us(e,t,n){var a=0;t&&(a|=4),Th(n,e,a,t)}var ji="_reactListening"+Math.random().toString(36).slice(2);function ss(e){if(!e[ji]){e[ji]=!0,uc.forEach(function(n){n!=="selectionchange"&&(ty.has(n)||us(n,!1,e),us(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ji]||(t[ji]=!0,us("selectionchange",!1,t))}}function Th(e,t,n,a){switch(dm(t)){case 2:var o=Ky;break;case 8:o=Py;break;default:o=Os}n=o.bind(null,t,n,e),o=void 0,!yr||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),a?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function cs(e,t,n,a,o){var l=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var i=a.tag;if(i===3||i===4){var r=a.stateNode.containerInfo;if(r===o)break;if(i===4)for(i=a.return;i!==null;){var c=i.tag;if((c===3||c===4)&&i.stateNode.containerInfo===o)return;i=i.return}for(;r!==null;){if(i=la(r),i===null)return;if(c=i.tag,c===5||c===6||c===26||c===27){a=l=i;continue e}r=r.parentNode}}a=a.return}xc(function(){var y=l,b=pr(n),k=[];e:{var p=Ic.get(e);if(p!==void 0){var w=Hl,O=e;switch(e){case"keypress":if(Ul(n)===0)break e;case"keydown":case"keyup":w=Lp;break;case"focusin":O="focus",w=xr;break;case"focusout":O="blur",w=xr;break;case"beforeblur":case"afterblur":w=xr;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=Cc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=Ep;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=Qp;break;case Xc:case Zc:case Kc:w=_p;break;case Pc:w=Zp;break;case"scroll":case"scrollend":w=kp;break;case"wheel":w=Pp;break;case"copy":case"cut":case"paste":w=Rp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=zc;break;case"submit":w=Yp;break;case"toggle":case"beforetoggle":w=Wp}var H=(t&4)!==0,W=!H&&(e==="scroll"||e==="scrollend"),g=H?p!==null?p+"Capture":null:p;H=[];for(var f=y,v;f!==null;){var C=f;if(v=C.stateNode,C=C.tag,C!==5&&C!==26&&C!==27||v===null||g===null||(C=Ao(f,g),C!=null&&H.push(rl(f,C,v))),W)break;f=f.return}0<H.length&&(p=new w(p,O,null,n,b),k.push({event:p,listeners:H}))}}if((t&7)===0){e:{if(w=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",w&&n!==mr&&(O=n.relatedTarget||n.fromElement)&&(la(O)||O[_a]))break e;(p||w)&&(O=b.window===b?b:(w=b.ownerDocument)?w.defaultView||w.parentWindow:window,p?(w=n.relatedTarget||n.toElement,p=y,w=w?la(w):null,w!==null&&(W=S(w),H=w.tag,w!==W||H!==5&&H!==27&&H!==6)&&(w=null)):(p=null,w=y),p!==w&&(H=Cc,C="onMouseLeave",g="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(H=zc,C="onPointerLeave",g="onPointerEnter",f="pointer"),W=p==null?O:Eo(p),v=w==null?O:Eo(w),O=new H(C,f+"leave",p,n,b),O.target=W,O.relatedTarget=v,C=null,la(b)===y&&(H=new H(g,f+"enter",w,n,b),H.target=v,H.relatedTarget=W,C=H),W=C,H=p&&w?tt(p,w,ny):null,p!==null&&Sh(k,O,p,H,!1),w!==null&&W!==null&&Sh(k,W,w,H,!0)))}e:{if(p=y?Eo(y):window,w=p.nodeName&&p.nodeName.toLowerCase(),w==="select"||w==="input"&&p.type==="file")var D=Uc;else if(Rc(p))if(Dc)D=ig;else{D=og;var le=ag}else w=p.nodeName,!w||w.toLowerCase()!=="input"||p.type!=="checkbox"&&p.type!=="radio"?y&&hr(y.elementType)&&(D=Uc):D=lg;if(D&&(D=D(e,y))){Mc(k,D,n,b);break e}le&&le(e,p,y)}switch(le=y?Eo(y):window,e){case"focusin":(Rc(le)||le.contentEditable==="true")&&(La=le,Ar=y,Ho=null);break;case"focusout":Ho=Ar=La=null;break;case"mousedown":Or=!0;break;case"contextmenu":case"mouseup":case"dragend":Or=!1,Vc(k,n,b);break;case"selectionchange":if(ug)break;case"keydown":case"keyup":Vc(k,n,b)}var L;if(Sr)e:{switch(e){case"compositionstart":var X="onCompositionStart";break e;case"compositionend":X="onCompositionEnd";break e;case"compositionupdate":X="onCompositionUpdate";break e}X=void 0}else Ba?_c(e,n)&&(X="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(X="onCompositionStart");X&&(Ec&&n.locale!=="ko"&&(Ba||X!=="onCompositionStart"?X==="onCompositionEnd"&&Ba&&(L=Tc()):(An=b,vr="value"in An?An.value:An.textContent,Ba=!0)),le=Bi(y,X),0<le.length&&(X=new kc(X,e,null,n,b),k.push({event:X,listeners:le}),L?X.data=L:(L=Nc(n),L!==null&&(X.data=L)))),(L=Fp?$p(e,n):eg(e,n))&&(X=Bi(y,"onBeforeInput"),0<X.length&&(le=new kc("onBeforeInput","beforeinput",null,n,b),k.push({event:le,listeners:X}),le.data=L)),Fg(k,e,y,n,b)}xh(k,t)})}function rl(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Bi(e,t){for(var n=t+"Capture",a=[];e!==null;){var o=e,l=o.stateNode;if(o=o.tag,o!==5&&o!==26&&o!==27||l===null||(o=Ao(e,n),o!=null&&a.unshift(rl(e,o,l)),o=Ao(e,t),o!=null&&a.push(rl(e,o,l))),e.tag===3)return a;e=e.return}return[]}function ny(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Sh(e,t,n,a,o){for(var l=t._reactName,i=[];n!==null&&n!==a;){var r=n,c=r.alternate,y=r.stateNode;if(r=r.tag,c!==null&&c===a)break;r!==5&&r!==26&&r!==27||y===null||(c=y,o?(y=Ao(n,l),y!=null&&i.unshift(rl(n,y,c))):o||(y=Ao(n,l),y!=null&&i.push(rl(n,y,c)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var ay=/\r\n?/g,oy=/\u0000|\uFFFD/g;function Ch(e){return(typeof e=="string"?e:""+e).replace(ay,`
`).replace(oy,"")}function kh(e,t){return t=Ch(t),Ch(e)===t}function Te(e,t,n,a,o,l){switch(n){case"children":if(typeof a=="string")t==="body"||t==="textarea"&&a===""||Da(e,a);else if(typeof a=="number"||typeof a=="bigint")t!=="body"&&Da(e,""+a);else return;break;case"className":Nl(e,"class",a);break;case"tabIndex":Nl(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Nl(e,n,a);break;case"style":wc(e,a,l);return;case"data":if(t!=="object"){Nl(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=Rl(a),e.setAttribute(n,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof l=="function"&&(n==="formAction"?(t!=="input"&&Te(e,t,"name",o.name,o,null),Te(e,t,"formEncType",o.formEncType,o,null),Te(e,t,"formMethod",o.formMethod,o,null),Te(e,t,"formTarget",o.formTarget,o,null)):(Te(e,t,"encType",o.encType,o,null),Te(e,t,"method",o.method,o,null),Te(e,t,"target",o.target,o,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=Rl(a),e.setAttribute(n,a);break;case"onClick":a!=null&&(e.onclick=Pt);return;case"onScroll":a!=null&&ne("scroll",e);return;case"onScrollEnd":a!=null&&ne("scrollend",e);return;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(s(61));if(n=a.__html,n!=null){if(o.children!=null)throw Error(s(60));(l!=null?l.__html:void 0)!==n&&(e.innerHTML=n)}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}n=Rl(a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,a):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":a===!0?e.setAttribute(n,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,a):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(n,a):e.removeAttribute(n);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(n):e.setAttribute(n,a);break;case"popover":ne("beforetoggle",e),ne("toggle",e),_l(e,"popover",a);break;case"xlinkActuate":sn(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":sn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":sn(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":sn(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":sn(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":sn(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":sn(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":sn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":sn(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":_l(e,"is",a);break;case"innerText":case"textContent":return;default:if(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")n=Sp.get(n)||n,_l(e,n,a);else return}pe=!0}function ds(e,t,n,a,o,l){switch(n){case"style":wc(e,a,l);return;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(s(61));if(n=a.__html,n!=null){if(o.children!=null)throw Error(s(60));(l!=null?l.__html:void 0)!==n&&(e.innerHTML=n)}}break;case"children":if(typeof a=="string")Da(e,a);else if(typeof a=="number"||typeof a=="bigint")Da(e,""+a);else return;break;case"onScroll":a!=null&&ne("scroll",e);return;case"onScrollEnd":a!=null&&ne("scrollend",e);return;case"onClick":a!=null&&(e.onclick=Pt);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!sc.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(o=n.endsWith("Capture"),l=n.slice(2,o?n.length-7:void 0),t=e[dt]||null,t=t!=null?t[n]:null,typeof t=="function"&&e.removeEventListener(l,t,o),typeof a=="function")){typeof t!="function"&&t!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(l,a,o);break e}pe=!0,n in e?e[n]=a:a===!0?e.setAttribute(n,""):_l(e,n,a)}return}pe=!0}function $e(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ne("error",e),ne("load",e);var a=!1,o=!1,l;for(l in n)if(n.hasOwnProperty(l)){var i=n[l];if(i!=null)switch(l){case"src":a=!0;break;case"srcSet":o=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:Te(e,t,l,i,n,null)}}o&&Te(e,t,"srcSet",n.srcSet,n,null),a&&Te(e,t,"src",n.src,n,null);return;case"input":ne("invalid",e);var r=l=i=o=null,c=null,y=null;for(a in n)if(n.hasOwnProperty(a)){var b=n[a];if(b!=null)switch(a){case"name":o=b;break;case"type":i=b;break;case"checked":c=b;break;case"defaultChecked":y=b;break;case"value":l=b;break;case"defaultValue":r=b;break;case"children":case"dangerouslySetInnerHTML":if(b!=null)throw Error(s(137,t));break;default:Te(e,t,a,b,n,null)}}pc(e,l,r,c,y,i,o,!1);return;case"select":ne("invalid",e),a=i=l=null;for(o in n)if(n.hasOwnProperty(o)&&(r=n[o],r!=null))switch(o){case"value":l=r;break;case"defaultValue":i=r;break;case"multiple":a=r;default:Te(e,t,o,r,n,null)}t=l,n=i,e.multiple=!!a,t!=null?Ua(e,!!a,t,!1):n!=null&&Ua(e,!!a,n,!0);return;case"textarea":ne("invalid",e),l=o=a=null;for(i in n)if(n.hasOwnProperty(i)&&(r=n[i],r!=null))switch(i){case"value":a=r;break;case"defaultValue":o=r;break;case"children":l=r;break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(s(91));break;default:Te(e,t,i,r,n,null)}yc(e,a,o,l);return;case"option":for(c in n)if(n.hasOwnProperty(c)&&(a=n[c],a!=null))switch(c){case"selected":e.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:Te(e,t,c,a,n,null)}return;case"dialog":ne("beforetoggle",e),ne("toggle",e),ne("cancel",e),ne("close",e);break;case"iframe":case"object":ne("load",e);break;case"video":case"audio":for(a=0;a<il.length;a++)ne(il[a],e);break;case"image":ne("error",e),ne("load",e);break;case"details":ne("toggle",e);break;case"embed":case"source":case"link":ne("error",e),ne("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(y in n)if(n.hasOwnProperty(y)&&(a=n[y],a!=null))switch(y){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:Te(e,t,y,a,n,null)}return;default:if(hr(t)){for(b in n)n.hasOwnProperty(b)&&(a=n[b],a!==void 0&&ds(e,t,b,a,n,void 0));return}}for(r in n)n.hasOwnProperty(r)&&(a=n[r],a!=null&&Te(e,t,r,a,n,null))}var ly={};function iy(e,t,n,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var o=null,l=null,i=null,r=null,c=null,y=null,b=null;for(w in n){var k=n[w];if(n.hasOwnProperty(w)&&k!=null)switch(w){case"checked":break;case"value":break;case"defaultValue":c=k;default:a.hasOwnProperty(w)||Te(e,t,w,null,a,k)}}for(var p in a){var w=a[p];if(k=n[p],a.hasOwnProperty(p)&&(w!=null||k!=null))switch(p){case"type":w!==k&&(pe=!0),l=w;break;case"name":w!==k&&(pe=!0),o=w;break;case"checked":w!==k&&(pe=!0),y=w;break;case"defaultChecked":w!==k&&(pe=!0),b=w;break;case"value":w!==k&&(pe=!0),i=w;break;case"defaultValue":w!==k&&(pe=!0),r=w;break;case"children":case"dangerouslySetInnerHTML":if(w!=null)throw Error(s(137,t));break;default:w!==k&&Te(e,t,p,w,a,k)}}dr(e,i,r,c,y,b,l,o);return;case"select":w=i=r=p=null;for(l in n)if(c=n[l],n.hasOwnProperty(l)&&c!=null)switch(l){case"value":break;case"multiple":w=c;default:a.hasOwnProperty(l)||Te(e,t,l,null,a,c)}for(o in a)if(l=a[o],c=n[o],a.hasOwnProperty(o)&&(l!=null||c!=null))switch(o){case"value":l!==c&&(pe=!0),p=l;break;case"defaultValue":l!==c&&(pe=!0),r=l;break;case"multiple":l!==c&&(pe=!0),i=l;default:l!==c&&Te(e,t,o,l,a,c)}t=r,n=i,a=w,p!=null?Ua(e,!!n,p,!1):!!a!=!!n&&(t!=null?Ua(e,!!n,t,!0):Ua(e,!!n,n?[]:"",!1));return;case"textarea":w=p=null;for(r in n)if(o=n[r],n.hasOwnProperty(r)&&o!=null&&!a.hasOwnProperty(r))switch(r){case"value":break;case"children":break;default:Te(e,t,r,null,a,o)}for(i in a)if(o=a[i],l=n[i],a.hasOwnProperty(i)&&(o!=null||l!=null))switch(i){case"value":o!==l&&(pe=!0),p=o;break;case"defaultValue":o!==l&&(pe=!0),w=o;break;case"children":break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(s(91));break;default:o!==l&&Te(e,t,i,o,a,l)}gc(e,p,w);return;case"option":for(var O in n)if(p=n[O],n.hasOwnProperty(O)&&p!=null&&!a.hasOwnProperty(O))switch(O){case"selected":e.selected=!1;break;default:Te(e,t,O,null,a,p)}for(c in a)if(p=a[c],w=n[c],a.hasOwnProperty(c)&&p!==w&&(p!=null||w!=null))switch(c){case"selected":p!==w&&(pe=!0),e.selected=p&&typeof p!="function"&&typeof p!="symbol";break;default:Te(e,t,c,p,a,w)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var H in n)p=n[H],n.hasOwnProperty(H)&&p!=null&&!a.hasOwnProperty(H)&&Te(e,t,H,null,a,p);for(y in a)if(p=a[y],w=n[y],a.hasOwnProperty(y)&&p!==w&&(p!=null||w!=null))switch(y){case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(s(137,t));break;default:Te(e,t,y,p,a,w)}return;default:if(hr(t)){for(var W in n)p=n[W],n.hasOwnProperty(W)&&p!==void 0&&!a.hasOwnProperty(W)&&ds(e,t,W,void 0,a,p);for(b in a)p=a[b],w=n[b],!a.hasOwnProperty(b)||p===w||p===void 0&&w===void 0||ds(e,t,b,p,a,w);return}}for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!a.hasOwnProperty(g)&&Te(e,t,g,null,a,p);for(k in a)p=a[k],w=n[k],!a.hasOwnProperty(k)||p===w||p==null&&w==null||Te(e,t,k,p,a,w)}function zh(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function ry(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),a=0;a<n.length;a++){var o=n[a],l=o.transferSize,i=o.initiatorType,r=o.duration;if(l&&r&&zh(i)){for(i=0,r=o.responseEnd,a+=1;a<n.length;a++){var c=n[a],y=c.startTime;if(y>r)break;var b=c.transferSize,k=c.initiatorType;b&&zh(k)&&(c=c.responseEnd,i+=b*(c<r?1:(r-y)/(c-y)))}if(--a,t+=8*(l+i)/(o.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var fs=null,hs=null;function ul(e){return e.nodeType===9?e:e.ownerDocument}function Eh(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Ah(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Oh(e,t,n,a){return n=ul(n).createElement(e),n[Pe]=a,n[dt]=t,$e(n,e,t),Ve(n),n}function ms(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ps=null;function uy(){var e=window.event;return e&&e.type==="popstate"?e===ps?!1:(ps=e,!0):(ps=null,!1)}var gs=typeof setTimeout=="function"?setTimeout:void 0,sy=typeof clearTimeout=="function"?clearTimeout:void 0,_h=typeof Promise=="function"?Promise:void 0,Nh=typeof requestAnimationFrame=="function"?requestAnimationFrame:gs,cy=typeof queueMicrotask=="function"?queueMicrotask:typeof _h<"u"?function(e){return _h.resolve(null).then(e).catch(dy)}:gs;function dy(e){setTimeout(function(){throw e})}function Pn(e){return e==="head"}function Rh(e,t){var n=t,a=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"||n==="/&"){if(a===0){e.removeChild(o),wo(t);return}a--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")a++;else if(n==="html")Cs(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,Cs(n);for(var l=n.firstChild;l;){var i=l.nextSibling,r=l.nodeName;l[zo]||r==="SCRIPT"||r==="STYLE"||r==="LINK"&&l.rel.toLowerCase()==="stylesheet"||n.removeChild(l),l=i}}else n==="body"&&Cs(e.ownerDocument.body);n=o}while(n);wo(t)}function Mh(e,t){var n=e;e=0;do{var a=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=a}while(n)}function Uh(e,t,n){if(t=CSS.escape(t)!==t?"r-"+btoa(t).replace(/=/g,""):t,e.style.viewTransitionName=t,n!=null&&(e.style.viewTransitionClass=n),n=getComputedStyle(e),n.display==="inline"){if(t=e.getClientRects(),t.length===1)var a=1;else for(var o=a=0;o<t.length;o++){var l=t[o];0<l.width&&0<l.height&&a++}a===1&&(e=e.style,e.display=t.length===1?"inline-block":"block",e.marginTop="-"+n.paddingTop,e.marginBottom="-"+n.paddingBottom)}}function Dh(e,t){e=e.style,t=t.style;var n=t!=null?t.hasOwnProperty("viewTransitionName")?t.viewTransitionName:t.hasOwnProperty("view-transition-name")?t["view-transition-name"]:null:null;e.viewTransitionName=n==null||typeof n=="boolean"?"":(""+n).trim(),n=t!=null?t.hasOwnProperty("viewTransitionClass")?t.viewTransitionClass:t.hasOwnProperty("view-transition-class")?t["view-transition-class"]:null:null,e.viewTransitionClass=n==null||typeof n=="boolean"?"":(""+n).trim(),e.display==="inline-block"&&(t==null?e.display=e.margin="":(n=t.display,e.display=n==null||typeof n=="boolean"?"":n,n=t.margin,n!=null?e.margin=n:(n=t.hasOwnProperty("marginTop")?t.marginTop:t["margin-top"],e.marginTop=n==null||typeof n=="boolean"?"":n,t=t.hasOwnProperty("marginBottom")?t.marginBottom:t["margin-bottom"],e.marginBottom=t==null||typeof t=="boolean"?"":t)))}function fy(e,t,n){return n=n.ownerDocument.defaultView,{rect:e,abs:t.position==="absolute"||t.position==="fixed",clip:t.clipPath!=="none"||t.overflow!=="visible"||t.filter!=="none"||t.mask!=="none"||t.mask!=="none"||t.borderRadius!=="0px",view:0<=e.bottom&&0<=e.right&&e.top<=n.innerHeight&&e.left<=n.innerWidth}}function ys(e){var t=e.getBoundingClientRect(),n=getComputedStyle(e);return fy(t,n,e)}function hy(e){return e.documentElement.clientHeight}function my(e){this.addEventListener("load",e),this.addEventListener("error",e)}function py(e,t,n,a,o,l,i,r,c){var y=t.nodeType===9?t:t.ownerDocument;try{var b=y.startViewTransition({update:function(){var p=y.defaultView,w=p.navigation&&p.navigation.transition,O=y.fonts.status;a();var H=[];if(O==="loaded"&&(hy(y),y.fonts.status==="loading"&&H.push(y.fonts.ready)),O=H.length,e!==null)for(var W=e.suspenseyImages,g=0,f=0;f<W.length;f++){var v=W[f];if(!v.complete){var C=v.getBoundingClientRect();if(0<C.bottom&&0<C.right&&C.top<p.innerHeight&&C.left<p.innerWidth){if(g+=nm(v),g>qi){H.length=O;break}v=new Promise(my.bind(v)),H.push(v)}}}if(0<H.length)return p=Promise.race([Promise.all(H),new Promise(function(D){return setTimeout(D,500)})]).then(o,o),(w?Promise.allSettled([w.finished,p]):p).then(l,l);if(o(),w)return w.finished.then(l,l);l()},types:n});y.__reactViewTransition=b;var k=[];return b.ready.then(function(){for(var p=y.documentElement.getAnimations({subtree:!0}),w=0;w<p.length;w++){var O=p[w],H=O.effect,W=H.pseudoElement;if(W!=null&&W.startsWith("::view-transition")){k.push(O),O=H.getKeyframes();for(var g=W=void 0,f=!0,v=0;v<O.length;v++){var C=O[v],D=C.width;if(W===void 0)W=D;else if(W!==D){f=!1;break}if(D=C.height,g===void 0)g=D;else if(g!==D){f=!1;break}delete C.width,delete C.height,C.transform==="none"&&delete C.transform}f&&W!==void 0&&g!==void 0&&(H.setKeyframes(O),f=getComputedStyle(H.target,H.pseudoElement),f.width!==W||f.height!==g)&&(f=O[0],f.width=W,f.height=g,f=O[O.length-1],f.width=W,f.height=g,H.setKeyframes(O))}}i()},function(p){y.__reactViewTransition===b&&(y.__reactViewTransition=null);try{if(typeof p=="object"&&p!==null)switch(p.name){case"InvalidStateError":(p.message==="View transition was skipped because document visibility state is hidden."||p.message==="Skipping view transition because document visibility state has become hidden."||p.message==="Skipping view transition because viewport size changed."||p.message==="Transition was aborted because of invalid state")&&(p=null)}p!==null&&c(p)}finally{a(),o(),i()}}),b.finished.finally(function(){for(var p=0;p<k.length;p++)k[p].cancel();y.__reactViewTransition===b&&(y.__reactViewTransition=null),r()}),b}catch{return a(),o(),i(),null}}function za(e,t){this._scope=document.documentElement,this._selector="::view-transition-"+e+"("+t+")"}za.prototype.animate=function(e,t){return t=typeof t=="number"?{duration:t}:F({},t),t.pseudoElement=this._selector,this._scope.animate(e,t)},za.prototype.getAnimations=function(){for(var e=this._scope,t=this._selector,n=e.getAnimations({subtree:!0}),a=[],o=0;o<n.length;o++){var l=n[o].effect;l!==null&&l.target===e&&l.pseudoElement===t&&a.push(n[o])}return a},za.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function Hh(e){return{name:e,group:new za("group",e),imagePair:new za("image-pair",e),old:new za("old",e),new:new za("new",e)}}function Et(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}Et.prototype.addEventListener=function(e,t,n){var a=null,o=null;if(!(n!=null&&typeof n!="boolean"&&(a=n.signal||null,a!==null&&a.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var l=this._eventListeners;if(Bh(l,e,t,n)===-1){var i=this,r=t;n!=null&&typeof n!="boolean"&&n.once===!0&&(r=function(c){i.removeEventListener(e,t,n),typeof t=="function"?t.call(this,c):t.handleEvent(c)}),a!==null&&(o=i.removeEventListener.bind(i,e,t,n),a.addEventListener("abort",o,{once:!0}),o=a.removeEventListener.bind(a,"abort",o)),a=ho(n),l.push({type:e,listener:t,optionsOrUseCapture:n,attachedListener:r,cleanup:o}),x(this._fragmentFiber.child,!1,gy,e,r,a)}this._eventListeners=l}};function gy(e,t,n,a){return Y(e).addEventListener(t,n,a),!1}Et.prototype.removeEventListener=function(e,t,n){var a=this._eventListeners;if(a!==null&&(t=Bh(a,e,t,n),t!==-1)){var o=a[t];n=o.attachedListener;var l=o.cleanup;o=ho(o.optionsOrUseCapture),x(this._fragmentFiber.child,!1,yy,e,n,o),a.splice(t,1),l!==null&&l()}};function yy(e,t,n,a){return Y(e).removeEventListener(t,n,a),!1}function ho(e){return e!=null&&typeof e!="boolean"&&(e.once===!0||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function jh(e){return e==null?"c=0":typeof e=="boolean"?"c="+(e?"1":"0"):"c="+(e.capture?"1":"0")}function Bh(e,t,n,a){if(e.length===0)return-1;a=jh(a);for(var o=0;o<e.length;o++){var l=e[o];if(l.type===t&&l.listener===n&&jh(l.optionsOrUseCapture)===a)return o}return-1}Et.prototype.dispatchEvent=function(e){var t=M(this._fragmentFiber);if(t===null)return!0;t=Y(t);var n=this._eventListeners;if(n!==null&&0<n.length||!e.bubbles){var a=t.nodeType===9?t.createComment(""):document.createTextNode("");if(n)for(var o=0;o<n.length;o++){var l=n[o];a.addEventListener(l.type,l.attachedListener,ho(l.optionsOrUseCapture))}if(t.appendChild(a),e=a.dispatchEvent(e),n)for(o=0;o<n.length;o++)l=n[o],a.removeEventListener(l.type,l.attachedListener,ho(l.optionsOrUseCapture));return t.removeChild(a),e}return t.dispatchEvent(e)},Et.prototype.focus=function(e){x(this._fragmentFiber.child,!0,Lh,e,void 0,void 0)};function Lh(e,t){return e.tag===6?!1:(e=Y(e),Oy(e,t))}Et.prototype.focusLast=function(e){var t=[];x(this._fragmentFiber.child,!0,vs,t,void 0,void 0);for(var n=t.length-1;0<=n&&!Lh(t[n],e);n--);};function vs(e,t){return t.push(e),!1}Et.prototype.blur=function(){var e=M(this._fragmentFiber);e!==null&&(e=Y(e),e=ul(e).activeElement,e!==null&&x(this._fragmentFiber.child,!1,vy,e,void 0,void 0))};function vy(e,t){return e.tag===6?!1:(e=Y(e),e===t||e.contains(t)?(t.blur(),!0):!1)}Et.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),x(this._fragmentFiber.child,!1,wy,e,void 0,void 0)};function wy(e,t){return e.tag===6||(e=Y(e),t.observe(e)),!1}Et.prototype.unobserveUsing=function(e){var t=this._observers;if(t!==null&&t.has(e)){t.delete(e),x(this._fragmentFiber.child,!1,by,e,void 0,void 0);for(var n=t=0;n<Qt.length;n++){var a=Qt[n];a.fragmentInstance===this&&a.observer===e?e.unobserve(a.instance):Qt[t++]=a}Qt.length=t}};function by(e,t){return e.tag===6||(e=Y(e),t.unobserve(e)),!1}var Qt=[],ws=!1;function xy(e,t,n){Qt.push({fragmentInstance:e,observer:t,instance:n}),ws||(ws=!0,_y(function(){ws=!1;var a=Qt;Qt=[];for(var o=0;o<a.length;o++){var l=a[o];l.observer.unobserve(l.instance)}}))}Et.prototype.getClientRects=function(){var e=[];return x(this._fragmentFiber.child,!1,Ty,e,void 0,void 0),e};function Ty(e,t){if(e.tag===6){e=e.stateNode;var n=e.ownerDocument.createRange();n.selectNodeContents(e),t.push.apply(t,n.getClientRects())}else e=Y(e),t.push.apply(t,e.getClientRects());return!1}Et.prototype.getRootNode=function(e){var t=M(this._fragmentFiber);return t===null?this:Y(t).getRootNode(e)},Et.prototype.compareDocumentPosition=function(e){var t=M(this._fragmentFiber);if(t===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var n=[];x(this._fragmentFiber.child,!1,vs,n,void 0,void 0);var a=Y(t);if(n.length===0){if(n=a,ie(this._fragmentFiber)){e:{for(t=this._fragmentFiber.return;t!==null;){if(t.tag===4){t=t.stateNode.containerInfo;break e}if(t.tag===3||t.tag===5||t.tag===27)break;t=t.return}t=null}t!=null&&(n=t)}t=this._fragmentFiber;var o=a=n.compareDocumentPosition(e);return n===e?o=Node.DOCUMENT_POSITION_CONTAINS:a&Node.DOCUMENT_POSITION_CONTAINED_BY&&(n=re(t)[1],n===null?o=Node.DOCUMENT_POSITION_PRECEDING:(e=Y(n).compareDocumentPosition(e),o=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),o|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}t=Y(n[0]),o=Y(n[n.length-1]);var l=ie(this._fragmentFiber)?t.parentElement:a;if(l==null)return Node.DOCUMENT_POSITION_DISCONNECTED;a=l.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY,l=l.compareDocumentPosition(o)&Node.DOCUMENT_POSITION_CONTAINED_BY;var i=t.compareDocumentPosition(e),r=o.compareDocumentPosition(e),c=i&Node.DOCUMENT_POSITION_CONTAINED_BY||r&Node.DOCUMENT_POSITION_CONTAINED_BY;return r=a&&l&&i&Node.DOCUMENT_POSITION_FOLLOWING&&r&Node.DOCUMENT_POSITION_PRECEDING,t=a&&t===e||l&&o===e||c||r?Node.DOCUMENT_POSITION_CONTAINED_BY:!a&&t===e||!l&&o===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:i,t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||Sy(t,this._fragmentFiber,n[0],n[n.length-1],e)?t:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function Sy(e,t,n,a,o){var l=la(o);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(n=!!l)e:{for(;l!==null;){if(l.tag===7&&(l===t||l.alternate===t)){n=!0;break e}l=l.return}n=!1}return n}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(l===null)return l=o.ownerDocument,o===l||o===l.documentElement||o===l.body;e:{for(l=t,t=M(t);l!==null;){if(!(l.tag!==5&&l.tag!==3&&l.tag!==27||l!==t&&l.alternate!==t)){l=!0;break e}l=l.return}l=!1}return l}return e&Node.DOCUMENT_POSITION_PRECEDING?((t=!!l)&&!(t=l===n)&&(t=tt(n,l,lt),t===null?t=!1:(x(t,!0,ae,l,n),l=ge,ge=null,t=l!==null)),t):e&Node.DOCUMENT_POSITION_FOLLOWING?((t=!!l)&&!(t=l===a)&&(t=tt(a,l,lt),t===null?t=!1:(x(t,!0,ke,l,a),l=ge,Se=ge=null,t=l!==null)),t):!1}function Gh(e,t){var n=e.ownerDocument.createRange();n.selectNodeContents(e),e=n.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,t?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}Et.prototype.scrollIntoView=function(e){if(typeof e=="object")throw Error(s(566));var t=[];x(this._fragmentFiber.child,!1,vs,t,void 0,void 0);var n=e!==!1;if(t.length===0){var a=re(this._fragmentFiber);if(a=n?a[1]||a[0]||M(this._fragmentFiber):a[0]||a[1],a===null)return;if(a.tag===6){e=Y(a),Gh(e,n);return}if(a=Y(a),a.nodeType!==9){if(a.nodeType===11){n="host"in a?a.host:null,n!==null&&n.scrollIntoView(e);return}a.scrollIntoView(e)}}for(a=n?t.length-1:0;a!==(n?-1:t.length);){var o=t[a];o.tag===6?(o=Y(o),Gh(o,n)):Y(o).scrollIntoView(e),a+=n?-1:1}};function Cy(e,t){return e=Y(e),qh(e,t),!1}function qh(e,t){e.reactFragments==null&&(e.reactFragments=new Set),e.reactFragments.add(t)}function Yh(e,t){var n=t._eventListeners;if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];e.addEventListener(o.type,o.attachedListener,ho(o.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(l){for(var i=0,r=0;r<Qt.length;r++){var c=Qt[r];(c.fragmentInstance!==t||c.observer!==l||c.instance!==e)&&(Qt[i++]=c)}Qt.length=i,l.observe(e)}),qh(e,t))}function ky(e,t){var n=t._eventListeners;if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];e.removeEventListener(o.type,o.attachedListener,ho(o.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(l){typeof l.rootMargin=="string"?xy(t,l,e):l.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(t))}function bs(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":bs(n),Ol(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function zy(e,t,n,a){for(;e.nodeType===1;){var o=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[zo])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(l=e.getAttribute("rel"),l==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(l!==o.rel||e.getAttribute("href")!==(o.href==null||o.href===""?null:o.href)||e.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin)||e.getAttribute("title")!==(o.title==null?null:o.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(l=e.getAttribute("src"),(l!==(o.src==null?null:o.src)||e.getAttribute("type")!==(o.type==null?null:o.type)||e.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin))&&l&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var l=o.name==null?null:""+o.name;if(o.type==="hidden"&&e.getAttribute("name")===l)return e}else return e;if(e=Ht(e.nextSibling),e===null)break}return null}function Ey(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Ht(e.nextSibling),e===null))return null;return e}function Vh(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Ht(e.nextSibling),e===null))return null;return e}function xs(e){return e.data==="$?"||e.data==="$~"}function Ts(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Ay(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var a=function(){t(),n.removeEventListener("DOMContentLoaded",a)};n.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function Ht(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Ss=null;function Qh(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return Ht(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function Xh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function Oy(e,t){function n(){a=!0}if(e.ownerDocument.activeElement===e)return!0;var a=!1;try{e.ownerDocument.addEventListener("focus",n,!0),(e.focus||HTMLElement.prototype.focus).call(e,t)}finally{e.ownerDocument.removeEventListener("focus",n,!0)}return a}function _y(e){Nh(function(){Nh(function(t){return e(t)})})}function Zh(e,t,n){switch(t=ul(n),e){case"html":if(e=t.documentElement,!e)throw Error(s(452));return e;case"head":if(e=t.head,!e)throw Error(s(453));return e;case"body":if(e=t.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Kh(e,t,n){for(var a in n){var o=n[a];n.hasOwnProperty(a)&&o!=null&&Te(e,t,a,null,ly,o)}n.dangerouslySetInnerHTML!=null&&(e.textContent=""),e.onclick===Pt&&(e.onclick=null),Ol(e)}function Cs(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Ol(e)}var jt=new Map,Ph=new Set;function sl(e){if(typeof e.getRootNode=="function"){var t=e.getRootNode();if(t.nodeType===9||t.nodeType===11)return t}return e.nodeType===9?e:e.ownerDocument}var Tn=Z.d;Z.d={f:Ny,r:Ry,D:My,C:Uy,L:Dy,m:Hy,X:By,S:jy,M:Ly};function Ny(){var e=Tn.f(),t=Ri();return e||t}function Ry(e){var t=Na(e);t!==null&&t.tag===5&&t.type==="form"?Id(t):Tn.r(e)}var mo=typeof document>"u"?null:document;function Ih(e,t,n){var a=mo;if(a&&typeof t=="string"&&t){var o=Ot(t);o='link[rel="'+e+'"][href="'+o+'"]',typeof n=="string"&&(o+='[crossorigin="'+n+'"]'),Ph.has(o)||(Ph.add(o),e={rel:e,crossOrigin:n,href:t},a.querySelector(o)===null&&(t=a.createElement("link"),$e(t,"link",e),Ve(t),a.head.appendChild(t)))}}function My(e){Tn.D(e),Ih("dns-prefetch",e,null)}function Uy(e,t){Tn.C(e,t),Ih("preconnect",e,t)}function Dy(e,t,n){Tn.L(e,t,n);var a=mo;if(a&&e&&t){var o='link[rel="preload"][as="'+Ot(t)+'"]';t==="image"&&n&&n.imageSrcSet?(o+='[imagesrcset="'+Ot(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(o+='[imagesizes="'+Ot(n.imageSizes)+'"]')):o+='[href="'+Ot(e)+'"]';var l=o;switch(t){case"style":l=po(e);break;case"script":l=go(e)}if(!(jt.has(l)||(e=F({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),jt.set(l,e),a.querySelector(o)!==null||t==="style"&&a.querySelector(cl(l))||t==="script"&&a.querySelector(dl(l))))){var i=a.createElement("link");$e(i,"link",e),t==="style"&&(i[Al]=!0,i.onload=i.onerror=function(){rc(i)}),Ve(i),a.head.appendChild(i)}}}function Hy(e,t){Tn.m(e,t);var n=mo;if(n&&e){var a=t&&typeof t.as=="string"?t.as:"script",o='link[rel="modulepreload"][as="'+Ot(a)+'"][href="'+Ot(e)+'"]',l=o;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":l=go(e)}if(!jt.has(l)&&(e=F({rel:"modulepreload",href:e},t),jt.set(l,e),n.querySelector(o)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(dl(l)))return}a=n.createElement("link"),$e(a,"link",e),Ve(a),n.head.appendChild(a)}}}function jy(e,t,n){Tn.S(e,t,n);var a=mo;if(a&&e){var o=Ra(a).hoistableStyles,l=po(e);t=t||"default";var i=o.get(l);if(!i){var r={loading:0,preload:null};if(i=a.querySelector(cl(l)))r.loading=5;else{e=F({rel:"stylesheet",href:e,"data-precedence":t},n),(n=jt.get(l))&&ks(e,n);var c=i=a.createElement("link");Ve(c),$e(c,"link",e),c._p=new Promise(function(y,b){c.onload=y,c.onerror=b}),c.addEventListener("load",function(){r.loading|=1}),c.addEventListener("error",function(){r.loading|=2}),r.loading|=4,Li(i,t,a)}i={type:"stylesheet",instance:i,count:1,state:r},o.set(l,i)}}}function By(e,t){Tn.X(e,t);var n=mo;if(n&&e){var a=Ra(n).hoistableScripts,o=go(e),l=a.get(o);l||(l=n.querySelector(dl(o)),l||(e=F({src:e,async:!0},t),(t=jt.get(o))&&zs(e,t),l=n.createElement("script"),Ve(l),$e(l,"link",e),n.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},a.set(o,l))}}function Ly(e,t){Tn.M(e,t);var n=mo;if(n&&e){var a=Ra(n).hoistableScripts,o=go(e),l=a.get(o);l||(l=n.querySelector(dl(o)),l||(e=F({src:e,async:!0,type:"module"},t),(t=jt.get(o))&&zs(e,t),l=n.createElement("script"),Ve(l),$e(l,"link",e),n.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},a.set(o,l))}}function Wh(e,t,n,a){var o=(o=kn.current)?sl(o):null;if(!o)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(n=po(n.href),t=Ra(o).hoistableStyles,a=t.get(n),a||(a={type:"style",instance:null,count:0,state:null},t.set(n,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=po(n.href);var l=Ra(o).hoistableStyles,i=l.get(e);if(i||(o=o.ownerDocument||o,i={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},l.set(e,i),(l=o.querySelector(cl(e)))?l._p||(i.instance=l,i.state.loading=5):(l=jt.get(e),l||(l={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},jt.set(e,l)),Gy(o,e,l,i.state))),t&&a===null)throw Error(s(528,""));return i}if(t&&a!==null)throw Error(s(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(n=go(n),t=Ra(o).hoistableScripts,a=t.get(n),a||(a={type:"script",instance:null,count:0,state:null},t.set(n,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function po(e){return'href="'+Ot(e)+'"'}function cl(e){return'link[rel="stylesheet"]['+e+"]"}function Jh(e){return F({},e,{"data-precedence":e.precedence,precedence:null})}function Gy(e,t,n,a){if(t=e.querySelector('link[rel="preload"][as="style"]['+t+"]")){if(t[Al]!==!0){a.loading=1;return}}else t=e.createElement("link"),t[Al]=!0,t.onload=t.onerror=rc.bind(null,t),$e(t,"link",n),Ve(t),e.head.appendChild(t);a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2})}function go(e){return'[src="'+Ot(e)+'"]'}function dl(e){return"script[async]"+e}function Fh(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+Ot(n.href)+'"]');if(a)return t.instance=a,Ve(a),a;var o=F({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),Ve(a),$e(a,"style",o),Li(a,n.precedence,e),t.instance=a;case"stylesheet":o=po(n.href);var l=e.querySelector(cl(o));if(l)return t.state.loading|=4,t.instance=l,Ve(l),l;a=Jh(n),(o=jt.get(o))&&ks(a,o),l=(e.ownerDocument||e).createElement("link"),Ve(l);var i=l;return i._p=new Promise(function(r,c){i.onload=r,i.onerror=c}),$e(l,"link",a),t.state.loading|=4,Li(l,n.precedence,e),t.instance=l;case"script":return l=go(n.src),(o=e.querySelector(dl(l)))?(t.instance=o,Ve(o),o):(a=n,(o=jt.get(l))&&(a=F({},n),zs(a,o)),e=e.ownerDocument||e,o=e.createElement("script"),Ve(o),$e(o,"link",a),e.head.appendChild(o),t.instance=o);case"void":return null;default:throw Error(s(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,Li(a,n.precedence,e));return t.instance}function Li(e,t,n){for(var a=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),o=a.length?a[a.length-1]:null,l=o,i=0;i<a.length;i++){var r=a[i];if(r.dataset.precedence===t)l=r;else if(l!==o)break}l?l.parentNode.insertBefore(e,l.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function ks(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function zs(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Gi=null;function $h(e,t,n){if(Gi===null){var a=new Map,o=Gi=new Map;o.set(n,a)}else o=Gi,a=o.get(n),a||(a=new Map,o.set(n,a));if(a.has(e))return a;for(a.set(e,null),n=n.getElementsByTagName(e),o=0;o<n.length;o++){var l=n[o];if(!(l[zo]||l[Pe]||e==="link"&&l.getAttribute("rel")==="stylesheet")&&l.namespaceURI!=="http://www.w3.org/2000/svg"){var i=l.getAttribute(t)||"";i=e+i;var r=a.get(i);r?r.push(l):a.set(i,[l])}}return a}function Es(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function qy(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function em(e,t){return e==="img"&&t.src!=null&&t.src!==""&&t.onLoad==null&&t.loading!=="lazy"}function tm(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function nm(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function am(e,t){typeof t.decode=="function"&&(e.imgCount++,t.complete||(e.imgBytes+=nm(t),e.suspenseyImages.push(t)),e=Qy.bind(e),t.decode().then(e,e))}function Yy(e,t,n,a){if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var o=po(a.href),l=t.querySelector(cl(o));if(l){t=l._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=fl.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=l,Ve(l);return}l=t.ownerDocument||t,a=Jh(a),(o=jt.get(o))&&ks(a,o),l=l.createElement("link"),Ve(l);var i=l;i._p=new Promise(function(r,c){i.onload=r,i.onerror=c}),$e(l,"link",a),n.instance=l}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=fl.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var qi=0;function Vy(e,t){return e.stylesheets&&e.count===0&&Vi(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var a=setTimeout(function(){if(e.stylesheets&&Vi(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4+t);0<e.imgBytes&&qi===0&&(qi=62500*ry());var o=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Vi(e,e.stylesheets),e.unsuspend)){var l=e.unsuspend;e.unsuspend=null,l()}},(e.imgBytes>qi?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(o)}}:null}function om(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)Vi(e,e.stylesheets);else if(e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}}function fl(){this.count--,om(this)}function Qy(){this.imgCount--,om(this)}var Yi=null;function Vi(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yi=new Map,t.forEach(Xy,e),Yi=null,fl.call(e))}function Xy(e,t){if(!(t.state.loading&4)){var n=Yi.get(e);if(n)var a=n.get(null);else{n=new Map,Yi.set(e,n);for(var o=e.querySelectorAll("link[data-precedence],style[data-precedence]"),l=0;l<o.length;l++){var i=o[l];(i.nodeName==="LINK"||i.getAttribute("media")!=="not all")&&(n.set(i.dataset.precedence,i),a=i)}a&&n.set(null,a)}o=t.instance,i=o.getAttribute("data-precedence"),l=n.get(i)||a,l===a&&n.set(null,o),n.set(i,o),this.count++,a=fl.bind(this),o.addEventListener("load",a),o.addEventListener("error",a),l?l.parentNode.insertBefore(o,l.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(o,e.firstChild)),t.state.loading|=4}}var yo={$$typeof:De,Provider:null,Consumer:null,_currentValue:rn,_currentValue2:rn,_threadCount:0};function Zy(e,t,n,a,o,l,i,r,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=rr(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=rr(0),this.hiddenUpdates=rr(null),this.identifierPrefix=a,this.onUncaughtError=o,this.onCaughtError=l,this.onRecoverableError=i,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.transitionTypes=null,this.incompleteTransitions=new Map}function lm(e,t,n,a,o,l,i,r,c,y,b,k){return e=new Zy(e,t,n,i,c,y,b,k,r),t=1,l===!0&&(t|=24),l=ft(3,null,null,t),e.current=l,l.stateNode=e,t=Yr(),t.refCount++,e.pooledCache=t,t.refCount++,l.memoizedState={element:a,isDehydrated:n,cache:t},Zr(l),e}function im(e){return e?(e=Ya,e):Ya}function rm(e,t,n,a,o,l){o=im(o),a.context===null?a.context=o:a.pendingContext=o,a=Hn(t),a.payload={element:n},l=l===void 0?null:l,l!==null&&(a.callback=l),n=jn(e,a,t),n!==null&&(gt(n,e,t),Vo(n,e,t))}function um(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function As(e,t){um(e,t),(e=e.alternate)&&um(e,t)}function sm(e){if(e.tag===13||e.tag===31){var t=sa(e,67108864);t!==null&&gt(t,e,67108864),As(e,67108864)}}function cm(e){if(e.tag===13||e.tag===31){var t=zt();t=ur(t);var n=sa(e,t);n!==null&&gt(n,e,t),As(e,t)}}var vo=!0;function Ky(e,t,n,a){var o=B.T;B.T=null;var l=Z.p;try{Z.p=2,Os(e,t,n,a)}finally{Z.p=l,B.T=o}}function Py(e,t,n,a){var o=B.T;B.T=null;var l=Z.p;try{Z.p=8,Os(e,t,n,a)}finally{Z.p=l,B.T=o}}function Os(e,t,n,a){if(vo){var o=_s(a);if(o===null)cs(e,t,a,Qi,n),fm(e,a);else if(Wy(o,e,t,n,a))a.stopPropagation();else if(fm(e,a),t&4&&-1<Iy.indexOf(e)){for(;o!==null;){var l=Na(o);if(l!==null)switch(l.tag){case 3:if(l=l.stateNode,l.current.memoizedState.isDehydrated){var i=oa(l.pendingLanes);if(i!==0){var r=l;for(r.pendingLanes|=2,r.entangledLanes|=2;i;){var c=1<<31-wt(i);r.entanglements[1]|=c,i&=~c}on(l),(ve&6)===0&&(Oi=yt()+500,ll(0))}}break;case 31:case 13:r=sa(l,2),r!==null&&gt(r,l,2),Ri(),As(l,2)}if(l=_s(a),l===null&&cs(e,t,a,Qi,n),l===o)break;o=l}o!==null&&a.stopPropagation()}else cs(e,t,a,null,n)}}function _s(e){return e=pr(e),Ns(e)}var Qi=null;function Ns(e){if(Qi=null,e=la(e),e!==null){var t=S(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=z(t),e!==null)return e;e=null}else if(n===31){if(e=_(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Qi=e,null}function dm(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(rp()){case Is:return 2;case Ws:return 8;case Sl:case up:return 32;case Js:return 268435456;default:return 32}default:return 32}}var Rs=!1,In=null,Wn=null,Jn=null,hl=new Map,ml=new Map,Fn=[],Iy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function fm(e,t){switch(e){case"focusin":case"focusout":In=null;break;case"dragenter":case"dragleave":Wn=null;break;case"mouseover":case"mouseout":Jn=null;break;case"pointerover":case"pointerout":hl.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ml.delete(t.pointerId)}}function pl(e,t,n,a,o,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:a,nativeEvent:l,targetContainers:[o]},t!==null&&(t=Na(t),t!==null&&sm(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Wy(e,t,n,a,o){switch(t){case"focusin":return In=pl(In,e,t,n,a,o),!0;case"dragenter":return Wn=pl(Wn,e,t,n,a,o),!0;case"mouseover":return Jn=pl(Jn,e,t,n,a,o),!0;case"pointerover":var l=o.pointerId;return hl.set(l,pl(hl.get(l)||null,e,t,n,a,o)),!0;case"gotpointercapture":return l=o.pointerId,ml.set(l,pl(ml.get(l)||null,e,t,n,a,o)),!0}return!1}function hm(e){var t=la(e.target);if(t!==null){var n=S(t);if(n!==null){if(t=n.tag,t===13){if(t=z(n),t!==null){e.blockedOn=t,oc(e.priority,function(){cm(n)});return}}else if(t===31){if(t=_(n),t!==null){e.blockedOn=t,oc(e.priority,function(){cm(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Xi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=_s(e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);mr=a,n.target.dispatchEvent(a),mr=null}else return t=Na(n),t!==null&&sm(t),e.blockedOn=n,!1;t.shift()}return!0}function mm(e,t,n){Xi(e)&&n.delete(t)}function Jy(){Rs=!1,In!==null&&Xi(In)&&(In=null),Wn!==null&&Xi(Wn)&&(Wn=null),Jn!==null&&Xi(Jn)&&(Jn=null),hl.forEach(mm),ml.forEach(mm)}function Zi(e,t){e.blockedOn===t&&(e.blockedOn=null,Rs||(Rs=!0,u.unstable_scheduleCallback(u.unstable_NormalPriority,Jy)))}var Ki=null;function pm(e){Ki!==e&&(Ki=e,u.unstable_scheduleCallback(u.unstable_NormalPriority,function(){Ki===e&&(Ki=null);for(var t=0;t<e.length;t+=3){var n=e[t],a=e[t+1],o=e[t+2];if(typeof a!="function"){if(Ns(a||n)===null)continue;break}var l=Na(n);l!==null&&(e.splice(t,3),t-=3,hu(l,{pending:!0,data:o,method:n.method,action:a},a,o))}}))}function wo(e){function t(c){return Zi(c,e)}In!==null&&Zi(In,e),Wn!==null&&Zi(Wn,e),Jn!==null&&Zi(Jn,e),hl.forEach(t),ml.forEach(t);for(var n=0;n<Fn.length;n++){var a=Fn[n];a.blockedOn===e&&(a.blockedOn=null)}for(;0<Fn.length&&(n=Fn[0],n.blockedOn===null);)hm(n),n.blockedOn===null&&Fn.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(a=0;a<n.length;a+=3){var o=n[a],l=n[a+1],i=o[dt]||null;if(typeof l=="function")i||pm(n);else if(i){var r=null;if(l&&l.hasAttribute("formAction")){if(o=l,i=l[dt]||null)r=i.formAction;else if(Ns(o)!==null)continue}else r=i.action;typeof r=="function"?n[a+1]=r:(n.splice(a,3),a-=3),pm(n)}}}function gm(){function e(l){l.canIntercept&&l.info==="react-transition"&&l.intercept({handler:function(){return new Promise(function(i){return o=i})},focusReset:"manual",scroll:"manual"})}function t(){o!==null&&(o(),o=null),a||setTimeout(n,20)}function n(){if(!a&&!navigation.transition){var l=navigation.currentEntry;l&&l.url!=null&&navigation.navigate(l.url,{state:l.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,o=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),o!==null&&(o(),o=null)}}}function Ms(e){this._internalRoot=e}Pi.prototype.render=Ms.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));var n=t.current,a=zt();rm(n,a,e,t,null,null)},Pi.prototype.unmount=Ms.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;rm(e.current,2,null,e,null,null),Ri(),t[_a]=null}};function Pi(e){this._internalRoot=e}Pi.prototype.unstable_scheduleHydration=function(e){if(e){var t=ac();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Fn.length&&t!==0&&t<Fn[n].priority;n++);Fn.splice(n,0,e),n===0&&hm(e)}};var ym=d.version;if(ym!=="19.3.0")throw Error(s(527,ym,"19.3.0"));Z.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=j(t),e=e!==null?N(e):null,e=e===null?null:e.stateNode,e};var Fy={bundleType:0,version:"19.3.0",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.3.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ii=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ii.isDisabled&&Ii.supportsFiber)try{So=Ii.inject(Fy),vt=Ii}catch{}}return yl.createRoot=function(e,t){if(!T(e))throw Error(s(299));var n=!1,a="",o=lf,l=rf,i=uf;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(l=t.onCaughtError),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=lm(e,1,!1,null,null,n,a,null,o,l,i,gm),e[_a]=t.current,ss(e),new Ms(t)},yl.hydrateRoot=function(e,t,n){if(!T(e))throw Error(s(299));var a=!1,o="",l=lf,i=rf,r=uf,c=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(l=n.onUncaughtError),n.onCaughtError!==void 0&&(i=n.onCaughtError),n.onRecoverableError!==void 0&&(r=n.onRecoverableError),n.formState!==void 0&&(c=n.formState)),t=lm(e,1,!0,t,n??null,a,o,c,l,i,r,gm),t.context=im(null),n=t.current,a=zt(),a=ur(a),o=Hn(a),o.callback=null,jn(n,o,a),n=a,t.current.lanes=n,ko(t,n),on(t),e[_a]=t.current,ss(e),new Pi(t)},yl.version="19.3.0",yl}var Em;function fv(){if(Em)return Hs.exports;Em=1;function u(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u)}catch(d){console.error(d)}}return u(),Hs.exports=dv(),Hs.exports}var hv=fv();const mv=[{path:"NotifyPixaroma.md",source:`---
id: "node:NotifyPixaroma"
title: "Notify Pixaroma"
kind: node
category: "Utility"
order: 47
icon: ""
tags: "sound alert ding beep finished done chime"
comfyClass: "NotifyPixaroma"
---

> Plays a sound when the workflow reaches this node, and times how long the run took to get there.

## What it does

Drop one at the end of a workflow to hear when rendering is done, or branch one off any node to get an audio alert at a checkpoint. Useful when you are in another tab or app while ComfyUI runs. Every Run it also measures how long the workflow took to REACH this node and shows that time on the node face. The sound fires every Run even when upstream is cached.

## The checkpoint timer

The clock starts the moment you click Run and stops when this node is reached, so it answers 'how long did it take to get this far'. One node at the end gives you the whole run; branch several through the graph and the gaps between their times are the per-segment times.

Timing does not depend on the sound. The time is still recorded when this node's \`enabled\` toggle is off and when the master mute is on, so you can time a workflow in complete silence.

## Reading the node face

The clock row shows the last time as minutes : seconds . milliseconds (for example \`02:47.318\`), switching to hours : minutes : seconds . milliseconds if a run goes past an hour. It reads \`--:--.---\` until the first Run, and \`timer off\` when Record time is unticked for this node. A mute marker appears in the row whenever the ding will not play, whether that is this node's own toggle or the master mute - so a silent node never looks like a working one. The small arrow on the RIGHT of the clock row folds the node down to just the clock; click it again to bring the sound controls back.

## Notify time history

Right-click the node and pick \`Notify time history\` to see the last 10 times THIS node was reached, newest first. Each line shows the label (or the sound name if you left the label blank) and the time of day it ran, next to how long the workflow took to reach here, and the fastest one is marked with a lightning bolt. You can copy a single line, export the whole list as a text file, or clear it.

Every Notify node keeps its own separate list, so a workflow with several checkpoints gives you one history per checkpoint rather than one shared pile.

## Settings (right-click the node)

**Collapse / Expand** — Folds the node down to just the clock, or brings the sound controls back. The same thing the arrow on the clock row does.

**Record time** — Turns the checkpoint timer on or off for this one node. While it is off the clock reads \`timer off\` and nothing is added to this node's history. The sound is unaffected.

**Notify time history** — Opens this node's list of the last 10 times, with Copy, Export .txt, and Clear.

**Mute all Notify sounds** — The master mute: no Notify node plays a sound, in any workflow. It is the same switch as the one in this node's own settings, so flipping either one flips both. Checkpoint timers keep recording while it is on.

## Where the times are kept

The recorded times are stored on THIS machine, not inside the workflow. Sharing or exporting a workflow never carries your times along with it, and whoever opens it starts with an empty list. Duplicating a Notify node also starts a fresh list rather than inheriting the original's. The times are remembered between sessions, so they are still there after you reload the page or restart ComfyUI.

## Good to know

- A Notify node inside a SUBGRAPH does not record a checkpoint time - the sound still plays, but nothing lands on the clock or in the history. Put it in the main graph to time it.
- A cached re-run shows a near-zero time. Nothing upstream had to be recomputed, so there was genuinely nothing to wait for.
- The time is measured in your browser, from the start of the Run to the moment this node reports back.

## Inputs

**any** — Wire any node output here. The data passes through untouched - this node only listens for when it is reached.

**enabled** — Per-node mute switch. Turn it off to silence just this node. The checkpoint timer keeps recording.

**sound** — Which sound to play. Lists every \`.mp3\`, \`.wav\`, and \`.ogg\` in the \`assets/sounds/\` folder. Add your own there (then restart ComfyUI).

**volume** — Playback volume from 0 (silent) to 100 (full).

**label** — Optional name shown in the browser console when the node fires, and used to name this node's rows in the time history. Helpful with several Notify nodes in one workflow.

> **Tip:** The \`Preview\` button plays the sound now, ignoring the toggles. The on and off switch for every Notify node lives in this node's own settings, opened with the gear button on the node toolbar, or by right-clicking the node.
`},{path:"Pixaroma3D.md",source:`---
id: "node:Pixaroma3D"
title: "3D Builder Pixaroma"
kind: node
category: "Editors"
order: 8
icon: ""
tags: "mesh glb obj camera light render scene 3d"
comfyClass: "Pixaroma3D"
---

> A full 3D scene editor inside ComfyUI - build, light, and render scenes without leaving your workflow.

## What it does

Opens a fullscreen 3D editor where you can place primitives (cubes, spheres, cylinders, torus, blob, terrain, rock, teapot, hollow vessels), composite assets (trees, houses, furniture, flowers), or import your own \`.glb\` / \`.obj\` models.

The editor includes orbit / pan / zoom camera controls, realistic lighting, and live preview. Keyboard shortcuts follow the Blender layout: \`G\` to grab, \`S\` to scale, \`R\` to rotate, \`Shift+D\` to duplicate, and \`Numpad 1/3/7\` for view presets. Full undo / redo is built in.

## How to use

- Click \`Open 3D Builder\` on the node to open the fullscreen editor.
- Add shapes from the toolbar or import a \`.glb\` / \`.obj\` file.
- Position, scale, and rotate objects using the handles or keyboard shortcuts.
- Adjust the background image, lighting, and canvas size in the settings panel.
- Click \`Save\` to write the render back to the node.
- Run the workflow to get the rendered image as output.

## Outputs

**image** — The rendered 3D scene as a flat RGB image.

**width** — Width of the render in pixels.

**height** — Height of the render in pixels.

> **Tip:** Wire \`image\` into a ControlNet preprocessor for instant depth maps, line art, or normal maps.
`},{path:"PixaromaAudioStudio.md",source:`---
id: "node:PixaromaAudioStudio"
title: "AudioReact Pixaroma"
kind: node
category: "Editors"
order: 15
icon: ""
tags: "music sound video beat visualizer audio reactive"
comfyClass: "PixaromaAudioStudio"
---

> Turn a still image into an audio-reactive video - motion and effects that move with the beat.

## What it does

Opens a fullscreen editor with a live WebGL preview that reacts to audio in real time as you drag sliders. Choose one of 15 motion modes (Pulse Zoom, Camera Shake, Glitch, Pinch, Wave, Tilt, Pixelate, RGB Split, and more) and layer up to 8 overlay effects (chroma shift, bloom, vignette, hue shift, cinematic grade, letterbox, scanlines, film grain).

Both the image and audio inputs are optional - you can wire upstream sources or load them inline inside the editor by drag-drop or file pick. No extra models are needed. It needs a browser with 3D graphics support, which almost every current browser has.

## How to use

- Wire an upstream IMAGE and AUDIO, or click \`Open AudioReact\` and load them inside the editor.
- Pick a motion mode and adjust its intensity and other settings in the sidebar.
- Add overlay effects from the effects panel.
- Use the transport bar to scrub and preview the animation in real time.
- Click \`Save\` to store the settings; run the workflow to render all frames.

## Outputs

**video_frames** — All rendered animation frames as a batch of images.

**audio** — The audio track, passed through so it can be combined into a video later.

**fps** — Frames per second of the render.

> **Tip:** Pair with \`Save Mp4 Pixaroma\` to mux the audio and frames into a single MP4 file.
`},{path:"PixaromaCombine.md",source:`---
id: "node:PixaromaCombine"
title: "Combine Pixaroma"
kind: node
category: "Logic & Flow"
order: 7
icon: ""
tags: "merge batch accumulate gather join"
comfyClass: "PixaromaCombine"
---

> Join two inputs into one batch - images, video frames, latents, numbers, or text.

## What it does

Takes any two inputs and merges them into one. Images and video frames are stacked into a single bigger batch; latents are batched the same way; numbers and text are gathered into a list. If different-sized images come in, the second is resized to match the first.

## What you can join

Both inputs must be the SAME kind of thing:

- image + image -> one bigger image batch (for example 3 frames stacked together)
- video frames + video frames -> a longer clip
- latent + latent -> a batched latent
- number + number -> a list, like 0 then 1 then 2
- text + text -> a list of words

## Good to know

- You can't mix kinds. An image plus text, or a latent plus a number, stops with a clear message - wire two of the same kind instead.
- An empty input is fine - Combine just passes the other side through. That is why it works as a loop accumulator from round 1.
- Different-sized images: the second one is resized to match the first (whatever you wire into \`any1\` sets the size).

## Using it in a loop

Combine shines as the 'pile-up' node inside a loop. Wire the running total into \`any1\` and the new round's result into \`any2\`, then carry the output back through \`Loop End\`. Each round adds onto the pile. On the very first round one side is empty - Combine just passes the other side through, so it works from round 1 with no special setup.

## Outputs

**batch** — The two inputs joined together. For images and frames this is one larger batch; for numbers and text it is a list.

> **Tip:** Empty input? Combine passes the other side through, so it is safe to use as an accumulator from the very first round.
`},{path:"PixaromaCrop.md",source:`---
id: "node:PixaromaCrop"
title: "Image Crop Pixaroma"
kind: node
category: "Image"
order: 11
icon: ""
tags: "trim cut region area chop"
comfyClass: "PixaromaCrop"
---

> Crop any image visually with a draggable handle - no typing pixel coordinates.

## What it does

Shows a draggable crop rectangle over your image with corner and edge handles. The on-node panel exposes \`Width\`, \`Height\`, \`X\`, \`Y\`, \`Ratio\`, and \`Alignment\` fields - math expressions like \`1024+512\` or \`512*2\` work in any number field. Picking a non-Free alignment auto-centers the crop rectangle.

Three ways to load a source image: wire any upstream IMAGE into the input slot, drag and drop a file onto the node body, or paste from the clipboard with \`Ctrl+V\`. Drag-drop and paste auto-disconnect the upstream wire so your loaded image takes over.

## How to use

- Wire an upstream IMAGE, drag a file onto the node, or paste with \`Ctrl+V\`.
- To keep transparency, also wire a MASK into the \`mask\` input (for example Load Image's MASK output) - it gets cut with the exact same box.
- Adjust the crop rectangle using the panel fields or click \`Open Crop Editor\` for the fullscreen editor with handles.
- Choose a preset ratio (1:1, 16:9, 9:16, and more) or leave it on \`Free\`.
- Run the workflow to output the cropped result.
- To put an edited crop back later, wire the \`crop_info\` output into Image Uncrop Pixaroma.

## Outputs

**image** — The cropped image.

**mask** — The cropped mask, cut with the same box as the image. Wire a MASK in (such as Load Image's MASK) to carry transparency through the crop; otherwise it is a fully-opaque mask sized to the crop.

**crop_info** — Feed this into Image Uncrop Pixaroma to paste an edited version of the crop back onto the original image at the exact same spot.

**width** — Width of the cropped area in pixels.

**height** — Height of the cropped area in pixels.
`},{path:"PixaromaFirstLastFrame.md",source:`---
id: "node:PixaromaFirstLastFrame"
title: "First Last Frame Pixaroma"
kind: node
category: "Utility"
order: 31
icon: ""
tags: "first last frame start end continue continuation extend chain join carry on next video ending beginning still grab last frame from video"
comfyClass: "PixaromaFirstLastFrame"
---

> Takes the very first and the very last frame out of a video, as two images.

## What it does

Give it a video and it hands you back two pictures: the frame the video starts on and the frame it ends on. Wire either one into Save Image to keep it.

The reason most people want this is to carry on from where a clip ended. Render a video, take its last frame, use that as the starting picture for the next video, and the two clips join up. Repeat that and you can build a long scene out of short ones.

## Which input to use

There are two inputs because ComfyUI has two different kinds of video travelling on wires, and they do not fit the same slot. Connect whichever one you have. You never need both.

**video_frames** — For a batch of frames. This is what Load Video Pixaroma gives you from its \`video_frames\` output. Any image batch works here, including the frames coming out of a video model before they are saved.

**video** — For ComfyUI's own video type, the purple \`VIDEO\` wire. This is what its Load Video node gives you.

## Good to know

- If you connect both inputs, \`video_frames\` is the one that gets used.
- Reading a video file only costs the two frames it needs, so pointing this at a long clip does not fill your memory with the whole thing.
- If you wire in a single picture instead of a batch, both outputs give you that same picture. Nothing breaks.
- The frames come out exactly as they are in the video. Nothing is resized, cropped or recoloured.

## Outputs

**first_frame** — The frame the video opens on.

**last_frame** — The frame the video ends on. This is the one to feed into your next video when you want the clips to join up.

> **Tip:** To pick any frame in the middle rather than the two ends, use Load Video Frame Pixaroma.
`},{path:"PixaromaImageComposition.md",source:`---
id: "node:PixaromaImageComposition"
title: "Image Composer Pixaroma"
kind: node
category: "Editors"
order: 10
icon: ""
tags: "collage blend layers grade montage composite text layer font ttf otf custom font"
comfyClass: "PixaromaImageComposition"
---

> A layer-based image compositor inside ComfyUI - arrange, blend, and grade multiple images on one canvas.

## What it does

Opens a fullscreen compositor where you stack images as layers and control each one independently: move, scale, rotate, set opacity, choose a blend mode, apply Gaussian blur, or remove its background with AI.

The eraser tool masks any layer non-destructively, with a \`Restore\` mode to paint areas back in. An FX adjustment layer (like a Photoshop grade layer) applies color-grade effects (exposure, contrast, saturation, tone) plus 14 cinematic presets to everything below it. Text layers let you add styled, editable text directly on the canvas.

Drag an image onto the closed node body to add it as a new layer. Wire upstream IMAGE inputs into placeholder slots for generative workflows.

## How to use

- Drag an image onto the node body to add a layer and open the editor, or click \`Open Image Composer\`.
- Add more layers via drag-drop, paste, the \`+\` button, or by wiring an upstream IMAGE into a placeholder slot.
- Select a layer in the panel to move / scale / rotate it with handles, or use the right sidebar to set opacity, blend mode, and blur.
- Add an FX layer to apply a color grade or cinematic preset above any layer group.
- Click \`Save\` when done; run the workflow to composite and output the result.

## Using your own fonts

Text layers can use your own fonts. Put your \`.ttf\` or \`.otf\` files in \`ComfyUI/models/fonts\`, then click the \`↻\` button at the top of the font list to pick them up without restarting. They appear under \`Custom\`. The full details are on the Add your own fonts page.

## Outputs

**image** — The fully composited image.

**width** — Width of the canvas in pixels.

**height** — Height of the canvas in pixels.
`},{path:"PixaromaImageInfo.md",source:`---
id: "node:PixaromaImageInfo"
title: "Image Info Pixaroma"
kind: node
category: "Image"
order: 1
icon: ""
tags: "width height mask filename size dimensions"
comfyClass: "PixaromaImageInfo"
---

> Unpacks the image_info bundle from Load Image Mini into the mask, size and filename you need.

## What it does

Load Image Mini keeps its face small by sending everything except the image through a single image_info output. This node opens that bundle back up. Wire it in only when you actually need the extras, so the loader itself stays compact.

The width, height and filename also show on this node's own face (in the Classic renderer), so a quick glance often saves you from pulling any wires at all.

## Outputs

**image** — The picture (the same one the loader's image output carries).

**mask** — The mask from the image's transparency, ready for inpainting. Blank if the image has no alpha.

**width** — The image width in pixels, after any resize.

**height** — The image height in pixels.

**filename** — The image's file name.

> **Tip:** Connect the image_info output of a Load Image Mini Pixaroma node into this node's image_info input.
`},{path:"PixaromaImageResize.md",source:`---
id: "node:PixaromaImageResize"
title: "Image Resize Pixaroma"
kind: node
category: "Image"
order: 32
icon: ""
tags: "alpha transparency transparent background removed rmbg cutout png black background lost preserve keep join image with alpha mask channel rgba"
comfyClass: "PixaromaImageResize"
---

> Resize an image (and its mask) mid-workflow using a set of smart resize modes.

## What it does

Applies one of eight resize modes to the wired image and its optional mask, then outputs the result with its final pixel dimensions. You can also wire a width, height, or longest-side value from another node to drive the size automatically.

## Resize modes

**Off** — Passes the image through unchanged.

**Max megapixels** — Scales down so the image does not exceed a total pixel count. Uses 1 MP = 1024x1024 to stay aligned with standard AI sizes.

**Longest side** — Scales so the longer edge hits the number you set. Works for portrait or landscape without picking an axis.

**Scale by** — Multiplies both dimensions by a factor (2.0 doubles, 0.5 halves).

**Fit inside** — Fits the image inside a W x H box while keeping the whole image visible and the aspect ratio intact.

**Crop to fill** — Scales and center-crops so the image completely fills a W x H box. Edges may be trimmed.

**Match aspect ratio** — Resizes to a chosen preset ratio, either cropping or padding.

**Pad** — Adds a colored border to reach the target size. The padded area becomes white in the mask (the inpaint region).

## Wiring a target size

Connect a value to \`width\`, \`height\`, or \`longest_side\` from another node (e.g. Resolution Pixaroma) to drive the size. Wire only width or only height for an aspect-preserving scale. Wire both for an exact box. \`longest_side\` takes priority when connected.

## Outputs

**image** — The resized image.

**mask** — The resized mask. In Pad mode the added border is white. If you leave the mask input empty and the picture already has a see-through background, that transparency comes out here instead of being lost.

**width** — Final output width in pixels.

**height** — Final output height in pixels.

**longest_side** — The longer of the output width and height.

## Pictures with a see-through background

If you feed in a picture whose background has been removed, wire the mask output along with the image into Join Image with Alpha, and you get the cut-out back at the new size, ready to save as a transparent PNG.

You do not need to wire anything into the mask input for this: when that input is empty, the picture's own transparency is used, and it is cropped and resized exactly the same way the picture is. If you do wire a mask in, yours is used instead.

The image output itself always stays a normal picture, on purpose. Transparency travels in the mask in ComfyUI, and a picture carrying a see-through channel cannot be fed to a sampler: it stops the run with an error. Keeping the two apart means this node fits anywhere.

## The buttons on the node

**The mode chips** — Off, Max MP, Longest side, Scale by, Fit inside, Crop to fill, Match ratio and Pad. Pick how the image is resized.

**Snap** — Rounds the final width and height to a multiple of 8, 16, 32 or 64, which most models prefer.

**Resample** — How the pixels are recalculated when scaling. Auto suits almost everything.

**Upscaling** — Whether the image is allowed to grow beyond its original size.

**Fill and Crop** — In Crop to fill: Fill scales to cover then trims, Crop takes a piece at original size with no scaling.

**The anchor grid** — Which part of the picture to keep when something has to be trimmed.
`},{path:"PixaromaInpaintCrop.md",source:`---
id: "node:PixaromaInpaintCrop"
title: "Inpaint Crop Pixaroma"
kind: node
category: "Image"
order: 13
icon: ""
tags: "inpaint mask repair fix retouch face hands blemish"
comfyClass: "PixaromaInpaintCrop"
---

> The easy way to set up an inpaint - paint a mask, get a model-ready crop automatically.

## What it does

Open the fullscreen editor and paint a mask over the part of the image you want to fix. The node finds the box around your mask, adds a context margin so the model can see the surroundings, and crops a clean, model-friendly piece (sized to a multiple of 8 and scaled toward your target, so even a small masked area gets enough resolution to look sharp).

Wire the cropped \`image\` and \`mask\` into your inpaint model (KSampler, Flux, edit models), then send \`crop_info\` into Inpaint Stitch Pixaroma to drop the result back in place. The orange box in the editor shows exactly what will be cropped as you paint. You also set how the seam blends here, with the \`Softness\` slider, and watch it preview live in a tint color you can switch (red, green, blue, yellow, orange) so it stays visible on any subject.

## How to use

- Wire an image in, or drag-drop / paste one onto the node body.
- Click \`Open mask editor\` and paint over the area to change. Use Brush / Erase (B / E), the size slider or \`[\` \`]\`, Clear and Invert. Scroll the wheel to zoom in for fine detail; hold Space and drag (or middle-drag) to pan.
- In the editor, drag \`Softness\` to set how soft the seam blends - the preview shows it live. Softness, blend mode, mask grow, crop size and context are on the node AND mirrored in the editor, so set them wherever is handier.
- Click \`Save\` to keep the mask on the node, then wire \`image\` and \`mask\` into your inpaint model. Saving is what stores your painting: if you close the editor with unsaved strokes it asks first, so you cannot lose them by accident.
- Send \`crop_info\` to Inpaint Stitch Pixaroma.

## Settings

**softness** — How far the seam feathers when the crop is pasted back. Higher values grow the crop a little so the soft blend has room (you'll see the crop box expand). The editor previews it live; it travels to Inpaint Stitch automatically.

**blend mode** — How the result is pasted back. Mask: only the area you painted is replaced, the rest of the crop keeps the original (the normal inpaint). Whole crop: the ENTIRE cropped box is replaced with the model's version - use when the model also relit or changed the surroundings, or for an img2img-style pass.

**size mode** — Keep shape scales the long side to the target with no stretching (best quality). Force size outputs a square. Free keeps the natural size.

**context px** — How much surrounding area to include around your mask.

**mask grow / blur** — Expand the mask before cropping, and soften the mask the model sees.

**invert mask** — Flip the mask so the inpaint hits the OPPOSITE area (swap subject and background). Works on a wired or painted mask - no separate Invert Mask node needed.

## Outputs

**image** — The cropped region, sized for the model.

**mask** — The matching cropped mask. Wire it into SetLatentNoiseMask or your inpaint conditioning.

**crop_info** — Carries the original and where the crop came from. Wire it into Inpaint Stitch Pixaroma.

**width / height** — The crop size in pixels, handy for an empty latent or edit models.

> **Tip:** The \`crop_info\` wire is the same type Image Crop uses, so the two are interchangeable.
`},{path:"PixaromaInpaintStitch.md",source:`---
id: "node:PixaromaInpaintStitch"
title: "Inpaint Stitch Pixaroma"
kind: node
category: "Utility"
order: 14
icon: ""
tags: "seam blend feather merge join invisible edge"
comfyClass: "PixaromaInpaintStitch"
---

> Paste your inpainted crop back onto the original, blended so the seam disappears.

## What it does

The other half of the inpaint workflow. After Inpaint Crop Pixaroma cropped a region and you ran your model on it, this node resizes the result back and blends it into the original at the exact spot. By default only the painted area changes, so everything else stays pixel-perfect.

The seam softness and blend mode start from the Inpaint Crop Pixaroma node and ride the \`crop_info\` wire, but you can OVERRIDE them right here (\`softness\` -1 = use the crop's) along with \`color match\`. The big win: this node is AFTER the sampler, so changing any of them re-runs only this node - the sampler stays cached on a fixed seed - meaning you can fine-tune the blend instantly without re-generating the image. \`color match\` corrects a color or tone shift the model introduced by matching the unchanged surroundings around your mask (keep it Off when you deliberately changed colors). It also hands back the untouched \`original\` so you can compare before and after.

## How to use

- Wire the \`crop_info\` output of Inpaint Crop Pixaroma into \`crop_info\`.
- Wire your inpainted crop (after the model) into \`image\`. It is resized back automatically.
- Run the workflow to get the finished full image.
- To fine-tune the blend WITHOUT re-generating: change \`softness\`, \`blend mode\` or \`color match\` HERE and run again - only this node re-runs, the sampler is cached (fixed seed), so it's instant.
- Wire \`image\` and \`original\` into Image Compare Pixaroma for an instant before / after.

## Settings

**softness** — Seam feather, overriding the Crop node's. -1 = use the Crop node's value; 0-150 tunes the blend here, instantly (no re-sample). Bigger than the room the crop left may show a slightly harder edge - raise the Crop node's softness for more room.

**blend mode** — from crop = use what the Crop node set. mask = replace only the painted area. whole crop = replace the entire cropped box. Changing it here re-runs only this node.

**color match** — Correct a color/tone shift the model introduced, matching the unchanged surroundings around your mask. Off for deliberate color changes (it would pull them back). No live preview - set it and re-run.

## Outputs

**image** — The original image with the inpainted crop blended back in place.

**original** — The full original uncropped image, for a before / after compare.
`},{path:"PixaromaLoadImage.md",source:`---
id: "node:PixaromaLoadImage"
title: "Load Image Pixaroma"
kind: node
category: "Image"
order: 23
icon: ""
tags: "open file input picker photo import"
comfyClass: "PixaromaLoadImage"
---

> Load an image with built-in resize - max megapixels, longest side, fit inside, crop to fill, and more - in one node.

## What it does

A drop-in replacement for the native Load Image node with an inline resize panel, so you rarely need a separate resize node downstream. Supports all native features: upload, drag-drop, paste, animated images, and alpha-to-mask extraction.

Resize modes: \`Off\`, \`Max megapixels\`, \`Longest side\`, \`Scale by\`, \`Fit inside\`, \`Crop to fill\`, \`Match aspect ratio\`, and \`Pad\`. Snap chips, a resample picker, and an upscale toggle round out the controls.

## How to use

- Click \`Upload\`, drag a file onto the node, or paste from the clipboard to load an image.
- Use the thumbnail dropdown (with subfolder groups) or the \`◀ ▶\` arrows to switch between images.
- Pick a resize mode chip in the panel. Its controls appear below.
- The node shows a live INPUT to OUTPUT size card so you can confirm the final dimensions before running.

## Outputs

**image** — The loaded image, after any resize.

**mask** — Alpha channel as a mask (blank if the image has no alpha).

**width** — Output width in pixels, after any resize.

**height** — Output height in pixels, after any resize.

**filename** — The image filename (without extension).

**original_width** — Width of the original image before any resize.

**original_height** — Height of the original image before any resize.

> **Tip:** Replaces Get Image Size + Image Scale chains in most workflows.
`},{path:"PixaromaLoadImageMini.md",source:`---
id: "node:PixaromaLoadImageMini"
title: "Load Image Mini Pixaroma"
kind: node
category: "Image"
order: 0
icon: ""
tags: "small compact loader tidy"
comfyClass: "PixaromaLoadImageMini"
---

> A compact Load Image: upload, pick, preview, and just two outputs. All the resize controls tuck into the gear.

## What it does

This is the small version of Load Image Pixaroma. It loads a picture from ComfyUI's input folder and gives you a clean, minimal node - a toolbar, the file picker, and a preview - with only two outputs so it does not clutter the canvas.

Everything the full Load Image can do is still here. The upload, paste and drag-drop all work, and Open in MaskEditor and Copy/Paste (Clipspace) behave exactly as they do on the full node.

## The toolbar

**Upload** — Choose an image file from your computer.

**Paste** — Paste an image from the clipboard (or press Ctrl+V while the node is selected).

**Gear** — Open the settings panel: the resize modes, snap, resample, upscaling, and this node's accent colour.

## Picking a file

Use the arrows to flip through the images in your input folder one at a time (PageUp / PageDown also work), or click the filename to open the picker and choose from thumbnails. You can also drag an image straight onto the node.

## Resize lives in the gear

To keep the face small, all the resizing lives in the gear settings panel: Max megapixels, Longest side, Scale by, Fit inside, Crop to fill, and Match ratio, plus snap and the resample filter. It is the same resize engine as the full Load Image. Padding is not here on purpose - use Outpaint Pixaroma for that.

The two small cards on the face show the input size and the resulting output size so you can see the resize at a glance.

## Outputs

**image** — The loaded picture, after any resize you set in the gear.

**image_info** — A small bundle carrying the mask, width, height and filename. Wire it into Image Info Pixaroma only when you need those extras - that is what keeps this loader small.

> **Tip:** Need the mask, width, height or filename? Add an Image Info Pixaroma node and wire image_info into it.
`},{path:"PixaromaLoadImagesFolder.md",source:`---
id: "node:PixaromaLoadImagesFolder"
title: "Load Images from Folder Pixaroma"
kind: node
category: "Image"
order: 25
icon: ""
tags: "batch folder directory many bulk each one by one subfolders recursive keep structure tree mirror flatten"
comfyClass: "PixaromaLoadImagesFolder"
---

> Load many images from any folder and run your workflow on each one, one at a time.

## What it does

Point it at a folder of images and pick which ones to process. When you Run, it feeds the selected images through your workflow one at a time and gives you a finished result for each. It is a drop-in for Load Image when you want to batch a whole folder: swap it in, wire it the same way, and one Run handles every image. Images can be different sizes.

It has the same resize options as Load Image Pixaroma (\`Max megapixels\`, \`Longest side\`, \`Scale by\`, \`Fit inside\`, \`Crop to fill\`, \`Match aspect ratio\`), applied to each image as it loads. Resize is \`Off\` by default.

## How to use

- Set the folder: type or paste a path into the folder box, or click \`Browse\` to navigate your drives and folders and pick one.
- Click \`Pick images\` to open the gallery. Use \`Select all\`, type a number in the \`First\` box to grab the first few (it selects as you type), or click individual thumbnails to choose exactly what you want.
- Wire \`image\` into your workflow (upscale, restyle, etc.) and \`filename\` into a Save node so each result keeps its original name.
- \`Include subfolders\` in the gallery also loads images from folders inside your folder. Their names then come out flattened, so an image at portraits/ana.png is called portraits_ana and cannot clash with a same-named file elsewhere.
- \`Keep folder structure in the name\`, next to it, hands over the real path (portraits/ana) instead. Switch on \`Keep folders from the wired name\` in Save Image Pixaroma's settings as well and your whole folder tree is rebuilt in the save folder, so processing a folder of folders gives you back the same arrangement.
- Click Run once and leave the batch count at 1. The node processes every selected image by itself.

## Outputs

**image** — Each selected image, one per item, after any resize.

**mask** — Each image's mask from its alpha channel (blank if it has none).

**width** — Each image's width in pixels (after any resize). Wire into an empty latent so it matches the image's size.

**height** — Each image's height in pixels (after any resize).

**filename** — Each image's filename without the extension, for naming saved results. With subfolders included this is flattened (portraits/ana becomes portraits_ana) unless \`Keep folder structure in the name\` is on.

**index** — The 1-based position of each image in this batch (1, 2, 3 ...).

**total** — How many images are in this batch (how many loaded; same for every item).

> **Tip:** Pick 5 images and you get 5 results from one Run. No need to match any batch number.
`},{path:"PixaromaLoadVideo.md",source:`---
id: "node:PixaromaLoadVideo"
title: "Load Video Pixaroma"
kind: node
category: "Image"
order: 29
icon: ""
tags: "mp4 movie frames clip import video"
comfyClass: "PixaromaLoadVideo"
---

> Upload or pick a video, decode it to frames plus audio and info, and preview it right on the node.

## What it does

Loads a video from ComfyUI's input folder and turns it into a batch of image frames you can feed into any image or video workflow. A video preview plays on the node body so you can check the clip without leaving ComfyUI.

The details you usually need are built in as separate outputs, so you do not need a second 'video info' node.

## How to use

- Click \`choose video to upload\` to add a file from your computer, or pick one from the dropdown (use the arrows to flip through).
- Wire \`video_frames\` into an image or video node. To rebuild a video later, send \`video_frames\` and \`audio\` straight into Save Mp4 Pixaroma.
- The clip plays in the preview as soon as it is selected, no need to run first.

## Loading controls

**Max frames** — How many frames to load from the start of the video. 0 = all. The safety valve for long clips: it never reads more than this many. Works with Skip first frames, which trims frames off the front of that window (Max 100 with Skip 5 gives 95).

**Force FPS** — Force a steady frames-per-second by dropping or duplicating frames (a 60fps clip forced to 24). 0 = keep the original rate. AI video models usually expect a fixed rate.

**Skip first frames** — Skip this many frames from the start, like trimming an intro. Trims the front of the loaded frames.

**Custom width / height** — Resize each frame as it loads. 0 = keep original. Set one to scale proportionally; set both to crop-to-fill that exact size (keeps proportions and trims overflow, like Resize Crop). It never stretches.

## Outputs

**video_frames** — The video as a batch of image frames.

**audio** — The soundtrack (empty if the file has none). Wire into Save Mp4 to keep the sound.

**frame_count** — How many frames were loaded.

**fps** — Frames per second of the loaded clip.

**width / height** — Frame size in pixels, after any resize.

**duration** — Length of the loaded clip in seconds.

## Requirements

Load Video reads frames with PyAV (or imageio as a fallback) and gets audio with ffmpeg. Most ComfyUI setups already have these, so usually there is nothing to install. If you ever see a 'video reader' message, install PyAV: in ComfyUI Manager use its pip install option and enter \`av\` (portable Windows: run \`python_embeded\\python.exe -m pip install av\` in your ComfyUI folder).

> **Tip:** Pairs with Save Mp4 Pixaroma; video_frames and audio wire straight across.
`},{path:"PixaromaLoadVideoFrame.md",source:`---
id: "node:PixaromaLoadVideoFrame"
title: "Load Video Frame Pixaroma"
kind: node
category: "Image"
order: 30
icon: ""
tags: "still grab frame single picture screenshot"
comfyClass: "PixaromaLoadVideoFrame"
---

> Load a video and pick one exact frame to use as an image. Like a Load Image node, but for video.

## What it does

Loads a video and pulls out a single frame you choose, then sends it on as an image. Use it when you want one still picture from a clip without exporting the frame in another program first.

The frame you pick shows in a preview right on the node, and it reads the video's frame count for you so the slider knows how far it can go.

## How to pick a frame

- Click \`choose video to upload\` to add a file, or pick one from the dropdown.
- Drag the slider under the preview to scrub to any spot. The preview updates as you drag.
- Use the \`◀\` and \`▶\` buttons to step exactly one frame back or forward for a pinpoint choice.
- Or type the exact frame number in the \`frame\` box above the preview.

## Good to know

- The frame number is 0-based, so \`frame 0\` is the very first frame.
- If you enter a number past the end of the video, the last frame is used.
- The preview is a quick guide; the frame the node sends out is always exact. On heavy phone videos (HEVC) the preview can lag a little, same as the Load Video node.

## Outputs

**image** — The frame you picked, as an image.

**mask** — A blank mask that matches the frame, so it fits the same slots as Load Image.

**frame_count** — How many frames the whole video has.

**fps** — Frames per second of the video.

**width / height** — Frame size in pixels.

## Requirements

Reads frames with PyAV (or imageio as a fallback). Most ComfyUI setups already have these. If you ever see a 'video reader' message, install PyAV: in ComfyUI Manager use its pip install option and enter \`av\` (portable Windows: run \`python_embeded\\python.exe -m pip install av\` in your ComfyUI folder).

> **Tip:** For loading a whole clip as a batch of frames instead, use Load Video Pixaroma.
`},{path:"PixaromaLoopEnd.md",source:`---
id: "node:PixaromaLoopEnd"
title: "Loop End Pixaroma"
kind: node
category: "Logic & Flow"
order: 6
icon: ""
tags: "repeat iterate finish end loop"
comfyClass: "PixaromaLoopEnd"
---

> The closing bracket of a loop - sends each round back around, then outputs the final result.

## What it does

Marks the end of the repeating section. Wire \`loop\` from \`Loop Start\`. Into the \`value\` slots, feed whatever you want carried to the next round (often a \`Combine\` node that gathers each round's frames). After the last round finishes, the value slots output the final carried values.

## How to use

- Wire \`loop\` from Loop Start's loop output.
- Put your generation nodes between Loop Start and Loop End.
- Feed the result you want to keep building into a \`value\` slot here - it loops back to Loop Start for the next round.
- Wire the matching output (value1, value2 ...) onward to use the final result after all rounds are done.

## Outputs

**value1...value5** — The final carried values after the last round. Match them to the value slots you fed in.

> **Tip:** Think of Loop Start and Loop End as brackets around the part you want to repeat. Everything between them runs each round.
`},{path:"PixaromaLoopStart.md",source:`---
id: "node:PixaromaLoopStart"
title: "Loop Start Pixaroma"
kind: node
category: "Logic & Flow"
order: 5
icon: ""
tags: "repeat iterate for each again loop"
comfyClass: "PixaromaLoopStart"
---

> The opening bracket of a loop - repeat a section of your workflow a set number of times.

## What it does

Put your nodes BETWEEN Loop Start and Loop End and that whole section runs again and again. Set \`total\` to the number of rounds. Use it to build a long video in chunks, grow a batch of images, or run the same step over and over.

It always comes as a pair with \`Loop End\` - wire Loop Start's \`loop\` output into Loop End's \`loop\` input so the two brackets know they belong together.

## Carrying values between rounds

The \`value\` slots are for things you want to hand from one round to the next - the frames built so far, a running total, the last image, and so on. Whatever a round produces, feed it back into the matching slot on \`Loop End\`, and \`Loop Start\` hands it to the next round. Leave the value slots empty if your loop does not need to carry anything.

## Outputs

**value1...value5** — The carried values for this round. Only use as many as you need.

**loop** — Wire this into Loop End's loop input to pair the two brackets.

**index** — Which round you are on, counting from 0 (0, 1, 2 ...). Handy for picking a different frame or value each round.

## Tips

- Pair it with \`Combine Pixaroma\` inside the loop to pile up each round's result (round 1 + round 2 + ...).
- \`total\` is how many rounds run. The loop body runs exactly that many times.
- If a value slot is empty it just carries nothing - that is fine.

> **Tip:** Loop Start and Loop End always work together: put your work between them, and feed Loop End's values back to carry them forward.
`},{path:"PixaromaMuteSwitch.md",source:`---
id: "node:PixaromaMuteSwitch"
title: "Mute Switch Pixaroma"
kind: node
category: "Logic & Flow"
order: 41
icon: ""
tags: "bypass disable enable branch off skip"
comfyClass: "PixaromaMuteSwitch"
---

> Toggle whole workflow branches on and off with per-scene pills.

## What it does

Wire the last node of each branch (usually a KSampler) into a row. Clicking a row's pill skips or enables that entire upstream branch on the next Run. Useful for workflows with several scenes or style variants where you only want to render a subset at a time.

## Mode pills

**Single / Multi** — Single is like a radio button - exactly one scene runs. Multi lets any combination run together.

**Mute / Bypass** — Mute means an off scene does not run at all. Bypass means each node passes its input through unchanged.

## How to use

- Wire the last node of each branch into a row (\`input_1\`, \`input_2\`, ...).
- Click a row's pill to toggle it on (orange) or off (grey).
- Rename a row by clicking its label.
- Right-click the node for \`Enable all rows\` / \`Disable all rows\` shortcuts in Multi mode.

## Outputs

**out** — A phantom pass-through used only to chain Mute Switches together. Carries no real data - do not wire it into regular nodes.
`},{path:"PixaromaNote.md",source:`---
id: "node:PixaromaNote"
title: "Note Pixaroma"
kind: node
category: "Prompt & Text"
order: 16
icon: ""
tags: "comment sticky documentation annotate"
comfyClass: "PixaromaNote"
---

> A rich-text annotation that lives on your canvas - no wires, no outputs.

## What it does

Lets you write styled, multi-paragraph notes directly on the canvas. Double-click (or use the pencil button) to open a fullscreen editor.

Supported formatting: bold, italic, underline, strikethrough, headings, bulleted and numbered lists, code blocks with a copy button, tables, horizontal rules, and inline icons (CLIP, LORA, GGUF, model badges and 30+ more). You can also insert custom-colored buttons (Download, View Page, Read More, or plain links) and pre-styled YouTube and Discord pills.

## How to use

- Drop the node anywhere on the canvas.
- Double-click the node body (or click the pencil icon) to open the editor.
- Write and format your content using the toolbar buttons.
- Click \`Save\` to close and persist your note.
- Right-click the node to change its background and title color via the standard Colors menu.

## The buttons on the node

**Edit** — Opens the full note editor, where you can format text and add links, images, icons and code blocks.

**Copy** — Appears on any code block in the note and copies just that code to your clipboard.

> **Tip:** This node never runs during a workflow - it is pure decoration and shows no timing badge.
`},{path:"PixaromaNumber.md",source:`---
id: "node:PixaromaNumber"
title: "Number Pixaroma"
kind: node
category: "Values"
order: 43
icon: ""
tags: "int float value amount"
comfyClass: "PixaromaNumber"
---

> One number field that outputs the same value as both INT and FLOAT.

## What it does

Type a number once and get two outputs: \`int\` (rounded to the nearest whole number) and \`float\` (kept with decimals). Handy when one downstream node needs an integer and another needs a decimal from the same value. The field accepts whole numbers, decimals, and math like \`1024+64\` or \`512*2\`.

## Outputs

**int** — The value rounded to the nearest whole number.

**float** — The value as-is, with decimals preserved.
`},{path:"PixaromaOutpaint.md",source:`---
id: "node:PixaromaOutpaint"
title: "Outpaint Pixaroma"
kind: node
category: "Image"
order: 2
icon: ""
tags: "extend expand wider taller border pad zoom out uncrop background"
comfyClass: "PixaromaOutpaint"
---

> Add a solid-colour border around your image so an outpainting model can paint new scenery into it.

## What it does

Outpainting means extending a picture beyond its edges. This node makes the room for that: it pads your image with a plain fill colour, and an outpainting model then replaces that fill by continuing the scene into it.

The fill is neutral grey by default. Grey is used because a strongly coloured fill can tint the whole result - a model trained to replace green tends to leave a green cast everywhere. You can change the fill by clicking the colour swatch, but grey is the safe choice.

## The two modes

**To ratio** — Grow the image to a target shape, like 16:9 or 3:2. The node works out how much fill to add. Pick which ratios appear in the settings (the gear).

**By side** — Add an exact number of pixels to a chosen edge. Drag a fill edge in the preview to set it by hand; this also switches you to By side automatically. Or type the numbers straight into the \`L\` \`T\` \`R\` \`B\` boxes.

## Setting the four edges by hand

By side mode shows a box per edge: \`L\` left, \`T\` top, \`R\` right, \`B\` bottom, each in pixels of fill to add.

- Type a number and press Enter, or click away, to apply it. The preview and the size cards update as you go.
- Sums work too, so \`512*2\` or \`1024+128\` are fine.
- Arrow keys nudge by 1, and Shift with an arrow nudges by 10.
- Dragging an edge in the preview fills the matching box in live, so the two ways always agree.
- The \`↺\` button at the end of the row puts all four edges back to 0 in one click. It is also on the node's right-click menu.

## Add space: which side gets the fill

In To ratio mode, only one direction ever grows. The Add space row picks the side the new fill goes on:

- \`Left\` / \`Right\` (or \`Top\` / \`Bottom\`) put all the new fill on that one side, so the original image sits against the opposite edge.
- \`Both\` splits the new space evenly across both sides, keeping the image centered.
- If the ratio already matches your image, nothing grows and the row is greyed out.

## Limit and the size cards

The limit chips optionally shrink the padded result to a megapixel target so it stays a sane size to generate. \`Off\` means no scaling at all - the output is exactly the padded size.

The INPUT and OUTPUT cards show the real sizes, and the OUTPUT card turns orange when the size changes. The badge on the preview always shows the true final numbers.

## Preview: picture vs badge

The preview draws the composition - your image with the fill bands around it, at the same proportions the output will have. After a megapixel limit the real output is smaller than the picture looks, so trust the badge for the true size. The picture shows the shape; the badge shows the numbers.

Behind a Load Image the preview is live right away. Behind a generated image (a VAE Decode), it appears after one Run.

## Keeping the original at full quality

When you scale a large image down with the limit so the model can handle it, the whole picture goes through the model and the original half comes back a little softer and smaller. If you want the original part back at full quality, wire the \`outpaint_info\` output into an Outpaint Stitch Pixaroma node along with the finished image. It puts your original back exactly and keeps only the new area the model made. This is optional - if you do not wire it, nothing changes.

## Outputs

**image** — Your image with the fill border added (and scaled to the limit, if one is set).

**width** — The final width in pixels - the badge number.

**height** — The final height in pixels.

**outpaint_info** — Optional. Carries your original image and where it sits, for Outpaint Stitch Pixaroma. Leave it unused if you do not need the original restored.

> **Tip:** This node only adds the fill area. The actual outpainting is done by your model or LoRA, which usually needs its own trigger words in the prompt to know it should fill the solid area - set those up with your prompt and loader nodes as that model requires.
`},{path:"PixaromaOutpaintStitch.md",source:`---
id: "node:PixaromaOutpaintStitch"
title: "Outpaint Stitch Pixaroma"
kind: node
category: "Image"
order: 3
icon: ""
tags: "restore original seam blend outpaint"
comfyClass: "PixaromaOutpaintStitch"
---

> Put your pristine original back onto an outpaint result, keeping only the newly generated area.

## What it does

When you outpaint a large image, you usually have to scale it down first so the model can handle it. That sends the whole picture - including the part you wanted to keep - through the model, which softens it. This node fixes that: it scales the finished result back up to full size and drops your original image back over its own area, pixel-for-pixel. Only the new area the model painted is kept from the generated image.

## How to wire it

- Wire the \`outpaint_info\` output of Outpaint Pixaroma into \`outpaint_info\` here.
- Wire the finished image (after VAE Decode) into \`image\`.
- That is it - the node knows where the original goes from the info.

## Feather

\`feather\` softens the join between your original and the new area, fading the original edge into the generated part over that many pixels. A little usually looks best, because the new area was blended to a re-encoded copy of your original, not the exact one, so there can be a faint step at the seam. Set it to 0 for a hard edge. Only the edges next to the new area are softened - the real picture edges stay sharp.

## Color match

On a plain background (a flat wall, sky, floor, or studio backdrop) you can sometimes see a tone step where the new area meets your original, because the model matched a slightly shifted copy of your image. \`color match\` fixes it by continuing your original's colour along the seam out into the new area, so the join disappears. It follows the background per region, so it evens out a scene with a light wall over a darker floor, not just a single flat colour. It only shifts overall tone, never texture or detail, so it cannot add artefacts.

Starts at 100, which is a full match and usually the sweet spot. Turn it down toward 0 to leave the model's colours as they are (handy if the new area has genuinely different content you do not want shifted). You can push above 100 for the rare case a faint step still shows, but that starts to over-match.

## About the seam

This will not always be as invisible as Image Uncrop, and that is expected. The whole picture went through the model, so the generated area is a slightly shifted version of your original. Color match evens out the tone (per region) and feather blends the edge, and for extending scenery (sky, ground, walls, water) the join is usually not noticeable. If a background is very smooth and a step still shows, raise feather and nudge color match up.

## Sliders and the dots

Feather and Color Match are sliders: drag across one to set it, or double-click to type an exact number (hold Shift while dragging for fine control). Each has a small dot on the left of its row, so you can wire a number node straight into it. When you do, that slider greys out and locks - the connected number is in charge, and the dimmed value shown is just the slider's own fallback. Unplug the wire to use the slider again. Right-click the node and choose Slider colour to recolour the sliders, and you can save that colour as the default for every new Outpaint Stitch node.

## Outputs

**image** — The full-size image: the model's new area with your pristine original pasted back over its region.

**mask** — White marks the new area, black the untouched original. Feed it into a refine or inpaint pass if you want to sharpen just the new part.

> **Tip:** Optional companion to Outpaint Pixaroma. Skip it and the plain Outpaint result works fine; add it when you scaled a big image down and want the original half back at full quality.
`},{path:"PixaromaPaint.md",source:`---
id: "node:PixaromaPaint"
title: "Paint Pixaroma"
kind: node
category: "Editors"
order: 9
icon: ""
tags: "brush draw sketch layers erase paint"
comfyClass: "PixaromaPaint"
---

> A layered painting editor inside ComfyUI - draw, retouch, and compose on stacked layers.

## What it does

Opens a fullscreen painting canvas with multiple layers, Photoshop-style controls (drag to reorder, opacity, blend modes, merge, flatten), and a full brush engine. Tools include pencil, brush, eraser, smudge, fill, shape, and color picker. The smudge tool gives smooth color blending; brush hardness and opacity are fully adjustable.

Drag an image file onto the closed node body to load it as a new top layer and open the editor automatically. The \`AI Remove Background\` button on image layers extracts subjects with one click. A \`Transparent BG\` checkbox in the toolbar lets you save a PNG with a transparent background directly to disk.

## How to use

- Drag an image onto the node body to pre-load a layer, or click \`Open Paint Studio\` to start from scratch.
- Use the layer panel on the right to add, reorder, merge, or delete layers.
- Pick a tool from the left toolbar and paint on the canvas.
- Click \`Save\` when done; run the workflow to output the result.

## Outputs

**image** — The final composited painting.

**width** — Width of the canvas in pixels.

**height** — Height of the canvas in pixels.
`},{path:"PixaromaPauseImage.md",source:`---
id: "node:PixaromaPauseImage"
title: "Pause Image Pixaroma"
kind: node
category: "Image"
order: 36
icon: ""
tags: "stop check gate review approve interrupt"
comfyClass: "PixaromaPauseImage"
---

> Pause your workflow mid-run to review an image before the expensive part runs.

## What it does

Acts as an inline gate on any IMAGE wire. Drop it between an image source (e.g. a KSampler) and expensive downstream work (an upscale, a second pass). In Pause mode only the upstream runs and the image is shown; you then decide whether to continue.

## The three modes

**Pause** — Run stops here. The image is shown and a snapshot is saved. The downstream does not run yet.

**Continue** — The upstream is skipped and the saved snapshot is fed downstream. Use this after reviewing, so only the cheaper downstream work runs.

**Pass** — The whole workflow runs end to end, as if this node were not there.

## How to use

- Wire your image source into \`image\` and wire the output onward.
- Set the toggle to \`Pause\` and click Run. Review the image.
- Switch to \`Continue\` and click Run again - only the downstream runs, fed from the image you saw.
- Use \`Regenerate\` to roll a fresh image at the same point.

## Outputs

**image** — The image continuing downstream: the live input in Pause/Pass, or the saved snapshot in Continue.
`},{path:"PixaromaPauseText.md",source:`---
id: "node:PixaromaPauseText"
title: "Pause Text Pixaroma"
kind: node
category: "Prompt & Text"
order: 37
icon: ""
tags: "llm edit review gate check interrupt cache cached runs again re-runs ksampler restarts fixed seed slow"
comfyClass: "PixaromaPauseText"
---

> Pause your workflow to read and fix a piece of text before the rest runs.

## What it does

Acts as an inline gate on any text wire. Made for text that comes from a language model, where you have no control over the exact words. Drop it between your text source and the rest of the workflow. In Pause mode the run stops here and shows the model's text; you edit it, then only the downstream runs, fed the words you approved.

## The three modes (the toggle)

**Pause** — Run stops here and shows the model's text so you can edit it. Press Continue to make one image from it. The downstream does not run until you continue.

**Pass** — The whole workflow runs end to end with the model's text untouched, as if this node were not there. Each Run writes a fresh prompt. Any edit you made is replaced.

**Keep** — The model is skipped and your current text is reused. Click Run again and again for more images of the same prompt, each with a new seed. Fast, and your text is never lost. You can still tweak the text and it stays kept.

## The buttons

**Continue / Run** — The main button. In Pause mode it reads Continue: skip the model and send your edited text downstream to make one image. In Keep mode it reads Run: make a new image with the current text (same as the top Run button).

**Regenerate** — Get fresh text: it finds the node making the text upstream and rolls its seed, so you get a different prompt. Works in Pause mode; it's greyed out in Keep (where the text is being reused - switch to Pause to get a new prompt).

**Revert** — The arrow in the box header - put the model's original text back.

## How to use

- Wire your text source (an LLM / prompt node) into \`text\` and wire the output onward.
- Set the toggle to \`Pause\` and click Run. Read the text, fix it in the box, press \`Continue\`.
- To make many images of the same prompt: flip the toggle to \`Keep\`, then click Run as often as you like. The prompt stays; only the image changes.

## Good to know

- A fresh Run in Pause replaces the box with the model's new text; your edit is kept across Continue and across save and reload.
- In Keep mode, each new image needs your image sampler's seed set to randomize - that is what makes each Run different.

## Outputs

**text** — The text continuing downstream: the model's text in Pause/Pass, or your edited text in Continue.
`},{path:"PixaromaPortraitLandscape.md",source:`---
id: "node:PixaromaPortraitLandscape"
title: "Portrait Landscape Pixaroma"
kind: node
category: "Utility"
order: 34
icon: ""
tags: "rotate orientation flip tall wide multiple of 8 16 32 64 round size snap size divisible by step size must be multiple resolution not accepted size error round to nearest"
comfyClass: "PixaromaPortraitLandscape"
---

> Flip a width and height between portrait (tall) and landscape (wide) with one click.

## What it does

Takes two dimensions and outputs them in the orientation you choose. Click Portrait and the smaller number becomes the width (a tall image); click Landscape and the larger number becomes the width (a wide image). One node replaces keeping two WH nodes and a switch just to flip orientation.

## How to use

- Enter your two sizes in the width and height fields, or wire them in from another node (e.g. WH Pixaroma or Resolution Pixaroma).
- Click Portrait or Landscape - the active one lights up orange.
- Wire the width and height outputs into your Empty Latent (or anywhere a size is needed).
- The order you type the two numbers does not matter: Portrait always gives the tall arrangement, Landscape the wide one.

## Rounding sizes to a step

Models are usually fussy about sizes, wanting them in steps of 8, 16, 32 or 64. The small button at the top left of the node sets that. Click it to step through Off, 8, 16, 32 and 64, and back to Off.

When a step is set, both numbers are rounded to the NEAREST one before they go out, so at 64 a width of 900 leaves as 896. It never rounds down to nothing: the smallest you can get is one step. Off sends your numbers exactly as typed.

Each node keeps its own step, so one workflow can hold several set up differently. The gear beside the button opens the same choice as a row of buttons, along with the node's colour.

Beside the gear the node shows the size it will actually send, like \`896x1312\`, and it updates as you change the step, flip the orientation or edit the numbers, so you can see the result before you run. If a size is coming in from a wire it says 'from input' instead, because the value is only known once the workflow runs.

## Outputs

**width** — The output width. Portrait = the smaller of your two numbers, Landscape = the larger.

**height** — The output height. Portrait = the larger of your two numbers, Landscape = the smaller.

> **Tip:** Need two genuinely different sizes (not just the same numbers swapped)? Use Switch WH Pixaroma instead, which picks between two separate width/height pairs.
`},{path:"PixaromaPreview.md",source:`---
id: "node:PixaromaPreview"
title: "Preview Image Pixaroma"
kind: node
category: "Image"
order: 26
icon: ""
tags: "view result thumbnail show display civitai metadata parameters resources share"
comfyClass: "PixaromaPreview"
---

> Inline image preview with Save, Copy, and Open buttons - batch-aware, with a Strip or Grid layout.

## What it does

Shows every image in a batch as thumbnails on the node. Click a thumbnail to expand it; use the \`◀ ▶\` arrow keys (or click the image) to flip through the batch; press \`Esc\` to collapse. Toggle \`Strip\` (one row) and \`Grid\` (fills the body) layouts with the small icon in the preview's top-right corner.

Four buttons act on the selected frame: \`Save Disk\` saves to a folder you choose, \`Save Output\` writes to ComfyUI's output folder, \`Copy\` puts the frame on your clipboard, \`Open\` opens it in a new tab. Both Save buttons embed the workflow into the PNG so you can drag it back in later.

Set \`save_mode\` to \`save\` and the node becomes a drop-in for the native Save Image node: every frame is written to output on each Run.

If ComfyUI itself was started with \`--disable-metadata\`, nothing is written into your images: no workflow, no prompt, no Civitai info. That is a ComfyUI-wide switch you would have added yourself, and it is off unless you did.

## How to use

- Wire any IMAGE source into \`image\`.
- Leave \`save_mode\` on \`preview\` while iterating; switch to \`save\` for automatic saves.
- Use \`filename_prefix\` to control the output name. Supports subfolders with \`/\`, date tokens like \`%date:yyyy-MM-dd%\`, and node references like \`%Seed Pixaroma.seed%\` that print another node's value into the name (in \`save\` mode, and the Save Disk / Save Output buttons).
- Click a thumbnail to expand it, then use the arrow keys to browse the batch.

## Outputs

**image** — The image(s) passed through unchanged so you can keep wiring downstream.

## The buttons on the node

**Save Disk** — Saves the picture to a folder on your computer, letting you choose where and what to call it.

**Save Output** — Saves it straight into ComfyUI's output folder using your filename prefix.

**Copy** — Copies the picture to your clipboard, ready to paste into another app.

**Open** — Opens the picture in a new browser tab for a closer look.

**The layout button** — Switches a batch between Grid and Strip.

**A thumbnail** — Click one to blow it up inside the node. Click again to step to the next frame.

## Sharing on Civitai

Turn on \`Add Civitai generation info\` in the node's right-click settings and the saved image also carries its settings in the format Civitai reads, so posting it there fills in the model and every LoRA with its strength, plus steps, seed, sampler and size. The values are read from your workflow, so nothing needs wiring in, including when they come from Control Panel Pixaroma or Seed Pixaroma.

The first save after adding a new model pauses briefly to fingerprint it, which is what lets Civitai recognise the file; that happens once per model. Left off, nothing about the file changes.

> **Tip:** Preview state (selected frame, layout) survives switching workflow tabs.
`},{path:"PixaromaPromptFromList.md",source:`---
id: "node:PixaromaPromptFromList"
title: "Prompt From List Pixaroma"
kind: node
category: "Prompt & Text"
order: 20
icon: ""
tags: "index pick number choose"
comfyClass: "PixaromaPromptFromList"
---

> Picks one prompt by number from a Prompt Multi list.

## What it does

A tiny single-purpose node. Connect the \`prompts\` output of a Prompt Multi Pixaroma node (set to List Prompts mode) and set the \`index\` to choose which prompt you want. Index 1 returns the first enabled prompt, index 2 the second, and so on.

Drop several of these in a workflow - all wired to the same Prompt Multi - so each section uses a different prompt from the same library.

## How to use

- Set your Prompt Multi node to \`List Prompts\` mode.
- Wire its \`prompts\` output to this node's \`prompts\` input.
- Set \`index\` to the position of the prompt you want (1-based).
- Wire \`text\` to CLIP Text Encode or any downstream text input.

## Outputs

**text** — The prompt at the chosen index. Returns an empty string if the index is out of range.
`},{path:"PixaromaPromptMulti.md",source:`---
id: "node:PixaromaPromptMulti"
title: "Prompt Multi Pixaroma"
kind: node
category: "Prompt & Text"
order: 17
icon: ""
tags: "batch queue many list prompts"
comfyClass: "PixaromaPromptMulti"
---

> A prompt library with two run modes - queue one image per prompt, or send all prompts as a list.

## What it does

Holds a list of prompts you can toggle on/off, label, and reorder. A pill at the top switches between two behaviors:

\`Queue Text\` mode: clicking Run queues the workflow once per enabled prompt in sequence, one prompt per run. Wire the \`text\` output to CLIP Text Encode to generate one image per prompt.

\`List Prompts\` mode: clicking Run fires the workflow once and makes the full list available as a bundle. Wire the \`prompts\` output into Prompt From List Pixaroma nodes downstream so different parts of the workflow can each pull a different prompt.

## How to use

- Click \`+ Add prompt\` to add a row, then type a prompt into each.
- Toggle the orange pill on each row to include or exclude it from runs.
- Drag the handle on the left edge of a row to reorder.
- Pick \`Queue Text\` or \`List Prompts\` mode using the pills at the top.
- Wire \`text\` to CLIP Text Encode (Queue mode) or wire \`prompts\` to Prompt From List nodes (List mode).

## Outputs

**text** — The active row's prompt for the current queue run. Use this in Queue mode.

**prompts** — All enabled prompts as a list. Use this in List mode with Prompt From List Pixaroma nodes.

> **Tip:** Both outputs are always visible - the mode pill only controls whether the queue loops.
`},{path:"PixaromaPromptPack.md",source:`---
id: "node:PixaromaPromptPack"
title: "Prompt Pack Pixaroma"
kind: node
category: "Prompt & Text"
order: 18
icon: ""
tags: "batch paste queue block many prompts separator split blank line new line dashes --- paragraph reuse rerun run again txt file import load collected save text"
comfyClass: "PixaromaPromptPack"
---

> Paste a block of prompts and queue one workflow run per prompt automatically.

## What it does

You paste multiple prompts into one big textarea. When you click Run the node queues the workflow once per non-empty prompt, looping automatically. The counter pill in the textarea's corner shows the total count at idle, then counts down during a run.

The pills at the top say how your prompts are separated: \`Blank line\`, \`New line\`, or \`--- line\`. If the counter is not the number of prompts you expect, you have picked the wrong pill. The reverse is not a guarantee: now and then a wrong pill lands on the right number by chance, so if a run comes out strange, look at the first prompt as well as the count.

## Reusing a Save Text collection

Save Text Pixaroma keeps every prompt you tried in a .txt file. Those same three names are its Separator setting, so the two nodes fit together with nothing to convert.

Open the .txt, copy everything, press \`Replace\` here, then press the pill with the same name you chose in Save Text. The counter should show the number of prompts you collected. Click Run and it works through all of them.

One thing to watch: if you collected with Save Text's \`Timestamp each entry\` turned on, the date line is stored inside each entry and comes along with the prompt. On \`New line\` it even counts as a prompt of its own, doubling the number. Collect with timestamps off if you mean to reuse the file.

## How to use

- Paste or type your prompts into the textarea.
- Press the pill that matches how they are separated.
- Check the counter reads the number of prompts you expect.
- Wire the \`text\` output to CLIP Text Encode.
- Click Run - the node queues one workflow per prompt automatically.
- Empty or whitespace-only entries are silently skipped.

## Outputs

**text** — The current prompt for this queue run - one entry from the block.

## The buttons on the node

**Blank line** — Prompts are separated by an empty line. Best for long prompts that run over several lines.

**New line** — Every single line is its own prompt. Best for a long list of short ones.

**--- line** — Prompts are separated by a line of dashes. Use this when the prompts themselves contain blank lines, which would otherwise split one prompt into several.

**Copy all** — Copies everything in the box to your clipboard.

**Replace** — Overwrites the box with whatever text is on your clipboard.

**Clear** — Empties the box straight away, with no confirmation.

**The counter** — Shows how many prompts are in the box, and counts down while a run works through them. A number you did not expect means the wrong pill is selected.

> **Tip:** If the textarea is empty when you click Run, nothing queues and a message appears.
`},{path:"PixaromaPromptReader.md",source:`---
id: "node:PixaromaPromptReader"
title: "Prompt Reader Pixaroma"
kind: node
category: "Prompt & Text"
order: 22
icon: ""
tags: "metadata png extract read recover steal prompt from image exif"
comfyClass: "PixaromaPromptReader"
---

> Pull the positive prompt saved inside any ComfyUI or Automatic1111 PNG back out as usable text.

## What it does

Reads the metadata embedded in a PNG and extracts the positive prompt that generated it. Works with ComfyUI workflows (including chained text nodes, SDXL dual encoders, and switch/combine graphs) and with Automatic1111 / Forge images.

The readout updates the moment you pick a file, so you can read the prompt before running. If the image has no embedded prompt (a JPEG, a screenshot, or a PNG that lost its metadata), the readout explains why.

## How to use

- Click \`Upload Image\` to pick a PNG, or drag one onto the node.
- Or use the file dropdown to choose from images already in ComfyUI's input folder.
- The prompt appears in the text area immediately.
- Wire the \`text\` output into a CLIP Text Encode or any other text input to reuse the prompt.

## Follow a connected image

Wire an image's filename into the optional \`filename\` input (for example from Load Image Pixaroma's \`filename\` output) and the node reads that image's prompt automatically. While the wire is connected it ignores its own picker, and the readout follows the connected node live as you switch images.

To go back to picking manually, just upload, drop, or pick a file on the node - that takes over and disconnects the wire.

Only images that actually have a prompt baked in (a PNG made by ComfyUI / A1111 / Forge) can be read. A JPEG or plain photo carries no prompt.

Note: the connected filename does not include the subfolder, so if you keep two images with the exact same name in different input subfolders, the run may read the wrong one. Give them distinct names to be safe (the live readout in the node always shows the correct one).

## Inputs

**filename (optional)** — A filename to read from, usually wired from Load Image Pixaroma's \`filename\` output. When connected it drives the read and overrides the picker.

## Outputs

**text** — The recovered prompt, or an explanatory message when none was found.

## The buttons on the node

**Upload Image** — Opens a file picker so you can choose a PNG and read the prompt saved inside it.

**The arrows** — Step to the previous or next uploaded image and read its prompt automatically.

**The file name** — Click it to pick a different uploaded image from a list.

**Copy** — Copies the prompt it found to your clipboard.

> **Tip:** Use the Previous / Next arrow buttons to step through images in the input folder quickly.
`},{path:"PixaromaPromptStack.md",source:`---
id: "node:PixaromaPromptStack"
title: "Prompt Stack Pixaroma"
kind: node
category: "Prompt & Text"
order: 19
icon: ""
tags: "assemble parts toggle build pieces chunks"
comfyClass: "PixaromaPromptStack"
---

> Build one combined prompt from a list of toggleable chunks.

## What it does

Holds an ordered list of prompt pieces. All enabled pieces are joined into a single string using your chosen separator (a comma and a space to start with, changed in this node's own settings, opened with the gear button on the node toolbar, or by right-clicking the node).

Useful for building prompts modularly: you can mute a style chunk, a color description, or a quality suffix without deleting it.

## How to use

- Click \`+ Add row\` to add a chunk, then type a piece of your prompt into each.
- Click the orange pill on a row to toggle it on or off.
- Drag the handle on the left edge of a row to reorder.
- Wire the \`text\` output to CLIP Text Encode or a downstream text node.

## Outputs

**text** — All enabled chunks joined into one string, in top-to-bottom order.

## The buttons on the node

**The drag handle** — Drag it to move a row up or down and change the order the pieces are joined in.

**ON / OFF** — Leaves a row out of the combined prompt without deleting it, so you can try a version quickly.

**The label field** — An optional name to remind you what a row is for. It is never sent as part of the prompt.

**The delete cross** — Removes that row. It is greyed out on the last row, since one always has to remain.

**Add row** — Adds a new empty row at the bottom.

**Clear all** — Empties the text in every row but keeps the rows, their names and their on/off state.

**Reset** — Puts the node back to a single empty row, as if it were new.

> **Tip:** Trailing commas on each chunk are stripped automatically, so you can be loose with punctuation.
`},{path:"PixaromaRemoveBackground.md",source:`---
id: "node:PixaromaRemoveBackground"
title: "Remove Background Pixaroma"
kind: node
category: "Image"
order: 35
icon: ""
tags: "cutout transparent alpha matte birefnet rembg erase background"
comfyClass: "PixaromaRemoveBackground"
---

> Cut out the foreground from an image using a BiRefNet AI model.

## What it does

Runs a BiRefNet model over the image and returns a cutout with a transparent background (RGBA), plus a foreground mask and an inverted mask - all three in one pass.

## How to use

- Wire an image into \`image\` and pick a model from the \`model\` dropdown.
- Models live in \`ComfyUI/models/background_removal/\`. If the dropdown is empty, download one from HuggingFace first.
- Filenames containing \`matt\` or \`hr\` preprocess at 2048px - better for hair and fine edges. Others use 1024px.
- Connect the cutout \`image\` for compositing, \`mask\` for inpainting (white = kept foreground), or \`inverted_mask\`.

## Outputs

**image** — The cutout in RGBA - the background is fully transparent.

**mask** — Foreground mask: white where the subject was kept.

**inverted_mask** — Background mask: the foreground mask flipped.

> **Tip:** Common models: \`birefnet.safetensors\` (standard), \`birefnet-hr.safetensors\` (high-res), \`birefnet-matting.safetensors\` (best for hair / fur).
`},{path:"PixaromaResizeCrop.md",source:`---
id: "node:PixaromaResizeCrop"
title: "Resize Crop Pixaroma"
kind: node
category: "Image"
order: 33
icon: ""
tags: "exact size cover fill stretch squash aspect force size"
comfyClass: "PixaromaResizeCrop"
---

> Force an image to an exact width and height by crop-to-fill - no stretching, no letterboxing.

## What it does

Scales the image so it completely fills the target box, then crops the overflow from the center. The result is always exactly the width and height you set. Smaller images are scaled up to fill. Great for forcing image or video frames to a fixed size like 512x896 or 704x1280.

## How to use

- Wire an image into \`image\`.
- Type the size into the \`width\` and \`height\` fields, or wire a number into them from another node (e.g. Resolution Pixaroma or a Number node).
- The fields default to 1024 x 1024. The up/down arrows step by 8 since AI/video sizes are usually multiples of 8, but you can type any exact value.
- Optionally wire a \`mask\` - it gets cropped to the same size.

## Outputs

**image** — The cropped image, exactly width x height pixels.

**mask** — The cropped mask, matching the output size (blank when no mask is wired in).

**width** — The output width in pixels.

**height** — The output height in pixels.

> **Tip:** Need to scale without cropping, fit inside a box, or pad instead? Use Image Resize Pixaroma, which has all eight resize modes.
`},{path:"PixaromaResolution.md",source:`---
id: "node:PixaromaResolution"
title: "Resolution Pixaroma"
kind: node
category: "Values"
order: 42
icon: ""
tags: "size width height ratio dimensions aspect"
comfyClass: "PixaromaResolution"
---

> One-click resolution picker for AI image sizes, with ratio chips, snap, custom ratios, and math.

## What it does

Shows a grid of aspect-ratio chips (1:1, 16:9, 9:16, 2:1, 3:2, 2:3, 4:3, 3:4, 4:5). Click a ratio to see its most popular sizes, then click a size to set it. Outputs \`width\` and \`height\` as integers ready to wire into an Empty Latent Image or any size input.

## Modes

**Preset** — Pick a ratio chip, then a preset size for that ratio. Covers SDXL, AI video, and social media sizes.

**Custom Ratio** — Type any W:H (such as 21:9) and get auto-computed AI-friendly sizes.

**Custom Resolution** — Type exact pixel dimensions. Math expressions like \`1024+128\` or \`512*2\` work in the W and H fields.

## Snap

The \`16\`, \`32\`, and \`64\` snap chips round the output to that multiple (VAE-friendly). Use \`none\` to turn it off.

## Outputs

**width** — Chosen width in pixels.

**height** — Chosen height in pixels.
`},{path:"PixaromaSaveImage.md",source:`---
id: "node:PixaromaSaveImage"
title: "Save Image Pixaroma"
kind: node
category: "Image"
order: 24
icon: ""
tags: "export write disk output filename png jpg jpeg webp lossless quality compression file size smaller folder subfolders tree mirror civitai metadata parameters resources share lora hash embed settings gear hide buttons"
comfyClass: "PixaromaSaveImage"
---

> Save images to any folder on your computer, with a live preview of the exact filename.

## What it does

Saves every image it receives to the folder you choose: type or paste any path, click \`Browse\` to pick one with the normal system dialog, or leave the field empty to use ComfyUI's output folder. The \`Will save as\` line shows the file the next run will create, so complex naming patterns are never a surprise. One case it cannot show ahead of time: with no \`%counter%\` in the name, a run whose file already exists quietly adds a \`_001\` style ending, so the second save of \`myimage\` lands as \`myimage_001.png\` while the line still reads \`myimage.png\`. Nothing is ever overwritten either way.

Batches are handled automatically: every frame is saved with the counter increasing, and files never overwrite existing ones. Type \`/\` in the name to create subfolders, so \`%date:yyyy-MM-dd%/image_%counter%\` makes a folder per day.

The saved images show in a big preview on the node, so you do not need a separate preview node: one image fills the area, a batch shows as a grid. Click a picture in the grid to view it big, click it (or hover for the \`◀ ▶\` arrows) to flip through, and \`✕\` returns to the grid. Very large batches preview the first 16 images (every frame still saves). Resize the node to make the preview bigger.

## Examples: what to type, and what you get

Every one of these was run and the result copied from the node's own \`Will save as\` line, with a Text Pixaroma holding \`bunny\` wired into \`name\`, starting each time from a Filename box holding \`image_%counter%\`.

That starting point matters for the two chip rows: \`+ Input folder\` and \`+ Date folder\` put a folder in FRONT of whatever is already in the box, they do not replace it. So clicking \`+ Date folder\` on a node still holding its shipped default (which already contains the date) gives you \`2026-08-10/image_2026-08-10_001.png\`, with the date twice. Clear the box or trim the name first if that is not what you want.

| What you want | Filename box | What lands on disk |
| --- | --- | --- |
| Just a numbered file | image_%counter% | image_001.png |
| Keep the original picture's name | %input% | bunny.png |
| Original name, numbered so nothing clashes | %input%_%counter% | bunny_001.png |
| A folder for each picture you feed in | click + Input folder | bunny\\image_001.png |
| A folder for each day | click + Date folder | 2026-08-10\\image_001.png |
| The date in the name instead | %date:yyyy-MM-dd%_%counter% | 2026-08-10_001.png |
| Group by size | %width%x%height%_%counter% | 1024x1024_001.png |
| A folder per picture, then per day | %input%/%date:yyyy-MM-dd%/shot_%counter% | bunny\\2026-08-10\\shot_001.png |

## The name input, in plain English

The \`name\` dot is optional. Wire any text into it and \`%input%\` in the Filename box becomes that text: wire the \`filename\` output of Load Image Pixaroma and your results keep the original picture's name, or wire a Text Pixaroma and they all get the word you typed.

The part that trips everyone up is that \`%input%\` on its own is just TEXT. What decides whether you get a folder is the slash, exactly like typing one yourself:

**%input%_%counter%** — bunny_001.png - the wired text is part of the FILE NAME.

**%input%/image_%counter%** — bunny\\image_001.png - the slash after it makes it a FOLDER. This is all the \`+ Input folder\` chip does: it puts \`%input%/\` at the front for you.

## When the wired text already contains folders

Only relevant if what you wire in looks like \`portraits/cat\` rather than \`cat\` - which happens with Load Images from Folder when \`Include subfolders\` is on.

By default those folders are squashed into the name, so two pictures called cat.png from different folders cannot overwrite each other:

**default** — portraits/cat becomes portraits_cat_001.png - one flat folder, safe.

**Keep folders from the wired name (settings)** — portraits\\cat_001.png - your source folders are rebuilt in the save folder. Switch on \`Keep folder structure in the name\` in Load Images from Folder too, or it never sends the folders in the first place.

**Nothing wired at all** — \`%input%\` simply vanishes, and the leftovers are tidied up: \`%input%_%counter%\` gives 001.png (the stray underscore is trimmed) and \`%input%\` on its own falls back to image_001.png rather than a file with no name. Nothing breaks, so it is safe to leave the token in a pattern you sometimes wire up and sometimes do not.

## Filename tokens (click the chips to insert them)

**%input%** — The wired name input, e.g. the filename from Load Image Pixaroma, so results keep the original name. To put every picture in a folder named after that text, click the \`+ Input folder\` chip: it puts \`%input%/\` in front, and the slash is what makes the folder. Separately, if the wired text ALREADY contains folders (portraits/cat), those are normally squashed to portraits_cat, and \`Keep folders from the wired name\` in the settings keeps them instead.

**%date:yyyy-MM-dd%** — The save date and time. Codes: yyyy year, MM month, dd day, hh hours, mm minutes, ss seconds. Careful: capital MM is the MONTH, lowercase mm is MINUTES (same rule as ComfyUI's built-in Save Image), so a date is yyyy-MM-dd and a time is hh-mm-ss.

**%counter%** — An auto-increasing number that continues from the highest one already in the folder. Without %counter% in the name, the node still never overwrites: a taken name gets a _001 style ending added automatically (batches too, following your counter digits setting).

**%year% %month% %day% %hour% %minute% %second%** — Native ComfyUI tokens, same values as the built-in Save Image node. %date:...% does the same thing in a shorter form.

**%width% / %height%** — The image size in pixels.

**%batch_num%** — The frame's position inside a batch (0, 1, 2 ...).

**%Seed Pixaroma.seed%** — A node reference: prints another node's value into the name, like the seed that made the image. The \`+ Model\` chip builds one automatically for your model loader, so the model's name lands in the filename.

## Format and settings

- \`PNG\` is lossless, keeps transparency, and embeds the workflow: drag a saved PNG back into ComfyUI to reload everything with the exact seed that made it.
- \`WebP\` is the middle road and usually the best pick: far smaller than PNG, still keeps transparency, and it still reloads the workflow when you drag it back into ComfyUI. See the size table below for what it costs.
- \`JPG\` makes small, universally accepted files with a quality setting, but it has no transparency and ComfyUI cannot reload a workflow from a JPG. Pick PNG or WebP when reloading matters.
- The \`Save\` / \`Preview\` pair of pills switches between writing files on every run and only showing the images on the node, with nothing written to your folder (those frames go to ComfyUI's temporary folder, cleared on restart). So the node can also replace a preview node while you iterate.
- \`Copy\`, \`Open\`, and \`Folder\` sit in the button row: Copy puts the shown image on your clipboard, Open shows it in a new browser tab, Folder opens the save location in your file explorer (the window can appear on the taskbar instead of in front; that is a Windows limitation). Right-clicking the preview image gives the same \`Open image\`, \`Copy image\`, and \`Save image\` (download) options.
- The \`gear\` next to the fold triangle opens the settings (right-clicking the node still works too): date style (the order the + Date chip inserts, e.g. dd-MM-yyyy), counter digits (how many zeros %counter% uses), JPG / WebP quality, WebP lossless, workflow embedding, Civitai generation info, and whether folders in a wired name are kept. \`Reset node size\` in the right-click menu returns the node to its default size.
- \`Buttons on the node\`, in the settings, hides the ones you never use. Handy if \`Folder\` does nothing helpful on your system, or if you only ever save in one or two formats and want the others out of the way. The last remaining format cannot be switched off, and when only one is left the format pills disappear entirely, since there is nothing left to choose.
- If ComfyUI itself was started with \`--disable-metadata\`, nothing is written into your images: no workflow, no prompt, no Civitai info, whatever the settings above say. That is a ComfyUI-wide switch you would have added yourself, and it is off unless you did.

## Which format, and what WebP lossless is for

The three buttons on the node pick the FORMAT. \`WebP lossless\`, in the settings, is a separate thing: WebP can be written two different ways, and that switch chooses which. It does nothing at all unless WebP is the format you picked.

Real numbers from one 1024 x 1024 render, so the trade-off is concrete:

- Leave \`WebP lossless\` OFF for pictures you post, share or just keep: a fifth of the size and you cannot see the difference.
- Turn it ON when the file has to be exact: a master you will edit, upscale or re-run later, or flat colour and line art, where lossy compression shows around hard edges. You still save about a quarter over PNG.
- The quality slider is the thing lossless replaces, so it is ignored while that switch is on. With it off, a lower number means a smaller file.

| Setting | File size | Next to the PNG | Quality |
| --- | --- | --- | --- |
| PNG | 1,103 KB | - | perfect, keeps transparency |
| WebP, lossless ON | 784 KB | 71% | perfect, pixel for pixel identical |
| WebP, lossless OFF, quality 100 | 188 KB | 17% | no visible change |
| WebP, lossless OFF, quality 90 | 74 KB | 7% | no visible change on a photo |

## Sharing on Civitai

Turn on \`Add Civitai generation info\` in the right-click settings and the saved image also carries its settings in the format Civitai reads. Post that image there and it fills in the model and every LoRA you used with its strength, plus the steps, seed, sampler and size, so anyone can see how you made it.

You do not wire anything into this node for it: the values are read from your workflow, including when they come from Control Panel Pixaroma or Seed Pixaroma rather than typed on the sampler.

The very first save after you add a new model takes a moment while it fingerprints the file, which is what lets Civitai recognise it. That happens once per model and is remembered afterwards. Leave the switch off and nothing changes: the file is written exactly as before.

> **Tip:** The preview and the line under it show exactly what landed on disk in the last run.
`},{path:"PixaromaSaveMp4.md",source:`---
id: "node:PixaromaSaveMp4"
title: "Save Mp4 Pixaroma"
kind: node
category: "Utility"
order: 27
icon: ""
tags: "export video render encode movie mp4 h264 audio fade click tick pop start onset"
comfyClass: "PixaromaSaveMp4"
---

> Encode a frame batch to an H.264 mp4 with optional audio, and watch it play right on the node.

## What it does

Takes an IMAGE batch and an optional AUDIO track and encodes them to a single mp4 using ffmpeg. A video preview plays on the node body so you can check the result without leaving ComfyUI. Audio is combined in the same pass.

The ffmpeg binary is auto-located: if imageio-ffmpeg is installed its bundled exe is used; otherwise ffmpeg on your system PATH is tried.

## How to use

- Wire an IMAGE batch into \`video_frames\` and the frame rate into \`fps\` (from AudioReact, connect its \`video_frames\` and \`fps\`).
- Optionally connect an \`audio\` output to add a soundtrack.
- Set \`save_mode\` to \`preview\` (temp, auto-cleared on restart) or \`save\` (kept in output).
- The preview remembers the last clip, so it comes back when you switch workflows. If that file has since been deleted, moved, or cleared from temp by a restart, the node tells you instead of showing a black player: just run again.
- Set \`filename_prefix\` to name the file; a 5-digit counter is added automatically. You can print another node's value into the name with a token like \`%Seed Pixaroma.seed%\`.
- Enable \`trim_to_audio\` to end the video at the audio length.
- Set \`audio_fade_ms\` to fade the sound in at the very start. AI video models often begin their audio at full level in a single step, which is heard as a click; about \`120\` removes it and is too short to notice as a fade. Leave it at \`0\` when you are re-saving a video whose sound you do not want changed.

## Requirements

Save Mp4 needs a free tool called ffmpeg to turn the frames into a video. Most ComfyUI setups already have it, because anything else that works with video brings it along, so usually there is nothing to install. One rule: the frame width and height must both be even numbers, and the node shows a clear message instead of crashing if they are odd.

Only if you see an "ffmpeg not found" message, add it one of these ways:

- Easiest: in ComfyUI Manager, open its pip install option and enter \`imageio-ffmpeg\`.
- Portable ComfyUI (Windows): open a command window in your ComfyUI folder (the one that holds the \`python_embeded\` folder) and run \`python_embeded\\python.exe -m pip install imageio-ffmpeg\`.
- Installed with your own Python (venv or conda): activate that environment and run \`pip install imageio-ffmpeg\`.

## Workflow inside the video

The full workflow is saved inside the mp4, the same way it is saved inside a PNG, so you can drag a saved mp4 back onto the canvas later and rebuild the whole graph. It is stored the same way ComfyUI's own video saving stores it, so ComfyUI reads it back on its own. The frame width and height must be even numbers.

## The buttons on the node

**Play and Pause** — Starts or stops the preview. Clicking the picture itself does the same.

**The scrub bar** — Click or drag anywhere along it to jump to that point in the clip.

**Download** — Saves the finished mp4 to your computer.

**Fullscreen** — Expands the video preview to fill your screen.

## If you want folders and filenames

Save Mp4 is the quick one: drop it in and press Run. If you want to save into your own folder, build the filename from tokens, or see the exact file before it is written, use Save Video Pixaroma instead. It has the same encoder plus Save Image's folder and filename tools, and it can also write H.265 at 10-bit.

> **Tip:** This is a terminal save node, it has no outputs.
`},{path:"PixaromaSaveVideo.md",source:`---
id: "node:PixaromaSaveVideo"
title: "Save Video Pixaroma"
kind: node
category: "Image"
order: 28
icon: ""
tags: "export video render encode movie mp4 h264 h265 hevc 10 bit 10bit ten bit colour color depth banding gradient smooth quality crf bitrate folder subfolders filename tokens counter name fps duration frames seconds length trim audio soundtrack player preview scrub settings gear hide buttons master grade edit audio fade click tick pop start onset"
comfyClass: "PixaromaSaveVideo"
---

> Save an mp4 to any folder on your computer, name it however you like, and watch it play on the node.

## What it does

Save Image Pixaroma's folder and filename tools with a video encoder behind them. Type or paste a folder, or click Browse to pick one with your own system dialog; leave it empty for ComfyUI's output folder. Build the name from tokens and the line underneath shows the exact file that will be written, before you run anything. Videos never overwrite: the counter carries on from the highest number already in the folder.

Save Mp4 Pixaroma is still there and is unchanged. That one is the quick one; this is the one with folders, naming and settings.

## The two formats

The pill on the node picks both the format and the colour depth together, because whether a video plays depends on the format, not on the number of bits.

**MP4** — H.264 at 8-bit. Plays on everything, everywhere. This is the default and the safe choice for anything you are sending to someone else.

**MP4 HQ** — H.265 at 10-bit. Smooth gradients where MP4 would band (skies, fades to black, soft lighting), and roughly half the file size for the same picture. It needs a reasonably recent player, so keep it for your own masters and for footage you will edit or grade.

## Why there is no 100 percent

Video is always compressed. An mp4 stores what your eye will accept, not the frames themselves, which is why a few seconds of video is under a megabyte instead of the fifty or so the raw frames would take. So there is no setting here, or in any video tool, that saves your frames untouched.

That is why the Quality slider shows a word rather than a percentage. High is the setting where the difference stops being visible, and it is the standard choice for delivering video: Save Mp4 Pixaroma uses the same one, and it is a little sharper than what ComfyUI's own video saving defaults to. Going above High is not wrong, it just makes a bigger file for something you are unlikely to see.

If you want the picture to hold up to editing and grading afterwards, the setting that genuinely helps is MP4 HQ, because 10-bit keeps gradients smooth. That does more for you than pushing the quality slider up.

## About 10-bit

ComfyUI works in far more than 8 bits internally, so saving to 8-bit throws real information away. Where you notice it is banding: a sky or a fade that should be smooth comes out in visible steps. 10-bit keeps that smoothness, and it helps again if you are going to grade the footage afterwards. It does NOT make the picture sharper, which is what people usually expect.

Colour depth lives in the settings and only applies to MP4 HQ. MP4 stays 8-bit on purpose: 10-bit H.264 exists but almost nothing can play it, so offering it would just hand you a file that will not open.

## Examples: what to type, and what you get

A fresh node starts with \`Video_%date:yyyy-MM-dd%_%counter%\` in the Filename box, which writes \`Video_2026-08-10_001.mp4\`. The examples below assume you have CLEARED that and typed the pattern shown, because the chips add to whatever is already there rather than replacing it. The crux, in one line: the SLASH is what makes a folder.

| What you want | Filename box | What lands on disk |
| --- | --- | --- |
| Just a numbered file | Video_%counter% | Video_001.mp4 |
| Inside a subfolder | clips/Video_%counter% | clips\\Video_001.mp4 |
| A folder per day | %date:yyyy-MM-dd%/Video_%counter% | 2026-08-10\\Video_001.mp4 |
| The frame rate in the name | Video_%fps%fps_%counter% | Video_24fps_001.mp4 |
| The length in the name | Video_%duration%s_%counter% | Video_3-4s_001.mp4 |
| The frame count in the name | Video_%frames%f_%counter% | Video_81f_001.mp4 |
| Keep the wired name | %input%_%counter% | bunny_001.mp4 |
| A folder named after the wired name | %input%/Video_%counter% | bunny\\Video_001.mp4 |

## Why some tokens stay as words until you run

The preview line can only show what it already knows. The frame rate is on the node, so \`%fps%\` fills in straight away. But \`%frames%\`, \`%duration%\`, \`%width%\` and \`%height%\` come from the video itself, so they stay written out as \`%frames%\` and so on until the first run, then fill in from then on. \`%Seed Pixaroma.seed%\` is the same: it fills in once there is a Seed Pixaroma node in the workflow. Nothing is wrong when you see them spelled out, and the saved file always gets the real values.

## The buttons on the node

**The orange triangle** — Folds the node down to just the video. There is a setting to tuck the buttons away too.

**The gear** — Opens the settings. Right-clicking the node does the same.

**Browse** — Picks a folder with your own system dialog. Doing that once approves the folder for good, so afterwards you can type or paste it.

**The chips** — Add a token at the cursor. The two folder chips add to the FRONT instead, because a folder has to come first.

**Open** — Opens the video in a new browser tab.

**Download** — Saves a copy through your browser. Handy in Preview mode, where the only copy is in ComfyUI's temp folder.

**Folder** — Opens the save folder in your file explorer. The window can appear on the taskbar rather than in front.

**Save and Preview** — Save writes to your folder on every run. Preview plays the video on the node but writes to ComfyUI's temp folder instead, which is cleared on restart, so you can try things without filling your folder.

**Play, the scrub bar, and fullscreen** — Under the video. Clicking the picture plays and pauses too, and you can drag anywhere along the bar to move through the clip.

## In the settings

**Quality** — Shows a word beside the number: Small file, Medium, High or Maximum. It is NOT a percentage. High is the default and the point where you cannot see the difference; it is also exactly what Save Mp4 Pixaroma uses, so moving a workflow between the two changes nothing. Winding it to Maximum mostly just grows the file.

**Colour depth** — 8 or 10 bit, for MP4 HQ only.

**Trim to audio** — Ends the video exactly where the sound ends, for when the audio is the master. Off keeps every frame and the sound simply stops when it stops.

**Audio fade-in** — Fades the sound in at the very start. AI video clips often begin with a click because the model starts the audio at full level in one step; about 120 ms removes it and is too short to hear as a fade. Leave it off when re-saving audio you do not want altered.

**Save workflow inside the video** — Writes the whole workflow into the mp4, so you can drag the video back onto the canvas later and get the graph back, exactly like dragging a PNG. It is stored the same way ComfyUI's own video saving stores it, so ComfyUI reads it back on its own. Turn it off if you would rather the file carried nothing about how it was made.

**Date style, counter digits** — What the + Date chip inserts, and how many digits the counter uses.

**Buttons on the node** — Hide the ones you never use. The format you are currently saving as always stays visible.

## Requirements

This node needs a free tool called ffmpeg to turn the frames into a video. Most ComfyUI setups already have it, because anything else that works with video brings it along, so usually there is nothing to install. Both formats need the frame width and height to be even numbers, and the node says so clearly instead of crashing if they are odd.

Only if you see an "ffmpeg not found" message, add it one of these ways:

- Easiest: in ComfyUI Manager, open its pip install option and enter \`imageio-ffmpeg\`.
- Portable ComfyUI (Windows): open a command window in your ComfyUI folder (the one that holds the \`python_embeded\` folder) and run \`python_embeded\\python.exe -m pip install imageio-ffmpeg\`.
- Installed with your own Python (venv or conda): activate that environment and run \`pip install imageio-ffmpeg\`.

> **Tip:** This is a terminal save node, it has no outputs.
`},{path:"PixaromaSeed.md",source:`---
id: "node:PixaromaSeed"
title: "Seed Pixaroma"
kind: node
category: "Values"
order: 4
icon: ""
tags: "random fixed number sampler noise"
comfyClass: "PixaromaSeed"
---

> A seed source with one-click random and fixed control - wire it into any sampler's seed input.

## What it does

Holds a seed number and sends it out as \`seed\`. Drag the output into the seed input of KSampler (or any node that takes a seed). One Seed node can feed several samplers at once so they all stay on the same seed.

## Modes

**Random** — Rolls a fresh seed every time you Run, and the big number updates to show the seed that actually made the latest image (so it changes each Run).

**Fixed** — Keeps the same seed every Run, so the result is repeatable.

## Buttons

**New fixed random** — Rolls a brand-new random seed and locks it (switches to Fixed). Use it when a random result is great and you want to keep that exact seed.

**Use last seed** — Loads the seed from the previous run and locks it. Perfect for making variations off the image you just liked. It works within the current session only, so after you reload or reopen the workflow it stays greyed out until you Run once.

**Copy** — Copies the current seed to your clipboard.

**Up / down arrows** — The small ▲ / ▼ arrows next to the seed nudge it by one and lock it (Fixed). Hold an arrow to keep counting. Great for trying the seeds right next to one you like.

## Size and settings

Right-click the node for a few things: a one-click Compact size / Full size flip, a Seed settings panel, and a Seed history list. Compact shrinks the node to a single row (the seed with small up/down arrows, a Random/Fixed toggle, and an N button that rolls a new fixed random seed) so it takes less room; Full brings all the buttons back. To copy the seed in compact mode, hover over the number: a small popup shows the full seed with a copy button (handy since a long seed can get trimmed in the small field). Your choice of size is saved with the workflow.

The Seed settings panel also sets the size every NEW Seed node starts at (the same as ComfyUI Settings, under Pixaroma then Seed), so you can have them all come in compact if you like.

## Random seed digits

In the Seed settings panel you can cap how big a Random seed is, from 3 up to 16 digits. Lower it if you want short, easy-to-remember seeds or another tool expects a smaller number (3 digits gives seeds from 0 to 999; 8 digits gives 0 to 99999999). It only changes the Random roll; typing an exact seed always works, whatever the setting.

## Seed history

Open it from the H button (in Full size, top row next to New fixed random) or by right-clicking the node and choosing Seed history. It shows the last 10 seeds you have run. From the list you can Use a seed (it loads onto this node and locks to Fixed), Copy it, or Export the whole list as a text file. The history is shared across all your Seed nodes and is kept even after you reload, so a seed you liked earlier is still there.

## Put the seed in your file names

You can print the seed into a saved file name. In a Save Image, Save Mp4 Pixaroma, or Preview Image Pixaroma node's filename field, type \`%Seed Pixaroma.seed%\` where you want the number, for example \`portrait_%Seed Pixaroma.seed%\`. On save it becomes \`portrait_2137\`.

Always point at THIS node, not the sampler: \`%Seed Pixaroma.seed%\`, not \`%KSampler.seed%\` (once wired, the sampler no longer holds the number, this node does). If you rename this node on the canvas, use the new name in the token. With more than one Seed node, rename them so each token points at the right one.

## Tips

- Type a number in the big field to set an exact seed (it switches to Fixed).
- In Fixed mode the same seed runs every time; in Random mode a new one rolls each Run.
- When you wire this into KSampler it takes over the seed, so KSampler's own seed control greys out. Use the Random and Fixed buttons here instead.
- The seed is picked in your browser. If you run a workflow through the API with no browser open, use Fixed with a set number (Random falls back to 0 there).

## Outputs

**seed** — The chosen seed as a whole number.

> **Tip:** Found a seed you love in Random mode? Hit Use last seed (or New fixed random) to lock it, then tweak the rest of your workflow with confidence.
`},{path:"PixaromaShowText.md",source:`---
id: "node:PixaromaShowText"
title: "Show Text Pixaroma"
kind: node
category: "Prompt & Text"
order: 21
icon: ""
tags: "debug display print inspect see value preview text"
comfyClass: "PixaromaShowText"
---

> Inspect anything flowing through your workflow - images, prompts, numbers - in a readable text box.

## What it does

Displays a compact, human-readable description of whatever you wire in. Strings and numbers print as-is. Images show their size, colour format, and their darkest and brightest values. Latents, the compressed form a sampler works in, show their internal size.

The text box is read-only and scrollable, so long output never forces the node to grow. Hover over the node to reveal a \`Copy\` button in the corner.

## How to use

- Wire any output - prompt text, an IMAGE, a latent, a number - into \`source\`.
- The box updates on every Run.
- Hover the node and click \`Copy\` to copy the displayed text.
- The same text is also on the \`text\` output, so you can chain it forward.

## Outputs

**text** — The text shown in the box, passed through unchanged so you can keep wiring it downstream.

## The buttons on the node

**Copy** — Appears when you hover the box, and copies the text currently shown to your clipboard.

> **Tip:** Useful for checking what a text node produces, or confirming an image's size before a sampler.
`},{path:"PixaromaSwitch.md",source:`---
id: "node:PixaromaSwitch"
title: "Switch Pixaroma"
kind: node
category: "Logic & Flow"
order: 38
icon: ""
tags: "route select choose pick multiplexer"
comfyClass: "PixaromaSwitch"
---

> Route one of many wired inputs to a single output by clicking a row.

## What it does

Accepts up to 32 wired inputs of any type (MODEL, CLIP, IMAGE, STRING, AUDIO, and so on) and passes exactly one of them through to the output unchanged. You choose which row is active by clicking it on the node. Only the active row's upstream branch runs - the others are skipped.

## How to use

- Wire upstream nodes into the rows. A new empty row appears as you fill each one.
- Click anywhere on a row to make it active (the orange highlight marks it).
- Double-click a row's name to rename it, so you remember what each input is. A single click only activates the row, so you will not change a label by accident. (In the new node interface, click into the name field to rename.)
- Disconnect a wire to remove its row.

## Outputs

**output** — The value from the active row, passed through unchanged. The output type adapts to whatever is connected.

## The controls on the node

**The toggle** — Click the oval beside a wired row to send that one through. Only one row can be on at a time.

**The row name** — Click a row to make it the active one. Double-click its name to call it something of your own.
`},{path:"PixaromaSwitchSource.md",source:`---
id: "node:PixaromaSwitchSource"
title: "Switch Source Pixaroma"
kind: node
category: "Logic & Flow"
order: 40
icon: ""
tags: "ab bank preset swap variant"
comfyClass: "PixaromaSwitchSource"
---

> Flip a whole set of wires between two setups (A and B) with one toggle.

## What it does

Each row has an A input and a B input and one output. A single A/B toggle picks which side feeds every row at once. Designed for swapping an entire pipeline in one click - for example switching between local models and API nodes without touching individual wires. Only the chosen side runs.

## How to use

- Set the number of rows you need using the \`Rows\` field.
- Wire your first setup into the A inputs (\`a_1\`, \`a_2\`, ...) and your second into the B inputs.
- Click \`A\` or \`B\` to choose which bank runs.
- Click an output label to rename it for the row.
- \`Allow empty\` leaves a row blank when its active side has no wire; \`Show error\` raises a clear error instead.

## Outputs

**output_1 ... output_N** — Each row's output carries its A or B input, depending on the active toggle.

## The controls on the node

**Rows** — How many A and B pairs the node shows, from 1 to 16.

**A** — Sends every row through its A input. Use it to swap the whole node to one setup.

**B** — Sends every row through its B input, the other setup.

**Allow empty** — Leaves an output blank instead of erroring when the active side of a row has no wire.

**Show error** — Warns when the active side is empty but the other side is wired, which usually means the wrong bank.

**The output names** — Click one to give that row a name of your own instead of the type name.
`},{path:"PixaromaSwitchWH.md",source:`---
id: "node:PixaromaSwitchWH"
title: "Switch WH Pixaroma"
kind: node
category: "Values"
order: 39
icon: ""
tags: "ab toggle size swap"
comfyClass: "PixaromaSwitchWH"
---

> Toggle between two width/height pairs with one click.

## What it does

Takes two pairs of width and height values (A and B) and passes one pair to the output. Click \`A\` or \`B\` on the node to choose. Useful for flipping between a source image's native size and a chosen resolution without rewiring.

## How to use

- Wire a width/height pair (e.g. from Load Image Pixaroma) into \`width_a\` and \`height_a\`.
- Wire a second pair (e.g. from Resolution Pixaroma) into \`width_b\` and \`height_b\`.
- Click \`A\` or \`B\` to pick which pair flows out.
- Always wire both width and height for a side.

## Outputs

**width** — The width from the active source.

**height** — The height from the active source.
`},{path:"PixaromaTextOverlay.md",source:`---
id: "node:PixaromaTextOverlay"
title: "Text Overlay Pixaroma"
kind: node
category: "Prompt & Text"
order: 45
icon: ""
tags: "caption title font subtitle words on image ttf otf typeface custom font own font install font fonts folder"
comfyClass: "PixaromaTextOverlay"
---

> Adds a styled text layer on top of an image, with a fullscreen editor for precise placement.

## What it does

Draws a single block of styled text over the input image. Configure font, size, weight, italic, alignment, line height, letter spacing, color, opacity, rotation, position, and an optional background bar on the node panel. Click \`Open Text Editor\` for a fullscreen canvas where you can drag the text to move it, drag a corner to scale, drag the handle to rotate, use snap guides, or align to canvas edges.

## Inputs

**image** — Required image to draw the text on.

**text** — Optional wire from any STRING source. When connected it replaces whatever text is typed on the panel (the box greys out as a reminder).

## Using your own fonts

Put your \`.ttf\` or \`.otf\` files in \`ComfyUI/models/fonts\`, then click the \`↻\` button at the top of the font list to pick them up without restarting. They appear under \`Custom\`. The full details are on the Add your own fonts page.

## Outputs

**image** — The input image with your text drawn on top.

> **Tip:** Vertical text direction is supported via the \`Horizontal | Vertical\` toggle in the panel.
`},{path:"PixaromaTextWatermark.md",source:`---
id: "node:PixaromaTextWatermark"
title: "Text Watermark Pixaroma"
kind: node
category: "Prompt & Text"
order: 46
icon: ""
tags: "signature logo copyright brand stamp font ttf otf typeface custom font own font install font fonts folder"
comfyClass: "PixaromaTextWatermark"
---

> Stamps a styled text watermark at a fixed anchor on every image in a batch.

## What it does

Adds a text watermark to an image or a whole batch. Unlike Text Overlay there is no fullscreen editor - you configure everything on the node panel and click Run. Position is set by choosing one of nine anchor points (a corner, edge midpoint, or center) plus a margin inset, so the watermark lands in the same relative spot on every image regardless of its size.

## Size mode

Switch between \`px\` (a fixed pixel size) and \`% width\` (a percentage of each image's width). Percentage mode keeps the watermark visually the same across a batch of mixed resolutions.

## Inputs

**image** — Image or batch to stamp the watermark onto.

**text** — Optional wire from any STRING source. When connected it replaces the panel text (the box greys out).

## Using your own fonts

Put your \`.ttf\` or \`.otf\` files in \`ComfyUI/models/fonts\`, then click the \`↻\` button at the top of the font list to pick them up without restarting. They appear under \`Custom\`. Handy for stamping a signature or brand font. The full details are on the Add your own fonts page.

## Outputs

**image** — The input image(s) with the watermark drawn on top.

> **Tip:** Vertical text direction is supported via the \`Horizontal | Vertical\` toggle.
`},{path:"PixaromaUncrop.md",source:`---
id: "node:PixaromaUncrop"
title: "Image Uncrop Pixaroma"
kind: node
category: "Utility"
order: 12
icon: ""
tags: "paste back restore put back region"
comfyClass: "PixaromaUncrop"
---

> Paste an edited crop back onto the original image at the exact spot it came from.

## What it does

The other half of the crop, fix, then put it back workflow. After you crop a region with Image Crop Pixaroma and edit it (upscale, inpaint, face-fix, color work, anything), this node drops the edited piece back onto the full original image at the exact same place, leaving everything else untouched.

It knows where to paste from the \`crop_info\` wire, and it automatically resizes the edited crop to fit the original region (so upscaling the crop first is fine). Transparency travels through too: the \`mask\` output is the whole image's mask, not just the cropped rectangle.

## How to use

- Wire the \`crop_info\` output of Image Crop Pixaroma into this node's \`crop_info\`.
- Wire your edited crop into \`image\`.
- To keep transparency, wire Image Crop's \`mask\` straight across into \`mask\` (it lines up under image). The mask comes back out full-frame.
- Optionally raise \`feather\` for a soft, seamless edge where the crop meets the original.
- Run the workflow to get the recombined full image.

## Outputs

**image** — The original image with the edited crop pasted back in place.

**mask** — The full-frame mask: the original mask with the crop region updated. Use it to keep transparency (e.g. into Join Image with Alpha).

**crop_info** — The same crop_info passed straight through, so you can forward it on without re-routing the wire from Image Crop.
`},{path:"PixaromaVersionCheck.md",source:`---
id: "node:PixaromaVersionCheck"
title: "Version Check Pixaroma"
kind: node
category: "Utility"
order: 48
icon: ""
tags: "version diagnostic about update which version"
comfyClass: "PixaromaVersionCheck"
---

> Shows your ComfyUI, frontend, node renderer, and Pixaroma version numbers in one place.

## What it does

Displays four lines: ComfyUI backend version, ComfyUI frontend version, which node interface is active (\`Nodes 2.0\` or \`Legacy\`), and the installed Pixaroma version. Click \`Copy\` to copy all four as plain text for a bug report. Click the \`Node UI\` row to switch renderers (the page reloads). Click \`Refresh\` for a hard cache-clearing reload.

## Spotting an out-of-date browser cache

After an update the browser sometimes keeps running the OLD cached version of the nodes even though the files on disk are already new. This node compares the version the browser actually loaded against the version on disk. If they differ, the \`Pixaroma\` line turns orange and a warning tells you to press \`Ctrl+Shift+R\`. This catches the sneaky case where everything looks updated but the browser is still running old code, which can make workflows behave strangely or fail. The \`Copy\` text includes the warning too, so a pasted bug report shows it.

## If Ctrl+Shift+R does not clear it

Some browsers cache very stubbornly. To force a clean reload:

- Press \`F12\` to open the developer tools.
- Click the \`Network\` tab.
- Tick the \`Disable cache\` checkbox at the top of that tab.
- Keep the tools open and refresh the page (\`Ctrl+Shift+R\` / \`Cmd+Shift+R\`).

## The buttons on the node

**Node UI** — Shows which node renderer you are on, and switches between them. The page reloads to rebuild every node.

**Copy** — Copies all the version lines as text, ready to paste into a question.

**Refresh** — Clears the cache and reloads. For a guaranteed refresh use Ctrl+Shift+R instead.

> **Tip:** No inputs, no outputs, no work on Run - it is a pure info panel.
`},{path:"PixaromaWH.md",source:`---
id: "node:PixaromaWH"
title: "WH Pixaroma"
kind: node
category: "Values"
order: 44
icon: ""
tags: "width height size dimensions"
comfyClass: "PixaromaWH"
---

> Two number fields for width and height, passed straight through as outputs.

## What it does

A minimal node with just a \`width\` and \`height\` field. Type the size you want and the values come out the other side. Pair it with Switch WH Pixaroma to toggle between a typed size and a size coming from another node.

## Outputs

**width** — The width you typed, in pixels.

**height** — The height you typed, in pixels.
`},{path:"canvas-align.md",source:`---
id: "canvas:align"
title: "Align"
kind: canvas
category: "Canvas tools"
order: 54
icon: ""
tags: "snap guides tidy arrange distribute straight neat messy line up hide button toolbar remove"
---

> Nodes snap to line up with each other as you drag, with a guide showing what they lined up with.

## What it does

Drag any node and it snaps to line up with the nodes around it. A thin coloured guide shows what it caught on, so a graph stays tidy without you nudging anything into place by hand. Groups count too, and it works while resizing as well as moving.

## Handy to know

- Hold Shift while dragging to ignore snapping for that one move.
- The toolbar button turns it on and off, and lights up when it is on.
- If you would rather not have that button, you can hide it in Settings under Pixaroma. Snapping is unaffected, and its on/off switch stays in Settings.
- How close an edge has to be before it snaps is in Settings, under the Pixaroma section.
- A pinned Pixaroma Group is left alone.

> **Tip:** Alt is not a bypass key here: ComfyUI already uses it to duplicate a node mid-drag.
`},{path:"canvas-colors.md",source:`---
id: "canvas:colors"
title: "Node Colors"
kind: canvas
category: "Canvas tools"
order: 55
icon: ""
tags: "colour color recolour palette theme paint node group background"
---

> Right-click any node or group to recolour it, with favourites and copy and paste.

## What it does

Right-click a node or a group and pick a colour from the Pixaroma palette. Colours are grouped by hue, so finding a particular green is quick.

Select several nodes first and the colour lands on all of them at once.

## Favourites

Save the pairs you use most and they sit at the top of the menu, so a workflow you colour the same way every time takes a couple of clicks rather than a hunt.

## Copy and paste a colour

Copy the colour from one node and paste it onto another, which is the fastest way to make a group of nodes match something you already got right.

> **Tip:** Node titles stay readable on any colour you pick, because Adaptive node titles chooses white or dark text for you.
`},{path:"canvas-connfx.md",source:`---
id: "canvas:connfx"
title: "Connection FX"
kind: canvas
category: "Canvas tools"
order: 57
icon: ""
tags: "wire link drag sparkle magnet connect slot snap dot"
---

> Compatible slots pull at your wire while you drag it, and sparkle when it connects.

## What it does

While you are dragging a wire, every slot nearby that would actually accept it starts to glow, so you can see where the wire is allowed to go before you let go. When the connection lands, a small burst of sparks confirms it.

## Handy to know

- It is off by default. Turn it on in Settings, under the Pixaroma section.
- It costs nothing while it is off.
- Only slots of a matching type light up, so it doubles as a check that a wire will be accepted.

> **Tip:** Useful when you are learning which outputs fit which inputs, and pretty enough to leave on afterwards.
`},{path:"canvas-group.md",source:`---
id: "canvas:group"
title: "Pixaroma Group"
kind: canvas
category: "Canvas tools"
order: 56
icon: ""
tags: "container box fold collapse organise organize tidy group run mute bypass"
---

> A group container with Run, Mute, Bypass and Fold buttons built into its header.

## What it does

A box you draw around part of your workflow, with buttons in its header. Run just that section, mute it, bypass it, or fold the whole thing down to a single bar to get it out of the way.

## Working with them

- Drag the header to move the group and everything inside it.
- Drag any of the four corners to resize.
- Groups can sit inside other groups.
- Pin a group to lock it in place so a stray drag cannot move it.
- Align snapping works on groups too.

> **Tip:** This is a Pixaroma container, not ComfyUI's own group. That is what lets it carry buttons in the header.
`},{path:"canvas-runfx.md",source:`---
id: "canvas:runfx"
title: "Run button effects"
kind: canvas
category: "Canvas tools"
order: 59
icon: ""
tags: "queue button animation fun effect run sparkle rocket flash"
---

> A choice of visual effects on ComfyUI's Run button.

## What it does

Adds an effect to the Run button: a Pixaroma orange tint, a flash, sparkles, a rocket, and a few more. Purely decorative, and it never gets in the way of actually queueing a run.

## Handy to know

Pick one in Settings, under the Pixaroma section. The default is None, which costs nothing at all.

> **Tip:** Entirely optional. Pick whichever makes pressing Run more enjoyable, or leave it off.
`},{path:"canvas-titles.md",source:`---
id: "canvas:titles"
title: "Adaptive node titles"
kind: canvas
category: "Canvas tools"
order: 58
icon: ""
tags: "readable contrast title text white dark colour color legible"
---

> Title text picks white or dark by itself so it stays readable on any colour.

## What it does

When you colour a node, the title text works out whether white or dark reads better against that colour and switches automatically. A pale yellow node gets dark text, a deep blue one gets white.

## Handy to know

It is on by default. Turn it off in Settings and titles go back to ComfyUI's usual grey, which can be hard to read on a light node colour.

> **Tip:** This is why you can recolour freely without ever ending up with a title you cannot read.
`},{path:"canvas-workflows.md",source:`---
id: "canvas:workflows"
title: "Workflows panel"
kind: canvas
category: "Canvas tools"
order: 60
icon: ""
tags: "workflow browser panel organise organize folder subfolder sub-folder rename move delete duplicate cover thumbnail picture favourite favorite star search find open manage tidy tidying duplicates copies junk clean up sort list grid missing nodes red boxes unsaved keyboard shortcut arrow keys pixaroma workflows website site download example text too small tiny bigger larger size zoom font readable collapse expand fold unfold hide show arrow twisty tree nested new folder inside"
---

> A panel for finding, opening and organising the workflow files on your own computer, with a picture of each one.

## What it does

Opens from the button shown beside the heading above, in the top toolbar next to the Help question mark. Alt+W does the same, and so does right-clicking empty canvas.

If you would rather keep the toolbar clear, you can hide that button in Settings under Pixaroma. Alt+W and the right-click entry still open the panel, so nothing is lost.

It reads the same folder ComfyUI already keeps your workflows in, so everything you have is there the first time you open it. Nothing is imported and nothing is moved.

## Finding one

- The cursor starts in the search box, so you can just type.
- Search looks INSIDE the files as well as at their names: type a model or LoRA filename, a phrase from a prompt, or your own note, and it finds the workflows that use it.
- Arrow keys move the selection: left and right by one card, up and down by a whole row. Enter opens the highlighted one.
- Double click a card to open it. A small coloured dot in the corner of a card means it is open right now.

## The pictures on the cards

Every workflow gets one straight away: a small map of the graph itself, drawn from where the nodes sit and what colour you gave them. Once a workflow has been run, its own last output picture becomes the cover instead. A workflow that makes a video rather than a picture keeps the drawn map, because there is no image to show.

You can also choose any picture yourself with Set cover. A cover you chose by hand is never replaced by a later run: it stays until you use Remove cover, which puts the workflow back to its own last output or the drawn map.

Covers you choose by hand are saved as ordinary jpg files in a pixaroma_covers folder inside ComfyUI's user folder, next to your workflows. You can open, back up or delete them like any other file, and a cover you delete simply goes back to the drawn map.

## The buttons along the top

**Grid / List** — Picture cards, or a dense sortable list once you have hundreds.

**A A A** — How big everything in the panel is drawn: text, cards, covers and the folder list together. The small A is how the panel first shipped, the middle one is the normal size, and the large one is for a big screen or tired eyes. It is remembered.

**Sort** — Recent, Name, or number of Nodes. It greys out in Recent and while searching, because those two already have an order of their own.

**Open folder** — Opens the selected folder on your computer. On Windows it opens BEHIND the browser, so look in your taskbar for it.

**Save open workflow here** — Saves whatever is on the canvas into the folder you have selected, so new work stops landing loose in the root. A workflow you have never saved becomes that file, so the tab you are working in follows it. One that is already saved somewhere gets a copy in the folder and the tab stays on the original.

## Organising

- Rename a workflow with F2, or right click it and choose Rename. Enter saves, Escape cancels.
- Rename a FOLDER by double clicking its name, or from its right-click menu.
- Drag a card onto a folder to move it. Select several first with Ctrl+click to move them together.
- Drag a folder up or down to reorder it. A line shows where it will land. Folders can be reordered within their level, not dragged inside each other.
- A folder with folders inside it has a small arrow. Click the arrow to show or hide what is in it, and the panel remembers. They start closed, so a lot of folders no longer fills the whole column. Whichever folder you are looking at is always shown, whether or not you opened its parent yourself.
- To make a folder INSIDE another one, right click the outer folder and choose New folder inside. The plain + New folder at the bottom of the list always makes one at the top level.
- Right click a workflow for everything at once: Open, favourite, Rename, Duplicate, Move to folder, Set or Remove cover, Reveal, Delete.
- Right click a folder for New folder inside, Rename, Move up, Move down, Reveal and Delete. A folder is only deleted once it is EMPTY: move or delete what is in it first, sub-folders included. That refusal is the safety net, because there is no undo.

## Favourites, Recent and the collections

The star adds a workflow to Favourites, on a picture card and on a list row alike. These are ComfyUI's own bookmarks, so the same stars show in ComfyUI's built-in Workflows sidebar.

Under your real folders there are collections that fill themselves, worked out by reading each file: what it makes (Text to Image, Video, Upscale, Inpaint) and which model family it uses. Your folders are untouched, and a workflow filed in the wrong place still turns up in the right collection.

## Needs tidying

A shortcut on the left that opens a review screen, grouped by what is actually wrong. Nothing is ever changed for you: every row is a suggestion with its own fix next to it, and anything that deletes still asks first.

**Still called "Unsaved Workflow"** — Files saved before you named them. Rename edits the name right there in the row: type over it and press Enter.

**The same workflow saved more than once** — Sets of files with the same nodes and the same models under different names. "Keep this one" deletes the others in its set, and tells you which before it does.

**Needs nodes you do not have** — These open with red boxes where the missing nodes should be. Copy list puts the missing node names on your clipboard, ready to search for in ComfyUI Manager.

## What it tells you before you open one

Select a workflow and the panel on the right shows when it changed, how many nodes it has, whether any of its nodes are missing on this machine, and every model and LoRA file it needs, with a Copy button for the whole list. There is also a note field in your own words, which search can find.

## Keyboard

**Alt+W** — Open or close the panel

**type** — Search, from the moment it opens

**arrow keys** — Move the selection

**Enter** — Open the highlighted workflow

**F2** — Rename it

**Escape** — Clear the search, then close the panel

## Worth knowing

- Deleting a workflow cannot be undone yet, so it always asks first. If the one you are deleting is open with unsaved changes, it says so.
- The panel stays open while you work, and while you switch between workflows.
- Your notes, chosen covers and folder order are kept beside your workflows, not inside them, so sharing a workflow never carries them along.

## Looking for workflows to download?

This panel organises the workflows already on your computer. If you came here wanting NEW ones, the Pixaroma website has ready-made workflows to download, and anything you save from there lands in the same folder this panel reads.

[Pixaroma workflows website](https://example.invalid)

> **Tip:** There is deliberately no Workflows node. A node would be saved into the workflow file and would follow it to anyone you shared it with.
`},{path:"guide-cache.md",source:`---
id: "guide:cache"
title: "Buttons or nodes missing?"
kind: guide
category: "Start here"
order: 52
icon: "🧹"
tags: "cache refresh blank broken missing stale empty buttons gone disappeared not showing hide hidden toolbar align workflows help bring back restore"
---

> Almost always the browser cache. Here is the five second fix.

## Is it only the Align, Workflows or Help button?

If everything else is fine and one of those three toolbar buttons is the only thing gone, it is probably switched off rather than broken. Open Settings, find the Pixaroma section, and look for the three "Show the ... button in the top toolbar" boxes. Tick the one you want back.

Worth knowing either way: hiding a button never turns the feature off. Alt+W still opens Workflows and Alt+H still opens Help, and both are also on the right-click menu on empty canvas.

## Try this first

Hold Ctrl and Shift and press R. On a Mac, hold Command and Shift and press R. That forces the browser to fetch the newest files instead of reusing what it saved earlier.

## If it is still wrong

- Press F12 to open the developer tools
- Go to the Network tab
- Tick Disable cache
- Leave the tools open and reload the page

## Why this happens

Browsers keep a copy of files so pages load faster. After an update, the browser can keep serving yesterday's copy, so new buttons never appear and a node can look half broken. The plugin now stamps its files so this should fix itself, but a very old saved copy may need one last manual refresh.

## Still not right?

Add a Version Check Pixaroma node. If it warns that the browser is running older files than the plugin, the cache is still the problem. If the versions match, it is something else, so ask in #pixaroma-nodes on Discord and say which node.

[💬 Ask in #pixaroma-nodes](https://example.invalid)

> **Tip:** This one fix solves most reports that start with "it looks broken", so it is always worth trying before anything else.
`},{path:"guide-fonts.md",source:`---
id: "guide:fonts"
title: "Add your own fonts"
kind: guide
category: "Start here"
order: 50
icon: "🔤"
tags: "font fonts ttf otf typeface family typography custom own install add where folder missing google fonts download handwriting bold italic"
---

> Drop a font file into one folder and it appears in the font list.

## Where fonts go

Pixaroma reads your fonts from ComfyUI's own models folder, so they sit with the rest of your files rather than inside the plugin (an update can never wipe them):

- Put your \`.ttf\` or \`.otf\` files in \`ComfyUI/models/fonts\`
- Open a font list on any node and click the \`↻\` button next to the filter box
- Your font is now in the list, under \`Custom\`

## No restart needed

The \`↻\` button rescans the folder while ComfyUI keeps running, so you can add a font and use it straight away. The folder is created for you the first time ComfyUI starts with Pixaroma installed, so if it looks empty you are in the right place.

## Which nodes use them

**Text Overlay Pixaroma** — The font list on the node panel and in the fullscreen editor.

**Text Watermark Pixaroma** — The same font list on the node panel.

**Image Composer Pixaroma** — Text layers inside the compositor.

## Add the whole family, not just one file

Pixaroma reads the weight and the slant out of each file and groups the whole family under one name, so copy in every file you have (Regular, Bold, Light, Italic, and so on). That is what makes the \`B\` and \`I\` buttons use the real thing.

With only one file it still works, but the two buttons behave differently: italic gets faked by slanting the letters, while bold falls back to the nearest weight you actually have, so it can look no different from normal.

## Keeping fonts somewhere else

If your models live on another drive, point ComfyUI's \`extra_model_paths.yaml\` at your folder with a \`fonts:\` entry, exactly like \`checkpoints:\` or \`loras:\`. Pixaroma reads every folder ComfyUI registers, so fonts there are picked up too.

## What is supported

\`.ttf\` and \`.otf\` files. Font collections (\`.ttc\`) and web font formats (\`.woff\`, \`.woff2\`) are not read. A variable font works, but it renders at its normal setting rather than exposing its sliders.

> **Tip:** Pixaroma also ships a set of fonts built in, so the list is never empty. Your own fonts sit alongside them and are never touched by an update.
`},{path:"guide-help.md",source:`---
id: "guide:help"
title: "Need help?"
kind: guide
category: "Start here"
order: 53
icon: "💬"
tags: "support discord youtube question ask tutorial video community channel invite link"
---

> Where to ask, and what to include so you get an answer quickly.

## On Discord, pick the right channel

Both are on the same server, and asking in the right one gets you a faster answer from people who know that part.

**#pixaroma-nodes** — Anything about these nodes: something looks broken, a node is not doing what you expected, or you are not sure which node to use.

**#comfyui** — Anything about ComfyUI itself: models, installing, updates, and errors that are not coming from a Pixaroma node.

[💬 Open Discord](https://example.invalid)

## Or watch it instead

The tutorial episodes are often the better answer to a "how do I" question, because you can watch it being done rather than read it.

[▶️ YouTube tutorials](https://example.invalid)

## What to include

- Which node, what happened, and what you expected instead
- Your version, shown in the footer of this window. Clicking it copies the full details
- A screenshot of the node if it looks wrong

## Before you ask

If buttons are missing or a node looks half drawn, try the cache fix first. It solves most of these, and it takes five seconds.

> **Tip:** The Copy as text button on any page puts that page's explanation on your clipboard, version line included, ready to paste with your question.
`},{path:"guide-update.md",source:`---
id: "guide:update"
title: "Update the nodes"
kind: guide
category: "Start here"
order: 49
icon: "⬆️"
tags: "update upgrade newer version manager easy install git pull latest"
---

> Three ways to get the newest version, in the order to try them.

## The easy ways

**ComfyUI Manager** — Open the Manager, find Pixaroma in the installed list, press Update, then restart ComfyUI.

**ComfyUI Easy-Install** — Run the updater that came with it. It fetches the newest version for you.

## When neither works

Open a terminal in the plugin folder and pull the newest version by hand:

- Go to \`ComfyUI/custom_nodes/ComfyUI-Pixaroma\`
- Run \`git pull\`
- Restart ComfyUI

## Updated, but nothing changed?

That is almost always the browser holding on to the old files rather than the update failing. The fix takes about five seconds and is on the Buttons or nodes missing? page.

## Which version am I on?

The footer of this window shows it on every page, and clicking it copies the full details. The Version Check Pixaroma node shows it too. Either is worth putting in any question you ask, because it is the first thing anyone will need to know.

> **Tip:** Installing for the very first time is covered on the Pixaroma website. This page is for people who already have the nodes, which is everyone who can read it.
`},{path:"guide-workflow.md",source:`---
id: "guide:workflow"
title: "Run a downloaded workflow"
kind: guide
category: "Start here"
order: 51
icon: "▶️"
tags: "json episode download open load workflow file drag"
---

> Two ways to open a workflow file you downloaded.

## The quick way

Drag the workflow file straight onto the ComfyUI canvas. It opens immediately. Nothing to copy, nothing to restart.

## The tidy way

Put the file where ComfyUI keeps your workflows, so it shows up in the workflows list every time:

- Copy the \`.json\` file into \`ComfyUI/user/default/workflows/\`
- Refresh the browser page
- Open it from the workflows list in the sidebar

## Missing nodes when it opens?

A workflow can use nodes you do not have yet. ComfyUI will name them, and the Manager can install the missing ones for you. If the missing node is a Pixaroma one, you are simply on an older version: see Update the nodes.

> **Tip:** A workflow made on someone else's machine may point at models you do not have. The download links are usually in a note on the canvas.
`}];function Mm(u){const d=u.trim();return d.startsWith('"')&&d.endsWith('"')||d.startsWith("'")&&d.endsWith("'")?d.slice(1,-1):d}function pv(u){const d=u.trim();return!d.startsWith("[")||!d.endsWith("]")?d?d.split(/\s+/):[]:d.slice(1,-1).split(",").map(h=>Mm(h)).filter(Boolean)}function gv(u){if(!u.startsWith(`---
`))throw new Error("missing frontmatter");const d=u.indexOf(`
---`,4);if(d<0)throw new Error("unterminated frontmatter");const h={};for(const s of u.slice(4,d).split(`
`)){const T=s.indexOf(":");if(T<1)throw new Error(`malformed frontmatter line: ${s}`);const S=s.slice(0,T).trim(),z=s.slice(T+1).trim();h[S]=S==="tags"||S==="related"?pv(z):Mm(z)}return{meta:h,body:u.slice(d+4).trim()}}function yv(u){const d=/> \*\*Tip:\*\* (.+)/s.exec(u);return d==null?void 0:d[1]}function vv(u){const d=u.split(/\n{2,}/).map(S=>S.trim()).filter(Boolean),h=[];let s={};const T=()=>{Object.keys(s).length&&h.push(s),s={}};for(const S of d){if(S.startsWith("> **Tip:**"))continue;if(S.startsWith("> ")){s.paragraphs=[...s.paragraphs||[],S.slice(2).trim()];continue}if(S.startsWith("## ")){T(),s.heading=S.slice(3).trim();continue}const z=S.split(`
`);if(z.every(U=>U.startsWith("- "))){s.bullets=[...s.bullets||[],...z.map(U=>U.slice(2))];continue}if(z.every(U=>/^\*\*.+\*\* — /.test(U))){s.definitions=[...s.definitions||[],...z.map(U=>{const j=/^\*\*(.+)\*\* — (.*)$/.exec(U);return{term:j[1],description:j[2]}})];continue}if(z.length>=2&&z[0].startsWith("| ")&&z[1].includes("---")){const U=j=>j.split("|").slice(1,-1).map(N=>N.trim());s.table={headers:U(z[0]),rows:z.slice(2).map(U)};continue}const _=/^\[([^\]]+)\]\(([^)]+)\)$/.exec(S);if(_){s.links=[...s.links||[],{label:_[1],url:_[2]}];continue}s.paragraphs=[...s.paragraphs||[],S]}return T(),h}function wv(u){var S;const{meta:d,body:h}=gv(u.source),s=["id","title","kind","category","order"].filter(z=>!d[z]);if(s.length)throw new Error(`${u.path}: missing ${s.join(", ")}`);if(!["guide","node","canvas"].includes(String(d.kind)))throw new Error(`${u.path}: invalid kind`);const T=h.split(/\n{2,}/).filter(z=>z.startsWith("> ")&&!z.startsWith("> **Tip:**"));return{id:String(d.id),kind:d.kind,title:String(d.title),tagline:((S=T[0])==null?void 0:S.slice(2))||"",category:String(d.category),order:Number(d.order),icon:String(d.icon||""),comfyClass:d.comfyClass?String(d.comfyClass):void 0,tags:Array.isArray(d.tags)?d.tags:[],related:Array.isArray(d.related)?d.related:[],sections:vv(h),footer:yv(h)}}function Um(u=__PIXAROMA_HELP_DOCUMENTS__){const d=u.map(wv).sort((s,T)=>s.order-T.order||s.title.localeCompare(T.title)),h=new Set;for(const s of d){if(h.has(s.id))throw new Error(`duplicate help id: ${s.id}`);h.add(s.id)}return d}Um();const bv=Um(mv);var xv=Object.defineProperty,Xs=(u,d)=>xv(u,"name",{value:d,configurable:!0});function qs(u,d){if(typeof u=="function")return u(d);u!=null&&(u.current=d)}Xs(qs,"setRef");function Dm(...u){return d=>{let h=!1;const s=u.map(T=>{const S=qs(T,d);return!h&&typeof S=="function"&&(h=!0),S});if(h)return()=>{for(let T=0;T<s.length;T++){const S=s[T];typeof S=="function"?S():qs(u[T],null)}}}}Xs(Dm,"composeRefs");function Hm(...u){return ue.useCallback(Dm(...u),u)}Xs(Hm,"useComposedRefs");var Tv=Object.defineProperty,Xt=(u,d)=>Tv(u,"name",{value:d,configurable:!0});function jm(u){const d=ue.forwardRef((h,s)=>{let{children:T,...S}=h,z=null,_=!1;const U=[];Ys(T)&&typeof Wi=="function"&&(T=Wi(T._payload)),ue.Children.forEach(T,M=>{var ie;if(qm(M)){_=!0;const re=M;let P="child"in re.props?re.props.child:re.props.children;Ys(P)&&typeof Wi=="function"&&(P=Wi(P._payload)),z=kv(re,P),U.push((ie=z==null?void 0:z.props)==null?void 0:ie.children)}else U.push(M)}),z?z=ue.cloneElement(z,void 0,U):!_&&ue.Children.count(T)===1&&ue.isValidElement(T)&&(z=T);const j=z?Gm(z):void 0,N=Hm(s,j);if(!z){if(T||T===0)throw new Error(_?Av(u):Ev(u));return T}const x=Lm(S,z.props??{});return z.type!==ue.Fragment&&(x.ref=s?N:j),ue.cloneElement(z,x)});return d.displayName=`${u}.Slot`,d}Xt(jm,"createSlot");var Sv=jm("Slot"),Bm=Symbol.for("radix.slottable");function Cv(u){const d=Xt(h=>"child"in h?h.children(h.child):h.children,"Slottable");return d.displayName=`${u}.Slottable`,d.__radixId=Bm,d}Xt(Cv,"createSlottable");var kv=Xt((u,d)=>{if("child"in u.props){const h=u.props.child;return ue.isValidElement(h)?ue.cloneElement(h,void 0,u.props.children(h.props.children)):null}return ue.isValidElement(d)?d:null},"getSlottableElementFromSlottable");function Lm(u,d){const h={...d};for(const s in d){const T=u[s],S=d[s];/^on[A-Z]/.test(s)?T&&S?h[s]=(..._)=>{const U=S(..._);return T(..._),U}:T&&(h[s]=T):s==="style"?h[s]={...T,...S}:s==="className"&&(h[s]=[T,S].filter(Boolean).join(" "))}return{...u,...h}}Xt(Lm,"mergeProps");function Gm(u){var s,T;let d=(s=Object.getOwnPropertyDescriptor(u.props,"ref"))==null?void 0:s.get,h=d&&"isReactWarning"in d&&d.isReactWarning;return h?u.ref:(d=(T=Object.getOwnPropertyDescriptor(u,"ref"))==null?void 0:T.get,h=d&&"isReactWarning"in d&&d.isReactWarning,h?u.props.ref:u.props.ref||u.ref)}Xt(Gm,"getElementRef");function qm(u){return ue.isValidElement(u)&&typeof u.type=="function"&&"__radixId"in u.type&&u.type.__radixId===Bm}Xt(qm,"isSlottable");var zv=Symbol.for("react.lazy");function Ys(u){return u!=null&&typeof u=="object"&&"$$typeof"in u&&u.$$typeof===zv&&"_payload"in u&&Ym(u._payload)}Xt(Ys,"isLazyComponent");function Ym(u){return typeof u=="object"&&u!==null&&"then"in u}Xt(Ym,"isPromiseLike");var Ev=Xt(u=>`${u} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`,"createSlotError"),Av=Xt(u=>`${u} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`,"createSlottableError"),Wi=iv[" use ".trim().toString()];function Vm(u){var d,h,s="";if(typeof u=="string"||typeof u=="number")s+=u;else if(typeof u=="object")if(Array.isArray(u)){var T=u.length;for(d=0;d<T;d++)u[d]&&(h=Vm(u[d]))&&(s&&(s+=" "),s+=h)}else for(h in u)u[h]&&(s&&(s+=" "),s+=h);return s}function Qm(){for(var u,d,h=0,s="",T=arguments.length;h<T;h++)(u=arguments[h])&&(d=Vm(u))&&(s&&(s+=" "),s+=d);return s}const Am=u=>typeof u=="boolean"?`${u}`:u===0?"0":u,Om=Qm,Xm=(u,d)=>h=>{var s;if((d==null?void 0:d.variants)==null)return Om(u,h==null?void 0:h.class,h==null?void 0:h.className);const{variants:T,defaultVariants:S}=d,z=Object.keys(T).map(j=>{const N=h==null?void 0:h[j],x=S==null?void 0:S[j];if(N===null)return null;const M=Am(N)||Am(x);return T[j][M]}),_=h&&Object.entries(h).reduce((j,N)=>{let[x,M]=N;return M===void 0||(j[x]=M),j},{}),U=d==null||(s=d.compoundVariants)===null||s===void 0?void 0:s.reduce((j,N)=>{let{class:x,className:M,...ie}=N;return Object.entries(ie).every(re=>{let[P,Y]=re;return Array.isArray(Y)?Y.includes({...S,..._}[P]):{...S,..._}[P]===Y})?[...j,x,M]:j},[]);return Om(u,z,U,h==null?void 0:h.class,h==null?void 0:h.className)},Zs="-",Ov=u=>{const d=Nv(u),{conflictingClassGroups:h,conflictingClassGroupModifiers:s}=u;return{getClassGroupId:z=>{const _=z.split(Zs);return _[0]===""&&_.length!==1&&_.shift(),Zm(_,d)||_v(z)},getConflictingClassGroupIds:(z,_)=>{const U=h[z]||[];return _&&s[z]?[...U,...s[z]]:U}}},Zm=(u,d)=>{var z;if(u.length===0)return d.classGroupId;const h=u[0],s=d.nextPart.get(h),T=s?Zm(u.slice(1),s):void 0;if(T)return T;if(d.validators.length===0)return;const S=u.join(Zs);return(z=d.validators.find(({validator:_})=>_(S)))==null?void 0:z.classGroupId},_m=/^\[(.+)\]$/,_v=u=>{if(_m.test(u)){const d=_m.exec(u)[1],h=d==null?void 0:d.substring(0,d.indexOf(":"));if(h)return"arbitrary.."+h}},Nv=u=>{const{theme:d,prefix:h}=u,s={nextPart:new Map,validators:[]};return Mv(Object.entries(u.classGroups),h).forEach(([S,z])=>{Vs(z,s,S,d)}),s},Vs=(u,d,h,s)=>{u.forEach(T=>{if(typeof T=="string"){const S=T===""?d:Nm(d,T);S.classGroupId=h;return}if(typeof T=="function"){if(Rv(T)){Vs(T(s),d,h,s);return}d.validators.push({validator:T,classGroupId:h});return}Object.entries(T).forEach(([S,z])=>{Vs(z,Nm(d,S),h,s)})})},Nm=(u,d)=>{let h=u;return d.split(Zs).forEach(s=>{h.nextPart.has(s)||h.nextPart.set(s,{nextPart:new Map,validators:[]}),h=h.nextPart.get(s)}),h},Rv=u=>u.isThemeGetter,Mv=(u,d)=>d?u.map(([h,s])=>{const T=s.map(S=>typeof S=="string"?d+S:typeof S=="object"?Object.fromEntries(Object.entries(S).map(([z,_])=>[d+z,_])):S);return[h,T]}):u,Uv=u=>{if(u<1)return{get:()=>{},set:()=>{}};let d=0,h=new Map,s=new Map;const T=(S,z)=>{h.set(S,z),d++,d>u&&(d=0,s=h,h=new Map)};return{get(S){let z=h.get(S);if(z!==void 0)return z;if((z=s.get(S))!==void 0)return T(S,z),z},set(S,z){h.has(S)?h.set(S,z):T(S,z)}}},Km="!",Dv=u=>{const{separator:d,experimentalParseClassName:h}=u,s=d.length===1,T=d[0],S=d.length,z=_=>{const U=[];let j=0,N=0,x;for(let Y=0;Y<_.length;Y++){let ge=_[Y];if(j===0){if(ge===T&&(s||_.slice(Y,Y+S)===d)){U.push(_.slice(N,Y)),N=Y+S;continue}if(ge==="/"){x=Y;continue}}ge==="["?j++:ge==="]"&&j--}const M=U.length===0?_:_.substring(N),ie=M.startsWith(Km),re=ie?M.substring(1):M,P=x&&x>N?x-N:void 0;return{modifiers:U,hasImportantModifier:ie,baseClassName:re,maybePostfixModifierPosition:P}};return h?_=>h({className:_,parseClassName:z}):z},Hv=u=>{if(u.length<=1)return u;const d=[];let h=[];return u.forEach(s=>{s[0]==="["?(d.push(...h.sort(),s),h=[]):h.push(s)}),d.push(...h.sort()),d},jv=u=>({cache:Uv(u.cacheSize),parseClassName:Dv(u),...Ov(u)}),Bv=/\s+/,Lv=(u,d)=>{const{parseClassName:h,getClassGroupId:s,getConflictingClassGroupIds:T}=d,S=[],z=u.trim().split(Bv);let _="";for(let U=z.length-1;U>=0;U-=1){const j=z[U],{modifiers:N,hasImportantModifier:x,baseClassName:M,maybePostfixModifierPosition:ie}=h(j);let re=!!ie,P=s(re?M.substring(0,ie):M);if(!P){if(!re){_=j+(_.length>0?" "+_:_);continue}if(P=s(M),!P){_=j+(_.length>0?" "+_:_);continue}re=!1}const Y=Hv(N).join(":"),ge=x?Y+Km:Y,Se=ge+P;if(S.includes(Se))continue;S.push(Se);const ae=T(P,re);for(let ke=0;ke<ae.length;++ke){const lt=ae[ke];S.push(ge+lt)}_=j+(_.length>0?" "+_:_)}return _};function Gv(){let u=0,d,h,s="";for(;u<arguments.length;)(d=arguments[u++])&&(h=Pm(d))&&(s&&(s+=" "),s+=h);return s}const Pm=u=>{if(typeof u=="string")return u;let d,h="";for(let s=0;s<u.length;s++)u[s]&&(d=Pm(u[s]))&&(h&&(h+=" "),h+=d);return h};function qv(u,...d){let h,s,T,S=z;function z(U){const j=d.reduce((N,x)=>x(N),u());return h=jv(j),s=h.cache.get,T=h.cache.set,S=_,_(U)}function _(U){const j=s(U);if(j)return j;const N=Lv(U,h);return T(U,N),N}return function(){return S(Gv.apply(null,arguments))}}const _e=u=>{const d=h=>h[u]||[];return d.isThemeGetter=!0,d},Im=/^\[(?:([a-z-]+):)?(.+)\]$/i,Yv=/^\d+\/\d+$/,Vv=new Set(["px","full","screen"]),Qv=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Xv=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Zv=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,Kv=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,Pv=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Sn=u=>bo(u)||Vv.has(u)||Yv.test(u),ea=u=>xo(u,"length",nw),bo=u=>!!u&&!Number.isNaN(Number(u)),Gs=u=>xo(u,"number",bo),vl=u=>!!u&&Number.isInteger(Number(u)),Iv=u=>u.endsWith("%")&&bo(u.slice(0,-1)),J=u=>Im.test(u),ta=u=>Qv.test(u),Wv=new Set(["length","size","percentage"]),Jv=u=>xo(u,Wv,Wm),Fv=u=>xo(u,"position",Wm),$v=new Set(["image","url"]),ew=u=>xo(u,$v,ow),tw=u=>xo(u,"",aw),wl=()=>!0,xo=(u,d,h)=>{const s=Im.exec(u);return s?s[1]?typeof d=="string"?s[1]===d:d.has(s[1]):h(s[2]):!1},nw=u=>Xv.test(u)&&!Zv.test(u),Wm=()=>!1,aw=u=>Kv.test(u),ow=u=>Pv.test(u),lw=()=>{const u=_e("colors"),d=_e("spacing"),h=_e("blur"),s=_e("brightness"),T=_e("borderColor"),S=_e("borderRadius"),z=_e("borderSpacing"),_=_e("borderWidth"),U=_e("contrast"),j=_e("grayscale"),N=_e("hueRotate"),x=_e("invert"),M=_e("gap"),ie=_e("gradientColorStops"),re=_e("gradientColorStopPositions"),P=_e("inset"),Y=_e("margin"),ge=_e("opacity"),Se=_e("padding"),ae=_e("saturate"),ke=_e("scale"),lt=_e("sepia"),tt=_e("skew"),F=_e("space"),se=_e("translate"),ct=()=>["auto","contain","none"],nt=()=>["auto","hidden","clip","visible","scroll"],at=()=>["auto",J,d],ee=()=>[J,d],Bt=()=>["",Sn,ea],At=()=>["auto",bo,J],De=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],R=()=>["solid","dashed","dotted","double","none"],V=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],Q=()=>["start","end","center","between","around","evenly","stretch"],de=()=>["","0",J],fe=()=>["auto","avoid","all","avoid-page","page","left","right","column"],He=()=>[bo,J];return{cacheSize:500,separator:":",theme:{colors:[wl],spacing:[Sn,ea],blur:["none","",ta,J],brightness:He(),borderColor:[u],borderRadius:["none","","full",ta,J],borderSpacing:ee(),borderWidth:Bt(),contrast:He(),grayscale:de(),hueRotate:He(),invert:de(),gap:ee(),gradientColorStops:[u],gradientColorStopPositions:[Iv,ea],inset:at(),margin:at(),opacity:He(),padding:ee(),saturate:He(),scale:He(),sepia:de(),skew:He(),space:ee(),translate:ee()},classGroups:{aspect:[{aspect:["auto","square","video",J]}],container:["container"],columns:[{columns:[ta]}],"break-after":[{"break-after":fe()}],"break-before":[{"break-before":fe()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...De(),J]}],overflow:[{overflow:nt()}],"overflow-x":[{"overflow-x":nt()}],"overflow-y":[{"overflow-y":nt()}],overscroll:[{overscroll:ct()}],"overscroll-x":[{"overscroll-x":ct()}],"overscroll-y":[{"overscroll-y":ct()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[P]}],"inset-x":[{"inset-x":[P]}],"inset-y":[{"inset-y":[P]}],start:[{start:[P]}],end:[{end:[P]}],top:[{top:[P]}],right:[{right:[P]}],bottom:[{bottom:[P]}],left:[{left:[P]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",vl,J]}],basis:[{basis:at()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",J]}],grow:[{grow:de()}],shrink:[{shrink:de()}],order:[{order:["first","last","none",vl,J]}],"grid-cols":[{"grid-cols":[wl]}],"col-start-end":[{col:["auto",{span:["full",vl,J]},J]}],"col-start":[{"col-start":At()}],"col-end":[{"col-end":At()}],"grid-rows":[{"grid-rows":[wl]}],"row-start-end":[{row:["auto",{span:[vl,J]},J]}],"row-start":[{"row-start":At()}],"row-end":[{"row-end":At()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",J]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",J]}],gap:[{gap:[M]}],"gap-x":[{"gap-x":[M]}],"gap-y":[{"gap-y":[M]}],"justify-content":[{justify:["normal",...Q()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...Q(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...Q(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[Se]}],px:[{px:[Se]}],py:[{py:[Se]}],ps:[{ps:[Se]}],pe:[{pe:[Se]}],pt:[{pt:[Se]}],pr:[{pr:[Se]}],pb:[{pb:[Se]}],pl:[{pl:[Se]}],m:[{m:[Y]}],mx:[{mx:[Y]}],my:[{my:[Y]}],ms:[{ms:[Y]}],me:[{me:[Y]}],mt:[{mt:[Y]}],mr:[{mr:[Y]}],mb:[{mb:[Y]}],ml:[{ml:[Y]}],"space-x":[{"space-x":[F]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[F]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",J,d]}],"min-w":[{"min-w":[J,d,"min","max","fit"]}],"max-w":[{"max-w":[J,d,"none","full","min","max","fit","prose",{screen:[ta]},ta]}],h:[{h:[J,d,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[J,d,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[J,d,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[J,d,"auto","min","max","fit"]}],"font-size":[{text:["base",ta,ea]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",Gs]}],"font-family":[{font:[wl]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",J]}],"line-clamp":[{"line-clamp":["none",bo,Gs]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",Sn,J]}],"list-image":[{"list-image":["none",J]}],"list-style-type":[{list:["none","disc","decimal",J]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[u]}],"placeholder-opacity":[{"placeholder-opacity":[ge]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[u]}],"text-opacity":[{"text-opacity":[ge]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...R(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",Sn,ea]}],"underline-offset":[{"underline-offset":["auto",Sn,J]}],"text-decoration-color":[{decoration:[u]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:ee()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",J]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",J]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[ge]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...De(),Fv]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",Jv]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},ew]}],"bg-color":[{bg:[u]}],"gradient-from-pos":[{from:[re]}],"gradient-via-pos":[{via:[re]}],"gradient-to-pos":[{to:[re]}],"gradient-from":[{from:[ie]}],"gradient-via":[{via:[ie]}],"gradient-to":[{to:[ie]}],rounded:[{rounded:[S]}],"rounded-s":[{"rounded-s":[S]}],"rounded-e":[{"rounded-e":[S]}],"rounded-t":[{"rounded-t":[S]}],"rounded-r":[{"rounded-r":[S]}],"rounded-b":[{"rounded-b":[S]}],"rounded-l":[{"rounded-l":[S]}],"rounded-ss":[{"rounded-ss":[S]}],"rounded-se":[{"rounded-se":[S]}],"rounded-ee":[{"rounded-ee":[S]}],"rounded-es":[{"rounded-es":[S]}],"rounded-tl":[{"rounded-tl":[S]}],"rounded-tr":[{"rounded-tr":[S]}],"rounded-br":[{"rounded-br":[S]}],"rounded-bl":[{"rounded-bl":[S]}],"border-w":[{border:[_]}],"border-w-x":[{"border-x":[_]}],"border-w-y":[{"border-y":[_]}],"border-w-s":[{"border-s":[_]}],"border-w-e":[{"border-e":[_]}],"border-w-t":[{"border-t":[_]}],"border-w-r":[{"border-r":[_]}],"border-w-b":[{"border-b":[_]}],"border-w-l":[{"border-l":[_]}],"border-opacity":[{"border-opacity":[ge]}],"border-style":[{border:[...R(),"hidden"]}],"divide-x":[{"divide-x":[_]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[_]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[ge]}],"divide-style":[{divide:R()}],"border-color":[{border:[T]}],"border-color-x":[{"border-x":[T]}],"border-color-y":[{"border-y":[T]}],"border-color-s":[{"border-s":[T]}],"border-color-e":[{"border-e":[T]}],"border-color-t":[{"border-t":[T]}],"border-color-r":[{"border-r":[T]}],"border-color-b":[{"border-b":[T]}],"border-color-l":[{"border-l":[T]}],"divide-color":[{divide:[T]}],"outline-style":[{outline:["",...R()]}],"outline-offset":[{"outline-offset":[Sn,J]}],"outline-w":[{outline:[Sn,ea]}],"outline-color":[{outline:[u]}],"ring-w":[{ring:Bt()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[u]}],"ring-opacity":[{"ring-opacity":[ge]}],"ring-offset-w":[{"ring-offset":[Sn,ea]}],"ring-offset-color":[{"ring-offset":[u]}],shadow:[{shadow:["","inner","none",ta,tw]}],"shadow-color":[{shadow:[wl]}],opacity:[{opacity:[ge]}],"mix-blend":[{"mix-blend":[...V(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":V()}],filter:[{filter:["","none"]}],blur:[{blur:[h]}],brightness:[{brightness:[s]}],contrast:[{contrast:[U]}],"drop-shadow":[{"drop-shadow":["","none",ta,J]}],grayscale:[{grayscale:[j]}],"hue-rotate":[{"hue-rotate":[N]}],invert:[{invert:[x]}],saturate:[{saturate:[ae]}],sepia:[{sepia:[lt]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[h]}],"backdrop-brightness":[{"backdrop-brightness":[s]}],"backdrop-contrast":[{"backdrop-contrast":[U]}],"backdrop-grayscale":[{"backdrop-grayscale":[j]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[N]}],"backdrop-invert":[{"backdrop-invert":[x]}],"backdrop-opacity":[{"backdrop-opacity":[ge]}],"backdrop-saturate":[{"backdrop-saturate":[ae]}],"backdrop-sepia":[{"backdrop-sepia":[lt]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[z]}],"border-spacing-x":[{"border-spacing-x":[z]}],"border-spacing-y":[{"border-spacing-y":[z]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",J]}],duration:[{duration:He()}],ease:[{ease:["linear","in","out","in-out",J]}],delay:[{delay:He()}],animate:[{animate:["none","spin","ping","pulse","bounce",J]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[ke]}],"scale-x":[{"scale-x":[ke]}],"scale-y":[{"scale-y":[ke]}],rotate:[{rotate:[vl,J]}],"translate-x":[{"translate-x":[se]}],"translate-y":[{"translate-y":[se]}],"skew-x":[{"skew-x":[tt]}],"skew-y":[{"skew-y":[tt]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",J]}],accent:[{accent:["auto",u]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",J]}],"caret-color":[{caret:[u]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":ee()}],"scroll-mx":[{"scroll-mx":ee()}],"scroll-my":[{"scroll-my":ee()}],"scroll-ms":[{"scroll-ms":ee()}],"scroll-me":[{"scroll-me":ee()}],"scroll-mt":[{"scroll-mt":ee()}],"scroll-mr":[{"scroll-mr":ee()}],"scroll-mb":[{"scroll-mb":ee()}],"scroll-ml":[{"scroll-ml":ee()}],"scroll-p":[{"scroll-p":ee()}],"scroll-px":[{"scroll-px":ee()}],"scroll-py":[{"scroll-py":ee()}],"scroll-ps":[{"scroll-ps":ee()}],"scroll-pe":[{"scroll-pe":ee()}],"scroll-pt":[{"scroll-pt":ee()}],"scroll-pr":[{"scroll-pr":ee()}],"scroll-pb":[{"scroll-pb":ee()}],"scroll-pl":[{"scroll-pl":ee()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",J]}],fill:[{fill:[u,"none"]}],"stroke-w":[{stroke:[Sn,ea,Gs]}],stroke:[{stroke:[u,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},iw=qv(lw);function na(...u){return iw(Qm(u))}const rw=Xm("px-button",{variants:{variant:{default:"px-button-default",secondary:"px-button-secondary",ghost:"px-button-ghost",outline:"px-button-outline"},size:{default:"px-button-default-size",sm:"px-button-sm",icon:"px-button-icon"}},defaultVariants:{variant:"default",size:"default"}}),Ea=ue.forwardRef(({className:u,variant:d,size:h,asChild:s=!1,...T},S)=>{const z=s?Sv:"button";return E.jsx(z,{className:na(rw({variant:d,size:h,className:u})),ref:S,...T})});Ea.displayName="Button";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uw=u=>u.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Jm=(...u)=>u.filter((d,h,s)=>!!d&&d.trim()!==""&&s.indexOf(d)===h).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var sw={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cw=ue.forwardRef(({color:u="currentColor",size:d=24,strokeWidth:h=2,absoluteStrokeWidth:s,className:T="",children:S,iconNode:z,..._},U)=>ue.createElement("svg",{ref:U,...sw,width:d,height:d,stroke:u,strokeWidth:s?Number(h)*24/Number(d):h,className:Jm("lucide",T),..._},[...z.map(([j,N])=>ue.createElement(j,N)),...Array.isArray(S)?S:[S]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ji=(u,d)=>{const h=ue.forwardRef(({className:s,...T},S)=>ue.createElement(cw,{ref:S,iconNode:d,className:Jm(`lucide-${uw(u)}`,s),...T}));return h.displayName=`${u}`,h};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dw=Ji("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fw=Ji("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hw=Ji("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mw=Ji("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),pw=Xm("px-badge",{variants:{variant:{default:"px-badge-default",secondary:"px-badge-secondary"}},defaultVariants:{variant:"default"}});function Fm({className:u,variant:d,...h}){return E.jsx("div",{className:na(pw({variant:d}),u),...h})}const $m=ue.forwardRef(({className:u,...d},h)=>E.jsx("div",{ref:h,className:na("px-card",u),...d}));$m.displayName="Card";const gw=({className:u,...d})=>E.jsx("div",{className:na("px-card-header",u),...d}),yw=({className:u,...d})=>E.jsx("div",{className:na("px-card-content",u),...d}),vw=({className:u,...d})=>E.jsx("h3",{className:na("px-card-title",u),...d}),ww=({className:u,...d})=>E.jsx("p",{className:na("px-card-description",u),...d}),ep=ue.forwardRef(({className:u,...d},h)=>E.jsx("input",{className:na("px-input",u),ref:h,...d}));ep.displayName="Input";function bw(u){return[u.heading,...u.paragraphs||[],...u.bullets||[],...(u.definitions||[]).flatMap(d=>[d.term,d.description]),...(u.links||[]).map(d=>d.label)].filter(Boolean).join(" ")}function xw({entries:u,initialId:d,onClose:h}){const[s,T]=ue.useState(""),[S,z]=ue.useState("All"),[_,U]=ue.useState(null),[j,N]=ue.useState([]),[x,M]=ue.useState(-1),ie=ue.useMemo(()=>["All",...new Set(u.map(ae=>ae.category))],[u]),re=ue.useMemo(()=>{const ae=s.trim().toLowerCase();return u.filter(ke=>(S==="All"||ke.category===S)&&(!ae||`${ke.title} ${ke.tagline} ${ke.tags.join(" ")} ${ke.sections.map(bw).join(" ")}`.toLowerCase().includes(ae)))},[S,u,s]),P=u.find(ae=>ae.id===_)??null;ue.useEffect(()=>U(d??null),[d]);function Y(ae){const ke=[...j.slice(0,x+1),ae.id];N(ke),M(ke.length-1),U(ae.id)}function ge(){if(x>0){const ae=x-1;M(ae),U(j[ae])}}function Se(){if(x<j.length-1){const ae=x+1;M(ae),U(j[ae])}}return E.jsxs("main",{className:"px-help-shell","aria-label":"Pixaroma Help",children:[E.jsxs("header",{className:"px-help-header",children:[E.jsxs("div",{className:"px-brand",children:[E.jsx("span",{className:"px-brand-mark",children:"✦"}),E.jsx("span",{children:"Pixaroma Help"})]}),E.jsxs("div",{className:"px-header-actions",children:[E.jsx(Ea,{variant:"ghost",size:"icon",onClick:ge,disabled:x<=0,"aria-label":"Back",children:E.jsx(dw,{size:16})}),E.jsx(Ea,{variant:"ghost",size:"icon",onClick:Se,disabled:x>=j.length-1,"aria-label":"Forward",children:E.jsx(fw,{size:16})}),h&&E.jsx(Ea,{variant:"ghost",size:"icon",onClick:h,"aria-label":"Close",children:E.jsx(mw,{size:17})})]})]}),E.jsxs("div",{className:"px-help-toolbar",children:[E.jsxs("div",{className:"px-search-wrap",children:[E.jsx(hw,{size:15}),E.jsx(ep,{value:s,onChange:ae=>T(ae.target.value),placeholder:"Search nodes, topics, or a problem","aria-label":"Search help"})]}),E.jsx(Ea,{variant:"secondary",onClick:()=>{T(""),z("All"),U(null)},children:"Home"})]}),E.jsxs("div",{className:"px-help-body",children:[E.jsxs("aside",{className:"px-help-sidebar",children:[E.jsx("div",{className:"px-sidebar-label",children:"Browse"}),ie.map(ae=>E.jsx("button",{className:`px-category ${ae===S?"is-active":""}`,onClick:()=>{z(ae),U(null)},children:ae},ae)),E.jsx("div",{className:"px-sidebar-label px-sidebar-label-spaced",children:"Results"}),E.jsxs("div",{className:"px-result-count",children:[re.length," article",re.length===1?"":"s"]})]}),E.jsx("section",{className:"px-help-content",children:P?E.jsx(Sw,{entry:P,onBack:()=>U(null)}):E.jsx(Tw,{entries:re,onSelect:Y})})]})]})}function Tw({entries:u,onSelect:d}){return E.jsx("div",{className:"px-entry-grid",children:u.map(h=>E.jsxs($m,{className:"px-entry-card",onClick:()=>d(h),children:[E.jsxs(gw,{children:[E.jsx("div",{className:"px-entry-icon",children:h.icon||"?"}),E.jsx(Fm,{variant:h.kind==="guide"?"default":"secondary",children:h.category}),E.jsx(vw,{children:h.title}),E.jsx(ww,{children:h.tagline})]}),E.jsx(yw,{children:E.jsx("span",{className:"px-card-link",children:"Read article →"})})]},h.id))})}function Sw({entry:u,onBack:d}){return E.jsxs("article",{className:"px-article",children:[E.jsx(Ea,{variant:"ghost",size:"sm",onClick:d,children:"← Back to browse"}),E.jsxs("div",{className:"px-article-heading",children:[E.jsx("div",{className:"px-entry-icon px-entry-icon-large",children:u.icon||"?"}),E.jsxs("div",{children:[E.jsx(Fm,{children:u.category}),E.jsx("h1",{children:u.title}),E.jsx("p",{children:u.tagline})]})]}),E.jsxs("div",{className:"px-article-copy",children:[u.sections.map((h,s)=>E.jsx(kw,{section:h},`${u.id}-${s}`)),u.controls&&E.jsx(Cw,{controls:u.controls}),u.footer&&E.jsx("p",{className:"px-article-footer",children:u.footer})]})]})}function Cw({controls:u}){const d=[["What you wire in",u.inputs],["The settings on the node",u.settings],["What comes out",u.outputs]];return E.jsx(E.Fragment,{children:d.filter(([,h])=>h.length).map(([h,s])=>E.jsxs("section",{className:"px-article-section",children:[E.jsx("h2",{children:h}),E.jsx("ul",{children:s.map((T,S)=>{const z=T;return E.jsxs("li",{children:[E.jsx("strong",{children:z.name||"Output"}),z.type&&` (${z.type}${z.optional?", optional":""})`,z.tip&&` — ${z.tip}`]},S)})})]},h))})}function kw({section:u}){var d,h;return E.jsxs("section",{className:"px-article-section",children:[u.heading&&E.jsx("h2",{children:u.heading}),(d=u.paragraphs)==null?void 0:d.map((s,T)=>E.jsx("p",{children:s},T)),u.bullets&&E.jsx("ul",{children:u.bullets.map(s=>E.jsx("li",{children:s},s))}),u.definitions&&E.jsx("dl",{children:u.definitions.map(s=>E.jsxs("div",{children:[E.jsx("dt",{children:s.term}),E.jsx("dd",{children:s.description})]},s.term))}),(h=u.links)==null?void 0:h.map(s=>E.jsx("p",{children:E.jsx("a",{href:s.url,target:"_blank",rel:"noreferrer",children:s.label})},s.url)),u.table&&E.jsxs("table",{children:[E.jsx("thead",{children:E.jsx("tr",{children:u.table.headers.map(s=>E.jsx("th",{children:s},s))})}),E.jsx("tbody",{children:u.table.rows.map((s,T)=>E.jsx("tr",{children:s.map((S,z)=>E.jsx("td",{children:S},z))},T))})]})]})}const zw={id:"help",label:"Help",icon:"?",order:10,component:xw},Ew=Object.freeze(Object.defineProperty({__proto__:null,widget:zw},Symbol.toStringTag,{value:"Module"})),Aw=Object.assign({"./features/help/index.tsx":Ew}),tp=Object.values(Aw).map(u=>u.widget).filter(u=>!!u).sort((u,d)=>(u.order??0)-(d.order??0)||u.label.localeCompare(d.label));function Fi(u){return tp.find(d=>d.id===u)}const np=ue.createContext(null);function ap(){const u=ue.useContext(np);if(!u)throw new Error("WidgetBrowser components must be used inside WidgetBrowser");return u}function Cn({defaultWidget:u,widgetProps:d={},children:h}){const s=Fi(u??"")??tp[0];return s?E.jsx(Ow,{initialWidget:s,widgetProps:d,children:h}):E.jsx("div",{className:"px-widget-empty",children:"No Pixaroma widgets are registered."})}function Ow({initialWidget:u,widgetProps:d,children:h}){const[s,T]=ue.useState(u.id),S=Fi(s)??u,z=ue.useMemo(()=>({activeWidget:S,setActiveWidget:T,widgetProps:d}),[S,d]);return E.jsx(np.Provider,{value:z,children:E.jsx("div",{className:"px-widget-browser",children:h})})}function _w({children:u}){return E.jsxs("aside",{className:"px-widget-sidebar","aria-label":"Pixaroma widgets",children:[E.jsx("div",{className:"px-widget-sidebar-title",children:"Pixaroma"}),E.jsx("nav",{children:u})]})}function Nw({widget:u}){const{activeWidget:d,setActiveWidget:h}=ap(),s=Fi(u);return s?E.jsxs(Ea,{variant:"ghost",className:`px-widget-sidebar-item ${d.id===u?"is-active":""}`,"aria-current":d.id===u?"page":void 0,onClick:()=>h(u),children:[E.jsx("span",{className:"px-widget-sidebar-icon",children:s.icon??"•"}),E.jsx("span",{children:s.label})]}):null}function Rw({children:u}){return E.jsx("section",{className:"px-widget-content",children:u})}function Mw({widget:u}){const{activeWidget:d,widgetProps:h}=ap();if(d.id!==u)return null;const s=Fi(u);if(!s)return E.jsxs("div",{className:"px-widget-empty",children:["Unknown widget: ",u]});const T=s.component;return E.jsx(T,{...h[u]??{}})}Cn.Sidebar=_w;Cn.SidebarItem=Nw;Cn.Content=Rw;Cn.Sandbox=Mw;const Rm=document.getElementById("root");Rm&&hv.createRoot(Rm).render(E.jsx(ue.StrictMode,{children:E.jsx("div",{className:"pixaroma-react",children:E.jsxs(Cn,{defaultWidget:"help",widgetProps:{help:{entries:bv}},children:[E.jsx(Cn.Sidebar,{children:E.jsx(Cn.SidebarItem,{widget:"help"})}),E.jsx(Cn.Content,{children:E.jsx(Cn.Sandbox,{widget:"help"})})]})})}));
//# sourceMappingURL=pixaroma-ui.js.map

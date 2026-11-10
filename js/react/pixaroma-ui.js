var hv=Object.defineProperty;var mv=(r,c,f)=>c in r?hv(r,c,{enumerable:!0,configurable:!0,writable:!0,value:f}):r[c]=f;var pi=(r,c,f)=>mv(r,typeof c!="symbol"?c+"":c,f);import{api as km}from"/scripts/api.js";function pv(r,c){for(var f=0;f<c.length;f++){const u=c[f];if(typeof u!="string"&&!Array.isArray(u)){for(const g in u)if(g!=="default"&&!(g in r)){const b=Object.getOwnPropertyDescriptor(u,g);b&&Object.defineProperty(r,g,b.get?b:{enumerable:!0,get:()=>u[g]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const g of document.querySelectorAll('link[rel="modulepreload"]'))u(g);new MutationObserver(g=>{for(const b of g)if(b.type==="childList")for(const k of b.addedNodes)k.tagName==="LINK"&&k.rel==="modulepreload"&&u(k)}).observe(document,{childList:!0,subtree:!0});function f(g){const b={};return g.integrity&&(b.integrity=g.integrity),g.referrerPolicy&&(b.referrerPolicy=g.referrerPolicy),g.crossOrigin==="use-credentials"?b.credentials="include":g.crossOrigin==="anonymous"?b.credentials="omit":b.credentials="same-origin",b}function u(g){if(g.ep)return;g.ep=!0;const b=f(g);fetch(g.href,b)}})();function gv(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Hu={exports:{}},gi={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cm;function yv(){if(Cm)return gi;Cm=1;var r=Symbol.for("react.transitional.element"),c=Symbol.for("react.fragment");function f(u,g,b){var k=null;if(b!==void 0&&(k=""+b),g.key!==void 0&&(k=""+g.key),"key"in g){b={};for(var A in g)A!=="key"&&(b[A]=g[A])}else b=g;return g=b.ref,{$$typeof:r,type:u,key:k,ref:g!==void 0?g:null,props:b}}return gi.Fragment=c,gi.jsx=f,gi.jsxs=f,gi}var Em;function vv(){return Em||(Em=1,Hu.exports=yv()),Hu.exports}var J=vv(),Lu={exports:{}},Z={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zm;function bv(){if(zm)return Z;zm=1;var r=Symbol.for("react.transitional.element"),c=Symbol.for("react.portal"),f=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),g=Symbol.for("react.profiler"),b=Symbol.for("react.consumer"),k=Symbol.for("react.context"),A=Symbol.for("react.forward_ref"),O=Symbol.for("react.suspense"),N=Symbol.for("react.memo"),z=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),R=Symbol.for("react.view_transition"),ne=Symbol.iterator;function F(m){return m===null||typeof m!="object"?null:(m=ne&&m[ne]||m["@@iterator"],typeof m=="function"?m:null)}var X={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},B=Object.assign,ye={};function Se(m,_,q){this.props=m,this.context=_,this.refs=ye,this.updater=q||X}Se.prototype.isReactComponent={},Se.prototype.setState=function(m,_){if(typeof m!="object"&&typeof m!="function"&&m!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,m,_,"setState")},Se.prototype.forceUpdate=function(m){this.updater.enqueueForceUpdate(this,m,"forceUpdate")};function yt(){}yt.prototype=Se.prototype;function Ye(m,_,q){this.props=m,this.context=_,this.refs=ye,this.updater=q||X}var it=Ye.prototype=new yt;it.constructor=Ye,B(it,Se.prototype),it.isPureReactComponent=!0;var tt=Array.isArray;function $(){}var re={H:null,A:null,T:null,S:null},ct=Object.prototype.hasOwnProperty;function nt(m,_,q){var G=q.ref;return{$$typeof:r,type:m,key:_,ref:G!==void 0?G:null,props:q}}function at(m,_){return nt(m.type,_,m.props)}function te(m){return typeof m=="object"&&m!==null&&m.$$typeof===r}function jt(m){var _={"=":"=0",":":"=2"};return"$"+m.replace(/[=:]/g,function(q){return _[q]})}var Ot=/\/+/g;function Ue(m,_){return typeof m=="object"&&m!==null&&m.key!=null?jt(""+m.key):_.toString(36)}function M(m){switch(m.status){case"fulfilled":return m.value;case"rejected":throw m.reason;default:switch(typeof m.status=="string"?m.then($,$):(m.status="pending",m.then(function(_){m.status==="pending"&&(m.status="fulfilled",m.value=_)},function(_){m.status==="pending"&&(m.status="rejected",m.reason=_)})),m.status){case"fulfilled":return m.value;case"rejected":throw m.reason}}throw m}function Y(m,_,q,G,de){var fe=typeof m;(fe==="undefined"||fe==="boolean")&&(m=null);var me=!1;if(m===null)me=!0;else switch(fe){case"bigint":case"string":case"number":me=!0;break;case"object":switch(m.$$typeof){case r:case c:me=!0;break;case z:return me=m._init,Y(me(m._payload),_,q,G,de)}}if(me)return de=de(m),me=G===""?"."+Ue(m,0):G,tt(de)?(q="",me!=null&&(q=me.replace(Ot,"$&/")+"/"),Y(de,_,q,"",function(sn){return sn})):de!=null&&(te(de)&&(de=at(de,q+(de.key==null||m&&m.key===de.key?"":(""+de.key).replace(Ot,"$&/")+"/")+me)),_.push(de)),1;me=0;var L=G===""?".":G+":";if(tt(m))for(var P=0;P<m.length;P++)G=m[P],fe=L+Ue(G,P),me+=Y(G,_,q,fe,de);else if(P=F(m),typeof P=="function")for(m=P.call(m),P=0;!(G=m.next()).done;)G=G.value,fe=L+Ue(G,P++),me+=Y(G,_,q,fe,de);else if(fe==="object"){if(typeof m.then=="function")return Y(M(m),_,q,G,de);throw _=String(m),Error("Objects are not valid as a React child (found: "+(_==="[object Object]"?"object with keys {"+Object.keys(m).join(", ")+"}":_)+"). If you meant to render a collection of children, use an array instead.")}return me}function V(m,_,q){if(m==null)return m;var G=[],de=0;return Y(m,G,"","",function(fe){return _.call(q,fe,de++)}),G}function ue(m){if(m._status===-1){var _=m._result,q=_();q.then(function(G){(m._status===0||m._status===-1)&&(m._status=1,m._result=G,q.status===void 0&&(q.status="fulfilled",q.value=G))},function(G){(m._status===0||m._status===-1)&&(m._status=2,m._result=G,q.status===void 0&&(q.status="rejected",q.reason=G))}),m._status===-1&&(m._status=0,m._result=q)}if(m._status===1)return m._result.default;throw m._result}var ce=typeof reportError=="function"?reportError:function(m){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var _=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof m=="object"&&m!==null&&typeof m.message=="string"?String(m.message):String(m),error:m});if(!window.dispatchEvent(_))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",m);return}console.error(m)};function Me(m){var _=re.T,q={};q.types=_!==null?_.types:null,re.T=q;try{var G=m(),de=re.S;de!==null&&de(q,G),typeof G=="object"&&G!==null&&typeof G.then=="function"&&G.then($,ce)}catch(fe){ce(fe)}finally{_!==null&&q.types!==null&&(_.types=q.types),re.T=_}}function rn(m){var _=re.T;if(_!==null){var q=_.types;q===null?_.types=[m]:q.indexOf(m)===-1&&q.push(m)}else Me(rn.bind(null,m))}var na={map:V,forEach:function(m,_,q){V(m,function(){_.apply(this,arguments)},q)},count:function(m){var _=0;return V(m,function(){_++}),_},toArray:function(m){return V(m,function(_){return _})||[]},only:function(m){if(!te(m))throw Error("React.Children.only expected to receive a single React element child.");return m}};return Z.Activity=w,Z.Children=na,Z.Component=Se,Z.Fragment=f,Z.Profiler=g,Z.PureComponent=Ye,Z.StrictMode=u,Z.Suspense=O,Z.ViewTransition=R,Z.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=re,Z.__COMPILER_RUNTIME={__proto__:null,c:function(m){return re.H.useMemoCache(m)}},Z.addTransitionType=rn,Z.cache=function(m){return function(){return m.apply(null,arguments)}},Z.cacheSignal=function(){return null},Z.cloneElement=function(m,_,q){if(m==null)throw Error("The argument must be a React element, but you passed "+m+".");var G=B({},m.props),de=m.key;if(_!=null)for(fe in _.key!==void 0&&(de=""+_.key),_)!ct.call(_,fe)||fe==="key"||fe==="__self"||fe==="__source"||fe==="ref"&&_.ref===void 0||(G[fe]=_[fe]);var fe=arguments.length-2;if(fe===1)G.children=q;else if(1<fe){for(var me=Array(fe),L=0;L<fe;L++)me[L]=arguments[L+2];G.children=me}return nt(m.type,de,G)},Z.createContext=function(m){return m={$$typeof:k,_currentValue:m,_currentValue2:m,_threadCount:0,Provider:null,Consumer:null},m.Provider=m,m.Consumer={$$typeof:b,_context:m},m},Z.createElement=function(m,_,q){var G,de={},fe=null;if(_!=null)for(G in _.key!==void 0&&(fe=""+_.key),_)ct.call(_,G)&&G!=="key"&&G!=="__self"&&G!=="__source"&&(de[G]=_[G]);var me=arguments.length-2;if(me===1)de.children=q;else if(1<me){for(var L=Array(me),P=0;P<me;P++)L[P]=arguments[P+2];de.children=L}if(m&&m.defaultProps)for(G in me=m.defaultProps,me)de[G]===void 0&&(de[G]=me[G]);return nt(m,fe,de)},Z.createRef=function(){return{current:null}},Z.forwardRef=function(m){return{$$typeof:A,render:m}},Z.isValidElement=te,Z.lazy=function(m){return{$$typeof:z,_payload:{_status:-1,_result:m},_init:ue}},Z.memo=function(m,_){return{$$typeof:N,type:m,compare:_===void 0?null:_}},Z.startTransition=Me,Z.unstable_useCacheRefresh=function(){return re.H.useCacheRefresh()},Z.use=function(m){return re.H.use(m)},Z.useActionState=function(m,_,q){return re.H.useActionState(m,_,q)},Z.useCallback=function(m,_){return re.H.useCallback(m,_)},Z.useContext=function(m){return re.H.useContext(m)},Z.useDebugValue=function(){},Z.useDeferredValue=function(m,_){return re.H.useDeferredValue(m,_)},Z.useEffect=function(m,_){return re.H.useEffect(m,_)},Z.useEffectEvent=function(m){return re.H.useEffectEvent(m)},Z.useId=function(){return re.H.useId()},Z.useImperativeHandle=function(m,_,q){return re.H.useImperativeHandle(m,_,q)},Z.useInsertionEffect=function(m,_){return re.H.useInsertionEffect(m,_)},Z.useLayoutEffect=function(m,_){return re.H.useLayoutEffect(m,_)},Z.useMemo=function(m,_){return re.H.useMemo(m,_)},Z.useOptimistic=function(m,_){return re.H.useOptimistic(m,_)},Z.useReducer=function(m,_,q){return re.H.useReducer(m,_,q)},Z.useRef=function(m){return re.H.useRef(m)},Z.useState=function(m){return re.H.useState(m)},Z.useSyncExternalStore=function(m,_,q){return re.H.useSyncExternalStore(m,_,q)},Z.useTransition=function(){return re.H.useTransition()},Z.version="19.3.0",Z}var Am;function Iu(){return Am||(Am=1,Lu.exports=bv()),Lu.exports}var ze=Iu();const wv=gv(ze),xv=pv({__proto__:null,default:wv},[ze]);var Bu={exports:{}},yi={},ju={exports:{}},qu={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Om;function Tv(){return Om||(Om=1,(function(r){function c(M,Y){var V=M.length;M.push(Y);e:for(;0<V;){var ue=V-1>>>1,ce=M[ue];if(0<g(ce,Y))M[ue]=Y,M[V]=ce,V=ue;else break e}}function f(M){return M.length===0?null:M[0]}function u(M){if(M.length===0)return null;var Y=M[0],V=M.pop();if(V!==Y){M[0]=V;e:for(var ue=0,ce=M.length,Me=ce>>>1;ue<Me;){var rn=2*(ue+1)-1,na=M[rn],m=rn+1,_=M[m];if(0>g(na,V))m<ce&&0>g(_,na)?(M[ue]=_,M[m]=V,ue=m):(M[ue]=na,M[rn]=V,ue=rn);else if(m<ce&&0>g(_,V))M[ue]=_,M[m]=V,ue=m;else break e}}return Y}function g(M,Y){var V=M.sortIndex-Y.sortIndex;return V!==0?V:M.id-Y.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var b=performance;r.unstable_now=function(){return b.now()}}else{var k=Date,A=k.now();r.unstable_now=function(){return k.now()-A}}var O=[],N=[],z=1,w=null,R=3,ne=!1,F=!1,X=!1,B=!1,ye=typeof setTimeout=="function"?setTimeout:null,Se=typeof clearTimeout=="function"?clearTimeout:null,yt=typeof setImmediate<"u"?setImmediate:null;function Ye(M){for(var Y=f(N);Y!==null;){if(Y.callback===null)u(N);else if(Y.startTime<=M)u(N),Y.sortIndex=Y.expirationTime,c(O,Y);else break;Y=f(N)}}function it(M){if(X=!1,Ye(M),!F)if(f(O)!==null)F=!0,tt||(tt=!0,te());else{var Y=f(N);Y!==null&&Ue(it,Y.startTime-M)}}var tt=!1,$=-1,re=5,ct=-1;function nt(){return B?!0:!(r.unstable_now()-ct<re)}function at(){if(B=!1,tt){var M=r.unstable_now();ct=M;var Y=!0;try{e:{F=!1,X&&(X=!1,Se($),$=-1),ne=!0;var V=R;try{t:{for(Ye(M),w=f(O);w!==null&&!(w.expirationTime>M&&nt());){var ue=w.callback;if(typeof ue=="function"){w.callback=null,R=w.priorityLevel;var ce=ue(w.expirationTime<=M);if(M=r.unstable_now(),typeof ce=="function"){w.callback=ce,Ye(M),Y=!0;break t}w===f(O)&&u(O),Ye(M)}else u(O);w=f(O)}if(w!==null)Y=!0;else{var Me=f(N);Me!==null&&Ue(it,Me.startTime-M),Y=!1}}break e}finally{w=null,R=V,ne=!1}Y=void 0}}finally{Y?te():tt=!1}}}var te;if(typeof yt=="function")te=function(){yt(at)};else if(typeof MessageChannel<"u"){var jt=new MessageChannel,Ot=jt.port2;jt.port1.onmessage=at,te=function(){Ot.postMessage(null)}}else te=function(){ye(at,0)};function Ue(M,Y){$=ye(function(){M(r.unstable_now())},Y)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(M){M.callback=null},r.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):re=0<M?Math.floor(1e3/M):5},r.unstable_getCurrentPriorityLevel=function(){return R},r.unstable_next=function(M){switch(R){case 1:case 2:case 3:var Y=3;break;default:Y=R}var V=R;R=Y;try{return M()}finally{R=V}},r.unstable_requestPaint=function(){B=!0},r.unstable_runWithPriority=function(M,Y){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var V=R;R=M;try{return Y()}finally{R=V}},r.unstable_scheduleCallback=function(M,Y,V){var ue=r.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?ue+V:ue):V=ue,M){case 1:var ce=-1;break;case 2:ce=250;break;case 5:ce=1073741823;break;case 4:ce=1e4;break;default:ce=5e3}return ce=V+ce,M={id:z++,callback:Y,priorityLevel:M,startTime:V,expirationTime:ce,sortIndex:-1},V>ue?(M.sortIndex=V,c(N,M),f(O)===null&&M===f(N)&&(X?(Se($),$=-1):X=!0,Ue(it,V-ue))):(M.sortIndex=ce,c(O,M),F||ne||(F=!0,tt||(tt=!0,te()))),M},r.unstable_shouldYield=nt,r.unstable_wrapCallback=function(M){var Y=R;return function(){var V=R;R=Y;try{return M.apply(this,arguments)}finally{R=V}}}})(qu)),qu}var _m;function Sv(){return _m||(_m=1,ju.exports=Tv()),ju.exports}var Gu={exports:{}},et={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rm;function kv(){if(Rm)return et;Rm=1;var r=Iu();function c(z){var w="https://react.dev/errors/"+z;if(1<arguments.length){w+="?args[]="+encodeURIComponent(arguments[1]);for(var R=2;R<arguments.length;R++)w+="&args[]="+encodeURIComponent(arguments[R])}return"Minified React error #"+z+"; visit "+w+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(){}var u={d:{f,r:function(){throw Error(c(522))},D:f,C:f,L:f,m:f,X:f,S:f,M:f},p:0,findDOMNode:null},g=Symbol.for("react.portal"),b=Symbol.for("react.recoverable"),k=Symbol.for("react.optimistic_key");function A(z,w,R){var ne=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:g,key:ne==null?null:ne===k?k:""+ne,children:z,containerInfo:w,implementation:R}}var O=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function N(z,w){if(z==="font")return"";if(typeof w=="string")return w==="use-credentials"?w:""}return et.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=u,et.browser=function(z){return{$$typeof:b,_reason:z}},et.createPortal=function(z,w){var R=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!w||w.nodeType!==1&&w.nodeType!==9&&w.nodeType!==11)throw Error(c(299));return A(z,w,null,R)},et.flushSync=function(z){var w=O.T,R=u.p;try{if(O.T=null,u.p=2,z)return z()}finally{O.T=w,u.p=R,u.d.f()}},et.preconnect=function(z,w){typeof z=="string"&&(w?(w=w.crossOrigin,w=typeof w=="string"?w==="use-credentials"?w:"":void 0):w=null,u.d.C(z,w))},et.prefetchDNS=function(z){typeof z=="string"&&u.d.D(z)},et.preinit=function(z,w){if(typeof z=="string"&&w&&typeof w.as=="string"){var R=w.as,ne=N(R,w.crossOrigin),F=typeof w.integrity=="string"?w.integrity:void 0,X=typeof w.fetchPriority=="string"?w.fetchPriority:void 0;R==="style"?u.d.S(z,typeof w.precedence=="string"?w.precedence:void 0,{crossOrigin:ne,integrity:F,fetchPriority:X}):R==="script"&&u.d.X(z,{crossOrigin:ne,integrity:F,fetchPriority:X,nonce:typeof w.nonce=="string"?w.nonce:void 0})}},et.preinitModule=function(z,w){if(typeof z=="string")if(typeof w=="object"&&w!==null){if(w.as==null||w.as==="script"){var R=N(w.as,w.crossOrigin);u.d.M(z,{crossOrigin:R,integrity:typeof w.integrity=="string"?w.integrity:void 0,nonce:typeof w.nonce=="string"?w.nonce:void 0,fetchPriority:typeof w.fetchPriority=="string"?w.fetchPriority:void 0})}}else w==null&&u.d.M(z)},et.preload=function(z,w){if(typeof z=="string"&&typeof w=="object"&&w!==null&&typeof w.as=="string"){var R=w.as,ne=N(R,w.crossOrigin);u.d.L(z,R,{crossOrigin:ne,integrity:typeof w.integrity=="string"?w.integrity:void 0,nonce:typeof w.nonce=="string"?w.nonce:void 0,type:typeof w.type=="string"?w.type:void 0,fetchPriority:typeof w.fetchPriority=="string"?w.fetchPriority:void 0,referrerPolicy:typeof w.referrerPolicy=="string"?w.referrerPolicy:void 0,imageSrcSet:typeof w.imageSrcSet=="string"?w.imageSrcSet:void 0,imageSizes:typeof w.imageSizes=="string"?w.imageSizes:void 0,media:typeof w.media=="string"?w.media:void 0})}},et.preloadModule=function(z,w){if(typeof z=="string")if(w){var R=N(w.as,w.crossOrigin);u.d.m(z,{as:typeof w.as=="string"&&w.as!=="script"?w.as:void 0,crossOrigin:R,integrity:typeof w.integrity=="string"?w.integrity:void 0,nonce:typeof w.nonce=="string"?w.nonce:void 0,fetchPriority:typeof w.fetchPriority=="string"?w.fetchPriority:void 0})}else u.d.m(z)},et.requestFormReset=function(z){u.d.r(z)},et.unstable_batchedUpdates=function(z,w){return z(w)},et.useFormState=function(z,w,R){return O.H.useFormState(z,w,R)},et.useFormStatus=function(){return O.H.useHostTransitionStatus()},et.version="19.3.0",et}var Nm;function Cv(){if(Nm)return Gu.exports;Nm=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(c){console.error(c)}}return r(),Gu.exports=kv(),Gu.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Um;function Ev(){if(Um)return yi;Um=1;var r=Sv(),c=Iu(),f=Cv();function u(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function g(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function b(e){for(var t=e,n=t;n&&!n.alternate;)t=n,(t.flags&4098)!==0&&(e=t.return),n=t.return;for(;t.return;)t=t.return;return t.tag===3?e:null}function k(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function A(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function O(e){if(b(e)!==e)throw Error(u(188))}function N(e){var t=e.alternate;if(!t){if(t=b(e),t===null)throw Error(u(188));return t!==e?null:e}for(var n=e,a=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(a=o.return,a!==null){n=a;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return O(o),e;if(i===a)return O(o),t;i=i.sibling}throw Error(u(188))}if(n.return!==a.return)n=o,a=i;else{for(var l=!1,s=o.child;s;){if(s===n){l=!0,n=o,a=i;break}if(s===a){l=!0,a=o,n=i;break}s=s.sibling}if(!l){for(s=i.child;s;){if(s===n){l=!0,n=i,a=o;break}if(s===a){l=!0,a=i,n=o;break}s=s.sibling}if(!l)throw Error(u(189))}}if(n.alternate!==a)throw Error(u(190))}if(n.tag!==3)throw Error(u(188));return n.stateNode.current===n?e:t}function z(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=z(e),t!==null)return t;e=e.sibling}return null}function w(e,t,n,a,o,i){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&n(e,a,o,i)||(e.tag!==22||e.memoizedState===null)&&(t||e.tag!==5&&e.tag!==27)&&w(e.child,t,n,a,o,i))return!0;e=e.sibling}return!1}function R(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function ne(e){var t=!1;for(e=e.return;e!==null&&(e.tag===4&&(t=!0),!(e.tag===3||e.tag===5||e.tag===27));)e=e.return;return t}function F(e){var t=[null,null],n=R(e);return n===null||X(t,e,n.child,{foundSelf:!1}),t}function X(e,t,n,a){for(;n!==null;){if(n===t)a.foundSelf=!0;else if(n.tag===5||n.tag===27||n.tag===6){if(a.foundSelf)return e[1]=n,!0;e[0]=n}else if((n.tag!==22||n.memoizedState===null)&&X(e,t,n.child,a))return!0;n=n.sibling}return!1}function B(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(u(559))}}var ye=null,Se=null;function yt(e,t,n){return e===n?!0:e===t?(ye=e,!0):!1}function Ye(e,t,n){return e===n?(Se=e,!1):e===t?(Se!==null&&(ye=e),!0):!1}function it(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function tt(e,t,n){for(var a=0,o=e;o;o=n(o))a++;o=0;for(var i=t;i;i=n(i))o++;for(;0<a-o;)e=n(e),a--;for(;0<o-a;)t=n(t),o--;for(;a--;){if(e===t||t!==null&&e===t.alternate)return e;e=n(e),t=n(t)}return null}var $=Object.assign,re=Symbol.for("react.element"),ct=Symbol.for("react.transitional.element"),nt=Symbol.for("react.portal"),at=Symbol.for("react.fragment"),te=Symbol.for("react.strict_mode"),jt=Symbol.for("react.profiler"),Ot=Symbol.for("react.consumer"),Ue=Symbol.for("react.context"),M=Symbol.for("react.forward_ref"),Y=Symbol.for("react.suspense"),V=Symbol.for("react.suspense_list"),ue=Symbol.for("react.memo"),ce=Symbol.for("react.lazy"),Me=Symbol.for("react.activity"),rn=Symbol.for("react.legacy_hidden"),na=Symbol.for("react.memo_cache_sentinel"),m=Symbol.for("react.view_transition"),_=Symbol.for("react.recoverable"),q=Symbol.iterator;function G(e){return e===null||typeof e!="object"?null:(e=q&&e[q]||e["@@iterator"],typeof e=="function"?e:null)}var de=Symbol.for("react.client.reference");function fe(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===de?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case at:return"Fragment";case jt:return"Profiler";case te:return"StrictMode";case Y:return"Suspense";case V:return"SuspenseList";case Me:return"Activity";case m:return"ViewTransition"}if(typeof e=="object")switch(e.$$typeof){case nt:return"Portal";case Ue:return e.displayName||"Context";case Ot:return(e._context.displayName||"Context")+".Consumer";case M:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ue:return t=e.displayName||null,t!==null?t:fe(e.type)||"Memo";case ce:t=e._payload,e=e._init;try{return fe(e(t))}catch{}}return null}var me=Array.isArray,L=c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,P=f.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,sn={pending:!1,data:null,method:null,action:null},tr=[],za=-1;function Zt(e){return{current:e}}function Ze(e){0>za||(e.current=tr[za],tr[za]=null,za--)}function ke(e,t){za++,tr[za]=e.current,e.current=t}var Kt=Zt(null),xo=Zt(null),Cn=Zt(null),xi=Zt(null);function Ti(e,t){switch(ke(Cn,t),ke(xo,e),ke(Kt,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Uh(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Uh(t),e=Mh(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Ze(Kt),ke(Kt,e)}function Aa(){Ze(Kt),Ze(xo),Ze(Cn)}function nr(e){var t=e.memoizedState;t!==null&&(go._currentValue=t.memoizedState,ke(xi,e)),t=Kt.current;var n=Mh(t,e.type);t!==n&&(ke(xo,e),ke(Kt,n))}function Si(e){xo.current===e&&(Ze(Kt),Ze(xo)),xi.current===e&&(Ze(xi),go._currentValue=sn)}var ar,$u;function En(e){if(ar===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ar=t&&t[1]||"",$u=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ar+e+$u}var or=!1;function ir(e,t){if(!e||or)return"";or=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var E=function(){throw Error()};if(Object.defineProperty(E.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(E,[])}catch(U){var p=U}Reflect.construct(e,[],E)}else{try{E.call()}catch(U){p=U}E=!1;try{var T=Object.getOwnPropertyDescriptor(e.prototype,"props");Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),E=!0,new e}finally{E&&(T!==void 0?Object.defineProperty(e.prototype,"props",T):delete e.prototype.props)}}}else{try{throw Error()}catch(U){p=U}(E=e())&&typeof E.catch=="function"&&E.catch(function(){})}}catch(U){if(U&&p&&typeof U.stack=="string")return[U.stack,p.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var o=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");o&&o.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=a.DetermineComponentFrameRoot(),l=i[0],s=i[1];if(l&&s){var d=l.split(`
`),v=s.split(`
`);for(o=a=0;a<d.length&&!d[a].includes("DetermineComponentFrameRoot");)a++;for(;o<v.length&&!v[o].includes("DetermineComponentFrameRoot");)o++;if(a===d.length||o===v.length)for(a=d.length-1,o=v.length-1;1<=a&&0<=o&&d[a]!==v[o];)o--;for(;1<=a&&0<=o;a--,o--)if(d[a]!==v[o]){if(a!==1||o!==1)do if(a--,o--,0>o||d[a]!==v[o]){var S=`
`+d[a].replace(" at new "," at ");return e.displayName&&S.includes("<anonymous>")&&(S=S.replace("<anonymous>",e.displayName)),S}while(1<=a&&0<=o);break}}}finally{or=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?En(n):""}function yp(e,t){switch(e.tag){case 26:case 27:case 5:return En(e.type);case 16:return En("Lazy");case 13:return e.child!==t&&t!==null?En("Suspense Fallback"):En("Suspense");case 19:return En("SuspenseList");case 0:case 15:return ir(e.type,!1);case 11:return ir(e.type.render,!1);case 1:return ir(e.type,!0);case 31:return En("Activity");case 30:return En("ViewTransition");default:return""}}function ec(e){try{var t="",n=null;do t+=yp(e,n),n=e,e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var lr=Object.prototype.hasOwnProperty,rr=r.unstable_scheduleCallback,sr=r.unstable_cancelCallback,vp=r.unstable_shouldYield,bp=r.unstable_requestPaint,vt=r.unstable_now,wp=r.unstable_getCurrentPriorityLevel,tc=r.unstable_ImmediatePriority,nc=r.unstable_UserBlockingPriority,ki=r.unstable_NormalPriority,xp=r.unstable_LowPriority,ac=r.unstable_IdlePriority,Tp=r.log,Sp=r.unstable_setDisableYieldValue,To=null,bt=null;function zn(e){if(typeof Tp=="function"&&Sp(e),bt&&typeof bt.setStrictMode=="function")try{bt.setStrictMode(To,e)}catch{}}var wt=Math.clz32?Math.clz32:Ep,kp=Math.log,Cp=Math.LN2;function Ep(e){return e>>>=0,e===0?32:31-(kp(e)/Cp|0)|0}var Ci=256,Ei=262144,zi=4194304;function aa(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ai(e,t,n){var a=e.pendingLanes;if(a===0)return 0;var o=0,i=e.suspendedLanes,l=e.pingedLanes;e=e.warmLanes;var s=a&134217727;return s!==0?(a=s&~i,a!==0?o=aa(a):(l&=s,l!==0?o=aa(l):n||(n=s&~e,n!==0&&(o=aa(n))))):(s=a&~i,s!==0?o=aa(s):l!==0?o=aa(l):n||(n=a&~e,n!==0&&(o=aa(n)))),o===0?0:t!==0&&t!==o&&(t&i)===0&&(i=o&-o,n=t&-t,i>=n||i===32&&(n&4194048)!==0)?t:o}function So(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function oc(e,t){(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var a=31-wt(n),o=1<<a;t|=e[a],n&=~o}return t}function zp(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ic(){var e=zi;return zi<<=1,(zi&62914560)===0&&(zi=4194304),e}function ur(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ko(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ap(e,t,n,a,o,i){var l=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,d=e.expirationTimes,v=e.hiddenUpdates;for(n=l&~n;0<n;){var S=31-wt(n),E=1<<S;s[S]=0,d[S]=-1;var p=v[S];if(p!==null)for(v[S]=null,S=0;S<p.length;S++){var T=p[S];T!==null&&(T.lane&=-536870913)}n&=~E}a!==0&&lc(e,a,0),i!==0&&o===0&&e.tag!==0&&(e.suspendedLanes|=i&~(l&~t))}function lc(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-wt(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|n&261930}function rc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var a=31-wt(n),o=1<<a;o&t|e[a]&t&&(e[a]|=t),n&=~o}}function sc(e,t){var n=t&-t;return n=(n&42)!==0?1:cr(n),(n&(e.suspendedLanes|t))!==0?0:n}function cr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function dr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function uc(){var e=P.p;return e!==0?e:(e=window.event,e===void 0?32:ym(e.type))}function cc(e,t){var n=P.p;try{return P.p=e,t()}finally{P.p=n}}var un=Math.random().toString(36).slice(2),Ke="__reactFiber$"+un,dt="__reactProps$"+un,Oa="__reactContainer$"+un,dc="__reactEvents$"+un,Op="__reactListeners$"+un,_p="__reactHandles$"+un,fc="__reactResources$"+un,Co="__reactMarker$"+un,Oi="__reactLoad$"+un;function _i(e){delete e[Ke],delete e[dt],delete e[Op],delete e[_p]}function oa(e){var t;if(t=e[Ke])return t;for(var n=e.parentNode;n;){if(t=n[Oa]||n[Ke]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Jh(e);e!==null;){if(n=e[Ke])return n;e=Jh(e)}return t}e=n,n=e.parentNode}return null}function _a(e){if(e=e[Ke]||e[Oa]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Eo(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(u(33))}function Ra(e){var t=e[fc];return t||(t=e[fc]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ve(e){e[Co]=!0}function hc(e){e[Oi]=void 0}var mc=new Set,pc={};function ia(e,t){Na(e,t),Na(e+"Capture",t)}function Na(e,t){for(pc[e]=t,e=0;e<t.length;e++)mc.add(t[e])}var Rp=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),gc={},yc={};function Np(e){return lr.call(yc,e)?!0:lr.call(gc,e)?!1:Rp.test(e)?yc[e]=!0:(gc[e]=!0,!1)}var he=!1;function vc(){var e=he;return he=!1,e}function Ri(e,t,n){if(Np(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,n)}}function Ni(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,n)}}function cn(e,t,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,a)}}function xt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function bc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Up(e,t,n){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var o=a.get,i=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){n=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return n},setValue:function(l){n=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function fr(e){if(!e._valueTracker){var t=bc(e)?"checked":"value";e._valueTracker=Up(e,t,""+e[t])}}function wc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return e&&(a=bc(e)?e.checked?"true":"false":e.value),e=a,e!==n?(t.setValue(e),!0):!1}var Mp=/[\n"\\]/g;function _t(e){return e.replace(Mp,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function hr(e,t,n,a,o,i,l,s){e.name="",l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"?e.type=l:e.removeAttribute("type"),t!=null?l==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+xt(t)):e.value!==""+xt(t)&&(e.value=""+xt(t)):l!=="submit"&&l!=="reset"||e.removeAttribute("value"),t!=null?l==="number"&&e.value==t?mr(e,xt(e.value)):mr(e,xt(t)):n!=null?mr(e,xt(n)):a!=null&&e.removeAttribute("value"),o==null&&i!=null&&(e.defaultChecked=!!i),o!=null&&(e.checked=o&&typeof o!="function"&&typeof o!="symbol"),s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.name=""+xt(s):e.removeAttribute("name")}function xc(e,t,n,a,o,i,l,s){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||n!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){fr(e);return}n=n!=null?""+xt(n):"",t=t!=null?""+xt(t):n,s||t===e.value||(e.value=t),e.defaultValue=t}a=a??o,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=s?e.checked:!!a,e.defaultChecked=!!a,l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"&&(e.name=l),fr(e)}function mr(e,t){e.defaultValue!==""+t&&(e.defaultValue=""+t)}function Ua(e,t,n,a){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&a&&(e[n].defaultSelected=!0)}else{for(n=""+xt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,a&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Tc(e,t,n){if(t!=null&&(t=""+xt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+xt(n):""}function Sc(e,t,n,a){if(t==null){if(a!=null){if(n!=null)throw Error(u(92));if(me(a)){if(1<a.length)throw Error(u(93));a=a[0]}n=a}n==null&&(n=""),t=n}n=xt(t),e.defaultValue=n,a=e.textContent,a===n&&a!==""&&a!==null&&(e.value=a),fr(e)}function Ma(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Dp=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function kc(e,t,n){var a=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,n):typeof n!="number"||n===0||Dp.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Cc(e,t,n){if(t!=null&&typeof t!="object")throw Error(u(62));if(e=e.style,n!=null){for(var a in n)!n.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="",he=!0);for(var o in t)a=t[o],t.hasOwnProperty(o)&&n[o]!==a&&(kc(e,o,a),he=!0)}else for(var i in t)t.hasOwnProperty(i)&&kc(e,i,t[i])}function pr(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Hp=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Lp=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ui(e){return Lp.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function It(){}var gr=null;function yr(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Da=null,Ha=null;function Ec(e){var t=_a(e);if(t&&(e=t.stateNode)){var n=e[dt]||null;e:switch(e=t.stateNode,t.type){case"input":if(hr(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+_t(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var o=a[dt]||null;if(!o)throw Error(u(90));hr(a,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name)}}for(t=0;t<n.length;t++)a=n[t],a.form===e.form&&wc(a)}break e;case"textarea":Tc(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&Ua(e,!!n.multiple,t,!1)}}}var vr=!1;function zc(e,t,n){if(vr)return e(t,n);vr=!0;try{var a=e(t);return a}finally{if(vr=!1,(Da!==null||Ha!==null)&&(Ul(),Da&&(t=Da,e=Ha,Ha=Da=null,Ec(t),e)))for(t=0;t<e.length;t++)Ec(e[t])}}function zo(e,t){var n=e.stateNode;if(n===null)return null;var a=n[dt]||null;if(a===null)return null;n=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(u(231,t,typeof n));return n}var dn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),br=!1;if(dn)try{var Ao={};Object.defineProperty(Ao,"passive",{get:function(){br=!0}}),window.addEventListener("test",Ao,Ao),window.removeEventListener("test",Ao,Ao)}catch{br=!1}var An=null,wr=null,Mi=null;function Ac(){if(Mi)return Mi;var e,t=wr,n=t.length,a,o="value"in An?An.value:An.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(a=1;a<=l&&t[n-a]===o[i-a];a++);return Mi=o.slice(e,1<a?1-a:void 0)}function Di(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Hi(){return!0}function Oc(){return!1}function lt(e){function t(n,a,o,i,l){this._reactName=n,this._targetInst=o,this.type=a,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Hi:Oc,this.isPropagationStopped=Oc,this}return $(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Hi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Hi)},persist:function(){},isPersistent:Hi}),t}var On={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Li=lt(On),Oo=$({},On,{view:0,detail:0}),Bp=lt(Oo),xr,Tr,_o,Bi=$({},Oo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:kr,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==_o&&(_o&&e.type==="mousemove"?(xr=e.screenX-_o.screenX,Tr=e.screenY-_o.screenY):Tr=xr=0,_o=e),xr)},movementY:function(e){return"movementY"in e?e.movementY:Tr}}),_c=lt(Bi),jp=$({},Bi,{dataTransfer:0}),qp=lt(jp),Gp=$({},Oo,{relatedTarget:0}),Sr=lt(Gp),Yp=$({},On,{animationName:0,elapsedTime:0,pseudoElement:0}),Vp=lt(Yp),Qp=$({},On,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Xp=lt(Qp),Pp=$({},On,{data:0}),Rc=lt(Pp),Zp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Kp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ip={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Wp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Ip[e])?!!t[e]:!1}function kr(){return Wp}var Jp=$({},Oo,{key:function(e){if(e.key){var t=Zp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Di(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Kp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:kr,charCode:function(e){return e.type==="keypress"?Di(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Di(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Fp=lt(Jp),$p=$({},Bi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Nc=lt($p),eg=$({},On,{submitter:0}),tg=lt(eg),ng=$({},Oo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:kr}),ag=lt(ng),og=$({},On,{propertyName:0,elapsedTime:0,pseudoElement:0}),ig=lt(og),lg=$({},Bi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),rg=lt(lg),sg=$({},On,{newState:0,oldState:0,source:0}),ug=lt(sg),cg=[9,13,27,32],Cr=dn&&"CompositionEvent"in window,Ro=null;dn&&"documentMode"in document&&(Ro=document.documentMode);var dg=dn&&"TextEvent"in window&&!Ro,Uc=dn&&(!Cr||Ro&&8<Ro&&11>=Ro),Mc=" ",Dc=!1;function Hc(e,t){switch(e){case"keyup":return cg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Lc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var La=!1;function fg(e,t){switch(e){case"compositionend":return Lc(t);case"keypress":return t.which!==32?null:(Dc=!0,Mc);case"textInput":return e=t.data,e===Mc&&Dc?null:e;default:return null}}function hg(e,t){if(La)return e==="compositionend"||!Cr&&Hc(e,t)?(e=Ac(),Mi=wr=An=null,La=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Uc&&t.locale!=="ko"?null:t.data;default:return null}}var mg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Bc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!mg[e.type]:t==="textarea"}function jc(e,t,n,a){Da?Ha?Ha.push(a):Ha=[a]:Da=a,t=jl(t,"onChange"),0<t.length&&(n=new Li("onChange","change",null,n,a),e.push({event:n,listeners:t}))}var No=null,Uo=null;function pg(e){zh(e,0)}function ji(e){var t=Eo(e);if(wc(t))return e}function qc(e,t){if(e==="change")return t}var Gc=!1;if(dn){var Er;if(dn){var zr="oninput"in document;if(!zr){var Yc=document.createElement("div");Yc.setAttribute("oninput","return;"),zr=typeof Yc.oninput=="function"}Er=zr}else Er=!1;Gc=Er&&(!document.documentMode||9<document.documentMode)}function Vc(){No&&(No.detachEvent("onpropertychange",Qc),Uo=No=null)}function Qc(e){if(e.propertyName==="value"&&ji(Uo)){var t=[];jc(t,Uo,e,yr(e)),zc(pg,t)}}function gg(e,t,n){e==="focusin"?(Vc(),No=t,Uo=n,No.attachEvent("onpropertychange",Qc)):e==="focusout"&&Vc()}function yg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ji(Uo)}function vg(e,t){if(e==="click")return ji(t)}function bg(e,t){if(e==="input"||e==="change")return ji(t)}function wg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Tt=typeof Object.is=="function"?Object.is:wg;function Mo(e,t){if(Tt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var o=n[a];if(!lr.call(t,o)||!Tt(e[o],t[o]))return!1}return!0}function Ar(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Xc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Pc(e,t){var n=Xc(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=t&&a>=t)return{node:n,offset:t-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Xc(n)}}function Zc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Zc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Kc(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Ar(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ar(e.document)}return t}function Or(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var xg=dn&&"documentMode"in document&&11>=document.documentMode,Ba=null,_r=null,Do=null,Rr=!1;function Ic(e,t,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Rr||Ba==null||Ba!==Ar(a)||(a=Ba,"selectionStart"in a&&Or(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Do&&Mo(Do,a)||(Do=a,a=jl(_r,"onSelect"),0<a.length&&(t=new Li("onSelect","select",null,t,n),e.push({event:t,listeners:a}),t.target=Ba)))}function la(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ja={animationend:la("Animation","AnimationEnd"),animationiteration:la("Animation","AnimationIteration"),animationstart:la("Animation","AnimationStart"),transitionrun:la("Transition","TransitionRun"),transitionstart:la("Transition","TransitionStart"),transitioncancel:la("Transition","TransitionCancel"),transitionend:la("Transition","TransitionEnd")},Nr={},Wc={};dn&&(Wc=document.createElement("div").style,"AnimationEvent"in window||(delete ja.animationend.animation,delete ja.animationiteration.animation,delete ja.animationstart.animation),"TransitionEvent"in window||delete ja.transitionend.transition);function ra(e){if(Nr[e])return Nr[e];if(!ja[e])return e;var t=ja[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Wc)return Nr[e]=t[n];return e}var Jc=ra("animationend"),Fc=ra("animationiteration"),$c=ra("animationstart"),Tg=ra("transitionrun"),Sg=ra("transitionstart"),kg=ra("transitioncancel"),ed=ra("transitionend"),td=new Map,Ur="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ur.push("scrollEnd");function qt(e,t){td.set(e,t),ia(t,[e])}var Cg=0;function fn(e,t){if(e.name!=null&&e.name!=="auto")return e.name;if(t.autoName!==null)return t.autoName;e=Qt.identifierPrefix;var n=Cg++;return e="_"+e+"t_"+n.toString(32)+"_",t.autoName=e}function nd(e){if(e==null||typeof e=="string")return e;var t=null,n=io;if(n!==null)for(var a=0;a<n.length;a++){var o=e[n[a]];if(o!=null){if(o==="none")return"none";t=t==null?o:t+(" "+o)}}return t??e.default}function hn(e,t){return e=nd(e),t=nd(t),t==null?e==="auto"?null:e:t==="auto"?null:t}var qi=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Rt=[],qa=0,Mr=0;function Gi(){for(var e=qa,t=Mr=qa=0;t<e;){var n=Rt[t];Rt[t++]=null;var a=Rt[t];Rt[t++]=null;var o=Rt[t];Rt[t++]=null;var i=Rt[t];if(Rt[t++]=null,a!==null&&o!==null){var l=a.pending;l===null?o.next=o:(o.next=l.next,l.next=o),a.pending=o}i!==0&&ad(n,o,i)}}function Yi(e,t,n,a){Rt[qa++]=e,Rt[qa++]=t,Rt[qa++]=n,Rt[qa++]=a,Mr|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function Dr(e,t,n,a){return Yi(e,t,n,a),Vi(e)}function sa(e,t){return Yi(e,null,null,t),Vi(e)}function ad(e,t,n){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n);for(var o=!1,i=e.return;i!==null;)i.childLanes|=n,a=i.alternate,a!==null&&(a.childLanes|=n),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(o=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,o&&t!==null&&(o=31-wt(n),e=i.hiddenUpdates,a=e[o],a===null?e[o]=[t]:a.push(t),t.lane=n|536870912),i):null}function Vi(e){if(50<ai)throw ai=0,Nl=null,Error(u(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Ga={};function Eg(e,t,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ft(e,t,n,a){return new Eg(e,t,n,a)}function Hr(e){return e=e.prototype,!(!e||!e.isReactComponent)}function mn(e,t){var n=e.alternate;return n===null?(n=ft(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&1206910976,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function od(e,t){e.flags&=1206910978;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Qi(e,t,n,a,o,i){var l=0;if(a=e,typeof a=="function")Hr(a)&&(l=1);else if(typeof a=="string")l=ev(e,n,Kt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(a){case Me:return e=ft(31,n,t,o),e.elementType=Me,e.lanes=i,e;case at:return ua(n.children,o,i,t);case te:l=8,o|=24;break;case jt:return e=ft(12,n,t,o|2),e.elementType=jt,e.lanes=i,e;case Y:return e=ft(13,n,t,o),e.elementType=Y,e.lanes=i,e;case V:return e=ft(19,n,t,o),e.elementType=V,e.lanes=i,e;case rn:case m:return e=o|32,e=ft(30,n,t,e),e.elementType=m,e.lanes=i,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof a=="object"&&a!==null)switch(a.$$typeof){case Ue:l=10;break e;case Ot:l=9;break e;case M:l=11;break e;case ue:l=14;break e;case ce:l=16,a=null;break e}l=29,n=Error(u(130,e===null?"null":typeof e,"")),a=null}return t=ft(l,n,t,o),t.elementType=e,t.type=a,t.lanes=i,t}function ua(e,t,n,a){return e=ft(7,e,a,t),e.lanes=n,e}function Lr(e,t,n){return e=ft(6,e,null,t),e.lanes=n,e}function id(e){var t=ft(18,null,null,0);return t.stateNode=e,t}function Br(e,t,n){return t=ft(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var ld=new WeakMap;function Nt(e,t){if(typeof e=="object"&&e!==null){var n=ld.get(e);return n!==void 0?n:(t={value:e,source:t,stack:ec(t)},ld.set(e,t),t)}return{value:e,source:t,stack:ec(t)}}var Ya=[],Va=0,Xi=null,Ho=0,Ut=[],Mt=0,_n=null,Wt=1,Jt="";function pn(e,t){Ya[Va++]=Ho,Ya[Va++]=Xi,Xi=e,Ho=t}function rd(e,t,n){Ut[Mt++]=Wt,Ut[Mt++]=Jt,Ut[Mt++]=_n,_n=e;var a=Wt;e=Jt;var o=32-wt(a)-1;a&=~(1<<o),n+=1;var i=32-wt(t)+o;if(30<i){var l=o-o%5;i=(a&(1<<l)-1).toString(32),a>>=l,o-=l,Wt=1<<32-wt(t)+o|n<<o|a,Jt=i+e}else Wt=1<<i|n<<o|a,Jt=e}function Pi(e){e.return!==null&&(pn(e,1),rd(e,1,0))}function jr(e){for(;e===Xi;)Xi=Ya[--Va],Ya[Va]=null,Ho=Ya[--Va],Ya[Va]=null;for(;e===_n;)_n=Ut[--Mt],Ut[Mt]=null,Jt=Ut[--Mt],Ut[Mt]=null,Wt=Ut[--Mt],Ut[Mt]=null}function sd(e,t){Ut[Mt++]=Wt,Ut[Mt++]=Jt,Ut[Mt++]=_n,Wt=t.id,Jt=t.overflow,_n=e}var Qe=null,Ce=null,ee=!1,Rn=null,Dt=!1,qr=Error(u(519));function Nn(e){var t=Error(u(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Lo(Nt(t,e)),qr}function ud(e){var t=e.stateNode,n=e.type,a=e.memoizedProps;switch(t[Ke]=e,t[dt]=a,n){case"dialog":oe("cancel",t),oe("close",t);break;case"iframe":case"object":case"embed":oe("load",t);break;case"video":case"audio":for(n=0;n<ii.length;n++)oe(ii[n],t);break;case"source":oe("error",t);break;case"img":case"image":case"link":oe("error",t),oe("load",t);break;case"details":oe("toggle",t);break;case"input":oe("invalid",t),xc(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":oe("invalid",t);break;case"textarea":oe("invalid",t),Sc(t,a.value,a.defaultValue,a.children)}n=a.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||a.suppressHydrationWarning===!0||Rh(t.textContent,n)?(a.popover!=null&&(oe("beforetoggle",t),oe("toggle",t)),a.onScroll!=null&&oe("scroll",t),a.onScrollEnd!=null&&oe("scrollend",t),a.onClick!=null&&(t.onclick=It),t=!0):t=!1,t||Nn(e,!0)}function Zi(e){for(Qe=e.return;Qe;)switch(Qe.tag){case 5:case 31:case 13:Dt=!1;return;case 27:case 3:Dt=!0;return;default:Qe=Qe.return}}function Qa(e){if(e!==Qe)return!1;if(!ee)return Zi(e),ee=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||gu(e.type,e.memoizedProps)),n=!n),n&&Ce&&Nn(e),Zi(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));Ce=Wh(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));Ce=Wh(e)}else t===27?(t=Ce,Kn(e.type)?(e=Cu,Cu=null,Ce=e):Ce=t):Ce=Qe?Lt(e.stateNode.nextSibling):null;return!0}function ca(){Ce=Qe=null,ee=!1}function Gr(){var e=Rn;return e!==null&&(pt===null?pt=e:pt.push.apply(pt,e),Rn=null),e}function Lo(e){Rn===null?Rn=[e]:Rn.push(e)}var Yr=Zt(null),da=null,gn=null;function Un(e,t,n){ke(Yr,t._currentValue),t._currentValue=n}function yn(e){e._currentValue=Yr.current,Ze(Yr)}function Ki(e,t,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===n)break;e=e.return}}function Vr(e,t,n,a){var o=e.child;for(o!==null&&(o.return=e);o!==null;){var i=o.dependencies;if(i!==null){var l=o.child;i=i.firstContext;e:for(;i!==null;){var s=i;i=o;for(var d=0;d<t.length;d++)if(s.context===t[d]){i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),Ki(i.return,n,e),a||(l=null);break e}i=s.next}}else if(o.tag===18){if(l=o.return,l===null)throw Error(u(341));l.lanes|=n,i=l.alternate,i!==null&&(i.lanes|=n),Ki(l,n,e),l=null}else o.tag===13&&o.memoizedState!==null&&o.memoizedState.dehydrated===null?(o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Ki(o.return,n,e),l=o.child,l=l!==null?l.sibling:null):l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===e){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}}function fa(e,t,n,a){e=null;for(var o=t,i=!1;o!==null;){if(!i){if((o.flags&524288)!==0)i=!0;else if((o.flags&262144)!==0)break}if(o.tag===10){var l=o.alternate;if(l===null)throw Error(u(387));if(l=l.memoizedProps,l!==null){var s=o.type;Tt(o.pendingProps.value,l.value)||(e!==null?e.push(s):e=[s])}}else if(o===xi.current){if(l=o.alternate,l===null)throw Error(u(387));l.memoizedState.memoizedState!==o.memoizedState.memoizedState&&(e!==null?e.push(go):e=[go])}o=o.return}return e!==null&&Vr(t,e,n,a),t.flags|=262144,e!==null}function Ii(e){for(e=e.firstContext;e!==null;){if(!Tt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ha(e){da=e,gn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ie(e){return cd(da,e)}function Wi(e,t){return da===null&&ha(e),cd(e,t)}function cd(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},gn===null){if(e===null)throw Error(u(308));gn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else gn=gn.next=t;return n}var zg=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},Ag=r.unstable_scheduleCallback,Og=r.unstable_NormalPriority,Le={$$typeof:Ue,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Qr(){return{controller:new zg,data:new Map,refCount:0}}function Bo(e){e.refCount--,e.refCount===0&&Ag(Og,function(){e.controller.abort()})}function dd(e,t){if((e.pendingLanes&4194048)!==0){var n=e.transitionTypes;for(n===null&&(n=e.transitionTypes=[]),e=0;e<t.length;e++){var a=t[e];n.indexOf(a)===-1&&n.push(a)}}}var jo=null;function _g(e){var t=e.transitionTypes;return e.transitionTypes=null,t}var qo=null,Xr=0,ma=0,Xa=null;function Rg(e,t){if(qo===null){var n=qo=[];Xr=0,ma=ru(),Xa={status:"pending",value:void 0,then:function(a){n.push(a)}}}return Xr++,t.then(fd,fd),t}function fd(){if(--Xr===0&&(jo=null,qo!==null)){Xa!==null&&(Xa.status="fulfilled");var e=qo;qo=null,ma=0,Xa=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Ng(e,t){var n=[],a={status:"pending",value:null,reason:null,then:function(o){n.push(o)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var o=0;o<n.length;o++)(0,n[o])(t)},function(o){for(a.status="rejected",a.reason=o,o=0;o<n.length;o++)(0,n[o])(void 0)}),a}var hd=L.S;L.S=function(e,t){if(lh=vt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Rg(e,t),jo!==null)for(var n=uo;n!==null;)dd(n,jo),n=n.next;if(n=e.types,n!==null){for(var a=uo;a!==null;)dd(a,n),a=a.next;if(ma!==0){a=jo,a===null&&(a=jo=[]);for(var o=0;o<n.length;o++){var i=n[o];a.indexOf(i)===-1&&a.push(i)}}}hd!==null&&hd(e,t)};var pa=Zt(null);function Pr(){var e=pa.current;return e!==null?e:Te.pooledCache}function Ji(e,t){t===null?ke(pa,pa.current):ke(pa,t.pool)}function md(){var e=Pr();return e===null?null:{parent:Le._currentValue,pool:e}}var Pa=Error(u(460)),Zr=Error(u(474)),Fi=Error(u(542)),$i={then:function(){}};function pd(e){return e=e.status,e==="fulfilled"||e==="rejected"}function gd(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(It,It),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,vd(e),e===void 0&&!("reason"in t)?Error(u(600)):e;default:if(typeof t.status=="string")t.then(It,It);else{if(e=Te,e!==null&&100<e.shellSuspendCounter)throw Error(u(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var o=t;o.status="fulfilled",o.value=a}},function(a){if(t.status==="pending"){var o=t;o.status="rejected",o.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,vd(e),e}throw ya=t,Pa}}function ga(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(ya=n,Pa):n}}var ya=null;function yd(){if(ya===null)throw Error(u(459));var e=ya;return ya=null,e}function vd(e){if(e===Pa||e===Fi)throw Error(u(483))}var Za=null,Go=0;function el(e){var t=Go;return Go+=1,Za===null&&(Za=[]),gd(Za,e,t)}function Mn(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function tl(e,t){throw t.$$typeof===re?Error(u(525)):(e=Object.prototype.toString.call(t),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function bd(e){function t(y,h){if(e){var x=y.deletions;x===null?(y.deletions=[h],y.flags|=16):x.push(h)}}function n(y,h){if(!e)return null;for(;h!==null;)t(y,h),h=h.sibling;return null}function a(y){for(var h=new Map;y!==null;)y.key===null?h.set(y.index,y):h.set(y.key,y),y=y.sibling;return h}function o(y,h){return y=mn(y,h),y.index=0,y.sibling=null,y}function i(y,h,x){return y.index=x,e?(x=y.alternate,x!==null?(x=x.index,x<h?(y.flags|=2,h):x):(y.flags|=134217730,h)):(y.flags|=1048576,h)}function l(y){return e&&y.alternate===null&&(y.flags|=134217730),y}function s(y,h,x,C){return h===null||h.tag!==6?(h=Lr(x,y.mode,C),h.return=y,h):(h=o(h,x),h.return=y,h)}function d(y,h,x,C){var D=x.type;return D===at?(y=S(y,h,x.props.children,C,x.key),Mn(y,x),y):h!==null&&(h.elementType===D||typeof D=="object"&&D!==null&&D.$$typeof===ce&&ga(D)===h.type)?(h=o(h,x.props),Mn(h,x),h.return=y,h):(h=Qi(x.type,x.key,x.props,null,y.mode,C),Mn(h,x),h.return=y,h)}function v(y,h,x,C){return h===null||h.tag!==4||h.stateNode.containerInfo!==x.containerInfo||h.stateNode.implementation!==x.implementation?(h=Br(x,y.mode,C),h.return=y,h):(h=o(h,x.children||[]),h.return=y,h)}function S(y,h,x,C,D){return h===null||h.tag!==7?(h=ua(x,y.mode,C,D),h.return=y,h):(h=o(h,x),h.return=y,h)}function E(y,h,x){if(typeof h=="string"&&h!==""||typeof h=="number"||typeof h=="bigint")return h=Lr(""+h,y.mode,x),h.return=y,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case ct:return x=Qi(h.type,h.key,h.props,null,y.mode,x),Mn(x,h),x.return=y,x;case nt:return h=Br(h,y.mode,x),h.return=y,h;case ce:return h=ga(h),E(y,h,x)}if(me(h)||G(h))return h=ua(h,y.mode,x,null),h.return=y,h;if(typeof h.then=="function")return E(y,el(h),x);if(h.$$typeof===Ue)return E(y,Wi(y,h),x);tl(y,h)}return null}function p(y,h,x,C){var D=h!==null?h.key:null;if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return D!==null?null:s(y,h,""+x,C);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ct:return x.key===D?d(y,h,x,C):null;case nt:return x.key===D?v(y,h,x,C):null;case ce:return x=ga(x),p(y,h,x,C)}if(me(x)||G(x))return D!==null?null:S(y,h,x,C,null);if(typeof x.then=="function")return p(y,h,el(x),C);if(x.$$typeof===Ue)return p(y,h,Wi(y,x),C);tl(y,x)}return null}function T(y,h,x,C,D){if(typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint")return y=y.get(x)||null,s(h,y,""+C,D);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case ct:return y=y.get(C.key===null?x:C.key)||null,d(h,y,C,D);case nt:return y=y.get(C.key===null?x:C.key)||null,v(h,y,C,D);case ce:return C=ga(C),T(y,h,x,C,D)}if(me(C)||G(C))return y=y.get(x)||null,S(h,y,C,D,null);if(typeof C.then=="function")return T(y,h,x,el(C),D);if(C.$$typeof===Ue)return T(y,h,x,Wi(h,C),D);tl(h,C)}return null}function U(y,h,x,C){for(var D=null,le=null,j=h,Q=h=0,qe=null;j!==null&&Q<x.length;Q++){j.index>Q?(qe=j,j=null):qe=j.sibling;var se=p(y,j,x[Q],C);if(se===null){j===null&&(j=qe);break}e&&j&&se.alternate===null&&t(y,j),h=i(se,h,Q),le===null?D=se:le.sibling=se,le=se,j=qe}if(Q===x.length)return n(y,j),ee&&pn(y,Q),D;if(j===null){for(;Q<x.length;Q++)j=E(y,x[Q],C),j!==null&&(h=i(j,h,Q),le===null?D=j:le.sibling=j,le=j);return ee&&pn(y,Q),D}for(j=a(j);Q<x.length;Q++)qe=T(j,y,Q,x[Q],C),qe!==null&&(e&&(se=qe.alternate,se!==null&&j.delete(se.key===null?Q:se.key)),h=i(qe,h,Q),le===null?D=qe:le.sibling=qe,le=qe);return e&&j.forEach(function($n){return t(y,$n)}),ee&&pn(y,Q),D}function H(y,h,x,C){if(x==null)throw Error(u(151));for(var D=null,le=null,j=h,Q=h=0,qe=null,se=x.next();j!==null&&!se.done;Q++,se=x.next()){j.index>Q?(qe=j,j=null):qe=j.sibling;var $n=p(y,j,se.value,C);if($n===null){j===null&&(j=qe);break}e&&j&&$n.alternate===null&&t(y,j),h=i($n,h,Q),le===null?D=$n:le.sibling=$n,le=$n,j=qe}if(se.done)return n(y,j),ee&&pn(y,Q),D;if(j===null){for(;!se.done;Q++,se=x.next())se=E(y,se.value,C),se!==null&&(h=i(se,h,Q),le===null?D=se:le.sibling=se,le=se);return ee&&pn(y,Q),D}for(j=a(j);!se.done;Q++,se=x.next())se=T(j,y,Q,se.value,C),se!==null&&(e&&(qe=se.alternate,qe!==null&&j.delete(qe.key===null?Q:qe.key)),h=i(se,h,Q),le===null?D=se:le.sibling=se,le=se);return e&&j.forEach(function(fv){return t(y,fv)}),ee&&pn(y,Q),D}function I(y,h,x,C){if(typeof x=="object"&&x!==null&&x.type===at&&x.key===null&&x.props.ref===void 0&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case ct:e:{for(var D=x.key;h!==null;){if(h.key===D){if(D=x.type,D===at){if(h.tag===7){n(y,h.sibling),C=o(h,x.props.children),Mn(C,x),C.return=y,y=C;break e}}else if(h.elementType===D||typeof D=="object"&&D!==null&&D.$$typeof===ce&&ga(D)===h.type){n(y,h.sibling),C=o(h,x.props),Mn(C,x),C.return=y,y=C;break e}n(y,h);break}else t(y,h);h=h.sibling}x.type===at?(C=ua(x.props.children,y.mode,C,x.key),Mn(C,x),C.return=y,y=C):(C=Qi(x.type,x.key,x.props,null,y.mode,C),Mn(C,x),C.return=y,y=C)}return l(y);case nt:e:{for(D=x.key;h!==null;){if(h.key===D)if(h.tag===4&&h.stateNode.containerInfo===x.containerInfo&&h.stateNode.implementation===x.implementation){n(y,h.sibling),C=o(h,x.children||[]),C.return=y,y=C;break e}else{n(y,h);break}else t(y,h);h=h.sibling}C=Br(x,y.mode,C),C.return=y,y=C}return l(y);case ce:return x=ga(x),I(y,h,x,C)}if(me(x))return U(y,h,x,C);if(G(x)){if(D=G(x),typeof D!="function")throw Error(u(150));return x=D.call(x),H(y,h,x,C)}if(typeof x.then=="function")return I(y,h,el(x),C);if(x.$$typeof===Ue)return I(y,h,Wi(y,x),C);tl(y,x)}return typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint"?(x=""+x,h!==null&&h.tag===6?(n(y,h.sibling),C=o(h,x),C.return=y,y=C):(n(y,h),C=Lr(x,y.mode,C),C.return=y,y=C),l(y)):n(y,h)}return function(y,h,x,C){try{Go=0;var D=I(y,h,x,C);return Za=null,D}catch(j){if(j===Pa||j===Fi)throw j;var le=ft(29,j,null,y.mode);return le.lanes=C,le.return=y,le}finally{}}}var va=bd(!0),wd=bd(!1),Dn=!1;function Kr(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ir(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Hn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ln(e,t,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(pe&2)!==0){var o=a.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),a.pending=t,t=Vi(e),ad(e,null,n),t}return Yi(e,a,t,n),Vi(e)}function Yo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,rc(e,n)}}function Wr(e,t){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};i===null?o=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:a.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:a.shared,callbacks:a.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Jr=!1;function Vo(){if(Jr){var e=Xa;if(e!==null)throw e}}function Qo(e,t,n,a){Jr=!1;var o=e.updateQueue;Dn=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var d=s,v=d.next;d.next=null,l===null?i=v:l.next=v,l=d;var S=e.alternate;S!==null&&(S=S.updateQueue,s=S.lastBaseUpdate,s!==l&&(s===null?S.firstBaseUpdate=v:s.next=v,S.lastBaseUpdate=d))}if(i!==null){var E=o.baseState;l=0,S=v=d=null,s=i;do{var p=s.lane&-536870913,T=p!==s.lane;if(T?(ie&p)===p:(a&p)===p){p!==0&&p===ma&&(Jr=!0),S!==null&&(S=S.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});e:{var U=e,H=s;p=t;var I=n;switch(H.tag){case 1:if(U=H.payload,typeof U=="function"){E=U.call(I,E,p);break e}E=U;break e;case 3:U.flags=U.flags&-65537|128;case 0:if(U=H.payload,p=typeof U=="function"?U.call(I,E,p):U,p==null)break e;E=$({},E,p);break e;case 2:Dn=!0}}p=s.callback,p!==null&&(e.flags|=64,T&&(e.flags|=8192),T=o.callbacks,T===null?o.callbacks=[p]:T.push(p))}else T={lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},S===null?(v=S=T,d=E):S=S.next=T,l|=p;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;T=s,s=T.next,T.next=null,o.lastBaseUpdate=T,o.shared.pending=null}}while(!0);S===null&&(d=E),o.baseState=d,o.firstBaseUpdate=v,o.lastBaseUpdate=S,i===null&&(o.shared.lanes=0),Qn|=l,e.lanes=l,e.memoizedState=E}}function xd(e,t){if(typeof e!="function")throw Error(u(191,e));e.call(t)}function Td(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)xd(n[e],t)}var Bn=Zt(null),nl=Zt(0);function Sd(e,t){e=Tn,ke(nl,e),ke(Bn,t),Tn=e|t.baseLanes}function Fr(){ke(nl,Tn),ke(Bn,Bn.current)}function $r(){Tn=nl.current,Ze(Bn),Ze(nl)}var We=Zt(null),ot=null;function jn(e){var t=e.alternate;ke(Je,Je.current&1),ke(We,e),ot===null&&(t===null||Bn.current!==null||t.memoizedState!==null)&&(ot=e)}function es(e){ke(Je,Je.current),ke(We,e),ot===null&&(ot=e)}function kd(e){e.tag===22?(ke(Je,Je.current),ke(We,e),ot===null&&(ot=e)):qn()}function qn(){ke(Je,Je.current),ke(We,We.current)}function St(e){Ze(We),ot===e&&(ot=null),Ze(Je)}var Je=Zt(0);function Xo(e,t){ke(We,We.current),ke(Je,t)}function ts(e){Ze(Je),Ze(We),ot===e&&(ot=null)}function al(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Su(n)||ku(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!=="independent"){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var vn=0,K=null,xe=null,Be=null,ol=!1,Ka=!1,ba=!1,il=0,Po=0,Ia=null,Ug=0;function Re(){throw Error(u(321))}function ns(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Tt(e[n],t[n]))return!1;return!0}function as(e,t,n,a,o,i){return vn=i,K=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,L.H=e===null||e.memoizedState===null?sf:uf,ba=!1,i=n(a,o),ba=!1,Ka&&(i=Ed(t,n,a,o)),Cd(e),i}function Cd(e){L.H=fl;var t=xe!==null&&xe.next!==null;if(vn=0,Be=xe=K=null,ol=!1,Po=0,Ia=null,t)throw Error(u(300));e===null||je||(e=e.dependencies,e!==null&&Ii(e)&&(je=!0))}function Ed(e,t,n,a){K=e;var o=0;do{if(Ka&&(Ia=null),Po=0,Ka=!1,25<=o)throw Error(u(301));if(o+=1,Be=xe=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}L.H=Gg,i=t(n,a)}while(Ka);return i}function Mg(){var e=L.H,t=e.useState()[0];return t=typeof t.then=="function"?Zo(t):t,e=e.useState()[0],(xe!==null?xe.memoizedState:null)!==e&&(K.flags|=1024),t}function os(){var e=il!==0;return il=0,e}function is(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function ls(e){if(ol){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}ol=!1}vn=0,Be=xe=K=null,Ka=!1,Po=il=0,Ia=null}function rt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Be===null?K.memoizedState=Be=e:Be=Be.next=e,Be}function De(){if(xe===null){var e=K.alternate;e=e!==null?e.memoizedState:null}else e=xe.next;var t=Be===null?K.memoizedState:Be.next;if(t!==null)Be=t,xe=e;else{if(e===null)throw K.alternate===null?Error(u(467)):Error(u(310));xe=e,e={memoizedState:xe.memoizedState,baseState:xe.baseState,baseQueue:xe.baseQueue,queue:xe.queue,next:null},Be===null?K.memoizedState=Be=e:Be=Be.next=e}return Be}function ll(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Zo(e){var t=Po;return Po+=1,Ia===null&&(Ia=[]),e=gd(Ia,e,t),t=K,(Be===null?t.memoizedState:Be.next)===null&&(t=t.alternate,L.H=t===null||t.memoizedState===null?sf:uf),e}function rl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Zo(e);if(e.$$typeof===_)return;if(e.$$typeof===Ue)return Ie(e)}throw Error(u(438,String(e)))}function rs(e){var t=null,n=K.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var a=K.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(o){return o.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=ll(),K.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),a=0;a<e;a++)n[a]=na;return t.index++,n}function bn(e,t){return typeof t=="function"?t(e):t}function sl(e){var t=De();return ss(t,xe,e)}function ss(e,t,n){var a=e.queue;if(a===null)throw Error(u(311));a.lastRenderedReducer=n;var o=e.baseQueue,i=a.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}t.baseQueue=o=i,a.pending=null}if(i=e.baseState,o===null)e.memoizedState=i;else{t=o.next;var s=l=null,d=null,v=t,S=!1;do{var E=v.lane&-536870913;if(E!==v.lane?(ie&E)===E:(vn&E)===E){var p=v.revertLane;if(p===0)d!==null&&(d=d.next={lane:0,revertLane:0,gesture:null,action:v.action,hasEagerState:v.hasEagerState,eagerState:v.eagerState,next:null}),E===ma&&(S=!0);else if((vn&p)===p){v=v.next,p===ma&&(S=!0);continue}else E={lane:0,revertLane:v.revertLane,gesture:null,action:v.action,hasEagerState:v.hasEagerState,eagerState:v.eagerState,next:null},d===null?(s=d=E,l=i):d=d.next=E,K.lanes|=p,Qn|=p;E=v.action,ba&&n(i,E),i=v.hasEagerState?v.eagerState:n(i,E)}else p={lane:E,revertLane:v.revertLane,gesture:v.gesture,action:v.action,hasEagerState:v.hasEagerState,eagerState:v.eagerState,next:null},d===null?(s=d=p,l=i):d=d.next=p,K.lanes|=E,Qn|=E;v=v.next}while(v!==null&&v!==t);if(d===null?l=i:d.next=s,!Tt(i,e.memoizedState)&&(je=!0,S&&(n=Xa,n!==null)))throw n;e.memoizedState=i,e.baseState=l,e.baseQueue=d,a.lastRenderedState=i}return o===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function us(e){var t=De(),n=t.queue;if(n===null)throw Error(u(311));n.lastRenderedReducer=e;var a=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);Tt(i,t.memoizedState)||(je=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,a]}function zd(e,t,n){var a=K,o=De(),i=ee;if(i){if(n===void 0)throw Error(u(407));n=n()}else n=t();var l=!Tt((xe||o).memoizedState,n);if(l&&(o.memoizedState=n,je=!0),o=o.queue,fs(_d.bind(null,a,o,e),[e]),e=o.getSnapshot!==t||l||Be!==null&&(Be.memoizedState.tag&1)!==0,Wa(e?9:8,{destroy:void 0},Od.bind(null,a,o,n,t),null),e){if(a.flags|=2048,Te===null)throw Error(u(349));i||(vn&127)!==0||Ad(a,t,n)}return n}function Ad(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=K.updateQueue,t===null?(t=ll(),K.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Od(e,t,n,a){t.value=n,t.getSnapshot=a,Rd(t)&&Nd(e)}function _d(e,t,n){return n(function(){Rd(t)&&Nd(e)})}function Rd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Tt(e,n)}catch{return!0}}function Nd(e){var t=sa(e,2);t!==null&&gt(t,e,2)}function cs(e){var t=rt();if(typeof e=="function"){var n=e;if(e=n(),ba){zn(!0);try{n()}finally{zn(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:bn,lastRenderedState:e},t}function Ud(e,t,n,a){return e.baseState=n,ss(e,xe,typeof a=="function"?a:bn)}function Dg(e,t,n,a,o){if(dl(e))throw Error(u(485));if(e=t.action,e!==null){var i={payload:o,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(l){i.listeners.push(l)}};L.T!==null?n(!0):i.isTransition=!1,a(i),n=t.pending,n===null?(i.next=t.pending=i,Md(t,i)):(i.next=n.next,t.pending=n.next=i)}}function Md(e,t){var n=t.action,a=t.payload,o=e.state;if(t.isTransition){var i=L.T,l={};l.types=i!==null?i.types:null,L.T=l;try{var s=n(o,a),d=L.S;d!==null&&d(l,s),Dd(e,t,s)}catch(v){ds(e,t,v)}finally{i!==null&&l.types!==null&&(i.types=l.types),L.T=i}}else try{i=n(o,a),Dd(e,t,i)}catch(v){ds(e,t,v)}}function Dd(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(a){Hd(e,t,a)},function(a){return ds(e,t,a)}):Hd(e,t,n)}function Hd(e,t,n){t.status="fulfilled",t.value=n,Ld(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Md(e,n)))}function ds(e,t,n){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=n,Ld(t),t=t.next;while(t!==a)}e.action=null}function Ld(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Bd(e,t){return t}function jd(e,t){if(ee){var n=Te.formState;if(n!==null){e:{var a=K;if(ee){if(Ce){t:{for(var o=Ce,i=Dt;o.nodeType!==8;){if(!i){o=null;break t}if(o=Lt(o.nextSibling),o===null){o=null;break t}}i=o.data,o=i==="F!"||i==="F"?o:null}if(o){Ce=Lt(o.nextSibling),a=o.data==="F!";break e}}Nn(a)}a=!1}a&&(t=n[0])}}return n=rt(),n.memoizedState=n.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bd,lastRenderedState:t},n.queue=a,n=of.bind(null,K,a),a.dispatch=n,a=cs(!1),i=ys.bind(null,K,!1,a.queue),a=rt(),o={state:t,dispatch:null,action:e,pending:null},a.queue=o,n=Dg.bind(null,K,o,i,n),o.dispatch=n,a.memoizedState=e,[t,n,!1]}function qd(e){var t=De();return Gd(t,xe,e)}function Gd(e,t,n){if(t=ss(e,t,Bd)[0],e=sl(bn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=Zo(t)}catch(l){throw l===Pa?Fi:l}else a=t;t=De();var o=t.queue,i=o.dispatch;return n!==t.memoizedState&&(K.flags|=2048,Wa(9,{destroy:void 0},Hg.bind(null,o,n),null)),[a,i,e]}function Hg(e,t){e.action=t}function Yd(e){var t=De(),n=xe;if(n!==null)return Gd(t,n,e);De(),t=t.memoizedState,n=De();var a=n.queue.dispatch;return n.memoizedState=e,[t,a,!1]}function Wa(e,t,n,a){return e={tag:e,create:n,deps:a,inst:t,next:null},t=K.updateQueue,t===null&&(t=ll(),K.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,t.lastEffect=e),e}function Vd(){return De().memoizedState}function ul(e,t,n,a){var o=rt();K.flags|=e,o.memoizedState=Wa(1|t,{destroy:void 0},n,a===void 0?null:a)}function cl(e,t,n,a){var o=De();a=a===void 0?null:a;var i=o.memoizedState.inst;xe!==null&&a!==null&&ns(a,xe.memoizedState.deps)?o.memoizedState=Wa(t,i,n,a):(K.flags|=e,o.memoizedState=Wa(1|t,i,n,a))}function Qd(e,t){ul(8390656,8,e,t)}function fs(e,t){cl(2048,8,e,t)}function Lg(e){K.flags|=4;var t=K.updateQueue;if(t===null)t=ll(),K.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Xd(e){var t=De().memoizedState;return Lg({ref:t,nextImpl:e}),function(){if((pe&2)!==0)throw Error(u(440));return t.impl.apply(void 0,arguments)}}function Pd(e,t){return cl(4,2,e,t)}function Zd(e,t){return cl(4,4,e,t)}function Kd(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Id(e,t,n){n=n!=null?n.concat([e]):null,cl(4,4,Kd.bind(null,t,e),n)}function hs(){}function Wd(e,t){var n=De();t=t===void 0?null:t;var a=n.memoizedState;return t!==null&&ns(t,a[1])?a[0]:(n.memoizedState=[e,t],e)}function Jd(e,t){var n=De();t=t===void 0?null:t;var a=n.memoizedState;if(t!==null&&ns(t,a[1]))return a[0];if(a=e(),ba){zn(!0);try{e()}finally{zn(!1)}}return n.memoizedState=[a,t],a}function ms(e,t,n){return n===void 0||(vn&1073741824)!==0&&(ie&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=sh(),K.lanes|=e,Qn|=e,n)}function Fd(e,t,n,a){return Tt(n,t)?n:Bn.current!==null?(e=ms(e,n,a),Tt(e,t)||(je=!0),e):(vn&106)===0||(vn&1073741824)!==0&&(ie&261930)===0?(je=!0,e.memoizedState=n):(e=sh(),K.lanes|=e,Qn|=e,t)}function $d(e,t,n,a,o){var i=P.p;P.p=i!==0&&8>i?i:8;var l=L.T,s={};s.types=l!==null?l.types:null,L.T=s,ys(e,!1,t,n);try{var d=o(),v=L.S;if(v!==null&&v(s,d),d!==null&&typeof d=="object"&&typeof d.then=="function"){var S=Ng(d,a);Ko(e,t,S,zt(e))}else Ko(e,t,a,zt(e))}catch(E){Ko(e,t,{then:function(){},status:"rejected",reason:E},zt())}finally{P.p=i,l!==null&&s.types!==null&&(l.types=s.types),L.T=l}}function Bg(){}function ps(e,t,n,a){if(e.tag!==5)throw Error(u(476));var o=ef(e).queue;$d(e,o,t,sn,n===null?Bg:function(){return tf(e),n(a)})}function ef(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:sn,baseState:sn,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:bn,lastRenderedState:sn},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:bn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function tf(e){var t=ef(e);t.next===null&&(t=e.alternate.memoizedState),Ko(e,t.next.queue,{},zt())}function gs(){return Ie(go)}function nf(){return De().memoizedState}function af(){return De().memoizedState}function jg(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=zt();e=Hn(n);var a=Ln(t,e,n);a!==null&&(gt(a,t,n),Yo(a,t,n)),t={cache:Qr()},e.payload=t;return}t=t.return}}function qg(e,t,n){var a=zt();n={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},dl(e)?lf(t,n):(n=Dr(e,t,n,a),n!==null&&(gt(n,e,a),rf(n,t,a)))}function of(e,t,n){var a=zt();Ko(e,t,n,a)}function Ko(e,t,n,a){var o={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(dl(e))lf(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,s=i(l,n);if(o.hasEagerState=!0,o.eagerState=s,Tt(s,l))return Yi(e,t,o,0),Te===null&&Gi(),!1}catch{}finally{}if(n=Dr(e,t,o,a),n!==null)return gt(n,e,a),rf(n,t,a),!0}return!1}function ys(e,t,n,a){if(a={lane:2,revertLane:ru(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},dl(e)){if(t)throw Error(u(479))}else t=Dr(e,n,a,2),t!==null&&gt(t,e,2)}function dl(e){var t=e.alternate;return e===K||t!==null&&t===K}function lf(e,t){Ka=ol=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function rf(e,t,n){if((n&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,rc(e,n)}}var fl={readContext:Ie,use:rl,useCallback:Re,useContext:Re,useEffect:Re,useImperativeHandle:Re,useLayoutEffect:Re,useInsertionEffect:Re,useMemo:Re,useReducer:Re,useRef:Re,useState:Re,useDebugValue:Re,useDeferredValue:Re,useTransition:Re,useSyncExternalStore:Re,useId:Re,useHostTransitionStatus:Re,useFormState:Re,useActionState:Re,useOptimistic:Re,useMemoCache:Re,useCacheRefresh:Re,useEffectEvent:Re},sf={readContext:Ie,use:rl,useCallback:function(e,t){return rt().memoizedState=[e,t===void 0?null:t],e},useContext:Ie,useEffect:Qd,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,ul(4194308,4,Kd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ul(4194308,4,e,t)},useInsertionEffect:function(e,t){ul(4,2,e,t)},useMemo:function(e,t){var n=rt();t=t===void 0?null:t;var a=e();if(ba){zn(!0);try{e()}finally{zn(!1)}}return n.memoizedState=[a,t],a},useReducer:function(e,t,n){var a=rt();if(n!==void 0){var o=n(t);if(ba){zn(!0);try{n(t)}finally{zn(!1)}}}else o=t;return a.memoizedState=a.baseState=o,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:o},a.queue=e,e=e.dispatch=qg.bind(null,K,e),[a.memoizedState,e]},useRef:function(e){var t=rt();return e={current:e},t.memoizedState=e},useState:function(e){e=cs(e);var t=e.queue,n=of.bind(null,K,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:hs,useDeferredValue:function(e,t){var n=rt();return ms(n,e,t)},useTransition:function(){var e=cs(!1);return e=$d.bind(null,K,e.queue,!0,!1),rt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var a=K,o=rt();if(ee){if(n===void 0)throw Error(u(407));n=n()}else{if(n=t(),Te===null)throw Error(u(349));(ie&127)!==0||Ad(a,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,Qd(_d.bind(null,a,i,e),[e]),a.flags|=2048,Wa(9,{destroy:void 0},Od.bind(null,a,i,n,t),null),n},useId:function(){var e=rt(),t=Te.identifierPrefix;if(ee){var n=Jt,a=Wt;n=(a&~(1<<32-wt(a)-1)).toString(32)+n,t="_"+t+"R_"+n,n=il++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=Ug++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:gs,useFormState:jd,useActionState:jd,useOptimistic:function(e){var t=rt();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=ys.bind(null,K,!0,n),n.dispatch=t,[e,t]},useMemoCache:rs,useCacheRefresh:function(){return rt().memoizedState=jg.bind(null,K)},useEffectEvent:function(e){var t=rt(),n={impl:e};return t.memoizedState=n,function(){if((pe&2)!==0)throw Error(u(440));return n.impl.apply(void 0,arguments)}}},uf={readContext:Ie,use:rl,useCallback:Wd,useContext:Ie,useEffect:fs,useImperativeHandle:Id,useInsertionEffect:Pd,useLayoutEffect:Zd,useMemo:Jd,useReducer:sl,useRef:Vd,useState:function(){return sl(bn)},useDebugValue:hs,useDeferredValue:function(e,t){var n=De();return Fd(n,xe.memoizedState,e,t)},useTransition:function(){var e=sl(bn)[0],t=De().memoizedState;return[typeof e=="boolean"?e:Zo(e),t]},useSyncExternalStore:zd,useId:nf,useHostTransitionStatus:gs,useFormState:qd,useActionState:qd,useOptimistic:function(e,t){var n=De();return Ud(n,xe,e,t)},useMemoCache:rs,useCacheRefresh:af,useEffectEvent:Xd},Gg={readContext:Ie,use:rl,useCallback:Wd,useContext:Ie,useEffect:fs,useImperativeHandle:Id,useInsertionEffect:Pd,useLayoutEffect:Zd,useMemo:Jd,useReducer:us,useRef:Vd,useState:function(){return us(bn)},useDebugValue:hs,useDeferredValue:function(e,t){var n=De();return xe===null?ms(n,e,t):Fd(n,xe.memoizedState,e,t)},useTransition:function(){var e=us(bn)[0],t=De().memoizedState;return[typeof e=="boolean"?e:Zo(e),t]},useSyncExternalStore:zd,useId:nf,useHostTransitionStatus:gs,useFormState:Yd,useActionState:Yd,useOptimistic:function(e,t){var n=De();return xe!==null?Ud(n,xe,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:rs,useCacheRefresh:af,useEffectEvent:Xd};function vs(e,t,n,a){t=e.memoizedState,n=n(a,t),n=n==null?t:$({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var bs={enqueueSetState:function(e,t,n){e=e._reactInternals;var a=zt(),o=Hn(a);o.payload=t,n!=null&&(o.callback=n),t=Ln(e,o,a),t!==null&&(gt(t,e,a),Yo(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var a=zt(),o=Hn(a);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Ln(e,o,a),t!==null&&(gt(t,e,a),Yo(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=zt(),a=Hn(n);a.tag=2,t!=null&&(a.callback=t),t=Ln(e,a,n),t!==null&&(gt(t,e,n),Yo(t,e,n))}};function cf(e,t,n,a,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,i,l):t.prototype&&t.prototype.isPureReactComponent?!Mo(n,a)||!Mo(o,i):!0}function df(e,t,n,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==e&&bs.enqueueReplaceState(t,t.state,null)}function wa(e,t){var n=t;if("ref"in t){n={};for(var a in t)a!=="ref"&&(n[a]=t[a])}if(e=e.defaultProps){n===t&&(n=$({},n));for(var o in e)n[o]===void 0&&(n[o]=e[o])}return n}function ff(e){qi(e)}function hf(e){console.error(e)}function mf(e){qi(e)}function hl(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function pf(e,t,n){try{var a=e.onCaughtError;a(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(o){setTimeout(function(){throw o})}}function ws(e,t,n){return n=Hn(n),n.tag=3,n.payload={element:null},n.callback=function(){hl(e,t)},n}function gf(e){return e=Hn(e),e.tag=3,e}function yf(e,t,n,a){var o=n.type.getDerivedStateFromError;if(typeof o=="function"){var i=a.value;e.payload=function(){return o(i)},e.callback=function(){pf(t,n,a)}}var l=n.stateNode;l!==null&&typeof l.componentDidCatch=="function"&&(e.callback=function(){pf(t,n,a),typeof o!="function"&&(Xn===null?Xn=new Set([this]):Xn.add(this));var s=a.stack;this.componentDidCatch(a.value,{componentStack:s!==null?s:""})})}function Yg(e,t,n,a,o){if(n.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=n.alternate,t!==null&&fa(t,n,o,!0),n=We.current,n!==null){switch(n.tag){case 31:case 13:case 19:return ot===null?Ml():n.alternate===null&&Ne===0&&(Ne=3),n.flags&=-257,n.flags|=65536,n.lanes=o,a===$i?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([a]):t.add(a),ou(e,a,o)),!1;case 22:return n.flags|=65536,a===$i?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([a]):n.add(a)),ou(e,a,o)),!1}throw Error(u(435,n.tag))}return ou(e,a,o),Ml(),!1}if(ee)return t=We.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=o,a!==qr&&(e=Error(u(422),{cause:a}),Lo(Nt(e,n)))):(a!==qr&&(t=Error(u(423),{cause:a}),Lo(Nt(t,n))),e=e.current.alternate,e.flags|=65536,o&=-o,e.lanes|=o,a=Nt(a,n),o=ws(e.stateNode,a,o),Wr(e,o),Ne!==4&&(Ne=2)),!1;var i=Error(u(520),{cause:a});if(i=Nt(i,n),ni===null?ni=[i]:ni.push(i),Ne!==4&&(Ne=2),t===null)return!0;a=Nt(a,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=o&-o,n.lanes|=e,e=ws(n.stateNode,a,e),Wr(n,e),!1;case 1:if(t=n.type,i=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(Xn===null||!Xn.has(i))))return n.flags|=65536,o&=-o,n.lanes|=o,o=gf(o),yf(o,e,n,a),Wr(n,o),!1;break;case 22:if(n.memoizedState!==null)return n.flags|=65536,!1}n=n.return}while(n!==null);return!1}var xs=Error(u(461)),je=!1;function Ge(e,t,n,a){t.child=e===null?wd(t,null,n,a):va(t,e.child,n,a)}function vf(e,t,n,a,o){n=n.render;var i=t.ref;if("ref"in a){var l={};for(var s in a)s!=="ref"&&(l[s]=a[s])}else l=a;return ha(t),a=as(e,t,n,l,i,o),s=os(),e!==null&&!je?(is(e,t,o),wn(e,t,o)):(ee&&s&&Pi(t),t.flags|=1,Ge(e,t,a,o),t.child)}function bf(e,t,n,a,o){if(e===null){var i=n.type;return typeof i=="function"&&!Hr(i)&&i.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=i,wf(e,t,i,a,o)):(e=Qi(n.type,null,a,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!Os(e,o)){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:Mo,n(l,a)&&e.ref===t.ref)return wn(e,t,o)}return t.flags|=1,e=mn(i,a),e.ref=t.ref,e.return=t,t.child=e}function wf(e,t,n,a,o){if(e!==null){var i=e.memoizedProps;if(Mo(i,a)&&e.ref===t.ref)if(je=!1,t.pendingProps=a=i,Os(e,o))(e.flags&131072)!==0&&(je=!0);else return t.lanes=e.lanes,wn(e,t,o)}return Ts(e,t,n,a,o)}function xf(e,t,n,a){var o=a.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|n:n,e!==null){for(a=t.child=e.child,o=0;a!==null;)o=o|a.lanes|a.childLanes,a=a.sibling;a=o&~i}else a=0,t.child=null;return Tf(e,t,i,n,a)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ji(t,i!==null?i.cachePool:null),i!==null?Sd(t,i):Fr(),kd(t);else return a=t.lanes=536870912,Tf(e,t,i!==null?i.baseLanes|n:n,n,a)}else i!==null?(Ji(t,i.cachePool),Sd(t,i),qn(),t.memoizedState=null):(e!==null&&Ji(t,null),Fr(),qn());return Ge(e,t,o,n),t.child}function Io(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Tf(e,t,n,a,o){var i=Pr();return i=i===null?null:{parent:Le._currentValue,pool:i},t.memoizedState={baseLanes:n,cachePool:i},e!==null&&Ji(t,null),Fr(),kd(t),e!==null&&fa(e,t,a,!0),t.childLanes=o,null}function ml(e,t){return t=pl({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Sf(e,t,n){return va(t,e.child,null,n),e=ml(t,t.pendingProps),e.flags|=2,St(t),t.memoizedState=null,e}function Vg(e,t,n){var a=t.pendingProps,o=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(ee){if(a.mode==="hidden")return e=ml(t,a),t.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},Io(null,e);if(es(t),(e=Ce)?(e=Ih(e,Dt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:_n!==null?{id:Wt,overflow:Jt}:null,retryLane:536870912,hydrationErrors:null},n=id(e),n.return=t,t.child=n,Qe=t,Ce=null)):e=null,e===null)throw Nn(t);return t.lanes=536870912,null}return ml(t,a)}var i=e.memoizedState;if(i!==null){var l=i.dehydrated;if(es(t),o)if(t.flags&256)t.flags&=-257,t=Sf(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(u(558));else if(je||fa(e,t,n,!1),o=(n&e.childLanes)!==0,je||o){if(Bn.current===null){if(a=Te,a!==null&&(l=sc(a,n),l!==0&&l!==i.retryLane))throw i.retryLane=l,sa(e,l),gt(a,e,l),xs;Ml()}t=Sf(e,t,n)}else e=i.treeContext,Ce=Lt(l.nextSibling),Qe=t,ee=!0,Rn=null,Dt=!1,e!==null&&sd(t,e),t=ml(t,a),t.flags|=134221824;return t}return e=mn(e.child,{mode:a.mode,children:a.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Ja(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(u(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Ts(e,t,n,a,o){return ha(t),n=as(e,t,n,a,void 0,o),a=os(),e!==null&&!je?(is(e,t,o),wn(e,t,o)):(ee&&a&&Pi(t),t.flags|=1,Ge(e,t,n,o),t.child)}function kf(e,t,n,a,o,i){return ha(t),t.updateQueue=null,n=Ed(t,a,n,o),Cd(e),a=os(),e!==null&&!je?(is(e,t,i),wn(e,t,i)):(ee&&a&&Pi(t),t.flags|=1,Ge(e,t,n,i),t.child)}function Cf(e,t,n,a,o){if(ha(t),t.stateNode===null){var i=Ga,l=n.contextType;typeof l=="object"&&l!==null&&(i=Ie(l)),i=new n(a,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=bs,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=a,i.state=t.memoizedState,i.refs={},Kr(t),l=n.contextType,i.context=typeof l=="object"&&l!==null?Ie(l):Ga,i.state=t.memoizedState,l=n.getDerivedStateFromProps,typeof l=="function"&&(vs(t,n,l,a),i.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(l=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),l!==i.state&&bs.enqueueReplaceState(i,i.state,null),Qo(t,a,i,o),Vo(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){i=t.stateNode;var s=t.memoizedProps,d=wa(n,s);i.props=d;var v=i.context,S=n.contextType;l=Ga,typeof S=="object"&&S!==null&&(l=Ie(S));var E=n.getDerivedStateFromProps;S=typeof E=="function"||typeof i.getSnapshotBeforeUpdate=="function",s=t.pendingProps!==s,S||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s||v!==l)&&df(t,i,a,l),Dn=!1;var p=t.memoizedState;i.state=p,Qo(t,a,i,o),Vo(),v=t.memoizedState,s||p!==v||Dn?(typeof E=="function"&&(vs(t,n,E,a),v=t.memoizedState),(d=Dn||cf(t,n,d,a,p,v,l))?(S||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=v),i.props=a,i.state=v,i.context=l,a=d):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{i=t.stateNode,Ir(e,t),l=t.memoizedProps,S=wa(n,l),i.props=S,E=t.pendingProps,p=i.context,v=n.contextType,d=Ga,typeof v=="object"&&v!==null&&(d=Ie(v)),s=n.getDerivedStateFromProps,(v=typeof s=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(l!==E||p!==d)&&df(t,i,a,d),Dn=!1,p=t.memoizedState,i.state=p,Qo(t,a,i,o),Vo();var T=t.memoizedState;l!==E||p!==T||Dn||e!==null&&e.dependencies!==null&&Ii(e.dependencies)?(typeof s=="function"&&(vs(t,n,s,a),T=t.memoizedState),(S=Dn||cf(t,n,S,a,p,T,d)||e!==null&&e.dependencies!==null&&Ii(e.dependencies))?(v||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(a,T,d),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(a,T,d)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=T),i.props=a,i.state=T,i.context=d,a=S):(typeof i.componentDidUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),a=!1)}return i=a,Ja(e,t),a=(t.flags&128)!==0,i||a?(i=t.stateNode,n=a&&typeof n.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&a?(t.child=va(t,e.child,null,o),t.child=va(t,null,n,o)):Ge(e,t,n,o),t.memoizedState=i.state,e=t.child):e=wn(e,t,o),e}function Ef(e,t,n,a){return ca(),t.flags|=256,Ge(e,t,n,a),t.child}var Ss={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ks(e){return{baseLanes:e,cachePool:md()}}function Cs(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Et),e}function zf(e,t,n){var a=t.pendingProps,o=!1,i=(t.flags&128)!==0,l;if((l=i)||(l=e!==null&&e.memoizedState===null?!1:(Je.current&2)!==0),l&&(o=!0,t.flags&=-129),l=(t.flags&32)!==0,t.flags&=-33,e===null){if(ee){if(o?jn(t):qn(),(e=Ce)?(e=Ih(e,Dt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:_n!==null?{id:Wt,overflow:Jt}:null,retryLane:536870912,hydrationErrors:null},n=id(e),n.return=t,t.child=n,Qe=t,Ce=null)):e=null,e===null)throw Nn(t);return ku(e)?t.lanes=32:t.lanes=536870912,null}return i=a.children,a=a.fallback,o?(qn(),o=t.mode,i=pl({mode:"hidden",children:i},o),a=ua(a,o,n,null),i.return=t,a.return=t,i.sibling=a,t.child=i,a=t.child,a.memoizedState=ks(n),a.childLanes=Cs(e,l,n),t.memoizedState=Ss,Io(null,a)):(jn(t),Es(t,i))}var s=e.memoizedState;if(s!==null){var d=s.dehydrated;if(d!==null)return Qg(e,t,i,l,a,d,s,n)}return o?(qn(),o=a.fallback,i=t.mode,s=e.child,d=s.sibling,a=mn(s,{mode:"hidden",children:a.children}),a.subtreeFlags=s.subtreeFlags&1206910976,d!==null?o=mn(d,o):(o=ua(o,i,n,null),o.flags|=2),o.return=t,a.return=t,a.sibling=o,t.child=a,Io(null,a),a=t.child,o=e.child.memoizedState,o===null?o=ks(n):(i=o.cachePool,i!==null?(s=Le._currentValue,i=i.parent!==s?{parent:s,pool:s}:i):i=md(),o={baseLanes:o.baseLanes|n,cachePool:i}),a.memoizedState=o,a.childLanes=Cs(e,l,n),t.memoizedState=Ss,Io(e.child,a)):(jn(t),n=e.child,e=n.sibling,n=mn(n,{mode:"visible",children:a.children}),n.return=t,n.sibling=null,e!==null&&(l=t.deletions,l===null?(t.deletions=[e],t.flags|=16):l.push(e)),t.child=n,t.memoizedState=null,n)}function Es(e,t){return t=pl({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function pl(e,t){return e=ft(22,e,null,t),e.lanes=0,e}function gl(e,t,n){return va(t,e.child,null,n),e=Es(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Qg(e,t,n,a,o,i,l,s){if(n)return t.flags&256?(jn(t),t.flags&=-257,gl(e,t,s)):t.memoizedState!==null?(qn(),t.child=e.child,t.flags|=128,null):(qn(),i=o.fallback,l=t.mode,o=pl({mode:"visible",children:o.children},l),i=ua(i,l,s,null),i.flags|=2,o.return=t,i.return=t,o.sibling=i,t.child=o,va(t,e.child,null,s),o=t.child,o.memoizedState=ks(s),o.childLanes=Cs(e,a,s),t.memoizedState=Ss,Io(null,o));if(jn(t),ku(i)){if(a=i.nextSibling&&i.nextSibling.dataset,a)var d=a.dgst;return a=d,a!==""&&(o=Error(u(419)),o.stack="",o.digest=a,Lo({value:o,source:null,stack:null})),gl(e,t,s)}if(je||fa(e,t,s,!1),a=(s&e.childLanes)!==0,je||a){if(Bn.current!==null)return gl(e,t,s);if(a=Te,a!==null&&(o=sc(a,s),o!==0&&o!==l.retryLane))throw l.retryLane=o,sa(e,o),gt(a,e,o),xs;return Su(i)||Ml(),gl(e,t,s)}return Su(i)?(t.flags|=192,t.child=e.child,null):(e=l.treeContext,Ce=Lt(i.nextSibling),Qe=t,ee=!0,Rn=null,Dt=!1,e!==null&&sd(t,e),t=Es(t,o.children),t.flags|=134221824,t)}function Af(e,t,n){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),Ki(e.return,t,n)}function Of(e){for(var t=null;e!==null;){var n=e.alternate;n!==null&&al(n)===null&&(t=e),e=e.sibling}return t}function yl(e,t,n,a,o,i){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:o,treeForkCount:i}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=a,l.tail=n,l.tailMode=o,l.treeForkCount=i)}function zs(e){var t=e.child;for(e.child=null;t!==null;){var n=t.sibling;t.sibling=e.child,e.child=t,t=n}}function As(e,t,n){var a=t.pendingProps,o=a.revealOrder,i=a.tail;a=a.children;var l=Je.current;if(t.flags&128)return Xo(t,l),null;var s=(l&2)!==0;if(s?(l=l&1|2,t.flags|=128):l&=1,Xo(t,l),o==="backwards"&&e!==null?(zs(e),Ge(e,t,a,n),zs(e)):Ge(e,t,a,n),a=ee?Ho:0,!s&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Af(e,n,t);else if(e.tag===19)Af(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(o){case"backwards":n=Of(t.child),n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null,zs(t)),yl(t,!0,o,null,i,a);break;case"unstable_legacy-backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&al(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}yl(t,!0,n,null,i,a);break;case"together":yl(t,!1,null,null,void 0,a);break;case"independent":t.memoizedState=null;break;default:n=Of(t.child),n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),yl(t,!1,o,n,i,a)}return t.child}function _f(e,t,n){var a=t.pendingProps;return Un(t,t.type,a.value),Ge(e,t,a.children,n),t.child}function wn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Qn|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(fa(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(u(153));if(t.child!==null){for(e=t.child,n=mn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=mn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Os(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Ii(e)))}function Xg(e,t,n){switch(t.tag){case 3:Ti(t,t.stateNode.containerInfo),Un(t,Le,e.memoizedState.cache),ca();break;case 27:case 5:nr(t);break;case 4:Ti(t,t.stateNode.containerInfo);break;case 10:Un(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,es(t),null;break;case 13:var a=t.memoizedState;if(a!==null){if(a.dehydrated!==null)return jn(t),t.flags|=128,null;a=fa(e,t,n,!1);var o=t.child.childLanes;return a||(n&o)!==0?zf(e,t,n):(jn(t),e=wn(e,t,n),e!==null?e.sibling:null)}jn(t);break;case 19:if(t.flags&128)return As(e,t,n);if(o=(e.flags&128)!==0,a=(n&t.childLanes)!==0,a||(fa(e,t,n,!1),a=(n&t.childLanes)!==0),o){if(a)return As(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),Xo(t,Je.current),a)break;return null;case 22:return t.lanes=0,xf(e,t,n,t.pendingProps);case 24:Un(t,Le,e.memoizedState.cache)}return wn(e,t,n)}function Rf(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)je=!0;else{if(!Os(e,n)&&(t.flags&128)===0)return je=!1,Xg(e,t,n);je=(e.flags&131072)!==0}else je=!1,ee&&(t.flags&1048576)!==0&&rd(t,Ho,t.index);switch(t.lanes=0,t.tag){case 16:e:{var a=t.pendingProps;if(e=ga(t.elementType),t.type=e,typeof e=="function")Hr(e)?(a=wa(e,a),t.tag=1,t=Cf(null,t,e,a,n)):(t.tag=0,t=Ts(null,t,e,a,n));else{if(e!=null){var o=e.$$typeof;if(o===M){t.tag=11,t=vf(null,t,e,a,n);break e}else if(o===ue){t.tag=14,t=bf(null,t,e,a,n);break e}else if(o===Ue){t.tag=10,t.type=e,t=_f(null,t,n);break e}}throw t=fe(e)||e,Error(u(306,t,""))}}return t;case 0:return Ts(e,t,t.type,t.pendingProps,n);case 1:return a=t.type,o=wa(a,t.pendingProps),Cf(e,t,a,o,n);case 3:e:{if(Ti(t,t.stateNode.containerInfo),e===null)throw Error(u(387));a=t.pendingProps;var i=t.memoizedState;o=i.element,Ir(e,t),Qo(t,a,null,n);var l=t.memoizedState;if(a=l.cache,Un(t,Le,a),a!==i.cache&&Vr(t,[Le],n,!0),Vo(),a=l.element,i.isDehydrated)if(i={element:a,isDehydrated:!1,cache:l.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=Ef(e,t,a,n);break e}else if(a!==o){o=Nt(Error(u(424)),t),Lo(o),t=Ef(e,t,a,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ce=Lt(e.firstChild),Qe=t,ee=!0,Rn=null,Dt=!0,n=wd(t,null,a,n),t.child=n;n;)n.flags=n.flags&-3|134221824,n=n.sibling}else{if(ca(),a===o){t=wn(e,t,n);break e}Ge(e,t,a,n)}t=t.child}return t;case 26:return Ja(e,t),e===null?(n=nm(t.type,null,t.pendingProps,null))?t.memoizedState=n:ee||(t.stateNode=Dh(t.type,t.pendingProps,Cn.current,t)):t.memoizedState=nm(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return nr(t),e===null&&ee&&(a=t.stateNode=Fh(t.type,t.pendingProps,Cn.current),Qe=t,Dt=!0,o=Ce,Kn(t.type)?(Cu=o,Ce=Lt(a.firstChild)):Ce=o),Ge(e,t,t.pendingProps.children,n),Ja(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ee&&((o=a=Ce)&&(a=jy(a,t.type,t.pendingProps,Dt),a!==null?(t.stateNode=a,Qe=t,Ce=Lt(a.firstChild),Dt=!1,o=!0):o=!1),o||Nn(t)),nr(t),o=t.type,i=t.pendingProps,l=e!==null?e.memoizedProps:null,a=i.children,gu(o,i)?a=null:l!==null&&gu(o,l)&&(t.flags|=32),t.memoizedState!==null&&(o=as(e,t,Mg,null,null,n),go._currentValue=o),Ja(e,t),Ge(e,t,a,n),t.child;case 6:return e===null&&ee&&((e=n=Ce)&&(n=qy(n,t.pendingProps,Dt),n!==null?(t.stateNode=n,Qe=t,Ce=null,e=!0):e=!1),e||Nn(t)),null;case 13:return zf(e,t,n);case 4:return Ti(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=va(t,null,a,n):Ge(e,t,a,n),t.child;case 11:return vf(e,t,t.type,t.pendingProps,n);case 7:return a=t.pendingProps,Ja(e,t),Ge(e,t,a,n),t.child;case 8:return Ge(e,t,t.pendingProps.children,n),t.child;case 12:return Ge(e,t,t.pendingProps.children,n),t.child;case 10:return _f(e,t,n);case 9:return o=t.type._context,a=t.pendingProps.children,ha(t),o=Ie(o),a=a(o),t.flags|=1,Ge(e,t,a,n),t.child;case 14:return bf(e,t,t.type,t.pendingProps,n);case 15:return wf(e,t,t.type,t.pendingProps,n);case 19:return As(e,t,n);case 31:return Vg(e,t,n);case 22:return xf(e,t,n,t.pendingProps);case 24:return ha(t),a=Ie(Le),e===null?(o=Pr(),o===null&&(o=Te,i=Qr(),o.pooledCache=i,i.refCount++,i!==null&&(o.pooledCacheLanes|=n),o=i),t.memoizedState={parent:a,cache:o},Kr(t),Un(t,Le,o)):((e.lanes&n)!==0&&(Ir(e,t),Qo(t,null,null,n),Vo()),o=e.memoizedState,i=t.memoizedState,o.parent!==a?(o={parent:a,cache:a},t.memoizedState=o,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=o),Un(t,Le,a)):(a=i.cache,Un(t,Le,a),a!==o.cache&&Vr(t,[Le],n,!0))),Ge(e,t,t.pendingProps.children,n),t.child;case 30:return t.stateNode===null&&(t.stateNode={autoName:null,paired:null,clones:null,ref:null}),a=t.pendingProps,a.name!=null&&a.name!=="auto"?t.flags|=e===null?18882560:18874368:ee&&Pi(t),e!==null&&e.memoizedProps.name!==a.name?t.flags|=4194816:Ja(e,t),Ge(e,t,a.children,n),t.child;case 29:throw t.pendingProps}throw Error(u(156,t.tag))}function xn(e){e.flags|=4}function _s(e,t,n,a,o){var i;if((i=(e.mode&32)!==0)&&(i=n===null?lm(t,a):lm(t,a)&&(a.src!==n.src||a.srcSet!==n.srcSet)),i){if(e.flags|=16777216,(o&335544128)===o)if(e.stateNode.complete)e.flags|=8192;else if(fh())e.flags|=8192;else throw ya=$i,Zr}else e.flags&=-16777217}function Nf(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!rm(t))if(fh())e.flags|=8192;else throw ya=$i,Zr}function vl(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?ic():536870912,e.lanes|=t,no|=t)}function Wo(e,t){if(!ee)switch(e.tailMode){case"visible":break;case"collapsed":for(var n=e.tail,a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null;break;default:for(t=e.tail,n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null}}function Ee(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,a|=o.subtreeFlags&1206910976,a|=o.flags&1206910976,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,a|=o.subtreeFlags,a|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=a,e.childLanes=n,t}function Pg(e,t,n){var a=t.pendingProps;switch(jr(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ee(t),null;case 1:return Ee(t),null;case 3:return n=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),yn(Le),Aa(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Qa(t)?xn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Gr())),Ee(t),null;case 26:var o=t.type,i=t.memoizedState;return e===null?(xn(t),i!==null?(Ee(t),Nf(t,i)):(Ee(t),_s(t,o,null,a,n))):i?i!==e.memoizedState?(xn(t),Ee(t),Nf(t,i)):(Ee(t),t.flags&=-16777217):(e=e.memoizedProps,e!==a&&xn(t),Ee(t),_s(t,o,e,a,n)),null;case 27:if(Si(t),n=Cn.current,o=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&xn(t);else{if(!a){if(t.stateNode===null)throw Error(u(166));return Ee(t),t.subtreeFlags&=-33554433,null}e=Kt.current,Qa(t)?ud(t):(e=Fh(o,a,n),t.stateNode=e,xn(t))}return Ee(t),t.subtreeFlags&=-33554433,null;case 5:if(Si(t),o=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&xn(t);else{if(!a){if(t.stateNode===null)throw Error(u(166));return Ee(t),t.subtreeFlags&=-33554433,null}if(i=Kt.current,Qa(t))ud(t);else{var l=ri(Cn.current);switch(i){case 1:i=l.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:i=l.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":i=l.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":i=l.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":i=l.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof a.is=="string"?l.createElement("select",{is:a.is}):l.createElement("select"),a.multiple?i.multiple=!0:a.size&&(i.size=a.size);break;default:i=typeof a.is=="string"?l.createElement(o,{is:a.is}):l.createElement(o)}}i[Ke]=t,i[dt]=a;e:for(l=t.child;l!==null;){if(l.tag===5||l.tag===6)i.appendChild(l.stateNode);else if(l.tag!==4&&l.tag!==27&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===t)break e;for(;l.sibling===null;){if(l.return===null||l.return===t)break e;l=l.return}l.sibling.return=l.return,l=l.sibling}t.stateNode=i;e:switch($e(i,o,a),o){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&xn(t)}}return Ee(t),t.subtreeFlags&=-33554433,_s(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&xn(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(u(166));if(e=Cn.current,Qa(t)){if(e=t.stateNode,n=t.memoizedProps,a=null,o=Qe,o!==null)switch(o.tag){case 27:case 5:a=o.memoizedProps}e[Ke]=t,e=!!(e.nodeValue===n||a!==null&&a.suppressHydrationWarning===!0||Rh(e.nodeValue,n)),e||Nn(t,!0)}else e=ri(e).createTextNode(a),e[Ke]=t,t.stateNode=e}return Ee(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(a=Qa(t),n!==null){if(e===null){if(!a)throw Error(u(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(557));e[Ke]=t}else ca(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ee(t),e=!1}else n=Gr(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(St(t),t):(St(t),null);if((t.flags&128)!==0)throw Error(u(558))}return Ee(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(o=Qa(t),a!==null&&a.dehydrated!==null){if(e===null){if(!o)throw Error(u(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(u(317));o[Ke]=t}else ca(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ee(t),o=!1}else o=Gr(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=o),o=!0;if(!o)return t.flags&256?(St(t),t):(St(t),null)}return St(t),(t.flags&128)!==0?(t.lanes=n,t):(n=a!==null,e=e!==null&&e.memoizedState!==null,n&&(a=t.child,o=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(o=a.alternate.memoizedState.cachePool.pool),i=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(i=a.memoizedState.cachePool.pool),i!==o&&(a.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),vl(t,t.updateQueue),Ee(t),null);case 4:return Aa(),e===null&&du(t.stateNode.containerInfo),t.flags|=67108864,Ee(t),null;case 10:return yn(t.type),Ee(t),null;case 19:if(ts(t),a=t.memoizedState,a===null)return Ee(t),null;if(o=(t.flags&128)!==0,i=a.rendering,i===null)if(o)Wo(a,!1);else{if(Ne!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=al(e),i!==null){for(t.flags|=128,Wo(a,!1),e=i.updateQueue,t.updateQueue=e,vl(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)od(n,e),n=n.sibling;return Xo(t,Je.current&1|2),ee&&pn(t,a.treeForkCount),t.child}e=e.sibling}a.tail!==null&&vt()>_l&&(t.flags|=128,o=!0,Wo(a,!1),t.lanes=4194304)}else{if(!o)if(e=al(i),e!==null){if(t.flags|=128,o=!0,e=e.updateQueue,t.updateQueue=e,vl(t,e),Wo(a,!0),a.tail===null&&a.tailMode!=="collapsed"&&a.tailMode!=="visible"&&!i.alternate&&!ee)return Ee(t),null}else 2*vt()-a.renderingStartTime>_l&&n!==536870912&&(t.flags|=128,o=!0,Wo(a,!1),t.lanes=4194304);a.isBackwards?(i.sibling=t.child,t.child=i):(e=a.last,e!==null?e.sibling=i:t.child=i,a.last=i)}if(a.tail!==null){e=a.tail;e:{for(n=e;n!==null;){if(n.alternate!==null){n=!1;break e}n=n.sibling}n=!0}return a.rendering=e,a.tail=e.sibling,a.renderingStartTime=vt(),e.sibling=null,i=Je.current,i=o?i&1|2:i&1,a.tailMode==="visible"||a.tailMode==="collapsed"||!n||ee?Xo(t,i):(n=i,ke(We,t),ke(Je,n),ot===null&&(ot=t)),ee&&pn(t,a.treeForkCount),e}return Ee(t),null;case 22:case 23:return St(t),$r(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(n&536870912)!==0&&(t.flags&128)===0&&(Ee(t),t.subtreeFlags&6&&(t.flags|=8192)):Ee(t),n=t.updateQueue,n!==null&&vl(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==n&&(t.flags|=2048),e!==null&&Ze(pa),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),yn(Le),Ee(t),null;case 25:return null;case 30:return t.flags|=33554432,Ee(t),null}throw Error(u(156,t.tag))}function Zg(e,t){switch(jr(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return yn(Le),Aa(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Si(t),null;case 31:if(t.memoizedState!==null){if(St(t),t.alternate===null)throw Error(u(340));ca()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(St(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(u(340));ca()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ts(t),e=t.flags,e&65536?(t.flags=e&-65537|128,e=t.memoizedState,e!==null&&(e.rendering=null,e.tail=null),t.flags|=4,t):null;case 4:return Aa(),null;case 10:return yn(t.type),null;case 22:case 23:return St(t),$r(),e!==null&&Ze(pa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return yn(Le),null;case 25:return null;default:return null}}function Uf(e,t){switch(jr(t),t.tag){case 3:yn(Le),Aa();break;case 26:case 27:case 5:Si(t);break;case 4:Aa();break;case 31:t.memoizedState!==null&&St(t);break;case 13:St(t);break;case 19:ts(t);break;case 10:yn(t.type);break;case 22:case 23:St(t),$r(),e!==null&&Ze(pa);break;case 24:yn(Le)}}function Jo(e,t){try{var n=t.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var o=a.next;n=o;do{if((n.tag&e)===e){a=void 0;var i=n.create,l=n.inst;a=i(),l.destroy=a}n=n.next}while(n!==o)}}catch(s){be(t,t.return,s)}}function Gn(e,t,n){try{var a=t.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var i=o.next;a=i;do{if((a.tag&e)===e){var l=a.inst,s=l.destroy;if(s!==void 0){l.destroy=void 0,o=t;var d=n,v=s;try{v()}catch(S){be(o,d,S)}}}a=a.next}while(a!==i)}}catch(S){be(t,t.return,S)}}function Mf(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Td(t,n)}catch(a){be(e,e.return,a)}}}function Df(e,t,n){n.props=wa(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(a){be(e,t,a)}}function Ft(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:var o=e.stateNode,i=fn(e.memoizedProps,o);(o.ref===null||o.ref.name!==i)&&(o.ref=Yh(i)),a=o.ref;break;case 7:if(e.stateNode===null){var l=new At(e);w(e.child,!1,Ly,l,void 0,void 0),e.stateNode=l}a=e.stateNode;break;default:a=e.stateNode}typeof n=="function"?e.refCleanup=n(a):n.current=a}}catch(s){be(e,t,s)}}function Fe(e,t){var n=e.ref,a=e.refCleanup;if(n!==null)if(typeof a=="function")try{a()}catch(o){be(e,t,o)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(o){be(e,t,o)}else n.current=null}function bl(e,t){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&t!==null)for(var n=0;n<t.length;n++)Kh(e.stateNode,t[n])}function Hf(e){for(var t=e.return;t!==null&&(Ns(t)&&Kh(e.stateNode,t.stateNode),!Rs(t));)t=t.return}function Fo(e){for(var t=e.return;t!==null&&(Ns(t)&&By(e.stateNode,t.stateNode),!Rs(t));)t=t.return}function Rs(e){return e.tag===5||e.tag===3||e.tag===27}function Ns(e){return e&&e.tag===7&&e.stateNode!==null}function Us(e){var t=e.type,n=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&a.focus();break e;case"img":n.src?a.src=n.src:n.srcSet&&(a.srcset=n.srcSet)}}catch(o){be(e,e.return,o)}}function Ms(e,t,n){try{var a=e.stateNode;by(a,e.type,n,t),a[dt]=t}catch(o){be(e,e.return,o)}}function Lf(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Kn(e.type)||e.tag===4}function Ds(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Lf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Kn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Hs(e,t,n,a){var o=e.tag;if(o===5||o===6)o=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(o,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(o),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=It)),bl(e,a),he=!0;else if(o!==4&&(o===27&&(bl(e,a),a=null,Kn(e.type)&&(n=e.stateNode,t=null)),e=e.child,e!==null))for(Hs(e,t,n,a),e=e.sibling;e!==null;)Hs(e,t,n,a),e=e.sibling}function wl(e,t,n,a){var o=e.tag;if(o===5||o===6)o=e.stateNode,t?n.insertBefore(o,t):n.appendChild(o),bl(e,a),he=!0;else if(o!==4&&(o===27&&(bl(e,a),a=null,Kn(e.type)&&(n=e.stateNode)),e=e.child,e!==null))for(wl(e,t,n,a),e=e.sibling;e!==null;)wl(e,t,n,a),e=e.sibling}function Bf(e){var t=e.stateNode,n=e.memoizedProps;try{for(var a=e.type,o=t.attributes;o.length;)t.removeAttributeNode(o[0]);$e(t,a,n),t[Ke]=e,t[dt]=n}catch(i){be(e,e.return,i)}}var xl=!1,kt=null;function jf(e){(e.tag===30||(e.subtreeFlags&33554432)!==0)&&(xl=!0)}var $t=null;function qf(){var e=$t;return $t=null,e}var ht=0;function Fa(e,t,n,a,o){return ht=0,Gf(e.child,t,n,a,o)}function Gf(e,t,n,a,o){for(var i=!1;e!==null;){if(e.tag===5){var l=e.stateNode;if(a!==null){var s=bu(l);a.push(s),s.view&&(i=!0)}else i||bu(l).view&&(i=!0);xl=!0,qh(l,ht===0?t:t+"_"+ht,n),ht++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&o||Gf(e.child,t,n,a,o)&&(i=!0));e=e.sibling}return i}function en(e,t){for(;e!==null;)e.tag===5?Gh(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&t||en(e.child,t)),e=e.sibling}function Tl(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(Tl(e),e.tag===30&&(e.flags&18874368)!==0&&e.stateNode.paired)){var t=e.memoizedProps;if(t.name==null||t.name==="auto")throw Error(u(544));var n=t.name;t=hn(t.default,t.share),t!=="none"&&(Fa(e,n,t,null,!1)||en(e.child,!1))}e=e.sibling}}function Ls(e,t){if(e.tag===30){var n=e.stateNode,a=e.memoizedProps,o=fn(a,n),i=hn(a.default,n.paired?a.share:a.enter);i!=="none"?Fa(e,o,i,null,!1)?(Tl(e),n.paired||t||lo(e,a.onEnter)):en(e.child,!1):Tl(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Ls(e,t),e=e.sibling;else Tl(e)}function Bs(e){if(kt!==null&&kt.size!==0){var t=kt;if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var n=e.memoizedProps,a=n.name;if(a!=null&&a!=="auto"){var o=t.get(a);if(o!==void 0){var i=hn(n.default,n.share);if(i!=="none"&&(Fa(e,a,i,null,!1)?(i=e.stateNode,o.paired=i,i.paired=o,lo(e,n.onShare)):en(e.child,!1)),t.delete(a),t.size===0)break}}}Bs(e)}e=e.sibling}}}function js(e){if(e.tag===30){var t=e.memoizedProps,n=fn(t,e.stateNode),a=kt!==null?kt.get(n):void 0,o=hn(t.default,a!==void 0?t.share:t.exit);o!=="none"&&(Fa(e,n,o,null,!1)?a!==void 0?(o=e.stateNode,a.paired=o,o.paired=a,kt.delete(n),lo(e,t.onShare)):lo(e,t.onExit):en(e.child,!1)),kt!==null&&Bs(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)js(e),e=e.sibling;else kt!==null&&Bs(e)}function Yf(e){for(e=e.child;e!==null;){if(e.tag===30){var t=e.memoizedProps,n=fn(t,e.stateNode);t=hn(t.default,t.update),e.flags&=-5,t!=="none"&&Fa(e,n,t,e.memoizedState=[],!1)}else(e.subtreeFlags&33554432)!==0&&Yf(e);e=e.sibling}}function qs(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var t=e.stateNode;t.paired!==null&&(t.paired=null,en(e.child,!1))}qs(e)}e=e.sibling}}function Sl(e){if(e.tag===30)e.stateNode.paired=null,en(e.child,!1),qs(e);else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Sl(e),e=e.sibling;else qs(e)}function Vf(e){for(e=e.child;e!==null;)e.tag===30?en(e.child,!1):(e.subtreeFlags&33554432)!==0&&Vf(e),e=e.sibling}function Gs(e,t,n,a,o,i,l){for(var s=!1;t!==null;){if(t.tag===5){var d=t.stateNode;if(i!==null&&ht<i.length){var v=i[ht],S=bu(d);(v.view||S.view)&&(s=!0);var E;if(E=(e.flags&4)===0)if(S.clip)E=!0;else{E=v.rect;var p=S.rect;E=E.y!==p.y||E.x!==p.x||E.height!==p.height||E.width!==p.width}E&&(e.flags|=4),S.abs?S=!v.abs:(v=v.rect,S=S.rect,S=v.height!==S.height||v.width!==S.width),S&&(e.flags|=32)}else e.flags|=32;(e.flags&4)!==0&&qh(d,ht===0?n:n+"_"+ht,o),s&&(e.flags&4)!==0||($t===null&&($t=[]),$t.push(d,ht===0?a:a+"_"+ht,t.memoizedProps)),ht++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&l?e.flags|=t.flags&32:Gs(e,t.child,n,a,o,i,l)&&(s=!0));t=t.sibling}return s}function Qf(e,t){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,a=e.stateNode,o=fn(n,a),i=hn(n.default,n.update),l;l=e.memoizedState,e.memoizedState=null,a=e;var s=e.child;ht=0,o=Gs(a,s,o,o,i,l,!1),(e.flags&4)!==0&&o&&lo(e,n.onUpdate)}else(e.subtreeFlags&33554432)!==0&&Qf(e);e=e.sibling}}var Xe=!1,ge=!1,tn=!1,Ys=!1,Xf=typeof WeakSet=="function"?WeakSet:Set,Pe=null,nn=!1,$o=!1,kl=!1,Vs=!1;function Kg(e,t,n){if(e=e.containerInfo,mu=yo,e=Kc(e),Or(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var i=o.anchorOffset,l=o.focusNode;o=o.focusOffset;try{a.nodeType,l.nodeType}catch{a=null;break e}var s=0,d=-1,v=-1,S=0,E=0,p=e,T=null;t:for(;;){for(var U;p!==a||i!==0&&p.nodeType!==3||(d=s+i),p!==l||o!==0&&p.nodeType!==3||(v=s+o),p.nodeType===3&&(s+=p.nodeValue.length),(U=p.firstChild)!==null;)T=p,p=U;for(;;){if(p===e)break t;if(T===a&&++S===i&&(d=s),T===l&&++E===o&&(v=s),(U=p.nextSibling)!==null)break;p=T,T=p.parentNode}p=U}a=d===-1||v===-1?null:{start:d,end:v}}else a=null}a=a||{start:0,end:0}}else a=null;for(pu={focusedElem:e,selectionRange:a},yo=!1,n=(n&335544064)===n,Pe=t,t=n?9270:1024;Pe!==null;){if(e=Pe,n&&(a=e.deletions,a!==null))for(i=0;i<a.length;i++)n&&js(a[i]);if(e.alternate===null&&(e.flags&2)!==0)n&&jf(e),Cl(n);else{if(e.tag===22){if(a=e.alternate,e.memoizedState!==null){a!==null&&a.memoizedState===null&&n&&js(a),Cl(n);continue}else if(a!==null&&a.memoizedState!==null){n&&jf(e),Cl(n);continue}}a=e.child,(e.subtreeFlags&t)!==0&&a!==null?(a.return=e,Pe=a):(n&&Yf(e),Cl(n))}}kt=null}function Cl(e){for(;Pe!==null;){var t=Pe,n=e,a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 15:break;case 1:if((o&1024)!==0&&a!==null){n=void 0,o=a.memoizedProps,a=a.memoizedState;var i=t.stateNode;try{var l=wa(t.type,o);n=i.getSnapshotBeforeUpdate(l,a),i.__reactInternalSnapshotBeforeUpdate=n}catch(s){be(t,t.return,s)}}break;case 3:if((o&1024)!==0){if(a=t.stateNode.containerInfo,n=a.nodeType,n===9)Tu(a);else if(n===1)switch(a.nodeName){case"HEAD":case"HTML":case"BODY":Tu(a);break;default:a.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:n&&a!==null&&(n=fn(a.memoizedProps,a.stateNode),o=t.memoizedProps,o=hn(o.default,o.update),o!=="none"&&Fa(a,n,o,a.memoizedState=[],!0));break;default:if((o&1024)!==0)throw Error(u(163))}if(a=t.sibling,a!==null){a.return=t.return,Pe=a;break}Pe=t.return}}function Pf(e,t,n){var a=n.flags;switch(n.tag){case 0:case 11:case 15:an(e,n),a&4&&Jo(5,n);break;case 1:if(an(e,n),a&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(l){be(n,n.return,l)}else{var o=wa(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(o,t,e.__reactInternalSnapshotBeforeUpdate)}catch(l){be(n,n.return,l)}}a&64&&Mf(n),a&512&&Ft(n,n.return);break;case 3:if(an(e,n),a&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Td(e,t)}catch(l){be(n,n.return,l)}}break;case 27:t===null&&a&4&&Bf(n);case 26:case 5:an(e,n),t===null&&a&4&&Us(n),a&512&&Ft(n,n.return);break;case 12:an(e,n);break;case 31:an(e,n),a&4&&Wf(e,n);break;case 13:an(e,n),a&4&&Jf(e,n),a&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=ly.bind(null,n),Gy(e,n))));break;case 22:if(a=n.memoizedState!==null||Xe,!a){var i=t!==null&&t.memoizedState!==null||ge;t=Xe,o=ge,Xe=a,(ge=i)&&!o?(a=2,(n.subtreeFlags&8772)!==0&&(a|=1),Vt(e,n,a)):an(e,n),Xe=t,ge=o}break;case 30:an(e,n),a&512&&Ft(n,n.return);break;case 7:a&512&&Ft(n,n.return);default:an(e,n)}}function Qs(e,t){for(e=e.child;e!==null;)Zf(e,t),e=e.sibling}function Zf(e,t){switch(e.tag){case 5:case 26:try{var n=e.stateNode;if(t){var a=n.style;typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"}else{var o=e.stateNode,i=e.memoizedProps.style,l=i!=null&&i.hasOwnProperty("display")?i.display:null;o.style.display=l==null||typeof l=="boolean"?"":(""+l).trim()}}catch(d){be(e,e.return,d)}Xs(e,t);break;case 6:try{e.stateNode.nodeValue=t?"":e.memoizedProps,he=!0}catch(d){be(e,e.return,d)}break;case 18:try{var s=e.stateNode;t?jh(s,!0):jh(e.stateNode,!1)}catch(d){be(e,e.return,d)}break;case 22:case 23:e.memoizedState===null&&Qs(e,t);break;default:Qs(e,t)}}function Xs(e,t){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){e:{var n=e,a=t;switch(n.tag){case 4:Zf(n,a);break e;case 22:n.memoizedState===null&&Xs(n,a);break e;default:Xs(n,a)}}e=e.sibling}}function Kf(e){var t=e.alternate;t!==null&&(e.alternate=null,Kf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&_i(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Oe=null,mt=!1;function Gt(e,t,n){for(n=n.child;n!==null;)If(e,t,n),n=n.sibling}function If(e,t,n){if(bt&&typeof bt.onCommitFiberUnmount=="function")try{bt.onCommitFiberUnmount(To,n)}catch{}switch(n.tag){case 26:ge||Fe(n,t),Gt(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&!ge&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:ge||Fe(n,t),Fo(n);var a=Oe,o=mt;Kn(n.type)&&(Oe=n.stateNode,mt=!1),Gt(e,t,n),$h(n.stateNode,n.type,n.memoizedProps),Oe=a,mt=o;break;case 5:ge||Fe(n,t),Fo(n);case 6:if(n.tag===6&&Fo(n),a=Oe,o=mt,Oe=null,Gt(e,t,n),Oe=a,mt=o,Oe!==null)if(mt)try{(Oe.nodeType===9?Oe.body:Oe.nodeName==="HTML"?Oe.ownerDocument.body:Oe).removeChild(n.stateNode),he=!0}catch(i){be(n,t,i)}else try{Oe.removeChild(n.stateNode),he=!0}catch(i){be(n,t,i)}break;case 18:Oe!==null&&(mt?(e=Oe,Bh(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),vo(e)):Bh(Oe,n.stateNode));break;case 4:a=Oe,o=mt,Oe=n.stateNode.containerInfo,mt=!0,Gt(e,t,n),Oe=a,mt=o;break;case 0:case 11:case 14:case 15:Gn(2,n,t),ge||Gn(4,n,t),Gt(e,t,n);break;case 1:ge||(Fe(n,t),a=n.stateNode,typeof a.componentWillUnmount=="function"&&Df(n,t,a)),Gt(e,t,n);break;case 21:Gt(e,t,n);break;case 22:ge=(a=ge)||n.memoizedState!==null,Gt(e,t,n),ge=a;break;case 30:Fe(n,t),Gt(e,t,n);break;case 7:ge||Fe(n,t),Gt(e,t,n);break;default:Gt(e,t,n)}}function Wf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{vo(e)}catch(n){be(t,t.return,n)}}}function Jf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{vo(e)}catch(n){be(t,t.return,n)}}function Ig(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Xf),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Xf),t;default:throw Error(u(435,e.tag))}}function El(e,t){var n=Ig(e);t.forEach(function(a){if(!n.has(a)){n.add(a);var o=ry.bind(null,e,a);a.then(o,o)}})}function st(e,t,n){var a=t.deletions;if(a!==null)for(var o=0;o<a.length;o++){var i=a[o],l=e,s=t,d=s;e:for(;d!==null;){switch(d.tag){case 27:if(Kn(d.type)){Oe=d.stateNode,mt=!1;break e}break;case 5:Oe=d.stateNode,mt=!1;break e;case 3:case 4:Oe=d.stateNode.containerInfo,mt=!0;break e}d=d.return}if(Oe===null)throw Error(u(160));If(l,s,i),Oe=null,mt=!1,l=i.alternate,l!==null&&(l.return=null),i.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Ff(t,e,n),t=t.sibling}var Yt=null;function Ff(e,t,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(o&4&&(a=e.updateQueue,a=a!==null?a.events:null,a!==null))for(var i=0;i<a.length;i++){var l=a[i];l.ref.impl=l.nextImpl}st(t,e,n),ut(e),o&4&&(Gn(3,e,e.return),Jo(3,e),Gn(5,e,e.return));break;case 1:st(t,e,n),ut(e),o&512&&(ge||a===null||Fe(a,a.return)),o&64&&Xe&&(e=e.updateQueue,e!==null&&(t=e.callbacks,t!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?t:n.concat(t))));break;case 26:if(i=Yt,st(t,e,n),ut(e),o&512&&(ge||a===null||Fe(a,a.return)),o&4)if(o=a!==null?a.memoizedState:null,n=e.memoizedState,a===null)if(n===null)if(e.stateNode===null)if(Xe)e.stateNode=Dh(e.type,e.memoizedProps,t.containerInfo,e);else{e:{t=e.type,n=e.memoizedProps,o=i.ownerDocument||i;t:switch(t){case"title":a=o.getElementsByTagName("title")[0],(!a||a[Co]||a[Ke]||a.namespaceURI==="http://www.w3.org/2000/svg"||a.hasAttribute("itemprop"))&&(a=o.createElement(t),o.head.insertBefore(a,o.querySelector("head > title"))),$e(a,t,n),a[Ke]=e,Ve(a),t=a;break e;case"link":if(i=im("link","href",o).get(t+(n.href||""))){for(l=0;l<i.length;l++)if(a=i[l],a.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&a.getAttribute("rel")===(n.rel==null?null:n.rel)&&a.getAttribute("title")===(n.title==null?null:n.title)&&a.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){i.splice(l,1);break t}}a=o.createElement(t),$e(a,t,n),o.head.appendChild(a);break;case"meta":if(i=im("meta","content",o).get(t+(n.content||""))){for(l=0;l<i.length;l++)if(a=i[l],a.getAttribute("content")===(n.content==null?null:""+n.content)&&a.getAttribute("name")===(n.name==null?null:n.name)&&a.getAttribute("property")===(n.property==null?null:n.property)&&a.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&a.getAttribute("charset")===(n.charSet==null?null:n.charSet)){i.splice(l,1);break t}}a=o.createElement(t),$e(a,t,n),o.head.appendChild(a);break;default:throw Error(u(468,t))}a[Ke]=e,Ve(a),t=a}e.stateNode=t}else Xe||Ou(i,e.type,e.stateNode);else e.stateNode=om(i,n,e.memoizedProps);else o!==n?(o===null?(t=a.stateNode,t===null||ge||t.parentNode.removeChild(t)):o.count--,n===null?Xe||Ou(i,e.type,e.stateNode):om(i,n,e.memoizedProps)):n===null&&e.stateNode!==null&&Ms(e,e.memoizedProps,a.memoizedProps);break;case 27:st(t,e,n),ut(e),o&512&&(ge||a===null||Fe(a,a.return)),a!==null&&o&4&&Ms(e,e.memoizedProps,a.memoizedProps);break;case 5:if(i=tn,tn=!1,st(t,e,n),tn=i,ut(e),o&512&&(ge||a===null||Fe(a,a.return)),e.flags&32){t=e.stateNode;try{Ma(t,""),he=!0}catch(S){be(e,e.return,S)}}o&4&&e.stateNode!=null&&(t=e.memoizedProps,Ms(e,t,a!==null?a.memoizedProps:t)),o&1024&&(Ys=!0);break;case 6:if(st(t,e,n),ut(e),o&4){if(e.stateNode===null)throw Error(u(162));t=e.memoizedProps,n=e.stateNode;try{n.nodeValue=t,he=!0}catch(S){be(e,e.return,S)}}break;case 3:if(he=!1,Gl=null,i=Yt,Yt=si(t.containerInfo),st(t,e,n),Yt=i,ut(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{vo(t.containerInfo)}catch(S){be(e,e.return,S)}Ys&&(Ys=!1,$f(e)),he=!1;break;case 4:o=tn,tn=Xe,a=vc(),i=Yt,Yt=si(e.stateNode.containerInfo),st(t,e,n),ut(e),Yt=i,he&&$o&&(kl=!0),he=a,tn=o;break;case 12:st(t,e,n),ut(e);break;case 31:st(t,e,n),ut(e),o&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,El(e,t)));break;case 13:st(t,e,n),ut(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Ol=vt()),o&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,El(e,t)));break;case 22:i=e.memoizedState!==null,l=a!==null&&a.memoizedState!==null;var s=Xe,d=ge,v=tn;Xe=s||i,tn=v||i,ge=d||l,st(t,e,n),ge=d,tn=v,Xe=s,ut(e),o&8192&&(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,!i||a===null||l||Xe||ge||(t=l||ge,n=Xe,a=ge,Xe=i||Xe,ge=t,Yn(e,2),Xe=n,ge=a),!i&&tn||Qs(e,i)),o&4&&(t=e.updateQueue,t!==null&&(n=t.retryQueue,n!==null&&(t.retryQueue=null,El(e,n))));break;case 19:st(t,e,n),ut(e),o&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,El(e,t)));break;case 30:o&512&&(ge||a===null||Fe(a,a.return)),o=vc(),i=$o,l=(n&335544064)===n,s=e.memoizedProps,$o=l&&hn(s.default,s.update)!=="none",st(t,e,n),ut(e),l&&a!==null&&he&&(e.flags|=4),$o=i,he=o;break;case 21:break;case 7:o&512&&(ge||a===null||Fe(a,a.return)),a&&a.stateNode!==null&&(a.stateNode._fragmentFiber=e);default:st(t,e,n),ut(e)}}function ut(e){var t=e.flags;if(t&2){try{for(var n,a=e.return;a!==null;){if(Lf(a)){n=a;break}a=a.return}a=null;for(var o=e.return;o!==null;){if(Ns(o)){var i=o.stateNode;a===null?a=[i]:a.push(i)}if(Rs(o))break;o=o.return}var l=a;if(n==null)throw Error(u(160));switch(n.tag){case 27:var s=n.stateNode,d=Ds(e);wl(e,d,s,l);break;case 5:var v=n.stateNode;n.flags&32&&(Ma(v,""),n.flags&=-33);var S=Ds(e);wl(e,S,v,l);break;case 3:case 4:var E=n.stateNode.containerInfo,p=Ds(e);Hs(e,p,E,l);break;default:throw Error(u(161))}}catch(T){be(e,e.return,T)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function $f(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;$f(t),t.tag===5&&t.flags&1024&&(t=t.stateNode,yo=!0,t.reset(),yo=!1),e=e.sibling}}function $a(e,t){if(t.subtreeFlags&9270)for(t=t.child;t!==null;)eh(t,e),t=t.sibling;else Qf(t)}function eh(e,t){var n=e.alternate;if(n===null)Ls(e,!1);else switch(e.tag){case 3:if(Vs=nn=!1,qf(),$a(t,e),!nn&&!kl){if(e=$t,e!==null)for(var a=0;a<e.length;a+=3){n=e[a];var o=e[a+1];Gh(n,e[a+2]),n=n.ownerDocument.documentElement,n!==null&&n.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+o+")"})}e=t.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===""&&(e.style.viewTransitionName="none",e.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),Vs=!0}$t=null;break;case 5:$a(t,e);break;case 4:a=nn,nn=!1,$a(t,e),nn&&(kl=!0),nn=a;break;case 22:e.memoizedState===null&&(n.memoizedState!==null?Ls(e,!1):$a(t,e));break;case 30:a=nn,o=qf(),nn=!1,$a(t,e),nn&&(e.flags|=4);var i=e.memoizedProps,l=e.stateNode;t=fn(i,l),l=fn(n.memoizedProps,l);var s=hn(i.default,i.update);s==="none"?t=!1:(i=n.memoizedState,n.memoizedState=null,n=e.child,ht=0,t=Gs(e,n,t,l,s,i,!0),ht!==(i===null?0:i.length)&&(e.flags|=32)),(e.flags&4)!==0&&t?(lo(e,e.memoizedProps.onUpdate),$t=o):o!==null&&(o.push.apply(o,$t),$t=o),nn=(e.flags&32)!==0?!0:a;break;default:$a(t,e)}}function an(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Pf(e,t.alternate,t),t=t.sibling}function Yn(e,t){for(e=e.child;e!==null;){var n=e,a=t;switch(n.tag){case 0:case 11:case 14:case 15:Gn(4,n,n.return),Yn(n,a);break;case 1:Fe(n,n.return);var o=n.stateNode;typeof o.componentWillUnmount=="function"&&Df(n,n.return,o),Yn(n,a);break;case 27:(a&2)!==0&&$h(n.stateNode,n.type,n.memoizedProps);case 5:Fe(n,n.return),n.tag!==5&&n.tag!==27||Fo(n),Yn(n,a);break;case 6:Fo(n);break;case 26:Fe(n,n.return),o=n.stateNode,n.memoizedState!==null||o===null||ge||o.parentNode.removeChild(o),Yn(n,a);break;case 22:n.memoizedState===null&&Yn(n,a);break;case 30:Fe(n,n.return),Yn(n,a);break;case 7:Fe(n,n.return);default:Yn(n,a)}e=e.sibling}}function Vt(e,t,n){for(n=(t.subtreeFlags&8772)!==0?n:n&-2,t=t.child;t!==null;){var a=t.alternate,o=e,i=t,l=i.flags,s=(n&1)!==0;switch(i.tag){case 0:case 11:case 15:Vt(o,i,n),Jo(4,i);break;case 1:if(Vt(o,i,n),a=i,o=a.stateNode,typeof o.componentDidMount=="function")try{o.componentDidMount()}catch(S){be(a,a.return,S)}if(a=i,o=a.updateQueue,o!==null){var d=a.stateNode;try{var v=o.shared.hiddenCallbacks;if(v!==null)for(o.shared.hiddenCallbacks=null,o=0;o<v.length;o++)xd(v[o],d)}catch(S){be(a,a.return,S)}}s&&l&64&&Mf(i),Ft(i,i.return);break;case 27:(n&2)!==0&&Bf(i);case 5:i.tag!==5&&i.tag!==27||Hf(i),Vt(o,i,n),s&&a===null&&l&4&&Us(i),Ft(i,i.return);break;case 6:Hf(i);break;case 26:d=i.stateNode,i.memoizedState!==null||d===null||Xe||Ou(si(d.ownerDocument),i.type,d),Vt(o,i,n),s&&a===null&&l&4&&Us(i),Ft(i,i.return);break;case 12:Vt(o,i,n);break;case 31:Vt(o,i,n),s&&l&4&&Wf(o,i);break;case 13:Vt(o,i,n),s&&l&4&&Jf(o,i);break;case 22:i.memoizedState===null&&Vt(o,i,n),Ft(i,i.return);break;case 30:Vt(o,i,n),Ft(i,i.return);break;case 7:Ft(i,i.return);default:Vt(o,i,n)}t=t.sibling}}function Ps(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Bo(n))}function Zs(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Bo(e))}function Ht(e,t,n,a){var o=(n&335544064)===n;if(t.subtreeFlags&(o?10262:10256))for(t=t.child;t!==null;)th(e,t,n,a),t=t.sibling;else o&&Vf(t)}function th(e,t,n,a){var o=(n&335544064)===n;o&&t.alternate===null&&t.return!==null&&t.return.alternate!==null&&Sl(t);var i=t.flags;switch(t.tag){case 0:case 11:case 15:Ht(e,t,n,a),i&2048&&Jo(9,t);break;case 1:Ht(e,t,n,a);break;case 3:Ht(e,t,n,a),o&&Vs&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,e.style.viewTransitionName==="root"&&(e.style.viewTransitionName=""),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName==="none"&&(e.style.viewTransitionName="")),i&2048&&(i=null,t.alternate!==null&&(i=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==i&&(t.refCount++,i!=null&&Bo(i)));break;case 12:if(i&2048){Ht(e,t,n,a),i=t.stateNode;try{var l=t.memoizedProps,s=l.id,d=l.onPostCommit;typeof d=="function"&&d(s,t.alternate===null?"mount":"update",i.passiveEffectDuration,-0)}catch(v){be(t,t.return,v)}}else Ht(e,t,n,a);break;case 31:Ht(e,t,n,a);break;case 13:Ht(e,t,n,a);break;case 23:break;case 22:l=t.stateNode,s=t.alternate,t.memoizedState!==null?(o&&s!==null&&s.memoizedState===null&&Sl(s),l._visibility&2?Ht(e,t,n,a):ei(e,t)):(o&&s!==null&&s.memoizedState!==null&&Sl(t),l._visibility&2?Ht(e,t,n,a):(l._visibility|=2,eo(e,t,n,a,(t.subtreeFlags&10256)!==0||!1))),i&2048&&Ps(s,t);break;case 24:Ht(e,t,n,a),i&2048&&Zs(t.alternate,t);break;case 30:o&&(i=t.alternate,i!==null&&(en(i.child,!0),en(t.child,!0))),Ht(e,t,n,a);break;default:Ht(e,t,n,a)}}function eo(e,t,n,a,o){for(o=o&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,l=t,s=n,d=a,v=l.flags;switch(l.tag){case 0:case 11:case 15:eo(i,l,s,d,o),Jo(8,l);break;case 23:break;case 22:var S=l.stateNode;l.memoizedState!==null?S._visibility&2?eo(i,l,s,d,o):ei(i,l):(S._visibility|=2,eo(i,l,s,d,o)),o&&v&2048&&Ps(l.alternate,l);break;case 24:eo(i,l,s,d,o),o&&v&2048&&Zs(l.alternate,l);break;default:eo(i,l,s,d,o)}t=t.sibling}}function ei(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,a=t,o=a.flags;switch(a.tag){case 22:ei(n,a),o&2048&&Ps(a.alternate,a);break;case 24:ei(n,a),o&2048&&Zs(a.alternate,a);break;default:ei(n,a)}t=t.sibling}}var xa=8192;function Ta(e,t,n){if(e.subtreeFlags&xa)for(e=e.child;e!==null;)nh(e,t,n),e=e.sibling}function nh(e,t,n){switch(e.tag){case 26:Ta(e,t,n),e.flags&xa&&(e.memoizedState!==null?tv(n,Yt,e.memoizedState,e.memoizedProps):(e=e.stateNode,(t&335544128)===t&&um(n,e)));break;case 5:Ta(e,t,n),e.flags&xa&&(e=e.stateNode,(t&335544128)===t&&um(n,e));break;case 3:case 4:var a=Yt;Yt=si(e.stateNode.containerInfo),Ta(e,t,n),Yt=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=xa,xa=16777216,Ta(e,t,n),xa=a):Ta(e,t,n));break;case 30:if((e.flags&xa)!==0&&(a=e.memoizedProps.name,a!=null&&a!=="auto")){var o=e.stateNode;o.paired=null,kt===null&&(kt=new Map),kt.set(a,o)}Ta(e,t,n);break;default:Ta(e,t,n)}}function ah(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function ti(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];Pe=a,ih(a,e)}ah(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)oh(e),e=e.sibling}function oh(e){switch(e.tag){case 0:case 11:case 15:ti(e),e.flags&2048&&Gn(9,e,e.return);break;case 3:ti(e);break;case 12:ti(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,zl(e)):ti(e);break;default:ti(e)}}function zl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];Pe=a,ih(a,e)}ah(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Gn(8,t,t.return),zl(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,zl(t));break;default:zl(t)}e=e.sibling}}function ih(e,t){for(;Pe!==null;){var n=Pe;switch(n.tag){case 0:case 11:case 15:Gn(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var a=n.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Bo(n.memoizedState.cache)}if(a=n.child,a!==null)a.return=n,Pe=a;else e:for(n=e;Pe!==null;){a=Pe;var o=a.sibling,i=a.return;if(Kf(a),a===n){Pe=null;break e}if(o!==null){o.return=i,Pe=o;break e}Pe=i}}}var Wg={getCacheForType:function(e){var t=Ie(Le),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Ie(Le).controller.signal}},Jg=typeof WeakMap=="function"?WeakMap:Map,pe=0,Te=null,ae=null,ie=0,ve=0,Ct=null,Vn=!1,to=!1,Ks=!1,Tn=0,Ne=0,Qn=0,Sa=0,Al=0,Et=0,no=0,ni=null,pt=null,Is=!1,Ol=0,lh=0,_l=1/0,Rl=null,Xn=null,_e=0,Qt=null,ka=null,on=0,Ws=0,Js=null,rh=null,ao=null,oo=null,io=null,ai=0,Nl=null;function zt(){return(pe&2)!==0&&ie!==0?ie&-ie:L.T!==null?ru():uc()}function sh(){if(Et===0)if((ie&536870912)===0||ee){var e=Ei;Ei<<=1,(Ei&3932160)===0&&(Ei=262144),Et=e}else Et=536870912;return e=We.current,e!==null&&(e.flags|=32),Et}function lo(e,t){if(t!=null){var n=e.stateNode,a=n.ref;a===null&&(a=n.ref=Yh(fn(e.memoizedProps,n))),oo===null&&(oo=[]),oo.push(t.bind(null,a))}}function gt(e,t,n){(e===Te&&(ve===2||ve===9)||e.cancelPendingCommit!==null)&&(ro(e,0),Pn(e,ie,Et,!1)),ko(e,n),((pe&2)===0||e!==Te)&&(e===Te&&((pe&2)===0&&(Sa|=n),Ne===4&&Pn(e,ie,Et,!1)),ln(e))}function uh(e,t,n){if((pe&6)!==0)throw Error(u(327));var a=!n&&(t&127)===0&&(t&e.expiredLanes)===0||So(e,t),o=a?ey(e,t):$s(e,t,!0),i=a;do{if(o===0){to&&!a&&Pn(e,t,0,!1);break}else{if(n=e.current.alternate,i&&!Fg(n)){o=$s(e,t,!1),i=!1;continue}if(o===2){if(i=t,e.errorRecoveryDisabledLanes&i)var l=0;else l=e.pendingLanes&-536870913,l=l!==0?l:l&536870912?536870912:0;if(l!==0){t=l;e:{var s=e;o=ni;var d=s.current.memoizedState.isDehydrated;if(d&&(ro(s,l).flags|=256),l=$s(s,l,!1),l!==2&&l!==6){if(Ks&&!d){s.errorRecoveryDisabledLanes|=i,Sa|=i,o=4;break e}i=pt,pt=o,i!==null&&(pt===null?pt=i:pt.push.apply(pt,i))}o=l}if(i=!1,o!==2)continue}}if(o===1){ro(e,0),Pn(e,t,0,!0);break}e:{switch(a=e,i=o,i){case 0:case 1:throw Error(u(345));case 4:if((t&4194048)!==t&&(t&62914560)!==t)break;case 6:Pn(a,t,Et,!Vn);break e;case 2:pt=null;break;case 3:case 5:break;default:throw Error(u(329))}if((t&62914560)===t&&(o=Ol+300-vt(),10<o)){if(Pn(a,t,Et,!Vn),Ai(a,0,!0)!==0)break e;on=t,a.timeoutHandle=vu(ch.bind(null,a,n,pt,Rl,Is,t,Et,Sa,no,Vn,i,"Throttled",-0,0),o);break e}ch(a,n,pt,Rl,Is,t,Et,Sa,no,Vn,i,null,-0,0)}}break}while(!0);ln(e)}function ch(e,t,n,a,o,i,l,s,d,v,S,E,p,T){e.timeoutHandle=-1;var U=t.subtreeFlags,H=(i&335544064)===i;if(E=null,(H||U&8192||(U&16785408)===16785408)&&(E={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:It},kt=null,nh(t,i,E),H&&(U=E,H=e.containerInfo,H=(H.nodeType===9?H:H.ownerDocument).__reactViewTransition,H!=null&&(U.count++,U.waitingForViewTransition=!0,U=di.bind(U),H.finished.then(U,U))),U=(i&62914560)===i?Ol-vt():(i&4194048)===i?lh-vt():0,U=nv(E,U),U!==null)){on=i,e.cancelPendingCommit=U(vh.bind(null,e,t,i,n,a,o,l,s,d,v,S,E,null,p,T)),Pn(e,i,l,!v);return}vh(e,t,i,n,a,o,l,s,d,v,S,E)}function Fg(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var a=0;a<n.length;a++){var o=n[a],i=o.getSnapshot;o=o.value;try{if(!Tt(i(),o))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Pn(e,t,n,a){t=oc(e,t),t&=~Al,t&=~Sa,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var o=t;0<o;){var i=31-wt(o),l=1<<i;a[i]=-1,o&=~l}n!==0&&lc(e,n,t)}function Ul(){return(pe&6)===0?(oi(0),!1):!0}function Fs(){if(ae!==null){if(ve===0)var e=ae.return;else e=ae,gn=da=null,ls(e),Za=null,Go=0,e=ae;for(;e!==null;)Uf(e.alternate,e),e=e.return;ae=null}}function ro(e,t){var n=e.timeoutHandle;return n!==-1&&(e.timeoutHandle=-1,Ty(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),on=0,Fs(),Te=e,ae=n=mn(e.current,null),ie=t,ve=0,Ct=null,Vn=!1,to=So(e,t),Ks=!1,no=Et=Al=Sa=Qn=Ne=0,pt=ni=null,Is=!1,Tn=oc(e,t),Gi(),n}function dh(e,t){K=null,L.H=fl,t===Pa||t===Fi?(t=yd(),ve=3):t===Zr?(t=yd(),ve=4):ve=t===xs?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Ct=t,ae===null&&(Ne=1,hl(e,Nt(t,e.current)))}function fh(){var e=We.current;return e===null?!0:(ie&4194048)===ie?ot===null:(ie&62914560)===ie||(ie&536870912)!==0?e===ot:!1}function hh(){var e=L.H;return L.H=fl,e===null?fl:e}function mh(){var e=L.A;return L.A=Wg,e}function Ml(){Ne=4,Vn||(ie&4194048)!==ie&&We.current!==null||(to=!0),(Qn&134217727)===0&&(Sa&134217727)===0||Te===null||Pn(Te,ie,Et,!1)}function $s(e,t,n){var a=pe;pe|=2;var o=hh(),i=mh();(Te!==e||ie!==t)&&(Rl=null,ro(e,t)),t=!1;var l=Ne;e:do try{if(ve!==0&&ae!==null){var s=ae,d=Ct;switch(ve){case 8:Fs(),l=6;break e;case 3:case 2:case 9:case 6:We.current===null&&(t=!0);var v=ve;if(ve=0,Ct=null,so(e,s,d,v),n&&to){l=0;break e}break;default:v=ve,ve=0,Ct=null,so(e,s,d,v)}}$g(),l=Ne;break}catch(S){dh(e,S)}while(!0);return t&&e.shellSuspendCounter++,gn=da=null,pe=a,L.H=o,L.A=i,ae===null&&(Te=null,ie=0,Gi()),l}function $g(){for(;ae!==null;)ph(ae)}function ey(e,t){var n=pe;pe|=2;var a=hh(),o=mh();Te!==e||ie!==t?(Rl=null,_l=vt()+500,ro(e,t)):to=So(e,t);e:do try{if(ve!==0&&ae!==null){t=ae;var i=Ct;t:switch(ve){case 1:ve=0,Ct=null,so(e,t,i,1);break;case 2:case 9:if(pd(i)){ve=0,Ct=null,gh(t);break}t=function(){ve!==2&&ve!==9||Te!==e||(ve=7),ln(e)},i.then(t,t);break e;case 3:ve=7;break e;case 4:ve=5;break e;case 7:pd(i)?(ve=0,Ct=null,gh(t)):(ve=0,Ct=null,so(e,t,i,7));break;case 5:var l=null;switch(ae.tag){case 26:l=ae.memoizedState;case 5:case 27:var s=ae;if(l?rm(l):s.stateNode.complete){ve=0,Ct=null;var d=s.sibling;if(d!==null)ae=d;else{var v=s.return;v!==null?(ae=v,Dl(v)):ae=null}break t}}ve=0,Ct=null,so(e,t,i,5);break;case 6:ve=0,Ct=null,so(e,t,i,6);break;case 8:Fs(),Ne=6;break e;default:throw Error(u(462))}}ty();break}catch(S){dh(e,S)}while(!0);return gn=da=null,L.H=a,L.A=o,pe=n,ae!==null?0:(Te=null,ie=0,Gi(),Ne)}function ty(){for(;ae!==null&&!vp();)ph(ae)}function ph(e){var t=Rf(e.alternate,e,Tn);e.memoizedProps=e.pendingProps,t===null?Dl(e):ae=t}function gh(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=kf(n,t,t.pendingProps,t.type,void 0,ie);break;case 11:t=kf(n,t,t.pendingProps,t.type.render,t.ref,ie);break;case 5:ls(t);var a=t;a===Qe&&(ee?(Zi(a),a.tag===5&&a.stateNode!=null&&(Ce=a.stateNode)):(Zi(a),ee=!0));default:Uf(n,t),t=ae=od(t,Tn),t=Rf(n,t,Tn)}e.memoizedProps=e.pendingProps,t===null?Dl(e):ae=t}function so(e,t,n,a){gn=da=null,ls(t),Za=null,Go=0;var o=t.return;try{if(Yg(e,o,t,n,ie)){Ne=1,hl(e,Nt(n,e.current)),ae=null;return}}catch(i){if(o!==null)throw ae=o,i;Ne=1,hl(e,Nt(n,e.current)),ae=null;return}t.flags&32768?(ee||a===1?e=!0:to||(ie&536870912)!==0?e=!1:(Vn=e=!0,(a===2||a===9||a===3||a===6)&&(a=We.current,a!==null&&a.tag===13&&(a.flags|=16384))),yh(t,e)):Dl(t)}function Dl(e){var t=e;do{if((t.flags&32768)!==0){yh(t,Vn);return}e=t.return;var n=Pg(t.alternate,t,Tn);if(n!==null){ae=n;return}if(t=t.sibling,t!==null){ae=t;return}ae=t=e}while(t!==null);Ne===0&&(Ne=5)}function yh(e,t){do{var n=Zg(e.alternate,e);if(n!==null){n.flags&=32767,ae=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){ae=e;return}ae=e=n}while(e!==null);Ne=6,ae=null}function vh(e,t,n,a,o,i,l,s,d,v,S,E){e.cancelPendingCommit=null;do Hl();while(_e!==0);if((pe&6)!==0)throw Error(u(327));if(t!==null){if(t===e.current)throw Error(u(177));e===Te&&(ae=Te=null,ie=0),ka=t,Qt=e,on=n,Js=o,rh=a,ny(e,t,n,l,s,d,E)}}function ny(e,t,n,a,o,i,l){var s=t.lanes|t.childLanes;if(Ws=s,s|=Mr,Ap(e,n,s,a,o,i),oo=null,(n&335544064)===n?(io=_g(e),a=10262):(io=null,a=10256),(t.subtreeFlags&a)!==0||(t.flags&a)!==0?(e.callbackNode=null,e.callbackPriority=0,sy(ki,function(){return au(),null})):(e.callbackNode=null,e.callbackPriority=0),xl=!1,a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=L.T,L.T=null,o=P.p,P.p=2,i=pe,pe|=4;try{Kg(e,t,n)}finally{pe=i,P.p=o,L.T=a}}_e=1,xl?ao=Ay(l,e.containerInfo,io,eu,tu,oy,nu,au,ay):(eu(),tu(),nu())}function ay(e){if(_e!==0){var t=Qt.onRecoverableError;t(e,{componentStack:null})}}function oy(){_e===3&&(_e=0,eh(ka,Qt),_e=4)}function eu(){if(_e===1){_e=0;var e=Qt,t=ka,n=on,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=L.T,L.T=null;var o=P.p;P.p=2;var i=pe;pe|=4;try{$o=kl=!1,Ff(t,e,n),n=pu;var l=Kc(e.containerInfo),s=n.focusedElem,d=n.selectionRange;if(l!==s&&s&&s.ownerDocument&&Zc(s.ownerDocument.documentElement,s)){if(d!==null&&Or(s)){var v=d.start,S=d.end;if(S===void 0&&(S=v),"selectionStart"in s)s.selectionStart=v,s.selectionEnd=Math.min(S,s.value.length);else{var E=s.ownerDocument||document,p=E&&E.defaultView||window;if(p.getSelection){var T=p.getSelection(),U=s.textContent.length,H=Math.min(d.start,U),I=d.end===void 0?H:Math.min(d.end,U);!T.extend&&H>I&&(l=I,I=H,H=l);var y=Pc(s,H),h=Pc(s,I);if(y&&h&&(T.rangeCount!==1||T.anchorNode!==y.node||T.anchorOffset!==y.offset||T.focusNode!==h.node||T.focusOffset!==h.offset)){var x=E.createRange();x.setStart(y.node,y.offset),T.removeAllRanges(),H>I?(T.addRange(x),T.extend(h.node,h.offset)):(x.setEnd(h.node,h.offset),T.addRange(x))}}}}for(E=[],T=s;T=T.parentNode;)T.nodeType===1&&E.push({element:T,left:T.scrollLeft,top:T.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<E.length;s++){var C=E[s];C.element.scrollLeft=C.left,C.element.scrollTop=C.top}}yo=!!mu,pu=mu=null}finally{pe=i,P.p=o,L.T=a}}e.current=t,_e=2}}function tu(){if(_e===2){_e=0;var e=Qt,t=ka,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=L.T,L.T=null;var a=P.p;P.p=2;var o=pe;pe|=4;try{Pf(e,t.alternate,t)}finally{pe=o,P.p=a,L.T=n}}_e=3}}function nu(){if(_e===4||_e===3){_e=0;var e=ao;ao=null,bp();var t=Qt,n=ka,a=on,o=rh,i=(a&335544064)===a?10262:10256;if((n.subtreeFlags&i)!==0||(n.flags&i)!==0?_e=5:(_e=0,ka=Qt=null,bh(t,t.pendingLanes)),i=t.pendingLanes,i===0&&(Xn=null),dr(a),n=n.stateNode,bt&&typeof bt.onCommitFiberRoot=="function")try{bt.onCommitFiberRoot(To,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=L.T,i=P.p,P.p=2,L.T=null;try{for(var l=t.onRecoverableError,s=0;s<o.length;s++){var d=o[s];l(d.value,{componentStack:d.stack})}}finally{L.T=n,P.p=i}}if(o=oo,l=io,io=null,o!==null&&(oo=null,l===null&&(l=[]),e!==null))for(d=0;d<o.length;d++)n=(0,o[d])(l),n!==void 0&&e.finished.finally(n);(on&3)!==0&&Hl(),ln(t),i=t.pendingLanes,(a&261930)!==0&&(i&42)!==0?t===Nl?ai++:(ai=0,Nl=t):(ai=0,Nl=null),oi(0)}}function bh(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Bo(t)))}function Hl(){return ao!==null&&(ao.skipTransition(),ao=null),eu(),tu(),nu(),au()}function au(){if(_e!==5)return!1;var e=Qt,t=Ws;Ws=0;var n=dr(on),a=L.T,o=P.p;try{P.p=32>n?32:n,L.T=null,n=Js,Js=null;var i=Qt,l=on;if(_e=0,ka=Qt=null,on=0,(pe&6)!==0)throw Error(u(331));var s=pe;if(pe|=4,oh(i.current),th(i,i.current,l,n),pe=s,oi(0,!1),bt&&typeof bt.onPostCommitFiberRoot=="function")try{bt.onPostCommitFiberRoot(To,i)}catch{}return!0}finally{P.p=o,L.T=a,bh(e,t)}}function wh(e,t,n){t=Nt(n,t),t=ws(e.stateNode,t,2),e=Ln(e,t,2),e!==null&&(ko(e,2),ln(e))}function be(e,t,n){if(e.tag===3)wh(e,e,n);else for(;t!==null;){if(t.tag===3){wh(t,e,n);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Xn===null||!Xn.has(a))){e=Nt(n,e),n=gf(2),a=Ln(t,n,2),a!==null&&(yf(n,a,t,e),ko(a,2),ln(a));break}}t=t.return}}function ou(e,t,n){var a=e.pingCache;if(a===null){a=e.pingCache=new Jg;var o=new Set;a.set(t,o)}else o=a.get(t),o===void 0&&(o=new Set,a.set(t,o));o.has(n)||(Ks=!0,o.add(n),e=iy.bind(null,e,t,n),t.then(e,e))}function iy(e,t,n){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Te===e&&(ie&n)===n&&((Ne===4||Ne===3&&(ie&62914560)===ie&&300>vt()-Ol)&&(pe&2)===0?ro(e,0):Al|=n,no===ie&&(no=0)),ln(e)}function xh(e,t){t===0&&(t=ic()),e=sa(e,t),e!==null&&(ko(e,t),ln(e))}function ly(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),xh(e,n)}function ry(e,t){var n=0;switch(e.tag){case 31:case 13:var a=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(u(314))}a!==null&&a.delete(t),xh(e,n)}function sy(e,t){return rr(e,t)}var uo=null,co=null,iu=!1,Ll=!1,lu=!1,Zn=0;function ln(e){e!==co&&e.next===null&&(co===null?uo=co=e:co=co.next=e),Ll=!0,iu||(iu=!0,cy())}function oi(e,t){if(!lu&&Ll){lu=!0;do for(var n=!1,a=uo;a!==null;){if(e!==0){var o=a.pendingLanes;if(o===0)var i=0;else{var l=a.suspendedLanes,s=a.pingedLanes;i=(1<<31-wt(42|e)+1)-1,i&=o&~(l&~s),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(n=!0,Ch(a,i))}else i=ie,i=Ai(a,a===Te?i:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(i&3)===0||So(a,i)||(n=!0,Ch(a,i));a=a.next}while(n);lu=!1}}function uy(){Th()}function Th(){Ll=iu=!1;var e=0;Zn!==0&&xy()&&(e=Zn);for(var t=vt(),n=null,a=uo;a!==null;){var o=a.next,i=Sh(a,t);i===0?(a.next=null,n===null?uo=o:n.next=o,o===null&&(co=n)):(n=a,(e!==0||(i&3)!==0)&&(Ll=!0)),a=o}_e!==0&&_e!==5||oi(e),Zn!==0&&(Zn=0)}function Sh(e,t){for(var n=e.suspendedLanes,a=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var l=31-wt(i),s=1<<l,d=o[l];d===-1?((s&n)===0||(s&a)!==0)&&(o[l]=zp(s,t)):d<=t&&(e.expiredLanes|=s),i&=~s}if(t=Te,n=ie,n=Ai(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,n===0||e===t&&(ve===2||ve===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&sr(a),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||So(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(a!==null&&sr(a),dr(n)){case 2:case 8:n=nc;break;case 32:n=ki;break;case 268435456:n=ac;break;default:n=ki}return a=kh.bind(null,e),n=rr(n,a),e.callbackPriority=t,e.callbackNode=n,t}return a!==null&&a!==null&&sr(a),e.callbackPriority=2,e.callbackNode=null,2}function kh(e,t){if(_e!==0&&_e!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Hl()&&e.callbackNode!==n)return null;var a=ie;return a=Ai(e,e===Te?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(uh(e,a,t),Sh(e,vt()),e.callbackNode!=null&&e.callbackNode===n?kh.bind(null,e):null)}function Ch(e,t){if(Hl())return null;uh(e,t,!0)}function cy(){Sy(function(){(pe&6)!==0?rr(tc,uy):Th()})}function ru(){if(Zn===0){var e=ma;e===0&&(e=Ci,Ci<<=1,(Ci&261888)===0&&(Ci=256)),Zn=e}return Zn}function Eh(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ui(e)}function dy(e,t,n,a,o){if(t==="submit"&&n&&n.stateNode===o){var i=Eh((o[dt]||null).action),l=a.submitter;l&&(t=(t=l[dt]||null)?Eh(t.formAction):l.getAttribute("formAction"),t!==null&&(i=t,l=null));var s=new Li("action","action",null,a,o);e.push({event:s,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(Zn!==0){var d=new FormData(o,l);ps(n,{pending:!0,data:d,method:o.method,action:i},null,d)}}else typeof i=="function"&&(s.preventDefault(),d=new FormData(o,l),ps(n,{pending:!0,data:d,method:o.method,action:i},i,d))},currentTarget:o}]})}}for(var su=0;su<Ur.length;su++){var uu=Ur[su],fy=uu.toLowerCase(),hy=uu[0].toUpperCase()+uu.slice(1);qt(fy,"on"+hy)}qt(Jc,"onAnimationEnd"),qt(Fc,"onAnimationIteration"),qt($c,"onAnimationStart"),qt("dblclick","onDoubleClick"),qt("focusin","onFocus"),qt("focusout","onBlur"),qt(Tg,"onTransitionRun"),qt(Sg,"onTransitionStart"),qt(kg,"onTransitionCancel"),qt(ed,"onTransitionEnd"),Na("onMouseEnter",["mouseout","mouseover"]),Na("onMouseLeave",["mouseout","mouseover"]),Na("onPointerEnter",["pointerout","pointerover"]),Na("onPointerLeave",["pointerout","pointerover"]),ia("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ia("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ia("onBeforeInput",["compositionend","keypress","textInput","paste"]),ia("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ia("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ia("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ii="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),my=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ii));function zh(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],o=a.event;a=a.listeners;e:{var i=void 0;if(t)for(var l=a.length-1;0<=l;l--){var s=a[l],d=s.instance,v=s.currentTarget;if(s=s.listener,d!==i&&o.isPropagationStopped())break e;i=s,o.currentTarget=v;try{i(o)}catch(S){qi(S)}o.currentTarget=null,i=d}else for(l=0;l<a.length;l++){if(s=a[l],d=s.instance,v=s.currentTarget,s=s.listener,d!==i&&o.isPropagationStopped())break e;i=s,o.currentTarget=v;try{i(o)}catch(S){qi(S)}o.currentTarget=null,i=d}}}}function oe(e,t){var n=t[dc];n===void 0&&(n=t[dc]=new Set);var a=e+"__bubble";n.has(a)||(Ah(t,e,2,!1),n.add(a))}function cu(e,t,n){var a=0;t&&(a|=4),Ah(n,e,a,t)}var Bl="_reactListening"+Math.random().toString(36).slice(2);function du(e){if(!e[Bl]){e[Bl]=!0,mc.forEach(function(n){n!=="selectionchange"&&(my.has(n)||cu(n,!1,e),cu(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Bl]||(t[Bl]=!0,cu("selectionchange",!1,t))}}function Ah(e,t,n,a){switch(ym(t)){case 2:var o=lv;break;case 8:o=rv;break;default:o=Ru}n=o.bind(null,t,n,e),o=void 0,!br||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),a?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function fu(e,t,n,a,o){var i=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var l=a.tag;if(l===3||l===4){var s=a.stateNode.containerInfo;if(s===o)break;if(l===4)for(l=a.return;l!==null;){var d=l.tag;if((d===3||d===4)&&l.stateNode.containerInfo===o)return;l=l.return}for(;s!==null;){if(l=oa(s),l===null)return;if(d=l.tag,d===5||d===6||d===26||d===27){a=i=l;continue e}s=s.parentNode}}a=a.return}zc(function(){var v=i,S=yr(n),E=[];e:{var p=td.get(e);if(p!==void 0){var T=Li,U=e;switch(e){case"keypress":if(Di(n)===0)break e;case"keydown":case"keyup":T=Fp;break;case"focusin":U="focus",T=Sr;break;case"focusout":U="blur",T=Sr;break;case"beforeblur":case"afterblur":T=Sr;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":T=_c;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":T=qp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":T=ag;break;case Jc:case Fc:case $c:T=Vp;break;case ed:T=ig;break;case"scroll":case"scrollend":T=Bp;break;case"wheel":T=rg;break;case"copy":case"cut":case"paste":T=Xp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":T=Nc;break;case"submit":T=tg;break;case"toggle":case"beforetoggle":T=ug}var H=(t&4)!==0,I=!H&&(e==="scroll"||e==="scrollend"),y=H?p!==null?p+"Capture":null:p;H=[];for(var h=v,x;h!==null;){var C=h;if(x=C.stateNode,C=C.tag,C!==5&&C!==26&&C!==27||x===null||y===null||(C=zo(h,y),C!=null&&H.push(li(h,C,x))),I)break;h=h.return}0<H.length&&(p=new T(p,U,null,n,S),E.push({event:p,listeners:H}))}}if((t&7)===0){e:{if(T=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",T&&n!==gr&&(U=n.relatedTarget||n.fromElement)&&(oa(U)||U[Oa]))break e;(p||T)&&(U=S.window===S?S:(T=S.ownerDocument)?T.defaultView||T.parentWindow:window,p?(T=n.relatedTarget||n.toElement,p=v,T=T?oa(T):null,T!==null&&(I=b(T),H=T.tag,T!==I||H!==5&&H!==27&&H!==6)&&(T=null)):(p=null,T=v),p!==T&&(H=_c,C="onMouseLeave",y="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(H=Nc,C="onPointerLeave",y="onPointerEnter",h="pointer"),I=p==null?U:Eo(p),x=T==null?U:Eo(T),U=new H(C,h+"leave",p,n,S),U.target=I,U.relatedTarget=x,C=null,oa(S)===v&&(H=new H(y,h+"enter",T,n,S),H.target=x,H.relatedTarget=I,C=H),I=C,H=p&&T?tt(p,T,py):null,p!==null&&Oh(E,U,p,H,!1),T!==null&&I!==null&&Oh(E,I,T,H,!0)))}e:{if(p=v?Eo(v):window,T=p.nodeName&&p.nodeName.toLowerCase(),T==="select"||T==="input"&&p.type==="file")var D=qc;else if(Bc(p))if(Gc)D=bg;else{D=yg;var le=gg}else T=p.nodeName,!T||T.toLowerCase()!=="input"||p.type!=="checkbox"&&p.type!=="radio"?v&&pr(v.elementType)&&(D=qc):D=vg;if(D&&(D=D(e,v))){jc(E,D,n,S);break e}le&&le(e,p,v)}switch(le=v?Eo(v):window,e){case"focusin":(Bc(le)||le.contentEditable==="true")&&(Ba=le,_r=v,Do=null);break;case"focusout":Do=_r=Ba=null;break;case"mousedown":Rr=!0;break;case"contextmenu":case"mouseup":case"dragend":Rr=!1,Ic(E,n,S);break;case"selectionchange":if(xg)break;case"keydown":case"keyup":Ic(E,n,S)}var j;if(Cr)e:{switch(e){case"compositionstart":var Q="onCompositionStart";break e;case"compositionend":Q="onCompositionEnd";break e;case"compositionupdate":Q="onCompositionUpdate";break e}Q=void 0}else La?Hc(e,n)&&(Q="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(Q="onCompositionStart");Q&&(Uc&&n.locale!=="ko"&&(La||Q!=="onCompositionStart"?Q==="onCompositionEnd"&&La&&(j=Ac()):(An=S,wr="value"in An?An.value:An.textContent,La=!0)),le=jl(v,Q),0<le.length&&(Q=new Rc(Q,e,null,n,S),E.push({event:Q,listeners:le}),j?Q.data=j:(j=Lc(n),j!==null&&(Q.data=j)))),(j=dg?fg(e,n):hg(e,n))&&(Q=jl(v,"onBeforeInput"),0<Q.length&&(le=new Rc("onBeforeInput","beforeinput",null,n,S),E.push({event:le,listeners:Q}),le.data=j)),dy(E,e,v,n,S)}zh(E,t)})}function li(e,t,n){return{instance:e,listener:t,currentTarget:n}}function jl(e,t){for(var n=t+"Capture",a=[];e!==null;){var o=e,i=o.stateNode;if(o=o.tag,o!==5&&o!==26&&o!==27||i===null||(o=zo(e,n),o!=null&&a.unshift(li(e,o,i)),o=zo(e,t),o!=null&&a.push(li(e,o,i))),e.tag===3)return a;e=e.return}return[]}function py(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Oh(e,t,n,a,o){for(var i=t._reactName,l=[];n!==null&&n!==a;){var s=n,d=s.alternate,v=s.stateNode;if(s=s.tag,d!==null&&d===a)break;s!==5&&s!==26&&s!==27||v===null||(d=v,o?(v=zo(n,i),v!=null&&l.unshift(li(n,v,d))):o||(v=zo(n,i),v!=null&&l.push(li(n,v,d)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var gy=/\r\n?/g,yy=/\u0000|\uFFFD/g;function _h(e){return(typeof e=="string"?e:""+e).replace(gy,`
`).replace(yy,"")}function Rh(e,t){return t=_h(t),_h(e)===t}function we(e,t,n,a,o,i){switch(n){case"children":if(typeof a=="string")t==="body"||t==="textarea"&&a===""||Ma(e,a);else if(typeof a=="number"||typeof a=="bigint")t!=="body"&&Ma(e,""+a);else return;break;case"className":Ni(e,"class",a);break;case"tabIndex":Ni(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Ni(e,n,a);break;case"style":Cc(e,a,i);return;case"data":if(t!=="object"){Ni(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=Ui(a),e.setAttribute(n,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(n==="formAction"?(t!=="input"&&we(e,t,"name",o.name,o,null),we(e,t,"formEncType",o.formEncType,o,null),we(e,t,"formMethod",o.formMethod,o,null),we(e,t,"formTarget",o.formTarget,o,null)):(we(e,t,"encType",o.encType,o,null),we(e,t,"method",o.method,o,null),we(e,t,"target",o.target,o,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=Ui(a),e.setAttribute(n,a);break;case"onClick":a!=null&&(e.onclick=It);return;case"onScroll":a!=null&&oe("scroll",e);return;case"onScrollEnd":a!=null&&oe("scrollend",e);return;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(u(61));if(n=a.__html,n!=null){if(o.children!=null)throw Error(u(60));(i!=null?i.__html:void 0)!==n&&(e.innerHTML=n)}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}n=Ui(a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,a):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":a===!0?e.setAttribute(n,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,a):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(n,a):e.removeAttribute(n);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(n):e.setAttribute(n,a);break;case"popover":oe("beforetoggle",e),oe("toggle",e),Ri(e,"popover",a);break;case"xlinkActuate":cn(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":cn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":cn(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":cn(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":cn(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":cn(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":cn(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":cn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":cn(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Ri(e,"is",a);break;case"innerText":case"textContent":return;default:if(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")n=Hp.get(n)||n,Ri(e,n,a);else return}he=!0}function hu(e,t,n,a,o,i){switch(n){case"style":Cc(e,a,i);return;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(u(61));if(n=a.__html,n!=null){if(o.children!=null)throw Error(u(60));(i!=null?i.__html:void 0)!==n&&(e.innerHTML=n)}}break;case"children":if(typeof a=="string")Ma(e,a);else if(typeof a=="number"||typeof a=="bigint")Ma(e,""+a);else return;break;case"onScroll":a!=null&&oe("scroll",e);return;case"onScrollEnd":a!=null&&oe("scrollend",e);return;case"onClick":a!=null&&(e.onclick=It);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!pc.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(o=n.endsWith("Capture"),i=n.slice(2,o?n.length-7:void 0),t=e[dt]||null,t=t!=null?t[n]:null,typeof t=="function"&&e.removeEventListener(i,t,o),typeof a=="function")){typeof t!="function"&&t!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(i,a,o);break e}he=!0,n in e?e[n]=a:a===!0?e.setAttribute(n,""):Ri(e,n,a)}return}he=!0}function $e(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":oe("error",e),oe("load",e);var a=!1,o=!1,i;for(i in n)if(n.hasOwnProperty(i)){var l=n[i];if(l!=null)switch(i){case"src":a=!0;break;case"srcSet":o=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:we(e,t,i,l,n,null)}}o&&we(e,t,"srcSet",n.srcSet,n,null),a&&we(e,t,"src",n.src,n,null);return;case"input":oe("invalid",e);var s=i=l=o=null,d=null,v=null;for(a in n)if(n.hasOwnProperty(a)){var S=n[a];if(S!=null)switch(a){case"name":o=S;break;case"type":l=S;break;case"checked":d=S;break;case"defaultChecked":v=S;break;case"value":i=S;break;case"defaultValue":s=S;break;case"children":case"dangerouslySetInnerHTML":if(S!=null)throw Error(u(137,t));break;default:we(e,t,a,S,n,null)}}xc(e,i,s,d,v,l,o,!1);return;case"select":oe("invalid",e),a=l=i=null;for(o in n)if(n.hasOwnProperty(o)&&(s=n[o],s!=null))switch(o){case"value":i=s;break;case"defaultValue":l=s;break;case"multiple":a=s;default:we(e,t,o,s,n,null)}t=i,n=l,e.multiple=!!a,t!=null?Ua(e,!!a,t,!1):n!=null&&Ua(e,!!a,n,!0);return;case"textarea":oe("invalid",e),i=o=a=null;for(l in n)if(n.hasOwnProperty(l)&&(s=n[l],s!=null))switch(l){case"value":a=s;break;case"defaultValue":o=s;break;case"children":i=s;break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(u(91));break;default:we(e,t,l,s,n,null)}Sc(e,a,o,i);return;case"option":for(d in n)if(n.hasOwnProperty(d)&&(a=n[d],a!=null))switch(d){case"selected":e.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:we(e,t,d,a,n,null)}return;case"dialog":oe("beforetoggle",e),oe("toggle",e),oe("cancel",e),oe("close",e);break;case"iframe":case"object":oe("load",e);break;case"video":case"audio":for(a=0;a<ii.length;a++)oe(ii[a],e);break;case"image":oe("error",e),oe("load",e);break;case"details":oe("toggle",e);break;case"embed":case"source":case"link":oe("error",e),oe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(v in n)if(n.hasOwnProperty(v)&&(a=n[v],a!=null))switch(v){case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:we(e,t,v,a,n,null)}return;default:if(pr(t)){for(S in n)n.hasOwnProperty(S)&&(a=n[S],a!==void 0&&hu(e,t,S,a,n,void 0));return}}for(s in n)n.hasOwnProperty(s)&&(a=n[s],a!=null&&we(e,t,s,a,n,null))}var vy={};function by(e,t,n,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var o=null,i=null,l=null,s=null,d=null,v=null,S=null;for(T in n){var E=n[T];if(n.hasOwnProperty(T)&&E!=null)switch(T){case"checked":break;case"value":break;case"defaultValue":d=E;default:a.hasOwnProperty(T)||we(e,t,T,null,a,E)}}for(var p in a){var T=a[p];if(E=n[p],a.hasOwnProperty(p)&&(T!=null||E!=null))switch(p){case"type":T!==E&&(he=!0),i=T;break;case"name":T!==E&&(he=!0),o=T;break;case"checked":T!==E&&(he=!0),v=T;break;case"defaultChecked":T!==E&&(he=!0),S=T;break;case"value":T!==E&&(he=!0),l=T;break;case"defaultValue":T!==E&&(he=!0),s=T;break;case"children":case"dangerouslySetInnerHTML":if(T!=null)throw Error(u(137,t));break;default:T!==E&&we(e,t,p,T,a,E)}}hr(e,l,s,d,v,S,i,o);return;case"select":T=l=s=p=null;for(i in n)if(d=n[i],n.hasOwnProperty(i)&&d!=null)switch(i){case"value":break;case"multiple":T=d;default:a.hasOwnProperty(i)||we(e,t,i,null,a,d)}for(o in a)if(i=a[o],d=n[o],a.hasOwnProperty(o)&&(i!=null||d!=null))switch(o){case"value":i!==d&&(he=!0),p=i;break;case"defaultValue":i!==d&&(he=!0),s=i;break;case"multiple":i!==d&&(he=!0),l=i;default:i!==d&&we(e,t,o,i,a,d)}t=s,n=l,a=T,p!=null?Ua(e,!!n,p,!1):!!a!=!!n&&(t!=null?Ua(e,!!n,t,!0):Ua(e,!!n,n?[]:"",!1));return;case"textarea":T=p=null;for(s in n)if(o=n[s],n.hasOwnProperty(s)&&o!=null&&!a.hasOwnProperty(s))switch(s){case"value":break;case"children":break;default:we(e,t,s,null,a,o)}for(l in a)if(o=a[l],i=n[l],a.hasOwnProperty(l)&&(o!=null||i!=null))switch(l){case"value":o!==i&&(he=!0),p=o;break;case"defaultValue":o!==i&&(he=!0),T=o;break;case"children":break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(u(91));break;default:o!==i&&we(e,t,l,o,a,i)}Tc(e,p,T);return;case"option":for(var U in n)if(p=n[U],n.hasOwnProperty(U)&&p!=null&&!a.hasOwnProperty(U))switch(U){case"selected":e.selected=!1;break;default:we(e,t,U,null,a,p)}for(d in a)if(p=a[d],T=n[d],a.hasOwnProperty(d)&&p!==T&&(p!=null||T!=null))switch(d){case"selected":p!==T&&(he=!0),e.selected=p&&typeof p!="function"&&typeof p!="symbol";break;default:we(e,t,d,p,a,T)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var H in n)p=n[H],n.hasOwnProperty(H)&&p!=null&&!a.hasOwnProperty(H)&&we(e,t,H,null,a,p);for(v in a)if(p=a[v],T=n[v],a.hasOwnProperty(v)&&p!==T&&(p!=null||T!=null))switch(v){case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(u(137,t));break;default:we(e,t,v,p,a,T)}return;default:if(pr(t)){for(var I in n)p=n[I],n.hasOwnProperty(I)&&p!==void 0&&!a.hasOwnProperty(I)&&hu(e,t,I,void 0,a,p);for(S in a)p=a[S],T=n[S],!a.hasOwnProperty(S)||p===T||p===void 0&&T===void 0||hu(e,t,S,p,a,T);return}}for(var y in n)p=n[y],n.hasOwnProperty(y)&&p!=null&&!a.hasOwnProperty(y)&&we(e,t,y,null,a,p);for(E in a)p=a[E],T=n[E],!a.hasOwnProperty(E)||p===T||p==null&&T==null||we(e,t,E,p,a,T)}function Nh(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function wy(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),a=0;a<n.length;a++){var o=n[a],i=o.transferSize,l=o.initiatorType,s=o.duration;if(i&&s&&Nh(l)){for(l=0,s=o.responseEnd,a+=1;a<n.length;a++){var d=n[a],v=d.startTime;if(v>s)break;var S=d.transferSize,E=d.initiatorType;S&&Nh(E)&&(d=d.responseEnd,l+=S*(d<s?1:(s-v)/(d-v)))}if(--a,t+=8*(i+l)/(o.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var mu=null,pu=null;function ri(e){return e.nodeType===9?e:e.ownerDocument}function Uh(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Mh(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Dh(e,t,n,a){return n=ri(n).createElement(e),n[Ke]=a,n[dt]=t,$e(n,e,t),Ve(n),n}function gu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var yu=null;function xy(){var e=window.event;return e&&e.type==="popstate"?e===yu?!1:(yu=e,!0):(yu=null,!1)}var vu=typeof setTimeout=="function"?setTimeout:void 0,Ty=typeof clearTimeout=="function"?clearTimeout:void 0,Hh=typeof Promise=="function"?Promise:void 0,Lh=typeof requestAnimationFrame=="function"?requestAnimationFrame:vu,Sy=typeof queueMicrotask=="function"?queueMicrotask:typeof Hh<"u"?function(e){return Hh.resolve(null).then(e).catch(ky)}:vu;function ky(e){setTimeout(function(){throw e})}function Kn(e){return e==="head"}function Bh(e,t){var n=t,a=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"||n==="/&"){if(a===0){e.removeChild(o),vo(t);return}a--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")a++;else if(n==="html")Eu(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,Eu(n);for(var i=n.firstChild;i;){var l=i.nextSibling,s=i.nodeName;i[Co]||s==="SCRIPT"||s==="STYLE"||s==="LINK"&&i.rel.toLowerCase()==="stylesheet"||n.removeChild(i),i=l}}else n==="body"&&Eu(e.ownerDocument.body);n=o}while(n);vo(t)}function jh(e,t){var n=e;e=0;do{var a=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=a}while(n)}function qh(e,t,n){if(t=CSS.escape(t)!==t?"r-"+btoa(t).replace(/=/g,""):t,e.style.viewTransitionName=t,n!=null&&(e.style.viewTransitionClass=n),n=getComputedStyle(e),n.display==="inline"){if(t=e.getClientRects(),t.length===1)var a=1;else for(var o=a=0;o<t.length;o++){var i=t[o];0<i.width&&0<i.height&&a++}a===1&&(e=e.style,e.display=t.length===1?"inline-block":"block",e.marginTop="-"+n.paddingTop,e.marginBottom="-"+n.paddingBottom)}}function Gh(e,t){e=e.style,t=t.style;var n=t!=null?t.hasOwnProperty("viewTransitionName")?t.viewTransitionName:t.hasOwnProperty("view-transition-name")?t["view-transition-name"]:null:null;e.viewTransitionName=n==null||typeof n=="boolean"?"":(""+n).trim(),n=t!=null?t.hasOwnProperty("viewTransitionClass")?t.viewTransitionClass:t.hasOwnProperty("view-transition-class")?t["view-transition-class"]:null:null,e.viewTransitionClass=n==null||typeof n=="boolean"?"":(""+n).trim(),e.display==="inline-block"&&(t==null?e.display=e.margin="":(n=t.display,e.display=n==null||typeof n=="boolean"?"":n,n=t.margin,n!=null?e.margin=n:(n=t.hasOwnProperty("marginTop")?t.marginTop:t["margin-top"],e.marginTop=n==null||typeof n=="boolean"?"":n,t=t.hasOwnProperty("marginBottom")?t.marginBottom:t["margin-bottom"],e.marginBottom=t==null||typeof t=="boolean"?"":t)))}function Cy(e,t,n){return n=n.ownerDocument.defaultView,{rect:e,abs:t.position==="absolute"||t.position==="fixed",clip:t.clipPath!=="none"||t.overflow!=="visible"||t.filter!=="none"||t.mask!=="none"||t.mask!=="none"||t.borderRadius!=="0px",view:0<=e.bottom&&0<=e.right&&e.top<=n.innerHeight&&e.left<=n.innerWidth}}function bu(e){var t=e.getBoundingClientRect(),n=getComputedStyle(e);return Cy(t,n,e)}function Ey(e){return e.documentElement.clientHeight}function zy(e){this.addEventListener("load",e),this.addEventListener("error",e)}function Ay(e,t,n,a,o,i,l,s,d){var v=t.nodeType===9?t:t.ownerDocument;try{var S=v.startViewTransition({update:function(){var p=v.defaultView,T=p.navigation&&p.navigation.transition,U=v.fonts.status;a();var H=[];if(U==="loaded"&&(Ey(v),v.fonts.status==="loading"&&H.push(v.fonts.ready)),U=H.length,e!==null)for(var I=e.suspenseyImages,y=0,h=0;h<I.length;h++){var x=I[h];if(!x.complete){var C=x.getBoundingClientRect();if(0<C.bottom&&0<C.right&&C.top<p.innerHeight&&C.left<p.innerWidth){if(y+=sm(x),y>Yl){H.length=U;break}x=new Promise(zy.bind(x)),H.push(x)}}}if(0<H.length)return p=Promise.race([Promise.all(H),new Promise(function(D){return setTimeout(D,500)})]).then(o,o),(T?Promise.allSettled([T.finished,p]):p).then(i,i);if(o(),T)return T.finished.then(i,i);i()},types:n});v.__reactViewTransition=S;var E=[];return S.ready.then(function(){for(var p=v.documentElement.getAnimations({subtree:!0}),T=0;T<p.length;T++){var U=p[T],H=U.effect,I=H.pseudoElement;if(I!=null&&I.startsWith("::view-transition")){E.push(U),U=H.getKeyframes();for(var y=I=void 0,h=!0,x=0;x<U.length;x++){var C=U[x],D=C.width;if(I===void 0)I=D;else if(I!==D){h=!1;break}if(D=C.height,y===void 0)y=D;else if(y!==D){h=!1;break}delete C.width,delete C.height,C.transform==="none"&&delete C.transform}h&&I!==void 0&&y!==void 0&&(H.setKeyframes(U),h=getComputedStyle(H.target,H.pseudoElement),h.width!==I||h.height!==y)&&(h=U[0],h.width=I,h.height=y,h=U[U.length-1],h.width=I,h.height=y,H.setKeyframes(U))}}l()},function(p){v.__reactViewTransition===S&&(v.__reactViewTransition=null);try{if(typeof p=="object"&&p!==null)switch(p.name){case"InvalidStateError":(p.message==="View transition was skipped because document visibility state is hidden."||p.message==="Skipping view transition because document visibility state has become hidden."||p.message==="Skipping view transition because viewport size changed."||p.message==="Transition was aborted because of invalid state")&&(p=null)}p!==null&&d(p)}finally{a(),o(),l()}}),S.finished.finally(function(){for(var p=0;p<E.length;p++)E[p].cancel();v.__reactViewTransition===S&&(v.__reactViewTransition=null),s()}),S}catch{return a(),o(),l(),null}}function Ca(e,t){this._scope=document.documentElement,this._selector="::view-transition-"+e+"("+t+")"}Ca.prototype.animate=function(e,t){return t=typeof t=="number"?{duration:t}:$({},t),t.pseudoElement=this._selector,this._scope.animate(e,t)},Ca.prototype.getAnimations=function(){for(var e=this._scope,t=this._selector,n=e.getAnimations({subtree:!0}),a=[],o=0;o<n.length;o++){var i=n[o].effect;i!==null&&i.target===e&&i.pseudoElement===t&&a.push(n[o])}return a},Ca.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function Yh(e){return{name:e,group:new Ca("group",e),imagePair:new Ca("image-pair",e),old:new Ca("old",e),new:new Ca("new",e)}}function At(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}At.prototype.addEventListener=function(e,t,n){var a=null,o=null;if(!(n!=null&&typeof n!="boolean"&&(a=n.signal||null,a!==null&&a.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var i=this._eventListeners;if(Qh(i,e,t,n)===-1){var l=this,s=t;n!=null&&typeof n!="boolean"&&n.once===!0&&(s=function(d){l.removeEventListener(e,t,n),typeof t=="function"?t.call(this,d):t.handleEvent(d)}),a!==null&&(o=l.removeEventListener.bind(l,e,t,n),a.addEventListener("abort",o,{once:!0}),o=a.removeEventListener.bind(a,"abort",o)),a=fo(n),i.push({type:e,listener:t,optionsOrUseCapture:n,attachedListener:s,cleanup:o}),w(this._fragmentFiber.child,!1,Oy,e,s,a)}this._eventListeners=i}};function Oy(e,t,n,a){return B(e).addEventListener(t,n,a),!1}At.prototype.removeEventListener=function(e,t,n){var a=this._eventListeners;if(a!==null&&(t=Qh(a,e,t,n),t!==-1)){var o=a[t];n=o.attachedListener;var i=o.cleanup;o=fo(o.optionsOrUseCapture),w(this._fragmentFiber.child,!1,_y,e,n,o),a.splice(t,1),i!==null&&i()}};function _y(e,t,n,a){return B(e).removeEventListener(t,n,a),!1}function fo(e){return e!=null&&typeof e!="boolean"&&(e.once===!0||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function Vh(e){return e==null?"c=0":typeof e=="boolean"?"c="+(e?"1":"0"):"c="+(e.capture?"1":"0")}function Qh(e,t,n,a){if(e.length===0)return-1;a=Vh(a);for(var o=0;o<e.length;o++){var i=e[o];if(i.type===t&&i.listener===n&&Vh(i.optionsOrUseCapture)===a)return o}return-1}At.prototype.dispatchEvent=function(e){var t=R(this._fragmentFiber);if(t===null)return!0;t=B(t);var n=this._eventListeners;if(n!==null&&0<n.length||!e.bubbles){var a=t.nodeType===9?t.createComment(""):document.createTextNode("");if(n)for(var o=0;o<n.length;o++){var i=n[o];a.addEventListener(i.type,i.attachedListener,fo(i.optionsOrUseCapture))}if(t.appendChild(a),e=a.dispatchEvent(e),n)for(o=0;o<n.length;o++)i=n[o],a.removeEventListener(i.type,i.attachedListener,fo(i.optionsOrUseCapture));return t.removeChild(a),e}return t.dispatchEvent(e)},At.prototype.focus=function(e){w(this._fragmentFiber.child,!0,Xh,e,void 0,void 0)};function Xh(e,t){return e.tag===6?!1:(e=B(e),Yy(e,t))}At.prototype.focusLast=function(e){var t=[];w(this._fragmentFiber.child,!0,wu,t,void 0,void 0);for(var n=t.length-1;0<=n&&!Xh(t[n],e);n--);};function wu(e,t){return t.push(e),!1}At.prototype.blur=function(){var e=R(this._fragmentFiber);e!==null&&(e=B(e),e=ri(e).activeElement,e!==null&&w(this._fragmentFiber.child,!1,Ry,e,void 0,void 0))};function Ry(e,t){return e.tag===6?!1:(e=B(e),e===t||e.contains(t)?(t.blur(),!0):!1)}At.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),w(this._fragmentFiber.child,!1,Ny,e,void 0,void 0)};function Ny(e,t){return e.tag===6||(e=B(e),t.observe(e)),!1}At.prototype.unobserveUsing=function(e){var t=this._observers;if(t!==null&&t.has(e)){t.delete(e),w(this._fragmentFiber.child,!1,Uy,e,void 0,void 0);for(var n=t=0;n<Xt.length;n++){var a=Xt[n];a.fragmentInstance===this&&a.observer===e?e.unobserve(a.instance):Xt[t++]=a}Xt.length=t}};function Uy(e,t){return e.tag===6||(e=B(e),t.unobserve(e)),!1}var Xt=[],xu=!1;function My(e,t,n){Xt.push({fragmentInstance:e,observer:t,instance:n}),xu||(xu=!0,Vy(function(){xu=!1;var a=Xt;Xt=[];for(var o=0;o<a.length;o++){var i=a[o];i.observer.unobserve(i.instance)}}))}At.prototype.getClientRects=function(){var e=[];return w(this._fragmentFiber.child,!1,Dy,e,void 0,void 0),e};function Dy(e,t){if(e.tag===6){e=e.stateNode;var n=e.ownerDocument.createRange();n.selectNodeContents(e),t.push.apply(t,n.getClientRects())}else e=B(e),t.push.apply(t,e.getClientRects());return!1}At.prototype.getRootNode=function(e){var t=R(this._fragmentFiber);return t===null?this:B(t).getRootNode(e)},At.prototype.compareDocumentPosition=function(e){var t=R(this._fragmentFiber);if(t===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var n=[];w(this._fragmentFiber.child,!1,wu,n,void 0,void 0);var a=B(t);if(n.length===0){if(n=a,ne(this._fragmentFiber)){e:{for(t=this._fragmentFiber.return;t!==null;){if(t.tag===4){t=t.stateNode.containerInfo;break e}if(t.tag===3||t.tag===5||t.tag===27)break;t=t.return}t=null}t!=null&&(n=t)}t=this._fragmentFiber;var o=a=n.compareDocumentPosition(e);return n===e?o=Node.DOCUMENT_POSITION_CONTAINS:a&Node.DOCUMENT_POSITION_CONTAINED_BY&&(n=F(t)[1],n===null?o=Node.DOCUMENT_POSITION_PRECEDING:(e=B(n).compareDocumentPosition(e),o=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),o|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}t=B(n[0]),o=B(n[n.length-1]);var i=ne(this._fragmentFiber)?t.parentElement:a;if(i==null)return Node.DOCUMENT_POSITION_DISCONNECTED;a=i.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY,i=i.compareDocumentPosition(o)&Node.DOCUMENT_POSITION_CONTAINED_BY;var l=t.compareDocumentPosition(e),s=o.compareDocumentPosition(e),d=l&Node.DOCUMENT_POSITION_CONTAINED_BY||s&Node.DOCUMENT_POSITION_CONTAINED_BY;return s=a&&i&&l&Node.DOCUMENT_POSITION_FOLLOWING&&s&Node.DOCUMENT_POSITION_PRECEDING,t=a&&t===e||i&&o===e||d||s?Node.DOCUMENT_POSITION_CONTAINED_BY:!a&&t===e||!i&&o===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:l,t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||Hy(t,this._fragmentFiber,n[0],n[n.length-1],e)?t:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function Hy(e,t,n,a,o){var i=oa(o);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(n=!!i)e:{for(;i!==null;){if(i.tag===7&&(i===t||i.alternate===t)){n=!0;break e}i=i.return}n=!1}return n}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(i===null)return i=o.ownerDocument,o===i||o===i.documentElement||o===i.body;e:{for(i=t,t=R(t);i!==null;){if(!(i.tag!==5&&i.tag!==3&&i.tag!==27||i!==t&&i.alternate!==t)){i=!0;break e}i=i.return}i=!1}return i}return e&Node.DOCUMENT_POSITION_PRECEDING?((t=!!i)&&!(t=i===n)&&(t=tt(n,i,it),t===null?t=!1:(w(t,!0,yt,i,n),i=ye,ye=null,t=i!==null)),t):e&Node.DOCUMENT_POSITION_FOLLOWING?((t=!!i)&&!(t=i===a)&&(t=tt(a,i,it),t===null?t=!1:(w(t,!0,Ye,i,a),i=ye,Se=ye=null,t=i!==null)),t):!1}function Ph(e,t){var n=e.ownerDocument.createRange();n.selectNodeContents(e),e=n.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,t?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}At.prototype.scrollIntoView=function(e){if(typeof e=="object")throw Error(u(566));var t=[];w(this._fragmentFiber.child,!1,wu,t,void 0,void 0);var n=e!==!1;if(t.length===0){var a=F(this._fragmentFiber);if(a=n?a[1]||a[0]||R(this._fragmentFiber):a[0]||a[1],a===null)return;if(a.tag===6){e=B(a),Ph(e,n);return}if(a=B(a),a.nodeType!==9){if(a.nodeType===11){n="host"in a?a.host:null,n!==null&&n.scrollIntoView(e);return}a.scrollIntoView(e)}}for(a=n?t.length-1:0;a!==(n?-1:t.length);){var o=t[a];o.tag===6?(o=B(o),Ph(o,n)):B(o).scrollIntoView(e),a+=n?-1:1}};function Ly(e,t){return e=B(e),Zh(e,t),!1}function Zh(e,t){e.reactFragments==null&&(e.reactFragments=new Set),e.reactFragments.add(t)}function Kh(e,t){var n=t._eventListeners;if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];e.addEventListener(o.type,o.attachedListener,fo(o.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(i){for(var l=0,s=0;s<Xt.length;s++){var d=Xt[s];(d.fragmentInstance!==t||d.observer!==i||d.instance!==e)&&(Xt[l++]=d)}Xt.length=l,i.observe(e)}),Zh(e,t))}function By(e,t){var n=t._eventListeners;if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];e.removeEventListener(o.type,o.attachedListener,fo(o.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(i){typeof i.rootMargin=="string"?My(t,i,e):i.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(t))}function Tu(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Tu(n),_i(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function jy(e,t,n,a){for(;e.nodeType===1;){var o=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[Co])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==o.rel||e.getAttribute("href")!==(o.href==null||o.href===""?null:o.href)||e.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin)||e.getAttribute("title")!==(o.title==null?null:o.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(o.src==null?null:o.src)||e.getAttribute("type")!==(o.type==null?null:o.type)||e.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=o.name==null?null:""+o.name;if(o.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=Lt(e.nextSibling),e===null)break}return null}function qy(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Lt(e.nextSibling),e===null))return null;return e}function Ih(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Lt(e.nextSibling),e===null))return null;return e}function Su(e){return e.data==="$?"||e.data==="$~"}function ku(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Gy(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var a=function(){t(),n.removeEventListener("DOMContentLoaded",a)};n.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function Lt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Cu=null;function Wh(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return Lt(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function Jh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function Yy(e,t){function n(){a=!0}if(e.ownerDocument.activeElement===e)return!0;var a=!1;try{e.ownerDocument.addEventListener("focus",n,!0),(e.focus||HTMLElement.prototype.focus).call(e,t)}finally{e.ownerDocument.removeEventListener("focus",n,!0)}return a}function Vy(e){Lh(function(){Lh(function(t){return e(t)})})}function Fh(e,t,n){switch(t=ri(n),e){case"html":if(e=t.documentElement,!e)throw Error(u(452));return e;case"head":if(e=t.head,!e)throw Error(u(453));return e;case"body":if(e=t.body,!e)throw Error(u(454));return e;default:throw Error(u(451))}}function $h(e,t,n){for(var a in n){var o=n[a];n.hasOwnProperty(a)&&o!=null&&we(e,t,a,null,vy,o)}n.dangerouslySetInnerHTML!=null&&(e.textContent=""),e.onclick===It&&(e.onclick=null),_i(e)}function Eu(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);_i(e)}var Bt=new Map,em=new Set;function si(e){if(typeof e.getRootNode=="function"){var t=e.getRootNode();if(t.nodeType===9||t.nodeType===11)return t}return e.nodeType===9?e:e.ownerDocument}var Sn=P.d;P.d={f:Qy,r:Xy,D:Py,C:Zy,L:Ky,m:Iy,X:Jy,S:Wy,M:Fy};function Qy(){var e=Sn.f(),t=Ul();return e||t}function Xy(e){var t=_a(e);t!==null&&t.tag===5&&t.type==="form"?tf(t):Sn.r(e)}var ho=typeof document>"u"?null:document;function tm(e,t,n){var a=ho;if(a&&typeof t=="string"&&t){var o=_t(t);o='link[rel="'+e+'"][href="'+o+'"]',typeof n=="string"&&(o+='[crossorigin="'+n+'"]'),em.has(o)||(em.add(o),e={rel:e,crossOrigin:n,href:t},a.querySelector(o)===null&&(t=a.createElement("link"),$e(t,"link",e),Ve(t),a.head.appendChild(t)))}}function Py(e){Sn.D(e),tm("dns-prefetch",e,null)}function Zy(e,t){Sn.C(e,t),tm("preconnect",e,t)}function Ky(e,t,n){Sn.L(e,t,n);var a=ho;if(a&&e&&t){var o='link[rel="preload"][as="'+_t(t)+'"]';t==="image"&&n&&n.imageSrcSet?(o+='[imagesrcset="'+_t(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(o+='[imagesizes="'+_t(n.imageSizes)+'"]')):o+='[href="'+_t(e)+'"]';var i=o;switch(t){case"style":i=mo(e);break;case"script":i=po(e)}if(!(Bt.has(i)||(e=$({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Bt.set(i,e),a.querySelector(o)!==null||t==="style"&&a.querySelector(ui(i))||t==="script"&&a.querySelector(ci(i))))){var l=a.createElement("link");$e(l,"link",e),t==="style"&&(l[Oi]=!0,l.onload=l.onerror=function(){hc(l)}),Ve(l),a.head.appendChild(l)}}}function Iy(e,t){Sn.m(e,t);var n=ho;if(n&&e){var a=t&&typeof t.as=="string"?t.as:"script",o='link[rel="modulepreload"][as="'+_t(a)+'"][href="'+_t(e)+'"]',i=o;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=po(e)}if(!Bt.has(i)&&(e=$({rel:"modulepreload",href:e},t),Bt.set(i,e),n.querySelector(o)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(ci(i)))return}a=n.createElement("link"),$e(a,"link",e),Ve(a),n.head.appendChild(a)}}}function Wy(e,t,n){Sn.S(e,t,n);var a=ho;if(a&&e){var o=Ra(a).hoistableStyles,i=mo(e);t=t||"default";var l=o.get(i);if(!l){var s={loading:0,preload:null};if(l=a.querySelector(ui(i)))s.loading=5;else{e=$({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Bt.get(i))&&zu(e,n);var d=l=a.createElement("link");Ve(d),$e(d,"link",e),d._p=new Promise(function(v,S){d.onload=v,d.onerror=S}),d.addEventListener("load",function(){s.loading|=1}),d.addEventListener("error",function(){s.loading|=2}),s.loading|=4,ql(l,t,a)}l={type:"stylesheet",instance:l,count:1,state:s},o.set(i,l)}}}function Jy(e,t){Sn.X(e,t);var n=ho;if(n&&e){var a=Ra(n).hoistableScripts,o=po(e),i=a.get(o);i||(i=n.querySelector(ci(o)),i||(e=$({src:e,async:!0},t),(t=Bt.get(o))&&Au(e,t),i=n.createElement("script"),Ve(i),$e(i,"link",e),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(o,i))}}function Fy(e,t){Sn.M(e,t);var n=ho;if(n&&e){var a=Ra(n).hoistableScripts,o=po(e),i=a.get(o);i||(i=n.querySelector(ci(o)),i||(e=$({src:e,async:!0,type:"module"},t),(t=Bt.get(o))&&Au(e,t),i=n.createElement("script"),Ve(i),$e(i,"link",e),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(o,i))}}function nm(e,t,n,a){var o=(o=Cn.current)?si(o):null;if(!o)throw Error(u(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(n=mo(n.href),t=Ra(o).hoistableStyles,a=t.get(n),a||(a={type:"style",instance:null,count:0,state:null},t.set(n,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=mo(n.href);var i=Ra(o).hoistableStyles,l=i.get(e);if(l||(o=o.ownerDocument||o,l={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,l),(i=o.querySelector(ui(e)))?i._p||(l.instance=i,l.state.loading=5):(i=Bt.get(e),i||(i={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Bt.set(e,i)),$y(o,e,i,l.state))),t&&a===null)throw Error(u(528,""));return l}if(t&&a!==null)throw Error(u(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(n=po(n),t=Ra(o).hoistableScripts,a=t.get(n),a||(a={type:"script",instance:null,count:0,state:null},t.set(n,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(u(444,e))}}function mo(e){return'href="'+_t(e)+'"'}function ui(e){return'link[rel="stylesheet"]['+e+"]"}function am(e){return $({},e,{"data-precedence":e.precedence,precedence:null})}function $y(e,t,n,a){if(t=e.querySelector('link[rel="preload"][as="style"]['+t+"]")){if(t[Oi]!==!0){a.loading=1;return}}else t=e.createElement("link"),t[Oi]=!0,t.onload=t.onerror=hc.bind(null,t),$e(t,"link",n),Ve(t),e.head.appendChild(t);a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2})}function po(e){return'[src="'+_t(e)+'"]'}function ci(e){return"script[async]"+e}function om(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+_t(n.href)+'"]');if(a)return t.instance=a,Ve(a),a;var o=$({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),Ve(a),$e(a,"style",o),ql(a,n.precedence,e),t.instance=a;case"stylesheet":o=mo(n.href);var i=e.querySelector(ui(o));if(i)return t.state.loading|=4,t.instance=i,Ve(i),i;a=am(n),(o=Bt.get(o))&&zu(a,o),i=(e.ownerDocument||e).createElement("link"),Ve(i);var l=i;return l._p=new Promise(function(s,d){l.onload=s,l.onerror=d}),$e(i,"link",a),t.state.loading|=4,ql(i,n.precedence,e),t.instance=i;case"script":return i=po(n.src),(o=e.querySelector(ci(i)))?(t.instance=o,Ve(o),o):(a=n,(o=Bt.get(i))&&(a=$({},n),Au(a,o)),e=e.ownerDocument||e,o=e.createElement("script"),Ve(o),$e(o,"link",a),e.head.appendChild(o),t.instance=o);case"void":return null;default:throw Error(u(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,ql(a,n.precedence,e));return t.instance}function ql(e,t,n){for(var a=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),o=a.length?a[a.length-1]:null,i=o,l=0;l<a.length;l++){var s=a[l];if(s.dataset.precedence===t)i=s;else if(i!==o)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function zu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Au(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Gl=null;function im(e,t,n){if(Gl===null){var a=new Map,o=Gl=new Map;o.set(n,a)}else o=Gl,a=o.get(n),a||(a=new Map,o.set(n,a));if(a.has(e))return a;for(a.set(e,null),n=n.getElementsByTagName(e),o=0;o<n.length;o++){var i=n[o];if(!(i[Co]||i[Ke]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var l=i.getAttribute(t)||"";l=e+l;var s=a.get(l);s?s.push(i):a.set(l,[i])}}return a}function Ou(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function ev(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function lm(e,t){return e==="img"&&t.src!=null&&t.src!==""&&t.onLoad==null&&t.loading!=="lazy"}function rm(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function sm(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function um(e,t){typeof t.decode=="function"&&(e.imgCount++,t.complete||(e.imgBytes+=sm(t),e.suspenseyImages.push(t)),e=av.bind(e),t.decode().then(e,e))}function tv(e,t,n,a){if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var o=mo(a.href),i=t.querySelector(ui(o));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=di.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=i,Ve(i);return}i=t.ownerDocument||t,a=am(a),(o=Bt.get(o))&&zu(a,o),i=i.createElement("link"),Ve(i);var l=i;l._p=new Promise(function(s,d){l.onload=s,l.onerror=d}),$e(i,"link",a),n.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=di.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var Yl=0;function nv(e,t){return e.stylesheets&&e.count===0&&Ql(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var a=setTimeout(function(){if(e.stylesheets&&Ql(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&Yl===0&&(Yl=62500*wy());var o=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Ql(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>Yl?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(o)}}:null}function cm(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)Ql(e,e.stylesheets);else if(e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}}function di(){this.count--,cm(this)}function av(){this.imgCount--,cm(this)}var Vl=null;function Ql(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Vl=new Map,t.forEach(ov,e),Vl=null,di.call(e))}function ov(e,t){if(!(t.state.loading&4)){var n=Vl.get(e);if(n)var a=n.get(null);else{n=new Map,Vl.set(e,n);for(var o=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<o.length;i++){var l=o[i];(l.nodeName==="LINK"||l.getAttribute("media")!=="not all")&&(n.set(l.dataset.precedence,l),a=l)}a&&n.set(null,a)}o=t.instance,l=o.getAttribute("data-precedence"),i=n.get(l)||a,i===a&&n.set(null,o),n.set(l,o),this.count++,a=di.bind(this),o.addEventListener("load",a),o.addEventListener("error",a),i?i.parentNode.insertBefore(o,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(o,e.firstChild)),t.state.loading|=4}}var go={$$typeof:Ue,Provider:null,Consumer:null,_currentValue:sn,_currentValue2:sn,_threadCount:0};function iv(e,t,n,a,o,i,l,s,d){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ur(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ur(0),this.hiddenUpdates=ur(null),this.identifierPrefix=a,this.onUncaughtError=o,this.onCaughtError=i,this.onRecoverableError=l,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=d,this.transitionTypes=null,this.incompleteTransitions=new Map}function dm(e,t,n,a,o,i,l,s,d,v,S,E){return e=new iv(e,t,n,l,d,v,S,E,s),t=1,i===!0&&(t|=24),i=ft(3,null,null,t),e.current=i,i.stateNode=e,t=Qr(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:a,isDehydrated:n,cache:t},Kr(i),e}function fm(e){return e?(e=Ga,e):Ga}function hm(e,t,n,a,o,i){o=fm(o),a.context===null?a.context=o:a.pendingContext=o,a=Hn(t),a.payload={element:n},i=i===void 0?null:i,i!==null&&(a.callback=i),n=Ln(e,a,t),n!==null&&(gt(n,e,t),Yo(n,e,t))}function mm(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function _u(e,t){mm(e,t),(e=e.alternate)&&mm(e,t)}function pm(e){if(e.tag===13||e.tag===31){var t=sa(e,67108864);t!==null&&gt(t,e,67108864),_u(e,67108864)}}function gm(e){if(e.tag===13||e.tag===31){var t=zt();t=cr(t);var n=sa(e,t);n!==null&&gt(n,e,t),_u(e,t)}}var yo=!0;function lv(e,t,n,a){var o=L.T;L.T=null;var i=P.p;try{P.p=2,Ru(e,t,n,a)}finally{P.p=i,L.T=o}}function rv(e,t,n,a){var o=L.T;L.T=null;var i=P.p;try{P.p=8,Ru(e,t,n,a)}finally{P.p=i,L.T=o}}function Ru(e,t,n,a){if(yo){var o=Nu(a);if(o===null)fu(e,t,a,Xl,n),vm(e,a);else if(uv(o,e,t,n,a))a.stopPropagation();else if(vm(e,a),t&4&&-1<sv.indexOf(e)){for(;o!==null;){var i=_a(o);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var l=aa(i.pendingLanes);if(l!==0){var s=i;for(s.pendingLanes|=2,s.entangledLanes|=2;l;){var d=1<<31-wt(l);s.entanglements[1]|=d,l&=~d}ln(i),(pe&6)===0&&(_l=vt()+500,oi(0))}}break;case 31:case 13:s=sa(i,2),s!==null&&gt(s,i,2),Ul(),_u(i,2)}if(i=Nu(a),i===null&&fu(e,t,a,Xl,n),i===o)break;o=i}o!==null&&a.stopPropagation()}else fu(e,t,a,null,n)}}function Nu(e){return e=yr(e),Uu(e)}var Xl=null;function Uu(e){if(Xl=null,e=oa(e),e!==null){var t=b(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=k(t),e!==null)return e;e=null}else if(n===31){if(e=A(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Xl=e,null}function ym(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(wp()){case tc:return 2;case nc:return 8;case ki:case xp:return 32;case ac:return 268435456;default:return 32}default:return 32}}var Mu=!1,In=null,Wn=null,Jn=null,fi=new Map,hi=new Map,Fn=[],sv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function vm(e,t){switch(e){case"focusin":case"focusout":In=null;break;case"dragenter":case"dragleave":Wn=null;break;case"mouseover":case"mouseout":Jn=null;break;case"pointerover":case"pointerout":fi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":hi.delete(t.pointerId)}}function mi(e,t,n,a,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:a,nativeEvent:i,targetContainers:[o]},t!==null&&(t=_a(t),t!==null&&pm(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function uv(e,t,n,a,o){switch(t){case"focusin":return In=mi(In,e,t,n,a,o),!0;case"dragenter":return Wn=mi(Wn,e,t,n,a,o),!0;case"mouseover":return Jn=mi(Jn,e,t,n,a,o),!0;case"pointerover":var i=o.pointerId;return fi.set(i,mi(fi.get(i)||null,e,t,n,a,o)),!0;case"gotpointercapture":return i=o.pointerId,hi.set(i,mi(hi.get(i)||null,e,t,n,a,o)),!0}return!1}function bm(e){var t=oa(e.target);if(t!==null){var n=b(t);if(n!==null){if(t=n.tag,t===13){if(t=k(n),t!==null){e.blockedOn=t,cc(e.priority,function(){gm(n)});return}}else if(t===31){if(t=A(n),t!==null){e.blockedOn=t,cc(e.priority,function(){gm(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Pl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Nu(e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);gr=a,n.target.dispatchEvent(a),gr=null}else return t=_a(n),t!==null&&pm(t),e.blockedOn=n,!1;t.shift()}return!0}function wm(e,t,n){Pl(e)&&n.delete(t)}function cv(){Mu=!1,In!==null&&Pl(In)&&(In=null),Wn!==null&&Pl(Wn)&&(Wn=null),Jn!==null&&Pl(Jn)&&(Jn=null),fi.forEach(wm),hi.forEach(wm)}function Zl(e,t){e.blockedOn===t&&(e.blockedOn=null,Mu||(Mu=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,cv)))}var Kl=null;function xm(e){Kl!==e&&(Kl=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Kl===e&&(Kl=null);for(var t=0;t<e.length;t+=3){var n=e[t],a=e[t+1],o=e[t+2];if(typeof a!="function"){if(Uu(a||n)===null)continue;break}var i=_a(n);i!==null&&(e.splice(t,3),t-=3,ps(i,{pending:!0,data:o,method:n.method,action:a},a,o))}}))}function vo(e){function t(d){return Zl(d,e)}In!==null&&Zl(In,e),Wn!==null&&Zl(Wn,e),Jn!==null&&Zl(Jn,e),fi.forEach(t),hi.forEach(t);for(var n=0;n<Fn.length;n++){var a=Fn[n];a.blockedOn===e&&(a.blockedOn=null)}for(;0<Fn.length&&(n=Fn[0],n.blockedOn===null);)bm(n),n.blockedOn===null&&Fn.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(a=0;a<n.length;a+=3){var o=n[a],i=n[a+1],l=o[dt]||null;if(typeof i=="function")l||xm(n);else if(l){var s=null;if(i&&i.hasAttribute("formAction")){if(o=i,l=i[dt]||null)s=l.formAction;else if(Uu(o)!==null)continue}else s=l.action;typeof s=="function"?n[a+1]=s:(n.splice(a,3),a-=3),xm(n)}}}function Tm(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(l){return o=l})},focusReset:"manual",scroll:"manual"})}function t(){o!==null&&(o(),o=null),a||setTimeout(n,20)}function n(){if(!a&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,o=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),o!==null&&(o(),o=null)}}}function Du(e){this._internalRoot=e}Il.prototype.render=Du.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(u(409));var n=t.current,a=zt();hm(n,a,e,t,null,null)},Il.prototype.unmount=Du.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;hm(e.current,2,null,e,null,null),Ul(),t[Oa]=null}};function Il(e){this._internalRoot=e}Il.prototype.unstable_scheduleHydration=function(e){if(e){var t=uc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Fn.length&&t!==0&&t<Fn[n].priority;n++);Fn.splice(n,0,e),n===0&&bm(e)}};var Sm=c.version;if(Sm!=="19.3.0")throw Error(u(527,Sm,"19.3.0"));P.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=N(t),e=e!==null?z(e):null,e=e===null?null:e.stateNode,e};var dv={bundleType:0,version:"19.3.0",rendererPackageName:"react-dom",currentDispatcherRef:L,reconcilerVersion:"19.3.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wl.isDisabled&&Wl.supportsFiber)try{To=Wl.inject(dv),bt=Wl}catch{}}return yi.createRoot=function(e,t){if(!g(e))throw Error(u(299));var n=!1,a="",o=ff,i=hf,l=mf;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=dm(e,1,!1,null,null,n,a,null,o,i,l,Tm),e[Oa]=t.current,du(e),new Du(t)},yi.hydrateRoot=function(e,t,n){if(!g(e))throw Error(u(299));var a=!1,o="",i=ff,l=hf,s=mf,d=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(i=n.onUncaughtError),n.onCaughtError!==void 0&&(l=n.onCaughtError),n.onRecoverableError!==void 0&&(s=n.onRecoverableError),n.formState!==void 0&&(d=n.formState)),t=dm(e,1,!0,t,n??null,a,o,d,i,l,s,Tm),t.context=fm(null),n=t.current,a=zt(),a=cr(a),o=Hn(a),o.callback=null,Ln(n,o,a),n=a,t.current.lanes=n,ko(t,n),ln(t),e[Oa]=t.current,du(e),new Il(t)},yi.version="19.3.0",yi}var Mm;function zv(){if(Mm)return Bu.exports;Mm=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(c){console.error(c)}}return r(),Bu.exports=Ev(),Bu.exports}var Xm=zv();const Pm=[{path:"NotifyPixaroma.md",source:`---
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
`}];function Zm(r){const c=r.trim();return c.startsWith('"')&&c.endsWith('"')||c.startsWith("'")&&c.endsWith("'")?c.slice(1,-1):c}function Av(r){const c=r.trim();return!c.startsWith("[")||!c.endsWith("]")?c?c.split(/\s+/):[]:c.slice(1,-1).split(",").map(f=>Zm(f)).filter(Boolean)}function Ov(r){if(!r.startsWith(`---
`))throw new Error("missing frontmatter");const c=r.indexOf(`
---`,4);if(c<0)throw new Error("unterminated frontmatter");const f={};for(const u of r.slice(4,c).split(`
`)){const g=u.indexOf(":");if(g<1)throw new Error(`malformed frontmatter line: ${u}`);const b=u.slice(0,g).trim(),k=u.slice(g+1).trim();f[b]=b==="tags"||b==="related"?Av(k):Zm(k)}return{meta:f,body:r.slice(c+4).trim()}}function _v(r){const c=/> \*\*Tip:\*\* (.+)/s.exec(r);return c==null?void 0:c[1]}function Rv(r){const c=r.split(/\n{2,}/).map(b=>b.trim()).filter(Boolean),f=[];let u={};const g=()=>{Object.keys(u).length&&f.push(u),u={}};for(const b of c){if(b.startsWith("> **Tip:**"))continue;if(b.startsWith("> ")){u.paragraphs=[...u.paragraphs||[],b.slice(2).trim()];continue}if(b.startsWith("## ")){g(),u.heading=b.slice(3).trim();continue}const k=b.split(`
`);if(k.every(O=>O.startsWith("- "))){u.bullets=[...u.bullets||[],...k.map(O=>O.slice(2))];continue}if(k.every(O=>/^\*\*.+\*\* — /.test(O))){u.definitions=[...u.definitions||[],...k.map(O=>{const N=/^\*\*(.+)\*\* — (.*)$/.exec(O);return{term:N[1],description:N[2]}})];continue}if(k.length>=2&&k[0].startsWith("| ")&&k[1].includes("---")){const O=N=>N.split("|").slice(1,-1).map(z=>z.trim());u.table={headers:O(k[0]),rows:k.slice(2).map(O)};continue}const A=/^\[([^\]]+)\]\(([^)]+)\)$/.exec(b);if(A){u.links=[...u.links||[],{label:A[1],url:A[2]}];continue}u.paragraphs=[...u.paragraphs||[],b]}return g(),f}function Nv(r){var b;const{meta:c,body:f}=Ov(r.source),u=["id","title","kind","category","order"].filter(k=>!c[k]);if(u.length)throw new Error(`${r.path}: missing ${u.join(", ")}`);if(!["guide","node","canvas"].includes(String(c.kind)))throw new Error(`${r.path}: invalid kind`);const g=f.split(/\n{2,}/).filter(k=>k.startsWith("> ")&&!k.startsWith("> **Tip:**"));return{id:String(c.id),kind:c.kind,title:String(c.title),tagline:((b=g[0])==null?void 0:b.slice(2))||"",category:String(c.category),order:Number(c.order),icon:String(c.icon||""),comfyClass:c.comfyClass?String(c.comfyClass):void 0,tags:Array.isArray(c.tags)?c.tags:[],related:Array.isArray(c.related)?c.related:[],sections:Rv(f),footer:_v(f)}}function Km(r=Pm){const c=r.map(Nv).sort((u,g)=>u.order-g.order||u.title.localeCompare(g.title)),f=new Set;for(const u of c){if(f.has(u.id))throw new Error(`duplicate help id: ${u.id}`);f.add(u.id)}return c}Km();const Im=Km(Pm);function Uv(r,c){const f=new Map(c.map(b=>[b.id,b])),u=r.map(b=>{const k=f.get(b.id);return k?{...b,comfyClass:k.comfyClass||b.comfyClass,controls:k.controls,sections:b.sections.length?b.sections:k.sections,tagline:b.tagline||k.tagline,footer:b.footer||k.footer}:b}),g=new Set(r.map(b=>b.id));return[...u,...c.filter(b=>!g.has(b.id))]}var Mv=Object.defineProperty,Wu=(r,c)=>Mv(r,"name",{value:c,configurable:!0});function Xu(r,c){if(typeof r=="function")return r(c);r!=null&&(r.current=c)}Wu(Xu,"setRef");function Wm(...r){return c=>{let f=!1;const u=r.map(g=>{const b=Xu(g,c);return!f&&typeof b=="function"&&(f=!0),b});if(f)return()=>{for(let g=0;g<u.length;g++){const b=u[g];typeof b=="function"?b():Xu(r[g],null)}}}}Wu(Wm,"composeRefs");function Jm(...r){return ze.useCallback(Wm(...r),r)}Wu(Jm,"useComposedRefs");var Dv=Object.defineProperty,Pt=(r,c)=>Dv(r,"name",{value:c,configurable:!0});function Fm(r){const c=ze.forwardRef((f,u)=>{let{children:g,...b}=f,k=null,A=!1;const O=[];Pu(g)&&typeof Jl=="function"&&(g=Jl(g._payload)),ze.Children.forEach(g,R=>{var ne;if(np(R)){A=!0;const F=R;let X="child"in F.props?F.props.child:F.props.children;Pu(X)&&typeof Jl=="function"&&(X=Jl(X._payload)),k=Bv(F,X),O.push((ne=k==null?void 0:k.props)==null?void 0:ne.children)}else O.push(R)}),k?k=ze.cloneElement(k,void 0,O):!A&&ze.Children.count(g)===1&&ze.isValidElement(g)&&(k=g);const N=k?tp(k):void 0,z=Jm(u,N);if(!k){if(g||g===0)throw new Error(A?Gv(r):qv(r));return g}const w=ep(b,k.props??{});return k.type!==ze.Fragment&&(w.ref=u?z:N),ze.cloneElement(k,w)});return c.displayName=`${r}.Slot`,c}Pt(Fm,"createSlot");var Hv=Fm("Slot"),$m=Symbol.for("radix.slottable");function Lv(r){const c=Pt(f=>"child"in f?f.children(f.child):f.children,"Slottable");return c.displayName=`${r}.Slottable`,c.__radixId=$m,c}Pt(Lv,"createSlottable");var Bv=Pt((r,c)=>{if("child"in r.props){const f=r.props.child;return ze.isValidElement(f)?ze.cloneElement(f,void 0,r.props.children(f.props.children)):null}return ze.isValidElement(c)?c:null},"getSlottableElementFromSlottable");function ep(r,c){const f={...c};for(const u in c){const g=r[u],b=c[u];/^on[A-Z]/.test(u)?g&&b?f[u]=(...A)=>{const O=b(...A);return g(...A),O}:g&&(f[u]=g):u==="style"?f[u]={...g,...b}:u==="className"&&(f[u]=[g,b].filter(Boolean).join(" "))}return{...r,...f}}Pt(ep,"mergeProps");function tp(r){var u,g;let c=(u=Object.getOwnPropertyDescriptor(r.props,"ref"))==null?void 0:u.get,f=c&&"isReactWarning"in c&&c.isReactWarning;return f?r.ref:(c=(g=Object.getOwnPropertyDescriptor(r,"ref"))==null?void 0:g.get,f=c&&"isReactWarning"in c&&c.isReactWarning,f?r.props.ref:r.props.ref||r.ref)}Pt(tp,"getElementRef");function np(r){return ze.isValidElement(r)&&typeof r.type=="function"&&"__radixId"in r.type&&r.type.__radixId===$m}Pt(np,"isSlottable");var jv=Symbol.for("react.lazy");function Pu(r){return r!=null&&typeof r=="object"&&"$$typeof"in r&&r.$$typeof===jv&&"_payload"in r&&ap(r._payload)}Pt(Pu,"isLazyComponent");function ap(r){return typeof r=="object"&&r!==null&&"then"in r}Pt(ap,"isPromiseLike");var qv=Pt(r=>`${r} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`,"createSlotError"),Gv=Pt(r=>`${r} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`,"createSlottableError"),Jl=xv[" use ".trim().toString()];function op(r){var c,f,u="";if(typeof r=="string"||typeof r=="number")u+=r;else if(typeof r=="object")if(Array.isArray(r)){var g=r.length;for(c=0;c<g;c++)r[c]&&(f=op(r[c]))&&(u&&(u+=" "),u+=f)}else for(f in r)r[f]&&(u&&(u+=" "),u+=f);return u}function ip(){for(var r,c,f=0,u="",g=arguments.length;f<g;f++)(r=arguments[f])&&(c=op(r))&&(u&&(u+=" "),u+=c);return u}const Dm=r=>typeof r=="boolean"?`${r}`:r===0?"0":r,Hm=ip,Yv=(r,c)=>f=>{var u;if((c==null?void 0:c.variants)==null)return Hm(r,f==null?void 0:f.class,f==null?void 0:f.className);const{variants:g,defaultVariants:b}=c,k=Object.keys(g).map(N=>{const z=f==null?void 0:f[N],w=b==null?void 0:b[N];if(z===null)return null;const R=Dm(z)||Dm(w);return g[N][R]}),A=f&&Object.entries(f).reduce((N,z)=>{let[w,R]=z;return R===void 0||(N[w]=R),N},{}),O=c==null||(u=c.compoundVariants)===null||u===void 0?void 0:u.reduce((N,z)=>{let{class:w,className:R,...ne}=z;return Object.entries(ne).every(F=>{let[X,B]=F;return Array.isArray(B)?B.includes({...b,...A}[X]):{...b,...A}[X]===B})?[...N,w,R]:N},[]);return Hm(r,k,O,f==null?void 0:f.class,f==null?void 0:f.className)},Ju="-",Vv=r=>{const c=Xv(r),{conflictingClassGroups:f,conflictingClassGroupModifiers:u}=r;return{getClassGroupId:k=>{const A=k.split(Ju);return A[0]===""&&A.length!==1&&A.shift(),lp(A,c)||Qv(k)},getConflictingClassGroupIds:(k,A)=>{const O=f[k]||[];return A&&u[k]?[...O,...u[k]]:O}}},lp=(r,c)=>{var k;if(r.length===0)return c.classGroupId;const f=r[0],u=c.nextPart.get(f),g=u?lp(r.slice(1),u):void 0;if(g)return g;if(c.validators.length===0)return;const b=r.join(Ju);return(k=c.validators.find(({validator:A})=>A(b)))==null?void 0:k.classGroupId},Lm=/^\[(.+)\]$/,Qv=r=>{if(Lm.test(r)){const c=Lm.exec(r)[1],f=c==null?void 0:c.substring(0,c.indexOf(":"));if(f)return"arbitrary.."+f}},Xv=r=>{const{theme:c,prefix:f}=r,u={nextPart:new Map,validators:[]};return Zv(Object.entries(r.classGroups),f).forEach(([b,k])=>{Zu(k,u,b,c)}),u},Zu=(r,c,f,u)=>{r.forEach(g=>{if(typeof g=="string"){const b=g===""?c:Bm(c,g);b.classGroupId=f;return}if(typeof g=="function"){if(Pv(g)){Zu(g(u),c,f,u);return}c.validators.push({validator:g,classGroupId:f});return}Object.entries(g).forEach(([b,k])=>{Zu(k,Bm(c,b),f,u)})})},Bm=(r,c)=>{let f=r;return c.split(Ju).forEach(u=>{f.nextPart.has(u)||f.nextPart.set(u,{nextPart:new Map,validators:[]}),f=f.nextPart.get(u)}),f},Pv=r=>r.isThemeGetter,Zv=(r,c)=>c?r.map(([f,u])=>{const g=u.map(b=>typeof b=="string"?c+b:typeof b=="object"?Object.fromEntries(Object.entries(b).map(([k,A])=>[c+k,A])):b);return[f,g]}):r,Kv=r=>{if(r<1)return{get:()=>{},set:()=>{}};let c=0,f=new Map,u=new Map;const g=(b,k)=>{f.set(b,k),c++,c>r&&(c=0,u=f,f=new Map)};return{get(b){let k=f.get(b);if(k!==void 0)return k;if((k=u.get(b))!==void 0)return g(b,k),k},set(b,k){f.has(b)?f.set(b,k):g(b,k)}}},rp="!",Iv=r=>{const{separator:c,experimentalParseClassName:f}=r,u=c.length===1,g=c[0],b=c.length,k=A=>{const O=[];let N=0,z=0,w;for(let B=0;B<A.length;B++){let ye=A[B];if(N===0){if(ye===g&&(u||A.slice(B,B+b)===c)){O.push(A.slice(z,B)),z=B+b;continue}if(ye==="/"){w=B;continue}}ye==="["?N++:ye==="]"&&N--}const R=O.length===0?A:A.substring(z),ne=R.startsWith(rp),F=ne?R.substring(1):R,X=w&&w>z?w-z:void 0;return{modifiers:O,hasImportantModifier:ne,baseClassName:F,maybePostfixModifierPosition:X}};return f?A=>f({className:A,parseClassName:k}):k},Wv=r=>{if(r.length<=1)return r;const c=[];let f=[];return r.forEach(u=>{u[0]==="["?(c.push(...f.sort(),u),f=[]):f.push(u)}),c.push(...f.sort()),c},Jv=r=>({cache:Kv(r.cacheSize),parseClassName:Iv(r),...Vv(r)}),Fv=/\s+/,$v=(r,c)=>{const{parseClassName:f,getClassGroupId:u,getConflictingClassGroupIds:g}=c,b=[],k=r.trim().split(Fv);let A="";for(let O=k.length-1;O>=0;O-=1){const N=k[O],{modifiers:z,hasImportantModifier:w,baseClassName:R,maybePostfixModifierPosition:ne}=f(N);let F=!!ne,X=u(F?R.substring(0,ne):R);if(!X){if(!F){A=N+(A.length>0?" "+A:A);continue}if(X=u(R),!X){A=N+(A.length>0?" "+A:A);continue}F=!1}const B=Wv(z).join(":"),ye=w?B+rp:B,Se=ye+X;if(b.includes(Se))continue;b.push(Se);const yt=g(X,F);for(let Ye=0;Ye<yt.length;++Ye){const it=yt[Ye];b.push(ye+it)}A=N+(A.length>0?" "+A:A)}return A};function eb(){let r=0,c,f,u="";for(;r<arguments.length;)(c=arguments[r++])&&(f=sp(c))&&(u&&(u+=" "),u+=f);return u}const sp=r=>{if(typeof r=="string")return r;let c,f="";for(let u=0;u<r.length;u++)r[u]&&(c=sp(r[u]))&&(f&&(f+=" "),f+=c);return f};function tb(r,...c){let f,u,g,b=k;function k(O){const N=c.reduce((z,w)=>w(z),r());return f=Jv(N),u=f.cache.get,g=f.cache.set,b=A,A(O)}function A(O){const N=u(O);if(N)return N;const z=$v(O,f);return g(O,z),z}return function(){return b(eb.apply(null,arguments))}}const Ae=r=>{const c=f=>f[r]||[];return c.isThemeGetter=!0,c},up=/^\[(?:([a-z-]+):)?(.+)\]$/i,nb=/^\d+\/\d+$/,ab=new Set(["px","full","screen"]),ob=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,ib=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,lb=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,rb=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,sb=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,kn=r=>bo(r)||ab.has(r)||nb.test(r),ea=r=>wo(r,"length",gb),bo=r=>!!r&&!Number.isNaN(Number(r)),Yu=r=>wo(r,"number",bo),vi=r=>!!r&&Number.isInteger(Number(r)),ub=r=>r.endsWith("%")&&bo(r.slice(0,-1)),W=r=>up.test(r),ta=r=>ob.test(r),cb=new Set(["length","size","percentage"]),db=r=>wo(r,cb,cp),fb=r=>wo(r,"position",cp),hb=new Set(["image","url"]),mb=r=>wo(r,hb,vb),pb=r=>wo(r,"",yb),bi=()=>!0,wo=(r,c,f)=>{const u=up.exec(r);return u?u[1]?typeof c=="string"?u[1]===c:c.has(u[1]):f(u[2]):!1},gb=r=>ib.test(r)&&!lb.test(r),cp=()=>!1,yb=r=>rb.test(r),vb=r=>sb.test(r),bb=()=>{const r=Ae("colors"),c=Ae("spacing"),f=Ae("blur"),u=Ae("brightness"),g=Ae("borderColor"),b=Ae("borderRadius"),k=Ae("borderSpacing"),A=Ae("borderWidth"),O=Ae("contrast"),N=Ae("grayscale"),z=Ae("hueRotate"),w=Ae("invert"),R=Ae("gap"),ne=Ae("gradientColorStops"),F=Ae("gradientColorStopPositions"),X=Ae("inset"),B=Ae("margin"),ye=Ae("opacity"),Se=Ae("padding"),yt=Ae("saturate"),Ye=Ae("scale"),it=Ae("sepia"),tt=Ae("skew"),$=Ae("space"),re=Ae("translate"),ct=()=>["auto","contain","none"],nt=()=>["auto","hidden","clip","visible","scroll"],at=()=>["auto",W,c],te=()=>[W,c],jt=()=>["",kn,ea],Ot=()=>["auto",bo,W],Ue=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],M=()=>["solid","dashed","dotted","double","none"],Y=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],V=()=>["start","end","center","between","around","evenly","stretch"],ue=()=>["","0",W],ce=()=>["auto","avoid","all","avoid-page","page","left","right","column"],Me=()=>[bo,W];return{cacheSize:500,separator:":",theme:{colors:[bi],spacing:[kn,ea],blur:["none","",ta,W],brightness:Me(),borderColor:[r],borderRadius:["none","","full",ta,W],borderSpacing:te(),borderWidth:jt(),contrast:Me(),grayscale:ue(),hueRotate:Me(),invert:ue(),gap:te(),gradientColorStops:[r],gradientColorStopPositions:[ub,ea],inset:at(),margin:at(),opacity:Me(),padding:te(),saturate:Me(),scale:Me(),sepia:ue(),skew:Me(),space:te(),translate:te()},classGroups:{aspect:[{aspect:["auto","square","video",W]}],container:["container"],columns:[{columns:[ta]}],"break-after":[{"break-after":ce()}],"break-before":[{"break-before":ce()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...Ue(),W]}],overflow:[{overflow:nt()}],"overflow-x":[{"overflow-x":nt()}],"overflow-y":[{"overflow-y":nt()}],overscroll:[{overscroll:ct()}],"overscroll-x":[{"overscroll-x":ct()}],"overscroll-y":[{"overscroll-y":ct()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[X]}],"inset-x":[{"inset-x":[X]}],"inset-y":[{"inset-y":[X]}],start:[{start:[X]}],end:[{end:[X]}],top:[{top:[X]}],right:[{right:[X]}],bottom:[{bottom:[X]}],left:[{left:[X]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",vi,W]}],basis:[{basis:at()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",W]}],grow:[{grow:ue()}],shrink:[{shrink:ue()}],order:[{order:["first","last","none",vi,W]}],"grid-cols":[{"grid-cols":[bi]}],"col-start-end":[{col:["auto",{span:["full",vi,W]},W]}],"col-start":[{"col-start":Ot()}],"col-end":[{"col-end":Ot()}],"grid-rows":[{"grid-rows":[bi]}],"row-start-end":[{row:["auto",{span:[vi,W]},W]}],"row-start":[{"row-start":Ot()}],"row-end":[{"row-end":Ot()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",W]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",W]}],gap:[{gap:[R]}],"gap-x":[{"gap-x":[R]}],"gap-y":[{"gap-y":[R]}],"justify-content":[{justify:["normal",...V()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...V(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...V(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[Se]}],px:[{px:[Se]}],py:[{py:[Se]}],ps:[{ps:[Se]}],pe:[{pe:[Se]}],pt:[{pt:[Se]}],pr:[{pr:[Se]}],pb:[{pb:[Se]}],pl:[{pl:[Se]}],m:[{m:[B]}],mx:[{mx:[B]}],my:[{my:[B]}],ms:[{ms:[B]}],me:[{me:[B]}],mt:[{mt:[B]}],mr:[{mr:[B]}],mb:[{mb:[B]}],ml:[{ml:[B]}],"space-x":[{"space-x":[$]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[$]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",W,c]}],"min-w":[{"min-w":[W,c,"min","max","fit"]}],"max-w":[{"max-w":[W,c,"none","full","min","max","fit","prose",{screen:[ta]},ta]}],h:[{h:[W,c,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[W,c,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[W,c,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[W,c,"auto","min","max","fit"]}],"font-size":[{text:["base",ta,ea]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",Yu]}],"font-family":[{font:[bi]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",W]}],"line-clamp":[{"line-clamp":["none",bo,Yu]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",kn,W]}],"list-image":[{"list-image":["none",W]}],"list-style-type":[{list:["none","disc","decimal",W]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[r]}],"placeholder-opacity":[{"placeholder-opacity":[ye]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[r]}],"text-opacity":[{"text-opacity":[ye]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...M(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",kn,ea]}],"underline-offset":[{"underline-offset":["auto",kn,W]}],"text-decoration-color":[{decoration:[r]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:te()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",W]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",W]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[ye]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...Ue(),fb]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",db]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},mb]}],"bg-color":[{bg:[r]}],"gradient-from-pos":[{from:[F]}],"gradient-via-pos":[{via:[F]}],"gradient-to-pos":[{to:[F]}],"gradient-from":[{from:[ne]}],"gradient-via":[{via:[ne]}],"gradient-to":[{to:[ne]}],rounded:[{rounded:[b]}],"rounded-s":[{"rounded-s":[b]}],"rounded-e":[{"rounded-e":[b]}],"rounded-t":[{"rounded-t":[b]}],"rounded-r":[{"rounded-r":[b]}],"rounded-b":[{"rounded-b":[b]}],"rounded-l":[{"rounded-l":[b]}],"rounded-ss":[{"rounded-ss":[b]}],"rounded-se":[{"rounded-se":[b]}],"rounded-ee":[{"rounded-ee":[b]}],"rounded-es":[{"rounded-es":[b]}],"rounded-tl":[{"rounded-tl":[b]}],"rounded-tr":[{"rounded-tr":[b]}],"rounded-br":[{"rounded-br":[b]}],"rounded-bl":[{"rounded-bl":[b]}],"border-w":[{border:[A]}],"border-w-x":[{"border-x":[A]}],"border-w-y":[{"border-y":[A]}],"border-w-s":[{"border-s":[A]}],"border-w-e":[{"border-e":[A]}],"border-w-t":[{"border-t":[A]}],"border-w-r":[{"border-r":[A]}],"border-w-b":[{"border-b":[A]}],"border-w-l":[{"border-l":[A]}],"border-opacity":[{"border-opacity":[ye]}],"border-style":[{border:[...M(),"hidden"]}],"divide-x":[{"divide-x":[A]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[A]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[ye]}],"divide-style":[{divide:M()}],"border-color":[{border:[g]}],"border-color-x":[{"border-x":[g]}],"border-color-y":[{"border-y":[g]}],"border-color-s":[{"border-s":[g]}],"border-color-e":[{"border-e":[g]}],"border-color-t":[{"border-t":[g]}],"border-color-r":[{"border-r":[g]}],"border-color-b":[{"border-b":[g]}],"border-color-l":[{"border-l":[g]}],"divide-color":[{divide:[g]}],"outline-style":[{outline:["",...M()]}],"outline-offset":[{"outline-offset":[kn,W]}],"outline-w":[{outline:[kn,ea]}],"outline-color":[{outline:[r]}],"ring-w":[{ring:jt()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[r]}],"ring-opacity":[{"ring-opacity":[ye]}],"ring-offset-w":[{"ring-offset":[kn,ea]}],"ring-offset-color":[{"ring-offset":[r]}],shadow:[{shadow:["","inner","none",ta,pb]}],"shadow-color":[{shadow:[bi]}],opacity:[{opacity:[ye]}],"mix-blend":[{"mix-blend":[...Y(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":Y()}],filter:[{filter:["","none"]}],blur:[{blur:[f]}],brightness:[{brightness:[u]}],contrast:[{contrast:[O]}],"drop-shadow":[{"drop-shadow":["","none",ta,W]}],grayscale:[{grayscale:[N]}],"hue-rotate":[{"hue-rotate":[z]}],invert:[{invert:[w]}],saturate:[{saturate:[yt]}],sepia:[{sepia:[it]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[f]}],"backdrop-brightness":[{"backdrop-brightness":[u]}],"backdrop-contrast":[{"backdrop-contrast":[O]}],"backdrop-grayscale":[{"backdrop-grayscale":[N]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[z]}],"backdrop-invert":[{"backdrop-invert":[w]}],"backdrop-opacity":[{"backdrop-opacity":[ye]}],"backdrop-saturate":[{"backdrop-saturate":[yt]}],"backdrop-sepia":[{"backdrop-sepia":[it]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[k]}],"border-spacing-x":[{"border-spacing-x":[k]}],"border-spacing-y":[{"border-spacing-y":[k]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",W]}],duration:[{duration:Me()}],ease:[{ease:["linear","in","out","in-out",W]}],delay:[{delay:Me()}],animate:[{animate:["none","spin","ping","pulse","bounce",W]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[Ye]}],"scale-x":[{"scale-x":[Ye]}],"scale-y":[{"scale-y":[Ye]}],rotate:[{rotate:[vi,W]}],"translate-x":[{"translate-x":[re]}],"translate-y":[{"translate-y":[re]}],"skew-x":[{"skew-x":[tt]}],"skew-y":[{"skew-y":[tt]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",W]}],accent:[{accent:["auto",r]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",W]}],"caret-color":[{caret:[r]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":te()}],"scroll-mx":[{"scroll-mx":te()}],"scroll-my":[{"scroll-my":te()}],"scroll-ms":[{"scroll-ms":te()}],"scroll-me":[{"scroll-me":te()}],"scroll-mt":[{"scroll-mt":te()}],"scroll-mr":[{"scroll-mr":te()}],"scroll-mb":[{"scroll-mb":te()}],"scroll-ml":[{"scroll-ml":te()}],"scroll-p":[{"scroll-p":te()}],"scroll-px":[{"scroll-px":te()}],"scroll-py":[{"scroll-py":te()}],"scroll-ps":[{"scroll-ps":te()}],"scroll-pe":[{"scroll-pe":te()}],"scroll-pt":[{"scroll-pt":te()}],"scroll-pr":[{"scroll-pr":te()}],"scroll-pb":[{"scroll-pb":te()}],"scroll-pl":[{"scroll-pl":te()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",W]}],fill:[{fill:[r,"none"]}],"stroke-w":[{stroke:[kn,ea,Yu]}],stroke:[{stroke:[r,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},wb=tb(bb);function dp(...r){return wb(ip(r))}const xb=Yv("px-button",{variants:{variant:{default:"px-button-default",secondary:"px-button-secondary",ghost:"px-button-ghost",outline:"px-button-outline"},size:{default:"px-button-default-size",sm:"px-button-sm",icon:"px-button-icon"}},defaultVariants:{variant:"default",size:"default"}}),fp=ze.forwardRef(({className:r,variant:c,size:f,asChild:u=!1,...g},b)=>{const k=u?Hv:"button";return J.jsx(k,{className:dp(xb({variant:c,size:f,className:r})),ref:b,...g})});fp.displayName="Button";const Tb=ze.forwardRef(({className:r,...c},f)=>J.jsx("input",{className:dp("px-input",r),ref:f,...c}));Tb.displayName="Input";function jm(r,c){return new Error(`${r}: invalid relative path ${JSON.stringify(c)}`)}function Sb(r,c,f){if(!c||c.startsWith("/")||/^[A-Za-z]:[\\/]/.test(c)||c.startsWith("\\\\")||c.includes("\\"))throw jm(r,c);const u=c.split("/");if(u.some(g=>!g||g==="."||g==="..")||c.endsWith("/")||!c.endsWith(f))throw jm(r,c);return u}function kb(r){const c=Sb("sourcePath",r,".md");return{id:r.slice(0,-3),folders:c.slice(0,-1),filename:c.at(-1)}}function Cb(r,c){if(c===void 0)return[];if(!Array.isArray(c))throw new Error(`${r}: tags must be a list`);const f=[],u=new Set;for(const g of c){if(typeof g!="string")throw new Error(`${r}: tags must contain only strings`);const b=g.trim();b&&!u.has(b.toLocaleLowerCase())&&(u.add(b.toLocaleLowerCase()),f.push(b))}return f}function Ku(r){if(!r||typeof r!="object")throw new Error("record must be an object");const c=r,f=c.sourcePath;if(typeof f!="string")throw new Error("sourcePath must be a string");const u=kb(f);if(typeof c.id!="string"||c.id!==u.id)throw new Error(`${f}: id must match sourcePath`);if(typeof c.name!="string"||!c.name.trim())throw new Error(`${f}: name must be a non-empty string`);if(c.body!==void 0&&typeof c.body!="string")throw new Error(`${f}: body must be a string`);if(c.kind!=="text"&&c.kind!=="list")throw new Error(`${f}: kind must be text or list`);if(c.prefix!==void 0&&!["@","#","$","&"].includes(String(c.prefix)))throw new Error(`${f}: prefix must be @, #, $, or &`);const g=Cb(f,c.tags);if(c.unknownFrontmatter!==void 0&&(!Array.isArray(c.unknownFrontmatter)||c.unknownFrontmatter.some(b=>!b||typeof b!="object"||typeof b.key!="string")))throw new Error(`${f}: unknownFrontmatter is invalid`);return{id:u.id,sourcePath:f,name:c.name.trim(),tags:g,body:c.body??"",category:u.folders[0]??"",folders:u.folders,filename:u.filename,kind:c.kind,...c.prefix===void 0?{}:{prefix:c.prefix},...c.unknownFrontmatter===void 0?{}:{unknownFrontmatter:c.unknownFrontmatter}}}function Eb(r){var c;try{if(typeof((c=km)==null?void 0:c.apiURL)=="function")return km.apiURL(r)}catch{}return r}function zb(r){return Eb(r)}const Ab="pixaroma:prompt-library:updated";function Fl(r){typeof window>"u"||window.dispatchEvent(new CustomEvent(Ab,{detail:{library:r}}))}class Fu extends Error{constructor(f,u,g,b){super(f);pi(this,"route");pi(this,"status");pi(this,"code");this.name="PromptLibraryApiError",this.route=u,this.status=g,this.code=b}}const Ob="/pixaroma/api/prompt/library/markdown";function _b(r,c){if(r&&typeof r=="object"){const f=r,u=f.error;if(typeof u=="string"&&u.trim())return{message:u.trim(),code:typeof f.code=="string"?f.code:void 0};if(u&&typeof u=="object"){const g=u;if(typeof g.message=="string"&&g.message.trim())return{message:g.message.trim(),code:typeof g.code=="string"?g.code:void 0}}for(const g of["message","detail","details"])if(typeof f[g]=="string"&&f[g].trim())return{message:f[g].trim()}}return typeof r=="string"&&r.trim()?{message:r.trim()}:{message:`Prompt library request failed (${c})`}}async function Rb(r,c){const f=await r.text();if(!f.trim())return null;try{return JSON.parse(f)}catch{throw new Fu(r.ok?"Prompt library returned invalid JSON":`Prompt library request failed with a non-JSON response (${r.status})`,c,r.status,"invalid_json")}}function Ea(r,c){return new Fu(`Invalid prompt library response: ${r}`,c,void 0,"invalid_response")}function Vu(r,c){if(!r||typeof r!="object")throw Ea("response must be an object",c);const f=r;if(f.version!==1)throw Ea("version must be 1",c);if(!Array.isArray(f.prompts))throw Ea("prompts must be an array",c);const u=[],g=[],b=new Map,k=new Set;for(const[A,O]of f.prompts.entries()){const N=O&&typeof O=="object"&&typeof O.sourcePath=="string"?O.sourcePath:`prompts[${A}]`;try{const z=Ku(O),w=z.id.toLocaleLowerCase(),R=b.get(w);R?(k.add(w),g.push({sourcePath:R.sourcePath,message:`duplicate id "${w}" conflicts with ${z.sourcePath}`}),g.push({sourcePath:z.sourcePath,message:`duplicate id "${w}" conflicts with ${R.sourcePath}`})):k.has(w)||b.set(w,z)}catch(z){g.push({sourcePath:N,message:z instanceof Error?z.message:String(z)})}}for(const A of b.values())k.has(A.id.toLocaleLowerCase())||u.push(A);return{library:{version:1,prompts:u},errors:g}}function hp(r={}){const c=r.baseUrl??Ob,f=r.fetchImpl??fetch;let u=0,g=null;async function b(k,A){const O=await f(zb(k),A),N=await Rb(O,k);if(!O.ok){const z=_b(N,O.status);throw new Fu(z.message,k,O.status,z.code)}return N}return{async load(k){const A=++u,O=c,N=Vu(await b(O,{signal:k}),O);return A===u&&(g=N.library,Fl(N.library)),N},async refresh(k){const A=++u,O=`${c}/refresh`,N=Vu(await b(O,{method:"POST",signal:k}),O);return A===u&&(g=N.library,Fl(N.library)),N},async get(k,A){const O=`${c}/${encodeURIComponent(k)}`,N=await b(O,{signal:A});if(!N||typeof N!="object"||!("prompt"in N))throw Ea("prompt must be an object",O);try{return Ku(N.prompt)}catch(z){throw Ea(z instanceof Error?z.message:String(z),O)}},async save(k,A){const O=c,N=await b(O,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(k),signal:A}),z=N&&typeof N=="object"?N:{};if(!("prompt"in z))throw Ea("prompt must be an object",O);try{const w=Ku(z.prompt),R=z.library?Vu(z.library,O).library:{version:1,prompts:[...((g==null?void 0:g.prompts)??[]).filter(ne=>ne.id!==w.id&&ne.id!==(k.previous_id??"")),w]};return g=R,Fl(R),w}catch(w){throw Ea(w instanceof Error?w.message:String(w),O)}},async delete(k,A){await b(`${c}/${encodeURIComponent(k)}`,{method:"DELETE",signal:A});const O={version:1,prompts:((g==null?void 0:g.prompts)??[]).filter(N=>N.id!==k)};g=O,Fl(O)}}}const Nb="modulepreload",Ub=function(r,c){return new URL(r,c).href},qm={},Gm=function(c,f,u){let g=Promise.resolve();if(f&&f.length>0){let k=function(z){return Promise.all(z.map(w=>Promise.resolve(w).then(R=>({status:"fulfilled",value:R}),R=>({status:"rejected",reason:R}))))};const A=document.getElementsByTagName("link"),O=document.querySelector("meta[property=csp-nonce]"),N=(O==null?void 0:O.nonce)||(O==null?void 0:O.getAttribute("nonce"));g=k(f.map(z=>{if(z=Ub(z,u),z in qm)return;qm[z]=!0;const w=z.endsWith(".css"),R=w?'[rel="stylesheet"]':"";if(!!u)for(let X=A.length-1;X>=0;X--){const B=A[X];if(B.href===z&&(!w||B.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${z}"]${R}`))return;const F=document.createElement("link");if(F.rel=w?"stylesheet":Nb,w||(F.as="script"),F.crossOrigin="",F.href=z,N&&F.setAttribute("nonce",N),document.head.appendChild(F),w)return new Promise((X,B)=>{F.addEventListener("load",X),F.addEventListener("error",()=>B(new Error(`Unable to preload CSS for ${z}`)))})}))}function b(k){const A=new Event("vite:preloadError",{cancelable:!0});if(A.payload=k,window.dispatchEvent(A),!A.defaultPrevented)throw k}return g.then(k=>{for(const A of k||[])A.status==="rejected"&&b(A.reason);return c().catch(b)})},Mb=Object.assign({"./features/help/index.tsx":()=>Gm(()=>import("./pixaroma-ui-index.js"),[],import.meta.url),"./features/prompt-library/index.tsx":()=>Gm(()=>import("./pixaroma-ui-index2.js"),[],import.meta.url)});let mp=[],Qu,wi=[];function Db(){return Qu||(Qu=Promise.all(Object.values(Mb).map(r=>r())).then(r=>(mp=r,wi=r.map(c=>c.widget).filter(c=>!!c).sort((c,f)=>(c.order??0)-(f.order??0)||c.label.localeCompare(f.label)),wi))),Qu}function er(r){return wi.find(c=>c.id===r)}function Hb(){var r;for(const c of mp)(r=c.cleanup)==null||r.call(c)}const pp=ze.createContext(null);function gp(){const r=ze.useContext(pp);if(!r)throw new Error("WidgetBrowser components must be used inside WidgetBrowser");return r}function He({defaultWidget:r,widgetProps:c={},children:f}){const[u,g]=ze.useState(wi.length>0);if(ze.useEffect(()=>{let k=!0;return Db().then(()=>k&&g(!0)),()=>{k=!1,Hb()}},[]),!u)return J.jsx("div",{className:"px-widget-loading",children:"Loading widgets…"});const b=er(r??"")??wi[0];return b?J.jsx(Lb,{initialWidget:b,widgetProps:c,children:f}):J.jsx("div",{className:"px-widget-empty",children:"No Pixaroma widgets are registered."})}function Lb({initialWidget:r,widgetProps:c,children:f}){const[u,g]=ze.useState(r.id),b=er(u)??r,k=ze.useMemo(()=>({activeWidget:b,setActiveWidget:g,widgetProps:c}),[b,c]);return J.jsx(pp.Provider,{value:k,children:J.jsx("div",{className:"px-widget-browser",children:f})})}function Bb({children:r}){return J.jsxs("aside",{className:"px-widget-sidebar","aria-label":"Pixaroma widgets",children:[J.jsx("div",{className:"px-widget-sidebar-title",children:"Pixaroma"}),J.jsx("nav",{children:r})]})}function jb({widget:r}){const{activeWidget:c,setActiveWidget:f}=gp(),u=er(r);return u?J.jsxs(fp,{variant:"ghost",className:`px-widget-sidebar-item ${c.id===r?"is-active":""}`,"aria-current":c.id===r?"page":void 0,onClick:()=>f(r),children:[J.jsx("span",{className:"px-widget-sidebar-icon",children:u.icon??"•"}),J.jsx("span",{children:u.label})]}):null}function qb({children:r}){return J.jsx("section",{className:"px-widget-content",children:r})}class Gb extends ze.Component{constructor(){super(...arguments);pi(this,"state",{error:null})}static getDerivedStateFromError(f){return{error:f}}componentDidCatch(f,u){console.error("Pixaroma widget failed to render",f,u.componentStack)}render(){if(!this.state.error)return this.props.children;const{fallback:f}=this.props;return typeof f=="function"?f(this.state.error):f??J.jsx("div",{className:"px-widget-error",children:"Unable to load this widget."})}}function Yb({widget:r}){const{activeWidget:c,widgetProps:f}=gp();if(c.id!==r)return null;const u=er(r);if(!u)return J.jsxs("div",{className:"px-widget-empty",children:["Unknown widget: ",r]});const g=u.component;return J.jsx(Gb,{fallback:u.errorFallback,children:J.jsx(ze.Suspense,{fallback:u.loadingFallback??J.jsx("div",{className:"px-widget-loading",children:"Loading widget…"}),children:J.jsx(g,{...f[r]??{}})})})}He.Sidebar=Bb;He.SidebarItem=jb;He.Content=qb;He.Sandbox=Yb;const Vb=":root{font-family:Inter,ui-sans-serif,system-ui,sans-serif;color:#e3e0de;background:#11100f;font-synthesis:none}*{box-sizing:border-box}body{margin:0;min-width:320px;min-height:100vh;background:#11100f}button,input{font:inherit}.pixaroma-react-root{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1400;overflow:auto;background:#0a0908b8}.pixaroma-react{--accent: #f66744;--bg: #151413;--panel: #201e1c;--panel-hover: #292623;--border: #3c3733;--muted: #99918b;color:#e3e0de;min-height:100vh;background:radial-gradient(circle at 85% 0%,#2a1c17 0,transparent 42%),var(--bg)}.px-widget-browser{display:flex;min-height:100vh}.px-widget-sidebar{width:190px;flex:none;padding:22px 12px;border-right:1px solid #302c29;background:#191817}.px-widget-sidebar-title{padding:0 10px 18px;color:var(--accent);font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}.px-widget-sidebar nav{display:grid;gap:4px}.px-widget-sidebar-item{width:100%;justify-content:flex-start;color:#bdb5af}.px-widget-sidebar-item.is-active{color:#fff;background:#302925}.px-widget-sidebar-icon{width:20px;color:var(--accent);text-align:center}.px-widget-content{min-width:0;flex:1}.px-widget-empty{display:grid;min-height:100vh;place-items:center;padding:32px;color:var(--muted)}.px-help-shell{width:min(1180px,calc(100vw - 48px));height:min(820px,calc(100vh - 48px));min-height:560px;margin:24px auto;display:flex;flex-direction:column;overflow:hidden;border:1px solid var(--border);border-radius:14px;background:#151413f5;box-shadow:0 24px 80px #00000073}.px-help-header,.px-help-toolbar{display:flex;align-items:center;gap:12px;padding:12px 16px;border-bottom:1px solid #302c29}.px-help-header{justify-content:space-between;background:#201e1c}.px-brand{display:flex;align-items:center;gap:9px;font-size:14px;font-weight:700}.px-brand-mark,.px-entry-icon{display:grid;place-items:center;color:var(--accent)}.px-brand-mark{font-size:20px}.px-header-actions{display:flex;gap:2px}.px-help-toolbar{background:#191817}.px-search-wrap{display:flex;align-items:center;gap:8px;flex:1;max-width:620px;color:var(--muted)}.px-help-body{min-height:0;flex:1;display:flex}.px-help-sidebar{width:210px;flex:none;padding:18px 12px;overflow-y:auto;border-right:1px solid #302c29}.px-sidebar-label{padding:0 10px 8px;color:var(--accent);font-size:10px;font-weight:700;letter-spacing:.1em;text-transform:uppercase}.px-sidebar-label-spaced{margin-top:26px}.px-category{display:block;width:100%;padding:8px 10px;border:0;border-radius:7px;color:#bdb5af;background:transparent;text-align:left;cursor:pointer}.px-category:hover,.px-category.is-active{color:#fff;background:#302925}.px-result-count{padding:0 10px;color:var(--muted);font-size:12px}.px-help-content{min-width:0;flex:1;padding:22px;overflow-y:auto}.px-entry-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(230px,1fr));gap:12px}.px-entry-card{cursor:pointer;transition:border-color .15s,background .15s,transform .15s}.px-entry-card:hover{border-color:var(--accent);background:var(--panel-hover);transform:translateY(-1px)}.px-entry-icon{width:32px;height:32px;margin-bottom:12px;border-radius:8px;background:#33221d;font-size:18px}.px-entry-icon-large{width:48px;height:48px;margin:0;font-size:25px}.px-card-link{color:var(--accent);font-size:12px;font-weight:600}.px-article{max-width:760px;margin:0 auto}.px-article-heading{display:flex;gap:16px;align-items:flex-start;margin:28px 0 34px}.px-article h1{margin:8px 0 4px;font-size:28px;letter-spacing:-.03em}.px-article-heading p,.px-article-copy{color:#b7afa9;line-height:1.7}.px-article-copy{font-size:15px}.px-article-copy p{margin:0 0 18px}.px-button{display:inline-flex;align-items:center;justify-content:center;gap:7px;border:1px solid transparent;border-radius:7px;cursor:pointer;transition:background .15s,border-color .15s,opacity .15s}.px-button:disabled{cursor:default;opacity:.4}.px-button-default-size{min-height:34px;padding:0 13px}.px-button-sm{min-height:29px;padding:0 10px;font-size:12px}.px-button-icon{width:32px;height:32px;padding:0}.px-button-default{color:#fff;background:var(--accent)}.px-button-secondary{color:#e7e0dc;border-color:var(--border);background:#2b2825}.px-button-outline{color:#e7e0dc;border-color:var(--border);background:transparent}.px-button-ghost{color:#bbb3ad;background:transparent}.px-button:hover:not(:disabled){filter:brightness(1.1)}.px-input{width:100%;min-height:34px;padding:0 10px;border:1px solid var(--border);border-radius:7px;outline:0;color:#eee;background:#121110}.px-input:focus{border-color:var(--accent);box-shadow:0 0 0 2px #f6674433}.px-card{border:1px solid var(--border);border-radius:10px;background:var(--panel)}.px-card-header{padding:16px 16px 10px}.px-card-content{padding:0 16px 15px}.px-card-title{margin:10px 0 5px;font-size:15px}.px-card-description{min-height:38px;margin:0;color:var(--muted);font-size:12px;line-height:1.5}.px-badge{display:inline-flex;width:fit-content;padding:3px 7px;border-radius:999px;font-size:10px;font-weight:600}.px-badge-default{color:#fff;background:#8e3c29}.px-badge-secondary{color:#c8c0ba;background:#38332f}@media(max-width:700px){.px-help-shell{width:100vw;height:100vh;min-height:0;margin:0;border:0;border-radius:0}.px-help-sidebar{width:145px}.px-help-content{padding:14px}.px-entry-grid{grid-template-columns:1fr}}.px-prompt-library{width:min(1180px,calc(100vw - 48px));min-height:680px;margin:24px auto;overflow:hidden;border:1px solid var(--border);border-radius:14px;background:#151413f5}.px-prompt-library-header,.px-prompt-library-toolbar{display:flex;align-items:center;gap:14px;padding:16px 20px;border-bottom:1px solid #302c29}.px-prompt-library-header{justify-content:space-between;background:#201e1c}.px-prompt-library-header h1{margin:0;font-size:20px}.px-prompt-library-header p{margin:5px 0 0;color:var(--muted);font-size:12px}.px-prompt-library-toolbar{flex-wrap:wrap;background:#191817}.px-prompt-search{display:flex;align-items:center;gap:8px;min-width:260px;flex:1;color:var(--muted)}.px-prompt-tags{display:flex;flex-wrap:wrap;gap:6px}.px-prompt-library-body{display:flex;min-height:560px}.px-prompt-tree{width:330px;flex:none;padding:14px 12px;border-right:1px solid #302c29;overflow-y:auto}.px-prompt-preview{min-width:0;flex:1;padding:30px;overflow:auto}.px-prompt-row,.px-prompt-folder-row{display:flex;align-items:center;width:100%;padding:8px 10px;border:0;border-radius:7px;color:#c9c1bb;background:transparent;text-align:left;cursor:pointer}.px-prompt-row{justify-content:space-between;gap:8px}.px-prompt-row small{color:var(--muted);font-size:10px}.px-prompt-row:hover,.px-prompt-row[aria-selected=true],.px-prompt-folder-row:hover{color:#fff;background:#302925}.px-prompt-folder-row{gap:7px;font-weight:600}.px-prompt-children{padding-left:16px}.px-prompt-empty,.px-prompt-library-state{color:var(--muted)}.px-prompt-library-state{display:grid;min-height:300px;place-items:center;gap:12px;padding:32px;text-align:center}.px-prompt-library-state p{margin:0}.px-prompt-inline-error{padding:10px 20px;color:#ffb09b;background:#492117}.px-prompt-preview-heading{display:flex;align-items:center;gap:10px}.px-prompt-preview-heading h2{margin:0;font-size:25px}.px-prompt-preview-heading span,.px-prompt-preview-tags span,.px-prompt-path{color:var(--muted);font-size:12px}.px-prompt-preview-tags{display:flex;flex-wrap:wrap;gap:6px;margin:18px 0}.px-prompt-preview-tags span{padding:4px 8px;border-radius:999px;background:#38332f}.px-prompt-preview pre{margin:0;white-space:pre-wrap;color:#d5cec8;font:inherit;line-height:1.7}@media(max-width:700px){.px-prompt-library{width:100vw;min-height:100vh;margin:0;border:0;border-radius:0}.px-prompt-library-body{display:block}.px-prompt-tree{width:auto;border-right:0;border-bottom:1px solid #302c29}}",$l=new WeakMap,Ym="pixaroma-react-styles";function Qb(){if(document.getElementById(Ym))return;const r=document.createElement("style");r.id=Ym,r.textContent=Vb,document.head.appendChild(r)}function Vm(r,c,f=()=>{}){var g;(g=$l.get(r))==null||g.dispose(),Qb(),r.classList.add("pixaroma-react-root");const u={root:Xm.createRoot(r),cleanup:f,dispose:()=>{},mounted:!0};return u.dispose=()=>{if(u.mounted){u.mounted=!1;try{u.root.unmount()}finally{try{u.cleanup()}finally{$l.get(r)===u&&($l.delete(r),r.classList.remove("pixaroma-react-root"))}}}},$l.set(r,u),u.root.render(J.jsx(ze.StrictMode,{children:J.jsx("div",{className:"pixaroma-react",children:c})})),u.dispose}const Xb={mountHelpBrowser(r,c,f={}){const u=Uv(Im,c);return Vm(r,J.jsxs(He,{defaultWidget:"help",widgetProps:{help:{entries:u,initialId:f.initialId,onClose:f.onClose}},children:[J.jsx(He.Sidebar,{children:J.jsx(He.SidebarItem,{widget:"help"})}),J.jsx(He.Content,{children:J.jsx(He.Sandbox,{widget:"help"})})]}))},mountPromptLibrary(r,c={}){const{initialLibrary:f,baseUrl:u,accent:g,prefill:b,initialId:k,onInsert:A,onClose:O,onDirtyChange:N,...z}=c,w=hp({...z,baseUrl:u});return Vm(r,J.jsxs(He,{defaultWidget:"prompt-library",widgetProps:{"prompt-library":{adapter:w,initialLibrary:f,accent:g,prefill:b,initialId:k,onInsert:A,onClose:O,onDirtyChange:N}},children:[J.jsx(He.Sidebar,{children:J.jsx(He.SidebarItem,{widget:"prompt-library"})}),J.jsx(He.Content,{children:J.jsx(He.Sandbox,{widget:"prompt-library"})})]}))}};typeof window<"u"&&(window.PixaromaReactUi=Xb);const Qm=document.getElementById("root");Qm&&Xm.createRoot(Qm).render(J.jsx(ze.StrictMode,{children:J.jsx("div",{className:"pixaroma-react",children:J.jsxs(He,{defaultWidget:"help",widgetProps:{help:{entries:Im},"prompt-library":{adapter:hp()}},children:[J.jsxs(He.Sidebar,{children:[J.jsx(He.SidebarItem,{widget:"help"}),J.jsx(He.SidebarItem,{widget:"prompt-library"})]}),J.jsxs(He.Content,{children:[J.jsx(He.Sandbox,{widget:"help"}),J.jsx(He.Sandbox,{widget:"prompt-library"})]})]})})}));export{fp as B,Tb as I,Gm as _,dp as a,Yv as b,hp as c,J as j,ze as r};
//# sourceMappingURL=pixaroma-ui.js.map

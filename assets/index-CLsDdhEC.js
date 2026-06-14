(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var Vl={exports:{}},Zt={},Bl={exports:{}},_={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qn=Symbol.for("react.element"),tc=Symbol.for("react.portal"),ic=Symbol.for("react.fragment"),oc=Symbol.for("react.strict_mode"),ac=Symbol.for("react.profiler"),lc=Symbol.for("react.provider"),sc=Symbol.for("react.context"),uc=Symbol.for("react.forward_ref"),cc=Symbol.for("react.suspense"),dc=Symbol.for("react.memo"),fc=Symbol.for("react.lazy"),Oa=Symbol.iterator;function pc(e){return e===null||typeof e!="object"?null:(e=Oa&&e[Oa]||e["@@iterator"],typeof e=="function"?e:null)}var $l={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Hl=Object.assign,Ql={};function nn(e,r,n){this.props=e,this.context=r,this.refs=Ql,this.updater=n||$l}nn.prototype.isReactComponent={};nn.prototype.setState=function(e,r){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,r,"setState")};nn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Yl(){}Yl.prototype=nn.prototype;function jo(e,r,n){this.props=e,this.context=r,this.refs=Ql,this.updater=n||$l}var Fo=jo.prototype=new Yl;Fo.constructor=jo;Hl(Fo,nn.prototype);Fo.isPureReactComponent=!0;var Da=Array.isArray,ql=Object.prototype.hasOwnProperty,Wo={current:null},Gl={key:!0,ref:!0,__self:!0,__source:!0};function Kl(e,r,n){var t,i={},o=null,a=null;if(r!=null)for(t in r.ref!==void 0&&(a=r.ref),r.key!==void 0&&(o=""+r.key),r)ql.call(r,t)&&!Gl.hasOwnProperty(t)&&(i[t]=r[t]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var s=Array(l),c=0;c<l;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(t in l=e.defaultProps,l)i[t]===void 0&&(i[t]=l[t]);return{$$typeof:Qn,type:e,key:o,ref:a,props:i,_owner:Wo.current}}function vc(e,r){return{$$typeof:Qn,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}function Uo(e){return typeof e=="object"&&e!==null&&e.$$typeof===Qn}function mc(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return r[n]})}var Ra=/\/+/g;function hi(e,r){return typeof e=="object"&&e!==null&&e.key!=null?mc(""+e.key):r.toString(36)}function gt(e,r,n,t,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Qn:case tc:a=!0}}if(a)return a=e,i=i(a),e=t===""?"."+hi(a,0):t,Da(i)?(n="",e!=null&&(n=e.replace(Ra,"$&/")+"/"),gt(i,r,n,"",function(c){return c})):i!=null&&(Uo(i)&&(i=vc(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(Ra,"$&/")+"/")+e)),r.push(i)),1;if(a=0,t=t===""?".":t+":",Da(e))for(var l=0;l<e.length;l++){o=e[l];var s=t+hi(o,l);a+=gt(o,r,n,s,i)}else if(s=pc(e),typeof s=="function")for(e=s.call(e),l=0;!(o=e.next()).done;)o=o.value,s=t+hi(o,l++),a+=gt(o,r,n,s,i);else if(o==="object")throw r=String(e),Error("Objects are not valid as a React child (found: "+(r==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.");return a}function Jn(e,r,n){if(e==null)return e;var t=[],i=0;return gt(e,t,"","",function(o){return r.call(n,o,i++)}),t}function gc(e){if(e._status===-1){var r=e._result;r=r(),r.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=r)}if(e._status===1)return e._result.default;throw e._result}var ae={current:null},ht={transition:null},hc={ReactCurrentDispatcher:ae,ReactCurrentBatchConfig:ht,ReactCurrentOwner:Wo};function Xl(){throw Error("act(...) is not supported in production builds of React.")}_.Children={map:Jn,forEach:function(e,r,n){Jn(e,function(){r.apply(this,arguments)},n)},count:function(e){var r=0;return Jn(e,function(){r++}),r},toArray:function(e){return Jn(e,function(r){return r})||[]},only:function(e){if(!Uo(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};_.Component=nn;_.Fragment=ic;_.Profiler=ac;_.PureComponent=jo;_.StrictMode=oc;_.Suspense=cc;_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=hc;_.act=Xl;_.cloneElement=function(e,r,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var t=Hl({},e.props),i=e.key,o=e.ref,a=e._owner;if(r!=null){if(r.ref!==void 0&&(o=r.ref,a=Wo.current),r.key!==void 0&&(i=""+r.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in r)ql.call(r,s)&&!Gl.hasOwnProperty(s)&&(t[s]=r[s]===void 0&&l!==void 0?l[s]:r[s])}var s=arguments.length-2;if(s===1)t.children=n;else if(1<s){l=Array(s);for(var c=0;c<s;c++)l[c]=arguments[c+2];t.children=l}return{$$typeof:Qn,type:e.type,key:i,ref:o,props:t,_owner:a}};_.createContext=function(e){return e={$$typeof:sc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:lc,_context:e},e.Consumer=e};_.createElement=Kl;_.createFactory=function(e){var r=Kl.bind(null,e);return r.type=e,r};_.createRef=function(){return{current:null}};_.forwardRef=function(e){return{$$typeof:uc,render:e}};_.isValidElement=Uo;_.lazy=function(e){return{$$typeof:fc,_payload:{_status:-1,_result:e},_init:gc}};_.memo=function(e,r){return{$$typeof:dc,type:e,compare:r===void 0?null:r}};_.startTransition=function(e){var r=ht.transition;ht.transition={};try{e()}finally{ht.transition=r}};_.unstable_act=Xl;_.useCallback=function(e,r){return ae.current.useCallback(e,r)};_.useContext=function(e){return ae.current.useContext(e)};_.useDebugValue=function(){};_.useDeferredValue=function(e){return ae.current.useDeferredValue(e)};_.useEffect=function(e,r){return ae.current.useEffect(e,r)};_.useId=function(){return ae.current.useId()};_.useImperativeHandle=function(e,r,n){return ae.current.useImperativeHandle(e,r,n)};_.useInsertionEffect=function(e,r){return ae.current.useInsertionEffect(e,r)};_.useLayoutEffect=function(e,r){return ae.current.useLayoutEffect(e,r)};_.useMemo=function(e,r){return ae.current.useMemo(e,r)};_.useReducer=function(e,r,n){return ae.current.useReducer(e,r,n)};_.useRef=function(e){return ae.current.useRef(e)};_.useState=function(e){return ae.current.useState(e)};_.useSyncExternalStore=function(e,r,n){return ae.current.useSyncExternalStore(e,r,n)};_.useTransition=function(){return ae.current.useTransition()};_.version="18.3.1";Bl.exports=_;var Zl=Bl.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yc=Zl,wc=Symbol.for("react.element"),xc=Symbol.for("react.fragment"),kc=Object.prototype.hasOwnProperty,Sc=yc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,bc={key:!0,ref:!0,__self:!0,__source:!0};function Jl(e,r,n){var t,i={},o=null,a=null;n!==void 0&&(o=""+n),r.key!==void 0&&(o=""+r.key),r.ref!==void 0&&(a=r.ref);for(t in r)kc.call(r,t)&&!bc.hasOwnProperty(t)&&(i[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps,r)i[t]===void 0&&(i[t]=r[t]);return{$$typeof:wc,type:e,key:o,ref:a,props:i,_owner:Sc.current}}Zt.Fragment=xc;Zt.jsx=Jl;Zt.jsxs=Jl;Vl.exports=Zt;var es=Vl.exports,$i={},rs={exports:{}},he={},ns={exports:{}},ts={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function r(b,P){var T=b.length;b.push(P);e:for(;0<T;){var B=T-1>>>1,q=b[B];if(0<i(q,P))b[B]=P,b[T]=q,T=B;else break e}}function n(b){return b.length===0?null:b[0]}function t(b){if(b.length===0)return null;var P=b[0],T=b.pop();if(T!==P){b[0]=T;e:for(var B=0,q=b.length,Xn=q>>>1;B<Xn;){var vr=2*(B+1)-1,gi=b[vr],mr=vr+1,Zn=b[mr];if(0>i(gi,T))mr<q&&0>i(Zn,gi)?(b[B]=Zn,b[mr]=T,B=mr):(b[B]=gi,b[vr]=T,B=vr);else if(mr<q&&0>i(Zn,T))b[B]=Zn,b[mr]=T,B=mr;else break e}}return P}function i(b,P){var T=b.sortIndex-P.sortIndex;return T!==0?T:b.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var s=[],c=[],m=1,v=null,p=3,y=!1,w=!1,x=!1,A=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(b){for(var P=n(c);P!==null;){if(P.callback===null)t(c);else if(P.startTime<=b)t(c),P.sortIndex=P.expirationTime,r(s,P);else break;P=n(c)}}function g(b){if(x=!1,f(b),!w)if(n(s)!==null)w=!0,vi(S);else{var P=n(c);P!==null&&mi(g,P.startTime-b)}}function S(b,P){w=!1,x&&(x=!1,d(z),z=-1),y=!0;var T=p;try{for(f(P),v=n(s);v!==null&&(!(v.expirationTime>P)||b&&!Ce());){var B=v.callback;if(typeof B=="function"){v.callback=null,p=v.priorityLevel;var q=B(v.expirationTime<=P);P=e.unstable_now(),typeof q=="function"?v.callback=q:v===n(s)&&t(s),f(P)}else t(s);v=n(s)}if(v!==null)var Xn=!0;else{var vr=n(c);vr!==null&&mi(g,vr.startTime-P),Xn=!1}return Xn}finally{v=null,p=T,y=!1}}var E=!1,C=null,z=-1,V=5,L=-1;function Ce(){return!(e.unstable_now()-L<V)}function an(){if(C!==null){var b=e.unstable_now();L=b;var P=!0;try{P=C(!0,b)}finally{P?ln():(E=!1,C=null)}}else E=!1}var ln;if(typeof u=="function")ln=function(){u(an)};else if(typeof MessageChannel<"u"){var Ma=new MessageChannel,nc=Ma.port2;Ma.port1.onmessage=an,ln=function(){nc.postMessage(null)}}else ln=function(){A(an,0)};function vi(b){C=b,E||(E=!0,ln())}function mi(b,P){z=A(function(){b(e.unstable_now())},P)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(b){b.callback=null},e.unstable_continueExecution=function(){w||y||(w=!0,vi(S))},e.unstable_forceFrameRate=function(b){0>b||125<b?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<b?Math.floor(1e3/b):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(b){switch(p){case 1:case 2:case 3:var P=3;break;default:P=p}var T=p;p=P;try{return b()}finally{p=T}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(b,P){switch(b){case 1:case 2:case 3:case 4:case 5:break;default:b=3}var T=p;p=b;try{return P()}finally{p=T}},e.unstable_scheduleCallback=function(b,P,T){var B=e.unstable_now();switch(typeof T=="object"&&T!==null?(T=T.delay,T=typeof T=="number"&&0<T?B+T:B):T=B,b){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=T+q,b={id:m++,callback:P,priorityLevel:b,startTime:T,expirationTime:q,sortIndex:-1},T>B?(b.sortIndex=T,r(c,b),n(s)===null&&b===n(c)&&(x?(d(z),z=-1):x=!0,mi(g,T-B))):(b.sortIndex=q,r(s,b),w||y||(w=!0,vi(S))),b},e.unstable_shouldYield=Ce,e.unstable_wrapCallback=function(b){var P=p;return function(){var T=p;p=P;try{return b.apply(this,arguments)}finally{p=T}}}})(ts);ns.exports=ts;var Ec=ns.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cc=Zl,ge=Ec;function h(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)r+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var is=new Set,_n={};function Tr(e,r){Gr(e,r),Gr(e+"Capture",r)}function Gr(e,r){for(_n[e]=r,e=0;e<r.length;e++)is.add(r[e])}var Be=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Hi=Object.prototype.hasOwnProperty,zc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Aa={},Ia={};function Pc(e){return Hi.call(Ia,e)?!0:Hi.call(Aa,e)?!1:zc.test(e)?Ia[e]=!0:(Aa[e]=!0,!1)}function Tc(e,r,n,t){if(n!==null&&n.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return t?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function _c(e,r,n,t){if(r===null||typeof r>"u"||Tc(e,r,n,t))return!0;if(t)return!1;if(n!==null)switch(n.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function le(e,r,n,t,i,o,a){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=t,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=r,this.sanitizeURL=o,this.removeEmptyString=a}var J={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){J[e]=new le(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var r=e[0];J[r]=new le(r,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){J[e]=new le(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){J[e]=new le(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){J[e]=new le(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){J[e]=new le(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){J[e]=new le(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){J[e]=new le(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){J[e]=new le(e,5,!1,e.toLowerCase(),null,!1,!1)});var Vo=/[\-:]([a-z])/g;function Bo(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var r=e.replace(Vo,Bo);J[r]=new le(r,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var r=e.replace(Vo,Bo);J[r]=new le(r,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var r=e.replace(Vo,Bo);J[r]=new le(r,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){J[e]=new le(e,1,!1,e.toLowerCase(),null,!1,!1)});J.xlinkHref=new le("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){J[e]=new le(e,1,!1,e.toLowerCase(),null,!0,!0)});function $o(e,r,n,t){var i=J.hasOwnProperty(r)?J[r]:null;(i!==null?i.type!==0:t||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(_c(r,n,i,t)&&(n=null),t||i===null?Pc(r)&&(n===null?e.removeAttribute(r):e.setAttribute(r,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(r=i.attributeName,t=i.attributeNamespace,n===null?e.removeAttribute(r):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,t?e.setAttributeNS(t,r,n):e.setAttribute(r,n))))}var Ye=Cc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,et=Symbol.for("react.element"),Nr=Symbol.for("react.portal"),Mr=Symbol.for("react.fragment"),Ho=Symbol.for("react.strict_mode"),Qi=Symbol.for("react.profiler"),os=Symbol.for("react.provider"),as=Symbol.for("react.context"),Qo=Symbol.for("react.forward_ref"),Yi=Symbol.for("react.suspense"),qi=Symbol.for("react.suspense_list"),Yo=Symbol.for("react.memo"),Ge=Symbol.for("react.lazy"),ls=Symbol.for("react.offscreen"),ja=Symbol.iterator;function sn(e){return e===null||typeof e!="object"?null:(e=ja&&e[ja]||e["@@iterator"],typeof e=="function"?e:null)}var W=Object.assign,yi;function gn(e){if(yi===void 0)try{throw Error()}catch(n){var r=n.stack.trim().match(/\n( *(at )?)/);yi=r&&r[1]||""}return`
`+yi+e}var wi=!1;function xi(e,r){if(!e||wi)return"";wi=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(c){var t=c}Reflect.construct(e,[],r)}else{try{r.call()}catch(c){t=c}e.call(r.prototype)}else{try{throw Error()}catch(c){t=c}e()}}catch(c){if(c&&t&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=t.stack.split(`
`),a=i.length-1,l=o.length-1;1<=a&&0<=l&&i[a]!==o[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==o[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==o[l]){var s=`
`+i[a].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=a&&0<=l);break}}}finally{wi=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?gn(e):""}function Lc(e){switch(e.tag){case 5:return gn(e.type);case 16:return gn("Lazy");case 13:return gn("Suspense");case 19:return gn("SuspenseList");case 0:case 2:case 15:return e=xi(e.type,!1),e;case 11:return e=xi(e.type.render,!1),e;case 1:return e=xi(e.type,!0),e;default:return""}}function Gi(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Mr:return"Fragment";case Nr:return"Portal";case Qi:return"Profiler";case Ho:return"StrictMode";case Yi:return"Suspense";case qi:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case as:return(e.displayName||"Context")+".Consumer";case os:return(e._context.displayName||"Context")+".Provider";case Qo:var r=e.render;return e=e.displayName,e||(e=r.displayName||r.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Yo:return r=e.displayName||null,r!==null?r:Gi(e.type)||"Memo";case Ge:r=e._payload,e=e._init;try{return Gi(e(r))}catch{}}return null}function Nc(e){var r=e.type;switch(e.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=r.render,e=e.displayName||e.name||"",r.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Gi(r);case 8:return r===Ho?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function ur(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ss(e){var r=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Mc(e){var r=ss(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,r),t=""+e[r];if(!e.hasOwnProperty(r)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,r,{configurable:!0,get:function(){return i.call(this)},set:function(a){t=""+a,o.call(this,a)}}),Object.defineProperty(e,r,{enumerable:n.enumerable}),{getValue:function(){return t},setValue:function(a){t=""+a},stopTracking:function(){e._valueTracker=null,delete e[r]}}}}function rt(e){e._valueTracker||(e._valueTracker=Mc(e))}function us(e){if(!e)return!1;var r=e._valueTracker;if(!r)return!0;var n=r.getValue(),t="";return e&&(t=ss(e)?e.checked?"true":"false":e.value),e=t,e!==n?(r.setValue(e),!0):!1}function Tt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ki(e,r){var n=r.checked;return W({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Fa(e,r){var n=r.defaultValue==null?"":r.defaultValue,t=r.checked!=null?r.checked:r.defaultChecked;n=ur(r.value!=null?r.value:n),e._wrapperState={initialChecked:t,initialValue:n,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function cs(e,r){r=r.checked,r!=null&&$o(e,"checked",r,!1)}function Xi(e,r){cs(e,r);var n=ur(r.value),t=r.type;if(n!=null)t==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(t==="submit"||t==="reset"){e.removeAttribute("value");return}r.hasOwnProperty("value")?Zi(e,r.type,n):r.hasOwnProperty("defaultValue")&&Zi(e,r.type,ur(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(e.defaultChecked=!!r.defaultChecked)}function Wa(e,r,n){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var t=r.type;if(!(t!=="submit"&&t!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+e._wrapperState.initialValue,n||r===e.value||(e.value=r),e.defaultValue=r}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Zi(e,r,n){(r!=="number"||Tt(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var hn=Array.isArray;function Br(e,r,n,t){if(e=e.options,r){r={};for(var i=0;i<n.length;i++)r["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=r.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&t&&(e[n].defaultSelected=!0)}else{for(n=""+ur(n),r=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,t&&(e[i].defaultSelected=!0);return}r!==null||e[i].disabled||(r=e[i])}r!==null&&(r.selected=!0)}}function Ji(e,r){if(r.dangerouslySetInnerHTML!=null)throw Error(h(91));return W({},r,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ua(e,r){var n=r.value;if(n==null){if(n=r.children,r=r.defaultValue,n!=null){if(r!=null)throw Error(h(92));if(hn(n)){if(1<n.length)throw Error(h(93));n=n[0]}r=n}r==null&&(r=""),n=r}e._wrapperState={initialValue:ur(n)}}function ds(e,r){var n=ur(r.value),t=ur(r.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),r.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),t!=null&&(e.defaultValue=""+t)}function Va(e){var r=e.textContent;r===e._wrapperState.initialValue&&r!==""&&r!==null&&(e.value=r)}function fs(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function eo(e,r){return e==null||e==="http://www.w3.org/1999/xhtml"?fs(r):e==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var nt,ps=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,n,t,i){MSApp.execUnsafeLocalFunction(function(){return e(r,n,t,i)})}:e}(function(e,r){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=r;else{for(nt=nt||document.createElement("div"),nt.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=nt.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;r.firstChild;)e.appendChild(r.firstChild)}});function Ln(e,r){if(r){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=r;return}}e.textContent=r}var xn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Oc=["Webkit","ms","Moz","O"];Object.keys(xn).forEach(function(e){Oc.forEach(function(r){r=r+e.charAt(0).toUpperCase()+e.substring(1),xn[r]=xn[e]})});function vs(e,r,n){return r==null||typeof r=="boolean"||r===""?"":n||typeof r!="number"||r===0||xn.hasOwnProperty(e)&&xn[e]?(""+r).trim():r+"px"}function ms(e,r){e=e.style;for(var n in r)if(r.hasOwnProperty(n)){var t=n.indexOf("--")===0,i=vs(n,r[n],t);n==="float"&&(n="cssFloat"),t?e.setProperty(n,i):e[n]=i}}var Dc=W({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ro(e,r){if(r){if(Dc[e]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(h(137,e));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(h(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(h(61))}if(r.style!=null&&typeof r.style!="object")throw Error(h(62))}}function no(e,r){if(e.indexOf("-")===-1)return typeof r.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var to=null;function qo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var io=null,$r=null,Hr=null;function Ba(e){if(e=Gn(e)){if(typeof io!="function")throw Error(h(280));var r=e.stateNode;r&&(r=ti(r),io(e.stateNode,e.type,r))}}function gs(e){$r?Hr?Hr.push(e):Hr=[e]:$r=e}function hs(){if($r){var e=$r,r=Hr;if(Hr=$r=null,Ba(e),r)for(e=0;e<r.length;e++)Ba(r[e])}}function ys(e,r){return e(r)}function ws(){}var ki=!1;function xs(e,r,n){if(ki)return e(r,n);ki=!0;try{return ys(e,r,n)}finally{ki=!1,($r!==null||Hr!==null)&&(ws(),hs())}}function Nn(e,r){var n=e.stateNode;if(n===null)return null;var t=ti(n);if(t===null)return null;n=t[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(t=!t.disabled)||(e=e.type,t=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!t;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(h(231,r,typeof n));return n}var oo=!1;if(Be)try{var un={};Object.defineProperty(un,"passive",{get:function(){oo=!0}}),window.addEventListener("test",un,un),window.removeEventListener("test",un,un)}catch{oo=!1}function Rc(e,r,n,t,i,o,a,l,s){var c=Array.prototype.slice.call(arguments,3);try{r.apply(n,c)}catch(m){this.onError(m)}}var kn=!1,_t=null,Lt=!1,ao=null,Ac={onError:function(e){kn=!0,_t=e}};function Ic(e,r,n,t,i,o,a,l,s){kn=!1,_t=null,Rc.apply(Ac,arguments)}function jc(e,r,n,t,i,o,a,l,s){if(Ic.apply(this,arguments),kn){if(kn){var c=_t;kn=!1,_t=null}else throw Error(h(198));Lt||(Lt=!0,ao=c)}}function _r(e){var r=e,n=e;if(e.alternate)for(;r.return;)r=r.return;else{e=r;do r=e,r.flags&4098&&(n=r.return),e=r.return;while(e)}return r.tag===3?n:null}function ks(e){if(e.tag===13){var r=e.memoizedState;if(r===null&&(e=e.alternate,e!==null&&(r=e.memoizedState)),r!==null)return r.dehydrated}return null}function $a(e){if(_r(e)!==e)throw Error(h(188))}function Fc(e){var r=e.alternate;if(!r){if(r=_r(e),r===null)throw Error(h(188));return r!==e?null:e}for(var n=e,t=r;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(t=i.return,t!==null){n=t;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return $a(i),e;if(o===t)return $a(i),r;o=o.sibling}throw Error(h(188))}if(n.return!==t.return)n=i,t=o;else{for(var a=!1,l=i.child;l;){if(l===n){a=!0,n=i,t=o;break}if(l===t){a=!0,t=i,n=o;break}l=l.sibling}if(!a){for(l=o.child;l;){if(l===n){a=!0,n=o,t=i;break}if(l===t){a=!0,t=o,n=i;break}l=l.sibling}if(!a)throw Error(h(189))}}if(n.alternate!==t)throw Error(h(190))}if(n.tag!==3)throw Error(h(188));return n.stateNode.current===n?e:r}function Ss(e){return e=Fc(e),e!==null?bs(e):null}function bs(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var r=bs(e);if(r!==null)return r;e=e.sibling}return null}var Es=ge.unstable_scheduleCallback,Ha=ge.unstable_cancelCallback,Wc=ge.unstable_shouldYield,Uc=ge.unstable_requestPaint,$=ge.unstable_now,Vc=ge.unstable_getCurrentPriorityLevel,Go=ge.unstable_ImmediatePriority,Cs=ge.unstable_UserBlockingPriority,Nt=ge.unstable_NormalPriority,Bc=ge.unstable_LowPriority,zs=ge.unstable_IdlePriority,Jt=null,Ae=null;function $c(e){if(Ae&&typeof Ae.onCommitFiberRoot=="function")try{Ae.onCommitFiberRoot(Jt,e,void 0,(e.current.flags&128)===128)}catch{}}var Le=Math.clz32?Math.clz32:Yc,Hc=Math.log,Qc=Math.LN2;function Yc(e){return e>>>=0,e===0?32:31-(Hc(e)/Qc|0)|0}var tt=64,it=4194304;function yn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Mt(e,r){var n=e.pendingLanes;if(n===0)return 0;var t=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~i;l!==0?t=yn(l):(o&=a,o!==0&&(t=yn(o)))}else a=n&~i,a!==0?t=yn(a):o!==0&&(t=yn(o));if(t===0)return 0;if(r!==0&&r!==t&&!(r&i)&&(i=t&-t,o=r&-r,i>=o||i===16&&(o&4194240)!==0))return r;if(t&4&&(t|=n&16),r=e.entangledLanes,r!==0)for(e=e.entanglements,r&=t;0<r;)n=31-Le(r),i=1<<n,t|=e[n],r&=~i;return t}function qc(e,r){switch(e){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Gc(e,r){for(var n=e.suspendedLanes,t=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-Le(o),l=1<<a,s=i[a];s===-1?(!(l&n)||l&t)&&(i[a]=qc(l,r)):s<=r&&(e.expiredLanes|=l),o&=~l}}function lo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ps(){var e=tt;return tt<<=1,!(tt&4194240)&&(tt=64),e}function Si(e){for(var r=[],n=0;31>n;n++)r.push(e);return r}function Yn(e,r,n){e.pendingLanes|=r,r!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,r=31-Le(r),e[r]=n}function Kc(e,r){var n=e.pendingLanes&~r;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=r,e.mutableReadLanes&=r,e.entangledLanes&=r,r=e.entanglements;var t=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Le(n),o=1<<i;r[i]=0,t[i]=-1,e[i]=-1,n&=~o}}function Ko(e,r){var n=e.entangledLanes|=r;for(e=e.entanglements;n;){var t=31-Le(n),i=1<<t;i&r|e[t]&r&&(e[t]|=r),n&=~i}}var M=0;function Ts(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var _s,Xo,Ls,Ns,Ms,so=!1,ot=[],rr=null,nr=null,tr=null,Mn=new Map,On=new Map,Xe=[],Xc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Qa(e,r){switch(e){case"focusin":case"focusout":rr=null;break;case"dragenter":case"dragleave":nr=null;break;case"mouseover":case"mouseout":tr=null;break;case"pointerover":case"pointerout":Mn.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":On.delete(r.pointerId)}}function cn(e,r,n,t,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:r,domEventName:n,eventSystemFlags:t,nativeEvent:o,targetContainers:[i]},r!==null&&(r=Gn(r),r!==null&&Xo(r)),e):(e.eventSystemFlags|=t,r=e.targetContainers,i!==null&&r.indexOf(i)===-1&&r.push(i),e)}function Zc(e,r,n,t,i){switch(r){case"focusin":return rr=cn(rr,e,r,n,t,i),!0;case"dragenter":return nr=cn(nr,e,r,n,t,i),!0;case"mouseover":return tr=cn(tr,e,r,n,t,i),!0;case"pointerover":var o=i.pointerId;return Mn.set(o,cn(Mn.get(o)||null,e,r,n,t,i)),!0;case"gotpointercapture":return o=i.pointerId,On.set(o,cn(On.get(o)||null,e,r,n,t,i)),!0}return!1}function Os(e){var r=yr(e.target);if(r!==null){var n=_r(r);if(n!==null){if(r=n.tag,r===13){if(r=ks(n),r!==null){e.blockedOn=r,Ms(e.priority,function(){Ls(n)});return}}else if(r===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function yt(e){if(e.blockedOn!==null)return!1;for(var r=e.targetContainers;0<r.length;){var n=uo(e.domEventName,e.eventSystemFlags,r[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var t=new n.constructor(n.type,n);to=t,n.target.dispatchEvent(t),to=null}else return r=Gn(n),r!==null&&Xo(r),e.blockedOn=n,!1;r.shift()}return!0}function Ya(e,r,n){yt(e)&&n.delete(r)}function Jc(){so=!1,rr!==null&&yt(rr)&&(rr=null),nr!==null&&yt(nr)&&(nr=null),tr!==null&&yt(tr)&&(tr=null),Mn.forEach(Ya),On.forEach(Ya)}function dn(e,r){e.blockedOn===r&&(e.blockedOn=null,so||(so=!0,ge.unstable_scheduleCallback(ge.unstable_NormalPriority,Jc)))}function Dn(e){function r(i){return dn(i,e)}if(0<ot.length){dn(ot[0],e);for(var n=1;n<ot.length;n++){var t=ot[n];t.blockedOn===e&&(t.blockedOn=null)}}for(rr!==null&&dn(rr,e),nr!==null&&dn(nr,e),tr!==null&&dn(tr,e),Mn.forEach(r),On.forEach(r),n=0;n<Xe.length;n++)t=Xe[n],t.blockedOn===e&&(t.blockedOn=null);for(;0<Xe.length&&(n=Xe[0],n.blockedOn===null);)Os(n),n.blockedOn===null&&Xe.shift()}var Qr=Ye.ReactCurrentBatchConfig,Ot=!0;function ed(e,r,n,t){var i=M,o=Qr.transition;Qr.transition=null;try{M=1,Zo(e,r,n,t)}finally{M=i,Qr.transition=o}}function rd(e,r,n,t){var i=M,o=Qr.transition;Qr.transition=null;try{M=4,Zo(e,r,n,t)}finally{M=i,Qr.transition=o}}function Zo(e,r,n,t){if(Ot){var i=uo(e,r,n,t);if(i===null)Mi(e,r,t,Dt,n),Qa(e,t);else if(Zc(i,e,r,n,t))t.stopPropagation();else if(Qa(e,t),r&4&&-1<Xc.indexOf(e)){for(;i!==null;){var o=Gn(i);if(o!==null&&_s(o),o=uo(e,r,n,t),o===null&&Mi(e,r,t,Dt,n),o===i)break;i=o}i!==null&&t.stopPropagation()}else Mi(e,r,t,null,n)}}var Dt=null;function uo(e,r,n,t){if(Dt=null,e=qo(t),e=yr(e),e!==null)if(r=_r(e),r===null)e=null;else if(n=r.tag,n===13){if(e=ks(r),e!==null)return e;e=null}else if(n===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;e=null}else r!==e&&(e=null);return Dt=e,null}function Ds(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Vc()){case Go:return 1;case Cs:return 4;case Nt:case Bc:return 16;case zs:return 536870912;default:return 16}default:return 16}}var Je=null,Jo=null,wt=null;function Rs(){if(wt)return wt;var e,r=Jo,n=r.length,t,i="value"in Je?Je.value:Je.textContent,o=i.length;for(e=0;e<n&&r[e]===i[e];e++);var a=n-e;for(t=1;t<=a&&r[n-t]===i[o-t];t++);return wt=i.slice(e,1<t?1-t:void 0)}function xt(e){var r=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&r===13&&(e=13)):e=r,e===10&&(e=13),32<=e||e===13?e:0}function at(){return!0}function qa(){return!1}function ye(e){function r(n,t,i,o,a){this._reactName=n,this._targetInst=i,this.type=t,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?at:qa,this.isPropagationStopped=qa,this}return W(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=at)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=at)},persist:function(){},isPersistent:at}),r}var tn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ea=ye(tn),qn=W({},tn,{view:0,detail:0}),nd=ye(qn),bi,Ei,fn,ei=W({},qn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ra,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==fn&&(fn&&e.type==="mousemove"?(bi=e.screenX-fn.screenX,Ei=e.screenY-fn.screenY):Ei=bi=0,fn=e),bi)},movementY:function(e){return"movementY"in e?e.movementY:Ei}}),Ga=ye(ei),td=W({},ei,{dataTransfer:0}),id=ye(td),od=W({},qn,{relatedTarget:0}),Ci=ye(od),ad=W({},tn,{animationName:0,elapsedTime:0,pseudoElement:0}),ld=ye(ad),sd=W({},tn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ud=ye(sd),cd=W({},tn,{data:0}),Ka=ye(cd),dd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},fd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},pd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function vd(e){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(e):(e=pd[e])?!!r[e]:!1}function ra(){return vd}var md=W({},qn,{key:function(e){if(e.key){var r=dd[e.key]||e.key;if(r!=="Unidentified")return r}return e.type==="keypress"?(e=xt(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?fd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ra,charCode:function(e){return e.type==="keypress"?xt(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?xt(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),gd=ye(md),hd=W({},ei,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xa=ye(hd),yd=W({},qn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ra}),wd=ye(yd),xd=W({},tn,{propertyName:0,elapsedTime:0,pseudoElement:0}),kd=ye(xd),Sd=W({},ei,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),bd=ye(Sd),Ed=[9,13,27,32],na=Be&&"CompositionEvent"in window,Sn=null;Be&&"documentMode"in document&&(Sn=document.documentMode);var Cd=Be&&"TextEvent"in window&&!Sn,As=Be&&(!na||Sn&&8<Sn&&11>=Sn),Za=" ",Ja=!1;function Is(e,r){switch(e){case"keyup":return Ed.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function js(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Or=!1;function zd(e,r){switch(e){case"compositionend":return js(r);case"keypress":return r.which!==32?null:(Ja=!0,Za);case"textInput":return e=r.data,e===Za&&Ja?null:e;default:return null}}function Pd(e,r){if(Or)return e==="compositionend"||!na&&Is(e,r)?(e=Rs(),wt=Jo=Je=null,Or=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return As&&r.locale!=="ko"?null:r.data;default:return null}}var Td={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function el(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r==="input"?!!Td[e.type]:r==="textarea"}function Fs(e,r,n,t){gs(t),r=Rt(r,"onChange"),0<r.length&&(n=new ea("onChange","change",null,n,t),e.push({event:n,listeners:r}))}var bn=null,Rn=null;function _d(e){Ks(e,0)}function ri(e){var r=Ar(e);if(us(r))return e}function Ld(e,r){if(e==="change")return r}var Ws=!1;if(Be){var zi;if(Be){var Pi="oninput"in document;if(!Pi){var rl=document.createElement("div");rl.setAttribute("oninput","return;"),Pi=typeof rl.oninput=="function"}zi=Pi}else zi=!1;Ws=zi&&(!document.documentMode||9<document.documentMode)}function nl(){bn&&(bn.detachEvent("onpropertychange",Us),Rn=bn=null)}function Us(e){if(e.propertyName==="value"&&ri(Rn)){var r=[];Fs(r,Rn,e,qo(e)),xs(_d,r)}}function Nd(e,r,n){e==="focusin"?(nl(),bn=r,Rn=n,bn.attachEvent("onpropertychange",Us)):e==="focusout"&&nl()}function Md(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ri(Rn)}function Od(e,r){if(e==="click")return ri(r)}function Dd(e,r){if(e==="input"||e==="change")return ri(r)}function Rd(e,r){return e===r&&(e!==0||1/e===1/r)||e!==e&&r!==r}var Me=typeof Object.is=="function"?Object.is:Rd;function An(e,r){if(Me(e,r))return!0;if(typeof e!="object"||e===null||typeof r!="object"||r===null)return!1;var n=Object.keys(e),t=Object.keys(r);if(n.length!==t.length)return!1;for(t=0;t<n.length;t++){var i=n[t];if(!Hi.call(r,i)||!Me(e[i],r[i]))return!1}return!0}function tl(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function il(e,r){var n=tl(e);e=0;for(var t;n;){if(n.nodeType===3){if(t=e+n.textContent.length,e<=r&&t>=r)return{node:n,offset:r-e};e=t}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=tl(n)}}function Vs(e,r){return e&&r?e===r?!0:e&&e.nodeType===3?!1:r&&r.nodeType===3?Vs(e,r.parentNode):"contains"in e?e.contains(r):e.compareDocumentPosition?!!(e.compareDocumentPosition(r)&16):!1:!1}function Bs(){for(var e=window,r=Tt();r instanceof e.HTMLIFrameElement;){try{var n=typeof r.contentWindow.location.href=="string"}catch{n=!1}if(n)e=r.contentWindow;else break;r=Tt(e.document)}return r}function ta(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r&&(r==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||r==="textarea"||e.contentEditable==="true")}function Ad(e){var r=Bs(),n=e.focusedElem,t=e.selectionRange;if(r!==n&&n&&n.ownerDocument&&Vs(n.ownerDocument.documentElement,n)){if(t!==null&&ta(n)){if(r=t.start,e=t.end,e===void 0&&(e=r),"selectionStart"in n)n.selectionStart=r,n.selectionEnd=Math.min(e,n.value.length);else if(e=(r=n.ownerDocument||document)&&r.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(t.start,i);t=t.end===void 0?o:Math.min(t.end,i),!e.extend&&o>t&&(i=t,t=o,o=i),i=il(n,o);var a=il(n,t);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(r=r.createRange(),r.setStart(i.node,i.offset),e.removeAllRanges(),o>t?(e.addRange(r),e.extend(a.node,a.offset)):(r.setEnd(a.node,a.offset),e.addRange(r)))}}for(r=[],e=n;e=e.parentNode;)e.nodeType===1&&r.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<r.length;n++)e=r[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Id=Be&&"documentMode"in document&&11>=document.documentMode,Dr=null,co=null,En=null,fo=!1;function ol(e,r,n){var t=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;fo||Dr==null||Dr!==Tt(t)||(t=Dr,"selectionStart"in t&&ta(t)?t={start:t.selectionStart,end:t.selectionEnd}:(t=(t.ownerDocument&&t.ownerDocument.defaultView||window).getSelection(),t={anchorNode:t.anchorNode,anchorOffset:t.anchorOffset,focusNode:t.focusNode,focusOffset:t.focusOffset}),En&&An(En,t)||(En=t,t=Rt(co,"onSelect"),0<t.length&&(r=new ea("onSelect","select",null,r,n),e.push({event:r,listeners:t}),r.target=Dr)))}function lt(e,r){var n={};return n[e.toLowerCase()]=r.toLowerCase(),n["Webkit"+e]="webkit"+r,n["Moz"+e]="moz"+r,n}var Rr={animationend:lt("Animation","AnimationEnd"),animationiteration:lt("Animation","AnimationIteration"),animationstart:lt("Animation","AnimationStart"),transitionend:lt("Transition","TransitionEnd")},Ti={},$s={};Be&&($s=document.createElement("div").style,"AnimationEvent"in window||(delete Rr.animationend.animation,delete Rr.animationiteration.animation,delete Rr.animationstart.animation),"TransitionEvent"in window||delete Rr.transitionend.transition);function ni(e){if(Ti[e])return Ti[e];if(!Rr[e])return e;var r=Rr[e],n;for(n in r)if(r.hasOwnProperty(n)&&n in $s)return Ti[e]=r[n];return e}var Hs=ni("animationend"),Qs=ni("animationiteration"),Ys=ni("animationstart"),qs=ni("transitionend"),Gs=new Map,al="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function dr(e,r){Gs.set(e,r),Tr(r,[e])}for(var _i=0;_i<al.length;_i++){var Li=al[_i],jd=Li.toLowerCase(),Fd=Li[0].toUpperCase()+Li.slice(1);dr(jd,"on"+Fd)}dr(Hs,"onAnimationEnd");dr(Qs,"onAnimationIteration");dr(Ys,"onAnimationStart");dr("dblclick","onDoubleClick");dr("focusin","onFocus");dr("focusout","onBlur");dr(qs,"onTransitionEnd");Gr("onMouseEnter",["mouseout","mouseover"]);Gr("onMouseLeave",["mouseout","mouseover"]);Gr("onPointerEnter",["pointerout","pointerover"]);Gr("onPointerLeave",["pointerout","pointerover"]);Tr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Tr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Tr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Tr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Tr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Tr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Wd=new Set("cancel close invalid load scroll toggle".split(" ").concat(wn));function ll(e,r,n){var t=e.type||"unknown-event";e.currentTarget=n,jc(t,r,void 0,e),e.currentTarget=null}function Ks(e,r){r=(r&4)!==0;for(var n=0;n<e.length;n++){var t=e[n],i=t.event;t=t.listeners;e:{var o=void 0;if(r)for(var a=t.length-1;0<=a;a--){var l=t[a],s=l.instance,c=l.currentTarget;if(l=l.listener,s!==o&&i.isPropagationStopped())break e;ll(i,l,c),o=s}else for(a=0;a<t.length;a++){if(l=t[a],s=l.instance,c=l.currentTarget,l=l.listener,s!==o&&i.isPropagationStopped())break e;ll(i,l,c),o=s}}}if(Lt)throw e=ao,Lt=!1,ao=null,e}function D(e,r){var n=r[ho];n===void 0&&(n=r[ho]=new Set);var t=e+"__bubble";n.has(t)||(Xs(r,e,2,!1),n.add(t))}function Ni(e,r,n){var t=0;r&&(t|=4),Xs(n,e,t,r)}var st="_reactListening"+Math.random().toString(36).slice(2);function In(e){if(!e[st]){e[st]=!0,is.forEach(function(n){n!=="selectionchange"&&(Wd.has(n)||Ni(n,!1,e),Ni(n,!0,e))});var r=e.nodeType===9?e:e.ownerDocument;r===null||r[st]||(r[st]=!0,Ni("selectionchange",!1,r))}}function Xs(e,r,n,t){switch(Ds(r)){case 1:var i=ed;break;case 4:i=rd;break;default:i=Zo}n=i.bind(null,r,n,e),i=void 0,!oo||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(i=!0),t?i!==void 0?e.addEventListener(r,n,{capture:!0,passive:i}):e.addEventListener(r,n,!0):i!==void 0?e.addEventListener(r,n,{passive:i}):e.addEventListener(r,n,!1)}function Mi(e,r,n,t,i){var o=t;if(!(r&1)&&!(r&2)&&t!==null)e:for(;;){if(t===null)return;var a=t.tag;if(a===3||a===4){var l=t.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=t.return;a!==null;){var s=a.tag;if((s===3||s===4)&&(s=a.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;a=a.return}for(;l!==null;){if(a=yr(l),a===null)return;if(s=a.tag,s===5||s===6){t=o=a;continue e}l=l.parentNode}}t=t.return}xs(function(){var c=o,m=qo(n),v=[];e:{var p=Gs.get(e);if(p!==void 0){var y=ea,w=e;switch(e){case"keypress":if(xt(n)===0)break e;case"keydown":case"keyup":y=gd;break;case"focusin":w="focus",y=Ci;break;case"focusout":w="blur",y=Ci;break;case"beforeblur":case"afterblur":y=Ci;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Ga;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=id;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=wd;break;case Hs:case Qs:case Ys:y=ld;break;case qs:y=kd;break;case"scroll":y=nd;break;case"wheel":y=bd;break;case"copy":case"cut":case"paste":y=ud;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Xa}var x=(r&4)!==0,A=!x&&e==="scroll",d=x?p!==null?p+"Capture":null:p;x=[];for(var u=c,f;u!==null;){f=u;var g=f.stateNode;if(f.tag===5&&g!==null&&(f=g,d!==null&&(g=Nn(u,d),g!=null&&x.push(jn(u,g,f)))),A)break;u=u.return}0<x.length&&(p=new y(p,w,null,n,m),v.push({event:p,listeners:x}))}}if(!(r&7)){e:{if(p=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",p&&n!==to&&(w=n.relatedTarget||n.fromElement)&&(yr(w)||w[$e]))break e;if((y||p)&&(p=m.window===m?m:(p=m.ownerDocument)?p.defaultView||p.parentWindow:window,y?(w=n.relatedTarget||n.toElement,y=c,w=w?yr(w):null,w!==null&&(A=_r(w),w!==A||w.tag!==5&&w.tag!==6)&&(w=null)):(y=null,w=c),y!==w)){if(x=Ga,g="onMouseLeave",d="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(x=Xa,g="onPointerLeave",d="onPointerEnter",u="pointer"),A=y==null?p:Ar(y),f=w==null?p:Ar(w),p=new x(g,u+"leave",y,n,m),p.target=A,p.relatedTarget=f,g=null,yr(m)===c&&(x=new x(d,u+"enter",w,n,m),x.target=f,x.relatedTarget=A,g=x),A=g,y&&w)r:{for(x=y,d=w,u=0,f=x;f;f=Lr(f))u++;for(f=0,g=d;g;g=Lr(g))f++;for(;0<u-f;)x=Lr(x),u--;for(;0<f-u;)d=Lr(d),f--;for(;u--;){if(x===d||d!==null&&x===d.alternate)break r;x=Lr(x),d=Lr(d)}x=null}else x=null;y!==null&&sl(v,p,y,x,!1),w!==null&&A!==null&&sl(v,A,w,x,!0)}}e:{if(p=c?Ar(c):window,y=p.nodeName&&p.nodeName.toLowerCase(),y==="select"||y==="input"&&p.type==="file")var S=Ld;else if(el(p))if(Ws)S=Dd;else{S=Md;var E=Nd}else(y=p.nodeName)&&y.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(S=Od);if(S&&(S=S(e,c))){Fs(v,S,n,m);break e}E&&E(e,p,c),e==="focusout"&&(E=p._wrapperState)&&E.controlled&&p.type==="number"&&Zi(p,"number",p.value)}switch(E=c?Ar(c):window,e){case"focusin":(el(E)||E.contentEditable==="true")&&(Dr=E,co=c,En=null);break;case"focusout":En=co=Dr=null;break;case"mousedown":fo=!0;break;case"contextmenu":case"mouseup":case"dragend":fo=!1,ol(v,n,m);break;case"selectionchange":if(Id)break;case"keydown":case"keyup":ol(v,n,m)}var C;if(na)e:{switch(e){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else Or?Is(e,n)&&(z="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(z="onCompositionStart");z&&(As&&n.locale!=="ko"&&(Or||z!=="onCompositionStart"?z==="onCompositionEnd"&&Or&&(C=Rs()):(Je=m,Jo="value"in Je?Je.value:Je.textContent,Or=!0)),E=Rt(c,z),0<E.length&&(z=new Ka(z,e,null,n,m),v.push({event:z,listeners:E}),C?z.data=C:(C=js(n),C!==null&&(z.data=C)))),(C=Cd?zd(e,n):Pd(e,n))&&(c=Rt(c,"onBeforeInput"),0<c.length&&(m=new Ka("onBeforeInput","beforeinput",null,n,m),v.push({event:m,listeners:c}),m.data=C))}Ks(v,r)})}function jn(e,r,n){return{instance:e,listener:r,currentTarget:n}}function Rt(e,r){for(var n=r+"Capture",t=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Nn(e,n),o!=null&&t.unshift(jn(e,o,i)),o=Nn(e,r),o!=null&&t.push(jn(e,o,i))),e=e.return}return t}function Lr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function sl(e,r,n,t,i){for(var o=r._reactName,a=[];n!==null&&n!==t;){var l=n,s=l.alternate,c=l.stateNode;if(s!==null&&s===t)break;l.tag===5&&c!==null&&(l=c,i?(s=Nn(n,o),s!=null&&a.unshift(jn(n,s,l))):i||(s=Nn(n,o),s!=null&&a.push(jn(n,s,l)))),n=n.return}a.length!==0&&e.push({event:r,listeners:a})}var Ud=/\r\n?/g,Vd=/\u0000|\uFFFD/g;function ul(e){return(typeof e=="string"?e:""+e).replace(Ud,`
`).replace(Vd,"")}function ut(e,r,n){if(r=ul(r),ul(e)!==r&&n)throw Error(h(425))}function At(){}var po=null,vo=null;function mo(e,r){return e==="textarea"||e==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var go=typeof setTimeout=="function"?setTimeout:void 0,Bd=typeof clearTimeout=="function"?clearTimeout:void 0,cl=typeof Promise=="function"?Promise:void 0,$d=typeof queueMicrotask=="function"?queueMicrotask:typeof cl<"u"?function(e){return cl.resolve(null).then(e).catch(Hd)}:go;function Hd(e){setTimeout(function(){throw e})}function Oi(e,r){var n=r,t=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(t===0){e.removeChild(i),Dn(r);return}t--}else n!=="$"&&n!=="$?"&&n!=="$!"||t++;n=i}while(n);Dn(r)}function ir(e){for(;e!=null;e=e.nextSibling){var r=e.nodeType;if(r===1||r===3)break;if(r===8){if(r=e.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return e}function dl(e){e=e.previousSibling;for(var r=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(r===0)return e;r--}else n==="/$"&&r++}e=e.previousSibling}return null}var on=Math.random().toString(36).slice(2),Re="__reactFiber$"+on,Fn="__reactProps$"+on,$e="__reactContainer$"+on,ho="__reactEvents$"+on,Qd="__reactListeners$"+on,Yd="__reactHandles$"+on;function yr(e){var r=e[Re];if(r)return r;for(var n=e.parentNode;n;){if(r=n[$e]||n[Re]){if(n=r.alternate,r.child!==null||n!==null&&n.child!==null)for(e=dl(e);e!==null;){if(n=e[Re])return n;e=dl(e)}return r}e=n,n=e.parentNode}return null}function Gn(e){return e=e[Re]||e[$e],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ar(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(h(33))}function ti(e){return e[Fn]||null}var yo=[],Ir=-1;function fr(e){return{current:e}}function R(e){0>Ir||(e.current=yo[Ir],yo[Ir]=null,Ir--)}function O(e,r){Ir++,yo[Ir]=e.current,e.current=r}var cr={},te=fr(cr),ce=fr(!1),br=cr;function Kr(e,r){var n=e.type.contextTypes;if(!n)return cr;var t=e.stateNode;if(t&&t.__reactInternalMemoizedUnmaskedChildContext===r)return t.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=r[o];return t&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=i),i}function de(e){return e=e.childContextTypes,e!=null}function It(){R(ce),R(te)}function fl(e,r,n){if(te.current!==cr)throw Error(h(168));O(te,r),O(ce,n)}function Zs(e,r,n){var t=e.stateNode;if(r=r.childContextTypes,typeof t.getChildContext!="function")return n;t=t.getChildContext();for(var i in t)if(!(i in r))throw Error(h(108,Nc(e)||"Unknown",i));return W({},n,t)}function jt(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||cr,br=te.current,O(te,e),O(ce,ce.current),!0}function pl(e,r,n){var t=e.stateNode;if(!t)throw Error(h(169));n?(e=Zs(e,r,br),t.__reactInternalMemoizedMergedChildContext=e,R(ce),R(te),O(te,e)):R(ce),O(ce,n)}var Fe=null,ii=!1,Di=!1;function Js(e){Fe===null?Fe=[e]:Fe.push(e)}function qd(e){ii=!0,Js(e)}function pr(){if(!Di&&Fe!==null){Di=!0;var e=0,r=M;try{var n=Fe;for(M=1;e<n.length;e++){var t=n[e];do t=t(!0);while(t!==null)}Fe=null,ii=!1}catch(i){throw Fe!==null&&(Fe=Fe.slice(e+1)),Es(Go,pr),i}finally{M=r,Di=!1}}return null}var jr=[],Fr=0,Ft=null,Wt=0,we=[],xe=0,Er=null,We=1,Ue="";function gr(e,r){jr[Fr++]=Wt,jr[Fr++]=Ft,Ft=e,Wt=r}function eu(e,r,n){we[xe++]=We,we[xe++]=Ue,we[xe++]=Er,Er=e;var t=We;e=Ue;var i=32-Le(t)-1;t&=~(1<<i),n+=1;var o=32-Le(r)+i;if(30<o){var a=i-i%5;o=(t&(1<<a)-1).toString(32),t>>=a,i-=a,We=1<<32-Le(r)+i|n<<i|t,Ue=o+e}else We=1<<o|n<<i|t,Ue=e}function ia(e){e.return!==null&&(gr(e,1),eu(e,1,0))}function oa(e){for(;e===Ft;)Ft=jr[--Fr],jr[Fr]=null,Wt=jr[--Fr],jr[Fr]=null;for(;e===Er;)Er=we[--xe],we[xe]=null,Ue=we[--xe],we[xe]=null,We=we[--xe],we[xe]=null}var me=null,ve=null,I=!1,_e=null;function ru(e,r){var n=ke(5,null,null,0);n.elementType="DELETED",n.stateNode=r,n.return=e,r=e.deletions,r===null?(e.deletions=[n],e.flags|=16):r.push(n)}function vl(e,r){switch(e.tag){case 5:var n=e.type;return r=r.nodeType!==1||n.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(e.stateNode=r,me=e,ve=ir(r.firstChild),!0):!1;case 6:return r=e.pendingProps===""||r.nodeType!==3?null:r,r!==null?(e.stateNode=r,me=e,ve=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(n=Er!==null?{id:We,overflow:Ue}:null,e.memoizedState={dehydrated:r,treeContext:n,retryLane:1073741824},n=ke(18,null,null,0),n.stateNode=r,n.return=e,e.child=n,me=e,ve=null,!0):!1;default:return!1}}function wo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function xo(e){if(I){var r=ve;if(r){var n=r;if(!vl(e,r)){if(wo(e))throw Error(h(418));r=ir(n.nextSibling);var t=me;r&&vl(e,r)?ru(t,n):(e.flags=e.flags&-4097|2,I=!1,me=e)}}else{if(wo(e))throw Error(h(418));e.flags=e.flags&-4097|2,I=!1,me=e}}}function ml(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;me=e}function ct(e){if(e!==me)return!1;if(!I)return ml(e),I=!0,!1;var r;if((r=e.tag!==3)&&!(r=e.tag!==5)&&(r=e.type,r=r!=="head"&&r!=="body"&&!mo(e.type,e.memoizedProps)),r&&(r=ve)){if(wo(e))throw nu(),Error(h(418));for(;r;)ru(e,r),r=ir(r.nextSibling)}if(ml(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(h(317));e:{for(e=e.nextSibling,r=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(r===0){ve=ir(e.nextSibling);break e}r--}else n!=="$"&&n!=="$!"&&n!=="$?"||r++}e=e.nextSibling}ve=null}}else ve=me?ir(e.stateNode.nextSibling):null;return!0}function nu(){for(var e=ve;e;)e=ir(e.nextSibling)}function Xr(){ve=me=null,I=!1}function aa(e){_e===null?_e=[e]:_e.push(e)}var Gd=Ye.ReactCurrentBatchConfig;function pn(e,r,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(h(309));var t=n.stateNode}if(!t)throw Error(h(147,e));var i=t,o=""+e;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===o?r.ref:(r=function(a){var l=i.refs;a===null?delete l[o]:l[o]=a},r._stringRef=o,r)}if(typeof e!="string")throw Error(h(284));if(!n._owner)throw Error(h(290,e))}return e}function dt(e,r){throw e=Object.prototype.toString.call(r),Error(h(31,e==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":e))}function gl(e){var r=e._init;return r(e._payload)}function tu(e){function r(d,u){if(e){var f=d.deletions;f===null?(d.deletions=[u],d.flags|=16):f.push(u)}}function n(d,u){if(!e)return null;for(;u!==null;)r(d,u),u=u.sibling;return null}function t(d,u){for(d=new Map;u!==null;)u.key!==null?d.set(u.key,u):d.set(u.index,u),u=u.sibling;return d}function i(d,u){return d=sr(d,u),d.index=0,d.sibling=null,d}function o(d,u,f){return d.index=f,e?(f=d.alternate,f!==null?(f=f.index,f<u?(d.flags|=2,u):f):(d.flags|=2,u)):(d.flags|=1048576,u)}function a(d){return e&&d.alternate===null&&(d.flags|=2),d}function l(d,u,f,g){return u===null||u.tag!==6?(u=Ui(f,d.mode,g),u.return=d,u):(u=i(u,f),u.return=d,u)}function s(d,u,f,g){var S=f.type;return S===Mr?m(d,u,f.props.children,g,f.key):u!==null&&(u.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Ge&&gl(S)===u.type)?(g=i(u,f.props),g.ref=pn(d,u,f),g.return=d,g):(g=Pt(f.type,f.key,f.props,null,d.mode,g),g.ref=pn(d,u,f),g.return=d,g)}function c(d,u,f,g){return u===null||u.tag!==4||u.stateNode.containerInfo!==f.containerInfo||u.stateNode.implementation!==f.implementation?(u=Vi(f,d.mode,g),u.return=d,u):(u=i(u,f.children||[]),u.return=d,u)}function m(d,u,f,g,S){return u===null||u.tag!==7?(u=Sr(f,d.mode,g,S),u.return=d,u):(u=i(u,f),u.return=d,u)}function v(d,u,f){if(typeof u=="string"&&u!==""||typeof u=="number")return u=Ui(""+u,d.mode,f),u.return=d,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case et:return f=Pt(u.type,u.key,u.props,null,d.mode,f),f.ref=pn(d,null,u),f.return=d,f;case Nr:return u=Vi(u,d.mode,f),u.return=d,u;case Ge:var g=u._init;return v(d,g(u._payload),f)}if(hn(u)||sn(u))return u=Sr(u,d.mode,f,null),u.return=d,u;dt(d,u)}return null}function p(d,u,f,g){var S=u!==null?u.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return S!==null?null:l(d,u,""+f,g);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case et:return f.key===S?s(d,u,f,g):null;case Nr:return f.key===S?c(d,u,f,g):null;case Ge:return S=f._init,p(d,u,S(f._payload),g)}if(hn(f)||sn(f))return S!==null?null:m(d,u,f,g,null);dt(d,f)}return null}function y(d,u,f,g,S){if(typeof g=="string"&&g!==""||typeof g=="number")return d=d.get(f)||null,l(u,d,""+g,S);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case et:return d=d.get(g.key===null?f:g.key)||null,s(u,d,g,S);case Nr:return d=d.get(g.key===null?f:g.key)||null,c(u,d,g,S);case Ge:var E=g._init;return y(d,u,f,E(g._payload),S)}if(hn(g)||sn(g))return d=d.get(f)||null,m(u,d,g,S,null);dt(u,g)}return null}function w(d,u,f,g){for(var S=null,E=null,C=u,z=u=0,V=null;C!==null&&z<f.length;z++){C.index>z?(V=C,C=null):V=C.sibling;var L=p(d,C,f[z],g);if(L===null){C===null&&(C=V);break}e&&C&&L.alternate===null&&r(d,C),u=o(L,u,z),E===null?S=L:E.sibling=L,E=L,C=V}if(z===f.length)return n(d,C),I&&gr(d,z),S;if(C===null){for(;z<f.length;z++)C=v(d,f[z],g),C!==null&&(u=o(C,u,z),E===null?S=C:E.sibling=C,E=C);return I&&gr(d,z),S}for(C=t(d,C);z<f.length;z++)V=y(C,d,z,f[z],g),V!==null&&(e&&V.alternate!==null&&C.delete(V.key===null?z:V.key),u=o(V,u,z),E===null?S=V:E.sibling=V,E=V);return e&&C.forEach(function(Ce){return r(d,Ce)}),I&&gr(d,z),S}function x(d,u,f,g){var S=sn(f);if(typeof S!="function")throw Error(h(150));if(f=S.call(f),f==null)throw Error(h(151));for(var E=S=null,C=u,z=u=0,V=null,L=f.next();C!==null&&!L.done;z++,L=f.next()){C.index>z?(V=C,C=null):V=C.sibling;var Ce=p(d,C,L.value,g);if(Ce===null){C===null&&(C=V);break}e&&C&&Ce.alternate===null&&r(d,C),u=o(Ce,u,z),E===null?S=Ce:E.sibling=Ce,E=Ce,C=V}if(L.done)return n(d,C),I&&gr(d,z),S;if(C===null){for(;!L.done;z++,L=f.next())L=v(d,L.value,g),L!==null&&(u=o(L,u,z),E===null?S=L:E.sibling=L,E=L);return I&&gr(d,z),S}for(C=t(d,C);!L.done;z++,L=f.next())L=y(C,d,z,L.value,g),L!==null&&(e&&L.alternate!==null&&C.delete(L.key===null?z:L.key),u=o(L,u,z),E===null?S=L:E.sibling=L,E=L);return e&&C.forEach(function(an){return r(d,an)}),I&&gr(d,z),S}function A(d,u,f,g){if(typeof f=="object"&&f!==null&&f.type===Mr&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case et:e:{for(var S=f.key,E=u;E!==null;){if(E.key===S){if(S=f.type,S===Mr){if(E.tag===7){n(d,E.sibling),u=i(E,f.props.children),u.return=d,d=u;break e}}else if(E.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Ge&&gl(S)===E.type){n(d,E.sibling),u=i(E,f.props),u.ref=pn(d,E,f),u.return=d,d=u;break e}n(d,E);break}else r(d,E);E=E.sibling}f.type===Mr?(u=Sr(f.props.children,d.mode,g,f.key),u.return=d,d=u):(g=Pt(f.type,f.key,f.props,null,d.mode,g),g.ref=pn(d,u,f),g.return=d,d=g)}return a(d);case Nr:e:{for(E=f.key;u!==null;){if(u.key===E)if(u.tag===4&&u.stateNode.containerInfo===f.containerInfo&&u.stateNode.implementation===f.implementation){n(d,u.sibling),u=i(u,f.children||[]),u.return=d,d=u;break e}else{n(d,u);break}else r(d,u);u=u.sibling}u=Vi(f,d.mode,g),u.return=d,d=u}return a(d);case Ge:return E=f._init,A(d,u,E(f._payload),g)}if(hn(f))return w(d,u,f,g);if(sn(f))return x(d,u,f,g);dt(d,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,u!==null&&u.tag===6?(n(d,u.sibling),u=i(u,f),u.return=d,d=u):(n(d,u),u=Ui(f,d.mode,g),u.return=d,d=u),a(d)):n(d,u)}return A}var Zr=tu(!0),iu=tu(!1),Ut=fr(null),Vt=null,Wr=null,la=null;function sa(){la=Wr=Vt=null}function ua(e){var r=Ut.current;R(Ut),e._currentValue=r}function ko(e,r,n){for(;e!==null;){var t=e.alternate;if((e.childLanes&r)!==r?(e.childLanes|=r,t!==null&&(t.childLanes|=r)):t!==null&&(t.childLanes&r)!==r&&(t.childLanes|=r),e===n)break;e=e.return}}function Yr(e,r){Vt=e,la=Wr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&r&&(ue=!0),e.firstContext=null)}function be(e){var r=e._currentValue;if(la!==e)if(e={context:e,memoizedValue:r,next:null},Wr===null){if(Vt===null)throw Error(h(308));Wr=e,Vt.dependencies={lanes:0,firstContext:e}}else Wr=Wr.next=e;return r}var wr=null;function ca(e){wr===null?wr=[e]:wr.push(e)}function ou(e,r,n,t){var i=r.interleaved;return i===null?(n.next=n,ca(r)):(n.next=i.next,i.next=n),r.interleaved=n,He(e,t)}function He(e,r){e.lanes|=r;var n=e.alternate;for(n!==null&&(n.lanes|=r),n=e,e=e.return;e!==null;)e.childLanes|=r,n=e.alternate,n!==null&&(n.childLanes|=r),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Ke=!1;function da(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function au(e,r){e=e.updateQueue,r.updateQueue===e&&(r.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ve(e,r){return{eventTime:e,lane:r,tag:0,payload:null,callback:null,next:null}}function or(e,r,n){var t=e.updateQueue;if(t===null)return null;if(t=t.shared,N&2){var i=t.pending;return i===null?r.next=r:(r.next=i.next,i.next=r),t.pending=r,He(e,n)}return i=t.interleaved,i===null?(r.next=r,ca(t)):(r.next=i.next,i.next=r),t.interleaved=r,He(e,n)}function kt(e,r,n){if(r=r.updateQueue,r!==null&&(r=r.shared,(n&4194240)!==0)){var t=r.lanes;t&=e.pendingLanes,n|=t,r.lanes=n,Ko(e,n)}}function hl(e,r){var n=e.updateQueue,t=e.alternate;if(t!==null&&(t=t.updateQueue,n===t)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=r:o=o.next=r}else i=o=r;n={baseState:t.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:t.shared,effects:t.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=r:e.next=r,n.lastBaseUpdate=r}function Bt(e,r,n,t){var i=e.updateQueue;Ke=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var s=l,c=s.next;s.next=null,a===null?o=c:a.next=c,a=s;var m=e.alternate;m!==null&&(m=m.updateQueue,l=m.lastBaseUpdate,l!==a&&(l===null?m.firstBaseUpdate=c:l.next=c,m.lastBaseUpdate=s))}if(o!==null){var v=i.baseState;a=0,m=c=s=null,l=o;do{var p=l.lane,y=l.eventTime;if((t&p)===p){m!==null&&(m=m.next={eventTime:y,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var w=e,x=l;switch(p=r,y=n,x.tag){case 1:if(w=x.payload,typeof w=="function"){v=w.call(y,v,p);break e}v=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=x.payload,p=typeof w=="function"?w.call(y,v,p):w,p==null)break e;v=W({},v,p);break e;case 2:Ke=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[l]:p.push(l))}else y={eventTime:y,lane:p,tag:l.tag,payload:l.payload,callback:l.callback,next:null},m===null?(c=m=y,s=v):m=m.next=y,a|=p;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;p=l,l=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(m===null&&(s=v),i.baseState=s,i.firstBaseUpdate=c,i.lastBaseUpdate=m,r=i.shared.interleaved,r!==null){i=r;do a|=i.lane,i=i.next;while(i!==r)}else o===null&&(i.shared.lanes=0);zr|=a,e.lanes=a,e.memoizedState=v}}function yl(e,r,n){if(e=r.effects,r.effects=null,e!==null)for(r=0;r<e.length;r++){var t=e[r],i=t.callback;if(i!==null){if(t.callback=null,t=n,typeof i!="function")throw Error(h(191,i));i.call(t)}}}var Kn={},Ie=fr(Kn),Wn=fr(Kn),Un=fr(Kn);function xr(e){if(e===Kn)throw Error(h(174));return e}function fa(e,r){switch(O(Un,r),O(Wn,e),O(Ie,Kn),e=r.nodeType,e){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:eo(null,"");break;default:e=e===8?r.parentNode:r,r=e.namespaceURI||null,e=e.tagName,r=eo(r,e)}R(Ie),O(Ie,r)}function Jr(){R(Ie),R(Wn),R(Un)}function lu(e){xr(Un.current);var r=xr(Ie.current),n=eo(r,e.type);r!==n&&(O(Wn,e),O(Ie,n))}function pa(e){Wn.current===e&&(R(Ie),R(Wn))}var j=fr(0);function $t(e){for(var r=e;r!==null;){if(r.tag===13){var n=r.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if(r.flags&128)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Ri=[];function va(){for(var e=0;e<Ri.length;e++)Ri[e]._workInProgressVersionPrimary=null;Ri.length=0}var St=Ye.ReactCurrentDispatcher,Ai=Ye.ReactCurrentBatchConfig,Cr=0,F=null,Q=null,G=null,Ht=!1,Cn=!1,Vn=0,Kd=0;function ee(){throw Error(h(321))}function ma(e,r){if(r===null)return!1;for(var n=0;n<r.length&&n<e.length;n++)if(!Me(e[n],r[n]))return!1;return!0}function ga(e,r,n,t,i,o){if(Cr=o,F=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,St.current=e===null||e.memoizedState===null?ef:rf,e=n(t,i),Cn){o=0;do{if(Cn=!1,Vn=0,25<=o)throw Error(h(301));o+=1,G=Q=null,r.updateQueue=null,St.current=nf,e=n(t,i)}while(Cn)}if(St.current=Qt,r=Q!==null&&Q.next!==null,Cr=0,G=Q=F=null,Ht=!1,r)throw Error(h(300));return e}function ha(){var e=Vn!==0;return Vn=0,e}function De(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return G===null?F.memoizedState=G=e:G=G.next=e,G}function Ee(){if(Q===null){var e=F.alternate;e=e!==null?e.memoizedState:null}else e=Q.next;var r=G===null?F.memoizedState:G.next;if(r!==null)G=r,Q=e;else{if(e===null)throw Error(h(310));Q=e,e={memoizedState:Q.memoizedState,baseState:Q.baseState,baseQueue:Q.baseQueue,queue:Q.queue,next:null},G===null?F.memoizedState=G=e:G=G.next=e}return G}function Bn(e,r){return typeof r=="function"?r(e):r}function Ii(e){var r=Ee(),n=r.queue;if(n===null)throw Error(h(311));n.lastRenderedReducer=e;var t=Q,i=t.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}t.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,t=t.baseState;var l=a=null,s=null,c=o;do{var m=c.lane;if((Cr&m)===m)s!==null&&(s=s.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),t=c.hasEagerState?c.eagerState:e(t,c.action);else{var v={lane:m,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};s===null?(l=s=v,a=t):s=s.next=v,F.lanes|=m,zr|=m}c=c.next}while(c!==null&&c!==o);s===null?a=t:s.next=l,Me(t,r.memoizedState)||(ue=!0),r.memoizedState=t,r.baseState=a,r.baseQueue=s,n.lastRenderedState=t}if(e=n.interleaved,e!==null){i=e;do o=i.lane,F.lanes|=o,zr|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[r.memoizedState,n.dispatch]}function ji(e){var r=Ee(),n=r.queue;if(n===null)throw Error(h(311));n.lastRenderedReducer=e;var t=n.dispatch,i=n.pending,o=r.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);Me(o,r.memoizedState)||(ue=!0),r.memoizedState=o,r.baseQueue===null&&(r.baseState=o),n.lastRenderedState=o}return[o,t]}function su(){}function uu(e,r){var n=F,t=Ee(),i=r(),o=!Me(t.memoizedState,i);if(o&&(t.memoizedState=i,ue=!0),t=t.queue,ya(fu.bind(null,n,t,e),[e]),t.getSnapshot!==r||o||G!==null&&G.memoizedState.tag&1){if(n.flags|=2048,$n(9,du.bind(null,n,t,i,r),void 0,null),K===null)throw Error(h(349));Cr&30||cu(n,r,i)}return i}function cu(e,r,n){e.flags|=16384,e={getSnapshot:r,value:n},r=F.updateQueue,r===null?(r={lastEffect:null,stores:null},F.updateQueue=r,r.stores=[e]):(n=r.stores,n===null?r.stores=[e]:n.push(e))}function du(e,r,n,t){r.value=n,r.getSnapshot=t,pu(r)&&vu(e)}function fu(e,r,n){return n(function(){pu(r)&&vu(e)})}function pu(e){var r=e.getSnapshot;e=e.value;try{var n=r();return!Me(e,n)}catch{return!0}}function vu(e){var r=He(e,1);r!==null&&Ne(r,e,1,-1)}function wl(e){var r=De();return typeof e=="function"&&(e=e()),r.memoizedState=r.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Bn,lastRenderedState:e},r.queue=e,e=e.dispatch=Jd.bind(null,F,e),[r.memoizedState,e]}function $n(e,r,n,t){return e={tag:e,create:r,destroy:n,deps:t,next:null},r=F.updateQueue,r===null?(r={lastEffect:null,stores:null},F.updateQueue=r,r.lastEffect=e.next=e):(n=r.lastEffect,n===null?r.lastEffect=e.next=e:(t=n.next,n.next=e,e.next=t,r.lastEffect=e)),e}function mu(){return Ee().memoizedState}function bt(e,r,n,t){var i=De();F.flags|=e,i.memoizedState=$n(1|r,n,void 0,t===void 0?null:t)}function oi(e,r,n,t){var i=Ee();t=t===void 0?null:t;var o=void 0;if(Q!==null){var a=Q.memoizedState;if(o=a.destroy,t!==null&&ma(t,a.deps)){i.memoizedState=$n(r,n,o,t);return}}F.flags|=e,i.memoizedState=$n(1|r,n,o,t)}function xl(e,r){return bt(8390656,8,e,r)}function ya(e,r){return oi(2048,8,e,r)}function gu(e,r){return oi(4,2,e,r)}function hu(e,r){return oi(4,4,e,r)}function yu(e,r){if(typeof r=="function")return e=e(),r(e),function(){r(null)};if(r!=null)return e=e(),r.current=e,function(){r.current=null}}function wu(e,r,n){return n=n!=null?n.concat([e]):null,oi(4,4,yu.bind(null,r,e),n)}function wa(){}function xu(e,r){var n=Ee();r=r===void 0?null:r;var t=n.memoizedState;return t!==null&&r!==null&&ma(r,t[1])?t[0]:(n.memoizedState=[e,r],e)}function ku(e,r){var n=Ee();r=r===void 0?null:r;var t=n.memoizedState;return t!==null&&r!==null&&ma(r,t[1])?t[0]:(e=e(),n.memoizedState=[e,r],e)}function Su(e,r,n){return Cr&21?(Me(n,r)||(n=Ps(),F.lanes|=n,zr|=n,e.baseState=!0),r):(e.baseState&&(e.baseState=!1,ue=!0),e.memoizedState=n)}function Xd(e,r){var n=M;M=n!==0&&4>n?n:4,e(!0);var t=Ai.transition;Ai.transition={};try{e(!1),r()}finally{M=n,Ai.transition=t}}function bu(){return Ee().memoizedState}function Zd(e,r,n){var t=lr(e);if(n={lane:t,action:n,hasEagerState:!1,eagerState:null,next:null},Eu(e))Cu(r,n);else if(n=ou(e,r,n,t),n!==null){var i=oe();Ne(n,e,t,i),zu(n,r,t)}}function Jd(e,r,n){var t=lr(e),i={lane:t,action:n,hasEagerState:!1,eagerState:null,next:null};if(Eu(e))Cu(r,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=r.lastRenderedReducer,o!==null))try{var a=r.lastRenderedState,l=o(a,n);if(i.hasEagerState=!0,i.eagerState=l,Me(l,a)){var s=r.interleaved;s===null?(i.next=i,ca(r)):(i.next=s.next,s.next=i),r.interleaved=i;return}}catch{}finally{}n=ou(e,r,i,t),n!==null&&(i=oe(),Ne(n,e,t,i),zu(n,r,t))}}function Eu(e){var r=e.alternate;return e===F||r!==null&&r===F}function Cu(e,r){Cn=Ht=!0;var n=e.pending;n===null?r.next=r:(r.next=n.next,n.next=r),e.pending=r}function zu(e,r,n){if(n&4194240){var t=r.lanes;t&=e.pendingLanes,n|=t,r.lanes=n,Ko(e,n)}}var Qt={readContext:be,useCallback:ee,useContext:ee,useEffect:ee,useImperativeHandle:ee,useInsertionEffect:ee,useLayoutEffect:ee,useMemo:ee,useReducer:ee,useRef:ee,useState:ee,useDebugValue:ee,useDeferredValue:ee,useTransition:ee,useMutableSource:ee,useSyncExternalStore:ee,useId:ee,unstable_isNewReconciler:!1},ef={readContext:be,useCallback:function(e,r){return De().memoizedState=[e,r===void 0?null:r],e},useContext:be,useEffect:xl,useImperativeHandle:function(e,r,n){return n=n!=null?n.concat([e]):null,bt(4194308,4,yu.bind(null,r,e),n)},useLayoutEffect:function(e,r){return bt(4194308,4,e,r)},useInsertionEffect:function(e,r){return bt(4,2,e,r)},useMemo:function(e,r){var n=De();return r=r===void 0?null:r,e=e(),n.memoizedState=[e,r],e},useReducer:function(e,r,n){var t=De();return r=n!==void 0?n(r):r,t.memoizedState=t.baseState=r,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},t.queue=e,e=e.dispatch=Zd.bind(null,F,e),[t.memoizedState,e]},useRef:function(e){var r=De();return e={current:e},r.memoizedState=e},useState:wl,useDebugValue:wa,useDeferredValue:function(e){return De().memoizedState=e},useTransition:function(){var e=wl(!1),r=e[0];return e=Xd.bind(null,e[1]),De().memoizedState=e,[r,e]},useMutableSource:function(){},useSyncExternalStore:function(e,r,n){var t=F,i=De();if(I){if(n===void 0)throw Error(h(407));n=n()}else{if(n=r(),K===null)throw Error(h(349));Cr&30||cu(t,r,n)}i.memoizedState=n;var o={value:n,getSnapshot:r};return i.queue=o,xl(fu.bind(null,t,o,e),[e]),t.flags|=2048,$n(9,du.bind(null,t,o,n,r),void 0,null),n},useId:function(){var e=De(),r=K.identifierPrefix;if(I){var n=Ue,t=We;n=(t&~(1<<32-Le(t)-1)).toString(32)+n,r=":"+r+"R"+n,n=Vn++,0<n&&(r+="H"+n.toString(32)),r+=":"}else n=Kd++,r=":"+r+"r"+n.toString(32)+":";return e.memoizedState=r},unstable_isNewReconciler:!1},rf={readContext:be,useCallback:xu,useContext:be,useEffect:ya,useImperativeHandle:wu,useInsertionEffect:gu,useLayoutEffect:hu,useMemo:ku,useReducer:Ii,useRef:mu,useState:function(){return Ii(Bn)},useDebugValue:wa,useDeferredValue:function(e){var r=Ee();return Su(r,Q.memoizedState,e)},useTransition:function(){var e=Ii(Bn)[0],r=Ee().memoizedState;return[e,r]},useMutableSource:su,useSyncExternalStore:uu,useId:bu,unstable_isNewReconciler:!1},nf={readContext:be,useCallback:xu,useContext:be,useEffect:ya,useImperativeHandle:wu,useInsertionEffect:gu,useLayoutEffect:hu,useMemo:ku,useReducer:ji,useRef:mu,useState:function(){return ji(Bn)},useDebugValue:wa,useDeferredValue:function(e){var r=Ee();return Q===null?r.memoizedState=e:Su(r,Q.memoizedState,e)},useTransition:function(){var e=ji(Bn)[0],r=Ee().memoizedState;return[e,r]},useMutableSource:su,useSyncExternalStore:uu,useId:bu,unstable_isNewReconciler:!1};function Pe(e,r){if(e&&e.defaultProps){r=W({},r),e=e.defaultProps;for(var n in e)r[n]===void 0&&(r[n]=e[n]);return r}return r}function So(e,r,n,t){r=e.memoizedState,n=n(t,r),n=n==null?r:W({},r,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ai={isMounted:function(e){return(e=e._reactInternals)?_r(e)===e:!1},enqueueSetState:function(e,r,n){e=e._reactInternals;var t=oe(),i=lr(e),o=Ve(t,i);o.payload=r,n!=null&&(o.callback=n),r=or(e,o,i),r!==null&&(Ne(r,e,i,t),kt(r,e,i))},enqueueReplaceState:function(e,r,n){e=e._reactInternals;var t=oe(),i=lr(e),o=Ve(t,i);o.tag=1,o.payload=r,n!=null&&(o.callback=n),r=or(e,o,i),r!==null&&(Ne(r,e,i,t),kt(r,e,i))},enqueueForceUpdate:function(e,r){e=e._reactInternals;var n=oe(),t=lr(e),i=Ve(n,t);i.tag=2,r!=null&&(i.callback=r),r=or(e,i,t),r!==null&&(Ne(r,e,t,n),kt(r,e,t))}};function kl(e,r,n,t,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(t,o,a):r.prototype&&r.prototype.isPureReactComponent?!An(n,t)||!An(i,o):!0}function Pu(e,r,n){var t=!1,i=cr,o=r.contextType;return typeof o=="object"&&o!==null?o=be(o):(i=de(r)?br:te.current,t=r.contextTypes,o=(t=t!=null)?Kr(e,i):cr),r=new r(n,o),e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=ai,e.stateNode=r,r._reactInternals=e,t&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),r}function Sl(e,r,n,t){e=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(n,t),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(n,t),r.state!==e&&ai.enqueueReplaceState(r,r.state,null)}function bo(e,r,n,t){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},da(e);var o=r.contextType;typeof o=="object"&&o!==null?i.context=be(o):(o=de(r)?br:te.current,i.context=Kr(e,o)),i.state=e.memoizedState,o=r.getDerivedStateFromProps,typeof o=="function"&&(So(e,r,o,n),i.state=e.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(r=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),r!==i.state&&ai.enqueueReplaceState(i,i.state,null),Bt(e,n,i,t),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function en(e,r){try{var n="",t=r;do n+=Lc(t),t=t.return;while(t);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:r,stack:i,digest:null}}function Fi(e,r,n){return{value:e,source:null,stack:n??null,digest:r??null}}function Eo(e,r){try{console.error(r.value)}catch(n){setTimeout(function(){throw n})}}var tf=typeof WeakMap=="function"?WeakMap:Map;function Tu(e,r,n){n=Ve(-1,n),n.tag=3,n.payload={element:null};var t=r.value;return n.callback=function(){qt||(qt=!0,Do=t),Eo(e,r)},n}function _u(e,r,n){n=Ve(-1,n),n.tag=3;var t=e.type.getDerivedStateFromError;if(typeof t=="function"){var i=r.value;n.payload=function(){return t(i)},n.callback=function(){Eo(e,r)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Eo(e,r),typeof t!="function"&&(ar===null?ar=new Set([this]):ar.add(this));var a=r.stack;this.componentDidCatch(r.value,{componentStack:a!==null?a:""})}),n}function bl(e,r,n){var t=e.pingCache;if(t===null){t=e.pingCache=new tf;var i=new Set;t.set(r,i)}else i=t.get(r),i===void 0&&(i=new Set,t.set(r,i));i.has(n)||(i.add(n),e=yf.bind(null,e,r,n),r.then(e,e))}function El(e){do{var r;if((r=e.tag===13)&&(r=e.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return e;e=e.return}while(e!==null);return null}function Cl(e,r,n,t,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===r?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(r=Ve(-1,1),r.tag=2,or(n,r,1))),n.lanes|=1),e)}var of=Ye.ReactCurrentOwner,ue=!1;function ie(e,r,n,t){r.child=e===null?iu(r,null,n,t):Zr(r,e.child,n,t)}function zl(e,r,n,t,i){n=n.render;var o=r.ref;return Yr(r,i),t=ga(e,r,n,t,o,i),n=ha(),e!==null&&!ue?(r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~i,Qe(e,r,i)):(I&&n&&ia(r),r.flags|=1,ie(e,r,t,i),r.child)}function Pl(e,r,n,t,i){if(e===null){var o=n.type;return typeof o=="function"&&!Pa(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(r.tag=15,r.type=o,Lu(e,r,o,t,i)):(e=Pt(n.type,null,t,r,r.mode,i),e.ref=r.ref,e.return=r,r.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:An,n(a,t)&&e.ref===r.ref)return Qe(e,r,i)}return r.flags|=1,e=sr(o,t),e.ref=r.ref,e.return=r,r.child=e}function Lu(e,r,n,t,i){if(e!==null){var o=e.memoizedProps;if(An(o,t)&&e.ref===r.ref)if(ue=!1,r.pendingProps=t=o,(e.lanes&i)!==0)e.flags&131072&&(ue=!0);else return r.lanes=e.lanes,Qe(e,r,i)}return Co(e,r,n,t,i)}function Nu(e,r,n){var t=r.pendingProps,i=t.children,o=e!==null?e.memoizedState:null;if(t.mode==="hidden")if(!(r.mode&1))r.memoizedState={baseLanes:0,cachePool:null,transitions:null},O(Vr,pe),pe|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:e,cachePool:null,transitions:null},r.updateQueue=null,O(Vr,pe),pe|=e,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},t=o!==null?o.baseLanes:n,O(Vr,pe),pe|=t}else o!==null?(t=o.baseLanes|n,r.memoizedState=null):t=n,O(Vr,pe),pe|=t;return ie(e,r,i,n),r.child}function Mu(e,r){var n=r.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(r.flags|=512,r.flags|=2097152)}function Co(e,r,n,t,i){var o=de(n)?br:te.current;return o=Kr(r,o),Yr(r,i),n=ga(e,r,n,t,o,i),t=ha(),e!==null&&!ue?(r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~i,Qe(e,r,i)):(I&&t&&ia(r),r.flags|=1,ie(e,r,n,i),r.child)}function Tl(e,r,n,t,i){if(de(n)){var o=!0;jt(r)}else o=!1;if(Yr(r,i),r.stateNode===null)Et(e,r),Pu(r,n,t),bo(r,n,t,i),t=!0;else if(e===null){var a=r.stateNode,l=r.memoizedProps;a.props=l;var s=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=be(c):(c=de(n)?br:te.current,c=Kr(r,c));var m=n.getDerivedStateFromProps,v=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function";v||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==t||s!==c)&&Sl(r,a,t,c),Ke=!1;var p=r.memoizedState;a.state=p,Bt(r,t,a,i),s=r.memoizedState,l!==t||p!==s||ce.current||Ke?(typeof m=="function"&&(So(r,n,m,t),s=r.memoizedState),(l=Ke||kl(r,n,l,t,p,s,c))?(v||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(r.flags|=4194308)):(typeof a.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=t,r.memoizedState=s),a.props=t,a.state=s,a.context=c,t=l):(typeof a.componentDidMount=="function"&&(r.flags|=4194308),t=!1)}else{a=r.stateNode,au(e,r),l=r.memoizedProps,c=r.type===r.elementType?l:Pe(r.type,l),a.props=c,v=r.pendingProps,p=a.context,s=n.contextType,typeof s=="object"&&s!==null?s=be(s):(s=de(n)?br:te.current,s=Kr(r,s));var y=n.getDerivedStateFromProps;(m=typeof y=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==v||p!==s)&&Sl(r,a,t,s),Ke=!1,p=r.memoizedState,a.state=p,Bt(r,t,a,i);var w=r.memoizedState;l!==v||p!==w||ce.current||Ke?(typeof y=="function"&&(So(r,n,y,t),w=r.memoizedState),(c=Ke||kl(r,n,c,t,p,w,s)||!1)?(m||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(t,w,s),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(t,w,s)),typeof a.componentDidUpdate=="function"&&(r.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(r.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(r.flags|=1024),r.memoizedProps=t,r.memoizedState=w),a.props=t,a.state=w,a.context=s,t=c):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(r.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(r.flags|=1024),t=!1)}return zo(e,r,n,t,o,i)}function zo(e,r,n,t,i,o){Mu(e,r);var a=(r.flags&128)!==0;if(!t&&!a)return i&&pl(r,n,!1),Qe(e,r,o);t=r.stateNode,of.current=r;var l=a&&typeof n.getDerivedStateFromError!="function"?null:t.render();return r.flags|=1,e!==null&&a?(r.child=Zr(r,e.child,null,o),r.child=Zr(r,null,l,o)):ie(e,r,l,o),r.memoizedState=t.state,i&&pl(r,n,!0),r.child}function Ou(e){var r=e.stateNode;r.pendingContext?fl(e,r.pendingContext,r.pendingContext!==r.context):r.context&&fl(e,r.context,!1),fa(e,r.containerInfo)}function _l(e,r,n,t,i){return Xr(),aa(i),r.flags|=256,ie(e,r,n,t),r.child}var Po={dehydrated:null,treeContext:null,retryLane:0};function To(e){return{baseLanes:e,cachePool:null,transitions:null}}function Du(e,r,n){var t=r.pendingProps,i=j.current,o=!1,a=(r.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,r.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),O(j,i&1),e===null)return xo(r),e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(r.mode&1?e.data==="$!"?r.lanes=8:r.lanes=1073741824:r.lanes=1,null):(a=t.children,e=t.fallback,o?(t=r.mode,o=r.child,a={mode:"hidden",children:a},!(t&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=ui(a,t,0,null),e=Sr(e,t,n,null),o.return=r,e.return=r,o.sibling=e,r.child=o,r.child.memoizedState=To(n),r.memoizedState=Po,e):xa(r,a));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return af(e,r,a,t,l,i,n);if(o){o=t.fallback,a=r.mode,i=e.child,l=i.sibling;var s={mode:"hidden",children:t.children};return!(a&1)&&r.child!==i?(t=r.child,t.childLanes=0,t.pendingProps=s,r.deletions=null):(t=sr(i,s),t.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=sr(l,o):(o=Sr(o,a,n,null),o.flags|=2),o.return=r,t.return=r,t.sibling=o,r.child=t,t=o,o=r.child,a=e.child.memoizedState,a=a===null?To(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,r.memoizedState=Po,t}return o=e.child,e=o.sibling,t=sr(o,{mode:"visible",children:t.children}),!(r.mode&1)&&(t.lanes=n),t.return=r,t.sibling=null,e!==null&&(n=r.deletions,n===null?(r.deletions=[e],r.flags|=16):n.push(e)),r.child=t,r.memoizedState=null,t}function xa(e,r){return r=ui({mode:"visible",children:r},e.mode,0,null),r.return=e,e.child=r}function ft(e,r,n,t){return t!==null&&aa(t),Zr(r,e.child,null,n),e=xa(r,r.pendingProps.children),e.flags|=2,r.memoizedState=null,e}function af(e,r,n,t,i,o,a){if(n)return r.flags&256?(r.flags&=-257,t=Fi(Error(h(422))),ft(e,r,a,t)):r.memoizedState!==null?(r.child=e.child,r.flags|=128,null):(o=t.fallback,i=r.mode,t=ui({mode:"visible",children:t.children},i,0,null),o=Sr(o,i,a,null),o.flags|=2,t.return=r,o.return=r,t.sibling=o,r.child=t,r.mode&1&&Zr(r,e.child,null,a),r.child.memoizedState=To(a),r.memoizedState=Po,o);if(!(r.mode&1))return ft(e,r,a,null);if(i.data==="$!"){if(t=i.nextSibling&&i.nextSibling.dataset,t)var l=t.dgst;return t=l,o=Error(h(419)),t=Fi(o,t,void 0),ft(e,r,a,t)}if(l=(a&e.childLanes)!==0,ue||l){if(t=K,t!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(t.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,He(e,i),Ne(t,e,i,-1))}return za(),t=Fi(Error(h(421))),ft(e,r,a,t)}return i.data==="$?"?(r.flags|=128,r.child=e.child,r=wf.bind(null,e),i._reactRetry=r,null):(e=o.treeContext,ve=ir(i.nextSibling),me=r,I=!0,_e=null,e!==null&&(we[xe++]=We,we[xe++]=Ue,we[xe++]=Er,We=e.id,Ue=e.overflow,Er=r),r=xa(r,t.children),r.flags|=4096,r)}function Ll(e,r,n){e.lanes|=r;var t=e.alternate;t!==null&&(t.lanes|=r),ko(e.return,r,n)}function Wi(e,r,n,t,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:t,tail:n,tailMode:i}:(o.isBackwards=r,o.rendering=null,o.renderingStartTime=0,o.last=t,o.tail=n,o.tailMode=i)}function Ru(e,r,n){var t=r.pendingProps,i=t.revealOrder,o=t.tail;if(ie(e,r,t.children,n),t=j.current,t&2)t=t&1|2,r.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=r.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ll(e,n,r);else if(e.tag===19)Ll(e,n,r);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===r)break e;for(;e.sibling===null;){if(e.return===null||e.return===r)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}t&=1}if(O(j,t),!(r.mode&1))r.memoizedState=null;else switch(i){case"forwards":for(n=r.child,i=null;n!==null;)e=n.alternate,e!==null&&$t(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=r.child,r.child=null):(i=n.sibling,n.sibling=null),Wi(r,!1,i,n,o);break;case"backwards":for(n=null,i=r.child,r.child=null;i!==null;){if(e=i.alternate,e!==null&&$t(e)===null){r.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Wi(r,!0,n,null,o);break;case"together":Wi(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Et(e,r){!(r.mode&1)&&e!==null&&(e.alternate=null,r.alternate=null,r.flags|=2)}function Qe(e,r,n){if(e!==null&&(r.dependencies=e.dependencies),zr|=r.lanes,!(n&r.childLanes))return null;if(e!==null&&r.child!==e.child)throw Error(h(153));if(r.child!==null){for(e=r.child,n=sr(e,e.pendingProps),r.child=n,n.return=r;e.sibling!==null;)e=e.sibling,n=n.sibling=sr(e,e.pendingProps),n.return=r;n.sibling=null}return r.child}function lf(e,r,n){switch(r.tag){case 3:Ou(r),Xr();break;case 5:lu(r);break;case 1:de(r.type)&&jt(r);break;case 4:fa(r,r.stateNode.containerInfo);break;case 10:var t=r.type._context,i=r.memoizedProps.value;O(Ut,t._currentValue),t._currentValue=i;break;case 13:if(t=r.memoizedState,t!==null)return t.dehydrated!==null?(O(j,j.current&1),r.flags|=128,null):n&r.child.childLanes?Du(e,r,n):(O(j,j.current&1),e=Qe(e,r,n),e!==null?e.sibling:null);O(j,j.current&1);break;case 19:if(t=(n&r.childLanes)!==0,e.flags&128){if(t)return Ru(e,r,n);r.flags|=128}if(i=r.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),O(j,j.current),t)break;return null;case 22:case 23:return r.lanes=0,Nu(e,r,n)}return Qe(e,r,n)}var Au,_o,Iu,ju;Au=function(e,r){for(var n=r.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break;for(;n.sibling===null;){if(n.return===null||n.return===r)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};_o=function(){};Iu=function(e,r,n,t){var i=e.memoizedProps;if(i!==t){e=r.stateNode,xr(Ie.current);var o=null;switch(n){case"input":i=Ki(e,i),t=Ki(e,t),o=[];break;case"select":i=W({},i,{value:void 0}),t=W({},t,{value:void 0}),o=[];break;case"textarea":i=Ji(e,i),t=Ji(e,t),o=[];break;default:typeof i.onClick!="function"&&typeof t.onClick=="function"&&(e.onclick=At)}ro(n,t);var a;n=null;for(c in i)if(!t.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(_n.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in t){var s=t[c];if(l=i!=null?i[c]:void 0,t.hasOwnProperty(c)&&s!==l&&(s!=null||l!=null))if(c==="style")if(l){for(a in l)!l.hasOwnProperty(a)||s&&s.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in s)s.hasOwnProperty(a)&&l[a]!==s[a]&&(n||(n={}),n[a]=s[a])}else n||(o||(o=[]),o.push(c,n)),n=s;else c==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(o=o||[]).push(c,s)):c==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(c,""+s):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(_n.hasOwnProperty(c)?(s!=null&&c==="onScroll"&&D("scroll",e),o||l===s||(o=[])):(o=o||[]).push(c,s))}n&&(o=o||[]).push("style",n);var c=o;(r.updateQueue=c)&&(r.flags|=4)}};ju=function(e,r,n,t){n!==t&&(r.flags|=4)};function vn(e,r){if(!I)switch(e.tailMode){case"hidden":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?r||e.tail===null?e.tail=null:e.tail.sibling=null:t.sibling=null}}function re(e){var r=e.alternate!==null&&e.alternate.child===e.child,n=0,t=0;if(r)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,t|=i.subtreeFlags&14680064,t|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,t|=i.subtreeFlags,t|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=t,e.childLanes=n,r}function sf(e,r,n){var t=r.pendingProps;switch(oa(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return re(r),null;case 1:return de(r.type)&&It(),re(r),null;case 3:return t=r.stateNode,Jr(),R(ce),R(te),va(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(e===null||e.child===null)&&(ct(r)?r.flags|=4:e===null||e.memoizedState.isDehydrated&&!(r.flags&256)||(r.flags|=1024,_e!==null&&(Io(_e),_e=null))),_o(e,r),re(r),null;case 5:pa(r);var i=xr(Un.current);if(n=r.type,e!==null&&r.stateNode!=null)Iu(e,r,n,t,i),e.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!t){if(r.stateNode===null)throw Error(h(166));return re(r),null}if(e=xr(Ie.current),ct(r)){t=r.stateNode,n=r.type;var o=r.memoizedProps;switch(t[Re]=r,t[Fn]=o,e=(r.mode&1)!==0,n){case"dialog":D("cancel",t),D("close",t);break;case"iframe":case"object":case"embed":D("load",t);break;case"video":case"audio":for(i=0;i<wn.length;i++)D(wn[i],t);break;case"source":D("error",t);break;case"img":case"image":case"link":D("error",t),D("load",t);break;case"details":D("toggle",t);break;case"input":Fa(t,o),D("invalid",t);break;case"select":t._wrapperState={wasMultiple:!!o.multiple},D("invalid",t);break;case"textarea":Ua(t,o),D("invalid",t)}ro(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="children"?typeof l=="string"?t.textContent!==l&&(o.suppressHydrationWarning!==!0&&ut(t.textContent,l,e),i=["children",l]):typeof l=="number"&&t.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&ut(t.textContent,l,e),i=["children",""+l]):_n.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&D("scroll",t)}switch(n){case"input":rt(t),Wa(t,o,!0);break;case"textarea":rt(t),Va(t);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(t.onclick=At)}t=i,r.updateQueue=t,t!==null&&(r.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=fs(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof t.is=="string"?e=a.createElement(n,{is:t.is}):(e=a.createElement(n),n==="select"&&(a=e,t.multiple?a.multiple=!0:t.size&&(a.size=t.size))):e=a.createElementNS(e,n),e[Re]=r,e[Fn]=t,Au(e,r,!1,!1),r.stateNode=e;e:{switch(a=no(n,t),n){case"dialog":D("cancel",e),D("close",e),i=t;break;case"iframe":case"object":case"embed":D("load",e),i=t;break;case"video":case"audio":for(i=0;i<wn.length;i++)D(wn[i],e);i=t;break;case"source":D("error",e),i=t;break;case"img":case"image":case"link":D("error",e),D("load",e),i=t;break;case"details":D("toggle",e),i=t;break;case"input":Fa(e,t),i=Ki(e,t),D("invalid",e);break;case"option":i=t;break;case"select":e._wrapperState={wasMultiple:!!t.multiple},i=W({},t,{value:void 0}),D("invalid",e);break;case"textarea":Ua(e,t),i=Ji(e,t),D("invalid",e);break;default:i=t}ro(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var s=l[o];o==="style"?ms(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&ps(e,s)):o==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&Ln(e,s):typeof s=="number"&&Ln(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(_n.hasOwnProperty(o)?s!=null&&o==="onScroll"&&D("scroll",e):s!=null&&$o(e,o,s,a))}switch(n){case"input":rt(e),Wa(e,t,!1);break;case"textarea":rt(e),Va(e);break;case"option":t.value!=null&&e.setAttribute("value",""+ur(t.value));break;case"select":e.multiple=!!t.multiple,o=t.value,o!=null?Br(e,!!t.multiple,o,!1):t.defaultValue!=null&&Br(e,!!t.multiple,t.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=At)}switch(n){case"button":case"input":case"select":case"textarea":t=!!t.autoFocus;break e;case"img":t=!0;break e;default:t=!1}}t&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return re(r),null;case 6:if(e&&r.stateNode!=null)ju(e,r,e.memoizedProps,t);else{if(typeof t!="string"&&r.stateNode===null)throw Error(h(166));if(n=xr(Un.current),xr(Ie.current),ct(r)){if(t=r.stateNode,n=r.memoizedProps,t[Re]=r,(o=t.nodeValue!==n)&&(e=me,e!==null))switch(e.tag){case 3:ut(t.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ut(t.nodeValue,n,(e.mode&1)!==0)}o&&(r.flags|=4)}else t=(n.nodeType===9?n:n.ownerDocument).createTextNode(t),t[Re]=r,r.stateNode=t}return re(r),null;case 13:if(R(j),t=r.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(I&&ve!==null&&r.mode&1&&!(r.flags&128))nu(),Xr(),r.flags|=98560,o=!1;else if(o=ct(r),t!==null&&t.dehydrated!==null){if(e===null){if(!o)throw Error(h(318));if(o=r.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(h(317));o[Re]=r}else Xr(),!(r.flags&128)&&(r.memoizedState=null),r.flags|=4;re(r),o=!1}else _e!==null&&(Io(_e),_e=null),o=!0;if(!o)return r.flags&65536?r:null}return r.flags&128?(r.lanes=n,r):(t=t!==null,t!==(e!==null&&e.memoizedState!==null)&&t&&(r.child.flags|=8192,r.mode&1&&(e===null||j.current&1?Y===0&&(Y=3):za())),r.updateQueue!==null&&(r.flags|=4),re(r),null);case 4:return Jr(),_o(e,r),e===null&&In(r.stateNode.containerInfo),re(r),null;case 10:return ua(r.type._context),re(r),null;case 17:return de(r.type)&&It(),re(r),null;case 19:if(R(j),o=r.memoizedState,o===null)return re(r),null;if(t=(r.flags&128)!==0,a=o.rendering,a===null)if(t)vn(o,!1);else{if(Y!==0||e!==null&&e.flags&128)for(e=r.child;e!==null;){if(a=$t(e),a!==null){for(r.flags|=128,vn(o,!1),t=a.updateQueue,t!==null&&(r.updateQueue=t,r.flags|=4),r.subtreeFlags=0,t=n,n=r.child;n!==null;)o=n,e=t,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return O(j,j.current&1|2),r.child}e=e.sibling}o.tail!==null&&$()>rn&&(r.flags|=128,t=!0,vn(o,!1),r.lanes=4194304)}else{if(!t)if(e=$t(a),e!==null){if(r.flags|=128,t=!0,n=e.updateQueue,n!==null&&(r.updateQueue=n,r.flags|=4),vn(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!I)return re(r),null}else 2*$()-o.renderingStartTime>rn&&n!==1073741824&&(r.flags|=128,t=!0,vn(o,!1),r.lanes=4194304);o.isBackwards?(a.sibling=r.child,r.child=a):(n=o.last,n!==null?n.sibling=a:r.child=a,o.last=a)}return o.tail!==null?(r=o.tail,o.rendering=r,o.tail=r.sibling,o.renderingStartTime=$(),r.sibling=null,n=j.current,O(j,t?n&1|2:n&1),r):(re(r),null);case 22:case 23:return Ca(),t=r.memoizedState!==null,e!==null&&e.memoizedState!==null!==t&&(r.flags|=8192),t&&r.mode&1?pe&1073741824&&(re(r),r.subtreeFlags&6&&(r.flags|=8192)):re(r),null;case 24:return null;case 25:return null}throw Error(h(156,r.tag))}function uf(e,r){switch(oa(r),r.tag){case 1:return de(r.type)&&It(),e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 3:return Jr(),R(ce),R(te),va(),e=r.flags,e&65536&&!(e&128)?(r.flags=e&-65537|128,r):null;case 5:return pa(r),null;case 13:if(R(j),e=r.memoizedState,e!==null&&e.dehydrated!==null){if(r.alternate===null)throw Error(h(340));Xr()}return e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 19:return R(j),null;case 4:return Jr(),null;case 10:return ua(r.type._context),null;case 22:case 23:return Ca(),null;case 24:return null;default:return null}}var pt=!1,ne=!1,cf=typeof WeakSet=="function"?WeakSet:Set,k=null;function Ur(e,r){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(t){U(e,r,t)}else n.current=null}function Lo(e,r,n){try{n()}catch(t){U(e,r,t)}}var Nl=!1;function df(e,r){if(po=Ot,e=Bs(),ta(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var t=n.getSelection&&n.getSelection();if(t&&t.rangeCount!==0){n=t.anchorNode;var i=t.anchorOffset,o=t.focusNode;t=t.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,l=-1,s=-1,c=0,m=0,v=e,p=null;r:for(;;){for(var y;v!==n||i!==0&&v.nodeType!==3||(l=a+i),v!==o||t!==0&&v.nodeType!==3||(s=a+t),v.nodeType===3&&(a+=v.nodeValue.length),(y=v.firstChild)!==null;)p=v,v=y;for(;;){if(v===e)break r;if(p===n&&++c===i&&(l=a),p===o&&++m===t&&(s=a),(y=v.nextSibling)!==null)break;v=p,p=v.parentNode}v=y}n=l===-1||s===-1?null:{start:l,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(vo={focusedElem:e,selectionRange:n},Ot=!1,k=r;k!==null;)if(r=k,e=r.child,(r.subtreeFlags&1028)!==0&&e!==null)e.return=r,k=e;else for(;k!==null;){r=k;try{var w=r.alternate;if(r.flags&1024)switch(r.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var x=w.memoizedProps,A=w.memoizedState,d=r.stateNode,u=d.getSnapshotBeforeUpdate(r.elementType===r.type?x:Pe(r.type,x),A);d.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var f=r.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(h(163))}}catch(g){U(r,r.return,g)}if(e=r.sibling,e!==null){e.return=r.return,k=e;break}k=r.return}return w=Nl,Nl=!1,w}function zn(e,r,n){var t=r.updateQueue;if(t=t!==null?t.lastEffect:null,t!==null){var i=t=t.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Lo(r,n,o)}i=i.next}while(i!==t)}}function li(e,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var n=r=r.next;do{if((n.tag&e)===e){var t=n.create;n.destroy=t()}n=n.next}while(n!==r)}}function No(e){var r=e.ref;if(r!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof r=="function"?r(e):r.current=e}}function Fu(e){var r=e.alternate;r!==null&&(e.alternate=null,Fu(r)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(r=e.stateNode,r!==null&&(delete r[Re],delete r[Fn],delete r[ho],delete r[Qd],delete r[Yd])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Wu(e){return e.tag===5||e.tag===3||e.tag===4}function Ml(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Wu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Mo(e,r,n){var t=e.tag;if(t===5||t===6)e=e.stateNode,r?n.nodeType===8?n.parentNode.insertBefore(e,r):n.insertBefore(e,r):(n.nodeType===8?(r=n.parentNode,r.insertBefore(e,n)):(r=n,r.appendChild(e)),n=n._reactRootContainer,n!=null||r.onclick!==null||(r.onclick=At));else if(t!==4&&(e=e.child,e!==null))for(Mo(e,r,n),e=e.sibling;e!==null;)Mo(e,r,n),e=e.sibling}function Oo(e,r,n){var t=e.tag;if(t===5||t===6)e=e.stateNode,r?n.insertBefore(e,r):n.appendChild(e);else if(t!==4&&(e=e.child,e!==null))for(Oo(e,r,n),e=e.sibling;e!==null;)Oo(e,r,n),e=e.sibling}var X=null,Te=!1;function qe(e,r,n){for(n=n.child;n!==null;)Uu(e,r,n),n=n.sibling}function Uu(e,r,n){if(Ae&&typeof Ae.onCommitFiberUnmount=="function")try{Ae.onCommitFiberUnmount(Jt,n)}catch{}switch(n.tag){case 5:ne||Ur(n,r);case 6:var t=X,i=Te;X=null,qe(e,r,n),X=t,Te=i,X!==null&&(Te?(e=X,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):X.removeChild(n.stateNode));break;case 18:X!==null&&(Te?(e=X,n=n.stateNode,e.nodeType===8?Oi(e.parentNode,n):e.nodeType===1&&Oi(e,n),Dn(e)):Oi(X,n.stateNode));break;case 4:t=X,i=Te,X=n.stateNode.containerInfo,Te=!0,qe(e,r,n),X=t,Te=i;break;case 0:case 11:case 14:case 15:if(!ne&&(t=n.updateQueue,t!==null&&(t=t.lastEffect,t!==null))){i=t=t.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&Lo(n,r,a),i=i.next}while(i!==t)}qe(e,r,n);break;case 1:if(!ne&&(Ur(n,r),t=n.stateNode,typeof t.componentWillUnmount=="function"))try{t.props=n.memoizedProps,t.state=n.memoizedState,t.componentWillUnmount()}catch(l){U(n,r,l)}qe(e,r,n);break;case 21:qe(e,r,n);break;case 22:n.mode&1?(ne=(t=ne)||n.memoizedState!==null,qe(e,r,n),ne=t):qe(e,r,n);break;default:qe(e,r,n)}}function Ol(e){var r=e.updateQueue;if(r!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new cf),r.forEach(function(t){var i=xf.bind(null,e,t);n.has(t)||(n.add(t),t.then(i,i))})}}function ze(e,r){var n=r.deletions;if(n!==null)for(var t=0;t<n.length;t++){var i=n[t];try{var o=e,a=r,l=a;e:for(;l!==null;){switch(l.tag){case 5:X=l.stateNode,Te=!1;break e;case 3:X=l.stateNode.containerInfo,Te=!0;break e;case 4:X=l.stateNode.containerInfo,Te=!0;break e}l=l.return}if(X===null)throw Error(h(160));Uu(o,a,i),X=null,Te=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(c){U(i,r,c)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)Vu(r,e),r=r.sibling}function Vu(e,r){var n=e.alternate,t=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ze(r,e),Oe(e),t&4){try{zn(3,e,e.return),li(3,e)}catch(x){U(e,e.return,x)}try{zn(5,e,e.return)}catch(x){U(e,e.return,x)}}break;case 1:ze(r,e),Oe(e),t&512&&n!==null&&Ur(n,n.return);break;case 5:if(ze(r,e),Oe(e),t&512&&n!==null&&Ur(n,n.return),e.flags&32){var i=e.stateNode;try{Ln(i,"")}catch(x){U(e,e.return,x)}}if(t&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&cs(i,o),no(l,a);var c=no(l,o);for(a=0;a<s.length;a+=2){var m=s[a],v=s[a+1];m==="style"?ms(i,v):m==="dangerouslySetInnerHTML"?ps(i,v):m==="children"?Ln(i,v):$o(i,m,v,c)}switch(l){case"input":Xi(i,o);break;case"textarea":ds(i,o);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var y=o.value;y!=null?Br(i,!!o.multiple,y,!1):p!==!!o.multiple&&(o.defaultValue!=null?Br(i,!!o.multiple,o.defaultValue,!0):Br(i,!!o.multiple,o.multiple?[]:"",!1))}i[Fn]=o}catch(x){U(e,e.return,x)}}break;case 6:if(ze(r,e),Oe(e),t&4){if(e.stateNode===null)throw Error(h(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(x){U(e,e.return,x)}}break;case 3:if(ze(r,e),Oe(e),t&4&&n!==null&&n.memoizedState.isDehydrated)try{Dn(r.containerInfo)}catch(x){U(e,e.return,x)}break;case 4:ze(r,e),Oe(e);break;case 13:ze(r,e),Oe(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(ba=$())),t&4&&Ol(e);break;case 22:if(m=n!==null&&n.memoizedState!==null,e.mode&1?(ne=(c=ne)||m,ze(r,e),ne=c):ze(r,e),Oe(e),t&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!m&&e.mode&1)for(k=e,m=e.child;m!==null;){for(v=k=m;k!==null;){switch(p=k,y=p.child,p.tag){case 0:case 11:case 14:case 15:zn(4,p,p.return);break;case 1:Ur(p,p.return);var w=p.stateNode;if(typeof w.componentWillUnmount=="function"){t=p,n=p.return;try{r=t,w.props=r.memoizedProps,w.state=r.memoizedState,w.componentWillUnmount()}catch(x){U(t,n,x)}}break;case 5:Ur(p,p.return);break;case 22:if(p.memoizedState!==null){Rl(v);continue}}y!==null?(y.return=p,k=y):Rl(v)}m=m.sibling}e:for(m=null,v=e;;){if(v.tag===5){if(m===null){m=v;try{i=v.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=v.stateNode,s=v.memoizedProps.style,a=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=vs("display",a))}catch(x){U(e,e.return,x)}}}else if(v.tag===6){if(m===null)try{v.stateNode.nodeValue=c?"":v.memoizedProps}catch(x){U(e,e.return,x)}}else if((v.tag!==22&&v.tag!==23||v.memoizedState===null||v===e)&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===e)break e;for(;v.sibling===null;){if(v.return===null||v.return===e)break e;m===v&&(m=null),v=v.return}m===v&&(m=null),v.sibling.return=v.return,v=v.sibling}}break;case 19:ze(r,e),Oe(e),t&4&&Ol(e);break;case 21:break;default:ze(r,e),Oe(e)}}function Oe(e){var r=e.flags;if(r&2){try{e:{for(var n=e.return;n!==null;){if(Wu(n)){var t=n;break e}n=n.return}throw Error(h(160))}switch(t.tag){case 5:var i=t.stateNode;t.flags&32&&(Ln(i,""),t.flags&=-33);var o=Ml(e);Oo(e,o,i);break;case 3:case 4:var a=t.stateNode.containerInfo,l=Ml(e);Mo(e,l,a);break;default:throw Error(h(161))}}catch(s){U(e,e.return,s)}e.flags&=-3}r&4096&&(e.flags&=-4097)}function ff(e,r,n){k=e,Bu(e)}function Bu(e,r,n){for(var t=(e.mode&1)!==0;k!==null;){var i=k,o=i.child;if(i.tag===22&&t){var a=i.memoizedState!==null||pt;if(!a){var l=i.alternate,s=l!==null&&l.memoizedState!==null||ne;l=pt;var c=ne;if(pt=a,(ne=s)&&!c)for(k=i;k!==null;)a=k,s=a.child,a.tag===22&&a.memoizedState!==null?Al(i):s!==null?(s.return=a,k=s):Al(i);for(;o!==null;)k=o,Bu(o),o=o.sibling;k=i,pt=l,ne=c}Dl(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,k=o):Dl(e)}}function Dl(e){for(;k!==null;){var r=k;if(r.flags&8772){var n=r.alternate;try{if(r.flags&8772)switch(r.tag){case 0:case 11:case 15:ne||li(5,r);break;case 1:var t=r.stateNode;if(r.flags&4&&!ne)if(n===null)t.componentDidMount();else{var i=r.elementType===r.type?n.memoizedProps:Pe(r.type,n.memoizedProps);t.componentDidUpdate(i,n.memoizedState,t.__reactInternalSnapshotBeforeUpdate)}var o=r.updateQueue;o!==null&&yl(r,o,t);break;case 3:var a=r.updateQueue;if(a!==null){if(n=null,r.child!==null)switch(r.child.tag){case 5:n=r.child.stateNode;break;case 1:n=r.child.stateNode}yl(r,a,n)}break;case 5:var l=r.stateNode;if(n===null&&r.flags&4){n=l;var s=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var c=r.alternate;if(c!==null){var m=c.memoizedState;if(m!==null){var v=m.dehydrated;v!==null&&Dn(v)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(h(163))}ne||r.flags&512&&No(r)}catch(p){U(r,r.return,p)}}if(r===e){k=null;break}if(n=r.sibling,n!==null){n.return=r.return,k=n;break}k=r.return}}function Rl(e){for(;k!==null;){var r=k;if(r===e){k=null;break}var n=r.sibling;if(n!==null){n.return=r.return,k=n;break}k=r.return}}function Al(e){for(;k!==null;){var r=k;try{switch(r.tag){case 0:case 11:case 15:var n=r.return;try{li(4,r)}catch(s){U(r,n,s)}break;case 1:var t=r.stateNode;if(typeof t.componentDidMount=="function"){var i=r.return;try{t.componentDidMount()}catch(s){U(r,i,s)}}var o=r.return;try{No(r)}catch(s){U(r,o,s)}break;case 5:var a=r.return;try{No(r)}catch(s){U(r,a,s)}}}catch(s){U(r,r.return,s)}if(r===e){k=null;break}var l=r.sibling;if(l!==null){l.return=r.return,k=l;break}k=r.return}}var pf=Math.ceil,Yt=Ye.ReactCurrentDispatcher,ka=Ye.ReactCurrentOwner,Se=Ye.ReactCurrentBatchConfig,N=0,K=null,H=null,Z=0,pe=0,Vr=fr(0),Y=0,Hn=null,zr=0,si=0,Sa=0,Pn=null,se=null,ba=0,rn=1/0,je=null,qt=!1,Do=null,ar=null,vt=!1,er=null,Gt=0,Tn=0,Ro=null,Ct=-1,zt=0;function oe(){return N&6?$():Ct!==-1?Ct:Ct=$()}function lr(e){return e.mode&1?N&2&&Z!==0?Z&-Z:Gd.transition!==null?(zt===0&&(zt=Ps()),zt):(e=M,e!==0||(e=window.event,e=e===void 0?16:Ds(e.type)),e):1}function Ne(e,r,n,t){if(50<Tn)throw Tn=0,Ro=null,Error(h(185));Yn(e,n,t),(!(N&2)||e!==K)&&(e===K&&(!(N&2)&&(si|=n),Y===4&&Ze(e,Z)),fe(e,t),n===1&&N===0&&!(r.mode&1)&&(rn=$()+500,ii&&pr()))}function fe(e,r){var n=e.callbackNode;Gc(e,r);var t=Mt(e,e===K?Z:0);if(t===0)n!==null&&Ha(n),e.callbackNode=null,e.callbackPriority=0;else if(r=t&-t,e.callbackPriority!==r){if(n!=null&&Ha(n),r===1)e.tag===0?qd(Il.bind(null,e)):Js(Il.bind(null,e)),$d(function(){!(N&6)&&pr()}),n=null;else{switch(Ts(t)){case 1:n=Go;break;case 4:n=Cs;break;case 16:n=Nt;break;case 536870912:n=zs;break;default:n=Nt}n=Xu(n,$u.bind(null,e))}e.callbackPriority=r,e.callbackNode=n}}function $u(e,r){if(Ct=-1,zt=0,N&6)throw Error(h(327));var n=e.callbackNode;if(qr()&&e.callbackNode!==n)return null;var t=Mt(e,e===K?Z:0);if(t===0)return null;if(t&30||t&e.expiredLanes||r)r=Kt(e,t);else{r=t;var i=N;N|=2;var o=Qu();(K!==e||Z!==r)&&(je=null,rn=$()+500,kr(e,r));do try{gf();break}catch(l){Hu(e,l)}while(!0);sa(),Yt.current=o,N=i,H!==null?r=0:(K=null,Z=0,r=Y)}if(r!==0){if(r===2&&(i=lo(e),i!==0&&(t=i,r=Ao(e,i))),r===1)throw n=Hn,kr(e,0),Ze(e,t),fe(e,$()),n;if(r===6)Ze(e,t);else{if(i=e.current.alternate,!(t&30)&&!vf(i)&&(r=Kt(e,t),r===2&&(o=lo(e),o!==0&&(t=o,r=Ao(e,o))),r===1))throw n=Hn,kr(e,0),Ze(e,t),fe(e,$()),n;switch(e.finishedWork=i,e.finishedLanes=t,r){case 0:case 1:throw Error(h(345));case 2:hr(e,se,je);break;case 3:if(Ze(e,t),(t&130023424)===t&&(r=ba+500-$(),10<r)){if(Mt(e,0)!==0)break;if(i=e.suspendedLanes,(i&t)!==t){oe(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=go(hr.bind(null,e,se,je),r);break}hr(e,se,je);break;case 4:if(Ze(e,t),(t&4194240)===t)break;for(r=e.eventTimes,i=-1;0<t;){var a=31-Le(t);o=1<<a,a=r[a],a>i&&(i=a),t&=~o}if(t=i,t=$()-t,t=(120>t?120:480>t?480:1080>t?1080:1920>t?1920:3e3>t?3e3:4320>t?4320:1960*pf(t/1960))-t,10<t){e.timeoutHandle=go(hr.bind(null,e,se,je),t);break}hr(e,se,je);break;case 5:hr(e,se,je);break;default:throw Error(h(329))}}}return fe(e,$()),e.callbackNode===n?$u.bind(null,e):null}function Ao(e,r){var n=Pn;return e.current.memoizedState.isDehydrated&&(kr(e,r).flags|=256),e=Kt(e,r),e!==2&&(r=se,se=n,r!==null&&Io(r)),e}function Io(e){se===null?se=e:se.push.apply(se,e)}function vf(e){for(var r=e;;){if(r.flags&16384){var n=r.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var t=0;t<n.length;t++){var i=n[t],o=i.getSnapshot;i=i.value;try{if(!Me(o(),i))return!1}catch{return!1}}}if(n=r.child,r.subtreeFlags&16384&&n!==null)n.return=r,r=n;else{if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Ze(e,r){for(r&=~Sa,r&=~si,e.suspendedLanes|=r,e.pingedLanes&=~r,e=e.expirationTimes;0<r;){var n=31-Le(r),t=1<<n;e[n]=-1,r&=~t}}function Il(e){if(N&6)throw Error(h(327));qr();var r=Mt(e,0);if(!(r&1))return fe(e,$()),null;var n=Kt(e,r);if(e.tag!==0&&n===2){var t=lo(e);t!==0&&(r=t,n=Ao(e,t))}if(n===1)throw n=Hn,kr(e,0),Ze(e,r),fe(e,$()),n;if(n===6)throw Error(h(345));return e.finishedWork=e.current.alternate,e.finishedLanes=r,hr(e,se,je),fe(e,$()),null}function Ea(e,r){var n=N;N|=1;try{return e(r)}finally{N=n,N===0&&(rn=$()+500,ii&&pr())}}function Pr(e){er!==null&&er.tag===0&&!(N&6)&&qr();var r=N;N|=1;var n=Se.transition,t=M;try{if(Se.transition=null,M=1,e)return e()}finally{M=t,Se.transition=n,N=r,!(N&6)&&pr()}}function Ca(){pe=Vr.current,R(Vr)}function kr(e,r){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Bd(n)),H!==null)for(n=H.return;n!==null;){var t=n;switch(oa(t),t.tag){case 1:t=t.type.childContextTypes,t!=null&&It();break;case 3:Jr(),R(ce),R(te),va();break;case 5:pa(t);break;case 4:Jr();break;case 13:R(j);break;case 19:R(j);break;case 10:ua(t.type._context);break;case 22:case 23:Ca()}n=n.return}if(K=e,H=e=sr(e.current,null),Z=pe=r,Y=0,Hn=null,Sa=si=zr=0,se=Pn=null,wr!==null){for(r=0;r<wr.length;r++)if(n=wr[r],t=n.interleaved,t!==null){n.interleaved=null;var i=t.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,t.next=a}n.pending=t}wr=null}return e}function Hu(e,r){do{var n=H;try{if(sa(),St.current=Qt,Ht){for(var t=F.memoizedState;t!==null;){var i=t.queue;i!==null&&(i.pending=null),t=t.next}Ht=!1}if(Cr=0,G=Q=F=null,Cn=!1,Vn=0,ka.current=null,n===null||n.return===null){Y=1,Hn=r,H=null;break}e:{var o=e,a=n.return,l=n,s=r;if(r=Z,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var c=s,m=l,v=m.tag;if(!(m.mode&1)&&(v===0||v===11||v===15)){var p=m.alternate;p?(m.updateQueue=p.updateQueue,m.memoizedState=p.memoizedState,m.lanes=p.lanes):(m.updateQueue=null,m.memoizedState=null)}var y=El(a);if(y!==null){y.flags&=-257,Cl(y,a,l,o,r),y.mode&1&&bl(o,c,r),r=y,s=c;var w=r.updateQueue;if(w===null){var x=new Set;x.add(s),r.updateQueue=x}else w.add(s);break e}else{if(!(r&1)){bl(o,c,r),za();break e}s=Error(h(426))}}else if(I&&l.mode&1){var A=El(a);if(A!==null){!(A.flags&65536)&&(A.flags|=256),Cl(A,a,l,o,r),aa(en(s,l));break e}}o=s=en(s,l),Y!==4&&(Y=2),Pn===null?Pn=[o]:Pn.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,r&=-r,o.lanes|=r;var d=Tu(o,s,r);hl(o,d);break e;case 1:l=s;var u=o.type,f=o.stateNode;if(!(o.flags&128)&&(typeof u.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(ar===null||!ar.has(f)))){o.flags|=65536,r&=-r,o.lanes|=r;var g=_u(o,l,r);hl(o,g);break e}}o=o.return}while(o!==null)}qu(n)}catch(S){r=S,H===n&&n!==null&&(H=n=n.return);continue}break}while(!0)}function Qu(){var e=Yt.current;return Yt.current=Qt,e===null?Qt:e}function za(){(Y===0||Y===3||Y===2)&&(Y=4),K===null||!(zr&268435455)&&!(si&268435455)||Ze(K,Z)}function Kt(e,r){var n=N;N|=2;var t=Qu();(K!==e||Z!==r)&&(je=null,kr(e,r));do try{mf();break}catch(i){Hu(e,i)}while(!0);if(sa(),N=n,Yt.current=t,H!==null)throw Error(h(261));return K=null,Z=0,Y}function mf(){for(;H!==null;)Yu(H)}function gf(){for(;H!==null&&!Wc();)Yu(H)}function Yu(e){var r=Ku(e.alternate,e,pe);e.memoizedProps=e.pendingProps,r===null?qu(e):H=r,ka.current=null}function qu(e){var r=e;do{var n=r.alternate;if(e=r.return,r.flags&32768){if(n=uf(n,r),n!==null){n.flags&=32767,H=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Y=6,H=null;return}}else if(n=sf(n,r,pe),n!==null){H=n;return}if(r=r.sibling,r!==null){H=r;return}H=r=e}while(r!==null);Y===0&&(Y=5)}function hr(e,r,n){var t=M,i=Se.transition;try{Se.transition=null,M=1,hf(e,r,n,t)}finally{Se.transition=i,M=t}return null}function hf(e,r,n,t){do qr();while(er!==null);if(N&6)throw Error(h(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(h(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Kc(e,o),e===K&&(H=K=null,Z=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||vt||(vt=!0,Xu(Nt,function(){return qr(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Se.transition,Se.transition=null;var a=M;M=1;var l=N;N|=4,ka.current=null,df(e,n),Vu(n,e),Ad(vo),Ot=!!po,vo=po=null,e.current=n,ff(n),Uc(),N=l,M=a,Se.transition=o}else e.current=n;if(vt&&(vt=!1,er=e,Gt=i),o=e.pendingLanes,o===0&&(ar=null),$c(n.stateNode),fe(e,$()),r!==null)for(t=e.onRecoverableError,n=0;n<r.length;n++)i=r[n],t(i.value,{componentStack:i.stack,digest:i.digest});if(qt)throw qt=!1,e=Do,Do=null,e;return Gt&1&&e.tag!==0&&qr(),o=e.pendingLanes,o&1?e===Ro?Tn++:(Tn=0,Ro=e):Tn=0,pr(),null}function qr(){if(er!==null){var e=Ts(Gt),r=Se.transition,n=M;try{if(Se.transition=null,M=16>e?16:e,er===null)var t=!1;else{if(e=er,er=null,Gt=0,N&6)throw Error(h(331));var i=N;for(N|=4,k=e.current;k!==null;){var o=k,a=o.child;if(k.flags&16){var l=o.deletions;if(l!==null){for(var s=0;s<l.length;s++){var c=l[s];for(k=c;k!==null;){var m=k;switch(m.tag){case 0:case 11:case 15:zn(8,m,o)}var v=m.child;if(v!==null)v.return=m,k=v;else for(;k!==null;){m=k;var p=m.sibling,y=m.return;if(Fu(m),m===c){k=null;break}if(p!==null){p.return=y,k=p;break}k=y}}}var w=o.alternate;if(w!==null){var x=w.child;if(x!==null){w.child=null;do{var A=x.sibling;x.sibling=null,x=A}while(x!==null)}}k=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,k=a;else e:for(;k!==null;){if(o=k,o.flags&2048)switch(o.tag){case 0:case 11:case 15:zn(9,o,o.return)}var d=o.sibling;if(d!==null){d.return=o.return,k=d;break e}k=o.return}}var u=e.current;for(k=u;k!==null;){a=k;var f=a.child;if(a.subtreeFlags&2064&&f!==null)f.return=a,k=f;else e:for(a=u;k!==null;){if(l=k,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:li(9,l)}}catch(S){U(l,l.return,S)}if(l===a){k=null;break e}var g=l.sibling;if(g!==null){g.return=l.return,k=g;break e}k=l.return}}if(N=i,pr(),Ae&&typeof Ae.onPostCommitFiberRoot=="function")try{Ae.onPostCommitFiberRoot(Jt,e)}catch{}t=!0}return t}finally{M=n,Se.transition=r}}return!1}function jl(e,r,n){r=en(n,r),r=Tu(e,r,1),e=or(e,r,1),r=oe(),e!==null&&(Yn(e,1,r),fe(e,r))}function U(e,r,n){if(e.tag===3)jl(e,e,n);else for(;r!==null;){if(r.tag===3){jl(r,e,n);break}else if(r.tag===1){var t=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof t.componentDidCatch=="function"&&(ar===null||!ar.has(t))){e=en(n,e),e=_u(r,e,1),r=or(r,e,1),e=oe(),r!==null&&(Yn(r,1,e),fe(r,e));break}}r=r.return}}function yf(e,r,n){var t=e.pingCache;t!==null&&t.delete(r),r=oe(),e.pingedLanes|=e.suspendedLanes&n,K===e&&(Z&n)===n&&(Y===4||Y===3&&(Z&130023424)===Z&&500>$()-ba?kr(e,0):Sa|=n),fe(e,r)}function Gu(e,r){r===0&&(e.mode&1?(r=it,it<<=1,!(it&130023424)&&(it=4194304)):r=1);var n=oe();e=He(e,r),e!==null&&(Yn(e,r,n),fe(e,n))}function wf(e){var r=e.memoizedState,n=0;r!==null&&(n=r.retryLane),Gu(e,n)}function xf(e,r){var n=0;switch(e.tag){case 13:var t=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:t=e.stateNode;break;default:throw Error(h(314))}t!==null&&t.delete(r),Gu(e,n)}var Ku;Ku=function(e,r,n){if(e!==null)if(e.memoizedProps!==r.pendingProps||ce.current)ue=!0;else{if(!(e.lanes&n)&&!(r.flags&128))return ue=!1,lf(e,r,n);ue=!!(e.flags&131072)}else ue=!1,I&&r.flags&1048576&&eu(r,Wt,r.index);switch(r.lanes=0,r.tag){case 2:var t=r.type;Et(e,r),e=r.pendingProps;var i=Kr(r,te.current);Yr(r,n),i=ga(null,r,t,e,i,n);var o=ha();return r.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,de(t)?(o=!0,jt(r)):o=!1,r.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,da(r),i.updater=ai,r.stateNode=i,i._reactInternals=r,bo(r,t,e,n),r=zo(null,r,t,!0,o,n)):(r.tag=0,I&&o&&ia(r),ie(null,r,i,n),r=r.child),r;case 16:t=r.elementType;e:{switch(Et(e,r),e=r.pendingProps,i=t._init,t=i(t._payload),r.type=t,i=r.tag=Sf(t),e=Pe(t,e),i){case 0:r=Co(null,r,t,e,n);break e;case 1:r=Tl(null,r,t,e,n);break e;case 11:r=zl(null,r,t,e,n);break e;case 14:r=Pl(null,r,t,Pe(t.type,e),n);break e}throw Error(h(306,t,""))}return r;case 0:return t=r.type,i=r.pendingProps,i=r.elementType===t?i:Pe(t,i),Co(e,r,t,i,n);case 1:return t=r.type,i=r.pendingProps,i=r.elementType===t?i:Pe(t,i),Tl(e,r,t,i,n);case 3:e:{if(Ou(r),e===null)throw Error(h(387));t=r.pendingProps,o=r.memoizedState,i=o.element,au(e,r),Bt(r,t,null,n);var a=r.memoizedState;if(t=a.element,o.isDehydrated)if(o={element:t,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},r.updateQueue.baseState=o,r.memoizedState=o,r.flags&256){i=en(Error(h(423)),r),r=_l(e,r,t,n,i);break e}else if(t!==i){i=en(Error(h(424)),r),r=_l(e,r,t,n,i);break e}else for(ve=ir(r.stateNode.containerInfo.firstChild),me=r,I=!0,_e=null,n=iu(r,null,t,n),r.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Xr(),t===i){r=Qe(e,r,n);break e}ie(e,r,t,n)}r=r.child}return r;case 5:return lu(r),e===null&&xo(r),t=r.type,i=r.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,mo(t,i)?a=null:o!==null&&mo(t,o)&&(r.flags|=32),Mu(e,r),ie(e,r,a,n),r.child;case 6:return e===null&&xo(r),null;case 13:return Du(e,r,n);case 4:return fa(r,r.stateNode.containerInfo),t=r.pendingProps,e===null?r.child=Zr(r,null,t,n):ie(e,r,t,n),r.child;case 11:return t=r.type,i=r.pendingProps,i=r.elementType===t?i:Pe(t,i),zl(e,r,t,i,n);case 7:return ie(e,r,r.pendingProps,n),r.child;case 8:return ie(e,r,r.pendingProps.children,n),r.child;case 12:return ie(e,r,r.pendingProps.children,n),r.child;case 10:e:{if(t=r.type._context,i=r.pendingProps,o=r.memoizedProps,a=i.value,O(Ut,t._currentValue),t._currentValue=a,o!==null)if(Me(o.value,a)){if(o.children===i.children&&!ce.current){r=Qe(e,r,n);break e}}else for(o=r.child,o!==null&&(o.return=r);o!==null;){var l=o.dependencies;if(l!==null){a=o.child;for(var s=l.firstContext;s!==null;){if(s.context===t){if(o.tag===1){s=Ve(-1,n&-n),s.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var m=c.pending;m===null?s.next=s:(s.next=m.next,m.next=s),c.pending=s}}o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),ko(o.return,n,r),l.lanes|=n;break}s=s.next}}else if(o.tag===10)a=o.type===r.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(h(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),ko(a,n,r),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===r){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}ie(e,r,i.children,n),r=r.child}return r;case 9:return i=r.type,t=r.pendingProps.children,Yr(r,n),i=be(i),t=t(i),r.flags|=1,ie(e,r,t,n),r.child;case 14:return t=r.type,i=Pe(t,r.pendingProps),i=Pe(t.type,i),Pl(e,r,t,i,n);case 15:return Lu(e,r,r.type,r.pendingProps,n);case 17:return t=r.type,i=r.pendingProps,i=r.elementType===t?i:Pe(t,i),Et(e,r),r.tag=1,de(t)?(e=!0,jt(r)):e=!1,Yr(r,n),Pu(r,t,i),bo(r,t,i,n),zo(null,r,t,!0,e,n);case 19:return Ru(e,r,n);case 22:return Nu(e,r,n)}throw Error(h(156,r.tag))};function Xu(e,r){return Es(e,r)}function kf(e,r,n,t){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=t,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ke(e,r,n,t){return new kf(e,r,n,t)}function Pa(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Sf(e){if(typeof e=="function")return Pa(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Qo)return 11;if(e===Yo)return 14}return 2}function sr(e,r){var n=e.alternate;return n===null?(n=ke(e.tag,r,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=r,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,r=e.dependencies,n.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Pt(e,r,n,t,i,o){var a=2;if(t=e,typeof e=="function")Pa(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Mr:return Sr(n.children,i,o,r);case Ho:a=8,i|=8;break;case Qi:return e=ke(12,n,r,i|2),e.elementType=Qi,e.lanes=o,e;case Yi:return e=ke(13,n,r,i),e.elementType=Yi,e.lanes=o,e;case qi:return e=ke(19,n,r,i),e.elementType=qi,e.lanes=o,e;case ls:return ui(n,i,o,r);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case os:a=10;break e;case as:a=9;break e;case Qo:a=11;break e;case Yo:a=14;break e;case Ge:a=16,t=null;break e}throw Error(h(130,e==null?e:typeof e,""))}return r=ke(a,n,r,i),r.elementType=e,r.type=t,r.lanes=o,r}function Sr(e,r,n,t){return e=ke(7,e,t,r),e.lanes=n,e}function ui(e,r,n,t){return e=ke(22,e,t,r),e.elementType=ls,e.lanes=n,e.stateNode={isHidden:!1},e}function Ui(e,r,n){return e=ke(6,e,null,r),e.lanes=n,e}function Vi(e,r,n){return r=ke(4,e.children!==null?e.children:[],e.key,r),r.lanes=n,r.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},r}function bf(e,r,n,t,i){this.tag=r,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Si(0),this.expirationTimes=Si(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Si(0),this.identifierPrefix=t,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ta(e,r,n,t,i,o,a,l,s){return e=new bf(e,r,n,l,s),r===1?(r=1,o===!0&&(r|=8)):r=0,o=ke(3,null,null,r),e.current=o,o.stateNode=e,o.memoizedState={element:t,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},da(o),e}function Ef(e,r,n){var t=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Nr,key:t==null?null:""+t,children:e,containerInfo:r,implementation:n}}function Zu(e){if(!e)return cr;e=e._reactInternals;e:{if(_r(e)!==e||e.tag!==1)throw Error(h(170));var r=e;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(de(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(h(171))}if(e.tag===1){var n=e.type;if(de(n))return Zs(e,n,r)}return r}function Ju(e,r,n,t,i,o,a,l,s){return e=Ta(n,t,!0,e,i,o,a,l,s),e.context=Zu(null),n=e.current,t=oe(),i=lr(n),o=Ve(t,i),o.callback=r??null,or(n,o,i),e.current.lanes=i,Yn(e,i,t),fe(e,t),e}function ci(e,r,n,t){var i=r.current,o=oe(),a=lr(i);return n=Zu(n),r.context===null?r.context=n:r.pendingContext=n,r=Ve(o,a),r.payload={element:e},t=t===void 0?null:t,t!==null&&(r.callback=t),e=or(i,r,a),e!==null&&(Ne(e,i,a,o),kt(e,i,a)),a}function Xt(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Fl(e,r){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<r?n:r}}function _a(e,r){Fl(e,r),(e=e.alternate)&&Fl(e,r)}function Cf(){return null}var ec=typeof reportError=="function"?reportError:function(e){console.error(e)};function La(e){this._internalRoot=e}di.prototype.render=La.prototype.render=function(e){var r=this._internalRoot;if(r===null)throw Error(h(409));ci(e,r,null,null)};di.prototype.unmount=La.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var r=e.containerInfo;Pr(function(){ci(null,e,null,null)}),r[$e]=null}};function di(e){this._internalRoot=e}di.prototype.unstable_scheduleHydration=function(e){if(e){var r=Ns();e={blockedOn:null,target:e,priority:r};for(var n=0;n<Xe.length&&r!==0&&r<Xe[n].priority;n++);Xe.splice(n,0,e),n===0&&Os(e)}};function Na(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function fi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Wl(){}function zf(e,r,n,t,i){if(i){if(typeof t=="function"){var o=t;t=function(){var c=Xt(a);o.call(c)}}var a=Ju(r,t,e,0,null,!1,!1,"",Wl);return e._reactRootContainer=a,e[$e]=a.current,In(e.nodeType===8?e.parentNode:e),Pr(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof t=="function"){var l=t;t=function(){var c=Xt(s);l.call(c)}}var s=Ta(e,0,!1,null,null,!1,!1,"",Wl);return e._reactRootContainer=s,e[$e]=s.current,In(e.nodeType===8?e.parentNode:e),Pr(function(){ci(r,s,n,t)}),s}function pi(e,r,n,t,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var l=i;i=function(){var s=Xt(a);l.call(s)}}ci(r,a,e,i)}else a=zf(n,r,e,i,t);return Xt(a)}_s=function(e){switch(e.tag){case 3:var r=e.stateNode;if(r.current.memoizedState.isDehydrated){var n=yn(r.pendingLanes);n!==0&&(Ko(r,n|1),fe(r,$()),!(N&6)&&(rn=$()+500,pr()))}break;case 13:Pr(function(){var t=He(e,1);if(t!==null){var i=oe();Ne(t,e,1,i)}}),_a(e,1)}};Xo=function(e){if(e.tag===13){var r=He(e,134217728);if(r!==null){var n=oe();Ne(r,e,134217728,n)}_a(e,134217728)}};Ls=function(e){if(e.tag===13){var r=lr(e),n=He(e,r);if(n!==null){var t=oe();Ne(n,e,r,t)}_a(e,r)}};Ns=function(){return M};Ms=function(e,r){var n=M;try{return M=e,r()}finally{M=n}};io=function(e,r,n){switch(r){case"input":if(Xi(e,n),r=n.name,n.type==="radio"&&r!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<n.length;r++){var t=n[r];if(t!==e&&t.form===e.form){var i=ti(t);if(!i)throw Error(h(90));us(t),Xi(t,i)}}}break;case"textarea":ds(e,n);break;case"select":r=n.value,r!=null&&Br(e,!!n.multiple,r,!1)}};ys=Ea;ws=Pr;var Pf={usingClientEntryPoint:!1,Events:[Gn,Ar,ti,gs,hs,Ea]},mn={findFiberByHostInstance:yr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Tf={bundleType:mn.bundleType,version:mn.version,rendererPackageName:mn.rendererPackageName,rendererConfig:mn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ye.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ss(e),e===null?null:e.stateNode},findFiberByHostInstance:mn.findFiberByHostInstance||Cf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var mt=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!mt.isDisabled&&mt.supportsFiber)try{Jt=mt.inject(Tf),Ae=mt}catch{}}he.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Pf;he.createPortal=function(e,r){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Na(r))throw Error(h(200));return Ef(e,r,null,n)};he.createRoot=function(e,r){if(!Na(e))throw Error(h(299));var n=!1,t="",i=ec;return r!=null&&(r.unstable_strictMode===!0&&(n=!0),r.identifierPrefix!==void 0&&(t=r.identifierPrefix),r.onRecoverableError!==void 0&&(i=r.onRecoverableError)),r=Ta(e,1,!1,null,null,n,!1,t,i),e[$e]=r.current,In(e.nodeType===8?e.parentNode:e),new La(r)};he.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var r=e._reactInternals;if(r===void 0)throw typeof e.render=="function"?Error(h(188)):(e=Object.keys(e).join(","),Error(h(268,e)));return e=Ss(r),e=e===null?null:e.stateNode,e};he.flushSync=function(e){return Pr(e)};he.hydrate=function(e,r,n){if(!fi(r))throw Error(h(200));return pi(null,e,r,!0,n)};he.hydrateRoot=function(e,r,n){if(!Na(e))throw Error(h(405));var t=n!=null&&n.hydratedSources||null,i=!1,o="",a=ec;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),r=Ju(r,null,e,1,n??null,i,!1,o,a),e[$e]=r.current,In(e),t)for(e=0;e<t.length;e++)n=t[e],i=n._getVersion,i=i(n._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[n,i]:r.mutableSourceEagerHydrationData.push(n,i);return new di(r)};he.render=function(e,r,n){if(!fi(r))throw Error(h(200));return pi(null,e,r,!1,n)};he.unmountComponentAtNode=function(e){if(!fi(e))throw Error(h(40));return e._reactRootContainer?(Pr(function(){pi(null,null,e,!1,function(){e._reactRootContainer=null,e[$e]=null})}),!0):!1};he.unstable_batchedUpdates=Ea;he.unstable_renderSubtreeIntoContainer=function(e,r,n,t){if(!fi(n))throw Error(h(200));if(e==null||e._reactInternals===void 0)throw Error(h(38));return pi(e,r,n,!1,t)};he.version="18.3.1-next-f1338f8080-20240426";function rc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(rc)}catch(e){console.error(e)}}rc(),rs.exports=he;var _f=rs.exports,Ul=_f;$i.createRoot=Ul.createRoot,$i.hydrateRoot=Ul.hydrateRoot;const Lf=`<!DOCTYPE html>\r
<html lang="en">\r
<head>\r
<meta charset="UTF-8">\r
<meta name="viewport" content="width=device-width, initial-scale=1.0">\r
<title>MP2 Animation Studio — We Bring Stories to Life</title>\r
<link rel="preconnect" href="https://fonts.googleapis.com">\r
<link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;900&family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap" rel="stylesheet">\r
<style>\r
/* ===== CSS VARIABLES ===== */\r
:root {\r
  --black: #080808;\r
  --black2: #0d0d0d;\r
  --black3: #111111;\r
  --black4: #161616;\r
  --card-bg: rgba(18,18,18,0.85);\r
  --red: #c0001a;\r
  --red-deep: #8b0000;\r
  --red-glow: rgba(192,0,26,0.3);\r
  --red-soft: rgba(192,0,26,0.12);\r
  --yellow: #f5c518;\r
  --yellow-soft: rgba(245,197,24,0.12);\r
  --white: #f0ece4;\r
  --white-dim: rgba(240,236,228,0.65);\r
  --white-faint: rgba(240,236,228,0.12);\r
  --border: rgba(240,236,228,0.08);\r
  --border-red: rgba(192,0,26,0.3);\r
  --font-display: 'Cinzel', serif;\r
  --font-ui: 'Syne', sans-serif;\r
  --font-body: 'DM Sans', sans-serif;\r
  --ease: cubic-bezier(0.23,1,0.32,1);\r
  --ease-bounce: cubic-bezier(0.34,1.56,0.64,1);\r
}\r
\r
/* ===== RESET ===== */\r
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }\r
html { scroll-behavior: smooth; font-size: 16px; }\r
body {\r
  background: var(--black);\r
  color: var(--white);\r
  font-family: var(--font-body);\r
  font-weight: 400;\r
  line-height: 1.65;\r
  overflow-x: hidden;\r
  cursor: auto;\r
}\r
a { color: inherit; text-decoration: none; }\r
img, video { max-width: 100%; display: block; }\r
ul { list-style: none; }\r
button { border: none; background: none; cursor: pointer; font-family: inherit; }\r
input, textarea, select { font-family: inherit; }\r
\r
/* ===== CUSTOM CURSOR ===== */\r
#cursor {\r
  display: none;\r
  position: fixed; top: 0; left: 0; z-index: 9999;\r
  pointer-events: none;\r
}\r
#cursor-dot {\r
  width: 6px; height: 6px; border-radius: 50%;\r
  background: var(--red); position: absolute;\r
  transform: translate(-50%,-50%);\r
  transition: transform 0.1s var(--ease);\r
}\r
#cursor-ring {\r
  width: 36px; height: 36px; border-radius: 50%;\r
  border: 1px solid rgba(192,0,26,0.5);\r
  position: absolute;\r
  transform: translate(-50%,-50%);\r
  transition: transform 0.4s var(--ease), width 0.3s, height 0.3s, border-color 0.3s;\r
}\r
body.cursor-hover #cursor-ring {\r
  width: 56px; height: 56px;\r
  border-color: var(--yellow);\r
}\r
\r
/* ===== NOISE TEXTURE OVERLAY ===== */\r
body::before {\r
  content: '';\r
  position: fixed; inset: 0; z-index: 1; pointer-events: none;\r
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.035'/%3E%3C/svg%3E");\r
  opacity: 0.4;\r
}\r
\r
/* ===== PAGE SYSTEM ===== */\r
.page { display: none; animation: pageIn 0.6s var(--ease) forwards; }\r
.page.active { display: block; }\r
@keyframes pageIn {\r
  from { opacity: 0; transform: translateY(18px); }\r
  to { opacity: 1; transform: translateY(0); }\r
}\r
\r
/* ===== NAVBAR ===== */\r
#navbar {\r
  position: fixed; top: 0; left: 0; right: 0; z-index: 1000;\r
  padding: 0 5%;\r
  display: flex; align-items: center; justify-content: space-between;\r
  height: 72px;\r
  background: rgba(8,8,8,0.75);\r
  backdrop-filter: blur(20px) saturate(150%);\r
  border-bottom: 1px solid var(--border);\r
  transition: all 0.4s var(--ease);\r
}\r
#navbar.scrolled {\r
  height: 60px;\r
  background: rgba(8,8,8,0.95);\r
  border-bottom-color: var(--border-red);\r
}\r
.nav-logo {\r
  font-family: var(--font-display);\r
  font-size: 1.3rem; font-weight: 700;\r
  letter-spacing: 0.05em;\r
  display: flex; align-items: center; gap: 10px;\r
}\r
.nav-logo span.red { color: var(--red); }\r
.nav-logo-mark {\r
  width: 42px; height: 42px; border-radius: 8px;\r
  overflow: hidden;\r
  border: 1px solid var(--border);\r
  background: #f0f0f0;\r
  display: flex; align-items: center; justify-content: center;\r
}\r
.nav-logo-mark img {\r
  width: 100%; height: 100%;\r
  object-fit: cover;\r
}\r
.nav-links {\r
  display: flex; gap: 2.2rem; align-items: center;\r
}\r
.nav-link {\r
  font-family: var(--font-ui); font-size: 0.78rem;\r
  font-weight: 600; letter-spacing: 0.12em;\r
  text-transform: uppercase; color: var(--white-dim);\r
  position: relative; padding: 4px 0;\r
  transition: color 0.3s;\r
}\r
.nav-link::after {\r
  content: ''; position: absolute; bottom: -2px; left: 0;\r
  width: 0; height: 1px; background: var(--red);\r
  transition: width 0.3s var(--ease);\r
}\r
.nav-link:hover, .nav-link.active { color: var(--white); }\r
.nav-link:hover::after, .nav-link.active::after { width: 100%; }\r
.nav-cta {\r
  font-family: var(--font-ui); font-size: 0.75rem;\r
  font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase;\r
  padding: 9px 22px; border-radius: 4px;\r
  background: var(--yellow); color: #000;\r
  transition: all 0.3s var(--ease);\r
}\r
.nav-cta:hover {\r
  background: #fff; transform: translateY(-1px);\r
  box-shadow: 0 8px 30px rgba(245,197,24,0.3);\r
}\r
.nav-hamburger {\r
  display: none; flex-direction: column; gap: 5px;\r
  width: 28px; padding: 4px 0;\r
  position: relative; z-index: 1001;\r
}\r
.nav-hamburger span {\r
  display: block; height: 2px;\r
  background: var(--white); border-radius: 2px;\r
  transition: all 0.3s var(--ease);\r
}\r
.nav-hamburger.open span:nth-child(1) {\r
  transform: translateY(7px) rotate(45deg);\r
}\r
.nav-hamburger.open span:nth-child(2) {\r
  opacity: 0;\r
}\r
.nav-hamburger.open span:nth-child(3) {\r
  transform: translateY(-7px) rotate(-45deg);\r
}\r
.mobile-nav {\r
  position: fixed;\r
  inset: 72px 0 0; z-index: 999;\r
  background: rgba(8,8,8,0.98);\r
  backdrop-filter: blur(20px);\r
  flex-direction: column; align-items: center; justify-content: center;\r
  gap: 2.5rem; padding: 2rem;\r
  opacity: 0; pointer-events: none;\r
  transform: translateY(-12px);\r
  transition: opacity 0.35s var(--ease), transform 0.35s var(--ease);\r
}\r
.mobile-nav.open {\r
  display: flex;\r
  opacity: 1; pointer-events: auto;\r
  transform: translateY(0);\r
}\r
.mobile-nav .nav-link { font-size: 1.1rem; }\r
\r
/* ===== SECTION SHARED ===== */\r
.section { padding: 110px 5%; position: relative; }\r
.section-label {\r
  font-family: var(--font-ui); font-size: 0.68rem;\r
  font-weight: 700; letter-spacing: 0.25em; text-transform: uppercase;\r
  color: var(--red); display: flex; align-items: center; gap: 10px;\r
  margin-bottom: 16px;\r
}\r
.section-label::before {\r
  content: ''; width: 28px; height: 1px; background: var(--red);\r
}\r
.section-title {
  font-family: var(--font-display);
  font-size: clamp(1.55rem, 3vw, 2.35rem);
  font-weight: 700; line-height: 1.2;
  letter-spacing: 0.02em;
  margin-bottom: 1rem;
}
.section-title em { font-style: normal; color: var(--red); }\r
.section-sub {\r
  color: var(--white-dim); font-size: 0.95rem;\r
  max-width: 520px; line-height: 1.75;\r
  margin-bottom: 3rem;\r
}\r
\r
/* ===== BUTTONS ===== */\r
.btn-primary {\r
  display: inline-flex; align-items: center; gap: 10px;\r
  font-family: var(--font-ui); font-size: 0.8rem;\r
  font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase;\r
  padding: 14px 32px; border-radius: 4px;\r
  background: var(--yellow); color: #000;\r
  transition: all 0.3s var(--ease);\r
  position: relative; overflow: hidden;\r
}\r
.btn-primary::before {\r
  content: ''; position: absolute; inset: 0;\r
  background: rgba(255,255,255,0.15);\r
  transform: translateX(-110%) skewX(-15deg);\r
  transition: transform 0.4s var(--ease);\r
}\r
.btn-primary:hover::before { transform: translateX(110%) skewX(-15deg); }\r
.btn-primary:hover {\r
  transform: translateY(-2px);\r
  box-shadow: 0 12px 40px rgba(245,197,24,0.35);\r
}\r
.btn-outline {\r
  display: inline-flex; align-items: center; gap: 10px;\r
  font-family: var(--font-ui); font-size: 0.8rem;\r
  font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase;\r
  padding: 13px 30px; border-radius: 4px;\r
  border: 1px solid var(--border-red);\r
  color: var(--white);\r
  transition: all 0.3s var(--ease);\r
}\r
.btn-outline:hover {\r
  background: var(--red-soft);\r
  border-color: var(--red);\r
  box-shadow: 0 0 28px var(--red-glow);\r
  transform: translateY(-2px);\r
}\r
.btn-red {\r
  display: inline-flex; align-items: center; gap: 10px;\r
  font-family: var(--font-ui); font-size: 0.8rem;\r
  font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase;\r
  padding: 13px 30px; border-radius: 4px;\r
  background: var(--red); color: var(--white);\r
  transition: all 0.3s var(--ease);\r
}\r
.btn-red:hover {\r
  background: #d90020; transform: translateY(-2px);\r
  box-shadow: 0 12px 40px var(--red-glow);\r
}\r
\r
/* ===== GLASS CARD ===== */\r
.glass {\r
  background: var(--card-bg);\r
  border: 1px solid var(--border);\r
  border-radius: 12px;\r
  backdrop-filter: blur(12px);\r
  transition: all 0.4s var(--ease);\r
}\r
.glass:hover {\r
  border-color: var(--border-red);\r
  box-shadow: 0 0 40px var(--red-glow), 0 20px 50px rgba(0,0,0,0.5);\r
  transform: translateY(-4px);\r
}\r
\r
/* ===== SCROLL REVEAL ===== */\r
.reveal { opacity: 0; transform: translateY(30px); transition: opacity 0.7s var(--ease), transform 0.7s var(--ease); }\r
.reveal.visible { opacity: 1; transform: translateY(0); }\r
.reveal-delay-1 { transition-delay: 0.1s; }\r
.reveal-delay-2 { transition-delay: 0.2s; }\r
.reveal-delay-3 { transition-delay: 0.3s; }\r
.reveal-delay-4 { transition-delay: 0.4s; }\r
.reveal-delay-5 { transition-delay: 0.5s; }\r
.reveal-delay-6 { transition-delay: 0.6s; }\r
\r
/* Directional reveals */\r
.reveal-left { opacity: 0; transform: translateX(-40px); transition: opacity 0.7s var(--ease), transform 0.7s var(--ease); }\r
.reveal-left.visible { opacity: 1; transform: translateX(0); }\r
.reveal-right { opacity: 0; transform: translateX(40px); transition: opacity 0.7s var(--ease), transform 0.7s var(--ease); }\r
.reveal-right.visible { opacity: 1; transform: translateX(0); }\r
.reveal-scale { opacity: 0; transform: scale(0.92); transition: opacity 0.7s var(--ease), transform 0.7s var(--ease); }\r
.reveal-scale.visible { opacity: 1; transform: scale(1); }\r
\r
/* Card hover lift */\r
.card-hover { transition: transform 0.4s var(--ease), box-shadow 0.4s var(--ease); }\r
.card-hover:hover { transform: translateY(-6px); box-shadow: 0 12px 40px rgba(192,0,26,0.15); }\r
\r
/* Float animation for decorative elements */\r
@keyframes floatSlow { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }\r
@keyframes floatRotate { 0%,100%{transform:rotate(0deg)} 50%{transform:rotate(3deg)} }\r
.float-slow { animation: floatSlow 4s var(--ease) infinite; }\r
.float-rotate { animation: floatRotate 6s var(--ease) infinite; }\r
\r
/* ===== DIVIDER ===== */\r
.divider {\r
  height: 1px; background: linear-gradient(90deg, transparent, var(--border-red), transparent);\r
  margin: 0 5%;\r
}\r
\r
/* ===== PAGE HERO ===== */\r
.page-hero {\r
  min-height: 38vh; padding: 140px 5% 80px;\r
  display: flex; align-items: flex-end;\r
  background: linear-gradient(180deg, rgba(139,0,0,0.08) 0%, transparent 100%);\r
  border-bottom: 1px solid var(--border);\r
  position: relative; overflow: hidden;\r
}\r
.page-hero::before {\r
  content: '';\r
  position: absolute; top: -80px; right: 5%;\r
  width: 500px; height: 500px;\r
  background: radial-gradient(circle, rgba(192,0,26,0.1) 0%, transparent 70%);\r
  pointer-events: none;\r
}\r
.page-hero-content .section-title { font-size: clamp(1.65rem, 3vw, 2.55rem) !important; }
\r
/* =====================\r
   ===== HOME PAGE =====\r
   ===================== */\r
\r
/* HERO */\r
#hero {\r
  min-height: 100vh; position: relative;\r
  display: flex; align-items: center;\r
  overflow: hidden; padding: 0 5%;\r
}\r
.hero-bg {\r
  position: absolute; inset: 0; z-index: 0;\r
  background: radial-gradient(ellipse 80% 60% at 60% 40%, rgba(139,0,0,0.18) 0%, transparent 65%),\r
              radial-gradient(ellipse 50% 40% at 20% 80%, rgba(192,0,26,0.08) 0%, transparent 60%),\r
              var(--black);\r
}\r
.hero-grid {\r
  position: absolute; inset: 0; z-index: 0;\r
  background-image:\r
    linear-gradient(rgba(240,236,228,0.025) 1px, transparent 1px),\r
    linear-gradient(90deg, rgba(240,236,228,0.025) 1px, transparent 1px);\r
  background-size: 60px 60px;\r
  mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 0%, transparent 100%);\r
}\r
.hero-orb {\r
  position: absolute; border-radius: 50%; pointer-events: none; z-index: 0;\r
  animation: orbFloat 8s ease-in-out infinite;\r
}\r
.hero-orb-1 {\r
  width: 600px; height: 600px;\r
  background: radial-gradient(circle, rgba(192,0,26,0.15) 0%, transparent 70%);\r
  right: -100px; top: -100px;\r
}\r
.hero-orb-2 {\r
  width: 300px; height: 300px;\r
  background: radial-gradient(circle, rgba(192,0,26,0.1) 0%, transparent 70%);\r
  left: 5%; bottom: 10%;\r
  animation-delay: -4s;\r
}\r
@keyframes orbFloat {\r
  0%,100% { transform: translate(0,0) scale(1); }\r
  33% { transform: translate(20px,-30px) scale(1.05); }\r
  66% { transform: translate(-15px,20px) scale(0.98); }\r
}\r
.hero-content {\r
  position: relative; z-index: 2;\r
  max-width: 720px; padding-top: 80px;\r
}\r
.hero-tag {\r
  display: inline-flex; align-items: center; gap: 8px;\r
  font-family: var(--font-ui); font-size: 0.7rem;\r
  font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase;\r
  color: var(--yellow); border: 1px solid rgba(245,197,24,0.25);\r
  padding: 6px 14px; border-radius: 100px;\r
  background: rgba(245,197,24,0.06);\r
  margin-bottom: 28px;\r
  animation: fadeDown 0.8s var(--ease) both;\r
}\r
.hero-tag::before {\r
  content: ''; width: 6px; height: 6px; border-radius: 50%;\r
  background: var(--yellow); animation: pulse 2s infinite;\r
}\r
@keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.4;transform:scale(0.7)} }\r
.hero-title {\r
  font-family: var(--font-display);\r
  font-size: clamp(2.4rem, 5.5vw, 4.5rem);\r
  font-weight: 700; line-height: 1.12;\r
  letter-spacing: 0.01em;\r
  margin-bottom: 1.4rem;\r
  animation: fadeUp 0.9s 0.1s var(--ease) both;\r
}\r
.hero-title .highlight {\r
  color: var(--red);\r
  position: relative;\r
  display: inline-block;\r
}\r
.hero-title .highlight::after {\r
  content: '';\r
  position: absolute; bottom: -4px; left: 0; right: 0; height: 2px;\r
  background: linear-gradient(90deg, var(--red), transparent);\r
}\r
.hero-sub {\r
  color: var(--white-dim); font-size: 1rem; line-height: 1.8;\r
  max-width: 520px; margin-bottom: 2.5rem;\r
  animation: fadeUp 0.9s 0.2s var(--ease) both;\r
}\r
.hero-actions {\r
  display: flex; gap: 16px; flex-wrap: wrap;\r
  animation: fadeUp 0.9s 0.3s var(--ease) both;\r
}\r
.hero-stats {\r
  position: absolute; right: 5%; bottom: 12%;\r
  z-index: 2; display: flex; flex-direction: column; gap: 24px;\r
  animation: fadeLeft 0.9s 0.4s var(--ease) both;\r
}\r
.hero-stat {\r
  text-align: right;\r
}\r
.hero-stat-num {\r
  font-family: var(--font-display); font-size: 2.2rem;\r
  font-weight: 700; color: var(--red);\r
  line-height: 1;\r
}\r
.hero-stat-label {\r
  font-family: var(--font-ui); font-size: 0.65rem;\r
  letter-spacing: 0.18em; text-transform: uppercase;\r
  color: var(--white-dim);\r
}\r
.hero-scroll {\r
  position: absolute; bottom: 40px; left: 50%;\r
  transform: translateX(-50%);\r
  z-index: 2;\r
  display: flex; flex-direction: column; align-items: center; gap: 8px;\r
  font-family: var(--font-ui); font-size: 0.6rem;\r
  letter-spacing: 0.2em; text-transform: uppercase;\r
  color: var(--white-dim);\r
}\r
.hero-scroll-line {\r
  width: 1px; height: 50px;\r
  background: linear-gradient(180deg, transparent, var(--red));\r
  animation: scrollLine 1.8s ease-in-out infinite;\r
}\r
@keyframes scrollLine {\r
  0%{opacity:0;transform:scaleY(0);transform-origin:top}\r
  50%{opacity:1;transform:scaleY(1);transform-origin:top}\r
  100%{opacity:0;transform:scaleY(1);transform-origin:bottom}\r
}\r
@keyframes fadeUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }\r
@keyframes fadeDown { from{opacity:0;transform:translateY(-16px)} to{opacity:1;transform:translateY(0)} }\r
@keyframes fadeLeft { from{opacity:0;transform:translateX(24px)} to{opacity:1;transform:translateX(0)} }\r
\r
/* STUDIO INTRO */\r
#studio-intro {\r
  padding: 100px 5%;\r
  display: grid; grid-template-columns: 1fr 1fr;\r
  gap: 80px; align-items: center;\r
}\r
.intro-visual {\r
  position: relative;\r
}\r
.intro-visual-main {\r
  width: 100%; aspect-ratio: 16/10; border-radius: 18px;\r
  background: linear-gradient(135deg, var(--black3) 0%, var(--black4) 100%);\r
  border: 1px solid var(--border);\r
  display: flex; align-items: center; justify-content: center;\r
  overflow: hidden; position: relative;\r
  box-shadow: 0 24px 60px rgba(0,0,0,0.45);\r
}\r
.intro-visual-main::before {\r
  content: '';\r
  position: absolute; inset: 0;\r
  background:\r
    linear-gradient(180deg, rgba(8,8,8,0.02) 0%, rgba(8,8,8,0.34) 100%),\r
    radial-gradient(ellipse at 78% 28%, rgba(192,0,26,0.16), transparent 42%);\r
  z-index: 2;\r
}\r
.intro-visual-main::after {\r
  content: '';\r
  position: absolute;\r
  inset: 16px;\r
  border: 1px solid rgba(240,236,228,0.14);\r
  border-radius: 12px;\r
  pointer-events: none;\r
  z-index: 3;\r
}\r
.intro-visual-main img {\r
  width: 100%;\r
  height: 100%;\r
  object-fit: cover;\r
  object-position: center center;\r
  display: block;\r
  position: relative;\r
  z-index: 1;\r
  transform: scale(1.02);\r
}\r
.intro-anim-rings {\r
  position: relative; width: 160px; height: 160px;\r
}\r
.ring {\r
  position: absolute; border-radius: 50%;\r
  border: 1px solid rgba(192,0,26,0.3);\r
  top: 50%; left: 50%;\r
  transform: translate(-50%,-50%);\r
  animation: ringPulse 3s ease-in-out infinite;\r
}\r
.ring:nth-child(1){width:60px;height:60px;background:rgba(192,0,26,0.3);}\r
.ring:nth-child(2){width:100px;height:100px;animation-delay:-1s;}\r
.ring:nth-child(3){width:140px;height:140px;animation-delay:-2s;}\r
.ring:nth-child(4){width:180px;height:180px;animation-delay:-0.5s;}\r
@keyframes ringPulse {\r
  0%,100%{transform:translate(-50%,-50%) scale(1);opacity:0.5}\r
  50%{transform:translate(-50%,-50%) scale(1.08);opacity:1}\r
}\r
.intro-badge {\r
  position: absolute; right: 20px; bottom: 20px;\r
  width: 92px; height: 92px; border-radius: 50%;\r
  background: var(--red); display: flex; flex-direction: column;\r
  align-items: center; justify-content: center;\r
  font-family: var(--font-display); font-size: 0.62rem;\r
  letter-spacing: 0.1em; text-transform: uppercase;\r
  font-weight: 700; text-align: center; line-height: 1.3;\r
  animation: none;\r
  box-shadow: 0 0 30px var(--red-glow), 0 10px 30px rgba(0,0,0,0.35);\r
  z-index: 4;\r
}\r
@keyframes spin { from{transform:rotate(0)} to{transform:rotate(360deg)} }\r
.intro-content { padding-right: 20px; }\r
.intro-features {\r
  display: grid; grid-template-columns: 1fr 1fr;\r
  gap: 16px; margin-top: 2rem;\r
}\r
.intro-feature {\r
  display: flex; gap: 12px; align-items: flex-start;\r
  padding: 14px; border-radius: 8px;\r
  background: var(--black3); border: 1px solid var(--border);\r
  transition: border-color 0.3s;\r
}\r
.intro-feature:hover { border-color: var(--border-red); }\r
.intro-feature-icon {\r
  width: 36px; height: 36px; border-radius: 8px;\r
  background: var(--red-soft); display: flex; align-items: center; justify-content: center;\r
  font-size: 1rem; flex-shrink: 0;\r
}\r
.intro-feature-text h4 {\r
  font-family: var(--font-ui); font-size: 0.8rem;\r
  font-weight: 700; margin-bottom: 2px;\r
}\r
.intro-feature-text p { font-size: 0.72rem; color: var(--white-dim); }\r
\r
/* SERVICES PREVIEW */\r
#services-preview {\r
  padding: 100px 5%;\r
  background: var(--black2);\r
}\r
.services-grid {\r
  display: grid;\r
  grid-template-columns: repeat(3, 1fr);\r
  gap: 24px; margin-top: 1.5rem;\r
}\r
.service-card {\r
  padding: 36px 28px; border-radius: 12px;\r
  background: var(--card-bg);\r
  border: 1px solid var(--border);\r
  backdrop-filter: blur(12px);\r
  position: relative; overflow: hidden;\r
  transition: all 0.4s var(--ease);\r
}\r
.service-card-thumb {\r
  position: relative;\r
  width: calc(100% + 56px);\r
  margin: -36px -28px 24px;\r
  aspect-ratio: 16 / 10;\r
  overflow: hidden;\r
  border-bottom: 1px solid var(--border);\r
}\r
.service-card-thumb img {\r
  width: 100%;\r
  height: 100%;\r
  object-fit: cover;\r
  display: block;\r
  transition: transform 0.5s var(--ease), filter 0.5s var(--ease);\r
  filter: saturate(0.92) contrast(1.02);\r
}\r
.service-card:hover .service-card-thumb img {\r
  transform: scale(1.05);\r
  filter: saturate(1) contrast(1.06);\r
}\r
.service-card-thumb::after {\r
  content: '';\r
  position: absolute;\r
  inset: 0;\r
  background: linear-gradient(180deg, rgba(8,8,8,0.04) 0%, rgba(8,8,8,0.36) 100%);\r
  pointer-events: none;\r
}\r
.service-card::before {\r
  content: '';\r
  position: absolute; inset: 0;\r
  background: linear-gradient(135deg, var(--red-soft) 0%, transparent 60%);\r
  opacity: 0; transition: opacity 0.4s;\r
}\r
.service-card:hover::before { opacity: 1; }\r
.service-card:hover {\r
  border-color: var(--border-red);\r
  transform: translateY(-6px);\r
  box-shadow: 0 0 50px var(--red-glow), 0 24px 60px rgba(0,0,0,0.5);\r
}\r
.service-card-num {\r
  font-family: var(--font-display); font-size: 3rem;\r
  font-weight: 700; color: var(--white-faint);\r
  position: absolute; top: 20px; right: 24px;\r
  line-height: 1;\r
}\r
.service-card-icon {\r
  width: 52px; height: 52px; border-radius: 10px;\r
  background: var(--red-soft); border: 1px solid var(--border-red);\r
  display: flex; align-items: center; justify-content: center;\r
  font-size: 1.4rem; margin-bottom: 20px;\r
  transition: all 0.3s var(--ease);\r
}\r
.service-card:hover .service-card-icon {\r
  background: var(--red); box-shadow: 0 0 20px var(--red-glow);\r
}\r
.service-card h3 {\r
  font-family: var(--font-ui); font-size: 1rem;\r
  font-weight: 700; margin-bottom: 10px;\r
}\r
.service-card p { font-size: 0.83rem; color: var(--white-dim); line-height: 1.7; }\r
.service-card-link {\r
  display: inline-flex; align-items: center; gap: 6px;\r
  font-family: var(--font-ui); font-size: 0.72rem;\r
  font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase;\r
  color: var(--red); margin-top: 20px;\r
  transition: gap 0.3s;\r
}\r
.service-card:hover .service-card-link { gap: 10px; }\r
\r
/* WHY CHOOSE US */\r
#why-us {\r
  padding: 100px 5%;\r
  display: grid; grid-template-columns: 1fr 1fr;\r
  gap: 80px; align-items: center;\r
}\r
.why-content { order: 2; }\r
.why-grid {\r
  display: grid; grid-template-columns: 1fr 1fr;\r
  gap: 20px; order: 1;\r
}\r
.why-card {\r
  padding: 28px 24px; border-radius: 10px;\r
  background: var(--card-bg); border: 1px solid var(--border);\r
  transition: all 0.4s var(--ease);\r
}\r
.why-card:hover {\r
  border-color: var(--border-red);\r
  transform: translateY(-4px);\r
  box-shadow: 0 0 30px var(--red-glow);\r
}\r
.why-card-icon {\r
  font-size: 1.8rem; margin-bottom: 16px;\r
}\r
.why-card h4 {\r
  font-family: var(--font-ui); font-size: 0.9rem;\r
  font-weight: 700; margin-bottom: 8px;\r
}\r
.why-card p { font-size: 0.78rem; color: var(--white-dim); line-height: 1.7; }\r
\r
/* WORKS PREVIEW */\r
#works-preview {\r
  padding: 100px 5%;\r
  background: var(--black2);\r
}\r
.works-grid {\r
  display: grid;\r
  grid-template-columns: repeat(3, 1fr);\r
  gap: 20px; margin-top: 1.5rem;\r
}\r
.work-card {\r
  border-radius: 10px; overflow: hidden;\r
  position: relative; aspect-ratio: 4/3;\r
  background: var(--black3); border: 1px solid var(--border);\r
  cursor: pointer;\r
}\r
.work-card-bg {\r
  position: absolute; inset: 0;\r
  transition: transform 0.6s var(--ease);\r
}\r
.work-card-bg img,\r
.work-card-bg video,\r
.portfolio-thumb-bg img,\r
.portfolio-thumb-bg video {\r
  width: 100%;\r
  height: 100%;\r
  object-fit: cover;\r
  display: block;\r
}\r
.work-card:hover .work-card-bg { transform: scale(1.06); }\r
.work-card-bg-1 { background: linear-gradient(135deg, #1a0508, #3a000d); }\r
.work-card-bg-2 { background: linear-gradient(135deg, #050a1a, #001035); }\r
.work-card-bg-3 { background: linear-gradient(135deg, #0a0a0a, #1a1a1a); }\r
.work-card-bg-4 { background: linear-gradient(135deg, #0a0508, #1a0010); }\r
.work-card-bg-5 { background: linear-gradient(135deg, #050a08, #001a10); }\r
.work-card-bg-6 { background: linear-gradient(135deg, #0a0808, #1a0c00); }\r
.work-card-pattern {\r
  position: absolute; inset: 0; display: flex;\r
  align-items: center; justify-content: center;\r
  font-size: 4rem; opacity: 0.15;\r
}\r
.work-card-overlay {\r
  position: absolute; inset: 0;\r
  background: linear-gradient(0deg, rgba(8,8,8,0.92) 0%, transparent 50%);\r
  padding: 20px;\r
  display: flex; flex-direction: column; justify-content: flex-end;\r
  transform: translateY(20px); opacity: 0.7;\r
  transition: all 0.4s var(--ease);\r
}\r
.work-card:hover .work-card-overlay {\r
  transform: translateY(0); opacity: 1;\r
}\r
.work-tag {\r
  font-family: var(--font-ui); font-size: 0.62rem;\r
  letter-spacing: 0.15em; text-transform: uppercase;\r
  color: var(--red); margin-bottom: 6px;\r
}\r
.work-card-overlay h3 {\r
  font-family: var(--font-ui); font-size: 0.9rem; font-weight: 700;\r
}\r
.work-play {\r
  position: absolute; top: 50%; left: 50%;\r
  transform: translate(-50%,-50%) scale(0.8); opacity: 0;\r
  width: 52px; height: 52px; border-radius: 50%;\r
  background: var(--red); display: flex; align-items: center; justify-content: center;\r
  font-size: 1.2rem; transition: all 0.4s var(--ease);\r
  box-shadow: 0 0 30px var(--red-glow);\r
}\r
.work-card:hover .work-play { opacity: 1; transform: translate(-50%,-50%) scale(1); }\r
.works-cta { text-align: center; margin-top: 3rem; }\r
\r
/* TESTIMONIALS */\r
#testimonials {\r
  padding: 100px 5%;\r
}\r
.testimonials-header { text-align: center; }\r
.testimonials-header .section-label { justify-content: center; }\r
.testimonials-header .section-label::before { display: none; }\r
.testimonials-header .section-sub { margin: 0 auto 3rem; }\r
.testimonials-track {\r
  display: grid; grid-template-columns: repeat(3,1fr);\r
  gap: 24px;\r
}\r
.testi-card {\r
  padding: 32px 28px; border-radius: 12px;\r
  background: var(--card-bg); border: 1px solid var(--border);\r
  backdrop-filter: blur(12px);\r
  position: relative; overflow: hidden;\r
  transition: all 0.4s var(--ease);\r
}\r
.testi-card:hover {\r
  border-color: var(--border-red);\r
  box-shadow: 0 0 40px var(--red-glow);\r
  transform: translateY(-4px);\r
}\r
.testi-quote {\r
  font-size: 3rem; color: var(--red); line-height: 1;\r
  font-family: var(--font-display); margin-bottom: 16px;\r
  opacity: 0.6;\r
}\r
.testi-text {\r
  font-size: 0.88rem; color: var(--white-dim);\r
  line-height: 1.8; margin-bottom: 24px;\r
  font-style: italic;\r
}\r
.testi-stars { color: var(--yellow); font-size: 0.9rem; margin-bottom: 20px; }\r
.testi-author { display: flex; gap: 14px; align-items: center; }\r
.testi-avatar {\r
  width: 44px; height: 44px; border-radius: 50%;\r
  display: flex; align-items: center; justify-content: center;\r
  font-family: var(--font-display); font-size: 1rem; font-weight: 700;\r
  background: var(--red); flex-shrink: 0;\r
}\r
.testi-author-name {\r
  font-family: var(--font-ui); font-size: 0.88rem; font-weight: 700;\r
}\r
.testi-author-role { font-size: 0.72rem; color: var(--white-dim); }\r
\r
/* FAQ */\r
#faq {\r
  padding: 100px 5%;\r
  background: var(--black2);\r
}\r
.faq-container {\r
  max-width: 760px; margin: 0 auto;\r
}\r
.faq-header { text-align: center; margin-bottom: 3rem; }\r
.faq-header .section-label { justify-content: center; }\r
.faq-header .section-label::before { display: none; }\r
.faq-item {\r
  border-bottom: 1px solid var(--border);\r
  transition: border-color 0.3s;\r
}\r
.faq-item.open { border-color: var(--border-red); }\r
.faq-question {\r
  display: flex; align-items: center; justify-content: space-between;\r
  padding: 22px 0;\r
  font-family: var(--font-ui); font-size: 0.92rem;\r
  font-weight: 600; cursor: pointer;\r
  transition: color 0.3s;\r
}\r
.faq-question:hover { color: var(--red); }\r
.faq-item.open .faq-question { color: var(--red); }\r
.faq-icon {\r
  width: 28px; height: 28px; border-radius: 50%;\r
  border: 1px solid var(--border-red);\r
  display: flex; align-items: center; justify-content: center;\r
  font-size: 1rem; flex-shrink: 0; color: var(--red);\r
  transition: transform 0.4s var(--ease), background 0.3s;\r
}\r
.faq-item.open .faq-icon { transform: rotate(45deg); background: var(--red); color: var(--white); }\r
.faq-answer {\r
  max-height: 0; overflow: hidden;\r
  transition: max-height 0.5s var(--ease), padding 0.3s;\r
}\r
.faq-item.open .faq-answer { max-height: 200px; }\r
.faq-answer-inner {\r
  padding-bottom: 22px;\r
  font-size: 0.85rem; color: var(--white-dim); line-height: 1.8;\r
}\r
\r
/* =========================\r
   ===== SERVICES PAGE =====\r
   ========================= */\r
.services-full-grid {\r
  display: grid; grid-template-columns: 1fr 1fr;\r
  gap: 28px; margin-top: 2rem;\r
}\r
.service-full-card {\r
  padding: 40px 36px; border-radius: 14px;\r
  background: var(--card-bg); border: 1px solid var(--border);\r
  backdrop-filter: blur(12px);\r
  position: relative; overflow: hidden;\r
  transition: all 0.4s var(--ease);\r
}\r
.service-full-card::after {\r
  content: '';\r
  position: absolute; top: 0; left: 0; right: 0; height: 2px;\r
  background: linear-gradient(90deg, var(--red), var(--red-deep));\r
  transform: scaleX(0); transform-origin: left;\r
  transition: transform 0.4s var(--ease);\r
}\r
.service-full-card:hover::after { transform: scaleX(1); }\r
.service-full-card:hover {\r
  border-color: var(--border-red);\r
  transform: translateY(-6px);\r
  box-shadow: 0 0 50px var(--red-glow), 0 24px 60px rgba(0,0,0,0.5);\r
}\r
.service-full-icon {\r
  width: 64px; height: 64px; border-radius: 14px;\r
  background: var(--red-soft); border: 1px solid var(--border-red);\r
  display: flex; align-items: center; justify-content: center;\r
  font-size: 1.8rem; margin-bottom: 24px;\r
  transition: all 0.3s var(--ease);\r
}\r
.service-full-card:hover .service-full-icon {\r
  background: var(--red); box-shadow: 0 0 30px var(--red-glow);\r
}\r
.service-full-card h3 {\r
  font-family: var(--font-display); font-size: 1.2rem;\r
  font-weight: 700; margin-bottom: 12px;\r
}\r
.service-full-card > p { font-size: 0.85rem; color: var(--white-dim); line-height: 1.75; margin-bottom: 20px; }\r
.service-benefits { margin-top: 16px; display: flex; flex-direction: column; gap: 8px; }\r
.service-benefit {\r
  display: flex; gap: 10px; align-items: flex-start;\r
  font-size: 0.8rem; color: var(--white-dim);\r
}\r
.service-benefit::before {\r
  content: '▸'; color: var(--red); flex-shrink: 0; line-height: 1.5;\r
}\r
.service-preview-area {\r
  margin-top: 24px; border-radius: 8px;\r
  height: 180px;\r
  background: linear-gradient(135deg, rgba(192,0,26,0.06) 0%, rgba(0,0,0,0) 100%);\r
  border: 1px solid var(--border-red);\r
  overflow: hidden;\r
}\r
.service-preview-area img {\r
  width: 100%;\r
  height: 100%;\r
  object-fit: cover;\r
  display: block;\r
  transition: transform 0.5s var(--ease), filter 0.5s var(--ease);\r
}\r
.service-full-card:hover .service-preview-area img {\r
  transform: scale(1.04);\r
  filter: saturate(1.05) contrast(1.04);\r
}\r
.services-cta-section {\r
  margin: 80px 5%;\r
  padding: 60px; border-radius: 16px;\r
  background: linear-gradient(135deg, rgba(192,0,26,0.15) 0%, rgba(139,0,0,0.08) 100%);\r
  border: 1px solid var(--border-red);\r
  text-align: center;\r
  position: relative; overflow: hidden;\r
}\r
.services-cta-section::before {\r
  content: ''; position: absolute; inset: 0;\r
  background: radial-gradient(ellipse at 50% 0%, rgba(192,0,26,0.2), transparent 60%);\r
}\r
.services-cta-section h2 {\r
  font-family: var(--font-display); font-size: clamp(1.6rem, 3vw, 2.4rem);\r
  font-weight: 700; margin-bottom: 16px; position: relative;\r
}\r
.services-cta-section p {\r
  color: var(--white-dim); max-width: 480px; margin: 0 auto 2rem;\r
  position: relative;\r
}\r
.wa-btn {\r
  display: inline-flex; align-items: center; gap: 10px;\r
  font-family: var(--font-ui); font-size: 0.8rem;\r
  font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase;\r
  padding: 13px 28px; border-radius: 4px;\r
  background: #25D366; color: #fff;\r
  transition: all 0.3s var(--ease); position: relative;\r
}\r
.wa-btn:hover {\r
  background: #1ebe5d; transform: translateY(-2px);\r
  box-shadow: 0 12px 40px rgba(37,211,102,0.3);\r
}\r
\r
/* ========================\r
   ===== WORKS PAGE =====\r
   ======================== */\r
.works-filters {\r
  display: flex; gap: 12px; flex-wrap: wrap;\r
  margin-bottom: 2.5rem;\r
}\r
.filter-btn {\r
  font-family: var(--font-ui); font-size: 0.72rem;\r
  font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase;\r
  padding: 8px 20px; border-radius: 100px;\r
  border: 1px solid var(--border); color: var(--white-dim);\r
  transition: all 0.3s var(--ease);\r
}\r
.filter-btn.active, .filter-btn:hover {\r
  border-color: var(--red); color: var(--white); background: var(--red-soft);\r
  box-shadow: 0 0 20px var(--red-glow);\r
}\r
.portfolio-grid {\r
  display: grid;\r
  grid-template-columns: repeat(3,1fr);\r
  gap: 24px;\r
}\r
.portfolio-card {\r
  border-radius: 12px; overflow: hidden;\r
  border: 1px solid var(--border);\r
  background: var(--black3);\r
  transition: all 0.4s var(--ease);\r
  cursor: pointer;\r
}\r
.portfolio-card:hover {\r
  border-color: var(--border-red);\r
  transform: translateY(-6px);\r
  box-shadow: 0 0 40px var(--red-glow), 0 20px 60px rgba(0,0,0,0.5);\r
}\r
.portfolio-thumb {\r
  aspect-ratio: 16/9; position: relative; overflow: hidden;\r
}\r
.portfolio-thumb-bg {\r
  position: absolute; inset: 0;\r
  transition: transform 0.6s var(--ease);\r
}\r
.portfolio-card:hover .portfolio-thumb-bg { transform: scale(1.08); }\r
.portfolio-thumb-icon {\r
  position: absolute; inset: 0;\r
  display: flex; align-items: center; justify-content: center;\r
  font-size: 3.5rem; opacity: 0.2;\r
}\r
.portfolio-thumb-btn {\r
  position: absolute; top: 50%; left: 50%;\r
  transform: translate(-50%,-50%) scale(0.7); opacity: 0;\r
  transition: all 0.4s var(--ease);\r
  background: var(--red); color: var(--white);\r
  padding: 10px 22px; border-radius: 4px;\r
  font-family: var(--font-ui); font-size: 0.72rem;\r
  font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase;\r
  display: flex; align-items: center; gap: 8px;\r
  box-shadow: 0 0 30px var(--red-glow);\r
}\r
.portfolio-card:hover .portfolio-thumb-btn { opacity: 1; transform: translate(-50%,-50%) scale(1); }\r
.portfolio-info { padding: 20px; }\r
.portfolio-cat {\r
  font-family: var(--font-ui); font-size: 0.62rem;\r
  letter-spacing: 0.18em; text-transform: uppercase;\r
  color: var(--red); margin-bottom: 6px;\r
}\r
.portfolio-info h3 {\r
  font-family: var(--font-ui); font-size: 0.95rem;\r
  font-weight: 700; margin-bottom: 6px;\r
}\r
.portfolio-info p { font-size: 0.78rem; color: var(--white-dim); }\r
\r
/* ========================\r
   ===== ABOUT PAGE =====\r
   ======================== */\r
.about-intro-grid {
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 40px; align-items: center;
  padding: 64px 5% 44px;
}
.about-visual {
  position: relative;
  display: flex;
  align-items: center;
}
.about-visual-main {
  width: 100%;
  max-width: 420px;
  min-height: 0;
  border-radius: 20px; overflow: hidden;
  background: linear-gradient(180deg, #1a1a1a 0%, #101010 100%);
  border: 1px solid var(--border);
  display: flex; align-items: center; justify-content: center;
  position: relative;
  box-shadow: 0 24px 60px rgba(0,0,0,0.42);
  padding: 0;
  margin: 0 auto 0 0;
}
.about-visual-main::before {\r
  content: '';\r
  position: absolute; inset: 0;\r
  background:\r
    radial-gradient(circle at top, rgba(255,255,255,0.06), transparent 38%),\r
    linear-gradient(180deg, rgba(8,8,8,0.02) 0%, rgba(8,8,8,0.1) 100%);\r
  z-index: 2;\r
}\r
.about-logo-big {
  width: 100%;
  aspect-ratio: 3 / 4;
  object-fit: cover;
  object-position: center 18%;
  border-radius: 0;
  box-shadow: none;
  position: relative; z-index: 1;
  transform: none;
}
.about-accent-card {
  position: absolute; right: -18px; bottom: 24px;
  padding: 16px 20px; border-radius: 10px;
  background: var(--red); min-width: 156px;
  box-shadow: 0 0 40px var(--red-glow);
  z-index: 4;
}
.about-accent-num {
  font-family: var(--font-display); font-size: 1.9rem; font-weight: 700;
}
.about-accent-label {
  font-family: var(--font-ui); font-size: 0.7rem;
  letter-spacing: 0.1em; text-transform: uppercase; opacity: 0.8;
}
.about-copy .section-title {
  font-size: clamp(1.65rem, 2.8vw, 2.4rem);
  margin-bottom: 0.8rem;
}
.about-copy p {
  color: var(--white-dim);
  font-size: 0.88rem;
  line-height: 1.8;
  margin-bottom: 1rem;
}
.stats-row {
  display: grid; grid-template-columns: repeat(4,1fr);
  gap: 1px; background: var(--border);
  border: 1px solid var(--border);
  border-radius: 12px; overflow: hidden;
  margin: 36px 5% 60px;
}
.stat-box {\r
  padding: 40px 30px; background: var(--black3);\r
  text-align: center;\r
  transition: background 0.3s;\r
}\r
.stat-box:hover { background: var(--black4); }\r
.stat-box-num {\r
  font-family: var(--font-display); font-size: 2.4rem;\r
  font-weight: 700; color: var(--red); line-height: 1;\r
  margin-bottom: 8px;\r
}\r
.stat-box-label {\r
  font-family: var(--font-ui); font-size: 0.72rem;\r
  letter-spacing: 0.15em; text-transform: uppercase;\r
  color: var(--white-dim);\r
}\r
.mission-vision {\r
  display: grid; grid-template-columns: 1fr 1fr;\r
  gap: 28px; padding: 0 5% 80px;\r
}\r
.mv-card {\r
  padding: 44px 36px; border-radius: 14px;\r
  position: relative; overflow: hidden;\r
}\r
.mv-card-mission {\r
  background: linear-gradient(135deg, rgba(192,0,26,0.15) 0%, rgba(139,0,0,0.06) 100%);\r
  border: 1px solid var(--border-red);\r
}\r
.mv-card-vision {\r
  background: var(--card-bg); border: 1px solid var(--border);\r
}\r
.mv-card-icon {\r
  font-size: 2.5rem; margin-bottom: 20px;\r
}\r
.mv-card h3 {\r
  font-family: var(--font-display); font-size: 1.5rem;\r
  font-weight: 700; margin-bottom: 16px; color: var(--red);\r
}\r
.mv-card p { color: var(--white-dim); line-height: 1.8; font-size: 0.9rem; }\r
.team-grid {\r
  display: grid; grid-template-columns: repeat(4,1fr);\r
  gap: 20px; padding: 0 5% 80px;\r
}\r
.team-card {\r
  border-radius: 12px; overflow: hidden;\r
  background: var(--card-bg); border: 1px solid var(--border);\r
  text-align: center; padding: 32px 20px;\r
  transition: all 0.4s var(--ease);\r
}\r
.team-card:hover {\r
  border-color: var(--border-red);\r
  transform: translateY(-6px);\r
  box-shadow: 0 0 40px var(--red-glow);\r
}\r
.team-avatar {\r
  width: 80px; height: 80px; border-radius: 50%;\r
  background: var(--red-soft); border: 2px solid var(--border-red);\r
  display: flex; align-items: center; justify-content: center;\r
  font-family: var(--font-display); font-size: 1.4rem; font-weight: 700;\r
  margin: 0 auto 16px; color: var(--red);\r
  transition: background 0.3s;\r
}\r
.team-card:hover .team-avatar { background: var(--red); color: var(--white); }\r
.team-name {\r
  font-family: var(--font-ui); font-size: 0.95rem; font-weight: 700; margin-bottom: 4px;\r
}\r
.team-role { font-size: 0.75rem; color: var(--red); font-family: var(--font-ui); letter-spacing: 0.08em; }\r
.workflow-section { padding: 0 5% 80px; }\r
.workflow-steps {\r
  display: grid; grid-template-columns: repeat(5,1fr);\r
  gap: 0; position: relative; margin-top: 2rem;\r
}\r
.workflow-steps::before {\r
  content: '';\r
  position: absolute; top: 32px; left: 10%; right: 10%; height: 1px;\r
  background: linear-gradient(90deg, transparent, var(--border-red), var(--red), var(--border-red), transparent);\r
}\r
.workflow-step {\r
  text-align: center; padding: 0 16px;\r
  position: relative;\r
}\r
.workflow-step-circle {\r
  width: 64px; height: 64px; border-radius: 50%;\r
  background: var(--black3); border: 1px solid var(--border-red);\r
  display: flex; align-items: center; justify-content: center;\r
  font-family: var(--font-display); font-size: 1.1rem; font-weight: 700;\r
  color: var(--red); margin: 0 auto 20px;\r
  transition: all 0.3s var(--ease);\r
  position: relative; z-index: 1;\r
}\r
.workflow-step:hover .workflow-step-circle {\r
  background: var(--red); color: var(--white);\r
  box-shadow: 0 0 30px var(--red-glow);\r
}\r
.workflow-step h4 {\r
  font-family: var(--font-ui); font-size: 0.82rem;\r
  font-weight: 700; margin-bottom: 8px;\r
}\r
.workflow-step p { font-size: 0.72rem; color: var(--white-dim); line-height: 1.6; }\r
\r
/* ==========================\r
   ===== CONTACT PAGE =====\r
   ========================== */\r
.contact-grid {\r
  display: grid; grid-template-columns: 1fr 1.2fr;\r
  gap: 60px; padding: 60px 5% 80px;\r
}\r
.contact-info-panel {}\r
.contact-info-item {\r
  display: flex; gap: 16px; align-items: flex-start;\r
  padding: 20px; border-radius: 10px;\r
  background: var(--card-bg); border: 1px solid var(--border);\r
  margin-bottom: 16px;\r
  transition: border-color 0.3s;\r
}\r
.contact-info-item:hover { border-color: var(--border-red); }\r
.contact-info-icon {\r
  width: 44px; height: 44px; border-radius: 10px;\r
  background: var(--red-soft); border: 1px solid var(--border-red);\r
  display: flex; align-items: center; justify-content: center;\r
  font-size: 1.1rem; flex-shrink: 0;\r
}\r
.contact-info-item h4 {\r
  font-family: var(--font-ui); font-size: 0.8rem;\r
  font-weight: 700; margin-bottom: 4px;\r
}\r
.contact-info-item p { font-size: 0.82rem; color: var(--white-dim); }\r
.contact-socials {\r
  display: flex; gap: 12px; margin-top: 24px; flex-wrap: wrap;\r
}\r
.social-pill {\r
  display: flex; align-items: center; gap: 8px;\r
  padding: 8px 18px; border-radius: 100px;\r
  border: 1px solid var(--border); background: var(--card-bg);\r
  font-family: var(--font-ui); font-size: 0.72rem;\r
  font-weight: 700; letter-spacing: 0.08em;\r
  transition: all 0.3s var(--ease);\r
}\r
.social-pill:hover {\r
  border-color: var(--border-red); background: var(--red-soft);\r
  box-shadow: 0 0 20px var(--red-glow);\r
}\r
.map-placeholder {
  margin-top: 24px; border-radius: 10px;
  height: 240px; background: var(--black3);
  border: 1px solid var(--border);
  overflow: hidden; position: relative;
}
.map-placeholder iframe {
  width: 100%;
  height: 100%;
  border: 0;
  display: block;
}
.contact-form-panel {}\r
.contact-form {\r
  background: var(--card-bg); border: 1px solid var(--border);\r
  border-radius: 14px; padding: 44px 40px;\r
  backdrop-filter: blur(12px);\r
}\r
.contact-form h3 {\r
  font-family: var(--font-display); font-size: 1.4rem;\r
  font-weight: 700; margin-bottom: 8px;\r
}\r
.contact-form-sub { font-size: 0.82rem; color: var(--white-dim); margin-bottom: 28px; }\r
.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }\r
.form-group { margin-bottom: 16px; }\r
.form-group label {\r
  display: block; font-family: var(--font-ui); font-size: 0.72rem;\r
  font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase;\r
  color: var(--white-dim); margin-bottom: 8px;\r
}\r
.form-group input, .form-group textarea, .form-group select {\r
  width: 100%; padding: 12px 16px; border-radius: 8px;\r
  background: var(--black3); border: 1px solid var(--border);\r
  color: var(--white); font-size: 0.88rem;\r
  transition: border-color 0.3s, box-shadow 0.3s;\r
  outline: none;\r
  appearance: none;\r
}\r
.form-group select {\r
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23c0001a' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");\r
  background-repeat: no-repeat;\r
  background-position: right 14px center;\r
  padding-right: 36px;\r
}\r
.form-group input:focus, .form-group textarea:focus, .form-group select:focus {\r
  border-color: var(--red);\r
  box-shadow: 0 0 20px var(--red-glow);\r
}\r
.form-group textarea { resize: vertical; min-height: 120px; }\r
.form-group select option { background: var(--black3); }\r
.form-success {\r
  display: none; text-align: center; padding: 40px 20px;\r
}\r
.form-success.show { display: block; animation: fadeUp 0.6s var(--ease) both; }\r
.form-success-icon {\r
  font-size: 3.5rem; margin-bottom: 16px;\r
  animation: successPop 0.6s var(--ease-bounce) both;\r
}\r
@keyframes successPop { from{transform:scale(0)} to{transform:scale(1)} }\r
.form-success h3 {\r
  font-family: var(--font-display); font-size: 1.4rem;\r
  font-weight: 700; color: var(--red); margin-bottom: 8px;\r
}\r
.form-success p { color: var(--white-dim); font-size: 0.88rem; }\r
\r
/* WA FLOAT */\r
.wa-float {\r
  position: fixed; bottom: 28px; right: 28px; z-index: 800;\r
  width: 56px; height: 56px; border-radius: 50%;\r
  background: #25D366; display: flex; align-items: center; justify-content: center;\r
  font-size: 1.5rem; box-shadow: 0 4px 24px rgba(37,211,102,0.4);\r
  transition: all 0.3s var(--ease);\r
  animation: waFloat 3s ease-in-out infinite;\r
}\r
.wa-float:hover {\r
  transform: scale(1.12);\r
  box-shadow: 0 8px 40px rgba(37,211,102,0.5);\r
}\r
@keyframes waFloat {\r
  0%,100%{transform:translateY(0)}\r
  50%{transform:translateY(-6px)}\r
}\r
.wa-float-pulse {\r
  position: absolute; inset: -4px; border-radius: 50%;\r
  border: 2px solid rgba(37,211,102,0.4);\r
  animation: waPulse 2s ease-in-out infinite;\r
}\r
@keyframes waPulse { 0%,100%{transform:scale(1);opacity:0.5} 50%{transform:scale(1.2);opacity:0} }\r
\r
/* ===== FOOTER ===== */\r
footer {\r
  background: var(--black2);\r
  border-top: 1px solid var(--border);\r
  padding: 70px 5% 30px;\r
}\r
.footer-top {\r
  display: grid; grid-template-columns: 1.5fr 1fr 1fr 1.2fr;\r
  gap: 60px; margin-bottom: 50px;\r
}\r
.footer-brand {}\r
.footer-logo {\r
  font-family: var(--font-display); font-size: 1.3rem;\r
  font-weight: 700; display: flex; align-items: center; gap: 10px;\r
  margin-bottom: 16px;\r
}\r
.footer-logo-mark {\r
  width: 42px; height: 42px; border-radius: 8px;\r
  overflow: hidden;\r
  border: 1px solid var(--border);\r
  background: #f0f0f0; display: flex; align-items: center; justify-content: center;\r
}\r
.footer-logo-mark img {\r
  width: 100%; height: 100%;\r
  object-fit: cover;\r
}\r
.footer-tagline {\r
  font-size: 0.82rem; color: var(--white-dim); line-height: 1.75;\r
  margin-bottom: 24px; max-width: 280px;\r
}\r
.footer-socials { display: flex; gap: 10px; }\r
.social-icon {\r
  width: 36px; height: 36px; border-radius: 8px;\r
  border: 1px solid var(--border); background: var(--black3);\r
  display: flex; align-items: center; justify-content: center;\r
  font-size: 0.85rem; transition: all 0.3s var(--ease);\r
}\r
.social-icon:hover {\r
  border-color: var(--red); background: var(--red-soft);\r
  box-shadow: 0 0 16px var(--red-glow); transform: translateY(-2px);\r
}\r
.footer-col h4 {\r
  font-family: var(--font-ui); font-size: 0.72rem;\r
  font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase;\r
  color: var(--white); margin-bottom: 20px;\r
}\r
.footer-links { display: flex; flex-direction: column; gap: 10px; }\r
.footer-link {\r
  font-size: 0.82rem; color: var(--white-dim);\r
  transition: color 0.3s;\r
  display: flex; align-items: center; gap: 6px;\r
}\r
.footer-link::before { content: '▸'; color: var(--red); font-size: 0.65rem; opacity: 0; transition: opacity 0.3s; }\r
.footer-link:hover { color: var(--white); }\r
.footer-link:hover::before { opacity: 1; }\r
.footer-contact-item {\r
  display: flex; gap: 10px; align-items: flex-start;\r
  font-size: 0.82rem; color: var(--white-dim);\r
  margin-bottom: 12px;\r
}\r
.footer-contact-icon { color: var(--red); flex-shrink: 0; margin-top: 2px; }\r
.footer-bottom {\r
  border-top: 1px solid var(--border);\r
  padding-top: 24px;\r
  display: flex; align-items: center; justify-content: space-between;\r
  font-size: 0.75rem; color: var(--white-faint);\r
  font-family: var(--font-ui);\r
}\r
.footer-bottom-red { color: var(--red); }\r
\r
/* ===== RESPONSIVE ===== */\r
\r
/* Large tablets & small laptops (992px – 1100px) */\r
@media (max-width: 1100px) {\r
  .services-grid { grid-template-columns: repeat(2,1fr); }\r
  .testimonials-track { grid-template-columns: repeat(2,1fr); }\r
  .footer-top { grid-template-columns: 1fr 1fr; gap: 40px; }\r
  .workflow-steps { grid-template-columns: repeat(3,1fr); }\r
  .workflow-steps::before { display: none; }\r
}\r
\r
/* Tablets (768px – 991px) */\r
@media (max-width: 991px) {\r
  #studio-intro, #why-us, .about-intro-grid { grid-template-columns: 1fr; gap: 32px; }\r
  .hero-stats { display: none; }\r
  .why-content { order: 0; }\r
  .works-grid, .portfolio-grid { grid-template-columns: repeat(2,1fr); }\r
  .services-full-grid { grid-template-columns: 1fr; }\r
  .mission-vision { grid-template-columns: 1fr; }\r
  .stats-row { grid-template-columns: repeat(2,1fr); }\r
  .team-grid { grid-template-columns: repeat(2,1fr); }\r
  .contact-grid { grid-template-columns: 1fr; }\r
\r
  .section { padding: 80px 5%; }\r
  .page-hero { padding: 120px 5% 60px; min-height: 32vh; }\r
  #hero { padding: 0 5%; }\r
  .hero-content { padding-top: 60px; }\r
  .hero-title { font-size: clamp(2rem, 4.5vw, 3.2rem); }\r
  .about-intro-grid { padding: 50px 5% 36px; }\r
  .stats-row { margin: 28px 5% 44px; }\r
  .mission-vision { margin: 0 5% 60px; }\r
  .team-grid, .workflow-section { margin: 0 5% 60px; }\r
  .contact-grid { padding: 48px 5% 60px; gap: 40px; }\r
  .footer-top { grid-template-columns: 1fr 1fr; gap: 36px; }\r
  .portfolio-grid { grid-template-columns: repeat(2,1fr); }\r
}\r
\r
/* Large phones (480px – 767px) */\r
@media (max-width: 767px) {\r
  .nav-links, .nav-cta { display: none; }\r
  .nav-hamburger { display: flex; }\r
\r
  .section { padding: 60px 5%; }\r
  .page-hero { padding: 100px 5% 48px; min-height: 28vh; }\r
  #hero { padding: 0 5%; min-height: auto; }\r
  .hero-content { padding-top: 48px; max-width: 100%; }\r
  .hero-title { font-size: clamp(1.8rem, 6vw, 2.4rem); }\r
  .hero-sub { font-size: 0.9rem; }\r
  .hero-actions { flex-direction: column; align-items: stretch; }\r
  .hero-actions .btn { text-align: center; justify-content: center; }\r
\r
  .services-grid { grid-template-columns: 1fr; }\r
  .works-grid, .portfolio-grid { grid-template-columns: 1fr; }\r
  .testimonials-track { grid-template-columns: 1fr; }\r
  .intro-features { grid-template-columns: 1fr; }\r
  .why-grid { grid-template-columns: 1fr; }\r
  .contact-form { padding: 28px 20px; }\r
  .form-row { grid-template-columns: 1fr; }\r
\r
  #studio-intro { padding: 60px 5%; }\r
  .about-intro-grid { padding: 40px 5% 28px; }\r
  .stats-row { margin: 20px 5% 36px; grid-template-columns: repeat(2,1fr); }\r
  .stat-box { padding: 28px 18px; }\r
  .mission-vision { margin: 0 5% 48px; gap: 20px; }\r
  .mv-card { padding: 32px 24px; }\r
\r
  .team-grid { grid-template-columns: repeat(2,1fr); gap: 14px; margin: 0 5% 48px; }\r
  .team-card { padding: 24px 14px; }\r
  .workflow-steps { grid-template-columns: repeat(2,1fr); margin-top: 1.5rem; }\r
  .workflow-step { padding: 20px 12px; }\r
\r
  .services-cta-section { padding: 36px 24px; margin: 40px 5%; }\r
  .section-title { font-size: 1.5rem; }\r
  .section-sub { margin-bottom: 2rem; }\r
\r
  .footer { padding: 50px 5% 24px; }\r
  .footer-top { grid-template-columns: 1fr; gap: 32px; }\r
  .footer-brand { text-align: center; align-items: center; }\r
  .footer-socials { justify-content: center; }\r
\r
  .contact-grid { padding: 36px 5% 48px; gap: 32px; }\r
  .contact-form-panel { order: -1; }\r
\r
  .page-hero-content { text-align: center; }\r
  .page-hero-content .section-sub { margin-left: auto; margin-right: auto; }\r
}\r
\r
/* Small phones (< 480px) */\r
@media (max-width: 479px) {\r
  .section { padding: 48px 4%; }\r
  .page-hero { padding: 86px 4% 36px; min-height: 24vh; }\r
  .hero-content { padding-top: 36px; }\r
  .hero-title { font-size: 1.65rem; }\r
  .hero-tag { font-size: 0.62rem; padding: 4px 10px; margin-bottom: 20px; }\r
\r
  .team-grid { grid-template-columns: 1fr; gap: 12px; margin: 0 4% 36px; }\r
  .workflow-steps { grid-template-columns: 1fr; }\r
  .stats-row { grid-template-columns: 1fr; }\r
  .stat-box { padding: 24px 16px; }\r
  .hero-badge-list { flex-direction: column; align-items: center; }\r
  .about-info-cards { grid-template-columns: 1fr; }\r
  .footer-bottom { flex-direction: column; gap: 8px; text-align: center; }\r
\r
  .section-title { font-size: 1.3rem; }\r
  .section-label { font-size: 0.6rem; }\r
  .btn { font-size: 0.75rem; padding: 12px 22px; }\r
\r
  .contact-form { padding: 22px 16px; }\r
  .form-group input, .form-group select, .form-group textarea { padding: 10px 12px; font-size: 0.85rem; }\r
\r
  .nav-logo { font-size: 1.1rem; }\r
  .nav-logo-mark { width: 36px; height: 36px; }\r
  #navbar { height: 62px; padding: 0 4%; }\r
  .mobile-nav { inset: 62px 0 0; gap: 2rem; padding: 1.5rem; }\r
}
</style>\r
</head>\r
<body>\r
\r
<!-- Custom Cursor -->\r
<div id="cursor">\r
  <div id="cursor-dot"></div>\r
  <div id="cursor-ring"></div>\r
</div>\r
\r
<!-- Navbar -->\r
<nav id="navbar">\r
  <a class="nav-logo" href="#" onclick="navigateTo('home');return false;">\r
    <div class="nav-logo-mark"><img src="/logo.jpeg" alt="MP2 Animation Studio logo"></div>\r
    Animation <span class="red">Studio</span>\r
  </a>\r
  <ul class="nav-links">\r
    <li><a class="nav-link active" href="#" data-page="home" onclick="navigateTo('home');return false;">Home</a></li>\r
    <li><a class="nav-link" href="#" data-page="services" onclick="navigateTo('services');return false;">Services</a></li>\r
    <li><a class="nav-link" href="#" data-page="works" onclick="navigateTo('works');return false;">Our Works</a></li>\r
    <li><a class="nav-link" href="#" data-page="about" onclick="navigateTo('about');return false;">About</a></li>\r
    <li><a class="nav-link" href="#" data-page="contact" onclick="navigateTo('contact');return false;">Contact</a></li>\r
  </ul>\r
  <a class="nav-cta" href="#" onclick="navigateTo('contact');return false;">Get a Quote</a>\r
  <button class="nav-hamburger" onclick="toggleMobileNav()" aria-label="Menu">\r
    <span></span><span></span><span></span>\r
  </button>\r
</nav>\r
\r
<!-- Mobile Nav -->\r
<div class="mobile-nav" id="mobile-nav">\r
  <a class="nav-link" href="#" onclick="navigateTo('home');return false;">Home</a>\r
  <a class="nav-link" href="#" onclick="navigateTo('services');return false;">Services</a>\r
  <a class="nav-link" href="#" onclick="navigateTo('works');return false;">Our Works</a>\r
  <a class="nav-link" href="#" onclick="navigateTo('about');return false;">About</a>\r
  <a class="nav-link" href="#" onclick="navigateTo('contact');return false;">Contact</a>\r
  <a class="btn-primary" href="#" onclick="navigateTo('contact');return false;">Get a Quote</a>\r
</div>\r
\r
<!-- WhatsApp Float -->\r
<a class="wa-float" href="https://wa.me/918610759752" target="_blank" title="Chat on WhatsApp">\r
  <div class="wa-float-pulse"></div>\r
  💬\r
</a>\r
\r
<!-- ======================== -->\r
<!-- ===== HOME PAGE ===== -->\r
<!-- ======================== -->\r
<div id="page-home" class="page active">\r
\r
  <!-- HERO -->\r
  <section id="hero">\r
    <div class="hero-bg"></div>\r
    <div class="hero-grid"></div>\r
    <div class="hero-orb hero-orb-1"></div>\r
    <div class="hero-orb hero-orb-2"></div>\r
\r
    <div class="hero-content">\r
      <div class="hero-tag">✦ Award-Winning Animation Studio</div>\r
      <h1 class="hero-title">\r
        We Bring <span class="highlight">Stories</span><br>\r
        to Life Through<br>Animation\r
      </h1>\r
      <p class="hero-sub">\r
        MP2 Animation Studio crafts cinematic 2D animations, motion graphics,\r
        and brand identities that captivate audiences and elevate your vision\r
        into unforgettable visual experiences.\r
      </p>\r
      <div class="hero-actions">\r
        <a class="btn-primary" href="#" onclick="navigateTo('works');return false;">\r
          ▶ View Portfolio\r
        </a>\r
        <a class="btn-outline" href="#" onclick="navigateTo('contact');return false;">\r
          Contact Us →\r
        </a>\r
      </div>\r
    </div>\r
\r
    <div class="hero-stats">\r
      <div class="hero-stat">\r
        <div class="hero-stat-num">150+</div>\r
        <div class="hero-stat-label">Projects Done</div>\r
      </div>\r
      <div class="hero-stat">\r
        <div class="hero-stat-num">98%</div>\r
        <div class="hero-stat-label">Client Satisfaction</div>\r
      </div>\r
      <div class="hero-stat">\r
        <div class="hero-stat-num">2.5+</div>\r
        <div class="hero-stat-label">Years Experience</div>\r
      </div>\r
    </div>\r
\r
    <div class="hero-scroll">\r
      <div class="hero-scroll-line"></div>\r
      Scroll\r
    </div>\r
  </section>\r
\r
  <div class="divider"></div>\r
\r
  <!-- STUDIO INTRO -->\r
  <section id="studio-intro">\r
    <div class="intro-visual reveal">\r
      <div class="intro-visual-main">\r
        <img src="/homepage.jpeg" alt="MP2 Animation Studio workspace">\r
      </div>\r
      <div class="intro-badge">MP2<br>Since<br>2021</div>\r
    </div>\r
    <div class="intro-content reveal reveal-delay-1">\r
      <div class="section-label">About the Studio</div>\r
      <h2 class="section-title">Crafting <em>Visual Magic</em> Since 2021</h2>\r
      <p class="section-sub">\r
        MP2 Animation Studio is a premier creative agency specializing in motion\r
        storytelling. We blend artistic vision with cutting-edge technique to deliver\r
        animations that don't just move — they resonate, inspire, and convert.\r
      </p>\r
      <p style="font-size:0.85rem;color:var(--white-dim);line-height:1.8;margin-bottom:2rem;">\r
        From startups to global brands, we've partnered with clients across industries to\r
        transform their ideas into cinematic experiences. Our team of passionate animators,\r
        motion designers, and creative strategists work in perfect sync to deliver results\r
        that exceed expectations every time.\r
      </p>\r
      <div class="intro-features">\r
        <div class="intro-feature">\r
          <div class="intro-feature-icon">🎬</div>\r
          <div class="intro-feature-text">\r
            <h4>Cinematic Quality</h4>\r
            <p>Hollywood-grade production values</p>\r
          </div>\r
        </div>\r
        <div class="intro-feature">\r
          <div class="intro-feature-icon">⚡</div>\r
          <div class="intro-feature-text">\r
            <h4>Fast Delivery</h4>\r
            <p>On-time, every project, every time</p>\r
          </div>\r
        </div>\r
        <div class="intro-feature">\r
          <div class="intro-feature-icon">🎯</div>\r
          <div class="intro-feature-text">\r
            <h4>Brand Focused</h4>\r
            <p>Strategy-driven creative output</p>\r
          </div>\r
        </div>\r
        <div class="intro-feature">\r
          <div class="intro-feature-icon">🌟</div>\r
          <div class="intro-feature-text">\r
            <h4>Award Winning</h4>\r
            <p>Recognized for excellence</p>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </section>\r
\r
  <div class="divider"></div>\r
\r
  <!-- SERVICES PREVIEW -->\r
  <section id="services-preview">\r
    <div class="section-label reveal">What We Do</div>\r
    <h2 class="section-title reveal reveal-delay-1">Our <em>Creative</em> Services</h2>\r
    <p class="section-sub reveal reveal-delay-2">From concept to delivery, we offer a full spectrum of animation and design services tailored to elevate your brand.</p>\r
    <div class="services-grid">\r
      <div class="service-card reveal">\r
        <div class="service-card-num">01</div>\r
        <div class="service-card-thumb"><img src="/services/1.png" alt="2D Animation service"></div>\r
        <div class="service-card-icon">🎞️</div>\r
        <h3>2D Animation</h3>\r
        <p>Frame-by-frame and rig-based animation with fluid motion and expressive character storytelling.</p>\r
        <a class="service-card-link" href="#" onclick="navigateTo('services');return false;">Explore Service →</a>\r
      </div>\r
      <div class="service-card reveal reveal-delay-1">\r
        <div class="service-card-num">02</div>\r
        <div class="service-card-thumb"><img src="/services/2.png" alt="Motion Graphics service"></div>\r
        <div class="service-card-icon">✨</div>\r
        <h3>Motion Graphics</h3>\r
        <p>Dynamic motion design for explainer videos, social media, and brand content that engages viewers.</p>\r
        <a class="service-card-link" href="#" onclick="navigateTo('services');return false;">Explore Service →</a>\r
      </div>\r
      <div class="service-card reveal reveal-delay-2">\r
        <div class="service-card-num">03</div>\r
        <div class="service-card-thumb"><img src="/services/3.png" alt="Logo Designing service"></div>\r
        <div class="service-card-icon">💎</div>\r
        <h3>Logo Designing</h3>\r
        <p>Iconic brand marks crafted with intentional symbolism, unique aesthetics, and timeless appeal.</p>\r
        <a class="service-card-link" href="#" onclick="navigateTo('services');return false;">Explore Service →</a>\r
      </div>\r
      <div class="service-card reveal reveal-delay-1">\r
        <div class="service-card-num">04</div>\r
        <div class="service-card-thumb"><img src="/services/4.png" alt="Logo Animation service"></div>\r
        <div class="service-card-icon">🌀</div>\r
        <h3>Logo Animation</h3>\r
        <p>Bring your brand to life with cinematic logo reveals and animated idents for any platform.</p>\r
        <a class="service-card-link" href="#" onclick="navigateTo('services');return false;">Explore Service →</a>\r
      </div>\r
      <div class="service-card reveal reveal-delay-2">\r
        <div class="service-card-num">05</div>\r
        <div class="service-card-thumb"><img src="/services/5.png" alt="Digital Marketing service"></div>\r
        <div class="service-card-icon">📣</div>\r
        <h3>Digital Marketing</h3>\r
        <p>Creative-led campaigns with animated content that drives engagement, reach, and conversions.</p>\r
        <a class="service-card-link" href="#" onclick="navigateTo('services');return false;">Explore Service →</a>\r
      </div>\r
      <div class="service-card reveal reveal-delay-3">\r
        <div class="service-card-num">06</div>\r
        <div class="service-card-thumb"><img src="/services/6.png" alt="Graphic Designing service"></div>\r
        <div class="service-card-icon">🖼️</div>\r
        <h3>Graphic Designing</h3>\r
        <p>Premium visual communication through posters, banners, social assets, and brand collateral.</p>\r
        <a class="service-card-link" href="#" onclick="navigateTo('services');return false;">Explore Service →</a>\r
      </div>\r
    </div>\r
    <div style="text-align:center;margin-top:3rem;">\r
      <a class="btn-outline" href="#" onclick="navigateTo('services');return false;">View All Services →</a>\r
    </div>\r
  </section>\r
\r
  <div class="divider"></div>\r
\r
  <!-- WHY CHOOSE US -->\r
  <section id="why-us">\r
    <div class="why-grid">\r
      <div class="why-card glass reveal">\r
        <div class="why-card-icon">🎨</div>\r
        <h4>Creative Team</h4>\r
        <p>A passionate collective of animators, designers, and storytellers with diverse global experience.</p>\r
      </div>\r
      <div class="why-card glass reveal reveal-delay-1">\r
        <div class="why-card-icon">⚙️</div>\r
        <h4>Professional Workflow</h4>\r
        <p>Structured processes with clear milestones, transparent communication, and revision cycles.</p>\r
      </div>\r
      <div class="why-card glass reveal reveal-delay-2">\r
        <div class="why-card-icon">🚀</div>\r
        <h4>Fast Delivery</h4>\r
        <p>We respect timelines. Our agile workflow ensures your project ships on schedule without compromise.</p>\r
      </div>\r
      <div class="why-card glass reveal reveal-delay-3">\r
        <div class="why-card-icon">🏆</div>\r
        <h4>Premium Quality</h4>\r
        <p>Every frame crafted with cinematic precision — we never settle for anything less than exceptional.</p>\r
      </div>\r
    </div>\r
    <div class="why-content reveal reveal-delay-1">\r
      <div class="section-label">Why MP2</div>\r
      <h2 class="section-title">The Studio That<br><em>Delivers</em> Excellence</h2>\r
      <p class="section-sub">\r
        We're not just an animation studio — we're your creative partner. From the first brief to the final render,\r
        our team is committed to producing work that sets you apart in an increasingly visual world.\r
      </p>\r
      <a class="btn-primary" href="#" onclick="navigateTo('about');return false;">Discover Our Story →</a>\r
    </div>\r
  </section>\r
\r
  <div class="divider"></div>\r
\r
  <!-- WORKS PREVIEW -->\r
  <section id="works-preview">\r
    <div class="section-label reveal">Portfolio</div>\r
    <h2 class="section-title reveal reveal-delay-1">Featured <em>Works</em></h2>\r
    <p class="section-sub reveal reveal-delay-2">A curated selection of our finest animation and branding projects.</p>\r
\r
    <div class="works-grid">\r
      <div class="work-card reveal card-hover">\r
        <div class="work-card-bg work-card-bg-1">\r
          <video src="/works/adventure-preview.mp4" autoplay muted loop playsinline></video>\r
        </div>\r
        <div class="work-play">▶</div>\r
        <div class="work-card-overlay">\r
          <div class="work-tag">2D Animation</div>\r
          <h3>Adventure Sequence Preview</h3>\r
        </div>\r
      </div>\r
      <div class="work-card reveal reveal-delay-1">\r
        <div class="work-card-bg work-card-bg-2">\r
          <img src="/works/motion-ui-play.png" alt="Motion graphics showcase">\r
        </div>\r
        <div class="work-play">▶</div>\r
        <div class="work-card-overlay">\r
          <div class="work-tag">Motion Graphics</div>\r
          <h3>Interface Motion System</h3>\r
        </div>\r
      </div>\r
      <div class="work-card reveal reveal-delay-2">\r
        <div class="work-card-bg work-card-bg-3">\r
          <img src="/works/new-thevars-logo.png" alt="New Thevars logo design">\r
        </div>\r
        <div class="work-play">▶</div>\r
        <div class="work-card-overlay">\r
          <div class="work-tag">Logo Design</div>\r
          <h3>New Thevars Identity</h3>\r
        </div>\r
      </div>\r
      <div class="work-card reveal card-hover">\r
        <div class="work-card-bg work-card-bg-4">\r
          <video src="/works/mp2-logo-animation.mp4" autoplay muted loop playsinline></video>\r
        </div>\r
        <div class="work-play">▶</div>\r
        <div class="work-card-overlay">\r
          <div class="work-tag">Logo Animation</div>\r
          <h3>MP2 Logo Reveal</h3>\r
        </div>\r
      </div>\r
      <div class="work-card reveal reveal-delay-1">\r
        <div class="work-card-bg work-card-bg-5">\r
          <img src="/works/marketing-dashboard.png" alt="Digital marketing dashboard">\r
        </div>\r
        <div class="work-play">▶</div>\r
        <div class="work-card-overlay">\r
          <div class="work-tag">Digital Marketing</div>\r
          <h3>Performance Campaign Visuals</h3>\r
        </div>\r
      </div>\r
      <div class="work-card reveal reveal-delay-2">\r
        <div class="work-card-bg work-card-bg-6">\r
          <img src="/works/works-collage.png" alt="Creative works collage">\r
        </div>\r
        <div class="work-play">▶</div>\r
        <div class="work-card-overlay">\r
          <div class="work-tag">Graphic Design</div>\r
          <h3>Creative Showcase Grid</h3>\r
        </div>\r
      </div>\r
    </div>\r
    <div class="works-cta reveal">\r
      <a class="btn-red" href="#" onclick="navigateTo('works');return false;">View All Works →</a>\r
    </div>\r
  </section>\r
\r
  <div class="divider"></div>\r
\r
  <!-- TESTIMONIALS -->\r
  <section id="testimonials">\r
    <div class="testimonials-header">\r
      <div class="section-label">Testimonials</div>\r
      <h2 class="section-title reveal">What Clients <em>Say</em></h2>\r
      <p class="section-sub reveal">Don't take our word for it — hear from the brands we've helped grow.</p>\r
    </div>\r
    <div class="testimonials-track">\r
      <div class="testi-card reveal">\r
        <div class="testi-quote">"</div>\r
        <p class="testi-text">MP2 transformed our brand story into a visual masterpiece. The animation quality exceeded every expectation, and the team's creative input made the project truly extraordinary.</p>\r
        <div class="testi-stars">★★★★★</div>\r
        <div class="testi-author">\r
          <div class="testi-avatar">A</div>\r
          <div>\r
            <div class="testi-author-name">Ahmed Al-Rashid</div>\r
            <div class="testi-author-role">CEO, Nexara Group</div>\r
          </div>\r
        </div>\r
      </div>\r
      <div class="testi-card reveal reveal-delay-1">\r
        <div class="testi-quote">"</div>\r
        <p class="testi-text">Working with MP2 was seamless from brief to delivery. Their motion graphics for our product launch drove a 3x increase in engagement. Absolutely world-class studio.</p>\r
        <div class="testi-stars">★★★★★</div>\r
        <div class="testi-author">\r
          <div class="testi-avatar">S</div>\r
          <div>\r
            <div class="testi-author-name">Sarah Mitchell</div>\r
            <div class="testi-author-role">Marketing Director, TechFlow</div>\r
          </div>\r
        </div>\r
      </div>\r
      <div class="testi-card reveal reveal-delay-2">\r
        <div class="testi-quote">"</div>\r
        <p class="testi-text">Our logo animation from MP2 is used on every video we produce. It's cinematic, it's us — it commands attention immediately. The investment paid for itself within a week.</p>\r
        <div class="testi-stars">★★★★★</div>\r
        <div class="testi-author">\r
          <div class="testi-avatar">R</div>\r
          <div>\r
            <div class="testi-author-name">Rohan Verma</div>\r
            <div class="testi-author-role">Founder, Velix Creative</div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </section>\r
\r
  <div class="divider"></div>\r
\r
  <!-- FAQ -->\r
  <section id="faq">\r
    <div class="faq-container">\r
      <div class="faq-header">\r
        <div class="section-label">FAQ</div>\r
        <h2 class="section-title reveal">Frequently Asked <em>Questions</em></h2>\r
      </div>\r
      <div class="faq-item reveal">\r
        <div class="faq-question" onclick="toggleFaq(this)">\r
          How long does animation production take?\r
          <span class="faq-icon">+</span>\r
        </div>\r
        <div class="faq-answer">\r
          <div class="faq-answer-inner">\r
            Project timelines vary based on complexity. A typical 60-second 2D animation takes 2–3 weeks, while logo animations can be completed in 5–7 business days. Motion graphics for social media typically take 3–5 days. We always provide a clear timeline during the briefing phase.\r
          </div>\r
        </div>\r
      </div>\r
      <div class="faq-item reveal reveal-delay-1">\r
        <div class="faq-question" onclick="toggleFaq(this)">\r
          Do you provide logo animation services?\r
          <span class="faq-icon">+</span>\r
        </div>\r
        <div class="faq-answer">\r
          <div class="faq-answer-inner">\r
            Absolutely! Logo animation is one of our signature services. We create cinematic reveals, kinetic typography idents, and looping animations for YouTube, broadcast, and social platforms. We can animate an existing logo or design one from scratch.\r
          </div>\r
        </div>\r
      </div>\r
      <div class="faq-item reveal reveal-delay-2">\r
        <div class="faq-question" onclick="toggleFaq(this)">\r
          Can you handle complete branding projects?\r
          <span class="faq-icon">+</span>\r
        </div>\r
        <div class="faq-answer">\r
          <div class="faq-answer-inner">\r
            Yes! MP2 offers complete brand identity packages including logo design, color systems, typography guides, brand guidelines, and animated brand assets. We've helped dozens of companies build cohesive, memorable brands from the ground up.\r
          </div>\r
        </div>\r
      </div>\r
      <div class="faq-item reveal reveal-delay-3">\r
        <div class="faq-question" onclick="toggleFaq(this)">\r
          Do you offer digital marketing services?\r
          <span class="faq-icon">+</span>\r
        </div>\r
        <div class="faq-answer">\r
          <div class="faq-answer-inner">\r
            We provide creative digital marketing content including animated social media posts, ad creatives, campaign videos, and promotional reels optimized for different platforms. Our content is designed to stop the scroll and drive action.\r
          </div>\r
        </div>\r
      </div>\r
      <div class="faq-item reveal">\r
        <div class="faq-question" onclick="toggleFaq(this)">\r
          How can we contact and start a project?\r
          <span class="faq-icon">+</span>\r
        </div>\r
        <div class="faq-answer">\r
          <div class="faq-answer-inner">\r
            Getting started is easy! Fill out our contact form, drop us an email, or reach us directly on WhatsApp for a quick response. We begin with a free discovery call to understand your vision, then send a detailed proposal within 24–48 hours.\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </section>\r
\r
  <!-- FOOTER -->\r
  <footer>\r
    <div class="footer-top">\r
      <div class="footer-brand">\r
        <div class="footer-logo">\r
          <div class="footer-logo-mark"><img src="/logo.jpeg" alt="MP2 Animation Studio logo"></div>\r
          MP2 Animation Studio\r
        </div>\r
        <p class="footer-tagline">We craft cinematic animations and brand identities that bring your stories to life with precision and passion.</p>\r
        <div class="footer-socials">\r
          <a class="social-icon" href="https://www.instagram.com/mp2animationstudios?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" title="Instagram">&#128247;</a>\r
          <a class="social-icon" href="https://www.linkedin.com/company/119464012/admin/notifications/all/" target="_blank" title="LinkedIn">&#128188;</a>\r
          <a class="social-icon" href="https://www.facebook.com/search/top/?q=MP2%20Animation%20Studio" target="_blank" title="Facebook">&#128101;</a>\r
          <a class="social-icon" href="https://wa.me/918610759752" target="_blank" title="WhatsApp">&#128172;</a>\r
        </div>\r
      </div>\r
      <div class="footer-col">\r
        <h4>Pages</h4>\r
        <div class="footer-links">\r
          <a class="footer-link" href="#" onclick="navigateTo('home');return false;">Home</a>\r
          <a class="footer-link" href="#" onclick="navigateTo('services');return false;">Services</a>\r
          <a class="footer-link" href="#" onclick="navigateTo('works');return false;">Our Works</a>\r
          <a class="footer-link" href="#" onclick="navigateTo('about');return false;">About Us</a>\r
          <a class="footer-link" href="#" onclick="navigateTo('contact');return false;">Contact</a>\r
        </div>\r
      </div>\r
      <div class="footer-col">\r
        <h4>Services</h4>\r
        <div class="footer-links">\r
          <a class="footer-link" href="#" onclick="navigateTo('services');return false;">2D Animation</a>\r
          <a class="footer-link" href="#" onclick="navigateTo('services');return false;">Motion Graphics</a>\r
          <a class="footer-link" href="#" onclick="navigateTo('services');return false;">Logo Design</a>\r
          <a class="footer-link" href="#" onclick="navigateTo('services');return false;">Logo Animation</a>\r
          <a class="footer-link" href="#" onclick="navigateTo('services');return false;">Digital Marketing</a>\r
          <a class="footer-link" href="#" onclick="navigateTo('services');return false;">Graphic Design</a>\r
        </div>\r
      </div>\r
      <div class="footer-col">\r
        <h4>Contact</h4>\r
        <div class="footer-contact-item">\r
          <span class="footer-contact-icon">📧</span>\r
          <a href="mailto:mp2animationstudio@gmail.com">mp2animationstudio@gmail.com</a>\r
        </div>\r
        <div class="footer-contact-item">\r
          <span class="footer-contact-icon">📞</span>\r
          <a href="tel:+918610759752">+91 8610759752</a>\r
        </div>\r
        <div class="footer-contact-item">\r
          <span class="footer-contact-icon">📍</span>\r
          <span>244, Manapparai,<br>Trichy Dist. 621-312</span>\r
        </div>\r
        <div class="footer-contact-item">\r
          <span class="footer-contact-icon">🕐</span>\r
          <span>Mon–Sat, 9AM–7PM IST</span>\r
        </div>\r
      </div>\r
    </div>\r
    <div class="footer-bottom">\r
      <span>© 2025 <span class="footer-bottom-red">MP2 Animation Studio</span>. All rights reserved.</span>\r
      <span>Crafted with ❤️ & <span class="footer-bottom-red">passion</span></span>\r
    </div>\r
  </footer>\r
</div><!-- end page-home -->\r
\r
\r
<!-- ========================== -->\r
<!-- ===== SERVICES PAGE ===== -->\r
<!-- ========================== -->\r
<div id="page-services" class="page">\r
  <div class="page-hero">\r
    <div class="page-hero-content">\r
      <div class="section-label">What We Offer</div>\r
      <h1 class="section-title" style="font-size:clamp(2rem,4.5vw,3.2rem);">Our <em>Creative</em> Services</h1>\r
      <p class="section-sub" style="margin-bottom:0;">Premium animation, design, and digital services tailored for ambitious brands.</p>\r
    </div>\r
  </div>\r
\r
  <section class="section">\r
    <div class="services-full-grid">\r
      <!-- 2D Animation -->\r
      <div class="service-full-card reveal card-hover">\r
        <div class="service-full-icon">🎞️</div>\r
        <h3>2D Animation</h3>\r
        <p>Professional frame-by-frame and rigged 2D animation for explainer videos, brand films, educational content, social media, and more. We bring characters and stories to life with fluid, expressive motion.</p>\r
        <div class="service-benefits">\r
          <div class="service-benefit">Character design & rigging for any style</div>\r
          <div class="service-benefit">Frame-by-frame or digital puppet animation</div>\r
          <div class="service-benefit">Storyboarding & animatics included</div>\r
          <div class="service-benefit">Custom music & voiceover integration</div>\r
          <div class="service-benefit">Multi-format delivery (MP4, MOV, GIF)</div>\r
        </div>\r
        <div class="service-preview-area"><img src="/services/1.png" alt="2D Animation preview"></div>\r
      </div>\r
\r
      <!-- Motion Graphics -->\r
      <div class="service-full-card reveal reveal-delay-1">\r
        <div class="service-full-icon">✨</div>\r
        <h3>Motion Graphics</h3>\r
        <p>Dynamic visual communication through typography, icons, and abstract motion. Perfect for product launches, data visualization, YouTube intros, broadcast packages, and brand campaigns.</p>\r
        <div class="service-benefits">\r
          <div class="service-benefit">Kinetic typography & icon animation</div>\r
          <div class="service-benefit">UI/UX demo animations</div>\r
          <div class="service-benefit">Broadcast-ready quality (1080p / 4K)</div>\r
          <div class="service-benefit">Social media format optimization</div>\r
          <div class="service-benefit">After Effects source files available</div>\r
        </div>\r
        <div class="service-preview-area"><img src="/services/2.png" alt="Motion Graphics preview"></div>\r
      </div>\r
\r
      <!-- Logo Designing -->\r
      <div class="service-full-card reveal card-hover">\r
        <div class="service-full-icon">💎</div>\r
        <h3>Logo Designing</h3>\r
        <p>Iconic, timeless brand marks crafted with intentional symbolism and aesthetic precision. We deliver logos that communicate your brand's essence at a glance and stand the test of time.</p>\r
        <div class="service-benefits">\r
          <div class="service-benefit">3 initial concepts with unlimited revisions</div>\r
          <div class="service-benefit">Vector files (AI, EPS, SVG, PDF)</div>\r
          <div class="service-benefit">Full color, black, and reversed variants</div>\r
          <div class="service-benefit">Brand usage guidelines included</div>\r
          <div class="service-benefit">Favicon & social media sizes</div>\r
        </div>\r
        <div class="service-preview-area"><img src="/services/3.png" alt="Logo Designing preview"></div>\r
      </div>\r
\r
      <!-- Logo Animation -->\r
      <div class="service-full-card reveal reveal-delay-1">\r
        <div class="service-full-icon">🌀</div>\r
        <h3>Logo Animation</h3>\r
        <p>Cinematic logo reveals and animated idents that make an unforgettable first impression. From subtle elegance to dramatic reveals — we animate your brand with purpose and precision.</p>\r
        <div class="service-benefits">\r
          <div class="service-benefit">Custom reveal animation (5–10 sec)</div>\r
          <div class="service-benefit">Loop & static versions included</div>\r
          <div class="service-benefit">Transparent background (MOV/WebM)</div>\r
          <div class="service-benefit">Sound design & audio sting option</div>\r
          <div class="service-benefit">YouTube, broadcast & social versions</div>\r
        </div>\r
        <div class="service-preview-area"><img src="/services/4.png" alt="Logo Animation preview"></div>\r
      </div>\r
\r
      <!-- Digital Marketing -->\r
      <div class="service-full-card reveal card-hover">\r
        <div class="service-full-icon">📣</div>\r
        <h3>Digital Marketing</h3>\r
        <p>Creative-first digital marketing powered by animation. We produce scroll-stopping animated ad creatives, social content, and campaign videos that drive real engagement and measurable results.</p>\r
        <div class="service-benefits">\r
          <div class="service-benefit">Animated social media content packs</div>\r
          <div class="service-benefit">Video ad creatives (Meta, YouTube, TikTok)</div>\r
          <div class="service-benefit">Promotional reels & stories</div>\r
          <div class="service-benefit">Campaign strategy & content calendar</div>\r
          <div class="service-benefit">A/B test variant production</div>\r
        </div>\r
        <div class="service-preview-area"><img src="/services/5.png" alt="Digital Marketing preview"></div>\r
      </div>\r
\r
      <!-- Graphic Designing -->\r
      <div class="service-full-card reveal reveal-delay-1">\r
        <div class="service-full-icon">🖼️</div>\r
        <h3>Graphic Designing</h3>\r
        <p>Premium visual communication through strategic graphic design. From brand collateral to campaign assets, we create visuals that communicate clearly and leave a lasting impression.</p>\r
        <div class="service-benefits">\r
          <div class="service-benefit">Brand identity systems & style guides</div>\r
          <div class="service-benefit">Marketing materials & print design</div>\r
          <div class="service-benefit">Social media templates & banners</div>\r
          <div class="service-benefit">Presentation design (pitch decks)</div>\r
          <div class="service-benefit">Packaging & merchandise design</div>\r
        </div>\r
        <div class="service-preview-area"><img src="/services/6.png" alt="Graphic Designing preview"></div>\r
      </div>\r
    </div>\r
  </section>\r
\r
  <!-- CTA Section -->\r
  <div class="services-cta-section">\r
    <h2>Ready to Start Your Project?</h2>\r
    <p>Let's discuss your vision and craft something extraordinary together. Get a free consultation today.</p>\r
    <div style="display:flex;gap:16px;justify-content:center;flex-wrap:wrap;position:relative;">\r
      <a class="btn-primary" href="#" onclick="navigateTo('contact');return false;">Get a Free Quote →</a>\r
      <a class="wa-btn" href="https://wa.me/918610759752" target="_blank">\r
        💬 WhatsApp Us Now\r
      </a>\r
    </div>\r
  </div>\r
\r
  <!-- Reuse footer from home (rendered via JS) -->\r
  <div id="services-footer"></div>\r
</div><!-- end page-services -->\r
\r
\r
<!-- ========================= -->\r
<!-- ===== WORKS PAGE ===== -->\r
<!-- ========================= -->\r
<div id="page-works" class="page">\r
  <div class="page-hero">\r
    <div class="page-hero-content">\r
      <div class="section-label">Portfolio</div>\r
      <h1 class="section-title" style="font-size:clamp(2rem,4.5vw,3.2rem);">Our <em>Creative</em> Works</h1>\r
      <p class="section-sub" style="margin-bottom:0;">Explore a curated showcase of animation, branding, and digital design projects.</p>\r
    </div>\r
  </div>\r
\r
  <section class="section">\r
    <div class="works-filters">\r
      <button class="filter-btn active" onclick="filterWorks(this,'all')">All Projects</button>\r
      <button class="filter-btn" onclick="filterWorks(this,'animation')">2D Animation</button>\r
      <button class="filter-btn" onclick="filterWorks(this,'motion')">Motion Graphics</button>\r
      <button class="filter-btn" onclick="filterWorks(this,'logo')">Logo Animation</button>\r
      <button class="filter-btn" onclick="filterWorks(this,'branding')">Branding</button>\r
      <button class="filter-btn" onclick="filterWorks(this,'marketing')">Digital Marketing</button>\r
    </div>\r
\r
    <div class="portfolio-grid" id="portfolio-grid">\r
      <div class="portfolio-card reveal card-hover" data-cat="animation">\r
        <div class="portfolio-thumb">\r
          <div class="portfolio-thumb-bg"><video src="/works/adventure-preview.mp4" autoplay muted loop playsinline></video></div>\r
          <div class="portfolio-thumb-btn">▶ Watch Project</div>\r
        </div>\r
        <div class="portfolio-info">\r
          <div class="portfolio-cat">2D Animation</div>\r
          <h3>Adventure Sequence Preview</h3>\r
          <p>Character-driven animated scene focused on energy, motion, and cinematic environment design.</p>\r
        </div>\r
      </div>\r
      <div class="portfolio-card reveal reveal-delay-1" data-cat="motion">\r
        <div class="portfolio-thumb">\r
          <div class="portfolio-thumb-bg"><img src="/works/motion-ui-play.png" alt="Motion graphics interface"></div>\r
          <div class="portfolio-thumb-btn">▶ Watch Project</div>\r
        </div>\r
        <div class="portfolio-info">\r
          <div class="portfolio-cat">Motion Graphics</div>\r
          <h3>Motion UI Control Frame</h3>\r
          <p>Broadcast-style motion graphics composition built around play-state UI and red neon system visuals.</p>\r
        </div>\r
      </div>\r
      <div class="portfolio-card reveal reveal-delay-2" data-cat="logo">\r
        <div class="portfolio-thumb">\r
          <div class="portfolio-thumb-bg"><video src="/works/mp2-logo-animation.mp4" autoplay muted loop playsinline></video></div>\r
          <div class="portfolio-thumb-btn">▶ Watch Project</div>\r
        </div>\r
        <div class="portfolio-info">\r
          <div class="portfolio-cat">Logo Animation</div>\r
          <h3>MP2 Logo Animation</h3>\r
          <p>Looping animated reveal for the MP2 identity with high-contrast motion and glowing red accents.</p>\r
        </div>\r
      </div>\r
      <div class="portfolio-card reveal card-hover" data-cat="branding">\r
        <div class="portfolio-thumb">\r
          <div class="portfolio-thumb-bg"><img src="/works/new-thevars-logo.png" alt="New Thevars logo"></div>\r
          <div class="portfolio-thumb-btn">▶ Watch Project</div>\r
        </div>\r
        <div class="portfolio-info">\r
          <div class="portfolio-cat">Branding</div>\r
          <h3>New Thevars Brand Crest</h3>\r
          <p>Luxury hospitality-style identity design with a crest mark, heritage cues, and premium gold finish.</p>\r
        </div>\r
      </div>\r
      <div class="portfolio-card reveal reveal-delay-1" data-cat="marketing">\r
        <div class="portfolio-thumb">\r
          <div class="portfolio-thumb-bg"><img src="/works/marketing-dashboard.png" alt="Marketing dashboard and social media visuals"></div>\r
          <div class="portfolio-thumb-btn">▶ Watch Project</div>\r
        </div>\r
        <div class="portfolio-info">\r
          <div class="portfolio-cat">Digital Marketing</div>\r
          <h3>Social Campaign Dashboard</h3>\r
          <p>Performance-focused creative concept blending analytics, platform branding, and social content visuals.</p>\r
        </div>\r
      </div>\r
      <div class="portfolio-card reveal reveal-delay-2" data-cat="animation">\r
        <div class="portfolio-thumb">\r
          <div class="portfolio-thumb-bg"><img src="/works/works-collage.png" alt="Creative project collage"></div>\r
          <div class="portfolio-thumb-btn">▶ Watch Project</div>\r
        </div>\r
        <div class="portfolio-info">\r
          <div class="portfolio-cat">2D Animation</div>\r
          <h3>Multi-Scene Animation Board</h3>\r
          <p>Composite artwork showing multiple animation directions, visual themes, and motion-design frames.</p>\r
        </div>\r
      </div>\r
      <div class="portfolio-card reveal card-hover" data-cat="motion">\r
        <div class="portfolio-thumb">\r
          <div class="portfolio-thumb-bg"><img src="/works/brand-logo-fire.png" alt="Glowing red brand emblem"></div>\r
          <div class="portfolio-thumb-btn">▶ Watch Project</div>\r
        </div>\r
        <div class="portfolio-info">\r
          <div class="portfolio-cat">Motion Graphics</div>\r
          <h3>Energy Pulse Brand Frame</h3>\r
          <p>High-intensity motion keyframe concept built around emissive logo energy and particle impact.</p>\r
        </div>\r
      </div>\r
      <div class="portfolio-card reveal reveal-delay-1" data-cat="logo">\r
        <div class="portfolio-thumb">\r
          <div class="portfolio-thumb-bg"><video src="/works/new-thevars-animation.mp4" autoplay muted loop playsinline></video></div>\r
          <div class="portfolio-thumb-btn">▶ Watch Project</div>\r
        </div>\r
        <div class="portfolio-info">\r
          <div class="portfolio-cat">Logo Animation</div>\r
          <h3>New Thevars Logo Animation</h3>\r
          <p>Animated logo reveal sequence for the New Thevars identity, tailored for premium hospitality branding.</p>\r
        </div>\r
      </div>\r
    </div>\r
  </section>\r
\r
  <div id="works-footer"></div>\r
</div><!-- end page-works -->\r
\r
\r
<!-- ========================= -->\r
<!-- ===== ABOUT PAGE ===== -->\r
<!-- ========================= -->\r
<div id="page-about" class="page">\r
  <div class="page-hero">\r
    <div class="page-hero-content">\r
      <div class="section-label">Our Story</div>\r
      <h1 class="section-title" style="font-size:clamp(2rem,4.5vw,3.2rem);">About <em>MP2</em> Studio</h1>\r
      <p class="section-sub" style="margin-bottom:0;">A passionate team of animators and designers committed to visual excellence since 2021.</p>\r
    </div>\r
  </div>\r
\r
  <!-- INTRO GRID -->\r
  <div class="about-intro-grid">
    <div class="about-visual reveal">
      <div class="about-visual-main">
        <img class="about-logo-big" src="/works/poun.png" alt="MP2 team portrait">
      </div>
      <div class="about-accent-card">
        <div class="about-accent-num" data-count="2.5" data-suffix="+">2.5+</div>\r
        <div class="about-accent-label">Years of Excellence</div>
      </div>
    </div>
    <div class="about-copy reveal reveal-delay-1">
      <div class="section-label">Who We Are</div>\r
      <h2 class="section-title">More Than a Studio —<br><em>Your Creative Partner</em></h2>\r
      <p>
        Founded in 2021, MP2 Animation Studio was born from a shared belief: that powerful visuals\r
        have the ability to change how people feel about a brand. What started as a two-person motion\r
        graphics team has grown into a full-service creative studio trusted by brands across India and beyond.\r
      </p>\r
      <p>
        Today, our team of animators, designers, directors, and strategists collaborate under one roof\r
        to deliver end-to-end creative solutions — from brand identity and logo design to cinematic\r
        animations and digital marketing campaigns.\r
      </p>\r
      <p style="margin-bottom:1.6rem;">
        We don't just execute briefs — we ask the right questions, push creative boundaries, and deliver\r
        work that makes our clients proud. Every project is an opportunity to create something that\r
        matters, and we treat it that way.\r
      </p>\r
      <a class="btn-primary" href="#" onclick="navigateTo('contact');return false;">Work With Us →</a>\r
    </div>\r
  </div>\r
\r
  <!-- STATS -->\r
  <div class="stats-row">\r
    <div class="stat-box reveal card-hover">\r
      <div class="stat-box-num" data-count="150" data-suffix="+">150+</div>\r
      <div class="stat-box-label">Projects Completed</div>\r
    </div>\r
    <div class="stat-box reveal reveal-delay-1 card-hover">\r
      <div class="stat-box-num" data-count="80" data-suffix="+">80+</div>\r
      <div class="stat-box-label">Happy Clients</div>\r
    </div>\r
    <div class="stat-box reveal reveal-delay-2 card-hover">\r
      <div class="stat-box-num" data-count="12" data-suffix="+">12+</div>\r
      <div class="stat-box-label">Team Members</div>\r
    </div>\r
    <div class="stat-box reveal reveal-delay-3 card-hover">\r
      <div class="stat-box-num" data-count="98" data-suffix="%">98%</div>\r
      <div class="stat-box-label">Client Satisfaction</div>\r
    </div>
  </div>\r
\r
  <!-- MISSION & VISION -->\r
  <div class="mission-vision" style="padding:0 5% 60px;">\r
    <div class="mv-card mv-card-mission reveal card-hover">\r
      <div class="mv-card-icon">🎯</div>\r
      <h3>Our Mission</h3>\r
      <p>To empower brands through exceptional visual storytelling — delivering animations and designs that forge genuine connections between businesses and their audiences. We exist to make great creative accessible, impactful, and transformative.</p>\r
    </div>\r
    <div class="mv-card mv-card-vision reveal reveal-delay-1 card-hover">\r
      <div class="mv-card-icon">🔭</div>\r
      <h3>Our Vision</h3>\r
      <p>To become the most trusted animation and creative studio in South Asia — known not just for the quality of our work, but for the strength of our partnerships. We envision a world where every brand has access to cinematic-quality creative content.</p>\r
    </div>\r
  </div>\r
\r
  <!-- WORKFLOW -->\r
  <div class="workflow-section">\r
    <div class="section-label reveal">Our Process</div>\r
    <h2 class="section-title reveal reveal-delay-1">How We <em>Work</em></h2>\r
    <div class="workflow-steps">\r
      <div class="workflow-step reveal">\r
        <div class="workflow-step-circle">01</div>\r
        <h4>Discovery</h4>\r
        <p>We deep-dive into your brand, goals, and audience to define the creative direction.</p>\r
      </div>\r
      <div class="workflow-step reveal reveal-delay-1">\r
        <div class="workflow-step-circle">02</div>\r
        <h4>Strategy</h4>\r
        <p>Script, storyboard, and concept development aligned with your objectives.</p>\r
      </div>\r
      <div class="workflow-step reveal reveal-delay-2">\r
        <div class="workflow-step-circle">03</div>\r
        <h4>Design</h4>\r
        <p>Visual style frames, character designs, and motion tests for your approval.</p>\r
      </div>\r
      <div class="workflow-step reveal reveal-delay-3">\r
        <div class="workflow-step-circle">04</div>\r
        <h4>Production</h4>\r
        <p>Full animation and design production with progress updates at every stage.</p>\r
      </div>\r
      <div class="workflow-step reveal reveal-delay-4">\r
        <div class="workflow-step-circle">05</div>\r
        <h4>Delivery</h4>\r
        <p>Final files exported and delivered across all required formats and platforms.</p>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- TEAM -->\r
  <section class="section" style="padding-top:0;">\r
    <div class="section-label reveal">The People</div>\r
    <h2 class="section-title reveal reveal-delay-1">Meet Our <em>Creative Team</em></h2>\r
    <div class="team-grid" style="margin-top:2rem;">\r
      <div class="team-card reveal card-hover">\r
        <div class="team-avatar">V</div>\r
        <div class="team-name">Vijai D</div>\r
        <div class="team-role">Content Creator</div>\r
      </div>\r
      <div class="team-card reveal reveal-delay-1 card-hover">\r
        <div class="team-avatar">K</div>\r
        <div class="team-name">Kamalesh B</div>\r
        <div class="team-role">Graphics Designer</div>\r
      </div>\r
      <div class="team-card reveal reveal-delay-2 card-hover">\r
        <div class="team-avatar">A</div>\r
        <div class="team-name">Abisheck Pandiyan R</div>\r
        <div class="team-role">Video Editor</div>\r
      </div>\r
    </div>\r
  </section>\r
\r
  <!-- Why Trust Us -->\r
  <section style="padding:0 5% 80px;">\r
    <div class="section-label reveal">Why Trust Us</div>\r
    <h2 class="section-title reveal reveal-delay-1">Why Clients <em>Choose</em> MP2</h2>\r
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-top:2rem;" class="trust-grid">\r
      <div class="glass" style="padding:30px 24px;" class="reveal">\r
        <div style="font-size:1.8rem;margin-bottom:14px;">🤝</div>\r
        <h4 style="font-family:var(--font-ui);font-weight:700;margin-bottom:8px;">True Partnership</h4>\r
        <p style="font-size:0.8rem;color:var(--white-dim);line-height:1.7;">We embed ourselves in your brand's world, not just your brief. Our clients aren't just projects — they're long-term creative relationships.</p>\r
      </div>\r
      <div class="glass" style="padding:30px 24px;">\r
        <div style="font-size:1.8rem;margin-bottom:14px;">🔒</div>\r
        <h4 style="font-family:var(--font-ui);font-weight:700;margin-bottom:8px;">100% Ownership</h4>\r
        <p style="font-size:0.8rem;color:var(--white-dim);line-height:1.7;">You own everything we create. Full IP transfer on all projects — source files, assets, and rights — delivered with every package.</p>\r
      </div>\r
      <div class="glass" style="padding:30px 24px;">\r
        <div style="font-size:1.8rem;margin-bottom:14px;">💬</div>\r
        <h4 style="font-family:var(--font-ui);font-weight:700;margin-bottom:8px;">Transparent Process</h4>\r
        <p style="font-size:0.8rem;color:var(--white-dim);line-height:1.7;">No hidden costs. No surprises. Clear milestones, regular previews, and open communication from day one to final delivery.</p>\r
      </div>\r
    </div>\r
  </section>\r
\r
  <div id="about-footer"></div>\r
</div><!-- end page-about -->\r
\r
\r
<!-- ========================== -->\r
<!-- ===== CONTACT PAGE ===== -->\r
<!-- ========================== -->\r
<div id="page-contact" class="page">\r
  <div class="page-hero">\r
    <div class="page-hero-content">\r
      <div class="section-label">Get In Touch</div>\r
      <h1 class="section-title" style="font-size:clamp(2rem,4.5vw,3.2rem);">Let's Create <em>Something</em><br>Extraordinary</h1>\r
      <p class="section-sub" style="margin-bottom:0;">Ready to bring your story to life? We'd love to hear about your project.</p>\r
    </div>\r
  </div>\r
\r
  <div class="contact-grid">\r
    <!-- Contact Info -->\r
    <div class="contact-info-panel reveal">\r
      <div class="section-label">Reach Us</div>\r
      <h2 class="section-title" style="font-size:1.8rem;margin-bottom:1.5rem;">Contact <em>Information</em></h2>\r
\r
      <div class="contact-info-item">\r
        <div class="contact-info-icon">📧</div>\r
        <div>\r
          <h4>Email Us</h4>\r
          <p>mp2animationstudio@gmail.com</p>\r
        </div>\r
      </div>\r
      <div class="contact-info-item">\r
        <div class="contact-info-icon">📞</div>\r
        <div>\r
          <h4>Call Us</h4>\r
          <p>+91 8610759752</p>\r
        </div>\r
      </div>\r
      <div class="contact-info-item">\r
        <div class="contact-info-icon">📍</div>\r
        <div>\r
          <h4>Studio Location</h4>\r
          <p>244, Manapparai, Trichy Dist. 621-312</p>\r
        </div>\r
      </div>\r
      <div class="contact-info-item">\r
        <div class="contact-info-icon">🕐</div>\r
        <div>\r
          <h4>Business Hours</h4>\r
          <p>Monday – Saturday: 9:00 AM – 7:00 PM IST<br>Sunday: By appointment only</p>\r
        </div>\r
      </div>\r
\r
      <div class="contact-socials">\r
        <a class="social-pill" href="https://www.instagram.com/mp2animationstudios?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank">&#128247; Instagram</a>\r
        <a class="social-pill" href="https://www.linkedin.com/company/119464012/admin/notifications/all/" target="_blank">&#128188; LinkedIn</a>\r
        <a class="social-pill" href="https://www.facebook.com/search/top/?q=MP2%20Animation%20Studio" target="_blank">&#128101; Facebook</a>\r
        <a class="social-pill" href="https://wa.me/918610759752" target="_blank">&#128172; WhatsApp</a>\r
      </div>\r
\r
      <div class="map-placeholder">
        <iframe
          title="MP2 Animation Studio location"
          src="https://www.google.com/maps?q=244%20Manapparai%2C%20Trichy%20Dist%20621-312&output=embed"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
      <a class="social-pill" href="https://maps.app.goo.gl/x8EtuEj4t6UGy1PH6" target="_blank" style="margin-top:12px;display:inline-flex;">Open Exact Location</a>
    </div>\r
\r
    <!-- Contact Form -->\r
    <div class="contact-form-panel reveal reveal-delay-1">\r
      <div class="contact-form" id="contact-form-wrap">\r
        <h3>Start a Project</h3>\r
        <p class="contact-form-sub">Fill out the form below and we'll get back to you within 24 hours.</p>\r
\r
        <div id="form-content">\r
          <div class="form-row">\r
            <div class="form-group">\r
              <label>Your Name *</label>\r
              <input type="text" id="f-name" placeholder="John Smith" required>\r
            </div>\r
            <div class="form-group">\r
              <label>Email Address *</label>\r
              <input type="email" id="f-email" placeholder="john@company.com" required>\r
            </div>\r
          </div>\r
          <div class="form-row">\r
            <div class="form-group">\r
              <label>Phone Number</label>\r
              <input type="tel" id="f-phone" placeholder="+91 8610759752">\r
            </div>\r
            <div class="form-group">\r
              <label>Project Type *</label>\r
              <select id="f-type">\r
                <option value="">Select service...</option>\r
                <option>2D Animation</option>\r
                <option>Motion Graphics</option>\r
                <option>Logo Designing</option>\r
                <option>Logo Animation</option>\r
                <option>Digital Marketing</option>\r
                <option>Graphic Designing</option>\r
                <option>Full Branding Package</option>\r
                <option>Other</option>\r
              </select>\r
            </div>\r
          </div>\r
          <div class="form-group">\r
            <label>Tell Us About Your Project *</label>\r
            <textarea id="f-message" placeholder="Describe your project, goals, timeline, and any specific requirements..."></textarea>\r
          </div>\r
          <button class="btn-primary" style="width:100%;justify-content:center;" onclick="submitForm()">\r
            Send Message ✦\r
          </button>\r
        </div>\r
\r
        <div class="form-success" id="form-success">\r
          <div class="form-success-icon">🎬</div>\r
          <h3>Message Sent!</h3>\r
          <p>Thank you for reaching out. Our team will review your project and get back to you within 24 hours.<br><br>Meanwhile, feel free to WhatsApp us for a quicker response.</p>\r
          <br>\r
          <a class="wa-btn" href="https://wa.me/918610759752" target="_blank" style="display:inline-flex;margin-top:8px;">\r
            💬 Continue on WhatsApp\r
          </a>\r
        </div>\r
      </div>\r
\r
      <!-- WhatsApp CTA -->\r
      <div style="margin-top:24px;padding:28px;border-radius:12px;background:rgba(37,211,102,0.07);border:1px solid rgba(37,211,102,0.2);display:flex;align-items:center;gap:20px;flex-wrap:wrap;">\r
        <div style="font-size:2.5rem;">💬</div>\r
        <div style="flex:1;min-width:180px;">\r
          <h4 style="font-family:var(--font-ui);font-weight:700;margin-bottom:4px;">Prefer WhatsApp?</h4>\r
          <p style="font-size:0.8rem;color:var(--white-dim);">Get a faster response directly through WhatsApp chat.</p>\r
        </div>\r
        <a class="wa-btn" href="https://wa.me/918610759752" target="_blank">Chat Now →</a>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <div id="contact-footer"></div>\r
</div><!-- end page-contact -->\r
\r
\r
<script>\r
// ===== CURSOR =====\r
const cursor = document.getElementById('cursor');\r
const dot = document.getElementById('cursor-dot');\r
const ring = document.getElementById('cursor-ring');\r
let mx = 0, my = 0, rx = 0, ry = 0;\r
\r
document.addEventListener('mousemove', e => {\r
  mx = e.clientX; my = e.clientY;\r
  dot.style.transform = \`translate(\${mx}px,\${my}px) translate(-50%,-50%)\`;\r
});\r
\r
const interactiveEls = 'a,button,[onclick]';\r
document.addEventListener('mouseover', e => {\r
  if(e.target.closest(interactiveEls)) document.body.classList.add('cursor-hover');\r
});\r
document.addEventListener('mouseout', e => {\r
  if(e.target.closest(interactiveEls)) document.body.classList.remove('cursor-hover');\r
});\r
\r
function animCursor() {\r
  rx += (mx - rx) * 0.12;\r
  ry += (my - ry) * 0.12;\r
  ring.style.transform = \`translate(\${rx}px,\${ry}px) translate(-50%,-50%)\`;\r
  requestAnimationFrame(animCursor);\r
}\r
animCursor();\r
\r
// ===== NAVBAR SCROLL =====\r
window.addEventListener('scroll', () => {\r
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 60);\r
});\r
\r
// ===== MOBILE NAV =====\r
function toggleMobileNav() {\r
  document.getElementById('mobile-nav').classList.toggle('open');\r
  document.querySelector('.nav-hamburger').classList.toggle('open');\r
}\r
\r
// ===== PAGE NAVIGATION =====\r
function navigateTo(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + page).classList.add('active');
  document.querySelectorAll('.nav-link').forEach(l => {
    l.classList.toggle('active', l.dataset.page === page);
  });
  window.scrollTo({ top: 0, behavior: 'smooth' });
  setTimeout(() => {
    initReveal();
    initCounts(page);
  }, 100);
  // Close mobile nav\r
  document.getElementById('mobile-nav').classList.remove('open');\r
  document.querySelector('.nav-hamburger').classList.remove('open');\r
}

// ===== SCROLL REVEAL =====
function animateCount(el) {
  if(!el || el.dataset.animated === 'true') return;
  const target = Number(el.dataset.count || '0');
  const suffix = el.dataset.suffix || '';
  const duration = 1200;
  const start = performance.now();
  el.dataset.animated = 'true';

  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = Math.round(target * eased);
    el.textContent = value + suffix;
    if(progress < 1) requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);
}

function resetCounts(page = currentPage()) {
  document.querySelectorAll('#page-' + page + ' [data-count]').forEach(el => {
    el.dataset.animated = 'false';
    el.textContent = '0' + (el.dataset.suffix || '');
  });
}

function initCounts(page = currentPage()) {
  const countEls = document.querySelectorAll('#page-' + page + ' [data-count]');
  if(!countEls.length) return;

  resetCounts(page);

  const countObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        animateCount(entry.target);
        countObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.25 });

  countEls.forEach(el => countObserver.observe(el));
}

function initReveal() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if(e.isIntersecting) {
        e.target.classList.add('visible');
        if(e.target.dataset.count) animateCount(e.target);
        e.target.querySelectorAll?.('[data-count]').forEach(animateCount);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('#page-' + currentPage() + ' .reveal').forEach(el => {
    observer.observe(el);
  });
  document.querySelectorAll('#page-' + currentPage() + ' [data-count]').forEach(el => {
    observer.observe(el);
  });
}
\r
function currentPage() {\r
  const active = document.querySelector('.page.active');\r
  return active ? active.id.replace('page-','') : 'home';\r
}\r
\r
// Run reveal on load
setTimeout(initReveal, 200);
setTimeout(() => initCounts(), 220);
\r
// ===== FAQ ACCORDION =====\r
function toggleFaq(questionEl) {\r
  const item = questionEl.parentElement;\r
  const isOpen = item.classList.contains('open');\r
  document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));\r
  if(!isOpen) item.classList.add('open');\r
}\r
\r
// ===== PORTFOLIO FILTER =====\r
function filterWorks(btn, cat) {\r
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));\r
  btn.classList.add('active');\r
  document.querySelectorAll('.portfolio-card').forEach(card => {\r
    const show = cat === 'all' || card.dataset.cat === cat;\r
    card.style.display = show ? '' : 'none';\r
    if(show) {\r
      card.style.animation = 'pageIn 0.5s var(--ease) both';\r
    }\r
  });\r
}\r
\r
// ===== CONTACT FORM =====\r
function submitForm() {\r
  const name = document.getElementById('f-name').value.trim();\r
  const email = document.getElementById('f-email').value.trim();\r
  const type = document.getElementById('f-type').value;\r
  const msg = document.getElementById('f-message').value.trim();\r
\r
  if(!name || !email || !type || !msg) {\r
    alert('Please fill in all required fields.');\r
    return;\r
  }\r
\r
  document.getElementById('form-content').style.display = 'none';\r
  document.getElementById('form-success').classList.add('show');\r
}\r
\r
// ===== INJECT FOOTER TO SUBPAGES =====\r
function injectFooters() {\r
  const footerHTML = document.querySelector('#page-home footer').outerHTML;\r
  ['services-footer','works-footer','about-footer','contact-footer'].forEach(id => {\r
    const el = document.getElementById(id);\r
    if(el) el.innerHTML = footerHTML;\r
  });\r
}\r
document.addEventListener('DOMContentLoaded', injectFooters);\r
\r
// Trigger initial reveal\r
window.addEventListener('load', () => {\r
  setTimeout(initReveal, 300);\r
});\r
<\/script>\r
</body>\r
</html>\r
`,Bi="/";function Nf(){const e=Lf.replace(/="\//g,`="${Bi}`).replace(/='\//g,`='${Bi}`).replace(/url\(\//g,`url(${Bi}`);return es.jsx("iframe",{title:"MP2 Animation Studio",srcDoc:e,style:{width:"100%",height:"100vh",border:"0",display:"block"}})}$i.createRoot(document.getElementById("root")).render(es.jsx(Nf,{}));

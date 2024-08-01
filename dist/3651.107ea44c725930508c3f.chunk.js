/*! For license information please see 3651.107ea44c725930508c3f.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3651],{13651:function(t,e,n){n.r(e),n.d(e,{default:function(){return R}}),n(63238),n(61418),n(19068),n(87211),n(25901),n(92189),n(95163),n(99785),n(91047),n(5769),n(17460),n(14078),n(98521),n(6798),n(82923),n(21897),n(12274),n(55849),n(50987),n(60190),n(72410);var r=n(83094),o=n(53218),i=n(47005),a=n(70294),u=n(78695),c=n(27515),s=n(33942),l=n(71616),f=n(1892),h=n.n(f),p=n(95760),d=n.n(p),v=n(38311),y=n.n(v),m=n(58192),g=n.n(m),x=n(38060),w=n.n(x),b=n(54865),L=n.n(b),N=n(79394),k={};function T(t){return T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},T(t)}function E(){E=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r=Object.defineProperty||function(t,e,n){t[e]=n.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,n){return t[e]=n}}function s(t,e,n,o){var i=e&&e.prototype instanceof h?e:h,a=Object.create(i.prototype),u=new S(o||[]);return r(a,"_invoke",{value:b(t,n,u)}),a}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var f={};function h(){}function p(){}function d(){}var v={};c(v,i,(function(){return this}));var y=Object.getPrototypeOf,m=y&&y(y(P([])));m&&m!==e&&n.call(m,i)&&(v=m);var g=d.prototype=h.prototype=Object.create(v);function x(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){function o(r,i,a,u){var c=l(t[r],t,i);if("throw"!==c.type){var s=c.arg,f=s.value;return f&&"object"==T(f)&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){o("next",t,a,u)}),(function(t){o("throw",t,a,u)})):e.resolve(f).then((function(t){s.value=t,a(s)}),(function(t){return o("throw",t,a,u)}))}u(c.arg)}var i;r(this,"_invoke",{value:function(t,n){function r(){return new e((function(e,r){o(t,n,e,r)}))}return i=i?i.then(r,r):r()}})}function b(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return{value:void 0,done:!0}}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var u=L(a,n);if(u){if(u===f)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=l(t,e,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===f)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}function L(t,e){var n=e.method,r=t.iterator[n];if(void 0===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=void 0,L(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),f;var o=l(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,f;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function N(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(N,this),this.reset(!0)}function P(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:D}}function D(){return{value:void 0,done:!0}}return p.prototype=d,r(g,"constructor",{value:d,configurable:!0}),r(d,"constructor",{value:p,configurable:!0}),p.displayName=c(d,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,c(t,u,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},x(w.prototype),c(w.prototype,a,(function(){return this})),t.AsyncIterator=w,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new w(s(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(g),c(g,u,"Generator"),c(g,i,(function(){return this})),c(g,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=P,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),c=n.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),k(n),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;k(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:P(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),f}},t}function S(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==T(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==T(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===T(o)?o:String(o)),r)}var o}function P(t,e,n,r,o,i,a){try{var u=t[i](a),c=u.value}catch(t){return void n(t)}u.done?e(c):Promise.resolve(c).then(r,o)}function D(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(t){P(i,r,o,a,u,"next",t)}function u(t){P(i,r,o,a,u,"throw",t)}a(void 0)}))}}k.styleTagTransform=L(),k.setAttributes=g(),k.insert=y().bind(null,"head"),k.domAPI=d(),k.insertStyleElement=w(),h()(N.Z,k),N.Z&&N.Z.locals&&N.Z.locals,n(78066),n(15359);var _=r.ZP.whichTransitionEvent();function j(){var t=this,e=t.options.parent,n=Math.max(Math.round(q(t)/1e3),0);console.debug("up next seconds remaining: "+n);var r='<span class="upNextDialog-countdownText">'+s.ZP.translate("HeaderSecondsValue",n)+"</span>",o="Episode"===t.itemType?s.ZP.translate("HeaderNextEpisodePlayingInValue",r):s.ZP.translate("HeaderNextVideoPlayingInValue",r);e.querySelector(".upNextDialog-nextVideoText").innerHTML=o}function O(t){var e=this,n=e.options.parent;n.querySelector(".upNextDialog-mediainfo").innerHTML=a.ZP.getPrimaryMediaInfoHtml(t,{criticRating:!1,originalAirDate:!1,starRating:!1,subtitles:!1});var r=l.ZP.getDisplayName(t);t.SeriesName&&(r=t.SeriesName+" - "+r),n.querySelector(".upNextDialog-title").innerText=r||"",e.itemType=t.Type,e.show()}function Z(t){t._countdownTextTimeout&&(clearInterval(t._countdownTextTimeout),t._countdownTextTimeout=null)}function H(){return I.apply(this,arguments)}function I(){return I=D(E().mark((function t(){var e,n;return E().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(e=this.options)){t.next=6;break}return n=e.player,t.next=5,this.hide();case 5:o.O.nextTrack(n);case 6:case"end":return t.stop()}}),t,this)}))),I.apply(this,arguments)}function A(t,e){var n;e.parent.innerHTML=(n="",n+='<div class="flex flex-direction-column flex-grow">',n+='<h2 class="upNextDialog-nextVideoText" style="margin:.25em 0;">&nbsp;</h2>',n+='<h3 class="upNextDialog-title" style="margin:.25em 0 .5em;"></h3>',n+='<div class="flex flex-direction-row upNextDialog-mediainfo">',n+="</div>",n+='<div class="flex flex-direction-row upNextDialog-buttons" style="margin-top:1em;">',n+='<button type="button" is="emby-button" class="raised raised-mini btnStartNow upNextDialog-button">',n+=s.ZP.translate("HeaderStartNow"),n+="</button>",n+='<button type="button" is="emby-button" class="raised raised-mini btnHide upNextDialog-button">',n+=s.ZP.translate("Hide"),n+="</button>",(n+="</div>")+"</div>"),e.parent.classList.add("hide"),e.parent.classList.add("upNextDialog"),e.parent.classList.add("upNextDialog-hidden"),O.call(t,e.nextItem),e.parent.querySelector(".btnHide").addEventListener("click",t.hide.bind(t)),e.parent.querySelector(".btnStartNow").addEventListener("click",H.bind(t))}function G(t,e){var n=t._onHideAnimationComplete;n&&r.ZP.removeEventListener(e,_,n,{once:!0})}function C(t){var e=t.target;e.classList.add("hide"),G(this,e),i.Events.trigger(this,"hide")}function M(){return V.apply(this,arguments)}function V(){return(V=D(E().mark((function t(){var e,n,o,i;return E().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=this,Z(this),e.options){t.next=4;break}return t.abrupt("return");case 4:if(n=e.options.parent){t.next=7;break}return t.abrupt("return");case 7:if(G(this,n),!n.classList.contains("upNextDialog-hidden")){t.next=10;break}return t.abrupt("return");case 10:return o=C.bind(e),e._onHideAnimationComplete=o,t.next=14,new Promise((function(t){r.ZP.addEventListener(n,_,t,{once:!0}),n.offsetWidth,n.classList.add("upNextDialog-hidden")}));case 14:i=t.sent,e._onHideAnimationComplete(i);case 16:case"end":return t.stop()}}),t,this)})))).apply(this,arguments)}function q(t){var e=t.options;if(e){var n=o.O.duration(e.player);if(n){var r=n-1e4*o.O.currentTime(e.player);return Math.round(r/1e4)}}return 0}var F=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.options=e,A(this,e)}var e,n,r;return e=t,n=[{key:"show",value:function(){var t,e=this.options.parent;G(this,e),e.classList.remove("hide"),e.offsetWidth,e.classList.remove("upNextDialog-hidden"),u.Z.tv&&setTimeout((function(){c.Z.focus(e.querySelector(".btnStartNow"))}),50),q(t=this)<=0||(j.call(t),Z(t),t._countdownTextTimeout=setInterval(j.bind(t),400))}},{key:"hide",value:(r=D(E().mark((function t(){return E().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,M.bind(this)();case 2:case"end":return t.stop()}}),t,this)}))),function(){return r.apply(this,arguments)})},{key:"destroy",value:function(){M.call(this),this.options=null,this.itemType=null}}],n&&S(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}(),R=F},79394:function(t,e,n){var r=n(54933),o=n.n(r),i=n(93476),a=n.n(i)()(o());a.push([t.id,".upNextContainer{-webkit-touch-callout:none;background-color:rgba(0,0,0,.7);bottom:0;color:#fff;display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;margin:0 2em 2em 0;padding:1em;position:fixed;right:0;transition:opacity .3s ease-out;-webkit-user-select:none;-ms-user-select:none;user-select:none;width:30em;will-change:transform,opacity}.upNextDialog-hidden{opacity:0}.upNextDialog-countdownText{font-weight:500}.upNextDialog-nextVideoText,.upNextDialog-title{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:25.5em}.upNextDialog-buttons{-webkit-align-content:flex-end;align-content:flex-end;-webkit-justify-content:end;justify-content:end;width:29.75em}.upNextDialog-button{background:#404040;color:#fff}@media (orientation:landscape){.upNextDialog{-webkit-flex-direction:row;flex-direction:row}}",""]),e.Z=a}}]);
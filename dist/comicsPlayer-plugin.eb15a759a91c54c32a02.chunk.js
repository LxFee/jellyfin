/*! For license information please see comicsPlayer-plugin.eb15a759a91c54c32a02.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2430,2126],{79616:function(e,t,n){n.r(t),n.d(t,{ComicsPlayer:function(){return g}}),n(5769),n(61484),n(63238),n(17460),n(14078),n(95289),n(61418),n(98010),n(58112),n(95623),n(72410),n(69217),n(70684),n(68581),n(55849),n(19068),n(87211),n(25901),n(92189),n(95163),n(99785),n(15610),n(52077),n(91047),n(98521),n(6798),n(82923),n(21897),n(12274),n(50987),n(60190);var r=n(96602),i=n(56705),o=n(90914),a=n(74783),c=n(80135),u=n(53913),s=n(98566);function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function A(){A=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r=Object.defineProperty||function(e,t,n){e[t]=n.value},i="function"==typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function u(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,n){return e[t]=n}}function s(e,t,n,i){var o=t&&t.prototype instanceof d?t:d,a=Object.create(o.prototype),c=new P(i||[]);return r(a,"_invoke",{value:B(e,n,c)}),a}function f(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=s;var h={};function d(){}function v(){}function p(){}var y={};u(y,o,(function(){return this}));var g=Object.getPrototypeOf,m=g&&g(g(L([])));m&&m!==t&&n.call(m,o)&&(y=m);var w=p.prototype=d.prototype=Object.create(y);function b(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){function i(r,o,a,c){var u=f(e[r],e,o);if("throw"!==u.type){var s=u.arg,A=s.value;return A&&"object"==l(A)&&n.call(A,"__await")?t.resolve(A.__await).then((function(e){i("next",e,a,c)}),(function(e){i("throw",e,a,c)})):t.resolve(A).then((function(e){s.value=e,a(s)}),(function(e){return i("throw",e,a,c)}))}c(u.arg)}var o;r(this,"_invoke",{value:function(e,n){function r(){return new t((function(t,r){i(e,n,t,r)}))}return o=o?o.then(r,r):r()}})}function B(e,t,n){var r="suspendedStart";return function(i,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===i)throw o;return{value:void 0,done:!0}}for(n.method=i,n.arg=o;;){var a=n.delegate;if(a){var c=x(a,n);if(c){if(c===h)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=f(e,t,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}function x(e,t){var n=t.method,r=e.iterator[n];if(void 0===r)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=void 0,x(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),h;var i=f(r,e.iterator,t.arg);if("throw"===i.type)return t.method="throw",t.arg=i.arg,t.delegate=null,h;var o=i.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,h):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,h)}function k(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function Y(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function P(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(k,this),this.reset(!0)}function L(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,i=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return i.next=i}}return{next:C}}function C(){return{value:void 0,done:!0}}return v.prototype=p,r(w,"constructor",{value:p,configurable:!0}),r(p,"constructor",{value:v,configurable:!0}),v.displayName=u(p,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,u(e,c,"GeneratorFunction")),e.prototype=Object.create(w),e},e.awrap=function(e){return{__await:e}},b(E.prototype),u(E.prototype,a,(function(){return this})),e.AsyncIterator=E,e.async=function(t,n,r,i,o){void 0===o&&(o=Promise);var a=new E(s(t,n,r,i),o);return e.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},b(w),u(w,c,"Generator"),u(w,o,(function(){return this})),u(w,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},e.values=L,P.prototype={constructor:P,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(Y),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return a.type="throw",a.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],a=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),u=n.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),Y(n),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;Y(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:L(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),h}},e}function f(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return h(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?h(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return a=e.done,e},e:function(e){c=!0,o=e},f:function(){try{a||null==n.return||n.return()}finally{if(c)throw o}}}}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function d(e,t,n,r,i,o,a){try{var c=e[o](a),u=c.value}catch(e){return void n(e)}c.done?t(u):Promise.resolve(u).then(r,i)}function v(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,i=function(e,t){if("object"!==l(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==l(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===l(i)?i:String(i)),r)}var i}function y(e,t,n){return t&&p(e.prototype,t),n&&p(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}n(68443),n(33609);var g=function(){function e(){v(this,e),this.name="Comics Player",this.type="mediaplayer",this.id="comicsplayer",this.priority=1,this.imageMap=new Map,this.onDialogClosed=this.onDialogClosed.bind(this),this.onWindowKeyUp=this.onWindowKeyUp.bind(this)}return y(e,[{key:"play",value:function(e){this.currentPage=0,this.pageCount=0;var t=this.createMediaElement();return this.setCurrentSrc(t,e)}},{key:"stop",value:function(){var e;this.unbindEvents();var t={src:this.item};Events.trigger(this,"stopped",[t]),null===(e=this.archiveSource)||void 0===e||e.release();var n=this.mediaElement;n&&(o.default.close(n),this.mediaElement=null),i.ZP.hide()}},{key:"destroy",value:function(){}},{key:"currentTime",value:function(){return this.currentPage}},{key:"duration",value:function(){return this.pageCount}},{key:"currentItem",value:function(){return this.item}},{key:"volume",value:function(){return 100}},{key:"isMuted",value:function(){return!1}},{key:"paused",value:function(){return!1}},{key:"seekable",value:function(){return!0}},{key:"onDialogClosed",value:function(){this.stop()}},{key:"onWindowKeyUp",value:function(e){"Escape"===a.ZP.getKeyName(e)&&this.stop()}},{key:"bindMediaElementEvents",value:function(){var e=this.mediaElement;null==e||e.addEventListener("close",this.onDialogClosed,{once:!0}),null==e||e.querySelector(".btnExit").addEventListener("click",this.onDialogClosed,{once:!0})}},{key:"bindEvents",value:function(){this.bindMediaElementEvents(),document.addEventListener("keyup",this.onWindowKeyUp)}},{key:"unbindMediaElementEvents",value:function(){var e=this.mediaElement;null==e||e.removeEventListener("close",this.onDialogClosed),null==e||e.querySelector(".btnExit").removeEventListener("click",this.onDialogClosed)}},{key:"unbindEvents",value:function(){this.unbindMediaElementEvents(),document.removeEventListener("keyup",this.onWindowKeyUp)}},{key:"createMediaElement",value:function(){var e=this.mediaElement;return e||((e=document.getElementById("comicsPlayer"))||((e=o.default.createDialog({exitAnimationDuration:400,size:"fullscreen",autoFocus:!1,scrollY:!1,exitAnimation:"fadeout",removeOnClose:!0})).id="comicsPlayer",e.classList.add("slideshowDialog"),e.innerHTML='<div class="slideshowSwiperContainer"><div class="swiper-wrapper"></div></div>\n<div class="actionButtons">\n    <button is="paper-icon-button-light" class="autoSize btnExit" tabindex="-1"><span class="material-icons actionButtonIcon close" aria-hidden="true"></span></button>\n</div>',o.default.open(e)),this.mediaElement=e,this.bindEvents(),e)}},{key:"setCurrentSrc",value:function(e,t){var n=this,o=t.items[0];this.item=o,this.streamInfo={started:!0,ended:!1,item:this.item,mediaSource:{Id:o.Id}},i.ZP.show();var a=o.ServerId,l=u.Z.getApiClient(a);r.X.init({workerUrl:c.appRouter.baseUrl()+"/libraries/worker-bundle.js"});var A=l.getItemDownloadUrl(o.Id);return this.archiveSource=new w(A),this.archiveSource.load().then((function(){i.ZP.hide(),n.pageCount=n.archiveSource.urls.length,n.currentPage=t.startPositionTicks/1e4||0,n.swiperInstance=new s.t(e.querySelector(".slideshowSwiperContainer"),{direction:"horizontal",loop:!1,zoom:{minRatio:1,toggle:!0,containerClass:"slider-zoom-container"},autoplay:!1,keyboard:{enabled:!0},preloadImages:!0,slidesPerView:1,slidesPerColumn:1,initialSlide:n.currentPage,virtual:{slides:n.archiveSource.urls,cache:!0,renderSlide:n.getImgFromUrl,addSlidesBefore:1,addSlidesAfter:1}}),n.swiperInstance.on("slideChange",(function(){n.currentPage=n.swiperInstance.activeIndex,Events.trigger(n,"pause")}))}))}},{key:"getImgFromUrl",value:function(e){return'<div class="swiper-slide">\n                   <div class="slider-zoom-container">\n                       <img src="'.concat(e,'" class="swiper-slide-img">\n                   </div>\n               </div>')}},{key:"canPlayMediaType",value:function(e){return"book"===(e||"").toLowerCase()}},{key:"canPlayItem",value:function(e){return!(!e.Path||!e.Path.endsWith("cbz")&&!e.Path.endsWith("cbr"))}}]),e}(),m=["jpg","jpeg","jpe","jif","jfif","jfi","png","avif","gif","bmp","dib","tiff","tif","webp"],w=function(){function e(t){v(this,e),this.url=t,this.files=[],this.urls=[]}var t,n;return y(e,[{key:"load",value:(t=A().mark((function e(){var t,n,i,o,a,c,u;return A().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(this.url);case 2:if((t=e.sent).ok){e.next=5;break}return e.abrupt("return");case 5:return e.next=7,t.blob();case 7:return n=e.sent,e.next=10,r.X.open(n);case 10:return this.archive=e.sent,e.next=13,this.archive.getFilesArray();case 13:return this.raw=e.sent,e.next=16,this.archive.extractFiles();case 16:return e.next=18,this.archive.getFilesArray();case 18:i=(i=e.sent).filter((function(e){var t=e.file.name,n=t.lastIndexOf(".");return-1!==n&&m.includes(t.slice(n+1))})),i.sort((function(e,t){return e.file.name<t.file.name?-1:1})),o=f(i);try{for(o.s();!(a=o.n()).done;)c=a.value,u=URL.createObjectURL(c.file),this.urls.push(u)}catch(e){o.e(e)}finally{o.f()}case 23:case"end":return e.stop()}}),e,this)})),n=function(){var e=this,n=arguments;return new Promise((function(r,i){var o=t.apply(e,n);function a(e){d(o,r,i,a,c,"next",e)}function c(e){d(o,r,i,a,c,"throw",e)}a(void 0)}))},function(){return n.apply(this,arguments)})},{key:"release",value:function(){this.files=[],this.urls.forEach(URL.revokeObjectURL),this.urls=[]}}]),e}();t.default=g},18375:function(e,t,n){var r=n(54933),i=n.n(r),o=n(93476),a=n.n(o)()(i());a.push([e.id,"#comicsPlayer{background:#fff}#comicsPlayer .slideshowSwiperContainer{height:100%}#comicsPlayer .slider-zoom-container{height:100%;text-align:center}#comicsPlayer .swiper-slide-img{max-height:100%}",""]),t.Z=a},33609:function(e,t,n){n.r(t);var r=n(1892),i=n.n(r),o=n(95760),a=n.n(o),c=n(38311),u=n.n(c),s=n(58192),l=n.n(s),A=n(38060),f=n.n(A),h=n(54865),d=n.n(h),v=n(18375),p={};p.styleTagTransform=d(),p.setAttributes=l(),p.insert=u().bind(null,"head"),p.domAPI=a(),p.insertStyleElement=f(),i()(v.Z,p),t.default=v.Z&&v.Z.locals?v.Z.locals:void 0},49954:function(e){e.exports="data:application/font-woff;charset=utf-8;base64, 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"}}]);
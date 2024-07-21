/*! For license information please see npo.js.LICENSE.txt */
!function(t,n,e){n[t]=n[t]||function(){"use strict";function t(t,n){l.add(t,n),h||(h=y(l.drain))}function n(t){var n,e=typeof t;return null==t||"object"!=e&&"function"!=e||(n=t.then),"function"==typeof n&&n}function e(){for(var t=0;t<this.chain.length;t++)o(this,1===this.state?this.chain[t].success:this.chain[t].failure,this.chain[t]);this.chain.length=0}function o(t,e,o){var r,i;try{!1===e?o.reject(t.msg):(r=!0===e?t.msg:e.call(void 0,t.msg))===o.promise?o.reject(TypeError("Promise-chain cycle")):(i=n(r))?i.call(r,o.resolve,o.reject):o.resolve(r)}catch(t){o.reject(t)}}function r(o){var c,u=this;if(!u.triggered){u.triggered=!0,u.def&&(u=u.def);try{(c=n(o))?t((function(){var t=new f(u);try{c.call(o,(function(){r.apply(t,arguments)}),(function(){i.apply(t,arguments)}))}catch(n){i.call(t,n)}})):(u.msg=o,u.state=1,u.chain.length>0&&t(e,u))}catch(t){i.call(new f(u),t)}}}function i(n){var o=this;o.triggered||(o.triggered=!0,o.def&&(o=o.def),o.msg=n,o.state=2,o.chain.length>0&&t(e,o))}function c(t,n,e,o){for(var r=0;r<n.length;r++)!function(r){t.resolve(n[r]).then((function(t){e(r,t)}),o)}(r)}function f(t){this.def=t,this.triggered=!1}function u(t){this.promise=t,this.state=0,this.triggered=!1,this.chain=[],this.msg=void 0}function a(n){if("function"!=typeof n)throw TypeError("Not a function");if(0!==this.__NPO__)throw TypeError("Not a promise");this.__NPO__=1;var o=new u(this);this.then=function(n,r){var i={success:"function"!=typeof n||n,failure:"function"==typeof r&&r};return i.promise=new this.constructor((function(t,n){if("function"!=typeof t||"function"!=typeof n)throw TypeError("Not a function");i.resolve=t,i.reject=n})),o.chain.push(i),0!==o.state&&t(e,o),i.promise},this.catch=function(t){return this.then(void 0,t)};try{n.call(void 0,(function(t){r.call(o,t)}),(function(t){i.call(o,t)}))}catch(t){i.call(o,t)}}var s,h,l,p=Object.prototype.toString,y="undefined"!=typeof setImmediate?function(t){return setImmediate(t)}:setTimeout;try{Object.defineProperty({},"x",{}),s=function(t,n,e,o){return Object.defineProperty(t,n,{value:e,writable:!0,configurable:!1!==o})}}catch(t){s=function(t,n,e){return t[n]=e,t}}l=function(){function t(t,n){this.fn=t,this.self=n,this.next=void 0}var n,e,o;return{add:function(r,i){o=new t(r,i),e?e.next=o:n=o,e=o,o=void 0},drain:function(){var t=n;for(n=e=h=void 0;t;)t.fn.call(t.self),t=t.next}}}();var d=s({},"constructor",a,!1);return a.prototype=d,s(d,"__NPO__",0,!1),s(a,"resolve",(function(t){return t&&"object"==typeof t&&1===t.__NPO__?t:new this((function(n,e){if("function"!=typeof n||"function"!=typeof e)throw TypeError("Not a function");n(t)}))})),s(a,"reject",(function(t){return new this((function(n,e){if("function"!=typeof n||"function"!=typeof e)throw TypeError("Not a function");e(t)}))})),s(a,"all",(function(t){var n=this;return"[object Array]"!=p.call(t)?n.reject(TypeError("Not an array")):0===t.length?n.resolve([]):new n((function(e,o){if("function"!=typeof e||"function"!=typeof o)throw TypeError("Not a function");var r=t.length,i=Array(r),f=0;c(n,t,(function(t,n){i[t]=n,++f===r&&e(i)}),o)}))})),s(a,"race",(function(t){var n=this;return"[object Array]"!=p.call(t)?n.reject(TypeError("Not an array")):new n((function(e,o){if("function"!=typeof e||"function"!=typeof o)throw TypeError("Not a function");c(n,t,(function(t,n){e(n)}),o)}))})),a}(),"undefined"!=typeof module&&module.exports?module.exports=n[t]:"function"==typeof define&&define.amd&&define((function(){return n[t]}))}("Promise","undefined"!=typeof global?global:this);
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4609],{74609:function(e,a,t){t.r(a),t.d(a,{default:function(){return y},show:function(){return g}}),t(23938),t(61013),t(76056),t(69217),t(32081),t(72410),t(63238),t(15610),t(17460),t(52077),t(25901),t(92189),t(91047),t(5769),t(14078);var n=t(65009),o=t.n(n),r=t(90914),i=t(78695),s=t(25152),l=t(44619),c=t(83094),d=t(33942),u=t(71616),p=t(56705),f=(t(20716),t(664),t(78066),t(21865),t(6626),t(85427),t(15359),t(53913));function h(e,a){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=function(e,a){if(e){if("string"==typeof e)return m(e,a);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?m(e,a):void 0}}(e))||a&&e&&"number"==typeof e.length){t&&(e=t);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,i=!0,s=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return i=e.done,e},e:function(e){s=!0,r=e},f:function(){try{i||null==t.return||t.return()}finally{if(s)throw r}}}}function m(e,a){(null==a||a>e.length)&&(a=e.length);for(var t=0,n=new Array(a);t<a;t++)n[t]=e[t];return n}var v=i.Z.tv?"":'<button is="paper-icon-button-light" class="btnCopy" title="'.concat(d.ZP.translate("Copy"),'" aria-label="').concat(d.ZP.translate("Copy"),'"\n        ><span class="material-icons content_copy" aria-hidden="true"></span></button>'),P=i.Z.tv?"":'<span class="hide">: </span>';function I(e,a){return'<span class="mediaInfoLabel">'.concat(e,"</span>").concat(P,'<span class="mediaInfoAttribute">').concat(o()(a),"</span>\n")}function g(e,a){return p.ZP.show(),function(e,a){var t=f.Z.getApiClient(a);return t.getItem(t.getCurrentUserId(),e).then((function(e){var a={size:"small",removeOnClose:!0,scrollY:!1};i.Z.tv&&(a.size="fullscreen");var n=r.default.createDialog(a);n.classList.add("formDialog");var f="";f+=d.ZP.translateHtml('<div class="formDialogHeader"> <button is="paper-icon-button-light" class="btnCancel autoSize" tabindex="-1" title="${ButtonBack}"> <span class="material-icons arrow_back" aria-hidden="true"></span> </button> <h3 class="formDialogHeaderTitle">${MoreMediaInfo}</h3> </div> <div class="formDialogContent smoothScrollY"> <div class="dialogContentInner" style="padding:1em"> <div id="mediaInfoContent" class="mediaInfoContent"></div> </div> </div> ',"core"),n.innerHTML=f,i.Z.tv&&n.querySelector(".formDialogContent"),r.default.open(n),n.querySelector(".btnCancel").addEventListener("click",(function(){r.default.close(n)})),t.getCurrentUser().then((function(a){!function(e,a,t){var n=t.MediaSources.map((function(a){return function(e,a,t){var n='<div class="mediaInfoSource">';if(t.Name&&(n+='<div><h2 class="mediaInfoStreamType">'.concat(o()(t.Name)).concat(v,"</h2></div>\n")),t.Container&&(n+="".concat(I(d.ZP.translate("MediaInfoContainer"),t.Container),"<br/>")),t.Formats&&t.Formats.length&&(n+="".concat(I(d.ZP.translate("MediaInfoFormat"),t.Formats.join(",")),"<br/>")),t.Path&&e&&e.Policy.IsAdministrator&&(n+="".concat(I(d.ZP.translate("MediaInfoPath"),t.Path),"<br/>")),t.Size){var r="".concat((t.Size/1048576).toFixed(0)," MB");n+="".concat(I(d.ZP.translate("MediaInfoSize"),r),"<br/>")}t.MediaStreams.sort(u.ZP.sortTracks);var i,s=h(t.MediaStreams);try{for(s.s();!(i=s.n()).done;){var l=i.value;if("Data"!==l.Type){n+='<div class="mediaInfoStream">';var c=void 0;switch(l.Type){case"Audio":case"Data":case"Subtitle":case"Video":c=l.Type;break;case"EmbeddedImage":c="Image"}var p=d.ZP.translate(c);n+='\n<h2 class="mediaInfoStreamType">'.concat(p).concat(v,"</h2>\n");var f=[];l.DisplayTitle&&f.push(I(d.ZP.translate("MediaInfoTitle"),l.DisplayTitle)),l.Language&&"Video"!==l.Type&&f.push(I(d.ZP.translate("MediaInfoLanguage"),l.Language)),l.Codec&&f.push(I(d.ZP.translate("MediaInfoCodec"),l.Codec.toUpperCase())),l.CodecTag&&f.push(I(d.ZP.translate("MediaInfoCodecTag"),l.CodecTag)),null!=l.IsAVC&&f.push(I("AVC",l.IsAVC?"Yes":"No")),l.Profile&&f.push(I(d.ZP.translate("MediaInfoProfile"),l.Profile)),l.Level&&"Video"===l.Type&&f.push(I(d.ZP.translate("MediaInfoLevel"),l.Level)),(l.Width||l.Height)&&f.push(I(d.ZP.translate("MediaInfoResolution"),"".concat(l.Width,"x").concat(l.Height))),l.AspectRatio&&"mjpeg"!==l.Codec&&f.push(I(d.ZP.translate("MediaInfoAspectRatio"),l.AspectRatio)),"Video"===l.Type&&(null!=l.IsAnamorphic&&f.push(I(d.ZP.translate("MediaInfoAnamorphic"),l.IsAnamorphic?"Yes":"No")),f.push(I(d.ZP.translate("MediaInfoInterlaced"),l.IsInterlaced?"Yes":"No"))),(l.AverageFrameRate||l.RealFrameRate)&&"Video"===l.Type&&f.push(I(d.ZP.translate("MediaInfoFramerate"),l.AverageFrameRate||l.RealFrameRate)),l.ChannelLayout&&f.push(I(d.ZP.translate("MediaInfoLayout"),l.ChannelLayout)),l.Channels&&f.push(I(d.ZP.translate("MediaInfoChannels"),"".concat(l.Channels," ch"))),!l.BitRate||"Video"!==l.Type&&"Audio"!==l.Type||f.push(I(d.ZP.translate("MediaInfoBitrate"),"".concat(parseInt(l.BitRate/1e3)," kbps"))),l.SampleRate&&f.push(I(d.ZP.translate("MediaInfoSampleRate"),"".concat(l.SampleRate," Hz"))),l.BitDepth&&f.push(I(d.ZP.translate("MediaInfoBitDepth"),"".concat(l.BitDepth," bit"))),l.VideoRange&&f.push(I(d.ZP.translate("MediaInfoVideoRange"),l.VideoRange)),l.VideoRangeType&&f.push(I(d.ZP.translate("MediaInfoVideoRangeType"),l.VideoRangeType)),l.VideoDoViTitle&&(f.push(I(d.ZP.translate("MediaInfoDoViTitle"),l.VideoDoViTitle)),null!=l.DvVersionMajor&&f.push(I(d.ZP.translate("MediaInfoDvVersionMajor"),l.DvVersionMajor)),null!=l.DvVersionMinor&&f.push(I(d.ZP.translate("MediaInfoDvVersionMinor"),l.DvVersionMinor)),null!=l.DvProfile&&f.push(I(d.ZP.translate("MediaInfoDvProfile"),l.DvProfile)),null!=l.DvLevel&&f.push(I(d.ZP.translate("MediaInfoDvLevel"),l.DvLevel)),null!=l.RpuPresentFlag&&f.push(I(d.ZP.translate("MediaInfoRpuPresentFlag"),l.RpuPresentFlag)),null!=l.ElPresentFlag&&f.push(I(d.ZP.translate("MediaInfoElPresentFlag"),l.ElPresentFlag)),null!=l.BlPresentFlag&&f.push(I(d.ZP.translate("MediaInfoBlPresentFlag"),l.BlPresentFlag)),null!=l.DvBlSignalCompatibilityId&&f.push(I(d.ZP.translate("MediaInfoDvBlSignalCompatibilityId"),l.DvBlSignalCompatibilityId))),l.ColorSpace&&f.push(I(d.ZP.translate("MediaInfoColorSpace"),l.ColorSpace)),l.ColorTransfer&&f.push(I(d.ZP.translate("MediaInfoColorTransfer"),l.ColorTransfer)),l.ColorPrimaries&&f.push(I(d.ZP.translate("MediaInfoColorPrimaries"),l.ColorPrimaries)),l.PixelFormat&&f.push(I(d.ZP.translate("MediaInfoPixelFormat"),l.PixelFormat)),l.RefFrames&&f.push(I(d.ZP.translate("MediaInfoRefFrames"),l.RefFrames)),l.NalLengthSize&&f.push(I("NAL",l.NalLengthSize)),"Subtitle"!==l.Type&&"Audio"!==l.Type||(f.push(I(d.ZP.translate("MediaInfoDefault"),l.IsDefault?"Yes":"No")),f.push(I(d.ZP.translate("MediaInfoForced"),l.IsForced?"Yes":"No")),f.push(I(d.ZP.translate("MediaInfoExternal"),l.IsExternal?"Yes":"No"))),"Video"===l.Type&&t.Timestamp&&f.push(I(d.ZP.translate("MediaInfoTimestamp"),t.Timestamp)),n+=f.join("<br/>"),n+="</div>"}}}catch(e){s.e(e)}finally{s.f()}return n+"</div>"}(e,0,a)})).join('<div style="border-top:1px solid #444;margin: 1em 0;"></div>');t.MediaSources.length>1&&(n="<br/>".concat(n));var r=a.querySelector("#mediaInfoContent");r.innerHTML=n;var i,p=h(r.querySelectorAll(".btnCopy"));try{var f=function(){var e=i.value;e.addEventListener("click",(function(){var a=c.ZP.parentWithClass(e,"mediaInfoStream")||c.ZP.parentWithClass(e,"mediaInfoSource")||r;(0,l.J)(a.textContent).then((function(){(0,s.Z)(d.ZP.translate("Copied"))})).catch((function(){console.error("Could not copy text"),(0,s.Z)(d.ZP.translate("CopyFailed"))}))}))};for(p.s();!(i=p.n()).done;)f()}catch(e){p.e(e)}finally{p.f()}}(a,n,e)})),p.ZP.hide()}))}(e,a)}var y={show:g}}}]);
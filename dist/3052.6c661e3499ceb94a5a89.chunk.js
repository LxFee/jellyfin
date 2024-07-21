"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3052],{93052:function(e,t,l){l.r(t),l.d(t,{default:function(){return I},show:function(){return U}}),l(63238),l(95289),l(61418);var a=l(65009),i=l.n(a),n=l(90914),s=l(53913),r=l(83094),o=l(56705),u=l(74227),d=l(78695),c=l(33942),b=l(25152),p=(l(78066),l(20716),l(6626),l(1892)),f=l.n(p),v=l(95760),m=l.n(v),h=l(38311),g=l.n(h),y=l(58192),S=l.n(y),L=l(38060),Z=l.n(L),k=l(54865),q=l.n(k),w=l(13005),D={};D.styleTagTransform=q(),D.setAttributes=S(),D.insert=g().bind(null,"head"),D.domAPI=m(),D.insertStyleElement=Z(),f()(w.Z,D),w.Z&&w.Z.locals&&w.Z.locals;var C,F,P,x=!1;function E(e){o.ZP.hide();var t=e.target.error;t.code!==t.ABORT_ERR&&(0,b.Z)(c.ZP.translate("MessageFileReadError"))}function H(e){return e&&[".sub",".srt",".vtt",".ass",".ssa"].some((function(t){return e.name.endsWith(t)}))}function T(e){var t=P;if(!H(t))return(0,b.Z)(c.ZP.translate("MessageSubtitleFileTypeAllowed")),void e.preventDefault();o.ZP.show();var l=r.ZP.parentWithClass(this,"dialog"),a=l.querySelector("#selectLanguage").value,i=l.querySelector("#chkIsForced").checked;s.Z.getApiClient(F).uploadItemSubtitle(C,a,i,t).then((function(){l.querySelector("#uploadSubtitle").value="",o.ZP.hide(),x=!0,n.default.close(l)})),e.preventDefault()}function U(e){return new Promise((function(t){x=!1,function(e,t){C=(e=e||{}).itemId,F=e.serverId;var l={removeOnClose:!0,scrollY:!1};d.Z.tv?l.size="fullscreen":l.size="small";var a,s=n.default.createDialog(l);s.classList.add("formDialog"),s.classList.add("subtitleUploaderDialog"),s.innerHTML=c.ZP.translateHtml('<div class="formDialogHeader"> <button is="paper-icon-button-light" class="btnCancel autoSize" tabindex="-1" title="${ButtonBack}"><span class="material-icons arrow_back" aria-hidden="true"></span></button> <h3 class="formDialogHeaderTitle"> ${HeaderUploadSubtitle} </h3> </div> <div class="formDialogContent"> <div class="dialogContentInner"> <form class="uploadSubtitleForm"> <div class="flex align-items-center" style="margin:1.5em 0"> <h2 style="margin:0">${HeaderAddUpdateSubtitle}</h2> <button is="emby-button" type="button" class="raised raised-mini btnBrowse" style="margin-left:1.5em"> <span class="material-icons folder" aria-hidden="true"></span> <span>${Browse}</span> </button> </div> <div> <div class="subtitleEditor-dropZone fieldDescription"> <div id="labelDropSubtitle">${LabelDropSubtitleHere}</div> <output id="subtitleOutput" class="flex align-items-center justify-content-center" style="position:absolute;top:0;left:0;right:0;bottom:0;width:100%"></output> <input type="file" accept=".sub,.srt,.vtt,.ass,.ssa" id="uploadSubtitle" name="uploadSubtitle" style="position:absolute;top:0;left:0;right:0;bottom:0;width:100%;opacity:0"/> </div> <div id="fldUpload" class="hide"> <br/> <div class="checkboxContainer"> <label> <input type="checkbox" is="emby-checkbox" id="chkIsForced"/> <span>${LabelIsForced}</span> </label> </div> <div class="selectContainer flex-grow"> <select is="emby-select" id="selectLanguage" required="required" label="${LabelLanguage}"></select> </div> <button is="emby-button" type="submit" class="raised button-submit block"> <span>${Upload}</span> </button> </div> </div> </form> </div> </div> ',"core"),d.Z.tv&&u.default.centerFocus.on(s,!1),s.addEventListener("close",(function(){d.Z.tv&&u.default.centerFocus.off(s,!1),o.ZP.hide(),t(x)})),n.default.open(s),(a=s).querySelector(".uploadSubtitleForm").addEventListener("submit",T),a.querySelector("#uploadSubtitle").addEventListener("change",(function(){!function(e,t){var l=t[0];if(!H(l))return e.querySelector("#subtitleOutput").innerHTML="",e.querySelector("#fldUpload").classList.add("hide"),e.querySelector("#labelDropSubtitle").classList.remove("hide"),void(P=null);P=l;var a,n=new FileReader;n.onerror=E,n.onloadstart=function(){e.querySelector("#fldUpload").classList.add("hide")},n.onabort=function(){o.ZP.hide(),console.debug("File read cancelled")},n.onload=(a=l,function(){var t='<div><span class="material-icons subtitles" aria-hidden="true" style="transform: translateY(25%);"></span><span>'.concat(i()(a.name),"</span></div>");e.querySelector("#subtitleOutput").innerHTML=t,e.querySelector("#fldUpload").classList.remove("hide"),e.querySelector("#labelDropSubtitle").classList.add("hide")}),n.readAsDataURL(l)}(a,this.files)})),a.querySelector(".btnBrowse").addEventListener("click",(function(){a.querySelector("#uploadSubtitle").click()}));var r=s.querySelector("#selectLanguage");e.languages&&(r.innerHTML=e.languages.list||null,r.value=e.languages.value||null),s.querySelector(".btnCancel").addEventListener("click",(function(){n.default.close(s)}))}(e,t)}))}var I={show:U}},13005:function(e,t,l){var a=l(54933),i=l.n(a),n=l(93476),s=l.n(n)()(i());s.push([e.id,".subtitleEditor-dropZone{-webkit-align-items:center;align-items:center;border:.2em dashed;border-radius:.25em;display:-webkit-flex;display:flex;height:12em;-webkit-justify-content:center;justify-content:center;position:relative;text-align:center}",""]),t.Z=s}}]);
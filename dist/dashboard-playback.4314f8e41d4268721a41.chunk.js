"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[729],{79405:function(e,t,n){n.r(t),n(72326);var i=n(56705),o=n(3319),a=n(33942),u=n(93586);function s(){i.ZP.show();var e=this;return ApiClient.getServerConfiguration().then((function(t){t.MinResumePct=$("#txtMinResumePct",e).val(),t.MaxResumePct=$("#txtMaxResumePct",e).val(),t.MinAudiobookResume=$("#txtMinAudiobookResume",e).val(),t.MaxAudiobookResume=$("#txtMaxAudiobookResume",e).val(),t.MinResumeDurationSeconds=$("#txtMinResumeDuration",e).val(),ApiClient.updateServerConfiguration(t).then(u.ZP.processServerConfigurationUpdateResult)})),!1}function r(){return[{href:"#/encodingsettings.html",name:a.ZP.translate("Transcoding")},{href:"#/playbackconfiguration.html",name:a.ZP.translate("ButtonResume")},{href:"#/streamingsettings.html",name:a.ZP.translate("TabStreaming")}]}$(document).on("pageinit","#playbackConfigurationPage",(function(){$(".playbackConfigurationForm").off("submit",s).on("submit",s)})).on("pageshow","#playbackConfigurationPage",(function(){i.ZP.show(),o.Z.setTabs("playback",1,r);var e=this;ApiClient.getServerConfiguration().then((function(t){!function(e,t){$("#txtMinResumePct",e).val(t.MinResumePct),$("#txtMaxResumePct",e).val(t.MaxResumePct),$("#txtMinAudiobookResume",e).val(t.MinAudiobookResume),$("#txtMaxAudiobookResume",e).val(t.MaxAudiobookResume),$("#txtMinResumeDuration",e).val(t.MinResumeDurationSeconds),i.ZP.hide()}(e,t)}))}))}}]);
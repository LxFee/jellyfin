"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9944,6560],{19944:function(e,t,n){n.r(t),n(63238),n(55849),n(43512),n(27471),n(48410);var a=n(28469),i=n(47005),r=n(47518),o=n(21361),s=n(78695),l=n(53218),u=n(92642),d=n(94389),c=n(83094),m=n(27046),g=(n(21865),n(76560),n(53913)),p=(n(19068),n(87211),n(25901),n(92189),n(95163),n(99785),n(91047),n(5769),n(17460),n(14078),n(1892)),f=n.n(p),y=n(95760),v=n.n(y),h=n(38311),b=n.n(h),w=n(58192),P=n.n(w),B=n(38060),k=n.n(B),I=n(54865),S=n.n(I),T=n(74365),x={};function C(e){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},C(e)}function L(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,(void 0,i=function(e,t){if("object"!==C(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,"string");if("object"!==C(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(a.key),"symbol"===C(i)?i:String(i)),a)}var i}x.styleTagTransform=S(),x.setAttributes=P(),x.insert=b().bind(null,"head"),x.domAPI=v(),x.insertStyleElement=k(),f()(T.Z,x),T.Z&&T.Z.locals&&T.Z.locals;var A=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var t,n=this;n.element=((t=document.createElement("div")).classList.add("appfooter"),document.body.appendChild(t),t),n.add=function(e){n.element.appendChild(e)},n.insert=function(e){"string"==typeof e?n.element.insertAdjacentHTML("afterbegin",e):n.element.insertBefore(e,n.element.firstChild)}}var t,n;return t=e,(n=[{key:"destroy",value:function(){this.element=null}}])&&L(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),E=new A,Z=n(67962),O=n(28936),R={};R.styleTagTransform=S(),R.setAttributes=P(),R.insert=b().bind(null,"head"),R.domAPI=v(),R.insertStyleElement=k(),f()(O.Z,R),O.Z&&O.Z.locals&&O.Z.locals,n(61022);var M,N,q,U,j,_,D,F,V,z,Q,H,Y,W,G,J=n(80135),K=[],X=0,$={},ee=0,te=!0;function ne(){this.classList.add("hide")}function ae(){l.O.playPause(M)}function ie(){if(G)return G;var e,t,n=E.element;return(G=n.querySelector(".nowPlayingBar"))||(n.insertAdjacentHTML("afterbegin",(e="",e+='<div class="nowPlayingBar hide nowPlayingBar-hidden">',e+='<div class="nowPlayingBarTop">',e+='<div class="nowPlayingBarPositionContainer sliderContainer">',e+='<input type="range" is="emby-slider" pin step=".01" min="0" max="100" value="0" class="slider-medium-thumb nowPlayingBarPositionSlider" data-slider-keep-progress="true"/>',e+="</div>",e+='<div class="nowPlayingBarInfoContainer">',e+='<div class="nowPlayingImage"></div>',e+='<div class="nowPlayingBarText"></div>',e+="</div>",e+='<div class="nowPlayingBarCenter">',e+='<button is="paper-icon-button-light" class="previousTrackButton mediaButton"><span class="material-icons skip_previous" aria-hidden="true"></span></button>',e+='<button is="paper-icon-button-light" class="playPauseButton mediaButton"><span class="material-icons pause" aria-hidden="true"></span></button>',e+='<button is="paper-icon-button-light" class="stopButton mediaButton"><span class="material-icons stop" aria-hidden="true"></span></button>',s.Z.mobile||(e+='<button is="paper-icon-button-light" class="nextTrackButton mediaButton"><span class="material-icons skip_next" aria-hidden="true"></span></button>'),e+='<div class="nowPlayingBarCurrentTime"></div>',e+="</div>",e+='<div class="nowPlayingBarRight">',e+='<button is="paper-icon-button-light" class="muteButton mediaButton"><span class="material-icons volume_up" aria-hidden="true"></span></button>',e+='<div class="sliderContainer nowPlayingBarVolumeSliderContainer hide" style="width:9em;vertical-align:middle;display:inline-flex;">',e+='<input type="range" is="emby-slider" pin step="1" min="0" max="100" value="0" class="slider-medium-thumb nowPlayingBarVolumeSlider"/>',e+="</div>",e+='<button is="paper-icon-button-light" class="toggleRepeatButton mediaButton"><span class="material-icons repeat" aria-hidden="true"></span></button>',e+='<button is="paper-icon-button-light" class="btnShuffleQueue mediaButton"><span class="material-icons shuffle" aria-hidden="true"></span></button>',e+='<div class="nowPlayingBarUserDataButtons">',e+="</div>",e+='<button is="paper-icon-button-light" class="playPauseButton mediaButton"><span class="material-icons pause" aria-hidden="true"></span></button>',s.Z.mobile?e+='<button is="paper-icon-button-light" class="nextTrackButton mediaButton"><span class="material-icons skip_next" aria-hidden="true"></span></button>':e+='<button is="paper-icon-button-light" class="btnToggleContextMenu mediaButton"><span class="material-icons more_vert" aria-hidden="true"></span></button>',e+="</div>",(e+="</div>")+"</div>")),window.CustomElements.upgradeSubtree(n),G=n.querySelector(".nowPlayingBar"),s.Z.mobile&&(re(G.querySelector(".btnShuffleQueue")),re(G.querySelector(".nowPlayingBarCenter"))),r.Z.safari&&r.Z.slow&&G.classList.add("noMediaProgress"),Z.ZP.on(G),N=(t=G).querySelector(".nowPlayingBarCurrentTime"),q=t.querySelector(".nowPlayingImage"),j=t.querySelector(".nowPlayingBarText"),_=t.querySelector(".nowPlayingBarUserDataButtons"),Q=t.querySelector(".nowPlayingBarPositionSlider"),D=t.querySelector(".muteButton"),z=t.querySelectorAll(".playPauseButton"),H=t.querySelector(".toggleRepeatButton"),F=t.querySelector(".nowPlayingBarVolumeSlider"),V=t.querySelector(".nowPlayingBarVolumeSliderContainer"),D.addEventListener("click",(function(){M&&l.O.toggleMute(M)})),t.querySelector(".stopButton").addEventListener("click",(function(){M&&l.O.stop(M)})),z.forEach((function(e){e.addEventListener("click",ae)})),t.querySelector(".nextTrackButton").addEventListener("click",(function(){M&&l.O.nextTrack(M)})),t.querySelector(".previousTrackButton").addEventListener("click",(function(e){if(M)if("Audio"===$.NowPlayingItem.MediaType&&(M._currentTime>=5||!l.O.previousTrack(M))){if(e.detail>1&&l.O.previousTrack(M))return;l.O.seekPercent(0,M),Q.value=0}else l.O.previousTrack(M)})),t.querySelector(".previousTrackButton").addEventListener("dblclick",(function(){M&&l.O.previousTrack(M)})),t.querySelector(".btnShuffleQueue").addEventListener("click",(function(){M&&l.O.toggleQueueShuffleMode()})),(H=t.querySelector(".toggleRepeatButton")).addEventListener("click",(function(){switch(l.O.getRepeatMode()){case"RepeatAll":l.O.setRepeatMode("RepeatOne");break;case"RepeatOne":l.O.setRepeatMode("RepeatNone");break;case"RepeatNone":l.O.setRepeatMode("RepeatAll")}})),Y=H.querySelector(".material-icons"),V.classList.toggle("hide",d.M.supports("physicalvolumecontrol")),F.addEventListener("input",(function(e){M&&M.setVolume(e.target.value)})),Q.addEventListener("change",(function(){if(M){var e=parseFloat(this.value);l.O.seekPercent(e,M)}})),Q.getBubbleText=function(e){if(!$||!$.NowPlayingItem||!ee)return"--:--";var t=ee;return t/=100,t*=e,a.ZP.getDisplayRunningTime(t)},t.addEventListener("click",(function(e){c.ZP.parentWithTag(e.target,["BUTTON","INPUT"])||J.appRouter.showNowPlaying()}))),G}function re(e){e.classList.add("hide")}function oe(e){z&&z.forEach((function(t){var n=t.querySelector(".material-icons");n.classList.remove("play_arrow","pause"),n.classList.add(e?"play_arrow":"pause")}))}function se(e){Y.classList.remove("repeat","repeat_one");var t="buttonActive";switch(e){case"RepeatAll":Y.classList.add("repeat"),H.classList.add(t);break;case"RepeatOne":Y.classList.add("repeat_one"),H.classList.add(t);break;default:Y.classList.add("repeat"),H.classList.remove(t)}}function le(e,t,n){if(Q&&!Q.dragging)if(t){var i=e/t;i*=100,Q.value=i}else Q.value=0;if(Q&&Q.setBufferedRanges(n,t,e),N){var r=null==e?"--:--":a.ZP.getDisplayRunningTime(e);t&&(r+=" / "+a.ZP.getDisplayRunningTime(t)),N.innerHTML=r}}function ue(e,t){var n=K,a=!0,i=!0;-1===n.indexOf("ToggleMute")&&(a=!1);var r=D.querySelector(".material-icons");r.classList.remove("volume_off","volume_up"),r.classList.add(e?"volume_off":"volume_up"),-1===n.indexOf("SetVolume")&&(i=!1),M.isLocalPlayer&&d.M.supports("physicalvolumecontrol")&&(a=!1,i=!1),a?D.classList.remove("hide"):re(D),F&&(V.classList.toggle("hide",!i),F.dragging||(F.value=t||0))}function de(e,t){console.debug("nowplaying event: "+e.type),ye.call(this,e,t)}function ce(){W&&se(l.O.getRepeatMode())}function me(){if(W){var e=l.O.getQueueShuffleMode(),t="buttonActive",n=G.querySelector(".btnShuffleQueue");"Shuffle"===e?n.classList.add(t):n.classList.remove(t)}}function ge(){W=!1;var e=document.getElementsByClassName("nowPlayingBar")[0];e&&function(e){e.offsetWidth,e.classList.add("nowPlayingBar-hidden"),c.ZP.addEventListener(e,c.ZP.whichTransitionEvent(),ne,{once:!0})}(e)}function pe(e,t){console.debug("nowplaying event: "+e.type),this.isLocalPlayer?"Audio"!==t.NextMediaType&&ge():t.NextMediaType||ge()}function fe(){W&&oe(this.paused())}function ye(e,t){if("init"!==e.type){console.debug("nowplaying event: "+e.type);t.NowPlayingItem&&!s.Z.tv&&!1!==t.IsFullscreen?this.isLocalPlayer&&t.NowPlayingItem&&"Video"===t.NowPlayingItem.MediaType?ge():(W=!0,G||ie(),function(e,t,n){var a;te?(a=ie(),c.ZP.removeEventListener(a,c.ZP.whichTransitionEvent(),ne,{once:!0}),a.classList.remove("hide"),a.offsetWidth,a.classList.remove("nowPlayingBar-hidden")):ge(),$=t;var i=l.O.getPlayerInfo(),r=t.PlayState||{};oe(r.IsPaused);var d=i.supportedCommands;if(K=d,-1===d.indexOf("SetRepeatMode")?H.classList.add("hide"):H.classList.remove("hide"),se(l.O.getRepeatMode()),me(),ue(r.IsMuted,r.VolumeLevel),Q&&!Q.dragging){Q.disabled=!r.CanSeek;var p=t.MediaSource&&null==t.MediaSource.RunTimeTicks;Q.setIsClear(p)}var f=t.NowPlayingItem||{};le(r.PositionTicks,f.RunTimeTicks,l.O.getBufferedRanges(n)),function(e){var t=e.NowPlayingItem,n=t?u.Z.getNowPlayingNames(t):[];if(j.innerHTML="",n){var a=document.createElement("div"),i=document.createElement("div");if(i.classList.add("nowPlayingBarSecondaryText"),n.length>1&&(n[1].secondary=!0,n[1].text)){var r=document.createElement("a");r.innerText=n[1].text,i.appendChild(r)}if(n[0].text){var l=document.createElement("a");l.innerText=n[0].text,a.appendChild(l)}j.appendChild(a),j.appendChild(i)}var d=t?function(e,t){if(!e)throw new Error("item cannot be null!");if("Episode"!==e.Type)return null;if((t=t||{}).type=t.type||"Primary","Primary"===t.type&&e.SeriesPrimaryImageTag)return t.tag=e.SeriesPrimaryImageTag,g.Z.getApiClient(e.ServerId).getScaledImageUrl(e.SeriesId,t);if("Thumb"===t.type){if(e.SeriesThumbImageTag)return t.tag=e.SeriesThumbImageTag,g.Z.getApiClient(e.ServerId).getScaledImageUrl(e.SeriesId,t);if(e.ParentThumbImageTag)return t.tag=e.ParentThumbImageTag,g.Z.getApiClient(e.ServerId).getScaledImageUrl(e.ParentThumbItemId,t)}return null}(t,{height:70})||function(e,t){if(!e)throw new Error("item cannot be null!");return(t=t||{}).type=t.type||"Primary",e.ImageTags&&e.ImageTags[t.type]?(t.tag=e.ImageTags[t.type],g.Z.getApiClient(e.ServerId).getScaledImageUrl(e.PrimaryImageItemId||e.Id,t)):e.AlbumId&&e.AlbumPrimaryImageTag?(t.tag=e.AlbumPrimaryImageTag,g.Z.getApiClient(e.ServerId).getScaledImageUrl(e.AlbumId,t)):null}(t,{height:70}):null;if(d!==U&&(d?(U=d,o.default.lazyImage(q,U),q.style.display=null,j.style.marginLeft=null):(U=null,q.style.backgroundImage="",q.style.display="none",j.style.marginLeft="1em")),t.Id){var c=g.Z.getApiClient(t.ServerId);c.getItem(c.getCurrentUserId(),t.Id).then((function(e){var t=e.UserData||{},n=null==t.Likes?"":t.Likes;if(!s.Z.mobile){var a=G.querySelector(".btnToggleContextMenu"),i=a.cloneNode(!0);a.parentNode.replaceChild(i,a);var r={play:!1,queue:!1,stopPlayback:!0,clearQueue:!0,positionTo:a=G.querySelector(".btnToggleContextMenu")};c.getCurrentUser().then((function(t){a.addEventListener("click",(function(){m.default.show(Object.assign({item:e,user:t},r))}))}))}_.innerHTML='<button is="emby-ratingbutton" type="button" class="listItemButton mediaButton paper-icon-button-light" data-id="'+e.Id+'" data-serverid="'+e.ServerId+'" data-itemtype="'+e.Type+'" data-likes="'+n+'" data-isfavorite="'+t.IsFavorite+'"><span class="material-icons favorite" aria-hidden="true"></span></button>'}))}else _.innerHTML=""}(t)}(0,t,this)):ge()}}function ve(){if(W){var e=(new Date).getTime();if(!(e-X<700)){X=e;var t=this;ee=l.O.duration(t),le(1e4*l.O.currentTime(t),ee,l.O.getBufferedRanges(t))}}}function he(){W&&ue(this.isMuted(),this.getVolume())}function be(e,t){var n=l.O.getPlayerState(e);ye.call(e,{type:t},n)}function we(e){e!==M&&(function(){var e=M;e&&(i.Events.off(e,"playbackstart",de),i.Events.off(e,"statechange",de),i.Events.off(e,"repeatmodechange",ce),i.Events.off(e,"shufflequeuemodechange",me),i.Events.off(e,"playbackstop",pe),i.Events.off(e,"volumechange",he),i.Events.off(e,"pause",fe),i.Events.off(e,"unpause",fe),i.Events.off(e,"timeupdate",ve),M=null,ge())}(),M=e,e&&(be(e,"init"),i.Events.on(e,"playbackstart",de),i.Events.on(e,"statechange",de),i.Events.on(e,"repeatmodechange",ce),i.Events.on(e,"shufflequeuemodechange",me),i.Events.on(e,"playbackstop",pe),i.Events.on(e,"volumechange",he),i.Events.on(e,"pause",fe),i.Events.on(e,"unpause",fe),i.Events.on(e,"timeupdate",ve)))}i.Events.on(l.O,"playerchange",(function(){we(l.O.getCurrentPlayer())})),we(l.O.getCurrentPlayer()),document.addEventListener("viewbeforeshow",(function(e){e.detail.options.enableMediaControl?te||(te=!0,M?be(M,"refresh"):ge()):te&&(te=!1,ge())}))},92642:function(e,t,n){n(61013),t.Z={getNowPlayingNames:function(e,t){var n=e,a=null,i=e.Name;e.AlbumId&&"Audio"===e.MediaType&&(n={Id:e.AlbumId,Name:e.Album,Type:"MusicAlbum",IsFolder:!0}),"Video"===e.MediaType&&(null!=e.IndexNumber&&(i=e.IndexNumber+" - "+i),null!=e.ParentIndexNumber&&(i=e.ParentIndexNumber+"."+i));var r="";e.ArtistItems&&e.ArtistItems.length?(a={Id:e.ArtistItems[0].Id,Name:e.ArtistItems[0].Name,Type:"MusicArtist",IsFolder:!0},r=e.ArtistItems.map((function(e){return e.Name})).join(", ")):e.Artists&&e.Artists.length?r=e.Artists.join(", "):e.SeriesName||e.Album?(r=i,i=e.SeriesName||e.Album,a=n,n=e.SeriesId?{Id:e.SeriesId,Name:e.SeriesName,Type:"Series",IsFolder:!0}:null):e.ProductionYear&&!1!==t&&(r=e.ProductionYear);var o=[];return o.push({text:i,item:n}),r&&o.push({text:r,item:a}),o}}},76560:function(e,t,n){n.r(t);var a=n(1197),i=n(47005),r=n(33942),o=n(78066),s=n(53913);function l(){var e=this,t=e.getAttribute("data-id"),n=e.getAttribute("data-serverid"),a=s.Z.getApiClient(n),i=this.getAttribute("data-likes");i="true"===i||"false"!==i&&null,function(e,t,n,a,i){return t.updateFavoriteStatus(t.getCurrentUserId(),n,!i)}(0,a,t,0,"true"===this.getAttribute("data-isfavorite")).then((function(t){d(e,t.Likes,t.IsFavorite)}))}function u(e,t,n){n.ItemId===this.getAttribute("data-id")&&d(this,n.Likes,n.IsFavorite)}function d(e,t,n,a){var i=e.querySelector(".material-icons");n?(i&&(i.classList.add("favorite"),i.classList.add("ratingbutton-icon-withrating")),e.classList.add("ratingbutton-withrating")):(i&&(i.classList.add("favorite"),i.classList.remove("ratingbutton-icon-withrating")),e.classList.remove("ratingbutton-withrating")),!1!==a&&(e.setAttribute("data-isfavorite",n),e.setAttribute("data-likes",null===t?"":t)),c(e,n)}function c(e,t){e.title=t?r.ZP.translate("Favorite"):r.ZP.translate("AddToFavorites");var n=e.querySelector(".button-text");n&&(n.innerText=e.title)}function m(e){var t,n,r;e.removeEventListener("click",l),(r=(t=e)[n="UserDataChanged"])&&(i.Events.off(a.default,n,r),t[n]=null)}function g(e){var t,n,r;m(e),e.addEventListener("click",l),t=e,n="UserDataChanged",r=u.bind(t),i.Events.on(a.default,n,r),t[n]=r}var p=Object.create(o.Z);p.createdCallback=function(){o.Z.createdCallback&&o.Z.createdCallback.call(this)},p.attachedCallback=function(){o.Z.attachedCallback&&o.Z.attachedCallback.call(this);var e=this.getAttribute("data-id"),t=this.getAttribute("data-serverid");if(e&&t){var n=this.getAttribute("data-likes");d(this,n="true"===n||"false"!==n&&null,"true"===this.getAttribute("data-isfavorite"),!1),g(this)}else c(this)},p.detachedCallback=function(){o.Z.detachedCallback&&o.Z.detachedCallback.call(this),m(this)},p.setItem=function(e){if(e){this.setAttribute("data-id",e.Id),this.setAttribute("data-serverid",e.ServerId);var t=e.UserData||{};d(this,t.Likes,t.IsFavorite),g(this)}else this.removeAttribute("data-id"),this.removeAttribute("data-serverid"),this.removeAttribute("data-likes"),this.removeAttribute("data-isfavorite"),m(this)},document.registerElement("emby-ratingbutton",{prototype:p,extends:"button"})},74365:function(e,t,n){var a=n(54933),i=n.n(a),r=n(93476),o=n.n(r)()(i());o.push([e.id,".appfooter{bottom:0;contain:layout style;left:0;padding-bottom:env(safe-area-inset-bottom);padding-left:env(safe-area-inset-left);padding-right:env(safe-area-inset-right);position:fixed;right:0;transition:-webkit-transform .18s linear;transition:transform .18s linear;transition:transform .18s linear,-webkit-transform .18s linear;z-index:10}.appfooter:empty{padding:0}.appfooter.headroom--unpinned{-webkit-transform:translateY(100%)!important;transform:translateY(100%)!important}",""]),t.Z=o},28936:function(e,t,n){var a=n(54933),i=n.n(a),r=n(93476),o=n.n(r)()(i());o.push([e.id,".nowPlayingBarInfoContainer{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;height:100%;overflow:hidden;width:40%}.nowPlayingBar{contain:layout style;cursor:pointer;text-align:center;transition:-webkit-transform .2s ease-out;transition:transform .2s ease-out;transition:transform .2s ease-out,-webkit-transform .2s ease-out;will-change:transform}.nowPlayingBar-hidden{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}.nowPlayingBarTop{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;-webkit-flex-direction:row;flex-direction:row;height:4.2em;-webkit-justify-content:center;justify-content:center;position:relative}.mediaButton,.nowPlayingBarUserDataButtons .btnUserItemRating{margin:0;text-align:center;vertical-align:middle}.mediaButton{font-size:120%}.nowPlayingBar .nowPlayingImage{background-position:50%;background-repeat:no-repeat;background-size:contain;-webkit-flex-shrink:0;flex-shrink:0;height:70%;width:4.2em}.nowPlayingBarText{font-size:92%;margin-left:.5em;margin-right:1em;overflow:hidden;text-align:left;text-overflow:ellipsis;white-space:nowrap}.nowPlayingBarCenter,.nowPlayingBarText{-webkit-flex-grow:1;flex-grow:1;vertical-align:middle}.nowPlayingBarCenter{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;-webkit-justify-content:center;justify-content:center;position:absolute;text-align:center;z-index:2}.nowPlayingBarPositionContainer{left:0;position:absolute!important;right:0;top:-.56em;z-index:1}.headroom--unpinned .nowPlayingBarPositionContainer,.noMediaProgress .nowPlayingBarPositionContainer{display:none}.nowPlayingBarRight{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;-webkit-flex-shrink:0;flex-shrink:0;-webkit-justify-content:flex-end;justify-content:flex-end;margin:0 .5em 0 auto;position:relative;z-index:2}.nowPlayingBarCurrentTime{display:inline-block;padding-left:1.5em;text-align:center;vertical-align:middle}.nowPlayingBarVolumeSliderContainer{margin-right:2em}.nowPlayingBarUserDataButtons{display:inline-block}.nowPlayingBarPositionSlider::-webkit-slider-thumb{height:1.2em!important;width:1.2em!important}@media (max-width:70em){.nowPlayingBarRight .nowPlayingBarUserDataButtons{display:none}}@media (max-width:66em){.nowPlayingBar .btnShuffleQueue,.toggleRepeatButton{display:none!important}}@media (max-width:80em){.nowPlayingBarCenter .nowPlayingBarCurrentTime,.nowPlayingBarCenter .stopButton{display:none!important}.nowPlayingBarInfoContainer{width:45%}}.layout-desktop .nowPlayingBarRight .playPauseButton,.layout-mobile .nowPlayingBarRight button:not(.playPauseButton):not(.nextTrackButton),.layout-mobile .nowPlayingBarRight div,.layout-mobile .nowPlayingBarRight input,.layout-tv .nowPlayingBarRight .playPauseButton{display:none}@media (max-width:56em){.nowPlayingBarCenter{display:none!important}}@media (max-width:60em){.nowPlayingBarRight .nowPlayingBarVolumeSliderContainer{display:none!important}.nowPlayingBarInfoContainer{width:100%}}@media (max-width:24em){.nowPlayingBar .muteButton,.nowPlayingBar .unmuteButton{display:none}}",""]),t.Z=o}}]);
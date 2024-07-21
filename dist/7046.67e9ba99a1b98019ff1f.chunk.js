"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7046],{27046:function(e,t,n){n.r(t),n.d(t,{getCommands:function(){return h},show:function(){return y}}),n(5769),n(63238),n(61418),n(17460),n(14078),n(52077),n(911),n(23938);var a=n(47518),i=n(44619),r=n(33942),o=n(78407),s=n(94389),l=n(80135),c=n(71616),d=n(53218),u=n(53913),m=n(25152);function h(e){var t=e.item,n=e.user,i=d.O.canPlay(t),o=(a.Z.operaTv||a.Z.web0s)&&!n.Policy.IsAdministrator,l=[];i&&"Photo"!==t.MediaType&&(!1!==e.play&&l.push({name:r.ZP.translate("Play"),id:"resume",icon:"play_arrow"}),e.playAllFromHere&&"Program"!==t.Type&&"TvChannel"!==t.Type&&l.push({name:r.ZP.translate("PlayAllFromHere"),id:"playallfromhere",icon:"play_arrow"})),null!==d.O.getCurrentPlayer()&&(e.stopPlayback&&l.push({name:r.ZP.translate("StopPlayback"),id:"stopPlayback",icon:"stop"}),e.clearQueue&&l.push({name:r.ZP.translate("ClearQueue"),id:"clearQueue",icon:"clear_all"})),d.O.canQueue(t)&&(!1!==e.queue&&l.push({name:r.ZP.translate("AddToPlayQueue"),id:"queue",icon:"playlist_add"}),!1!==e.queue&&l.push({name:r.ZP.translate("PlayNext"),id:"queuenext",icon:"playlist_add"})),(t.IsFolder||"MusicArtist"===t.Type||"MusicGenre"===t.Type)&&"livetv"!==t.CollectionType&&!1!==e.shuffle&&l.push({name:r.ZP.translate("Shuffle"),id:"shuffle",icon:"shuffle"}),"Audio"!==t.MediaType&&"MusicAlbum"!==t.Type&&"MusicArtist"!==t.Type&&"MusicGenre"!==t.Type||!1===e.instantMix||c.ZP.isLocalItem(t)||l.push({name:r.ZP.translate("InstantMix"),id:"instantmix",icon:"explore"}),l.length&&l.push({divider:!0}),o||(c.ZP.supportsAddingToCollection(t)&&l.push({name:r.ZP.translate("AddToCollection"),id:"addtocollection",icon:"playlist_add"}),c.ZP.supportsAddingToPlaylist(t)&&!1!==e.playlist&&l.push({name:r.ZP.translate("AddToPlaylist"),id:"addtoplaylist",icon:"playlist_add"})),"Timer"===t.Type&&n.Policy.EnableLiveTvManagement&&!1!==e.cancelTimer&&l.push({name:r.ZP.translate("CancelRecording"),id:"canceltimer",icon:"cancel"}),"Recording"===t.Type&&"InProgress"===t.Status&&n.Policy.EnableLiveTvManagement&&!1!==e.cancelTimer&&l.push({name:r.ZP.translate("CancelRecording"),id:"canceltimer",icon:"cancel"}),"SeriesTimer"===t.Type&&n.Policy.EnableLiveTvManagement&&!1!==e.cancelTimer&&l.push({name:r.ZP.translate("CancelSeries"),id:"cancelseriestimer",icon:"cancel"}),t.CanDelete&&!1!==e.deleteItem&&("Playlist"===t.Type||"BoxSet"===t.Type?l.push({name:r.ZP.translate("Delete"),id:"delete",icon:"delete"}):l.push({name:r.ZP.translate("DeleteMedia"),id:"delete",icon:"delete"})),t.CanDownload&&s.M.supports("filedownload")&&"Book"!==t.Type&&(l.push({name:r.ZP.translate("Download"),id:"download",icon:"file_download"}),l.push({name:r.ZP.translate("CopyStreamURL"),id:"copy-stream",icon:"content_copy"})),l.length&&l.push({divider:!0});var u=c.ZP.canEdit(n,t);if(u&&!1!==e.edit&&"SeriesTimer"!==t.Type){var m="Timer"===t.Type||"SeriesTimer"===t.Type?r.ZP.translate("Edit"):r.ZP.translate("EditMetadata");l.push({name:m,id:"edit",icon:"edit"})}return c.ZP.canEditImages(n,t)&&!1!==e.editImages&&l.push({name:r.ZP.translate("EditImages"),id:"editimages",icon:"image"}),u&&("Video"!==t.MediaType||"TvChannel"===t.Type||"Program"===t.Type||"Virtual"===t.LocationType||"Recording"===t.Type&&"Completed"!==t.Status||!1!==e.editSubtitles&&l.push({name:r.ZP.translate("EditSubtitles"),id:"editsubtitles",icon:"closed_caption"})),!1!==e.identify&&c.ZP.canIdentify(n,t)&&l.push({name:r.ZP.translate("Identify"),id:"identify",icon:"edit"}),t.MediaSources&&!1!==e.moremediainfo&&l.push({name:r.ZP.translate("MoreMediaInfo"),id:"moremediainfo",icon:"info"}),"Program"===t.Type&&!1!==e.record&&t.TimerId&&l.push({name:r.ZP.translate("ManageRecording"),id:"record",icon:"fiber_manual_record"}),"Program"===t.Type&&!1!==e.record&&(t.TimerId||l.push({name:r.ZP.translate("Record"),id:"record",icon:"fiber_manual_record"})),c.ZP.canRefreshMetadata(t,n)&&l.push({name:r.ZP.translate("RefreshMetadata"),id:"refresh",icon:"refresh"}),t.PlaylistItemId&&e.playlistId&&l.push({name:r.ZP.translate("RemoveFromPlaylist"),id:"removefromplaylist",icon:"remove"}),e.collectionId&&l.push({name:r.ZP.translate("RemoveFromCollection"),id:"removefromcollection",icon:"remove"}),o||!0===e.share&&c.ZP.canShare(t,n)&&l.push({name:r.ZP.translate("Share"),id:"share",icon:"share"}),!1!==e.sync&&c.ZP.canSync(n,t)&&l.push({name:r.ZP.translate("Sync"),id:"sync",icon:"sync"}),!1!==e.openAlbum&&t.AlbumId&&"Photo"!==t.MediaType&&l.push({name:r.ZP.translate("ViewAlbum"),id:"album",icon:"album"}),!1!==e.openArtist&&t.AlbumArtists&&t.AlbumArtists.length&&l.push({name:r.ZP.translate("ViewAlbumArtist"),id:"artist",icon:"person"}),l}function p(e,t,n,a){return function(){e({command:t,updated:n,deleted:a})}}function f(e,t,n,a){var i="play";n&&(i=a?"queueNext":"queue");var r=0;t&&e.UserData&&e.UserData.PlaybackPositionTicks&&(r=e.UserData.PlaybackPositionTicks),"Program"===e.Type?d.O[i]({ids:[e.ChannelId],startPositionTicks:r,serverId:e.ServerId}):d.O[i]({items:[e],startPositionTicks:r})}function y(e){var t=h(e);return t.length?o.default.show({items:t,positionTo:e.positionTo,resolveOnClick:["share"]}).then((function(t){return function(e,t,a){var o=e.Id,s=e.ServerId,c=u.Z.getApiClient(s);return new Promise((function(u,h){switch(t){case"addtocollection":n.e(6372).then(n.bind(n,86372)).then((function(e){new(0,e.default)({items:[o],serverId:s}).then(p(u,t,!0),p(u,t))}));break;case"addtoplaylist":n.e(8013).then(n.bind(n,8013)).then((function(e){new(0,e.default)({items:[o],serverId:s}).then(p(u,t,!0),p(u,t))}));break;case"download":n.e(4111).then(n.bind(n,84111)).then((function(n){var a=c.getItemDownloadUrl(o);n.download([{url:a,itemId:o,serverId:s,title:e.Name,filename:e.Path.replace(/^.*[\\/]/,"")}]),p(p(u,t),t)()}));break;case"copy-stream":var y=c.getItemDownloadUrl(o);(0,i.J)(y).then((function(){(0,m.Z)(r.ZP.translate("CopyStreamURLSuccess"))})).catch((function(){prompt(r.ZP.translate("CopyStreamURL"),y)})),p(u,t)();break;case"editsubtitles":n.e(2912).then(n.bind(n,52912)).then((function(e){e.default.show(o,s).then(p(u,t,!0),p(u,t))}));break;case"edit":(function(e,t){return new Promise((function(a,i){var r=e.serverInfo().Id;"Timer"===t.Type?n.e(3202).then(n.bind(n,3202)).then((function(e){e.default.show(t.Id,r).then(a,i)})):"SeriesTimer"===t.Type?n.e(3940).then(n.bind(n,63940)).then((function(e){e.default.show(t.Id,r).then(a,i)})):n.e(4420).then(n.bind(n,84420)).then((function(e){e.default.show(t.Id,r).then(a,i)}))}))})(c,e).then(p(u,t,!0),p(u,t));break;case"editimages":n.e(1121).then(n.bind(n,71121)).then((function(e){e.show({itemId:o,serverId:s}).then(p(u,t,!0),p(u,t))}));break;case"identify":Promise.resolve().then(n.bind(n,91818)).then((function(e){e.show(o,s).then(p(u,t,!0),p(u,t))}));break;case"moremediainfo":n.e(4609).then(n.bind(n,74609)).then((function(e){e.show(o,s).then(p(u,t),p(u,t))}));break;case"refresh":!function(e,t){n.e(4231).then(n.bind(n,14231)).then((function(n){new(0,n.default)({itemIds:[t.Id],serverId:e.serverInfo().Id,mode:"CollectionFolder"===t.Type?"scan":null}).show()}))}(c,e),p(u,t)();break;case"open":l.appRouter.showItem(e),p(u,t)();break;case"play":f(e,!1),p(u,t)();break;case"resume":f(e,!0),p(u,t)();break;case"queue":f(e,!1,!0),p(u,t)();break;case"queuenext":f(e,!1,!0,!0),p(u,t)();break;case"stopPlayback":d.O.stop();break;case"clearQueue":d.O.clearQueue();break;case"record":Promise.all([n.e(294),n.e(5936)]).then(n.bind(n,55936)).then((function(e){e.default.show(o,s).then(p(u,t,!0),p(u,t))}));break;case"shuffle":d.O.shuffle(e),p(u,t)();break;case"instantmix":d.O.instantMix(e),p(u,t)();break;case"delete":(function(e,t){return new Promise((function(e,a){n.e(6860).then(n.bind(n,96860)).then((function(n){n.deleteItem({item:t,navigate:!1}).then((function(){e(!0)}),a)}))}))})(0,e).then(p(u,t,!0,!0),p(u,t));break;case"share":navigator.share({title:e.Name,text:e.Overview,url:"".concat(c.serverAddress(),"/web/index.html").concat(l.appRouter.getRouteUrl(e))});break;case"album":l.appRouter.showItem(e.AlbumId,e.ServerId),p(u,t)();break;case"artist":l.appRouter.showItem(e.AlbumArtists[0].Id,e.ServerId),p(u,t)();break;case"playallfromhere":case"queueallfromhere":p(u,t)();break;case"removefromplaylist":c.ajax({url:c.getUrl("Playlists/"+a.playlistId+"/Items",{EntryIds:[e.PlaylistItemId].join(",")}),type:"DELETE"}).then((function(){p(u,t,!0)()}));break;case"removefromcollection":c.ajax({type:"DELETE",url:c.getUrl("Collections/"+a.collectionId+"/Items",{Ids:[e.Id].join(",")})}).then((function(){p(u,t,!0)()}));break;case"canceltimer":!function(e,t,a,i){Promise.resolve().then(n.bind(n,58104)).then((function(e){var n=e.default,r=t.TimerId||t.Id;n.cancelTimerWithConfirmation(r,t.ServerId).then((function(){p(a,i,!0)()}))}))}(0,e,u,t);break;case"cancelseriestimer":!function(e,t,a,i){Promise.resolve().then(n.bind(n,58104)).then((function(e){e.default.cancelSeriesTimerWithConfirmation(t.Id,t.ServerId).then((function(){p(a,i,!0)()}))}))}(0,e,u,t);break;default:h()}}))}(e.item,t,e)})):Promise.reject()}t.default={getCommands:h,show:y}},44619:function(e,t,n){n.d(t,{J:function(){return r}}),n(63238),n(61418);var a=n(47518);function i(e){var t,n=document.createElement("textarea");if(n.value=e,document.body.appendChild(n),n.focus(),a.Z.iOS&&a.Z.iOSVersion<13.4){var i=document.createRange();i.selectNodeContents(n);var r=window.getSelection();r.removeAllRanges(),r.addRange(i),n.setSelectionRange(0,999999)}else n.select();try{t=document.execCommand("copy")?Promise.resolve():Promise.reject()}catch(e){t=Promise.reject()}return document.body.removeChild(n),t}function r(e){return void 0===navigator.clipboard?i(e):navigator.clipboard.writeText(e).catch((function(){return i(e)}))}}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){e.exports=a(20)},17:function(e,t,a){},18:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(10),o=a.n(i),s=(a(17),a(18),a(3)),c=a(4),l=a(6),u=a(5),h=a(7),m=a(8),d=a(1),f=a.n(d),p=a(2),v="yotu3p1ebkzuqov5hy49v1tvtdcvem",w=new Map,g=new Map,b=6e4;function E(e){return y.apply(this,arguments)}function y(){return(y=Object(p.a)(f.a.mark(function e(t){var a,n;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S(t);case 2:return a=e.sent,e.next=5,N(a.id,a.login);case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}},e)}))).apply(this,arguments)}function S(e){return O.apply(this,arguments)}function O(){return(O=Object(p.a)(f.a.mark(function e(t){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!w.has(t)){e.next=2;break}return e.abrupt("return",w.get(t).data);case 2:return e.abrupt("return",new Promise(function(){var e=Object(p.a)(f.a.mark(function e(a,n){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:fetch("https://api.twitch.tv/helix/users?login=".concat(t),{method:"GET",headers:{"Content-Type":"application/json","Client-ID":v}}).then(function(e){return e.json()}).then(function(e){e.data.length?(w.set(t,{data:e.data[0],timestamp:Date.now()}),a(e.data[0])):n("Request error: no user '".concat(t,"' found."))}).catch(function(e){return n("Request error: error while requesting user '".concat(t))});case 1:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}()));case 3:case"end":return e.stop()}},e)}))).apply(this,arguments)}function N(e,t){return j.apply(this,arguments)}function j(){return(j=Object(p.a)(f.a.mark(function e(t,a){var n;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!g.has(a)){e.next=4;break}if(!((n=g.get(a)).timestamp>Date.now()-b)){e.next=4;break}return e.abrupt("return",n.data);case 4:return e.abrupt("return",new Promise(function(){var e=Object(p.a)(f.a.mark(function e(n,r){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:fetch("https://api.twitch.tv/helix/streams?first=1&user_id=".concat(t),{method:"GET",headers:{"Content-Type":"application/json","Client-ID":v}}).then(function(e){return e.json()}).then(function(e){e.data.length?(g.set(a,{data:e.data[0],timestamp:Date.now()}),n(e.data[0])):n(null)}).catch(function(e){return r("Request error: error while requesting stream for user '".concat(a))});case 1:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}()));case 5:case"end":return e.stop()}},e)}))).apply(this,arguments)}var k=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={stream:null},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=Object(p.a)(f.a.mark(function e(){var t;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E(this.props.channelId);case 2:(t=e.sent)&&this.setState({stream:t});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){if(!this.state.stream)return null;var e=this.state.stream,t=e.title,a=e.type,n=e.viewer_count,i="live"===a?" live":"";return r.a.createElement("span",{className:"ViewerCount",title:t},r.a.createElement("span",{className:"circle"+i},r.a.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},r.a.createElement("circle",{cx:"5",cy:"5",r:"5"}))),r.a.createElement("span",{className:"count"},n))}}]),t}(r.a.Component),C=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).addToSavedList=function(){var e=Object(p.a)(f.a.mark(function e(t){var n,r,i,o;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=t.target.stream.value,e.next=4,S(n);case 4:r=e.sent,i=r.display_name,(o=a.state.savedList).add(i),a.saveSavedList(o);case 9:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.changeStream=function(e){a.ref&&(a.ref.value=e);var t=new CustomEvent("streamChange",{detail:{streamName:e}});window.dispatchEvent(t)},a.getSavedList=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=window.localStorage.getItem("savedList")||"[]",n=new Set(Object(m.a)(JSON.parse(t).sort()));if(!e)return n;a.setState({savedList:n})},a.handleEnter=function(e){e.keyCode&&13===e.keyCode&&(e.preventDefault(),e.stopPropagation(),a.onStreamNameChange(e))},a.onStreamNameChange=function(e){e.preventDefault(),e.target.value!==a.props.streamName&&a.changeStream(e.target.value)},a.removeFromSavedList=function(e){var t=a.getSavedList(!1);t.delete(e),a.saveSavedList(t)},a.saveSavedList=function(e){a.setState({savedList:new Set(Object(m.a)(e))}),window.localStorage.setItem("savedList",JSON.stringify(Object(m.a)(e))),a.forceUpdate()},a.showFavourites=function(){a.setState({favouritesOpen:!0})},a.hideFavourites=function(e){a.setState({favouritesOpen:!1})},a.state={favouritesOpen:!1,savedList:[]},a.ref=null,a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.getSavedList()}},{key:"render",value:function(){var e=this,t=Object(m.a)(this.state.savedList).map(function(t){return r.a.createElement("li",{key:t},r.a.createElement("span",{className:"stream",onClick:function(){return e.changeStream(t)}},t),r.a.createElement(k,{channelId:t}),r.a.createElement("button",{title:"Remove from Favourites list",onClick:function(){return e.removeFromSavedList(t)}},"Remove"))});return r.a.createElement("form",{className:"StreamSelector",onBlur:this.hideFavourites,onFocus:this.showFavourites,onMouseEnter:this.showFavourites,onMouseLeave:this.hideFavourites,onSubmit:this.addToSavedList},r.a.createElement("label",{htmlFor:"stream"},"Stream:"),r.a.createElement("span",{className:"streamInputContainer"},r.a.createElement("input",{ref:function(t){return e.ref=t},id:"stream",name:"stream",type:"text",defaultValue:this.props.streamName,onBlur:this.onStreamNameChange,onFocus:function(e){return e.target.select()},onKeyDown:this.handleEnter,onKeyUp:this.handleEnter}),r.a.createElement("button",{type:"submit",title:"Add to Favourites"},"+")),r.a.createElement("button",{type:"button",className:this.state.favouritesOpen?"open":"",title:(this.state.favouritesOpen?"Open":"Close")+" Favourites list",onClick:this.toggleFavourites},"v"),this.state.favouritesOpen&&r.a.createElement("div",{className:"favourites"},r.a.createElement("small",null,"Favourites list"),r.a.createElement("ul",null,t.length?t:"- no favourites saved -")))}}]),t}(r.a.Component),L=function(e){function t(e){var a;Object(s.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).onDragEnd=function(e){var t=e.target.offsetParent.offsetWidth-e.clientX;window.localStorage.setItem("splitter",t),a.setState({size:"".concat(t,"px")})},a.toggleChatVisibility=function(){a.setState({hidden:!a.state.hidden})};var n=window.matchMedia("(orientation: landscape)").matches?"horizontal":"vertical",r=window.localStorage.getItem("splitter");return a.state={dragging:!1,hidden:!1,orientation:n,size:r?"".concat(r,"px"):"1fr"},matchMedia("(orientation: landscape)").addEventListener("change",function(e){a.setState({orientation:e.matches?"horizontal":"vertical"})}),a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state,t=e.orientation,a=e.size,n=e.hidden,i=n?"1fr":"1fr 5px ".concat(a);return r.a.createElement("div",{className:"Splitter grid ".concat(t),style:{gridTemplateColumns:i}},r.a.createElement("div",{className:"hideChatToggleContainer"},this.props.children[0],r.a.createElement("div",{className:"hideChatToggle",onClick:this.toggleChatVisibility},r.a.createElement("span",null,n?"Show":"Hide",r.a.createElement("br",null),"chat"))),n?null:r.a.createElement("div",{className:"drag ".concat(t),draggable:!0,onDragEnd:this.onDragEnd,title:"Drag to resize"}),n?null:this.props.children[1]||null)}}]),t}(r.a.Component);function x(e){var t=e.streamName,a="https://www.twitch.tv/embed/".concat(t,"/chat?darkpopout");return r.a.createElement("div",{className:"TwitchChat"},r.a.createElement("iframe",{title:"Twitch Chat",src:a,frameBorder:"0"}))}function F(e){var t=e.streamName,a="https://player.twitch.tv/?volume=0.3&channel=".concat(t,"&autoplay=false");return r.a.createElement("div",{className:"TwitchPlayer"},r.a.createElement("iframe",{title:"Twitch Player",src:a,frameBorder:"0",allowFullScreen:!0}))}var T="monstercat",D=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).getQuery=function(){var e=new URLSearchParams(window.location.search).get("stream");return e||(window.localStorage.getItem("lastWatched")||null)},a.setQuery=function(e){window.localStorage.setItem("lastWatched",e);var t=new URLSearchParams(window.location.search);t.set("stream",e),window.history.replaceState({},"","".concat(window.location.pathname,"?").concat(t))},a.state={streamName:a.getQuery()||T},window.addEventListener("streamChange",function(e){a.setQuery(e.detail.streamName),a.setState({streamName:e.detail.streamName})}),a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"TwitchLite"+(this.state.chatHidden?" hide-chat":"")},r.a.createElement(L,null,r.a.createElement("div",{className:"playerPanel"},r.a.createElement(F,{streamName:this.state.streamName})),r.a.createElement("div",{className:"chatPanel"},r.a.createElement(C,{streamName:this.state.streamName}),r.a.createElement(x,{streamName:this.state.streamName}))))}}]),t}(r.a.Component);var I=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(D,null))},P=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function R(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}o.a.render(r.a.createElement(I,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/twitch-lite",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/twitch-lite","/service-worker.js");P?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):R(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):R(t,e)})}}()}},[[11,1,2]]]);
//# sourceMappingURL=main.1a6a19d1.chunk.js.map
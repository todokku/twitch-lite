(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),o=a.n(c),i=(a(14),a(15),a(1)),m=a(2),s=a(4),l=a(3),u=a(5),h=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).onStreamNameChange=function(e){if(e.target.value!==a.props.streamName){var t={streamName:e.target.value},n=new CustomEvent("streamChange",{detail:t});window.dispatchEvent(n)}},a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"StreamSelector"},r.a.createElement("label",{htmlFor:"stream"},"Stream:\xa0\xa0"),r.a.createElement("input",{type:"text",name:"stream",id:"stream",defaultValue:this.props.streamName,onFocus:function(e){return e.target.select()},onBlur:this.onStreamNameChange,onKeyUp:function(t){return t.keyCode&&13===t.keyCode&&e.onStreamNameChange(t)}}))}}]),t}(r.a.Component),w=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).getIFrameSource=function(e){return"https://www.twitch.tv/embed/".concat(e,"/chat?darkpopout")},a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"TwitchChat"},r.a.createElement("iframe",{src:this.getIFrameSource(this.props.streamName),frameBorder:"0"}))}}]),t}(r.a.Component),d=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).getIFrameSource=function(e){return"https://player.twitch.tv/?volume=0.3&channel=".concat(e)},a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"TwitchPlayer"},r.a.createElement("iframe",{src:this.getIFrameSource(this.props.streamName),frameBorder:"0",allowFullScreen:!0}))}}]),t}(r.a.Component),p=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(l.a)(t).call(this,e))).getQuery=function(){var e=new URLSearchParams(window.location.search).get("stream");return e||(window.localStorage.getItem("stream")||null)},a.setQuery=function(e){window.localStorage.setItem("stream",e);var t=new URLSearchParams(window.location.search);t.set("stream",e),window.history.replaceState({},"","".concat(window.location.pathname,"?").concat(t))},a.changeStream=function(e){a.setState({streamName:e})},a.state={streamName:a.getQuery()||"monstercat"},window.addEventListener("streamChange",function(e){a.setQuery(e.detail.streamName),a.changeStream(e.detail.streamName)}),a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"TwitchLite grid"},r.a.createElement(d,{streamName:this.state.streamName}),r.a.createElement("div",{className:"chatPanel"},r.a.createElement(h,{streamName:this.state.streamName}),r.a.createElement(w,{streamName:this.state.streamName})))}}]),t}(r.a.Component);var f=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(p,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,a){e.exports=a(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.a231963e.chunk.js.map
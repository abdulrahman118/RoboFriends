(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{19:function(e,n,t){e.exports=t(34)},30:function(e,n,t){},31:function(e,n,t){},32:function(e,n,t){},34:function(e,n,t){"use strict";t.r(n);var o=t(0),r=t.n(o),a=t(4),i=t.n(a),c=t(5),s=t(3),l={searchField:""},u={isPending:!1,robots:[],error:""},d=t(12),h=t(13),f=(t(30),t(14)),b=t(15),g=t(17),p=t(16),E=t(18),m=function(e){var n=e.id,t=e.name,o=e.email;return r.a.createElement("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},r.a.createElement("img",{alt:"robot",src:"https://robohash.org/".concat(n,"?size=200x200")}),r.a.createElement("div",null,r.a.createElement("h2",null,t),r.a.createElement("p",null,o)))},v=function(e){var n=e.robots;return r.a.createElement("div",null,n.map((function(e){return r.a.createElement(m,{key:e.id,id:e.id,name:e.name,email:e.email})})))},w=function(e){var n=e.onSearchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",onChange:n,type:"seach",placeholder:"search Robofriends"}))},R=(t(31),function(e){return r.a.createElement("div",{style:{overflowY:"scroll",height:"500px",border:"5px solid"}},e.children)}),O=(t(32),function(e){function n(){return Object(f.a)(this,n),Object(g.a)(this,Object(p.a)(n).apply(this,arguments))}return Object(E.a)(n,e),Object(b.a)(n,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,n=e.searchField,t=e.onSearchChange,o=e.robots,a=e.isPending,i=o.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return a?r.a.createElement("h1",null,"Loading. . ."):r.a.createElement("div",{className:"tc"},r.a.createElement("h1",null,"Robo Friends"),r.a.createElement(w,{onSearchChange:t}),r.a.createElement(R,null,r.a.createElement(v,{robots:i})))}}]),n}(o.Component)),S=Object(c.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}}),(function(e){return{onSearchChange:function(n){return e({type:"CHANGE_SEARCH_FIELD",payload:n.target.value})},onRequestRobots:function(){return e((function(e){e({type:"REQUEST_ROBOTS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(n){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:n})})).catch((function(n){return e({type:"REQUEST_ROBOTS_FAILED",payload:n})}))}))}}}))(O),y=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function C(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}t(33);var j=Object(d.createLogger)(),_=Object(s.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(n.type){case"CHANGE_SEARCH_FIELD":return Object.assign({},e,{searchField:n.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(n.type){case"REQUEST_ROBOTS_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object.assign({},e,{robots:n.payload,isPending:!1});case"REQUEST_ROBOTS_FAILED":return Object.assign({},e,{error:n.payload,isPending:!1});default:return e}}}),T=Object(s.d)(_,Object(s.a)(h.a,j));i.a.render(r.a.createElement(c.a,{store:T},r.a.createElement(S,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/robofriends",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/robofriends","/service-worker.js");y?(!function(e,n){fetch(e).then((function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):C(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):C(n,e)}))}}()}},[[19,1,2]]]);
//# sourceMappingURL=main.c4820502.chunk.js.map
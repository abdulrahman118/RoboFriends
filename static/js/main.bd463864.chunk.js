(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(2),c=n.n(o),i=(n(14),n(3)),l=n(4),s=n(6),u=n(5),h=n(7),m=function(e){var t=e.id,n=e.name,a=e.email;return r.a.createElement("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},r.a.createElement("img",{alt:"robot",src:"https://robohash.org/".concat(t,"?size=200x200")}),r.a.createElement("div",null,r.a.createElement("h2",null,n),r.a.createElement("p",null,a)))},d=function(e){var t=e.robots;return r.a.createElement("div",null,t.map(function(e){return r.a.createElement(m,{key:e.id,id:e.id,name:e.name,email:e.email})}))},b=function(e){var t=e.onSearchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",onChange:t,type:"seach",placeholder:"search Robofriends"}))},f=(n(15),function(e){return r.a.createElement("div",{style:{overflowY:"scroll",height:"500px",border:"5px solid"}},e.children)}),g=(n(16),function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).onSearchChange=function(t){e.setState({searchField:t.target.value})},e.state={robots:[],searchField:""},e}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){return e.setState(function(e){return e.robots=t})})}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchField,a=t.filter(function(e){return e.name.toLowerCase().includes(n.toLowerCase())});return t.length?r.a.createElement("div",{className:"tc"},r.a.createElement("h1",null,"Robo Friends"),r.a.createElement(b,{onSearchChange:this.onSearchChange}),r.a.createElement(f,null,r.a.createElement(d,{robots:a}))):r.a.createElement("h1",null,"Loading. . .")}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(17);c.a.render(r.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,n){e.exports=n(18)}},[[8,1,2]]]);
//# sourceMappingURL=main.bd463864.chunk.js.map
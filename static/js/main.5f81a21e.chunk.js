(this["webpackJsonpreact-todo-app"]=this["webpackJsonpreact-todo-app"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(16)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(7),r=n.n(c),l=(n(13),n(14),n(5)),i=n(3),u=n(4);n(15);var s=function(){var e=Object(a.useState)(""),t=Object(u.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)([]),s=Object(u.a)(r,2),m=s[0],d=s[1];return o.a.createElement("div",{className:"todo"},o.a.createElement("input",{type:"text",name:"text",id:"text",onChange:function(e){return function(e){c(e.target.value)}(e)},placeholder:"Add task here..."}),o.a.createElement("button",{className:"add-btn",onClick:function(){if(""!==n){var e={id:Math.floor(1e3*Math.random()),value:n,isCompleted:!1};d([].concat(Object(i.a)(m),[e]))}}},"Add"),o.a.createElement("br",null),m!==[]?o.a.createElement("ul",null,m.map((function(e){return o.a.createElement("li",{className:e.isCompleted?"crossText":"listitem"},e.value,o.a.createElement("button",{className:"completed",onClick:function(t){return function(e,t){e.preventDefault();var n=m.findIndex((function(e){return e.id==t})),a=Object(i.a)(m);a[n]=Object(l.a)(Object(l.a)({},a[n]),{},{isCompleted:!0}),d(a)}(t,e.id)}},"Completed"),o.a.createElement("button",{className:"delete",onClick:function(t){return function(e,t){e.preventDefault(),d(m.filter((function(e){return e.id!=t})))}(t,e.id)}},"Delete"))}))):null)};var m=function(){return o.a.createElement("div",{className:"App"},o.a.createElement("span",{className:"title"},"Todo List")," ",o.a.createElement("br",null),o.a.createElement(s,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(m,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.5f81a21e.chunk.js.map
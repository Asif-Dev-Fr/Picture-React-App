(this["webpackJsonppicture-app"]=this["webpackJsonppicture-app"]||[]).push([[0],{15:function(e,t,a){e.exports=a(39)},20:function(e,t,a){},21:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(13),i=a.n(c),l=(a(20),a(2)),s=a(14),o=(a(21),function(e){var t=e.searchInput,a=e.searchButton,n=e.searchEnter;return r.a.createElement("div",{className:"searchBox"},r.a.createElement("input",{type:"text",placeholder:"Search for a picture",onChange:t,onKeyPress:n}),r.a.createElement("button",{type:"submit",onClick:a},"Search"))}),u=function(e){return r.a.createElement("div",{className:"picture"},r.a.createElement("a",{href:e.pictures.largeImageURL,target:"_blank",rel:"noopener noreferrer nofollow"},r.a.createElement("img",{src:e.pictures.largeImageURL,alt:e.pictures.tags})),r.a.createElement("h2",null,e.pictures.tags))},p=function(e){for(var t=[],a=1;a<=Math.ceil(e.totalPictures/e.picturesPerPage);a++)t.push(a);return r.a.createElement("div",{className:"navPagination"},r.a.createElement("nav",null,r.a.createElement("ul",null,t.map((function(t){return r.a.createElement("li",{key:t},r.a.createElement("a",{onClick:function(){return e.paginate(t)},href:"#",className:"listPages"},t))})))))},m=a(3),h=a.n(m),g=function(){var e=Object(n.useState)({search:"",results:[],select:{},currentPage:1,picturesPerPage:10,totalHits:""}),t=Object(s.a)(e,2),a=t[0],c=t[1],i="https://pixabay.com/api/?key=16656881-200d737a6acb845b986ac46c7",m=a.currentPage*a.picturesPerPage,g=m-a.picturesPerPage,f=a.results.slice(g,m);return r.a.createElement("div",{className:"App"},r.a.createElement("header",null,r.a.createElement("h1",null,"Picture React App with pagination using Pixabay's API "),r.a.createElement(o,{searchInput:function(e){var t=e.target.value;c((function(e){return Object(l.a)(Object(l.a)({},e),{},{search:t})}))},searchButton:function(){h()(i+"&q="+a.search+"&per_page=100").then((function(e){var t=e.data.hits,a=e.data.totalHits;console.log(a),console.log(t),c((function(e){return Object(l.a)(Object(l.a)({},e),{},{results:t,totalHits:a})}))}))},searchEnter:function(e){"Enter"===e.key&&h()(i+"&q="+a.search+"&per_page=100").then((function(e){var t=e.data,a=t.hits,n=t.totalHits;console.log(a),c((function(e){return Object(l.a)(Object(l.a)({},e),{},{results:a,totalHits:n})}))}))}})),r.a.createElement("main",null,0!==a.totalHits?r.a.createElement("div",{className:"allPictures"},f.map((function(e){return r.a.createElement(u,{key:e.id,pictures:e})}))):r.a.createElement("p",{className:"errorPictures"},"Picture not available"),r.a.createElement(p,{totalPictures:a.results.length,picturesPerPage:a.picturesPerPage,paginate:function(e){c((function(t){return Object(l.a)(Object(l.a)({},t),{},{currentPage:e})}))}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.31cdcf66.chunk.js.map
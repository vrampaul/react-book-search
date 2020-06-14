(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(e,t,a){e.exports=a(57)},57:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(25),o=a.n(c),l=a(9),i=a(1);var s=function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary"},r.a.createElement("a",{className:"navbar-brand",href:"/"},"Google Book Search"),r.a.createElement(l.b,{style:m.link,to:"/search"},"Search"),r.a.createElement(l.b,{style:m.link,to:"/saved"},"Saved"))},m={link:{color:"white",padding:"5px"}},u=a(10),f=a(11),p=a.n(f),d=function(e){return p.a.get("https://www.googleapis.com/books/v1/volumes?q="+e)},v=function(){return p.a.get("/api/books/")},h=function(e){return p.a.delete("/api/books/"+e)},E=function(e){return p.a.post("/api/books",e)};var b=function(e){return e.children,r.a.createElement("div",{style:{height:300,clear:"both",paddingTop:120,textAlign:"center"},className:"jumbotron"},r.a.createElement("h1",null,"(React) Google Books Search"),r.a.createElement("p",null,"Search for and Save Books of Interest"))};function g(e){var t=e.fluid,a=e.children;return r.a.createElement("div",{className:"container".concat(t?"-fluid":"")},a)}function k(e){var t=e.fluid,a=e.children;return r.a.createElement("div",{className:"row".concat(t?"-fluid":"")},a)}function N(e){return r.a.createElement("div",{className:"form-group"},r.a.createElement("input",Object.assign({className:"form-control"},e)))}function y(e){return r.a.createElement("button",Object.assign({},e,{style:{float:"right",marginBottom:10},className:"btn btn-success"}),e.children)}var w=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(""),l=Object(u.a)(o,2),i=l[0],s=l[1];return r.a.createElement(g,null,r.a.createElement(b,null),r.a.createElement(k,null,r.a.createElement(g,{fluid:!0},r.a.createElement("h3",null,"Book Search"),r.a.createElement(N,{placeholder:"Search Google Books",onChange:function(e){var t=e.target.value;s(t)}}),r.a.createElement(y,{onClick:function(e){console.log("event",e),e.preventDefault(),d(i).then(function(e){c(e.data.items)}).catch(function(e){return console.log(e)})}},"Search"))),r.a.createElement(k,null,r.a.createElement(g,null,a.length?r.a.createElement("div",{className:"row row-cols-3",style:{justifyContent:"center"}},a.map(function(e){return r.a.createElement("div",{key:e.id,className:"card col-sm-3",style:{margin:"5px"}},r.a.createElement("img",{src:e.volumeInfo.imageLinks?e.volumeInfo.imageLinks.thumbnail:"http://icons.iconarchive.com/icons/paomedia/small-n-flat/128/book-icon.png",className:"card-img-top",style:{height:300},alt:"..."}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},e.volumeInfo.title),r.a.createElement("p",{className:"card-text"},e.volumeInfo.description?e.volumeInfo.description.length>=200?e.volumeInfo.description.slice(0,200):e.volumeInfo.description:"No Description Available"),r.a.createElement("button",{className:"btn btn-primary",onClick:function(t){return a=t,n={title:e.volumeInfo.title,image:e.volumeInfo.imageLinks?e.volumeInfo.imageLinks.thumbnail:"http://icons.iconarchive.com/icons/paomedia/small-n-flat/128/book-icon.png",author:e.volumeInfo.authors[0],description:e.volumeInfo.description,link:e.volumeInfo.infoLink},a.preventDefault(),void E(n).then(function(e){return alert("Book Saved!")}).catch(function(e){return console.log(e)});var a,n}},"save"),r.a.createElement("a",{href:e.volumeInfo.infoLink,rel:"noopener noreferrer",target:"_blank",className:"card-link"},"Book Link")))})):r.a.createElement("h3",null,"No Results to Display"))))},x=a(12),I=a.n(x),j=a(17),S=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],c=t[1],o=function(){var e=Object(j.a)(I.a.mark(function e(){var t;return I.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v();case 3:t=e.sent,c(t.data),e.next=10;break;case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}},e,null,[[0,7]])}));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)(function(){o()},[a]);var l=function(){var e=Object(j.a)(I.a.mark(function e(t){var n;return I.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h(t);case 3:n=a.filter(function(e){return e.id!==t}),c(n),e.next=10;break;case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}},e,null,[[0,7]])}));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(g,{fluid:!0},r.a.createElement(b,null),r.a.createElement(k,null,a.length?r.a.createElement("div",{className:"row row-cols-3",style:{justifyContent:"center"}},a.map(function(e){return r.a.createElement("div",{key:e._id,className:"card col-sm-3",style:{margin:"5px"}},r.a.createElement("img",{src:e.image?e.image:"http://icons.iconarchive.com/icons/paomedia/small-n-flat/128/book-icon.png",className:"card-img-top",style:{height:300},alt:"..."}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},e.title),r.a.createElement("p",{className:"card-text"},e.description?e.description.length>=200?e.description.slice(0,200):e.description:"No Description Available"),r.a.createElement("button",{className:"btn btn-primary",onClick:function(){return l(e._id)}},"Remove"),r.a.createElement("a",{href:e.link,rel:"noopener noreferrer",target:"_blank",className:"card-link"},"Book Link")))})):r.a.createElement("h3",null,"No Results to Display")))};var O=function(){return r.a.createElement(l.a,null,r.a.createElement(s,null),r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/",component:w}),r.a.createElement(i.a,{exact:!0,path:"/search",component:w}),r.a.createElement(i.a,{exact:!0,path:"/saved",component:S})))};o.a.render(r.a.createElement(O,null),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.72971c61.chunk.js.map
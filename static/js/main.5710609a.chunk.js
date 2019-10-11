(window.webpackJsonpcryptoquote=window.webpackJsonpcryptoquote||[]).push([[0],{18:function(e,t,a){e.exports=a(48)},23:function(e,t,a){},24:function(e,t,a){},25:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(14),o=a.n(c);a(23),a(24),a(25);function s(){return r.a.createElement("header",{className:"Navbar"},r.a.createElement("div",{className:"Navbar-logo"},"EncryptedQuote"),r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{className:"Navbar-link",href:"#"},"Home")),r.a.createElement("li",null,r.a.createElement("a",{className:"Navbar-link",href:"#"},"About")),r.a.createElement("li",null,r.a.createElement("a",{className:"Navbar-link",href:"#"},"Contact")))))}var u=a(4),l=a.n(u),i=a(15),p=a(16),m=a(2),d=a(3),h=a(17),f=a.n(h);a(44);function v(e){var t=e.topChar,a=e.bottomChar,n=e.onClick,c=e.isSelected;return r.a.createElement("div",{className:"Character ".concat(c?"Character--selected":""),onClick:function(){n(a)}},r.a.createElement("div",{className:"Character-top"},t),r.a.createElement("div",{className:"Character-bottom"},a))}a(45);function E(){return r.a.createElement("div",{className:"Space"})}a(46);function y(e){return r.a.createElement("div",{className:"Punctuation"},r.a.createElement("div",{className:"Punctuation-top"},e.char),r.a.createElement("div",{className:"Punctuation-bottom"},e.char))}var b;a(47);function C(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function g(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?C(a,!0).forEach((function(t){Object(i.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):C(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}!function(e){e.Movies="movies",e.Famous="famous"}(b||(b={}));var O={data:{},selectedPlainChar:"",selectedEncryptedChar:""},M=Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ");function N(e){var t=Object(n.useState)(O),a=Object(d.a)(t,2),c=a[0],o=a[1],s=Object(n.useState)(!0),u=Object(d.a)(s,2),i=u[0],h=u[1],C=Object(n.useState)(!1),N=Object(d.a)(C,2),j=N[0],w=N[1],k=Object(n.useState)([]),P=Object(d.a)(k,2),G=P[0],q=P[1],S=Object(n.useState)([]),Q=Object(d.a)(S,2),B=Q[0],A=Q[1],D=function(e){var t=e.author.toUpperCase(),a=e.quote.toUpperCase(),n=function(){var e={},t=Object(m.a)(M),a=Object(m.a)(M);return t.forEach((function(t){var n,r;do{n=Math.floor(Math.random()*a.length),r=a[n]}while(t===r);e[t]=r,a.splice(n,1)})),[e,{},{}]}(),r=Object(d.a)(n,3),c=r[0],o=r[1],s=r[2];return{category:e.category,author:t,quote:a,encryptMap:c,guessMap:o,reverseGuessMap:s}};Object(n.useEffect)((function(){(function(){var e=Object(p.a)(l.a.mark((function e(){var t,a,n,r,c,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object.values(b),a=Math.floor(Math.random()*t.length),n=t[a],"https://wmoore98-quote.herokuapp.com/api/quotes",e.next=6,f.a.get("https://wmoore98-quote.herokuapp.com/api/quotes");case 6:r=e.sent,console.log(n,r.data),c=r.data[0],s=D(c),o(g({},O,{data:s})),h(!1);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(n.useEffect)((function(){var e=c.data,t=e.quote,a=e.author,n=e.guessMap,r=e.encryptMap;if(t){var o="".concat(t).concat(a).split("").every((function(e){return n[e]===r[e]}));o&&w(o)}}),[c.data,j]);var F=function(e){var t=Object(m.a)(G);t.push({guessMap:g({},c.data.guessMap),reverseGuessMap:g({},c.data.reverseGuessMap)}),B.length&&A([]),q(t),function(e){var t=e.plainChar,a=e.encryptedChar,n=g({},c.data),r=g({},n.guessMap);r[t]=a;var s=function(e){var t={},n=c.data.reverseGuessMap[a];return n&&(e[n]=""),Object.keys(e).forEach((function(a){e[a]&&(t[e[a]]=a)})),t}(r);n.guessMap=r,n.reverseGuessMap=s,o(g({},c,{data:n,selectedPlainChar:"",selectedEncryptedChar:""}))}(e)},U=function(){var e=Object(m.a)(G),t=e.pop();if(t){var a=g({},c.data),n=Object(m.a)(B);n.push({guessMap:g({},a.guessMap),reverseGuessMap:g({},a.reverseGuessMap)}),a.guessMap=t.guessMap,a.reverseGuessMap=t.reverseGuessMap,A(n),q(e),o(g({},c,{data:a}))}},x=function(){var e=Object(m.a)(B),t=e.pop();if(t){var a=g({},c.data),n=Object(m.a)(G);n.push({guessMap:g({},a.guessMap),reverseGuessMap:g({},a.reverseGuessMap)}),a.guessMap=t.guessMap,a.reverseGuessMap=t.reverseGuessMap,q(n),A(e),o(g({},c,{data:a}))}},I=function(e){o(g({},c,{selectedEncryptedChar:e})),c.selectedPlainChar&&setTimeout((function(){F({plainChar:c.selectedPlainChar,encryptedChar:e})}),300)},J=function(e){o(g({},c,{selectedPlainChar:e})),c.selectedEncryptedChar&&setTimeout((function(){F({plainChar:e,encryptedChar:c.selectedEncryptedChar})}),300)},T=function(e,t){var a=c.data,n=a.encryptMap,o=a.reverseGuessMap,s=e.split(" ").map((function(e,a){return r.a.createElement("div",{key:"".concat(t,":w").concat(a),style:{display:"inline-block"}},e.split("").map((function(e,s){var u=n[e],l=o[u];return u?(l||(l="_"),r.a.createElement(v,{key:"".concat(t,":w").concat(a,"c").concat(s),topChar:l,bottomChar:u,onClick:I,isSelected:u===c.selectedEncryptedChar})):(u=e,l=e,r.a.createElement(y,{key:"".concat(t,":w").concat(a,"c").concat(s),char:e}))})),r.a.createElement(E,{key:"".concat(t,":space").concat(a)}))}));return r.a.createElement(r.a.Fragment,null,s)},W=function(e){},H=function(e){var t=e.key.toUpperCase();1===t.length&&/[A-Z]{1}/.test(t)&&(c.selectedPlainChar?I(t):J(t)),","===t?U():"."===t&&x()},K=function(){var e=document.getElementById("inputField");e&&e.focus()};return document&&K(),i?r.a.createElement("main",null,"Loading..."):r.a.createElement("main",{className:"container",onClick:K},r.a.createElement("div",{className:"CryptoQuote"},function(){var e=c.data.category;return r.a.createElement("section",{className:"CryptoQuote-category"},"Category: ",e)}(),function(){var e=c.data.quote;return r.a.createElement("section",{className:"CryptoQuote-quote"},T(e,"quote"))}(),function(){var e=c.data.author;return r.a.createElement("section",{className:"CryptoQuote-author"},T(e,"author"))}(),function(){var e=c.data.guessMap,t=M.map((function(t){return r.a.createElement(v,{key:t,topChar:e[t]?e[t]:"_",bottomChar:t,onClick:J,isSelected:t===c.selectedPlainChar})}));return r.a.createElement("section",{className:"CryptoQuote-guessMap"},t)}(),r.a.createElement("section",{className:"CryptoQuote-input"},r.a.createElement("input",{id:"inputField",onKeyPress:H,onChange:W,value:c.selectedEncryptedChar,style:{width:0,height:0,border:"none"}}),r.a.createElement("span",{className:c.selectedPlainChar?"":"active"},c.selectedPlainChar)," is encrypted as ",r.a.createElement("span",{className:c.selectedPlainChar?"active":""},c.selectedEncryptedChar)),r.a.createElement("section",{className:"CryptoQuote-controls"},r.a.createElement("span",{className:"undoBtn"},r.a.createElement("button",{className:"btn",disabled:!G.length,onClick:U},r.a.createElement("i",{className:"fas fa-undo"}))),r.a.createElement("span",{className:"undoBtn"},r.a.createElement("button",{className:"btn",disabled:!B.length,onClick:x},r.a.createElement("i",{className:"fas fa-redo"})))),j?r.a.createElement("div",null,"You solved it!!!"):null))}var j=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(s,null),r.a.createElement(N,{count:1}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[18,1,2]]]);
//# sourceMappingURL=main.5710609a.chunk.js.map
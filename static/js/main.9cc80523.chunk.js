(window.webpackJsonpcryptoquote=window.webpackJsonpcryptoquote||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(21)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(5),o=a.n(c);a(13),a(14),a(15);function s(){return r.a.createElement("header",{className:"Navbar"},r.a.createElement("div",{className:"Navbar-logo"},"EncryptedQuote"),r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{className:"Navbar-link",href:"#"},"Home")),r.a.createElement("li",null,r.a.createElement("a",{className:"Navbar-link",href:"#"},"About")),r.a.createElement("li",null,r.a.createElement("a",{className:"Navbar-link",href:"#"},"Contact")))))}var l=a(3),u=a.n(l),i=a(6),p=a(7),m=a(1),d=a(2);a(17);function h(e){var t=e.topChar,a=e.bottomChar,n=e.onClick,c=e.isSelected;return r.a.createElement("div",{className:"Character ".concat(c?"Character--selected":""),onClick:function(){n(a)}},r.a.createElement("div",{className:"Character-top"},t),r.a.createElement("div",{className:"Character-bottom"},a))}a(18);function f(){return r.a.createElement("div",{className:"Space"})}a(19);function v(e){return r.a.createElement("div",{className:"Punctuation"},r.a.createElement("div",{className:"Punctuation-top"},e.char),r.a.createElement("div",{className:"Punctuation-bottom"},e.char))}var y;a(20);function E(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?E(a,!0).forEach((function(t){Object(i.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):E(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}!function(e){e.Movies="movies",e.Famous="famous"}(y||(y={}));var C={data:{},selectedPlainChar:"",selectedEncryptedChar:""},g=Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ");function O(e){var t=Object(n.useState)(C),a=Object(d.a)(t,2),c=a[0],o=a[1],s=Object(n.useState)(!0),l=Object(d.a)(s,2),i=l[0],E=l[1],O=Object(n.useState)(!1),M=Object(d.a)(O,2),N=M[0],j=M[1],w=Object(n.useState)([]),k=Object(d.a)(w,2),P=k[0],G=k[1],S=Object(n.useState)([]),q=Object(d.a)(S,2),Q=q[0],B=q[1],F=function(e){var t=e.author.toUpperCase(),a=e.quote.toUpperCase(),n=function(){var e={},t=Object(m.a)(g),a=Object(m.a)(g);return t.forEach((function(t){var n,r;do{n=Math.floor(Math.random()*a.length),r=a[n]}while(t===r);e[t]=r,a.splice(n,1)})),[e,{},{}]}(),r=Object(d.a)(n,3),c=r[0],o=r[1],s=r[2];return{category:e.category,author:t,quote:a,encryptMap:c,guessMap:o,reverseGuessMap:s}};Object(n.useEffect)((function(){(function(){var e=Object(p.a)(u.a.mark((function e(){var t,a,n,r,c,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=Object.values(y),a=Math.floor(Math.random()*t.length),n=t[a],r={data:[{author:"Bjarne Stroustrup",category:"Famous",quote:"C makes it easy to shoot yourself in the foot; C++ makes it harder, but when you do, it blows away your whole leg."}]},console.log(n,r.data),c=r.data[0],s=F(c),o(b({},C,{data:s})),E(!1);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(n.useEffect)((function(){var e=c.data,t=e.quote,a=e.author,n=e.guessMap,r=e.encryptMap;if(t){var o="".concat(t).concat(a).split("").every((function(e){return n[e]===r[e]}));o&&j(o)}}),[c.data,N]);var A=function(e){var t=Object(m.a)(P);t.push({guessMap:b({},c.data.guessMap),reverseGuessMap:b({},c.data.reverseGuessMap)}),Q.length&&B([]),G(t),function(e){var t=e.plainChar,a=e.encryptedChar,n=b({},c.data),r=b({},n.guessMap);r[t]=a;var s=function(e){var t={},n=c.data.reverseGuessMap[a];return n&&(e[n]=""),Object.keys(e).forEach((function(a){e[a]&&(t[e[a]]=a)})),t}(r);n.guessMap=r,n.reverseGuessMap=s,o(b({},c,{data:n,selectedPlainChar:"",selectedEncryptedChar:""}))}(e)},D=function(){var e=Object(m.a)(P),t=e.pop();if(t){var a=b({},c.data),n=Object(m.a)(Q);n.push({guessMap:b({},a.guessMap),reverseGuessMap:b({},a.reverseGuessMap)}),a.guessMap=t.guessMap,a.reverseGuessMap=t.reverseGuessMap,B(n),G(e),o(b({},c,{data:a}))}},U=function(){var e=Object(m.a)(Q),t=e.pop();if(t){var a=b({},c.data),n=Object(m.a)(P);n.push({guessMap:b({},a.guessMap),reverseGuessMap:b({},a.reverseGuessMap)}),a.guessMap=t.guessMap,a.reverseGuessMap=t.reverseGuessMap,G(n),B(e),o(b({},c,{data:a}))}},I=function(e){o(b({},c,{selectedEncryptedChar:e})),c.selectedPlainChar&&setTimeout((function(){A({plainChar:c.selectedPlainChar,encryptedChar:e})}),300)},J=function(e){o(b({},c,{selectedPlainChar:e})),c.selectedEncryptedChar&&setTimeout((function(){A({plainChar:e,encryptedChar:c.selectedEncryptedChar})}),300)},T=function(e,t){var a=c.data,n=a.encryptMap,o=a.reverseGuessMap,s=e.split(" ").map((function(e,a){return r.a.createElement("div",{key:"".concat(t,":w").concat(a),style:{display:"inline-block"}},e.split("").map((function(e,s){var l=n[e],u=o[l];return l?(u||(u="_"),r.a.createElement(h,{key:"".concat(t,":w").concat(a,"c").concat(s),topChar:u,bottomChar:l,onClick:I,isSelected:l===c.selectedEncryptedChar})):(l=e,u=e,r.a.createElement(v,{key:"".concat(t,":w").concat(a,"c").concat(s),char:e}))})),r.a.createElement(f,{key:"".concat(t,":space").concat(a)}))}));return r.a.createElement(r.a.Fragment,null,s)},W=function(e){},x=function(e){var t=e.key.toUpperCase();1===t.length&&/[A-Z]{1}/.test(t)&&(c.selectedPlainChar?I(t):J(t)),","===t?D():"."===t&&U()},H=function(){var e=document.getElementById("inputField");e&&e.focus()};return document&&H(),i?r.a.createElement("main",null,"Loading..."):r.a.createElement("main",{className:"container",onClick:H},r.a.createElement("div",{className:"CryptoQuote"},function(){var e=c.data.category;return r.a.createElement("section",{className:"CryptoQuote-category"},"Category: ",e)}(),function(){var e=c.data.quote;return r.a.createElement("section",{className:"CryptoQuote-quote"},T(e,"quote"))}(),function(){var e=c.data.author;return r.a.createElement("section",{className:"CryptoQuote-author"},T(e,"author"))}(),function(){var e=c.data.guessMap,t=g.map((function(t){return r.a.createElement(h,{key:t,topChar:e[t]?e[t]:"_",bottomChar:t,onClick:J,isSelected:t===c.selectedPlainChar})}));return r.a.createElement("section",{className:"CryptoQuote-guessMap"},t)}(),r.a.createElement("section",{className:"CryptoQuote-input"},r.a.createElement("input",{id:"inputField",onKeyPress:x,onChange:W,value:c.selectedEncryptedChar,style:{width:0,height:0,border:"none"}}),r.a.createElement("span",{className:c.selectedPlainChar?"":"active"},c.selectedPlainChar)," is encrypted as ",r.a.createElement("span",{className:c.selectedPlainChar?"active":""},c.selectedEncryptedChar)),r.a.createElement("section",{className:"CryptoQuote-controls"},r.a.createElement("span",{className:"undoBtn"},r.a.createElement("button",{className:"btn",disabled:!P.length,onClick:D},r.a.createElement("i",{className:"fas fa-undo"}))),r.a.createElement("span",{className:"undoBtn"},r.a.createElement("button",{className:"btn",disabled:!Q.length,onClick:U},r.a.createElement("i",{className:"fas fa-redo"})))),N?r.a.createElement("div",null,"You solved it!!!"):null))}var M=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(s,null),r.a.createElement(O,{count:1}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[8,1,2]]]);
//# sourceMappingURL=main.9cc80523.chunk.js.map
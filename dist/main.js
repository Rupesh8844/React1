(()=>{"use strict";var n,e,r,t,o,a,i,c,s,p,d,l,u,f,m={126:(n,e,r)=>{r.d(e,{Z:()=>c});var t=r(81),o=r.n(t),a=r(645),i=r.n(a)()(o());i.push([n.id,"#navbar {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    border: 1px solid red;\r\n  }\r\n  \r\n  #options {\r\n    display: flex;\r\n    gap: 15px;\r\n  }\r\n  \r\n\r\n  \r\n#container {\r\n  width: 81%;\r\n  margin: auto;\r\n  text-align: center;\r\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\r\n  padding: 2%;\r\n  box-sizing: border-box;\r\n  background-color: white;\r\n  margin-bottom: 105px;\r\n  margin-top: 35px;\r\n}\r\n.details {\r\n  margin-bottom: 35px;\r\n}\r\n#container > img {\r\n  height: 300px;\r\n\r\n  width: 500px;\r\n}\r\n.details > p {\r\n  font-size: 17px;\r\n  margin-bottom: -11px;\r\n}\r\n#container{\r\n  display: grid;\r\n  grid-template-columns: repeat(4, 1fr);\r\n  grid-template-rows: auto;\r\n  gap: 3%;\r\n  padding: 30px 0px;\r\n  /* padding-bottom: 20px; */\r\n  /* border: 1px solid red; */\r\n}\r\n\r\n.box{\r\n  border: 1px solid blue;\r\n  text-align: center;\r\n  padding: 20px 0px;\r\n  /* width: 90%; */\r\n\r\n}\r\n\r\nimg{ \r\nwidth: 85%;    \r\nheight: 250px;\r\n}",""]);const c=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var r="",t=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),t&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=n(e),t&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(n,r,t,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(t)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var p=0;p<n.length;p++){var d=[].concat(n[p]);t&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),r&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=r):d[2]=r),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function r(n){for(var r=-1,t=0;t<e.length;t++)if(e[t].identifier===n){r=t;break}return r}function t(n,t){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],p=t.base?s[0]+t.base:s[0],d=a[p]||0,l="".concat(p," ").concat(d);a[p]=d+1;var u=r(l),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var m=o(f,t);t.byIndex=c,e.splice(c,0,{identifier:l,updater:m,references:1})}i.push(l)}return i}function o(n,e){var r=e.domAPI(e);return r.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;r.update(n=e)}else r.remove()}}n.exports=function(n,o){var a=t(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=r(a[i]);e[c].references--}for(var s=t(n,o),p=0;p<a.length;p++){var d=r(a[p]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=s}}},569:n=>{var e={};n.exports=function(n,r){var t=function(n){if(void 0===e[n]){var r=document.querySelector(n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}e[n]=r}return e[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(r)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,r)=>{n.exports=function(n){var e=r.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(r){!function(n,e,r){var t="";r.supports&&(t+="@supports (".concat(r.supports,") {")),r.media&&(t+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(t+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),t+=r.css,o&&(t+="}"),r.media&&(t+="}"),r.supports&&(t+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(t,n,e.options)}(e,n,r)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},h={};function g(n){var e=h[n];if(void 0!==e)return e.exports;var r=h[n]={id:n,exports:{}};return m[n](r,r.exports,g),r.exports}g.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return g.d(e,{a:e}),e},g.d=(n,e)=>{for(var r in e)g.o(e,r)&&!g.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},g.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),n=g(379),e=g.n(n),r=g(795),t=g.n(r),o=g(569),a=g.n(o),i=g(565),c=g.n(i),s=g(216),p=g.n(s),d=g(589),l=g.n(d),u=g(126),(f={}).styleTagTransform=l(),f.setAttributes=c(),f.insert=a().bind(null,"head"),f.domAPI=t(),f.insertStyleElement=p(),e()(u.Z,f),u.Z&&u.Z.locals&&u.Z.locals,document.getElementById("navbar").innerHTML='\n  <h3>\n  <a href="/">Home</a>\n  </h3>\n  <div id="options">\n \n  <h3>\n      <a href="login.html">Log In</a>\n  </h3>\n  <h3>\n      <a href="signup.html">Sign Up</a>\n  </h3>\n  </div>\n   ',JSON.parse(localStorage.getItem("items")),fetch("https://grocery-masai.herokuapp.com/items").then((function(n){return n.json()})).then((function(n){!function(n){let e=document.getElementById("container"),r=n.data.length;for(let t=0;t<r;t++){let r=document.createElement("div");r.setAttribute("class","box");let o=document.createElement("img");o.src=n.data[t].image;let a=document.createElement("p");a.innerText=n.data[t].name;let i=document.createElement("p");i.innerText=n.data[t].price,r.append(o,a,i),e.append(r)}}(n)})).catch((function(n){console.log("err:",n)}))})();
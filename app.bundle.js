!function(e){function t(t){for(var n,i,o=t[0],s=t[1],a=0,c=[];a<o.length;a++)i=o[a],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&c.push(r[i][0]),r[i]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);for(d&&d(t);c.length;)c.shift()()}var n={},r={0:0};function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,i){n=r[e]=[t,i]}));t.push(n[2]=o);var s,a=document.createElement("script");a.charset="utf-8",a.timeout=120,i.nc&&a.setAttribute("nonce",i.nc),a.src=function(e){return i.p+""+({1:"categories-index-js",2:"dashboard-index-js",3:"error404-index-js",4:"products-edit-index-js",5:"products-list-index-js",6:"sales-index-js"}[e]||e)+"-"+e+".js"}(e);var d=new Error;s=function(t){a.onerror=a.onload=null,clearTimeout(c);var n=r[e];if(0!==n){if(n){var i=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+i+": "+o+")",d.name="ChunkLoadError",d.type=i,d.request=o,n[1](d)}r[e]=void 0}};var c=setTimeout((function(){s({type:"timeout",target:a})}),12e4);a.onerror=a.onload=s,document.head.appendChild(a)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/course-js.javascript.ru/",i.oe=function(e){throw console.error(e),e};var o=window.webpackJsonp=window.webpackJsonp||[],s=o.push.bind(o);o.push=t,o=o.slice();for(var a=0;a<o.length;a++)t(o[a]);var d=s;i(i.s=2)}([function(e,t,n){var r={"./categories/index.js":[3,1],"./dashboard/index.js":[5,2],"./error404/index.js":[4,3],"./products/edit/index.js":[6,4],"./products/list/index.js":[7,5],"./sales/index.js":[8,6]};function i(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],i=t[0];return n.e(t[1]).then((function(){return n(i)}))}i.keys=function(){return Object.keys(r)},i.id=0,e.exports=i},,function(e,t,n){"use strict";n.r(t);class r{constructor(){this.routes=[],this.initEventListeners()}initEventListeners(){document.addEventListener("click",e=>{const t=e.target.closest("a");if(!t)return;const n=t.getAttribute("href");n&&n.startsWith("/")&&(e.preventDefault(),this.navigate(n))})}static instance(){return this._instance||(this._instance=new r),this._instance}async route(){let e,t,n=decodeURI(window.location.pathname).replace(/^\/|\/$/,"");for(let r of this.routes)if(e=n.match(r.pattern),e){this.page=await this.changePage(r.path,e[0]),t=r.path;break}e||(this.page=await this.changePage(this.notFoundPagePath),t=this.notFoundPagePath),document.dispatchEvent(new CustomEvent("route",{detail:{page:this.page,path:t}}))}async changePage(e,t){return this.page&&this.page.destroy&&this.page.destroy(),await async function(e,t){const r=document.querySelector("main");r.classList.add("is-loading");const{default:i}=await n(0)(`./${e}/index.js`),o=new i(t),s=await o.render();r.classList.remove("is-loading");const a=document.querySelector("#content");return a.innerHTML="",a.append(s),o}(e,t)}navigate(e){history.pushState(null,null,e),this.route()}addRoute(e,t){return this.routes.push({pattern:e,path:t}),this}setNotFoundPagePath(e){return this.notFoundPagePath=e,this}listen(){window.addEventListener("popstate",()=>this.route()),this.route()}}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class o{constructor(){return i(this,"element",null),i(this,"SHIFT",10),i(this,"pointeroverHandler",e=>{const t=e.target.closest("[data-tooltip]");t&&(this.remove(),this.render(),this.element.innerHTML=t.dataset.tooltip,this.moveTo(e.clientX,e.clientY))}),i(this,"pointeroutHandler",e=>{e.target.closest("[data-tooltip]")&&this.remove()}),i(this,"pointermoveHandler",e=>{e.target.closest("[data-tooltip]")?this.moveTo(e.clientX,e.clientY):this.remove()}),o.tooltipInstance||(o.tooltipInstance=this),o.tooltipInstance}initialize(){this.initEventListeners()}initEventListeners(){document.addEventListener("pointerover",this.pointeroverHandler),document.addEventListener("pointerout",this.pointeroutHandler),document.addEventListener("pointermove",this.pointermoveHandler)}render(){this.element=document.createElement("div"),this.element.className="tooltip",document.body.append(this.element)}moveTo(e,t){const n=this.element.offsetWidth,r=this.element.offsetHeight,i=document.documentElement.clientWidth,o=document.documentElement.clientHeight,s=i-e-this.SHIFT-n,a=o-t-this.SHIFT-r;this.element.style.left=(s>0?e+this.SHIFT:i-n)+"px",this.element.style.top=(a>0?t+this.SHIFT:o-r)+"px"}remove(){this.element&&this.element.remove()}destroy(){this.remove(),document.removeEventListener("pointerover",this.pointeroverHandler),document.removeEventListener("pointerout",this.pointeroutHandler),document.removeEventListener("pointermove",this.pointermoveHandler)}}i(o,"tooltipInstance",null);var s=new o;function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class d{constructor(){if(a(this,"onPageRender",e=>{const t=e.detail.path;this.setActiveItem(t)}),d.sidebarInstance)return d.sidebarInstance;d.sidebarInstance=this,this.element=document.querySelector("[data-element=sidebar-nav]")}initialize(){this.initToggleButton(),this.addEventListeners()}initToggleButton(){const e=this.element.querySelector(".sidebar__toggler");null!==e&&e.addEventListener("pointerdown",()=>{document.body.classList.toggle("is-collapsed-sidebar")})}setActiveItem(e){const t=e.replace(/^\/|\/$/,"").split("/").shift(),n=this.element.querySelector(`[data-page=${t}]`);[...this.element.querySelectorAll("li")].forEach(e=>{e.classList.remove("active"),e.firstElementChild.blur()}),n&&n.parentElement.classList.add("active")}addEventListeners(){document.addEventListener("route",this.onPageRender)}}a(d,"sidebarInstance",null);var c=new d;s.initialize(),c.initialize(),document.addEventListener("route",()=>{null!==s.element&&s.element.remove()});r.instance().addRoute(/^$/,"dashboard").addRoute(/^products$/,"products/list").addRoute(/^products\/add$/,"products/edit").addRoute(/^products\/([\w()-]+)$/,"products/edit").addRoute(/^sales$/,"sales").addRoute(/^categories$/,"categories").addRoute(/^404\/?$/,"error404").setNotFoundPagePath("error404").listen()}]);
//# sourceMappingURL=app.bundle.js.map
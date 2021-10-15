(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{11:function(t,e,s){"use strict";s.d(e,"a",(function(){return r}));var i=s(9);function n(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}class r{constructor(t=[],{url:e="",isSortLocally:s=!1,sorted:i={id:t.find(t=>t.sortable).id,order:"asc"},emptyPlaceholder:r="<div><p>No data</p></div>",isRowALink:a=!0}={}){n(this,"element",null),n(this,"subElements",{}),n(this,"data",[]),n(this,"loadStart",0),n(this,"loadLength",30),n(this,"isLoading",!1),n(this,"pointerdownHandler",t=>{const e=t.target.closest('[data-sortable = "true"]');e&&(t.preventDefault(),this.sorted.id=e.dataset.id,this.sorted.order="desc"===e.dataset.order?"asc":"desc",Array.from(this.subElements.header.children).map(t=>t.dataset.order=""),e.dataset.order=this.sorted.order,this.isSortLocally?this.sortOnClient(this.sorted.id,this.sorted.order):this.sortOnServer(this.sorted.id,this.sorted.order))}),n(this,"scrollHandler",async t=>{if(this.isSortLocally)return;const e=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)-document.documentElement.clientHeight;if(window.pageYOffset===e&&!this.isLoading){this.loadStart=this.loadStart+this.loadLength,this.isLoading=!0;const t=await this.loadData();(0===t.length||t.length<this.loadLength)&&document.removeEventListener("scroll",this.scrollHandler),this.updateTableData([...this.data,...t]),this.isLoading=!1}}),this.url=e,this.isSortLocally=s,this.headerConfig=t,this.sorted=i,this.emptyPlaceholder=r,this.isRowALink=a,this.render()}async render(){const t=document.createElement("div"),{id:e,order:s}=this.sorted;t.innerHTML=this.getTable(),this.element=t.firstElementChild,this.subElements=this.getSubElements(this.element);const i=await this.loadData(e,s);this.subElements.header.innerHTML=this.getHeaderRow(),this.subElements.emptyPlaceholder.innerHTML=this.emptyPlaceholder,this.updateTableData(i),this.initEventListeners()}getTable(){return'\n      <div class="sortable-table">\n          <div data-element="header" class="sortable-table__header sortable-table__row"></div>\n          <div data-element="body" class="sortable-table__body"></div>\n          <div data-element="loading" class="loading-line sortable-table__loading-line"></div>\n          <div data-element="emptyPlaceholder" class="sortable-table__empty-placeholder"></div>\n      </div>\n    '}getHeaderRow(){return this.headerConfig.map(({id:t,sortable:e,title:s})=>`\n        <div class="sortable-table__cell"\n            data-id="${t}"\n            data-sortable="${e}"\n            data-order="${t===this.sorted.id?this.sorted.order:""}"\n            <span>${s}</span>\n            <span data-element="arrow" class="sortable-table__sort-arrow">\n                <span class="sort-arrow"></span>\n            </span>\n        </div>\n      `).join("")}getBodyRows(t){return t.map(t=>this.isRowALink?`<a href="/products/${t.id}" class="sortable-table__row">${this.getBodyRow(t)}</a>`:`<div class="sortable-table__row">${this.getBodyRow(t)}</div>`).join("")}getBodyRow(t){return Array.from(this.headerConfig).map(({id:e,template:s})=>s?s(t[e]):`<div class="sortable-table__cell">${t[e]}</div>`).join("")}async update(t){this.url=t,this.loadStart=0;const e=await this.loadData();e.length&&document.addEventListener("scroll",this.scrollHandler),this.updateTableData(e)}updateTableData(t){this.data=t,t.length?(this.element.classList.remove("sortable-table_empty"),this.isSortLocally&&Array.from(this.subElements.header.children).map(t=>t.dataset.order=""),this.subElements.body.innerHTML=this.getBodyRows(t)):this.element.classList.add("sortable-table_empty")}sortOnClient(t,e){const s=this.sort(t,e);this.subElements.body.innerHTML=this.getBodyRows(s)}async sortOnServer(t,e){this.loadStart=0;const s=await this.loadData(t,e);s.length&&document.addEventListener("scroll",this.scrollHandler),this.updateTableData(s)}sort(t,e){const s=this.headerConfig.find(e=>e.id===t),{sortType:i,customSorting:n}=s;return Array.from(this.data).sort((s,r)=>{const a=s[t],l=r[t];let o=null;switch(i){case"number":o=a-l;break;case"string":o=a.localeCompare(l,["ru-u-kf-upper","en-u-kf-upper"]);break;case"date":o=new Date(a)-new Date(l);break;case"custom":o=n(a,l);break;default:o=a-l}return"asc"===e?o:"desc"===e?-o:void 0})}getSubElements(t){return[...t.querySelectorAll("[data-element]")].reduce((t,e)=>(t[e.dataset.element]=e,t),{})}async loadData(t=this.sorted.id,e=this.sorted.order,s=this.loadStart,n=this.loadLength){if(!this.url)return;this.setLoadingInd();const r=new URL(this.url,"https://course-js.javascript.ru/");r.searchParams.set("_sort",t),r.searchParams.set("_order",e),r.searchParams.set("_start",s.toString()),r.searchParams.set("_end",(s+n).toString());let a=[];return a=await Object(i.a)(r.href),this.removeLoadingInd(),a}setLoadingInd(){this.subElements.loading.style.display="block"}removeLoadingInd(){this.subElements.loading.style.display="none"}initEventListeners(){this.subElements.header.addEventListener("pointerdown",this.pointerdownHandler),document.addEventListener("scroll",this.scrollHandler)}remove(){this.element&&this.element.remove()}destroy(){this.remove(),this.element=null,this.subElements={},document.removeEventListener("scroll",this.scrollHandler)}}},7:function(t,e,s){"use strict";s.r(e),s.d(e,"default",(function(){return o}));var i=s(11);function n(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}class r{constructor({min:t=100,max:e=200,formatValue:s=(t=>"$"+t),selected:i={from:t,to:e}}={}){n(this,"element",void 0),n(this,"subElements",{}),n(this,"onThumbPointerMove",t=>{t.preventDefault();const{left:e,right:s,width:i}=this.subElements.inner.getBoundingClientRect();if(this.dragging===this.subElements.thumbLeft){let s=(t.clientX-e+this.shiftX)/i;s<0&&(s=0),s*=100;const n=parseFloat(this.subElements.thumbRight.style.right);s+n>100&&(s=100-n),this.dragging.style.left=this.subElements.progress.style.left=s+"%",this.subElements.from.innerHTML=this.formatValue(this.getValue().from)}if(this.dragging===this.subElements.thumbRight){let e=(s-t.clientX-this.shiftX)/i;e<0&&(e=0),e*=100;const n=parseFloat(this.subElements.thumbLeft.style.left);n+e>100&&(e=100-n),this.dragging.style.right=this.subElements.progress.style.right=e+"%",this.subElements.to.innerHTML=this.formatValue(this.getValue().to)}}),n(this,"onThumbPointerUp",()=>{this.element.classList.remove("range-slider_dragging"),document.removeEventListener("pointermove",this.onThumbPointerMove),document.removeEventListener("pointerup",this.onThumbPointerUp),this.element.dispatchEvent(new CustomEvent("range-select",{detail:this.getValue(),bubbles:!0}))}),this.min=t,this.max=e,this.formatValue=s,this.selected=i,this.render()}get template(){return'<div class="range-slider">\n      <span data-element="from"></span>\n      <div data-element="inner" class="range-slider__inner">\n        <span data-element="progress" class="range-slider__progress"></span>\n        <span data-element="thumbLeft" class="range-slider__thumb-left"></span>\n        <span data-element="thumbRight" class="range-slider__thumb-right"></span>\n      </div>\n      <span data-element="to"></span>\n    </div>'}render(){const t=document.createElement("div");t.innerHTML=this.template,this.element=t.firstElementChild,this.element.ondragstart=()=>!1,this.subElements=this.getSubElements(t),this.initEventListeners(),this.update()}initEventListeners(){const{thumbLeft:t,thumbRight:e}=this.subElements;t.addEventListener("pointerdown",t=>this.onThumbPointerDown(t)),e.addEventListener("pointerdown",t=>this.onThumbPointerDown(t))}getSubElements(t){const e={},s=t.querySelectorAll("[data-element]");for(const t of s){e[t.dataset.element]=t}return e}remove(){this.element.remove()}destroy(){this.remove(),document.removeEventListener("pointermove",this.onThumbPointerMove),document.removeEventListener("pointerup",this.onThumbPointerUp)}update(){const t=this.max-this.min,e=Math.floor((this.selected.from-this.min)/t*100)+"%",s=Math.floor((this.max-this.selected.to)/t*100)+"%";this.subElements.progress.style.left=e,this.subElements.progress.style.right=s,this.subElements.thumbLeft.style.left=e,this.subElements.thumbRight.style.right=s,this.subElements.from.innerHTML=this.formatValue(this.selected.from),this.subElements.to.innerHTML=this.formatValue(this.selected.to)}resetSelected(){this.selected.from=this.min,this.selected.to=this.max,this.update()}onThumbPointerDown(t){const e=t.target;t.preventDefault();const{left:s,right:i}=e.getBoundingClientRect();e===this.subElements.thumbLeft?this.shiftX=i-t.clientX:this.shiftX=s-t.clientX,this.dragging=e,this.element.classList.add("range-slider_dragging"),document.addEventListener("pointermove",this.onThumbPointerMove),document.addEventListener("pointerup",this.onThumbPointerUp)}getValue(){const t=this.max-this.min,{left:e}=this.subElements.thumbLeft.style,{right:s}=this.subElements.thumbRight.style;return{from:Math.round(this.min+.01*parseFloat(e)*t),to:Math.round(this.max-.01*parseFloat(s)*t)}}}var a=[{id:"images",title:"Image",sortable:!1,template:t=>`\n          <div class="sortable-table__cell">\n            ${t[0]?`<img class="sortable-table-image" alt="Image" src="${t[0].url}">`:""}\n          </div>`},{id:"title",title:"Name",sortable:!0,sortType:"string"},{id:"subcategory",title:"Category",sortable:!1,template:t=>`<div class="sortable-table__cell">\n                <span data-tooltip="<div class='sortable-table-tooltip'>\n                            <span class='sortable-table-tooltip__category'>${t.category.title}</span> /\n                            <b class='sortable-table-tooltip__subcategory'>${t.title}</b>\n                          </div>">\n                  ${t.title}\n                </span>\n              </div>`},{id:"quantity",title:"Quantity",sortable:!0,sortType:"number"},{id:"price",title:"Price",sortable:!0,sortType:"number",template:t=>`<div class="sortable-table__cell">$${t}</div>`},{id:"status",title:"Status",sortable:!0,sortType:"string",template:t=>`<div class="sortable-table__cell">${1===t?"Active":"Not active"}</div>`}];function l(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}class o{constructor(){l(this,"element",null),l(this,"subElements",{}),l(this,"components",{}),l(this,"filterTitle",""),l(this,"filterStatus",""),l(this,"filterFrom",0),l(this,"filterTo",4e3)}render(){const t=document.createElement("div");return t.innerHTML=this.template,this.element=t.firstElementChild,this.subElements=this.getSubElements(this.element),this.initComponents(),this.renderComponents(),this.initEventListeners(),this.element}initComponents(){const t=new i.a(a,{url:"api/rest/products?_embed=subcategory.category",emptyPlaceholder:'<div>\n                            <p>No products found matching the selected criteria</p>\n                            <button type="button" class="button-primary-outline" data-clear-filters>Clear filters</button>\n                         </div>'}),e=new r({min:this.filterFrom,max:this.filterTo});this.components={productsContainer:t,sliderContainer:e}}renderComponents(){Object.keys(this.subElements).forEach(t=>{this.components.hasOwnProperty(t)&&this.subElements[t].append(this.components[t].element)})}updateComponents({filterTitle:t=this.filterTitle,filterStatus:e=this.filterStatus,filterFrom:s=this.filterFrom,filterTo:i=this.filterTo}={}){const n=new URL("/api/rest/products","https://course-js.javascript.ru/");n.searchParams.set("_embed","subcategory.category"),n.searchParams.set("price_gte",String(s)),n.searchParams.set("price_lte",String(i)),t&&n.searchParams.set("title_like",t),e&&n.searchParams.set("status",e),this.components.productsContainer.update(n)}initEventListeners(){let t;this.subElements.filterStatus.addEventListener("change",t=>{this.filterStatus=t.target.value,this.updateComponents({filterStatus:this.filterStatus})}),this.subElements.filterName.addEventListener("input",e=>{this.filterTitle=e.target.value,clearTimeout(t),t=setTimeout(()=>{this.updateComponents({filterTitle:this.filterTitle})},100)}),this.subElements.productsContainer.addEventListener("pointerdown",t=>{t.target.hasAttribute("data-clear-filters")&&(this.resetFilters(),this.updateComponents())}),this.subElements.sliderContainer.addEventListener("range-select",t=>{this.filterFrom=t.detail.from,this.filterTo=t.detail.to,this.updateComponents({filterFrom:this.filterFrom,filterTo:this.filterTo})})}resetFilters(){this.filterTitle="",this.filterStatus="",this.filterFrom=0,this.filterTo=4e3,this.subElements.filterName.value="",this.subElements.filterStatus.value="",this.components.sliderContainer.resetSelected()}get template(){return'\n        <div class="products-list">\n          <div class="content__top-panel">\n            <h1 class="page-title">Products</h1>\n            <a href="/products/add" class="button-primary">Add product</a>\n          </div>\n          <div class="content-box content-box_small">\n            <form class="form-inline">\n              <div class="form-group">\n                <label class="form-label">Sort by:</label>\n                <input type="text" data-element="filterName" class="form-control" placeholder="Product name">\n              </div>\n              <div class="form-group" data-element="sliderContainer">\n                <label class="form-label">Price:</label>\n              </div>\n              <div class="form-group">\n                <label class="form-label">Status:</label>\n                <select class="form-control" data-element="filterStatus">\n                  <option value="" selected="">Any</option>\n                  <option value="1">Active</option>\n                  <option value="0">Not active</option>\n                </select>\n              </div>\n            </form>\n          </div>\n          <div data-element="productsContainer" class="products-list__container"></div>\n        </div>'}getSubElements(t){return[...t.querySelectorAll("[data-element]")].reduce((t,e)=>(t[e.dataset.element]=e,t),{})}remove(){this.element&&this.element.remove()}destroy(){this.remove(),this.element=null,this.subElements=null;for(const t of Object.values(this.components))t.destroy()}}},9:function(t,e,s){"use strict";e.a=async function(t,e){let s,n;try{s=await fetch(t.toString(),e)}catch(t){throw new i(s,"Network error has occurred.")}if(!s.ok){let t=s.statusText;try{n=await s.json(),t=n.error&&n.error.message||n.data&&n.data.error&&n.data.error.message||t}catch(t){}let e=`Error ${s.status}: ${t}`;throw new i(s,n,e)}try{return await s.json()}catch(t){throw new i(s,null,t.message)}};class i extends Error{constructor(t,e,s){var i,n,r;super(s),r="FetchError",(n="name")in(i=this)?Object.defineProperty(i,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):i[n]=r,this.response=t,this.body=e}}window.addEventListener("unhandledrejection",t=>{t.reason instanceof i&&alert(t.reason.message)})}}]);
//# sourceMappingURL=products-list-index-js-5.js.map
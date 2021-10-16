(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{12:function(e,t,n){"use strict";function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return i}));class i{constructor({items:e=[]}={}){s(this,"element",null),s(this,"draggable",null),s(this,"placeholder",null),s(this,"pointerShift",{}),s(this,"defaultTopShift",5),s(this,"pointerdownHandler",e=>{const t=e.target.closest(".sortable-list__item"),n=e.target.closest("[data-grab-handle]"),s=e.target.closest("[data-delete-handle]");n&&(e.preventDefault(),this.grabListItem(t,e)),s&&t.remove()}),s(this,"pointermoveHandler",({clientX:e,clientY:t})=>{this.move(this.draggable,e,t);const{bottom:n}=this.draggable.getBoundingClientRect(),s=this.placeholder.previousElementSibling,i=this.placeholder.nextElementSibling;s&&s.getBoundingClientRect().bottom+this.defaultTopShift>n&&s.before(this.placeholder),i&&i!==this.draggable&&i.getBoundingClientRect().bottom-this.defaultTopShift<n&&i.after(this.placeholder),this.scrollWhenNearWindowBorder(t)}),s(this,"pointerupHandler",e=>{const t=[...this.element.children].indexOf(this.placeholder);this.removeDocumentListeners(),this.placeholder.replaceWith(this.draggable),this.draggable.style="",this.draggable.classList.remove("sortable-list__item_dragging"),this.draggable=null,this.placeholder=null,this.pointerShift={},t!==this.elementInitialIndex&&this.dispatchEvent("sortable-list-reorder",{from:this.elementInitialIndex,to:t})}),this.items=e,this.render(),this.initEventListeners()}render(){this.element=document.createElement("ul"),this.element.className="sortable-list",this.element.innerHTML=this.items.map(e=>(e.classList.add("sortable-list__item"),e.outerHTML)).join("")}initEventListeners(){this.element.addEventListener("pointerdown",this.pointerdownHandler,!0)}addDocumentListeners(){document.addEventListener("pointermove",this.pointermoveHandler,!0),document.addEventListener("pointerup",this.pointerupHandler,!0)}removeDocumentListeners(){document.removeEventListener("pointermove",this.pointermoveHandler,!0),document.removeEventListener("pointerup",this.pointerupHandler,!0)}scrollWhenNearWindowBorder(e){e>=document.documentElement.clientHeight-20&&window.scrollBy(0,10),e<=20&&window.scrollBy(0,-10)}grabListItem(e,{clientX:t,clientY:n}){const s=document.createElement("li"),i=getComputedStyle(e);this.elementInitialIndex=[...this.element.children].indexOf(e),["height","width"].forEach(t=>{s.style[t]=i[t],e.style[t]=i[t]}),this.pointerShift=this.getPointerShift(e,t,n),e.classList.add("sortable-list__item_dragging"),s.className="sortable-list__placeholder",e.before(s),this.element.append(e),e.ondragstart=()=>!1,this.move(e,t,n),this.draggable=e,this.placeholder=s,this.addDocumentListeners()}getPointerShift(e,t,n){const{left:s,top:i}=e.getBoundingClientRect();return{x:t-s,y:n-i}}move(e,t,n){e.style.left=t-this.pointerShift.x+"px",e.style.top=n-this.pointerShift.y+this.defaultTopShift+"px"}dispatchEvent(e,t){this.element.dispatchEvent(new CustomEvent(e,{bubbles:!0,detail:t}))}remove(){this.element&&this.element.remove()}destroy(){this.remove(),this.element=null,this.removeDocumentListeners()}}},13:function(e,t,n){"use strict";function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return i}));class i{constructor(e="",t={duration:0,type:"error"}){s(this,"element",null),this.message=e,this.duration=t.duration,this.type=t.type,this.render()}render(){const e=document.createElement("div");e.innerHTML=this.template,this.element=e.firstElementChild}get template(){return`\n      <div class="notification ${"success"===this.type?"success":"error"}" style="--value:${this.duration/1e3}s">\n        <div class="timer"></div>\n        <div class="inner-wrapper">\n          <div class="notification-body">\n            ${this.message}\n          </div>\n        </div>\n      </div>\n    `}show(e=document.body){null!==i.currentNotification&&i.currentNotification.remove(),i.currentNotification=this,this.element.classList.add("show"),e.append(this.element),setTimeout(()=>{this.remove()},this.duration)}remove(){this.element.remove()}destroy(){this.remove()}}s(i,"currentNotification",null)},6:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u}));var s=n(12),i=e=>e.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),r=n(9);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const a="https://course-js.javascript.ru/";class l{constructor(e=null){o(this,"element",null),o(this,"subElements",[]),o(this,"product",{}),o(this,"categories",{}),o(this,"defaultProduct",{title:"",description:"",quantity:1,subcategory:"",status:1,images:[],price:100,discount:0}),o(this,"loadImage",e=>{const t=e.target,n=document.createElement("input");n.type="file",n.accept="image/*",n.onchange=async e=>{const[n]=e.target.files;t.classList.add("is-loading");const s=await this.uploadToImgur(n);if(t.classList.remove("is-loading"),s&&s.data){const e={source:n.name,url:s.data.link};this.subElements.imageListContainer.firstElementChild.append(this.getImageElement(e))}},n.dispatchEvent(new MouseEvent("click"))}),o(this,"submit",e=>{e.preventDefault(),this.save()}),this.productId=e}async switchFromAddToEdit(e){this.productId=e;const t=await this.loadData(this.productId);this.product=t.product,this.subElements.saveButton.innerText="Edit product"}async render(){const e=await this.loadData(this.productId);this.product=e.product,this.categories=e.categories,this.defaultProduct.subcategory=this.categories[0].subcategories[0].id;const t=document.createElement("div");return t.innerHTML=this.product?this.getForm():this.getEmptyTemplate(),this.element=t.firstElementChild,this.product&&(this.subElements=this.getSubElements(this.element),this.fillFormWithObject(this.subElements.productForm,this.product),this.setSortableImageList(),this.initEventListeners()),this.element}initEventListeners(){const{productForm:e,imageListContainer:t}=this.subElements;e.addEventListener("submit",this.submit),e.elements.uploadImage.addEventListener("pointerdown",this.loadImage)}async save(){const{productForm:e}=this.subElements;let t="PUT",n="product-saved";this.productId&&(t="PATCH",n="product-edited"),this.fillObjectWithForm(this.product,e);try{const e=new URL("api/rest/products",a),s={method:t,headers:{"Content-type":"application/json;charset=utf-8"},body:JSON.stringify(this.product)},i=await Object(r.a)(e.href,s);this.element.dispatchEvent(new CustomEvent(n,{bubbles:!0,detail:{response:i}}))}catch(e){console.log("error",e)}}async uploadToImgur(e){const t=new Headers;t.append("Authorization","Client-ID 28aaa2e823b03b1");const n=new FormData;n.append("image",e);const s={method:"POST",headers:t,body:n,redirect:"follow"};try{return await Object(r.a)("https://api.imgur.com/3/image",s)}catch(e){console.log("error",e)}}fillObjectWithForm(e,t){const n=["images"],s=Object.keys(this.defaultProduct).filter(e=>!n.includes(e)),i=["price","discount","quantity","status"],r=this.subElements.imageListContainer.querySelectorAll(".sortable-table__cell-img");s.forEach(n=>{e[n]=i.includes(n)?parseInt(t.elements[n].value):t.elements[n].value}),e.images=[...r].map(e=>({source:e.alt,url:e.src})),this.productId&&(e.id=this.productId)}fillFormWithObject(e,t){const n=["images"];Object.keys(this.defaultProduct).filter(e=>!n.includes(e)).forEach(n=>{e.elements[n].value=t[n]||this.defaultProduct[n]})}async loadData(e=null){try{let[t,[n]]=await Promise.all([this.getCategoriesPromise(),this.getProductDataPromise(e)]);return{categories:t,product:n}}catch(e){console.log(e)}}async getProductDataPromise(e){if(e){const t=new URL("api/rest/products",a);return t.searchParams.append("id",e),Object(r.a)(t.href)}return[this.defaultProduct]}async getCategoriesPromise(){const e=new URL("api/rest/categories",a);return e.searchParams.append("_sort","weight"),e.searchParams.append("_refs","subcategory"),Object(r.a)(e.href)}getCatSelectHTML(){const e=document.createElement("div");return e.innerHTML=this.categories.map(e=>{if(e.subcategories)return e.subcategories.map(t=>`<option value="${t.id}">${e.title} > ${t.title}</option>`).join("")}).join(""),e.innerHTML}setSortableImageList(){const e=this.product.images.map(e=>this.getImageElement(e)),t=new s.a({items:e});this.subElements.imageListContainer.append(t.element)}getImageElement(e){const t=document.createElement("div");return t.innerHTML=`\n      <li class="products-edit__imagelist-item sortable-list__item" style="">\n        <span>\n            <img src="project-structure/icon-grab.svg" data-grab-handle="" alt="grab">\n            <img class="sortable-table__cell-img" alt="${i(e.source)}" src="${i(e.url)}">\n            <span>${i(e.source)}</span>\n        </span>\n        <button type="button">\n          <img src="project-structure/icon-trash.svg" data-delete-handle="" alt="delete">\n        </button>\n      </li>`,t.firstElementChild}getForm(){return`\n      <div class="product-form">\n        <form data-element="productForm" class="form-grid">\n\n          <div class="form-group form-group__half_left">\n            <fieldset>\n              <label class="form-label">Product name</label>\n              <input id="title"\n                    required=""\n                    type="text"\n                    name="title"\n                    class="form-control"\n                    placeholder="Product name">\n            </fieldset>\n          </div>\n\n          <div class="form-group form-group__wide">\n            <label class="form-label">Description</label>\n            <textarea id="description"\n                    required=""\n                    class="form-control"\n                    name="description"\n                    data-element="productDescription"\n                    placeholder="Product description">\n            </textarea>\n          </div>\n\n          <div class="form-group form-group__wide">\n            <label class="form-label">Image</label>\n\n            <div data-element="imageListContainer"></div>\n\n            <button type="button"\n                    name="uploadImage"\n                    class="button-primary-outline fit-content">\n                <span>Upload</span>\n             </button>\n          </div>\n\n          <div class="form-group form-group__half_left">\n            <label class="form-label">Category</label>\n            <select class="form-control" name="subcategory" id="subcategory">\n                ${this.getCatSelectHTML()}\n            </select>\n          </div>\n\n          <div class="form-group form-group__half_left form-group__two-col">\n            <fieldset>\n              <label class="form-label">Price ($)</label>\n              <input id="price"\n                    equired=""\n                    type="number"\n                    name="price"\n                    class="form-control"\n                    placeholder="${this.defaultProduct.price}">\n            </fieldset>\n            <fieldset>\n              <label class="form-label">Discount ($)</label>\n              <input id="discount"\n                    required=""\n                    type="number"\n                    name="discount"\n                    class="form-control"\n                    placeholder="${this.defaultProduct.discount}">\n            </fieldset>\n          </div>\n\n          <div class="form-group form-group__part-half">\n            <label class="form-label">Quantity</label>\n            <input id="quantity"\n                    required=""\n                    type="number"\n                    class="form-control"\n                    name="quantity"\n                    placeholder="${this.defaultProduct.quantity}">\n          </div>\n\n          <div class="form-group form-group__part-half">\n            <label class="form-label">Status</label>\n            <select id="status" class="form-control" name="status">\n              <option value="1">Active</option>\n              <option value="0">Not active</option>\n            </select>\n          </div>\n\n          <div class="form-buttons">\n            <button type="submit" name="save" class="button-primary-outline" data-element="saveButton">\n              ${this.productId?"Edit product":"Save product"}\n            </button>\n          </div>\n\n        </form>\n      </div>`}getEmptyTemplate(){return'<div>\n      <h1 class="page-title">Page not found</h1>\n      <p>Sorry, this item does not exist.</p>\n    </div>'}getSubElements(e){return Array.from(e.querySelectorAll("[data-element]")).reduce((e,t)=>(e[t.dataset.element]=t,e),{})}remove(){this.element&&this.element.remove()}destroy(){this.remove(),this.element=null,this.subElements=[],this.product={}}}var c=n(13);function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class u{constructor(e){d(this,"element",void 0),d(this,"subElements",{}),d(this,"components",{});const t=e.split("/").pop();this.productId="add"===t?null:t}async render(){const e=document.createElement("div");return e.innerHTML=this.template,this.element=e.firstElementChild,this.subElements=this.getSubElements(this.element),await this.initComponents(),this.renderComponents(),this.initEventListeners(),this.element}async initComponents(){const e=new l(this.productId);await e.render(),this.components={productForm:e}}renderComponents(){Object.keys(this.subElements).forEach(e=>{this.components.hasOwnProperty(e)&&this.subElements[e].append(this.components[e].element)})}initEventListeners(){this.subElements.productForm.addEventListener("product-edited",e=>{this.showNotification("success","Product has been edited")}),this.subElements.productForm.addEventListener("product-saved",async e=>{const t=document.querySelector("main");t.classList.add("is-loading"),this.productId=e.detail.response.id,this.setPageTitle("Edit"),history.pushState(null,null,"/products/"+this.productId),await this.components.productForm.switchFromAddToEdit(this.productId),t.classList.remove("is-loading"),this.showNotification("success","Product has been saved")})}showNotification(e,t){new c.a(t,{duration:3e3,type:e}).show()}setPageTitle(e){this.subElements.pageTitle.innerHTML='<a href="/products" class="link">Products</a> / '+e}get template(){return`<div class="products-edit">\n              <div class="content__top-panel">\n                <h1 class="page-title" data-element='pageTitle'>\n                  <a href="/products" class="link">Products</a> / ${this.productId?"Edit":"Add"}\n                </h1>\n              </div>\n              <div class="content-box" data-element='productForm'></div>\n            </div>`}getSubElements(e){return[...e.querySelectorAll("[data-element]")].reduce((e,t)=>(e[t.dataset.element]=t,e),{})}remove(){this.element&&this.element.remove()}destroy(){this.remove(),this.element=null,this.subElements=null;for(const e of Object.values(this.components))e.destroy()}}},9:function(e,t,n){"use strict";t.a=async function(e,t){let n,i;try{n=await fetch(e.toString(),t)}catch(e){throw new s(n,"Network error has occurred.")}if(!n.ok){let e=n.statusText;try{i=await n.json(),e=i.error&&i.error.message||i.data&&i.data.error&&i.data.error.message||e}catch(e){}let t=`Error ${n.status}: ${e}`;throw new s(n,i,t)}try{return await n.json()}catch(e){throw new s(n,null,e.message)}};class s extends Error{constructor(e,t,n){var s,i,r;super(n),r="FetchError",(i="name")in(s=this)?Object.defineProperty(s,i,{value:r,enumerable:!0,configurable:!0,writable:!0}):s[i]=r,this.response=e,this.body=t}}window.addEventListener("unhandledrejection",e=>{e.reason instanceof s&&alert(e.reason.message)})}}]);
//# sourceMappingURL=products-edit-index-js-4.js.map
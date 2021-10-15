/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({"categories-index-js":"categories-index-js","dashboard-index-js~sales-index-js":"dashboard-index-js~sales-index-js","dashboard-index-js":"dashboard-index-js","sales-index-js":"sales-index-js","error404-index-js":"error404-index-js","products-edit-index-js":"products-edit-index-js","products-list-index-js":"products-list-index-js"}[chunkId]||chunkId) + "-" + chunkId + ".js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/sidebar/index.js":
/*!*****************************************!*\
  !*** ./src/components/sidebar/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nclass Sidebar {\n  constructor() {\n    _defineProperty(this, \"onPageRender\", event => {\n      const pagePath = event.detail.path;\n      this.setActiveItem(pagePath);\n    });\n\n    if (!Sidebar.sidebarInstance) {\n      Sidebar.sidebarInstance = this;\n    } else {\n      return Sidebar.sidebarInstance;\n    }\n\n    this.element = document.querySelector(`[data-element=sidebar-nav]`);\n  }\n\n  initialize() {\n    this.initToggleButton();\n    this.addEventListeners();\n  }\n\n  initToggleButton() {\n    const toggleButton = this.element.querySelector('.sidebar__toggler');\n\n    if (toggleButton !== null) {\n      toggleButton.addEventListener('pointerdown', () => {\n        document.body.classList.toggle('is-collapsed-sidebar');\n      });\n    }\n  }\n\n  setActiveItem(pagePath) {\n    const page = pagePath.replace(/^\\/|\\/$/, '').split('/').shift();\n    const activeLink = this.element.querySelector(`[data-page=${page}]`);\n    const menuItems = this.element.querySelectorAll('li');\n    [...menuItems].forEach(item => {\n      item.classList.remove('active');\n      item.firstElementChild.blur();\n    });\n\n    if (activeLink) {\n      activeLink.parentElement.classList.add('active');\n    }\n  }\n\n  addEventListeners() {\n    document.addEventListener(\"route\", this.onPageRender);\n  }\n\n}\n\n_defineProperty(Sidebar, \"sidebarInstance\", null);\n\nconst sidebar = new Sidebar();\n/* harmony default export */ __webpack_exports__[\"default\"] = (sidebar);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9zaWRlYmFyL2luZGV4LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2lkZWJhci9pbmRleC5qcz9iMTkyIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFNpZGViYXIge1xuICBzdGF0aWMgc2lkZWJhckluc3RhbmNlID0gbnVsbDtcblxuICBvblBhZ2VSZW5kZXIgPSBldmVudCA9PiB7XG4gICAgY29uc3QgcGFnZVBhdGggPSBldmVudC5kZXRhaWwucGF0aDtcblxuICAgIHRoaXMuc2V0QWN0aXZlSXRlbShwYWdlUGF0aCk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBpZiAoIVNpZGViYXIuc2lkZWJhckluc3RhbmNlKSB7XG4gICAgICBTaWRlYmFyLnNpZGViYXJJbnN0YW5jZSA9IHRoaXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBTaWRlYmFyLnNpZGViYXJJbnN0YW5jZTtcbiAgICB9XG5cbiAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1lbGVtZW50PXNpZGViYXItbmF2XWApO1xuICB9XG5cbiAgaW5pdGlhbGl6ZSgpIHtcbiAgICB0aGlzLmluaXRUb2dnbGVCdXR0b24oKTtcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKCk7XG4gIH1cblxuICBpbml0VG9nZ2xlQnV0dG9uKCkge1xuICAgIGNvbnN0IHRvZ2dsZUJ1dHRvbiA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcl9fdG9nZ2xlcicpO1xuXG4gICAgaWYgKHRvZ2dsZUJ1dHRvbiAhPT0gbnVsbCkge1xuICAgICAgdG9nZ2xlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJkb3duJywgKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoJ2lzLWNvbGxhcHNlZC1zaWRlYmFyJyk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBzZXRBY3RpdmVJdGVtKHBhZ2VQYXRoKSB7XG4gICAgY29uc3QgcGFnZSA9IHBhZ2VQYXRoLnJlcGxhY2UoL15cXC98XFwvJC8sICcnKS5zcGxpdCgnLycpLnNoaWZ0KCk7XG4gICAgY29uc3QgYWN0aXZlTGluayA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1wYWdlPSR7cGFnZX1dYCk7XG4gICAgY29uc3QgbWVudUl0ZW1zID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpJyk7XG5cbiAgICBbLi4ubWVudUl0ZW1zXS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgIGl0ZW0uZmlyc3RFbGVtZW50Q2hpbGQuYmx1cigpO1xuICAgIH0pO1xuXG4gICAgaWYgKGFjdGl2ZUxpbmspIHtcbiAgICAgIGFjdGl2ZUxpbmsucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICB9XG4gIH1cblxuICBhZGRFdmVudExpc3RlbmVycygpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwicm91dGVcIiwgdGhpcy5vblBhZ2VSZW5kZXIpO1xuICB9XG59XG5cbmNvbnN0IHNpZGViYXIgPSBuZXcgU2lkZWJhcigpO1xuXG5leHBvcnQgZGVmYXVsdCBzaWRlYmFyO1xuIl0sIm1hcHBpbmdzIjoiOzs7QUFBQTtBQVNBO0FBQUE7QUFMQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXBEQTtBQUNBO0FBREE7QUFDQTtBQXFEQTtBQUVBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/sidebar/index.js\n");

/***/ }),

/***/ "./src/components/tooltip/index.js":
/*!*****************************************!*\
  !*** ./src/components/tooltip/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nclass Tooltip {\n  constructor() {\n    _defineProperty(this, \"element\", null);\n\n    _defineProperty(this, \"SHIFT\", 10);\n\n    _defineProperty(this, \"pointeroverHandler\", event => {\n      const target = event.target.closest('[data-tooltip]');\n      if (!target) return;\n      this.remove();\n      this.render();\n      this.element.innerHTML = target.dataset.tooltip;\n      this.moveTo(event.clientX, event.clientY);\n    });\n\n    _defineProperty(this, \"pointeroutHandler\", event => {\n      const target = event.target.closest('[data-tooltip]');\n      if (!target) return;\n      this.remove();\n    });\n\n    _defineProperty(this, \"pointermoveHandler\", event => {\n      const target = event.target.closest('[data-tooltip]');\n\n      if (!target) {\n        this.remove();\n        return;\n      }\n\n      this.moveTo(event.clientX, event.clientY);\n    });\n\n    if (!Tooltip.tooltipInstance) {\n      Tooltip.tooltipInstance = this;\n    }\n\n    return Tooltip.tooltipInstance;\n  }\n\n  initialize() {\n    this.initEventListeners();\n  }\n\n  initEventListeners() {\n    document.addEventListener('pointerover', this.pointeroverHandler);\n    document.addEventListener('pointerout', this.pointeroutHandler);\n    document.addEventListener('pointermove', this.pointermoveHandler);\n  }\n\n  render() {\n    this.element = document.createElement('div');\n    this.element.className = 'tooltip';\n    document.body.append(this.element);\n  }\n\n  moveTo(pageX, pageY) {\n    const elementWidth = this.element.offsetWidth;\n    const elementHeight = this.element.offsetHeight;\n    const documentWidth = document.documentElement.clientWidth;\n    const documentHeight = document.documentElement.clientHeight;\n    const left = documentWidth - pageX - this.SHIFT - elementWidth;\n    const top = documentHeight - pageY - this.SHIFT - elementHeight;\n    this.element.style.left = (left > 0 ? pageX + this.SHIFT : documentWidth - elementWidth) + 'px';\n    this.element.style.top = (top > 0 ? pageY + this.SHIFT : documentHeight - elementHeight) + 'px';\n  }\n\n  remove() {\n    if (this.element) {\n      this.element.remove();\n    }\n  }\n\n  destroy() {\n    this.remove();\n    document.removeEventListener('pointerover', this.pointeroverHandler);\n    document.removeEventListener('pointerout', this.pointeroutHandler);\n    document.removeEventListener('pointermove', this.pointermoveHandler);\n  }\n\n}\n\n_defineProperty(Tooltip, \"tooltipInstance\", null);\n\nconst tooltip = new Tooltip();\n/* harmony default export */ __webpack_exports__[\"default\"] = (tooltip);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy90b29sdGlwL2luZGV4LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdG9vbHRpcC9pbmRleC5qcz82Nzk3Il0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFRvb2x0aXAge1xuICBzdGF0aWMgdG9vbHRpcEluc3RhbmNlID0gbnVsbDtcbiAgZWxlbWVudCA9IG51bGw7XG4gIFNISUZUID0gMTA7XG5cbiAgcG9pbnRlcm92ZXJIYW5kbGVyID0gZXZlbnQgPT4ge1xuICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCdbZGF0YS10b29sdGlwXScpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHJldHVybjtcblxuICAgIHRoaXMucmVtb3ZlKCk7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgICB0aGlzLmVsZW1lbnQuaW5uZXJIVE1MID0gdGFyZ2V0LmRhdGFzZXQudG9vbHRpcDtcbiAgICB0aGlzLm1vdmVUbyhldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZKTtcbiAgfVxuXG4gIHBvaW50ZXJvdXRIYW5kbGVyID0gZXZlbnQgPT4ge1xuICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCdbZGF0YS10b29sdGlwXScpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHJldHVybjtcblxuICAgIHRoaXMucmVtb3ZlKCk7XG4gIH1cblxuICBwb2ludGVybW92ZUhhbmRsZXIgPSBldmVudCA9PiB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJ1tkYXRhLXRvb2x0aXBdJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhpcy5yZW1vdmUoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLm1vdmVUbyhldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGlmICghVG9vbHRpcC50b29sdGlwSW5zdGFuY2UpIHtcbiAgICAgIFRvb2x0aXAudG9vbHRpcEluc3RhbmNlID0gdGhpcztcbiAgICB9XG5cbiAgICByZXR1cm4gVG9vbHRpcC50b29sdGlwSW5zdGFuY2U7XG4gIH1cblxuICBpbml0aWFsaXplKCkge1xuICAgIHRoaXMuaW5pdEV2ZW50TGlzdGVuZXJzKCk7XG4gIH1cblxuICBpbml0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcm92ZXInLCB0aGlzLnBvaW50ZXJvdmVySGFuZGxlcik7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcm91dCcsIHRoaXMucG9pbnRlcm91dEhhbmRsZXIpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJtb3ZlJywgdGhpcy5wb2ludGVybW92ZUhhbmRsZXIpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMuZWxlbWVudC5jbGFzc05hbWUgPSAndG9vbHRpcCc7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmQodGhpcy5lbGVtZW50KTtcbiAgfVxuXG4gIG1vdmVUbyhwYWdlWCwgcGFnZVkpIHtcbiAgICBjb25zdCBlbGVtZW50V2lkdGggPSB0aGlzLmVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gICAgY29uc3QgZWxlbWVudEhlaWdodCA9IHRoaXMuZWxlbWVudC5vZmZzZXRIZWlnaHQ7XG5cbiAgICBjb25zdCBkb2N1bWVudFdpZHRoID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoO1xuICAgIGNvbnN0IGRvY3VtZW50SGVpZ2h0ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodDtcblxuICAgIGNvbnN0IGxlZnQgPSBkb2N1bWVudFdpZHRoIC0gcGFnZVggLSB0aGlzLlNISUZUIC0gZWxlbWVudFdpZHRoO1xuICAgIGNvbnN0IHRvcCA9IGRvY3VtZW50SGVpZ2h0IC0gcGFnZVkgLSB0aGlzLlNISUZUIC0gZWxlbWVudEhlaWdodDtcblxuICAgIHRoaXMuZWxlbWVudC5zdHlsZS5sZWZ0ID0gKGxlZnQgPiAwID8gcGFnZVggKyB0aGlzLlNISUZUIDogZG9jdW1lbnRXaWR0aCAtIGVsZW1lbnRXaWR0aCkgKyAncHgnO1xuICAgIHRoaXMuZWxlbWVudC5zdHlsZS50b3AgPSAodG9wID4gMCA/IHBhZ2VZICsgdGhpcy5TSElGVCA6IGRvY3VtZW50SGVpZ2h0IC0gZWxlbWVudEhlaWdodCkgKyAncHgnO1xuICB9XG5cbiAgcmVtb3ZlKCkge1xuICAgIGlmICh0aGlzLmVsZW1lbnQpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5yZW1vdmUoKTtcbiAgICB9XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHRoaXMucmVtb3ZlKCk7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigncG9pbnRlcm92ZXInLCB0aGlzLnBvaW50ZXJvdmVySGFuZGxlcik7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigncG9pbnRlcm91dCcsIHRoaXMucG9pbnRlcm91dEhhbmRsZXIpO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJtb3ZlJywgdGhpcy5wb2ludGVybW92ZUhhbmRsZXIpO1xuICB9XG59XG5cbmNvbnN0IHRvb2x0aXAgPSBuZXcgVG9vbHRpcCgpO1xuXG5leHBvcnQgZGVmYXVsdCB0b29sdGlwO1xuIl0sIm1hcHBpbmdzIjoiOzs7QUFBQTtBQW1DQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUE3QkE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQW9CQTtBQWxCQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBWUE7QUFWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFyRkE7QUFDQTtBQURBO0FBQ0E7QUFzRkE7QUFFQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/tooltip/index.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _router_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./router/index.js */ \"./src/router/index.js\");\n/* harmony import */ var _components_tooltip_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/tooltip/index.js */ \"./src/components/tooltip/index.js\");\n/* harmony import */ var _components_sidebar_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/sidebar/index.js */ \"./src/components/sidebar/index.js\");\n\n\n\n_components_tooltip_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].initialize();\n_components_sidebar_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].initialize();\ndocument.addEventListener('route', () => {\n  if (_components_tooltip_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].element !== null) {\n    _components_tooltip_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].element.remove();\n  }\n});\nconst router = _router_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].instance();\nrouter.addRoute(/^$/, 'dashboard').addRoute(/^project-structure\\/$/, 'dashboard').addRoute(/^products$/, 'products/list').addRoute(/^products\\/add$/, 'products/edit').addRoute(/^products\\/([\\w()-]+)$/, 'products/edit').addRoute(/^sales$/, 'sales').addRoute(/^categories$/, 'categories').addRoute(/^404\\/?$/, 'error404').setNotFoundPagePath('error404').listen();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUm91dGVyIGZyb20gJy4vcm91dGVyL2luZGV4LmpzJztcbmltcG9ydCB0b29sdGlwIGZyb20gJy4vY29tcG9uZW50cy90b29sdGlwL2luZGV4LmpzJztcbmltcG9ydCBzaWRlYmFyIGZyb20gJy4vY29tcG9uZW50cy9zaWRlYmFyL2luZGV4LmpzJztcblxudG9vbHRpcC5pbml0aWFsaXplKCk7XG5zaWRlYmFyLmluaXRpYWxpemUoKTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigncm91dGUnLCAoKSA9PiB7XG4gIGlmICh0b29sdGlwLmVsZW1lbnQgIT09IG51bGwpIHtcbiAgICB0b29sdGlwLmVsZW1lbnQucmVtb3ZlKCk7XG4gIH1cbn0pO1xuXG5jb25zdCByb3V0ZXIgPSBSb3V0ZXIuaW5zdGFuY2UoKTtcblxucm91dGVyXG4gIC5hZGRSb3V0ZSgvXiQvLCAnZGFzaGJvYXJkJylcbiAgLmFkZFJvdXRlKC9ecHJvamVjdC1zdHJ1Y3R1cmVcXC8kLywgJ2Rhc2hib2FyZCcpXG4gIC5hZGRSb3V0ZSgvXnByb2R1Y3RzJC8sICdwcm9kdWN0cy9saXN0JylcbiAgLmFkZFJvdXRlKC9ecHJvZHVjdHNcXC9hZGQkLywgJ3Byb2R1Y3RzL2VkaXQnKVxuICAuYWRkUm91dGUoL15wcm9kdWN0c1xcLyhbXFx3KCktXSspJC8sICdwcm9kdWN0cy9lZGl0JylcbiAgLmFkZFJvdXRlKC9ec2FsZXMkLywgJ3NhbGVzJylcbiAgLmFkZFJvdXRlKC9eY2F0ZWdvcmllcyQvLCAnY2F0ZWdvcmllcycpXG4gIC5hZGRSb3V0ZSgvXjQwNFxcLz8kLywgJ2Vycm9yNDA0JylcbiAgLnNldE5vdEZvdW5kUGFnZVBhdGgoJ2Vycm9yNDA0JylcbiAgLmxpc3RlbigpO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/pages lazy recursive ^\\.\\/.*\\/index\\.js$":
/*!*************************************************************!*\
  !*** ./src/pages lazy ^\.\/.*\/index\.js$ namespace object ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./categories/index.js\": [\n\t\t\"./src/pages/categories/index.js\",\n\t\t\"categories-index-js\"\n\t],\n\t\"./dashboard/index.js\": [\n\t\t\"./src/pages/dashboard/index.js\",\n\t\t\"dashboard-index-js~sales-index-js\",\n\t\t\"dashboard-index-js\"\n\t],\n\t\"./error404/index.js\": [\n\t\t\"./src/pages/error404/index.js\",\n\t\t\"error404-index-js\"\n\t],\n\t\"./products/edit/index.js\": [\n\t\t\"./src/pages/products/edit/index.js\",\n\t\t\"products-edit-index-js\"\n\t],\n\t\"./products/list/index.js\": [\n\t\t\"./src/pages/products/list/index.js\",\n\t\t\"products-list-index-js\"\n\t],\n\t\"./sales/index.js\": [\n\t\t\"./src/pages/sales/index.js\",\n\t\t\"dashboard-index-js~sales-index-js\",\n\t\t\"sales-index-js\"\n\t]\n};\nfunction webpackAsyncContext(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\treturn Promise.resolve().then(function() {\n\t\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\t\te.code = 'MODULE_NOT_FOUND';\n\t\t\tthrow e;\n\t\t});\n\t}\n\n\tvar ids = map[req], id = ids[0];\n\treturn Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {\n\t\treturn __webpack_require__(id);\n\t});\n}\nwebpackAsyncContext.keys = function webpackAsyncContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackAsyncContext.id = \"./src/pages lazy recursive ^\\\\.\\\\/.*\\\\/index\\\\.js$\";\nmodule.exports = webpackAsyncContext;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMgbGF6eSByZWN1cnNpdmUgXlxcLlxcLy4qXFwvaW5kZXhcXC5qcyQuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMgbGF6eSBeXFwuXFwvLipcXC9pbmRleFxcLmpzJCBuYW1lc3BhY2Ugb2JqZWN0P2I1MTAiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hcCA9IHtcblx0XCIuL2NhdGVnb3JpZXMvaW5kZXguanNcIjogW1xuXHRcdFwiLi9zcmMvcGFnZXMvY2F0ZWdvcmllcy9pbmRleC5qc1wiLFxuXHRcdFwiY2F0ZWdvcmllcy1pbmRleC1qc1wiXG5cdF0sXG5cdFwiLi9kYXNoYm9hcmQvaW5kZXguanNcIjogW1xuXHRcdFwiLi9zcmMvcGFnZXMvZGFzaGJvYXJkL2luZGV4LmpzXCIsXG5cdFx0XCJkYXNoYm9hcmQtaW5kZXgtanN+c2FsZXMtaW5kZXgtanNcIixcblx0XHRcImRhc2hib2FyZC1pbmRleC1qc1wiXG5cdF0sXG5cdFwiLi9lcnJvcjQwNC9pbmRleC5qc1wiOiBbXG5cdFx0XCIuL3NyYy9wYWdlcy9lcnJvcjQwNC9pbmRleC5qc1wiLFxuXHRcdFwiZXJyb3I0MDQtaW5kZXgtanNcIlxuXHRdLFxuXHRcIi4vcHJvZHVjdHMvZWRpdC9pbmRleC5qc1wiOiBbXG5cdFx0XCIuL3NyYy9wYWdlcy9wcm9kdWN0cy9lZGl0L2luZGV4LmpzXCIsXG5cdFx0XCJwcm9kdWN0cy1lZGl0LWluZGV4LWpzXCJcblx0XSxcblx0XCIuL3Byb2R1Y3RzL2xpc3QvaW5kZXguanNcIjogW1xuXHRcdFwiLi9zcmMvcGFnZXMvcHJvZHVjdHMvbGlzdC9pbmRleC5qc1wiLFxuXHRcdFwicHJvZHVjdHMtbGlzdC1pbmRleC1qc1wiXG5cdF0sXG5cdFwiLi9zYWxlcy9pbmRleC5qc1wiOiBbXG5cdFx0XCIuL3NyYy9wYWdlcy9zYWxlcy9pbmRleC5qc1wiLFxuXHRcdFwiZGFzaGJvYXJkLWluZGV4LWpzfnNhbGVzLWluZGV4LWpzXCIsXG5cdFx0XCJzYWxlcy1pbmRleC1qc1wiXG5cdF1cbn07XG5mdW5jdGlvbiB3ZWJwYWNrQXN5bmNDb250ZXh0KHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdFx0dGhyb3cgZTtcblx0XHR9KTtcblx0fVxuXG5cdHZhciBpZHMgPSBtYXBbcmVxXSwgaWQgPSBpZHNbMF07XG5cdHJldHVybiBQcm9taXNlLmFsbChpZHMuc2xpY2UoMSkubWFwKF9fd2VicGFja19yZXF1aXJlX18uZSkpLnRoZW4oZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xuXHR9KTtcbn1cbndlYnBhY2tBc3luY0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tBc3luY0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQXN5bmNDb250ZXh0LmlkID0gXCIuL3NyYy9wYWdlcyBsYXp5IHJlY3Vyc2l2ZSBeXFxcXC5cXFxcLy4qXFxcXC9pbmRleFxcXFwuanMkXCI7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tBc3luY0NvbnRleHQ7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages lazy recursive ^\\.\\/.*\\/index\\.js$\n");

/***/ }),

/***/ "./src/router/index.js":
/*!*****************************!*\
  !*** ./src/router/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Router; });\n/* harmony import */ var _render_page_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render-page.js */ \"./src/router/render-page.js\");\n // performs routing on all links\n\nclass Router {\n  constructor() {\n    this.routes = [];\n    this.initEventListeners();\n  }\n\n  initEventListeners() {\n    document.addEventListener('click', event => {\n      const link = event.target.closest('a');\n      if (!link) return;\n      const href = link.getAttribute('href');\n\n      if (href && href.startsWith('/')) {\n        event.preventDefault();\n        this.navigate(href);\n      }\n    });\n  }\n\n  static instance() {\n    if (!this._instance) {\n      this._instance = new Router();\n    }\n\n    return this._instance;\n  }\n\n  async route() {\n    let strippedPath = decodeURI(window.location.pathname).replace(/^\\/|\\/$/, '');\n    let match;\n    let path;\n\n    for (let route of this.routes) {\n      match = strippedPath.match(route.pattern);\n\n      if (match) {\n        this.page = await this.changePage(route.path, match[0]);\n        path = route.path;\n        break;\n      }\n    }\n\n    if (!match) {\n      this.page = await this.changePage(this.notFoundPagePath);\n      path = this.notFoundPagePath;\n    }\n\n    document.dispatchEvent(new CustomEvent('route', {\n      detail: {\n        page: this.page,\n        path\n      }\n    }));\n  }\n\n  async changePage(routPath, urlPath) {\n    if (this.page && this.page.destroy) {\n      this.page.destroy();\n    }\n\n    return await Object(_render_page_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(routPath, urlPath);\n  }\n\n  navigate(path) {\n    history.pushState(null, null, path);\n    this.route();\n  }\n\n  addRoute(pattern, path) {\n    this.routes.push({\n      pattern,\n      path\n    });\n    return this;\n  }\n\n  setNotFoundPagePath(path) {\n    this.notFoundPagePath = path;\n    return this;\n  }\n\n  listen() {\n    window.addEventListener('popstate', () => this.route());\n    this.route();\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcm91dGVyL2luZGV4LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3JvdXRlci9pbmRleC5qcz9hMThjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByZW5kZXJQYWdlIGZyb20gJy4vcmVuZGVyLXBhZ2UuanMnO1xuXG4vLyBwZXJmb3JtcyByb3V0aW5nIG9uIGFsbCBsaW5rc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5yb3V0ZXMgPSBbXTtcblxuICAgIHRoaXMuaW5pdEV2ZW50TGlzdGVuZXJzKCk7XG4gIH1cblxuICBpbml0RXZlbnRMaXN0ZW5lcnMgKCkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCBsaW5rID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJ2EnKTtcbiAgICAgIGlmICghbGluaykgcmV0dXJuO1xuXG4gICAgICBjb25zdCBocmVmID0gbGluay5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcblxuICAgICAgaWYgKGhyZWYgJiYgaHJlZi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5uYXZpZ2F0ZShocmVmKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBpbnN0YW5jZSgpIHtcbiAgICBpZiAoIXRoaXMuX2luc3RhbmNlKSB7XG4gICAgICB0aGlzLl9pbnN0YW5jZSA9IG5ldyBSb3V0ZXIoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlO1xuICB9XG5cbiAgYXN5bmMgcm91dGUoKSB7XG4gICAgbGV0IHN0cmlwcGVkUGF0aCA9IGRlY29kZVVSSSh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpXG4gICAgICAucmVwbGFjZSgvXlxcL3xcXC8kLywgJycpO1xuXG4gICAgbGV0IG1hdGNoO1xuICAgIGxldCBwYXRoO1xuXG4gICAgZm9yIChsZXQgcm91dGUgb2YgdGhpcy5yb3V0ZXMpIHtcbiAgICAgIG1hdGNoID0gc3RyaXBwZWRQYXRoLm1hdGNoKHJvdXRlLnBhdHRlcm4pO1xuXG4gICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgdGhpcy5wYWdlID0gYXdhaXQgdGhpcy5jaGFuZ2VQYWdlKHJvdXRlLnBhdGgsIG1hdGNoWzBdKTtcbiAgICAgICAgcGF0aCA9IHJvdXRlLnBhdGg7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghbWF0Y2gpIHtcbiAgICAgIHRoaXMucGFnZSA9IGF3YWl0IHRoaXMuY2hhbmdlUGFnZSh0aGlzLm5vdEZvdW5kUGFnZVBhdGgpO1xuICAgICAgcGF0aCA9IHRoaXMubm90Rm91bmRQYWdlUGF0aDtcbiAgICB9XG5cbiAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgncm91dGUnLCB7XG4gICAgICBkZXRhaWw6IHtcbiAgICAgICAgcGFnZTogdGhpcy5wYWdlLFxuICAgICAgICBwYXRoXG4gICAgICB9XG4gICAgfSkpO1xuICB9XG5cbiAgYXN5bmMgY2hhbmdlUGFnZSAocm91dFBhdGgsIHVybFBhdGgpIHtcbiAgICBpZiAodGhpcy5wYWdlICYmIHRoaXMucGFnZS5kZXN0cm95KSB7XG4gICAgICB0aGlzLnBhZ2UuZGVzdHJveSgpO1xuICAgIH1cblxuICAgIHJldHVybiBhd2FpdCByZW5kZXJQYWdlKHJvdXRQYXRoLCB1cmxQYXRoKTtcbiAgfVxuXG4gIG5hdmlnYXRlIChwYXRoKSB7XG4gICAgaGlzdG9yeS5wdXNoU3RhdGUobnVsbCwgbnVsbCwgcGF0aCk7XG4gICAgdGhpcy5yb3V0ZSgpO1xuICB9XG5cbiAgYWRkUm91dGUgKHBhdHRlcm4sIHBhdGgpIHtcbiAgICB0aGlzLnJvdXRlcy5wdXNoKHtwYXR0ZXJuLCBwYXRofSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzZXROb3RGb3VuZFBhZ2VQYXRoIChwYXRoKSB7XG4gICAgdGhpcy5ub3RGb3VuZFBhZ2VQYXRoID0gcGF0aDtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGxpc3RlbiAoKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgKCkgPT4gdGhpcy5yb3V0ZSgpKTtcbiAgICB0aGlzLnJvdXRlKCk7XG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFyRkEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/router/index.js\n");

/***/ }),

/***/ "./src/router/render-page.js":
/*!***********************************!*\
  !*** ./src/router/render-page.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (async function (routPath, urlPath) {\n  const main = document.querySelector('main');\n  main.classList.add('is-loading');\n  const {\n    default: Page\n  } = await __webpack_require__(\"./src/pages lazy recursive ^\\\\.\\\\/.*\\\\/index\\\\.js$\")(`./${routPath}/index.js`);\n  const page = new Page(urlPath);\n  const element = await page.render();\n  main.classList.remove('is-loading');\n  const contentNode = document.querySelector('#content');\n  contentNode.innerHTML = '';\n  contentNode.append(element);\n  return page;\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcm91dGVyL3JlbmRlci1wYWdlLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3JvdXRlci9yZW5kZXItcGFnZS5qcz8wNjY2Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uKHJvdXRQYXRoLCB1cmxQYXRoKSB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG5cbiAgbWFpbi5jbGFzc0xpc3QuYWRkKCdpcy1sb2FkaW5nJyk7XG5cbiAgY29uc3QgeyBkZWZhdWx0OiBQYWdlIH0gPSBhd2FpdCBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJbcmVxdWVzdF1cIiAqL2AuLi9wYWdlcy8ke3JvdXRQYXRofS9pbmRleC5qc2ApO1xuICBjb25zdCBwYWdlID0gbmV3IFBhZ2UodXJsUGF0aCk7XG4gIGNvbnN0IGVsZW1lbnQgPSBhd2FpdCBwYWdlLnJlbmRlcigpO1xuXG4gIG1haW4uY2xhc3NMaXN0LnJlbW92ZSgnaXMtbG9hZGluZycpO1xuXG4gIGNvbnN0IGNvbnRlbnROb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcblxuICBjb250ZW50Tm9kZS5pbm5lckhUTUwgPSAnJztcbiAgY29udGVudE5vZGUuYXBwZW5kKGVsZW1lbnQpO1xuXG4gIHJldHVybiBwYWdlO1xufVxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/router/render-page.js\n");

/***/ })

/******/ });
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _layout = __webpack_require__(1);
	
	var _layout2 = _interopRequireDefault(_layout);
	
	var _imgSlider = __webpack_require__(9);
	
	var _imgSlider2 = _interopRequireDefault(_imgSlider);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var vm = new Vue({
	  el: "#wh-container",
	  components: {
	    'my-layout': _layout2.default,
	    'img-slider': _imgSlider2.default
	  }
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(2)
	__vue_script__ = __webpack_require__(6)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] vue\\components\\layout.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(7)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./layout.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./layout.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, "@charset \"UTF-8\";\n/* 必需 */\n.expand-transition {\n  -webkit-transition: all .3s ease;\n  transition: all .3s ease;\n  height: auto;\n  padding: 10px;\n  background-color: #eee;\n  overflow: hidden; }\n\n/* .expand-enter 定义进入的开始状态 */\n/* .expand-leave 定义离开的结束状态 */\n.expand-enter,\n.expand-leave {\n  height: 0;\n  padding: 0 10px;\n  opacity: 0; }\n\n.nav-header {\n  width: 100%;\n  max-width: 1000px;\n  margin: 0 auto;\n  height: 70px;\n  white-space: nowrap;\n  font-size: 0; }\n  .nav-header .logo {\n    display: inline-block; }\n    .nav-header .logo img {\n      height: 70px; }\n  .nav-header .nav-header-right {\n    padding-top: 30px;\n    padding-left: 50px;\n    vertical-align: top;\n    height: 100%;\n    width: calc(100% - 75px);\n    font-size: 14px;\n    display: inline-block; }\n    .nav-header .nav-header-right .menu > div {\n      margin-right: 20px;\n      cursor: pointer;\n      position: relative; }\n    .nav-header .nav-header-right .menu .menu-panel .menu-dropdown {\n      position: absolute;\n      z-index: 100; }\n    .nav-header .nav-header-right .menu .menu-panel:focus {\n      outline: 0; }\n    .nav-header .nav-header-right .menu .menu-panel li {\n      height: 20px;\n      line-height: 20px; }\n    .nav-header .nav-header-right .search {\n      margin-right: 10px; }\n      .nav-header .nav-header-right .search input {\n        padding: 0 5px; }\n", ""]);
	
	// exports


/***/ },
/* 4 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if (media) {
			styleElement.setAttribute("media", media);
		}
	
		if (sourceMap) {
			// https://developer.chrome.com/devtools/docs/javascript-debugging
			// this makes source maps inside style tags work properly in Chrome
			css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */';
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    data: function data() {
	        return {
	            isSHowMenu: false
	        };
	    },
	
	    computed: {},
	    ready: function ready() {},
	    attached: function attached() {},
	
	    methods: {
	        "goHome": function goHome() {
	            window.location.href = "/";
	        },
	        "showMenu": function showMenu() {
	            this.isSHowMenu = !this.isSHowMenu;
	            if (this.isSHowMenu) {}
	        },
	        "hideMenu": function hideMenu() {
	            this.isSHowMenu = false;
	        },
	        'viewMore': function viewMore() {
	            this.isSHowMenu = false;
	            alert('i will go to see menu');
	        },
	        'viewDemo': function viewDemo() {
	            window.location.href = "/view/demo";
	        }
	    },
	    components: {}
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<div class='nav-header'>\n    <div class=\"logo\">\n        <img src=\"" + __webpack_require__(8) + "\" alt=\"\" />\n    </div>\n    <div class=\"nav-header-right\">\n        <div class='menu left'>\n            <div class=\"left\" v-on:click=\"goHome\">主页</div>\n            <div class=\"left menu-panel\" v-on:click.stop=\"showMenu\" v-on:blur=\"hideMenu\" tabindex=\"1\">菜单\n                <div class=\"menu-dropdown\" transition=\"expand\" v-el:menu v-if=\"isSHowMenu\" v-on:click.stop>\n                    <ul>\n                        <li v-on:click.stop=\"viewMore\">查看详情</li>\n                        <li v-on:click.stop=\"viewDemo\">我的DEMO</li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n        <div class=\"header-right right\">\n            <!-- <div class=\"search left\">\n                <input type=\"text\" placeholder=\"so so\">\n                <i>搜索</i>\n            </div> -->\n            <div class=\"login right\">\n                <a href=\"#\">登录</a>\n                <a href=\"#\">注册</a>\n            </div>\n        </div>\n    </div>\n</div>\n\n";

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = "data:image/jpeg;base64,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"

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(10)
	__vue_script__ = __webpack_require__(12)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] vue\\components\\imgSlider.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(13)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(11);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./imgSlider.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./imgSlider.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, ".img-slider {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  overflow: hidden; }\n  .img-slider ul {\n    -webkit-transition: all .5s ease;\n    transition: all .5s ease;\n    width: 100%;\n    height: 100%;\n    white-space: nowrap; }\n    .img-slider ul li {\n      height: 100%;\n      width: 100%;\n      display: inline-block; }\n      .img-slider ul li img {\n        width: 100%;\n        height: 100%; }\n  .img-slider .controller-panel {\n    text-align: center; }\n    .img-slider .controller-panel span {\n      margin-right: 5px;\n      cursor: pointer; }\n", ""]);
	
	// exports


/***/ },
/* 12 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    data: function data() {
	        return {
	            imgs: ["http://ac-bvpkzuy5.clouddn.com/f79fe858be612caa.jpg", "http://ac-bvpkzuy5.clouddn.com/d56569b9e44c0e12.jpg", "http://ac-bvpkzuy5.clouddn.com/f79fe858be612caa.jpg"],
	            selectedIndex: 0
	        };
	    },
	
	    computed: {
	        translate: function translate() {
	            var left = (0 - this.selectedIndex) * 100 + "%";
	            return {
	                transform: 'translate(' + left + ')'
	            };
	        }
	
	    },
	    ready: function ready() {
	        var self = this;
	        setInterval(function () {
	            self.selectedIndex++;
	            if (self.selectedIndex > self.imgs.length - 1) {
	                self.selectedIndex = 0;
	            }
	        }, 5000);
	    },
	    attached: function attached() {},
	
	    methods: {
	        changImg: function changImg(index) {
	            this.selectedIndex = index;
	        }
	    },
	    components: {}
	};

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<div class=\"img-slider\">\n    <ul :style=\"translate\">\n        <li class=\"img\" v-for=\"img in imgs\" track-by=\"$index\">\n            <img :src=\"img\" alt=\"img\" />\n        </li>\n    </ul>\n    <div class=\"controller-panel\">\n        <span v-for=\"img in imgs\" v-on:click=\"changImg($index)\" track-by=\"$index\">{{$index+1}}</span>\n    </div>\n</div>\n\n";

/***/ }
/******/ ]);
//# sourceMappingURL=layout.js.map
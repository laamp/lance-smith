/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	__webpack_require__.p = "dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/desktop.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/desktop.scss ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"@charset \\\"UTF-8\\\";\\n@media only screen and (min-width: 900px) {\\n  body {\\n    font-size: 135%;\\n    height: 100vh;\\n    display: flex;\\n    align-items: center;\\n    justify-content: center; }\\n  .wrapper {\\n    border-radius: 5px;\\n    width: 90%;\\n    min-width: 900px;\\n    max-width: 1500px;\\n    height: 90%;\\n    min-height: 600px;\\n    display: flex; }\\n  .wrapper nav {\\n    width: 25%;\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: flex-start; }\\n    .wrapper nav #menu-title {\\n      display: none; }\\n    .wrapper nav ul {\\n      flex-grow: 1; }\\n      .wrapper nav ul li {\\n        padding: 20px;\\n        cursor: pointer; }\\n    .wrapper nav #theme-switcher {\\n      flex-grow: 0;\\n      padding: 20px;\\n      cursor: pointer; }\\n      .wrapper nav #theme-switcher:active {\\n        transform: scale(1.05); }\\n  .wrapper .content {\\n    width: 75%;\\n    padding: 10px;\\n    overflow-y: auto;\\n    overflow-x: hidden; }\\n    .wrapper .content p {\\n      margin-bottom: 15px; }\\n    .wrapper .content .primary-skill .dev-icon {\\n      height: 120px;\\n      width: 120px; }\\n      .wrapper .content .primary-skill .dev-icon i {\\n        font-size: 120px; }\\n  .wrapper a {\\n    font-size: 90%; }\\n  #profile-picture {\\n    height: 260px;\\n    width: 260px;\\n    margin: 0 10px 10px 0;\\n    float: left; }\\n  .contact-list {\\n    display: flex;\\n    flex-wrap: wrap;\\n    margin-bottom: 10px; }\\n    .contact-list li {\\n      margin-right: 30px; }\\n  .h-divider {\\n    width: 100%;\\n    border-bottom: 3px solid black;\\n    margin-bottom: 10px; }\\n  .primary-skills {\\n    display: flex;\\n    justify-content: space-evenly;\\n    margin-top: 25px; }\\n  .primary-skill p {\\n    text-align: center; }\\n  .skills {\\n    margin-bottom: 20px; }\\n  .skills ul {\\n    margin-top: 15px;\\n    display: flex;\\n    flex-direction: column;\\n    flex-wrap: wrap;\\n    height: 150px;\\n    align-content: space-around; }\\n  .dev-icon {\\n    margin: 0 auto; }\\n  .light-mode .wrapper {\\n    background-color: #fdf6e3;\\n    border: 1px solid #d8d8d8;\\n    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.4); }\\n    .light-mode .wrapper a {\\n      color: #2aa198; }\\n      .light-mode .wrapper a:hover, .light-mode .wrapper a:active {\\n        color: #b58900;\\n        border-bottom: 3px solid #2aa198; }\\n    .light-mode .wrapper nav {\\n      background-color: #eee8d5; }\\n      .light-mode .wrapper nav ul li {\\n        border-bottom: 1px solid #c7c7c7; }\\n      .light-mode .wrapper nav #theme-switcher {\\n        border-top: 1px solid #c7c7c7;\\n        background-color: #fdf6e3; }\\n        .light-mode .wrapper nav #theme-switcher span {\\n          display: none; }\\n        .light-mode .wrapper nav #theme-switcher:active {\\n          box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.4); }\\n      .light-mode .wrapper nav #theme-switcher:after {\\n        content: 'Light theme 🌞️'; }\\n    .light-mode .wrapper .content {\\n      border-left: 1px solid #c7c7c7; }\\n    .light-mode .wrapper .selected-button {\\n      background-color: #fdf6e3;\\n      transform-origin: right;\\n      transform: scale(1.03);\\n      border-radius: 3px;\\n      box-shadow: 0px 0px 9px 1px rgba(0, 0, 0, 0.4);\\n      border-bottom: 3px solid #2aa198; }\\n    .light-mode .wrapper .h-divider {\\n      border-bottom-color: #2aa198; }\\n  .dark-mode .wrapper {\\n    background-color: #002b36;\\n    border: 1px solid #002b36;\\n    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.4); }\\n    .dark-mode .wrapper a {\\n      color: #b58900; }\\n      .dark-mode .wrapper a:hover, .dark-mode .wrapper a:active {\\n        color: #dc322f;\\n        border-bottom: 3px solid #b58900; }\\n    .dark-mode .wrapper nav {\\n      background-color: #073642; }\\n      .dark-mode .wrapper nav ul li {\\n        border-bottom: 1px solid #1f1f1f; }\\n      .dark-mode .wrapper nav #theme-switcher {\\n        border-top: 1px solid #1f1f1f;\\n        background-color: #002b36; }\\n        .dark-mode .wrapper nav #theme-switcher span {\\n          display: none; }\\n        .dark-mode .wrapper nav #theme-switcher:active {\\n          box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.4); }\\n      .dark-mode .wrapper nav #theme-switcher:after {\\n        content: 'Dark theme 🌛️'; }\\n    .dark-mode .wrapper .content {\\n      border-left: 1px solid #1f1f1f; }\\n    .dark-mode .wrapper .selected-button {\\n      background-color: #002b36;\\n      transform-origin: right;\\n      transform: scale(1.03);\\n      border-radius: 3px;\\n      box-shadow: 0px 0px 9px 1px rgba(0, 0, 0, 0.4);\\n      border-bottom: 3px solid #b58900; }\\n    .dark-mode .wrapper .h-divider {\\n      border-bottom-color: #b58900; } }\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/css/desktop.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/mobile.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/mobile.scss ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"@media only screen and (max-width: 900px) {\\n  .wrapper {\\n    font-size: 125%; } }\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/css/mobile.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/style.scss":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/style.scss ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"* {\\n  transition: 0.2s all ease;\\n  box-sizing: border-box;\\n  font-family: 'Open Sans', sans-serif; }\\n\\nbody {\\n  margin: 0; }\\n\\nh1,\\nh2,\\nh3,\\np,\\na {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  outline: 0;\\n  font-weight: inherit;\\n  font-style: inherit;\\n  font-family: inherit;\\n  vertical-align: baseline; }\\n\\nh1 {\\n  font-size: 2em; }\\n\\nh2 {\\n  font-size: 1.5em; }\\n\\nh3 {\\n  font-size: 1.17em; }\\n\\np {\\n  font-size: 1em; }\\n\\na {\\n  text-decoration: none; }\\n\\nul {\\n  margin: 0;\\n  padding: 0;\\n  list-style: none; }\\n\\n.content-section {\\n  transition: 0.2s all ease;\\n  visibility: hidden;\\n  opacity: 0;\\n  transform: translateX(20px);\\n  height: 0px;\\n  overflow: hidden; }\\n\\n.selected {\\n  transition: 0.2s all ease;\\n  visibility: visible;\\n  opacity: 1;\\n  transform: translateX(0);\\n  overflow: visible; }\\n\\n.dark-mode {\\n  color: #839496;\\n  background-color: #073642; }\\n  .dark-mode h1 {\\n    color: #93a1a1; }\\n\\n.light-mode {\\n  color: #657b83;\\n  background-color: #eee8d5; }\\n  .light-mode h1 {\\n    color: #586e75; }\\n\\n.debug-block {\\n  display: block;\\n  width: 200px;\\n  height: 200px;\\n  background-color: #268bd2;\\n  border: 2px dashed #d33682; }\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/css/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/vars.scss":
/*!********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/vars.scss ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/css/vars.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \"{\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    for (var i = 0; i < this.length; i++) {\n      // eslint-disable-next-line prefer-destructuring\n      var id = this[i][0];\n\n      if (id != null) {\n        alreadyImportedModules[id] = true;\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = modules[_i]; // skip already imported module\n      // this implementation is not 100% perfect for weird media query combinations\n      // when a module is imported multiple times with different media queries.\n      // I hope this will never occur (Hey this way we have smaller bundles)\n\n      if (item[0] == null || !alreadyImportedModules[item[0]]) {\n        if (mediaQuery && !item[2]) {\n          item[2] = mediaQuery;\n        } else if (mediaQuery) {\n          item[2] = \"(\".concat(item[2], \") and (\").concat(mediaQuery, \")\");\n        }\n\n        list.push(item);\n      }\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot).concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar stylesInDom = {};\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nfunction listToStyles(list, options) {\n  var styles = [];\n  var newStyles = {};\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var css = item[1];\n    var media = item[2];\n    var sourceMap = item[3];\n    var part = {\n      css: css,\n      media: media,\n      sourceMap: sourceMap\n    };\n\n    if (!newStyles[id]) {\n      styles.push(newStyles[id] = {\n        id: id,\n        parts: [part]\n      });\n    } else {\n      newStyles[id].parts.push(part);\n    }\n  }\n\n  return styles;\n}\n\nfunction addStylesToDom(styles, options) {\n  for (var i = 0; i < styles.length; i++) {\n    var item = styles[i];\n    var domStyle = stylesInDom[item.id];\n    var j = 0;\n\n    if (domStyle) {\n      domStyle.refs++;\n\n      for (; j < domStyle.parts.length; j++) {\n        domStyle.parts[j](item.parts[j]);\n      }\n\n      for (; j < item.parts.length; j++) {\n        domStyle.parts.push(addStyle(item.parts[j], options));\n      }\n    } else {\n      var parts = [];\n\n      for (; j < item.parts.length; j++) {\n        parts.push(addStyle(item.parts[j], options));\n      }\n\n      stylesInDom[item.id] = {\n        id: item.id,\n        refs: 1,\n        parts: parts\n      };\n    }\n  }\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n\n  if (typeof options.attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      options.attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(options.attributes).forEach(function (key) {\n    style.setAttribute(key, options.attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  var styles = listToStyles(list, options);\n  addStylesToDom(styles, options);\n  return function update(newList) {\n    var mayRemove = [];\n\n    for (var i = 0; i < styles.length; i++) {\n      var item = styles[i];\n      var domStyle = stylesInDom[item.id];\n\n      if (domStyle) {\n        domStyle.refs--;\n        mayRemove.push(domStyle);\n      }\n    }\n\n    if (newList) {\n      var newStyles = listToStyles(newList, options);\n      addStylesToDom(newStyles, options);\n    }\n\n    for (var _i = 0; _i < mayRemove.length; _i++) {\n      var _domStyle = mayRemove[_i];\n\n      if (_domStyle.refs === 0) {\n        for (var j = 0; j < _domStyle.parts.length; j++) {\n          _domStyle.parts[j]();\n        }\n\n        delete stylesInDom[_domStyle.id];\n      }\n    }\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/css/desktop.scss":
/*!******************************!*\
  !*** ./src/css/desktop.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./desktop.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/desktop.scss\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/css/desktop.scss?");

/***/ }),

/***/ "./src/css/mobile.scss":
/*!*****************************!*\
  !*** ./src/css/mobile.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./mobile.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/mobile.scss\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/css/mobile.scss?");

/***/ }),

/***/ "./src/css/style.scss":
/*!****************************!*\
  !*** ./src/css/style.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/style.scss\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/css/style.scss?");

/***/ }),

/***/ "./src/css/vars.scss":
/*!***************************!*\
  !*** ./src/css/vars.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./vars.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/vars.scss\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/css/vars.scss?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_vars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/vars */ \"./src/css/vars.scss\");\n/* harmony import */ var _css_vars__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_vars__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _css_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/style */ \"./src/css/style.scss\");\n/* harmony import */ var _css_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _css_desktop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/desktop */ \"./src/css/desktop.scss\");\n/* harmony import */ var _css_desktop__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_desktop__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _css_mobile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/mobile */ \"./src/css/mobile.scss\");\n/* harmony import */ var _css_mobile__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_mobile__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nwindow.addEventListener('DOMContentLoaded', () => {\n    const body = document.querySelector('body');\n    const themeSwitcher = document.getElementById('theme-switcher');\n    const sections = document.querySelectorAll('.content-section');\n    const buttons = document.querySelectorAll('nav ul li');\n\n    if (localStorage.getItem('color-mode') === 'dark') {\n        body.className = 'dark-mode';\n    } else {\n        body.className = 'light-mode';\n    }\n\n    const switchColorMode = () => {\n        if (body.classList.contains('light-mode')) {\n            body.classList.replace('light-mode', 'dark-mode');\n            localStorage.setItem('color-mode', 'dark');\n        } else {\n            body.classList.replace('dark-mode', 'light-mode');\n            localStorage.setItem('color-mode', 'light');\n        }\n    };\n\n    const switchButtonSelected = e => {\n        buttons.forEach(btn => btn.className = '');\n        e.target.classList.add('selected-button');\n\n        updateSelectedSection(e.target.innerText);\n    };\n\n    const updateSelectedSection = sectionName => {\n        sections.forEach(section => section.classList.remove('selected'));\n        const selectedSection = document.querySelector(`[data-section=\"${sectionName}\"]`);\n        selectedSection.classList.add('selected');\n    };\n\n    themeSwitcher.addEventListener('click', switchColorMode);\n    buttons.forEach(btn => btn.addEventListener('click', switchButtonSelected));\n\n    // debugging below this line\n});\n\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ })

/******/ });
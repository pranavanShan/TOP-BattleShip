/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\n    display: flex;\n    gap: 75px;\n    flex-direction: column;\n    padding: 0;\n    margin: 0;\n}\n\n\n.navbar {\n    border-bottom: 2.3px solid black;\n    display: flex;\n    justify-content: center;\n    \n}\n\n\n.playField {\n    display: flex;\n    justify-content: center;\n}\n\n.BTN {\n    cursor: pointer;\n    background-color: white;\n    border: 2.3px solid black;\n    padding: 15px;\n    padding-left: 20px;\n    padding-right: 20px;\n}\n\n.gameStartContainer {\n    display: flex;\n    gap: 10px;\n    flex-direction: column;\n    align-items: center;\n    min-width: 500px;\n\n}\n\n.gameboard {\n    display: flex;\n    height: 500px;\n    width: 500px;\n}\n\n\n.part, .placerpart, .attackPart {\n    border: 1px solid black;\n    height: 48px;\n    width: 48px;\n}\n\n.placerpart {\n    cursor: pointer;\n}\n.attackPart {\n    cursor: crosshair;\n}\n\n\n.highlight {\n    border: 1px solid green;\n    background-color: green;\n}\n\n.unplacable {\n    border: 1px solid red;\n    background-color: white;\n}\n\n.placedShip {\n    background-color: grey;\n}\n\n\n.inactivePart {\n    pointer-events: none;\n}\n.inactiveBoard {\n    pointer-events: none;\n}\n\n.playAgainBox {\n    display: flex;\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, 50%);\n    background-color: white;\n    width: 250px;\n    height: 250px;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    border: 2.3px solid black;\n    top: 0;\n}\n\n.blur {\n    filter: blur(2.3px);\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://top-battleship/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://top-battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://top-battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://top-battleship/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://top-battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://top-battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://top-battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://top-battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://top-battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://top-battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   gameBoard: () => (/* binding */ gameBoard)\n/* harmony export */ });\n/* harmony import */ var _ships_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ships.js */ \"./src/ships.js\");\n\nclass gameBoard {\n  constructor() {\n    this.board = (function createBoard() {\n      let array = [];\n      for (let i = 0; i < 10; i++) {\n        let subArray = new Array(10).fill(0);\n        array.push(subArray);\n      }\n      return array;\n    })();\n    this.totalShots = 0;\n    this.shotsHit = 0;\n    this.lostShips = 0;\n    this.totalShips = 0;\n    this.ships = {};\n    this.lost = false;\n  }\n\n  pathAvailable(coordinates, length, direction) {\n    let [y, x] = [...coordinates];\n    if (\n      this.board[y] === undefined ||\n      this.board[y][x] === undefined ||\n      this.board[y][x] !== 0\n    )\n      return false;\n    if (y + (length - 1) > 9 && direction) return false;\n    if (x + (length - 1) > 9 && direction == false) return false;\n    let position = this.board[y][x];\n    for (let i = 0; i < length; i++) {\n      if (position !== 0) {\n        return false;\n      }\n      if (direction && y < 9) y++;\n      else if (!direction && x < 9) x++;\n      position = this.board[y][x];\n    }\n    return true;\n  }\n\n  placeShip(coordinates, length, direction) {\n    let [y, x] = [...coordinates];\n    if (!this.pathAvailable(coordinates, length, direction)) return false;\n    this.totalShips++;\n    this.ships[this.totalShips] = new _ships_js__WEBPACK_IMPORTED_MODULE_0__.Ship(length);\n    for (let i = 0; i < length; i++) {\n      this.board[y][x] = this.totalShips;\n      direction ? y++ : x++;\n    }\n    return true;\n  }\n\n  receiveAttack(coordinates) {\n    let [y, x] = [...coordinates];\n    if (this.board[y] === undefined || this.board[y][x] === undefined)\n      return false;\n    this.totalShots++;\n    if (this.board[y][x] < 0) {\n      return false;\n    }\n    if (this.board[y][x] === 0) {\n      this.board[y][x] = -1;\n      return true;\n    }\n    if (this.board[y][x] > 0) {\n      this.shotsHit++;\n      this.ships[this.board[y][x]].hit();\n      this.ships[this.board[y][x]].isSunk();\n      if (this.ships[this.board[y][x]].isSunk()) this.lostShips++;\n      this.board[y][x] = -2;\n      if (this.totalShips === this.lostShips) this.lost = true;\n      return true;\n    }\n  }\n}\n\n\n\n\n//# sourceURL=webpack://top-battleship/./src/gameboard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Ship: () => (/* reexport safe */ _ships_js__WEBPACK_IMPORTED_MODULE_1__.Ship),\n/* harmony export */   gameBoard: () => (/* reexport safe */ _gameboard_js__WEBPACK_IMPORTED_MODULE_2__.gameBoard),\n/* harmony export */   player: () => (/* reexport safe */ _player_js__WEBPACK_IMPORTED_MODULE_3__.player)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _ships_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ships.js */ \"./src/ships.js\");\n/* harmony import */ var _gameboard_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameboard.js */ \"./src/gameboard.js\");\n/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./player.js */ \"./src/player.js\");\n\n\n\n\nconst navbar = document.createElement(\"div\");\nconst title = document.createElement(\"h1\");\ntitle.textContent = \"Battleship\";\nnavbar.classList.add(\"navbar\");\nnavbar.append(title);\ndocument.body.append(navbar);\n\nfunction createPlayerGrid() {\n  const playerGrid = document.createElement(\"div\");\n  playerGrid.classList.add(\"gameboard\");\n  for (let i = 0; i < 10; i++) {\n    const row = document.createElement(\"div\");\n    for (let j = 0; j < 10; j++) {\n      const part = document.createElement(\"div\");\n      part.classList.add(\"part\");\n      row.append(part);\n      playerGrid.append(row);\n    }\n  }\n  return playerGrid;\n}\n\nfunction receieveAttackDOM(player, playerGrid) {\n  for (let i = 0; i < player.board.board.length; i++) {\n    for (let j = 0; j < player.board.board[i].length; j++) {\n      let currentNode = playerGrid.childNodes[i].childNodes[j];\n      currentNode.classList.add(\"attackPart\");\n      currentNode.addEventListener(\"click\", () => {\n        player.board.receiveAttack([j, i]);\n        currentNode.classList.add(\"inactivePart\");\n        if (player.board.board[j][i] == -1)\n          currentNode.style.backgroundColor = \"black\";\n\n        if (player.board.board[j][i] == -2)\n          currentNode.style.backgroundColor = \"red\";\n        if (player.board.lost) {\n          const gameOverDOM = gameOver(\"Won\");\n          player1Grid.style.pointerEvents = \"none\";\n          player2Grid.style.pointerEvents = \"none\";\n          player1Grid.classList.add(\"blur\");\n          player2Grid.classList.add(\"blur\");\n          navbar.classList.add(\"blur\");\n          document.body.append(gameOverDOM);\n        }\n      });\n    }\n  }\n}\n\nfunction robotAttackDOM(player, playerGrid) {\n  let coords = [player.getRandomInteger(0, 10), player.getRandomInteger(0, 10)];\n  let result = player.board.receiveAttack(coords);\n  while (result === false) {\n    coords = [player.getRandomInteger(0, 10), player.getRandomInteger(0, 10)];\n    result = player.board.receiveAttack(coords);\n  }\n  let [y, x] = [...coords];\n  if (player.board.board[y][x] == -1) {\n    playerGrid.childNodes[x].childNodes[y].style.backgroundColor = \"black\";\n  }\n  if (player.board.board[y][x] == -2) {\n    playerGrid.childNodes[x].childNodes[y].style.backgroundColor = \"red\";\n  }\n\n  if (player.board.lost) {\n    const gameOverDOM = gameOver(\"Lost\");\n    player1Grid.style.pointerEvents = \"none\";\n    player2Grid.style.pointerEvents = \"none\";\n    player1Grid.classList.add(\"blur\");\n    player2Grid.classList.add(\"blur\");\n    navbar.classList.add(\"blur\");\n    document.body.append(gameOverDOM);\n  }\n  return true;\n}\n\nfunction turnController(player1Grid, player2Grid) {\n  for (let i = 0; i < player1Grid.childNodes.length; i++) {\n    for (let j = 0; j < player1Grid.childNodes[i].childNodes.length; j++) {\n      player1Grid.childNodes[i].childNodes[j].addEventListener(\"click\", () => {\n        changeTurns(player1Grid, player2Grid);\n      });\n      player2Grid.childNodes[i].childNodes[j].addEventListener(\"click\", () => {\n        robotAttackDOM(player1, player1Grid);\n        changeTurns(player1Grid, player2Grid);\n        changeTurns(player1Grid, player2Grid);\n      });\n    }\n  }\n}\n\nfunction changeTurns(playerGrid, player2Grid) {\n  if (playerGrid.classList.contains(\"inactiveBoard\")) {\n    playerGrid.classList.remove(\"inactiveBoard\");\n    player2Grid.classList.add(\"inactiveBoard\");\n  } else if (player2Grid.classList.contains(\"inactiveBoard\")) {\n    player2Grid.classList.remove(\"inactiveBoard\");\n    playerGrid.classList.add(\"inactiveBoard\");\n  }\n}\n\nfunction placerDOM(index, formation, direction) {\n  let ship = document.createElement(\"div\");\n  for (let j = 0; j < formation[index]; j++) {\n    const part = document.createElement(\"div\");\n    part.classList.add(\"placerpart\");\n    ship.append(part);\n  }\n  if (!direction) ship.style.display = \"flex\";\n  ship.draggable = \"true\";\n  ship.classList.add(\"ship\");\n  ship.addEventListener(\"dragstart\", (event) => {\n    event.dataTransfer.setData(\"text\", event.target.childNodes.length);\n  });\n  ship.addEventListener(\"dragend\", () => {});\n  return ship;\n}\n\nfunction gameBoardplacerDOM(player, playerGrid) {\n  for (let i = 0; i < playerGrid.childNodes.length; i++) {\n    for (let j = 0; j < playerGrid.childNodes[i].childNodes.length; j++) {\n      let current = playerGrid.childNodes[i].childNodes[j];\n      current.addEventListener(\"dragover\", (event) => {\n        event.preventDefault();\n        return false;\n      });\n      current.addEventListener(\"dragenter\", (event) => {\n        let ships = document.getElementsByClassName(\"ship\");\n        let direction = ships[0].style.display === \"flex\" ? false : true;\n        let length = ships[0].childNodes.length;\n        if (player.board.pathAvailable([j, i], length, direction)) {\n          current.classList.add(\"highlight\");\n        } else {\n          current.classList.add(\"unplacable\");\n        }\n      });\n\n      current.addEventListener(\"dragleave\", (event) => {\n        current.classList.remove(\"highlight\");\n        current.classList.remove(\"unplacable\");\n      });\n\n      current.addEventListener(\"drop\", (event) => {\n        event.preventDefault();\n        current.classList.remove(\"highlight\");\n        current.classList.remove(\"unplacable\");\n        let length = parseInt(event.dataTransfer.getData(\"text\"));\n        let ships = document.getElementsByClassName(\"ship\");\n        let direction = ships[0].style.display === \"flex\" ? false : true;\n        if (player.board.placeShip([j, i], length, direction)) {\n          let iC = i;\n          let jC = j;\n          let currentC = current;\n          for (let a = 0; a < length; a++) {\n            currentC.classList.add(\"placedShip\");\n            if (direction && jC < 9) jC++;\n            if (!direction && iC < 9) iC++;\n            currentC = playerGrid.childNodes[iC].childNodes[jC];\n          }\n          ships[0].remove();\n        } else {\n          return false;\n        }\n        if (ships.length > 0) ships[0].style.display = \"block\";\n        else if (ships.length === 0) {\n          startGame(gameStartBTN, changeDirectionBTN);\n        }\n      });\n    }\n  }\n}\n\nfunction gameOver(winorLost) {\n  const box = document.createElement(\"div\");\n  const text = document.createElement(\"h1\");\n  const button = document.createElement(\"button\");\n  button.classList.add(\"BTN\");\n  box.classList.add(\"playAgainBox\");\n  button.textContent = \"Play again\";\n  button.onclick = () => {\n    location.reload();\n  };\n  text.textContent = `You ${winorLost}`;\n\n  box.append(text);\n  box.append(button);\n  return box;\n}\n\nfunction randomPosition(player1, playerGrid1) {\n  const ships = document.getElementsByClassName(\"ship\");\n  for (let i = 0; i < ships.length; i++) {\n    ships[i].remove();\n  }\n  player1Grid.childNodes.forEach((i) => {\n    i.childNodes.forEach((j) => {\n      if (j.classList.contains(\"placedShip\")) j.classList.remove(\"placedShip\");\n    });\n  });\n  if (player1.board.totalShips > 0) player1 = new _player_js__WEBPACK_IMPORTED_MODULE_3__.player();\n  player1.computerPlace();\n  for (let i = 0; i < playerGrid1.childNodes.length; i++) {\n    for (let j = 0; j < playerGrid1.childNodes[i].childNodes.length; j++) {\n      let current = playerGrid1.childNodes[i].childNodes[j];\n      if (player1.board.board[j][i] !== 0) current.classList.add(\"placedShip\");\n    }\n  }\n\n  return player1;\n}\n\nfunction startGame(gameStartBTN, changeDirectionBTN) {\n  changeDirectionBTN.style.display = \"none\";\n  gameStartBTN.style.display = \"block\";\n}\n\nconst playField = document.createElement(\"div\");\nlet player1 = new _player_js__WEBPACK_IMPORTED_MODULE_3__.player();\nlet player2 = new _player_js__WEBPACK_IMPORTED_MODULE_3__.player();\nconst player1Grid = createPlayerGrid();\nconst player2Grid = createPlayerGrid();\nconst gameStartContainer = document.createElement(\"div\");\ngameStartContainer.classList.add(\"gameStartContainer\");\nconst gameStartBTN = document.createElement(\"button\");\n\ngameStartBTN.classList.add(\"BTN\");\ngameStartBTN.style.display = \"none\";\ngameStartBTN.textContent = \"Play.\";\ngameStartBTN.onclick = () => {\n  player2.computerPlace();\n  receieveAttackDOM(player2, player2Grid);\n  turnController(player1Grid, player2Grid);\n  randomBTN.style.display = \"none\";\n  player1Grid.classList.add(\"inactiveBoard\");\n  gameStartBTN.style.display = \"none\";\n};\ngameStartContainer.append(gameStartBTN);\n\ngameBoardplacerDOM(player1, player1Grid);\n\nplayField.append(player1Grid);\nplayField.append(gameStartContainer);\nplayField.append(player2Grid);\n\nconst changeDirectionBTN = document.createElement(\"button\");\nchangeDirectionBTN.textContent = \"Direction\";\nchangeDirectionBTN.classList.add(\"BTN\");\nchangeDirectionBTN.onclick = () => {\n  if (ships[0].style.display == \"block\") ships[0].style.display = \"flex\";\n  else ships[0].style.display = \"block\";\n};\ngameStartContainer.append(changeDirectionBTN);\n\nconst resetBTN = document.createElement(\"div\");\nresetBTN.textContent = \"reset\";\nresetBTN.classList.add(\"BTN\");\nresetBTN.onclick = () => {\n  location.reload();\n};\n\ngameStartContainer.append(resetBTN);\n\nconst randomBTN = document.createElement(\"button\");\nrandomBTN.classList.add(\"BTN\");\nrandomBTN.textContent = \"Random\";\nrandomBTN.onclick = () => {\n  player1 = randomPosition(player1, player1Grid);\n  startGame(gameStartBTN, changeDirectionBTN);\n};\ngameStartContainer.append(randomBTN);\nlet formation = [2, 3, 3, 4, 5];\nfor (let i = 0; i < formation.length; i++) {\n  const ship = placerDOM(i, formation, true);\n  ship.style.display = \"none\";\n  gameStartContainer.append(ship);\n}\nconst ships = gameStartContainer.getElementsByClassName(\"ship\");\nships[0].style.display = \"block\";\n\nplayField.classList.add(\"playField\");\n\ndocument.body.append(playField);\n\n\n\n\n//# sourceURL=webpack://top-battleship/./src/index.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   player: () => (/* binding */ player)\n/* harmony export */ });\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\n/* harmony import */ var _ships__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ships */ \"./src/ships.js\");\n\n\nclass player {\n  constructor() {\n    this.board = new _gameboard__WEBPACK_IMPORTED_MODULE_0__.gameBoard();\n  }\n\n  getRandomInteger(min, max) {\n    min = Math.ceil(min);\n    max = Math.floor(max);\n    return Math.floor(Math.random() * (max - min)) + min;\n  }\n\n  computerPlace() {\n    let classic = [2, 3, 3, 4, 5];\n    for (let i = 0; i < classic.length; i++) {\n      let coords = [this.getRandomInteger(0, 10), this.getRandomInteger(0, 10)];\n      let direction = Boolean(this.getRandomInteger(0, 2));\n      if (!this.board.placeShip(coords, classic[i], direction)) i--;\n    }\n    return true;\n  }\n}\n\n\n\n\n//# sourceURL=webpack://top-battleship/./src/player.js?");

/***/ }),

/***/ "./src/ships.js":
/*!**********************!*\
  !*** ./src/ships.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Ship: () => (/* binding */ Ship)\n/* harmony export */ });\nclass Ship {\n  constructor(length, hits = 0, sunk = false) {\n    this.length = length;\n    this.hits = 0;\n    this.sunk = false;\n  }\n  hit() {\n    this.hits++;\n  }\n  isSunk() {\n    return this.length === this.hits ? (this.sunk = true) : false;\n  }\n}\n\n\n\n\n//# sourceURL=webpack://top-battleship/./src/ships.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
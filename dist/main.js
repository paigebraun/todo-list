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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../src/fonts/Poppins-Bold.ttf */ \"./src/fonts/Poppins-Bold.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../src/fonts/Inter-Regular.ttf */ \"./src/fonts/Inter-Regular.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../src/fonts/Inter-Bold.ttf */ \"./src/fonts/Inter-Bold.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@font-face {\\n    font-family: 'Poppins';\\n    src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n    font-weight: 700;\\n    font-style: normal;\\n}\\n\\n@font-face {\\n    font-family: 'Inter';\\n    src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\n    font-weight: 400;\\n    font-style: normal;\\n}\\n\\n@font-face {\\n    font-family: 'InterBold';\\n    src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \");\\n}\\n\\nbody {\\n    margin: 0px;\\n}\\n\\n#container {\\n    display: flex;\\n}\\n\\n/* LEFT SIDE */\\n\\n.left {\\n    width: 28vw;\\n    background-color: #F8F8F8;\\n    border-radius: 38px;\\n    margin: 2vh;\\n    height: 96vh;\\n    min-width: 238px;\\n}\\n\\n.todo-list,\\n.lists {\\n    display: flex;\\n    flex-direction: column;\\n    margin: 0px 3vw;\\n    gap: 12px;\\n}\\n\\n.todo-list > h3,\\n.lists > .listContainer > h3 {\\n    font-family: 'Poppins';\\n    font-size: 2em;\\n    margin-top: 20px;\\n    margin-bottom: 0px;\\n}\\n\\n.today,\\n.allTasks {\\n    background-color: #EAEAEA;\\n    font-family: 'Inter';\\n    border-radius: 11px;\\n    padding: 10px 17px;\\n}\\n\\n.todo-list > .selected {\\n    background-color: #4290D9;\\n    color: white;\\n}\\n\\nbutton {\\n    all: unset;\\n    cursor: pointer;\\n    font-size: 1.2em;\\n}\\n\\n.listBtns {\\n    display: flex;\\n    flex-direction: column;\\n    text-align: center;\\n    gap: 14px;\\n}\\n\\n.listButton {\\n    display: flex;\\n    align-items: center;\\n}\\n\\n.listButton > button {\\n    border-radius: 30px;\\n    font-family: 'Inter';\\n    background-color: white;\\n    padding:14px;\\n    min-width: -webkit-fill-available;\\n    filter: drop-shadow(.5px .5px 2px rgba(0, 0, 0, 0.05));\\n}\\n\\n.taskCount {\\n    position: relative;\\n    left: -44px;\\n    font-family: 'Poppins';\\n    background-color: #4290D9;\\n    border-radius: 20px;\\n    color: rgba(0, 0, 0, 0.5);\\n    font-size: .9em;\\n    padding: 4px 10px;\\n}\\n\\n.addBtn {\\n    display:flex;\\n    gap: 4px;\\n    margin-top: 20px;\\n    font-size: .9em;\\n}\\n\\n.addBtn > button {\\n    font-family: 'Inter';\\n    color: #BCBCBC;\\n}\\n\\n.plus {\\n    background-color: #EAEAEA;\\n    border-radius: 20px;\\n    padding: 1px 6px 3px 6px;\\n}\\n\\n.listContainer {\\n    display: flex;\\n    justify-content: space-between;\\n    align-items: center;\\n}\\n\\n/* RIGHT SIDE */\\n\\n.right {\\n    margin-left: 10px;\\n}\\n\\n.greeting {\\n    font-family: 'Poppins';\\n}\\n\\n.greetingTop,\\n.greetingBottom {\\n    display: flex;\\n    column-gap: 6px;\\n}\\n\\n.greetingBottom {\\n    color:#BCBCBC;\\n    flex-wrap: wrap;\\n}\\n\\n.greetingBottom > h2 {\\n    margin: 0px;\\n}\\n\\n.greetingTop > h1 {\\n    margin-top: 44px;\\n    margin-bottom: -5px;\\n}\\n\\n#dayOfWeek {\\n    color: #4290D9;\\n}\\n\\n.header {\\n    display: flex;\\n    justify-content: space-between;\\n    border-bottom: 1px solid #BCBCBC; \\n    align-items: baseline;\\n    margin-top: 7vh;\\n    width: 54vw;\\n}\\n\\n.header > h2 {\\n    font-family: 'Poppins';\\n    margin: 0px;\\n    font-size: 1.7em;\\n}\\n\\n.header > p {\\n    font-family: 'Inter';\\n    color: #BCBCBC;\\n    margin: 0px;\\n}\\n\\n.taskArea {\\n    display: flex;\\n    flex-direction: column;\\n}\\n\\n.taskCard {\\n    display: flex;\\n    flex-direction: column;\\n    gap: 6px;\\n}\\n\\n.listName {\\n    font-family: 'InterBold';\\n    font-size: 1.4em;\\n    margin-bottom: 11px;\\n}\\n\\n.task {\\n    position: relative;\\n    font-size: 1.1em;\\n    padding-top: 2px;\\n    padding-left: 36px;\\n    margin-bottom: 1px;\\n    cursor: pointer;\\n    font-family: 'Inter';\\n    width: fit-content;\\n}\\n\\n.task input {\\n    position: absolute;\\n    opacity: 0;\\n    cursor: pointer;\\n    height: 0;\\n    width: 0;\\n}\\n\\n.checkmark {\\n    border: 2px solid #4290D9;\\n    position: absolute;\\n    border-radius: 5px;\\n    top:0;\\n    left: 0;\\n    width: 20px;\\n    height: 20px;\\n}\\n\\n.strike:checked + span {\\n    text-decoration: line-through;\\n}\\n\\n.task input:checked ~ .checkmark {\\n    background-color: #4290D9;\\n}\\n\\n.checkmark:after {\\n    content: \\\"\\\";\\n    position: absolute;\\n    display: none;\\n}\\n\\n.task input:checked ~ .checkmark:after {\\n    display: block;\\n}\\n\\n.task .checkmark:after {\\n    left: 6px;\\n    top: 2px;\\n    width: 5px;\\n    height: 10px;\\n    border: solid white;\\n    border-width: 0 3px 3px 0;\\n    -webkit-transform: rotate(45deg);\\n    -ms-transform: rotate(45deg);\\n    transform: rotate(45deg);\\n}\\n\\n#addTaskBtn {\\n    position:absolute;\\n    right: 30px;\\n    bottom: 30px;\\n    width: 60px;\\n    height: 60px;\\n    border-radius: 50px;\\n    box-shadow: 0 0 20px #e4e4e4;\\n    display: flex;\\n    justify-content: center;\\n}\\n\\n.plusTask {\\n    font-family: 'Poppins';\\n    font-size: 2.5em;\\n    color: #BCBCBC;\\n}\\n\\n/* NEW TASK POPUP */\\n\\n#newTask {\\n    display: none;\\n    flex-direction: column;\\n    position: absolute;\\n    background-color: white;\\n    padding: 20px 28px;\\n    border-radius: 20px;\\n    width: 42vw;\\n    max-width: 450px;\\n    min-width: 395px;\\n    right: 0;\\n    left: 0;\\n    top: 30vh;\\n    margin-left: auto;\\n    margin-right: auto;\\n    z-index: 2;\\n}\\n\\n#newTask > h2 {\\n    font-family: 'Poppins';\\n    margin-top: 0;\\n}\\n\\n#newTaskName {\\n    height: 17px;\\n    border: 2px solid lightgrey;\\n    border-radius: 5px;\\n    font-family: 'Inter';\\n    padding: 8px 12px;\\n    font-size: inherit;\\n}\\n\\n.dot {\\n    width: 18px;\\n    height: 18px;\\n    border-radius: 18px;\\n    background-color: coral;\\n}\\n\\n.listSelectContainer,\\n.dateSelectContainer {\\n    display: flex;\\n    gap: 5px;\\n    align-items: center;\\n    margin-top: 15px;\\n}\\n\\n.listSelectContainer > label,\\n.dateSelectContainer > label {\\n    font-family: 'Inter';\\n}\\n\\ninput[type='date'] {\\n    border-radius: 7px;\\n    height: 17px;\\n    border: 2px solid lightgrey;\\n    padding: 8px 12px;\\n    font-family: 'Inter';\\n    font-size: inherit;\\n}\\n\\n.select-menu{\\n    width: 150px;\\n}\\n.select-menu .select-btn{\\n    display: flex;\\n    height: 17px;\\n    background: #fff;\\n    padding: 8px 12px;\\n    font-family: 'Inter';\\n    border-radius: 8px;\\n    align-items: center;\\n    cursor: pointer;\\n    justify-content: space-between;\\n    border: 2px solid lightgrey;\\n}\\n.select-btn i{\\n    font-size: 25px;\\n    transition: 0.3s;\\n}\\n.select-menu.active .select-btn i{\\n    transform: rotate(-180deg);\\n}\\n.select-menu .options{\\n    font-family: 'Inter';\\n    position: absolute;\\n    padding: 2px;\\n    margin-top: 5px;\\n    border-radius: 8px;\\n    background: #fff;\\n    box-shadow: 0 0 3px rgba(0,0,0,0.1);\\n    display: none;\\n    width: inherit;\\n}\\n.select-menu.active .options{\\n    display: block;\\n}\\n.options .option{\\n    display: flex;\\n    height: 12px;\\n    cursor: pointer;\\n    padding: 13px 16px;\\n    border-radius: 8px;\\n    align-items: center;\\n    gap: 8px;\\n    background: #fff;\\n}\\n\\n.options .option:hover{\\n    background: #F2F2F2;\\n}\\n.option i{\\n    font-size: 25px;\\n    margin-right: 12px;\\n}\\n.option .option-text{\\n    font-size: 18px;\\n    color: #333;\\n}\\n\\n.newTaskBottom {\\n    display: flex;\\n    align-items: center;\\n    justify-content: space-between;\\n}\\n\\n.addCancel {\\n    display: flex;\\n    gap: 15px;\\n    align-items: center;\\n    margin-top: 15px;\\n    font-family: 'Inter';\\n    cursor: pointer;\\n}\\n\\n.newTaskAdd,\\n.newTaskCancel {\\n    padding: 6px 10px;\\n    border-radius: 7px;\\n    background-color: #F2F2F2;\\n}\\n\\n.newTaskAdd:hover,\\n.newTaskCancel:hover {\\n    background-color: #EAEAEA;\\n}\\n\\n.dim {\\n    display: none;\\n    position: fixed;\\n    top: 0;\\n    left: 0;\\n    height: 100vh;\\n    width: 100vw;\\n    background: black;\\n    z-index: 1;\\n    opacity: 40%;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n\n\n//get todays date, time of day, and weekday\nvar today = new Date();\nvar dd = String(today.getDate()).padStart(2, '0');\nvar mm = String(today.getMonth() + 1).padStart(2, '0');\nvar yyyy = today.getFullYear();\nvar hourOfDay = today.getHours();\nvar weekday = today.getDay();\n\n//display todays info on homepage\nvar todaysDate = document.getElementById('todaysDate');\ntodaysDate.innerText = mm + '/' + dd + '/' + yyyy;\n\nvar timeOfDay = document.getElementById('timeOfDay');\nif (hourOfDay < 12) {\n    timeOfDay.innerText = 'Morning,';\n}\nelse if ((hourOfDay >= 12) && (hourOfDay < 17)) {\n    timeOfDay.innerText = 'Afternoon,';\n}\nelse {\n    timeOfDay.innerText = 'Evening,';\n}\n\nconst days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];\n\nvar dayOfWeek = document.getElementById('dayOfWeek');\ndayOfWeek.innerText = days[weekday];\n\n//add new task\nconst addTaskBtn = document.getElementById('addTaskBtn');\nconst newTaskPopup = document.getElementById('newTask');\nconst newTaskCancel = document.querySelector('.newTaskCancel');\nconst newTaskAdd = document.querySelector('.newTaskAdd');\nconst dim = document.querySelector('.dim');\naddTaskBtn.addEventListener('click', displayNewTask);\n\nfunction displayNewTask() {\n    newTaskPopup.style.display = 'flex';\n    dim.style.display = 'block';\n}\n\nnewTaskCancel.addEventListener('click', hideNewTask);\n\n//dropdown menu functionality\nconst optionMenu = document.querySelector(\".select-menu\"),\n       selectBtn = optionMenu.querySelector(\".select-btn\"),\n       options = optionMenu.querySelectorAll(\".option\"),\n       sBtn_text = optionMenu.querySelector(\".sBtn-text\");\n\nselectBtn.addEventListener(\"click\", () => optionMenu.classList.toggle(\"active\"));       \n\noptions.forEach(option =>{\n    option.addEventListener(\"click\", ()=>{\n        let selectedOption = option.querySelector(\".option-text\").innerText;\n        sBtn_text.innerText = selectedOption;\n\n        optionMenu.classList.remove(\"active\");\n    });\n});\n\n//list object constructor\nclass ListObj {\n    constructor(title, color, tasks) {\n        this.title = title;\n        this.color = color;\n        this.tasks = tasks;\n    }\n}\n\n//store lists\nconst listBtns = document.querySelector('.listBtns');\nlet lists = [];\ncreateList('Personal', '#71CD50', []);\ncreateList('Work', '#FB9535', []);\ncreateList('Grocery', '#F173BF', []);\n\n//create new list objects\nfunction createList(title, color, tasks) {\n    let newList = new ListObj(title, color, tasks);\n    lists.push(newList);\n}\n\n\nfor (let i = 0; i < lists.length; i++) {\n    displayList(lists[i]);\n}\n\nfunction displayList(listObject){\n    const listDiv = document.createElement('div');\n    listDiv.className = 'listButton';\n    const listNameBtn = document.createElement('button');\n    listNameBtn.innerText = listObject.title;\n    listDiv.appendChild(listNameBtn);\n    const taskCount = document.createElement('div');\n    taskCount.className = 'taskCount';\n    taskCount.style.backgroundColor = listObject.color;\n    taskCount.innerText = '0';\n    listDiv.appendChild(taskCount);\n\n    listBtns.appendChild(listDiv);\n}\n\n//task object constructor\nclass Task {\n    constructor(taskName, list, dueDate) {\n        this.taskName = taskName;\n        this.list = list;\n        this.dueDate = dueDate;\n    }\n}\n\n//create new task with user input from new task form\nconst newTaskName = document.getElementById('newTaskName');\nconst dueDate = document.getElementById('dueDate');\n\nfunction hideNewTask() {\n    newTaskName.value = '';\n    sBtn_text.innerText = options[0].innerText.replace(/\\n/g, '');\n    dueDate.value = '';\n    newTaskPopup.style.display = 'none';\n    dim.style.display = 'none';\n}\n\nnewTaskAdd.addEventListener('click', function() {\n    createTask(newTaskName.value, sBtn_text.innerText, dueDate.value);\n});\n\ncreateTask('Schedule Dr.Appt', 'Personal', today);\ncreateTask('Get groceries', 'Personal', today);\ncreateTask('Send new design', 'Work', today);\ncreateTask('Check emails', 'Work', today);\ncreateTask('Lunch with Emma', 'Work', today);\ncreateTask('Research project', 'Work', today);\n\nfunction createTask(taskName, list, dueDate) {\n    let newTask = new Task(taskName, list, dueDate);\n    //add new task to appropriate list\n    for (let i = 0; i < lists.length; i++) {\n        if (lists[i].title === list) {\n            lists[i].tasks.push(newTask);\n\n            //update task count\n            for (let j = 0; j < listBtns.children.length; j++) {\n                if (listBtns.children[j].children[0].innerText === list) {\n                    listBtns.children[j].children[1].innerText = lists[i].tasks.length;\n                }\n            }\n        }\n    }\n    //clear inputs and hide new task\n    hideNewTask();\n}\n\n\n// display tasks -- BREAK THIS OUT INTO SEPARATE FILES? IDK THIS ONLY NEEDS TO SHOW ONES DUE TODAY...\nconst tasksArea = document.querySelector('.tasksArea');\nfunction displayHomeTaskArea() {\n    for (let i = 0; i < lists.length; i++) {\n        //make sure list isn't empty\n        if (lists[i].tasks.length === 0) {\n            i++\n        }\n        else {\n            //find tasks with due date of today\n            let dueToday = [];\n            for (let j =0; j < lists[i].tasks.length; j++) {\n                if (lists[i].tasks[j].dueDate === today) {\n                    dueToday.push(lists[i].tasks[j]);\n                }\n            }\n            const taskCard = document.createElement('div');\n            taskCard.className = 'taskCard';\n            const listName = document.createElement('h2');\n            listName.className = 'listName';\n            listName.innerText = lists[i].title;\n\n            taskCard.appendChild(listName);\n            tasksArea.appendChild(taskCard);\n\n            for (let k = 0; k < dueToday.length; k++) {\n                const taskLabel = document.createElement('label');\n                taskLabel.className = 'task';\n                taskCard.appendChild(taskLabel);\n                const checkbox = document.createElement('input');\n                checkbox.type = 'checkbox';\n                checkbox.className = 'strike';\n                taskLabel.appendChild(checkbox);\n                const taskSpan = document.createElement('span');\n                taskSpan.innerText = dueToday[k].taskName;\n                taskLabel.appendChild(taskSpan);\n                const checkmark = document.createElement('span');\n                checkmark.className = 'checkmark';\n                taskLabel.appendChild(checkmark);\n            }\n        }\n    }\n        \n}\ndisplayHomeTaskArea();\n\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/fonts/Inter-Bold.ttf":
/*!**********************************!*\
  !*** ./src/fonts/Inter-Bold.ttf ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9aab1ebe6bd16660e37e.ttf\";\n\n//# sourceURL=webpack://todo-list/./src/fonts/Inter-Bold.ttf?");

/***/ }),

/***/ "./src/fonts/Inter-Regular.ttf":
/*!*************************************!*\
  !*** ./src/fonts/Inter-Regular.ttf ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b559a93b35af397f4b6f.ttf\";\n\n//# sourceURL=webpack://todo-list/./src/fonts/Inter-Regular.ttf?");

/***/ }),

/***/ "./src/fonts/Poppins-Bold.ttf":
/*!************************************!*\
  !*** ./src/fonts/Poppins-Bold.ttf ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"300a4da54f1e6258b6f7.ttf\";\n\n//# sourceURL=webpack://todo-list/./src/fonts/Poppins-Bold.ttf?");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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
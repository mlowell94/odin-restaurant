/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/bg2.jpg */ "./src/assets/bg2.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/OldWizard.ttf */ "./src/assets/OldWizard.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/Hind-Medium.ttf */ "./src/assets/Hind-Medium.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/sidebar2.png */ "./src/assets/sidebar2.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/sidebar1.png */ "./src/assets/sidebar1.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    margin: 0;\n    overflow: hidden;\n    color: black;\n    font-family: 'Hind';\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n@font-face {\n    font-family: 'OldWizard';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\n@font-face {\n    font-family: 'Hind';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n}\n\n@keyframes fall-down {\n    10% {\n        top: 0;\n    }\n    25% {\n        top: -85px;\n    }\n    100% {\n        top: 1000px;\n    }\n}\n\n@keyframes fall-in {\n    0% {\n        top: -1000px;\n    }\n    100% {\n        top: 0px;\n    }\n}\n\n@keyframes bounce {\n    0% {\n        top: 0%;\n    }\n    25% {\n        top: -15%;\n    }\n    50% {\n        top: 0%;\n    }\n    75% {\n        top: -7.5%;\n    }\n    87.5% {\n        top: 0%;\n    }\n    93.75% {\n        top: -3.75%;\n    }\n    100% {\n        top: 0%\n    }\n}\n\n.l-side {\n    pointer-events: none;\n    height: 100vh;\n    width: 35%;\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n    background-size: 20%;\n    background-repeat-x: no-repeat;\n    position: absolute;\n    top: 0;\n}\n\n.r-side {\n    pointer-events: none;\n    height: 100vh;\n    width: 35%;\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n    background-size: 20%;\n    background-repeat-x: no-repeat;\n    position: absolute;\n    right: -28%;\n    top: 0;\n}\n\n.nav {\n    display: flex;\n    font-size: 2vw;\n    justify-content: space-between;\n    padding: 1% 10% 1% 10%;\n    background-color: #00000085;\n    color: white;\n    border-bottom: double white 3px;\n    justify-content: center;\n    font-family: 'OldWizard';\n\n}\n\n.nav img {\n    opacity: 0;\n    position: relative;\n    top: -100px;\n    transition: all .25s ease\n}\n\n.nav p {\n        margin: 0;\n}\n\nul {\n    display: flex;\n    list-style: none;\n    margin: 0;\n    width: 0;\n    overflow: hidden;\n    padding: 0;\n    transition: all 1s ease;\n    margin-left: .5%;\n}\n\nli {\n    display: flex;\n    position: relative;\n}\n\nli span {\n    position: relative;\n}\n\nli img {\n    position: relative;\n    top: -100%;\n    left: -50%;\n    opacity: 0;\n    transition: all .25s ease;\n    width: 25%;\n    height: 65%;\n}\n\nli + li {\n    padding-left: 6%;\n}\n\nli:hover span{\n    cursor: pointer;\n    text-shadow: 0 0px 4px white;\n    animation: bounce .25s ease;\n}\n\nli:nth-child(1) {\n    margin-left: 1.15vw;\n}\n\n.main {\n    display: flex; /*for home page*/\n    height: 90vh; /*for all pages*/\n    width: 75vw; /*for menu page*/\n    align-items: center; /*for both pages*/\n    /* justify-content: space-evenly; /*for home page*/\n    justify-content: space-around; /*for contact page*/\n    /* display: grid; /*for menu page*/\n    grid-template-columns: 1fr 1fr 1fr; /*for menu page*/\n    grid-template-rows: 1fr 9fr 9fr 1fr; /*for menu page*/\n    grid-gap: 3px; /*for menu page*/\n    justify-items: center; /*for menu page*/\n    margin: 0 auto; /*for menu page*/\n    grid-template-columns: 1fr 1fr; /* for contact page */\n    grid-template-rows: .5fr 2fr; /* for contact page */\n}\n\n.hero-text {\n    width: 40%;\n    font-size: 1.75vw;\n    color: black;\n}\n\n.hero-text p {\n    backdrop-filter: blur(2px);\n    border: solid black 1px;\n    padding: 5%;\n    margin: 0;\n    font-size: 1.25vw;\n    background-color: #00000014;\n}\n\n.hero-text h1 {\n    margin: 0;\n}\n\n.head-chef {\n    width: 25%;\n\n}\n\n.head-chef p {\n    text-align: center;\n    margin: 0;\n    font-size: .9vw;\n    backdrop-filter: blur(2px);\n    background-color: #00000014;\n    border: solid black 1px;\n    padding: 5%;\n}\n\n.head-chef em {\n    font-family: 'OldWizard';\n}\n\n.head-chef img {\n    width: 100%;\n    margin: 0 auto;\n    display: block;\n    border-radius: 6px;\n    margin-bottom: 3%;\n}\n\n.option img {\n    width: 300px;\n    height: 300px;\n    border: solid white 1px;\n}\n\n.option span {\n    font-size: 1vw;\n}\n\n.option {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-around;\n    height: 100%;\n}\n\n.main > h1 {\n    margin: 0;\n    grid-column: 1/4;\n}\n\n.menu-header {\n    text-align: center;\n    grid-column: 2/3;\n}\n\n#pushed {\n    opacity: 1;\n    top: 0;\n}\n\n#loaded {\n    width: 19vw;\n}\n\n#moving-out {\n    position: relative;\n    animation: fall-down 1s ease;\n}\n\n#waiting {\n    position: relative;\n    top: -1000px;\n}\n\n#moving-in {\n    position: relative;\n    animation: fall-in .5s ease;\n}\n\n.map {\n    width: 41.25%;\n    padding: 1vw;\n    border: solid black 1px;\n    background-color: #00000014;\n}\n\n.map img {\n    margin: 0 auto;\n    display: block;\n    width: 60%;\n    border: solid black 1px;\n}\n\n.map h2 {\n    text-align: center;\n}\n\n.info div {\n    display: flex;\n    width: 65%;\n}\n\n.info {\n    background-color: #00000014;\n    backdrop-filter: blur(2px);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    border: solid black 1px;\n    align-self: center;\n    width: 30%;\n    padding: 5% 0 5% 0;\n}\n\n.info img {\n    width: 1.5vw;\n    height: fit-content;\n}\n\n.info p {\n    font-size: 1.25vw;\n    margin: 0;\n    margin-left: 3%;\n}\n\nform {\n    display: flex;\n    flex-direction: column;\n    width: 65%;\n    font-size: 1.25vw;\n}\n\nlabel {\n    color: black;\n    position: relative;\n    top: 4vh;\n    left: 5px;\n    transition: all ease .25s;\n    font-size: 1.25vw;\n}\n\ninput {\n    height: 1.75vw;\n    font-size: 1.25vw;\n    border: none;\n    background-color: #9967226e;\n    border-radius: 5px;\n}\n\ntextarea {\n    font-size: 1.25vw;\n    border: none;\n    background-color: #9967226e;\n    border-radius: 5px;\n}\n\n#valid {\n    top: 5px;\n    color: #00cb00;\n}\n\n#invalid {\n    top: 5px;\n    color: red;\n}\n\nbutton {\n    margin-top: 3%;\n    font-size: 1.25vw;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["body {\n    margin: 0;\n    overflow: hidden;\n    color: black;\n    font-family: 'Hind';\n    background: url('./assets/bg2.jpg');\n}\n\n@font-face {\n    font-family: 'OldWizard';\n    src: url('./assets/OldWizard.ttf');\n}\n\n@font-face {\n    font-family: 'Hind';\n    src: url('./assets/Hind-Medium.ttf');\n}\n\n@keyframes fall-down {\n    10% {\n        top: 0;\n    }\n    25% {\n        top: -85px;\n    }\n    100% {\n        top: 1000px;\n    }\n}\n\n@keyframes fall-in {\n    0% {\n        top: -1000px;\n    }\n    100% {\n        top: 0px;\n    }\n}\n\n@keyframes bounce {\n    0% {\n        top: 0%;\n    }\n    25% {\n        top: -15%;\n    }\n    50% {\n        top: 0%;\n    }\n    75% {\n        top: -7.5%;\n    }\n    87.5% {\n        top: 0%;\n    }\n    93.75% {\n        top: -3.75%;\n    }\n    100% {\n        top: 0%\n    }\n}\n\n.l-side {\n    pointer-events: none;\n    height: 100vh;\n    width: 35%;\n    background: url(./assets/sidebar2.png);\n    background-size: 20%;\n    background-repeat-x: no-repeat;\n    position: absolute;\n    top: 0;\n}\n\n.r-side {\n    pointer-events: none;\n    height: 100vh;\n    width: 35%;\n    background: url(./assets/sidebar1.png);\n    background-size: 20%;\n    background-repeat-x: no-repeat;\n    position: absolute;\n    right: -28%;\n    top: 0;\n}\n\n.nav {\n    display: flex;\n    font-size: 2vw;\n    justify-content: space-between;\n    padding: 1% 10% 1% 10%;\n    background-color: #00000085;\n    color: white;\n    border-bottom: double white 3px;\n    justify-content: center;\n    font-family: 'OldWizard';\n\n}\n\n.nav img {\n    opacity: 0;\n    position: relative;\n    top: -100px;\n    transition: all .25s ease\n}\n\n.nav p {\n        margin: 0;\n}\n\nul {\n    display: flex;\n    list-style: none;\n    margin: 0;\n    width: 0;\n    overflow: hidden;\n    padding: 0;\n    transition: all 1s ease;\n    margin-left: .5%;\n}\n\nli {\n    display: flex;\n    position: relative;\n}\n\nli span {\n    position: relative;\n}\n\nli img {\n    position: relative;\n    top: -100%;\n    left: -50%;\n    opacity: 0;\n    transition: all .25s ease;\n    width: 25%;\n    height: 65%;\n}\n\nli + li {\n    padding-left: 6%;\n}\n\nli:hover span{\n    cursor: pointer;\n    text-shadow: 0 0px 4px white;\n    animation: bounce .25s ease;\n}\n\nli:nth-child(1) {\n    margin-left: 1.15vw;\n}\n\n.main {\n    display: flex; /*for home page*/\n    height: 90vh; /*for all pages*/\n    width: 75vw; /*for menu page*/\n    align-items: center; /*for both pages*/\n    /* justify-content: space-evenly; /*for home page*/\n    justify-content: space-around; /*for contact page*/\n    /* display: grid; /*for menu page*/\n    grid-template-columns: 1fr 1fr 1fr; /*for menu page*/\n    grid-template-rows: 1fr 9fr 9fr 1fr; /*for menu page*/\n    grid-gap: 3px; /*for menu page*/\n    justify-items: center; /*for menu page*/\n    margin: 0 auto; /*for menu page*/\n    grid-template-columns: 1fr 1fr; /* for contact page */\n    grid-template-rows: .5fr 2fr; /* for contact page */\n}\n\n.hero-text {\n    width: 40%;\n    font-size: 1.75vw;\n    color: black;\n}\n\n.hero-text p {\n    backdrop-filter: blur(2px);\n    border: solid black 1px;\n    padding: 5%;\n    margin: 0;\n    font-size: 1.25vw;\n    background-color: #00000014;\n}\n\n.hero-text h1 {\n    margin: 0;\n}\n\n.head-chef {\n    width: 25%;\n\n}\n\n.head-chef p {\n    text-align: center;\n    margin: 0;\n    font-size: .9vw;\n    backdrop-filter: blur(2px);\n    background-color: #00000014;\n    border: solid black 1px;\n    padding: 5%;\n}\n\n.head-chef em {\n    font-family: 'OldWizard';\n}\n\n.head-chef img {\n    width: 100%;\n    margin: 0 auto;\n    display: block;\n    border-radius: 6px;\n    margin-bottom: 3%;\n}\n\n.option img {\n    width: 300px;\n    height: 300px;\n    border: solid white 1px;\n}\n\n.option span {\n    font-size: 1vw;\n}\n\n.option {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-around;\n    height: 100%;\n}\n\n.main > h1 {\n    margin: 0;\n    grid-column: 1/4;\n}\n\n.menu-header {\n    text-align: center;\n    grid-column: 2/3;\n}\n\n#pushed {\n    opacity: 1;\n    top: 0;\n}\n\n#loaded {\n    width: 19vw;\n}\n\n#moving-out {\n    position: relative;\n    animation: fall-down 1s ease;\n}\n\n#waiting {\n    position: relative;\n    top: -1000px;\n}\n\n#moving-in {\n    position: relative;\n    animation: fall-in .5s ease;\n}\n\n.map {\n    width: 41.25%;\n    padding: 1vw;\n    border: solid black 1px;\n    background-color: #00000014;\n}\n\n.map img {\n    margin: 0 auto;\n    display: block;\n    width: 60%;\n    border: solid black 1px;\n}\n\n.map h2 {\n    text-align: center;\n}\n\n.info div {\n    display: flex;\n    width: 65%;\n}\n\n.info {\n    background-color: #00000014;\n    backdrop-filter: blur(2px);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    border: solid black 1px;\n    align-self: center;\n    width: 30%;\n    padding: 5% 0 5% 0;\n}\n\n.info img {\n    width: 1.5vw;\n    height: fit-content;\n}\n\n.info p {\n    font-size: 1.25vw;\n    margin: 0;\n    margin-left: 3%;\n}\n\nform {\n    display: flex;\n    flex-direction: column;\n    width: 65%;\n    font-size: 1.25vw;\n}\n\nlabel {\n    color: black;\n    position: relative;\n    top: 4vh;\n    left: 5px;\n    transition: all ease .25s;\n    font-size: 1.25vw;\n}\n\ninput {\n    height: 1.75vw;\n    font-size: 1.25vw;\n    border: none;\n    background-color: #9967226e;\n    border-radius: 5px;\n}\n\ntextarea {\n    font-size: 1.25vw;\n    border: none;\n    background-color: #9967226e;\n    border-radius: 5px;\n}\n\n#valid {\n    top: 5px;\n    color: #00cb00;\n}\n\n#invalid {\n    top: 5px;\n    color: red;\n}\n\nbutton {\n    margin-top: 3%;\n    font-size: 1.25vw;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/functions/dump.js":
/*!*******************************!*\
  !*** ./src/functions/dump.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const dumpMain = function() {
    const main = document.querySelector('.main');
    while(main.hasChildNodes()) {
        main.removeChild(main.firstChild);
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dumpMain);

/***/ }),

/***/ "./src/functions/form-events.js":
/*!**************************************!*\
  !*** ./src/functions/form-events.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const bindFormEvents = function() {

    const inputs = Array.from(document.querySelectorAll('input'));
    const message = document.querySelector('textarea');

    for(let i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener('click', function() {
            if(inputs[i].checkValidity()) {
                inputs[i].labels[0].setAttribute('id', 'valid');
            } else if(!inputs[i].checkValidity() || inputs[i].value == "") {
                inputs[i].labels[0].setAttribute('id', 'invalid');
            }
        });
        inputs[i].addEventListener('input', function() {
            if(inputs[i].checkValidity()) {
                inputs[i].labels[0].setAttribute('id', 'valid');
            } else {
                inputs[i].labels[0].setAttribute('id', 'invalid');
            }
        });
    }
    
    message.addEventListener('click', function() {
        message.labels[0].setAttribute('id', 'valid');
    })
    
    document.addEventListener('click', function(e) {
        if(e.target.type != 'text' && e.target.type != 'textarea') {
            for(let i = 0; i < inputs.length; i++) {
                if(inputs[i].value == "") {
                    inputs[i].labels[0].removeAttribute('id');
                }
            }
            if(message.value == "") {
                message.labels[0].removeAttribute('id');
            }
        }
    })
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (bindFormEvents);

/***/ }),

/***/ "./src/functions/init.js":
/*!*******************************!*\
  !*** ./src/functions/init.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createMain": () => (/* binding */ createMain)
/* harmony export */ });
/* harmony import */ var _assets_mushroom_icon_active_gif__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/mushroom-icon-active.gif */ "./src/assets/mushroom-icon-active.gif");
/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/home */ "./src/pages/home.js");
/* harmony import */ var _nav_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav-events */ "./src/functions/nav-events.js");





// Creates content that will always be on the page, and initiates animations that are only going to fire once.

function createMain() {
    const content = document.createElement('div');
    content.setAttribute('id', 'content')
    document.body.appendChild(content);

    const rightSide = document.createElement('div');
    rightSide.classList.add('r-side');
    content.appendChild(rightSide);

    const leftSide = document.createElement('div');
    leftSide.classList.add('l-side');
    content.appendChild(leftSide)

    const nav = document.createElement('div');
    nav.classList.add('nav');

    const navShroomRight = document.createElement('img');
    navShroomRight.src = _assets_mushroom_icon_active_gif__WEBPACK_IMPORTED_MODULE_0__;

    const navShroomLeft = document.createElement('img');
    navShroomLeft.src = _assets_mushroom_icon_active_gif__WEBPACK_IMPORTED_MODULE_0__;

    const unorderedList = document.createElement('ul');
    
    const home = document.createElement('li');
    const homeButton = document.createElement('span');
    homeButton.textContent = 'home'
    home.setAttribute('id','home');
    home.appendChild(homeButton);

    const menu = document.createElement('li');
    const menuButton = document.createElement('span');
    menuButton.textContent = 'menu';
    menu.setAttribute('id','menu');
    menu.appendChild(menuButton);

    const contact = document.createElement('li');
    const contactButton = document.createElement('span');
    contactButton.textContent = 'contact';
    contact.setAttribute('id', 'contact');
    contact.appendChild(contactButton);

    unorderedList.appendChild(home);
    unorderedList.appendChild(menu);
    unorderedList.appendChild(contact);

    nav.appendChild(navShroomLeft);
    nav.appendChild(unorderedList);
    nav.appendChild(navShroomRight);

    content.appendChild(nav);

    const main = document.createElement('div');
    main.classList.add('main');
    content.appendChild(main);

    setTimeout(function() { for(let i = 0; i < 2; i++) {
       navShroomRight.setAttribute('id', 'pushed');
       navShroomLeft.setAttribute('id', 'pushed');
            }
        },  500)
    
    setTimeout(function() {unorderedList.setAttribute('id','loaded')}, 1000);
    (0,_nav_events__WEBPACK_IMPORTED_MODULE_2__["default"])();
    (0,_pages_home__WEBPACK_IMPORTED_MODULE_1__["default"])();
} 




/***/ }),

/***/ "./src/functions/load-new.js":
/*!***********************************!*\
  !*** ./src/functions/load-new.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _pages_contact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/contact */ "./src/pages/contact.js");
/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/home */ "./src/pages/home.js");
/* harmony import */ var _pages_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/menu */ "./src/pages/menu.js");
/* harmony import */ var _dump__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dump */ "./src/functions/dump.js");





// function for animating an old main falling out and la new one falling in.

const loadNew = function(request) {
    const main = document.querySelector('.main');
    main.setAttribute('id', 'moving-out');
    setTimeout(function() {
        main.setAttribute('id', 'waiting');
    }, 900)
    setTimeout(function() {
        console.log(request);
        (0,_dump__WEBPACK_IMPORTED_MODULE_3__["default"])()
        if(request == 'home') {
            (0,_pages_home__WEBPACK_IMPORTED_MODULE_1__["default"])();
        } else if(request == 'menu') {
            (0,_pages_menu__WEBPACK_IMPORTED_MODULE_2__["default"])();
        } else if(request == 'contact') {
            (0,_pages_contact__WEBPACK_IMPORTED_MODULE_0__["default"])();
        }
        main.setAttribute('id','moving-in');
    }, 1100);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadNew);

/***/ }),

/***/ "./src/functions/nav-events.js":
/*!*************************************!*\
  !*** ./src/functions/nav-events.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _load_new__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./load-new */ "./src/functions/load-new.js");
/* harmony import */ var _assets_drop_wav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/drop.wav */ "./src/assets/drop.wav");



const bindEvents = function() {
    const dropSound = new Audio(_assets_drop_wav__WEBPACK_IMPORTED_MODULE_1__);
    dropSound.volume = 0.05;
    const home = document.querySelector('#home');
    const menu = document.querySelector('#menu');
    const contact = document.querySelector('#contact');
    home.addEventListener('click', function() {
        (0,_load_new__WEBPACK_IMPORTED_MODULE_0__["default"])('home');
    })
    menu.addEventListener('click', function() {
        ;(0,_load_new__WEBPACK_IMPORTED_MODULE_0__["default"])('menu');
    })
    contact.addEventListener('click', function() {
        ;(0,_load_new__WEBPACK_IMPORTED_MODULE_0__["default"])('contact');
    })
    home.addEventListener('mouseenter', function() {
        dropSound.play();
    })
    menu.addEventListener('mouseenter', function() {
        dropSound.play();
    })
    contact.addEventListener('mouseenter', function() {
        dropSound.play();
    })


}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (bindEvents);

/***/ }),

/***/ "./src/pages/contact.js":
/*!******************************!*\
  !*** ./src/pages/contact.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_phone_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/phone.svg */ "./src/assets/phone.svg");
/* harmony import */ var _assets_clock_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/clock.svg */ "./src/assets/clock.svg");
/* harmony import */ var _assets_loc_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/loc.png */ "./src/assets/loc.png");
/* harmony import */ var _functions_form_events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../functions/form-events */ "./src/functions/form-events.js");





const genContact = function() {
    const main = document.querySelector('.main');
    main.style.display = 'flex';
    main.style.justifyContent = 'space-around';

    const map = document.createElement('div');
    map.classList.add('map');
    const info = document.createElement('div');
    info.classList.add('info');

    const mapImg = document.createElement('img');
    mapImg.src = _assets_loc_png__WEBPACK_IMPORTED_MODULE_2__;
    const mapText = document.createElement('h2');
    mapText.textContent = 'Come visit us at our storefront location!'
    map.appendChild(mapImg);
    map.appendChild(mapText);

    for(let i = 0; i < 2; i++) {
        const temp = document.createElement('div');
        const tempImg = document.createElement('img');
        const tempP = document.createElement('p');
        if(i == 0) {
            tempImg.src = _assets_clock_svg__WEBPACK_IMPORTED_MODULE_1__;
            tempP.textContent = '3AM - 2AM';
            temp.appendChild(tempImg);
            temp.appendChild(tempP);
        } else {
            tempImg.src = _assets_phone_svg__WEBPACK_IMPORTED_MODULE_0__;
            tempP.textContent = '111-111-1111';
            temp.appendChild(tempImg);
            temp.appendChild(tempP);
        }
        info.appendChild(temp);
    }

    const form = document.createElement('form');
    for(let i = 0; i < 4; i++) {
        const tempInput = document.createElement('input');
        const tempLabel = document.createElement('label');

        switch(i) {
            case 0:
                tempInput.setAttribute('type', 'text');
                tempInput.setAttribute('id', 'name');
                tempInput.setAttribute('name', 'name');
                tempInput.setAttribute('minlength', '3');
                tempInput.required = true;

                tempLabel.setAttribute('for', 'name');
                tempLabel.textContent = "Name";
                form.appendChild(tempLabel);
                form.appendChild(tempInput);
                break;
            case 1: 
                tempInput.setAttribute('type', 'text');
                tempInput.setAttribute('id', 'email');
                tempInput.setAttribute('pattern', '^[\\w-\\.]+@([\w-]+\\.)+[\\w-]{2,4}$');
                tempInput.setAttribute('name', 'email');
                tempInput.required = true;

                tempLabel.setAttribute('for', 'email');
                tempLabel.textContent = "Email";
                form.appendChild(tempLabel);
                form.appendChild(tempInput);
                break;
            case 2:
                const tempTextarea = document.createElement('textarea');
                tempTextarea.setAttribute('id', 'message');
                tempTextarea.setAttribute('name', 'message')

                tempLabel.setAttribute('for', 'message');
                tempLabel.textContent = "Say something nice :)";
                form.appendChild(tempLabel);
                form.appendChild(tempTextarea);
                break;
            case 3: 
                const button = document.createElement('button');
                button.textContent = 'submit';
                form.appendChild(button);
                break;
            default: 
                console.log('huh');
        }
    }
    info.appendChild(form);
    main.appendChild(map);
    main.appendChild(info);    
    (0,_functions_form_events__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (genContact);

/***/ }),

/***/ "./src/pages/home.js":
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_head_chef_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/head-chef.png */ "./src/assets/head-chef.png");


const genHome = function() {
    const main = document.querySelector('.main');
    let heroText = document.createElement('div');
    heroText.classList.add('hero-text');

    let heroHeader = document.createElement('h1');
    let heroInfo = document.createElement('p');

    heroHeader.textContent = "Only Mushrooms?"
    heroInfo.textContent = "That's right! 'Only Mushrooms' is a restaurant to restaurant committed to serving you one thing and one thing only: mushrooms! From fleshy morels, to the toxic Amanita phalloides -- if it is a fungus you can rest assured it is among us! Each order is prepared with love every evening at 3:42 AM, and delivered by thaumaturgic means to your doorstop the same day!"

    heroText.appendChild(heroHeader);
    heroText.appendChild(heroInfo);

    let headChef = document.createElement('div');
    headChef.classList.add('head-chef');

    let headChefPhoto = document.createElement('img');
    headChefPhoto.src = _assets_head_chef_png__WEBPACK_IMPORTED_MODULE_0__;
    
    let headChefQuote = document.createElement('p');
    
    let emphasis = document.createElement('em');
    emphasis.textContent = "'My body produces constant spores as punishment for the sins I have wrought. Each harvest brings me great pain, but also one step closer to absolution. I am committed to great flavor at an affordable price.'";

    let endQuote = document.createElement('span');
    endQuote.textContent = " - Tiberius the Incorrigable, Head Chef";

    headChefQuote.appendChild(emphasis);
    headChefQuote.appendChild(endQuote);
    headChef.appendChild(headChefPhoto);
    headChef.appendChild(headChefQuote)

    main.style.display = "flex";
    main.style.justifyContent = "space-evenly";

    main.appendChild(heroText);
    main.appendChild(headChef);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (genHome);

/***/ }),

/***/ "./src/pages/menu.js":
/*!***************************!*\
  !*** ./src/pages/menu.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_m1_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/m1.png */ "./src/assets/m1.png");
/* harmony import */ var _assets_m2_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/m2.png */ "./src/assets/m2.png");
/* harmony import */ var _assets_m3_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/m3.png */ "./src/assets/m3.png");
/* harmony import */ var _assets_m4_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/m4.png */ "./src/assets/m4.png");
/* harmony import */ var _assets_m5_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/m5.png */ "./src/assets/m5.png");
/* harmony import */ var _assets_m6_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/m6.png */ "./src/assets/m6.png");





;

const genMenu = function() {

    const main = document.querySelector('.main');

    main.style.width = '75vw';
    main.style.display = 'grid';
    main.style.gridTemplateColumns = '1fr 1fr 1fr';
    main.style.gridTemplateRows = '1fr 9fr 9fr 1fr';
    main.style.gridGap = '3px';
    main.style.justifyItems = 'center';
    main.style.margin = '0 auto';


    let optionArray = [];
    let menuHeaderTop = document.createElement('h1');
    menuHeaderTop.textContent = "Only Mushrooms has all the mushrooms you could hope for! Our offerings include:"
    let menuHeaderBottom = document.createElement('h1');
    menuHeaderBottom.textContent = "... and more!!!"

    main.appendChild(menuHeaderTop);

    for(let i = 0; i < 6; i++) {
        let temp = document.createElement('div');
        temp.classList.add('option');
        optionArray[i] = temp;
    }
    for(let i = 1; i < 7; i++) {
        let temp = document.createElement('img');
        let whatItIs = document.createElement('span');
        switch(i) {
            case 1:
                temp.src = _assets_m1_png__WEBPACK_IMPORTED_MODULE_0__;
                whatItIs.textContent = '"Virulent Redcap"';
                break;
            case 2:
                temp.src = _assets_m2_png__WEBPACK_IMPORTED_MODULE_1__;
                whatItIs.textContent = '"Hamburger-Shaped Mushroom"';
                break;
            case 3: 
                temp.src = _assets_m3_png__WEBPACK_IMPORTED_MODULE_2__;
                whatItIs.textContent = '"Treeflesh"';
                break;
            case 4:
                temp.src = _assets_m4_png__WEBPACK_IMPORTED_MODULE_3__;
                whatItIs.textContent = '"Bag of pasta I got from the fridge"';
                break;
            case 5:
                temp.src = _assets_m5_png__WEBPACK_IMPORTED_MODULE_4__;
                whatItIs.textContent = '"Common Puffball"';
                break;
            case 6:
                temp.src = _assets_m6_png__WEBPACK_IMPORTED_MODULE_5__
                whatItIs.textContent = '"Found these in walmart tbh"';
                break;
            default:
                whatItIs.textContent = '"how did u get here"';
        }
        optionArray[i-1].appendChild(temp);
        optionArray[i-1].appendChild(whatItIs);
        main.appendChild(optionArray[i-1]);
    }
    main.appendChild(menuHeaderBottom);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (genMenu);

/***/ }),

/***/ "./src/assets/Hind-Medium.ttf":
/*!************************************!*\
  !*** ./src/assets/Hind-Medium.ttf ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "099004e46ccd804f079b.ttf";

/***/ }),

/***/ "./src/assets/OldWizard.ttf":
/*!**********************************!*\
  !*** ./src/assets/OldWizard.ttf ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "eac7f527d3337556b3cb.ttf";

/***/ }),

/***/ "./src/assets/bg2.jpg":
/*!****************************!*\
  !*** ./src/assets/bg2.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4408c430385d40bac7ae.jpg";

/***/ }),

/***/ "./src/assets/clock.svg":
/*!******************************!*\
  !*** ./src/assets/clock.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "38585fec598ef79bfbd0.svg";

/***/ }),

/***/ "./src/assets/drop.wav":
/*!*****************************!*\
  !*** ./src/assets/drop.wav ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "35dba0875cfb2d52baaf.wav";

/***/ }),

/***/ "./src/assets/head-chef.png":
/*!**********************************!*\
  !*** ./src/assets/head-chef.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "87ba1a6aeb1d15124d69.png";

/***/ }),

/***/ "./src/assets/loc.png":
/*!****************************!*\
  !*** ./src/assets/loc.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f32b688da9333c149c88.png";

/***/ }),

/***/ "./src/assets/m1.png":
/*!***************************!*\
  !*** ./src/assets/m1.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "207d1410f2d27998b276.png";

/***/ }),

/***/ "./src/assets/m2.png":
/*!***************************!*\
  !*** ./src/assets/m2.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f75bae83b10bcf1111b8.png";

/***/ }),

/***/ "./src/assets/m3.png":
/*!***************************!*\
  !*** ./src/assets/m3.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bc6e7ad4434d4fc94319.png";

/***/ }),

/***/ "./src/assets/m4.png":
/*!***************************!*\
  !*** ./src/assets/m4.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8efd0ba0118884f727ff.png";

/***/ }),

/***/ "./src/assets/m5.png":
/*!***************************!*\
  !*** ./src/assets/m5.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b7cfa4a6a623095448b3.png";

/***/ }),

/***/ "./src/assets/m6.png":
/*!***************************!*\
  !*** ./src/assets/m6.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6211e61fb8a99577e653.png";

/***/ }),

/***/ "./src/assets/mushroom-icon-active.gif":
/*!*********************************************!*\
  !*** ./src/assets/mushroom-icon-active.gif ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9476ae769fcd5d2fcbfe.gif";

/***/ }),

/***/ "./src/assets/phone.svg":
/*!******************************!*\
  !*** ./src/assets/phone.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "22904118b466d50710a6.svg";

/***/ }),

/***/ "./src/assets/sidebar1.png":
/*!*********************************!*\
  !*** ./src/assets/sidebar1.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d474e63db753af9f82a2.png";

/***/ }),

/***/ "./src/assets/sidebar2.png":
/*!*********************************!*\
  !*** ./src/assets/sidebar2.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ac87194c5eee4aa91e2b.png";

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
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions_init__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions/init */ "./src/functions/init.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");



(0,_functions_init__WEBPACK_IMPORTED_MODULE_0__.createMain)();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFhLGNBQWMsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLEtBQUssTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssc0JBQXNCLHVCQUF1Qix1QkFBdUIseUJBQXlCLGFBQWEseUJBQXlCLGFBQWEseUJBQXlCLHlCQUF5Qix1QkFBdUIseUJBQXlCLHVCQUF1Qix5QkFBeUIseUJBQXlCLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxnQ0FBZ0MsZ0JBQWdCLHVCQUF1QixtQkFBbUIsMEJBQTBCLDBDQUEwQyxHQUFHLGdCQUFnQiwrQkFBK0IseUNBQXlDLEdBQUcsZ0JBQWdCLDBCQUEwQiwyQ0FBMkMsR0FBRywwQkFBMEIsV0FBVyxpQkFBaUIsT0FBTyxXQUFXLHFCQUFxQixPQUFPLFlBQVksc0JBQXNCLE9BQU8sR0FBRyx3QkFBd0IsVUFBVSx1QkFBdUIsT0FBTyxZQUFZLG1CQUFtQixPQUFPLEdBQUcsdUJBQXVCLFVBQVUsa0JBQWtCLE9BQU8sV0FBVyxvQkFBb0IsT0FBTyxXQUFXLGtCQUFrQixPQUFPLFdBQVcscUJBQXFCLE9BQU8sYUFBYSxrQkFBa0IsT0FBTyxjQUFjLHNCQUFzQixPQUFPLFlBQVksd0JBQXdCLEdBQUcsYUFBYSwyQkFBMkIsb0JBQW9CLGlCQUFpQiw2Q0FBNkMsMkJBQTJCLHFDQUFxQyx5QkFBeUIsYUFBYSxHQUFHLGFBQWEsMkJBQTJCLG9CQUFvQixpQkFBaUIsNkNBQTZDLDJCQUEyQixxQ0FBcUMseUJBQXlCLGtCQUFrQixhQUFhLEdBQUcsVUFBVSxvQkFBb0IscUJBQXFCLHFDQUFxQyw2QkFBNkIsa0NBQWtDLG1CQUFtQixzQ0FBc0MsOEJBQThCLCtCQUErQixLQUFLLGNBQWMsaUJBQWlCLHlCQUF5QixrQkFBa0Isa0NBQWtDLFlBQVksb0JBQW9CLEdBQUcsUUFBUSxvQkFBb0IsdUJBQXVCLGdCQUFnQixlQUFlLHVCQUF1QixpQkFBaUIsOEJBQThCLHVCQUF1QixHQUFHLFFBQVEsb0JBQW9CLHlCQUF5QixHQUFHLGFBQWEseUJBQXlCLEdBQUcsWUFBWSx5QkFBeUIsaUJBQWlCLGlCQUFpQixpQkFBaUIsZ0NBQWdDLGlCQUFpQixrQkFBa0IsR0FBRyxhQUFhLHVCQUF1QixHQUFHLGtCQUFrQixzQkFBc0IsbUNBQW1DLGtDQUFrQyxHQUFHLHFCQUFxQiwwQkFBMEIsR0FBRyxXQUFXLHFCQUFxQixxQ0FBcUMsb0NBQW9DLDRDQUE0QywwREFBMEQsc0RBQXNELDRDQUE0QywyREFBMkQsNERBQTRELHNDQUFzQyw4Q0FBOEMsdUNBQXVDLHVEQUF1RCwwREFBMEQseUJBQXlCLGdCQUFnQixpQkFBaUIsd0JBQXdCLG1CQUFtQixHQUFHLGtCQUFrQixpQ0FBaUMsOEJBQThCLGtCQUFrQixnQkFBZ0Isd0JBQXdCLGtDQUFrQyxHQUFHLG1CQUFtQixnQkFBZ0IsR0FBRyxnQkFBZ0IsaUJBQWlCLEtBQUssa0JBQWtCLHlCQUF5QixnQkFBZ0Isc0JBQXNCLGlDQUFpQyxrQ0FBa0MsOEJBQThCLGtCQUFrQixHQUFHLG1CQUFtQiwrQkFBK0IsR0FBRyxvQkFBb0Isa0JBQWtCLHFCQUFxQixxQkFBcUIseUJBQXlCLHdCQUF3QixHQUFHLGlCQUFpQixtQkFBbUIsb0JBQW9CLDhCQUE4QixHQUFHLGtCQUFrQixxQkFBcUIsR0FBRyxhQUFhLG9CQUFvQiw2QkFBNkIsMEJBQTBCLG9DQUFvQyxtQkFBbUIsR0FBRyxnQkFBZ0IsZ0JBQWdCLHVCQUF1QixHQUFHLGtCQUFrQix5QkFBeUIsdUJBQXVCLEdBQUcsYUFBYSxpQkFBaUIsYUFBYSxHQUFHLGFBQWEsa0JBQWtCLEdBQUcsaUJBQWlCLHlCQUF5QixtQ0FBbUMsR0FBRyxjQUFjLHlCQUF5QixtQkFBbUIsR0FBRyxnQkFBZ0IseUJBQXlCLGtDQUFrQyxHQUFHLFVBQVUsb0JBQW9CLG1CQUFtQiw4QkFBOEIsa0NBQWtDLEdBQUcsY0FBYyxxQkFBcUIscUJBQXFCLGlCQUFpQiw4QkFBOEIsR0FBRyxhQUFhLHlCQUF5QixHQUFHLGVBQWUsb0JBQW9CLGlCQUFpQixHQUFHLFdBQVcsa0NBQWtDLGlDQUFpQyxvQkFBb0IsNkJBQTZCLDBCQUEwQiw4QkFBOEIseUJBQXlCLGlCQUFpQix5QkFBeUIsR0FBRyxlQUFlLG1CQUFtQiwwQkFBMEIsR0FBRyxhQUFhLHdCQUF3QixnQkFBZ0Isc0JBQXNCLEdBQUcsVUFBVSxvQkFBb0IsNkJBQTZCLGlCQUFpQix3QkFBd0IsR0FBRyxXQUFXLG1CQUFtQix5QkFBeUIsZUFBZSxnQkFBZ0IsZ0NBQWdDLHdCQUF3QixHQUFHLFdBQVcscUJBQXFCLHdCQUF3QixtQkFBbUIsa0NBQWtDLHlCQUF5QixHQUFHLGNBQWMsd0JBQXdCLG1CQUFtQixrQ0FBa0MseUJBQXlCLEdBQUcsWUFBWSxlQUFlLHFCQUFxQixHQUFHLGNBQWMsZUFBZSxpQkFBaUIsR0FBRyxZQUFZLHFCQUFxQix3QkFBd0IsR0FBRyxxQkFBcUI7QUFDamxkO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDbEIxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFEQUFxRDtBQUNyRDs7QUFFQTtBQUNBLGdEQUFnRDtBQUNoRDs7QUFFQTtBQUNBLHFGQUFxRjtBQUNyRjs7QUFFQTs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLEtBQUs7QUFDTCxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIscUJBQXFCO0FBQzFDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQ3JHYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsb0RBQW9EOztBQUVwRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUM1QmE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSw2RkFBYyxHQUFHLDZGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEscUJBQXFCLDZCQUE2QjtBQUNsRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN2R2E7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDdENhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDVmE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJOztBQUVqRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1hhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRDtBQUNsRDs7QUFFQTtBQUNBLDBDQUEwQztBQUMxQzs7QUFFQTs7QUFFQTtBQUNBLGlGQUFpRjtBQUNqRjs7QUFFQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsUUFBUTs7Ozs7Ozs7Ozs7Ozs7QUNQdkI7O0FBRUE7QUFDQTs7QUFFQSxtQkFBbUIsbUJBQW1CO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixtQkFBbUI7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQSxpRUFBZSxjQUFjOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3hDbUM7QUFDN0I7QUFDSTs7O0FBR3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHlCQUF5Qiw2REFBYzs7QUFFdkM7QUFDQSx3QkFBd0IsNkRBQWM7O0FBRXRDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSw0QkFBNEIsZUFBZSxPQUFPO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLDJCQUEyQiwwQ0FBMEM7QUFDckUsSUFBSSx1REFBVTtBQUNkLElBQUksdURBQU87QUFDWDs7QUFFcUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxRXFCO0FBQ047QUFDQTtBQUNOOztBQUU5Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxRQUFRLGlEQUFRO0FBQ2hCO0FBQ0EsWUFBWSx1REFBTztBQUNuQixVQUFVO0FBQ1YsWUFBWSx1REFBTztBQUNuQixVQUFVO0FBQ1YsWUFBWSwwREFBVTtBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBLGlFQUFlLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQlc7QUFDSzs7QUFFdEM7QUFDQSxnQ0FBZ0MsNkNBQUk7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEscURBQU87QUFDZixLQUFLO0FBQ0w7QUFDQSxRQUFRLHNEQUFPO0FBQ2YsS0FBSztBQUNMO0FBQ0EsUUFBUSxzREFBTztBQUNmLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7OztBQUdMOztBQUVBLGlFQUFlLFVBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9CZTtBQUNBO0FBQ0o7QUFDa0I7O0FBRXREO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLDRDQUFHO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1CQUFtQixPQUFPO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLDhDQUFLO0FBQy9CO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDViwwQkFBMEIsOENBQUs7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLE9BQU87QUFDMUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0ZBQWtGLElBQUk7QUFDdEY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksa0VBQWM7QUFDbEI7O0FBRUEsaUVBQWUsVUFBVTs7Ozs7Ozs7Ozs7Ozs7O0FDL0YyQjs7QUFFcEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHdCQUF3QixrREFBYTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pDWTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWxDOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLG1CQUFtQixPQUFPO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLE9BQU87QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsMkNBQUU7QUFDN0I7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLDJDQUFFO0FBQzdCO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQiwyQ0FBRTtBQUM3QjtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsMkNBQUU7QUFDN0I7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLDJDQUFFO0FBQzdCO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQiwyQ0FBRTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdkV0QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7QUNBOEM7QUFDekI7O0FBRXJCLDJEQUFVLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvZnVuY3Rpb25zL2R1bXAuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL2Z1bmN0aW9ucy9mb3JtLWV2ZW50cy5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvZnVuY3Rpb25zL2luaXQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL2Z1bmN0aW9ucy9sb2FkLW5ldy5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvZnVuY3Rpb25zL25hdi1ldmVudHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL3BhZ2VzL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL3BhZ2VzL2hvbWUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL3BhZ2VzL21lbnUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2JnMi5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9PbGRXaXphcmQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvSGluZC1NZWRpdW0udHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvc2lkZWJhcjIucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvc2lkZWJhcjEucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgZm9udC1mYW1pbHk6ICdIaW5kJztcXG4gICAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnT2xkV2l6YXJkJztcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdIaW5kJztcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZhbGwtZG93biB7XFxuICAgIDEwJSB7XFxuICAgICAgICB0b3A6IDA7XFxuICAgIH1cXG4gICAgMjUlIHtcXG4gICAgICAgIHRvcDogLTg1cHg7XFxuICAgIH1cXG4gICAgMTAwJSB7XFxuICAgICAgICB0b3A6IDEwMDBweDtcXG4gICAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZhbGwtaW4ge1xcbiAgICAwJSB7XFxuICAgICAgICB0b3A6IC0xMDAwcHg7XFxuICAgIH1cXG4gICAgMTAwJSB7XFxuICAgICAgICB0b3A6IDBweDtcXG4gICAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGJvdW5jZSB7XFxuICAgIDAlIHtcXG4gICAgICAgIHRvcDogMCU7XFxuICAgIH1cXG4gICAgMjUlIHtcXG4gICAgICAgIHRvcDogLTE1JTtcXG4gICAgfVxcbiAgICA1MCUge1xcbiAgICAgICAgdG9wOiAwJTtcXG4gICAgfVxcbiAgICA3NSUge1xcbiAgICAgICAgdG9wOiAtNy41JTtcXG4gICAgfVxcbiAgICA4Ny41JSB7XFxuICAgICAgICB0b3A6IDAlO1xcbiAgICB9XFxuICAgIDkzLjc1JSB7XFxuICAgICAgICB0b3A6IC0zLjc1JTtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICAgIHRvcDogMCVcXG4gICAgfVxcbn1cXG5cXG4ubC1zaWRlIHtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAzNSU7XFxuICAgIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMjAlO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdC14OiBuby1yZXBlYXQ7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbn1cXG5cXG4uci1zaWRlIHtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAzNSU7XFxuICAgIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMjAlO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdC14OiBuby1yZXBlYXQ7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IC0yOCU7XFxuICAgIHRvcDogMDtcXG59XFxuXFxuLm5hdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZvbnQtc2l6ZTogMnZ3O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHBhZGRpbmc6IDElIDEwJSAxJSAxMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA4NTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItYm90dG9tOiBkb3VibGUgd2hpdGUgM3B4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZm9udC1mYW1pbHk6ICdPbGRXaXphcmQnO1xcblxcbn1cXG5cXG4ubmF2IGltZyB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAtMTAwcHg7XFxuICAgIHRyYW5zaXRpb246IGFsbCAuMjVzIGVhc2VcXG59XFxuXFxuLm5hdiBwIHtcXG4gICAgICAgIG1hcmdpbjogMDtcXG59XFxuXFxudWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHdpZHRoOiAwO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMXMgZWFzZTtcXG4gICAgbWFyZ2luLWxlZnQ6IC41JTtcXG59XFxuXFxubGkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbmxpIHNwYW4ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbmxpIGltZyB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAtMTAwJTtcXG4gICAgbGVmdDogLTUwJTtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIC4yNXMgZWFzZTtcXG4gICAgd2lkdGg6IDI1JTtcXG4gICAgaGVpZ2h0OiA2NSU7XFxufVxcblxcbmxpICsgbGkge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDYlO1xcbn1cXG5cXG5saTpob3ZlciBzcGFue1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRleHQtc2hhZG93OiAwIDBweCA0cHggd2hpdGU7XFxuICAgIGFuaW1hdGlvbjogYm91bmNlIC4yNXMgZWFzZTtcXG59XFxuXFxubGk6bnRoLWNoaWxkKDEpIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDEuMTV2dztcXG59XFxuXFxuLm1haW4ge1xcbiAgICBkaXNwbGF5OiBmbGV4OyAvKmZvciBob21lIHBhZ2UqL1xcbiAgICBoZWlnaHQ6IDkwdmg7IC8qZm9yIGFsbCBwYWdlcyovXFxuICAgIHdpZHRoOiA3NXZ3OyAvKmZvciBtZW51IHBhZ2UqL1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyAvKmZvciBib3RoIHBhZ2VzKi9cXG4gICAgLyoganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7IC8qZm9yIGhvbWUgcGFnZSovXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kOyAvKmZvciBjb250YWN0IHBhZ2UqL1xcbiAgICAvKiBkaXNwbGF5OiBncmlkOyAvKmZvciBtZW51IHBhZ2UqL1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyOyAvKmZvciBtZW51IHBhZ2UqL1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA5ZnIgOWZyIDFmcjsgLypmb3IgbWVudSBwYWdlKi9cXG4gICAgZ3JpZC1nYXA6IDNweDsgLypmb3IgbWVudSBwYWdlKi9cXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyOyAvKmZvciBtZW51IHBhZ2UqL1xcbiAgICBtYXJnaW46IDAgYXV0bzsgLypmb3IgbWVudSBwYWdlKi9cXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyOyAvKiBmb3IgY29udGFjdCBwYWdlICovXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogLjVmciAyZnI7IC8qIGZvciBjb250YWN0IHBhZ2UgKi9cXG59XFxuXFxuLmhlcm8tdGV4dCB7XFxuICAgIHdpZHRoOiA0MCU7XFxuICAgIGZvbnQtc2l6ZTogMS43NXZ3O1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi5oZXJvLXRleHQgcCB7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigycHgpO1xcbiAgICBib3JkZXI6IHNvbGlkIGJsYWNrIDFweDtcXG4gICAgcGFkZGluZzogNSU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZm9udC1zaXplOiAxLjI1dnc7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDAxNDtcXG59XFxuXFxuLmhlcm8tdGV4dCBoMSB7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLmhlYWQtY2hlZiB7XFxuICAgIHdpZHRoOiAyNSU7XFxuXFxufVxcblxcbi5oZWFkLWNoZWYgcCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LXNpemU6IC45dnc7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigycHgpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwMTQ7XFxuICAgIGJvcmRlcjogc29saWQgYmxhY2sgMXB4O1xcbiAgICBwYWRkaW5nOiA1JTtcXG59XFxuXFxuLmhlYWQtY2hlZiBlbSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnT2xkV2l6YXJkJztcXG59XFxuXFxuLmhlYWQtY2hlZiBpbWcge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDMlO1xcbn1cXG5cXG4ub3B0aW9uIGltZyB7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgaGVpZ2h0OiAzMDBweDtcXG4gICAgYm9yZGVyOiBzb2xpZCB3aGl0ZSAxcHg7XFxufVxcblxcbi5vcHRpb24gc3BhbiB7XFxuICAgIGZvbnQtc2l6ZTogMXZ3O1xcbn1cXG5cXG4ub3B0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLm1haW4gPiBoMSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZ3JpZC1jb2x1bW46IDEvNDtcXG59XFxuXFxuLm1lbnUtaGVhZGVyIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBncmlkLWNvbHVtbjogMi8zO1xcbn1cXG5cXG4jcHVzaGVkIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdG9wOiAwO1xcbn1cXG5cXG4jbG9hZGVkIHtcXG4gICAgd2lkdGg6IDE5dnc7XFxufVxcblxcbiNtb3Zpbmctb3V0IHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBhbmltYXRpb246IGZhbGwtZG93biAxcyBlYXNlO1xcbn1cXG5cXG4jd2FpdGluZyB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAtMTAwMHB4O1xcbn1cXG5cXG4jbW92aW5nLWluIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBhbmltYXRpb246IGZhbGwtaW4gLjVzIGVhc2U7XFxufVxcblxcbi5tYXAge1xcbiAgICB3aWR0aDogNDEuMjUlO1xcbiAgICBwYWRkaW5nOiAxdnc7XFxuICAgIGJvcmRlcjogc29saWQgYmxhY2sgMXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwMTQ7XFxufVxcblxcbi5tYXAgaW1nIHtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogNjAlO1xcbiAgICBib3JkZXI6IHNvbGlkIGJsYWNrIDFweDtcXG59XFxuXFxuLm1hcCBoMiB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmluZm8gZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDY1JTtcXG59XFxuXFxuLmluZm8ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwMTQ7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigycHgpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXI6IHNvbGlkIGJsYWNrIDFweDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICB3aWR0aDogMzAlO1xcbiAgICBwYWRkaW5nOiA1JSAwIDUlIDA7XFxufVxcblxcbi5pbmZvIGltZyB7XFxuICAgIHdpZHRoOiAxLjV2dztcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG59XFxuXFxuLmluZm8gcCB7XFxuICAgIGZvbnQtc2l6ZTogMS4yNXZ3O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIG1hcmdpbi1sZWZ0OiAzJTtcXG59XFxuXFxuZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiA2NSU7XFxuICAgIGZvbnQtc2l6ZTogMS4yNXZ3O1xcbn1cXG5cXG5sYWJlbCB7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IDR2aDtcXG4gICAgbGVmdDogNXB4O1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZSAuMjVzO1xcbiAgICBmb250LXNpemU6IDEuMjV2dztcXG59XFxuXFxuaW5wdXQge1xcbiAgICBoZWlnaHQ6IDEuNzV2dztcXG4gICAgZm9udC1zaXplOiAxLjI1dnc7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzk5NjcyMjZlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbnRleHRhcmVhIHtcXG4gICAgZm9udC1zaXplOiAxLjI1dnc7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzk5NjcyMjZlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbiN2YWxpZCB7XFxuICAgIHRvcDogNXB4O1xcbiAgICBjb2xvcjogIzAwY2IwMDtcXG59XFxuXFxuI2ludmFsaWQge1xcbiAgICB0b3A6IDVweDtcXG4gICAgY29sb3I6IHJlZDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgbWFyZ2luLXRvcDogMyU7XFxuICAgIGZvbnQtc2l6ZTogMS4yNXZ3O1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksU0FBUztJQUNULGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLG1EQUFtQztBQUN2Qzs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4Qiw0Q0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsNENBQW9DO0FBQ3hDOztBQUVBO0lBQ0k7UUFDSSxNQUFNO0lBQ1Y7SUFDQTtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksV0FBVztJQUNmO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLFlBQVk7SUFDaEI7SUFDQTtRQUNJLFFBQVE7SUFDWjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxPQUFPO0lBQ1g7SUFDQTtRQUNJLFNBQVM7SUFDYjtJQUNBO1FBQ0ksT0FBTztJ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SUFDbEIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksY0FBYztJQUNkLGNBQWM7SUFDZCxVQUFVO0lBQ1YsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFVBQVU7QUFDZDs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQiwwQkFBMEI7SUFDMUIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixTQUFTO0lBQ1QsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCx5QkFBeUI7SUFDekIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osMkJBQTJCO0lBQzNCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osMkJBQTJCO0lBQzNCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFFBQVE7SUFDUixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksUUFBUTtJQUNSLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7QUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBmb250LWZhbWlseTogJ0hpbmQnO1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4vYXNzZXRzL2JnMi5qcGcnKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnT2xkV2l6YXJkJztcXG4gICAgc3JjOiB1cmwoJy4vYXNzZXRzL09sZFdpemFyZC50dGYnKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnSGluZCc7XFxuICAgIHNyYzogdXJsKCcuL2Fzc2V0cy9IaW5kLU1lZGl1bS50dGYnKTtcXG59XFxuXFxuQGtleWZyYW1lcyBmYWxsLWRvd24ge1xcbiAgICAxMCUge1xcbiAgICAgICAgdG9wOiAwO1xcbiAgICB9XFxuICAgIDI1JSB7XFxuICAgICAgICB0b3A6IC04NXB4O1xcbiAgICB9XFxuICAgIDEwMCUge1xcbiAgICAgICAgdG9wOiAxMDAwcHg7XFxuICAgIH1cXG59XFxuXFxuQGtleWZyYW1lcyBmYWxsLWluIHtcXG4gICAgMCUge1xcbiAgICAgICAgdG9wOiAtMTAwMHB4O1xcbiAgICB9XFxuICAgIDEwMCUge1xcbiAgICAgICAgdG9wOiAwcHg7XFxuICAgIH1cXG59XFxuXFxuQGtleWZyYW1lcyBib3VuY2Uge1xcbiAgICAwJSB7XFxuICAgICAgICB0b3A6IDAlO1xcbiAgICB9XFxuICAgIDI1JSB7XFxuICAgICAgICB0b3A6IC0xNSU7XFxuICAgIH1cXG4gICAgNTAlIHtcXG4gICAgICAgIHRvcDogMCU7XFxuICAgIH1cXG4gICAgNzUlIHtcXG4gICAgICAgIHRvcDogLTcuNSU7XFxuICAgIH1cXG4gICAgODcuNSUge1xcbiAgICAgICAgdG9wOiAwJTtcXG4gICAgfVxcbiAgICA5My43NSUge1xcbiAgICAgICAgdG9wOiAtMy43NSU7XFxuICAgIH1cXG4gICAgMTAwJSB7XFxuICAgICAgICB0b3A6IDAlXFxuICAgIH1cXG59XFxuXFxuLmwtc2lkZSB7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMzUlO1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi9hc3NldHMvc2lkZWJhcjIucG5nKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAyMCU7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0LXg6IG5vLXJlcGVhdDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxufVxcblxcbi5yLXNpZGUge1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDM1JTtcXG4gICAgYmFja2dyb3VuZDogdXJsKC4vYXNzZXRzL3NpZGViYXIxLnBuZyk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMjAlO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdC14OiBuby1yZXBlYXQ7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IC0yOCU7XFxuICAgIHRvcDogMDtcXG59XFxuXFxuLm5hdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZvbnQtc2l6ZTogMnZ3O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHBhZGRpbmc6IDElIDEwJSAxJSAxMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA4NTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItYm90dG9tOiBkb3VibGUgd2hpdGUgM3B4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZm9udC1mYW1pbHk6ICdPbGRXaXphcmQnO1xcblxcbn1cXG5cXG4ubmF2IGltZyB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAtMTAwcHg7XFxuICAgIHRyYW5zaXRpb246IGFsbCAuMjVzIGVhc2VcXG59XFxuXFxuLm5hdiBwIHtcXG4gICAgICAgIG1hcmdpbjogMDtcXG59XFxuXFxudWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHdpZHRoOiAwO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMXMgZWFzZTtcXG4gICAgbWFyZ2luLWxlZnQ6IC41JTtcXG59XFxuXFxubGkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbmxpIHNwYW4ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbmxpIGltZyB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAtMTAwJTtcXG4gICAgbGVmdDogLTUwJTtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIC4yNXMgZWFzZTtcXG4gICAgd2lkdGg6IDI1JTtcXG4gICAgaGVpZ2h0OiA2NSU7XFxufVxcblxcbmxpICsgbGkge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDYlO1xcbn1cXG5cXG5saTpob3ZlciBzcGFue1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRleHQtc2hhZG93OiAwIDBweCA0cHggd2hpdGU7XFxuICAgIGFuaW1hdGlvbjogYm91bmNlIC4yNXMgZWFzZTtcXG59XFxuXFxubGk6bnRoLWNoaWxkKDEpIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDEuMTV2dztcXG59XFxuXFxuLm1haW4ge1xcbiAgICBkaXNwbGF5OiBmbGV4OyAvKmZvciBob21lIHBhZ2UqL1xcbiAgICBoZWlnaHQ6IDkwdmg7IC8qZm9yIGFsbCBwYWdlcyovXFxuICAgIHdpZHRoOiA3NXZ3OyAvKmZvciBtZW51IHBhZ2UqL1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyAvKmZvciBib3RoIHBhZ2VzKi9cXG4gICAgLyoganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7IC8qZm9yIGhvbWUgcGFnZSovXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kOyAvKmZvciBjb250YWN0IHBhZ2UqL1xcbiAgICAvKiBkaXNwbGF5OiBncmlkOyAvKmZvciBtZW51IHBhZ2UqL1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyOyAvKmZvciBtZW51IHBhZ2UqL1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA5ZnIgOWZyIDFmcjsgLypmb3IgbWVudSBwYWdlKi9cXG4gICAgZ3JpZC1nYXA6IDNweDsgLypmb3IgbWVudSBwYWdlKi9cXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyOyAvKmZvciBtZW51IHBhZ2UqL1xcbiAgICBtYXJnaW46IDAgYXV0bzsgLypmb3IgbWVudSBwYWdlKi9cXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyOyAvKiBmb3IgY29udGFjdCBwYWdlICovXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogLjVmciAyZnI7IC8qIGZvciBjb250YWN0IHBhZ2UgKi9cXG59XFxuXFxuLmhlcm8tdGV4dCB7XFxuICAgIHdpZHRoOiA0MCU7XFxuICAgIGZvbnQtc2l6ZTogMS43NXZ3O1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi5oZXJvLXRleHQgcCB7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigycHgpO1xcbiAgICBib3JkZXI6IHNvbGlkIGJsYWNrIDFweDtcXG4gICAgcGFkZGluZzogNSU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZm9udC1zaXplOiAxLjI1dnc7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDAxNDtcXG59XFxuXFxuLmhlcm8tdGV4dCBoMSB7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLmhlYWQtY2hlZiB7XFxuICAgIHdpZHRoOiAyNSU7XFxuXFxufVxcblxcbi5oZWFkLWNoZWYgcCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LXNpemU6IC45dnc7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigycHgpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwMTQ7XFxuICAgIGJvcmRlcjogc29saWQgYmxhY2sgMXB4O1xcbiAgICBwYWRkaW5nOiA1JTtcXG59XFxuXFxuLmhlYWQtY2hlZiBlbSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnT2xkV2l6YXJkJztcXG59XFxuXFxuLmhlYWQtY2hlZiBpbWcge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDMlO1xcbn1cXG5cXG4ub3B0aW9uIGltZyB7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgaGVpZ2h0OiAzMDBweDtcXG4gICAgYm9yZGVyOiBzb2xpZCB3aGl0ZSAxcHg7XFxufVxcblxcbi5vcHRpb24gc3BhbiB7XFxuICAgIGZvbnQtc2l6ZTogMXZ3O1xcbn1cXG5cXG4ub3B0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLm1haW4gPiBoMSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZ3JpZC1jb2x1bW46IDEvNDtcXG59XFxuXFxuLm1lbnUtaGVhZGVyIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBncmlkLWNvbHVtbjogMi8zO1xcbn1cXG5cXG4jcHVzaGVkIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdG9wOiAwO1xcbn1cXG5cXG4jbG9hZGVkIHtcXG4gICAgd2lkdGg6IDE5dnc7XFxufVxcblxcbiNtb3Zpbmctb3V0IHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBhbmltYXRpb246IGZhbGwtZG93biAxcyBlYXNlO1xcbn1cXG5cXG4jd2FpdGluZyB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAtMTAwMHB4O1xcbn1cXG5cXG4jbW92aW5nLWluIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBhbmltYXRpb246IGZhbGwtaW4gLjVzIGVhc2U7XFxufVxcblxcbi5tYXAge1xcbiAgICB3aWR0aDogNDEuMjUlO1xcbiAgICBwYWRkaW5nOiAxdnc7XFxuICAgIGJvcmRlcjogc29saWQgYmxhY2sgMXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwMTQ7XFxufVxcblxcbi5tYXAgaW1nIHtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogNjAlO1xcbiAgICBib3JkZXI6IHNvbGlkIGJsYWNrIDFweDtcXG59XFxuXFxuLm1hcCBoMiB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmluZm8gZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDY1JTtcXG59XFxuXFxuLmluZm8ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwMTQ7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigycHgpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXI6IHNvbGlkIGJsYWNrIDFweDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICB3aWR0aDogMzAlO1xcbiAgICBwYWRkaW5nOiA1JSAwIDUlIDA7XFxufVxcblxcbi5pbmZvIGltZyB7XFxuICAgIHdpZHRoOiAxLjV2dztcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG59XFxuXFxuLmluZm8gcCB7XFxuICAgIGZvbnQtc2l6ZTogMS4yNXZ3O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIG1hcmdpbi1sZWZ0OiAzJTtcXG59XFxuXFxuZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiA2NSU7XFxuICAgIGZvbnQtc2l6ZTogMS4yNXZ3O1xcbn1cXG5cXG5sYWJlbCB7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IDR2aDtcXG4gICAgbGVmdDogNXB4O1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZSAuMjVzO1xcbiAgICBmb250LXNpemU6IDEuMjV2dztcXG59XFxuXFxuaW5wdXQge1xcbiAgICBoZWlnaHQ6IDEuNzV2dztcXG4gICAgZm9udC1zaXplOiAxLjI1dnc7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzk5NjcyMjZlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbnRleHRhcmVhIHtcXG4gICAgZm9udC1zaXplOiAxLjI1dnc7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzk5NjcyMjZlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbiN2YWxpZCB7XFxuICAgIHRvcDogNXB4O1xcbiAgICBjb2xvcjogIzAwY2IwMDtcXG59XFxuXFxuI2ludmFsaWQge1xcbiAgICB0b3A6IDVweDtcXG4gICAgY29sb3I6IHJlZDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgbWFyZ2luLXRvcDogMyU7XFxuICAgIGZvbnQtc2l6ZTogMS4yNXZ3O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgZHVtcE1haW4gPSBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKTtcbiAgICB3aGlsZShtYWluLmhhc0NoaWxkTm9kZXMoKSkge1xuICAgICAgICBtYWluLnJlbW92ZUNoaWxkKG1haW4uZmlyc3RDaGlsZCk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBkdW1wTWFpbjsiLCJjb25zdCBiaW5kRm9ybUV2ZW50cyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgY29uc3QgaW5wdXRzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpKTtcbiAgICBjb25zdCBtZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndGV4dGFyZWEnKTtcblxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBpbnB1dHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaW5wdXRzW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZihpbnB1dHNbaV0uY2hlY2tWYWxpZGl0eSgpKSB7XG4gICAgICAgICAgICAgICAgaW5wdXRzW2ldLmxhYmVsc1swXS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3ZhbGlkJyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYoIWlucHV0c1tpXS5jaGVja1ZhbGlkaXR5KCkgfHwgaW5wdXRzW2ldLnZhbHVlID09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICBpbnB1dHNbaV0ubGFiZWxzWzBdLnNldEF0dHJpYnV0ZSgnaWQnLCAnaW52YWxpZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaW5wdXRzW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZihpbnB1dHNbaV0uY2hlY2tWYWxpZGl0eSgpKSB7XG4gICAgICAgICAgICAgICAgaW5wdXRzW2ldLmxhYmVsc1swXS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3ZhbGlkJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlucHV0c1tpXS5sYWJlbHNbMF0uc2V0QXR0cmlidXRlKCdpZCcsICdpbnZhbGlkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgICBtZXNzYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIG1lc3NhZ2UubGFiZWxzWzBdLnNldEF0dHJpYnV0ZSgnaWQnLCAndmFsaWQnKTtcbiAgICB9KVxuICAgIFxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICBpZihlLnRhcmdldC50eXBlICE9ICd0ZXh0JyAmJiBlLnRhcmdldC50eXBlICE9ICd0ZXh0YXJlYScpIHtcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBpbnB1dHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZihpbnB1dHNbaV0udmFsdWUgPT0gXCJcIikge1xuICAgICAgICAgICAgICAgICAgICBpbnB1dHNbaV0ubGFiZWxzWzBdLnJlbW92ZUF0dHJpYnV0ZSgnaWQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihtZXNzYWdlLnZhbHVlID09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlLmxhYmVsc1swXS5yZW1vdmVBdHRyaWJ1dGUoJ2lkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBiaW5kRm9ybUV2ZW50czsiLCJpbXBvcnQgbW92aW5nTXVzaHJvb20gZnJvbSAnLi4vYXNzZXRzL211c2hyb29tLWljb24tYWN0aXZlLmdpZic7XG5pbXBvcnQgZ2VuSG9tZSBmcm9tIFwiLi4vcGFnZXMvaG9tZVwiXG5pbXBvcnQgIGJpbmRFdmVudHMgZnJvbSAnLi9uYXYtZXZlbnRzJztcblxuXG4vLyBDcmVhdGVzIGNvbnRlbnQgdGhhdCB3aWxsIGFsd2F5cyBiZSBvbiB0aGUgcGFnZSwgYW5kIGluaXRpYXRlcyBhbmltYXRpb25zIHRoYXQgYXJlIG9ubHkgZ29pbmcgdG8gZmlyZSBvbmNlLlxuXG5mdW5jdGlvbiBjcmVhdGVNYWluKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250ZW50LnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGVudCcpXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250ZW50KTtcblxuICAgIGNvbnN0IHJpZ2h0U2lkZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHJpZ2h0U2lkZS5jbGFzc0xpc3QuYWRkKCdyLXNpZGUnKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHJpZ2h0U2lkZSk7XG5cbiAgICBjb25zdCBsZWZ0U2lkZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxlZnRTaWRlLmNsYXNzTGlzdC5hZGQoJ2wtc2lkZScpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobGVmdFNpZGUpXG5cbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuYXYuY2xhc3NMaXN0LmFkZCgnbmF2Jyk7XG5cbiAgICBjb25zdCBuYXZTaHJvb21SaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIG5hdlNocm9vbVJpZ2h0LnNyYyA9IG1vdmluZ011c2hyb29tO1xuXG4gICAgY29uc3QgbmF2U2hyb29tTGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIG5hdlNocm9vbUxlZnQuc3JjID0gbW92aW5nTXVzaHJvb207XG5cbiAgICBjb25zdCB1bm9yZGVyZWRMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBcbiAgICBjb25zdCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBob21lQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGhvbWVCdXR0b24udGV4dENvbnRlbnQgPSAnaG9tZSdcbiAgICBob21lLnNldEF0dHJpYnV0ZSgnaWQnLCdob21lJyk7XG4gICAgaG9tZS5hcHBlbmRDaGlsZChob21lQnV0dG9uKTtcblxuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgbWVudUJ1dHRvbi50ZXh0Q29udGVudCA9ICdtZW51JztcbiAgICBtZW51LnNldEF0dHJpYnV0ZSgnaWQnLCdtZW51Jyk7XG4gICAgbWVudS5hcHBlbmRDaGlsZChtZW51QnV0dG9uKTtcblxuICAgIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IGNvbnRhY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgY29udGFjdEJ1dHRvbi50ZXh0Q29udGVudCA9ICdjb250YWN0JztcbiAgICBjb250YWN0LnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGFjdCcpO1xuICAgIGNvbnRhY3QuYXBwZW5kQ2hpbGQoY29udGFjdEJ1dHRvbik7XG5cbiAgICB1bm9yZGVyZWRMaXN0LmFwcGVuZENoaWxkKGhvbWUpO1xuICAgIHVub3JkZXJlZExpc3QuYXBwZW5kQ2hpbGQobWVudSk7XG4gICAgdW5vcmRlcmVkTGlzdC5hcHBlbmRDaGlsZChjb250YWN0KTtcblxuICAgIG5hdi5hcHBlbmRDaGlsZChuYXZTaHJvb21MZWZ0KTtcbiAgICBuYXYuYXBwZW5kQ2hpbGQodW5vcmRlcmVkTGlzdCk7XG4gICAgbmF2LmFwcGVuZENoaWxkKG5hdlNocm9vbVJpZ2h0KTtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobmF2KTtcblxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoJ21haW4nKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1haW4pO1xuXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHsgZm9yKGxldCBpID0gMDsgaSA8IDI7IGkrKykge1xuICAgICAgIG5hdlNocm9vbVJpZ2h0LnNldEF0dHJpYnV0ZSgnaWQnLCAncHVzaGVkJyk7XG4gICAgICAgbmF2U2hyb29tTGVmdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3B1c2hlZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCAgNTAwKVxuICAgIFxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7dW5vcmRlcmVkTGlzdC5zZXRBdHRyaWJ1dGUoJ2lkJywnbG9hZGVkJyl9LCAxMDAwKTtcbiAgICBiaW5kRXZlbnRzKCk7XG4gICAgZ2VuSG9tZSgpO1xufSBcblxuZXhwb3J0IHsgY3JlYXRlTWFpbiB9XG4iLCJpbXBvcnQgZ2VuQ29udGFjdCBmcm9tICcuLi9wYWdlcy9jb250YWN0JztcbmltcG9ydCBnZW5Ib21lIGZyb20gJy4uL3BhZ2VzL2hvbWUnO1xuaW1wb3J0IGdlbk1lbnUgZnJvbSAnLi4vcGFnZXMvbWVudSc7XG5pbXBvcnQgZHVtcE1haW4gZnJvbSAnLi9kdW1wJztcblxuLy8gZnVuY3Rpb24gZm9yIGFuaW1hdGluZyBhbiBvbGQgbWFpbiBmYWxsaW5nIG91dCBhbmQgbGEgbmV3IG9uZSBmYWxsaW5nIGluLlxuXG5jb25zdCBsb2FkTmV3ID0gZnVuY3Rpb24ocmVxdWVzdCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpO1xuICAgIG1haW4uc2V0QXR0cmlidXRlKCdpZCcsICdtb3Zpbmctb3V0Jyk7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgbWFpbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3dhaXRpbmcnKTtcbiAgICB9LCA5MDApXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc29sZS5sb2cocmVxdWVzdCk7XG4gICAgICAgIGR1bXBNYWluKClcbiAgICAgICAgaWYocmVxdWVzdCA9PSAnaG9tZScpIHtcbiAgICAgICAgICAgIGdlbkhvbWUoKTtcbiAgICAgICAgfSBlbHNlIGlmKHJlcXVlc3QgPT0gJ21lbnUnKSB7XG4gICAgICAgICAgICBnZW5NZW51KCk7XG4gICAgICAgIH0gZWxzZSBpZihyZXF1ZXN0ID09ICdjb250YWN0Jykge1xuICAgICAgICAgICAgZ2VuQ29udGFjdCgpO1xuICAgICAgICB9XG4gICAgICAgIG1haW4uc2V0QXR0cmlidXRlKCdpZCcsJ21vdmluZy1pbicpO1xuICAgIH0sIDExMDApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkTmV3OyIsImltcG9ydCBsb2FkTmV3IGZyb20gJy4vbG9hZC1uZXcnO1xuaW1wb3J0IGRyb3AgZnJvbSAnLi4vYXNzZXRzL2Ryb3Aud2F2JztcblxuY29uc3QgYmluZEV2ZW50cyA9IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGRyb3BTb3VuZCA9IG5ldyBBdWRpbyhkcm9wKTtcbiAgICBkcm9wU291bmQudm9sdW1lID0gMC4wNTtcbiAgICBjb25zdCBob21lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hvbWUnKTtcbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21lbnUnKTtcbiAgICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhY3QnKTtcbiAgICBob21lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGxvYWROZXcoJ2hvbWUnKTtcbiAgICB9KVxuICAgIG1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgbG9hZE5ldygnbWVudScpO1xuICAgIH0pXG4gICAgY29udGFjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICBsb2FkTmV3KCdjb250YWN0Jyk7XG4gICAgfSlcbiAgICBob21lLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBmdW5jdGlvbigpIHtcbiAgICAgICAgZHJvcFNvdW5kLnBsYXkoKTtcbiAgICB9KVxuICAgIG1lbnUuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIGZ1bmN0aW9uKCkge1xuICAgICAgICBkcm9wU291bmQucGxheSgpO1xuICAgIH0pXG4gICAgY29udGFjdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGRyb3BTb3VuZC5wbGF5KCk7XG4gICAgfSlcblxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGJpbmRFdmVudHM7IiwiaW1wb3J0IHBob25lIGZyb20gJy4uL2Fzc2V0cy9waG9uZS5zdmcnO1xuaW1wb3J0IGNsb2NrIGZyb20gJy4uL2Fzc2V0cy9jbG9jay5zdmcnO1xuaW1wb3J0IGxvYyBmcm9tICcuLi9hc3NldHMvbG9jLnBuZyc7XG5pbXBvcnQgYmluZEZvcm1FdmVudHMgZnJvbSAnLi4vZnVuY3Rpb25zL2Zvcm0tZXZlbnRzJztcblxuY29uc3QgZ2VuQ29udGFjdCA9IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpO1xuICAgIG1haW4uc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICBtYWluLnN0eWxlLmp1c3RpZnlDb250ZW50ID0gJ3NwYWNlLWFyb3VuZCc7XG5cbiAgICBjb25zdCBtYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtYXAuY2xhc3NMaXN0LmFkZCgnbWFwJyk7XG4gICAgY29uc3QgaW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGluZm8uY2xhc3NMaXN0LmFkZCgnaW5mbycpO1xuXG4gICAgY29uc3QgbWFwSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgbWFwSW1nLnNyYyA9IGxvYztcbiAgICBjb25zdCBtYXBUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBtYXBUZXh0LnRleHRDb250ZW50ID0gJ0NvbWUgdmlzaXQgdXMgYXQgb3VyIHN0b3JlZnJvbnQgbG9jYXRpb24hJ1xuICAgIG1hcC5hcHBlbmRDaGlsZChtYXBJbWcpO1xuICAgIG1hcC5hcHBlbmRDaGlsZChtYXBUZXh0KTtcblxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCAyOyBpKyspIHtcbiAgICAgICAgY29uc3QgdGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCB0ZW1wSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGNvbnN0IHRlbXBQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBpZihpID09IDApIHtcbiAgICAgICAgICAgIHRlbXBJbWcuc3JjID0gY2xvY2s7XG4gICAgICAgICAgICB0ZW1wUC50ZXh0Q29udGVudCA9ICczQU0gLSAyQU0nO1xuICAgICAgICAgICAgdGVtcC5hcHBlbmRDaGlsZCh0ZW1wSW1nKTtcbiAgICAgICAgICAgIHRlbXAuYXBwZW5kQ2hpbGQodGVtcFApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGVtcEltZy5zcmMgPSBwaG9uZTtcbiAgICAgICAgICAgIHRlbXBQLnRleHRDb250ZW50ID0gJzExMS0xMTEtMTExMSc7XG4gICAgICAgICAgICB0ZW1wLmFwcGVuZENoaWxkKHRlbXBJbWcpO1xuICAgICAgICAgICAgdGVtcC5hcHBlbmRDaGlsZCh0ZW1wUCk7XG4gICAgICAgIH1cbiAgICAgICAgaW5mby5hcHBlbmRDaGlsZCh0ZW1wKTtcbiAgICB9XG5cbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcbiAgICAgICAgY29uc3QgdGVtcElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgY29uc3QgdGVtcExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcblxuICAgICAgICBzd2l0Y2goaSkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIHRlbXBJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgICAgICAgICAgICAgIHRlbXBJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25hbWUnKTtcbiAgICAgICAgICAgICAgICB0ZW1wSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ25hbWUnKTtcbiAgICAgICAgICAgICAgICB0ZW1wSW5wdXQuc2V0QXR0cmlidXRlKCdtaW5sZW5ndGgnLCAnMycpO1xuICAgICAgICAgICAgICAgIHRlbXBJbnB1dC5yZXF1aXJlZCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICB0ZW1wTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnbmFtZScpO1xuICAgICAgICAgICAgICAgIHRlbXBMYWJlbC50ZXh0Q29udGVudCA9IFwiTmFtZVwiO1xuICAgICAgICAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQodGVtcExhYmVsKTtcbiAgICAgICAgICAgICAgICBmb3JtLmFwcGVuZENoaWxkKHRlbXBJbnB1dCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDE6IFxuICAgICAgICAgICAgICAgIHRlbXBJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgICAgICAgICAgICAgIHRlbXBJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2VtYWlsJyk7XG4gICAgICAgICAgICAgICAgdGVtcElucHV0LnNldEF0dHJpYnV0ZSgncGF0dGVybicsICdeW1xcXFx3LVxcXFwuXStAKFtcXHctXStcXFxcLikrW1xcXFx3LV17Miw0fSQnKTtcbiAgICAgICAgICAgICAgICB0ZW1wSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ2VtYWlsJyk7XG4gICAgICAgICAgICAgICAgdGVtcElucHV0LnJlcXVpcmVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgIHRlbXBMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdlbWFpbCcpO1xuICAgICAgICAgICAgICAgIHRlbXBMYWJlbC50ZXh0Q29udGVudCA9IFwiRW1haWxcIjtcbiAgICAgICAgICAgICAgICBmb3JtLmFwcGVuZENoaWxkKHRlbXBMYWJlbCk7XG4gICAgICAgICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZCh0ZW1wSW5wdXQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIGNvbnN0IHRlbXBUZXh0YXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgICAgICAgICAgICAgdGVtcFRleHRhcmVhLnNldEF0dHJpYnV0ZSgnaWQnLCAnbWVzc2FnZScpO1xuICAgICAgICAgICAgICAgIHRlbXBUZXh0YXJlYS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnbWVzc2FnZScpXG5cbiAgICAgICAgICAgICAgICB0ZW1wTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnbWVzc2FnZScpO1xuICAgICAgICAgICAgICAgIHRlbXBMYWJlbC50ZXh0Q29udGVudCA9IFwiU2F5IHNvbWV0aGluZyBuaWNlIDopXCI7XG4gICAgICAgICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZCh0ZW1wTGFiZWwpO1xuICAgICAgICAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQodGVtcFRleHRhcmVhKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzogXG4gICAgICAgICAgICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0gJ3N1Ym1pdCc7XG4gICAgICAgICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChidXR0b24pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDogXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2h1aCcpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGluZm8uYXBwZW5kQ2hpbGQoZm9ybSk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChtYXApO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoaW5mbyk7ICAgIFxuICAgIGJpbmRGb3JtRXZlbnRzKCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdlbkNvbnRhY3Q7IiwiaW1wb3J0IGhlYWRDaGVmQXNzZXQgZnJvbSAnLi4vYXNzZXRzL2hlYWQtY2hlZi5wbmcnO1xuXG5jb25zdCBnZW5Ib21lID0gZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJyk7XG4gICAgbGV0IGhlcm9UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVyb1RleHQuY2xhc3NMaXN0LmFkZCgnaGVyby10ZXh0Jyk7XG5cbiAgICBsZXQgaGVyb0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgbGV0IGhlcm9JbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG4gICAgaGVyb0hlYWRlci50ZXh0Q29udGVudCA9IFwiT25seSBNdXNocm9vbXM/XCJcbiAgICBoZXJvSW5mby50ZXh0Q29udGVudCA9IFwiVGhhdCdzIHJpZ2h0ISAnT25seSBNdXNocm9vbXMnIGlzIGEgcmVzdGF1cmFudCB0byByZXN0YXVyYW50IGNvbW1pdHRlZCB0byBzZXJ2aW5nIHlvdSBvbmUgdGhpbmcgYW5kIG9uZSB0aGluZyBvbmx5OiBtdXNocm9vbXMhIEZyb20gZmxlc2h5IG1vcmVscywgdG8gdGhlIHRveGljIEFtYW5pdGEgcGhhbGxvaWRlcyAtLSBpZiBpdCBpcyBhIGZ1bmd1cyB5b3UgY2FuIHJlc3QgYXNzdXJlZCBpdCBpcyBhbW9uZyB1cyEgRWFjaCBvcmRlciBpcyBwcmVwYXJlZCB3aXRoIGxvdmUgZXZlcnkgZXZlbmluZyBhdCAzOjQyIEFNLCBhbmQgZGVsaXZlcmVkIGJ5IHRoYXVtYXR1cmdpYyBtZWFucyB0byB5b3VyIGRvb3JzdG9wIHRoZSBzYW1lIGRheSFcIlxuXG4gICAgaGVyb1RleHQuYXBwZW5kQ2hpbGQoaGVyb0hlYWRlcik7XG4gICAgaGVyb1RleHQuYXBwZW5kQ2hpbGQoaGVyb0luZm8pO1xuXG4gICAgbGV0IGhlYWRDaGVmID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVhZENoZWYuY2xhc3NMaXN0LmFkZCgnaGVhZC1jaGVmJyk7XG5cbiAgICBsZXQgaGVhZENoZWZQaG90byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGhlYWRDaGVmUGhvdG8uc3JjID0gaGVhZENoZWZBc3NldDtcbiAgICBcbiAgICBsZXQgaGVhZENoZWZRdW90ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBcbiAgICBsZXQgZW1waGFzaXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdlbScpO1xuICAgIGVtcGhhc2lzLnRleHRDb250ZW50ID0gXCInTXkgYm9keSBwcm9kdWNlcyBjb25zdGFudCBzcG9yZXMgYXMgcHVuaXNobWVudCBmb3IgdGhlIHNpbnMgSSBoYXZlIHdyb3VnaHQuIEVhY2ggaGFydmVzdCBicmluZ3MgbWUgZ3JlYXQgcGFpbiwgYnV0IGFsc28gb25lIHN0ZXAgY2xvc2VyIHRvIGFic29sdXRpb24uIEkgYW0gY29tbWl0dGVkIHRvIGdyZWF0IGZsYXZvciBhdCBhbiBhZmZvcmRhYmxlIHByaWNlLidcIjtcblxuICAgIGxldCBlbmRRdW90ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBlbmRRdW90ZS50ZXh0Q29udGVudCA9IFwiIC0gVGliZXJpdXMgdGhlIEluY29ycmlnYWJsZSwgSGVhZCBDaGVmXCI7XG5cbiAgICBoZWFkQ2hlZlF1b3RlLmFwcGVuZENoaWxkKGVtcGhhc2lzKTtcbiAgICBoZWFkQ2hlZlF1b3RlLmFwcGVuZENoaWxkKGVuZFF1b3RlKTtcbiAgICBoZWFkQ2hlZi5hcHBlbmRDaGlsZChoZWFkQ2hlZlBob3RvKTtcbiAgICBoZWFkQ2hlZi5hcHBlbmRDaGlsZChoZWFkQ2hlZlF1b3RlKVxuXG4gICAgbWFpbi5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgbWFpbi5zdHlsZS5qdXN0aWZ5Q29udGVudCA9IFwic3BhY2UtZXZlbmx5XCI7XG5cbiAgICBtYWluLmFwcGVuZENoaWxkKGhlcm9UZXh0KTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGhlYWRDaGVmKTtcbn1cbmV4cG9ydCBkZWZhdWx0IGdlbkhvbWU7IiwiaW1wb3J0IG0xIGZyb20gJy4uL2Fzc2V0cy9tMS5wbmcnO1xuaW1wb3J0IG0yIGZyb20gJy4uL2Fzc2V0cy9tMi5wbmcnO1xuaW1wb3J0IG0zIGZyb20gJy4uL2Fzc2V0cy9tMy5wbmcnO1xuaW1wb3J0IG00IGZyb20gJy4uL2Fzc2V0cy9tNC5wbmcnO1xuaW1wb3J0IG01IGZyb20gJy4uL2Fzc2V0cy9tNS5wbmcnO1xuaW1wb3J0IG02IGZyb20gJy4uL2Fzc2V0cy9tNi5wbmcnOztcblxuY29uc3QgZ2VuTWVudSA9IGZ1bmN0aW9uKCkge1xuXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJyk7XG5cbiAgICBtYWluLnN0eWxlLndpZHRoID0gJzc1dncnO1xuICAgIG1haW4uc3R5bGUuZGlzcGxheSA9ICdncmlkJztcbiAgICBtYWluLnN0eWxlLmdyaWRUZW1wbGF0ZUNvbHVtbnMgPSAnMWZyIDFmciAxZnInO1xuICAgIG1haW4uc3R5bGUuZ3JpZFRlbXBsYXRlUm93cyA9ICcxZnIgOWZyIDlmciAxZnInO1xuICAgIG1haW4uc3R5bGUuZ3JpZEdhcCA9ICczcHgnO1xuICAgIG1haW4uc3R5bGUuanVzdGlmeUl0ZW1zID0gJ2NlbnRlcic7XG4gICAgbWFpbi5zdHlsZS5tYXJnaW4gPSAnMCBhdXRvJztcblxuXG4gICAgbGV0IG9wdGlvbkFycmF5ID0gW107XG4gICAgbGV0IG1lbnVIZWFkZXJUb3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIG1lbnVIZWFkZXJUb3AudGV4dENvbnRlbnQgPSBcIk9ubHkgTXVzaHJvb21zIGhhcyBhbGwgdGhlIG11c2hyb29tcyB5b3UgY291bGQgaG9wZSBmb3IhIE91ciBvZmZlcmluZ3MgaW5jbHVkZTpcIlxuICAgIGxldCBtZW51SGVhZGVyQm90dG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBtZW51SGVhZGVyQm90dG9tLnRleHRDb250ZW50ID0gXCIuLi4gYW5kIG1vcmUhISFcIlxuXG4gICAgbWFpbi5hcHBlbmRDaGlsZChtZW51SGVhZGVyVG9wKTtcblxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCA2OyBpKyspIHtcbiAgICAgICAgbGV0IHRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGVtcC5jbGFzc0xpc3QuYWRkKCdvcHRpb24nKTtcbiAgICAgICAgb3B0aW9uQXJyYXlbaV0gPSB0ZW1wO1xuICAgIH1cbiAgICBmb3IobGV0IGkgPSAxOyBpIDwgNzsgaSsrKSB7XG4gICAgICAgIGxldCB0ZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGxldCB3aGF0SXRJcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgc3dpdGNoKGkpIHtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICB0ZW1wLnNyYyA9IG0xO1xuICAgICAgICAgICAgICAgIHdoYXRJdElzLnRleHRDb250ZW50ID0gJ1wiVmlydWxlbnQgUmVkY2FwXCInO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIHRlbXAuc3JjID0gbTI7XG4gICAgICAgICAgICAgICAgd2hhdEl0SXMudGV4dENvbnRlbnQgPSAnXCJIYW1idXJnZXItU2hhcGVkIE11c2hyb29tXCInO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAzOiBcbiAgICAgICAgICAgICAgICB0ZW1wLnNyYyA9IG0zO1xuICAgICAgICAgICAgICAgIHdoYXRJdElzLnRleHRDb250ZW50ID0gJ1wiVHJlZWZsZXNoXCInO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgIHRlbXAuc3JjID0gbTQ7XG4gICAgICAgICAgICAgICAgd2hhdEl0SXMudGV4dENvbnRlbnQgPSAnXCJCYWcgb2YgcGFzdGEgSSBnb3QgZnJvbSB0aGUgZnJpZGdlXCInO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgIHRlbXAuc3JjID0gbTU7XG4gICAgICAgICAgICAgICAgd2hhdEl0SXMudGV4dENvbnRlbnQgPSAnXCJDb21tb24gUHVmZmJhbGxcIic7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICAgICAgdGVtcC5zcmMgPSBtNlxuICAgICAgICAgICAgICAgIHdoYXRJdElzLnRleHRDb250ZW50ID0gJ1wiRm91bmQgdGhlc2UgaW4gd2FsbWFydCB0YmhcIic7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHdoYXRJdElzLnRleHRDb250ZW50ID0gJ1wiaG93IGRpZCB1IGdldCBoZXJlXCInO1xuICAgICAgICB9XG4gICAgICAgIG9wdGlvbkFycmF5W2ktMV0uYXBwZW5kQ2hpbGQodGVtcCk7XG4gICAgICAgIG9wdGlvbkFycmF5W2ktMV0uYXBwZW5kQ2hpbGQod2hhdEl0SXMpO1xuICAgICAgICBtYWluLmFwcGVuZENoaWxkKG9wdGlvbkFycmF5W2ktMV0pO1xuICAgIH1cbiAgICBtYWluLmFwcGVuZENoaWxkKG1lbnVIZWFkZXJCb3R0b20pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBnZW5NZW51OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgeyBjcmVhdGVNYWluIH0gZnJvbSBcIi4vZnVuY3Rpb25zL2luaXRcIjtcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5jcmVhdGVNYWluKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
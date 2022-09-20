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
function formValidation(e) {

    const inputs = Array.from(document.querySelectorAll('input'));
    const message = document.querySelector('textarea');
    const main = document.querySelector('.main');
    if(main.firstChild.classList.value == 'map') {
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
        }
    }

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
    
    document.addEventListener('click', formValidation);
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






const loadNew = function(request) {
    const main = document.querySelector('.main');
    main.setAttribute('id', 'moving-out');
    setTimeout(function() {
        main.setAttribute('id', 'waiting');
    }, 900)
    setTimeout(function() {
        ;(0,_dump__WEBPACK_IMPORTED_MODULE_3__["default"])()
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFhLGNBQWMsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLEtBQUssTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssc0JBQXNCLHVCQUF1Qix1QkFBdUIseUJBQXlCLGFBQWEseUJBQXlCLGFBQWEseUJBQXlCLHlCQUF5Qix1QkFBdUIseUJBQXlCLHVCQUF1Qix5QkFBeUIseUJBQXlCLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtB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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN2RXRCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7OztBQ0E4QztBQUN6Qjs7QUFFckIsMkRBQVUsRyIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9mdW5jdGlvbnMvZHVtcC5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvZnVuY3Rpb25zL2Zvcm0tZXZlbnRzLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9mdW5jdGlvbnMvaW5pdC5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvZnVuY3Rpb25zL2xvYWQtbmV3LmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9mdW5jdGlvbnMvbmF2LWV2ZW50cy5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvcGFnZXMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvcGFnZXMvaG9tZS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvcGFnZXMvbWVudS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvYmcyLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL09sZFdpemFyZC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9IaW5kLU1lZGl1bS50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9zaWRlYmFyMi5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9zaWRlYmFyMS5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBmb250LWZhbWlseTogJ0hpbmQnO1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdPbGRXaXphcmQnO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ0hpbmQnO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxufVxcblxcbkBrZXlmcmFtZXMgZmFsbC1kb3duIHtcXG4gICAgMTAlIHtcXG4gICAgICAgIHRvcDogMDtcXG4gICAgfVxcbiAgICAyNSUge1xcbiAgICAgICAgdG9wOiAtODVweDtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICAgIHRvcDogMTAwMHB4O1xcbiAgICB9XFxufVxcblxcbkBrZXlmcmFtZXMgZmFsbC1pbiB7XFxuICAgIDAlIHtcXG4gICAgICAgIHRvcDogLTEwMDBweDtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICAgIHRvcDogMHB4O1xcbiAgICB9XFxufVxcblxcbkBrZXlmcmFtZXMgYm91bmNlIHtcXG4gICAgMCUge1xcbiAgICAgICAgdG9wOiAwJTtcXG4gICAgfVxcbiAgICAyNSUge1xcbiAgICAgICAgdG9wOiAtMTUlO1xcbiAgICB9XFxuICAgIDUwJSB7XFxuICAgICAgICB0b3A6IDAlO1xcbiAgICB9XFxuICAgIDc1JSB7XFxuICAgICAgICB0b3A6IC03LjUlO1xcbiAgICB9XFxuICAgIDg3LjUlIHtcXG4gICAgICAgIHRvcDogMCU7XFxuICAgIH1cXG4gICAgOTMuNzUlIHtcXG4gICAgICAgIHRvcDogLTMuNzUlO1xcbiAgICB9XFxuICAgIDEwMCUge1xcbiAgICAgICAgdG9wOiAwJVxcbiAgICB9XFxufVxcblxcbi5sLXNpZGUge1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDM1JTtcXG4gICAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAyMCU7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0LXg6IG5vLXJlcGVhdDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxufVxcblxcbi5yLXNpZGUge1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDM1JTtcXG4gICAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAyMCU7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0LXg6IG5vLXJlcGVhdDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogLTI4JTtcXG4gICAgdG9wOiAwO1xcbn1cXG5cXG4ubmF2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZm9udC1zaXplOiAydnc7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcGFkZGluZzogMSUgMTAlIDElIDEwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDg1O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1ib3R0b206IGRvdWJsZSB3aGl0ZSAzcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmb250LWZhbWlseTogJ09sZFdpemFyZCc7XFxuXFxufVxcblxcbi5uYXYgaW1nIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IC0xMDBweDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIC4yNXMgZWFzZVxcbn1cXG5cXG4ubmF2IHAge1xcbiAgICAgICAgbWFyZ2luOiAwO1xcbn1cXG5cXG51bCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgd2lkdGg6IDA7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIHRyYW5zaXRpb246IGFsbCAxcyBlYXNlO1xcbiAgICBtYXJnaW4tbGVmdDogLjUlO1xcbn1cXG5cXG5saSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxubGkgc3BhbiB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxubGkgaW1nIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IC0xMDAlO1xcbiAgICBsZWZ0OiAtNTAlO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjI1cyBlYXNlO1xcbiAgICB3aWR0aDogMjUlO1xcbiAgICBoZWlnaHQ6IDY1JTtcXG59XFxuXFxubGkgKyBsaSB7XFxuICAgIHBhZGRpbmctbGVmdDogNiU7XFxufVxcblxcbmxpOmhvdmVyIHNwYW57XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdGV4dC1zaGFkb3c6IDAgMHB4IDRweCB3aGl0ZTtcXG4gICAgYW5pbWF0aW9uOiBib3VuY2UgLjI1cyBlYXNlO1xcbn1cXG5cXG5saTpudGgtY2hpbGQoMSkge1xcbiAgICBtYXJnaW4tbGVmdDogMS4xNXZ3O1xcbn1cXG5cXG4ubWFpbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7IC8qZm9yIGhvbWUgcGFnZSovXFxuICAgIGhlaWdodDogOTB2aDsgLypmb3IgYWxsIHBhZ2VzKi9cXG4gICAgd2lkdGg6IDc1dnc7IC8qZm9yIG1lbnUgcGFnZSovXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IC8qZm9yIGJvdGggcGFnZXMqL1xcbiAgICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTsgLypmb3IgaG9tZSBwYWdlKi9cXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7IC8qZm9yIGNvbnRhY3QgcGFnZSovXFxuICAgIC8qIGRpc3BsYXk6IGdyaWQ7IC8qZm9yIG1lbnUgcGFnZSovXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7IC8qZm9yIG1lbnUgcGFnZSovXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDlmciA5ZnIgMWZyOyAvKmZvciBtZW51IHBhZ2UqL1xcbiAgICBncmlkLWdhcDogM3B4OyAvKmZvciBtZW51IHBhZ2UqL1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7IC8qZm9yIG1lbnUgcGFnZSovXFxuICAgIG1hcmdpbjogMCBhdXRvOyAvKmZvciBtZW51IHBhZ2UqL1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7IC8qIGZvciBjb250YWN0IHBhZ2UgKi9cXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAuNWZyIDJmcjsgLyogZm9yIGNvbnRhY3QgcGFnZSAqL1xcbn1cXG5cXG4uaGVyby10ZXh0IHtcXG4gICAgd2lkdGg6IDQwJTtcXG4gICAgZm9udC1zaXplOiAxLjc1dnc7XFxuICAgIGNvbG9yOiBibGFjaztcXG59XFxuXFxuLmhlcm8tdGV4dCBwIHtcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDJweCk7XFxuICAgIGJvcmRlcjogc29saWQgYmxhY2sgMXB4O1xcbiAgICBwYWRkaW5nOiA1JTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LXNpemU6IDEuMjV2dztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDE0O1xcbn1cXG5cXG4uaGVyby10ZXh0IGgxIHtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uaGVhZC1jaGVmIHtcXG4gICAgd2lkdGg6IDI1JTtcXG5cXG59XFxuXFxuLmhlYWQtY2hlZiBwIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGZvbnQtc2l6ZTogLjl2dztcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDJweCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDAxNDtcXG4gICAgYm9yZGVyOiBzb2xpZCBibGFjayAxcHg7XFxuICAgIHBhZGRpbmc6IDUlO1xcbn1cXG5cXG4uaGVhZC1jaGVmIGVtIHtcXG4gICAgZm9udC1mYW1pbHk6ICdPbGRXaXphcmQnO1xcbn1cXG5cXG4uaGVhZC1jaGVmIGltZyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMyU7XFxufVxcblxcbi5vcHRpb24gaW1nIHtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBoZWlnaHQ6IDMwMHB4O1xcbiAgICBib3JkZXI6IHNvbGlkIHdoaXRlIDFweDtcXG59XFxuXFxuLm9wdGlvbiBzcGFuIHtcXG4gICAgZm9udC1zaXplOiAxdnc7XFxufVxcblxcbi5vcHRpb24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4ubWFpbiA+IGgxIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBncmlkLWNvbHVtbjogMS80O1xcbn1cXG5cXG4ubWVudS1oZWFkZXIge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGdyaWQtY29sdW1uOiAyLzM7XFxufVxcblxcbiNwdXNoZWQge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0b3A6IDA7XFxufVxcblxcbiNsb2FkZWQge1xcbiAgICB3aWR0aDogMTl2dztcXG59XFxuXFxuI21vdmluZy1vdXQge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGFuaW1hdGlvbjogZmFsbC1kb3duIDFzIGVhc2U7XFxufVxcblxcbiN3YWl0aW5nIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IC0xMDAwcHg7XFxufVxcblxcbiNtb3ZpbmctaW4ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGFuaW1hdGlvbjogZmFsbC1pbiAuNXMgZWFzZTtcXG59XFxuXFxuLm1hcCB7XFxuICAgIHdpZHRoOiA0MS4yNSU7XFxuICAgIHBhZGRpbmc6IDF2dztcXG4gICAgYm9yZGVyOiBzb2xpZCBibGFjayAxcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDAxNDtcXG59XFxuXFxuLm1hcCBpbWcge1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiA2MCU7XFxuICAgIGJvcmRlcjogc29saWQgYmxhY2sgMXB4O1xcbn1cXG5cXG4ubWFwIGgyIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uaW5mbyBkaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogNjUlO1xcbn1cXG5cXG4uaW5mbyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDAxNDtcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDJweCk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlcjogc29saWQgYmxhY2sgMXB4O1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAzMCU7XFxuICAgIHBhZGRpbmc6IDUlIDAgNSUgMDtcXG59XFxuXFxuLmluZm8gaW1nIHtcXG4gICAgd2lkdGg6IDEuNXZ3O1xcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbn1cXG5cXG4uaW5mbyBwIHtcXG4gICAgZm9udC1zaXplOiAxLjI1dnc7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgbWFyZ2luLWxlZnQ6IDMlO1xcbn1cXG5cXG5mb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDY1JTtcXG4gICAgZm9udC1zaXplOiAxLjI1dnc7XFxufVxcblxcbmxhYmVsIHtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogNHZoO1xcbiAgICBsZWZ0OiA1cHg7XFxuICAgIHRyYW5zaXRpb246IGFsbCBlYXNlIC4yNXM7XFxuICAgIGZvbnQtc2l6ZTogMS4yNXZ3O1xcbn1cXG5cXG5pbnB1dCB7XFxuICAgIGhlaWdodDogMS43NXZ3O1xcbiAgICBmb250LXNpemU6IDEuMjV2dztcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTk2NzIyNmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgICBmb250LXNpemU6IDEuMjV2dztcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTk2NzIyNmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuI3ZhbGlkIHtcXG4gICAgdG9wOiA1cHg7XFxuICAgIGNvbG9yOiAjMDBjYjAwO1xcbn1cXG5cXG4jaW52YWxpZCB7XFxuICAgIHRvcDogNXB4O1xcbiAgICBjb2xvcjogcmVkO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBtYXJnaW4tdG9wOiAzJTtcXG4gICAgZm9udC1zaXplOiAxLjI1dnc7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsbURBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLDRDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQiw0Q0FBb0M7QUFDeEM7O0FBRUE7SUFDSTtRQUNJLE1BQU07SUFDVjtJQUNBO1FBQ0ksVUFBVTtJQUNkO0lBQ0E7UUFDSSxXQUFXO0lBQ2Y7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksWUFBWTtJQUNoQjtJQUNBO1FBQ0ksUUFBUTtJQUNaO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLE9BQU87SUFDWDtJQUNBO1FBQ0ksU0FBUztJQUNi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dzogaGlkZGVuO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGZvbnQtZmFtaWx5OiAnSGluZCc7XFxuICAgIGJhY2tncm91bmQ6IHVybCgnLi9hc3NldHMvYmcyLmpwZycpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdPbGRXaXphcmQnO1xcbiAgICBzcmM6IHVybCgnLi9hc3NldHMvT2xkV2l6YXJkLnR0ZicpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdIaW5kJztcXG4gICAgc3JjOiB1cmwoJy4vYXNzZXRzL0hpbmQtTWVkaXVtLnR0ZicpO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZhbGwtZG93biB7XFxuICAgIDEwJSB7XFxuICAgICAgICB0b3A6IDA7XFxuICAgIH1cXG4gICAgMjUlIHtcXG4gICAgICAgIHRvcDogLTg1cHg7XFxuICAgIH1cXG4gICAgMTAwJSB7XFxuICAgICAgICB0b3A6IDEwMDBweDtcXG4gICAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZhbGwtaW4ge1xcbiAgICAwJSB7XFxuICAgICAgICB0b3A6IC0xMDAwcHg7XFxuICAgIH1cXG4gICAgMTAwJSB7XFxuICAgICAgICB0b3A6IDBweDtcXG4gICAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGJvdW5jZSB7XFxuICAgIDAlIHtcXG4gICAgICAgIHRvcDogMCU7XFxuICAgIH1cXG4gICAgMjUlIHtcXG4gICAgICAgIHRvcDogLTE1JTtcXG4gICAgfVxcbiAgICA1MCUge1xcbiAgICAgICAgdG9wOiAwJTtcXG4gICAgfVxcbiAgICA3NSUge1xcbiAgICAgICAgdG9wOiAtNy41JTtcXG4gICAgfVxcbiAgICA4Ny41JSB7XFxuICAgICAgICB0b3A6IDAlO1xcbiAgICB9XFxuICAgIDkzLjc1JSB7XFxuICAgICAgICB0b3A6IC0zLjc1JTtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICAgIHRvcDogMCVcXG4gICAgfVxcbn1cXG5cXG4ubC1zaWRlIHtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAzNSU7XFxuICAgIGJhY2tncm91bmQ6IHVybCguL2Fzc2V0cy9zaWRlYmFyMi5wbmcpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDIwJTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQteDogbm8tcmVwZWF0O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG59XFxuXFxuLnItc2lkZSB7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMzUlO1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi9hc3NldHMvc2lkZWJhcjEucG5nKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAyMCU7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0LXg6IG5vLXJlcGVhdDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogLTI4JTtcXG4gICAgdG9wOiAwO1xcbn1cXG5cXG4ubmF2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZm9udC1zaXplOiAydnc7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcGFkZGluZzogMSUgMTAlIDElIDEwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDg1O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1ib3R0b206IGRvdWJsZSB3aGl0ZSAzcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmb250LWZhbWlseTogJ09sZFdpemFyZCc7XFxuXFxufVxcblxcbi5uYXYgaW1nIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IC0xMDBweDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIC4yNXMgZWFzZVxcbn1cXG5cXG4ubmF2IHAge1xcbiAgICAgICAgbWFyZ2luOiAwO1xcbn1cXG5cXG51bCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgd2lkdGg6IDA7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIHRyYW5zaXRpb246IGFsbCAxcyBlYXNlO1xcbiAgICBtYXJnaW4tbGVmdDogLjUlO1xcbn1cXG5cXG5saSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxubGkgc3BhbiB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxubGkgaW1nIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IC0xMDAlO1xcbiAgICBsZWZ0OiAtNTAlO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjI1cyBlYXNlO1xcbiAgICB3aWR0aDogMjUlO1xcbiAgICBoZWlnaHQ6IDY1JTtcXG59XFxuXFxubGkgKyBsaSB7XFxuICAgIHBhZGRpbmctbGVmdDogNiU7XFxufVxcblxcbmxpOmhvdmVyIHNwYW57XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdGV4dC1zaGFkb3c6IDAgMHB4IDRweCB3aGl0ZTtcXG4gICAgYW5pbWF0aW9uOiBib3VuY2UgLjI1cyBlYXNlO1xcbn1cXG5cXG5saTpudGgtY2hpbGQoMSkge1xcbiAgICBtYXJnaW4tbGVmdDogMS4xNXZ3O1xcbn1cXG5cXG4ubWFpbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7IC8qZm9yIGhvbWUgcGFnZSovXFxuICAgIGhlaWdodDogOTB2aDsgLypmb3IgYWxsIHBhZ2VzKi9cXG4gICAgd2lkdGg6IDc1dnc7IC8qZm9yIG1lbnUgcGFnZSovXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IC8qZm9yIGJvdGggcGFnZXMqL1xcbiAgICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTsgLypmb3IgaG9tZSBwYWdlKi9cXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7IC8qZm9yIGNvbnRhY3QgcGFnZSovXFxuICAgIC8qIGRpc3BsYXk6IGdyaWQ7IC8qZm9yIG1lbnUgcGFnZSovXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7IC8qZm9yIG1lbnUgcGFnZSovXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDlmciA5ZnIgMWZyOyAvKmZvciBtZW51IHBhZ2UqL1xcbiAgICBncmlkLWdhcDogM3B4OyAvKmZvciBtZW51IHBhZ2UqL1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7IC8qZm9yIG1lbnUgcGFnZSovXFxuICAgIG1hcmdpbjogMCBhdXRvOyAvKmZvciBtZW51IHBhZ2UqL1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7IC8qIGZvciBjb250YWN0IHBhZ2UgKi9cXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAuNWZyIDJmcjsgLyogZm9yIGNvbnRhY3QgcGFnZSAqL1xcbn1cXG5cXG4uaGVyby10ZXh0IHtcXG4gICAgd2lkdGg6IDQwJTtcXG4gICAgZm9udC1zaXplOiAxLjc1dnc7XFxuICAgIGNvbG9yOiBibGFjaztcXG59XFxuXFxuLmhlcm8tdGV4dCBwIHtcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDJweCk7XFxuICAgIGJvcmRlcjogc29saWQgYmxhY2sgMXB4O1xcbiAgICBwYWRkaW5nOiA1JTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LXNpemU6IDEuMjV2dztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDE0O1xcbn1cXG5cXG4uaGVyby10ZXh0IGgxIHtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uaGVhZC1jaGVmIHtcXG4gICAgd2lkdGg6IDI1JTtcXG5cXG59XFxuXFxuLmhlYWQtY2hlZiBwIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGZvbnQtc2l6ZTogLjl2dztcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDJweCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDAxNDtcXG4gICAgYm9yZGVyOiBzb2xpZCBibGFjayAxcHg7XFxuICAgIHBhZGRpbmc6IDUlO1xcbn1cXG5cXG4uaGVhZC1jaGVmIGVtIHtcXG4gICAgZm9udC1mYW1pbHk6ICdPbGRXaXphcmQnO1xcbn1cXG5cXG4uaGVhZC1jaGVmIGltZyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMyU7XFxufVxcblxcbi5vcHRpb24gaW1nIHtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBoZWlnaHQ6IDMwMHB4O1xcbiAgICBib3JkZXI6IHNvbGlkIHdoaXRlIDFweDtcXG59XFxuXFxuLm9wdGlvbiBzcGFuIHtcXG4gICAgZm9udC1zaXplOiAxdnc7XFxufVxcblxcbi5vcHRpb24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4ubWFpbiA+IGgxIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBncmlkLWNvbHVtbjogMS80O1xcbn1cXG5cXG4ubWVudS1oZWFkZXIge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGdyaWQtY29sdW1uOiAyLzM7XFxufVxcblxcbiNwdXNoZWQge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0b3A6IDA7XFxufVxcblxcbiNsb2FkZWQge1xcbiAgICB3aWR0aDogMTl2dztcXG59XFxuXFxuI21vdmluZy1vdXQge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGFuaW1hdGlvbjogZmFsbC1kb3duIDFzIGVhc2U7XFxufVxcblxcbiN3YWl0aW5nIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IC0xMDAwcHg7XFxufVxcblxcbiNtb3ZpbmctaW4ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGFuaW1hdGlvbjogZmFsbC1pbiAuNXMgZWFzZTtcXG59XFxuXFxuLm1hcCB7XFxuICAgIHdpZHRoOiA0MS4yNSU7XFxuICAgIHBhZGRpbmc6IDF2dztcXG4gICAgYm9yZGVyOiBzb2xpZCBibGFjayAxcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDAxNDtcXG59XFxuXFxuLm1hcCBpbWcge1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiA2MCU7XFxuICAgIGJvcmRlcjogc29saWQgYmxhY2sgMXB4O1xcbn1cXG5cXG4ubWFwIGgyIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uaW5mbyBkaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogNjUlO1xcbn1cXG5cXG4uaW5mbyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDAxNDtcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDJweCk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlcjogc29saWQgYmxhY2sgMXB4O1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAzMCU7XFxuICAgIHBhZGRpbmc6IDUlIDAgNSUgMDtcXG59XFxuXFxuLmluZm8gaW1nIHtcXG4gICAgd2lkdGg6IDEuNXZ3O1xcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbn1cXG5cXG4uaW5mbyBwIHtcXG4gICAgZm9udC1zaXplOiAxLjI1dnc7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgbWFyZ2luLWxlZnQ6IDMlO1xcbn1cXG5cXG5mb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDY1JTtcXG4gICAgZm9udC1zaXplOiAxLjI1dnc7XFxufVxcblxcbmxhYmVsIHtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogNHZoO1xcbiAgICBsZWZ0OiA1cHg7XFxuICAgIHRyYW5zaXRpb246IGFsbCBlYXNlIC4yNXM7XFxuICAgIGZvbnQtc2l6ZTogMS4yNXZ3O1xcbn1cXG5cXG5pbnB1dCB7XFxuICAgIGhlaWdodDogMS43NXZ3O1xcbiAgICBmb250LXNpemU6IDEuMjV2dztcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTk2NzIyNmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgICBmb250LXNpemU6IDEuMjV2dztcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTk2NzIyNmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuI3ZhbGlkIHtcXG4gICAgdG9wOiA1cHg7XFxuICAgIGNvbG9yOiAjMDBjYjAwO1xcbn1cXG5cXG4jaW52YWxpZCB7XFxuICAgIHRvcDogNXB4O1xcbiAgICBjb2xvcjogcmVkO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBtYXJnaW4tdG9wOiAzJTtcXG4gICAgZm9udC1zaXplOiAxLjI1dnc7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBkdW1wTWFpbiA9IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpO1xuICAgIHdoaWxlKG1haW4uaGFzQ2hpbGROb2RlcygpKSB7XG4gICAgICAgIG1haW4ucmVtb3ZlQ2hpbGQobWFpbi5maXJzdENoaWxkKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGR1bXBNYWluOyIsImZ1bmN0aW9uIGZvcm1WYWxpZGF0aW9uKGUpIHtcblxuICAgIGNvbnN0IGlucHV0cyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKSk7XG4gICAgY29uc3QgbWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3RleHRhcmVhJyk7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJyk7XG4gICAgaWYobWFpbi5maXJzdENoaWxkLmNsYXNzTGlzdC52YWx1ZSA9PSAnbWFwJykge1xuICAgICAgICBpZihlLnRhcmdldC50eXBlICE9ICd0ZXh0JyAmJiBlLnRhcmdldC50eXBlICE9ICd0ZXh0YXJlYScpIHtcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBpbnB1dHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZihpbnB1dHNbaV0udmFsdWUgPT0gXCJcIikge1xuICAgICAgICAgICAgICAgICAgICBpbnB1dHNbaV0ubGFiZWxzWzBdLnJlbW92ZUF0dHJpYnV0ZSgnaWQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihtZXNzYWdlLnZhbHVlID09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlLmxhYmVsc1swXS5yZW1vdmVBdHRyaWJ1dGUoJ2lkJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG5jb25zdCBiaW5kRm9ybUV2ZW50cyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgY29uc3QgaW5wdXRzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpKTtcbiAgICBjb25zdCBtZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndGV4dGFyZWEnKTtcblxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBpbnB1dHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaW5wdXRzW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZihpbnB1dHNbaV0uY2hlY2tWYWxpZGl0eSgpKSB7XG4gICAgICAgICAgICAgICAgaW5wdXRzW2ldLmxhYmVsc1swXS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3ZhbGlkJyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYoIWlucHV0c1tpXS5jaGVja1ZhbGlkaXR5KCkgfHwgaW5wdXRzW2ldLnZhbHVlID09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICBpbnB1dHNbaV0ubGFiZWxzWzBdLnNldEF0dHJpYnV0ZSgnaWQnLCAnaW52YWxpZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaW5wdXRzW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZihpbnB1dHNbaV0uY2hlY2tWYWxpZGl0eSgpKSB7XG4gICAgICAgICAgICAgICAgaW5wdXRzW2ldLmxhYmVsc1swXS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3ZhbGlkJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlucHV0c1tpXS5sYWJlbHNbMF0uc2V0QXR0cmlidXRlKCdpZCcsICdpbnZhbGlkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgICBtZXNzYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIG1lc3NhZ2UubGFiZWxzWzBdLnNldEF0dHJpYnV0ZSgnaWQnLCAndmFsaWQnKTtcbiAgICB9KVxuICAgIFxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZm9ybVZhbGlkYXRpb24pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBiaW5kRm9ybUV2ZW50czsiLCJpbXBvcnQgbW92aW5nTXVzaHJvb20gZnJvbSAnLi4vYXNzZXRzL211c2hyb29tLWljb24tYWN0aXZlLmdpZic7XG5pbXBvcnQgZ2VuSG9tZSBmcm9tIFwiLi4vcGFnZXMvaG9tZVwiXG5pbXBvcnQgIGJpbmRFdmVudHMgZnJvbSAnLi9uYXYtZXZlbnRzJztcblxuXG4vLyBDcmVhdGVzIGNvbnRlbnQgdGhhdCB3aWxsIGFsd2F5cyBiZSBvbiB0aGUgcGFnZSwgYW5kIGluaXRpYXRlcyBhbmltYXRpb25zIHRoYXQgYXJlIG9ubHkgZ29pbmcgdG8gZmlyZSBvbmNlLlxuXG5mdW5jdGlvbiBjcmVhdGVNYWluKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250ZW50LnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGVudCcpXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250ZW50KTtcblxuICAgIGNvbnN0IHJpZ2h0U2lkZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHJpZ2h0U2lkZS5jbGFzc0xpc3QuYWRkKCdyLXNpZGUnKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHJpZ2h0U2lkZSk7XG5cbiAgICBjb25zdCBsZWZ0U2lkZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxlZnRTaWRlLmNsYXNzTGlzdC5hZGQoJ2wtc2lkZScpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobGVmdFNpZGUpXG5cbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuYXYuY2xhc3NMaXN0LmFkZCgnbmF2Jyk7XG5cbiAgICBjb25zdCBuYXZTaHJvb21SaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIG5hdlNocm9vbVJpZ2h0LnNyYyA9IG1vdmluZ011c2hyb29tO1xuXG4gICAgY29uc3QgbmF2U2hyb29tTGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIG5hdlNocm9vbUxlZnQuc3JjID0gbW92aW5nTXVzaHJvb207XG5cbiAgICBjb25zdCB1bm9yZGVyZWRMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBcbiAgICBjb25zdCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBob21lQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGhvbWVCdXR0b24udGV4dENvbnRlbnQgPSAnaG9tZSdcbiAgICBob21lLnNldEF0dHJpYnV0ZSgnaWQnLCdob21lJyk7XG4gICAgaG9tZS5hcHBlbmRDaGlsZChob21lQnV0dG9uKTtcblxuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgbWVudUJ1dHRvbi50ZXh0Q29udGVudCA9ICdtZW51JztcbiAgICBtZW51LnNldEF0dHJpYnV0ZSgnaWQnLCdtZW51Jyk7XG4gICAgbWVudS5hcHBlbmRDaGlsZChtZW51QnV0dG9uKTtcblxuICAgIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IGNvbnRhY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgY29udGFjdEJ1dHRvbi50ZXh0Q29udGVudCA9ICdjb250YWN0JztcbiAgICBjb250YWN0LnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGFjdCcpO1xuICAgIGNvbnRhY3QuYXBwZW5kQ2hpbGQoY29udGFjdEJ1dHRvbik7XG5cbiAgICB1bm9yZGVyZWRMaXN0LmFwcGVuZENoaWxkKGhvbWUpO1xuICAgIHVub3JkZXJlZExpc3QuYXBwZW5kQ2hpbGQobWVudSk7XG4gICAgdW5vcmRlcmVkTGlzdC5hcHBlbmRDaGlsZChjb250YWN0KTtcblxuICAgIG5hdi5hcHBlbmRDaGlsZChuYXZTaHJvb21MZWZ0KTtcbiAgICBuYXYuYXBwZW5kQ2hpbGQodW5vcmRlcmVkTGlzdCk7XG4gICAgbmF2LmFwcGVuZENoaWxkKG5hdlNocm9vbVJpZ2h0KTtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobmF2KTtcblxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoJ21haW4nKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1haW4pO1xuXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHsgZm9yKGxldCBpID0gMDsgaSA8IDI7IGkrKykge1xuICAgICAgIG5hdlNocm9vbVJpZ2h0LnNldEF0dHJpYnV0ZSgnaWQnLCAncHVzaGVkJyk7XG4gICAgICAgbmF2U2hyb29tTGVmdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3B1c2hlZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCAgNTAwKVxuICAgIFxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7dW5vcmRlcmVkTGlzdC5zZXRBdHRyaWJ1dGUoJ2lkJywnbG9hZGVkJyl9LCAxMDAwKTtcbiAgICBiaW5kRXZlbnRzKCk7XG4gICAgZ2VuSG9tZSgpO1xufSBcblxuZXhwb3J0IHsgY3JlYXRlTWFpbiB9XG4iLCJpbXBvcnQgZ2VuQ29udGFjdCBmcm9tICcuLi9wYWdlcy9jb250YWN0JztcbmltcG9ydCBnZW5Ib21lIGZyb20gJy4uL3BhZ2VzL2hvbWUnO1xuaW1wb3J0IGdlbk1lbnUgZnJvbSAnLi4vcGFnZXMvbWVudSc7XG5pbXBvcnQgZHVtcE1haW4gZnJvbSAnLi9kdW1wJztcblxuXG5jb25zdCBsb2FkTmV3ID0gZnVuY3Rpb24ocmVxdWVzdCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpO1xuICAgIG1haW4uc2V0QXR0cmlidXRlKCdpZCcsICdtb3Zpbmctb3V0Jyk7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgbWFpbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3dhaXRpbmcnKTtcbiAgICB9LCA5MDApXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgZHVtcE1haW4oKVxuICAgICAgICBpZihyZXF1ZXN0ID09ICdob21lJykge1xuICAgICAgICAgICAgZ2VuSG9tZSgpO1xuICAgICAgICB9IGVsc2UgaWYocmVxdWVzdCA9PSAnbWVudScpIHtcbiAgICAgICAgICAgIGdlbk1lbnUoKTtcbiAgICAgICAgfSBlbHNlIGlmKHJlcXVlc3QgPT0gJ2NvbnRhY3QnKSB7XG4gICAgICAgICAgICBnZW5Db250YWN0KCk7XG4gICAgICAgIH1cbiAgICAgICAgbWFpbi5zZXRBdHRyaWJ1dGUoJ2lkJywnbW92aW5nLWluJyk7XG4gICAgfSwgMTEwMCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWROZXc7IiwiaW1wb3J0IGxvYWROZXcgZnJvbSAnLi9sb2FkLW5ldyc7XG5pbXBvcnQgZHJvcCBmcm9tICcuLi9hc3NldHMvZHJvcC53YXYnO1xuXG5jb25zdCBiaW5kRXZlbnRzID0gZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgZHJvcFNvdW5kID0gbmV3IEF1ZGlvKGRyb3ApO1xuICAgIGRyb3BTb3VuZC52b2x1bWUgPSAwLjA1O1xuICAgIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaG9tZScpO1xuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWVudScpO1xuICAgIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGFjdCcpO1xuICAgIGhvbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgbG9hZE5ldygnaG9tZScpO1xuICAgIH0pXG4gICAgbWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICBsb2FkTmV3KCdtZW51Jyk7XG4gICAgfSlcbiAgICBjb250YWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGxvYWROZXcoJ2NvbnRhY3QnKTtcbiAgICB9KVxuICAgIGhvbWUuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIGZ1bmN0aW9uKCkge1xuICAgICAgICBkcm9wU291bmQucGxheSgpO1xuICAgIH0pXG4gICAgbWVudS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGRyb3BTb3VuZC5wbGF5KCk7XG4gICAgfSlcbiAgICBjb250YWN0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBmdW5jdGlvbigpIHtcbiAgICAgICAgZHJvcFNvdW5kLnBsYXkoKTtcbiAgICB9KVxuXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgYmluZEV2ZW50czsiLCJpbXBvcnQgcGhvbmUgZnJvbSAnLi4vYXNzZXRzL3Bob25lLnN2Zyc7XG5pbXBvcnQgY2xvY2sgZnJvbSAnLi4vYXNzZXRzL2Nsb2NrLnN2Zyc7XG5pbXBvcnQgbG9jIGZyb20gJy4uL2Fzc2V0cy9sb2MucG5nJztcbmltcG9ydCBiaW5kRm9ybUV2ZW50cyBmcm9tICcuLi9mdW5jdGlvbnMvZm9ybS1ldmVudHMnO1xuXG5jb25zdCBnZW5Db250YWN0ID0gZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJyk7XG4gICAgbWFpbi5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgIG1haW4uc3R5bGUuanVzdGlmeUNvbnRlbnQgPSAnc3BhY2UtYXJvdW5kJztcblxuICAgIGNvbnN0IG1hcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1hcC5jbGFzc0xpc3QuYWRkKCdtYXAnKTtcbiAgICBjb25zdCBpbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW5mby5jbGFzc0xpc3QuYWRkKCdpbmZvJyk7XG5cbiAgICBjb25zdCBtYXBJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBtYXBJbWcuc3JjID0gbG9jO1xuICAgIGNvbnN0IG1hcFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIG1hcFRleHQudGV4dENvbnRlbnQgPSAnQ29tZSB2aXNpdCB1cyBhdCBvdXIgc3RvcmVmcm9udCBsb2NhdGlvbiEnXG4gICAgbWFwLmFwcGVuZENoaWxkKG1hcEltZyk7XG4gICAgbWFwLmFwcGVuZENoaWxkKG1hcFRleHQpO1xuXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IDI7IGkrKykge1xuICAgICAgICBjb25zdCB0ZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IHRlbXBJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgY29uc3QgdGVtcFAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGlmKGkgPT0gMCkge1xuICAgICAgICAgICAgdGVtcEltZy5zcmMgPSBjbG9jaztcbiAgICAgICAgICAgIHRlbXBQLnRleHRDb250ZW50ID0gJzNBTSAtIDJBTSc7XG4gICAgICAgICAgICB0ZW1wLmFwcGVuZENoaWxkKHRlbXBJbWcpO1xuICAgICAgICAgICAgdGVtcC5hcHBlbmRDaGlsZCh0ZW1wUCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0ZW1wSW1nLnNyYyA9IHBob25lO1xuICAgICAgICAgICAgdGVtcFAudGV4dENvbnRlbnQgPSAnMTExLTExMS0xMTExJztcbiAgICAgICAgICAgIHRlbXAuYXBwZW5kQ2hpbGQodGVtcEltZyk7XG4gICAgICAgICAgICB0ZW1wLmFwcGVuZENoaWxkKHRlbXBQKTtcbiAgICAgICAgfVxuICAgICAgICBpbmZvLmFwcGVuZENoaWxkKHRlbXApO1xuICAgIH1cblxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgICAgICBjb25zdCB0ZW1wSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBjb25zdCB0ZW1wTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuXG4gICAgICAgIHN3aXRjaChpKSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgdGVtcElucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgICAgICAgICAgICAgdGVtcElucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAnbmFtZScpO1xuICAgICAgICAgICAgICAgIHRlbXBJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnbmFtZScpO1xuICAgICAgICAgICAgICAgIHRlbXBJbnB1dC5zZXRBdHRyaWJ1dGUoJ21pbmxlbmd0aCcsICczJyk7XG4gICAgICAgICAgICAgICAgdGVtcElucHV0LnJlcXVpcmVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgIHRlbXBMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICduYW1lJyk7XG4gICAgICAgICAgICAgICAgdGVtcExhYmVsLnRleHRDb250ZW50ID0gXCJOYW1lXCI7XG4gICAgICAgICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZCh0ZW1wTGFiZWwpO1xuICAgICAgICAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQodGVtcElucHV0KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMTogXG4gICAgICAgICAgICAgICAgdGVtcElucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgICAgICAgICAgICAgdGVtcElucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAnZW1haWwnKTtcbiAgICAgICAgICAgICAgICB0ZW1wSW5wdXQuc2V0QXR0cmlidXRlKCdwYXR0ZXJuJywgJ15bXFxcXHctXFxcXC5dK0AoW1xcdy1dK1xcXFwuKStbXFxcXHctXXsyLDR9JCcpO1xuICAgICAgICAgICAgICAgIHRlbXBJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnZW1haWwnKTtcbiAgICAgICAgICAgICAgICB0ZW1wSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgdGVtcExhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2VtYWlsJyk7XG4gICAgICAgICAgICAgICAgdGVtcExhYmVsLnRleHRDb250ZW50ID0gXCJFbWFpbFwiO1xuICAgICAgICAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQodGVtcExhYmVsKTtcbiAgICAgICAgICAgICAgICBmb3JtLmFwcGVuZENoaWxkKHRlbXBJbnB1dCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgY29uc3QgdGVtcFRleHRhcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICAgICAgICAgICAgICB0ZW1wVGV4dGFyZWEuc2V0QXR0cmlidXRlKCdpZCcsICdtZXNzYWdlJyk7XG4gICAgICAgICAgICAgICAgdGVtcFRleHRhcmVhLnNldEF0dHJpYnV0ZSgnbmFtZScsICdtZXNzYWdlJylcblxuICAgICAgICAgICAgICAgIHRlbXBMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdtZXNzYWdlJyk7XG4gICAgICAgICAgICAgICAgdGVtcExhYmVsLnRleHRDb250ZW50ID0gXCJTYXkgc29tZXRoaW5nIG5pY2UgOilcIjtcbiAgICAgICAgICAgICAgICBmb3JtLmFwcGVuZENoaWxkKHRlbXBMYWJlbCk7XG4gICAgICAgICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZCh0ZW1wVGV4dGFyZWEpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAzOiBcbiAgICAgICAgICAgICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgICAgICBidXR0b24udGV4dENvbnRlbnQgPSAnc3VibWl0JztcbiAgICAgICAgICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OiBcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnaHVoJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaW5mby5hcHBlbmRDaGlsZChmb3JtKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKG1hcCk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChpbmZvKTsgICAgXG4gICAgYmluZEZvcm1FdmVudHMoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2VuQ29udGFjdDsiLCJpbXBvcnQgaGVhZENoZWZBc3NldCBmcm9tICcuLi9hc3NldHMvaGVhZC1jaGVmLnBuZyc7XG5cbmNvbnN0IGdlbkhvbWUgPSBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKTtcbiAgICBsZXQgaGVyb1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZXJvVGV4dC5jbGFzc0xpc3QuYWRkKCdoZXJvLXRleHQnKTtcblxuICAgIGxldCBoZXJvSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBsZXQgaGVyb0luZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cbiAgICBoZXJvSGVhZGVyLnRleHRDb250ZW50ID0gXCJPbmx5IE11c2hyb29tcz9cIlxuICAgIGhlcm9JbmZvLnRleHRDb250ZW50ID0gXCJUaGF0J3MgcmlnaHQhICdPbmx5IE11c2hyb29tcycgaXMgYSByZXN0YXVyYW50IHRvIHJlc3RhdXJhbnQgY29tbWl0dGVkIHRvIHNlcnZpbmcgeW91IG9uZSB0aGluZyBhbmQgb25lIHRoaW5nIG9ubHk6IG11c2hyb29tcyEgRnJvbSBmbGVzaHkgbW9yZWxzLCB0byB0aGUgdG94aWMgQW1hbml0YSBwaGFsbG9pZGVzIC0tIGlmIGl0IGlzIGEgZnVuZ3VzIHlvdSBjYW4gcmVzdCBhc3N1cmVkIGl0IGlzIGFtb25nIHVzISBFYWNoIG9yZGVyIGlzIHByZXBhcmVkIHdpdGggbG92ZSBldmVyeSBldmVuaW5nIGF0IDM6NDIgQU0sIGFuZCBkZWxpdmVyZWQgYnkgdGhhdW1hdHVyZ2ljIG1lYW5zIHRvIHlvdXIgZG9vcnN0b3AgdGhlIHNhbWUgZGF5IVwiXG5cbiAgICBoZXJvVGV4dC5hcHBlbmRDaGlsZChoZXJvSGVhZGVyKTtcbiAgICBoZXJvVGV4dC5hcHBlbmRDaGlsZChoZXJvSW5mbyk7XG5cbiAgICBsZXQgaGVhZENoZWYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZWFkQ2hlZi5jbGFzc0xpc3QuYWRkKCdoZWFkLWNoZWYnKTtcblxuICAgIGxldCBoZWFkQ2hlZlBob3RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaGVhZENoZWZQaG90by5zcmMgPSBoZWFkQ2hlZkFzc2V0O1xuICAgIFxuICAgIGxldCBoZWFkQ2hlZlF1b3RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIFxuICAgIGxldCBlbXBoYXNpcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2VtJyk7XG4gICAgZW1waGFzaXMudGV4dENvbnRlbnQgPSBcIidNeSBib2R5IHByb2R1Y2VzIGNvbnN0YW50IHNwb3JlcyBhcyBwdW5pc2htZW50IGZvciB0aGUgc2lucyBJIGhhdmUgd3JvdWdodC4gRWFjaCBoYXJ2ZXN0IGJyaW5ncyBtZSBncmVhdCBwYWluLCBidXQgYWxzbyBvbmUgc3RlcCBjbG9zZXIgdG8gYWJzb2x1dGlvbi4gSSBhbSBjb21taXR0ZWQgdG8gZ3JlYXQgZmxhdm9yIGF0IGFuIGFmZm9yZGFibGUgcHJpY2UuJ1wiO1xuXG4gICAgbGV0IGVuZFF1b3RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGVuZFF1b3RlLnRleHRDb250ZW50ID0gXCIgLSBUaWJlcml1cyB0aGUgSW5jb3JyaWdhYmxlLCBIZWFkIENoZWZcIjtcblxuICAgIGhlYWRDaGVmUXVvdGUuYXBwZW5kQ2hpbGQoZW1waGFzaXMpO1xuICAgIGhlYWRDaGVmUXVvdGUuYXBwZW5kQ2hpbGQoZW5kUXVvdGUpO1xuICAgIGhlYWRDaGVmLmFwcGVuZENoaWxkKGhlYWRDaGVmUGhvdG8pO1xuICAgIGhlYWRDaGVmLmFwcGVuZENoaWxkKGhlYWRDaGVmUXVvdGUpXG5cbiAgICBtYWluLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICBtYWluLnN0eWxlLmp1c3RpZnlDb250ZW50ID0gXCJzcGFjZS1ldmVubHlcIjtcblxuICAgIG1haW4uYXBwZW5kQ2hpbGQoaGVyb1RleHQpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoaGVhZENoZWYpO1xufVxuZXhwb3J0IGRlZmF1bHQgZ2VuSG9tZTsiLCJpbXBvcnQgbTEgZnJvbSAnLi4vYXNzZXRzL20xLnBuZyc7XG5pbXBvcnQgbTIgZnJvbSAnLi4vYXNzZXRzL20yLnBuZyc7XG5pbXBvcnQgbTMgZnJvbSAnLi4vYXNzZXRzL20zLnBuZyc7XG5pbXBvcnQgbTQgZnJvbSAnLi4vYXNzZXRzL200LnBuZyc7XG5pbXBvcnQgbTUgZnJvbSAnLi4vYXNzZXRzL201LnBuZyc7XG5pbXBvcnQgbTYgZnJvbSAnLi4vYXNzZXRzL202LnBuZyc7O1xuXG5jb25zdCBnZW5NZW51ID0gZnVuY3Rpb24oKSB7XG5cbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKTtcblxuICAgIG1haW4uc3R5bGUud2lkdGggPSAnNzV2dyc7XG4gICAgbWFpbi5zdHlsZS5kaXNwbGF5ID0gJ2dyaWQnO1xuICAgIG1haW4uc3R5bGUuZ3JpZFRlbXBsYXRlQ29sdW1ucyA9ICcxZnIgMWZyIDFmcic7XG4gICAgbWFpbi5zdHlsZS5ncmlkVGVtcGxhdGVSb3dzID0gJzFmciA5ZnIgOWZyIDFmcic7XG4gICAgbWFpbi5zdHlsZS5ncmlkR2FwID0gJzNweCc7XG4gICAgbWFpbi5zdHlsZS5qdXN0aWZ5SXRlbXMgPSAnY2VudGVyJztcbiAgICBtYWluLnN0eWxlLm1hcmdpbiA9ICcwIGF1dG8nO1xuXG5cbiAgICBsZXQgb3B0aW9uQXJyYXkgPSBbXTtcbiAgICBsZXQgbWVudUhlYWRlclRvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgbWVudUhlYWRlclRvcC50ZXh0Q29udGVudCA9IFwiT25seSBNdXNocm9vbXMgaGFzIGFsbCB0aGUgbXVzaHJvb21zIHlvdSBjb3VsZCBob3BlIGZvciEgT3VyIG9mZmVyaW5ncyBpbmNsdWRlOlwiXG4gICAgbGV0IG1lbnVIZWFkZXJCb3R0b20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIG1lbnVIZWFkZXJCb3R0b20udGV4dENvbnRlbnQgPSBcIi4uLiBhbmQgbW9yZSEhIVwiXG5cbiAgICBtYWluLmFwcGVuZENoaWxkKG1lbnVIZWFkZXJUb3ApO1xuXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IDY7IGkrKykge1xuICAgICAgICBsZXQgdGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0ZW1wLmNsYXNzTGlzdC5hZGQoJ29wdGlvbicpO1xuICAgICAgICBvcHRpb25BcnJheVtpXSA9IHRlbXA7XG4gICAgfVxuICAgIGZvcihsZXQgaSA9IDE7IGkgPCA3OyBpKyspIHtcbiAgICAgICAgbGV0IHRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgbGV0IHdoYXRJdElzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBzd2l0Y2goaSkge1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIHRlbXAuc3JjID0gbTE7XG4gICAgICAgICAgICAgICAgd2hhdEl0SXMudGV4dENvbnRlbnQgPSAnXCJWaXJ1bGVudCBSZWRjYXBcIic7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgdGVtcC5zcmMgPSBtMjtcbiAgICAgICAgICAgICAgICB3aGF0SXRJcy50ZXh0Q29udGVudCA9ICdcIkhhbWJ1cmdlci1TaGFwZWQgTXVzaHJvb21cIic7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDM6IFxuICAgICAgICAgICAgICAgIHRlbXAuc3JjID0gbTM7XG4gICAgICAgICAgICAgICAgd2hhdEl0SXMudGV4dENvbnRlbnQgPSAnXCJUcmVlZmxlc2hcIic7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgdGVtcC5zcmMgPSBtNDtcbiAgICAgICAgICAgICAgICB3aGF0SXRJcy50ZXh0Q29udGVudCA9ICdcIkJhZyBvZiBwYXN0YSBJIGdvdCBmcm9tIHRoZSBmcmlkZ2VcIic7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgdGVtcC5zcmMgPSBtNTtcbiAgICAgICAgICAgICAgICB3aGF0SXRJcy50ZXh0Q29udGVudCA9ICdcIkNvbW1vbiBQdWZmYmFsbFwiJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgICB0ZW1wLnNyYyA9IG02XG4gICAgICAgICAgICAgICAgd2hhdEl0SXMudGV4dENvbnRlbnQgPSAnXCJGb3VuZCB0aGVzZSBpbiB3YWxtYXJ0IHRiaFwiJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgd2hhdEl0SXMudGV4dENvbnRlbnQgPSAnXCJob3cgZGlkIHUgZ2V0IGhlcmVcIic7XG4gICAgICAgIH1cbiAgICAgICAgb3B0aW9uQXJyYXlbaS0xXS5hcHBlbmRDaGlsZCh0ZW1wKTtcbiAgICAgICAgb3B0aW9uQXJyYXlbaS0xXS5hcHBlbmRDaGlsZCh3aGF0SXRJcyk7XG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQob3B0aW9uQXJyYXlbaS0xXSk7XG4gICAgfVxuICAgIG1haW4uYXBwZW5kQ2hpbGQobWVudUhlYWRlckJvdHRvbSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdlbk1lbnU7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IGNyZWF0ZU1haW4gfSBmcm9tIFwiLi9mdW5jdGlvbnMvaW5pdFwiO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbmNyZWF0ZU1haW4oKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
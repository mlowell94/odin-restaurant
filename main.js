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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! assets/bg2.jpg */ "./src/assets/bg2.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! assets/OldWizard.ttf */ "./src/assets/OldWizard.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! assets/Hind-Medium.ttf */ "./src/assets/Hind-Medium.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! assets/sidebar2.png */ "./src/assets/sidebar2.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! assets/sidebar1.png */ "./src/assets/sidebar1.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    margin: 0;\n    overflow: hidden;\n    color: black;\n    font-family: 'Hind';\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-size: cover;\n    background-position-x: center;\n}\n\n@font-face {\n    font-family: 'OldWizard';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\n@font-face {\n    font-family: 'Hind';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n}\n\n.l-side {\n    pointer-events: none;\n    height: 105vh;\n    width: 10%;\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n    background-size: 100%;\n    position: absolute;\n    top: 0;\n}\n\n.r-side {\n    pointer-events: none;\n    height: 105vh;\n    width: 10%;\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n    background-size: 100%;\n    position: absolute;\n    right: 0%;\n    top: 0;\n}\n\n\n.nav {\n    display: flex;\n    font-size: 2vw;\n    justify-content: space-between;\n    padding: 1% 10% 1% 10%;\n    background-color: #000000bf;;\n    color: white;\n    border-bottom: double white 3px;\n    justify-content: center;\n    font-family: 'OldWizard';\n\n}\n\n.nav img {\n    opacity: 0;\n    position: relative;\n    top: -100px;\n    transition: all .25s ease\n}\n\n.nav p {\n        margin: 0;\n}\n\nul {\n    display: flex;\n    list-style: none;\n    margin: 0;\n    width: 0;\n    overflow: hidden;\n    padding: 0;\n    transition: all 1s ease;\n    margin-left: .5%;\n    align-items: center;\n}\n\nli:nth-child(1) {\n    margin-left: 1.15vw;\n}\n\nli {\n    display: flex;\n    position: relative;\n}\n\nli span {\n    position: relative;\n}\n\n#loaded {\n    width: 19vw;\n}\n\n#pushed {\n    opacity: 1;\n    top: 0;\n}\n\nli + li {\n    padding-left: 6%;\n}\n\nli img {\n    position: relative;\n    top: -100%;\n    left: -50%;\n    opacity: 0;\n    transition: all .25s ease;\n    width: 25%;\n    height: 65%;\n}\n\nli:hover {\n    cursor: pointer;\n    text-shadow: 0 0px 4px white;\n}\n\n#active {\n    animation: bounce .25s;\n}\n\n.main {\n    display: flex; /*for home page*/\n    height: 90vh; /*for all pages*/\n    width: 75vw; /*for menu page*/\n    align-items: center; /*for both pages*/\n    /* justify-content: space-evenly; /*for home page*/\n    justify-content: space-around; /*for contact page*/\n    /* display: grid; /*for menu page*/\n    grid-template-columns: 1fr 1fr 1fr; /*for menu page*/\n    grid-template-rows: 1fr 9fr 9fr 1fr; /*for menu page*/\n    grid-gap: 3px; /*for menu page*/\n    justify-items: center; /*for menu page*/\n    margin: 0 auto; /*for menu page*/\n    grid-template-columns: 1fr 1fr; /* for contact page */\n    grid-template-rows: .5fr 2fr; /* for contact page */\n}\n\n.option img {\n    width: 300px;\n    height: 300px;\n    border: solid white 1px;\n}\n\n.option span {\n    font-size: 1vw;\n}\n\n.option {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-around;\n    height: 100%;\n}\n\n.main > h1 {\n    margin: 0;\n    grid-column: 1/4;\n}\n\n.menu-header {\n    text-align: center;\n    grid-column: 2/3;\n}\n\n.hero-text {\n    width: 40%;\n    font-size: 1.75vw;\n    color: black;\n}\n\n.hero-text p {\n    backdrop-filter: blur(2px);\n    border: solid black 1px;\n    padding: 5%;\n    margin: 0;\n    font-size: 1.25vw;\n    background-color: #00000014;\n}\n\n.hero-text h1 {\n    margin: 0;\n}\n\n.head-chef {\n    width: 25%;\n\n}\n\n.head-chef p {\n    text-align: center;\n    margin: 0;\n    font-size: .9vw;\n    backdrop-filter: blur(2px);\n    background-color: #00000014;\n    border: solid black 1px;\n    padding: 5%;\n}\n\n.head-chef em {\n    font-family: 'OldWizard';\n}\n\n.head-chef img {\n    width: 100%;\n    margin: 0 auto;\n    display: block;\n    border-radius: 6px;\n    margin-bottom: 3%;\n}\n\n.map {\n    width: 41.25%;\n    padding: 1vw;\n    border: solid black 1px;\n    background-color: #00000014;\n}\n\n.map img {\n    margin: 0 auto;\n    display: block;\n    width: 60%;\n    border: solid black 1px;\n}\n\n.map h2 {\n    text-align: center;\n}\n\n.info div {\n    display: flex;\n    width: 65%;\n}\n\n.info {\n    background-color: #00000014;\n    backdrop-filter: blur(2px);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    border: solid black 1px;\n    align-self: center;\n    width: 30%;\n    padding: 5% 0 5% 0;\n}\n\n.info img {\n    width: 1.5vw;\n    height: fit-content;\n}\n\n.info p {\n    font-size: 1.25vw;\n    margin: 0;\n    margin-left: 3%;\n}\n\nform {\n    display: flex;\n    flex-direction: column;\n    width: 65%;\n    font-size: 1.25vw;\n}\n\nlabel {\n    color: black;\n    position: relative;\n    top: 4vh;\n    left: 5px;\n    transition: all ease .25s;\n    font-size: 1.25vw;\n}\n\ninput {\n    height: 1.75vw;\n    font-size: 1.25vw;\n    border: none;\n    background-color: #9967226e;\n    border-radius: 5px;\n}\n\ntextarea {\n    font-size: 1.25vw;\n    border: none;\n    background-color: #9967226e;\n    border-radius: 5px;\n}\n\n#valid {\n    top: 5px;\n    color: lightgreen;\n}\n\n#invalid {\n    top: 5px;\n    color: red;\n}\n\nbutton {\n    margin-top: 3%;\n    font-size: 1.25vw;\n}\n\n#moving-out {\n    position: relative;\n    animation: fall-down 1s ease;\n}\n\n#waiting {\n    position: relative;\n    top: -1000px;\n}\n\n#moving-in {\n    position: relative;\n    animation: fall-in .5s ease;\n}\n\n\n@keyframes bounce {\n    0% {\n        top: -15%;\n    }\n    50% {\n        top: 0%;\n    }\n    75% {\n        top: -7.5%;\n    }\n    87.5% {\n        top: 0%;\n    }\n    93.75% {\n        top: -3.75%;\n    }\n    100% {\n        top: 0%\n    }\n}\n\n@keyframes fall-down {\n    10% {\n        top: 0;\n    }\n    25% {\n        top: -85px;\n    }\n    100% {\n        top: 1000px;\n    }\n}\n\n@keyframes fall-in {\n    0% {\n        top: -1000px;\n    }\n    100% {\n        top: 0px;\n    }\n}\n\n@media only screen and (max-width: 1239px) {\n\n    body {\n        overflow: auto;\n        background-size: 500px;\n    }\n\n    .l-side {\n        position: fixed;\n        z-index: 3;\n    }\n\n    .r-side { \n        position: fixed;\n        z-index: 3;\n    }\n\n    .main {\n        flex-direction: column;\n        height: auto;\n        z-index: 1;\n        position: relative;\n    }\n\n    .nav {\n        font-size: 7vw;\n        justify-content: center;\n        position: sticky;\n        top: 0;\n        z-index: 2;\n    }\n\n    .nav img {\n        width: 10%;\n    }\n    \n    ul {\n        align-items: center;\n        margin-left: 3%\n    }\n    \n    .hero-text {\n        width: auto;\n    }\n\n    .hero-text h1 {\n        font-size: 8vw;\n        text-align: center;\n    }\n\n    .hero-text p {\n        font-size: 4vw;\n    }\n\n    .head-chef {\n        width: auto;\n        margin-top: 5%;\n    }\n\n    .head-chef p {\n        font-size: 5vw;\n        backdrop-filter: none;\n        background-color: transparent;\n        border: none;\n    }\n\n    .main > h1 {\n        margin: 0;\n        grid-column: 1/4;\n        font-size: 5vw;\n        text-align: center;\n    }\n\n    .option img {\n        width: 100%;\n        height: auto;\n    }\n\n    .option span {\n        font-size: 5vw;\n        text-align: center;\n    }\n\n    .map {\n        width: 100%;\n        padding: 1vw;\n        border: none;\n        background-color: transparent;\n        margin-top: 5%;\n    }\n\n    .map img {\n        width: 100%;\n    }\n\n    .map h2 {\n        margin: 0;\n    }\n\n    .info {\n        width: 100%;\n        margin-bottom: 5%;\n    }\n\n    .info div {\n        width: 50%;\n    }\n\n    .info img {\n        width: auto;\n    }\n\n    .info p {\n        font-size: 5vw;\n        margin: 0;\n        margin-left: 3%;\n    }\n\n    .form {\n        width: 85%;\n    }\n\n    label {\n        color: black;\n        position: relative;\n        top: 7.5vw;\n        left: 5px;\n        transition: all ease .25s;\n        font-size: 5vw;\n    }\n\n    input {\n        height: 6.75vw;\n        font-size: 5vw;\n        border: none;\n        background-color: #9967226e;\n        border-radius: 5px;\n    }\n\n    textarea {\n        font-size: 5vw;\n    }\n\n    button {\n        margin-top: 3%;\n        font-size: 5vw;\n    }\n\n    #loaded {\n        width: 61vw;\n    }\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["body {\n    margin: 0;\n    overflow: hidden;\n    color: black;\n    font-family: 'Hind';\n    background: url(assets/bg2.jpg);\n    background-size: cover;\n    background-position-x: center;\n}\n\n@font-face {\n    font-family: 'OldWizard';\n    src: url('assets/OldWizard.ttf');\n}\n\n@font-face {\n    font-family: 'Hind';\n    src: url('assets/Hind-Medium.ttf');\n}\n\n.l-side {\n    pointer-events: none;\n    height: 105vh;\n    width: 10%;\n    background: url(assets/sidebar2.png);\n    background-size: 100%;\n    position: absolute;\n    top: 0;\n}\n\n.r-side {\n    pointer-events: none;\n    height: 105vh;\n    width: 10%;\n    background: url(assets/sidebar1.png);\n    background-size: 100%;\n    position: absolute;\n    right: 0%;\n    top: 0;\n}\n\n\n.nav {\n    display: flex;\n    font-size: 2vw;\n    justify-content: space-between;\n    padding: 1% 10% 1% 10%;\n    background-color: #000000bf;;\n    color: white;\n    border-bottom: double white 3px;\n    justify-content: center;\n    font-family: 'OldWizard';\n\n}\n\n.nav img {\n    opacity: 0;\n    position: relative;\n    top: -100px;\n    transition: all .25s ease\n}\n\n.nav p {\n        margin: 0;\n}\n\nul {\n    display: flex;\n    list-style: none;\n    margin: 0;\n    width: 0;\n    overflow: hidden;\n    padding: 0;\n    transition: all 1s ease;\n    margin-left: .5%;\n    align-items: center;\n}\n\nli:nth-child(1) {\n    margin-left: 1.15vw;\n}\n\nli {\n    display: flex;\n    position: relative;\n}\n\nli span {\n    position: relative;\n}\n\n#loaded {\n    width: 19vw;\n}\n\n#pushed {\n    opacity: 1;\n    top: 0;\n}\n\nli + li {\n    padding-left: 6%;\n}\n\nli img {\n    position: relative;\n    top: -100%;\n    left: -50%;\n    opacity: 0;\n    transition: all .25s ease;\n    width: 25%;\n    height: 65%;\n}\n\nli:hover {\n    cursor: pointer;\n    text-shadow: 0 0px 4px white;\n}\n\n#active {\n    animation: bounce .25s;\n}\n\n.main {\n    display: flex; /*for home page*/\n    height: 90vh; /*for all pages*/\n    width: 75vw; /*for menu page*/\n    align-items: center; /*for both pages*/\n    /* justify-content: space-evenly; /*for home page*/\n    justify-content: space-around; /*for contact page*/\n    /* display: grid; /*for menu page*/\n    grid-template-columns: 1fr 1fr 1fr; /*for menu page*/\n    grid-template-rows: 1fr 9fr 9fr 1fr; /*for menu page*/\n    grid-gap: 3px; /*for menu page*/\n    justify-items: center; /*for menu page*/\n    margin: 0 auto; /*for menu page*/\n    grid-template-columns: 1fr 1fr; /* for contact page */\n    grid-template-rows: .5fr 2fr; /* for contact page */\n}\n\n.option img {\n    width: 300px;\n    height: 300px;\n    border: solid white 1px;\n}\n\n.option span {\n    font-size: 1vw;\n}\n\n.option {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-around;\n    height: 100%;\n}\n\n.main > h1 {\n    margin: 0;\n    grid-column: 1/4;\n}\n\n.menu-header {\n    text-align: center;\n    grid-column: 2/3;\n}\n\n.hero-text {\n    width: 40%;\n    font-size: 1.75vw;\n    color: black;\n}\n\n.hero-text p {\n    backdrop-filter: blur(2px);\n    border: solid black 1px;\n    padding: 5%;\n    margin: 0;\n    font-size: 1.25vw;\n    background-color: #00000014;\n}\n\n.hero-text h1 {\n    margin: 0;\n}\n\n.head-chef {\n    width: 25%;\n\n}\n\n.head-chef p {\n    text-align: center;\n    margin: 0;\n    font-size: .9vw;\n    backdrop-filter: blur(2px);\n    background-color: #00000014;\n    border: solid black 1px;\n    padding: 5%;\n}\n\n.head-chef em {\n    font-family: 'OldWizard';\n}\n\n.head-chef img {\n    width: 100%;\n    margin: 0 auto;\n    display: block;\n    border-radius: 6px;\n    margin-bottom: 3%;\n}\n\n.map {\n    width: 41.25%;\n    padding: 1vw;\n    border: solid black 1px;\n    background-color: #00000014;\n}\n\n.map img {\n    margin: 0 auto;\n    display: block;\n    width: 60%;\n    border: solid black 1px;\n}\n\n.map h2 {\n    text-align: center;\n}\n\n.info div {\n    display: flex;\n    width: 65%;\n}\n\n.info {\n    background-color: #00000014;\n    backdrop-filter: blur(2px);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    border: solid black 1px;\n    align-self: center;\n    width: 30%;\n    padding: 5% 0 5% 0;\n}\n\n.info img {\n    width: 1.5vw;\n    height: fit-content;\n}\n\n.info p {\n    font-size: 1.25vw;\n    margin: 0;\n    margin-left: 3%;\n}\n\nform {\n    display: flex;\n    flex-direction: column;\n    width: 65%;\n    font-size: 1.25vw;\n}\n\nlabel {\n    color: black;\n    position: relative;\n    top: 4vh;\n    left: 5px;\n    transition: all ease .25s;\n    font-size: 1.25vw;\n}\n\ninput {\n    height: 1.75vw;\n    font-size: 1.25vw;\n    border: none;\n    background-color: #9967226e;\n    border-radius: 5px;\n}\n\ntextarea {\n    font-size: 1.25vw;\n    border: none;\n    background-color: #9967226e;\n    border-radius: 5px;\n}\n\n#valid {\n    top: 5px;\n    color: lightgreen;\n}\n\n#invalid {\n    top: 5px;\n    color: red;\n}\n\nbutton {\n    margin-top: 3%;\n    font-size: 1.25vw;\n}\n\n#moving-out {\n    position: relative;\n    animation: fall-down 1s ease;\n}\n\n#waiting {\n    position: relative;\n    top: -1000px;\n}\n\n#moving-in {\n    position: relative;\n    animation: fall-in .5s ease;\n}\n\n\n@keyframes bounce {\n    0% {\n        top: -15%;\n    }\n    50% {\n        top: 0%;\n    }\n    75% {\n        top: -7.5%;\n    }\n    87.5% {\n        top: 0%;\n    }\n    93.75% {\n        top: -3.75%;\n    }\n    100% {\n        top: 0%\n    }\n}\n\n@keyframes fall-down {\n    10% {\n        top: 0;\n    }\n    25% {\n        top: -85px;\n    }\n    100% {\n        top: 1000px;\n    }\n}\n\n@keyframes fall-in {\n    0% {\n        top: -1000px;\n    }\n    100% {\n        top: 0px;\n    }\n}\n\n@media only screen and (max-width: 1239px) {\n\n    body {\n        overflow: auto;\n        background-size: 500px;\n    }\n\n    .l-side {\n        position: fixed;\n        z-index: 3;\n    }\n\n    .r-side { \n        position: fixed;\n        z-index: 3;\n    }\n\n    .main {\n        flex-direction: column;\n        height: auto;\n        z-index: 1;\n        position: relative;\n    }\n\n    .nav {\n        font-size: 7vw;\n        justify-content: center;\n        position: sticky;\n        top: 0;\n        z-index: 2;\n    }\n\n    .nav img {\n        width: 10%;\n    }\n    \n    ul {\n        align-items: center;\n        margin-left: 3%\n    }\n    \n    .hero-text {\n        width: auto;\n    }\n\n    .hero-text h1 {\n        font-size: 8vw;\n        text-align: center;\n    }\n\n    .hero-text p {\n        font-size: 4vw;\n    }\n\n    .head-chef {\n        width: auto;\n        margin-top: 5%;\n    }\n\n    .head-chef p {\n        font-size: 5vw;\n        backdrop-filter: none;\n        background-color: transparent;\n        border: none;\n    }\n\n    .main > h1 {\n        margin: 0;\n        grid-column: 1/4;\n        font-size: 5vw;\n        text-align: center;\n    }\n\n    .option img {\n        width: 100%;\n        height: auto;\n    }\n\n    .option span {\n        font-size: 5vw;\n        text-align: center;\n    }\n\n    .map {\n        width: 100%;\n        padding: 1vw;\n        border: none;\n        background-color: transparent;\n        margin-top: 5%;\n    }\n\n    .map img {\n        width: 100%;\n    }\n\n    .map h2 {\n        margin: 0;\n    }\n\n    .info {\n        width: 100%;\n        margin-bottom: 5%;\n    }\n\n    .info div {\n        width: 50%;\n    }\n\n    .info img {\n        width: auto;\n    }\n\n    .info p {\n        font-size: 5vw;\n        margin: 0;\n        margin-left: 3%;\n    }\n\n    .form {\n        width: 85%;\n    }\n\n    label {\n        color: black;\n        position: relative;\n        top: 7.5vw;\n        left: 5px;\n        transition: all ease .25s;\n        font-size: 5vw;\n    }\n\n    input {\n        height: 6.75vw;\n        font-size: 5vw;\n        border: none;\n        background-color: #9967226e;\n        border-radius: 5px;\n    }\n\n    textarea {\n        font-size: 5vw;\n    }\n\n    button {\n        margin-top: 3%;\n        font-size: 5vw;\n    }\n\n    #loaded {\n        width: 61vw;\n    }\n}"],"sourceRoot":""}]);
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
/* harmony import */ var _resize_event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resize-event */ "./src/functions/resize-event.js");






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
    (0,_resize_event__WEBPACK_IMPORTED_MODULE_3__["default"])();
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

/***/ "./src/functions/resize-event.js":
/*!***************************************!*\
  !*** ./src/functions/resize-event.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const resizeEvent = function() {
    const main = document.querySelector('.main');

    window.addEventListener('resize', function() {
        console.log(main.firstChild.tagName)
        if(main.firstChild.tagName == 'H1') {
            if(window.innerWidth < 1240) {
                main.style.display = 'flex'
            } else {
                main.style.display = 'grid';
            }
        }
    })
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (resizeEvent);

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

    if(window.innerWidth < 1240) {
        main.style.display = 'flex'
    } else {
        main.style.display = 'grid';
    }
    
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QXlCLGFBQWEseUJBQXlCLGFBQWEseUJBQXlCLHlCQUF5Qix1QkFBdUIseUJBQXlCLHVCQUF1Qix5QkFBeUIseUJBQXlCLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsUUFBUSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUss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O1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7OztBQ0E4QztBQUN6Qjs7QUFFckIsMkRBQVUsRyIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9mdW5jdGlvbnMvZHVtcC5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvZnVuY3Rpb25zL2Zvcm0tZXZlbnRzLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9mdW5jdGlvbnMvaW5pdC5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvZnVuY3Rpb25zL2xvYWQtbmV3LmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9mdW5jdGlvbnMvbmF2LWV2ZW50cy5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvZnVuY3Rpb25zL3Jlc2l6ZS1ldmVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvcGFnZXMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvcGFnZXMvaG9tZS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvcGFnZXMvbWVudS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiYXNzZXRzL2JnMi5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCJhc3NldHMvT2xkV2l6YXJkLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcImFzc2V0cy9IaW5kLU1lZGl1bS50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCJhc3NldHMvc2lkZWJhcjIucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18gPSBuZXcgVVJMKFwiYXNzZXRzL3NpZGViYXIxLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGZvbnQtZmFtaWx5OiAnSGluZCc7XFxuICAgIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogY2VudGVyO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdPbGRXaXphcmQnO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ0hpbmQnO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxufVxcblxcbi5sLXNpZGUge1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgaGVpZ2h0OiAxMDV2aDtcXG4gICAgd2lkdGg6IDEwJTtcXG4gICAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG59XFxuXFxuLnItc2lkZSB7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICBoZWlnaHQ6IDEwNXZoO1xcbiAgICB3aWR0aDogMTAlO1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDAlO1xcbiAgICB0b3A6IDA7XFxufVxcblxcblxcbi5uYXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmb250LXNpemU6IDJ2dztcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwYWRkaW5nOiAxJSAxMCUgMSUgMTAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwYmY7O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1ib3R0b206IGRvdWJsZSB3aGl0ZSAzcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmb250LWZhbWlseTogJ09sZFdpemFyZCc7XFxuXFxufVxcblxcbi5uYXYgaW1nIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IC0xMDBweDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIC4yNXMgZWFzZVxcbn1cXG5cXG4ubmF2IHAge1xcbiAgICAgICAgbWFyZ2luOiAwO1xcbn1cXG5cXG51bCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgd2lkdGg6IDA7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIHRyYW5zaXRpb246IGFsbCAxcyBlYXNlO1xcbiAgICBtYXJnaW4tbGVmdDogLjUlO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5saTpudGgtY2hpbGQoMSkge1xcbiAgICBtYXJnaW4tbGVmdDogMS4xNXZ3O1xcbn1cXG5cXG5saSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxubGkgc3BhbiB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuI2xvYWRlZCB7XFxuICAgIHdpZHRoOiAxOXZ3O1xcbn1cXG5cXG4jcHVzaGVkIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdG9wOiAwO1xcbn1cXG5cXG5saSArIGxpIHtcXG4gICAgcGFkZGluZy1sZWZ0OiA2JTtcXG59XFxuXFxubGkgaW1nIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IC0xMDAlO1xcbiAgICBsZWZ0OiAtNTAlO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjI1cyBlYXNlO1xcbiAgICB3aWR0aDogMjUlO1xcbiAgICBoZWlnaHQ6IDY1JTtcXG59XFxuXFxubGk6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRleHQtc2hhZG93OiAwIDBweCA0cHggd2hpdGU7XFxufVxcblxcbiNhY3RpdmUge1xcbiAgICBhbmltYXRpb246IGJvdW5jZSAuMjVzO1xcbn1cXG5cXG4ubWFpbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7IC8qZm9yIGhvbWUgcGFnZSovXFxuICAgIGhlaWdodDogOTB2aDsgLypmb3IgYWxsIHBhZ2VzKi9cXG4gICAgd2lkdGg6IDc1dnc7IC8qZm9yIG1lbnUgcGFnZSovXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IC8qZm9yIGJvdGggcGFnZXMqL1xcbiAgICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTsgLypmb3IgaG9tZSBwYWdlKi9cXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7IC8qZm9yIGNvbnRhY3QgcGFnZSovXFxuICAgIC8qIGRpc3BsYXk6IGdyaWQ7IC8qZm9yIG1lbnUgcGFnZSovXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7IC8qZm9yIG1lbnUgcGFnZSovXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDlmciA5ZnIgMWZyOyAvKmZvciBtZW51IHBhZ2UqL1xcbiAgICBncmlkLWdhcDogM3B4OyAvKmZvciBtZW51IHBhZ2UqL1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7IC8qZm9yIG1lbnUgcGFnZSovXFxuICAgIG1hcmdpbjogMCBhdXRvOyAvKmZvciBtZW51IHBhZ2UqL1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7IC8qIGZvciBjb250YWN0IHBhZ2UgKi9cXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAuNWZyIDJmcjsgLyogZm9yIGNvbnRhY3QgcGFnZSAqL1xcbn1cXG5cXG4ub3B0aW9uIGltZyB7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgaGVpZ2h0OiAzMDBweDtcXG4gICAgYm9yZGVyOiBzb2xpZCB3aGl0ZSAxcHg7XFxufVxcblxcbi5vcHRpb24gc3BhbiB7XFxuICAgIGZvbnQtc2l6ZTogMXZ3O1xcbn1cXG5cXG4ub3B0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLm1haW4gPiBoMSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZ3JpZC1jb2x1bW46IDEvNDtcXG59XFxuXFxuLm1lbnUtaGVhZGVyIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBncmlkLWNvbHVtbjogMi8zO1xcbn1cXG5cXG4uaGVyby10ZXh0IHtcXG4gICAgd2lkdGg6IDQwJTtcXG4gICAgZm9udC1zaXplOiAxLjc1dnc7XFxuICAgIGNvbG9yOiBibGFjaztcXG59XFxuXFxuLmhlcm8tdGV4dCBwIHtcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDJweCk7XFxuICAgIGJvcmRlcjogc29saWQgYmxhY2sgMXB4O1xcbiAgICBwYWRkaW5nOiA1JTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LXNpemU6IDEuMjV2dztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDE0O1xcbn1cXG5cXG4uaGVyby10ZXh0IGgxIHtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uaGVhZC1jaGVmIHtcXG4gICAgd2lkdGg6IDI1JTtcXG5cXG59XFxuXFxuLmhlYWQtY2hlZiBwIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGZvbnQtc2l6ZTogLjl2dztcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDJweCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDAxNDtcXG4gICAgYm9yZGVyOiBzb2xpZCBibGFjayAxcHg7XFxuICAgIHBhZGRpbmc6IDUlO1xcbn1cXG5cXG4uaGVhZC1jaGVmIGVtIHtcXG4gICAgZm9udC1mYW1pbHk6ICdPbGRXaXphcmQnO1xcbn1cXG5cXG4uaGVhZC1jaGVmIGltZyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMyU7XFxufVxcblxcbi5tYXAge1xcbiAgICB3aWR0aDogNDEuMjUlO1xcbiAgICBwYWRkaW5nOiAxdnc7XFxuICAgIGJvcmRlcjogc29saWQgYmxhY2sgMXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwMTQ7XFxufVxcblxcbi5tYXAgaW1nIHtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogNjAlO1xcbiAgICBib3JkZXI6IHNvbGlkIGJsYWNrIDFweDtcXG59XFxuXFxuLm1hcCBoMiB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmluZm8gZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDY1JTtcXG59XFxuXFxuLmluZm8ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwMTQ7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigycHgpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXI6IHNvbGlkIGJsYWNrIDFweDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICB3aWR0aDogMzAlO1xcbiAgICBwYWRkaW5nOiA1JSAwIDUlIDA7XFxufVxcblxcbi5pbmZvIGltZyB7XFxuICAgIHdpZHRoOiAxLjV2dztcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG59XFxuXFxuLmluZm8gcCB7XFxuICAgIGZvbnQtc2l6ZTogMS4yNXZ3O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIG1hcmdpbi1sZWZ0OiAzJTtcXG59XFxuXFxuZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiA2NSU7XFxuICAgIGZvbnQtc2l6ZTogMS4yNXZ3O1xcbn1cXG5cXG5sYWJlbCB7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IDR2aDtcXG4gICAgbGVmdDogNXB4O1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZSAuMjVzO1xcbiAgICBmb250LXNpemU6IDEuMjV2dztcXG59XFxuXFxuaW5wdXQge1xcbiAgICBoZWlnaHQ6IDEuNzV2dztcXG4gICAgZm9udC1zaXplOiAxLjI1dnc7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzk5NjcyMjZlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbnRleHRhcmVhIHtcXG4gICAgZm9udC1zaXplOiAxLjI1dnc7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzk5NjcyMjZlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbiN2YWxpZCB7XFxuICAgIHRvcDogNXB4O1xcbiAgICBjb2xvcjogbGlnaHRncmVlbjtcXG59XFxuXFxuI2ludmFsaWQge1xcbiAgICB0b3A6IDVweDtcXG4gICAgY29sb3I6IHJlZDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgbWFyZ2luLXRvcDogMyU7XFxuICAgIGZvbnQtc2l6ZTogMS4yNXZ3O1xcbn1cXG5cXG4jbW92aW5nLW91dCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYW5pbWF0aW9uOiBmYWxsLWRvd24gMXMgZWFzZTtcXG59XFxuXFxuI3dhaXRpbmcge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogLTEwMDBweDtcXG59XFxuXFxuI21vdmluZy1pbiB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYW5pbWF0aW9uOiBmYWxsLWluIC41cyBlYXNlO1xcbn1cXG5cXG5cXG5Aa2V5ZnJhbWVzIGJvdW5jZSB7XFxuICAgIDAlIHtcXG4gICAgICAgIHRvcDogLTE1JTtcXG4gICAgfVxcbiAgICA1MCUge1xcbiAgICAgICAgdG9wOiAwJTtcXG4gICAgfVxcbiAgICA3NSUge1xcbiAgICAgICAgdG9wOiAtNy41JTtcXG4gICAgfVxcbiAgICA4Ny41JSB7XFxuICAgICAgICB0b3A6IDAlO1xcbiAgICB9XFxuICAgIDkzLjc1JSB7XFxuICAgICAgICB0b3A6IC0zLjc1JTtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICAgIHRvcDogMCVcXG4gICAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZhbGwtZG93biB7XFxuICAgIDEwJSB7XFxuICAgICAgICB0b3A6IDA7XFxuICAgIH1cXG4gICAgMjUlIHtcXG4gICAgICAgIHRvcDogLTg1cHg7XFxuICAgIH1cXG4gICAgMTAwJSB7XFxuICAgICAgICB0b3A6IDEwMDBweDtcXG4gICAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZhbGwtaW4ge1xcbiAgICAwJSB7XFxuICAgICAgICB0b3A6IC0xMDAwcHg7XFxuICAgIH1cXG4gICAgMTAwJSB7XFxuICAgICAgICB0b3A6IDBweDtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMzlweCkge1xcblxcbiAgICBib2R5IHtcXG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiA1MDBweDtcXG4gICAgfVxcblxcbiAgICAubC1zaWRlIHtcXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgICAgIHotaW5kZXg6IDM7XFxuICAgIH1cXG5cXG4gICAgLnItc2lkZSB7IFxcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICAgICAgei1pbmRleDogMztcXG4gICAgfVxcblxcbiAgICAubWFpbiB7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xcbiAgICAgICAgei1pbmRleDogMTtcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgfVxcblxcbiAgICAubmF2IHtcXG4gICAgICAgIGZvbnQtc2l6ZTogN3Z3O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgICAgICAgdG9wOiAwO1xcbiAgICAgICAgei1pbmRleDogMjtcXG4gICAgfVxcblxcbiAgICAubmF2IGltZyB7XFxuICAgICAgICB3aWR0aDogMTAlO1xcbiAgICB9XFxuICAgIFxcbiAgICB1bCB7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDMlXFxuICAgIH1cXG4gICAgXFxuICAgIC5oZXJvLXRleHQge1xcbiAgICAgICAgd2lkdGg6IGF1dG87XFxuICAgIH1cXG5cXG4gICAgLmhlcm8tdGV4dCBoMSB7XFxuICAgICAgICBmb250LXNpemU6IDh2dztcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgfVxcblxcbiAgICAuaGVyby10ZXh0IHAge1xcbiAgICAgICAgZm9udC1zaXplOiA0dnc7XFxuICAgIH1cXG5cXG4gICAgLmhlYWQtY2hlZiB7XFxuICAgICAgICB3aWR0aDogYXV0bztcXG4gICAgICAgIG1hcmdpbi10b3A6IDUlO1xcbiAgICB9XFxuXFxuICAgIC5oZWFkLWNoZWYgcCB7XFxuICAgICAgICBmb250LXNpemU6IDV2dztcXG4gICAgICAgIGJhY2tkcm9wLWZpbHRlcjogbm9uZTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICB9XFxuXFxuICAgIC5tYWluID4gaDEge1xcbiAgICAgICAgbWFyZ2luOiAwO1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IDEvNDtcXG4gICAgICAgIGZvbnQtc2l6ZTogNXZ3O1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgIC5vcHRpb24gaW1nIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xcbiAgICB9XFxuXFxuICAgIC5vcHRpb24gc3BhbiB7XFxuICAgICAgICBmb250LXNpemU6IDV2dztcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgfVxcblxcbiAgICAubWFwIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgcGFkZGluZzogMXZ3O1xcbiAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgICAgICBtYXJnaW4tdG9wOiA1JTtcXG4gICAgfVxcblxcbiAgICAubWFwIGltZyB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgfVxcblxcbiAgICAubWFwIGgyIHtcXG4gICAgICAgIG1hcmdpbjogMDtcXG4gICAgfVxcblxcbiAgICAuaW5mbyB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDUlO1xcbiAgICB9XFxuXFxuICAgIC5pbmZvIGRpdiB7XFxuICAgICAgICB3aWR0aDogNTAlO1xcbiAgICB9XFxuXFxuICAgIC5pbmZvIGltZyB7XFxuICAgICAgICB3aWR0aDogYXV0bztcXG4gICAgfVxcblxcbiAgICAuaW5mbyBwIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogNXZ3O1xcbiAgICAgICAgbWFyZ2luOiAwO1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDMlO1xcbiAgICB9XFxuXFxuICAgIC5mb3JtIHtcXG4gICAgICAgIHdpZHRoOiA4NSU7XFxuICAgIH1cXG5cXG4gICAgbGFiZWwge1xcbiAgICAgICAgY29sb3I6IGJsYWNrO1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgdG9wOiA3LjV2dztcXG4gICAgICAgIGxlZnQ6IDVweDtcXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCBlYXNlIC4yNXM7XFxuICAgICAgICBmb250LXNpemU6IDV2dztcXG4gICAgfVxcblxcbiAgICBpbnB1dCB7XFxuICAgICAgICBoZWlnaHQ6IDYuNzV2dztcXG4gICAgICAgIGZvbnQtc2l6ZTogNXZ3O1xcbiAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzk5NjcyMjZlO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICB9XFxuXFxuICAgIHRleHRhcmVhIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogNXZ3O1xcbiAgICB9XFxuXFxuICAgIGJ1dHRvbiB7XFxuICAgICAgICBtYXJnaW4tdG9wOiAzJTtcXG4gICAgICAgIGZvbnQtc2l6ZTogNXZ3O1xcbiAgICB9XFxuXFxuICAgICNsb2FkZWQge1xcbiAgICAgICAgd2lkdGg6IDYxdnc7XFxuICAgIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixtREFBK0I7SUFDL0Isc0JBQXNCO0lBQ3RCLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4Qiw0Q0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsNENBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixVQUFVO0lBQ1YsbURBQW9DO0lBQ3BDLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsTUFBTTtBQUNWOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixVQUFVO0lBQ1YsbURBQW9DO0lBQ3BDLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsU0FBUztJQUNULE1BQU07QUFDVjs7O0FBR0E7SUFDSSxhQUFhO0lBQ2IsY0FBYztJQUNkLDhCQUE4QjtJQUM5QixzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLFlBQVk7SUFDWiwrQkFBK0I7SUFDL0IsdUJBQXVCO0lBQ3ZCLHdCQUF3Qjs7QUFFNUI7O0FBRUE7SUFDSSxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWDtBQUNKOztBQUVBO1FBQ1EsU0FBUztBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsU0FBUztJQUNULFFBQVE7SUFDUixnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtBQUN0Qjs7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aEIsY0FBYztRQUNkLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLFdBQVc7UUFDWCxZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksY0FBYztRQUNkLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLFdBQVc7UUFDWCxZQUFZO1FBQ1osWUFBWTtRQUNaLDZCQUE2QjtRQUM3QixjQUFjO0lBQ2xCOztJQUVBO1FBQ0ksV0FBVztJQUNmOztJQUVBO1FBQ0ksU0FBUztJQUNiOztJQUVBO1FBQ0ksV0FBVztRQUNYLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLFVBQVU7SUFDZDs7SUFFQTtRQUNJLFdBQVc7SUFDZjs7SUFFQTtRQUNJLGNBQWM7UUFDZCxTQUFTO1FBQ1QsZUFBZTtJQUNuQjs7SUFFQTtRQUNJLFVBQVU7SUFDZDs7SUFFQTtRQUNJLFlBQVk7UUFDWixrQkFBa0I7UUFDbEIsVUFBVTtRQUNWLFNBQVM7UUFDVCx5QkFBeUI7UUFDekIsY0FBYztJQUNsQjs7SUFFQTtRQUNJLGNBQWM7UUFDZCxjQUFjO1FBQ2QsWUFBWTtRQUNaLDJCQUEyQjtRQUMzQixrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxjQUFjO0lBQ2xCOztJQUVBO1FBQ0ksY0FBYztRQUNkLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSxXQUFXO0lBQ2Y7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGZvbnQtZmFtaWx5OiAnSGluZCc7XFxuICAgIGJhY2tncm91bmQ6IHVybChhc3NldHMvYmcyLmpwZyk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogY2VudGVyO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdPbGRXaXphcmQnO1xcbiAgICBzcmM6IHVybCgnYXNzZXRzL09sZFdpemFyZC50dGYnKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnSGluZCc7XFxuICAgIHNyYzogdXJsKCdhc3NldHMvSGluZC1NZWRpdW0udHRmJyk7XFxufVxcblxcbi5sLXNpZGUge1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgaGVpZ2h0OiAxMDV2aDtcXG4gICAgd2lkdGg6IDEwJTtcXG4gICAgYmFja2dyb3VuZDogdXJsKGFzc2V0cy9zaWRlYmFyMi5wbmcpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbn1cXG5cXG4uci1zaWRlIHtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIGhlaWdodDogMTA1dmg7XFxuICAgIHdpZHRoOiAxMCU7XFxuICAgIGJhY2tncm91bmQ6IHVybChhc3NldHMvc2lkZWJhcjEucG5nKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAwJTtcXG4gICAgdG9wOiAwO1xcbn1cXG5cXG5cXG4ubmF2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZm9udC1zaXplOiAydnc7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcGFkZGluZzogMSUgMTAlIDElIDEwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMGJmOztcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItYm90dG9tOiBkb3VibGUgd2hpdGUgM3B4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZm9udC1mYW1pbHk6ICdPbGRXaXphcmQnO1xcblxcbn1cXG5cXG4ubmF2IGltZyB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAtMTAwcHg7XFxuICAgIHRyYW5zaXRpb246IGFsbCAuMjVzIGVhc2VcXG59XFxuXFxuLm5hdiBwIHtcXG4gICAgICAgIG1hcmdpbjogMDtcXG59XFxuXFxudWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHdpZHRoOiAwO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMXMgZWFzZTtcXG4gICAgbWFyZ2luLWxlZnQ6IC41JTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxubGk6bnRoLWNoaWxkKDEpIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDEuMTV2dztcXG59XFxuXFxubGkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbmxpIHNwYW4ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbiNsb2FkZWQge1xcbiAgICB3aWR0aDogMTl2dztcXG59XFxuXFxuI3B1c2hlZCB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRvcDogMDtcXG59XFxuXFxubGkgKyBsaSB7XFxuICAgIHBhZGRpbmctbGVmdDogNiU7XFxufVxcblxcbmxpIGltZyB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAtMTAwJTtcXG4gICAgbGVmdDogLTUwJTtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIC4yNXMgZWFzZTtcXG4gICAgd2lkdGg6IDI1JTtcXG4gICAgaGVpZ2h0OiA2NSU7XFxufVxcblxcbmxpOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0ZXh0LXNoYWRvdzogMCAwcHggNHB4IHdoaXRlO1xcbn1cXG5cXG4jYWN0aXZlIHtcXG4gICAgYW5pbWF0aW9uOiBib3VuY2UgLjI1cztcXG59XFxuXFxuLm1haW4ge1xcbiAgICBkaXNwbGF5OiBmbGV4OyAvKmZvciBob21lIHBhZ2UqL1xcbiAgICBoZWlnaHQ6IDkwdmg7IC8qZm9yIGFsbCBwYWdlcyovXFxuICAgIHdpZHRoOiA3NXZ3OyAvKmZvciBtZW51IHBhZ2UqL1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyAvKmZvciBib3RoIHBhZ2VzKi9cXG4gICAgLyoganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7IC8qZm9yIGhvbWUgcGFnZSovXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kOyAvKmZvciBjb250YWN0IHBhZ2UqL1xcbiAgICAvKiBkaXNwbGF5OiBncmlkOyAvKmZvciBtZW51IHBhZ2UqL1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyOyAvKmZvciBtZW51IHBhZ2UqL1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA5ZnIgOWZyIDFmcjsgLypmb3IgbWVudSBwYWdlKi9cXG4gICAgZ3JpZC1nYXA6IDNweDsgLypmb3IgbWVudSBwYWdlKi9cXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyOyAvKmZvciBtZW51IHBhZ2UqL1xcbiAgICBtYXJnaW46IDAgYXV0bzsgLypmb3IgbWVudSBwYWdlKi9cXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyOyAvKiBmb3IgY29udGFjdCBwYWdlICovXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogLjVmciAyZnI7IC8qIGZvciBjb250YWN0IHBhZ2UgKi9cXG59XFxuXFxuLm9wdGlvbiBpbWcge1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIGhlaWdodDogMzAwcHg7XFxuICAgIGJvcmRlcjogc29saWQgd2hpdGUgMXB4O1xcbn1cXG5cXG4ub3B0aW9uIHNwYW4ge1xcbiAgICBmb250LXNpemU6IDF2dztcXG59XFxuXFxuLm9wdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5tYWluID4gaDEge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGdyaWQtY29sdW1uOiAxLzQ7XFxufVxcblxcbi5tZW51LWhlYWRlciB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZ3JpZC1jb2x1bW46IDIvMztcXG59XFxuXFxuLmhlcm8tdGV4dCB7XFxuICAgIHdpZHRoOiA0MCU7XFxuICAgIGZvbnQtc2l6ZTogMS43NXZ3O1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi5oZXJvLXRleHQgcCB7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigycHgpO1xcbiAgICBib3JkZXI6IHNvbGlkIGJsYWNrIDFweDtcXG4gICAgcGFkZGluZzogNSU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZm9udC1zaXplOiAxLjI1dnc7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDAxNDtcXG59XFxuXFxuLmhlcm8tdGV4dCBoMSB7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLmhlYWQtY2hlZiB7XFxuICAgIHdpZHRoOiAyNSU7XFxuXFxufVxcblxcbi5oZWFkLWNoZWYgcCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LXNpemU6IC45dnc7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigycHgpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwMTQ7XFxuICAgIGJvcmRlcjogc29saWQgYmxhY2sgMXB4O1xcbiAgICBwYWRkaW5nOiA1JTtcXG59XFxuXFxuLmhlYWQtY2hlZiBlbSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnT2xkV2l6YXJkJztcXG59XFxuXFxuLmhlYWQtY2hlZiBpbWcge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDMlO1xcbn1cXG5cXG4ubWFwIHtcXG4gICAgd2lkdGg6IDQxLjI1JTtcXG4gICAgcGFkZGluZzogMXZ3O1xcbiAgICBib3JkZXI6IHNvbGlkIGJsYWNrIDFweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDE0O1xcbn1cXG5cXG4ubWFwIGltZyB7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDYwJTtcXG4gICAgYm9yZGVyOiBzb2xpZCBibGFjayAxcHg7XFxufVxcblxcbi5tYXAgaDIge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5pbmZvIGRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiA2NSU7XFxufVxcblxcbi5pbmZvIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDE0O1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMnB4KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyOiBzb2xpZCBibGFjayAxcHg7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDMwJTtcXG4gICAgcGFkZGluZzogNSUgMCA1JSAwO1xcbn1cXG5cXG4uaW5mbyBpbWcge1xcbiAgICB3aWR0aDogMS41dnc7XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxufVxcblxcbi5pbmZvIHAge1xcbiAgICBmb250LXNpemU6IDEuMjV2dztcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBtYXJnaW4tbGVmdDogMyU7XFxufVxcblxcbmZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogNjUlO1xcbiAgICBmb250LXNpemU6IDEuMjV2dztcXG59XFxuXFxubGFiZWwge1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiA0dmg7XFxuICAgIGxlZnQ6IDVweDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIGVhc2UgLjI1cztcXG4gICAgZm9udC1zaXplOiAxLjI1dnc7XFxufVxcblxcbmlucHV0IHtcXG4gICAgaGVpZ2h0OiAxLjc1dnc7XFxuICAgIGZvbnQtc2l6ZTogMS4yNXZ3O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5OTY3MjI2ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICAgIGZvbnQtc2l6ZTogMS4yNXZ3O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5OTY3MjI2ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4jdmFsaWQge1xcbiAgICB0b3A6IDVweDtcXG4gICAgY29sb3I6IGxpZ2h0Z3JlZW47XFxufVxcblxcbiNpbnZhbGlkIHtcXG4gICAgdG9wOiA1cHg7XFxuICAgIGNvbG9yOiByZWQ7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIG1hcmdpbi10b3A6IDMlO1xcbiAgICBmb250LXNpemU6IDEuMjV2dztcXG59XFxuXFxuI21vdmluZy1vdXQge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGFuaW1hdGlvbjogZmFsbC1kb3duIDFzIGVhc2U7XFxufVxcblxcbiN3YWl0aW5nIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IC0xMDAwcHg7XFxufVxcblxcbiNtb3ZpbmctaW4ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGFuaW1hdGlvbjogZmFsbC1pbiAuNXMgZWFzZTtcXG59XFxuXFxuXFxuQGtleWZyYW1lcyBib3VuY2Uge1xcbiAgICAwJSB7XFxuICAgICAgICB0b3A6IC0xNSU7XFxuICAgIH1cXG4gICAgNTAlIHtcXG4gICAgICAgIHRvcDogMCU7XFxuICAgIH1cXG4gICAgNzUlIHtcXG4gICAgICAgIHRvcDogLTcuNSU7XFxuICAgIH1cXG4gICAgODcuNSUge1xcbiAgICAgICAgdG9wOiAwJTtcXG4gICAgfVxcbiAgICA5My43NSUge1xcbiAgICAgICAgdG9wOiAtMy43NSU7XFxuICAgIH1cXG4gICAgMTAwJSB7XFxuICAgICAgICB0b3A6IDAlXFxuICAgIH1cXG59XFxuXFxuQGtleWZyYW1lcyBmYWxsLWRvd24ge1xcbiAgICAxMCUge1xcbiAgICAgICAgdG9wOiAwO1xcbiAgICB9XFxuICAgIDI1JSB7XFxuICAgICAgICB0b3A6IC04NXB4O1xcbiAgICB9XFxuICAgIDEwMCUge1xcbiAgICAgICAgdG9wOiAxMDAwcHg7XFxuICAgIH1cXG59XFxuXFxuQGtleWZyYW1lcyBmYWxsLWluIHtcXG4gICAgMCUge1xcbiAgICAgICAgdG9wOiAtMTAwMHB4O1xcbiAgICB9XFxuICAgIDEwMCUge1xcbiAgICAgICAgdG9wOiAwcHg7XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjM5cHgpIHtcXG5cXG4gICAgYm9keSB7XFxuICAgICAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogNTAwcHg7XFxuICAgIH1cXG5cXG4gICAgLmwtc2lkZSB7XFxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgICAgICB6LWluZGV4OiAzO1xcbiAgICB9XFxuXFxuICAgIC5yLXNpZGUgeyBcXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgICAgIHotaW5kZXg6IDM7XFxuICAgIH1cXG5cXG4gICAgLm1haW4ge1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGhlaWdodDogYXV0bztcXG4gICAgICAgIHotaW5kZXg6IDE7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIH1cXG5cXG4gICAgLm5hdiB7XFxuICAgICAgICBmb250LXNpemU6IDd2dztcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgcG9zaXRpb246IHN0aWNreTtcXG4gICAgICAgIHRvcDogMDtcXG4gICAgICAgIHotaW5kZXg6IDI7XFxuICAgIH1cXG5cXG4gICAgLm5hdiBpbWcge1xcbiAgICAgICAgd2lkdGg6IDEwJTtcXG4gICAgfVxcbiAgICBcXG4gICAgdWwge1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzJVxcbiAgICB9XFxuICAgIFxcbiAgICAuaGVyby10ZXh0IHtcXG4gICAgICAgIHdpZHRoOiBhdXRvO1xcbiAgICB9XFxuXFxuICAgIC5oZXJvLXRleHQgaDEge1xcbiAgICAgICAgZm9udC1zaXplOiA4dnc7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIH1cXG5cXG4gICAgLmhlcm8tdGV4dCBwIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogNHZ3O1xcbiAgICB9XFxuXFxuICAgIC5oZWFkLWNoZWYge1xcbiAgICAgICAgd2lkdGg6IGF1dG87XFxuICAgICAgICBtYXJnaW4tdG9wOiA1JTtcXG4gICAgfVxcblxcbiAgICAuaGVhZC1jaGVmIHAge1xcbiAgICAgICAgZm9udC1zaXplOiA1dnc7XFxuICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IG5vbmU7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgfVxcblxcbiAgICAubWFpbiA+IGgxIHtcXG4gICAgICAgIG1hcmdpbjogMDtcXG4gICAgICAgIGdyaWQtY29sdW1uOiAxLzQ7XFxuICAgICAgICBmb250LXNpemU6IDV2dztcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgfVxcblxcbiAgICAub3B0aW9uIGltZyB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGhlaWdodDogYXV0bztcXG4gICAgfVxcblxcbiAgICAub3B0aW9uIHNwYW4ge1xcbiAgICAgICAgZm9udC1zaXplOiA1dnc7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIH1cXG5cXG4gICAgLm1hcCB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIHBhZGRpbmc6IDF2dztcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAgICAgbWFyZ2luLXRvcDogNSU7XFxuICAgIH1cXG5cXG4gICAgLm1hcCBpbWcge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgIH1cXG5cXG4gICAgLm1hcCBoMiB7XFxuICAgICAgICBtYXJnaW46IDA7XFxuICAgIH1cXG5cXG4gICAgLmluZm8ge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1JTtcXG4gICAgfVxcblxcbiAgICAuaW5mbyBkaXYge1xcbiAgICAgICAgd2lkdGg6IDUwJTtcXG4gICAgfVxcblxcbiAgICAuaW5mbyBpbWcge1xcbiAgICAgICAgd2lkdGg6IGF1dG87XFxuICAgIH1cXG5cXG4gICAgLmluZm8gcCB7XFxuICAgICAgICBmb250LXNpemU6IDV2dztcXG4gICAgICAgIG1hcmdpbjogMDtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzJTtcXG4gICAgfVxcblxcbiAgICAuZm9ybSB7XFxuICAgICAgICB3aWR0aDogODUlO1xcbiAgICB9XFxuXFxuICAgIGxhYmVsIHtcXG4gICAgICAgIGNvbG9yOiBibGFjaztcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgIHRvcDogNy41dnc7XFxuICAgICAgICBsZWZ0OiA1cHg7XFxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZSAuMjVzO1xcbiAgICAgICAgZm9udC1zaXplOiA1dnc7XFxuICAgIH1cXG5cXG4gICAgaW5wdXQge1xcbiAgICAgICAgaGVpZ2h0OiA2Ljc1dnc7XFxuICAgICAgICBmb250LXNpemU6IDV2dztcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM5OTY3MjI2ZTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgfVxcblxcbiAgICB0ZXh0YXJlYSB7XFxuICAgICAgICBmb250LXNpemU6IDV2dztcXG4gICAgfVxcblxcbiAgICBidXR0b24ge1xcbiAgICAgICAgbWFyZ2luLXRvcDogMyU7XFxuICAgICAgICBmb250LXNpemU6IDV2dztcXG4gICAgfVxcblxcbiAgICAjbG9hZGVkIHtcXG4gICAgICAgIHdpZHRoOiA2MXZ3O1xcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBkdW1wTWFpbiA9IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpO1xuICAgIHdoaWxlKG1haW4uaGFzQ2hpbGROb2RlcygpKSB7XG4gICAgICAgIG1haW4ucmVtb3ZlQ2hpbGQobWFpbi5maXJzdENoaWxkKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGR1bXBNYWluOyIsImZ1bmN0aW9uIGZvcm1WYWxpZGF0aW9uKGUpIHtcblxuICAgIGNvbnN0IGlucHV0cyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKSk7XG4gICAgY29uc3QgbWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3RleHRhcmVhJyk7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJyk7XG4gICAgaWYobWFpbi5maXJzdENoaWxkLmNsYXNzTGlzdC52YWx1ZSA9PSAnbWFwJykge1xuICAgICAgICBpZihlLnRhcmdldC50eXBlICE9ICd0ZXh0JyAmJiBlLnRhcmdldC50eXBlICE9ICd0ZXh0YXJlYScpIHtcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBpbnB1dHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZihpbnB1dHNbaV0udmFsdWUgPT0gXCJcIikge1xuICAgICAgICAgICAgICAgICAgICBpbnB1dHNbaV0ubGFiZWxzWzBdLnJlbW92ZUF0dHJpYnV0ZSgnaWQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihtZXNzYWdlLnZhbHVlID09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlLmxhYmVsc1swXS5yZW1vdmVBdHRyaWJ1dGUoJ2lkJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG5jb25zdCBiaW5kRm9ybUV2ZW50cyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgY29uc3QgaW5wdXRzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpKTtcbiAgICBjb25zdCBtZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndGV4dGFyZWEnKTtcblxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBpbnB1dHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaW5wdXRzW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZihpbnB1dHNbaV0uY2hlY2tWYWxpZGl0eSgpKSB7XG4gICAgICAgICAgICAgICAgaW5wdXRzW2ldLmxhYmVsc1swXS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3ZhbGlkJyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYoIWlucHV0c1tpXS5jaGVja1ZhbGlkaXR5KCkgfHwgaW5wdXRzW2ldLnZhbHVlID09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICBpbnB1dHNbaV0ubGFiZWxzWzBdLnNldEF0dHJpYnV0ZSgnaWQnLCAnaW52YWxpZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaW5wdXRzW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZihpbnB1dHNbaV0uY2hlY2tWYWxpZGl0eSgpKSB7XG4gICAgICAgICAgICAgICAgaW5wdXRzW2ldLmxhYmVsc1swXS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3ZhbGlkJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlucHV0c1tpXS5sYWJlbHNbMF0uc2V0QXR0cmlidXRlKCdpZCcsICdpbnZhbGlkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgICBtZXNzYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIG1lc3NhZ2UubGFiZWxzWzBdLnNldEF0dHJpYnV0ZSgnaWQnLCAndmFsaWQnKTtcbiAgICB9KVxuICAgIFxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZm9ybVZhbGlkYXRpb24pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBiaW5kRm9ybUV2ZW50czsiLCJpbXBvcnQgbW92aW5nTXVzaHJvb20gZnJvbSAnLi4vYXNzZXRzL211c2hyb29tLWljb24tYWN0aXZlLmdpZic7XG5pbXBvcnQgZ2VuSG9tZSBmcm9tIFwiLi4vcGFnZXMvaG9tZVwiXG5pbXBvcnQgIGJpbmRFdmVudHMgZnJvbSAnLi9uYXYtZXZlbnRzJztcbmltcG9ydCByZXNpemVFdmVudCBmcm9tICcuL3Jlc2l6ZS1ldmVudCc7XG5cblxuLy8gQ3JlYXRlcyBjb250ZW50IHRoYXQgd2lsbCBhbHdheXMgYmUgb24gdGhlIHBhZ2UsIGFuZCBpbml0aWF0ZXMgYW5pbWF0aW9ucyB0aGF0IGFyZSBvbmx5IGdvaW5nIHRvIGZpcmUgb25jZS5cblxuZnVuY3Rpb24gY3JlYXRlTWFpbigpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRlbnQnKVxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGVudCk7XG5cbiAgICBjb25zdCByaWdodFNpZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICByaWdodFNpZGUuY2xhc3NMaXN0LmFkZCgnci1zaWRlJyk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChyaWdodFNpZGUpO1xuXG4gICAgY29uc3QgbGVmdFNpZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZWZ0U2lkZS5jbGFzc0xpc3QuYWRkKCdsLXNpZGUnKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGxlZnRTaWRlKVxuXG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmF2LmNsYXNzTGlzdC5hZGQoJ25hdicpO1xuXG4gICAgY29uc3QgbmF2U2hyb29tUmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBuYXZTaHJvb21SaWdodC5zcmMgPSBtb3ZpbmdNdXNocm9vbTtcblxuICAgIGNvbnN0IG5hdlNocm9vbUxlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBuYXZTaHJvb21MZWZ0LnNyYyA9IG1vdmluZ011c2hyb29tO1xuXG4gICAgY29uc3QgdW5vcmRlcmVkTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgXG4gICAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgaG9tZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBob21lQnV0dG9uLnRleHRDb250ZW50ID0gJ2hvbWUnXG4gICAgaG9tZS5zZXRBdHRyaWJ1dGUoJ2lkJywnaG9tZScpO1xuICAgIGhvbWUuYXBwZW5kQ2hpbGQoaG9tZUJ1dHRvbik7XG5cbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBtZW51QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIG1lbnVCdXR0b24udGV4dENvbnRlbnQgPSAnbWVudSc7XG4gICAgbWVudS5zZXRBdHRyaWJ1dGUoJ2lkJywnbWVudScpO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQobWVudUJ1dHRvbik7XG5cbiAgICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBjb250YWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGNvbnRhY3RCdXR0b24udGV4dENvbnRlbnQgPSAnY29udGFjdCc7XG4gICAgY29udGFjdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRhY3QnKTtcbiAgICBjb250YWN0LmFwcGVuZENoaWxkKGNvbnRhY3RCdXR0b24pO1xuXG4gICAgdW5vcmRlcmVkTGlzdC5hcHBlbmRDaGlsZChob21lKTtcbiAgICB1bm9yZGVyZWRMaXN0LmFwcGVuZENoaWxkKG1lbnUpO1xuICAgIHVub3JkZXJlZExpc3QuYXBwZW5kQ2hpbGQoY29udGFjdCk7XG5cbiAgICBuYXYuYXBwZW5kQ2hpbGQobmF2U2hyb29tTGVmdCk7XG4gICAgbmF2LmFwcGVuZENoaWxkKHVub3JkZXJlZExpc3QpO1xuICAgIG5hdi5hcHBlbmRDaGlsZChuYXZTaHJvb21SaWdodCk7XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG5hdik7XG5cbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKCdtYWluJyk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChtYWluKTtcblxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7IGZvcihsZXQgaSA9IDA7IGkgPCAyOyBpKyspIHtcbiAgICAgICBuYXZTaHJvb21SaWdodC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3B1c2hlZCcpO1xuICAgICAgIG5hdlNocm9vbUxlZnQuc2V0QXR0cmlidXRlKCdpZCcsICdwdXNoZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgIDUwMClcbiAgICBcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge3Vub3JkZXJlZExpc3Quc2V0QXR0cmlidXRlKCdpZCcsJ2xvYWRlZCcpfSwgMTAwMCk7XG4gICAgYmluZEV2ZW50cygpO1xuICAgIGdlbkhvbWUoKTtcbiAgICByZXNpemVFdmVudCgpO1xufSBcblxuZXhwb3J0IHsgY3JlYXRlTWFpbiB9XG4iLCJpbXBvcnQgZ2VuQ29udGFjdCBmcm9tICcuLi9wYWdlcy9jb250YWN0JztcbmltcG9ydCBnZW5Ib21lIGZyb20gJy4uL3BhZ2VzL2hvbWUnO1xuaW1wb3J0IGdlbk1lbnUgZnJvbSAnLi4vcGFnZXMvbWVudSc7XG5pbXBvcnQgZHVtcE1haW4gZnJvbSAnLi9kdW1wJztcblxuXG5jb25zdCBsb2FkTmV3ID0gZnVuY3Rpb24ocmVxdWVzdCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpO1xuICAgIG1haW4uc2V0QXR0cmlidXRlKCdpZCcsICdtb3Zpbmctb3V0Jyk7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgbWFpbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3dhaXRpbmcnKTtcbiAgICB9LCA5MDApXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgZHVtcE1haW4oKVxuICAgICAgICBpZihyZXF1ZXN0ID09ICdob21lJykge1xuICAgICAgICAgICAgZ2VuSG9tZSgpO1xuICAgICAgICB9IGVsc2UgaWYocmVxdWVzdCA9PSAnbWVudScpIHtcbiAgICAgICAgICAgIGdlbk1lbnUoKTtcbiAgICAgICAgfSBlbHNlIGlmKHJlcXVlc3QgPT0gJ2NvbnRhY3QnKSB7XG4gICAgICAgICAgICBnZW5Db250YWN0KCk7XG4gICAgICAgIH1cbiAgICAgICAgbWFpbi5zZXRBdHRyaWJ1dGUoJ2lkJywnbW92aW5nLWluJyk7XG4gICAgfSwgMTEwMCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWROZXc7IiwiaW1wb3J0IGxvYWROZXcgZnJvbSAnLi9sb2FkLW5ldyc7XG5pbXBvcnQgZHJvcCBmcm9tICcuLi9hc3NldHMvZHJvcC53YXYnO1xuXG5jb25zdCBiaW5kRXZlbnRzID0gZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgZHJvcFNvdW5kID0gbmV3IEF1ZGlvKGRyb3ApO1xuICAgIGRyb3BTb3VuZC52b2x1bWUgPSAwLjA1O1xuICAgIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaG9tZScpO1xuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWVudScpO1xuICAgIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGFjdCcpO1xuICAgIGhvbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgbG9hZE5ldygnaG9tZScpO1xuICAgIH0pXG4gICAgbWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICBsb2FkTmV3KCdtZW51Jyk7XG4gICAgfSlcbiAgICBjb250YWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGxvYWROZXcoJ2NvbnRhY3QnKTtcbiAgICB9KVxuICAgIGhvbWUuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIGZ1bmN0aW9uKCkge1xuICAgICAgICBkcm9wU291bmQucGxheSgpO1xuICAgIH0pXG4gICAgbWVudS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGRyb3BTb3VuZC5wbGF5KCk7XG4gICAgfSlcbiAgICBjb250YWN0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBmdW5jdGlvbigpIHtcbiAgICAgICAgZHJvcFNvdW5kLnBsYXkoKTtcbiAgICB9KVxuXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgYmluZEV2ZW50czsiLCJjb25zdCByZXNpemVFdmVudCA9IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhtYWluLmZpcnN0Q2hpbGQudGFnTmFtZSlcbiAgICAgICAgaWYobWFpbi5maXJzdENoaWxkLnRhZ05hbWUgPT0gJ0gxJykge1xuICAgICAgICAgICAgaWYod2luZG93LmlubmVyV2lkdGggPCAxMjQwKSB7XG4gICAgICAgICAgICAgICAgbWFpbi5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG1haW4uc3R5bGUuZGlzcGxheSA9ICdncmlkJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlc2l6ZUV2ZW50OyIsImltcG9ydCBwaG9uZSBmcm9tICcuLi9hc3NldHMvcGhvbmUuc3ZnJztcbmltcG9ydCBjbG9jayBmcm9tICcuLi9hc3NldHMvY2xvY2suc3ZnJztcbmltcG9ydCBsb2MgZnJvbSAnLi4vYXNzZXRzL2xvYy5wbmcnO1xuaW1wb3J0IGJpbmRGb3JtRXZlbnRzIGZyb20gJy4uL2Z1bmN0aW9ucy9mb3JtLWV2ZW50cyc7XG5cbmNvbnN0IGdlbkNvbnRhY3QgPSBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKTtcbiAgICBtYWluLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgbWFpbi5zdHlsZS5qdXN0aWZ5Q29udGVudCA9ICdzcGFjZS1hcm91bmQnO1xuXG4gICAgY29uc3QgbWFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWFwLmNsYXNzTGlzdC5hZGQoJ21hcCcpO1xuICAgIGNvbnN0IGluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbmZvLmNsYXNzTGlzdC5hZGQoJ2luZm8nKTtcblxuICAgIGNvbnN0IG1hcEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIG1hcEltZy5zcmMgPSBsb2M7XG4gICAgY29uc3QgbWFwVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgbWFwVGV4dC50ZXh0Q29udGVudCA9ICdDb21lIHZpc2l0IHVzIGF0IG91ciBzdG9yZWZyb250IGxvY2F0aW9uISdcbiAgICBtYXAuYXBwZW5kQ2hpbGQobWFwSW1nKTtcbiAgICBtYXAuYXBwZW5kQ2hpbGQobWFwVGV4dCk7XG5cbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgMjsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgdGVtcEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBjb25zdCB0ZW1wUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgaWYoaSA9PSAwKSB7XG4gICAgICAgICAgICB0ZW1wSW1nLnNyYyA9IGNsb2NrO1xuICAgICAgICAgICAgdGVtcFAudGV4dENvbnRlbnQgPSAnM0FNIC0gMkFNJztcbiAgICAgICAgICAgIHRlbXAuYXBwZW5kQ2hpbGQodGVtcEltZyk7XG4gICAgICAgICAgICB0ZW1wLmFwcGVuZENoaWxkKHRlbXBQKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRlbXBJbWcuc3JjID0gcGhvbmU7XG4gICAgICAgICAgICB0ZW1wUC50ZXh0Q29udGVudCA9ICcxMTEtMTExLTExMTEnO1xuICAgICAgICAgICAgdGVtcC5hcHBlbmRDaGlsZCh0ZW1wSW1nKTtcbiAgICAgICAgICAgIHRlbXAuYXBwZW5kQ2hpbGQodGVtcFApO1xuICAgICAgICB9XG4gICAgICAgIGluZm8uYXBwZW5kQ2hpbGQodGVtcCk7XG4gICAgfVxuXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHRlbXBJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGNvbnN0IHRlbXBMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG5cbiAgICAgICAgc3dpdGNoKGkpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICB0ZW1wSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICAgICAgICAgICAgICB0ZW1wSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICduYW1lJyk7XG4gICAgICAgICAgICAgICAgdGVtcElucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICduYW1lJyk7XG4gICAgICAgICAgICAgICAgdGVtcElucHV0LnNldEF0dHJpYnV0ZSgnbWlubGVuZ3RoJywgJzMnKTtcbiAgICAgICAgICAgICAgICB0ZW1wSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgdGVtcExhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ25hbWUnKTtcbiAgICAgICAgICAgICAgICB0ZW1wTGFiZWwudGV4dENvbnRlbnQgPSBcIk5hbWVcIjtcbiAgICAgICAgICAgICAgICBmb3JtLmFwcGVuZENoaWxkKHRlbXBMYWJlbCk7XG4gICAgICAgICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZCh0ZW1wSW5wdXQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAxOiBcbiAgICAgICAgICAgICAgICB0ZW1wSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICAgICAgICAgICAgICB0ZW1wSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdlbWFpbCcpO1xuICAgICAgICAgICAgICAgIHRlbXBJbnB1dC5zZXRBdHRyaWJ1dGUoJ3BhdHRlcm4nLCAnXltcXFxcdy1cXFxcLl0rQChbXFx3LV0rXFxcXC4pK1tcXFxcdy1dezIsNH0kJyk7XG4gICAgICAgICAgICAgICAgdGVtcElucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdlbWFpbCcpO1xuICAgICAgICAgICAgICAgIHRlbXBJbnB1dC5yZXF1aXJlZCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICB0ZW1wTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnZW1haWwnKTtcbiAgICAgICAgICAgICAgICB0ZW1wTGFiZWwudGV4dENvbnRlbnQgPSBcIkVtYWlsXCI7XG4gICAgICAgICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZCh0ZW1wTGFiZWwpO1xuICAgICAgICAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQodGVtcElucHV0KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICBjb25zdCB0ZW1wVGV4dGFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgICAgICAgICAgICAgIHRlbXBUZXh0YXJlYS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21lc3NhZ2UnKTtcbiAgICAgICAgICAgICAgICB0ZW1wVGV4dGFyZWEuc2V0QXR0cmlidXRlKCduYW1lJywgJ21lc3NhZ2UnKVxuXG4gICAgICAgICAgICAgICAgdGVtcExhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ21lc3NhZ2UnKTtcbiAgICAgICAgICAgICAgICB0ZW1wTGFiZWwudGV4dENvbnRlbnQgPSBcIlNheSBzb21ldGhpbmcgbmljZSA6KVwiO1xuICAgICAgICAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQodGVtcExhYmVsKTtcbiAgICAgICAgICAgICAgICBmb3JtLmFwcGVuZENoaWxkKHRlbXBUZXh0YXJlYSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDM6IFxuICAgICAgICAgICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9ICdzdWJtaXQnO1xuICAgICAgICAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6IFxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdodWgnKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpbmZvLmFwcGVuZENoaWxkKGZvcm0pO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQobWFwKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGluZm8pOyAgICBcbiAgICBiaW5kRm9ybUV2ZW50cygpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBnZW5Db250YWN0OyIsImltcG9ydCBoZWFkQ2hlZkFzc2V0IGZyb20gJy4uL2Fzc2V0cy9oZWFkLWNoZWYucG5nJztcblxuY29uc3QgZ2VuSG9tZSA9IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpO1xuICAgIGxldCBoZXJvVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlcm9UZXh0LmNsYXNzTGlzdC5hZGQoJ2hlcm8tdGV4dCcpO1xuXG4gICAgbGV0IGhlcm9IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGxldCBoZXJvSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuICAgIGhlcm9IZWFkZXIudGV4dENvbnRlbnQgPSBcIk9ubHkgTXVzaHJvb21zP1wiXG4gICAgaGVyb0luZm8udGV4dENvbnRlbnQgPSBcIlRoYXQncyByaWdodCEgJ09ubHkgTXVzaHJvb21zJyBpcyBhIHJlc3RhdXJhbnQgdG8gcmVzdGF1cmFudCBjb21taXR0ZWQgdG8gc2VydmluZyB5b3Ugb25lIHRoaW5nIGFuZCBvbmUgdGhpbmcgb25seTogbXVzaHJvb21zISBGcm9tIGZsZXNoeSBtb3JlbHMsIHRvIHRoZSB0b3hpYyBBbWFuaXRhIHBoYWxsb2lkZXMgLS0gaWYgaXQgaXMgYSBmdW5ndXMgeW91IGNhbiByZXN0IGFzc3VyZWQgaXQgaXMgYW1vbmcgdXMhIEVhY2ggb3JkZXIgaXMgcHJlcGFyZWQgd2l0aCBsb3ZlIGV2ZXJ5IGV2ZW5pbmcgYXQgMzo0MiBBTSwgYW5kIGRlbGl2ZXJlZCBieSB0aGF1bWF0dXJnaWMgbWVhbnMgdG8geW91ciBkb29yc3RvcCB0aGUgc2FtZSBkYXkhXCJcblxuICAgIGhlcm9UZXh0LmFwcGVuZENoaWxkKGhlcm9IZWFkZXIpO1xuICAgIGhlcm9UZXh0LmFwcGVuZENoaWxkKGhlcm9JbmZvKTtcblxuICAgIGxldCBoZWFkQ2hlZiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlYWRDaGVmLmNsYXNzTGlzdC5hZGQoJ2hlYWQtY2hlZicpO1xuXG4gICAgbGV0IGhlYWRDaGVmUGhvdG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBoZWFkQ2hlZlBob3RvLnNyYyA9IGhlYWRDaGVmQXNzZXQ7XG4gICAgXG4gICAgbGV0IGhlYWRDaGVmUXVvdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgXG4gICAgbGV0IGVtcGhhc2lzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZW0nKTtcbiAgICBlbXBoYXNpcy50ZXh0Q29udGVudCA9IFwiJ015IGJvZHkgcHJvZHVjZXMgY29uc3RhbnQgc3BvcmVzIGFzIHB1bmlzaG1lbnQgZm9yIHRoZSBzaW5zIEkgaGF2ZSB3cm91Z2h0LiBFYWNoIGhhcnZlc3QgYnJpbmdzIG1lIGdyZWF0IHBhaW4sIGJ1dCBhbHNvIG9uZSBzdGVwIGNsb3NlciB0byBhYnNvbHV0aW9uLiBJIGFtIGNvbW1pdHRlZCB0byBncmVhdCBmbGF2b3IgYXQgYW4gYWZmb3JkYWJsZSBwcmljZS4nXCI7XG5cbiAgICBsZXQgZW5kUXVvdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgZW5kUXVvdGUudGV4dENvbnRlbnQgPSBcIiAtIFRpYmVyaXVzIHRoZSBJbmNvcnJpZ2FibGUsIEhlYWQgQ2hlZlwiO1xuXG4gICAgaGVhZENoZWZRdW90ZS5hcHBlbmRDaGlsZChlbXBoYXNpcyk7XG4gICAgaGVhZENoZWZRdW90ZS5hcHBlbmRDaGlsZChlbmRRdW90ZSk7XG4gICAgaGVhZENoZWYuYXBwZW5kQ2hpbGQoaGVhZENoZWZQaG90byk7XG4gICAgaGVhZENoZWYuYXBwZW5kQ2hpbGQoaGVhZENoZWZRdW90ZSlcblxuICAgIG1haW4uc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgIG1haW4uc3R5bGUuanVzdGlmeUNvbnRlbnQgPSBcInNwYWNlLWV2ZW5seVwiO1xuXG4gICAgbWFpbi5hcHBlbmRDaGlsZChoZXJvVGV4dCk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChoZWFkQ2hlZik7XG59XG5leHBvcnQgZGVmYXVsdCBnZW5Ib21lOyIsImltcG9ydCBtMSBmcm9tICcuLi9hc3NldHMvbTEucG5nJztcbmltcG9ydCBtMiBmcm9tICcuLi9hc3NldHMvbTIucG5nJztcbmltcG9ydCBtMyBmcm9tICcuLi9hc3NldHMvbTMucG5nJztcbmltcG9ydCBtNCBmcm9tICcuLi9hc3NldHMvbTQucG5nJztcbmltcG9ydCBtNSBmcm9tICcuLi9hc3NldHMvbTUucG5nJztcbmltcG9ydCBtNiBmcm9tICcuLi9hc3NldHMvbTYucG5nJzs7XG5cbmNvbnN0IGdlbk1lbnUgPSBmdW5jdGlvbigpIHtcblxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpO1xuXG4gICAgbWFpbi5zdHlsZS53aWR0aCA9ICc3NXZ3JztcblxuICAgIGlmKHdpbmRvdy5pbm5lcldpZHRoIDwgMTI0MCkge1xuICAgICAgICBtYWluLnN0eWxlLmRpc3BsYXkgPSAnZmxleCdcbiAgICB9IGVsc2Uge1xuICAgICAgICBtYWluLnN0eWxlLmRpc3BsYXkgPSAnZ3JpZCc7XG4gICAgfVxuICAgIFxuICAgIG1haW4uc3R5bGUuZ3JpZFRlbXBsYXRlQ29sdW1ucyA9ICcxZnIgMWZyIDFmcic7XG4gICAgbWFpbi5zdHlsZS5ncmlkVGVtcGxhdGVSb3dzID0gJzFmciA5ZnIgOWZyIDFmcic7XG4gICAgbWFpbi5zdHlsZS5ncmlkR2FwID0gJzNweCc7XG4gICAgbWFpbi5zdHlsZS5qdXN0aWZ5SXRlbXMgPSAnY2VudGVyJztcbiAgICBtYWluLnN0eWxlLm1hcmdpbiA9ICcwIGF1dG8nO1xuXG5cbiAgICBsZXQgb3B0aW9uQXJyYXkgPSBbXTtcbiAgICBsZXQgbWVudUhlYWRlclRvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgbWVudUhlYWRlclRvcC50ZXh0Q29udGVudCA9IFwiT25seSBNdXNocm9vbXMgaGFzIGFsbCB0aGUgbXVzaHJvb21zIHlvdSBjb3VsZCBob3BlIGZvciEgT3VyIG9mZmVyaW5ncyBpbmNsdWRlOlwiXG4gICAgbGV0IG1lbnVIZWFkZXJCb3R0b20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIG1lbnVIZWFkZXJCb3R0b20udGV4dENvbnRlbnQgPSBcIi4uLiBhbmQgbW9yZSEhIVwiXG5cbiAgICBtYWluLmFwcGVuZENoaWxkKG1lbnVIZWFkZXJUb3ApO1xuXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IDY7IGkrKykge1xuICAgICAgICBsZXQgdGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0ZW1wLmNsYXNzTGlzdC5hZGQoJ29wdGlvbicpO1xuICAgICAgICBvcHRpb25BcnJheVtpXSA9IHRlbXA7XG4gICAgfVxuICAgIGZvcihsZXQgaSA9IDE7IGkgPCA3OyBpKyspIHtcbiAgICAgICAgbGV0IHRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgbGV0IHdoYXRJdElzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBzd2l0Y2goaSkge1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIHRlbXAuc3JjID0gbTE7XG4gICAgICAgICAgICAgICAgd2hhdEl0SXMudGV4dENvbnRlbnQgPSAnXCJWaXJ1bGVudCBSZWRjYXBcIic7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgdGVtcC5zcmMgPSBtMjtcbiAgICAgICAgICAgICAgICB3aGF0SXRJcy50ZXh0Q29udGVudCA9ICdcIkhhbWJ1cmdlci1TaGFwZWQgTXVzaHJvb21cIic7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDM6IFxuICAgICAgICAgICAgICAgIHRlbXAuc3JjID0gbTM7XG4gICAgICAgICAgICAgICAgd2hhdEl0SXMudGV4dENvbnRlbnQgPSAnXCJUcmVlZmxlc2hcIic7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgdGVtcC5zcmMgPSBtNDtcbiAgICAgICAgICAgICAgICB3aGF0SXRJcy50ZXh0Q29udGVudCA9ICdcIkJhZyBvZiBwYXN0YSBJIGdvdCBmcm9tIHRoZSBmcmlkZ2VcIic7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgdGVtcC5zcmMgPSBtNTtcbiAgICAgICAgICAgICAgICB3aGF0SXRJcy50ZXh0Q29udGVudCA9ICdcIkNvbW1vbiBQdWZmYmFsbFwiJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgICB0ZW1wLnNyYyA9IG02XG4gICAgICAgICAgICAgICAgd2hhdEl0SXMudGV4dENvbnRlbnQgPSAnXCJGb3VuZCB0aGVzZSBpbiB3YWxtYXJ0IHRiaFwiJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgd2hhdEl0SXMudGV4dENvbnRlbnQgPSAnXCJob3cgZGlkIHUgZ2V0IGhlcmVcIic7XG4gICAgICAgIH1cbiAgICAgICAgb3B0aW9uQXJyYXlbaS0xXS5hcHBlbmRDaGlsZCh0ZW1wKTtcbiAgICAgICAgb3B0aW9uQXJyYXlbaS0xXS5hcHBlbmRDaGlsZCh3aGF0SXRJcyk7XG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQob3B0aW9uQXJyYXlbaS0xXSk7XG4gICAgfVxuICAgIG1haW4uYXBwZW5kQ2hpbGQobWVudUhlYWRlckJvdHRvbSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdlbk1lbnU7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IGNyZWF0ZU1haW4gfSBmcm9tIFwiLi9mdW5jdGlvbnMvaW5pdFwiO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbmNyZWF0ZU1haW4oKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
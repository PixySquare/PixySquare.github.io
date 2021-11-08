exports.id = 392;
exports.ids = [392];
exports.modules = {

/***/ 32738:
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"polyfillFiles":["static/chunks/polyfills-7b08e4c67f4f1b892f4b.js"],"devFiles":[],"ampDevFiles":[],"lowPriorityFiles":["static/reDO5pUqyM8iFcXio5VFd/_buildManifest.js","static/reDO5pUqyM8iFcXio5VFd/_ssgManifest.js"],"pages":{"/":["static/chunks/webpack-277c75ec70a3d22a400d.js","static/chunks/framework-44ddc888f4db0c68c97f.js","static/chunks/main-371ddb2e66ef12e0d5ba.js","static/chunks/1bfc9850-eae60b0b27d2bad4673b.js","static/chunks/78e521c3-9f75f46d5154cc8151c1.js","static/chunks/95b64a6e-da1ebed70a95492a0d8f.js","static/chunks/d64684d8-b5f3dcf2afdc11b8c342.js","static/chunks/884-4832594c3d6f3a2ee7cf.js","static/chunks/185-7eb67db0ab6a0de9648e.js","static/chunks/pages/index-b53343620ff10ba59a22.js"],"/Blogs/Stilton":["static/chunks/webpack-277c75ec70a3d22a400d.js","static/chunks/framework-44ddc888f4db0c68c97f.js","static/chunks/main-371ddb2e66ef12e0d5ba.js","static/chunks/1bfc9850-eae60b0b27d2bad4673b.js","static/chunks/78e521c3-9f75f46d5154cc8151c1.js","static/chunks/95b64a6e-da1ebed70a95492a0d8f.js","static/chunks/d64684d8-b5f3dcf2afdc11b8c342.js","static/chunks/884-4832594c3d6f3a2ee7cf.js","static/chunks/185-7eb67db0ab6a0de9648e.js","static/chunks/pages/Blogs/Stilton-bb341976a0c07bccc07a.js"],"/_app":["static/chunks/webpack-277c75ec70a3d22a400d.js","static/chunks/framework-44ddc888f4db0c68c97f.js","static/chunks/main-371ddb2e66ef12e0d5ba.js","static/css/1555f0fa74a911332f9a.css","static/chunks/pages/_app-1337a740f72cc87c24bc.js"],"/_error":["static/chunks/webpack-277c75ec70a3d22a400d.js","static/chunks/framework-44ddc888f4db0c68c97f.js","static/chunks/main-371ddb2e66ef12e0d5ba.js","static/chunks/pages/_error-7cc035aca8c55a087310.js"]},"ampFirstPages":[]}');

/***/ }),

/***/ 19392:
/***/ (function(module) {

"use strict";
module.exports = {};

/***/ }),

/***/ 35706:
/***/ (function(module) {

"use strict";
module.exports = {"Dg":[]};

/***/ }),

/***/ 82744:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ CustomApp; }
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/next/router.js
var router = __webpack_require__(11163);
// EXTERNAL MODULE: ./node_modules/react-ga/dist/react-ga.js
var react_ga = __webpack_require__(151);
var react_ga_default = /*#__PURE__*/__webpack_require__.n(react_ga);
;// CONCATENATED MODULE: ./src/analytics/index.js

const initGA = () => {
  console.log('GA init');
  react_ga_default().initialize('UA-xxxxxxxxx-1');
};
const logPageView = () => {
  console.log(`Logging pageview for ${window.location.pathname}`);
  react_ga_default().set({
    page: window.location.pathname
  });
  react_ga_default().pageview(window.location.pathname);
};
const logEvent = (category = '', action = '') => {
  if (category && action) {
    ReactGA.event({
      category,
      action
    });
  }
};
const logException = (description = '', fatal = false) => {
  if (description) {
    ReactGA.exception({
      description,
      fatal
    });
  }
};
// EXTERNAL MODULE: ./node_modules/swiper/swiper-bundle.min.css
var swiper_bundle_min = __webpack_require__(21631);
;// CONCATENATED MODULE: ./src/pages/_app.js


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







function CustomApp({
  Component,
  pageProps
}) {
  (0,react.useEffect)(() => {
    initGA();
    logPageView();
    router.default.events.on('routeChangeComplete', logPageView);
  }, []);
  return /*#__PURE__*/jsx_runtime.jsx(Component, _objectSpread({}, pageProps));
}

/***/ }),

/***/ 44034:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56859);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class CustomDocument extends next_document__WEBPACK_IMPORTED_MODULE_1__.default {
  static async getInitialProps(ctx) {
    const initialProps = await next_document__WEBPACK_IMPORTED_MODULE_1__.default.getInitialProps(ctx);
    return _objectSpread({}, initialProps);
  }

  render() {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(next_document__WEBPACK_IMPORTED_MODULE_1__.Html, {
      lang: "en-US",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.Head, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=B612:ital,wght@0,400;0,700;1,400;1,700&family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("body", {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.Main, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.NextScript, {})]
      })]
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (CustomDocument);

/***/ }),

/***/ 82308:
/***/ (function(module) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = 82308;
module.exports = webpackEmptyContext;

/***/ }),

/***/ 14453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;
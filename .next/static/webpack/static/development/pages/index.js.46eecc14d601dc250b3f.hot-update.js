webpackHotUpdate("static/development/pages/index.js",{

/***/ "./hooks/FetchData.js":
/*!****************************!*\
  !*** ./hooks/FetchData.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var FetchData = function FetchData(url) {
  var _useSate = Object(react__WEBPACK_IMPORTED_MODULE_0__["useSate"])({
    data: null,
    loading: true
  }),
      state = _useSate[0],
      setState = _useSate[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    fetch(url).then(function (x) {
      return x.text();
    }).then(function (y) {
      return setState();
    });
  }, [url]);
  return state;
};

/* harmony default export */ __webpack_exports__["default"] = (FetchData);

/***/ })

})
//# sourceMappingURL=index.js.46eecc14d601dc250b3f.hot-update.js.map
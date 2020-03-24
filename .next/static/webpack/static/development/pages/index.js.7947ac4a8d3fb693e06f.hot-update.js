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
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    data: null,
    loading: true
  }),
      state = _useState[0],
      setState = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setState(function (state) {
      return {
        data: state.data,
        loading: true
      };
    }); // whenever this hook is run

    fetch(url).then(function (x) {
      return x.text();
    }).then(function (y) {
      return setState({
        data: y,
        loading: false
      });
    });
  }, [url]);
  return state;
};

/* harmony default export */ __webpack_exports__["default"] = (FetchData);

/***/ })

})
//# sourceMappingURL=index.js.7947ac4a8d3fb693e06f.hot-update.js.map
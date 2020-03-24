webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Prices.js":
/*!******************************!*\
  !*** ./components/Prices.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_FetchData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/FetchData */ "./hooks/FetchData.js");
var _jsxFileName = "/Users/asigari/Desktop/PROJECTS/next-js/components/Prices.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 // could send down props instead

function Prices(_ref) {
  var bpi = _ref.bpi;
  console.log(bpi);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("USD"),
      currency = _useState[0],
      setCurrency = _useState[1];

  var _useFetch = Object(_hooks_FetchData__WEBPACK_IMPORTED_MODULE_1__["default"])('http://numbersapi.com/42/trivia'),
      data = _useFetch.data,
      loading = _useFetch.loading;

  console.log(currency);
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, loading ? 'this is loading' : data), __jsx("ul", {
    className: "list-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, __jsx("li", {
    className: "list-group-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, "The current rate is ", bpi.USD.description, ":", __jsx("span", {
    className: "badge badge-primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }
  }, " ", bpi[currency].code), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }, " ", bpi[currency].rate))), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, "Pick your currency:", __jsx("select", {
    onChange: function onChange(e) {
      return setCurrency(e.target.value);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, __jsx("option", {
    value: "USD",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  }, " USD"), __jsx("option", {
    value: "GBP",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }, " GBP"), __jsx("option", {
    value: "EUR",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }, " EUR"))));
}

/* harmony default export */ __webpack_exports__["default"] = (Prices);

/***/ })

})
//# sourceMappingURL=index.js.48deb4d07c7e0f24a7fd.hot-update.js.map
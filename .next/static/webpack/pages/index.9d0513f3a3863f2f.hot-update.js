"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Page\": function() { return /* binding */ Page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var components_student_header_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/student/header-layout */ \"./src/components/student/header-layout.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _top__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./top */ \"./src/pages/top/index.js\");\n/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login */ \"./src/pages/login/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nvar Page = function(props) {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false), isUser = ref[0], setIsUser = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function() {\n        var user = JSON.parse(localStorage.getItem(\"user\"));\n        if (!user) {\n            router.push(\"/login\");\n        } else {\n            router.push(\"/top\");\n            setIsUser(true);\n        }\n    }, []);\n    return isUser ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_top__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n        fileName: \"/Users/dohung/Downloads/Arent/src/pages/index.js\",\n        lineNumber: 20,\n        columnNumber: 18\n    }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_login__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n        fileName: \"/Users/dohung/Downloads/Arent/src/pages/index.js\",\n        lineNumber: 20,\n        columnNumber: 32\n    }, _this);\n};\n_s(Page, \"cBnK2EO2rufoGdSWPrbUt0T4qxg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter\n    ];\n});\n_c = Page;\nPage.getLayout = function(page) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_student_header_layout__WEBPACK_IMPORTED_MODULE_1__.HeaderLayout, {\n        children: page\n    }, void 0, false, {\n        fileName: \"/Users/dohung/Downloads/Arent/src/pages/index.js\",\n        lineNumber: 23,\n        columnNumber: 28\n    }, _this);\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7OztBQUFnRTtBQUN6QztBQUNLO0FBQ087QUFDUztBQUNKO0FBRWpDLElBQU1PLElBQUksR0FBRyxTQUFDQyxLQUFLLEVBQUs7O0lBQzlCLElBQU1DLE1BQU0sR0FBR0gsc0RBQVMsRUFBRTtJQUMxQixJQUE0QkQsR0FBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssQ0FBQyxFQUFwQ0ssTUFBTSxHQUFlTCxHQUFlLEdBQTlCLEVBQUVNLFNBQVMsR0FBSU4sR0FBZSxHQUFuQjtJQUN4QkQsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2YsSUFBTVEsSUFBSSxHQUFHQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0MsWUFBWSxDQUFDQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDSixJQUFJLEVBQUU7WUFDVkgsTUFBTSxDQUFDUSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDdEIsTUFBTTtZQUNOUixNQUFNLENBQUNRLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwQk4sU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2hCO0tBQ0QsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNQLE9BQU9ELE1BQU0saUJBQUcsOERBQUNSLDRDQUFPOzs7O2FBQUcsaUJBQUcsOERBQUNDLDhDQUFZOzs7O2FBQUcsQ0FBQztDQUMvQyxDQUFDO0dBYldJLElBQUk7O1FBQ0RELGtEQUFTOzs7QUFEWkMsS0FBQUEsSUFBSTtBQWVqQkEsSUFBSSxDQUFDVyxTQUFTLEdBQUcsU0FBQ0MsSUFBSTt5QkFBSyw4REFBQ25CLDBFQUFZO2tCQUFFbUIsSUFBSTs7Ozs7YUFBZ0I7Q0FBQSxDQUFDO0FBRS9ELCtEQUFlWixJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzPzQwODAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSGVhZGVyTGF5b3V0IH0gZnJvbSAnY29tcG9uZW50cy9zdHVkZW50L2hlYWRlci1sYXlvdXQnO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBUb3BQYWdlIGZyb20gJy4vdG9wJztcbmltcG9ydCBMb2dpblN0dWRlbnQgZnJvbSAnLi9sb2dpbic7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5leHBvcnQgY29uc3QgUGFnZSA9IChwcm9wcykgPT4ge1xuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblx0Y29uc3QgW2lzVXNlciwgc2V0SXNVc2VyXSA9IHVzZVN0YXRlKGZhbHNlKTtcblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRjb25zdCB1c2VyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpKTtcblx0XHRpZiAoIXVzZXIpIHtcblx0XHRcdHJvdXRlci5wdXNoKCcvbG9naW4nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cm91dGVyLnB1c2goJy90b3AnKTtcblx0XHRcdHNldElzVXNlcih0cnVlKTtcblx0XHR9XG5cdH0sIFtdKTtcblx0cmV0dXJuIGlzVXNlciA/IDxUb3BQYWdlIC8+IDogPExvZ2luU3R1ZGVudCAvPjtcbn07XG5cblBhZ2UuZ2V0TGF5b3V0ID0gKHBhZ2UpID0+IDxIZWFkZXJMYXlvdXQ+e3BhZ2V9PC9IZWFkZXJMYXlvdXQ+O1xuXG5leHBvcnQgZGVmYXVsdCBQYWdlO1xuIl0sIm5hbWVzIjpbIkhlYWRlckxheW91dCIsIl8iLCJUb3BQYWdlIiwiTG9naW5TdHVkZW50IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJQYWdlIiwicHJvcHMiLCJyb3V0ZXIiLCJpc1VzZXIiLCJzZXRJc1VzZXIiLCJ1c2VyIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInB1c2giLCJnZXRMYXlvdXQiLCJwYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.js\n"));

/***/ })

});
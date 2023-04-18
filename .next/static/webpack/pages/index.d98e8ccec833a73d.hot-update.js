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

/***/ "./src/pages/top/index.js":
/*!********************************!*\
  !*** ./src/pages/top/index.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TopPage\": function() { return /* binding */ TopPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var components_student_header_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/student/header-layout */ \"./src/components/student/header-layout.js\");\n/* harmony import */ var components_student_footer_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/student/footer-layout */ \"./src/components/student/footer-layout.js\");\n/* harmony import */ var assets_images_d01_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/images/d01.png */ \"./src/assets/images/d01.png\");\n/* harmony import */ var assets_images_logoVertical_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/images/logoVertical.png */ \"./src/assets/images/logoVertical.png\");\n/* harmony import */ var components_chart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/chart */ \"./src/components/chart.js\");\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\nvar options = {\n    chart: {\n        height: 350,\n        width: \"100%\",\n        type: \"line\",\n        dropShadow: {\n            enabled: true,\n            color: \"#000\",\n            top: 18,\n            left: 7,\n            blur: 10,\n            opacity: 0.2\n        },\n        toolbar: {\n            show: false\n        },\n        yaxis: {\n            show: false,\n            labels: {\n                show: false\n            },\n            axisBorder: {\n                show: false\n            },\n            axisTicks: {\n                show: false\n            },\n            crosshairs: {\n                show: false\n            },\n            tooltip: {\n                enabled: false\n            }\n        }\n    }\n};\nvar series = [\n    {\n        name: \"Temperature in Fahrenheit\",\n        data: [\n            43,\n            53,\n            50,\n            57\n        ]\n    }, \n];\nvar TopPage = function(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"TOP\"\n                }, void 0, false, {\n                    fileName: \"/Users/dohung/Downloads/Arent/src/pages/top/index.js\",\n                    lineNumber: 59,\n                    columnNumber: 5\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/dohung/Downloads/Arent/src/pages/top/index.js\",\n                lineNumber: 58,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Box, {\n                component: \"main\",\n                sx: {\n                    flexGrow: 1,\n                    pt: 4\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Container, {\n                    maxWidth: false,\n                    style: {\n                        padding: 0\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Box, {\n                            display: \"flex\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Box, {\n                                    sx: {\n                                        position: \"relative\",\n                                        backgroundImage: \"url(\".concat(assets_images_d01_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"].src, \")\"),\n                                        backgroundSize: \"cover\",\n                                        backgroundPosition: \"top-right\",\n                                        backgroundRepeat: \"no-repeat\",\n                                        width: \"36%\",\n                                        \"@media (max-width: 600px)\": {\n                                            backgroundImage: \"url(\".concat(assets_images_d01_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"].src, \")\"),\n                                            backgroundSize: \"cover\",\n                                            backgroundPosition: \"center\",\n                                            width: \"100%\"\n                                        },\n                                        \"@media (max-width: 1000px)\": {\n                                            backgroundSize: \"cover\",\n                                            backgroundPosition: \"center\"\n                                        }\n                                    },\n                                    p: 0,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Box, {\n                                            sx: {\n                                                position: \"absolute\",\n                                                inset: 0,\n                                                backgroundColor: \"rgba(0,0,0,0.45)\"\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"/Users/dohung/Downloads/Arent/src/pages/top/index.js\",\n                                            lineNumber: 92,\n                                            columnNumber: 8\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Box, {\n                                            sx: {\n                                                display: \"flex\",\n                                                flexDirection: \"column\",\n                                                alignItems: \"center\",\n                                                position: \"relative\",\n                                                zIndex: 2\n                                            },\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Box, {\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                        src: assets_images_logoVertical_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"].src,\n                                                        alt: \"Banner\",\n                                                        style: {\n                                                            width: \"50%\",\n                                                            height: \"320px\",\n                                                            objectFit: \"contain\",\n                                                            position: \"relative\",\n                                                            left: \"25%\"\n                                                        }\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/dohung/Downloads/Arent/src/pages/top/index.js\",\n                                                        lineNumber: 109,\n                                                        columnNumber: 10\n                                                    }, _this)\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/dohung/Downloads/Arent/src/pages/top/index.js\",\n                                                    lineNumber: 108,\n                                                    columnNumber: 9\n                                                }, _this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Box, {\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Typography, {\n                                                        align: \"center\",\n                                                        sx: {\n                                                            color: \"#fff\",\n                                                            fontWeight: 400,\n                                                            fontSize: \"18px\",\n                                                            position: \"absolute\",\n                                                            top: \"46%\",\n                                                            left: \"40%\",\n                                                            \"@media (max-width: 600px)\": {\n                                                                paddingLeft: 1,\n                                                                paddingRight: 1,\n                                                                fontSize: 20\n                                                            }\n                                                        },\n                                                        children: [\n                                                            \"05/21\",\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                                style: {\n                                                                    fontWeight: 400,\n                                                                    fontSize: \"25px\"\n                                                                },\n                                                                children: \" 75%\"\n                                                            }, void 0, false, {\n                                                                fileName: \"/Users/dohung/Downloads/Arent/src/pages/top/index.js\",\n                                                                lineNumber: 133,\n                                                                columnNumber: 11\n                                                            }, _this)\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"/Users/dohung/Downloads/Arent/src/pages/top/index.js\",\n                                                        lineNumber: 116,\n                                                        columnNumber: 10\n                                                    }, _this)\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/dohung/Downloads/Arent/src/pages/top/index.js\",\n                                                    lineNumber: 115,\n                                                    columnNumber: 9\n                                                }, _this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/dohung/Downloads/Arent/src/pages/top/index.js\",\n                                            lineNumber: 99,\n                                            columnNumber: 8\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/dohung/Downloads/Arent/src/pages/top/index.js\",\n                                    lineNumber: 71,\n                                    columnNumber: 7\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Box, {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_chart__WEBPACK_IMPORTED_MODULE_6__.Chart, {\n                                        options: options,\n                                        series: series,\n                                        type: \"line\",\n                                        height: 350\n                                    }, void 0, false, {\n                                        fileName: \"/Users/dohung/Downloads/Arent/src/pages/top/index.js\",\n                                        lineNumber: 139,\n                                        columnNumber: 8\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/dohung/Downloads/Arent/src/pages/top/index.js\",\n                                    lineNumber: 138,\n                                    columnNumber: 7\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/dohung/Downloads/Arent/src/pages/top/index.js\",\n                            lineNumber: 70,\n                            columnNumber: 6\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_student_footer_layout__WEBPACK_IMPORTED_MODULE_3__.FooterLayout, {}, void 0, false, {\n                            fileName: \"/Users/dohung/Downloads/Arent/src/pages/top/index.js\",\n                            lineNumber: 143,\n                            columnNumber: 6\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/dohung/Downloads/Arent/src/pages/top/index.js\",\n                    lineNumber: 68,\n                    columnNumber: 5\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/dohung/Downloads/Arent/src/pages/top/index.js\",\n                lineNumber: 61,\n                columnNumber: 4\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_c = TopPage;\nTopPage.getLayout = function(page) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_student_header_layout__WEBPACK_IMPORTED_MODULE_2__.HeaderLayout, {\n        children: page\n    }, void 0, false, {\n        fileName: \"/Users/dohung/Downloads/Arent/src/pages/top/index.js\",\n        lineNumber: 150,\n        columnNumber: 31\n    }, _this);\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (TopPage);\nvar _c;\n$RefreshReg$(_c, \"TopPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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d0NBQUNDLE9BQU8sRUFBRUEsT0FBTzt3Q0FBRW9CLE1BQU0sRUFBRUEsTUFBTTt3Q0FBRWhCLElBQUksRUFBQyxNQUFNO3dDQUFDRixNQUFNLEVBQUUsR0FBRzs7Ozs7NkNBQUk7Ozs7O3lDQUMvRDs7Ozs7O2lDQUNEO3NDQUVOLDhEQUFDTiwwRUFBWTs7OztpQ0FBRzs7Ozs7O3lCQUNMOzs7OztxQkFDUDs7b0JBQ0osQ0FDRjtDQUNGLENBQUM7QUE3RlcyQixLQUFBQSxPQUFPO0FBK0ZwQkEsT0FBTyxDQUFDZ0MsU0FBUyxHQUFHLFNBQUNDLElBQUk7eUJBQUssOERBQUMvRCwwRUFBWTtrQkFBRStELElBQUk7Ozs7O2FBQWdCO0NBQUEsQ0FBQztBQUVsRSwrREFBZWpDLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvdG9wL2luZGV4LmpzP2ZmN2EiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCB7IEJveCwgQ29udGFpbmVyLCBMaW5rIH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XG5pbXBvcnQgeyBIZWFkZXJMYXlvdXQgfSBmcm9tICdjb21wb25lbnRzL3N0dWRlbnQvaGVhZGVyLWxheW91dCc7XG5pbXBvcnQgeyBUeXBvZ3JhcGh5LCBCdXR0b24gfSBmcm9tICdAbXVpL21hdGVyaWFsJztcbmltcG9ydCB7IEZvb3RlckxheW91dCB9IGZyb20gJ2NvbXBvbmVudHMvc3R1ZGVudC9mb290ZXItbGF5b3V0JztcbmltcG9ydCBCYW5uZXIgZnJvbSAnYXNzZXRzL2ltYWdlcy9kMDEucG5nJztcbmltcG9ydCBsb2dvVmVydGljYWwgZnJvbSAnYXNzZXRzL2ltYWdlcy9sb2dvVmVydGljYWwucG5nJztcbmltcG9ydCB7IENoYXJ0IH0gZnJvbSAnY29tcG9uZW50cy9jaGFydCc7XG5cbmNvbnN0IG9wdGlvbnMgPSB7XG5cdGNoYXJ0OiB7XG5cdFx0aGVpZ2h0OiAzNTAsXG5cdFx0d2lkdGg6ICcxMDAlJyxcblx0XHR0eXBlOiAnbGluZScsXG5cdFx0ZHJvcFNoYWRvdzoge1xuXHRcdFx0ZW5hYmxlZDogdHJ1ZSxcblx0XHRcdGNvbG9yOiAnIzAwMCcsXG5cdFx0XHR0b3A6IDE4LFxuXHRcdFx0bGVmdDogNyxcblx0XHRcdGJsdXI6IDEwLFxuXHRcdFx0b3BhY2l0eTogMC4yLFxuXHRcdH0sXG5cdFx0dG9vbGJhcjoge1xuXHRcdFx0c2hvdzogZmFsc2UsXG5cdFx0fSxcblx0XHR5YXhpczoge1xuICAgICAgc2hvdzogZmFsc2UsXG4gICAgICBsYWJlbHM6IHtcbiAgICAgICAgc2hvdzogZmFsc2UsXG4gICAgICB9LFxuICAgICAgYXhpc0JvcmRlcjoge1xuICAgICAgICBzaG93OiBmYWxzZSxcbiAgICAgIH0sXG4gICAgICBheGlzVGlja3M6IHtcbiAgICAgICAgc2hvdzogZmFsc2UsXG4gICAgICB9LFxuICAgICAgY3Jvc3NoYWlyczoge1xuICAgICAgICBzaG93OiBmYWxzZSxcbiAgICAgIH0sXG4gICAgICB0b29sdGlwOiB7XG4gICAgICAgIGVuYWJsZWQ6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgXG4gICAgfSxcblx0fSxcbn07XG5cbmNvbnN0IHNlcmllcyA9IFtcblx0e1xuXHRcdG5hbWU6ICdUZW1wZXJhdHVyZSBpbiBGYWhyZW5oZWl0JywgLy93aWxsIGJlIGRpc3BsYXllZCBvbiB0aGUgeS1heGlzXG5cdFx0ZGF0YTogWzQzLCA1MywgNTAsIDU3XSxcblx0fSxcbl07XG5cbmV4cG9ydCBjb25zdCBUb3BQYWdlID0gKHByb3BzKSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxIZWFkPlxuXHRcdFx0XHQ8dGl0bGU+VE9QPC90aXRsZT5cblx0XHRcdDwvSGVhZD5cblx0XHRcdDxCb3hcblx0XHRcdFx0Y29tcG9uZW50PVwibWFpblwiXG5cdFx0XHRcdHN4PXt7XG5cdFx0XHRcdFx0ZmxleEdyb3c6IDEsXG5cdFx0XHRcdFx0cHQ6IDQsXG5cdFx0XHRcdH19XG5cdFx0XHQ+XG5cdFx0XHRcdDxDb250YWluZXIgbWF4V2lkdGg9e2ZhbHNlfSBzdHlsZT17eyBwYWRkaW5nOiAwIH19PlxuXHRcdFx0XHRcdHsvKiBUb3AgUGFnZSBDb3ZlciAqL31cblx0XHRcdFx0XHQ8Qm94IGRpc3BsYXk9eydmbGV4J30+XG5cdFx0XHRcdFx0XHQ8Qm94XG5cdFx0XHRcdFx0XHRcdHN4PXt7XG5cdFx0XHRcdFx0XHRcdFx0cG9zaXRpb246ICdyZWxhdGl2ZScsXG5cdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZEltYWdlOiBgdXJsKCR7QmFubmVyLnNyY30pYCxcblx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJyxcblx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kUG9zaXRpb246ICd0b3AtcmlnaHQnLFxuXHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmRSZXBlYXQ6ICduby1yZXBlYXQnLFxuXHRcdFx0XHRcdFx0XHRcdHdpZHRoOiAnMzYlJyxcblx0XHRcdFx0XHRcdFx0XHQnQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSc6IHtcblx0XHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmRJbWFnZTogYHVybCgke0Jhbm5lci5zcmN9KWAsXG5cdFx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJyxcblx0XHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmRQb3NpdGlvbjogJ2NlbnRlcicsXG5cdFx0XHRcdFx0XHRcdFx0XHR3aWR0aDogJzEwMCUnLFxuXHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0J0BtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpJzoge1xuXHRcdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZFNpemU6ICdjb3ZlcicsXG5cdFx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kUG9zaXRpb246ICdjZW50ZXInLFxuXHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdHA9ezB9XG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdDxCb3hcblx0XHRcdFx0XHRcdFx0XHRzeD17e1xuXHRcdFx0XHRcdFx0XHRcdFx0cG9zaXRpb246ICdhYnNvbHV0ZScsXG5cdFx0XHRcdFx0XHRcdFx0XHRpbnNldDogMCxcblx0XHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMCwwLDAsMC40NSknLFxuXHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDxCb3hcblx0XHRcdFx0XHRcdFx0XHRzeD17e1xuXHRcdFx0XHRcdFx0XHRcdFx0ZGlzcGxheTogJ2ZsZXgnLFxuXHRcdFx0XHRcdFx0XHRcdFx0ZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG5cdFx0XHRcdFx0XHRcdFx0XHRhbGlnbkl0ZW1zOiAnY2VudGVyJyxcblx0XHRcdFx0XHRcdFx0XHRcdHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuXHRcdFx0XHRcdFx0XHRcdFx0ekluZGV4OiAyLFxuXHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHQ8Qm94PlxuXHRcdFx0XHRcdFx0XHRcdFx0PGltZ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRzcmM9e2xvZ29WZXJ0aWNhbC5zcmN9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGFsdD1cIkJhbm5lclwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7IHdpZHRoOiAnNTAlJywgaGVpZ2h0OiAnMzIwcHgnLCBvYmplY3RGaXQ6ICdjb250YWluJywgcG9zaXRpb246ICdyZWxhdGl2ZScsIGxlZnQ6ICcyNSUnIH19XG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdDwvQm94PlxuXHRcdFx0XHRcdFx0XHRcdDxCb3g+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8VHlwb2dyYXBoeVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRhbGlnbj1cImNlbnRlclwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHN4PXt7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y29sb3I6ICcjZmZmJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmb250V2VpZ2h0OiA0MDAsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Zm9udFNpemU6ICcxOHB4Jyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwb3NpdGlvbjogJ2Fic29sdXRlJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0b3A6ICc0NiUnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGxlZnQ6ICc0MCUnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCdAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpJzoge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cGFkZGluZ0xlZnQ6IDEsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwYWRkaW5nUmlnaHQ6IDEsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmb250U2l6ZTogMjAsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0MDUvMjFcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gc3R5bGU9e3sgZm9udFdlaWdodDogNDAwLCBmb250U2l6ZTogJzI1cHgnIH19PiA3NSU8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L1R5cG9ncmFwaHk+XG5cdFx0XHRcdFx0XHRcdFx0PC9Cb3g+XG5cdFx0XHRcdFx0XHRcdDwvQm94PlxuXHRcdFx0XHRcdFx0PC9Cb3g+XG5cdFx0XHRcdFx0XHQ8Qm94PlxuXHRcdFx0XHRcdFx0XHQ8Q2hhcnQgb3B0aW9ucz17b3B0aW9uc30gc2VyaWVzPXtzZXJpZXN9IHR5cGU9XCJsaW5lXCIgaGVpZ2h0PXszNTB9IC8+XG5cdFx0XHRcdFx0XHQ8L0JveD5cblx0XHRcdFx0XHQ8L0JveD5cblxuXHRcdFx0XHRcdDxGb290ZXJMYXlvdXQgLz5cblx0XHRcdFx0PC9Db250YWluZXI+XG5cdFx0XHQ8L0JveD5cblx0XHQ8Lz5cblx0KTtcbn07XG5cblRvcFBhZ2UuZ2V0TGF5b3V0ID0gKHBhZ2UpID0+IDxIZWFkZXJMYXlvdXQ+e3BhZ2V9PC9IZWFkZXJMYXlvdXQ+O1xuXG5leHBvcnQgZGVmYXVsdCBUb3BQYWdlO1xuIl0sIm5hbWVzIjpbIkhlYWQiLCJCb3giLCJDb250YWluZXIiLCJMaW5rIiwiSGVhZGVyTGF5b3V0IiwiVHlwb2dyYXBoeSIsIkJ1dHRvbiIsIkZvb3RlckxheW91dCIsIkJhbm5lciIsImxvZ29WZXJ0aWNhbCIsIkNoYXJ0Iiwib3B0aW9ucyIsImNoYXJ0IiwiaGVpZ2h0Iiwid2lkdGgiLCJ0eXBlIiwiZHJvcFNoYWRvdyIsImVuYWJsZWQiLCJjb2xvciIsInRvcCIsImxlZnQiLCJibHVyIiwib3BhY2l0eSIsInRvb2xiYXIiLCJzaG93IiwieWF4aXMiLCJsYWJlbHMiLCJheGlzQm9yZGVyIiwiYXhpc1RpY2tzIiwiY3Jvc3NoYWlycyIsInRvb2x0aXAiLCJzZXJpZXMiLCJuYW1lIiwiZGF0YSIsIlRvcFBhZ2UiLCJwcm9wcyIsInRpdGxlIiwiY29tcG9uZW50Iiwic3giLCJmbGV4R3JvdyIsInB0IiwibWF4V2lkdGgiLCJzdHlsZSIsInBhZGRpbmciLCJkaXNwbGF5IiwicG9zaXRpb24iLCJiYWNrZ3JvdW5kSW1hZ2UiLCJzcmMiLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRQb3NpdGlvbiIsImJhY2tncm91bmRSZXBlYXQiLCJwIiwiaW5zZXQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsInpJbmRleCIsImltZyIsImFsdCIsIm9iamVjdEZpdCIsImFsaWduIiwiZm9udFdlaWdodCIsImZvbnRTaXplIiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nUmlnaHQiLCJzcGFuIiwiZ2V0TGF5b3V0IiwicGFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/top/index.js\n"));

/***/ })

});
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

/***/ "./src/components/imageOverlay.js":
/*!****************************************!*\
  !*** ./src/components/imageOverlay.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ImageOverlay\": function() { return /* binding */ ImageOverlay; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/styles */ \"./node_modules/@mui/styles/index.js\");\n/* harmony import */ var assets_images_icon_01_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/images/icon-01.png */ \"./src/assets/images/icon-01.png\");\n/* harmony import */ var assets_images_Bg_01_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/images/Bg-01.png */ \"./src/assets/images/Bg-01.png\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nvar ImageOverlayBox = (0,_mui_styles__WEBPACK_IMPORTED_MODULE_3__.styled)(\"div\")(function(param) {\n    var theme = param.theme;\n    return {\n        position: \"relative\"\n    };\n});\n_c = ImageOverlayBox;\nvar useStyles = (0,_mui_styles__WEBPACK_IMPORTED_MODULE_3__.makeStyles)({\n    overlay: {\n        position: \"absolute\",\n        top: 0,\n        left: 0,\n        width: \"100%\",\n        height: \"100%\",\n        opacity: 0.5,\n        zIndex: 1\n    }\n});\nvar ImageOverlay = function() {\n    _s();\n    var classes = useStyles();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ImageOverlayBox, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: assets_images_icon_01_png__WEBPACK_IMPORTED_MODULE_1__[\"default\"].src,\n                alt: \"Original image\"\n            }, void 0, false, {\n                fileName: \"/Users/dohung/Downloads/Arent/src/components/imageOverlay.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: classes.overlay,\n                style: {\n                    backgroundImage: \"url(\".concat(assets_images_Bg_01_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"].src, \")\"),\n                    backgroundRepeat: \"no-repeat\"\n                }\n            }, void 0, false, {\n                fileName: \"/Users/dohung/Downloads/Arent/src/components/imageOverlay.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dohung/Downloads/Arent/src/components/imageOverlay.js\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, _this);\n};\n_s(ImageOverlay, \"8g5FPXexvSEOsxdmU7HicukHGqY=\", false, function() {\n    return [\n        useStyles\n    ];\n});\n_c1 = ImageOverlay;\nvar _c, _c1;\n$RefreshReg$(_c, \"ImageOverlayBox\");\n$RefreshReg$(_c1, \"ImageOverlay\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9pbWFnZU92ZXJsYXkuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7OztBQUE2RDtBQUNmO0FBQ0Q7QUFFN0MsSUFBTUssZUFBZSxHQUFHSixtREFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQUdLLEtBQUssU0FBTEEsS0FBSztXQUFRO1FBQ3JEQyxRQUFRLEVBQUUsVUFBVTtLQUNwQjtDQUFDLENBQUM7QUFGR0YsS0FBQUEsZUFBZTtBQUlyQixJQUFNRyxTQUFTLEdBQUdSLHVEQUFVLENBQUM7SUFDM0JTLE9BQU8sRUFBRTtRQUNQRixRQUFRLEVBQUUsVUFBVTtRQUNwQkcsR0FBRyxFQUFFLENBQUM7UUFDTkMsSUFBSSxFQUFFLENBQUM7UUFDUEMsS0FBSyxFQUFFLE1BQU07UUFDYkMsTUFBTSxFQUFFLE1BQU07UUFDZEMsT0FBTyxFQUFFLEdBQUc7UUFDWkMsTUFBTSxFQUFFLENBQUM7S0FDVjtDQUNGLENBQUM7QUFFSyxJQUFNQyxZQUFZLEdBQUcsV0FBTTs7SUFDaEMsSUFBTUMsT0FBTyxHQUFHVCxTQUFTLEVBQUU7SUFDM0IscUJBQ0UsOERBQUNILGVBQWU7OzBCQUNkLDhEQUFDYSxLQUFHO2dCQUFDQyxHQUFHLEVBQUVoQixxRUFBUztnQkFBRWlCLEdBQUcsRUFBQyxnQkFBZ0I7Ozs7O3FCQUFHOzBCQUM1Qyw4REFBQ0MsS0FBRztnQkFBQ0MsU0FBUyxFQUFFTCxPQUFPLENBQUNSLE9BQU87Z0JBQUVjLEtBQUssRUFBRTtvQkFBRUMsZUFBZSxFQUFFLE1BQUssQ0FBYSxNQUFDLENBQVpwQixtRUFBVSxFQUFDLEdBQUMsQ0FBQztvQkFBQ3FCLGdCQUFnQixFQUFFLFdBQVc7aUJBQUc7Ozs7O3FCQUFROzs7Ozs7YUFDeEcsQ0FDbkI7Q0FDRjtHQVJZVCxZQUFZOztRQUNQUixTQUFTOzs7QUFEZFEsTUFBQUEsWUFBWSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9pbWFnZU92ZXJsYXkuanM/MGRjMSJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IG1ha2VTdHlsZXMsIHN0eWxlZCwgd2l0aFN0eWxlcyB9IGZyb20gJ0BtdWkvc3R5bGVzJztcbmltcG9ydCBpY29uMSBmcm9tICdhc3NldHMvaW1hZ2VzL2ljb24tMDEucG5nJztcbmltcG9ydCBiR0ljb24gZnJvbSAnYXNzZXRzL2ltYWdlcy9CZy0wMS5wbmcnO1xuXG5jb25zdCBJbWFnZU92ZXJsYXlCb3ggPSBzdHlsZWQoJ2RpdicpKCh7IHRoZW1lIH0pID0+ICh7XG5cdHBvc2l0aW9uOiAncmVsYXRpdmUnXG59KSk7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xuICBvdmVybGF5OiB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgdG9wOiAwLFxuICAgIGxlZnQ6IDAsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICBvcGFjaXR5OiAwLjUsXG4gICAgekluZGV4OiAxLFxuICB9XG59KTtcblxuZXhwb3J0IGNvbnN0IEltYWdlT3ZlcmxheSA9ICgpID0+IHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICByZXR1cm4gKFxuICAgIDxJbWFnZU92ZXJsYXlCb3ggPlxuICAgICAgPGltZyBzcmM9e2ljb24xLnNyY30gYWx0PVwiT3JpZ2luYWwgaW1hZ2VcIiAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMub3ZlcmxheX0gc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7YkdJY29uLnNyY30pYCxiYWNrZ3JvdW5kUmVwZWF0OiAnbm8tcmVwZWF0JywgfX0+PC9kaXY+XG4gICAgPC9JbWFnZU92ZXJsYXlCb3g+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJtYWtlU3R5bGVzIiwic3R5bGVkIiwid2l0aFN0eWxlcyIsImljb24xIiwiYkdJY29uIiwiSW1hZ2VPdmVybGF5Qm94IiwidGhlbWUiLCJwb3NpdGlvbiIsInVzZVN0eWxlcyIsIm92ZXJsYXkiLCJ0b3AiLCJsZWZ0Iiwid2lkdGgiLCJoZWlnaHQiLCJvcGFjaXR5IiwiekluZGV4IiwiSW1hZ2VPdmVybGF5IiwiY2xhc3NlcyIsImltZyIsInNyYyIsImFsdCIsImRpdiIsImNsYXNzTmFtZSIsInN0eWxlIiwiYmFja2dyb3VuZEltYWdlIiwiYmFja2dyb3VuZFJlcGVhdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/imageOverlay.js\n"));

/***/ })

});
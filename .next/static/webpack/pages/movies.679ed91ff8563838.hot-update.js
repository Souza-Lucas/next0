"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/movies",{

/***/ "./pages/movies.js":
/*!*************************!*\
  !*** ./pages/movies.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\nvar _this = undefined;\n\nvar Movies = function(param) {\n    var data = param.data;\n    var _this1 = _this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: data.Search.map(function(movie, index) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            movie.Title,\n                            \" --- \",\n                            movie.Year,\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/home/lucas/Documentos/GitHub/next0/pages/movies.js\",\n                                lineNumber: 23,\n                                columnNumber: 68\n                            }, _this1),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Image, {\n                                width: 200,\n                                height: 200,\n                                src: movie.Poster\n                            }, void 0, false, {\n                                fileName: \"/home/lucas/Documentos/GitHub/next0/pages/movies.js\",\n                                lineNumber: 24,\n                                columnNumber: 37\n                            }, _this1)\n                        ]\n                    }, index, true, {\n                        fileName: \"/home/lucas/Documentos/GitHub/next0/pages/movies.js\",\n                        lineNumber: 22,\n                        columnNumber: 33\n                    }, _this1);\n                })\n            }, void 0, false, {\n                fileName: \"/home/lucas/Documentos/GitHub/next0/pages/movies.js\",\n                lineNumber: 17,\n                columnNumber: 17\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/home/lucas/Documentos/GitHub/next0/pages/movies.js\",\n            lineNumber: 16,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/home/lucas/Documentos/GitHub/next0/pages/movies.js\",\n        lineNumber: 15,\n        columnNumber: 9\n    }, _this);\n};\n_c = Movies;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Movies);\nvar _c;\n$RefreshReg$(_c, \"Movies\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9tb3ZpZXMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBWUEsSUFBTUEsTUFBTSxHQUFHLGdCQUFVO1FBQVJDLElBQUksU0FBSkEsSUFBSTs7SUFDakIscUJBQ0ksOERBQUNDLEtBQUc7a0JBQ0EsNEVBQUNBLEtBQUc7c0JBQ0EsNEVBQUNDLElBQUU7MEJBRUtGLElBQUksQ0FBQ0csTUFBTSxDQUFDQyxHQUFHLENBQUMsU0FBQ0MsS0FBSyxFQUFDQyxLQUFLLEVBQUk7b0JBRTVCLHFCQUNJLDhEQUFDQyxJQUFFOzs0QkFDRUYsS0FBSyxDQUFDRyxLQUFLOzRCQUFDLE9BQUs7NEJBQUNILEtBQUssQ0FBQ0ksSUFBSTs0QkFBQyxHQUFDOzBDQUFBLDhEQUFDQyxJQUFFOzs7O3NDQUFFOzBDQUNwQyw4REFBQ0MsS0FBSztnQ0FDTkMsS0FBSyxFQUFFLEdBQUc7Z0NBQ1ZDLE1BQU0sRUFBRSxHQUFHO2dDQUNYQyxHQUFHLEVBQUVULEtBQUssQ0FBQ1UsTUFBTTs7Ozs7c0NBQUk7O3VCQUxoQlQsS0FBSzs7Ozs4QkFNVCxDQUNSO2lCQUVKLENBQUM7Ozs7O3FCQUVMOzs7OztpQkFFSDs7Ozs7YUFDSixDQUNSO0NBRUw7QUExQktQLEtBQUFBLE1BQU07O0FBNEJaLCtEQUFlQSxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbW92aWVzLmpzP2FmNTQiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KXtcblxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cDovL3d3dy5vbWRiYXBpLmNvbS8/YXBpa2V5PTllZGI3MDE4JnM9YmFnZGFkJnk9MjAxMVwiKTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9wczp7XG4gICAgICAgICAgICBkYXRhXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmNvbnN0IE1vdmllcyA9ICh7ZGF0YX0pPT57XG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuU2VhcmNoLm1hcCgobW92aWUsaW5kZXgpPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge21vdmllLlRpdGxlfSAtLS0ge21vdmllLlllYXJ9IDxici8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MjAwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsyMDB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e21vdmllLlBvc3RlciB9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L3VsPlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcblxufSAgIFxuXG5leHBvcnQgZGVmYXVsdCBNb3ZpZXM7Il0sIm5hbWVzIjpbIk1vdmllcyIsImRhdGEiLCJkaXYiLCJ1bCIsIlNlYXJjaCIsIm1hcCIsIm1vdmllIiwiaW5kZXgiLCJsaSIsIlRpdGxlIiwiWWVhciIsImJyIiwiSW1hZ2UiLCJ3aWR0aCIsImhlaWdodCIsInNyYyIsIlBvc3RlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/movies.js\n");

/***/ })

});
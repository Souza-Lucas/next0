"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/movies3",{

/***/ "./pages/movies3.js":
/*!**************************!*\
  !*** ./pages/movies3.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TheMovies\": function() { return /* binding */ TheMovies; },\n/* harmony export */   \"default\": function() { return /* binding */ Movies3; }\n/* harmony export */ });\n/* harmony import */ var _home_lucas_Documentos_GitHub_next0_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_lucas_Documentos_GitHub_next0_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_lucas_Documentos_GitHub_next0_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Movies3() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), url = ref[0], setUrl = ref[1];\n    var ref1 = (0,swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(url, theFetcher), data = ref1.data, error = ref1.error;\n    var onClickHandler = function(e) {\n        e.preventDefault();\n        var keyword = document.getElementById(\"field-movie\").value;\n        if (url === \"\") setUrl(\"http://www.omdbapi.com/?apikey=a85a78d&s=\".concat(keyword));\n        else setUrl(\"\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                        id: \"field-movie\",\n                        type: \"text\"\n                    }, void 0, false, {\n                        fileName: \"/home/lucas/Documentos/GitHub/next0/pages/movies3.js\",\n                        lineNumber: 24,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        onClick: onClickHandler,\n                        children: \"Buscar\"\n                    }, void 0, false, {\n                        fileName: \"/home/lucas/Documentos/GitHub/next0/pages/movies3.js\",\n                        lineNumber: 25,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/lucas/Documentos/GitHub/next0/pages/movies3.js\",\n                lineNumber: 23,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(TheMovies, {\n                data: error ? {\n                    error: \"Erro na pesquisa\"\n                } : data ? data : {\n                    Search: \"\"\n                },\n                show: url !== \"\"\n            }, void 0, false, {\n                fileName: \"/home/lucas/Documentos/GitHub/next0/pages/movies3.js\",\n                lineNumber: 27,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/lucas/Documentos/GitHub/next0/pages/movies3.js\",\n        lineNumber: 22,\n        columnNumber: 9\n    }, this);\n};\n_s(Movies3, \"ynBEaIz6npTcFjs1lbtjg8BSniI=\", false, function() {\n    return [\n        swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = Movies3;\nfunction theFetcher(url) {\n    return _theFetcher.apply(this, arguments);\n}\nfunction _theFetcher() {\n    _theFetcher = _asyncToGenerator(_home_lucas_Documentos_GitHub_next0_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(url) {\n        var res, json;\n        return _home_lucas_Documentos_GitHub_next0_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    if (!(url === null || url === \"\")) {\n                        _ctx.next = 2;\n                        break;\n                    }\n                    return _ctx.abrupt(\"return\", {\n                        Search: \"\"\n                    });\n                case 2:\n                    _ctx.next = 4;\n                    return fetch(url);\n                case 4:\n                    res = _ctx.sent;\n                    _ctx.next = 7;\n                    return res.json();\n                case 7:\n                    json = _ctx.sent;\n                    return _ctx.abrupt(\"return\", json);\n                case 9:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return _theFetcher.apply(this, arguments);\n}\nfunction TheMovies(param) {\n    var data = param.data, show = param.show;\n    var _this = this;\n    if (!show) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {}, void 0, false, {\n        fileName: \"/home/lucas/Documentos/GitHub/next0/pages/movies3.js\",\n        lineNumber: 45,\n        columnNumber: 24\n    }, this);\n    if (data.error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: \"falha na requisi\\xe7\\xe3o\"\n    }, void 0, false, {\n        fileName: \"/home/lucas/Documentos/GitHub/next0/pages/movies3.js\",\n        lineNumber: 47,\n        columnNumber: 29\n    }, this);\n    if (data.Search === \"\") return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: \"carregando...\"\n    }, void 0, false, {\n        fileName: \"/home/lucas/Documentos/GitHub/next0/pages/movies3.js\",\n        lineNumber: 49,\n        columnNumber: 38\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: data.Search.map(function(m, i) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: [\n                    m.Title,\n                    \" --- \",\n                    m.Year\n                ]\n            }, i, true, {\n                fileName: \"/home/lucas/Documentos/GitHub/next0/pages/movies3.js\",\n                lineNumber: 54,\n                columnNumber: 42\n            }, _this);\n        })\n    }, void 0, false, {\n        fileName: \"/home/lucas/Documentos/GitHub/next0/pages/movies3.js\",\n        lineNumber: 53,\n        columnNumber: 9\n    }, this);\n}\n_c1 = TheMovies;\nvar _c, _c1;\n$RefreshReg$(_c, \"Movies3\");\n$RefreshReg$(_c1, \"TheMovies\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxFQUFFQyxDQUFDO2lDQUFLLDhEQUFDZixLQUFHOztvQkFBVWMsQ0FBQyxDQUFDRSxLQUFLO29CQUFDLE9BQUs7b0JBQUNGLENBQUMsQ0FBQ0csSUFBSTs7ZUFBeEJGLENBQUM7Ozs7cUJBQThCO1NBQUEsQ0FBRzs7Ozs7WUFFdkUsQ0FFVDtDQUVKO0FBakJlUixNQUFBQSxTQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL21vdmllczMuanM/N2FhYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXNlU1dSIGZyb20gJ3N3cidcbmltcG9ydCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNb3ZpZXMzKCl7XG5cbiAgICBjb25zdCBbdXJsLCBzZXRVcmxdID0gdXNlU3RhdGUoJycpXG4gICAgY29uc3Qge2RhdGEsIGVycm9yfSA9IHVzZVNXUih1cmwsIHRoZUZldGNoZXIpXG5cbiAgICBjb25zdCBvbkNsaWNrSGFuZGxlciA9IChlKSA9PiB7XG5cbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICAgICAgY29uc3Qga2V5d29yZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWVsZC1tb3ZpZScpLnZhbHVlIFxuICAgICAgICBpZiAodXJsID09PSAnJykgc2V0VXJsKGBodHRwOi8vd3d3Lm9tZGJhcGkuY29tLz9hcGlrZXk9YTg1YTc4ZCZzPSR7a2V5d29yZH1gKVxuXG4gICAgICAgIGVsc2Ugc2V0VXJsKCcnKVxuXG4gICAgfVxuXG4gICAgcmV0dXJuIChcblxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGZvcm0+XG4gICAgICAgICAgICAgICAgPGlucHV0IGlkPSdmaWVsZC1tb3ZpZScgdHlwZT0ndGV4dCc+PC9pbnB1dD5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCcgb25DbGljaz17b25DbGlja0hhbmRsZXJ9PkJ1c2NhcjwvYnV0dG9uPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPFRoZU1vdmllcyBkYXRhPXsgZXJyb3I/e2Vycm9yOidFcnJvIG5hIHBlc3F1aXNhJ306IGRhdGEgPyBkYXRhOiB7U2VhcmNoOicnfSB9IHNob3c9e3VybCAhPT0gJyd9Lz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICApXG5cbn1cblxuYXN5bmMgZnVuY3Rpb24gdGhlRmV0Y2hlcih1cmwpIHtcblxuICAgIGlmICh1cmwgPT09IG51bGwgfHwgdXJsID09PSAnJykgcmV0dXJuIHtTZWFyY2g6Jyd9XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2godXJsKTtcbiAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICByZXR1cm4ganNvbjtcblxufVxuXG5leHBvcnQgZnVuY3Rpb24gVGhlTW92aWVzKHtkYXRhLHNob3d9KXtcblxuICAgIGlmICghc2hvdykgcmV0dXJuICg8ZGl2PjwvZGl2PikgICAgXG5cbiAgICBpZiAoZGF0YS5lcnJvcikgcmV0dXJuICg8ZGl2PmZhbGhhIG5hIHJlcXVpc2nDp8OjbzwvZGl2PilcblxuICAgIGlmIChkYXRhLlNlYXJjaCA9PT0gJycgKSByZXR1cm4gKDxkaXY+Y2FycmVnYW5kby4uLjwvZGl2PilcblxuICAgIHJldHVybiAoXG5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHsgZGF0YS5TZWFyY2gubWFwKCAobSwgaSkgPT4gPGRpdiBrZXk9e2l9PnttLlRpdGxlfSAtLS0ge20uWWVhcn08L2Rpdj4gICkgfSAgICAgICAgICAgIFxuXG4gICAgICAgIDwvZGl2PlxuXG4gICAgKVxuXG59Il0sIm5hbWVzIjpbInVzZVNXUiIsInVzZVN0YXRlIiwiTW92aWVzMyIsInVybCIsInNldFVybCIsInRoZUZldGNoZXIiLCJkYXRhIiwiZXJyb3IiLCJvbkNsaWNrSGFuZGxlciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImtleXdvcmQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidmFsdWUiLCJkaXYiLCJmb3JtIiwiaW5wdXQiLCJpZCIsInR5cGUiLCJidXR0b24iLCJvbkNsaWNrIiwiVGhlTW92aWVzIiwiU2VhcmNoIiwic2hvdyIsInJlcyIsImpzb24iLCJmZXRjaCIsIm1hcCIsIm0iLCJpIiwiVGl0bGUiLCJZZWFyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/movies3.js\n");

/***/ })

});
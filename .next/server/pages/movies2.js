"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/movies2";
exports.ids = ["pages/movies2"];
exports.modules = {

/***/ "./pages/movies2.js":
/*!**************************!*\
  !*** ./pages/movies2.js ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Movies2)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ \"swr\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_1__]);\nswr__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nfunction Movies2() {\n    const { data , error  } = (0,swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(`http://www.omdbapi.com/?apikey=966cf12d&s=bagdad`, fetcher);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"falha na requisi\\xe7\\xe3o...\"\n    }, void 0, false, {\n        fileName: \"/home/lucas/Documentos/GitHub/next0/pages/movies2.js\",\n        lineNumber: 7,\n        columnNumber: 23\n    }, this);\n    if (!data) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"carregando...\"\n    }, void 0, false, {\n        fileName: \"/home/lucas/Documentos/GitHub/next0/pages/movies2.js\",\n        lineNumber: 9,\n        columnNumber: 23\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n        children: data.Search.map((m, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"movies\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Link, {\n                        href: `/movies2${m.imdbID}`,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            children: m.Title\n                        }, void 0, false, {\n                            fileName: \"/home/lucas/Documentos/GitHub/next0/pages/movies2.js\",\n                            lineNumber: 17,\n                            columnNumber: 23\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/lucas/Documentos/GitHub/next0/pages/movies2.js\",\n                        lineNumber: 16,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        width: 100,\n                        src: m.Poster\n                    }, void 0, false, {\n                        fileName: \"/home/lucas/Documentos/GitHub/next0/pages/movies2.js\",\n                        lineNumber: 20,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, i, true, {\n                fileName: \"/home/lucas/Documentos/GitHub/next0/pages/movies2.js\",\n                lineNumber: 15,\n                columnNumber: 16\n            }, this)\n        )\n    }, void 0, false, {\n        fileName: \"/home/lucas/Documentos/GitHub/next0/pages/movies2.js\",\n        lineNumber: 13,\n        columnNumber: 9\n    }, this);\n};\nasync function fetcher(url) {\n    const res = await fetch(url);\n    const json = await res.json();\n    return json;\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9tb3ZpZXMyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUF3QjtBQUVULFNBQVNDLE9BQU8sR0FBRTtJQUU3QixNQUFNLEVBQUNDLElBQUksR0FBRUMsS0FBSyxHQUFDLEdBQUdILCtDQUFNLENBQUMsQ0FBQyxnREFBZ0QsQ0FBQyxFQUFFSSxPQUFPLENBQUM7SUFFekYsSUFBSUQsS0FBSyxFQUFFLHFCQUFPLDhEQUFDRSxLQUFHO2tCQUFDLDhCQUFzQjs7Ozs7WUFBTTtJQUVuRCxJQUFJLENBQUNILElBQUksRUFBRSxxQkFBTyw4REFBQ0csS0FBRztrQkFBQyxlQUFhOzs7OztZQUFNO0lBRTFDLHFCQUVJLDhEQUFDQyxJQUFFO2tCQUNFSixJQUFJLENBQUNLLE1BQU0sQ0FBQ0MsR0FBRyxDQUFFLENBQUNDLENBQUMsRUFBRUMsQ0FBQyxpQkFDcEIsOERBQUNMLEtBQUc7Z0JBQVNNLFNBQVMsRUFBQyxRQUFROztrQ0FDMUIsOERBQUNDLElBQUk7d0JBQUNDLElBQUksRUFBRSxDQUFDLFFBQVEsRUFBRUosQ0FBQyxDQUFDSyxNQUFNLENBQUMsQ0FBQztrQ0FDL0IsNEVBQUNDLEdBQUM7c0NBQUVOLENBQUMsQ0FBQ08sS0FBSzs7Ozs7Z0NBQUs7Ozs7OzRCQUNYO2tDQUVQLDhEQUFDQyxLQUFHO3dCQUFDQyxLQUFLLEVBQUUsR0FBRzt3QkFBRUMsR0FBRyxFQUFFVixDQUFDLENBQUNXLE1BQU07Ozs7OzRCQUFROztlQUxqQ1YsQ0FBQzs7OztvQkFNTDtRQUFBLENBQ1I7Ozs7O1lBRUEsQ0FFUjtDQUVKO0FBRUQsZUFBZU4sT0FBTyxDQUFDaUIsR0FBRyxFQUFFO0lBRXhCLE1BQU1DLEdBQUcsR0FBRyxNQUFNQyxLQUFLLENBQUNGLEdBQUcsQ0FBQztJQUU1QixNQUFNRyxJQUFJLEdBQUcsTUFBTUYsR0FBRyxDQUFDRSxJQUFJLEVBQUU7SUFFN0IsT0FBT0EsSUFBSSxDQUFDO0NBRWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9tb3ZpZXMyLmpzPzgzYjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1vdmllczIoKXtcblxuICAgIGNvbnN0IHtkYXRhLCBlcnJvcn0gPSB1c2VTV1IoYGh0dHA6Ly93d3cub21kYmFwaS5jb20vP2FwaWtleT05NjZjZjEyZCZzPWJhZ2RhZGAsIGZldGNoZXIpICAgIFxuXG4gICAgaWYgKGVycm9yKSByZXR1cm4gPGRpdj5mYWxoYSBuYSByZXF1aXNpw6fDo28uLi48L2Rpdj5cblxuICAgIGlmICghZGF0YSkgcmV0dXJuIDxkaXY+Y2FycmVnYW5kby4uLjwvZGl2PlxuXG4gICAgcmV0dXJuIChcblxuICAgICAgICA8dWw+XG4gICAgICAgICAgICB7ZGF0YS5TZWFyY2gubWFwKCAobSwgaSkgPT4gXG4gICAgICAgICAgICAgICA8ZGl2IGtleT17aX0gY2xhc3NOYW1lPSdtb3ZpZXMnPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL21vdmllczIke20uaW1kYklEfWB9PlxuICAgICAgICAgICAgICAgICAgICAgIDxhPnttLlRpdGxlfTwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgd2lkdGg9ezEwMH0gc3JjPXttLlBvc3Rlcn0+PC9pbWc+XG4gICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG5cbiAgICAgICAgPC91bD5cblxuICAgICkgICAgXG5cbn1cblxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hlcih1cmwpIHtcblxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHVybCk7XG5cbiAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICAgIHJldHVybiBqc29uO1xuXG59Il0sIm5hbWVzIjpbInVzZVNXUiIsIk1vdmllczIiLCJkYXRhIiwiZXJyb3IiLCJmZXRjaGVyIiwiZGl2IiwidWwiLCJTZWFyY2giLCJtYXAiLCJtIiwiaSIsImNsYXNzTmFtZSIsIkxpbmsiLCJocmVmIiwiaW1kYklEIiwiYSIsIlRpdGxlIiwiaW1nIiwid2lkdGgiLCJzcmMiLCJQb3N0ZXIiLCJ1cmwiLCJyZXMiLCJmZXRjaCIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/movies2.js\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/***/ ((module) => {

module.exports = import("swr");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/movies2.js"));
module.exports = __webpack_exports__;

})();
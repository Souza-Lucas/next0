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
exports.id = "pages/movies3";
exports.ids = ["pages/movies3"];
exports.modules = {

/***/ "./pages/movies3.js":
/*!**************************!*\
  !*** ./pages/movies3.js ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TheMovies\": () => (/* binding */ TheMovies),\n/* harmony export */   \"default\": () => (/* binding */ Movies3)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ \"swr\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_1__]);\nswr__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nfunction Movies3() {\n    const { 0: url , 1: setUrl  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const { data , error  } = (0,swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(url, theFetcher);\n    const onClickHandler = (e)=>{\n        e.preventDefault();\n        const keyword = document.getElementById(\"field-movie\").value;\n        if (url === \"\") setUrl(`http://www.omdbapi.com/?apikey=966cf12d&s=${keyword}`);\n        else setUrl(\"\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        id: \"field-movie\",\n                        type: \"text\"\n                    }, void 0, false, {\n                        fileName: \"/home/lucas/Documentos/GitHub/next0/pages/movies3.js\",\n                        lineNumber: 24,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        onClick: onClickHandler,\n                        children: \"Buscar\"\n                    }, void 0, false, {\n                        fileName: \"/home/lucas/Documentos/GitHub/next0/pages/movies3.js\",\n                        lineNumber: 25,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/lucas/Documentos/GitHub/next0/pages/movies3.js\",\n                lineNumber: 23,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TheMovies, {\n                data: error ? {\n                    error: \"Erro na pesquisa\"\n                } : data ? data : {\n                    Search: \"\"\n                },\n                show: url !== \"\"\n            }, void 0, false, {\n                fileName: \"/home/lucas/Documentos/GitHub/next0/pages/movies3.js\",\n                lineNumber: 27,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/lucas/Documentos/GitHub/next0/pages/movies3.js\",\n        lineNumber: 22,\n        columnNumber: 9\n    }, this);\n};\nasync function theFetcher(url) {\n    if (url === null || url === \"\") return {\n        Search: \"\"\n    };\n    const res = await fetch(url);\n    const json = await res.json();\n    return json;\n}\nfunction TheMovies({ data , show  }) {\n    if (!show) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n        fileName: \"/home/lucas/Documentos/GitHub/next0/pages/movies3.js\",\n        lineNumber: 45,\n        columnNumber: 24\n    }, this);\n    if (data.error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"falha na requisi\\xe7\\xe3o\"\n    }, void 0, false, {\n        fileName: \"/home/lucas/Documentos/GitHub/next0/pages/movies3.js\",\n        lineNumber: 47,\n        columnNumber: 29\n    }, this);\n    if (data.Search === \"\") return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"carregando...\"\n    }, void 0, false, {\n        fileName: \"/home/lucas/Documentos/GitHub/next0/pages/movies3.js\",\n        lineNumber: 49,\n        columnNumber: 38\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: data.Search.map((m, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    m.Title,\n                    \" --- \",\n                    m.Year\n                ]\n            }, i, true, {\n                fileName: \"/home/lucas/Documentos/GitHub/next0/pages/movies3.js\",\n                lineNumber: 54,\n                columnNumber: 42\n            }, this)\n        )\n    }, void 0, false, {\n        fileName: \"/home/lucas/Documentos/GitHub/next0/pages/movies3.js\",\n        lineNumber: 53,\n        columnNumber: 9\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9tb3ZpZXMzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUF3QjtBQUNNO0FBRWYsU0FBU0UsT0FBTyxHQUFFO0lBRTdCLE1BQU0sRUFMVixHQUtXQyxHQUFHLEdBTGQsR0FLZ0JDLE1BQU0sTUFBSUgsK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFDbEMsTUFBTSxFQUFDSSxJQUFJLEdBQUVDLEtBQUssR0FBQyxHQUFHTiwrQ0FBTSxDQUFDRyxHQUFHLEVBQUVJLFVBQVUsQ0FBQztJQUU3QyxNQUFNQyxjQUFjLEdBQUcsQ0FBQ0MsQ0FBQyxHQUFLO1FBRTFCQSxDQUFDLENBQUNDLGNBQWMsRUFBRTtRQUVsQixNQUFNQyxPQUFPLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDQyxLQUFLO1FBQzVELElBQUlYLEdBQUcsS0FBSyxFQUFFLEVBQUVDLE1BQU0sQ0FBQyxDQUFDLDBDQUEwQyxFQUFFTyxPQUFPLENBQUMsQ0FBQyxDQUFDO2FBRXpFUCxNQUFNLENBQUMsRUFBRSxDQUFDO0tBRWxCO0lBRUQscUJBRUksOERBQUNXLEtBQUc7OzBCQUNBLDhEQUFDQyxNQUFJOztrQ0FDRCw4REFBQ0MsT0FBSzt3QkFBQ0MsRUFBRSxFQUFDLGFBQWE7d0JBQUNDLElBQUksRUFBQyxNQUFNOzs7Ozs0QkFBUztrQ0FDNUMsOERBQUNDLFFBQU07d0JBQUNELElBQUksRUFBQyxRQUFRO3dCQUFDRSxPQUFPLEVBQUViLGNBQWM7a0NBQUUsUUFBTTs7Ozs7NEJBQVM7Ozs7OztvQkFDM0Q7MEJBQ1AsOERBQUNjLFNBQVM7Z0JBQUNqQixJQUFJLEVBQUdDLEtBQUssR0FBQztvQkFBQ0EsS0FBSyxFQUFDLGtCQUFrQjtpQkFBQyxHQUFFRCxJQUFJLEdBQUdBLElBQUksR0FBRTtvQkFBQ2tCLE1BQU0sRUFBQyxFQUFFO2lCQUFDO2dCQUFHQyxJQUFJLEVBQUVyQixHQUFHLEtBQUssRUFBRTs7Ozs7b0JBQUc7Ozs7OztZQUNoRyxDQUVUO0NBRUo7QUFFRCxlQUFlSSxVQUFVLENBQUNKLEdBQUcsRUFBRTtJQUUzQixJQUFJQSxHQUFHLEtBQUssSUFBSSxJQUFJQSxHQUFHLEtBQUssRUFBRSxFQUFFLE9BQU87UUFBQ29CLE1BQU0sRUFBQyxFQUFFO0tBQUM7SUFDbEQsTUFBTUUsR0FBRyxHQUFHLE1BQU1DLEtBQUssQ0FBQ3ZCLEdBQUcsQ0FBQztJQUM1QixNQUFNd0IsSUFBSSxHQUFHLE1BQU1GLEdBQUcsQ0FBQ0UsSUFBSSxFQUFFO0lBQzdCLE9BQU9BLElBQUksQ0FBQztDQUVmO0FBRU0sU0FBU0wsU0FBUyxDQUFDLEVBQUNqQixJQUFJLEdBQUNtQixJQUFJLEdBQUMsRUFBQztJQUVsQyxJQUFJLENBQUNBLElBQUksRUFBRSxxQkFBUSw4REFBQ1QsS0FBRzs7OztZQUFPLENBQUM7SUFFL0IsSUFBSVYsSUFBSSxDQUFDQyxLQUFLLEVBQUUscUJBQVEsOERBQUNTLEtBQUc7a0JBQUMsMkJBQW1COzs7OztZQUFNLENBQUM7SUFFdkQsSUFBSVYsSUFBSSxDQUFDa0IsTUFBTSxLQUFLLEVBQUUsRUFBRyxxQkFBUSw4REFBQ1IsS0FBRztrQkFBQyxlQUFhOzs7OztZQUFNLENBQUM7SUFFMUQscUJBRUksOERBQUNBLEtBQUc7a0JBQ0VWLElBQUksQ0FBQ2tCLE1BQU0sQ0FBQ0ssR0FBRyxDQUFFLENBQUNDLENBQUMsRUFBRUMsQ0FBQyxpQkFBSyw4REFBQ2YsS0FBRzs7b0JBQVVjLENBQUMsQ0FBQ0UsS0FBSztvQkFBQyxPQUFLO29CQUFDRixDQUFDLENBQUNHLElBQUk7O2VBQXhCRixDQUFDOzs7O29CQUE4QjtRQUFBLENBQUc7Ozs7O1lBRXZFLENBRVQ7Q0FFSiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL21vdmllczMuanM/N2FhYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXNlU1dSIGZyb20gJ3N3cidcbmltcG9ydCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNb3ZpZXMzKCl7XG5cbiAgICBjb25zdCBbdXJsLCBzZXRVcmxdID0gdXNlU3RhdGUoJycpXG4gICAgY29uc3Qge2RhdGEsIGVycm9yfSA9IHVzZVNXUih1cmwsIHRoZUZldGNoZXIpXG5cbiAgICBjb25zdCBvbkNsaWNrSGFuZGxlciA9IChlKSA9PiB7XG5cbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICAgICAgY29uc3Qga2V5d29yZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWVsZC1tb3ZpZScpLnZhbHVlIFxuICAgICAgICBpZiAodXJsID09PSAnJykgc2V0VXJsKGBodHRwOi8vd3d3Lm9tZGJhcGkuY29tLz9hcGlrZXk9OTY2Y2YxMmQmcz0ke2tleXdvcmR9YClcblxuICAgICAgICBlbHNlIHNldFVybCgnJylcblxuICAgIH1cblxuICAgIHJldHVybiAoXG5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBpZD0nZmllbGQtbW92aWUnIHR5cGU9J3RleHQnPjwvaW5wdXQ+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdzdWJtaXQnIG9uQ2xpY2s9e29uQ2xpY2tIYW5kbGVyfT5CdXNjYXI8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDxUaGVNb3ZpZXMgZGF0YT17IGVycm9yP3tlcnJvcjonRXJybyBuYSBwZXNxdWlzYSd9OiBkYXRhID8gZGF0YToge1NlYXJjaDonJ30gfSBzaG93PXt1cmwgIT09ICcnfS8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgKVxuXG59XG5cbmFzeW5jIGZ1bmN0aW9uIHRoZUZldGNoZXIodXJsKSB7XG5cbiAgICBpZiAodXJsID09PSBudWxsIHx8IHVybCA9PT0gJycpIHJldHVybiB7U2VhcmNoOicnfVxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHVybCk7XG4gICAgY29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgcmV0dXJuIGpzb247XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFRoZU1vdmllcyh7ZGF0YSxzaG93fSl7XG5cbiAgICBpZiAoIXNob3cpIHJldHVybiAoPGRpdj48L2Rpdj4pICAgIFxuXG4gICAgaWYgKGRhdGEuZXJyb3IpIHJldHVybiAoPGRpdj5mYWxoYSBuYSByZXF1aXNpw6fDo288L2Rpdj4pXG5cbiAgICBpZiAoZGF0YS5TZWFyY2ggPT09ICcnICkgcmV0dXJuICg8ZGl2PmNhcnJlZ2FuZG8uLi48L2Rpdj4pXG5cbiAgICByZXR1cm4gKFxuXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7IGRhdGEuU2VhcmNoLm1hcCggKG0sIGkpID0+IDxkaXYga2V5PXtpfT57bS5UaXRsZX0gLS0tIHttLlllYXJ9PC9kaXY+ICApIH0gICAgICAgICAgICBcblxuICAgICAgICA8L2Rpdj5cblxuICAgIClcblxufSJdLCJuYW1lcyI6WyJ1c2VTV1IiLCJ1c2VTdGF0ZSIsIk1vdmllczMiLCJ1cmwiLCJzZXRVcmwiLCJkYXRhIiwiZXJyb3IiLCJ0aGVGZXRjaGVyIiwib25DbGlja0hhbmRsZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJrZXl3b3JkIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInZhbHVlIiwiZGl2IiwiZm9ybSIsImlucHV0IiwiaWQiLCJ0eXBlIiwiYnV0dG9uIiwib25DbGljayIsIlRoZU1vdmllcyIsIlNlYXJjaCIsInNob3ciLCJyZXMiLCJmZXRjaCIsImpzb24iLCJtYXAiLCJtIiwiaSIsIlRpdGxlIiwiWWVhciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/movies3.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

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
var __webpack_exports__ = (__webpack_exec__("./pages/movies3.js"));
module.exports = __webpack_exports__;

})();
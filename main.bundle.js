/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*{
    
    margin: 0;
    padding: 0;
}
.navbar{
    display: flex;
    justify-content:space-around;
    border: 1px solid black;
    list-style-type: none;
}

.landing {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 50%;
    border: 1px solid green;
    height: 20rem;

}

.landing img{
    width: 100%;
}

h1 {
    text-align: center;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;IAEI,SAAS;IACT,UAAU;AACd;AACA;IACI,aAAa;IACb,4BAA4B;IAC5B,uBAAuB;IACvB,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,WAAW;IACX,WAAW;IACX,uBAAuB;IACvB,aAAa;;AAEjB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,kBAAkB;AACtB","sourcesContent":["*{\n    \n    margin: 0;\n    padding: 0;\n}\n.navbar{\n    display: flex;\n    justify-content:space-around;\n    border: 1px solid black;\n    list-style-type: none;\n}\n\n.landing {\n    display: flex;\n    justify-content: center;\n    width: 100%;\n    height: 50%;\n    border: 1px solid green;\n    height: 20rem;\n\n}\n\n.landing img{\n    width: 100%;\n}\n\nh1 {\n    text-align: center;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/lorem-ipsum/dist/constants/formats.js":
/*!************************************************************!*\
  !*** ./node_modules/lorem-ipsum/dist/constants/formats.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.FORMAT_PLAIN = exports.FORMAT_HTML = exports.FORMATS = void 0;
var FORMAT_HTML = "html";
exports.FORMAT_HTML = FORMAT_HTML;
var FORMAT_PLAIN = "plain";
exports.FORMAT_PLAIN = FORMAT_PLAIN;
var FORMATS = [FORMAT_HTML, FORMAT_PLAIN];
exports.FORMATS = FORMATS;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJGT1JNQVRfSFRNTCIsIkZPUk1BVF9QTEFJTiIsIkZPUk1BVFMiXSwic291cmNlcyI6WyIuLi8uLi9zcmMvY29uc3RhbnRzL2Zvcm1hdHMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IEZPUk1BVF9IVE1MID0gXCJodG1sXCI7XHJcbmV4cG9ydCBjb25zdCBGT1JNQVRfUExBSU4gPSBcInBsYWluXCI7XHJcbmV4cG9ydCBjb25zdCBGT1JNQVRTID0gW0ZPUk1BVF9IVE1MLCBGT1JNQVRfUExBSU5dO1xyXG5leHBvcnQgdHlwZSBMb3JlbUZvcm1hdCA9IFwicGxhaW5cIiB8IFwiaHRtbFwiO1xyXG4iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFPLElBQU1BLFdBQVcsR0FBRyxNQUFwQjs7QUFDQSxJQUFNQyxZQUFZLEdBQUcsT0FBckI7O0FBQ0EsSUFBTUMsT0FBTyxHQUFHLENBQUNGLFdBQUQsRUFBY0MsWUFBZCxDQUFoQiJ9

/***/ }),

/***/ "./node_modules/lorem-ipsum/dist/constants/lineEndings.js":
/*!****************************************************************!*\
  !*** ./node_modules/lorem-ipsum/dist/constants/lineEndings.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.LINE_ENDINGS = void 0;
var LINE_ENDINGS = {
  POSIX: "\n",
  WIN32: "\r\n"
};
exports.LINE_ENDINGS = LINE_ENDINGS;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJMSU5FX0VORElOR1MiLCJQT1NJWCIsIldJTjMyIl0sInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbnN0YW50cy9saW5lRW5kaW5ncy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgTElORV9FTkRJTkdTID0ge1xyXG4gIFBPU0lYOiBcIlxcblwiLFxyXG4gIFdJTjMyOiBcIlxcclxcblwiLFxyXG59O1xyXG4iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFPLElBQU1BLFlBQVksR0FBRztFQUMxQkMsS0FBSyxFQUFFLElBRG1CO0VBRTFCQyxLQUFLLEVBQUU7QUFGbUIsQ0FBckIifQ==

/***/ }),

/***/ "./node_modules/lorem-ipsum/dist/constants/platforms.js":
/*!**************************************************************!*\
  !*** ./node_modules/lorem-ipsum/dist/constants/platforms.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.SUPPORTED_PLATFORMS = void 0;
var SUPPORTED_PLATFORMS = {
  DARWIN: "darwin",
  LINUX: "linux",
  WIN32: "win32"
};
exports.SUPPORTED_PLATFORMS = SUPPORTED_PLATFORMS;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJTVVBQT1JURURfUExBVEZPUk1TIiwiREFSV0lOIiwiTElOVVgiLCJXSU4zMiJdLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25zdGFudHMvcGxhdGZvcm1zLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBTVVBQT1JURURfUExBVEZPUk1TID0ge1xyXG4gIERBUldJTjogXCJkYXJ3aW5cIixcclxuICBMSU5VWDogXCJsaW51eFwiLFxyXG4gIFdJTjMyOiBcIndpbjMyXCIsXHJcbn07XHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQU8sSUFBTUEsbUJBQW1CLEdBQUc7RUFDakNDLE1BQU0sRUFBRSxRQUR5QjtFQUVqQ0MsS0FBSyxFQUFFLE9BRjBCO0VBR2pDQyxLQUFLLEVBQUU7QUFIMEIsQ0FBNUIifQ==

/***/ }),

/***/ "./node_modules/lorem-ipsum/dist/constants/units.js":
/*!**********************************************************!*\
  !*** ./node_modules/lorem-ipsum/dist/constants/units.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.UNIT_WORDS = exports.UNIT_WORD = exports.UNIT_SENTENCES = exports.UNIT_SENTENCE = exports.UNIT_PARAGRAPHS = exports.UNIT_PARAGRAPH = exports.UNITS = void 0;
var UNIT_WORDS = "words";
exports.UNIT_WORDS = UNIT_WORDS;
var UNIT_WORD = "word";
exports.UNIT_WORD = UNIT_WORD;
var UNIT_SENTENCES = "sentences";
exports.UNIT_SENTENCES = UNIT_SENTENCES;
var UNIT_SENTENCE = "sentence";
exports.UNIT_SENTENCE = UNIT_SENTENCE;
var UNIT_PARAGRAPHS = "paragraphs";
exports.UNIT_PARAGRAPHS = UNIT_PARAGRAPHS;
var UNIT_PARAGRAPH = "paragraph";
exports.UNIT_PARAGRAPH = UNIT_PARAGRAPH;
var UNITS = [UNIT_WORDS, UNIT_WORD, UNIT_SENTENCES, UNIT_SENTENCE, UNIT_PARAGRAPHS, UNIT_PARAGRAPH];
exports.UNITS = UNITS;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJVTklUX1dPUkRTIiwiVU5JVF9XT1JEIiwiVU5JVF9TRU5URU5DRVMiLCJVTklUX1NFTlRFTkNFIiwiVU5JVF9QQVJBR1JBUEhTIiwiVU5JVF9QQVJBR1JBUEgiLCJVTklUUyJdLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25zdGFudHMvdW5pdHMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IFVOSVRfV09SRFMgPSBcIndvcmRzXCI7XG5leHBvcnQgY29uc3QgVU5JVF9XT1JEID0gXCJ3b3JkXCI7XG5leHBvcnQgY29uc3QgVU5JVF9TRU5URU5DRVMgPSBcInNlbnRlbmNlc1wiO1xuZXhwb3J0IGNvbnN0IFVOSVRfU0VOVEVOQ0UgPSBcInNlbnRlbmNlXCI7XG5leHBvcnQgY29uc3QgVU5JVF9QQVJBR1JBUEhTID0gXCJwYXJhZ3JhcGhzXCI7XG5leHBvcnQgY29uc3QgVU5JVF9QQVJBR1JBUEggPSBcInBhcmFncmFwaFwiO1xuZXhwb3J0IGNvbnN0IFVOSVRTID0gW1xuICBVTklUX1dPUkRTLFxuICBVTklUX1dPUkQsXG4gIFVOSVRfU0VOVEVOQ0VTLFxuICBVTklUX1NFTlRFTkNFLFxuICBVTklUX1BBUkFHUkFQSFMsXG4gIFVOSVRfUEFSQUdSQVBILFxuXTtcbmV4cG9ydCB0eXBlIExvcmVtVW5pdCA9IFwid29yZHNcIiB8IFwid29yZFwiIHwgXCJzZW50ZW5jZXNcIiB8IFwic2VudGVuY2VcIiB8IFwicGFyYWdyYXBoc1wiIHwgXCJwYXJhZ3JhcGhcIjtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQU8sSUFBTUEsVUFBVSxHQUFHLE9BQW5COztBQUNBLElBQU1DLFNBQVMsR0FBRyxNQUFsQjs7QUFDQSxJQUFNQyxjQUFjLEdBQUcsV0FBdkI7O0FBQ0EsSUFBTUMsYUFBYSxHQUFHLFVBQXRCOztBQUNBLElBQU1DLGVBQWUsR0FBRyxZQUF4Qjs7QUFDQSxJQUFNQyxjQUFjLEdBQUcsV0FBdkI7O0FBQ0EsSUFBTUMsS0FBSyxHQUFHLENBQ25CTixVQURtQixFQUVuQkMsU0FGbUIsRUFHbkJDLGNBSG1CLEVBSW5CQyxhQUptQixFQUtuQkMsZUFMbUIsRUFNbkJDLGNBTm1CLENBQWQifQ==

/***/ }),

/***/ "./node_modules/lorem-ipsum/dist/constants/words.js":
/*!**********************************************************!*\
  !*** ./node_modules/lorem-ipsum/dist/constants/words.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.WORDS = void 0;
var WORDS = ["ad", "adipisicing", "aliqua", "aliquip", "amet", "anim", "aute", "cillum", "commodo", "consectetur", "consequat", "culpa", "cupidatat", "deserunt", "do", "dolor", "dolore", "duis", "ea", "eiusmod", "elit", "enim", "esse", "est", "et", "eu", "ex", "excepteur", "exercitation", "fugiat", "id", "in", "incididunt", "ipsum", "irure", "labore", "laboris", "laborum", "Lorem", "magna", "minim", "mollit", "nisi", "non", "nostrud", "nulla", "occaecat", "officia", "pariatur", "proident", "qui", "quis", "reprehenderit", "sint", "sit", "sunt", "tempor", "ullamco", "ut", "velit", "veniam", "voluptate"];
exports.WORDS = WORDS;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJXT1JEUyJdLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25zdGFudHMvd29yZHMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IFdPUkRTID0gW1xyXG4gIFwiYWRcIixcclxuICBcImFkaXBpc2ljaW5nXCIsXHJcbiAgXCJhbGlxdWFcIixcclxuICBcImFsaXF1aXBcIixcclxuICBcImFtZXRcIixcclxuICBcImFuaW1cIixcclxuICBcImF1dGVcIixcclxuICBcImNpbGx1bVwiLFxyXG4gIFwiY29tbW9kb1wiLFxyXG4gIFwiY29uc2VjdGV0dXJcIixcclxuICBcImNvbnNlcXVhdFwiLFxyXG4gIFwiY3VscGFcIixcclxuICBcImN1cGlkYXRhdFwiLFxyXG4gIFwiZGVzZXJ1bnRcIixcclxuICBcImRvXCIsXHJcbiAgXCJkb2xvclwiLFxyXG4gIFwiZG9sb3JlXCIsXHJcbiAgXCJkdWlzXCIsXHJcbiAgXCJlYVwiLFxyXG4gIFwiZWl1c21vZFwiLFxyXG4gIFwiZWxpdFwiLFxyXG4gIFwiZW5pbVwiLFxyXG4gIFwiZXNzZVwiLFxyXG4gIFwiZXN0XCIsXHJcbiAgXCJldFwiLFxyXG4gIFwiZXVcIixcclxuICBcImV4XCIsXHJcbiAgXCJleGNlcHRldXJcIixcclxuICBcImV4ZXJjaXRhdGlvblwiLFxyXG4gIFwiZnVnaWF0XCIsXHJcbiAgXCJpZFwiLFxyXG4gIFwiaW5cIixcclxuICBcImluY2lkaWR1bnRcIixcclxuICBcImlwc3VtXCIsXHJcbiAgXCJpcnVyZVwiLFxyXG4gIFwibGFib3JlXCIsXHJcbiAgXCJsYWJvcmlzXCIsXHJcbiAgXCJsYWJvcnVtXCIsXHJcbiAgXCJMb3JlbVwiLFxyXG4gIFwibWFnbmFcIixcclxuICBcIm1pbmltXCIsXHJcbiAgXCJtb2xsaXRcIixcclxuICBcIm5pc2lcIixcclxuICBcIm5vblwiLFxyXG4gIFwibm9zdHJ1ZFwiLFxyXG4gIFwibnVsbGFcIixcclxuICBcIm9jY2FlY2F0XCIsXHJcbiAgXCJvZmZpY2lhXCIsXHJcbiAgXCJwYXJpYXR1clwiLFxyXG4gIFwicHJvaWRlbnRcIixcclxuICBcInF1aVwiLFxyXG4gIFwicXVpc1wiLFxyXG4gIFwicmVwcmVoZW5kZXJpdFwiLFxyXG4gIFwic2ludFwiLFxyXG4gIFwic2l0XCIsXHJcbiAgXCJzdW50XCIsXHJcbiAgXCJ0ZW1wb3JcIixcclxuICBcInVsbGFtY29cIixcclxuICBcInV0XCIsXHJcbiAgXCJ2ZWxpdFwiLFxyXG4gIFwidmVuaWFtXCIsXHJcbiAgXCJ2b2x1cHRhdGVcIixcclxuXTtcclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBTyxJQUFNQSxLQUFLLEdBQUcsQ0FDbkIsSUFEbUIsRUFFbkIsYUFGbUIsRUFHbkIsUUFIbUIsRUFJbkIsU0FKbUIsRUFLbkIsTUFMbUIsRUFNbkIsTUFObUIsRUFPbkIsTUFQbUIsRUFRbkIsUUFSbUIsRUFTbkIsU0FUbUIsRUFVbkIsYUFWbUIsRUFXbkIsV0FYbUIsRUFZbkIsT0FabUIsRUFhbkIsV0FibUIsRUFjbkIsVUFkbUIsRUFlbkIsSUFmbUIsRUFnQm5CLE9BaEJtQixFQWlCbkIsUUFqQm1CLEVBa0JuQixNQWxCbUIsRUFtQm5CLElBbkJtQixFQW9CbkIsU0FwQm1CLEVBcUJuQixNQXJCbUIsRUFzQm5CLE1BdEJtQixFQXVCbkIsTUF2Qm1CLEVBd0JuQixLQXhCbUIsRUF5Qm5CLElBekJtQixFQTBCbkIsSUExQm1CLEVBMkJuQixJQTNCbUIsRUE0Qm5CLFdBNUJtQixFQTZCbkIsY0E3Qm1CLEVBOEJuQixRQTlCbUIsRUErQm5CLElBL0JtQixFQWdDbkIsSUFoQ21CLEVBaUNuQixZQWpDbUIsRUFrQ25CLE9BbENtQixFQW1DbkIsT0FuQ21CLEVBb0NuQixRQXBDbUIsRUFxQ25CLFNBckNtQixFQXNDbkIsU0F0Q21CLEVBdUNuQixPQXZDbUIsRUF3Q25CLE9BeENtQixFQXlDbkIsT0F6Q21CLEVBMENuQixRQTFDbUIsRUEyQ25CLE1BM0NtQixFQTRDbkIsS0E1Q21CLEVBNkNuQixTQTdDbUIsRUE4Q25CLE9BOUNtQixFQStDbkIsVUEvQ21CLEVBZ0RuQixTQWhEbUIsRUFpRG5CLFVBakRtQixFQWtEbkIsVUFsRG1CLEVBbURuQixLQW5EbUIsRUFvRG5CLE1BcERtQixFQXFEbkIsZUFyRG1CLEVBc0RuQixNQXREbUIsRUF1RG5CLEtBdkRtQixFQXdEbkIsTUF4RG1CLEVBeURuQixRQXpEbUIsRUEwRG5CLFNBMURtQixFQTJEbkIsSUEzRG1CLEVBNERuQixPQTVEbUIsRUE2RG5CLFFBN0RtQixFQThEbkIsV0E5RG1CLENBQWQifQ==

/***/ }),

/***/ "./node_modules/lorem-ipsum/dist/index.js":
/*!************************************************!*\
  !*** ./node_modules/lorem-ipsum/dist/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "LoremIpsum", ({
  enumerable: true,
  get: function get() {
    return _LoremIpsum["default"];
  }
}));
exports.loremIpsum = void 0;

var _formats = __webpack_require__(/*! ./constants/formats */ "./node_modules/lorem-ipsum/dist/constants/formats.js");

var _units = __webpack_require__(/*! ./constants/units */ "./node_modules/lorem-ipsum/dist/constants/units.js");

var _words = __webpack_require__(/*! ./constants/words */ "./node_modules/lorem-ipsum/dist/constants/words.js");

var _LoremIpsum = _interopRequireDefault(__webpack_require__(/*! ./lib/LoremIpsum */ "./node_modules/lorem-ipsum/dist/lib/LoremIpsum.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var loremIpsum = function loremIpsum() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$count = _ref.count,
      count = _ref$count === void 0 ? 1 : _ref$count,
      _ref$format = _ref.format,
      format = _ref$format === void 0 ? _formats.FORMAT_PLAIN : _ref$format,
      _ref$paragraphLowerBo = _ref.paragraphLowerBound,
      paragraphLowerBound = _ref$paragraphLowerBo === void 0 ? 3 : _ref$paragraphLowerBo,
      _ref$paragraphUpperBo = _ref.paragraphUpperBound,
      paragraphUpperBound = _ref$paragraphUpperBo === void 0 ? 7 : _ref$paragraphUpperBo,
      random = _ref.random,
      _ref$sentenceLowerBou = _ref.sentenceLowerBound,
      sentenceLowerBound = _ref$sentenceLowerBou === void 0 ? 5 : _ref$sentenceLowerBou,
      _ref$sentenceUpperBou = _ref.sentenceUpperBound,
      sentenceUpperBound = _ref$sentenceUpperBou === void 0 ? 15 : _ref$sentenceUpperBou,
      _ref$units = _ref.units,
      units = _ref$units === void 0 ? _units.UNIT_SENTENCES : _ref$units,
      _ref$words = _ref.words,
      words = _ref$words === void 0 ? _words.WORDS : _ref$words,
      _ref$suffix = _ref.suffix,
      suffix = _ref$suffix === void 0 ? "" : _ref$suffix;

  var options = {
    random: random,
    sentencesPerParagraph: {
      max: paragraphUpperBound,
      min: paragraphLowerBound
    },
    words: words,
    wordsPerSentence: {
      max: sentenceUpperBound,
      min: sentenceLowerBound
    }
  };
  var lorem = new _LoremIpsum["default"](options, format, suffix);

  switch (units) {
    case _units.UNIT_PARAGRAPHS:
    case _units.UNIT_PARAGRAPH:
      return lorem.generateParagraphs(count);

    case _units.UNIT_SENTENCES:
    case _units.UNIT_SENTENCE:
      return lorem.generateSentences(count);

    case _units.UNIT_WORDS:
    case _units.UNIT_WORD:
      return lorem.generateWords(count);

    default:
      return "";
  }
};

exports.loremIpsum = loremIpsum;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJsb3JlbUlwc3VtIiwiY291bnQiLCJmb3JtYXQiLCJGT1JNQVRfUExBSU4iLCJwYXJhZ3JhcGhMb3dlckJvdW5kIiwicGFyYWdyYXBoVXBwZXJCb3VuZCIsInJhbmRvbSIsInNlbnRlbmNlTG93ZXJCb3VuZCIsInNlbnRlbmNlVXBwZXJCb3VuZCIsInVuaXRzIiwiVU5JVF9TRU5URU5DRVMiLCJ3b3JkcyIsIldPUkRTIiwic3VmZml4Iiwib3B0aW9ucyIsInNlbnRlbmNlc1BlclBhcmFncmFwaCIsIm1heCIsIm1pbiIsIndvcmRzUGVyU2VudGVuY2UiLCJsb3JlbSIsIkxvcmVtSXBzdW0iLCJVTklUX1BBUkFHUkFQSFMiLCJVTklUX1BBUkFHUkFQSCIsImdlbmVyYXRlUGFyYWdyYXBocyIsIlVOSVRfU0VOVEVOQ0UiLCJnZW5lcmF0ZVNlbnRlbmNlcyIsIlVOSVRfV09SRFMiLCJVTklUX1dPUkQiLCJnZW5lcmF0ZVdvcmRzIl0sInNvdXJjZXMiOlsiLi4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExvcmVtRm9ybWF0LCBGT1JNQVRfUExBSU4gfSBmcm9tIFwiLi9jb25zdGFudHMvZm9ybWF0c1wiO1xyXG5pbXBvcnQge1xyXG4gIExvcmVtVW5pdCxcclxuICBVTklUX1BBUkFHUkFQSCxcclxuICBVTklUX1BBUkFHUkFQSFMsXHJcbiAgVU5JVF9TRU5URU5DRVMsXHJcbiAgVU5JVF9TRU5URU5DRSxcclxuICBVTklUX1dPUkRTLFxyXG4gIFVOSVRfV09SRCxcclxufSBmcm9tIFwiLi9jb25zdGFudHMvdW5pdHNcIjtcclxuaW1wb3J0IHsgV09SRFMgfSBmcm9tIFwiLi9jb25zdGFudHMvd29yZHNcIjtcclxuaW1wb3J0IHsgSVBybmcgfSBmcm9tIFwiLi9saWIvZ2VuZXJhdG9yXCI7XHJcbmltcG9ydCBMb3JlbUlwc3VtIGZyb20gXCIuL2xpYi9Mb3JlbUlwc3VtXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElMb3JlbUlwc3VtUGFyYW1zIHtcclxuICBjb3VudD86IG51bWJlcjtcclxuICBmb3JtYXQ/OiBMb3JlbUZvcm1hdDtcclxuICBwYXJhZ3JhcGhMb3dlckJvdW5kPzogbnVtYmVyO1xyXG4gIHBhcmFncmFwaFVwcGVyQm91bmQ/OiBudW1iZXI7XHJcbiAgcmFuZG9tPzogSVBybmc7XHJcbiAgc2VudGVuY2VMb3dlckJvdW5kPzogbnVtYmVyO1xyXG4gIHNlbnRlbmNlVXBwZXJCb3VuZD86IG51bWJlcjtcclxuICB1bml0cz86IExvcmVtVW5pdDtcclxuICB3b3Jkcz86IHN0cmluZ1tdO1xyXG4gIHN1ZmZpeD86IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgbG9yZW1JcHN1bSA9ICh7XHJcbiAgY291bnQgPSAxLFxyXG4gIGZvcm1hdCA9IEZPUk1BVF9QTEFJTixcclxuICBwYXJhZ3JhcGhMb3dlckJvdW5kID0gMyxcclxuICBwYXJhZ3JhcGhVcHBlckJvdW5kID0gNyxcclxuICByYW5kb20sXHJcbiAgc2VudGVuY2VMb3dlckJvdW5kID0gNSxcclxuICBzZW50ZW5jZVVwcGVyQm91bmQgPSAxNSxcclxuICB1bml0cyA9IFVOSVRfU0VOVEVOQ0VTLFxyXG4gIHdvcmRzID0gV09SRFMsXHJcbiAgc3VmZml4ID0gXCJcIixcclxufTogSUxvcmVtSXBzdW1QYXJhbXMgPSB7fSk6IHN0cmluZyA9PiB7XHJcbiAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgIHJhbmRvbSxcclxuICAgIHNlbnRlbmNlc1BlclBhcmFncmFwaDoge1xyXG4gICAgICBtYXg6IHBhcmFncmFwaFVwcGVyQm91bmQsXHJcbiAgICAgIG1pbjogcGFyYWdyYXBoTG93ZXJCb3VuZCxcclxuICAgIH0sXHJcbiAgICB3b3JkcyxcclxuICAgIHdvcmRzUGVyU2VudGVuY2U6IHtcclxuICAgICAgbWF4OiBzZW50ZW5jZVVwcGVyQm91bmQsXHJcbiAgICAgIG1pbjogc2VudGVuY2VMb3dlckJvdW5kLFxyXG4gICAgfSxcclxuICB9O1xyXG5cclxuICBjb25zdCBsb3JlbTogTG9yZW1JcHN1bSA9IG5ldyBMb3JlbUlwc3VtKG9wdGlvbnMsIGZvcm1hdCwgc3VmZml4KTtcclxuXHJcbiAgc3dpdGNoICh1bml0cykge1xyXG4gICAgY2FzZSBVTklUX1BBUkFHUkFQSFM6XHJcbiAgICBjYXNlIFVOSVRfUEFSQUdSQVBIOlxyXG4gICAgICByZXR1cm4gbG9yZW0uZ2VuZXJhdGVQYXJhZ3JhcGhzKGNvdW50KTtcclxuICAgIGNhc2UgVU5JVF9TRU5URU5DRVM6XHJcbiAgICBjYXNlIFVOSVRfU0VOVEVOQ0U6XHJcbiAgICAgIHJldHVybiBsb3JlbS5nZW5lcmF0ZVNlbnRlbmNlcyhjb3VudCk7XHJcbiAgICBjYXNlIFVOSVRfV09SRFM6XHJcbiAgICBjYXNlIFVOSVRfV09SRDpcclxuICAgICAgcmV0dXJuIGxvcmVtLmdlbmVyYXRlV29yZHMoY291bnQpO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IHsgbG9yZW1JcHN1bSwgTG9yZW1JcHN1bSB9O1xyXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFTQTs7QUFFQTs7OztBQWVBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBV21CO0VBQUEsK0VBQWYsRUFBZTtFQUFBLHNCQVZwQ0MsS0FVb0M7RUFBQSxJQVZwQ0EsS0FVb0MsMkJBVjVCLENBVTRCO0VBQUEsdUJBVHBDQyxNQVNvQztFQUFBLElBVHBDQSxNQVNvQyw0QkFUM0JDLHFCQVMyQjtFQUFBLGlDQVJwQ0MsbUJBUW9DO0VBQUEsSUFScENBLG1CQVFvQyxzQ0FSZCxDQVFjO0VBQUEsaUNBUHBDQyxtQkFPb0M7RUFBQSxJQVBwQ0EsbUJBT29DLHNDQVBkLENBT2M7RUFBQSxJQU5wQ0MsTUFNb0MsUUFOcENBLE1BTW9DO0VBQUEsaUNBTHBDQyxrQkFLb0M7RUFBQSxJQUxwQ0Esa0JBS29DLHNDQUxmLENBS2U7RUFBQSxpQ0FKcENDLGtCQUlvQztFQUFBLElBSnBDQSxrQkFJb0Msc0NBSmYsRUFJZTtFQUFBLHNCQUhwQ0MsS0FHb0M7RUFBQSxJQUhwQ0EsS0FHb0MsMkJBSDVCQyxxQkFHNEI7RUFBQSxzQkFGcENDLEtBRW9DO0VBQUEsSUFGcENBLEtBRW9DLDJCQUY1QkMsWUFFNEI7RUFBQSx1QkFEcENDLE1BQ29DO0VBQUEsSUFEcENBLE1BQ29DLDRCQUQzQixFQUMyQjs7RUFDcEMsSUFBTUMsT0FBTyxHQUFHO0lBQ2RSLE1BQU0sRUFBTkEsTUFEYztJQUVkUyxxQkFBcUIsRUFBRTtNQUNyQkMsR0FBRyxFQUFFWCxtQkFEZ0I7TUFFckJZLEdBQUcsRUFBRWI7SUFGZ0IsQ0FGVDtJQU1kTyxLQUFLLEVBQUxBLEtBTmM7SUFPZE8sZ0JBQWdCLEVBQUU7TUFDaEJGLEdBQUcsRUFBRVIsa0JBRFc7TUFFaEJTLEdBQUcsRUFBRVY7SUFGVztFQVBKLENBQWhCO0VBYUEsSUFBTVksS0FBaUIsR0FBRyxJQUFJQyxzQkFBSixDQUFlTixPQUFmLEVBQXdCWixNQUF4QixFQUFnQ1csTUFBaEMsQ0FBMUI7O0VBRUEsUUFBUUosS0FBUjtJQUNFLEtBQUtZLHNCQUFMO0lBQ0EsS0FBS0MscUJBQUw7TUFDRSxPQUFPSCxLQUFLLENBQUNJLGtCQUFOLENBQXlCdEIsS0FBekIsQ0FBUDs7SUFDRixLQUFLUyxxQkFBTDtJQUNBLEtBQUtjLG9CQUFMO01BQ0UsT0FBT0wsS0FBSyxDQUFDTSxpQkFBTixDQUF3QnhCLEtBQXhCLENBQVA7O0lBQ0YsS0FBS3lCLGlCQUFMO0lBQ0EsS0FBS0MsZ0JBQUw7TUFDRSxPQUFPUixLQUFLLENBQUNTLGFBQU4sQ0FBb0IzQixLQUFwQixDQUFQOztJQUNGO01BQ0UsT0FBTyxFQUFQO0VBWEo7QUFhRCxDQXhDRCJ9

/***/ }),

/***/ "./node_modules/lorem-ipsum/dist/lib/LoremIpsum.js":
/*!*********************************************************!*\
  !*** ./node_modules/lorem-ipsum/dist/lib/LoremIpsum.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _formats = __webpack_require__(/*! ../constants/formats */ "./node_modules/lorem-ipsum/dist/constants/formats.js");

var _lineEndings = __webpack_require__(/*! ../constants/lineEndings */ "./node_modules/lorem-ipsum/dist/constants/lineEndings.js");

var _generator = _interopRequireDefault(__webpack_require__(/*! ../lib/generator */ "./node_modules/lorem-ipsum/dist/lib/generator.js"));

var _util = __webpack_require__(/*! ../util */ "./node_modules/lorem-ipsum/dist/util/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var LoremIpsum = /*#__PURE__*/function () {
  function LoremIpsum() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _formats.FORMAT_PLAIN;
    var suffix = arguments.length > 2 ? arguments[2] : undefined;

    _classCallCheck(this, LoremIpsum);

    this.format = format;
    this.suffix = suffix;

    _defineProperty(this, "generator", void 0);

    if (_formats.FORMATS.indexOf(format.toLowerCase()) === -1) {
      throw new Error("".concat(format, " is an invalid format. Please use ").concat(_formats.FORMATS.join(" or "), "."));
    }

    this.generator = new _generator["default"](options);
  }

  _createClass(LoremIpsum, [{
    key: "getLineEnding",
    value: function getLineEnding() {
      if (this.suffix) {
        return this.suffix;
      }

      if (!(0, _util.isReactNative)() && (0, _util.isNode)() && (0, _util.isWindows)()) {
        return _lineEndings.LINE_ENDINGS.WIN32;
      }

      return _lineEndings.LINE_ENDINGS.POSIX;
    }
  }, {
    key: "formatString",
    value: function formatString(str) {
      if (this.format === _formats.FORMAT_HTML) {
        return "<p>".concat(str, "</p>");
      }

      return str;
    }
  }, {
    key: "formatStrings",
    value: function formatStrings(strings) {
      var _this = this;

      return strings.map(function (str) {
        return _this.formatString(str);
      });
    }
  }, {
    key: "generateWords",
    value: function generateWords(num) {
      return this.formatString(this.generator.generateRandomWords(num));
    }
  }, {
    key: "generateSentences",
    value: function generateSentences(num) {
      return this.formatString(this.generator.generateRandomParagraph(num));
    }
  }, {
    key: "generateParagraphs",
    value: function generateParagraphs(num) {
      var makeString = this.generator.generateRandomParagraph.bind(this.generator);
      return this.formatStrings((0, _util.makeArrayOfStrings)(num, makeString)).join(this.getLineEnding());
    }
  }]);

  return LoremIpsum;
}();

var _default = LoremIpsum;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJMb3JlbUlwc3VtIiwib3B0aW9ucyIsImZvcm1hdCIsIkZPUk1BVF9QTEFJTiIsInN1ZmZpeCIsIkZPUk1BVFMiLCJpbmRleE9mIiwidG9Mb3dlckNhc2UiLCJFcnJvciIsImpvaW4iLCJnZW5lcmF0b3IiLCJHZW5lcmF0b3IiLCJpc1JlYWN0TmF0aXZlIiwiaXNOb2RlIiwiaXNXaW5kb3dzIiwiTElORV9FTkRJTkdTIiwiV0lOMzIiLCJQT1NJWCIsInN0ciIsIkZPUk1BVF9IVE1MIiwic3RyaW5ncyIsIm1hcCIsImZvcm1hdFN0cmluZyIsIm51bSIsImdlbmVyYXRlUmFuZG9tV29yZHMiLCJnZW5lcmF0ZVJhbmRvbVBhcmFncmFwaCIsIm1ha2VTdHJpbmciLCJiaW5kIiwiZm9ybWF0U3RyaW5ncyIsIm1ha2VBcnJheU9mU3RyaW5ncyIsImdldExpbmVFbmRpbmciXSwic291cmNlcyI6WyIuLi8uLi9zcmMvbGliL0xvcmVtSXBzdW0udHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRk9STUFUX0hUTUwsIEZPUk1BVF9QTEFJTiwgRk9STUFUUywgTG9yZW1Gb3JtYXQgfSBmcm9tIFwiLi4vY29uc3RhbnRzL2Zvcm1hdHNcIjtcclxuaW1wb3J0IHsgTElORV9FTkRJTkdTIH0gZnJvbSBcIi4uL2NvbnN0YW50cy9saW5lRW5kaW5nc1wiO1xyXG5pbXBvcnQgR2VuZXJhdG9yLCB7IElHZW5lcmF0b3JPcHRpb25zIH0gZnJvbSBcIi4uL2xpYi9nZW5lcmF0b3JcIjtcclxuaW1wb3J0IHsgaXNOb2RlLCBpc1JlYWN0TmF0aXZlLCBpc1dpbmRvd3MsIG1ha2VBcnJheU9mU3RyaW5ncyB9IGZyb20gXCIuLi91dGlsXCI7XHJcblxyXG5jbGFzcyBMb3JlbUlwc3VtIHtcclxuICBwdWJsaWMgZ2VuZXJhdG9yOiBHZW5lcmF0b3I7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgb3B0aW9uczogSUdlbmVyYXRvck9wdGlvbnMgPSB7fSxcclxuICAgIHB1YmxpYyBmb3JtYXQ6IExvcmVtRm9ybWF0ID0gRk9STUFUX1BMQUlOLFxyXG4gICAgcHVibGljIHN1ZmZpeD86IHN0cmluZyxcclxuICApIHtcclxuICAgIGlmIChGT1JNQVRTLmluZGV4T2YoZm9ybWF0LnRvTG93ZXJDYXNlKCkpID09PSAtMSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICAgYCR7Zm9ybWF0fSBpcyBhbiBpbnZhbGlkIGZvcm1hdC4gUGxlYXNlIHVzZSAke0ZPUk1BVFMuam9pbihcIiBvciBcIil9LmAsXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmdlbmVyYXRvciA9IG5ldyBHZW5lcmF0b3Iob3B0aW9ucyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0TGluZUVuZGluZygpIHtcclxuICAgIGlmICh0aGlzLnN1ZmZpeCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5zdWZmaXg7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFpc1JlYWN0TmF0aXZlKCkgJiYgaXNOb2RlKCkgJiYgaXNXaW5kb3dzKCkpIHtcclxuICAgICAgcmV0dXJuIExJTkVfRU5ESU5HUy5XSU4zMjtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gTElORV9FTkRJTkdTLlBPU0lYO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGZvcm1hdFN0cmluZyhzdHI6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBpZiAodGhpcy5mb3JtYXQgPT09IEZPUk1BVF9IVE1MKSB7XHJcbiAgICAgIHJldHVybiBgPHA+JHtzdHJ9PC9wPmA7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3RyO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGZvcm1hdFN0cmluZ3Moc3RyaW5nczogc3RyaW5nW10pOiBzdHJpbmdbXSB7XHJcbiAgICByZXR1cm4gc3RyaW5ncy5tYXAoKHN0cikgPT4gdGhpcy5mb3JtYXRTdHJpbmcoc3RyKSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2VuZXJhdGVXb3JkcyhudW0/OiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuZm9ybWF0U3RyaW5nKHRoaXMuZ2VuZXJhdG9yLmdlbmVyYXRlUmFuZG9tV29yZHMobnVtKSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2VuZXJhdGVTZW50ZW5jZXMobnVtPzogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLmZvcm1hdFN0cmluZyh0aGlzLmdlbmVyYXRvci5nZW5lcmF0ZVJhbmRvbVBhcmFncmFwaChudW0pKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZW5lcmF0ZVBhcmFncmFwaHMobnVtOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgbWFrZVN0cmluZyA9IHRoaXMuZ2VuZXJhdG9yLmdlbmVyYXRlUmFuZG9tUGFyYWdyYXBoLmJpbmQoXHJcbiAgICAgIHRoaXMuZ2VuZXJhdG9yLFxyXG4gICAgKTtcclxuICAgIHJldHVybiB0aGlzLmZvcm1hdFN0cmluZ3MobWFrZUFycmF5T2ZTdHJpbmdzKG51bSwgbWFrZVN0cmluZykpLmpvaW4oXHJcbiAgICAgIHRoaXMuZ2V0TGluZUVuZGluZygpLFxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvcmVtSXBzdW07XHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7SUFFTUEsVTtFQUdKLHNCQUlFO0lBQUEsSUFIQUMsT0FHQSx1RUFINkIsRUFHN0I7SUFBQSxJQUZPQyxNQUVQLHVFQUY2QkMscUJBRTdCO0lBQUEsSUFET0MsTUFDUDs7SUFBQTs7SUFBQSxLQUZPRixNQUVQLEdBRk9BLE1BRVA7SUFBQSxLQURPRSxNQUNQLEdBRE9BLE1BQ1A7O0lBQUE7O0lBQ0EsSUFBSUMsZ0JBQUEsQ0FBUUMsT0FBUixDQUFnQkosTUFBTSxDQUFDSyxXQUFQLEVBQWhCLE1BQTBDLENBQUMsQ0FBL0MsRUFBa0Q7TUFDaEQsTUFBTSxJQUFJQyxLQUFKLFdBQ0ROLE1BREMsK0NBQzBDRyxnQkFBQSxDQUFRSSxJQUFSLENBQWEsTUFBYixDQUQxQyxPQUFOO0lBR0Q7O0lBQ0QsS0FBS0MsU0FBTCxHQUFpQixJQUFJQyxxQkFBSixDQUFjVixPQUFkLENBQWpCO0VBQ0Q7Ozs7V0FFRCx5QkFBdUI7TUFDckIsSUFBSSxLQUFLRyxNQUFULEVBQWlCO1FBQ2YsT0FBTyxLQUFLQSxNQUFaO01BQ0Q7O01BRUQsSUFBSSxDQUFDLElBQUFRLG1CQUFBLEdBQUQsSUFBb0IsSUFBQUMsWUFBQSxHQUFwQixJQUFnQyxJQUFBQyxlQUFBLEdBQXBDLEVBQWlEO1FBQy9DLE9BQU9DLHlCQUFBLENBQWFDLEtBQXBCO01BQ0Q7O01BRUQsT0FBT0QseUJBQUEsQ0FBYUUsS0FBcEI7SUFDRDs7O1dBRUQsc0JBQW9CQyxHQUFwQixFQUF5QztNQUN2QyxJQUFJLEtBQUtoQixNQUFMLEtBQWdCaUIsb0JBQXBCLEVBQWlDO1FBQy9CLG9CQUFhRCxHQUFiO01BQ0Q7O01BQ0QsT0FBT0EsR0FBUDtJQUNEOzs7V0FFRCx1QkFBcUJFLE9BQXJCLEVBQWtEO01BQUE7O01BQ2hELE9BQU9BLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQUNILEdBQUQ7UUFBQSxPQUFTLEtBQUksQ0FBQ0ksWUFBTCxDQUFrQkosR0FBbEIsQ0FBVDtNQUFBLENBQVosQ0FBUDtJQUNEOzs7V0FFRCx1QkFBcUJLLEdBQXJCLEVBQTJDO01BQ3pDLE9BQU8sS0FBS0QsWUFBTCxDQUFrQixLQUFLWixTQUFMLENBQWVjLG1CQUFmLENBQW1DRCxHQUFuQyxDQUFsQixDQUFQO0lBQ0Q7OztXQUVELDJCQUF5QkEsR0FBekIsRUFBK0M7TUFDN0MsT0FBTyxLQUFLRCxZQUFMLENBQWtCLEtBQUtaLFNBQUwsQ0FBZWUsdUJBQWYsQ0FBdUNGLEdBQXZDLENBQWxCLENBQVA7SUFDRDs7O1dBRUQsNEJBQTBCQSxHQUExQixFQUErQztNQUM3QyxJQUFNRyxVQUFVLEdBQUcsS0FBS2hCLFNBQUwsQ0FBZWUsdUJBQWYsQ0FBdUNFLElBQXZDLENBQ2pCLEtBQUtqQixTQURZLENBQW5CO01BR0EsT0FBTyxLQUFLa0IsYUFBTCxDQUFtQixJQUFBQyx3QkFBQSxFQUFtQk4sR0FBbkIsRUFBd0JHLFVBQXhCLENBQW5CLEVBQXdEakIsSUFBeEQsQ0FDTCxLQUFLcUIsYUFBTCxFQURLLENBQVA7SUFHRDs7Ozs7O2VBR1k5QixVIn0=

/***/ }),

/***/ "./node_modules/lorem-ipsum/dist/lib/generator.js":
/*!********************************************************!*\
  !*** ./node_modules/lorem-ipsum/dist/lib/generator.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _words = __webpack_require__(/*! ../constants/words */ "./node_modules/lorem-ipsum/dist/constants/words.js");

var _util = __webpack_require__(/*! ../util */ "./node_modules/lorem-ipsum/dist/util/index.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Generator = /*#__PURE__*/function () {
  function Generator() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$sentencesPerPara = _ref.sentencesPerParagraph,
        sentencesPerParagraph = _ref$sentencesPerPara === void 0 ? {
      max: 7,
      min: 3
    } : _ref$sentencesPerPara,
        _ref$wordsPerSentence = _ref.wordsPerSentence,
        wordsPerSentence = _ref$wordsPerSentence === void 0 ? {
      max: 15,
      min: 5
    } : _ref$wordsPerSentence,
        random = _ref.random,
        seed = _ref.seed,
        _ref$words = _ref.words,
        words = _ref$words === void 0 ? _words.WORDS : _ref$words;

    _classCallCheck(this, Generator);

    _defineProperty(this, "sentencesPerParagraph", void 0);

    _defineProperty(this, "wordsPerSentence", void 0);

    _defineProperty(this, "random", void 0);

    _defineProperty(this, "words", void 0);

    if (sentencesPerParagraph.min > sentencesPerParagraph.max) {
      throw new Error("Minimum number of sentences per paragraph (".concat(sentencesPerParagraph.min, ") cannot exceed maximum (").concat(sentencesPerParagraph.max, ")."));
    }

    if (wordsPerSentence.min > wordsPerSentence.max) {
      throw new Error("Minimum number of words per sentence (".concat(wordsPerSentence.min, ") cannot exceed maximum (").concat(wordsPerSentence.max, ")."));
    }

    this.sentencesPerParagraph = sentencesPerParagraph;
    this.words = words;
    this.wordsPerSentence = wordsPerSentence;
    this.random = random || Math.random;
  }

  _createClass(Generator, [{
    key: "generateRandomInteger",
    value: function generateRandomInteger(min, max) {
      return Math.floor(this.random() * (max - min + 1) + min);
    }
  }, {
    key: "generateRandomWords",
    value: function generateRandomWords(num) {
      var _this = this;

      var _this$wordsPerSentenc = this.wordsPerSentence,
          min = _this$wordsPerSentenc.min,
          max = _this$wordsPerSentenc.max;
      var length = num || this.generateRandomInteger(min, max);
      return (0, _util.makeArrayOfLength)(length).reduce(function (accumulator, index) {
        return "".concat(_this.pluckRandomWord(), " ").concat(accumulator);
      }, "").trim();
    }
  }, {
    key: "generateRandomSentence",
    value: function generateRandomSentence(num) {
      return "".concat((0, _util.capitalize)(this.generateRandomWords(num)), ".");
    }
  }, {
    key: "generateRandomParagraph",
    value: function generateRandomParagraph(num) {
      var _this2 = this;

      var _this$sentencesPerPar = this.sentencesPerParagraph,
          min = _this$sentencesPerPar.min,
          max = _this$sentencesPerPar.max;
      var length = num || this.generateRandomInteger(min, max);
      return (0, _util.makeArrayOfLength)(length).reduce(function (accumulator, index) {
        return "".concat(_this2.generateRandomSentence(), " ").concat(accumulator);
      }, "").trim();
    }
  }, {
    key: "pluckRandomWord",
    value: function pluckRandomWord() {
      var min = 0;
      var max = this.words.length - 1;
      var index = this.generateRandomInteger(min, max);
      return this.words[index];
    }
  }]);

  return Generator;
}();

var _default = Generator;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJHZW5lcmF0b3IiLCJzZW50ZW5jZXNQZXJQYXJhZ3JhcGgiLCJtYXgiLCJtaW4iLCJ3b3Jkc1BlclNlbnRlbmNlIiwicmFuZG9tIiwic2VlZCIsIndvcmRzIiwiV09SRFMiLCJFcnJvciIsIk1hdGgiLCJmbG9vciIsIm51bSIsImxlbmd0aCIsImdlbmVyYXRlUmFuZG9tSW50ZWdlciIsIm1ha2VBcnJheU9mTGVuZ3RoIiwicmVkdWNlIiwiYWNjdW11bGF0b3IiLCJpbmRleCIsInBsdWNrUmFuZG9tV29yZCIsInRyaW0iLCJjYXBpdGFsaXplIiwiZ2VuZXJhdGVSYW5kb21Xb3JkcyIsImdlbmVyYXRlUmFuZG9tU2VudGVuY2UiXSwic291cmNlcyI6WyIuLi8uLi9zcmMvbGliL2dlbmVyYXRvci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBXT1JEUyB9IGZyb20gXCIuLi9jb25zdGFudHMvd29yZHNcIjtcclxuaW1wb3J0IHsgY2FwaXRhbGl6ZSwgbWFrZUFycmF5T2ZMZW5ndGggfSBmcm9tIFwiLi4vdXRpbFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQm91bmRzIHtcclxuICBtaW46IG51bWJlcjtcclxuICBtYXg6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgSVBybmcgPSAoKSA9PiBudW1iZXI7XHJcblxyXG5leHBvcnQgdHlwZSBJU2VlZFJhbmRvbSA9IG5ldyAoc2VlZD86IHN0cmluZykgPT4gSVBybmc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElNYXRoIHtcclxuICBzZWVkcmFuZG9tOiBJU2VlZFJhbmRvbTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJR2VuZXJhdG9yT3B0aW9ucyB7XHJcbiAgc2VudGVuY2VzUGVyUGFyYWdyYXBoPzogSUJvdW5kcztcclxuICB3b3Jkc1BlclNlbnRlbmNlPzogSUJvdW5kcztcclxuICByYW5kb20/OiBJUHJuZztcclxuICBzZWVkPzogc3RyaW5nO1xyXG4gIHdvcmRzPzogc3RyaW5nW107XHJcbn1cclxuXHJcbmNsYXNzIEdlbmVyYXRvciB7XHJcbiAgcHVibGljIHNlbnRlbmNlc1BlclBhcmFncmFwaDogSUJvdW5kcztcclxuICBwdWJsaWMgd29yZHNQZXJTZW50ZW5jZTogSUJvdW5kcztcclxuICBwdWJsaWMgcmFuZG9tOiBJUHJuZztcclxuICBwdWJsaWMgd29yZHM6IHN0cmluZ1tdO1xyXG5cclxuICBjb25zdHJ1Y3Rvcih7XHJcbiAgICBzZW50ZW5jZXNQZXJQYXJhZ3JhcGggPSB7IG1heDogNywgbWluOiAzIH0sXHJcbiAgICB3b3Jkc1BlclNlbnRlbmNlID0geyBtYXg6IDE1LCBtaW46IDUgfSxcclxuICAgIHJhbmRvbSxcclxuICAgIHNlZWQsXHJcbiAgICB3b3JkcyA9IFdPUkRTLFxyXG4gIH06IElHZW5lcmF0b3JPcHRpb25zID0ge30pIHtcclxuICAgIGlmIChzZW50ZW5jZXNQZXJQYXJhZ3JhcGgubWluID4gc2VudGVuY2VzUGVyUGFyYWdyYXBoLm1heCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICAgYE1pbmltdW0gbnVtYmVyIG9mIHNlbnRlbmNlcyBwZXIgcGFyYWdyYXBoICgke1xyXG4gICAgICAgICAgc2VudGVuY2VzUGVyUGFyYWdyYXBoLm1pblxyXG4gICAgICAgIH0pIGNhbm5vdCBleGNlZWQgbWF4aW11bSAoJHtzZW50ZW5jZXNQZXJQYXJhZ3JhcGgubWF4fSkuYCxcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAod29yZHNQZXJTZW50ZW5jZS5taW4gPiB3b3Jkc1BlclNlbnRlbmNlLm1heCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICAgYE1pbmltdW0gbnVtYmVyIG9mIHdvcmRzIHBlciBzZW50ZW5jZSAoJHtcclxuICAgICAgICAgIHdvcmRzUGVyU2VudGVuY2UubWluXHJcbiAgICAgICAgfSkgY2Fubm90IGV4Y2VlZCBtYXhpbXVtICgke3dvcmRzUGVyU2VudGVuY2UubWF4fSkuYCxcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnNlbnRlbmNlc1BlclBhcmFncmFwaCA9IHNlbnRlbmNlc1BlclBhcmFncmFwaDtcclxuICAgIHRoaXMud29yZHMgPSB3b3JkcztcclxuICAgIHRoaXMud29yZHNQZXJTZW50ZW5jZSA9IHdvcmRzUGVyU2VudGVuY2U7XHJcbiAgICB0aGlzLnJhbmRvbSA9IHJhbmRvbSB8fCBNYXRoLnJhbmRvbTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZW5lcmF0ZVJhbmRvbUludGVnZXIobWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIHJldHVybiBNYXRoLmZsb29yKHRoaXMucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkgKyBtaW4pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdlbmVyYXRlUmFuZG9tV29yZHMobnVtPzogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IHsgbWluLCBtYXggfSA9IHRoaXMud29yZHNQZXJTZW50ZW5jZTtcclxuICAgIGNvbnN0IGxlbmd0aCA9IG51bSB8fCB0aGlzLmdlbmVyYXRlUmFuZG9tSW50ZWdlcihtaW4sIG1heCk7XHJcbiAgICByZXR1cm4gbWFrZUFycmF5T2ZMZW5ndGgobGVuZ3RoKVxyXG4gICAgICAucmVkdWNlKChhY2N1bXVsYXRvcjogc3RyaW5nLCBpbmRleDogbnVtYmVyKTogc3RyaW5nID0+IHtcclxuICAgICAgICByZXR1cm4gYCR7dGhpcy5wbHVja1JhbmRvbVdvcmQoKX0gJHthY2N1bXVsYXRvcn1gO1xyXG4gICAgICB9LCBcIlwiKVxyXG4gICAgICAudHJpbSgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdlbmVyYXRlUmFuZG9tU2VudGVuY2UobnVtPzogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBgJHtjYXBpdGFsaXplKHRoaXMuZ2VuZXJhdGVSYW5kb21Xb3JkcyhudW0pKX0uYDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZW5lcmF0ZVJhbmRvbVBhcmFncmFwaChudW0/OiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgeyBtaW4sIG1heCB9ID0gdGhpcy5zZW50ZW5jZXNQZXJQYXJhZ3JhcGg7XHJcbiAgICBjb25zdCBsZW5ndGggPSBudW0gfHwgdGhpcy5nZW5lcmF0ZVJhbmRvbUludGVnZXIobWluLCBtYXgpO1xyXG4gICAgcmV0dXJuIG1ha2VBcnJheU9mTGVuZ3RoKGxlbmd0aClcclxuICAgICAgLnJlZHVjZSgoYWNjdW11bGF0b3I6IHN0cmluZywgaW5kZXg6IG51bWJlcik6IHN0cmluZyA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGAke3RoaXMuZ2VuZXJhdGVSYW5kb21TZW50ZW5jZSgpfSAke2FjY3VtdWxhdG9yfWA7XHJcbiAgICAgIH0sIFwiXCIpXHJcbiAgICAgIC50cmltKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcGx1Y2tSYW5kb21Xb3JkKCk6IHN0cmluZyB7XHJcbiAgICBjb25zdCBtaW4gPSAwO1xyXG4gICAgY29uc3QgbWF4ID0gdGhpcy53b3Jkcy5sZW5ndGggLSAxO1xyXG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmdlbmVyYXRlUmFuZG9tSW50ZWdlcihtaW4sIG1heCk7XHJcbiAgICByZXR1cm4gdGhpcy53b3Jkc1tpbmRleF07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHZW5lcmF0b3I7XHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7Ozs7O0lBdUJNQSxTO0VBTUoscUJBTTJCO0lBQUEsK0VBQUosRUFBSTtJQUFBLGlDQUx6QkMscUJBS3lCO0lBQUEsSUFMekJBLHFCQUt5QixzQ0FMRDtNQUFFQyxHQUFHLEVBQUUsQ0FBUDtNQUFVQyxHQUFHLEVBQUU7SUFBZixDQUtDO0lBQUEsaUNBSnpCQyxnQkFJeUI7SUFBQSxJQUp6QkEsZ0JBSXlCLHNDQUpOO01BQUVGLEdBQUcsRUFBRSxFQUFQO01BQVdDLEdBQUcsRUFBRTtJQUFoQixDQUlNO0lBQUEsSUFIekJFLE1BR3lCLFFBSHpCQSxNQUd5QjtJQUFBLElBRnpCQyxJQUV5QixRQUZ6QkEsSUFFeUI7SUFBQSxzQkFEekJDLEtBQ3lCO0lBQUEsSUFEekJBLEtBQ3lCLDJCQURqQkMsWUFDaUI7O0lBQUE7O0lBQUE7O0lBQUE7O0lBQUE7O0lBQUE7O0lBQ3pCLElBQUlQLHFCQUFxQixDQUFDRSxHQUF0QixHQUE0QkYscUJBQXFCLENBQUNDLEdBQXRELEVBQTJEO01BQ3pELE1BQU0sSUFBSU8sS0FBSixzREFFRlIscUJBQXFCLENBQUNFLEdBRnBCLHNDQUd3QkYscUJBQXFCLENBQUNDLEdBSDlDLFFBQU47SUFLRDs7SUFFRCxJQUFJRSxnQkFBZ0IsQ0FBQ0QsR0FBakIsR0FBdUJDLGdCQUFnQixDQUFDRixHQUE1QyxFQUFpRDtNQUMvQyxNQUFNLElBQUlPLEtBQUosaURBRUZMLGdCQUFnQixDQUFDRCxHQUZmLHNDQUd3QkMsZ0JBQWdCLENBQUNGLEdBSHpDLFFBQU47SUFLRDs7SUFFRCxLQUFLRCxxQkFBTCxHQUE2QkEscUJBQTdCO0lBQ0EsS0FBS00sS0FBTCxHQUFhQSxLQUFiO0lBQ0EsS0FBS0gsZ0JBQUwsR0FBd0JBLGdCQUF4QjtJQUNBLEtBQUtDLE1BQUwsR0FBY0EsTUFBTSxJQUFJSyxJQUFJLENBQUNMLE1BQTdCO0VBQ0Q7Ozs7V0FFRCwrQkFBNkJGLEdBQTdCLEVBQTBDRCxHQUExQyxFQUErRDtNQUM3RCxPQUFPUSxJQUFJLENBQUNDLEtBQUwsQ0FBVyxLQUFLTixNQUFMLE1BQWlCSCxHQUFHLEdBQUdDLEdBQU4sR0FBWSxDQUE3QixJQUFrQ0EsR0FBN0MsQ0FBUDtJQUNEOzs7V0FFRCw2QkFBMkJTLEdBQTNCLEVBQWlEO01BQUE7O01BQy9DLDRCQUFxQixLQUFLUixnQkFBMUI7TUFBQSxJQUFRRCxHQUFSLHlCQUFRQSxHQUFSO01BQUEsSUFBYUQsR0FBYix5QkFBYUEsR0FBYjtNQUNBLElBQU1XLE1BQU0sR0FBR0QsR0FBRyxJQUFJLEtBQUtFLHFCQUFMLENBQTJCWCxHQUEzQixFQUFnQ0QsR0FBaEMsQ0FBdEI7TUFDQSxPQUFPLElBQUFhLHVCQUFBLEVBQWtCRixNQUFsQixFQUNKRyxNQURJLENBQ0csVUFBQ0MsV0FBRCxFQUFzQkMsS0FBdEIsRUFBZ0Q7UUFDdEQsaUJBQVUsS0FBSSxDQUFDQyxlQUFMLEVBQVYsY0FBb0NGLFdBQXBDO01BQ0QsQ0FISSxFQUdGLEVBSEUsRUFJSkcsSUFKSSxFQUFQO0lBS0Q7OztXQUVELGdDQUE4QlIsR0FBOUIsRUFBb0Q7TUFDbEQsaUJBQVUsSUFBQVMsZ0JBQUEsRUFBVyxLQUFLQyxtQkFBTCxDQUF5QlYsR0FBekIsQ0FBWCxDQUFWO0lBQ0Q7OztXQUVELGlDQUErQkEsR0FBL0IsRUFBcUQ7TUFBQTs7TUFDbkQsNEJBQXFCLEtBQUtYLHFCQUExQjtNQUFBLElBQVFFLEdBQVIseUJBQVFBLEdBQVI7TUFBQSxJQUFhRCxHQUFiLHlCQUFhQSxHQUFiO01BQ0EsSUFBTVcsTUFBTSxHQUFHRCxHQUFHLElBQUksS0FBS0UscUJBQUwsQ0FBMkJYLEdBQTNCLEVBQWdDRCxHQUFoQyxDQUF0QjtNQUNBLE9BQU8sSUFBQWEsdUJBQUEsRUFBa0JGLE1BQWxCLEVBQ0pHLE1BREksQ0FDRyxVQUFDQyxXQUFELEVBQXNCQyxLQUF0QixFQUFnRDtRQUN0RCxpQkFBVSxNQUFJLENBQUNLLHNCQUFMLEVBQVYsY0FBMkNOLFdBQTNDO01BQ0QsQ0FISSxFQUdGLEVBSEUsRUFJSkcsSUFKSSxFQUFQO0lBS0Q7OztXQUVELDJCQUFpQztNQUMvQixJQUFNakIsR0FBRyxHQUFHLENBQVo7TUFDQSxJQUFNRCxHQUFHLEdBQUcsS0FBS0ssS0FBTCxDQUFXTSxNQUFYLEdBQW9CLENBQWhDO01BQ0EsSUFBTUssS0FBSyxHQUFHLEtBQUtKLHFCQUFMLENBQTJCWCxHQUEzQixFQUFnQ0QsR0FBaEMsQ0FBZDtNQUNBLE9BQU8sS0FBS0ssS0FBTCxDQUFXVyxLQUFYLENBQVA7SUFDRDs7Ozs7O2VBR1lsQixTIn0=

/***/ }),

/***/ "./node_modules/lorem-ipsum/dist/util/capitalize.js":
/*!**********************************************************!*\
  !*** ./node_modules/lorem-ipsum/dist/util/capitalize.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

/**
 * @param str  A string that may or may not be capitalized.
 * @returns    A capitalized string.
 */
var capitalize = function capitalize(str) {
  var trimmed = str.trim();
  return trimmed.charAt(0).toUpperCase() + trimmed.slice(1);
};

var _default = capitalize;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjYXBpdGFsaXplIiwic3RyIiwidHJpbW1lZCIsInRyaW0iLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIl0sInNvdXJjZXMiOlsiLi4vLi4vc3JjL3V0aWwvY2FwaXRhbGl6ZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQHBhcmFtIHN0ciAgQSBzdHJpbmcgdGhhdCBtYXkgb3IgbWF5IG5vdCBiZSBjYXBpdGFsaXplZC5cclxuICogQHJldHVybnMgICAgQSBjYXBpdGFsaXplZCBzdHJpbmcuXHJcbiAqL1xyXG5jb25zdCBjYXBpdGFsaXplID0gKHN0cjogc3RyaW5nKTogc3RyaW5nID0+IHtcclxuICBjb25zdCB0cmltbWVkID0gc3RyLnRyaW0oKTtcclxuICByZXR1cm4gdHJpbW1lZC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHRyaW1tZWQuc2xpY2UoMSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjYXBpdGFsaXplO1xyXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLEdBQUQsRUFBeUI7RUFDMUMsSUFBTUMsT0FBTyxHQUFHRCxHQUFHLENBQUNFLElBQUosRUFBaEI7RUFDQSxPQUFPRCxPQUFPLENBQUNFLE1BQVIsQ0FBZSxDQUFmLEVBQWtCQyxXQUFsQixLQUFrQ0gsT0FBTyxDQUFDSSxLQUFSLENBQWMsQ0FBZCxDQUF6QztBQUNELENBSEQ7O2VBS2VOLFUifQ==

/***/ }),

/***/ "./node_modules/lorem-ipsum/dist/util/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/lorem-ipsum/dist/util/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "capitalize", ({
  enumerable: true,
  get: function get() {
    return _capitalize["default"];
  }
}));
Object.defineProperty(exports, "isNode", ({
  enumerable: true,
  get: function get() {
    return _isNode["default"];
  }
}));
Object.defineProperty(exports, "isReactNative", ({
  enumerable: true,
  get: function get() {
    return _isReactNative["default"];
  }
}));
Object.defineProperty(exports, "isWindows", ({
  enumerable: true,
  get: function get() {
    return _isWindows["default"];
  }
}));
Object.defineProperty(exports, "makeArrayOfLength", ({
  enumerable: true,
  get: function get() {
    return _makeArrayOfLength["default"];
  }
}));
Object.defineProperty(exports, "makeArrayOfStrings", ({
  enumerable: true,
  get: function get() {
    return _makeArrayOfStrings["default"];
  }
}));

var _capitalize = _interopRequireDefault(__webpack_require__(/*! ./capitalize */ "./node_modules/lorem-ipsum/dist/util/capitalize.js"));

var _isNode = _interopRequireDefault(__webpack_require__(/*! ./isNode */ "./node_modules/lorem-ipsum/dist/util/isNode.js"));

var _isReactNative = _interopRequireDefault(__webpack_require__(/*! ./isReactNative */ "./node_modules/lorem-ipsum/dist/util/isReactNative.js"));

var _isWindows = _interopRequireDefault(__webpack_require__(/*! ./isWindows */ "./node_modules/lorem-ipsum/dist/util/isWindows.js"));

var _makeArrayOfLength = _interopRequireDefault(__webpack_require__(/*! ./makeArrayOfLength */ "./node_modules/lorem-ipsum/dist/util/makeArrayOfLength.js"));

var _makeArrayOfStrings = _interopRequireDefault(__webpack_require__(/*! ./makeArrayOfStrings */ "./node_modules/lorem-ipsum/dist/util/makeArrayOfStrings.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiLi4vLi4vc3JjL3V0aWwvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNhcGl0YWxpemUgZnJvbSBcIi4vY2FwaXRhbGl6ZVwiO1xyXG5pbXBvcnQgaXNOb2RlIGZyb20gXCIuL2lzTm9kZVwiO1xyXG5pbXBvcnQgaXNSZWFjdE5hdGl2ZSBmcm9tIFwiLi9pc1JlYWN0TmF0aXZlXCI7XHJcbmltcG9ydCBpc1dpbmRvd3MgZnJvbSBcIi4vaXNXaW5kb3dzXCI7XHJcbmltcG9ydCBtYWtlQXJyYXlPZkxlbmd0aCBmcm9tIFwiLi9tYWtlQXJyYXlPZkxlbmd0aFwiO1xyXG5pbXBvcnQgbWFrZUFycmF5T2ZTdHJpbmdzIGZyb20gXCIuL21ha2VBcnJheU9mU3RyaW5nc1wiO1xyXG5cclxuZXhwb3J0IHtcclxuICBjYXBpdGFsaXplLFxyXG4gIGlzTm9kZSxcclxuICBpc1JlYWN0TmF0aXZlLFxyXG4gIGlzV2luZG93cyxcclxuICBtYWtlQXJyYXlPZkxlbmd0aCxcclxuICBtYWtlQXJyYXlPZlN0cmluZ3MsXHJcbn07XHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0EifQ==

/***/ }),

/***/ "./node_modules/lorem-ipsum/dist/util/isNode.js":
/*!******************************************************!*\
  !*** ./node_modules/lorem-ipsum/dist/util/isNode.js ***!
  \******************************************************/
/***/ ((module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

/**
 * @returns  True if the runtime is NodeJS.
 */
var isNode = function isNode() {
  return  true && !!module.exports;
};

var _default = isNode;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJpc05vZGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sInNvdXJjZXMiOlsiLi4vLi4vc3JjL3V0aWwvaXNOb2RlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAcmV0dXJucyAgVHJ1ZSBpZiB0aGUgcnVudGltZSBpcyBOb2RlSlMuXHJcbiAqL1xyXG5jb25zdCBpc05vZGUgPSAoKTogYm9vbGVhbiA9PiB7XHJcbiAgcmV0dXJuIHR5cGVvZiBtb2R1bGUgIT09IFwidW5kZWZpbmVkXCIgJiYgISFtb2R1bGUuZXhwb3J0cztcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGlzTm9kZTtcclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBZTtFQUM1QixPQUFPLE9BQU9DLE1BQVAsS0FBa0IsV0FBbEIsSUFBaUMsQ0FBQyxDQUFDQSxNQUFNLENBQUNDLE9BQWpEO0FBQ0QsQ0FGRDs7ZUFJZUYsTSJ9

/***/ }),

/***/ "./node_modules/lorem-ipsum/dist/util/isReactNative.js":
/*!*************************************************************!*\
  !*** ./node_modules/lorem-ipsum/dist/util/isReactNative.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

/**
 * Check if runtime is ReactNative.
 * Solution based on https://github.com/knicklabs/lorem-ipsum.js/pull/52/files
 *
 * @returns  True if runtime is ReactNative.
 */
var isReactNative = function isReactNative() {
  var isReactNativeResult = false;

  try {
    isReactNativeResult = navigator.product === "ReactNative";
  } catch (e) {
    isReactNativeResult = false;
  }

  return isReactNativeResult;
};

var _default = isReactNative;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJpc1JlYWN0TmF0aXZlIiwiaXNSZWFjdE5hdGl2ZVJlc3VsdCIsIm5hdmlnYXRvciIsInByb2R1Y3QiLCJlIl0sInNvdXJjZXMiOlsiLi4vLi4vc3JjL3V0aWwvaXNSZWFjdE5hdGl2ZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQ2hlY2sgaWYgcnVudGltZSBpcyBSZWFjdE5hdGl2ZS5cclxuICogU29sdXRpb24gYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2tuaWNrbGFicy9sb3JlbS1pcHN1bS5qcy9wdWxsLzUyL2ZpbGVzXHJcbiAqXHJcbiAqIEByZXR1cm5zICBUcnVlIGlmIHJ1bnRpbWUgaXMgUmVhY3ROYXRpdmUuXHJcbiAqL1xyXG5jb25zdCBpc1JlYWN0TmF0aXZlID0gKCk6IGJvb2xlYW4gPT4ge1xyXG4gIGxldCBpc1JlYWN0TmF0aXZlUmVzdWx0OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIHRyeSB7XHJcbiAgICBpc1JlYWN0TmF0aXZlUmVzdWx0ID0gbmF2aWdhdG9yLnByb2R1Y3QgPT09IFwiUmVhY3ROYXRpdmVcIjtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBpc1JlYWN0TmF0aXZlUmVzdWx0ID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gaXNSZWFjdE5hdGl2ZVJlc3VsdDtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGlzUmVhY3ROYXRpdmU7XHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQU1BLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBZTtFQUNuQyxJQUFJQyxtQkFBNEIsR0FBRyxLQUFuQzs7RUFFQSxJQUFJO0lBQ0ZBLG1CQUFtQixHQUFHQyxTQUFTLENBQUNDLE9BQVYsS0FBc0IsYUFBNUM7RUFDRCxDQUZELENBRUUsT0FBT0MsQ0FBUCxFQUFVO0lBQ1ZILG1CQUFtQixHQUFHLEtBQXRCO0VBQ0Q7O0VBRUQsT0FBT0EsbUJBQVA7QUFDRCxDQVZEOztlQVllRCxhIn0=

/***/ }),

/***/ "./node_modules/lorem-ipsum/dist/util/isWindows.js":
/*!*********************************************************!*\
  !*** ./node_modules/lorem-ipsum/dist/util/isWindows.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _platforms = __webpack_require__(/*! ../constants/platforms */ "./node_modules/lorem-ipsum/dist/constants/platforms.js");

/**
 * @returns True if process is windows.
 */
var isWindows = function isWindows() {
  var isWindowsResult = false;

  try {
    isWindowsResult = process.platform === _platforms.SUPPORTED_PLATFORMS.WIN32;
  } catch (e) {
    isWindowsResult = false;
  }

  return isWindowsResult;
};

var _default = isWindows;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJpc1dpbmRvd3MiLCJpc1dpbmRvd3NSZXN1bHQiLCJwcm9jZXNzIiwicGxhdGZvcm0iLCJTVVBQT1JURURfUExBVEZPUk1TIiwiV0lOMzIiLCJlIl0sInNvdXJjZXMiOlsiLi4vLi4vc3JjL3V0aWwvaXNXaW5kb3dzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNVUFBPUlRFRF9QTEFURk9STVMgfSBmcm9tIFwiLi4vY29uc3RhbnRzL3BsYXRmb3Jtc1wiO1xyXG5cclxuLyoqXHJcbiAqIEByZXR1cm5zIFRydWUgaWYgcHJvY2VzcyBpcyB3aW5kb3dzLlxyXG4gKi9cclxuY29uc3QgaXNXaW5kb3dzID0gKCk6IGJvb2xlYW4gPT4ge1xyXG4gIGxldCBpc1dpbmRvd3NSZXN1bHQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICB0cnkge1xyXG4gICAgaXNXaW5kb3dzUmVzdWx0ID0gcHJvY2Vzcy5wbGF0Zm9ybSA9PT0gU1VQUE9SVEVEX1BMQVRGT1JNUy5XSU4zMjtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBpc1dpbmRvd3NSZXN1bHQgPSBmYWxzZTtcclxuICB9XHJcbiAgcmV0dXJuIGlzV2luZG93c1Jlc3VsdDtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGlzV2luZG93cztcclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBZTtFQUMvQixJQUFJQyxlQUF3QixHQUFHLEtBQS9COztFQUNBLElBQUk7SUFDRkEsZUFBZSxHQUFHQyxPQUFPLENBQUNDLFFBQVIsS0FBcUJDLDhCQUFBLENBQW9CQyxLQUEzRDtFQUNELENBRkQsQ0FFRSxPQUFPQyxDQUFQLEVBQVU7SUFDVkwsZUFBZSxHQUFHLEtBQWxCO0VBQ0Q7O0VBQ0QsT0FBT0EsZUFBUDtBQUNELENBUkQ7O2VBVWVELFMifQ==

/***/ }),

/***/ "./node_modules/lorem-ipsum/dist/util/makeArrayOfLength.js":
/*!*****************************************************************!*\
  !*** ./node_modules/lorem-ipsum/dist/util/makeArrayOfLength.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

/**
 * @param length Length "x".
 * @returns      An array of indexes of length "x".
 */
var makeArrayOfLength = function makeArrayOfLength() {
  var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  return Array.apply(null, Array(length)).map(function (item, index) {
    return index;
  });
};

var _default = makeArrayOfLength;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJtYWtlQXJyYXlPZkxlbmd0aCIsImxlbmd0aCIsIkFycmF5IiwiYXBwbHkiLCJtYXAiLCJpdGVtIiwiaW5kZXgiXSwic291cmNlcyI6WyIuLi8uLi9zcmMvdXRpbC9tYWtlQXJyYXlPZkxlbmd0aC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQHBhcmFtIGxlbmd0aCBMZW5ndGggXCJ4XCIuXHJcbiAqIEByZXR1cm5zICAgICAgQW4gYXJyYXkgb2YgaW5kZXhlcyBvZiBsZW5ndGggXCJ4XCIuXHJcbiAqL1xyXG5jb25zdCBtYWtlQXJyYXlPZkxlbmd0aCA9IChsZW5ndGg6IG51bWJlciA9IDApOiBudW1iZXJbXSA9PiB7XHJcbiAgcmV0dXJuIEFycmF5LmFwcGx5KG51bGwsIEFycmF5KGxlbmd0aCkpLm1hcChcclxuICAgIChpdGVtOiBhbnksIGluZGV4OiBudW1iZXIpOiBudW1iZXIgPT4gaW5kZXgsXHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1ha2VBcnJheU9mTGVuZ3RoO1xyXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQU1BLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsR0FBa0M7RUFBQSxJQUFqQ0MsTUFBaUMsdUVBQWhCLENBQWdCO0VBQzFELE9BQU9DLEtBQUssQ0FBQ0MsS0FBTixDQUFZLElBQVosRUFBa0JELEtBQUssQ0FBQ0QsTUFBRCxDQUF2QixFQUFpQ0csR0FBakMsQ0FDTCxVQUFDQyxJQUFELEVBQVlDLEtBQVo7SUFBQSxPQUFzQ0EsS0FBdEM7RUFBQSxDQURLLENBQVA7QUFHRCxDQUpEOztlQU1lTixpQiJ9

/***/ }),

/***/ "./node_modules/lorem-ipsum/dist/util/makeArrayOfStrings.js":
/*!******************************************************************!*\
  !*** ./node_modules/lorem-ipsum/dist/util/makeArrayOfStrings.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _makeArrayOfLength = _interopRequireDefault(__webpack_require__(/*! ./makeArrayOfLength */ "./node_modules/lorem-ipsum/dist/util/makeArrayOfLength.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * @param length  Length "x".
 * @returns       An array of strings of length "x".
 */
var makeArrayOfStrings = function makeArrayOfStrings(length, makeString) {
  var arr = (0, _makeArrayOfLength["default"])(length);
  return arr.map(function () {
    return makeString();
  });
};

var _default = makeArrayOfStrings;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJtYWtlQXJyYXlPZlN0cmluZ3MiLCJsZW5ndGgiLCJtYWtlU3RyaW5nIiwiYXJyIiwibWFrZUFycmF5T2ZMZW5ndGgiLCJtYXAiXSwic291cmNlcyI6WyIuLi8uLi9zcmMvdXRpbC9tYWtlQXJyYXlPZlN0cmluZ3MudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1ha2VBcnJheU9mTGVuZ3RoIGZyb20gXCIuL21ha2VBcnJheU9mTGVuZ3RoXCI7XHJcbi8qKlxyXG4gKiBAcGFyYW0gbGVuZ3RoICBMZW5ndGggXCJ4XCIuXHJcbiAqIEByZXR1cm5zICAgICAgIEFuIGFycmF5IG9mIHN0cmluZ3Mgb2YgbGVuZ3RoIFwieFwiLlxyXG4gKi9cclxuY29uc3QgbWFrZUFycmF5T2ZTdHJpbmdzID0gKFxyXG4gIGxlbmd0aDogbnVtYmVyLFxyXG4gIG1ha2VTdHJpbmc6ICgpID0+IHN0cmluZyxcclxuKTogc3RyaW5nW10gPT4ge1xyXG4gIGNvbnN0IGFyciA9IG1ha2VBcnJheU9mTGVuZ3RoKGxlbmd0aCk7XHJcbiAgcmV0dXJuIGFyci5tYXAoKCkgPT4gbWFrZVN0cmluZygpKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1ha2VBcnJheU9mU3RyaW5ncztcclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQU1BLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FDekJDLE1BRHlCLEVBRXpCQyxVQUZ5QixFQUdaO0VBQ2IsSUFBTUMsR0FBRyxHQUFHLElBQUFDLDZCQUFBLEVBQWtCSCxNQUFsQixDQUFaO0VBQ0EsT0FBT0UsR0FBRyxDQUFDRSxHQUFKLENBQVE7SUFBQSxPQUFNSCxVQUFVLEVBQWhCO0VBQUEsQ0FBUixDQUFQO0FBQ0QsQ0FORDs7ZUFRZUYsa0IifQ==

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   about: () => (/* binding */ about)
/* harmony export */ });
/* harmony import */ var lorem_ipsum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lorem-ipsum */ "./node_modules/lorem-ipsum/dist/index.js");


let about = function (){
    
    let div = document.createElement('div');
    let h1 = document.createElement('h1');
    h1.innerHTML = "about us";

    let p = document.createElement('p');
    p.innerHTML = (0,lorem_ipsum__WEBPACK_IMPORTED_MODULE_0__.loremIpsum)({count: 50, format: "plain", paragraphLowerBound: 3, sentenceLowerBound: 4, sentenceUpperBound: 10, suffix: "\n", units: "sentences"})

    div.appendChild(h1);
    div.appendChild(p);
    let contentDiv = document.getElementById('content');
    contentDiv.innerHTML = "";
    contentDiv.appendChild(div);
    
}



/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createContact: () => (/* binding */ createContact)
/* harmony export */ });
let createContact = function(){
    let contentDiv = document.getElementById('content');
    if(contentDiv){
        contentDiv.innerHTML = "";
    }
    let content = document.createElement("div");
    let h1 = document.createElement("h1");
    h1.innerHTML = "Contact Us";
    content.append(h1);
    contentDiv.appendChild(content);

}



/***/ }),

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createHomePage: () => (/* binding */ createHomePage)
/* harmony export */ });
/* harmony import */ var _burger_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./burger.jpg */ "./src/burger.jpg");


let createHomePage = function (){
    let contentDiv = document.getElementById("content");
    if(contentDiv){
        contentDiv.innerHTML = "";
    }
    let landing = document.createElement('div');
    landing.classList.add("landing");
    let burgerImage = new Image();
    burgerImage.src = _burger_jpg__WEBPACK_IMPORTED_MODULE_0__;
    landing.appendChild(burgerImage);
    contentDiv.appendChild(landing);
}



/***/ }),

/***/ "./src/burger.jpg":
/*!************************!*\
  !*** ./src/burger.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cff1213195860bb42d60.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homepage */ "./src/homepage.js");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about */ "./src/about.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ "./src/contact.js");





function createBaseHeader() {
    let header = document.createElement('header');
    let navbar = document.createElement('nav');
    navbar.classList.add('navbar');
    let links = ['home', 'about', 'contact us'];
    for (let i = 0; i < 3; i++) {
        var li = document.createElement('button');
        li.innerHTML = links[i];
        li.setAttribute('id',links[i]);
        navbar.appendChild(li);
    }
    header.appendChild(navbar);
    document.body.appendChild(header);
    
    let contentDiv = document.createElement('div');
    contentDiv.setAttribute('id','content')
    document.body.appendChild(contentDiv);
}

function clearContent(){
    let contentDiv = document.getElementById('content');
    contentDiv.innerHTML = "";
}
function home(){
    clearContent();
    let contentDiv = document.getElementById('content');
    let h1 = document.createElement('h1');
    h1.innerHTML = "home";
    contentDiv.appendChild(h1);
}


createBaseHeader();
let homebutton = document.getElementById("home");
homebutton.addEventListener("click",_homepage__WEBPACK_IMPORTED_MODULE_1__.createHomePage);
let aboutbutton = document.getElementById("about");
aboutbutton.addEventListener("click",_about__WEBPACK_IMPORTED_MODULE_2__.about);
let contactbutton = document.getElementById('contact us');
contactbutton.addEventListener('click',_contact__WEBPACK_IMPORTED_MODULE_3__.createContact);
(0,_homepage__WEBPACK_IMPORTED_MODULE_1__.createHomePage)();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0Esb0NBQW9DLHFEQUFjO0FBQ2xEO0FBQ0EscUNBQXFDLHlDQUFLO0FBQzFDO0FBQ0EsdUNBQXVDLG1EQUFhO0FBQ3BELHlEQUFjLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9sb3JlbS1pcHN1bS9kaXN0L2NvbnN0YW50cy9mb3JtYXRzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvbG9yZW0taXBzdW0vZGlzdC9jb25zdGFudHMvbGluZUVuZGluZ3MuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9sb3JlbS1pcHN1bS9kaXN0L2NvbnN0YW50cy9wbGF0Zm9ybXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9sb3JlbS1pcHN1bS9kaXN0L2NvbnN0YW50cy91bml0cy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2xvcmVtLWlwc3VtL2Rpc3QvY29uc3RhbnRzL3dvcmRzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvbG9yZW0taXBzdW0vZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2xvcmVtLWlwc3VtL2Rpc3QvbGliL0xvcmVtSXBzdW0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9sb3JlbS1pcHN1bS9kaXN0L2xpYi9nZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9sb3JlbS1pcHN1bS9kaXN0L3V0aWwvY2FwaXRhbGl6ZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2xvcmVtLWlwc3VtL2Rpc3QvdXRpbC9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2xvcmVtLWlwc3VtL2Rpc3QvdXRpbC9pc05vZGUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9sb3JlbS1pcHN1bS9kaXN0L3V0aWwvaXNSZWFjdE5hdGl2ZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2xvcmVtLWlwc3VtL2Rpc3QvdXRpbC9pc1dpbmRvd3MuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9sb3JlbS1pcHN1bS9kaXN0L3V0aWwvbWFrZUFycmF5T2ZMZW5ndGguanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9sb3JlbS1pcHN1bS9kaXN0L3V0aWwvbWFrZUFycmF5T2ZTdHJpbmdzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2Fib3V0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2hvbWVwYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCp7XG4gICAgXG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG59XG4ubmF2YmFye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OnNwYWNlLWFyb3VuZDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG5cbi5sYW5kaW5nIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNTAlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuO1xuICAgIGhlaWdodDogMjByZW07XG5cbn1cblxuLmxhbmRpbmcgaW1ne1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG5oMSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7SUFFSSxTQUFTO0lBQ1QsVUFBVTtBQUNkO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsNEJBQTRCO0lBQzVCLHVCQUF1QjtJQUN2QixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLGFBQWE7O0FBRWpCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIip7XFxuICAgIFxcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcbi5uYXZiYXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDpzcGFjZS1hcm91bmQ7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxufVxcblxcbi5sYW5kaW5nIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDUwJTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XFxuICAgIGhlaWdodDogMjByZW07XFxuXFxufVxcblxcbi5sYW5kaW5nIGltZ3tcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbmgxIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5GT1JNQVRfUExBSU4gPSBleHBvcnRzLkZPUk1BVF9IVE1MID0gZXhwb3J0cy5GT1JNQVRTID0gdm9pZCAwO1xudmFyIEZPUk1BVF9IVE1MID0gXCJodG1sXCI7XG5leHBvcnRzLkZPUk1BVF9IVE1MID0gRk9STUFUX0hUTUw7XG52YXIgRk9STUFUX1BMQUlOID0gXCJwbGFpblwiO1xuZXhwb3J0cy5GT1JNQVRfUExBSU4gPSBGT1JNQVRfUExBSU47XG52YXIgRk9STUFUUyA9IFtGT1JNQVRfSFRNTCwgRk9STUFUX1BMQUlOXTtcbmV4cG9ydHMuRk9STUFUUyA9IEZPUk1BVFM7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnVZVzFsY3lJNld5SkdUMUpOUVZSZlNGUk5UQ0lzSWtaUFVrMUJWRjlRVEVGSlRpSXNJa1pQVWsxQlZGTWlYU3dpYzI5MWNtTmxjeUk2V3lJdUxpOHVMaTl6Y21NdlkyOXVjM1JoYm5SekwyWnZjbTFoZEhNdWRITWlYU3dpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpWlhod2IzSjBJR052Ym5OMElFWlBVazFCVkY5SVZFMU1JRDBnWENKb2RHMXNYQ0k3WEhKY2JtVjRjRzl5ZENCamIyNXpkQ0JHVDFKTlFWUmZVRXhCU1U0Z1BTQmNJbkJzWVdsdVhDSTdYSEpjYm1WNGNHOXlkQ0JqYjI1emRDQkdUMUpOUVZSVElEMGdXMFpQVWsxQlZGOUlWRTFNTENCR1QxSk5RVlJmVUV4QlNVNWRPMXh5WEc1bGVIQnZjblFnZEhsd1pTQk1iM0psYlVadmNtMWhkQ0E5SUZ3aWNHeGhhVzVjSWlCOElGd2lhSFJ0YkZ3aU8xeHlYRzRpWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3T3p0QlFVRlBMRWxCUVUxQkxGZEJRVmNzUjBGQlJ5eE5RVUZ3UWpzN1FVRkRRU3hKUVVGTlF5eFpRVUZaTEVkQlFVY3NUMEZCY2tJN08wRkJRMEVzU1VGQlRVTXNUMEZCVHl4SFFVRkhMRU5CUVVOR0xGZEJRVVFzUlVGQlkwTXNXVUZCWkN4RFFVRm9RaUo5IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLkxJTkVfRU5ESU5HUyA9IHZvaWQgMDtcbnZhciBMSU5FX0VORElOR1MgPSB7XG4gIFBPU0lYOiBcIlxcblwiLFxuICBXSU4zMjogXCJcXHJcXG5cIlxufTtcbmV4cG9ydHMuTElORV9FTkRJTkdTID0gTElORV9FTkRJTkdTO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p1WVcxbGN5STZXeUpNU1U1RlgwVk9SRWxPUjFNaUxDSlFUMU5KV0NJc0lsZEpUak15SWwwc0luTnZkWEpqWlhNaU9sc2lMaTR2TGk0dmMzSmpMMk52Ym5OMFlXNTBjeTlzYVc1bFJXNWthVzVuY3k1MGN5SmRMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpsZUhCdmNuUWdZMjl1YzNRZ1RFbE9SVjlGVGtSSlRrZFRJRDBnZTF4eVhHNGdJRkJQVTBsWU9pQmNJbHhjYmx3aUxGeHlYRzRnSUZkSlRqTXlPaUJjSWx4Y2NseGNibHdpTEZ4eVhHNTlPMXh5WEc0aVhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN096dEJRVUZQTEVsQlFVMUJMRmxCUVZrc1IwRkJSenRGUVVNeFFrTXNTMEZCU3l4RlFVRkZMRWxCUkcxQ08wVkJSVEZDUXl4TFFVRkxMRVZCUVVVN1FVRkdiVUlzUTBGQmNrSWlmUT09IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLlNVUFBPUlRFRF9QTEFURk9STVMgPSB2b2lkIDA7XG52YXIgU1VQUE9SVEVEX1BMQVRGT1JNUyA9IHtcbiAgREFSV0lOOiBcImRhcndpblwiLFxuICBMSU5VWDogXCJsaW51eFwiLFxuICBXSU4zMjogXCJ3aW4zMlwiXG59O1xuZXhwb3J0cy5TVVBQT1JURURfUExBVEZPUk1TID0gU1VQUE9SVEVEX1BMQVRGT1JNUztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKdVlXMWxjeUk2V3lKVFZWQlFUMUpVUlVSZlVFeEJWRVpQVWsxVElpd2lSRUZTVjBsT0lpd2lURWxPVlZnaUxDSlhTVTR6TWlKZExDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUwzTnlZeTlqYjI1emRHRnVkSE12Y0d4aGRHWnZjbTF6TG5SeklsMHNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbVY0Y0c5eWRDQmpiMjV6ZENCVFZWQlFUMUpVUlVSZlVFeEJWRVpQVWsxVElEMGdlMXh5WEc0Z0lFUkJVbGRKVGpvZ1hDSmtZWEozYVc1Y0lpeGNjbHh1SUNCTVNVNVZXRG9nWENKc2FXNTFlRndpTEZ4eVhHNGdJRmRKVGpNeU9pQmNJbmRwYmpNeVhDSXNYSEpjYm4wN1hISmNiaUpkTENKdFlYQndhVzVuY3lJNklqczdPenM3TzBGQlFVOHNTVUZCVFVFc2JVSkJRVzFDTEVkQlFVYzdSVUZEYWtORExFMUJRVTBzUlVGQlJTeFJRVVI1UWp0RlFVVnFRME1zUzBGQlN5eEZRVUZGTEU5QlJqQkNPMFZCUjJwRFF5eExRVUZMTEVWQlFVVTdRVUZJTUVJc1EwRkJOVUlpZlE9PSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5VTklUX1dPUkRTID0gZXhwb3J0cy5VTklUX1dPUkQgPSBleHBvcnRzLlVOSVRfU0VOVEVOQ0VTID0gZXhwb3J0cy5VTklUX1NFTlRFTkNFID0gZXhwb3J0cy5VTklUX1BBUkFHUkFQSFMgPSBleHBvcnRzLlVOSVRfUEFSQUdSQVBIID0gZXhwb3J0cy5VTklUUyA9IHZvaWQgMDtcbnZhciBVTklUX1dPUkRTID0gXCJ3b3Jkc1wiO1xuZXhwb3J0cy5VTklUX1dPUkRTID0gVU5JVF9XT1JEUztcbnZhciBVTklUX1dPUkQgPSBcIndvcmRcIjtcbmV4cG9ydHMuVU5JVF9XT1JEID0gVU5JVF9XT1JEO1xudmFyIFVOSVRfU0VOVEVOQ0VTID0gXCJzZW50ZW5jZXNcIjtcbmV4cG9ydHMuVU5JVF9TRU5URU5DRVMgPSBVTklUX1NFTlRFTkNFUztcbnZhciBVTklUX1NFTlRFTkNFID0gXCJzZW50ZW5jZVwiO1xuZXhwb3J0cy5VTklUX1NFTlRFTkNFID0gVU5JVF9TRU5URU5DRTtcbnZhciBVTklUX1BBUkFHUkFQSFMgPSBcInBhcmFncmFwaHNcIjtcbmV4cG9ydHMuVU5JVF9QQVJBR1JBUEhTID0gVU5JVF9QQVJBR1JBUEhTO1xudmFyIFVOSVRfUEFSQUdSQVBIID0gXCJwYXJhZ3JhcGhcIjtcbmV4cG9ydHMuVU5JVF9QQVJBR1JBUEggPSBVTklUX1BBUkFHUkFQSDtcbnZhciBVTklUUyA9IFtVTklUX1dPUkRTLCBVTklUX1dPUkQsIFVOSVRfU0VOVEVOQ0VTLCBVTklUX1NFTlRFTkNFLCBVTklUX1BBUkFHUkFQSFMsIFVOSVRfUEFSQUdSQVBIXTtcbmV4cG9ydHMuVU5JVFMgPSBVTklUUztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKdVlXMWxjeUk2V3lKVlRrbFVYMWRQVWtSVElpd2lWVTVKVkY5WFQxSkVJaXdpVlU1SlZGOVRSVTVVUlU1RFJWTWlMQ0pWVGtsVVgxTkZUbFJGVGtORklpd2lWVTVKVkY5UVFWSkJSMUpCVUVoVElpd2lWVTVKVkY5UVFWSkJSMUpCVUVnaUxDSlZUa2xVVXlKZExDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUwzTnlZeTlqYjI1emRHRnVkSE12ZFc1cGRITXVkSE1pWFN3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaVpYaHdiM0owSUdOdmJuTjBJRlZPU1ZSZlYwOVNSRk1nUFNCY0luZHZjbVJ6WENJN1hHNWxlSEJ2Y25RZ1kyOXVjM1FnVlU1SlZGOVhUMUpFSUQwZ1hDSjNiM0prWENJN1hHNWxlSEJ2Y25RZ1kyOXVjM1FnVlU1SlZGOVRSVTVVUlU1RFJWTWdQU0JjSW5ObGJuUmxibU5sYzF3aU8xeHVaWGh3YjNKMElHTnZibk4wSUZWT1NWUmZVMFZPVkVWT1EwVWdQU0JjSW5ObGJuUmxibU5sWENJN1hHNWxlSEJ2Y25RZ1kyOXVjM1FnVlU1SlZGOVFRVkpCUjFKQlVFaFRJRDBnWENKd1lYSmhaM0poY0doelhDSTdYRzVsZUhCdmNuUWdZMjl1YzNRZ1ZVNUpWRjlRUVZKQlIxSkJVRWdnUFNCY0luQmhjbUZuY21Gd2FGd2lPMXh1Wlhod2IzSjBJR052Ym5OMElGVk9TVlJUSUQwZ1cxeHVJQ0JWVGtsVVgxZFBVa1JUTEZ4dUlDQlZUa2xVWDFkUFVrUXNYRzRnSUZWT1NWUmZVMFZPVkVWT1EwVlRMRnh1SUNCVlRrbFVYMU5GVGxSRlRrTkZMRnh1SUNCVlRrbFVYMUJCVWtGSFVrRlFTRk1zWEc0Z0lGVk9TVlJmVUVGU1FVZFNRVkJJTEZ4dVhUdGNibVY0Y0c5eWRDQjBlWEJsSUV4dmNtVnRWVzVwZENBOUlGd2lkMjl5WkhOY0lpQjhJRndpZDI5eVpGd2lJSHdnWENKelpXNTBaVzVqWlhOY0lpQjhJRndpYzJWdWRHVnVZMlZjSWlCOElGd2ljR0Z5WVdkeVlYQm9jMXdpSUh3Z1hDSndZWEpoWjNKaGNHaGNJanRjYmlKZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN08wRkJRVThzU1VGQlRVRXNWVUZCVlN4SFFVRkhMRTlCUVc1Q096dEJRVU5CTEVsQlFVMURMRk5CUVZNc1IwRkJSeXhOUVVGc1FqczdRVUZEUVN4SlFVRk5ReXhqUVVGakxFZEJRVWNzVjBGQmRrSTdPMEZCUTBFc1NVRkJUVU1zWVVGQllTeEhRVUZITEZWQlFYUkNPenRCUVVOQkxFbEJRVTFETEdWQlFXVXNSMEZCUnl4WlFVRjRRanM3UVVGRFFTeEpRVUZOUXl4alFVRmpMRWRCUVVjc1YwRkJka0k3TzBGQlEwRXNTVUZCVFVNc1MwRkJTeXhIUVVGSExFTkJRMjVDVGl4VlFVUnRRaXhGUVVWdVFrTXNVMEZHYlVJc1JVRkhia0pETEdOQlNHMUNMRVZCU1c1Q1F5eGhRVXB0UWl4RlFVdHVRa01zWlVGTWJVSXNSVUZOYmtKRExHTkJUbTFDTEVOQlFXUWlmUT09IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLldPUkRTID0gdm9pZCAwO1xudmFyIFdPUkRTID0gW1wiYWRcIiwgXCJhZGlwaXNpY2luZ1wiLCBcImFsaXF1YVwiLCBcImFsaXF1aXBcIiwgXCJhbWV0XCIsIFwiYW5pbVwiLCBcImF1dGVcIiwgXCJjaWxsdW1cIiwgXCJjb21tb2RvXCIsIFwiY29uc2VjdGV0dXJcIiwgXCJjb25zZXF1YXRcIiwgXCJjdWxwYVwiLCBcImN1cGlkYXRhdFwiLCBcImRlc2VydW50XCIsIFwiZG9cIiwgXCJkb2xvclwiLCBcImRvbG9yZVwiLCBcImR1aXNcIiwgXCJlYVwiLCBcImVpdXNtb2RcIiwgXCJlbGl0XCIsIFwiZW5pbVwiLCBcImVzc2VcIiwgXCJlc3RcIiwgXCJldFwiLCBcImV1XCIsIFwiZXhcIiwgXCJleGNlcHRldXJcIiwgXCJleGVyY2l0YXRpb25cIiwgXCJmdWdpYXRcIiwgXCJpZFwiLCBcImluXCIsIFwiaW5jaWRpZHVudFwiLCBcImlwc3VtXCIsIFwiaXJ1cmVcIiwgXCJsYWJvcmVcIiwgXCJsYWJvcmlzXCIsIFwibGFib3J1bVwiLCBcIkxvcmVtXCIsIFwibWFnbmFcIiwgXCJtaW5pbVwiLCBcIm1vbGxpdFwiLCBcIm5pc2lcIiwgXCJub25cIiwgXCJub3N0cnVkXCIsIFwibnVsbGFcIiwgXCJvY2NhZWNhdFwiLCBcIm9mZmljaWFcIiwgXCJwYXJpYXR1clwiLCBcInByb2lkZW50XCIsIFwicXVpXCIsIFwicXVpc1wiLCBcInJlcHJlaGVuZGVyaXRcIiwgXCJzaW50XCIsIFwic2l0XCIsIFwic3VudFwiLCBcInRlbXBvclwiLCBcInVsbGFtY29cIiwgXCJ1dFwiLCBcInZlbGl0XCIsIFwidmVuaWFtXCIsIFwidm9sdXB0YXRlXCJdO1xuZXhwb3J0cy5XT1JEUyA9IFdPUkRTO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p1WVcxbGN5STZXeUpYVDFKRVV5SmRMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMM055WXk5amIyNXpkR0Z1ZEhNdmQyOXlaSE11ZEhNaVhTd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2laWGh3YjNKMElHTnZibk4wSUZkUFVrUlRJRDBnVzF4eVhHNGdJRndpWVdSY0lpeGNjbHh1SUNCY0ltRmthWEJwYzJsamFXNW5YQ0lzWEhKY2JpQWdYQ0poYkdseGRXRmNJaXhjY2x4dUlDQmNJbUZzYVhGMWFYQmNJaXhjY2x4dUlDQmNJbUZ0WlhSY0lpeGNjbHh1SUNCY0ltRnVhVzFjSWl4Y2NseHVJQ0JjSW1GMWRHVmNJaXhjY2x4dUlDQmNJbU5wYkd4MWJWd2lMRnh5WEc0Z0lGd2lZMjl0Ylc5a2Ixd2lMRnh5WEc0Z0lGd2lZMjl1YzJWamRHVjBkWEpjSWl4Y2NseHVJQ0JjSW1OdmJuTmxjWFZoZEZ3aUxGeHlYRzRnSUZ3aVkzVnNjR0ZjSWl4Y2NseHVJQ0JjSW1OMWNHbGtZWFJoZEZ3aUxGeHlYRzRnSUZ3aVpHVnpaWEoxYm5SY0lpeGNjbHh1SUNCY0ltUnZYQ0lzWEhKY2JpQWdYQ0prYjJ4dmNsd2lMRnh5WEc0Z0lGd2laRzlzYjNKbFhDSXNYSEpjYmlBZ1hDSmtkV2x6WENJc1hISmNiaUFnWENKbFlWd2lMRnh5WEc0Z0lGd2laV2wxYzIxdlpGd2lMRnh5WEc0Z0lGd2laV3hwZEZ3aUxGeHlYRzRnSUZ3aVpXNXBiVndpTEZ4eVhHNGdJRndpWlhOelpWd2lMRnh5WEc0Z0lGd2laWE4wWENJc1hISmNiaUFnWENKbGRGd2lMRnh5WEc0Z0lGd2laWFZjSWl4Y2NseHVJQ0JjSW1WNFhDSXNYSEpjYmlBZ1hDSmxlR05sY0hSbGRYSmNJaXhjY2x4dUlDQmNJbVY0WlhKamFYUmhkR2x2Ymx3aUxGeHlYRzRnSUZ3aVpuVm5hV0YwWENJc1hISmNiaUFnWENKcFpGd2lMRnh5WEc0Z0lGd2lhVzVjSWl4Y2NseHVJQ0JjSW1sdVkybGthV1IxYm5SY0lpeGNjbHh1SUNCY0ltbHdjM1Z0WENJc1hISmNiaUFnWENKcGNuVnlaVndpTEZ4eVhHNGdJRndpYkdGaWIzSmxYQ0lzWEhKY2JpQWdYQ0pzWVdKdmNtbHpYQ0lzWEhKY2JpQWdYQ0pzWVdKdmNuVnRYQ0lzWEhKY2JpQWdYQ0pNYjNKbGJWd2lMRnh5WEc0Z0lGd2liV0ZuYm1GY0lpeGNjbHh1SUNCY0ltMXBibWx0WENJc1hISmNiaUFnWENKdGIyeHNhWFJjSWl4Y2NseHVJQ0JjSW01cGMybGNJaXhjY2x4dUlDQmNJbTV2Ymx3aUxGeHlYRzRnSUZ3aWJtOXpkSEoxWkZ3aUxGeHlYRzRnSUZ3aWJuVnNiR0ZjSWl4Y2NseHVJQ0JjSW05alkyRmxZMkYwWENJc1hISmNiaUFnWENKdlptWnBZMmxoWENJc1hISmNiaUFnWENKd1lYSnBZWFIxY2x3aUxGeHlYRzRnSUZ3aWNISnZhV1JsYm5SY0lpeGNjbHh1SUNCY0luRjFhVndpTEZ4eVhHNGdJRndpY1hWcGMxd2lMRnh5WEc0Z0lGd2ljbVZ3Y21Wb1pXNWtaWEpwZEZ3aUxGeHlYRzRnSUZ3aWMybHVkRndpTEZ4eVhHNGdJRndpYzJsMFhDSXNYSEpjYmlBZ1hDSnpkVzUwWENJc1hISmNiaUFnWENKMFpXMXdiM0pjSWl4Y2NseHVJQ0JjSW5Wc2JHRnRZMjljSWl4Y2NseHVJQ0JjSW5WMFhDSXNYSEpjYmlBZ1hDSjJaV3hwZEZ3aUxGeHlYRzRnSUZ3aWRtVnVhV0Z0WENJc1hISmNiaUFnWENKMmIyeDFjSFJoZEdWY0lpeGNjbHh1WFR0Y2NseHVJbDBzSW0xaGNIQnBibWR6SWpvaU96czdPenM3UVVGQlR5eEpRVUZOUVN4TFFVRkxMRWRCUVVjc1EwRkRia0lzU1VGRWJVSXNSVUZGYmtJc1lVRkdiVUlzUlVGSGJrSXNVVUZJYlVJc1JVRkpia0lzVTBGS2JVSXNSVUZMYmtJc1RVRk1iVUlzUlVGTmJrSXNUVUZPYlVJc1JVRlBia0lzVFVGUWJVSXNSVUZSYmtJc1VVRlNiVUlzUlVGVGJrSXNVMEZVYlVJc1JVRlZia0lzWVVGV2JVSXNSVUZYYmtJc1YwRlliVUlzUlVGWmJrSXNUMEZhYlVJc1JVRmhia0lzVjBGaWJVSXNSVUZqYmtJc1ZVRmtiVUlzUlVGbGJrSXNTVUZtYlVJc1JVRm5RbTVDTEU5QmFFSnRRaXhGUVdsQ2JrSXNVVUZxUW0xQ0xFVkJhMEp1UWl4TlFXeENiVUlzUlVGdFFtNUNMRWxCYmtKdFFpeEZRVzlDYmtJc1UwRndRbTFDTEVWQmNVSnVRaXhOUVhKQ2JVSXNSVUZ6UW01Q0xFMUJkRUp0UWl4RlFYVkNia0lzVFVGMlFtMUNMRVZCZDBKdVFpeExRWGhDYlVJc1JVRjVRbTVDTEVsQmVrSnRRaXhGUVRCQ2JrSXNTVUV4UW0xQ0xFVkJNa0p1UWl4SlFUTkNiVUlzUlVFMFFtNUNMRmRCTlVKdFFpeEZRVFpDYmtJc1kwRTNRbTFDTEVWQk9FSnVRaXhSUVRsQ2JVSXNSVUVyUW01Q0xFbEJMMEp0UWl4RlFXZERia0lzU1VGb1EyMUNMRVZCYVVOdVFpeFpRV3BEYlVJc1JVRnJRMjVDTEU5QmJFTnRRaXhGUVcxRGJrSXNUMEZ1UTIxQ0xFVkJiME51UWl4UlFYQkRiVUlzUlVGeFEyNUNMRk5CY2tOdFFpeEZRWE5EYmtJc1UwRjBRMjFDTEVWQmRVTnVRaXhQUVhaRGJVSXNSVUYzUTI1Q0xFOUJlRU50UWl4RlFYbERia0lzVDBGNlEyMUNMRVZCTUVOdVFpeFJRVEZEYlVJc1JVRXlRMjVDTEUxQk0wTnRRaXhGUVRSRGJrSXNTMEUxUTIxQ0xFVkJOa051UWl4VFFUZERiVUlzUlVFNFEyNUNMRTlCT1VOdFFpeEZRU3REYmtJc1ZVRXZRMjFDTEVWQlowUnVRaXhUUVdoRWJVSXNSVUZwUkc1Q0xGVkJha1J0UWl4RlFXdEVia0lzVlVGc1JHMUNMRVZCYlVSdVFpeExRVzVFYlVJc1JVRnZSRzVDTEUxQmNFUnRRaXhGUVhGRWJrSXNaVUZ5UkcxQ0xFVkJjMFJ1UWl4TlFYUkViVUlzUlVGMVJHNUNMRXRCZGtSdFFpeEZRWGRFYmtJc1RVRjRSRzFDTEVWQmVVUnVRaXhSUVhwRWJVSXNSVUV3Ukc1Q0xGTkJNVVJ0UWl4RlFUSkVia0lzU1VFelJHMUNMRVZCTkVSdVFpeFBRVFZFYlVJc1JVRTJSRzVDTEZGQk4wUnRRaXhGUVRoRWJrSXNWMEU1UkcxQ0xFTkJRV1FpZlE9PSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiTG9yZW1JcHN1bVwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfTG9yZW1JcHN1bVtcImRlZmF1bHRcIl07XG4gIH1cbn0pO1xuZXhwb3J0cy5sb3JlbUlwc3VtID0gdm9pZCAwO1xuXG52YXIgX2Zvcm1hdHMgPSByZXF1aXJlKFwiLi9jb25zdGFudHMvZm9ybWF0c1wiKTtcblxudmFyIF91bml0cyA9IHJlcXVpcmUoXCIuL2NvbnN0YW50cy91bml0c1wiKTtcblxudmFyIF93b3JkcyA9IHJlcXVpcmUoXCIuL2NvbnN0YW50cy93b3Jkc1wiKTtcblxudmFyIF9Mb3JlbUlwc3VtID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9saWIvTG9yZW1JcHN1bVwiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG52YXIgbG9yZW1JcHN1bSA9IGZ1bmN0aW9uIGxvcmVtSXBzdW0oKSB7XG4gIHZhciBfcmVmID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fSxcbiAgICAgIF9yZWYkY291bnQgPSBfcmVmLmNvdW50LFxuICAgICAgY291bnQgPSBfcmVmJGNvdW50ID09PSB2b2lkIDAgPyAxIDogX3JlZiRjb3VudCxcbiAgICAgIF9yZWYkZm9ybWF0ID0gX3JlZi5mb3JtYXQsXG4gICAgICBmb3JtYXQgPSBfcmVmJGZvcm1hdCA9PT0gdm9pZCAwID8gX2Zvcm1hdHMuRk9STUFUX1BMQUlOIDogX3JlZiRmb3JtYXQsXG4gICAgICBfcmVmJHBhcmFncmFwaExvd2VyQm8gPSBfcmVmLnBhcmFncmFwaExvd2VyQm91bmQsXG4gICAgICBwYXJhZ3JhcGhMb3dlckJvdW5kID0gX3JlZiRwYXJhZ3JhcGhMb3dlckJvID09PSB2b2lkIDAgPyAzIDogX3JlZiRwYXJhZ3JhcGhMb3dlckJvLFxuICAgICAgX3JlZiRwYXJhZ3JhcGhVcHBlckJvID0gX3JlZi5wYXJhZ3JhcGhVcHBlckJvdW5kLFxuICAgICAgcGFyYWdyYXBoVXBwZXJCb3VuZCA9IF9yZWYkcGFyYWdyYXBoVXBwZXJCbyA9PT0gdm9pZCAwID8gNyA6IF9yZWYkcGFyYWdyYXBoVXBwZXJCbyxcbiAgICAgIHJhbmRvbSA9IF9yZWYucmFuZG9tLFxuICAgICAgX3JlZiRzZW50ZW5jZUxvd2VyQm91ID0gX3JlZi5zZW50ZW5jZUxvd2VyQm91bmQsXG4gICAgICBzZW50ZW5jZUxvd2VyQm91bmQgPSBfcmVmJHNlbnRlbmNlTG93ZXJCb3UgPT09IHZvaWQgMCA/IDUgOiBfcmVmJHNlbnRlbmNlTG93ZXJCb3UsXG4gICAgICBfcmVmJHNlbnRlbmNlVXBwZXJCb3UgPSBfcmVmLnNlbnRlbmNlVXBwZXJCb3VuZCxcbiAgICAgIHNlbnRlbmNlVXBwZXJCb3VuZCA9IF9yZWYkc2VudGVuY2VVcHBlckJvdSA9PT0gdm9pZCAwID8gMTUgOiBfcmVmJHNlbnRlbmNlVXBwZXJCb3UsXG4gICAgICBfcmVmJHVuaXRzID0gX3JlZi51bml0cyxcbiAgICAgIHVuaXRzID0gX3JlZiR1bml0cyA9PT0gdm9pZCAwID8gX3VuaXRzLlVOSVRfU0VOVEVOQ0VTIDogX3JlZiR1bml0cyxcbiAgICAgIF9yZWYkd29yZHMgPSBfcmVmLndvcmRzLFxuICAgICAgd29yZHMgPSBfcmVmJHdvcmRzID09PSB2b2lkIDAgPyBfd29yZHMuV09SRFMgOiBfcmVmJHdvcmRzLFxuICAgICAgX3JlZiRzdWZmaXggPSBfcmVmLnN1ZmZpeCxcbiAgICAgIHN1ZmZpeCA9IF9yZWYkc3VmZml4ID09PSB2b2lkIDAgPyBcIlwiIDogX3JlZiRzdWZmaXg7XG5cbiAgdmFyIG9wdGlvbnMgPSB7XG4gICAgcmFuZG9tOiByYW5kb20sXG4gICAgc2VudGVuY2VzUGVyUGFyYWdyYXBoOiB7XG4gICAgICBtYXg6IHBhcmFncmFwaFVwcGVyQm91bmQsXG4gICAgICBtaW46IHBhcmFncmFwaExvd2VyQm91bmRcbiAgICB9LFxuICAgIHdvcmRzOiB3b3JkcyxcbiAgICB3b3Jkc1BlclNlbnRlbmNlOiB7XG4gICAgICBtYXg6IHNlbnRlbmNlVXBwZXJCb3VuZCxcbiAgICAgIG1pbjogc2VudGVuY2VMb3dlckJvdW5kXG4gICAgfVxuICB9O1xuICB2YXIgbG9yZW0gPSBuZXcgX0xvcmVtSXBzdW1bXCJkZWZhdWx0XCJdKG9wdGlvbnMsIGZvcm1hdCwgc3VmZml4KTtcblxuICBzd2l0Y2ggKHVuaXRzKSB7XG4gICAgY2FzZSBfdW5pdHMuVU5JVF9QQVJBR1JBUEhTOlxuICAgIGNhc2UgX3VuaXRzLlVOSVRfUEFSQUdSQVBIOlxuICAgICAgcmV0dXJuIGxvcmVtLmdlbmVyYXRlUGFyYWdyYXBocyhjb3VudCk7XG5cbiAgICBjYXNlIF91bml0cy5VTklUX1NFTlRFTkNFUzpcbiAgICBjYXNlIF91bml0cy5VTklUX1NFTlRFTkNFOlxuICAgICAgcmV0dXJuIGxvcmVtLmdlbmVyYXRlU2VudGVuY2VzKGNvdW50KTtcblxuICAgIGNhc2UgX3VuaXRzLlVOSVRfV09SRFM6XG4gICAgY2FzZSBfdW5pdHMuVU5JVF9XT1JEOlxuICAgICAgcmV0dXJuIGxvcmVtLmdlbmVyYXRlV29yZHMoY291bnQpO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBcIlwiO1xuICB9XG59O1xuXG5leHBvcnRzLmxvcmVtSXBzdW0gPSBsb3JlbUlwc3VtO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p1WVcxbGN5STZXeUpzYjNKbGJVbHdjM1Z0SWl3aVkyOTFiblFpTENKbWIzSnRZWFFpTENKR1QxSk5RVlJmVUV4QlNVNGlMQ0p3WVhKaFozSmhjR2hNYjNkbGNrSnZkVzVrSWl3aWNHRnlZV2R5WVhCb1ZYQndaWEpDYjNWdVpDSXNJbkpoYm1SdmJTSXNJbk5sYm5SbGJtTmxURzkzWlhKQ2IzVnVaQ0lzSW5ObGJuUmxibU5sVlhCd1pYSkNiM1Z1WkNJc0luVnVhWFJ6SWl3aVZVNUpWRjlUUlU1VVJVNURSVk1pTENKM2IzSmtjeUlzSWxkUFVrUlRJaXdpYzNWbVptbDRJaXdpYjNCMGFXOXVjeUlzSW5ObGJuUmxibU5sYzFCbGNsQmhjbUZuY21Gd2FDSXNJbTFoZUNJc0ltMXBiaUlzSW5kdmNtUnpVR1Z5VTJWdWRHVnVZMlVpTENKc2IzSmxiU0lzSWt4dmNtVnRTWEJ6ZFcwaUxDSlZUa2xVWDFCQlVrRkhVa0ZRU0ZNaUxDSlZUa2xVWDFCQlVrRkhVa0ZRU0NJc0ltZGxibVZ5WVhSbFVHRnlZV2R5WVhCb2N5SXNJbFZPU1ZSZlUwVk9WRVZPUTBVaUxDSm5aVzVsY21GMFpWTmxiblJsYm1ObGN5SXNJbFZPU1ZSZlYwOVNSRk1pTENKVlRrbFVYMWRQVWtRaUxDSm5aVzVsY21GMFpWZHZjbVJ6SWwwc0luTnZkWEpqWlhNaU9sc2lMaTR2YzNKakwybHVaR1Y0TG5SeklsMHNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQjdJRXh2Y21WdFJtOXliV0YwTENCR1QxSk5RVlJmVUV4QlNVNGdmU0JtY205dElGd2lMaTlqYjI1emRHRnVkSE12Wm05eWJXRjBjMXdpTzF4eVhHNXBiWEJ2Y25RZ2UxeHlYRzRnSUV4dmNtVnRWVzVwZEN4Y2NseHVJQ0JWVGtsVVgxQkJVa0ZIVWtGUVNDeGNjbHh1SUNCVlRrbFVYMUJCVWtGSFVrRlFTRk1zWEhKY2JpQWdWVTVKVkY5VFJVNVVSVTVEUlZNc1hISmNiaUFnVlU1SlZGOVRSVTVVUlU1RFJTeGNjbHh1SUNCVlRrbFVYMWRQVWtSVExGeHlYRzRnSUZWT1NWUmZWMDlTUkN4Y2NseHVmU0JtY205dElGd2lMaTlqYjI1emRHRnVkSE12ZFc1cGRITmNJanRjY2x4dWFXMXdiM0owSUhzZ1YwOVNSRk1nZlNCbWNtOXRJRndpTGk5amIyNXpkR0Z1ZEhNdmQyOXlaSE5jSWp0Y2NseHVhVzF3YjNKMElIc2dTVkJ5Ym1jZ2ZTQm1jbTl0SUZ3aUxpOXNhV0l2WjJWdVpYSmhkRzl5WENJN1hISmNibWx0Y0c5eWRDQk1iM0psYlVsd2MzVnRJR1p5YjIwZ1hDSXVMMnhwWWk5TWIzSmxiVWx3YzNWdFhDSTdYSEpjYmx4eVhHNWxlSEJ2Y25RZ2FXNTBaWEptWVdObElFbE1iM0psYlVsd2MzVnRVR0Z5WVcxeklIdGNjbHh1SUNCamIzVnVkRDg2SUc1MWJXSmxjanRjY2x4dUlDQm1iM0p0WVhRL09pQk1iM0psYlVadmNtMWhkRHRjY2x4dUlDQndZWEpoWjNKaGNHaE1iM2RsY2tKdmRXNWtQem9nYm5WdFltVnlPMXh5WEc0Z0lIQmhjbUZuY21Gd2FGVndjR1Z5UW05MWJtUS9PaUJ1ZFcxaVpYSTdYSEpjYmlBZ2NtRnVaRzl0UHpvZ1NWQnlibWM3WEhKY2JpQWdjMlZ1ZEdWdVkyVk1iM2RsY2tKdmRXNWtQem9nYm5WdFltVnlPMXh5WEc0Z0lITmxiblJsYm1ObFZYQndaWEpDYjNWdVpEODZJRzUxYldKbGNqdGNjbHh1SUNCMWJtbDBjejg2SUV4dmNtVnRWVzVwZER0Y2NseHVJQ0IzYjNKa2N6ODZJSE4wY21sdVoxdGRPMXh5WEc0Z0lITjFabVpwZUQ4NklITjBjbWx1Wnp0Y2NseHVmVnh5WEc1Y2NseHVZMjl1YzNRZ2JHOXlaVzFKY0hOMWJTQTlJQ2g3WEhKY2JpQWdZMjkxYm5RZ1BTQXhMRnh5WEc0Z0lHWnZjbTFoZENBOUlFWlBVazFCVkY5UVRFRkpUaXhjY2x4dUlDQndZWEpoWjNKaGNHaE1iM2RsY2tKdmRXNWtJRDBnTXl4Y2NseHVJQ0J3WVhKaFozSmhjR2hWY0hCbGNrSnZkVzVrSUQwZ055eGNjbHh1SUNCeVlXNWtiMjBzWEhKY2JpQWdjMlZ1ZEdWdVkyVk1iM2RsY2tKdmRXNWtJRDBnTlN4Y2NseHVJQ0J6Wlc1MFpXNWpaVlZ3Y0dWeVFtOTFibVFnUFNBeE5TeGNjbHh1SUNCMWJtbDBjeUE5SUZWT1NWUmZVMFZPVkVWT1EwVlRMRnh5WEc0Z0lIZHZjbVJ6SUQwZ1YwOVNSRk1zWEhKY2JpQWdjM1ZtWm1sNElEMGdYQ0pjSWl4Y2NseHVmVG9nU1V4dmNtVnRTWEJ6ZFcxUVlYSmhiWE1nUFNCN2ZTazZJSE4wY21sdVp5QTlQaUI3WEhKY2JpQWdZMjl1YzNRZ2IzQjBhVzl1Y3lBOUlIdGNjbHh1SUNBZ0lISmhibVJ2YlN4Y2NseHVJQ0FnSUhObGJuUmxibU5sYzFCbGNsQmhjbUZuY21Gd2FEb2dlMXh5WEc0Z0lDQWdJQ0J0WVhnNklIQmhjbUZuY21Gd2FGVndjR1Z5UW05MWJtUXNYSEpjYmlBZ0lDQWdJRzFwYmpvZ2NHRnlZV2R5WVhCb1RHOTNaWEpDYjNWdVpDeGNjbHh1SUNBZ0lIMHNYSEpjYmlBZ0lDQjNiM0prY3l4Y2NseHVJQ0FnSUhkdmNtUnpVR1Z5VTJWdWRHVnVZMlU2SUh0Y2NseHVJQ0FnSUNBZ2JXRjRPaUJ6Wlc1MFpXNWpaVlZ3Y0dWeVFtOTFibVFzWEhKY2JpQWdJQ0FnSUcxcGJqb2djMlZ1ZEdWdVkyVk1iM2RsY2tKdmRXNWtMRnh5WEc0Z0lDQWdmU3hjY2x4dUlDQjlPMXh5WEc1Y2NseHVJQ0JqYjI1emRDQnNiM0psYlRvZ1RHOXlaVzFKY0hOMWJTQTlJRzVsZHlCTWIzSmxiVWx3YzNWdEtHOXdkR2x2Ym5Nc0lHWnZjbTFoZEN3Z2MzVm1abWw0S1R0Y2NseHVYSEpjYmlBZ2MzZHBkR05vSUNoMWJtbDBjeWtnZTF4eVhHNGdJQ0FnWTJGelpTQlZUa2xVWDFCQlVrRkhVa0ZRU0ZNNlhISmNiaUFnSUNCallYTmxJRlZPU1ZSZlVFRlNRVWRTUVZCSU9seHlYRzRnSUNBZ0lDQnlaWFIxY200Z2JHOXlaVzB1WjJWdVpYSmhkR1ZRWVhKaFozSmhjR2h6S0dOdmRXNTBLVHRjY2x4dUlDQWdJR05oYzJVZ1ZVNUpWRjlUUlU1VVJVNURSVk02WEhKY2JpQWdJQ0JqWVhObElGVk9TVlJmVTBWT1ZFVk9RMFU2WEhKY2JpQWdJQ0FnSUhKbGRIVnliaUJzYjNKbGJTNW5aVzVsY21GMFpWTmxiblJsYm1ObGN5aGpiM1Z1ZENrN1hISmNiaUFnSUNCallYTmxJRlZPU1ZSZlYwOVNSRk02WEhKY2JpQWdJQ0JqWVhObElGVk9TVlJmVjA5U1JEcGNjbHh1SUNBZ0lDQWdjbVYwZFhKdUlHeHZjbVZ0TG1kbGJtVnlZWFJsVjI5eVpITW9ZMjkxYm5RcE8xeHlYRzRnSUNBZ1pHVm1ZWFZzZERwY2NseHVJQ0FnSUNBZ2NtVjBkWEp1SUZ3aVhDSTdYSEpjYmlBZ2ZWeHlYRzU5TzF4eVhHNWNjbHh1Wlhod2IzSjBJSHNnYkc5eVpXMUpjSE4xYlN3Z1RHOXlaVzFKY0hOMWJTQjlPMXh5WEc0aVhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN096czdPenM3T3pzN1FVRkJRVHM3UVVGRFFUczdRVUZUUVRzN1FVRkZRVHM3T3p0QlFXVkJMRWxCUVUxQkxGVkJRVlVzUjBGQlJ5eFRRVUZpUVN4VlFVRmhMRWRCVjIxQ08wVkJRVUVzSzBWQlFXWXNSVUZCWlR0RlFVRkJMSE5DUVZad1EwTXNTMEZWYjBNN1JVRkJRU3hKUVZad1EwRXNTMEZWYjBNc01rSkJWalZDTEVOQlZUUkNPMFZCUVVFc2RVSkJWSEJEUXl4TlFWTnZRenRGUVVGQkxFbEJWSEJEUVN4TlFWTnZReXcwUWtGVU0wSkRMSEZDUVZNeVFqdEZRVUZCTEdsRFFWSndRME1zYlVKQlVXOURPMFZCUVVFc1NVRlNjRU5CTEcxQ1FWRnZReXh6UTBGU1pDeERRVkZqTzBWQlFVRXNhVU5CVUhCRFF5eHRRa0ZQYjBNN1JVRkJRU3hKUVZCd1EwRXNiVUpCVDI5RExITkRRVkJrTEVOQlQyTTdSVUZCUVN4SlFVNXdRME1zVFVGTmIwTXNVVUZPY0VOQkxFMUJUVzlETzBWQlFVRXNhVU5CVEhCRFF5eHJRa0ZMYjBNN1JVRkJRU3hKUVV4d1EwRXNhMEpCUzI5RExITkRRVXhtTEVOQlMyVTdSVUZCUVN4cFEwRktjRU5ETEd0Q1FVbHZRenRGUVVGQkxFbEJTbkJEUVN4clFrRkpiME1zYzBOQlNtWXNSVUZKWlR0RlFVRkJMSE5DUVVod1EwTXNTMEZIYjBNN1JVRkJRU3hKUVVod1EwRXNTMEZIYjBNc01rSkJTRFZDUXl4eFFrRkhORUk3UlVGQlFTeHpRa0ZHY0VORExFdEJSVzlETzBWQlFVRXNTVUZHY0VOQkxFdEJSVzlETERKQ1FVWTFRa01zV1VGRk5FSTdSVUZCUVN4MVFrRkVjRU5ETEUxQlEyOURPMFZCUVVFc1NVRkVjRU5CTEUxQlEyOURMRFJDUVVRelFpeEZRVU15UWpzN1JVRkRjRU1zU1VGQlRVTXNUMEZCVHl4SFFVRkhPMGxCUTJSU0xFMUJRVTBzUlVGQlRrRXNUVUZFWXp0SlFVVmtVeXh4UWtGQmNVSXNSVUZCUlR0TlFVTnlRa01zUjBGQlJ5eEZRVUZGV0N4dFFrRkVaMEk3VFVGRmNrSlpMRWRCUVVjc1JVRkJSV0k3U1VGR1owSXNRMEZHVkR0SlFVMWtUeXhMUVVGTExFVkJRVXhCTEV0QlRtTTdTVUZQWkU4c1owSkJRV2RDTEVWQlFVVTdUVUZEYUVKR0xFZEJRVWNzUlVGQlJWSXNhMEpCUkZjN1RVRkZhRUpUTEVkQlFVY3NSVUZCUlZZN1NVRkdWenRGUVZCS0xFTkJRV2hDTzBWQllVRXNTVUZCVFZrc1MwRkJhVUlzUjBGQlJ5eEpRVUZKUXl4elFrRkJTaXhEUVVGbFRpeFBRVUZtTEVWQlFYZENXaXhOUVVGNFFpeEZRVUZuUTFjc1RVRkJhRU1zUTBGQk1VSTdPMFZCUlVFc1VVRkJVVW9zUzBGQlVqdEpRVU5GTEV0QlFVdFpMSE5DUVVGTU8wbEJRMEVzUzBGQlMwTXNjVUpCUVV3N1RVRkRSU3hQUVVGUFNDeExRVUZMTEVOQlFVTkpMR3RDUVVGT0xFTkJRWGxDZEVJc1MwRkJla0lzUTBGQlVEczdTVUZEUml4TFFVRkxVeXh4UWtGQlREdEpRVU5CTEV0QlFVdGpMRzlDUVVGTU8wMUJRMFVzVDBGQlQwd3NTMEZCU3l4RFFVRkRUU3hwUWtGQlRpeERRVUYzUW5oQ0xFdEJRWGhDTEVOQlFWQTdPMGxCUTBZc1MwRkJTM2xDTEdsQ1FVRk1PMGxCUTBFc1MwRkJTME1zWjBKQlFVdzdUVUZEUlN4UFFVRlBVaXhMUVVGTExFTkJRVU5UTEdGQlFVNHNRMEZCYjBJelFpeExRVUZ3UWl4RFFVRlFPenRKUVVOR08wMUJRMFVzVDBGQlR5eEZRVUZRTzBWQldFbzdRVUZoUkN4RFFYaERSQ0o5IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIF9mb3JtYXRzID0gcmVxdWlyZShcIi4uL2NvbnN0YW50cy9mb3JtYXRzXCIpO1xuXG52YXIgX2xpbmVFbmRpbmdzID0gcmVxdWlyZShcIi4uL2NvbnN0YW50cy9saW5lRW5kaW5nc1wiKTtcblxudmFyIF9nZW5lcmF0b3IgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9saWIvZ2VuZXJhdG9yXCIpKTtcblxudmFyIF91dGlsID0gcmVxdWlyZShcIi4uL3V0aWxcIik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbnZhciBMb3JlbUlwc3VtID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gTG9yZW1JcHN1bSgpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gICAgdmFyIGZvcm1hdCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogX2Zvcm1hdHMuRk9STUFUX1BMQUlOO1xuICAgIHZhciBzdWZmaXggPSBhcmd1bWVudHMubGVuZ3RoID4gMiA/IGFyZ3VtZW50c1syXSA6IHVuZGVmaW5lZDtcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBMb3JlbUlwc3VtKTtcblxuICAgIHRoaXMuZm9ybWF0ID0gZm9ybWF0O1xuICAgIHRoaXMuc3VmZml4ID0gc3VmZml4O1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiZ2VuZXJhdG9yXCIsIHZvaWQgMCk7XG5cbiAgICBpZiAoX2Zvcm1hdHMuRk9STUFUUy5pbmRleE9mKGZvcm1hdC50b0xvd2VyQ2FzZSgpKSA9PT0gLTEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlwiLmNvbmNhdChmb3JtYXQsIFwiIGlzIGFuIGludmFsaWQgZm9ybWF0LiBQbGVhc2UgdXNlIFwiKS5jb25jYXQoX2Zvcm1hdHMuRk9STUFUUy5qb2luKFwiIG9yIFwiKSwgXCIuXCIpKTtcbiAgICB9XG5cbiAgICB0aGlzLmdlbmVyYXRvciA9IG5ldyBfZ2VuZXJhdG9yW1wiZGVmYXVsdFwiXShvcHRpb25zKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhMb3JlbUlwc3VtLCBbe1xuICAgIGtleTogXCJnZXRMaW5lRW5kaW5nXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldExpbmVFbmRpbmcoKSB7XG4gICAgICBpZiAodGhpcy5zdWZmaXgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3VmZml4O1xuICAgICAgfVxuXG4gICAgICBpZiAoISgwLCBfdXRpbC5pc1JlYWN0TmF0aXZlKSgpICYmICgwLCBfdXRpbC5pc05vZGUpKCkgJiYgKDAsIF91dGlsLmlzV2luZG93cykoKSkge1xuICAgICAgICByZXR1cm4gX2xpbmVFbmRpbmdzLkxJTkVfRU5ESU5HUy5XSU4zMjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIF9saW5lRW5kaW5ncy5MSU5FX0VORElOR1MuUE9TSVg7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImZvcm1hdFN0cmluZ1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBmb3JtYXRTdHJpbmcoc3RyKSB7XG4gICAgICBpZiAodGhpcy5mb3JtYXQgPT09IF9mb3JtYXRzLkZPUk1BVF9IVE1MKSB7XG4gICAgICAgIHJldHVybiBcIjxwPlwiLmNvbmNhdChzdHIsIFwiPC9wPlwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHN0cjtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZm9ybWF0U3RyaW5nc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBmb3JtYXRTdHJpbmdzKHN0cmluZ3MpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIHJldHVybiBzdHJpbmdzLm1hcChmdW5jdGlvbiAoc3RyKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5mb3JtYXRTdHJpbmcoc3RyKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZW5lcmF0ZVdvcmRzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdlbmVyYXRlV29yZHMobnVtKSB7XG4gICAgICByZXR1cm4gdGhpcy5mb3JtYXRTdHJpbmcodGhpcy5nZW5lcmF0b3IuZ2VuZXJhdGVSYW5kb21Xb3JkcyhudW0pKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2VuZXJhdGVTZW50ZW5jZXNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2VuZXJhdGVTZW50ZW5jZXMobnVtKSB7XG4gICAgICByZXR1cm4gdGhpcy5mb3JtYXRTdHJpbmcodGhpcy5nZW5lcmF0b3IuZ2VuZXJhdGVSYW5kb21QYXJhZ3JhcGgobnVtKSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdlbmVyYXRlUGFyYWdyYXBoc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZW5lcmF0ZVBhcmFncmFwaHMobnVtKSB7XG4gICAgICB2YXIgbWFrZVN0cmluZyA9IHRoaXMuZ2VuZXJhdG9yLmdlbmVyYXRlUmFuZG9tUGFyYWdyYXBoLmJpbmQodGhpcy5nZW5lcmF0b3IpO1xuICAgICAgcmV0dXJuIHRoaXMuZm9ybWF0U3RyaW5ncygoMCwgX3V0aWwubWFrZUFycmF5T2ZTdHJpbmdzKShudW0sIG1ha2VTdHJpbmcpKS5qb2luKHRoaXMuZ2V0TGluZUVuZGluZygpKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gTG9yZW1JcHN1bTtcbn0oKTtcblxudmFyIF9kZWZhdWx0ID0gTG9yZW1JcHN1bTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnVZVzFsY3lJNld5Sk1iM0psYlVsd2MzVnRJaXdpYjNCMGFXOXVjeUlzSW1admNtMWhkQ0lzSWtaUFVrMUJWRjlRVEVGSlRpSXNJbk4xWm1acGVDSXNJa1pQVWsxQlZGTWlMQ0pwYm1SbGVFOW1JaXdpZEc5TWIzZGxja05oYzJVaUxDSkZjbkp2Y2lJc0ltcHZhVzRpTENKblpXNWxjbUYwYjNJaUxDSkhaVzVsY21GMGIzSWlMQ0pwYzFKbFlXTjBUbUYwYVhabElpd2lhWE5PYjJSbElpd2lhWE5YYVc1a2IzZHpJaXdpVEVsT1JWOUZUa1JKVGtkVElpd2lWMGxPTXpJaUxDSlFUMU5KV0NJc0luTjBjaUlzSWtaUFVrMUJWRjlJVkUxTUlpd2ljM1J5YVc1bmN5SXNJbTFoY0NJc0ltWnZjbTFoZEZOMGNtbHVaeUlzSW01MWJTSXNJbWRsYm1WeVlYUmxVbUZ1Wkc5dFYyOXlaSE1pTENKblpXNWxjbUYwWlZKaGJtUnZiVkJoY21GbmNtRndhQ0lzSW0xaGEyVlRkSEpwYm1jaUxDSmlhVzVrSWl3aVptOXliV0YwVTNSeWFXNW5jeUlzSW0xaGEyVkJjbkpoZVU5bVUzUnlhVzVuY3lJc0ltZGxkRXhwYm1WRmJtUnBibWNpWFN3aWMyOTFjbU5sY3lJNld5SXVMaTh1TGk5emNtTXZiR2xpTDB4dmNtVnRTWEJ6ZFcwdWRITWlYU3dpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJSHNnUms5U1RVRlVYMGhVVFV3c0lFWlBVazFCVkY5UVRFRkpUaXdnUms5U1RVRlVVeXdnVEc5eVpXMUdiM0p0WVhRZ2ZTQm1jbTl0SUZ3aUxpNHZZMjl1YzNSaGJuUnpMMlp2Y20xaGRITmNJanRjY2x4dWFXMXdiM0owSUhzZ1RFbE9SVjlGVGtSSlRrZFRJSDBnWm5KdmJTQmNJaTR1TDJOdmJuTjBZVzUwY3k5c2FXNWxSVzVrYVc1bmMxd2lPMXh5WEc1cGJYQnZjblFnUjJWdVpYSmhkRzl5TENCN0lFbEhaVzVsY21GMGIzSlBjSFJwYjI1eklIMGdabkp2YlNCY0lpNHVMMnhwWWk5blpXNWxjbUYwYjNKY0lqdGNjbHh1YVcxd2IzSjBJSHNnYVhOT2IyUmxMQ0JwYzFKbFlXTjBUbUYwYVhabExDQnBjMWRwYm1SdmQzTXNJRzFoYTJWQmNuSmhlVTltVTNSeWFXNW5jeUI5SUdaeWIyMGdYQ0l1TGk5MWRHbHNYQ0k3WEhKY2JseHlYRzVqYkdGemN5Qk1iM0psYlVsd2MzVnRJSHRjY2x4dUlDQndkV0pzYVdNZ1oyVnVaWEpoZEc5eU9pQkhaVzVsY21GMGIzSTdYSEpjYmx4eVhHNGdJR052Ym5OMGNuVmpkRzl5S0Z4eVhHNGdJQ0FnYjNCMGFXOXVjem9nU1VkbGJtVnlZWFJ2Y2s5d2RHbHZibk1nUFNCN2ZTeGNjbHh1SUNBZ0lIQjFZbXhwWXlCbWIzSnRZWFE2SUV4dmNtVnRSbTl5YldGMElEMGdSazlTVFVGVVgxQk1RVWxPTEZ4eVhHNGdJQ0FnY0hWaWJHbGpJSE4xWm1acGVEODZJSE4wY21sdVp5eGNjbHh1SUNBcElIdGNjbHh1SUNBZ0lHbG1JQ2hHVDFKTlFWUlRMbWx1WkdWNFQyWW9abTl5YldGMExuUnZURzkzWlhKRFlYTmxLQ2twSUQwOVBTQXRNU2tnZTF4eVhHNGdJQ0FnSUNCMGFISnZkeUJ1WlhjZ1JYSnliM0lvWEhKY2JpQWdJQ0FnSUNBZ1lDUjdabTl5YldGMGZTQnBjeUJoYmlCcGJuWmhiR2xrSUdadmNtMWhkQzRnVUd4bFlYTmxJSFZ6WlNBa2UwWlBVazFCVkZNdWFtOXBiaWhjSWlCdmNpQmNJaWw5TG1Bc1hISmNiaUFnSUNBZ0lDazdYSEpjYmlBZ0lDQjlYSEpjYmlBZ0lDQjBhR2x6TG1kbGJtVnlZWFJ2Y2lBOUlHNWxkeUJIWlc1bGNtRjBiM0lvYjNCMGFXOXVjeWs3WEhKY2JpQWdmVnh5WEc1Y2NseHVJQ0J3ZFdKc2FXTWdaMlYwVEdsdVpVVnVaR2x1WnlncElIdGNjbHh1SUNBZ0lHbG1JQ2gwYUdsekxuTjFabVpwZUNrZ2UxeHlYRzRnSUNBZ0lDQnlaWFIxY200Z2RHaHBjeTV6ZFdabWFYZzdYSEpjYmlBZ0lDQjlYSEpjYmx4eVhHNGdJQ0FnYVdZZ0tDRnBjMUpsWVdOMFRtRjBhWFpsS0NrZ0ppWWdhWE5PYjJSbEtDa2dKaVlnYVhOWGFXNWtiM2R6S0NrcElIdGNjbHh1SUNBZ0lDQWdjbVYwZFhKdUlFeEpUa1ZmUlU1RVNVNUhVeTVYU1U0ek1qdGNjbHh1SUNBZ0lIMWNjbHh1WEhKY2JpQWdJQ0J5WlhSMWNtNGdURWxPUlY5RlRrUkpUa2RUTGxCUFUwbFlPMXh5WEc0Z0lIMWNjbHh1WEhKY2JpQWdjSFZpYkdsaklHWnZjbTFoZEZOMGNtbHVaeWh6ZEhJNklITjBjbWx1WnlrNklITjBjbWx1WnlCN1hISmNiaUFnSUNCcFppQW9kR2hwY3k1bWIzSnRZWFFnUFQwOUlFWlBVazFCVkY5SVZFMU1LU0I3WEhKY2JpQWdJQ0FnSUhKbGRIVnliaUJnUEhBK0pIdHpkSEo5UEM5d1BtQTdYSEpjYmlBZ0lDQjlYSEpjYmlBZ0lDQnlaWFIxY200Z2MzUnlPMXh5WEc0Z0lIMWNjbHh1WEhKY2JpQWdjSFZpYkdsaklHWnZjbTFoZEZOMGNtbHVaM01vYzNSeWFXNW5jem9nYzNSeWFXNW5XMTBwT2lCemRISnBibWRiWFNCN1hISmNiaUFnSUNCeVpYUjFjbTRnYzNSeWFXNW5jeTV0WVhBb0tITjBjaWtnUFQ0Z2RHaHBjeTVtYjNKdFlYUlRkSEpwYm1jb2MzUnlLU2s3WEhKY2JpQWdmVnh5WEc1Y2NseHVJQ0J3ZFdKc2FXTWdaMlZ1WlhKaGRHVlhiM0prY3lodWRXMC9PaUJ1ZFcxaVpYSXBPaUJ6ZEhKcGJtY2dlMXh5WEc0Z0lDQWdjbVYwZFhKdUlIUm9hWE11Wm05eWJXRjBVM1J5YVc1bktIUm9hWE11WjJWdVpYSmhkRzl5TG1kbGJtVnlZWFJsVW1GdVpHOXRWMjl5WkhNb2JuVnRLU2s3WEhKY2JpQWdmVnh5WEc1Y2NseHVJQ0J3ZFdKc2FXTWdaMlZ1WlhKaGRHVlRaVzUwWlc1alpYTW9iblZ0UHpvZ2JuVnRZbVZ5S1RvZ2MzUnlhVzVuSUh0Y2NseHVJQ0FnSUhKbGRIVnliaUIwYUdsekxtWnZjbTFoZEZOMGNtbHVaeWgwYUdsekxtZGxibVZ5WVhSdmNpNW5aVzVsY21GMFpWSmhibVJ2YlZCaGNtRm5jbUZ3YUNodWRXMHBLVHRjY2x4dUlDQjlYSEpjYmx4eVhHNGdJSEIxWW14cFl5Qm5aVzVsY21GMFpWQmhjbUZuY21Gd2FITW9iblZ0T2lCdWRXMWlaWElwT2lCemRISnBibWNnZTF4eVhHNGdJQ0FnWTI5dWMzUWdiV0ZyWlZOMGNtbHVaeUE5SUhSb2FYTXVaMlZ1WlhKaGRHOXlMbWRsYm1WeVlYUmxVbUZ1Wkc5dFVHRnlZV2R5WVhCb0xtSnBibVFvWEhKY2JpQWdJQ0FnSUhSb2FYTXVaMlZ1WlhKaGRHOXlMRnh5WEc0Z0lDQWdLVHRjY2x4dUlDQWdJSEpsZEhWeWJpQjBhR2x6TG1admNtMWhkRk4wY21sdVozTW9iV0ZyWlVGeWNtRjVUMlpUZEhKcGJtZHpLRzUxYlN3Z2JXRnJaVk4wY21sdVp5a3BMbXB2YVc0b1hISmNiaUFnSUNBZ0lIUm9hWE11WjJWMFRHbHVaVVZ1WkdsdVp5Z3BMRnh5WEc0Z0lDQWdLVHRjY2x4dUlDQjlYSEpjYm4xY2NseHVYSEpjYm1WNGNHOXlkQ0JrWldaaGRXeDBJRXh2Y21WdFNYQnpkVzA3WEhKY2JpSmRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPenRCUVVGQk96dEJRVU5CT3p0QlFVTkJPenRCUVVOQk96czdPenM3T3pzN096czdTVUZGVFVFc1ZUdEZRVWRLTEhOQ1FVbEZPMGxCUVVFc1NVRklRVU1zVDBGSFFTeDFSVUZJTmtJc1JVRkhOMEk3U1VGQlFTeEpRVVpQUXl4TlFVVlFMSFZGUVVZMlFrTXNjVUpCUlRkQ08wbEJRVUVzU1VGRVQwTXNUVUZEVURzN1NVRkJRVHM3U1VGQlFTeExRVVpQUml4TlFVVlFMRWRCUms5QkxFMUJSVkE3U1VGQlFTeExRVVJQUlN4TlFVTlFMRWRCUkU5QkxFMUJRMUE3TzBsQlFVRTdPMGxCUTBFc1NVRkJTVU1zWjBKQlFVRXNRMEZCVVVNc1QwRkJVaXhEUVVGblFrb3NUVUZCVFN4RFFVRkRTeXhYUVVGUUxFVkJRV2hDTEUxQlFUQkRMRU5CUVVNc1EwRkJMME1zUlVGQmEwUTdUVUZEYUVRc1RVRkJUU3hKUVVGSlF5eExRVUZLTEZkQlEwUk9MRTFCUkVNc0swTkJRekJEUnl4blFrRkJRU3hEUVVGUlNTeEpRVUZTTEVOQlFXRXNUVUZCWWl4RFFVUXhReXhQUVVGT08wbEJSMFE3TzBsQlEwUXNTMEZCUzBNc1UwRkJUQ3hIUVVGcFFpeEpRVUZKUXl4eFFrRkJTaXhEUVVGalZpeFBRVUZrTEVOQlFXcENPMFZCUTBRN096czdWMEZGUkN4NVFrRkJkVUk3VFVGRGNrSXNTVUZCU1N4TFFVRkxSeXhOUVVGVUxFVkJRV2xDTzFGQlEyWXNUMEZCVHl4TFFVRkxRU3hOUVVGYU8wMUJRMFE3TzAxQlJVUXNTVUZCU1N4RFFVRkRMRWxCUVVGUkxHMUNRVUZCTEVkQlFVUXNTVUZCYjBJc1NVRkJRVU1zV1VGQlFTeEhRVUZ3UWl4SlFVRm5ReXhKUVVGQlF5eGxRVUZCTEVkQlFYQkRMRVZCUVdsRU8xRkJReTlETEU5QlFVOURMSGxDUVVGQkxFTkJRV0ZETEV0QlFYQkNPMDFCUTBRN08wMUJSVVFzVDBGQlQwUXNlVUpCUVVFc1EwRkJZVVVzUzBGQmNFSTdTVUZEUkRzN08xZEJSVVFzYzBKQlFXOUNReXhIUVVGd1FpeEZRVUY1UXp0TlFVTjJReXhKUVVGSkxFdEJRVXRvUWl4TlFVRk1MRXRCUVdkQ2FVSXNiMEpCUVhCQ0xFVkJRV2xETzFGQlF5OUNMRzlDUVVGaFJDeEhRVUZpTzAxQlEwUTdPMDFCUTBRc1QwRkJUMEVzUjBGQlVEdEpRVU5FT3pzN1YwRkZSQ3gxUWtGQmNVSkZMRTlCUVhKQ0xFVkJRV3RFTzAxQlFVRTdPMDFCUTJoRUxFOUJRVTlCTEU5QlFVOHNRMEZCUTBNc1IwRkJVaXhEUVVGWkxGVkJRVU5JTEVkQlFVUTdVVUZCUVN4UFFVRlRMRXRCUVVrc1EwRkJRMGtzV1VGQlRDeERRVUZyUWtvc1IwRkJiRUlzUTBGQlZEdE5RVUZCTEVOQlFWb3NRMEZCVUR0SlFVTkVPenM3VjBGRlJDeDFRa0ZCY1VKTExFZEJRWEpDTEVWQlFUSkRPMDFCUTNwRExFOUJRVThzUzBGQlMwUXNXVUZCVEN4RFFVRnJRaXhMUVVGTFdpeFRRVUZNTEVOQlFXVmpMRzFDUVVGbUxFTkJRVzFEUkN4SFFVRnVReXhEUVVGc1FpeERRVUZRTzBsQlEwUTdPenRYUVVWRUxESkNRVUY1UWtFc1IwRkJla0lzUlVGQkswTTdUVUZETjBNc1QwRkJUeXhMUVVGTFJDeFpRVUZNTEVOQlFXdENMRXRCUVV0YUxGTkJRVXdzUTBGQlpXVXNkVUpCUVdZc1EwRkJkVU5HTEVkQlFYWkRMRU5CUVd4Q0xFTkJRVkE3U1VGRFJEczdPMWRCUlVRc05FSkJRVEJDUVN4SFFVRXhRaXhGUVVFclF6dE5RVU0zUXl4SlFVRk5SeXhWUVVGVkxFZEJRVWNzUzBGQlMyaENMRk5CUVV3c1EwRkJaV1VzZFVKQlFXWXNRMEZCZFVORkxFbEJRWFpETEVOQlEycENMRXRCUVV0cVFpeFRRVVJaTEVOQlFXNUNPMDFCUjBFc1QwRkJUeXhMUVVGTGEwSXNZVUZCVEN4RFFVRnRRaXhKUVVGQlF5eDNRa0ZCUVN4RlFVRnRRazRzUjBGQmJrSXNSVUZCZDBKSExGVkJRWGhDTEVOQlFXNUNMRVZCUVhkRWFrSXNTVUZCZUVRc1EwRkRUQ3hMUVVGTGNVSXNZVUZCVEN4RlFVUkxMRU5CUVZBN1NVRkhSRHM3T3pzN08yVkJSMWs1UWl4VkluMD0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgX3dvcmRzID0gcmVxdWlyZShcIi4uL2NvbnN0YW50cy93b3Jkc1wiKTtcblxudmFyIF91dGlsID0gcmVxdWlyZShcIi4uL3V0aWxcIik7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHsgd3JpdGFibGU6IGZhbHNlIH0pOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxudmFyIEdlbmVyYXRvciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHtcbiAgICB2YXIgX3JlZiA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge30sXG4gICAgICAgIF9yZWYkc2VudGVuY2VzUGVyUGFyYSA9IF9yZWYuc2VudGVuY2VzUGVyUGFyYWdyYXBoLFxuICAgICAgICBzZW50ZW5jZXNQZXJQYXJhZ3JhcGggPSBfcmVmJHNlbnRlbmNlc1BlclBhcmEgPT09IHZvaWQgMCA/IHtcbiAgICAgIG1heDogNyxcbiAgICAgIG1pbjogM1xuICAgIH0gOiBfcmVmJHNlbnRlbmNlc1BlclBhcmEsXG4gICAgICAgIF9yZWYkd29yZHNQZXJTZW50ZW5jZSA9IF9yZWYud29yZHNQZXJTZW50ZW5jZSxcbiAgICAgICAgd29yZHNQZXJTZW50ZW5jZSA9IF9yZWYkd29yZHNQZXJTZW50ZW5jZSA9PT0gdm9pZCAwID8ge1xuICAgICAgbWF4OiAxNSxcbiAgICAgIG1pbjogNVxuICAgIH0gOiBfcmVmJHdvcmRzUGVyU2VudGVuY2UsXG4gICAgICAgIHJhbmRvbSA9IF9yZWYucmFuZG9tLFxuICAgICAgICBzZWVkID0gX3JlZi5zZWVkLFxuICAgICAgICBfcmVmJHdvcmRzID0gX3JlZi53b3JkcyxcbiAgICAgICAgd29yZHMgPSBfcmVmJHdvcmRzID09PSB2b2lkIDAgPyBfd29yZHMuV09SRFMgOiBfcmVmJHdvcmRzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEdlbmVyYXRvcik7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJzZW50ZW5jZXNQZXJQYXJhZ3JhcGhcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIndvcmRzUGVyU2VudGVuY2VcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInJhbmRvbVwiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwid29yZHNcIiwgdm9pZCAwKTtcblxuICAgIGlmIChzZW50ZW5jZXNQZXJQYXJhZ3JhcGgubWluID4gc2VudGVuY2VzUGVyUGFyYWdyYXBoLm1heCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWluaW11bSBudW1iZXIgb2Ygc2VudGVuY2VzIHBlciBwYXJhZ3JhcGggKFwiLmNvbmNhdChzZW50ZW5jZXNQZXJQYXJhZ3JhcGgubWluLCBcIikgY2Fubm90IGV4Y2VlZCBtYXhpbXVtIChcIikuY29uY2F0KHNlbnRlbmNlc1BlclBhcmFncmFwaC5tYXgsIFwiKS5cIikpO1xuICAgIH1cblxuICAgIGlmICh3b3Jkc1BlclNlbnRlbmNlLm1pbiA+IHdvcmRzUGVyU2VudGVuY2UubWF4KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNaW5pbXVtIG51bWJlciBvZiB3b3JkcyBwZXIgc2VudGVuY2UgKFwiLmNvbmNhdCh3b3Jkc1BlclNlbnRlbmNlLm1pbiwgXCIpIGNhbm5vdCBleGNlZWQgbWF4aW11bSAoXCIpLmNvbmNhdCh3b3Jkc1BlclNlbnRlbmNlLm1heCwgXCIpLlwiKSk7XG4gICAgfVxuXG4gICAgdGhpcy5zZW50ZW5jZXNQZXJQYXJhZ3JhcGggPSBzZW50ZW5jZXNQZXJQYXJhZ3JhcGg7XG4gICAgdGhpcy53b3JkcyA9IHdvcmRzO1xuICAgIHRoaXMud29yZHNQZXJTZW50ZW5jZSA9IHdvcmRzUGVyU2VudGVuY2U7XG4gICAgdGhpcy5yYW5kb20gPSByYW5kb20gfHwgTWF0aC5yYW5kb207XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoR2VuZXJhdG9yLCBbe1xuICAgIGtleTogXCJnZW5lcmF0ZVJhbmRvbUludGVnZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2VuZXJhdGVSYW5kb21JbnRlZ2VyKG1pbiwgbWF4KSB7XG4gICAgICByZXR1cm4gTWF0aC5mbG9vcih0aGlzLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpICsgbWluKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2VuZXJhdGVSYW5kb21Xb3Jkc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZW5lcmF0ZVJhbmRvbVdvcmRzKG51bSkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgdmFyIF90aGlzJHdvcmRzUGVyU2VudGVuYyA9IHRoaXMud29yZHNQZXJTZW50ZW5jZSxcbiAgICAgICAgICBtaW4gPSBfdGhpcyR3b3Jkc1BlclNlbnRlbmMubWluLFxuICAgICAgICAgIG1heCA9IF90aGlzJHdvcmRzUGVyU2VudGVuYy5tYXg7XG4gICAgICB2YXIgbGVuZ3RoID0gbnVtIHx8IHRoaXMuZ2VuZXJhdGVSYW5kb21JbnRlZ2VyKG1pbiwgbWF4KTtcbiAgICAgIHJldHVybiAoMCwgX3V0aWwubWFrZUFycmF5T2ZMZW5ndGgpKGxlbmd0aCkucmVkdWNlKGZ1bmN0aW9uIChhY2N1bXVsYXRvciwgaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIFwiXCIuY29uY2F0KF90aGlzLnBsdWNrUmFuZG9tV29yZCgpLCBcIiBcIikuY29uY2F0KGFjY3VtdWxhdG9yKTtcbiAgICAgIH0sIFwiXCIpLnRyaW0oKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2VuZXJhdGVSYW5kb21TZW50ZW5jZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZW5lcmF0ZVJhbmRvbVNlbnRlbmNlKG51bSkge1xuICAgICAgcmV0dXJuIFwiXCIuY29uY2F0KCgwLCBfdXRpbC5jYXBpdGFsaXplKSh0aGlzLmdlbmVyYXRlUmFuZG9tV29yZHMobnVtKSksIFwiLlwiKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2VuZXJhdGVSYW5kb21QYXJhZ3JhcGhcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2VuZXJhdGVSYW5kb21QYXJhZ3JhcGgobnVtKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgdmFyIF90aGlzJHNlbnRlbmNlc1BlclBhciA9IHRoaXMuc2VudGVuY2VzUGVyUGFyYWdyYXBoLFxuICAgICAgICAgIG1pbiA9IF90aGlzJHNlbnRlbmNlc1BlclBhci5taW4sXG4gICAgICAgICAgbWF4ID0gX3RoaXMkc2VudGVuY2VzUGVyUGFyLm1heDtcbiAgICAgIHZhciBsZW5ndGggPSBudW0gfHwgdGhpcy5nZW5lcmF0ZVJhbmRvbUludGVnZXIobWluLCBtYXgpO1xuICAgICAgcmV0dXJuICgwLCBfdXRpbC5tYWtlQXJyYXlPZkxlbmd0aCkobGVuZ3RoKS5yZWR1Y2UoZnVuY3Rpb24gKGFjY3VtdWxhdG9yLCBpbmRleCkge1xuICAgICAgICByZXR1cm4gXCJcIi5jb25jYXQoX3RoaXMyLmdlbmVyYXRlUmFuZG9tU2VudGVuY2UoKSwgXCIgXCIpLmNvbmNhdChhY2N1bXVsYXRvcik7XG4gICAgICB9LCBcIlwiKS50cmltKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInBsdWNrUmFuZG9tV29yZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwbHVja1JhbmRvbVdvcmQoKSB7XG4gICAgICB2YXIgbWluID0gMDtcbiAgICAgIHZhciBtYXggPSB0aGlzLndvcmRzLmxlbmd0aCAtIDE7XG4gICAgICB2YXIgaW5kZXggPSB0aGlzLmdlbmVyYXRlUmFuZG9tSW50ZWdlcihtaW4sIG1heCk7XG4gICAgICByZXR1cm4gdGhpcy53b3Jkc1tpbmRleF07XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEdlbmVyYXRvcjtcbn0oKTtcblxudmFyIF9kZWZhdWx0ID0gR2VuZXJhdG9yO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKdVlXMWxjeUk2V3lKSFpXNWxjbUYwYjNJaUxDSnpaVzUwWlc1alpYTlFaWEpRWVhKaFozSmhjR2dpTENKdFlYZ2lMQ0p0YVc0aUxDSjNiM0prYzFCbGNsTmxiblJsYm1ObElpd2ljbUZ1Wkc5dElpd2ljMlZsWkNJc0luZHZjbVJ6SWl3aVYwOVNSRk1pTENKRmNuSnZjaUlzSWsxaGRHZ2lMQ0ptYkc5dmNpSXNJbTUxYlNJc0lteGxibWQwYUNJc0ltZGxibVZ5WVhSbFVtRnVaRzl0U1c1MFpXZGxjaUlzSW0xaGEyVkJjbkpoZVU5bVRHVnVaM1JvSWl3aWNtVmtkV05sSWl3aVlXTmpkVzExYkdGMGIzSWlMQ0pwYm1SbGVDSXNJbkJzZFdOclVtRnVaRzl0VjI5eVpDSXNJblJ5YVcwaUxDSmpZWEJwZEdGc2FYcGxJaXdpWjJWdVpYSmhkR1ZTWVc1a2IyMVhiM0prY3lJc0ltZGxibVZ5WVhSbFVtRnVaRzl0VTJWdWRHVnVZMlVpWFN3aWMyOTFjbU5sY3lJNld5SXVMaTh1TGk5emNtTXZiR2xpTDJkbGJtVnlZWFJ2Y2k1MGN5SmRMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdleUJYVDFKRVV5QjlJR1p5YjIwZ1hDSXVMaTlqYjI1emRHRnVkSE12ZDI5eVpITmNJanRjY2x4dWFXMXdiM0owSUhzZ1kyRndhWFJoYkdsNlpTd2diV0ZyWlVGeWNtRjVUMlpNWlc1bmRHZ2dmU0JtY205dElGd2lMaTR2ZFhScGJGd2lPMXh5WEc1Y2NseHVaWGh3YjNKMElHbHVkR1Z5Wm1GalpTQkpRbTkxYm1SeklIdGNjbHh1SUNCdGFXNDZJRzUxYldKbGNqdGNjbHh1SUNCdFlYZzZJRzUxYldKbGNqdGNjbHh1ZlZ4eVhHNWNjbHh1Wlhod2IzSjBJSFI1Y0dVZ1NWQnlibWNnUFNBb0tTQTlQaUJ1ZFcxaVpYSTdYSEpjYmx4eVhHNWxlSEJ2Y25RZ2RIbHdaU0JKVTJWbFpGSmhibVJ2YlNBOUlHNWxkeUFvYzJWbFpEODZJSE4wY21sdVp5a2dQVDRnU1ZCeWJtYzdYSEpjYmx4eVhHNWxlSEJ2Y25RZ2FXNTBaWEptWVdObElFbE5ZWFJvSUh0Y2NseHVJQ0J6WldWa2NtRnVaRzl0T2lCSlUyVmxaRkpoYm1SdmJUdGNjbHh1ZlZ4eVhHNWNjbHh1Wlhod2IzSjBJR2x1ZEdWeVptRmpaU0JKUjJWdVpYSmhkRzl5VDNCMGFXOXVjeUI3WEhKY2JpQWdjMlZ1ZEdWdVkyVnpVR1Z5VUdGeVlXZHlZWEJvUHpvZ1NVSnZkVzVrY3p0Y2NseHVJQ0IzYjNKa2MxQmxjbE5sYm5SbGJtTmxQem9nU1VKdmRXNWtjenRjY2x4dUlDQnlZVzVrYjIwL09pQkpVSEp1Wnp0Y2NseHVJQ0J6WldWa1B6b2djM1J5YVc1bk8xeHlYRzRnSUhkdmNtUnpQem9nYzNSeWFXNW5XMTA3WEhKY2JuMWNjbHh1WEhKY2JtTnNZWE56SUVkbGJtVnlZWFJ2Y2lCN1hISmNiaUFnY0hWaWJHbGpJSE5sYm5SbGJtTmxjMUJsY2xCaGNtRm5jbUZ3YURvZ1NVSnZkVzVrY3p0Y2NseHVJQ0J3ZFdKc2FXTWdkMjl5WkhOUVpYSlRaVzUwWlc1alpUb2dTVUp2ZFc1a2N6dGNjbHh1SUNCd2RXSnNhV01nY21GdVpHOXRPaUJKVUhKdVp6dGNjbHh1SUNCd2RXSnNhV01nZDI5eVpITTZJSE4wY21sdVoxdGRPMXh5WEc1Y2NseHVJQ0JqYjI1emRISjFZM1J2Y2loN1hISmNiaUFnSUNCelpXNTBaVzVqWlhOUVpYSlFZWEpoWjNKaGNHZ2dQU0I3SUcxaGVEb2dOeXdnYldsdU9pQXpJSDBzWEhKY2JpQWdJQ0IzYjNKa2MxQmxjbE5sYm5SbGJtTmxJRDBnZXlCdFlYZzZJREUxTENCdGFXNDZJRFVnZlN4Y2NseHVJQ0FnSUhKaGJtUnZiU3hjY2x4dUlDQWdJSE5sWldRc1hISmNiaUFnSUNCM2IzSmtjeUE5SUZkUFVrUlRMRnh5WEc0Z0lIMDZJRWxIWlc1bGNtRjBiM0pQY0hScGIyNXpJRDBnZTMwcElIdGNjbHh1SUNBZ0lHbG1JQ2h6Wlc1MFpXNWpaWE5RWlhKUVlYSmhaM0poY0dndWJXbHVJRDRnYzJWdWRHVnVZMlZ6VUdWeVVHRnlZV2R5WVhCb0xtMWhlQ2tnZTF4eVhHNGdJQ0FnSUNCMGFISnZkeUJ1WlhjZ1JYSnliM0lvWEhKY2JpQWdJQ0FnSUNBZ1lFMXBibWx0ZFcwZ2JuVnRZbVZ5SUc5bUlITmxiblJsYm1ObGN5QndaWElnY0dGeVlXZHlZWEJvSUNna2UxeHlYRzRnSUNBZ0lDQWdJQ0FnYzJWdWRHVnVZMlZ6VUdWeVVHRnlZV2R5WVhCb0xtMXBibHh5WEc0Z0lDQWdJQ0FnSUgwcElHTmhibTV2ZENCbGVHTmxaV1FnYldGNGFXMTFiU0FvSkh0elpXNTBaVzVqWlhOUVpYSlFZWEpoWjNKaGNHZ3ViV0Y0ZlNrdVlDeGNjbHh1SUNBZ0lDQWdLVHRjY2x4dUlDQWdJSDFjY2x4dVhISmNiaUFnSUNCcFppQW9kMjl5WkhOUVpYSlRaVzUwWlc1alpTNXRhVzRnUGlCM2IzSmtjMUJsY2xObGJuUmxibU5sTG0xaGVDa2dlMXh5WEc0Z0lDQWdJQ0IwYUhKdmR5QnVaWGNnUlhKeWIzSW9YSEpjYmlBZ0lDQWdJQ0FnWUUxcGJtbHRkVzBnYm5WdFltVnlJRzltSUhkdmNtUnpJSEJsY2lCelpXNTBaVzVqWlNBb0pIdGNjbHh1SUNBZ0lDQWdJQ0FnSUhkdmNtUnpVR1Z5VTJWdWRHVnVZMlV1YldsdVhISmNiaUFnSUNBZ0lDQWdmU2tnWTJGdWJtOTBJR1Y0WTJWbFpDQnRZWGhwYlhWdElDZ2tlM2R2Y21SelVHVnlVMlZ1ZEdWdVkyVXViV0Y0ZlNrdVlDeGNjbHh1SUNBZ0lDQWdLVHRjY2x4dUlDQWdJSDFjY2x4dVhISmNiaUFnSUNCMGFHbHpMbk5sYm5SbGJtTmxjMUJsY2xCaGNtRm5jbUZ3YUNBOUlITmxiblJsYm1ObGMxQmxjbEJoY21GbmNtRndhRHRjY2x4dUlDQWdJSFJvYVhNdWQyOXlaSE1nUFNCM2IzSmtjenRjY2x4dUlDQWdJSFJvYVhNdWQyOXlaSE5RWlhKVFpXNTBaVzVqWlNBOUlIZHZjbVJ6VUdWeVUyVnVkR1Z1WTJVN1hISmNiaUFnSUNCMGFHbHpMbkpoYm1SdmJTQTlJSEpoYm1SdmJTQjhmQ0JOWVhSb0xuSmhibVJ2YlR0Y2NseHVJQ0I5WEhKY2JseHlYRzRnSUhCMVlteHBZeUJuWlc1bGNtRjBaVkpoYm1SdmJVbHVkR1ZuWlhJb2JXbHVPaUJ1ZFcxaVpYSXNJRzFoZURvZ2JuVnRZbVZ5S1RvZ2JuVnRZbVZ5SUh0Y2NseHVJQ0FnSUhKbGRIVnliaUJOWVhSb0xtWnNiMjl5S0hSb2FYTXVjbUZ1Wkc5dEtDa2dLaUFvYldGNElDMGdiV2x1SUNzZ01Ta2dLeUJ0YVc0cE8xeHlYRzRnSUgxY2NseHVYSEpjYmlBZ2NIVmliR2xqSUdkbGJtVnlZWFJsVW1GdVpHOXRWMjl5WkhNb2JuVnRQem9nYm5WdFltVnlLVG9nYzNSeWFXNW5JSHRjY2x4dUlDQWdJR052Ym5OMElIc2diV2x1TENCdFlYZ2dmU0E5SUhSb2FYTXVkMjl5WkhOUVpYSlRaVzUwWlc1alpUdGNjbHh1SUNBZ0lHTnZibk4wSUd4bGJtZDBhQ0E5SUc1MWJTQjhmQ0IwYUdsekxtZGxibVZ5WVhSbFVtRnVaRzl0U1c1MFpXZGxjaWh0YVc0c0lHMWhlQ2s3WEhKY2JpQWdJQ0J5WlhSMWNtNGdiV0ZyWlVGeWNtRjVUMlpNWlc1bmRHZ29iR1Z1WjNSb0tWeHlYRzRnSUNBZ0lDQXVjbVZrZFdObEtDaGhZMk4xYlhWc1lYUnZjam9nYzNSeWFXNW5MQ0JwYm1SbGVEb2diblZ0WW1WeUtUb2djM1J5YVc1bklEMCtJSHRjY2x4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnWUNSN2RHaHBjeTV3YkhWamExSmhibVJ2YlZkdmNtUW9LWDBnSkh0aFkyTjFiWFZzWVhSdmNuMWdPMXh5WEc0Z0lDQWdJQ0I5TENCY0lsd2lLVnh5WEc0Z0lDQWdJQ0F1ZEhKcGJTZ3BPMXh5WEc0Z0lIMWNjbHh1WEhKY2JpQWdjSFZpYkdsaklHZGxibVZ5WVhSbFVtRnVaRzl0VTJWdWRHVnVZMlVvYm5WdFB6b2diblZ0WW1WeUtUb2djM1J5YVc1bklIdGNjbHh1SUNBZ0lISmxkSFZ5YmlCZ0pIdGpZWEJwZEdGc2FYcGxLSFJvYVhNdVoyVnVaWEpoZEdWU1lXNWtiMjFYYjNKa2N5aHVkVzBwS1gwdVlEdGNjbHh1SUNCOVhISmNibHh5WEc0Z0lIQjFZbXhwWXlCblpXNWxjbUYwWlZKaGJtUnZiVkJoY21GbmNtRndhQ2h1ZFcwL09pQnVkVzFpWlhJcE9pQnpkSEpwYm1jZ2UxeHlYRzRnSUNBZ1kyOXVjM1FnZXlCdGFXNHNJRzFoZUNCOUlEMGdkR2hwY3k1elpXNTBaVzVqWlhOUVpYSlFZWEpoWjNKaGNHZzdYSEpjYmlBZ0lDQmpiMjV6ZENCc1pXNW5kR2dnUFNCdWRXMGdmSHdnZEdocGN5NW5aVzVsY21GMFpWSmhibVJ2YlVsdWRHVm5aWElvYldsdUxDQnRZWGdwTzF4eVhHNGdJQ0FnY21WMGRYSnVJRzFoYTJWQmNuSmhlVTltVEdWdVozUm9LR3hsYm1kMGFDbGNjbHh1SUNBZ0lDQWdMbkpsWkhWalpTZ29ZV05qZFcxMWJHRjBiM0k2SUhOMGNtbHVaeXdnYVc1a1pYZzZJRzUxYldKbGNpazZJSE4wY21sdVp5QTlQaUI3WEhKY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUdBa2UzUm9hWE11WjJWdVpYSmhkR1ZTWVc1a2IyMVRaVzUwWlc1alpTZ3BmU0FrZTJGalkzVnRkV3hoZEc5eWZXQTdYSEpjYmlBZ0lDQWdJSDBzSUZ3aVhDSXBYSEpjYmlBZ0lDQWdJQzUwY21sdEtDazdYSEpjYmlBZ2ZWeHlYRzVjY2x4dUlDQndkV0pzYVdNZ2NHeDFZMnRTWVc1a2IyMVhiM0prS0NrNklITjBjbWx1WnlCN1hISmNiaUFnSUNCamIyNXpkQ0J0YVc0Z1BTQXdPMXh5WEc0Z0lDQWdZMjl1YzNRZ2JXRjRJRDBnZEdocGN5NTNiM0prY3k1c1pXNW5kR2dnTFNBeE8xeHlYRzRnSUNBZ1kyOXVjM1FnYVc1a1pYZ2dQU0IwYUdsekxtZGxibVZ5WVhSbFVtRnVaRzl0U1c1MFpXZGxjaWh0YVc0c0lHMWhlQ2s3WEhKY2JpQWdJQ0J5WlhSMWNtNGdkR2hwY3k1M2IzSmtjMXRwYm1SbGVGMDdYSEpjYmlBZ2ZWeHlYRzU5WEhKY2JseHlYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQkhaVzVsY21GMGIzSTdYSEpjYmlKZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN096dEJRVUZCT3p0QlFVTkJPenM3T3pzN096czdPMGxCZFVKTlFTeFRPMFZCVFVvc2NVSkJUVEpDTzBsQlFVRXNLMFZCUVVvc1JVRkJTVHRKUVVGQkxHbERRVXg2UWtNc2NVSkJTM2xDTzBsQlFVRXNTVUZNZWtKQkxIRkNRVXQ1UWl4elEwRk1SRHROUVVGRlF5eEhRVUZITEVWQlFVVXNRMEZCVUR0TlFVRlZReXhIUVVGSExFVkJRVVU3U1VGQlppeERRVXRETzBsQlFVRXNhVU5CU25wQ1F5eG5Ra0ZKZVVJN1NVRkJRU3hKUVVwNlFrRXNaMEpCU1hsQ0xITkRRVXBPTzAxQlFVVkdMRWRCUVVjc1JVRkJSU3hGUVVGUU8wMUJRVmRETEVkQlFVY3NSVUZCUlR0SlFVRm9RaXhEUVVsTk8wbEJRVUVzU1VGSWVrSkZMRTFCUjNsQ0xGRkJTSHBDUVN4TlFVZDVRanRKUVVGQkxFbEJSbnBDUXl4SlFVVjVRaXhSUVVaNlFrRXNTVUZGZVVJN1NVRkJRU3h6UWtGRWVrSkRMRXRCUTNsQ08wbEJRVUVzU1VGRWVrSkJMRXRCUTNsQ0xESkNRVVJxUWtNc1dVRkRhVUk3TzBsQlFVRTdPMGxCUVVFN08wbEJRVUU3TzBsQlFVRTdPMGxCUVVFN08wbEJRM3BDTEVsQlFVbFFMSEZDUVVGeFFpeERRVUZEUlN4SFFVRjBRaXhIUVVFMFFrWXNjVUpCUVhGQ0xFTkJRVU5ETEVkQlFYUkVMRVZCUVRKRU8wMUJRM3BFTEUxQlFVMHNTVUZCU1U4c1MwRkJTaXh6UkVGRlJsSXNjVUpCUVhGQ0xFTkJRVU5GTEVkQlJuQkNMSE5EUVVkM1FrWXNjVUpCUVhGQ0xFTkJRVU5ETEVkQlNEbERMRkZCUVU0N1NVRkxSRHM3U1VGRlJDeEpRVUZKUlN4blFrRkJaMElzUTBGQlEwUXNSMEZCYWtJc1IwRkJkVUpETEdkQ1FVRm5RaXhEUVVGRFJpeEhRVUUxUXl4RlFVRnBSRHROUVVNdlF5eE5RVUZOTEVsQlFVbFBMRXRCUVVvc2FVUkJSVVpNTEdkQ1FVRm5RaXhEUVVGRFJDeEhRVVptTEhORFFVZDNRa01zWjBKQlFXZENMRU5CUVVOR0xFZEJTSHBETEZGQlFVNDdTVUZMUkRzN1NVRkZSQ3hMUVVGTFJDeHhRa0ZCVEN4SFFVRTJRa0VzY1VKQlFUZENPMGxCUTBFc1MwRkJTMDBzUzBGQlRDeEhRVUZoUVN4TFFVRmlPMGxCUTBFc1MwRkJTMGdzWjBKQlFVd3NSMEZCZDBKQkxHZENRVUY0UWp0SlFVTkJMRXRCUVV0RExFMUJRVXdzUjBGQlkwRXNUVUZCVFN4SlFVRkpTeXhKUVVGSkxFTkJRVU5NTEUxQlFUZENPMFZCUTBRN096czdWMEZGUkN3clFrRkJOa0pHTEVkQlFUZENMRVZCUVRCRFJDeEhRVUV4UXl4RlFVRXJSRHROUVVNM1JDeFBRVUZQVVN4SlFVRkpMRU5CUVVORExFdEJRVXdzUTBGQlZ5eExRVUZMVGl4TlFVRk1MRTFCUVdsQ1NDeEhRVUZITEVkQlFVZERMRWRCUVU0c1IwRkJXU3hEUVVFM1FpeEpRVUZyUTBFc1IwRkJOME1zUTBGQlVEdEpRVU5FT3pzN1YwRkZSQ3cyUWtGQk1rSlRMRWRCUVROQ0xFVkJRV2xFTzAxQlFVRTdPMDFCUXk5RExEUkNRVUZ4UWl4TFFVRkxVaXhuUWtGQk1VSTdUVUZCUVN4SlFVRlJSQ3hIUVVGU0xIbENRVUZSUVN4SFFVRlNPMDFCUVVFc1NVRkJZVVFzUjBGQllpeDVRa0ZCWVVFc1IwRkJZanROUVVOQkxFbEJRVTFYTEUxQlFVMHNSMEZCUjBRc1IwRkJSeXhKUVVGSkxFdEJRVXRGTEhGQ1FVRk1MRU5CUVRKQ1dDeEhRVUV6UWl4RlFVRm5RMFFzUjBGQmFFTXNRMEZCZEVJN1RVRkRRU3hQUVVGUExFbEJRVUZoTEhWQ1FVRkJMRVZCUVd0Q1JpeE5RVUZzUWl4RlFVTktSeXhOUVVSSkxFTkJRMGNzVlVGQlEwTXNWMEZCUkN4RlFVRnpRa01zUzBGQmRFSXNSVUZCWjBRN1VVRkRkRVFzYVVKQlFWVXNTMEZCU1N4RFFVRkRReXhsUVVGTUxFVkJRVllzWTBGQmIwTkdMRmRCUVhCRE8wMUJRMFFzUTBGSVNTeEZRVWRHTEVWQlNFVXNSVUZKU2tjc1NVRktTU3hGUVVGUU8wbEJTMFE3T3p0WFFVVkVMR2REUVVFNFFsSXNSMEZCT1VJc1JVRkJiMFE3VFVGRGJFUXNhVUpCUVZVc1NVRkJRVk1zWjBKQlFVRXNSVUZCVnl4TFFVRkxReXh0UWtGQlRDeERRVUY1UWxZc1IwRkJla0lzUTBGQldDeERRVUZXTzBsQlEwUTdPenRYUVVWRUxHbERRVUVyUWtFc1IwRkJMMElzUlVGQmNVUTdUVUZCUVRzN1RVRkRia1FzTkVKQlFYRkNMRXRCUVV0WUxIRkNRVUV4UWp0TlFVRkJMRWxCUVZGRkxFZEJRVklzZVVKQlFWRkJMRWRCUVZJN1RVRkJRU3hKUVVGaFJDeEhRVUZpTEhsQ1FVRmhRU3hIUVVGaU8wMUJRMEVzU1VGQlRWY3NUVUZCVFN4SFFVRkhSQ3hIUVVGSExFbEJRVWtzUzBGQlMwVXNjVUpCUVV3c1EwRkJNa0pZTEVkQlFUTkNMRVZCUVdkRFJDeEhRVUZvUXl4RFFVRjBRanROUVVOQkxFOUJRVThzU1VGQlFXRXNkVUpCUVVFc1JVRkJhMEpHTEUxQlFXeENMRVZCUTBwSExFMUJSRWtzUTBGRFJ5eFZRVUZEUXl4WFFVRkVMRVZCUVhOQ1F5eExRVUYwUWl4RlFVRm5SRHRSUVVOMFJDeHBRa0ZCVlN4TlFVRkpMRU5CUVVOTExITkNRVUZNTEVWQlFWWXNZMEZCTWtOT0xGZEJRVE5ETzAxQlEwUXNRMEZJU1N4RlFVZEdMRVZCU0VVc1JVRkpTa2NzU1VGS1NTeEZRVUZRTzBsQlMwUTdPenRYUVVWRUxESkNRVUZwUXp0TlFVTXZRaXhKUVVGTmFrSXNSMEZCUnl4SFFVRkhMRU5CUVZvN1RVRkRRU3hKUVVGTlJDeEhRVUZITEVkQlFVY3NTMEZCUzBzc1MwRkJUQ3hEUVVGWFRTeE5RVUZZTEVkQlFXOUNMRU5CUVdoRE8wMUJRMEVzU1VGQlRVc3NTMEZCU3l4SFFVRkhMRXRCUVV0S0xIRkNRVUZNTEVOQlFUSkNXQ3hIUVVFelFpeEZRVUZuUTBRc1IwRkJhRU1zUTBGQlpEdE5RVU5CTEU5QlFVOHNTMEZCUzBzc1MwRkJUQ3hEUVVGWFZ5eExRVUZZTEVOQlFWQTdTVUZEUkRzN096czdPMlZCUjFsc1FpeFRJbjA9IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxuLyoqXHJcbiAqIEBwYXJhbSBzdHIgIEEgc3RyaW5nIHRoYXQgbWF5IG9yIG1heSBub3QgYmUgY2FwaXRhbGl6ZWQuXHJcbiAqIEByZXR1cm5zICAgIEEgY2FwaXRhbGl6ZWQgc3RyaW5nLlxyXG4gKi9cbnZhciBjYXBpdGFsaXplID0gZnVuY3Rpb24gY2FwaXRhbGl6ZShzdHIpIHtcbiAgdmFyIHRyaW1tZWQgPSBzdHIudHJpbSgpO1xuICByZXR1cm4gdHJpbW1lZC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHRyaW1tZWQuc2xpY2UoMSk7XG59O1xuXG52YXIgX2RlZmF1bHQgPSBjYXBpdGFsaXplO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKdVlXMWxjeUk2V3lKallYQnBkR0ZzYVhwbElpd2ljM1J5SWl3aWRISnBiVzFsWkNJc0luUnlhVzBpTENKamFHRnlRWFFpTENKMGIxVndjR1Z5UTJGelpTSXNJbk5zYVdObElsMHNJbk52ZFhKalpYTWlPbHNpTGk0dkxpNHZjM0pqTDNWMGFXd3ZZMkZ3YVhSaGJHbDZaUzUwY3lKZExDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SXZLaXBjY2x4dUlDb2dRSEJoY21GdElITjBjaUFnUVNCemRISnBibWNnZEdoaGRDQnRZWGtnYjNJZ2JXRjVJRzV2ZENCaVpTQmpZWEJwZEdGc2FYcGxaQzVjY2x4dUlDb2dRSEpsZEhWeWJuTWdJQ0FnUVNCallYQnBkR0ZzYVhwbFpDQnpkSEpwYm1jdVhISmNiaUFxTDF4eVhHNWpiMjV6ZENCallYQnBkR0ZzYVhwbElEMGdLSE4wY2pvZ2MzUnlhVzVuS1RvZ2MzUnlhVzVuSUQwK0lIdGNjbHh1SUNCamIyNXpkQ0IwY21sdGJXVmtJRDBnYzNSeUxuUnlhVzBvS1R0Y2NseHVJQ0J5WlhSMWNtNGdkSEpwYlcxbFpDNWphR0Z5UVhRb01Da3VkRzlWY0hCbGNrTmhjMlVvS1NBcklIUnlhVzF0WldRdWMyeHBZMlVvTVNrN1hISmNibjA3WEhKY2JseHlYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQmpZWEJwZEdGc2FYcGxPMXh5WEc0aVhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN096czdRVUZCUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFbEJRVTFCTEZWQlFWVXNSMEZCUnl4VFFVRmlRU3hWUVVGaExFTkJRVU5ETEVkQlFVUXNSVUZCZVVJN1JVRkRNVU1zU1VGQlRVTXNUMEZCVHl4SFFVRkhSQ3hIUVVGSExFTkJRVU5GTEVsQlFVb3NSVUZCYUVJN1JVRkRRU3hQUVVGUFJDeFBRVUZQTEVOQlFVTkZMRTFCUVZJc1EwRkJaU3hEUVVGbUxFVkJRV3RDUXl4WFFVRnNRaXhMUVVGclEwZ3NUMEZCVHl4RFFVRkRTU3hMUVVGU0xFTkJRV01zUTBGQlpDeERRVUY2UXp0QlFVTkVMRU5CU0VRN08yVkJTMlZPTEZVaWZRPT0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImNhcGl0YWxpemVcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2NhcGl0YWxpemVbXCJkZWZhdWx0XCJdO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImlzTm9kZVwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfaXNOb2RlW1wiZGVmYXVsdFwiXTtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJpc1JlYWN0TmF0aXZlXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9pc1JlYWN0TmF0aXZlW1wiZGVmYXVsdFwiXTtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJpc1dpbmRvd3NcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2lzV2luZG93c1tcImRlZmF1bHRcIl07XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwibWFrZUFycmF5T2ZMZW5ndGhcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX21ha2VBcnJheU9mTGVuZ3RoW1wiZGVmYXVsdFwiXTtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJtYWtlQXJyYXlPZlN0cmluZ3NcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX21ha2VBcnJheU9mU3RyaW5nc1tcImRlZmF1bHRcIl07XG4gIH1cbn0pO1xuXG52YXIgX2NhcGl0YWxpemUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2NhcGl0YWxpemVcIikpO1xuXG52YXIgX2lzTm9kZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vaXNOb2RlXCIpKTtcblxudmFyIF9pc1JlYWN0TmF0aXZlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9pc1JlYWN0TmF0aXZlXCIpKTtcblxudmFyIF9pc1dpbmRvd3MgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2lzV2luZG93c1wiKSk7XG5cbnZhciBfbWFrZUFycmF5T2ZMZW5ndGggPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL21ha2VBcnJheU9mTGVuZ3RoXCIpKTtcblxudmFyIF9tYWtlQXJyYXlPZlN0cmluZ3MgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL21ha2VBcnJheU9mU3RyaW5nc1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p1WVcxbGN5STZXMTBzSW5OdmRYSmpaWE1pT2xzaUxpNHZMaTR2YzNKakwzVjBhV3d2YVc1a1pYZ3VkSE1pWFN3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUdOaGNHbDBZV3hwZW1VZ1puSnZiU0JjSWk0dlkyRndhWFJoYkdsNlpWd2lPMXh5WEc1cGJYQnZjblFnYVhOT2IyUmxJR1p5YjIwZ1hDSXVMMmx6VG05a1pWd2lPMXh5WEc1cGJYQnZjblFnYVhOU1pXRmpkRTVoZEdsMlpTQm1jbTl0SUZ3aUxpOXBjMUpsWVdOMFRtRjBhWFpsWENJN1hISmNibWx0Y0c5eWRDQnBjMWRwYm1SdmQzTWdabkp2YlNCY0lpNHZhWE5YYVc1a2IzZHpYQ0k3WEhKY2JtbHRjRzl5ZENCdFlXdGxRWEp5WVhsUFpreGxibWQwYUNCbWNtOXRJRndpTGk5dFlXdGxRWEp5WVhsUFpreGxibWQwYUZ3aU8xeHlYRzVwYlhCdmNuUWdiV0ZyWlVGeWNtRjVUMlpUZEhKcGJtZHpJR1p5YjIwZ1hDSXVMMjFoYTJWQmNuSmhlVTltVTNSeWFXNW5jMXdpTzF4eVhHNWNjbHh1Wlhod2IzSjBJSHRjY2x4dUlDQmpZWEJwZEdGc2FYcGxMRnh5WEc0Z0lHbHpUbTlrWlN4Y2NseHVJQ0JwYzFKbFlXTjBUbUYwYVhabExGeHlYRzRnSUdselYybHVaRzkzY3l4Y2NseHVJQ0J0WVd0bFFYSnlZWGxQWmt4bGJtZDBhQ3hjY2x4dUlDQnRZV3RsUVhKeVlYbFBabE4wY21sdVozTXNYSEpjYm4wN1hISmNiaUpkTENKdFlYQndhVzVuY3lJNklqczdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3TzBGQlFVRTdPMEZCUTBFN08wRkJRMEU3TzBGQlEwRTdPMEZCUTBFN08wRkJRMEVpZlE9PSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbi8qKlxyXG4gKiBAcmV0dXJucyAgVHJ1ZSBpZiB0aGUgcnVudGltZSBpcyBOb2RlSlMuXHJcbiAqL1xudmFyIGlzTm9kZSA9IGZ1bmN0aW9uIGlzTm9kZSgpIHtcbiAgcmV0dXJuIHR5cGVvZiBtb2R1bGUgIT09IFwidW5kZWZpbmVkXCIgJiYgISFtb2R1bGUuZXhwb3J0cztcbn07XG5cbnZhciBfZGVmYXVsdCA9IGlzTm9kZTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnVZVzFsY3lJNld5SnBjMDV2WkdVaUxDSnRiMlIxYkdVaUxDSmxlSEJ2Y25SeklsMHNJbk52ZFhKalpYTWlPbHNpTGk0dkxpNHZjM0pqTDNWMGFXd3ZhWE5PYjJSbExuUnpJbDBzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSWk4cUtseHlYRzRnS2lCQWNtVjBkWEp1Y3lBZ1ZISjFaU0JwWmlCMGFHVWdjblZ1ZEdsdFpTQnBjeUJPYjJSbFNsTXVYSEpjYmlBcUwxeHlYRzVqYjI1emRDQnBjMDV2WkdVZ1BTQW9LVG9nWW05dmJHVmhiaUE5UGlCN1hISmNiaUFnY21WMGRYSnVJSFI1Y0dWdlppQnRiMlIxYkdVZ0lUMDlJRndpZFc1a1pXWnBibVZrWENJZ0ppWWdJU0Z0YjJSMWJHVXVaWGh3YjNKMGN6dGNjbHh1ZlR0Y2NseHVYSEpjYm1WNGNHOXlkQ0JrWldaaGRXeDBJR2x6VG05a1pUdGNjbHh1SWwwc0ltMWhjSEJwYm1keklqb2lPenM3T3pzN08wRkJRVUU3UVVGRFFUdEJRVU5CTzBGQlEwRXNTVUZCVFVFc1RVRkJUU3hIUVVGSExGTkJRVlJCTEUxQlFWTXNSMEZCWlR0RlFVTTFRaXhQUVVGUExFOUJRVTlETEUxQlFWQXNTMEZCYTBJc1YwRkJiRUlzU1VGQmFVTXNRMEZCUXl4RFFVRkRRU3hOUVVGTkxFTkJRVU5ETEU5QlFXcEVPMEZCUTBRc1EwRkdSRHM3WlVGSlpVWXNUU0o5IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxuLyoqXHJcbiAqIENoZWNrIGlmIHJ1bnRpbWUgaXMgUmVhY3ROYXRpdmUuXHJcbiAqIFNvbHV0aW9uIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9rbmlja2xhYnMvbG9yZW0taXBzdW0uanMvcHVsbC81Mi9maWxlc1xyXG4gKlxyXG4gKiBAcmV0dXJucyAgVHJ1ZSBpZiBydW50aW1lIGlzIFJlYWN0TmF0aXZlLlxyXG4gKi9cbnZhciBpc1JlYWN0TmF0aXZlID0gZnVuY3Rpb24gaXNSZWFjdE5hdGl2ZSgpIHtcbiAgdmFyIGlzUmVhY3ROYXRpdmVSZXN1bHQgPSBmYWxzZTtcblxuICB0cnkge1xuICAgIGlzUmVhY3ROYXRpdmVSZXN1bHQgPSBuYXZpZ2F0b3IucHJvZHVjdCA9PT0gXCJSZWFjdE5hdGl2ZVwiO1xuICB9IGNhdGNoIChlKSB7XG4gICAgaXNSZWFjdE5hdGl2ZVJlc3VsdCA9IGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIGlzUmVhY3ROYXRpdmVSZXN1bHQ7XG59O1xuXG52YXIgX2RlZmF1bHQgPSBpc1JlYWN0TmF0aXZlO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKdVlXMWxjeUk2V3lKcGMxSmxZV04wVG1GMGFYWmxJaXdpYVhOU1pXRmpkRTVoZEdsMlpWSmxjM1ZzZENJc0ltNWhkbWxuWVhSdmNpSXNJbkJ5YjJSMVkzUWlMQ0psSWwwc0luTnZkWEpqWlhNaU9sc2lMaTR2TGk0dmMzSmpMM1YwYVd3dmFYTlNaV0ZqZEU1aGRHbDJaUzUwY3lKZExDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SXZLaXBjY2x4dUlDb2dRMmhsWTJzZ2FXWWdjblZ1ZEdsdFpTQnBjeUJTWldGamRFNWhkR2wyWlM1Y2NseHVJQ29nVTI5c2RYUnBiMjRnWW1GelpXUWdiMjRnYUhSMGNITTZMeTluYVhSb2RXSXVZMjl0TDJ0dWFXTnJiR0ZpY3k5c2IzSmxiUzFwY0hOMWJTNXFjeTl3ZFd4c0x6VXlMMlpwYkdWelhISmNiaUFxWEhKY2JpQXFJRUJ5WlhSMWNtNXpJQ0JVY25WbElHbG1JSEoxYm5ScGJXVWdhWE1nVW1WaFkzUk9ZWFJwZG1VdVhISmNiaUFxTDF4eVhHNWpiMjV6ZENCcGMxSmxZV04wVG1GMGFYWmxJRDBnS0NrNklHSnZiMnhsWVc0Z1BUNGdlMXh5WEc0Z0lHeGxkQ0JwYzFKbFlXTjBUbUYwYVhabFVtVnpkV3gwT2lCaWIyOXNaV0Z1SUQwZ1ptRnNjMlU3WEhKY2JseHlYRzRnSUhSeWVTQjdYSEpjYmlBZ0lDQnBjMUpsWVdOMFRtRjBhWFpsVW1WemRXeDBJRDBnYm1GMmFXZGhkRzl5TG5CeWIyUjFZM1FnUFQwOUlGd2lVbVZoWTNST1lYUnBkbVZjSWp0Y2NseHVJQ0I5SUdOaGRHTm9JQ2hsS1NCN1hISmNiaUFnSUNCcGMxSmxZV04wVG1GMGFYWmxVbVZ6ZFd4MElEMGdabUZzYzJVN1hISmNiaUFnZlZ4eVhHNWNjbHh1SUNCeVpYUjFjbTRnYVhOU1pXRmpkRTVoZEdsMlpWSmxjM1ZzZER0Y2NseHVmVHRjY2x4dVhISmNibVY0Y0c5eWRDQmtaV1poZFd4MElHbHpVbVZoWTNST1lYUnBkbVU3WEhKY2JpSmRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPenRCUVVGQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRWxCUVUxQkxHRkJRV0VzUjBGQlJ5eFRRVUZvUWtFc1lVRkJaMElzUjBGQlpUdEZRVU51UXl4SlFVRkpReXh0UWtGQk5FSXNSMEZCUnl4TFFVRnVRenM3UlVGRlFTeEpRVUZKTzBsQlEwWkJMRzFDUVVGdFFpeEhRVUZIUXl4VFFVRlRMRU5CUVVORExFOUJRVllzUzBGQmMwSXNZVUZCTlVNN1JVRkRSQ3hEUVVaRUxFTkJSVVVzVDBGQlQwTXNRMEZCVUN4RlFVRlZPMGxCUTFaSUxHMUNRVUZ0UWl4SFFVRkhMRXRCUVhSQ08wVkJRMFE3TzBWQlJVUXNUMEZCVDBFc2JVSkJRVkE3UVVGRFJDeERRVlpFT3p0bFFWbGxSQ3hoSW4wPSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBfcGxhdGZvcm1zID0gcmVxdWlyZShcIi4uL2NvbnN0YW50cy9wbGF0Zm9ybXNcIik7XG5cbi8qKlxyXG4gKiBAcmV0dXJucyBUcnVlIGlmIHByb2Nlc3MgaXMgd2luZG93cy5cclxuICovXG52YXIgaXNXaW5kb3dzID0gZnVuY3Rpb24gaXNXaW5kb3dzKCkge1xuICB2YXIgaXNXaW5kb3dzUmVzdWx0ID0gZmFsc2U7XG5cbiAgdHJ5IHtcbiAgICBpc1dpbmRvd3NSZXN1bHQgPSBwcm9jZXNzLnBsYXRmb3JtID09PSBfcGxhdGZvcm1zLlNVUFBPUlRFRF9QTEFURk9STVMuV0lOMzI7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBpc1dpbmRvd3NSZXN1bHQgPSBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiBpc1dpbmRvd3NSZXN1bHQ7XG59O1xuXG52YXIgX2RlZmF1bHQgPSBpc1dpbmRvd3M7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p1WVcxbGN5STZXeUpwYzFkcGJtUnZkM01pTENKcGMxZHBibVJ2ZDNOU1pYTjFiSFFpTENKd2NtOWpaWE56SWl3aWNHeGhkR1p2Y20waUxDSlRWVkJRVDFKVVJVUmZVRXhCVkVaUFVrMVRJaXdpVjBsT016SWlMQ0psSWwwc0luTnZkWEpqWlhNaU9sc2lMaTR2TGk0dmMzSmpMM1YwYVd3dmFYTlhhVzVrYjNkekxuUnpJbDBzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0I3SUZOVlVGQlBVbFJGUkY5UVRFRlVSazlTVFZNZ2ZTQm1jbTl0SUZ3aUxpNHZZMjl1YzNSaGJuUnpMM0JzWVhSbWIzSnRjMXdpTzF4eVhHNWNjbHh1THlvcVhISmNiaUFxSUVCeVpYUjFjbTV6SUZSeWRXVWdhV1lnY0hKdlkyVnpjeUJwY3lCM2FXNWtiM2R6TGx4eVhHNGdLaTljY2x4dVkyOXVjM1FnYVhOWGFXNWtiM2R6SUQwZ0tDazZJR0p2YjJ4bFlXNGdQVDRnZTF4eVhHNGdJR3hsZENCcGMxZHBibVJ2ZDNOU1pYTjFiSFE2SUdKdmIyeGxZVzRnUFNCbVlXeHpaVHRjY2x4dUlDQjBjbmtnZTF4eVhHNGdJQ0FnYVhOWGFXNWtiM2R6VW1WemRXeDBJRDBnY0hKdlkyVnpjeTV3YkdGMFptOXliU0E5UFQwZ1UxVlFVRTlTVkVWRVgxQk1RVlJHVDFKTlV5NVhTVTR6TWp0Y2NseHVJQ0I5SUdOaGRHTm9JQ2hsS1NCN1hISmNiaUFnSUNCcGMxZHBibVJ2ZDNOU1pYTjFiSFFnUFNCbVlXeHpaVHRjY2x4dUlDQjlYSEpjYmlBZ2NtVjBkWEp1SUdselYybHVaRzkzYzFKbGMzVnNkRHRjY2x4dWZUdGNjbHh1WEhKY2JtVjRjRzl5ZENCa1pXWmhkV3gwSUdselYybHVaRzkzY3p0Y2NseHVJbDBzSW0xaGNIQnBibWR6SWpvaU96czdPenM3TzBGQlFVRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEVzU1VGQlRVRXNVMEZCVXl4SFFVRkhMRk5CUVZwQkxGTkJRVmtzUjBGQlpUdEZRVU12UWl4SlFVRkpReXhsUVVGM1FpeEhRVUZITEV0QlFTOUNPenRGUVVOQkxFbEJRVWs3U1VGRFJrRXNaVUZCWlN4SFFVRkhReXhQUVVGUExFTkJRVU5ETEZGQlFWSXNTMEZCY1VKRExEaENRVUZCTEVOQlFXOUNReXhMUVVFelJEdEZRVU5FTEVOQlJrUXNRMEZGUlN4UFFVRlBReXhEUVVGUUxFVkJRVlU3U1VGRFZrd3NaVUZCWlN4SFFVRkhMRXRCUVd4Q08wVkJRMFE3TzBWQlEwUXNUMEZCVDBFc1pVRkJVRHRCUVVORUxFTkJVa1E3TzJWQlZXVkVMRk1pZlE9PSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbi8qKlxyXG4gKiBAcGFyYW0gbGVuZ3RoIExlbmd0aCBcInhcIi5cclxuICogQHJldHVybnMgICAgICBBbiBhcnJheSBvZiBpbmRleGVzIG9mIGxlbmd0aCBcInhcIi5cclxuICovXG52YXIgbWFrZUFycmF5T2ZMZW5ndGggPSBmdW5jdGlvbiBtYWtlQXJyYXlPZkxlbmd0aCgpIHtcbiAgdmFyIGxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogMDtcbiAgcmV0dXJuIEFycmF5LmFwcGx5KG51bGwsIEFycmF5KGxlbmd0aCkpLm1hcChmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcbiAgICByZXR1cm4gaW5kZXg7XG4gIH0pO1xufTtcblxudmFyIF9kZWZhdWx0ID0gbWFrZUFycmF5T2ZMZW5ndGg7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p1WVcxbGN5STZXeUp0WVd0bFFYSnlZWGxQWmt4bGJtZDBhQ0lzSW14bGJtZDBhQ0lzSWtGeWNtRjVJaXdpWVhCd2JIa2lMQ0p0WVhBaUxDSnBkR1Z0SWl3aWFXNWtaWGdpWFN3aWMyOTFjbU5sY3lJNld5SXVMaTh1TGk5emNtTXZkWFJwYkM5dFlXdGxRWEp5WVhsUFpreGxibWQwYUM1MGN5SmRMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUl2S2lwY2NseHVJQ29nUUhCaGNtRnRJR3hsYm1kMGFDQk1aVzVuZEdnZ1hDSjRYQ0l1WEhKY2JpQXFJRUJ5WlhSMWNtNXpJQ0FnSUNBZ1FXNGdZWEp5WVhrZ2IyWWdhVzVrWlhobGN5QnZaaUJzWlc1bmRHZ2dYQ0o0WENJdVhISmNiaUFxTDF4eVhHNWpiMjV6ZENCdFlXdGxRWEp5WVhsUFpreGxibWQwYUNBOUlDaHNaVzVuZEdnNklHNTFiV0psY2lBOUlEQXBPaUJ1ZFcxaVpYSmJYU0E5UGlCN1hISmNiaUFnY21WMGRYSnVJRUZ5Y21GNUxtRndjR3g1S0c1MWJHd3NJRUZ5Y21GNUtHeGxibWQwYUNrcExtMWhjQ2hjY2x4dUlDQWdJQ2hwZEdWdE9pQmhibmtzSUdsdVpHVjRPaUJ1ZFcxaVpYSXBPaUJ1ZFcxaVpYSWdQVDRnYVc1a1pYZ3NYSEpjYmlBZ0tUdGNjbHh1ZlR0Y2NseHVYSEpjYm1WNGNHOXlkQ0JrWldaaGRXeDBJRzFoYTJWQmNuSmhlVTltVEdWdVozUm9PMXh5WEc0aVhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN096czdRVUZCUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFbEJRVTFCTEdsQ1FVRnBRaXhIUVVGSExGTkJRWEJDUVN4cFFrRkJiMElzUjBGQmEwTTdSVUZCUVN4SlFVRnFRME1zVFVGQmFVTXNkVVZCUVdoQ0xFTkJRV2RDTzBWQlF6RkVMRTlCUVU5RExFdEJRVXNzUTBGQlEwTXNTMEZCVGl4RFFVRlpMRWxCUVZvc1JVRkJhMEpFTEV0QlFVc3NRMEZCUTBRc1RVRkJSQ3hEUVVGMlFpeEZRVUZwUTBjc1IwRkJha01zUTBGRFRDeFZRVUZEUXl4SlFVRkVMRVZCUVZsRExFdEJRVm83U1VGQlFTeFBRVUZ6UTBFc1MwRkJkRU03UlVGQlFTeERRVVJMTEVOQlFWQTdRVUZIUkN4RFFVcEVPenRsUVUxbFRpeHBRaUo5IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIF9tYWtlQXJyYXlPZkxlbmd0aCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbWFrZUFycmF5T2ZMZW5ndGhcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuLyoqXHJcbiAqIEBwYXJhbSBsZW5ndGggIExlbmd0aCBcInhcIi5cclxuICogQHJldHVybnMgICAgICAgQW4gYXJyYXkgb2Ygc3RyaW5ncyBvZiBsZW5ndGggXCJ4XCIuXHJcbiAqL1xudmFyIG1ha2VBcnJheU9mU3RyaW5ncyA9IGZ1bmN0aW9uIG1ha2VBcnJheU9mU3RyaW5ncyhsZW5ndGgsIG1ha2VTdHJpbmcpIHtcbiAgdmFyIGFyciA9ICgwLCBfbWFrZUFycmF5T2ZMZW5ndGhbXCJkZWZhdWx0XCJdKShsZW5ndGgpO1xuICByZXR1cm4gYXJyLm1hcChmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIG1ha2VTdHJpbmcoKTtcbiAgfSk7XG59O1xuXG52YXIgX2RlZmF1bHQgPSBtYWtlQXJyYXlPZlN0cmluZ3M7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p1WVcxbGN5STZXeUp0WVd0bFFYSnlZWGxQWmxOMGNtbHVaM01pTENKc1pXNW5kR2dpTENKdFlXdGxVM1J5YVc1bklpd2lZWEp5SWl3aWJXRnJaVUZ5Y21GNVQyWk1aVzVuZEdnaUxDSnRZWEFpWFN3aWMyOTFjbU5sY3lJNld5SXVMaTh1TGk5emNtTXZkWFJwYkM5dFlXdGxRWEp5WVhsUFpsTjBjbWx1WjNNdWRITWlYU3dpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJRzFoYTJWQmNuSmhlVTltVEdWdVozUm9JR1p5YjIwZ1hDSXVMMjFoYTJWQmNuSmhlVTltVEdWdVozUm9YQ0k3WEhKY2JpOHFLbHh5WEc0Z0tpQkFjR0Z5WVcwZ2JHVnVaM1JvSUNCTVpXNW5kR2dnWENKNFhDSXVYSEpjYmlBcUlFQnlaWFIxY201eklDQWdJQ0FnSUVGdUlHRnljbUY1SUc5bUlITjBjbWx1WjNNZ2IyWWdiR1Z1WjNSb0lGd2llRndpTGx4eVhHNGdLaTljY2x4dVkyOXVjM1FnYldGclpVRnljbUY1VDJaVGRISnBibWR6SUQwZ0tGeHlYRzRnSUd4bGJtZDBhRG9nYm5WdFltVnlMRnh5WEc0Z0lHMWhhMlZUZEhKcGJtYzZJQ2dwSUQwK0lITjBjbWx1Wnl4Y2NseHVLVG9nYzNSeWFXNW5XMTBnUFQ0Z2UxeHlYRzRnSUdOdmJuTjBJR0Z5Y2lBOUlHMWhhMlZCY25KaGVVOW1UR1Z1WjNSb0tHeGxibWQwYUNrN1hISmNiaUFnY21WMGRYSnVJR0Z5Y2k1dFlYQW9LQ2tnUFQ0Z2JXRnJaVk4wY21sdVp5Z3BLVHRjY2x4dWZUdGNjbHh1WEhKY2JtVjRjRzl5ZENCa1pXWmhkV3gwSUcxaGEyVkJjbkpoZVU5bVUzUnlhVzVuY3p0Y2NseHVJbDBzSW0xaGNIQnBibWR6SWpvaU96czdPenM3TzBGQlFVRTdPenM3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRWxCUVUxQkxHdENRVUZyUWl4SFFVRkhMRk5CUVhKQ1FTeHJRa0ZCY1VJc1EwRkRla0pETEUxQlJIbENMRVZCUlhwQ1F5eFZRVVo1UWl4RlFVZGFPMFZCUTJJc1NVRkJUVU1zUjBGQlJ5eEhRVUZITEVsQlFVRkRMRFpDUVVGQkxFVkJRV3RDU0N4TlFVRnNRaXhEUVVGYU8wVkJRMEVzVDBGQlQwVXNSMEZCUnl4RFFVRkRSU3hIUVVGS0xFTkJRVkU3U1VGQlFTeFBRVUZOU0N4VlFVRlZMRVZCUVdoQ08wVkJRVUVzUTBGQlVpeERRVUZRTzBGQlEwUXNRMEZPUkRzN1pVRlJaVVlzYTBJaWZRPT0iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBMb3JlbUlwc3VtLCBsb3JlbUlwc3VtIH0gZnJvbSBcImxvcmVtLWlwc3VtXCI7XG5cbmxldCBhYm91dCA9IGZ1bmN0aW9uICgpe1xuICAgIFxuICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZXQgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGgxLmlubmVySFRNTCA9IFwiYWJvdXQgdXNcIjtcblxuICAgIGxldCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHAuaW5uZXJIVE1MID0gbG9yZW1JcHN1bSh7Y291bnQ6IDUwLCBmb3JtYXQ6IFwicGxhaW5cIiwgcGFyYWdyYXBoTG93ZXJCb3VuZDogMywgc2VudGVuY2VMb3dlckJvdW5kOiA0LCBzZW50ZW5jZVVwcGVyQm91bmQ6IDEwLCBzdWZmaXg6IFwiXFxuXCIsIHVuaXRzOiBcInNlbnRlbmNlc1wifSlcblxuICAgIGRpdi5hcHBlbmRDaGlsZChoMSk7XG4gICAgZGl2LmFwcGVuZENoaWxkKHApO1xuICAgIGxldCBjb250ZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICBjb250ZW50RGl2LmlubmVySFRNTCA9IFwiXCI7XG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChkaXYpO1xuICAgIFxufVxuXG5leHBvcnQgeyBhYm91dH0iLCJsZXQgY3JlYXRlQ29udGFjdCA9IGZ1bmN0aW9uKCl7XG4gICAgbGV0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIGlmKGNvbnRlbnREaXYpe1xuICAgICAgICBjb250ZW50RGl2LmlubmVySFRNTCA9IFwiXCI7XG4gICAgfVxuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsZXQgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgaDEuaW5uZXJIVE1MID0gXCJDb250YWN0IFVzXCI7XG4gICAgY29udGVudC5hcHBlbmQoaDEpO1xuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoY29udGVudCk7XG5cbn1cblxuZXhwb3J0IHtjcmVhdGVDb250YWN0fSIsImltcG9ydCBCdXJnZXIgZnJvbSAnLi9idXJnZXIuanBnJztcblxubGV0IGNyZWF0ZUhvbWVQYWdlID0gZnVuY3Rpb24gKCl7XG4gICAgbGV0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG4gICAgaWYoY29udGVudERpdil7XG4gICAgICAgIGNvbnRlbnREaXYuaW5uZXJIVE1MID0gXCJcIjtcbiAgICB9XG4gICAgbGV0IGxhbmRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsYW5kaW5nLmNsYXNzTGlzdC5hZGQoXCJsYW5kaW5nXCIpO1xuICAgIGxldCBidXJnZXJJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIGJ1cmdlckltYWdlLnNyYyA9IEJ1cmdlcjtcbiAgICBsYW5kaW5nLmFwcGVuZENoaWxkKGJ1cmdlckltYWdlKTtcbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGxhbmRpbmcpO1xufVxuXG5leHBvcnQge2NyZWF0ZUhvbWVQYWdlfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IGNyZWF0ZUhvbWVQYWdlIH0gZnJvbSAnLi9ob21lcGFnZSc7XG5pbXBvcnQgeyBhYm91dCB9IGZyb20gJy4vYWJvdXQnO1xuaW1wb3J0IHsgY3JlYXRlQ29udGFjdCB9IGZyb20gJy4vY29udGFjdCc7XG5cbmZ1bmN0aW9uIGNyZWF0ZUJhc2VIZWFkZXIoKSB7XG4gICAgbGV0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICAgIGxldCBuYXZiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcbiAgICBuYXZiYXIuY2xhc3NMaXN0LmFkZCgnbmF2YmFyJyk7XG4gICAgbGV0IGxpbmtzID0gWydob21lJywgJ2Fib3V0JywgJ2NvbnRhY3QgdXMnXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xuICAgICAgICB2YXIgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgbGkuaW5uZXJIVE1MID0gbGlua3NbaV07XG4gICAgICAgIGxpLnNldEF0dHJpYnV0ZSgnaWQnLGxpbmtzW2ldKTtcbiAgICAgICAgbmF2YmFyLmFwcGVuZENoaWxkKGxpKTtcbiAgICB9XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKG5hdmJhcik7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIFxuICAgIGxldCBjb250ZW50RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGVudERpdi5zZXRBdHRyaWJ1dGUoJ2lkJywnY29udGVudCcpXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250ZW50RGl2KTtcbn1cblxuZnVuY3Rpb24gY2xlYXJDb250ZW50KCl7XG4gICAgbGV0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIGNvbnRlbnREaXYuaW5uZXJIVE1MID0gXCJcIjtcbn1cbmZ1bmN0aW9uIGhvbWUoKXtcbiAgICBjbGVhckNvbnRlbnQoKTtcbiAgICBsZXQgY29udGVudERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgbGV0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBoMS5pbm5lckhUTUwgPSBcImhvbWVcIjtcbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGgxKTtcbn1cblxuXG5jcmVhdGVCYXNlSGVhZGVyKCk7XG5sZXQgaG9tZWJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaG9tZVwiKTtcbmhvbWVidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsY3JlYXRlSG9tZVBhZ2UpO1xubGV0IGFib3V0YnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhYm91dFwiKTtcbmFib3V0YnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGFib3V0KTtcbmxldCBjb250YWN0YnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhY3QgdXMnKTtcbmNvbnRhY3RidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGNyZWF0ZUNvbnRhY3QpO1xuY3JlYXRlSG9tZVBhZ2UoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
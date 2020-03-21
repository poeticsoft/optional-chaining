/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./node_modules/webpack-polyfill-injector/src/loader.js?{\"modules\":[\"./src/main.js\",\"./src/main.scss\"]}!./");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack-polyfill-injector/src/loader.js?{\"modules\":[\"./src/main.js\",\"./src/main.scss\"]}!./":
/*!*************************************************************************************************!*\
  !*** (webpack)-polyfill-injector/src/loader.js?{"modules":["./src/main.js","./src/main.scss"]} ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Webpack Polyfill Injector
function main() {
    __webpack_require__(/*! ./src/main.js */ "./src/main.js");
    __webpack_require__(/*! ./src/main.scss */ "./src/main.scss");
}
if (function() {
    return /* Array.from */ !("from"in Array&&function(){try{return Array.from({length:-Infinity}),!0}catch(r){return!1}}()
) ||
        /* Array.prototype.fill */ !("fill"in Array.prototype
) ||
        /* Array.prototype.find */ !("find"in Array.prototype
) ||
        /* Array.prototype.findIndex */ !("findIndex"in Array.prototype
) ||
        /* Array.prototype.includes */ !("includes"in Array.prototype
) ||
        /* Object.assign */ !("assign"in Object
) ||
        /* Object.entries */ !("entries"in Object
) ||
        /* Object.values */ !("values"in Object
) ||
        /* Promise */ !("Promise"in self
) ||
        /* String.prototype.startsWith */ !("startsWith"in String.prototype
) ||
        /* fetch */ !("fetch"in self
);
}.call(window)) {
    var js = document.createElement('script');
    js.src = "/polyfills.js";
    js.onload = main;
    js.onerror = function onError(message) {
        console.error('Could not load the polyfills: ' + message);
    };
    document.head.appendChild(js);
} else {
    main();
}

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

var _a$b, _a$b2;

var a = {
  b: {
    c: 'd'
  }
};
console.log(a === null || a === void 0 ? void 0 : (_a$b = a.b) === null || _a$b === void 0 ? void 0 : _a$b.c);
console.log(a === null || a === void 0 ? void 0 : (_a$b2 = a.b) === null || _a$b2 === void 0 ? void 0 : _a$b2.d);

/***/ }),

/***/ "./src/main.scss":
/*!***********************!*\
  !*** ./src/main.scss ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=main.js.map
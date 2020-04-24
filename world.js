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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/world.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/world.js":
/*!**********************!*\
  !*** ./src/world.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function Test() {\n  var entity = document.createElement(\"a-entity\");\n  entity.setAttribute(\"log\", \"message: mother of loelere\"); // entity.setAttribute(\"oscillator\", \"\");\n\n  return entity;\n}\n\nfunction Button() {\n  var entity = document.createElement(\"a-box\");\n  entity.setAttribute(\"haptics\", \"\"); // entity.setAttribute(\"visible\", true);\n  // entity.setAttribute(\"id\", \"test_box\");\n\n  entity.setAttribute(\"position\", \"-0.1 0.5 -1\");\n  entity.setAttribute(\"rotation\", \"0 0 0\");\n  entity.setAttribute(\"color\", \"#4CC3D9\"); // entity.setAttribute(\"height\", \"0.05\");\n  // entity.setAttribute(\"width\", \"0.1\");\n  // entity.setAttribute(\"depth\", \"0.1\");\n  // const template = `\n  //   <a-box\n  //     haptics\n  //     id=\"box_#1\"\n  //     height=\"0.05\"\n  //     width=\"0.1\"\n  //     depth=\"0.1\"\n  //     position=\"-0.1 0.5 -1\"\n  //     rotation=\"0 0 0\"\n  //     color=\"#4CC3D9\"\n  //   ></a-box>\n  // `;\n  // entity.innerHTML = template;\n\n  entity.addEventListener(\"raycaster-intersected\", function () {\n    entity.components.haptics.pulse(0.5, 200);\n    entity.setAttribute(\"color\", \"#FF0000\");\n    entity.setAttribute(\"oscillator\", \"\");\n  });\n  entity.addEventListener(\"raycaster-intersected-cleared\", function () {\n    entity.setAttribute(\"color\", \"#4CC3D9\");\n  });\n  return entity;\n}\n\nvar scene = document.querySelector(\"a-scene\");\nvar entities = [Test, Button];\nentities.forEach(function (entity) {\n  return scene.appendChild(entity());\n});\n\n//# sourceURL=webpack:///./src/world.js?");

/***/ })

/******/ });
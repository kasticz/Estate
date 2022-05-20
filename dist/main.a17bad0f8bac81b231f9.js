/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./styles/styles.sass":
/*!****************************!*\
  !*** ./styles/styles.sass ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./styles/styles.sass?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_styles_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/styles.sass */ \"./styles/styles.sass\");\n\r\ndocument.addEventListener(`DOMContentLoaded`,function(e){\r\nlet slider = document.querySelector(`.testimonials__sliderWrapper`)\r\nlet sliderItems = slider.querySelectorAll(`.testimonials__sliderItem`)\r\nlet arrowLeft = document.querySelector(`.circle_testimonials[data-left]`)\r\nlet arrowRight = document.querySelector(`.circle_testimonials[data-right]`)\r\n\r\nlet sliderPosition = 0;\r\nlet itemsVisible = 3;\r\nfunction scrollLeft(itemWidth,marginLeft){\r\n    if(sliderPosition >=0){                   \r\n        return\r\n    }\r\n    slider.style.transform = `translateX(${sliderPosition + itemWidth + marginLeft}px)` \r\n    sliderPosition += itemWidth + marginLeft   \r\n}\r\nfunction scrollRight(itemWidth,marginLeft){\r\n    if(sliderPosition <= -(sliderItems.length - itemsVisible) * itemWidth + marginLeft ){\r\n        return\r\n    }\r\n    slider.style.transform = `translateX(${sliderPosition - itemWidth - marginLeft }px)`\r\n    sliderPosition -= itemWidth + marginLeft \r\n}\r\nfunction scrollSlider(e){  \r\n    let itemWidth = parseInt(getComputedStyle(sliderItems[0]).width);\r\n    let marginLeft = parseInt(getComputedStyle(sliderItems[1]).marginLeft)\r\n    if(e.target.dataset.left){\r\n        scrollLeft(itemWidth,marginLeft)\r\n    }else{\r\n        scrollRight(itemWidth,marginLeft)\r\n    }\r\n}\r\nfunction scrollMobile(e){\r\n    let initialSliderPos = sliderPosition;\r\n    const debouncedScrollLeft = debounce(scrollLeft,50)\r\n    const debouncedScrollRight = debounce(scrollRight,50)\r\n    const debouncedTouchMove = debounce(onTouchMove,30)\r\n    let prevCoords = e.touches[0].clientX;\r\n    let itemWidth = parseInt(getComputedStyle(sliderItems[0]).width);\r\n    let marginLeft = parseInt(getComputedStyle(sliderItems[1]).marginLeft)\r\n    let firstTouchCoords = e.touches[0].clientX\r\n    function onTouchMove(e){\r\n        let currCoords = e.touches[0].clientX \r\n        let coordsDiff = currCoords - prevCoords;    \r\n        if(currCoords - firstTouchCoords > itemWidth / 2){           \r\n            sliderPosition = initialSliderPos;\r\n            initialSliderPos = null\r\n            e.target.removeEventListener(`touchmove`,debouncedTouchMove)\r\n            debouncedScrollLeft(itemWidth,marginLeft)            \r\n            return\r\n        }\r\n        if(firstTouchCoords -  currCoords > itemWidth / 2){\r\n            sliderPosition = initialSliderPos;\r\n            initialSliderPos = null;\r\n            e.target.removeEventListener(`touchmove`,debouncedTouchMove)\r\n            debouncedScrollRight(itemWidth,marginLeft)            \r\n            return\r\n        }  \r\n        sliderPosition += coordsDiff\r\n        slider.style.transform = `translateX(${sliderPosition}px)`;  \r\n        console.log(initialSliderPos)\r\n        prevCoords = currCoords;           \r\n    }\r\n    function onTouchEnd(e){\r\n        if(initialSliderPos != null){\r\n            slider.style.transform = `translateX(${initialSliderPos}px)`;\r\n        }        \r\n        e.target.removeEventListener(`touchmove`,debouncedTouchMove)\r\n        e.target.removeEventListener(`touchend`,onTouchEnd)\r\n        console.log(initialSliderPos)\r\n    }\r\n    e.target.addEventListener(`touchmove`,debouncedTouchMove)\r\n    e.target.addEventListener(`touchend`,onTouchEnd)\r\n}\r\nslider.addEventListener(`touchstart`,scrollMobile)\r\narrowLeft.addEventListener(`click`,scrollSlider)\r\narrowRight.addEventListener(`click`,scrollSlider)\r\nfunction debounce(func, wait, immediate) {\r\n    let timeout;  \r\n    return function executedFunction() {\r\n      const context = this;\r\n      const args = arguments;\r\n  \r\n      const later = function() {\r\n        timeout = null;\r\n        if (!immediate) func.apply(context, args);\r\n      };\r\n  \r\n      const callNow = immediate && !timeout;\r\n  \r\n      clearTimeout(timeout);\r\n  \r\n      timeout = setTimeout(later, wait);\r\n  \r\n      if (callNow) func.apply(context, args);\r\n    };\r\n  };\r\n})\r\n\r\n\n\n//# sourceURL=webpack:///./index.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;
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

/***/ "../node_modules/animate.css/animate.css":
/*!***********************************************!*\
  !*** ../node_modules/animate.css/animate.css ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///../node_modules/animate.css/animate.css?");

/***/ }),

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_styles_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/styles.sass */ \"./styles/styles.sass\");\n/* harmony import */ var animate_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! animate.css */ \"../node_modules/animate.css/animate.css\");\n\r\n\r\ndocument.addEventListener(`DOMContentLoaded`,function(e){\r\nlet slider = document.querySelector(`.testimonials__sliderWrapper`)\r\nlet sliderItems = slider.querySelectorAll(`.testimonials__sliderItem`)\r\nlet arrowLeft = document.querySelector(`.circle_testimonials[data-left]`)\r\nlet arrowRight = document.querySelector(`.circle_testimonials[data-right]`)\r\n//   --------------------------------------SLIDER------------------------------------------\r\nlet sliderPosition = 0;\r\nlet itemsVisible = window.innerWidth > 700 ? 2 : 1;\r\nfunction highlightDot(){\r\n    let dots = document.querySelectorAll(`.testimonials__sliderDot`)\r\n    let width = slider.offsetWidth / sliderItems.length\r\n    let currElem = Math.floor(-sliderPosition / width)\r\n    dots.forEach(item=> item.style.background = \"#7c7878\")\r\n    dots[currElem].style.background = \"black\"\r\n\r\n}\r\nfunction scrollLeft(itemWidth,marginLeft){\r\n    if(sliderPosition >=0){                   \r\n        return\r\n    }\r\n    slider.style.transform = `translateX(${sliderPosition + itemWidth + marginLeft}px)` \r\n    sliderPosition += itemWidth + marginLeft\r\n    highlightDot()   \r\n}\r\nfunction scrollRight(itemWidth,marginLeft){\r\n    if(sliderPosition <= -(sliderItems.length - itemsVisible) * itemWidth - marginLeft ){\r\n        return\r\n    }\r\n    slider.style.transform = `translateX(${sliderPosition - itemWidth - marginLeft }px)`\r\n    sliderPosition -= itemWidth + marginLeft\r\n    highlightDot()     \r\n}\r\nfunction scrollSlider(e){  \r\n    let itemWidth = parseInt(getComputedStyle(sliderItems[0]).width);\r\n    let marginLeft = parseInt(getComputedStyle(sliderItems[1]).marginLeft)\r\n    if(e.target.dataset.left){\r\n        scrollLeft(itemWidth,marginLeft)\r\n    }else{\r\n        scrollRight(itemWidth,marginLeft)\r\n    }\r\n}\r\nfunction scrollMobile(e){\r\n    // let initialSliderPos = sliderPosition;\r\n    const debouncedScrollLeft = debounce(scrollLeft,30)\r\n    const debouncedScrollRight = debounce(scrollRight,30)\r\n    const debouncedTouchMove = debounce(onTouchMove,1)\r\n    let prevCoords = e.touches[0].clientX;\r\n    let itemWidth = parseInt(getComputedStyle(sliderItems[0]).width);\r\n    let marginLeft = parseInt(getComputedStyle(sliderItems[1]).marginLeft)\r\n    let firstTouchCoords = e.touches[0].clientX\r\n    function onTouchMove(e){\r\n        let currCoords = e.touches[0].clientX \r\n        let coordsDiff = currCoords - prevCoords; \r\n        if(currCoords - firstTouchCoords > itemWidth / 3){ \r\n            // sliderPosition = initialSliderPos; \r\n            // initialSliderPos = null                \r\n            slider.removeEventListener(`touchmove`,debouncedTouchMove)             \r\n            debouncedScrollLeft(itemWidth,marginLeft)            \r\n            return\r\n        }\r\n        if(firstTouchCoords -  currCoords > itemWidth / 3){\r\n            // sliderPosition = initialSliderPos;\r\n            // initialSliderPos = null\r\n            slider.removeEventListener(`touchmove`,debouncedTouchMove)       \r\n            debouncedScrollRight(itemWidth,marginLeft)            \r\n            return\r\n        } \r\n        // slider.style.transform = `translateX(${sliderPosition - coordsDiff}px)`\r\n        // sliderPosition += coordsDiff\r\n        // prevCoords = currCoords;           \r\n    }\r\n    function onTouchEnd(e){\r\n        // if(!initialSliderPos){\r\n        //     sliderPosition = initialSliderPos\r\n        //     slider.style.transform = `translateX(${sliderPosition})`        \r\n        // }\r\n\r\n        slider.removeEventListener(`touchmove`,debouncedTouchMove)     \r\n    }\r\n    slider.addEventListener(`touchmove`,debouncedTouchMove)\r\n    slider.addEventListener(`touchend`,onTouchEnd)\r\n}\r\nslider.addEventListener(`touchstart`,scrollMobile)\r\narrowLeft.addEventListener(`click`,scrollSlider)\r\narrowRight.addEventListener(`click`,scrollSlider)\r\nfunction debounce(func, wait, immediate) {\r\n    let timeout;  \r\n    return function executedFunction() {\r\n      const context = this;\r\n      const args = arguments;\r\n  \r\n      const later = function() {\r\n        timeout = null;\r\n        if (!immediate) func.apply(context, args);\r\n      };\r\n  \r\n      const callNow = immediate && !timeout;\r\n  \r\n      clearTimeout(timeout);\r\n  \r\n      timeout = setTimeout(later, wait);\r\n  \r\n      if (callNow) func.apply(context, args);\r\n    };\r\n  }\r\n//   --------------------------------------SLIDER------------------------------------------\r\n\r\n\r\n\r\n//  --------------------------------------------STARS---------------------------------------------\r\n\r\nlet blackStar = document.createElement(`img`)\r\nblackStar.src = \"./assets/images/starBlack.svg\"\r\nblackStar.style.width = \"1.125rem\"\r\nblackStar.style.height = \"1.125rem\"\r\n\r\nlet whiteStar = document.createElement(`img`)\r\nwhiteStar.src = \"./assets/images/starWhite.svg\"\r\nwhiteStar.style.width = \"1.125rem\"\r\nwhiteStar.style.height = \"1.125rem\"\r\nsliderItems.forEach((item)=>{\r\n    let blackStarsNum = item.dataset.stars\r\n    if(blackStarsNum < 5){\r\n        for(let i = 0; i < 5 - blackStarsNum;i++){\r\n            item.prepend(whiteStar.cloneNode())\r\n        }\r\n    }\r\n    for(let i=0;i < blackStarsNum;i++){\r\n        item.prepend(blackStar.cloneNode())                \r\n    }\r\n\r\n})\r\n//  --------------------------------------------STARS---------------------------------------------\r\n\r\n//  --------------------------------------------MODAL---------------------------------------------\r\nlet modalButton = document.querySelector(`.showModal`)\r\nlet overlay = document.querySelector(`.overlay`)\r\nlet modal = document.querySelector(`.modal`)\r\nlet close = modal.querySelector(`.modal__close`)\r\nlet form = modal.querySelector(`.form_modal`)\r\nlet formInputs = form.querySelectorAll(`input`)\r\nlet nameInput = modal.querySelector(`[name=\"name\"]`)\r\nlet telephoneInput = modal.querySelector(`[name=\"telephone\"]`)\r\nlet emailInput = modal.querySelector(`[name=\"email\"]`)\r\nlet submitButton = modal.querySelector(`.modal__submit`)\r\n\r\n\r\nfunction modalClose(e){\r\n    modal.style.display = `none`\r\n    overlay.style.display = `none`\r\n}\r\n\r\n\r\nfunction onModalClick(e){\r\n    formInputs.forEach(item=> item.value = \"\")\r\n   modal.style.display = `flex`\r\n    overlay.style.display = `block`\r\n    document.querySelector(`.modal__close`).addEventListener(`click`,modalClose)\r\n    overlay.addEventListener(`click`,modalClose)\r\n}\r\n\r\n\r\nfunction validate(e){\r\n\r\n    e.preventDefault()   \r\n\r\n\r\n    let alph = `abcdefghijklmnopqrstuvwxyzабвгдеёжзийклмнопрстуфхцчшщъыьэя`\r\n    let nums = [`0`,`1`,`2`,`3`,`4`,`5`,`6`,`7`,`8`,`9`]\r\n    let telephoneValue = telephoneInput.value\r\n    let emailValue = emailInput.value\r\n    let errors = form.querySelectorAll(\".form__error\")\r\n\r\n\r\n    errors.forEach(item=>item.remove()) \r\n\r\n\r\n\r\n        for(let letter of nameInput.value){\r\n            if(!alph.includes(letter.toLowerCase())){    \r\n                createError(\"Name should only contain letters\",nameInput)   \r\n                break; \r\n            }            \r\n        }  \r\n\r\n    \r\n\r\n\r\n    if(telephoneValue.length > 0){\r\n        for(let num of telephoneValue.split(``)){\r\n            if(!nums.includes(num)){   \r\n                createError(\"Telephone number should only contain numbers.\",telephoneInput) \r\n                break;      \r\n            }            \r\n        }  \r\n        if(telephoneValue.length > 12 || telephoneValue.length < 6){      \r\n            createError(\"This telephone number is too short\",telephoneInput)\r\n      }  \r\n    }\r\n\r\n\r\n    if(emailValue.length > 0){\r\n        let at = emailValue.indexOf(\"@\")\r\n        let dot = emailValue.indexOf(\".\")            \r\n        if((at == -1 || dot == -1) || dot == emailValue.length - 1 || at == emailValue.length - 1 || emailValue.length < 6){\r\n            createError(`This email is invalid`,emailInput)               \r\n        }\r\n    }\r\n\r\n\r\n    if(!nameInput.value || !telephoneValue || !emailValue){\r\n        createError(\"Please, fill in your personal information\",emailInput)\r\n    }\r\n\r\n\r\n    if(!form.querySelector(`.form__error`)){\r\n        let prevModal = modal.innerHTML\r\n        let thankYou = document.createElement(`div`)\r\n        thankYou.classList.add(\"thankYou\")\r\n        thankYou.textContent = \"Thank You! We will contact you soon\"\r\n        modal.append(thankYou)\r\n        setTimeout(() => {\r\n            modalClose() \r\n            thankYou.remove()           \r\n        }, 2500);\r\n    }\r\n\r\n\r\n    function createError(errorText,element){\r\n        let error = document.createElement('div')\r\n        error.classList.add('form__error')\r\n        error.textContent = errorText\r\n        element.insertAdjacentHTML('afterend',error.outerHTML)    \r\n    }\r\n\r\n\r\n}\r\n\r\n\r\nmodalButton.addEventListener(`click`,onModalClick)\r\nsubmitButton.addEventListener(`click`,validate)\r\n//  --------------------------------------------Modal---------------------------------------------\r\n\r\n\r\n// --------------------------------------------SCROLL---------------------------------------------\r\nlet pageUp = document.querySelector(\".pageUp\")\r\npageUp.addEventListener(`mouseover`,function(e){\r\n    pageUp.style.transform = \"translateY(-6px)\"\r\n})\r\npageUp.addEventListener(`mouseleave`,function(e){\r\n    pageUp.style.transform = \"translateY(6px)\"\r\n})\r\npageUp.addEventListener(`click`,function(e){\r\n    window.scrollTo(0,0)\r\n})\r\n\r\n\r\n// --------------------------------------------SCROLL---------------------------------------------\r\n\r\n\r\n\r\n\r\n// --------------------------------------------Requirements---------------------------------------------\r\n\r\nlet descrs = document.querySelectorAll(`.requirements__descrWrapper`)\r\nlet reqImg = document.querySelector(`.requirements__img`)\r\n\r\ndescrs.forEach((item)=>{\r\n    item.addEventListener(`click`,function(e){\r\n        reqImg.src = item.dataset.img\r\n    })\r\n})\r\n\r\n\r\n\r\n\r\n// --------------------------------------------Requirements---------------------------------------------\r\n\r\n// --------------------------------------------Animation&lazyLoad---------------------------------------------\r\n\r\nlet sections = document.querySelectorAll(\"[data-section]\")\r\nlet imgs = document.querySelectorAll(\"img\");\r\nlet animHeight = window.innerWidth > 1200 ? \"31.25rem\": window.innerWidth > 700 ? \"26rem\": \"20rem\"\r\n\r\nfunction getTopCoord(elem){\r\n    return elem.getBoundingClientRect().top - window.innerHeight\r\n}\r\n\r\nfunction animateSections(e){\r\n    sections.forEach((item)=>{\r\n        let top = getTopCoord(item)\r\n        if(top < 200){\r\n            item.style.visibility = \"visible\"\r\n            item.style.transform = \"translateY(0)\"\r\n        }\r\n    })\r\n}\r\nfunction lazyLoadImgs(e){\r\n    imgs.forEach((item)=>{        \r\n        if(item.getAttribute(\"src\") == \"./assets/images/imgPlaceholder.png\"){\r\n            let top = getTopCoord(item)\r\n            if(top < 500){\r\n                item.src = item.dataset.imgsrc\r\n            }\r\n        }\r\n    })\r\n}\r\nif(window.pageYOffset == 0){\r\n    sections.forEach((item)=>{\r\n        item.style.transform = `translateY(${animHeight})`\r\n        item.style.transition = \"2s all\"\r\n    })\r\n    document.addEventListener(`scroll`,debounce(animateSections,10))    \r\n}else{\r\n    sections.forEach((item)=>{\r\n        item.style.visibility = \"visible\"\r\n    })\r\n}\r\ndocument.addEventListener(`scroll`,debounce(lazyLoadImgs,10))\r\nlazyLoadImgs()\r\n})\r\n\r\n\n\n//# sourceURL=webpack:///./index.js?");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0,
/******/ 			"vendors-node_modules_animate_css_animate_css": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_animate_css_animate_css"], () => (__webpack_require__("./index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
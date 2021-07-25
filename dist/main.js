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

/***/ "./src/aboutTab.js":
/*!*************************!*\
  !*** ./src/aboutTab.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst aboutTab = () => {\n    const main = document.getElementById(\"main\");\n\n    const aboutHeader = document.createElement(\"h2\");\n    aboutHeader.textContent = \"About\";\n\n    const aboutInfo = document.createElement(\"p\");\n    aboutInfo.textContent = \"We started Jen & Berry's with one mission: create the best ice cream on the planet. Our ice cream uses milk from happy, grass-fed cows in Wisconsin.\"\n\n    const hoursHeader = document.createElement(\"h2\");\n    hoursHeader.textContent = \"Hours\";\n\n    let hours = [\"Monday-Friday: 10:00 am to 5:00 pm\", \"Saturday: 10:00 am to 8:00pm\", \"Sunday: Closed\"];\n    const hoursInfo = document.createElement(\"ul\");\n    hours.forEach((hour) => {\n        const li = document.createElement(\"li\");\n        li.textContent = hour;\n        hoursInfo.append(li);\n    });\n\n\n    main.append(aboutHeader, aboutInfo, hoursHeader, hoursInfo);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (aboutTab);\n\n//# sourceURL=webpack://restaurant-page/./src/aboutTab.js?");

/***/ }),

/***/ "./src/contactTab.js":
/*!***************************!*\
  !*** ./src/contactTab.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst contactTab = () => {\n    let contactHeader = document.createElement(\"h2\");\n    contactHeader.textContent = \"Contact\";\n\n    const contact1 = document.createElement(\"h3\");\n    contact1.textContent = \"Jen\";\n\n    const c1Info = document.createElement(\"ul\");\n    c1Info.innerHTML = \"<li>Jen</li><li>Phone: (123) 456-7890</li><li>Email: jen@icecream.com</li>\";\n\n    const c2Info = document.createElement(\"ul\");\n    c2Info.innerHTML = \"<li>Berry</li><li>Phone: (321) 654-0987</li><li>Email: berry@icecream.com</li>\";\n\n    const contact2 = document.createElement(\"h3\");\n    contact2.textContent = \"Berry\";\n\n    main.append(contactHeader, contact1, c1Info, contact2, c2Info);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactTab); \n\n//# sourceURL=webpack://restaurant-page/./src/contactTab.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _aboutTab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aboutTab */ \"./src/aboutTab.js\");\n/* harmony import */ var _menuTab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menuTab */ \"./src/menuTab.js\");\n/* harmony import */ var _contactTab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contactTab */ \"./src/contactTab.js\");\n/* harmony import */ var _pageLoad__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pageLoad */ \"./src/pageLoad.js\");\n\n\n\n\n\n(0,_pageLoad__WEBPACK_IMPORTED_MODULE_3__.default)();\n(0,_aboutTab__WEBPACK_IMPORTED_MODULE_0__.default)();\n\nconst about = document.getElementById(\"about\");\nconst menu = document.getElementById(\"menu\");\nconst contact = document.getElementById(\"contact\");\n\nnav.addEventListener(\"click\", (e) => {\n    if(e.target.className === \"hidden\") {\n\n        about.className = \"hidden\";\n        menu.className = \"hidden\";\n        contact.className = \"hidden\";\n        e.target.className = \"active\";\n\n        clearMain();\n\n        if (e.target.textContent === \"About\") {\n            (0,_aboutTab__WEBPACK_IMPORTED_MODULE_0__.default)();\n        }\n        if (e.target.textContent === \"Menu\") {\n            (0,_menuTab__WEBPACK_IMPORTED_MODULE_1__.default)();\n        }\n        if (e.target.textContent === \"Contact\") {\n            (0,_contactTab__WEBPACK_IMPORTED_MODULE_2__.default)();\n        }\n    }\n});\n\nconst clearMain = () => {\n    document.getElementById(\"main\").innerHTML = \"\";\n};\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menuTab.js":
/*!************************!*\
  !*** ./src/menuTab.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menuTab = () => {\n    const main = document.getElementById(\"main\");\n    const menu = document.createElement(\"h2\");\n    menu.textContent = \"Menu\";\n\n    main.append(menu);\n\n    let name = [\"Half Baked\", \"Cherry Garcia\", \"Chocolate Fudge Brownie\"];\n    let pic = [\"half-baked.webp\",\"cherry-garcia.webp\",\"cfb.webp\"];\n\n    for (let i = 0; i < 3; i++) {\n        const iceCream = document.createElement(\"h3\");\n        iceCream.textContent = name[i];\n        const img = document.createElement(\"img\");\n        img.src = pic[i];\n        main.append(iceCream, img);\n    }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuTab);\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/menuTab.js?");

/***/ }),

/***/ "./src/pageLoad.js":
/*!*************************!*\
  !*** ./src/pageLoad.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst pageLoad = () => {\n    const content = document.querySelector(\"#content\");\n\n    const name = document.createElement(\"h1\");\n    name.id = \"name\";\n    name.textContent = \"Jen & Berry's\"\n\n    const nav = document.createElement(\"div\");\n    nav.id = \"nav\";\n\n    const about = document.createElement(\"span\");\n    about.id = \"about\";\n    about.className = \"active\";\n    about.textContent = \"About\"; \n    \n\n    const menu = document.createElement(\"span\");\n    menu.id = \"menu\";\n    menu.className = \"hidden\";\n    menu.innerText = \"Menu\";\n\n    const contact = document.createElement(\"span\");\n    contact.id = \"contact\";\n    contact.className = \"hidden\";\n    contact.innerText = \"Contact\";\n\n    const main = document.createElement(\"div\");\n    main.id = \"main\";\n\n    nav.append(about, menu, contact)\n    content.append(name, nav, main);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pageLoad);\n\n//# sourceURL=webpack://restaurant-page/./src/pageLoad.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
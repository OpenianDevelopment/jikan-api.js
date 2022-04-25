/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 571:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
__webpack_require__(571);
for (const item of document.querySelectorAll('.js-category-title:not([data-id="root"])')) {
    item.addEventListener('click', () => {
        const id = item.dataset.id || '';
        const list = document.querySelector(`.js-category-list[data-id="${id}"]`);
        const icon = document.querySelector(`.js-category-icon[data-id="${id}"]`);
        list === null || list === void 0 ? void 0 : list.classList.toggle('_open');
        icon === null || icon === void 0 ? void 0 : icon.classList.toggle('fa-folder-open');
    });
}
(() => {
    var _a, _b;
    const pathname = window.location.pathname.replace('/docs', '');
    let activeElement = document.querySelector(`.js-category-link[data-id="${pathname}"]`);
    if (!activeElement) {
        return;
    }
    activeElement.classList.add('_active');
    // eslint-disable-next-line no-constant-condition
    while (true) {
        const parent = activeElement === null || activeElement === void 0 ? void 0 : activeElement.closest('.js-category-list');
        if (!parent) {
            break;
        }
        parent.classList.add('_open');
        (_b = (_a = parent.parentNode) === null || _a === void 0 ? void 0 : _a.querySelector('.js-category-icon')) === null || _b === void 0 ? void 0 : _b.classList.add('category__folder--open');
        activeElement = parent.parentNode;
    }
})();

})();

/******/ })()
;
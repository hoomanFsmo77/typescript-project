"use strict";
self["webpackHotUpdatetemplate"]("main",{

/***/ "./src/components/form.ts":
/*!********************************!*\
  !*** ./src/components/form.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
var form = document.querySelector('form');
var taskInput = document.querySelector('#task');
window.addEventListener('load', function () {
  taskInput.value = '';
});
form.addEventListener('submit', function (e) {
  e.preventDefault();
  var task = taskInput.value.trim();
  if (task.length > 0) {
    var todo = {
      id: Math.floor(Math.random() * 100),
      value: task
    };
  } else {
    form.classList.add('was-validated');
  }
});


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/main.scss */ "./src/style/main.scss");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.esm.js");
/* harmony import */ var _components_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/form */ "./src/components/form.ts");




/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("0c586013e94e6a2e8048")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.daca528176f648d834df.hot-update.js.map
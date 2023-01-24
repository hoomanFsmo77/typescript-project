"use strict";
self["webpackHotUpdatetemplate"]("main",{

/***/ "./src/components/UI.ts":
/*!******************************!*\
  !*** ./src/components/UI.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ui": () => (/* binding */ ui)
/* harmony export */ });
/* harmony import */ var _Storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Storage */ "./src/components/Storage.ts");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

function ShowInitialTodos(prop) {
  var ui = new prop();
  ui.showTodo(_Storage__WEBPACK_IMPORTED_MODULE_0__.storage.getItem);
}
var UI = function () {
  function UI() {
    this.todoContainer = document.querySelector('#todo-list');
  }
  UI.prototype.showTodo = function (data) {
    var _a, _b;
    (_a = this.todoContainer) === null || _a === void 0 ? void 0 : _a.innerHTML = '';
    var target = data.map(function (item) {
      return "<tr>\n                        <th scope=\"row\">".concat(item.id, "</th>\n                        <td>").concat(item.value, "</td>\n                        <td><input type=\"checkbox\"  class=\"form-check-input\"></td>\n                        <td>\n                            <button class=\"btn btn-sm btn-outline-danger\">delete</button>\n                        </td>\n                    </tr>");
    }).join('');
    (_b = this.todoContainer) === null || _b === void 0 ? void 0 : _b.insertAdjacentHTML('beforeend', target);
  };
  UI = __decorate([ShowInitialTodos], UI);
  return UI;
}();
var ui = new UI();


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("20e22400dc18d0bb84a2")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.20acd5821c56d7fe84d6.hot-update.js.map
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
/* harmony import */ var _Todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Todo */ "./src/components/Todo.ts");
/* harmony import */ var _Storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Storage */ "./src/components/Storage.ts");
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
var _a;


function ShowInitialTodos(prop) {
  var ui = new prop();
  ui.showTodo(_Storage__WEBPACK_IMPORTED_MODULE_1__.storage.getItem);
}
var UI = function () {
  function UI() {
    var _this = this;
    this.todoContainer = document.querySelector('#todo-list');
    this.todoListEvents = function (e) {
      if (e.target.classList.contains('btn-outline-danger')) {
        _this.removeTodo(e);
      } else if (e.target.classList.contains('form-check-input')) {
        _this.changeStatus(e);
      }
    };
    this.removeTodo = function (e) {
      _this.removeFromStorage(e.target.dataset.id);
      e.target.parentElement.parentElement.remove();
    };
    this.changeStatus = function (e) {
      var index = _Todo__WEBPACK_IMPORTED_MODULE_0__.todoLists.findIndex(function (item) {
        return item.id === Number(e.target.dataset.id);
      });
      if (e.target.dataset.status === '1') {
        _Todo__WEBPACK_IMPORTED_MODULE_0__.todoLists[index].status = false;
        e.target.dataset.status = '0';
      } else {
        _Todo__WEBPACK_IMPORTED_MODULE_0__.todoLists[index].status = true;
        e.target.dataset.status = '1';
      }
      _Storage__WEBPACK_IMPORTED_MODULE_1__.storage.setItem(_Todo__WEBPACK_IMPORTED_MODULE_0__.todoLists);
    };
  }
  UI.prototype.showTodo = function (data) {
    var _a, _b;
    (_a = this.todoContainer) === null || _a === void 0 ? void 0 : _a.innerHTML = '';
    var target = data.map(function (item) {
      return "<tr>\n                        <th scope=\"row\">".concat(item.id, "</th>\n                        <td>").concat(item.value, "</td>\n                        <td><input type=\"checkbox\" id=\"check\"  data-status=\"").concat(item.status ? 1 : 0, "\" data-id=\"").concat(item.id, "\"  class=\"form-check-input\"></td>\n                        <td>\n                            <button data-id=\"").concat(item.id, "\" class=\"btn btn-sm btn-outline-danger\">delete</button>\n                        </td>\n                    </tr>");
    }).join('');
    (_b = this.todoContainer) === null || _b === void 0 ? void 0 : _b.insertAdjacentHTML('beforeend', target);
    document.querySelectorAll('#check').forEach(function (item, index) {
      if (data[index].status) {
        item.setAttribute('checked', '');
      } else {
        item.removeAttribute('checked');
      }
    });
  };
  UI.prototype.removeFromStorage = function (id) {
    var targetIndex = _Todo__WEBPACK_IMPORTED_MODULE_0__.todoLists.findIndex(function (item) {
      return item.id === Number(id);
    });
    if (targetIndex > -1) {
      _Todo__WEBPACK_IMPORTED_MODULE_0__.todoLists.splice(targetIndex, 1);
      _Storage__WEBPACK_IMPORTED_MODULE_1__.storage.setItem(_Todo__WEBPACK_IMPORTED_MODULE_0__.todoLists);
    }
  };
  UI = __decorate([ShowInitialTodos], UI);
  return UI;
}();
var ui = new UI();
(_a = document.querySelector('#todo-list')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', ui.todoListEvents);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("9427e9423eba4084eeaa")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.571797499d6a4aabf596.hot-update.js.map
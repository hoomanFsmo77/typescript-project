self["webpackHotUpdatetemplate"]("main",{

/***/ "./src/components/Todo.ts":
/*!********************************!*\
  !*** ./src/components/Todo.ts ***!
  \********************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./UI */ "./src/components/UI.ts"), __webpack_require__(/*! ./Storage */ "./src/components/Storage.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, UI_1, Storage_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));
  exports.todoLists = exports.Todo = void 0;
  var todoLists = Storage_1.storage.getItem;
  exports.todoLists = todoLists;
  var Todo = function () {
    function Todo(todo) {
      this.id = todo.id;
      this.value = todo.value;
      this.status = todo.status;
    }
    Todo.prototype.add = function (todo) {
      todoLists.push(todo);
      UI_1.ui.showTodo(todoLists);
      Storage_1.storage.setItem(todoLists);
    };
    return Todo;
  }();
  exports.Todo = Todo;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("dea45a73b21d413d793d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.0cb2644d8fd4c671f821.hot-update.js.map
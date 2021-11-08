"use strict";
(self["webpackChunkvue_rt_style_kit_pages"] = self["webpackChunkvue_rt_style_kit_pages"] || []).push([["src_atoms_components_Hint_HintStore_js"],{

/***/ "./src/atoms/components/Hint/HintStore.js":
/*!************************************************!*\
  !*** ./src/atoms/components/Hint/HintStore.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hintStore": () => (/* binding */ hintStore)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var hints = {};
var activeHint = {};
var watchers = {};

var initStore = function initStore(uid, textContent) {
  hints[uid] = textContent;
};

var setActive = function setActive(uid, coords, hovered) {
  if (activeHint.id === uid && activeHint.hovered === hovered) return;
  activeHint.id = uid;
  activeHint.coords = coords;
  activeHint.hovered = hovered;
  runWatchers();
};

var getHintData = function getHintData() {
  return _objectSpread({
    text: hints[activeHint.id]
  }, activeHint);
};

var addWatcher = function addWatcher(id, fn) {
  watchers[id] = fn;
};

var runWatchers = function runWatchers() {
  Object.keys(watchers).forEach(function (id) {
    watchers[id]();
  });
};

var hintStore = vue__WEBPACK_IMPORTED_MODULE_0__["default"].observable({
  initStore: initStore,
  setActive: setActive,
  getHintData: getHintData,
  addWatcher: addWatcher
});

/***/ })

}]);
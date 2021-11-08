"use strict";
(self["webpackChunkvue_rt_style_kit_pages"] = self["webpackChunkvue_rt_style_kit_pages"] || []).push([["src_atoms_components_Annotation_AnnotationStore_js"],{

/***/ "./src/atoms/components/Annotation/AnnotationStore.js":
/*!************************************************************!*\
  !*** ./src/atoms/components/Annotation/AnnotationStore.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnnotationStore": () => (/* binding */ AnnotationStore)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");

var annotations = [];
var activeAnnotationID = null;
var watchers = {};

var initStore = function initStore(uid, isOpened) {
  annotations[uid] = {
    isOpened: isOpened
  };
};

var setActive = function setActive(uid) {
  if (activeAnnotationID === uid) return;
  activeAnnotationID = uid;
  runWatchers();
};

var getActive = function getActive() {
  return activeAnnotationID;
};

var addWatcher = function addWatcher(id, fn) {
  if (annotations[id]) {
    watchers[id] = fn;
  }
};

var removeWatcher = function removeWatcher(id) {
  delete watchers[id];
};

var clearStore = function clearStore(id) {
  delete annotations[id];
};

var runWatchers = function runWatchers() {
  Object.keys(watchers).forEach(function (id) {
    watchers[id]();
  });
};

var AnnotationStore = vue__WEBPACK_IMPORTED_MODULE_0__["default"].observable({
  initStore: initStore,
  setActive: setActive,
  addWatcher: addWatcher,
  getActive: getActive,
  removeWatcher: removeWatcher,
  clearStore: clearStore
});

/***/ })

}]);
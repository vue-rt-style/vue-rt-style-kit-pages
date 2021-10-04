"use strict";
(self["webpackChunkvue_rt_style_kit_pages"] = self["webpackChunkvue_rt_style_kit_pages"] || []).push([["src_molecules_components_mixins_normalizeVariable_js"],{

/***/ "./src/molecules/components/mixins/normalizeVariable.js":
/*!**************************************************************!*\
  !*** ./src/molecules/components/mixins/normalizeVariable.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  methods: {
    normalizeSize: function normalizeSize(size) {
      if (typeof size === 'number') {
        return size + 'px';
      }

      if (typeof size === 'string') {
        return size;
      }

      return size;
    }
  }
});

/***/ })

}]);
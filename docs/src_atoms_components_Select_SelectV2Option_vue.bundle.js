"use strict";
(self["webpackChunkvue_rt_style_kit_pages"] = self["webpackChunkvue_rt_style_kit_pages"] || []).push([["src_atoms_components_Select_SelectV2Option_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/atoms/components/Select/SelectV2Option.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/atoms/components/Select/SelectV2Option.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SelectStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SelectStore */ "./src/atoms/components/Select/SelectStore.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "RtSelectV2Option",
  props: {
    selectName: {
      type: String,
      "default": ''
    },
    value: {
      type: String,
      "default": ''
    },
    label: {
      type: String,
      "default": ''
    },
    "default": {
      type: Boolean,
      "default": false
    },
    sublabel: {
      type: String,
      "default": ''
    },
    selected: {
      type: Boolean,
      "default": false
    }
  },
  data: function data() {
    return {};
  },
  computed: {},
  mounted: function mounted() {
    var label;

    if (this.label) {
      label = this.label;
    } else {
      var _this$$slots$default$;

      if (((_this$$slots$default$ = this.$slots["default"][0].text) === null || _this$$slots$default$ === void 0 ? void 0 : _this$$slots$default$.length) > 0) {
        label = this.$slots["default"][0].text;
      }
    }

    var data = {
      value: this.value,
      label: label
    };

    if (this.sublabel.length > 0) {
      data.sublabel = this.sublabel;
    }

    _SelectStore__WEBPACK_IMPORTED_MODULE_0__.SelectStore.setSelectorOption(this.selectName, data);

    if (this.selected) {
      _SelectStore__WEBPACK_IMPORTED_MODULE_0__.SelectStore.setActiveValue(this.selectName, this.value);
    }

    if (this["default"]) {
      _SelectStore__WEBPACK_IMPORTED_MODULE_0__.SelectStore.setDefaultValue(this.selectName, {
        value: this.value,
        label: label
      });
    }
  },
  render: function render(h) {
    return null;
  }
});

/***/ }),

/***/ "./src/atoms/components/Select/SelectV2Option.vue":
/*!********************************************************!*\
  !*** ./src/atoms/components/Select/SelectV2Option.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SelectV2Option_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SelectV2Option.vue?vue&type=script&lang=js& */ "./src/atoms/components/Select/SelectV2Option.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns
;



/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _SelectV2Option_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  ,true
)

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./src/atoms/components/Select/SelectV2Option.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./src/atoms/components/Select/SelectV2Option.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectV2Option_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SelectV2Option.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/atoms/components/Select/SelectV2Option.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectV2Option_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ })

}]);
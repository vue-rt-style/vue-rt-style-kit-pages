"use strict";
(self["webpackChunkvue_rt_style_kit_pages"] = self["webpackChunkvue_rt_style_kit_pages"] || []).push([["src_example-pages_components_group_CarouselV2--demo_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/example-pages/components/group/CarouselV2--demo.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/example-pages/components/group/CarouselV2--demo.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vue_rt_style_kit_molecules_local_components_CarouselV3_docs_index_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue-rt-style-kit-molecules-local/components/CarouselV3/docs/index.json */ "./src/molecules/components/CarouselV3/docs/index.json");
/* harmony import */ var _componentsList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../componentsList */ "./src/example-pages/componentsList.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
 // import docEvents from '@vue-rt-style-kit-molecules-local/components/CarouselV2/docs/events.json'

var defaultLoaderType = 'spinner';
var skeletonLoader = {
  type: 'skeleton',
  count: 4,
  rows: 2
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      num: 1,
      docProps: _vue_rt_style_kit_molecules_local_components_CarouselV3_docs_index_json__WEBPACK_IMPORTED_MODULE_0__,
      // docEvents,
      activeIndex: 0,
      slidesList: [],
      colors: ["black", "black085", "black085-no-opacity", "purple", "purple-button-hover", "purple-button-active", "purple01", "purple005", "purple-low", "purple-high", "purple-night", "white", "red", "red-low", "red-high", "gray", "dark-blue", "dark-blue-low", "dark-blue-high", "light-blue", "light-blue-low", "light-blue-high", "yellow", "yellow-low", "yellow-high", "orange", "orange-night", "orange-button-hover", "orange-button-active", "orange-low", "orange-high", "orange-super", "pink", "pink-low", "pink-high", "green", "green-low", "green-high", "cool-grey", "cool-grey07", "cool-grey05", "cool-grey03", "cool-grey05-no-opacity", "purple-high05", "purple-high02", "orange-high05", "orange-high02", "orange03", "orange01", "orange005", "slate", "dark-slate", "burgundy", "white09", "white08", "white07", "white06", "white05", "white04", "white03", "white025", "white02", "white01", "white005", "main-color", "main-color09", "main-color08", "main-color07", "main-color06", "main-color05", "main-color04", "main-color03", "main-color02", "main-color01", "main-color007", "main-color005", "main-color003", "main-color09-no-opacity", "main-color085-no-opacity", "main-color07-no-opacity", "main-color05-no-opacity", "main-color03-no-opacity", "main-color01-no-opacity", "main-color007-no-opacity", "main-color005-no-opacity", "main-color003-no-opacity"],
      shadowColor: "white",
      showShadow: true,
      infinitescroll: false,
      blurnotactive: true,
      scrollableondesktop: true,
      background: "",
      loaderType: skeletonLoader,
      gotoSlideVal: 0,
      colInRow: 4,
      laptopColInRow: 3,
      scrollStep: 1,
      laptopScrollStep: 1,
      tdScrollStep: 1,
      mdScrollStep: 1,
      waitTime: this.getRandomNumberFromRange(3, 15) * 1000,
      enableCustomTime: false,
      customTime: 0.3
    };
  },
  components: _componentsList__WEBPACK_IMPORTED_MODULE_1__["default"],
  computed: {
    configLoaderCount: {
      get: function get() {
        return this.loaderType !== defaultLoaderType ? this.loaderType.count : skeletonLoader.count;
      },
      set: function set(val) {
        this.loaderType.count = +val;
      }
    },
    configLoaderRows: {
      get: function get() {
        return this.loaderType !== defaultLoaderType ? this.loaderType.rows : skeletonLoader.rows;
      },
      set: function set(val) {
        this.loaderType.rows = +val;
      }
    },
    gotoSlideModel: {
      get: function get() {
        return this.gotoSlideVal;
      },
      set: function set(val) {
        this.gotoSlideVal = +val;
        this.$refs.carouselEl.moveTo(this.gotoSlideVal);
      }
    }
  },
  created: function created() {
    this.reCreate();
  },
  methods: {
    reCreate: function reCreate() {
      var _this = this;

      this.slidesList = [];
      setTimeout(function () {
        _this.slidesList = _toConsumableArray(Array(_this.getRandomNumberFromRange(2, 17)).keys());
      }, this.waitTime);
    },
    setLoaderType: function setLoaderType() {
      this.loaderType = this.loaderType === defaultLoaderType ? skeletonLoader : defaultLoaderType;
    },
    getRandomNumberFromRange: function getRandomNumberFromRange(min, max) {
      return Math.round(Math.random() * (max - min) + min, 10);
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/stylus-loader/dist/cjs.js??clonedRuleSet-5[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/example-pages/components/group/CarouselV2--demo.vue?vue&type=style&index=0&lang=stylus&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/stylus-loader/dist/cjs.js??clonedRuleSet-5[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/example-pages/components/group/CarouselV2--demo.vue?vue&type=style&index=0&lang=stylus& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".sk-contain {\n  margin: 0 -10px -20px;\n  padding-bottom: 20px;\n  overflow: hidden;\n  -webkit-flex-wrap: nowrap;\n  -ms-flex-wrap: nowrap;\n  flex-wrap: nowrap;\n  display: -webkit-flex;\n  display: flex;\n}\n.rt-container .sk-contain {\n  padding-left: 0;\n  padding-right: 0;\n}\n.sk-card {\n  -webkit-flex: 0 0 338px;\n  -ms-flex: 0 0 338px;\n  flex: 0 0 338px;\n  padding: 0 10px;\n}\n.rt-code-viewer .rt-carousel,\n.rt-code-viewer .rt-carousel__slide {\n  z-index: auto;\n}\n@media (max-width: 1024px) {\n.rtk-fo__case .rt-carousel-slide-v2 {\n    max-width: 288px;\n}\n.rt-container .rtk-fo__case .rt-carousel-v2.rt-container {\n    margin: 0 -20px;\n    width: 100vw;\n}\n}\n@media (min-width: 1025px) {\n.rt-container .rtk-fo__case .rt-carousel-v2.rt-container {\n    margin: 0 -10px;\n    padding: 0;\n}\n}\n@media (max-width: 359px) {\n.rtk-fo__case .rt-carousel-v2:not(.rt-carousel--fit-slides) .rt-carousel-slide-v2 {\n    max-width: 252px;\n}\n}\n@media (min-width: 360px) and (max-width: 1279px) {\n.rtk-fo__case .rt-carousel-v2:not(.rt-carousel--fit-slides) .rt-carousel-slide-v2 {\n    max-width: 316px;\n}\n}\n@media (min-width: 1025px) and (max-width: 1279px) {\n.rtk-fo__case .rt-carousel-v2.rt-carousel--fit-slides .rt-carousel-slide-v2 {\n    max-width: 352px;\n}\n}\n@media (min-width: 1025px) and (max-width: 1366px) {\n.rtk-fo__case .rt-carousel-slide-v2--5 {\n    -webkit-flex: 0 0 400px;\n    -ms-flex: 0 0 400px;\n    flex: 0 0 400px;\n    max-width: initial;\n}\n}\n@media (max-width: 1279px) {\n.rtk-fo__case .rt-carousel-slide-v2--5 {\n    width: 352px !important;\n    -webkit-flex-basis: 352px !important;\n    flex-basis: 352px !important;\n}\n}\n@media (min-width: 1280px) {\n.rtk-fo__case .rt-carousel-v2:not(.rt-carousel--fit-slides) .rt-carousel-slide-v2 {\n    max-width: 336px;\n}\n}\n@media (min-width: 1280px) {\n.rtk-fo__case .rt-carousel-v2.rt-carousel--fit-slides .rt-carousel-slide-v2--1,\n  .rtk-fo__case .rt-carousel-v2.rt-carousel--fit-slides .rt-carousel-slide-v2--2 {\n    width: 365px !important;\n    -webkit-flex-basis: 365px !important;\n    flex-basis: 365px !important;\n}\n}\n@media (min-width: 1367px) {\n.rtk-fo__case .rt-carousel-v2.rt-carousel--fit-slides .rt-carousel-slide-v2--5 {\n    max-width: 336px;\n}\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/stylus-loader/dist/cjs.js??clonedRuleSet-5[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/example-pages/components/group/CarouselV2--demo.vue?vue&type=style&index=0&lang=stylus&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/stylus-loader/dist/cjs.js??clonedRuleSet-5[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/example-pages/components/group/CarouselV2--demo.vue?vue&type=style&index=0&lang=stylus& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_stylus_loader_dist_cjs_js_clonedRuleSet_5_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CarouselV2_demo_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/stylus-loader/dist/cjs.js??clonedRuleSet-5[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CarouselV2--demo.vue?vue&type=style&index=0&lang=stylus& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/stylus-loader/dist/cjs.js??clonedRuleSet-5[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/example-pages/components/group/CarouselV2--demo.vue?vue&type=style&index=0&lang=stylus&");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_stylus_loader_dist_cjs_js_clonedRuleSet_5_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CarouselV2_demo_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_stylus_loader_dist_cjs_js_clonedRuleSet_5_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CarouselV2_demo_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_stylus_loader_dist_cjs_js_clonedRuleSet_5_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CarouselV2_demo_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_stylus_loader_dist_cjs_js_clonedRuleSet_5_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CarouselV2_demo_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_stylus_loader_dist_cjs_js_clonedRuleSet_5_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CarouselV2_demo_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/stylus-loader/dist/cjs.js??clonedRuleSet-5[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CarouselV2--demo.vue?vue&type=style&index=0&lang=stylus& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/stylus-loader/dist/cjs.js??clonedRuleSet-5[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/example-pages/components/group/CarouselV2--demo.vue?vue&type=style&index=0&lang=stylus&",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_stylus_loader_dist_cjs_js_clonedRuleSet_5_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CarouselV2_demo_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/stylus-loader/dist/cjs.js??clonedRuleSet-5[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CarouselV2--demo.vue?vue&type=style&index=0&lang=stylus& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/stylus-loader/dist/cjs.js??clonedRuleSet-5[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/example-pages/components/group/CarouselV2--demo.vue?vue&type=style&index=0&lang=stylus&");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_stylus_loader_dist_cjs_js_clonedRuleSet_5_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CarouselV2_demo_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_stylus_loader_dist_cjs_js_clonedRuleSet_5_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CarouselV2_demo_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_stylus_loader_dist_cjs_js_clonedRuleSet_5_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CarouselV2_demo_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_stylus_loader_dist_cjs_js_clonedRuleSet_5_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CarouselV2_demo_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_stylus_loader_dist_cjs_js_clonedRuleSet_5_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CarouselV2_demo_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_stylus_loader_dist_cjs_js_clonedRuleSet_5_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CarouselV2_demo_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_stylus_loader_dist_cjs_js_clonedRuleSet_5_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CarouselV2_demo_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_stylus_loader_dist_cjs_js_clonedRuleSet_5_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CarouselV2_demo_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/example-pages/components/group/CarouselV2--demo.vue":
/*!*****************************************************************!*\
  !*** ./src/example-pages/components/group/CarouselV2--demo.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CarouselV2_demo_vue_vue_type_template_id_4777e29c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CarouselV2--demo.vue?vue&type=template&id=4777e29c& */ "./src/example-pages/components/group/CarouselV2--demo.vue?vue&type=template&id=4777e29c&");
/* harmony import */ var _CarouselV2_demo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CarouselV2--demo.vue?vue&type=script&lang=js& */ "./src/example-pages/components/group/CarouselV2--demo.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



function injectStyles (context) {
  
  var style0 = __webpack_require__(/*! ./CarouselV2--demo.vue?vue&type=style&index=0&lang=stylus& */ "./src/example-pages/components/group/CarouselV2--demo.vue?vue&type=style&index=0&lang=stylus&")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CarouselV2_demo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CarouselV2_demo_vue_vue_type_template_id_4777e29c___WEBPACK_IMPORTED_MODULE_0__.render,
  _CarouselV2_demo_vue_vue_type_template_id_4777e29c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  injectStyles,
  null,
  null
  ,true
)

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./src/example-pages/components/group/CarouselV2--demo.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./src/example-pages/components/group/CarouselV2--demo.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CarouselV2_demo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CarouselV2--demo.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/example-pages/components/group/CarouselV2--demo.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CarouselV2_demo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/example-pages/components/group/CarouselV2--demo.vue?vue&type=style&index=0&lang=stylus&":
/*!*****************************************************************************************************!*\
  !*** ./src/example-pages/components/group/CarouselV2--demo.vue?vue&type=style&index=0&lang=stylus& ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_stylus_loader_dist_cjs_js_clonedRuleSet_5_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CarouselV2_demo_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/stylus-loader/dist/cjs.js??clonedRuleSet-5[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CarouselV2--demo.vue?vue&type=style&index=0&lang=stylus& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/stylus-loader/dist/cjs.js??clonedRuleSet-5[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/example-pages/components/group/CarouselV2--demo.vue?vue&type=style&index=0&lang=stylus&");


/***/ }),

/***/ "./src/example-pages/components/group/CarouselV2--demo.vue?vue&type=template&id=4777e29c&":
/*!************************************************************************************************!*\
  !*** ./src/example-pages/components/group/CarouselV2--demo.vue?vue&type=template&id=4777e29c& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CarouselV2_demo_vue_vue_type_template_id_4777e29c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CarouselV2_demo_vue_vue_type_template_id_4777e29c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CarouselV2_demo_vue_vue_type_template_id_4777e29c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CarouselV2--demo.vue?vue&type=template&id=4777e29c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/example-pages/components/group/CarouselV2--demo.vue?vue&type=template&id=4777e29c&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/example-pages/components/group/CarouselV2--demo.vue?vue&type=template&id=4777e29c&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/example-pages/components/group/CarouselV2--demo.vue?vue&type=template&id=4777e29c& ***!
  \***************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"sp-v-2"},[_c('div',{staticClass:"rt-container"},[_c('div',{staticClass:"rt-col-12 rt-space-bottom3 is-b2c"},[_c('rt-row',[_c('rt-col',{attrs:{"size":"2","tablet-size":"3","mobile-size":"3","mobile-top":"20","tablet-top":"12"}},[_c('rt-input',{attrs:{"version":2,"placeholder":"number","type":"number"},model:{value:(_vm.num),callback:function ($$v) {_vm.num=$$v},expression:"num"}})],1),_vm._v(" "),_c('rt-col',{attrs:{"size":"2","tablet-size":"3","mobile-size":"3","mobile-top":"20","tablet-top":"12"}},[_c('p',[_vm._v("background")]),_vm._v(" "),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.background),expression:"background"}],staticStyle:{"width":"100%"},on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.background=$event.target.multiple ? $$selectedVal : $$selectedVal[0]}}},_vm._l((_vm.colors),function(i){return _c('option',{domProps:{"value":i}},[_vm._v(_vm._s(i))])}),0)]),_vm._v(" "),_c('rt-col',{attrs:{"size":"2","tablet-size":"3","mobile-size":"3","mobile-top":"20","tablet-top":"12"}},[_c('p',[_vm._v("shadowColor")]),_vm._v(" "),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.shadowColor),expression:"shadowColor"}],staticStyle:{"width":"100%"},on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.shadowColor=$event.target.multiple ? $$selectedVal : $$selectedVal[0]}}},_vm._l((_vm.colors),function(i){return _c('option',{domProps:{"value":i}},[_vm._v(_vm._s(i))])}),0)]),_vm._v(" "),_c('rt-col',{attrs:{"size":"2","tablet-size":"3","mobile-size":"3","mobile-top":"20","tablet-top":"12"}},[_c('p',[_vm._v("show shadow")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.showShadow),expression:"showShadow"}],attrs:{"type":"checkbox"},domProps:{"checked":Array.isArray(_vm.showShadow)?_vm._i(_vm.showShadow,null)>-1:(_vm.showShadow)},on:{"change":function($event){var $$a=_vm.showShadow,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.showShadow=$$a.concat([$$v]))}else{$$i>-1&&(_vm.showShadow=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{_vm.showShadow=$$c}}}})]),_vm._v(" "),_c('rt-col',{attrs:{"size":"2","tablet-size":"3","mobile-size":"3","mobile-top":"20","tablet-top":"12"}},[_c('p',[_vm._v("infinite scroll")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.infinitescroll),expression:"infinitescroll"}],attrs:{"type":"checkbox"},domProps:{"checked":Array.isArray(_vm.infinitescroll)?_vm._i(_vm.infinitescroll,null)>-1:(_vm.infinitescroll)},on:{"change":function($event){var $$a=_vm.infinitescroll,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.infinitescroll=$$a.concat([$$v]))}else{$$i>-1&&(_vm.infinitescroll=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{_vm.infinitescroll=$$c}}}})]),_vm._v(" "),_c('rt-col',{attrs:{"size":"2","tablet-size":"3","mobile-size":"3","mobile-top":"20","tablet-top":"12"}},[_c('p',[_vm._v("scroll step")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.scrollStep),expression:"scrollStep"}],domProps:{"value":(_vm.scrollStep)},on:{"input":function($event){if($event.target.composing){ return; }_vm.scrollStep=$event.target.value}}})]),_vm._v(" "),_c('rt-col',{attrs:{"size":"2","tablet-size":"3","mobile-size":"3","mobile-top":"20","tablet-top":"12"}},[_c('p',[_vm._v("laptop scroll step")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.laptopScrollStep),expression:"laptopScrollStep"}],domProps:{"value":(_vm.laptopScrollStep)},on:{"input":function($event){if($event.target.composing){ return; }_vm.laptopScrollStep=$event.target.value}}})]),_vm._v(" "),_c('rt-col',{attrs:{"size":"2","tablet-size":"3","mobile-size":"3","mobile-top":"20","tablet-top":"12"}},[_c('p',[_vm._v("tablet scroll step")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.tdScrollStep),expression:"tdScrollStep"}],domProps:{"value":(_vm.tdScrollStep)},on:{"input":function($event){if($event.target.composing){ return; }_vm.tdScrollStep=$event.target.value}}})]),_vm._v(" "),_c('rt-col',{attrs:{"size":"2","tablet-size":"3","mobile-size":"3","mobile-top":"20","tablet-top":"12"}},[_c('p',[_vm._v("mobile scroll step")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.mdScrollStep),expression:"mdScrollStep"}],domProps:{"value":(_vm.mdScrollStep)},on:{"input":function($event){if($event.target.composing){ return; }_vm.mdScrollStep=$event.target.value}}})]),_vm._v(" "),_c('rt-col',{attrs:{"size":"2","tablet-size":"3","mobile-size":"3","mobile-top":"20","tablet-top":"12"}},[_c('p',[_vm._v("blur not active")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.blurnotactive),expression:"blurnotactive"}],attrs:{"type":"checkbox"},domProps:{"checked":Array.isArray(_vm.blurnotactive)?_vm._i(_vm.blurnotactive,null)>-1:(_vm.blurnotactive)},on:{"change":function($event){var $$a=_vm.blurnotactive,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.blurnotactive=$$a.concat([$$v]))}else{$$i>-1&&(_vm.blurnotactive=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{_vm.blurnotactive=$$c}}}})]),_vm._v(" "),_c('rt-col',{attrs:{"size":"2","tablet-size":"3","mobile-size":"3","mobile-top":"20","tablet-top":"12"}},[_c('p',[_vm._v("scrollable on desktop")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.scrollableondesktop),expression:"scrollableondesktop"}],attrs:{"type":"checkbox"},domProps:{"checked":Array.isArray(_vm.scrollableondesktop)?_vm._i(_vm.scrollableondesktop,null)>-1:(_vm.scrollableondesktop)},on:{"change":function($event){var $$a=_vm.scrollableondesktop,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.scrollableondesktop=$$a.concat([$$v]))}else{$$i>-1&&(_vm.scrollableondesktop=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{_vm.scrollableondesktop=$$c}}}})]),_vm._v(" "),_c('rt-col',{attrs:{"size":"2","tablet-size":"3","mobile-size":"3","mobile-top":"20","tablet-top":"12"}},[_c('p',[_vm._v("col in row")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.colInRow),expression:"colInRow"}],attrs:{"type":"number"},domProps:{"value":(_vm.colInRow)},on:{"input":function($event){if($event.target.composing){ return; }_vm.colInRow=$event.target.value}}})]),_vm._v(" "),_c('rt-col',{attrs:{"size":"2","tablet-size":"3","mobile-size":"3","mobile-top":"20","tablet-top":"12"}},[_c('p',[_vm._v("laptop col in row")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.laptopColInRow),expression:"laptopColInRow"}],attrs:{"type":"number"},domProps:{"value":(_vm.laptopColInRow)},on:{"input":function($event){if($event.target.composing){ return; }_vm.laptopColInRow=$event.target.value}}})]),_vm._v(" "),_c('rt-col',{attrs:{"size":"2","tablet-size":"3","mobile-size":"3","mobile-top":"20","tablet-top":"12"}},[_c('p',[_vm._v("active index")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.activeIndex),expression:"activeIndex"}],attrs:{"type":"number"},domProps:{"value":(_vm.activeIndex)},on:{"input":function($event){if($event.target.composing){ return; }_vm.activeIndex=$event.target.value}}})]),_vm._v(" "),_c('rt-col',{attrs:{"size":"2","tablet-size":"3","mobile-size":"3","mobile-top":"20","tablet-top":"12"}},[_c('p',[_vm._v("enable custom time")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.enableCustomTime),expression:"enableCustomTime"}],attrs:{"type":"checkbox"},domProps:{"checked":Array.isArray(_vm.enableCustomTime)?_vm._i(_vm.enableCustomTime,null)>-1:(_vm.enableCustomTime)},on:{"change":function($event){var $$a=_vm.enableCustomTime,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.enableCustomTime=$$a.concat([$$v]))}else{$$i>-1&&(_vm.enableCustomTime=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{_vm.enableCustomTime=$$c}}}})]),_vm._v(" "),_c('rt-col',{attrs:{"size":"2","tablet-size":"3","mobile-size":"3","mobile-top":"20","tablet-top":"12"}},[_c('p',[_vm._v("custom time")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.customTime),expression:"customTime"}],attrs:{"type":"text"},domProps:{"value":(_vm.customTime)},on:{"input":function($event){if($event.target.composing){ return; }_vm.customTime=$event.target.value}}})])],1)],1)]),_vm._v(" "),_c('rt-tabs',{attrs:{"version":2,"show-as-tags":true,"background":"main-color03","bright":true,"small":true,"wrap-navigation":true}},[_c('template',{slot:"navigation"},[_c('rt-tabs-nav-item',{attrs:{"anchor":"ready!","name":"1"}},[_vm._v("1")]),_vm._v(" "),_c('rt-tabs-nav-item',{attrs:{"anchor":"ready!","name":"2"}},[_vm._v("2")])],1),_vm._v(" "),_c('template',{slot:"content"},[_c('rt-tabs-content-item',{attrs:{"name":"1"}},[_vm._v("\n            "+_vm._s(_vm.shadowColor)+"\n\n      "),_c('rt-carousel-v3',{attrs:{"scroll-step":_vm.scrollStep,"laptop-scroll-step":_vm.laptopScrollStep,"td-scroll-step":_vm.tdScrollStep,"custom-time":_vm.customTime,"enable-custom-time":_vm.enableCustomTime,"md-scroll-step":_vm.mdScrollStep,"active-index":_vm.activeIndex,"background":_vm.background,"shadow-color":_vm.shadowColor,"show-shadow":_vm.showShadow,"infinite-scroll":_vm.infinitescroll,"blur-not-active":_vm.blurnotactive,"col-in-row":_vm.colInRow,"laptop-col-in-row":_vm.laptopColInRow,"scrollable-on-desktop":_vm.scrollableondesktop}},_vm._l((5),function(i){return _c('rt-carousel-slide-v3',{key:i+'$',attrs:{"id":'slide-'+i}},[_c('div',[_c('div',{staticStyle:{"background-size":"cover","border-radius":"8px","height":"300px","position":"relative"},style:(("background: url(https://picsum.photos/500/300?getForId=" + (i+100+_vm.num) + ")"))},[_c('div',{staticClass:"d-flex flex-end-center flex-v-center"},[_vm._v("Это текст "+_vm._s(i)+" "),_c('span',[_c('rt-popover',{attrs:{"container-id":'slide-'+i}},[_c('template',{slot:"customIcon"},[_c('svg',{attrs:{"width":"32","height":"32","viewBox":"0 0 32 32","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_c('circle',{attrs:{"cx":"16","cy":"16","r":"16","fill":"#101828","fill-opacity":"0.03"}}),_vm._v(" "),_c('path',{attrs:{"d":"M14.8531 6.58975C15.2068 5.80342 16.3233 5.80341 16.677 6.58974L18.9833 11.7164L24.6475 12.3833C25.5202 12.4861 25.8456 13.5837 25.1699 14.1454L20.8549 17.7328L22.1721 23.1394C22.379 23.9887 21.4733 24.676 20.711 24.2481L15.765 21.4717L10.8198 24.2478C10.0574 24.6757 9.15161 23.9883 9.35872 23.1389L10.6769 17.7328L6.36188 14.1454C5.68619 13.5836 6.01154 12.486 6.88421 12.3833L12.5469 11.7164L14.8531 6.58975Z","fill":"#FF4F12"}})])]),_vm._v(" "),_c('template',{slot:"content"},[_c('div',[_c('p',{staticClass:"rt-font-label rt-font-bold sp-b-0-2 color-main07"},[_vm._v("Заголовок")]),_vm._v(" "),_c('p',{staticClass:"rt-font-label color-main07"},[_vm._v("Высота тултипа подстраивается под контент. Ширина сохранятеся")])])])],2)],1)]),_vm._v(" "),_c('div',{staticStyle:{"background-color":"black","color":"white","position":"absolute","bottom":"0","right":"0","padding":"0 10px"},domProps:{"textContent":_vm._s('1-'+i)}})])])])}),1)],1),_vm._v(" "),_c('rt-tabs-content-item',{attrs:{"name":"2"}},[_c('div',{staticClass:"color-block--green sp-v-2"},[_vm._v("11122")]),_vm._v(" "),_c('rt-carousel-v3',{attrs:{"scroll-step":_vm.scrollStep,"laptop-scroll-step":_vm.laptopScrollStep,"td-scroll-step":_vm.tdScrollStep,"md-scroll-step":_vm.mdScrollStep,"active-index":_vm.activeIndex,"background":_vm.background,"shadow-color":_vm.shadowColor,"show-shadow":_vm.showShadow,"infinite-scroll":_vm.infinitescroll,"blur-not-active":_vm.blurnotactive,"col-in-row":_vm.colInRow,"laptop-col-in-row":_vm.laptopColInRow,"scrollable-on-desktop":_vm.scrollableondesktop}},_vm._l((15),function(i){return _c('rt-carousel-slide-v3',{key:i+'$$'},[_c('div',[_c('div',{staticClass:"d-flex flex-v-end",staticStyle:{"background-size":"cover","border-radius":"8px","height":"300px","position":"relative"},style:(("background: url(https://picsum.photos/500/300?getForId=" + i + ")"))},[_c('div',{staticStyle:{"background-color":"black","color":"white","position":"absolute","bottom":"0","right":"0","padding":"0 10px"},domProps:{"textContent":_vm._s('2-'+i)}})])])])}),1),_vm._v(" "),_c('div',{staticClass:"color-block--red sp-v-2"})],1)],1)],2),_vm._v(" "),_c('rt-carousel-v3',{attrs:{"scroll-step":_vm.scrollStep,"laptop-scroll-step":_vm.laptopScrollStep,"td-scroll-step":_vm.tdScrollStep,"md-scroll-step":_vm.mdScrollStep,"active-index":_vm.activeIndex,"background":_vm.background,"shadow-color":_vm.shadowColor,"show-shadow":_vm.showShadow,"infinite-scroll":_vm.infinitescroll,"blur-not-active":_vm.blurnotactive,"col-in-row":_vm.colInRow,"laptop-col-in-row":_vm.laptopColInRow,"scrollable-on-desktop":_vm.scrollableondesktop}},_vm._l((15),function(i){return _c('rt-carousel-slide-v3',{key:i,attrs:{"id":'slide-2-'+i}},[_c('div',[_c('div',{staticClass:"d-flex flex-v-end",staticStyle:{"background-size":"cover","border-radius":"8px","height":"300px","position":"relative"},style:(("background: url(https://picsum.photos/500/300?getForId=" + (i+35) + ")"))},[_c('div',{staticClass:"d-flex flex-end-center flex-v-center"},[_vm._v("Это текст "+_vm._s(i)+" "),_c('rt-popover',{attrs:{"enable-append-to-body":true,"container-id":'slide-2-'+i}},[_c('template',{slot:"customIcon"},[_c('svg',{attrs:{"width":"32","height":"32","viewBox":"0 0 32 32","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_c('circle',{attrs:{"cx":"16","cy":"16","r":"16","fill":"#101828","fill-opacity":"0.03"}}),_vm._v(" "),_c('path',{attrs:{"d":"M14.8531 6.58975C15.2068 5.80342 16.3233 5.80341 16.677 6.58974L18.9833 11.7164L24.6475 12.3833C25.5202 12.4861 25.8456 13.5837 25.1699 14.1454L20.8549 17.7328L22.1721 23.1394C22.379 23.9887 21.4733 24.676 20.711 24.2481L15.765 21.4717L10.8198 24.2478C10.0574 24.6757 9.15161 23.9883 9.35872 23.1389L10.6769 17.7328L6.36188 14.1454C5.68619 13.5836 6.01154 12.486 6.88421 12.3833L12.5469 11.7164L14.8531 6.58975Z","fill":"#FF4F12"}})])]),_vm._v(" "),_c('template',{slot:"content"},[_c('div',[_c('p',{staticClass:"rt-font-label rt-font-bold sp-b-0-2 color-main07"},[_vm._v("Заголовок")]),_vm._v(" "),_c('p',{staticClass:"rt-font-label color-main07"},[_vm._v("Высота тултипа подстраивается под контент. Ширина сохранятеся")])])])],2)],1),_vm._v(" "),_c('div',{staticStyle:{"background-color":"black","color":"white","position":"absolute","bottom":"0","right":"0","padding":"0 10px"},domProps:{"textContent":_vm._s('2-'+i)}})])])])}),1),_vm._v(" "),_c('rt-carousel-v3',{attrs:{"background":_vm.background,"shadow-color":_vm.shadowColor,"show-shadow":_vm.showShadow,"infinite-scroll":_vm.infinitescroll,"blur-not-active":_vm.blurnotactive,"scrollable-on-desktop":_vm.scrollableondesktop}},_vm._l((8),function(i){return _c('rt-carousel-slide-v3',{key:i,attrs:{"time":i*1000}},[_c('div',[_c('div',{staticStyle:{"background-size":"cover","border-radius":"8px","height":"300px","position":"relative"},style:(("background: url(https://picsum.photos/500/300?getForId=" + i + ")"))},[_c('div',{staticStyle:{"background-color":"black","color":"white","position":"absolute","bottom":"0","right":"0","padding":"0 10px"},domProps:{"textContent":_vm._s(i)}})])])])}),1),_vm._v(" "),_c('rt-carousel-v3',{attrs:{"background":_vm.background,"col-in-row":4,"shadow-color":_vm.shadowColor,"show-shadow":_vm.showShadow,"infinite-scroll":_vm.infinitescroll,"blur-not-active":_vm.blurnotactive,"scrollable-on-desktop":_vm.scrollableondesktop}},_vm._l((8),function(i){return _c('rt-carousel-slide-v3',{key:i,attrs:{"time":i*1000}},[_c('div',[_c('div',{staticStyle:{"background-size":"cover","border-radius":"8px","height":"300px","position":"relative"},style:(("background: url(https://picsum.photos/500/300?getForId=" + i + ")"))},[_c('div',{staticStyle:{"background-color":"black","color":"white","position":"absolute","bottom":"0","right":"0","padding":"0 10px"},domProps:{"textContent":_vm._s(i)}})])])])}),1)],1),_vm._v(" "),_c('div',{staticClass:"rt-container"},[_c('documentation-builder',{staticClass:"sp-t-2-1",attrs:{"json":_vm.docProps,"type":"props"}})],1)])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"rt-container"},[_c('div',{staticClass:"app-content rt-col-12 rt-col-md-3"},[_c('div',{staticClass:"app-title"},[_c('h1',{staticClass:"rt-font-hero"},[_vm._v("CarouselV2")])])])])}]



/***/ }),

/***/ "./src/molecules/components/CarouselV3/docs/index.json":
/*!*************************************************************!*\
  !*** ./src/molecules/components/CarouselV3/docs/index.json ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"items":[{"name":"rt-carousel-v3","property":"name","type":["String"],"value":"\'\'","description":"Название"},{"name":"rt-carousel-v3","property":"col-in-row","type":["String","Number"],"value":"3","description":"кол-во колонок в строку"},{"name":"rt-carousel-v3","property":"laptop-col-in-row","type":["String","Number"],"value":"0","description":"кол-во колонок в строку (ширина девайса < 1600)"},{"name":"rt-carousel-v3","property":":scrollable-on-desktop","type":["Boolean"],"value":"true","description":"флаг влючения карусели на десктопе"},{"name":"rt-carousel-v3","property":"scroll-step","type":["String","Number"],"value":"1","description":"шаг скрола для десктопа"},{"name":"rt-carousel-v3","property":"laptop-scroll-step","type":["String","Number"],"value":"1","description":"шаг скрола для лептопа < 1600"},{"name":"rt-carousel-v3","property":"td-scroll-step","type":["String","Number"],"value":"1","description":"шаг скрола для планшета"},{"name":"rt-carousel-v3","property":"md-scroll-step","type":["String","Number"],"value":"1","description":"шаг скрола для мобильных устройств"},{"name":"rt-carousel-v3","property":"active-index","type":["String","Number"],"value":"0","description":"индекс активной карточки"},{"name":"rt-carousel-v3","property":":show-shadow","type":["Boolean"],"value":"true","description":"флаг включения теней"},{"name":"rt-carousel-v3","property":"shadow-color","type":["String"],"value":"\'white\'","description":"цвет теней из colors.json"},{"name":"rt-carousel-v3","property":"background","type":["String"],"description":"цвет заливки из colors.json","value":"\'\'"},{"name":"rt-carousel-v3","property":":infinite-scroll","type":["Boolean"],"value":"false","description":"флаг бесконечной прокрутки"},{"name":"rt-carousel-v3","property":":blur-not-active","type":["Boolean"],"value":"true","description":"флаг включения блюра для не актичных карточек"}]}');

/***/ })

}]);
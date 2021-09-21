"use strict";
(self["webpackChunkvue_rt_style_kit_pages"] = self["webpackChunkvue_rt_style_kit_pages"] || []).push([["src_example-pages_components_main_SpaceColorized_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/example-pages/components/main/SpaceColorized.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/example-pages/components/main/SpaceColorized.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vue_rt_style_kit_atoms_local_colorized_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue-rt-style-kit-atoms-local/colorized.json */ "./src/atoms/colorized.json");
/* harmony import */ var _vue_rt_style_kit_atoms_local_variables_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vue-rt-style-kit-atoms-local/variables.json */ "./src/atoms/variables.json");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      colorized: _vue_rt_style_kit_atoms_local_colorized_json__WEBPACK_IMPORTED_MODULE_0__,
      globalVariables: _vue_rt_style_kit_atoms_local_variables_json__WEBPACK_IMPORTED_MODULE_1__,
      sourceCode: '',
      showCopySuccess: false
    };
  },
  computed: {
    pixelPoint: function pixelPoint() {
      return parseInt(_vue_rt_style_kit_atoms_local_variables_json__WEBPACK_IMPORTED_MODULE_1__["pixel-point"], 10);
    }
  },
  methods: {
    copyCode: function copyCode(_ref) {
      var _this = this;

      var target = _ref.target;
      var el = this.$refs.sourceCodeEl;
      if (!el) return;
      el.value = target.innerText.replace('.', '');
      el.select();
      el.setSelectionRange(0, 99999);
      document.execCommand('copy');
      this.showCopySuccess = true;
      setTimeout(function () {
        _this.showCopySuccess = false;
      }, 2000);
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/stylus-loader/dist/cjs.js??clonedRuleSet-5[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/example-pages/components/main/SpaceColorized.vue?vue&type=style&index=0&lang=stylus&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/stylus-loader/dist/cjs.js??clonedRuleSet-5[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/example-pages/components/main/SpaceColorized.vue?vue&type=style&index=0&lang=stylus& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".baza-title {\n  color: #19417a;\n  font-size: 32px;\n  font-weight: 500;\n  line-height: 34px;\n}\n.baza-desc {\n  color: #19417a;\n  font-size: 16px;\n  line-height: 28px;\n  white-space: pre-wrap;\n}\n.baza-body {\n  max-width: 800px;\n}\n.preview-css {\n  color: rgba(16,24,40,0.5);\n}\n.preview-css + .preview-css {\n  margin-top: 10px;\n}\n.preview-css-val {\n  background: #efefef;\n  color: #9a9a9a;\n  cursor: pointer;\n  border-radius: 4px;\n  padding: 4px 8px;\n  -webkit-transition: background 0.3s ease;\n  -moz-transition: background 0.3s ease;\n  -o-transition: background 0.3s ease;\n  -ms-transition: background 0.3s ease;\n  transition: background 0.3s ease;\n}\n@media (hover: hover) {\n.preview-css-val:hover {\n    background: transparent;\n}\n}\n.preview-color + .preview-color {\n  margin-top: 40px;\n}\n.preview-color-wrap {\n  width: 400px;\n  max-width: 100vw;\n}\n.preview-color-line {\n  margin: 20px 0;\n  position: relative;\n}\n.preview-color-line:after {\n  content: '';\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n}\n.preview-color-line-title {\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 28px;\n}\n.preview-color-line-grey {\n  background: #7b939b;\n}\n.preview-color-line-darkpurple {\n  background: #3f028c;\n}\n.preview-color-line-blue {\n  background: #0e49e3;\n}\n.preview-color-line-lightblue {\n  background: #65bbdf;\n}\n.preview-color-line-yellow {\n  background: #ffca00;\n}\n.preview-color-line-darkorange {\n  background: #d33706;\n}\n.preview-color-line-burgundy {\n  background: #850337;\n}\n.preview-color-line-red {\n  background: #ff4747;\n}\n.preview-color-line-mint {\n  background: #57d9b7;\n}\n.preview-color-line-purple {\n  background: #9466ff;\n}\n.preview-color-line-darkblue {\n  background: #273a64;\n}\n.preview-color-line-green {\n  background: #26da72;\n}\n.preview-color-line-orange {\n  background: #ff4f12;\n}\n.preview-color-line-pink {\n  background: #ffbfc3;\n}\n.preview-color-line-wine {\n  background: #bc104b;\n}\n.preview-koef {\n  font-size: 16px;\n  line-height: 28px;\n  padding-right: 20px;\n}\n.source-code {\n  background: transparent;\n  border: none;\n  font-size: 10px;\n  position: absolute;\n  opacity: 0;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n  filter: alpha(opacity=0);\n  resize: none;\n}\n.the-msg {\n  background: #333;\n  color: #f1cb11;\n  margin: auto;\n  max-width: 70vw;\n  padding: 12px;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  -webkit-transition: -webkit-transform 0.3s ease;\n  -moz-transition: -moz-transform 0.3s ease;\n  -o-transition: -o-transform 0.3s ease;\n  -ms-transition: -ms-transform 0.3s ease;\n  transition: transform 0.3s ease;\n  -webkit-transform: translateY(60px);\n  -moz-transform: translateY(60px);\n  -o-transform: translateY(60px);\n  -ms-transform: translateY(60px);\n  transform: translateY(60px);\n  width: 500px;\n}\n.the-msg.active {\n  -webkit-transform: translateY(0px);\n  -moz-transform: translateY(0px);\n  -o-transform: translateY(0px);\n  -ms-transform: translateY(0px);\n  transform: translateY(0px);\n}\n.bpname {\n  display: inline-block;\n}\n@media (max-width: 767px) {\n.bpname:before {\n    content: 'Mob';\n}\n}\n@media (min-width: 768px) and (max-width: 1024px) {\n.bpname:before {\n    content: 'Tab';\n}\n}\n@media (min-width: 1025px) and (max-width: 1279px) {\n.bpname:before {\n    content: 'WebS';\n}\n}\n@media (min-width: 1280px) {\n.bpname:before {\n    content: 'Web';\n}\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/stylus-loader/dist/cjs.js??clonedRuleSet-5[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/example-pages/components/main/SpaceColorized.vue?vue&type=style&index=0&lang=stylus&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/stylus-loader/dist/cjs.js??clonedRuleSet-5[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/example-pages/components/main/SpaceColorized.vue?vue&type=style&index=0&lang=stylus& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_stylus_loader_dist_cjs_js_clonedRuleSet_5_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SpaceColorized_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/stylus-loader/dist/cjs.js??clonedRuleSet-5[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SpaceColorized.vue?vue&type=style&index=0&lang=stylus& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/stylus-loader/dist/cjs.js??clonedRuleSet-5[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/example-pages/components/main/SpaceColorized.vue?vue&type=style&index=0&lang=stylus&");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_stylus_loader_dist_cjs_js_clonedRuleSet_5_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SpaceColorized_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_6__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_stylus_loader_dist_cjs_js_clonedRuleSet_5_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SpaceColorized_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_stylus_loader_dist_cjs_js_clonedRuleSet_5_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SpaceColorized_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_stylus_loader_dist_cjs_js_clonedRuleSet_5_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SpaceColorized_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


/***/ }),

/***/ "./src/example-pages/components/main/SpaceColorized.vue":
/*!**************************************************************!*\
  !*** ./src/example-pages/components/main/SpaceColorized.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SpaceColorized_vue_vue_type_template_id_74c872df___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SpaceColorized.vue?vue&type=template&id=74c872df& */ "./src/example-pages/components/main/SpaceColorized.vue?vue&type=template&id=74c872df&");
/* harmony import */ var _SpaceColorized_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SpaceColorized.vue?vue&type=script&lang=js& */ "./src/example-pages/components/main/SpaceColorized.vue?vue&type=script&lang=js&");
/* harmony import */ var _SpaceColorized_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SpaceColorized.vue?vue&type=style&index=0&lang=stylus& */ "./src/example-pages/components/main/SpaceColorized.vue?vue&type=style&index=0&lang=stylus&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _SpaceColorized_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _SpaceColorized_vue_vue_type_template_id_74c872df___WEBPACK_IMPORTED_MODULE_0__.render,
  _SpaceColorized_vue_vue_type_template_id_74c872df___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./src/example-pages/components/main/SpaceColorized.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./src/example-pages/components/main/SpaceColorized.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SpaceColorized_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SpaceColorized.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/example-pages/components/main/SpaceColorized.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SpaceColorized_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./src/example-pages/components/main/SpaceColorized.vue?vue&type=style&index=0&lang=stylus&":
/*!**************************************************************************************************!*\
  !*** ./src/example-pages/components/main/SpaceColorized.vue?vue&type=style&index=0&lang=stylus& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_stylus_loader_dist_cjs_js_clonedRuleSet_5_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SpaceColorized_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/stylus-loader/dist/cjs.js??clonedRuleSet-5[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SpaceColorized.vue?vue&type=style&index=0&lang=stylus& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/stylus-loader/dist/cjs.js??clonedRuleSet-5[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/example-pages/components/main/SpaceColorized.vue?vue&type=style&index=0&lang=stylus&");


/***/ }),

/***/ "./src/example-pages/components/main/SpaceColorized.vue?vue&type=template&id=74c872df&":
/*!*********************************************************************************************!*\
  !*** ./src/example-pages/components/main/SpaceColorized.vue?vue&type=template&id=74c872df& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SpaceColorized_vue_vue_type_template_id_74c872df___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SpaceColorized_vue_vue_type_template_id_74c872df___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SpaceColorized_vue_vue_type_template_id_74c872df___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SpaceColorized.vue?vue&type=template&id=74c872df& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/example-pages/components/main/SpaceColorized.vue?vue&type=template&id=74c872df&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/example-pages/components/main/SpaceColorized.vue?vue&type=template&id=74c872df&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/example-pages/components/main/SpaceColorized.vue?vue&type=template&id=74c872df& ***!
  \************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"rt-container is--show-sp-colorized"},[_c('div',{staticClass:"app-content rt-col-12"},[_c('div',{staticClass:"app-title baza-title"},[_vm._v("Система отступов")]),_vm._v(" "),_c('div',{staticClass:"baza-desc",staticStyle:{"max-width":"800px"}},[_vm._v("\nЦветная система вертикальных отступов, адаптируется по определенным правилам.\nИспользуются глобальные точки слома, все оступы кратны "+_vm._s(_vm.pixelPoint)+"-м.\n\nCSS-классы реализованы по формату:\n  "),_c('b',[_vm._v(".sp-[position]-[colorName]")]),_vm._v(",\n"),_vm._m(0),_vm._v(" "),_c('br'),_c('br'),_c('br'),_vm._v(" "),_c('b',[_vm._v("Можно кликать на нужный оступ")]),_vm._v(" из списка, с целью копирования CSS-класса\n      ")]),_vm._v(" "),_c('div',{staticClass:"baza-body app-body"},[_vm._l((_vm.colorized),function(color,key){return _c('div',{key:key,staticClass:"preview-color"},[_c('div',{staticClass:"d-flex flex-start-center md-d-block"},[_c('div',{staticClass:"preview-color-wrap"},[_c('div',{class:("preview-color-line preview-color-line-" + key + " sp-t-" + key)})]),_vm._v(" "),_c('div',{staticClass:"d-flex sp-l-1 md-sp-l-none md-sp-b-1"},[_c('p',{staticClass:"preview-koef preview-koef-web td-d-none md-d-none"},[_vm._v(_vm._s(color.spaceWeb)+"x "+_vm._s(color.spaceWeb * _vm.pixelPoint)+"px")]),_vm._v(" "),_c('p',{staticClass:"preview-koef preview-koef-tablet d-none td-d-block md-d-none"},[_vm._v(_vm._s(color.spaceTablet)+"x "+_vm._s(color.spaceTablet * _vm.pixelPoint)+"px")]),_vm._v(" "),_c('p',{staticClass:"preview-koef preview-koef-mobile d-none md-d-block"},[_vm._v(_vm._s(color.spaceMobile)+"x "+_vm._s(color.spaceMobile * _vm.pixelPoint)+"px")]),_vm._v(" "),_c('h4',{staticClass:"preview-color-title"},[_vm._v(_vm._s(key))])])]),_vm._v(" "),_c('div',{staticClass:"preview-css"},[_c('span',{staticClass:"preview-css-val",domProps:{"innerHTML":_vm._s((".sp-b-" + key))},on:{"click":_vm.copyCode}}),_vm._v("\n            Отступ снизу\n          ")]),_vm._v(" "),_c('div',{staticClass:"preview-css"},[_c('span',{staticClass:"preview-css-val",domProps:{"innerHTML":_vm._s((".sp-t-" + key))},on:{"click":_vm.copyCode}}),_vm._v("\n            Отступ сверху\n          ")]),_vm._v(" "),_c('div',{staticClass:"preview-css"},[_c('span',{staticClass:"preview-css-val",domProps:{"innerHTML":_vm._s((".sp-v-" + key))},on:{"click":_vm.copyCode}}),_vm._v("\n            Отступ сверху и снизу\n          ")])])}),_vm._v(" "),_c('textarea',{ref:"sourceCodeEl",staticClass:"source-code",domProps:{"innerHTML":_vm._s(_vm.sourceCode)}}),_vm._v(" "),_c('div',{staticClass:"the-msg",class:{ active: _vm.showCopySuccess }},[_vm._v("Код скопирован в буфер!")])],2)])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('i',[_vm._v("где "),_c('b',[_vm._v("position")]),_vm._v(" - позиция отступов. t - сверху, b - снизу, v - сверху и снизу\n      "),_c('b',[_vm._v("colorName")]),_vm._v(" - название цветового отступа, без дефиса.")])}]



/***/ }),

/***/ "./src/atoms/colorized.json":
/*!**********************************!*\
  !*** ./src/atoms/colorized.json ***!
  \**********************************/
/***/ ((module) => {

module.exports = JSON.parse('{"grey":{"spaceWeb":1,"spaceTablet":1,"spaceMobile":1},"darkpurple":{"spaceWeb":2,"spaceTablet":2,"spaceMobile":2},"blue":{"spaceWeb":3,"spaceTablet":3,"spaceMobile":3},"lightblue":{"spaceWeb":4,"spaceTablet":4,"spaceMobile":3},"yellow":{"spaceWeb":5,"spaceTablet":5,"spaceMobile":5},"darkorange":{"spaceWeb":5,"spaceTablet":4,"spaceMobile":3},"burgundy":{"spaceWeb":6,"spaceTablet":6,"spaceMobile":5},"red":{"spaceWeb":7,"spaceTablet":7,"spaceMobile":6},"mint":{"spaceWeb":8,"spaceTablet":8,"spaceMobile":7},"purple":{"spaceWeb":10,"spaceTablet":10,"spaceMobile":8},"darkblue":{"spaceWeb":12,"spaceTablet":10,"spaceMobile":8},"green":{"spaceWeb":16,"spaceTablet":12,"spaceMobile":10},"orange":{"spaceWeb":20,"spaceTablet":16,"spaceMobile":10},"pink":{"spaceWeb":25,"spaceTablet":20,"spaceMobile":16},"wine":{"spaceWeb":30,"spaceTablet":25,"spaceMobile":20}}');

/***/ })

}]);
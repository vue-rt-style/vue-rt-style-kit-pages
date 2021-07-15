(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[54],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/example-pages/components/simple/Ussd.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/example-pages/components/simple/Ussd.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _componentsList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../componentsList */ "./src/example-pages/componentsList.js");
/* harmony import */ var _vue_rt_style_kit_atoms_local_components_Ussd_docs_index_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vue-rt-style-kit-atoms-local/components/Ussd/docs/index.json */ "./src/atoms/components/Ussd/docs/index.json");
var _vue_rt_style_kit_atoms_local_components_Ussd_docs_index_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! @vue-rt-style-kit-atoms-local/components/Ussd/docs/index.json */ "./src/atoms/components/Ussd/docs/index.json", 1);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// const componentsList = {};


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "AppSwitch",
  components: _componentsList__WEBPACK_IMPORTED_MODULE_0__["default"],
  data: function data() {
    return {
      documentation: {}
    };
  },
  mounted: function mounted() {
    this.documentation = _vue_rt_style_kit_atoms_local_components_Ussd_docs_index_json__WEBPACK_IMPORTED_MODULE_1__;
  },
  created: function created() {},
  methods: {}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/example-pages/components/simple/Ussd.vue?vue&type=template&id=dad93048&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/example-pages/components/simple/Ussd.vue?vue&type=template&id=dad93048& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"rt-container"},[_c('div',{staticClass:"app-content rt-col-12 rt-col-md-3"},[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"app-body"},[_c('div',{staticClass:"app-row row"},[_c('pre-code',{attrs:{"text":"\n        <div class=\"rt-col\">\n\n      <p>Отправить приглашение новому номеру:\n        <rt-ussd>*105*1*9ХХХХХХХХХ#</rt-ussd></p>\n      <p class=\"rt-space-top05\">Проверить список номеров, подключенных к тарифу: -->>\n        <rt-ussd><div class=\"epc-options__value\">*105*2#</div></rt-ussd></p>\n          <p class=\"rt-space-top05\">Проверить остаток общего пакета услуг:\n        <rt-ussd>*100*12#</rt-ussd></p>\n          <p class=\"rt-space-top05 rt-space-bottom05\">Отключить номер: <rt-ussd>*105*0*9ХХХХХХХХХ#</rt-ussd> </p>\n\n      <rt-ussd :without-left-space=\"true\" tel=\"*100*12#\">Унать баланс на счету</rt-ussd>\n\n        </div>\n        "}})],1),_vm._v(" "),_c('div',{staticClass:"rt-space-top25"},[_c('documentation-builder',{attrs:{"json":_vm.documentation,"type":"components"}})],1)])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"app-title"},[_c('h1',{staticClass:"rt-font-hero"},[_vm._v("\n        USSD\n      ")])])}]



/***/ }),

/***/ "./src/atoms/components/Ussd/docs/index.json":
/*!***************************************************!*\
  !*** ./src/atoms/components/Ussd/docs/index.json ***!
  \***************************************************/
/*! exports provided: items, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"items\":[{\"name\":\"rt-ussd\",\"property\":\"phone\",\"type\":\"String\",\"description\":\"Телефон\",\"value\":\"null\",\"version\":\"0.1.30\"},{\"name\":\"rt-ussd\",\"property\":\":without-left-space\",\"type\":\"Boolean\",\"description\":\"Флаг на отключение левого отступа\",\"value\":\"false\",\"version\":\"0.1.30\"},{\"name\":\"rt-ussd\",\"property\":\":check-after-time\",\"type\":\"Number\",\"description\":\"Время задержки на проверку внутреннего html компонента после рендера\",\"value\":\"0\",\"version\":\"0.1.44\"}]}");

/***/ }),

/***/ "./src/example-pages/components/simple/Ussd.vue":
/*!******************************************************!*\
  !*** ./src/example-pages/components/simple/Ussd.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Ussd_vue_vue_type_template_id_dad93048___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ussd.vue?vue&type=template&id=dad93048& */ "./src/example-pages/components/simple/Ussd.vue?vue&type=template&id=dad93048&");
/* harmony import */ var _Ussd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Ussd.vue?vue&type=script&lang=js& */ "./src/example-pages/components/simple/Ussd.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Ussd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Ussd_vue_vue_type_template_id_dad93048___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Ussd_vue_vue_type_template_id_dad93048___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/example-pages/components/simple/Ussd.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./src/example-pages/components/simple/Ussd.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Ussd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./Ussd.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/example-pages/components/simple/Ussd.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Ussd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/example-pages/components/simple/Ussd.vue?vue&type=template&id=dad93048&":
/*!*************************************************************************************!*\
  !*** ./src/example-pages/components/simple/Ussd.vue?vue&type=template&id=dad93048& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Ussd_vue_vue_type_template_id_dad93048___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Ussd.vue?vue&type=template&id=dad93048& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/example-pages/components/simple/Ussd.vue?vue&type=template&id=dad93048&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Ussd_vue_vue_type_template_id_dad93048___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Ussd_vue_vue_type_template_id_dad93048___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
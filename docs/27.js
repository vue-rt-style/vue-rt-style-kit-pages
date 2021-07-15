(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[27],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/example-pages/components/form/Switch.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/example-pages/components/form/Switch.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_rt_style_kit_atoms_local_components_Switch_docs_index_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue-rt-style-kit-atoms-local/components/Switch/docs/index.json */ "./src/atoms/components/Switch/docs/index.json");
var _vue_rt_style_kit_atoms_local_components_Switch_docs_index_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! @vue-rt-style-kit-atoms-local/components/Switch/docs/index.json */ "./src/atoms/components/Switch/docs/index.json", 1);
/* harmony import */ var _componentsList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../componentsList */ "./src/example-pages/componentsList.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: _componentsList__WEBPACK_IMPORTED_MODULE_1__["default"],
  data: function data() {
    return {
      documentation: {},
      color: 'orange',
      disabled: false,
      bright: false,
      invert: false
    };
  },
  mounted: function mounted() {
    this.documentation = _vue_rt_style_kit_atoms_local_components_Switch_docs_index_json__WEBPACK_IMPORTED_MODULE_0__;
  },
  created: function created() {},
  methods: {}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/example-pages/components/form/Switch.vue?vue&type=template&id=792250a8&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/example-pages/components/form/Switch.vue?vue&type=template&id=792250a8& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"rt-container"},[_c('div',{staticClass:"app-content rt-col-12 rt-col-md-3"},[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"app-body"},[_vm._m(1),_vm._v(" "),_c('div',{staticClass:"app-row row"},[_c('rt-col',{attrs:{"size":"2"}},[_c('p',[_vm._v("Color")]),_vm._v(" "),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.color),expression:"color"}],attrs:{"name":"","id":""},on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.color=$event.target.multiple ? $$selectedVal : $$selectedVal[0]}}},[_c('option',{attrs:{"value":"orange"}},[_vm._v("orange")]),_vm._v(" "),_c('option',{attrs:{"value":"purple"}},[_vm._v("purple")])])]),_vm._v(" "),_c('rt-col',{attrs:{"size":"2"}},[_c('p',[_vm._v("disabled")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.disabled),expression:"disabled"}],attrs:{"type":"checkbox"},domProps:{"checked":Array.isArray(_vm.disabled)?_vm._i(_vm.disabled,null)>-1:(_vm.disabled)},on:{"change":function($event){var $$a=_vm.disabled,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.disabled=$$a.concat([$$v]))}else{$$i>-1&&(_vm.disabled=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{_vm.disabled=$$c}}}})]),_vm._v(" "),_c('rt-col',{attrs:{"size":"2"}},[_c('p',[_vm._v("bright")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.bright),expression:"bright"}],attrs:{"type":"checkbox"},domProps:{"checked":Array.isArray(_vm.bright)?_vm._i(_vm.bright,null)>-1:(_vm.bright)},on:{"change":function($event){var $$a=_vm.bright,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.bright=$$a.concat([$$v]))}else{$$i>-1&&(_vm.bright=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{_vm.bright=$$c}}}})]),_vm._v(" "),_c('rt-col',{attrs:{"size":"2"}},[_c('p',[_vm._v("invert")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.invert),expression:"invert"}],attrs:{"type":"checkbox"},domProps:{"checked":Array.isArray(_vm.invert)?_vm._i(_vm.invert,null)>-1:(_vm.invert)},on:{"change":function($event){var $$a=_vm.invert,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.invert=$$a.concat([$$v]))}else{$$i>-1&&(_vm.invert=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{_vm.invert=$$c}}}})])],1),_vm._v(" "),_vm._m(2),_vm._v(" "),_c('div',{staticClass:"app-row row"},[_c('div',{staticClass:"rt-col"},[_c('rt-switch-v2',{attrs:{"id":"test11","disabled":_vm.disabled? true : false,"bright":_vm.bright,"invert":_vm.invert,"color":_vm.color}},[_vm._v("Интернет")])],1)]),_vm._v(" "),_vm._m(3),_vm._v(" "),_c('div',{staticClass:"app-row row"},[_c('rt-switch',{attrs:{"is-orange":true}},[_vm._v("Интернет")])],1),_vm._v(" "),_vm._m(4),_vm._v(" "),_c('div',{staticClass:"app-row row"},[_c('div',{staticClass:"rt-col"},[_c('rt-switch',{attrs:{"is-disabled":true}},[_vm._v("\n            Интернет\n          ")])],1)]),_vm._v(" "),_c('div',{staticClass:"app-row row rt-space-top"},[_c('documentation-builder',{attrs:{"json":_vm.documentation,"type":"components"}})],1)])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"app-title"},[_c('h1',{staticClass:"rt-font-hero"},[_vm._v("\n        Switch\n      ")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"app-row row"},[_c('p',{staticClass:"rt-font-h3 rt-col"},[_vm._v("\n          switch v2\n        ")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"app-row row"},[_c('label',{staticClass:"d-inline-block sp-b-4",attrs:{"for":"test11"}},[_c('p',[_vm._v("Отдельный лейбл для свитча")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"app-row row"},[_c('p',{staticClass:"rt-font-h3 rt-col"},[_vm._v("\n          switch v1\n        ")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"app-row row"},[_c('p',{staticClass:"rt-font-h3 rt-col"},[_vm._v("\n          disabled switch\n        ")])])}]



/***/ }),

/***/ "./src/atoms/components/Switch/docs/index.json":
/*!*****************************************************!*\
  !*** ./src/atoms/components/Switch/docs/index.json ***!
  \*****************************************************/
/*! exports provided: items, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"items\":[{\"name\":\"rt-switch\",\"property\":\":is-disabled\",\"type\":\"Boolean\",\"description\":\"Флаг установки неактивного состояния выключателя\",\"value\":\"false\"},{\"name\":\"rt-switch\",\"property\":\"value\",\"type\":\"String\",\"description\":\"Задаёт значение, которое передаётся, при выборе данного пункта, при отправке формы\",\"value\":\"\"},{\"name\":\"rt-switch\",\"property\":\"name\",\"type\":\"String\",\"description\":\"Задаёт атрибут `name` (аналогично логике чекбокса)\",\"value\":\"\"},{\"name\":\"rt-switch\",\"property\":\":checked\",\"type\":\"Boolean\",\"description\":\"Флаг для установки атрибута `checked` (аналогично логике чекбокса)\",\"value\":\"false\"}]}");

/***/ }),

/***/ "./src/example-pages/components/form/Switch.vue":
/*!******************************************************!*\
  !*** ./src/example-pages/components/form/Switch.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Switch_vue_vue_type_template_id_792250a8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Switch.vue?vue&type=template&id=792250a8& */ "./src/example-pages/components/form/Switch.vue?vue&type=template&id=792250a8&");
/* harmony import */ var _Switch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Switch.vue?vue&type=script&lang=js& */ "./src/example-pages/components/form/Switch.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Switch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Switch_vue_vue_type_template_id_792250a8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Switch_vue_vue_type_template_id_792250a8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/example-pages/components/form/Switch.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./src/example-pages/components/form/Switch.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Switch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./Switch.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/example-pages/components/form/Switch.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Switch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/example-pages/components/form/Switch.vue?vue&type=template&id=792250a8&":
/*!*************************************************************************************!*\
  !*** ./src/example-pages/components/form/Switch.vue?vue&type=template&id=792250a8& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Switch_vue_vue_type_template_id_792250a8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Switch.vue?vue&type=template&id=792250a8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/example-pages/components/form/Switch.vue?vue&type=template&id=792250a8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Switch_vue_vue_type_template_id_792250a8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Switch_vue_vue_type_template_id_792250a8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
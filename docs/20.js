(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/example-pages/components/form/Checkbox.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/example-pages/components/form/Checkbox.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_rt_style_kit_atoms_local_components_Checkbox_docs_index_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue-rt-style-kit-atoms-local/components/Checkbox/docs/index.json */ "./src/atoms/components/Checkbox/docs/index.json");
var _vue_rt_style_kit_atoms_local_components_Checkbox_docs_index_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! @vue-rt-style-kit-atoms-local/components/Checkbox/docs/index.json */ "./src/atoms/components/Checkbox/docs/index.json", 1);
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

 //  const componentsList = {};

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "AppCheckbox",
  components: _componentsList__WEBPACK_IMPORTED_MODULE_1__["default"],
  data: function data() {
    return {
      documentation: {},
      myModel: {
        internet: false,
        sms: false,
        voiceMessages: false,
        calls: true
      }
    };
  },
  mounted: function mounted() {
    this.documentation = _vue_rt_style_kit_atoms_local_components_Checkbox_docs_index_json__WEBPACK_IMPORTED_MODULE_0__;
  },
  created: function created() {},
  methods: {}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/example-pages/components/form/Checkbox.vue?vue&type=template&id=1c64e954&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/example-pages/components/form/Checkbox.vue?vue&type=template&id=1c64e954& ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:"rt-container"},[_c('div',{staticClass:"app-content rt-col-12 rt-col-md-3"},[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"app-body"},[_c('rt-row',{staticClass:"app-row"},[_c('p',{staticClass:"rt-font-h3 rt-col"},[_vm._v("\n\t\t\t\t\t\tcheckbox\n\t\t\t\t\t")])]),_vm._v(" "),_c('rt-row',{staticClass:"app-row"},[_c('rt-col',{attrs:{"size":4}},[_c('pre-code',{attrs:{"text":"<rt-checkbox :required=\"true\" name=\"internet\">Интернет</rt-checkbox>"}}),_vm._v(" "),_c('div',{staticClass:"rt-space-vertical"},[_c('pre-code',{attrs:{"text":"<rt-checkbox name=\"sms\">Смс</rt-checkbox>"}})],1),_vm._v(" "),_c('pre-code',{attrs:{"text":"<rt-checkbox name=\"voiseMessage\">Голосовая почта</rt-checkbox>"}}),_vm._v(" "),_c('div',{staticClass:"rt-space-vertical"},[_c('pre-code',{attrs:{"text":"<rt-checkbox name=\"calls\" :checked=\"true\">Звонки</rt-checkbox>"}})],1),_vm._v(" "),_c('div',{staticClass:"rt-space-vertical"},[_c('pre-code',{attrs:{"text":"<rt-checkbox :is-disabled=\"true\">Интернет</rt-checkbox>"}})],1),_vm._v(" "),_c('div',{staticClass:"rt-space-vertical"},[_c('pre-code',{attrs:{"text":"<rt-checkbox :is-disabled=\"true\" :checked=\"true\">Интернет</rt-checkbox>"}})],1)],1),_vm._v(" "),_c('rt-col',{attrs:{"size":2}}),_vm._v(" "),_c('rt-col',{attrs:{"size":4}},[_c('pre-code',{attrs:{"text":"<rt-checkbox :is-orange=\"true\"  :required=\"true\" name=\"internet\">Интернет</rt-checkbox>"}}),_vm._v(" "),_c('div',{staticClass:"rt-space-vertical"},[_c('pre-code',{attrs:{"text":"<rt-checkbox :is-orange=\"true\" name=\"sms\">Смс</rt-checkbox>"}})],1),_vm._v(" "),_c('rt-checkbox',{attrs:{"is-orange":true,"name":"voiseMessage"}},[_vm._v("Голосовая почта")]),_vm._v(" "),_c('div',{staticClass:"rt-space-vertical"},[_c('pre-code',{attrs:{"text":"<rt-checkbox :is-orange=\"true\" name=\"calls\" :checked=\"true\">Звонки</rt-checkbox>"}})],1),_vm._v(" "),_c('div',{staticClass:"rt-space-vertical"},[_c('pre-code',{attrs:{"text":"<rt-checkbox :is-orange=\"true\" :is-disabled=\"true\">Интернет</rt-checkbox>"}})],1),_vm._v(" "),_c('div',{staticClass:"rt-space-vertical"},[_c('pre-code',{attrs:{"text":"<rt-checkbox :is-orange=\"true\" :is-disabled=\"true\" :checked=\"true\">Интернет</rt-checkbox>"}})],1)],1)],1)],1)])]),_vm._v(" "),_c('div',{staticClass:"color-block--dark-blue rt-space-vertical2"},[_c('div',{staticClass:"rt-container"},[_c('rt-col',{attrs:{"size":12}},[_c('rt-row',{staticClass:"app-row"},[_c('rt-col',{attrs:{"size":4}},[_c('pre-code',{attrs:{"text":"<rt-checkbox :bright=\"true\" :required=\"true\" name=\"internet\">Интернет</rt-checkbox>"}}),_vm._v(" "),_c('div',{staticClass:"rt-space-vertical"},[_c('pre-code',{attrs:{"text":"<rt-checkbox :bright=\"true\" name=\"sms\">Смс</rt-checkbox>"}})],1),_vm._v(" "),_c('pre-code',{attrs:{"text":"<rt-checkbox :bright=\"true\" name=\"voiseMessage\">Голосовая почта</rt-checkbox>"}}),_vm._v(" "),_c('div',{staticClass:"rt-space-vertical"},[_c('pre-code',{attrs:{"text":"<rt-checkbox :bright=\"true\" name=\"calls\" :checked=\"true\">Звонки</rt-checkbox>"}})],1),_vm._v(" "),_c('div',{staticClass:"rt-space-vertical"},[_c('pre-code',{attrs:{"text":"<rt-checkbox :bright=\"true\" :is-disabled=\"true\">Интернет</rt-checkbox>"}})],1),_vm._v(" "),_c('div',{staticClass:"rt-space-vertical"},[_c('pre-code',{attrs:{"text":"<rt-checkbox :bright=\"true\" :checked=\"true\" :is-disabled=\"true\">Интернет</rt-checkbox>"}})],1)],1),_vm._v(" "),_c('rt-col',{attrs:{"size":2}}),_vm._v(" "),_c('rt-col',{attrs:{"size":4}},[_c('pre-code',{attrs:{"text":"<rt-checkbox :bright=\"true\" :is-orange=\"true\" :required=\"true\" name=\"internet\">Интернет</rt-checkbox>"}}),_vm._v(" "),_c('div',{staticClass:"rt-space-vertical"},[_c('pre-code',{attrs:{"text":"<rt-checkbox :bright=\"true\" :is-orange=\"true\" name=\"sms\">Смс</rt-checkbox>"}})],1),_vm._v(" "),_c('rt-checkbox',{attrs:{"bright":true,"is-orange":true,"name":"voiseMessage"}},[_vm._v("Голосовая почта")]),_vm._v(" "),_c('div',{staticClass:"rt-space-vertical"},[_c('pre-code',{attrs:{"text":"<rt-checkbox :bright=\"true\" :is-orange=\"true\" name=\"calls\" :checked=\"true\">Звонки</rt-checkbox>"}})],1),_vm._v(" "),_c('div',{staticClass:"rt-space-vertical"},[_c('pre-code',{attrs:{"text":"<rt-checkbox :bright=\"true\" :is-disabled=\"true\">Интернет</rt-checkbox>"}})],1),_vm._v(" "),_c('div',{staticClass:"rt-space-vertical"},[_c('pre-code',{attrs:{"text":"<rt-checkbox :is-orange=\"true\" :checked=\"true\" :bright=\"true\" :is-disabled=\"true\">Интернет</rt-checkbox>"}})],1)],1)],1)],1)],1)]),_vm._v(" "),_c('div',{staticClass:"rt-container sp-v-2"},[_c('rt-col',{attrs:{"size":4}},[_c('h3',{staticClass:"sp-b-2"},[_vm._v("Dynamic test")]),_vm._v(" "),_c('div',{staticClass:"d-flex flex-column sp-b-1"},[_c('rt-checkbox',{attrs:{"checked":_vm.myModel.internet},on:{"change":function($event){_vm.myModel.internet = !_vm.myModel.internet}}},[_vm._v("Интернет")]),_vm._v(" "),_c('rt-checkbox',{attrs:{"checked":_vm.myModel.sms},on:{"change":function($event){_vm.myModel.sms = !_vm.myModel.sms}}},[_vm._v("SMS")]),_vm._v(" "),_c('rt-checkbox',{attrs:{"checked":_vm.myModel.voiceMessages},on:{"change":function($event){_vm.myModel.voiceMessages = !_vm.myModel.voiceMessages}}},[_vm._v("Голосовая почта")]),_vm._v(" "),_c('rt-checkbox',{attrs:{"required":true,"checked":_vm.myModel.calls},on:{"change":function($event){_vm.myModel.calls = !_vm.myModel.calls}}},[_vm._v("Звонки")])],1),_vm._v(" "),_c('pre',[_vm._v("Result myModel: "),_c('span',[_vm._v(_vm._s(_vm.myModel))])])])],1),_vm._v(" "),_c('div',{staticClass:"rt-container"},[_c('div',{staticClass:"app-row row rt-space-top"},[_c('documentation-builder',{attrs:{"json":_vm.documentation,"type":"components"}})],1)])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"app-title"},[_c('h1',{staticClass:"rt-font-hero"},[_vm._v("\n\t\t\t\t\tCheckbox\n\t\t\t\t")])])}]



/***/ }),

/***/ "./src/atoms/components/Checkbox/docs/index.json":
/*!*******************************************************!*\
  !*** ./src/atoms/components/Checkbox/docs/index.json ***!
  \*******************************************************/
/*! exports provided: items, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"items\":[{\"name\":\"rt-checkbox\",\"property\":\":is-disabled\",\"type\":\"Boolean\",\"description\":\"Делает чекбокс неактивным, так же, как атрибут `disabled`\",\"value\":\"false\"},{\"name\":\"rt-checkbox\",\"property\":\":is-orange\",\"type\":\"Boolean\",\"description\":\"Делает чекбокс ораньжевым\",\"value\":\"false\",\"version\":\"0.3.24\"},{\"name\":\"rt-checkbox\",\"property\":\":bright\",\"type\":\"Boolean\",\"description\":\"Отображает чекбокс как в темной теме\",\"value\":\"false\",\"version\":\"0.3.24\"},{\"name\":\"rt-checkbox\",\"property\":\":checked\",\"type\":\"Boolean\",\"description\":\"Предустановка - выбран по умолчанию\",\"value\":\"false\"},{\"name\":\"rt-checkbox\",\"property\":\"value\",\"type\":\"String\",\"description\":\"Значение, передаваемое с чекбокса, при отправке формы, содержащей данный чекбокс\",\"value\":\"\"},{\"name\":\"rt-checkbox\",\"property\":\"name\",\"type\":\"String\",\"description\":\"Устанавливает аттрибут name для кнопки\",\"value\":\"\"},{\"name\":\"rt-checkbox\",\"property\":\"uid\",\"type\":\"String\",\"description\":\"Устанавливает аттрибут id для кнопки\",\"value\":\"\"}]}");

/***/ }),

/***/ "./src/example-pages/components/form/Checkbox.vue":
/*!********************************************************!*\
  !*** ./src/example-pages/components/form/Checkbox.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Checkbox_vue_vue_type_template_id_1c64e954___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Checkbox.vue?vue&type=template&id=1c64e954& */ "./src/example-pages/components/form/Checkbox.vue?vue&type=template&id=1c64e954&");
/* harmony import */ var _Checkbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Checkbox.vue?vue&type=script&lang=js& */ "./src/example-pages/components/form/Checkbox.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Checkbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Checkbox_vue_vue_type_template_id_1c64e954___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Checkbox_vue_vue_type_template_id_1c64e954___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/example-pages/components/form/Checkbox.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./src/example-pages/components/form/Checkbox.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./Checkbox.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/example-pages/components/form/Checkbox.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/example-pages/components/form/Checkbox.vue?vue&type=template&id=1c64e954&":
/*!***************************************************************************************!*\
  !*** ./src/example-pages/components/form/Checkbox.vue?vue&type=template&id=1c64e954& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkbox_vue_vue_type_template_id_1c64e954___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Checkbox.vue?vue&type=template&id=1c64e954& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/example-pages/components/form/Checkbox.vue?vue&type=template&id=1c64e954&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkbox_vue_vue_type_template_id_1c64e954___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkbox_vue_vue_type_template_id_1c64e954___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/example-pages/components/complex/Youtube.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/example-pages/components/complex/Youtube.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_rt_style_kit_molecules_local_components_Youtube_docs_index_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue-rt-style-kit-molecules-local/components/Youtube/docs/index.json */ "./src/molecules/components/Youtube/docs/index.json");
var _vue_rt_style_kit_molecules_local_components_Youtube_docs_index_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! @vue-rt-style-kit-molecules-local/components/Youtube/docs/index.json */ "./src/molecules/components/Youtube/docs/index.json", 1);
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

 //  const componentsList = {};

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "AppYoutube",
  components: _componentsList__WEBPACK_IMPORTED_MODULE_1__["default"],
  data: function data() {
    return {
      documentation: {}
    };
  },
  mounted: function mounted() {
    this.documentation = _vue_rt_style_kit_molecules_local_components_Youtube_docs_index_json__WEBPACK_IMPORTED_MODULE_0__;
    document.querySelector('#button').addEventListener('click', function () {
      var iframe = document.querySelector('iframe');
      var requestFullScreen = iframe.requestFullScreen || iframe.mozRequestFullScreen || iframe.webkitRequestFullScreen;

      if (requestFullScreen) {
        requestFullScreen.bind(iframe)();
      }

      alert(requestFullScreen);
    });
  },
  created: function created() {},
  methods: {}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/example-pages/components/complex/Youtube.vue?vue&type=template&id=695c6af8&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/example-pages/components/complex/Youtube.vue?vue&type=template&id=695c6af8& ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:"rt-container"},[_c('div',{staticClass:"app-content rt-col-12 rt-col-md-3"},[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"app-body"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"rt-col-1 td-d-none"}),_vm._v(" "),_c('div',{staticClass:"rt-col-10 rt-col-td-6"},[_c('div',{attrs:{"id":"button"}},[_vm._v("->> fullscreen <<--")]),_vm._v(" "),_c('pre-code',{attrs:{"text":"<rt-youtube :start-index=\"[1,2,230,0]\" :utm-sources=\"['ab','ba','ca','ka']\" :video-id=\"['vOGhAV-84iI']\"/>"}})],1),_vm._v(" "),_c('div',{staticClass:"rt-col-1 td-d-none"})])])])]),_vm._v(" "),_c('rt-youtube',{attrs:{"height":"","playlist-id":['PLbAFXJC0J5GanbANaPaaWYB6Vdc_JPZ6n'],"disable-buttons":true}}),_vm._v(" "),_c('div',{staticClass:"rt-container rt-space-top25"},[_c('documentation-builder',{attrs:{"json":_vm.documentation,"type":"components"}})],1)],1)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"app-title"},[_c('h1',{staticClass:"rt-font-hero"},[_vm._v("\n          Youtube player\n        ")])])}]



/***/ }),

/***/ "./src/example-pages/components/complex/Youtube.vue":
/*!**********************************************************!*\
  !*** ./src/example-pages/components/complex/Youtube.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Youtube_vue_vue_type_template_id_695c6af8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Youtube.vue?vue&type=template&id=695c6af8& */ "./src/example-pages/components/complex/Youtube.vue?vue&type=template&id=695c6af8&");
/* harmony import */ var _Youtube_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Youtube.vue?vue&type=script&lang=js& */ "./src/example-pages/components/complex/Youtube.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Youtube_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Youtube_vue_vue_type_template_id_695c6af8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Youtube_vue_vue_type_template_id_695c6af8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/example-pages/components/complex/Youtube.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./src/example-pages/components/complex/Youtube.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Youtube_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./Youtube.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/example-pages/components/complex/Youtube.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Youtube_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/example-pages/components/complex/Youtube.vue?vue&type=template&id=695c6af8&":
/*!*****************************************************************************************!*\
  !*** ./src/example-pages/components/complex/Youtube.vue?vue&type=template&id=695c6af8& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Youtube_vue_vue_type_template_id_695c6af8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Youtube.vue?vue&type=template&id=695c6af8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/example-pages/components/complex/Youtube.vue?vue&type=template&id=695c6af8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Youtube_vue_vue_type_template_id_695c6af8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Youtube_vue_vue_type_template_id_695c6af8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/molecules/components/Youtube/docs/index.json":
/*!**********************************************************!*\
  !*** ./src/molecules/components/Youtube/docs/index.json ***!
  \**********************************************************/
/*! exports provided: items, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"items\":[{\"name\":\"rt-youtube\",\"property\":\":video-id\",\"type\":\"Array\",\"description\":\"Индентификатор видео на youtube.com\",\"value\":\"null\"},{\"name\":\"rt-youtube\",\"property\":\":start-index\",\"type\":\"Array\",\"description\":\"Указывает какое видео из списка должно быть воспроизведено\",\"value\":\"null\"},{\"name\":\"rt-youtube\",\"property\":\"height\",\"type\":\"String\",\"description\":\"Задаёт высоту изображения, которое отображается во время установки плеера на паузу\",\"value\":\"\"},{\"name\":\"rt-youtube\",\"property\":\":playlist-id\",\"type\":\"Array\",\"description\":\"Индентификатор списка воспроизведения на youtube.com. Может принимать список идентификаторов\",\"value\":\"null\"},{\"name\":\"rt-youtube\",\"property\":\"utm-sources\",\"type\":\"Array\",\"description\":\"Список utm-меток для отслеживания прехода\",\"value\":\"null\"},{\"name\":\"rt-youtube\",\"property\":\"pause-image\",\"type\":\"String\",\"description\":\"Задаёт изображение, которое отображается во время установки плеера на паузу\",\"value\":\"\"},{\"name\":\"rt-youtube\",\"property\":\"disable-buttons\",\"type\":\"Boolean\",\"description\":\"Флаг запрета управления воспроизведением видео при помощи клавиатуры\",\"value\":\"false\"}]}");

/***/ })

}]);
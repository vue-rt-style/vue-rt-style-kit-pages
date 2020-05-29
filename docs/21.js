(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[21],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/example-pages/components/group/ScrollTabs.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/example-pages/components/group/ScrollTabs.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_rt_style_kit_molecules_src_components_ScrollTabs_docs_index_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-rt-style-kit-molecules/src/components/ScrollTabs/docs/index.json */ "./node_modules/vue-rt-style-kit-molecules/src/components/ScrollTabs/docs/index.json");
var vue_rt_style_kit_molecules_src_components_ScrollTabs_docs_index_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! vue-rt-style-kit-molecules/src/components/ScrollTabs/docs/index.json */ "./node_modules/vue-rt-style-kit-molecules/src/components/ScrollTabs/docs/index.json", 1);
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

 // const componentsList = {};

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "AppScrollTabs",
  components: _componentsList__WEBPACK_IMPORTED_MODULE_1__["default"],
  data: function data() {
    return {
      documentation: {}
    };
  },
  mounted: function mounted() {
    this.documentation = vue_rt_style_kit_molecules_src_components_ScrollTabs_docs_index_json__WEBPACK_IMPORTED_MODULE_0__;
  },
  created: function created() {},
  methods: {
    resize: function resize() {
      window.dispatchEvent(new Event("resize"));
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/example-pages/components/group/ScrollTabs.vue?vue&type=template&id=33458008&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/example-pages/components/group/ScrollTabs.vue?vue&type=template&id=33458008& ***!
  \************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"rt-container"},[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"app-content  rt-col-12 rt-col-md-3"},[_c('span',{on:{"click":_vm.resize}},[_c('rt-button',{staticClass:"rt-button-orange rt-button-small",staticStyle:{"position":"fixed","top":"140px","z-index":"999","right":"40px"}},[_vm._v("resize")])],1),_vm._v(" "),_c('pre-code',{attrs:{"text":"<div>\n    <div\n      class=\"color-block--red color-white\"\n    >\n      <rt-scroll-tabs\n        :has-fixed-js-node=\"true\"\n        class=\"rt-contaner rt-scroll-tab-header rt-space-horizontal\"\n        active-tabs-classname=\"rt-scroll-tab-header__item--active\"\n        tabs-classname=\"rt-scroll-tab-header__item\"\n        :top-padding=\"40\"\n      >\n        <div class=\"rt-scroll-tab-nav\">\n          <a class=\"rt-scroll-tab-header__item\" href=\"#one\">один</a>\n          <a class=\"rt-scroll-tab-header__item\" href=\"#two\">два</a>\n          <a class=\"rt-scroll-tab-header__item\" href=\"#three\">три</a>\n          <a class=\"rt-scroll-tab-header__item\" href=\"#four\">четыре</a>\n        </div>\n      </rt-scroll-tabs>\n    </div>\n    <div id=\"one\" class=\"color-block--orange\" style=\"height: 100vh\" >\n    </div>\n    <div\n      id=\"two\"\n      class=\"color-block--pink\"\n      style=\"height: 100vh; margin-top: 800px\"\n    >\n      <div\n        class=\"color-block--yellow rt-animate-opacity rt-space-horizontal sticked app-sticked\"\n      >\n        <rt-scroll-tabs\n          :hide-if-not-in-viewport=\"true\"\n          :has-fixed-js-node=\"true\"\n          class=\"rt-contaner rt-scroll-tab-header\"\n          active-tabs-classname=\"rt-scroll-tab-header__item--active\"\n          tabs-classname=\"rt-scroll-tab-header__item\"\n          :top-padding=\"40\"\n        >\n          <div class=\"rt-scroll-tab-nav\">\n            <a class=\"rt-scroll-tab-header__item\" href=\"#one\">one</a>\n            <a class=\"rt-scroll-tab-header__item\" href=\"#two\">two</a>\n            <a class=\"rt-scroll-tab-header__item\" href=\"#three\">three</a>\n            <a class=\"rt-scroll-tab-header__item\" href=\"#four\">four</a>\n          </div>\n        </rt-scroll-tabs>\n      </div>\n    </div>\n    <div id=\"three\" class=\"color-block--red\" style=\"height: 100vh\" >\n      <div\n        class=\"color-block--dark-blue color-white rt-space-horizontal rt-animate-opacity sticked app-sticked\"\n      >\n      <rt-scroll-tabs\n        :hide-if-not-in-viewport=\"true\"\n        :has-fixed-js-node=\"true\"\n        class=\"rt-contaner rt-scroll-tab-header\"\n        active-tabs-classname=\"rt-scroll-tab-header__item--active\"\n        tabs-classname=\"rt-scroll-tab-header__item\"\n        :top-padding=\"40\"\n      >\n        <div class=\"rt-scroll-tab-nav\">\n          <a class=\"rt-scroll-tab-header__item\" href=\"#one\">1</a>\n          <a class=\"rt-scroll-tab-header__item\" href=\"#two\">2</a>\n          <a class=\"rt-scroll-tab-header__item\" href=\"#three\">3</a>\n          <a class=\"rt-scroll-tab-header__item\" href=\"#four\">4</a>\n        </div>\n      </rt-scroll-tabs>\n      </div>\n    </div>\n    <div id=\"four\" class=\"color-block--purple\" style=\"height: 100vh\" >\n      <div\n        class=\"color-block--white rt-space-horizontal rt-animate-opacity sticked app-sticked\"\n      >\n        <rt-scroll-tabs\n          :hide-if-not-in-viewport=\"true\"\n          :has-fixed-js-node=\"true\"\n          class=\"rt-contaner rt-scroll-tab-header\"\n          active-tabs-classname=\"rt-scroll-tab-header__item--active\"\n          tabs-classname=\"rt-scroll-tab-header__item\"\n          :top-padding=\"40\"\n        >\n          <div class=\"rt-scroll-tab-nav\">\n            <a class=\"rt-scroll-tab-header__item\" href=\"#one\">one</a>\n            <a class=\"rt-scroll-tab-header__item\" href=\"#two\">two</a>\n            <a class=\"rt-scroll-tab-header__item\" href=\"#three\">three</a>\n            <a class=\"rt-scroll-tab-header__item\" href=\"#four\">four</a>\n          </div>\n        </rt-scroll-tabs>\n      </div>\n    </div>\n    </div>"}}),_vm._v(" "),_c('div',{staticClass:"rt-space-top25"},[_c('documentation-builder',{attrs:{"json":_vm.documentation,"type":"components"}})],1)],1)])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"app-content"},[_c('div',{staticClass:"rt-col-12 rt-col-td-6 rt-col-md-3"},[_c('div',{staticClass:"app-title"},[_c('h1',{staticClass:"rt-font-hero"},[_vm._v("Scroll tabs")])])])])}]



/***/ }),

/***/ "./node_modules/vue-rt-style-kit-molecules/src/components/ScrollTabs/docs/index.json":
/*!*******************************************************************************************!*\
  !*** ./node_modules/vue-rt-style-kit-molecules/src/components/ScrollTabs/docs/index.json ***!
  \*******************************************************************************************/
/*! exports provided: items, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"items\":[{\"name\":\"rt-scroll-tabs\",\"version\":\"0.1.20\",\"property\":\"has-fixed-js-node\",\"type\":[\"String\"],\"value\":\"null\",\"description\":\"Флаг для js отслеживания и установки `position:fixed`\"},{\"name\":\"rt-scroll-tabs\",\"property\":\":remove-base-tag\",\"type\":[\"Boolean\"],\"value\":\"false\",\"description\":\"Флаг для удаления meta base на странице\"},{\"name\":\"rt-scroll-tabs\",\"property\":\"active-tabs-classname\",\"type\":[\"String\"],\"value\":\"null\",\"description\":\"Класс активного элемента с якорем на таб\"},{\"name\":\"rt-scroll-tabs\",\"property\":\"tabs-classname\",\"type\":[\"String\"],\"value\":\"false\",\"description\":\"Класс элемента с якорем на таб\"},{\"name\":\"rt-scroll-tabs\",\"version\":\"0.1.20\",\"property\":\":top-padding\",\"type\":[\"Number\"],\"value\":\"80\",\"description\":\"Значение верхнего отступа от страницы `для has-fixed-js-node`\"},{\"name\":\"rt-scroll-tabs\",\"version\":\"0.1.20\",\"property\":\":hideIfNotInViewport\",\"type\":[\"boolean\"],\"value\":\"false\",\"description\":\"Скрытие элемента если он не 'приклеин' `для has-fixed-js-node`\"}]}");

/***/ }),

/***/ "./src/example-pages/components/group/ScrollTabs.vue":
/*!***********************************************************!*\
  !*** ./src/example-pages/components/group/ScrollTabs.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ScrollTabs_vue_vue_type_template_id_33458008___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ScrollTabs.vue?vue&type=template&id=33458008& */ "./src/example-pages/components/group/ScrollTabs.vue?vue&type=template&id=33458008&");
/* harmony import */ var _ScrollTabs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ScrollTabs.vue?vue&type=script&lang=js& */ "./src/example-pages/components/group/ScrollTabs.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ScrollTabs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ScrollTabs_vue_vue_type_template_id_33458008___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ScrollTabs_vue_vue_type_template_id_33458008___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/example-pages/components/group/ScrollTabs.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./src/example-pages/components/group/ScrollTabs.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ScrollTabs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./ScrollTabs.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/example-pages/components/group/ScrollTabs.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ScrollTabs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/example-pages/components/group/ScrollTabs.vue?vue&type=template&id=33458008&":
/*!******************************************************************************************!*\
  !*** ./src/example-pages/components/group/ScrollTabs.vue?vue&type=template&id=33458008& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ScrollTabs_vue_vue_type_template_id_33458008___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ScrollTabs.vue?vue&type=template&id=33458008& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/example-pages/components/group/ScrollTabs.vue?vue&type=template&id=33458008&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ScrollTabs_vue_vue_type_template_id_33458008___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ScrollTabs_vue_vue_type_template_id_33458008___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
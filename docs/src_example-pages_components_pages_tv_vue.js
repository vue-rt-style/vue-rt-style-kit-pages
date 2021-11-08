"use strict";
(self["webpackChunkvue_rt_style_kit_pages"] = self["webpackChunkvue_rt_style_kit_pages"] || []).push([["src_example-pages_components_pages_tv_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/example-pages/components/pages/tv.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/example-pages/components/pages/tv.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var componentsList = {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "AppRadioButton",
  components: componentsList,
  data: function data() {
    return {};
  },
  mounted: function mounted() {
    window.addEventListener('resize', function () {
      if (window.innerWidth <= 1024) {
        document.querySelector('.academy__header__mobile-menu').addEventListener('click', toggleMenu);
      } else {
        document.querySelector('.academy__header__mobile-menu').removeEventListener('click', toggleMenu);
      }
    });

    if (window.innerWidth <= 1024) {
      document.querySelector('.academy__header__mobile-menu').addEventListener('click', toggleMenu);
    }

    window.addEventListener('scroll', function () {
      if (window.pageYOffset > 1000) {
        document.querySelector('.up-button').classList.remove('up-button--hidden');
      } else {
        document.querySelector('.up-button').classList.add('up-button--hidden');
      }
    });

    function toggleMenu() {
      document.querySelector('.academy__header__mobile-menu__body').classList.toggle('academy__header__mobile-menu__body--active');
      document.querySelector('.academy__header__links').classList.toggle('academy__header__links--active');
      document.documentElement.classList.toggle('ovh');
      document.body.classList.toggle('ovh');
    }
  },
  created: function created() {},
  methods: {}
});

/***/ }),

/***/ "./src/example-pages/components/pages/tv.vue":
/*!***************************************************!*\
  !*** ./src/example-pages/components/pages/tv.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tv_vue_vue_type_template_id_1a3bfe5d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tv.vue?vue&type=template&id=1a3bfe5d& */ "./src/example-pages/components/pages/tv.vue?vue&type=template&id=1a3bfe5d&");
/* harmony import */ var _tv_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tv.vue?vue&type=script&lang=js& */ "./src/example-pages/components/pages/tv.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _tv_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _tv_vue_vue_type_template_id_1a3bfe5d___WEBPACK_IMPORTED_MODULE_0__.render,
  _tv_vue_vue_type_template_id_1a3bfe5d___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./src/example-pages/components/pages/tv.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./src/example-pages/components/pages/tv.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_tv_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./tv.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/example-pages/components/pages/tv.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_tv_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/example-pages/components/pages/tv.vue?vue&type=template&id=1a3bfe5d&":
/*!**********************************************************************************!*\
  !*** ./src/example-pages/components/pages/tv.vue?vue&type=template&id=1a3bfe5d& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tv_vue_vue_type_template_id_1a3bfe5d___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tv_vue_vue_type_template_id_1a3bfe5d___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tv_vue_vue_type_template_id_1a3bfe5d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./tv.vue?vue&type=template&id=1a3bfe5d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/example-pages/components/pages/tv.vue?vue&type=template&id=1a3bfe5d&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/example-pages/components/pages/tv.vue?vue&type=template&id=1a3bfe5d&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/example-pages/components/pages/tv.vue?vue&type=template&id=1a3bfe5d& ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"academy academy-program-page"},[_c('div',{staticClass:"academy__header d-flex sp-v-mint"},[_c('div',{staticClass:"rt-container"},[_c('div',{staticClass:"rt-col"},[_c('div',{staticClass:"d-flex d-space-between"},[_c('div',{staticClass:"academy__header__logo"},[_c('svg',{attrs:{"width":"100%","height":"100%","viewBox":"0 0 91 60","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"d":"M0.107132 0H12.7708V2.98225H3.496V6.81657H7.70533C11.3796 6.81657 14.055 8.84023 14.055 12.355C14.055 15.8698 11.4152 17.9645 7.70533 17.9645H0.107132V0ZM7.45562 14.9467C9.63163 14.9467 10.6661 13.9882 10.6661 12.3905C10.6661 10.7929 9.66731 9.83432 7.45562 9.83432H3.496V14.9822H7.45562V14.9467Z","fill":"#273A64"}}),_vm._v(" "),_c('path',{attrs:{"d":"M17.3726 5.25443H20.4761V13.6686L26.0409 5.25443H29.3941V18H26.2907V9.58579L20.7258 17.9645H17.3726V5.25443Z","fill":"#273A64"}}),_vm._v(" "),_c('path',{attrs:{"d":"M43.556 14.2722C43.556 16.6864 41.5584 18.3195 37.9555 18.3195C34.638 18.3195 32.89 16.5444 32.89 14.2012C32.89 13.5976 33.0327 12.9941 33.2111 12.6746L35.9578 13.5621C35.8865 13.7396 35.8151 13.9527 35.8151 14.2012C35.8151 15.2663 36.8853 15.8343 37.9912 15.8343C39.5607 15.8343 40.4525 15.1243 40.4525 14.1657C40.4525 13.2071 39.5964 12.6391 38.1695 12.6391H37.0993V10.0828H38.0625C39.4537 10.0828 40.0602 9.5148 40.0602 8.69823C40.0602 7.91717 39.4894 7.42012 38.2765 7.42012C36.9923 7.42012 36.1719 7.91717 36.1719 8.52072C36.1719 8.73373 36.2075 8.84024 36.2432 8.98225L33.4964 9.90533C33.3538 9.47929 33.2467 9.12427 33.2467 8.62722C33.2467 6.60356 35.066 4.89941 38.3122 4.89941C41.6297 4.89941 43.0923 6.35503 43.0923 8.3077C43.0923 9.83432 42.2362 10.7574 40.9163 11.2544C42.4502 11.6805 43.556 12.6746 43.556 14.2722Z","fill":"#273A64"}}),_vm._v(" "),_c('path',{attrs:{"d":"M46.8734 5.25443H50.1196V10.0118H55.4348V5.25443H58.681V18H55.4348V12.8166H50.1196V17.9645H46.8734V5.25443Z","fill":"#273A64"}}),_vm._v(" "),_c('path',{attrs:{"d":"M68.5265 15.5503C70.2388 15.5503 70.9879 14.8047 71.7727 13.8107L74.3411 15.0888C73.0569 17.2544 71.2733 18.3195 68.4552 18.3195C64.888 18.3195 61.8915 15.6213 61.8915 11.6095C61.8915 7.59764 64.9236 4.89941 68.6335 4.89941C72.3078 4.89941 74.8762 7.52663 74.8762 11.2544V12.3905H65.0306C65.209 14.3432 66.6002 15.5503 68.5265 15.5503ZM65.0663 9.90533H71.844C71.523 8.3077 70.3101 7.34912 68.5265 7.34912C66.8143 7.34912 65.5301 8.48521 65.0663 9.90533Z","fill":"#273A64"}}),_vm._v(" "),_c('path',{attrs:{"d":"M84.0798 18.3195C80.2985 18.3195 77.3377 15.6568 77.3377 11.6095C77.3377 7.56214 80.4412 4.89941 84.0798 4.89941C86.8622 4.89941 88.8955 6.10651 89.823 8.09468L87.0406 9.69231C86.2558 8.48521 85.2213 7.95267 84.0798 7.95267C82.1891 7.95267 80.6909 9.40829 80.6909 11.645C80.6909 13.9172 82.1535 15.3373 84.0798 15.3373C85.685 15.3373 86.5055 14.5562 87.2903 13.4911L89.9657 14.9467C88.6458 17.1124 86.7909 18.3195 84.0798 18.3195Z","fill":"#273A64"}}),_vm._v(" "),_c('path',{attrs:{"d":"M0 51.8343H1.42689C1.96198 50.8758 2.39004 49.7042 2.49706 47.3965L2.81811 42.0355H12.842V51.8343H14.7683V57.7278H11.8432V54.7456H2.92513V57.7278H0V51.8343ZM9.59585 51.8343V44.9468H5.5292L5.38652 47.503C5.24383 49.8817 5.02979 50.8758 4.49471 51.8343H9.59585Z","fill":"#273A64"}}),_vm._v(" "),_c('path',{attrs:{"d":"M21.0823 42.0355V43.8462C21.9384 42.6036 23.5793 41.6805 25.5056 41.6805C28.7161 41.6805 31.3916 44.1657 31.3916 48.3905C31.3916 52.4734 28.6448 55.1006 25.2203 55.1006C23.401 55.1006 22.0097 54.3195 21.0823 53.1834V60H17.8361V42.0355H21.0823ZM20.8682 48.3905C20.8682 50.4852 22.4021 52.0828 24.4711 52.0828C26.5758 52.0828 28.074 50.4497 28.074 48.3905C28.074 46.2959 26.5401 44.6982 24.4711 44.6982C22.4021 44.6982 20.8682 46.3314 20.8682 48.3905Z","fill":"#273A64"}}),_vm._v(" "),_c('path',{attrs:{"d":"M42.557 52.7219C41.6652 54.3195 40.0956 55.1006 38.2763 55.1006C35.7436 55.1006 33.96 53.5385 33.96 51.1243C33.96 48.5325 35.9219 47.3609 38.526 47.0059L42.3786 46.4734V45.8343C42.3786 44.5917 41.5938 43.9171 39.9886 43.9171C38.5617 43.9171 37.7412 44.5562 37.7412 45.3728C37.7412 45.4793 37.7412 45.6213 37.7769 45.7278L34.7091 46.0473C34.6734 45.8343 34.6734 45.5503 34.6734 45.3728C34.6734 43.3846 36.6711 41.645 40.0243 41.645C43.5915 41.645 45.6605 43.1716 45.6605 46.2603V51.5858C45.6605 52.9704 45.8032 53.858 46.0885 54.7456H42.878C42.664 54.2485 42.557 53.574 42.557 52.7219ZM42.3786 48.9586V48.71L39.2751 49.1361C37.8839 49.3491 37.1348 49.8461 37.1348 50.9467C37.1348 51.9763 37.9553 52.4734 38.9541 52.4734C40.8447 52.5089 42.3786 51.4083 42.3786 48.9586Z","fill":"#273A64"}}),_vm._v(" "),_c('path',{attrs:{"d":"M49.4417 42.0355H52.5452V50.4142L58.1101 42H61.4633V54.7456H58.3598V46.3669L52.7949 54.7456H49.4417V42.0355ZM52.5095 37.9527H54.4715C54.4715 38.5562 54.8282 39.0533 55.4703 39.0533C56.0768 39.0533 56.4335 38.5562 56.4335 37.9527H58.3955C58.3955 39.6213 57.2183 40.8639 55.4703 40.8639C53.7224 40.8639 52.5095 39.6213 52.5095 37.9527Z","fill":"#273A64"}}),_vm._v(" "),_c('path',{attrs:{"d":"M65.3515 42.0355H71.3088C74.1983 42.0355 75.7678 43.4201 75.7678 45.1953C75.7678 46.6864 75.0187 47.4675 73.8772 48.0355C75.2328 48.4261 76.2673 49.3846 76.2673 51.0533C76.2673 53.29 74.2696 54.7811 71.6299 54.7811H65.3872V42.0355H65.3515ZM71.0234 46.8994C72.1649 46.8994 72.7 46.5799 72.7 45.6923C72.7 44.8048 72.1649 44.4852 71.0234 44.4852H68.562V46.8994H71.0234ZM71.1661 52.2959C72.5217 52.2959 73.0211 51.6923 73.0211 50.8048C73.0211 49.9172 72.5217 49.3491 71.1661 49.3491H68.562V52.2604H71.1661V52.2959Z","fill":"#273A64"}}),_vm._v(" "),_c('path',{attrs:{"d":"M90.4292 23.4675C89.9655 23.1124 89.2877 23.1834 88.6099 23.1834C84.5076 23.3255 80.441 23.3965 76.3743 23.3965C73.4849 23.3965 70.5954 23.645 67.706 23.645C60.9639 23.645 54.2575 24.0355 47.5511 24.1065C41.5225 24.142 35.4582 24.355 29.3939 24.355C25.47 24.355 21.5817 23.9645 17.6578 24.142C14.3402 23.858 11.0227 24.071 7.7052 24.1775C5.74322 24.2485 3.7099 24 1.7836 24.355C0.463723 24.6391 0.285362 25.2781 0.24969 25.9527C0.214017 26.5562 0.428051 27.1953 0.24969 27.7988C-0.249722 29.574 0.285362 31.3491 0.142673 33.0888C0.107001 33.3728 0.0356561 33.6568 0.107001 33.9408C0.285362 34.9349 0.713429 35.0769 2.71108 34.8284C2.85377 34.8284 2.99645 34.7929 3.17482 34.7929C10.452 34.4379 17.6934 34.2959 24.9706 34.5089C30.2501 34.6509 35.4939 34.7574 40.7734 34.5089C44.0909 34.3669 47.4084 34.2604 50.726 34.1539C56.4692 33.9408 62.2481 34.0473 67.9913 33.3728C71.8083 32.9468 75.8036 32.7692 79.7275 32.5562C81.5825 32.4497 83.3661 32.1657 85.114 31.7752C85.5064 31.7752 86.1485 31.7041 86.1129 31.5976C85.9702 30.8876 87.3614 30.9586 87.7538 30.5325C89.5731 29.929 90.4292 29.0769 90.3222 27.9053C90.2865 27.5148 90.6432 27.0888 90.7146 26.6627C90.9643 25.6331 91.321 24.497 90.4292 23.4675Z","fill":"#FF4F12"}})])]),_vm._v(" "),_vm._m(0),_vm._v(" "),_c('div',{staticClass:"academy__header__button flex-center-center td-d-none"},[_c('rt-button',{attrs:{"color":"orange-border","href":"#"}},[_vm._v("Войти на платформу")])],1),_vm._v(" "),_c('div',{staticClass:"d-none td-d-flex flex-center-center"},[_c('div',{staticClass:"academy__header__button flex-center-center"},[_c('rt-button',{attrs:{"color":"orange-border","href":"#"}},[_vm._v("Войти на платформу")])],1),_vm._v(" "),_vm._m(1)])])])])]),_vm._v(" "),_c('div',{staticClass:"sp-t-4 td-sp-t-3-1 md-sp-t-none"}),_vm._v(" "),_c('div',{staticClass:"academy__program relative"},[_c('div',{staticClass:"rt-container"},[_c('div',{staticClass:"rt-col"},[_c('div',{staticClass:"color-block--cool-grey sp-v-orange"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"rt-col-1 td-d-none"}),_vm._v(" "),_c('div',{staticClass:"rt-col-10 rt-col-td-6"},[_c('p',{staticClass:"tagline sp-b-x4"},[_vm._v("Бизнес драйв Академия")]),_vm._v(" "),_c('h2',{staticClass:"rt-font-h1 sp-b-1 td-sp-b-0-4 md-sp-b-1"},[_vm._v("Программа курса")]),_vm._v(" "),_c('p',{staticClass:"font-t-l program-custom-color sp-b-1"},[_vm._v("Ознакомьтесь с программой, основными темами курса и начните учиться бесплатно.")]),_vm._v(" "),_c('div',{staticClass:"d-flex d-space-between sp-b-4 md-flex-column-reverse md-d-inline-flex md-sp-b-2"},[_c('rt-button',{attrs:{"color":"orange"}},[_vm._v("Начать учиться бесплатно")]),_vm._v(" "),_vm._m(2)],1)]),_vm._v(" "),_c('div',{staticClass:"rt-col-1 td-d-none"})]),_vm._v(" "),_vm._m(3)])])])]),_vm._v(" "),_c('div',{staticClass:"custom-padding-top custom-padding-bottom"},[_c('div',{staticClass:"rt-container"},[_c('div',{staticClass:"rt-col"},[_c('div',{staticClass:"row sp-b-2-2"},[_vm._m(4),_vm._v(" "),_c('div',{staticClass:"rt-col-3 rt-col-td-3 rt-col-md-3"},[_c('div',{staticClass:"academy__concept__item sp-r-1"},[_c('div',{staticClass:"academy__concept__item__icon"},[_c('svg',{attrs:{"width":"80","height":"80","viewBox":"0 0 80 80","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"d":"M69.3333 40.6667C69.3333 56.4988 56.4988 69.3333 40.6667 69.3333C24.8345 69.3333 12 56.4988 12 40.6667C12 24.8345 24.8345 12 40.6667 12C56.4988 12 69.3333 24.8345 69.3333 40.6667Z","fill":"#FA6C3B"}}),_vm._v(" "),_c('rect',{attrs:{"x":"39.291","y":"9.3335","width":"5.16491","height":"1.29123","transform":"rotate(90 39.291 9.3335)","fill":"white"}}),_vm._v(" "),_c('rect',{attrs:{"x":"39.291","y":"61.5649","width":"5.16491","height":"1.29123","transform":"rotate(90 39.291 61.5649)","fill":"white"}}),_vm._v(" "),_c('rect',{attrs:{"x":"10","y":"36.7197","width":"5.16491","height":"1.29123","fill":"white"}}),_vm._v(" "),_c('rect',{attrs:{"x":"62.2317","y":"36.7197","width":"5.16491","height":"1.29123","fill":"white"}}),_vm._v(" "),_c('rect',{attrs:{"x":"53.7881","y":"13.3057","width":"5.16491","height":"1.29123","transform":"rotate(119.661 53.7881 13.3057)","fill":"white"}}),_vm._v(" "),_c('rect',{attrs:{"x":"27.9404","y":"58.6929","width":"5.16491","height":"1.29123","transform":"rotate(119.661 27.9404 58.6929)","fill":"white"}}),_vm._v(" "),_c('rect',{attrs:{"x":"63.3142","y":"23.7832","width":"5.16491","height":"1.29123","transform":"rotate(149.879 63.3142 23.7832)","fill":"white"}}),_vm._v(" "),_c('rect',{attrs:{"x":"18.1357","y":"49.9946","width":"5.16491","height":"1.29123","transform":"rotate(149.879 18.1357 49.9946)","fill":"white"}}),_vm._v(" "),_c('rect',{attrs:{"x":"63.3281","y":"53.103","width":"5.16491","height":"1.29123","transform":"rotate(-148.652 63.3281 53.103)","fill":"white"}}),_vm._v(" "),_c('rect',{attrs:{"x":"18.7214","y":"25.9302","width":"5.16491","height":"1.29123","transform":"rotate(-148.652 18.7214 25.9302)","fill":"white"}}),_vm._v(" "),_c('rect',{attrs:{"x":"52.2087","y":"63.3003","width":"5.16491","height":"1.29123","transform":"rotate(-119.385 52.2087 63.3003)","fill":"white"}}),_vm._v(" "),_c('rect',{attrs:{"x":"26.5798","y":"17.7886","width":"5.16491","height":"1.29123","transform":"rotate(-119.385 26.5798 17.7886)","fill":"white"}}),_vm._v(" "),_c('circle',{attrs:{"cx":"38.6667","cy":"38.0002","r":"28.6667","stroke":"white","stroke-width":"2"}}),_vm._v(" "),_c('rect',{attrs:{"x":"29.3684","y":"31.27","width":"12.0788","height":"1.29123","transform":"rotate(32.9286 29.3684 31.27)","fill":"white"}}),_vm._v(" "),_c('rect',{attrs:{"x":"53.3699","y":"30.4468","width":"17.4061","height":"1.29123","transform":"rotate(149.585 53.3699 30.4468)","fill":"white"}}),_vm._v(" "),_c('circle',{attrs:{"cx":"39.0279","cy":"38.3402","r":"2.33333","fill":"white"}})])]),_vm._v(" "),_c('h4',{staticClass:"rt-font-h4 sp-t-darkorange"},[_vm._v("13 тем и 25 уроков")]),_vm._v(" "),_c('p',{staticClass:"sp-t-blue font-t-m color-main07"},[_vm._v("Программа состоит из 13 тем и 25 уроков. Каждый урок –\n                это 20-30 минут вашего внимания.  Уделяйте каждый день комфортное время на обучение")])])]),_vm._v(" "),_c('div',{staticClass:"rt-col-3 rt-col-td-3 rt-col-md-3"},[_c('div',{staticClass:"academy__concept__item sp-r-1"},[_c('div',{staticClass:"academy__concept__item__icon"},[_c('svg',{attrs:{"width":"80","height":"80","viewBox":"0 0 80 80","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"d":"M63.0438 63.3333H18.2895C13.7113 63.3333 10 59.622 10 55.0438H13.8983V24C13.8983 20.6863 16.5846 18 19.8983 18H60.9153C64.229 18 66.9153 20.6863 66.9153 24V55.0438H71.3333C71.3333 59.622 67.622 63.3333 63.0438 63.3333Z","fill":"#FA6C3B"}}),_vm._v(" "),_c('rect',{attrs:{"x":"31.3333","y":"26.6665","width":"27.3333","height":"1.33333","fill":"white"}}),_vm._v(" "),_c('rect',{attrs:{"x":"31.3333","y":"34.6665","width":"27.3333","height":"1.33333","fill":"white"}}),_vm._v(" "),_c('rect',{attrs:{"x":"31.3333","y":"42.6665","width":"27.3333","height":"1.33333","fill":"white"}}),_vm._v(" "),_c('path',{attrs:{"d":"M11.8983 53.0438H8V53.3333C8 57.7516 11.5817 61.3333 16 61.3333H61.3333C65.7516 61.3333 69.3333 57.7516 69.3333 53.3333V53.0438H64.9153M11.8983 53.0438H31.9096L35.2881 56.4114H42.0452L45.4237 53.0438H64.9153M11.8983 53.0438V24C11.8983 19.5817 15.48 16 19.8983 16H56.9153C61.3335 16 64.9153 19.5817 64.9153 24V53.0438","stroke":"white","stroke-width":"2"}}),_vm._v(" "),_c('path',{attrs:{"d":"M19.3333 25.6668L21.9999 28.3335L26.6666 23.3335","stroke":"white","stroke-width":"2"}}),_vm._v(" "),_c('path',{attrs:{"d":"M19.3333 33.6668L21.9999 36.3335L26.6666 31.3335","stroke":"white","stroke-width":"2"}}),_vm._v(" "),_c('path',{attrs:{"d":"M19.3333 41.6668L21.9999 44.3335L26.6666 39.3335","stroke":"white","stroke-width":"2"}})])]),_vm._v(" "),_c('h4',{staticClass:"rt-font-h4 sp-t-darkorange"},[_vm._v("Закрепление материала")]),_vm._v(" "),_c('p',{staticClass:"sp-t-blue font-t-m color-main07"},[_vm._v("В конце каждой темы вы найдете краткий конспект с\n                основной информацией и несколько вопросов для закрепления материала.")])])]),_vm._v(" "),_c('div',{staticClass:"rt-col-3 rt-col-td-3 rt-col-md-3 sp-t-mint"},[_c('div',{staticClass:"academy__concept__item sp-r-1"},[_c('div',{staticClass:"academy__concept__item__icon"},[_c('svg',{attrs:{"width":"80","height":"80","viewBox":"0 0 80 80","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_c('rect',{attrs:{"x":"10","y":"19.3335","width":"54.6667","height":"35.3333","rx":"6","fill":"#FA6C3B"}}),_vm._v(" "),_c('rect',{attrs:{"x":"16","y":"25.3335","width":"38.6667","height":"1.33333","fill":"white"}}),_vm._v(" "),_c('rect',{attrs:{"x":"16","y":"41.3335","width":"23.3333","height":"1.33333","fill":"white"}}),_vm._v(" "),_c('rect',{attrs:{"x":"16","y":"33.3335","width":"28","height":"1.33333","fill":"white"}}),_vm._v(" "),_c('rect',{attrs:{"x":"8","y":"17.3335","width":"54.6667","height":"35.3333","rx":"8","stroke":"white","stroke-width":"2"}}),_vm._v(" "),_c('circle',{attrs:{"cx":"55.6667","cy":"47","r":"15","fill":"white"}}),_vm._v(" "),_c('path',{attrs:{"d":"M71.9994 48.9524C71.9994 57.2629 65.2624 63.9999 56.9519 63.9999C48.6413 63.9999 41.9043 57.2629 41.9043 48.9524C41.9043 40.6418 48.6413 33.9048 56.9519 33.9048C65.2624 33.9048 71.9994 40.6418 71.9994 48.9524Z","fill":"#FA6C3B"}}),_vm._v(" "),_c('circle',{attrs:{"cx":"55.6667","cy":"47","r":"15","stroke":"white","stroke-width":"2"}}),_vm._v(" "),_c('path',{attrs:{"d":"M59.8333 46.8006C60.4999 47.1855 60.4999 48.1478 59.8333 48.5327L54.3333 51.7081C53.6666 52.093 52.8333 51.6119 52.8333 50.8421L52.8333 44.4912C52.8333 43.7214 53.6666 43.2403 54.3333 43.6252L59.8333 46.8006Z","fill":"white","stroke":"white","stroke-width":"2"}})])]),_vm._v(" "),_c('h4',{staticClass:"rt-font-h4 sp-t-darkorange"},[_vm._v("Видео или текст")]),_vm._v(" "),_c('p',{staticClass:"sp-t-blue font-t-m color-main07"},[_vm._v("Вы можете смотреть видео или читать текст, в\n                зависимости от того, что вам удобней.")])])]),_vm._v(" "),_c('div',{staticClass:"rt-col-3 rt-col-td-3 rt-col-md-3 sp-t-mint"},[_c('div',{staticClass:"academy__concept__item sp-r-1"},[_c('div',{staticClass:"academy__concept__item__icon"},[_c('svg',{attrs:{"width":"80","height":"80","viewBox":"0 0 80 80","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"d":"M58.4419 53.9998H17.5581C13.3839 53.9998 10 50.616 10 46.4417H13.5593V18.6665C13.5593 15.3528 16.2456 12.6665 19.5593 12.6665H55.9661C59.2798 12.6665 61.9661 15.3528 61.9661 18.6665V46.4417H66C66 50.616 62.6161 53.9998 58.4419 53.9998Z","fill":"#FA6C3B"}}),_vm._v(" "),_c('path',{attrs:{"d":"M11.5593 44.4417H8V44.4417C8 48.616 11.3839 51.9998 15.5581 51.9998H56.4419C60.6161 51.9998 64 48.616 64 44.4417V44.4417H59.9661M11.5593 44.4417H29.8305L32.9153 47.5122H39.0847L42.1695 44.4417H59.9661M11.5593 44.4417V18.6665C11.5593 14.2482 15.141 10.6665 19.5593 10.6665H51.9661C56.3844 10.6665 59.9661 14.2482 59.9661 18.6665V44.4417","stroke":"white","stroke-width":"2"}}),_vm._v(" "),_c('rect',{attrs:{"x":"44.6667","y":"68","width":"39.3333","height":"22.6667","rx":"6","transform":"rotate(-90 44.6667 68)","fill":"white"}}),_vm._v(" "),_c('path',{attrs:{"d":"M54.6667 70C50.2485 70 46.6667 66.4183 46.6667 62L46.6667 36.6667C46.6667 33.353 49.353 30.6667 52.6667 30.6667H61.3334C65.7517 30.6667 69.3334 34.2484 69.3334 38.6667V62C69.3334 66.4183 65.7517 70 61.3334 70H54.6667Z","fill":"#FA6C3B"}}),_vm._v(" "),_c('rect',{attrs:{"x":"44.6667","y":"68","width":"39.3333","height":"22.6667","rx":"8","transform":"rotate(-90 44.6667 68)","stroke":"white","stroke-width":"2"}}),_vm._v(" "),_c('circle',{attrs:{"cx":"56.0001","cy":"62.6668","r":"1.33333","fill":"white"}}),_vm._v(" "),_c('circle',{attrs:{"cx":"16.6667","cy":"16.0002","r":"0.666667","fill":"white"}}),_vm._v(" "),_c('circle',{attrs:{"cx":"19.3334","cy":"16.0002","r":"0.666667","fill":"white"}}),_vm._v(" "),_c('circle',{attrs:{"cx":"21.9999","cy":"16.0002","r":"0.666667","fill":"white"}}),_vm._v(" "),_c('rect',{attrs:{"x":"16","y":"18.667","width":"44","height":"1.33333","fill":"white"}})])]),_vm._v(" "),_c('h4',{staticClass:"rt-font-h4 sp-t-darkorange"},[_vm._v("В приложении или на сайте")]),_vm._v(" "),_vm._m(5)])])]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('div',{staticClass:"rt-col"},[_c('div',{staticClass:"rt-font-center"},[_c('rt-button',{attrs:{"color":"orange","href":"#"}},[_vm._v("Начать учиться бесплатно")])],1)])])])])]),_vm._v(" "),_c('rt-sticky',{staticClass:"rt-sticky-bottom"},[_c('div',{staticClass:"rt-container"},[_c('div',{staticClass:"rt-col flex-end-center"},[_c('div',{staticClass:"up-button relative flex-center-center sp-v-0-2 sp-h-0-2 up-button--hidden"},[_c('span',{staticClass:"font-t-l sp-r-0-2"},[_vm._v("Наверх")]),_vm._v(" "),_c('rt-system-icons',{attrs:{"name":"arrow up","color":"dark-blue"}})],1)])])]),_vm._v(" "),_c('div',{staticClass:"academy__footer"},[_c('div',{staticClass:"rt-container sp-v-2"},[_c('div',{staticClass:"rt-col"},[_c('div',{staticClass:"row flex-center-center td-flex-column-reverse"},[_vm._m(6),_vm._v(" "),_c('div',{staticClass:"rt-col-4 td-d-none"}),_vm._v(" "),_c('div',{staticClass:"academy__footer__links flex-end-center rt-col-2 rt-col-td-6 td-flex-start-center"},[_c('div',{staticClass:"academy__footer__links__item"},[_c('svg',{staticClass:"d-flex",attrs:{"width":"36","height":"36","viewBox":"0 0 36 36","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"d":"M17.8029 35.6058C27.6352 35.6058 35.6058 27.6352 35.6058 17.8029C35.6058 7.97063 27.6352 0 17.8029 0C7.97063 0 0 7.97063 0 17.8029C0 27.6352 7.97063 35.6058 17.8029 35.6058Z","fill":"#101828","fill-opacity":"0.85"}}),_vm._v(" "),_c('path',{attrs:{"d":"M17.3688 24.9306H18.7577C18.7577 24.9306 19.1771 24.8853 19.3916 24.6594C19.5888 24.4517 19.5824 24.0618 19.5824 24.0618C19.5824 24.0618 19.5552 22.2364 20.4201 21.9675C21.2729 21.7025 22.3678 23.7317 23.5282 24.512C24.4057 25.1023 25.0727 24.9731 25.0727 24.9731L28.1758 24.9305C28.1758 24.9305 29.7989 24.8323 29.0292 23.5822C28.9662 23.4802 28.5808 22.6575 26.7219 20.9673C24.7759 19.1983 25.0369 19.4845 27.3807 16.4245C28.8081 14.561 29.3786 13.4233 29.2003 12.9362C29.0304 12.472 27.9805 12.5946 27.9805 12.5946L24.4867 12.6157C24.4867 12.6157 24.2275 12.5811 24.0356 12.6937C23.8477 12.8037 23.7273 13.0608 23.7273 13.0608C23.7273 13.0608 23.1741 14.5029 22.4368 15.7292C20.881 18.3168 20.2589 18.4538 20.0045 18.2929C19.4129 17.9183 19.5607 16.7887 19.5607 15.9858C19.5607 13.478 19.9491 12.4324 18.8045 12.1616C18.4247 12.0719 18.145 12.0124 17.1737 12.0029C15.927 11.9905 14.872 12.0066 14.2745 12.2933C13.877 12.4839 13.5704 12.9087 13.7572 12.9333C13.9882 12.9633 14.511 13.0716 14.7882 13.441C15.1464 13.9183 15.1338 14.9896 15.1338 14.9896C15.1338 14.9896 15.3395 17.9417 14.6533 18.3084C14.1825 18.5599 13.5364 18.0464 12.1494 15.6987C11.4387 14.496 10.9022 13.1666 10.9022 13.1666C10.9022 13.1666 10.7988 12.9183 10.6143 12.7852C10.3905 12.6242 10.0776 12.5731 10.0776 12.5731L6.75733 12.5944C6.75733 12.5944 6.25893 12.6081 6.07593 12.8203C5.913 13.0093 6.06299 13.3997 6.06299 13.3997C6.06299 13.3997 8.66219 19.3564 11.6055 22.3583C14.3046 25.1112 17.3688 24.9306 17.3688 24.9306Z","fill":"white","fill-opacity":"0.9"}})])]),_vm._v(" "),_c('div',{staticClass:"academy__footer__links__item"},[_c('svg',{staticClass:"d-flex",attrs:{"width":"36","height":"36","viewBox":"0 0 36 36","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_c('mask',{staticStyle:{"mask-type":"alpha"},attrs:{"id":"mask0","maskUnits":"userSpaceOnUse","x":"0","y":"0","width":"36","height":"36"}},[_c('path',{attrs:{"d":"M17.6909 36C27.3848 36 35.2432 28.1416 35.2432 18.4478C35.2432 8.75392 27.3848 0.895508 17.6909 0.895508C7.99708 0.895508 0.138672 8.75392 0.138672 18.4478C0.138672 28.1416 7.99708 36 17.6909 36Z","fill":"white"}})]),_vm._v(" "),_c('g',{attrs:{"mask":"url(#mask0)"}},[_c('path',{attrs:{"d":"M17.6909 36C27.3848 36 35.2432 28.1416 35.2432 18.4478C35.2432 8.75392 27.3848 0.895508 17.6909 0.895508C7.99708 0.895508 0.138672 8.75392 0.138672 18.4478C0.138672 28.1416 7.99708 36 17.6909 36Z","fill":"#101828","fill-opacity":"0.85"}})]),_vm._v(" "),_c('mask',{staticStyle:{"mask-type":"alpha"},attrs:{"id":"mask1","maskUnits":"userSpaceOnUse","x":"13","y":"6","width":"15","height":"30"}},[_c('path',{attrs:{"d":"M22.6416 35.9998V22.7064H26.9378L27.581 17.5257H22.6416V14.218C22.6416 12.7181 23.0426 11.6959 25.1136 11.6959L27.755 11.6947V7.06105C27.2981 6.99803 25.7302 6.85693 23.9061 6.85693C20.0978 6.85693 17.4907 9.27123 17.4907 13.7051V17.5257H13.1836V22.7064H17.4907V35.9998H22.6416Z","fill":"white"}})]),_vm._v(" "),_c('g',{attrs:{"mask":"url(#mask1)"}},[_c('path',{attrs:{"d":"M22.6416 35.9998V22.7064H26.9378L27.581 17.5257H22.6416V14.218C22.6416 12.7181 23.0426 11.6959 25.1136 11.6959L27.755 11.6947V7.06105C27.2981 6.99803 25.7302 6.85693 23.9061 6.85693C20.0978 6.85693 17.4907 9.27123 17.4907 13.7051V17.5257H13.1836V22.7064H17.4907V35.9998H22.6416Z","fill":"white","fill-opacity":"0.9"}})])])]),_vm._v(" "),_c('div',{staticClass:"academy__footer__links__item"},[_c('svg',{staticClass:"d-flex",attrs:{"width":"36","height":"36","viewBox":"0 0 36 36","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"d":"M17.8029 35.6058C27.6352 35.6058 35.6058 27.6352 35.6058 17.8029C35.6058 7.97063 27.6352 0 17.8029 0C7.97063 0 0 7.97063 0 17.8029C0 27.6352 7.97063 35.6058 17.8029 35.6058Z","fill":"#101828","fill-opacity":"0.85"}}),_vm._v(" "),_c('path',{attrs:{"d":"M17.8029 35.6058C27.6352 35.6058 35.6058 27.6352 35.6058 17.8029C35.6058 7.97063 27.6352 0 17.8029 0C7.97063 0 0 7.97063 0 17.8029C0 27.6352 7.97063 35.6058 17.8029 35.6058Z","fill":"#101828","fill-opacity":"0.85"}}),_vm._v(" "),_c('path',{attrs:{"d":"M14.1437 18.0001C14.1437 15.87 15.8701 14.1427 18.0004 14.1427C20.1306 14.1427 21.858 15.87 21.858 18.0001C21.858 20.1303 20.1306 21.8576 18.0004 21.8576C15.8701 21.8576 14.1437 20.1303 14.1437 18.0001ZM12.0583 18.0001C12.0583 21.2818 14.7186 23.9419 18.0004 23.9419C21.2821 23.9419 23.9424 21.2818 23.9424 18.0001C23.9424 14.7185 21.2821 12.0584 18.0004 12.0584C14.7186 12.0584 12.0583 14.7185 12.0583 18.0001ZM22.789 11.8228C22.7889 12.0974 22.8702 12.3659 23.0227 12.5943C23.1752 12.8227 23.392 13.0008 23.6457 13.106C23.8994 13.2112 24.1786 13.2388 24.448 13.1853C24.7174 13.1318 24.9649 12.9997 25.1591 12.8056C25.3534 12.6115 25.4858 12.3641 25.5395 12.0948C25.5931 11.8254 25.5658 11.5462 25.4608 11.2924C25.3558 11.0387 25.1779 10.8217 24.9496 10.6691C24.7213 10.5164 24.4528 10.4348 24.1782 10.4347H24.1776C23.8095 10.4349 23.4565 10.5812 23.1961 10.8414C22.9357 11.1017 22.7893 11.4546 22.789 11.8228ZM13.3253 27.419C12.1971 27.3676 11.5839 27.1797 11.1764 27.0209C10.6361 26.8106 10.2506 26.5601 9.84532 26.1554C9.44003 25.7507 9.18915 25.3656 8.97975 24.8253C8.82089 24.418 8.63296 23.8046 8.58167 22.6765C8.52557 21.4568 8.51437 21.0904 8.51437 18.0002C8.51437 14.9101 8.5265 14.5447 8.58167 13.324C8.63305 12.1958 8.82237 11.5836 8.97975 11.1751C9.19008 10.6349 9.44058 10.2494 9.84532 9.84413C10.2501 9.43886 10.6352 9.18799 11.1764 8.97859C11.5837 8.81974 12.1971 8.63182 13.3253 8.58053C14.5451 8.52444 14.9115 8.51323 18.0004 8.51323C21.0892 8.51323 21.456 8.52536 22.6768 8.58053C23.805 8.63191 24.4172 8.82122 24.8257 8.97859C25.366 9.18799 25.7515 9.43941 26.1568 9.84413C26.5621 10.2489 26.812 10.6349 27.0224 11.1751C27.1812 11.5824 27.3692 12.1958 27.4204 13.324C27.4765 14.5447 27.4877 14.9101 27.4877 18.0002C27.4877 21.0904 27.4765 21.4557 27.4204 22.6765C27.3691 23.8046 27.1802 24.4178 27.0224 24.8253C26.812 25.3656 26.5615 25.7511 26.1568 26.1554C25.752 26.5598 25.366 26.8106 24.8257 27.0209C24.4184 27.1798 23.805 27.3677 22.6768 27.419C21.457 27.4751 21.0906 27.4863 18.0004 27.4863C14.9101 27.4863 14.5447 27.4751 13.3253 27.419ZM13.2295 6.49879C11.9976 6.55489 11.1558 6.75021 10.4207 7.03626C9.65934 7.33165 9.01483 7.72795 8.37079 8.37095C7.72674 9.01395 7.33144 9.65945 7.03604 10.4208C6.74998 11.1563 6.55465 11.9976 6.49855 13.2295C6.44152 14.4633 6.42847 14.8577 6.42847 18.0001C6.42847 21.1426 6.44152 21.537 6.49855 22.7708C6.55465 24.0027 6.74998 24.8439 7.03604 25.5795C7.33144 26.3404 7.72683 26.9866 8.37079 27.6293C9.01474 28.2721 9.65934 28.6678 10.4207 28.964C11.1572 29.2501 11.9976 29.4454 13.2295 29.5015C14.464 29.5576 14.8578 29.5716 18.0004 29.5716C21.1429 29.5716 21.5374 29.5585 22.7712 29.5015C24.0032 29.4454 24.8444 29.2501 25.58 28.964C26.3409 28.6678 26.9859 28.2723 27.6299 27.6293C28.274 26.9863 28.6684 26.3404 28.9647 25.5795C29.2507 24.8439 29.447 24.0027 29.5022 22.7708C29.5583 21.5361 29.5713 21.1426 29.5713 18.0001C29.5713 14.8577 29.5583 14.4633 29.5022 13.2295C29.4461 11.9975 29.2507 11.1559 28.9647 10.4208C28.6684 9.65992 28.273 9.01497 27.6299 8.37095C26.9869 7.72693 26.3409 7.33165 25.581 7.03626C24.8444 6.75021 24.0031 6.55396 22.7721 6.49879C21.5383 6.44269 21.1438 6.42871 18.0013 6.42871C14.8587 6.42871 14.464 6.44176 13.2295 6.49879Z","fill":"white","fill-opacity":"0.9"}}),_vm._v(" "),_c('path',{attrs:{"d":"M14.1437 18.0001C14.1437 15.87 15.8701 14.1427 18.0004 14.1427C20.1306 14.1427 21.858 15.87 21.858 18.0001C21.858 20.1303 20.1306 21.8576 18.0004 21.8576C15.8701 21.8576 14.1437 20.1303 14.1437 18.0001ZM12.0583 18.0001C12.0583 21.2818 14.7186 23.9419 18.0004 23.9419C21.2821 23.9419 23.9424 21.2818 23.9424 18.0001C23.9424 14.7185 21.2821 12.0584 18.0004 12.0584C14.7186 12.0584 12.0583 14.7185 12.0583 18.0001ZM22.789 11.8228C22.7889 12.0974 22.8702 12.3659 23.0227 12.5943C23.1752 12.8227 23.392 13.0008 23.6457 13.106C23.8994 13.2112 24.1786 13.2388 24.448 13.1853C24.7174 13.1318 24.9649 12.9997 25.1591 12.8056C25.3534 12.6115 25.4858 12.3641 25.5395 12.0948C25.5931 11.8254 25.5658 11.5462 25.4608 11.2924C25.3558 11.0387 25.1779 10.8217 24.9496 10.6691C24.7213 10.5164 24.4528 10.4348 24.1782 10.4347H24.1776C23.8095 10.4349 23.4565 10.5812 23.1961 10.8414C22.9357 11.1017 22.7893 11.4546 22.789 11.8228ZM13.3253 27.419C12.1971 27.3676 11.5839 27.1797 11.1764 27.0209C10.6361 26.8106 10.2506 26.5601 9.84532 26.1554C9.44003 25.7507 9.18915 25.3656 8.97975 24.8253C8.82089 24.418 8.63296 23.8046 8.58167 22.6765C8.52557 21.4568 8.51437 21.0904 8.51437 18.0002C8.51437 14.9101 8.5265 14.5447 8.58167 13.324C8.63305 12.1958 8.82237 11.5836 8.97975 11.1751C9.19008 10.6349 9.44058 10.2494 9.84532 9.84413C10.2501 9.43886 10.6352 9.18799 11.1764 8.97859C11.5837 8.81974 12.1971 8.63182 13.3253 8.58053C14.5451 8.52444 14.9115 8.51323 18.0004 8.51323C21.0892 8.51323 21.456 8.52536 22.6768 8.58053C23.805 8.63191 24.4172 8.82122 24.8257 8.97859C25.366 9.18799 25.7515 9.43941 26.1568 9.84413C26.5621 10.2489 26.812 10.6349 27.0224 11.1751C27.1812 11.5824 27.3692 12.1958 27.4204 13.324C27.4765 14.5447 27.4877 14.9101 27.4877 18.0002C27.4877 21.0904 27.4765 21.4557 27.4204 22.6765C27.3691 23.8046 27.1802 24.4178 27.0224 24.8253C26.812 25.3656 26.5615 25.7511 26.1568 26.1554C25.752 26.5598 25.366 26.8106 24.8257 27.0209C24.4184 27.1798 23.805 27.3677 22.6768 27.419C21.457 27.4751 21.0906 27.4863 18.0004 27.4863C14.9101 27.4863 14.5447 27.4751 13.3253 27.419ZM13.2295 6.49879C11.9976 6.55489 11.1558 6.75021 10.4207 7.03626C9.65934 7.33165 9.01483 7.72795 8.37079 8.37095C7.72674 9.01395 7.33144 9.65945 7.03604 10.4208C6.74998 11.1563 6.55465 11.9976 6.49855 13.2295C6.44152 14.4633 6.42847 14.8577 6.42847 18.0001C6.42847 21.1426 6.44152 21.537 6.49855 22.7708C6.55465 24.0027 6.74998 24.8439 7.03604 25.5795C7.33144 26.3404 7.72683 26.9866 8.37079 27.6293C9.01474 28.2721 9.65934 28.6678 10.4207 28.964C11.1572 29.2501 11.9976 29.4454 13.2295 29.5015C14.464 29.5576 14.8578 29.5716 18.0004 29.5716C21.1429 29.5716 21.5374 29.5585 22.7712 29.5015C24.0032 29.4454 24.8444 29.2501 25.58 28.964C26.3409 28.6678 26.9859 28.2723 27.6299 27.6293C28.274 26.9863 28.6684 26.3404 28.9647 25.5795C29.2507 24.8439 29.447 24.0027 29.5022 22.7708C29.5583 21.5361 29.5713 21.1426 29.5713 18.0001C29.5713 14.8577 29.5583 14.4633 29.5022 13.2295C29.4461 11.9975 29.2507 11.1559 28.9647 10.4208C28.6684 9.65992 28.273 9.01497 27.6299 8.37095C26.9869 7.72693 26.3409 7.33165 25.581 7.03626C24.8444 6.75021 24.0031 6.55396 22.7721 6.49879C21.5383 6.44269 21.1438 6.42871 18.0013 6.42871C14.8587 6.42871 14.464 6.44176 13.2295 6.49879Z","fill":"white","fill-opacity":"0.9"}})])])])])])])])],1)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"academy__header__links flex-center-center td-pos-abs"},[_c('a',{staticClass:"academy__header__links__item",attrs:{"href":"#for-whom"}},[_vm._v("Для кого")]),_vm._v(" "),_c('a',{staticClass:"academy__header__links__item",attrs:{"href":"#benefits"}},[_vm._v("Наши преимущества")]),_vm._v(" "),_c('a',{staticClass:"academy__header__links__item",attrs:{"href":"#tabs"}},[_vm._v("Что вы узнаете")]),_vm._v(" "),_c('a',{staticClass:"academy__header__links__item",attrs:{"href":"#carousel"}},[_vm._v("Преподаватели")]),_vm._v(" "),_c('a',{staticClass:"academy__header__links__item",attrs:{"href":"#program"}},[_vm._v("Программа")]),_vm._v(" "),_c('a',{staticClass:"academy__header__links__item",attrs:{"href":"#concept"}},[_vm._v("Как устроен курс")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"academy__header__mobile-menu"},[_c('div',{staticClass:"academy__header__mobile-menu__body"})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',{staticClass:"rt-checked-list academy__benefits md-sp-b-1"},[_c('li',{staticClass:"rt-checked-list__item rt-font-h4"},[_vm._v("13 модулей")]),_vm._v(" "),_c('li',{staticClass:"rt-checked-list__item rt-font-h4"},[_vm._v("25 уроков")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"row"},[_c('div',{staticClass:"rt-col-1 td-d-none"}),_vm._v(" "),_c('div',{staticClass:"rt-col-10 rt-col-td-6"},[_c('div',{staticClass:"academy__program__item color-block--white sp-v-purple td-sp-h-1"},[_c('div',{staticClass:"row td-relative"},[_c('div',{staticClass:"rt-col-persent-1 td-d-none"}),_vm._v(" "),_c('div',{staticClass:"rt-col-persent-2 rt-col-td-2 pos-abs-2 rt-col-md-2"},[_c('div',{staticClass:"relative rt-font-td-right"},[_c('span',{staticClass:"academy__program__item__digit color-main01"},[_vm._v("01")]),_vm._v(" "),_c('div',{staticClass:"academy__program__item__title color-orange"},[_vm._v("МИССИЯ")])])]),_vm._v(" "),_c('div',{staticClass:"rt-col-persent-1 td-d-none"}),_vm._v(" "),_c('div',{staticClass:"rt-col-persent-5 d-flex rt-col-td-6 td-flex-column"},[_c('div',{staticClass:"d-inline-block td-d-flex sp-b-1"},[_c('img',{staticClass:"academy__program__item__photo",attrs:{"src":"https://msk.rt.ru/sites/default/files/b2b/business_drive/academy/speaker.png"}})]),_vm._v(" "),_c('div',{staticClass:"d-inline-block sp-l-2 td-sp-l-none"},[_c('h4',{staticClass:"rt-font-h4 sp-b-darkpurple"},[_vm._v("Андрей Шапенко")]),_vm._v(" "),_c('p',{staticClass:"font-t-s color-main07 sp-b-purple"},[_vm._v("Доцент, академический директор программы МВА,\n                        Московская школа управления СКОЛКОВО")]),_vm._v(" "),_c('p',{staticClass:"font-h-l sp-b-darkpurple"},[_vm._v("Если я знаю миссию — я знаю, кто я такой")]),_vm._v(" "),_c('p',{staticClass:"font-t-m color-main07 sp-b-mint"},[_vm._v("Про то, что если у вас есть цель, смысл жизни и путь\n                        достижения, — это вовсе не связано со счастьем. Эта часть курса поможет вам сориентироваться,\n                        какое дело вам лучше выбрать, и в какой области бизнеса развиваться")]),_vm._v(" "),_c('p',{staticClass:"academy__program__item__question sp-b-blue"},[_c('span',{staticClass:"font-h-l color-white relative"},[_vm._v("Зачем?")])]),_vm._v(" "),_c('p',{staticClass:"font-t-m color-main07"},[_vm._v("Понять, то ли вы делаете, и что вам подходит.")])])]),_vm._v(" "),_c('div',{staticClass:"rt-col-persent-1 td-d-none"})])]),_vm._v(" "),_c('div',{staticClass:"academy__program__item color-block--white sp-v-purple td-sp-h-1"},[_c('div',{staticClass:"row td-relative"},[_c('div',{staticClass:"rt-col-persent-1 td-d-none"}),_vm._v(" "),_c('div',{staticClass:"rt-col-persent-2 rt-col-td-2 pos-abs-2 rt-col-md-2"},[_c('div',{staticClass:"relative rt-font-td-right"},[_c('span',{staticClass:"academy__program__item__digit color-main01"},[_vm._v("02")]),_vm._v(" "),_c('div',{staticClass:"academy__program__item__title color-orange"},[_vm._v("ИДЕЯ БИЗНЕСА И ИДЕЯ ПРОДУКТА")])])]),_vm._v(" "),_c('div',{staticClass:"rt-col-persent-1 td-d-none"}),_vm._v(" "),_c('div',{staticClass:"rt-col-persent-5 d-flex rt-col-td-6 td-flex-column"},[_c('div',{staticClass:"d-inline-block td-d-flex sp-b-1"},[_c('img',{staticClass:"academy__program__item__photo",attrs:{"src":"https://msk.rt.ru/sites/default/files/b2b/business_drive/academy/speaker.png"}})]),_vm._v(" "),_c('div',{staticClass:"d-inline-block sp-l-2 td-sp-l-none"},[_c('h4',{staticClass:"rt-font-h4 sp-b-darkpurple"},[_vm._v("Андрей Шапенко")]),_vm._v(" "),_c('p',{staticClass:"font-t-s color-main07 sp-b-purple"},[_vm._v("Доцент, академический директор программы МВА,\n                        Московская школа управления СКОЛКОВО")]),_vm._v(" "),_c('p',{staticClass:"font-h-l sp-b-darkpurple"},[_vm._v("Если я знаю миссию — я знаю, кто я такой")]),_vm._v(" "),_c('p',{staticClass:"font-t-m color-main07 sp-b-mint"},[_vm._v("Про то, что если у вас есть цель, смысл жизни и путь\n                        достижения, — это вовсе не связано со счастьем. Эта часть курса поможет вам сориентироваться,\n                        какое дело вам лучше выбрать, и в какой области бизнеса развиваться")]),_vm._v(" "),_c('p',{staticClass:"academy__program__item__question sp-b-blue"},[_c('span',{staticClass:"font-h-l color-white relative"},[_vm._v("Зачем?")])]),_vm._v(" "),_c('p',{staticClass:"font-t-m color-main07"},[_vm._v("Понять, то ли вы делаете, и что вам подходит.")])])]),_vm._v(" "),_c('div',{staticClass:"rt-col-persent-1 td-d-none"})])]),_vm._v(" "),_c('div',{staticClass:"academy__program__item color-block--white sp-v-purple td-sp-h-1"},[_c('div',{staticClass:"row td-relative"},[_c('div',{staticClass:"rt-col-persent-1 td-d-none"}),_vm._v(" "),_c('div',{staticClass:"rt-col-persent-2 rt-col-td-2 pos-abs-2 rt-col-md-2"},[_c('div',{staticClass:"relative rt-font-td-right"},[_c('span',{staticClass:"academy__program__item__digit color-main01"},[_vm._v("03")]),_vm._v(" "),_c('div',{staticClass:"academy__program__item__title color-orange"},[_vm._v("Современный предприниматель")])])]),_vm._v(" "),_c('div',{staticClass:"rt-col-persent-1 td-d-none"}),_vm._v(" "),_c('div',{staticClass:"rt-col-persent-5 d-flex rt-col-td-6 td-flex-column"},[_c('div',{staticClass:"d-inline-block td-d-flex sp-b-1"},[_c('img',{staticClass:"academy__program__item__photo",attrs:{"src":"https://msk.rt.ru/sites/default/files/b2b/business_drive/academy/speaker.png"}})]),_vm._v(" "),_c('div',{staticClass:"d-inline-block sp-l-2 td-sp-l-none"},[_c('h4',{staticClass:"rt-font-h4 sp-b-darkpurple"},[_vm._v("Андрей Шапенко")]),_vm._v(" "),_c('p',{staticClass:"font-t-s color-main07 sp-b-purple"},[_vm._v("Доцент, академический директор программы МВА,\n                        Московская школа управления СКОЛКОВО")]),_vm._v(" "),_c('p',{staticClass:"font-h-l sp-b-darkpurple"},[_vm._v("Если я знаю миссию — я знаю, кто я такой")]),_vm._v(" "),_c('p',{staticClass:"font-t-m color-main07 sp-b-mint"},[_vm._v("Про то, что если у вас есть цель, смысл жизни и путь\n                        достижения, — это вовсе не связано со счастьем. Эта часть курса поможет вам сориентироваться,\n                        какое дело вам лучше выбрать, и в какой области бизнеса развиваться")]),_vm._v(" "),_c('p',{staticClass:"academy__program__item__question sp-b-blue"},[_c('span',{staticClass:"font-h-l color-white relative"},[_vm._v("Зачем?")])]),_vm._v(" "),_c('p',{staticClass:"font-t-m color-main07"},[_vm._v("Понять, то ли вы делаете, и что вам подходит.")])])]),_vm._v(" "),_c('div',{staticClass:"rt-col-persent-1 td-d-none"})])])]),_vm._v(" "),_c('div',{staticClass:"rt-col-1 td-d-none"})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"rt-col-12"},[_c('h2',{staticClass:"rt-font-h2 sp-b-2 rt-font-center"},[_vm._v("Как в Академии устроен "),_c('span',{staticClass:"underline"},[_vm._v("процесс обучения")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',{staticClass:"sp-t-blue font-t-m color-main07"},[_vm._v("Вы сами выбираете свой формат: пройти обучение\n                "),_c('a',{staticClass:"rt-link--orange",attrs:{"href":"#"}},[_vm._v("в приложении")]),_vm._v(" или\n                "),_c('a',{staticClass:"rt-link--orange",attrs:{"href":"#"}},[_vm._v("на сайте")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"academy__footer__copyright rt-col-6 rt-col-td-6 td-sp-t-1"},[_c('p',{staticClass:"font-t-s color-main07 sp-b-0-3"},[_vm._v("Продолжая использовать наш сайт, вы даете\n              "),_c('a',{staticClass:"color-main",attrs:{"href":"#"}},[_vm._v("согласие на обработку файлов Cookies")]),_vm._v(" и других пользовательских\n              данных, в соответствии с "),_c('a',{staticClass:"color-main",attrs:{"href":"#"}},[_vm._v("Политикой конфиденциальности")]),_vm._v(".")]),_vm._v(" "),_c('p',{staticClass:"font-t-s color-main07"},[_vm._v("© 2021 ПАО «Ростелеком». 18+")])])}]



/***/ })

}]);
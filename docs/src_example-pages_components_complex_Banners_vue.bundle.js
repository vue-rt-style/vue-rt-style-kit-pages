"use strict";
(self["webpackChunkvue_rt_style_kit_pages"] = self["webpackChunkvue_rt_style_kit_pages"] || []).push([["src_example-pages_components_complex_Banners_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/example-pages/components/complex/Banners.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/example-pages/components/complex/Banners.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vue_rt_style_kit_molecules_local_components_Banner_docs_index_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue-rt-style-kit-molecules-local/components/Banner/docs/index.json */ "./src/molecules/components/Banner/docs/index.json");
/* harmony import */ var _vue_rt_style_kit_molecules_local_components_BannerV2_Banner_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vue-rt-style-kit-molecules-local/components/BannerV2/Banner.vue */ "./src/molecules/components/BannerV2/Banner.vue");
/* harmony import */ var _componentsList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../componentsList */ "./src/example-pages/componentsList.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'AppBanners',
  components: _componentsList__WEBPACK_IMPORTED_MODULE_2__["default"],
  data: function data() {
    return {
      documentation: {}
    };
  },
  mounted: function mounted() {
    this.documentation = _vue_rt_style_kit_molecules_local_components_Banner_docs_index_json__WEBPACK_IMPORTED_MODULE_0__;
  },
  created: function created() {},
  methods: {},
  render: function render(h) {
    return h("div", [h("div", {
      "class": "rt-container"
    }, [h("div", {
      "class": "grid-center"
    }), h("div", {
      "class": "app-content rt-col-12 rt-col-md-3"
    }, [h("div", {
      "class": "app-title"
    }, [h("div", {
      "class": "row"
    }, [h("h1", {
      "class": "rt-font-hero rt-col"
    }, ["Banners"])])])])]), h("div", {
      "class": "sp-b-2"
    }, [h("setting-render", {
      "attrs": {
        "wrap-menu": true,
        "component": _vue_rt_style_kit_molecules_local_components_BannerV2_Banner_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
        "componentProps": {
          name: 'test9393'
        },
        "html": "<rt-banner-item-v2 banner-name='test9393' :ga='{name:\"\u0421\u043C\u043E\u0442\u0440\u0438\u043C \u0432\u043C\u0435\u0441\u0442\u0435\",section:\"2\"}' :show-url-on-tablet='true' url='http://rt.ru'>\n        <template slot='header'>\n          <img src='https://rt-static.rt.ru/sites/default/files/img/ui-kit-demo/headerbtc1460.svg' alt=''>\n        </template>\n        <template slot='mobile-header'>\n          <img src='https://rt-static.rt.ru/sites/default/files/img/ui-kit-demo/headerbtc1460.svg' height='32px' alt=''>\n        </template>\n        <template slot='label'>\u041B\u0435\u0433\u043A\u043E \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0438\u0442\u044C,<br> \u043A\u043E\u043C\u0444\u043E\u0440\u0442\u043D\u043E \u0436\u0438\u0442\u044C</template>\n        <template slot='footer'><rt-button color='orange'>\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435</rt-button></template>\n        <template slot='image'>\n        <rt-img src='https://rt-static.rt.ru/sites/default/files/img/ui-kit-demo/bannerImage.jpg'\n                x2-src='https://rt-static.rt.ru/sites/default/files/img/ui-kit-demo/bannerImage-x2.jpg'\n                td-src='https://rt-static.rt.ru/sites/default/files/img/ui-kit-demo/bannerImage-tablet.jpg'\n                md-src='https://rt-static.rt.ru/sites/default/files/img/ui-kit-demo/bannerImage-mobile.jpg' alt=''></rt-img>\n        </template>\n\n      </rt-banner-item-v2>\n      <rt-banner-item-v2 :ga='{name:\"test1\",section:\"2\"}' ga-banner-name='banner_first' color-type='red' banner-name='test9393' :is-active='true' :show-url-on-desktop='true' url='http://rt.ru'>\n        <template slot='header'>\n          <img class='d-block' src='https://rt-static.rt.ru/sites/default/files/img/ui-kit-demo/logowink.svg' alt=''>\n        </template>\n        <template slot='mobile-header'>\n          <svg width='32' height='40' viewBox='0 0 32 40' fill='none' xmlns='http://www.w3.org/2000/svg'>\n            <path fill-rule='evenodd' clip-rule='evenodd' d='M10.8678 0.344238L0.182129 10.985L9.22389 19.9887L0.182129 28.9961L10.8678 39.6368L30.599 19.9887L10.8678 0.344238Z' fill='white'/>\n          </svg>\n        </template>\n        <template slot='label'>\u0420\u0430\u0437\u0436\u0438\u0433\u0430\u044E\u0442 \u0441\u0442\u0440\u0430\u0441\u0442\u044C</template>\n        <template slot='description'>\u0410\u0431\u043E\u043D\u0435\u043C\u0435\u043D\u0442 \xAB\u041A\u0438\u043D\u043E\u043C\u0430\u043D\xBB \u0421\u043A\u0438\u0434\u043A\u0430 \u043D\u0430 \u0432\u0441\u0435 \u0444\u0438\u043B\u044C\u043C\u044B \u0438 \u0441\u0435\u0440\u0438\u0430\u043B\u044B </template>\n        <template slot='footer'><rt-button color='full-white' >\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435</rt-button></template>\n        <template slot='image'>\n        <rt-img src='http://rt-static-cdn.rt.ru/sites/default/files/rti_lazy_files/b2c/obmen_filma_new_1480x840__proj.jpg'\n                x2-src='http://rt-static-cdn.rt.ru/sites/default/files/rti_lazy_files/b2c/obmen_filma_new_1480x840__proj.jpg'\n                ></rt-img>\n        </template>\n      </rt-banner-item-v2>\n      <rt-banner-item-v2 :ga='{name:\"test1\",section:\"2\"}' ga-banner-name='banner_ulala' banner-name='test9393' url='http://rt.ru'>\n        <template slot='label'>\u0412\u0438\u0440\u0442\u0443\u0430!!\u043B\u044C\u043D\u0430\u044F \u0410\u0422\u0421 <br> \u0438 1 000 \u043C\u0438\u043D\u0443\u0442 \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E</template>\n        <template slot='description'>\u0421\u043E\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u0430\u043C\u0438 \u0441\u0432\u043E\u0439 \u043F\u0430\u043A\u0435\u0442 \u0444\u0438\u043B\u044C\u043C\u043E\u0432 \u0438 \u043A\u0430\u043D\u0430\u043B\u043E\u0432.</template>\n        <template slot='footer'><a href='#'><rt-button  color='orange' >\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435</rt-button></a></template>\n        <template slot='image'>\n        <rt-img src='https://rt-static.rt.ru/sites/default/files/rti_lazy_files/marusya_1480x840__proj.jpg'\n                x2-src='https://rt-static.rt.ru/sites/default/files/rti_lazy_files/marusya_1480x840__proj.jpg'\n                td-src='https://rt-static.rt.ru/sites/default/files/rti_lazy_files/marusya_1480x840__proj.jpg'\n                md-src='https://rt-static.rt.ru/sites/default/files/rti_lazy_files/marusya_1480x840__proj.jpg' alt=''></rt-img>\n        </template>\n      </rt-banner-item-v2>\n      <rt-banner-item-v2  color-type='dark-slate' banner-name='test9393'>\n        <template slot='label'>\u041D\u0435 \u043F\u043B\u0430\u0442\u0438\u0442\u0435 \u0437\u0430 \u043B\u0438\u0448\u043D\u0435!!\u0435</template>\n        <template slot='description'>\u0421\u043E\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u0430\u043C\u0438 \u0441\u0432\u043E\u0439 \u043F\u0430\u043A\u0435\u0442 \u0444\u0438\u043B\u044C\u043C\u043E\u0432 \u0438 \u043A\u0430\u043D\u0430\u043B\u043E\u0432.</template>\n        <template slot='footer'><rt-button  color='orange' >\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435</rt-button></template>\n        <template slot='image'>\n        <rt-img src='https://rt-static.rt.ru/sites/default/files/img/ui-kit-demo/bannerImageBlack.jpg'\n                x2-src='https://rt-static.rt.ru/sites/default/files/img/ui-kit-demo/bannerImageBlack-2x.jpg'\n                md-src='https://rt-static.rt.ru/sites/default/files/img/ui-kit-demo/bannerImageBlack-mobile.jpg' alt=''></rt-img>\n        </template>\n      </rt-banner-item-v2>"
      }
    })]), h("div", {
      "class": "rt-container rt-space-top25"
    }, [h("documentation-builder", {
      "attrs": {
        "json": this.documentation,
        "type": "components"
      }
    })])]);
  }
});

/***/ }),

/***/ "./src/example-pages/components/complex/Banners.vue":
/*!**********************************************************!*\
  !*** ./src/example-pages/components/complex/Banners.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Banners_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Banners.vue?vue&type=script&lang=js& */ "./src/example-pages/components/complex/Banners.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns
;



/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _Banners_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
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

/***/ "./src/example-pages/components/complex/Banners.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./src/example-pages/components/complex/Banners.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Banners_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Banners.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/example-pages/components/complex/Banners.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Banners_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ })

}]);
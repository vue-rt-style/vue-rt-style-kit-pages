(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/example-pages/components/group/Microtabs--demo.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/example-pages/components/group/Microtabs--demo.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_rt_style_kit_molecules_local_components_Microtabs_docs_props_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue-rt-style-kit-molecules-local/components/Microtabs/docs/props.json */ "./src/molecules/components/Microtabs/docs/props.json");
var _vue_rt_style_kit_molecules_local_components_Microtabs_docs_props_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! @vue-rt-style-kit-molecules-local/components/Microtabs/docs/props.json */ "./src/molecules/components/Microtabs/docs/props.json", 1);
/* harmony import */ var _vue_rt_style_kit_molecules_local_components_Microtabs_docs_events_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vue-rt-style-kit-molecules-local/components/Microtabs/docs/events.json */ "./src/molecules/components/Microtabs/docs/events.json");
var _vue_rt_style_kit_molecules_local_components_Microtabs_docs_events_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! @vue-rt-style-kit-molecules-local/components/Microtabs/docs/events.json */ "./src/molecules/components/Microtabs/docs/events.json", 1);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'MicroTabsComponent',
  data: function data() {
    return {
      docProps: _vue_rt_style_kit_molecules_local_components_Microtabs_docs_props_json__WEBPACK_IMPORTED_MODULE_0__,
      docEvents: _vue_rt_style_kit_molecules_local_components_Microtabs_docs_events_json__WEBPACK_IMPORTED_MODULE_1__,
      testList: [{
        nav: 'Удаленка',
        cnt: '<p>Видеоконференции без потери качества сигнала</p>'
      }, {
        nav: 'Оборудование',
        cnt: '<div>ТВ-приставка <span class="rt-tariff-price--inline">+ 50 руб./мес.</span></div>'
      }, {
        nav: 'Яндекс',
        cnt: '<p>5 ГБ Яндекс.Диск +</p>'
      }, {
        nav: 'Антивирус',
        cnt: '<p>Kaspersky Internet Security 2 устройства</p>'
      }],
      testListHidden: [],
      testBlockWidth: 312,
      cloneShown: false
    };
  },
  computed: {
    sampleView: function sampleView() {
      return "\n<div style=\"width:200px\">\n  <rt-microtabs class=\"color-block--white sp-h-1 sp-v-0-3\">\n    <template slot=\"nav\">\n      <rt-microtabs-nav theme=\"flat\"><rt-system-icons name=\"speed 8x\" color=\"main-color\"></rt-system-icons></rt-microtabs-nav>\n      <rt-microtabs-nav theme=\"flat\"><rt-system-icons name=\"speed 6x\" color=\"main-color05\"></rt-system-icons></rt-microtabs-nav>\n      <rt-microtabs-nav theme=\"flat\"><rt-system-icons name=\"speed 4x\" color=\"main-color03\"></rt-system-icons></rt-microtabs-nav>\n      <rt-microtabs-nav theme=\"flat\"><rt-system-icons name=\"speed 2x\" color=\"main-color005\"></rt-system-icons></rt-microtabs-nav>\n      <rt-microtabs-nav theme=\"flat\"><rt-system-icons name=\"speed 1x\" color=\"main-color003\"></rt-system-icons></rt-microtabs-nav>\n    </template>\n  </rt-microtabs>\n</div>\n      ";
    },
    spacesView: function spacesView() {
      return "\n<rt-microtabs class=\"color-block--white sp-h-1 sp-v-0-3\">\n  <template slot=\"nav\">\n    <rt-microtabs-nav theme=\"purple\">\u0410\u043A\u0446\u0438\u044F</rt-microtabs-nav>\n    <rt-microtabs-nav>\u0421\u0435\u0440\u0432\u0438\u0441\u044B</rt-microtabs-nav>\n    <rt-microtabs-nav>\u0414\u043B\u0438\u043D\u043E\u0442\u0435\u043A\u0441\u0442</rt-microtabs-nav>\n    <rt-microtabs-nav>\u0410\u043D\u0442\u0438\u0432\u0438\u0440\u0443\u0441</rt-microtabs-nav>\n    <rt-microtabs-nav>\u042F\u043D\u0434\u0435\u043A\u0441 \u0414\u0438\u0441\u043A</rt-microtabs-nav>\n  </template>\n  <template slot=\"cnt\">\n    <rt-microtabs-cnt>\n      <div class=\"d-flex flex-start-center\">\n        <rt-system-icons name=\"breaking\" color=\"purple\"></rt-system-icons>\n        <p>\u041E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u043E\u0435 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u0434\u043B\u044F \u0432\u043D\u043E\u0432\u044C \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0438\u0432\u0448\u0438\u0445\u0441\u044F</p>\n      </div>\n    </rt-microtabs-cnt>\n    <rt-microtabs-cnt>\n      <p>\u041F\u0435\u0440\u0435\u0430\u0434\u0440\u0435\u0441\u0430\u0446\u0438\u044F</p>\n      <p>\u0413\u043E\u043B\u043E\u0441\u043E\u0432\u043E\u0435 \u043C\u0435\u043D\u044E IVR</p>\n      <p>\u0420\u0430\u0441\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u0435  \u0437\u0432\u043E\u043D\u043A\u043E\u0432</p>\n      <p>\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430 \u0438 \u0430\u043D\u0430\u043B\u0438\u0442\u0438\u043A\u0430</p>\n    </rt-microtabs-cnt>\n    <rt-microtabs-cnt>\n      <p>\u041F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \u0443\u0441\u043B\u0443\u0433\u0438 \u0448\u0438\u0440\u043E\u043A\u043E\u043F\u043E\u043B\u043E\u0441\u043D\u043E\u0433\u043E \u0434\u043E\u0441\u0442\u0443\u043F\u0430 \u0432 \u0418\u043D\u0442\u0435\u0440\u043D\u0435\u0442, \u0438\u043D\u0442\u0435\u0440\u0430\u043A\u0442\u0438\u0432\u043D\u043E\u0433\u043E \u0442\u0435\u043B\u0435\u0432\u0438\u0434\u0435\u043D\u0438\u044F, \u0441\u043E\u0442\u043E\u0432\u043E\u0439 \u0441\u0432\u044F\u0437\u0438, \u043C\u0435\u0441\u0442\u043D\u043E\u0439 \u0438 \u0434\u0430\u043B\u044C\u043D\u0435\u0439 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u043D\u043E\u0439 \u0441\u0432\u044F\u0437\u0438 \u0438 \u0434\u0440. \u0417\u0430\u043D\u0438\u043C\u0430\u0435\u0442 \u043B\u0438\u0434\u0438\u0440\u0443\u044E\u0449\u0438\u0435 \u043F\u043E\u0437\u0438\u0446\u0438\u0438 \u043D\u0430 \u0440\u043E\u0441\u0441\u0438\u0439\u0441\u043A\u043E\u043C \u0440\u044B\u043D\u043A\u0435 \u0432\u044B\u0441\u043E\u043A\u043E\u0441\u043A\u043E\u0440\u043E\u0441\u0442\u043D\u043E\u0433\u043E \u0434\u043E\u0441\u0442\u0443\u043F\u0430 \u0432 \u0438\u043D\u0442\u0435\u0440\u043D\u0435\u0442, \u043F\u043B\u0430\u0442\u043D\u043E\u0433\u043E \u0422\u0412, \u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F \u0438 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u0434\u0430\u043D\u043D\u044B\u0445, \u0430 \u0442\u0430\u043A\u0436\u0435 \u043A\u0438\u0431\u0435\u0440\u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u0438</p>\n    </rt-microtabs-cnt>\n    <rt-microtabs-cnt>\n      <p>Kaspersky Internet Security 2 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430</p>\n    </rt-microtabs-cnt>\n    <rt-microtabs-cnt>\n      <p>5 \u0413\u0411 \u042F\u043D\u0434\u0435\u043A\u0441.\u0414\u0438\u0441\u043A +</p>\n    </rt-microtabs-cnt>\n  </template>\n</rt-microtabs>\n      ";
    },
    themesView: function themesView() {
      return "\n<rt-microtabs class=\"color-block--white sp-h-1 sp-v-0-3\">\n  <template slot=\"nav\">\n    <rt-microtabs-nav theme=\"orange\">\u0421\u043A\u0438\u0434\u043A\u0430</rt-microtabs-nav>\n    <rt-microtabs-nav>\u0421\u0435\u0440\u0432\u0438\u0441\u044B</rt-microtabs-nav>\n    <rt-microtabs-nav>\u0414\u043E\u043F. \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B</rt-microtabs-nav>\n  </template>\n  <template slot=\"cnt\">\n    <rt-microtabs-cnt>\n      <p>\u0414\u043E\u0441\u0442\u0443\u043F \u043A \u0432\u0438\u0434\u0435\u043E\u0441\u0435\u0440\u0432\u0438\u0441\u0443 Wink \u0441 \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0439 \u0432\u044B\u0433\u043E\u0434\u043E\u0439 \u0434\u043E 2 \u043C\u0435\u0441\u044F\u0446\u0435\u0432</p>\n    </rt-microtabs-cnt>\n    <rt-microtabs-cnt>\n      <p>\u041F\u0435\u0440\u0435\u0430\u0434\u0440\u0435\u0441\u0430\u0446\u0438\u044F</p>\n      <p>\u0413\u043E\u043B\u043E\u0441\u043E\u0432\u043E\u0435 \u043C\u0435\u043D\u044E IVR</p>\n      <p>\u0420\u0430\u0441\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u0435  \u0437\u0432\u043E\u043D\u043A\u043E\u0432</p>\n      <p>\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430 \u0438 \u0430\u043D\u0430\u043B\u0438\u0442\u0438\u043A\u0430</p>\n    </rt-microtabs-cnt>\n    <rt-microtabs-cnt>\n      <p>\u041F\u0435\u0440\u0435\u0430\u0434\u0440\u0435\u0441\u0430\u0446\u0438\u044F</p>\n      <p>\u0413\u043E\u043B\u043E\u0441\u043E\u0432\u043E\u0435 \u043C\u0435\u043D\u044E IVR</p>\n      <p>\u0420\u0430\u0441\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u0435  \u0437\u0432\u043E\u043D\u043A\u043E\u0432</p>\n      <p>\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430 \u0438 \u0430\u043D\u0430\u043B\u0438\u0442\u0438\u043A\u0430</p>\n    </rt-microtabs-cnt>\n  </template>\n</rt-microtabs>\n      ";
    },
    noFitView: function noFitView() {
      return "\n<rt-microtabs :fit=\"false\" class=\"color-block--white sp-h-1 sp-v-0-3\">\n  <template slot=\"nav\">\n    <rt-microtabs-nav>\u0423\u0441\u043B\u0443\u0433\u0438</rt-microtabs-nav>\n    <rt-microtabs-nav>\u0418\u0441\u0442\u043E\u0440\u0438\u044F</rt-microtabs-nav>\n    <rt-microtabs-nav>\u0418\u043D\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u0438</rt-microtabs-nav>\n    <rt-microtabs-nav>\u0418\u043D\u0444\u0440\u0430\u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0430</rt-microtabs-nav>\n  </template>\n  <template slot=\"cnt\">\n    <rt-microtabs-cnt>\n      <ul>\n        <li class=\"rt-checked-list__item rt-checked-list__item--orange sp-l-0-4\" style=\"margin-top:0\">\n          <div>\u0418\u043D\u0442\u0435\u0440\u043D\u0435\u0442</div>\n          <ul>\n            <li class=\"rt-checked-list__item sp-l-0-4\" style=\"margin-top:0\">\u0418\u043D\u0442\u0435\u0440\u0430\u043A\u0442\u0438\u0432\u043D\u043E\u0435 \u0442\u0435\u043B\u0435\u0432\u0438\u0434\u0435\u043D\u0438\u0435</li>\n            <li class=\"rt-checked-list__item sp-l-0-4\" style=\"margin-top:0\">\n              <div>VPN</div>\n              <ul>\n                <li class=\"rt-checked-list__item sp-l-0-4\" style=\"margin-top:0\">\u0412\u0438\u0434\u0435\u043E\u043D\u0430\u0431\u043B\u044E\u0434\u0435\u043D\u0438\u0435 \u0438 \u0443\u043C\u043D\u044B\u0439 \u0434\u043E\u043C</li>\n                <li class=\"rt-checked-list__item sp-l-0-4\" style=\"margin-top:0\">\u0423\u043C\u043D\u0430\u044F \u043A\u043E\u043B\u043E\u043D\u043A\u0430 \"\u041C\u0430\u0440\u0443\u0441\u044F\"</li>\n              </ul>\n            </li>\n            <li class=\"rt-checked-list__item sp-l-0-4\" style=\"margin-top:0\">\u041E\u0431\u043B\u0430\u0447\u043D\u044B\u0435 \u0443\u0441\u043B\u0443\u0433\u0438</li>\n            <li class=\"rt-checked-list__item sp-l-0-4\" style=\"margin-top:0\">\u0414\u043E\u0441\u0442\u0443\u043F \u043A \u0431\u0430\u043D\u043A\u043E\u0432\u0441\u043A\u0438\u043C \u0443\u0441\u043B\u0443\u0433\u0430\u043C \u043D\u0430 \u0442\u0440\u0443\u0434\u043D\u043E\u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u0445 \u0442\u0435\u0440\u0440\u0438\u0442\u043E\u0440\u0438\u044F\u0445</li>\n          </ul>\n        </li>\n        <li class=\"rt-checked-list__item rt-checked-list__item--orange sp-l-0-4\" style=\"margin-top:0\">\n          <div>\u0421\u0432\u044F\u0437\u044C</div>\n          <ul>\n            <li class=\"rt-checked-list__item sp-l-0-4\" style=\"margin-top:0\">\u041C\u0435\u0441\u0442\u043D\u0430\u044F \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u043D\u0430\u044F \u0441\u0432\u044F\u0437\u044C</li>\n            <li class=\"rt-checked-list__item sp-l-0-4\" style=\"margin-top:0\">\u0421\u043E\u0442\u043E\u0432\u0430\u044F \u0441\u0432\u044F\u0437\u044C</li>\n            <li class=\"rt-checked-list__item sp-l-0-4\" style=\"margin-top:0\">\u0421\u043E\u0432\u043C\u0435\u0441\u0442\u043D\u044B\u0435 \u043F\u0440\u043E\u0435\u043A\u0442\u044B \u043D\u0430 \u0431\u0430\u0437\u0435 \u0438\u043D\u0444\u0440\u0430\u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u044B \u0441\u043E\u0442\u043E\u0432\u044B\u0445 \u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440\u043E\u0432</li>\n            <li class=\"rt-checked-list__item sp-l-0-4\" style=\"margin-top:0\">\u0423\u043D\u0438\u0432\u0435\u0440\u0441\u0430\u043B\u044C\u043D\u044B\u0435 \u0443\u0441\u043B\u0443\u0433\u0438 \u0441\u0432\u044F\u0437\u0438 (\u0423\u0423\u0421)</li>\n          </ul>\n        </li>\n        <li class=\"rt-checked-list__item rt-checked-list__item--orange sp-l-0-4\" style=\"margin-top:0\">\n          <div>\u0418\u043D\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044F \u0446\u0438\u0444\u0440\u043E\u0432\u044B\u0445 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0439</div>\n          <ul>\n            <li class=\"rt-checked-list__item sp-l-0-4\" style=\"margin-top:0\">\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u044B\u0435 \u0446\u0438\u0444\u0440\u043E\u0432\u044B\u0435 \u0441\u0435\u0440\u0432\u0438\u0441\u044B \u0434\u043B\u044F \u043C\u0435\u0434\u0438\u0446\u0438\u043D\u044B</li>\n            <li class=\"rt-checked-list__item sp-l-0-4\" style=\"margin-top:0\">\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u044B\u0435 \u0446\u0438\u0444\u0440\u043E\u0432\u044B\u0435 \u0441\u0435\u0440\u0432\u0438\u0441\u044B \u0434\u043B\u044F \u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u044F</li>\n            <li class=\"rt-checked-list__item sp-l-0-4\" style=\"margin-top:0\">\u0420\u0430\u0437\u0432\u0438\u0442\u0438\u0435 \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u0432 \xAB\u0426\u0438\u0444\u0440\u043E\u0432\u043E\u0439 \u0440\u0435\u0433\u0438\u043E\u043D\xBB (\xAB\u0423\u043C\u043D\u044B\u0439 \u0433\u043E\u0440\u043E\u0434\xBB)</li>\n            <li class=\"rt-checked-list__item sp-l-0-4\" style=\"margin-top:0\">\u0414\u0440\u0443\u0433\u0438\u0435 \u0441\u0435\u0440\u0432\u0438\u0441\u044B</li>\n          </ul>\n        </li>\n        <li class=\"rt-checked-list__item rt-checked-list__item--orange sp-l-0-4\" style=\"margin-top:0\">\n          <div>\u041E\u0431\u0435\u0441\u043F\u0435\u0447\u0435\u043D\u0438\u0435 \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u0438</div>\n          <ul>\n            <li class=\"rt-checked-list__item sp-l-0-4\" style=\"margin-top:0\">\u0421\u0438\u0441\u0442\u0435\u043C\u044B \u0432\u0438\u0434\u0435\u043E\u043D\u0430\u0431\u043B\u044E\u0434\u0435\u043D\u0438\u044F</li>\n            <li class=\"rt-checked-list__item sp-l-0-4\" style=\"margin-top:0\">\u041E\u0431\u0435\u0441\u043F\u0435\u0447\u0435\u043D\u0438\u0435 \u043A\u0438\u0431\u0435\u0440\u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u0438</li>\n            <li class=\"rt-checked-list__item sp-l-0-4\" style=\"margin-top:0\">\u041A\u0440\u0438\u043F\u0442\u043E\u0448\u0438\u0444\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0438 \u043A\u0432\u0430\u043D\u0442\u043E\u0432\u0430\u044F \u0437\u0430\u0449\u0438\u0442\u0430 \u0434\u0430\u043D\u043D\u044B\u0445</li>\n          </ul>\n        </li>\n        <li class=\"rt-checked-list__item rt-checked-list__item--orange sp-l-0-4\" style=\"margin-top:0\">\n          <div>\u0426\u0438\u0444\u0440\u043E\u0432\u044B\u0435 \u0433\u043E\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0435 \u0443\u0441\u043B\u0443\u0433\u0438</div>\n          <ul>\n            <li class=\"rt-checked-list__item sp-l-0-4\" style=\"margin-top:0\">\u0415\u0434\u0438\u043D\u044B\u0439 \u043F\u043E\u0440\u0442\u0430\u043B \u0433\u043E\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0445 \u0443\u0441\u043B\u0443\u0433</li>\n            <li class=\"rt-checked-list__item sp-l-0-4\" style=\"margin-top:0\">\u041D\u0430\u0446\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u0430\u044F \u0431\u0438\u043E\u043C\u0435\u0442\u0440\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0441\u0438\u0441\u0442\u0435\u043C\u0430</li>\n          </ul>\n        </li>\n      </ul>\n    </rt-microtabs-cnt>\n    <rt-microtabs-cnt>\n      <p class=\"sp-b-1\">30 \u0434\u0435\u043A\u0430\u0431\u0440\u044F 1992 \u0433\u043E\u0434\u0430 \u0440\u0430\u0441\u043F\u043E\u0440\u044F\u0436\u0435\u043D\u0438\u0435\u043C \u0413\u043E\u0441\u043A\u043E\u043C\u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u0430 \u0420\u043E\u0441\u0441\u0438\u0438 \u0441\u043E\u0437\u0434\u0430\u043D\u043E \u0433\u043E\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0435 \u043F\u0440\u0435\u0434\u043F\u0440\u0438\u044F\u0442\u0438\u0435 \xAB\u0420\u043E\u0441\u0442\u0435\u043B\u0435\u043A\u043E\u043C\xBB, \u0432 \u0441\u043E\u0441\u0442\u0430\u0432 \u043A\u043E\u0442\u043E\u0440\u043E\u0433\u043E \u0432\u043E\u0448\u043B\u0438 20 \u0433\u043E\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0445 \u043F\u0440\u0435\u0434\u043F\u0440\u0438\u044F\u0442\u0438\u0439 \u043C\u0435\u0436\u0434\u0443\u0433\u043E\u0440\u043E\u0434\u043D\u043E\u0439 \u0438 \u043C\u0435\u0436\u0434\u0443\u043D\u0430\u0440\u043E\u0434\u043D\u043E\u0439 \u0441\u0432\u044F\u0437\u0438, \u0430 \u0442\u0430\u043A\u0436\u0435 \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435 \u0441\u0432\u044F\u0437\u0438 \xAB\u0418\u043D\u0442\u0435\u0440\u0442\u0435\u043B\u0435\u043A\u043E\u043C\u0430\xBB.</p>\n      <p class=\"sp-b-1\">27 \u0430\u0432\u0433\u0443\u0441\u0442\u0430 1993 \u0433\u043E\u0434\u0430 \u0433\u043E\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0435 \u043F\u0440\u0435\u0434\u043F\u0440\u0438\u044F\u0442\u0438\u0435 \u0441\u0432\u044F\u0437\u0438 \xAB\u0420\u043E\u0441\u0442\u0435\u043B\u0435\u043A\u043E\u043C\xBB \u0431\u044B\u043B\u043E \u043F\u0440\u0435\u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u043E \u0432 \u0430\u043A\u0446\u0438\u043E\u043D\u0435\u0440\u043D\u043E\u0435 \u043E\u0431\u0449\u0435\u0441\u0442\u0432\u043E \u043E\u0442\u043A\u0440\u044B\u0442\u043E\u0433\u043E \u0442\u0438\u043F\u0430 \u043C\u0435\u0436\u0434\u0443\u0433\u043E\u0440\u043E\u0434\u043D\u043E\u0439 \u0438 \u043C\u0435\u0436\u0434\u0443\u043D\u0430\u0440\u043E\u0434\u043D\u043E\u0439 \u044D\u043B\u0435\u043A\u0442\u0440\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u0441\u0432\u044F\u0437\u0438 \xAB\u0420\u043E\u0441\u0442\u0435\u043B\u0435\u043A\u043E\u043C\xBB. \u041E\u0431\u0449\u0435\u0441\u0442\u0432\u043E \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u043E 23 \u0441\u0435\u043D\u0442\u044F\u0431\u0440\u044F 1993 \u0433\u043E\u0434\u0430.</p>\n      <p class=\"sp-b-1\">\u0412 1994 \u0433\u043E\u0434\u0443 \xAB\u0420\u043E\u0441\u0442\u0435\u043B\u0435\u043A\u043E\u043C\xBB \u043F\u043E\u043B\u0443\u0447\u0438\u043B \u043B\u0438\u0446\u0435\u043D\u0437\u0438\u044E \u043D\u0430 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0443\u0441\u043B\u0443\u0433 \u043C\u0435\u0436\u0434\u0443\u0433\u043E\u0440\u043E\u0434\u043D\u043E\u0439 \u0438 \u043C\u0435\u0436\u0434\u0443\u043D\u0430\u0440\u043E\u0434\u043D\u043E\u0439 \u0441\u0432\u044F\u0437\u0438. \u0412 \u044D\u0442\u043E\u043C \u0436\u0435 \u0433\u043E\u0434\u0443 \xAB\u0420\u043E\u0441\u0442\u0435\u043B\u0435\u043A\u043E\u043C\xBB \u0432\u043A\u043B\u044E\u0447\u0451\u043D \u0432 \u0441\u043E\u0441\u0442\u0430\u0432 \u0445\u043E\u043B\u0434\u0438\u043D\u0433\u0430 \xAB\u0421\u0432\u044F\u0437\u044C\u0438\u043D\u0432\u0435\u0441\u0442\xBB.</p>\n      <p class=\"sp-b-1\">18 \u043E\u043A\u0442\u044F\u0431\u0440\u044F 2006 \u0433\u043E\u0434\u0430 \xAB\u0420\u043E\u0441\u0442\u0435\u043B\u0435\u043A\u043E\u043C\xBB \u043F\u043E\u043B\u0443\u0447\u0438\u043B \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043A\u0430\u0442 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0430 \u0441\u0432\u043E\u0435\u0439 IP/MPLS \u0441\u0435\u0442\u0438 \u0438 \u0441\u0442\u0430\u043B \u043C\u0430\u0433\u0438\u0441\u0442\u0440\u0430\u043B\u044C\u043D\u044B\u043C \u0418\u043D\u0442\u0435\u0440\u043D\u0435\u0442-\u043F\u0440\u043E\u0432\u0430\u0439\u0434\u0435\u0440\u043E\u043C.</p>\n      <p class=\"sp-b-1\">\u0412 \u0434\u0435\u043A\u0430\u0431\u0440\u0435 2009 \u0433\u043E\u0434\u0430 \xAB\u0420\u043E\u0441\u0442\u0435\u043B\u0435\u043A\u043E\u043C\xBB \u0437\u0430\u043F\u0443\u0441\u0442\u0438\u043B \u0435\u0434\u0438\u043D\u044B\u0439 \u043F\u043E\u0440\u0442\u0430\u043B \u0433\u043E\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0445 \u0438 \u043C\u0443\u043D\u0438\u0446\u0438\u043F\u0430\u043B\u044C\u043D\u044B\u0445 \u0443\u0441\u043B\u0443\u0433 www.gosuslugi.ru.</p>\n      <p class=\"sp-b-1\">\u0421 1 \u0430\u043F\u0440\u0435\u043B\u044F 2014 \u0433\u043E\u0434\u0430 \u0420\u0430\u0441\u043F\u043E\u0440\u044F\u0436\u0435\u043D\u0438\u0435\u043C \u041F\u0440\u0430\u0432\u0438\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0430 \u0420\u0424 \u043D\u0430 \xAB\u0420\u043E\u0441\u0442\u0435\u043B\u0435\u043A\u043E\u043C\xBB \u0432\u043E\u0437\u043B\u043E\u0436\u0435\u043D\u0430 \u043E\u0431\u044F\u0437\u0430\u043D\u043D\u043E\u0441\u0442\u044C \u043F\u043E \u043E\u043A\u0430\u0437\u0430\u043D\u0438\u044E \u0443\u043D\u0438\u0432\u0435\u0440\u0441\u0430\u043B\u044C\u043D\u044B\u0445 \u0443\u0441\u043B\u0443\u0433 \u0441\u0432\u044F\u0437\u0438 \u043D\u0430 \u0432\u0441\u0435\u0439 \u0442\u0435\u0440\u0440\u0438\u0442\u043E\u0440\u0438\u0438 \u0420\u043E\u0441\u0441\u0438\u0439\u0441\u043A\u043E\u0439 \u0424\u0435\u0434\u0435\u0440\u0430\u0446\u0438\u0438. \u0422\u0430\u043A\u0436\u0435 \u0432 2014 \u0433\u043E\u0434\u0443 \xAB\u0420\u043E\u0441\u0442\u0435\u043B\u0435\u043A\u043E\u043C\xBB \u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D \u0435\u0434\u0438\u043D\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u043C \u0438\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u0435\u043C \u0444\u0435\u0434\u0435\u0440\u0430\u043B\u044C\u043D\u043E\u0439 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u044B \u043B\u0438\u043A\u0432\u0438\u0434\u0430\u0446\u0438\u0438 \xAB\u0446\u0438\u0444\u0440\u043E\u0432\u043E\u0433\u043E \u043D\u0435\u0440\u0430\u0432\u0435\u043D\u0441\u0442\u0432\u0430\xBB. 3 \u041C\u0430\u0440\u0442\u0430 2018 \u0433\u043E\u0434\u0430 \u043F\u0440\u0430\u0432\u0438\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E \u0420\u043E\u0441\u0441\u0438\u0438 \u043E\u0431\u044F\u0437\u0430\u043B\u043E \u041C\u0438\u043D\u0438\u0441\u0442\u0435\u0440\u0441\u0442\u0432\u043E \u0441\u0432\u044F\u0437\u0438 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044E \u043A\u0430\u043A \u0435\u0434\u0438\u043D\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0433\u043E \u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A\u0430 \u0443\u0441\u043B\u0443\u0433\u0438 \u0438\u043D\u0442\u0435\u0440\u043D\u0435\u0442 \u0441\u0432\u044F\u0437\u0438 \u0432 \u0433\u043E\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0445 \u0438 \u043C\u0443\u043D\u0438\u0446\u0438\u043F\u0430\u043B\u044C\u043D\u044B\u0445 \u043C\u0435\u0434\u0438\u0446\u0438\u043D\u0441\u043A\u0438\u0445 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F\u0445 \u0438 \u0443\u0447\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u044F\u0445 \u043D\u0430 \u043F\u0435\u0440\u0438\u043E\u0434 \u0441 2018 \u043F\u043E 2019 \u0433\u043E\u0434.</p>\n      <p class=\"sp-b-1\">\u0412 \u043D\u043E\u044F\u0431\u0440\u0435 2017 \u0433\u043E\u0434\u0430 \u0426\u0435\u043D\u0442\u0440 \u043A\u043E\u043C\u043F\u0435\u0442\u0435\u043D\u0446\u0438\u0439 \u043F\u043E \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044E \xAB\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u043E\u043D\u043D\u0430\u044F \u0438\u043D\u0444\u0440\u0430\u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0430\xBB \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u044B \xAB\u0426\u0438\u0444\u0440\u043E\u0432\u0430\u044F \u044D\u043A\u043E\u043D\u043E\u043C\u0438\u043A\u0430 \u0420\u043E\u0441\u0441\u0438\u0439\u0441\u043A\u043E\u0439 \u0424\u0435\u0434\u0435\u0440\u0430\u0446\u0438\u0438\xBB (\u041F\u0410\u041E \xAB\u0420\u043E\u0441\u0442\u0435\u043B\u0435\u043A\u043E\u043C\xBB) \u0438 \u0420\u0430\u0431\u043E\u0447\u0430\u044F \u0433\u0440\u0443\u043F\u043F\u0430 \xAB\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u043E\u043D\u043D\u0430\u044F \u0438\u043D\u0444\u0440\u0430\u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0430\xBB \u043F\u0440\u0438 \u0410\u041D\u041E \xAB\u0426\u0438\u0444\u0440\u043E\u0432\u0430\u044F \u044D\u043A\u043E\u043D\u043E\u043C\u0438\u043A\u0430\xBB (\u041F\u0410\u041E \xAB\u041C\u0435\u0433\u0430\u0424\u043E\u043D\xBB) \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u0438\u043B\u0438 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0430\u043D\u043D\u044B\u0439 \u043F\u043B\u0430\u043D \u043C\u0435\u0440\u043E\u043F\u0440\u0438\u044F\u0442\u0438\u0439 \u0441 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u044F\u043C\u0438 \u043F\u043E \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u044E \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u043E\u043D\u043D\u043E\u0439 \u0438\u043D\u0444\u0440\u0430\u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u044B \u0434\u043B\u044F \u0446\u0438\u0444\u0440\u043E\u0432\u043E\u0439 \u044D\u043A\u043E\u043D\u043E\u043C\u0438\u043A\u0438 (5G, \xAB\u0443\u043C\u043D\u044B\u0439\xBB \u0433\u043E\u0440\u043E\u0434, \u0442\u0435\u043B\u0435\u043C\u0435\u0434\u0438\u0446\u0438\u043D\u0430, \u0434\u0438\u0441\u0442\u0430\u043D\u0446\u0438\u043E\u043D\u043D\u043E\u0435 \u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u0438 \u0434\u0440.).</p>\n      <p>\u0412 \u043C\u0430\u0440\u0442\u0435 2018 \u0433\u043E\u0434\u0430 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u0438\u043B\u0430 \u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u044E \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u044F \u0434\u043E 2022 \u0433\u043E\u0434\u0430 \u0438 \u0434\u0438\u0432\u0438\u0434\u0435\u043D\u0434\u043D\u0443\u044E \u043F\u043E\u043B\u0438\u0442\u0438\u043A\u0443 \u0437\u0430 \u043F\u0435\u0440\u0438\u043E\u0434 2018\u20142020 \u0433\u0433. \u041E\u0441\u043D\u043E\u0432\u043D\u044B\u043C \u0432\u0435\u043A\u0442\u043E\u0440\u043E\u043C \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u044F \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438, \u0441\u043E\u0433\u043B\u0430\u0441\u043D\u043E \u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u0438, \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043F\u0440\u043E\u0434\u043E\u043B\u0436\u0435\u043D\u0438\u0435 \u0442\u0440\u0430\u043D\u0441\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438 \u0432 \u0446\u0438\u0444\u0440\u043E\u0432\u043E\u0433\u043E \u043F\u0430\u0440\u0442\u043D\u0451\u0440\u0430 \u0434\u043B\u044F \u043D\u0430\u0441\u0435\u043B\u0435\u043D\u0438\u044F, \u0431\u0438\u0437\u043D\u0435\u0441\u0430 \u0438 \u0433\u043E\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0430. \u041E\u0441\u043D\u043E\u0432\u043D\u044B\u0435 \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u0440\u0430\u0431\u043E\u0442\u044B: \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u0435 \u044D\u043A\u043E\u0441\u0438\u0441\u0442\u0435\u043C \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u043E\u0432, \u0443\u0441\u043B\u0443\u0433 \u0438 \u043A\u043B\u0438\u0435\u043D\u0442\u0441\u043A\u043E\u0433\u043E \u0441\u0435\u0440\u0432\u0438\u0441\u0430, \u043C\u043E\u0434\u0435\u0440\u043D\u0438\u0437\u0430\u0446\u0438\u044F \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u044B, \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u0435 \u0447\u0435\u043B\u043E\u0432\u0435\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u043A\u0430\u043F\u0438\u0442\u0430\u043B\u0430, \u043F\u043E\u0432\u044B\u0448\u0435\u043D\u0438\u0435 \u044D\u0444\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u0438.</p>\n    </rt-microtabs-cnt>\n    <rt-microtabs-cnt>\n      <p class=\"font-h-m sp-b-1\">\u0412\u0435\u043D\u0447\u0443\u0440\u043D\u044B\u0435 \u0438\u043D\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u0438</p>\n      <p class=\"sp-b-1\">\u0412 \u043C\u0430\u0435 2015 \u0433\u043E\u0434\u0430 \u0421\u043E\u0432\u0435\u0442 \u0434\u0438\u0440\u0435\u043A\u0442\u043E\u0440\u043E\u0432 \xAB\u0420\u043E\u0441\u0442\u0435\u043B\u0435\u043A\u043E\u043C\u0430\xBB \u043F\u0440\u0438\u043D\u044F\u043B \u0440\u0435\u0448\u0435\u043D\u0438\u0435 \u043E \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u0438 \u043A\u043E\u0440\u043F\u043E\u0440\u0430\u0442\u0438\u0432\u043D\u043E\u0433\u043E \u0432\u0435\u043D\u0447\u0443\u0440\u043D\u043E\u0433\u043E \u0444\u043E\u043D\u0434\u0430, \u0430 \u0432 \u0441\u0435\u043D\u0442\u044F\u0431\u0440\u0435 2015 \u0433\u043E\u0434\u0430 \u0444\u043E\u043D\u0434 \xAB\u041A\u043E\u043C\u043C\u0418\u0422 \u041A\u044D\u043F\u0438\u0442\u0430\u043B\xBB \u043F\u043E\u043B\u0443\u0447\u0438\u043B 1,5 \u043C\u043B\u0440\u0434 \u0440\u0443\u0431\u043B\u0435\u0439</p>\n      <p class=\"sp-b-1\">\u0421\u0440\u0435\u0434\u0438 \u043F\u0440\u0438\u043E\u0440\u0438\u0442\u0435\u0442\u043D\u044B\u0445 \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0439 \u0438\u043D\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u0439 \xAB\u041A\u043E\u043C\u043C\u0418\u0422 \u041A\u044D\u043F\u0438\u0442\u0430\u043B\xBB \u043A\u043E\u043D\u043A\u0443\u0440\u0435\u043D\u0442\u043E\u0441\u043F\u043E\u0441\u043E\u0431\u043D\u044B\u0435 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u044B \u0434\u043B\u044F \u0438\u043D\u0444\u0440\u0430\u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u044B \u0442\u0435\u043B\u0435\u043A\u043E\u043C\u043C\u0443\u043D\u0438\u043A\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0445 \u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440\u043E\u0432 \u0438 \u0426\u041E\u0414. \u041A\u0440\u043E\u043C\u0435 \u0442\u043E\u0433\u043E, \u0444\u043E\u043D\u0434 \u0440\u0430\u0441\u0441\u043C\u0430\u0442\u0440\u0438\u0432\u0430\u0435\u0442 \u043F\u0435\u0440\u0441\u043F\u0435\u043A\u0442\u0438\u0432\u043D\u044B\u0435 \u043F\u0440\u043E\u0435\u043A\u0442\u044B, \u0441\u043E\u0437\u0434\u0430\u044E\u0449\u0438\u0435 \u043D\u043E\u0432\u044B\u0435 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u044B \u0438 \u0443\u0441\u043B\u0443\u0433\u0438 \u0434\u043B\u044F \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432 \xAB\u0420\u043E\u0441\u0442\u0435\u043B\u0435\u043A\u043E\u043C\u0430\xBB \u0432 B2C, B2B \u0438 B2G \u0441\u0435\u0433\u043C\u0435\u043D\u0442\u0430\u0445.</p>\n      <p class=\"sp-b-1\">\u041F\u043E \u0438\u0442\u043E\u0433\u0430\u043C 2016 \u0433\u043E\u0434\u0430 \u0433\u043E\u0434\u043E\u0432\u0430\u044F \u0432\u044B\u0440\u0443\u0447\u043A\u0430 \u043F\u043E\u0440\u0442\u0444\u0435\u043B\u044C\u043D\u044B\u0445 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0439 \u0432\u0435\u043D\u0447\u0443\u0440\u043D\u043E\u0433\u043E \u0444\u043E\u043D\u0434\u0430 \xAB\u0420\u043E\u0441\u0442\u0435\u043B\u0435\u043A\u043E\u043C\u0430\xBB \u043F\u0440\u0435\u0432\u044B\u0441\u0438\u043B\u0430 1 \u043C\u043B\u0440\u0434 \u0440\u0443\u0431\u043B\u0435\u0439.</p>\n      <p class=\"sp-b-1\">\xAB\u0420\u043E\u0441\u0442\u0435\u043B\u0435\u043A\u043E\u043C\xBB \u0432 \u043E\u0442\u0447\u0451\u0442\u043D\u043E\u0441\u0442\u0438 \u043F\u043E \u041C\u0421\u0424\u041E \u0437\u0430 \u0432\u0442\u043E\u0440\u043E\u0439 \u043A\u0432\u0430\u0440\u0442\u0430\u043B 2018 \u0433\u043E\u0434\u0430 \u0441\u043E\u043E\u0431\u0449\u0438\u043B, \u0447\u0442\u043E 15 \u043C\u0430\u044F \u0413\u0440\u0443\u043F\u043F\u0430 \u043F\u0440\u0438\u043E\u0431\u0440\u0435\u043B\u0430 \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u0443\u044E \u044D\u043C\u0438\u0441\u0441\u0438\u044E \u0430\u043A\u0446\u0438\u0439 B4N Group Limited. \u0412 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0435 \u0441\u0434\u0435\u043B\u043A\u0438 \u0434\u043E\u043B\u044F \u0413\u0440\u0443\u043F\u043F\u044B \u0432 B4N Group Limited \u0443\u0432\u0435\u043B\u0438\u0447\u0438\u043B\u0430\u0441\u044C \u0441 18,04 % \u0434\u043E 26,08 %. \u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A \u041F\u041E \u0434\u043B\u044F \u0441\u0435\u0442\u0435\u0439 \u0441\u0432\u044F\u0437\u0438 Brain4Net \u043F\u0440\u0438\u0448\u0451\u043B \u0432 \u043F\u0430\u0439\u043F\u043B\u0430\u0439\u043D \u0444\u043E\u043D\u0434\u0430 2 \u0433\u043E\u0434\u0430 \u043D\u0430\u0437\u0430\u0434.</p>\n      <p class=\"sp-b-1\">\u0412 2018 \u0433\u043E\u0434\u0443 \xAB\u0420\u043E\u0441\u0442\u0435\u043B\u0435\u043A\u043E\u043C\xBB \u0437\u0430\u0432\u0435\u0440\u0448\u0438\u043B \u043E\u043F\u044B\u0442\u043D\u0443\u044E \u044D\u043A\u0441\u043F\u043B\u0443\u0430\u0442\u0430\u0446\u0438\u044E \u0441\u0435\u0433\u043C\u0435\u043D\u0442\u0430 \u0440\u0435\u0433\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u043E\u0439 \u0441\u0435\u0442\u0438, \u043F\u043E\u0441\u0442\u0440\u043E\u0435\u043D\u043D\u043E\u0433\u043E \u043D\u0430 \u043E\u0441\u043D\u043E\u0432\u0435 \u043A\u043E\u043C\u043C\u0443\u0442\u0430\u0442\u043E\u0440\u043E\u0432 \u0441 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435\u043C \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0439 SDN. \u041D\u0430 \u043D\u043E\u0432\u0443\u044E \u0438\u043D\u0444\u0440\u0430\u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0443 \u0431\u044B\u043B\u0438 \u043F\u0435\u0440\u0435\u0432\u0435\u0434\u0435\u043D\u044B \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u0435 \u0430\u0431\u043E\u043D\u0435\u043D\u0442\u044B \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438. \u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u044B \u043E\u043F\u044B\u0442\u043D\u043E\u0439 \u044D\u043A\u0441\u043F\u043B\u0443\u0430\u0442\u0430\u0446\u0438\u0438 \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u043B\u0438 \u0444\u0443\u043D\u043A\u0446\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u0443\u044E \u0433\u043E\u0442\u043E\u0432\u043D\u043E\u0441\u0442\u044C SDN-\u0440\u0435\u0448\u0435\u043D\u0438\u044F \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 Brain4Net \u043A \u043A\u043E\u043C\u043C\u0435\u0440\u0447\u0435\u0441\u043A\u043E\u043C\u0443 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044E \u0432 \u0441\u0435\u0442\u044F\u0445 \u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440\u043E\u0432 \u0441\u0432\u044F\u0437\u0438.</p>\n      <p class=\"font-h-m sp-b-1\">\u0420\u0430\u0437\u0432\u0438\u0442\u0438\u0435 \u0441\u0442\u0430\u0440\u0442\u0430\u043F\u043E\u0432</p>\n      <p>\u0412 2017 \u0433\u043E\u0434\u0443 \xAB\u0420\u043E\u0441\u0442\u0435\u043B\u0435\u043A\u043E\u043C\xBB, \u0424\u043E\u043D\u0434 \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u044F \u0438\u043D\u0442\u0435\u0440\u043D\u0435\u0442-\u0438\u043D\u0438\u0446\u0438\u0430\u0442\u0438\u0432 \u0438 \u0424\u043E\u043D\u0434 \xAB\u0421\u043A\u043E\u043B\u043A\u043E\u0432\u043E\xBB \u0437\u0430\u043F\u0443\u0441\u0442\u0438\u043B\u0438 \u0441\u043E\u0432\u043C\u0435\u0441\u0442\u043D\u0443\u044E \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0443-\u0430\u043A\u0441\u0435\u043B\u0435\u0440\u0430\u0442\u043E\u0440 \u043F\u043E \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0435 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0441\u0442\u0430\u0440\u0442\u0430\u043F\u043E\u0432. \u041E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0442\u043E\u0440\u044B \u0431\u0443\u0434\u0443\u0442 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0442\u044C \u0438 \u0440\u0430\u0437\u0432\u0438\u0432\u0430\u0442\u044C \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438, \u0437\u0430\u043D\u0438\u043C\u0430\u044E\u0449\u0438\u0435\u0441\u044F \u043F\u0440\u043E\u0435\u043A\u0442\u0430\u043C\u0438 \u043F\u043E \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044E \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F \u0438 \u041F\u041E \u0434\u043B\u044F \u0432\u0438\u0440\u0442\u0443\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u0438 \u0442\u0435\u043B\u0435\u043A\u043E\u043C\u043C\u0443\u043D\u0438\u043A\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0445 \u0441\u0435\u0442\u0435\u0439 \u0438 \u0426\u041E\u0414\u043E\u0432, \u0430 \u0442\u0430\u043A\u0436\u0435 \u0441\u0442\u0430\u0440\u0442\u0430\u043F\u044B \u0432 \u0441\u0444\u0435\u0440\u0435 IoT \u0438 IIoT, \u043A\u0438\u0431\u0435\u0440\u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u0438, \u0432\u0438\u0434\u0435\u043E\u0430\u043D\u0430\u043B\u0438\u0442\u0438\u043A\u0438, \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0439 \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u043D\u043E\u0433\u043E \u0437\u0440\u0435\u043D\u0438\u044F, connected cars, \u0434\u0440\u043E\u043D\u043E\u0432, \u0442\u0435\u043B\u0435\u043C\u0435\u0434\u0438\u0446\u0438\u043D\u044B \u0438 smart cars...</p>\n    </rt-microtabs-cnt>\n    <rt-microtabs-cnt>\n      <p class=\"sp-b-1\">\u041F\u0435\u0440\u0432\u044B\u043C \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u043C \xAB\u0420\u043E\u0441\u0442\u0435\u043B\u0435\u043A\u043E\u043C\u0430\xBB \u0441\u0442\u0430\u043B\u0430 \u043F\u0440\u043E\u043A\u043B\u0430\u0434\u043A\u0430 \u0432 1993 \u0433\u043E\u0434\u0443 \u043F\u043E \u0434\u043D\u0443 \u0411\u0430\u043B\u0442\u0438\u0439\u0441\u043A\u043E\u0433\u043E \u043C\u043E\u0440\u044F \u043C\u0435\u0436\u0434\u0443 \u0434\u0430\u0442\u0441\u043A\u0438\u043C \u0433\u043E\u0440\u043E\u0434\u043E\u043C \u041A\u0430\u0440\u043B\u0441\u043B\u0443\u043D\u0434\u0435 \u0438 \u0440\u043E\u0441\u0441\u0438\u0439\u0441\u043A\u0438\u043C \u0433\u043E\u0440\u043E\u0434\u043E\u043C \u041A\u0438\u043D\u0433\u0438\u0441\u0435\u043F\u043F\u043E\u043C \u043F\u0435\u0440\u0432\u043E\u0439 \u0432 \u0420\u043E\u0441\u0441\u0438\u0438 \u043F\u043E\u0434\u0432\u043E\u0434\u043D\u043E\u0439 \u0432\u043E\u043B\u043E\u043A\u043E\u043D\u043D\u043E-\u043E\u043F\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u043B\u0438\u043D\u0438\u0438 \xAB\u0414\u0430\u043D\u0438\u044F-\u0420\u043E\u0441\u0441\u0438\u044F \u2116 1\xBB \u043E\u0431\u0449\u0435\u0439 \u043F\u0440\u043E\u0442\u044F\u0436\u0451\u043D\u043D\u043E\u0441\u0442\u044C\u044E 1 216 \u043A\u043C \u0438 \u0451\u043C\u043A\u043E\u0441\u0442\u044C\u044E 560 \u041C\u0431\u0438\u0442/\u0441. \u041E\u0442 \u041A\u0438\u043D\u0433\u0438\u0441\u0435\u043F\u043F\u0430 \u0434\u043E \u041F\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433\u0430 \u0438 \u041C\u043E\u0441\u043A\u0432\u044B \u0431\u044B\u043B\u0438 \u043F\u043E\u0441\u0442\u0440\u043E\u0435\u043D\u044B \u0446\u0438\u0444\u0440\u043E\u0432\u044B\u0435 \u0440\u0430\u0434\u0438\u043E\u0440\u0435\u043B\u0435\u0439\u043D\u044B\u0435 \u043B\u0438\u043D\u0438\u0438. \u041A\u0430\u0431\u0435\u043B\u044C \u0432 \u0414\u0430\u043D\u0438\u044E \u043D\u0430\u0447\u0430\u043B \xAB\u0443\u0447\u0430\u0441\u0442\u0438\u0435 \u0420\u043E\u0441\u0441\u0438\u0438 \u0432 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u0438 \u0433\u043B\u043E\u0431\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u043A\u043E\u043B\u044C\u0446\u0430 \u0446\u0438\u0444\u0440\u043E\u0432\u043E\u0439 \u0441\u0432\u044F\u0437\u0438\xBB. \u042D\u0442\u043E \u043A\u043E\u043B\u044C\u0446\u043E \u0437\u0430\u043C\u043A\u043D\u0443\u043B\u043E\u0441\u044C \u0447\u0435\u0440\u0435\u0437 \u0434\u0432\u0430 \u0433\u043E\u0434\u0430, \u043A\u043E\u0433\u0434\u0430 \xAB\u0420\u043E\u0441\u0442\u0435\u043B\u0435\u043A\u043E\u043C\xBB \u0437\u0430\u043F\u0443\u0441\u0442\u0438\u043B \xAB\u0442\u0440\u0430\u043D\u0441\u0441\u0438\u0431\u0438\u0440\u0441\u043A\u0443\u044E \u0446\u0438\u0444\u0440\u043E\u0432\u0443\u044E \u0440\u0430\u0434\u0438\u043E\u0440\u0435\u043B\u0435\u0439\u043D\u0443\u044E \u043B\u0438\u043D\u0438\u044E \u0441\u0432\u044F\u0437\u0438 \u201E\u041C\u043E\u0441\u043A\u0432\u0430\u2014\u0425\u0430\u0431\u0430\u0440\u043E\u0432\u0441\u043A\u201C\xBB.</p>\n      <p class=\"sp-b-1\">\u0412 \u0441\u0435\u043D\u0442\u044F\u0431\u0440\u0435 2008 \u0433\u043E\u0434\u0430 \u0432 \u044D\u043A\u0441\u043F\u043B\u0443\u0430\u0442\u0430\u0446\u0438\u044E \u0431\u044B\u043B\u0430 \u0432\u0432\u0435\u0434\u0435\u043D\u0430 \u043F\u043E\u0434\u0432\u043E\u0434\u043D\u0430\u044F \u043A\u0430\u0431\u0435\u043B\u044C\u043D\u0430\u044F \u0441\u0438\u0441\u0442\u0435\u043C\u0430 \u0441\u0432\u044F\u0437\u0438 RJCN (Russia Japan Cable Network) \u043C\u0435\u0436\u0434\u0443 \u0420\u043E\u0441\u0441\u0438\u0435\u0439 \u0438 \u042F\u043F\u043E\u043D\u0438\u0435\u0439. \u041F\u0440\u043E\u0442\u044F\u0436\u0451\u043D\u043D\u043E\u0441\u0442\u044C \u043C\u043E\u0440\u0441\u043A\u043E\u0439 \u043A\u0430\u0431\u0435\u043B\u044C\u043D\u043E\u0439 \u0441\u0438\u0441\u0442\u0435\u043C\u044B \u041D\u0430\u0445\u043E\u0434\u043A\u0430 \u2014 \u041D\u0430\u043E\u044D\u0446\u0443 \u0441\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 1,8 \u0442\u044B\u0441. \u043A\u043C, \u043D\u0430\u0447\u0430\u043B\u044C\u043D\u0430\u044F \u0451\u043C\u043A\u043E\u0441\u0442\u044C \u0441\u0438\u0441\u0442\u0435\u043C\u044B \u2014 30 \u0413\u0431/\u0441. \u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u043F\u0440\u043E\u043F\u0443\u0441\u043A\u043D\u0430\u044F \u0441\u043F\u043E\u0441\u043E\u0431\u043D\u043E\u0441\u0442\u044C \u043B\u0438\u043D\u0438\u0438 \u0441\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 640 \u0413\u0431/\u0441.</p>\n      <p class=\"sp-b-1\">\u0412 \u0441\u0435\u043D\u0442\u044F\u0431\u0440\u0435 2016 \u0433\u043E\u0434\u0430 \xAB\u0420\u043E\u0441\u0442\u0435\u043B\u0435\u043A\u043E\u043C\xBB \u0437\u0430\u0432\u0435\u0440\u0448\u0438\u043B \u0441\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E \u043F\u043E\u0434\u0432\u043E\u0434\u043D\u043E\u0439 \u0432\u043E\u043B\u043E\u043A\u043E\u043D\u043D\u043E-\u043E\u043F\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u043B\u0438\u043D\u0438\u0438 \u0441\u0432\u044F\u0437\u0438 \xAB\u041A\u0430\u043C\u0447\u0430\u0442\u043A\u0430-\u0421\u0430\u0445\u0430\u043B\u0438\u043D-\u041C\u0430\u0433\u0430\u0434\u0430\u043D\xBB \u043E\u0431\u0449\u0435\u0439 \u043F\u0440\u043E\u0442\u044F\u0436\u0451\u043D\u043D\u043E\u0441\u0442\u044C\u044E 1 766 \u043A\u043C. \u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u043F\u0440\u043E\u043F\u0443\u0441\u043A\u043D\u0430\u044F \u0441\u043F\u043E\u0441\u043E\u0431\u043D\u043E\u0441\u0442\u044C \u0441\u0438\u0441\u0442\u0435\u043C\u044B 8 \u0422\u0431\u0438\u0442/\u0441. \u0420\u0435\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F \u043F\u0440\u043E\u0435\u043A\u0442\u0430 \u0437\u0430\u043D\u044F\u043B\u0430 635 \u0434\u043D\u0435\u0439.</p>\n      <p class=\"sp-b-1\">\u0412 2017 \u0433\u043E\u0434\u0443 \u043D\u0430\u0447\u0430\u0442\u0430 \u0440\u0435\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F \u043F\u0440\u043E\u0435\u043A\u0442\u0430 \xAB\u0421\u0430\u0445\u0430\u043B\u0438\u043D \u2014 \u041A\u0443\u0440\u0438\u043B\u044C\u0441\u043A\u0438\u0435 \u043E\u0441\u0442\u0440\u043E\u0432\u0430\xBB (\u042E\u0436\u043D\u043E-\u0421\u0430\u0445\u0430\u043B\u0438\u043D\u0441\u043A \u2014 \u041A\u0443\u0440\u0438\u043B\u044C\u0441\u043A \u2014 \u042E\u0436\u043D\u043E-\u041A\u0443\u0440\u0438\u043B\u044C\u0441\u043A \u2014 \u041A\u0440\u0430\u0431\u043E\u0437\u0430\u0432\u043E\u0434\u0441\u043A\u043E\u0435), \u0447\u0442\u043E \u043F\u043E\u0437\u0432\u043E\u043B\u0438\u0442 \u0441\u043E\u0437\u0434\u0430\u0442\u044C \u0432\u044B\u0441\u043E\u043A\u043E\u043D\u0430\u0434\u0451\u0436\u043D\u0443\u044E \u043B\u0438\u043D\u0438\u044E \u0441\u0432\u044F\u0437\u0438 (\u043F\u043E\u0434\u0432\u043E\u0434\u043D\u0430\u044F \u0447\u0430\u0441\u0442\u044C \u043F\u0440\u043E\u0442\u044F\u0436\u0451\u043D\u043D\u043E\u0441\u0442\u044C\u044E 900 \u043A\u043C \u0438 \u043D\u0430\u0437\u0435\u043C\u043D\u0430\u044F \u0447\u0430\u0441\u0442\u044C \u2014 50 \u043A\u043C. \u041D\u0430\u0447\u0430\u043B\u044C\u043D\u0430\u044F \u043F\u0440\u043E\u043F\u0443\u0441\u043A\u043D\u0430\u044F \u0441\u043F\u043E\u0441\u043E\u0431\u043D\u043E\u0441\u0442\u044C \u0441\u043E\u0441\u0442\u0430\u0432\u0438\u0442 40 \u0413\u0431\u0438\u0442/\u0441. \u041F\u043B\u0430\u043D\u0438\u0440\u0443\u0435\u0442\u0441\u044F, \u0447\u0442\u043E \u0432 2018 \u0433\u043E\u0434\u0443 \u043A\u0430\u0431\u0435\u043B\u044C \u0431\u0443\u0434\u0435\u0442 \u043F\u043E\u0441\u0442\u0440\u043E\u0435\u043D, \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0438\u0435 \u0432\u0441\u0435\u0445 \u043F\u0440\u043E\u0446\u0435\u0434\u0443\u0440 \u043F\u043E \u043F\u0443\u0441\u043A\u043E\u043D\u0430\u043B\u0430\u0434\u043A\u0435 \u0444\u043E\u0440\u043C\u0430\u043B\u044C\u043D\u043E \u0437\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u0441\u044F \u0432 2019 \u0433\u043E\u0434\u0443.</p>\n      <p>\u0412 \u0444\u0435\u0432\u0440\u0430\u043B\u0435 2019 \u0433\u043E\u0434\u0430 \u0433\u043E\u0441\u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440 \xAB\u0420\u043E\u0441\u0442\u0435\u043B\u0435\u043A\u043E\u043C\xBB \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0438\u043B \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0443\u044E \u0433\u043E\u0442\u043E\u0432\u043D\u043E\u0441\u0442\u044C \u043F\u043E\u0434\u0432\u043E\u0434\u043D\u043E\u0439 \u043E\u043F\u0442\u043E\u0432\u043E\u043B\u043E\u043A\u043E\u043D\u043D\u043E\u0439 \u043B\u0438\u043D\u0438\u0438 \u0441\u0432\u044F\u0437\u0438 \u043E\u0442 \u0421\u0430\u0445\u0430\u043B\u0438\u043D\u0430 \u0434\u043E \u042E\u0436\u043D\u044B\u0445 \u041A\u0443\u0440\u0438\u043B, \u0431\u043B\u0430\u0433\u043E\u0434\u0430\u0440\u044F \u043A\u043E\u0442\u043E\u0440\u043E\u0439 \u0436\u0438\u0442\u0435\u043B\u0438 \u043E\u0441\u0442\u0440\u043E\u0432\u043E\u0432 \u0418\u0442\u0443\u0440\u0443\u043F, \u041A\u0443\u043D\u0430\u0448\u0438\u0440 \u0438 \u0428\u0438\u043A\u043E\u0442\u0430\u043D \u043F\u043E\u043B\u0443\u0447\u0438\u043B\u0438 \u0431\u044B\u0441\u0442\u0440\u044B\u0439 \u0438 \u043D\u0435\u0434\u043E\u0440\u043E\u0433\u043E\u0439 \u0431\u0435\u0437\u043B\u0438\u043C\u0438\u0442\u043D\u044B\u0439 \u0438\u043D\u0442\u0435\u0440\u043D\u0435\u0442.</p>\n    </rt-microtabs-cnt>\n  </template>\n</rt-microtabs>\n      ";
    },
    inverseBlackViewA: function inverseBlackViewA() {
      return "\n<div class=\"rt-tariff is--theme-dark is--no-spaces is--no-borders\">\n  <rt-microtabs class=\"sp-h-1 sp-t-0-3 sp-b-0-4\">\n    <template slot=\"nav\">\n      <rt-microtabs-nav theme=\"purple\">\u0414\u043E\u043F. \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B</rt-microtabs-nav>\n      <rt-microtabs-nav>\u0410\u043D\u0442\u0438\u0432\u0438\u0440\u0443\u0441</rt-microtabs-nav>\n      <rt-microtabs-nav>\u042F\u043D\u0434\u0435\u043A\u0441 \u0414\u0438\u0441\u043A</rt-microtabs-nav>\n    </template>\n    <template slot=\"cnt\">\n      <rt-microtabs-cnt>\n        <p>\u041F\u0435\u0440\u0435\u0430\u0434\u0440\u0435\u0441\u0430\u0446\u0438\u044F</p>\n        <p>\u0413\u043E\u043B\u043E\u0441\u043E\u0432\u043E\u0435 \u043C\u0435\u043D\u044E IVR</p>\n        <p>\u0420\u0430\u0441\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u0435  \u0437\u0432\u043E\u043D\u043A\u043E\u0432</p>\n        <p>\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430 \u0438 \u0430\u043D\u0430\u043B\u0438\u0442\u0438\u043A\u0430</p>\n      </rt-microtabs-cnt>\n      <rt-microtabs-cnt>\n        <p>Kaspersky Internet Security 2 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430</p>\n      </rt-microtabs-cnt>\n      <rt-microtabs-cnt>\n        <p>5 \u0413\u0411 \u042F\u043D\u0434\u0435\u043A\u0441.\u0414\u0438\u0441\u043A +</p>\n      </rt-microtabs-cnt>\n    </template>\n  </rt-microtabs>\n</div>\n      ";
    },
    inverseBlackViewB: function inverseBlackViewB() {
      return "\n<div class=\"rt-tariff is--theme-dark is--no-spaces is--no-borders\">\n  <rt-microtabs class=\"sp-h-1 sp-t-0-3 sp-b-0-4\">\n    <template slot=\"nav\">\n      <rt-microtabs-nav theme=\"orange\">\u0414\u043E\u043F. \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B</rt-microtabs-nav>\n      <rt-microtabs-nav>\u0410\u043D\u0442\u0438\u0432\u0438\u0440\u0443\u0441</rt-microtabs-nav>\n      <rt-microtabs-nav>\u042F\u043D\u0434\u0435\u043A\u0441 \u0414\u0438\u0441\u043A</rt-microtabs-nav>\n    </template>\n    <template slot=\"cnt\">\n      <rt-microtabs-cnt>\n        <p>\u041F\u0435\u0440\u0435\u0430\u0434\u0440\u0435\u0441\u0430\u0446\u0438\u044F</p>\n        <p>\u0413\u043E\u043B\u043E\u0441\u043E\u0432\u043E\u0435 \u043C\u0435\u043D\u044E IVR</p>\n        <p>\u0420\u0430\u0441\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u0435  \u0437\u0432\u043E\u043D\u043A\u043E\u0432</p>\n        <p>\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430 \u0438 \u0430\u043D\u0430\u043B\u0438\u0442\u0438\u043A\u0430</p>\n      </rt-microtabs-cnt>\n      <rt-microtabs-cnt>\n        <p>Kaspersky Internet Security 2 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430</p>\n      </rt-microtabs-cnt>\n      <rt-microtabs-cnt>\n        <p>5 \u0413\u0411 \u042F\u043D\u0434\u0435\u043A\u0441.\u0414\u0438\u0441\u043A +</p>\n      </rt-microtabs-cnt>\n    </template>\n  </rt-microtabs>\n</div>\n      ";
    },
    inverseBlueViewA: function inverseBlueViewA() {
      return "\n<div class=\"rt-tariff is--theme-yadisk is--no-spaces is--no-borders\">\n  <rt-microtabs class=\"sp-h-1 sp-t-0-3 sp-b-0-4\">\n    <template slot=\"nav\">\n      <rt-microtabs-nav theme=\"purple\">\u0414\u043E\u043F. \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B</rt-microtabs-nav>\n      <rt-microtabs-nav>\u0410\u043D\u0442\u0438\u0432\u0438\u0440\u0443\u0441</rt-microtabs-nav>\n      <rt-microtabs-nav>\u042F\u043D\u0434\u0435\u043A\u0441 \u0414\u0438\u0441\u043A</rt-microtabs-nav>\n    </template>\n    <template slot=\"cnt\">\n      <rt-microtabs-cnt>\n        <p>\u041F\u0435\u0440\u0435\u0430\u0434\u0440\u0435\u0441\u0430\u0446\u0438\u044F</p>\n        <p>\u0413\u043E\u043B\u043E\u0441\u043E\u0432\u043E\u0435 \u043C\u0435\u043D\u044E IVR</p>\n        <p>\u0420\u0430\u0441\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u0435  \u0437\u0432\u043E\u043D\u043A\u043E\u0432</p>\n        <p>\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430 \u0438 \u0430\u043D\u0430\u043B\u0438\u0442\u0438\u043A\u0430</p>\n      </rt-microtabs-cnt>\n      <rt-microtabs-cnt>\n        <p>Kaspersky Internet Security 2 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430</p>\n      </rt-microtabs-cnt>\n      <rt-microtabs-cnt>\n        <p>5 \u0413\u0411 \u042F\u043D\u0434\u0435\u043A\u0441.\u0414\u0438\u0441\u043A +</p>\n      </rt-microtabs-cnt>\n    </template>\n  </rt-microtabs>\n</div>\n      ";
    },
    inverseBlueViewB: function inverseBlueViewB() {
      return "\n<div class=\"rt-tariff is--theme-yadisk is--no-spaces is--no-borders\">\n  <rt-microtabs class=\"sp-h-1 sp-t-0-3 sp-b-0-4\">\n    <template slot=\"nav\">\n      <rt-microtabs-nav theme=\"orange\">\u0414\u043E\u043F. \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B</rt-microtabs-nav>\n      <rt-microtabs-nav>\u0410\u043D\u0442\u0438\u0432\u0438\u0440\u0443\u0441</rt-microtabs-nav>\n      <rt-microtabs-nav>\u042F\u043D\u0434\u0435\u043A\u0441 \u0414\u0438\u0441\u043A</rt-microtabs-nav>\n    </template>\n    <template slot=\"cnt\">\n      <rt-microtabs-cnt>\n        <p>\u041F\u0435\u0440\u0435\u0430\u0434\u0440\u0435\u0441\u0430\u0446\u0438\u044F</p>\n        <p>\u0413\u043E\u043B\u043E\u0441\u043E\u0432\u043E\u0435 \u043C\u0435\u043D\u044E IVR</p>\n        <p>\u0420\u0430\u0441\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u0435  \u0437\u0432\u043E\u043D\u043A\u043E\u0432</p>\n        <p>\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430 \u0438 \u0430\u043D\u0430\u043B\u0438\u0442\u0438\u043A\u0430</p>\n      </rt-microtabs-cnt>\n      <rt-microtabs-cnt>\n        <p>Kaspersky Internet Security 2 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430</p>\n      </rt-microtabs-cnt>\n      <rt-microtabs-cnt>\n        <p>5 \u0413\u0411 \u042F\u043D\u0434\u0435\u043A\u0441.\u0414\u0438\u0441\u043A +</p>\n      </rt-microtabs-cnt>\n    </template>\n  </rt-microtabs>\n</div>\n      ";
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/stylus-loader/index.js!./node_modules/vue-loader/lib/index.js?!./src/example-pages/components/group/Microtabs--demo.vue?vue&type=style&index=0&lang=stylus&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/stylus-loader!./node_modules/vue-loader/lib??vue-loader-options!./src/example-pages/components/group/Microtabs--demo.vue?vue&type=style&index=0&lang=stylus& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".dont-use {\n  position: relative;\n}\n.dont-use:before,\n.dont-use:after {\n  content: '';\n  background: rgba(255,0,0,0.3);\n  margin: auto;\n  pointer-events: none;\n  position: absolute;\n  width: 4px;\n  height: 150%;\n  top: 0;\n  left: -20%;\n  right: 0;\n  bottom: 0;\n  z-index: 22;\n}\n.dont-use:before {\n  transform: rotate(-45deg);\n}\n.dont-use:after {\n  transform: rotate(45deg);\n}\n.test-list {\n  background: #fff;\n  box-shadow: inset 0 0 0 20px #bdf1bd;\n  padding: 20px;\n  min-width: 280px;\n  max-width: 100%;\n  position: relative;\n}\n.test-list--accent {\n  box-shadow: inset 0 0 0 20px #ee9;\n}\n.test-list--accent .rt-microtabs-nav__item-tgl {\n  background: #f00;\n  z-index: 2;\n}\n.test-list--accent .rt-microtabs-nav__item[data-key=\"0\"],\n.test-list--accent .rt-microtabs-cnt__item:nth-child(1) {\n  background: rgba(255,0,0,0.4);\n}\n.test-list--accent .rt-microtabs-nav__item[data-key=\"1\"],\n.test-list--accent .rt-microtabs-cnt__item:nth-child(2) {\n  background: rgba(0,255,0,0.4);\n}\n.test-list--accent .rt-microtabs-nav__item[data-key=\"2\"],\n.test-list--accent .rt-microtabs-cnt__item:nth-child(3) {\n  background: rgba(0,0,255,0.4);\n}\n.test-list--accent .rt-microtabs-nav__item[data-key=\"3\"],\n.test-list--accent .rt-microtabs-cnt__item:nth-child(4) {\n  background: rgba(255,0,255,0.4);\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/stylus-loader/index.js!./node_modules/vue-loader/lib/index.js?!./src/example-pages/components/group/Microtabs--demo.vue?vue&type=style&index=0&lang=stylus&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/stylus-loader!./node_modules/vue-loader/lib??vue-loader-options!./src/example-pages/components/group/Microtabs--demo.vue?vue&type=style&index=0&lang=stylus& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/stylus-loader!../../../../node_modules/vue-loader/lib??vue-loader-options!./Microtabs--demo.vue?vue&type=style&index=0&lang=stylus& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/stylus-loader/index.js!./node_modules/vue-loader/lib/index.js?!./src/example-pages/components/group/Microtabs--demo.vue?vue&type=style&index=0&lang=stylus&");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/example-pages/components/group/Microtabs--demo.vue?vue&type=template&id=f99706e2&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/example-pages/components/group/Microtabs--demo.vue?vue&type=template&id=f99706e2& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticStyle:{"background":"#f8f8f8","color":"#101828"}},[_c('div',{staticClass:"rt-container"},[_c('div',{staticClass:"app-content rt-col-12 rt-col-md-3"},[_vm._m(0),_vm._v(" "),_c('rt-row',{staticClass:"app-row sp-t-2"},[_c('rt-col',{attrs:{"size":"5","mobile-size":"3"}},[_c('h3',{staticClass:"sp-b-1"},[_vm._v("Упрощенный режим (без контента)")]),_vm._v(" "),_c('pre-code',{attrs:{"text":_vm.sampleView}})],1),_vm._v(" "),_c('rt-col',{attrs:{"size":"12"}},[_c('h3',{staticClass:"sp-t-2 sp-b-1"},[_vm._v("Обычный режим")])]),_vm._v(" "),_c('rt-col',{staticClass:"md-sp-b-2",attrs:{"size":"6","mobile-size":"3"}},[_c('pre-code',{attrs:{"text":_vm.spacesView}})],1),_vm._v(" "),_c('rt-col',{attrs:{"size":"6","mobile-size":"3"}},[_c('pre-code',{attrs:{"text":_vm.themesView}})],1),_vm._v(" "),_c('rt-col',{attrs:{"size":"12"}},[_c('h3',{staticClass:"sp-t-2 sp-b-1"},[_vm._v("Режим без ограничения высоты контента")])]),_vm._v(" "),_c('rt-col',{staticClass:"md-sp-b-2",attrs:{"size":"12","mobile-size":"3"}},[_c('pre-code',{attrs:{"text":_vm.noFitView}})],1),_vm._v(" "),_c('rt-col',{attrs:{"size":"6","mobile-size":"3"}},[_c('h3',{staticClass:"sp-t-3 sp-b-1"},[_vm._v("Инверсия цвета (dark тема карточек)")]),_vm._v(" "),_c('pre-code',{staticClass:"sp-b-2",attrs:{"text":_vm.inverseBlackViewA}}),_vm._v(" "),_c('pre-code',{attrs:{"text":_vm.inverseBlackViewB}})],1),_vm._v(" "),_c('rt-col',{attrs:{"size":"6","mobile-size":"3"}},[_c('h3',{staticClass:"sp-t-3 sp-b-1  md-sp-t-2"},[_vm._v("Инверсия цвета (yadisk тема карточек)")]),_vm._v(" "),_c('pre-code',{staticClass:"sp-b-2",attrs:{"text":_vm.inverseBlueViewA}}),_vm._v(" "),_c('pre-code',{attrs:{"text":_vm.inverseBlueViewB}})],1),_vm._v(" "),_c('rt-col',{attrs:{"size":"12"}},[_c('h3',{staticClass:"sp-t-3 sp-b-1"},[_vm._v("Требования и дизайн-система")])]),_vm._v(" "),_c('rt-col',{attrs:{"size":"3","tablet-size":"3","mobile-size":"3"}},[_c('p',{staticClass:"sp-b-1"},[_vm._v("Нельзя размещать всю палитру раскрашенных microtabs-nav в ряд")]),_vm._v(" "),_c('div',{staticClass:"dont-use",staticStyle:{"max-width":"280px"}},[_c('rt-microtabs',[_c('template',{slot:"nav"},[_c('rt-microtabs-nav',{attrs:{"theme":"purple"}},[_vm._v("Цвет A")]),_vm._v(" "),_c('rt-microtabs-nav',{attrs:{"theme":"orange"}},[_vm._v("Цвет B")]),_vm._v(" "),_c('rt-microtabs-nav',[_vm._v("Обычный цвет")])],1),_vm._v(" "),_c('template',{slot:"cnt"},[_c('rt-microtabs-cnt',[_c('p',[_vm._v("Описание вкладки в одну строку")])]),_vm._v(" "),_c('rt-microtabs-cnt',[_c('p',[_vm._v("Описание вкладки в одну строку")]),_vm._v(" "),_c('p',[_vm._v("Описание вкладки во вторую строку")])]),_vm._v(" "),_c('rt-microtabs-cnt',[_c('p',[_vm._v("Описание вкладки в одну строку")]),_vm._v(" "),_c('p',[_vm._v("Описание вкладки во вторую строку")])])],1)],2)],1)]),_vm._v(" "),_c('rt-col',{attrs:{"size":"3","tablet-size":"3","mobile-size":"3"}},[_c('p',{staticClass:"sp-b-1  md-sp-t-2"},[_vm._v("Нельзя размещать различный по высоте контент в microtabs-cnt")]),_vm._v(" "),_c('div',{staticClass:"dont-use"},[_c('rt-microtabs',{staticStyle:{"border":"2px solid #f00"},attrs:{"fit":false}},[_c('template',{slot:"nav"},[_c('rt-microtabs-nav',[_vm._v("Вкладка A")]),_vm._v(" "),_c('rt-microtabs-nav',[_vm._v("Вкладка B")]),_vm._v(" "),_c('rt-microtabs-nav',[_vm._v("Вкладка C")])],1),_vm._v(" "),_c('template',{slot:"cnt"},[_c('rt-microtabs-cnt',[_c('p',[_vm._v("Описание вкладки в одну строку")])]),_vm._v(" "),_c('rt-microtabs-cnt',[_c('p',[_vm._v("Описание вкладки в одну строку")]),_vm._v(" "),_c('p',[_vm._v("Описание вкладки во вторую строку")]),_vm._v(" "),_c('p',[_vm._v("Описание вкладки в третью строку")]),_vm._v(" "),_c('p',[_vm._v("Описание вкладки в четвертую строку")]),_vm._v(" "),_c('p',[_vm._v("Описание вкладки в пятую строку")]),_vm._v(" "),_c('p',[_vm._v("Описание вкладки в шестую строку")]),_vm._v(" "),_c('p',[_vm._v("Описание вкладки в седьмую строку")]),_vm._v(" "),_c('p',[_vm._v("Описание вкладки в восьмую строку")]),_vm._v(" "),_c('p',[_vm._v("и так до бесконечности...")])]),_vm._v(" "),_c('rt-microtabs-cnt',[_c('p',[_vm._v("Описание вкладки в одну строку")])])],1)],2)],1)]),_vm._v(" "),_c('rt-col',{attrs:{"size":"12"}},[_c('h4',{staticClass:"sp-t-2 sp-b-1"},[_vm._v("Tester")])]),_vm._v(" "),_c('rt-col',{attrs:{"size":"5","mobile-size":"3"}},[_c('div',{staticClass:"sp-b-1 d-flex"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.testBlockWidth),expression:"testBlockWidth"}],attrs:{"type":"range","min":"250","max":"780"},domProps:{"value":(_vm.testBlockWidth)},on:{"__r":function($event){_vm.testBlockWidth=$event.target.value}}}),_vm._v("\n             width: "+_vm._s(_vm.testBlockWidth)+"px\n          ")]),_vm._v(" "),_c('div',{staticClass:"sp-b-1"},[_c('a',{attrs:{"href":"javascript:void(0)"},on:{"click":function () { return _vm.cloneShown = !_vm.cloneShown; }}},[_vm._v("Clone toggle")])])]),_vm._v(" "),_c('rt-col',{attrs:{"size":"7","mobile-size":"3"}},[_c('rt-microtabs',{staticClass:"test-list test-list--accent sp-v-0-3",style:(("width:" + _vm.testBlockWidth + "px"))},[_c('template',{slot:"nav"},_vm._l((_vm.testList),function(nav,key){return _c('rt-microtabs-nav',{key:key},[_c('div',{domProps:{"innerHTML":_vm._s(nav.nav)}})])}),1),_vm._v(" "),_c('template',{slot:"cnt"},_vm._l((_vm.testList),function(cnt,key){return _c('rt-microtabs-cnt',{key:key,domProps:{"innerHTML":_vm._s(cnt.cnt)}})}),1)],2),_vm._v(" "),(_vm.cloneShown)?_c('rt-microtabs',{staticClass:"test-list sp-v-0-3",style:(("width:" + _vm.testBlockWidth + "px"))},[_c('template',{slot:"nav"},_vm._l((_vm.testList),function(nav,key){return _c('rt-microtabs-nav',{key:key},[_c('div',{domProps:{"innerHTML":_vm._s(nav.nav)}})])}),1),_vm._v(" "),_c('template',{slot:"cnt"},_vm._l((_vm.testList),function(cnt,key){return _c('rt-microtabs-cnt',{key:key,domProps:{"innerHTML":_vm._s(cnt.cnt)}})}),1)],2):_vm._e()],1)],1)],1),_vm._v(" "),_c('div',{staticClass:"rt-container"},[_c('documentation-builder',{staticClass:"sp-t-2-1",attrs:{"json":_vm.docProps,"type":"props"}}),_vm._v(" "),_c('documentation-builder',{staticClass:"sp-t-2-1",attrs:{"json":_vm.docEvents,"type":"events"}})],1)])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"app-title"},[_c('h1',{staticClass:"rt-font-hero sp-b-1"},[_vm._v("Microtabs")]),_vm._v(" "),_c('p',[_vm._v("Для вывода включенных опций в тарифной карточке было принято группировать их в microtabs. Данный компонент решает сразу 2 проблемы: некотролируемость высоты карточки и отображение простых данных.")]),_vm._v(" "),_c('p',[_vm._v("Под капотом microtabs заложена логика подстройки под ширину контейнера, с учетом изменения ширины экрана.")])])}]



/***/ }),

/***/ "./src/example-pages/components/group/Microtabs--demo.vue":
/*!****************************************************************!*\
  !*** ./src/example-pages/components/group/Microtabs--demo.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Microtabs_demo_vue_vue_type_template_id_f99706e2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Microtabs--demo.vue?vue&type=template&id=f99706e2& */ "./src/example-pages/components/group/Microtabs--demo.vue?vue&type=template&id=f99706e2&");
/* harmony import */ var _Microtabs_demo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Microtabs--demo.vue?vue&type=script&lang=js& */ "./src/example-pages/components/group/Microtabs--demo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Microtabs_demo_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Microtabs--demo.vue?vue&type=style&index=0&lang=stylus& */ "./src/example-pages/components/group/Microtabs--demo.vue?vue&type=style&index=0&lang=stylus&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Microtabs_demo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Microtabs_demo_vue_vue_type_template_id_f99706e2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Microtabs_demo_vue_vue_type_template_id_f99706e2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/example-pages/components/group/Microtabs--demo.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./src/example-pages/components/group/Microtabs--demo.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Microtabs_demo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./Microtabs--demo.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/example-pages/components/group/Microtabs--demo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Microtabs_demo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/example-pages/components/group/Microtabs--demo.vue?vue&type=style&index=0&lang=stylus&":
/*!****************************************************************************************************!*\
  !*** ./src/example-pages/components/group/Microtabs--demo.vue?vue&type=style&index=0&lang=stylus& ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Microtabs_demo_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/stylus-loader!../../../../node_modules/vue-loader/lib??vue-loader-options!./Microtabs--demo.vue?vue&type=style&index=0&lang=stylus& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/stylus-loader/index.js!./node_modules/vue-loader/lib/index.js?!./src/example-pages/components/group/Microtabs--demo.vue?vue&type=style&index=0&lang=stylus&");
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Microtabs_demo_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Microtabs_demo_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Microtabs_demo_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Microtabs_demo_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Microtabs_demo_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/example-pages/components/group/Microtabs--demo.vue?vue&type=template&id=f99706e2&":
/*!***********************************************************************************************!*\
  !*** ./src/example-pages/components/group/Microtabs--demo.vue?vue&type=template&id=f99706e2& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Microtabs_demo_vue_vue_type_template_id_f99706e2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Microtabs--demo.vue?vue&type=template&id=f99706e2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/example-pages/components/group/Microtabs--demo.vue?vue&type=template&id=f99706e2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Microtabs_demo_vue_vue_type_template_id_f99706e2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Microtabs_demo_vue_vue_type_template_id_f99706e2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/molecules/components/Microtabs/docs/events.json":
/*!*************************************************************!*\
  !*** ./src/molecules/components/Microtabs/docs/events.json ***!
  \*************************************************************/
/*! exports provided: items, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"items\":[{\"name\":\"onChange\",\"description\":\"Возвращает активный навигатор и контент, при клике на таб\",\"component\":\"rt-microtabs\",\"return\":\"DOMElement, DOMElement|null\"}]}");

/***/ }),

/***/ "./src/molecules/components/Microtabs/docs/props.json":
/*!************************************************************!*\
  !*** ./src/molecules/components/Microtabs/docs/props.json ***!
  \************************************************************/
/*! exports provided: items, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"items\":[{\"name\":\"rt-microtabs\",\"property\":\"theme\",\"type\":\"String\",\"description\":\"Тема отображения для всех табов (purple, orange)\",\"value\":\"default\"},{\"name\":\"rt-microtabs\",\"property\":\"fit\",\"type\":\"Boolean\",\"description\":\"Обрезать контент выше трех строк\",\"value\":\"true\"},{\"name\":\"rt-microtabs-nav\",\"property\":\"theme\",\"type\":\"String\",\"description\":\"Тема отображения определенного таба (purple, orange)\",\"value\":\"default\"}]}");

/***/ })

}]);
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[42],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/example-pages/components/simple/SystemIcons.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/example-pages/components/simple/SystemIcons.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_rt_style_kit_atoms_local_components_SystemIcons_docs_names_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue-rt-style-kit-atoms-local/components/SystemIcons/docs/names.json */ "./src/atoms/components/SystemIcons/docs/names.json");
var _vue_rt_style_kit_atoms_local_components_SystemIcons_docs_names_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! @vue-rt-style-kit-atoms-local/components/SystemIcons/docs/names.json */ "./src/atoms/components/SystemIcons/docs/names.json", 1);
/* harmony import */ var _vue_rt_style_kit_atoms_local_components_SystemIcons_docs_classnames_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vue-rt-style-kit-atoms-local/components/SystemIcons/docs/classnames.json */ "./src/atoms/components/SystemIcons/docs/classnames.json");
var _vue_rt_style_kit_atoms_local_components_SystemIcons_docs_classnames_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! @vue-rt-style-kit-atoms-local/components/SystemIcons/docs/classnames.json */ "./src/atoms/components/SystemIcons/docs/classnames.json", 1);
/* harmony import */ var _vue_rt_style_kit_atoms_local_components_SystemIcons_docs_index_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vue-rt-style-kit-atoms-local/components/SystemIcons/docs/index.json */ "./src/atoms/components/SystemIcons/docs/index.json");
var _vue_rt_style_kit_atoms_local_components_SystemIcons_docs_index_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! @vue-rt-style-kit-atoms-local/components/SystemIcons/docs/index.json */ "./src/atoms/components/SystemIcons/docs/index.json", 1);
//
//



var componentsList = {};
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "AppSystemIcons",
  components: componentsList,
  created: function created() {},
  data: function data() {
    return {
      documentation: {},
      classnames: {}
    };
  },
  mounted: function mounted() {
    this.documentation = _vue_rt_style_kit_atoms_local_components_SystemIcons_docs_index_json__WEBPACK_IMPORTED_MODULE_2__;
    this.classnames = _vue_rt_style_kit_atoms_local_components_SystemIcons_docs_classnames_json__WEBPACK_IMPORTED_MODULE_1__;
  },
  methods: {},
  computed: {
    renderList: function renderList() {
      var h = this.$createElement;
      return _vue_rt_style_kit_atoms_local_components_SystemIcons_docs_names_json__WEBPACK_IMPORTED_MODULE_0__.map(function (i) {
        var code = '<rt-system-icons name="' + i.name + '"></rt-system-icons>';
        return h("rt-table-row", [h("rt-table-item", [h("pre-code", {
          attrs: {
            text: code
          }
        })]), h("rt-table-item", [i.name]), h("rt-table-item", [i.label])]);
      });
    },
    renderTable: function renderTable() {}
  },
  render: function render() {
    var h = arguments[0];
    return h("div", {
      "class": "rt-container"
    }, [h("div", {
      "class": "app-content rt-col-12 rt-col-md-3"
    }, [h("div", {
      "class": "app-title"
    }, [h("h1", {
      "class": "rt-font-hero"
    }, ["System Icons"])]), h("div", {
      "class": "app-body"
    }, [h("div", {
      "class": "app-row row"
    }, [h("rt-table", {
      "class": "rt-font-label"
    }, [h("template", {
      slot: "header"
    }, [h("rt-table-head-item", ["icon"]), h("rt-table-head-item", ["name"]), h("rt-table-head-item", ["label"])]), h("template", {
      slot: "body"
    }, [this.renderList])])]), h("div", {
      "class": "app-row row"
    }, [h("pre-code", {
      attrs: {
        text: '<rt-button color="purple-border rt-sys-icon-hover--orange"><rt-system-icons color="purple" name="add large"></rt-system-icons> <span class="sp-l-1">свойство</span></rt-button>'
      }
    })]), h("documentation-builder", {
      attrs: {
        json: this.documentation,
        type: "props"
      }
    }), h("documentation-builder", {
      attrs: {
        "labels-json": [{
          label: 'class name',
          name: 'name'
        }, {
          label: 'description',
          name: 'description'
        }],
        json: this.classnames,
        type: "outher class affect"
      }
    })])])]);
  }
});

/***/ }),

/***/ "./src/atoms/components/SystemIcons/docs/classnames.json":
/*!***************************************************************!*\
  !*** ./src/atoms/components/SystemIcons/docs/classnames.json ***!
  \***************************************************************/
/*! exports provided: items, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"items\":[{\"name\":\".rt-sys-icon-hover--{colorName}\",\"description\":\"colorName - название цвета <br/> при наведении на данный элемент все дочерние .rt-sys-icon изменят свой цвет на {colorName}\",\"version\":\"0.3.30\"}]}");

/***/ }),

/***/ "./src/atoms/components/SystemIcons/docs/index.json":
/*!**********************************************************!*\
  !*** ./src/atoms/components/SystemIcons/docs/index.json ***!
  \**********************************************************/
/*! exports provided: items, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"items\":[{\"name\":\"rt-system-icons\",\"property\":\"color\",\"type\":\"String\",\"description\":\"Название цвета иконки\",\"value\":\"''\",\"version\":\"0.3.30\"}]}");

/***/ }),

/***/ "./src/atoms/components/SystemIcons/docs/names.json":
/*!**********************************************************!*\
  !*** ./src/atoms/components/SystemIcons/docs/names.json ***!
  \**********************************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"name\":\"add large\",\"label\":\"Плюс большой (добавить)\"},{\"name\":\"add small\",\"label\":\"Плюс малый (добавить)\"},{\"name\":\"arrow down\",\"label\":\"Стрелка вниз\"},{\"name\":\"arrow left down\",\"label\":\"Стрелка влево-вниз\"},{\"name\":\"arrow left\",\"label\":\"Стрелка влево\"},{\"name\":\"arrow right up\",\"label\":\"Стрелка вправо-вверх\"},{\"name\":\"arrow right\",\"label\":\"Стрелка вправо\"},{\"name\":\"arrow up\",\"label\":\"Стрелка вверх\"},{\"name\":\"check large\",\"label\":\"Галочка большая\"},{\"name\":\"check small\",\"label\":\"Галочка малая\"},{\"name\":\"checklist\",\"label\":\"Выбрано, добавлено\"},{\"name\":\"chevron down\",\"label\":\"Шеврон вниз\"},{\"name\":\"chevron left\",\"label\":\"Шеврон влево\"},{\"name\":\"chevron right\",\"label\":\"Шеврон вправо\"},{\"name\":\"chevron sort\",\"label\":\"Шеврон сортировка\"},{\"name\":\"chevron up\",\"label\":\"Шеврон вверх\"},{\"name\":\"close large\",\"label\":\"Крестик большой (закрыть)\"},{\"name\":\"close small\",\"label\":\"Крестик малый (закрыть)\"},{\"name\":\"copy\",\"label\":\"Дублировать\"},{\"name\":\"download\",\"label\":\"Загрузить\"},{\"name\":\"fast forward 10s\",\"label\":\"Перемотка вперед на 10 секунд\"},{\"name\":\"fast forward 15s\",\"label\":\"Перемотка вперед на 15 секунд\"},{\"name\":\"fast forward 30s\",\"label\":\"Перемотка вперед на 30 секунд\"},{\"name\":\"fast forward 5s\",\"label\":\"Перемотка вперед на 5 секунд\"},{\"name\":\"fast forward\",\"label\":\"Быстрая перемотка вперед\"},{\"name\":\"fast rewind 10s\",\"label\":\"Перемотка назад на 10 секунд\"},{\"name\":\"fast rewind 15s\",\"label\":\"Перемотка назад на 15 секунд\"},{\"name\":\"fast rewind 30s\",\"label\":\"Перемотка назад на 30 секунд\"},{\"name\":\"fast rewind 5s\",\"label\":\"Перемотка назад на 5 секунд\"},{\"name\":\"fast rewind\",\"label\":\"Быстрая перемотка назад\"},{\"name\":\"folder add\",\"label\":\"Добавить папку\"},{\"name\":\"folder details\",\"label\":\"Информация о папке\"},{\"name\":\"folder shared\",\"label\":\"Дать доступ к папке\"},{\"name\":\"folder\",\"label\":\"Папка\"},{\"name\":\"geolocation small\",\"label\":\"Геолокация малая\"},{\"name\":\"geolocation\",\"label\":\"Геолокация\"},{\"name\":\"home\",\"label\":\"Домой\"},{\"name\":\"link native\",\"label\":\"Ссылка коренная\"},{\"name\":\"link\",\"label\":\"Ссылка\"},{\"name\":\"map\",\"label\":\"Карта\"},{\"name\":\"maximize\",\"label\":\"Увеличить, развернуть\"},{\"name\":\"menu + bullets\",\"label\":\"Меню + буллеты\"},{\"name\":\"menu kebab\",\"label\":\"Кебаб-меню\"},{\"name\":\"menu\",\"label\":\"Бургер-меню\"},{\"name\":\"minimize\",\"label\":\"Уменьшить, свернуть\"},{\"name\":\"more\",\"label\":\"Еще\"},{\"name\":\"overview 1 screen\",\"label\":\"Обзор 1 экран\"},{\"name\":\"overview 2 screen\",\"label\":\"Обзор 2 экрана\"},{\"name\":\"overview 4 screen\",\"label\":\"Обзор 4 экрана\"},{\"name\":\"overview 6 screen\",\"label\":\"Обзор 6 экранов\"},{\"name\":\"pause\",\"label\":\"Остановить, пауза\"},{\"name\":\"pin fill\",\"label\":\"Местоположение c заливкой\"},{\"name\":\"pin\",\"label\":\"Местоположение\"},{\"name\":\"play next\",\"label\":\"Воспроизвести следующее\"},{\"name\":\"play previous\",\"label\":\"Воспроизвести предыдущий\"},{\"name\":\"play\",\"label\":\"Воспроизвести\"},{\"name\":\"progress download\",\"label\":\"Прогресс загрузки\"},{\"name\":\"redo\",\"label\":\"Стрелка вперед (повторить)\"},{\"name\":\"remove small\",\"label\":\"Минус малый (удалить)\"},{\"name\":\"search\",\"label\":\"Поиск, лупа\"},{\"name\":\"settings\",\"label\":\"Настройки, шестеренка\"},{\"name\":\"speed 1x\",\"label\":\"Скорость видео 1х\"},{\"name\":\"speed 2x\",\"label\":\"Скорость видео 2х\"},{\"name\":\"speed 4x\",\"label\":\"Скорость видео 4х\"},{\"name\":\"speed 6x\",\"label\":\"Скорость видео 6х\"},{\"name\":\"speed 8x\",\"label\":\"Скорость видео 8х\"},{\"name\":\"speed playback\",\"label\":\"Скорость воспроизведения\"},{\"name\":\"subtitles fill\",\"label\":\"Субтитры с заливкой\"},{\"name\":\"subtitles\",\"label\":\"Субтитры\"},{\"name\":\"trash\",\"label\":\"Корзина (удалить)\"},{\"name\":\"undo\",\"label\":\"Стрелка назад (отменить)\"},{\"name\":\"upload\",\"label\":\"Загрузить\"},{\"name\":\"zoom in\",\"label\":\"Приблизить, увеличить\"},{\"name\":\"zoom out\",\"label\":\"Отдалить, уменьшить\"}]");

/***/ }),

/***/ "./src/example-pages/components/simple/SystemIcons.vue":
/*!*************************************************************!*\
  !*** ./src/example-pages/components/simple/SystemIcons.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SystemIcons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SystemIcons.vue?vue&type=script&lang=js& */ "./src/example-pages/components/simple/SystemIcons.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns




/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _SystemIcons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/example-pages/components/simple/SystemIcons.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./src/example-pages/components/simple/SystemIcons.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemIcons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./SystemIcons.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/example-pages/components/simple/SystemIcons.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemIcons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ })

}]);
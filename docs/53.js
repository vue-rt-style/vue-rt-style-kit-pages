(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[53],{

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
    }, [h("rt-col", {
      attrs: {
        size: "12"
      }
    }, [h("rt-table", {
      "class": "rt-font-label"
    }, [h("template", {
      slot: "header"
    }, [h("rt-table-head-item", ["icon"]), h("rt-table-head-item", ["name"]), h("rt-table-head-item", ["label"])]), h("template", {
      slot: "body"
    }, [this.renderList])])])]), h("div", {
      "class": "app-row row"
    }, [h("rt-col", {
      attrs: {
        size: "12"
      }
    }, [h("pre-code", {
      attrs: {
        text: '<rt-button color="purple-border rt-sys-icon-hover--orange"><rt-system-icons color="purple" name="add large"></rt-system-icons> <span class="sp-l-1">свойство</span></rt-button>'
      }
    })])]), h("documentation-builder", {
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

module.exports = JSON.parse("{\"items\":[{\"name\":\".rt-sys-icon-hover--{colorName}\",\"description\":\"colorName - название цвета <br/> при наведении на данный элемент все дочерние .rt-sys-icon изменят свой цвет на {colorName}\",\"version\":\"0.3.30\"},{\"name\":\".rt-sys-icon-focus--{colorName}\",\"description\":\"colorName - название цвета <br/> при фокусе на данный элемент все дочерние .rt-sys-icon изменят свой цвет на {colorName}\",\"version\":\"0.3.30\"}]}");

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
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323, 324, 325, 326, 327, 328, 329, 330, 331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344, 345, 346, 347, 348, 349, 350, 351, 352, 353, 354, 355, 356, 357, 358, 359, 360, 361, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"name\":\"achievement\",\"label\":\"\"},{\"name\":\"add large\",\"label\":\"Плюс большой (добавить)\"},{\"name\":\"add small\",\"label\":\"Плюс малый (добавить)\"},{\"name\":\"all devices\",\"label\":\"\"},{\"name\":\"android fill\",\"label\":\"\"},{\"name\":\"android\",\"label\":\"\"},{\"name\":\"apple fill\",\"label\":\"\"},{\"name\":\"apple\",\"label\":\"\"},{\"name\":\"archive\",\"label\":\"\"},{\"name\":\"armchair\",\"label\":\"\"},{\"name\":\"arrow down\",\"label\":\"Стрелка вниз\"},{\"name\":\"arrow forward left\",\"label\":\"\"},{\"name\":\"arrow left down\",\"label\":\"Стрелка влево-вниз\"},{\"name\":\"arrow left up\",\"label\":\"\"},{\"name\":\"arrow left\",\"label\":\"Стрелка влево\"},{\"name\":\"arrow right down\",\"label\":\"\"},{\"name\":\"arrow right up\",\"label\":\"Стрелка вправо-вверх\"},{\"name\":\"arrow right\",\"label\":\"Стрелка вправо\"},{\"name\":\"arrow up\",\"label\":\"Стрелка вверх\"},{\"name\":\"at\",\"label\":\"\"},{\"name\":\"atom\",\"label\":\"\"},{\"name\":\"attachment link add\",\"label\":\"\"},{\"name\":\"attachment link break\",\"label\":\"\"},{\"name\":\"attachment link\",\"label\":\"\"},{\"name\":\"attachment\",\"label\":\"\"},{\"name\":\"attention stroke\",\"label\":\"\"},{\"name\":\"backyard tree\",\"label\":\"\"},{\"name\":\"barrier\",\"label\":\"\"},{\"name\":\"battery charge empty\",\"label\":\"\"},{\"name\":\"battery charge halh\",\"label\":\"\"},{\"name\":\"battery empty\",\"label\":\"\"},{\"name\":\"battery fill\",\"label\":\"\"},{\"name\":\"bed\",\"label\":\"\"},{\"name\":\"bluetooth\",\"label\":\"\"},{\"name\":\"board text\",\"label\":\"\"},{\"name\":\"book\",\"label\":\"\"},{\"name\":\"breaking\",\"label\":\"\"},{\"name\":\"broom\",\"label\":\"\"},{\"name\":\"bullet\",\"label\":\"\"},{\"name\":\"calculator\",\"label\":\"\"},{\"name\":\"calendar\",\"label\":\"\"},{\"name\":\"call incoming\",\"label\":\"\"},{\"name\":\"call nocoming\",\"label\":\"\"},{\"name\":\"call outgoing\",\"label\":\"\"},{\"name\":\"call\",\"label\":\"\"},{\"name\":\"camera\",\"label\":\"\"},{\"name\":\"camera_group\",\"label\":\"\"},{\"name\":\"car\",\"label\":\"\"},{\"name\":\"caret sort down\",\"label\":\"\"},{\"name\":\"caret sort up\",\"label\":\"\"},{\"name\":\"caret sort\",\"label\":\"\"},{\"name\":\"cart on\",\"label\":\"\"},{\"name\":\"cart\",\"label\":\"\"},{\"name\":\"chat\",\"label\":\"\"},{\"name\":\"check large\",\"label\":\"Галочка большая\"},{\"name\":\"check small\",\"label\":\"Галочка малая\"},{\"name\":\"checklist\",\"label\":\"Выбрано, добавлено\"},{\"name\":\"chevron down\",\"label\":\"Шеврон вниз\"},{\"name\":\"chevron left\",\"label\":\"Шеврон влево\"},{\"name\":\"chevron right\",\"label\":\"Шеврон вправо\"},{\"name\":\"chevron sort\",\"label\":\"Шеврон сортировка\"},{\"name\":\"chevron up\",\"label\":\"Шеврон вверх\"},{\"name\":\"chip\",\"label\":\"\"},{\"name\":\"close large\",\"label\":\"Крестик большой (закрыть)\"},{\"name\":\"close small\",\"label\":\"Крестик малый (закрыть)\"},{\"name\":\"clothes\",\"label\":\"\"},{\"name\":\"cloud  upload\",\"label\":\"\"},{\"name\":\"cloud download\",\"label\":\"\"},{\"name\":\"cloud\",\"label\":\"\"},{\"name\":\"coffee break\",\"label\":\"\"},{\"name\":\"comments\",\"label\":\"\"},{\"name\":\"console\",\"label\":\"\"},{\"name\":\"contacts\",\"label\":\"\"},{\"name\":\"controller\",\"label\":\"\"},{\"name\":\"copy\",\"label\":\"Дублировать\"},{\"name\":\"counter\",\"label\":\"\"},{\"name\":\"coworking sitting\",\"label\":\"\"},{\"name\":\"cross\",\"label\":\"\"},{\"name\":\"dark theme fill\",\"label\":\"\"},{\"name\":\"dark theme\",\"label\":\"\"},{\"name\":\"delivery box\",\"label\":\"\"},{\"name\":\"delivery bus\",\"label\":\"\"},{\"name\":\"delivery courier\",\"label\":\"\"},{\"name\":\"delivery envelope\",\"label\":\"\"},{\"name\":\"desktop\",\"label\":\"\"},{\"name\":\"disability\",\"label\":\"\"},{\"name\":\"dislike\",\"label\":\"\"},{\"name\":\"divider dot\",\"label\":\"\"},{\"name\":\"divider horizontal\",\"label\":\"\"},{\"name\":\"divider vertical\",\"label\":\"\"},{\"name\":\"document add\",\"label\":\"\"},{\"name\":\"document edit\",\"label\":\"\"},{\"name\":\"document\",\"label\":\"\"},{\"name\":\"dollar\",\"label\":\"\"},{\"name\":\"door exit\",\"label\":\"\"},{\"name\":\"door\",\"label\":\"\"},{\"name\":\"download\",\"label\":\"Загрузить\"},{\"name\":\"dr web\",\"label\":\"\"},{\"name\":\"drop\",\"label\":\"\"},{\"name\":\"edit\",\"label\":\"\"},{\"name\":\"education\",\"label\":\"\"},{\"name\":\"equaliser clear\",\"label\":\"\"},{\"name\":\"equaliser\",\"label\":\"\"},{\"name\":\"equipment\",\"label\":\"\"},{\"name\":\"error stroke\",\"label\":\"\"},{\"name\":\"escalator down\",\"label\":\"\"},{\"name\":\"escalator up\",\"label\":\"\"},{\"name\":\"escalator\",\"label\":\"\"},{\"name\":\"eset nod\",\"label\":\"\"},{\"name\":\"euro\",\"label\":\"\"},{\"name\":\"face frouning\",\"label\":\"\"},{\"name\":\"face grin\",\"label\":\"\"},{\"name\":\"face neutral\",\"label\":\"\"},{\"name\":\"face open mouth\",\"label\":\"\"},{\"name\":\"face rage\",\"label\":\"\"},{\"name\":\"face smilling\",\"label\":\"\"},{\"name\":\"facebook fill\",\"label\":\"\"},{\"name\":\"facebook\",\"label\":\"\"},{\"name\":\"fast forward 10s\",\"label\":\"Перемотка вперед на 10 секунд\"},{\"name\":\"fast forward 15s\",\"label\":\"Перемотка вперед на 15 секунд\"},{\"name\":\"fast forward 30s\",\"label\":\"Перемотка вперед на 30 секунд\"},{\"name\":\"fast forward 5s\",\"label\":\"Перемотка вперед на 5 секунд\"},{\"name\":\"fast forward\",\"label\":\"Быстрая перемотка вперед\"},{\"name\":\"fast rewind 10s\",\"label\":\"Перемотка назад на 10 секунд\"},{\"name\":\"fast rewind 15s\",\"label\":\"Перемотка назад на 15 секунд\"},{\"name\":\"fast rewind 30s\",\"label\":\"Перемотка назад на 30 секунд\"},{\"name\":\"fast rewind 5s\",\"label\":\"Перемотка назад на 5 секунд\"},{\"name\":\"fast rewind\",\"label\":\"Быстрая перемотка назад\"},{\"name\":\"favorite fill\",\"label\":\"\"},{\"name\":\"favorite\",\"label\":\"\"},{\"name\":\"figure man woman\",\"label\":\"\"},{\"name\":\"figure man\",\"label\":\"\"},{\"name\":\"figure woman\",\"label\":\"\"},{\"name\":\"filter fill\",\"label\":\"\"},{\"name\":\"filter add\",\"label\":\"\"},{\"name\":\"filter clear\",\"label\":\"\"},{\"name\":\"filter\",\"label\":\"\"},{\"name\":\"fire\",\"label\":\"\"},{\"name\":\"flag\",\"label\":\"\"},{\"name\":\"flickr fill\",\"label\":\"\"},{\"name\":\"flickr\",\"label\":\"\"},{\"name\":\"focus 3d\",\"label\":\"\"},{\"name\":\"focus ar\",\"label\":\"\"},{\"name\":\"focus records\",\"label\":\"\"},{\"name\":\"focus vr\",\"label\":\"\"},{\"name\":\"folder add\",\"label\":\"Добавить папку\"},{\"name\":\"folder details\",\"label\":\"Информация о папке\"},{\"name\":\"folder shared\",\"label\":\"Дать доступ к папке\"},{\"name\":\"folder\",\"label\":\"Папка\"},{\"name\":\"food\",\"label\":\"\"},{\"name\":\"gallery horizontal\",\"label\":\"\"},{\"name\":\"gallery vertical\",\"label\":\"\"},{\"name\":\"game\",\"label\":\"\"},{\"name\":\"geolocation small\",\"label\":\"Геолокация малая\"},{\"name\":\"geolocation\",\"label\":\"Геолокация\"},{\"name\":\"github\",\"label\":\"\"},{\"name\":\"gitlab\",\"label\":\"\"},{\"name\":\"google play fill\",\"label\":\"\"},{\"name\":\"google play\",\"label\":\"\"},{\"name\":\"googleplus\",\"label\":\"\"},{\"name\":\"group\",\"label\":\"\"},{\"name\":\"handbreak\",\"label\":\"\"},{\"name\":\"heart broken\",\"label\":\"\"},{\"name\":\"heart fill\",\"label\":\"\"},{\"name\":\"heart\",\"label\":\"\"},{\"name\":\"help stroke small\",\"label\":\"\"},{\"name\":\"help stroke\",\"label\":\"\"},{\"name\":\"history action\",\"label\":\"\"},{\"name\":\"history\",\"label\":\"\"},{\"name\":\"home\",\"label\":\"Домой\"},{\"name\":\"image\",\"label\":\"\"},{\"name\":\"incognito\",\"label\":\"\"},{\"name\":\"information stroke\",\"label\":\"\"},{\"name\":\"instagram fill\",\"label\":\"\"},{\"name\":\"instagram\",\"label\":\"\"},{\"name\":\"intercom\",\"label\":\"\"},{\"name\":\"internet\",\"label\":\"\"},{\"name\":\"invoice\",\"label\":\"\"},{\"name\":\"kettlebell\",\"label\":\"\"},{\"name\":\"key password\",\"label\":\"\"},{\"name\":\"kluch fill\",\"label\":\"\"},{\"name\":\"kluch\",\"label\":\"\"},{\"name\":\"launch\",\"label\":\"\"},{\"name\":\"lego\",\"label\":\"\"},{\"name\":\"licey fill\",\"label\":\"\"},{\"name\":\"licey\",\"label\":\"\"},{\"name\":\"lift\",\"label\":\"\"},{\"name\":\"light bulb\",\"label\":\"\"},{\"name\":\"like\",\"label\":\"\"},{\"name\":\"link native\",\"label\":\"Ссылка коренная\"},{\"name\":\"link\",\"label\":\"Ссылка\"},{\"name\":\"live\",\"label\":\"\"},{\"name\":\"lock\",\"label\":\"\"},{\"name\":\"mail inbox\",\"label\":\"\"},{\"name\":\"mail incoming\",\"label\":\"\"},{\"name\":\"mail outgoing\",\"label\":\"\"},{\"name\":\"mail\",\"label\":\"\"},{\"name\":\"mailru\",\"label\":\"\"},{\"name\":\"map\",\"label\":\"Карта\"},{\"name\":\"marketing funnel\",\"label\":\"\"},{\"name\":\"maximize\",\"label\":\"Увеличить, развернуть\"},{\"name\":\"melody\",\"label\":\"\"},{\"name\":\"menu + bullets\",\"label\":\"Меню + буллеты\"},{\"name\":\"menu kebab\",\"label\":\"Кебаб-меню\"},{\"name\":\"menu\",\"label\":\"Бургер-меню\"},{\"name\":\"merge\",\"label\":\"\"},{\"name\":\"microcircuit\",\"label\":\"\"},{\"name\":\"microphone talker\",\"label\":\"\"},{\"name\":\"microphone\",\"label\":\"\"},{\"name\":\"minimize\",\"label\":\"Уменьшить, свернуть\"},{\"name\":\"mobile refresh\",\"label\":\"\"},{\"name\":\"mobile\",\"label\":\"\"},{\"name\":\"more\",\"label\":\"Еще\"},{\"name\":\"motion\",\"label\":\"\"},{\"name\":\"none stroke\",\"label\":\"\"},{\"name\":\"notification new\",\"label\":\"\"},{\"name\":\"notification\",\"label\":\"\"},{\"name\":\"object\",\"label\":\"\"},{\"name\":\"odnoklassniki fill\",\"label\":\"\"},{\"name\":\"odnoklassniki\",\"label\":\"\"},{\"name\":\"office 365\",\"label\":\"\"},{\"name\":\"officechair\",\"label\":\"\"},{\"name\":\"ok  stroke\",\"label\":\"\"},{\"name\":\"onlime fill\",\"label\":\"\"},{\"name\":\"operator support\",\"label\":\"\"},{\"name\":\"other service\",\"label\":\"\"},{\"name\":\"overview 1 screen\",\"label\":\"Обзор 1 экран\"},{\"name\":\"overview 2 screen\",\"label\":\"Обзор 2 экрана\"},{\"name\":\"overview 4 screen\",\"label\":\"Обзор 4 экрана\"},{\"name\":\"overview 6 screen\",\"label\":\"Обзор 6 экранов\"},{\"name\":\"parents control\",\"label\":\"\"},{\"name\":\"pass\",\"label\":\"\"},{\"name\":\"password hide\",\"label\":\"\"},{\"name\":\"password show\",\"label\":\"\"},{\"name\":\"pause\",\"label\":\"Остановить, пауза\"},{\"name\":\"payment card to card\",\"label\":\"\"},{\"name\":\"payment card\",\"label\":\"\"},{\"name\":\"phone\",\"label\":\"\"},{\"name\":\"photo\",\"label\":\"\"},{\"name\":\"pin fill\",\"label\":\"Местоположение c заливкой\"},{\"name\":\"pin\",\"label\":\"Местоположение\"},{\"name\":\"play next\",\"label\":\"Воспроизвести следующее\"},{\"name\":\"play previous\",\"label\":\"Воспроизвести предыдущий\"},{\"name\":\"play\",\"label\":\"Воспроизвести\"},{\"name\":\"portfolio\",\"label\":\"\"},{\"name\":\"present\",\"label\":\"\"},{\"name\":\"print\",\"label\":\"\"},{\"name\":\"profile\",\"label\":\"\"},{\"name\":\"progress download\",\"label\":\"Прогресс загрузки\"},{\"name\":\"promocode\",\"label\":\"\"},{\"name\":\"pulse\",\"label\":\"\"},{\"name\":\"puzzle\",\"label\":\"\"},{\"name\":\"rating fill\",\"label\":\"\"},{\"name\":\"rating half\",\"label\":\"\"},{\"name\":\"rating\",\"label\":\"\"},{\"name\":\"redo\",\"label\":\"Стрелка вперед (повторить)\"},{\"name\":\"refresh small\",\"label\":\"\"},{\"name\":\"refresh\",\"label\":\"\"},{\"name\":\"registrator\",\"label\":\"\"},{\"name\":\"remove small\",\"label\":\"Минус малый (удалить)\"},{\"name\":\"rename\",\"label\":\"\"},{\"name\":\"rostelecom fill\",\"label\":\"\"},{\"name\":\"rostelecom\",\"label\":\"\"},{\"name\":\"rotate 3d\",\"label\":\"\"},{\"name\":\"ruble\",\"label\":\"\"},{\"name\":\"sim\",\"label\":\"\"},{\"name\":\"sos\",\"label\":\"\"},{\"name\":\"sber\",\"label\":\"\"},{\"name\":\"screen 4k\",\"label\":\"\"},{\"name\":\"screen control\",\"label\":\"\"},{\"name\":\"screen hd\",\"label\":\"\"},{\"name\":\"screen subscription\",\"label\":\"\"},{\"name\":\"screen tv\",\"label\":\"\"},{\"name\":\"search\",\"label\":\"Поиск, лупа\"},{\"name\":\"security\",\"label\":\"\"},{\"name\":\"seiling camera\",\"label\":\"\"},{\"name\":\"send\",\"label\":\"\"},{\"name\":\"set of minutes\",\"label\":\"\"},{\"name\":\"settings adjust\",\"label\":\"\"},{\"name\":\"settings\",\"label\":\"Настройки, шестеренка\"},{\"name\":\"share\",\"label\":\"\"},{\"name\":\"ship\",\"label\":\"\"},{\"name\":\"shopping basket\",\"label\":\"\"},{\"name\":\"shuffle\",\"label\":\"\"},{\"name\":\"sign in\",\"label\":\"\"},{\"name\":\"sign out\",\"label\":\"\"},{\"name\":\"skip stroke\",\"label\":\"\"},{\"name\":\"smart home fill\",\"label\":\"\"},{\"name\":\"smart home\",\"label\":\"\"},{\"name\":\"socket\",\"label\":\"\"},{\"name\":\"sort down\",\"label\":\"\"},{\"name\":\"sort up\",\"label\":\"\"},{\"name\":\"speed 1x\",\"label\":\"Скорость видео 1х\"},{\"name\":\"speed 2x\",\"label\":\"Скорость видео 2х\"},{\"name\":\"speed 4x\",\"label\":\"Скорость видео 4х\"},{\"name\":\"speed 6x\",\"label\":\"Скорость видео 6х\"},{\"name\":\"speed 8x\",\"label\":\"Скорость видео 8х\"},{\"name\":\"speed playback\",\"label\":\"Скорость воспроизведения\"},{\"name\":\"split\",\"label\":\"\"},{\"name\":\"stairs\",\"label\":\"\"},{\"name\":\"statistics board\",\"label\":\"\"},{\"name\":\"statistics circular\",\"label\":\"\"},{\"name\":\"statistics column\",\"label\":\"\"},{\"name\":\"statistics curve\",\"label\":\"\"},{\"name\":\"statistics line\",\"label\":\"\"},{\"name\":\"street camera\",\"label\":\"\"},{\"name\":\"subtitles fill\",\"label\":\"Субтитры с заливкой\"},{\"name\":\"subtitles\",\"label\":\"Субтитры\"},{\"name\":\"synchronization small\",\"label\":\"\"},{\"name\":\"synchronization\",\"label\":\"\"},{\"name\":\"tablet\",\"label\":\"\"},{\"name\":\"tamtam\",\"label\":\"\"},{\"name\":\"target\",\"label\":\"\"},{\"name\":\"telegram fill\",\"label\":\"\"},{\"name\":\"telegram\",\"label\":\"\"},{\"name\":\"test speed\",\"label\":\"\"},{\"name\":\"theatre masks fill\",\"label\":\"\"},{\"name\":\"theatre masks\",\"label\":\"\"},{\"name\":\"thermal imager\",\"label\":\"\"},{\"name\":\"thermometer\",\"label\":\"\"},{\"name\":\"time large\",\"label\":\"\"},{\"name\":\"time small\",\"label\":\"\"},{\"name\":\"translation\",\"label\":\"\"},{\"name\":\"trash\",\"label\":\"Корзина (удалить)\"},{\"name\":\"twitter fill\",\"label\":\"\"},{\"name\":\"twitter\",\"label\":\"\"},{\"name\":\"undo\",\"label\":\"Стрелка назад (отменить)\"},{\"name\":\"union\",\"label\":\"\"},{\"name\":\"unlimited\",\"label\":\"\"},{\"name\":\"unlock\",\"label\":\"\"},{\"name\":\"upload\",\"label\":\"Загрузить\"},{\"name\":\"user-man\",\"label\":\"\"},{\"name\":\"user-transgender\",\"label\":\"\"},{\"name\":\"user-woman\",\"label\":\"\"},{\"name\":\"user\",\"label\":\"\"},{\"name\":\"users\",\"label\":\"\"},{\"name\":\"vip\",\"label\":\"\"},{\"name\":\"vr helmet\",\"label\":\"\"},{\"name\":\"vr mask\",\"label\":\"\"},{\"name\":\"vacation beach\",\"label\":\"\"},{\"name\":\"vacation sea\",\"label\":\"\"},{\"name\":\"viber\",\"label\":\"\"},{\"name\":\"vkontakte fill\",\"label\":\"\"},{\"name\":\"vkontakte\",\"label\":\"\"},{\"name\":\"voice\",\"label\":\"\"},{\"name\":\"volume down\",\"label\":\"\"},{\"name\":\"volume off\",\"label\":\"\"},{\"name\":\"volume up\",\"label\":\"\"},{\"name\":\"wallet\",\"label\":\"\"},{\"name\":\"whatsapp\",\"label\":\"\"},{\"name\":\"wi-fi\",\"label\":\"\"},{\"name\":\"windows fill\",\"label\":\"\"},{\"name\":\"windows\",\"label\":\"\"},{\"name\":\"wink fill\",\"label\":\"\"},{\"name\":\"wink\",\"label\":\"\"},{\"name\":\"yandex disk fill\",\"label\":\"\"},{\"name\":\"yandex disk\",\"label\":\"\"},{\"name\":\"yandex\",\"label\":\"\"},{\"name\":\"youtube fill\",\"label\":\"\"},{\"name\":\"youtube\",\"label\":\"\"},{\"name\":\"zoom in\",\"label\":\"Приблизить, увеличить\"},{\"name\":\"zoom out\",\"label\":\"Отдалить, уменьшить\"}]");

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
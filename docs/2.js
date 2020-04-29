(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/example-pages/components/main/colors/ColorsList.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/example-pages/components/main/colors/ColorsList.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var _ColorsListItem_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ColorsListItem.vue */ "./src/example-pages/components/main/colors/ColorsListItem.vue");
/* harmony import */ var _vue_rt_style_kit_atoms_local_colorFullDocs_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vue-rt-style-kit-atoms-local/colorFullDocs.json */ "./src/atoms/colorFullDocs.json");
var _vue_rt_style_kit_atoms_local_colorFullDocs_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! @vue-rt-style-kit-atoms-local/colorFullDocs.json */ "./src/atoms/colorFullDocs.json", 1);
/* harmony import */ var _colorListSettings_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./colorListSettings.json */ "./src/example-pages/components/main/colors/colorListSettings.json");
var _colorListSettings_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./colorListSettings.json */ "./src/example-pages/components/main/colors/colorListSettings.json", 1);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var componentsList = {};
componentsList[_ColorsListItem_vue__WEBPACK_IMPORTED_MODULE_1__["default"].name] = _ColorsListItem_vue__WEBPACK_IMPORTED_MODULE_1__["default"];
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "AppColors",
  components: componentsList,
  data: function data() {
    return {
      colorsSettingsArray: [],
      colors: {}
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.colors = _vue_rt_style_kit_atoms_local_colorFullDocs_json__WEBPACK_IMPORTED_MODULE_2__;
    Object.keys(_colorListSettings_json__WEBPACK_IMPORTED_MODULE_3__).map(function (key) {
      console.info('this.colorsSettingsArray', _this.colorsSettingsArray);
      var item = _colorListSettings_json__WEBPACK_IMPORTED_MODULE_3__[key];
      _this.colorsSettingsArray[item.index] = key;
    });
    this.colorsSettingsArray[1] = "icon";
    Object.keys(this.colors).forEach(function (key) {
      // console.info(key,Object.keys(this.colors))
      var color = _this.colors[key]; // console.info('color',color);

      _this.createColorsParams(color);
    });
    this.$set(this, "colors", _objectSpread({}, this.colors));
  },
  methods: {
    createColorsParams: function createColorsParams(color) {
      if (color.value[0] === "#") {
        color.hex = color.value.substr(1);
        color.rgba = this.convertHexToRGBA(color.hex);
      } else {
        if (color.value.search(/^rgba/) === 0) {
          color.hex = this.convertToRGBAToHex(color.value);
          color.rgba = this.rgbaToObject(color.value);
        }
      }
    },
    convertToRGBAToHex: function convertToRGBAToHex(rgba) {
      var color = rgba.replace(/(rgba\()|(\))|( )/g, "").split(",").map(function (number) {
        number = number - 0;

        if (number % 1 === 0) {
          number = number.toString(16).toUpperCase();
          return number.toString(16).toUpperCase();
        } else {
          number = (Math.round(number * 255) + 0x10000).toString(16).substr(-2).toUpperCase();
        }

        if (number.length === 1) {
          number += number;
        }

        return number;
      });
      return color.join("");
    },
    rgbaToObject: function rgbaToObject(rgba) {
      var colors = rgba.replace(/(rgba\()|(\))/g, "").split(",").map(function (i) {
        return i - 0;
      });
      return {
        red: colors[0],
        blue: colors[1],
        green: colors[2],
        alpha: colors[3]
      };
    },
    convertHexToRGBA: function convertHexToRGBA(hex) {
      var colors = hex.match(/([a-z0-9][a-z0-9])/gi).map(function (number) {
        return parseInt(number, 16);
      });

      if (colors.length > 3) {
        colors[3] = colors[3] / 255;
        colors[3] = parseInt(colors[3]);
      }

      return {
        red: colors[0],
        blue: colors[1],
        green: colors[2],
        alpha: colors[3] !== undefined ? colors[3] : 1
      };
    }
  },
  render: function render(h) {
    var _this2 = this;

    var colorMap = Object.keys(this.colors).map(function (key) {
      var colorItem = _this2.colors[key];

      if (colorItem.hex) {
        return h("app-colors-item", {
          attrs: {
            colorsIndexArray: _this2.colorsSettingsArray,
            settings: _colorListSettings_json__WEBPACK_IMPORTED_MODULE_3__,
            color: colorItem
          }
        });
      } else {
        return null;
      }
    }); // const header = (() => {
    //   return this.labels.map(item => {
    //     return <rt-table-head-item>{item.label}</rt-table-head-item>;
    //   });
    // })();

    var header = function () {
      return _this2.colorsSettingsArray.map(function (key) {
        if (_colorListSettings_json__WEBPACK_IMPORTED_MODULE_3__[key]) {
          return h("rt-table-head-item", [_colorListSettings_json__WEBPACK_IMPORTED_MODULE_3__[key].name]);
        } else {
          return h("rt-table-head-item", ["\u0426\u0432\u0435\u0442"]);
        }
      });
    }();

    if (header.length > 0) {
      return h("div", {
        "class": "rt-container"
      }, [h("div", {
        "class": "app-content rt-col-12 rt-col-md-3"
      }, [h("div", {
        "class": "app-title"
      }, [h("h1", {
        "class": "rt-font-hero"
      }, ["Colors"])]), h("div", {
        "class": "app-body"
      }, [h("div", {
        "class": "row"
      }, [h("div", {
        "class": "rt-col-12"
      }, [h("rt-table", [h("template", {
        slot: "header"
      }, [header]), h("template", {
        slot: "body"
      }, [colorMap])])])])])])]);
    }

    return null;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/example-pages/components/main/colors/ColorsListItem.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/example-pages/components/main/colors/ColorsListItem.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-property-decorator */ "./node_modules/vue-property-decorator/lib/vue-property-decorator.js");


var componentsList = {};
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "AppColorsItem",
  components: componentsList,
  props: {
    color: {
      type: Object,
      "default": {}
    },
    colorsIndexArray: {
      type: Array,
      "default": []
    },
    settings: {
      type: Object,
      "default": {}
    }
  },
  render: function render(h) {
    var _this = this;

    var renderItems = this.colorsIndexArray.map(function (key) {
      switch (key) {
        case 'hex':
          return h("rt-table-item", [h("p", ["#", _this.color.hex])]);
          break;

        case 'rgba':
          return h("rt-table-item", [_this.color.rgba.red, " ", _this.color.rgba.blue, " ", _this.color.rgba.green, " ", _this.color.rgba.alpha * 100]);
          break;

        case 'icon':
          return h("rt-table-item", [h("div", {
            "class": "app-color-cube",
            style: {
              backgroundColor: "#".concat(_this.color.hex)
            }
          })]);
          break;

        case 'code_variable_name':
          return h("rt-table-item", [h("p", [_this.color.code_variable_name])]);
          break;

        case 'label':
          return h("rt-table-item", [h("p", [_this.color.label])]);
          break;

        default:
          return h("rt-table-item");
      }
    });
    return h("rt-table-row", [renderItems]);
  }
});

/***/ }),

/***/ "./src/atoms/colorFullDocs.json":
/*!**************************************!*\
  !*** ./src/atoms/colorFullDocs.json ***!
  \**************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"code_variable_name\":\"b2c-purple\",\"label\":\"Rostelecom Purple\",\"value\":\"#7700FF\"},{\"code_variable_name\":\"b2c-purple-low\",\"label\":\"Rostelecom Purple Low\",\"value\":\"#6605C6\"},{\"code_variable_name\":\"b2c-purple-high\",\"label\":\"Rostelecom Purple High\",\"value\":\"#8348FC\"},{\"code_variable_name\":\"b2c-red\",\"label\":\"Rostelecom Red\",\"value\":\"#BC104B\"},{\"code_variable_name\":\"b2c-red-low\",\"label\":\"Rostelecom Red Low\",\"value\":\"#910046\"},{\"code_variable_name\":\"b2c-red-high\",\"label\":\"Rostelecom Red Ligh\",\"value\":\"#E22E65\"},{\"code_variable_name\":\"b2c-dark-blue\",\"label\":\"Rostelecom Dark Blue\",\"value\":\"#273A64\"},{\"code_variable_name\":\"b2c-dark-blue-low\",\"label\":\"Rostelecom Dark Blue Low\",\"value\":\"#001C45\"},{\"code_variable_name\":\"b2c-dark-blue-high\",\"label\":\"Rostelecom Dark Blue High\",\"value\":\"#275392\"},{\"code_variable_name\":\"b2c-light-blue\",\"label\":\"Rostelecom Light Blue\",\"value\":\"#65BBDF\"},{\"code_variable_name\":\"b2c-light-blue-low\",\"label\":\"Rostelecom Light Blue Low\",\"value\":\"#4897DF\"},{\"code_variable_name\":\"b2c-light-blue-high\",\"label\":\"Rostelecom Light Blue High\",\"value\":\"#65DEED\"},{\"code_variable_name\":\"b2c-yellow\",\"label\":\"Rostelecom Yellow\",\"value\":\"#FFBE08\"},{\"code_variable_name\":\"b2c-yellow-low\",\"label\":\"Rostelecom Yellow Low\",\"value\":\"#FFA307\"},{\"code_variable_name\":\"b2c-yellow-high\",\"label\":\"Rostelecom Yellow High\",\"value\":\"#FFD800\"},{\"code_variable_name\":\"b2c-orange\",\"label\":\"Rostelecom Orange\",\"value\":\"#FF4F12\"},{\"code_variable_name\":\"b2c-orange-low\",\"label\":\"Rostelecom Orange Low\",\"value\":\"#D33706\"},{\"code_variable_name\":\"b2c-orange-high\",\"label\":\"Rostelecom Orange High\",\"value\":\"#FF8218\"},{\"code_variable_name\":\"b2c-pink\",\"label\":\"Rostelecom Pink\",\"value\":\"#FFBFC3\"},{\"code_variable_name\":\"b2c-pink-low\",\"label\":\"Rostelecom Pink Low\",\"value\":\"#FFA0A7\"},{\"code_variable_name\":\"b2c-pink-high\",\"label\":\"Rostelecom Pink High\",\"value\":\"#FFD2DD\"},{\"code_variable_name\":\"b2c-green\",\"label\":\"Rostelecom Green\",\"value\":\"#57D9B7\"},{\"code_variable_name\":\"b2c-green-low\",\"label\":\"Rostelecom Green Low\",\"value\":\"#3BBC9E\"},{\"code_variable_name\":\"b2c-green-high\",\"label\":\"Rostelecom Green High\",\"value\":\"#81EBD6\"},{\"code_variable_name\":\"main-color\",\"label\":\"Rostelecom Black\",\"value\":\"#101828\"},{\"code_variable_name\":\"main-color09\",\"label\":\"Rostelecom Black 90%\",\"value\":\"rgba(16,24,40,0.9)\"},{\"code_variable_name\":\"main-color08\",\"label\":\"Rostelecom Black 80%\",\"value\":\"rgba(16,24,40,0.8)\"},{\"code_variable_name\":\"main-color07\",\"label\":\"Rostelecom Black 70%\",\"value\":\"rgba(16,24,40,0.7)\"},{\"code_variable_name\":\"main-color06\",\"label\":\"Rostelecom Black 60%\",\"value\":\"rgba(16,24,40,0.6)\"},{\"code_variable_name\":\"main-color05\",\"label\":\"Rostelecom Black 50%\",\"value\":\"rgba(16,24,40,0.5)\"},{\"code_variable_name\":\"main-color04\",\"label\":\"Rostelecom Black 40%\",\"value\":\"rgba(16,24,40,0.4)\"},{\"code_variable_name\":\"main-color03\",\"label\":\"Rostelecom Black 30%\",\"value\":\"rgba(16,24,40,0.3)\"},{\"code_variable_name\":\"main-color02\",\"label\":\"Rostelecom Black 20%\",\"value\":\"rgba(16,24,40,0.2)\"},{\"code_variable_name\":\"main-color01\",\"label\":\"Rostelecom Black 10%\",\"value\":\"rgba(16,24,40,0.1)\"},{\"code_variable_name\":\"main-color003\",\"label\":\"Rostelecom Black 3%\",\"value\":\"rgba(16,24,40,0.03)\"},{\"code_variable_name\":\"main-color09-no-opacity\",\"label\":\"Rostelecom Black 90%\",\"value\":\"#272F3D\"},{\"code_variable_name\":\"main-color07-no-opacity\",\"label\":\"Rostelecom Black 70%\",\"value\":\"#575D68\"},{\"code_variable_name\":\"main-color05-no-opacity\",\"label\":\"Rostelecom Black 50%\",\"value\":\"#868B95\"},{\"code_variable_name\":\"main-color03-no-opacity\",\"label\":\"Rostelecom Black 30%\",\"value\":\"#B8B9C0\"},{\"code_variable_name\":\"main-color01-no-opacity\",\"label\":\"Rostelecom Black 10%\",\"value\":\"#B8B9C0\"},{\"code_variable_name\":\"main-color003-no-opacity\",\"label\":\"Rostelecom Black 3%\",\"value\":\"#E7E7E9\"},{\"code_variable_name\":\"b2c-cool-grey\",\"label\":\"Rostelecom Cool Grey\",\"value\":\"#E3E8EC\"},{\"code_variable_name\":\"b2c-cool-grey07\",\"label\":\"Rostelecom Cool Grey 70%\",\"value\":\"rgba(227,232,236,0.7)\"},{\"code_variable_name\":\"b2c-cool-grey05\",\"label\":\"Rostelecom Cool Grey 50%\",\"value\":\"rgba(227,232,236,0.5)\"},{\"code_variable_name\":\"b2c-cool-grey03\",\"label\":\"Rostelecom Cool Grey 30%\",\"value\":\"rgba(227,232,236,0.3)\"},{\"code_variable_name\":\"b2b-cool-grey05-no-opacity\",\"label\":\"Rostelecom Cool Grey 50%\",\"value\":\"#F1F3F5\"},{\"code_variable_name\":\"b2c-purple-high05\",\"label\":\"Rostelecom Purple High 50%\",\"value\":\"rgba(131,72,252,0.5)\"},{\"code_variable_name\":\"b2c-purple-high02\",\"label\":\"Rostelecom Purple High 20%\",\"value\":\"rgba(131,72,252,0.2)\"},{\"code_variable_name\":\"b2c-orange-high05\",\"label\":\"Rostelecom Purple High 50%\",\"value\":\"rgba(255,130,24,0.5)\"},{\"code_variable_name\":\"b2c-orange-high02\",\"label\":\"Rostelecom Purple High 20%\",\"value\":\"rgba(255,130,24,0.2)\"},{\"code_variable_name\":\"b2b-slate\",\"label\":\"Rostelecom Slate\",\"value\":\"#7B939B\"},{\"code_variable_name\":\"b2b-dark-slate\",\"label\":\"Rostelecom Dark Slate\",\"value\":\"#313A49\"},{\"code_variable_name\":\"b2b-burgundy\",\"label\":\"Rostelecom Burgundy\",\"value\":\"#431625\"},{\"code_variable_name\":\"b2c-white\",\"label\":\"Rostelecom White\",\"value\":\"#ffffff\"},{\"code_variable_name\":\"b2c-white09\",\"label\":\"Rostelecom White 90%\",\"value\":\"rgba(255,255,255, 0.9)\"},{\"code_variable_name\":\"b2c-white08\",\"label\":\"Rostelecom White 80%\",\"value\":\"rgba(255,255,255, 0.8)\"},{\"code_variable_name\":\"b2c-white07\",\"label\":\"Rostelecom White 70%\",\"value\":\"rgba(255,255,255, 0.7)\"},{\"code_variable_name\":\"b2c-white06\",\"label\":\"Rostelecom White 60%\",\"value\":\"rgba(255,255,255, 0.6)\"},{\"code_variable_name\":\"b2c-white05\",\"label\":\"Rostelecom White 50%\",\"value\":\"rgba(255,255,255, 0.5)\"},{\"code_variable_name\":\"b2c-white04\",\"label\":\"Rostelecom White 40%\",\"value\":\"rgba(255,255,255, 0.4)\"},{\"code_variable_name\":\"b2c-white03\",\"label\":\"Rostelecom White 30%\",\"value\":\"rgba(255,255,255, 0.3)\"},{\"code_variable_name\":\"b2c-white02\",\"label\":\"Rostelecom White 20%\",\"value\":\"rgba(255,255,255, 0.2)\"},{\"code_variable_name\":\"b2c-white01\",\"label\":\"Rostelecom White 10%\",\"value\":\"rgba(255,255,255, 0.1)\"},{\"code_variable_name\":\"dark-card-background\",\"label\":\"\",\"value\":\"rgba(0,0,0,0.8)\"},{\"code_variable_name\":\"disable-button-color\",\"label\":\"\",\"value\":\"#e6e6e6\"},{\"code_variable_name\":\"disable-button-color-dark-theme\",\"label\":\"\",\"value\":\"rgba(255,255,255,0.1)\"},{\"code_variable_name\":\"card-list-border\",\"label\":\"\",\"value\":\"#E5E5E5\"},{\"code_variable_name\":\"default-wive-color\",\"label\":\"\",\"value\":\"#808080\"},{\"code_variable_name\":\"error-color\",\"label\":\"\",\"value\":\"#FF0C0C\"},{\"code_variable_name\":\"box-shadow-background\",\"label\":\"\",\"value\":\"rgba(16,24,40,0.1)\"},{\"code_variable_name\":\"dark-theme-dropdown-background\",\"label\":\"\",\"value\":\"#202432\"},{\"code_variable_name\":\"light-grey\",\"label\":\"\",\"value\":\"#fafafa\"},{\"code_variable_name\":\"card-shadow\",\"label\":\"\",\"value\":\"0 0 5px rgba(16,24,40,0.15)\"},{\"code_variable_name\":\"card-shadow--hovered\",\"label\":\"\",\"value\":\"0 5px 5px rgba(16,24,40,0.15)\"}]");

/***/ }),

/***/ "./src/example-pages/components/main/colors/ColorsList.vue":
/*!*****************************************************************!*\
  !*** ./src/example-pages/components/main/colors/ColorsList.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ColorsList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ColorsList.vue?vue&type=script&lang=js& */ "./src/example-pages/components/main/colors/ColorsList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns




/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _ColorsList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/example-pages/components/main/colors/ColorsList.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./src/example-pages/components/main/colors/ColorsList.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorsList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ColorsList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/example-pages/components/main/colors/ColorsList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorsList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/example-pages/components/main/colors/ColorsListItem.vue":
/*!*********************************************************************!*\
  !*** ./src/example-pages/components/main/colors/ColorsListItem.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ColorsListItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ColorsListItem.vue?vue&type=script&lang=js& */ "./src/example-pages/components/main/colors/ColorsListItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns




/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _ColorsListItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/example-pages/components/main/colors/ColorsListItem.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./src/example-pages/components/main/colors/ColorsListItem.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorsListItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ColorsListItem.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/example-pages/components/main/colors/ColorsListItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorsListItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/example-pages/components/main/colors/colorListSettings.json":
/*!*************************************************************************!*\
  !*** ./src/example-pages/components/main/colors/colorListSettings.json ***!
  \*************************************************************************/
/*! exports provided: code_variable_name, label, hex, rgba, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"code_variable_name\":{\"index\":\"4\",\"name\":\"Название в коде\"},\"label\":{\"index\":\"0\",\"name\":\"Название\"},\"hex\":{\"index\":\"2\",\"name\":\"HEX\"},\"rgba\":{\"name\":\"RGBA\",\"index\":\"3\"}}");

/***/ })

}]);
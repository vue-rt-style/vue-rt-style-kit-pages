"use strict";
(self["webpackChunkvue_rt_style_kit_pages"] = self["webpackChunkvue_rt_style_kit_pages"] || []).push([["src_atoms_components_ColorLineText_ColorLineText_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/atoms/components/ColorLineText/ColorLineText.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/atoms/components/ColorLineText/ColorLineText.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _olorLineText_styl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./СolorLineText.styl */ "./src/atoms/components/ColorLineText/СolorLineText.styl");
/* harmony import */ var _mixins_colorTextClassMixin_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../mixins/colorTextClassMixin.js */ "./src/atoms/mixins/colorTextClassMixin.js");
/* harmony import */ var _mixins_fillTextClassMixin_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../mixins/fillTextClassMixin.js */ "./src/atoms/mixins/fillTextClassMixin.js");
/* harmony import */ var _stores_deviceTypeStoreMixin_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../stores/deviceTypeStoreMixin.js */ "./src/atoms/stores/deviceTypeStoreMixin.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var componentProps = {
  colorIcon: {
    /** @deprecated */
    type: String,
    "default": "orange"
  },
  isWhiteColor: {
    type: Boolean,
    "default": false
  },
  customType: {
    type: Boolean,
    "default": false
  },
  hideArrow: {
    type: Boolean,
    "default": false
  },
  isAdvertise: {
    type: Boolean,
    "default": false
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "RtColorLineText",
  props: _objectSpread(_objectSpread(_objectSpread({}, componentProps), (0,_mixins_colorTextClassMixin_js__WEBPACK_IMPORTED_MODULE_1__.getColorsCustomProps)(true)), _mixins_fillTextClassMixin_js__WEBPACK_IMPORTED_MODULE_2__.fillColorProps),
  data: function data() {
    return {
      isMobile: false,
      isTablet: false,
      isSafari: /constructor/i.test(window.HTMLElement) || function (p) {
        return p.toString() === "[object SafariRemoteNotification]";
      }(!window['safari'] || typeof safari !== 'undefined' && safari.pushNotification)
    };
  },
  beforeUpdate: function beforeUpdate() {
    _stores_deviceTypeStoreMixin_js__WEBPACK_IMPORTED_MODULE_3__.deviceTypeStore.removeWatcher(this._uid, this.calculateMobileOptions);
  },
  updated: function updated() {
    _stores_deviceTypeStoreMixin_js__WEBPACK_IMPORTED_MODULE_3__.deviceTypeStore.addWatcher(this._uid, this.calculateMobileOptions);
  },
  beforeDestroy: function beforeDestroy() {
    _stores_deviceTypeStoreMixin_js__WEBPACK_IMPORTED_MODULE_3__.deviceTypeStore.removeWatcher(this._uid, this.calculateMobileOptions);
  },
  mounted: function mounted() {
    _stores_deviceTypeStoreMixin_js__WEBPACK_IMPORTED_MODULE_3__.deviceTypeStore.addWatcher(this._uid, this.calculateMobileOptions);
    this.calculateMobileOptions();
  },
  methods: {
    calculateMobileOptions: function calculateMobileOptions() {
      var type = _stores_deviceTypeStoreMixin_js__WEBPACK_IMPORTED_MODULE_3__.deviceTypeStore.getStatus();
      this.isMobile = type === 'mobile';
      this.isTablet = type === 'tablet';
    }
  },
  computed: {
    wrapperClass: function wrapperClass() {
      var className = 'color-line-wrapper';
      className += this.customType ? " color-line-wrapper--custom" : "";
      className += this.isAdvertise ? " color-line-wrapper--is-advertise" : "";
      return className;
    },
    colorLineIconClass: function colorLineIconClass() {
      var className = ["color-line-paragraph-icon"].concat(_toConsumableArray(_mixins_fillTextClassMixin_js__WEBPACK_IMPORTED_MODULE_2__.getFillClassByProps.bind(this)({
        fillColor: 'colorIcon'
      })));
      return className.join(' ');
    },
    labelClass: function labelClass() {
      var className = ["color-line-text"].concat(_toConsumableArray(_mixins_colorTextClassMixin_js__WEBPACK_IMPORTED_MODULE_1__.getColorClassByProps.bind(this)(true).label));

      if (this.fillColor) {
        className.push("color-line-text--" + this.fillColor);
      }

      if (this.isWhiteColor) {
        className.push("color-white");
      }

      return className.join(' ');
    },
    contentClass: function contentClass() {
      var className = ['color-line-text', 'rt-font-paragraph'].concat(_toConsumableArray(_mixins_colorTextClassMixin_js__WEBPACK_IMPORTED_MODULE_1__.getColorClassByProps.bind(this)(true).content));

      if (this.fillColor) {
        className.push("color-line-text--" + this.fillColor);
      }

      if (this.isWhiteColor) {
        className.push("color-white");
      }

      return className.join(' ');
    },
    topPartTransform: function topPartTransform() {
      if (this.isMobile) {
        return null;
      } else if (this.isTablet) {
        return this.isSafari ? "translate(-.95, -.25)" : "translate(-.25, -.75)";
      } else {
        return this.isSafari ? "translate(.75, -.25)" : "translate(.25, -.75)";
      }
    },
    bottomPartTransform: function bottomPartTransform() {
      if (this.isMobile) {
        return null;
      } else if (this.isTablet) {
        return this.isSafari ? "translate(-.95, 1.25)" : "translate(0, 1)";
      } else {
        return this.isSafari ? "translate(.75, 1)" : "translate(0, 1)";
      }
    }
  },
  render: function render(h) {
    var _this = this;

    var icon = function icon() {
      if (_this.hideArrow) {
        return null;
      }

      return h("svg", {
        "attrs": {
          "viewBox": "-0.39999 1 32 23"
        },
        "class": _this.colorLineIconClass
      }, [h("g", {
        "attrs": {
          "id": "Page-1",
          "fill-rule": "evenodd"
        }
      }, [h("g", {
        "attrs": {
          "id": "001-bw"
        }
      }, [h("path", {
        "class": "color-line-paragraph-icon__background",
        "attrs": {
          "d": "M33,-1.13686838e-13 L34.2595405,7.93519842 C36.9076879,7.78627681 38.2488174,3.85720464 38.2488174,1.20487316 L38.2488174,-1.13686838e-13 L33,-1.13686838e-13 Z",
          "id": "Path",
          "fill": "#FFFFFF",
          "transform": _this.topPartTransform
        }
      }), h("path", {
        "attrs": {
          "d": "M33.5561211,0 L0,0 L22.4131224,22.4131038 L36.5337472,6.67090677 C38.0088483,5.0264093 37.8715254,2.49747501 36.2270279,1.02237393 C35.4931384,0.36408091 34.5419931,0 33.5561211,0 Z",
          "id": "Path",
          "transform": _this.bottomPartTransform
        }
      })])])]);
      return h("svg", {
        "class": _this.colorLineIconClass,
        "attrs": {
          "width": "38",
          "height": "23",
          "viewBox": "-0.39999 1 32 23"
        }
      }, [h("path", {
        "class": "color-line-paragraph-icon__background",
        "attrs": {
          "d": "M33-1.0172375h-45V.04327594l43.7946512.04908113v7.93806336l1.4849033-.08350525c2.6481474-.14892161 4.7192255-2.33971054 4.7192629-4.99204202L38-0.0172375c.0000389-2.7614238-2.2385058-5.0000315-4.9999296-5.0000704H33z",
          "transform": _this.topPartTransform
        }
      }), h("path", {
        "attrs": {
          "d": "M33.5561211 0H0l22.4131224 22.4131038L36.5337472 6.67090677c1.4751011-1.64449747 1.3377782-4.17343176-.3067193-5.64853284C35.4931384.36408091 34.5419931 0 33.5561211 0z",
          "transform": _this.bottomPartTransform
        }
      })]);
    };

    var label = function label() {
      var labelClasses = ['rt-font-banner-label', 'color-line', 'color-line-label'];

      if (_this.$slots.content && !_this.isMobile) {
        return h("p", {
          "class": labelClasses.join(' ')
        }, [h("span", {
          "class": _this.labelClass
        }, [_this.$slots.label])]);
      } else {
        if (!_this.$slots.content) {
          labelClasses.push('color-line-label-single');
          return h("p", {
            "class": labelClasses.join(' ')
          }, [h("span", {
            "class": _this.labelClass
          }, [_this.$slots.label, icon()])]);
        }

        return h("p", {
          "class": labelClasses.join(' ')
        }, [h("span", {
          "class": _this.labelClass
        }, [_this.$slots.label]), icon()]);
      }
    };

    var content = function content() {
      if (!_this.isMobile) {
        if (_this.$slots.content) {
          return h("p", {
            "class": "color-line color-line--is-paragraph"
          }, [h("span", {
            "class": _this.contentClass
          }, [_this.$slots.content, icon()])]);
        } else {
          return null;
        }
      } else {
        if (_this.$slots.content) {
          return h("p", {
            "class": "color-line color-line--is-paragraph"
          }, [h("span", {
            "class": _this.contentClass
          }, [_this.$slots.content])]);
        } else {
          return null;
        }
      }
    };

    return h("div", {
      "class": this.wrapperClass
    }, [label(), content()]);
  }
});

/***/ }),

/***/ "./src/atoms/components/ColorLineText/ColorLineText.vue":
/*!**************************************************************!*\
  !*** ./src/atoms/components/ColorLineText/ColorLineText.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ColorLineText_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ColorLineText.vue?vue&type=script&lang=js& */ "./src/atoms/components/ColorLineText/ColorLineText.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns
;



/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _ColorLineText_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
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

/***/ "./src/atoms/components/ColorLineText/ColorLineText.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./src/atoms/components/ColorLineText/ColorLineText.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorLineText_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ColorLineText.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/atoms/components/ColorLineText/ColorLineText.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorLineText_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ })

}]);
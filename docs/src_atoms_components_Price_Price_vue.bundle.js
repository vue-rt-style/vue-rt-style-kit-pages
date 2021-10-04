"use strict";
(self["webpackChunkvue_rt_style_kit_pages"] = self["webpackChunkvue_rt_style_kit_pages"] || []).push([["src_atoms_components_Price_Price_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/atoms/components/Price/Price.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/atoms/components/Price/Price.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PriceV2_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PriceV2.vue */ "./src/atoms/components/Price/PriceV2.vue");
/* harmony import */ var _Price_styl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Price.styl */ "./src/atoms/components/Price/Price.styl");


var componentsList = {};
componentsList[_PriceV2_vue__WEBPACK_IMPORTED_MODULE_0__["default"].name] = _PriceV2_vue__WEBPACK_IMPORTED_MODULE_0__["default"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "RtPrice",
  components: componentsList,
  props: {
    bright: {
      type: Boolean,
      "default": false
    },
    value: {
      type: [Number, String],
      "default": 0
    },
    oldValue: {
      type: [Number, String],
      "default": 0
    },
    optionLabel: {
      type: String,
      "default": 'от'
    },
    showFloat: {
      type: Boolean,
      "default": false
    },
    colorValue: {
      type: String,
      "default": ''
    },
    currency: {
      type: String,
      "default": 'руб.'
    },
    timeInterval: {
      type: String,
      "default": 'мес.'
    },
    isOption: {
      type: Boolean,
      "default": false
    },
    onlyPrice: {
      type: Boolean,
      "default": false
    },
    forGame: {
      type: Boolean,
      "default": false
    },
    boldOption: {
      type: Boolean,
      "default": false
    },
    b2bPrice: {
      type: Boolean,
      "default": false
    },
    oldPriceColor: {
      type: String,
      "default": ''
    },
    isTimeIntervalBottom: {
      type: Boolean,
      "default": false
    },
    trimHundredth: {
      type: Boolean,
      "default": false
    },
    darkened: {
      /**Deprecated. need to be cut off*/
      type: Boolean,
      "default": false
    },
    v2: {
      type: Boolean,
      "default": false
    },
    isSmall: {
      type: Boolean,
      "default": false
    }
  },
  data: function data() {
    return {
      localValue: 0,
      normalizeValue: 0,
      normalizeOldValue: 0,
      priceType: "",
      normalizeCurrency: '',
      normalizeTimeInterval: 0
    };
  },
  watch: {
    value: {
      // Run as soon as the component loads
      immediate: true,
      handler: function handler(val) {
        var _this = this;

        this.localValue = parseFloat(this.value.toString());
        this.normalizeValue = this.showFloat ? parseFloat(this.localValue.toString()).toString().split(".").map(function (item, index) {
          if (index === 0) {
            item = item.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ");
          } else {
            item = parseInt(item).toFixed(2).toString();
            item = item[0] + item[1];
            item = item.replace('.', '');

            if (item.length === 1 && !_this.trimHundredth) {
              item += '0';
            }
          }

          return item;
        }).join(",") : parseInt(this.localValue.toString(), 10).toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ").trim();
      }
    },
    oldValue: function oldValue(val) {
      var _this2 = this;

      this.normalizeOldValue = this.showFloat ? parseFloat(val.toString()).toString().split(".").map(function (item, index) {
        if (index === 0) {
          item = item.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ");
        } else {
          item = parseInt(item).toFixed(2).toString();
          item = item[0] + item[1];
          item = item.replace('.', '');

          if (item.length === 1 && !_this2.trimHundredth) {
            item += '0';
          }
        }

        return item;
      }).join(",") : parseInt(val.toString(), 10).toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ").trim();
    },
    currency: function currency(val) {
      this.normalizeCurrency = val;
    },
    timeInterval: function timeInterval(val) {
      this.normalizeTimeInterval = val;
    }
  },
  mounted: function mounted() {
    var _this3 = this;

    this.localValue = this.value ? parseFloat(this.value.toString()) : 0;
    this.normalizeCurrency = this.currency;
    this.normalizeTimeInterval = this.timeInterval; //todo сделать проверку системного языка с заменой . , у double данных

    if (this.showFloat) {
      this.normalizeValue = parseFloat(this.localValue.toString()).toString().split(".").map(function (item, index) {
        if (index === 0) {
          item = item.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ");
        } else {
          item = parseInt(item).toFixed(2).toString();
          item = item[0] + item[1];
          item = item.replace('.', '');

          if (item.length === 1 && !_this3.trimHundredth) {
            item += '0';
          }
        }

        return item;
      }).join(",");
      this.normalizeOldValue = parseFloat(this.oldValue.toString()).toString().split(".").map(function (item, index) {
        if (index === 0) {
          item = item.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ");
        } else {
          item = parseInt(item).toFixed(2).toString();
          item = item[0] + item[1];
          item = item.replace('.', '');

          if (item.length === 1 && !_this3.trimHundredth) {
            item += '0';
          }
        }

        return item;
      }).join(",");
    } else {
      this.normalizeValue = parseInt(this.value.toString(), 10).toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ").trim();
      this.normalizeOldValue = parseInt(this.oldValue.toString(), 10).toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ").trim();
    }
  },
  computed: {
    priceClass: function priceClass() {
      var rtPriceClass = ['rt-price', 'rt-price-without-space'];

      if (this.forGame) {
        rtPriceClass.push('rt-price-game');
      }

      if (this.bright) {
        rtPriceClass.push('rt-price-bright');
      }

      return rtPriceClass.join(' ');
    }
  },
  render: function render(h) {
    var _this4 = this;

    if (this.v2) {
      return h("rt-price-v2", {
        "attrs": {
          "bright": this.bright,
          "value": this.value,
          "old-value": this.oldValue,
          "option-label": this.optionLabel,
          "show-float": this.showFloat,
          "currency": this.currency,
          "is-small": this.isSmall,
          "time-interval": this.timeInterval,
          "is-option": this.isOption
        },
        "on": {
          "ly-price": this.onlyPrice
        }
      }, [this.$slots["default"]]);
    }

    var rtPriceInfoClass = "rt-price__info" + (this.boldOption ? " rt-price__info--bold-font" : "");

    var timeIntervalRender = function timeIntervalRender() {
      if (_this4.normalizeTimeInterval && !_this4.onlyPrice) {
        return h("div", {
          "class": "rt-price__info-item"
        }, [_this4.normalizeTimeInterval]);
      } else {
        return null;
      }
    };

    var optionRender = function optionRender() {
      if (_this4.isOption) {
        return h("div", {
          "class": "rt-price__option"
        }, [_this4.optionLabel]);
      } else {
        return null;
      }
    };

    var currencyRender = function currencyRender() {
      if (_this4.normalizeCurrency) {
        {
          return h("div", {
            "class": "rt-price__info-item"
          }, [_this4.normalizeCurrency]);
        }
      } else {
        return null;
      }
    };

    var oldValueRender = function oldValueRender() {
      if (_this4.normalizeOldValue && parseFloat(_this4.normalizeOldValue) > 0) {
        return h("div", {
          "class": "rt-price__old-value"
        }, [_this4.normalizeOldValue]);
      } else {
        return null;
      }
    };

    var priceInfoRender = function priceInfoRender() {
      if (_this4.isTimeIntervalBottom) {
        return h("div", [optionRender(), h("div", {
          "class": "rt-price__value rtb-price__value" + (_this4.colorValue ? " color-" + _this4.colorValue : "")
        }, [_this4.$slots.epcPrice ? _this4.$slots.epcPrice : _this4.normalizeValue]), h("div", {
          "class": "rtb-price__info rt-price__info"
        }, [_this4.normalizeCurrency]), h("div", {
          "class": "rt-font-small-paragraph rt-font-bold rtb-price__info-interval"
        }, [_this4.normalizeTimeInterval])]);
      } else {
        return h("div", [optionRender(), h("div", {
          "class": "rt-price__value rtb-price__value" + (_this4.colorValue ? " color-" + _this4.colorValue : "")
        }, [_this4.$slots.epcPrice ? _this4.$slots.epcPrice : _this4.normalizeValue]), h("div", {
          "class": "rt-price__info rtb-price__info"
        }, [h("div", {
          "class": "rt-price__info-item rtb-price__info-item"
        }, [_this4.normalizeCurrency]), h("div", {
          "class": "rtb-price__info-item"
        }, [_this4.normalizeTimeInterval])])]);
      }
    };

    if (this.b2bPrice) {
      var oldB2bPriceRender = function oldB2bPriceRender() {
        if (_this4.normalizeOldValue && parseFloat(_this4.normalizeOldValue) > 0) {
          return h("div", {
            "class": "rt-price__old-value rtb-price__old-value" + (_this4.oldPriceColor ? " color-" + _this4.oldPriceColor : "")
          }, [_this4.normalizeOldValue, h("div", {
            "class": "rt-price__info rtb-price__info-item"
          }, [h("span", {
            "class": _this4.oldPriceColor ? " color-" + _this4.oldPriceColor : ""
          }, [_this4.normalizeCurrency])])]);
        } else {
          return null;
        }
      };

      return h("div", {
        "class": "rt-price rtb-price rt-price-without-space" + (this.darkened ? " rtb-price--darkened" : "")
      }, [oldB2bPriceRender(), priceInfoRender()]);
    } else {
      return h("div", {
        "class": this.priceClass
      }, [optionRender(), oldValueRender(), h("div", {
        "class": "rt-price__option-value rt-price__value" + (this.colorValue ? " color-" + this.colorValue : "")
      }, [this.normalizeValue]), h("div", {
        "class": rtPriceInfoClass
      }, [currencyRender(), timeIntervalRender()])]);
    }
  }
});

/***/ }),

/***/ "./src/atoms/components/Price/Price.vue":
/*!**********************************************!*\
  !*** ./src/atoms/components/Price/Price.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Price_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Price.vue?vue&type=script&lang=js& */ "./src/atoms/components/Price/Price.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns
;



/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _Price_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
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

/***/ "./src/atoms/components/Price/Price.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./src/atoms/components/Price/Price.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Price_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Price.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/atoms/components/Price/Price.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Price_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ })

}]);
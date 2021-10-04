"use strict";
(self["webpackChunkvue_rt_style_kit_pages"] = self["webpackChunkvue_rt_style_kit_pages"] || []).push([["src_atoms_components_Select_SelectV2VirtualOption_vue-_f83c1"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/atoms/components/Select/SelectV2VirtualOption.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/atoms/components/Select/SelectV2VirtualOption.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SelectStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SelectStore.js */ "./src/atoms/components/Select/SelectStore.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "RtSelectV2VirtualOption",
  props: {
    onClickFn: {
      type: Function
    },
    isActive: {
      type: Boolean,
      "default": false
    },
    label: {
      type: [String, Number],
      "default": ''
    },
    selectName: {
      type: String,
      "default": ''
    },
    value: {
      type: [String, Number],
      "default": null
    },
    multiple: {
      type: Boolean,
      "default": false
    },
    isFocus: {
      type: Boolean,
      "default": false
    },
    sublabel: {
      type: String,
      "default": ''
    },
    index: {
      type: Number,
      "default": null
    },
    inputValue: {
      type: String,
      "default": ''
    }
  },
  data: function data() {
    return {
      checkMouseEnter: true
    };
  },
  computed: {
    selectClass: function selectClass() {
      var classList = ["select-v2-option", "d-block"];

      if (this.isActive && !this.multiple) {
        classList.push("select-v2-option--select");
      }

      if (this.isFocus) {
        classList.push("select-v2-option--focus");
      }

      return classList.join(' ');
    },
    renderSublabel: function renderSublabel() {
      var h = this.$createElement;

      if (this.sublabel.length > 0) {
        return h("p", {
          "class": "rt-font-label"
        }, [this.sublabel]);
      }

      return null;
    }
  },
  watch: {
    isFocus: function isFocus(newVal, oldVal) {
      if (newVal && newVal != oldVal) {
        this.$refs.button.focus();
      }
    }
  },
  mounted: function mounted() {
    this.setFocus();
  },
  methods: {
    scrollToEl: function scrollToEl() {
      var el = this.$el;
      var parentEl = el.parentElement;

      if (parentEl.classList.contains('select-list')) {
        parentEl.scrollTop = el.getBoundingClientRect().top - parentEl.getBoundingClientRect().top;
      }
    },
    setFocus: function setFocus() {
      if (this.isActive) {
        this.$refs.button.focus();
        this.scrollToEl();
      }
    },
    onClickFire: function onClickFire() {
      if (this.isActive) {
        _SelectStore_js__WEBPACK_IMPORTED_MODULE_0__.SelectStore.removeActiveValue(this.selectName, this.value);
      } else {
        _SelectStore_js__WEBPACK_IMPORTED_MODULE_0__.SelectStore.setActiveValue(this.selectName, this.value, true);
        this.emitLeave();
      }

      if (this.$parent.autoComplete) {
        _SelectStore_js__WEBPACK_IMPORTED_MODULE_0__.SelectStore.setClose(this.selectName);
      }
    },
    clickOnCheckbox: function clickOnCheckbox(e) {
      e.preventDefault();
      this.onClickFire();
    },
    emitEnter: function emitEnter() {
      this.$emit('mouseenter');
    },
    emitLeave: function emitLeave() {
      this.$emit('mouseleave');
    },
    emitMove: function emitMove() {
      this.$emit('mousemove');
    }
  },
  render: function render(h) {
    var _this = this;

    var renderLabel = function renderLabel() {
      if (_this.inputValue.length > 0) {
        var boldText = _this.inputValue;
        var fullString = _this.label;
        return h('span', {
          domProps: {
            innerHTML: '<span class="select-v2-option__mismatch">' + fullString.replace(new RegExp('(' + boldText.split(' ').join(')|(') + ')', 'gi'), '</span><span>$&</span><span class="select-v2-option__mismatch">') + '</span>'
          }
        });
      } else {
        return _this.label;
      }
    };

    if (this.label.length > 0) {
      if (this.multiple) {
        return h("button", {
          "attrs": {
            "type": "button"
          },
          "ref": "button",
          "class": this.selectClass,
          "on": {
            "click": this.onClickFire,
            "mouseenter": this.emitEnter,
            "mouseleave": this.emitLeave,
            "mousemove": this.emitMove
          }
        }, [h("rt-checkbox", {
          "on": {
            "click": this.clickOnCheckbox
          },
          "attrs": {
            "is-orange": true,
            "checked": this.isActive
          }
        }), h("div", {
          "class": "select-v2-option__inner"
        }, [h("p", {
          "class": "rt-font-control"
        }, [this.label]), this.renderSublabel])]);
      }

      return h("button", {
        "attrs": {
          "type": "button"
        },
        "ref": "button",
        "class": this.selectClass,
        "on": {
          "click": this.onClickFire,
          "mouseenter": this.emitEnter,
          "mouseleave": this.emitLeave,
          "mousemove": this.emitMove
        }
      }, [h("div", {
        "class": "select-v2-option__inner"
      }, [h("p", {
        "class": "rt-font-control"
      }, [renderLabel()]), this.renderSublabel])]);
    }

    return null;
  }
});

/***/ }),

/***/ "./src/atoms/components/Select/SelectV2VirtualOption.vue":
/*!***************************************************************!*\
  !*** ./src/atoms/components/Select/SelectV2VirtualOption.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SelectV2VirtualOption_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SelectV2VirtualOption.vue?vue&type=script&lang=js& */ "./src/atoms/components/Select/SelectV2VirtualOption.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns
;



/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _SelectV2VirtualOption_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
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

/***/ "./src/atoms/components/Select/SelectV2VirtualOption.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./src/atoms/components/Select/SelectV2VirtualOption.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectV2VirtualOption_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SelectV2VirtualOption.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/atoms/components/Select/SelectV2VirtualOption.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectV2VirtualOption_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ })

}]);
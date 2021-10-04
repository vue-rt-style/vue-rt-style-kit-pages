"use strict";
(self["webpackChunkvue_rt_style_kit_pages"] = self["webpackChunkvue_rt_style_kit_pages"] || []).push([["src_atoms_components_Switch_SwitchV2_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/atoms/components/Switch/SwitchV2.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/atoms/components/Switch/SwitchV2.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SwitchV2_styl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SwitchV2.styl */ "./src/atoms/components/Switch/SwitchV2.styl");

var componentsList = {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "RtSwitchV2",
  components: componentsList,
  props: {
    id: {
      type: String,
      "default": ''
    },
    disabled: {
      type: Boolean,
      "default": false
    },
    checked: {
      type: Boolean,
      "default": false
    },
    bright: {
      type: Boolean,
      "default": false
    },
    name: {
      type: String,
      "default": ''
    },
    invert: {
      type: Boolean,
      "default": false
    },
    color: {
      type: String,
      "default": 'orange'
    }
  },
  computed: {
    switchClassName: function switchClassName() {
      var switchClassName = ['switch-v2'];

      if (this.invert) {
        switchClassName.push('switch-v2-invert');
      }

      if (this.color) {
        switchClassName.push('switch-v2--' + this.color);
      }

      if (this.bright) {
        switchClassName.push('switch-v2-bright');
      }

      return switchClassName.join(' ');
    }
  },
  mounted: function mounted() {},
  methods: {
    onChange: function onChange() {}
  },
  render: function render(h) {
    var _this = this;

    var renderInput = function renderInput() {
      if (_this.name) {
        return h("input", {
          "ref": "input",
          "attrs": {
            "id": _this.id,
            "name": _this.name,
            "disabled": _this.disabled,
            "type": "checkbox"
          },
          "domProps": {
            "checked": _this.checked
          },
          "class": "switch-v2-element",
          "on": {
            "change": _this.onChange
          }
        });
      } else {
        return h("input", {
          "ref": "input",
          "attrs": {
            "id": _this.id,
            "disabled": _this.disabled,
            "type": "checkbox"
          },
          "domProps": {
            "checked": _this.checked
          },
          "class": "switch-v2-element",
          "on": {
            "change": _this.onChange
          }
        });
      }
    };

    return h("label", {
      "class": this.switchClassName
    }, [renderInput(), h("div", {
      "class": "switch-v2-container"
    }, [h("div", {
      "class": "switch-v2-float"
    }), this.$slots["default"]])]);
  }
});

/***/ }),

/***/ "./src/atoms/components/Switch/SwitchV2.vue":
/*!**************************************************!*\
  !*** ./src/atoms/components/Switch/SwitchV2.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SwitchV2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SwitchV2.vue?vue&type=script&lang=js& */ "./src/atoms/components/Switch/SwitchV2.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns
;



/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _SwitchV2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
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

/***/ "./src/atoms/components/Switch/SwitchV2.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./src/atoms/components/Switch/SwitchV2.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SwitchV2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SwitchV2.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/atoms/components/Switch/SwitchV2.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SwitchV2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ })

}]);
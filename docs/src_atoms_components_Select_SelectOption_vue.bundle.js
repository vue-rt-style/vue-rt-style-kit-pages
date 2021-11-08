"use strict";
(self["webpackChunkvue_rt_style_kit_pages"] = self["webpackChunkvue_rt_style_kit_pages"] || []).push([["src_atoms_components_Select_SelectOption_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/atoms/components/Select/SelectOption.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/atoms/components/Select/SelectOption.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  inject: ["RtSelect"],
  name: "RtSelectOption",
  props: {
    value: {
      type: String,
      "default": null
    },
    selected: {
      type: Boolean,
      "default": false
    }
  },
  data: function data() {
    return {
      localValue: this.text ? this.text : "",
      isSelected: false
    };
  },
  computed: {
    selectedValue: function selectedValue() {
      if (this.RtSelect) {
        return this.RtSelect.selectedValue;
      } else {
        return "";
      }
    },
    optionClasses: function optionClasses() {
      var optionClasses = ['select-option'];

      if (this.RtSelect && this.RtSelect.hasMultiSelect) {
        optionClasses.push("select-option--multi");
      } else {
        if (this.isSelected) {
          optionClasses.push('select-option--select');
        }
      }

      return optionClasses.join(' ');
    }
  },
  watch: {
    selectedValue: function selectedValue() {
      this.setIsSelected();
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.setValue();
    this.setIsSelected(function () {
      if (_this.selected) {
        _this.RtSelect.setValue({
          text: _this.text,
          value: _this.value
        });
      }
    });
  },
  methods: {
    setIsSelected: function setIsSelected(callbackFn) {
      this.isSelected = this.selectedValue === this.text;

      if (callbackFn) {
        setTimeout(function () {
          callbackFn();
        }, 0);
      }
    },
    setValue: function setValue() {
      this.text = this.getTextContent();
    },
    setSelection: function setSelection(e) {
      this.RtSelect.setValue({
        text: this.text,
        value: this.value
      });

      if (this.$refs['multiSelectCheckboxInput']) {
        this.$refs['multiSelectCheckboxInput'].checked = !this.$refs['multiSelectCheckboxInput'].checked;
      }

      if (e) {
        e.preventDefault();
      }
    },
    getTextContent: function getTextContent() {
      if (this.$el) {
        return this.$el.textContent.trim();
      }

      var slot = this.$slots["default"];
      return slot ? slot[0].text.trim() : "";
    }
  },
  render: function render(h) {
    var _this2 = this;

    var hiddenCheckbox = function () {
      if (_this2.RtSelect && _this2.RtSelect.hasMultiSelect) {
        return h("div", {
          "class": "select-option__checkbox",
          "ref": "multiSelectCheckbox"
        }, [h("input", {
          "attrs": {
            "type": "checkbox"
          },
          "class": "select-option__hidden-checkbox",
          "ref": "multiSelectCheckboxInput"
        }), h("div", {
          "class": "select-option__checkbox-angle"
        }, [h("svg", {
          "class": "select-option__checkbox-angle-icon",
          "attrs": {
            "width": "12",
            "height": "10",
            "xmlns": "http://www.w3.org/2000/svg"
          }
        }, [h("path", {
          "attrs": {
            "d": "M1 5l3.448 3L11 2",
            "stroke": "#70F",
            "stroke-width": "3",
            "fill": "none",
            "fill-rule": "evenodd"
          }
        })])])]);
      } else {
        return null;
      }
    }();

    return h("div", {
      "class": this.optionClasses
    }, [h("button", {
      "class": "select-option__inner",
      "on": {
        "click": this.setSelection
      }
    }, [hiddenCheckbox, this.$slots["default"]])]);
  }
});

/***/ }),

/***/ "./src/atoms/components/Select/SelectOption.vue":
/*!******************************************************!*\
  !*** ./src/atoms/components/Select/SelectOption.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SelectOption_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SelectOption.vue?vue&type=script&lang=js& */ "./src/atoms/components/Select/SelectOption.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns
;



/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _SelectOption_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
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

/***/ "./src/atoms/components/Select/SelectOption.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./src/atoms/components/Select/SelectOption.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectOption_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SelectOption.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/atoms/components/Select/SelectOption.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectOption_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ })

}]);
"use strict";
(self["webpackChunkvue_rt_style_kit_pages"] = self["webpackChunkvue_rt_style_kit_pages"] || []).push([["src_atoms_components_Textarea_TextareaStatic_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/atoms/components/Textarea/TextareaStatic.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/atoms/components/Textarea/TextareaStatic.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "RtTextareaStatic",
  props: {
    disabled: {
      type: Boolean,
      "default": false
    },
    label: {
      type: String,
      "default": null
    },
    hasError: {
      type: Boolean,
      "default": false
    },
    errorMessage: {
      type: String,
      "default": null
    },
    value: {
      type: String,
      "default": null
    },
    fieldId: {
      type: String,
      "default": ''
    }
  },
  data: function data() {
    return {
      inputText: "",
      hasInputText: false
    };
  },
  computed: {
    teatareaClasses: function teatareaClasses() {
      var classes = ['text-field', 'textarea textarea--static'];

      if (this.hasInputText) {
        classes.push("textarea--not-empty");
      }

      if (this.disabled) {
        classes.push("textarea--disabled");
      }

      if (this.hasError) {
        classes.push("text-field--error");
      }

      return classes.join(' ');
    }
  },
  watch: {
    localValue: function localValue(val) {
      this.$emit("change", val);
    }
  },
  mounted: function mounted() {
    this.localValue = this.value;
    this.setValueLength();
    this.setDisabled();
  },
  methods: {
    setDisabled: function setDisabled() {
      if (this.$refs.textarea) {
        this.$refs.textarea.disabled = Boolean(this.disabled);
      }
    },
    setValueLength: function setValueLength() {
      this.hasInputText = this.localValue ? this.localValue.length > 0 : false;
    },
    inputHandler: function inputHandler($event) {
      this.localValue = this.$refs.textarea.value;
      this.setValueLength();
    },
    clearInput: function clearInput() {
      this.$refs.textarea.value = '';
      this.inputHandler();
    }
  },
  render: function render(h) {
    var _this = this;

    var label = function () {
      if (_this.label) {
        return h("div", {
          "class": "textarea-label"
        }, [_this.label]);
      } else {
        return null;
      }
    }();

    return h("div", {
      "class": this.teatareaClasses
    }, [label, h("textarea", {
      "class": "textarea-element",
      "ref": "textarea",
      "on": {
        "input": this.inputHandler
      },
      "attrs": {
        "id": this.fieldId
      }
    }, [this.value]), h("div", {
      "class": "textarea-border"
    }), h("p", {
      "class": "text-field__error-message"
    }, [this.errorMessage])]);
  }
});

/***/ }),

/***/ "./src/atoms/components/Textarea/TextareaStatic.vue":
/*!**********************************************************!*\
  !*** ./src/atoms/components/Textarea/TextareaStatic.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TextareaStatic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TextareaStatic.vue?vue&type=script&lang=js& */ "./src/atoms/components/Textarea/TextareaStatic.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns
;



/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _TextareaStatic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
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

/***/ "./src/atoms/components/Textarea/TextareaStatic.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./src/atoms/components/Textarea/TextareaStatic.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TextareaStatic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TextareaStatic.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/atoms/components/Textarea/TextareaStatic.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TextareaStatic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ })

}]);
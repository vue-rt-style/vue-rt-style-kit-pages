"use strict";
(self["webpackChunkvue_rt_style_kit_pages"] = self["webpackChunkvue_rt_style_kit_pages"] || []).push([["src_atoms_components_Textarea_TextareaV2_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/atoms/components/Textarea/TextareaV2.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/atoms/components/Textarea/TextareaV2.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TextareaV2_styl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TextareaV2.styl */ "./src/atoms/components/Textarea/TextareaV2.styl");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "RtTextareaV2",
  props: {
    disabled: {
      type: Boolean,
      "default": false
    },
    placeholder: {
      type: String,
      "default": null
    },
    hasError: {
      type: Boolean,
      "default": false
    },
    errorMessage: {
      type: String,
      "default": ""
    },
    value: {
      type: String,
      "default": ''
    },
    fieldId: {
      type: String,
      "default": ''
    },
    resize: {
      type: Boolean,
      "default": false
    },
    label: {
      type: String,
      "default": ''
    },
    maxSize: {
      type: [String, Number],
      "default": 0
    },
    stopOnOversize: {
      type: Boolean,
      "default": false
    },
    bright: {
      type: Boolean,
      "default": false
    }
  },
  data: function data() {
    return {
      localValue: "",
      inputText: "",
      hasInputText: false
    };
  },
  created: function created() {
    this.localValue = this.value;
  },
  computed: {
    renderError: function renderError() {
      var h = this.$createElement;

      if (this.errorMessage.length > 0 && this.hasError) {
        return h("p", {
          "class": "rt-textarea-v2__error rt-font-label"
        }, [this.errorMessage]);
      }

      return null;
    },
    sizeRender: function sizeRender() {
      var h = this.$createElement;

      if (this.maxSize && parseInt(this.maxSize) > 0) {
        var sizeClasslist = ['rt-textarea-v2__size', 'rt-font-label'];

        if (this.localValue.length > this.maxSize) {
          sizeClasslist.push('rt-textarea-v2__size--error');
        }

        if (this.disabled) {
          sizeClasslist.push('rt-textarea-v2__size--disabled');
        }

        return h("div", {
          "class": sizeClasslist.join(' ')
        }, [this.localValue.length, "/", parseInt(this.maxSize)]);
      }

      return null;
    },
    textareaLabelClassname: function textareaLabelClassname() {
      var textareaTagClassname = ['rt-textarea-v2__label', 'rt-font'];

      if (this.localValue.length > 0) {
        textareaTagClassname.push('rt-textarea-v2__label--small');

        if (this.hasError) {
          textareaTagClassname.push('rt-textarea-v2__label--error');
        }
      }

      return textareaTagClassname.join(' ');
    },
    textareaTagClassname: function textareaTagClassname() {
      var textareaTagClassname = ['rt-font', 'rt-textarea-v2__tag'];

      if (this.resize) {
        textareaTagClassname.push('rt-textarea-v2__tag--resize');
      }

      return textareaTagClassname.join(' ');
    },
    textareaClassname: function textareaClassname() {
      var textareaClassname = ['rt-textarea-v2'];

      if (this.bright) {
        textareaClassname.push('rt-textarea-v2-bright');
      }

      if (this.hasError) {
        textareaClassname.push('rt-textarea-v2--error');
      }

      if (this.disabled) {
        textareaClassname.push('rt-textarea-v2--disabled');
      }

      return textareaClassname.join(' ');
    }
  },
  watch: {
    value: function value(newVal, oldVal) {
      var _this = this;

      if (newVal != oldVal && newVal != this.localValue) {
        this.localValue = newVal;
        this.$nextTick(function () {
          if (_this.$refs.textarea.value != _this.localValue) {
            _this.$refs.textarea.value = _this.localValue;
          }
        });
      }
    },
    localValue: function localValue(newVal, oldVal) {
      if (oldVal != newVal && newVal != this.value) {
        if (this.stopOnOversize && this.maxSize > 0) {
          if (this.maxSize >= newVal.length) {
            this.$emit('input', newVal);
          } else {
            this.localValue = newVal.substring(0, this.maxSize);
            this.$refs.textarea.value = this.localValue;
          }
        } else {
          this.$emit('input', newVal);
        }
      }
    }
  },
  mounted: function mounted() {},
  methods: {
    setInTextarea: function setInTextarea() {
      this.$refs.textarea.innerHTML = this.localValue;
    },
    onInput: function onInput() {
      this.localValue = this.$refs.textarea.value;
    }
  },
  render: function render(h) {
    return h("div", {
      "class": this.textareaClassname
    }, [h("textarea", {
      "attrs": {
        "disabled": this.disabled
      },
      "class": this.textareaTagClassname,
      "ref": "textarea",
      "on": {
        "input": this.onInput
      }
    }), h("p", {
      "class": this.textareaLabelClassname
    }, [this.label || this.placeholder]), h("div", {
      "class": "rt-textarea-v2__line"
    }), h("div", {
      "class": "rt-textarea-v2-footer"
    }, [this.sizeRender, this.renderError])]);
  }
});

/***/ }),

/***/ "./src/atoms/components/Textarea/TextareaV2.vue":
/*!******************************************************!*\
  !*** ./src/atoms/components/Textarea/TextareaV2.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TextareaV2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TextareaV2.vue?vue&type=script&lang=js& */ "./src/atoms/components/Textarea/TextareaV2.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns
;



/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _TextareaV2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
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

/***/ "./src/atoms/components/Textarea/TextareaV2.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./src/atoms/components/Textarea/TextareaV2.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TextareaV2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TextareaV2.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/atoms/components/Textarea/TextareaV2.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TextareaV2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ })

}]);
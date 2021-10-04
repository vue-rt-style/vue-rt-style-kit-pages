"use strict";
(self["webpackChunkvue_rt_style_kit_pages"] = self["webpackChunkvue_rt_style_kit_pages"] || []).push([["src_atoms_components_Input_InputV2PhoneNumber_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/atoms/components/Input/InputV2PhoneNumber.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/atoms/components/Input/InputV2PhoneNumber.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _InputV2Atom_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InputV2Atom.vue */ "./src/atoms/components/Input/InputV2Atom.vue");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var components = {};
components[_InputV2Atom_vue__WEBPACK_IMPORTED_MODULE_0__["default"].name] = _InputV2Atom_vue__WEBPACK_IMPORTED_MODULE_0__["default"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "RtInputV2PhoneNumber",
  components: components,
  props: {
    bright: {
      type: Boolean,
      "default": false
    },
    disabled: {
      type: Boolean,
      "default": false
    },
    placeholder: {
      type: String,
      "default": ''
    },
    hasError: {
      type: Boolean,
      "default": false
    },
    errorMessage: {
      type: String,
      "default": ''
    },
    value: {
      type: String,
      "default": ""
    },
    isWhite: {
      type: Boolean,
      "default": false
    },
    name: {
      type: String,
      "default": ''
    },
    label: {
      type: String,
      "default": ''
    },
    color: {
      type: String,
      "default": "purple"
    },
    needVerification: {
      type: Boolean,
      "default": false
    },
    verified: {
      type: Boolean,
      "default": false
    }
  },
  data: function data() {
    return {
      localType: 'tel',
      localValue: '',
      filled: false,
      caretPositionBefore: 0,
      caretPositionAfter: 0,
      prevVal: '',
      nativeInput: false,
      backwards: false,
      selection: false
    };
  },
  watch: {
    value: function value(newVal, oldVal) {
      this.value = newVal;
      this.$refs.input.$refs.input.value = newVal;
      this.addMask();
    }
  },
  computed: {},
  mounted: function mounted() {
    this.localValue = this.value;

    if (this.value != '') {
      this.addMask();
    }
  },
  methods: {
    preventZipCodeChange: function preventZipCodeChange($event) {
      this.caretPositionBefore = this.$refs.input.$refs.input.selectionStart;

      if (!this.selection) {
        if ($event.keyCode == 8 && this.caretPositionBefore <= 2 && this.localValue.length > 3 || this.localValue.length >= 18 && $event.keyCode > 47 && $event.keyCode < 58) {
          $event.preventDefault();
        }
      } else {
        this.selection = false;
      }

      if ($event.keyCode == 8 && window.getSelection().toString() == this.localValue) {
        this.$refs.input.clearInput();
        this.localValue = '';
        this.filled = false;
      }

      this.$emit('keydown', $event);
    },
    addMask: function addMask() {
      var field = this.$refs.input.$refs.input;
      var fieldVal = field.value;

      if (fieldVal.length == 11) {
        if (+fieldVal.charAt(0) == 7 || +fieldVal.charAt(0) == 8) {
          fieldVal = fieldVal.slice(1);
        }
      }

      if (this.nativeInput) {
        this.caretPositionBefore = field.selectionStart;
        this.backwards = this.prevVal.length > fieldVal.length;
      }

      if (this.backwards && this.nativeInput) {
        if (fieldVal.length == 4) {
          this.localValue = '+7 ';
        }

        if (fieldVal.length < 4) {
          this.localValue = '';
        }
      } else {
        if (fieldVal.length == 1) {
          if (fieldVal != '7' && fieldVal != '8') {
            this.localValue = '+7 (' + fieldVal;
          } else {
            this.localValue = '+7 ';
          }
        } else if (fieldVal.charAt(1) != '7') {
          fieldVal = '+7' + fieldVal;
        }
      }

      var matrix = "+7 (___) ___ __ __",
          i = 0,
          def = matrix.replace(/\D/g, ""),
          val = fieldVal.replace(/\D/g, "");
      if (def.length >= val.length) val = def;
      fieldVal = matrix.replace(/./g, function (a) {
        return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a;
      });

      if (fieldVal.length > 3) {
        this.localValue = fieldVal;
      }

      this.filled = this.localValue.length == 18;
      this.$refs.input.localValue = this.localValue;

      if (this.filled && this.needVerification) {
        this.$emit('filled', this.localValue);
      }

      this.caretPositionAfter = field.selectionStart;

      if (this.backwards) {
        if (this.caretPositionBefore <= this.caretPositionAfter - 1) {
          this.setCaret(this.caretPositionBefore);
        }
      } else {
        if (this.caretPositionBefore < this.caretPositionAfter - 2 && this.caretPositionBefore != 1) {
          if (fieldVal.charAt(this.caretPositionBefore) == ' ') {
            this.setCaret(this.caretPositionBefore + 1);

            if (/[\D]/.test(fieldVal.charAt(this.caretPositionBefore - 1))) {
              this.setCaret(this.caretPositionBefore + 2);
            }
          } else {
            this.setCaret(this.caretPositionBefore);
          }
        }
      }

      this.prevVal = this.localValue;
      this.nativeInput = false;
      this.$emit('input', this.localValue);
    },
    clearValue: function clearValue() {
      this.localValue = '';
      this.$refs.input.localValue = '';
      this.$emit('clear');
    },
    setCaret: function setCaret(pos) {
      this.$refs.input.$refs.input.setSelectionRange(pos, pos);
    },
    onChange: function onChange(e) {
      this.$emit('change', e);
    },
    onBlur: function onBlur(e) {
      this.$emit('blur', e);
    },
    onFocus: function onFocus(e) {
      this.$emit('focus', e);
    },
    onInput: function onInput(e) {
      var _this = this;

      if (!e.match(/\d/)) {
        this.$nextTick(function () {
          _this.$refs.input._data.localValue = '';
        });
      }

      this.nativeInput = true;
      this.$emit('input', e);
    },
    onKeyup: function onKeyup(e) {
      this.$emit('keyup', e);
    },
    onSelect: function onSelect() {
      this.selection = true;
    }
  },
  render: function render(createElement) {
    var componentStack = [];

    var props = _objectSpread({}, this._props);

    props.type = this.localType;
    props.value = this.value;
    return createElement(_InputV2Atom_vue__WEBPACK_IMPORTED_MODULE_0__["default"], {
      props: props,
      on: {
        phone: this.addMask,
        clear: this.clearValue,
        keydown: this.preventZipCodeChange,
        change: this.onChange,
        focus: this.onFocus,
        blur: this.onBlur,
        input: this.onInput,
        keyup: this.onKeyup,
        select: this.onSelect
      },
      ref: 'input',
      componentStack: componentStack
    });
  }
});

/***/ }),

/***/ "./src/atoms/components/Input/InputV2PhoneNumber.vue":
/*!***********************************************************!*\
  !*** ./src/atoms/components/Input/InputV2PhoneNumber.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _InputV2PhoneNumber_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InputV2PhoneNumber.vue?vue&type=script&lang=js& */ "./src/atoms/components/Input/InputV2PhoneNumber.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns
;



/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _InputV2PhoneNumber_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
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

/***/ "./src/atoms/components/Input/InputV2PhoneNumber.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./src/atoms/components/Input/InputV2PhoneNumber.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_InputV2PhoneNumber_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./InputV2PhoneNumber.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/atoms/components/Input/InputV2PhoneNumber.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_InputV2PhoneNumber_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ })

}]);
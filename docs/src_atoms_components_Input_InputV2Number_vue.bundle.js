"use strict";
(self["webpackChunkvue_rt_style_kit_pages"] = self["webpackChunkvue_rt_style_kit_pages"] || []).push([["src_atoms_components_Input_InputV2Number_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/atoms/components/Input/InputV2Number.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/atoms/components/Input/InputV2Number.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
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
  name: "RtInputV2Number",
  components: components,
  props: {
    bright: {
      type: Boolean,
      "default": false
    },
    newVersion: {
      type: Number,
      "default": 2
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
      type: String | Number,
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
    type: {
      type: String,
      "default": 'text'
    },
    color: {
      type: String,
      "default": "purple"
    },
    minNumber: {
      type: Number,
      "default": null
    },
    maxNumber: {
      type: Number,
      "default": null
    },
    step: {
      type: Number,
      "default": 1
    },
    isInteger: {
      type: Boolean,
      "default": false
    }
  },
  data: function data() {
    return {
      localValue: this.value
    };
  },
  methods: {
    onBlur: function onBlur(e) {
      if (!isNaN(e)) {
        if (typeof this.minNumber == 'number' && e < this.minNumber) {
          this.$refs['input'].localValue = this.minNumber;
          this.$emit('input', this.minNumber);
        }

        if (typeof this.maxNumber == 'number' && e > this.maxNumber) {
          this.$refs['input'].localValue = this.maxNumber;
          this.$emit('input', this.maxNumber);
        }
      }
    },
    onPaste: function onPaste(e) {
      var _this = this;

      var paste = (e.clipboardData || window.clipboardData).getData('text') - 0;

      if (!isNaN(paste)) {
        if (typeof this.minNumber == 'number' && paste < this.minNumber) {
          this.$nextTick(function () {
            _this.$refs['input'].localValue = _this.minNumber;

            _this.$emit('input', _this.minNumber);
          });
        }

        if (typeof this.maxNumber == 'number' && paste > this.maxNumber) {
          this.$nextTick(function () {
            _this.$refs['input'].localValue = _this.maxNumber;

            _this.$emit('input', _this.maxNumber);
          });
        }
      }
    },
    onInput: function onInput(e) {
      if (isNaN(e)) {
        e = this.value;
        this.$refs['input'].value = e;
        this.$refs['input'].localValue = e;
      } else {
        if (typeof e == 'number') {
          if (typeof this.maxNumber == 'number' && e > this.maxNumber) {
            e = this.maxNumber;
          } else if (typeof this.minNumber == 'number' && e < this.minNumber) {
            e = this.minNumber;
          }

          this.$refs['input'].localValue = e;
          this.localValue = e;
        }
      }

      this.$emit('input', e);
    },
    addNumber: function addNumber() {
      var min = typeof this.minNumber == 'number' ? this.minNumber : 0;
      var step = 0;

      if (this.localValue == '') {
        step = min;

        if (min <= 0) {
          step += this.step;
        }

        if (typeof this.minNumber != 'number') {
          step = this.step;
        }
      } else {
        if (this.step % 1 == 0) {
          step = this.step - (this.localValue - 0 - min) % this.step;

          if (this.step >= 90) {
            step += Math.abs(min);
          }
        } else {
          step = this.step;
        }
      }

      this.changeInput(step);
    },
    subtractNumber: function subtractNumber() {
      var min = typeof this.minNumber == 'number' ? this.minNumber : 0;
      var step = 0;

      if (this.localValue == '') {
        step = min;

        if (typeof this.minNumber != 'number') {
          step += this.step;
        }
      } else {
        step = -((this.localValue - 0 - this.step - min) % this.step);

        if (step >= 0) {
          step = -this.step;
        }
      }

      this.changeInput(step);
    },
    changeInput: function changeInput(delta) {
      var value = this.$refs['input'].localValue - 0;

      if (value.length == 0) {
        value = 0;
      } else {
        value = value - 0;
      }

      this.onInput(value + delta);
    },
    changeLocalType: function changeLocalType() {
      this.localType = this.localType == 'password' ? 'text' : 'password';
    },
    renderIcons: function renderIcons(createElement) {
      var icons = [];
      var iconClass = 'input-number-icon';

      if (this.bright) {
        iconClass += ' input-number-icon-bright';
      }

      icons.push(createElement('rt-system-icons', {
        "class": iconClass,
        props: {
          name: "add small",
          bright: this.bright
        },
        on: {
          click: this.addNumber
        }
      }));
      icons.push(createElement('rt-system-icons', {
        "class": iconClass,
        props: {
          name: "remove small",
          bright: this.bright
        },
        on: {
          click: this.subtractNumber
        }
      }));
      return createElement('template', {
        slot: 'icon'
      }, icons);
    }
  },
  render: function render(createElement) {
    var componentStack = [];
    componentStack.push(this.renderIcons(createElement));

    var props = _objectSpread({}, this._props);

    return createElement(_InputV2Atom_vue__WEBPACK_IMPORTED_MODULE_0__["default"], {
      props: props,
      on: {
        input: this.onInput,
        blur: this.onBlur,
        paste: this.onPaste
      },
      ref: 'input'
    }, componentStack);
  }
});

/***/ }),

/***/ "./src/atoms/components/Input/InputV2Number.vue":
/*!******************************************************!*\
  !*** ./src/atoms/components/Input/InputV2Number.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _InputV2Number_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InputV2Number.vue?vue&type=script&lang=js& */ "./src/atoms/components/Input/InputV2Number.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns
;



/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _InputV2Number_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
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

/***/ "./src/atoms/components/Input/InputV2Number.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./src/atoms/components/Input/InputV2Number.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_InputV2Number_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./InputV2Number.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/atoms/components/Input/InputV2Number.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_InputV2Number_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ })

}]);
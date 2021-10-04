"use strict";
(self["webpackChunkvue_rt_style_kit_pages"] = self["webpackChunkvue_rt_style_kit_pages"] || []).push([["src_atoms_components_Input_InputV2_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/atoms/components/Input/InputV2.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/atoms/components/Input/InputV2.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _InputV2Atom_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InputV2Atom.vue */ "./src/atoms/components/Input/InputV2Atom.vue");
/* harmony import */ var _InputV2Password_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InputV2Password.vue */ "./src/atoms/components/Input/InputV2Password.vue");
/* harmony import */ var _InputV2Number_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./InputV2Number.vue */ "./src/atoms/components/Input/InputV2Number.vue");
/* harmony import */ var _InputV2PhoneNumber_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./InputV2PhoneNumber.vue */ "./src/atoms/components/Input/InputV2PhoneNumber.vue");
/* harmony import */ var _InputV2_styl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./InputV2.styl */ "./src/atoms/components/Input/InputV2.styl");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var components = {};
components[_InputV2Atom_vue__WEBPACK_IMPORTED_MODULE_0__["default"].name] = _InputV2Atom_vue__WEBPACK_IMPORTED_MODULE_0__["default"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "RtInputV2",
  components: components,
  props: {
    bright: {
      type: Boolean,
      "default": false
    },
    maxLength: {
      type: Number,
      "default": null
    },
    minNumber: {
      type: Number,
      "default": null
    },
    newVersion: {
      type: Number,
      "default": 1
    },
    maxNumber: {
      type: Number,
      "default": null
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
    showNumbersButtons: {
      type: Boolean,
      "default": false
    },
    label: {
      type: String,
      "default": ''
    },
    type: {
      type: String,
      "default": 'text'
    },
    inputType: {
      type: String,
      "default": 'text'
    },
    color: {
      type: String,
      "default": "purple"
    },
    isHidden: {
      type: Boolean,
      "default": false
    },
    approved: {
      type: Boolean,
      "default": false
    },
    inputButton: {
      type: Boolean,
      "default": false
    },
    inputButtonText: {
      type: String,
      "default": ''
    },
    scope: {
      type: String,
      "default": ''
    },
    step: {
      type: Number,
      "default": 1
    },
    isInteger: {
      type: Boolean,
      "default": false
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
  methods: {
    onInput: function onInput() {
      this.$emit.apply(this, ['input'].concat(Array.prototype.slice.call(arguments)));
      this.$emit('custom', arguments[0]);
    },
    onClear: function onClear() {
      this.$emit('clear');
    },
    onKeydown: function onKeydown() {
      this.$emit.apply(this, ['keydown'].concat(Array.prototype.slice.call(arguments)));
    },
    onKeyup: function onKeyup() {
      this.$emit.apply(this, ['keyup'].concat(Array.prototype.slice.call(arguments)));
    },
    onFocus: function onFocus() {
      this.$emit.apply(this, ['focus'].concat(Array.prototype.slice.call(arguments)));
    },
    onBlur: function onBlur() {
      this.$emit.apply(this, ['blur'].concat(Array.prototype.slice.call(arguments)));
    },
    onFilled: function onFilled(e) {
      this.$emit('filled', e);
    },
    onChange: function onChange() {
      this.$emit.apply(this, ['change'].concat(Array.prototype.slice.call(arguments)));
    },
    renderIcons: function renderIcons(createElement) {
      if (this.$slots.icon) {
        return createElement('template', {
          slot: 'icon'
        }, [this.$slots.icon]);
      }

      return null;
    },
    renderInformer: function renderInformer(createElement) {
      if (this.$slots.informer) {
        return createElement('template', {
          slot: 'informer'
        }, [this.$slots.informer]);
      }

      return null;
    },
    bindEvents: function bindEvents() {
      var _this = this;

      if (this["_events"]) {
        Object.keys(this["_events"]).map(function (eventName) {
          _this["_events"][eventName].forEach(function (fn) {
            _this.$refs.input.addEventListener(eventName, fn);
          });
        });
      }
    },
    unbindEvents: function unbindEvents() {
      var _this2 = this;

      if (this["_events"]) {
        Object.keys(this["_events"]).map(function (eventName) {
          _this2["_events"][eventName].forEach(function (fn) {
            if (_this2.$refs.input && typeof _this2.$refs.input.removeEventListener == 'function') {
              _this2.$refs.input.removeEventListener(eventName, fn);
            }
          });
        });
      }
    }
  },
  mounted: function mounted() {
    this.bindEvents();
  },
  beforeDestroy: function beforeDestroy() {
    this.unbindEvents();
  },
  render: function render(createElement) {
    var componentStack = [];
    componentStack.push(this.renderIcons(createElement));
    componentStack.push(this.renderInformer(createElement));

    var props = _objectSpread({}, this._props);

    if (this.inputType === "number") {
      return createElement(_InputV2Number_vue__WEBPACK_IMPORTED_MODULE_2__["default"], {
        props: props,
        ref: 'input',
        on: {
          input: this.onInput,
          clear: this.onClear,
          focus: this.onFocus,
          blur: this.onBlur
        }
      }, componentStack);
    }

    if (typeof props.value == 'number') {
      props.value = props.value.toString();
    }

    if (this.inputType == 'password') {
      return createElement(_InputV2Password_vue__WEBPACK_IMPORTED_MODULE_1__["default"], {
        props: props,
        ref: 'input',
        on: {
          input: this.onInput,
          clear: this.onClear,
          focus: this.onFocus,
          blur: this.onBlur,
          change: this.onChange
        }
      }, componentStack);
    }

    if (this.inputType == 'tel') {
      return createElement(_InputV2PhoneNumber_vue__WEBPACK_IMPORTED_MODULE_3__["default"], {
        props: props,
        ref: 'input',
        on: {
          input: this.onInput,
          clear: this.onClear,
          focus: this.onFocus,
          blur: this.onBlur,
          filled: this.onFilled,
          keydown: this.onKeydown,
          keyup: this.onKeyup,
          change: this.onChange
        }
      }, componentStack);
    }

    return createElement(_InputV2Atom_vue__WEBPACK_IMPORTED_MODULE_0__["default"], {
      props: this._props,
      ref: 'input',
      scopedSlots: {
        icon: function icon() {
          componentStack;
        },
        informer: function informer() {
          componentStack;
        }
      },
      on: {
        input: this.onInput,
        clear: this.onClear,
        keydown: this.onKeydown,
        keyup: this.onKeyup,
        focus: this.onFocus,
        blur: this.onBlur,
        change: this.onChange
      }
    }, componentStack);
  }
});

/***/ }),

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

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/atoms/components/Input/InputV2Password.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/atoms/components/Input/InputV2Password.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
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
  name: "RtInputV2Password",
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
    type: {
      type: String,
      "default": 'text'
    },
    color: {
      type: String,
      "default": "purple"
    }
  },
  data: function data() {
    return {
      localType: 'password'
    };
  },
  methods: {
    onInput: function onInput(e) {
      this.$emit('input', e);
    },
    changeLocalType: function changeLocalType() {
      this.localType = this.localType == 'password' ? 'text' : 'password';
    },
    renderIcons: function renderIcons(createElement) {
      var icon = '';

      if (this.localType == 'password') {
        icon = createElement('rt-system-icons', {
          props: {
            name: "password hide",
            bright: this.bright
          },
          on: {
            click: this.changeLocalType
          }
        });
      } else {
        icon = createElement('rt-system-icons', {
          props: {
            name: "password show",
            bright: this.bright
          },
          on: {
            click: this.changeLocalType
          }
        });
      }

      return createElement('template', {
        slot: 'icon'
      }, [icon]);
    }
  },
  render: function render(createElement) {
    var componentStack = [];
    componentStack.push(this.renderIcons(createElement));

    var props = _objectSpread({}, this._props);

    props.type = this.localType;
    return createElement(_InputV2Atom_vue__WEBPACK_IMPORTED_MODULE_0__["default"], {
      props: props,
      on: {
        input: this.onInput
      }
    }, componentStack);
  }
});

/***/ }),

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

/***/ "./src/atoms/components/Input/InputV2.vue":
/*!************************************************!*\
  !*** ./src/atoms/components/Input/InputV2.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _InputV2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InputV2.vue?vue&type=script&lang=js& */ "./src/atoms/components/Input/InputV2.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns
;



/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _InputV2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
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

/***/ "./src/atoms/components/Input/InputV2Password.vue":
/*!********************************************************!*\
  !*** ./src/atoms/components/Input/InputV2Password.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _InputV2Password_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InputV2Password.vue?vue&type=script&lang=js& */ "./src/atoms/components/Input/InputV2Password.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns
;



/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _InputV2Password_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
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

/***/ "./src/atoms/components/Input/InputV2.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./src/atoms/components/Input/InputV2.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_InputV2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./InputV2.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/atoms/components/Input/InputV2.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_InputV2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

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

/***/ }),

/***/ "./src/atoms/components/Input/InputV2Password.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./src/atoms/components/Input/InputV2Password.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_InputV2Password_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./InputV2Password.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/atoms/components/Input/InputV2Password.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_InputV2Password_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

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
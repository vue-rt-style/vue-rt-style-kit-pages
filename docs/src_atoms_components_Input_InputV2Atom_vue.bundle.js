"use strict";
(self["webpackChunkvue_rt_style_kit_pages"] = self["webpackChunkvue_rt_style_kit_pages"] || []).push([["src_atoms_components_Input_InputV2Atom_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/atoms/components/Input/InputV2Atom.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/atoms/components/Input/InputV2Atom.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _InputV2Icon_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InputV2Icon.vue */ "./src/atoms/components/Input/InputV2Icon.vue");

var components = {};
components[_InputV2Icon_vue__WEBPACK_IMPORTED_MODULE_0__["default"].name] = _InputV2Icon_vue__WEBPACK_IMPORTED_MODULE_0__["default"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "RtInputV2Atom",
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
    isInteger: {
      type: Boolean,
      "default": false
    },
    step: {
      type: Number,
      "default": 1
    },
    needVerification: {
      type: Boolean,
      "default": false
    },
    verified: {
      type: Boolean,
      "default": null
    },
    inputType: {
      type: String,
      "default": 'text'
    }
  },
  data: function data() {
    var _this$value;

    return {
      isNew: false,
      isFocus: false,
      disabledLocal: this.disabled,
      index: null,
      localLabel: this.label,
      localValue: this.value,
      hasInputText: ((_this$value = this.value) === null || _this$value === void 0 ? void 0 : _this$value.length) > 0,
      hintPosition: "right",
      showInformer: false,
      localVerified: +this.verified || 2
    };
  },
  watch: {
    value: function value(newValue, oldValue) {
      if (newValue != oldValue && newValue != this.localValue) {
        this.localValue = newValue;

        if (newValue != '') {
          this.$emit('phone', newValue);
        }
      }
    },
    disabled: function disabled(newVal) {
      this.disabledLocal = newVal;
    },
    verified: function verified(newVal) {
      this.localVerified = +newVal;
    }
  },
  computed: {
    inputClass: function inputClass() {
      var inputClassName = ["rt-input-v2"];

      if (this.bright) {
        inputClassName.push("rt-input-v2-bright");
      }

      if (this.hasError) {
        inputClassName.push('rt-input-v2--error');
      }

      if (this.disabledLocal) {
        inputClassName.push('rt-input-v2--disabled');
      }

      return inputClassName.join(' ');
    }
  },
  mounted: function mounted() {},
  updated: function updated() {},
  beforeDestroy: function beforeDestroy() {},
  methods: {
    changeValue: function changeValue(e) {
      var input = this.$refs.input;

      if (this.type === 'number') {
        var _e$inputType;

        if (!this.isInteger && input.value.search(/[,.]$/) >= 0) {
          this.localValue = input.value;
        } else {
          // if ('valueAsNumber' in input) {
          //   this.localValue = input.valueAsNumber
          // } else {
          //   this.localValue = input.value - 0
          // }
          this.localValue = input.value;

          if (this.isInteger) {
            this.localValue = parseInt(this.localValue);
          }
        }

        if (e && ((_e$inputType = e.inputType) === null || _e$inputType === void 0 ? void 0 : _e$inputType.search(/delete/gi)) >= 0 && isNaN(this.localValue) && input.value.length < 2) {
          this.localValue = '';
        }
      } else {
        this.localValue = input.value + '';
      }

      this.$emit('input', this.localValue);

      if (this.type == 'tel') {
        this.$emit('phone', this.localValue);
      }
    },
    clearInput: function clearInput() {
      this.$refs.input.value = '';
      this.changeValue();
      this.$emit('clear');
    },
    onBlur: function onBlur(e) {
      this.$emit('blur', this.localValue, e);
    },
    onPaste: function onPaste(e) {
      this.$emit('paste', e);
    },
    onKeydown: function onKeydown(e) {
      this.$emit('keydown', e, this.localValue);
    },
    onKeyup: function onKeyup(e) {
      this.$emit('keyup', e, this.localValue);
    },
    onFocus: function onFocus(e) {
      this.$emit('focus', e, this.localValue);
    },
    onInput: function onInput(e) {
      this.$emit('input', e);
      this.$emit('phone', e);
    },
    onChange: function onChange(e) {
      this.$emit('change', e, this.localValue);
    },
    toggleInformer: function toggleInformer($event) {
      $event.preventDefault();
      $event.stopPropagation();
      this.showInformer = !this.showInformer;
    },
    onSelect: function onSelect(e) {
      if (this.$refs.input.selectionStart != this.$refs.input.selectionEnd) this.$emit('select', e);
    }
  },
  render: function render() {
    var _this = this;

    var h = arguments[0];

    var icons = function icons() {
      var _this$$slots$icon;

      if (_this.$slots.informer) {
        return h("template", {
          "slot": "icon"
        }, [h("rt-popover", {
          "attrs": {
            "vertical": "top"
          }
        }, [h("template", {
          "slot": "content"
        }, [h("p", {
          "class": "rt-font-label color-main07"
        }, [_this.$slots.informer])])])]);
      }

      if (_this.needVerification && _this.localValue.length == 18) {
        if (_this.localVerified === 1) {
          return h("template", {
            "slot": "icon"
          }, [h("svg", {
            "attrs": {
              "width": "24",
              "height": "24",
              "viewBox": "0 0 24 24",
              "fill": "none",
              "xmlns": "http://www.w3.org/2000/svg"
            },
            "class": "rt-input-v2-icon__item--verified"
          }, [h("circle", {
            "attrs": {
              "opacity": "0.8",
              "cx": "12",
              "cy": "12",
              "r": "10",
              "fill": "#5BCF6A"
            }
          }), h("path", {
            "attrs": {
              "fill-rule": "evenodd",
              "clip-rule": "evenodd",
              "d": "M17.5612 9.1768L11.0613 15.5704C10.7481 15.8784 10.2452 15.8763 9.93457 15.5657L6.93457 12.5657L8.06594 11.4343L10.5049 13.8733L16.4392 8.03613L17.5612 9.1768Z",
              "fill": "white"
            }
          })])]);
        } else if (_this.localVerified === 0) {
          return h("template", {
            "slot": "icon"
          }, [h("svg", {
            "attrs": {
              "width": "24",
              "height": "24",
              "viewBox": "0 0 24 24",
              "fill": "none",
              "xmlns": "http://www.w3.org/2000/svg"
            },
            "class": "rt-input-v2-icon__item--not-verified"
          }, [h("circle", {
            "attrs": {
              "opacity": "0.7",
              "cx": "12",
              "cy": "12",
              "r": "10",
              "fill": "#EB3728"
            }
          }), h("path", {
            "attrs": {
              "fill-rule": "evenodd",
              "clip-rule": "evenodd",
              "d": "M10.939 11.9999L7.46875 15.4701L8.53069 16.5295L11.9997 13.0606L15.4688 16.5297L16.5307 15.4703L13.0604 11.9999L16.5307 8.5296L15.4688 7.47021L11.9997 10.9392L8.53069 7.47023L7.46875 8.5296L10.939 11.9999Z",
              "fill": "white"
            }
          })])]);
        }

        if (_this.$parent.filled) {
          return h("template", {
            "slot": "icon"
          }, [h("svg", {
            "attrs": {
              "width": "24",
              "height": "24",
              "viewBox": "0 0 24 24",
              "fill": "none",
              "xmlns": "http://www.w3.org/2000/svg"
            },
            "class": "rt-sys-icon rt-input-v2-icon__item--verification-in-progress"
          }, [h("circle", {
            "attrs": {
              "r": "10",
              "cx": "12",
              "cy": "12",
              "fill": "none",
              "stroke": "#101828"
            }
          })])]);
        } // if(this.localValue && !this.$slots.icon) {
        //   return <template slot="icon">
        //     <rt-system-icons name="close large"/>
        //   </template>
        // }

      }

      return (_this$$slots$icon = _this.$slots.icon) === null || _this$$slots$icon === void 0 ? void 0 : _this$$slots$icon.map(function (icon) {
        return h("template", {
          "slot": "icon"
        }, [icon]);
      });
    };

    var renderError = function renderError() {
      var _this$errorMessage;

      if (((_this$errorMessage = _this.errorMessage) === null || _this$errorMessage === void 0 ? void 0 : _this$errorMessage.length) > 0) {
        return h("span", {
          "class": "rt-input-v2-error rt-font-label"
        }, [_this.errorMessage]);
      }

      return null;
    };

    var renderLabel = function renderLabel() {
      var _this$label;

      if (((_this$label = _this.label) === null || _this$label === void 0 ? void 0 : _this$label.length) > 0) {
        return h("span", {
          "class": "rt-input-v2-label rt-font-label"
        }, [_this.label]);
      }

      return null;
    };

    var inputComponent = function inputComponent() {
      if (_this.type == 'number') {
        return h("input", {
          "class": "rt-input-v2__input",
          "domProps": {
            "value": _this.localValue
          },
          "on": {
            "input": _this.changeValue,
            "focus": _this.onFocus,
            "blur": _this.onBlur,
            "paste": _this.onPaste,
            "keyup": _this.onKeyup,
            "change": _this.onChange
          },
          "attrs": {
            "type": _this.type,
            "min": _this.minNumber,
            "max": _this.maxNumber,
            "step": _this.step,
            "placeholder": _this.placeholder,
            "disabled": _this.disabledLocal
          },
          "ref": "input"
        });
      }

      if (_this.type == 'tel') {
        return h("input", {
          "class": "rt-input-v2__input",
          "domProps": {
            "value": _this.localValue
          },
          "attrs": {
            "type": _this.type,
            "placeholder": _this.placeholder,
            "disabled": _this.disabledLocal
          },
          "ref": "input",
          "on": {
            "blur": _this.onBlur,
            "paste": _this.onPaste,
            "input": _this.changeValue,
            "keydown": _this.onKeydown,
            "keyup": _this.onKeyup,
            "focus": _this.onFocus,
            "change": _this.onChange,
            "select": _this.onSelect
          }
        });
      }

      return h("input", {
        "class": "rt-input-v2__input",
        "domProps": {
          "value": _this.localValue
        },
        "on": {
          "input": _this.changeValue,
          "focus": _this.onFocus,
          "blur": _this.onBlur,
          "paste": _this.onPaste,
          "keydown": _this.onKeydown,
          "keyup": _this.onKeyup,
          "change": _this.onChange
        },
        "attrs": {
          "type": _this.type,
          "placeholder": _this.placeholder,
          "disabled": _this.disabledLocal
        },
        "ref": "input"
      });
    };

    return h("div", {
      "class": this.inputClass
    }, [h("label", {
      "class": "rt-input-v2-wrapper"
    }, [inputComponent(), h("span", {
      "class": "rt-input-v2-placeholder"
    }, [this.placeholder || this.label]), h("span", {
      "class": "rt-input-v2__line"
    }), h("rt-input-v2-icon", {
      "on": {
        "clearInput": this.clearInput
      },
      "attrs": {
        "color": this.isWhite ? 'white' : 'main'
      }
    }, [icons()])]), renderError(), renderLabel()]);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/atoms/components/Input/InputV2Icon.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/atoms/components/Input/InputV2Icon.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _variables_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../variables.json */ "./src/atoms/variables.json");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "RtInputV2Icon",
  methods: {
    bindEvents: function bindEvents() {
      var _arguments = arguments,
          _this = this;

      if (this["_events"]) {
        Object.keys(this["_events"]).map(function (eventName) {
          var _this$$refs, _this$$refs$icon;

          (_this$$refs = _this.$refs) === null || _this$$refs === void 0 ? void 0 : (_this$$refs$icon = _this$$refs.icon) === null || _this$$refs$icon === void 0 ? void 0 : _this$$refs$icon.addEventListener(eventName, function () {
            if (_this["_events"] && _this["_events"][eventName] && _this["_events"][eventName][0] && typeof _this["_events"][eventName][0] === 'function') {
              _this["_events"][eventName][0](_arguments[0]);
            }
          });
        });
      }
    },
    clearInput: function clearInput() {
      this.$emit('clearInput');
    }
  },
  mounted: function mounted() {
    this.bindEvents(); // if(this.$parent.localValue || this.$parent.value) {
    //   this.$el.addEventListener('click', ()=>{
    //     this.$emit('click')
    //   })
    // }
  },
  render: function render() {
    var _this$$slots$icon,
        _this2 = this;

    var h = arguments[0];

    if (((_this$$slots$icon = this.$slots.icon) === null || _this$$slots$icon === void 0 ? void 0 : _this$$slots$icon.length) > 0) {
      return h("span", {
        "class": "rt-input-v2-icon"
      }, [this.$slots.icon.map(function (i) {
        return h("span", {
          "class": "rt-input-v2-icon-item"
        }, [i]);
      })]);
    }

    var icon = function icon() {
      if (_this2.$parent.localValue && !_this2.$parent.disabled) {
        return h("span", {
          "class": "rt-input-v2-icon-item",
          "on": {
            "click": _this2.clearInput
          }
        }, [h("rt-system-icons", {
          "attrs": {
            "name": "close large"
          }
        })]);
      }

      return null;
    };

    return h("span", {
      "class": "rt-input-v2-icon",
      "ref": "icon"
    }, [icon()]);
  }
});

/***/ }),

/***/ "./src/atoms/components/Input/InputV2Atom.vue":
/*!****************************************************!*\
  !*** ./src/atoms/components/Input/InputV2Atom.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _InputV2Atom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InputV2Atom.vue?vue&type=script&lang=js& */ "./src/atoms/components/Input/InputV2Atom.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns
;



/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _InputV2Atom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
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

/***/ "./src/atoms/components/Input/InputV2Icon.vue":
/*!****************************************************!*\
  !*** ./src/atoms/components/Input/InputV2Icon.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _InputV2Icon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InputV2Icon.vue?vue&type=script&lang=js& */ "./src/atoms/components/Input/InputV2Icon.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns
;



/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _InputV2Icon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
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

/***/ "./src/atoms/components/Input/InputV2Atom.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./src/atoms/components/Input/InputV2Atom.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_InputV2Atom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./InputV2Atom.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/atoms/components/Input/InputV2Atom.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_InputV2Atom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/atoms/components/Input/InputV2Icon.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./src/atoms/components/Input/InputV2Icon.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_InputV2Icon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./InputV2Icon.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/atoms/components/Input/InputV2Icon.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_InputV2Icon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ })

}]);
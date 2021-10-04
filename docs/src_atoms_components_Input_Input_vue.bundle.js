"use strict";
(self["webpackChunkvue_rt_style_kit_pages"] = self["webpackChunkvue_rt_style_kit_pages"] || []).push([["src_atoms_components_Input_Input_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/atoms/components/Input/Input.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/atoms/components/Input/Input.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _variables_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../variables.json */ "./src/atoms/variables.json");
/* harmony import */ var _InputV2_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InputV2.vue */ "./src/atoms/components/Input/InputV2.vue");
/* harmony import */ var _Input_styl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Input.styl */ "./src/atoms/components/Input/Input.styl");
/* harmony import */ var _TextField_styl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TextField.styl */ "./src/atoms/components/Input/TextField.styl");




var components = {};
components[_InputV2_vue__WEBPACK_IMPORTED_MODULE_1__["default"].name] = _InputV2_vue__WEBPACK_IMPORTED_MODULE_1__["default"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "RtInput",
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
    version: {
      type: Number,
      "default": 1
    },
    step: {
      type: Number,
      "default": 1
    },
    minNumber: {
      type: Number,
      "default": null
    },
    maxNumber: {
      type: Number,
      "default": null
    },
    insertLang: {
      type: String,
      // [ru, en]
      "default": ''
    },
    insertType: {
      type: String,
      //[number, string, password, tel]
      "default": ''
    },
    disabled: {
      type: Boolean,
      "default": false
    },
    autocomplete: {
      type: String,
      "default": 'disable,false,off,none'
    },
    placeholder: {
      type: String,
      "default": ''
    },
    hasError: {
      type: Boolean,
      "default": false
    },
    errorMessageFunc: {
      type: Function,
      "default": null
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
    isB2bInput: {
      type: Boolean,
      "default": false
    },
    outlined: {
      type: Boolean,
      "default": false
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
  data: function data() {
    var _this$value, _this$value2;

    return {
      isFocus: false,
      disabledLocal: null,
      index: null,
      localLabel: this.label,
      localValue: ((_this$value = this.value) === null || _this$value === void 0 ? void 0 : _this$value.length) > 0 ? this.value : "",
      hasInputText: ((_this$value2 = this.value) === null || _this$value2 === void 0 ? void 0 : _this$value2.length) > 0,
      hintPosition: "right",
      passwordVisibilityLocal: false
    };
  },
  computed: {
    fieldName: function fieldName() {
      return this.name || "input-field__" + this._uid;
    },
    isInvalid: function isInvalid() {
      if (this.hasError) {
        return this.hasError || this.errors && this.errors.has(this.fieldName);
      }
    },
    inputClass: function inputClass() {
      var className = ["input-wrapper"];

      if (this.disabledLocal) {
        className.push("input-disabled");
      }

      if (this.outlined) {
        className.push("input-wrapper--outlined");
      }

      if (this.isB2bInput) {
        className.push("rtb-input color-block--white");
      }

      if (this.isHidden) {
        className.push("rtb-input--hidden");
      }

      if (this.approved) {
        className.push("rtb-input--approved");
      }

      return className;
    },
    inputContainerClass: function inputContainerClass() {
      var inputClass = ["input", "text-field"];

      if (this.isFocus) {
        inputClass.push("input--focus");
      }

      if (this.isInvalid) {
        inputClass.push("text-field--error");
      }

      if (this.showNumbersButtons && this.insertType && this.insertType === "number") {
        inputClass.push("input--with-button");
      }

      if (this.isWhite) {
        inputClass.push("rt-input--white");
      }

      if (this.type && this.type === "password") {
        inputClass.push("rt-input--password");
      }

      if (this.color === "orange") {
        inputClass.push("text-field--orange");
      } else {
        inputClass.push("text-field--purple");
      }

      return inputClass.join(' ');
    },
    inputElementClass: function inputElementClass() {
      var classList = ['input-element'];

      if (this.hasInputText) {
        classList.push('input-element--n-emp');
      }

      return classList.join(' ');
    }
  },
  watch: {
    value: function value(val) {
      this.localValue = this.value;
      this.setValue();
    },
    localValue: function localValue(val) {
      this.$emit("input", val);
    },
    label: function label() {
      this.localLabel = this.label;
    },
    disabled: function disabled() {
      this.disabledLocal = this.disabled;
      this.setDisabled();
    }
  },
  mounted: function mounted() {
    this.setNewRender();
    this.disabledLocal = this.disabled;
    this.setValue();
    this.setDisabled();
    this.bindEvents();

    if (this.$el && this.$el.getBoundingClientRect) {
      if (this.$el.getBoundingClientRect().left > window.innerWidth / 2) {
        this.hintPosition = "left";
      } else {
        this.hintPosition = "right";
      }
    }
  },
  updated: function updated() {
    this.unbindEvents();
    this.bindEvents();
  },
  beforeDestroy: function beforeDestroy() {
    this.unbindEvents();
  },
  methods: {
    setNewRender: function setNewRender() {// if(this.newRender){
      //   this.isNew = true
      // }
      // else {
      //   if (document.cookie) {
      //     if (document.cookie.split('; ').find(i => i.split('=')[0] == 'new_design')) {
      //       this.isNew = true;
      //     }
      //   }
      // }
    },
    focus: function focus() {
      this.isFocus = true;
    },
    blur: function blur() {
      this.isFocus = false;
    },
    bindEvents: function bindEvents() {
      var _this = this;

      if (this["_events"]) {
        Object.keys(this["_events"]).map(function (eventName) {
          _this["_events"][eventName].forEach(function (fn) {
            if (_this.$refs.component) {
              Object.keys(_this.$slots).forEach(function (slotKey) {
                _this.$refs.component.$slots = _this.$slots[slotKey];
              });

              if (!_this.$refs.component['_events'][eventName]) {
                _this.$refs.component['_events'][eventName] = [];
              }

              if (_this.$refs.component['_events'][eventName].indexOf(fn) < 0) {
                _this.$refs.component['_events'][eventName].push(fn);
              }
            } else {
              if (_this.$refs.input) {
                if (eventName != 'input' && window[_variables_json__WEBPACK_IMPORTED_MODULE_0__.globalSettingsKey].segment != 'b2c') {
                  // for work with v-model
                  _this.$refs.input.addEventListener(eventName, fn);
                } else if (eventName != 'input') {
                  var that = _this;

                  _this.$refs.input.addEventListener(eventName, function () {
                    if (that["_events"] && that["_events"][eventName] && that["_events"][eventName][0] && typeof that["_events"][eventName][0] === 'function') {
                      that["_events"][eventName][0](arguments[0]);
                    }
                  });
                }
              }
            }
          });
        });
      }
    },
    unbindEvents: function unbindEvents() {
      var _this2 = this;

      if (this["_events"]) {
        Object.keys(this["_events"]).map(function (eventName) {
          if (_this2.$refs.component) {
            _this2["_events"][eventName].forEach(function (fn) {
              var index = _this2.$refs.component['_events'][eventName].indexOf(fn);

              if (index >= 0) {
                _this2.$refs.component['_events'][eventName].splice(index, 1);
              }
            });
          } else {// console.info(this['_events'])
            // if(this.$refs.input) {
            //   this.$refs.input.removeEventListener(
            //       eventName,
            //       this["_events"][eventName]
            //   );
            // }
          }
        });
      }
    },
    addNumber: function addNumber() {
      this.localValue = typeof parseInt(this.localValue) === "number" ? this.localValue - 0 + 1 : 1;

      if (this.maxNumber !== null && this.localValue > this.maxNumber) {
        this.localValue = this.maxNumber;
        event.target.value = this.maxNumber;
      }

      this.updateInputValue();
      this.setValueLength();
      this.$refs.input.focus();
    },
    subtractNumber: function subtractNumber() {
      this.localValue = typeof parseInt(this.localValue) === "number" ? this.localValue - 1 : 0;

      if (this.minNumber !== null && this.localValue < this.minNumber) {
        this.localValue = this.minNumber; // event.target.value = this.minNumber;
      }

      this.updateInputValue();
      this.setValueLength();
      this.$refs.input.focus();
    },
    updateInputValue: function updateInputValue() {
      if (this.$refs.input) {
        this.$refs.input.value = this.localValue;
      }
    },
    setValue: function setValue() {
      if (this.$refs.input) {
        this.$refs.input.value = this.localValue;
      }

      this.setValueLength();
    },
    setDisabled: function setDisabled() {
      if (this.$refs.input) {
        this.$refs.input.disabled = Boolean(this.disabledLocal);
      }
    },
    setValueLength: function setValueLength() {
      var _this$localValue, _this$localValue$toSt;

      this.hasInputText = ((_this$localValue = this.localValue) === null || _this$localValue === void 0 ? void 0 : (_this$localValue$toSt = _this$localValue.toString()) === null || _this$localValue$toSt === void 0 ? void 0 : _this$localValue$toSt.length) > 0;
    },
    inputHandler: function inputHandler($event) {
      var _this3 = this;

      var temporaryValue = this.$refs.input.value;

      if (this.insertType === 'number' && this.isInteger) {
        if (!isNaN(parseInt(temporaryValue)) && !this.isSpecialCharacters($event.data)) {
          this.localValue = temporaryValue;
        } else {
          this.$refs.input.value = temporaryValue;
          setTimeout(function () {
            _this3.$refs.input.blur();

            _this3.$refs.input.focus();

            _this3.$refs.input.selectionStart = _this3.$refs.input.value.length;
          }, 1);
        }
      } else {
        this.localValue = temporaryValue;
      }

      this.setValueLength();
    },
    clearInput: function clearInput() {
      this.localValue = "";
      this.setValue();
      this.$emit('clearField');
    },
    getChar: function getChar(event) {
      if (event.which == null) {
        if (event.keyCode < 32) return null;
        return String.fromCharCode(event.keyCode);
      }

      if (event.which < 32) return null;
      return String.fromCharCode(event.which);
    },
    isSpecialCharacters: function isSpecialCharacters(chr) {
      return chr.match(/[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/) !== null;
    },
    keyPress: function keyPress(event) {
      var chr = this.getChar(event);

      if (this.maxLength && this.maxLength <= event.target.value.length) {
        event.preventDefault();
        event.stopPropagation();
        return null;
      }

      if (this.insertType) {
        switch (this.insertType) {
          case "number":
            if (!chr.match(/[0-9]/)) {
              event.preventDefault();
              event.stopPropagation();
              return null;
            }

            break;

          case "string":
            if (chr.match(/[0-9]/)) {
              event.preventDefault();
              event.stopPropagation();
              return null;
            }

            break;

          case "tel":
            this.enablePhoneMask();
            break;
        }
      }

      if (this.insertLang) {
        if (isNaN(parseInt(chr)) && !this.isSpecialCharacters(chr)) {
          switch (this.insertLang) {
            case "en":
              if (!chr.match(/[a-z]/i)) {
                event.preventDefault();
                event.stopPropagation();
                return null;
              }

              break;

            case "ru":
              if (!chr.match(/[а-я]/i)) {
                event.preventDefault();
                event.stopPropagation();
                return null;
              }

              break;
          }
        }
      }
    },
    keyUp: function keyUp(event) {
      if (this.insertType) {
        switch (this.insertType) {
          case "number":
            var value = event.target.value - 0;

            if (this.maxNumber !== null && value > this.maxNumber) {
              this.localValue = this.maxNumber + "";
              event.target.value = this.maxNumber + "";
            }

            if (this.minNumber !== null && value < this.minNumber) {
              this.localValue = this.minNumber + "";
              event.target.value = this.minNumber + "";
            }

            break;
        }
      }
    },
    changeFromParent: function changeFromParent(props) {
      if (props && this.name in props) {
        var propsForItem = props[this.name];

        if ("0" in propsForItem) {
          this.$refs.input.value = propsForItem[0];
          this.inputHandler();
        }
      } else {
        if (this.insertType === "number") {
          if (this.minNumber) {
            this.$refs.input.value = this.minNumber;
          } else {
            this.$refs.input.value = 0;
          }
        }
      }
    },
    togglePasswordVisibility: function togglePasswordVisibility() {
      var inputElement = this.$el.getElementsByTagName("input")[0];

      if (inputElement.getAttribute("type") === "password") {
        inputElement.setAttribute("type", "text");
      } else if (inputElement.getAttribute("type") === "text") {
        inputElement.setAttribute("type", "password");
      }

      this.passwordVisibilityLocal = !this.passwordVisibilityLocal;
    },
    mask: function mask(e) {
      var _this4 = this;

      if (e.type === "focus") {
        setTimeout(function () {
          var matrix = "+7 (___) ___ ____",
              i = 0,
              def = matrix.replace(/\D/g, ""),
              val = _this4.$refs.input.value.replace(/\D/g, "");

          if (def.length >= val.length) val = def;
          _this4.$refs.input.value = matrix.replace(/./g, function (a) {
            return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a;
          });
        }, 500);
      } else {
        var matrix = "+7 (___) ___ ____",
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = this.$refs.input.value.replace(/\D/g, "");
        if (def.length >= val.length) val = def;
        this.$refs.input.value = matrix.replace(/./g, function (a) {
          return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a;
        });
      }

      if (e.type === "blur") {
        if (this.$refs.input.value.length == 2) {
          this.$refs.input.value = "";
        }
      } else {
        this.setCursorPosition(this.$refs.input.value.length, this.$refs.input);
      }

      this.localValue = this.$refs.input.value;
      this.setValueLength();
    },
    setCursorPosition: function setCursorPosition(pos, elem) {
      elem.focus();
      if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);else if (elem.createTextRange) {
        var range = elem.createTextRange();
        range.collapse(true);
        range.moveEnd("character", pos);
        range.moveStart("character", pos);
        range.select();
      }
    },
    enablePhoneMask: function enablePhoneMask() {
      this.$refs.input.addEventListener("input", this.mask, false);
      this.$refs.input.addEventListener("blur", this.mask, false);
    },
    getCode: function getCode() {
      this.$root.$emit('getCode', this.localValue);
    },
    focusInput: function focusInput() {
      this.$refs.input.focus();
    }
  },
  render: function render() {
    var _this5 = this;

    var h = arguments[0];

    if (this.version == 2) {
      var renderSlots = Object.keys(this.$slots).map(function (key) {
        return _this5.$slots[key].map(function (slot) {
          return h("template", {
            "slot": key
          }, [slot]);
        });
      });
      return h("rt-input-v2", {
        "ref": "component",
        "attrs": {
          "bright": this.bright,
          "inputType": this.inputType,
          "maxLength": this.maxLength,
          "minNumber": this.minNumber,
          "maxNumber": this.maxNumber,
          "insertLang": this.insertLang,
          "insertType": this.insertType,
          "disabled": this.disabled,
          "autocomplete": this.autocomplete,
          "placeholder": this.placeholder,
          "hasError": this.hasError,
          "errorMessageFunc": this.errorMessageFunc,
          "errorMessage": this.errorMessage,
          "value": this.value,
          "isWhite": this.isWhite,
          "name": this.name,
          "showNumbersButtons": this.showNumbersButtons,
          "label": this.label,
          "type": this.type,
          "step": this.step,
          "isB2bInput": this.isB2bInput,
          "outlined": this.outlined,
          "color": this.color,
          "isHidden": this.isHidden,
          "approved": this.approved,
          "inputButton": this.inputButton,
          "inputButtonText": this.inputButtonText,
          "scope": this.scope,
          "isInteger": this.isInteger,
          "needVerification": this.needVerification,
          "verified": this.verified
        }
      }, [renderSlots]);
    }

    var placeholder = function () {
      if (_this5.placeholder) {
        var placeholderClassNames = "floating-placeholder";

        if (_this5.hasInputText) {
          placeholderClassNames += " floating-placeholder--go-top";
        }

        return h("div", {
          "class": placeholderClassNames
        }, [_this5.placeholder]);
      }

      return null;
    }();

    var clearButton = function () {
      var buttonClass = function () {
        var clearButtonClassNames = "input-clear";

        if (_this5.isB2bInput) {
          clearButtonClassNames += " rtb-input-clear";
        }

        return clearButtonClassNames;
      }();

      if (!_this5.showNumbersButtons && !_this5.disabledLocal && _this5.hasInputText && _this5.type != "password") {
        return h("div", {
          "class": buttonClass,
          "on": {
            "click": _this5.clearInput
          }
        }, [h("svg", {
          "class": "input-clear__icon",
          "attrs": {
            "viewBox": "0 0 14 14",
            "width": "12",
            "height": "12",
            "xmlns": "http://www.w3.org/2000/svg"
          }
        }, [h("path", {
          "attrs": {
            "d": "M14 1.4L12.6 0 7 5.6 1.4 0 0 1.4 5.6 7 0 12.6 1.4 14 7 8.4l5.6 5.6 1.4-1.4L8.4 7z",
            "fill-rule": "evenodd"
          }
        })])]);
      }

      return null;
    }();

    var passwordIcon = function () {
      if (_this5.type === "password") {
        if (!_this5.passwordVisibilityLocal) {
          return h("div", {
            "class": "password-icon password-hidden",
            "on": {
              "click": _this5.togglePasswordVisibility
            }
          }, [h("svg", {
            "attrs": {
              "width": "20",
              "height": "10",
              "xmlns": "http://www.w3.org/2000/svg"
            },
            "class": "password-icon__icon"
          }, [h("g", {
            "attrs": {
              "stroke": "#575D68",
              "stroke-width": "2",
              "fill": "none",
              "fill-rule": "evenodd",
              "stroke-linecap": "round"
            }
          }, [h("path", {
            "attrs": {
              "d": "M3.333 1C4.838 3.687 7.06 5.031 10 5.031S15.162 3.687 16.667 1M10 7.667v1.25M14.396 6.833l.572 1.031M5.801 6.833L5.23 7.864M17.5 4.333l.833.834M2.5 4.333l-.833.834"
            }
          })])])]);
        } else {
          return h("div", {
            "class": "password-icon",
            "on": {
              "click": _this5.togglePasswordVisibility
            }
          }, [h("svg", {
            "attrs": {
              "width": "18",
              "height": "12",
              "xmlns": "http://www.w3.org/2000/svg"
            },
            "class": "password-icon__icon password-icon__icon-show"
          }, [h("g", {
            "attrs": {
              "transform": "translate(1 1)",
              "stroke": "#101828",
              "stroke-width": "2",
              "fill": "none",
              "fill-rule": "evenodd"
            }
          }, [h("path", {
            "attrs": {
              "d": "M0 5c1.805 3.225 4.472 4.837 8 4.837 3.528 0 6.195-1.612 8-4.837M0 4.837C1.805 1.612 4.472 0 8 0c3.528 0 6.195 1.612 8 4.837",
              "stroke-linecap": "round"
            }
          }), h("circle", {
            "attrs": {
              "cx": "8",
              "cy": "5",
              "r": "2"
            }
          })])])]);
        }
      }

      return null;
    }();

    var searchIcon = function () {
      if (_this5.type === "search" && !_this5.hasInputText) {
        return h("div", {
          "class": "password-icon",
          "on": {
            "click": _this5.focusInput
          }
        }, [h("svg", {
          "attrs": {
            "viewBox": "0 0 20 30",
            "xmlns": "http://www.w3.org/2000/svg"
          },
          "style": "height: 20px;",
          "class": "password-icon__icon"
        }, [h("g", {
          "attrs": {
            "stroke": "#575D68",
            "stroke-width": "1.4",
            "fill": "none",
            "fill-rule": "evenodd",
            "stroke-linecap": "round"
          }
        }, [h("path", {
          "attrs": {
            "d": "M19.129,18.164l-4.518-4.52c1.152-1.373,1.852-3.143,1.852-5.077c0-4.361-3.535-7.896-7.896-7.896 c-4.361,0-7.896,3.535-7.896,7.896s3.535,7.896,7.896,7.896c1.934,0,3.705-0.698,5.078-1.853l4.52,4.519 c0.266,0.268,0.699,0.268,0.965,0C19.396,18.863,19.396,18.431,19.129,18.164z M8.567,15.028c-3.568,0-6.461-2.893-6.461-6.461 s2.893-6.461,6.461-6.461c3.568,0,6.46,2.893,6.46,6.461S12.135,15.028,8.567,15.028z"
          }
        })])])]);
      }

      return null;
    }();

    var errorMessage = function () {
      if (_this5.isInvalid) {
        var errorMessageClass = "text-field__error-message";

        if (_this5.label) {
          errorMessageClass += " text-field__error-message--has-label";
        }

        if (_this5.isB2bInput) {
          errorMessageClass += " rtb-text-field__error-message rt-col-rt-col-3";
        }

        if (_this5.hintPosition === "right") {
          errorMessageClass += " rtb-text-field__error-message--on-the-right";
        } else if (_this5.hintPosition === "left") {
          errorMessageClass += " rtb-text-field__error-message--on-the-left";
        }

        if (Object.prototype.toString.call(_this5.errorMessageFunc) === "[object Function]") {
          return h("div", {
            "class": errorMessageClass
          }, [h("span", {
            "class": "error-message-text-content rt-font-label"
          }, [_this5.errorMessageFunc(_this5.localValue)])]);
        }

        return h("div", {
          "class": errorMessageClass
        }, [h("span", {
          "class": "error-message-text-content rt-font-label"
        }, [_this5.errorMessage])]);
      }
    }();

    var arithmeticButtons = function () {
      if (_this5.showNumbersButtons && _this5.insertType && _this5.insertType === "number") {
        return h("div", {
          "class": "input-arithmetic"
        }, [h("div", {
          "class": "d-flex"
        }, [h("button", {
          "class": "input-arithmetic__button input-arithmetic__minus",
          "on": {
            "click": _this5.subtractNumber
          }
        }, [h("svg", {
          "attrs": {
            "width": "20",
            "height": "20",
            "xmlns": "http://www.w3.org/2000/svg"
          }
        }, [h("g", {
          "attrs": {
            "fill": "none",
            "fill-rule": "evenodd"
          }
        }, [h("path", {
          "attrs": {
            "d": "M0 10c0 5.5 4.5 10 10 10s10-4.5 10-10S15.5 0 10 0 0 4.5 0 10z",
            "fill": "#E3E8EC"
          }
        }), h("path", {
          "attrs": {
            "d": "M15 10H5",
            "stroke": "#101828",
            "stroke-width": "2"
          }
        })])])]), h("button", {
          "class": "input-arithmetic__button input-arithmetic__plus",
          "on": {
            "click": _this5.addNumber
          }
        }, [h("svg", {
          "attrs": {
            "width": "20",
            "height": "20",
            "xmlns": "http://www.w3.org/2000/svg"
          }
        }, [h("g", {
          "attrs": {
            "fill": "none",
            "fill-rule": "evenodd"
          }
        }, [h("path", {
          "attrs": {
            "d": "M0 10c0 5.5 4.5 10 10 10s10-4.5 10-10S15.5 0 10 0 0 4.5 0 10z",
            "fill": "#E3E8EC"
          }
        }), h("path", {
          "attrs": {
            "d": "M10 10V5v5h5-5zm0 0v5-5H5h5z",
            "stroke": "#101828",
            "stroke-width": "2"
          }
        })])])])])]);
      }
    }();

    var inputLabel = function () {
      if (_this5.localLabel) return h("div", {
        "class": "input-label"
      }, [_this5.localLabel]);
    }();

    var inputElementByType = function () {
      if (_this5.insertType !== 'tel') {
        return h("input", {
          "on": {
            "keypress": _this5.keyPress,
            "keyup": _this5.keyUp,
            "focus": _this5.focus,
            "blur": _this5.blur,
            "input": _this5.inputHandler
          },
          "ref": "input",
          "attrs": {
            "autocomplete": _this5.autocomplete,
            "autocapitalize": "off",
            "type": _this5.type === 'search' ? 'text' : _this5.type,
            "name": _this5.fieldName
          },
          "class": _this5.inputElementClass
        });
      } else {
        return h("input", {
          "on": {
            "keypress": _this5.keyPress,
            "keyup": _this5.keyUp,
            "input": _this5.inputHandler,
            "focus": _this5.mask,
            "blur": _this5.mask
          },
          "ref": "input",
          "attrs": {
            "autocomplete": _this5.autocomplete,
            "autocapitalize": "off",
            "type": _this5.type,
            "name": _this5.fieldName
          },
          "class": _this5.inputElementClass
        });
      }
    }();

    var inputLine = function inputLine() {
      if (_this5.outlined) {
        return h("div", {
          "class": "text-field__border"
        });
      } else {
        return h("div", {
          "class": "text-field__line"
        });
      }
    };

    var renderButton = function renderButton() {
      if (_this5.inputButton) {
        return h("rt-button", {
          "class": "rt-button-transparent-purple rt-button-small",
          "on": {
            "click": _this5.getCode
          }
        }, [_this5.inputButtonText]);
      }

      return null;
    };

    return h("div", {
      "class": this.inputClass
    }, [h("div", {
      "class": this.inputContainerClass
    }, [inputElementByType, inputLine(), placeholder, this.inputButton ? null : clearButton, passwordIcon, searchIcon, errorMessage, arithmeticButtons, this.$slots["default"]]), inputLabel, renderButton()]);
  }
});

/***/ }),

/***/ "./src/atoms/components/Input/Input.vue":
/*!**********************************************!*\
  !*** ./src/atoms/components/Input/Input.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Input.vue?vue&type=script&lang=js& */ "./src/atoms/components/Input/Input.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns
;



/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _Input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
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

/***/ "./src/atoms/components/Input/Input.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./src/atoms/components/Input/Input.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Input.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/atoms/components/Input/Input.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ })

}]);
"use strict";
(self["webpackChunkvue_rt_style_kit_pages"] = self["webpackChunkvue_rt_style_kit_pages"] || []).push([["src_atoms_components_Select_SelectV2_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/atoms/components/Select/SelectV2.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/atoms/components/Select/SelectV2.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SelectStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SelectStore.js */ "./src/atoms/components/Select/SelectStore.js");
/* harmony import */ var _SelectV2VirtualOption_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SelectV2VirtualOption.vue */ "./src/atoms/components/Select/SelectV2VirtualOption.vue");
/* harmony import */ var _SelectV2_styl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SelectV2.styl */ "./src/atoms/components/Select/SelectV2.styl");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




var components = {};
components[_SelectV2VirtualOption_vue__WEBPACK_IMPORTED_MODULE_1__["default"].name] = _SelectV2VirtualOption_vue__WEBPACK_IMPORTED_MODULE_1__["default"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "RtSelectV2",
  components: components,
  props: {
    json: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    defaultValue: {
      type: String | Array,
      "default": ''
    },
    type: {
      type: String,
      "default": 'simple'
    },
    hasError: {
      type: Boolean,
      "default": false
    },
    label: {
      type: String,
      "default": ""
    },
    value: {
      type: Array | String,
      "default": ''
    },
    text: {
      type: String,
      "default": ''
    },
    disabled: {
      type: Boolean,
      "default": false
    },
    errorMessage: {
      type: String,
      "default": ''
    },
    dropdownMinWidth: {
      type: [String, Number],
      "default": null
    },
    multiple: {
      type: Boolean,
      "default": false
    },
    fieldId: {
      type: String,
      "default": ''
    },
    name: {
      type: String,
      "default": ''
    },
    setFirstActive: {
      type: Boolean,
      "default": false
    },
    hasContentText: {
      type: Boolean,
      "default": false
    },
    bright: {
      type: Boolean,
      "default": false
    },
    joinValue: {
      type: Boolean,
      "default": false
    },
    sep: {
      type: String,
      "default": ', '
    }
  },
  data: function data() {
    return {
      selectOptions: [],
      selectActiveValue: [],
      selectActiveLabels: [],
      selectOpenStatus: false,
      focusIndex: -1,
      activeIndex: 0,
      verticalOrientation: 'bottom',
      bottomEdge: null,
      isTagOutside: false,
      lastInside: null,
      inputLocalValue: '',
      shadowUp: false,
      shadowDown: true,
      tempIndex: null,
      isFocus: false,
      mouseenter: false,
      stopOpenAuto: false
    };
  },
  watch: {
    value: {
      deep: true,
      handler: function handler(newVal, oldVal) {
        if (JSON.stringify(newVal) != JSON.stringify(oldVal)) {
          // SelectStore.setActiveValue(this.name, newVal)
          this.getSelectType();
          this.getSelectOptions(); // this.getActiveValue();

          this.setActiveValue();

          if (this.$refs.input) {
            this.$refs.input.$el.querySelector('input').focus();
          }
        }
      }
    },
    json: {
      deep: true,
      handler: function handler(newVal, oldVal) {
        var _this = this;

        if (JSON.stringify(newVal) != JSON.stringify(oldVal)) {
          // SelectStore.clear(this.name);
          _SelectStore_js__WEBPACK_IMPORTED_MODULE_0__.SelectStore.addJson(this.name, newVal);
          this.getSelectType();
          this.getSelectOptions();
          this.$refs.input.$el.querySelector('input').focus();
          this.$nextTick(function () {
            _this.$refs.input.$el.querySelector('input').focus();

            _this.$nextTick(function () {
              _this.$refs.input.$el.querySelector('input').focus();
            });
          });
        }
      }
    },
    selectActiveValue: function selectActiveValue(newVal, oldVal) {
      if (JSON.stringify(newVal) != JSON.stringify(oldVal) && oldVal) {
        this.$emit('select', newVal[0]);
        this.$emit('input', newVal[0]);
      }
    },
    selectOpenStatus: function selectOpenStatus(newVal, oldVal) {
      if (newVal && !oldVal) {
        this.mouseenterFn();
        this.bindClickOutside();
        this.bindKeydown();
      } else {
        if (!newVal && oldVal) {
          this.unbindClickOutside();
          this.unbindKeydown();
        }
      }
    }
  },
  computed: {
    renderSelectList: function renderSelectList() {
      var _this2 = this;

      var h = this.$createElement;

      var renderShadowUp = function renderShadowUp() {
        var _this2$selectOptions;

        if (((_this2$selectOptions = _this2.selectOptions) === null || _this2$selectOptions === void 0 ? void 0 : _this2$selectOptions.length) > 6 && _this2.shadowUp) {
          return h("div", {
            "class": "select-v2-list-shadow-up"
          });
        }

        return null;
      };

      var renderShadowDown = function renderShadowDown() {
        var _this2$selectOptions2;

        if (((_this2$selectOptions2 = _this2.selectOptions) === null || _this2$selectOptions2 === void 0 ? void 0 : _this2$selectOptions2.length) > 6 && _this2.shadowDown) {
          return h("div", {
            "class": "select-v2-list-shadow-down"
          });
        }

        return null;
      };

      return h("div", {
        "class": "select-v2-list"
      }, [h("div", {
        "class": "select-v2-list-inner",
        "ref": "inner",
        "on": {
          "scroll": this.noteScroll
        }
      }, [renderShadowUp(), renderShadowDown(), this.renderSelectOption])]);
    },
    renderSelectOption: function renderSelectOption() {
      var _this3 = this;

      var h = this.$createElement;

      if (!this.selectOpenStatus) {
        return null;
      }

      return this.selectOptions.map(function (item, index) {
        var presetActiveIndex = function presetActiveIndex() {
          _this3.tempIndex = index;
        };

        var resetActiveIndex = function resetActiveIndex() {
          if (_this3.focusIndex == index) {
            _SelectStore_js__WEBPACK_IMPORTED_MODULE_0__.SelectStore.setFocusIndex(_this3.name, -1);
          }
        };

        var setActiveIndex = function setActiveIndex() {
          _SelectStore_js__WEBPACK_IMPORTED_MODULE_0__.SelectStore.setFocusIndex(_this3.name, _this3.tempIndex);
        };

        var isActive = _this3.activeIndex[index] > 0;
        var isFocus = index == _this3.focusIndex;
        return h("rt-select-v2-virtual-option", {
          "ref": 'select-item-' + index,
          "attrs": {
            "select-name": _this3.name,
            "input-value": _this3.inputLocalValue,
            "is-active": isActive,
            "value": item.value,
            "multiple": _this3.multiple,
            "sublabel": item.sublabel,
            "is-focus": isFocus,
            "label": item.label
          },
          "on": {
            "mouseenter": presetActiveIndex,
            "mouseleave": resetActiveIndex,
            "mousemove": setActiveIndex
          }
        });
      });
    },
    renderLabel: function renderLabel() {
      var _this$selectActiveVal;

      var h = this.$createElement;
      var classList = [];
      classList.push('select-v2-label');

      if (this.selectActiveValue && ((_this$selectActiveVal = this.selectActiveValue[0]) === null || _this$selectActiveVal === void 0 ? void 0 : _this$selectActiveVal.toString().length) > 0) {
        classList.push('select-v2-label--up');
      }

      return h("label", {
        "ref": "placeholder",
        "class": classList.join(' ')
      }, [this.label]);
    },
    selectClasses: function selectClasses() {
      var selectClasses = [];
      selectClasses.push('select-v2');

      if (this.hasError) {
        selectClasses.push("select-v2--error text-field--error");
      }

      if (this.selectOpenStatus) {
        selectClasses.push("select-v2--is-open");

        if (this.verticalOrientation == 'top') {
          selectClasses.push("select-v2--invert-open-list");
        }
      }

      if (this.hasContentText) {
        selectClasses.push("rt-select--has-content");
      }

      if (this.disabled) {
        selectClasses.push("select-v2--disabled");
      }

      if (this.multiple) {
        selectClasses.push("select-v2--multiline");
      }

      if (this.bright) {
        selectClasses.push('select-v2--bright');
      }

      return selectClasses.join(' ');
    }
  },
  mounted: function mounted() {
    var _Object$keys;

    if (((_Object$keys = Object.keys(this.json)) === null || _Object$keys === void 0 ? void 0 : _Object$keys.length) > 0) {
      _SelectStore_js__WEBPACK_IMPORTED_MODULE_0__.SelectStore.addJson(this.name, this.json);
    }

    this.setDefaultValue();
    _SelectStore_js__WEBPACK_IMPORTED_MODULE_0__.SelectStore.setSelectorType(this.name, this.type);
    _SelectStore_js__WEBPACK_IMPORTED_MODULE_0__.SelectStore.addWatcher(this.name, this.getSelectOptions);
    _SelectStore_js__WEBPACK_IMPORTED_MODULE_0__.SelectStore.addWatcher(this.name, this.getActiveValue);
    _SelectStore_js__WEBPACK_IMPORTED_MODULE_0__.SelectStore.addWatcher(this.name, this.getSelectType);
    _SelectStore_js__WEBPACK_IMPORTED_MODULE_0__.SelectStore.addWatcher(this.name, this.getSelectOpenStatus);
    this.setActiveValue();
    this.getSelectType();
    this.getSelectOptions();
    this.getActiveValue();
  },
  updated: function updated() {
    this.fixValueList();
  },
  beforeDestroy: function beforeDestroy() {
    _SelectStore_js__WEBPACK_IMPORTED_MODULE_0__.SelectStore.removeWatcher(this.name);
    _SelectStore_js__WEBPACK_IMPORTED_MODULE_0__.SelectStore.clear(this.name);
  },
  methods: {
    onInputAutoField: function onInputAutoField(e, a) {
      if (this.isFocus || this.mouseenter) {
        var _this$selectActiveLab, _this$$refs$input, _this$$refs$input$loc, _this$selectOptions, _SelectStore$getInput;

        if (((_this$selectActiveLab = this.selectActiveLabels[0]) === null || _this$selectActiveLab === void 0 ? void 0 : _this$selectActiveLab.toLowerCase()) != ((_this$$refs$input = this.$refs.input) === null || _this$$refs$input === void 0 ? void 0 : (_this$$refs$input$loc = _this$$refs$input.localValue) === null || _this$$refs$input$loc === void 0 ? void 0 : _this$$refs$input$loc.toLowerCase()) && ((_this$selectOptions = this.selectOptions) === null || _this$selectOptions === void 0 ? void 0 : _this$selectOptions.length) > 0 && ((_SelectStore$getInput = _SelectStore_js__WEBPACK_IMPORTED_MODULE_0__.SelectStore.getInputText(this.name)) === null || _SelectStore$getInput === void 0 ? void 0 : _SelectStore$getInput.length) > 2) {
          _SelectStore_js__WEBPACK_IMPORTED_MODULE_0__.SelectStore.setOpen(this.name);
        } else {
          _SelectStore_js__WEBPACK_IMPORTED_MODULE_0__.SelectStore.setClose(this.name);
        }
      }
    },
    onChange: function onChange() {
      this.$emit.apply(this, ['change'].concat(Array.prototype.slice.call(arguments)));
    },
    setActiveValue: function setActiveValue() {
      if (this.setFirstActive) {
        var _this$json$;

        if ((_this$json$ = this.json[0]) !== null && _this$json$ !== void 0 && _this$json$.value) {
          var _this$json$2;

          _SelectStore_js__WEBPACK_IMPORTED_MODULE_0__.SelectStore.setActiveValue(this.name, (_this$json$2 = this.json[0]) === null || _this$json$2 === void 0 ? void 0 : _this$json$2.value);
        } else {
          _SelectStore_js__WEBPACK_IMPORTED_MODULE_0__.SelectStore.setActiveValue(this.name, this.$children[0].value);
        }
      }

      if (this.value) {
        _SelectStore_js__WEBPACK_IMPORTED_MODULE_0__.SelectStore.setActiveValue(this.name, this.value);
      }
    },
    setDefaultValue: function setDefaultValue() {
      if (this.defaultValue.length > 0 && this.inputLocalValue.length == 0) {
        this.inputLocalValue = Array.isArray(this.defaultValue) ? this.defaultValue[0] : this.defaultValue;
      }
    },
    getSelectOptions: function getSelectOptions() {
      var selectorOptions = _SelectStore_js__WEBPACK_IMPORTED_MODULE_0__.SelectStore.getSelectorOptions(this.name);

      if (selectorOptions) {
        this.selectOptions = _toConsumableArray(selectorOptions);
      }
    },
    getActiveValue: function getActiveValue() {
      var selectActiveValue = _SelectStore_js__WEBPACK_IMPORTED_MODULE_0__.SelectStore.getActiveValue(this.name);
      var selectActiveLabels = _SelectStore_js__WEBPACK_IMPORTED_MODULE_0__.SelectStore.getActiveLabels(this.name);

      if (selectActiveValue && JSON.stringify(this.selectActiveValue) != JSON.stringify(selectActiveValue)) {
        this.selectActiveValue = _toConsumableArray(selectActiveValue);
      }

      if (selectActiveLabels) {
        this.selectActiveLabels = _toConsumableArray(selectActiveLabels);
      }

      this.activeIndex = _SelectStore_js__WEBPACK_IMPORTED_MODULE_0__.SelectStore.getActiveIndex(this.name);
      this.focusIndex = _SelectStore_js__WEBPACK_IMPORTED_MODULE_0__.SelectStore.getFocusIndex(this.name);
    },
    getSelectType: function getSelectType() {
      this.selectorType = _SelectStore_js__WEBPACK_IMPORTED_MODULE_0__.SelectStore.getSelectorType(this.name, this.type, this.multiple);
    },
    getSelectOpenStatus: function getSelectOpenStatus() {
      this.selectOpenStatus = _SelectStore_js__WEBPACK_IMPORTED_MODULE_0__.SelectStore.getOpenStatus(this.name);
    },
    setVerticalOrientation: function setVerticalOrientation() {
      if (window.innerHeight + window.screenTop - this.$el.getBoundingClientRect().top < 200) {
        if (this.$el.getBoundingClientRect().top < 200) {
          this.verticalOrientation = 'bottom';
        } else {
          this.verticalOrientation = 'top';
        }
      } else {
        this.verticalOrientation = 'bottom';
      }
    },
    toggleOpen: function toggleOpen() {
      if (!this.disabled) {
        if (!this.selectOpenStatus) {
          _SelectStore_js__WEBPACK_IMPORTED_MODULE_0__.SelectStore.setOpen(this.name);
          this.setVerticalOrientation();
        } else {
          _SelectStore_js__WEBPACK_IMPORTED_MODULE_0__.SelectStore.setClose(this.name);
        }
      }
    },
    bindClickOutside: function bindClickOutside() {
      window.addEventListener('click', this.clickOutsideFn);
    },
    unbindClickOutside: function unbindClickOutside() {
      window.removeEventListener('click', this.clickOutsideFn);
    },
    bindKeydown: function bindKeydown() {
      window.addEventListener('keydown', this.keydownFn);
    },
    unbindKeydown: function unbindKeydown() {
      window.removeEventListener('keydown', this.keydownFn);
    },
    keydownFn: function keydownFn(e) {
      if (e.keyCode == 40) {
        _SelectStore_js__WEBPACK_IMPORTED_MODULE_0__.SelectStore.setNextFocus(this.name);
        e.preventDefault();
        e.stopPropagation();
      }

      if (e.keyCode == 38) {
        _SelectStore_js__WEBPACK_IMPORTED_MODULE_0__.SelectStore.setPreviousFocus(this.name);
        e.preventDefault();
        e.stopPropagation();
      }

      if (e.keyCode == 27) {
        _SelectStore_js__WEBPACK_IMPORTED_MODULE_0__.SelectStore.setClose(this.name);
        e.preventDefault();
        e.stopPropagation();
      }

      if (e.keyCode == 13) {
        var _this$$refs;

        // SelectStore.setClose(this.name)
        (_this$$refs = this.$refs['select-item-' + this.focusIndex]) === null || _this$$refs === void 0 ? void 0 : _this$$refs.onClickFire();
        e.preventDefault();
        e.stopPropagation();

        if (this.autoComplete) {
          _SelectStore_js__WEBPACK_IMPORTED_MODULE_0__.SelectStore.setClose(this.name);
        }
      }
    },
    mouseenterFn: function mouseenterFn() {
      this.mouseenter = true;
    },
    mouseleaveFn: function mouseleaveFn() {
      this.mouseenter = false;
    },
    clickOutsideFn: function clickOutsideFn() {
      var _this4 = this;

      if (!this.mouseenter) {
        _SelectStore_js__WEBPACK_IMPORTED_MODULE_0__.SelectStore.setClose(this.name);
        this.stopOpenAuto = true;
        setTimeout(function () {
          _this4.stopOpenAuto = false;
        }, 1000);
      }
    },
    fixValueList: function fixValueList() {
      var _this$$refs$valueWrap,
          _this5 = this,
          _this$$el$querySelect;

      this.bottomEdge = (_this$$refs$valueWrap = this.$refs.valueWrapper) === null || _this$$refs$valueWrap === void 0 ? void 0 : _this$$refs$valueWrap.getBoundingClientRect().bottom;
      var valuesList = this.$el.querySelectorAll('.select-v2-tag');
      var fullLength = valuesList.length;
      Array.from(valuesList).map(function (item, index) {
        if (item.getBoundingClientRect().top >= _this5.bottomEdge) {
          _this5.isTagOutside = true;
        } else {
          _this5.isTagOutside = false;

          if (!_this5.$el.querySelector('.select-v2-tag__outside-count')) {
            _this5.lastInside = index;
          }
        }
      });
      (_this$$el$querySelect = this.$el.querySelector('.select-v2-tag__outside-count')) === null || _this$$el$querySelect === void 0 ? void 0 : _this$$el$querySelect.remove();

      if (this.isTagOutside && this.lastInside && !this.$el.querySelector('.select-v2-tag__outside-count') && fullLength - this.lastInside > 1) {
        var overflowTag = '<span class="select-v2-tag__outside-count rt-font-label">показать ещё ' + (fullLength - this.lastInside) + '</span>';
        this.$el.querySelectorAll('.select-v2-tag')[this.lastInside - 1].insertAdjacentHTML('afterend', overflowTag);
        this.$el.querySelector('.select-v2-tag__outside-count').addEventListener('click', function ($event) {
          $event.preventDefault();
          $event.stopPropagation();

          _this5.toggleOpen();
        });
      }
    },
    checkMatch: function checkMatch(e) {
      _SelectStore_js__WEBPACK_IMPORTED_MODULE_0__.SelectStore.setInputText(this.name, e);
      this.selectActiveLabels[0] = '';
      this.inputLocalValue = e;
      this.$emit('input', e);
      _SelectStore_js__WEBPACK_IMPORTED_MODULE_0__.SelectStore.removeAllActiveValue(this.selectName);
    },
    clearValue: function clearValue(e) {
      _SelectStore_js__WEBPACK_IMPORTED_MODULE_0__.SelectStore.setActiveValue(this.name, '');
      _SelectStore_js__WEBPACK_IMPORTED_MODULE_0__.SelectStore.removeAllActiveValue(this.selectName);
      this.checkMatch('');
    },
    noteScroll: function noteScroll() {
      if (this.$refs.inner.scrollTop != 0) {
        this.shadowUp = true;
      } else {
        this.shadowUp = false;
      }

      if (this.$refs.inner.scrollTop != this.$refs.inner.scrollHeight - this.$refs.inner.offsetHeight) {
        this.shadowDown = true;
      } else {
        this.shadowDown = false;
      }
    },
    onFocus: function onFocus(e) {
      this.isFocus = true;
      this.$emit('focus', e);
    },
    onBlur: function onBlur(e) {
      this.$emit('blur', e);
    },
    onBlurAuto: function onBlurAuto(val, event) {
      var _this6 = this;

      this.isFocus = false;
      setTimeout(function () {
        if (!_this6.isFocus && (!_this6.mouseenter || !_this6.selectOpenStatus)) {
          _this6.$emit('blur', val, event);
        }
      }, 300);
    },
    onKeydown: function onKeydown(e) {
      this.$emit('keydown', e);
    },
    onKeyup: function onKeyup(e) {
      this.$emit('keyup', e);
    }
  },
  render: function render(h) {
    var _this7 = this;

    var renderValue = function renderValue() {
      if (_this7.selectActiveLabels.length < 2 && !_this7.multiple) {
        return h("p", {
          "class": "select-v2-value"
        }, [_this7.selectActiveLabels[0]]);
      }

      var valueItem = _this7.selectActiveLabels.map(function (item, index) {
        var click = function click(e) {
          _SelectStore_js__WEBPACK_IMPORTED_MODULE_0__.SelectStore.removeActiveValue(_this7.name, _this7.selectActiveValue[index]);
          e.preventDefault();
          e.stopPropagation();
        };

        var preventClick = function preventClick(e) {
          e.preventDefault();
          e.stopPropagation();
        };

        return h("span", {
          "class": "select-v2-tag",
          "on": {
            "click": preventClick
          }
        }, [h("span", [item]), h("span", {
          "class": "d-flex"
        }, [h("rt-system-icons", {
          "class": "select-v2-tag__remove",
          "attrs": {
            "name": "close small"
          },
          "ref": 'selectTag-' + index,
          "on": {
            "click": click
          }
        })])]);
      });

      return h("p", {
        "class": "select-v2-value d-flex",
        "ref": "valueWrapper"
      }, [valueItem]);
    };

    var errorMessage = function errorMessage() {
      if (_this7.hasError) {
        if (_this7.errorMessage.length > 0) {
          return h("p", {
            "class": "select-v2__error-message rt-font-label"
          }, [_this7.errorMessage]);
        }
      }
    };

    if (this.autoComplete) {
      return h("div", {
        "class": this.selectClasses,
        "ref": "select",
        "on": {
          "mouseenter": this.mouseenterFn,
          "mouseleave": this.mouseleaveFn
        }
      }, [h("div", {
        "class": "select-v2__container"
      }, [h("rt-input", {
        "attrs": {
          "version": 2,
          "disabled": this.disabled,
          "placeholder": this.label,
          "value": this.selectActiveLabels[0] || this.inputLocalValue,
          "hasError": this.hasError,
          "errorMessage": this.errorMessage
        },
        "ref": "input",
        "on": {
          "custom": this.checkMatch,
          "clear": this.clearValue,
          "change": this.onChange,
          "input": this.onInputAutoField,
          "focus": this.onFocus,
          "blur": this.onBlurAuto,
          "keydown": this.onKeydown,
          "keyup": this.onKeyup
        }
      }), this.renderSelectList])]);
    }

    return h("div", {
      "class": this.selectClasses,
      "ref": "select",
      "on": {
        "mouseenter": this.mouseenterFn,
        "mouseleave": this.mouseleaveFn
      }
    }, [h("div", {
      "class": "select-v2__container"
    }, [h("button", {
      "attrs": {
        "type": "button",
        "disabled": this.disabled
      },
      "class": "select-v2__inner",
      "on": {
        "click": this.toggleOpen,
        "focus": this.onFocus,
        "blur": this.onBlurAuto
      }
    }, [renderValue(), this.renderLabel, this.$slots["default"], h("rt-system-icons", {
      "class": "select-v2-arrow",
      "attrs": {
        "name": "chevron down"
      }
    })]), errorMessage(), this.renderSelectList])]);
  }
});

/***/ }),

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

/***/ "./src/atoms/components/Select/SelectV2.vue":
/*!**************************************************!*\
  !*** ./src/atoms/components/Select/SelectV2.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SelectV2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SelectV2.vue?vue&type=script&lang=js& */ "./src/atoms/components/Select/SelectV2.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns
;



/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _SelectV2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
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

/***/ "./src/atoms/components/Select/SelectV2.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./src/atoms/components/Select/SelectV2.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectV2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SelectV2.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/atoms/components/Select/SelectV2.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectV2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

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
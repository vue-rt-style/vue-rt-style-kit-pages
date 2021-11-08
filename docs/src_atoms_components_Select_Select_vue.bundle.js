"use strict";
(self["webpackChunkvue_rt_style_kit_pages"] = self["webpackChunkvue_rt_style_kit_pages"] || []).push([["src_atoms_components_Select_Select_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/atoms/components/Select/Select.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/atoms/components/Select/Select.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Select_styl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Select.styl */ "./src/atoms/components/Select/Select.styl");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "RtSelect",
  props: {
    hasError: {
      type: Boolean,
      "default": false
    },
    label: {
      type: String,
      "default": ""
    },
    value: {
      type: String,
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
    resetWrapperWidth: {
      type: Boolean,
      "default": false
    },
    isB2bSelect: {
      type: Boolean,
      "default": false
    },
    outlined: {
      type: Boolean,
      "default": false
    },
    autoComplete: {
      type: Boolean,
      "default": false
    },
    multi: {
      type: Boolean,
      "default": false
    },
    fieldId: {
      type: String,
      "default": ''
    },
    hasContentText: {
      type: Boolean,
      "default": false
    }
  },
  data: function data() {
    return {
      localValue: this.text ? this.value : "",
      RtSelect: {
        setValue: this.setValue,
        selectedValue: this.text,
        hasMultiSelect: this.multi
      },
      isOpen: false,
      isHover: false,
      selected: {},
      isOpenListOnTop: false,
      hasSelected: this.text ? true : false,
      focused: false,
      multiLocalValue: [],
      multiValue: ''
    };
  },
  computed: {
    selectClasses: function selectClasses() {
      var selectClasses = ['select', 'text-field'];

      if (this.hasError) {
        selectClasses.push("select--error text-field--error");
      }

      if (this.isOpen) {
        selectClasses.push("select--is-open");
      }

      if (this.resetWrapperWidth) {
        selectClasses.push("select--is-reset-width");
      }

      if (this.disabled) {
        selectClasses.push("select--disabled");
      }

      if (this.isOpenListOnTop) {
        selectClasses.push("select--invert-open-list");
      }

      if (this.isB2bSelect) {
        selectClasses.push("rtb-select");
      }

      if (this.outlined) {
        selectClasses.push("rtb-select--outlined");
      }

      if (this.multi) {
        selectClasses.push("rtb-select--multi");
      }

      if (this.hasContentText) {
        selectClasses.push("rt-select--has-content");
      }

      return selectClasses.join(' ');
    },
    placeholderClasses: function placeholderClasses() {
      var placeholderClasses = ['floating-placeholder'];

      if (this.hasSelected && !(this.localValue === '' && this.multiLocalValue.length === 0)) {
        placeholderClasses.push('floating-placeholder--go-top');
      }

      return placeholderClasses.join(' ');
    },
    selectListStyle: function selectListStyle() {
      if (this.dropdownMinWidth) {
        var width = this.dropdownMinWidth;

        if (typeof this.dropdownMinWidth === "number") {
          width = width + "px";
        }

        return {
          "min-width": width
        };
      }
    },
    borderClass: function borderClass() {
      var borderClass = '';
      borderClass += this.outlined ? 'text-field__border' : 'text-field__line';
      borderClass += this.outlined && this.hasError ? ' text-field__border--error' : '';
      return borderClass;
    }
  },
  provide: function provide() {
    var RtSelect = this.RtSelect;
    return {
      RtSelect: RtSelect
    };
  },
  watch: {
    text: function text() {
      this.localValue = this.text;
      this.RtSelect.selectedValue = this.text;

      if (this.text) {
        this.hasSelected = true;
      }
    },
    localValue: function localValue(val) {
      this.$emit("input", val);
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.removeBindEvents();
  },
  mounted: function mounted() {
    this.setValue({
      text: this.text,
      value: this.value
    });
  },
  methods: {
    setValue: function setValue(data) {
      var value = data.value,
          text = data.text;

      if (!this.multi) {
        this.localValue = text;
      } else {
        if (text !== null && text.length > 0) {
          if (!this.multiLocalValue.includes(text)) {
            this.multiLocalValue.push(text);
          } else {
            this.multiLocalValue.splice(this.multiLocalValue.indexOf(text), 1);
          }
        }

        this.multiValue = this.multiLocalValue.join(', ');
      }

      this.RtSelect.selectedValue = text;
      !this.multi ? this.emitSelected(this.localValue) : this.emitSelected(this.multiLocalValue);

      if (!this.multi) {
        this.isOpen = false;
        this.removeBindEvents();
      }

      this.$emit("select", data);
    },
    toggleOpen: function toggleOpen(e) {
      var _this = this;

      if (!this.disabled) {
        this.isOpen = !this.isOpen;

        if (this.autoComplete && this.isOpen) {
          this.$refs.autoCompleteSelect.focus();
        }

        if (this.focused) this.isOpen = true;

        if (this.isOpen) {
          this.scrollToSelected();

          if (window.innerHeight - e.clientY < 200 && e.clientY > 200) {
            this.isOpenListOnTop = true;
          } else {
            this.isOpenListOnTop = false;
          }

          setTimeout(function () {
            _this.bindEvents();
          });
        } else {
          this.removeBindEvents();
        }
      }

      this.liftPlaceholder();
      e.preventDefault();
    },
    emitSelected: function emitSelected(value) {
      this.$emit("rt-selected", value);
    },
    bindMouseEvents: function bindMouseEvents(e) {
      if (!this.isHover) {
        this.isOpen = false;
        this.removeBindEvents();
        if (!this.autoComplete) this.liftPlaceholder();
      }
    },
    bindKeyboardEvents: function bindKeyboardEvents(e) {
      if (e.keyCode && e.keyCode === 27) {
        this.isOpen = false;
        this.removeBindEvents();
      } else {
        if (e.keyCode === 38 || e.keyCode === 40) {
          e.preventDefault();
          e.stopPropagation();
          var selectedItem = this.$el.querySelector(".select-option--select");
          var focusedItem = this.$el.querySelector(".select-option__inner:focus");
          var optionItems = this.$el.querySelectorAll(".select-option");
          var optionItemsLength = optionItems.length;

          if (focusedItem) {
            selectedItem = focusedItem.parentNode;
          }

          var selectedIndex = selectedItem ? _toConsumableArray(selectedItem.parentNode.children).indexOf(selectedItem) : -1;

          if (e.keyCode === 38) {
            selectedIndex = (selectedIndex - 1 + optionItemsLength) % optionItemsLength;
          } else {
            selectedIndex = (selectedIndex + 1 + optionItemsLength) % optionItemsLength;
          }

          optionItems[selectedIndex].querySelector(".select-option__inner").focus();
        }
      }
    },
    removeBindEvents: function removeBindEvents() {
      document.removeEventListener("click", this.bindMouseEvents);
      document.removeEventListener("keydown", this.bindKeyboardEvents);
    },
    bindEvents: function bindEvents() {
      document.addEventListener("click", this.bindMouseEvents, {
        passive: false
      });
      document.addEventListener("keydown", this.bindKeyboardEvents, {
        passive: false
      });
    },
    scrollToSelected: function scrollToSelected() {
      var selectElement = this.$el.querySelector(".select-option--select");

      if (selectElement) {
        var scrollPosition = selectElement.offsetTop - selectElement.parentNode.offsetTop;
        selectElement.parentNode.scrollTop = scrollPosition;
      }
    },
    liftPlaceholder: function liftPlaceholder() {
      if (this.$refs['placeholder']) {
        if (!this.$refs['placeholder'].classList.contains("floating-placeholder--go-top")) {
          this.$refs['placeholder'].classList.add("floating-placeholder--go-top");
        } else if (!this.focused) {
          if (this.$refs.simpleSelect && !this.$refs.simpleSelect.innerText) {
            this.$refs['placeholder'].classList.remove("floating-placeholder--go-top");
          } else if (this.$refs.autoCompleteSelect && !this.$refs.autoCompleteSelect.value) {
            this.$refs['placeholder'].classList.remove("floating-placeholder--go-top");
          } else if (this.localValue === '' && this.multiLocalValue.length === 0) {
            this.$refs['placeholder'].classList.remove("floating-placeholder--go-top");
          }
        }
      }
    },
    checkFill: function checkFill() {
      var inputValue = this.$el.children[0].childNodes[1].children[0].value;
      this.$children.forEach(function (el) {
        if (!el.$el.innerText.toLowerCase().startsWith(inputValue.toLowerCase())) {
          el.$el.classList.add('select-option--hidden');
        } else {
          el.$el.classList.remove('select-option--hidden');
        }
      });
    },
    setFocus: function setFocus() {
      this.focused = true;
    },
    removeFocus: function removeFocus() {
      var _this2 = this;

      this.focused = false;
      this.isOpen = false;
      this.$refs.autoCompleteSelect.blur();
      setTimeout(function () {
        !_this2.localValue ? _this2.$refs['placeholder'].classList.remove("floating-placeholder--go-top") : null;
      }, 1);
    },
    setHover: function setHover() {
      this.isHover = true;
    },
    removeHover: function removeHover() {
      this.isHover = false;
    }
  },
  render: function render(h) {
    var _this3 = this;

    var renderChilds = function renderChilds() {
      if (!_this3.disabled) {
        return h("div", {
          "style": _this3.selectListStyle,
          "class": "select-list"
        }, [_this3.$slots["default"]]);
      }
    };

    var errorMessage = function () {
      if (!!_this3.hasError) {
        return h("p", {
          "class": "text-field__error-message"
        }, [_this3.errorMessage]);
      }
    }();

    var selectType = function () {
      if (_this3.autoComplete) {
        return h("input", {
          "class": "select-input",
          "domProps": {
            "value": _this3.localValue
          },
          "on": {
            "input": _this3.checkFill,
            "focus": _this3.setFocus,
            "blur": _this3.removeFocus
          },
          "ref": "autoCompleteSelect",
          "attrs": {
            "id": _this3.fieldId
          }
        });
      } else if (_this3.multi) {
        return h("p", {
          "class": "select-input",
          "ref": "multiSelect",
          "attrs": {
            "id": _this3.fieldId
          }
        }, [_this3.multiValue]);
      } else {
        return h("p", {
          "class": "select-input",
          "ref": "simpleSelect",
          "attrs": {
            "id": _this3.fieldId
          }
        }, [_this3.localValue]);
      }
    }();

    var renderBorder = function renderBorder() {
      if (_this3.hasContentText && _this3.$slots.content) {
        return null;
      }

      return h("div", {
        "class": _this3.borderClass
      });
    };

    var renderContent = function renderContent() {
      if (!_this3.hasContentText || !_this3.$slots.content) {
        return null;
      }

      return h("div", {
        "class": "rt-select-contents"
      }, [_this3.$slots.content]);
    };

    var renderPlaceholder = function renderPlaceholder() {
      if (_this3.hasContentText && _this3.$slots.content) {
        return null;
      }

      return h("label", {
        "ref": "placeholder",
        "class": _this3.placeholderClasses
      }, [_this3.label]);
    };

    return h("div", {
      "class": this.selectClasses,
      "on": {
        "mouseenter": this.setHover,
        "mouseleave": this.removeHover
      }
    }, [h("div", {
      "class": "select-inner-container"
    }, [h("button", {
      "attrs": {
        "disabled": this.disabled
      },
      "class": "select__inner",
      "on": {
        "click": this.toggleOpen
      }
    }, [renderPlaceholder(), h("div", {
      "class": "select-value"
    }, [selectType, renderContent(), h("div", {
      "class": "select-arrow"
    }, [h("svg", {
      "class": "select-arrow__icon",
      "attrs": {
        "width": "13",
        "height": "7"
      }
    }, [h("path", {
      "attrs": {
        "d": "M.705 1.704l5.999 6 6-6L11.295.295h-.002l-4.59 4.58L2.115.294h-.002z",
        "fill": "#575D68",
        "fill-rule": "evenodd"
      }
    })])])])]), renderBorder(), renderChilds()]), errorMessage]);
  }
});

/***/ }),

/***/ "./src/atoms/components/Select/Select.vue":
/*!************************************************!*\
  !*** ./src/atoms/components/Select/Select.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Select_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Select.vue?vue&type=script&lang=js& */ "./src/atoms/components/Select/Select.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns
;



/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _Select_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
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

/***/ "./src/atoms/components/Select/Select.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./src/atoms/components/Select/Select.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Select_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Select.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/atoms/components/Select/Select.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Select_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ })

}]);
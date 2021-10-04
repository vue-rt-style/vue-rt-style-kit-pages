"use strict";
(self["webpackChunkvue_rt_style_kit_pages"] = self["webpackChunkvue_rt_style_kit_pages"] || []).push([["src_atoms_components_Checkbox_Checkbox_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/atoms/components/Checkbox/Checkbox.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/atoms/components/Checkbox/Checkbox.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Checkbox_styl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Checkbox.styl */ "./src/atoms/components/Checkbox/Checkbox.styl");
/* harmony import */ var _Ripple_Ripple_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Ripple/Ripple.vue */ "./src/atoms/components/Ripple/Ripple.vue");


var componentsList = {};
componentsList[_Ripple_Ripple_vue__WEBPACK_IMPORTED_MODULE_1__["default"].name] = _Ripple_Ripple_vue__WEBPACK_IMPORTED_MODULE_1__["default"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "RtCheckbox",
  components: componentsList,
  props: {
    bright: {
      type: Boolean,
      "default": false
    },
    isOrange: {
      type: Boolean,
      "default": false
    },
    requiredRule: {
      type: Boolean,
      "default": true
    },
    isDisabled: {
      type: Boolean,
      "default": false
    },
    checked: {
      type: Boolean,
      "default": false
    },
    value: {
      type: [String, Boolean],
      "default": null
    },
    name: {
      type: String,
      "default": null
    },
    required: {
      type: Boolean,
      "default": false
    },
    uid: {
      type: String,
      "default": ''
    },
    "native": {
      type: Boolean,
      "default": false
    }
  },
  data: function data() {
    return {
      isChecked: this.checked
    };
  },
  watch: {
    checked: function checked(newValue) {
      this.isChecked = newValue;
    }
  },
  mounted: function mounted() {
    this.bindEvents();
  },
  beforeDestroy: function beforeDestroy() {
    this.unbindEvents();
  },
  methods: {
    changeFromParent: function changeFromParent(props) {
      if (props && this.name in props) {
        var propsForItem = props[this.name];

        if (this.value && propsForItem.indexOf(this.value) >= 0) {
          this.$refs.input.checked = true;
          this.isChecked = true;
          this.$emit("changecheckbox", {
            name: this.name,
            value: this.value,
            checked: this.isChecked,
            _uid: this._uid
          });
          this.showWave();
        } else {
          this.$refs.input.checked = false;
          this.isChecked = false;
        }
      } else {
        if (this.$refs.input.checked) {
          this.$refs.input.checked = false;
          this.isChecked = false;
        }
      }
    },
    changeInput: function changeInput($event) {
      this.isChecked = this.$refs['input'].checked;
      this.$emit("update:checked", this.isChecked);
      this.$emit("changecheckbox", {
        name: this.name,
        value: this.value,
        checked: this.isChecked,
        _uid: this._uid
      });

      if (this["native"]) {
        this.$emit('input', this.isChecked);
      }

      this.showWave();
    },
    bindEvents: function bindEvents() {
      var _this = this;

      if (this["_events"]) {
        Object.keys(this["_events"]).map(function (eventName) {
          _this["_events"][eventName].forEach(function (fn) {
            if (eventName != 'input' || !_this["native"]) {
              _this.$refs.input.addEventListener(eventName, fn);
            }
          });
        });
      }
    },
    unbindEvents: function unbindEvents() {
      var _this2 = this;

      if (this["_events"]) {
        Object.keys(this["_events"]).map(function (eventName) {
          _this2["_events"][eventName].forEach(function (fn) {
            _this2.$refs.input.removeEventListener(eventName, fn);
          });
        });
      }
    },
    showWave: function showWave() {
      this.$refs.ripple.startRipple({
        offsetX: 10,
        offsetY: 10
      });
    }
  },
  computed: {
    checkBoxClass: function checkBoxClass() {
      var classList = [];
      classList.push('checkbox');

      if (this.bright) {
        classList.push('checkbox-bright');
      }

      if (this.isOrange) {
        classList.push('checkbox-orange');
      }

      if (this.isChecked) {
        classList.push('active');
      }

      if (this.isDisabled) {
        classList.push('disabled');
      }

      if (!this.isChecked && this.required) {
        classList.push('invalid');
      }

      return classList.join(' ');
    }
  },
  render: function render(h) {
    return h("label", {
      "class": this.checkBoxClass
    }, [h("rt-ripple", {
      "ref": "ripple",
      "attrs": {
        "not-render": this.isDisabled
      }
    }), h("input", {
      "attrs": {
        "id": this.uid,
        "disabled": this.isDisabled,
        "name": this.name,
        "type": "checkbox"
      },
      "domProps": {
        "checked": this.checked
      },
      "ref": "input",
      "class": "checkbox-element",
      "on": {
        "change": this.changeInput
      }
    }), h("div", {
      "class": "checkbox-container"
    }, [h("svg", {
      "class": "checkbox-container__angle",
      "attrs": {
        "width": "12px",
        "height": "9px",
        "viewBox": "0 0 12 9",
        "version": "1.1",
        "xmlns": "http://www.w3.org/2000/svg"
      }
    }, [h("g", {
      "attrs": {
        "stroke": "none",
        "stroke-width": "1",
        "fill": "none",
        "fill-rule": "evenodd"
      }
    }, [h("g", {
      "attrs": {
        "id": "Checkbox",
        "transform": "translate(-521.000000, -911.000000)"
      }
    }, [h("g", {
      "attrs": {
        "id": "atom/checkbox/01-default",
        "transform": "translate(515.000000, 903.000000)"
      }
    }, [h("rect", {
      "attrs": {
        "id": "Rectangle",
        "x": "0",
        "y": "0",
        "width": "24",
        "height": "24"
      }
    }), h("path", {
      "attrs": {
        "d": "M16.324634,8.26251729 C16.7319344,7.88952294 17.3644884,7.91733353 17.7374827,8.32463399 C18.0817852,8.70060364 18.0845734,9.26850523 17.7626122,9.64702019 L17.675366,9.73748271 L10.4652088,16.3403428 L6.34362098,12.7544313 C5.92696008,12.3919232 5.88306058,11.7602819 6.24556871,11.343621 C6.58019159,10.9590109 7.14413505,10.89202 7.55663064,11.169112 L7.65637902,11.2455687 L10.43,13.659 L16.324634,8.26251729 Z",
        "id": "Stroke-4",
        "fill-rule": "nonzero"
      }
    })])])])]), this.$slots["default"]])]);
  }
});

/***/ }),

/***/ "./src/atoms/components/Checkbox/Checkbox.vue":
/*!****************************************************!*\
  !*** ./src/atoms/components/Checkbox/Checkbox.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Checkbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Checkbox.vue?vue&type=script&lang=js& */ "./src/atoms/components/Checkbox/Checkbox.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns
;



/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _Checkbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
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

/***/ "./src/atoms/components/Checkbox/Checkbox.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./src/atoms/components/Checkbox/Checkbox.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Checkbox.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/atoms/components/Checkbox/Checkbox.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ })

}]);
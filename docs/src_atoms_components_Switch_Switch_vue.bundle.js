"use strict";
(self["webpackChunkvue_rt_style_kit_pages"] = self["webpackChunkvue_rt_style_kit_pages"] || []).push([["src_atoms_components_Switch_Switch_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/atoms/components/Switch/Switch.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/atoms/components/Switch/Switch.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Ripple_Ripple_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Ripple/Ripple.vue */ "./src/atoms/components/Ripple/Ripple.vue");
/* harmony import */ var _Switch_styl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Switch.styl */ "./src/atoms/components/Switch/Switch.styl");


var componentsList = {};
componentsList[_Ripple_Ripple_vue__WEBPACK_IMPORTED_MODULE_0__["default"].name] = _Ripple_Ripple_vue__WEBPACK_IMPORTED_MODULE_0__["default"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "RtSwitch",
  components: componentsList,
  props: {
    isDisabled: {
      type: Boolean,
      "default": false
    },
    //    checkIdAllChecked: {
    //      type: Boolean,
    //      default: false
    //    },
    value: {
      type: String,
      "default": ''
    },
    name: {
      type: String,
      "default": ''
    },
    checked: {
      type: Boolean,
      "default": false
    },
    isOrange: {
      type: Boolean,
      "default": false
    }
  },
  data: function data() {
    return {
      isChecked: false,
      localChecked: false,
      localDisabled: false
    };
  },
  computed: {
    fieldName: function fieldName() {
      return this.name || "input-field__" + this._uid;
    },
    containerClasses: function containerClasses() {
      var classList = 'switch';

      if (this.isOrange) {
        classList += ' switch--orange';
      }

      return classList;
    }
  },
  watch: {
    checked: function checked(newVal, oldVal) {
      if (newVal != oldVal) {
        this.localChecked = newVal;
      }
    },
    isDisabled: function isDisabled(newVal, oldVal) {
      if (newVal != oldVal) {
        this.isDisabled = newVal;
      }
    }
  },
  mounted: function mounted() {
    var _this = this;

    setTimeout(function () {
      _this.setValue();
    }, 0);
    this.bindEvents();
  },
  updated: function updated() {
    this.unbindEvents();
    this.bindEvents();
  },
  beforeDestroy: function beforeDestroy() {
    this.unbindEvents();
  },
  methods: {
    eventChangeListener: function eventChangeListener(event) {
      var _this2 = this;

      setTimeout(function () {
        _this2.$emit("change", event);
      }, 0);
    },
    bindEvents: function bindEvents() {
      var _this3 = this;

      if (this["$listeners"]) {
        Object.keys(this["$listeners"]).map(function (eventName) {
          _this3.$refs.input.addEventListener(eventName, _this3["$listeners"][eventName]);
        });
      }

      this.$on("emittoswitcher", function (data) {
        if (data && data[_this3._uid]) {
          _this3.$el.querySelector(".switch-element").checked = data[_this3._uid]["checked"];
        }
      });
    },
    changeFromParent: function changeFromParent(props) {
      if (props && this.name in props) {
        var propsForItem = props[this.name];

        if (this.value && propsForItem.indexOf(this.value) >= 0) {
          this.$refs.input.checked = true;
          this.isChecked = true;
          this.$emit("changeswitcher", {
            name: this.name,
            value: this.value,
            checked: true,
            _uid: this._uid
          });
          this.showWave();
        } else {
          this.$refs.input.checked = false;
          this.isChecked = false;
        }
      }
    },
    unbindEvents: function unbindEvents() {
      var _this4 = this;

      if (this["_events"]) {
        Object.keys(this["_events"]).map(function (eventName) {
          _this4.$refs.input.removeEventListener(eventName, _this4["_events"][eventName]);
        });
      }

      this.$refs.input.removeEventListener("change", this.eventChangeListener);
    },
    setValue: function setValue() {
      this.localDisabled = Boolean(this.isDisabled);
      this.localChecked = Boolean(this.checked);
    },
    inputHandler: function inputHandler() {
      this.showWave();
      this.localChecked = Boolean(this.$refs.input.checked);
      this.$emit("changeswitcher", {
        name: this.fieldName,
        value: this.value,
        checked: this.localChecked,
        _uid: this._uid
      });
    },
    showWave: function showWave() {
      this.$refs.ripple.startRipple({
        offsetX: 10,
        offsetY: 10
      });
    }
  },
  render: function render(h) {
    return h("label", {
      "class": this.containerClasses
    }, [h("input", {
      "ref": "input",
      "attrs": {
        "disabled": this.localDisabled,
        "name": this.fieldName,
        "type": "checkbox"
      },
      "domProps": {
        "checked": this.localChecked
      },
      "class": "switch-element",
      "on": {
        "change": this.inputHandler
      }
    }), h("div", {
      "class": "switch-container"
    }, [h("div", {
      "class": "switch-container__circle"
    }, [h("rt-ripple", {
      "ref": "ripple",
      "attrs": {
        "not-bind-click": true,
        "not-render": this.isDisabled
      }
    })]), this.$slots["default"]])]);
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/stylus-loader/dist/cjs.js??clonedRuleSet-5[0].rules[0].use[2]!./src/atoms/components/Switch/Switch.styl":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/stylus-loader/dist/cjs.js??clonedRuleSet-5[0].rules[0].use[2]!./src/atoms/components/Switch/Switch.styl ***!
  \********************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".switch {\n  display: inline-block;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.switch .ripple-wave {\n  background-color: #6605c6;\n}\n.switch--orange .switch .ripple-wave {\n  background-color: #d33706;\n}\n.switch-element {\n  display: none;\n}\n.switch-container {\n  padding-top: 4px;\n  padding-left: 49px;\n  position: relative;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.switch-container:before {\n  content: \"\";\n  width: 40px;\n  height: 25px;\n  background-color: rgba(16,24,40,0.2);\n  border-radius: 19px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  -webkit-transition-timing-function: ease-in-out;\n  -moz-transition-timing-function: ease-in-out;\n  -o-transition-timing-function: ease-in-out;\n  -ms-transition-timing-function: ease-in-out;\n  transition-timing-function: ease-in-out;\n  -webkit-transition-duration: 0.1s;\n  -moz-transition-duration: 0.1s;\n  -o-transition-duration: 0.1s;\n  -ms-transition-duration: 0.1s;\n  transition-duration: 0.1s;\n  -webkit-transition-property: background-color;\n  -moz-transition-property: background-color;\n  -o-transition-property: background-color;\n  -ms-transition-property: background-color;\n  transition-property: background-color;\n}\n.rt-dark-theme .switch-container:before {\n  background-color: rgba(227,232,236,0.2);\n}\n.switch-container__circle {\n  content: \"\";\n  width: 19px;\n  height: 19px;\n  background-color: rgba(16,24,40,0.5);\n  border-radius: 50%;\n  position: absolute;\n  top: 3px;\n  left: 3px;\n  -webkit-transition-timing-function: cubic-bezier(1, 0.22, 0.9, 0.65);\n  -moz-transition-timing-function: cubic-bezier(1, 0.22, 0.9, 0.65);\n  -o-transition-timing-function: cubic-bezier(1, 0.22, 0.9, 0.65);\n  -ms-transition-timing-function: cubic-bezier(1, 0.22, 0.9, 0.65);\n  transition-timing-function: cubic-bezier(1, 0.22, 0.9, 0.65);\n  -webkit-transition-duration: 0.1s;\n  -moz-transition-duration: 0.1s;\n  -o-transition-duration: 0.1s;\n  -ms-transition-duration: 0.1s;\n  transition-duration: 0.1s;\n  -webkit-transition-property: margin, background-color;\n  -moz-transition-property: margin, background-color;\n  -o-transition-property: margin, background-color;\n  -ms-transition-property: margin, background-color;\n  transition-property: margin, background-color;\n}\n.rt-dark-theme .switch-container__circle {\n  background-color: #e3e8ec;\n}\n.switch-element:checked+.switch-container:before {\n  background-color: rgba(131,72,252,0.5);\n}\n.switch--orange .switch-element:checked+.switch-container:before {\n  background-color: rgba(255,79,18,0.3);\n}\n.rt-dark-theme .switch--orange .switch-element:checked+.switch-container:before {\n  background-color: rgba(255,130,24,0.2);\n}\n.rt-dark-theme .switch-element:checked+.switch-container:before {\n  background-color: b2c-purple02;\n}\n.switch-element:checked+.switch-container .switch-container__circle {\n  background-color: #70f;\n  margin-left: 15px;\n}\n.switch--orange .switch-element:checked+.switch-container .switch-container__circle {\n  background-color: #ff4f12;\n}\n.switch-element[disabled]+.switch-container {\n  color: #e6e6e6;\n}\n.rt-dark-theme .switch-element[disabled]+.switch-container {\n  opacity: 0.3;\n}\n.switch-element[disabled]+.switch-container:before {\n  background-color: #e3e8ec;\n}\n.switch-element[disabled]+.switch-container__circle {\n  background-color: #e3e8ec;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/atoms/components/Switch/Switch.styl":
/*!*************************************************!*\
  !*** ./src/atoms/components/Switch/Switch.styl ***!
  \*************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_stylus_loader_dist_cjs_js_clonedRuleSet_5_0_rules_0_use_2_Switch_styl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/stylus-loader/dist/cjs.js??clonedRuleSet-5[0].rules[0].use[2]!./Switch.styl */ "./node_modules/css-loader/dist/cjs.js!./node_modules/stylus-loader/dist/cjs.js??clonedRuleSet-5[0].rules[0].use[2]!./src/atoms/components/Switch/Switch.styl");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_stylus_loader_dist_cjs_js_clonedRuleSet_5_0_rules_0_use_2_Switch_styl__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_node_modules_stylus_loader_dist_cjs_js_clonedRuleSet_5_0_rules_0_use_2_Switch_styl__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_node_modules_stylus_loader_dist_cjs_js_clonedRuleSet_5_0_rules_0_use_2_Switch_styl__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_stylus_loader_dist_cjs_js_clonedRuleSet_5_0_rules_0_use_2_Switch_styl__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_stylus_loader_dist_cjs_js_clonedRuleSet_5_0_rules_0_use_2_Switch_styl__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/stylus-loader/dist/cjs.js??clonedRuleSet-5[0].rules[0].use[2]!./Switch.styl */ "./node_modules/css-loader/dist/cjs.js!./node_modules/stylus-loader/dist/cjs.js??clonedRuleSet-5[0].rules[0].use[2]!./src/atoms/components/Switch/Switch.styl",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_node_modules_stylus_loader_dist_cjs_js_clonedRuleSet_5_0_rules_0_use_2_Switch_styl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/stylus-loader/dist/cjs.js??clonedRuleSet-5[0].rules[0].use[2]!./Switch.styl */ "./node_modules/css-loader/dist/cjs.js!./node_modules/stylus-loader/dist/cjs.js??clonedRuleSet-5[0].rules[0].use[2]!./src/atoms/components/Switch/Switch.styl");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_stylus_loader_dist_cjs_js_clonedRuleSet_5_0_rules_0_use_2_Switch_styl__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_stylus_loader_dist_cjs_js_clonedRuleSet_5_0_rules_0_use_2_Switch_styl__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_stylus_loader_dist_cjs_js_clonedRuleSet_5_0_rules_0_use_2_Switch_styl__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_stylus_loader_dist_cjs_js_clonedRuleSet_5_0_rules_0_use_2_Switch_styl__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_node_modules_stylus_loader_dist_cjs_js_clonedRuleSet_5_0_rules_0_use_2_Switch_styl__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_stylus_loader_dist_cjs_js_clonedRuleSet_5_0_rules_0_use_2_Switch_styl__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_stylus_loader_dist_cjs_js_clonedRuleSet_5_0_rules_0_use_2_Switch_styl__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_stylus_loader_dist_cjs_js_clonedRuleSet_5_0_rules_0_use_2_Switch_styl__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/atoms/components/Switch/Switch.vue":
/*!************************************************!*\
  !*** ./src/atoms/components/Switch/Switch.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Switch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Switch.vue?vue&type=script&lang=js& */ "./src/atoms/components/Switch/Switch.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns
;



/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _Switch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
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

/***/ "./src/atoms/components/Switch/Switch.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./src/atoms/components/Switch/Switch.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Switch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Switch.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/atoms/components/Switch/Switch.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Switch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ })

}]);
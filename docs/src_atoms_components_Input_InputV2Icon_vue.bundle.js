"use strict";
(self["webpackChunkvue_rt_style_kit_pages"] = self["webpackChunkvue_rt_style_kit_pages"] || []).push([["src_atoms_components_Input_InputV2Icon_vue"],{

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
"use strict";
(self["webpackChunkvue_rt_style_kit_pages"] = self["webpackChunkvue_rt_style_kit_pages"] || []).push([["src_atoms_components_Checkbox_CheckboxContainer_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/atoms/components/Checkbox/CheckboxContainer.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/atoms/components/Checkbox/CheckboxContainer.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "RtCheckboxContainer",
  props: {
    setPropsOnNotChecked: {
      type: String,
      "default": ''
    }
  },
  data: function data() {
    return {
      index: null,
      checkboxData: {},
      checkboxNamesMap: {}
    };
  },
  beforeDestroy: function beforeDestroy() {},
  mounted: function mounted() {
    this.findAllChildren(this.$children);
  },
  methods: {
    emitSelectedData: function emitSelectedData() {
      var _this = this;

      var responseArray = {};
      Object.keys(this.checkboxData).forEach(function (checkboxDataKey) {
        responseArray[_this.checkboxData[checkboxDataKey].name] = responseArray[_this.checkboxData[checkboxDataKey].name] || [];
        var checkboxDataItem = _this.checkboxData[checkboxDataKey];

        if (checkboxDataItem.checked || _this.setPropsOnNotChecked) {
          if (checkboxDataItem.value.search('#') === -1) {
            if (checkboxDataItem.checked) {
              responseArray[checkboxDataItem.name].push(checkboxDataItem.value);
            } else {
              responseArray[checkboxDataItem.name].push(_this.setPropsOnNotChecked);
            }
          }
        }
      });
      this.$emit('change', responseArray);
    },
    updateCheckboxData: function updateCheckboxData(checkboxData) {
      this.$set(this.checkboxData, checkboxData._uid, {
        name: checkboxData.name,
        value: checkboxData.value,
        checked: checkboxData.checked
      });
      this.emitSelectedData();
    },
    updateAllChildren: function updateAllChildren(props) {
      this.$children.forEach(function (vNode) {
        if ('changeFromParent' in vNode) {
          vNode.changeFromParent(props);
        }
      });
    },
    findAllChildren: function findAllChildren(vNodeArray) {
      var _this2 = this;

      vNodeArray.forEach(function (vNode) {
        if (vNode && vNode.$vnode && vNode.$vnode.tag.search('-RtCheckbox') > 0) {
          vNode.$on('changecheckbox', function (res) {
            _this2.updateCheckboxData(res);
          });
          var swicherDataItem = {
            name: vNode.name,
            value: vNode.value,
            checked: vNode.checked
          };

          _this2.$set(_this2.checkboxData, vNode._uid, swicherDataItem);

          var checkboxNames = _this2.checkboxNamesMap[vNode.name] || [];
          checkboxNames.push(vNode._uid);

          _this2.$set(_this2.checkboxNamesMap, vNode.name, checkboxNames);

          setTimeout(function () {
            _this2.emitSelectedData();
          }, 1000);
        }

        if (vNode.$children) {
          _this2.findAllChildren(vNode.$children);
        }
      });
    }
  },
  render: function render(h) {
    return h("div", {
      "class": "d-static"
    }, [this.$slots["default"]]);
  }
});

/***/ }),

/***/ "./src/atoms/components/Checkbox/CheckboxContainer.vue":
/*!*************************************************************!*\
  !*** ./src/atoms/components/Checkbox/CheckboxContainer.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CheckboxContainer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CheckboxContainer.vue?vue&type=script&lang=js& */ "./src/atoms/components/Checkbox/CheckboxContainer.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns
;



/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _CheckboxContainer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
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

/***/ "./src/atoms/components/Checkbox/CheckboxContainer.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./src/atoms/components/Checkbox/CheckboxContainer.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckboxContainer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CheckboxContainer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/atoms/components/Checkbox/CheckboxContainer.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckboxContainer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ })

}]);
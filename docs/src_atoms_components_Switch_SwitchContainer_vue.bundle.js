"use strict";
(self["webpackChunkvue_rt_style_kit_pages"] = self["webpackChunkvue_rt_style_kit_pages"] || []).push([["src_atoms_components_Switch_SwitchContainer_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/atoms/components/Switch/SwitchContainer.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/atoms/components/Switch/SwitchContainer.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "RtSwitchContainer",
  props: {
    setPropsOnNotChecked: {
      type: String,
      "default": ''
    }
  },
  data: function data() {
    return {
      index: null,
      switcherData: {},
      switcherNamesMap: {}
    };
  },
  updated: function updated() {},
  beforeDestroy: function beforeDestroy() {},
  mounted: function mounted() {
    this.findAllChildren(this.$children);
  },
  methods: {
    emitToAllChildren: function emitToAllChildren(vNodeArray, event) {
      var _this = this;

      vNodeArray.forEach(function (vNode) {
        if (vNode && vNode.$vnode && vNode.$vnode.tag.search('-RtSwitch') > 0) {
          vNode.$emit('emittoswitcher', event);
        }

        if (vNode.$children) {
          _this.emitToAllChildren(vNode.$children, event);
        }
      });
    },
    emitSelectedData: function emitSelectedData() {
      var _this2 = this;

      var responseArray = {};
      Object.keys(this.switcherData).forEach(function (switcherDataKey) {
        responseArray[_this2.switcherData[switcherDataKey].name] = responseArray[_this2.switcherData[switcherDataKey].name] || [];
        var switcherDataItem = _this2.switcherData[switcherDataKey];

        if (switcherDataItem.checked || _this2.setPropsOnNotChecked) {
          if (switcherDataItem.value.search('#') === -1) {
            if (switcherDataItem.checked) {
              responseArray[switcherDataItem.name].push(switcherDataItem.value);
            } else {
              responseArray[switcherDataItem.name].push(_this2.setPropsOnNotChecked);
            }
          }
        }
      });
      this.$emit('change', responseArray);
    },
    updateAllChildren: function updateAllChildren(props) {
      this.$children.forEach(function (vNode) {
        if ('changeFromParent' in vNode) {
          vNode.changeFromParent(props);
        }
      });
    },
    updateSwitcherData: function updateSwitcherData(switcherData) {
      var _this3 = this;

      this.$set(this.switcherData, switcherData._uid, {
        name: switcherData.name,
        value: switcherData.value,
        checked: switcherData.checked
      });

      if (switcherData.value === '#allparams' && switcherData.checked) {
        this.switcherNamesMap[switcherData.name].forEach(function (uid) {
          _this3.$set(_this3.switcherData[uid], 'checked', true);
        });
        this.emitToAllChildren(this.$children, this.switcherData);
      } else {
        if (switcherData.value !== '#allparams' && !switcherData.checked) {
          this.switcherNamesMap[switcherData.name].forEach(function (uid) {
            if (_this3.switcherData[uid].value === '#allparams') {
              _this3.$set(_this3.switcherData[uid], 'checked', false);

              var req = {};
              req[uid] = _this3.switcherData[uid];

              _this3.emitToAllChildren(_this3.$children, req);

              return false;
            }
          });
        }
      }

      this.emitSelectedData();
    },
    findAllChildren: function findAllChildren(vNodeArray) {
      var _this4 = this;

      vNodeArray.forEach(function (vNode) {
        if (vNode && vNode.$vnode && vNode.$vnode.tag.search('-RtSwitch') > 0) {
          vNode.$on('changeswitcher', function (res) {
            _this4.updateSwitcherData(res);
          });
          var swicherDataItem = {
            name: vNode.fieldName,
            value: vNode.value,
            checked: vNode.checked
          };

          _this4.$set(_this4.switcherData, vNode._uid, swicherDataItem);

          var switcherNames = _this4.switcherNamesMap[vNode.fieldName] || [];
          switcherNames.push(vNode._uid);

          _this4.$set(_this4.switcherNamesMap, vNode.fieldName, switcherNames);

          setTimeout(function () {
            _this4.emitSelectedData();
          }, 1000);
        }

        if (vNode.$children) {
          _this4.findAllChildren(vNode.$children);
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

/***/ "./src/atoms/components/Switch/SwitchContainer.vue":
/*!*********************************************************!*\
  !*** ./src/atoms/components/Switch/SwitchContainer.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SwitchContainer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SwitchContainer.vue?vue&type=script&lang=js& */ "./src/atoms/components/Switch/SwitchContainer.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns
;



/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _SwitchContainer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
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

/***/ "./src/atoms/components/Switch/SwitchContainer.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./src/atoms/components/Switch/SwitchContainer.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SwitchContainer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SwitchContainer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/atoms/components/Switch/SwitchContainer.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SwitchContainer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ })

}]);
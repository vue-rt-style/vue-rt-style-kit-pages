(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[53],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/example-pages/components/main/SpaceClassElements.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/example-pages/components/main/SpaceClassElements.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_rt_style_kit_atoms_local_variables_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue-rt-style-kit-atoms-local/variables.json */ "./src/atoms/variables.json");
var _vue_rt_style_kit_atoms_local_variables_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! @vue-rt-style-kit-atoms-local/variables.json */ "./src/atoms/variables.json", 1);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var componentsList = {};

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "AppGridElements",
  components: componentsList,
  data: function data() {
    return {
      variables: _vue_rt_style_kit_atoms_local_variables_json__WEBPACK_IMPORTED_MODULE_0__,
      largeeJson: {
        items: []
      },
      json: {
        items: []
      },
      tabletJson: {
        items: []
      },
      mobileJson: {
        items: []
      }
    };
  },
  mounted: function mounted() {
    var _this = this;

    var cssMapRules = {
      'padding-top': [1, 0, 0, 0, 0, 1],
      'padding-bottom': [0, 1, 0, 0, 0, 1],
      'padding-left': [0, 0, 1, 0, 1, 0],
      'padding-right': [0, 0, 0, 1, 1, 0]
    };
    ['lg', null, 'td', 'md'].forEach(function ($type) {
      new Array(6).fill(null).map(function (i, index) {
        return index;
      }).forEach(function ($i) {
        new Array(5).fill(null).map(function (i, index) {
          return index;
        }).forEach(function ($j) {
          ['t', 'b', 'l', 'r', 'h', 'v'].forEach(function (direction, directionIndex) {
            var className = ['sp'];

            if ($i + $j == 0 || $i > 0) {
              className.push(direction);

              if ($i + $j == 0) {
                className.push('none');
              } else {
                className.push($i);

                if ($j > 0) {
                  className.push($j);
                }

                switch (direction) {
                  case 't':
                    break;

                  case 'b':
                    break;

                  case 'l':
                    break;

                  case 'l':
                    break;
                }
              }

              if ($type) {
                className.unshift($type);
              }

              var cssRules = [];
              var value = $i * 20 + $j * 4 + 'px';
              Object.keys(cssMapRules).map(function (key) {
                if (cssMapRules[key][directionIndex]) {
                  cssRules.push('`' + [key, value].join(':') + '`');
                }
              });
              var data = {
                version: "0.3.15",
                name: '.' + className.join('-'),
                description: cssRules.join(' \n')
              };

              switch ($type) {
                case 'lg':
                  _this.largeeJson.items.push(data);

                  break;

                case 'td':
                  _this.tabletJson.items.push(data);

                  break;

                case 'md':
                  _this.mobileJson.items.push(data);

                  break;

                default:
                  _this.json.items.push(data);

              } // console.info(className.join('-'))
              // version: " \>= 0.0.17",
              //     name: ".rt-md-space-top-none",
              //     description: "*for mobile* \n\n```padding-top: 0px```"

            }
          });
        });
      });
    });
  },
  created: function created() {},
  methods: {}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/example-pages/components/main/SpaceClassElements.vue?vue&type=template&id=7f33c0d7&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/example-pages/components/main/SpaceClassElements.vue?vue&type=template&id=7f33c0d7& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"rt-container"},[_c('div',{staticClass:"app-content rt-col-12 rt-col-md-3"},[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"app-body rt-space-top25"},[_c('div',{staticClass:"rt-col-12"},[_c('rt-tabs',[_c('template',{slot:"navigation"},[_c('rt-tabs-nav-item',{attrs:{"name":"lg"}},[_vm._v("\n              Large devices\n            ")]),_vm._v(" "),_c('rt-tabs-nav-item',{attrs:{"active-tab":true,"name":"all"}},[_vm._v("\n              All devices\n            ")]),_vm._v(" "),_c('rt-tabs-nav-item',{attrs:{"name":"tablet"}},[_vm._v("\n              Tablet devices\n            ")]),_vm._v(" "),_c('rt-tabs-nav-item',{attrs:{"name":"mobile"}},[_vm._v("\n              Mobile devices\n            ")])],1),_vm._v(" "),_c('template',{slot:"content"},[_c('rt-tabs-content-item',{attrs:{"name":"lg"}},[_c('documentation-builder',{attrs:{"json":_vm.largeeJson,"type":"classStyle","label":'min-width: '+_vm.variables['laptop-upper-limit']}})],1),_vm._v(" "),_c('rt-tabs-content-item',{attrs:{"name":"all"}},[_c('documentation-builder',{attrs:{"json":_vm.json,"type":"classStyle","label":"all width"}})],1),_vm._v(" "),_c('rt-tabs-content-item',{attrs:{"name":"tablet"}},[_c('documentation-builder',{attrs:{"label":'max-width: ' + _vm.variables['tablet-upper-limit'],"json":_vm.tabletJson,"type":"classStyle"}})],1),_vm._v(" "),_c('rt-tabs-content-item',{attrs:{"name":"mobile"}},[_c('documentation-builder',{attrs:{"label":'max-width: ' + _vm.variables['mobile-upper-limit'],"json":_vm.mobileJson,"type":"classStyle"}})],1)],1)],2)],1)])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"app-title"},[_c('div',{staticClass:"row"},[_c('h1',{staticClass:"rt-font-hero rt-col"},[_vm._v("\n          Space class elements\n        ")])])])}]



/***/ }),

/***/ "./src/example-pages/components/main/SpaceClassElements.vue":
/*!******************************************************************!*\
  !*** ./src/example-pages/components/main/SpaceClassElements.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SpaceClassElements_vue_vue_type_template_id_7f33c0d7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SpaceClassElements.vue?vue&type=template&id=7f33c0d7& */ "./src/example-pages/components/main/SpaceClassElements.vue?vue&type=template&id=7f33c0d7&");
/* harmony import */ var _SpaceClassElements_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SpaceClassElements.vue?vue&type=script&lang=js& */ "./src/example-pages/components/main/SpaceClassElements.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SpaceClassElements_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SpaceClassElements_vue_vue_type_template_id_7f33c0d7___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SpaceClassElements_vue_vue_type_template_id_7f33c0d7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/example-pages/components/main/SpaceClassElements.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./src/example-pages/components/main/SpaceClassElements.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SpaceClassElements_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./SpaceClassElements.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/example-pages/components/main/SpaceClassElements.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SpaceClassElements_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/example-pages/components/main/SpaceClassElements.vue?vue&type=template&id=7f33c0d7&":
/*!*************************************************************************************************!*\
  !*** ./src/example-pages/components/main/SpaceClassElements.vue?vue&type=template&id=7f33c0d7& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SpaceClassElements_vue_vue_type_template_id_7f33c0d7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./SpaceClassElements.vue?vue&type=template&id=7f33c0d7& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/example-pages/components/main/SpaceClassElements.vue?vue&type=template&id=7f33c0d7&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SpaceClassElements_vue_vue_type_template_id_7f33c0d7___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SpaceClassElements_vue_vue_type_template_id_7f33c0d7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
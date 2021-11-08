"use strict";
(self["webpackChunkvue_rt_style_kit_pages"] = self["webpackChunkvue_rt_style_kit_pages"] || []).push([["src_atoms_components_Hint_Hint_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/atoms/components/Hint/Hint.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/atoms/components/Hint/Hint.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _variables_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../variables.json */ "./src/atoms/variables.json");
/* harmony import */ var debounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! debounce */ "./node_modules/debounce/index.js");
/* harmony import */ var debounce__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(debounce__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _HintStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HintStore */ "./src/atoms/components/Hint/HintStore.js");
/* harmony import */ var _Hint_styl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Hint.styl */ "./src/atoms/components/Hint/Hint.styl");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "RtHint",
  props: {
    simpleToolTip: {
      type: Boolean,
      "default": false
    },
    confirmation: {
      type: Boolean,
      "default": false
    },
    confirmationPassed: {
      type: Boolean,
      "default": false
    }
  },
  data: function data() {
    return {
      styleWidth: '',
      isSmall: false,
      posBottom: false,
      classList: '',
      isDesktop: false,
      hintText: ''
    };
  },
  computed: {
    hintClass: function hintClass() {
      var className = 'rtb-hint';

      if (this.simpleToolTip) {
        className += ' rtb-hint--tooltip';
      }

      if (this.confirmation) {
        if (this.confirmationPassed) {
          className += ' rtb-hint--confirmed';
        } else {
          className += ' rtb-hint--denied';
        }
      }

      return className;
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.determineDeviceType();
    this.calcTextLength();
    _HintStore__WEBPACK_IMPORTED_MODULE_2__.hintStore.initStore(this._uid, this.hintText);
    window.addEventListener('resize', debounce__WEBPACK_IMPORTED_MODULE_1___default()(this.determineDeviceType, 35));
    window.addEventListener('scroll', function () {
      _this.hideHint();
    });
  },
  created: function created() {},
  methods: {
    showHint: function showHint($event) {
      if (_HintStore__WEBPACK_IMPORTED_MODULE_2__.hintStore.getHintData().hovered && $event.type === 'click') {
        this.hideHint();
      } else {
        this.$nextTick(this.pushCoords());
      }
    },
    hideHint: function hideHint() {
      _HintStore__WEBPACK_IMPORTED_MODULE_2__.hintStore.setActive(this._uid, null, false);
    },
    pushCoords: function pushCoords() {
      var coords = {};
      var el = this.$el;
      coords.x = el.getBoundingClientRect().left;
      coords.y = el.getBoundingClientRect().top;
      _HintStore__WEBPACK_IMPORTED_MODULE_2__.hintStore.setActive(this._uid, coords, true);
    },
    determineDeviceType: function determineDeviceType() {
      this.isDesktop = window.innerWidth > parseInt(_variables_json__WEBPACK_IMPORTED_MODULE_0__["tablet-upper-limit"]);
    },
    calcTextLength: function calcTextLength() {
      this.hintText = this.$slots["default"][0].text.replace(/\s+/g, ' ').trim().slice(0, 120);
    }
  },
  render: function render(h) {
    var _this2 = this;

    var toolTipType = function toolTipType() {
      if (_this2.simpleToolTip) {
        return h("span", ["?"]);
      }

      if (_this2.confirmation) {
        if (_this2.confirmationPassed) {
          return h("svg", {
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
          }, [h("circle", {
            "attrs": {
              "fill": "#57D9B7",
              "cx": "10",
              "cy": "10",
              "r": "10"
            }
          }), h("path", {
            "attrs": {
              "stroke": "#FFF",
              "stroke-width": "2",
              "d": "M5 10l3.793 3L16 7"
            }
          })])]);
        } else {
          return h("svg", {
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
          }, [h("circle", {
            "attrs": {
              "fill": "#FF0C0C",
              "cx": "10",
              "cy": "10",
              "r": "10"
            }
          }), h("path", {
            "attrs": {
              "d": "M10 10.207l-4.51 4.51 4.51-4.51 4.51 4.51-4.51-4.51zm0 0L14.207 6 10 10.207 5.793 6 10 10.207z",
              "stroke": "#FFF",
              "stroke-width": "2"
            }
          })])]);
        }
      }
    };

    if (this.isDesktop) {
      return h("div", {
        "class": this.hintClass,
        "ref": "hintBody"
      }, [h("div", {
        "class": "rtb-hint__icon",
        "on": {
          "mouseenter": this.showHint,
          "mouseleave": this.hideHint
        }
      }, [toolTipType()])]);
    } else {
      return h("div", {
        "class": this.hintClass,
        "ref": "hintBody"
      }, [h("div", {
        "class": "rtb-hint__icon",
        "on": {
          "mouseleave": this.hideHint,
          "click": this.showHint
        }
      }, [toolTipType()])]);
    }
  }
});

/***/ }),

/***/ "./src/atoms/components/Hint/HintStore.js":
/*!************************************************!*\
  !*** ./src/atoms/components/Hint/HintStore.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hintStore": () => (/* binding */ hintStore)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var hints = {};
var activeHint = {};
var watchers = {};

var initStore = function initStore(uid, textContent) {
  hints[uid] = textContent;
};

var setActive = function setActive(uid, coords, hovered) {
  if (activeHint.id === uid && activeHint.hovered === hovered) return;
  activeHint.id = uid;
  activeHint.coords = coords;
  activeHint.hovered = hovered;
  runWatchers();
};

var getHintData = function getHintData() {
  return _objectSpread({
    text: hints[activeHint.id]
  }, activeHint);
};

var addWatcher = function addWatcher(id, fn) {
  watchers[id] = fn;
};

var runWatchers = function runWatchers() {
  Object.keys(watchers).forEach(function (id) {
    watchers[id]();
  });
};

var hintStore = vue__WEBPACK_IMPORTED_MODULE_0__["default"].observable({
  initStore: initStore,
  setActive: setActive,
  getHintData: getHintData,
  addWatcher: addWatcher
});

/***/ }),

/***/ "./src/atoms/components/Hint/Hint.vue":
/*!********************************************!*\
  !*** ./src/atoms/components/Hint/Hint.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Hint_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Hint.vue?vue&type=script&lang=js& */ "./src/atoms/components/Hint/Hint.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns
;



/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _Hint_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
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

/***/ "./src/atoms/components/Hint/Hint.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./src/atoms/components/Hint/Hint.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Hint_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Hint.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/atoms/components/Hint/Hint.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Hint_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ })

}]);
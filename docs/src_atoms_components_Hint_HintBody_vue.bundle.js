"use strict";
(self["webpackChunkvue_rt_style_kit_pages"] = self["webpackChunkvue_rt_style_kit_pages"] || []).push([["src_atoms_components_Hint_HintBody_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/atoms/components/Hint/HintBody.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/atoms/components/Hint/HintBody.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _variables_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../variables.json */ "./src/atoms/variables.json");
/* harmony import */ var debounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! debounce */ "./node_modules/debounce/index.js");
/* harmony import */ var debounce__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(debounce__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _HintStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HintStore */ "./src/atoms/components/Hint/HintStore.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "RtHintBody",
  props: {},
  data: function data() {
    return {
      active: false,
      styleWidth: '',
      isSmall: false,
      posBottom: false,
      classList: '',
      isDesktop: false,
      textContent: '',
      activeUid: null,
      posLeft: '',
      posTop: '',
      isHovered: false
    };
  },
  computed: {
    hintTextClass: function hintTextClass() {
      var className = 'rtb-hint__text';

      if (this.isSmall) {
        className += ' rtb-hint__text--small';
      }

      return className;
    }
  },
  mounted: function mounted() {
    var _this = this;

    _HintStore__WEBPACK_IMPORTED_MODULE_2__.hintStore.addWatcher(this._uid, function () {
      _this.getActiveUid();
    });
    window.addEventListener('resize', debounce__WEBPACK_IMPORTED_MODULE_1___default()(this.calcWidth, 35));
    window.addEventListener('resize', debounce__WEBPACK_IMPORTED_MODULE_1___default()(this.countTextPos, 35));
    window.addEventListener('scroll', this.hideHint);

    if (!this.isDesktop) {
      window.addEventListener('touchstart', this.hideHint, false);
    }
  },
  created: function created() {},
  methods: {
    showHint: function showHint() {
      var _this2 = this;

      this.calcWidth();
      setTimeout(function () {
        _this2.active = true;
      }, 15);
    },
    hideHint: function hideHint() {
      var _this3 = this;

      setTimeout(function () {
        _this3.active = false;
      }, 15);
    },
    setHovered: function setHovered() {
      this.isHovered = true;
    },
    removeHovered: function removeHovered() {
      this.isHovered = false;
      !_HintStore__WEBPACK_IMPORTED_MODULE_2__.hintStore.getHintData().hovered ? this.hideHint() : false;
    },
    getActiveUid: function getActiveUid() {
      if (this.textContent != _HintStore__WEBPACK_IMPORTED_MODULE_2__.hintStore.getHintData().text) {
        this.textContent = _HintStore__WEBPACK_IMPORTED_MODULE_2__.hintStore.getHintData().text;
      }

      if (_HintStore__WEBPACK_IMPORTED_MODULE_2__.hintStore.getHintData().hovered) {
        this.posLeft = window.innerWidth <= parseInt(_variables_json__WEBPACK_IMPORTED_MODULE_0__["mobile-upper-limit"]) && !this.isSmall ? 20 : _HintStore__WEBPACK_IMPORTED_MODULE_2__.hintStore.getHintData().coords.x;
        this.posTop = _HintStore__WEBPACK_IMPORTED_MODULE_2__.hintStore.getHintData().coords.y;
        this.countTextPos();
      }

      if (!_HintStore__WEBPACK_IMPORTED_MODULE_2__.hintStore.getHintData().hovered && !this.isHovered) this.hideHint();else this.showHint();
    },
    calcWidth: function calcWidth() {
      var el = document.querySelector('.rt-container');
      var styles = window.getComputedStyle(el);
      var contWidth = +styles.width.slice(0, -2) - (+styles.paddingLeft.slice(0, -2) + +styles.paddingRight.slice(0, -2));
      var hintWidth;

      if (window.innerWidth <= parseInt(_variables_json__WEBPACK_IMPORTED_MODULE_0__["mobile-upper-limit"])) {
        hintWidth = contWidth - 20;
      } else if (window.innerWidth <= parseInt(_variables_json__WEBPACK_IMPORTED_MODULE_0__["tablet-upper-limit"])) {
        hintWidth = contWidth / 2 - 20;
      } else {
        hintWidth = contWidth / 4 - 20;
      }

      if (this.textContent && this.textContent.length <= 30) {
        this.isSmall = true;
        this.styleWidth = 'width: max-content';
      } else {
        this.isSmall = false;
        this.styleWidth = 'width: ' + hintWidth + 'px';
      }
    },
    countTextPos: function countTextPos() {
      var _this4 = this;

      var classBuilder = '-';
      this.classList = '';

      if (_HintStore__WEBPACK_IMPORTED_MODULE_2__.hintStore.getHintData().coords) {
        this.posBottom = !(_HintStore__WEBPACK_IMPORTED_MODULE_2__.hintStore.getHintData().coords.y > 140);

        if (!this.posBottom) {
          classBuilder += '-top';
        } else {
          classBuilder += '-bottom';
        }

        if (window.innerWidth > parseInt(_variables_json__WEBPACK_IMPORTED_MODULE_0__["mobile-upper-limit"])) {
          if (_HintStore__WEBPACK_IMPORTED_MODULE_2__.hintStore.getHintData().coords.x > window.innerWidth - window.innerWidth / 5) {
            classBuilder += '-left';
          } else if (_HintStore__WEBPACK_IMPORTED_MODULE_2__.hintStore.getHintData().coords.x < window.innerWidth / 5) {
            classBuilder += '-right';
          }
        } else {
          if (!this.isSmall) {
            setTimeout(function () {
              if (_this4.$refs.hintText) {
                var val = _HintStore__WEBPACK_IMPORTED_MODULE_2__.hintStore.getHintData().coords.x - 20;
                _this4.$refs.textArrow.style.right = 'auto';
                _this4.$refs.textArrow.style.left = val + 'px';
              }
            }, 1);
          } else {
            if (_HintStore__WEBPACK_IMPORTED_MODULE_2__.hintStore.getHintData().coords.x > window.innerWidth - window.innerWidth / 3) {
              classBuilder += '-left';
            } else if (_HintStore__WEBPACK_IMPORTED_MODULE_2__.hintStore.getHintData().coords.x < window.innerWidth / 3) {
              classBuilder += '-right';
            }
          }
        }

        this.classList = ' rtb-hint__text' + classBuilder;
      }
    }
  },
  render: function render(h) {
    if (this.active) {
      return h("div", {
        "class": this.hintTextClass + this.classList,
        "style": this.styleWidth + ";left:" + this.posLeft + "px;top:" + this.posTop + "px",
        "ref": "hintText",
        "on": {
          "mouseenter": this.setHovered,
          "mouseleave": this.removeHovered
        }
      }, [this.textContent, h("div", {
        "class": "rtb-hint__text-triangle",
        "ref": "textArrow"
      })]);
    } else {
      return null;
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

/***/ "./src/atoms/components/Hint/HintBody.vue":
/*!************************************************!*\
  !*** ./src/atoms/components/Hint/HintBody.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _HintBody_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HintBody.vue?vue&type=script&lang=js& */ "./src/atoms/components/Hint/HintBody.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns
;



/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _HintBody_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
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

/***/ "./src/atoms/components/Hint/HintBody.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./src/atoms/components/Hint/HintBody.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_HintBody_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./HintBody.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/atoms/components/Hint/HintBody.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_HintBody_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ })

}]);
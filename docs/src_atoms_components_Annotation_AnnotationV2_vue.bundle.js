"use strict";
(self["webpackChunkvue_rt_style_kit_pages"] = self["webpackChunkvue_rt_style_kit_pages"] || []).push([["src_atoms_components_Annotation_AnnotationV2_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/atoms/components/Annotation/AnnotationV2.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/atoms/components/Annotation/AnnotationV2.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Annotation_styl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Annotation.styl */ "./src/atoms/components/Annotation/Annotation.styl");
/* harmony import */ var _AnnotationStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AnnotationStore */ "./src/atoms/components/Annotation/AnnotationStore.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "RtAnnotationV2",
  components: {},
  props: {
    open: {
      type: Boolean,
      "default": false
    },
    hash: {
      type: String,
      "default": ''
    },
    label: {
      type: String,
      "default": ''
    },
    gaLabel: {
      type: String,
      "default": ''
    },
    hasWhiteColor: {
      type: Boolean,
      "default": false
    },
    titleFontClass: {
      type: String,
      "default": 'rt-font-paragraph'
    },
    scrollTimeout: {
      type: Number,
      "default": 0
    },
    smallGap: {
      type: Boolean,
      "default": false
    },
    reversed: {
      type: Boolean,
      "default": false
    },
    color: {
      type: String,
      "default": ''
    }
  },
  data: function data() {
    return {
      isOpen: this.open
    };
  },
  watch: {
    isOpen: function isOpen(newVal) {
      if (newVal) {
        this.$refs.content.style.maxHeight = parseInt(getComputedStyle(this.$refs.contentHeightResolver).height, 10) + 20 + 'px';
      } else {
        this.$refs.content.style.maxHeight = 0;
      }
    }
  },
  computed: {
    annotationClasses: function annotationClasses() {
      var classList = ['rt-annotation', 'rt-annotation-v2'];

      if (this.hasWhiteColor) {
        classList.push('rt-annotation--white-color');
      }

      if (this.isOpen) {
        classList.push('rt-annotation--is-open');
      }

      if (this.smallGap) {
        classList.push('rt-annotation-v2--small-gap');
      }

      if (this.reversed) {
        classList.push('rt-annotation-v2--reversed');
      }

      return classList.join(' ');
    },
    labelClasses: function labelClasses() {
      var classList = this.titleFontClass.split(' ');
      classList.push('rt-annotation__title');
      classList.push('rt-annotation-v2__title');

      if (this.color) {
        classList.push('color--' + this.color);
      }

      return classList.join(' ');
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.checkHash();
    _AnnotationStore__WEBPACK_IMPORTED_MODULE_1__.AnnotationStore.initStore(this._uid, this.isOpen);

    if (this.isOpen) {
      _AnnotationStore__WEBPACK_IMPORTED_MODULE_1__.AnnotationStore.setActive(this._uid);
      this.$refs.content.style.maxHeight = parseInt(getComputedStyle(this.$refs.contentHeightResolver).height, 10) + 20 + 'px';
    }

    _AnnotationStore__WEBPACK_IMPORTED_MODULE_1__.AnnotationStore.addWatcher(this._uid, function () {
      _this.closeOutside();
    });
  },
  beforeDestroy: function beforeDestroy() {
    _AnnotationStore__WEBPACK_IMPORTED_MODULE_1__.AnnotationStore.removeWatcher(this._uid);
    _AnnotationStore__WEBPACK_IMPORTED_MODULE_1__.AnnotationStore.clearStore(this._uid);
  },
  methods: {
    checkHash: function checkHash() {
      var _this2 = this;

      if (this.hash.length > 0) {
        var hash = __webpack_require__.g.location.hash.replace('#', '');

        if ((hash === null || hash === void 0 ? void 0 : hash.length) > 0 && hash == this.hash) {
          this.isOpen = true;
          setTimeout(function () {
            window.scrollTo(0, _this2.$el.offsetTop);
          }, this.scrollTimeout - 0);
        }
      }
    },
    toggleOpen: function toggleOpen() {
      if (_AnnotationStore__WEBPACK_IMPORTED_MODULE_1__.AnnotationStore.getActive() != this._uid) {
        _AnnotationStore__WEBPACK_IMPORTED_MODULE_1__.AnnotationStore.setActive(this._uid);
        this.isOpen = true;
        this.$emit('toggleAnnotation', this.isOpen);
      } else {
        _AnnotationStore__WEBPACK_IMPORTED_MODULE_1__.AnnotationStore.setActive(null);
        this.isOpen = false;
      }
    },
    closeOutside: function closeOutside() {
      if (_AnnotationStore__WEBPACK_IMPORTED_MODULE_1__.AnnotationStore.getActive() != this._uid) {
        this.isOpen = false;
      }
    }
  },
  render: function render(h) {
    var _this3 = this;

    var title = function title() {
      return _this3.label || _this3.$slots.label;
    };

    return h("div", {
      "class": this.annotationClasses
    }, [h("p", {
      "class": this.labelClasses,
      "on": {
        "click": this.toggleOpen
      },
      "attrs": {
        "button": this.gaLabel
      }
    }, [title(), h("svg", {
      "class": "rt-annotation__arrow",
      "attrs": {
        "width": "12px",
        "height": "7px",
        "viewBox": "0 0 12 7",
        "xmlns": "http://www.w3.org/2000/svg"
      }
    }, [h("g", {
      "attrs": {
        "transform": "translate(0.000000, -9.000000)",
        "stroke-width": "1"
      }
    }, [h("polygon", {
      "attrs": {
        "points": "10.6 9 6 13.3513514 1.4 9 0 10.3243243 6 16 12 10.3243243"
      }
    })])])]), h("div", {
      "class": "rt-annotation__content",
      "ref": "content"
    }, [h("div", {
      "ref": "contentHeightResolver",
      "class": "rt-annotation__content-height-resolver"
    }, [this.$slots.content])])]);
  }
});

/***/ }),

/***/ "./src/atoms/components/Annotation/AnnotationStore.js":
/*!************************************************************!*\
  !*** ./src/atoms/components/Annotation/AnnotationStore.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnnotationStore": () => (/* binding */ AnnotationStore)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");

var annotations = [];
var activeAnnotationID = null;
var watchers = {};

var initStore = function initStore(uid, isOpened) {
  annotations[uid] = {
    isOpened: isOpened
  };
};

var setActive = function setActive(uid) {
  if (activeAnnotationID === uid) return;
  activeAnnotationID = uid;
  runWatchers();
};

var getActive = function getActive() {
  return activeAnnotationID;
};

var addWatcher = function addWatcher(id, fn) {
  if (annotations[id]) {
    watchers[id] = fn;
  }
};

var removeWatcher = function removeWatcher(id) {
  delete watchers[id];
};

var clearStore = function clearStore(id) {
  delete annotations[id];
};

var runWatchers = function runWatchers() {
  Object.keys(watchers).forEach(function (id) {
    watchers[id]();
  });
};

var AnnotationStore = vue__WEBPACK_IMPORTED_MODULE_0__["default"].observable({
  initStore: initStore,
  setActive: setActive,
  addWatcher: addWatcher,
  getActive: getActive,
  removeWatcher: removeWatcher,
  clearStore: clearStore
});

/***/ }),

/***/ "./src/atoms/components/Annotation/AnnotationV2.vue":
/*!**********************************************************!*\
  !*** ./src/atoms/components/Annotation/AnnotationV2.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AnnotationV2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AnnotationV2.vue?vue&type=script&lang=js& */ "./src/atoms/components/Annotation/AnnotationV2.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns
;



/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _AnnotationV2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
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

/***/ "./src/atoms/components/Annotation/AnnotationV2.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./src/atoms/components/Annotation/AnnotationV2.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AnnotationV2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AnnotationV2.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/atoms/components/Annotation/AnnotationV2.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AnnotationV2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ })

}]);
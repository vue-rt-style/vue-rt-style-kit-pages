"use strict";
(self["webpackChunkvue_rt_style_kit_pages"] = self["webpackChunkvue_rt_style_kit_pages"] || []).push([["src_atoms_components_Annotation_Annotation_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/atoms/components/Annotation/Annotation.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/atoms/components/Annotation/Annotation.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Annotation_styl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Annotation.styl */ "./src/atoms/components/Annotation/Annotation.styl");
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "RtAnnotation",
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
      "default": null
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
    v2: {
      type: Boolean,
      "default": false
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
      "default": 'black-main'
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
        this.$refs.content.style.maxHeight = parseInt(getComputedStyle(this.$refs.contentHeightResolver).height, 10) + 10 + 'px';
      } else {
        this.$refs.content.style.maxHeight = 0;
      }
    }
  },
  computed: {
    annotationClasses: function annotationClasses() {
      var classList = ['rt-annotation'];

      if (this.hasWhiteColor) {
        classList.push('rt-annotation--white-color');
      }

      if (this.isOpen) {
        classList.push('rt-annotation--is-open');
      }

      return classList.join(' ');
    },
    labelClasses: function labelClasses() {
      var classList = this.titleFontClass.split(' ');
      classList.push('rt-annotation__title');
      return classList.join(' ');
    }
  },
  mounted: function mounted() {
    this.checkHash();
  },
  created: function created() {},
  methods: {
    checkHash: function checkHash() {
      var _this = this;

      if (this.hash.length > 0) {
        var hash = __webpack_require__.g.location.hash.replace('#', '');

        if ((hash === null || hash === void 0 ? void 0 : hash.length) > 0 && hash == this.hash) {
          this.isOpen = true;
          setTimeout(function () {
            window.scrollTo(0, _this.$el.offsetTop);
          }, this.scrollTimeout - 0);
        }
      }
    },
    toggleOpen: function toggleOpen() {
      this.isOpen = !this.isOpen;
      this.$emit('toggleAnnotation', this.isOpen);
    }
  },
  render: function render(h) {
    if (this.v2) {
      return h("rt-annotation-v2", {
        "attrs": {
          "label": this.label,
          "open": this.open,
          "hash": this.hash,
          "hasWhiteColor": this.hasWhiteColor,
          "titleFontClass": this.titleFontClass,
          "scrollTimeout": this.scrollTimeout,
          "smallGap": this.smallGap,
          "reversed": this.reversed,
          "color": this.color
        }
      }, [h("template", {
        "slot": "label"
      }, [this.$slots.label]), h("template", {
        "slot": "content"
      }, [this.$slots.content])]);
    } else {
      return h("div", {
        "class": this.annotationClasses
      }, [h("p", {
        "class": this.labelClasses,
        "on": {
          "click": this.toggleOpen
        }
      }, [this.label, h("svg", {
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
  }
});

/***/ }),

/***/ "./src/atoms/components/Annotation/Annotation.vue":
/*!********************************************************!*\
  !*** ./src/atoms/components/Annotation/Annotation.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Annotation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Annotation.vue?vue&type=script&lang=js& */ "./src/atoms/components/Annotation/Annotation.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns
;



/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _Annotation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
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

/***/ "./src/atoms/components/Annotation/Annotation.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./src/atoms/components/Annotation/Annotation.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Annotation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Annotation.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/atoms/components/Annotation/Annotation.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Annotation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ })

}]);
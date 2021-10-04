"use strict";
(self["webpackChunkvue_rt_style_kit_pages"] = self["webpackChunkvue_rt_style_kit_pages"] || []).push([["src_atoms_components_VideoPlayer_VideoPlayer_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/atoms/components/VideoPlayer/VideoPlayer.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/atoms/components/VideoPlayer/VideoPlayer.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Videoplayer_styl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Videoplayer.styl */ "./src/atoms/components/VideoPlayer/Videoplayer.styl");
/* harmony import */ var _Spinner_Spinner_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Spinner/Spinner.vue */ "./src/atoms/components/Spinner/Spinner.vue");
/* harmony import */ var debounce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! debounce */ "./node_modules/debounce/index.js");
/* harmony import */ var debounce__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(debounce__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _variables_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../variables.json */ "./src/atoms/variables.json");




var componentsList = {};
componentsList[_Spinner_Spinner_vue__WEBPACK_IMPORTED_MODULE_1__["default"].name] = _Spinner_Spinner_vue__WEBPACK_IMPORTED_MODULE_1__["default"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "RtVideoPlayer",
  components: componentsList,
  props: {
    ga: {
      type: Object,
      "default": null
    },
    source: {
      type: Array,
      "default": []
    },
    pauseImage: {
      type: String,
      "default": ''
    },
    autoplay: {
      type: Boolean,
      "default": false
    }
  },
  data: function data() {
    return {
      isPlaying: false,
      isMobile: window.innerWidth <= parseInt(_variables_json__WEBPACK_IMPORTED_MODULE_3__["mobile-upper-limit"])
    };
  },
  computed: {
    posterClass: function posterClass() {
      var className = ["rt-video-player__poster"];

      if (this.isPlaying) {
        className.push("rt-video-player__poster--hidden");
      }

      return className.join(' ');
    }
  },
  mounted: function mounted() {
    var _this = this;

    if (this.autoplay && !this.isMobile) {
      window.addEventListener('scroll', debounce__WEBPACK_IMPORTED_MODULE_2___default()(this.checkPosition, 35));

      if (this.$refs.video.webkitRequestFullscreen) {
        document.addEventListener('webkitfullscreenchange', function () {
          _this.unMute();
        });
      } else if (this.$refs.video.msRequestFullscreen) {
        document.addEventListener('msfullscreenchange', function () {
          _this.unMute();
        });
      } else if (this.$refs.video.mozRequestFullscreen) {
        document.addEventListener('mozfullscreenchange', function () {
          _this.unMute();
        });
      } else if (this.$refs.video.requestFullscreen) {
        document.addEventListener('fullscreenchange', function () {
          _this.unMute();
        });
      }
    }
  },
  methods: {
    activateEventToLink: function activateEventToLink(ga) {// const button = this.$refs["button"];
      // button.addEventListener("click", (e) => {
      //     if (!window.dataLayer) {
      //         window.dataLayer = [];
      //     }
      //     window.dataLayer.push(ga);
      // }, false);
    },
    togglePlay: function togglePlay() {
      var _this2 = this;

      if (!this.isPlaying) {
        setTimeout(function () {
          _this2.$refs.video.play();
        }, 0);
      } else {
        setTimeout(function () {
          _this2.$refs.video.pause();
        }, 0);
      }

      this.isPlaying = !this.isPlaying;
    },
    paused: function paused() {
      this.isPlaying = false;
    },
    checkPosition: function checkPosition() {
      if (this.$refs.wrapper) {
        if (this.$refs.wrapper.getBoundingClientRect().top > 0 && this.$refs.wrapper.getBoundingClientRect().bottom < window.innerHeight) {
          this.$refs.video.muted = true;
          this.$refs.video.play();
          this.isPlaying = true;
        } else {
          this.$refs.video.pause();
          this.isPlaying = false;
        }
      }
    },
    unMute: function unMute() {
      var _this3 = this;

      setTimeout(function () {
        _this3.$refs.video.muted = false;
      }, 50);
    }
  },
  render: function render(h) {
    var _this4 = this;

    var sources = function sources() {
      return _this4.source.map(function (item) {
        return h("source", {
          "attrs": {
            "src": item
          }
        });
      });
    };

    return h("div", {
      "class": "rt-video-player-wrapper",
      "ref": "wrapper",
      "on": {
        "click": this.togglePlay
      }
    }, [h("div", {
      "class": this.posterClass,
      "style": "background-image: url(" + this.pauseImage + ")"
    }, [h("div", {
      "class": "rt-video-player__play-button"
    }, [h("svg", {
      "attrs": {
        "width": "63",
        "height": "63",
        "viewBox": "0 0 63 63",
        "fill": "none",
        "xmlns": "http://www.w3.org/2000/svg"
      }
    }, [h("g", {
      "attrs": {
        "filter": "url(#filter0_d)"
      }
    }, [h("circle", {
      "attrs": {
        "cx": "31.5",
        "cy": "29.5",
        "r": "27.5",
        "fill": "white"
      }
    })]), h("path", {
      "attrs": {
        "d": "M26.0933 20.75L41.8433 29.8433L26.0933 38.9365L26.0933 20.75Z",
        "fill": "#101828"
      }
    }), h("defs", [h("filter", {
      "attrs": {
        "id": "filter0_d",
        "x": "0",
        "y": "0",
        "width": "63",
        "height": "63",
        "filterUnits": "userSpaceOnUse",
        "color-interpolation-filters": "sRGB"
      }
    }, [h("feFlood", {
      "attrs": {
        "flood-opacity": "0",
        "result": "BackgroundImageFix"
      }
    }), h("feColorMatrix", {
      "attrs": {
        "in": "SourceAlpha",
        "type": "matrix",
        "values": "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
      }
    }), h("feOffset", {
      "attrs": {
        "dy": "2"
      }
    }), h("feGaussianBlur", {
      "attrs": {
        "stdDeviation": "2"
      }
    }), h("feColorMatrix", {
      "attrs": {
        "type": "matrix",
        "values": "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
      }
    }), h("feBlend", {
      "attrs": {
        "mode": "normal",
        "in2": "BackgroundImageFix",
        "result": "effect1_dropShadow"
      }
    }), h("feBlend", {
      "attrs": {
        "mode": "normal",
        "in": "SourceGraphic",
        "in2": "effect1_dropShadow",
        "result": "shape"
      }
    })])])])])]), h("video", {
      "class": "rt-video-player",
      "attrs": {
        "controls": true
      },
      "ref": "video"
    }, [sources()])]);
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/stylus-loader/dist/cjs.js??clonedRuleSet-5[0].rules[0].use[2]!./src/atoms/components/VideoPlayer/Videoplayer.styl":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/stylus-loader/dist/cjs.js??clonedRuleSet-5[0].rules[0].use[2]!./src/atoms/components/VideoPlayer/Videoplayer.styl ***!
  \******************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".rt-video-player {\n  width: 100%;\n  position: relative;\n  z-index: 1;\n  border-radius: 8px;\n  display: block;\n}\n.rt-video-player-wrapper {\n  position: relative;\n  overflow: hidden;\n  border-radius: 8px;\n}\n.rt-video-player__poster {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 2;\n  -webkit-background-size: cover;\n  -moz-background-size: cover;\n  background-size: cover;\n  opacity: 1;\n  -webkit-transition: opacity 0.2s linear, z-index 0.2s linear;\n  -moz-transition: opacity 0.2s linear, z-index 0.2s linear;\n  -o-transition: opacity 0.2s linear, z-index 0.2s linear;\n  -ms-transition: opacity 0.2s linear, z-index 0.2s linear;\n  transition: opacity 0.2s linear, z-index 0.2s linear;\n}\n.rt-video-player__poster--hidden {\n  opacity: 0;\n  z-index: 0;\n}\n.rt-video-player__play-button {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translateY(-50%) translateX(-50%);\n  -moz-transform: translateY(-50%) translateX(-50%);\n  -o-transform: translateY(-50%) translateX(-50%);\n  -ms-transform: translateY(-50%) translateX(-50%);\n  transform: translateY(-50%) translateX(-50%);\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/atoms/components/VideoPlayer/Videoplayer.styl":
/*!***********************************************************!*\
  !*** ./src/atoms/components/VideoPlayer/Videoplayer.styl ***!
  \***********************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_stylus_loader_dist_cjs_js_clonedRuleSet_5_0_rules_0_use_2_Videoplayer_styl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/stylus-loader/dist/cjs.js??clonedRuleSet-5[0].rules[0].use[2]!./Videoplayer.styl */ "./node_modules/css-loader/dist/cjs.js!./node_modules/stylus-loader/dist/cjs.js??clonedRuleSet-5[0].rules[0].use[2]!./src/atoms/components/VideoPlayer/Videoplayer.styl");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_stylus_loader_dist_cjs_js_clonedRuleSet_5_0_rules_0_use_2_Videoplayer_styl__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_node_modules_stylus_loader_dist_cjs_js_clonedRuleSet_5_0_rules_0_use_2_Videoplayer_styl__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
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
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_node_modules_stylus_loader_dist_cjs_js_clonedRuleSet_5_0_rules_0_use_2_Videoplayer_styl__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_stylus_loader_dist_cjs_js_clonedRuleSet_5_0_rules_0_use_2_Videoplayer_styl__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_stylus_loader_dist_cjs_js_clonedRuleSet_5_0_rules_0_use_2_Videoplayer_styl__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/stylus-loader/dist/cjs.js??clonedRuleSet-5[0].rules[0].use[2]!./Videoplayer.styl */ "./node_modules/css-loader/dist/cjs.js!./node_modules/stylus-loader/dist/cjs.js??clonedRuleSet-5[0].rules[0].use[2]!./src/atoms/components/VideoPlayer/Videoplayer.styl",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_node_modules_stylus_loader_dist_cjs_js_clonedRuleSet_5_0_rules_0_use_2_Videoplayer_styl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/stylus-loader/dist/cjs.js??clonedRuleSet-5[0].rules[0].use[2]!./Videoplayer.styl */ "./node_modules/css-loader/dist/cjs.js!./node_modules/stylus-loader/dist/cjs.js??clonedRuleSet-5[0].rules[0].use[2]!./src/atoms/components/VideoPlayer/Videoplayer.styl");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_stylus_loader_dist_cjs_js_clonedRuleSet_5_0_rules_0_use_2_Videoplayer_styl__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_stylus_loader_dist_cjs_js_clonedRuleSet_5_0_rules_0_use_2_Videoplayer_styl__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_stylus_loader_dist_cjs_js_clonedRuleSet_5_0_rules_0_use_2_Videoplayer_styl__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_stylus_loader_dist_cjs_js_clonedRuleSet_5_0_rules_0_use_2_Videoplayer_styl__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_node_modules_stylus_loader_dist_cjs_js_clonedRuleSet_5_0_rules_0_use_2_Videoplayer_styl__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_stylus_loader_dist_cjs_js_clonedRuleSet_5_0_rules_0_use_2_Videoplayer_styl__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_stylus_loader_dist_cjs_js_clonedRuleSet_5_0_rules_0_use_2_Videoplayer_styl__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_stylus_loader_dist_cjs_js_clonedRuleSet_5_0_rules_0_use_2_Videoplayer_styl__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/atoms/components/VideoPlayer/VideoPlayer.vue":
/*!**********************************************************!*\
  !*** ./src/atoms/components/VideoPlayer/VideoPlayer.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _VideoPlayer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VideoPlayer.vue?vue&type=script&lang=js& */ "./src/atoms/components/VideoPlayer/VideoPlayer.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns
;



/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _VideoPlayer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
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

/***/ "./src/atoms/components/VideoPlayer/VideoPlayer.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./src/atoms/components/VideoPlayer/VideoPlayer.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoPlayer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./VideoPlayer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/atoms/components/VideoPlayer/VideoPlayer.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoPlayer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ })

}]);
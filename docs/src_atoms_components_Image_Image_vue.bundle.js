"use strict";
(self["webpackChunkvue_rt_style_kit_pages"] = self["webpackChunkvue_rt_style_kit_pages"] || []).push([["src_atoms_components_Image_Image_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/atoms/components/Image/Image.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/atoms/components/Image/Image.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../index */ "./src/atoms/index.js");


function WebpIsSupported(callback) {
  // If the browser doesn't has the method createImageBitmap, you can't display webp format
  if (!window.createImageBitmap) {
    callback(false);
    return;
  } // Base64 representation of a white point image


  var webpdata = 'data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoCAAEAAQAcJaQAA3AA/v3AgAA='; // Retrieve the Image in Blob Format

  fetch(webpdata).then(function (response) {
    return response.blob();
  }).then(function (blob) {
    // If the createImageBitmap method succeeds, return true, otherwise false
    createImageBitmap(blob).then(function () {
      callback(true);
    }, function () {
      callback(false);
    });
  });
}

var componentsList = {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "RtImg",
  props: {
    src: {
      type: String,
      "default": ''
    },
    x2Src: {
      type: String,
      "default": ''
    },
    tdSrc: {
      type: String,
      "default": ''
    },
    mdSrc: {
      type: String,
      "default": ''
    },
    lgSrc: {
      type: String,
      "default": ''
    },
    x2LgSrc: {
      type: String,
      "default": ''
    },
    webpSrc: {
      type: String,
      "default": ''
    },
    webpX2Src: {
      type: String,
      "default": ''
    },
    webpTdSrc: {
      type: String,
      "default": ''
    },
    webpMdSrc: {
      type: String,
      "default": ''
    },
    webpLgSrc: {
      type: String,
      "default": ''
    },
    webpX2LgSrc: {
      type: String,
      "default": ''
    },
    lazySrc: {
      type: String,
      "default": ''
    },
    lazyTdSrc: {
      type: String,
      "default": ''
    },
    lazyMdSrc: {
      type: String,
      "default": ''
    },
    lazyLgSrc: {
      type: String,
      "default": ''
    },
    backgroundMode: {
      type: Boolean,
      "default": false
    }
  },
  data: function data() {
    return {
      type: '',
      supportWebP: false,
      lazyReady: false
    };
  },
  beforeUpdate: function beforeUpdate() {
    _index__WEBPACK_IMPORTED_MODULE_0__.deviceTypeStore.removeWatcher(this._uid, this.calculateTypeOptions);
  },
  updated: function updated() {
    _index__WEBPACK_IMPORTED_MODULE_0__.deviceTypeStore.removeWatcher(this._uid, this.calculateTypeOptions);
    _index__WEBPACK_IMPORTED_MODULE_0__.deviceTypeStore.addWatcher(this._uid, this.calculateTypeOptions);
  },
  beforeDestroy: function beforeDestroy() {
    _index__WEBPACK_IMPORTED_MODULE_0__.deviceTypeStore.removeWatcher(this._uid, this.calculateTypeOptions);
  },
  computed: {
    image: function image() {
      var image = '';

      if (this.type == 'desktop-large' && this.lgSrc) {
        if (this.x2LgSrc && window.devicePixelRatio && window.devicePixelRatio > 1) {
          if (this.supportWebP && this.webpX2LgSrc) {
            image = this.webpX2LgSrc;
          } else {
            image = this.x2LgSrc;
          }
        } else {
          if (this.supportWebP && this.webpLgSrc) {
            image = this.webpLgSrc;
          } else {
            image = this.lgSrc;
          }
        }
      }

      if (this.type == 'tablet' && this.tdSrc) {
        if (this.supportWebP && this.webpTdSrc) {
          image = this.webpTdSrc;
        } else {
          image = this.tdSrc;
        }
      }

      if (this.type == 'mobile' && this.mdSrc) if (this.supportWebP && this.webpMdSrc) {
        image = this.webpMdSrc;
      } else {
        image = this.mdSrc;
      }

      if (image.length == 0) {
        if (this.x2Src && window.devicePixelRatio && window.devicePixelRatio > 1) {
          if (this.supportWebP && this.webpX2Src) {
            image = this.webpX2Src;
          } else {
            image = this.x2Src;
          }
        } else {
          if (this.supportWebP && this.webpSrc) {
            image = this.webpSrc;
          } else {
            image = this.src;
          }
        }
      }

      if (this.backgroundMode) {
        image = 'url(' + image + ')';
      }

      return image;
    },
    lazy: function lazy() {
      var lazyImage = '';

      if (this.type == 'desktop-large' && this.lazyLgSrc) {
        lazyImage = this.lazyLgSrc;
      }

      if (this.type == 'tablet' && this.lazyTdSrc) {
        lazyImage = this.lazyTdSrc;
      }

      if (this.type == 'mobile' && this.lazyMdSrc) {
        lazyImage = this.lazyMdSrc;
      }

      if (lazyImage.length == 0 && this.lazySrc) {
        lazyImage = this.lazySrc;
      }

      return lazyImage;
    }
  },
  mounted: function mounted() {
    var _this = this;

    WebpIsSupported(function (isSupported) {
      if (isSupported) {
        _this.supportWebP = isSupported;
      }
    });
    _index__WEBPACK_IMPORTED_MODULE_0__.deviceTypeStore.addWatcher(this._uid, this.calculateTypeOptions);
    this.calculateTypeOptions();
  },
  methods: {
    calculateTypeOptions: function calculateTypeOptions() {
      this.type = _index__WEBPACK_IMPORTED_MODULE_0__.deviceTypeStore.getStatus();
    }
  },
  watch: {
    type: function type(oldVal, newVal) {
      if (oldVal != newVal) {
        this.$forceUpdate();
      }
    }
  },
  render: function render(h) {
    if (this.type) {
      if (this.backgroundMode) {
        return h("div", {
          "class": "rt-img-container",
          "style": {
            backgroundImage: this.image
          }
        });
      } else {
        if (this.lazySrc) {
          return h("div", {
            "class": "rt-img-container"
          }, [h("img", {
            "ref": "img",
            "directives": [{
              name: "lazy-src",
              value: this.image
            }],
            "class": "rt-img d-block",
            "attrs": {
              "src": this.lazy,
              "alt": ""
            }
          })]);
        } else {
          return h("div", {
            "class": "rt-img-container"
          }, [h("img", {
            "ref": "img",
            "class": "rt-img d-block",
            "attrs": {
              "src": this.image,
              "alt": ""
            }
          })]);
        }
      }
    }

    return null;
  }
});

/***/ }),

/***/ "./src/atoms/components/Image/Image.vue":
/*!**********************************************!*\
  !*** ./src/atoms/components/Image/Image.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Image_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Image.vue?vue&type=script&lang=js& */ "./src/atoms/components/Image/Image.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns
;



/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _Image_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
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

/***/ "./src/atoms/components/Image/Image.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./src/atoms/components/Image/Image.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Image_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Image.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/atoms/components/Image/Image.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Image_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ })

}]);
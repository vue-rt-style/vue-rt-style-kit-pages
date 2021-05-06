(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/example-pages/components/group/CarouselV2--demo.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/example-pages/components/group/CarouselV2--demo.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_rt_style_kit_molecules_local_components_CarouselV2_docs_props_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue-rt-style-kit-molecules-local/components/CarouselV2/docs/props.json */ "./src/molecules/components/CarouselV2/docs/props.json");
var _vue_rt_style_kit_molecules_local_components_CarouselV2_docs_props_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! @vue-rt-style-kit-molecules-local/components/CarouselV2/docs/props.json */ "./src/molecules/components/CarouselV2/docs/props.json", 1);
/* harmony import */ var _vue_rt_style_kit_molecules_local_components_CarouselV2_docs_events_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vue-rt-style-kit-molecules-local/components/CarouselV2/docs/events.json */ "./src/molecules/components/CarouselV2/docs/events.json");
var _vue_rt_style_kit_molecules_local_components_CarouselV2_docs_events_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! @vue-rt-style-kit-molecules-local/components/CarouselV2/docs/events.json */ "./src/molecules/components/CarouselV2/docs/events.json", 1);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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


var defaultLoaderType = 'spinner';
var skeletonLoader = {
  type: 'skeleton',
  count: 4,
  rows: 2
};
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      docProps: _vue_rt_style_kit_molecules_local_components_CarouselV2_docs_props_json__WEBPACK_IMPORTED_MODULE_0__,
      docEvents: _vue_rt_style_kit_molecules_local_components_CarouselV2_docs_events_json__WEBPACK_IMPORTED_MODULE_1__,
      slidesList: [],
      colors: ["black", "black085", "black085-no-opacity", "purple", "purple-button-hover", "purple-button-active", "purple01", "purple005", "purple-low", "purple-high", "purple-night", "white", "red", "red-low", "red-high", "gray", "dark-blue", "dark-blue-low", "dark-blue-high", "light-blue", "light-blue-low", "light-blue-high", "yellow", "yellow-low", "yellow-high", "orange", "orange-night", "orange-button-hover", "orange-button-active", "orange-low", "orange-high", "orange-super", "pink", "pink-low", "pink-high", "green", "green-low", "green-high", "cool-grey", "cool-grey07", "cool-grey05", "cool-grey03", "cool-grey05-no-opacity", "purple-high05", "purple-high02", "orange-high05", "orange-high02", "orange03", "orange01", "orange005", "slate", "dark-slate", "burgundy", "white09", "white08", "white07", "white06", "white05", "white04", "white03", "white025", "white02", "white01", "white005", "main-color", "main-color09", "main-color08", "main-color07", "main-color06", "main-color05", "main-color04", "main-color03", "main-color02", "main-color01", "main-color007", "main-color005", "main-color003", "main-color09-no-opacity", "main-color085-no-opacity", "main-color07-no-opacity", "main-color05-no-opacity", "main-color03-no-opacity", "main-color01-no-opacity", "main-color007-no-opacity", "main-color005-no-opacity", "main-color003-no-opacity"],
      shadowColor: "white",
      showShadow: true,
      infinitescroll: false,
      blurnotactive: true,
      background: "",
      loaderType: skeletonLoader,
      gotoSlideVal: 0,
      waitTime: this.getRandomNumberFromRange(3, 15) * 1000
    };
  },
  computed: {
    configLoaderCount: {
      get: function get() {
        return this.loaderType !== defaultLoaderType ? this.loaderType.count : skeletonLoader.count;
      },
      set: function set(val) {
        this.loaderType.count = +val;
      }
    },
    configLoaderRows: {
      get: function get() {
        return this.loaderType !== defaultLoaderType ? this.loaderType.rows : skeletonLoader.rows;
      },
      set: function set(val) {
        this.loaderType.rows = +val;
      }
    },
    gotoSlideModel: {
      get: function get() {
        return this.gotoSlideVal;
      },
      set: function set(val) {
        this.gotoSlideVal = +val;
        this.$refs.carouselEl.moveTo(this.gotoSlideVal);
      }
    }
  },
  created: function created() {
    this.reCreate();
  },
  methods: {
    reCreate: function reCreate() {
      var _this = this;

      this.slidesList = [];
      setTimeout(function () {
        _this.slidesList = _toConsumableArray(Array(_this.getRandomNumberFromRange(2, 17)).keys());
      }, this.waitTime);
    },
    setLoaderType: function setLoaderType() {
      this.loaderType = this.loaderType === defaultLoaderType ? skeletonLoader : defaultLoaderType;
    },
    getRandomNumberFromRange: function getRandomNumberFromRange(min, max) {
      return Math.round(Math.random() * (max - min) + min, 10);
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/stylus-loader/index.js!./node_modules/vue-loader/lib/index.js?!./src/example-pages/components/group/CarouselV2--demo.vue?vue&type=style&index=0&lang=stylus&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/stylus-loader!./node_modules/vue-loader/lib??vue-loader-options!./src/example-pages/components/group/CarouselV2--demo.vue?vue&type=style&index=0&lang=stylus& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".sk-contain {\n  margin: 0 -10px -20px;\n  padding-bottom: 20px;\n  overflow: hidden;\n  flex-wrap: nowrap;\n  display: flex;\n}\n.rt-container .sk-contain {\n  padding-left: 0;\n  padding-right: 0;\n}\n.sk-card {\n  flex: 0 0 338px;\n  padding: 0 10px;\n}\n.rt-code-viewer .rt-carousel,\n.rt-code-viewer .rt-carousel__slide {\n  z-index: auto;\n}\n@media (max-width: 1024px) {\n.rtk-fo__case .rt-carousel-slide-v2 {\n    max-width: 288px;\n}\n.rt-container .rtk-fo__case .rt-carousel-v2.rt-container {\n    margin: 0 -20px;\n    width: 100vw;\n}\n}\n@media (min-width: 1025px) {\n.rt-container .rtk-fo__case .rt-carousel-v2.rt-container {\n    margin: 0 -10px;\n    padding: 0;\n}\n}\n@media (max-width: 359px) {\n.rtk-fo__case .rt-carousel-v2:not(.rt-carousel--fit-slides) .rt-carousel-slide-v2 {\n    max-width: 252px;\n}\n}\n@media (min-width: 360px) and (max-width: 1279px) {\n.rtk-fo__case .rt-carousel-v2:not(.rt-carousel--fit-slides) .rt-carousel-slide-v2 {\n    max-width: 316px;\n}\n}\n@media (min-width: 1025px) and (max-width: 1279px) {\n.rtk-fo__case .rt-carousel-v2.rt-carousel--fit-slides .rt-carousel-slide-v2 {\n    max-width: 352px;\n}\n}\n@media (min-width: 1025px) and (max-width: 1366px) {\n.rtk-fo__case .rt-carousel-slide-v2--5 {\n    flex: 0 0 400px;\n    max-width: initial;\n}\n}\n@media (max-width: 1279px) {\n.rtk-fo__case .rt-carousel-slide-v2--5 {\n    width: 352px !important;\n    flex-basis: 352px !important;\n}\n}\n@media (min-width: 1280px) {\n.rtk-fo__case .rt-carousel-v2:not(.rt-carousel--fit-slides) .rt-carousel-slide-v2 {\n    max-width: 336px;\n}\n}\n@media (min-width: 1280px) {\n.rtk-fo__case .rt-carousel-v2.rt-carousel--fit-slides .rt-carousel-slide-v2--1,\n  .rtk-fo__case .rt-carousel-v2.rt-carousel--fit-slides .rt-carousel-slide-v2--2 {\n    width: 365px !important;\n    flex-basis: 365px !important;\n}\n}\n@media (min-width: 1367px) {\n.rtk-fo__case .rt-carousel-v2.rt-carousel--fit-slides .rt-carousel-slide-v2--5 {\n    max-width: 336px;\n}\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/stylus-loader/index.js!./node_modules/vue-loader/lib/index.js?!./src/example-pages/components/group/CarouselV2--demo.vue?vue&type=style&index=0&lang=stylus&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/stylus-loader!./node_modules/vue-loader/lib??vue-loader-options!./src/example-pages/components/group/CarouselV2--demo.vue?vue&type=style&index=0&lang=stylus& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/stylus-loader!../../../../node_modules/vue-loader/lib??vue-loader-options!./CarouselV2--demo.vue?vue&type=style&index=0&lang=stylus& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/stylus-loader/index.js!./node_modules/vue-loader/lib/index.js?!./src/example-pages/components/group/CarouselV2--demo.vue?vue&type=style&index=0&lang=stylus&");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/example-pages/components/group/CarouselV2--demo.vue?vue&type=template&id=2853fcaf&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/example-pages/components/group/CarouselV2--demo.vue?vue&type=template&id=2853fcaf& ***!
  \******************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._m(0),_vm._v(" "),_c('section',{staticClass:"sp-v-2"},[_c('div',{staticClass:"rt-container"},[_vm._m(1),_vm._v(" "),_c('div',{staticClass:"rt-col-12 rt-space-bottom3 is-b2c"},[_c('rt-row',[_c('rt-col',{attrs:{"size":"3"}},[_c('p',[_vm._v("background")]),_vm._v(" "),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.background),expression:"background"}],on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.background=$event.target.multiple ? $$selectedVal : $$selectedVal[0]}}},_vm._l((_vm.colors),function(i){return _c('option',{domProps:{"value":i}},[_vm._v(_vm._s(i))])}),0)]),_vm._v(" "),_c('rt-col',{attrs:{"size":"3"}},[_c('p',[_vm._v("shadowColor")]),_vm._v(" "),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.shadowColor),expression:"shadowColor"}],on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.shadowColor=$event.target.multiple ? $$selectedVal : $$selectedVal[0]}}},_vm._l((_vm.colors),function(i){return _c('option',{domProps:{"value":i}},[_vm._v(_vm._s(i))])}),0)]),_vm._v(" "),_c('rt-col',{attrs:{"size":"2"}},[_c('p',[_vm._v("show shadow")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.showShadow),expression:"showShadow"}],attrs:{"type":"checkbox"},domProps:{"checked":Array.isArray(_vm.showShadow)?_vm._i(_vm.showShadow,null)>-1:(_vm.showShadow)},on:{"change":function($event){var $$a=_vm.showShadow,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.showShadow=$$a.concat([$$v]))}else{$$i>-1&&(_vm.showShadow=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{_vm.showShadow=$$c}}}})]),_vm._v(" "),_c('rt-col',{attrs:{"size":"2"}},[_c('p',[_vm._v("infinite scroll")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.infinitescroll),expression:"infinitescroll"}],attrs:{"type":"checkbox"},domProps:{"checked":Array.isArray(_vm.infinitescroll)?_vm._i(_vm.infinitescroll,null)>-1:(_vm.infinitescroll)},on:{"change":function($event){var $$a=_vm.infinitescroll,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.infinitescroll=$$a.concat([$$v]))}else{$$i>-1&&(_vm.infinitescroll=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{_vm.infinitescroll=$$c}}}})]),_vm._v(" "),_c('rt-col',{attrs:{"size":"2"}},[_c('p',[_vm._v("blur not active")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.blurnotactive),expression:"blurnotactive"}],attrs:{"type":"checkbox"},domProps:{"checked":Array.isArray(_vm.blurnotactive)?_vm._i(_vm.blurnotactive,null)>-1:(_vm.blurnotactive)},on:{"change":function($event){var $$a=_vm.blurnotactive,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.blurnotactive=$$a.concat([$$v]))}else{$$i>-1&&(_vm.blurnotactive=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{_vm.blurnotactive=$$c}}}})])],1)],1)]),_vm._v(" "),_c('rt-carousel-v3',{attrs:{"active-index":"2","background":_vm.background,"shadow-color":_vm.shadowColor,"show-shadow":_vm.showShadow,"infinite-scroll":_vm.infinitescroll,"blur-not-active":_vm.blurnotactive}},_vm._l((20),function(i){return _c('rt-carousel-slide-v3',{key:i},[_c('div',{staticStyle:{"background-size":"cover","border-radius":"8px","height":"300px","position":"relative"},style:(("background: url(https://picsum.photos/500/300?getForId=" + i + ")"))},[_c('div',{staticStyle:{"background-color":"black","color":"white","position":"absolute","bottom":"0","right":"0","padding":"0 10px"},domProps:{"textContent":_vm._s(i)}})])])}),1),_vm._v(" "),_c('rt-carousel-v2',_vm._l((7),function(i){return _c('rt-carousel-slide-v2',{key:i},[_c('div',{staticStyle:{"background-size":"cover","border-radius":"8px","height":"300px","position":"relative"},style:(("background: url(https://picsum.photos/500/300?getForId=" + i + ")"))},[_c('div',{staticStyle:{"background-color":"black","color":"white","position":"absolute","bottom":"0","right":"0","padding":"0 10px"},domProps:{"textContent":_vm._s(i)}})])])}),1)],1),_vm._v(" "),_c('section',{staticClass:"rt-container sp-v-2"},[_vm._m(2),_vm._v(" "),_c('div',{staticClass:"rt-col-12 rtk-fo__case"},[_c('rt-tabs',[_c('template',{slot:"navigation"},[_c('rt-tabs-nav-item',{attrs:{"remove-base-tag":true,"name":"one"}},[_vm._v("Демо-карточки")]),_vm._v(" "),_c('rt-tabs-nav-item',{attrs:{"remove-base-tag":true,"name":"two"}},[_vm._v("С фоновым изображением")])],1),_vm._v(" "),_c('template',{slot:"content"},[_c('rt-tabs-content-item',{attrs:{"name":"one"}},[(_vm.loaderType !== 'spinner')?[_vm._v("\n              config:\n              "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.configLoaderRows),expression:"configLoaderRows"}],staticClass:"d-inline-block",staticStyle:{"width":"20px"},attrs:{"title":"строк (rows)","type":"number"},domProps:{"value":(_vm.configLoaderRows)},on:{"input":function($event){if($event.target.composing){ return; }_vm.configLoaderRows=$event.target.value}}})]:_vm._e(),_vm._v("\n              waitTime: "+_vm._s(_vm.waitTime / 1000)+"s\n            "),_c('rt-button',{on:{"click":_vm.reCreate}},[_vm._v("reCreate list")]),_vm._v("\n            "+_vm._s(_vm.slidesList)+"\n            "),_c('div',{staticClass:"area"},[(!_vm.slidesList.length)?_c('div',{staticClass:"sk-contain"},_vm._l((_vm.configLoaderCount),function(n,key){return _c('div',{key:key,staticClass:"sk-card rt-carousel-slide-v2"},[_c('div',{staticClass:"rt-skeleton__card"},[_c('div',{staticClass:"rt-skeleton__card-top rt-skeleton__wave"}),_vm._v(" "),_vm._l((_vm.configLoaderRows),function(row,rowKey){return _c('div',{key:rowKey,staticClass:"rt-skeleton__card-row"},[_c('i'),_vm._v(" "),_c('div',[_c('p',{staticClass:"rt-skeleton__wave"}),_vm._v(" "),_c('p')])])}),_vm._v(" "),_c('hr'),_vm._v(" "),_c('div',{staticClass:"rt-skeleton__card-row"},[_c('div',[_c('p'),_vm._v(" "),_c('p')])]),_vm._v(" "),_c('hr'),_vm._v(" "),_c('div',{staticClass:"rt-skeleton__card-end"},[_c('div',{staticClass:"rt-skeleton__card-price"}),_vm._v(" "),_c('div',{staticClass:"rt-skeleton__card-btn rt-skeleton__wave"}),_vm._v(" "),_c('div',{staticClass:"rt-skeleton__card-more"})])],2)])}),0):_c('rt-carousel-v2',{class:[ _vm.slidesList > 4 ? 'carousel--fit-slides' : null ],attrs:{"content-to-resize":['.cctv-sc__carousel-slide'],"scrollable-on-desktop":true,"container-me":false,"width":5}},_vm._l((_vm.slidesList),function(i){return _c('rt-carousel-slide-v2',{key:i},[_c('div',{staticStyle:{"align-content":"center","border-radius":"8px","border":"2px solid","display":"flex","flex-flow":"wrap","font-size":"150px","justify-content":"center","height":"450px"},style:(("border-color: rgb(" + (177-i*0.6) + "," + (255/10+i) + "," + (i*15) + ");")),domProps:{"textContent":_vm._s(i)}})])}),1)],1)],2),_vm._v(" "),_c('rt-tabs-content-item',{attrs:{"name":"two"}},[_c('div',{staticClass:"sp-t-2-3"},[_c('rt-carousel-v2',{attrs:{"container-me":false}},_vm._l((15),function(i){return _c('rt-carousel-slide-v2',{key:i},[_c('div',{staticStyle:{"background-size":"cover","border-radius":"8px","height":"300px","position":"relative"},style:(("background: url(https://picsum.photos/500/300?getForId=" + i + ")"))},[_c('div',{staticStyle:{"background-color":"black","color":"white","position":"absolute","bottom":"0","right":"0","padding":"0 10px"},domProps:{"textContent":_vm._s(i)}})])])}),1)],1)])],1)],2)],1)]),_vm._v(" "),_c('section',{staticClass:"sp-v-2"},[_c('div',{staticClass:"rt-container"},[_vm._m(3),_vm._v(" "),_c('div',{staticClass:"rt-col-12 rt-col-md-3 sp-b-2"},[_c('p',[_vm._v("Перейти к "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.gotoSlideModel),expression:"gotoSlideModel"}],staticClass:"d-inline-block",staticStyle:{"width":"20px"},attrs:{"title":"Можно ввести номер слайда от 0 до 7","type":"number"},domProps:{"value":(_vm.gotoSlideModel)},on:{"input":function($event){if($event.target.composing){ return; }_vm.gotoSlideModel=$event.target.value}}}),_vm._v(" слайду")])])]),_vm._v(" "),_c('rt-carousel-v2',{ref:"carouselEl"},_vm._l((7),function(i){return _c('rt-carousel-slide-v2',{key:i},[_c('div',{staticStyle:{"background-size":"cover","border-radius":"8px","height":"300px","position":"relative"},style:(("background: url(https://picsum.photos/500/300?getForId=" + i + ")"))},[_c('div',{staticStyle:{"background-color":"black","color":"white","position":"absolute","bottom":"0","right":"0","padding":"0 10px"},domProps:{"textContent":_vm._s(i - 1)}})])])}),1)],1),_vm._v(" "),_c('div',{staticClass:"rt-container"},[_c('documentation-builder',{staticClass:"sp-t-2-1",attrs:{"json":_vm.docProps,"type":"props"}}),_vm._v(" "),_c('documentation-builder',{staticClass:"sp-t-2-1",attrs:{"json":_vm.docEvents,"type":"events"}})],1)])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"rt-container"},[_c('div',{staticClass:"app-content rt-col-12 rt-col-md-3"},[_c('div',{staticClass:"app-title"},[_c('h1',{staticClass:"rt-font-hero"},[_vm._v("CarouselV2")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"rt-col-12 rt-col-md-3 sp-b-2"},[_c('h3',[_vm._v("Простой вывод")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"rt-col-12 rt-col-md-3 sp-b-2"},[_c('h3',[_vm._v("Отображение во вкладках")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"rt-col-12 rt-col-md-3 sp-b-1"},[_c('h3',[_vm._v("Переход к слайду")])])}]



/***/ }),

/***/ "./src/example-pages/components/group/CarouselV2--demo.vue":
/*!*****************************************************************!*\
  !*** ./src/example-pages/components/group/CarouselV2--demo.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CarouselV2_demo_vue_vue_type_template_id_2853fcaf___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CarouselV2--demo.vue?vue&type=template&id=2853fcaf& */ "./src/example-pages/components/group/CarouselV2--demo.vue?vue&type=template&id=2853fcaf&");
/* harmony import */ var _CarouselV2_demo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CarouselV2--demo.vue?vue&type=script&lang=js& */ "./src/example-pages/components/group/CarouselV2--demo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _CarouselV2_demo_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CarouselV2--demo.vue?vue&type=style&index=0&lang=stylus& */ "./src/example-pages/components/group/CarouselV2--demo.vue?vue&type=style&index=0&lang=stylus&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CarouselV2_demo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CarouselV2_demo_vue_vue_type_template_id_2853fcaf___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CarouselV2_demo_vue_vue_type_template_id_2853fcaf___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/example-pages/components/group/CarouselV2--demo.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./src/example-pages/components/group/CarouselV2--demo.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CarouselV2_demo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./CarouselV2--demo.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/example-pages/components/group/CarouselV2--demo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CarouselV2_demo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/example-pages/components/group/CarouselV2--demo.vue?vue&type=style&index=0&lang=stylus&":
/*!*****************************************************************************************************!*\
  !*** ./src/example-pages/components/group/CarouselV2--demo.vue?vue&type=style&index=0&lang=stylus& ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CarouselV2_demo_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/stylus-loader!../../../../node_modules/vue-loader/lib??vue-loader-options!./CarouselV2--demo.vue?vue&type=style&index=0&lang=stylus& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/stylus-loader/index.js!./node_modules/vue-loader/lib/index.js?!./src/example-pages/components/group/CarouselV2--demo.vue?vue&type=style&index=0&lang=stylus&");
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CarouselV2_demo_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CarouselV2_demo_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CarouselV2_demo_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CarouselV2_demo_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CarouselV2_demo_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/example-pages/components/group/CarouselV2--demo.vue?vue&type=template&id=2853fcaf&":
/*!************************************************************************************************!*\
  !*** ./src/example-pages/components/group/CarouselV2--demo.vue?vue&type=template&id=2853fcaf& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CarouselV2_demo_vue_vue_type_template_id_2853fcaf___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./CarouselV2--demo.vue?vue&type=template&id=2853fcaf& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/example-pages/components/group/CarouselV2--demo.vue?vue&type=template&id=2853fcaf&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CarouselV2_demo_vue_vue_type_template_id_2853fcaf___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CarouselV2_demo_vue_vue_type_template_id_2853fcaf___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/molecules/components/CarouselV2/docs/events.json":
/*!**************************************************************!*\
  !*** ./src/molecules/components/CarouselV2/docs/events.json ***!
  \**************************************************************/
/*! exports provided: items, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"items\":[{\"name\":\"moveTo\",\"description\":\"Скроллит к указанному слайду\",\"component\":\"rt-carousel-v2\",\"params\":\"slideId<Number>\",\"return\":\"\"}]}");

/***/ }),

/***/ "./src/molecules/components/CarouselV2/docs/props.json":
/*!*************************************************************!*\
  !*** ./src/molecules/components/CarouselV2/docs/props.json ***!
  \*************************************************************/
/*! exports provided: items, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"items\":[{\"name\":\"rt-carousel-v2\",\"property\":\"width\",\"type\":[\"Number\"],\"description\":\"Количество карточек\",\"value\":\"3\"},{\"name\":\"rt-carousel-v2\",\"property\":\"scrollable-on-desktop\",\"type\":[\"Boolean\"],\"description\":\"Флаг для активации навигатора\",\"value\":\"true\"},{\"name\":\"rt-carousel-v2\",\"property\":\"content-to-resize\",\"type\":[\"Array, [String]\"],\"description\":\"Позволяет настроить авторесайзинг блоков\",\"value\":\"[]\"},{\"name\":\"rt-carousel-v2\",\"property\":\"container-me\",\"type\":[\"Boolean\"],\"description\":\"Обворачивает в контайнер содержимое\",\"value\":\"true\"}]}");

/***/ })

}]);
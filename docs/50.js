(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[50],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/example-pages/components/audioconference/AudioconferenceList.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/example-pages/components/audioconference/AudioconferenceList.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "AudioConferenceList",
  components: {
    componentsList: componentsList
  },
  data: function data() {
    return {
      conferenceList: null,
      chosenConference: null
    };
  },
  mounted: function mounted() {
    this.conferenceList = localStorage.acList ? JSON.parse(localStorage.acList) : [];
  },
  created: function created() {},
  methods: {
    addConference: function addConference($event) {
      this.conferenceList.push($event);
      this.chosenConference = this.conferenceList[this.conferenceList.length - 1];
    },
    chooseConference: function chooseConference($event) {
      this.chosenConference = $event;
      document.body.dispatchEvent(new CustomEvent("open-popup", {
        'detail': [this.$el, 'invitation-popup']
      }));
    },
    deleteConf: function deleteConf($event) {
      var _this = this;

      var confList = JSON.parse(localStorage.acList);
      confList.map(function (item, index) {
        if (item.confID === _this.chosenConference.confID) {
          confList.splice(index, 1);
        }
      });
      localStorage.setItem('acList', JSON.stringify(confList));
      this.conferenceList = localStorage.acList ? JSON.parse(localStorage.acList) : [];
      this.closePopup($event);
    },
    closePopup: function closePopup($event) {
      $event.target.closest('.rtb-popup').querySelector('.rtb-popup-close').dispatchEvent(new MouseEvent('click')); // this.lookupConference(this.chosenConference);
    },
    setDeletion: function setDeletion($event) {
      this.chosenConference = $event;
      document.body.dispatchEvent(new CustomEvent("open-popup", {
        'detail': [this.$el, 'delete-popup']
      }));
    },
    manageConference: function manageConference($event) {
      this.chosenConference = $event;
      document.body.dispatchEvent(new CustomEvent("open-popup", {
        'detail': [this.$el, 'manage-popup']
      }));
    },
    lookupConference: function lookupConference($event) {
      this.chosenConference = $event;
      document.body.dispatchEvent(new CustomEvent("open-popup", {
        'detail': [this.$el, 'confirmation-popup']
      }));
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/example-pages/components/audioconference/AudioconferenceList.vue?vue&type=template&id=58d705b0&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/example-pages/components/audioconference/AudioconferenceList.vue?vue&type=template&id=58d705b0& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"conference"},[_c('a-c-header'),_vm._v(" "),_c('div',{staticClass:"rt-container conference__content-wrapper"},[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"rt-col"},[_c('a-c-list-component',{attrs:{"conferenceList":_vm.conferenceList},on:{"set-chosen":_vm.chooseConference,"set-deletion":_vm.setDeletion,"manage-conf":_vm.manageConference,"lookup-conf":_vm.lookupConference}})],1)]),_vm._v(" "),_c('a-c-footer'),_vm._v(" "),_c('a-c-settings-popup'),_vm._v(" "),_c('a-c-creation-popup',{on:{"conf-created":_vm.addConference}}),_vm._v(" "),_c('a-c-edit-popup',{attrs:{"conferenceData":_vm.chosenConference}}),_vm._v(" "),_c('a-c-confirmation-popup',{attrs:{"confData":_vm.chosenConference}}),_vm._v(" "),_c('a-c-invitation-popup',{attrs:{"confData":_vm.chosenConference}}),_vm._v(" "),_c('a-c-manage-popup',{attrs:{"confData":_vm.chosenConference}}),_vm._v(" "),_c('rt-real-popup',{staticClass:"delete-popup",attrs:{"trigger-element-class":"delete-button","main-wrapper-class":"app","position-center":true}},[_c('div',{staticClass:"popup-content"},[_c('h2',{staticClass:"rt-font-h2 sp-b-1"},[_vm._v("Вы уверены?")]),_vm._v(" "),_c('p',{staticClass:"rt-font-small-paragraph sp-b-1-3"},[_vm._v("Вы уверены что хотите удалить данную аудиоконференцию? Это действие необратимо.")]),_vm._v(" "),_c('rt-button',{attrs:{"color":"orange"},on:{"click":_vm.deleteConf}},[_vm._v("Да, удалить")]),_vm._v(" "),_c('rt-button',{attrs:{"color":"orange-border"},on:{"click":_vm.closePopup}},[_vm._v("Нет, отменить")])],1)]),_vm._v(" "),_c('rt-hint-body')],1)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"rt-col"},[_c('h1',{staticClass:"rt-font-h2 sp-t-3 sp-b-1-2"},[_vm._v("Аудиоконференции")])])}]



/***/ }),

/***/ "./src/example-pages/components/audioconference/AudioconferenceList.vue":
/*!******************************************************************************!*\
  !*** ./src/example-pages/components/audioconference/AudioconferenceList.vue ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AudioconferenceList_vue_vue_type_template_id_58d705b0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AudioconferenceList.vue?vue&type=template&id=58d705b0& */ "./src/example-pages/components/audioconference/AudioconferenceList.vue?vue&type=template&id=58d705b0&");
/* harmony import */ var _AudioconferenceList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AudioconferenceList.vue?vue&type=script&lang=js& */ "./src/example-pages/components/audioconference/AudioconferenceList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AudioconferenceList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AudioconferenceList_vue_vue_type_template_id_58d705b0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AudioconferenceList_vue_vue_type_template_id_58d705b0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/example-pages/components/audioconference/AudioconferenceList.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************!*\
  !*** ./src/example-pages/components/audioconference/AudioconferenceList.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AudioconferenceList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./AudioconferenceList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/example-pages/components/audioconference/AudioconferenceList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AudioconferenceList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/example-pages/components/audioconference/AudioconferenceList.vue?vue&type=template&id=58d705b0&":
/*!*************************************************************************************************************!*\
  !*** ./src/example-pages/components/audioconference/AudioconferenceList.vue?vue&type=template&id=58d705b0& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AudioconferenceList_vue_vue_type_template_id_58d705b0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AudioconferenceList.vue?vue&type=template&id=58d705b0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/example-pages/components/audioconference/AudioconferenceList.vue?vue&type=template&id=58d705b0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AudioconferenceList_vue_vue_type_template_id_58d705b0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AudioconferenceList_vue_vue_type_template_id_58d705b0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
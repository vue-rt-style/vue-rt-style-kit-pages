(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[48],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/example-pages/components/audioconference/AudioconferencePhonebook.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/example-pages/components/audioconference/AudioconferencePhonebook.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************/
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
//
//
//
//
//
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
  name: "AudioConferencePhonebook",
  components: {
    componentsList: componentsList
  },
  data: function data() {
    return {
      arr_RU: ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Э', 'Ю', 'Я'],
      phoneBook: null,
      localPhoneBook: [],
      isSearching: false
    };
  },
  mounted: function mounted() {
    this.fillBook();
  },
  created: function created() {},
  methods: {
    addContact: function addContact() {
      this.$emit('add-contact');
    },
    filterPhonebook: function filterPhonebook($event) {
      var _this = this;

      this.localPhoneBook = [];

      if ($event.target.innerText.length == 1) {
        this.phoneBook.map(function (item) {
          item.capital.toLowerCase() == $event.target.innerText.toLowerCase() ? _this.localPhoneBook.push(item) : false;
        });
      } else if (/[a-z]/i.test($event.target.innerText.toLocaleLowerCase())) {
        this.phoneBook.map(function (item) {
          /[a-z]/i.test(item.capital.toLocaleLowerCase()) ? _this.localPhoneBook.push(item) : false;
        });
      } else if (/[0-9]/i.test($event.target.innerText.toLocaleLowerCase())) {
        this.phoneBook.map(function (item) {
          /[0-9]/i.test(item.capital.toLocaleLowerCase()) ? _this.localPhoneBook.push(item) : false;
        });
      }

      this.isSearching = false;

      if (this.localPhoneBook.length < 1) {
        this.isSearching = true;
      }
    },
    rollbackFilter: function rollbackFilter() {
      this.localPhoneBook = this.phoneBook;
    },
    fillBook: function fillBook() {
      this.phoneBook = localStorage.phonebook ? JSON.parse(localStorage.phonebook) : [];
      this.localPhoneBook = this.phoneBook;
      this.fixLetters();
    },
    fixLetters: function fixLetters() {
      var _this2 = this;

      this.isSearching = false;
      var letterArray = [];
      this.localPhoneBook.map(function (item) {
        return letterArray.push(item.capital);
      });
      var filteredArray = letterArray.filter(function (item, index) {
        return letterArray.indexOf(item) === index;
      });
      this.$refs.cyrillic.forEach(function (item) {
        item.classList.add('phonebook__letter--disabled');

        _this2.$refs.latin.classList.add('phonebook__letter--disabled');

        _this2.$refs.numbers.classList.add('phonebook__letter--disabled');

        filteredArray.map(function (item2) {
          if (item.innerText.toLocaleLowerCase() == item2.toLowerCase()) {
            item.classList.remove('phonebook__letter--disabled');
          } else if (/[a-z]/i.test(item2)) {
            _this2.$refs.latin.classList.remove('phonebook__letter--disabled');
          } else if (/[0-9]/i.test(item2)) {
            _this2.$refs.numbers.classList.remove('phonebook__letter--disabled');
          }
        });
      });
    },
    search: function search($event) {
      var _this3 = this;

      if ($event.length > 0) {
        this.localPhoneBook = [];
        this.phoneBook.map(function (item) {
          if (item.name.includes($event)) {
            _this3.localPhoneBook.push(item);
          }
        });
        this.isSearching = true;
      } else {
        this.localPhoneBook = this.phoneBook;
        this.isSearching = false;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/example-pages/components/audioconference/AudioconferencePhonebook.vue?vue&type=template&id=86c522c4&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/example-pages/components/audioconference/AudioconferencePhonebook.vue?vue&type=template&id=86c522c4& ***!
  \************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"conference"},[_c('a-c-header'),_vm._v(" "),_c('div',{staticClass:"rt-container conference__content-wrapper"},[_c('div',{staticClass:"rt-col"},[_c('div',{staticClass:"row sp-t-2-3 sp-b-1-3 flex-v-center"},[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"rt-col-4 rt-font-right"},[_c('rt-button',{staticClass:"rt-button-orange-border color-orange",on:{"click":_vm.addContact}},[_vm._v("Добавить новый контакт")])],1),_vm._v(" "),_c('div',{staticClass:"rt-col-4"},[_c('rt-input',{ref:"searchInput",attrs:{"type":"text","is-b2b-input":true,"outlined":true,"placeholder":"Поиск по контактам"},on:{"input":_vm.search}})],1)])]),_vm._v(" "),_c('div',{staticClass:"rt-col"},[_c('div',{staticClass:"sp-h-0-1 d-flex d-space-between sp-b-0-2"},[_c('button',{staticClass:"phonebook__letter",on:{"click":_vm.rollbackFilter}},[_c('span',{staticClass:"phonebook__letter-title"},[_vm._v("все")]),_vm._v(" "),_c('div',{staticClass:"phonebook__hint"},[_vm._v("Все контакты")])]),_vm._v(" "),_vm._l((_vm.arr_RU),function(letter){return _c('button',{ref:"cyrillic",refInFor:true,staticClass:"phonebook__letter phonebook__letter--disabled",on:{"click":_vm.filterPhonebook}},[_c('span',{staticClass:"phonebook__letter-title"},[_vm._v(_vm._s(letter))]),_vm._v(" "),_c('div',{staticClass:"phonebook__hint"},[_vm._v("Имя контакта "),_c('br'),_vm._v("начинается на «"+_vm._s(letter)+"»")])])}),_vm._v(" "),_c('button',{ref:"latin",staticClass:"phonebook__letter phonebook__letter--disabled",on:{"click":_vm.filterPhonebook}},[_c('span',{staticClass:"phonebook__letter-title"},[_vm._v("A-Z")]),_vm._v(" "),_vm._m(1)]),_vm._v(" "),_c('button',{ref:"numbers",staticClass:"phonebook__letter phonebook__letter--disabled",on:{"click":_vm.filterPhonebook}},[_c('span',{staticClass:"phonebook__letter-title"},[_vm._v("0-9")]),_vm._v(" "),_vm._m(2)])],2)]),_vm._v(" "),_c('div',{staticClass:"rt-col"},[_c('a-c-phonebook-component',{attrs:{"phone-book":_vm.localPhoneBook,"search":_vm.isSearching},on:{"contact-edited":_vm.fillBook}})],1)]),_vm._v(" "),_c('a-c-footer'),_vm._v(" "),_c('a-c-settings-popup')],1)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"rt-col-4"},[_c('h1',{staticClass:"rt-font-h2"},[_vm._v("Адресная книга")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"phonebook__hint"},[_vm._v("Имя контакта "),_c('br'),_vm._v("начинается с латинских букв")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"phonebook__hint"},[_vm._v("Имя контакта "),_c('br'),_vm._v("начинается с цифр")])}]



/***/ }),

/***/ "./src/example-pages/components/audioconference/AudioconferencePhonebook.vue":
/*!***********************************************************************************!*\
  !*** ./src/example-pages/components/audioconference/AudioconferencePhonebook.vue ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AudioconferencePhonebook_vue_vue_type_template_id_86c522c4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AudioconferencePhonebook.vue?vue&type=template&id=86c522c4& */ "./src/example-pages/components/audioconference/AudioconferencePhonebook.vue?vue&type=template&id=86c522c4&");
/* harmony import */ var _AudioconferencePhonebook_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AudioconferencePhonebook.vue?vue&type=script&lang=js& */ "./src/example-pages/components/audioconference/AudioconferencePhonebook.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AudioconferencePhonebook_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AudioconferencePhonebook_vue_vue_type_template_id_86c522c4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AudioconferencePhonebook_vue_vue_type_template_id_86c522c4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/example-pages/components/audioconference/AudioconferencePhonebook.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************!*\
  !*** ./src/example-pages/components/audioconference/AudioconferencePhonebook.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AudioconferencePhonebook_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./AudioconferencePhonebook.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/example-pages/components/audioconference/AudioconferencePhonebook.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AudioconferencePhonebook_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/example-pages/components/audioconference/AudioconferencePhonebook.vue?vue&type=template&id=86c522c4&":
/*!******************************************************************************************************************!*\
  !*** ./src/example-pages/components/audioconference/AudioconferencePhonebook.vue?vue&type=template&id=86c522c4& ***!
  \******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AudioconferencePhonebook_vue_vue_type_template_id_86c522c4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AudioconferencePhonebook.vue?vue&type=template&id=86c522c4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/example-pages/components/audioconference/AudioconferencePhonebook.vue?vue&type=template&id=86c522c4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AudioconferencePhonebook_vue_vue_type_template_id_86c522c4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AudioconferencePhonebook_vue_vue_type_template_id_86c522c4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
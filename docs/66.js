(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[66],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/example-pages/components/pages/promo/game.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/example-pages/components/pages/promo/game.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "AppPromoVip",
  components: componentsList,
  mounted: function mounted() {
    document.body.classList.add('ld-mygame');
    var wrapper = document.querySelector('.ld-mygame-users');
    document.querySelectorAll('.ld-mygame-users-item').forEach(function (item) {
      item.addEventListener('mouseenter', function () {
        var game = item.getAttribute('data-game');
        var newClass = 'ld-mygame-users--' + game;
        wrapper.classList.add(newClass);
      });
      item.addEventListener('mouseleave', function () {
        var game = item.getAttribute('data-game');
        var newClass = 'ld-mygame-users--' + game;
        wrapper.classList.remove(newClass);
      });
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/example-pages/components/pages/promo/game.vue?vue&type=template&id=34d5bdee&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/example-pages/components/pages/promo/game.vue?vue&type=template&id=34d5bdee& ***!
  \************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:"ld-mygame-banner color-white"},[_c('div',{staticClass:"rt-container"},[_c('rt-col',[_c('rt-row',[_c('rt-col',{attrs:{"size":"3"}},[_c('h1',{staticClass:"rt-font-h1 sp-t-3-3"},[_vm._v("Технологии победы")]),_vm._v(" "),_c('p',{staticClass:"rt-font-paragraph sp-t-0-4"},[_vm._v("Высокоскоростной интернет\n              и уникальные игровые бонусы")])]),_vm._v(" "),_c('rt-col',{attrs:{"size":"9"}},[_c('rt-img',{staticClass:"ld-mygame-banner-img",attrs:{"src":"https://static-cdn.rt.ru/sites/default/files/img/mygame/main-bg.jpg","x2-src":"https://static-cdn.rt.ru/sites/default/files/img/mygame/main-bg-2x.jpg","alt":""}})],1)],1)],1)],1)]),_vm._v(" "),_c('div',{staticClass:"lg-mygame-points color-white"},[_c('div',{staticClass:"rt-container"},[_c('rt-col',[_c('rt-row',[_c('rt-col',{attrs:{"size":"12"}},[_c('h2',{staticClass:"rt-font-h2 sp-b-2"},[_vm._v("Интернет для геймеров от Ростелекома")])]),_vm._v(" "),_c('rt-col',{attrs:{"size":"3"}},[_c('rt-img',{staticClass:"lg-mygame-points-img",attrs:{"src":"https://static-cdn.rt.ru/sites/default/files/img/mygame/fast-icon.jpg"}}),_vm._v(" "),_c('p',{staticClass:"rt-font-h4 sp-b-0-4 sp-t-1-1"},[_vm._v("Мощный интернет")]),_vm._v(" "),_c('p',[_vm._v("Играй без тормозов на скоростном интернете")])],1),_vm._v(" "),_c('rt-col',{attrs:{"size":"1"}}),_vm._v(" "),_c('rt-col',{attrs:{"size":"3"}},[_c('rt-img',{staticClass:"lg-mygame-points-img",attrs:{"src":"https://static-cdn.rt.ru/sites/default/files/img/mygame/bonus-icon.jpg"}}),_vm._v(" "),_c('p',{staticClass:"rt-font-h4 sp-b-0-4 sp-t-1-1"},[_vm._v("Игровые бонусы")]),_vm._v(" "),_c('p',[_vm._v("Получай бонусы в играх от MY.GAMES. Бонусы регулярно обновляются ")])],1),_vm._v(" "),_c('rt-col',{attrs:{"size":"1"}}),_vm._v(" "),_c('rt-col',{attrs:{"size":"3"}},[_c('rt-img',{staticClass:"lg-mygame-points-img",attrs:{"src":"https://static-cdn.rt.ru/sites/default/files/img/mygame/help-icon.jpg"}}),_vm._v(" "),_c('p',{staticClass:"rt-font-h4 sp-b-0-4 sp-t-1-1"},[_vm._v("Выделенная команда поддержки")]),_vm._v(" "),_c('p',[_vm._v("Разговаривай со специалистами на одном языке ")])],1),_vm._v(" "),_c('rt-col',{attrs:{"size":"1"}})],1)],1)],1)]),_vm._v(" "),_c('div',{staticClass:"ld-mygame-users color-white"},[_c('div',{staticClass:"rt-container sp-t-1"},[_c('p',{staticClass:"rt-font-h2 sp-t-5 sp-b-4"},[_vm._v("Узнай обо всех бонусах")]),_vm._v(" "),_c('div',{staticClass:"d-flex d-space-between"},[_c('div',{staticClass:"ld-mygame-users-item",attrs:{"data-game":"warface"}},[_c('div',{staticClass:"ld-mygame-users-content flex-fill"},[_c('rt-img',{staticClass:"ld-mygame-users-logo",attrs:{"src":"https://static-cdn.rt.ru/sites/default/files/img/mygame/warface.png","x2-src":"https://static-cdn.rt.ru/sites/default/files/img/mygame/warface-2x.png","alt":""}}),_vm._v(" "),_c('div',{staticClass:"ld-mygame-users-img"},[_c('rt-img',{attrs:{"src":"https://static-cdn.rt.ru/sites/default/files/img/mygame/warface-user.png","x2-src":"https://static-cdn.rt.ru/sites/default/files/img/mygame/warface-user-2x.png","alt":""}})],1),_vm._v(" "),_c('rt-button',{staticClass:"ld-mygame-users-button",attrs:{"color":"full-white"}},[_vm._v("Что я получу?")])],1)]),_vm._v(" "),_c('div',{staticClass:"ld-mygame-users-item ",attrs:{"data-game":"lostark"}},[_c('div',{staticClass:"ld-mygame-users-content flex-fill"},[_c('rt-img',{staticClass:"ld-mygame-users-logo",attrs:{"src":"https://static-cdn.rt.ru/sites/default/files/img/mygame/lostark.png","x2-src":"https://static-cdn.rt.ru/sites/default/files/img/mygame/lostark-2x.png","alt":""}}),_vm._v(" "),_c('div',{staticClass:"ld-mygame-users-img"},[_c('rt-img',{attrs:{"src":"https://static-cdn.rt.ru/sites/default/files/img/mygame/lostark-user.png","x2-src":"https://static-cdn.rt.ru/sites/default/files/img/mygame/lostark-user-2x.png","alt":""}})],1),_vm._v(" "),_c('rt-button',{staticClass:"ld-mygame-users-button",attrs:{"color":"full-white"}},[_vm._v("Что я получу?")])],1)]),_vm._v(" "),_c('div',{staticClass:"ld-mygame-users-item ",attrs:{"data-game":"archeage"}},[_c('div',{staticClass:"ld-mygame-users-content flex-fill"},[_c('rt-img',{staticClass:"ld-mygame-users-logo",attrs:{"src":"https://static-cdn.rt.ru/sites/default/files/img/mygame/archeage.png","x2-src":"https://static-cdn.rt.ru/sites/default/files/img/mygame/archeage-2x.png","alt":""}}),_vm._v(" "),_c('div',{staticClass:"ld-mygame-users-img"},[_c('rt-img',{attrs:{"src":"https://static-cdn.rt.ru/sites/default/files/img/mygame/archeage-user.png","x2-src":"https://static-cdn.rt.ru/sites/default/files/img/mygame/archeage-user-2x.png","alt":""}})],1),_vm._v(" "),_c('rt-button',{staticClass:"ld-mygame-users-button",attrs:{"color":"full-white"}},[_vm._v("Что я получу?")])],1)]),_vm._v(" "),_c('div',{staticClass:"ld-mygame-users-item ",attrs:{"data-game":"crossfire"}},[_c('div',{staticClass:"ld-mygame-users-content flex-fill"},[_c('rt-img',{staticClass:"ld-mygame-users-logo",attrs:{"src":"https://static-cdn.rt.ru/sites/default/files/img/mygame/crossfire.png","x2-src":"https://static-cdn.rt.ru/sites/default/files/img/mygame/crossfire-2x.png","alt":""}}),_vm._v(" "),_c('div',{staticClass:"ld-mygame-users-img"},[_c('rt-img',{attrs:{"src":"https://static-cdn.rt.ru/sites/default/files/img/mygame/crossfire-user.png","x2-src":"https://static-cdn.rt.ru/sites/default/files/img/mygame/crossfire-user-2x.png","alt":""}})],1),_vm._v(" "),_c('rt-button',{staticClass:"ld-mygame-users-button",attrs:{"color":"full-white"}},[_vm._v("Что я получу?")])],1)])])])]),_vm._v(" "),_c('div',{staticClass:"color-white"},[_c('div',{staticClass:"rt-container"},[_c('rt-col',[_c('h2',{staticClass:"rt-font-h2 sp-b-3"},[_vm._v("Как подключить бонусы")])])],1),_vm._v(" "),_vm._m(0)])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ld-mygame-line"},[_c('div',{staticClass:"rt-container"},[_c('div',{staticClass:"sp-r-5"},[_c('div',{staticClass:"d-flex d-space-between"},[_c('div',{staticClass:"ld-mygame-line-item"},[_c('img',{staticClass:"ld-mygame-line-cube",attrs:{"src":"https://static-cdn.rt.ru/sites/default/files/img/mygame/cube.png","alt":""}}),_vm._v(" "),_c('p',[_vm._v("Подайте заявку")]),_vm._v(" "),_c('p',{staticClass:"sp-t-0-3"},[_vm._v("На этой странице")])]),_vm._v(" "),_c('div',{staticClass:"ld-mygame-line-item"},[_c('img',{staticClass:"ld-mygame-line-cube",attrs:{"src":"https://static-cdn.rt.ru/sites/default/files/img/mygame/cube.png","alt":""}}),_vm._v(" "),_c('p',[_vm._v("Выберите опцию")]),_vm._v(" "),_c('p',{staticClass:"sp-t-0-3"},[_vm._v("MY.GAMES в личном кабинете Ростелекома")])]),_vm._v(" "),_c('div',{staticClass:"ld-mygame-line-item"},[_c('img',{staticClass:"ld-mygame-line-cube",attrs:{"src":"https://static-cdn.rt.ru/sites/default/files/img/mygame/cube.png","alt":""}}),_vm._v(" "),_c('p',[_vm._v("Укажите данные игрового аккаунта")]),_vm._v(" "),_c('p',{staticClass:"sp-t-0-3"},[_vm._v("В личном кабинете Ростелекома")])]),_vm._v(" "),_c('div',{staticClass:"ld-mygame-line-item"},[_c('img',{staticClass:"ld-mygame-line-cube",attrs:{"src":"https://static-cdn.rt.ru/sites/default/files/img/mygame/cube.png","alt":""}}),_vm._v(" "),_c('p',[_vm._v("Активируйте опцию")]),_vm._v(" "),_c('p',{staticClass:"sp-t-0-3"},[_vm._v("MY.GAMES и получайте бонусы")])])])])])])}]



/***/ }),

/***/ "./src/example-pages/components/pages/promo/game.vue":
/*!***********************************************************!*\
  !*** ./src/example-pages/components/pages/promo/game.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game_vue_vue_type_template_id_34d5bdee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game.vue?vue&type=template&id=34d5bdee& */ "./src/example-pages/components/pages/promo/game.vue?vue&type=template&id=34d5bdee&");
/* harmony import */ var _game_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game.vue?vue&type=script&lang=js& */ "./src/example-pages/components/pages/promo/game.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _game_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _game_vue_vue_type_template_id_34d5bdee___WEBPACK_IMPORTED_MODULE_0__["render"],
  _game_vue_vue_type_template_id_34d5bdee___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/example-pages/components/pages/promo/game.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./src/example-pages/components/pages/promo/game.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_game_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/vue-loader/lib??vue-loader-options!./game.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/example-pages/components/pages/promo/game.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_game_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/example-pages/components/pages/promo/game.vue?vue&type=template&id=34d5bdee&":
/*!******************************************************************************************!*\
  !*** ./src/example-pages/components/pages/promo/game.vue?vue&type=template&id=34d5bdee& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_game_vue_vue_type_template_id_34d5bdee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./game.vue?vue&type=template&id=34d5bdee& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/example-pages/components/pages/promo/game.vue?vue&type=template&id=34d5bdee&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_game_vue_vue_type_template_id_34d5bdee___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_game_vue_vue_type_template_id_34d5bdee___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
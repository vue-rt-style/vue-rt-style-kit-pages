(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[72],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/example-pages/components/pages/promo/vip.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/example-pages/components/pages/promo/vip.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// https://www.rt.ru/sites/default/files/img/videocontrol.04.2021/prize1.jpg
//     https://www.rt.ru/sites/default/files/img/videocontrol.04.2021/prize2.jpg
//         https://www.rt.ru/sites/default/files/img/videocontrol.04.2021/prize3.png
var componentsList = {};
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "AppPromoVip",
  components: componentsList,
  mounted: function mounted() {
    window.addEventListener('scroll', function () {
      var items = document.querySelectorAll('.scroll-slider-item');
      var size = items.length;

      if (size > 0) {
        var wh = window.innerHeight;
        var y = items[0].getClientRects()[0].top;
        var h = items[0].getClientRects()[0].height;
        var activeIndex = Math.abs(parseInt(y / h));

        if (y < wh * 3 / 4) {
          document.querySelector('.scroll-slider-image').classList.add('scroll-slider-image-active');
        } else {
          document.querySelector('.scroll-slider-image').classList.remove('scroll-slider-image-active');
        }

        if (y < wh / 2) {
          document.querySelector('.scroll-slider-pseudo-line').classList.add('scroll-slider-pseudo-line-active');
        } else {
          document.querySelector('.scroll-slider-pseudo-line').classList.remove('scroll-slider-pseudo-line-active');
        }

        var delta = y / h % 1;

        if (delta < -0.5) {
          activeIndex += 1;
        }

        if (h - y >= document.querySelector('.scroll-slider').clientHeight) {
          document.querySelector('.scroll-slider-pseudo-line').classList.add('scroll-slider-pseudo-line-stop');
        } else {
          document.querySelector('.scroll-slider-pseudo-line').classList.remove('scroll-slider-pseudo-line-stop');
        }

        if (activeIndex < size) {
          // console.info('Math.abs(delta)',activeIndex,Math.abs(delta),activeIndex,(Math.abs(delta) >= 0.55 || Math.abs(delta) <= 0.45),Math.abs(delta));
          document.querySelectorAll('.scroll-slider-item-active').forEach(function (i) {
            i.classList.remove('scroll-slider-item-active');
          });
        }

        if (y < h / 2) {
          if (Math.abs(delta) >= 0.5 || Math.abs(delta) <= 0.4 || activeIndex == 0 && Math.abs(delta) < 0.6 && y < wh * 1 / 2) {
            items[activeIndex].classList.add('scroll-slider-item-active');
            document.querySelector('.scroll-slider-image').style.backgroundImage = 'url(' + items[activeIndex].querySelector('.rt-img').src + ')';
          } else {
            items[activeIndex].classList.remove('scroll-slider-item-active');
          }

          if (!items[activeIndex]) {
            document.querySelector('.scroll-slider-image').style.backgroundImage = 'url(' + items[0].querySelector('.rt-img').src + ')';
            items[activeIndex].classList.remove('scroll-slider-item-active');

            if (document.querySelector('.scroll-slider-item-active')) {
              document.querySelector('.scroll-slider-item-active').classList.remove('scroll-slider-item-active');
            }
          }
        }
      }
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/example-pages/components/pages/promo/vip.vue?vue&type=template&id=919a2258&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/example-pages/components/pages/promo/vip.vue?vue&type=template&id=919a2258& ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:"color-block--dark-slate",staticStyle:{"height":"2000px"}}),_vm._v(" "),_c('div',{staticClass:"wc-inline"},[_c('div',{directives:[{name:"rt-resize-content-height",rawName:"v-rt-resize-content-height",value:({querySelectorsNames: '.scroll-slider-item h2'}),expression:"{querySelectorsNames: '.scroll-slider-item h2'}"}],staticClass:"scroll-slider"},[_c('div',{staticClass:"rt-container"},[_c('rt-col',[_c('rt-row',{directives:[{name:"rt-resize-content-height",rawName:"v-rt-resize-content-height",value:({querySelectorsNames: '.scroll-slider-content'}),expression:"{querySelectorsNames: '.scroll-slider-content'}"}]},[_c('rt-col',{attrs:{"size":"5","tablet-size":"6"}},[_c('div',{staticClass:"scroll-slider-item d-flex flex-v-center td-sp-t-3"},[_c('div',{staticClass:"rt-col"},[_c('div',{staticClass:"row td-flex-column-reverse"},[_c('h2',{staticClass:"td-sp-t-2 scroll-slider-title rt-font-h2"},[_c('span',{staticClass:"color-orange"},[_vm._v("Вы сможете")]),_vm._v("\n                      фиксировать\n                      благодарности клиентов\n                    ")]),_vm._v(" "),_c('div',{staticClass:"scroll-slider-content"},[_c('div',{staticClass:"d-flex font-t-l sp-t-1-3 td-sp-t-1-2"},[_c('rt-system-icons',{attrs:{"name":"check small","color":"orange"}}),_vm._v(" "),_c('p',{staticClass:"sp-l-0-2"},[_vm._v("Настройте ключевые слова и фразы, которые будут сигнализировать о том,\n                          что\n                          клиент доволен тем, как был решен его вопрос во время звонка в вашу компанию")])],1),_vm._v(" "),_c('div',{staticClass:"d-flex font-t-l sp-t-0-4"},[_c('rt-system-icons',{attrs:{"name":"check small","color":"orange"}}),_vm._v(" "),_c('p',{staticClass:"sp-l-0-2"},[_vm._v("Поощряйте сотрудников, которые получают благодарности и высокую оценку\n                          от\n                          клиентов")])],1),_vm._v(" "),_c('div',{staticClass:"d-flex font-t-l sp-b-2 sp-t-0-4 td-sp-b-3"},[_c('rt-system-icons',{attrs:{"name":"check small","color":"orange"}}),_vm._v(" "),_c('p',{staticClass:"sp-l-0-2"},[_vm._v("Фиксируйте количество хороших отзывов и оценивайте качество\n                          обслуживания,\n                          совершенствуя скрипты продаж")])],1)]),_vm._v(" "),_c('rt-button',{staticClass:"td-d-none",attrs:{"color":"orange"}},[_vm._v("Заказать консультацию")]),_vm._v(" "),_c('rt-col',{staticClass:"td-d-block scroll-slider-orig-image",attrs:{"tablet-size":"6","hide":true}},[_c('rt-img',{attrs:{"src":"https://www.rt.ru/sites/default/files/img/speech_analytics/Frame%201.jpg","x2-src":"https://www.rt.ru/sites/default/files/img/speech_analytics/Frame%201%402x.jpg"}})],1)],1)])]),_vm._v(" "),_c('div',{staticClass:"scroll-slider-item d-flex flex-v-center td-sp-t-3"},[_c('div',{staticClass:"rt-col"},[_c('div',{staticClass:"row td-flex-column-reverse"},[_c('h2',{staticClass:"td-sp-t-2 scroll-slider-title rt-font-h2"},[_c('span',{staticClass:"color-orange"},[_vm._v("Вы сможете")]),_vm._v("\n                      работать с\n                      жалобами клиентов")]),_vm._v(" "),_c('div',{staticClass:"scroll-slider-content"},[_c('div',{staticClass:"d-flex font-t-l sp-t-1-3 td-sp-t-1-2"},[_c('rt-system-icons',{attrs:{"name":"check small","color":"orange"}}),_vm._v(" "),_c('p',{staticClass:"sp-l-0-2"},[_vm._v("Настраивайте критерии, с помощью которых можно будет отслеживать долю\n                          и\n                          количество разговоров, в которых клиенты обращались по телефону с жалобой")])],1),_vm._v(" "),_c('div',{staticClass:"d-flex font-t-l sp-t-0-4"},[_c('rt-system-icons',{attrs:{"name":"check small","color":"orange"}}),_vm._v(" "),_c('p',{staticClass:"sp-l-0-2"},[_vm._v("Отслеживайте, как ваши сотрудники реагируют на жалобу клиента и\n                          помогают\n                          амортизировать конфликтную ситуацию\n                        ")])],1),_vm._v(" "),_c('div',{staticClass:"d-flex font-t-l sp-b-2 sp-t-0-4 td-sp-b-none"},[_c('rt-system-icons',{attrs:{"name":"check small","color":"orange"}}),_vm._v(" "),_c('p',{staticClass:"sp-l-0-2"},[_vm._v("Фиксируйте количество жалоб и совершенствуйте скрипты продаж,\n                          бизнес-процессы\n                          и взаимодействие ваших операторов с клиентами по телефону\n                        ")])],1)]),_vm._v(" "),_c('rt-button',{staticClass:"td-d-none",attrs:{"color":"orange"}},[_vm._v("Заказать консультацию")]),_vm._v(" "),_c('rt-col',{staticClass:"td-d-block scroll-slider-orig-image",attrs:{"tablet-size":"6","hide":true}},[_c('rt-img',{attrs:{"src":"https://www.rt.ru/sites/default/files/img/speech_analytics/Frame%202.jpg","x2-src":"https://www.rt.ru/sites/default/files/img/speech_analytics/Frame%202%402x.jpg"}})],1)],1)])]),_vm._v(" "),_c('div',{staticClass:"scroll-slider-item d-flex flex-v-center td-sp-t-3"},[_c('div',{staticClass:"rt-col"},[_c('div',{staticClass:"row td-flex-column-reverse"},[_c('h2',{staticClass:"td-sp-t-2 scroll-slider-title rt-font-h2"},[_c('span',{staticClass:"color-orange"},[_vm._v("Вы сможете")]),_vm._v("\n                      настроить\n                      подходящие словари")]),_vm._v(" "),_c('div',{staticClass:"scroll-slider-content"},[_c('div',{staticClass:"d-flex font-t-l sp-t-1-3 td-sp-t-1-2"},[_c('rt-system-icons',{attrs:{"name":"check small","color":"orange"}}),_vm._v(" "),_c('p',{staticClass:"sp-l-0-2"},[_vm._v("Воспользуйтесь предустановленными или создайте свои словари и\n                          отслеживайте\n                          долю и количество разговоров, например, с вежливыми фразами оператора")])],1),_vm._v(" "),_c('div',{staticClass:"d-flex font-t-l sp-t-0-4"},[_c('rt-system-icons',{attrs:{"name":"check small","color":"orange"}}),_vm._v(" "),_c('p',{staticClass:"sp-l-0-2"},[_vm._v("Настраивайте ключевые фразы, по которым будете проверять качество\n                          обслуживания\n                          клиентов")])],1),_vm._v(" "),_c('div',{staticClass:"d-flex font-t-l sp-b-2 sp-t-0-4 td-sp-b-none"},[_c('rt-system-icons',{attrs:{"name":"check small","color":"orange"}}),_vm._v(" "),_c('p',{staticClass:"sp-l-0-2"},[_vm._v("Укажите слова-теги и отслеживайте как часто их произносят операторы\n                          или\n                          клиенты, отслеживайте статистику по каждому тегу")])],1)]),_vm._v(" "),_c('rt-button',{staticClass:"td-d-none",attrs:{"color":"orange"}},[_vm._v("Заказать консультацию")]),_vm._v(" "),_c('rt-col',{staticClass:"td-d-block scroll-slider-orig-image",attrs:{"tablet-size":"6","hide":true}},[_c('rt-img',{attrs:{"src":"https://www.rt.ru/sites/default/files/img/speech_analytics/Frame%203.jpg","x2-src":"https://www.rt.ru/sites/default/files/img/speech_analytics/Frame%203%402x.jpg"}})],1)],1)])]),_vm._v(" "),_c('div',{staticClass:"scroll-slider-item d-flex flex-v-center td-sp-t-3"},[_c('div',{staticClass:"rt-col"},[_c('div',{staticClass:"row td-flex-column-reverse"},[_c('h2',{staticClass:"td-sp-t-2 scroll-slider-title"},[_c('span',{staticClass:"color-orange"},[_vm._v("Вы сможете")]),_vm._v("\n                      выгружать\n                      данные из личного кабинета\n                    ")]),_vm._v(" "),_c('div',{staticClass:"scroll-slider-content"},[_c('div',{staticClass:"d-flex font-t-l sp-t-1-3 td-sp-t-1-2"},[_c('rt-system-icons',{attrs:{"name":"check small","color":"orange"}}),_vm._v(" "),_c('p',{staticClass:"sp-l-0-2"},[_vm._v("Скачивайте транскрибированные разговоры прямо из личного кабинета и\n                          смотрите\n                          отдельные части или весь разговор в формате пьесы или мессенджера")])],1),_vm._v(" "),_c('div',{staticClass:"d-flex font-t-l sp-t-0-4"},[_c('rt-system-icons',{attrs:{"name":"check small","color":"orange"}}),_vm._v(" "),_c('p',{staticClass:"sp-l-0-2"},[_vm._v("Загружайте файлы со скриптами для операторов и смотрите статистику по\n                          всем\n                          разговорам с клиентами")])],1),_vm._v(" "),_c('div',{staticClass:"d-flex font-t-l sp-b-2 sp-t-0-4 td-sp-b-none"},[_c('rt-system-icons',{attrs:{"name":"check small","color":"orange"}}),_vm._v(" "),_c('p',{staticClass:"sp-l-0-2"},[_vm._v("Для улучшения обслуживания используйте формируемые системой топ слова,\n                          которые\n                          наиболее часто произносят операторы и клиенты")])],1)]),_vm._v(" "),_c('rt-button',{staticClass:"td-d-none",attrs:{"color":"orange"}},[_vm._v("Заказать консультацию")]),_vm._v(" "),_c('rt-col',{staticClass:"td-d-block scroll-slider-orig-image",attrs:{"tablet-size":"6","hide":true}},[_c('rt-img',{attrs:{"src":"https://www.rt.ru/sites/default/files/img/speech_analytics/Frame%204.jpg","x2-src":"https://www.rt.ru/sites/default/files/img/speech_analytics/Frame%204%402x.jpg"}})],1)],1)])])]),_vm._v(" "),_c('rt-col',{attrs:{"size":"1","t-hide":true}}),_vm._v(" "),_c('rt-col',{attrs:{"size":"6","t-hide":true}},[_c('div',{staticClass:"scroll-slider-image d-flex flex-v-center"})]),_vm._v(" "),_c('div',{staticClass:"scroll-slider-pseudo-line"},[_c('rt-col',[_c('rt-button',{staticClass:"rt-button--is-block",attrs:{"color":"orange"}},[_vm._v("Заказать консультацию")])],1)],1)],1)],1)],1)])]),_vm._v(" "),_c('div',{staticClass:"wc-inline"},[_c('rt-col',[_c('div',{staticClass:"rt-container sp-v-3 td-sp-v-2 md-sp-v-2-2"},[_c('div',{staticClass:"d-flex"},[_c('svg',{attrs:{"width":"28","height":"24","viewBox":"0 0 28 24","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"d":"M0 22.3723V0H28V22.3723C28 23.118 27.2132 23.6014 26.548 23.2643L14.904 17.3645C14.3357 17.0765 13.6643 17.0765 13.0961 17.3645L1.45198 23.2643C0.786777 23.6014 0 23.118 0 22.3723Z","fill":"#FF4F12"}})]),_vm._v(" "),_c('h2',{staticClass:"sp-l-1"},[_vm._v("Акция! Подключайте услугу до 13 августа")])]),_vm._v(" "),_c('div',{staticClass:"d-flex sp-t-1-3 sp-b-2"},[_c('rt-system-icons',{attrs:{"name":"check small","color":"orange"}}),_vm._v(" "),_c('p',{staticClass:"sp-l-0-2"},[_vm._v("Пользуйтесь услугой бесплатно в течении 30 дней. После окончания акции стоимость\n            услуги\n            — 1 ₽ "),_c('br'),_vm._v("за каждую минуту анализируемой речи")])],1),_vm._v(" "),_c('rt-row',{staticClass:"tree-block-wrapper"},[_c('rt-col',{staticClass:"tree-block color-block--main-color003 round-border sp-t-2 sp-b-2 sp-l-2 sp-r-2 d-flex d-space-between md-d-block",attrs:{"size":"9","tablet-size":"6"}},[_c('div',{staticClass:"tree-block-item md-sp-b-1-3"},[_c('div',{staticClass:"d-flex sp-b-0-4"},[_c('rt-system-icons',{attrs:{"name":"calendar","color":"orange"}}),_vm._v(" "),_c('p',{staticClass:"sp-l-0-3 font-t-s"},[_vm._v("Промопериод "),_c('br'),_vm._v("по акции")])],1),_vm._v(" "),_c('p',{staticClass:"rt-font-h3"},[_vm._v("30 дней")])]),_vm._v(" "),_c('div',{staticClass:"tree-block-item sp-l-2 td-sp-l-2-1 md-sp-l-none md-sp-t-1-3 md-sp-b-1-3"},[_c('div',{staticClass:"d-flex sp-b-0-4"},[_c('rt-system-icons',{attrs:{"name":"statistics column","color":"orange"}}),_vm._v(" "),_c('p',{staticClass:"sp-l-0-3 font-t-s"},[_vm._v("Стоимость "),_c('br'),_vm._v("аналитики речи")])],1),_vm._v(" "),_c('p',{},[_c('span',{staticClass:"old-val sp-r-0-2"},[_vm._v("1")]),_c('span',{staticClass:"rt-font-h3"},[_vm._v("0 руб./мес.")])])]),_vm._v(" "),_c('div',{staticClass:"tree-block-item sp-l-2 td-sp-l-2-1 md-sp-l-none md-sp-t-1-3 md-sp-b-1-3"},[_c('div',{staticClass:"d-flex sp-b-0-4"},[_c('rt-system-icons',{attrs:{"name":"voice","color":"orange"}}),_vm._v(" "),_c('p',{staticClass:"sp-l-0-3 font-t-s"},[_vm._v("Абонентская плата "),_c('br'),_vm._v("за запись разговоров")])],1),_vm._v(" "),_c('p',{},[_c('span',{staticClass:"old-val sp-r-0-2"},[_vm._v("100")]),_c('span',{staticClass:"rt-font-h3"},[_vm._v("0 руб./мес.")])])])]),_vm._v(" "),_c('div',{staticClass:"tree-block-neighbor"},[_c('p',{staticClass:"font-h-l"},[_c('span',{staticClass:"color-orange"},[_vm._v("Внимание!")]),_vm._v(" Для использования услуги речевой\n              аналитики вам необходимо подключить услугу Виртуальная АТС от Ростелеком")]),_vm._v(" "),_c('p',{staticClass:"font-t-m sp-t-0-4 sp-b-1-2"},[_vm._v("Услуга подключается через Личный кабинет Виртуальной АТС")]),_vm._v(" "),_c('rt-button',{staticClass:"rt-button-md--is-block",attrs:{"color":"gray"}},[_vm._v("Перейти на страницу услуги")])],1)],1)],1)])],1),_vm._v(" "),_c('div',{staticClass:"color-block--dark-slate",staticStyle:{"height":"400px"}})])}
var staticRenderFns = []



/***/ }),

/***/ "./src/example-pages/components/pages/promo/vip.vue":
/*!**********************************************************!*\
  !*** ./src/example-pages/components/pages/promo/vip.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vip_vue_vue_type_template_id_919a2258___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vip.vue?vue&type=template&id=919a2258& */ "./src/example-pages/components/pages/promo/vip.vue?vue&type=template&id=919a2258&");
/* harmony import */ var _vip_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vip.vue?vue&type=script&lang=js& */ "./src/example-pages/components/pages/promo/vip.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _vip_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _vip_vue_vue_type_template_id_919a2258___WEBPACK_IMPORTED_MODULE_0__["render"],
  _vip_vue_vue_type_template_id_919a2258___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/example-pages/components/pages/promo/vip.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./src/example-pages/components/pages/promo/vip.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_vip_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/vue-loader/lib??vue-loader-options!./vip.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/example-pages/components/pages/promo/vip.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_vip_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/example-pages/components/pages/promo/vip.vue?vue&type=template&id=919a2258&":
/*!*****************************************************************************************!*\
  !*** ./src/example-pages/components/pages/promo/vip.vue?vue&type=template&id=919a2258& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_vip_vue_vue_type_template_id_919a2258___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./vip.vue?vue&type=template&id=919a2258& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/example-pages/components/pages/promo/vip.vue?vue&type=template&id=919a2258&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_vip_vue_vue_type_template_id_919a2258___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_vip_vue_vue_type_template_id_919a2258___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
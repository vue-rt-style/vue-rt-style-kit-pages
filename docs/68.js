(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[68],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/example-pages/components/pages/promo/business-drive.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/example-pages/components/pages/promo/business-drive.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "AppPromoBusinessDrive",
  components: componentsList,
  mounted: function mounted() {
    window.addEventListener('DOMContentLoaded', animateKeyVisual);

    function animateKeyVisual() {
      document.querySelector('.animated-text').classList.add('animated-text--active');
    }

    document.querySelector('.mobile-burger').addEventListener('click', function () {
      if (!document.querySelector('.mobile-burger').classList.contains('mobile-burger--active')) {
        document.querySelector('.mobile-burger').classList.add('mobile-burger--active');
        document.querySelector('.business-drive__header-menu').classList.add('business-drive__header-menu--active');
      } else {
        document.querySelector('.mobile-burger').classList.remove('mobile-burger--active');
        document.querySelector('.business-drive__header-menu').classList.remove('business-drive__header-menu--active');
      }
    });

    for (var i = 0; i < document.querySelectorAll('.rt-scroll-tab-header__item').length; i++) {
      document.querySelectorAll('.rt-scroll-tab-header__item')[i].addEventListener('click', function () {
        document.querySelector('.mobile-burger').classList.remove('mobile-burger--active');
        document.querySelector('.business-drive__header-menu').classList.remove('business-drive__header-menu--active');
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/example-pages/components/pages/promo/business-drive.vue?vue&type=template&id=48fc5c97&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/example-pages/components/pages/promo/business-drive.vue?vue&type=template&id=48fc5c97& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"business-drive is-b2b"},[_c('div',{staticClass:"business-drive__header color-block--white"},[_c('div',{staticClass:"rt-container"},[_c('div',{staticClass:"rt-col"},[_c('rt-logo',{attrs:{"height":"40px","width":"24px","top-fill-color":"b2c-slate"}}),_vm._v(" "),_vm._m(0),_vm._v(" "),_c('div',{staticClass:"business-drive__header-menu"},[_c('div',{staticClass:"business-drive__tabs-wrapper"},[_c('rt-scroll-tabs',{staticClass:"rt-scroll-tab-header rt-font-bold",attrs:{"active-tabs-classname":"rt-scroll-tab-header__item--active","tabs-classname":"rt-scroll-tab-header__item","top-padding":150,"remove-base-tag":false}},[_c('div',{staticClass:"rt-scroll-tab-nav"},[_c('a',{staticClass:"rt-scroll-tab-header__item",attrs:{"href":"#one"}},[_vm._v("Спикеры")]),_vm._v(" "),_c('a',{staticClass:"rt-scroll-tab-header__item",attrs:{"href":"#two"}},[_vm._v("Программа")]),_vm._v(" "),_c('a',{staticClass:"rt-scroll-tab-header__item",attrs:{"href":"#three"}},[_vm._v("Как это было")]),_vm._v(" "),_c('a',{staticClass:"rt-scroll-tab-header__item",attrs:{"href":"#four"}},[_vm._v("Как добраться")])])])],1),_vm._v(" "),_c('div',{staticClass:"button-wrapper"},[_c('a',{attrs:{"href":"#registration-form"}},[_c('rt-button',{staticClass:"rt-button-small rt-button-orange"},[_vm._v("Регистрация")])],1)])])],1)])]),_vm._v(" "),_c('div',{staticClass:"color-block--dark-blue-low color-white rt-font-bold"},[_c('div',{staticClass:"rt-container"},[_c('div',{staticClass:"rt-col"},[_c('div',{staticClass:"animated-text"},[_c('div',{staticClass:"animated-text__line animated-text__first-line"},[_vm._v("Бизнес")]),_vm._v(" "),_vm._m(1),_vm._v(" "),_vm._m(2),_vm._v(" "),_vm._m(3),_vm._v(" "),_vm._m(4),_vm._v(" "),_c('div',{staticClass:"animated-text__line animated-text__eighth-line"},[_c('div',{staticClass:"meeting-legend"},[_vm._v("Тюмень, БЦ Аметист\n              "),_c('div',{staticClass:"icon navigation-icon"},[_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 30 30"}},[_c('path',{attrs:{"fill":"#FF4F12","fill-rule":"evenodd","d":"M0 15h15v15h1.667L30 0 0 13.333z"}})])])]),_vm._v(" "),_c('div',{staticClass:"meeting-legend"},[_vm._v("22 мая\n              "),_c('div',{staticClass:"icon calendar-icon"},[_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 30 30"}},[_c('g',{attrs:{"fill":"#FF4E00"}},[_c('path',{attrs:{"d":"M30 30H0V3.158h5.893v4.64H4.64V25.39h20.722V7.798h-1.317v-4.64H30z"}}),_vm._v(" "),_c('path',{attrs:{"d":"M7.895 0h4.737v9.474H7.895zm9.473 0h4.737v9.474h-4.737zm-4.736 3.158h3.158v4.737h-3.158z"}})])])])])]),_vm._v(" "),_c('div',{staticClass:"rt-space-top2"},[_c('div',{staticClass:"animated-text__line animated-text__eighth-line"},[_c('div',{staticClass:"button-bounce"},[_c('rt-button',{staticClass:"rt-button-orange"},[_vm._v("Принять участие")])],1)])])])])])]),_vm._v(" "),_c('div',{staticClass:"first-gradient-section"},[_c('div',{staticClass:"rt-container"},[_c('div',{staticClass:"rt-col"},[_c('div',{attrs:{"id":"one"}},[_c('h2',{staticClass:"rt-font-h2 color-white rt-space-bottom05 rt-font-bold"},[_vm._v("Без «воды», без общих слов")]),_vm._v(" "),_vm._m(5),_vm._v(" "),_c('rt-portrait-tile',[_c('rt-portrait-tile-item',{attrs:{"photo":"/static/images/B2B/business__drive/photo1.png","small-image":true}},[_c('template',{slot:"title"},[_vm._v("Михаил Качалкин")]),_vm._v(" "),_c('template',{slot:"theme"},[_vm._v("Техника знакомства"),_c('br'),_vm._v(" и получения полезных"),_c('br'),_vm._v(" для бизнеса контактов и получения полезных"),_c('br'),_vm._v(" для бизнеса контактов")]),_vm._v(" "),_c('template',{slot:"reputation"},[_c('p',{staticClass:"rt-font-paragraph td-d-none"},[_vm._v("Предприниматель, эксперт "),_c('br'),_vm._v("по клиентоцентричному сервису")])]),_vm._v(" "),_c('template',{slot:"description"},[_c('p',{staticClass:"rt-font-small-paragraph rt-space-bottom"},[_vm._v("Основатель Агентства «Умные метрики». С 2007 года занимался\n                  построением клиентского сервиса в крупных компаниях, таких как «Мосэнерго» / «МГЭСК» (2007-2008),\n                  «Сбербанк» (2008-2014), «Росстандарт» (2017), «ВЭБ» / «Связь банк» с 2017 года. Так же работал с\n                  Компанией «МТС», «Альфа банком» и «Сбербанк CIB» (крупнейшие клиенты).")]),_vm._v(" "),_c('p',{staticClass:"rt-font-small-paragraph rt-space-bottom"},[_vm._v("Являясь директором по маркетингу, создавал уникальный клиентский\n                  сервис в «Модуль банке», и по версии Агентства «Markswebb Банк» вошел в ТОП 3 самых удобных и\n                  востребованных предпринимателями банков. За 3 года привлек более 100 000 клиентов малого бизнеса.")]),_vm._v(" "),_c('p',{staticClass:"rt-font-small-paragraph"},[_vm._v("Разработал свою методологию построения «Матрицы сервисных\n                  сценариев» и «Цифровые метрики клиентской удовлетворённости». Является экспертом в построении\n                  клиентоцентричных стратегий в развитии бизнеса. Совладелец 3 компаний малого бизнеса.")])])],2),_vm._v(" "),_c('rt-portrait-tile-item',{attrs:{"photo":"/static/images/B2B/business__drive/photo2.png","small-image":true}},[_c('template',{slot:"title"},[_vm._v("Михаил Качалкин")]),_vm._v(" "),_c('template',{slot:"theme"},[_vm._v("Техника знакомства"),_c('br'),_vm._v(" и получения полезных"),_c('br'),_vm._v(" для бизнеса контактов")]),_vm._v(" "),_c('template',{slot:"reputation"},[_c('p',{staticClass:"rt-font-paragraph td-d-none"},[_vm._v("Предприниматель, эксперт "),_c('br'),_vm._v("по клиентоцентричному сервису")])]),_vm._v(" "),_c('template',{slot:"description"},[_c('p',{staticClass:"rt-font-small-paragraph rt-space-bottom"},[_vm._v("Являясь директором по маркетингу, создавал уникальный клиентский\n                  сервис в «Модуль банке», и по версии Агентства «Markswebb Банк» вошел в ТОП 3 самых удобных и\n                  востребованных предпринимателями банков. За 3 года привлек более 100 000 клиентов малого бизнеса.")]),_vm._v(" "),_c('p',{staticClass:"rt-font-small-paragraph rt-space-bottom"},[_vm._v("Разработал свою методологию построения «Матрицы сервисных\n                  сценариев» и «Цифровые метрики клиентской удовлетворённости». Является экспертом в построении\n                  клиентоцентричных стратегий в развитии бизнеса. Совладелец 3 компаний малого бизнеса.")]),_vm._v(" "),_c('p',{staticClass:"rt-font-small-paragraph"},[_vm._v("Основатель Агентства «Умные метрики». С 2007 года занимался\n                  построением клиентского сервиса в крупных компаниях, таких как «Мосэнерго» / «МГЭСК» (2007-2008),\n                  «Сбербанк» (2008-2014), «Росстандарт» (2017), «ВЭБ» / «Связь банк» с 2017 года. Так же работал с\n                  Компанией «МТС», «Альфа банком» и «Сбербанк CIB» (крупнейшие клиенты).")])])],2),_vm._v(" "),_c('rt-portrait-tile-item',{attrs:{"photo":"/static/images/B2B/business__drive/photo3.png","small-image":true}},[_c('template',{slot:"title"},[_vm._v("Михаил Качалкин")]),_vm._v(" "),_c('template',{slot:"theme"},[_vm._v("Техника знакомства"),_c('br'),_vm._v(" и получения полезных"),_c('br'),_vm._v(" для бизнеса контактов")]),_vm._v(" "),_c('template',{slot:"reputation"},[_c('p',{staticClass:"rt-font-paragraph td-d-none"},[_vm._v("Предприниматель, эксперт "),_c('br'),_vm._v("по клиентоцентричному сервису")])]),_vm._v(" "),_c('template',{slot:"description"},[_c('p',{staticClass:"rt-font-small-paragraph rt-space-bottom"},[_vm._v("Разработал свою методологию построения «Матрицы сервисных\n                  сценариев» и «Цифровые метрики клиентской удовлетворённости». Является экспертом в построении\n                  клиентоцентричных стратегий в развитии бизнеса. Совладелец 3 компаний малого бизнеса.")]),_vm._v(" "),_c('p',{staticClass:"rt-font-small-paragraph rt-space-bottom"},[_vm._v("Основатель Агентства «Умные метрики». С 2007 года занимался\n                  построением клиентского сервиса в крупных компаниях, таких как «Мосэнерго» / «МГЭСК» (2007-2008),\n                  «Сбербанк» (2008-2014), «Росстандарт» (2017), «ВЭБ» / «Связь банк» с 2017 года. Так же работал с\n                  Компанией «МТС», «Альфа банком» и «Сбербанк CIB» (крупнейшие клиенты).")]),_vm._v(" "),_c('p',{staticClass:"rt-font-small-paragraph"},[_vm._v("Являясь директором по маркетингу, создавал уникальный клиентский\n                  сервис в «Модуль банке», и по версии Агентства «Markswebb Банк» вошел в ТОП 3 самых удобных и\n                  востребованных предпринимателями банков. За 3 года привлек более 100 000 клиентов малого бизнеса.")])])],2),_vm._v(" "),_c('rt-portrait-tile-item',{attrs:{"photo":"/static/images/B2B/business__drive/photo4.png"}},[_c('template',{slot:"title"},[_vm._v("Михаил Качалкин")]),_vm._v(" "),_c('template',{slot:"theme"},[_vm._v("Техника знакомства"),_c('br'),_vm._v(" и получения полезных"),_c('br'),_vm._v(" для бизнеса контактов")]),_vm._v(" "),_c('template',{slot:"reputation"},[_c('p',{staticClass:"rt-font-paragraph td-d-none"},[_vm._v("Предприниматель, эксперт "),_c('br'),_vm._v("по клиентоцентричному сервису")])]),_vm._v(" "),_c('template',{slot:"description"},[_c('p',{staticClass:"rt-font-small-paragraph rt-space-bottom"},[_vm._v("Разработал свою методологию построения «Матрицы сервисных\n                  сценариев» и «Цифровые метрики клиентской удовлетворённости». Является экспертом в построении\n                  клиентоцентричных стратегий в развитии бизнеса. Совладелец 3 компаний малого бизнеса.")]),_vm._v(" "),_c('p',{staticClass:"rt-font-small-paragraph rt-space-bottom"},[_vm._v("Являясь директором по маркетингу, создавал уникальный клиентский\n                  сервис в «Модуль банке», и по версии Агентства «Markswebb Банк» вошел в ТОП 3 самых удобных и\n                  востребованных предпринимателями банков. За 3 года привлек более 100 000 клиентов малого бизнеса.")]),_vm._v(" "),_c('p',{staticClass:"rt-font-small-paragraph"},[_vm._v("Основатель Агентства «Умные метрики». С 2007 года занимался\n                  построением клиентского сервиса в крупных компаниях, таких как «Мосэнерго» / «МГЭСК» (2007-2008),\n                  «Сбербанк» (2008-2014), «Росстандарт» (2017), «ВЭБ» / «Связь банк» с 2017 года. Так же работал с\n                  Компанией «МТС», «Альфа банком» и «Сбербанк CIB» (крупнейшие клиенты).")])])],2),_vm._v(" "),_c('rt-portrait-tile-item',{attrs:{"photo":"/static/images/B2B/business__drive/photo4.png"}},[_c('template',{slot:"title"},[_vm._v("Михаил Качалкин")]),_vm._v(" "),_c('template',{slot:"theme"},[_vm._v("Техника знакомства"),_c('br'),_vm._v(" и получения полезных"),_c('br'),_vm._v(" для бизнеса контактов")]),_vm._v(" "),_c('template',{slot:"reputation"},[_c('p',{staticClass:"rt-font-paragraph td-d-none"},[_vm._v("Предприниматель, эксперт "),_c('br'),_vm._v("по клиентоцентричному сервису")])]),_vm._v(" "),_c('template',{slot:"description"},[_c('p',{staticClass:"rt-font-small-paragraph rt-space-bottom"},[_vm._v("Разработал свою методологию построения «Матрицы сервисных\n                  сценариев» и «Цифровые метрики клиентской удовлетворённости». Является экспертом в построении\n                  клиентоцентричных стратегий в развитии бизнеса. Совладелец 3 компаний малого бизнеса.")]),_vm._v(" "),_c('p',{staticClass:"rt-font-small-paragraph rt-space-bottom"},[_vm._v("Являясь директором по маркетингу, создавал уникальный клиентский\n                  сервис в «Модуль банке», и по версии Агентства «Markswebb Банк» вошел в ТОП 3 самых удобных и\n                  востребованных предпринимателями банков. За 3 года привлек более 100 000 клиентов малого бизнеса.")]),_vm._v(" "),_c('p',{staticClass:"rt-font-small-paragraph"},[_vm._v("Основатель Агентства «Умные метрики». С 2007 года занимался\n                  построением клиентского сервиса в крупных компаниях, таких как «Мосэнерго» / «МГЭСК» (2007-2008),\n                  «Сбербанк» (2008-2014), «Росстандарт» (2017), «ВЭБ» / «Связь банк» с 2017 года. Так же работал с\n                  Компанией «МТС», «Альфа банком» и «Сбербанк CIB» (крупнейшие клиенты).")])])],2)],1),_vm._v(" "),_vm._m(6)],1),_vm._v(" "),_c('div',{attrs:{"id":"two"}},[_vm._m(7),_vm._v(" "),_c('div',{staticClass:"row"},[_c('div',{staticClass:"rt-col-1 td-d-none"}),_vm._v(" "),_c('div',{staticClass:"rt-col-10 rt-col-td-6 rt-col-md-3"},[_c('rt-timeline',[_c('rt-timeline-item',[_c('template',{slot:"time-stamp"},[_vm._v("09:30")]),_vm._v(" "),_c('template',{slot:"theme"},[_vm._v("Сбор участников,"),_c('br',{staticClass:"desktop-only"}),_vm._v(" регистрация")])],2),_vm._v(" "),_c('rt-timeline-item',{attrs:{"top-margin":"50"}},[_c('template',{slot:"time-stamp"},[_vm._v("10:00")]),_vm._v(" "),_c('template',{slot:"theme"},[_vm._v("Открытие "),_c('br',{staticClass:"desktop-only"}),_vm._v("конференции")])],2),_vm._v(" "),_c('rt-timeline-item',{attrs:{"important":true,"image":"/static/images/B2B/business__drive/photo1.png","top-margin":"10","speaker-event":true}},[_c('template',{slot:"time-stamp"},[_vm._v("10:15")]),_vm._v(" "),_c('template',{slot:"theme"},[_vm._v("Техника знакомства"),_c('br'),_vm._v(" и получения полезных"),_c('br'),_vm._v(" для бизнеса контактов")]),_vm._v(" "),_c('template',{slot:"speaker-name"},[_vm._v("Владимир Маринович")]),_vm._v(" "),_c('template',{slot:"reputation"},[_c('p',{staticClass:"rt-font-paragraph"},[_vm._v("Предприниматель, эксперт "),_c('br'),_vm._v("по клиентоцентричному сервису")])]),_vm._v(" "),_c('template',{slot:"description"},[_c('p',{staticClass:"rt-font-small-paragraph rt-space-bottom"},[_vm._v("Основатель Агентства «Умные метрики». С 2007 года занимался\n                      построением клиентского сервиса в крупных компаниях, таких как «Мосэнерго» / «МГЭСК» (2007-2008),\n                      «Сбербанк» (2008-2014), «Росстандарт» (2017), «ВЭБ» / «Связь банк» с 2017 года. Так же работал с\n                      Компанией «МТС», «Альфа банком» и «Сбербанк CIB» (крупнейшие клиенты).")]),_vm._v(" "),_c('p',{staticClass:"rt-font-small-paragraph rt-space-bottom"},[_vm._v("Являясь директором по маркетингу, создавал уникальный клиентский\n                      сервис в «Модуль банке», и по версии Агентства «Markswebb Банк» вошел в ТОП 3 самых удобных и\n                      востребованных предпринимателями банков. За 3 года привлек более 100 000 клиентов малого бизнеса.")]),_vm._v(" "),_c('p',{staticClass:"rt-font-small-paragraph"},[_vm._v("Разработал свою методологию построения «Матрицы сервисных\n                      сценариев» и «Цифровые метрики клиентской удовлетворённости». Является экспертом в построении\n                      клиентоцентричных стратегий в развитии бизнеса. Совладелец 3 компаний малого бизнеса.")])])],2),_vm._v(" "),_c('rt-timeline-item',{attrs:{"important":true,"image":"/static/images/B2B/business__drive/photo3.png","top-margin":"-50","speaker-event":true}},[_c('template',{slot:"time-stamp"},[_vm._v("10:45")]),_vm._v(" "),_c('template',{slot:"theme"},[_vm._v("Маркетинг для малого "),_c('br'),_vm._v("бизнеса: пошаговое "),_c('br'),_vm._v("планирование")]),_vm._v(" "),_c('template',{slot:"speaker-name"},[_vm._v("Антон Шаяхов")]),_vm._v(" "),_c('template',{slot:"reputation"},[_c('p',{staticClass:"rt-font-paragraph"},[_vm._v("Предприниматель, эксперт "),_c('br'),_vm._v("по клиентоцентричному сервису")])]),_vm._v(" "),_c('template',{slot:"description"},[_c('p',{staticClass:"rt-font-small-paragraph rt-space-bottom"},[_vm._v("Являясь директором по маркетингу, создавал уникальный клиентский\n                      сервис в «Модуль банке», и по версии Агентства «Markswebb Банк» вошел в ТОП 3 самых удобных и\n                      востребованных предпринимателями банков. За 3 года привлек более 100 000 клиентов малого бизнеса.")]),_vm._v(" "),_c('p',{staticClass:"rt-font-small-paragraph rt-space-bottom"},[_vm._v("Разработал свою методологию построения «Матрицы сервисных\n                      сценариев» и «Цифровые метрики клиентской удовлетворённости». Является экспертом в построении\n                      клиентоцентричных стратегий в развитии бизнеса. Совладелец 3 компаний малого бизнеса.")]),_vm._v(" "),_c('p',{staticClass:"rt-font-small-paragraph"},[_vm._v("Основатель Агентства «Умные метрики». С 2007 года занимался\n                      построением клиентского сервиса в крупных компаниях, таких как «Мосэнерго» / «МГЭСК» (2007-2008),\n                      «Сбербанк» (2008-2014), «Росстандарт» (2017), «ВЭБ» / «Связь банк» с 2017 года. Так же работал с\n                      Компанией «МТС», «Альфа банком» и «Сбербанк CIB» (крупнейшие клиенты).")])])],2),_vm._v(" "),_c('rt-timeline-item',{attrs:{"top-margin":"-20"}},[_c('template',{slot:"time-stamp"},[_vm._v("12:15")]),_vm._v(" "),_c('template',{slot:"theme"},[_vm._v("Кофе-брейк")])],2),_vm._v(" "),_c('rt-timeline-item',{attrs:{"important":true,"image":"/static/images/B2B/business__drive/photo1.png","top-margin":"90","speaker-event":true}},[_c('template',{slot:"time-stamp"},[_vm._v("12:30")]),_vm._v(" "),_c('template',{slot:"theme"},[_vm._v("Эффективные продажи "),_c('br'),_vm._v("по телефону")]),_vm._v(" "),_c('template',{slot:"speaker-name"},[_vm._v("Настасья Белочкина")]),_vm._v(" "),_c('template',{slot:"reputation"},[_c('p',{staticClass:"rt-font-paragraph"},[_vm._v("Предприниматель, эксперт "),_c('br'),_vm._v("по клиентоцентричному сервису")])]),_vm._v(" "),_c('template',{slot:"description"},[_c('p',{staticClass:"rt-font-small-paragraph rt-space-bottom"},[_vm._v("Разработал свою методологию построения «Матрицы сервисных\n                      сценариев» и «Цифровые метрики клиентской удовлетворённости». Является экспертом в построении\n                      клиентоцентричных стратегий в развитии бизнеса. Совладелец 3 компаний малого бизнеса.")]),_vm._v(" "),_c('p',{staticClass:"rt-font-small-paragraph rt-space-bottom"},[_vm._v("Основатель Агентства «Умные метрики». С 2007 года занимался\n                      построением клиентского сервиса в крупных компаниях, таких как «Мосэнерго» / «МГЭСК» (2007-2008),\n                      «Сбербанк» (2008-2014), «Росстандарт» (2017), «ВЭБ» / «Связь банк» с 2017 года. Так же работал с\n                      Компанией «МТС», «Альфа банком» и «Сбербанк CIB» (крупнейшие клиенты).")]),_vm._v(" "),_c('p',{staticClass:"rt-font-small-paragraph"},[_vm._v("Являясь директором по маркетингу, создавал уникальный клиентский\n                      сервис в «Модуль банке», и по версии Агентства «Markswebb Банк» вошел в ТОП 3 самых удобных и\n                      востребованных предпринимателями банков. За 3 года привлек более 100 000 клиентов малого бизнеса.")])])],2),_vm._v(" "),_c('rt-timeline-item',{attrs:{"important":true,"image":"/static/images/B2B/business__drive/photo3.png","top-margin":"-40"}},[_c('template',{slot:"time-stamp"},[_vm._v("13:30")]),_vm._v(" "),_c('template',{slot:"theme"},[_vm._v("Бизнес-ланч")])],2),_vm._v(" "),_c('rt-timeline-item',{attrs:{"important":true,"image":"/static/images/B2B/business__drive/photo2.png","top-margin":"90","speaker-event":true}},[_c('template',{slot:"time-stamp"},[_vm._v("14:10")]),_vm._v(" "),_c('template',{slot:"theme"},[_vm._v("Создание лучшего "),_c('br'),_vm._v("клиентского сервиса "),_c('br'),_vm._v("и продуктов")]),_vm._v(" "),_c('template',{slot:"speaker-name"},[_vm._v("Михаил Качалкин")]),_vm._v(" "),_c('template',{slot:"reputation"},[_c('p',{staticClass:"rt-font-paragraph"},[_vm._v("Предприниматель, эксперт "),_c('br'),_vm._v("по клиентоцентричному сервису")])]),_vm._v(" "),_c('template',{slot:"description"},[_c('p',{staticClass:"rt-font-small-paragraph rt-space-bottom"},[_vm._v("Разработал свою методологию построения «Матрицы сервисных\n                      сценариев» и «Цифровые метрики клиентской удовлетворённости». Является экспертом в построении\n                      клиентоцентричных стратегий в развитии бизнеса. Совладелец 3 компаний малого бизнеса.")]),_vm._v(" "),_c('p',{staticClass:"rt-font-small-paragraph rt-space-bottom"},[_vm._v("Являясь директором по маркетингу, создавал уникальный клиентский\n                      сервис в «Модуль банке», и по версии Агентства «Markswebb Банк» вошел в ТОП 3 самых удобных и\n                      востребованных предпринимателями банков. За 3 года привлек более 100 000 клиентов малого бизнеса.")]),_vm._v(" "),_c('p',{staticClass:"rt-font-small-paragraph"},[_vm._v("Основатель Агентства «Умные метрики». С 2007 года занимался\n                      построением клиентского сервиса в крупных компаниях, таких как «Мосэнерго» / «МГЭСК» (2007-2008),\n                      «Сбербанк» (2008-2014), «Росстандарт» (2017), «ВЭБ» / «Связь банк» с 2017 года. Так же работал с\n                      Компанией «МТС», «Альфа банком» и «Сбербанк CIB» (крупнейшие клиенты).")])])],2),_vm._v(" "),_c('rt-timeline-item',{attrs:{"important":true,"image":"/static/images/B2B/business__drive/photo4.png","top-margin":"-115","speaker-event":true}},[_c('template',{slot:"time-stamp"},[_vm._v("15:30")]),_vm._v(" "),_c('template',{slot:"theme"},[_vm._v("Как создать эффективную "),_c('br'),_vm._v("команду бизнеса, "),_c('br'),_vm._v("создающую прибыль")]),_vm._v(" "),_c('template',{slot:"speaker-name"},[_vm._v("Владимир Маринович")]),_vm._v(" "),_c('template',{slot:"reputation"},[_c('p',{staticClass:"rt-font-paragraph"},[_vm._v("Предприниматель, эксперт "),_c('br'),_vm._v("по клиентоцентричному сервису")])]),_vm._v(" "),_c('template',{slot:"description"},[_c('p',{staticClass:"rt-font-small-paragraph rt-space-bottom"},[_vm._v("Разработал свою методологию построения «Матрицы сервисных\n                      сценариев» и «Цифровые метрики клиентской удовлетворённости». Является экспертом в построении\n                      клиентоцентричных стратегий в развитии бизнеса. Совладелец 3 компаний малого бизнеса.")]),_vm._v(" "),_c('p',{staticClass:"rt-font-small-paragraph rt-space-bottom"},[_vm._v("Являясь директором по маркетингу, создавал уникальный клиентский\n                      сервис в «Модуль банке», и по версии Агентства «Markswebb Банк» вошел в ТОП 3 самых удобных и\n                      востребованных предпринимателями банков. За 3 года привлек более 100 000 клиентов малого бизнеса.")]),_vm._v(" "),_c('p',{staticClass:"rt-font-small-paragraph"},[_vm._v("Основатель Агентства «Умные метрики». С 2007 года занимался\n                      построением клиентского сервиса в крупных компаниях, таких как «Мосэнерго» / «МГЭСК» (2007-2008),\n                      «Сбербанк» (2008-2014), «Росстандарт» (2017), «ВЭБ» / «Связь банк» с 2017 года. Так же работал с\n                      Компанией «МТС», «Альфа банком» и «Сбербанк CIB» (крупнейшие клиенты).")])])],2),_vm._v(" "),_c('rt-timeline-item',{attrs:{"important":true,"has-image":false,"top-margin":"-30"}},[_c('template',{slot:"time-stamp"},[_vm._v("17:00")]),_vm._v(" "),_c('template',{slot:"theme"},[_vm._v("Подведение итогов, "),_c('br'),_vm._v("розыгрыш призов ")])],2),_vm._v(" "),_c('rt-timeline-item',{attrs:{"top-margin":"30"}},[_c('template',{slot:"time-stamp"},[_vm._v("17:30")]),_vm._v(" "),_c('template',{slot:"theme"},[_vm._v("Кофе-брейк, "),_c('br'),_vm._v("неформальное "),_c('br'),_vm._v("общение")])],2)],1)],1),_vm._v(" "),_c('div',{staticClass:"rt-col-1 td-d-none"})])])])])]),_vm._v(" "),_vm._m(8),_vm._v(" "),_c('rt-real-popup',{staticClass:"speaker-popup",attrs:{"position-bottom":true}},[[_c('rt-scroll-bar',{ref:"ScrollBar"},[_c('div',{staticClass:"popup-content"},[_c('div',{staticClass:"popup-image"}),_vm._v(" "),_c('div',{staticClass:"popup-title"}),_vm._v(" "),_c('h3',{staticClass:"popup-theme"}),_vm._v(" "),_c('div',{staticClass:"popup-reputation rt-font-bold"}),_vm._v(" "),_c('div',{staticClass:"popup-description p2"})])])]],2),_vm._v(" "),_c('rt-real-popup',{staticClass:"thanx-popup",attrs:{"position-center":true}},[[_c('div',{staticClass:"popup-content"},[_c('h3',{staticClass:"rt-font-bold rt-font-h3 rt-space-bottom05"},[_vm._v("Спасибо! Ваша заявка № ХХХХ принята")]),_vm._v(" "),_c('p',{staticClass:"rt-font-paragraph rt-space-bottom"},[_vm._v("В ближайшее время с Вами свяжется наш оператор. Спасибо, что Вы с нами!")]),_vm._v(" "),_c('p',{staticClass:"rt-font-paragraph rt-space-bottom2"},[_vm._v("С уважением, Ваш Ростелеком")]),_vm._v(" "),_c('p',{staticClass:"rt-font-small-paragraph rt-space-bottom color-white03"},[_vm._v("Информационно-справочная служба 8 800 200 3000")]),_vm._v(" "),_c('rt-button',{staticClass:"rt-button rt-button-orange"},[_vm._v("ОК")])],1)]],2)],1)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"mobile-burger-wrapper"},[_c('div',{staticClass:"mobile-burger"})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"animated-text__line animated-text__second-line"},[_c('span',{staticClass:"animated-text__line-item"},[_vm._v("конференция")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"animated-text__line animated-text__third-line"},[_c('span',{staticClass:"animated-text__line-item"},[_vm._v("событие тренинг")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"animated-text__line animated-text__fourth-line"},[_c('span',{staticClass:"animated-text__line-item"},[_vm._v("мероприятие")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"animated-text__line animated-text__fifth-line"},[_c('span',{staticClass:"animated-text__line-item color-orange"},[_vm._v("драйв\n            "),_c('div',{staticClass:"color-white animated-text__footnote"},[_c('div',{staticClass:"animated-text__line animated-text__sixth-line"},[_vm._v("Меньше слов -")]),_vm._v(" "),_c('div',{staticClass:"animated-text__line animated-text__seventh-line"},[_vm._v("больше дела")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h3',{staticClass:"rt-font-h3 color-white03 rt-space-bottom"},[_vm._v("Наши спикеры вовлекают качеством контента, "),_c('br'),_vm._v("а не киловаттами света и звука")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"row"},[_c('div',{staticClass:"rt-col-2 rt-col-td-1 md-d-none"}),_vm._v(" "),_c('div',{staticClass:"rt-col-8 rt-col-td-4 rt-col-md-3"},[_c('div',{staticClass:"business-drive__motto color-white03"},[_c('h1',{staticClass:"rt-font-bold rt-font-h1 business-drive__motto-text"},[_vm._v("Бизнесу не нужны слова, ему нужно работать, чтобы развиваться.\n                  Предприниматели — люди дела, у них нет времени на пустые разговоры")])])]),_vm._v(" "),_c('div',{staticClass:"rt-col-2 rt-col-td-1 md-d-none"})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"row"},[_c('div',{staticClass:"rt-col-8 rt-col-td-6 rt-space-bottom4"},[_c('h2',{staticClass:"rt-font-h2 color-orange rt-space-bottom05 rt-font-bold"},[_vm._v("Программа")]),_vm._v(" "),_c('p',{staticClass:"address-text color-white03"},[_vm._v("Встречаемся 22 мая в Лотте Отеле, ул. Семеновская, д. 29. "),_c('br'),_vm._v("Без\n                «воды», без общих слов, все четко и по делу")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"second-gradient-section"},[_c('div',{staticClass:"rt-container"},[_c('div',{staticClass:"rt-col"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"rt-col-2 rt-col-td-1 md-d-none"}),_vm._v(" "),_c('div',{staticClass:"rt-col-8 rt-col-td-4 rt-col-md-3"},[_c('div',{staticClass:"business-drive__motto color-white03"},[_c('h1',{staticClass:"rt-font-bold rt-font-h1 business-drive__motto-text"},[_vm._v("Им не нужна мотивация, им нужна\n                эффективность. Им не нужны обещания покорения мира, им нужны инструменты для этого")])])]),_vm._v(" "),_c('div',{staticClass:"rt-col-2 rt-col-td-1 md-d-none"})])])]),_vm._v(" "),_c('div',{attrs:{"id":"three"}},[_c('div',{staticClass:"slider-block-title rt-font-center"},[_c('p',{staticClass:"slider-block-title__item slider-block-title__first-line color-white"},[_vm._v("Как это было")]),_vm._v(" "),_c('p',{staticClass:"slider-block-title__item slider-block-title__second-line color-orange"},[_vm._v("#бизнесдрайвростелеком")])]),_vm._v(" "),_c('h1',{staticClass:"rt-font-center color-orange rt-font-bold"},[_vm._v("Insert slider here")]),_vm._v(" "),_c('div',{staticClass:"business-drive__video-block"},[_c('video',{staticClass:"video-wrapper",attrs:{"src":"/static/video/Trailer_Warface_Annoucement_20180628_4000.mp4","controls":""}})])]),_vm._v(" "),_c('div',{staticClass:"rt-container"},[_c('div',{staticClass:"rt-col"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"rt-col-2 rt-col-td-1 md-d-none"}),_vm._v(" "),_c('div',{staticClass:"rt-col-8 rt-col-td-4 rt-col-md-3"},[_c('div',{staticClass:"business-drive__motto color-white03"},[_c('h1',{staticClass:"rt-font-bold rt-font-h1 business-drive__motto-text"},[_vm._v("Мы видим реальную "),_c('span',{staticClass:"color-white"},[_vm._v("картину")]),_c('br',{staticClass:"desktop-only"}),_vm._v("\n                рынка и "),_c('span',{staticClass:"color-white"},[_vm._v("поддерживаем")]),_vm._v(" средний и малый "),_c('span',{staticClass:"color-white"},[_vm._v("бизнес")]),_vm._v("."),_c('br'),_vm._v("\n                Мы "),_c('span',{staticClass:"color-white"},[_vm._v("даем")]),_vm._v(" качественную проверенную "),_c('span',{staticClass:"color-white"},[_vm._v("информацию")]),_vm._v(".\n                Мы "),_c('span',{staticClass:"color-white"},[_vm._v("не берем")]),_vm._v(" плату за участие и "),_c('span',{staticClass:"color-white"},[_vm._v("не навязываем")]),_vm._v(" свои услуги")])])]),_vm._v(" "),_c('div',{staticClass:"rt-col-2 rt-col-td-1 md-d-none"}),_vm._v(" "),_c('a',{attrs:{"name":"registration-form"}},[_c('div',{staticClass:"rt-col-12"},[_c('h1',{staticClass:"rt-font-center color-orange rt-font-bold"},[_vm._v("Insert registration form here")])])])])])]),_vm._v(" "),_c('div',{attrs:{"id":"four"}},[_c('div',{staticClass:"rt-container"},[_c('div',{staticClass:"rt-col"},[_c('div',{staticClass:"row rt-space-bottom2"},[_c('div',{staticClass:"rt-col-5 rt-col-td-3 rt-col-md-3"},[_c('h2',{staticClass:"rt-font-h2 rt-font-bold color-white"},[_vm._v("Как добраться")]),_vm._v(" "),_c('p',{staticClass:"address-text color-white03"},[_vm._v("Драматический театр им. Шукшина "),_c('br',{staticClass:"desktop-only"}),_vm._v("г. Барнаул, ул. Молодежная, 15")])]),_vm._v(" "),_c('div',{staticClass:"rt-col-7"})])])]),_vm._v(" "),_c('div',{staticClass:"map-block"},[_c('iframe',{staticStyle:{"border":"0"},attrs:{"src":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.9156240510147!2d37.645736315863516!3d55.74259500024671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54ae59f73ffa1%3A0x6be8087f23456f55!2z0JPQvtC90YfQsNGA0L3QsNGPINGD0LsuLCAzMCwg0JzQvtGB0LrQstCwLCAxMTUxNzI!5e0!3m2!1sru!2sru!4v1558002281608!5m2!1sru!2sru","width":"1460","height":"420","frameborder":"0","allowfullscreen":""}})])]),_vm._v(" "),_c('div',{staticClass:"rt-container"},[_c('div',{staticClass:"rt-col"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"rt-col-12"},[_c('div',{staticClass:"business-drive__footer rt-font-control color-white"},[_c('span',{staticClass:"business-drive__copyright color-white03"},[_vm._v("© 2017 ПАО «Ростелеком». 18+")]),_vm._v(" "),_c('a',{staticClass:"business-drive__footer-link",attrs:{"href":"#"}},[_vm._v("О компании")]),_vm._v(" "),_c('a',{staticClass:"business-drive__footer-link",attrs:{"href":"#"}},[_vm._v("Услуги для бизнеса")])])])])])])])}]



/***/ }),

/***/ "./src/example-pages/components/pages/promo/business-drive.vue":
/*!*********************************************************************!*\
  !*** ./src/example-pages/components/pages/promo/business-drive.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _business_drive_vue_vue_type_template_id_48fc5c97___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./business-drive.vue?vue&type=template&id=48fc5c97& */ "./src/example-pages/components/pages/promo/business-drive.vue?vue&type=template&id=48fc5c97&");
/* harmony import */ var _business_drive_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./business-drive.vue?vue&type=script&lang=js& */ "./src/example-pages/components/pages/promo/business-drive.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _business_drive_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _business_drive_vue_vue_type_template_id_48fc5c97___WEBPACK_IMPORTED_MODULE_0__["render"],
  _business_drive_vue_vue_type_template_id_48fc5c97___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/example-pages/components/pages/promo/business-drive.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./src/example-pages/components/pages/promo/business-drive.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_business_drive_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/vue-loader/lib??vue-loader-options!./business-drive.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/example-pages/components/pages/promo/business-drive.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_business_drive_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/example-pages/components/pages/promo/business-drive.vue?vue&type=template&id=48fc5c97&":
/*!****************************************************************************************************!*\
  !*** ./src/example-pages/components/pages/promo/business-drive.vue?vue&type=template&id=48fc5c97& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_business_drive_vue_vue_type_template_id_48fc5c97___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./business-drive.vue?vue&type=template&id=48fc5c97& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/example-pages/components/pages/promo/business-drive.vue?vue&type=template&id=48fc5c97&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_business_drive_vue_vue_type_template_id_48fc5c97___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_business_drive_vue_vue_type_template_id_48fc5c97___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[67],{

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    document.body.classList.add('ld-mygame-body');

    var bind = function bind() {
      if (document.querySelector('.ld-mygame-users-item') && !document.querySelector('.wc-inline .ld-mygame-users-item')) {
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

        var calculate = function calculate() {
          var windowH = window.innerHeight;
          var windowW = window.innerWidth;
          var elements = document.querySelectorAll('.cj-animate');
          elements.forEach(function (el) {
            // if (windowW > 767) {
            var deltaAngle = (el.getBoundingClientRect().top - windowH / 4) / windowH;

            if (Math.abs(deltaAngle) > 1.5) {
              if (deltaAngle > 0) {
                deltaAngle = 1.5;
              } else {
                deltaAngle = -1.5;
              }
            }

            deltaAngle = deltaAngle * 100;
            var opacity = (80 - deltaAngle) / 80;

            if (opacity < 0) {
              opacity = 0;
            }

            if (opacity > 1) {
              opacity = 1;
            }

            if (el.classList.contains('cj-animate-revert')) {
              deltaAngle = deltaAngle * -1;
            }

            el.style.transform = 'matrix(1, 0, 0, 1, 0, ' + deltaAngle + ')'; // }
          });
        };

        window.addEventListener('scroll', calculate);
        window.addEventListener('resize', calculate);
        calculate();
        document.querySelectorAll('.ld-mygame-users-content .rt-button').forEach(function (item, index) {
          item.addEventListener('click', function () {
            if (!window.dataLayer) {
              window.dataLayer = [];
            }

            window.dataLayer.push({
              'event': 'b2с',
              'type': 'card_click',
              'value': ['warface', 'lostark', 'archeage', 'crossfire'][index]
            });
          });
        });
        document.querySelector('#form .checkbox-element').addEventListener('change', function (e) {
          if (e.target.checked && !e.target.classList.contains('settedGa')) {
            window.dataLayer.push({
              'event': 'b2с',
              'type': 'checkbox_filling',
              'value': 'existing_user'
            });
            e.target.classList.add('settedGa');
          }
        }).forEach(function (item, index) {
          item.addEventListener('click', function () {
            if (!window.dataLayer) {
              window.dataLayer = [];
            }

            window.dataLayer.push({
              'event': 'b2с',
              'type': 'card_click',
              'value': ['warface', 'lostark', 'archeage', 'crossfire'][index]
            });
          });
        });
      } else {
        setTimeout(function () {
          bind();
        }, 300);
      }
    };

    bind();
    ;

    var getPrice = function getPrice() {
      if (document.querySelector('.third-price-donor').innerText) {
        document.querySelector('.first-price').__vue__.value = document.querySelector('.first-price-donor .rt-price__value').innerText;
        document.querySelector('.second-price').__vue__.value = document.querySelector('.second-price-donor').innerText;
        document.querySelector('.third-price').__vue__.value = document.querySelector('.third-price-donor').innerText;
        document.querySelector('.first-price-container').classList.add('first-price-container--ready');
      } else {
        setTimeout(getPrice, 300);
      }
    };

    getPrice();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/example-pages/components/pages/promo/game.vue?vue&type=template&id=3aca5dc0&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/example-pages/components/pages/promo/game.vue?vue&type=template&id=3aca5dc0& ***!
  \************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:"wc-inline"},[_c('div',{staticClass:"ld-mygame"},[_c('div',{staticClass:"rt-container"},[_c('rt-col',[_c('rt-img',{staticClass:"lg-mygame-points-line-img lg-logo",attrs:{"src":"https://static-cdn.rt.ru/sites/default/files/img/mygame/logo.png","x2-src":"https://static-cdn.rt.ru/sites/default/files/img/mygame/logo-2x.png"}})],1)],1)])]),_vm._v(" "),_c('div',{staticClass:"wc-inline"},[_c('div',{staticClass:"ld-mygame-banner color-white ld-mygame"},[_c('div',{staticClass:"rt-container sp-t-1-3 td-sp-t-none"},[_c('rt-col',{staticClass:"td-sp-t-3-2 sp-t-5"},[_c('rt-row',[_c('rt-col',{staticClass:"ld-mygame-banner-content",attrs:{"size":"3","tablet-size":"3","mobile-size":"3"}},[_c('h1',{staticClass:"rt-font-h1 sp-t-5-3 td-sp-t-0-2"},[_vm._v("Технологии победы")]),_vm._v(" "),_c('p',{staticClass:"rt-font-paragraph sp-t-0-4"},[_vm._v("Высокоскоростной интернет\n                "),_c('br'),_vm._v("\n                и уникальные игровые бонусы")]),_vm._v(" "),_c('div',{staticClass:"d-flex flex-v-center sp-t-0-4"},[_c('rt-price',{attrs:{"v2":true,"bright":true,"value":750.2}}),_vm._v(" "),_c('div',{staticClass:"sp-h-0-3"},[_c('svg',{attrs:{"width":"24","height":"37","viewBox":"0 0 24 37","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"d":"M2 35.641L22 1","stroke":"white","stroke-width":"3"}})])]),_vm._v(" "),_c('rt-price',{attrs:{"v2":true,"bright":true,"value":750.2}})],1),_vm._v(" "),_c('div',{staticClass:"sp-t-1 md-sp-b-1-3"},[_c('rt-button',{directives:[{name:"rt-scroll-to-on-click",rawName:"v-rt-scroll-to-on-click",value:({"scrollToId": "form"}),expression:"{\"scrollToId\": \"form\"}"}],attrs:{"color":"orange"}},[_vm._v("Подключить")])],1)]),_vm._v(" "),_c('rt-col',{attrs:{"size":"9","tablet-size":"3"}},[_c('rt-img',{staticClass:"ld-mygame-banner-img",attrs:{"src":"https://static-cdn.rt.ru/sites/default/files/img/mygame/main-bg.png","x2-src":"https://static-cdn.rt.ru/sites/default/files/img/mygame/mainbg-2x-big.jpg","alt":""}})],1)],1)],1)],1)])]),_vm._v(" "),_c('div',{staticClass:"wc-inline"},[_c('div',{staticClass:"lg-mygame-points  color-white ld-mygame"},[_c('div',{staticClass:"lg-mygame-points-line cj-animate"},[_c('rt-img',{staticClass:"lg-mygame-points-line-img",attrs:{"src":"https://static-cdn.rt.ru/sites/default/files/img/mygame/arrows-1.png"}})],1),_vm._v(" "),_c('div',{staticClass:"rt-container cj-animate"},[_c('rt-col',[_c('rt-row',[_c('rt-col',{attrs:{"size":"12"}},[_c('h2',{staticClass:"rt-font-h2 sp-b-2 td-sp-t-2-4"},[_vm._v("Интернет для геймеров от Ростелекома")])]),_vm._v(" "),_c('rt-col',{staticClass:"md-d-flex",attrs:{"size":"3","mobile-size":"3"}},[_c('rt-img',{staticClass:"lg-mygame-points-img",attrs:{"src":"https://static-cdn.rt.ru/sites/default/files/img/mygame/fast-icon.jpg"}}),_vm._v(" "),_c('div',{staticClass:"md-sp-l-1-3"},[_c('p',{staticClass:"rt-font-h4 sp-b-0-4 sp-t-1-1 md-sp-t-none"},[_vm._v("Мощный интернет")]),_vm._v(" "),_c('p',{staticClass:"relative rt-layer-level-2"},[_vm._v("Играй без тормозов на скоростном интернете")])])],1),_vm._v(" "),_c('rt-col',{attrs:{"size":"1","m-hide":true}}),_vm._v(" "),_c('rt-col',{staticClass:"md-d-flex md-sp-t-1-4",attrs:{"size":"3","mobile-size":"3"}},[_c('rt-img',{staticClass:"lg-mygame-points-img",attrs:{"src":"https://static-cdn.rt.ru/sites/default/files/img/mygame/bonus-icon.jpg"}}),_vm._v(" "),_c('div',{staticClass:"md-sp-l-1-3"},[_c('p',{staticClass:"rt-font-h4 sp-b-0-4 sp-t-1-1 md-sp-t-none"},[_vm._v("Игровые бонусы")]),_vm._v(" "),_c('p',{staticClass:"relative rt-layer-level-2"},[_vm._v("Получай бонусы в играх от MY.GAMES. Бонусы регулярно обновляются ")])])],1),_vm._v(" "),_c('rt-col',{attrs:{"size":"1","m-hide":true}}),_vm._v(" "),_c('rt-col',{staticClass:"md-d-flex md-sp-t-1-4",attrs:{"size":"3","mobile-size":"3"}},[_c('rt-img',{staticClass:"lg-mygame-points-img",attrs:{"src":"https://static-cdn.rt.ru/sites/default/files/img/mygame/help-icon.jpg"}}),_vm._v(" "),_c('div',{staticClass:"md-sp-l-1-3"},[_c('p',{staticClass:"rt-font-h4 sp-b-0-4 sp-t-1-1 md-sp-t-none"},[_vm._v("Выделенная команда поддержки")]),_vm._v(" "),_c('p',{staticClass:"relative rt-layer-level-2"},[_vm._v("Разговаривай со специалистами на одном языке ")])])],1),_vm._v(" "),_c('rt-col',{attrs:{"size":"1"}})],1)],1)],1)])]),_vm._v(" "),_c('div',{staticClass:"wc-inline"},[_c('div',{staticClass:"ld-mygame-users color-white ld-mygame"},[_c('div',{staticClass:"rt-container sp-t-1 sp-b-4 td-sp-b-none"},[_c('rt-col',{staticClass:"md-sp-h-none"},[_c('p',{staticClass:"rt-font-h2 sp-t-5 td-sp-t-1 td-sp-h-1"},[_vm._v("Узнай обо всех бонусах")]),_vm._v(" "),_c('div',{staticClass:"d-flex d-space-between ld-mygame-users-scroll sp-t-4 td-sp-t-2-4 sp-b-4-4 md-sp-b-3-2 md-sp-t-4-1"},[_c('div',{staticClass:"ld-mygame-users-item ld-mygame-users-item--warface",attrs:{"data-game":"warface"}},[_c('div',{staticClass:"ld-mygame-users-content-border"}),_vm._v(" "),_c('div',{staticClass:"ld-mygame-users-content flex-fill"},[_c('rt-img',{staticClass:"ld-mygame-users-logo",attrs:{"src":"https://static-cdn.rt.ru/sites/default/files/img/mygame/warface.png","x2-src":"https://static-cdn.rt.ru/sites/default/files/img/mygame/warface-2x.png","alt":""}}),_vm._v(" "),_c('div',{staticClass:"ld-mygame-users-img"},[_c('rt-img',{staticClass:"ld-mygame-users-img-tag",attrs:{"src":"https://static-cdn.rt.ru/sites/default/files/img/mygame/warface-user.png","x2-src":"https://static-cdn.rt.ru/sites/default/files/img/mygame/warface-user-2x.png","alt":""}}),_vm._v(" "),_c('rt-img',{staticClass:"ld-mygame-users-img-tag-hover",attrs:{"src":"https://static-cdn.rt.ru/sites/default/files/img/mygame/n-warface-user-hover.png","x2-src":"https://static-cdn.rt.ru/sites/default/files/img/mygame/n-warface-user-hover-2x.png","alt":""}})],1),_vm._v(" "),_c('rt-button',{staticClass:"ld-mygame-users-button rt-layer-level-2",attrs:{"bright":true,"color":"full-white"}},[_vm._v("Что я получу?")])],1)]),_vm._v(" "),_c('div',{staticClass:"ld-mygame-users-item ld-mygame-users-item--lostark",attrs:{"data-game":"lostark"}},[_c('div',{staticClass:"ld-mygame-users-content-border"}),_vm._v(" "),_c('div',{staticClass:"ld-mygame-users-content flex-fill"},[_c('rt-img',{staticClass:"ld-mygame-users-logo",attrs:{"src":"https://static-cdn.rt.ru/sites/default/files/img/mygame/lostark.png","x2-src":"https://static-cdn.rt.ru/sites/default/files/img/mygame/lostark-2x.png","alt":""}}),_vm._v(" "),_c('div',{staticClass:"ld-mygame-users-img"},[_c('rt-img',{staticClass:"ld-mygame-users-img-tag",attrs:{"src":"https://static-cdn.rt.ru/sites/default/files/img/mygame/lostark-user.png","x2-src":"https://static-cdn.rt.ru/sites/default/files/img/mygame/lostark-user-2x.png","alt":""}}),_vm._v(" "),_c('rt-img',{staticClass:"ld-mygame-users-img-tag-hover",attrs:{"src":"https://static-cdn.rt.ru/sites/default/files/img/mygame/LA-card.png","x2-src":"https://static-cdn.rt.ru/sites/default/files/img/mygame/LA-card@2x.png","alt":""}})],1),_vm._v(" "),_c('rt-button',{staticClass:"ld-mygame-users-button rt-layer-level-2",attrs:{"bright":true,"color":"full-white"}},[_vm._v("Что я получу?")])],1)]),_vm._v(" "),_c('div',{staticClass:"ld-mygame-users-item ld-mygame-users-item--archeage",attrs:{"data-game":"archeage"}},[_c('div',{staticClass:"ld-mygame-users-content-border"}),_vm._v(" "),_c('div',{staticClass:"ld-mygame-users-content flex-fill"},[_c('rt-img',{staticClass:"ld-mygame-users-logo",attrs:{"src":"https://static-cdn.rt.ru/sites/default/files/img/mygame/archeage.png","x2-src":"https://static-cdn.rt.ru/sites/default/files/img/mygame/archeage-2x.png","alt":""}}),_vm._v(" "),_c('div',{staticClass:"ld-mygame-users-img"},[_c('rt-img',{staticClass:"ld-mygame-users-img-tag",attrs:{"src":"https://static-cdn.rt.ru/sites/default/files/img/mygame/archeage-user.png","x2-src":"https://static-cdn.rt.ru/sites/default/files/img/mygame/archeage-user-2x.png","alt":""}}),_vm._v(" "),_c('rt-img',{staticClass:"ld-mygame-users-img-tag-hover",attrs:{"src":"https://static-cdn.rt.ru/sites/default/files/img/mygame/AA-card.png","x2-src":"https://static-cdn.rt.ru/sites/default/files/img/mygame/AA-card@2x.png","alt":""}})],1),_vm._v(" "),_c('rt-button',{staticClass:"ld-mygame-users-button rt-layer-level-2",attrs:{"bright":true,"color":"full-white"}},[_vm._v("Что я получу?")])],1)]),_vm._v(" "),_c('div',{staticClass:"ld-mygame-users-item ld-mygame-users-item--crossfire ",attrs:{"data-game":"crossfire"}},[_c('div',{staticClass:"ld-mygame-users-content-border"}),_vm._v(" "),_c('div',{staticClass:"ld-mygame-users-content flex-fill"},[_c('rt-img',{staticClass:"ld-mygame-users-logo",attrs:{"src":"https://static-cdn.rt.ru/sites/default/files/img/mygame/crossfire.png","x2-src":"https://static-cdn.rt.ru/sites/default/files/img/mygame/crossfire-2x.png","alt":""}}),_vm._v(" "),_c('div',{staticClass:"ld-mygame-users-img"},[_c('rt-img',{staticClass:"ld-mygame-users-img-tag",attrs:{"src":"https://static-cdn.rt.ru/sites/default/files/img/mygame/crossfire-user.png","x2-src":"https://static-cdn.rt.ru/sites/default/files/img/mygame/crossfire-user-2x.png","alt":""}}),_vm._v(" "),_c('rt-img',{staticClass:"ld-mygame-users-img-tag-hover",attrs:{"src":"https://static-cdn.rt.ru/sites/default/files/img/mygame/n-crossfire-user-hover.png","x2-src":"https://static-cdn.rt.ru/sites/default/files/img/mygame/n-crossfire-user-hover-2x.png","alt":""}})],1),_vm._v(" "),_c('rt-button',{staticClass:"ld-mygame-users-button rt-layer-level-2",attrs:{"bright":true,"color":"full-white"}},[_vm._v("Что я получу?")])],1)])])])],1)])]),_vm._v(" "),_c('div',{staticClass:"wc-inline"},[_c('div',{staticClass:"color-white relative ld-mygame rt-layer-level-2"},[_c('div',{staticClass:"rt-container"},[_c('div',{staticClass:"ld-mygame-form-line-wrapper cj-animate"},[_c('div',{staticClass:"ld-mygame-form-line-inner"},[_c('div',{staticClass:"ld-mygame-form-line"},[_c('rt-img',{attrs:{"src":"https://static-cdn.rt.ru/sites/default/files/img/mygame/arrows-2.png","x2-src":"https://static-cdn.rt.ru/sites/default/files/img/mygame/arrows-2-2x.png","alt":""}})],1)])]),_vm._v(" "),_c('rt-col',[_c('h2',{staticClass:"rt-font-h2 sp-b-4-3 td-sp-b-2-4 md-sp-b-1-3 "},[_vm._v("Как подключить бонусы")])])],1),_vm._v(" "),_c('div',{staticClass:"ld-mygame-line"},[_c('div',{staticClass:"rt-container"},[_c('rt-col',[_c('div',{staticClass:"d-flex md-d-block sp-b-1"},[_c('div',{staticClass:"ld-mygame-line-item sp-t-2 md-sp-t-none md-sp-l-1-3"},[_c('img',{staticClass:"ld-mygame-line-cube",attrs:{"src":"https://static-cdn.rt.ru/sites/default/files/img/mygame/cube.png","alt":""}}),_vm._v(" "),_c('p',{staticClass:"rt-font-paragraph"},[_vm._v("Подайте заявку")]),_vm._v(" "),_c('p',{staticClass:"rt-font-small-paragraph sp-t-0-3"},[_vm._v("На этой странице")])]),_vm._v(" "),_c('div',{staticClass:"md-sp-t-2-2"},[_c('div',{staticClass:"ld-mygame-line-item sp-t-2 md-sp-t-none md-sp-l-1-3"},[_c('img',{staticClass:"ld-mygame-line-cube",attrs:{"src":"https://static-cdn.rt.ru/sites/default/files/img/mygame/cube.png","alt":""}}),_vm._v(" "),_c('p',{staticClass:"rt-font-paragraph"},[_vm._v("Укажите данные игрового "),_c('br'),_vm._v("аккаунта")]),_vm._v(" "),_c('p',{staticClass:"rt-font-small-paragraph sp-t-0-3"},[_vm._v("В личном кабинете Ростелекома")])])]),_vm._v(" "),_c('div',{staticClass:"md-sp-t-2-2"},[_c('div',{staticClass:"ld-mygame-line-item sp-t-2 md-sp-t-none md-sp-l-1-3"},[_c('img',{staticClass:"ld-mygame-line-cube",attrs:{"src":"https://static-cdn.rt.ru/sites/default/files/img/mygame/cube.png","alt":""}}),_vm._v(" "),_c('p',{staticClass:"rt-font-paragraph"},[_vm._v("Активируйте опцию")]),_vm._v(" "),_c('p',{staticClass:"rt-font-small-paragraph sp-t-0-3"},[_vm._v("MY.GAMES и получайте бонусы")])])])])])],1)])])]),_vm._v(" "),_c('div',{staticClass:"wc-inline"},[_c('div',{staticClass:"ld-mygame rt-dark-theme sp-b-4 md-sp-b-3"},[_c('div',{staticClass:"rt-container sp-t-2-1 td-sp-t-none md-sp-t-1 color-white td-sp-b-none td-sp-b-1-4"},[_c('rt-col',{staticClass:"sp-t-4 md-sp-t-2"},[_c('h2',{staticClass:"rt-font-h2 sp-b-1-3 td-sp-b-1-1 md-sp-b-1"},[_vm._v("Заявка на подключение")])]),_vm._v(" "),_c('rt-col',{attrs:{"size":"6","mobile-size":"3"}},[_c('div',{staticClass:"js-form "},[_c('order-form',{staticClass:"rt-md-reverse-left-half",attrs:{"lcs":"active","scope":"form-3","offer-id":[{offerIds: [406154643890, 413844976190, 401926242990, 403877433490, 406718142390, 403794182990, 405392333590, 405721511590, 414606512732, 401908075090]}],"prevent-send":[{ regionIds: _vm.mrfCenter, preventSend: true }]}},[_c('rt-checkbox-tabs',[_c('rt-template',{attrs:{"slot":"label"},slot:"label"},[_c('span',[_vm._v("У меня уже есть Домашний интернет от Ростелекома")])]),_vm._v(" "),_c('rt-template',{attrs:{"slot":"content"},slot:"content"},[_c('div',{},[_c('form',{attrs:{"data-vv-scope":"form-3"},on:{"submit":function($event){$event.preventDefault();}}},[_c('div',{staticClass:"row"},[_c('rt-col',{staticClass:"sp-b-2 td-sp-b-1-3"},[_c('full-name',{staticClass:"text-field--orange"})],1)],1),_vm._v(" "),_c('div',{staticClass:"row sp-b-2 td-sp-b-1-3"},[_c('rt-col',{staticClass:"md-sp-b-1-3",attrs:{"size":"6","mobile-size":"3"}},[_c('client-phone',{staticClass:"text-field--orange"})],1),_vm._v(" "),_c('rt-col',{attrs:{"size":"6","mobile-size":"3"}},[_c('email',{staticClass:"text-field--orange"})],1)],1),_vm._v(" "),_c('div',{staticClass:"sp-b-1-3 d-flex"},[_c('span',{staticClass:"rt-font-h4 rt-font-bold sp-r-1"},[_vm._v("Ваш город")]),_vm._v(" "),_c('location')],1),_vm._v(" "),_c('div',{staticClass:"row"},[_c('rt-col',{staticClass:"rt-input-street sp-b-2 td-sp-b-1-3",attrs:{"size":"12"}},[_c('street',{staticClass:"text-field--orange"})],1),_vm._v(" "),_c('rt-col',{staticClass:"rt-input-house sp-b-2 td-sp-b-1-3",staticStyle:{"min-width":"80px"},attrs:{"size":"6","mobile-size":"3"}},[_c('house',{staticClass:"text-field--orange"})],1),_vm._v(" "),_c('rt-col',{staticClass:"rt-input-apartment sp-b-2 td-sp-b-1-3",attrs:{"size":"6","mobile-size":"3"}},[_c('apartment',{staticClass:"text-field--orange"})],1)],1),_vm._v(" "),_c('div',{staticClass:"sp-b-2 td-sp-b-1-3"},[_c('agree')],1),_vm._v(" "),_c('div',{},[_c('submit-button',{staticClass:"rt-button-full-white rt-button rt-col-persent-2 rt-col-md-persent-10"},[_vm._v("\n                          Подключить\n                        ")])],1)])])]),_vm._v(" "),_c('rt-template',{attrs:{"slot":"content"},slot:"content"},[_c('div',{},[_c('p',{staticClass:"rt-font-small-paragraph"},[_vm._v("Подключите тариф и активируйте\n                      игровую опцию в Личном\n                      кабинете")]),_vm._v(" "),_c('div',{},[_c('a',{attrs:{"href":"http://lk.rt.ru/","target":"_blank"}},[_c('rt-button',{staticClass:"rt-button-full-white"},[_vm._v("Войти")])],1)])])])],1)],1)],1)])],1)])]),_vm._v(" "),_c('div',{staticClass:"wc-inline"},[_c('div',{staticClass:"ld-mygame rt-dark-theme sp-b-4 md-sp-b-3"},[_c('div',{staticClass:"rt-container sp-t-2-1 td-sp-t-none md-sp-t-1 color-white td-sp-b-none td-sp-b-1-4"},[_c('rt-col',{staticClass:"sp-t-4 md-sp-t-2"},[_c('h2',{staticClass:"rt-font-h2 sp-b-1-3 td-sp-b-1-1 md-sp-b-1"},[_vm._v("Заявка на подключение")])]),_vm._v(" "),_c('rt-col',{attrs:{"size":"6","mobile-size":"3"}},[_c('div',{staticClass:"js-form"},[_c('onlime-order-form',{staticClass:"rt-md-reverse-left-half",attrs:{"lcs":"active","scope":"form-3","offer-id":[{offerIds: [415327537002]}]}},[_c('rt-checkbox-tabs',[_c('rt-template',{attrs:{"slot":"label"},slot:"label"},[_c('span',[_vm._v("У меня уже есть Домашний интернет от Ростелекома")])]),_vm._v(" "),_c('rt-template',{attrs:{"slot":"content"},slot:"content"},[_c('div',{staticClass:"rt-space-top2"},[_c('div',{staticClass:"row"},[_c('rt-col',{staticClass:"sp-b-2 td-sp-b-1-3"},[_c('full-name',{staticClass:"text-field--orange"})],1)],1),_vm._v(" "),_c('div',{staticClass:"row sp-b-2 td-sp-b-1-3"},[_c('rt-col',{staticClass:"md-sp-b-1-3",attrs:{"size":"6","mobile-size":"3"}},[_c('client-phone',{staticClass:"text-field--orange"})],1),_vm._v(" "),_c('rt-col',{attrs:{"size":"6","mobile-size":"3"}},[_c('email',{staticClass:"text-field--orange"})],1)],1),_vm._v(" "),_c('div',{staticClass:"sp-b-1-3 d-flex"},[_c('span',{staticClass:"rt-font-h4 rt-font-bold sp-r-1"},[_vm._v("Ваш город")]),_vm._v(" "),_c('location')],1),_vm._v(" "),_c('rt-col',[_c('try-another-address')],1),_vm._v(" "),_c('div',{staticClass:"row"},[_c('rt-col',{staticClass:"rt-input-street sp-b-2 td-sp-b-1-3",attrs:{"size":"6","mobile-size":"3"}},[_c('street',{staticClass:"text-field--orange"})],1),_vm._v(" "),_c('rt-col',{staticClass:"rt-input-street sp-b-2 td-sp-b-1-3",attrs:{"size":"6","mobile-size":"3"}},[_c('entrance',{staticClass:"text-field--purple"})],1),_vm._v(" "),_c('rt-col',{staticClass:"rt-input-house sp-b-2 td-sp-b-1-3",staticStyle:{"min-width":"80px"},attrs:{"size":"6","mobile-size":"3"}},[_c('house',{staticClass:"text-field--orange"})],1),_vm._v(" "),_c('rt-col',{staticClass:"rt-input-apartment sp-b-2 td-sp-b-1-3",attrs:{"size":"6","mobile-size":"3"}},[_c('apartment',{staticClass:"text-field--orange"})],1)],1),_vm._v(" "),_c('div',{staticClass:"sp-b-2 td-sp-b-1-3"},[_c('agree')],1),_vm._v(" "),_c('submit-button',{staticClass:"rt-button rt-button-full-white rt-col-md-3 rt-col-4 rt-col-td-4"},[_vm._v("\n                      Подключить\n                    ")])],1)]),_vm._v(" "),_c('rt-template',{attrs:{"slot":"content"},slot:"content"},[_c('div',{},[_c('p',{staticClass:"rt-font-small-paragraph"},[_vm._v("Подключите тариф и активируйте\n                      игровую опцию в Личном\n                      кабинете")]),_vm._v(" "),_c('div',{staticClass:"rt-space-top2"},[_c('a',{attrs:{"href":"https://my.onlime.ru/","target":"_blank"}},[_c('rt-button',{staticClass:"rt-button-full-white"},[_vm._v("Войти")])],1)])])])],1)],1)],1)])],1)])])])}
var staticRenderFns = []



/***/ }),

/***/ "./src/example-pages/components/pages/promo/game.vue":
/*!***********************************************************!*\
  !*** ./src/example-pages/components/pages/promo/game.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game_vue_vue_type_template_id_3aca5dc0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game.vue?vue&type=template&id=3aca5dc0& */ "./src/example-pages/components/pages/promo/game.vue?vue&type=template&id=3aca5dc0&");
/* harmony import */ var _game_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game.vue?vue&type=script&lang=js& */ "./src/example-pages/components/pages/promo/game.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _game_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _game_vue_vue_type_template_id_3aca5dc0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _game_vue_vue_type_template_id_3aca5dc0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
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

/***/ "./src/example-pages/components/pages/promo/game.vue?vue&type=template&id=3aca5dc0&":
/*!******************************************************************************************!*\
  !*** ./src/example-pages/components/pages/promo/game.vue?vue&type=template&id=3aca5dc0& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_game_vue_vue_type_template_id_3aca5dc0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./game.vue?vue&type=template&id=3aca5dc0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/example-pages/components/pages/promo/game.vue?vue&type=template&id=3aca5dc0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_game_vue_vue_type_template_id_3aca5dc0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_game_vue_vue_type_template_id_3aca5dc0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
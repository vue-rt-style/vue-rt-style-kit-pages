(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[64],{

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    document.querySelector('body').classList.add('cloud-game');
    document.querySelector('body').classList.add('rt-dark-theme');
    var random = parseInt((Math.random() * 9 + 1) % 3 + 1);
    document.querySelector('.cloud-g-1-image').classList.add('cloud-g-1-image-type' + random);
    var isAnimated = false;
    var wrapper = document.querySelector('.cloud-g-slider-inner');
    var index = 0;
    var wasMobileBefore = false;
    document.querySelector('.cloud-g-show-form').addEventListener('click', function () {
      document.querySelector('.cloud-g-form').classList.add('cloud-g-form-active');
      document.querySelector('.cloud-g-show-form').classList.add('d-none');
    });
    window.addEventListener('resize', function () {
      var slideArray = document.querySelectorAll('.cloud-g-slider-item');
      var step = slideArray[1].clientWidth;
      var slide = slideArray[0];
      var marginLeft = step * index * -1;

      if (window.innerWidth > 1024) {
        slide.style.transform = 'translate3d(' + marginLeft + 'px,0px,0)';

        if (wasMobileBefore) {
          document.querySelector('.cloud-g-slider').scrollTo(0, 0);
        }

        wasMobileBefore = false;
      } else {
        wasMobileBefore = true;
        slide.style.transform = 'translate3d(0,0,0)';
      }
    });
    document.querySelectorAll('.cloud-g-slider-arrow').forEach(function (item) {
      var setRigthArrow = function setRigthArrow() {
        var arrowR = document.querySelector('.cloud-g-slider-arrow-right');
        var arrowL = document.querySelector('.cloud-g-slider-arrow-left');

        if (index >= 0) {
          arrowR.classList.add('cloud-g-slider-arrow-hide');
          arrowL.classList.remove('cloud-g-slider-arrow-hide');
        } else {
          if (index < -8) {
            arrowL.classList.add('cloud-g-slider-arrow-hide');
          }

          arrowR.classList.remove('cloud-g-slider-arrow-hide');
        }
      };

      item.addEventListener('click', function () {
        var slideArray = document.querySelectorAll('.cloud-g-slider-item');
        var slide = slideArray[0];
        var step = slideArray[1].clientWidth;

        if (!isAnimated) {
          isAnimated = true;

          if (item.classList.contains('cloud-g-slider-arrow-left')) {
            index = index - 1;
            var marginLeft = step * index;
            slide.style.transform = 'translate3d(' + marginLeft + 'px,0px,0)';
            setTimeout(function () {
              isAnimated = false;
              setRigthArrow();
            }, 200);
          } else {
            index = index + 1;
            var marginLeft = step * index;
            slide.style.transform = 'translate3d(' + marginLeft + 'px,0px,0)';
            setTimeout(function () {
              isAnimated = false;
              setRigthArrow();
            }, 200);
          }
        }
      });
    }); // .cloud-g-slider-arrow-left
    // cloud-g-slider-arrow-right
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/example-pages/components/pages/promo/vip.vue?vue&type=template&id=449991fe&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/example-pages/components/pages/promo/vip.vue?vue&type=template&id=449991fe& ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"wc-inline"},[_c('div',{staticClass:"cloud-g-header"},[_c('div',{staticClass:"rt-container sp-t-0-4"},[_c('div',{staticClass:"cloud-g-logo"},[_c('rt-logo',{attrs:{"width":"30px","show-text":"true","height":"50px","color":"#fff"}}),_vm._v(" "),_vm._m(0)],1)])]),_vm._v(" "),_c('div',{staticClass:"cloud-g-1 d-flex flex-center-center"},[_c('div',{staticClass:"rt-container"},[_c('rt-col',{attrs:{"size":"12"}},[_c('rt-row',{staticClass:"row-td-reverse"},[_c('rt-col',{attrs:{"size":"5","tablet-size":"6"}},[_c('h1',{staticClass:"rt-font-h1 rt-font-light td-sp-t-0-3"},[_vm._v("Подключайте "),_c('br',{staticClass:"td-d-none"}),_vm._v(" Облачные игры NVIDIA "),_c('br'),_vm._v(" GeForce NOW")]),_vm._v(" "),_c('p',{staticClass:"sp-t-1-3 td-sp-t-0-3 td-sp-b-1 sp-b-2 color-white07"},[_vm._v("Наслаждайтесь любимыми играми на максимальных "),_c('br'),_vm._v(" настройках графики, даже на\n\t\t\t\t\t\t\tслабом компьютере")]),_vm._v(" "),_c('rt-button',{directives:[{name:"rt-scroll-to-on-click",rawName:"v-rt-scroll-to-on-click",value:({"scrollToId": "tariff"}),expression:"{\"scrollToId\": \"tariff\"}"}],staticClass:"rt-button-full-white"},[_vm._v("Выбрать тариф")])],1),_vm._v(" "),_c('rt-col',{staticClass:"d-flex flex-center-center",attrs:{"size":"7","tablet-size":"6"}},[_c('div',{staticClass:"cloud-g-1-image"})])],1)],1)],1)]),_vm._v(" "),_c('div',{staticClass:"cloud-g-2 sp-t-1-4 td-sp-t-3-1 md-sp-t-2"},[_c('div',{staticClass:"rt-container"},[_c('rt-col',[_c('h3',{staticClass:"rt-font-h3 rt-font-light sp-b-0-1"},[_vm._v("Играйте в топовые игры")])])],1),_vm._v(" "),_c('div',{staticClass:"cloud-g-slider sp-v-1-4"},[_c('div',{staticClass:"rt-container cloud-g-slider-arrow-container td-d-none"},[_c('div',{staticClass:"cloud-g-slider-arrow cloud-g-slider-arrow-left"},[_c('svg',{attrs:{"width":"51px","height":"52px","viewBox":"0 0 51 52","version":"1.1","xmlns":"http://www.w3.org/2000/svg"}},[_c('g',{attrs:{"id":"Page-1","stroke":"none","stroke-width":"1","fill":"none","fill-rule":"evenodd"}},[_c('g',{attrs:{"id":"RTRU-7499_Documentation","transform":"translate(-69.000000, -1306.000000)"}},[_c('g',{attrs:{"id":"Rectangle-6-Copy-2","opacity":"0.699999988","transform":"translate(95.000000, 1332.000000) rotate(90.000000) translate(-95.000000, -1332.000000) translate(70.000000, 1307.000000)","fill-rule":"nonzero","stroke":"#FFFFFF","stroke-width":"2"}},[_c('polyline',{attrs:{"id":"Rectangle-6-Copy","transform":"translate(24.692618, 24.692618) rotate(45.000000) translate(-24.692618, -24.692618) ","points":"42.1529352 7.2323003 42.1529352 42.1529352 7.2323003 42.1529352"}})])])])])]),_vm._v(" "),_c('div',{staticClass:"cloud-g-slider-arrow cloud-g-slider-arrow-right cloud-g-slider-arrow-hide"},[_c('svg',{attrs:{"width":"27px","height":"52px","viewBox":"0 0 27 52","version":"1.1","xmlns":"http://www.w3.org/2000/svg"}},[_c('g',{attrs:{"id":"Page-1","stroke":"none","stroke-width":"1","fill":"none","fill-rule":"evenodd"}},[_c('g',{attrs:{"id":"RTRU-7499_Oblachnie_igri_web","transform":"translate(-1367.000000, -836.000000)"}},[_c('g',{attrs:{"id":"Игры","transform":"translate(70.000000, 636.000000)"}},[_c('g',{attrs:{"id":"Rectangle-6-Copy-2","opacity":"0.9","transform":"translate(1298.000000, 225.500000) scale(-1, 1) rotate(90.000000) translate(-1298.000000, -225.500000) translate(1272.500000, 200.500000)"}},[_c('polyline',{attrs:{"id":"Rectangle-6-Copy","stroke":"#FFFFFF","stroke-width":"2","fill-rule":"nonzero","transform":"translate(25.692618, 24.692618) rotate(45.000000) translate(-25.692618, -24.692618) ","points":"43.1529352 7.2323003 43.1529352 42.1529352 8.2323003 42.1529352"}}),_vm._v(" "),_c('path',{attrs:{"d":"","id":"Path-2","stroke":"#979797"}}),_vm._v(" "),_c('path',{attrs:{"d":"","id":"Path-3","stroke":"#979797"}})])])])])])])]),_vm._v(" "),_c('div',{staticClass:"cloud-g-slider-inner"},[_vm._m(1),_vm._v(" "),_vm._m(2),_vm._v(" "),_vm._m(3),_vm._v(" "),_vm._m(4),_vm._v(" "),_vm._m(5),_vm._v(" "),_vm._m(6),_vm._v(" "),_vm._m(7),_vm._v(" "),_vm._m(8),_vm._v(" "),_vm._m(9),_vm._v(" "),_vm._m(10),_vm._v(" "),_vm._m(11),_vm._v(" "),_vm._m(12),_vm._v(" "),_c('div',{staticClass:"cloud-g-slider-item sp-r-1"},[_c('a',{staticClass:"rt-cart-cloud-g cloud-g-slider-img sp-v-1-2 sp-h-1-2 d-flex flex-column",attrs:{"href":"#"}},[_vm._m(13),_vm._v(" "),_c('div',{staticClass:"d-inline-block"},[_c('svg',{attrs:{"width":"16px","height":"18px","viewBox":"0 0 16 18","version":"1.1","xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[_c('g',{attrs:{"id":"Page-1","stroke":"none","stroke-width":"1","fill":"none","fill-rule":"evenodd"}},[_c('g',{attrs:{"id":"RTRU-7499_Documentation","transform":"translate(-1088.000000, -1888.000000)"}},[_c('g',{attrs:{"id":"Group","transform":"translate(1088.000000, 1888.000000)","fill":"#5FBD00"}},[_c('g',{attrs:{"id":"icons-/-service-/-download-/-download-24"}},[_c('path',{attrs:{"d":"M14.25,15.7505 C14.803,15.7505 15.25,16.1985 15.25,16.7505 C15.25,17.3025 14.803,17.7505 14.25,17.7505 L14.25,17.7505 L1.75,17.7505 C1.197,17.7505 0.75,17.3025 0.75,16.7505 C0.75,16.1985 1.197,15.7505 1.75,15.7505 L1.75,15.7505 Z M8.0004,0.25 C8.5524,0.25 9.0004,0.698 9.0004,1.25 L9.0004,1.25 L9.0004,9.735 L11.5234,7.064 C11.9024,6.663 12.5344,6.644 12.9364,7.023 C13.3374,7.403 13.3564,8.036 12.9764,8.437 L12.9764,8.437 L8.7264,12.937 C8.5384,13.137 8.2754,13.25 8.0004,13.25 C7.7244,13.25 7.4614,13.137 7.2734,12.937 L7.2734,12.937 L3.0234,8.437 C2.6434,8.036 2.6624,7.403 3.0634,7.023 C3.4654,6.644 4.0984,6.663 4.4764,7.064 L4.4764,7.064 L7.0004,9.735 L7.0004,1.25 C7.0004,0.698 7.4474,0.25 8.0004,0.25 Z","id":"Fill-5"}})])])])])]),_vm._v(" "),_c('span',{staticClass:"sp-l-0-2 rt-cart-cloud-g-link"},[_vm._v("Скачать PDF")])])])])])])]),_vm._v(" "),_c('div',{staticClass:"cloud-g-bg-image"},[_c('div',{staticClass:"cloud-g-3 sp-t-3-1 td-sp-t-1-1 md-sp-t-0-1"},[_c('div',{staticClass:"rt-container"},[_c('rt-col',[_c('h3',{staticClass:"rt-font-h3 rt-font-light sp-b-2"},[_vm._v("Забудьте об ограничениях")]),_vm._v(" "),_c('rt-row',{staticClass:"row--tablet-scroll"},[_c('rt-col',{staticClass:"rt-col",attrs:{"size":"3","tablet-size":"2","mobile-size":"2"}},[_c('img',{staticClass:"ratio2x-d-none cloud-g-icon",attrs:{"src":"https://static-cdn.rt.ru/sites/default/files/cloud-game/cloud-game-icon1.png","alt":""}}),_vm._v(" "),_c('img',{staticClass:"ratio2x-d-block d-none cloud-g-icon",attrs:{"src":"https://static-cdn.rt.ru/sites/default/files/cloud-game/cloud-game-icon1-lg.png","alt":""}}),_vm._v(" "),_c('p',{staticClass:"rt-font-paragraph rt-font-bold sp-t-1"},[_vm._v("Играйте на любом устройстве")]),_vm._v(" "),_c('p',{staticClass:"rt-font-small-paragraph sp-t-0-3 color-white07"},[_vm._v("Запускайте топовые игры на старом ПК,\n\t\t\t\t\t\t\t\tновеньком MacBook,\n\t\t\t\t\t\t\t\tТВ-приставке или даже телефоне на Android OS")])]),_vm._v(" "),_c('rt-col',{attrs:{"size":"3","tablet-size":"2","mobile-size":"2"}},[_c('img',{staticClass:"ratio2x-d-none cloud-g-icon",attrs:{"src":"https://static-cdn.rt.ru/sites/default/files/cloud-game/cloud-game-icon2.png","alt":""}}),_vm._v(" "),_c('img',{staticClass:"ratio2x-d-block d-none cloud-g-icon",attrs:{"src":"https://static-cdn.rt.ru/sites/default/files/cloud-game/cloud-game-icon2-lg.png","alt":""}}),_vm._v(" "),_c('p',{staticClass:"rt-font-paragraph rt-font-bold sp-t-1"},[_vm._v("Не тратьте время на подготовку")]),_vm._v(" "),_c('p',{staticClass:"rt-font-small-paragraph sp-t-0-3 color-white07"},[_vm._v("Все патчи и обновления уже загружены")])]),_vm._v(" "),_c('rt-col',{attrs:{"size":"3","tablet-size":"2","mobile-size":"2"}},[_c('img',{staticClass:"ratio2x-d-none cloud-g-icon",attrs:{"src":"https://static-cdn.rt.ru/sites/default/files/cloud-game/cloud-game-icon3.png","alt":""}}),_vm._v(" "),_c('img',{staticClass:"ratio2x-d-block d-none cloud-g-icon",attrs:{"src":"https://static-cdn.rt.ru/sites/default/files/cloud-game/cloud-game-icon3-lg.png","alt":""}}),_vm._v(" "),_c('p',{staticClass:"rt-font-paragraph rt-font-bold sp-t-1"},[_vm._v("Наслаждайтесь фотореалистичной графикой")]),_vm._v(" "),_c('p',{staticClass:"rt-font-small-paragraph sp-t-0-3 color-white07"},[_vm._v("Максимально реалистичная картинка с\n\t\t\t\t\t\t\t\tтехнологиями NVIDIA\n\t\t\t\t\t\t\t\tGeForce RTX для полного погружения в игру")])]),_vm._v(" "),_c('rt-col',{attrs:{"size":"3","tablet-size":"2","mobile-size":"2"}},[_c('img',{staticClass:"ratio2x-d-none cloud-g-icon",attrs:{"src":"https://static-cdn.rt.ru/sites/default/files/cloud-game/cloud-game-icon4.png","alt":""}}),_vm._v(" "),_c('img',{staticClass:"ratio2x-d-block d-none cloud-g-icon",attrs:{"src":"https://static-cdn.rt.ru/sites/default/files/cloud-game/cloud-game-icon4-lg.png","alt":""}}),_vm._v(" "),_c('p',{staticClass:"rt-font-paragraph rt-font-bold sp-t-1"},[_vm._v("Разгрузите свой жёсткий диск ")]),_vm._v(" "),_c('p',{staticClass:"rt-font-small-paragraph sp-t-0-3 color-white07"},[_vm._v("Запускайте игры в облаке и не забивайте свой\n\t\t\t\t\t\t\t\tдиск гигабайтами\n\t\t\t\t\t\t\t\tданных")])])],1)],1)],1)]),_vm._v(" "),_c('div',{staticClass:"cloud-g-4 sp-t-5"},[_c('div',{staticClass:"rt-container"},[_c('rt-col',{attrs:{"id":"tariff"}},[_c('h3',{staticClass:"rt-font-h3 rt-font-light sp-b-2"},[_vm._v("Подключайтесь в личном кабинете\n\n\n\t\t\t\t\t")]),_vm._v(" "),_c('rt-row',{directives:[{name:"rt-resize-content-height",rawName:"v-rt-resize-content-height",value:({querySelectorsNames:['.color-white07.sp-b-1'], mobileNotResize:true}),expression:"{querySelectorsNames:['.color-white07.sp-b-1'], mobileNotResize:true}"}]},[_c('rt-col',{attrs:{"size":"6","tablet-size":"3","mobile-size":"3"}},[_c('rt-card',{staticClass:"rt-cart-cloud-g",attrs:{"background-color-type":"black","is-white-color":true}},[_c('template',{slot:"content"},[_c('p',{staticClass:"rt-font-h3 rt-font-bold sp-b-0-1"},[_vm._v("На тарифе «Игровой»")]),_vm._v(" "),_c('p',{staticClass:"color-white07 sp-b-1"},[_vm._v("При условии отсутсвия активных игровых опций")]),_vm._v(" "),_c('ul',{staticClass:"cloud-g-list"},[_c('li',{staticClass:"cloud-g-list-item rt-font-paragraph"},[_vm._v("Премиальный доступ без ограничений")]),_vm._v(" "),_c('li',{staticClass:"cloud-g-list-item rt-font-paragraph"},[_vm._v("Технологии трассировки лучей RTX")]),_vm._v(" "),_c('li',{staticClass:"cloud-g-list-item rt-font-paragraph"},[_vm._v("Высокий приоритет очереди")])])]),_vm._v(" "),_c('template',{slot:"footer"},[_c('rt-row',{staticClass:"sp-t-1-3"},[_c('rt-col',{staticClass:"md-sp-b-0-3"},[_c('rt-price',{attrs:{"value":490}})],1),_vm._v(" "),_c('rt-col',{staticClass:"flex-end-center md-flex-start-center"},[_c('rt-button',{staticClass:"rt-button-full-white",attrs:{"href":"#"}},[_vm._v("Подключить")])],1)],1)],1)],2)],1),_vm._v(" "),_c('rt-col',{staticClass:"md-sp-t-1",attrs:{"size":"6","tablet-size":"3","mobile-size":"3"}},[_c('rt-card',{staticClass:"rt-cart-cloud-g",attrs:{"background-color-type":"black","is-white-color":true}},[_c('template',{slot:"content"},[_c('p',{staticClass:"rt-font-h3 rt-font-bold sp-b-0-1"},[_vm._v("На любом тарифе")]),_vm._v(" "),_c('p',{staticClass:"color-white07 sp-b-1"}),_vm._v(" "),_c('ul',{staticClass:"cloud-g-list"},[_c('li',{staticClass:"cloud-g-list-item rt-font-paragraph"},[_vm._v("Премиальный доступ без ограничений")]),_vm._v(" "),_c('li',{staticClass:"cloud-g-list-item rt-font-paragraph"},[_vm._v("Технологии трассировки лучей RTX")]),_vm._v(" "),_c('li',{staticClass:"cloud-g-list-item rt-font-paragraph"},[_vm._v("Высокий приоритет очереди")])])]),_vm._v(" "),_c('template',{slot:"footer"},[_c('rt-row',{staticClass:"sp-t-1-3"},[_c('rt-col',{staticClass:"md-sp-b-0-3"},[_c('rt-price',{attrs:{"value":999}})],1),_vm._v(" "),_c('rt-col',{staticClass:"flex-end-center md-flex-start-center"},[_c('rt-button',{staticClass:"rt-button-full-white",attrs:{"href":"#"}},[_vm._v("Подключить")])],1)],1)],1)],2)],1)],1)],1)],1)])]),_vm._v(" "),_c('div',{staticClass:"sp-t-5"},[_c('div',{staticClass:"rt-container"},[_c('rt-col',[_c('h3',{staticClass:"rt-font-h3 rt-font-light"},[_vm._v("Вы не клиент Ростелекома? ")]),_vm._v(" "),_c('p',{staticClass:"rt-font-paragraph sp-t-2-2 sp-b-2-3"},[_vm._v("Отправьте заявку на подключения тарифа «Игровой» ")]),_vm._v(" "),_c('div',{staticClass:"cloud-g-form"},[_c('rt-row',[_c('rt-col',{attrs:{"size":"3","tablet-size":"3","mobile-size":"3"}},[_vm._v("1")]),_vm._v(" "),_c('rt-col',{attrs:{"size":"3","tablet-size":"3","mobile-size":"3"}},[_vm._v("1")])],1),_vm._v(" "),_c('rt-row',{staticClass:"sp-t-1 sp-b-1"},[_c('rt-col',[_c('div',{staticClass:"d-flex"},[_c('p',{staticClass:"rt-font-h4 rt-font-bold sp-r-0-4"},[_vm._v("Адрес подключения")]),_vm._v(" "),_c('div',[_vm._v("1")])])])],1),_vm._v(" "),_c('rt-row',{staticClass:"sp-t-1 sp-b-1"},[_c('rt-col',{attrs:{"size":"4"}},[_vm._v("\n\t\t\t\t\t\t\t1\n\t\t\t\t\t\t")]),_vm._v(" "),_c('rt-col',{attrs:{"size":"2"}},[_vm._v("\n\t\t\t\t\t\t\t1\n\t\t\t\t\t\t")]),_vm._v(" "),_c('rt-col',{attrs:{"size":"2"}},[_vm._v("\n\t\t\t\t\t\t\t1\n\t\t\t\t\t\t")])],1),_vm._v(" "),_c('div',{staticClass:"sp-t-1-3"},[_c('rt-button',{staticClass:"rt-button-white"},[_vm._v("Отправить заявку")])],1)],1),_vm._v(" "),_c('rt-button',{staticClass:"rt-button-white cloud-g-show-form"},[_vm._v("Отправить заявку")])],1)],1)]),_vm._v(" "),_c('div',{staticClass:"sp-t-5"},[_c('div',{staticClass:"rt-container"},[_c('rt-col',[_c('h3',{staticClass:"rt-font-h3 sp-b-2 rt-font-light"},[_vm._v("Популярные вопросы")]),_vm._v(" "),_c('rt-slide-content',[_c('template',{slot:"label"},[_vm._v("\n\t\t\t\t\t\tКак подключить услугу «Облачные игры от gfn.ru»?\n\t\t\t\t\t")]),_vm._v(" "),_c('template',{slot:"content"},[_vm._v("\n\t\t\t\t\t\tКак подключить услугу «Облачные игры от gfn.ru»?\n\t\t\t\t\t\tКак подключить услугу «Облачные игры от gfn.ru»?\n\t\t\t\t\t\tКак подключить услугу «Облачные игры от gfn.ru»?\n\t\t\t\t\t\tКак подключить услугу «Облачные игры от gfn.ru»?\n\t\t\t\t\t")])],2),_vm._v(" "),_c('rt-slide-content',[_c('template',{slot:"label"},[_vm._v("\n\t\t\t\t\t\tКакие минимальные системные требования?\n\t\t\t\t\t")]),_vm._v(" "),_c('template',{slot:"content"},[_vm._v("\n\t\t\t\t\t\tКак подключить услугу «Облачные игры от gfn.ru»?\n\t\t\t\t\t\tКак подключить услугу «Облачные игры от gfn.ru»?\n\t\t\t\t\t\tКак подключить услугу «Облачные игры от gfn.ru»?\n\t\t\t\t\t\tКак подключить услугу «Облачные игры от gfn.ru»?\n\t\t\t\t\t")])],2),_vm._v(" "),_c('rt-slide-content',[_c('template',{slot:"label"},[_vm._v("\n\t\t\t\t\t\tКак обеспечить подключение?\n\t\t\t\t\t")]),_vm._v(" "),_c('template',{slot:"content"},[_vm._v("\n\t\t\t\t\t\tКак подключить услугу «Облачные игры от gfn.ru»?\n\t\t\t\t\t\tКак подключить услугу «Облачные игры от gfn.ru»?\n\t\t\t\t\t\tКак подключить услугу «Облачные игры от gfn.ru»?\n\t\t\t\t\t\tКак подключить услугу «Облачные игры от gfn.ru»?\n\t\t\t\t\t")])],2)],1)],1)]),_vm._v(" "),_c('div',{staticClass:"sp-t-5 sp-b-3"},[_c('div',{staticClass:"rt-container"},[_c('rt-col',[_c('h3',{staticClass:"rt-font-h3 sp-b-2"},[_vm._v("Полезные материалы")])]),_vm._v(" "),_c('rt-col',[_c('rt-row',{directives:[{name:"rt-resize-content-height",rawName:"v-rt-resize-content-height",value:({querySelectorsNames:['.rt-font-paragraph.sp-b-1']}),expression:"{querySelectorsNames:['.rt-font-paragraph.sp-b-1']}"}],staticClass:"row--mobile-scroll"},[_c('rt-col',{staticClass:"rt-col",attrs:{"size":"4","table-size":"2","mobile-size":"2"}},[_c('rt-card',{staticClass:"rt-cart-cloud-g",attrs:{"background-color-type":"black","is-white-color":true}},[_c('template',{slot:"content"},[_c('p',{staticClass:"rt-font-paragraph sp-b-1"},[_vm._v("Условия предоставления услуги")]),_vm._v(" "),_c('a',{attrs:{"href":""}},[_c('svg',{attrs:{"width":"16px","height":"18px","viewBox":"0 0 16 18","version":"1.1","xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[_c('g',{attrs:{"id":"Page-1","stroke":"none","stroke-width":"1","fill":"none","fill-rule":"evenodd"}},[_c('g',{attrs:{"id":"RTRU-7499_Documentation","transform":"translate(-1088.000000, -1888.000000)"}},[_c('g',{attrs:{"id":"Group","transform":"translate(1088.000000, 1888.000000)","fill":"#5FBD00"}},[_c('g',{attrs:{"id":"icons-/-service-/-download-/-download-24"}},[_c('path',{attrs:{"d":"M14.25,15.7505 C14.803,15.7505 15.25,16.1985 15.25,16.7505 C15.25,17.3025 14.803,17.7505 14.25,17.7505 L14.25,17.7505 L1.75,17.7505 C1.197,17.7505 0.75,17.3025 0.75,16.7505 C0.75,16.1985 1.197,15.7505 1.75,15.7505 L1.75,15.7505 Z M8.0004,0.25 C8.5524,0.25 9.0004,0.698 9.0004,1.25 L9.0004,1.25 L9.0004,9.735 L11.5234,7.064 C11.9024,6.663 12.5344,6.644 12.9364,7.023 C13.3374,7.403 13.3564,8.036 12.9764,8.437 L12.9764,8.437 L8.7264,12.937 C8.5384,13.137 8.2754,13.25 8.0004,13.25 C7.7244,13.25 7.4614,13.137 7.2734,12.937 L7.2734,12.937 L3.0234,8.437 C2.6434,8.036 2.6624,7.403 3.0634,7.023 C3.4654,6.644 4.0984,6.663 4.4764,7.064 L4.4764,7.064 L7.0004,9.735 L7.0004,1.25 C7.0004,0.698 7.4474,0.25 8.0004,0.25 Z","id":"Fill-5"}})])])])])]),_vm._v(" "),_c('span',{staticClass:"sp-l-0-2 rt-cart-cloud-g-link"},[_vm._v("Скачать PDF")])])])],2)],1),_vm._v(" "),_c('rt-col',{attrs:{"size":"4","table-size":"2","mobile-size":"2"}},[_c('rt-card',{staticClass:"rt-cart-cloud-g",attrs:{"background-color-type":"black","is-white-color":true}},[_c('template',{slot:"content"},[_c('p',{staticClass:"rt-font-paragraph sp-b-1"},[_vm._v("Системные требования")]),_vm._v(" "),_c('a',{attrs:{"href":""}},[_c('svg',{attrs:{"width":"16px","height":"18px","viewBox":"0 0 16 18","version":"1.1","xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[_c('g',{attrs:{"id":"Page-1","stroke":"none","stroke-width":"1","fill":"none","fill-rule":"evenodd"}},[_c('g',{attrs:{"id":"RTRU-7499_Documentation","transform":"translate(-1088.000000, -1888.000000)"}},[_c('g',{attrs:{"id":"Group","transform":"translate(1088.000000, 1888.000000)","fill":"#5FBD00"}},[_c('g',{attrs:{"id":"icons-/-service-/-download-/-download-24"}},[_c('path',{attrs:{"d":"M14.25,15.7505 C14.803,15.7505 15.25,16.1985 15.25,16.7505 C15.25,17.3025 14.803,17.7505 14.25,17.7505 L14.25,17.7505 L1.75,17.7505 C1.197,17.7505 0.75,17.3025 0.75,16.7505 C0.75,16.1985 1.197,15.7505 1.75,15.7505 L1.75,15.7505 Z M8.0004,0.25 C8.5524,0.25 9.0004,0.698 9.0004,1.25 L9.0004,1.25 L9.0004,9.735 L11.5234,7.064 C11.9024,6.663 12.5344,6.644 12.9364,7.023 C13.3374,7.403 13.3564,8.036 12.9764,8.437 L12.9764,8.437 L8.7264,12.937 C8.5384,13.137 8.2754,13.25 8.0004,13.25 C7.7244,13.25 7.4614,13.137 7.2734,12.937 L7.2734,12.937 L3.0234,8.437 C2.6434,8.036 2.6624,7.403 3.0634,7.023 C3.4654,6.644 4.0984,6.663 4.4764,7.064 L4.4764,7.064 L7.0004,9.735 L7.0004,1.25 C7.0004,0.698 7.4474,0.25 8.0004,0.25 Z","id":"Fill-5"}})])])])])]),_vm._v(" "),_c('span',{staticClass:"sp-l-0-2 rt-cart-cloud-g-link"},[_vm._v("Скачать PDF")])])])],2)],1),_vm._v(" "),_c('rt-col',{staticClass:"rt-col",attrs:{"size":"4","table-size":"2","mobile-size":"2"}},[_c('rt-card',{staticClass:"rt-cart-cloud-g",attrs:{"background-color-type":"black","is-white-color":true}},[_c('template',{slot:"content"},[_c('p',{staticClass:"rt-font-paragraph sp-b-1"},[_vm._v("Инструкция по подключению услуги")]),_vm._v(" "),_c('a',{attrs:{"href":""}},[_c('svg',{attrs:{"width":"16px","height":"18px","viewBox":"0 0 16 18","version":"1.1","xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[_c('g',{attrs:{"id":"Page-1","stroke":"none","stroke-width":"1","fill":"none","fill-rule":"evenodd"}},[_c('g',{attrs:{"id":"RTRU-7499_Documentation","transform":"translate(-1088.000000, -1888.000000)"}},[_c('g',{attrs:{"id":"Group","transform":"translate(1088.000000, 1888.000000)","fill":"#5FBD00"}},[_c('g',{attrs:{"id":"icons-/-service-/-download-/-download-24"}},[_c('path',{attrs:{"d":"M14.25,15.7505 C14.803,15.7505 15.25,16.1985 15.25,16.7505 C15.25,17.3025 14.803,17.7505 14.25,17.7505 L14.25,17.7505 L1.75,17.7505 C1.197,17.7505 0.75,17.3025 0.75,16.7505 C0.75,16.1985 1.197,15.7505 1.75,15.7505 L1.75,15.7505 Z M8.0004,0.25 C8.5524,0.25 9.0004,0.698 9.0004,1.25 L9.0004,1.25 L9.0004,9.735 L11.5234,7.064 C11.9024,6.663 12.5344,6.644 12.9364,7.023 C13.3374,7.403 13.3564,8.036 12.9764,8.437 L12.9764,8.437 L8.7264,12.937 C8.5384,13.137 8.2754,13.25 8.0004,13.25 C7.7244,13.25 7.4614,13.137 7.2734,12.937 L7.2734,12.937 L3.0234,8.437 C2.6434,8.036 2.6624,7.403 3.0634,7.023 C3.4654,6.644 4.0984,6.663 4.4764,7.064 L4.4764,7.064 L7.0004,9.735 L7.0004,1.25 C7.0004,0.698 7.4474,0.25 8.0004,0.25 Z","id":"Fill-5"}})])])])])]),_vm._v(" "),_c('span',{staticClass:"sp-l-0-2 rt-cart-cloud-g-link"},[_vm._v("Скачать PDF")])])])],2)],1)],1)],1)],1)])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"d-inline-block sp-l-1-1 md-d-none"},[_c('img',{attrs:{"src":"https://static-cdn.rt.ru/sites/default/files/cloud-game/cloud-game-logo.png","alt":"","width":"132px"}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"cloud-g-slider-item sp-r-1"},[_c('img',{staticClass:"cloud-g-slider-img ratio2x-d-none",attrs:{"src":"https://static-cdn.rt.ru/sites/default/files/cloud-game/cloud-game-slide3.png","alt":""}}),_vm._v(" "),_c('img',{staticClass:"cloud-g-slider-img d-none ratio2x-d-block",attrs:{"src":"https://static-cdn.rt.ru/sites/default/files/cloud-game/cloud-game-slide3-lg.png","alt":""}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"cloud-g-slider-item sp-r-1"},[_c('img',{staticClass:"cloud-g-slider-img ratio2x-d-none",attrs:{"src":"https://static-cdn.rt.ru/sites/default/files/cloud-game/cloud-game-slide1.png","alt":""}}),_vm._v(" "),_c('img',{staticClass:"cloud-g-slider-img d-none ratio2x-d-block",attrs:{"src":"https://static-cdn.rt.ru/sites/default/files/cloud-game/cloud-game-slide1-lg.png","alt":""}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"cloud-g-slider-item sp-r-1"},[_c('img',{staticClass:"cloud-g-slider-img ratio2x-d-none",attrs:{"src":"https://static-cdn.rt.ru/sites/default/files/cloud-game/cloud-game-slide2.png","alt":""}}),_vm._v(" "),_c('img',{staticClass:"cloud-g-slider-img d-none ratio2x-d-block",attrs:{"src":"https://static-cdn.rt.ru/sites/default/files/cloud-game/cloud-game-slide2-lg.png","alt":""}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"cloud-g-slider-item sp-r-1"},[_c('img',{staticClass:"cloud-g-slider-img ratio2x-d-none",attrs:{"src":"https://static-cdn.rt.ru/sites/default/files/cloud-game/cloud-game-slide3.png","alt":""}}),_vm._v(" "),_c('img',{staticClass:"cloud-g-slider-img d-none ratio2x-d-block",attrs:{"src":"https://static-cdn.rt.ru/sites/default/files/cloud-game/cloud-game-slide3-lg.png","alt":""}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"cloud-g-slider-item sp-r-1"},[_c('img',{staticClass:"cloud-g-slider-img ratio2x-d-none",attrs:{"src":"https://static-cdn.rt.ru/sites/default/files/cloud-game/cloud-game-slide4.png","alt":""}}),_vm._v(" "),_c('img',{staticClass:"cloud-g-slider-img d-none ratio2x-d-block",attrs:{"src":"https://static-cdn.rt.ru/sites/default/files/cloud-game/cloud-game-slide4-lg.png","alt":""}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"cloud-g-slider-item sp-r-1"},[_c('img',{staticClass:"cloud-g-slider-img ratio2x-d-none",attrs:{"src":"https://static-cdn.rt.ru/sites/default/files/cloud-game/cloud-game-slide5.png","alt":""}}),_vm._v(" "),_c('img',{staticClass:"cloud-g-slider-img d-none ratio2x-d-block",attrs:{"src":"https://static-cdn.rt.ru/sites/default/files/cloud-game/cloud-game-slide5-lg.png","alt":""}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"cloud-g-slider-item sp-r-1"},[_c('img',{staticClass:"cloud-g-slider-img ratio2x-d-none",attrs:{"src":"https://static-cdn.rt.ru/sites/default/files/cloud-game/cloud-game-slide6.png","alt":""}}),_vm._v(" "),_c('img',{staticClass:"cloud-g-slider-img d-none ratio2x-d-block",attrs:{"src":"https://static-cdn.rt.ru/sites/default/files/cloud-game/cloud-game-slide6-lg.png","alt":""}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"cloud-g-slider-item sp-r-1"},[_c('img',{staticClass:"cloud-g-slider-img ratio2x-d-none",attrs:{"src":"https://static-cdn.rt.ru/sites/default/files/cloud-game/cloud-game-slide7.png","alt":""}}),_vm._v(" "),_c('img',{staticClass:"cloud-g-slider-img d-none ratio2x-d-block",attrs:{"src":"https://static-cdn.rt.ru/sites/default/files/cloud-game/cloud-game-slide7-lg.png","alt":""}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"cloud-g-slider-item sp-r-1"},[_c('img',{staticClass:"cloud-g-slider-img ratio2x-d-none",attrs:{"src":"https://static-cdn.rt.ru/sites/default/files/cloud-game/cloud-game-slide8.png","alt":""}}),_vm._v(" "),_c('img',{staticClass:"cloud-g-slider-img d-none ratio2x-d-block",attrs:{"src":"https://static-cdn.rt.ru/sites/default/files/cloud-game/cloud-game-slide8-lg.png","alt":""}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"cloud-g-slider-item sp-r-1"},[_c('img',{staticClass:"cloud-g-slider-img ratio2x-d-none",attrs:{"src":"https://static-cdn.rt.ru/sites/default/files/cloud-game/cloud-game-slide9.png","alt":""}}),_vm._v(" "),_c('img',{staticClass:"cloud-g-slider-img d-none ratio2x-d-block",attrs:{"src":"https://static-cdn.rt.ru/sites/default/files/cloud-game/cloud-game-slide9-lg.png","alt":""}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"cloud-g-slider-item sp-r-1"},[_c('img',{staticClass:"cloud-g-slider-img ratio2x-d-none",attrs:{"src":"https://static-cdn.rt.ru/sites/default/files/cloud-game/cloud-game-slide10.png","alt":""}}),_vm._v(" "),_c('img',{staticClass:"cloud-g-slider-img d-none ratio2x-d-block",attrs:{"src":"https://static-cdn.rt.ru/sites/default/files/cloud-game/cloud-game-slide10-lg.png","alt":""}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"cloud-g-slider-item sp-r-1"},[_c('img',{staticClass:"cloud-g-slider-img ratio2x-d-none",attrs:{"src":"https://static-cdn.rt.ru/sites/default/files/cloud-game/cloud-game-slide11.png","alt":""}}),_vm._v(" "),_c('img',{staticClass:"cloud-g-slider-img d-none ratio2x-d-block",attrs:{"src":"https://static-cdn.rt.ru/sites/default/files/cloud-game/cloud-game-slide11-lg.png","alt":""}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"flex-fill"},[_c('p',{staticClass:"rt-font-bold rt-font-h3"},[_vm._v("Скачай весь список игр")])])}]



/***/ }),

/***/ "./src/example-pages/components/pages/promo/vip.vue":
/*!**********************************************************!*\
  !*** ./src/example-pages/components/pages/promo/vip.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vip_vue_vue_type_template_id_449991fe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vip.vue?vue&type=template&id=449991fe& */ "./src/example-pages/components/pages/promo/vip.vue?vue&type=template&id=449991fe&");
/* harmony import */ var _vip_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vip.vue?vue&type=script&lang=js& */ "./src/example-pages/components/pages/promo/vip.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _vip_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _vip_vue_vue_type_template_id_449991fe___WEBPACK_IMPORTED_MODULE_0__["render"],
  _vip_vue_vue_type_template_id_449991fe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
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

/***/ "./src/example-pages/components/pages/promo/vip.vue?vue&type=template&id=449991fe&":
/*!*****************************************************************************************!*\
  !*** ./src/example-pages/components/pages/promo/vip.vue?vue&type=template&id=449991fe& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_vip_vue_vue_type_template_id_449991fe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./vip.vue?vue&type=template&id=449991fe& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/example-pages/components/pages/promo/vip.vue?vue&type=template&id=449991fe&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_vip_vue_vue_type_template_id_449991fe___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_vip_vue_vue_type_template_id_449991fe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
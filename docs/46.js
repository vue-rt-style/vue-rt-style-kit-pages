(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[46],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/example-pages/components/audioconference/AudioconferenceHelp.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/example-pages/components/audioconference/AudioconferenceHelp.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "AudioConferenceHelp",
  components: {
    componentsList: componentsList
  },
  data: function data() {
    return {
      links: {},
      linksTarget: {}
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.links = this.$refs.navigation.querySelectorAll('a');
    this.linksTarget = this.$refs.content.querySelectorAll('a');
    this.links.forEach(function (item) {
      item.addEventListener('click', _this.smoothScroll);
    });
    document.querySelector('.pseudo-bg').style.left = 0 - document.querySelector('.pseudo-bg').getBoundingClientRect().left + 'px';
  },
  created: function created() {},
  methods: {
    smoothScroll: function smoothScroll($event) {
      var _this2 = this;

      $event.preventDefault();
      $event.stopPropagation();
      var currentPosition = this.$refs.content.scrollTop;
      var targetPosition;
      this.linksTarget.forEach(function (item) {
        if (item.name == $event.target.hash.slice(1)) {
          targetPosition = item.offsetTop;
        }
      });
      console.log(targetPosition);

      if (currentPosition < targetPosition - 1 || currentPosition > targetPosition + 1) {
        if (currentPosition < targetPosition) {
          var _int = setInterval(function () {
            if (currentPosition > targetPosition - 10) currentPosition += 1;else if (currentPosition > targetPosition - 100) currentPosition += 7;else if (currentPosition > targetPosition - 1000) currentPosition += 49;else if (currentPosition > targetPosition - 10000) currentPosition += 343;

            _this2.$refs.content.scrollTo(0, currentPosition);

            if (currentPosition >= targetPosition) {
              setTimeout(function () {
                clearInterval(_int);
              }, 7);
            }
          }, 15);
        } else {
          var _int2 = setInterval(function () {
            if (currentPosition < targetPosition + 10) currentPosition -= 1;else if (currentPosition < targetPosition + 100) currentPosition -= 7;else if (currentPosition < targetPosition + 1000) currentPosition -= 49;else if (currentPosition < targetPosition + 10000) currentPosition -= 343;

            _this2.$refs.content.scrollTo(0, currentPosition);

            if (currentPosition <= targetPosition) {
              setTimeout(function () {
                clearInterval(_int2);
              }, 7);
            }
          }, 15);
        }
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/example-pages/components/audioconference/AudioconferenceHelp.vue?vue&type=template&id=2f2a1668&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/example-pages/components/audioconference/AudioconferenceHelp.vue?vue&type=template&id=2f2a1668& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"conference ac-help"},[_c('div',{staticClass:"color-block--white sp-t-0-4 sp-b-1 conference-header"},[_c('div',{staticClass:"rt-container"},[_c('div',{staticClass:"rt-col d-flex"},[_c('rt-logo',{attrs:{"show-text":true,"height":"44px","width":"26px","top-fill-color":"b2c-slate"}})],1)])]),_vm._v(" "),_c('div',{staticClass:"rt-container"},[_c('div',{staticClass:"rt-col sp-t-4"}),_vm._v(" "),_c('div',{staticClass:"rt-col"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"rt-col-4 color-block--white pos-rel"},[_c('div',{staticClass:"pseudo-bg"}),_vm._v(" "),_c('div',{ref:"navigation",staticClass:"ac-help__title-block sp-t-3 sp-b-2"},[_c('h2',{staticClass:"rt-font-h2 sp-b-1"},[_vm._v("Разделы")]),_vm._v(" "),_c('a',{staticClass:"rt-font-paragraph",attrs:{"href":"#description"}},[_vm._v("Описание услуги Аудиоконференция")]),_vm._v(" "),_c('rt-annotation',{attrs:{"hash":"open","scroll-timeout":1000,"label":"Авторизация"}},[_c('template',{slot:"content"},[_c('a',{attrs:{"href":"#auth"}},[_vm._v("Как зайти в систему аудиоконференций")])])],2),_vm._v(" "),_c('rt-annotation',{attrs:{"hash":"open","scroll-timeout":1000,"label":"Создание и настройки конференции"}},[_c('template',{slot:"content"},[_c('ul',{staticClass:"outer-list"},[_c('li',{staticClass:"outer-list__item"},[_c('rt-annotation',{attrs:{"hash":"open","scroll-timeout":1000,"label":"Создание конференции"}},[_c('template',{slot:"content"},[_c('ul',{staticClass:"inner-list"},[_c('li',{staticClass:"inner-list__item"},[_c('a',{attrs:{"href":"#params"}},[_vm._v("Параметры конференции")])]),_vm._v(" "),_c('li',{staticClass:"inner-list__item"},[_c('a',{attrs:{"href":"#leader"}},[_vm._v("Конференция с Лидером")])]),_vm._v(" "),_c('li',{staticClass:"inner-list__item"},[_c('a',{attrs:{"href":"#noPin"}},[_vm._v("Конференция без PIN-кода")])]),_vm._v(" "),_c('li',{staticClass:"inner-list__item"},[_c('a',{attrs:{"href":"#presentation"}},[_vm._v("Конференция с презентацией")])]),_vm._v(" "),_c('li',{staticClass:"inner-list__item"},[_c('a',{attrs:{"href":"#closedList"}},[_vm._v("Закрытый список участников")])]),_vm._v(" "),_c('li',{staticClass:"inner-list__item"},[_c('a',{attrs:{"href":"#audioRecord"}},[_vm._v("Запись аудиоконференции")])])])])],2)],1),_vm._v(" "),_c('li',{staticClass:"outer-list__item"},[_c('a',{attrs:{"href":"#browseCreated"}},[_vm._v("Просмотр созданной конференции")])]),_vm._v(" "),_c('li',{staticClass:"outer-list__item"},[_c('a',{attrs:{"href":"#invitation"}},[_vm._v("Приглашение участникам/лидеру")])])])])],2),_vm._v(" "),_c('rt-annotation',{attrs:{"hash":"open","scroll-timeout":1000,"label":"Список конференций"}},[_c('template',{slot:"content"},[_c('a',{attrs:{"href":"#myList"}},[_vm._v("Список Мои конференции")])])],2),_vm._v(" "),_c('rt-annotation',{attrs:{"hash":"open","scroll-timeout":1000,"label":"Управление конференцией"}},[_c('template',{slot:"content"},[_c('ul',{staticClass:"outer-list"},[_c('li',{staticClass:"outer-list__item"},[_c('a',{attrs:{"href":"#manage"}},[_vm._v("Управление активной конференцией")])]),_vm._v(" "),_c('li',{staticClass:"outer-list__item"},[_c('a',{attrs:{"href":"#manageWindow"}},[_vm._v("Окно управления конференцией")])]),_vm._v(" "),_c('li',{staticClass:"outer-list__item"},[_c('a',{attrs:{"href":"#manageFunctions"}},[_vm._v("Функции управления конференцией")])])])])],2),_vm._v(" "),_c('rt-annotation',{attrs:{"hash":"open","scroll-timeout":1000,"label":"Архив конференций"}},[_c('template',{slot:"content"},[_c('a',{attrs:{"href":"#archive"}},[_vm._v("Просмотр состоявшихся конференций")])])],2),_vm._v(" "),_c('rt-annotation',{attrs:{"hash":"open","scroll-timeout":1000,"label":"Адресная книга"}},[_c('template',{slot:"content"},[_c('a',{attrs:{"href":"#phonebook"}},[_vm._v("Добавить новый контакт")])])],2),_vm._v(" "),_c('rt-annotation',{attrs:{"hash":"open","scroll-timeout":1000,"label":"Настройки"}},[_c('template',{slot:"content"},[_c('ul',{staticClass:"outer-list"},[_c('li',{staticClass:"outer-list__item"},[_c('a',{attrs:{"href":"#systemTime"}},[_vm._v("Что такое время системы?")])]),_vm._v(" "),_c('li',{staticClass:"outer-list__item"},[_c('a',{attrs:{"href":"#localTime"}},[_vm._v("Местное время")])]),_vm._v(" "),_c('li',{staticClass:"outer-list__item"},[_c('a',{attrs:{"href":"#commonTime"}},[_vm._v("Единое время")])]),_vm._v(" "),_c('li',{staticClass:"outer-list__item"},[_c('a',{attrs:{"href":"#chosenLocation"}},[_vm._v("Избранные города")])]),_vm._v(" "),_c('li',{staticClass:"outer-list__item"},[_c('a',{attrs:{"href":"#passChange"}},[_vm._v("Смена пароля")])])])])],2)],1)]),_vm._v(" "),_c('div',{staticClass:"rt-col-1"}),_vm._v(" "),_c('div',{staticClass:"rt-col-7"},[_c('div',{ref:"content",staticClass:"ac-help__content-block"},[_vm._m(0),_vm._v(" "),_vm._m(1),_vm._v(" "),_vm._m(2),_vm._v(" "),_vm._m(3),_vm._v(" "),_vm._m(4),_vm._v(" "),_vm._m(5),_vm._v(" "),_vm._m(6),_vm._v(" "),_vm._m(7)])])])])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"ac-help__section sp-t-3"},[_c('a',{attrs:{"name":"description"}}),_vm._v(" "),_c('h2',{staticClass:"rt-font-h2 sp-b-1"},[_vm._v("Описание услуги Аудиоконференция")]),_vm._v(" "),_c('p',{staticClass:"rt-font-paragraph"},[_vm._v("Аудиоконференция — удобный и современный способ проведения\n                                переговоров и совещаний. Услуга позволяет в любое удобное время легко организовать\n                                конференц-звонок для нескольких участников при помощи обычных телефонных соединений.")]),_vm._v(" "),_c('p',{staticClass:"rt-font-paragraph"},[_vm._v("Доступ к конференции возможен с фиксированного или мобильного\n                                телефона. Максимальное количество участников сеанса может достигать 128 человек.")]),_vm._v(" "),_c('p',{staticClass:"rt-font-paragraph"},[_vm._v("Вы можете самостоятельно бронировать аудиоконференции и\n                                управлять ими с помощью специального интерфейса управления услугой в режиме реального\n                                времени.")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"ac-help__section"},[_c('a',{attrs:{"name":"auth"}}),_vm._v(" "),_c('h2',{staticClass:"rt-font-h2 sp-b-1"},[_vm._v("Авторизация")]),_vm._v(" "),_c('h3',{staticClass:"rt-font-h3 sp-b-1"},[_vm._v("Как зайти в систему аудиоконференций?")]),_vm._v(" "),_c('p',{staticClass:"rt-font-paragraph"},[_vm._v("Для входа в систему аудиоконференций необходимо перейти в\n                                раздел Управление услугой на странице услуги Аудиоконференция на сайте\n                                "),_c('a',{staticClass:"color-purple",attrs:{"href":""}},[_vm._v("www.rt.ru")]),_vm._v(" или перейти непосредственно по ссылке на\n                                портал "),_c('a',{staticClass:"color-purple",attrs:{"href":""}},[_vm._v("http://audioconference.rt.ru")]),_vm._v(" и использовать\n                                логин и пароль.")]),_vm._v(" "),_c('p',{staticClass:"rt-font-paragraph"},[_vm._v("Обратите внимание, ваш логин — это номер телефона в системе\n                                аудиоконференций, состоящий из 10 цифр (например, 8001001122).")]),_vm._v(" "),_c('p',{staticClass:"rt-font-paragraph"},[_vm._v("Поставьте галочку рядом с "),_c('span',{staticClass:"rt-font-bold"},[_vm._v("Запомнить")]),_vm._v(",\n                                если вы хотите, чтобы система запомнила вас и больше не спрашивала логин/пароль на\n                                вашем компьютере.")]),_vm._v(" "),_c('p',{staticClass:"rt-font-paragraph"},[_vm._v("Нажмите кнопку "),_c('span',{staticClass:"rt-font-bold"},[_vm._v("Войти")]),_vm._v(".")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"ac-help__section"},[_c('h2',{staticClass:"rt-font-h2 sp-b-1"},[_vm._v("Создание и настройки конференции")]),_vm._v(" "),_c('h3',{staticClass:"rt-font-h3 sp-b-1"},[_vm._v("Создание конференции")]),_vm._v(" "),_c('p',{staticClass:"rt-font-paragraph"},[_vm._v("Для того, чтобы организовать конференцию, необходимо нажать кнопку\n                                "),_c('span',{staticClass:"rt-font-bold"},[_vm._v("Создать новую конференцию")]),_vm._v(".\n                            ")]),_vm._v(" "),_c('a',{attrs:{"name":"params"}}),_vm._v(" "),_c('h4',{staticClass:"rt-font-paragraph rt-font-bold sp-t-2 sp-b-1"},[_vm._v("Параметры конференции")]),_vm._v(" "),_c('p',{staticClass:"rt-font-paragraph"},[_vm._v("Теперь необходимо заполнить все поля, чтобы забронировать вашу\n                                конференцию:")]),_vm._v(" "),_c('ul',{staticClass:"rt-ordered-list sp-t-1"},[_c('li',{staticClass:"rt-ordered-list__item"},[_vm._v("Выберите "),_c('span',{staticClass:"rt-font-bold"},[_vm._v("Дату начала\n                                    конференции")]),_vm._v(" (можно выбрать с помощью календаря или в поле ввести цифры).")]),_vm._v(" "),_c('li',{staticClass:"rt-ordered-list__item"},[_vm._v("Укажите "),_c('span',{staticClass:"rt-font-bold"},[_vm._v("Время начала\n                                    конференции")]),_vm._v(". Обратите внимание на подсказку: время начала конференции\n                                    устанавливается по тому времени, которое \u2028у вас указано во времени системы. Именно\n                                    по этому времени начнется ваша конференция.")]),_vm._v(" "),_c('li',{staticClass:"rt-ordered-list__item"},[_vm._v("Укажите "),_c('span',{staticClass:"rt-font-bold"},[_vm._v("Длительность\n                                    конференции")]),_vm._v(", которую вы планируете. Максимальная длительность — 12 часов.\n                                    Обратите внимание, в ходе конференции есть возможность добавлять время конференции.")]),_vm._v(" "),_c('li',{staticClass:"rt-ordered-list__item"},[_vm._v("Укажите "),_c('span',{staticClass:"rt-font-bold"},[_vm._v("Количество\n                                    участников")]),_vm._v(", которые будут участвовать \u2028в конференции. Минимальное количество\n                                    участников — 3 человека. Максимальное количество участников — 128 человек.\n                                    Обратите внимание, во время конференции вы не сможете увеличить количество участников.")]),_vm._v(" "),_c('li',{staticClass:"rt-ordered-list__item"},[_vm._v("Укажите "),_c('span',{staticClass:"rt-font-bold"},[_vm._v("Тему конференции")]),_vm._v(".")]),_vm._v(" "),_c('li',{staticClass:"rt-ordered-list__item"},[_vm._v("Укажите "),_c('span',{staticClass:"rt-font-bold"},[_vm._v("Фамилию Имя\n                                    Отчество")]),_vm._v(" ответственного за организацию конференции.")])]),_vm._v(" "),_c('a',{attrs:{"name":"leader"}}),_vm._v(" "),_c('h4',{staticClass:"rt-font-paragraph rt-font-bold sp-t-2 sp-b-1"},[_vm._v("Конференция с Лидером")]),_vm._v(" "),_c('p',{staticClass:"rt-font-paragraph"},[_vm._v("Конференция с Лидером позволяет начинать конференцию\n                                только в тот момент, когда к конференции подключается Лидер (вводит PIN-код Лидера\n                                конференции). В случае, если Лидер еще не подключился к конференции, остальные\n                                пользователи, позвонившие по телефонному номеру конференции, являются подключенными,\n                                но находятся в ожидании подключения Лидера, и у них отсутствует возможность разговора\n                                между участниками.")]),_vm._v(" "),_c('p',{staticClass:"rt-font-paragraph"},[_vm._v("Если вы хотите сделать конференцию с Лидером, то поставьте\n                                галочку рядом со строкой "),_c('span',{staticClass:"rt-font-bold"},[_vm._v("Конференция с лидером")]),_vm._v(".\n                                Укажите в поле "),_c('span',{staticClass:"rt-font-bold"},[_vm._v("PIN")]),_vm._v(" лидера PIN-код (произвольные 4\n                                цифры), который вы в дальнейшем будете набирать на вашем телефоне для подключения к\n                                конференции.")]),_vm._v(" "),_c('p',{staticClass:"rt-font-paragraph"},[_vm._v("В случае, если конференция с Лидером не выбрана, то\n                                конференция начнется сразу, как только к ней подключатся хотя бы 2 пользователя.")]),_vm._v(" "),_c('p',{staticClass:"rt-font-paragraph"},[_vm._v("В случае, если при создании конференции вы выбрали\n                                "),_c('span',{staticClass:"rt-font-bold"},[_vm._v("Конференция с лидером")]),_vm._v(" и\n                                "),_c('span',{staticClass:"rt-font-bold"},[_vm._v("Конференция с презентацией")]),_vm._v(", то PIN-код лидера и\n                                PIN-код модератора презентации будет единым.")]),_vm._v(" "),_c('a',{attrs:{"name":"noPin"}}),_vm._v(" "),_c('h4',{staticClass:"rt-font-paragraph rt-font-bold sp-t-2 sp-b-1"},[_vm._v("Конференция без PIN-кода")]),_vm._v(" "),_c('p',{staticClass:"rt-font-paragraph"},[_vm._v("При создании новой конференции всегда и автоматически\n                                присуждается PIN-код конференции. Таким образом, к вашей конференции смогут\n                                подключиться только те пользователи, которые знают этот PIN-код.")]),_vm._v(" "),_c('p',{staticClass:"rt-font-paragraph"},[_vm._v("В случае, если вы отметите галочкой Конференция без PIN-кода,\n                                то к вашей конференции сможет подключиться любой человек, который позвонит на\n                                телефонный номер конференции.")]),_vm._v(" "),_c('a',{attrs:{"name":"presentation"}}),_vm._v(" "),_c('h4',{staticClass:"rt-font-paragraph rt-font-bold sp-t-2 sp-b-1"},[_vm._v("Конференция с презентацией")]),_vm._v(" "),_c('p',{staticClass:"rt-font-paragraph"},[_vm._v("В режиме "),_c('span',{staticClass:"rt-font-bold"},[_vm._v("Конференция с презентацией")]),_vm._v("\n                                вы можете демонстрировать участникам различные документы. Если вы хотите создать\n                                конференцию\u2028с презентацией, то поставьте галочку рядом со строкой Конференция\u2028с презентацией.")]),_vm._v(" "),_c('p',{staticClass:"rt-font-paragraph"},[_vm._v("Укажите в поле PIN модератора презентации PIN-код\n                                (произвольные 4 цифры), который в дальнейшем вы будете использовать для входа\n                                модератора в режим презентации. Для входа участников в режим презентации будет\n                                создана специальная ссылка, которую вы сможете выслать всем участникам.")]),_vm._v(" "),_c('p',{staticClass:"rt-font-paragraph"},[_vm._v("В случае, если при создании конференции вы выбрали\n                                "),_c('span',{staticClass:"rt-font-bold"},[_vm._v("Конференция с лидером")]),_vm._v(" и\n                                "),_c('span',{staticClass:"rt-font-bold"},[_vm._v("Конференция с презентацией")]),_vm._v(", то PIN-код лидера и\n                                PIN-код модератора презентации будет единым.")]),_vm._v(" "),_c('a',{attrs:{"name":"closedList"}}),_vm._v(" "),_c('h4',{staticClass:"rt-font-paragraph rt-font-bold sp-t-2 sp-b-1"},[_vm._v("Закрытый список участников")]),_vm._v(" "),_c('p',{staticClass:"rt-font-paragraph"},[_vm._v("Вы можете ограничить доступ к вашей конференции, если создадите\n                                свой Закрытый список участников для вашей конференции:")]),_vm._v(" "),_c('ul',{staticClass:"rt-ordered-list sp-t-1"},[_c('li',{staticClass:"rt-ordered-list__item"},[_vm._v("Отметьте галочкой\n                                    "),_c('span',{staticClass:"rt-font-bold"},[_vm._v("Закрытый список")]),_vm._v(" конференции.")]),_vm._v(" "),_c('li',{staticClass:"rt-ordered-list__item"},[_vm._v("В появившемся блоке вам необходимо добавить участника\n                                    вручную, указав телефонный номер участника и его имя, либо добавить участника из\n                                    вашей адресной книги.")])]),_vm._v(" "),_c('h4',{staticClass:"rt-font-paragraph rt-font-bold sp-t-2 sp-b-1"},[_vm._v("Добавление в Список участников:")]),_vm._v(" "),_c('ul',{staticClass:"rt-ordered-list sp-t-1"},[_c('li',{staticClass:"rt-ordered-list__item"},[_vm._v("В поле "),_c('span',{staticClass:"rt-font-bold"},[_vm._v("Добавление\n                                    участника")]),_vm._v(" начните вбивать ФИО участника. Если этот контакт уже существует\n                                    в "),_c('span',{staticClass:"rt-font-bold"},[_vm._v("Адресной книге")]),_vm._v(", то он будет предложен вам\n                                    автоматически в выпадающем списке. "),_c('span',{staticClass:"rt-font-bold"},[_vm._v("Внимание")]),_vm._v(":\n                                    проверьте телефонный номер контакта. Помните, что только по этому телефонному\n                                    номеру участник будет допущен к конференции.")]),_vm._v(" "),_c('li',{staticClass:"rt-ordered-list__item"},[_vm._v("Если контакта нет в "),_c('span',{staticClass:"rt-font-bold"},[_vm._v("Адресной\n                                    книге")]),_vm._v(", то необходимо заполнить поля "),_c('span',{staticClass:"rt-font-bold"},[_vm._v("Имя\n                                    участника")]),_vm._v(" и "),_c('span',{staticClass:"rt-font-bold"},[_vm._v("Контактный телефон")]),_vm._v(" и нажать\n                                    кнопку "),_c('span',{staticClass:"rt-font-bold"},[_vm._v("Добавить")]),_vm._v(". Контактные данные участника\n                                    отобразятся в "),_c('span',{staticClass:"rt-font-bold"},[_vm._v("Списке участников")]),_vm._v(".")]),_vm._v(" "),_c('li',{staticClass:"rt-ordered-list__item"},[_vm._v("При необходимости вы можете отключить звук у всех\n                                    контактов, нажав кнопку "),_c('span',{staticClass:"rt-font-bold"},[_vm._v("Отключить всем звук")]),_vm._v(".\n                                    Вернуть звук можно в правой части "),_c('span',{staticClass:"rt-font-bold"},[_vm._v("Списка участников")]),_vm._v(",\n                                    нажав на иконку "),_c('span',{staticClass:"rt-font-bold"},[_vm._v("Микрофон")]),_vm._v(".")]),_vm._v(" "),_c('li',{staticClass:"rt-ordered-list__item"},[_vm._v("При необходимости вы можете отключить звук у всех\n                                    контактов, нажав кнопку "),_c('span',{staticClass:"rt-font-bold"},[_vm._v("Отключить всем звук")]),_vm._v(". В\n                                    поле справа вы сможете просмотреть участников "),_c('span',{staticClass:"rt-font-bold"},[_vm._v("Закрытого\n                                        списка")]),_vm._v(" вашей конференции, и отключить/включить микрофоны участникам.\n                                    Включить микрофон также можно будет во время конференции через панель управления\n                                    активной конференцией.")]),_vm._v(" "),_c('li',{staticClass:"rt-ordered-list__item"},[_vm._v("Удалить контакт можно в\n                                    "),_c('span',{staticClass:"rt-font-bold"},[_vm._v("Списке участников")]),_vm._v(", нажав на\n                                    иконку "),_c('span',{staticClass:"rt-font-bold"},[_vm._v("Удалить")]),_vm._v(".")])]),_vm._v(" "),_c('a',{attrs:{"name":"audioRecord"}}),_vm._v(" "),_c('h4',{staticClass:"rt-font-paragraph rt-font-bold sp-t-2 sp-b-1"},[_vm._v("Запись аудиоконференции")]),_vm._v(" "),_c('p',{staticClass:"rt-font-paragraph"},[_vm._v("В режиме "),_c('span',{staticClass:"rt-font-bold"},[_vm._v("Запись\n                                    аудиоконференции")]),_vm._v(" будет осуществляться запись сеанса аудиоконференционной\n                                    связи для последующего прослушивания или скачивания. Если вы хотите осуществлять\n                                    запись конференции, поставьте галочку рядом со строкой\n                                    "),_c('span',{staticClass:"rt-font-bold"},[_vm._v("Запись аудиоконференции")]),_vm._v(".")]),_vm._v(" "),_c('p',{staticClass:"rt-font-paragraph"},[_vm._v("Запись начнется автоматически, когда к конференции\n                                    присоединится хотя бы два участника. (Если к конференции присоединится только\n                                    один участник, запись осуществляться не будет).")]),_vm._v(" "),_c('p',{staticClass:"rt-font-paragraph"},[_vm._v("Запись автоматически остановится, когда к конференции\n                                    будет присоединен один участник или все участники отсоединятся.")]),_vm._v(" "),_c('a',{attrs:{"name":"browseCreated"}}),_vm._v(" "),_c('h3',{staticClass:"rt-font-h3 rt-font-bold sp-t-3 sp-b-1"},[_vm._v("Просмотр созданной конференции")]),_vm._v(" "),_c('p',{staticClass:"rt-font-paragraph"},[_vm._v("Если при создании конференции вы указали все данные верно,\n                                то после нажатия на кнопку "),_c('span',{staticClass:"rt-font-bold"},[_vm._v("Создать конференцию")]),_vm._v("\n                                появится окно "),_c('span',{staticClass:"rt-font-bold"},[_vm._v("Просмотра созданной аудиоконференции")]),_vm._v(".")]),_vm._v(" "),_c('p',{staticClass:"rt-font-paragraph"},[_vm._v("Здесь вы еще раз сможете проверить все указанные вами данные.\n                                Кроме этого, вы можете сразу узнать, сколько времени будет в других городах в момент\n                                начала вашей конференции. Для этого добавьте избранные города в\n                                "),_c('span',{staticClass:"rt-font-bold"},[_vm._v("Просмотре конференции")]),_vm._v(" или в\n                                "),_c('span',{staticClass:"rt-font-bold"},[_vm._v("Настройках")]),_vm._v(".")]),_vm._v(" "),_c('p',{staticClass:"rt-font-paragraph"},[_vm._v("В случае, если какие-то данные вам необходимо исправить,\n                                перейдите по ссылке "),_c('span',{staticClass:"rt-font-bold"},[_vm._v("Редактировать")]),_vm._v(". Вы можете удалить\n                                конференцию, перейдя по ссылке "),_c('span',{staticClass:"rt-font-bold"},[_vm._v("Удалить")]),_vm._v(".")]),_vm._v(" "),_c('a',{attrs:{"name":"invitation"}}),_vm._v(" "),_c('h3',{staticClass:"rt-font-h3 rt-font-bold sp-t-3 sp-b-1"},[_vm._v("Приглашение участникам/лидеру")]),_vm._v(" "),_c('p',{staticClass:"rt-font-paragraph"},[_vm._v("После создания конференции вы можете сформировать и отправить\n                                приглашения участникам. Для этого в окне "),_c('span',{staticClass:"rt-font-bold"},[_vm._v("Просмотра созданной\n                                    конференции")]),_vm._v(" нажмите на кнопку "),_c('span',{staticClass:"rt-font-bold"},[_vm._v("Выслать приглашения\n                                    участникам")]),_vm._v(". В открывшемся окне вы увидите текст приглашения — вы можете его\n                                редактировать.")]),_vm._v(" "),_c('p',{staticClass:"rt-font-paragraph"},[_vm._v("Далее выберите, каким способом вы хотите отправить приглашение:\n                                воспользоваться вашим почтовым клиентом или создать приглашение средствами календаря Outlook.")]),_vm._v(" "),_c('p',{staticClass:"rt-font-paragraph"},[_vm._v("В случае, если при создании конференции вы выбрали конференцию\n                                с Лидером, то в окне Приглашения у вас будет 2 вкладки: для участников и для Лидера.\n                                Отличие приглашений только в том, что в приглашении для Лидера указан PIN-код Лидера,\n                                необходимый для начала конференции.")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"ac-help__section"},[_c('a',{attrs:{"name":"myList"}}),_vm._v(" "),_c('h2',{staticClass:"rt-font-h2 sp-b-1"},[_vm._v("Список конференций")]),_vm._v(" "),_c('h3',{staticClass:"rt-font-h3 sp-b-1"},[_vm._v("Список Мои конференции")]),_vm._v(" "),_c('p',{staticClass:"rt-font-paragraph"},[_vm._v("На вкладке "),_c('span',{staticClass:"rt-font-bold"},[_vm._v("Мои конференции")]),_vm._v("\n                                отображаются запланированные и активные конференции.")]),_vm._v(" "),_c('p',{staticClass:"rt-font-paragraph"},[_vm._v("Активные конференции уже начались и все еще продолжаются.\n                                Они всегда находятся вверху и подсвечиваются голубой рамкой.")]),_vm._v(" "),_c('p',{staticClass:"rt-font-paragraph"},[_vm._v("Запланированные конференции вы можете редактировать и удалять.\n                                Для этого поставьте галочку рядом со строкой конференции и выберите необходимое действие:\n                                "),_c('span',{staticClass:"rt-font-bold"},[_vm._v("Редактировать")]),_vm._v(" или "),_c('span',{staticClass:"rt-font-bold"},[_vm._v("Удалить")]),_vm._v(".")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"ac-help__section"},[_c('h2',{staticClass:"rt-font-h2 sp-b-1"},[_vm._v("Управление конференцией")]),_vm._v(" "),_c('a',{attrs:{"name":"manage"}}),_vm._v(" "),_c('h3',{staticClass:"rt-font-h3 sp-b-1"},[_vm._v("Управление активной конференцией")]),_vm._v(" "),_c('p',{staticClass:"rt-font-paragraph"},[_vm._v("Все активные конференции отображаются вверху списка и\n                                подсвечиваются голубой рамкой. В списке конференций вы можете отслеживать\n                                продолжительность, оставшееся время конференции, количество заявленных участников и\n                                количество подключившихся.")]),_vm._v(" "),_c('p',{staticClass:"rt-font-paragraph"},[_vm._v("Кроме этого, из списка конференций вы можете добавить время\n                                конференции, нажав на кнопку "),_c('span',{staticClass:"rt-font-bold"},[_vm._v("+10 мин")]),_vm._v(".")]),_vm._v(" "),_c('p',{staticClass:"rt-font-paragraph"},[_vm._v("Для расширенного управления конференцией необходимо нажать на\n                                кнопку "),_c('span',{staticClass:"rt-font-bold"},[_vm._v("Управление")]),_vm._v(" и перейти к окну управления.")]),_vm._v(" "),_c('a',{attrs:{"name":"manageWindow"}}),_vm._v(" "),_c('h3',{staticClass:"rt-font-h3 rt-font-bold sp-t-3 sp-b-1"},[_vm._v("Окно управления конференцией")]),_vm._v(" "),_c('p',{staticClass:"rt-font-paragraph"},[_vm._v("В окне управления конференцией вам доступна следующая информация:")]),_vm._v(" "),_c('ul',{staticClass:"rt-ordered-list sp-t-1"},[_c('li',{staticClass:"rt-ordered-list__item"},[_vm._v("Тема и ответственное лицо конференции")]),_vm._v(" "),_c('li',{staticClass:"rt-ordered-list__item"},[_vm._v("PIN-код конференции")]),_vm._v(" "),_c('li',{staticClass:"rt-ordered-list__item"},[_vm._v("PIN-код лидера (если выбрана конференция с Лидером)")]),_vm._v(" "),_c('li',{staticClass:"rt-ordered-list__item"},[_vm._v("Количество запланированных участников и количество\n                                    подключившихся")]),_vm._v(" "),_c('li',{staticClass:"rt-ordered-list__item"},[_vm._v("Список телефонных номеров подключившихся к\n                                    конференции участников")]),_vm._v(" "),_c('li',{staticClass:"rt-ordered-list__item"},[_vm._v("Статус: подключившийся участник может слушать и\n                                    говорить или только слушать")])]),_vm._v(" "),_c('a',{attrs:{"name":"manageFunctions"}}),_vm._v(" "),_c('h3',{staticClass:"rt-font-h3 rt-font-bold sp-t-3 sp-b-1"},[_vm._v("Функции управления конференцией")]),_vm._v(" "),_c('p',{staticClass:"rt-font-paragraph"},[_vm._v("При присоединении к конференции у каждого участника\n                                показывается номер телефона. В этой же строке, в поле Имя, комментарий вы можете\n                                указать имя участника или любой другой комментарий.")]),_vm._v(" "),_c('p',{staticClass:"rt-font-paragraph"},[_vm._v("После того, как вы указали Имя, вы можете добавить данный\n                                контакт (имя, комментарий и номер телефона) в вашу "),_c('span',{staticClass:"rt-font-bold"},[_vm._v("Адресную\n                                    книгу")]),_vm._v(", для этого нажмите кнопку "),_c('span',{staticClass:"rt-font-bold"},[_vm._v("Добавить в\n                                    адресную книгу")]),_vm._v(".")]),_vm._v(" "),_c('p',{staticClass:"rt-font-paragraph"},[_vm._v("Кроме этого, вы можете отключить/включить микрофон у\n                                участника или отключить его от конференции. Вы можете отключить/включить микрофоны\n                                сразу всем участникам, воспользовавшись кнопками Включить/отключить всем микрофоны\n                                из нижнего ряда.")]),_vm._v(" "),_c('p',{staticClass:"rt-font-paragraph"},[_vm._v("При нажатии кнопки "),_c('span',{staticClass:"rt-font-bold"},[_vm._v("Отключить всех\n                                участников")]),_vm._v(" вы отсоедините всех участников от конференции.")]),_vm._v(" "),_c('p',{staticClass:"rt-font-paragraph"},[_vm._v("Если во время конференции вам необходимо увеличить продолжительность\n                                конференции, воспользуйтесь кнопкой "),_c('span',{staticClass:"rt-font-bold"},[_vm._v("+10 мин")]),_vm._v(".")]),_vm._v(" "),_c('p',{staticClass:"rt-font-paragraph"},[_vm._v("Вы можете отслеживать оставшееся время до конца конференции.")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"ac-help__section"},[_c('h2',{staticClass:"rt-font-h2 sp-b-1"},[_vm._v("Архив конференций")]),_vm._v(" "),_c('a',{attrs:{"name":"archive"}}),_vm._v(" "),_c('h3',{staticClass:"rt-font-h3 sp-b-1"},[_vm._v("Просмотр состоявшихся конференций")]),_vm._v(" "),_c('p',{staticClass:"rt-font-paragraph"},[_vm._v("Для просмотра состоявшихся конференций необходимо перейти во\n                                вкладку "),_c('span',{staticClass:"rt-font-bold"},[_vm._v("Архив конференций")]),_vm._v(". В данном разделе вы можете\n                                просмотреть все состоявшиеся конференции за определенный период и сформировать отчет.\n                                Выберите интересующий вас период и нажмите кнопку "),_c('span',{staticClass:"rt-font-bold"},[_vm._v("Сформировать\n                                    отчет")]),_vm._v(".")]),_vm._v(" "),_c('p',{staticClass:"rt-font-paragraph"},[_vm._v("Вы можете просмотреть следующую информацию:")]),_vm._v(" "),_c('ul',{staticClass:"rt-ordered-list sp-t-1"},[_c('li',{staticClass:"rt-ordered-list__item"},[_vm._v("Дата и время начала состоявшейся конференции")]),_vm._v(" "),_c('li',{staticClass:"rt-ordered-list__item"},[_vm._v("Запланированная длительность конференции")]),_vm._v(" "),_c('li',{staticClass:"rt-ordered-list__item"},[_vm._v("Ответственный за конференцию")]),_vm._v(" "),_c('li',{staticClass:"rt-ordered-list__item"},[_vm._v("Тема конференции")]),_vm._v(" "),_c('li',{staticClass:"rt-ordered-list__item"},[_vm._v("Символ, означающий, что данная аудиоконференция\n                                    содержит файл(ы) записи, доступные для прослушивания и скачивания")]),_vm._v(" "),_c('li',{staticClass:"rt-ordered-list__item"},[_vm._v("Суммарное время всех выбранных вами конференций")])]),_vm._v(" "),_c('p',{staticClass:"rt-font-paragraph sp-t-1"},[_vm._v("При нажатии на строку с конференцией развернется\n                                подробная информация \u2028о состоявшейся конференции. На закладке\n                                "),_c('span',{staticClass:"rt-font-bold"},[_vm._v("Статистика конференции")]),_vm._v(" отображается информация:\n                                количество участников, их телефонные номера \u2028и трафик времени каждого из участников,\n                                общее суммарное время, проведенное в аудиоконференции.")]),_vm._v(" "),_c('p',{staticClass:"rt-font-paragraph"},[_vm._v("На закладке "),_c('span',{staticClass:"rt-font-bold"},[_vm._v("Запись конференции")]),_vm._v("\n                                отображается аудиофайл/перечень аудиофайлов с указанием:")]),_vm._v(" "),_c('ul',{staticClass:"rt-ordered-list sp-t-1"},[_c('li',{staticClass:"rt-ordered-list__item"},[_vm._v("Имя аудиозаписи")]),_vm._v(" "),_c('li',{staticClass:"rt-ordered-list__item"},[_vm._v("Длительность (минут, секунд)")]),_vm._v(" "),_c('li',{staticClass:"rt-ordered-list__item"},[_vm._v("Кнопка для выгрузки файла с указанием формата и размера файла")]),_vm._v(" "),_c('li',{staticClass:"rt-ordered-list__item"},[_vm._v("По умолчанию отображается проигрыватель для прослушивания первого аудиофайла из перечня")])]),_vm._v(" "),_c('p',{staticClass:"rt-font-paragraph"},[_vm._v("Закладка "),_c('span',{staticClass:"rt-font-bold"},[_vm._v("Запись конференции")]),_vm._v("\n                                отображается только для аудиоконференций, которые содержат файл(ы) записи. Пользователь\n                                может прослушать аудиофайл(ы) непосредственно на портале, а также скачать аудиофайл(ы)\n                                к себе на компьютер.")]),_vm._v(" "),_c('p',{staticClass:"rt-font-paragraph"},[_vm._v("Для скачивания аудиофайла:")]),_vm._v(" "),_c('ul',{staticClass:"rt-ordered-list sp-t-1"},[_c('li',{staticClass:"rt-ordered-list__item"},[_vm._v("В браузерах Google Chrome, Opera, Mozilla Firefox,\n                                    Microsoft Internet Explorer версии 10 и 11, необходимо кликнуть на Загрузить левой\n                                    кнопкой мыши (ЛКМ)")]),_vm._v(" "),_c('li',{staticClass:"rt-ordered-list__item"},[_vm._v("В браузерах Microsoft Internet Explorer версии 8 и 9\n                                    необходимо кликнуть на "),_c('span',{staticClass:"rt-font-bold"},[_vm._v("Загрузить")]),_vm._v(" правой кнопкой\n                                    мыши (ПКМ) и выбрать "),_c('span',{staticClass:"rt-font-bold"},[_vm._v("Сохранить объект как")])])]),_vm._v(" "),_c('p',{staticClass:"rt-font-paragraph sp-t-1"},[_vm._v("Все состоявшиеся конференции можно отсортировывать\n                                по необходимому вам признаку. Кроме этого, нужный вам отчет можно экспортировать в\n                                Exсel или распечатать.")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"ac-help__section"},[_c('h2',{staticClass:"rt-font-h2 sp-b-1"},[_vm._v("Адресная книга")]),_vm._v(" "),_c('a',{attrs:{"name":"phonebook"}}),_vm._v(" "),_c('h3',{staticClass:"rt-font-h3 sp-b-1"},[_vm._v("Просмотр Адресной книги")]),_vm._v(" "),_c('p',{staticClass:"rt-font-paragraph"},[_vm._v("Для просмотра Адресной книги необходимо перейти во вкладку\n                                "),_c('span',{staticClass:"rt-font-bold"},[_vm._v("Адресная книга")]),_vm._v(". Здесь вы можете просмотреть ранее\n                                добавленные контакты или добавить новые.")]),_vm._v(" "),_c('p',{staticClass:"rt-font-paragraph"},[_vm._v("Добавленные контакты вы можете редактировать или удалять,\n                                для этого найдите нужный вам контакт (через поиск по контактам или по первой букве\n                                имени контакта в алфавите) и справа от контакта нажмите на\n                                "),_c('span',{staticClass:"rt-font-bold"},[_vm._v("Редактировать")]),_vm._v(" или\n                                "),_c('span',{staticClass:"rt-font-bold"},[_vm._v("Удалить")]),_vm._v(".")]),_vm._v(" "),_c('h3',{staticClass:"rt-font-h3 sp-t-3 sp-b-1"},[_vm._v("Добавить новый контакт")]),_vm._v(" "),_c('p',{staticClass:"rt-font-paragraph"},[_vm._v("Для создания нового контакта нажмите на кнопку\n                                "),_c('span',{staticClass:"rt-font-bold"},[_vm._v("Добавить новый контакт")]),_vm._v(". Заполните поля\n                                "),_c('span',{staticClass:"rt-font-bold"},[_vm._v("Имя, Фамилия")]),_vm._v(" и "),_c('span',{staticClass:"rt-font-bold"},[_vm._v("Номер\n                                    телефона")]),_vm._v(" и нажмите кнопку "),_c('span',{staticClass:"rt-font-bold"},[_vm._v("Добавить в список")]),_vm._v(".")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"ac-help__section"},[_c('h2',{staticClass:"rt-font-h2 sp-b-1"},[_vm._v("Настройки")]),_vm._v(" "),_c('a',{attrs:{"name":"systemTime"}}),_vm._v(" "),_c('h3',{staticClass:"rt-font-h3 sp-b-1"},[_vm._v("Что такое время системы?")]),_vm._v(" "),_c('p',{staticClass:"rt-font-paragraph"},[_vm._v("Время системы — это время, которое вы привяжете к вашей учетной\n                                записи. По времени системы будут бронироваться и начинаться ваши конференции.")]),_vm._v(" "),_c('a',{attrs:{"name":"localTime"}}),_vm._v(" "),_c('h3',{staticClass:"rt-font-h3 sp-t-3 sp-b-1"},[_vm._v("Местное время")]),_vm._v(" "),_c('p',{staticClass:"rt-font-paragraph"},[_vm._v("При входе система автоматически определит ваше местоположение\n                                и переведет часы на местное (для вас) время. При этом, например: если два сотрудника\n                                организации пользуются системой под одним логином в Москве \u2028и Владивостоке, то\n                                каждый для себя видит свое местное время.")]),_vm._v(" "),_c('a',{attrs:{"name":"commonTime"}}),_vm._v(" "),_c('h3',{staticClass:"rt-font-h3 sp-t-3 sp-b-1"},[_vm._v("Единое время")]),_vm._v(" "),_c('p',{staticClass:"rt-font-paragraph"},[_vm._v("Единое время необходимо устанавливать вручную. Вне зависимости\n                                от вашего местонахождения время системы будет настроено по единому для всех времени,\n                                например, по Московскому (GMT +4:00).")]),_vm._v(" "),_c('a',{attrs:{"name":"chosenLocation"}}),_vm._v(" "),_c('h3',{staticClass:"rt-font-h3 sp-t-3 sp-b-1"},[_vm._v("Избранные города")]),_vm._v(" "),_c('p',{staticClass:"rt-font-paragraph"},[_vm._v("Вы можете добавить 5 избранных городов, время которых будет\n                                отображаться в интерфейсе системы. Это необходимо для того, чтобы вы знали, по какому\n                                времени начнется ваша запланированная конференция в этих городах.")]),_vm._v(" "),_c('p',{staticClass:"rt-font-paragraph"},[_vm._v("Для добавления города нажмите на кнопку\n                                "),_c('span',{staticClass:"rt-font-bold"},[_vm._v("Добавить")]),_vm._v(", выберите из списка страну, затем город.\n                                Нажмите кнопку "),_c('span',{staticClass:"rt-font-bold"},[_vm._v("Добавить город")]),_vm._v(".")]),_vm._v(" "),_c('a',{attrs:{"name":"passChange"}}),_vm._v(" "),_c('h3',{staticClass:"rt-font-h3 sp-t-3 sp-b-1"},[_vm._v("Смена пароля")]),_vm._v(" "),_c('p',{staticClass:"rt-font-paragraph"},[_vm._v("Для смены пароля перейдите во вкладку\n                                "),_c('span',{staticClass:"rt-font-bold"},[_vm._v("Сменить пароль")]),_vm._v(". Укажите свой старый пароль, затем\n                                новый два раза. Нажмите на кнопу Сменить пароль.")]),_vm._v(" "),_c('p',{staticClass:"rt-font-paragraph"},[_vm._v("При следующей авторизации вход в систему под вашим логином\n                                осуществится по новому паролю.")])])}]



/***/ }),

/***/ "./src/example-pages/components/audioconference/AudioconferenceHelp.vue":
/*!******************************************************************************!*\
  !*** ./src/example-pages/components/audioconference/AudioconferenceHelp.vue ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AudioconferenceHelp_vue_vue_type_template_id_2f2a1668___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AudioconferenceHelp.vue?vue&type=template&id=2f2a1668& */ "./src/example-pages/components/audioconference/AudioconferenceHelp.vue?vue&type=template&id=2f2a1668&");
/* harmony import */ var _AudioconferenceHelp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AudioconferenceHelp.vue?vue&type=script&lang=js& */ "./src/example-pages/components/audioconference/AudioconferenceHelp.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AudioconferenceHelp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AudioconferenceHelp_vue_vue_type_template_id_2f2a1668___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AudioconferenceHelp_vue_vue_type_template_id_2f2a1668___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/example-pages/components/audioconference/AudioconferenceHelp.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************!*\
  !*** ./src/example-pages/components/audioconference/AudioconferenceHelp.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AudioconferenceHelp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./AudioconferenceHelp.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/example-pages/components/audioconference/AudioconferenceHelp.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AudioconferenceHelp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/example-pages/components/audioconference/AudioconferenceHelp.vue?vue&type=template&id=2f2a1668&":
/*!*************************************************************************************************************!*\
  !*** ./src/example-pages/components/audioconference/AudioconferenceHelp.vue?vue&type=template&id=2f2a1668& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AudioconferenceHelp_vue_vue_type_template_id_2f2a1668___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AudioconferenceHelp.vue?vue&type=template&id=2f2a1668& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/example-pages/components/audioconference/AudioconferenceHelp.vue?vue&type=template&id=2f2a1668&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AudioconferenceHelp_vue_vue_type_template_id_2f2a1668___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AudioconferenceHelp_vue_vue_type_template_id_2f2a1668___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
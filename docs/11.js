(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/example-pages/components/pages/promo/vip.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/example-pages/components/pages/promo/vip.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    var f = {};

    var g = /iPhone/i,
        i = /iPod/i,
        j = /iPad/i,
        k = /\biOS-universal(?:.+)Mac\b/i,
        h = /\bAndroid(?:.+)Mobile\b/i,
        m = /Android/i,
        c = /(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i,
        d = /Silk/i,
        b = /Windows Phone/i,
        n = /\bWindows(?:.+)ARM\b/i,
        p = /BlackBerry/i,
        q = /BB10/i,
        s = /Opera Mini/i,
        t = /\b(CriOS|Chrome)(?:.+)Mobile/i,
        u = /Mobile(?:.+)Firefox\b/i,
        v = function v(l) {
      return void 0 !== l && "MacIntel" === l.platform && "number" == typeof l.maxTouchPoints && l.maxTouchPoints > 1 && "undefined" == typeof MSStream;
    };

    function w(l) {
      return function ($) {
        return $.test(l);
      };
    }

    function x(l) {
      var $ = {
        userAgent: "",
        platform: "",
        maxTouchPoints: 0
      };
      l || "undefined" == typeof navigator ? "string" == typeof l ? $.userAgent = l : l && l.userAgent && ($ = {
        userAgent: l.userAgent,
        platform: l.platform,
        maxTouchPoints: l.maxTouchPoints || 0
      }) : $ = {
        userAgent: navigator.userAgent,
        platform: navigator.platform,
        maxTouchPoints: navigator.maxTouchPoints || 0
      };
      var a = $.userAgent,
          e = a.split("[FBAN");
      void 0 !== e[1] && (a = e[0]), void 0 !== (e = a.split("Twitter"))[1] && (a = e[0]);
      var r = w(a),
          o = {
        apple: {
          phone: r(g) && !r(b),
          ipod: r(i),
          tablet: !r(g) && (r(j) || v($)) && !r(b),
          universal: r(k),
          device: (r(g) || r(i) || r(j) || r(k) || v($)) && !r(b)
        },
        amazon: {
          phone: r(c),
          tablet: !r(c) && r(d),
          device: r(c) || r(d)
        },
        android: {
          phone: !r(b) && r(c) || !r(b) && r(h),
          tablet: !r(b) && !r(c) && !r(h) && (r(d) || r(m)),
          device: !r(b) && (r(c) || r(d) || r(h) || r(m)) || r(/\bokhttp\b/i)
        },
        windows: {
          phone: r(b),
          tablet: r(n),
          device: r(b) || r(n)
        },
        other: {
          blackberry: r(p),
          blackberry10: r(q),
          opera: r(s),
          firefox: r(u),
          chrome: r(t),
          device: r(p) || r(q) || r(s) || r(u) || r(t)
        },
        any: !1,
        phone: !1,
        tablet: !1
      };
      return o.any = o.apple.device || o.android.device || o.windows.device || o.other.device, o.phone = o.apple.phone || o.android.phone || o.windows.phone, o.tablet = o.apple.tablet || o.android.tablet || o.windows.tablet, o;
    }

    f = x();

    if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === "object" && typeof module !== "undefined") {
      module.exports = f;
    } else if (typeof define === "function" && __webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js")) {
      define(function () {
        return f;
      });
    } else {
      this["isMobile"] = f;
    }

    if (f.apple.device && document.querySelector('.ld-key-google')) {
      document.querySelector('.ld-key-google').classList.add('d-none');
    }

    if (f.android.device && document.querySelector('.ld-key-apple')) {
      document.querySelector('.ld-key-apple').classList.add('d-none');
    }

    if (!f.apple.device && !f.android.device && document.querySelector('.ld-key-google')) {
      document.querySelector('.ld-key-google').classList.add('td-sp-t-1');
    }

    var bind = function bind() {
      if (!document.querySelector('.ld-key-slader-block .row .ld-key-tabs-item')) {
        setTimeout(function () {
          bind();
        }, 1000);
      } else {
        var debounce = function debounce(callback, wait, immediate) {
          var timeout = null;
          return function () {
            var _arguments = arguments,
                _this = this;

            var callNow = immediate && !timeout;

            var next = function next() {
              return callback.apply(_this, _arguments);
            };

            clearTimeout(timeout);
            timeout = setTimeout(next, wait);

            if (callNow) {
              next();
            }
          };
        };

        var bindTab = function bindTab() {
          document.querySelectorAll('.radio-button .radio-button-element').forEach(function (item, index) {
            item.addEventListener('change', function () {
              showTabForm(index % 2);
            });
          });
        };

        var showTabForm = function showTabForm(index) {
          var beforeIndex = (index + 1) % 2;
          var beforeContent = document.querySelectorAll('.tab-content')[beforeIndex];
          var nextContent = document.querySelectorAll('.tab-content')[index];
          beforeContent.classList.remove('d-block');
          beforeContent.classList.add('d-none');
          nextContent.classList.remove('d-none');
          nextContent.classList.add('d-block');

          if (document.querySelector('#form .d-block .radio-button')) {
            document.querySelectorAll('#form .d-block .radio-button')[index].click();
          }
        };

        var bindTabInit = function bindTabInit() {
          if (document.querySelector('#form .radio-button-element')) {
            bindTab();
          } else {
            setTimeout(function () {
              bindTabInit();
            }, 500);
          }
        };

        setTimeout(function () {
          bindTabInit();
        }, 1000);
        document.querySelectorAll('.rt-tabs-navigation__item').forEach(function (tab) {
          tab.addEventListener('click', bindTab);
        });
        document.body.classList.add('land-key');
        var setHeight = debounce(function () {
          var height = document.querySelector('.ld-key-tabs-item--active').clientHeight;
          document.querySelector('.ld-key-tabs-content').style.minHeight = height + 'px';
          setTimeout(function () {
            var height = document.querySelector('.ld-key-tabs-item--active').clientHeight;
            document.querySelector('.ld-key-tabs-content').style.minHeight = height + 'px';
          }, 100);
        }, 100);

        var removeMore = function removeMore() {
          var more = document.querySelector('.ld-key-tab-show-more-active');

          if (more) {
            more.classList.remove('ld-key-tab-show-more-active');
            setHeight();
          }
        };

        setHeight();
        window.addEventListener('resize', setHeight);
        document.querySelectorAll('.ld-key-tabs-nav-item').forEach(function (item) {
          item.addEventListener('click', function () {
            if (!item.classList.contains('ld-key-tabs-nav-item--active')) {
              var index = item.getAttribute('data-index') - 0;
              document.querySelector('.ld-key-tabs-nav-item--active').classList.remove('ld-key-tabs-nav-item--active');
              document.querySelector('.ld-key-tabs-item--active').classList.remove('ld-key-tabs-item--active');
              document.querySelectorAll('.ld-key-tabs-item')[index].classList.add('ld-key-tabs-item--active');
              item.classList.add('ld-key-tabs-nav-item--active');
              setHeight(index);
              activeSlideIndex = index;
              timer();
              removeMore();
            }
          });
        });
        document.querySelectorAll('.ld-key-tabs-item').forEach(function (wrap) {
          var showMore = wrap.querySelector('.ld-key-tab-show-more');
          var showLess = wrap.querySelector('.ld-key-tab-show-less');
          showMore.addEventListener('click', function () {
            removeMore();
            showMore.classList.add('ld-key-tab-show-more-active');
            showLess.classList.remove('md-d-none');
            showLess.classList.add('md-d-block');
            setTimeout(function () {
              setHeight();
            }, 0);
          });

          if (showLess) {
            showLess.addEventListener('click', function () {
              removeMore();
              showLess.classList.remove('md-d-block');
              showLess.classList.add('md-d-none');
              setTimeout(function () {
                setHeight();
              }, 0);
            });
          }
        });
        document.querySelectorAll('.ld-key-tab-show-more').forEach(function (item) {
          item.addEventListener('click', function () {
            removeMore();
            item.classList.add('ld-key-tab-show-more-active');
            setTimeout(function () {
              setHeight();
            }, 0);
          });
        });
        var tabsSliderActiveItems = [0, 0, 0, 0, 0];
        var xDown = [null, null, null, null, null];
        var yDown = [null, null, null, null, null];
        var timeout = null;
        var stopTimer = false;
        var activeSlideIndex = 0;

        var timer = function timer() {
          if (document.querySelector('.ld-key-tabs-paginator-item')) {
            if (timeout) {
              clearTimeout(timeout);
            }

            timeout = setTimeout(function () {
              tabsSliderActiveItems[activeSlideIndex] = (tabsSliderActiveItems[activeSlideIndex] + 1) % 3;
              document.querySelectorAll('.ld-key-tabs-item')[activeSlideIndex].querySelector('.ld-key-tabs-paginator-item--active').classList.remove('ld-key-tabs-paginator-item--active');
              document.querySelectorAll('.ld-key-tabs-item')[activeSlideIndex].querySelector('.ld-key-tabs-slider-item--active').classList.remove('ld-key-tabs-slider-item--active');
              document.querySelectorAll('.ld-key-tabs-item')[activeSlideIndex].querySelectorAll('.ld-key-tabs-slider-item')[tabsSliderActiveItems[activeSlideIndex]].classList.add('ld-key-tabs-slider-item--active');
              document.querySelectorAll('.ld-key-tabs-item')[activeSlideIndex].querySelectorAll('.ld-key-tabs-paginator-item')[tabsSliderActiveItems[activeSlideIndex]].classList.add('ld-key-tabs-paginator-item--active');
              timer();
            }, 3000);
          }
        };

        timer();
        document.querySelectorAll('.ld-key-tabs-paginator-item').forEach(function (item) {
          item.addEventListener('click', function () {
            if (!item.classList.contains('ld-key-tabs-paginator-item--active')) {
              var tabIndex = item.getAttribute('data-tab-index') - 0;
              var slideIndex = item.getAttribute('data-slide-index') - 0;
              document.querySelectorAll('.ld-key-tabs-item')[tabIndex].querySelector('.ld-key-tabs-paginator-item--active').classList.remove('ld-key-tabs-paginator-item--active');
              tabsSliderActiveItems[tabIndex] = slideIndex;
              document.querySelectorAll('.ld-key-tabs-item')[tabIndex].querySelector('.ld-key-tabs-slider-item--active').classList.remove('ld-key-tabs-slider-item--active');
              document.querySelectorAll('.ld-key-tabs-item')[tabIndex].querySelectorAll('.ld-key-tabs-slider-item')[slideIndex].classList.add('ld-key-tabs-slider-item--active');
              item.classList.add('ld-key-tabs-paginator-item--active');
            }
          });
        });
        document.querySelectorAll('.ld-key-tabs-arrows-right').forEach(function (item) {
          item.addEventListener('click', function () {
            var tabIndex = item.getAttribute('data-tab-index') - 0;
            var slideIndex = tabsSliderActiveItems[tabIndex];
            slideIndex = (slideIndex + 1) % 3;
            tabsSliderActiveItems[tabIndex] = slideIndex;
            removeMore();
            document.querySelectorAll('.ld-key-tabs-item')[tabIndex].querySelector('.ld-key-tabs-paginator-item--active').classList.remove('ld-key-tabs-paginator-item--active');
            document.querySelectorAll('.ld-key-tabs-item')[tabIndex].querySelectorAll('.ld-key-tabs-paginator-item')[slideIndex].classList.add('ld-key-tabs-paginator-item--active');
            document.querySelectorAll('.ld-key-tabs-item')[tabIndex].querySelector('.ld-key-tabs-slider-item--active').classList.remove('ld-key-tabs-slider-item--active');
            document.querySelectorAll('.ld-key-tabs-item')[tabIndex].querySelectorAll('.ld-key-tabs-slider-item')[slideIndex].classList.add('ld-key-tabs-slider-item--active');
          });
        });
        document.querySelectorAll('.ld-key-tabs-arrows-left').forEach(function (item) {
          item.addEventListener('click', function () {
            removeMore();
            var tabIndex = item.getAttribute('data-tab-index') - 0;
            var slideIndex = tabsSliderActiveItems[tabIndex];
            slideIndex = (slideIndex - 1 + 3) % 3;
            tabsSliderActiveItems[tabIndex] = slideIndex;
            document.querySelectorAll('.ld-key-tabs-item')[tabIndex].querySelector('.ld-key-tabs-paginator-item--active').classList.remove('ld-key-tabs-paginator-item--active');
            document.querySelectorAll('.ld-key-tabs-item')[tabIndex].querySelectorAll('.ld-key-tabs-paginator-item')[slideIndex].classList.add('ld-key-tabs-paginator-item--active');
            document.querySelectorAll('.ld-key-tabs-item')[tabIndex].querySelector('.ld-key-tabs-slider-item--active').classList.remove('ld-key-tabs-slider-item--active');
            document.querySelectorAll('.ld-key-tabs-item')[tabIndex].querySelectorAll('.ld-key-tabs-slider-item')[slideIndex].classList.add('ld-key-tabs-slider-item--active');
          });
        });
        document.querySelectorAll('.ld-key-tabs-slider').forEach(function (item) {
          item.addEventListener('touchstart', function (event) {
            var tabIndex = item.getAttribute('data-tab-index') - 0;
            yDown[tabIndex] = event.touches[0].clientY;
            xDown[tabIndex] = event.touches[0].clientX;
          });
          item.addEventListener('touchmove', function (event) {
            var tabIndex = item.getAttribute('data-tab-index') - 0;

            if (!xDown[tabIndex] || !yDown[tabIndex]) {
              return;
            }

            var xUp = event.touches[0].clientX;
            var yUp = event.touches[0].clientY;
            var xDiff = xDown[tabIndex] - xUp;
            var yDiff = yDown[tabIndex] - yUp;
            var slideIndex = tabsSliderActiveItems[tabIndex];
            var size = 3;
            var prev = (slideIndex - 1 + size) % size;
            var next = (slideIndex + 1) % size;

            if (Math.abs(xDiff) > Math.abs(yDiff)) {
              if (this.preventScroll) {
                event.preventDefault();
              }

              if (xDiff > 0) {
                slideIndex = next;
              } else {
                slideIndex = prev;
              }
            }

            xDown[tabIndex] = null;
            yDown[tabIndex] = null;
            tabsSliderActiveItems[tabIndex] = slideIndex;
            removeMore();
            document.querySelectorAll('.ld-key-tabs-item')[tabIndex].querySelector('.ld-key-tabs-paginator-item--active').classList.remove('ld-key-tabs-paginator-item--active');
            document.querySelectorAll('.ld-key-tabs-item')[tabIndex].querySelectorAll('.ld-key-tabs-paginator-item')[slideIndex].classList.add('ld-key-tabs-paginator-item--active');
            document.querySelectorAll('.ld-key-tabs-item')[tabIndex].querySelector('.ld-key-tabs-slider-item--active').classList.remove('ld-key-tabs-slider-item--active');
            document.querySelectorAll('.ld-key-tabs-item')[tabIndex].querySelectorAll('.ld-key-tabs-slider-item')[slideIndex].classList.add('ld-key-tabs-slider-item--active');
          });
        });
      }
    };

    bind();
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/example-pages/components/pages/promo/vip.vue?vue&type=template&id=3285764e&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/example-pages/components/pages/promo/vip.vue?vue&type=template&id=3285764e& ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:"wc-inline"},[_c('div',{staticClass:"ld-key"},[_c('div',{staticClass:"lg-sp-b-4"},[_c('rt-jumbotron',{attrs:{"background":"main-color003-no-opacity","color":"main","description-color":"main","desktop-column-size":5}},[_c('template',{slot:"header"},[_c('img',{staticClass:"ld-key-logo",attrs:{"src":"https://static-cdn.rt.ru/sites/default/files/img/rt-key/Logo.svg","alt":""}})]),_vm._v(" "),_c('template',{slot:"label"},[_c('h1',[_vm._v("Технологии, "),_c('br'),_vm._v("открывающие новые "),_c('br'),_vm._v("возможности дома")])]),_vm._v(" "),_c('template',{slot:"description"},[_c('p',{staticClass:"sp-r-2"},[_vm._v("Удобный и многофункциональный сервис управления и контроля за\n            домом и придомовой территорией")])]),_vm._v(" "),_c('template',{slot:"image"},[_c('rt-img',{attrs:{"src":"https://static-cdn.rt.ru/sites/default/files/img/rt-key/banner-2.jpg","x2-src":"https://static-cdn.rt.ru/sites/default/files/img/rt-key/banner-2-x2.jpg"}})],1),_vm._v(" "),_c('template',{slot:"footer"},[_c('rt-button',{directives:[{name:"rt-scroll-to-on-click",rawName:"v-rt-scroll-to-on-click",value:({"scrollToId": "form"}),expression:"{\"scrollToId\": \"form\"}"}],attrs:{"color":"purple"}},[_vm._v("Подать заявку")])],1)],2)],1)])]),_vm._v(" "),_c('div',{staticClass:"wc-inline"},[_c('div',{staticClass:"ld-key ld-key-slader-block sp-v-5 td-sp-v-2 md-sp-t-none"},[_c('div',{staticClass:"rt-container sp-v-1 md-sp-t-2"},[_c('rt-col',[_c('rt-row',[_c('rt-col',{attrs:{"size":12,"tablet-size":6}},[_c('div',{staticClass:"ld-key-tabs"},[_c('div',{staticClass:"row ld-key-tabs-nav ld-key-tabs-nav-stretch d-flex"},[_c('div',{staticClass:"ld-key-tabs-col"},[_c('div',{staticClass:"ld-key-tabs-nav-item td-d-flex sp-l-0-4 sp-t-0-4 sp-r-0-4 sp-b-0-2 td-sp-h-0-3 td-sp-v-0-3 ld-key-tabs-nav-item--active",attrs:{"data-index":"0"}},[_c('svg',{staticClass:"ld-key-tabs-nav-icon d-block",attrs:{"width":"24","height":"24","viewBox":"0 0 24 24","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M17.5 10V14C17.5 15.4357 17.4982 16.3995 17.4234 17.1343C17.3512 17.8441 17.2236 18.172 17.0787 18.3889C16.8963 18.6619 16.6619 18.8963 16.3889 19.0787C16.172 19.2236 15.8441 19.3512 15.1343 19.4234C14.3995 19.4982 13.4357 19.5 12 19.5C10.5643 19.5 9.60047 19.4982 8.86566 19.4234C8.15592 19.3512 7.82798 19.2236 7.61107 19.0787C7.3381 18.8963 7.10372 18.6619 6.92133 18.3889C6.7764 18.172 6.64876 17.8441 6.57656 17.1343C6.50181 16.3995 6.5 15.4357 6.5 14V10C6.5 8.56432 6.50181 7.60047 6.57656 6.86566C6.64876 6.15592 6.7764 5.82798 6.92133 5.61107C7.10372 5.3381 7.3381 5.10372 7.61107 4.92133C7.82798 4.7764 8.15592 4.64876 8.86566 4.57656C9.60047 4.50181 10.5643 4.5 12 4.5C13.4357 4.5 14.3995 4.50181 15.1343 4.57656C15.8441 4.64876 16.172 4.7764 16.3889 4.92133C16.6619 5.10372 16.8963 5.3381 17.0787 5.61107C17.2236 5.82798 17.3512 6.15592 17.4234 6.86566C17.4982 7.60047 17.5 8.56432 17.5 10ZM5 10C5 7.19108 5 5.78661 5.67412 4.77772C5.96596 4.34096 6.34096 3.96596 6.77772 3.67412C7.78661 3 9.19108 3 12 3C14.8089 3 16.2134 3 17.2223 3.67412C17.659 3.96596 18.034 4.34096 18.3259 4.77772C19 5.78661 19 7.19108 19 10V14C19 16.8089 19 18.2134 18.3259 19.2223C18.034 19.659 17.659 20.034 17.2223 20.3259C16.2134 21 14.8089 21 12 21C9.19108 21 7.78661 21 6.77772 20.3259C6.34096 20.034 5.96596 19.659 5.67412 19.2223C5 18.2134 5 16.8089 5 14V10ZM11.5 15.5C11.5 16.0523 11.0523 16.5 10.5 16.5C9.94772 16.5 9.5 16.0523 9.5 15.5C9.5 14.9477 9.94772 14.5 10.5 14.5C11.0523 14.5 11.5 14.9477 11.5 15.5ZM13 15.5C13 16.8807 11.8807 18 10.5 18C9.11929 18 8 16.8807 8 15.5C8 14.1193 9.11929 13 10.5 13C11.8807 13 13 14.1193 13 15.5ZM8 9.495H12H16V11.005H12H8V9.495ZM12 6.495H8V8.005H12H16V6.495H12Z"}})]),_vm._v(" "),_c('p',{staticClass:"sp-t-0-3 td-d-none"},[_vm._v("Умный домофон")])])]),_vm._v(" "),_c('div',{staticClass:"ld-key-tabs-col"},[_c('div',{staticClass:"ld-key-tabs-nav-item td-d-flex ld-key-tabs-nav-item-puprle sp-l-0-4 sp-t-0-4 sp-r-0-4 sp-b-0-2 td-sp-h-0-3 td-sp-v-0-3",attrs:{"data-index":"1"}},[_c('svg',{staticClass:"ld-key-tabs-nav-icon d-block",attrs:{"width":"24","height":"24","viewBox":"0 0 24 24","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M3.93198 4.54457C5.0423 2.93218 7.25926 2.54402 8.85136 3.68325L22.7943 13.6602C23.0712 13.8583 23.0734 14.2693 22.7986 14.4703L20.6929 16.0109C19.1438 17.1443 17.1029 17.2803 15.4346 16.4124L14.1464 17.4334C13.1853 18.1952 11.836 18.2285 10.8385 17.5151L8.7328 16.0091L5.71803 18.4221C5.23034 18.8124 4.62428 19.0251 3.99962 19.0251H2.49099C2.43346 19.9597 2.01933 20.8402 1.2486 20.996C1.11327 21.0234 1 20.9084 1 20.7703V15.2612C1 15.1232 1.11327 15.0082 1.2486 15.0356C2.08151 15.204 2.49796 16.2187 2.49796 17.2334V17.5251H3.99962C4.28356 17.5251 4.55904 17.4284 4.78071 17.251L7.4651 15.1025L4.16789 12.7443C2.94875 11.8724 2.65237 10.1848 3.50148 8.94962L3.93734 8.3156L3.79793 8.21672C2.90579 7.58397 2.68742 6.35191 3.30775 5.45108L3.93198 4.54457ZM5.16098 9.18348L14.1217 15.539L13.2147 16.2579C12.7778 16.6041 12.1645 16.6193 11.7111 16.295L5.04048 11.5242C4.48633 11.1279 4.35161 10.3608 4.73757 9.79938L5.16098 9.18348ZM4.54317 6.30181L5.1674 5.3953C5.80187 4.47394 7.0687 4.25213 7.97847 4.90312L20.7975 14.0758L19.8072 14.8004C18.5919 15.6896 16.944 15.7017 15.7157 14.8305L4.66571 6.99322C4.44268 6.83503 4.38808 6.52702 4.54317 6.30181Z"}})]),_vm._v(" "),_c('p',{staticClass:"sp-t-0-3 td-d-none"},[_vm._v("Комплексное "),_c('br'),_vm._v(" видеонаблюдение")])])]),_vm._v(" "),_c('div',{staticClass:"ld-key-tabs-col"},[_c('div',{staticClass:"ld-key-tabs-nav-item td-d-flex ld-key-tabs-nav-item-dark sp-l-0-4 sp-t-0-4 sp-r-0-4 sp-b-0-2 td-sp-h-0-3 td-sp-v-0-3",attrs:{"data-index":"2"}},[_c('svg',{staticClass:"ld-key-tabs-nav-icon d-block",attrs:{"width":"24","height":"24","viewBox":"0 0 24 24","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M17.0037 4.61359L11 8.01635V10.2761L18.0004 6.30837C18.4728 6.04066 18.6326 5.44424 18.3573 4.97624C18.0821 4.50824 17.476 4.34587 17.0037 4.61359ZM11 12V18.5V18.5157H20V20.0157H9V20H5.5H4V18.5V5.91697C4 4.8124 4.89543 3.91697 6 3.91697H9C10.1046 3.91697 11 4.8124 11 5.91697V6.29239L16.2433 3.32062C17.4363 2.64442 18.9671 3.05452 19.6623 4.23661C20.3575 5.4187 19.9539 6.92514 18.7608 7.60134L11 12ZM6 5.41697H9C9.27614 5.41697 9.5 5.64083 9.5 5.91697V7.25004H5.5V5.91697C5.5 5.64083 5.72386 5.41697 6 5.41697ZM5.5 8.75004H9.5V18.5H5.5V8.75004Z"}})]),_vm._v(" "),_c('p',{staticClass:"sp-t-0-3 td-d-none"},[_vm._v("Умный шлагбаум")])])]),_vm._v(" "),_c('div',{staticClass:"ld-key-tabs-col"},[_c('div',{staticClass:"ld-key-tabs-nav-item td-d-flex ld-key-tabs-nav-item-gray sp-l-0-4 sp-t-0-4 sp-r-0-4 sp-b-0-2 td-sp-h-0-3 td-sp-v-0-3",attrs:{"data-index":"3"}},[_c('svg',{staticClass:"ld-key-tabs-nav-icon d-block",attrs:{"width":"24","height":"24","viewBox":"0 0 24 24","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M12 20.5C16.6944 20.5 20.5 16.6944 20.5 12C20.5 7.30558 16.6944 3.5 12 3.5C7.30558 3.5 3.5 7.30558 3.5 12C3.5 16.6944 7.30558 20.5 12 20.5ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM14 16.0078V17.5078H10V16.0078H14ZM7.5 12.5V10.5H9.51562V12.5H7.5ZM11.0156 12.5V10.5H12.9844V12.5H11.0156ZM14.4844 12.5H16.5V10.5H14.4844V12.5ZM6 9.25C6 9.11193 6.11193 9 6.25 9H17.75C17.8881 9 18 9.11193 18 9.25V13.75C18 13.8881 17.8881 14 17.75 14H6.25C6.11193 14 6 13.8881 6 13.75V9.25Z"}})]),_vm._v(" "),_c('p',{staticClass:"sp-t-0-3 td-d-none"},[_vm._v("Умные счетчики")])])]),_vm._v(" "),_c('div',{staticClass:"ld-key-tabs-col"},[_c('div',{staticClass:"ld-key-tabs-nav-item td-d-flex ld-key-tabs-nav-item-green sp-l-0-4 sp-t-0-4 sp-r-0-4 sp-b-0-2 td-sp-h-0-3 td-sp-v-0-3",attrs:{"data-index":"4"}},[_c('svg',{staticClass:"ld-key-tabs-nav-icon d-block",attrs:{"width":"24","height":"24","viewBox":"0 0 24 24","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M17 10V8C17 5.23858 14.7614 3 12 3C9.23858 3 7 5.23858 7 8V10H6C5.44772 10 5 10.4477 5 11V16C5 18.7614 7.23858 21 10 21H14C16.7614 21 19 18.7614 19 16V11C19 10.4477 18.5523 10 18 10H17ZM15.5 10H8.5V8C8.5 6.067 10.067 4.5 12 4.5C13.933 4.5 15.5 6.067 15.5 8V10ZM6.5 11.5V16C6.5 17.933 8.067 19.5 10 19.5H14C15.933 19.5 17.5 17.933 17.5 16V11.5H6.5ZM13.509 14.5031C13.509 15.0623 13.2034 15.5502 12.75 15.8091V17C12.75 17.2761 12.5261 17.5 12.25 17.5H11.75C11.4739 17.5 11.25 17.2761 11.25 17V15.8039C10.8015 15.5437 10.5 15.0586 10.5 14.5031C10.5 13.673 11.1736 13 12.0045 13C12.8354 13 13.509 13.673 13.509 14.5031Z"}})]),_vm._v(" "),_c('p',{staticClass:"sp-t-0-3 td-d-none"},[_vm._v("Умный доступ")])])])])])]),_vm._v(" "),_c('rt-col',{attrs:{"size":12,"tablet-size":6}},[_c('div',{staticClass:"ld-key-tabs-content"},[_c('div',{staticClass:"ld-key-tabs-item ld-key-tabs-item--active"},[_c('rt-row',[_c('rt-col',{attrs:{"size":"6"}},[_c('p',{staticClass:"td-d-none rt-font-h2 sp-t-4"},[_vm._v("Умный домофон — новые возможности комфорта вашего\n                        дома")])])],1),_vm._v(" "),_c('rt-row',{staticClass:"sp-t-1 row-td-reverse td-flex-j-end md-sp-t-2"},[_c('div',{staticClass:"rt-col-6 rt-col-td-6 rt-col-td-4 rt-col-md-3 td-sp-r-3 rt-font-small-paragraph"},[_c('p',{staticClass:"sp-t-0-2"},[_vm._v("Умный домофон — это комплексное решение, которое позволяет сделать доступ в\n                        дом современным, безопасным и комфортным для жителей дома и их гостей. Является частью\n                        видеонаблюдения придомовой территории с доступом к видео для УК, жителей и ближайшего\n                        ситуационного центра «Безопасный город».")]),_vm._v(" "),_c('div',{staticClass:"d-flex sp-t-2 md-d-block md-sp-t-1-1"},[_c('div',{staticClass:"flex-fill md-d-flex td-flex-v-center td-flex-v-center"},[_c('img',{staticClass:"d-block ld-key-icon",attrs:{"src":"https://static-cdn.rt.ru/sites/default/files/img/rt-key/010.svg","alt":""}}),_vm._v(" "),_c('p',{staticClass:"sp-t-0-4 md-sp-t-none md-sp-l-0-4"},[_vm._v("Управление доступом ")])]),_vm._v(" "),_c('div',{staticClass:"flex-fill md-d-flex td-flex-v-center sp-l-1 md-sp-l-none md-sp-v-1 td-flex-v-center"},[_c('img',{staticClass:"d-block ld-key-icon",attrs:{"src":"https://static-cdn.rt.ru/sites/default/files/img/rt-key/008.svg","alt":""}}),_vm._v(" "),_c('p',{staticClass:"sp-t-0-4 md-sp-t-none md-sp-l-0-4"},[_vm._v("Фото- и видеофиксация ")])]),_vm._v(" "),_c('div',{staticClass:"flex-fill md-d-flex td-flex-v-center td-flex-v-center"},[_c('img',{staticClass:"d-block ld-key-icon",attrs:{"src":"https://static-cdn.rt.ru/sites/default/files/img/rt-key/267.svg","alt":""}}),_vm._v(" "),_c('p',{staticClass:"sp-t-0-4 md-sp-t-none md-sp-l-0-4"},[_vm._v("Архив посещений ")])])]),_vm._v(" "),_c('p',{staticClass:"sp-t-1-3 color-purple rt-link ld-key-tab-show-more td-d-block d-none"},[_vm._v("Узнать\n                        больше")]),_vm._v(" "),_c('div',{staticClass:"ld-key-tab-content"},[_c('p',{staticClass:"rt-font-h3 sp-t-2"},[_vm._v("Что умеет ключ")]),_vm._v(" "),_c('div',{staticClass:"sp-t-1-1"},[_c('p',{staticClass:"ld-key-boolet"},[_vm._v("Управление и контроль доступа в жилое\n                          помещение")])]),_vm._v(" "),_c('div',{staticClass:"sp-t-1-1"},[_c('p',{staticClass:"ld-key-boolet"},[_vm._v("Просмотр видео с любой камеры домофона в режиме\n                          онлайн через архив видеозаписей")])]),_vm._v(" "),_c('div',{staticClass:"sp-t-1-1"},[_c('p',{staticClass:"ld-key-boolet"},[_vm._v("Сохранность общедомового имущества и чистота в\n                          доме")])]),_vm._v(" "),_c('div',{staticClass:"sp-t-1-1"},[_c('p',{staticClass:"ld-key-boolet"},[_vm._v("Архив всех вошедших в подъезд, распознанных по\n                          ключу или коду доступа, фотофиксация посетителей и времени входа")])]),_vm._v(" "),_c('p',{staticClass:"color-purple rt-link ld-key-tab-show-less d-none td-sp-t-1-1"},[_vm._v("Скрыть")])])]),_vm._v(" "),_c('div',{staticClass:"rt-col-6  rt-col-td-5 rt-font-center rt-col-td-2 rt-col-md-3 ld-key-tabs-imgs",attrs:{"label":"Умный домофон — новые возможности комфорта вашего дома","data-tab-index":"0"}},[_c('rt-img',{attrs:{"src":"https://static-cdn.rt.ru/sites/default/files/img/rt-key/slide1.png","x2-src":"https://static-cdn.rt.ru/sites/default/files/img/rt-key/slide1-x2.png"}})],1)])],1),_vm._v(" "),_c('div',{staticClass:"ld-key-tabs-item"},[_c('rt-row',[_c('rt-col',{attrs:{"size":"6"}},[_c('p',{staticClass:"td-d-none rt-font-h2 sp-t-4"},[_vm._v("Комплексное видеонаблюдение — новые возможности\n                        безопасности для вашего дома")])])],1),_vm._v(" "),_c('rt-row',{staticClass:"sp-t-1 row-td-reverse td-flex-j-end md-sp-t-2"},[_c('div',{staticClass:"rt-col-6 rt-col-td-6 rt-col-td-4 rt-col-md-3 td-sp-r-3 rt-font-small-paragraph"},[_c('p',{staticClass:"sp-t-0-2"},[_vm._v("Умный шлагбаум — это сервис, который предоставляет возможность управлять и\n                        контролировать доступ к придомовой территории для УК и жильцов.")]),_vm._v(" "),_c('div',{staticClass:"d-flex sp-t-2 md-d-block md-sp-t-1-1"},[_c('div',{staticClass:"flex-fill md-d-flex td-flex-v-center td-flex-v-center"},[_c('img',{staticClass:"d-block ld-key-icon",attrs:{"src":"https://static-cdn.rt.ru/sites/default/files/img/rt-key/186.svg","alt":""}}),_vm._v(" "),_c('p',{staticClass:"sp-t-0-4 md-sp-t-none md-sp-l-0-4"},[_vm._v("Видеоконтроль ")])]),_vm._v(" "),_c('div',{staticClass:"flex-fill md-d-flex td-flex-v-center sp-l-1 md-sp-l-none md-sp-v-1 td-flex-v-center"},[_c('img',{staticClass:"d-block ld-key-icon",attrs:{"src":"https://static-cdn.rt.ru/sites/default/files/img/rt-key/111.svg","alt":""}}),_vm._v(" "),_c('p',{staticClass:"sp-t-0-4 md-sp-t-none md-sp-l-0-4"},[_vm._v("Детекция событий ")])]),_vm._v(" "),_c('div',{staticClass:"flex-fill md-d-flex td-flex-v-center td-flex-v-center"},[_c('img',{staticClass:"d-block ld-key-icon",attrs:{"src":"https://static-cdn.rt.ru/sites/default/files/img/rt-key/008.svg","alt":""}}),_vm._v(" "),_c('p',{staticClass:"sp-t-0-4 md-sp-t-none md-sp-l-0-4"},[_vm._v("Видеоаналитика ")])])]),_vm._v(" "),_c('p',{staticClass:"sp-t-1-3 color-purple rt-link ld-key-tab-show-more td-d-block d-none"},[_vm._v("Узнать\n                        больше")]),_vm._v(" "),_c('div',{staticClass:"ld-key-tab-content"},[_c('p',{staticClass:"rt-font-h3 sp-t-2"},[_vm._v("Что умеет ключ")]),_vm._v(" "),_c('div',{staticClass:"sp-t-1-1"},[_c('p',{staticClass:"ld-key-boolet"},[_vm._v("Управление группой камер, хранение записей до\n                          60\n                          суток")])]),_vm._v(" "),_c('div',{staticClass:"sp-t-1-1"},[_c('p',{staticClass:"ld-key-boolet"},[_vm._v("Доступ к видеотрансляции и архиву через\n                          браузер,\n                          десктоп-клиент и мобильные приложения")])]),_vm._v(" "),_c('div',{staticClass:"sp-t-1-1"},[_c('p',{staticClass:"ld-key-boolet"},[_vm._v("Съемка в темноте и съемка со звуком. Настройка\n                          битрейта камер, поддержка Full HD. Видеоаналитика: пересечение линии, вторжение в зону,\n                          слепые\n                          зоны и другое")])]),_vm._v(" "),_c('div',{staticClass:"sp-t-1-1"},[_c('p',{staticClass:"ld-key-boolet"},[_vm._v("Возможность подключения центра мониторинга\n                          (более\n                          300) на объектах с применением локально облачного хранения")])]),_vm._v(" "),_c('p',{staticClass:"color-purple rt-link ld-key-tab-show-less d-none td-sp-t-1-1"},[_vm._v("Скрыть")])])]),_vm._v(" "),_c('div',{staticClass:"rt-col-6  rt-col-td-5 rt-font-center rt-col-td-2 rt-col-md-3 ld-key-tabs-imgs ld-key-tabs-imgs-go-top",attrs:{"label":"Комплексное видеонаблюдение — новые возможности безопасности для вашего дома","data-tab-index":"0"}},[_c('rt-img',{attrs:{"src":"https://static-cdn.rt.ru/sites/default/files/img/rt-key/slide2.png","x2-src":"https://static-cdn.rt.ru/sites/default/files/img/rt-key/slide2-x2.png"}})],1)])],1),_vm._v(" "),_c('div',{staticClass:"ld-key-tabs-item"},[_c('rt-row',[_c('rt-col',{attrs:{"size":"6"}},[_c('p',{staticClass:"td-d-none rt-font-h2 sp-t-4"},[_vm._v("Умный домофон — новые возможности удобства для вашего\n                        дома")])])],1),_vm._v(" "),_c('rt-row',{staticClass:"sp-t-1 row-td-reverse td-flex-j-end md-sp-t-2"},[_c('div',{staticClass:"rt-col-6 rt-col-td-6 rt-col-td-4 rt-col-md-3 td-sp-r-3 rt-font-small-paragraph"},[_c('p',{staticClass:"sp-t-0-2"},[_vm._v("Умный шлагбаум — это сервис, который предоставляет возможность управлять и\n                        контролировать доступ к придомовой территории для УК и жильцов.")]),_vm._v(" "),_c('div',{staticClass:"d-flex sp-t-2 md-d-block md-sp-t-1-1"},[_c('div',{staticClass:"flex-fill md-d-flex td-flex-v-center td-flex-v-center"},[_c('img',{staticClass:"d-block ld-key-icon",attrs:{"src":"https://static-cdn.rt.ru/sites/default/files/img/rt-key/186.svg","alt":""}}),_vm._v(" "),_c('p',{staticClass:"sp-t-0-4 md-sp-t-none md-sp-l-0-4"},[_vm._v("Удаленное управление ")])]),_vm._v(" "),_c('div',{staticClass:"flex-fill md-d-flex td-flex-v-center sp-l-1 md-sp-l-none md-sp-v-1 td-flex-v-center"},[_c('img',{staticClass:"d-block ld-key-icon",attrs:{"src":"https://static-cdn.rt.ru/sites/default/files/img/rt-key/008.svg","alt":""}}),_vm._v(" "),_c('p',{staticClass:"sp-t-0-4 md-sp-t-none md-sp-l-0-4"},[_vm._v("Видеофиксация событий ")])]),_vm._v(" "),_c('div',{staticClass:"flex-fill md-d-flex td-flex-v-center td-flex-v-center"},[_c('img',{staticClass:"d-block ld-key-icon",attrs:{"src":"https://static-cdn.rt.ru/sites/default/files/img/rt-key/133.svg","alt":""}}),_vm._v(" "),_c('p',{staticClass:"sp-t-0-4 md-sp-t-none md-sp-l-0-4"},[_vm._v("Автоматический пропуск "),_c('br'),_vm._v("экстренных служб ")])])]),_vm._v(" "),_c('p',{staticClass:"sp-t-1-3 color-purple rt-link ld-key-tab-show-more td-d-block d-none"},[_vm._v("Узнать\n                        больше")]),_vm._v(" "),_c('div',{staticClass:"ld-key-tab-content"},[_c('p',{staticClass:"rt-font-h3 sp-t-2"},[_vm._v("Что умеет ключ")]),_vm._v(" "),_c('div',{staticClass:"sp-t-1-1"},[_c('p',{staticClass:"ld-key-boolet"},[_vm._v("Ограничение доступа для посторонних\n                          автомашин")])]),_vm._v(" "),_c('div',{staticClass:"sp-t-1-1"},[_c('p',{staticClass:"ld-key-boolet"},[_vm._v("Беспрепятственный въезд служебного транспорта\n                          (полиция, скорая, МЧС)")])]),_vm._v(" "),_c('div',{staticClass:"sp-t-1-1"},[_c('p',{staticClass:"ld-key-boolet"},[_vm._v("Фиксация событий въезда\\выезда с камеры\n                          шлагбаума, доступ к архиву")])]),_vm._v(" "),_c('div',{staticClass:"sp-t-1-1"},[_c('p',{staticClass:"ld-key-boolet"},[_vm._v("Удаленное управление через Личный кабинет")])]),_vm._v(" "),_c('p',{staticClass:"color-purple rt-link ld-key-tab-show-less d-none td-sp-t-1-1"},[_vm._v("Скрыть")])])]),_vm._v(" "),_c('div',{staticClass:"rt-col-6  rt-col-td-5 rt-font-center rt-col-td-2 rt-col-md-3 ld-key-tabs-imgs",attrs:{"label":"Умный домофон — новые возможности удобства для вашего дома","data-tab-index":"0"}},[_c('rt-img',{attrs:{"src":"https://static-cdn.rt.ru/sites/default/files/img/rt-key/slide2.png","x2-src":"https://static-cdn.rt.ru/sites/default/files/img/rt-key/slide2-x2.png"}})],1)])],1),_vm._v(" "),_c('div',{staticClass:"ld-key-tabs-item"},[_c('rt-row',[_c('rt-col',{attrs:{"size":"6"}},[_c('p',{staticClass:"td-d-none rt-font-h2 sp-t-4"},[_vm._v("Умные счетчики — новые возможности вашего контроля")])])],1),_vm._v(" "),_c('rt-row',{staticClass:"sp-t-1 row-td-reverse td-flex-j-end md-sp-t-2"},[_c('div',{staticClass:"rt-col-6 rt-col-td-6 rt-col-td-4 rt-col-md-3 td-sp-r-3 rt-font-small-paragraph"},[_c('p',{staticClass:"sp-t-0-2"},[_vm._v("Умные счетчики — это комплексное решение для автоматизации учета потребления\n                        коммунальных ресурсов в многоквартирных домах.")]),_vm._v(" "),_c('div',{staticClass:"d-flex sp-t-2 md-d-block md-sp-t-1-1"},[_c('div',{staticClass:"flex-fill md-d-flex td-flex-v-center td-flex-v-center"},[_c('img',{staticClass:"d-block ld-key-icon",attrs:{"src":"https://static-cdn.rt.ru/sites/default/files/img/rt-key/266.svg","alt":""}}),_vm._v(" "),_c('p',{staticClass:"sp-t-0-4 md-sp-t-none md-sp-l-0-4"},[_vm._v("Автоматический сбор "),_c('br'),_vm._v("показаний ")])]),_vm._v(" "),_c('div',{staticClass:"flex-fill md-d-flex td-flex-v-center sp-l-1 md-sp-l-none md-sp-v-1 td-flex-v-center"},[_c('img',{staticClass:"d-block ld-key-icon",attrs:{"src":"https://static-cdn.rt.ru/sites/default/files/img/rt-key/186.svg","alt":""}}),_vm._v(" "),_c('p',{staticClass:"sp-t-0-4 md-sp-t-none md-sp-l-0-4"},[_vm._v("Управление потреблением")])]),_vm._v(" "),_c('div',{staticClass:"flex-fill md-d-flex td-flex-v-center td-flex-v-center"},[_c('img',{staticClass:"d-block ld-key-icon",attrs:{"src":"https://static-cdn.rt.ru/sites/default/files/img/rt-key/241.svg","alt":""}}),_vm._v(" "),_c('p',{staticClass:"sp-t-0-4 md-sp-t-none md-sp-l-0-4"},[_vm._v("Удобный доступ к "),_c('br'),_vm._v("статистике")])])]),_vm._v(" "),_c('p',{staticClass:"sp-t-1-3 color-purple rt-link ld-key-tab-show-more td-d-block d-none"},[_vm._v("Узнать\n                        больше")]),_vm._v(" "),_c('div',{staticClass:"ld-key-tab-content"},[_c('p',{staticClass:"rt-font-h3 sp-t-2"},[_vm._v("Что умеет ключ")]),_vm._v(" "),_c('div',{staticClass:"sp-t-1-1"},[_c('p',{staticClass:"ld-key-boolet"},[_vm._v("Автоматический сбор данных без обхода квартир и\n                          передачи данных от жильцов. Снижение манипуляций с приборами учета и уровня хищений")])]),_vm._v(" "),_c('div',{staticClass:"sp-t-1-1"},[_c('p',{staticClass:"ld-key-boolet"},[_vm._v("Оперативное получение показаний счетчиков и\n                          автоматическая передача данных в ГИС, РСО ")])]),_vm._v(" "),_c('div',{staticClass:"sp-t-1-1"},[_c('p',{staticClass:"ld-key-boolet"},[_vm._v("Быстрое определение и устранение аномального\n                          потребления ресурсов")])]),_vm._v(" "),_c('div',{staticClass:"sp-t-1-1"},[_c('p',{staticClass:"ld-key-boolet"},[_vm._v("Снижение расходов на ОДН* — правильные значения\n                          и\n                          точный баланс потребления")])]),_vm._v(" "),_c('p',{staticClass:"color-purple rt-link ld-key-tab-show-less d-none td-sp-t-1-1"},[_vm._v("Скрыть")])])]),_vm._v(" "),_c('div',{staticClass:"rt-col-6  rt-col-td-5 rt-font-center rt-col-td-2 rt-col-md-3 ld-key-tabs-imgs",attrs:{"label":"Умные счетчики — новые возможности вашего контроля","data-tab-index":"0"}},[_c('rt-img',{attrs:{"src":"https://static-cdn.rt.ru/sites/default/files/img/rt-key/slide3.png","x2-src":"https://static-cdn.rt.ru/sites/default/files/img/rt-key/slide3-x2.png"}})],1)])],1),_vm._v(" "),_c('div',{staticClass:"ld-key-tabs-item"},[_c('rt-row',[_c('rt-col',{attrs:{"size":"6"}},[_c('p',{staticClass:"td-d-none rt-font-h2 sp-t-4"},[_vm._v("Умный доступ (СКУД) — новые возможности управления\n                        доступом")])])],1),_vm._v(" "),_c('rt-row',{staticClass:"sp-t-1 row-td-reverse td-flex-j-end md-sp-t-2"},[_c('div',{staticClass:"rt-col-6 rt-col-td-6 rt-col-td-4 rt-col-md-3 td-sp-r-3 rt-font-small-paragraph"},[_c('p',{staticClass:"sp-t-0-2"},[_vm._v("СКУД — это комплексное решение для управления и контроля доступа во все\n                        помещения и на территорию жилого комплекса.")]),_vm._v(" "),_c('div',{staticClass:"d-flex sp-t-2 md-d-block md-sp-t-1-1"},[_c('div',{staticClass:"flex-fill md-d-flex td-flex-v-center td-flex-v-center"},[_c('img',{staticClass:"d-block ld-key-icon",attrs:{"src":"https://static-cdn.rt.ru/sites/default/files/img/rt-key/269.svg","alt":""}}),_vm._v(" "),_c('p',{staticClass:"sp-t-0-4 md-sp-t-none md-sp-l-0-4"},[_vm._v("Бесконтактный ключ")])]),_vm._v(" "),_c('div',{staticClass:"flex-fill md-d-flex td-flex-v-center sp-l-1 md-sp-l-none md-sp-v-1 td-flex-v-center"},[_c('img',{staticClass:"d-block ld-key-icon",attrs:{"src":"https://static-cdn.rt.ru/sites/default/files/img/rt-key/225.svg","alt":""}}),_vm._v(" "),_c('p',{staticClass:"sp-t-0-4 md-sp-t-none md-sp-l-0-4"},[_vm._v("Управление доступом на "),_c('br'),_vm._v("территорию")])]),_vm._v(" "),_c('div',{staticClass:"flex-fill md-d-flex td-flex-v-center td-flex-v-center"},[_c('img',{staticClass:"d-block ld-key-icon",attrs:{"src":"https://static-cdn.rt.ru/sites/default/files/img/rt-key/008.svg","alt":""}}),_vm._v(" "),_c('p',{staticClass:"sp-t-0-4 md-sp-t-none md-sp-l-0-4"},[_vm._v("Фото- и видеофиксация ")])])]),_vm._v(" "),_c('p',{staticClass:"sp-t-1-3 color-purple rt-link ld-key-tab-show-more td-d-block d-none"},[_vm._v("Узнать\n                        больше")]),_vm._v(" "),_c('div',{staticClass:"ld-key-tab-content"},[_c('p',{staticClass:"rt-font-h3 sp-t-2"},[_vm._v("Что умеет ключ")]),_vm._v(" "),_c('div',{staticClass:"sp-t-1-1"},[_c('p',{staticClass:"ld-key-boolet"},[_vm._v("Контроль и управление доступом на территорию и\n                          в\n                          помещения ЖК с помощью единого ключа SL3 для домофона и умного СКУД.")])]),_vm._v(" "),_c('div',{staticClass:"sp-t-1-1"},[_c('p',{staticClass:"ld-key-boolet"},[_vm._v("Открытие из приложения и с помощью беспроводных\n                          меток малого и дальнего радиуса действия")])]),_vm._v(" "),_c('div',{staticClass:"sp-t-1-1"},[_c('p',{staticClass:"ld-key-boolet"},[_vm._v("Единый некопируемый ключ доступа ко всем\n                          разрешенным помещениям и домофонам. Разблокировка дверей при пожаре для эвакуации людей")])]),_vm._v(" "),_c('div',{staticClass:"sp-t-1-1"},[_c('p',{staticClass:"ld-key-boolet"},[_vm._v("Контроль доступа сотрудников УК с ведением\n                          журнала доступа. Можно использовать для учета рабочего времени")])]),_vm._v(" "),_c('p',{staticClass:"color-purple rt-link ld-key-tab-show-less d-none td-sp-t-1-1"},[_vm._v("Скрыть")])])]),_vm._v(" "),_c('div',{staticClass:"rt-col-6  rt-col-td-5 rt-font-center rt-col-td-2 rt-col-md-3 ld-key-tabs-imgs",attrs:{"label":"Умный доступ (СКУД) — новые возможности управления доступом","data-tab-index":"0"}},[_c('rt-img',{attrs:{"src":"https://static-cdn.rt.ru/sites/default/files/img/rt-key/slide4.png","x2-src":"https://static-cdn.rt.ru/sites/default/files/img/rt-key/slide4-x2.png"}})],1)])],1)])])],1)],1)],1)])]),_vm._v(" "),_c('div',{staticClass:"wc-inline"},[_c('div',{staticClass:"sp-t-5 md-sp-v-2 color-block--white",attrs:{"id":"form"}},[_c('div',{staticClass:"rt-container sp-t-1"},[_c('rt-col',[_c('rt-row',[_c('rt-col',{staticStyle:{"min-height":"1000px"},attrs:{"size":6,"tablet-size":3,"mobile-size":3}},[_c('p',{staticClass:"rt-font-h2 sp-b-2"},[_vm._v("Заполните заявку")]),_vm._v(" "),_c('div',{staticClass:"d-flex rt-col-12 rt-col-td-6 rt-col-md-3",staticStyle:{"gap":"10px"}},[_c('rt-radio-button',{attrs:{"name":"Физическое лицо - ","value":"Я клиент Ростелекома","checked":""}},[_c('span',{staticClass:"rt-font-small-paragraph"},[_vm._v("Представитель УК")])]),_c('br'),_vm._v(" "),_c('rt-radio-button',{attrs:{"name":"Физическое лицо - ","value":"Я новый клиент"}},[_c('span',{staticClass:"rt-font-small-paragraph"},[_vm._v("Инициатор дома")])])],1),_vm._v(" "),_c('div',{staticClass:"sp-t-2"},[_c('rt-button',{attrs:{"color":"purple"}},[_vm._v("Подать заявку")])],1),_vm._v(" "),_c('div',{staticClass:"tab-content d-block"},[_vm._v("1")]),_vm._v(" "),_c('div',{staticClass:"tab-content d-none"},[_vm._v("2")])]),_vm._v(" "),_c('rt-col',{attrs:{"size":2,"t-hide":true}}),_vm._v(" "),_c('rt-col',{staticClass:"md-sp-t-2 d-flex td-d-block flex-v-center ",attrs:{"size":4,"tablet-size":3,"mobile-size":3}},[_c('div',[_c('img',{attrs:{"src":"https://static-cdn.rt.ru/sites/default/files/img/rt-key/Logo.svg","alt":""}}),_vm._v(" "),_c('p',{staticClass:"rt-font-h3 sp-t-1-2 sp-b-2 td-sp-b-1-2"},[_vm._v("Вам понадобится приложение "),_c('br'),_vm._v("«Ростелеком Ключ»")]),_vm._v(" "),_c('div',{staticClass:"d-flex td-d-block"},[_c('div',{staticClass:"flex-fill sp-r-0-2 td-sp-r-none"},[_c('rt-button',{staticClass:"rt-button--is-block",attrs:{"href":"#","color":"black"}},[_c('img',{attrs:{"src":"https://static-cdn.rt.ru/sites/default/files/img/ad_unit_component/appStore.svg","alt":""}})])],1),_vm._v(" "),_c('div',{staticClass:"flex-fill sp-l-0-2 td-sp-l-none td-sp-t-1"},[_c('rt-button',{staticClass:"rt-button--is-block",attrs:{"href":"#","color":"black"}},[_c('img',{attrs:{"src":"https://static-cdn.rt.ru/sites/default/files/img/ad_unit_component/googlePlay.svg","alt":""}})])],1)])])])],1)],1)],1)])]),_vm._v(" "),_c('div',{staticClass:"wc-inline"},[_c('div',{staticClass:"sp-v-5 td-sp-v-3 md-sp-v-2 color-block--white"},[_c('div',{staticClass:"sp-v-1"},[_c('div',{staticClass:"rt-container"},[_c('rt-col',[_c('p',{staticClass:"rt-font-h2 sp-b-2 md-sp-b-1-2"},[_vm._v("Выберите сегмент и узнайте как Ростелеком Ключ может помочь")]),_vm._v(" "),_c('rt-row',[_c('rt-col',{attrs:{"size":"6","tablet-size":6}},[_c('a',{attrs:{"href":"#"}},[_c('div',{staticClass:"ld-key-card rt-sys-icon-hover--orange"},[_c('rt-row',[_c('div',{staticClass:"rt-col-persent-5 md-d-none d-flex"},[_c('rt-img',{attrs:{"src":"https://static-cdn.rt.ru/sites/default/files/img/rt-key/card-1.jpg","x2-src":"https://static-cdn.rt.ru/sites/default/files/img/rt-key/card-1-x2.jpg"}})],1),_vm._v(" "),_c('div',{staticClass:"rt-col-persent-5 relative rt-col-md-3 d-flex"},[_c('div',{staticClass:"d-flex flex-column"},[_c('div',{staticClass:"flex-fill"},[_c('p',{staticClass:"rt-font-h4"},[_vm._v("Жильцы")]),_vm._v(" "),_c('p',{staticClass:"sp-t-1 color-main05 md-sp-b-1-1"},[_vm._v("Управление, обслуживание и контроль дома и территории 24 часа в сутки")])]),_vm._v(" "),_c('div',{staticClass:"ld-key-card-link d-flex flex-v-center"},[_c('div',{staticClass:"d-inline-block ld-key-card-link-text"},[_vm._v("Подробнее")]),_vm._v(" "),_c('rt-system-icons',{staticClass:"ld-key-card-arrow",attrs:{"name":"arrow right"}})],1)])])])],1)])]),_vm._v(" "),_c('rt-col',{staticClass:"td-sp-t-1",attrs:{"size":"6","tablet-size":6}},[_c('a',{attrs:{"href":"#"}},[_c('div',{staticClass:"ld-key-card rt-sys-icon-hover--orange"},[_c('rt-row',[_c('div',{staticClass:"rt-col-persent-5 md-d-none"},[_c('rt-img',{attrs:{"src":"https://static-cdn.rt.ru/sites/default/files/img/rt-key/card-2.jpg","x2-src":"https://static-cdn.rt.ru/sites/default/files/img/rt-key/card-2-x2.jpg"}})],1),_vm._v(" "),_c('div',{staticClass:"rt-col-persent-5 relative rt-col-md-3 d-flex"},[_c('div',{staticClass:"d-flex flex-column"},[_c('div',{staticClass:"flex-fill"},[_c('p',{staticClass:"rt-font-h4"},[_vm._v("Застройщик")]),_vm._v(" "),_c('p',{staticClass:"sp-t-1 color-main05 md-sp-b-1-1"},[_vm._v("Готовые решения для повышения качества жилья и контроля хода\n                              строительства ЖК ")])]),_vm._v(" "),_c('div',{staticClass:"ld-key-card-link d-flex flex-v-center"},[_c('div',{staticClass:"d-inline-block ld-key-card-link-text"},[_vm._v("Подробнее")]),_vm._v(" "),_c('rt-system-icons',{staticClass:"ld-key-card-arrow",attrs:{"name":"arrow right"}})],1)])])])],1)])])],1)],1)],1)])])])])}
var staticRenderFns = []



/***/ }),

/***/ "./node_modules/webpack/buildin/amd-options.js":
/*!****************************************!*\
  !*** (webpack)/buildin/amd-options.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(this, {}))

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./src/example-pages/components/pages/promo/vip.vue":
/*!**********************************************************!*\
  !*** ./src/example-pages/components/pages/promo/vip.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vip_vue_vue_type_template_id_3285764e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vip.vue?vue&type=template&id=3285764e& */ "./src/example-pages/components/pages/promo/vip.vue?vue&type=template&id=3285764e&");
/* harmony import */ var _vip_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vip.vue?vue&type=script&lang=js& */ "./src/example-pages/components/pages/promo/vip.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _vip_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _vip_vue_vue_type_template_id_3285764e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _vip_vue_vue_type_template_id_3285764e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
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

/***/ "./src/example-pages/components/pages/promo/vip.vue?vue&type=template&id=3285764e&":
/*!*****************************************************************************************!*\
  !*** ./src/example-pages/components/pages/promo/vip.vue?vue&type=template&id=3285764e& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_vip_vue_vue_type_template_id_3285764e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./vip.vue?vue&type=template&id=3285764e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/example-pages/components/pages/promo/vip.vue?vue&type=template&id=3285764e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_vip_vue_vue_type_template_id_3285764e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_vip_vue_vue_type_template_id_3285764e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
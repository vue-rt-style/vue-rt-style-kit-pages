(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[74],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/example-pages/components/pages/tv.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/example-pages/components/pages/tv.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "AppRadioButton",
  components: componentsList,
  data: function data() {
    return {
      carouselArray: null,
      activeSlideIndex: 0,
      letClick: true,
      nextSlideIndex: null,
      previousSlideIndex: null
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.carouselArray = this.$refs.carouselWrapper.children;
    this.fixDesignerFuckUp();
    this.setCarouselArrowsPosition();
    this.setTableColumnWidth();
    window.addEventListener('resize', function () {
      _this.fixDesignerFuckUp();

      _this.setCarouselArrowsPosition();

      _this.setTableColumnWidth();
    });
    this.$refs.video.addEventListener('ended', function () {
      _this.$refs.videoButton.classList.remove('blog__video-play-button--hidden');

      _this.$refs.videoTitle.classList.remove('blog__video-title--hidden');

      _this.$refs.videoWrapper.classList.remove('blog__video-block-wrapper--no-shadow');
    });
    this.setSlidesPosition();
  },
  created: function created() {},
  methods: {
    fixDesignerFuckUp: function fixDesignerFuckUp() {
      this.$refs.pseudoBg.style.left = -this.$refs.pseudoBgParent.getBoundingClientRect().left + 'px';

      if (window.innerWidth > 1024) {
        this.$refs.stickyBlock.style.paddingBottom = this.$refs.pseudoBgParent.getBoundingClientRect().height + 44 + 'px';
      } else {
        this.$refs.stickyBlock.removeAttribute('style');
      }
    },
    toggleOpen: function toggleOpen() {
      this.$refs.navigationDropdown.classList.toggle('navigation-link-wrapper__button--active');
    },
    toggleMobileMenu: function toggleMobileMenu() {
      this.$refs.navigationMobile.classList.toggle('navigation-mobile__button-wrapper--active');
      document.body.classList.toggle('ovh');
      document.documentElement.classList.toggle('ovh');
    },
    togglePlay: function togglePlay() {
      this.$refs.video.paused ? this.$refs.video.play() : this.$refs.video.pause();
      this.$refs.videoWrapper.classList.toggle('blog__video-block-wrapper--no-shadow');
      this.$refs.videoButton.classList.toggle('blog__video-play-button--hidden');
      this.$refs.videoTitle.classList.toggle('blog__video-title--hidden');
    },
    setSlidesPosition: function setSlidesPosition() {
      var _this2 = this;

      this.carouselArray[this.activeSlideIndex].classList.add('blog__carousel__item--active');
      Array.from(this.carouselArray).map(function (item) {
        item.classList.add('blog__carousel__item--hidden');
      });
      this.nextSlideIndex = this.activeSlideIndex == this.carouselArray.length - 1 ? 0 : this.activeSlideIndex + 1;
      this.previousSlideIndex = this.activeSlideIndex == 0 ? this.carouselArray.length - 1 : this.activeSlideIndex - 1;
      this.carouselArray[this.nextSlideIndex].classList.add('blog__carousel__item--next');
      this.carouselArray[this.previousSlideIndex].classList.add('blog__carousel__item--previous');
      this.carouselArray[this.nextSlideIndex].classList.remove('blog__carousel__item--previous');
      this.carouselArray[this.previousSlideIndex].classList.remove('blog__carousel__item--next');
      setTimeout(function () {
        Array.from(_this2.carouselArray).map(function (item) {
          item.classList.remove('blog__carousel__item--hidden');
        });
      }, 300);
    },
    nextImage: function nextImage() {
      var _this3 = this;

      if (this.letClick) {
        this.letClick = false;
        this.carouselArray[this.nextSlideIndex].classList.remove('blog__carousel__item--next');
        this.carouselArray[this.activeSlideIndex].classList.remove('blog__carousel__item--active');
        this.carouselArray[this.nextSlideIndex].classList.add('blog__carousel__item--active');
        this.carouselArray[this.activeSlideIndex].classList.add('blog__carousel__item--previous');
        this.activeSlideIndex = this.nextSlideIndex;
        setTimeout(function () {
          _this3.setSlidesPosition();
        }, 300);
        setTimeout(function () {
          _this3.letClick = true;
        }, 600);
      }
    },
    previousImage: function previousImage() {
      var _this4 = this;

      if (this.letClick) {
        this.letClick = false;
        this.carouselArray[this.previousSlideIndex].classList.remove('blog__carousel__item--previous');
        this.carouselArray[this.activeSlideIndex].classList.remove('blog__carousel__item--active');
        this.carouselArray[this.previousSlideIndex].classList.add('blog__carousel__item--active');
        this.carouselArray[this.activeSlideIndex].classList.add('blog__carousel__item--next');
        this.activeSlideIndex = this.previousSlideIndex;
        setTimeout(function () {
          _this4.setSlidesPosition();
        }, 300);
        setTimeout(function () {
          _this4.letClick = true;
        }, 600);
      }
    },
    setCarouselArrowsPosition: function setCarouselArrowsPosition() {
      var arrowWrapper = this.$refs.carousel.querySelector('.blog__carousel__navigation');
      var singleSlideHeight = this.$refs.carousel.querySelector('.blog__carousel__item-body').offsetHeight;
      arrowWrapper.style.top = 'calc(' + singleSlideHeight + 'px / 2)';
    },
    setTableColumnWidth: function setTableColumnWidth() {
      Array.from(this.$refs.colGroup.children).map(function (item, index) {
        if (window.innerWidth < 768) {
          if (index == 0) {
            item.style.width = '28%';
          } else {
            item.style.width = '24%';
          }
        } else {
          if (index == 0) {
            item.style.width = '40%';
          } else {
            item.style.width = '20%';
          }
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/example-pages/components/pages/tv.vue?vue&type=template&id=21234a6c&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/example-pages/components/pages/tv.vue?vue&type=template&id=21234a6c& ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"blog blog-article"},[_c('div',{staticClass:"blog__header-wrapper"},[_c('div',{staticClass:"rt-container"},[_c('div',{staticClass:"rt-col"},[_c('div',{staticClass:"blog__header"},[_c('div',{staticClass:"blog__header-left"},[_c('div',{staticClass:"logo"},[_c('svg',{staticClass:"d-block",attrs:{"width":"140","height":"36","viewBox":"0 0 140 36","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M15.8441 36.0011C9.88521 30.2409 6.9057 27.361 6.90557 27.3611L1.07766 33.1211C0.478143 33.9111 0.633048 35.0372 1.42365 35.6363C1.73597 35.873 2.11719 36.0011 2.50916 36.0011C2.51894 36.0011 2.52872 36.0011 2.5385 36.0011C6.9737 36.0011 11.4089 36.0011 15.8441 36.0011Z","fill":"#FF4F12"}}),_vm._v(" "),_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M21.6154 12.96L8.64616 0L1.40521 7.53728C0.503521 8.47587 0 9.72655 0 11.0276L0 33.12C0 34.7106 1.29034 36 2.88205 36C1.89594 36 1.09653 35.2012 1.09653 34.2158C1.09653 33.7414 1.28558 33.2865 1.6219 32.9517","fill":"#7700FF"}}),_vm._v(" "),_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M114.014 22.4419H110.895L107.169 26.2067V22.4419H104.532V32.816H107.169V28.5284L110.958 32.816H114.139L109.241 27.2524L114.014 22.4419Z","fill":"#101828"}}),_vm._v(" "),_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M30.3372 25.135H26.5277V20.5336H30.3372C32.2626 20.5336 33.1418 21.4537 33.1418 22.8342C33.1418 24.2146 32.2626 25.135 30.3372 25.135ZM30.4208 18.0654H23.765V32.7064H26.5277V27.6029H30.4208C33.7279 27.6029 35.9047 25.9089 35.9047 22.8342C35.9047 19.7595 33.7279 18.0654 30.4208 18.0654Z","fill":"#101828"}}),_vm._v(" "),_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M42.1346 30.6451C40.5859 30.6451 39.1416 29.5365 39.1416 27.6331C39.1416 25.7299 40.5859 24.6215 42.1346 24.6215C43.6835 24.6215 45.1277 25.7299 45.1277 27.6331C45.1277 29.5365 43.6835 30.6451 42.1346 30.6451ZM42.1346 22.1533C39.2882 22.1533 36.4624 23.994 36.4624 27.6331C36.4624 31.2727 39.2882 33.113 42.1346 33.113C44.9813 33.113 47.8069 31.2727 47.8069 27.6331C47.8069 23.994 44.9813 22.1533 42.1346 22.1533Z","fill":"#101828"}}),_vm._v(" "),_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M54.5338 30.6451C52.9431 30.6451 51.771 29.4947 51.771 27.6331C51.771 25.7926 52.9849 24.6215 54.5338 24.6215C55.4757 24.6215 56.292 25.0606 56.9408 26.0437L59.2012 24.7468C58.4479 23.1362 56.8152 22.1533 54.5547 22.1533C51.6035 22.1533 49.0918 24.3285 49.0918 27.6331C49.0918 30.9378 51.478 33.113 54.5547 33.113C56.7733 33.113 58.2593 32.1093 59.306 30.3315L57.1292 29.1393C56.5013 30.0176 55.8314 30.6451 54.5338 30.6451Z","fill":"#101828"}}),_vm._v(" "),_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M82.6201 28.3192C82.4947 29.9086 82.1803 30.2644 81.636 30.2644C81.2643 30.2644 81.0895 30.2232 80.835 30.1565L80.8482 32.8413C80.8482 32.8413 81.176 32.9413 81.783 32.9413C84.0225 32.9413 84.8597 31.4982 85.0691 28.4237L85.3202 24.8054H88.2922V32.7951H90.9296V22.4419H83.0596L82.6201 28.3192Z","fill":"#101828"}}),_vm._v(" "),_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M72.2737 26.2528C72.6504 25.0815 73.6969 24.1612 75.0783 24.1612C76.5436 24.1612 77.5273 24.956 77.7784 26.2528H72.2737ZM75.1622 22.1533C72.1482 22.1533 69.6992 24.3494 69.6992 27.6331C69.6992 30.9169 72.1482 33.113 75.0365 33.113C77.318 33.113 78.7622 32.2556 79.8087 30.4777L77.7155 29.432C77.0667 30.2477 76.4807 30.854 75.0783 30.854C73.5296 30.854 72.3993 29.8503 72.2318 28.2607H80.2272V27.3404C80.2272 24.3076 78.1343 22.1533 75.1622 22.1533Z","fill":"#101828"}}),_vm._v(" "),_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M94.9863 26.2528C95.3631 25.0815 96.4096 24.1612 97.791 24.1612C99.2561 24.1612 100.24 24.956 100.491 26.2528H94.9863ZM97.8748 22.1533C94.8607 22.1533 92.4119 24.3494 92.4119 27.6331C92.4119 30.9169 94.8607 33.113 97.7492 33.113C100.031 33.113 101.475 32.2556 102.521 30.4777L100.428 29.432C99.7794 30.2477 99.1933 30.854 97.791 30.854C96.2421 30.854 95.1118 29.8503 94.9445 28.2607H102.94V27.3404C102.94 24.3076 100.847 22.1533 97.8748 22.1533Z","fill":"#101828"}}),_vm._v(" "),_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M60.1255 24.7425H63.2233V32.816H65.8603V24.7425H68.9583V22.4419H60.1255V24.7425Z","fill":"#101828"}}),_vm._v(" "),_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M119.371 30.6451C117.822 30.6451 116.378 29.5365 116.378 27.6331C116.378 25.7299 117.822 24.6215 119.371 24.6215C120.92 24.6215 122.364 25.7299 122.364 27.6331C122.364 29.5365 120.92 30.6451 119.371 30.6451ZM119.371 22.1533C116.524 22.1533 113.699 23.9938 113.699 27.6331C113.699 31.2725 116.524 33.113 119.371 33.113C122.217 33.113 125.043 31.2725 125.043 27.6331C125.043 23.9938 122.217 22.1533 119.371 22.1533Z","fill":"#101828"}}),_vm._v(" "),_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M135.567 22.4419L132.705 29.7074L129.843 22.4419H126.396V32.7972H128.902V26.2415L131.681 32.7972H133.729L136.507 26.2415V32.7972H139.014V22.4419H135.567Z","fill":"#101828"}})])]),_vm._v(" "),_c('div',{staticClass:"navigation sp-l-1-2 td-d-none"},[_c('a',{staticClass:"navigation-link",attrs:{"href":"#"}},[_vm._v("Для меня")]),_vm._v(" "),_c('a',{staticClass:"navigation-link",attrs:{"href":"#"}},[_vm._v("Для бизнеса")]),_vm._v(" "),_c('a',{staticClass:"navigation-link",attrs:{"href":"#"}},[_vm._v("Для операторов")]),_vm._v(" "),_c('a',{staticClass:"navigation-link",attrs:{"href":"#"}},[_vm._v("Для инвесторов")]),_vm._v(" "),_c('div',{staticClass:"navigation-link-wrapper"},[_c('div',{ref:"navigationDropdown",staticClass:"navigation-link-wrapper__button sp-r-0-4",on:{"click":_vm.toggleOpen}},[_vm._v("Ещё")]),_vm._v(" "),_vm._m(0)])])]),_vm._v(" "),_c('div',{staticClass:"blog__header-right"},[_vm._m(1),_vm._v(" "),_c('div',{staticClass:"d-none td-d-block"},[_c('div',{staticClass:"navigation-mobile"},[_c('div',{ref:"navigationMobile",staticClass:"navigation-mobile__button-wrapper",on:{"click":_vm.toggleMobileMenu}},[_c('div',{staticClass:"navigation-mobile__button"})]),_vm._v(" "),_vm._m(2)])])])])])])]),_vm._v(" "),_vm._m(3),_vm._v(" "),_c('div',{staticClass:"blog__page-wrapper sp-t-2 td-sp-t-1-3 md-sp-t-1-1"},[_c('div',{staticClass:"blog-container"},[_c('div',{staticClass:"rt-col"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"rt-col-7 rt-col-td-6"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"rt-col-td-5 rt-col-md-3"},[_c('div',{staticClass:"blog-breadcrumbs sp-b-1 flex-start-center md-sp-b-0-2"},[_c('a',{staticClass:"blog-breadcrumbs__item sp-r-0-2",attrs:{"href":"#"}},[_vm._v("Блог")]),_vm._v(" "),_c('rt-system-icons',{attrs:{"name":"chevron right"}}),_vm._v(" "),_c('a',{staticClass:"blog-breadcrumbs__item sp-l-0-2",attrs:{"href":"#"}},[_vm._v("Для меня")])],1),_vm._v(" "),_c('div',{staticClass:"blog__description color-main07 rt-font-label flex-start-center sp-v-0-2"},[_c('span',{staticClass:"blog__weekly-theme__date"},[_vm._v("12 марта")]),_vm._v(" "),_c('span',{staticClass:"blog__weekly-theme__ttr flex-center-center sp-l-0-3"},[_c('rt-system-icons',{attrs:{"name":"time small","color":"main-color07"}}),_vm._v("\n                    5 минут чтения\n                  ")],1),_vm._v(" "),_c('span',{staticClass:"blog__weekly-theme__tag sp-l-0-3"},[_vm._v("#образование")])]),_vm._v(" "),_c('h3',{staticClass:"rt-font-h3 rt-font-bold sp-b-0-3 td-sp-b-0-2"},[_vm._v("Как геймеру стать киберспортсменом и начать зарабатывать")]),_vm._v(" "),_c('p',{staticClass:"rt-font-paragraph sp-b-2 td-sp-b-1-3 md-sp-b-1-1"},[_vm._v("Подзаголовок статьи, раскрывающий тему более широко. Обычно 100-200\n                  символов.")]),_vm._v(" "),_vm._m(4),_vm._v(" "),_c('p',{staticClass:"blog-article__image-description sp-t-0-2 sp-b-2 rt-font-small-paragraph color-main03 td-sp-b-1-3 md-sp-b-1-1"},[_vm._v("Фото: freepik.com")]),_vm._v(" "),_c('p',{staticClass:"rt-font-paragraph rt-font-bold sp-b-1 md-sp-b-0-4"},[_vm._v("Его место назначения – Нью-Йорк в августе 1988 года.\n                  Его цель – предотвращение Синей чумы, которая свирепствует в городе. Только одно его настораживает.\n                  А именно то, что никто из местных жителей о чуме ни слухом, ни духом!")]),_vm._v(" "),_c('p',{staticClass:"rt-font-paragraph sp-b-1 md-sp-b-1-1"},[_vm._v("Неопытные путешественники стараются материализоваться в каком-нибудь\n                  укромном месте, в уединении. Они возникают на помойках, в складских помещениях, в телефонных будках,\n                  отчаянно надеясь, что переход выполнен гладко. И неизбежно подобное поведение только привлекает к ним\n                  внимание - то самое, чего они хотели избежать. Но для такого опытного путешественника, как я, переход\n                  - пустяк.")]),_vm._v(" "),_c('div',{ref:"carousel",staticClass:"blog__carousel sp-b-2 td-sp-b-1-3 md-sp-b-1-1"},[_c('div',{ref:"carouselWrapper",staticClass:"carousel-slides-wrapper"},[_vm._m(5),_vm._v(" "),_vm._m(6),_vm._v(" "),_vm._m(7),_vm._v(" "),_vm._m(8),_vm._v(" "),_vm._m(9),_vm._v(" "),_vm._m(10)]),_vm._v(" "),_c('div',{staticClass:"blog__carousel__navigation"},[_c('div',{staticClass:"blog__carousel__navigation-arrow blog__carousel__navigation-arrow-left",on:{"click":_vm.previousImage}},[_c('svg',{attrs:{"width":"50","height":"50","viewBox":"0 0 50 50","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"d":"M26 1L2 25L26 49","stroke":"white","stroke-width":"2"}})])]),_vm._v(" "),_c('div',{staticClass:"blog__carousel__navigation-arrow blog__carousel__navigation-arrow-right",on:{"click":_vm.nextImage}},[_c('svg',{attrs:{"width":"50","height":"50","viewBox":"0 0 50 50","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"d":"M24 49L48 25L24 1","stroke":"white","stroke-width":"2"}})])])])]),_vm._v(" "),_c('p',{staticClass:"rt-font-paragraph sp-b-1-2 md-sp-b-0-4"},[_vm._v("Стала собираться маленькая толпа. Ко мне обратился молодой парень:")]),_vm._v(" "),_c('p',{staticClass:"rt-font-paragraph sp-b-1-2 md-sp-b-0-4"},[_vm._v("- Эй, что вы продаете?")]),_vm._v(" "),_c('p',{staticClass:"rt-font-paragraph sp-b-1-2 md-sp-b-0-4"},[_vm._v("Я улыбнулся ему, но не ответил. Мне нужна большая аудитория.")]),_vm._v(" "),_c('p',{staticClass:"rt-font-paragraph sp-b-1-2 md-sp-b-0-4"},[_vm._v("- Подождите же, друзья, подходите и внемлите. Это то, чего вы ждали,\n                  прекрасная возможность, последний шанс!")]),_vm._v(" "),_vm._m(11),_vm._v(" "),_vm._m(12),_vm._v(" "),_c('p',{staticClass:"rt-font-paragraph sp-b-2 td-sp-b-1-3 md-sp-b-1-1"},[_vm._v("— Славные жители Нью-Йорка! — воззвал я. — Я хочу поговорить о загадочном\n                  заболевании, неожиданно вошедшем в ваши жизни, об эпидемии, попросту называемой Синей Чумой. Сейчас\n                  вы уже знаете что спасения от этого безжалостного убийцы нет. Конечно, врачи продолжают заверять вас,\n                  что ведутся исследования, что скоро, дескать, будет найден ключ и определена радикальная терапия.")]),_vm._v(" "),_vm._m(13),_vm._v(" "),_c('p',{staticClass:"sp-v-2 rt-font-paragraph td-sp-v-1-3 md-sp-v-1-1"},[_vm._v("Но на самом деле у них нет ни сыворотки, ни антител — ничего. Да и\n                  откуда? Ученые не в состоянии даже выяснить причины заболевания! Пока они наработали лишь пустые и\n                  противоречивые теории. Из-за жуткой активности и быстрого распространения возбудителя, чрезвычайной\n                  заразности и неизвестных последствий мора можно ожидать, что врачи не успеют найти вовремя лекарство\n                  для вас, страдающих. Вся история несчастного человечества ясно показывает: несмотря на попытки контроля\n                  и лечения, эпидемии свирепствуют до тех пор, пока не исчерпывают себя.")]),_vm._v(" "),_c('div',{ref:"videoWrapper",staticClass:"blog__video-block-wrapper sp-b-2 td-sp-b-1-3 md-sp-b-1-1"},[_c('video',{ref:"video",staticClass:"blog__video-block",attrs:{"src":"https://moscow.rt.ru/sites/default/files/b2b/BD/BD_New.mp4"},on:{"click":_vm.togglePlay}}),_vm._v(" "),_c('div',{ref:"videoButton",staticClass:"blog__video-play-button"},[_c('svg',{attrs:{"width":"36","height":"48","viewBox":"0 0 36 48","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"d":"M-2.09815e-06 48L36 24L0 -1.57361e-06L-2.09815e-06 48Z","fill":"white"}})])]),_vm._v(" "),_c('p',{ref:"videoTitle",staticClass:"blog__video-title color-white md-sp-v-0-4 md-sp-r-1-4 md-sp-l-0-3 color-md-main"},[_vm._v("\n                    Роспотребнадзор отправляет туристов на карантин\n                  ")])]),_vm._v(" "),_c('p',{staticClass:"rt-font-paragraph sp-b-1 md-sp-b-0-4"},[_vm._v("Кто-то в толпе засмеялся; многие улыбались. Я объяснил это для себя\n                  истерией и продолжал:")]),_vm._v(" "),_c('p',{staticClass:"rt-font-paragraph sp-b-1 md-sp-b-0-4"},[_vm._v("- Что же делать? Останетесь ли пассивными жертвами чумы, обманутые\n                  напускным спокойствием правителей? Или осмелитесь использовать что-то новое, не отмеченное штампом\n                  согласия дискредитировавших себя политико-медицинских властей?")]),_vm._v(" "),_c('p',{staticClass:"rt-font-paragraph"},[_vm._v("К тому времени толпа разрослась человек до пятидесяти. Я быстро\n                  окончил свою речь.")]),_vm._v(" "),_c('div',{staticClass:"sp-t-2 td-sp-t-1-3 md-sp-t-1-1"},[_c('table',{staticClass:"blog__table"},[_c('caption',{staticClass:"blog__table-title rt-font-paragraph rt-font-bold"},[_vm._v("Таблица для макета блога")]),_vm._v(" "),_c('colgroup',{ref:"colGroup"},[_c('col',{staticStyle:{"width":"40%"},attrs:{"span":"1"}}),_vm._v(" "),_c('col',{staticStyle:{"width":"20%"},attrs:{"span":"1"}}),_vm._v(" "),_c('col',{staticStyle:{"width":"20%"},attrs:{"span":"1"}}),_vm._v(" "),_c('col',{staticStyle:{"width":"20%"},attrs:{"span":"1"}})]),_vm._v(" "),_vm._m(14),_vm._v(" "),_vm._m(15),_vm._v(" "),_vm._m(16),_vm._v(" "),_vm._m(17),_vm._v(" "),_vm._m(18)])]),_vm._v(" "),_c('p',{staticClass:"rt-font-paragraph sp-b-1 md-sp-b-0-4"},[_vm._v("- Врачи не могут защитить вас от Синей Чумы, нет, друзья мои. Но я могу!")]),_vm._v(" "),_c('p',{staticClass:"rt-font-paragraph sp-b-1 md-sp-b-0-4"},[_vm._v("Не теряя ни секунды, я раскрыл чемоданчик и зачерпнул пригоршню больших\n                  белых таблеток.")]),_vm._v(" "),_c('p',{staticClass:"rt-font-paragraph sp-b-2 md-sp-b-1"},[_vm._v("- Вот лекарство, которое усмирит Синюю Чуму! Нет времени объяснять,\n                  откуда оно у меня и как действует. Не буду я нести и научную тарабарщину. Вместо этого я предоставлю\n                  конкретные доказательства. Толпа притихла и обратилась в напряженное внимание. - Приведите мне\n                  заболевшего! вскричал я. - Приведите десять. И если в них еще теплится жизнь, они встанут на ноги!\n                  Ведите их ко мне, друзья! Я вылечу любого - мужчину, женщину или ребенка - страдающего от Синей Чумы!")]),_vm._v(" "),_vm._m(19),_vm._v(" "),_c('div',{staticClass:"blog__share sp-t-1-2 flex-start-center sp-b-3 td-sp-t-1-1 md-d-block md-sp-b-2 md-sp-t-0-4"},[_c('span',{staticClass:"rt-font-paragraph sp-r-1-2 md-d-block md-sp-b-0-2"},[_vm._v("Поделитесь с друзьями")]),_vm._v(" "),_c('a',{staticClass:"blog__share__icon",attrs:{"href":"#"}},[_c('svg',{attrs:{"width":"26","height":"26","viewBox":"0 0 26 26","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"d":"M25.8367 5.93152C24.9429 6.3216 23.9838 6.58615 22.9761 6.70425C24.005 6.09742 24.7927 5.1349 25.1659 3.99151C24.2008 4.55348 23.1354 4.96153 22.0003 5.18274C21.0913 4.22768 19.7983 3.63281 18.3641 3.63281C15.6128 3.63281 13.382 5.8299 13.382 8.53815C13.382 8.92226 13.426 9.29741 13.511 9.65614C9.37104 9.45135 5.70004 7.4979 3.24309 4.52956C2.81361 5.25297 2.56928 6.0959 2.56928 6.99569C2.56928 8.69808 3.44948 10.2002 4.78496 11.079C3.96849 11.0521 3.20059 10.8309 2.52833 10.4632V10.5245C2.52833 12.9009 4.24623 14.8843 6.52409 15.3357C6.10675 15.4463 5.66667 15.5076 5.21139 15.5076C4.88968 15.5076 4.57857 15.4762 4.27353 15.4164C4.90786 17.3669 6.74718 18.7852 8.92643 18.8241C7.22219 20.1394 5.07329 20.9211 2.73928 20.9211C2.33714 20.9211 1.94103 20.8972 1.55103 20.8538C3.75607 22.2483 6.37389 23.0614 9.18747 23.0614C18.3521 23.0614 23.3616 15.5853 23.3616 9.10164L23.3449 8.46644C24.3237 7.77886 25.1705 6.91499 25.8367 5.93152Z","fill":"#1DA1F2"}})])]),_vm._v(" "),_c('a',{staticClass:"blog__share__icon",attrs:{"href":"#"}},[_c('svg',{attrs:{"width":"26","height":"26","viewBox":"0 0 26 26","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"d":"M12.3999 19.5366H13.81C13.81 19.5366 14.2359 19.4906 14.4537 19.2613C14.6538 19.0504 14.6474 18.6545 14.6474 18.6545C14.6474 18.6545 14.6198 16.8012 15.4979 16.5281C16.3638 16.2592 17.4754 18.3194 18.6535 19.1116C19.5445 19.7109 20.2216 19.5797 20.2216 19.5797L23.3722 19.5365C23.3722 19.5365 25.0202 19.4368 24.2387 18.1676C24.1747 18.064 23.7834 17.2287 21.8961 15.5127C19.9203 13.7166 20.1853 14.0072 22.565 10.9004C24.0142 9.00842 24.5935 7.85323 24.4124 7.35872C24.2399 6.88746 23.1739 7.01188 23.1739 7.01188L19.6267 7.03333C19.6267 7.03333 19.3636 6.99818 19.1687 7.11253C18.978 7.22424 18.8557 7.48527 18.8557 7.48527C18.8557 7.48527 18.2941 8.94935 17.5455 10.1945C15.9659 12.8217 15.3342 12.9608 15.076 12.7974C14.4753 12.4171 14.6253 11.2701 14.6253 10.455C14.6253 7.90884 15.0197 6.8472 13.8575 6.57231C13.472 6.48123 13.1879 6.42083 12.2018 6.4111C10.9361 6.39856 9.8649 6.41489 9.25831 6.70596C8.8547 6.89951 8.5434 7.33083 8.73307 7.35575C8.96756 7.38627 9.49835 7.49616 9.77983 7.87122C10.1435 8.35583 10.1307 9.44354 10.1307 9.44354C10.1307 9.44354 10.3396 12.4408 9.64288 12.8131C9.16482 13.0685 8.50886 12.5471 7.10061 10.1634C6.37913 8.94242 5.83436 7.59269 5.83436 7.59269C5.83436 7.59269 5.72941 7.34057 5.54209 7.20543C5.31485 7.04191 4.99715 6.9901 4.99715 6.9901L1.6261 7.01171C1.6261 7.01171 1.12007 7.02557 0.934266 7.24107C0.768846 7.43297 0.921127 7.82931 0.921127 7.82931C0.921127 7.82931 3.56009 13.8772 6.54842 16.925C9.2888 19.72 12.3999 19.5366 12.3999 19.5366Z","fill":"#4680C2"}})])]),_vm._v(" "),_c('a',{staticClass:"blog__share__icon",attrs:{"href":"#"}},[_c('svg',{attrs:{"width":"26","height":"26","viewBox":"0 0 26 26","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M16.7134 25.9998V15.3652H20.1504L20.6649 11.2206H16.7134V8.57441C16.7134 7.37446 17.0342 6.55675 18.691 6.55675L20.8041 6.55572V2.84884C20.4386 2.79842 19.1843 2.68555 17.725 2.68555C14.6783 2.68555 12.5927 4.61698 12.5927 8.16407V11.2206H9.14697V15.3652H12.5927V25.9998H16.7134Z","fill":"#3C5B9A"}})])]),_vm._v(" "),_c('a',{staticClass:"blog__share__icon",attrs:{"href":"#"}},[_c('svg',{attrs:{"width":"26","height":"26","viewBox":"0 0 26 26","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M18.3407 8.34511C18.3407 11.2886 15.9444 13.6848 12.9982 13.6848C10.0521 13.6848 7.65585 11.2887 7.65585 8.34248C7.65585 5.39623 10.0521 3 12.9982 3C15.9444 3 18.3407 5.39623 18.3407 8.34511ZM12.9982 6.13217C14.2192 6.13217 15.2111 7.12405 15.2111 8.34511C15.2111 9.56339 14.2192 10.5554 12.9982 10.5554C11.7799 10.5554 10.7852 9.56355 10.7852 8.34511C10.7852 7.12405 11.7799 6.13217 12.9982 6.13217ZM15.16 18.0435C16.2489 17.7954 17.2975 17.3642 18.2625 16.7578C18.993 16.2969 19.214 15.332 18.753 14.5988C18.2921 13.8656 17.3271 13.6446 16.594 14.1055C14.4053 15.4828 11.5886 15.4802 9.39974 14.1055C8.66657 13.6446 7.70159 13.8656 7.24074 14.5988C6.77988 15.3293 7.00088 16.2969 7.73126 16.7578C8.69625 17.3642 9.74484 17.7956 10.8338 18.0435L7.84996 21.03C7.23811 21.6419 7.23811 22.6311 7.84996 23.243C8.15719 23.5476 8.55623 23.7012 8.95511 23.7012C9.35677 23.7012 9.75566 23.5476 10.063 23.243L12.9983 20.3075L15.9338 23.243C16.5456 23.8548 17.5349 23.8548 18.1467 23.243C18.7585 22.6311 18.7585 21.6391 18.1467 21.03L15.16 18.0435Z","fill":"#FF9800"}})])]),_vm._v(" "),_c('a',{staticClass:"blog__share__icon",attrs:{"href":"#"}},[_c('svg',{attrs:{"width":"26","height":"26","viewBox":"0 0 26 26","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M13.139 1.00781C9.84226 1.00781 9.42883 1.02179 8.13412 1.08086C6.84202 1.13979 5.95963 1.34502 5.18745 1.64512C4.38925 1.95529 3.71224 2.37037 3.0374 3.04521C2.36251 3.7201 1.94748 4.39707 1.63726 5.19527C1.33716 5.96745 1.13198 6.84983 1.073 8.14193C1.01393 9.43669 1 9.85003 1 13.1468C1 16.4436 1.01393 16.857 1.073 18.1517C1.13198 19.4438 1.33716 20.3262 1.63726 21.0984C1.94748 21.8966 2.36251 22.5736 3.0374 23.2484C3.71224 23.9233 4.38925 24.3383 5.18745 24.6486C5.95963 24.9487 6.84202 25.1539 8.13412 25.2129C9.42883 25.2719 9.84226 25.2859 13.139 25.2859C16.4358 25.2859 16.8491 25.2719 18.1439 25.2129C19.436 25.1539 20.3184 24.9487 21.0905 24.6486C21.8888 24.3383 22.5658 23.9233 23.2406 23.2484C23.9155 22.5736 24.3305 21.8966 24.6407 21.0984C24.9408 20.3262 25.1461 19.4438 25.205 18.1517C25.2641 16.857 25.2781 16.4436 25.2781 13.1468C25.2781 9.85008 25.2641 9.43669 25.205 8.14193C25.1461 6.84983 24.9408 5.96745 24.6407 5.19527C24.3305 4.39707 23.9155 3.7201 23.2406 3.04521C22.5658 2.37037 21.8888 1.95529 21.0905 1.64512C20.3184 1.34502 19.436 1.13979 18.1439 1.08086C16.8491 1.02179 16.4358 1.00781 13.139 1.00781ZM13.139 3.19502C16.3803 3.19502 16.7642 3.20736 18.0442 3.26576C19.2277 3.31977 19.8705 3.51753 20.2982 3.68377C20.8648 3.90398 21.2693 4.16703 21.694 4.59179C22.1188 5.01659 22.3818 5.42097 22.6021 5.98759C22.7683 6.41534 22.966 7.05809 23.0201 8.24163C23.0784 9.52164 23.0908 9.90559 23.0908 13.1468C23.0908 16.3881 23.0784 16.772 23.0201 18.052C22.966 19.2356 22.7683 19.8783 22.6021 20.3061C22.3818 20.8727 22.1188 21.2771 21.694 21.7018C21.2693 22.1266 20.8648 22.3897 20.2982 22.6099C19.8705 22.7761 19.2277 22.9739 18.0442 23.0279C16.7644 23.0863 16.3805 23.0987 13.139 23.0987C9.89749 23.0987 9.51364 23.0863 8.23382 23.0279C7.05027 22.9739 6.40747 22.7761 5.97973 22.6099C5.41316 22.3897 5.00873 22.1266 4.58397 21.7018C4.15921 21.2771 3.89612 20.8727 3.67591 20.3061C3.50972 19.8783 3.31196 19.2356 3.25794 18.052C3.19954 16.772 3.18721 16.3881 3.18721 13.1468C3.18721 9.90559 3.19954 9.52164 3.25794 8.24163C3.31196 7.05809 3.50972 6.41534 3.67591 5.98759C3.89612 5.42097 4.15921 5.01659 4.58397 4.59183C5.00873 4.16703 5.41316 3.90398 5.97973 3.68377C6.40747 3.51753 7.05027 3.31977 8.23377 3.26576C9.51383 3.20736 9.89773 3.19502 13.139 3.19502Z","fill":"url(#paint0_linear)"}}),_vm._v(" "),_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M13.0344 17.0458C10.8189 17.0458 9.02286 15.2498 9.02286 13.0343C9.02286 10.8188 10.8189 9.02286 13.0344 9.02286C15.2498 9.02286 17.0459 10.8188 17.0459 13.0343C17.0459 15.2498 15.2498 17.0458 13.0344 17.0458ZM13.0344 6.85449C9.62133 6.85449 6.85449 9.62128 6.85449 13.0343C6.85449 16.4474 9.62133 19.2142 13.0344 19.2142C16.4474 19.2142 19.2142 16.4474 19.2142 13.0343C19.2142 9.62128 16.4474 6.85449 13.0344 6.85449Z","fill":"url(#paint1_linear)"}}),_vm._v(" "),_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M20.949 6.74635C20.949 7.52478 20.318 8.15579 19.5396 8.15579C18.7612 8.15579 18.1301 7.52478 18.1301 6.74635C18.1301 5.96792 18.7612 5.33691 19.5396 5.33691C20.318 5.33691 20.949 5.96792 20.949 6.74635Z","fill":"url(#paint2_linear)"}}),_vm._v(" "),_c('defs',[_c('linearGradient',{attrs:{"id":"paint0_linear","x1":"25.2781","y1":"1.00781","x2":"1","y2":"25.2859","gradientUnits":"userSpaceOnUse"}},[_c('stop',{attrs:{"stop-color":"#DF0096"}}),_vm._v(" "),_c('stop',{attrs:{"offset":"1","stop-color":"#FFB500"}})],1),_vm._v(" "),_c('linearGradient',{attrs:{"id":"paint1_linear","x1":"25.641","y1":"1.20516","x2":"0.191615","y2":"25.7669","gradientUnits":"userSpaceOnUse"}},[_c('stop',{attrs:{"stop-color":"#DF0096"}}),_vm._v(" "),_c('stop',{attrs:{"offset":"1","stop-color":"#FFB500"}})],1),_vm._v(" "),_c('linearGradient',{attrs:{"id":"paint2_linear","x1":"24.9673","y1":"1.78311","x2":"0.877806","y2":"25.582","gradientUnits":"userSpaceOnUse"}},[_c('stop',{attrs:{"stop-color":"#DF0096"}}),_vm._v(" "),_c('stop',{attrs:{"offset":"1","stop-color":"#FFB500"}})],1)],1)])])])]),_vm._v(" "),_c('div',{staticClass:"d-none rt-col-td-1 md-d-none"})]),_vm._v(" "),_c('div',{ref:"pseudoBgParent",staticClass:"blog__form sp-v-3 md-sp-v-2"},[_c('div',{ref:"pseudoBg",staticClass:"color-block--main-color003-no-opacity blog__form-pseudo-background"}),_vm._v(" "),_c('div',{staticClass:"blog__form-body"},[_c('h4',{staticClass:"rt-col-h4 rt-font-bold sp-b-0-3"},[_vm._v("Остались вопросы? Мы поможем их решить")]),_vm._v(" "),_c('p',{staticClass:"rt-font-paragraph sp-b-2 md-sp-b-1-1"},[_vm._v("Здесь будет любой небольшой текст")]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('div',{staticClass:"rt-col-6 rt-col-md-3"},[_c('rt-input',{attrs:{"version":2,"placeholder":"Имя","type":"text"}})],1),_vm._v(" "),_c('div',{staticClass:"rt-col-6 rt-col-md-3 md-sp-t-1"},[_c('rt-input',{attrs:{"version":2,"placeholder":"Телефон","input-type":"tel"}})],1)]),_vm._v(" "),_c('div',{staticClass:"sp-t-1-2 md-sp-t-1-1"},[_c('rt-checkbox',{attrs:{"is-orange":true}},[_c('span',{staticClass:"rt-font"},[_vm._v("Даю согласие на обработку персональных данных в соответствии\n                        "),_c('a',{staticClass:"rt-link rt-link--orange",attrs:{"href":"#"}},[_vm._v("с условиями")])])]),_vm._v(" "),_c('div',{staticClass:"sp-t-2 md-sp-t-1-3"},[_c('rt-button',{attrs:{"color":"orange"}},[_vm._v("Оставить заявку")])],1)],1)])])]),_vm._v(" "),_c('div',{staticClass:"rt-col-1 rt-col-td-1 md-d-none"}),_vm._v(" "),_c('div',{staticClass:"rt-col-4 rt-col-td-6"},[_c('div',{staticClass:"blog-sticky-stretcher td-d-none"}),_vm._v(" "),_c('div',{ref:"stickyBlock",staticClass:"sticky-block td-sp-t-3 td-sp-b-2-1 md-sp-b-1-1 md-sp-t-2"},[_c('div',{staticClass:"flex-start-center td-sp-b-0-2 md-sp-b-0-1"},[_c('svg',{attrs:{"width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_c('circle',{attrs:{"cx":"12","cy":"12","r":"10","fill":"#BC104B"}}),_vm._v(" "),_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M17.5612 9.1768L11.0613 15.5704C10.7481 15.8784 10.2452 15.8763 9.93457 15.5657L6.93457 12.5657L8.06594 11.4343L10.5049 13.8733L16.4392 8.03613L17.5612 9.1768Z","fill":"white"}})]),_vm._v(" "),_c('span',{staticClass:"rt-font-h4 sp-l-0-2"},[_vm._v("Читайте также")])]),_vm._v(" "),_c('div',{staticClass:"blog__popular"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"rt-col-12 rt-col-td-3 rt-col-md-3"},[_c('div',{staticClass:"blog__popular__item sp-v-0-4"},[_c('div',{staticClass:"blog__description flex-start-center color-main05 sp-b-0-1 rt-font-label"},[_c('span',{staticClass:"blog__weekly-theme__date"},[_vm._v("12 марта")]),_vm._v(" "),_c('span',{staticClass:"blog__weekly-theme__ttr flex-center-center sp-l-0-3"},[_c('rt-system-icons',{attrs:{"name":"time small","color":"main-color05"}}),_vm._v("\n                          5 минут чтения\n                        ")],1),_vm._v(" "),_c('span',{staticClass:"blog__weekly-theme__tag sp-l-0-3"},[_vm._v("#образование")])]),_vm._v(" "),_vm._m(20)])]),_vm._v(" "),_c('div',{staticClass:"rt-col-12 rt-col-td-3 rt-col-md-3"},[_c('div',{staticClass:"blog__popular__item sp-v-0-4"},[_c('div',{staticClass:"blog__description flex-start-center color-main05 sp-b-0-1 rt-font-label"},[_c('span',{staticClass:"blog__weekly-theme__date"},[_vm._v("12 марта")]),_vm._v(" "),_c('span',{staticClass:"blog__weekly-theme__ttr flex-center-center sp-l-0-3"},[_c('rt-system-icons',{attrs:{"name":"time small","color":"main-color05"}}),_vm._v("\n                          5 минут чтения\n                        ")],1),_vm._v(" "),_c('span',{staticClass:"blog__weekly-theme__tag sp-l-0-3"},[_vm._v("#интернет")])]),_vm._v(" "),_c('a',{staticClass:"blog__popular__item-title",attrs:{"href":"#"}},[_vm._v("Взлом веб-камер: мифы и реальность")])])]),_vm._v(" "),_c('div',{staticClass:"rt-col-12 rt-col-td-3 rt-col-md-3"},[_c('div',{staticClass:"blog__popular__item sp-v-0-4"},[_c('div',{staticClass:"blog__description flex-start-center color-main05 sp-b-0-1 rt-font-label"},[_c('span',{staticClass:"blog__weekly-theme__date"},[_vm._v("12 марта")]),_vm._v(" "),_c('span',{staticClass:"blog__weekly-theme__ttr flex-center-center sp-l-0-3"},[_c('rt-system-icons',{attrs:{"name":"time small","color":"main-color05"}}),_vm._v("\n                          5 минут чтения\n                        ")],1),_vm._v(" "),_c('span',{staticClass:"blog__weekly-theme__tag sp-l-0-3"},[_vm._v("#технологии")])]),_vm._v(" "),_c('a',{staticClass:"blog__popular__item-title",attrs:{"href":"#"}},[_vm._v("Как 5G влияет на наше здоровье")])])]),_vm._v(" "),_c('div',{staticClass:"rt-col-12 rt-col-td-3 rt-col-md-3"},[_c('div',{staticClass:"blog__popular__item sp-v-0-4"},[_c('div',{staticClass:"blog__description flex-start-center color-main05 sp-b-0-1 rt-font-label"},[_c('span',{staticClass:"blog__weekly-theme__date"},[_vm._v("12 марта")]),_vm._v(" "),_c('span',{staticClass:"blog__weekly-theme__ttr flex-center-center sp-l-0-3"},[_c('rt-system-icons',{attrs:{"name":"time small","color":"main-color05"}}),_vm._v("\n                          5 минут чтения\n                        ")],1),_vm._v(" "),_c('span',{staticClass:"blog__weekly-theme__tag sp-l-0-3"},[_vm._v("#телефония")])]),_vm._v(" "),_vm._m(21)])])])])])])])])])]),_vm._v(" "),_c('div',{staticClass:"blog-footer color-block--main-color005-no-opacity"},[_vm._m(22),_vm._v(" "),_c('div',{staticClass:"blog-footer__bottom sp-t-1-1 sp-b-1-4 td-sp-v-1-3 md-sp-v-1-2"},[_c('div',{staticClass:"blog-container"},[_c('div',{staticClass:"rt-col"},[_c('div',{staticClass:"d-flex d-space-between td-flex-column-reverse"},[_vm._m(23),_vm._v(" "),_c('div',{staticClass:"blog-footer__social-media d-flex td-sp-b-1"},[_c('a',{staticClass:"blog__share__icon",attrs:{"href":"#"}},[_c('svg',{attrs:{"width":"26","height":"26","viewBox":"0 0 26 26","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"d":"M25.8367 5.93152C24.9429 6.3216 23.9838 6.58615 22.9761 6.70425C24.005 6.09742 24.7927 5.1349 25.1659 3.99151C24.2008 4.55348 23.1354 4.96153 22.0003 5.18274C21.0913 4.22768 19.7983 3.63281 18.3641 3.63281C15.6128 3.63281 13.382 5.8299 13.382 8.53815C13.382 8.92226 13.426 9.29741 13.511 9.65614C9.37104 9.45135 5.70004 7.4979 3.24309 4.52956C2.81361 5.25297 2.56928 6.0959 2.56928 6.99569C2.56928 8.69808 3.44948 10.2002 4.78496 11.079C3.96849 11.0521 3.20059 10.8309 2.52833 10.4632V10.5245C2.52833 12.9009 4.24623 14.8843 6.52409 15.3357C6.10675 15.4463 5.66667 15.5076 5.21139 15.5076C4.88968 15.5076 4.57857 15.4762 4.27353 15.4164C4.90786 17.3669 6.74718 18.7852 8.92643 18.8241C7.22219 20.1394 5.07329 20.9211 2.73928 20.9211C2.33714 20.9211 1.94103 20.8972 1.55103 20.8538C3.75607 22.2483 6.37389 23.0614 9.18747 23.0614C18.3521 23.0614 23.3616 15.5853 23.3616 9.10164L23.3449 8.46644C24.3237 7.77886 25.1705 6.91499 25.8367 5.93152Z","fill":"#1DA1F2"}})])]),_vm._v(" "),_c('a',{staticClass:"blog__share__icon",attrs:{"href":"#"}},[_c('svg',{attrs:{"width":"26","height":"26","viewBox":"0 0 26 26","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"d":"M12.3999 19.5366H13.81C13.81 19.5366 14.2359 19.4906 14.4537 19.2613C14.6538 19.0504 14.6474 18.6545 14.6474 18.6545C14.6474 18.6545 14.6198 16.8012 15.4979 16.5281C16.3638 16.2592 17.4754 18.3194 18.6535 19.1116C19.5445 19.7109 20.2216 19.5797 20.2216 19.5797L23.3722 19.5365C23.3722 19.5365 25.0202 19.4368 24.2387 18.1676C24.1747 18.064 23.7834 17.2287 21.8961 15.5127C19.9203 13.7166 20.1853 14.0072 22.565 10.9004C24.0142 9.00842 24.5935 7.85323 24.4124 7.35872C24.2399 6.88746 23.1739 7.01188 23.1739 7.01188L19.6267 7.03333C19.6267 7.03333 19.3636 6.99818 19.1687 7.11253C18.978 7.22424 18.8557 7.48527 18.8557 7.48527C18.8557 7.48527 18.2941 8.94935 17.5455 10.1945C15.9659 12.8217 15.3342 12.9608 15.076 12.7974C14.4753 12.4171 14.6253 11.2701 14.6253 10.455C14.6253 7.90884 15.0197 6.8472 13.8575 6.57231C13.472 6.48123 13.1879 6.42083 12.2018 6.4111C10.9361 6.39856 9.8649 6.41489 9.25831 6.70596C8.8547 6.89951 8.5434 7.33083 8.73307 7.35575C8.96756 7.38627 9.49835 7.49616 9.77983 7.87122C10.1435 8.35583 10.1307 9.44354 10.1307 9.44354C10.1307 9.44354 10.3396 12.4408 9.64288 12.8131C9.16482 13.0685 8.50886 12.5471 7.10061 10.1634C6.37913 8.94242 5.83436 7.59269 5.83436 7.59269C5.83436 7.59269 5.72941 7.34057 5.54209 7.20543C5.31485 7.04191 4.99715 6.9901 4.99715 6.9901L1.6261 7.01171C1.6261 7.01171 1.12007 7.02557 0.934266 7.24107C0.768846 7.43297 0.921127 7.82931 0.921127 7.82931C0.921127 7.82931 3.56009 13.8772 6.54842 16.925C9.2888 19.72 12.3999 19.5366 12.3999 19.5366Z","fill":"#4680C2"}})])]),_vm._v(" "),_c('a',{staticClass:"blog__share__icon",attrs:{"href":"#"}},[_c('svg',{attrs:{"width":"26","height":"26","viewBox":"0 0 26 26","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M16.7134 25.9998V15.3652H20.1504L20.6649 11.2206H16.7134V8.57441C16.7134 7.37446 17.0342 6.55675 18.691 6.55675L20.8041 6.55572V2.84884C20.4386 2.79842 19.1843 2.68555 17.725 2.68555C14.6783 2.68555 12.5927 4.61698 12.5927 8.16407V11.2206H9.14697V15.3652H12.5927V25.9998H16.7134Z","fill":"#3C5B9A"}})])]),_vm._v(" "),_c('a',{staticClass:"blog__share__icon",attrs:{"href":"#"}},[_c('svg',{attrs:{"width":"26","height":"26","viewBox":"0 0 26 26","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M18.3407 8.34511C18.3407 11.2886 15.9444 13.6848 12.9982 13.6848C10.0521 13.6848 7.65585 11.2887 7.65585 8.34248C7.65585 5.39623 10.0521 3 12.9982 3C15.9444 3 18.3407 5.39623 18.3407 8.34511ZM12.9982 6.13217C14.2192 6.13217 15.2111 7.12405 15.2111 8.34511C15.2111 9.56339 14.2192 10.5554 12.9982 10.5554C11.7799 10.5554 10.7852 9.56355 10.7852 8.34511C10.7852 7.12405 11.7799 6.13217 12.9982 6.13217ZM15.16 18.0435C16.2489 17.7954 17.2975 17.3642 18.2625 16.7578C18.993 16.2969 19.214 15.332 18.753 14.5988C18.2921 13.8656 17.3271 13.6446 16.594 14.1055C14.4053 15.4828 11.5886 15.4802 9.39974 14.1055C8.66657 13.6446 7.70159 13.8656 7.24074 14.5988C6.77988 15.3293 7.00088 16.2969 7.73126 16.7578C8.69625 17.3642 9.74484 17.7956 10.8338 18.0435L7.84996 21.03C7.23811 21.6419 7.23811 22.6311 7.84996 23.243C8.15719 23.5476 8.55623 23.7012 8.95511 23.7012C9.35677 23.7012 9.75566 23.5476 10.063 23.243L12.9983 20.3075L15.9338 23.243C16.5456 23.8548 17.5349 23.8548 18.1467 23.243C18.7585 22.6311 18.7585 21.6391 18.1467 21.03L15.16 18.0435Z","fill":"#FF9800"}})])]),_vm._v(" "),_c('a',{staticClass:"blog__share__icon",attrs:{"href":"#"}},[_c('svg',{attrs:{"width":"26","height":"26","viewBox":"0 0 26 26","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M13.139 1.00781C9.84226 1.00781 9.42883 1.02179 8.13412 1.08086C6.84202 1.13979 5.95963 1.34502 5.18745 1.64512C4.38925 1.95529 3.71224 2.37037 3.0374 3.04521C2.36251 3.7201 1.94748 4.39707 1.63726 5.19527C1.33716 5.96745 1.13198 6.84983 1.073 8.14193C1.01393 9.43669 1 9.85003 1 13.1468C1 16.4436 1.01393 16.857 1.073 18.1517C1.13198 19.4438 1.33716 20.3262 1.63726 21.0984C1.94748 21.8966 2.36251 22.5736 3.0374 23.2484C3.71224 23.9233 4.38925 24.3383 5.18745 24.6486C5.95963 24.9487 6.84202 25.1539 8.13412 25.2129C9.42883 25.2719 9.84226 25.2859 13.139 25.2859C16.4358 25.2859 16.8491 25.2719 18.1439 25.2129C19.436 25.1539 20.3184 24.9487 21.0905 24.6486C21.8888 24.3383 22.5658 23.9233 23.2406 23.2484C23.9155 22.5736 24.3305 21.8966 24.6407 21.0984C24.9408 20.3262 25.1461 19.4438 25.205 18.1517C25.2641 16.857 25.2781 16.4436 25.2781 13.1468C25.2781 9.85008 25.2641 9.43669 25.205 8.14193C25.1461 6.84983 24.9408 5.96745 24.6407 5.19527C24.3305 4.39707 23.9155 3.7201 23.2406 3.04521C22.5658 2.37037 21.8888 1.95529 21.0905 1.64512C20.3184 1.34502 19.436 1.13979 18.1439 1.08086C16.8491 1.02179 16.4358 1.00781 13.139 1.00781ZM13.139 3.19502C16.3803 3.19502 16.7642 3.20736 18.0442 3.26576C19.2277 3.31977 19.8705 3.51753 20.2982 3.68377C20.8648 3.90398 21.2693 4.16703 21.694 4.59179C22.1188 5.01659 22.3818 5.42097 22.6021 5.98759C22.7683 6.41534 22.966 7.05809 23.0201 8.24163C23.0784 9.52164 23.0908 9.90559 23.0908 13.1468C23.0908 16.3881 23.0784 16.772 23.0201 18.052C22.966 19.2356 22.7683 19.8783 22.6021 20.3061C22.3818 20.8727 22.1188 21.2771 21.694 21.7018C21.2693 22.1266 20.8648 22.3897 20.2982 22.6099C19.8705 22.7761 19.2277 22.9739 18.0442 23.0279C16.7644 23.0863 16.3805 23.0987 13.139 23.0987C9.89749 23.0987 9.51364 23.0863 8.23382 23.0279C7.05027 22.9739 6.40747 22.7761 5.97973 22.6099C5.41316 22.3897 5.00873 22.1266 4.58397 21.7018C4.15921 21.2771 3.89612 20.8727 3.67591 20.3061C3.50972 19.8783 3.31196 19.2356 3.25794 18.052C3.19954 16.772 3.18721 16.3881 3.18721 13.1468C3.18721 9.90559 3.19954 9.52164 3.25794 8.24163C3.31196 7.05809 3.50972 6.41534 3.67591 5.98759C3.89612 5.42097 4.15921 5.01659 4.58397 4.59183C5.00873 4.16703 5.41316 3.90398 5.97973 3.68377C6.40747 3.51753 7.05027 3.31977 8.23377 3.26576C9.51383 3.20736 9.89773 3.19502 13.139 3.19502Z","fill":"url(#paint0_linear)"}}),_vm._v(" "),_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M13.0344 17.0458C10.8189 17.0458 9.02286 15.2498 9.02286 13.0343C9.02286 10.8188 10.8189 9.02286 13.0344 9.02286C15.2498 9.02286 17.0459 10.8188 17.0459 13.0343C17.0459 15.2498 15.2498 17.0458 13.0344 17.0458ZM13.0344 6.85449C9.62133 6.85449 6.85449 9.62128 6.85449 13.0343C6.85449 16.4474 9.62133 19.2142 13.0344 19.2142C16.4474 19.2142 19.2142 16.4474 19.2142 13.0343C19.2142 9.62128 16.4474 6.85449 13.0344 6.85449Z","fill":"url(#paint1_linear)"}}),_vm._v(" "),_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M20.949 6.74635C20.949 7.52478 20.318 8.15579 19.5396 8.15579C18.7612 8.15579 18.1301 7.52478 18.1301 6.74635C18.1301 5.96792 18.7612 5.33691 19.5396 5.33691C20.318 5.33691 20.949 5.96792 20.949 6.74635Z","fill":"url(#paint2_linear)"}}),_vm._v(" "),_c('defs',[_c('linearGradient',{attrs:{"id":"paint0_linear","x1":"25.2781","y1":"1.00781","x2":"1","y2":"25.2859","gradientUnits":"userSpaceOnUse"}},[_c('stop',{attrs:{"stop-color":"#DF0096"}}),_vm._v(" "),_c('stop',{attrs:{"offset":"1","stop-color":"#FFB500"}})],1),_vm._v(" "),_c('linearGradient',{attrs:{"id":"paint1_linear","x1":"25.641","y1":"1.20516","x2":"0.191615","y2":"25.7669","gradientUnits":"userSpaceOnUse"}},[_c('stop',{attrs:{"stop-color":"#DF0096"}}),_vm._v(" "),_c('stop',{attrs:{"offset":"1","stop-color":"#FFB500"}})],1),_vm._v(" "),_c('linearGradient',{attrs:{"id":"paint2_linear","x1":"24.9673","y1":"1.78311","x2":"0.877806","y2":"25.582","gradientUnits":"userSpaceOnUse"}},[_c('stop',{attrs:{"stop-color":"#DF0096"}}),_vm._v(" "),_c('stop',{attrs:{"offset":"1","stop-color":"#FFB500"}})],1)],1)])])])])])])])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"navigation-link-wrapper__inner"},[_c('a',{staticClass:"navigation-link",attrs:{"href":"#"}},[_vm._v("О компании")]),_vm._v(" "),_c('a',{staticClass:"navigation-link",attrs:{"href":"#"}},[_vm._v("Для инвесторов")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"navigation td-d-none"},[_c('a',{staticClass:"navigation-link",attrs:{"href":"#"}},[_vm._v("Помощь")]),_vm._v(" "),_c('a',{staticClass:"navigation-link",attrs:{"href":"#"}},[_vm._v("Оплата")]),_vm._v(" "),_c('a',{staticClass:"navigation-link",attrs:{"href":"#"}},[_vm._v("Бонус")]),_vm._v(" "),_c('a',{staticClass:"navigation-link",attrs:{"href":"#"}},[_vm._v("Офисы")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"navigation-mobile__list sp-v-1 sp-l-1-3 sp-r-3"},[_c('a',{staticClass:"navigation-link",attrs:{"href":"#"}},[_vm._v("Для меня")]),_vm._v(" "),_c('a',{staticClass:"navigation-link",attrs:{"href":"#"}},[_vm._v("Для бизнеса")]),_vm._v(" "),_c('a',{staticClass:"navigation-link",attrs:{"href":"#"}},[_vm._v("Для операторов")]),_vm._v(" "),_c('a',{staticClass:"navigation-link",attrs:{"href":"#"}},[_vm._v("Для инвесторов")]),_vm._v(" "),_c('a',{staticClass:"navigation-link",attrs:{"href":"#"}},[_vm._v("О компании")]),_vm._v(" "),_c('a',{staticClass:"navigation-link",attrs:{"href":"#"}},[_vm._v("Для инвесторов")]),_vm._v(" "),_c('a',{staticClass:"navigation-link",attrs:{"href":"#"}},[_vm._v("Помощь")]),_vm._v(" "),_c('a',{staticClass:"navigation-link",attrs:{"href":"#"}},[_vm._v("Оплата")]),_vm._v(" "),_c('a',{staticClass:"navigation-link",attrs:{"href":"#"}},[_vm._v("Бонус")]),_vm._v(" "),_c('a',{staticClass:"navigation-link",attrs:{"href":"#"}},[_vm._v("Офисы")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"blog__title color-block--main-color003-no-opacity sp-v-1-2"},[_c('div',{staticClass:"blog-container"},[_c('div',{staticClass:"rt-col"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"rt-col-4 rt-col-td-4 rt-col-md-3"},[_c('a',{attrs:{"href":"#"}},[_c('h2',{staticClass:"rt-font-h3 sp-b-0-1"},[_vm._v("Простые технологии")]),_vm._v(" "),_c('p',{staticClass:"tagline"},[_vm._v("рассказываем просто о сложном")])])]),_vm._v(" "),_c('div',{staticClass:"rt-col-8 rt-col-td-2 md-d-none"})])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"blog-article__image-wrapper"},[_c('img',{staticClass:"blog-article__image-body",attrs:{"src":"https://spb.rt.ru/sites/default/files/b2b/blog__theme.png"}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"blog__carousel__item blog__carousel__item--active"},[_c('img',{staticClass:"blog__carousel__item-body",attrs:{"src":"https://spb.rt.ru/sites/default/files/b2b/img-4-2.png"}}),_vm._v(" "),_c('div',{staticClass:"color-block--main-color005 sp-h-1 sp-t-0-2 sp-b-1"},[_c('div',{staticClass:"d-flex d-space-between sp-b-1 td-sp-b-0-4 md-sp-b-0-3"},[_c('span',{staticClass:"rt-font-small-paragraph color-main03"},[_vm._v("Фото: freepik.com")]),_vm._v(" "),_c('span',{staticClass:"rt-font-small-paragraph color-main03"},[_vm._v("1/6")])]),_vm._v(" "),_c('p',{staticClass:"rt-font-paragraph rt-font-bold sp-b-0-2"},[_vm._v("Заголовок")]),_vm._v(" "),_c('p',{staticClass:"rt-font-small-paragraph"},[_vm._v("Неопытные путешественники стараются материализоваться в\n                          каком-нибудь укромном месте, в уединении.")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"blog__carousel__item"},[_c('img',{staticClass:"blog__carousel__item-body",attrs:{"src":"https://spb.rt.ru/sites/default/files/b2b/img-4-2.png"}}),_vm._v(" "),_c('div',{staticClass:"color-block--main-color005 sp-h-1 sp-t-0-2 sp-b-1"},[_c('div',{staticClass:"d-flex d-space-between sp-b-1 td-sp-b-0-4 md-sp-b-0-3"},[_c('span',{staticClass:"rt-font-small-paragraph color-main03"},[_vm._v("Фото: freepik.com")]),_vm._v(" "),_c('span',{staticClass:"rt-font-small-paragraph color-main03"},[_vm._v("2/6")])]),_vm._v(" "),_c('p',{staticClass:"rt-font-paragraph rt-font-bold sp-b-0-2"},[_vm._v("Заголовок")]),_vm._v(" "),_c('p',{staticClass:"rt-font-small-paragraph"},[_vm._v("Неопытные путешественники стараются материализоваться в\n                          каком-нибудь укромном месте, в уединении. Неопытные путешественники стараются\n                          материализоваться в каком-нибудь укромном месте, в уединении.")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"blog__carousel__item"},[_c('img',{staticClass:"blog__carousel__item-body",attrs:{"src":"https://spb.rt.ru/sites/default/files/b2b/img-4-2.png"}}),_vm._v(" "),_c('div',{staticClass:"color-block--main-color005 sp-h-1 sp-t-0-2 sp-b-1"},[_c('div',{staticClass:"d-flex d-space-between sp-b-1 td-sp-b-0-4 md-sp-b-0-3"},[_c('span',{staticClass:"rt-font-small-paragraph color-main03"},[_vm._v("Фото: freepik.com")]),_vm._v(" "),_c('span',{staticClass:"rt-font-small-paragraph color-main03"},[_vm._v("3/6")])]),_vm._v(" "),_c('p',{staticClass:"rt-font-paragraph rt-font-bold sp-b-0-2"},[_vm._v("Заголовок")]),_vm._v(" "),_c('p',{staticClass:"rt-font-small-paragraph"},[_vm._v("Неопытные путешественники стараются материализоваться в\n                          каком-нибудь укромном месте, в уединении.")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"blog__carousel__item"},[_c('img',{staticClass:"blog__carousel__item-body",attrs:{"src":"https://spb.rt.ru/sites/default/files/b2b/img-4-2.png"}}),_vm._v(" "),_c('div',{staticClass:"color-block--main-color005 sp-h-1 sp-t-0-2 sp-b-1"},[_c('div',{staticClass:"d-flex d-space-between sp-b-1 td-sp-b-0-4 md-sp-b-0-3"},[_c('span',{staticClass:"rt-font-small-paragraph color-main03"},[_vm._v("Фото: freepik.com")]),_vm._v(" "),_c('span',{staticClass:"rt-font-small-paragraph color-main03"},[_vm._v("4/6")])]),_vm._v(" "),_c('p',{staticClass:"rt-font-paragraph rt-font-bold sp-b-0-2"},[_vm._v("Заголовок")]),_vm._v(" "),_c('p',{staticClass:"rt-font-small-paragraph"},[_vm._v("Неопытные путешественники стараются материализоваться в\n                          каком-нибудь укромном месте, в уединении.")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"blog__carousel__item"},[_c('img',{staticClass:"blog__carousel__item-body",attrs:{"src":"https://spb.rt.ru/sites/default/files/b2b/img-4-2.png"}}),_vm._v(" "),_c('div',{staticClass:"color-block--main-color005 sp-h-1 sp-t-0-2 sp-b-1"},[_c('div',{staticClass:"d-flex d-space-between sp-b-1 td-sp-b-0-4 md-sp-b-0-3"},[_c('span',{staticClass:"rt-font-small-paragraph color-main03"},[_vm._v("Фото: freepik.com")]),_vm._v(" "),_c('span',{staticClass:"rt-font-small-paragraph color-main03"},[_vm._v("5/6")])]),_vm._v(" "),_c('p',{staticClass:"rt-font-paragraph rt-font-bold sp-b-0-2"},[_vm._v("Заголовок")]),_vm._v(" "),_c('p',{staticClass:"rt-font-small-paragraph"},[_vm._v("Неопытные путешественники стараются материализоваться в\n                          каком-нибудь укромном месте, в уединении.")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"blog__carousel__item"},[_c('img',{staticClass:"blog__carousel__item-body",attrs:{"src":"https://spb.rt.ru/sites/default/files/b2b/img-4-2.png"}}),_vm._v(" "),_c('div',{staticClass:"color-block--main-color005 sp-h-1 sp-t-0-2 sp-b-1"},[_c('div',{staticClass:"d-flex d-space-between sp-b-1 td-sp-b-0-4 md-sp-b-0-3"},[_c('span',{staticClass:"rt-font-small-paragraph color-main03"},[_vm._v("Фото: freepik.com")]),_vm._v(" "),_c('span',{staticClass:"rt-font-small-paragraph color-main03"},[_vm._v("6/6")])]),_vm._v(" "),_c('p',{staticClass:"rt-font-paragraph rt-font-bold sp-b-0-2"},[_vm._v("Заголовок")]),_vm._v(" "),_c('p',{staticClass:"rt-font-small-paragraph"},[_vm._v("Неопытные путешественники стараются материализоваться в\n                          каком-нибудь укромном месте, в уединении.")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',{staticClass:"rt-font-paragraph sp-b-2 td-sp-b-1-3 md-sp-b-1-1"},[_vm._v("Вскоре собралось человек тридцать, и я решил, что\n                  "),_c('span',{staticClass:"color-red"},[_vm._v("для начала достаточно.")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"blog__quote sp-b-2 td-sp-b-1-3 md-sp-b-1-1 sp-h-0-4"},[_c('span',{staticClass:"rt-font-h4 rt-font-bold color-block--main-color005"},[_vm._v("- Подходите, друзья!\n                    - воскликнул я.")]),_vm._v(" "),_c('br'),_vm._v(" "),_c('span',{staticClass:"rt-font-h4 rt-font-bold color-block--main-color005"},[_vm._v("- Подходите скорей! Не упускайте возможность. Не надо смущаться и робеть, подходите ближе и слушайте добрые вести.")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"color-block--cool-grey blog__frame flex-center-center"},[_c('p',{staticClass:"rt-font-paragraph color-main05"},[_vm._v("ФРЕЙМ")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('tr',[_c('th',[_vm._v("Тариф")]),_vm._v(" "),_c('th',[_vm._v("Домашний интернет")]),_vm._v(" "),_c('th',[_vm._v("Интерактивное ТВ Wink")]),_vm._v(" "),_c('th',[_vm._v("Онлайн-кинотеатр Wink")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('tr',[_c('td',[_vm._v("2 в 1 Апгрейд 500")]),_vm._v(" "),_c('td',[_vm._v("500 Мбит/с")]),_vm._v(" "),_c('td',[_vm._v("127 каналов")]),_vm._v(" "),_c('td',[_vm._v("Не входит")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('tr',[_c('td',[_vm._v("Технологии развлечения")]),_vm._v(" "),_c('td',[_vm._v("300 Мбит/с")]),_vm._v(" "),_c('td',[_vm._v("175 каналов")]),_vm._v(" "),_c('td',[_vm._v("10000 фильмов и сериалов")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('tr',[_c('td',[_vm._v("Игровой")]),_vm._v(" "),_c('td',[_vm._v("890 Мбит/с")]),_vm._v(" "),_c('td',[_vm._v("175 каналов")]),_vm._v(" "),_c('td',[_vm._v("10000 фильмов и сериалов")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('tr',[_c('td',[_vm._v("Облачный")]),_vm._v(" "),_c('td',[_vm._v("100 Мбит/с")]),_vm._v(" "),_c('td',[_vm._v("175 каналов")]),_vm._v(" "),_c('td',[_vm._v("10000 фильмов и сериалов")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"blog__tags-wrapper blog__tags-wrapper--no-scroll"},[_c('div',{staticClass:"blog__tags-wrapper__inner"},[_c('button',{staticClass:"blog__tag"},[_vm._v("#бизнес")]),_vm._v(" "),_c('button',{staticClass:"blog__tag"},[_vm._v("#инструкции")]),_vm._v(" "),_c('button',{staticClass:"blog__tag"},[_vm._v("#интернет")]),_vm._v(" "),_c('button',{staticClass:"blog__tag"},[_vm._v("#образование")]),_vm._v(" "),_c('button',{staticClass:"blog__tag"},[_vm._v("#развлечения")]),_vm._v(" "),_c('button',{staticClass:"blog__tag"},[_vm._v("#телефония")]),_vm._v(" "),_c('button',{staticClass:"blog__tag"},[_vm._v("#технологии")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a',{staticClass:"blog__popular__item-title",attrs:{"href":"#"}},[_vm._v("Видеонаблюдение в офисе: плюсы,"),_c('br'),_vm._v(" минусы, подводные камни")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a',{staticClass:"blog__popular__item-title",attrs:{"href":"#"}},[_vm._v("Сколько на самом деле стоит"),_c('br'),_vm._v(" мобильная связь")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"blog-footer__top sp-t-1-1 sp-b-0-3 td-sp-t-1-3 td-sp-b-1 md-sp-t-1-2"},[_c('div',{staticClass:"blog-container"},[_c('div',{staticClass:"rt-col"},[_c('div',{staticClass:"d-flex d-space-between d-md-flex-column"},[_c('div',{staticClass:"blog-footer__navigation color-main085 rt-font-control flex-end-bottom sp-b-0-1 d-md-flex-column md-flex-start-top md-sp-b-1-1"},[_c('a',{staticClass:"navigation-link",attrs:{"href":"#"}},[_vm._v("Для меня")]),_vm._v(" "),_c('a',{staticClass:"navigation-link",attrs:{"href":"#"}},[_vm._v("Для бизнеса")]),_vm._v(" "),_c('a',{staticClass:"navigation-link",attrs:{"href":"#"}},[_vm._v("Для операторов")]),_vm._v(" "),_c('a',{staticClass:"navigation-link",attrs:{"href":"#"}},[_vm._v("Для инвесторов")])]),_vm._v(" "),_c('div',{staticClass:"flex-end-bottom d-md-flex-column md-flex-start-top"},[_c('div',{staticClass:"rt-font-control d-inline-block sp-r-0-3 sp-b-0-1 color-main05"},[_vm._v("Отдел продаж")]),_vm._v(" "),_c('a',{staticClass:"rt-font-h3",attrs:{"href":"tel:88007078000"}},[_vm._v("8 800 707 80 00")])])])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"color-main05"},[_c('p',{staticClass:"blog-footer__privacy"},[_vm._v("Продолжая использовать наш сайт, вы даете согласие на обработку\n                файлов "),_c('a',{staticClass:"blog-footer-link",attrs:{"href":"#"}},[_vm._v("Cookies")]),_vm._v(" и других "),_c('br'),_vm._v("пользовательских данных, в соответствии с\n                "),_c('a',{staticClass:"blog-footer-link",attrs:{"href":"#"}},[_vm._v("Политикой конфиденциальности")]),_vm._v(".\n              ")]),_vm._v(" "),_c('div',{staticClass:"sp-t-0-3 rt-font-label"},[_c('span',{staticClass:"sp-r-1"},[_vm._v("© 2021 ПАО «Ростелеком». 18+")]),_vm._v(" "),_c('a',{attrs:{"href":"#"}},[_vm._v("RSS")])])])}]



/***/ }),

/***/ "./src/example-pages/components/pages/tv.vue":
/*!***************************************************!*\
  !*** ./src/example-pages/components/pages/tv.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tv_vue_vue_type_template_id_21234a6c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tv.vue?vue&type=template&id=21234a6c& */ "./src/example-pages/components/pages/tv.vue?vue&type=template&id=21234a6c&");
/* harmony import */ var _tv_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tv.vue?vue&type=script&lang=js& */ "./src/example-pages/components/pages/tv.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _tv_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _tv_vue_vue_type_template_id_21234a6c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _tv_vue_vue_type_template_id_21234a6c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/example-pages/components/pages/tv.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./src/example-pages/components/pages/tv.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_tv_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./tv.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/example-pages/components/pages/tv.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_tv_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/example-pages/components/pages/tv.vue?vue&type=template&id=21234a6c&":
/*!**********************************************************************************!*\
  !*** ./src/example-pages/components/pages/tv.vue?vue&type=template&id=21234a6c& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tv_vue_vue_type_template_id_21234a6c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./tv.vue?vue&type=template&id=21234a6c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/example-pages/components/pages/tv.vue?vue&type=template&id=21234a6c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tv_vue_vue_type_template_id_21234a6c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tv_vue_vue_type_template_id_21234a6c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
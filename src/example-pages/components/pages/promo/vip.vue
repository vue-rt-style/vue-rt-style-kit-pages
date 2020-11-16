<template>
  <div class="ld-router">

    <div class="wc-inline">
      <div class="ld-router">
        <div class="lg-router-header">
          <div class="rt-container td-sp-t-1-2 sp-t-1-1  md-sp-t-1">
            <rt-col :size="12">
              <div class="d-flex">
                <div class="lg-router-header-logo">
                  <svg width="138" height="37" viewBox="0 0 138 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M15.617 36.0011C9.74383 30.2409 6.80719 27.361 6.80706 27.3611L1.063 33.1211C0.472115 33.9111 0.624792 35.0372 1.40402 35.6363C1.71185 35.873 2.08758 36.0011 2.47391 36.0011C2.48355 36.0011 2.49319 36.0011 2.50283 36.0011C6.87421 36.0011 11.2456 36.0011 15.617 36.0011Z"
                          fill="#FF4F12"/>
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M21.3044 12.96L8.52175 0L1.38499 7.53728C0.496276 8.47587 0 9.72655 0 11.0276L0 33.12C0 34.7106 1.27177 36 2.84058 36C1.86866 36 1.08075 35.2012 1.08075 34.2158C1.08075 33.7414 1.26708 33.2865 1.59856 32.9517"
                          fill="#7700FF"/>
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M112.374 22.4418H109.301L105.629 26.2066V22.4418H103.029V32.8159H105.629V28.5283L109.363 32.8159H112.498L107.671 27.2523L112.374 22.4418Z"
                          fill="white"/>
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M29.9014 25.135H26.1467V20.5336H29.9014C31.7992 20.5336 32.6657 21.4538 32.6657 22.8342C32.6657 24.2146 31.7992 25.135 29.9014 25.135ZM29.9839 18.0655H23.4238V32.7064H26.1467V27.603H29.9839C33.2434 27.603 35.3888 25.9089 35.3888 22.8342C35.3888 19.7595 33.2434 18.0655 29.9839 18.0655Z"
                          fill="white"/>
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M41.5281 30.6452C40.0017 30.6452 38.5781 29.5366 38.5781 27.6332C38.5781 25.73 40.0017 24.6216 41.5281 24.6216C43.0547 24.6216 44.4781 25.73 44.4781 27.6332C44.4781 29.5366 43.0547 30.6452 41.5281 30.6452ZM41.5281 22.1535C38.7226 22.1535 35.9375 23.9942 35.9375 27.6332C35.9375 31.2729 38.7226 33.1132 41.5281 33.1132C44.3338 33.1132 47.1187 31.2729 47.1187 27.6332C47.1187 23.9942 44.3338 22.1535 41.5281 22.1535Z"
                          fill="white"/>
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M53.7504 30.6452C52.1826 30.6452 51.0274 29.4948 51.0274 27.6332C51.0274 25.7927 52.2238 24.6216 53.7504 24.6216C54.6788 24.6216 55.4833 25.0608 56.1228 26.0438L58.3507 24.747C57.6082 23.1363 55.9989 22.1535 53.7711 22.1535C50.8623 22.1535 48.3867 24.3287 48.3867 27.6332C48.3867 30.938 50.7386 33.1132 53.7711 33.1132C55.9577 33.1132 57.4223 32.1094 58.4539 30.3316L56.3085 29.1394C55.6896 30.0178 55.0294 30.6452 53.7504 30.6452Z"
                          fill="white"/>
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M81.4314 28.3191C81.3077 29.9086 80.9978 30.2643 80.4614 30.2643C80.095 30.2643 79.9227 30.2231 79.6719 30.1565L79.6849 32.8412C79.6849 32.8412 80.008 32.9413 80.6062 32.9413C82.8135 32.9413 83.6387 31.4981 83.8451 28.4236L84.0926 24.8053H87.0218V32.795H89.6212V22.4418H81.8645L81.4314 28.3191Z"
                          fill="white"/>
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M71.2347 26.253C71.606 25.0817 72.6374 24.1613 73.999 24.1613C75.4432 24.1613 76.4127 24.9561 76.6603 26.253H71.2347ZM74.0816 22.1535C71.111 22.1535 68.6973 24.3496 68.6973 27.6332C68.6973 30.9171 71.111 33.1132 73.9578 33.1132C76.2065 33.1132 77.6298 32.2557 78.6613 30.4779L76.5982 29.4321C75.9588 30.2478 75.3811 30.8542 73.999 30.8542C72.4726 30.8542 71.3585 29.8504 71.1935 28.2609H79.0738V27.3405C79.0738 24.3078 77.011 22.1535 74.0816 22.1535Z"
                          fill="white"/>
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M93.6194 26.253C93.9908 25.0817 95.0222 24.1613 96.3838 24.1613C97.8277 24.1613 98.7973 24.9561 99.045 26.253H93.6194ZM96.4664 22.1535C93.4956 22.1535 91.082 24.3496 91.082 27.6332C91.082 30.9171 93.4956 33.1132 96.3425 33.1132C98.5911 33.1132 100.014 32.2557 101.046 30.4779L98.9832 29.4321C98.3435 30.2478 97.7659 30.8542 96.3838 30.8542C94.8572 30.8542 93.7431 29.8504 93.5782 28.2609H101.459V27.3405C101.459 24.3078 99.3956 22.1535 96.4664 22.1535Z"
                          fill="white"/>
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M59.2617 24.7424H62.3149V32.8159H64.914V24.7424H67.9674V22.4418H59.2617V24.7424Z"
                          fill="white"/>
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M117.653 30.6452C116.127 30.6452 114.703 29.5366 114.703 27.6332C114.703 25.73 116.127 24.6216 117.653 24.6216C119.18 24.6216 120.603 25.73 120.603 27.6332C120.603 29.5366 119.18 30.6452 117.653 30.6452ZM117.653 22.1535C114.848 22.1535 112.062 23.994 112.062 27.6332C112.062 31.2727 114.848 33.1132 117.653 33.1132C120.459 33.1132 123.244 31.2727 123.244 27.6332C123.244 23.994 120.459 22.1535 117.653 22.1535Z"
                          fill="white"/>
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M133.618 22.4419L130.797 29.7074L127.976 22.4419H124.578V32.7972H127.049V26.2415L129.788 32.7972H131.806L134.544 26.2415V32.7972H137.015V22.4419H133.618Z"
                          fill="white"/>
                  </svg>

                </div>
                <div class="lg-router-header-logo">
                  <img class="d-block" width="44"
                       src="https://static-cdn.rt.ru/sites/default/files/img/router-huawei/huawei.png"/>
                </div>
              </div>
            </rt-col>
          </div>

        </div>
        <div class="lg-router-pop-wrapper">
          <div class="lg-router-pop rt-font-center color-white">
            <rt-system-icons name="close large" color="white" class="lg-router-pop-close"></rt-system-icons>
            <p class="rt-font-h3 sp-b-0-4 sp-t-2">Проверьте тип подключения</p>
            <p class="rt-font-paragraph">Подойдите к вашему роутеру, предварительно убедитесь, что ничего не скачиваете
              или играете. Проверьте основной провод провайдера или гнездо разъема и сравните с изображениями ниже.</p>
            <div class="d-flex">
              <div class="flex-fill"></div>
              <div class="d-flex sp-t-1-1 td-sp-t-1-3 md-sp-t-1-1 md-d-block">
                <div class="lg-router-pop-icon">
                  <img class="d-block" width="174" height="118"
                       src="https://static-cdn.rt.ru/sites/default/files/img/router-huawei/notGropIcon.jpg"/>
                  <p class="rt-font-h4 sp-t-0-3">PON</p>
                </div>
                <div class="sp-r-3 md-d-none"></div>
                <div class="lg-router-pop-icon md-sp-t-3">
                  <img class="d-block" width="174" height="118"
                       src="https://static-cdn.rt.ru/sites/default/files/img/router-huawei/gronIcon.jpg"/>
                  <p class="rt-font-h4 sp-t-1">не PON</p>
                </div>
              </div>
              <div class="flex-fill"></div>
            </div>
          </div>
        </div>
        <div class="ld-router-banner">
          <div class="ld-router-banner__line1"></div>
          <div class="ld-router-banner__line2"></div>
          <div class="ld-router-banner__blur"></div>


          <div class="rt-container color-white sp-t-2">
            <rt-col>
              <rt-row class="sp-t-4 sp-b-4-4 td-sp-b-2 md-sp-t-none">
                <rt-col :size="6" :mobile-size="3" class="ld-router-banner-content">
                  <h1 class="rt-font-h1 sp-t-3-4 cj-animate cj-animate-setClass">
                    Выбирайте <br>
                    игровой роутер RT-X
                  </h1>
                  <p class="rt-font-paragraph sp-t-0-4 sp-b-2 cj-animate cj-animate-setClass">Мощный роутер с приоритизацией игрового трафика</p>
                  <div class="d-flex cj-animate cj-animate-setClass">
                    <rt-button :bright="true" href="#" color="full-white">Оставить заявку</rt-button>
                  </div>
                </rt-col>
                <rt-col :size="6" :mobile-size="3" class="relative md-sp-b-1-3">
                  <div class="">
                    <div class="ld-router-banner__router">
                      <div class="ld-router-banner__shadow"></div>
                    </div>

                  </div>
                </rt-col>
                <rt-col :size="12" class="sp-t-3-3 sp-b-5 td-sp-b-none cj-animate cj-animate-setClass">
                  <rt-row>
                    <rt-col :tablet-size="2" :size="2" :mobile-size="3" class="md-d-flex md-flex-v-center">
                      <img src="https://static-cdn.rt.ru/sites/default/files/img/router-huawei/fast-icon.png"
                           class="ld-router-banner_icon" alt="">
                      <div class="md-sp-l-1-3">
                        <p class="rt-font-h4 sp-b-0-4 sp-t-1-1 md-sp-t-none md-sp-b-0-2">Быстрый</p>
                        <p class="rt-font-small-paragraph">Скорость Wi-Fi до 2 Гбит/с</p>
                      </div>
                    </rt-col>
                    <rt-col :tablet-size="2" :size="2" :mobile-size="3" class="md-d-flex md-flex-v-center md-sp-t-1-2">
                      <img src="https://static-cdn.rt.ru/sites/default/files/img/router-huawei/smart-icon.png"
                           class="ld-router-banner_icon" alt="">
                      <div class="md-sp-l-1-3">
                        <p class="rt-font-h4 sp-b-0-4 sp-t-1-1 md-sp-t-none md-sp-b-0-2">Умный</p>
                        <p class="rt-font-small-paragraph">Приоритизация игрового трафика</p>
                      </div>
                    </rt-col>
                    <rt-col :tablet-size="2" :size="2" :mobile-size="3" class="md-d-flex md-flex-v-center md-sp-t-1-2">
                      <img src="https://static-cdn.rt.ru/sites/default/files/img/router-huawei/play-icon.png"
                           class="ld-router-banner_icon" alt="">
                      <div class="md-sp-l-1-3">
                        <p class="rt-font-h4 sp-b-0-4 sp-t-1-1 md-sp-t-none md-sp-b-0-2">Игровой</p>
                        <p class="rt-font-small-paragraph">Низкий пинг в играх</p>
                      </div>
                    </rt-col>
                  </rt-row>

                </rt-col>

              </rt-row>
            </rt-col>
          </div>
        </div>
      </div>
    </div>
    <div class="wc-inline">
      <div class="ld-router">
        <div class="sp-t-1 ld-router-spider td-sp-b-2-2 relative color-white">
          <div class="rt-container">
            <rt-col>
              <rt-row>
                <rt-col class="rt-font-center rt-td-font-left" :size="12">
                  <h2 class="rt-font-h2 sp-t-3-4 td-sp-t-2 sp-b-0-3 cj-animate cj-animate-setClass">Мощный сигнал для игры без лагов</h2>
                </rt-col>
              </rt-row>
              <rt-row>
                <rt-col :size="4" :t-hide="true"></rt-col>
                <rt-col class="relative md-sp-t-3-2" :size="4" :tablet-size="3" :mobile-size="3">
                  <div class="ld-router-spider-image"></div>
                </rt-col>
              </rt-row>
              <rt-row class="sp-t-4">
                <rt-col :tablet-size="3" :hide="true" :t-hide="false" class="td-d-block"></rt-col>
                <rt-col :size="3" :tablet-size="3" :mobile-size="3">
                  <div class="md-sp-l-1">
                    <p class="rt-font-paragraph rt-font-right rt-td-font-left ld-router-spider-line ld-router-spider-line-1 cj-animate cj-animate-setClass">
                      Поддерживает до
                      16 устройств</p>
                    <p class="rt-font-paragraph rt-font-right rt-td-font-left ld-router-spider-line ld-router-spider-line-2 cj-animate cj-animate-setClass">
                      Скорость до 600 Мбит/с (2.4 ГГц.) <br class="td-d-none">
                      до 1733 Мбит/с (5 ГГц.)</p>
                    <p class="rt-font-paragraph rt-font-right rt-td-font-left ld-router-spider-line ld-router-spider-line-3 cj-animate cj-animate-setClass">
                      4 мощные
                      антенны, расположенные <br class="td-d-none">
                      под крышкой корпуса </p>
                  </div>
                </rt-col>
                <rt-col :size="6" :tablet-size="3" :m-hide="true"></rt-col>
                <rt-col :size="3" :tablet-size="3" :mobile-size="3">
                  <div class="md-sp-l-1">
                    <p class="rt-font-paragraph ld-router-spider-line ld-router-spider-line-4 cj-animate cj-animate-setClass">Приоритизация популярных
                      игр,<br
                          class="td-d-none">
                      позволяет при загрузке
                      вашей сети
                      <br class="td-d-none"> отдать приоритет играм
                    </p>
                    <p class="rt-font-paragraph ld-router-spider-line ld-router-spider-line-5 cj-animate cj-animate-setClass">Хорошее покрытые и
                      стабильный
                      <br class="td-d-none"> сигнал благодаря MIMO 4x4 в 2
                      <br class="td-d-none"> диапазонах
                    </p>
                    <p class="rt-font-paragraph ld-router-spider-line ld-router-spider-line-6 cj-animate cj-animate-setClass">Работа 2 диапазонах
                      одновременно <br class="td-d-none">
                      (2.4 ГГц., 5 ГГц)</p>
                  </div>
                </rt-col>
              </rt-row>
            </rt-col>
          </div>
        </div>
      </div>
    </div>
    <div class="wc-inline">
      <div class="ld-router">
        <div class="sp-t-3-2 td-sp-t-0-2 color-white lg-router-cabel">
          <div class="relative">

            <div class="lg-router-cabel-lines"></div>

            <div class="rt-container">
              <rt-col>
                <h2 class="rt-font-h2 rt-font-center rt-td-font-left cj-animate cj-animate-setClass">Работает только на PON соединении</h2>
              </rt-col>
            </div>
            <div class="rt-container sp-b-5 md-sp-b-3">
              <rt-col>
                <rt-row class="sp-t-5 sp-b-5-2 md-sp-b-none">
                  <rt-col :size="7" :tablet-size="3" class="lg-router-cabel-gpon-cabel cj-animate cj-animate-setClass">
                    <div class="lg-router-cabel-image"></div>
                  </rt-col>
                  <rt-col :size="5" class="lg-router-cabel-gpon-column md-sp-t-5 cj-animate cj-animate-setClass" :tablet-size="3" :mobile-size="3">
                    <div class="lg-router-cabel-gpon-column-circle md-d-none"></div>
                    <div class="lg-router-cabel-gpon">
                      <div class="lg-router-cabel-gpon-content">
                        <h3 class="rt-font-h3 sp-b-1 td-sp-b-0-2">PON соединение</h3>
                        <p class="rt-font-small-paragraph lg-router-bullet"> Самое современное подключение к сети
                          интернет</p>
                        <div class="sp-t-0-4 td-sp-t-0-3 td-sp-b-1 sp-b-1-2">
                          <p class="rt-font-small-paragraph lg-router-bullet">Роутер работает
                            только
                            при оптоволоконном
                            подключении на сети Ростелеком</p>
                        </div>
                        <rt-button class="open-popup" :bright="true" color="full-white">Какое у меня соединение?
                        </rt-button>
                      </div>
                    </div>
                  </rt-col>
                </rt-row>
              </rt-col>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="wc-inline">
      <div class="ld-router">
        <div class="lg-router-form color-white">
          <div class="rt-container">
            <rt-col>
              <h2 class="rt-font-h2 sp-b-1-3">Заявка на роутер</h2>
              <rt-row class="sp-b-5 sp-b-1-4 md-sp-b-none">
                <rt-col :size="3" :tablet-size="3" :mobile-size="3" class="md-sp-r-1">
                  <label>
                    <input name="test" class="lg-router-form-input" type="radio"/>
                    <div class="lg-router-form-check sp-t-1-4 sp-b-1-4 sp-l-2 sp-r-2">
                      <div class="lg-router-form-check-decor"></div>
                      <div class="lg-router-form-check-decor2"></div>
                      <p class="lg-router-form-label">РАССРОЧКА</p>
                      <p class="rt-font-small-paragraph">На 24 месяца. Роутер в собственности абонента</p>
                      <div class="sp-t-0-4">
                        <rt-price :v2="true" :is-option="true" option-label="до" :bright="true" :value="380"
                                  time-interval="мес." currency="руб."></rt-price>
                      </div>
                    </div>
                  </label>
                </rt-col>
                <rt-col :size="1" :t-hide="true"></rt-col>
                <rt-col :size="3" :tablet-size="3" :mobile-size="3" class="md-sp-t-2 md-sp-r-1">
                  <label>
                    <input name="test" class="lg-router-form-input" type="radio"/>
                    <div class="lg-router-form-check sp-t-1-4 sp-b-1-4 sp-l-2 sp-r-2">
                      <div class="lg-router-form-check-decor"></div>
                      <div class="lg-router-form-check-decor2"></div>
                      <p class="lg-router-form-label">ПОКУПКА</p>
                      <p class="rt-font-small-paragraph">Единовременная покупка</p>
                      <div class="sp-t-2">
                        <rt-price :v2="true" :only-price="true" :bright="true" :value="8999"
                                  currency="руб."></rt-price>
                      </div>
                    </div>
                  </label>
                </rt-col>
              </rt-row>
              <rt-row>
                <rt-col :size="6"></rt-col>
              </rt-row>
            </rt-col>
          </div>

        </div>
      </div>

    </div>
    <div class="wc-inline">
      <div class="rt-container sp-b-6 td-sp-b-4 md-sp-b-3">
        <rt-col>
          <div class="d-inline">
            <a href="#" class="d-flex flex-v-center rt-link rt-link--orange">
              <rt-system-icons color="orange" name="download"></rt-system-icons>
              <span class="sp-l-1">Скачать список доступных игр</span></a>
          </div>
        </rt-col>
      </div>
    </div>
  </div>


  <!-- Описание -->

  <!-- Тарифы -->
</template>

<!--transform: translate3d(-2124px, 0px, 0px)-->
<script>
const componentsList = {};

export default {
  name: "AppPromoVip",
  components: componentsList,
  mounted() {
    //
    // setTimeout(function () {
    //
    //
    //   document.querySelector('.lg-router-link').addEventListener('click', function () {
    //     if (window.dataLayer) {
    //       window.dataLayer.push({
    //         'event': 'b2с',
    //         'type': 'pdf_open',
    //         'value': 'game_lis'
    //       });
    //     }
    //   })
    //   var input = document.querySelectorAll('.lg-router-form-input');
    //   input[0].addEventListener('change', function () {
    //     document.querySelector('.lg-router-price-1').classList.remove('d-none')
    //     document.querySelector('.lg-router-price-2').classList.add('d-none')
    //     if (window.dataLayer) {
    //       window.dataLayer.push({
    //         'event': 'b2c',
    //         'type': 'router_order',
    //         'value': 'Рассрочка'
    //       });
    //     }
    //   })
    //   input[1].addEventListener('change', function () {
    //     document.querySelector('.lg-router-price-2').classList.remove('d-none')
    //     document.querySelector('.lg-router-price-1').classList.add('d-none')
    //     if (window.dataLayer) {
    //       window.dataLayer.push({
    //         'event': 'b2c',
    //         'type': 'router_order',
    //         'value': 'Покупка'
    //       });
    //     }
    //   })
    //
    //   document.querySelector('.rt-tabs-checklist-input .checkbox-element').addEventListener('change',function(){
    //     if(document.querySelector('.rt-tabs-checklist-input .checkbox-element').checked){
    //       if (window.dataLayer) {
    //         window.dataLayer.push({
    //           'event': 'b2с',
    //           'type': 'checkbox_filling',
    //           'value': 'existing_user'
    //         });
    //       }
    //     }
    //   })
    //
    // }, 3000)
    // var keys = {37: 1, 38: 1, 39: 1, 40: 1};
    //
    // function preventDefault(e) {
    //   e.preventDefault();
    // }
    //
    // var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';
    // var supportsPassive = false;
    // try {
    //   window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
    //     get: function () {
    //       supportsPassive = true;
    //     }
    //   }));
    // } catch (e) {
    // }
    //
    // var wheelOpt = supportsPassive ? {passive: false} : false;
    //
    // function preventDefaultForScrollKeys(e) {
    //   if (keys[e.keyCode]) {
    //     preventDefault(e);
    //     return false;
    //   }
    // }
    //
    //
    //
    // function disableScroll() {
    //   window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
    //   window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
    //   window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
    //   window.addEventListener('keydown', preventDefaultForScrollKeys, false);
    // }
    //
    // function enableScroll() {
    //   window.removeEventListener('DOMMouseScroll', preventDefault, false);
    //   window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
    //   window.removeEventListener('touchmove', preventDefault, wheelOpt);
    //   window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
    // }
    //
    // document.querySelector('body').classList.add('ld-router');
    // document.querySelector('.open-popup').addEventListener('click', function () {
    //   document.querySelector('.lg-router-pop-wrapper').classList.add('lg-router-pop-wrapper--active')
    //   disableScroll()
    //
    // })
    // document.querySelector('.lg-router-pop-close').addEventListener('click', function () {
    //   document.querySelector('.lg-router-pop-wrapper').classList.remove('lg-router-pop-wrapper--active')
    //   enableScroll()
    // })

    var calculate = function(){
      var windowH = window.innerHeight;
      var windowW = window.innerWidth;
      var elements = document.querySelectorAll('.cj-animate')
      elements.forEach(function (el){
        if(windowW > 767) {
          var deltaAngle = (el.getBoundingClientRect().top - windowH / 4) / windowH;


          if (Math.abs(deltaAngle) > 1.5) {
            if (deltaAngle > 0) {
              deltaAngle = 1.5
            } else {
              deltaAngle = -1.5
            }
          }



          deltaAngle = deltaAngle * 100
          var opacity = (80 - deltaAngle) / 80
          if (opacity < 0) {
            opacity = 0
          }
          if (opacity > 1) {
            opacity = 1
          }
          if (el.classList.contains('cj-animate-revert')) {
            deltaAngle = deltaAngle * -1
          }
          el.style.transform = 'matrix(1, 0, 0, 1, 0, ' + deltaAngle + ')'
          if (el.classList.contains('cj-animate-setClass')) {
            if(Math.abs(deltaAngle) < 70){
              if(el.classList.contains('cj-animate-hidden')){
                el.classList.remove('cj-animate-hidden')
              }
              if(el.classList.contains('cj-animate-setClass-top')){
                el.classList.remove('cj-animate-setClass-top')
              }
              if(el.classList.contains('cj-animate-setClass-bottom')){
                el.classList.remove('cj-animate-setClass-bottom')
              }

            }else{
              if(!el.classList.contains('cj-animate-hidden')){
                el.classList.add('cj-animate-hidden')
              }
              if(deltaAngle > 1){
                if(!el.classList.contains('cj-animate-setClass-bottom')){
                  el.classList.add('cj-animate-setClass-bottom')
                }
              }else{
                if(!el.classList.contains('cj-animate-setClass-top')){
                  el.classList.add('cj-animate-setClass-top')
                }
              }
            }
          }else{
            el.style.opacity = opacity
          }
        }
      })
    }
    window.addEventListener('scroll', calculate)
    window.addEventListener('resize', calculate)



    //parseInt(document.querySelector('.test').style.transform.split(',').pop())

  }
};
</script>

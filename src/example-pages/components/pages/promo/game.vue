<template>
  <div>
    <div class="wc-inline">
      <div class="ld-mygame">
        <div class="rt-container">
          <rt-col>
            <rt-img class="lg-mygame-points-line-img lg-logo"
                    src="https://static-cdn.rt.ru/sites/default/files/img/mygame/logo.png"
                    x2-src="https://static-cdn.rt.ru/sites/default/files/img/mygame/logo-2x.png"
            ></rt-img>
          </rt-col>
        </div>
      </div>
    </div>
    <div class="wc-inline">
      <div class="ld-mygame-banner color-white ld-mygame">
        <div class="rt-container sp-t-1-3 td-sp-t-none">
          <rt-col class="td-sp-t-3-2 sp-t-5">
            <rt-row>
              <rt-col size="3" tablet-size="3" mobile-size="3" class="ld-mygame-banner-content">
                <h1 class="rt-font-h1 sp-t-5-3 td-sp-t-0-2">Технологии победы</h1>
                <p class="rt-font-paragraph sp-t-0-4">Высокоскоростной интернет
                  <br>
                  и уникальные игровые бонусы</p>
                <div class="d-flex flex-v-center sp-t-0-4">
                  <rt-price :v2="true" :bright="true" :value="750.2"></rt-price>
                  <div class="sp-h-0-3">
                    <svg width="24" height="37" viewBox="0 0 24 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 35.641L22 1" stroke="white" stroke-width="3"/>
                    </svg>
                  </div>
                  <rt-price :v2="true" :bright="true" :value="750.2"></rt-price>
                </div>
                <div class="sp-t-1 md-sp-b-1-3">
                  <rt-button v-rt-scroll-to-on-click='{"scrollToId": "form"}' color="orange">Подключить</rt-button>
                </div>
              </rt-col>
              <rt-col size="9" tablet-size="3">
                <rt-img class="ld-mygame-banner-img"
                        src='https://static-cdn.rt.ru/sites/default/files/img/mygame/main-bg.png'
                        x2-src='https://static-cdn.rt.ru/sites/default/files/img/mygame/mainbg-2x-big.jpg'
                        alt=''></rt-img>
              </rt-col>
            </rt-row>
          </rt-col>
        </div>
      </div>
    </div>

    <div class="wc-inline">
      <div class="lg-mygame-points  color-white ld-mygame">
        <div class="lg-mygame-points-line cj-animate">
          <rt-img class="lg-mygame-points-line-img"
                  src="https://static-cdn.rt.ru/sites/default/files/img/mygame/arrows-1.png"
          ></rt-img>
        </div>
        <div class="rt-container cj-animate">
          <rt-col>
            <rt-row>
              <rt-col size="12">
                <h2 class="rt-font-h2 sp-b-2 td-sp-t-2-4">Интернет для геймеров от Ростелекома</h2>
              </rt-col>
              <rt-col size="3" mobile-size="3" class="md-d-flex">
                <rt-img class="lg-mygame-points-img"
                        src='https://static-cdn.rt.ru/sites/default/files/img/mygame/fast-icon.jpg'></rt-img>
                <div class="md-sp-l-1-3">
                  <p class="rt-font-h4 sp-b-0-4 sp-t-1-1 md-sp-t-none">Мощный интернет</p>
                  <p class="relative rt-layer-level-2">Играй без тормозов на скоростном интернете</p>
                </div>
              </rt-col>
              <rt-col size="1" :m-hide="true"></rt-col>
              <rt-col size="3" mobile-size="3" class="md-d-flex md-sp-t-1-4">
                <rt-img class="lg-mygame-points-img"
                        src='https://static-cdn.rt.ru/sites/default/files/img/mygame/bonus-icon.jpg'></rt-img>
                <div class="md-sp-l-1-3">
                  <p class="rt-font-h4 sp-b-0-4 sp-t-1-1 md-sp-t-none">Игровые бонусы</p>
                  <p class="relative rt-layer-level-2">Получай бонусы в играх от MY.GAMES. Бонусы регулярно обновляются </p>
                </div>
              </rt-col>
              <rt-col size="1" :m-hide="true"></rt-col>
              <rt-col size="3" mobile-size="3" class="md-d-flex md-sp-t-1-4">
                <rt-img class="lg-mygame-points-img"
                        src='https://static-cdn.rt.ru/sites/default/files/img/mygame/help-icon.jpg'></rt-img>
                <div class="md-sp-l-1-3">
                  <p class="rt-font-h4 sp-b-0-4 sp-t-1-1 md-sp-t-none">Выделенная команда поддержки</p>
                  <p class="relative rt-layer-level-2">Разговаривай со специалистами на одном языке </p>
                </div>
              </rt-col>
              <rt-col size="1"></rt-col>
            </rt-row>
          </rt-col>
        </div>
      </div>
    </div>
    <div class="wc-inline">
      <div class="ld-mygame-users color-white ld-mygame">
        <div class="rt-container sp-t-1 sp-b-4 td-sp-b-none">
          <rt-col class="md-sp-h-none">
            <p class="rt-font-h2 sp-t-5 td-sp-t-1 td-sp-h-1">Узнай обо всех бонусах</p>
            <div class="d-flex d-space-between ld-mygame-users-scroll sp-t-4 td-sp-t-2-4 sp-b-4-4 md-sp-b-3-2 md-sp-t-4-1">
            <div data-game="warface" class="ld-mygame-users-item ld-mygame-users-item--warface">
              <div class="ld-mygame-users-content-border"></div>
              <div class="ld-mygame-users-content flex-fill">
                <rt-img class="ld-mygame-users-logo"
                        src='https://static-cdn.rt.ru/sites/default/files/img/mygame/warface.png'
                        x2-src='https://static-cdn.rt.ru/sites/default/files/img/mygame/warface-2x.png' alt=''></rt-img>
                <div class="ld-mygame-users-img">
                  <rt-img class="ld-mygame-users-img-tag"
                          src='https://static-cdn.rt.ru/sites/default/files/img/mygame/warface-user.png'
                          x2-src='https://static-cdn.rt.ru/sites/default/files/img/mygame/warface-user-2x.png'
                          alt=''></rt-img>
                  <rt-img class="ld-mygame-users-img-tag-hover"
                          src='https://static-cdn.rt.ru/sites/default/files/img/mygame/n-warface-user-hover.png'
                          x2-src='https://static-cdn.rt.ru/sites/default/files/img/mygame/n-warface-user-hover-2x.png'
                          alt=''></rt-img>
                </div>

                <rt-button class="ld-mygame-users-button rt-layer-level-2" :bright='true' color="full-white">Что я получу?</rt-button>
              </div>
            </div>
            <div data-game="lostark" class="ld-mygame-users-item ld-mygame-users-item--lostark">
              <div class="ld-mygame-users-content-border"></div>
              <div class="ld-mygame-users-content flex-fill">
                <rt-img class="ld-mygame-users-logo"
                        src='https://static-cdn.rt.ru/sites/default/files/img/mygame/lostark.png'
                        x2-src='https://static-cdn.rt.ru/sites/default/files/img/mygame/lostark-2x.png' alt=''></rt-img>
                <div class="ld-mygame-users-img">
                  <rt-img class="ld-mygame-users-img-tag"
                          src='https://static-cdn.rt.ru/sites/default/files/img/mygame/lostark-user.png'
                          x2-src='https://static-cdn.rt.ru/sites/default/files/img/mygame/lostark-user-2x.png'
                          alt=''></rt-img>
                  <rt-img class="ld-mygame-users-img-tag-hover"
                          src='https://static-cdn.rt.ru/sites/default/files/img/mygame/LA-card.png'
                          x2-src='https://static-cdn.rt.ru/sites/default/files/img/mygame/LA-card@2x.png'
                          alt=''></rt-img>
                </div>
                <rt-button class="ld-mygame-users-button rt-layer-level-2" :bright='true' color="full-white">Что я получу?</rt-button>
              </div>
            </div>
            <div data-game="archeage" class="ld-mygame-users-item ld-mygame-users-item--archeage">
              <div class="ld-mygame-users-content-border"></div>
              <div class="ld-mygame-users-content flex-fill">
                <rt-img class="ld-mygame-users-logo"
                        src='https://static-cdn.rt.ru/sites/default/files/img/mygame/archeage.png'
                        x2-src='https://static-cdn.rt.ru/sites/default/files/img/mygame/archeage-2x.png'
                        alt=''></rt-img>
                <div class="ld-mygame-users-img">
                  <rt-img class="ld-mygame-users-img-tag"
                          src='https://static-cdn.rt.ru/sites/default/files/img/mygame/archeage-user.png'
                          x2-src='https://static-cdn.rt.ru/sites/default/files/img/mygame/archeage-user-2x.png'
                          alt=''></rt-img>
                  <rt-img class="ld-mygame-users-img-tag-hover"
                          src='https://static-cdn.rt.ru/sites/default/files/img/mygame/AA-card.png'
                          x2-src='https://static-cdn.rt.ru/sites/default/files/img/mygame/AA-card@2x.png'
                          alt=''></rt-img>
                </div>
                <rt-button class="ld-mygame-users-button rt-layer-level-2" :bright='true' color="full-white">Что я получу?</rt-button>
              </div>
            </div>
            <div data-game="crossfire" class="ld-mygame-users-item ld-mygame-users-item--crossfire ">
              <div class="ld-mygame-users-content-border"></div>
              <div class="ld-mygame-users-content flex-fill">
                <rt-img class="ld-mygame-users-logo"
                        src='https://static-cdn.rt.ru/sites/default/files/img/mygame/crossfire.png'
                        x2-src='https://static-cdn.rt.ru/sites/default/files/img/mygame/crossfire-2x.png'
                        alt=''></rt-img>
                <div class="ld-mygame-users-img">
                  <rt-img class="ld-mygame-users-img-tag"
                          src='https://static-cdn.rt.ru/sites/default/files/img/mygame/crossfire-user.png'
                          x2-src='https://static-cdn.rt.ru/sites/default/files/img/mygame/crossfire-user-2x.png'
                          alt=''></rt-img>
                  <rt-img class="ld-mygame-users-img-tag-hover"
                          src='https://static-cdn.rt.ru/sites/default/files/img/mygame/n-crossfire-user-hover.png'
                          x2-src='https://static-cdn.rt.ru/sites/default/files/img/mygame/n-crossfire-user-hover-2x.png'
                          alt=''></rt-img>
                </div>
                <rt-button class="ld-mygame-users-button rt-layer-level-2" :bright='true' color="full-white">Что я получу?</rt-button>
              </div>
            </div>
          </div>
          </rt-col>
        </div>
      </div>
    </div>
    <div class="wc-inline">
      <div class="color-white relative ld-mygame rt-layer-level-2">
        <div class="rt-container">
          <div class="ld-mygame-form-line-wrapper cj-animate">
            <div class="ld-mygame-form-line-inner">
              <div class="ld-mygame-form-line">
                <rt-img src='https://static-cdn.rt.ru/sites/default/files/img/mygame/arrows-2.png' x2-src='https://static-cdn.rt.ru/sites/default/files/img/mygame/arrows-2-2x.png' alt=''></rt-img>

              </div>
            </div>
          </div>
          <rt-col>
            <h2 class="rt-font-h2 sp-b-4-3 td-sp-b-2-4 md-sp-b-1-3 ">Как подключить бонусы</h2>
          </rt-col>
        </div>

        <div class="ld-mygame-line">


          <div class="rt-container">
            <rt-col>

              <div class="d-flex md-d-block sp-b-1">
                <div class="ld-mygame-line-item sp-t-2 md-sp-t-none md-sp-l-1-3">
                  <img class="ld-mygame-line-cube"
                       src="https://static-cdn.rt.ru/sites/default/files/img/mygame/cube.png"
                       alt="">
                  <p class="rt-font-paragraph">Подайте заявку</p>
                  <p class="rt-font-small-paragraph sp-t-0-3">На этой странице</p>
                </div>
                <div class="md-sp-t-2-2">
                  <div class="ld-mygame-line-item sp-t-2 md-sp-t-none md-sp-l-1-3">
                    <img class="ld-mygame-line-cube"
                         src="https://static-cdn.rt.ru/sites/default/files/img/mygame/cube.png" alt="">
                    <p class="rt-font-paragraph">Укажите данные игрового <br>аккаунта</p>
                    <p class="rt-font-small-paragraph sp-t-0-3">В личном кабинете Ростелекома</p>
                  </div>
                </div>
                <div class="md-sp-t-2-2">
                  <div class="ld-mygame-line-item sp-t-2 md-sp-t-none md-sp-l-1-3">
                    <img class="ld-mygame-line-cube"
                         src="https://static-cdn.rt.ru/sites/default/files/img/mygame/cube.png" alt="">
                    <p class="rt-font-paragraph">Активируйте опцию</p>
                    <p class="rt-font-small-paragraph sp-t-0-3">MY.GAMES и получайте бонусы</p>
                  </div>
                </div>
              </div>
            </rt-col>
          </div>
        </div>


      </div>
    </div>
    <div class="wc-inline">
      <div class="ld-mygame rt-dark-theme sp-b-4 md-sp-b-3">
        <div class="rt-container sp-t-2-1 td-sp-t-none md-sp-t-1 color-white td-sp-b-none td-sp-b-1-4">
          <rt-col class="sp-t-4 md-sp-t-2">
            <h2 class="rt-font-h2 sp-b-1-3 td-sp-b-1-1 md-sp-b-1">Заявка на подключение</h2>
          </rt-col>
          <rt-col size="6" mobile-size="3">
            <div class="js-form ">
              <order-form lcs="active" class="rt-md-reverse-left-half" scope="form-3"
                          :offer-id="[{offerIds: [406154643890, 413844976190, 401926242990, 403877433490, 406718142390, 403794182990, 405392333590, 405721511590, 414606512732, 401908075090]}]"
                          :prevent-send="[{ regionIds: mrfCenter, preventSend: true }]">
                <rt-checkbox-tabs>
                  <rt-template slot="label">
                    <span>У меня уже есть Домашний интернет от Ростелекома</span>
                  </rt-template>
                  <rt-template slot="content">
                    <div class="">
                      <form data-vv-scope="form-3" @submit.prevent>
                        <div class="row">
                          <rt-col class="sp-b-2 td-sp-b-1-3">
                            <full-name class="text-field--orange"></full-name>
                          </rt-col>
                        </div>
                        <div class="row sp-b-2 td-sp-b-1-3">
                          <rt-col size="6" mobile-size="3" class="md-sp-b-1-3">
                            <client-phone class="text-field--orange"></client-phone>
                          </rt-col>
                          <rt-col size="6" mobile-size="3">
                            <email class="text-field--orange"></email>
                          </rt-col>
                        </div>
                        <div class="sp-b-1-3 d-flex">
                          <span class="rt-font-h4 rt-font-bold sp-r-1">Ваш город</span>
                          <location></location>
                        </div>
                        <div class="row">
                          <rt-col size="12" class="rt-input-street sp-b-2 td-sp-b-1-3">
                            <street class="text-field--orange"></street>
                          </rt-col>
                          <rt-col size="6" mobile-size="3" class="rt-input-house sp-b-2 td-sp-b-1-3"
                                  style="min-width:80px">
                            <house class="text-field--orange"></house>
                          </rt-col>
                          <rt-col size="6" mobile-size="3" class="rt-input-apartment sp-b-2 td-sp-b-1-3">
                            <apartment class="text-field--orange"></apartment>
                          </rt-col>
                        </div>
                        <div class="sp-b-2 td-sp-b-1-3">
                          <agree></agree>
                        </div>
                        <div class="">
                          <submit-button
                              class="rt-button-full-white rt-button rt-col-persent-2 rt-col-md-persent-10">
                            Подключить
                          </submit-button>
                        </div>

                      </form>
                    </div>
                  </rt-template>
                  <rt-template slot="content">
                    <div class="">
                      <p class="rt-font-small-paragraph">Подключите тариф и активируйте
                        игровую опцию в Личном
                        кабинете</p>
                      <div class="">
                        <a href="http://lk.rt.ru/" target="_blank">
                          <rt-button class="rt-button-full-white">Войти</rt-button>
                        </a>
                      </div>
                    </div>
                  </rt-template>
                </rt-checkbox-tabs>
              </order-form>
            </div>
          </rt-col>
        </div>
      </div>
    </div>
    <div class="wc-inline">
      <div class="ld-mygame rt-dark-theme sp-b-4 md-sp-b-3">
        <div class="rt-container sp-t-2-1 td-sp-t-none md-sp-t-1 color-white td-sp-b-none td-sp-b-1-4">
          <rt-col class="sp-t-4 md-sp-t-2">
            <h2 class="rt-font-h2 sp-b-1-3 td-sp-b-1-1 md-sp-b-1">Заявка на подключение</h2>
          </rt-col>
          <rt-col size="6" mobile-size="3">
            <div class="js-form">
              <onlime-order-form lcs="active" class="rt-md-reverse-left-half" scope="form-3"
                                 :offer-id="[{offerIds: [415327537002]}]">
                <rt-checkbox-tabs>
                  <rt-template slot="label">
                    <span>У меня уже есть Домашний интернет от Ростелекома</span>
                  </rt-template>
                  <rt-template slot="content">
                    <div class="rt-space-top2">
                      <div class="row">
                        <rt-col class="sp-b-2 td-sp-b-1-3">
                          <full-name class="text-field--orange"></full-name>
                        </rt-col>
                      </div>
                      <div class="row sp-b-2 td-sp-b-1-3">
                        <rt-col size="6" mobile-size="3" class="md-sp-b-1-3">
                          <client-phone class="text-field--orange"></client-phone>
                        </rt-col>
                        <rt-col size="6" mobile-size="3">
                          <email class="text-field--orange"></email>
                        </rt-col>
                      </div>
                      <div class="sp-b-1-3 d-flex">
                        <span class="rt-font-h4 rt-font-bold sp-r-1">Ваш город</span>
                        <location></location>
                      </div>
                      <rt-col>
                        <try-another-address></try-another-address>
                      </rt-col>
                      <div class="row">
                        <rt-col size="6" mobile-size="3" class="rt-input-street sp-b-2 td-sp-b-1-3">
                          <street class="text-field--orange"></street>
                        </rt-col>
                        <rt-col size="6" mobile-size="3" class="rt-input-street sp-b-2 td-sp-b-1-3">
                          <entrance class="text-field--purple"></entrance>
                        </rt-col>
                        <rt-col size="6" mobile-size="3" class="rt-input-house sp-b-2 td-sp-b-1-3"
                                style="min-width:80px">
                          <house class="text-field--orange"></house>
                        </rt-col>
                        <rt-col size="6" mobile-size="3" class="rt-input-apartment sp-b-2 td-sp-b-1-3">
                          <apartment class="text-field--orange"></apartment>
                        </rt-col>
                      </div>
                      <div class="sp-b-2 td-sp-b-1-3">
                        <agree></agree>
                      </div>
                      <submit-button class="rt-button rt-button-full-white rt-col-md-3 rt-col-4 rt-col-td-4">
                        Подключить
                      </submit-button>
                    </div>

                  </rt-template>
                  <rt-template slot="content">
                    <div class="">
                      <p class="rt-font-small-paragraph">Подключите тариф и активируйте
                        игровую опцию в Личном
                        кабинете</p>
                      <div class="rt-space-top2">
                        <a href="https://my.onlime.ru/" target="_blank">
                          <rt-button class="rt-button-full-white">Войти</rt-button>
                        </a>
                      </div>
                    </div>
                  </rt-template>
                </rt-checkbox-tabs>
              </onlime-order-form>
            </div>
          </rt-col>
        </div>
      </div>
    </div>

  </div>
</template>
<script>

const componentsList = {};

export default {
  name: "AppPromoVip",
  components: componentsList,
  mounted() {
    document.body.classList.add('ld-mygame');
    document.body.classList.add('ld-mygame-body');
    var bind = function () {
      if (document.querySelector('.ld-mygame-users-item') && !document.querySelector('.wc-inline .ld-mygame-users-item')) {


        var wrapper = document.querySelector('.ld-mygame-users')

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
        })


        var calculate = function () {
          var windowH = window.innerHeight;
          var windowW = window.innerWidth;
          var elements = document.querySelectorAll('.cj-animate')
          elements.forEach(function (el) {
            // if (windowW > 767) {
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

            // }
          })
        }
        window.addEventListener('scroll', calculate)
        window.addEventListener('resize', calculate)
        calculate()
        document.querySelectorAll('.ld-mygame-users-content .rt-button').forEach(function(item,index){
          item.addEventListener('click', function (){
            if(!window.dataLayer) {
              window.dataLayer = []
            }
            window.dataLayer.push({
              'event': 'b2с',
              'type': 'card_click',
              'value': ['warface', 'lostark', 'archeage', 'crossfire'][index]
            })
          })
        })
        document.querySelector('#form .checkbox-element').addEventListener('change', function (e){
          if(e.target.checked && !e.target.classList.contains('settedGa')){
            window.dataLayer.push({
              'event': 'b2с',
              'type': 'checkbox_filling',
              'value': 'existing_user'
            })
            e.target.classList.add('settedGa')
          }
        }) .forEach(function(item,index){
          item.addEventListener('click', function (){
            if(!window.dataLayer) {
              window.dataLayer = []
            }
            window.dataLayer.push({
              'event': 'b2с',
              'type': 'card_click',
              'value': ['warface', 'lostark', 'archeage', 'crossfire'][index]
            })
          })
        })
      } else {
        setTimeout(function () {
          bind()
        }, 300)
      }
    };
    bind();

    ;
var getPrice = function (){
  if(document.querySelector('.third-price-donor').innerText){
    document.querySelector('.first-price').__vue__.value = document.querySelector('.first-price-donor .rt-price__value').innerText
    document.querySelector('.second-price').__vue__.value = document.querySelector('.second-price-donor').innerText
    document.querySelector('.third-price').__vue__.value = document.querySelector('.third-price-donor').innerText
    document.querySelector('.first-price-container').classList.add('first-price-container--ready')
  }else{
    setTimeout(getPrice,300)
  }
}
    getPrice()


  }
};


</script>

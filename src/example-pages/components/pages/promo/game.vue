<template>
  <div>
    <div class="ld-mygame-banner color-white">
      <div class="rt-container">
        <rt-col class="td-sp-t-3-2">
          <rt-row>
            <rt-col size="3" tablet-size="3" mobile-size="3" class="ld-mygame-banner-content">
              <h1 class="rt-font-h1 sp-t-5-3 td-sp-t-1">Технологии победы</h1>
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
                <rt-button color="orange">Подключить</rt-button>
              </div>
            </rt-col>
            <rt-col size="9"  tablet-size="3">
              <rt-img class="ld-mygame-banner-img"
                      src='https://static-cdn.rt.ru/sites/default/files/img/mygame/main-bg.png'
                      x2-src='https://static-cdn.rt.ru/sites/default/files/img/mygame/mainbg-2x-big.jpg' alt=''></rt-img>
            </rt-col>
          </rt-row>
        </rt-col>
      </div>
    </div>
    <div class="lg-mygame-points color-white">
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
              <p>Играй без тормозов на скоростном интернете</p>
              </div>
            </rt-col>
            <rt-col size="1" :m-hide="true"></rt-col>
            <rt-col size="3" mobile-size="3" class="md-d-flex md-sp-t-1-4">
              <rt-img class="lg-mygame-points-img"
                      src='https://static-cdn.rt.ru/sites/default/files/img/mygame/bonus-icon.jpg'></rt-img>
              <div class="md-sp-l-1-3">
              <p class="rt-font-h4 sp-b-0-4 sp-t-1-1 md-sp-t-none">Игровые бонусы</p>
              <p>Получай бонусы в играх от MY.GAMES. Бонусы регулярно обновляются </p>
              </div>
            </rt-col>
            <rt-col size="1" :m-hide="true"></rt-col>
            <rt-col size="3" mobile-size="3" class="md-d-flex md-sp-t-1-4">
              <rt-img class="lg-mygame-points-img"
                      src='https://static-cdn.rt.ru/sites/default/files/img/mygame/help-icon.jpg'></rt-img>
              <div class="md-sp-l-1-3">
              <p class="rt-font-h4 sp-b-0-4 sp-t-1-1 md-sp-t-none">Выделенная команда поддержки</p>
              <p>Разговаривай со специалистами на одном языке </p>
              </div>
            </rt-col>
            <rt-col size="1"></rt-col>
          </rt-row>
        </rt-col>
      </div>
    </div>
    <div class="ld-mygame-users color-white">
      <div class="rt-container sp-t-1 sp-b-4 td-sp-b-none">
        <p class="rt-font-h2 sp-t-5 td-sp-t-1 td-sp-h-1">Узнай обо всех бонусах</p>
        <div class="d-flex d-space-between ld-mygame-users-scroll sp-t-4 td-sp-t-2-4 sp-b-4-4 md-sp-b-3-2">
          <div data-game="warface" class="ld-mygame-users-item cj-animate ld-mygame-users-item--warface">
            <div class="ld-mygame-users-content flex-fill">
              <rt-img class="ld-mygame-users-logo"
                      src='https://static-cdn.rt.ru/sites/default/files/img/mygame/warface.png'
                      x2-src='https://static-cdn.rt.ru/sites/default/files/img/mygame/warface-2x.png' alt=''></rt-img>
              <div class="ld-mygame-users-img">
                <rt-img class="ld-mygame-users-img-tag" src='https://static-cdn.rt.ru/sites/default/files/img/mygame/warface-user.png'
                        x2-src='https://static-cdn.rt.ru/sites/default/files/img/mygame/warface-user-2x.png'
                        alt=''></rt-img>
                <rt-img class="ld-mygame-users-img-tag-hover" src='https://static-cdn.rt.ru/sites/default/files/img/mygame/n-warface-user-hover.png'
                        x2-src='https://static-cdn.rt.ru/sites/default/files/img/mygame/n-warface-user-hover-2x.png'
                        alt=''></rt-img>
              </div>

              <rt-button class="ld-mygame-users-button" color="full-white">Что я получу?</rt-button>
            </div>
          </div>
          <div data-game="lostark" class="ld-mygame-users-item cj-animate ld-mygame-users-item--lostark">
            <div class="ld-mygame-users-content flex-fill">
              <rt-img class="ld-mygame-users-logo"
                      src='https://static-cdn.rt.ru/sites/default/files/img/mygame/lostark.png'
                      x2-src='https://static-cdn.rt.ru/sites/default/files/img/mygame/lostark-2x.png' alt=''></rt-img>
              <div class="ld-mygame-users-img">
                <rt-img src='https://static-cdn.rt.ru/sites/default/files/img/mygame/lostark-user.png'
                        x2-src='https://static-cdn.rt.ru/sites/default/files/img/mygame/lostark-user-2x.png'
                        alt=''></rt-img>
              </div>
              <rt-button class="ld-mygame-users-button" color="full-white">Что я получу?</rt-button>
            </div>
          </div>
          <div data-game="archeage" class="ld-mygame-users-item cj-animate ld-mygame-users-item--archeage">
            <div class="ld-mygame-users-content flex-fill">
              <rt-img class="ld-mygame-users-logo"
                      src='https://static-cdn.rt.ru/sites/default/files/img/mygame/archeage.png'
                      x2-src='https://static-cdn.rt.ru/sites/default/files/img/mygame/archeage-2x.png' alt=''></rt-img>
              <div class="ld-mygame-users-img">
                <rt-img src='https://static-cdn.rt.ru/sites/default/files/img/mygame/archeage-user.png'
                        x2-src='https://static-cdn.rt.ru/sites/default/files/img/mygame/archeage-user-2x.png'
                        alt=''></rt-img>
              </div>
              <rt-button class="ld-mygame-users-button" color="full-white">Что я получу?</rt-button>
            </div>
          </div>
          <div data-game="crossfire" class="ld-mygame-users-item cj-animate ld-mygame-users-item--crossfire ">
            <div class="ld-mygame-users-content flex-fill">
              <rt-img class="ld-mygame-users-logo"
                      src='https://static-cdn.rt.ru/sites/default/files/img/mygame/crossfire.png'
                      x2-src='https://static-cdn.rt.ru/sites/default/files/img/mygame/crossfire-2x.png' alt=''></rt-img>
              <div class="ld-mygame-users-img">
                <rt-img class="ld-mygame-users-img-tag" src='https://static-cdn.rt.ru/sites/default/files/img/mygame/crossfire-user.png'
                        x2-src='https://static-cdn.rt.ru/sites/default/files/img/mygame/crossfire-user-2x.png'
                        alt=''></rt-img>
                <rt-img class="ld-mygame-users-img-tag-hover" src='https://static-cdn.rt.ru/sites/default/files/img/mygame/n-crossfire-user-hover.png'
                        x2-src='https://static-cdn.rt.ru/sites/default/files/img/mygame/n-crossfire-user-hover-2x.png'
                        alt=''></rt-img>
              </div>
              <rt-button class="ld-mygame-users-button" color="full-white">Что я получу?</rt-button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="color-white relative">
      <div class="rt-container">
        <div class="ld-mygame-form-line-wrapper cj-animate">
          <div class="ld-mygame-form-line-inner">
        <div class="ld-mygame-form-line">
            <rt-img
                    src='https://static-cdn.rt.ru/sites/default/files/img/mygame/arrows-2.png'
                    x2-src='https://static-cdn.rt.ru/sites/default/files/img/mygame/arrows-2-2x.png' alt=''></rt-img>

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
                <img class="ld-mygame-line-cube" src="https://static-cdn.rt.ru/sites/default/files/img/mygame/cube.png"
                     alt="">
                <p class="rt-font-paragraph">Подайте заявку</p>
                <p class="rt-font-small-paragraph sp-t-0-3">На этой странице</p>
              </div>
              <div class="md-sp-t-2-2">
                <div class="ld-mygame-line-item sp-t-2 md-sp-t-none md-sp-l-1-3">
                  <img class="ld-mygame-line-cube"
                       src="https://static-cdn.rt.ru/sites/default/files/img/mygame/cube.png" alt="">
                  <p class="rt-font-paragraph">Выберите опцию</p>
                  <p class="rt-font-small-paragraph sp-t-0-3">MY.GAMES в личном кабинете Ростелекома</p>
                </div>
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
    <div class="wc-inline">
      <div class="rt-container sp-t-2-1 td-sp-t-none md-sp-t-1 color-white">
        <rt-col class="sp-t-4 md-sp-t-2">
          <h2 class="rt-font-h2">Заявка на подключение</h2>
        </rt-col>
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


  }
};
</script>

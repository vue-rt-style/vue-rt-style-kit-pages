<template>
  <div>
    <div class="wc-inline">
      <div class="scroll-slider" v-rt-resize-content-height="{querySelectorsNames: '.scroll-slider-item h2'}">
        <div class="rt-container">
          <rt-col>
            <rt-row v-rt-resize-content-height="{querySelectorsNames: '.scroll-slider-content'}">
              <rt-col size="5" tablet-size="6">

                <div class="scroll-slider-item d-flex flex-v-center td-sp-t-3">
                  <div class="rt-col">
                    <div class="row td-flex-column-reverse">
                      <h2 class="td-sp-t-2 scroll-slider-title"><span class="color-orange">Вы сможете</span>
                        фиксировать
                        благодарности клиентов
                      </h2>

                      <div class="scroll-slider-content">
                        <div class="d-flex font-t-l sp-t-1-3 td-sp-t-1-2">
                          <rt-system-icons name="check small" color="orange"></rt-system-icons>
                          <p class="sp-l-0-2">Настройте ключевые слова и фразы, которые будут сигнализировать о том,
                            что
                            клиент доволен тем, как был решен его вопрос во время звонка в вашу компанию</p></div>
                        <div class="d-flex font-t-l sp-t-0-4">
                          <rt-system-icons name="check small" color="orange"></rt-system-icons>
                          <p class="sp-l-0-2">Поощряйте сотрудников, которые получают благодарности и высокую оценку
                            от
                            клиентов</p></div>
                        <div class="d-flex font-t-l sp-b-2 sp-t-0-4 td-sp-b-3">
                          <rt-system-icons name="check small" color="orange"></rt-system-icons>
                          <p class="sp-l-0-2">Фиксируйте количество хороших отзывов и оценивайте качество
                            обслуживания,
                            совершенствуя скрипты продаж</p></div>
                      </div>
                      <rt-button class="td-d-none" color="orange">Заказать консультацию</rt-button>

                      <rt-col tablet-size="6" :hide="true" class="td-d-block scroll-slider-orig-image">
                        <rt-img src="https://www.rt.ru/sites/default/files/img/speech_analytics/Frame%201.jpg"
                                x2-src="https://www.rt.ru/sites/default/files/img/speech_analytics/Frame%201%402x.jpg"></rt-img>
                      </rt-col>

                    </div>
                  </div>
                </div>
                <div class="scroll-slider-item d-flex flex-v-center td-sp-t-3">
                  <div class="rt-col">
                    <div class="row td-flex-column-reverse">
                      <h2 class="td-sp-t-2 scroll-slider-title"><span class="color-orange">Вы сможете</span>
                        работать с
                        жалобами клиентов</h2>
                      <div class="scroll-slider-content">
                        <div class="d-flex font-t-l sp-t-1-3 td-sp-t-1-2">
                          <rt-system-icons name="check small" color="orange"></rt-system-icons>
                          <p class="sp-l-0-2">Настраивайте критерии, с помощью которых можно будет отслеживать долю
                            и
                            количество разговоров, в которых клиенты обращались по телефону с жалобой</p></div>
                        <div class="d-flex font-t-l sp-t-0-4">
                          <rt-system-icons name="check small" color="orange"></rt-system-icons>
                          <p class="sp-l-0-2">Отслеживайте, как ваши сотрудники реагируют на жалобу клиента и
                            помогают
                            амортизировать конфликтную ситуацию
                          </p></div>
                        <div class="d-flex font-t-l sp-b-2 sp-t-0-4 td-sp-b-none">
                          <rt-system-icons name="check small" color="orange"></rt-system-icons>
                          <p class="sp-l-0-2">Фиксируйте количество жалоб и совершенствуйте скрипты продаж,
                            бизнес-процессы
                            и взаимодействие ваших операторов с клиентами по телефону
                          </p></div>
                      </div>
                      <rt-button class="td-d-none" color="orange">Заказать консультацию</rt-button>

                      <rt-col tablet-size="6" :hide="true" class="td-d-block scroll-slider-orig-image">
                        <rt-img src="https://www.rt.ru/sites/default/files/img/speech_analytics/Frame%202.jpg"
                                x2-src="https://www.rt.ru/sites/default/files/img/speech_analytics/Frame%202%402x.jpg"></rt-img>
                      </rt-col>

                    </div>
                  </div>
                </div>
                <div class="scroll-slider-item d-flex flex-v-center td-sp-t-3">
                  <div class="rt-col">
                    <div class="row td-flex-column-reverse">
                      <h2 class="td-sp-t-2 scroll-slider-title"><span class="color-orange">Вы сможете</span>
                        настроить
                        подходящие словари</h2>
                      <div class="scroll-slider-content">
                        <div class="d-flex font-t-l sp-t-1-3 td-sp-t-1-2">
                          <rt-system-icons name="check small" color="orange"></rt-system-icons>
                          <p class="sp-l-0-2">Воспользуйтесь предустановленными или создайте свои словари и
                            отслеживайте
                            долю и количество разговоров, например, с вежливыми фразами оператора</p></div>
                        <div class="d-flex font-t-l sp-t-0-4">
                          <rt-system-icons name="check small" color="orange"></rt-system-icons>
                          <p class="sp-l-0-2">Настраивайте ключевые фразы, по которым будете проверять качество
                            обслуживания
                            клиентов</p></div>
                        <div class="d-flex font-t-l sp-b-2 sp-t-0-4 td-sp-b-none">
                          <rt-system-icons name="check small" color="orange"></rt-system-icons>
                          <p class="sp-l-0-2">Укажите слова-теги и отслеживайте как часто их произносят операторы
                            или
                            клиенты, отслеживайте статистику по каждому тегу</p></div>
                      </div>
                      <rt-button class="td-d-none" color="orange">Заказать консультацию</rt-button>

                      <rt-col tablet-size="6" :hide="true" class="td-d-block scroll-slider-orig-image">
                        <rt-img src="https://www.rt.ru/sites/default/files/img/speech_analytics/Frame%203.jpg"
                                x2-src="https://www.rt.ru/sites/default/files/img/speech_analytics/Frame%203%402x.jpg"></rt-img>
                      </rt-col>

                    </div>
                  </div>
                </div>
                <div class="scroll-slider-item d-flex flex-v-center td-sp-t-3">
                  <div class="rt-col">
                    <div class="row td-flex-column-reverse">
                      <h2 class="td-sp-t-2 scroll-slider-title"><span class="color-orange">Вы сможете</span>
                        выгружать
                        данные из личного кабинета
                      </h2>
                      <div class="scroll-slider-content">
                        <div class="d-flex font-t-l sp-t-1-3 td-sp-t-1-2">
                          <rt-system-icons name="check small" color="orange"></rt-system-icons>
                          <p class="sp-l-0-2">Скачивайте транскрибированные разговоры прямо из личного кабинета и
                            смотрите
                            отдельные части или весь разговор в формате пьесы или мессенджера</p></div>
                        <div class="d-flex font-t-l sp-t-0-4">
                          <rt-system-icons name="check small" color="orange"></rt-system-icons>
                          <p class="sp-l-0-2">Загружайте файлы со скриптами для операторов и смотрите статистику по
                            всем
                            разговорам с клиентами</p></div>
                        <div class="d-flex font-t-l sp-b-2 sp-t-0-4 td-sp-b-none">
                          <rt-system-icons name="check small" color="orange"></rt-system-icons>
                          <p class="sp-l-0-2">Для улучшения обслуживания используйте формируемые системой топ слова,
                            которые
                            наиболее часто произносят операторы и клиенты</p></div>
                      </div>
                      <rt-button class="td-d-none" color="orange">Заказать консультацию</rt-button>

                      <rt-col tablet-size="6" :hide="true" class="td-d-block scroll-slider-orig-image">
                        <rt-img src="https://www.rt.ru/sites/default/files/img/speech_analytics/Frame%204.jpg"
                                x2-src="https://www.rt.ru/sites/default/files/img/speech_analytics/Frame%204%402x.jpg"></rt-img>
                      </rt-col>

                    </div>
                  </div>
                </div>
              </rt-col>
              <rt-col size="1" :t-hide="true"></rt-col>
              <rt-col size="6" :t-hide="true">
                <div class="scroll-slider-image d-flex flex-v-center">

                </div>
              </rt-col>

              <div class="scroll-slider-pseudo-line">
                <rt-col>
                  <rt-button color="orange" class="rt-button--is-block">Заказать консультацию</rt-button>
                </rt-col>
              </div>
            </rt-row>
          </rt-col>

        </div>
      </div>
    </div>
      <div class="wc-inline">
        <rt-col>
          <div class="rt-container sp-v-3 td-sp-v-2 md-sp-v-2-2">
            <div class="d-flex">
              <svg width="28" height="24" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M0 22.3723V0H28V22.3723C28 23.118 27.2132 23.6014 26.548 23.2643L14.904 17.3645C14.3357 17.0765 13.6643 17.0765 13.0961 17.3645L1.45198 23.2643C0.786777 23.6014 0 23.118 0 22.3723Z"
                    fill="#FF4F12"/>
              </svg>
              <h2 class="sp-l-1">Акция! Подключайте услугу до 13 августа</h2>
            </div>
            <div class="d-flex sp-t-1-3 sp-b-2">
              <rt-system-icons name="check small" color="orange"></rt-system-icons>
              <p class="sp-l-0-2">Пользуйтесь услугой бесплатно в течении 30 дней. После окончания акции стоимость
                услуги
                — 1 ₽ <br>за каждую минуту анализируемой речи</p>
            </div>
            <rt-row class="tree-block-wrapper">
              <rt-col size="9" tablet-size="6"
                      class="tree-block color-block--main-color003 round-border sp-t-2 sp-b-2 sp-l-2 sp-r-2 d-flex d-space-between md-d-block">
                <div class="tree-block-item md-sp-b-1-3">
                  <div class="d-flex sp-b-0-4">
                    <rt-system-icons name="calendar" color="orange"></rt-system-icons>
                    <p class="sp-l-0-3 font-t-s">Промопериод <br>по акции</p>
                  </div>
                  <p class="rt-font-h3">30 дней</p>
                </div>
                <div class="tree-block-item sp-l-2 td-sp-l-2-1 md-sp-l-none md-sp-t-1-3 md-sp-b-1-3">
                  <div class="d-flex sp-b-0-4">
                    <rt-system-icons name="statistics column" color="orange"></rt-system-icons>
                    <p class="sp-l-0-3 font-t-s">Стоимость <br>аналитики речи</p>
                  </div>
                  <p class=""><span class="old-val sp-r-0-2">1</span><span class="rt-font-h3">0 руб./мес.</span></p>
                </div>
                <div class="tree-block-item sp-l-2 td-sp-l-2-1 md-sp-l-none md-sp-t-1-3 md-sp-b-1-3">
                  <div class="d-flex sp-b-0-4">
                    <rt-system-icons name="voice" color="orange"></rt-system-icons>
                    <p class="sp-l-0-3 font-t-s">Абонентская плата <br>за запись разговоров</p>
                  </div>
                  <p class=""><span class="old-val sp-r-0-2">100</span><span class="rt-font-h3">0 руб./мес.</span></p>
                </div>

              </rt-col>
              <div class="tree-block-neighbor">
                <p class="font-h-l"><span class="color-orange">Внимание!</span> Для использования услуги речевой
                  аналитики вам необходимо подключить услугу Виртуальная АТС от Ростелеком</p>
                <p class="font-t-m sp-t-0-4 sp-b-1-2">Услуга подключается через Личный кабинет Виртуальной АТС</p>
                <rt-button color="gray" class="rt-button-md--is-block">Перейти на страницу услуги</rt-button>
              </div>
            </rt-row>

          </div>
        </rt-col>
      </div>

    <div class="color-block--dark-slate" style="height: 400px">
    </div>
  </div>
</template>
<!--ld-key-gray-->
<script>
// https://www.rt.ru/sites/default/files/img/videocontrol.04.2021/prize1.jpg
//     https://www.rt.ru/sites/default/files/img/videocontrol.04.2021/prize2.jpg
//         https://www.rt.ru/sites/default/files/img/videocontrol.04.2021/prize3.png

const componentsList = {};

export default {
  name: "AppPromoVip",
  components: componentsList,
  mounted() {

    window.addEventListener('scroll', function () {
      var items = document.querySelectorAll('.scroll-slider-item')
      var size = items.length
      if (size > 0) {


        var y = items[0].getClientRects()[0].top
        var h = items[0].getClientRects()[0].height
        var activeIndex = Math.abs(parseInt(y / h))

        var delta = (y / h) % 1
        if (delta < -0.5) {
          activeIndex += 1
        }
        if(h-y >=document.querySelector('.scroll-slider').clientHeight){
          document.querySelector('.scroll-slider-pseudo-line').classList.add('scroll-slider-pseudo-line-stop')
        }else{
          document.querySelector('.scroll-slider-pseudo-line').classList.remove('scroll-slider-pseudo-line-stop')
        }
        if (activeIndex < size) {
          // console.info('Math.abs(delta)',activeIndex,Math.abs(delta),activeIndex,(Math.abs(delta) >= 0.55 || Math.abs(delta) <= 0.45),Math.abs(delta));
          document.querySelectorAll('.scroll-slider-item-active').forEach(function (i) {
            i.classList.remove('scroll-slider-item-active')
          })
        }
        if (y < h / 2) {
          if (Math.abs(delta) >= 0.5 || Math.abs(delta) <= 0.4 || activeIndex == 0 && Math.abs(delta) < 0.6) {
            items[activeIndex].classList.add('scroll-slider-item-active')
            document.querySelector('.scroll-slider-image').style.backgroundImage = 'url(' + items[activeIndex].querySelector('.rt-img').src + ')'
          } else {
            items[activeIndex].classList.remove('scroll-slider-item-active')
          }

          if (!items[activeIndex]) {
            document.querySelector('.scroll-slider-image').style.backgroundImage = 'url(' + items[0].querySelector('.rt-img').src + ')'
            items[activeIndex].classList.remove('scroll-slider-item-active')
            if (document.querySelector('.scroll-slider-item-active')) {
              document.querySelector('.scroll-slider-item-active').classList.remove('scroll-slider-item-active')
            }
          }
        }

      }
    })
  }
};
</script>

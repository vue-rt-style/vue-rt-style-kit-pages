<template>
  <div class="color-block--main-color005">
    <div class="wc-inline">

    <rt-video-banner preload-image="/sites/default/files/img/quality/mainBg.jpg"
                     full-src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
                     src="">
      <template slot="content">
        <div class="md-color-block--dark-slate md-sp-t-1-2 md-sp-b-2 flex-fill">
          <div class="rt-container">
            <rt-col>
              <rt-row>
                <rt-col :size="5" :tablet-size="3" :mobile-size="3" class="color-white">
                  <p class="sp-b-0-4 md-sp-b-0-3 rt-font-label rt-font-label-uppercase color-white05">ИНТЕРНЕТ</p>
                  <p class="font-h1 sp-b-0-4 md-sp-b-0-3">Нагружайте интернет по-полной</p>
                  <p class="font-t-l sp-b-1-2 md-sp-b-1-1">Стабильный интернет со скоростью <span class="nowrap">до 1 Гбит/с</span></p>
                  <rt-button color="orange" class="rt-button-md--is-block"><span class="font-t-m">Проверить возможность подключения</span></rt-button>
                </rt-col>
              </rt-row>
            </rt-col>
          </div>
        </div>
      </template>
    </rt-video-banner>
      !!@@@
      <show-on>
        <template slot="ios">ios</template>
        <template slot="android">android</template>
        <template slot="huawei">huawei</template>
        <template slot="pc">pc</template>
      </show-on>
      @@@!!
    </div>
    <div class="wc-inline">
      <div class="color-block--white">
        <div class="rt-container">
          <rt-col>
            <rt-row class="border-b">
              <rt-col :size="8" :tablet-size="6" class="sp-b-4 td-sp-b-3-1 md-sp-b-2 "><h2
                  class="font-h2 sp-b-2 sp-t-4 td-sp-t-3-1 td-sp-b-2 md-sp-t-2 md-sp-b-1-3">Представляем технологию, которая гарантирует <span
                  class="color-orange">самое
            высокое качество передачи сигнала</span> и увеличивает пропускную способность домашней сети интернет до
                <span class="color-orange">&nbsp;1&nbsp;Гбит/с</span>. С
                персональным гигабитным оптическим каналом от Ростелекома в вашей квартире или доме всегда будет
                стабильный
                высокоскоростной с возможностью подключения любых ваших устройств без потери качества сигнала</h2>
                <rt-button class="rt-button-md--is-block" color="gray">Подробнее о скорости</rt-button>
              </rt-col>
            </rt-row>
            <rt-resize-content-height :mobile-not-resize="true" :tablet-not-resize="true" class="row" :query-selectors-names="['.shadow-card']">
              <rt-col :size="12">
                <h2 class="font-h2 sp-t-4 sp-b-2 td-sp-b-none md-sp-t-2 md-sp-b-1-3 td-sp-t-3-1">Наслаждайтесь <span
                    class="color-orange">качественной связью</span></h2>
              </rt-col>
              <rt-col :size="4" :tablet-size="6" class="sp-t-2 md-sp-t-none">
                <div class="round-border shadow-card">
                  <div class="flex-center-center flex-column sp-h-0-3 td-flex-row md-flex-column md-d-flex sp-v-2 md-sp-v-1-3 td-sp-b-1">
                    <img src="/sites/default/files/img/quality/1.svg" alt="">
                    <div class="td-sp-l-1-2 md-sp-l-none">
                      <h3 class="font-h3 sp-t-1 sp-b-1 td-sp-b-0-3 rt-font-center-md rt-font-center">Лучшие технологии</h3>
                      <p class="font-t-m rt-font-center rt-td-font-left rt-font-center-md">Ростелеком использует самые передовые технологии передачи
                        данных,
                        обеспечивая высочайшее качество сигнала своим клиентам</p>
                    </div>
                  </div>
                </div>
              </rt-col>
              <rt-col :size="4" :tablet-size="6" class="sp-t-2 td-sp-t-1">
                <div class="round-border shadow-card">
                  <div class="flex-center-center flex-column sp-h-0-3 td-flex-row md-flex-column md-d-flex sp-v-2">
                    <img src="/sites/default/files/img/quality/2.svg" alt="">
                    <div class="td-sp-l-1-2 md-sp-l-none">
                      <h3 class="font-h3 sp-t-1 sp-b-1 td-sp-b-0-3 rt-font-center-md rt-font-center">Максимальная скорость</h3>
                      <p class="font-t-m rt-font-center rt-td-font-left rt-font-center-md">Оптоволоконный интернет от Ростелеком имеет одно важное
                        преимущество
                        — огромную пропускную способность сети. Она может намного превышать 1 Гбит/с.</p>
                    </div>
                  </div>
                </div>
              </rt-col>
              <rt-col :size="4" :tablet-size="6" class="sp-t-2 td-sp-t-1">
                <div class="round-border shadow-card">
                  <div class="flex-center-center flex-column sp-h-0-3 td-flex-row md-flex-column md-d-flex sp-v-2">
                    <img src="/sites/default/files/img/quality/3.svg" alt="">
                    <div class="td-sp-l-1-2 md-sp-l-none">
                      <h3 class="font-h3 sp-t-1 sp-b-1 td-sp-b-0-3 rt-font-center-md rt-font-center">Стабильное соединение</h3>
                      <p class="font-t-m rt-font-center rt-td-font-left rt-font-center-md">Оптоволоконные сети проложены под землей, защищенные от
                        погодных
                        условий и вандализма. Не подвержены электромагнитным или радиочастотным&nbsp;помехам</p>
                    </div>
                  </div>
                </div>
              </rt-col>






            </rt-resize-content-height>
          </rt-col>
        </div>
      </div>
    </div>
    <div class="wc-inline">
      <div class="color-block--white">
        <div class="rt-container sp-v-5 td-sp-t-3 md-sp-t-3-1">
          <rt-col>
            <rt-row>
              <rt-col :size="7" :tablet-size="6">
                <h2 class="font-h2">Интернет на скорости, которая подходит под <span class="color-orange">современный ритм жизни</span>
                </h2>
                <p class="sp-v-1-3 md-sp-v-1-2">Став клиентом Ростелекома вы получите быстрый и надежный домашний интернет для всей
                  вашей семьи, который сможет единовременно справится с любой нагрузкой и с любым количеством
                  подключенных к нему устройств</p>
                <p class="d-flex">
                  <rt-system-icons name="check small" color="orange"></rt-system-icons>
                  <span class="sp-l-0-2">Смотрите фильмы онлайн без подгрузок и в нужном вам разрешении 4K или HD
</span></p>
                <p class="d-flex sp-t-0-4">
                  <rt-system-icons name="check small" color="orange"></rt-system-icons>
                  <span class="sp-l-0-2">Играйте с минимальным пингом и без дисконектов</span></p>
                <p class="d-flex sp-t-0-4">
                  <rt-system-icons name="check small" color="orange"></rt-system-icons>
                  <span class="sp-l-0-2">Загружайте и выкладывайте контент в мессенджерах, инстаграм, тик-ток, торрентах и соц.сетях в любое время суток
</span></p>
              </rt-col>
              <rt-col :size="1" :t-hide="true"></rt-col>
              <rt-col :size="4" :tablet-size="6">
                <div class="d-flex sp-t-1-3 td-sp-t-1-4 md-sp-t-1-3 height-fill">
                  <div class="animated-block sp-t-0-4 flex-fill d-flex flex-column">
                    <div class="animated-block-label rt-font-label-uppercase color-main05 rt-font-center sp-b-1">
                      Интернет <br>от
                      Ростелекома
                    </div>
                    <div class="animated-block-line relative sp-t-1-4 flex-fill">
                      <div class="animated-block-circle animated-block-circle-fast">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="20" cy="20" r="14" fill="#FF4F12"/>
                          <circle opacity="0.2" cx="20" cy="20" r="20" fill="#FF4F12"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div class="animated-block sp-t-0-4 flex-fill d-flex flex-column">
                    <div class="animated-block-label rt-font-label-uppercase color-main05 rt-font-center sp-b-1">
                      Обычный <br>
                      Интернет
                    </div>
                    <div class="animated-block-line relative sp-t-1-4 flex-fill">
                      <div class="animated-block-circle animated-block-circle-slow">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle opacity="0.2" cx="20" cy="20" r="20" fill="#7B939B"/>
                          <circle cx="20" cy="20" r="14" fill="#7B939B"/>
                        </svg>
                      </div>

                    </div>
                  </div>
                </div>
              </rt-col>
            </rt-row>
          </rt-col>
        </div>
      </div>
    </div>
    <div class="wc-inline">
      <div class="color-block--white">
        <div class="rt-container sp-v-5  td-sp-v-4 md-sp-v-3-1">
          <rt-col>
          <h2 class="font-h2 sp-b-2-2 md-sp-b-1-3 td-sp-b-2">Подключить интренет — просто</h2>
          <div class="d-flex md-d-block">
            <div class="number-block">
              <div class="relative">
                <div class="number-block-int">01</div>
                <div class="font-t-m number-block-text sp-t-2-1">Выделяем персонального менеджера для быстрой и
                  качественной коммуникации
                </div>
              </div>
            </div>
            <div class="number-block sp-l-2 md-sp-l-none md-sp-t-1-3">
              <div class="relative">
                <div class="number-block-int">02</div>
                <div class="font-t-m number-block-text sp-t-2-1">Модернизируем&nbsp;существующую или создаем необходимую
                  инфраструктуру
                </div>
              </div>
            </div>
            <div class="number-block sp-l-2 md-sp-l-none md-sp-t-1-3">
              <div class="relative">
                <div class="number-block-int">03</div>
                <div class="font-t-m number-block-text sp-t-2-1">Согласовываем и контролируем метрики, при необходимости
                  начинаем с пилотного проекта
                </div>
              </div>
            </div>
          </div>
          </rt-col>
        </div>
      </div>
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
  }
};
</script>

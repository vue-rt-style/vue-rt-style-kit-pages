<template>
  <div class="">
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
                    <p class="font-t-l sp-b-1-2 md-sp-b-1-1">Стабильный интернет со скоростью <span class="nowrap">до 1 Гбит/с</span>
                    </p>
                    <rt-button color="orange" class="rt-button-md--is-block"><span class="font-t-m">Проверить возможность подключения</span>
                    </rt-button>
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
                  class="font-h2 sp-b-2 sp-t-4 td-sp-t-3-1 td-sp-b-2 md-sp-t-2 md-sp-b-1-3">Представляем технологию,
                которая гарантирует <span
                    class="color-orange">самое
            высокое качество передачи сигнала</span> и увеличивает пропускную способность домашней сети интернет до
                <span class="color-orange">&nbsp;1&nbsp;Гбит/с</span>. С
                персональным гигабитным оптическим каналом от Ростелекома в вашей квартире или доме всегда будет
                стабильный
                высокоскоростной с возможностью подключения любых ваших устройств без потери качества сигнала</h2>
                <rt-button class="rt-button-md--is-block" color="gray">Подробнее о скорости</rt-button>
              </rt-col>
            </rt-row>
            <rt-resize-content-height :mobile-not-resize="true" :tablet-not-resize="true" class="row"
                                      :query-selectors-names="['.shadow-card']">
              <rt-col :size="12">
                <h2 class="font-h2 sp-t-4 sp-b-2 td-sp-b-none md-sp-t-2 md-sp-b-1-3 td-sp-t-3-1">Наслаждайтесь <span
                    class="color-orange">качественной связью</span></h2>
              </rt-col>
              <rt-col :size="4" :tablet-size="6" class="sp-t-2 md-sp-t-none">
                <div class="round-border shadow-card">
                  <div
                      class="flex-center-center flex-column sp-h-0-3 td-flex-row md-flex-column md-d-flex sp-v-2 md-sp-v-1-3 td-sp-b-1">
                    <img src="/sites/default/files/img/quality/1.svg" alt="">
                    <div class="td-sp-l-1-2 md-sp-l-none">
                      <h3 class="font-h3 sp-t-1 sp-b-1 td-sp-b-0-3 rt-font-center-md rt-font-center">Лучшие
                        технологии</h3>
                      <p class="font-t-m rt-font-center rt-td-font-left rt-font-center-md">Ростелеком использует самые
                        передовые технологии передачи
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
                      <h3 class="font-h3 sp-t-1 sp-b-1 td-sp-b-0-3 rt-font-center-md rt-font-center">Максимальная
                        скорость</h3>
                      <p class="font-t-m rt-font-center rt-td-font-left rt-font-center-md">Оптоволоконный интернет от
                        Ростелеком имеет одно важное
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
                      <h3 class="font-h3 sp-t-1 sp-b-1 td-sp-b-0-3 rt-font-center-md rt-font-center">Стабильное
                        соединение</h3>
                      <p class="font-t-m rt-font-center rt-td-font-left rt-font-center-md">Оптоволоконные сети проложены
                        под землей, защищенные от
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
                <p class="sp-v-1-3 md-sp-v-1-2">Став клиентом Ростелекома вы получите быстрый и надежный домашний
                  интернет для всей
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
                  <div class="font-t-m number-block-text sp-t-2-1">Модернизируем&nbsp;существующую или создаем
                    необходимую
                    инфраструктуру
                  </div>
                </div>
              </div>
              <div class="number-block sp-l-2 md-sp-l-none md-sp-t-1-3">
                <div class="relative">
                  <div class="number-block-int">03</div>
                  <div class="font-t-m number-block-text sp-t-2-1">Согласовываем и контролируем метрики, при
                    необходимости
                    начинаем с пилотного проекта
                  </div>
                </div>
              </div>
            </div>
          </rt-col>
        </div>
      </div>
    </div>
    <div class="rt-container sp-b-5">
      <div class="wc-inline">
        <div class="rt-col">
          <div class="intetior">
            <img src="/static/images/smart/Intetior.jpg" alt="" class="intetior-image">
            <div :class="['buble', (coor.c[0]/width*100 < 55 ? 'buble-right' : 'buble-left')]" v-for="coor in coords"
                 :style="{left: coor.c[0]/width*100+'%',top: coor.c[1]/height*100+'%'}">
              <rt-system-icons class="buble__icon" name="close large" color="white"></rt-system-icons>
              <div class="buble-popup sp-h-1 sp-v-1-1 round-border color-block--white rt-font-center">
                <img :src="coor.image" alt=""
                     class="buble-popup-image">
                <div class="sp-b-1">
                  <p class="rt-font-h4 sp-b-0-3 sp-t-1">{{ coor.label }}</p>
                  <p class="font-t-m color-main05-no-opacity" v-html="coor.text"></p>
                </div>
                <rt-button class="buble-button" :v-rt-scroll-to-on-click="{ 'scrollToId' : coor.scrollTo }"
                           :is-block="true" color="orange" :small="true">{{ coor.button }}
                </rt-button>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div class="wc-inline">
        <div class="homescript">
          <div class="rt-container sp-t-5">
            <h2 class="sp-t-1-3 rt-font-h2 sp-b-1">Сценарии Умного дома</h2>
            <p class="font-t-l">Задавайте любые сценарии действий Умному дому.</p>
            <p class="font-t-l sp-b-2">Устройства и датчики будут выполнять все ваши команды так, как удобно вам.</p>
            <div class="d-flex sp-b-3">
              <div class="d-flex flex-v-center">
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M40 80C62.0914 80 80 62.0914 80 40C80 17.9086 62.0914 0 40 0C17.9086 0 0 17.9086 0 40C0 62.0914 17.9086 80 40 80Z"
                        fill="#E3E8EC"/>
                  <path
                      d="M54 38.25L54.0175 59.25L26 59.2675V40V38.25V36.5H24.25V59.2675C24.25 60.23 25.02 61 25.9825 61H54.035C54.98 61 55.7675 60.23 55.7675 59.2675V36.5H54.0175V38.25H54Z"
                      fill="#101828"/>
                  <path
                      d="M40.0004 19.0176L19.3154 36.0976L20.4354 37.4451L40.0004 21.2751L59.5654 37.4451L60.6854 36.0976L40.0004 19.0176Z"
                      fill="#101828"/>
                  <path
                      d="M43.64 46.7375C42.695 45.81 41.4175 45.25 40 45.25C38.5475 45.25 37.235 45.845 36.29 46.79L37.5325 48.0325C38.1625 47.385 39.0375 47 40 47C40.9275 47 41.785 47.3675 42.3975 47.9625L43.64 46.7375Z"
                      fill="#101828"/>
                  <path
                      d="M38.7578 49.2573L39.9303 50.4298L41.1553 49.2048C40.8578 48.9248 40.4553 48.7498 40.0003 48.7498C39.5103 48.7498 39.0728 48.9423 38.7578 49.2573Z"
                      fill="#101828"/>
                  <path
                      d="M46.1257 44.2525C44.5332 42.7125 42.3807 41.75 40.0007 41.75C37.5857 41.75 35.3982 42.73 33.8057 44.305L35.0482 45.5475C36.3257 44.2875 38.0757 43.5 40.0007 43.5C41.8907 43.5 43.6232 44.27 44.8832 45.495L46.1257 44.2525Z"
                      fill="#101828"/>
                </svg>

                <p class="sp-l-1-1 font-t-m color-main085-no-opacity">Настройте Умный дом под режим дня и <br>
                  привычки</p>
              </div>
              <div class="d-flex flex-v-center sp-l-1">
                <svg width="81" height="80" viewBox="0 0 81 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M40.5 80C62.5914 80 80.5 62.0914 80.5 40C80.5 17.9086 62.5914 0 40.5 0C18.4086 0 0.5 17.9086 0.5 40C0.5 62.0914 18.4086 80 40.5 80Z"
                        fill="#E3E8EC"/>
                  <path
                      d="M54.5 38.25V40V59.25H26.5V40V38.25V36.5H24.75V59.25C24.75 60.2125 25.5375 61 26.5 61H54.5C55.4625 61 56.25 60.2125 56.25 59.25V36.5H54.5V38.25Z"
                      fill="#101828"/>
                  <path
                      d="M40.5004 19.0176L19.8154 36.0976L20.9354 37.4451L40.5004 21.2751L60.0654 37.4451L61.1854 36.0976L40.5004 19.0176Z"
                      fill="#101828"/>
                  <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M30 44.6551C30 44.2001 30.315 43.7976 30.7525 43.6751L32.625 43.1676C32.8175 42.4676 33.0975 41.7851 33.4475 41.1726L32.485 39.5101C32.2575 39.1076 32.3275 38.6176 32.6425 38.2851L33.5175 37.4101C33.71 37.2176 33.9725 37.1126 34.235 37.1126C34.41 37.1126 34.585 37.1651 34.7425 37.2526L36.4225 38.2151C37.035 37.8651 37.7175 37.5851 38.4175 37.3926L38.9075 35.5201C39.03 35.0826 39.4325 34.7676 39.8875 34.7676H41.13C41.585 34.7676 41.9875 35.0826 42.11 35.5201L42.6175 37.3751C43.3175 37.5676 44 37.8476 44.6125 38.1976L46.275 37.2351C46.4325 37.1476 46.6075 37.0951 46.7825 37.0951C47.045 37.0951 47.3075 37.2001 47.5 37.3926L48.375 38.2676C48.69 38.6001 48.76 39.0901 48.5325 39.4926L47.57 41.1551C47.9375 41.7676 48.2175 42.4326 48.41 43.1501L50.265 43.6401C50.7025 43.7626 51.0175 44.1651 51.0175 44.6201V45.8626C51.0175 46.3176 50.7025 46.7201 50.265 46.8426L48.41 47.3326C48.2175 48.0501 47.955 48.7151 47.5875 49.3451L48.55 51.0076C48.7775 51.4101 48.7075 51.9001 48.3925 52.2326L47.5175 53.1076C47.325 53.3001 47.0625 53.4051 46.8 53.4051C46.625 53.4051 46.45 53.3526 46.2925 53.2651L44.63 52.3026C44 52.6701 43.335 52.9501 42.6175 53.1426L42.1275 54.9976C42.005 55.4351 41.6025 55.7501 41.1475 55.7501H39.905C39.45 55.7501 39.0475 55.4351 38.925 54.9976L38.4175 53.1426C37.7 52.9501 37.035 52.6876 36.405 52.3201L34.7425 53.2826C34.585 53.3701 34.41 53.4226 34.235 53.4226C33.9725 53.4226 33.71 53.3176 33.5175 53.1251L32.6425 52.2501C32.3275 51.9176 32.2575 51.4276 32.485 51.0251L33.4475 49.3626C33.0975 48.7501 32.8175 48.0676 32.625 47.3676L30.7525 46.8776C30.315 46.7551 30 46.3526 30 45.8976V44.6551ZM34.1825 43.5701L33.9375 44.4801L33.045 44.7776L31.6275 45.1626V45.4776L33.045 45.8451L33.955 46.0901L34.2 47.0001C34.3575 47.5601 34.5675 48.1026 34.865 48.5926L35.3375 49.3976L34.865 50.2026L34.13 51.4626L34.3575 51.6901L35.6175 50.9551L36.4225 50.4826L37.2275 50.9551C37.735 51.2526 38.2775 51.4626 38.8375 51.6201L39.7475 51.8651L39.9925 52.7751L40.3775 54.1751H40.6925L41.06 52.7751L41.305 51.8651L42.215 51.6201C42.7925 51.4801 43.3175 51.2526 43.825 50.9551L44.63 50.4826L45.435 50.9551L46.695 51.6726L46.9225 51.4451L46.1875 50.1851L45.715 49.3801L46.1875 48.5751C46.485 48.0676 46.695 47.5251 46.8525 46.9651L47.0975 46.0551L48.0075 45.8101L49.4075 45.4251V45.1101L47.99 44.7426L47.08 44.4976L46.835 43.5876C46.695 43.0101 46.4675 42.4851 46.17 41.9776L45.6975 41.1726L46.17 40.3676L46.905 39.1076L46.6775 38.8801L45.4175 39.6151L44.6125 40.0876L43.8075 39.6151C43.3 39.3176 42.7575 39.0901 42.1975 38.9501L41.2875 38.7051L41.0425 37.7951L40.6575 36.3776H40.3425L39.975 37.7951L39.73 38.7051L38.82 38.9501C38.26 39.1076 37.7175 39.3176 37.2275 39.6151L36.4225 40.0876L35.6175 39.6151L34.34 38.8801L34.1125 39.1076L34.8475 40.3676L35.32 41.1726L34.8475 41.9776C34.55 42.4676 34.3225 43.0101 34.1825 43.5701Z"
                        fill="#101828"/>
                  <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M44.5954 45.2504C44.5954 47.5079 42.7754 49.3454 40.5179 49.3454C38.2604 49.3454 36.4229 47.5254 36.4229 45.2679C36.4229 43.0104 38.2429 41.1729 40.5004 41.1729C42.7579 41.1729 44.5954 42.9929 44.5954 45.2504ZM42.9679 45.2504C42.9679 43.8854 41.8654 42.7829 40.5004 42.7829C39.1354 42.7829 38.0329 43.9029 38.0329 45.2504C38.0329 46.6154 39.1354 47.7179 40.5004 47.7179C41.8654 47.7179 42.9679 46.6154 42.9679 45.2504Z"
                        fill="#101828"/>
                </svg>
                <p class="sp-l-1-1 font-t-m color-main085-no-opacity">Система запоминает все сценарии <br> действий
                </p>
              </div>
              <div class="d-flex flex-v-center sp-l-1">
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M40 80C62.0914 80 80 62.0914 80 40C80 17.9086 62.0914 0 40 0C17.9086 0 0 17.9086 0 40C0 62.0914 17.9086 80 40 80Z"
                        fill="#E3E8EC"/>
                  <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M27.8375 19H52.1625C53.1775 19 54 19.8225 54 20.8375V59.1625C54 60.1775 53.1775 61 52.1625 61H27.8375C26.8225 61 26 60.1775 26 59.1625V20.8375C26 19.8225 26.8225 19 27.8375 19ZM52.25 20.8375C52.25 20.785 52.215 20.75 52.1625 20.75H27.8375C27.785 20.75 27.75 20.785 27.75 20.8375V59.1625C27.75 59.215 27.785 59.25 27.8375 59.25H52.1625C52.215 59.25 52.25 59.215 52.25 59.1625V20.8375Z"
                        fill="#101828"/>
                  <path
                      d="M40 57.5C40.4725 57.5 40.875 57.115 40.875 56.625C40.875 56.135 40.4725 55.75 40 55.75C39.5275 55.75 39.125 56.135 39.125 56.625C39.125 57.115 39.5275 57.5 40 57.5Z"
                      fill="#101828"/>
                  <rect x="26" y="52.25" width="28" height="1.75" fill="#101828"/>
                </svg>

                <p class="sp-l-1-1 font-t-m color-main085-no-opacity">Создавайте любые варианты <br> сценариев </p>

              </div>
            </div>
            <div class="homescript-slider">
              <div class="homescript-slider-images">
                <img id="img1" src="/static/images/smart/img1.jpg" alt=""
                     class="homescript-image-main">
                <img id="img2" src="/static/images/smart/img2.jpg" alt="" class="homescript-image"/>
                <img id="img3" src="/static/images/smart/img3.jpg" alt="" class="homescript-image"/>
                <img id="img4" src="/static/images/smart/img4.jpg" alt="" class="homescript-image"/>
                <img id="img5" src="/static/images/smart/img5.jpg" alt="" class="homescript-image"/>

                <div class="homescript-slider-nav d-flex">
                  <div class="homescript-slider-block flex-fill">
                    <div class="homescript-slider-link">
                      <div class="homescript-header"><p class="font-h3">Я просыпаюсь</p>
                        <rt-system-icons name="arrow right" class="homescript-slider-back"
                                         color="white"></rt-system-icons>
                      </div>
                      <div class="homescript-body">
                        <p class="sp-t-1-2 homescript-body-text">Каждое утро в указанное время по сценарию Умного дома
                          с помощью датчика реле открываются шторы, включается умная розетка кофемашины, а умная
                          колонка «Маруся» включает музыку из вашего плейлиста.</p>
                        <div class="homescript-slider-go-back rt-sys-icon-hover--orange">
                          <rt-system-icons name="arrow left"
                                           color="white"></rt-system-icons>
                        </div>
                      </div>

                    </div>
                  </div>
                  <div class="homescript-slider-block flex-fill">
                    <div class="homescript-slider-link">
                      <div class="homescript-header"><p class="font-h3">Я смотрю кино</p>
                        <rt-system-icons name="arrow right" class="homescript-slider-back"
                                         color="white"></rt-system-icons>
                      </div>
                      <div class="homescript-body">
                        <p class="sp-t-1-2 homescript-body-text">Каждое утро в указанное время по сценарию Умного дома
                          с помощью датчика реле открываются шторы, включается умная розетка кофемашины, а умная
                          колонка «Маруся» включает музыку из вашего плейлиста.</p>
                        <div class="homescript-slider-go-back rt-sys-icon-hover--orange">
                          <rt-system-icons name="arrow left"
                                           color="white"></rt-system-icons>
                        </div>
                      </div>

                    </div>
                  </div>
                  <div class="homescript-slider-block flex-fill">
                    <div class="homescript-slider-link">
                      <div class="homescript-header"><p class="font-h3">Я дома</p>
                        <rt-system-icons name="arrow right" class="homescript-slider-back"
                                         color="white"></rt-system-icons>
                      </div>
                      <div class="homescript-body">
                        <p class="sp-t-1-2 homescript-body-text">Каждое утро в указанное время по сценарию Умного дома
                          с помощью датчика реле открываются шторы, включается умная розетка кофемашины, а умная
                          колонка «Маруся» включает музыку из вашего плейлиста.</p>
                        <div class="homescript-slider-go-back rt-sys-icon-hover--orange">
                          <rt-system-icons name="arrow left"
                                           color="white"></rt-system-icons>
                        </div>
                      </div>

                    </div>
                  </div>
                  <div class="homescript-slider-block flex-fill">
                    <div class="homescript-slider-link">
                      <div class="homescript-header"><p class="font-h3">Я в отпуске</p>
                        <rt-system-icons name="arrow right" class="homescript-slider-back"
                                         color="white"></rt-system-icons>
                      </div>
                      <div class="homescript-body">
                        <p class="sp-t-1-2 homescript-body-text">Каждое утро в указанное время по сценарию Умного дома
                          с помощью датчика реле открываются шторы, включается умная розетка кофемашины, а умная
                          колонка «Маруся» включает музыку из вашего плейлиста.</p>
                        <div class="homescript-slider-go-back rt-sys-icon-hover--orange">
                          <rt-system-icons name="arrow left"
                                           color="white"></rt-system-icons>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


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
  data: () => ({
    coords: [
      {
        c: [208, 230],
        label: 'Датчик дыма',
        text: 'Фиксирует задымление в помещении <br/><br/>Датчик мгновенно обнаружит задымление и моментально отправит уведомление.',
        image: 'https://rt-static.rt.ru/sites/default/files/img/sensors/PHI_PSG01.jpg',
        button: 'Выбрать датчики',
        scrollTo: 'form'
      }, {
        c: [47, 626],
        label: 'Датчик протечки Philio',
        text: 'Фиксирует задымление в помещении <br/><br/>Датчик мгновенно обнаружит задымление и моментально отправит уведомление.',
        image: 'https://rt-static.rt.ru/sites/default/files/img/sensors/aa.jpg',
        button: 'Хочу!',
        scrollTo: 'form'
      }, {
        c: [267, 326],
        label: 'Датчик дыма',
        text: 'Фиксирует задымление в помещении <br/><br/>Датчик мгновенно обнаружит задымление и моментально отправит уведомление.',
        image: 'https://rt-static.rt.ru/sites/default/files/img/sensors/PHI_PSG01.jpg',
        button: 'Выбрать датчики',
        scrollTo: 'form'
      }, {
        c: [328, 429],
        label: 'Датчик дыма',
        text: 'Фиксирует задымление в помещении <br/><br/>Датчик мгновенно обнаружит задымление и моментально отправит уведомление.',
        image: 'https://rt-static.rt.ru/sites/default/files/img/sensors/PHI_PSG01.jpg',
        button: 'Выбрать датчики',
        scrollTo: 'form'
      }, {
        c: [444, 590],
        label: 'Датчик дыма',
        text: 'Фиксирует задымление в помещении <br/><br/>Датчик мгновенно обнаружит задымление и моментально отправит уведомление.',
        image: 'https://rt-static.rt.ru/sites/default/files/img/sensors/PHI_PSG01.jpg',
        button: 'Выбрать датчики',
        scrollTo: 'form'
      }, {
        c: [663, 582],
        label: 'Датчик дыма',
        text: 'Фиксирует задымление в помещении <br/><br/>Датчик мгновенно обнаружит задымление и моментально отправит уведомление.',
        image: 'https://rt-static.rt.ru/sites/default/files/img/sensors/PHI_PSG01.jpg',
        button: 'Выбрать датчики',
        scrollTo: 'form'
      }, {
        c: [706, 472],
        label: 'Датчик дыма',
        text: 'Фиксирует задымление в помещении <br/><br/>Датчик мгновенно обнаружит задымление и моментально отправит уведомление.',
        image: 'https://rt-static.rt.ru/sites/default/files/img/sensors/PHI_PSG01.jpg',
        button: 'Выбрать датчики',
        scrollTo: 'form'
      }, {
        c: [731, 280],
        label: 'Датчик дыма',
        text: 'Фиксирует задымление в помещении <br/><br/>Датчик мгновенно обнаружит задымление и моментально отправит уведомление.',
        image: 'https://rt-static.rt.ru/sites/default/files/img/sensors/PHI_PSG01.jpg',
        button: 'Выбрать датчики',
        scrollTo: 'form'
      }, {
        c: [798, 173],
        label: 'Датчик дыма',
        text: 'Фиксирует задымление в помещении <br/><br/>Датчик мгновенно обнаружит задымление и моментально отправит уведомление.',
        image: 'https://rt-static.rt.ru/sites/default/files/img/sensors/PHI_PSG01.jpg',
        button: 'Выбрать датчики',
        scrollTo: 'form'
      }, {
        c: [888, 460],
        label: 'Датчик дыма',
        text: 'Фиксирует задымление в помещении <br/><br/>Датчик мгновенно обнаружит задымление и моментально отправит уведомление.',
        image: 'https://rt-static.rt.ru/sites/default/files/img/sensors/PHI_PSG01.jpg',
        button: 'Выбрать датчики',
        scrollTo: 'form'
      }, {
        c: [1306, 353],
        label: 'Датчик дыма',
        text: 'Фиксирует задымление в помещении <br/><br/>Датчик мгновенно обнаружит задымление и моментально отправит уведомление.',
        image: 'https://rt-static.rt.ru/sites/default/files/img/sensors/PHI_PSG01.jpg',
        button: 'Выбрать датчики',
        scrollTo: 'form'
      }, {
        c: [1319, 521],
        label: 'Датчик дыма',
        text: 'Фиксирует задымление в помещении <br/><br/>Датчик мгновенно обнаружит задымление и моментально отправит уведомление.',
        image: 'https://rt-static.rt.ru/sites/default/files/img/sensors/PHI_PSG01.jpg',
        button: 'Выбрать датчики',
        scrollTo: 'form'
      },
    ],
    width: 1440,
    height: 839
  }),
  mounted() {

    var clickOutSide = function (e) {
      setTimeout(function () {
        if (e.target.classList && e.target.classList.contains('buble-active') || e.target.closest('.buble-active')) {
          if (document.querySelector('.buble-active')) {
            bindOutSideClick()
          }
        } else {
          document.querySelector('.buble-active').classList.remove('buble-active');
        }
      }, 10)
    }
    var keyPress = function (e) {
      if (e.code == 'Escape' && document.querySelector('.buble-active')) {
        document.querySelector('.buble-active').classList.remove('buble-active');
      }
    }
    var bindOutSideClick = function () {
      document.addEventListener('click', clickOutSide, {once: true})
    }
    var unbindOutSideClick = function () {
      document.removeEventListener('click', clickOutSide)
    }
    document.addEventListener('keydown', keyPress)
    document.querySelectorAll('.buble').forEach(function (item) {
      item.addEventListener('mouseleave', function (e) {
        if (!item.classList.contains('buble-blur') && !item.classList.contains('buble-active')) {
          item.classList.add('buble-blur')
          setTimeout(function () {
            item.classList.remove('buble-blur')
          }, 400)
        } else {

        }
      })
      item.addEventListener('click', function (e) {

        if (item.classList.contains('buble-active') && e.target.classList.contains('buble__icon') || e.target.classList.contains('buble-active') || e.target.classList.contains('buble-button') || e.target.closest('.buble-button')) {
          item.classList.remove('buble-active')
          unbindOutSideClick()
        } else {
          var anyB = document.querySelector('.buble-active');
          if (anyB) {
            anyB.classList.remove('buble-active')
          }
          item.classList.add('buble-active')
          setTimeout(function () {
            bindOutSideClick();
          })

        }

      })
    })
    document.querySelectorAll('.homescript-slider-link').forEach(function (item, index) {
      item.addEventListener('click', function (e) {
        if ((e.target.classList.contains('homescript-slider-go-back') || e.target.classList && e.target.closest('.homescript-slider-go-back')) && document.querySelector('.homescript-image-main--hide') && e.target.closest('.homescript-slider-block--active')) {
          document.querySelector('.homescript-image-main').classList.remove('homescript-image-main--hide')
          document.querySelector('.homescript-image--active').classList.remove('homescript-image--active')
          document.querySelector('.homescript-slider-block--active').classList.remove('homescript-slider-block--active')
          document.querySelector('.homescript-slider').classList.remove('homescript-slider--active')
        } else {
          document.querySelector('.homescript-image-main').classList.add('homescript-image-main--hide')
          var activeBlock = document.querySelector('.homescript-slider-block--active');
          if (activeBlock) {
            activeBlock.classList.remove('homescript-slider-block--active')
          }
          var activeImage = document.querySelector('.homescript-image--active');
          document.querySelector('.homescript-slider').classList.add('homescript-slider--active')
          if (activeImage) {
            activeImage.classList.remove('homescript-image--active')
          }
          document.querySelectorAll('.homescript-slider-block')[index].classList.add('homescript-slider-block--active')
          document.querySelectorAll('.homescript-image')[index].classList.add('homescript-image--active')
        }
      })
    })
  }
};
</script>


<template>
  <div class="rt-container">
    <div class="app-content rt-col-12 rt-col-md-3">
      <div class="app-title">
        <div class="row">
          <h1 class="rt-font-hero rt-col">
            Popup <span class="rt-code rt-font-h3 rt-col">.rtb-popup</span>
          </h1>
        </div>
      </div>
      <div class="app-body">
        <h1 class="sp-b-3">Попапчики</h1>
        <div>

            <rt-button v-popup-trigger="{name:'filter'}"  color="orange">
              Попап 1
            </rt-button>


          <rt-button v-popup-trigger="{name:'filter2'}"  color="orange">
              Попап 2
            </rt-button>

          <rt-button v-popup-trigger="{name:'filter3'}"  color="orange">
              Попап 3
            </rt-button>

          <rt-popup hash="popup1" name="filter" :ga="{test:1}">
            <p class="rt-font-h3 sp-b-0-4">Проверьте тип подключения</p>
            <p class="rt-font-paragraph">Подойдите к вашему роутеру, предварительно убедитесь, что ничего не скачиваете
              или играете. Проверьте основной провод провайдера или гнездо разъема и сравните с изображениями ниже.</p>
            <div class="d-flex">
              <div class="flex-fill"></div>
              <div class="d-flex sp-t-1-1 td-sp-t-1-3 md-sp-t-1-1 md-d-block">
                <div class="lg-router-pop-icon">
                  <img class="d-block" width="174" height="118"
                       src="https://rt-static.rt.ru/sites/default/files/img/router-huawei/gronIcon.jpg"/>
                  <p class="rt-font-h4 sp-t-1">PON</p>
                </div>
                <div class="sp-r-3 md-d-none"></div>
                <div class="lg-router-pop-icon md-sp-t-1-1">
                  <img class="d-block" width="174" height="118"
                       src="https://rt-static.rt.ru/sites/default/files/img/router-huawei/notGropIcon.jpg"/>
                  <p class="rt-font-h4 sp-t-1">не PON</p>
                </div>
              </div>
            </div>
            <p class="rt-font-h3 sp-b-0-4">Проверьте тип подключения</p>
            <p class="rt-font-paragraph">Подойдите к вашему роутеру, предварительно убедитесь, что ничего не скачиваете
              или играете. Проверьте основной провод провайдера или гнездо разъема и сравните с изображениями ниже.</p>
            <div class="d-flex">
              <div class="flex-fill"></div>
              <div class="d-flex sp-t-1-1 td-sp-t-1-3 md-sp-t-1-1 md-d-block">
                <div class="lg-router-pop-icon">
                  <img class="d-block" width="174" height="118"
                       src="https://rt-static.rt.ru/sites/default/files/img/router-huawei/gronIcon.jpg"/>
                  <p class="rt-font-h4 sp-t-1">PON</p>
                </div>
                <div class="sp-r-3 md-d-none"></div>
                <div class="lg-router-pop-icon md-sp-t-1-1">
                  <img class="d-block" width="174" height="118"
                       src="https://rt-static.rt.ru/sites/default/files/img/router-huawei/notGropIcon.jpg"/>
                  <p class="rt-font-h4 sp-t-1">не PON</p>
                </div>
              </div>
            </div>
            <p class="rt-font-h3 sp-b-0-4">Проверьте тип подключения</p>
            <p class="rt-font-paragraph">Подойдите к вашему роутеру, предварительно убедитесь, что ничего не скачиваете
              или играете. Проверьте основной провод провайдера или гнездо разъема и сравните с изображениями ниже.</p>
            <div class="d-flex">
              <div class="flex-fill"></div>
              <div class="d-flex sp-t-1-1 td-sp-t-1-3 md-sp-t-1-1 md-d-block">
                <div class="lg-router-pop-icon">
                  <img class="d-block" width="174" height="118"
                       src="https://rt-static.rt.ru/sites/default/files/img/router-huawei/gronIcon.jpg"/>
                  <p class="rt-font-h4 sp-t-1">PON</p>
                </div>
                <div class="sp-r-3 md-d-none"></div>
                <div class="lg-router-pop-icon md-sp-t-1-1">
                  <img class="d-block" width="174" height="118"
                       src="https://rt-static.rt.ru/sites/default/files/img/router-huawei/notGropIcon.jpg"/>
                  <p class="rt-font-h4 sp-t-1">не PON</p>
                </div>
              </div>
            </div>
          </rt-popup>
          <rt-popup name="filter2" :size='10' popup-classes='td-sp-v-2 td-sp-h-2'>
            <h1>А это попап 2</h1>
          </rt-popup>
          <rt-popup name="filter3">
            <h1>А это попап 3</h1>
          </rt-popup>
        </div>
        <div class="app-row is-b2b">
          <div class="rt-col rt-space-bottom rt-space-top">
            <div class="row">
              <rt-button class="rt-button-transparent-purple popupButton" :popup-button="true" target-popup="first-popup">Попап</rt-button>
            </div>
          </div>
          <div class="rt-col-12">
            <div class="row">
              <div class="rt-col-4">
                <rt-card class="rt-card--img-full-width">
                  <template slot="header">
                    <div class="rt-card__image-wrapper rt-font-center">
                      <img class="additional-possibilities__card-image"
                           src="/sites/default/files/b2b/pg/vats/cards/Otdel_prodazh_1280x853.jpg">
                    </div>
                  </template>
                  <template slot="content">
                    <div class="rt-space-top05 rt-space-bottom2 rt-td-space-bottom15 rt-md-space-bottom adjust">
                      <p class="rt-font-paragraph rt-space-bottom05 rt-font-bold">У вас есть отдел продаж
                      </p>
                      <!--                     <p class="rt-font-small-paragraph md-d-none d-none">Вы можете подключить прямой городской номер, если работаете с клиентами только в своем городе, и номер 8800 если вам звонят клиенты со всей России</p> -->
                    </div>
                  </template>
                  <template slot="footer">
                    <rt-button
                      class="rt-button-purple-border rt-button-small rt-space-horizontal new-vats-popup-button"
                      :popup-button="true"
                      target-popup="second-popup">
                      Подробнее</rt-button>
                  </template>
                  <template slot="popup-special-benefits">
                    <div class="new-vats-popup__image-wrapper">
                      <img src="/sites/default/files/b2b/pg/vats/cards/Otdel_prodazh_1280x853.jpg"
                           class="new-vats-popup__image" />
                    </div>
                    <h2 class="rt-font-h3 rt-font-bold rt-space-vertical15">У вас есть отдел продаж</h2>
                    <p class="rt-font-small-paragraph rt-space-bottom05">Подключите прямой городской номер,
                      если
                      работаете с&nbsp;клиентами только в&nbsp;своем городе, или&nbsp;номер 8800, если вам
                      звонят клиенты со&nbsp;всей России — исходящие звонки для&nbsp;ваших клиентов будут
                      совершенно бесплатными.</p>
                    <p class="rt-font-small-paragraph rt-space-bottom">Все коммуникации менеджеров
                      с&nbsp;клиентами записываются и&nbsp;находятся под вашим контролем. Интегрируйте
                      Виртуальную АТС с&nbsp;CRM-системой для&nbsp;оптимизации бизнес-процессов.</p>
                  </template>
                </rt-card>
              </div>
              <div class="rt-col-4">
                <rt-card class="rt-card--img-full-width">
                  <template slot="header">
                    <div class="rt-card__image-wrapper rt-font-center">
                      <img class="additional-possibilities__card-image"
                           src="/sites/default/files/b2b/pg/vats/cards/Filial_1280x853.jpg">
                    </div>
                  </template>
                  <template slot="content">
                    <div class="rt-space-top05 rt-space-bottom rt-td-space-bottom15 rt-md-space-bottom adjust">
                      <p class="rt-font-paragraph rt-space-bottom05 rt-font-bold">У&nbsp;вас филиальная
                        сеть
                      </p>
                      <!--                     <p class="rt-font-small-paragraph md-d-none  d-none">Вы можете подключить прямой городской номер, звонить и принимать звонки через Виртуальную АТС без лишних затрат на организацию телефонии</p>
                  <p class="rt-font-small-paragraph md-d-none  d-none">Вы можете подключить прямой городской номер, звонить и принимать звонки через Виртуальную АТС без лишних затрат на организацию телефонии</p> -->
                    </div>
                  </template>
                  <template slot="footer">
                    <rt-button
                      class="rt-button-purple-border rt-button-small rt-space-horizontal new-vats-popup-button"
                      :popup-button="true"
                      target-popup="second-popup">
                      Подробнее</rt-button>
                  </template>
                  <template slot="popup-special-benefits">
                    <div class="new-vats-popup__image-wrapper">
                      <img src="/sites/default/files/b2b/pg/vats/cards/Filial_1280x853.jpg"
                           class="new-vats-popup__image" />
                    </div>
                    <h2 class="rt-font-h3 rt-font-bold rt-space-vertical">У&nbsp;вас филиальная сеть</h2>
                    <p class="rt-font-small-paragraph rt-space-bottom05">Для приема звонков от&nbsp;клиентов
                      со&nbsp;всей России подключите номер в&nbsp;коде 8800 или&nbsp;несколько городских
                      номеров для&nbsp;каждого филиала.</p>

                    <p class="rt-font-small-paragraph rt-space-bottom05">Настройте голосовое приветствие
                      и&nbsp;голосовое меню, которое распределит звонки от&nbsp;клиентов по&nbsp;разным
                      филиалам и&nbsp;записывайте разговоры, в&nbsp;том числе с&nbsp;мобильных телефонов,
                      чтобы проконтролировать работу менеджеров и&nbsp;получить обратную связь
                      от&nbsp;клиентов.</p>

                    <p class="rt-font-small-paragraph rt-space-bottom">А ваши сотрудники в&nbsp;разных
                      филиалах
                      смогут бесплатно общаться друг с&nbsp;другом и&nbsp;звонить по&nbsp;коротким
                      номерам.
                    </p>
                  </template>
                </rt-card>
              </div>
            </div>
          </div>
          <rt-real-popup :position-bottom="true" trigger-element-class="popupButton" main-wrapper-class="app" class="first-popup">
            <div class="popup-content"></div>
          </rt-real-popup>
          <rt-real-popup :position-center="true" trigger-element-class="new-vats-popup-button" main-wrapper-class="app" class="second-popup">
            <div class="popup-content"></div>
          </rt-real-popup>
        </div>
      </div>
      <div class="rt-container rt-space-top25">
        <documentation-builder :json="documentation" type="components"/>
      </div>
    </div>
  </div>
</template>

<script>
  import documentation from "@vue-rt-style-kit-molecules-local/components/Popup/docs/index.json";
  import componentsList from "../../componentsList";
  export default {
    name: "AppPopup",
    components: componentsList,
    data: () => ({
      documentation: {}
    }),
    mounted() {
      this.documentation = documentation;
    },
    created() {},
    methods: {}
  };
</script>

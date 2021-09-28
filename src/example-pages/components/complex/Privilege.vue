<template>
  <div>
    <div class="rt-container">
      <div class="app-content rt-col-12 rt-col-md-3">
        <div class="app-title">
          <h1 class="rt-font-hero">
            Privilege
          </h1>
        </div>
        <div class="cloud-g-bg-image">
          <div class="cloud-g-3 sp-t-3-1 td-sp-t-1-1 md-sp-t-1">
            <div class="rt-container cloud-tablet-scroll-hide-container">
              <rt-col>
                <h3 class="rt-font-h3 rt-font-light sp-b-2 td-sp-b-none">Забудьте об ограничениях</h3>
                <rt-row class="row--tablet-scroll cloud-tablet-scroll-hide" v-rt-resize-content-height="{querySelectorsNames:['.cloud-g-icon-container']}">
                  <rt-col size="3" tablet-size="2" mobile-size="2" class="rt-col">
                    <div class="cloud-g-icon-container">
                      <img src="https://rt-static.rt.ru/sites/default/files/cloud-game/cloud-game-icon1.png"
                           class="ratio2x-d-none cloud-g-icon" alt="">
                      <img src="https://rt-static.rt.ru/sites/default/files/cloud-game/cloud-game-icon1-lg.png"
                           class="ratio2x-d-block d-none cloud-g-icon" alt="">
                    </div>
                    <p class="rt-font-paragraph rt-font-bold sp-t-1">Играйте на любом устройстве</p>
                    <p class="rt-font-small-paragraph sp-t-0-3 color-white07">Запускайте топовые игры на старом ПК,
                      новеньком MacBook,
                      ТВ-приставке или даже телефоне на Android OS</p>
                  </rt-col>
                  <rt-col size="3" tablet-size="2" mobile-size="2">
                    <div class="cloud-g-icon-container">
                      <img src="https://rt-static.rt.ru/sites/default/files/cloud-game/cloud-game-icon2.png"
                           class="ratio2x-d-none cloud-g-icon" alt="">
                      <img src="https://rt-static.rt.ru/sites/default/files/cloud-game/cloud-game-icon2-lg.png"
                           class="ratio2x-d-block d-none cloud-g-icon" alt="">
                    </div>
                    <p class="rt-font-paragraph rt-font-bold sp-t-1">Не тратьте время на подготовку</p>
                    <p class="rt-font-small-paragraph sp-t-0-3 color-white07">Все патчи и обновления уже загружены</p>
                  </rt-col>
                  <rt-col size="3" tablet-size="2" mobile-size="2">
                    <div class="cloud-g-icon-container">
                      <img src="https://rt-static.rt.ru/sites/default/files/cloud-game/cloud-game-icon3.png"
                           class="ratio2x-d-none cloud-g-icon" alt="">
                      <img src="https://rt-static.rt.ru/sites/default/files/cloud-game/cloud-game-icon3-lg.png"
                           class="ratio2x-d-block d-none cloud-g-icon" alt="">
                    </div>
                    <p class="rt-font-paragraph rt-font-bold sp-t-1">Наслаждайтесь фотореалистичной графикой</p>
                    <p class="rt-font-small-paragraph sp-t-0-3 color-white07">Максимально реалистичная картинка с
                      технологиями NVIDIA
                      GeForce RTX для полного погружения в игру</p>
                  </rt-col>
                  <rt-col size="3" tablet-size="2" mobile-size="2">
                    <div class="cloud-g-icon-container">
                      <img src="https://rt-static.rt.ru/sites/default/files/cloud-game/cloud-game-icon4.png"
                           class="ratio2x-d-none cloud-g-icon" alt="">
                      <img src="https://rt-static.rt.ru/sites/default/files/cloud-game/cloud-game-icon4-lg.png"
                           class="ratio2x-d-block d-none cloud-g-icon" alt="">
                    </div>
                    <p class="rt-font-paragraph rt-font-bold sp-t-1">Разгрузите свой жёсткий диск </p>
                    <p class="rt-font-small-paragraph sp-t-0-3 color-white07">Запускайте игры в облаке и не забивайте свой
                      диск гигабайтами
                      данных</p>
                  </rt-col>
                </rt-row>
              </rt-col>
            </div>
          </div>
          <div class="cloud-g-4 sp-t-5 md-sp-t-none td-sp-t-2-1">
            <div class="rt-container">

              <rt-col id="tariff">
                <h3 class="rt-font-h3 rt-font-light sp-b-2 td-sp-b-1">Подключайтесь в личном кабинете


                </h3>
                <rt-row v-rt-resize-content-height="{querySelectorsNames:['.color-white07.sp-b-1'], mobileNotResize:true}">
                  <rt-col size="6" tablet-size="3" mobile-size="3">
                    <rt-card background-color-type="black" :is-white-color='true' class="rt-cart-cloud-g">
                      <template slot='content'><p class='rt-font-h3 rt-font-bold sp-b-0-1'>На тарифе «Игровой»</p>
                        <p class='color-white07 sp-b-1'>При условии отсутсвия активных игровых опций</p>
                        <ul class="cloud-g-list">
                          <li class="cloud-g-list-item rt-font-paragraph">Премиальный доступ без ограничений</li>
                          <li class="cloud-g-list-item rt-font-paragraph">Технологии трассировки лучей RTX</li>
                          <li class="cloud-g-list-item rt-font-paragraph">Высокий приоритет очереди</li>
                        </ul>
                      </template>
                      <template slot='footer'>
                        <rt-row class="sp-t-1-3">
                          <rt-col class="md-sp-b-0-3">
                            <rt-price
                                :value='490'
                            ></rt-price>
                          </rt-col>
                          <rt-col class="flex-end-center md-flex-start-center">
                            <rt-button href="#" class="rt-button-full-white">Подключить</rt-button>
                          </rt-col>

                        </rt-row>
                      </template>
                    </rt-card>
                  </rt-col>
                  <rt-col size="6" tablet-size="3" mobile-size="3" class="md-sp-t-1">
                    <rt-card background-color-type="black" :is-white-color='true' class="rt-cart-cloud-g">
                      <template slot='content'><p class='rt-font-h3 rt-font-bold sp-b-0-1'>На любом тарифе</p>
                        <p class='color-white07 sp-b-1'></p>
                        <ul class="cloud-g-list">
                          <li class="cloud-g-list-item rt-font-paragraph">Премиальный доступ без ограничений</li>
                          <li class="cloud-g-list-item rt-font-paragraph">Технологии трассировки лучей RTX</li>
                          <li class="cloud-g-list-item rt-font-paragraph">Высокий приоритет очереди</li>
                        </ul>
                      </template>
                      <template slot='footer'>
                        <rt-row class="sp-t-1-3">
                          <rt-col class="md-sp-b-0-3">
                            <rt-price
                                :value='999'
                            ></rt-price>
                          </rt-col>
                          <rt-col class="flex-end-center md-flex-start-center">
                            <rt-button href="#" class="rt-button-full-white">Подключить</rt-button>
                          </rt-col>

                        </rt-row>
                      </template>
                    </rt-card>
                  </rt-col>
                </rt-row>
              </rt-col>
            </div>
          </div>

        </div>
        <div class="app-body">
          <div class="app-row row">
            <rt-col>
              <pre-code text='<rt-row>
                <rt-col :size="3" :tablet-size="6">
                  <rt-privilege :mobile-dropdown="true">
                    <template slot="icon">
                      <rt-icon type="INTERNET_MAIN" :candy=true bg="#E3E8EC" color="#101828"></rt-icon>
                    </template>
                    <template slot="label"><p class="font-h4">Голосовое управление </p></template>
                    <template slot="content"><p class="color-main085-no-opacity">Управление без пульта: включение и
                      поиск
                      телеканалов и фильмов</p></template>
                  </rt-privilege>
                </rt-col>
                <rt-col :size="3" :tablet-size="6" class="td-sp-t-1-3">
                  <rt-privilege :mobile-dropdown="true">
                    <template slot="icon">
                      <rt-icon type="INTERNET_MAIN" :candy=true bg="#E3E8EC" color="#101828"></rt-icon>
                    </template>
                    <template slot="content"><p class="color-main085-no-opacity">Управление без пульта: включение и
                      поиск
                      телеканалов и фильмов</p></template>
                  </rt-privilege>
                </rt-col>
                <rt-col :size="3" :tablet-size="6" class="td-sp-t-1-3">
                  <rt-privilege :mobile-dropdown="true">
                    <template slot="icon">
                      <rt-icon type="INTERNET_MAIN" :candy=true bg="#E3E8EC" color="#101828"></rt-icon>
                    </template>
                    <template slot="label"><p class="font-h4">Голосовое управление </p></template>
                  </rt-privilege>
                </rt-col>
                <rt-col :size="3" :tablet-size="6" class="td-sp-t-1-3">
                  <rt-privilege :mobile-dropdown="true">
                    <template slot="label"><p class="font-h4">Голосовое управление </p></template>
                    <template slot="content"><p class="color-main085-no-opacity">Управление без пульта: включение и
                      поиск
                      телеканалов и фильмов</p></template>
                  </rt-privilege>
                </rt-col>
              </rt-row>'></pre-code>

              <pre-code text='<rt-row>
                <rt-col :size="3" :tablet-size="6">
                  <rt-privilege>
                    <template slot="icon">
                      <rt-icon type="INTERNET_MAIN" :candy=true bg="#E3E8EC" color="#101828"></rt-icon>
                    </template>
                    <template slot="label"><p class="font-h4">Голосовое управление </p></template>
                    <template slot="content"><p class="color-main085-no-opacity">Управление без пульта: включение и
                      поиск
                      телеканалов и фильмов</p></template>
                  </rt-privilege>
                </rt-col>
                <rt-col :size="3" :tablet-size="6" class="td-sp-t-1-3">
                  <rt-privilege>
                    <template slot="icon">
                      <rt-icon type="INTERNET_MAIN" :candy=true bg="#E3E8EC" color="#101828"></rt-icon>
                    </template>
                    <template slot="content"><p class="color-main085-no-opacity">Управление без пульта: включение и
                      поиск
                      телеканалов и фильмов</p></template>
                  </rt-privilege>
                </rt-col>
                <rt-col :size="3" :tablet-size="6" class="td-sp-t-1-3">
                  <rt-privilege>
                    <template slot="icon">
                      <rt-icon type="INTERNET_MAIN" :candy=true bg="#E3E8EC" color="#101828"></rt-icon>
                    </template>
                    <template slot="label"><p class="font-h4">Голосовое управление </p></template>
                  </rt-privilege>
                </rt-col>
                <rt-col :size="3" :tablet-size="6" class="td-sp-t-1-3">
                  <rt-privilege>
                    <template slot="label"><p class="font-h4">Голосовое управление </p></template>
                    <template slot="content"><p class="color-main085-no-opacity">Управление без пульта: включение и
                      поиск
                      телеканалов и фильмов</p></template>
                  </rt-privilege>
                </rt-col>
              </rt-row>'></pre-code>
              <pre-code text='<rt-row class="sp-t-1">
                <rt-col :size="3" :tablet-size="6" >
                  <rt-privilege :in-line="true">
                    <template slot="icon">
                      <rt-icon type="INTERNET_MAIN" :candy=true bg="#E3E8EC" color="#101828"></rt-icon>
                    </template>
                    <template slot="label"><p class="font-h4">Голосовое управление </p></template>
                    <template slot="content"><p class="color-main085-no-opacity">Управление без пульта: включение и
                      поиск
                      телеканалов и фильмов</p></template>
                  </rt-privilege>
                </rt-col>
                <rt-col :size="3" :tablet-size="6" class="td-sp-t-1-3">
                  <rt-privilege :in-line="true">
                    <template slot="icon">
                      <rt-icon type="INTERNET_MAIN" :candy=true bg="#E3E8EC" color="#101828"></rt-icon>
                    </template>
                    <template slot="content"><p class="color-main085-no-opacity">Управление без пульта: включение и
                      поиск
                      телеканалов и фильмов</p></template>
                  </rt-privilege>
                </rt-col>
                <rt-col :size="3" :tablet-size="6" class="td-sp-t-1-3">
                  <rt-privilege :in-line="true">
                    <template slot="icon">
                      <rt-icon type="INTERNET_MAIN" :candy=true bg="#E3E8EC" color="#101828"></rt-icon>
                    </template>
                    <template slot="label"><p class="font-h4">Голосовое управление </p></template>
                  </rt-privilege>
                </rt-col>
                <rt-col :size="3" :tablet-size="6" class="td-sp-t-1-3">
                  <rt-privilege :in-line="true">
                    <template slot="label"><p class="font-h4">Голосовое управление </p></template>
                    <template slot="content"><p class="color-main085-no-opacity">Управление без пульта: включение и
                      поиск
                      телеканалов и фильмов</p></template>
                  </rt-privilege>
                </rt-col>
              </rt-row>'></pre-code>

              <rt-row class="sp-t-1" v-rt-resize-content-height="{querySelectorsNames:['.font-h4'], mobileNotResize:true}">

                <rt-col :size="3" :tablet-size="6" >
                  <rt-privilege :with-circle="true">
                    <template slot="icon">
                      <rt-circle-number :is-small="true" :value="25" :size="100"><p class="font-h2 color-main07-no-opacity">1</p></rt-circle-number>
                    </template>
                    <template slot="label"><p class="font-h4">Выберите оборудование и тариф </p></template>
                    <template slot="content"><p class="color-main085-no-opacity">В зависимости от бизнес-задач подберите датчики, умные устройства и тариф. Вы платите разово за оборудование и ежемесячно за сервис.</p></template>
                  </rt-privilege>
                </rt-col>

                 <rt-col :size="3" :tablet-size="6" >
                  <rt-privilege :with-circle="true" :has-dotted="true">
                    <template slot="icon">
                      <rt-circle-number :is-small="true" :value="50" :size="100"><p class="font-h2 color-main07-no-opacity">2</p></rt-circle-number>
                    </template>
                    <template slot="label"><p class="font-h4">Оформите договор</p></template>
                    <template slot="content"><p class="color-main085-no-opacity">Заключите договор на подключение услуги Умный офис. Наши сотрудники привезут и настроят оборудование.</p></template>
                  </rt-privilege>
                </rt-col>
                <rt-col :size="3" :tablet-size="6" >
                  <rt-privilege :with-circle="true" :has-dotted="true">
                    <template slot="icon">
                      <rt-circle-number :is-small="true" :value="75" :size="100"><p class="font-h2 color-main07-no-opacity">3</p></rt-circle-number>
                    </template>
                    <template slot="label"><p class="font-h4">Установите в офисе</p></template>
                    <template slot="content"><p class="color-main085-no-opacity">Учтем все пожелания по дате и времени монтажа, установим контроллер, датчики и устройства, настроим личный кабинет. </p></template>
                  </rt-privilege>
                </rt-col>
                <rt-col :size="3" :tablet-size="6" >
                  <rt-privilege :with-circle="true" :has-dotted="true">
                    <template slot="icon">
                      <rt-circle-number :is-small="true" :value="100" :size="100"><p class="font-h2 color-main07-no-opacity">4</p></rt-circle-number>
                    </template>
                    <template slot="label"><p class="font-h4">Скачайте приложение</p></template>
                    <template slot="content"><p class="color-main085-no-opacity">Учтем все пожелания по дате и времени монтажа, установим контроллер, датчики и устройства, настроим личный кабинет. </p></template>
                  </rt-privilege>
                </rt-col>

              </rt-row>

              <pre-code text='<rt-row class="sp-t-3">
                <rt-col :size="4" :tablet-size="6" >
                  <rt-privilege :with-circle="true">
                    <template slot="icon">
                      <rt-circle-number :value="35" :size="100"><p class="font-t-s color-main07-no-opacity">на<span class="font-h1-tab">35%</span> </p></rt-circle-number>
                    </template>
                    <template slot="content"><p class="color-main085-no-opacity">Сокращение затрат за счет контроля нецелевого использования авто</p></template>
                  </rt-privilege>
                </rt-col>
                <rt-col :size="4" :tablet-size="6" class="td-sp-t-3-1">
                  <rt-privilege :with-circle="true">
                    <template slot="icon">
                      <rt-circle-number :value="25" :size="100"><p class="font-t-s color-main07-no-opacity">на<span class="font-h1-tab">25%</span> </p></rt-circle-number>
                    </template>
                    <template slot="content"><p class="color-main085-no-opacity">Тариф подразумевает
                      ежемесячную плата за пользование сервисом</p></template>
                  </rt-privilege>
                </rt-col>
                <rt-col :size="4" :tablet-size="6"  class="td-sp-t-3-1">
                  <rt-privilege :with-circle="true">
                    <template slot="icon">
                      <rt-circle-number :value="20" :size="100"><p class="font-t-s color-main07-no-opacity">на<span class="font-h1-tab">20%</span> </p></rt-circle-number>
                    </template>
                    <template slot="content"><p class="color-main085-no-opacity">Сокращение затрат за счет контроля качества вождения водителей и своевременного ТО</p></template>
                  </rt-privilege>
                </rt-col>


              </rt-row>'></pre-code>
            </rt-col>
          </div>
        </div>
      </div>

    </div>
    <div class="rt-container rt-space-top25">
      <documentation-builder :json="documentation" type="components"/>
    </div>
  </div>
</template>

<script>

import componentsList from "../../componentsList";
import documentation from "@vue-rt-style-kit-molecules-local/components/Privilege/docs/index.json";
// const componentsList = {};
export default {
  name: "AppTable",
  components: componentsList,
  data() {
    return {
      documentation: {},
      verticalVal: 'top',
      horizontalVal: 'center'
    }
  },
  mounted() {
    this.documentation = documentation;
  }
};
</script>

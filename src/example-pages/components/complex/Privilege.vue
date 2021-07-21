<template>
  <div>
    <div class="rt-container">
      <div class="app-content rt-col-12 rt-col-md-3">
        <div class="app-title">
          <h1 class="rt-font-hero">
            Privilege
          </h1>
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

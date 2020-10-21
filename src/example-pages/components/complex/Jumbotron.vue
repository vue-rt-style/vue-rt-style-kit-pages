<template>
  <div class="">
    <div class="rt-container">

      <div class="app-content rt-col-12 rt-col-md-3">
        <div class="app-title">
          <div class="row"><h1 class="rt-font-hero rt-col">Jumbotron</h1></div>
        </div>
      </div>
    </div>

    <rt-jumbotron background='gray'  color='main' description-color='main'>
      <template slot='label'>Кибербезопасность</template>
      <template slot='body-html'>
        <p class="sp-b-1-3">Комплексные сервисы защиты цифровых систем</p>
        <rt-arrow-anchor>Защита каналов связи</rt-arrow-anchor>
        <div class="sp-t-1">
        <rt-arrow-anchor>Мониторинг и управление ИБ</rt-arrow-anchor>
        </div>
        <div class="sp-t-1">
        <rt-arrow-anchor>Единая платформа сервисов безопасности</rt-arrow-anchor>
        </div>

      </template>
      <template slot='footer'>
        <rt-button class='rt-button-md--is-block' color='orange'>Заказать</rt-button>
      </template>
      <template slot='image'><img src='https://static-cdn.rt.ru/sites/default/files/img/ui-kit-demo/light.png' alt=''></template>
      <template slot='image-x2'><img src='https://static-cdn.rt.ru/sites/default/files/img/ui-kit-demo/light-2x.png' alt=''></template>
      <template slot='image-tablet'><img src='https://static-cdn.rt.ru/sites/default/files/img/ui-kit-demo/light-2x.png' alt=''>
      </template>
      <template slot='image-mobile'><img src='https://static-cdn.rt.ru/sites/default/files/img/ui-kit-demo/light-2x.png' alt=''>
      </template>
    </rt-jumbotron>

    <pre-code text="<rt-jumbotron background='dark-slate' color='white' description-color='white'>
      <template slot='header'>
        <p class='rt-font-label-uppercase rt-font-label color-white07'>ВИДЕОСЕРВИС WINK</p>
      </template>


      <template slot='label'>Эксклюзивный игровой комплект</template>
      <template slot='description'>Здесь вы можете приобрести эксклюзивные комплекты в кредит.</template>

      <template slot='footer'>
        <rt-button class='rt-button-md--is-block' color='orange'>Заказать</rt-button>
      </template>
      <template slot='image'><img src='https://static-cdn.rt.ru/sites/default/files/img/ui-kit-demo/dark.png' alt=''></template>
      <template slot='image-x2'><img src='https://static-cdn.rt.ru/sites/default/files/img/ui-kit-demo/dark-2x.png' alt=''></template>
      <template slot='image-tablet'><img src='https://static-cdn.rt.ru/sites/default/files/img/ui-kit-demo/dark-2x.png' alt=''>
      </template>
      <template slot='image-mobile'><img src='https://static-cdn.rt.ru/sites/default/files/img/ui-kit-demo/dark-2x.png' alt=''>
      </template>
    </rt-jumbotron>"></pre-code>
    <pre-code text="<rt-jumbotron background='purple-button-active' color='white' description-color='white'>
      <template slot='header'>
        <img src='https://static-cdn.rt.ru/sites/default/files/img/ui-kit-demo/wink-white.svg' alt='' width='126'>
      </template>
      <template slot='tablet-header'>
        <img src='https://static-cdn.rt.ru/sites/default/files/img/ui-kit-demo/wink-white.png' alt='' width='103' height='32'>
      </template>
      <template slot='mobile-header'>
        <img src='https://static-cdn.rt.ru/sites/default/files/img/ui-kit-demo/wink-white.png' alt='' width='103' height='32' >
      </template>
      <template slot='label'>Эксклюзивный игровой комплект в кредит</template>
      <template slot='footer'>
        <rt-button class='rt-button-md--is-block' color='orange'>Заказать</rt-button>
      </template>
      <template slot='image'><img src='https://static-cdn.rt.ru/sites/default/files/img/ui-kit-demo/purple.png' alt=''></template>
      <template slot='image-x2'><img src='https://static-cdn.rt.ru/sites/default/files/img/ui-kit-demo/purple-2x.png' alt=''></template>
      <template slot='image-tablet'><img src='https://static-cdn.rt.ru/sites/default/files/img/ui-kit-demo/purple-2x.png' alt=''>
      </template>
      <template slot='image-mobile'><img src='https://static-cdn.rt.ru/sites/default/files/img/ui-kit-demo/purple-2x.png' alt=''>
      </template>
    </rt-jumbotron>"></pre-code>

    <pre-code text="<rt-jumbotron background='orange' color='white' description-color='white'>

      <template slot='label'>Эксклюзивный игровой комплект</template>
      <template slot='description'>Здесь вы можете приобрести эксклюзивные комплекты в кредит.</template>
      <template slot='body-html'><rt-price :bright='true' :v2='true' :is-option='true' :value='1100' :only-price='true'/></template>

      <template slot='footer'>
        <rt-button class='rt-button-md--is-block' :bright='true' color='full-white'>Заказать</rt-button>
      </template>
      <template slot='image'><img src='https://static-cdn.rt.ru/sites/default/files/img/ui-kit-demo/orange.png' alt=''></template>
      <template slot='image-x2'><img src='https://static-cdn.rt.ru/sites/default/files/img/ui-kit-demo/orange-2x.png' alt=''></template>
      <template slot='image-tablet'><img src='https://static-cdn.rt.ru/sites/default/files/img/ui-kit-demo/orange-2x.png' alt=''>
      </template>
      <template slot='image-mobile'><img src='https://static-cdn.rt.ru/sites/default/files/img/ui-kit-demo/orange-2x.png' alt=''>
      </template>
    </rt-jumbotron>"></pre-code>

    <div class="rt-container rt-space-top25">
      <rt-col size="12">
        <documentation-builder :json="documentation" type="components"/>
      </rt-col>
    </div>
  </div>
</template>

<script>

import AppTariffCarsIcons from "./TariffCardIcons.vue";
import AppTariffCarsText from "./TariffCardText.vue";

const componentsList = {};
export default {
  name: "AppJumbotron",
  components: componentsList,
  data: () => ({
    documentation: {}
  }),
  mounted() {
    // this.documentation = documentation;
  },
  created() {
  },
  methods: {}
};
</script>

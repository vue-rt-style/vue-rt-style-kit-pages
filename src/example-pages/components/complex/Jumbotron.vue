<template>
  <div class="">
    <div class="rt-container">

      <div class="app-content rt-col-12 rt-col-md-3">
        <div class="app-title">
          <div class="row"><h1 class="rt-font-hero rt-col">Jumbotron</h1></div>
        </div>
      </div>
    </div>

    <pre-code  text="<rt-jumbotron :is-mini='true' background='main-color' flag-scroll-to-id='test' flag-background='orange'  color='white' description-color='main'>
      <template slot='flag-text'>Акция</template>
      <template slot='label'><p>Кибербезопасность <br>123 </p></template>
      <template slot='description'>Комплексные сервисы защиты цифровых систем</template>
      <template slot='anchor'><rt-arrow-anchor icon-color='white' scroll-to-id='idBanner'>Защита каналов связи</rt-arrow-anchor></template>
      <template slot='anchor'><rt-arrow-anchor icon-color='white' scroll-to-id='idBanner2'>Мониторинг и управление ИБ</rt-arrow-anchor></template>
      <template slot='anchor'><rt-arrow-anchor icon-color='white' scroll-to-id='idBanner3'>Единая платформа сервисов безопасности</rt-arrow-anchor></template>
      <template slot='image'><rt-img src='https://picsum.photos/5000/2000?getForId=10'
      ></rt-img></template>
    </rt-jumbotron>"></pre-code>

    <pre-code id="test" text="<rt-jumbotron id='idBanner' background='dark-slate' color='white' description-color='white'>
      <template slot='header'>
        <p class='rt-font-label-uppercase rt-font-label color-white07'>ВИДЕОСЕРВИС WINK</p>
      </template>


      <template slot='label'>Эксклюзивный игровой комплект</template>
      <template slot='description'>Здесь вы можете приобрести эксклюзивные комплекты в кредит.</template>

      <template slot='footer'>
        <rt-button class='rt-button-md--is-block' color='orange'>Заказать</rt-button>
      </template>

      <template slot='image'>
      <rt-img src='https://picsum.photos/5000/2000?getForId=101'
                                     x2-src='https://picsum.photos/5000/2000?getForId=103'
                                     td-src='https://rt-static.rt.ru/sites/default/files/img/ui-kit-demo/dark-2x.png'
                                     md-src='https://rt-static.rt.ru/sites/default/files/img/ui-kit-demo/dark-2x.png'
      ></rt-img>
      </template>
    </rt-jumbotron>"></pre-code>

    <pre-code text="<rt-jumbotron id='idBanner2' background='purple-button-active' color='white' description-color='white'>
      <template slot='header'>
        <img src='https://rt-static.rt.ru/sites/default/files/img/ui-kit-demo/wink-white.svg' alt='' width='126'>
      </template>
      <template slot='tablet-header'>
        <img src='https://rt-static.rt.ru/sites/default/files/img/ui-kit-demo/wink-white.png' alt='' width='103' height='32'>
      </template>
      <template slot='mobile-header'>
        <img src='https://rt-static.rt.ru/sites/default/files/img/ui-kit-demo/wink-white.png' alt='' width='103' height='32' >
      </template>
      <template slot='label'>Эксклюзивный игровой комплект в кредит</template>
      <template slot='footer'>
        <rt-button class='rt-button-md--is-block' color='orange'>Заказать</rt-button>
      </template>
      <template slot='image'>
      <rt-img src='https://picsum.photos/5000/2000?getForId=1030'
                                     x2-src='https://picsum.photos/5000/2000?getForId=1031'
      ></rt-img>
    </template>
    </rt-jumbotron>"></pre-code>

    <pre-code text="<rt-jumbotron id='idBanner3' background='orange' color='white' description-color='white'>

      <template slot='label'>Эксклюзивный игровой комплект</template>
      <template slot='description'>Здесь вы можете приобрести эксклюзивные комплекты в кредит.</template>
      <template slot='body-html'><rt-price :bright='true' :v2='true' :is-option='true' :value='1100' :only-price='true'/></template>

      <template slot='footer'>
        <rt-button class='rt-button-md--is-block' :bright='true' color='full-white'>Заказать</rt-button>
      </template>

      <template slot='image'>      <rt-img src='https://picsum.photos/5000/2000?getForId=1039'
                                     x2-src='https://picsum.photos/5000/2000?getForId=1032'></rt-img>

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
    documentation: {},
    imgs: []
  }),


  methods: {

  }
};
</script>

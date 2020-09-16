<template>
  <div class="">
    <div class="rt-container">

      <div class="app-content rt-col-12 rt-col-md-3">
        <div class="app-title">
          <div class="row"><h1 class="rt-font-hero rt-col">Jumbotron</h1></div>
        </div>
      </div>
    </div>
    <pre-code text="<rt-jumbotron background='purple' name='jumbotron-one'  :ga='{name:&quot;test1&quot;}'>
      <template slot='header'>
        <p class='rt-font-label rt-font-label-uppercase'>ВИДЕОСЕРВИС WINK</p>
      </template>
      <template slot='tablet-header'>
        <p class='rt-font-label rt-font-label-uppercase'>ВИДЕОСЕРВИС WINK</p>
      </template>
      <template slot='mobile-header'>
        <p class='rt-font-label rt-font-label-uppercase'>ВИДЕОСЕРВИС WINK</p>
      </template>
      <template slot='label'>Эксклюзивный игровой комплект в кредит</template>

      <template slot='body-html'>
        <p class='flex-start-center'>в рассрочку от
          <rt-price :bright='true' :value='750.2'  currency='руб.'/>
        </p>
      </template>
      <template slot='footer'>
        <rt-button class='rt-button-md--is-block' color='orange'>Заказать</rt-button>
      </template>
      <template slot='image'><img src='http://46.101.72.150/static/tmp/bannerImage.jpg' alt=''></template>
      <template slot='image-x2'><img src='http://46.101.72.150/static/tmp/bannerImage-x2.jpg' alt=''></template>
      <template slot='image-tablet'><img src='http://46.101.72.150/static/tmp/bannerImage-tablet.jpg' alt=''>
      </template>
      <template slot='image-mobile'><img src='http://46.101.72.150/static/tmp/bannerImage-mobile.jpg' alt=''>
      </template>

    </rt-jumbotron>"></pre-code>

    <pre-code text="<rt-jumbotron background='main-color' url='http://wink.rt.ru/'   :ga='{name: &quot;jumbotron-two&quot;}' ga-event-type='b2b'>
    <template slot='header'>
      <img src='https://wink.rt.ru/assets/fa4f2bd16b18b08e947d77d6b65e397e.svg' alt=''>
    </template>

    <template slot='label'>Эксклюзивный игровой комплект</template>

    <template slot='body-html'>
      <p class='flex-start-center'>Здесь вы можете приобрести эксклюзивные комплекты в кредит сейчас
      </p>
    </template>
    <template slot='footer'>
      <rt-button class='rt-button-md--is-block' color='orange'>Заказать</rt-button>
    </template>
    <template slot='image'><img src='https://cinema-vikonda.ru/uploads/film/media/2020-08/2445971516.jpg' alt=''></template>
    <template slot='image-x2'><img src='https://cinema-vikonda.ru/uploads/film/media/2020-08/2445971516.jpg' alt=''></template>
    <template slot='image-tablet'><img src='https://s26037.cdn.ngenix.net/imo/transform/profile=largebanner656x408/images/btctkmbmgcja9b9dnin0.jpg' alt=''>
    </template>
    <template slot='image-mobile'><img src='https://miro.medium.com/max/865/1*1KlsX3zkJ4DKPmcvTkYhQQ.jpeg' alt=''>
    </template>

  </rt-jumbotron>"></pre-code>
    <pre-code text="<rt-jumbotron background='gray' color='main' description-color='main05' >
	<template slot='label'>Игровой набор PS4</template>
	<template slot='description'>Здесь вы можете приобрести эксклюзивные комплекты в кредит на выгодных
		условиях.
	</template>
	<template slot='footer'>
		<rt-button class='rt-button-md--is-block' color='orange'>Заказать</rt-button>
	</template>
	<template slot='body-html'>
		<rt-price :value='750.2' :old-value='666.2234' currency='$'/>
	</template>
	<template slot='image'><img src='http://46.101.72.150/static/tmp/bannerImage.jpg' alt=''></template>
	<template slot='image-x2'><img src='http://46.101.72.150/static/tmp/bannerImage-x2.jpg' alt=''></template>
	<template slot='image-tablet'><img src='http://46.101.72.150/static/tmp/bannerImage-tablet.jpg' alt=''>
	</template>
	<template slot='image-mobile'><img src='http://46.101.72.150/static/tmp/bannerImage-mobile.jpg' alt=''>
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

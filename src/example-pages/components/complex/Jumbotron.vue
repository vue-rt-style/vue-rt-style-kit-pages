<template>
  <div class="">
    <div class="rt-container">

      <div class="app-content rt-col-12 rt-col-md-3">
        <div class="app-title">
          <div class="row"><h1 class="rt-font-hero rt-col">Jumbotron</h1></div>
        </div>
      </div>
    </div>
        <rt-jumbotron background="purple">
          <template slot='header'>
            <p>header</p>
          </template>
          <template slot='tablet-header'>
            <p>tablet</p>
          </template>
          <template slot='mobile-header'>
            <p>mobile header</p>
          </template>
          <template slot="label">Эксклюзивный игровой комплект Playstation</template>

          <template slot="body-html">
            <rt-price :bright="true" :value='750.2' :old-value='666.2234' currency='$'/>
          </template>
          <template slot="footer">
            <rt-button  class="rt-button-md--is-block" color="orange">Заказать</rt-button>
          </template>
          <template slot='image'><img src='http://46.101.72.150/static/tmp/bannerImage.jpg' alt=''></template>
          <template slot='image-x2'><img src='http://46.101.72.150/static/tmp/bannerImage-x2.jpg' alt=''></template>
          <template slot='image-tablet'><img src='http://46.101.72.150/static/tmp/bannerImage-tablet.jpg' alt=''>
          </template>
          <template slot='image-mobile'><img src='http://46.101.72.150/static/tmp/bannerImage-mobile.jpg' alt=''>
          </template>

        </rt-jumbotron>
    <rt-jumbotron background="gray" color="main" description-color="main05">
      <template slot='header'>
        <p>header</p>
      </template>
      <template slot='tablet-header'>
        <p>tablet</p>
      </template>
      <template slot='mobile-header'>
        <p>mobile header</p>
      </template>
      <template slot="label">Эксклюзивный игровой комплект Playstation</template>
      <template slot="description">Здесь вы можете приобрести эксклюзивные комплекты в кредит на выгодных
        условиях.
      </template>
      <template slot="footer">
        <rt-button  class="rt-button-md--is-block" color="orange">Заказать</rt-button>
      </template>
      <template slot='image'><img src='http://46.101.72.150/static/tmp/bannerImage.jpg' alt=''></template>
      <template slot='image-x2'><img src='http://46.101.72.150/static/tmp/bannerImage-x2.jpg' alt=''></template>
      <template slot='image-tablet'><img src='http://46.101.72.150/static/tmp/bannerImage-tablet.jpg' alt=''>
      </template>
      <template slot='image-mobile'><img src='http://46.101.72.150/static/tmp/bannerImage-mobile.jpg' alt=''>
      </template>

    </rt-jumbotron>
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

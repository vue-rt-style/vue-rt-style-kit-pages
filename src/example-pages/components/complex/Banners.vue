<template>
  <div>
    <div class="rt-container">
      <div class="grid-center"/>
      <div class="app-content rt-col-12 rt-col-md-3">
        <div class="app-title">
          <div class="row"><h1 class="rt-font-hero rt-col">Banners</h1></div>
        </div>
      </div>
    </div>
    <div class="sp-b-2">
    <rt-banner-v2>
      <rt-banner-item-v2>
        <template slot="header">
          <img src="http://46.101.72.150/static/tmp/headerbtc1460.svg" alt="">
        </template>
        <template slot="mobile-header">
          <img src="http://46.101.72.150/static/tmp/headerbtc1460.svg" height="32px" alt="">
        </template>
        <template slot="label">Легко подключить,<br> комфортно жить</template>
        <template slot="footer"><rt-button color="orange">Подробнее</rt-button></template>
        <template slot="image"><img src="http://46.101.72.150/static/tmp/bannerImage.jpg" alt=""></template>
        <template slot="image-x2"><img src="http://46.101.72.150/static/tmp/bannerImage-x2.jpg" alt=""></template>
      </rt-banner-item-v2>
      <rt-banner-item-v2 color-type="orange">
        <template slot="header">
          <img class="d-block" src="http://46.101.72.150/static/tmp/logowink.svg" alt="">
        </template>
        <template slot="mobile-header">
          <svg width="32" height="40" viewBox="0 0 32 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.8678 0.344238L0.182129 10.985L9.22389 19.9887L0.182129 28.9961L10.8678 39.6368L30.599 19.9887L10.8678 0.344238Z" fill="white"/>
          </svg>
        </template>
        <template slot="label">Разжигают страсть</template>
        <template slot="description">Абонемент «Киноман» Скидка на все фильмы и сериалы</template>
        <template slot="footer"><rt-button color="full-white" >Подробнее</rt-button></template>
        <template slot="image"><img src="http://46.101.72.150/static/tmp/bannerImageOrange.jpg" alt=""></template>
        <template slot="image-x2"><img src="http://46.101.72.150/static/tmp/bannerImageOrange-x2.jpg" alt=""></template>
      </rt-banner-item-v2>
      <rt-banner-item-v2>
        <template slot="label">Виртуальная АТС <br> и 1 000 минут бесплатно</template>
        <template slot="description">Соберите сами свой пакет фильмов и каналов.</template>
        <template slot="footer"><rt-button color="orange" >Подробнее</rt-button></template>
        <template slot="image"><img src="http://46.101.72.150/static/tmp/bannerImage.jpg" alt=""></template>
        <template slot="image-x2"><img src="http://46.101.72.150/static/tmp/bannerImage-x2.jpg" alt=""></template>
      </rt-banner-item-v2>
      <rt-banner-item-v2  color-type="dark-slate">
        <template slot="label">Не платите за лишнее</template>
        <template slot="description">Соберите сами свой пакет фильмов и каналов.</template>
        <template slot="footer"><rt-button color="orange" >Подробнее</rt-button></template>
        <template slot="image"><img src="http://46.101.72.150/static/tmp/bannerImageBlack.jpg" alt=""></template>
        <template slot="image-mobile"><img src="http://46.101.72.150/static/tmp/bannerImageBlack-mobile.jpg" alt=""></template>
        <template slot="image-x2"><img src="http://46.101.72.150/static/tmp/bannerImageBlack-2x.jpg" alt=""></template>
      </rt-banner-item-v2>
    </rt-banner-v2>
    </div>



    <div class="rt-container rt-space-top25">
      <documentation-builder :json="documentation" type="components"/>
    </div>
  </div>
</template>

<script>
  import documentation from "@vue-rt-style-kit-molecules-local/components/Banner/docs/index.json";
  import componentsList from "../../componentsList";
  // const componentsList = {};
  export default {
    name: "AppBanners",
    components: componentsList,
    data: () => ({
      documentation: {}
    }),
    mounted() {
      this.documentation = documentation;
    },
    created() {
    },
    methods: {}
  };
</script>

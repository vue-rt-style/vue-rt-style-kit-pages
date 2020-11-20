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
      <rt-banner-v2 name="test00">
        <rt-banner-item-v2 banner-name="test00" color-type='purple' ga-banner-name="это мой гребанный id"
                           :ga='{name:"Смотрим вместе"}'>
          <template slot='header'>
            <p class='tagline rt-font-label-uppercase rt-font-bold color-white05'>Это текст вместо лог!!о</p>
          </template>
          <template slot='mobile-header'>
            <img src='https://static-cdn.rt.ru/sites/default/files/img/ui-kit-demo/headerbtc1460.svg' height='32px'
                 alt=''>
          </template>
          <template slot='label'>Легко подключить,<br> комфортно жить</template>
          <template slot='footer'>
            <rt-button color='orange'>Подробнее</rt-button>
          </template>
          <template slot='image'>
            <rt-img src='https://static-cdn.rt.ru/sites/default/files/img/ui-kit-demo/12.jpg'
                    x2-src='https://static-cdn.rt.ru/sites/default/files/img/ui-kit-demo/12-x2.jpg' alt=''></rt-img>
          </template>
        </rt-banner-item-v2>
      </rt-banner-v2>
      <pre-code text="<rt-banner-v2>
	<rt-banner-item-v2 color-type='purple' :ga='{name:&quot;Смотрим вместе&quot;,section:&quot;2&quot;}'>
		<template slot='header'>
			<p class='tagline rt-font-label-uppercase rt-font-bold color-white05'>Это текст вместо лого</p>
		</template>
		<template slot='mobile-header'>
			<img src='https://static-cdn.rt.ru/sites/default/files/img/ui-kit-demo/headerbtc1460.svg' height='32px' alt=''>
		</template>
		<template slot='label'>Легко подключить,<br> комфортно жить</template>
		<template slot='footer'><rt-button color='orange'>Подробнее</rt-button></template>

		<template slot='image'><rt-img src='https://static-cdn.rt.ru/sites/default/files/img/ui-kit-demo/12.jpg' x2-src='https://static-cdn.rt.ru/sites/default/files/img/ui-kit-demo/12-x2.jpg' alt=''></rt-img></template>
	</rt-banner-item-v2>
</rt-banner-v2>"/>

    </div>

    <rt-banner :is-fullscreen-image="true" content-height="500px" content-mobile-height='500px'
               content-tablet-height='500px'>
      <rt-banner-item :is-white-color="true"
                      background-image="/static/images/B2B/ArtboardCopy.png"
                      background-color="main-color"
                      :half-height-image="true"
                      content-mobile-min-height='500px'
                      content-tablet-height='500px'
                      content-tablet-min-height='500px'
                      content-mobile-height='500px'
                      content-height='600px'
                      content-min-height='500px'>
        <p class="rt-font-bold rt-font-h2">Виртуальная АТС</p>
        <p class="rt-font-paragraph rt-space-bottom05-half">Ни одного пропущенного звонка, работает без офиса и
          дополнительного оборудования, из любой точки мира</p>
        <div id="test" class="rt-space-bottom25">
          <rt-button class="rt-button-orange">Оставить заявку</rt-button>
        </div>
        <rt-price :b2b-price='true'
                  :value="1.57"
                  currency='₽'
                  :is-option="true"
                  time-interval="в минуту"
                  class='color-white'
                  :show-float='true'
                  :is-time-interval-bottom="true"
                  color-value="white"/>
        <div class="rt-md-space-bottom"/>
      </rt-banner-item>
    </rt-banner>


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

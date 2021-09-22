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
<!--      -->
<!--      <pre-code text="<rt-banner-v2>-->
<!--	<rt-banner-item-v2 color-type='purple' :ga='{name:&quot;Смотрим вместе&quot;,section:&quot;2&quot;}'>-->
<!--		<template slot='header'>-->
<!--			<p class='tagline rt-font-label-uppercase rt-font-bold color-white05'>Это текст вместо лого</p>-->
<!--		</template>-->
<!--		<template slot='mobile-header'>-->
<!--			<img src='https://rt-static.rt.ru/sites/default/files/img/ui-kit-demo/headerbtc1460.svg' height='32px' alt=''>-->
<!--		</template>-->
<!--		<template slot='label'>Легко подключить,<br> комфортно жить</template>-->
<!--		<template slot='footer'><rt-button color='orange'>Подробнее</rt-button></template>-->

<!--		<template slot='image'><rt-img src='https://rt-static.rt.ru/sites/default/files/img/ui-kit-demo/12.jpg' x2-src='https://rt-static.rt.ru/sites/default/files/img/ui-kit-demo/12-x2.jpg' alt=''></rt-img></template>-->
<!--	</rt-banner-item-v2>-->
<!--</rt-banner-v2>"/>-->
      <pre-code text="<rt-banner-v2 name='test9393' >
      <rt-banner-item-v2 banner-name='test9393' :ga='{name:&quot;Смотрим вместе&quot;,section:&quot;2&quot;}' :show-url-on-tablet='true' url='http://rt.ru'>
        <template slot='header'>
          <img src='https://rt-static.rt.ru/sites/default/files/img/ui-kit-demo/headerbtc1460.svg' alt=''>
        </template>
        <template slot='mobile-header'>
          <img src='https://rt-static.rt.ru/sites/default/files/img/ui-kit-demo/headerbtc1460.svg' height='32px' alt=''>
        </template>
        <template slot='label'>Легко подключить,<br> комфортно жить</template>
        <template slot='footer'><rt-button color='orange'>Подробнее</rt-button></template>
        <template slot='image'>
        <rt-img src='https://rt-static.rt.ru/sites/default/files/img/ui-kit-demo/bannerImage.jpg'
                x2-src='https://rt-static.rt.ru/sites/default/files/img/ui-kit-demo/bannerImage-x2.jpg'
                td-src='https://rt-static.rt.ru/sites/default/files/img/ui-kit-demo/bannerImage-tablet.jpg'
                md-src='https://rt-static.rt.ru/sites/default/files/img/ui-kit-demo/bannerImage-mobile.jpg' alt=''></rt-img>
        </template>

      </rt-banner-item-v2>
      <rt-banner-item-v2 :ga='{name:&quot;test1&quot;,section:&quot;2&quot;}' ga-banner-name='banner_first' color-type='red' banner-name='test9393' :is-active='true' :show-url-on-desktop='true' url='http://rt.ru'>
        <template slot='header'>
          <img class='d-block' src='https://rt-static.rt.ru/sites/default/files/img/ui-kit-demo/logowink.svg' alt=''>
        </template>
        <template slot='mobile-header'>
          <svg width='32' height='40' viewBox='0 0 32 40' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path fill-rule='evenodd' clip-rule='evenodd' d='M10.8678 0.344238L0.182129 10.985L9.22389 19.9887L0.182129 28.9961L10.8678 39.6368L30.599 19.9887L10.8678 0.344238Z' fill='white'/>
          </svg>
        </template>
        <template slot='label'>Разжигают страсть</template>
        <template slot='description'>Абонемент «Киноман» Скидка на все фильмы и сериалы </template>
        <template slot='footer'><rt-button color='full-white' >Подробнее</rt-button></template>
        <template slot='image'>
        <rt-img src='http://rt-static-cdn.rt.ru/sites/default/files/rti_lazy_files/b2c/obmen_filma_new_1480x840__proj.jpg'
                x2-src='http://rt-static-cdn.rt.ru/sites/default/files/rti_lazy_files/b2c/obmen_filma_new_1480x840__proj.jpg'
                ></rt-img>
        </template>
      </rt-banner-item-v2>
      <rt-banner-item-v2 :ga='{name:&quot;test1&quot;,section:&quot;2&quot;}' ga-banner-name='banner_ulala' banner-name='test9393' url='http://rt.ru'>
        <template slot='label'>Виртуа!!льная АТС <br> и 1 000 минут бесплатно</template>
        <template slot='description'>Соберите сами свой пакет фильмов и каналов.</template>
        <template slot='footer'><a href='#'><rt-button  color='orange' >Подробнее</rt-button></a></template>
        <template slot='image'>
        <rt-img src='https://rt-static.rt.ru/sites/default/files/rti_lazy_files/marusya_1480x840__proj.jpg'
                x2-src='https://rt-static.rt.ru/sites/default/files/rti_lazy_files/marusya_1480x840__proj.jpg'
                td-src='https://rt-static.rt.ru/sites/default/files/rti_lazy_files/marusya_1480x840__proj.jpg'
                md-src='https://rt-static.rt.ru/sites/default/files/rti_lazy_files/marusya_1480x840__proj.jpg' alt=''></rt-img>
        </template>
      </rt-banner-item-v2>
      <rt-banner-item-v2  color-type='dark-slate' banner-name='test9393'>
        <template slot='label'>Не платите за лишне!!е</template>
        <template slot='description'>Соберите сами свой пакет фильмов и каналов.</template>
        <template slot='footer'><rt-button  color='orange' >Подробнее</rt-button></template>
        <template slot='image'>
        <rt-img src='https://rt-static.rt.ru/sites/default/files/img/ui-kit-demo/bannerImageBlack.jpg'
                x2-src='https://rt-static.rt.ru/sites/default/files/img/ui-kit-demo/bannerImageBlack-2x.jpg'
                md-src='https://rt-static.rt.ru/sites/default/files/img/ui-kit-demo/bannerImageBlack-mobile.jpg' alt=''></rt-img>
        </template>
      </rt-banner-item-v2>
      </rt-banner-v2>"></pre-code>

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

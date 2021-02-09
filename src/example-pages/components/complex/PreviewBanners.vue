<template>
  <div>
    <div class="rt-container">
      <div class="grid-center"/>
      <div class="app-content rt-col-12 rt-col-md-3">
        <div class="app-title">
          <div class="row"><h1 class="rt-font-hero rt-col">Preview banner</h1></div>
        </div>
      </div>
    </div>
    <div class="sp-b-2">

      <pre-code text='<rt-preview-banner>
        <template slot="image">
          <rt-img src="https://vue-rt-style.github.io/vue-rt-style-kit-pages/static/example-images/previewImage/previewImage.png"
                  x2-src="https://vue-rt-style.github.io/vue-rt-style-kit-pages/static/example-images/previewImage/previewImage2x.png"
                  td-src="https://vue-rt-style.github.io/vue-rt-style-kit-pages/static/example-images/previewImage/previewImage-td.png"
                  md-src="https://vue-rt-style.github.io/vue-rt-style-kit-pages/static/example-images/previewImage/previewImage-md.png"
          ></rt-img>
        </template>
        <template slot="date"><div class="d-flex flex-v-center"><rt-system-icons name="calendar"></rt-system-icons><span class="sp-l-0-2">1  мая по 31 декабря 2020 г.</span></div></template>
        <template slot="label">
          <h3 class="rt-font-h3">Заголовок в одну строку</h3>
        </template>
        <template slot="content">
          <p class="rt-font-small-paragraph">Lorem ipsum — классический текст-«рыба». Является искажённым отрывком из философского трактата Марка Туллия Цицерона «О пределах добра и зла».</p>
        </template>
        <template slot="footer">
          <rt-button color="orange">Узнать подробности</rt-button>
        </template>
      </rt-preview-banner>'></pre-code>
    </div>

    <div class="rt-container rt-space-top25">
    </div>
  </div>
</template>

<script>
  // import documentation from "@vue-rt-style-kit-molecules-local/components/Banner/docs/index.json";
  import componentsList from "../../componentsList";
  // const componentsList = {};
  export default {
    name: "AppBanners",
    components: componentsList,
    data: () => ({
      documentation: {}
    }),


    methods: {
    }
  };
</script>

<template>
  <div class="rt-container">
    <div class="app-content rt-col-12 rt-col-md-3">
      <div class="app-title">
        <h1 class="rt-font-hero">
          Tabs Slider
        </h1>
      </div>
        <rt-row class="app-row">
          <rt-col size="12">
            <rt-tabs-slider name="tabs-slider-1">
              <rt-tabs-slider-item label="Заголовок пункта 1" tabs-slider-name="tabs-slider-1">
                <template slot="content">
                  <p class="rt-font-h2">Заголовок блока</p>
                  <p class="sp-t-2">На краю дороги стоял дуб. Он был, вероятно, в десять раз старше берез,
                    составлявших лес, в десять раз толще и в два раза выше каждой березы.</p>
                </template>
                <template slot="image">
                  <img src="https://m1.35photo.pro/photos_main/1005/5025612.jpg"/>
                </template>
              </rt-tabs-slider-item>
            </rt-tabs-slider>
            <rt-tabs-slider-item  label="Заголовок пункта 2" tabs-slider-name="tabs-slider-1">
              <template slot="content">
                <p class="rt-font-h2">Заголовок блока 2</p>
                <p class="sp-t-2">На краю дороги стоял дуб. Он был, вероятно, в десять раз старше берез,
                  составлявших лес, в десять раз толще и в два раза выше каждой березы.</p>
              </template>
              <template slot="image">
                <img src="https://m1.35photo.pro/photos_main/1007/5039020.jpg"/>
              </template>
            </rt-tabs-slider-item>
            <rt-tabs-slider-item  label="Заголовок пункта 3" tabs-slider-name="tabs-slider-1">
              <template slot="content">
                <p class="rt-font-h2">Заголовок блока 3</p>
                <p class="sp-t-2">На краю дороги стоял дуб. Он был, вероятно, в десять раз старше берез,
                  составлявших лес, в десять раз толще и в два раза выше каждой березы.</p>
              </template>
              <template slot="image">
                <img src="https://m1.35photo.pro/photos_main/1005/5026518.jpg"/>
              </template>
            </rt-tabs-slider-item>
            <rt-tabs-slider-item  label="Заголовок пункта 4" tabs-slider-name="tabs-slider-1">
              <template slot="content">
                <p class="rt-font-h2">Заголовок блока 4</p>
                <p class="sp-t-2">На краю дороги стоял дуб. Он был, вероятно, в десять раз старше берез,
                  составлявших лес, в десять раз толще и в два раза выше каждой березы.</p>
              </template>
              <template slot="image">
                <img src="https://m1.35photo.pro/photos_main/1000/5004154.jpg"/>
              </template>
            </rt-tabs-slider-item>
            <rt-tabs-slider-item  label="Заголовок пункта 5" tabs-slider-name="tabs-slider-1">
              <template slot="content">
                <p class="rt-font-h2">Заголовок блока 5</p>
                <p class="sp-t-2">На краю дороги стоял дуб. Он был, вероятно, в десять раз старше берез,
                  составлявших лес, в десять раз толще и в два раза выше каждой березы.</p>
              </template>
              <template slot="image">
                <img src="https://m1.35photo.pro/photos_main/999/4999134.jpg"/>
              </template>
            </rt-tabs-slider-item>
            <rt-tabs-slider-item  label="Заголовок пункта 6" tabs-slider-name="tabs-slider-1">
              <template slot="content">
                <p class="rt-font-h2">Заголовок блока 6</p>
                <p class="sp-t-2">На краю дороги стоял дуб. Он был, вероятно, в десять раз старше берез,
                  составлявших лес, в десять раз толще и в два раза выше каждой березы.</p>
              </template>
              <template slot="image">
                <img src="https://m1.35photo.pro/photos_main/995/4977757.jpg"/>
              </template>
            </rt-tabs-slider-item>
            <p>123</p>
            <p>123</p>
            <p>123</p>
            <p>123</p>
            <p>123</p>
            <p>123</p>
            <p>123</p>
            <p>123</p>
            <p>123</p>
            <p>123</p>
            <p>123</p>
            <p>123</p>
            <p>123</p>
            <p>123</p>
            <p>123</p>
            <p>123</p>
            <p>123</p>
            <p>123</p>
            <p>123</p>
            <p>123</p>
            <p>123</p>
            <p>123</p>
            <p>123</p>
            <p>123</p>
            <p>123</p>
            <p>123</p>
            <p>123</p>
            <p>123</p>
            <p>123</p>
            <p>123</p>
            <p>123</p>
            <p>123</p>
            <p>123</p>
            <p>123</p>
            <p>123</p>
            <p>123</p>
            <p>123</p>
            <p>123</p>
            <p>123</p>
            <p>123</p>
            <p>123</p>
            <p>123</p>
            <p>123</p>
            <p>123</p>
            <p>123</p>
            <p>123</p>
            <p>123</p>
            <p>123</p>
            <p>123</p>
            <p>123</p>
            <p>123</p>
            <p>123</p>
            <p>123</p>
            <p>123</p>
            <p>123</p>
            <p>123</p>
          </rt-col>
        </rt-row>
    </div>
    <documentation-builder :json="documentation" type="components"/>
  </div>
</template>


<script>
// import documentation from "@vue-rt-style-kit-molecules-local/components/Tabs/docs/index.json";
// import componentsList from "../../componentsList";

export default {
  name: "AppTabs",
  data: () => ({
    documentation: {}
  }),
  mounted() {
    // this.documentation = documentation;
  },
  methods: {
    openPopup() {
      document.querySelector('.rtb-popup-wrapper').classList.add('rtb-popup-wrapper--active')
    }
  }
};
</script>

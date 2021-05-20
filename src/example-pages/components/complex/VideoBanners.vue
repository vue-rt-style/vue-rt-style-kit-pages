<template>
  <div>
    <div class="rt-container">
      <div class="grid-center"/>
      <div class="app-content rt-col-12 rt-col-md-3">
        <div class="app-title">
          <div class="row"><h1 class="rt-font-hero rt-col">Video Banners</h1></div>
        </div>
      </div>
    </div>
    <div>
      <pre-code text='
      <rt-video-banner preload-image="https://www.apple.com/v/airpods-max/c/images/overview/design_mesh__cleb6oo85bo2_xlarge.jpg"
      src="https://www.apple.com/105/media/us/airpods-max/2020/996b980b-3131-44f1-af6c-fe72f9b3bfb5/anim/supercut/large_2x.mp4">
        <template slot="content">
          <div class="md-color-block--dark-slate md-sp-t-1-2 md-sp-b-2 flex-fill">
          <div class="rt-container">
            <rt-col>
              <rt-row>
                <rt-col :size="5" :tablet-size="3" :mobile-size="3" class="color-white">
                  <p class="sp-b-0-4 rt-font-label rt-font-label-uppercase color-white05">Умный дом</p>
                  <p class="font-h1 sp-b-0-4">Легко подключить, комфортно жить</p>
                  <p class="font-t-l sp-b-1-2">Готовые решения для умного дома</p>
                  <rt-button color="orange" class="rt-button-md--is-block">Кнопка</rt-button>
                </rt-col>
              </rt-row>
            </rt-col>
          </div>
          </div>
        </template>
      </rt-video-banner>'></pre-code>
      <div class="sp-b-5"></div>
      <div class="sp-b-5"></div>
      <div class="sp-b-5"></div>
      <div class="sp-b-5"></div>
      <div class="sp-b-5"></div>
      <div class="sp-b-5"></div>
      <pre-code text='<rt-video-banner preload-image="https://www.apple.com/v/airpods-max/c/images/overview/design_mesh__cleb6oo85bo2_xlarge.jpg" mobile-image="https://www.apple.com/ru/iphone-12/images/overview/accessories/magsafe__emhukwz2mhiu_large_2x.jpg" src="https://www.apple.com/105/media/ww/iphone-12/2020/7f5b7de7-9f8c-41eb-bf3b-f294773108e6/anim/hero-purple/non-5g/large_2x.mp4">
        <template slot="content">
          <div class="md-color-block--dark-slate md-sp-t-1-2 md-sp-b-2 flex-fill">
            <div class="rt-container">
              <rt-col>
                <rt-row>
                  <rt-col :size="5" :tablet-size="3" :mobile-size="3" class="color-white">
                    <p class="sp-b-0-4 rt-font-label rt-font-label-uppercase color-white05">Умный дом</p>
                    <p class="font-h1 sp-b-0-4">Легко подключить, комфортно жить</p>
                    <p class="font-t-l sp-b-1-2">Готовые решения для умного дома</p>
                    <rt-button color="orange" class="rt-button-md--is-block">Кнопка</rt-button>
                  </rt-col>
                </rt-row>
              </rt-col>
            </div>
          </div>
        </template>
      </rt-video-banner>'></pre-code>
      <pre-code text='<rt-video-banner
      preload-image="https://www.apple.com/v/airpods-max/c/images/overview/design_mesh__cleb6oo85bo2_xlarge.jpg"
      full-src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" src="https://www.apple.com/105/media/us/imac-24/2021/5e004d75-3ad6-4bb9-ab59-41f891fc52f0/anim/colors-hero/large_2x.mp4">
        <template slot="content">
          <div class="md-color-block--dark-slate md-sp-t-1-2 md-sp-b-2 flex-fill">
            <div class="rt-container">
              <rt-col>
                <rt-row>
                  <rt-col :size="5" :tablet-size="3" :mobile-size="3" class="color-white">
                    <p class="sp-b-0-4 rt-font-label rt-font-label-uppercase color-white05">Умный дом</p>
                    <p class="font-h1 sp-b-0-4">Легко подключить, комфортно жить</p>
                    <p class="font-t-l sp-b-1-2">Готовые решения для умного дома</p>
                    <rt-button color="orange" class="rt-button-md--is-block">Кнопка</rt-button>
                  </rt-col>
                </rt-row>
              </rt-col>
            </div>
          </div>
        </template>
      </rt-video-banner>'></pre-code>
      <div class="sp-b-5"></div>
      <div class="sp-b-5"></div>
      <div class="sp-b-5"></div>
      <div class="sp-b-5"></div>
      <div class="sp-b-5"></div>
      <div class="sp-b-5"></div>
      <div class="sp-b-5"></div>
      <div class="sp-b-5"></div>
      <div class="sp-b-5"></div>
      <div class="sp-b-5"></div>
      <div class="sp-b-5"></div>
      <div class="sp-b-5"></div>
      <div class="sp-b-5"></div>
      <div class="sp-b-5"></div>
    </div>
    <div class="rt-container rt-space-top25">
      <documentation-builder :json="documentation" type="components"/>
    </div>
  </div>
</template>

<script>
import documentation from "@vue-rt-style-kit-molecules-local/components/VideoBanner/docs/index.json";
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

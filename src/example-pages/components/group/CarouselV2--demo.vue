<template>
  <div>
    <div class="rt-container">
      <div class="app-content rt-col-12 rt-col-md-3">
        <div class="app-title"><h1 class="rt-font-hero">CarouselV2</h1></div>
      </div>
    </div>

    <div class="sp-v-2">
      <div class="rt-container">
        <div class="rt-col-12 rt-col-md-3 sp-b-2">
          <h3>Простой вывод</h3>
        </div>
        <div class="rt-col-12 rt-space-bottom3 is-b2c">
          <rt-row>
            <rt-col size="2" tablet-size="3" mobile-size="3" mobile-top="20" tablet-top="12">
              <p>background</p>
              <select v-model="background">
                <option v-for="i in colors" :value="i">{{ i }}</option>
              </select>
            </rt-col>
            <rt-col size="2" tablet-size="3" mobile-size="3" mobile-top="20" tablet-top="12">
              <p>shadowColor</p>
              <select v-model="shadowColor">
                <option v-for="i in colors" :value="i">{{ i }}</option>
              </select>
            </rt-col>
            <rt-col size="2" tablet-size="3" mobile-size="3" mobile-top="20" tablet-top="12">
              <p>show shadow</p>
              <input type="checkbox" v-model="showShadow">
            </rt-col>
            <rt-col size="2" tablet-size="3" mobile-size="3" mobile-top="20" tablet-top="12">
              <p>infinite scroll</p>
              <input type="checkbox" v-model="infinitescroll">
            </rt-col>
            <rt-col size="2" tablet-size="3" mobile-size="3" mobile-top="20" tablet-top="12">
              <p>blur not active</p>
              <input type="checkbox" v-model="blurnotactive">
            </rt-col>
            <rt-col size="2" tablet-size="3" mobile-size="3" mobile-top="20" tablet-top="12">
              <p>scrollable on desktop</p>
              <input type="checkbox" v-model="scrollableondesktop">
            </rt-col>
            <rt-col size="2" tablet-size="3" mobile-size="3" mobile-top="20" tablet-top="12">
              <p>col in row</p>
              <input type="number" v-model="colInRow">
            </rt-col>
            <rt-col size="2" tablet-size="3" mobile-size="3" mobile-top="20" tablet-top="12">
              <p>laptop col in row</p>
              <input type="number" v-model="laptopColInRow">
            </rt-col>
            <rt-col size="2" tablet-size="3" mobile-size="3" mobile-top="20" tablet-top="12">
              <p>active index</p>
              <input type="number" v-model="activeIndex">
            </rt-col>
          </rt-row>
        </div>
      </div>
      <rt-carousel-v3 :active-index-init="activeIndex" :background="background" :shadow-color="shadowColor" :show-shadow="showShadow" :infinite-scroll="infinitescroll" :blur-not-active="blurnotactive" :col-in-row="colInRow" :laptop-col-in-row="laptopColInRow" :scrollable-on-desktop="scrollableondesktop">
        <pre-timeout v-for="i in 10" :time="i*1000" :key="i">
        <rt-carousel-slide-v3>
          <div>
          <div
              style="
              background-size: cover;
              border-radius: 8px;
              height: 300px;
              position: relative;
            "
              :style="`background: url(https://picsum.photos/500/300?getForId=${i})`">
            <div
                style="
                background-color: black;
                color: white;
                position: absolute;
                bottom: 0;
                right: 0;
                padding: 0 10px;
              "
                v-text="i"/>
          </div>

          </div>
        </rt-carousel-slide-v3>
        </pre-timeout>
      </rt-carousel-v3>
      <rt-carousel-v3 :background="background" :shadow-color="shadowColor" :show-shadow="showShadow" :infinite-scroll="infinitescroll" :blur-not-active="blurnotactive" :scrollable-on-desktop="scrollableondesktop">
          <rt-carousel-slide-v3 v-for="i in 10" :time="i*1000" :key="i">
            <div>
              <div
                  style="
              background-size: cover;
              border-radius: 8px;
              height: 300px;
              position: relative;
            "
                  :style="`background: url(https://picsum.photos/500/300?getForId=${i})`">
                <div
                    style="
                background-color: black;
                color: white;
                position: absolute;
                bottom: 0;
                right: 0;
                padding: 0 10px;
              "
                    v-text="i"/>
              </div>

            </div>
          </rt-carousel-slide-v3>
      </rt-carousel-v3>
<!--      <rt-carousel-v2>-->
<!--        <rt-carousel-slide-v2-->
<!--          v-for="i in 7"-->
<!--          :key="i">-->
<!--          <div-->
<!--            style="-->
<!--              background-size: cover;-->
<!--              border-radius: 8px;-->
<!--              height: 300px;-->
<!--              position: relative;-->
<!--            "-->
<!--            :style="`background: url(https://picsum.photos/500/300?getForId=${i})`">-->
<!--            <div-->
<!--              style="-->
<!--                background-color: black;-->
<!--                color: white;-->
<!--                position: absolute;-->
<!--                bottom: 0;-->
<!--                right: 0;-->
<!--                padding: 0 10px;-->
<!--              "-->
<!--              v-text="i"/>-->
<!--          </div>-->
<!--        </rt-carousel-slide-v2>-->
<!--      </rt-carousel-v2>-->
    </div>

<!--    <div class="rt-container sp-v-2">-->
<!--      <div class="rt-col-12 rt-col-md-3 sp-b-2">-->
<!--        <h3>Отображение во вкладках</h3>-->
<!--      </div>-->
<!--      <div class="rt-col-12 rtk-fo__case">-->
<!--        <rt-tabs>-->
<!--          <template slot="navigation">-->
<!--            <rt-tabs-nav-item :remove-base-tag="true" name="one">Демо-карточки</rt-tabs-nav-item>-->
<!--            <rt-tabs-nav-item :remove-base-tag="true" name="two">С фоновым изображением</rt-tabs-nav-item>-->
<!--          </template>-->
<!--          <template slot="content">-->
<!--            <rt-tabs-content-item name="one">-->
<!--              <template v-if="loaderType !== 'spinner'">-->
<!--                config:-->
<!--                <input class="d-inline-block" style="width:20px" v-model="configLoaderRows" title="строк (rows)" type="number" />-->
<!--              </template>-->
<!--                waitTime: {{ waitTime / 1000 }}s-->
<!--              <rt-button @click="reCreate">reCreate list</rt-button>-->
<!--              {{ slidesList }}-->
<!--              <div class="area">-->
<!--                <div v-if="!slidesList.length" class="sk-contain">-->
<!--                  <div class="sk-card rt-carousel-slide-v2"-->
<!--                    v-for="(n,key) in configLoaderCount" :key="key"-->
<!--                  >-->
<!--                    <div class="rt-skeleton__card">-->
<!--                      <div class="rt-skeleton__card-top rt-skeleton__wave"></div>-->
<!--                      <div class="rt-skeleton__card-row"-->
<!--                        v-for="(row,rowKey) in configLoaderRows" :key="rowKey"-->
<!--                      >-->
<!--                        <i></i> <div><p class="rt-skeleton__wave"></p> <p></p></div>-->
<!--                      </div>-->
<!--                      <hr>-->
<!--                      <div class="rt-skeleton__card-row"><div><p></p> <p></p></div></div>-->
<!--                      <hr>-->
<!--                      <div class="rt-skeleton__card-end">-->
<!--                        <div class="rt-skeleton__card-price"></div> <div class="rt-skeleton__card-btn rt-skeleton__wave"></div> <div class="rt-skeleton__card-more"></div>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                </div>-->
<!--                <rt-carousel-v2-->
<!--                  v-else-->
<!--                  :class="[ slidesList > 4 ? 'carousel&#45;&#45;fit-slides' : null ]"-->
<!--                  :content-to-resize="['.cctv-sc__carousel-slide']"-->
<!--                  :scrollable-on-desktop="true"-->
<!--                  :container-me="false"-->
<!--                  :width="5"-->
<!--                >-->
<!--                  <rt-carousel-slide-v2-->
<!--                    v-for="i in slidesList"-->
<!--                    :key="i"-->
<!--                  >-->
<!--                    <div-->
<!--                      style="-->
<!--                        align-content: center;-->
<!--                        border-radius: 8px;-->
<!--                        border: 2px solid;-->
<!--                        display: flex;-->
<!--                        flex-flow: wrap;-->
<!--                        font-size: 150px;-->
<!--                        justify-content: center;-->
<!--                        height: 450px;-->
<!--                      "-->
<!--                      :style="`border-color: rgb(${177-i*0.6},${255/10+i},${i*15});`"-->
<!--                      v-text="i"/>-->
<!--                  </rt-carousel-slide-v2>-->
<!--                </rt-carousel-v2>-->
<!--              </div>-->
<!--            </rt-tabs-content-item>-->
<!--            <rt-tabs-content-item name="two">-->
<!--              <div class="sp-t-2-3">-->
<!--                <rt-carousel-v2-->
<!--                  :container-me="false"-->
<!--                >-->
<!--                  <rt-carousel-slide-v2-->
<!--                    v-for="i in 15"-->
<!--                    :key="i">-->
<!--                    <div-->
<!--                      style="-->
<!--                        background-size: cover;-->
<!--                        border-radius: 8px;-->
<!--                        height: 300px;-->
<!--                        position: relative;-->
<!--                      "-->
<!--                      :style="`background: url(https://picsum.photos/500/300?getForId=${i})`">-->
<!--                      <div-->
<!--                        style="-->
<!--                          background-color: black;-->
<!--                          color: white;-->
<!--                          position: absolute;-->
<!--                          bottom: 0;-->
<!--                          right: 0;-->
<!--                          padding: 0 10px;-->
<!--                        "-->
<!--                        v-text="i"/>-->
<!--                    </div>-->
<!--                  </rt-carousel-slide-v2>-->
<!--                </rt-carousel-v2>-->
<!--              </div>-->
<!--            </rt-tabs-content-item>-->
<!--          </template>-->
<!--        </rt-tabs>-->
<!--      </div>-->
<!--    </div>-->
<!--    -->
<!--    <div class="sp-v-2">-->
<!--      <div class="rt-container">-->
<!--        <div class="rt-col-12 rt-col-md-3 sp-b-1">-->
<!--          <h3>Переход к слайду</h3>-->
<!--        </div>-->
<!--        <div class="rt-col-12 rt-col-md-3 sp-b-2">-->
<!--          <p>Перейти к <input class="d-inline-block" style="width:20px" v-model="gotoSlideModel" title="Можно ввести номер слайда от 0 до 7" type="number" /> слайду</p>-->
<!--        </div>-->
<!--      </div>-->
<!--      <rt-carousel-v2 ref="carouselEl">-->
<!--        <rt-carousel-slide-v2-->
<!--          v-for="i in 7"-->
<!--          :key="i">-->
<!--          <div-->
<!--            style="-->
<!--              background-size: cover;-->
<!--              border-radius: 8px;-->
<!--              height: 300px;-->
<!--              position: relative;-->
<!--            "-->
<!--            :style="`background: url(https://picsum.photos/500/300?getForId=${i})`">-->
<!--            <div-->
<!--              style="-->
<!--                background-color: black;-->
<!--                color: white;-->
<!--                position: absolute;-->
<!--                bottom: 0;-->
<!--                right: 0;-->
<!--                padding: 0 10px;-->
<!--              "-->
<!--              v-text="i - 1"/>-->
<!--          </div>-->
<!--        </rt-carousel-slide-v2>-->
<!--      </rt-carousel-v2>-->
<!--    </div>-->

    <div class="rt-container">
<!--      <documentation-builder :json="docProps" type="props" class="sp-t-2-1" />-->
<!--      <documentation-builder :json="docEvents" type="events" class="sp-t-2-1" />-->
    </div>
  </div>
</template>

<script>
// import docProps from '@vue-rt-style-kit-molecules-local/components/CarouselV2/docs/props.json'
// import docEvents from '@vue-rt-style-kit-molecules-local/components/CarouselV2/docs/events.json'

const defaultLoaderType = 'spinner'
const skeletonLoader = {
  type: 'skeleton',
  count: 4,
  rows: 2
}

export default {
  data() {
    return {
      // docProps,
      // docEvents,
      activeIndex: 0,
      slidesList: [],
      colors: ["black", "black085", "black085-no-opacity", "purple", "purple-button-hover", "purple-button-active", "purple01", "purple005", "purple-low", "purple-high", "purple-night", "white", "red", "red-low", "red-high", "gray", "dark-blue", "dark-blue-low", "dark-blue-high", "light-blue", "light-blue-low", "light-blue-high", "yellow", "yellow-low", "yellow-high", "orange", "orange-night", "orange-button-hover", "orange-button-active", "orange-low", "orange-high", "orange-super", "pink", "pink-low", "pink-high", "green", "green-low", "green-high", "cool-grey", "cool-grey07", "cool-grey05", "cool-grey03", "cool-grey05-no-opacity", "purple-high05", "purple-high02", "orange-high05", "orange-high02", "orange03", "orange01", "orange005", "slate", "dark-slate", "burgundy", "white09", "white08", "white07", "white06", "white05", "white04", "white03", "white025", "white02", "white01", "white005", "main-color", "main-color09", "main-color08", "main-color07", "main-color06", "main-color05", "main-color04", "main-color03", "main-color02", "main-color01", "main-color007", "main-color005", "main-color003", "main-color09-no-opacity", "main-color085-no-opacity", "main-color07-no-opacity", "main-color05-no-opacity", "main-color03-no-opacity", "main-color01-no-opacity", "main-color007-no-opacity", "main-color005-no-opacity", "main-color003-no-opacity"],
      shadowColor: "white",
      showShadow: true,
      infinitescroll: false,
      blurnotactive: true,
      scrollableondesktop: true,
      background: "",
      loaderType: skeletonLoader,
      gotoSlideVal: 0,
      colInRow: 4 ,
      laptopColInRow: 4,
      waitTime: this.getRandomNumberFromRange(3,15)*1000,
    }
  },
  computed: {
    configLoaderCount: {
      get() {
        return this.loaderType !== defaultLoaderType ? this.loaderType.count : skeletonLoader.count
      },
      set(val) {
        this.loaderType.count = +val
      }
    },
    configLoaderRows: {
      get() {
        return this.loaderType !== defaultLoaderType ? this.loaderType.rows : skeletonLoader.rows
      },
      set(val) {
        this.loaderType.rows = +val
      }
    },
    gotoSlideModel: {
      get() {
        return this.gotoSlideVal
      },
      set(val) {
        this.gotoSlideVal = +val
        this.$refs.carouselEl.moveTo(this.gotoSlideVal)
      }
    }
  },
  created() {
    this.reCreate()
  },
  methods: {
    reCreate() {
      this.slidesList = []
      setTimeout(() => {
        this.slidesList = [...Array(this.getRandomNumberFromRange(2,17)).keys()]
      }, this.waitTime)
    },
    setLoaderType() {
      this.loaderType = this.loaderType === defaultLoaderType ? skeletonLoader : defaultLoaderType
    },
    getRandomNumberFromRange(min, max) {
      return Math.round(Math.random()*(max-min)+min,10)
    }
  }
}
</script>

<style lang="stylus">
// Кастомный скелет
.sk-contain
  margin 0 -10px -20px
  padding-bottom 20px
  overflow hidden
  flex-wrap nowrap
  display flex
.rt-container .sk-contain
  padding-left 0
  padding-right 0
.sk-card
  flex 0 0 338px
  padding 0 10px

// Перезаписываем Z-index при просмотре кода, чтобы карточки не налазили на редактор
.rt-code-viewer .rt-carousel,
.rt-code-viewer .rt-carousel__slide
  z-index auto

// RTRU-9801: @TODO - Вынести в стиль после всех согласований
@media (max-width 1024px)
  .rtk-fo__case .rt-carousel-slide-v2
    max-width 288px
  .rt-container .rtk-fo__case .rt-carousel-v2.rt-container
    margin 0 -20px
    width 100vw
@media (min-width 1025px)
  .rt-container .rtk-fo__case .rt-carousel-v2.rt-container
    margin 0 -10px
    padding 0
@media (max-width 359px)
  .rtk-fo__case .rt-carousel-v2:not(.rt-carousel--fit-slides) .rt-carousel-slide-v2
    max-width 252px
@media (min-width 360px) and (max-width 1279px)
  .rtk-fo__case .rt-carousel-v2:not(.rt-carousel--fit-slides) .rt-carousel-slide-v2
    max-width 316px
@media (min-width 1025px) and (max-width 1279px)
  .rtk-fo__case .rt-carousel-v2.rt-carousel--fit-slides .rt-carousel-slide-v2
    max-width 352px
@media (min-width 1025px) and (max-width 1366px)
  .rtk-fo__case .rt-carousel-slide-v2--5
    flex 0 0 400px
    max-width initial
@media (max-width 1279px)
  .rtk-fo__case .rt-carousel-slide-v2--5
    width 352px!important
    flex-basis 352px!important
@media (min-width 1280px)
  .rtk-fo__case .rt-carousel-v2:not(.rt-carousel--fit-slides) .rt-carousel-slide-v2
    max-width 336px
@media (min-width 1280px)
	.rtk-fo__case .rt-carousel-v2.rt-carousel--fit-slides .rt-carousel-slide-v2--1,
	.rtk-fo__case .rt-carousel-v2.rt-carousel--fit-slides .rt-carousel-slide-v2--2
    width 365px!important
    flex-basis 365px!important
@media (min-width 1367px)
  .rtk-fo__case .rt-carousel-v2.rt-carousel--fit-slides .rt-carousel-slide-v2--5
    max-width 336px
</style>

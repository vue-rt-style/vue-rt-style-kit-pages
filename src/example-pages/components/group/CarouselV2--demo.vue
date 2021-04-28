<template>
  <div>
    <div class="rt-container">
      <div class="app-content rt-col-12 rt-col-md-3">
        <div class="app-title"><h1 class="rt-font-hero">CarouselV2</h1></div>
      </div>
    </div>

    <section v-if="0" class="sp-v-2">
      <div class="rt-container">
        <div class="rt-col-12 rt-col-md-3 sp-b-2">
          <h3>Простой вывод</h3>
        </div>
      </div>
      <rt-carousel-v2>
        <rt-carousel-slide-v2
          v-for="i in 7"
          :key="i">
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
        </rt-carousel-slide-v2>
      </rt-carousel-v2>
    </section>

    <section v-if="0" class="rt-container sp-v-2">
      <div class="rt-col-12 rt-col-md-3 sp-b-2">
        <h3>Отображение во вкладках</h3>
      </div>
      <div class="rt-col-12 rtk-fo__case">
        <rt-tabs>
          <template slot="navigation">
            <rt-tabs-nav-item :remove-base-tag="true" name="one">Демо-карточки</rt-tabs-nav-item>
            <rt-tabs-nav-item :remove-base-tag="true" name="two">С фоновым изображением</rt-tabs-nav-item>
          </template>
          <template slot="content">
            <rt-tabs-content-item name="one">
              <template v-if="loaderType !== 'spinner'">
                config:
                <input class="d-inline-block" style="width:20px" v-model="configLoaderRows" title="строк (rows)" type="number" />
              </template>
                waitTime: {{ waitTime / 1000 }}s
              <rt-button @click="reCreate">reCreate list</rt-button>
              {{ slidesList }}
              <div class="area">
                <div v-if="!slidesList.length" class="sk-contain">
                  <div class="sk-card rt-carousel-slide-v2"
                    v-for="(n,key) in configLoaderCount" :key="key"
                  >
                    <div class="rt-skeleton__card">
                      <div class="rt-skeleton__card-top rt-skeleton__wave"></div>
                      <div class="rt-skeleton__card-row"
                        v-for="(row,rowKey) in configLoaderRows" :key="rowKey"
                      >
                        <i></i> <div><p class="rt-skeleton__wave"></p> <p></p></div>
                      </div>
                      <hr>
                      <div class="rt-skeleton__card-row"><div><p></p> <p></p></div></div>
                      <hr>
                      <div class="rt-skeleton__card-end">
                        <div class="rt-skeleton__card-price"></div> <div class="rt-skeleton__card-btn rt-skeleton__wave"></div> <div class="rt-skeleton__card-more"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <rt-carousel-v2
                  v-else
                  :class="[ slidesList > 4 ? 'carousel--fit-slides' : null ]"
                  :content-to-resize="['.cctv-sc__carousel-slide']"
                  :scrollable-on-desktop="true"
                  :container-me="false"
                  :width="5"
                >
                  <rt-carousel-slide-v2
                    v-for="i in slidesList"
                    :key="i"
                  >
                    <div
                      style="
                        align-content: center;
                        border-radius: 8px;
                        border: 2px solid;
                        display: flex;
                        flex-flow: wrap;
                        font-size: 150px;
                        justify-content: center;
                        height: 450px;
                      "
                      :style="`border-color: rgb(${177-i*0.6},${255/10+i},${i*15});`"
                      v-text="i"/>
                  </rt-carousel-slide-v2>
                </rt-carousel-v2>
              </div>
            </rt-tabs-content-item>
            <rt-tabs-content-item name="two">
              <div class="sp-t-2-3">
                <rt-carousel-v2
                  :container-me="false"
                >
                  <rt-carousel-slide-v2
                    v-for="i in 15"
                    :key="i">
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
                  </rt-carousel-slide-v2>
                </rt-carousel-v2>
              </div>
            </rt-tabs-content-item>
          </template>
        </rt-tabs>
      </div>
    </section>
    
    <section v-if="1" class="sp-v-2">
      <div class="rt-container">
        <div class="rt-col-12 rt-col-md-3 sp-b-1">
          <h3>Переход к слайду</h3>
        </div>
        <div class="rt-col-12 rt-col-md-3 sp-b-2">
          <p>Перейти к <input class="d-inline-block" style="width:20px" v-model="gotoSlideModel" title="Можно ввести номер слайда от 0 до 7" type="number" /> слайду</p>
        </div>
      </div>
      <rt-carousel-v2 ref="carouselEl">
        <rt-carousel-slide-v2
          v-for="i in 7"
          :key="i">
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
              v-text="i - 1"/>
          </div>
        </rt-carousel-slide-v2>
      </rt-carousel-v2>
    </section>

    <div class="rt-container">
      <documentation-builder :json="docProps" type="props" class="sp-t-2-1" />
      <documentation-builder :json="docEvents" type="events" class="sp-t-2-1" />
    </div>
  </div>
</template>

<script>
import docProps from '@vue-rt-style-kit-molecules-local/components/CarouselV2/docs/props.json'
import docEvents from '@vue-rt-style-kit-molecules-local/components/CarouselV2/docs/events.json'

const defaultLoaderType = 'spinner'
const skeletonLoader = {
  type: 'skeleton',
  count: 4,
  rows: 2
}

export default {
  data() {
    return {
      docProps,
      docEvents,
      slidesList: [],
      loaderType: skeletonLoader,
      gotoSlideVal: 0,
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

<template>
  <div>
    <div class="rt-container">
      <div class="app-content rt-col-12 rt-col-md-3">
        <div class="app-title"><h1 class="rt-font-hero">CarouselV2</h1></div>
      </div>
    </div>

    <div class="sp-v-2">
      <div class="rt-container">
        <div class="rt-col-12 rt-space-bottom3 is-b2c">
          <rt-row>
            <rt-col size="2" tablet-size="3" mobile-size="3" mobile-top="20" tablet-top="12">
              <rt-input :version="2"  placeholder="number" type="number" v-model="num"/>
            </rt-col>
            <rt-col size="2" tablet-size="3" mobile-size="3" mobile-top="20" tablet-top="12">
              <p>background</p>
              <select v-model="background" style="width: 100%">
                <option v-for="i in colors" :value="i">{{ i }}</option>
              </select>
            </rt-col>
            <rt-col size="2" tablet-size="3" mobile-size="3" mobile-top="20" tablet-top="12">
              <p>shadowColor</p>
              <select v-model="shadowColor" style="width: 100%">
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
              <p>scroll step</p>
              <input  v-model="scrollStep">
            </rt-col>
            <rt-col size="2" tablet-size="3" mobile-size="3" mobile-top="20" tablet-top="12">
              <p>laptop scroll step</p>
              <input  v-model="laptopScrollStep">
            </rt-col>
            <rt-col size="2" tablet-size="3" mobile-size="3" mobile-top="20" tablet-top="12">
              <p>tablet scroll step</p>
              <input  v-model="tdScrollStep">
            </rt-col>
            <rt-col size="2" tablet-size="3" mobile-size="3" mobile-top="20" tablet-top="12">
              <p>mobile scroll step</p>
              <input  v-model="mdScrollStep">
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
            <rt-col size="2" tablet-size="3" mobile-size="3" mobile-top="20" tablet-top="12">
              <p>enable custom time</p>
              <input type="checkbox" v-model="enableCustomTime">
            </rt-col>
            <rt-col size="2" tablet-size="3" mobile-size="3" mobile-top="20" tablet-top="12">
              <p>custom time</p>
              <input type="text" v-model="customTime">
            </rt-col>
          </rt-row>
        </div>
      </div>

      <rt-tabs :version="2" :show-as-tags="true" background="main-color03" :bright="true" :small="true" :wrap-navigation="true" >
        <template slot="navigation">
          <rt-tabs-nav-item anchor="ready!" name="1">1</rt-tabs-nav-item>
          <rt-tabs-nav-item anchor="ready!" name="2">2</rt-tabs-nav-item>
        </template>
        <template slot="content">
          <rt-tabs-content-item name="1">
            {{shadowColor}}

      <rt-carousel-v3 :scroll-step="scrollStep"
                      :laptop-scroll-step="laptopScrollStep"
                      :td-scroll-step="tdScrollStep"
                      :custom-time="customTime"
                      :enable-custom-time="enableCustomTime"
                            :md-scroll-step="mdScrollStep" :active-index="activeIndex" :background="background" :shadow-color="shadowColor" :show-shadow="showShadow" :infinite-scroll="infinitescroll" :blur-not-active="blurnotactive" :col-in-row="colInRow" :laptop-col-in-row="laptopColInRow" :scrollable-on-desktop="scrollableondesktop">
      <!--        <pre-timeout  :time="i*1000" >-->
              <rt-carousel-slide-v3 v-for="i in 5" :key="i+'$'" :id="'slide-'+i">
          <div>
          <div
              style="
              background-size: cover;
              border-radius: 8px;
              height: 300px;
              position: relative;
            "
              :style="`background: url(https://picsum.photos/500/300?getForId=${i+100+num})`">
            <div class="d-flex flex-end-center flex-v-center">Это текст {{i}} <span>  <rt-popover :container-id="'slide-'+i">
              <template slot="customIcon">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="16" cy="16" r="16" fill="#101828" fill-opacity="0.03"/>
                  <path
                      d="M14.8531 6.58975C15.2068 5.80342 16.3233 5.80341 16.677 6.58974L18.9833 11.7164L24.6475 12.3833C25.5202 12.4861 25.8456 13.5837 25.1699 14.1454L20.8549 17.7328L22.1721 23.1394C22.379 23.9887 21.4733 24.676 20.711 24.2481L15.765 21.4717L10.8198 24.2478C10.0574 24.6757 9.15161 23.9883 9.35872 23.1389L10.6769 17.7328L6.36188 14.1454C5.68619 13.5836 6.01154 12.486 6.88421 12.3833L12.5469 11.7164L14.8531 6.58975Z"
                      fill="#FF4F12"/>
                </svg>
              </template>
              <template slot="content">
                <div>
                  <p class="rt-font-label rt-font-bold sp-b-0-2 color-main07">Заголовок</p>
                  <p class="rt-font-label color-main07">Высота тултипа подстраивается под контент. Ширина сохранятеся</p>
                </div>
              </template>
            </rt-popover></span></div>
            <div
                style="
                background-color: black;
                color: white;
                position: absolute;
                bottom: 0;
                right: 0;
                padding: 0 10px;
              "
                v-text="'1-'+i">

            </div>
          </div>

          </div>
        </rt-carousel-slide-v3>
<!--        </pre-timeout>-->

      </rt-carousel-v3>

          </rt-tabs-content-item>

          <rt-tabs-content-item name="2">
            <div class="color-block--green sp-v-2">11122</div>
            <rt-carousel-v3 :scroll-step="scrollStep"
                            :laptop-scroll-step="laptopScrollStep"
                            :td-scroll-step="tdScrollStep"
                            :md-scroll-step="mdScrollStep" :active-index="activeIndex" :background="background" :shadow-color="shadowColor" :show-shadow="showShadow" :infinite-scroll="infinitescroll" :blur-not-active="blurnotactive" :col-in-row="colInRow" :laptop-col-in-row="laptopColInRow" :scrollable-on-desktop="scrollableondesktop">
              <!--        <pre-timeout  :time="i*1000" >-->
              <rt-carousel-slide-v3 v-for="i in 15" :key="i+'$$'">
                <div>
                  <div
                      class="d-flex flex-v-end"
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
                        v-text="'2-'+i"/>
                  </div>

                </div>
              </rt-carousel-slide-v3>
              <!--        </pre-timeout>-->
            </rt-carousel-v3>
            <div class="color-block--red sp-v-2"></div>

          </rt-tabs-content-item>
        </template>
      </rt-tabs>
      <rt-carousel-v3 :scroll-step="scrollStep"
                      :laptop-scroll-step="laptopScrollStep"
                      :td-scroll-step="tdScrollStep"
                      :md-scroll-step="mdScrollStep" :active-index="activeIndex" :background="background" :shadow-color="shadowColor" :show-shadow="showShadow" :infinite-scroll="infinitescroll" :blur-not-active="blurnotactive" :col-in-row="colInRow" :laptop-col-in-row="laptopColInRow" :scrollable-on-desktop="scrollableondesktop">
        <!--        <pre-timeout  :time="i*1000" >-->
        <rt-carousel-slide-v3 v-for="i in 15" :key="i" :id="'slide-2-'+i">
          <div>
            <div
                style="
              background-size: cover;
              border-radius: 8px;
              height: 300px;
              position: relative;
            "
                class="d-flex flex-v-end"
                :style="`background: url(https://picsum.photos/500/300?getForId=${i+35})`">
              <div class="d-flex flex-end-center flex-v-center">Это текст {{i}} <rt-popover :enable-append-to-body="true" :container-id="'slide-2-'+i">
                <template slot="customIcon">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="16" cy="16" r="16" fill="#101828" fill-opacity="0.03"/>
                    <path
                        d="M14.8531 6.58975C15.2068 5.80342 16.3233 5.80341 16.677 6.58974L18.9833 11.7164L24.6475 12.3833C25.5202 12.4861 25.8456 13.5837 25.1699 14.1454L20.8549 17.7328L22.1721 23.1394C22.379 23.9887 21.4733 24.676 20.711 24.2481L15.765 21.4717L10.8198 24.2478C10.0574 24.6757 9.15161 23.9883 9.35872 23.1389L10.6769 17.7328L6.36188 14.1454C5.68619 13.5836 6.01154 12.486 6.88421 12.3833L12.5469 11.7164L14.8531 6.58975Z"
                        fill="#FF4F12"/>
                  </svg>
                </template>
                <template slot="content">
                  <div>
                    <p class="rt-font-label rt-font-bold sp-b-0-2 color-main07">Заголовок</p>
                    <p class="rt-font-label color-main07">Высота тултипа подстраивается под контент. Ширина сохранятеся</p>
                  </div>
                </template>
              </rt-popover></div>
              <div
                  style="
                background-color: black;
                color: white;
                position: absolute;
                bottom: 0;
                right: 0;
                padding: 0 10px;
              "
                  v-text="'2-'+i"/>
            </div>

          </div>
        </rt-carousel-slide-v3>
        <!--        </pre-timeout>-->
      </rt-carousel-v3>
      <rt-carousel-v3 :background="background" :shadow-color="shadowColor" :show-shadow="showShadow" :infinite-scroll="infinitescroll" :blur-not-active="blurnotactive" :scrollable-on-desktop="scrollableondesktop">
          <rt-carousel-slide-v3 v-for="i in 8" :time="i*1000" :key="i">
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
      <rt-carousel-v3 :background="background" :col-in-row="4" :shadow-color="shadowColor" :show-shadow="showShadow" :infinite-scroll="infinitescroll" :blur-not-active="blurnotactive" :scrollable-on-desktop="scrollableondesktop">
          <rt-carousel-slide-v3 v-for="i in 8" :time="i*1000" :key="i">
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
      <documentation-builder :json="docProps" type="props" class="sp-t-2-1" />
<!--      <documentation-builder :json="docEvents" type="events" class="sp-t-2-1" />-->
    </div>
  </div>
</template>

<script>
import docProps from '@vue-rt-style-kit-molecules-local/components/CarouselV3/docs/index.json'
// import docEvents from '@vue-rt-style-kit-molecules-local/components/CarouselV2/docs/events.json'

const defaultLoaderType = 'spinner'
const skeletonLoader = {
  type: 'skeleton',
  count: 4,
  rows: 2
}
import componentsList from "../../componentsList";

export default {
  data() {
    return {
      num: 1,
      docProps,
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
      laptopColInRow: 3,
      scrollStep: 1,
      laptopScrollStep:1,
      tdScrollStep:1,
      mdScrollStep:1,
      waitTime: this.getRandomNumberFromRange(3,15)*1000,
      enableCustomTime: false,
      customTime: 0.3
    }
  },
  components: componentsList,
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

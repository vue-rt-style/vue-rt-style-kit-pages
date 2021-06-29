<template>
  <div class="rt-container is--show-sp-colorized">
    <div class="app-content rt-col-12">
      <div class="app-title baza-title">Система отступов</div>
      <div class="baza-desc" style="max-width:800px">
Цветная система вертикальных отступов, адаптируется по определенным правилам.
Используются глобальные точки слома, все оступы кратны {{ pixelPoint }}-м.

CSS-классы реализованы по формату:
  <b>.sp-[position]-[colorName]</b>,
<i>где <b>position</b> - позиция отступов. t - сверху, b - снизу, v - сверху и снизу
      <b>colorName</b> - название цветового отступа, без дефиса.</i>

<br><br><br>
<b>Можно кликать на нужный оступ</b> из списка, с целью копирования CSS-класса
      </div>
      <div class="baza-body app-body">
        <div
          v-for="(color, key) in colorized" :key="key"
          class="preview-color"
        >
          <div class="d-flex flex-start-center md-d-block">
            <div class="preview-color-wrap">
              <div :class="`preview-color-line preview-color-line-${key} sp-t-${key}`"></div>
            </div>
            <div class="d-flex sp-l-1 md-sp-l-none md-sp-b-1">
              <p class="preview-koef preview-koef-web td-d-none md-d-none">{{ color.spaceWeb }}x {{ color.spaceWeb * pixelPoint }}px</p>
              <p class="preview-koef preview-koef-tablet d-none td-d-block md-d-none">{{ color.spaceTablet }}x {{ color.spaceTablet * pixelPoint }}px</p>
              <p class="preview-koef preview-koef-mobile d-none md-d-block">{{ color.spaceMobile }}x {{ color.spaceMobile * pixelPoint }}px</p>
              <h4 class="preview-color-title">{{ key }}</h4>
            </div>
          </div>
          <div class="preview-css">
            <span class="preview-css-val" v-html="`.sp-b-${key}`"  @click="copyCode"></span>
            Отступ снизу
          </div>
          <div class="preview-css">
            <span class="preview-css-val" v-html="`.sp-t-${key}`" @click="copyCode"></span>
            Отступ сверху
          </div>
          <div class="preview-css">
            <span class="preview-css-val" v-html="`.sp-v-${key}`" @click="copyCode"></span>
            Отступ сверху и снизу
          </div>
        </div>

        <textarea
          ref="sourceCodeEl"
          class="source-code"
          v-html="sourceCode"
        ></textarea>

        <div
          class="the-msg"
          :class="{ active: showCopySuccess }"
        >Код скопирован в буфер!</div>
      </div>
    </div>
  </div>
</template>

<script>
import colorized from '@vue-rt-style-kit-atoms-local/colorized.json'
import globalVariables from '@vue-rt-style-kit-atoms-local/variables.json'

export default {
  data() {
    return {
      colorized,
      globalVariables,
      sourceCode: '',
      showCopySuccess: false
    }
  },
  computed: {
    pixelPoint() {
      return parseInt(globalVariables['pixel-point'], 10)
    }
  },
  methods: {
    copyCode({ target }) {
      let el = this.$refs.sourceCodeEl
      if (!el) return
      el.value = target.innerText.replace('.', '')
      el.select()
      el.setSelectionRange(0, 99999)
      document.execCommand('copy')
      this.showCopySuccess = true
      setTimeout(() => {
        this.showCopySuccess = false
      }, 2000)
    }
  }
}
</script>

<style lang="stylus">
baseColor = #19417A
bg = #F3F3F4

.baza-title
  color baseColor
  font-size 32px
  font-weight 500
  line-height 34px

.baza-desc
  color baseColor
  font-size 16px
  line-height 28px
  white-space pre-wrap

.baza-body
  max-width 800px

.preview
  &-css
    color rgba(16,24,40,0.5)
    & + .preview-css
      margin-top 10px
    &-val
      background rgb(239 239 239)
      color #9a9a9a
      cursor pointer
      border-radius 4px
      padding 4px 8px
      transition background .3s ease
      @media (hover: hover)
        &:hover
          background transparent
  &-color
    & + .preview-color
      margin-top 40px
    &-wrap
      width 400px
      max-width 100vw
    &-line
      margin 20px 0
      position relative
      &:after
        content ''
        position absolute
        width 100%
        height 100%
        top 0
        left 0
      &-title
        font-size 16px
        font-weight 500
        line-height 28px
      // Color-sheme
      &-grey
        background #7B939B
      &-darkpurple
        background #3F028C
      &-blue
        background #0E49E3
      &-lightblue
        background #65BBDF
      &-yellow
        background #FFCA00
      &-darkorange
        background #D33706
      &-burgundy
        background #850337
      &-red
        background #FF4747
      &-mint
        background #57D9B7
      &-purple
        background #9466FF
      &-darkblue
        background #273A64
      &-green
        background #26DA72
      &-orange
        background #FF4F12
      &-pink
        background #FFBFC3
      &-wine
        background #BC104B
      
  &-koef
    font-size 16px
    line-height 28px
    padding-right 20px

.source-code
  background transparent
  border none
  font-size 10px
  position absolute
  opacity 0
  resize none

.the-msg
  background #333
  color #f1cb11
  margin auto
  max-width 70vw
  padding 12px
  position fixed
  bottom 0
  left 0
  right 0
  transition transform .3s ease
  transform translateY(60px)
  width 500px
  &.active
    transform translateY(0px)


.bpname
  display inline-block
  @media (max-width: 767px)
    &:before
      content 'Mob'
  @media (min-width: 768px) and (max-width: 1024px)
    &:before
      content 'Tab'
  @media (min-width: 1025px) and (max-width: 1279px)
    &:before
      content 'WebS'
  @media (min-width: 1280px)
    &:before
      content 'Web'
</style>

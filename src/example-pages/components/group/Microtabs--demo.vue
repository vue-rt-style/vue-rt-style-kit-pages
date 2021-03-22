<template>
  <section style="background:#f8f8f8; color:#101828">
    <div class="rt-container">
      <div class="app-content rt-col-12 rt-col-md-3">
        <div class="app-title">
          <h1 class="rt-font-hero sp-b-1">Microtabs</h1>
          <p>Для вывода включенных опций в тарифной карточке было принято группировать их в microtabs. Данный компонент решает сразу 2 проблемы: некотролируемость высоты карточки и отображение простых данных.</p>
          <p>Под капотом microtabs заложена логика подстройки под ширину контейнера, с учетом изменения ширины экрана.</p>
        </div>

        <rt-row class="app-row sp-t-2">
          <rt-col size="5" mobile-size="3">
            <h3 class="sp-b-1">Упрощенный режим (без контента)</h3>
            <pre-code :text="sampleView"></pre-code>
          </rt-col>

          <rt-col size="12">
            <h3 class="sp-t-2 sp-b-1">Обычный режим</h3>
          </rt-col>
          <rt-col size="6" mobile-size="3" class="md-sp-b-2">
            <pre-code :text="spacesView"></pre-code>
          </rt-col>
          <rt-col size="6" mobile-size="3">
            <pre-code :text="themesView"></pre-code>
          </rt-col>

          <rt-col size="6" mobile-size="3">
            <h3 class="sp-t-3 sp-b-1">Инверсия цвета (dark тема карточек)</h3>
            <pre-code :text="inverseBlackViewA" class="sp-b-2"></pre-code>
            <pre-code :text="inverseBlackViewB"></pre-code>
          </rt-col>
          <rt-col size="6" mobile-size="3">
            <h3 class="sp-t-3 sp-b-1  md-sp-t-2">Инверсия цвета (yadisk тема карточек)</h3>
            <pre-code :text="inverseBlueViewA" class="sp-b-2"></pre-code>
            <pre-code :text="inverseBlueViewB"></pre-code>
          </rt-col>

          <rt-col size="12">
            <h3 class="sp-t-3 sp-b-1">Требования и дизайн-система</h3>
          </rt-col>
          <rt-col size="3" tablet-size="3" mobile-size="3">
            <p class="sp-b-1">Нельзя размещать всю палитру раскрашенных microtabs-nav в ряд</p>
            <div class="dont-use" style="max-width:280px">
              <rt-microtabs>
                <template slot="nav">
                  <rt-microtabs-nav theme="purple">Цвет A</rt-microtabs-nav>
                  <rt-microtabs-nav theme="orange">Цвет B</rt-microtabs-nav>
                  <rt-microtabs-nav>Обычный цвет</rt-microtabs-nav>
                </template>
                <template slot="cnt">
                  <rt-microtabs-cnt>
                    <p>Описание вкладки в одну строку</p>
                  </rt-microtabs-cnt>
                  <rt-microtabs-cnt>
                    <p>Описание вкладки в одну строку</p>
                    <p>Описание вкладки во вторую строку</p>
                  </rt-microtabs-cnt>
                  <rt-microtabs-cnt>
                    <p>Описание вкладки в одну строку</p>
                    <p>Описание вкладки во вторую строку</p>
                  </rt-microtabs-cnt>
                </template>
              </rt-microtabs>
            </div>
          </rt-col>
          <rt-col size="3" tablet-size="3" mobile-size="3">
            <p class="sp-b-1  md-sp-t-2">Нельзя пытаться увеличить размер контента в microtabs-cnt</p>
            <div class="dont-use">
              <rt-microtabs style="border:2px solid #f00">
                <template slot="nav">
                  <rt-microtabs-nav>Вкладка A</rt-microtabs-nav>
                  <rt-microtabs-nav>Костылестиле вкладка</rt-microtabs-nav>
                </template>
                <template slot="cnt">
                  <rt-microtabs-cnt>
                    <p>Описание вкладки в одну строку</p>
                  </rt-microtabs-cnt>
                  <rt-microtabs-cnt style="max-height:none">
                    <p>Описание вкладки в одну строку</p>
                    <p>Описание вкладки во вторую строку</p>
                    <p>Описание вкладки в третью строку</p>
                    <p>Описание вкладки в четвертую строку</p>
                    <p>Описание вкладки в пятую строку</p>
                    <p>и так до бесконечности...</p>
                  </rt-microtabs-cnt>
                </template>
              </rt-microtabs>
            </div>
          </rt-col>

          <rt-col size="12">
            <h4 class="sp-t-2 sp-b-1">Tester</h4>
          </rt-col>
          <rt-col size="5" mobile-size="3">
            <div class="sp-b-1 d-flex">
              <input type="range" min="250" max="780" v-model="testBlockWidth">
              &nbsp;width: {{ testBlockWidth }}px
            </div>
            <div class="sp-b-1">
              <a @click="() => cloneShown = !cloneShown" href="javascript:void(0)">Clone toggle</a>
            </div>
            <!-- @TODO - Reactive list -->
            <!-- <div class="sp-b-1">
              <a @click="() => {
                if (!testList.length) return
                testListHidden.push(testList[0])
                testList.splice(0, 1)
              }" href="javascript:void(0)">List less</a>
            </div>
            <div class="sp-b-1">
              <a @click="() => {
                if (!testListHidden.length) return
                testList.push(testListHidden[0])
                testListHidden.splice(0, 1)
              }" href="javascript:void(0)">List more</a>
            </div> -->
          </rt-col>
          <rt-col size="7" mobile-size="3">
            <rt-microtabs
              class="test-list test-list--accent sp-v-0-3"
              :style="`width:${testBlockWidth}px`"
            >
              <template slot="nav">
                <rt-microtabs-nav v-for="(nav, key) in testList" :key="key">
                  <div v-html="nav.nav"></div>
                </rt-microtabs-nav>
              </template>
              <template slot="cnt">
                <rt-microtabs-cnt
                  v-for="(cnt, key) in testList" :key="key"
                  v-html="cnt.cnt"
                ></rt-microtabs-cnt>
              </template>
            </rt-microtabs>
            <rt-microtabs
              v-if="cloneShown"
              class="test-list sp-v-0-3"
              :style="`width:${testBlockWidth}px`"
            >
              <template slot="nav">
                <rt-microtabs-nav v-for="(nav, key) in testList" :key="key">
                  <div v-html="nav.nav"></div>
                </rt-microtabs-nav>
              </template>
              <template slot="cnt">
                <rt-microtabs-cnt
                  v-for="(cnt, key) in testList" :key="key"
                  v-html="cnt.cnt"
                ></rt-microtabs-cnt>
              </template>
            </rt-microtabs>
          </rt-col>

        </rt-row>
      </div>

      <div class="rt-container">
        <documentation-builder :json="docProps" type="props" class="sp-t-2-1" />
        <documentation-builder :json="docEvents" type="events" class="sp-t-2-1" />
      </div>
    </div>
  </section>
</template>

<script>
import docProps from '@vue-rt-style-kit-molecules-local/components/Microtabs/docs/props.json'
import docEvents from '@vue-rt-style-kit-molecules-local/components/Microtabs/docs/events.json'

export default {
  name: 'MicroTabsComponent',
  data(){
    return {
      docProps,
      docEvents,
      testList: [
        { nav: 'Удаленка', cnt: '<p>Видеоконференции без потери качества сигнала</p>' },
        { nav: 'Оборудование', cnt: '<div>ТВ-приставка <span class="rt-tariff-price--inline">+ 50 руб./мес.</span></div>' },
        { nav: 'Яндекс', cnt: '<p>5 ГБ Яндекс.Диск +</p>' },
        { nav: 'Антивирус', cnt: '<p>Kaspersky Internet Security 2 устройства</p>' }
      ],
      testListHidden: [],
      testBlockWidth: 312,
      cloneShown: false
    }
  },
  computed:{
    sampleView(){
      return `
<div style="width:200px">
  <rt-microtabs class="color-block--white sp-h-1 sp-v-0-3">
    <template slot="nav">
      <rt-microtabs-nav theme="flat"><rt-system-icons name="speed 8x" color="main-color"></rt-system-icons></rt-microtabs-nav>
      <rt-microtabs-nav theme="flat"><rt-system-icons name="speed 6x" color="main-color05"></rt-system-icons></rt-microtabs-nav>
      <rt-microtabs-nav theme="flat"><rt-system-icons name="speed 4x" color="main-color03"></rt-system-icons></rt-microtabs-nav>
      <rt-microtabs-nav theme="flat"><rt-system-icons name="speed 2x" color="main-color005"></rt-system-icons></rt-microtabs-nav>
      <rt-microtabs-nav theme="flat"><rt-system-icons name="speed 1x" color="main-color003"></rt-system-icons></rt-microtabs-nav>
    </template>
  </rt-microtabs>
</div>
      `
    },
    spacesView(){
      return `
<rt-microtabs class="color-block--white sp-h-1 sp-v-0-3">
  <template slot="nav">
    <rt-microtabs-nav theme="purple">Акция</rt-microtabs-nav>
    <rt-microtabs-nav>Сервисы</rt-microtabs-nav>
    <rt-microtabs-nav>Длинотекст</rt-microtabs-nav>
    <rt-microtabs-nav>Антивирус</rt-microtabs-nav>
    <rt-microtabs-nav>Яндекс Диск</rt-microtabs-nav>
  </template>
  <template slot="cnt">
    <rt-microtabs-cnt>
      <div class="d-flex flex-start-center">
        <rt-system-icons name="breaking" color="purple"></rt-system-icons>
        <p>Ограниченое предложение для вновь подключившихся</p>
      </div>
    </rt-microtabs-cnt>
    <rt-microtabs-cnt>
      <p>Переадресация</p>
      <p>Голосовое меню IVR</p>
      <p>Распределение  звонков</p>
      <p>Статистика и аналитика</p>
    </rt-microtabs-cnt>
    <rt-microtabs-cnt>
      <p>Предоставляет услуги широкополосного доступа в Интернет, интерактивного телевидения, сотовой связи, местной и дальней телефонной связи и др. Занимает лидирующие позиции на российском рынке высокоскоростного доступа в интернет, платного ТВ, хранения и обработки данных, а также кибербезопасности</p>
    </rt-microtabs-cnt>
    <rt-microtabs-cnt>
      <p>Kaspersky Internet Security 2 устройства</p>
    </rt-microtabs-cnt>
    <rt-microtabs-cnt>
      <p>5 ГБ Яндекс.Диск +</p>
    </rt-microtabs-cnt>
  </template>
</rt-microtabs>
      `
    },
    themesView(){
      return `
<rt-microtabs class="color-block--white sp-h-1 sp-v-0-3">
  <template slot="nav">
    <rt-microtabs-nav theme="orange">Скидка</rt-microtabs-nav>
    <rt-microtabs-nav>Сервисы</rt-microtabs-nav>
    <rt-microtabs-nav>Доп. параметры</rt-microtabs-nav>
  </template>
  <template slot="cnt">
    <rt-microtabs-cnt>
      <p>Доступ к видеосервису Wink с максимальной выгодой до 2 месяцев</p>
    </rt-microtabs-cnt>
    <rt-microtabs-cnt>
      <p>Переадресация</p>
      <p>Голосовое меню IVR</p>
      <p>Распределение  звонков</p>
      <p>Статистика и аналитика</p>
    </rt-microtabs-cnt>
    <rt-microtabs-cnt>
      <p>Переадресация</p>
      <p>Голосовое меню IVR</p>
      <p>Распределение  звонков</p>
      <p>Статистика и аналитика</p>
    </rt-microtabs-cnt>
  </template>
</rt-microtabs>
      `
    },
    inverseBlackViewA(){
      return `
<div class="rt-tariff is--theme-dark is--no-spaces is--no-borders">
  <rt-microtabs class="sp-h-1 sp-t-0-3 sp-b-0-4">
    <template slot="nav">
      <rt-microtabs-nav theme="purple">Доп. параметры</rt-microtabs-nav>
      <rt-microtabs-nav>Антивирус</rt-microtabs-nav>
      <rt-microtabs-nav>Яндекс Диск</rt-microtabs-nav>
    </template>
    <template slot="cnt">
      <rt-microtabs-cnt>
        <p>Переадресация</p>
        <p>Голосовое меню IVR</p>
        <p>Распределение  звонков</p>
        <p>Статистика и аналитика</p>
      </rt-microtabs-cnt>
      <rt-microtabs-cnt>
        <p>Kaspersky Internet Security 2 устройства</p>
      </rt-microtabs-cnt>
      <rt-microtabs-cnt>
        <p>5 ГБ Яндекс.Диск +</p>
      </rt-microtabs-cnt>
    </template>
  </rt-microtabs>
</div>
      `
    },
    inverseBlackViewB(){
      return `
<div class="rt-tariff is--theme-dark is--no-spaces is--no-borders">
  <rt-microtabs class="sp-h-1 sp-t-0-3 sp-b-0-4">
    <template slot="nav">
      <rt-microtabs-nav theme="orange">Доп. параметры</rt-microtabs-nav>
      <rt-microtabs-nav>Антивирус</rt-microtabs-nav>
      <rt-microtabs-nav>Яндекс Диск</rt-microtabs-nav>
    </template>
    <template slot="cnt">
      <rt-microtabs-cnt>
        <p>Переадресация</p>
        <p>Голосовое меню IVR</p>
        <p>Распределение  звонков</p>
        <p>Статистика и аналитика</p>
      </rt-microtabs-cnt>
      <rt-microtabs-cnt>
        <p>Kaspersky Internet Security 2 устройства</p>
      </rt-microtabs-cnt>
      <rt-microtabs-cnt>
        <p>5 ГБ Яндекс.Диск +</p>
      </rt-microtabs-cnt>
    </template>
  </rt-microtabs>
</div>
      `
    },
    inverseBlueViewA(){
      return `
<div class="rt-tariff is--theme-yadisk is--no-spaces is--no-borders">
  <rt-microtabs class="sp-h-1 sp-t-0-3 sp-b-0-4">
    <template slot="nav">
      <rt-microtabs-nav theme="purple">Доп. параметры</rt-microtabs-nav>
      <rt-microtabs-nav>Антивирус</rt-microtabs-nav>
      <rt-microtabs-nav>Яндекс Диск</rt-microtabs-nav>
    </template>
    <template slot="cnt">
      <rt-microtabs-cnt>
        <p>Переадресация</p>
        <p>Голосовое меню IVR</p>
        <p>Распределение  звонков</p>
        <p>Статистика и аналитика</p>
      </rt-microtabs-cnt>
      <rt-microtabs-cnt>
        <p>Kaspersky Internet Security 2 устройства</p>
      </rt-microtabs-cnt>
      <rt-microtabs-cnt>
        <p>5 ГБ Яндекс.Диск +</p>
      </rt-microtabs-cnt>
    </template>
  </rt-microtabs>
</div>
      `
    },
    inverseBlueViewB(){
      return `
<div class="rt-tariff is--theme-yadisk is--no-spaces is--no-borders">
  <rt-microtabs class="sp-h-1 sp-t-0-3 sp-b-0-4">
    <template slot="nav">
      <rt-microtabs-nav theme="orange">Доп. параметры</rt-microtabs-nav>
      <rt-microtabs-nav>Антивирус</rt-microtabs-nav>
      <rt-microtabs-nav>Яндекс Диск</rt-microtabs-nav>
    </template>
    <template slot="cnt">
      <rt-microtabs-cnt>
        <p>Переадресация</p>
        <p>Голосовое меню IVR</p>
        <p>Распределение  звонков</p>
        <p>Статистика и аналитика</p>
      </rt-microtabs-cnt>
      <rt-microtabs-cnt>
        <p>Kaspersky Internet Security 2 устройства</p>
      </rt-microtabs-cnt>
      <rt-microtabs-cnt>
        <p>5 ГБ Яндекс.Диск +</p>
      </rt-microtabs-cnt>
    </template>
  </rt-microtabs>
</div>
      `
    }
  }
}
</script>

<style lang="stylus">
.dont-use
  position relative
  &:before,
  &:after
    content: ''
    background #f00
    margin auto
    position absolute
    width 4px
    height 150%
    top 0
    left -20%
    right 0
    bottom 0
    z-index 22
  &:before
    transform rotate(-45deg)
  &:after
    transform rotate(45deg)

.test-list
  background #fff
  box-shadow inset 0 0 0 20px #bdf1bd
  padding 20px
  min-width 280px
  max-width 100%
  position relative
  // border 20px solid #bdf1bd
  &--accent
    box-shadow inset 0 0 0 20px #ee9
    .rt-microtabs-nav__item-tgl
      background red
      z-index 2
    .rt-microtabs-nav__item[data-key="0"],
    .rt-microtabs-cnt__item:nth-child(1)
      background #f006
    .rt-microtabs-nav__item[data-key="1"],
    .rt-microtabs-cnt__item:nth-child(2)
      background #0f06
    .rt-microtabs-nav__item[data-key="2"],
    .rt-microtabs-cnt__item:nth-child(3)
      background #00f6
    .rt-microtabs-nav__item[data-key="3"],
    .rt-microtabs-cnt__item:nth-child(4)
      background #f0f6
</style>

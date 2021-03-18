<template>
  <section style="background:#f8f8f8">
    <div class="rt-container">
      <div class="app-content rt-col-12 rt-col-md-3">
        <div class="app-title">
          <h1 class="rt-font-hero">Microtabs</h1>
          <p>Для вывода включенных опций в тарифной карточке было принято группировать их в microtabs. Данный компонент решает сразу 2 проблемы: некотролируемость высоты карточки и отображение простых данных.</p>
          <p>Под капотом microtabs заложена логика подстройки под ширину контейнера, с учетом изменения ширины экрана.</p>
        </div>

        <rt-row class="app-row">
          <rt-col size="5">
            <h3 class="sp-b-1">Простой режим (без контента)</h3>
            <pre-code :text="sampleView"></pre-code>
          </rt-col>
          <rt-col size="7">
            <h4 class="sp-b-1">Отображение контента без ограничения по высоте</h4>
            <pre-code :text="longView"></pre-code>
          </rt-col>

          <rt-col size="12">
            <h3 class="sp-t-2 sp-b-1">С контентом, учетом отступов и тем</h3>
          </rt-col>
          <rt-col size="6">
            <pre-code :text="spacesView"></pre-code>
          </rt-col>
          <rt-col size="6">
            <pre-code :text="themesView"></pre-code>
          </rt-col>

          <rt-col size="6">
            <h3 class="sp-t-3 sp-b-1">Инверсия цвета (dark тема карточек)</h3>
            <pre-code :text="inverseBlackView"></pre-code>
          </rt-col>
          <rt-col size="6">
            <h3 class="sp-t-3 sp-b-1">Инверсия цвета (yadisk тема карточек)</h3>
            <pre-code :text="inverseBlueView"></pre-code>
          </rt-col>

          <rt-col size="12">
            <h3 class="sp-t-3 sp-b-1">Требования, дизайн-система</h3>
            <div class="d-flex flex-start-center">
              <rt-system-icons name="close large" color="orange"></rt-system-icons>
              <p>Нельзя размещать всю палитру раскрашенных вкладок microtabs-nav в один ряд</p>
            </div>
            <rt-microtabs class="sp-v-0-3" style="background:#fba">
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
          </rt-col>

          <rt-col size="12">
            <h4 class="sp-t-2 sp-b-1">Reactive resize tester</h4>
          </rt-col>
          <rt-col size="12" class="d-flex">
            <rt-microtabs style="
              background:#fff;border:20px solid #bdf1bd;width:280px
            " class="sp-v-0-3">
              <template slot="nav">
                <rt-microtabs-nav style="background:#f33">Вкладка</rt-microtabs-nav>
                <rt-microtabs-nav style="background:#f93">Телефония</rt-microtabs-nav>
                <rt-microtabs-nav style="background:#ff3">Оборудование</rt-microtabs-nav>
                <rt-microtabs-nav style="background:#3f3">Антивирус</rt-microtabs-nav>
                <rt-microtabs-nav style="background:#33f">Яндекс Диск</rt-microtabs-nav>
              </template>
              <template slot="cnt">
                <rt-microtabs-cnt style="background:#f33">
                  <p>Описание вкладки в одну строку</p>
                </rt-microtabs-cnt>
                <rt-microtabs-cnt style="background:#f93">
                  <p>Переадресация</p>
                  <p>Голосовое меню IVR</p>
                  <p>Распределение  звонков</p>
                  <p>Статистика и аналитика</p>
                </rt-microtabs-cnt>
                <rt-microtabs-cnt style="background:#ff3">
                  <p>Предоставляет услуги широкополосного доступа в Интернет, интерактивного телевидения, сотовой связи, местной и дальней телефонной связи и др. Занимает лидирующие позиции на российском рынке высокоскоростного доступа в интернет, платного ТВ, хранения и обработки данных, а также кибербезопасности</p>
                </rt-microtabs-cnt>
                <rt-microtabs-cnt style="background:#3f3">
                  <p>Kaspersky Internet Security 2 устройства</p>
                </rt-microtabs-cnt>
                <rt-microtabs-cnt style="background:#33f">
                  <p>5 ГБ Яндекс.Диск +</p>
                </rt-microtabs-cnt>
              </template>
            </rt-microtabs>
            <rt-microtabs style="
              background:#fff;border:20px solid #f0f1bd;width:280px
            " class="sp-v-0-3">
              <template slot="nav">
                <rt-microtabs-nav>Вкладка</rt-microtabs-nav>
                <rt-microtabs-nav>Телефония</rt-microtabs-nav>
                <rt-microtabs-nav>Оборудование</rt-microtabs-nav>
                <rt-microtabs-nav>Антивирус</rt-microtabs-nav>
                <rt-microtabs-nav>Яндекс Диск</rt-microtabs-nav>
              </template>
              <template slot="cnt">
                <rt-microtabs-cnt>
                  <p>Описание вкладки в одну строку</p>
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
          </rt-col>

        </rt-row>
      </div>

      <div class="rt-container rt-space-top25">
        <documentation-builder :json="documentation" type="props" />
      </div>
    </div>
  </section>
</template>

<script>
import documentation from '@vue-rt-style-kit-molecules-local/components/Microtabs/docs/index.json'

export default {
  name: 'MicroTabsComponent',
  data(){
    return {
      documentation
    }
  },
  computed:{
    sampleView(){
      return `
<div style="width:200px">
  <rt-microtabs style="background:#fff;" class="sp-h-1 sp-v-0-3">
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
    longView(){
      return `
<rt-microtabs :fit="false" style="background:#fff;" class="sp-h-1 sp-v-0-3">
  <template slot="nav">
    <rt-microtabs-nav>Немного контента</rt-microtabs-nav>
    <rt-microtabs-nav>Длинотекст</rt-microtabs-nav>
    <rt-microtabs-nav>Совсем немного текста</rt-microtabs-nav>
  </template>
  <template slot="cnt">
    <rt-microtabs-cnt>
      <p>Kaspersky Internet Security 2 устройства</p>
    </rt-microtabs-cnt>
    <rt-microtabs-cnt>
      <p>Предоставляет услуги широкополосного доступа в Интернет, интерактивного телевидения, сотовой связи, местной и дальней телефонной связи и др. Занимает лидирующие позиции на российском рынке высокоскоростного доступа в интернет, платного ТВ, хранения и обработки данных, а также кибербезопасности</p>
    </rt-microtabs-cnt>
    <rt-microtabs-cnt>
      <p><rt-system-icons name="yandex disk fill"></rt-system-icons>...вжух</p>
    </rt-microtabs-cnt>
  </template>
</rt-microtabs>
      `
    },
    spacesView(){
      return `
<rt-microtabs style="background:#fff;" class="sp-h-1 sp-v-0-3">
  <template slot="nav">
    <rt-microtabs-nav theme="purple">Акция</rt-microtabs-nav>
    <rt-microtabs-nav>Сервисы</rt-microtabs-nav>
    <rt-microtabs-nav>Длинотекст</rt-microtabs-nav>
    <rt-microtabs-nav>Антивирус</rt-microtabs-nav>
    <rt-microtabs-nav>Яндекс Диск</rt-microtabs-nav>
  </template>
  <template slot="cnt">
    <rt-microtabs-cnt>
      <p class="sp-l-1-2"><rt-system-icons name="breaking" color="purple" style="left:0;position:absolute"></rt-system-icons>Ограниченое предложение для вновь подключившихся</p>
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
<rt-microtabs style="background:#fff;" class="sp-h-1 sp-v-0-3">
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
    inverseBlackView(){
      return `
<div class="rt-tariff is--theme-dark is--no-spaces is--no-borders">
  <rt-microtabs class="sp-h-1 sp-t-0-3 sp-b-0-4">
    <template slot="nav">
      <rt-microtabs-nav>Доп. параметры</rt-microtabs-nav>
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
    inverseBlueView(){
      return `
<div class="rt-tariff is--theme-yadisk is--no-spaces is--no-borders">
  <rt-microtabs class="sp-h-1 sp-t-0-3 sp-b-0-4">
    <template slot="nav">
      <rt-microtabs-nav>Доп. параметры</rt-microtabs-nav>
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

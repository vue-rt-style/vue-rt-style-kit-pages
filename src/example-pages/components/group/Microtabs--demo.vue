<template>
  <section style="background:#f8f8f8">
    <div class="rt-container">
      <div class="app-content rt-col-12 rt-col-md-3">
        <div class="app-title">
          <h1 class="rt-font-hero">Microtabs</h1>
        </div>

        <rt-row class="app-row">
          <rt-col size="12">
            <h3 class="sp-b-1">Простой режим (без контента)</h3>
          </rt-col>
          <rt-col size="2">
            <pre-code :text="sampleView"></pre-code>
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

          <rt-col size="12">
            <h3 class="sp-t-3 sp-b-1">Инверсия цвета (темная тема)</h3>
          </rt-col>
          <rt-col size="6">
            <div style="width:100%;background:#0D162D;color:#fff;">
              <pre-code :text="inverseBlackView"></pre-code>
            </div>
          </rt-col>
          <rt-col size="6">
            <div style="width:100%;background:#5D96D9;color:#fff;">
              <pre-code :text="inverseBlueView"></pre-code>
            </div>
          </rt-col>
        </rt-row>
      </div>

      <div class="rt-container rt-space-top25">
        <documentation-builder :json="documentation" type="Microtabs props" />
      </div>
    </div>
  </section>
</template>

<script>
import { backgroundsMap } from '@vue-rt-style-kit-molecules-local/components/Microtabs/common.js'
import documentation from '@vue-rt-style-kit-molecules-local/components/Microtabs/docs/index.json'

if(documentation.items[0]){
  let desc='. Доступны: `'+Object.keys(backgroundsMap).join('`,`')+'`'
  documentation.items.forEach(item => item.property === 'theme' ? item.description += desc : null)
}

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
<rt-microtabs>
  <template slot="nav">
    <rt-microtabs-nav theme="flat"><rt-system-icons name="speed 1x" color="main-color003"></rt-system-icons></rt-microtabs-nav>
    <rt-microtabs-nav theme="flat"><rt-system-icons name="speed 2x" color="main-color005"></rt-system-icons></rt-microtabs-nav>
    <rt-microtabs-nav theme="flat"><rt-system-icons name="speed 4x" color="main-color03"></rt-system-icons></rt-microtabs-nav>
    <rt-microtabs-nav theme="flat"><rt-system-icons name="speed 6x" color="main-color05"></rt-system-icons></rt-microtabs-nav>
    <rt-microtabs-nav theme="flat"><rt-system-icons name="speed 8x" color="main-color"></rt-system-icons></rt-microtabs-nav>
  </template>
</rt-microtabs>
      `
    },
    spacesView(){
      return `
<rt-microtabs style="background:#fff;" class="sp-h-1 sp-v-0-3">
  <template slot="nav">
    <rt-microtabs-nav>Акция</rt-microtabs-nav>
    <rt-microtabs-nav>Сервисы</rt-microtabs-nav>
    <rt-microtabs-nav>Доп. параметры</rt-microtabs-nav>
    <rt-microtabs-nav>Антивирус</rt-microtabs-nav>
    <rt-microtabs-nav>Яндекс Диск</rt-microtabs-nav>
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
    <rt-microtabs-nav theme="orange">Акция</rt-microtabs-nav>
    <rt-microtabs-nav theme="purple">Сервисы</rt-microtabs-nav>
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
<rt-microtabs class="sp-h-1 sp-t-0-3 sp-b-0-4" :inverse="true">
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
      `
    },
    inverseBlueView(){
      return `
<rt-microtabs class="sp-h-1 sp-t-0-3 sp-b-0-4" :inverse="true">
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
      `
    }
  }
}
</script>

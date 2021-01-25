<template>
  <section style="background:#f8f8f8">
    <div class="rt-container">
      <div class="app-content rt-col-12 rt-col-md-3">
        <div class="app-title">
          <h1 class="rt-font-hero">Microtabs</h1>
        </div>

        <rt-row class="app-row">
          <rt-col size="12">
            <h3 class="sp-b-1">Простой вид</h3>
            <rt-microtabs class="sp-b-2">
              <template slot="nav">
                <rt-microtabs-nav theme="flat"><rt-system-icons name="face frouning" color="main-color03"></rt-system-icons></rt-microtabs-nav>
                <rt-microtabs-nav theme="flat"><rt-system-icons name="face neutral" color="main-color03"></rt-system-icons></rt-microtabs-nav>
                <rt-microtabs-nav theme="flat"><rt-system-icons name="face smilling" color="main-color03"></rt-system-icons></rt-microtabs-nav>
              </template>
            </rt-microtabs>
          </rt-col>

          <rt-col size="12">
            <h3 class="sp-t-1 sp-b-1">С контентом, учетом отступов и тем</h3>
          </rt-col>
          <rt-col size="6">
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
          </rt-col>
          <rt-col size="6">
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
          </rt-col>

          <rt-col size="12">
            <h3 class="sp-t-3 sp-b-1">Инверсия цвета (темная тема)</h3>
          </rt-col>
          <rt-col size="6">
            <div style="width:100%;background:#0D162D;color:#fff;">
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
            </div>
          </rt-col>
          <rt-col size="6">
            <div style="width:100%;background:#5D96D9;color:#fff;">
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
            </div>
          </rt-col>
        </rt-row>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'MicroTabsComponent'
}
</script>

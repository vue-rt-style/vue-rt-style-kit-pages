<template>
  <div class="app-content">
    <div class="rt-container">
      <div class="rt-space-top2 rt-space-bottom rt-col-12">
        <h1 class="rt-font-h4 rt-font-bold">Тарифные карточки (RTRU-8679)</h1>
      </div>
    </div>
    <div class="app-body" style="backtround:#f8f8f8">
      <!-- <rt-carousel> -->
      <div class="rt-container">
      <div class="rt-col-12">
      <div class="row sp-t-1">

        <!-- Базовая -->
        <div class="rt-col-3">
          <rt-card-rounded :preview-card="true">
            <template slot="label">Технологии выгоды+</template>
            <template slot="content">
              <!-- Options Rows -->
              <div class="d-flex color-main sp-v-0-2">
                <i style="width:28px">
                  <rt-system-icons name="internet"></rt-system-icons>
                </i>
                <div class="sp-l-0-2">
                  <p class="rt-font-control">300 Мбит/с</p>
                  <p class="rt-font-label color-main05">Интернет</p>
                </div>
              </div>
              <div class="d-flex color-main sp-v-0-2">
                <i style="width:28px">
                  <rt-system-icons name="screen tv"></rt-system-icons>
                </i>
                <div class="sp-l-0-2">
                  <p class="rt-font-control">До 227 каналов</p>
                  <p class="rt-font-label color-main05">Интерактивное ТВ Wink</p>
                </div>
              </div>
              <div class="d-flex color-main sp-v-0-2">
                <i style="width:28px">
                  <rt-system-icons name="wink"></rt-system-icons>
                </i>
                <div class="sp-l-0-2">
                  <p class="rt-font-control">10 000 фильмов и сериалов</p>
                  <p class="rt-font-label color-main05">Онлайн-кинотеатр Wink</p>
                </div>
              </div>
              <div class="d-flex color-main sp-v-0-2">
                <i style="width:28px">
                  <rt-system-icons name="tablet"></rt-system-icons>
                </i>
                <div class="sp-l-0-2">
                  <p class="rt-font-control">1200 мин/100 гб/500 смс/5 SIM</p>
                  <p class="rt-font-label color-main05">Мобильная связь</p>
                </div>
              </div><!-- ::Options Rows -->

              <div class="rt-card__border-content">
                <div class="rt-col-12 flex-end-center rt-space-top">
                  <rt-price
                    :value="1100"
                  ></rt-price>
                </div>
                <div class="rt-space-top05">
                  <rt-button class="rt-button-orange rt-button--is-block">Подключить</rt-button>
                </div>
              </div>
              <a href="javascript:void(0)">Настроить тариф</a>
            </template>
          </rt-card-rounded>
        </div><!-- ::Базовая -->

        <!-- Акционная -->
        <div class="rt-col-3">
          <rt-card-rounded :preview-card="true">
            <template slot="label">Технологии выгоды</template>
            <template slot="content">
              <div class="d-flex color-main sp-v-0-2">
                <i style="width:28px">
                  <rt-system-icons name="internet"></rt-system-icons>
                </i>
                <div class="sp-l-0-2">
                  <p class="rt-font-control">100 Мбит/с</p>
                  <p class="rt-font-label color-main05">Интернет</p>
                </div>
              </div>
              <div class="d-flex color-main sp-v-0-2">
                <i style="width:28px">
                  <rt-system-icons name="screen tv"></rt-system-icons>
                </i>
                <div class="sp-l-0-2">
                  <p class="rt-font-control">187 каналов</p>
                  <p class="rt-font-label color-main05">Цифровое ТВ</p>
                </div>
              </div>
              <div class="d-flex color-main sp-v-0-2">
                <i style="width:28px">
                  <rt-system-icons name="wink"></rt-system-icons>
                </i>
                <div class="sp-l-0-2">
                  <p class="rt-font-control">10 000 фильмов и сериалов</p>
                  <p class="rt-font-label color-main05">Видеосервис Wink</p>
                </div>
              </div>
              <div class="d-flex color-main sp-v-0-2">
                <!-- Disabled option -->
                <i style="width:28px">
                  <rt-system-icons name="tablet"></rt-system-icons>
                </i>
                <div class="sp-l-0-2">
                  <p class="rt-font-control color-main05">Мобильная связь не включена</p>
                </div>
              </div>
            </template>
          </rt-card-rounded>
        </div><!-- ::Акционная -->

      </div>
      </div>
      </div>
      <!-- </rt-carousel> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'TariffsCards'
}
</script>

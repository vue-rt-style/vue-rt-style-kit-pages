<template>
  <div class="app-content">
    <section style="background:#f8f8f8">
      <div class="rt-container">
        <div class="rt-col-12 rt-space-top2 rt-space-bottom">
          <h1 class="rt-font-h4 rt-font-bold">Тарифные карточки (RTRU-8679)</h1>
        </div>
      </div>


      <rt-carousel
        slides-classes="rt-col-3 rt-col-td-3 rt-col-md-2"
      >

        <!-- Базовая -->
        <rt-carousel-slide>
          <pre-code :text="cardBase"></pre-code>
        </rt-carousel-slide><!-- ::Базовая -->

        <!-- Акционная -->
        <rt-carousel-slide>
          <pre-code :text="cardPromo"></pre-code>
        </rt-carousel-slide><!-- ::Акционная -->

        <!-- Скидочная -->
        <rt-carousel-slide>
          <pre-code :text="cardSale"></pre-code>
        </rt-carousel-slide><!-- ::Скидочная -->

        <!-- Игровая тема -->
        <rt-carousel-slide>
          <pre-code :text="cardDark"></pre-code>
        </rt-carousel-slide><!-- ::Игровая тема -->

        <!-- Я.Диск тема -->
        <rt-carousel-slide>
          <pre-code :text="cardYaDisk"></pre-code>
        </rt-carousel-slide><!-- ::Я.Диск тема -->

      </rt-carousel>

      <div class="rt-container sp-t-1">
        <div class="row">
          <div class="rt-col-12 sp-b-3">
            <div class="rt-col-3 rt-col-td-3 rt-col-md-3">
              <div class="rt-tariff">
                <div class="rt-tariff__title">Умный дом</div>
                <div class="rt-tariff-option is--disabled">
                  <i class="rt-tariff-option__icon">
                    <rt-system-icons name="internet"></rt-system-icons>
                  </i>
                  <div class="rt-tariff-option__info">
                    <p class="rt-tariff-option__title">Не включена</p>
                    <p class="rt-tariff-option__desc">Интернет</p>
                  </div>
                </div>
                <div class="rt-tariff-option is--disabled">
                  <i class="rt-tariff-option__icon">
                    <rt-system-icons name="screen tv"></rt-system-icons>
                  </i>
                  <div class="rt-tariff-option__info">
                    <p class="rt-tariff-option__title">Не включена</p>
                    <p class="rt-tariff-option__desc">Цифровое ТВ</p>
                  </div>
                </div>
                <div class="rt-tariff-option">
                  <i class="rt-tariff-option__icon">
                    <rt-system-icons name="wink"></rt-system-icons>
                  </i>
                  <div class="rt-tariff-option__info">
                    <p class="rt-tariff-option__title">10 000 фильмов и сериалов</p>
                    <p class="rt-tariff-option__desc">Видеосервис Wink</p>
                  </div>
                </div>
                <div class="rt-tariff-option is--disabled">
                  <i class="rt-tariff-option__icon">
                    <rt-system-icons name="tablet"></rt-system-icons>
                  </i>
                  <div class="rt-tariff-option__info">
                    <p class="rt-tariff-option__title">Не включена</p>
                    <p class="rt-tariff-option__desc">Мобильная связь</p>
                  </div>
                </div>
                <div class="rt-tariff-option">
                  <i class="rt-tariff-option__icon">
                    <rt-system-icons name="smart home"></rt-system-icons>
                  </i>
                  <div class="rt-tariff-option__info">
                    <p class="rt-tariff-option__title">Контроллер/2 Датчика</p>
                    <p class="rt-tariff-option__desc">Умный дом</p>
                  </div>
                </div>
                <div class="rt-tariff__line sp-v-0-1 sp-h-1">
                  <div class="rt-tariff-option sp-v-0-2">
                    <div class="rt-tariff-option__info">
                      <p class="rt-tariff-option__title">Z-Wave/869 МГц</p>
                      <p class="rt-tariff-option__desc">Комплект умного дома</p>
                    </div>
                  </div>
                </div>
                <div class="rt-tariff__line rt-font-right sp-t-0-3 sp-h-1">
                  <rt-price
                    :value="600"
                    :v2="true"
                  ></rt-price>
                  <div class="rt-font-control color-main05 sp-b-0-3">
                    <p>Стартовый взнос <span>1&nbsp;300 руб</span></p>
                  </div>
                  <rt-button class="rt-button-orange rt-button--is-block">Подключить</rt-button>
                </div>
              </div>
            </div><!-- ::Базовая -->
          </div>
        </div>
      </div>
      <!-- </rt-carousel> -->
    </section>
  </div>
</template>

<script>
export default {
  name: 'TariffsCards',
  computed: {
    cardBase(){
      return `
<div class="rt-tariff">
  <div class="rt-tariff__title">Технологии доступа</div>
  <div class="rt-tariff-option">
    <i class="rt-tariff-option__icon">
      <rt-system-icons name="internet"></rt-system-icons>
    </i>
    <div class="rt-tariff-option__info">
      <p class="rt-tariff-option__title">200 Мбит/с</p>
      <p class="rt-tariff-option__desc">Интернет</p>
    </div>
  </div>
  <div class="rt-tariff-option is--disabled">
    <i class="rt-tariff-option__icon">
      <rt-system-icons name="screen tv"></rt-system-icons>
    </i>
    <div class="rt-tariff-option__info">
      <p class="rt-tariff-option__title">Не включена</p>
      <p class="rt-tariff-option__desc">Цифровое ТВ</p>
    </div>
  </div>
  <div class="rt-tariff-option">
    <i class="rt-tariff-option__icon">
      <rt-system-icons name="wink"></rt-system-icons>
    </i>
    <div class="rt-tariff-option__info">
      <p class="rt-tariff-option__title">10 000 фильмов и сериалов</p>
      <p class="rt-tariff-option__desc">Видеосервис Wink</p>
    </div>
  </div>
  <div class="rt-tariff-option is--disabled">
    <i class="rt-tariff-option__icon">
      <rt-system-icons name="tablet"></rt-system-icons>
    </i>
    <div class="rt-tariff-option__info">
      <p class="rt-tariff-option__title">Не включена</p>
      <p class="rt-tariff-option__desc">Мобильная связь</p>
    </div>
  </div>
  <rt-microtabs class="rt-tariff__line rt-reverse-horizontal sp-h-1 sp-v-0-3">
    <template slot="nav">
      <rt-microtabs-nav>Оборудование</rt-microtabs-nav>
      <rt-microtabs-nav>Яндекс Диск</rt-microtabs-nav>
    </template>
    <template slot="cnt">
      <rt-microtabs-cnt>
        <p>Роутер <span class="rt-tariff-price--inline">+ 80 руб/мес</span></p>
        <p>&nbsp;</p>
      </rt-microtabs-cnt>
      <rt-microtabs-cnt>
        <p>5 ГБ Яндекс.Диск +</p>
        <p>&nbsp;</p>
      </rt-microtabs-cnt>
    </template>
  </rt-microtabs>
  <div class="rt-tariff__line rt-font-right sp-t-0-3 sp-h-1">
    <rt-price
      :value="600"
      :v2="true"
    ></rt-price>
    <rt-button class="rt-button-orange rt-button--is-block">Подключить</rt-button>
  </div>
  <div class="sp-t-0-3 rt-font-center">
    <a class="rt-tariff__link">Настроить тариф</a>
  </div>
</div>
      `
    },
    cardPromo(){
      return `
<div class="rt-tariff">
  <div class="rt-tariff__title">Технологии выгоды</div>
  <div class="rt-tariff__badge"></div>
  <div class="rt-tariff-option">
    <i class="rt-tariff-option__icon">
      <rt-system-icons name="internet"></rt-system-icons>
    </i>
    <div class="rt-tariff-option__info">
      <p class="rt-tariff-option__title">300 Мбит/с</p>
      <p class="rt-tariff-option__desc">Интернет</p>
    </div>
  </div>
  <div class="rt-tariff-option">
    <i class="rt-tariff-option__icon">
      <rt-system-icons name="screen tv"></rt-system-icons>
    </i>
    <div class="rt-tariff-option__info">
      <p class="rt-tariff-option__title">До 227 каналов</p>
      <p class="rt-tariff-option__desc">Интерактивное ТВ Wink</p>
    </div>
  </div>
  <div class="rt-tariff-option">
    <i class="rt-tariff-option__icon">
      <rt-system-icons name="wink"></rt-system-icons>
    </i>
    <div class="rt-tariff-option__info">
      <p class="rt-tariff-option__title">10 000 фильмов и сериалов</p>
      <p class="rt-tariff-option__desc">Онлайн-кинотеатр Wink</p>
    </div>
  </div>
  <div class="rt-tariff-option">
    <i class="rt-tariff-option__icon">
      <rt-system-icons name="tablet"></rt-system-icons>
    </i>
    <div class="rt-tariff-option__info">
      <p class="rt-tariff-option__title">1200 мин/100 гб/500 смс</p>
      <p class="rt-tariff-option__desc">Мобильная связь</p>
    </div>
  </div>
  <rt-microtabs class="rt-tariff__line rt-reverse-horizontal sp-h-1 sp-v-0-3">
    <template slot="nav">
      <rt-microtabs-nav theme="purple">Акция</rt-microtabs-nav>
      <rt-microtabs-nav>Антивирус</rt-microtabs-nav>
      <rt-microtabs-nav>Оборудование</rt-microtabs-nav>
      <rt-microtabs-nav>Доп. параметры</rt-microtabs-nav>
      <rt-microtabs-nav>Яндекс Диск</rt-microtabs-nav>
    </template>
    <template slot="cnt">
      <rt-microtabs-cnt>
        <p>Доступ к видеосервису Wink с максимальной выгодой до 2 месяцев</p>
      </rt-microtabs-cnt>
      <rt-microtabs-cnt>
        <p>Kaspersky Internet Security 2 устройства</p>
      </rt-microtabs-cnt>
      <rt-microtabs-cnt>
        <p>Роутер <span class="rt-tariff-price--inline">+ 80 руб/мес</span></p>
        <p>ТВ-приставка <span class="rt-tariff-price--inline">+ 50 руб/мес</span></p>
      </rt-microtabs-cnt>
      <rt-microtabs-cnt>
        <p>Приоритизация трафика на приложения для работы</p>
      </rt-microtabs-cnt>
      <rt-microtabs-cnt>
        <p>5 ГБ Яндекс.Диск +</p>
      </rt-microtabs-cnt>
    </template>
  </rt-microtabs>
  <div class="rt-tariff__line rt-font-right sp-t-0-3 sp-h-1">
    <rt-price
      :value="749"
      :v2="true"
    ></rt-price>
    <rt-button class="rt-button-purple rt-button--is-block">Подключить</rt-button>
  </div>
  <div class="sp-t-0-3 rt-font-center">
    <a class="rt-tariff__link">Настроить тариф</a>
  </div>
</div>
      `
    },
    cardSale(){
      return `
<div class="rt-tariff is--sale">
  <div class="rt-tariff__title">Технологии выгоды. PRO</div>
  <div class="rt-tariff__badge">10%</div>
  <div class="rt-tariff-option">
    <i class="rt-tariff-option__icon">
      <rt-system-icons name="internet"></rt-system-icons>
    </i>
    <div class="rt-tariff-option__info">
      <p class="rt-tariff-option__title">800 Мбит/с</p>
      <p class="rt-tariff-option__desc">Интернет</p>
    </div>
  </div>
  <div class="rt-tariff-option">
    <i class="rt-tariff-option__icon">
      <rt-system-icons name="screen tv"></rt-system-icons>
    </i>
    <div class="rt-tariff-option__info">
      <p class="rt-tariff-option__title">До 227 каналов</p>
      <p class="rt-tariff-option__desc">Интерактивное ТВ Wink</p>
    </div>
  </div>
  <div class="rt-tariff-option">
    <i class="rt-tariff-option__icon">
      <rt-system-icons name="wink"></rt-system-icons>
    </i>
    <div class="rt-tariff-option__info">
      <p class="rt-tariff-option__title">10 000 фильмов и сериалов</p>
      <p class="rt-tariff-option__desc">Онлайн-кинотеатр Wink</p>
    </div>
  </div>
  <div class="rt-tariff-option">
    <i class="rt-tariff-option__icon">
      <rt-system-icons name="tablet"></rt-system-icons>
    </i>
    <div class="rt-tariff-option__info">
      <p class="rt-tariff-option__title">2000 мин/100 гб/500 смс/5 SIM</p>
      <p class="rt-tariff-option__desc">Мобильная связь</p>
    </div>
  </div>
  <rt-microtabs class="rt-tariff__line rt-reverse-horizontal sp-h-1 sp-v-0-3">
    <template slot="nav">
      <rt-microtabs-nav theme="orange">Удаленка</rt-microtabs-nav>
      <rt-microtabs-nav>Антивирус</rt-microtabs-nav>
      <rt-microtabs-nav>Оборудование</rt-microtabs-nav>
      <rt-microtabs-nav>Доп. параметры</rt-microtabs-nav>
      <rt-microtabs-nav>Яндекс Диск</rt-microtabs-nav>
    </template>
    <template slot="cnt">
      <rt-microtabs-cnt>
        <p>Видеоконференции без потери качества сигнала</p>
      </rt-microtabs-cnt>
      <rt-microtabs-cnt>
        <p>Kaspersky Internet Security 2 устройства</p>
      </rt-microtabs-cnt>
      <rt-microtabs-cnt>
        <p>Роутер <span class="rt-tariff-price--inline">+ 80 руб/мес</span></p>
        <p>ТВ-приставка <span class="rt-tariff-price--inline">+ 99 руб/мес</span></p>
      </rt-microtabs-cnt>
      <rt-microtabs-cnt>
        <p>Приоритизация трафика на приложения для работы</p>
      </rt-microtabs-cnt>
      <rt-microtabs-cnt>
        <p>5 ГБ Яндекс.Диск +</p>
      </rt-microtabs-cnt>
    </template>
  </rt-microtabs>
  <div class="rt-tariff__line rt-font-right sp-t-0-3 sp-h-1">
    <rt-price
      :old-value="1640"
      :value="1470"
      :v2="true"
    ></rt-price>
    <rt-button class="rt-button-orange rt-button--is-block">Подключить</rt-button>
  </div>
  <div class="sp-t-0-3 rt-font-center">
    <a class="rt-tariff__link">Настроить тариф</a>
  </div>
</div>
      `
    },
    cardDark(){
      return `
<div class="rt-tariff is--dark">
  <div class="rt-tariff__title">Комбо игровой 4в1+</div>
  <div class="rt-tariff-option">
    <i class="rt-tariff-option__icon">
      <rt-system-icons name="internet"></rt-system-icons>
    </i>
    <div class="rt-tariff-option__info">
      <p class="rt-tariff-option__title">800 Мбит/с</p>
      <p class="rt-tariff-option__desc">Интернет</p>
    </div>
  </div>
  <div class="rt-tariff-option">
    <i class="rt-tariff-option__icon">
      <rt-system-icons name="screen tv"></rt-system-icons>
    </i>
    <div class="rt-tariff-option__info">
      <p class="rt-tariff-option__title">До 227 каналов</p>
      <p class="rt-tariff-option__desc">Интерактивное ТВ Wink</p>
    </div>
  </div>
  <div class="rt-tariff-option">
    <i class="rt-tariff-option__icon">
      <rt-system-icons name="wink"></rt-system-icons>
    </i>
    <div class="rt-tariff-option__info">
      <p class="rt-tariff-option__title">10 000 фильмов и сериалов</p>
      <p class="rt-tariff-option__desc">Онлайн-кинотеатр Wink</p>
    </div>
  </div>
  <div class="rt-tariff-option">
    <i class="rt-tariff-option__icon">
      <rt-system-icons name="tablet"></rt-system-icons>
    </i>
    <div class="rt-tariff-option__info">
      <p class="rt-tariff-option__title">2000 мин/100 гб/500 смс/5 SIM</p>
      <p class="rt-tariff-option__desc">Мобильная связь</p>
    </div>
  </div>
  <rt-microtabs class="rt-tariff__line rt-reverse-horizontal sp-h-1 sp-v-0-3" :inverse="true">
    <template slot="nav">
      <rt-microtabs-nav>Игровые опции</rt-microtabs-nav>
      <rt-microtabs-nav>Оборудование</rt-microtabs-nav>
    </template>
    <template slot="cnt">
      <rt-microtabs-cnt>
        <p>Видеоконференции без потери качества сигнала</p>
      </rt-microtabs-cnt>
      <rt-microtabs-cnt>
        <p>Роутер <span class="rt-tariff-price--inline">+ 80 руб/мес</span></p>
        <p>ТВ-приставка <span class="rt-tariff-price--inline">+ 50 руб/мес</span></p>
      </rt-microtabs-cnt>
    </template>
  </rt-microtabs>
  <div class="rt-tariff__line rt-font-right sp-t-0-3 sp-h-1">
    <rt-price
      :value="1550"
      :v2="true"
    ></rt-price>
    <rt-button class="rt-button-full-white rt-button--is-block">Подключить</rt-button>
  </div>
  <div class="sp-t-0-3 rt-font-center">
    <a class="rt-tariff__link">Настроить тариф</a>
  </div>
  <div class="rt-tariff__bg"></div>
</div>
      `
    },
    cardYaDisk(){
      return `
<div class="rt-tariff is--yadisk">
  <div class="rt-tariff__title">Облачный</div>
  <div class="rt-tariff-option">
    <i class="rt-tariff-option__icon">
      <rt-system-icons name="internet"></rt-system-icons>
    </i>
    <div class="rt-tariff-option__info">
      <p class="rt-tariff-option__title">800 Мбит/с</p>
      <p class="rt-tariff-option__desc">Интернет</p>
    </div>
  </div>
  <div class="rt-tariff-option is--disabled">
    <i class="rt-tariff-option__icon">
      <rt-system-icons name="screen tv"></rt-system-icons>
    </i>
    <div class="rt-tariff-option__info">
      <p class="rt-tariff-option__title">Не включена</p>
      <p class="rt-tariff-option__desc">Интерактивное ТВ Wink</p>
    </div>
  </div>
  <div class="rt-tariff-option is--disabled">
    <i class="rt-tariff-option__icon">
      <rt-system-icons name="wink"></rt-system-icons>
    </i>
    <div class="rt-tariff-option__info">
      <p class="rt-tariff-option__title">Не включена</p>
      <p class="rt-tariff-option__desc">Онлайн-кинотеатр Wink</p>
    </div>
  </div>
  <div class="rt-tariff-option is--disabled">
    <i class="rt-tariff-option__icon">
      <rt-system-icons name="tablet"></rt-system-icons>
    </i>
    <div class="rt-tariff-option__info">
      <p class="rt-tariff-option__title">Не включена</p>
      <p class="rt-tariff-option__desc">Мобильная связь</p>
    </div>
  </div>
  <rt-microtabs class="rt-tariff__line rt-reverse-horizontal sp-h-1 sp-v-0-3" :inverse="true">
    <template slot="nav">
      <rt-microtabs-nav>Опции</rt-microtabs-nav>
      <rt-microtabs-nav>Оборудование</rt-microtabs-nav>
    </template>
    <template slot="cnt">
      <rt-microtabs-cnt>
        <p>Яндекс.Диск Unlim</p>
        <p>&nbsp;</p>
      </rt-microtabs-cnt>
      <rt-microtabs-cnt>
        <p>Роутер <span class="rt-tariff-price--inline">+ 80 руб/мес</span></p>
        <p>&nbsp;</p>
      </rt-microtabs-cnt>
    </template>
  </rt-microtabs>
  <div class="rt-tariff__line rt-font-right sp-t-0-3 sp-h-1">
    <rt-price
      :value="890"
      :v2="true"
    ></rt-price>
    <rt-button class="rt-button-full-white rt-button--is-block">Подключить</rt-button>
  </div>
  <div class="sp-t-0-3 rt-font-center">
    <a class="rt-tariff__link">Настроить тариф</a>
  </div>
  <div class="rt-tariff__bg"></div>
</div>
      `
    }
  }
}
</script>

<style lang="stylus">
// Перезаписываем Z-index при просмотре кода, чтобы карточки не налазили на редактор
.rt-code-viewer
  .rt-carousel,
  .rt-carousel__slide
    z-index auto
</style>

<template>
  <div>
    <div class="rt-container">
      <div class="grid-center"/>
      <div class="app-content rt-col-12 rt-col-md-3">
        <div class="app-title">
          <div class="row"><h1 class="rt-font-hero rt-col">Banners</h1></div>
        </div>
      </div>
    </div>
    <div class="rt-container">
      <pre-code
        text='<div class="rt-col-12 rt-space-bottom2">
        <rt-banner
          :no-triangle="true"
          :round-angles="true"
          :has-custom-content="true">
          <rt-banner-item
            background-image="/static/images/B2B/banner-img.png"
            background-image-tablet="https://www.apple.com/v/home/ek/images/heroes/airpods-film/hero__dvsxv8smkkgi_mediumtall_2x.jpg"
            background-image-mobile="https://www.apple.com/v/apple-arcade/c/images/overview/game_poster_thepathless__qvjhsw7g0h26_medium_2x.jpg"
            :is-white-color="true"
            background-color="b2b-dark-state">
            <div class="rtb-banner__text-content">
              <h3 class="rt-font-bold rt-space-bottom05">Скидка 50% на Wi-Fi для бизнеса  при подключении интернета</h3>
              <p class="rt-font-small-paragraph">Пакет «Быть в плюсе»</p>
            </div>
            <div v-rt-scroll-to-on-click="{ scrollToId : &#39;test&#39; }">
              <rt-button class="rt-button-small rt-button-white rt-button-with-ripple">Подробнее</rt-button>
            </div>
          </rt-banner-item>
        </rt-banner>
      </div>'></pre-code>
    </div>

    <pre-code
      text='<rt-banner content-height="500px"
                       content-mobile-height="400px"
                       :has-image-on-mobile="true">
      <rt-banner-item :is-white-color="true"
                      content-mobile-height="400px">
        <h1 class="rt-font-banner-label">Виртуальная <br> телефония</h1>
        <p class="p1 rt-space-top rt-space-bottom15">Быстрое подключение без трат на оборудование,<br class="md-d-none">
          возможность пользоваться из любой точки мира <br class="md-d-none"> и ни одного пропущенного звонка клиента</p>
        <rt-button class="rt-button-orange">Подробнее</rt-button>
      </rt-banner-item>
    </rt-banner>'
    />
    <pre-code
      text="<rt-banner :no-triangle='true'
                       :without-empty-column='true'
                       :without-second-empty-column='true'
                       :transparent-background-image='true'
                       :mobile-image-on-top='true'
                       :switch-off-timer='true'
                       :has-image-on-mobile='true'>
      <rt-banner-item :is-white-color='true'
                      background-color='green'
                      background-image='/static/images/B2B/big-internet-slide-1.png'>
        <h2 class='rt-font-bold'>Легко обмениваться большими объемами информации</h2>
        <p class='p1 rt-space-top rt-space-bottom25'>Отправляйте объемные
          фото и видео, работайте с облачными сервисами и большими базами данных — скорости интернета хватит на всё</p>
      </rt-banner-item>
      <rt-banner-item :is-white-color='true'
                      content-mobile-height='500px'
                      background-color='dark-blue-high'
                      background-image='/static/images/B2B/big-internet-slide-2.png'>
        <h2 class='rt-font-bold'>Эффективно работать  с онлайн-сервисами</h2>
        <p class='p1 rt-space-top rt-space-bottom25'>Благодаря стабильному высокоскоростному интернету
            вашим сотрудникам будет удобнее работать с корпоративной почтой и CRM-системой, что позволит повысить уровень продаж</p>
      </rt-banner-item>
      <rt-banner-item :is-white-color='true'
                      content-mobile-height='500px'
                      background-color='dark-blue'
                      background-image='/static/images/B2B/big-internet-slide-3.png'>
        <h2 class='rt-font-bold'>Повысить лояльность клиентов</h2>
        <p class='p1 rt-space-top rt-space-bottom25'>Офисы, кафе, салоны красоты и другие заведения с
          бесплатным Wi-Fi и телевидением привлекают и удерживают больше посетителей</p>
      </rt-banner-item>
    </rt-banner>"
    />
    <pre-code
      text="<rt-banner :set-stop-on-click='true'
                       :sleep-time='20000'
                       bannerLogo='/static/example-images/Logo.svg'
                       content-mobile-min-height='80vh'
                       content-mobile-height='300px'>
      <rt-banner-item background-image='/static/example-images/banerBackground1.jpg'
                      :is-white-color='true'
                      content-mobile-min-height='80vh'
                      content-mobile-height='200px'
                      background-color='dark-state'
                      :has-image-on-mobile='true'>
        <p class='rt-font-banner-label'>Виртуальная <br> телефония</p>
        <p class='rt-space-top rt-space-bottom15'>Быстрое подключение без трат на оборудование,<br>
          возможностьпользоваться из любой точки мира <br> и ни одного пропущенного звонка клиента</p>
        <rt-button class='rt-button-orange'>Подробнее</rt-button>
      </rt-banner-item>
      <rt-banner-item ancor-get-params-link='utm-source=vova-privet' ancor-hash-link='testBannerHash' background-color='yellow' background-image='/static/example-images/banerBackground2.jpg'><p
        class='rt-font-banner-label'>Помогаем бизнесу <br> экономить</p>
        <p class='rt-space-top rt-space-bottom15'>Цифровые сервисы и технологии по выгодным ценам для среднего и
          малогобизнеса </p>
        <rt-button class='rt-button-orange'>Подробнее</rt-button>
      </rt-banner-item>
    </rt-banner>"
    />
    <pre-code
      text="<rt-banner :is-fullscreen-image='true' bannerLogo='/static/example-images/Logo.svg'
                       content-height='100vh'>
        <rt-banner-item background-image='/static/example-images/banerBackground1.jpg' :is-white-color='true'background-color='dark-state'>
          <p class='rt-font-banner-label'>Виртуальная <br> телефония</p>
          <p class='rt-space-top rt-space-bottom15'>Быстрое подключение без трат на оборудование,<br> возможностьпользоваться из любой точки мира <br> и ни одного пропущенного звонка клиента</p>
          <rt-button class='rt-button-orange'>Подробнее</rt-button>
        </rt-banner-item>
      </rt-banner>"
    />
    <pre-code
      text="<rt-banner :sleep-time='10000' content-tablet-min-height='300px'
    content-mobile-min-height='100px'
    content-tablet-height='300px'
    content-tablet-min-height='300px'
    content-mobile-height='300px'
    content-height='600px'
    content-min-height='300px'>
        <rt-banner-item background-image='/static/example-images/banerBackground1.jpg' :is-white-color='true'background-color='dark-state'
        content-tablet-min-height='300px'
    content-mobile-min-height='100px'
    content-tablet-height='300px'
    content-tablet-min-height='300px'
    content-mobile-height='300px'
    content-height='600px'
    content-min-height='300px'
    >
          <p class='rt-font-banner-label'>Виртуальная !!!<br> телефония</p>
          <p class='rt-space-top rt-space-bottom15'>Быстрое подключение без трат на оборудование,<br> возможностьпользоваться из любой точки мира <br> и ни одного пропущенного звонка клиента</p>
          <rt-button class='rt-button-orange'>Подробнее</rt-button>
        </rt-banner-item>
        <rt-banner-item background-color='yellow' background-image='/static/example-images/banerBackground2.jpg'>
        <p class='rt-font-banner-label'>Помогаем бизнесу <br> экономить</p>
        <p class='rt-space-top rt-space-bottom15'>Цифровые сервисы и технологии по выгодным ценам для среднего и малогобизнеса </p>
        <rt-button class='rt-button-orange'>Подробнее</rt-button>
        </rt-banner-item>
      </rt-banner>"
    />
    <pre-code
      text="<rt-banner :switch-off-timer='true'
                       :background-image-left='true'>
        <rt-banner-item :has-image-on-mobile='true'>
          <p class='tagline rt-space-bottom05'>сервис или продукт</p>
          <h1 class='rt-font-banner-label'>Виртуальная <br> телефония</h1>
          <p class='p1 rt-space-top rt-space-bottom15'>Быстрое подключение без трат на оборудование,<br>
            возможность пользоваться из любой точки мира <br> и ни одного пропущенного звонка клиента</p>
          <rt-button class='rt-button-orange'>Подробнее</rt-button>
        </rt-banner-item>
        <rt-banner-item background-image='/static/images/B2B/test-image-half.png'
                        background-color='green-low'
                        :has-image-on-mobile='true'>
          <rt-color-line-text color-icon='yellow'
                              fill-color='pink-low'>
            <template slot='label'>Мама мыла раму!</template>
            <template slot='content'>Ваш дом всегда под контролем, <br> даже когда вы далеко.</template>
          </rt-color-line-text>
          <rt-button class='rt-button-orange'>Подробнее</rt-button>
        </rt-banner-item>

    </rt-banner>"
    />
    <pre-code
      text="<rt-banner :switch-off-timer='true'
                       :is-fullscreen-image='true'
                       content-height='600px'
                       :without-empty-column='true'
                       :without-second-empty-column='true'
                       justify='left'
                       content-mobile-height='500px'>
      <rt-banner-item background-image='/static/images/B2B/test-image.png'
                      :is-white-color='true'
                      background-color='main-color'>
          <div class='rt-link-back-wrapper'>
            <svg width='16px' height='16px' viewBox='0 0 16 16' class='rt-vam rt-link-arrow'>
              <path d='M 8,15 L 1,8 L 16,8 L 1,8 L 8,1' stroke='#000000' stroke-width='2' fill='none'/>
            </svg>
            <a href='#' class='rt-link-back'>Текст ссылки</a>
          </div>
          <h1 class='rt-font-banner-label'>Виртуальная <br> телефония</h1>
          <p class='p1 rt-space-top rt-space-bottom15'>Быстрое подключение без трат на оборудование,<br>
            возможность пользоваться из любой точки мира <br> и ни одного пропущенного звонка клиента</p>
          <rt-button class='rt-button-orange'>Подробнее</rt-button>
        </rt-banner-item>
        <rt-banner-item background-image='/static/images/B2B/telephony-banner-bg.png'
                        :is-white-color='true'
                        background-color='green'
                        :color-fill-on-mobile='true'>
          <p class='rt-font-banner-label'>Телефония</p>
          <p class='rt-space-top rt-space-bottom15'>Комплексные сервисы защиты цифровых <br>систем вашего бизнеса</p>
        </rt-banner-item>
      </rt-banner>
    "/>
    <pre-code
      text="<rt-banner :switch-off-timer='true'
                       :fixed-image='true'
                       :is-fullscreen-image='true'
                       content-height='600px'
                       :without-empty-column='true'
                       :without-second-empty-column='true'
                       justify='left'
                       content-mobile-height='500px'>
      <rt-banner-item background-image='/static/images/windows.jpg'
                      :is-white-color='true'>
          <p class='tagline color-orange rt-space-bottom05'>сервис или продукт</p>
          <rt-color-line-text color-icon='orange' fill-color='dark-blue'>
            <template slot='label'>Виртуальная <br> телефония</template>
            <template slot='content'>Быстрое подключение без трат на оборудование,<br>
      возможность пользоваться из любой точки мира <br> и ни одного пропущенного звонка клиента</template>
    </rt-color-line-text>
    <rt-button class='rt-button-orange'>Подробнее</rt-button>
    </rt-banner-item>
    </rt-banner>
    "/>
    <div class="rt-space-bottom95-half">
      <div class="rt-space-bottom95-half">
        <div class="rt-space-bottom4">
          <rt-banner :sleep-time="30000" :is-fullscreen-image="true" content-height="470px" :is-background-banner="true"
                     :has-custom-content="true">
            <rt-banner-item is-game-banner-item background-video="/static/video/Trailer_Warface_Annoucement_20180628_4000.mp4"
                            :is-white-color="true" background-color="dark-state"
            />
          </rt-banner>
        </div>
      </div>
    </div>
    <pre-code
    text="
      <rt-banner :is-fullscreen-image='true' :sleep-time='30000' content-height='100vh' content-mobile-min-height='100vh' content-mobile-height='400px'>
        <rt-banner-item background-video='https://qq.webrtc.win/tv/Pear-Demo-Yosemite_National_Park.mp4'
                        :slide-time='50000'
                        link-target='_blank'
                        link='https://www.google.co.uk/search?q=yosemite+national+park'
                        :is-white-color='true' background-color='dark-state'>
          <rt-color-line-text label-color='red' content-color='red'>
            <template slot='label'>Расширяя границы</template>
            <template slot='content'>Высокоскоростной интернет теперь повсюду</template>
          </rt-color-line-text>
          <rt-button class='rt-button-orange'>Подробнее</rt-button>
        </rt-banner-item>
        <rt-banner-item background-color='yellow'
                        background-image='/static/example-images/banerBackground2.jpg'
                        :slide-time='2000'>
          <rt-color-line-text>
            <template slot='label'>Помогаем бизнесу <br> экономить</template>
            <template slot='content'>Цифровые сервисы и технологии по выгодным ценам для среднего и малогобизнеса
            </template>
          </rt-color-line-text>
          <rt-button class='rt-button-orange'>Подробнее</rt-button>
        </rt-banner-item>
        <rt-banner-item link='https://www.google.co.uk/search?q=ElephantsDream'
                        background-video='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'
                        :is-white-color='true'
                        background-color='orange'
                        :slide-time='30000'>
          <rt-color-line-text color-icon='purple'>
            <template slot='label'>Wink</template>
            <template slot='content'>Более 200 ТВ-каналов, тысячи фильмов и сериалов в одном приложении</template>
          </rt-color-line-text>
          <rt-button class='rt-button-purple'>Подробнее</rt-button>
        </rt-banner-item>
      </rt-banner>
    "/>
    <rt-banner :is-fullscreen-image="true" content-height="500px">
      <rt-banner-item :is-white-color="true"
                      background-image="/static/images/B2B/ArtboardCopy.png"
                      background-color="main-color"
                      :half-height-image="true">
        <p class="rt-font-bold rt-font-h2">Виртуальная АТС</p>
        <p class="rt-font-paragraph rt-space-bottom05-half">Ни одного пропущенного звонка, работает без офиса и
          дополнительного оборудования, из любой точки мира</p>
        <div id="test" class="rt-space-bottom25">
          <rt-button class="rt-button-orange">Оставить заявку</rt-button>
        </div>
        <rt-price :b2b-price='true'
                  :value="1.57"
                  currency='₽'
                  :is-option="true"
                  time-interval="в минуту"
                  class='color-white'
                  show-float='true'
                  :is-time-interval-bottom="true"/>
        <div class="rt-md-space-bottom"/>
      </rt-banner-item>
    </rt-banner>

    <div class="rt-container rt-space-top25">
      <documentation-builder :json="documentation" type="components"/>
    </div>
  </div>
</template>

<script>
  import documentation from "vue-rt-style-kit-molecules/src/components/Banner/docs/index.json";
  import componentsList from "../../componentsList";
  // const componentsList = {};
  export default {
    name: "AppBanners",
    components: componentsList,
    data: () => ({
      documentation: {}
    }),
    mounted() {
      this.documentation = documentation;
    },
    created() {
    },
    methods: {}
  };
</script>

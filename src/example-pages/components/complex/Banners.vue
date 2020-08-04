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
    <div class="sp-b-2">
    <rt-banner-v2>
      <rt-banner-item-v2>
        <template slot="header">
          <img src="http://46.101.72.150/static/tmp/headerbtc1460.svg" alt="">
        </template>
        <template slot="mobile-header">
          <img src="http://46.101.72.150/static/tmp/headerbtc1460.svg" height="32px" alt="">
        </template>
        <template slot="label">Легко подключить,<br> комфортно жить</template>
        <template slot="footer"><rt-button color="orange">Подробнее</rt-button></template>
        <template slot="image"><img src="http://46.101.72.150/static/tmp/bannerImage.jpg" alt=""></template>
        <template slot="image-x2"><img src="http://46.101.72.150/static/tmp/bannerImage-x2.jpg" alt=""></template>
      </rt-banner-item-v2>
      <rt-banner-item-v2 color-type="orange">
        <template slot="header">
          <img class="d-block" src="http://46.101.72.150/static/tmp/logowink.svg" alt="">
        </template>
        <template slot="mobile-header">
          <svg width="32" height="40" viewBox="0 0 32 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.8678 0.344238L0.182129 10.985L9.22389 19.9887L0.182129 28.9961L10.8678 39.6368L30.599 19.9887L10.8678 0.344238Z" fill="white"/>
          </svg>
        </template>
        <template slot="label">Разжигают страсть</template>
        <template slot="description">Абонемент «Киноман» Скидка на все фильмы и сериалы</template>
        <template slot="footer"><rt-button color="full-white" >Подробнее</rt-button></template>
        <template slot="image"><img src="http://46.101.72.150/static/tmp/bannerImageOrange.jpg" alt=""></template>
        <template slot="image-x2"><img src="http://46.101.72.150/static/tmp/bannerImageOrange-x2.jpg" alt=""></template>
      </rt-banner-item-v2>
      <rt-banner-item-v2>
        <template slot="label">Виртуальная АТС <br> и 1 000 минут бесплатно</template>
        <template slot="description">Соберите сами свой пакет фильмов и каналов.</template>
        <template slot="footer"><rt-button color="orange" >Подробнее</rt-button></template>
        <template slot="image"><img src="http://46.101.72.150/static/tmp/bannerImage.jpg" alt=""></template>
        <template slot="image-x2"><img src="http://46.101.72.150/static/tmp/bannerImage-x2.jpg" alt=""></template>
      </rt-banner-item-v2>
      <rt-banner-item-v2  color-type="dark-slate">
        <template slot="label">Не платите за лишнее</template>
        <template slot="description">Соберите сами свой пакет фильмов и каналов.</template>
        <template slot="footer"><rt-button color="orange" >Подробнее</rt-button></template>
        <template slot="image"><img src="http://46.101.72.150/static/tmp/bannerImageBlack.jpg" alt=""></template>
        <template slot="image-mobile"><img src="http://46.101.72.150/static/tmp/bannerImageBlack-mobile.jpg" alt=""></template>
        <template slot="image-x2"><img src="http://46.101.72.150/static/tmp/bannerImageBlack-2x.jpg" alt=""></template>
      </rt-banner-item-v2>
    </rt-banner-v2>
    </div>
    <div class="rt-container is-b2b">




      <pre-code
          text='<div class="rt-col-12 rt-space-bottom2">
        <rt-banner
          :no-triangle="true"
          :round-angles="true"
          :has-custom-content="true">
          <rt-banner-item
            background-image="https://www.apple.com/v/home/ek/images/heroes/airpods-film/hero__dvsxv8smkkgi_mediumtall_2x.jpg"
            background-image-tablet="https://www.apple.com/v/home/ek/images/heroes/airpods-film/hero__dvsxv8smkkgi_mediumtall_2x.jpg"
            background-image-mobile="https://www.apple.com/v/apple-arcade/c/images/overview/game_poster_thepathless__qvjhsw7g0h26_medium_2x.jpg"
            background-color="b2b-dark-slate">
            <div class="rtb-banner__text-content">
              <h3 class="rt-font-bold rt-space-bottom05">!!!Скидка 50% на Wi-Fi для бизнеса  при подключении интернета</h3>
              <p class="rt-font-small-paragraph">Пакет «Быть в плюсе»</p>
            </div>
            <div v-rt-scroll-to-on-click="{ scrollToId : &#39;test&#39; }">
              <rt-button class="rt-button-small rt-button-white rt-button-with-ripple">Подробнее</rt-button>
            </div>
          </rt-banner-item>
        </rt-banner>
      </div>'/>
    </div>

    <pre-code
        text="<rt-banner :no-triangle='true'
                       :resize-query-selectors-names='[&quot;.rt-font-bold&quot;,&quot;.p1&quot;]'
                       :without-empty-column='true'
                       :without-second-empty-column='true'
                       :transparent-background-image='true'
                       :mobile-image-on-top='true'
                       :switch-off-timer='true'
                       :has-image-on-mobile='true'
                       content-mobile-height='500px'>
      <rt-banner-item :is-white-color='true'
                      background-color='green'
                      content-mobile-height='300px'
                      content-mobile-min-height='300px'
                      background-image='/static/images/B2B/big-internet-slide-1.png'>
        <h2 class='rt-font-bold'>Легко обмениваться большими объемами информации</h2>
        <p class='p1 rt-space-top rt-space-bottom25'>Отправляйте объемные
          фото и видео, работайте с облачными сервисами и большими базами данных — скорости интернета хватит на всё</p>
      </rt-banner-item>
      <rt-banner-item :is-white-color='true'
                      content-mobile-height='300px'
                      content-mobile-min-height='300px'
                      background-color='dark-blue-high'
                      background-image='/static/images/B2B/big-internet-slide-2.png'>
        <h2 class='rt-font-bold'>Эффективно работать  с онлайн-сервисами</h2>
        <p class='p1 rt-space-top rt-space-bottom25'>Благодаря стабильному высокоскоростному интернету
            вашим сотрудникам будет удобнее работать с корпоративной почтой и CRM-системой, что позволит повысить уровень продаж</p>
      </rt-banner-item>
      <rt-banner-item :is-white-color='true'
                      content-mobile-height='300px'
                      content-mobile-min-height='300px'
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
                       bannerLogo='http://46.101.72.150/static/tmp/Logo.svg'
                       content-mobile-min-height='80vh'
                       content-mobile-height='300px'>
      <rt-banner-item background-image='http://46.101.72.150/static/tmp/banerBackground1.jpg'
                      :is-white-color='true'
                      content-mobile-min-height='80vh'
                      content-mobile-height='200px'
                      background-color='dark-slate'
                      :has-image-on-mobile='true'>
        <p class='rt-font-banner-label'>Виртуальная <br> телефония</p>
        <p class='rt-space-top rt-space-bottom15'>Быстрое подключение без трат на оборудование,<br>
          возможностьпользоваться из любой точки мира <br> и ни одного пропущенного звонка клиента</p>
        <rt-button class='rt-button-orange'>Подробнее</rt-button>
      </rt-banner-item>
      <rt-banner-item ancor-get-params-link='utm-source=vova-privet' ancor-hash-link='testBannerHash' background-color='yellow' background-image='http://46.101.72.150/static/tmp/banerBackground2.jpg'><p
        class='rt-font-banner-label'>Помогаем бизнесу <br> экономить</p>
        <p class='rt-space-top rt-space-bottom15'>Цифровые сервисы и технологии по выгодным ценам для среднего и
          малогобизнеса </p>
        <rt-button class='rt-button-orange'>Подробнее</rt-button>
      </rt-banner-item>
    </rt-banner>"
    />
    <div class="is-b2c">
      <pre-code
          text="<rt-banner :is-fullscreen-image='true'
                         bannerLogo='http://46.101.72.150/static/tmp/Logo.svg'
                         :resize-query-selectors-names='[&quot;.content-test&quot;]'
                         content-height='100vh'
                         content-mobile-min-height='100vh'
                         content-tablet-min-height='100vh'>
          <rt-banner-item background-image='https://photos.gurushots.com/unsafe/0x0/71310af3b26cac188987af3ae44caa82/3_a718c2caeeb62161282204f20ccfb10a.jpg'
                          :is-white-color='true'
                          background-color='dark-slate'
                          content-height='100vh'
                          content-tablet-min-height='100vh'
                          content-mobile-min-height='100vh'>
                          <div class='content-test'>
            <p class='rt-font-banner-label'>Виртуальная <br> телефония</p>
            <p class='rt-space-top rt-space-bottom15'>Быстрое подключение без трат на оборудование,<br> возможностьпользоваться из любой точки мира <br> и ни одного пропущенного звонка клиента</p>
            </div>
            <rt-button class='rt-button-orange'>Подробнее</rt-button>
          </rt-banner-item>
          <rt-banner-item background-image='https://photos.gurushots.com/unsafe/0x0/6df5398beb5a48117c5fe4b75e4e6829/3_b7817d11a910801fa451d829900e17ee.jpg'
                          :is-white-color='true'
                          background-color='dark-slate'
                          content-height='100vh'
                          content-tablet-min-height='100vh'
                          content-mobile-min-height='100vh'>
                          <div class='content-test'>
            <p class='rt-font-banner-label'>Виртуальная <br> телефония</p>
            <p class='rt-space-top rt-space-bottom15'>Быстрое подключение </p>
            </div>
            <rt-button class='rt-button-orange'>Подробнее</rt-button>
          </rt-banner-item>
        </rt-banner>"
      />
    </div>
    <pre-code
        text="<rt-banner :sleep-time='10000'
                       content-mobile-min-height='100px'
                       content-tablet-height='450px'
                       content-tablet-min-height='450px'
                       content-mobile-height='300px'
                       content-height='600px'
                       content-min-height='300px'>
        <rt-banner-item background-image='http://46.101.72.150/static/tmp/banerBackground1.jpg'
                        :is-white-color='true'
                        background-color='dark-slate'
                        content-mobile-min-height='100px'
                        content-tablet-height='450px'
                        content-tablet-min-height='450px'
                        content-mobile-height='300px'
                        content-height='600px'
                        content-min-height='300px'>
          <p class='rt-font-banner-label'>Виртуальная !!!<br> телефония</p>
          <p class='rt-space-top rt-space-bottom15'>Быстрое подключение без трат на оборудование,<br> возможностьпользоваться из любой точки мира <br> и ни одного пропущенного звонка клиента</p>
          <rt-button class='rt-button-orange'>Подробнее</rt-button>
        </rt-banner-item>
        <rt-banner-item background-color='yellow' background-image='http://46.101.72.150/static/tmp/banerBackground2.jpg'>
        <p class='rt-font-banner-label'>Помогаем бизнесу <br> экономить</p>
        <p class='rt-space-top rt-space-bottom15'>Цифровые сервисы и технологии по выгодным ценам для среднего и малогобизнеса </p>
        <rt-button class='rt-button-orange'>Подробнее</rt-button>
        </rt-banner-item>
      </rt-banner>"
    />
    <pre-code
        text="<rt-banner :switch-off-timer='true'
                      :without-empty-column='true'
                      :background-image-left='true'>
        <rt-banner-item :has-image-on-mobile='true'
                        background-image='https://photos.gurushots.com/unsafe/0x0/71310af3b26cac188987af3ae44caa82/3_465b9d026f5bcdd1429a50313d3dfe63.jpg'
                        content-mobile-min-height='100px'
                        content-tablet-height='500px'
                        content-tablet-min-height='500px'
                        content-mobile-height='500px'
                        content-height='600px'
                        content-min-height='500px'
                        background-color='white'>
          <p class='tagline rt-space-bottom05'>сервис или продукт</p>
          <h1 class='rt-font-banner-label'>Виртуальная ++<br> телефония</h1>
          <p class='p1 rt-space-top rt-space-bottom15'>Быстрое подключение без трат на оборудование,<br>
            возможность пользоваться из любой точки мира <br> и ни одного пропущенного звонка клиента</p>
          <rt-button class='rt-button-orange'>Подробнее</rt-button>
        </rt-banner-item>

        <rt-banner-item background-image='https://photos.gurushots.com/unsafe/0x0/71310af3b26cac188987af3ae44caa82/3_a718c2caeeb62161282204f20ccfb10a.jpg'
                        :has-image-on-mobile='true'
                        background-color='dark-slate'
                        content-mobile-min-height='100px'
                        content-tablet-height='500px'
                        content-tablet-min-height='500px'
                        content-mobile-height='500px'
                        content-height='600px'
                        content-min-height='500px'>
          <rt-color-line-text color-icon='orange'
                              fill-color='white'>
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
                       content-tablet-height='500px'
                       content-mobile-height='500px'>
      <rt-banner-item background-image='/static/images/B2B/test-image.png'
                      :is-white-color='true'
                      background-color='main-color'
                      content-tablet-height='500px'
                      content-mobile-height='500px'>
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
    <div class="rt-space-vertical is-b2c">
      <pre-code
          text="<rt-banner :switch-off-timer='true'
                         :fixed-image='true'
                         :is-fullscreen-image='true'
                         content-height='600px'
                         :without-empty-column='true'
                         :without-second-empty-column='true'
                         content-mobile-height='500px'
                         content-tablet-height='500px'>
        <rt-banner-item background-image='/static/images/windows.jpg'
                        :is-white-color='true'
                        content-mobile-min-height='100px'
                        content-tablet-height='500px'
                        content-tablet-min-height='500px'
                        content-mobile-height='500px'
                        content-height='600px'
                        content-min-height='500px'>
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
            <rt-banner :sleep-time="30000"
                       :is-fullscreen-image="true"
                       content-height="470px"
                       :is-background-banner="true"
                       :has-custom-content="true">
              <rt-banner-item is-game-banner-item
                              background-video="https://www.apple.com/105/media/us/iphone-se/2020/90024c0f-285a-4bf5-af04-2c38de97b06e/anim/4k-video/large_2x.mp4"
                              :is-white-color="true"
                              background-color="dark-slate"
                              content-mobile-min-height='100px'
                              content-tablet-height='470px'
                              content-tablet-min-height='470px'
                              content-mobile-height='500px'
                              content-height='470px'
                              content-min-height='470px'/>
            </rt-banner>
          </div>
        </div>
      </div>
      <pre-code text="<rt-banner :is-fullscreen-image='true'
                                 :sleep-time='30000'
                                 content-height='100vh'
                                 content-mobile-min-height='100vh'
                                 content-tablet-height='400px'
                                 content-mobile-height='400px'>
      <rt-banner-item background-video='https://www.apple.com/105/media/us/iphone-se/2020/90024c0f-285a-4bf5-af04-2c38de97b06e/anim/4k-video/large_2x.mp4'
                      :slide-time='50000'
                      link-target='_blank'
                      link='https://www.google.co.uk/search?q=yosemite+national+park'
                      :is-white-color='true'
                      background-color='dark-slate'
                      content-mobile-min-height='100px'
                      content-tablet-height='500px'
                      content-tablet-min-height='500px'
                      content-mobile-height='500px'
                      content-height='600px'
                      content-min-height='500px'>
        <rt-color-line-text label-color='red' content-color='red'>
          <template slot='label'>Расширяя границы</template>
          <template slot='content'>Высокоскоростной интернет теперь повсюду</template>
        </rt-color-line-text>
        <rt-button class='rt-button-orange'>Подробнее</rt-button>
      </rt-banner-item>
      <rt-banner-item background-color='yellow'
                      background-image='http://46.101.72.150/static/tmp/banerBackground2.jpg'
                      :slide-time='2000'
                      content-mobile-min-height='100px'
                      content-tablet-height='500px'
                      content-tablet-min-height='500px'
                      content-mobile-height='500px'
                      content-height='600px'
                      content-min-height='500px'>
        <rt-color-line-text>
          <template slot='label'>Помогаем бизнесу <br> экономить</template>
          <template slot='content'>Цифровые сервисы и технологии по выгодным ценам для среднего и малогобизнеса
          </template>
        </rt-color-line-text>
        <rt-button class='rt-button-orange'>Подробнее</rt-button>
      </rt-banner-item>
      <rt-banner-item link='https://www.google.co.uk/search?q=ElephantsDream'
                      background-video='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'
                      background-color='orange'
                      :slide-time='30000'
                      content-mobile-min-height='100px'
                      content-tablet-height='500px'
                      content-tablet-min-height='500px'
                      content-mobile-height='500px'
                      content-height='600px'
                      content-min-height='500px'>
        <rt-color-line-text color-icon='purple'>
          <template slot='label'>Wink</template>
          <template slot='content'>Более 200 ТВ-каналов, тысячи фильмов и сериалов в одном приложении</template>
        </rt-color-line-text>
        <rt-button class='rt-button-purple'>Подробнее</rt-button>
      </rt-banner-item>
    </rt-banner>"/>
    </div>

    <rt-banner :is-fullscreen-image="true" content-height="500px" content-mobile-height='500px' content-tablet-height='500px'>
      <rt-banner-item :is-white-color="true"
                      background-image="/static/images/B2B/ArtboardCopy.png"
                      background-color="main-color"
                      :half-height-image="true"
                      content-mobile-min-height='500px'
                      content-tablet-height='500px'
                      content-tablet-min-height='500px'
                      content-mobile-height='500px'
                      content-height='600px'
                      content-min-height='500px'>
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
                  :show-float='true'
                  :is-time-interval-bottom="true"
                  color-value="white"/>
        <div class="rt-md-space-bottom"/>
      </rt-banner-item>
    </rt-banner>

    <div class="rt-container rt-space-top25">
      <documentation-builder :json="documentation" type="components"/>
    </div>
  </div>
</template>

<script>
  import documentation from "@vue-rt-style-kit-molecules-local/components/Banner/docs/index.json";
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

<rt-template>
  <div>
    <div class="rt-container">
      <div class="grid-center" />
      <div class="app-content rt-col-12 rt-col-md-3">
        <div class="app-title">
          <div class="row"><h1 class="rt-font-hero rt-col">Icons</h1></div>
        </div>
      </div>
    </div>
    <div class="rt-container">
      <div class="rt-col-12 rt-space-bottom2">

      </div>
    </div>
    <pre-code
      text='
        <rt-banner has-custom-height="500px"
                   :is-fullscreen-image="true">
          <rt-pattern top-color="error-color" left-color="b2c-light-blue" right-color="b2c-pink" :pattern-type="1"/>
          <rt-banner-item background-image="/static/images/B2B/telephony-banner-bg.png"
                          :is-white-color="true"
                          content-mobile-min-height="500px"
                          background-color="b2c-dark-blue">
            <p class="rt-font-banner-label">Телефония</p>
            <p class="rt-space-top rt-space-bottom15">Комплексные сервисы защиты цифровых <br>систем вашего бизнеса</p>
          </rt-banner-item>
        </rt-banner>
    '/>
    <pre-code
      text="<rt-banner content-mobile-height=&quot;400px&quot;
                       :has-image-on-mobile=&quot;true&quot;>
      <rt-pattern top-color=&quot;error-color&quot;
                  left-color=&quot;b2c-purple-high&quot;
                  right-color=&quot;b2c-pink&quot;
                  :pattern-type=&quot;1&quot;/>
      <rt-banner-item :is-white-color=&quot;true&quot;
                      content-mobile-height=&quot;400px&quot;
                      :pattern-background=&quot;true&quot;
                      :pattern-type=&quot;2&quot;
                      pattern-top-color=&quot;b2c-yellow&quot;
                      pattern-left-color=&quot;main-color&quot;
                      pattern-right-color=&quot;error-color&quot;>
        <h1 class=&quot;rt-font-banner-label&quot;>Виртуальная <br> телефония</h1>
        <p class=&quot;p1 rt-space-top rt-space-bottom15&quot;>Быстрое подключение без трат на оборудование,<br>
          возможностьпользоваться из любой точки мира <br> и ни одного пропущенного звонка клиента</p>
        <rt-button class=&quot;rt-button-orange&quot;>Подробнее</rt-button>
      </rt-banner-item>
    </rt-banner>"
    />
    <pre-code
      text="<rt-banner :no-triangle=&quot;true&quot;
                       :without-empty-column=&quot;true&quot;
                       :without-second-empty-column=&quot;true&quot;
                       :transparent-background-image=&quot;true&quot;
                       :mobile-image-on-top=&quot;true&quot;
                       :switch-off-timer=&quot;true&quot;
                       :has-image-on-mobile=&quot;true&quot;>
      <rt-banner-item :is-white-color=&quot;true&quot;
                      background-color=&quot;green&quot;
                      background-image=&quot;/static/images/B2B/big-internet-slide-1.png&quot;>
        <h2 class=&quot;rt-font-bold&quot;>Легко обмениваться большими объемами информации</h2>
        <p class=&quot;p1 rt-space-top rt-space-bottom25&quot;>Отправляйте объемные
          фото и видео, работайте с облачными сервисами и большими базами данных — скорости интернета хватит на всё</p>
      </rt-banner-item>
      <rt-banner-item :is-white-color=&quot;true&quot;
                      content-mobile-height=&quot;500px&quot;
                      background-color=&quot;dark-blue-high&quot;
                      background-image=&quot;/static/images/B2B/big-internet-slide-2.png&quot;>
        <h2 class=&quot;rt-font-bold&quot;>Эффективно работать  с онлайн-сервисами</h2>
        <p class=&quot;p1 rt-space-top rt-space-bottom25&quot;>Благодаря стабильному высокоскоростному интернету
            вашим сотрудникам будет удобнее работать с корпоративной почтой и CRM-системой, что позволит повысить уровень продаж</p>
      </rt-banner-item>
      <rt-banner-item :is-white-color=&quot;true&quot;
                      content-mobile-height=&quot;500px&quot;
                      background-color=&quot;dark-blue&quot;
                      background-image=&quot;/static/images/B2B/big-internet-slide-3.png&quot;>
        <h2 class=&quot;rt-font-bold&quot;>Повысить лояльность клиентов</h2>
        <p class=&quot;p1 rt-space-top rt-space-bottom25&quot;>Офисы, кафе, салоны красоты и другие заведения с
          бесплатным Wi-Fi и телевидением привлекают и удерживают больше посетителей</p>
      </rt-banner-item>
    </rt-banner>"
    />
    <pre-code
      text="<rt-banner :set-stop-on-click=&quot;true&quot;
                       :sleep-time=&quot;20000&quot;
                       bannerLogo=&quot;/static/example-images/Logo.svg&quot;
                       content-mobile-min-height=&quot;80vh&quot;
                       content-mobile-height=&quot;300px&quot;>
      <rt-banner-item background-image=&quot;/static/example-images/banerBackground1.jpg&quot;
                      :is-white-color=&quot;true&quot;
                      content-mobile-min-height=&quot;80vh&quot;
                      content-mobile-height=&quot;200px&quot;
                      background-color=&quot;dark-state&quot;
                      :has-image-on-mobile=&quot;true&quot;>
        <p class=&quot;rt-font-banner-label&quot;>Виртуальная <br> телефония</p>
        <p class=&quot;rt-space-top rt-space-bottom15&quot;>Быстрое подключение без трат на оборудование,<br>
          возможностьпользоваться из любой точки мира <br> и ни одного пропущенного звонка клиента</p>
        <rt-button class=&quot;rt-button-orange&quot;>Подробнее</rt-button>
      </rt-banner-item>
      <rt-banner-item ancor-get-params-link=&quot;utm-source=vova-privet&quot; ancor-hash-link=&quot;testBannerHash&quot; background-color=&quot;yellow&quot; background-image=&quot;/static/example-images/banerBackground2.jpg&quot;><p
        class=&quot;rt-font-banner-label&quot;>Помогаем бизнесу <br> экономить</p>
        <p class=&quot;rt-space-top rt-space-bottom15&quot;>Цифровые сервисы и технологии по выгодным ценам для среднего и
          малогобизнеса </p>
        <rt-button class=&quot;rt-button-orange&quot;>Подробнее</rt-button>
      </rt-banner-item>
    </rt-banner>"
    />
    <pre-code
      text="<rt-banner :is-fullscreen-image=&quot;true&quot; bannerLogo=&quot;/static/example-images/Logo.svg&quot;>
        <rt-banner-item background-image=&quot;/static/example-images/banerBackground1.jpg&quot; :is-white-color=&quot;true&quot;background-color=&quot;dark-state&quot;>
          <p class=&quot;rt-font-banner-label&quot;>Виртуальная <br> телефония</p>
          <p class=&quot;rt-space-top rt-space-bottom15&quot;>Быстрое подключение без трат на оборудование,<br> возможностьпользоваться из любой точки мира <br> и ни одного пропущенного звонка клиента</p>
          <rt-button class=&quot;rt-button-orange&quot;>Подробнее</rt-button>
        </rt-banner-item>
      </rt-banner>"
    />
    <pre-code
      text="<rt-banner :sleep-time=&quot;10000&quot;>
        <rt-banner-item background-image=&quot;/static/example-images/banerBackground1.jpg&quot; :is-white-color=&quot;true&quot;background-color=&quot;dark-state&quot;>
          <p class=&quot;rt-font-banner-label&quot;>Виртуальная <br> телефония</p>
          <p class=&quot;rt-space-top rt-space-bottom15&quot;>Быстрое подключение без трат на оборудование,<br> возможностьпользоваться из любой точки мира <br> и ни одного пропущенного звонка клиента</p>
          <rt-button class=&quot;rt-button-orange&quot;>Подробнее</rt-button>
        </rt-banner-item>
        <rt-banner-item background-color=&quot;yellow&quot; background-image=&quot;/static/example-images/banerBackground2.jpg&quot;>
        <p class=&quot;rt-font-banner-label&quot;>Помогаем бизнесу <br> экономить</p>
        <p class=&quot;rt-space-top rt-space-bottom15&quot;>Цифровые сервисы и технологии по выгодным ценам для среднего и малогобизнеса </p>
        <rt-button class=&quot;rt-button-orange&quot;>Подробнее</rt-button>
        </rt-banner-item>
      </rt-banner>"
    />
    <pre-code
      text="<rt-banner :switch-off-timer='true'
                       :background-image-left='true'>
        <rt-banner-item :is-white-color='true'
                        :pattern-background='true'
                        :pattern-type='2'
                        pattern-top-color='orange'
                        pattern-left-color='dark-blue'
                        pattern-right-color='pink'
                        :has-image-on-mobile='true'>
          <p class='tagline rt-space-bottom05'>сервис или продукт</p>
          <h1 class='rt-font-banner-label'>Виртуальная <br> телефония</h1>
          <p class='p1 rt-space-top rt-space-bottom15'>Быстрое подключение без трат на оборудование,<br>
            возможность пользоваться из любой точки мира <br> и ни одного пропущенного звонка клиента</p>
          <rt-button class='rt-button-orange'>Подробнее</rt-button>
        </rt-banner-item>
        <rt-banner-item background-image='/static/images/B2B/test-image-half.png'
                        background-color='green-low'
                        :has-image-on-mobile='true'>
          <rt-color-line-text :is-white-color='true'
                              color-icon='yellow'
                              fill-color='pink-low'>
            <rt-template slot='label'>Мама мыла раму!</rt-template>
            <rt-template slot='content'>Ваш дом всегда под контролем, <br> даже когда вы далеко.</rt-template>
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
                      :is-white-color='true'>
          <p class='tagline rt-space-bottom05'>сервис или продукт</p>
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
    <rt-banner :sleep-time="30000" :is-fullscreen-image="true" content-height="470px" :is-background-banner="true" :has-custom-content="true">
      <rt-banner-item is-game-banner-item background-video="/static/video/Trailer_Warface_Annoucement_20180628_4000.mp4"
                      :is-white-color="true" background-color="dark-state"
      />
    </rt-banner>
    <!--<pre-code-->
    <!--text="-->
    <!--<rt-banner :is-fullscreen-image=&quot;true&quot; :sleep-time=&quot;30000&quot;  content-mobile-min-height=&quot;100vh&quot; content-mobile-height=&quot;400px&quot;>-->
    <!--<rt-banner-item background-video=&quot;https://qq.webrtc.win/tv/Pear-Demo-Yosemite_National_Park.mp4&quot;-->
    <!--:slide-time=&quot;50000&quot;-->
    <!--link-target=&quot;_blank&quot;-->
    <!--link=&quot;https://www.google.co.uk/search?q=yosemite+national+park&quot;-->
    <!--:is-white-color=&quot;true&quot; background-color=&quot;dark-state&quot;>-->
    <!--<rt-color-line-text>-->
    <!--<rt-template sljs-form-calc-profile ot=&quot;label&quot;>Расширяя границы</rt-template>-->
    <!--<rt-template slot=&quot;content&quot;>Высокоскоростной интернет теперь повсюду</rt-template>-->
    <!--</rt-color-line-text>-->
    <!--<rt-button class=&quot;rt-button-orange&quot;>Подробнее</rt-button>-->
    <!--</rt-banner-item>-->
    <!--<rt-banner-item background-color=&quot;yellow&quot; background-image=&quot;/static/example-images/banerBackground2.jpg&quot; :slide-time=&quot;2000&quot;>-->
    <!--<rt-color-line-text>-->
    <!--<rt-template slot=&quot;label&quot;>Помогаем бизнесу <br> экономить</rt-template>-->
    <!--<rt-template slot=&quot;content&quot;>Цифровые сервисы и технологии по выгодным ценам для среднего и малогобизнеса-->
    <!--</rt-template>-->
    <!--</rt-color-line-text>-->
    <!--<rt-button class=&quot;rt-button-orange&quot;>Подробнее</rt-button>-->
    <!--</rt-banner-item>-->
    <!--<rt-banner-item-->
    <!--link=&quot;https://www.google.co.uk/search?q=ElephantsDream&quot;-->
    <!--background-video=&quot;http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4&quot;-->
    <!--:is-white-color=&quot;true&quot; background-color=&quot;orange&quot; :slide-time=&quot;30000&quot;>-->
    <!--<rt-color-line-text color-icon=&quot;purple&quot;>-->
    <!--<rt-template slot=&quot;label&quot;>Wink</rt-template>-->
    <!--<rt-template slot=&quot;content&quot;>Более 200 ТВ-каналов, тысячи фильмов и сериалов в одном приложении</rt-template>-->
    <!--</rt-color-line-text>-->
    <!--<rt-button class=&quot;rt-button-purple&quot;>Подробнее</rt-button>-->
    <!--</rt-banner-item>-->
    <!--</rt-banner>-->
    <!--"-->
    <!--/>-->

    <div class="rt-container rt-space-top25">
      <documentation-builder :json="documentation" type="components" />
    </div>
  </div>
</rt-template>

<script>
  // import documentation from "../../../lib/components/Annotation/docs/index.json";
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

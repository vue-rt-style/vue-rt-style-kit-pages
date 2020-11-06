<template>
  <div class="rt-container">
    <div class="rt-col rt-space-top25"></div>
    <div class="rt-col">
      <rt-header-navigation :nav-tree=innerData></rt-header-navigation>
    </div>
  </div>
<!--  <div class="rt-container sp-t-5">-->
<!--    <div class="sp-t-5"/>-->
<!--    <div class="sp-t-5"/>-->
<!--    <div class="sp-t-5"/>-->
<!--    <div class="sp-t-5"/>-->
<!--    <div class="sp-t-5"/>-->
<!--    <div class="sp-t-5"/>-->
<!--    <div class="rt-col-6">-->
<!--      <rt-video-player :source="['http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4']"-->
<!--                       pause-image="/static/images/B2B/AKS_1024x768.jpg" autoplay/>-->
<!--    </div>-->
<!--    <div class="sp-t-5"/>-->
<!--  </div>-->
<!--  <div class="large-business">-->
<!--    <div class="sp-t-2-3"/>-->
<!--    <rt-jumbotron background='dark-slate' url='http://wink.rt.ru/' :ga='{name: "jumbotron-two"}' ga-event-type='b2b'>-->

<!--      <template slot='label'>Сделайте технологии бизнес-партнером</template>-->

<!--      <template slot='body-html'>-->
<!--        <p class='flex-start-center'>Ростелеком создает цифровую инфраструктуру для всех отраслей бизнеса</p>-->
<!--      </template>-->
<!--      <template slot='footer'>-->
<!--        <rt-button class='rt-button-md&#45;&#45;is-block' color='full-white'>Получить консультацию</rt-button>-->
<!--      </template>-->
<!--      <template slot='image'><img src='/static/example-images/1.png' alt=''></template>-->
<!--&lt;!&ndash;      <template slot='image-x2'><img src='https://cinema-vikonda.ru/uploads/film/media/2020-08/2445971516.jpg' alt=''></template>&ndash;&gt;-->
<!--      <template slot='image-tablet'><img src='/static/example-images/2.png' alt=''>-->
<!--      </template>-->
<!--      <template slot='image-mobile'><img src='/static/example-images/3.png' alt=''>-->
<!--      </template>-->
<!--    </rt-jumbotron>-->
<!--    <div class="sp-t-2 sp-b-1">-->
<!--      <rt-benefit-block :columns-quantity="3" :has-icon="true" icon-size="80px" icon-backing-color="cool-grey"-->
<!--                        :icon-backing-size="80" class="rt-benefit__custom-padding">-->
<!--        <rt-benefit-item>-->
<!--          <template slot="image">-->
<!--            <img src="/static/images/B2B/243.svg">-->
<!--          </template>-->
<!--          <template slot="description">-->
<!--            <h4 class="rt-font-bold sp-v-0-1">Широкое покрытие</h4>-->
<!--            <p class="rt-font-small-paragraph sp-t-1">Разрабатываем решения и внедряем проекты по всей России, предоставляем-->
<!--              бизнесу одинаково выгодные предложения и условия сотрудничества.</p>-->
<!--          </template>-->
<!--        </rt-benefit-item>-->
<!--        <rt-benefit-item>-->
<!--          <template slot="image">-->
<!--            <img src="/static/images/B2B/238.svg">-->
<!--          </template>-->
<!--          <template slot="description">-->
<!--            <h4 class="rt-font-bold sp-v-0-1">Гибкость и масштаб</h4>-->
<!--            <p class="rt-font-small-paragraph sp-t-1">Ростелеком – надежный партнер для создания цифровой инфраструктуры в-->
<!--              масштабе всей страны и индивидуальных решений под запрос каждого клиента.</p>-->
<!--          </template>-->
<!--        </rt-benefit-item>-->
<!--        <rt-benefit-item>-->
<!--          <template slot="image">-->
<!--            <img src="/static/images/B2B/134.svg">-->
<!--          </template>-->
<!--          <template slot="description">-->
<!--            <h4 class="rt-font-bold sp-v-0-1">Комплексный подход</h4>-->
<!--            <p class="rt-font-small-paragraph sp-t-1">Комплексно подходим к запросам клиента и благодаря опыту и экспертизе-->
<!--              предлагаем решения и продукты, которые отвечают потребностям бизнеса.</p>-->
<!--          </template>-->
<!--        </rt-benefit-item>-->
<!--      </rt-benefit-block>-->
<!--    </div>-->
<!--    <div class="custom-list sp-v-5 td-sp-v-4 md-sp-v-3-1 color-block&#45;&#45;black">-->
<!--      <div class="rt-container">-->
<!--        <div class="rt-col-8 rt-col-td-6">-->
<!--          <h2 class="rt-font-h2 sp-b-4-2 td-sp-b-2-2 color-white">Разрабатываем продукты, чтобы решать задачи бизнеса и повышать его эффективность:</h2>-->
<!--        </div>-->
<!--        <div class="rt-col-12">-->
<!--          <div class="custom-list__wrapper">-->
<!--            <div class="custom-list__item">-->
<!--              <p class="custom-list__item-text sp-l-1-3">Снижать <br class="md-d-none">издержки</p>-->
<!--            </div>-->
<!--            <div class="custom-list__item">-->
<!--              <p class="custom-list__item-text sp-l-1-3">Увеличивать производительность</p>-->
<!--            </div>-->
<!--            <div class="custom-list__item">-->
<!--              <p class="custom-list__item-text sp-l-1-3">Улучшать&nbsp;отношения с&nbsp;клиентами</p>-->
<!--            </div>-->
<!--            <div class="custom-list__item">-->
<!--              <p class="custom-list__item-text sp-l-1-3">Повышать конкурентоспособность</p>-->
<!--            </div>-->
<!--            <div class="custom-list__item">-->
<!--              <p class="custom-list__item-text sp-l-1-3">Составлять <br class="md-d-none">прогнозы</p>-->
<!--            </div>-->
<!--            <div class="custom-list__item">-->
<!--              <p class="custom-list__item-text sp-l-1-3">Повышать уровень <br>безопасности и контроля</p>-->
<!--            </div>-->
<!--            <div class="custom-list__circle custom-list__circle-one"></div>-->
<!--            <div class="custom-list__circle custom-list__circle-two"></div>-->
<!--            <div class="custom-list__circle custom-list__circle-three"></div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--    <div class="sp-v-4">-->
<!--      <div class="rt-container">-->
<!--        <div class="rt-col">-->
<!--          <h2 class="rt-font-h2 sp-b-2">Нужен заголовок</h2>-->
<!--        </div>-->
<!--      </div>-->
<!--      <rt-resize-content-height :query-selectors-names="['.rt-card .rt-font-small-paragraph']">-->
<!--        <rt-carousel class="LB-custom-carousel">-->
<!--          <rt-carousel-slide>-->
<!--            <rt-card :equal-padding="true"-->
<!--                     background-image="/static/images/B2B/video-surveillance.png"-->
<!--                     :full-width-top-image="true">-->
<!--              <template slot="content">-->
<!--                <h4 class="rt-font-h4 rt-space-bottom15">Видеонаблюдение</h4>-->
<!--                <p class="rt-font-small-paragraph sp-b-0-3">Привлекайте на 70% больше клиентов яркими и динамичными рекламными-->
<!--                  вывесками, увеличивайте продажи дополнительных услуг на 30%</p>-->
<!--              </template>-->
<!--            </rt-card>-->
<!--          </rt-carousel-slide>-->
<!--          <rt-carousel-slide>-->
<!--            <rt-card :equal-padding="true"-->
<!--                     background-image="/static/images/B2B/telephony.png"-->
<!--                     :full-width-top-image="true">-->
<!--              <template slot="content">-->
<!--                <h4 class="rt-font-h4 rt-space-bottom15">Телефония</h4>-->
<!--                <p class="rt-font-small-paragraph sp-b-0-3">Все способы организации телефонии, виртуальные номера,-->
<!--                  мобильная и стационарная связь</p>-->
<!--              </template>-->
<!--            </rt-card>-->
<!--          </rt-carousel-slide>-->
<!--          <rt-carousel-slide>-->
<!--            <rt-card :equal-padding="true"-->
<!--                     background-image="/static/images/B2B/wifi.png"-->
<!--                     :full-width-top-image="true">-->
<!--              <template slot="content">-->
<!--                <h4 class="rt-font-h4 rt-space-bottom15">Wi-Fi</h4>-->
<!--                <p class="rt-font-small-paragraph sp-b-0-3">Wi-Fi-сеть для сотрудников, гостей и клиентов с различными-->
<!--                  способами авторизации и рекламной платформой</p>-->
<!--              </template>-->
<!--            </rt-card>-->
<!--          </rt-carousel-slide>-->
<!--          <rt-carousel-slide>-->
<!--            <rt-card :equal-padding="true"-->
<!--                     background-image="/static/images/B2B/employees-control.png"-->
<!--                     :full-width-top-image="true">-->
<!--              <template slot="content">-->
<!--                <h4 class="rt-font-h4 rt-space-bottom15">Контроль персонала</h4>-->
<!--                <p class="rt-font-small-paragraph sp-b-0-3">Контроль качества обслуживания и продаж, учет рабочего-->
<!--                  времени и оптимизация бизнес-процессов</p>-->
<!--              </template>-->
<!--            </rt-card>-->
<!--          </rt-carousel-slide>-->
<!--        </rt-carousel>-->
<!--      </rt-resize-content-height>-->
<!--    </div>-->
<!--    <div class="LB-video-block color-white">-->
<!--      <div class="permanent-content sp-t-5 td-sp-t-4 md-sp-t-3-1">-->
<!--        <div class="rt-container">-->
<!--          <div class="rt-col">-->
<!--            <h2 class="rt-font-h2 sp-b-3-1 td-sp-2-4 md-sp-b-1-3">Используем отраслевой <br>подход в каждом решении</h2>-->
<!--          </div>-->
<!--          <div class="rt-col">-->
<!--            <div class="permanent-content__controls" ref="controls">-->
<!--              <button class="sector-button sector-button&#45;&#45;active" @click="switchSector">Ретейл</button>-->
<!--              <button class="sector-button" @click="switchSector">Промышленность и добыча</button>-->
<!--              <button class="sector-button" @click="switchSector">Агропромышленный комплекс</button>-->
<!--              <button class="sector-button" @click="switchSector">Финансы</button>-->
<!--            </div>-->
<!--            <div class="LB-video-block__text-content md-sp-t-1-1">-->
<!--              <div class="text-wrapper" ref="text">-->
<!--                <p class="rt-font-paragraph text-content text-content&#45;&#45;active">1 Доверьте нам цифровизацию бизнес-процессов предприятий,-->
<!--                  организовать финансовую отчетность, систему повышения квалификации персонала, наладить техобслуживание-->
<!--                  и диагностику оборудования. Доверьте нам проведение Поможем провести стресс-тестирование существующего-->
<!--                  портфеля активов.</p>-->
<!--                <p class="rt-font-paragraph text-content">2 Доверьте нам цифровизацию бизнес-процессов предприятий,-->
<!--                  организовать финансовую отчетность, систему повышения квалификации персонала, наладить техобслуживание-->
<!--                  и диагностику оборудования. Доверьте нам проведение Поможем провести стресс-тестирование существующего-->
<!--                  портфеля активов.</p>-->
<!--                <p class="rt-font-paragraph text-content">3 Доверьте нам цифровизацию бизнес-процессов предприятий,-->
<!--                  организовать финансовую отчетность, систему повышения квалификации персонала, наладить техобслуживание-->
<!--                  и диагностику оборудования. Доверьте нам проведение Поможем провести стресс-тестирование существующего-->
<!--                  портфеля активов.</p>-->
<!--                <p class="rt-font-paragraph text-content">4 Доверьте нам цифровизацию бизнес-процессов предприятий,-->
<!--                  организовать финансовую отчетность, систему повышения квалификации персонала, наладить техобслуживание-->
<!--                  и диагностику оборудования. Доверьте нам проведение Поможем провести стресс-тестирование существующего-->
<!--                  портфеля активов.</p>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="shifting-content" ref="content">-->
<!--        <div class="shifting-content&#45;&#45;desktop">-->
<!--          <div class="LB-content-wrapper LB-content-wrapper&#45;&#45;active">-->
<!--            <video class="sector-video" src="" muted width="100%" height="100%"></video>-->
<!--          </div>-->
<!--          <div class="LB-content-wrapper">-->
<!--            <video class="sector-video" src="" muted width="100%" height="100%"></video>-->
<!--          </div>-->
<!--          <div class="LB-content-wrapper">-->
<!--            <video class="sector-video" src="" muted width="100%" height="100%"></video>-->
<!--          </div>-->
<!--          <div class="LB-content-wrapper">-->
<!--            <video class="sector-video" src="" muted width="100%" height="100%"></video>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="shifting-content&#45;&#45;adaptives">-->
<!--          <div class="LB-content-wrapper LB-content-wrapper&#45;&#45;active" style="background-color: greenyellow">-->
<!--            <img class="sector-image" src="" width="100%" height="100%"/>-->
<!--          </div>-->
<!--          <div class="LB-content-wrapper" style="background-color: blue">-->
<!--            <img class="sector-image" src="" width="100%" height="100%"/>-->
<!--          </div>-->
<!--          <div class="LB-content-wrapper" style="background-color: olive">-->
<!--            <img class="sector-image" src="" width="100%" height="100%"/>-->
<!--          </div>-->
<!--          <div class="LB-content-wrapper" style="background-color: orangered">-->
<!--            <img class="sector-image" src="" width="100%" height="100%"/>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--    <div class="sp-v-4">-->
<!--      <div class="rt-container">-->
<!--        <div class="rt-col">-->
<!--          <h2 class="rt-font-h2">Индивидуально подходим <br>к внедрению каждого проекта</h2>-->
<!--        </div>-->
<!--      </div>-->
<!--      <rt-benefit-block :columns-quantity="4" class="rt-benefit__custom-icons">-->
<!--        <rt-benefit-item>-->
<!--          <template slot="description">-->
<!--            <div class="rt-benefit-item__pseudo-icon rt-font-bold color-main01">01</div>-->
<!--            <p class="rt-font-small-paragraph">Выделяем персонального менеджера для быстрой и качественной коммуникации</p>-->
<!--          </template>-->
<!--        </rt-benefit-item>-->
<!--        <rt-benefit-item>-->
<!--          <template slot="description">-->
<!--            <div class="rt-benefit-item__pseudo-icon rt-font-bold color-main01">02</div>-->
<!--            <p class="rt-font-small-paragraph">Модернизируем существующую или создаем необходимую инфраструктуру</p>-->
<!--          </template>-->
<!--        </rt-benefit-item>-->
<!--        <rt-benefit-item>-->
<!--          <template slot="description">-->
<!--            <div class="rt-benefit-item__pseudo-icon rt-font-bold color-main01">03</div>-->
<!--            <p class="rt-font-small-paragraph">Согласовываем и контролируем метрики, при необходимости начинаем-->
<!--              с пилотного проекта</p>-->
<!--          </template>-->
<!--        </rt-benefit-item>-->
<!--        <rt-benefit-item>-->
<!--          <template slot="description">-->
<!--            <div class="rt-benefit-item__pseudo-icon rt-font-bold color-main01">04</div>-->
<!--            <p class="rt-font-small-paragraph">Отвечаем за результат: работаем по SLA и фиксируем в договоре уровень-->
<!--              качества услуг</p>-->
<!--          </template>-->
<!--        </rt-benefit-item>-->
<!--      </rt-benefit-block>-->
<!--    </div>-->
<!--  </div>-->
</template>

<script>
  const componentsList = {};

  export default {
    name: "AppTestAccess",
    components: componentsList,
    data() {
      return {
        innerData: [
          {
            "label": "Услуги связи",
            "items": [
              {
                "label": "Голосовые услуги",
                "items": [
                  {
                    "label": "Виртуальная АТС",
                    "path": "https://belgorod.rt.ru/b2b/telephony/vats"
                  },
                  {
                    "label": "Номер 8 800",
                    "path": "https://belgorod.rt.ru/b2b/telephony/8800"
                  },
                  {
                    "label": "Виртуальный городской номер",
                    "path": "https://belgorod.rt.ru/b2b/telephony/vats/virtual_numbers"
                  },
                  {
                    "label": "Стационарный телефон",
                    "callback": "{document.querySelectorAll('.rt-tabs-navigation__item')[1].querySelector('.rt-tabs-navigation__item-name').click()}"
                  },
                  {
                    "label": "Мобильная связь для бизнеса",
                    "path": "https://belgorod.rt.ru/b2b/telephony/mobile"
                  },
                  {
                    "label": "Аудиоконференция",
                    "path": "https://belgorod.rt.ru/b2b/telephony/audioconference"
                  }
                ],
                "subTitle": "dfgdsfg<br>dfgfdg"
              },
              {
                "label": "Интернет и WI-FI",
                "items": [
                  {
                    "label": "Фиксированный интернет",
                    "path": "https://belgorod.rt.ru/b2b/internet/fix"
                  },
                  {
                    "label": "Wi-Fi для гостей",
                    "path": "https://belgorod.rt.ru/b2b/internet/business_wifi",
                  },
                  {
                    "label": "Мобильный интернет",
                    "path": "https://belgorod.rt.ru/b2b/internet/mobile_net/action"
                  },
                  {
                    "label": "Виртуальная частная сеть",
                    "path": "https://belgorod.rt.ru/b2b/internet/vpn",
                  },
                  {
                    "label": "Аренда сетевого оборудования",
                    "path": "https://belgorod.rt.ru/b2b/internet/managed_services"
                  }
                ]
              }
            ],
            "image":"/static/images/B2B/new-ad__image.jpg",
            "adTitle": "Рекламный блок 2",
            "adText": "khbvkjbkj</br>hoinoi",
            "linkTarget": "/b2b",
            "linkText": "Подробнее2",
            "expandable": true,
            "newWindow": true
          },
          {
            "label": "Цифровые сервисы",
            "items": [
              {
                "label": "Наблюдение и контроль",
                "items": [
                  {
                    "label": "Видеонаблюдение",
                    "path": "https://belgorod.rt.ru/b2b/videonabludenie"
                  },
                  {
                    "label": "M2M Контроль",
                    "path": "https://belgorod.rt.ru/b2b/solutions/m2m"
                  },
                  {
                    "label": "Тепловизоры",
                    "path": "https://belgorod.rt.ru/b2b/security/thermal_imaging"
                  }
                ]
              },
              {
                "label": "Хранение и безопасность",
                "items": [
                  {
                    "label": "Виртуальный ЦОД",
                    "path": "https://belgorod.rt.ru/b2b/service_cloudy/virtual_dc"
                  },
                  {
                    "label": "Виртуальное хранилище",
                    "path": "https://belgorod.rt.ru/b2b/service_cloudy/virtual-storage"
                  },
                  {
                    "label": "Защита от DDos-атак",
                    "path": "https://belgorod.rt.ru/b2b/security/anti-ddos"
                  },
                  {
                    "label": "Управление навыками инфобезопасности",
                    "path": "https://belgorod.rt.ru/b2b/security/sa"
                  }
                ]
              },
              {
                "label": "Телевидение",
                "items": [
                  {
                    "label": "ТВ для сферы услуг",
                    "path": "https://belgorod.rt.ru/b2b/corp_iptv/restaurants"
                  },
                  {
                    "label": "Ростелеком Экраны",
                    "path": "https://belgorod.rt.ru/b2b/solutions/screens"
                  },
                  {
                    "label": "ТВ в офис или коворкинг",
                    "path": "https://belgorod.rt.ru/b2b/corp_iptv/office"
                  },
                  {
                    "label": "ТВ для гостиниц",
                    "path": "https://belgorod.rt.ru/b2b/corp_iptv/hotels"
                  },
                  {
                    "label": "ТВ для детских учреждений",
                    "path": "https://belgorod.rt.ru/b2b/corp_iptv/children"
                  }
                ]
              },
              {
                "label": "Другие услуги",
                "items": [
                  {
                    "label": "Пакеты \"Быть в плюсе\"",
                    "path": "https://belgorod.rt.ru/b2b/be-in-plus"
                  },
                  {
                    "label": "СМС Реклама",
                    "path": "https://belgorod.rt.ru/b2b/solutions/sms_advertising"
                  },
                  {
                    "label": "Онлайн-кассы",
                    "path": "https://belgorod.rt.ru/b2b/onlinekassa"
                  }
                ]
              }
            ],
            "image":"/static/images/B2B/new-ad__image.jpg",
            "adTitle": "Рекламный блок 2",
            "adText": "Специальное предложение по услуге быть в плюсе для бизнеса.",
            "linkTarget": "#",
            "linkText": "Подробнее2"
          },
          {
            "label": "Партнёрам",
            "path": "https://belgorod.rt.ru/b2b/partners_program"
          }
        ]
      }
    },
    mounted() {},
    created() {},
    methods: {
      switchSector($event) {
        let activeIndex = Array.prototype.indexOf.call(this.$refs.controls.children, $event.target);
        let contentWrapper;
        let text = this.$refs.text;
        if(window.innerWidth > 1024) {
          contentWrapper = this.$refs.content.querySelector('.shifting-content--desktop');
        } else {
          contentWrapper = this.$refs.content.querySelector('.shifting-content--adaptives');
        }
        Object.values(this.$refs.controls.children).map((item, index) => {
          if(index === activeIndex) {
            item.classList.add('sector-button--active');
            contentWrapper.children[index].classList.add('LB-content-wrapper--active');
            window.innerWidth > 1024 ? contentWrapper.children[index].querySelector('.sector-video').play() : false;
            text.children[index].classList.add('text-content--active')
          } else {
            item.classList.remove('sector-button--active');
            contentWrapper.children[index].classList.remove('LB-content-wrapper--active');
            window.innerWidth > 1024 ? contentWrapper.children[index].querySelector('.sector-video').pause() : false;
            text.children[index].classList.remove('text-content--active')
          }
        });
      }
    }
  };
</script>

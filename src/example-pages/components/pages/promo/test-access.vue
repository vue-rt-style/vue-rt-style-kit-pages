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
                    "path": "https://belgorod.rt.ru/b2b/telephony/classic_phone"
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
            "adText": "Специальное предложение по услуге быть в плюсе для бизнеса.",
            "linkTarget": "#",
            "linkText": "Подробнее2"
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

    }
  };
</script>

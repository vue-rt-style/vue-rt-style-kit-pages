<template>
<!--  <div class="rt-container">-->
<!--    <div class="rt-col rt-space-top25"></div>-->
<!--    <div class="rt-col">-->
<!--      <rt-header-navigation :nav-tree=innerData></rt-header-navigation>-->
<!--      <rt-phone-number-input></rt-phone-number-input>-->
<!--    </div>-->
<!--  </div>-->
<!--  <rt-header-advertisement-block image="/sites/default/files/b2b/announce_banners/vats.png"-->
<!--                                 link-target="moscow.rt.ru/b2b/be-in-plus"-->
<!--                                 link-text="Подробнее" :new-window="true">-->
<!--    <template slot="title">Виртуальная АТС со&nbsp;скидкой&nbsp;50%</template>-->
<!--    <template slot="paragraph">Специальное предложение для бизнеса: Пакеты&nbsp;&laquo;Быть в&nbsp;плюсе&raquo;</template>-->
<!--  </rt-header-advertisement-block>-->
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
    mounted() {
      // window.addEventListener('load', function(){
      //   var wrapper = document.querySelector('.items-wrapper');
      //   var startHeight;
      //   document.querySelector('.items-wrapper-button').addEventListener('click', function(){
      //     this.classList.toggle('items-wrapper-button--active')
      //     setWrapperHeight(wrapper);
      //   })
      //   window.addEventListener('resize', function(){
      //     getWrapperHeight(wrapper);
      //     setWrapperHeight(wrapper);
      //   })
      //   getWrapperHeight(wrapper);
      //   setWrapperHeight(wrapper);
      //   function getWrapperHeight(wrapper){
      //     setTimeout(function(){
      //       Array.from(wrapper.querySelectorAll('.rt-card__border-content')).map(function(item){
      //         if(item.hasAttribute('style')){
      //           startHeight =  item.closest('.rt-card').offsetHeight + 30;
      //         } else {
      //           getWrapperHeight(wrapper)
      //         }
      //       })
      //     }, 300)
      //   }
      //   function setWrapperHeight(wrapper) {
      //     setTimeout(function(){
      //       if(!!startHeight) {
      //         wrapper.offsetHeight != startHeight ? wrapper.style.height = startHeight + 'px' : wrapper.style.height = wrapper.scrollHeight + 20 + 'px';
      //       } else {
      //         setWrapperHeight(wrapper)
      //       }
      //     },400)
      //   }
      // })
    },
    created() {},
    methods: {}
  };
</script>

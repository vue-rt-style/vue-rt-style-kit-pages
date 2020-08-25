<template>
<!--  <div class="rt-container">-->
<!--    <div class="rt-col rt-space-top25"></div>-->
<!--    <div class="rt-col">-->
<!--      <rt-header-navigation :nav-tree=innerData></rt-header-navigation>-->
<!--    </div>-->
<!--  </div>-->
  <div class="rt-container sp-t-5">
    <div class="rt-col">
      <rt-video-player :source="['http://html5player.ru/html5.mp4']" pause-image=""/>
    </div>
  </div>
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
            "label": "1 Заголовок 1 уровня",
            "subTitle": "1 Заголовок 1 уровня",
            "items": [
              {
                "label": "1 Заголовок 2 уровня",
                "items": [
                  {
                    "label": "1 Заголовок 3 уровня",
                    "path": "/link"
                  },
                  {
                    "label": "2 Заголовок 3 уровня",
                    "path": "/link"
                  }
                ]
              },
              {
                "label": "2 Заголовок 2 уровня",
                "items": [
                  {
                    "label": "1 Заголовок 3 уровня",
                    "path": "/link"
                  },
                  {
                    "label": "2 Заголовок 3 уровня",
                    "path": "/link",
                    "subTitle": "1 Заголовок 1 уровня"
                  }
                ]
              },
              {
                "label": "3 Заголовок 2 уровня",
                "path": "/link"
              }
            ]
          },
          {
            "label": "2 Заголовок 1 уровня",
            "items": [
              {
                "label": "1 Заголовок 2 уровня",
                "path": ""
              },
              {
                "label": "2 Заголовок 2 уровня",
                "path": "/link"
              }
            ],
            "image":"/static/images/B2B/new-ad__image.jpg",
            "adTitle": "Рекламный блок 2",
            "adText": "Специальное предложение по услуге быть в плюсе для бизнеса.",
            "linkTarget": "https://rt.ru/b2b",
            "linkText": "Подробнее2"
          },
          {
            "label": "3 Заголовок 1 уровня",
            "items": [
              {
                "label": "1 Заголовок 2 уровня",
                "path": "/link"
              },
              {
                "label": "2 Заголовок 2 уровня",
                "path": "/link"
              },
              {
                "label": "3 Заголовок 2 уровня",
                "path": "/link"
              }
            ],
            "image":"/static/images/B2B/new-ad__image.jpg",
            "adTitle": "Рекламный блок 3",
            "adText": "Специальное предложение по услуге быть в плюсе для бизнеса.",
            "linkTarget": "https://rt.ru/b2b",
            "linkText": "Подробнее3"
          },
          {
            "label": "4 Заголовок 1 уровня",
            "path": "/link"
          },
          {
            "label": "5 Заголовок 1 уровня",
            "path": "/link"
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

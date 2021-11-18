<template>
  <div class="rt-container">
    <div class="app-content rt-col-12 rt-col-md-3">
      <div class="app-title">
        <div class="row">
          <h1 class="rt-font-hero rt-col">
            Annotation
          </h1>
        </div>
      </div>
      <div class="app-body">


        <div class="wc-inline">
          <div class="d-none">
            <rt-card></rt-card>
            <rt-card-rounded></rt-card-rounded>
          </div>
          <div class="spasibo-bg">
            <div class="spasibo-header color-block--purple d-flex">
              <div class="rt-container">
                <rt-col>
                  <rt-row>
                    <rt-col size="4" tablet-size="3" mobile-size="3">
                      <div class="d-flex md-d-block flex-start-center color-white height-fill">
                        <div class="rt-layer-level-2 relative">
                          <p class="rt-font-h1 sp-b-1">Давайте меняться</p>
                          <p class="rt-font-paragraph sp-b-2">
                            Меняйте бонусы на новые впечатления <br>
                            от Ростелекома и партнеров
                          </p> <a href="https://lk.rt.ru/#bonus" target="_blank"
                                  class="rt-button-md--is-block rt-button rt-button-with-ripple rt-button-orange ">
                          <div class="ripple" style="pointer-events: none;">
                            Стать участником
                          </div>
                        </a>
                        </div>
                      </div>
                    </rt-col>
                    <rt-col size="8" tablet-size="3" mobile-size="3">
                      <img src="https://rt-static.rt.ru/sites/default/files/img/spasibo/Group%202616.png"
                           class="x2-d-none d-block spasibo-header__image"> <img src="https://rt-static.rt.ru/sites/default/files/img/spasibo/Group%202615-2x.png"
                                                                                 class="d-none x2-d-block spasibo-header__image">
                    </rt-col>
                  </rt-row>
                </rt-col>
              </div>
            </div>
            <div class="rt-container spasibo-container">
              <rt-col>
                <rt-resize-content-height :query-selectors-names="['.rt-card__content','.rt-card-round-img']">
                  <rt-row>
                    <rt-col size="4" mobile-size="3">
                      <div class="rt-card rt-card-white">
                        <div class="rt-card__background"></div>
                        <div class="rt-card__content">
                          <div class="rt-card__body">
                            <div class="d-flex row-td-reverse flex-end-center">
                              <div>
                                <p class="rt-font-h4 sp-b-0-3">Регистрируйтесь</p>
                                <p class="color-main05">
                                  200 бонусов за регистрацию в программе «Бонус»
                                </p>
                              </div>
                              <div class="td-sp-b-1 td-flex-fill">
                                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M40 80C62.0914 80 80 62.0914 80 40C80 17.9086 62.0914 0 40 0C17.9086 0 0 17.9086 0 40C0 62.0914 17.9086 80 40 80Z"
                                        fill="#FF4F12"></path>
                                  <path d="M36 44H28C23.1074 44 19 48.032 19 53V62H21V53C21 49.022 24.0824 46 28 46H35C35.1595 45.388 35.7696 44.576 36 44Z"
                                        fill="white"></path>
                                  <path d="M49 59C43.4909 59 39 54.5091 39 49H41C41 53.5091 44.4909 57 49 57V59Z" fill="white">
                                  </path>
                                  <path d="M59 49H57C57 44.4909 53.5091 41 49 41V39C54.5091 39 59 43.4909 59 49Z" fill="white">
                                  </path>
                                  <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M37 50C37 43.0893 43.0893 37 50 37C56.9107 37 62 43.0893 62 50C62 56.9107 56.9107 62 50 62C43.0893 62 37 56.9107 37 50ZM60 50C60 44.2075 55.7925 39 50 39C44.2075 39 39 44.2075 39 50C39 55.7925 44.2075 60 50 60C55.7925 60 60 55.7925 60 50Z"
                                        fill="white"></path>
                                  <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M47.0001 45L49.0001 43L53.0001 47C53.1225 47.1352 53.1225 47.8479 53.0001 48L49.0001 52L52.0001 54C52.0919 54.1014 52.046 54.8648 52.0001 55C51.9539 55.1018 51.4882 55.0503 51.2022 55.0186C51.1085 55.0082 51.0341 55 51.0001 55H47.0001C46.9264 55 46.8233 55.0183 46.71 55.0385C46.4466 55.0853 46.1285 55.1418 46.0001 55C45.8654 54.8628 45.913 54.5927 45.9578 54.3381C45.9793 54.2165 46.0001 54.0984 46.0001 54V47C46.0001 46.2563 46.4184 45.6423 47.0001 45ZM47.0001 54H50.0001L48.0001 52V53C47.9911 53.0116 47.9132 53.0858 47.8043 53.1897C47.5386 53.4432 47.088 53.8731 47.0001 54Z"
                                        fill="white"></path>
                                  <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M24 30C24 24.2075 29.2075 19 35 19C40.7925 19 45 24.2075 45 30C45 35.7925 40.7925 40 35 40C29.2075 40 24 35.7925 24 30ZM44 30C44 25.032 39.968 21 35 21C30.032 21 26 25.032 26 30C26 34.968 30.032 39 35 39C39.968 39 44 34.968 44 30Z"
                                        fill="white"></path>
                                </svg>
                              </div>
                            </div>
                          </div>
                          <div class="rt-card__footer"></div>
                        </div>
                      </div>
                    </rt-col>
                    <rt-col size="4" mobile-size="3" class="md-sp-t-2">
                      <div class="rt-card rt-card-white">
                        <div class="rt-card__background"></div>
                        <div class="rt-card__content">
                          <div class="rt-card__body">
                            <div class="d-flex row-td-reverse flex-end-center">
                              <div>
                                <p class="rt-font-h4 sp-b-0-3">Накапливайте бонусы</p>
                                <p class="color-main05">
                                  за оплату услуг Ростелекома и покупки у
                                  партнеров программы
                                  «Бонус»
                                </p>
                              </div>
                              <div class="td-sp-b-1 td-flex-fill">
                                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M53 67C45.2873 67 39 60.7127 39 53H42C42 59.3127 46.6873 64 53 64V67Z"
                                        fill="#FE3F08"></path>
                                  <path d="M67 53H64C64 46.6873 59.3127 42 53 42V39C60.7127 39 67 45.2873 67 53Z"
                                        fill="#FE3F08"></path>
                                  <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M35 53C35 43.325 43.325 35 53 35C62.675 35 70 43.325 70 53C70 62.675 62.675 70 53 70C43.325 70 35 62.675 35 53ZM68 53C68 44.725 61.275 38 53 38C44.725 38 38 44.725 38 53C38 61.275 44.725 68 53 68C61.275 68 68 61.275 68 53Z"
                                        fill="#FE3F08"></path>
                                  <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M51.9998 44.0002C52.1922 43.8072 52.8074 43.8072 52.9998 44.0002L58.9998 50.0002C59.1922 50.1932 59.1922 50.7831 58.9998 51.0002L52.9998 56.0002L56.9998 60.0002C57.1441 60.145 57.072 60.8072 56.9998 61.0002C56.9313 61.1376 56.5636 61.0794 56.2791 61.0345C56.1638 61.0163 56.0622 61.0002 55.9998 61.0002H49.9998C49.615 61.0002 48.2884 60.2897 47.9998 60.0002C47.801 59.8161 47.855 59.6374 47.9207 59.42C47.9583 59.2955 47.9998 59.1583 47.9998 59.0002V50.0002C47.9998 48.9387 48.0858 47.917 48.9998 47.0002L51.9998 44.0002ZM49.9998 60.0002H54.9998L51.9998 57.0002L50.9998 59.0002C50.9855 59.0168 50.9177 59.0807 50.823 59.1702C50.577 59.4024 50.1489 59.8065 49.9998 60.0002Z"
                                        fill="#FE3F08"></path>
                                  <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M33 55.0001V38.0001V33.0001V30.0001V25.0001H35V30.0001V33.0001V38.0001V43.0001C35.4301 42.2228 36.0914 41.6801 36.7595 41.1318C37.1902 40.7784 37.6237 40.4226 38 40.0001V33.0001H53C53.3116 33.0001 53.5506 32.9869 53.7685 32.9748C54.1512 32.9537 54.4688 32.9362 55 33.0001C56.3895 33.0001 58 31.3787 58 30.0001V25.0001C58 23.6214 56.3895 23.0001 55 23.0001H48C48 20.6967 47.4954 18.3296 47.134 16.6338C47.0863 16.4103 47.0412 16.1985 47 16.0001C46.7474 14.7718 46.1368 14.0001 45 14.0001C44.8666 14.0001 44.6743 13.9785 44.4588 13.9544C43.9394 13.8962 43.2857 13.8229 43 14.0001L37 18.0001C36.698 17.7004 36.2159 17.7988 35.7263 17.8987C35.4786 17.9492 35.2291 18.0001 35 18.0001H33C32.7709 18.0001 32.5214 17.9492 32.2737 17.8987C31.7841 17.7988 31.302 17.7004 31 18.0001L25 14.0001C24.6941 13.8215 24.027 13.8974 23.5134 13.9558C23.3059 13.9793 23.1235 14.0001 23 14.0001C21.8632 14.0001 21.2526 14.7718 21 16.0001C20.9588 16.1985 20.9137 16.4103 20.866 16.6338C20.5046 18.3296 20 20.6967 20 23.0001H13C11.6105 23.0001 10 23.6214 10 25.0001V30.0001C10 31.3787 11.6105 33.0001 13 33.0001V55.0001C13 56.3787 13.6105 58.0001 15 58.0001H30H33C32.887 57.5376 32.9319 56.9209 32.9759 56.318C33.0105 55.8426 33.0446 55.3758 33 55.0001ZM38 21.0001L45 17.0001C45.0663 17.2987 45.1428 17.6154 45.2234 17.9491C45.5643 19.3607 45.9784 21.0749 46 23.0001H38V21.0001ZM56 30.0001V25.0001H38V30.0001H53H56ZM33 20.0001H36V23.0001H33V20.0001ZM15 56.0001H30V33.0001H15V56.0001ZM31 30.0001H16H13V25.0001H31V30.0001ZM23 23.0001H31V21.0001L24 17.0001C23.9302 17.3147 23.8479 17.6495 23.761 18.003C23.4166 19.4042 23 21.0994 23 23.0001Z"
                                        fill="#FE3F08"></path>
                                  <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M40 80C62.0914 80 80 62.0914 80 40C80 17.9086 62.0914 0 40 0C17.9086 0 0 17.9086 0 40C0 62.0914 17.9086 80 40 80Z"
                                        fill="#FE3F08"></path>
                                  <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M20 33C22.9172 24.2863 31.42 19 40 19C40.3273 19 40.6613 19.0028 41 19.0103C42.9691 19.0537 45.0965 19.2565 47 20C57.6392 23.834 63.7752 36.0207 60 47C57.0828 55.7137 48.58 61 40 61C37.7692 61 35.2308 60.6971 33 60C22.3608 56.166 16.2248 43.9793 20 33ZM47 22C44.9012 21.3043 43.0987 21 41 21C32.7798 21 24.6234 26.3478 22 34C20.251 38.8696 20.7263 43.4783 23 48C25.2736 52.6957 29.1028 56.2609 34 58C36.0987 58.6957 38.9012 59 41 59C49.2201 59 56.3765 53.6522 59 46C60.7489 41.1304 60.2736 36.5217 58 32C55.7263 27.3043 51.8971 23.7391 47 22Z"
                                        fill="white"></path>
                                  <path d="M55 45L54 44C56.4942 36.6316 52.3045 29.6316 45 27L46 25C54.1953 27.807 57.8505 36.9298 55 45Z"
                                        fill="white"></path>
                                  <path d="M35.0002 55C26.4365 52.193 22.0849 43.0702 25.0002 35L26.0002 36C23.4493 43.3684 27.5297 50.3684 35.0002 53V55Z"
                                        fill="white"></path>
                                  <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M40 30L47 37L40 44L44 49C44.0451 49.0453 44.1377 49.1259 44.2493 49.223C44.5542 49.4883 45 49.8763 45 50C45 50.1243 44.5502 50.0658 44.2452 50.0261C44.1355 50.0118 44.0445 50 44 50H37C36.6636 50 36.4809 49.7059 36.2968 49.4097C36.2047 49.2615 36.1122 49.1127 36 49C35.887 48.8865 35.7372 48.7937 35.588 48.7012C35.2928 48.5182 35 48.3368 35 48V37V36.9632C34.9999 35.6363 34.9999 35.0048 36 34L40 30ZM36 48H42L39 45L37 47C36.9581 47 36.8811 46.9905 36.7873 46.9788C36.5209 46.9458 36.1189 46.896 36 47V48Z"
                                        fill="white"></path>
                                </svg>
                              </div>
                            </div>
                          </div>
                          <div class="rt-card__footer"></div>
                        </div>
                      </div>
                    </rt-col>
                    <rt-col size="4" mobile-size="3" class="md-sp-t-1">
                      <div class="rt-card rt-card-white">
                        <div class="rt-card__background"></div>
                        <div class="rt-card__content">
                          <div class="rt-card__body">
                            <div class="d-flex row-td-reverse flex-end-center">
                              <div>
                                <p class="rt-font-h4 sp-b-0-3">Обменивайте бонусы</p>
                                <p class="color-main05">
                                  на сервисы Ростелекома и предложения партнеров
                                  программы
                                </p>
                              </div>
                              <div class="td-sp-b-1 td-flex-fill">
                                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M53 67C45.2873 67 39 60.7127 39 53H42C42 59.3127 46.6873 64 53 64V67Z"
                                        fill="#FE3F08"></path>
                                  <path d="M67 53H64C64 46.6873 59.3127 42 53 42V39C60.7127 39 67 45.2873 67 53Z"
                                        fill="#FE3F08"></path>
                                  <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M35 53C35 43.325 43.325 35 53 35C62.675 35 70 43.325 70 53C70 62.675 62.675 70 53 70C43.325 70 35 62.675 35 53ZM68 53C68 44.725 61.275 38 53 38C44.725 38 38 44.725 38 53C38 61.275 44.725 68 53 68C61.275 68 68 61.275 68 53Z"
                                        fill="#FE3F08"></path>
                                  <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M51.9998 44.0002C52.1922 43.8072 52.8074 43.8072 52.9998 44.0002L58.9998 50.0002C59.1922 50.1932 59.1922 50.7831 58.9998 51.0002L52.9998 56.0002L56.9998 60.0002C57.1441 60.145 57.072 60.8072 56.9998 61.0002C56.9313 61.1376 56.5636 61.0794 56.2791 61.0345C56.1638 61.0163 56.0622 61.0002 55.9998 61.0002H49.9998C49.615 61.0002 48.2884 60.2897 47.9998 60.0002C47.801 59.8161 47.855 59.6374 47.9207 59.42C47.9583 59.2955 47.9998 59.1583 47.9998 59.0002V50.0002C47.9998 48.9387 48.0858 47.917 48.9998 47.0002L51.9998 44.0002ZM49.9998 60.0002H54.9998L51.9998 57.0002L50.9998 59.0002C50.9855 59.0168 50.9177 59.0807 50.823 59.1702C50.577 59.4024 50.1489 59.8065 49.9998 60.0002Z"
                                        fill="#FE3F08"></path>
                                  <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M33 55.0001V38.0001V33.0001V30.0001V25.0001H35V30.0001V33.0001V38.0001V43.0001C35.4301 42.2228 36.0914 41.6801 36.7595 41.1318C37.1902 40.7784 37.6237 40.4226 38 40.0001V33.0001H53C53.3116 33.0001 53.5506 32.9869 53.7685 32.9748C54.1512 32.9537 54.4688 32.9362 55 33.0001C56.3895 33.0001 58 31.3787 58 30.0001V25.0001C58 23.6214 56.3895 23.0001 55 23.0001H48C48 20.6967 47.4954 18.3296 47.134 16.6338C47.0863 16.4103 47.0412 16.1985 47 16.0001C46.7474 14.7718 46.1368 14.0001 45 14.0001C44.8666 14.0001 44.6743 13.9785 44.4588 13.9544C43.9394 13.8962 43.2857 13.8229 43 14.0001L37 18.0001C36.698 17.7004 36.2159 17.7988 35.7263 17.8987C35.4786 17.9492 35.2291 18.0001 35 18.0001H33C32.7709 18.0001 32.5214 17.9492 32.2737 17.8987C31.7841 17.7988 31.302 17.7004 31 18.0001L25 14.0001C24.6941 13.8215 24.027 13.8974 23.5134 13.9558C23.3059 13.9793 23.1235 14.0001 23 14.0001C21.8632 14.0001 21.2526 14.7718 21 16.0001C20.9588 16.1985 20.9137 16.4103 20.866 16.6338C20.5046 18.3296 20 20.6967 20 23.0001H13C11.6105 23.0001 10 23.6214 10 25.0001V30.0001C10 31.3787 11.6105 33.0001 13 33.0001V55.0001C13 56.3787 13.6105 58.0001 15 58.0001H30H33C32.887 57.5376 32.9319 56.9209 32.9759 56.318C33.0105 55.8426 33.0446 55.3758 33 55.0001ZM38 21.0001L45 17.0001C45.0663 17.2987 45.1428 17.6154 45.2234 17.9491C45.5643 19.3607 45.9784 21.0749 46 23.0001H38V21.0001ZM56 30.0001V25.0001H38V30.0001H53H56ZM33 20.0001H36V23.0001H33V20.0001ZM15 56.0001H30V33.0001H15V56.0001ZM31 30.0001H16H13V25.0001H31V30.0001ZM23 23.0001H31V21.0001L24 17.0001C23.9302 17.3147 23.8479 17.6495 23.761 18.003C23.4166 19.4042 23 21.0994 23 23.0001Z"
                                        fill="#FE3F08"></path>
                                  <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M40 80C62.0914 80 80 62.0914 80 40C80 17.9086 62.0914 0 40 0C17.9086 0 0 17.9086 0 40C0 62.0914 17.9086 80 40 80Z"
                                        fill="#FE3F08"></path>
                                  <path d="M49 59C43.4909 59 39 54.5091 39 49H41C41 53.5091 44.4909 57 49 57V59Z" fill="white">
                                  </path>
                                  <path d="M59 49H57C57 44.4909 53.5091 41 49 41V39C54.5091 39 59 43.4909 59 49Z" fill="white">
                                  </path>
                                  <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M37 50C37 43.0893 43.0893 37 50 37C56.9107 37 62 43.0893 62 50C62 56.9107 56.9107 62 50 62C43.0893 62 37 56.9107 37 50ZM60 50C60 44.2075 55.7925 39 50 39C44.2075 39 39 44.2075 39 50C39 55.7925 44.2075 60 50 60C55.7925 60 60 55.7925 60 50Z"
                                        fill="white"></path>
                                  <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M47.0001 45L49.0001 43L53.0001 47C53.1225 47.1352 53.1225 47.8479 53.0001 48L49.0001 52L52.0001 54C52.0919 54.1014 52.046 54.8648 52.0001 55C51.9539 55.1018 51.4882 55.0503 51.2022 55.0186C51.1085 55.0082 51.0341 55 51.0001 55H47.0001C46.9264 55 46.8233 55.0183 46.71 55.0385C46.4466 55.0853 46.1285 55.1418 46.0001 55C45.8654 54.8628 45.913 54.5927 45.9578 54.3381C45.9793 54.2165 46.0001 54.0984 46.0001 54V47C46.0001 46.2563 46.4184 45.6423 47.0001 45ZM47.0001 54H50.0001L48.0001 52V53C47.991 53.0116 47.9132 53.0858 47.8043 53.1897C47.5386 53.4432 47.0879 53.8731 47.0001 54Z"
                                        fill="white"></path>
                                  <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M35 49.9998V37.9998V34.9998V32.9998V29.9998H36V32.9998V34.9998V37.9998V41.9998C36.4863 41.1282 37.34 39.7347 38 38.9998V34.9998H49C49.239 34.9998 49.3544 34.9886 49.4452 34.9798C49.5787 34.9668 49.6588 34.9591 50 34.9998C50.9553 34.9998 52 33.9398 52 32.9998V29.9998C52 29.0598 50.9553 27.9998 50 27.9998H45C45 27.3945 45.0282 26.7565 45.0558 26.1322V26.1322V26.1321V26.1321V26.132C45.1092 24.9231 45.1603 23.7662 45 22.9998C44.8263 22.1623 43.7816 21.9998 43 21.9998C42.898 21.9998 42.7857 21.9816 42.671 21.963C42.4342 21.9246 42.1872 21.8846 42 21.9998L38 24.9998C37.6874 24.6922 36.4689 23.9998 36 23.9998H35C34.5311 23.9998 33.3126 24.6922 33 24.9998L29 21.9998C28.7993 21.8836 28.5457 21.9254 28.3112 21.9641C28.2007 21.9823 28.0945 21.9998 28 21.9998C27.2184 21.9998 26.1737 22.1623 26 22.9998C25.8397 23.7662 25.8908 24.9231 25.9442 26.132V26.132V26.132L25.9442 26.1321C25.9718 26.7563 26 27.3945 26 27.9998H21C20.0447 27.9998 19 29.0598 19 29.9998V32.9998C19 33.9398 20.0447 34.9998 21 34.9998V49.9998C21 50.9398 21.0447 51.9998 22 51.9998H33H35C34.9224 51.6848 34.9531 51.279 34.9833 50.8809C35.0072 50.5662 35.0307 50.2563 35 49.9998ZM38 26.9998L43 23.9998C43.1281 24.6495 43.0902 25.4278 43.0474 26.3067V26.3067C43.0216 26.8366 42.9941 27.403 43 27.9998H38V26.9998ZM50 29.9998H38V32.9998H48H50V29.9998ZM22 49.9998H32V34.9998H22V49.9998ZM23 32.9998H21V29.9998H33V32.9998H23ZM37 25.9998V27.9998H35V25.9998H37ZM28 27.9998H33V26.9998L28 23.9998C27.8675 24.6732 27.9064 25.485 27.9504 26.4037C27.9744 26.9055 28 27.4392 28 27.9998Z"
                                        fill="white"></path>
                                </svg>
                              </div>
                            </div>
                          </div>
                          <div class="rt-card__footer"></div>
                        </div>
                      </div>
                    </rt-col>
                  </rt-row>
                </rt-resize-content-height>
              </rt-col>
            </div>

            <div class="rt-container sp-t-4 td-sp-t-3 md-sp-t-2">
              <rt-col>
                <p class="rt-font-h2 sp-b-1">Популярные предложения</p>
              </rt-col>
            </div>
            <div>
              <rt-resize-content-height :query-selectors-names="['.rt-card-round__content','.rt-card-round-img']">
                <rt-carousel-v3 :col-in-row="4">
                  <rt-carousel-slide-v3 class="rt-col-3 rt-col-td-3 rt-col-md-2">
                    <a href="https://igra.rt.ru/" target="_blank">
                      <div class="rt-card-round color-white">
                        <div class="rt-card-round-color rt-card-round-color--green">
                          <div class="rt-card-round-img-container">
                            <img src="https://rt-static.rt.ru/sites/default/files/img/Tycoon_600x300.jpg"
                                 class=" rt-card-round-img ">
                          </div>
                          <div class="rt-card-round__content sp-b-1 sp-h-0-3">
                            <div>

                              <div class="sp-h-0-1">
                                <p class="rt-font-h3 sp-t-0-3 sp-b-0-2">Онлайн-игра «Tycoon»</p>
                                <p class="">
                                  Более 250 000 призов от Ростелекома и партнеров
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </rt-carousel-slide-v3>
                  <rt-carousel-slide-v3 class="rt-col-3 rt-col-td-3 rt-col-md-2">
                    <a href="https://lk.rt.ru/#bonus" target="_blank">
                      <div class="rt-card-round color-white">
                        <div class="rt-card-round-color rt-card-round-color--light-blue-low">
                          <div class="rt-card-round-img-container">
                            <img src="https://rt-static.rt.ru/sites/default/files/b2c/bonus/oct/vk_600x300.jpg"
                                 class=" rt-card-round-img">
                          </div>
                          <div class="rt-card-round__content sp-b-1 sp-h-0-3">
                            <div>
                              <div class="rt-card-round__logo sp-h-0-1">
                                <img src="https://rt-static.rt.ru/sites/default/files/b2c/bonus/oct/vk-logo_44px.png"
                                     class=" rt-card-round__logo-img">
                              </div>
                              <div class="sp-h-0-1">
                                <p class="rt-font-h3 sp-t-0-3 sp-b-0-2">
                                  Выразительные эмоции
                                </p>
                                <p class="">
                                  Скидка до 75% на стикеры ВКонтакте
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </rt-carousel-slide-v3>
                  <rt-carousel-slide-v3 class="rt-col-3 rt-col-td-3 rt-col-md-2">
                    <a href="https://lk.rt.ru/#bonus" target="_blank">
                      <div class="rt-card-round color-white">
                        <div class="rt-card-round-color rt-card-round-color--yellow-high">
                          <div class="rt-card-round-img-container">
                            <img src="https://rt-static.rt.ru/sites/default/files/b2c/bonus/oct/sbermegamarket_600x300.jpg"
                                 class=" rt-card-round-img ">
                          </div>
                          <div class="rt-card-round__content sp-b-1 sp-h-0-3">
                            <div>
                              <div class="rt-card-round__logo sp-h-0-1  sber">
                                <img src="https://rt-static.rt.ru/sites/default/files/b2c/bonus/oct/sber-megamarket-logo_44px.png"
                                     class=" rt-card-round__logo-img sber-img">
                              </div>
                              <div class="sp-h-0-1">
                                <p class="rt-font-h3 sp-t-0-3 sp-b-0-2">Выгодный шоппинг</p>
                                <p class="">
                                  Скидка 700 рублей от СберМегаМаркета
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </rt-carousel-slide-v3>
                  <rt-carousel-slide-v3 class="rt-col-3 rt-col-td-3 rt-col-md-2">
                    <a href="https://lk.rt.ru/#bonus" target="_blank">
                      <div class="rt-card-round color-white">
                        <div class="rt-card-round-color rt-card-round-color--light-blue-low">
                          <div class="rt-card-round-img-container">
                            <img src="https://rt-static.rt.ru/sites/default/files/b2c/bonus/aug/Ozon_img_600x300.jpg"
                                 class=" rt-card-round-img">
                          </div>
                          <div class="rt-card-round__content sp-b-1 sp-h-0-3">
                            <div>
                              <div class="rt-card-round__logo sp-h-0-1">
                                <img src="https://rt-static.rt.ru/sites/default/files/b2c/bonus/aug/Ozon_logo_44px.png"
                                     class=" rt-card-round__logo-img">
                              </div>
                              <div class="sp-h-0-1">
                                <p class="rt-font-h3 sp-t-0-3 sp-b-0-2">Покупки для всей семьи </p>
                                <p class="">
                                  Дополнительная скидка до&nbsp;15&nbsp;% на&nbsp;Ozon.ru
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </rt-carousel-slide-v3>
                  <rt-carousel-slide-v3 class="rt-col-3 rt-col-td-3 rt-col-md-2">
                    <a href="https://lk.rt.ru/#bonus" target="_blank">
                      <div class="rt-card-round color-white">
                        <div class="rt-card-round-color rt-card-round-color--purple">
                          <div class="rt-card-round-img-container">
                            <img src="https://rt-static.rt.ru/sites/default/files/b2c/bonus/aug/AliExpress_img_600x390.jpg"
                                 class=" rt-card-round-img">
                          </div>
                          <div class="rt-card-round__content sp-b-1 sp-h-0-3">
                            <div>
                              <div class="rt-card-round__logo sp-h-0-1">
                                <img src="https://rt-static.rt.ru/sites/default/files/b2c/bonus/aug/AliExpress_logo_44px.png"
                                     class=" rt-card-round__logo-img">
                              </div>
                              <div class="sp-h-0-1">
                                <p class="rt-font-h3 sp-t-0-3 sp-b-0-2">Удачные покупки</p>
                                <p class="">
                                  Скидка 100 рублей на покупки на AliExpress
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </rt-carousel-slide-v3>
                  <rt-carousel-slide-v3 class="rt-col-3 rt-col-td-3 rt-col-md-2">
                    <a href="https://lk.rt.ru/#bonus" target="_blank">
                      <div class="rt-card-round color-white">
                        <div class="rt-card-round-color rt-card-round-color--dark-slate">
                          <div class="rt-card-round-img-container">
                            <img src="https://rt-static.rt.ru/sites/default/files/img/yandex_go_600x300.jpg"
                                 class=" rt-card-round-img">
                          </div>
                          <div class="rt-card-round__content sp-b-1 sp-h-0-3">
                            <div>
                              <div class="rt-card-round__logo sp-h-0-1">
                                <img src="https://rt-static.rt.ru/sites/default/files/img/yandex-go_44px.png"
                                     class=" rt-card-round__logo-img">
                              </div>
                              <div class="sp-h-0-1">
                                <p class="rt-font-h3 sp-t-0-3 sp-b-0-2">Поездки на такси со скидкой</p>
                                <p class="">
                                  300 рублей на такси Яндекс Go
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </rt-carousel-slide-v3>


                </rt-carousel-v3>
              </rt-resize-content-height>
            </div>
            <div class="rt-container sp-t-4 td-sp-t-3 md-sp-t-2">
              <rt-col>
                <p class="rt-font-h2 sp-b-1">Обменять бонусы</p>
                <div class="d-flex sp-b-1-1 rt-tag-list-spasibo">
                  <rt-filter-n-setter filter-name="obmen" :filter-tags="['sience']">
                    Образование и книги
                  </rt-filter-n-setter>
                  <rt-filter-n-setter filter-name="obmen" :filter-tags="['games']">
                    Игры и развлечения
                  </rt-filter-n-setter>
                  <rt-filter-n-setter filter-name="obmen" :filter-tags="['home']">
                    Все для дома и ремонта
                  </rt-filter-n-setter>
                  <rt-filter-n-setter filter-name="obmen" :filter-tags="['rostelecom']">
                    подарки от Ростелекома
                  </rt-filter-n-setter>
                  <rt-filter-n-setter filter-name="obmen" :filter-tags="['other']">Другое</rt-filter-n-setter>
                </div>
              </rt-col>
            </div>

            <rt-filter-n-item filter-name="obmen" :filter-tags="['home']">
              <rt-carousel-slide-v3 class="rt-col-3 rt-col-td-3 rt-col-md-2">
                <a href="https://lk.rt.ru/#bonus" target="_blank"
                   class="spasibo-card">
                  <div class="rt-card-round">
                    <div class="rt-card-round-white">
                      <div class="rt-card-round-img-container">
                        <img src="//rt-static.rt.ru/sites/default/files/b2c/bonus/aug/netPrint_img.jpg"
                             class=" rt-card-round-img">
                      </div>
                      <div class="rt-card-round__content sp-b-1 sp-h-0-3 sp-t-1 rt-card-round__content-s d-flex flex-column">
                        <div class="flex-fill">
                          <div class="rt-card-round__logo">
                            <img src="//rt-static.rt.ru/sites/default/files/img/spasibo/Netprint_44px.png"
                                 class=" rt-card-round__logo-img">
                          </div>
                          <div class="sp-h-0-1">
                            <p class="rt-font-h2 sp-t-0-3 sp-b-0-2">100 <span class="rt-font-h4">бонусов</span></p>
                            <p class="color-main05">Сертификат на изготовление фотокниги Lite 18х13</p>
                          </div>
                        </div>
                        <div class="rt-card-round-arrow d-flex flex-start-center sp-t-1 sp-h-0-1">
                          <span class="rt-card-round-arrow__text">Обменять</span>
                          <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg"
                               class="rt-card-round-arrow-icon">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M13.1827 7.74924L8.97105 11.939L10.029 13.0024L15.5289 7.53097C15.6704 7.39021 15.75 7.19886 15.75 6.99927C15.75 6.79968 15.6704 6.60832 15.5289 6.46756L10.0289 0.996093L8.97105 2.05951L13.1826 6.24924L2.29622e-07 6.24924L2.95189e-07 7.74924L13.1827 7.74924Z"
                                  fill="#101828"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </rt-carousel-slide-v3>
            </rt-filter-n-item>    <rt-filter-n-item filter-name="obmen" :filter-tags="['home']">
            <rt-carousel-slide-v3 class="rt-col-3 rt-col-td-3 rt-col-md-2">
              <a href="https://lk.rt.ru/#bonus" target="_blank"
                 class="spasibo-card">
                <div class="rt-card-round">
                  <div class="rt-card-round-white">
                    <div class="rt-card-round-img-container">
                      <img src="//rt-static.rt.ru/sites/default/files/b2c/bonus/oct/Westwing_600x300.jpg"
                           class=" rt-card-round-img">
                    </div>
                    <div class="rt-card-round__content sp-b-1 sp-h-0-3 sp-t-1 rt-card-round__content-s d-flex flex-column">
                      <div class="flex-fill">
                        <div class="rt-card-round__logo">
                          <img src="//rt-static.rt.ru/sites/default/files/b2c/bonus/oct/westwing-logo_44px.png"
                               class=" rt-card-round__logo-img">
                        </div>
                        <div class="sp-h-0-1">
                          <p class="rt-font-h2 sp-t-0-3 sp-b-0-2">50 <span class="rt-font-h4">бонусов</span></p>
                          <p class="color-main05">Дополнительная скидка 10% в Westwing club</p>
                        </div>
                      </div>
                      <div class="rt-card-round-arrow d-flex flex-start-center sp-t-1 sp-h-0-1">
                        <span class="rt-card-round-arrow__text">Обменять</span>
                        <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg"
                             class="rt-card-round-arrow-icon">
                          <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M13.1827 7.74924L8.97105 11.939L10.029 13.0024L15.5289 7.53097C15.6704 7.39021 15.75 7.19886 15.75 6.99927C15.75 6.79968 15.6704 6.60832 15.5289 6.46756L10.0289 0.996093L8.97105 2.05951L13.1826 6.24924L2.29622e-07 6.24924L2.95189e-07 7.74924L13.1827 7.74924Z"
                                fill="#101828"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </rt-carousel-slide-v3>
          </rt-filter-n-item>
            <rt-filter-n-item filter-name="obmen" :filter-tags="['home']">
              <rt-carousel-slide-v3 class="rt-col-3 rt-col-td-3 rt-col-md-2">
                <a href="https://lk.rt.ru/#bonus" target="_blank"
                   class="spasibo-card">
                  <div class="rt-card-round">
                    <div class="rt-card-round-white">
                      <div class="rt-card-round-img-container">
                        <img src="//rt-static.rt.ru/sites/default/files/img/spasibo/Frogogo_446%D1%85232.jpg"
                             class=" rt-card-round-img">
                      </div>
                      <div class="rt-card-round__content sp-b-1 sp-h-0-3 sp-t-1 rt-card-round__content-s d-flex flex-column">
                        <div class="flex-fill">
                          <div class="rt-card-round__logo">
                            <img src="//rt-static.rt.ru/sites/default/files/img/spasibo/Frogogo1_44px.png"
                                 class=" rt-card-round__logo-img">
                          </div>
                          <div class="sp-h-0-1">
                            <p class="rt-font-h2 sp-t-0-3 sp-b-0-2">35 <span class="rt-font-h4">бонусов </span><span class="font-t-s"></span></p>
                            <p class="color-main05">Жаропрочная кастрюля Corelle в подарок и 2000 бонусных рублей на покупки на frogogo.ru</p>
                          </div>
                        </div>
                        <div class="rt-card-round-arrow d-flex flex-start-center sp-t-1 sp-h-0-1">
                          <span class="rt-card-round-arrow__text">Обменять</span>
                          <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg"
                               class="rt-card-round-arrow-icon">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M13.1827 7.74924L8.97105 11.939L10.029 13.0024L15.5289 7.53097C15.6704 7.39021 15.75 7.19886 15.75 6.99927C15.75 6.79968 15.6704 6.60832 15.5289 6.46756L10.0289 0.996093L8.97105 2.05951L13.1826 6.24924L2.29622e-07 6.24924L2.95189e-07 7.74924L13.1827 7.74924Z"
                                  fill="#101828"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </rt-carousel-slide-v3>
            </rt-filter-n-item>
            <rt-filter-n-item filter-name="obmen" :filter-tags="['home']">
              <rt-carousel-slide-v3 class="rt-col-3 rt-col-td-3 rt-col-md-2">
                <a href="https://lk.rt.ru/#bonus" target="_blank"
                   class="spasibo-card">
                  <div class="rt-card-round">
                    <div class="rt-card-round-white">
                      <div class="rt-card-round-img-container">
                        <img src="//rt-static.rt.ru/sites/default/files/img/spasibo/Frogogo_446%D1%85232.jpg"
                             class=" rt-card-round-img">
                      </div>
                      <div class="rt-card-round__content sp-b-1 sp-h-0-3 sp-t-1 rt-card-round__content-s d-flex flex-column">
                        <div class="flex-fill">
                          <div class="rt-card-round__logo">
                            <img src="//rt-static.rt.ru/sites/default/files/img/spasibo/Frogogo1_44px.png"
                                 class=" rt-card-round__logo-img">
                          </div>
                          <div class="sp-h-0-1">
                            <p class="rt-font-h2 sp-t-0-3 sp-b-0-2">50 <span class="rt-font-h4">бонусов </span><span class="font-t-s"></span></p>
                            <p class="color-main05">Жаропрочная кастрюля Corelle в подарок и 5000 бонусных рублей на покупки на frogogo.ru</p>
                          </div>
                        </div>
                        <div class="rt-card-round-arrow d-flex flex-start-center sp-t-1 sp-h-0-1">
                          <span class="rt-card-round-arrow__text">Обменять</span>
                          <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg"
                               class="rt-card-round-arrow-icon">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M13.1827 7.74924L8.97105 11.939L10.029 13.0024L15.5289 7.53097C15.6704 7.39021 15.75 7.19886 15.75 6.99927C15.75 6.79968 15.6704 6.60832 15.5289 6.46756L10.0289 0.996093L8.97105 2.05951L13.1826 6.24924L2.29622e-07 6.24924L2.95189e-07 7.74924L13.1827 7.74924Z"
                                  fill="#101828"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </rt-carousel-slide-v3>
            </rt-filter-n-item>
            <rt-filter-n-item filter-name="obmen" :filter-tags="['games']">
              <rt-carousel-slide-v3 class="rt-col-3 rt-col-td-3 rt-col-md-2">
                <a href="https://lk.rt.ru/#bonus" target="_blank"
                   class="spasibo-card">
                  <div class="rt-card-round">
                    <div class="rt-card-round-white">
                      <div class="rt-card-round-img-container">
                        <img src="//rt-static.rt.ru/sites/default/files/img/spasibo/wink.jpg"
                             class=" rt-card-round-img">
                      </div>
                      <div class="rt-card-round__content sp-b-1 sp-h-0-3 sp-t-1 rt-card-round__content-s d-flex flex-column">
                        <div class="flex-fill">
                          <div class="rt-card-round__logo">
                            <img src="//rt-static.rt.ru/sites/default/files/img/spasibo/wink.png"
                                 class=" rt-card-round__logo-img">
                          </div>
                          <div class="sp-h-0-1">
                            <p class="rt-font-h2 sp-t-0-3 sp-b-0-2">299 <span class="rt-font-h4">бонусов</span></p>
                            <p class="color-main05">Подписка на «more.tv»</p>
                          </div>
                        </div>
                        <div class="rt-card-round-arrow d-flex flex-start-center sp-t-1 sp-h-0-1">
                          <span class="rt-card-round-arrow__text">Обменять</span>
                          <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg"
                               class="rt-card-round-arrow-icon">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M13.1827 7.74924L8.97105 11.939L10.029 13.0024L15.5289 7.53097C15.6704 7.39021 15.75 7.19886 15.75 6.99927C15.75 6.79968 15.6704 6.60832 15.5289 6.46756L10.0289 0.996093L8.97105 2.05951L13.1826 6.24924L2.29622e-07 6.24924L2.95189e-07 7.74924L13.1827 7.74924Z"
                                  fill="#101828"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </rt-carousel-slide-v3>
            </rt-filter-n-item>
            <rt-filter-n-item filter-name="obmen" :filter-tags="['games']">
              <rt-carousel-slide-v3 class="rt-col-3 rt-col-td-3 rt-col-md-2">
                <a href="https://lk.rt.ru/#bonus" target="_blank"
                   class="spasibo-card">
                  <div class="rt-card-round">
                    <div class="rt-card-round-white">
                      <div class="rt-card-round-img-container">
                        <img src="//rt-static.rt.ru/sites/default/files/img/spasibo/img/World-of-Warships_600x300.jpg"
                             class=" rt-card-round-img">
                      </div>
                      <div class="rt-card-round__content sp-b-1 sp-h-0-3 sp-t-1 rt-card-round__content-s d-flex flex-column">
                        <div class="flex-fill">
                          <div class="rt-card-round__logo">
                            <img src="//rt-static.rt.ru/sites/default/files/img/spasibo/logo/World-of-Warships_44px.png"
                                 class=" rt-card-round__logo-img">
                          </div>
                          <div class="sp-h-0-1">
                            <p class="rt-font-h2 sp-t-0-3 sp-b-0-2">80 <span class="rt-font-h4">бонусов</span></p>
                            <p class="color-main05">Премиальный аккаунт и&nbsp;набор для командира крейсера &laquo;Мурманск&raquo; или &laquo;Полтава&raquo;</p>
                          </div>
                        </div>
                        <div class="rt-card-round-arrow d-flex flex-start-center sp-t-1 sp-h-0-1">
                          <span class="rt-card-round-arrow__text">Обменять</span>
                          <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg"
                               class="rt-card-round-arrow-icon">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M13.1827 7.74924L8.97105 11.939L10.029 13.0024L15.5289 7.53097C15.6704 7.39021 15.75 7.19886 15.75 6.99927C15.75 6.79968 15.6704 6.60832 15.5289 6.46756L10.0289 0.996093L8.97105 2.05951L13.1826 6.24924L2.29622e-07 6.24924L2.95189e-07 7.74924L13.1827 7.74924Z"
                                  fill="#101828"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </rt-carousel-slide-v3>
            </rt-filter-n-item>
            <rt-filter-n-item filter-name="obmen" :filter-tags="['games']">
              <rt-carousel-slide-v3 class="rt-col-3 rt-col-td-3 rt-col-md-2">
                <a href="https://lk.rt.ru/#bonus" target="_blank"
                   class="spasibo-card">
                  <div class="rt-card-round">
                    <div class="rt-card-round-white">
                      <div class="rt-card-round-img-container">
                        <img src="//rt-static.rt.ru/sites/default/files/img/spasibo/wink.jpg"
                             class=" rt-card-round-img">
                      </div>
                      <div class="rt-card-round__content sp-b-1 sp-h-0-3 sp-t-1 rt-card-round__content-s d-flex flex-column">
                        <div class="flex-fill">
                          <div class="rt-card-round__logo">
                            <img src="//rt-static.rt.ru/sites/default/files/img/spasibo/wink.png"
                                 class=" rt-card-round__logo-img">
                          </div>
                          <div class="sp-h-0-1">
                            <p class="rt-font-h2 sp-t-0-3 sp-b-0-2">100 <span class="rt-font-h4">бонусов</span></p>
                            <p class="color-main05">Скидка 25% на фильмы</p>
                          </div>
                        </div>
                        <div class="rt-card-round-arrow d-flex flex-start-center sp-t-1 sp-h-0-1">
                          <span class="rt-card-round-arrow__text">Обменять</span>
                          <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg"
                               class="rt-card-round-arrow-icon">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M13.1827 7.74924L8.97105 11.939L10.029 13.0024L15.5289 7.53097C15.6704 7.39021 15.75 7.19886 15.75 6.99927C15.75 6.79968 15.6704 6.60832 15.5289 6.46756L10.0289 0.996093L8.97105 2.05951L13.1826 6.24924L2.29622e-07 6.24924L2.95189e-07 7.74924L13.1827 7.74924Z"
                                  fill="#101828"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </rt-carousel-slide-v3>
            </rt-filter-n-item>
            <rt-filter-n-item filter-name="obmen" :filter-tags="['games']">
              <rt-carousel-slide-v3 class="rt-col-3 rt-col-td-3 rt-col-md-2">
                <a href="https://lk.rt.ru/#bonus" target="_blank"
                   class="spasibo-card">
                  <div class="rt-card-round">
                    <div class="rt-card-round-white">
                      <div class="rt-card-round-img-container">
                        <img src="//rt-static.rt.ru/sites/default/files/img/spasibo/Benefitty_446%D1%85232.jpg"
                             class=" rt-card-round-img">
                      </div>
                      <div class="rt-card-round__content sp-b-1 sp-h-0-3 sp-t-1 rt-card-round__content-s d-flex flex-column">
                        <div class="flex-fill">
                          <div class="rt-card-round__logo">
                            <img src="//rt-static.rt.ru/sites/default/files/img/spasibo/Benefitty_44px.png"
                                 class=" rt-card-round__logo-img">
                          </div>
                          <div class="sp-h-0-1">
                            <p class="rt-font-h2 sp-t-0-3 sp-b-0-2">60 <span class="rt-font-h4">бонусов</span></p>
                            <p class="color-main05">Премиальный статус BenefittY Gold на&nbsp;3&nbsp;месяца</p>
                          </div>
                        </div>
                        <div class="rt-card-round-arrow d-flex flex-start-center sp-t-1 sp-h-0-1">
                          <span class="rt-card-round-arrow__text">Обменять</span>
                          <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg"
                               class="rt-card-round-arrow-icon">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M13.1827 7.74924L8.97105 11.939L10.029 13.0024L15.5289 7.53097C15.6704 7.39021 15.75 7.19886 15.75 6.99927C15.75 6.79968 15.6704 6.60832 15.5289 6.46756L10.0289 0.996093L8.97105 2.05951L13.1826 6.24924L2.29622e-07 6.24924L2.95189e-07 7.74924L13.1827 7.74924Z"
                                  fill="#101828"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </rt-carousel-slide-v3>
            </rt-filter-n-item>
            <rt-filter-n-item filter-name="obmen" :filter-tags="['sience']">
              <rt-carousel-slide-v3 class="rt-col-3 rt-col-td-3 rt-col-md-2">
                <a href="https://lk.rt.ru/#bonus" target="_blank"
                   class="spasibo-card">
                  <div class="rt-card-round">
                    <div class="rt-card-round-white">
                      <div class="rt-card-round-img-container">
                        <img src="//rt-static.rt.ru/sites/default/files/b2c/bonus/kniga_vsluh_img.jpg"
                             class=" rt-card-round-img">
                      </div>
                      <div class="rt-card-round__content sp-b-1 sp-h-0-3 sp-t-1 rt-card-round__content-s d-flex flex-column">
                        <div class="flex-fill">
                          <div class="rt-card-round__logo">
                            <img src="//rt-static.rt.ru/sites/default/files/b2c/bonus/kniga_vsluh_logo_44px.png"
                                 class=" rt-card-round__logo-img">
                          </div>
                          <div class="sp-h-0-1">
                            <p class="rt-font-h2 sp-t-0-3 sp-b-0-2">40 <span class="rt-font-h4">бонусов</span></p>
                            <p class="color-main05">Скидка 40% на покупку аудиокниг в приложении «Книга Вслух»</p>
                          </div>
                        </div>
                        <div class="rt-card-round-arrow d-flex flex-start-center sp-t-1 sp-h-0-1">
                          <span class="rt-card-round-arrow__text">Обменять</span>
                          <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg"
                               class="rt-card-round-arrow-icon">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M13.1827 7.74924L8.97105 11.939L10.029 13.0024L15.5289 7.53097C15.6704 7.39021 15.75 7.19886 15.75 6.99927C15.75 6.79968 15.6704 6.60832 15.5289 6.46756L10.0289 0.996093L8.97105 2.05951L13.1826 6.24924L2.29622e-07 6.24924L2.95189e-07 7.74924L13.1827 7.74924Z"
                                  fill="#101828"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </rt-carousel-slide-v3>
            </rt-filter-n-item>
            <rt-filter-n-item filter-name="obmen" :filter-tags="['sience']">
              <rt-carousel-slide-v3 class="rt-col-3 rt-col-td-3 rt-col-md-2">
                <a href="https://lk.rt.ru/#bonus" target="_blank"
                   class="spasibo-card">
                  <div class="rt-card-round">
                    <div class="rt-card-round-white">
                      <div class="rt-card-round-img-container">
                        <img src="//rt-static.rt.ru/sites/default/files/b2c/bonus/Storytel_img.png"
                             class=" rt-card-round-img">
                      </div>
                      <div class="rt-card-round__content sp-b-1 sp-h-0-3 sp-t-1 rt-card-round__content-s d-flex flex-column">
                        <div class="flex-fill">
                          <div class="rt-card-round__logo">
                            <img src="//rt-static.rt.ru/sites/default/files/b2c/bonus/Storytel_logo_44px.png"
                                 class=" rt-card-round__logo-img">
                          </div>
                          <div class="sp-h-0-1">
                            <p class="rt-font-h2 sp-t-0-3 sp-b-0-2">55 <span class="rt-font-h4">бонусов</span></p>
                            <p class="color-main05">Подписка на 45 дней от сервиса аудиокниг Storytel</p>
                          </div>
                        </div>
                        <div class="rt-card-round-arrow d-flex flex-start-center sp-t-1 sp-h-0-1">
                          <span class="rt-card-round-arrow__text">Обменять</span>
                          <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg"
                               class="rt-card-round-arrow-icon">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M13.1827 7.74924L8.97105 11.939L10.029 13.0024L15.5289 7.53097C15.6704 7.39021 15.75 7.19886 15.75 6.99927C15.75 6.79968 15.6704 6.60832 15.5289 6.46756L10.0289 0.996093L8.97105 2.05951L13.1826 6.24924L2.29622e-07 6.24924L2.95189e-07 7.74924L13.1827 7.74924Z"
                                  fill="#101828"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </rt-carousel-slide-v3>
            </rt-filter-n-item>
            <rt-filter-n-item filter-name="obmen" :filter-tags="['sience']">
              <rt-carousel-slide-v3 class="rt-col-3 rt-col-td-3 rt-col-md-2">
                <a href="https://lk.rt.ru/#bonus" target="_blank"
                   class="spasibo-card">
                  <div class="rt-card-round">
                    <div class="rt-card-round-white">
                      <div class="rt-card-round-img-container">
                        <img src="//rt-static.rt.ru/sites/default/files/img/spasibo/Licey_446%D1%85232.jpg"
                             class=" rt-card-round-img">
                      </div>
                      <div class="rt-card-round__content sp-b-1 sp-h-0-3 sp-t-1 rt-card-round__content-s d-flex flex-column">
                        <div class="flex-fill">
                          <div class="rt-card-round__logo">
                            <img src="//rt-static.rt.ru/sites/default/files/img/licey/logo_lyceum.svg"
                                 class=" rt-card-round__logo-img">
                          </div>
                          <div class="sp-h-0-1">
                            <p class="rt-font-h2 sp-t-0-3 sp-b-0-2">55 <span class="rt-font-h4">бонусов</span></p>
                            <p class="color-main05">Подписка на&nbsp;весь контент сервиса «Ростелеком Лицей» на&nbsp;30&nbsp;дней</p>
                          </div>
                        </div>
                        <div class="rt-card-round-arrow d-flex flex-start-center sp-t-1 sp-h-0-1">
                          <span class="rt-card-round-arrow__text">Обменять</span>
                          <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg"
                               class="rt-card-round-arrow-icon">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M13.1827 7.74924L8.97105 11.939L10.029 13.0024L15.5289 7.53097C15.6704 7.39021 15.75 7.19886 15.75 6.99927C15.75 6.79968 15.6704 6.60832 15.5289 6.46756L10.0289 0.996093L8.97105 2.05951L13.1826 6.24924L2.29622e-07 6.24924L2.95189e-07 7.74924L13.1827 7.74924Z"
                                  fill="#101828"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </rt-carousel-slide-v3>
            </rt-filter-n-item>
            <rt-filter-n-item filter-name="obmen" :filter-tags="['other']">
              <rt-carousel-slide-v3 class="rt-col-3 rt-col-td-3 rt-col-md-2">
                <a href="https://lk.rt.ru/#bonus" target="_blank"
                   class="spasibo-card">
                  <div class="rt-card-round">
                    <div class="rt-card-round-white">
                      <div class="rt-card-round-img-container">
                        <img src="//rt-static.rt.ru/sites/default/files/b2c/bonus/yuvelirochka_img.jpg"
                             class=" rt-card-round-img">
                      </div>
                      <div class="rt-card-round__content sp-b-1 sp-h-0-3 sp-t-1 rt-card-round__content-s d-flex flex-column">
                        <div class="flex-fill">
                          <div class="rt-card-round__logo">
                            <img src="//rt-static.rt.ru/sites/default/files/b2c/bonus/yuvelirochka_logo_44px.png"
                                 class=" rt-card-round__logo-img">
                          </div>
                          <div class="sp-h-0-1">
                            <p class="rt-font-h2 sp-t-0-3 sp-b-0-2">30 <span class="rt-font-h4">бонусов</span></p>
                            <p class="color-main05">
                              Серебряная подвеска и скидка 5% на покупку в интернет-магазине «Ювелирочка.рф»
                            </p>
                          </div>
                        </div>
                        <div class="rt-card-round-arrow d-flex flex-start-center sp-t-1 sp-h-0-1">
                          <span class="rt-card-round-arrow__text">Обменять</span>
                          <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg"
                               class="rt-card-round-arrow-icon">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M13.1827 7.74924L8.97105 11.939L10.029 13.0024L15.5289 7.53097C15.6704 7.39021 15.75 7.19886 15.75 6.99927C15.75 6.79968 15.6704 6.60832 15.5289 6.46756L10.0289 0.996093L8.97105 2.05951L13.1826 6.24924L2.29622e-07 6.24924L2.95189e-07 7.74924L13.1827 7.74924Z"
                                  fill="#101828"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </rt-carousel-slide-v3>
            </rt-filter-n-item>
            <rt-filter-n-item filter-name="obmen" :filter-tags="['other']">
              <rt-carousel-slide-v3 class="rt-col-3 rt-col-td-3 rt-col-md-2">
                <a href="https://lk.rt.ru/#bonus" target="_blank"
                   class="spasibo-card">
                  <div class="rt-card-round">
                    <div class="rt-card-round-white">
                      <div class="rt-card-round-img-container">
                        <img src="//rt-static.rt.ru/sites/default/files/img/spasibo/img/Zdravcity_600x300.jpg"
                             class=" rt-card-round-img">
                      </div>
                      <div class="rt-card-round__content sp-b-1 sp-h-0-3 sp-t-1 rt-card-round__content-s d-flex flex-column">
                        <div class="flex-fill">
                          <div class="rt-card-round__logo">
                            <img src="//rt-static.rt.ru/sites/default/files/b2c/bonus/zdrav_logo_44px.png"
                                 class=" rt-card-round__logo-img">
                          </div>
                          <div class="sp-h-0-1">
                            <p class="rt-font-h2 sp-t-0-3 sp-b-0-2">45 <span class="rt-font-h4">бонусов</span></p>
                            <p class="color-main05">
                              Скидка 5% на любой заказ в онлайн-сервисе «ЗдравСити»
                            </p>
                          </div>
                        </div>
                        <div class="rt-card-round-arrow d-flex flex-start-center sp-t-1 sp-h-0-1">
                          <span class="rt-card-round-arrow__text">Обменять</span>
                          <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg"
                               class="rt-card-round-arrow-icon">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M13.1827 7.74924L8.97105 11.939L10.029 13.0024L15.5289 7.53097C15.6704 7.39021 15.75 7.19886 15.75 6.99927C15.75 6.79968 15.6704 6.60832 15.5289 6.46756L10.0289 0.996093L8.97105 2.05951L13.1826 6.24924L2.29622e-07 6.24924L2.95189e-07 7.74924L13.1827 7.74924Z"
                                  fill="#101828"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </rt-carousel-slide-v3>
            </rt-filter-n-item>
            <rt-filter-n-item filter-name="obmen" :filter-tags="['other']">
              <rt-carousel-slide-v3 class="rt-col-3 rt-col-td-3 rt-col-md-2">
                <a href="https://lk.rt.ru/#bonus" target="_blank"
                   class="spasibo-card">
                  <div class="rt-card-round">
                    <div class="rt-card-round-white">
                      <div class="rt-card-round-img-container">
                        <img src="//rt-static.rt.ru/sites/default/files/img/spasibo/dochki-sinochki.jpg"
                             class=" rt-card-round-img">
                      </div>
                      <div class="rt-card-round__content sp-b-1 sp-h-0-3 sp-t-1 rt-card-round__content-s d-flex flex-column">
                        <div class="flex-fill">
                          <div class="rt-card-round__logo">
                            <img src="//rt-static.rt.ru/sites/default/files/img/spasibo/dochki-sinochki-logo.png"
                                 class=" rt-card-round__logo-img">
                          </div>
                          <div class="sp-h-0-1">
                            <p class="rt-font-h2 sp-t-0-3 sp-b-0-2">80 <span class="rt-font-h4">бонусов</span></p>
                            <p class="color-main05">
                              Скидка&nbsp;15% при&nbsp;покупке от&nbsp;3&nbsp;500&nbsp;рублей
                              в&nbsp;интернет-магазине «Дочки-Сыночки»
                            </p>
                          </div>
                        </div>
                        <div class="rt-card-round-arrow d-flex flex-start-center sp-t-1 sp-h-0-1">
                          <span class="rt-card-round-arrow__text">Обменять</span>
                          <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg"
                               class="rt-card-round-arrow-icon">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M13.1827 7.74924L8.97105 11.939L10.029 13.0024L15.5289 7.53097C15.6704 7.39021 15.75 7.19886 15.75 6.99927C15.75 6.79968 15.6704 6.60832 15.5289 6.46756L10.0289 0.996093L8.97105 2.05951L13.1826 6.24924L2.29622e-07 6.24924L2.95189e-07 7.74924L13.1827 7.74924Z"
                                  fill="#101828"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </rt-carousel-slide-v3>
            </rt-filter-n-item>
            <rt-filter-n-item filter-name="obmen" :filter-tags="['other']">
              <rt-carousel-slide-v3 class="rt-col-3 rt-col-td-3 rt-col-md-2">
                <a href="https://lk.rt.ru/#bonus" target="_blank"
                   class="spasibo-card">
                  <div class="rt-card-round">
                    <div class="rt-card-round-white">
                      <div class="rt-card-round-img-container">
                        <img src="//rt-static.rt.ru/sites/default/files/img/spasibo/Gde_moi_deti_446%D1%85232.jpg"
                             class=" rt-card-round-img">
                      </div>
                      <div class="rt-card-round__content sp-b-1 sp-h-0-3 sp-t-1 rt-card-round__content-s d-flex flex-column">
                        <div class="flex-fill">
                          <div class="rt-card-round__logo">
                            <img src="//rt-static.rt.ru/sites/default/files/img/spasibo/Gde_moi_deti_44px.png"
                                 class=" rt-card-round__logo-img">
                          </div>
                          <div class="sp-h-0-1">
                            <p class="rt-font-h2 sp-t-0-3 sp-b-0-2">80 <span class="rt-font-h4">бонусов</span></p>
                            <p class="color-main05">Лицензия на использование приложения «Где мои дети» в&nbsp;течение 1&nbsp;месяца</p>
                          </div>
                        </div>
                        <div class="rt-card-round-arrow d-flex flex-start-center sp-t-1 sp-h-0-1">
                          <span class="rt-card-round-arrow__text">Обменять</span>
                          <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg"
                               class="rt-card-round-arrow-icon">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M13.1827 7.74924L8.97105 11.939L10.029 13.0024L15.5289 7.53097C15.6704 7.39021 15.75 7.19886 15.75 6.99927C15.75 6.79968 15.6704 6.60832 15.5289 6.46756L10.0289 0.996093L8.97105 2.05951L13.1826 6.24924L2.29622e-07 6.24924L2.95189e-07 7.74924L13.1827 7.74924Z"
                                  fill="#101828"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </rt-carousel-slide-v3>
            </rt-filter-n-item>

            <rt-filter-n-item filter-name="obmen" :filter-tags="['sience']">
              <rt-carousel-slide-v3 class="rt-col-3 rt-col-td-3 rt-col-md-2">
                <a href="https://lk.rt.ru/#bonus" target="_blank"
                   class="spasibo-card">
                  <div class="rt-card-round">
                    <div class="rt-card-round-white">
                      <div class="rt-card-round-img-container">
                        <img src="//rt-static.rt.ru/sites/default/files/img/spasibo/klassniy_zhurnal_446x232.jpg"
                             class=" rt-card-round-img">
                      </div>
                      <div class="rt-card-round__content sp-b-1 sp-h-0-3 sp-t-1 rt-card-round__content-s d-flex flex-column">
                        <div class="flex-fill">
                          <div class="rt-card-round__logo">
                            <img src="//rt-static.rt.ru/sites/default/files/img/spasibo/klassniy_zhurnal_logo_44px.jpg"
                                 class=" rt-card-round__logo-img">
                          </div>
                          <div class="sp-h-0-1">
                            <p class="rt-font-h2 sp-t-0-3 sp-b-0-2">25 <span class="rt-font-h4">бонусов</span></p>
                            <p class="color-main05">
                              Электронная подписка на Классный журнал
                            </p>
                          </div>
                        </div>
                        <div class="rt-card-round-arrow d-flex flex-start-center sp-t-1 sp-h-0-1">
                          <span class="rt-card-round-arrow__text">Обменять</span>
                          <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg"
                               class="rt-card-round-arrow-icon">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M13.1827 7.74924L8.97105 11.939L10.029 13.0024L15.5289 7.53097C15.6704 7.39021 15.75 7.19886 15.75 6.99927C15.75 6.79968 15.6704 6.60832 15.5289 6.46756L10.0289 0.996093L8.97105 2.05951L13.1826 6.24924L2.29622e-07 6.24924L2.95189e-07 7.74924L13.1827 7.74924Z"
                                  fill="#101828"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </rt-carousel-slide-v3>
            </rt-filter-n-item>

            <rt-filter-n-item filter-name="obmen" :filter-tags="['sience']">
              <rt-carousel-slide-v3 class="rt-col-3 rt-col-td-3 rt-col-md-2">
                <a href="https://lk.rt.ru/#bonus" target="_blank"
                   class="spasibo-card">
                  <div class="rt-card-round">
                    <div class="rt-card-round-white">
                      <div class="rt-card-round-img-container">
                        <img src="//rt-static.rt.ru/sites/default/files/img/spasibo/litres_446x232.jpg"
                             class=" rt-card-round-img">
                      </div>
                      <div class="rt-card-round__content sp-b-1 sp-h-0-3 sp-t-1 rt-card-round__content-s d-flex flex-column">
                        <div class="flex-fill">
                          <div class="rt-card-round__logo">
                            <img src="//rt-static.rt.ru/sites/default/files/img/spasibo/lit_res%201.png"
                                 class=" rt-card-round__logo-img">
                          </div>
                          <div class="sp-h-0-1">
                            <p class="rt-font-h2 sp-t-0-3 sp-b-0-2">25 <span class="rt-font-h4">бонусов</span></p>
                            <p class="color-main05">
                              Электронная книга из каталога ЛитРес на выбор
                            </p>
                          </div>
                        </div>
                        <div class="rt-card-round-arrow d-flex flex-start-center sp-t-1 sp-h-0-1">
                          <span class="rt-card-round-arrow__text">Обменять</span>
                          <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg"
                               class="rt-card-round-arrow-icon">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M13.1827 7.74924L8.97105 11.939L10.029 13.0024L15.5289 7.53097C15.6704 7.39021 15.75 7.19886 15.75 6.99927C15.75 6.79968 15.6704 6.60832 15.5289 6.46756L10.0289 0.996093L8.97105 2.05951L13.1826 6.24924L2.29622e-07 6.24924L2.95189e-07 7.74924L13.1827 7.74924Z"
                                  fill="#101828"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </rt-carousel-slide-v3>
            </rt-filter-n-item>
            <rt-filter-n-item filter-name="obmen" :filter-tags="['sience']">
              <rt-carousel-slide-v3 class="rt-col-3 rt-col-td-3 rt-col-md-2">
                <a href="https://lk.rt.ru/#bonus" target="_blank"
                   class="spasibo-card">
                  <div class="rt-card-round">
                    <div class="rt-card-round-white">
                      <div class="rt-card-round-img-container">
                        <img src="//rt-static.rt.ru/sites/default/files/img/spasibo/ponimashka_446x232.jpg"
                             class=" rt-card-round-img">
                      </div>
                      <div class="rt-card-round__content sp-b-1 sp-h-0-3 sp-t-1 rt-card-round__content-s d-flex flex-column">
                        <div class="flex-fill">
                          <div class="rt-card-round__logo">
                            <img src="//rt-static.rt.ru/sites/default/files/img/spasibo/ponimashka_logo_44px.jpg"
                                 class=" rt-card-round__logo-img">
                          </div>
                          <div class="sp-h-0-1">
                            <p class="rt-font-h2 sp-t-0-3 sp-b-0-2">25 <span class="rt-font-h4">бонусов</span></p>
                            <p class="color-main05">
                              Электронная подписка на журнал «ПониМашка»
                            </p>
                          </div>
                        </div>
                        <div class="rt-card-round-arrow d-flex flex-start-center sp-t-1 sp-h-0-1">
                          <span class="rt-card-round-arrow__text">Обменять</span>
                          <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg"
                               class="rt-card-round-arrow-icon">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M13.1827 7.74924L8.97105 11.939L10.029 13.0024L15.5289 7.53097C15.6704 7.39021 15.75 7.19886 15.75 6.99927C15.75 6.79968 15.6704 6.60832 15.5289 6.46756L10.0289 0.996093L8.97105 2.05951L13.1826 6.24924L2.29622e-07 6.24924L2.95189e-07 7.74924L13.1827 7.74924Z"
                                  fill="#101828"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </rt-carousel-slide-v3>
            </rt-filter-n-item>
            <rt-filter-n-item filter-name="obmen" :filter-tags="['sience']">
              <rt-carousel-slide-v3 class="rt-col-3 rt-col-td-3 rt-col-md-2">
                <a href="https://lk.rt.ru/#bonus" target="_blank"
                   class="spasibo-card">
                  <div class="rt-card-round">
                    <div class="rt-card-round-white">
                      <div class="rt-card-round-img-container">
                        <img src="//rt-static.rt.ru/sites/default/files/b2c/bonus/Skyeng_600x300.jpg"
                             class=" rt-card-round-img">
                      </div>
                      <div class="rt-card-round__content sp-b-1 sp-h-0-3 sp-t-1 rt-card-round__content-s d-flex flex-column">
                        <div class="flex-fill">
                          <div class="rt-card-round__logo">
                            <img src="//rt-static.rt.ru/sites/default/files/img/spasibo/skyeng_logo_44px.jpg"
                                 class=" rt-card-round__logo-img">
                          </div>
                          <div class="sp-h-0-1">
                            <p class="rt-font-h2 sp-t-0-3 sp-b-0-2">55 <span class="rt-font-h4">бонусов</span></p>
                            <p class="color-main05">
                              Скидка 2500 рублей на изучение английского языка в Skyeng
                            </p>
                          </div>
                        </div>
                        <div class="rt-card-round-arrow d-flex flex-start-center sp-t-1 sp-h-0-1">
                          <span class="rt-card-round-arrow__text">Обменять</span>
                          <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg"
                               class="rt-card-round-arrow-icon">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M13.1827 7.74924L8.97105 11.939L10.029 13.0024L15.5289 7.53097C15.6704 7.39021 15.75 7.19886 15.75 6.99927C15.75 6.79968 15.6704 6.60832 15.5289 6.46756L10.0289 0.996093L8.97105 2.05951L13.1826 6.24924L2.29622e-07 6.24924L2.95189e-07 7.74924L13.1827 7.74924Z"
                                  fill="#101828"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </rt-carousel-slide-v3>
            </rt-filter-n-item>
            <rt-filter-n-item filter-name="obmen" :filter-tags="['other']">
              <rt-carousel-slide-v3 class="rt-col-3 rt-col-td-3 rt-col-md-2">
                <a href="https://lk.rt.ru/#bonus" target="_blank"
                   class="spasibo-card">
                  <div class="rt-card-round">
                    <div class="rt-card-round-white">
                      <div class="rt-card-round-img-container">
                        <img src="//rt-static.rt.ru/sites/default/files/img/spasibo/TaxiMaksim_446x232.jpg"
                             class=" rt-card-round-img">
                      </div>
                      <div class="rt-card-round__content sp-b-1 sp-h-0-3 sp-t-1 rt-card-round__content-s d-flex flex-column">
                        <div class="flex-fill">
                          <div class="rt-card-round__logo">
                            <img src="//rt-static.rt.ru/sites/default/files/img/spasibo/TaxiMaksim_logo_44px.jpg"
                                 class=" rt-card-round__logo-img">
                          </div>
                          <div class="sp-h-0-1">
                            <p class="rt-font-h2 sp-t-0-3 sp-b-0-2">50 <span class="rt-font-h4">бонусов</span></p>
                            <p class="color-main05">
                              500 рублей на первую поездку с сервисом заказа такси «Максим»
                            </p>
                          </div>
                        </div>
                        <div class="rt-card-round-arrow d-flex flex-start-center sp-t-1 sp-h-0-1">
                          <span class="rt-card-round-arrow__text">Обменять</span>
                          <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg"
                               class="rt-card-round-arrow-icon">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M13.1827 7.74924L8.97105 11.939L10.029 13.0024L15.5289 7.53097C15.6704 7.39021 15.75 7.19886 15.75 6.99927C15.75 6.79968 15.6704 6.60832 15.5289 6.46756L10.0289 0.996093L8.97105 2.05951L13.1826 6.24924L2.29622e-07 6.24924L2.95189e-07 7.74924L13.1827 7.74924Z"
                                  fill="#101828"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </rt-carousel-slide-v3>
            </rt-filter-n-item>
            <rt-filter-n-item filter-name="obmen" :filter-tags="['games']">
              <rt-carousel-slide-v3 class="rt-col-3 rt-col-td-3 rt-col-md-2">
                <a href="https://lk.rt.ru/#bonus" target="_blank"
                   class="spasibo-card">
                  <div class="rt-card-round">
                    <div class="rt-card-round-white">
                      <div class="rt-card-round-img-container">
                        <img src="//rt-static.rt.ru/sites/default/files/img/spasibo/WoT_446x232.jpg" class=" rt-card-round-img">
                      </div>
                      <div class="rt-card-round__content sp-b-1 sp-h-0-3 sp-t-1 rt-card-round__content-s d-flex flex-column">
                        <div class="flex-fill">
                          <div class="rt-card-round__logo">
                            <img src="//rt-static.rt.ru/sites/default/files/img/spasibo/WoT_logo_44px.jpg"
                                 class=" rt-card-round__logo-img">
                          </div>
                          <div class="sp-h-0-1">
                            <p class="rt-font-h2 sp-t-0-3 sp-b-0-2">60 <span class="rt-font-h4">бонусов</span></p>
                            <p class="color-main05">
                              World of Tanks. Победный набор
                            </p>
                          </div>
                        </div>
                        <div class="rt-card-round-arrow d-flex flex-start-center sp-t-1 sp-h-0-1">
                          <span class="rt-card-round-arrow__text">Обменять</span>
                          <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg"
                               class="rt-card-round-arrow-icon">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M13.1827 7.74924L8.97105 11.939L10.029 13.0024L15.5289 7.53097C15.6704 7.39021 15.75 7.19886 15.75 6.99927C15.75 6.79968 15.6704 6.60832 15.5289 6.46756L10.0289 0.996093L8.97105 2.05951L13.1826 6.24924L2.29622e-07 6.24924L2.95189e-07 7.74924L13.1827 7.74924Z"
                                  fill="#101828"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </rt-carousel-slide-v3>
            </rt-filter-n-item>
            <rt-filter-n-item filter-name="obmen" :filter-tags="['rostelecom']">
              <rt-carousel-slide-v3 class="rt-col-3 rt-col-td-3 rt-col-md-2">
                <a href="https://lk.rt.ru/#bonus" target="_blank"
                   class="spasibo-card">
                  <div class="rt-card-round">
                    <div class="rt-card-round-white">
                      <div class="rt-card-round-img-container">
                        <img src="//rt-static.rt.ru/sites/default/files/img/spasibo/domashniy_internet.jpg"
                             class=" rt-card-round-img">
                      </div>
                      <div class="rt-card-round__content sp-b-1 sp-h-0-3 sp-t-1 rt-card-round__content-s d-flex flex-column">
                        <div class="flex-fill">
                          <div class="sp-h-0-1">
                            <p class="rt-font-h2 sp-t-0-3 sp-b-0-2">от 100 <span class="rt-font-h4">бонусов</span></p>
                            <p class="color-main05">
                              Скидка 25% на «Домашний Интернет»
                            </p>
                          </div>
                        </div>
                        <div class="rt-card-round-arrow d-flex flex-start-center sp-t-1 sp-h-0-1">
                          <span class="rt-card-round-arrow__text">Обменять</span>
                          <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg"
                               class="rt-card-round-arrow-icon">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M13.1827 7.74924L8.97105 11.939L10.029 13.0024L15.5289 7.53097C15.6704 7.39021 15.75 7.19886 15.75 6.99927C15.75 6.79968 15.6704 6.60832 15.5289 6.46756L10.0289 0.996093L8.97105 2.05951L13.1826 6.24924L2.29622e-07 6.24924L2.95189e-07 7.74924L13.1827 7.74924Z"
                                  fill="#101828"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </rt-carousel-slide-v3>
            </rt-filter-n-item>
            <rt-filter-n-item filter-name="obmen" :filter-tags="['rostelecom']">
              <rt-carousel-slide-v3 class="rt-col-3 rt-col-td-3 rt-col-md-2">
                <a href="https://lk.rt.ru/#bonus" target="_blank"
                   class="spasibo-card">
                  <div class="rt-card-round">
                    <div class="rt-card-round-white">
                      <div class="rt-card-round-img-container">
                        <img src="//rt-static.rt.ru/sites/default/files/img/spasibo/paket_nastroy_kino.jpg"
                             class=" rt-card-round-img">
                      </div>
                      <div class="rt-card-round__content sp-b-1 sp-h-0-3 sp-t-1 rt-card-round__content-s d-flex flex-column">
                        <div class="flex-fill">
                          <div class="sp-h-0-1">
                            <p class="rt-font-h2 sp-t-0-3 sp-b-0-2">299 <span class="rt-font-h4">бонусов</span></p>
                            <p class="color-main05">
                              Пакет телеканалов «НАСТРОЙ КИНО!»
                            </p>
                          </div>
                        </div>
                        <div class="rt-card-round-arrow d-flex flex-start-center sp-t-1 sp-h-0-1">
                          <span class="rt-card-round-arrow__text">Обменять</span>
                          <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg"
                               class="rt-card-round-arrow-icon">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M13.1827 7.74924L8.97105 11.939L10.029 13.0024L15.5289 7.53097C15.6704 7.39021 15.75 7.19886 15.75 6.99927C15.75 6.79968 15.6704 6.60832 15.5289 6.46756L10.0289 0.996093L8.97105 2.05951L13.1826 6.24924L2.29622e-07 6.24924L2.95189e-07 7.74924L13.1827 7.74924Z"
                                  fill="#101828"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </rt-carousel-slide-v3>
            </rt-filter-n-item>
            <rt-filter-n-item filter-name="obmen" :filter-tags="['rostelecom']">
              <rt-carousel-slide-v3 class="rt-col-3 rt-col-td-3 rt-col-md-2">
                <a href="https://lk.rt.ru/#bonus" target="_blank"
                   class="spasibo-card">
                  <div class="rt-card-round">
                    <div class="rt-card-round-white">
                      <div class="rt-card-round-img-container">
                        <img src="//rt-static.rt.ru/sites/default/files/img/spasibo/paket_vzlosliy.jpg"
                             class=" rt-card-round-img">
                      </div>
                      <div class="rt-card-round__content sp-b-1 sp-h-0-3 sp-t-1 rt-card-round__content-s d-flex flex-column">
                        <div class="flex-fill">
                          <div class="sp-h-0-1">
                            <p class="rt-font-h2 sp-t-0-3 sp-b-0-2">250 <span class="rt-font-h4">бонусов</span></p>
                            <p class="color-main05">
                              Пакет телеканалов «Взрослый»
                            </p>
                          </div>
                        </div>
                        <div class="rt-card-round-arrow d-flex flex-start-center sp-t-1 sp-h-0-1">
                          <span class="rt-card-round-arrow__text">Обменять</span>
                          <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg"
                               class="rt-card-round-arrow-icon">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M13.1827 7.74924L8.97105 11.939L10.029 13.0024L15.5289 7.53097C15.6704 7.39021 15.75 7.19886 15.75 6.99927C15.75 6.79968 15.6704 6.60832 15.5289 6.46756L10.0289 0.996093L8.97105 2.05951L13.1826 6.24924L2.29622e-07 6.24924L2.95189e-07 7.74924L13.1827 7.74924Z"
                                  fill="#101828"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </rt-carousel-slide-v3>
            </rt-filter-n-item>
            <rt-filter-n-item filter-name="obmen" :filter-tags="['rostelecom']">
              <rt-carousel-slide-v3 class="rt-col-3 rt-col-td-3 rt-col-md-2">
                <a href="https://lk.rt.ru/#bonus" target="_blank"
                   class="spasibo-card">
                  <div class="rt-card-round">
                    <div class="rt-card-round-white">
                      <div class="rt-card-round-img-container">
                        <img src="//rt-static.rt.ru/sites/default/files/img/spasibo/kaspersky.jpg" class=" rt-card-round-img">
                      </div>
                      <div class="rt-card-round__content sp-b-1 sp-h-0-3 sp-t-1 rt-card-round__content-s d-flex flex-column">
                        <div class="flex-fill">
                          <div class="sp-h-0-1">
                            <p class="rt-font-h2 sp-t-0-3 sp-b-0-2">50 <span class="rt-font-h4">бонусов</span></p>
                            <p class="color-main05">
                              Kaspersky INTERNET Security на 2 устройства
                            </p>
                          </div>
                        </div>
                        <div class="rt-card-round-arrow d-flex flex-start-center sp-t-1 sp-h-0-1">
                          <span class="rt-card-round-arrow__text">Обменять</span>
                          <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg"
                               class="rt-card-round-arrow-icon">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M13.1827 7.74924L8.97105 11.939L10.029 13.0024L15.5289 7.53097C15.6704 7.39021 15.75 7.19886 15.75 6.99927C15.75 6.79968 15.6704 6.60832 15.5289 6.46756L10.0289 0.996093L8.97105 2.05951L13.1826 6.24924L2.29622e-07 6.24924L2.95189e-07 7.74924L13.1827 7.74924Z"
                                  fill="#101828"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </rt-carousel-slide-v3>
            </rt-filter-n-item>
            <rt-filter-n-item filter-name="obmen" :filter-tags="['rostelecom']">
              <rt-carousel-slide-v3 class="rt-col-3 rt-col-td-3 rt-col-md-2">
                <a href="https://lk.rt.ru/#bonus" target="_blank"
                   class="spasibo-card">
                  <div class="rt-card-round">
                    <div class="rt-card-round-white">
                      <div class="rt-card-round-img-container">
                        <img src="//rt-static.rt.ru/sites/default/files/img/spasibo/120munit_razgovorov.jpg"
                             class=" rt-card-round-img">
                      </div>
                      <div class="rt-card-round__content sp-b-1 sp-h-0-3 sp-t-1 rt-card-round__content-s d-flex flex-column">
                        <div class="flex-fill">
                          <div class="sp-h-0-1">
                            <p class="rt-font-h2 sp-t-0-3 sp-b-0-2">38 <span class="rt-font-h4">бонусов</span></p>
                            <p class="color-main05">
                              120 минут местных телефоннных разговоров
                            </p>
                          </div>
                        </div>
                        <div class="rt-card-round-arrow d-flex flex-start-center sp-t-1 sp-h-0-1">
                          <span class="rt-card-round-arrow__text">Обменять</span>
                          <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg"
                               class="rt-card-round-arrow-icon">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M13.1827 7.74924L8.97105 11.939L10.029 13.0024L15.5289 7.53097C15.6704 7.39021 15.75 7.19886 15.75 6.99927C15.75 6.79968 15.6704 6.60832 15.5289 6.46756L10.0289 0.996093L8.97105 2.05951L13.1826 6.24924L2.29622e-07 6.24924L2.95189e-07 7.74924L13.1827 7.74924Z"
                                  fill="#101828"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </rt-carousel-slide-v3>
            </rt-filter-n-item>
            <rt-filter-n-item filter-name="obmen" :filter-tags="['rostelecom']">
              <rt-carousel-slide-v3 class="rt-col-3 rt-col-td-3 rt-col-md-2">
                <a href="https://lk.rt.ru/#bonus" target="_blank"
                   class="spasibo-card">
                  <div class="rt-card-round">
                    <div class="rt-card-round-white">
                      <div class="rt-card-round-img-container">
                        <img src="//rt-static.rt.ru/sites/default/files/img/spasibo/paket_interneta_3Gb_bonus.jpg"
                             class=" rt-card-round-img">
                      </div>
                      <div class="rt-card-round__content sp-b-1 sp-h-0-3 sp-t-1 rt-card-round__content-s d-flex flex-column">
                        <div class="flex-fill">
                          <div class="sp-h-0-1">
                            <p class="rt-font-h2 sp-t-0-3 sp-b-0-2">60 <span class="rt-font-h4">бонусов</span></p>
                            <p class="color-main05">
                              Пакет «3 ГБ Бонус» для мобильного интернета
                            </p>
                          </div>
                        </div>
                        <div class="rt-card-round-arrow d-flex flex-start-center sp-t-1 sp-h-0-1">
                          <span class="rt-card-round-arrow__text">Обменять</span>
                          <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg"
                               class="rt-card-round-arrow-icon">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M13.1827 7.74924L8.97105 11.939L10.029 13.0024L15.5289 7.53097C15.6704 7.39021 15.75 7.19886 15.75 6.99927C15.75 6.79968 15.6704 6.60832 15.5289 6.46756L10.0289 0.996093L8.97105 2.05951L13.1826 6.24924L2.29622e-07 6.24924L2.95189e-07 7.74924L13.1827 7.74924Z"
                                  fill="#101828"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </rt-carousel-slide-v3>
            </rt-filter-n-item>
            <rt-filter-n-item filter-name="obmen" :filter-tags="['rostelecom','sience','games','home','other']">
              <rt-carousel-slide-v3 class="rt-col-3 rt-col-td-3 rt-col-md-2">
                <a href="https://lk.rt.ru/#bonus" target="_blank"
                   class="spasibo-card">
                  <div class="rt-card-round">
                    <div class="rt-card-round-white">
                      <div class="rt-card-round-img-container"></div>
                      <div class="rt-card-round__content sp-b-1 sp-h-0-3 sp-t-1 rt-card-round__content-s d-flex flex-column">
                        <div class="flex-fill">
                          <div class="sp-h-0-1">
                            <p class="rt-font-h4 sp-t-0-3">
                              Получите больше впечатлений от Ростелекома и
                              партнеров
                            </p>
                          </div>
                        </div>
                        <div class="rt-card-round-arrow d-flex flex-start-center sp-t-1 sp-h-0-1">
                          <span class="rt-card-round-arrow__text">Обменять</span>
                          <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg"
                               class="rt-card-round-arrow-icon">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M13.1827 7.74924L8.97105 11.939L10.029 13.0024L15.5289 7.53097C15.6704 7.39021 15.75 7.19886 15.75 6.99927C15.75 6.79968 15.6704 6.60832 15.5289 6.46756L10.0289 0.996093L8.97105 2.05951L13.1826 6.24924L2.29622e-07 6.24924L2.95189e-07 7.74924L13.1827 7.74924Z"
                                  fill="#101828"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </rt-carousel-slide-v3>
            </rt-filter-n-item>
            <rt-resize-content-height :query-selectors-names="['.spasibo-card .rt-card-round__content','.rt-card-round-img-container']">
              <rt-carousel deep-slide-load="2" decorated="true">
                <rt-col size="12">
                  <rt-filter-n has-carousel="true" carousel-up="2" custom-class="row row-nowrap" filter-name="obmen">
                  </rt-filter-n>
                </rt-col>
              </rt-carousel>
            </rt-resize-content-height>
            <div class="rt-container sp-t-4 td-sp-t-3 md-sp-t-2">
              <rt-col>
                <p class="rt-font-h2 sp-b-1">Накопить бонусы</p>
                <div class="d-flex sp-b-1-1 rt-tag-list-spasibo">
                  <rt-filter-n-setter filter-name="nakoplenie" :filter-tags="['pokupki']">
                    бонусы за покупки
                  </rt-filter-n-setter>
                  <!--rt-filter-n-setter filter-name="nakoplenie" :filter-tags="['cheki']">
          бонусы за чеки
        </rt-filter-n-setter-->
                  <rt-filter-n-setter filter-name="nakoplenie" :filter-tags="['rostelecom']">
                    от Ростелеком
                  </rt-filter-n-setter>
                </div>
              </rt-col>
            </div>
            <rt-filter-n-item filter-name="nakoplenie" :filter-tags="['rostelecom']">
              <rt-carousel-slide-v3 class="rt-col-3 rt-col-td-3 rt-col-md-2">
                <a href="https://lk.rt.ru/#bonus" target="_blank"
                   class="spasibo-card">
                  <div class="rt-card-round">
                    <div class="rt-card-round-white">
                      <div class="rt-card-round-img-container">
                        <img src="//rt-static.rt.ru/sites/default/files/img/spasibo/za_vstuplenie.jpg" class=" rt-card-round-img">
                      </div>
                      <div class="rt-card-round__content sp-b-1 sp-h-0-3 sp-t-1 rt-card-round__content-s d-flex flex-column">
                        <div class="flex-fill">
                          <div class="sp-h-0-1">
                            <p class="rt-font-h2 sp-t-0-3 sp-b-0-2">200 <span class="rt-font-h4">бонусов</span></p>
                            <p class="color-main05">
                              за подключение к программе «Бонус»
                            </p>
                          </div>
                        </div>
                        <div class="rt-card-round-arrow d-flex flex-start-center sp-t-1 sp-h-0-1">
                          <span class="rt-card-round-arrow__text">Обменять</span>
                          <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg"
                               class="rt-card-round-arrow-icon">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M13.1827 7.74924L8.97105 11.939L10.029 13.0024L15.5289 7.53097C15.6704 7.39021 15.75 7.19886 15.75 6.99927C15.75 6.79968 15.6704 6.60832 15.5289 6.46756L10.0289 0.996093L8.97105 2.05951L13.1826 6.24924L2.29622e-07 6.24924L2.95189e-07 7.74924L13.1827 7.74924Z"
                                  fill="#101828"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </rt-carousel-slide-v3>
            </rt-filter-n-item>
            <rt-filter-n-item filter-name="nakoplenie" :filter-tags="['rostelecom']">
              <rt-carousel-slide-v3 class="rt-col-3 rt-col-td-3 rt-col-md-2">
                <a href="https://lk.rt.ru/#bonus" target="_blank"
                   class="spasibo-card">
                  <div class="rt-card-round">
                    <div class="rt-card-round-white">
                      <div class="rt-card-round-img-container">
                        <img src="//rt-static.rt.ru/sites/default/files/img/spasibo/den_rozhdeniya.jpg"
                             class=" rt-card-round-img">
                      </div>
                      <div class="rt-card-round__content sp-b-1 sp-h-0-3 sp-t-1 rt-card-round__content-s d-flex flex-column">
                        <div class="flex-fill">
                          <div class="sp-h-0-1">
                            <p class="rt-font-h2 sp-t-0-3 sp-b-0-2">300 <span class="rt-font-h4">бонусов</span></p>
                            <p class="color-main05">
                              подарок на День рождения
                            </p>
                          </div>
                        </div>
                        <div class="rt-card-round-arrow d-flex flex-start-center sp-t-1 sp-h-0-1">
                          <span class="rt-card-round-arrow__text">Обменять</span>
                          <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg"
                               class="rt-card-round-arrow-icon">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M13.1827 7.74924L8.97105 11.939L10.029 13.0024L15.5289 7.53097C15.6704 7.39021 15.75 7.19886 15.75 6.99927C15.75 6.79968 15.6704 6.60832 15.5289 6.46756L10.0289 0.996093L8.97105 2.05951L13.1826 6.24924L2.29622e-07 6.24924L2.95189e-07 7.74924L13.1827 7.74924Z"
                                  fill="#101828"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </rt-carousel-slide-v3>
            </rt-filter-n-item>
            <rt-filter-n-item filter-name="nakoplenie" :filter-tags="['rostelecom']">
              <rt-carousel-slide-v3 class="rt-col-3 rt-col-td-3 rt-col-md-2">
                <a href="https://lk.rt.ru/#bonus" target="_blank"
                   class="spasibo-card">
                  <div class="rt-card-round">
                    <div class="rt-card-round-white">
                      <div class="rt-card-round-img-container">
                        <img src="//rt-static.rt.ru/sites/default/files/img/spasibo/za_oplatu.jpg" class=" rt-card-round-img">
                      </div>
                      <div class="rt-card-round__content sp-b-1 sp-h-0-3 sp-t-1 rt-card-round__content-s d-flex flex-column">
                        <div class="flex-fill">
                          <div class="sp-h-0-1">
                            <p class="rt-font-h2 sp-t-0-3 sp-b-0-2">1+ <span class="rt-font-h4">бонусов</span></p>
                            <p class="color-main05">
                              1+ бонус за каждые 100 рублей
                            </p>
                          </div>
                        </div>
                        <div class="rt-card-round-arrow d-flex flex-start-center sp-t-1 sp-h-0-1">
                          <span class="rt-card-round-arrow__text">Обменять</span>
                          <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg"
                               class="rt-card-round-arrow-icon">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M13.1827 7.74924L8.97105 11.939L10.029 13.0024L15.5289 7.53097C15.6704 7.39021 15.75 7.19886 15.75 6.99927C15.75 6.79968 15.6704 6.60832 15.5289 6.46756L10.0289 0.996093L8.97105 2.05951L13.1826 6.24924L2.29622e-07 6.24924L2.95189e-07 7.74924L13.1827 7.74924Z"
                                  fill="#101828"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </rt-carousel-slide-v3>
            </rt-filter-n-item>
            <rt-filter-n-item filter-name="nakoplenie" :filter-tags="['rostelecom']">
              <rt-carousel-slide-v3 class="rt-col-3 rt-col-td-3 rt-col-md-2">
                <a href="https://lk.rt.ru/#bonus" target="_blank"
                   class="spasibo-card">
                  <div class="rt-card-round">
                    <div class="rt-card-round-white">
                      <div class="rt-card-round-img-container">
                        <img src="//rt-static.rt.ru/sites/default/files/img/spasibo/5_filmov_v_mesyac.jpg"
                             class=" rt-card-round-img">
                      </div>
                      <div class="rt-card-round__content sp-b-1 sp-h-0-3 sp-t-1 rt-card-round__content-s d-flex flex-column">
                        <div class="flex-fill">
                          <div class="sp-h-0-1">
                            <p class="rt-font-h2 sp-t-0-3 sp-b-0-2">20 <span class="rt-font-h4">бонусов</span></p>
                            <p class="color-main05">
                              за покупку 5 фильмов в месяц
                            </p>
                          </div>
                        </div>
                        <div class="rt-card-round-arrow d-flex flex-start-center sp-t-1 sp-h-0-1">
                          <span class="rt-card-round-arrow__text">Обменять</span>
                          <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg"
                               class="rt-card-round-arrow-icon">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M13.1827 7.74924L8.97105 11.939L10.029 13.0024L15.5289 7.53097C15.6704 7.39021 15.75 7.19886 15.75 6.99927C15.75 6.79968 15.6704 6.60832 15.5289 6.46756L10.0289 0.996093L8.97105 2.05951L13.1826 6.24924L2.29622e-07 6.24924L2.95189e-07 7.74924L13.1827 7.74924Z"
                                  fill="#101828"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </rt-carousel-slide-v3>
            </rt-filter-n-item>
            <rt-filter-n-item filter-name="nakoplenie" :filter-tags="['rostelecom']">
              <rt-carousel-slide-v3 class="rt-col-3 rt-col-td-3 rt-col-md-2">
                <a href="https://lk.rt.ru/#bonus" target="_blank"
                   class="spasibo-card">
                  <div class="rt-card-round">
                    <div class="rt-card-round-white">
                      <div class="rt-card-round-img-container">
                        <img src="//rt-static.rt.ru/sites/default/files/img/spasibo/za_privyazku_socsetey.jpg"
                             class=" rt-card-round-img">
                      </div>
                      <div class="rt-card-round__content sp-b-1 sp-h-0-3 sp-t-1 rt-card-round__content-s d-flex flex-column">
                        <div class="flex-fill">
                          <div class="sp-h-0-1">
                            <p class="rt-font-h2 sp-t-0-3 sp-b-0-2">30 <span class="rt-font-h4">бонусов</span></p>
                            <p class="color-main05">
                              за привязку профиля в социальной сети ВКонтакте
                            </p>
                          </div>
                        </div>
                        <div class="rt-card-round-arrow d-flex flex-start-center sp-t-1 sp-h-0-1">
                          <span class="rt-card-round-arrow__text">Обменять</span>
                          <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg"
                               class="rt-card-round-arrow-icon">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M13.1827 7.74924L8.97105 11.939L10.029 13.0024L15.5289 7.53097C15.6704 7.39021 15.75 7.19886 15.75 6.99927C15.75 6.79968 15.6704 6.60832 15.5289 6.46756L10.0289 0.996093L8.97105 2.05951L13.1826 6.24924L2.29622e-07 6.24924L2.95189e-07 7.74924L13.1827 7.74924Z"
                                  fill="#101828"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </rt-carousel-slide-v3>
            </rt-filter-n-item>
            <rt-filter-n-item filter-name="nakoplenie" :filter-tags="['rostelecom']">
              <rt-carousel-slide-v3 class="rt-col-3 rt-col-td-3 rt-col-md-2">
                <a href="https://lk.rt.ru/#bonus" target="_blank"
                   class="spasibo-card">
                  <div class="rt-card-round">
                    <div class="rt-card-round-white">
                      <div class="rt-card-round-img-container">
                        <img src="//rt-static.rt.ru/sites/default/files/img/spasibo/za_stazh.jpg" class=" rt-card-round-img">
                      </div>
                      <div class="rt-card-round__content sp-b-1 sp-h-0-3 sp-t-1 rt-card-round__content-s d-flex flex-column">
                        <div class="flex-fill">
                          <div class="sp-h-0-1">
                            <p class="rt-font-h2 sp-t-0-3 sp-b-0-2">100+ <span class="rt-font-h4">бонусов</span></p>
                            <p class="color-main05">
                              за продолжительность участия в программе «Бонус»
                            </p>
                          </div>
                        </div>
                        <div class="rt-card-round-arrow d-flex flex-start-center sp-t-1 sp-h-0-1">
                          <span class="rt-card-round-arrow__text">Обменять</span>
                          <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg"
                               class="rt-card-round-arrow-icon">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M13.1827 7.74924L8.97105 11.939L10.029 13.0024L15.5289 7.53097C15.6704 7.39021 15.75 7.19886 15.75 6.99927C15.75 6.79968 15.6704 6.60832 15.5289 6.46756L10.0289 0.996093L8.97105 2.05951L13.1826 6.24924L2.29622e-07 6.24924L2.95189e-07 7.74924L13.1827 7.74924Z"
                                  fill="#101828"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </rt-carousel-slide-v3>
            </rt-filter-n-item>

            <rt-filter-n-item filter-name="nakoplenie" :filter-tags="['cheki']">
              <rt-carousel-slide-v3 class="rt-col-3 rt-col-td-3 rt-col-md-2">
                <a href="https://lk.rt.ru/#bonus" target="_blank"
                   class="spasibo-card">
                  <div class="rt-card-round">
                    <div class="rt-card-round-white">
                      <div class="rt-card-round-img-container">
                        <img src="//rt-static.rt.ru/sites/default/files/img/spasibo/img/Vkusvill_gotovit_600x300.jpg" class=" rt-card-round-img">
                      </div>
                      <div class="rt-card-round__content sp-b-1 sp-h-0-3 sp-t-1 rt-card-round__content-s d-flex flex-column">
                        <div class="flex-fill">
                          <div class="rt-card-round__logo">
                            <img src="//rt-static.rt.ru/sites/default/files/img/spasibo/logo/Vkusvill_44px.png"
                                 class=" rt-card-round__logo-img">
                          </div>
                          <div class="sp-h-0-1">
                            <p class="rt-font-h2 sp-t-0-3 sp-b-0-2">
                              3 <span class="rt-font-h4">бонуса</span>
                            </p>
                            <p class="color-main05">
                              3 бонуса за каждые 100 рублей покупки
                            </p>
                          </div>
                        </div>
                        <div class="rt-card-round-arrow d-flex flex-start-center sp-t-1 sp-h-0-1">
                          <span class="rt-card-round-arrow__text">Обменять</span>
                          <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg"
                               class="rt-card-round-arrow-icon">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M13.1827 7.74924L8.97105 11.939L10.029 13.0024L15.5289 7.53097C15.6704 7.39021 15.75 7.19886 15.75 6.99927C15.75 6.79968 15.6704 6.60832 15.5289 6.46756L10.0289 0.996093L8.97105 2.05951L13.1826 6.24924L2.29622e-07 6.24924L2.95189e-07 7.74924L13.1827 7.74924Z"
                                  fill="#101828"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </rt-carousel-slide-v3>
            </rt-filter-n-item>
            <rt-filter-n-item filter-name="nakoplenie" :filter-tags="['cheki']">
              <rt-carousel-slide-v3 class="rt-col-3 rt-col-td-3 rt-col-md-2">
                <a href="https://lk.rt.ru/#bonus" target="_blank"
                   class="spasibo-card">
                  <div class="rt-card-round">
                    <div class="rt-card-round-white">
                      <div class="rt-card-round-img-container">
                        <img src="//rt-static.rt.ru/sites/default/files/img/spasibo/img/Belwest_600x300.jpg" class=" rt-card-round-img">
                      </div>
                      <div class="rt-card-round__content sp-b-1 sp-h-0-3 sp-t-1 rt-card-round__content-s d-flex flex-column">
                        <div class="flex-fill">
                          <div class="rt-card-round__logo">
                            <img src="//rt-static.rt.ru/sites/default/files/img/spasibo/logo/Belwest_44px.png"
                                 class=" rt-card-round__logo-img">
                          </div>
                          <div class="sp-h-0-1">
                            <p class="rt-font-h2 sp-t-0-3 sp-b-0-2">
                              5 <span class="rt-font-h4">бонусов</span>
                            </p>
                            <p class="color-main05">
                              5 бонуса за каждые 100 рублей покупки
                            </p>
                          </div>
                        </div>
                        <div class="rt-card-round-arrow d-flex flex-start-center sp-t-1 sp-h-0-1">
                          <span class="rt-card-round-arrow__text">Обменять</span>
                          <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg"
                               class="rt-card-round-arrow-icon">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M13.1827 7.74924L8.97105 11.939L10.029 13.0024L15.5289 7.53097C15.6704 7.39021 15.75 7.19886 15.75 6.99927C15.75 6.79968 15.6704 6.60832 15.5289 6.46756L10.0289 0.996093L8.97105 2.05951L13.1826 6.24924L2.29622e-07 6.24924L2.95189e-07 7.74924L13.1827 7.74924Z"
                                  fill="#101828"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </rt-carousel-slide-v3>
            </rt-filter-n-item>
            <rt-filter-n-item filter-name="nakoplenie" :filter-tags="['cheki']">
              <rt-carousel-slide-v3 class="rt-col-3 rt-col-td-3 rt-col-md-2">
                <a href="https://lk.rt.ru/#bonus" target="_blank"
                   class="spasibo-card">
                  <div class="rt-card-round">
                    <div class="rt-card-round-white">
                      <div class="rt-card-round-img-container">
                        <img src="//rt-static.rt.ru/sites/default/files/img/spasibo/img/VseInstrumenty_600x300.jpg" class=" rt-card-round-img">
                      </div>
                      <div class="rt-card-round__content sp-b-1 sp-h-0-3 sp-t-1 rt-card-round__content-s d-flex flex-column">
                        <div class="flex-fill">
                          <div class="rt-card-round__logo">
                            <img src="//rt-static.rt.ru/sites/default/files/img/spasibo/logo/Vse_instrumenty_44px.png"
                                 class=" rt-card-round__logo-img">
                          </div>
                          <div class="sp-h-0-1">
                            <p class="rt-font-h2 sp-t-0-3 sp-b-0-2">
                              1 <span class="rt-font-h4">бонус</span>
                            </p>
                            <p class="color-main05">
                              1 бонуса за каждые 100 рублей покупки
                            </p>
                          </div>
                        </div>
                        <div class="rt-card-round-arrow d-flex flex-start-center sp-t-1 sp-h-0-1">
                          <span class="rt-card-round-arrow__text">Обменять</span>
                          <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg"
                               class="rt-card-round-arrow-icon">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M13.1827 7.74924L8.97105 11.939L10.029 13.0024L15.5289 7.53097C15.6704 7.39021 15.75 7.19886 15.75 6.99927C15.75 6.79968 15.6704 6.60832 15.5289 6.46756L10.0289 0.996093L8.97105 2.05951L13.1826 6.24924L2.29622e-07 6.24924L2.95189e-07 7.74924L13.1827 7.74924Z"
                                  fill="#101828"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </rt-carousel-slide-v3>
            </rt-filter-n-item>
            <rt-filter-n-item filter-name="nakoplenie" :filter-tags="['cheki']">
              <rt-carousel-slide-v3 class="rt-col-3 rt-col-td-3 rt-col-md-2">
                <a href="https://lk.rt.ru/#bonus" target="_blank"
                   class="spasibo-card">
                  <div class="rt-card-round">
                    <div class="rt-card-round-white">
                      <div class="rt-card-round-img-container">
                        <img src="//rt-static.rt.ru/sites/default/files/img/spasibo/img/X-fit_600x300.jpg" class=" rt-card-round-img">
                      </div>
                      <div class="rt-card-round__content sp-b-1 sp-h-0-3 sp-t-1 rt-card-round__content-s d-flex flex-column">
                        <div class="flex-fill">
                          <div class="rt-card-round__logo">
                            <img src="//rt-static.rt.ru/sites/default/files/img/spasibo/logo/XFit_44px.png"
                                 class=" rt-card-round__logo-img">
                          </div>
                          <div class="sp-h-0-1">
                            <p class="rt-font-h2 sp-t-0-3 sp-b-0-2">
                              800 <span class="rt-font-h4">бонусов</span>
                            </p>
                            <p class="color-main05">
                              800 бонусов за каждую оплаченную услугу
                            </p>
                          </div>
                        </div>
                        <div class="rt-card-round-arrow d-flex flex-start-center sp-t-1 sp-h-0-1">
                          <span class="rt-card-round-arrow__text">Обменять</span>
                          <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg"
                               class="rt-card-round-arrow-icon">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M13.1827 7.74924L8.97105 11.939L10.029 13.0024L15.5289 7.53097C15.6704 7.39021 15.75 7.19886 15.75 6.99927C15.75 6.79968 15.6704 6.60832 15.5289 6.46756L10.0289 0.996093L8.97105 2.05951L13.1826 6.24924L2.29622e-07 6.24924L2.95189e-07 7.74924L13.1827 7.74924Z"
                                  fill="#101828"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </rt-carousel-slide-v3>
            </rt-filter-n-item>
            <rt-filter-n-item filter-name="nakoplenie" :filter-tags="['cheki']">
              <rt-carousel-slide-v3 class="rt-col-3 rt-col-td-3 rt-col-md-2">
                <a href="https://lk.rt.ru/#bonus" target="_blank"
                   class="spasibo-card">
                  <div class="rt-card-round">
                    <div class="rt-card-round-white">
                      <div class="rt-card-round-img-container">
                        <img src="//rt-static.rt.ru/sites/default/files/img/spasibo/apl_446x232.jpg" class=" rt-card-round-img">
                      </div>
                      <div class="rt-card-round__content sp-b-1 sp-h-0-3 sp-t-1 rt-card-round__content-s d-flex flex-column">
                        <div class="flex-fill">
                          <div class="rt-card-round__logo">
                            <img src="//rt-static.rt.ru/sites/default/files/img/spasibo/apl_logo_44px.jpg"
                                 class=" rt-card-round__logo-img">
                          </div>
                          <div class="sp-h-0-1">
                            <p class="rt-font-h2 sp-t-0-3 sp-b-0-2">
                              1 <span class="rt-font-h4">бонус</span>
                            </p>
                            <p class="color-main05">
                              1 бонус за каждые 100 рублей покупки
                            </p>
                          </div>
                        </div>
                        <div class="rt-card-round-arrow d-flex flex-start-center sp-t-1 sp-h-0-1">
                          <span class="rt-card-round-arrow__text">Обменять</span>
                          <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg"
                               class="rt-card-round-arrow-icon">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M13.1827 7.74924L8.97105 11.939L10.029 13.0024L15.5289 7.53097C15.6704 7.39021 15.75 7.19886 15.75 6.99927C15.75 6.79968 15.6704 6.60832 15.5289 6.46756L10.0289 0.996093L8.97105 2.05951L13.1826 6.24924L2.29622e-07 6.24924L2.95189e-07 7.74924L13.1827 7.74924Z"
                                  fill="#101828"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </rt-carousel-slide-v3>
            </rt-filter-n-item>
            <rt-filter-n-item filter-name="nakoplenie" :filter-tags="['cheki']">
              <rt-carousel-slide-v3 class="rt-col-3 rt-col-td-3 rt-col-md-2">
                <a href="https://lk.rt.ru/#bonus" target="_blank"
                   class="spasibo-card">
                  <div class="rt-card-round">
                    <div class="rt-card-round-white">
                      <div class="rt-card-round-img-container">
                        <img src="//rt-static.rt.ru/sites/default/files/img/spasibo/profmax_446x232.jpg"
                             class=" rt-card-round-img">
                      </div>
                      <div class="rt-card-round__content sp-b-1 sp-h-0-3 sp-t-1 rt-card-round__content-s d-flex flex-column">
                        <div class="flex-fill">
                          <div class="rt-card-round__logo">
                            <img src="//rt-static.rt.ru/sites/default/files/img/spasibo/profmax_logo_44px.jpg"
                                 class=" rt-card-round__logo-img">
                          </div>
                          <div class="sp-h-0-1">
                            <p class="rt-font-h2 sp-t-0-3 sp-b-0-2">
                              3 <span class="rt-font-h4">бонуса</span>
                            </p>
                            <p class="color-main05">
                              3 бонуса за каждые 100 рублей покупки
                            </p>
                          </div>
                        </div>
                        <div class="rt-card-round-arrow d-flex flex-start-center sp-t-1 sp-h-0-1">
                          <span class="rt-card-round-arrow__text">Обменять</span>
                          <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg"
                               class="rt-card-round-arrow-icon">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M13.1827 7.74924L8.97105 11.939L10.029 13.0024L15.5289 7.53097C15.6704 7.39021 15.75 7.19886 15.75 6.99927C15.75 6.79968 15.6704 6.60832 15.5289 6.46756L10.0289 0.996093L8.97105 2.05951L13.1826 6.24924L2.29622e-07 6.24924L2.95189e-07 7.74924L13.1827 7.74924Z"
                                  fill="#101828"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </rt-carousel-slide-v3>
            </rt-filter-n-item>
            <rt-filter-n-item filter-name="nakoplenie" :filter-tags="['pokupki']">
              <rt-carousel-slide-v3 class="rt-col-3 rt-col-td-3 rt-col-md-2">
                <a href="https://lk.rt.ru/#bonus" target="_blank"
                   class="spasibo-card">
                  <div class="rt-card-round">
                    <div class="rt-card-round-white">
                      <div class="rt-card-round-img-container">
                        <img src="//rt-static.rt.ru/sites/default/files/img/spasibo/sportmaster_446x232.jpg"
                             class=" rt-card-round-img">
                      </div>
                      <div class="rt-card-round__content sp-b-1 sp-h-0-3 sp-t-1 rt-card-round__content-s d-flex flex-column">
                        <div class="flex-fill">
                          <div class="rt-card-round__logo">
                            <img src="//rt-static.rt.ru/sites/default/files/b2c/bonus/oct/nike-logo_44px.png"
                                 class=" rt-card-round__logo-img">
                          </div>
                          <div class="sp-h-0-1">
                            <p class="rt-font-h2 sp-t-0-3 sp-b-0-2">
                              2 <span class="rt-font-h4">бонуса</span>
                            </p>
                            <p class="color-main05">
                              2 бонуса за каждые 100 рублей покупки
                            </p>
                          </div>
                        </div>
                        <div class="rt-card-round-arrow d-flex flex-start-center sp-t-1 sp-h-0-1">
                          <span class="rt-card-round-arrow__text">Обменять</span>
                          <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg"
                               class="rt-card-round-arrow-icon">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M13.1827 7.74924L8.97105 11.939L10.029 13.0024L15.5289 7.53097C15.6704 7.39021 15.75 7.19886 15.75 6.99927C15.75 6.79968 15.6704 6.60832 15.5289 6.46756L10.0289 0.996093L8.97105 2.05951L13.1826 6.24924L2.29622e-07 6.24924L2.95189e-07 7.74924L13.1827 7.74924Z"
                                  fill="#101828"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </rt-carousel-slide-v3>
            </rt-filter-n-item>
            <rt-filter-n-item filter-name="nakoplenie" :filter-tags="['pokupki']">
              <rt-carousel-slide-v3 class="rt-col-3 rt-col-td-3 rt-col-md-2">
                <a href="https://lk.rt.ru/#bonus" target="_blank"
                   class="spasibo-card">
                  <div class="rt-card-round">
                    <div class="rt-card-round-white">
                      <div class="rt-card-round-img-container">
                        <img src="//rt-static.rt.ru/sites/default/files/img/spasibo/aliexpreess_446x232.jpg"
                             class=" rt-card-round-img">
                      </div>
                      <div class="rt-card-round__content sp-b-1 sp-h-0-3 sp-t-1 rt-card-round__content-s d-flex flex-column">
                        <div class="flex-fill">
                          <div class="rt-card-round__logo">
                            <img src="//rt-static.rt.ru/sites/default/files/img/spasibo/aliexpress_logo_44px.jpg"
                                 class=" rt-card-round__logo-img">
                          </div>
                          <div class="sp-h-0-1">
                            <p class="rt-font-h2 sp-t-0-3 sp-b-0-2">
                              1 <span class="rt-font-h4">бонус</span>
                            </p>
                            <p class="color-main05">
                              1 бонус за каждые 100 рублей покупки
                            </p>
                          </div>
                        </div>
                        <div class="rt-card-round-arrow d-flex flex-start-center sp-t-1 sp-h-0-1">
                          <span class="rt-card-round-arrow__text">Обменять</span>
                          <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg"
                               class="rt-card-round-arrow-icon">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M13.1827 7.74924L8.97105 11.939L10.029 13.0024L15.5289 7.53097C15.6704 7.39021 15.75 7.19886 15.75 6.99927C15.75 6.79968 15.6704 6.60832 15.5289 6.46756L10.0289 0.996093L8.97105 2.05951L13.1826 6.24924L2.29622e-07 6.24924L2.95189e-07 7.74924L13.1827 7.74924Z"
                                  fill="#101828"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </rt-carousel-slide-v3>
            </rt-filter-n-item>
            <rt-filter-n-item filter-name="nakoplenie" :filter-tags="['pokupki']">
              <rt-carousel-slide-v3 class="rt-col-3 rt-col-td-3 rt-col-md-2">
                <a href="https://lk.rt.ru/#bonus" target="_blank"
                   class="spasibo-card">
                  <div class="rt-card-round">
                    <div class="rt-card-round-white">
                      <div class="rt-card-round-img-container">
                        <img src="//rt-static.rt.ru/sites/default/files/img/spasibo/mvideo_446x232.jpg"
                             class=" rt-card-round-img">
                      </div>
                      <div class="rt-card-round__content sp-b-1 sp-h-0-3 sp-t-1 rt-card-round__content-s d-flex flex-column">
                        <div class="flex-fill">
                          <div class="rt-card-round__logo">
                            <img src="//rt-static.rt.ru/sites/default/files/b2c/bonus/oct/mvideo-logo_44px.png"
                                 class=" rt-card-round__logo-img">
                          </div>
                          <div class="sp-h-0-1">
                            <p class="rt-font-h2 sp-t-0-3 sp-b-0-2">
                              1 <span class="rt-font-h4">бонус</span>
                            </p>
                            <p class="color-main05">
                              1 бонус за каждые 100 рублей покупки
                            </p>
                          </div>
                        </div>
                        <div class="rt-card-round-arrow d-flex flex-start-center sp-t-1 sp-h-0-1">
                          <span class="rt-card-round-arrow__text">Обменять</span>
                          <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg"
                               class="rt-card-round-arrow-icon">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M13.1827 7.74924L8.97105 11.939L10.029 13.0024L15.5289 7.53097C15.6704 7.39021 15.75 7.19886 15.75 6.99927C15.75 6.79968 15.6704 6.60832 15.5289 6.46756L10.0289 0.996093L8.97105 2.05951L13.1826 6.24924L2.29622e-07 6.24924L2.95189e-07 7.74924L13.1827 7.74924Z"
                                  fill="#101828"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </rt-carousel-slide-v3>
            </rt-filter-n-item>
            <rt-filter-n-item filter-name="nakoplenie" :filter-tags="['pokupki']">
              <rt-carousel-slide-v3 class="rt-col-3 rt-col-td-3 rt-col-md-2">
                <a href="https://lk.rt.ru/#bonus" target="_blank"
                   class="spasibo-card">
                  <div class="rt-card-round">
                    <div class="rt-card-round-white">
                      <div class="rt-card-round-img-container">
                        <img src="//rt-static.rt.ru/sites/default/files/img/spasibo/litres_446x232.jpg"
                             class=" rt-card-round-img">
                      </div>
                      <div class="rt-card-round__content sp-b-1 sp-h-0-3 sp-t-1 rt-card-round__content-s d-flex flex-column">
                        <div class="flex-fill">
                          <div class="rt-card-round__logo">
                            <img src="//rt-static.rt.ru/sites/default/files/img/spasibo/litres_logo_44px.jpg"
                                 class=" rt-card-round__logo-img">
                          </div>
                          <div class="sp-h-0-1">
                            <p class="rt-font-h2 sp-t-0-3 sp-b-0-2">5 <span class="rt-font-h4">бонусов</span></p>
                            <p class="color-main05">
                              5 бонусов за каждые 100 рублей покупки
                            </p>
                          </div>
                        </div>
                        <div class="rt-card-round-arrow d-flex flex-start-center sp-t-1 sp-h-0-1">
                          <span class="rt-card-round-arrow__text">Обменять</span>
                          <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg"
                               class="rt-card-round-arrow-icon">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M13.1827 7.74924L8.97105 11.939L10.029 13.0024L15.5289 7.53097C15.6704 7.39021 15.75 7.19886 15.75 6.99927C15.75 6.79968 15.6704 6.60832 15.5289 6.46756L10.0289 0.996093L8.97105 2.05951L13.1826 6.24924L2.29622e-07 6.24924L2.95189e-07 7.74924L13.1827 7.74924Z"
                                  fill="#101828"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </rt-carousel-slide-v3>
            </rt-filter-n-item>
            <rt-filter-n-item filter-name="nakoplenie" :filter-tags="['pokupki']">
              <rt-carousel-slide-v3 class="rt-col-3 rt-col-td-3 rt-col-md-2">
                <a href="https://lk.rt.ru/#bonus" target="_blank"
                   class="spasibo-card">
                  <div class="rt-card-round">
                    <div class="rt-card-round-white">
                      <div class="rt-card-round-img-container">
                        <img src="//rt-static.rt.ru/sites/default/files/img/spasibo/letual_446x232.jpg"
                             class=" rt-card-round-img">
                      </div>
                      <div class="rt-card-round__content sp-b-1 sp-h-0-3 sp-t-1 rt-card-round__content-s d-flex flex-column">
                        <div class="flex-fill">
                          <div class="rt-card-round__logo">
                            <img src="//rt-static.rt.ru/sites/default/files/img/spasibo/letual_logo_44px.jpg"
                                 class=" rt-card-round__logo-img">
                          </div>
                          <div class="sp-h-0-1">
                            <p class="rt-font-h2 sp-t-0-3 sp-b-0-2">
                              3 <span class="rt-font-h4">бонуса</span>
                            </p>
                            <p class="color-main05">
                              3 бонуса за каждые 100 рублей покупки
                            </p>
                          </div>
                        </div>
                        <div class="rt-card-round-arrow d-flex flex-start-center sp-t-1 sp-h-0-1">
                          <span class="rt-card-round-arrow__text">Обменять</span>
                          <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg"
                               class="rt-card-round-arrow-icon">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M13.1827 7.74924L8.97105 11.939L10.029 13.0024L15.5289 7.53097C15.6704 7.39021 15.75 7.19886 15.75 6.99927C15.75 6.79968 15.6704 6.60832 15.5289 6.46756L10.0289 0.996093L8.97105 2.05951L13.1826 6.24924L2.29622e-07 6.24924L2.95189e-07 7.74924L13.1827 7.74924Z"
                                  fill="#101828"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </rt-carousel-slide-v3>
            </rt-filter-n-item>
            <rt-filter-n-item filter-name="nakoplenie" :filter-tags="['pokupki']">
              <rt-carousel-slide-v3 class="rt-col-3 rt-col-td-3 rt-col-md-2">
                <a href="https://lk.rt.ru/#bonus" target="_blank"
                   class="spasibo-card">
                  <div class="rt-card-round">
                    <div class="rt-card-round-white">
                      <div class="rt-card-round-img-container">
                        <img src="//rt-static.rt.ru/sites/default/files/img/spasibo/Lamoda_446%D1%85232.jpg"
                             class=" rt-card-round-img">
                      </div>
                      <div class="rt-card-round__content sp-b-1 sp-h-0-3 sp-t-1 rt-card-round__content-s d-flex flex-column">
                        <div class="flex-fill">
                          <div class="rt-card-round__logo">
                            <img src="//rt-static.rt.ru/sites/default/files/img/spasibo/Lamoda_44px.png"
                                 class=" rt-card-round__logo-img">
                          </div>
                          <div class="sp-h-0-1">
                            <p class="rt-font-h2 sp-t-0-3 sp-b-0-2">
                              3 <span class="rt-font-h4">бонуса</span>
                            </p>
                            <p class="color-main05">
                              3 бонуса за каждые 100 рублей покупки
                            </p>
                          </div>
                        </div>
                        <div class="rt-card-round-arrow d-flex flex-start-center sp-t-1 sp-h-0-1">
                          <span class="rt-card-round-arrow__text">Обменять</span>
                          <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg"
                               class="rt-card-round-arrow-icon">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M13.1827 7.74924L8.97105 11.939L10.029 13.0024L15.5289 7.53097C15.6704 7.39021 15.75 7.19886 15.75 6.99927C15.75 6.79968 15.6704 6.60832 15.5289 6.46756L10.0289 0.996093L8.97105 2.05951L13.1826 6.24924L2.29622e-07 6.24924L2.95189e-07 7.74924L13.1827 7.74924Z"
                                  fill="#101828"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </rt-carousel-slide-v3>
            </rt-filter-n-item>
            <rt-filter-n-item filter-name="nakoplenie" :filter-tags="['pokupki','cheki','rostelecom']">
              <rt-carousel-slide-v3 class="rt-col-3 rt-col-td-3 rt-col-md-2">
                <a href="https://lk.rt.ru/#bonus" target="_blank"
                   class="spasibo-card">
                  <div class="rt-card-round">
                    <div class="rt-card-round-white">
                      <div class="rt-card-round-img-container"></div>
                      <div class="rt-card-round__content sp-b-1 sp-h-0-3 sp-t-1 rt-card-round__content-s d-flex flex-column">
                        <div class="flex-fill">
                          <div class="sp-h-0-1">
                            <p class="rt-font-h4 sp-t-0-3">
                              Получите больше впечатлений от Ростелекома и
                              партнеров
                            </p>
                          </div>
                        </div>
                        <div class="rt-card-round-arrow d-flex flex-start-center sp-t-1 sp-h-0-1">
                          <span class="rt-card-round-arrow__text">Обменять</span>
                          <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg"
                               class="rt-card-round-arrow-icon">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M13.1827 7.74924L8.97105 11.939L10.029 13.0024L15.5289 7.53097C15.6704 7.39021 15.75 7.19886 15.75 6.99927C15.75 6.79968 15.6704 6.60832 15.5289 6.46756L10.0289 0.996093L8.97105 2.05951L13.1826 6.24924L2.29622e-07 6.24924L2.95189e-07 7.74924L13.1827 7.74924Z"
                                  fill="#101828"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </rt-carousel-slide-v3>
            </rt-filter-n-item>
            <rt-resize-content-height :query-selectors-names="['.spasibo-card .rt-card-round__content','.rt-card-round-img-container']">
              <rt-carousel deep-slide-load="2" decorated="true">
                <rt-col size="12">
                  <rt-filter-n has-carousel="true" carousel-up="2" custom-class="row row-nowrap" filter-name="nakoplenie">
                  </rt-filter-n>
                </rt-col>
              </rt-carousel>
            </rt-resize-content-height>

            <div class="sp-t-2">
              <div class="md-color-block--white">
                <div class="rt-container sp-t-2 td-sp-t-3 md-sp-t-2">
                  <rt-col>
                    <rt-row>
                      <rt-col size="12">
                        <div class="color-block--white sp-t-2-4 sp-l-2-3 sp-b-2-2 md-sp-l-none md-sp-b-none">
                          <div class="d-flex flex-start-bottom md-d-block">
                            <div class="md-sp-b-2-1">
                              <p class="rt-font-h2 sp-b-1-1">Как стать участником</p>
                              <p>
                                1. Ознакомьтесь с <a href="//rt-static.rt.ru/sites/default/files/doc/Bonus_Programm_28.07.2021.pdf"
                                                     class="rt-link" target="_blank">правилами участия в программе «Бонус»</a>
                              </p>
                              <p class="sp-t-0-4">
                                2. Авторизуйтесь в личном кабинете и перейдите в раздел
                                «программа
                                «Бонус»»
                              </p>
                              <p class="sp-t-0-4">
                                3. Подтвердите свое участие в программе «Бонус», нажав
                                кнопку
                                «Подключить»
                              </p>
                              <div class="d-flex sp-t-1-2 md-sp-t-1-3 md-d-block">
                                <div class="d-flex md-d-none">
                                  <a href="https://lk.rt.ru/#bonus" target="_blank"
                                     class="rt-button rt-button-with-ripple rt-button-orange ">
                                    <div class="ripple" style="pointer-events: none;">
                                      Стать
                                      участником
                                    </div>
                                  </a>
                                </div>
                                <div class="d-none md-d-block">
                                  <a href="https://lk.rt.ru/#bonus" target="_blank"
                                     class="rt-button-md--is-block rt-button rt-button-with-ripple rt-button-orange ">
                                    <div class="ripple" style="pointer-events: none;">
                                      Стать
                                      участником
                                    </div>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div class="sp-l-2-1 td-sp-l-0-1 md-sp-l-0 td-sp-r-5-4 md-sp-r-0 spasibo-phone-image">
                              <img width="252" src="https://rt-static.rt.ru/sites/default/files/img/spasibo/iphonex.png"
                                   class="td-d-none"> <img width="187"
                                                           src="https://rt-static.rt.ru/sites/default/files/img/spasibo/iPhoneX-td.png"
                                                           class="td-d-block d-none md-d-none"> <img width="187"
                                                                                                     src="https://rt-static.rt.ru/sites/default/files/img/spasibo/iPhoneX-md.png"
                                                                                                     class="md-d-block d-none">
                            </div>
                          </div>
                        </div>
                      </rt-col>
                    </rt-row>
                  </rt-col>
                </div>
                <div class="rt-container sp-t-4 td-sp-t-3 md-sp-t-2 sp-b-4">
                  <rt-col>
                    <p class="rt-font-h2">Вопросы и ответы</p>
                    <rt-annotation class="sp-t-1 sp-b-1" label="Почему накопленные до 1 февраля 2021 года бонусы были аннулированы?">
                      <rt-template slot="content">
                        <p class="rt-font-small-paragraph color-main07">
                          С 1 февраля 2021 года в программе «Бонус» изменилась система начисления и списания бонусов. Были существенно расширены возможности по накоплению и теперь их можно менять на подарки по новому курсу – 1 бонус равен 1 рублю.
                        </p>
                        <p class="rt-font-small-paragraph color-main07">
                          Для того, чтобы у участников программы появилась возможность накапливать и использовать бонусы в новой системе расчетов, возникла необходимость начать начисление заново.
                        </p>
                        <p class="rt-font-small-paragraph color-main07">
                          Всем участникам программы на электронный почтовый ящик были направлены уведомления о том, что накопленные бонусы необходимо обменять на подарки до 25 января 2021 года. Также информация была размещена в личных кабинетах, на сайте программы и счетах на оплату.
                        </p>
                      </rt-template>
                    </rt-annotation>
                    <rt-annotation class="sp-t-1 sp-b-1" label="Когда мне будут начислены бонусы?">
                      <rt-template slot="content">
                        <p class="rt-font-small-paragraph color-main07">
                          Все бонусы начисляются в течение 24
                          часов с момента
                          поступления
                          денежных средств на лицевой счет Ростелекома
                        </p>
                      </rt-template>
                    </rt-annotation>
                    <rt-annotation class="sp-t-1 sp-b-1" label="C какого числа начинает действовать вознаграждение?">
                      <rt-template slot="content">
                        <ul class="rt-ordered-list">
                          <li class="rt-font-small-paragraph color-main07">
                            • Фильмы и сериалы — с момента оформления заказа на ТВ-приставке
                          </li>
                          <li class="rt-font-small-paragraph color-main07">
                            • Скидка 25% на абонентскую плату услуги «Домашний интернет» предоставляется на следующий расчётный
                            период при любой системе оплаты, т.е. с 1-го числа месяца, следующего за месяцем подачи заявки на
                            скидку. Исключения – г. Санкт-Петербург, Архангельская, Астраханская, Волгоградская, Вологодская,
                            Калининградская, Ленинградская, Мурманская, Новгородская, Псковская и Ростовская области, Ненецкий
                            АО, Краснодарский и Ставропольский края, Республики: Адыгея, Дагестан, Ингушетия,
                            Кабардино-Балкария, Калмыкия, Карачаево-Черкесия, Карелия, Коми, Северная Осетия и Чечня.<br>
                            В обозначенных регионах скидка предоставляется:<br>
                            – при кредитной системе оплаты – с момента подключения данной скидки<br>
                            – при авансовой системе оплаты – на следующий расчётный период
                          </li>
                          <li class="rt-font-small-paragraph color-main07">
                            • Пакеты минут на звонки с Домашнего телефона — с 1-го числа месяца, следующего за месяцем подачи
                            заявки. Пакет минут «Местная связь» не применяется для тарифного плана «Безлимитный»
                          </li>
                          <li class="rt-font-small-paragraph color-main07">
                            • Подписка на антивирус действует 2 календарных месяца с момента оплаты опции бонусами. Например, вы
                            заказали антивирус 7 октября и получили его в тот же день. Активировали (скачали и установили) 15
                            октября. В этом случае бесплатная подписка на антивирус будет длиться до 7 декабря включительно. В
                            случае, если до окончания действия вознаграждения, оплаченного бонусами, со стороны абонента не
                            будет заявки на отключение опции «Дополнительные пакеты телеканалов, «Подписки», «Управление
                            просмотром», «Антивирусы», после окончания действия вознаграждения произойдет автоматическая
                            пролонгация опции на платной основе согласно действующим тарифам
                          </li>
                        </ul>
                      </rt-template>
                    </rt-annotation>
                    <rt-annotation class="sp-t-1 sp-b-1" label="Сколько времени действует подарок, заказанный за бонусы?">
                      <rt-template slot="content">
                        <p class="rt-font-small-paragraph color-main07">
                          Фильмы и сериалы из видеопроката —
                          период просмотра
                          заказанного фильма составляет 48 часов.
                        </p>
                        <p class="rt-font-small-paragraph color-main07">
                          Скидка 25% на абонентскую плату за
                          интернет действует
                          один календарный месяц.
                        </p>
                        <p class="rt-font-small-paragraph color-main07">
                          Антивирусы. Бесплатный период длится два месяца с момента заказа подарка. Например,
                          вы заказали
                          антивирус 7
                          октября 2015 года и получили его в тот же день. Активировали (скачали и установили)
                          15 октября. В этом
                          случае
                          бесплатная подписка на антивирус будет длиться до 7 декабря 2015 г.
                        </p>
                        <p class="rt-font-small-paragraph color-main07">
                          Минуты разговоров по внутризоновой, междугородней и международной связи действуют
                          один календарный
                          месяц с
                          момента получения. Пакет минут на один тип связи
                          (местной/внутризоновой/междугородной) может быть
                          куплен за
                          бонусы один раз в календарный месяц.
                        </p>
                      </rt-template>
                    </rt-annotation>
                    <rt-annotation class="sp-t-1 sp-b-1"
                                   label="Переходят ли неиспользованные бонусы или бонусные минуты на следующий месяц?">
                      <rt-template slot="content">
                        <p class="rt-font-small-paragraph color-main07">
                          Бонусы действительны с момента их начисления в течение 24 месяцев в случае обмена на
                          бонусные
                          подарки. По
                          истечении указанного срока бонусы аннулируются. Если с момента последнего
                          использования бонусов прошло
                          более
                          18 месяцев, накопленные на бонусном балансе бонусы аннулируются. Аннулированные
                          бонусы не подлежат
                          восстановлению и дальнейшее их использование невозможно.
                        </p>
                        <p class="rt-font-small-paragraph color-main07">
                          Неиспользованные в рамках бонусного
                          пакета минуты не
                          переносятся на следующий календарный месяц.
                        </p>
                      </rt-template>
                    </rt-annotation>
                    <rt-annotation class="sp-t-1 sp-b-1"
                                   label="Что происходит с бонусным подарком в случае добровольной блокировки и/или при смене тарифа?">
                      <rt-template slot="content">
                        <p class="rt-font-small-paragraph color-main07">
                          В случае финансовой или добровольной блокировки услуги после активации бонусного
                          подарка (пакеты
                          минут, скидки на интернет), срок его действия не переносится и не продлевается.
                          Заказанные бонусные
                          подарки не переходят на новый тариф в случае его смены.
                        </p>
                      </rt-template>
                    </rt-annotation>
                    <rt-annotation class="sp-t-1 sp-b-1"
                                   label="Если оказание услуг связи приостановлено по финансовой причине или по инициативе абонента, можно ли обменять бонусы на подарки?">
                      <rt-template slot="content">
                        <p class="rt-font-small-paragraph color-main07">
                          Нет, обменять бонусы на подарки, если
                          оказание услуг
                          связи приостановлено по
                          финансовой причине или по инициативе абонента, невозможно.
                        </p>
                      </rt-template>
                    </rt-annotation>
                    <rt-annotation class="sp-t-1 sp-b-1"
                                   label="Что происходит с бонусным счетом при отказе от заказанного подарка?">
                      <rt-template slot="content">
                        <p class="rt-font-small-paragraph color-main07">
                          Отказ от подарка возможен только в том
                          случае, если он
                          не был использован (не
                          выговорил минуты, не установил антивирус, не посмотрел фильм), но в этом случае уже
                          потраченные
                          бонусы вернуть нельзя.
                        </p>
                      </rt-template>
                    </rt-annotation>
                    <rt-annotation class="sp-t-1 sp-b-1" label="Можно ли оплачивать бонусами антивирус несколько раз подряд?">
                      <rt-template slot="content">
                        <p class="rt-font-small-paragraph color-main07">
                          Оплата подписки на антивирус бонусами возможна только один раз для каждого типа
                          антивируса. Если ранее была активна подписка на данный антивирус, то оплатить этот
                          антивирус бонусами
                          не представляется возможным, даже если подписка на этот антивирус
                          уже отключена.
                        </p>
                        <p class="rt-font-small-paragraph color-main07">
                          При заказе за бонусы антивирус будет доступен в течение 60 календарных дней с
                          момента
                          приобретения, после чего произойдёт автоматическая пролонгация подписки на
                          платной основе по
                          действующим тарифам.
                        </p>
                      </rt-template>
                    </rt-annotation>
                    <rt-annotation class="sp-t-1 sp-b-1" label="Какой срок действия начисленных бонусов?">
                      <rt-template slot="content">
                        <p class="rt-font-small-paragraph color-main07">
                          Бонусы действительны в течение 24-х
                          месяцев с момента их начисления. Если за это время участник программы лояльности не
                          обменял бонусы на подарки, то они сгорают
                        </p>
                      </rt-template>
                    </rt-annotation>
                  </rt-col>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div class="row sp-b-2">
            <pre-code text="<div class='rt-col-7 rt-col-td-6'>
              <rt-annotation :scroll-timeout='1000' :v2='true'>
                <template slot='label'>Что такое ОС Аврора?</template>
                <template slot='content'>
                  <p class='rt-font-small-paragraph'>ОС Аврора — первая и пока единственная российская операционная система,
                  которая позволяет удаленно контролировать процесс обработки данных на мобильных устройствах.</p>
                </template>
              </rt-annotation>
              <rt-annotation :scroll-timeout='1000' :v2='true'>
                <template slot='label'>Как происходит управление мобильными устройствами?</template>
                <template slot='content'>
                  <p class='rt-font-small-paragraph'>ОС Аврора — первая и пока единственная российская операционная система,
                    которая позволяет удаленно контролировать процесс обработки данных на мобильных устройствах.</p>
                </template>
              </rt-annotation>
              <rt-annotation :scroll-timeout='1000' :v2='true'>
                <template slot='label'>В чем преимущества работы операционной системы «Аврора» и почему важно
                  формирование доверенной мобильной среды в крупной компании?</template>
                <template slot='content'>
                  <p class='rt-font-small-paragraph'>У операционной системы «Аврора» есть ряд преимуществ, которые
                  позволяют использовать мобильные устройства как мобильное рабочее место. При этом обеспечить
                  зашифрованный доступ к информационным системам, поддержку работы в системе электронного
                  документооборота и корпоративном облаке с использованием электронной подписи. Основные преимущества ОС Аврора:</p>
                  <ul class='rt-numeric-list sp-v-1'>
                    <li class='rt-numeric-list__item'>
                      <p class='rt-font-small-paragraph sp-b-1'>Полная защищенность устройств.</p>
                      <p class='rt-font-small-paragraph'>Все мобильные устройства и конфиденциальная информация
                        надёжно защищены от вторжения посторонних лиц в корпоративные системы, информационную среду и
                        базы данных.</p>
                    </li>
                    <li class='rt-numeric-list__item'>
                      <p class='rt-font-small-paragraph sp-b-1'>Сертификация операционной системы «Аврора».</p>
                      <p class='rt-font-small-paragraph'>ОС Аврора внесена в единый реестр отечественного программного
                        обеспечения (№ 1543) ─ Сертификат ФСБ России АК1/КС1 и АК2/КС2, Сертификат ФСТЭК на платформу
                        управления и Сертификат ФСТЭК А4. Решение соответствует политике импортозамещения.</p>
                      <p class='rt-font-small-paragraph'>Набор сертификатов позволяет использовать ОС Аврора во всех
                        информационных системах, обрабатывающих конфиденциальную информацию с высокими требованиями
                        по защите информации. К ним относятся государственные информационные системы, обрабатывающие
                        персональные данные, а также особую категорию медицинских данных.</p>
                      <p class='rt-font-small-paragraph'>Соответствие требованиям уровням доверия ФСТЭК России означает
                        выполнение со стороны разработчика всех специализированных процедур анализа, тестирования,
                        документирования, а также проработку вопросов поддержки и обновления ПО.</p>
                    </li>
                    <li class='rt-numeric-list__item'>
                      <p class='rt-font-small-paragraph'>Стандартное мобильное место сотрудника.</p>
                      <ul class='rt-ordered-list sp-t-1'>
                        <li class='rt-ordered-list__item rt-font-small-paragraph'>Защищенный доступ с мобильных устройств к ИС и БД</li>
                        <li class='rt-ordered-list__item rt-font-small-paragraph'>Централизованное управление и администрирование устройств</li>
                        <li class='rt-ordered-list__item rt-font-small-paragraph'>Удалённая работа с конфиденциальной информацией</li>
                      </ul>
                    </li>
                  </ul>
                </template>
              </rt-annotation>
            </div>"
            />
          <div class="rt-col-5"/>
        </div>
        <rt-annotation label="Примечание2" class="rt-space-top rt-space-bottom">
          <template slot="content">
            <div class="rt-numeric-list">
              <p
                class="rt-annotation-item rt-numeric-list__item"
              >
                Услуги Высокоскоростного интернета предоставляются при наличии
                технической возможности.
              </p>
              <p
                class="rt-annotation-item rt-numeric-list__item"
              >
                Цены указаны в рублях с учетом НДС.
              </p>
              <p class="rt-annotation-item">
                «По оптической линии» — предоставление доступа к сети Интернет
                осуществляется по технологии FTTx (англ., fiber to the x —
                оптическое волокно до точки X) или по технологии PON (англ.
                Passive Optical Networks — пассивная оптическая сеть до
                абонента).
              </p>
              <p class="rt-annotation-item">
                «По телефонной линии» — предоставление доступа к сети Интернет
                осуществляется по технологии xDSL (англ., digital subscriber
                line, цифровая абонентская линия).
              </p>
              <p
                class="rt-annotation-item rt-numeric-list__item"
              >
                Предоставление доступа к сети Интернет осуществляется по
                технологии xDSL (англ., digital subscriber line, цифровая
                абонентская линия).
              </p>
              <p
                class="rt-annotation-item rt-numeric-list__item"
              >
                Скорость доступа к сети Интернет зависит не только от
                технических особенностей Услуги, но и от действий третьих сил,
                организаций и лиц, управляющих сегментами сети Интернет (или
                оказывающих на них влияние), не принадлежащих ПАО «Ростелеком».
                Скорость доступа к сети Интернет является величиной
                неопределенной и зависит от ряда параметров, в том числе,
                технических характеристик подключения, маршрута и текущей
                загрузки каналов, характеристиками установленного абонентского
                оборудования (ПК, смартфон, WiFi-роутер), версией программного
                обеспечения или используемого стандарта, месторасположением
                запрашиваемого контента. Все параметры являются переменными и не
                гарантируются ПАО «Ростелеком» за пределами своей сети.
                Указанная в тарифном плане скорость является максимально
                возможной.
              </p>
              <p
                class="rt-annotation-item rt-numeric-list__item"
              >
                Абонентская плата за услугу Интернет списывается с лицевого
                счета абонента один раз в месяц. В первый месяц пользования
                услугой Интернет с лицевого счета абонента списывается
                абонентская плата, рассчитанная пропорционально количеству дней
                от даты начала оказания услуги до конца месяца.
              </p>
              <p
                class="rt-annotation-item rt-numeric-list__item"
              >
                Оборудование (маршрутизатор или абонентский модем в зависимости
                от технологии предоставления услуги), необходимое для получения
                услуг, может быть приобретено отдельно по действующим тарифам.
                Стоимость оборудования уточняйте по телефону 8-800-100-0-800.
              </p>
              <p
                class="rt-annotation-item rt-numeric-list__item"
              >
                Safe Kids — Сэйф кидс (перевод с англ. — Защищенные дети).
                Услуга предоставляется на территории Российской Федерации для
                абонентов-физических лиц при наличии технической возможности.
                При первом подключении услуги на условиях ежемесячной подписки
                первые 30 календарных дней с момента активации услуги
                предоставляются без взимания абонентской платы, далее согласно
                Базовым тарифам. При первом подключении услуги на условиях
                годовой подписки абонент пользуется услугой 14 месяцев (420
                календарных дней) с момента активации, два последних месяца
                предоставляются без взимания абонентской платы. При прологнации
                услуги или повторных подключениях на условиях годовой подписки
                период пользования составляет 360 календарных дней. Подробности
                об услуге, ПАО «Ростелеком» узнавайте по бесплатному номеру
                8-800-100-0-800, а также на сайте www.rt.ru.
              </p>
            </div>
          </template>
        </rt-annotation>
        <rt-annotation label="Примечание3" class="rt-space-top rt-space-bottom">
          <template slot="content">
            <div class="rt-numeric-list">
              <p
                class="rt-annotation-item rt-numeric-list__item"
              >
                Услуги Высокоскоростного интернета предоставляются при наличии
                технической возможности.
              </p>
              <p
                class="rt-annotation-item rt-numeric-list__item"
              >
                Цены указаны в рублях с учетом НДС.
              </p>
              <p class="rt-annotation-item">
                «По оптической линии» — предоставление доступа к сети Интернет
                осуществляется по технологии FTTx (англ., fiber to the x —
                оптическое волокно до точки X) или по технологии PON (англ.
                Passive Optical Networks — пассивная оптическая сеть до
                абонента).
              </p>
              <p class="rt-annotation-item">
                «По телефонной линии» — предоставление доступа к сети Интернет
                осуществляется по технологии xDSL (англ., digital subscriber
                line, цифровая абонентская линия).
              </p>
              <p
                class="rt-annotation-item rt-numeric-list__item"
              >
                Предоставление доступа к сети Интернет осуществляется по
                технологии xDSL (англ., digital subscriber line, цифровая
                абонентская линия).
              </p>
              <p
                class="rt-annotation-item rt-numeric-list__item"
              >
                Скорость доступа к сети Интернет зависит не только от
                технических особенностей Услуги, но и от действий третьих сил,
                организаций и лиц, управляющих сегментами сети Интернет (или
                оказывающих на них влияние), не принадлежащих ПАО «Ростелеком».
                Скорость доступа к сети Интернет является величиной
                неопределенной и зависит от ряда параметров, в том числе,
                технических характеристик подключения, маршрута и текущей
                загрузки каналов, характеристиками установленного абонентского
                оборудования (ПК, смартфон, WiFi-роутер), версией программного
                обеспечения или используемого стандарта, месторасположением
                запрашиваемого контента. Все параметры являются переменными и не
                гарантируются ПАО «Ростелеком» за пределами своей сети.
                Указанная в тарифном плане скорость является максимально
                возможной.
              </p>
              <p
                class="rt-annotation-item rt-numeric-list__item"
              >
                Абонентская плата за услугу Интернет списывается с лицевого
                счета абонента один раз в месяц. В первый месяц пользования
                услугой Интернет с лицевого счета абонента списывается
                абонентская плата, рассчитанная пропорционально количеству дней
                от даты начала оказания услуги до конца месяца.
              </p>
              <p
                class="rt-annotation-item rt-numeric-list__item"
              >
                Оборудование (маршрутизатор или абонентский модем в зависимости
                от технологии предоставления услуги), необходимое для получения
                услуг, может быть приобретено отдельно по действующим тарифам.
                Стоимость оборудования уточняйте по телефону 8-800-100-0-800.
              </p>
              <p
                class="rt-annotation-item rt-numeric-list__item"
              >
                Safe Kids — Сэйф кидс (перевод с англ. — Защищенные дети).
                Услуга предоставляется на территории Российской Федерации для
                абонентов-физических лиц при наличии технической возможности.
                При первом подключении услуги на условиях ежемесячной подписки
                первые 30 календарных дней с момента активации услуги
                предоставляются без взимания абонентской платы, далее согласно
                Базовым тарифам. При первом подключении услуги на условиях
                годовой подписки абонент пользуется услугой 14 месяцев (420
                календарных дней) с момента активации, два последних месяца
                предоставляются без взимания абонентской платы. При прологнации
                услуги или повторных подключениях на условиях годовой подписки
                период пользования составляет 360 календарных дней. Подробности
                об услуге, ПАО «Ростелеком» узнавайте по бесплатному номеру
                8-800-100-0-800, а также на сайте www.rt.ru.
              </p>
            </div>
          </template>
        </rt-annotation>

        <documentation-builder :json="documentation" type="components" />
      </div>
    </div>
  </div>
</template>

<script>
// const componentsList = {};
import documentation from "@vue-rt-style-kit-atoms-local/components/Annotation/docs/index.json";
import componentsList from "../../componentsList";

export default {
  name: "AppButtons",
  components: componentsList,
  data: () => ({
    documentation: {}
  }),
  mounted() {
    this.documentation = documentation;
  },
  created() {},
  methods: {}
};
</script>

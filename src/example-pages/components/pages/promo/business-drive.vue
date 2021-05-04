<template>
  <div class="bd-new">
    <div class="bd-new__header sp-v-2 td-sp-v-1-3 md-sp-v-1-1">
      <div class="rt-container">
        <div class="rt-col">
          <div class="row">
            <div class="rt-col-12 d-flex d-space-between">
              <div class="bd-new__logo">
                <svg viewBox="0 0 100 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.117676 0H14.0338V3.28047H3.84171V7.49822H8.46734C12.505 7.49822 15.445 9.72426 15.445 13.5905C15.445 17.4568 12.5442 19.7609 8.46734 19.7609H0.117676V0ZM8.19294 16.4414C10.5842 16.4414 11.721 15.387 11.721 13.6296C11.721 11.8722 10.6234 10.8177 8.19294 10.8177H3.84171V16.4805H8.19294V16.4414Z" fill="#ffffff"/>
                  <path d="M19.0908 5.77991H22.5012V15.0355L28.6165 5.77991H32.3013V19.8H28.8909V10.5444L22.7756 19.761H19.0908V5.77991Z" fill="#ffffff"/>
                  <path d="M47.8637 15.6994C47.8637 18.355 45.6685 20.1515 41.7093 20.1515C38.0636 20.1515 36.1428 18.1988 36.1428 15.6213C36.1428 14.9574 36.2996 14.2935 36.4956 13.942L39.5141 14.9183C39.4357 15.1136 39.3573 15.3479 39.3573 15.6213C39.3573 16.7929 40.5333 17.4177 41.7485 17.4177C43.4733 17.4177 44.4533 16.6367 44.4533 15.5822C44.4533 14.5278 43.5125 13.903 41.9445 13.903H40.7685V11.0911H41.8269C43.3557 11.0911 44.0221 10.4663 44.0221 9.56804C44.0221 8.70887 43.3949 8.16212 42.0621 8.16212C40.6509 8.16212 39.7493 8.70887 39.7493 9.37277C39.7493 9.60709 39.7885 9.72425 39.8277 9.88047L36.8092 10.8959C36.6524 10.4272 36.5348 10.0367 36.5348 9.48993C36.5348 7.2639 38.534 5.38934 42.1013 5.38934C45.7469 5.38934 47.3541 6.99053 47.3541 9.13846C47.3541 10.8177 46.4133 11.8331 44.9629 12.3799C46.6485 12.8485 47.8637 13.942 47.8637 15.6994Z" fill="#ffffff"/>
                  <path d="M51.5093 5.77991H55.0765V11.013H60.9174V5.77991H64.4846V19.8H60.9174V14.0983H55.0765V19.761H51.5093V5.77991Z" fill="#ffffff"/>
                  <path d="M75.304 17.1053C77.1856 17.1053 78.0088 16.2852 78.8712 15.1917L81.6936 16.5976C80.2824 18.9799 78.3224 20.1515 75.2256 20.1515C71.3055 20.1515 68.0127 17.1834 68.0127 12.7704C68.0127 8.35739 71.3447 5.38934 75.4216 5.38934C79.4592 5.38934 82.2816 8.27928 82.2816 12.3799V13.6296H71.4623C71.6583 15.7775 73.1871 17.1053 75.304 17.1053ZM71.5015 10.8959H78.9496C78.5968 9.13846 77.264 8.08402 75.304 8.08402C73.4223 8.08402 72.0111 9.33372 71.5015 10.8959Z" fill="#ffffff"/>
                  <path d="M92.3952 20.1515C88.24 20.1515 84.9863 17.2225 84.9863 12.7704C84.9863 8.31834 88.3968 5.38934 92.3952 5.38934C95.4528 5.38934 97.6872 6.71715 98.7064 8.90414L95.6488 10.6615C94.7864 9.33372 93.6496 8.74792 92.3952 8.74792C90.3176 8.74792 88.6712 10.3491 88.6712 12.8095C88.6712 15.3089 90.2784 16.871 92.3952 16.871C94.1592 16.871 95.0608 16.0118 95.9232 14.8402L98.8632 16.4414C97.4128 18.8237 95.3744 20.1515 92.3952 20.1515Z" fill="#ffffff"/>
                  <path d="M0 57.0178H1.56801C2.15602 55.9633 2.62642 54.6746 2.74402 52.1361L3.09682 46.2391H14.1121V57.0178H16.2289V63.5006H13.0145V60.2201H3.21443V63.5006H0V57.0178ZM10.5449 57.0178V49.4414H6.07605L5.91925 52.2533C5.76245 54.8698 5.52724 55.9633 4.93924 57.0178H10.5449Z" fill="#ffffff"/>
                  <path d="M23.1673 46.239V48.2308C24.1081 46.8639 25.9113 45.8485 28.0282 45.8485C31.5562 45.8485 34.4962 48.5822 34.4962 53.2296C34.4962 57.7207 31.4778 60.6106 27.7146 60.6106C25.7153 60.6106 24.1865 59.7515 23.1673 58.5018V66H19.6001V46.239H23.1673ZM22.9321 53.2296C22.9321 55.5337 24.6177 57.2911 26.8914 57.2911C29.2042 57.2911 30.8506 55.4947 30.8506 53.2296C30.8506 50.9254 29.165 49.168 26.8914 49.168C24.6177 49.168 22.9321 50.9645 22.9321 53.2296Z" fill="#ffffff"/>
                  <path d="M46.7659 57.9941C45.7859 59.7515 44.0611 60.6106 42.0618 60.6106C39.2786 60.6106 37.3186 58.8923 37.3186 56.2367C37.3186 53.3858 39.4746 52.097 42.3362 51.7065L46.5699 51.1207V50.4177C46.5699 49.0509 45.7075 48.3089 43.9435 48.3089C42.3754 48.3089 41.4738 49.0118 41.4738 49.91C41.4738 50.0272 41.4738 50.1834 41.513 50.3006L38.1418 50.6521C38.1026 50.4177 38.1026 50.1053 38.1026 49.91C38.1026 47.7231 40.2978 45.8094 43.9827 45.8094C47.9027 45.8094 50.1763 47.4887 50.1763 50.8864V56.7444C50.1763 58.2674 50.3331 59.2438 50.6467 60.2201H47.1187C46.8835 59.6734 46.7659 58.9313 46.7659 57.9941ZM46.5699 53.8544V53.581L43.1595 54.0497C41.6306 54.284 40.8074 54.8308 40.8074 56.0414C40.8074 57.174 41.709 57.7207 42.8066 57.7207C44.8843 57.7598 46.5699 56.5491 46.5699 53.8544Z" fill="#ffffff"/>
                  <path d="M54.3315 46.239H57.742V55.4556L63.8572 46.2H67.5421V60.2201H64.1316V51.0035L58.0164 60.2201H54.3315V46.239ZM57.7028 41.7479H59.8588C59.8588 42.4118 60.2508 42.9586 60.9564 42.9586C61.6228 42.9586 62.0148 42.4118 62.0148 41.7479H64.1708C64.1708 43.5834 62.8772 44.9503 60.9564 44.9503C59.0356 44.9503 57.7028 43.5834 57.7028 41.7479Z" fill="#ffffff"/>
                  <path d="M71.8149 46.2391H78.3614C81.5366 46.2391 83.2614 47.7622 83.2614 49.7148C83.2614 51.3551 82.4382 52.2142 81.1838 52.8391C82.6734 53.2687 83.8102 54.3231 83.8102 56.1586C83.8102 58.619 81.615 60.2592 78.7142 60.2592H71.8541V46.2391H71.8149ZM78.0478 51.5894C79.3022 51.5894 79.8902 51.2379 79.8902 50.2616C79.8902 49.2852 79.3022 48.9337 78.0478 48.9337H75.343V51.5894H78.0478ZM78.2046 57.5255C79.6942 57.5255 80.243 56.8616 80.243 55.8852C80.243 54.9089 79.6942 54.284 78.2046 54.284H75.343V57.4864H78.2046V57.5255Z" fill="#ffffff"/>
                  <path d="M99.3728 25.8142C98.8632 25.4237 98.1184 25.5018 97.3736 25.5018C92.8656 25.658 88.3968 25.7361 83.9279 25.7361C80.7527 25.7361 77.5775 26.0095 74.4022 26.0095C66.9934 26.0095 59.6237 26.4391 52.2541 26.5172C45.6292 26.5562 38.9652 26.7906 32.3011 26.7906C27.9891 26.7906 23.7162 26.361 19.4042 26.5562C15.7586 26.2438 12.113 26.4781 8.46733 26.5953C6.31132 26.6734 4.0769 26.4 1.96008 26.7906C0.509671 27.103 0.31367 27.8059 0.27447 28.548C0.235269 29.2119 0.470471 29.9148 0.27447 30.5787C-0.274335 32.5314 0.31367 34.484 0.156869 36.3977C0.117668 36.7101 0.0392677 37.0225 0.117668 37.3349C0.31367 38.4284 0.784073 38.5846 2.97929 38.3113C3.13609 38.3113 3.29289 38.2722 3.48889 38.2722C11.4858 37.8817 19.4434 37.7255 27.4403 37.9598C33.2419 38.116 39.0044 38.2332 44.806 37.9598C48.4516 37.8036 52.0973 37.6864 55.7429 37.5693C62.0541 37.3349 68.4046 37.4521 74.7159 36.7101C78.9103 36.2414 83.3007 36.0462 87.6127 35.8119C89.6512 35.6947 91.6112 35.3823 93.532 34.9527C93.9632 34.9527 94.6688 34.8746 94.6296 34.7574C94.4728 33.9764 96.0016 34.0545 96.4328 33.5858C98.432 32.9219 99.3728 31.9846 99.2552 30.6959C99.216 30.2663 99.608 29.7977 99.6864 29.329C99.9608 28.1965 100.353 26.9468 99.3728 25.8142Z" fill="#FF4F12"/>
                </svg>
              </div>
              <div class="bd-new__mobile-menu__wrapper d-none td-d-block" @click="toggleMenu">
                <div class="bd-new__mobile-menu"/>
              </div>
              <div class="bd-new__header__items-wrapper color-white td-flex-center-center">
                <div class="flex-center-center td-flex-column">
                  <a v-rt-scroll-to-on-click='{"scrollToId": "about"}' @click="toggleMenu"
                     class="bd-new__header__item rt-font-paragraph">О Бизнес драйв</a>
                  <a v-rt-scroll-to-on-click='{"scrollToId": "experts"}' @click="toggleMenu"
                     class="bd-new__header__item rt-font-paragraph">Наши Бизнес-эксперты</a>
                  <a v-rt-scroll-to-on-click='{"scrollToId": "program"}' @click="toggleMenu"
                     class="bd-new__header__item rt-font-paragraph">Программа</a>
                  <a v-rt-scroll-to-on-click='{"scrollToId": "form"}' @click="toggleMenu"
                     class="bd-new__header__item rt-font-paragraph">Принять участие</a>
                  <a v-rt-scroll-to-on-click='{"scrollToId": "faq"}' @click="toggleMenu"
                     class="bd-new__header__item rt-font-paragraph">Часто задаваемые вопросы</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bd-new__greetings-screen">
      <div class="rt-container">
        <div class="rt-col z9">
          <div class="row">
            <div class="rt-col-2 td-d-none"/>
            <div class="rt-col-8 pos-rel h100 rt-col-td-6 flex-center-center td-d-block td-sp-t-5 md-sp-t-3">
              <div class="td-sp-t-5"/>
              <div class="bd-new__greetings-screen__center-content">
                <h1 class="bd-new__custom-h1 color-white sp-b-1 td-sp-b-2 md-sp-b-1-2">
                  <span class="d-inline-block pos-rel">
                    <span>Бизнес драйв</span>
                    <div class="bd-new__custom-h1__decoration">
                      <svg viewBox="0 0 557 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M555.216 5.0471C552.985 4.19956 548.675 4.14305 544.636 4.03005C519.586 3.35201 494.507 2.70223 469.487 1.9677C451.703 1.43092 433.707 1.51567 415.922 1.0919C374.263 0.103103 332.424 0.300863 290.705 0.0466005C253.146 -0.122908 215.527 0.216109 177.937 0.329114C153.672 0.413869 129.285 -0.179411 105.08 0.498623C84.2205 0.159606 63.964 0.950645 43.6773 1.54392C31.6198 1.88294 18.9594 1.65693 7.56509 2.70223C-0.211989 3.43677 -0.422996 4.82109 0.240166 6.23366C0.873184 7.53322 2.80238 8.83278 2.50094 10.1323C1.62678 13.8898 6.8115 17.5625 8.04739 21.2917C8.25839 21.8849 8.07753 22.5065 8.74069 23.0997C10.9713 25.1338 13.4431 25.3598 24.8676 24.5971C25.7417 24.5688 26.6159 24.5123 27.4901 24.4841C69.631 22.7607 112.284 21.8849 155.601 22.0262C186.8 22.1392 218.028 22.2522 249.197 21.9132C268.851 21.6872 288.595 21.6307 308.309 21.6024C342.492 21.5459 376.524 22.3087 410.948 21.7154C433.707 21.3199 457.52 21.6589 480.852 21.9414C491.884 22.0827 502.585 21.8002 513.256 21.3764C515.517 21.4612 519.436 21.4612 519.436 21.2069C519.375 19.7096 527.604 20.1333 530.408 19.3423C541.832 18.4665 548.102 16.9127 549.007 14.4831C549.338 13.6355 552.081 12.8445 553.016 11.9969C555.518 9.70858 559.255 7.44847 555.216 5.0471Z" fill="#FA6C3B"/>
                      </svg>
                    </div>
                  </span>
                </h1>
                <p class="bd-new__custom-paragraph color-white">Интенсив для Предпринимателей - 8 часов полезного контента<br>
                  Мастер-классы от Бизнес–практиков по развитию бизнеса</p>
                <div class="sp-t-2-1 td-sp-t-2 md-sp-t-1-3">
                  <rt-button color="orange" :bright="true" class="rt-button-md--is-block">
                    <span class="d-block md-d-none">Бесплатно зарегистрироваться</span>
                    <span class="d-none md-d-block">Зарегистрироваться</span>
                  </rt-button>
                </div>
              </div>
            </div>
            <div class="rt-col-2 td-d-none"/>
          </div>
          <div class="row">
            <div class="rt-col-1 td-d-none"/>
            <div class="rt-col-10 rt-col-td-6 pos-rel">
              <div class="bd-new__greetings-screen__bottom-content flex-center-center d-md-flex-column">
                <div class="d-inline-flex flex-center-center text-with-icon">
                  <span><rt-system-icons color="white" name="object"/></span>
                  <h3 class="rt-font-h3 color-white d-inline-block sp-l-0-3">10 июня 2021</h3>
                </div>
                <div class="d-inline-flex flex-center-center text-with-icon">
                  <rt-system-icons color="white" name="pin"/>
                  <h3 class="rt-font-h3 color-white d-inline-block sp-l-0-3">Санкт-Петербург</h3>
                </div>
                <div class="d-inline-flex flex-center-center text-with-icon">
                  <rt-system-icons color="white" name="home"/>
                  <h3 class="rt-font-h3 color-white d-inline-block sp-l-0-3">БКЗ «Октябрьский»</h3>
                </div>
              </div>
            </div>
            <div class="rt-col-1 td-d-none"/>
          </div>
        </div>
      </div>
      <video src="https://moscow.rt.ru/sites/default/files/b2b/BD/BD_New.mp4" class="bd-new__video" muted autoplay loop playsinline/>
      <div class="bd-new__video__shade"></div>
    </div>
    <div id="about"/>
    <div class="bd-new__section sp-t-5 td-sp-t-4 md-sp-t-3">
      <div class="rt-container net-1">
        <div class="rt-col">
          <div class="row">
            <div class="rt-col-2 td-d-none"/>
            <div class="rt-col-8 rt-col-td-6">
              <h2 class="rt-font-h1 sp-b-2-4 rt-font-center">О конференции</h2>
              <div class="bd-new__important-digits d-flex d-space-between sp-b-1-4 d-md-flex-column">
                <div class="bd-new__important-digits__item rt-font-center md-sp-b-1">
                  <div class="cropped-digit rt-font-real-bold flex-center-center">10</div>
                  <div class="cropper-text rt-font-h4 rt-font-bold">спикеров</div>
                </div>
                <div class="bd-new__important-digits__item rt-font-center md-sp-b-1">
                  <div class="cropped-digit rt-font-real-bold flex-center-center">
                    <span class="fake-mask">3000</span>
                  </div>
                  <div class="cropper-text rt-font-h4 rt-font-bold">участников форума</div>
                </div>
                <div class="bd-new__important-digits__item rt-font-center md-sp-b-1">
                  <div class="cropped-digit rt-font-real-bold flex-center-center">8</div>
                  <div class="cropper-text rt-font-h4 rt-font-bold">часов контента</div>
                </div>
              </div>
            </div>
            <div class="rt-col-2 td-d-none"/>
          </div>
          <div class="row">
            <div class="rt-col-1 td-d-none"/>
            <div class="rt-col-5 rt-col-td-5 rt-col-md-3 td-sp-b-2 md-sp-b-1-3">
              <h4 class="rt-col-h4 sp-b-0-1">На Бизнес драйв вы:</h4>
              <ul class="bd-new__custom-list rt-font-paragraph">
                <li class="bd-new__custom-list__item">
                  <span class="pos-rel decorated-2">Найдете</span>
                  новых клиентов и партнеров по бизнесу</li>
                <li class="bd-new__custom-list__item">
                  <span class="pos-rel decorated-3">Получите</span>
                  знания и новый импульс развития вашего дела</li>
                <li class="bd-new__custom-list__item">
                  <span class="pos-rel decorated-4">Узнаете</span>
                  о технологиях и инструментах решения бизнес-задач</li>
                <li class="bd-new__custom-list__item">
                  <span class="pos-rel decorated-5">Познакомитесь</span>
                  с реальными кейсами и опытом бизнес-экспертов</li>
              </ul>
            </div>
            <div class="rt-col-1 rt-col-td-1 md-d-none"/>
            <div class="rt-col-4 rt-col-td-5 rt-col-md-3">
              <h4 class="rt-font-h4 sp-b-1">
                <span class="pos-rel decorated-1">Лучшие Бизнес-эксперты России</span>
              </h4>
              <p class="rt-font-paragraph">поделятся своим опытом, современными инструментами и&nbsp;технологиями
                создания и&nbsp;развития успешного, здорового, растущего бизнеса</p>
            </div>
            <div class="rt-col-1 rt-col-td-1 md-d-none"/>
          </div>
        </div>
      </div>
    </div>
    <div class="bd-new__section sp-t-5 td-sp-t-4 md-sp-t-3">
      <div class="rt-container">
        <div class="rt-col">
          <div class="row">
            <div class="rt-col-12">
              <h3 class="rt-font-h1 rt-font-center sp-b-3">Как это было</h3>
            </div>
          </div>
        </div>
      </div>
      <div class="bd-new__carousel-wrapper">
        <rt-carousel-v2>
          <rt-carousel-slide-v2>
            <div class="bd-new__carousel-video" data-source="nttl5WzwkWA" @click="playVideo">
              <img src="https://moscow.rt.ru/sites/default/files/b2b/BD/Kaliningrad.png" class="bd-new__carousel-video__poster"/>
              <div class="bd-new__carousel-video__play-button">
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 48V16L46 32L22 48Z" fill="white"/>
                  <circle cx="32" cy="32" r="31" stroke="white" stroke-width="2"/>
                </svg>
              </div>
              <p class="bd-new__carousel-video__title rt-font-h4 color-white">2019: Калининград</p>
            </div>
          </rt-carousel-slide-v2>
          <rt-carousel-slide-v2>
            <div class="bd-new__carousel-video" data-source="reazA9X9A-0" @click="playVideo">
              <img src="https://moscow.rt.ru/sites/default/files/b2b/BD/Krasnodar.png" class="bd-new__carousel-video__poster"/>
              <div class="bd-new__carousel-video__play-button">
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 48V16L46 32L22 48Z" fill="white"/>
                  <circle cx="32" cy="32" r="31" stroke="white" stroke-width="2"/>
                </svg>
              </div>
              <p class="bd-new__carousel-video__title rt-font-h4 color-white">2019: Краснодар</p>
            </div>
          </rt-carousel-slide-v2>
          <rt-carousel-slide-v2>
            <div class="bd-new__carousel-video" data-source="mp7_fL0Xx0E" @click="playVideo">
              <img src="https://moscow.rt.ru/sites/default/files/b2b/BD/Krasnoyarsk.png" class="bd-new__carousel-video__poster"/>
              <div class="bd-new__carousel-video__play-button">
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 48V16L46 32L22 48Z" fill="white"/>
                  <circle cx="32" cy="32" r="31" stroke="white" stroke-width="2"/>
                </svg>
              </div>
              <p class="bd-new__carousel-video__title rt-font-h4 color-white">2019: Красноярск</p>
            </div>
          </rt-carousel-slide-v2>
          <rt-carousel-slide-v2>
            <div class="bd-new__carousel-video" data-source="uFpXCtVrYEw" @click="playVideo">
              <img src="https://moscow.rt.ru/sites/default/files/b2b/BD/Omsk.png" class="bd-new__carousel-video__poster"/>
              <div class="bd-new__carousel-video__play-button">
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 48V16L46 32L22 48Z" fill="white"/>
                  <circle cx="32" cy="32" r="31" stroke="white" stroke-width="2"/>
                </svg>
              </div>
              <p class="bd-new__carousel-video__title rt-font-h4 color-white">2019: Омске</p>
            </div>
          </rt-carousel-slide-v2>
          <rt-carousel-slide-v2>
            <div class="bd-new__carousel-video" data-source="6GF06h0xV2Q" @click="playVideo">
              <img src="https://moscow.rt.ru/sites/default/files/b2b/BD/Perm.png" class="bd-new__carousel-video__poster"/>
              <div class="bd-new__carousel-video__play-button">
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 48V16L46 32L22 48Z" fill="white"/>
                  <circle cx="32" cy="32" r="31" stroke="white" stroke-width="2"/>
                </svg>
              </div>
              <p class="bd-new__carousel-video__title rt-font-h4 color-white">2019: Пермь</p>
            </div>
          </rt-carousel-slide-v2>
          <rt-carousel-slide-v2>
            <div class="bd-new__carousel-video" data-source="nhkybn3piRo" @click="playVideo">
              <img src="https://moscow.rt.ru/sites/default/files/b2b/BD/Rostov.png" class="bd-new__carousel-video__poster"/>
              <div class="bd-new__carousel-video__play-button">
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 48V16L46 32L22 48Z" fill="white"/>
                  <circle cx="32" cy="32" r="31" stroke="white" stroke-width="2"/>
                </svg>
              </div>
              <p class="bd-new__carousel-video__title rt-font-h4 color-white">2019: Ростов-на-Дону</p>
            </div>
          </rt-carousel-slide-v2>
          <rt-carousel-slide-v2>
            <div class="bd-new__carousel-video" data-source="S25EfkSw3Uk" @click="playVideo">
              <img src="https://moscow.rt.ru/sites/default/files/b2b/BD/Samara.png" class="bd-new__carousel-video__poster"/>
              <div class="bd-new__carousel-video__play-button">
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 48V16L46 32L22 48Z" fill="white"/>
                  <circle cx="32" cy="32" r="31" stroke="white" stroke-width="2"/>
                </svg>
              </div>
              <p class="bd-new__carousel-video__title rt-font-h4 color-white">2019: Самара</p>
            </div>
          </rt-carousel-slide-v2>
          <rt-carousel-slide-v2>
            <div class="bd-new__carousel-video" data-source="ecBpgFH6ibg" @click="playVideo">
              <img src="https://moscow.rt.ru/sites/default/files/b2b/BD/Saint-Petersburg.png" class="bd-new__carousel-video__poster"/>
              <div class="bd-new__carousel-video__play-button">
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 48V16L46 32L22 48Z" fill="white"/>
                  <circle cx="32" cy="32" r="31" stroke="white" stroke-width="2"/>
                </svg>
              </div>
              <p class="bd-new__carousel-video__title rt-font-h4 color-white">2019: Санкт-Петербург</p>
            </div>
          </rt-carousel-slide-v2>
          <rt-carousel-slide-v2>
            <div class="bd-new__carousel-video" data-source="GJqPJ8879ME" @click="playVideo">
              <img src="https://moscow.rt.ru/sites/default/files/b2b/BD/Tyumen.png" class="bd-new__carousel-video__poster"/>
              <div class="bd-new__carousel-video__play-button">
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 48V16L46 32L22 48Z" fill="white"/>
                  <circle cx="32" cy="32" r="31" stroke="white" stroke-width="2"/>
                </svg>
              </div>
              <p class="bd-new__carousel-video__title rt-font-h4 color-white">2019: Тюмень</p>
            </div>
          </rt-carousel-slide-v2>
          <rt-carousel-slide-v2>
            <div class="bd-new__carousel-video" data-source="_Uz4olNVHls" @click="playVideo">
              <img src="https://moscow.rt.ru/sites/default/files/b2b/BD/Yaroslavl.png" class="bd-new__carousel-video__poster"/>
              <div class="bd-new__carousel-video__play-button">
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 48V16L46 32L22 48Z" fill="white"/>
                  <circle cx="32" cy="32" r="31" stroke="white" stroke-width="2"/>
                </svg>
              </div>
              <p class="bd-new__carousel-video__title rt-font-h4 color-white">2019: Ярославль</p>
            </div>
          </rt-carousel-slide-v2>
        </rt-carousel-v2>
        <div class="bd-new__carousel-wrapper__pseudo-arrows">
          <div class="rt-container">
            <div class="rt-col-12">
              <div class="rt-carousel-v2__arrow pseudo-arrow-left pseudo-arrow--hidden" @click="emitClickLeft">
                <rt-system-icons name="chevron left"></rt-system-icons>
              </div>
              <div class="rt-carousel-v2__arrow pseudo-arrow-right" @click="emitClickRight">
                <rt-system-icons name="chevron right"></rt-system-icons>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bd-new__video-player-wrapper">
        <div class="rt-container">
          <div class="rt-col-12">
            <div class="bd-new__video-player">
              <div class="bd-new__video-player-body"
                   id="bd-new__video-player-body"/>
              <div class="bd-new__video-player__close-button" @click="closeVideo">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" fill="#ffffff" opacity="0.8"
                        d="M10.9401 12.0006L4.99902 17.9417L6.05968 19.0024L12.0008 13.0612L17.9418 19.0024L19.0025 17.9417L13.0614 12.0006L19.0025 6.0595L17.9418 4.99884L12.0008 10.9399L6.0597 4.99884L4.99904 6.0595L10.9401 12.0006Z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="experts"/>
    <div class="bd-new__section sp-t-5 td-sp-t-4 md-sp-t-3">
      <div class="rt-container">
        <div class="rt-col">
          <div class="row">
            <div class="rt-col-12">
              <h2 class="rt-font-h1 sp-b-3 rt-font-center">Наши Бизнес-эксперты</h2>
            </div>
          </div>
          <div class="row bd-new__speakers-wrapper">
            <div class="rt-col-4 rt-col-td-3 rt-col-md-3 sp-b-1">
              <div class="bd-new__card" v-popup-trigger="{name:'speaker1'}">
                <div class="bd-new__card__top sp-t-2 sp-r-3 sp-b-1-3 sp-l-2 td-sp-v-1-3 td-sp-h-1-3 md-sp-h-1-1 md-sp-t-1-1 md-sp-b-1">
                  <div class="bd-new__card__logo">
                    <img src="https://moscow.rt.ru/sites/default/files/b2b/BD/active7.png" class="bd-new__card__logo__body">
                  </div>
                  <h3 class="bd-new__card__name rt-font-h3 rt-font-bold sp-t-1-3">Александра Радзинская</h3>
                  <p class="bd-new__card__name rt-font-paragraph sp-t-0-4">
                    Руководитель отдела логистики и чего-то еще в компании с длинным названием
                  </p>
                </div>
                <div class="bd-new__card__bottom flex-end-bottom">
                  <div class="bd-new__card__image-wrapper">
                    <img src="https://moscow.rt.ru/sites/default/files/b2b/BD/Ellipse150.png" class="d-flex bd-new__card__image-body"/>
                  </div>
                </div>
              </div>
            </div>
            <div class="rt-col-4 rt-col-td-3 rt-col-md-3 sp-b-1">
              <div class="bd-new__card" v-popup-trigger="{name:'speaker2'}">
                <div class="bd-new__card__top sp-t-2 sp-r-3 sp-b-1-3 sp-l-2 td-sp-v-1-3 td-sp-h-1-3 md-sp-h-1-1 md-sp-t-1-1 md-sp-b-1">
                  <div class="bd-new__card__logo">
                    <img src="https://moscow.rt.ru/sites/default/files/b2b/BD/active7.png" class="bd-new__card__logo__body">
                  </div>
                  <h3 class="bd-new__card__name rt-font-h3 rt-font-bold sp-t-1-3">Александра Радзинская</h3>
                  <p class="bd-new__card__name rt-font-paragraph sp-t-0-4">
                    Руководитель отдела логистики и чего-то еще в компании с длинным названием
                  </p>
                </div>
                <div class="bd-new__card__bottom flex-end-bottom">
                  <div class="bd-new__card__image-wrapper">
                    <img src="https://moscow.rt.ru/sites/default/files/b2b/BD/Ellipse150.png" class="d-flex bd-new__card__image-body"/>
                  </div>
                </div>
              </div>
            </div>
            <div class="rt-col-4 rt-col-td-3 rt-col-md-3 sp-b-1">
              <div class="bd-new__card" v-popup-trigger="{name:'speaker3'}">
                <div class="bd-new__card__top sp-t-2 sp-r-3 sp-b-1-3 sp-l-2 td-sp-v-1-3 td-sp-h-1-3 md-sp-h-1-1 md-sp-t-1-1 md-sp-b-1">
                  <div class="bd-new__card__logo">
                    <img src="https://moscow.rt.ru/sites/default/files/b2b/BD/active7.png" class="bd-new__card__logo__body">
                  </div>
                  <h3 class="bd-new__card__name rt-font-h3 rt-font-bold sp-t-1-3">Александра Радзинская</h3>
                  <p class="bd-new__card__name rt-font-paragraph sp-t-0-4">
                    Руководитель отдела логистики и чего-то еще в компании с длинным названием
                  </p>
                </div>
                <div class="bd-new__card__bottom flex-end-bottom">
                  <div class="bd-new__card__image-wrapper">
                    <img src="https://moscow.rt.ru/sites/default/files/b2b/BD/Ellipse150.png" class="d-flex bd-new__card__image-body"/>
                  </div>
                </div>
              </div>
            </div>
            <div class="rt-col-4 rt-col-td-3 rt-col-md-3 sp-b-1">
              <div class="bd-new__card" v-popup-trigger="{name:'speaker4'}">
                <div class="bd-new__card__top sp-t-2 sp-r-3 sp-b-1-3 sp-l-2 td-sp-v-1-3 td-sp-h-1-3 md-sp-h-1-1 md-sp-t-1-1 md-sp-b-1">
                  <div class="bd-new__card__logo">
                    <img src="https://moscow.rt.ru/sites/default/files/b2b/BD/active7.png" class="bd-new__card__logo__body">
                  </div>
                  <h3 class="bd-new__card__name rt-font-h3 rt-font-bold sp-t-1-3">Александра Радзинская</h3>
                  <p class="bd-new__card__name rt-font-paragraph sp-t-0-4">
                    Руководитель отдела логистики и чего-то еще в компании с длинным названием
                  </p>
                </div>
                <div class="bd-new__card__bottom flex-end-bottom">
                  <div class="bd-new__card__image-wrapper">
                    <img src="https://moscow.rt.ru/sites/default/files/b2b/BD/Ellipse150.png" class="d-flex bd-new__card__image-body"/>
                  </div>
                </div>
              </div>
            </div>
            <div class="rt-col-4 rt-col-td-3 rt-col-md-3 sp-b-1">
              <div class="bd-new__card" v-popup-trigger="{name:'speaker5'}">
                <div class="bd-new__card__top sp-t-2 sp-r-3 sp-b-1-3 sp-l-2 td-sp-v-1-3 td-sp-h-1-3 md-sp-h-1-1 md-sp-t-1-1 md-sp-b-1">
                  <div class="bd-new__card__logo">
                    <img src="https://moscow.rt.ru/sites/default/files/b2b/BD/active7.png" class="bd-new__card__logo__body">
                  </div>
                  <h3 class="bd-new__card__name rt-font-h3 rt-font-bold sp-t-1-3">Александра Радзинская</h3>
                  <p class="bd-new__card__name rt-font-paragraph sp-t-0-4">
                    Руководитель отдела логистики и чего-то еще в компании с длинным названием
                  </p>
                </div>
                <div class="bd-new__card__bottom flex-end-bottom">
                  <div class="bd-new__card__image-wrapper">
                    <img src="https://moscow.rt.ru/sites/default/files/b2b/BD/Ellipse150.png" class="d-flex bd-new__card__image-body"/>
                  </div>
                </div>
              </div>
            </div>
            <div class="rt-col-4 rt-col-td-3 rt-col-md-3 sp-b-1">
              <div class="bd-new__card" v-popup-trigger="{name:'speaker6'}">
                <div class="bd-new__card__top sp-t-2 sp-r-3 sp-b-1-3 sp-l-2 td-sp-v-1-3 td-sp-h-1-3 md-sp-h-1-1 md-sp-t-1-1 md-sp-b-1">
                  <div class="bd-new__card__logo">
                    <img src="https://moscow.rt.ru/sites/default/files/b2b/BD/active7.png" class="bd-new__card__logo__body">
                  </div>
                  <h3 class="bd-new__card__name rt-font-h3 rt-font-bold sp-t-1-3">Александра Радзинская</h3>
                  <p class="bd-new__card__name rt-font-paragraph sp-t-0-4">
                    Руководитель отдела логистики и чего-то еще в компании с длинным названием
                  </p>
                </div>
                <div class="bd-new__card__bottom flex-end-bottom">
                  <div class="bd-new__card__image-wrapper">
                    <img src="https://moscow.rt.ru/sites/default/files/b2b/BD/Ellipse150.png" class="d-flex bd-new__card__image-body"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="rt-col-md-3 d-none md-d-flex sp-t-0-1 flex-center-center">
              <rt-button class="rt-button-orange-border" @click="expandSpeakersList">
                <span class="button--inactive">Показать больше</span>
                <span class="button--active">Свернуть</span>
              </rt-button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="program"/>
    <div class="bd-new__section sp-t-4 sp-b-5 td-sp-t-3 td-sp-b-4 net-6">
      <div class="rt-container">
        <div class="rt-col">
          <div class="row">
            <div class="rt-col-12">
              <h2 class="rt-font-h1 sp-b-3 rt-font-center">Программа мероприятия</h2>
            </div>
          </div>
          <div class="row">
            <div class="rt-col-3 rt-col-td-1 md-d-none"/>
            <div class="rt-col-6 rt-col-td-4 rt-col-md-3 rt-font-center">
              <p class="rt-font-paragraph sp-b-1 td-sp-b-0-4 md-sp-b-0-3">У нас нет повторяющихся выступлений. Идем только вперед. Каждый раз
                вы услышите и увидите новое, а сейчас есть возможность получить предыдущие выступления в записи и
                прослушать их отдельно и лучше даже заранее, до начала конференции, чтобы подготовить вопросы.</p>
            </div>
            <div class="rt-col-3 rt-col-td-1 md-d-none"/>
          </div>
          <div class="row">
            <div class="rt-col-4 rt-col-td-1 md-d-none"/>
            <div class="rt-col-5 rt-col-td-5 rt-col-md-3">
              <div class="bd-new__timeline color-main07 net-7">
                <div class="bd-new__timeline__item bd-new__timeline__item--small row">
                  <div class="rt-col-persent-2 rt-col-md-1">
                    <div class="bd-new__timeline__time rt-font-bold">9:30</div>
                  </div>
                  <div class="rt-col-persent-8 rt-col-md-2">
                    <div class="bd-new__timeline__text">Сбор участников, регистраци</div>
                  </div>
                </div>
                <div class="bd-new__timeline__item bd-new__timeline__item--small row">
                  <div class="rt-col-persent-2 rt-col-md-1">
                    <div class="bd-new__timeline__time rt-font-bold">10:00</div>
                  </div>
                  <div class="rt-col-persent-8 rt-col-md-2">
                    <div class="bd-new__timeline__text">Открытие конференции</div>
                  </div>
                </div>
                <div class="bd-new__timeline__item bd-new__timeline__item--large row rt-font-h4">
                  <div class="rt-col-persent-2 rt-col-md-1">
                    <div class="bd-new__timeline__time rt-font-bold">10:15</div>
                  </div>
                  <div class="rt-col-persent-8 rt-col-md-2">
                    <div class="bd-new__timeline__text color-main">
                      <span class="pos-rel decorated-6">Техника</span>
                      знакомства и получения полезных для бизнеса контактов</div>
                    <div class="bd-new__timeline__name rt-font-small-paragraph">Анастасия Белочкина</div>
                  </div>
                </div>
                <div class="bd-new__timeline__item bd-new__timeline__item--large row rt-font-h4">
                  <div class="rt-col-persent-2 rt-col-md-1">
                    <div class="bd-new__timeline__time rt-font-bold">10:45</div>
                  </div>
                  <div class="rt-col-persent-8 rt-col-md-2">
                    <div class="bd-new__timeline__text color-main">
                      <span class="pos-rel decorated-7">Маркетинг</span>
                      для малого бизнеса: пошаговое планирование</div>
                    <div class="bd-new__timeline__name rt-font-small-paragraph">Анастасия Белочкина</div>
                  </div>
                </div>
                <div class="bd-new__timeline__item bd-new__timeline__item--small row">
                  <div class="rt-col-persent-2 rt-col-md-1">
                    <div class="bd-new__timeline__time rt-font-bold">12:15</div>
                  </div>
                  <div class="rt-col-persent-8 rt-col-md-2">
                    <div class="bd-new__timeline__text">Кофе-брейк</div>
                  </div>
                </div>
                <div class="bd-new__timeline__item bd-new__timeline__item--large row rt-font-h4">
                  <div class="rt-col-persent-2 rt-col-md-1">
                    <div class="bd-new__timeline__time rt-font-bold">12:30</div>
                  </div>
                  <div class="rt-col-persent-8 rt-col-md-2">
                    <div class="bd-new__timeline__text color-main">
                      <span class="pos-rel decorated-8">Эффективные</span>
                      продажи по телефону</div>
                    <div class="bd-new__timeline__name rt-font-small-paragraph">Анастасия Белочкина</div>
                  </div>
                </div>
                <div class="bd-new__timeline__item bd-new__timeline__item--small row">
                  <div class="rt-col-persent-2 rt-col-md-1">
                    <div class="bd-new__timeline__time rt-font-bold">13:30</div>
                  </div>
                  <div class="rt-col-persent-8 rt-col-md-2">
                    <div class="bd-new__timeline__text">Бизнес-ланч</div>
                  </div>
                </div>
                <div class="bd-new__timeline__item bd-new__timeline__item--large row rt-font-h4">
                  <div class="rt-col-persent-2 rt-col-md-1">
                    <div class="bd-new__timeline__time rt-font-bold">14:10</div>
                  </div>
                  <div class="rt-col-persent-8 rt-col-md-2">
                    <div class="bd-new__timeline__text color-main">
                      <span class="pos-rel decorated-9">Создание</span>
                      лучшего клиентского сервиса и продуктов</div>
                    <div class="bd-new__timeline__name rt-font-small-paragraph">Анастасия Белочкина</div>
                  </div>
                </div>
                <div class="bd-new__timeline__item bd-new__timeline__item--large row rt-font-h4">
                  <div class="rt-col-persent-2 rt-col-md-1">
                    <div class="bd-new__timeline__time rt-font-bold">15:30</div>
                  </div>
                  <div class="rt-col-persent-8 rt-col-md-2">
                    <div class="bd-new__timeline__text color-main">
                      <span class="pos-rel decorated-10">Как создать</span>
                      эффективную команду бизнеса, создающую прибыль</div>
                    <div class="bd-new__timeline__name rt-font-small-paragraph">Анастасия Белочкина</div>
                  </div>
                </div>
                <div class="bd-new__timeline__item bd-new__timeline__item--large row rt-font-h4">
                  <div class="rt-col-persent-2 rt-col-md-1">
                    <div class="bd-new__timeline__time rt-font-bold">17:00</div>
                  </div>
                  <div class="rt-col-persent-8 rt-col-md-2">
                    <div class="bd-new__timeline__text color-main">
                      <span class="pos-rel decorated-11">Подведение</span>
                      итогов, розыгрыш призов</div>
                  </div>
                </div>
                <div class="bd-new__timeline__item bd-new__timeline__item--small row">
                  <div class="rt-col-persent-2 rt-col-md-1">
                    <div class="bd-new__timeline__time rt-font-bold">17:30</div>
                  </div>
                  <div class="rt-col-persent-8 rt-col-md-2">
                    <div class="bd-new__timeline__text">Кофе-брейк, неформальное общение</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="rt-col-3 td-d-none"/>
          </div>
          <div class="row">
            <div class="rt-col-12 rt-font-center">
              <div class="sp-b-1-3 sp-t-1 td-sp-t-0-4 md-sp-t-0-3">
                <rt-button class="rt-button-orange-border" @click="toggleList">
                  <span class="button--inactive">Показать программу</span>
                  <span class="button--active">Свернуть</span>
                </rt-button>
              </div>
              <p class="rt-font-small-paragraph">
                Вы можете <span class="orange-text" id="feedbackForm">предложить</span> нам интересную тему
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="form"/>
    <div class="bd-new__section color-block--dark-blue sp-v-5 td-sp-t-4 form-wrapper pos-rel">
      <div class="form">
        <div class="rt-container net-2">
        </div>
      </div>
    </div>
    <div id="faq"/>
    <div class="bd-new__section sp-v-5 td-sp-v-4 spb-2">
      <div class="rt-container net-3">
        <div class="rt-col">
          <div class="row">
            <div class="rt-col-12">
              <h2 class="rt-font-h1 sp-b-2-2 rt-font-center">Часто задаваемые вопросы</h2>
            </div>
            <div class="rt-col-2 td-d-none"/>
            <div class="rt-col-8 rt-col-td-6">
              <rt-annotation :v2="true" label="Где и когда будет проходить конференция?">
                <template slot="content">ОС Аврора — первая и пока единственная российская операционная система,
                  которая позволяет удаленно контролировать процесс обработки данных на мобильных устройствах.</template>
              </rt-annotation>
              <rt-annotation :v2="true" label="Как долго будет длиться мероприятие?">
                <template slot="content">ОС Аврора — первая и пока единственная российская операционная система,
                  которая позволяет удаленно контролировать процесс обработки данных на мобильных устройствах.</template>
              </rt-annotation>
              <rt-annotation :v2="true" label="Могу ли я участвовать удаленно?">
                <template slot="content">ОС Аврора — первая и пока единственная российская операционная система,
                  которая позволяет удаленно контролировать процесс обработки данных на мобильных устройствах.</template>
              </rt-annotation>
              <rt-annotation :v2="true" label="Где посмотреть программу мероприятия?">
                <template slot="content">ОС Аврора — первая и пока единственная российская операционная система,
                  которая позволяет удаленно контролировать процесс обработки данных на мобильных устройствах.</template>
              </rt-annotation>
              <rt-annotation :v2="true" label="Я зарегистрировался, но мне еще не пришел билет участника, почему?">
                <template slot="content">ОС Аврора — первая и пока единственная российская операционная система,
                  которая позволяет удаленно контролировать процесс обработки данных на мобильных устройствах.</template>
              </rt-annotation>
            </div>
            <div class="rt-col-2 td-d-none"/>
          </div>
        </div>
      </div>
    </div>
    <div class="bd-new__section bd-new__map color-block--dark-blue">
      <div class="rt-container md-sp-v-1-3 net-5">
        <div class="rt-col-4 rt-col-td-3 rt-col-md-3">
          <div class="sp-t-2 sp-r-1-3 sp-b-5 sp-l-2 color-block--dark-blue d-inline-block color-white bd-new__map__address md-sp-v-none md-sp-h-none net-4">
            <h2 class="rt-font-h2">БКЗ<br>«Октябрьский»</h2>
            <p class="rt-font-small-paragraph sp-t-1">Санкт-Петербург,<br>Высотная улица, 1</p>
            <div class="sp-t-1">
              <a href="tel:+78126543210" class="rt-font-paragraph">+7 812 654-32-10</a>
            </div>
          </div>
        </div>
      </div>
<!--      <iframe width="1920" height="800" style="border:0;" allowfullscreen="" loading="lazy" class="bd-new__map-body"-->
<!--              @load="fixFrame"-->
<!--              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1998.6887034290464!2d30.362703079516415!3d59.93730751455316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x469631a296af2bad%3A0x380242b462f85f2e!2z0JHQmtCXICLQntC60YLRj9Cx0YDRjNGB0LrQuNC5Ig!5e0!3m2!1sru!2sru!4v1617474276001!5m2!1sru!2sru"></iframe>-->
      <iframe class="bd-new__map-body" width="100%" height="800" frameborder="0"
              src="https://yandex.ru/map-widget/v1/?um=constructor%3Ab7c28b30344155d328dc22d9c46c2eedf5c1bc251473282de5621dbf86ee11dd&amp;source=constructor"/>
    </div>
    <div class="bd-new__footer color-block--dark-blue sp-v-2">
      <div class="rt-container">
        <div class="rt-col">
          <div class="row">
            <div class="rt-col-6 flex-center-center rt-col-td-4 rt-col-md-3">
              <div class="bd-new__footer__left">
                <p class="rt-font-control color-white05">Продолжая использовать наш сайт, вы даете
                  <a href="#" class="color-white">согласие на обработку файлов Cookies</a> и других пользовательских
                  данных, в соответствии с&nbsp;<a href="#" class="color-white">Политикой конфиденциальности</a>.
                </p>
                <p class="rt-font-control color-white05 sp-t-0-3">© 2021 ПАО «Ростелеком». 18+</p>
              </div>
            </div>
            <div class="rt-col-6 flex-end-center rt-col-td-2 rt-col-md-3 md-sp-t-1">
              <div class="bd-new__footer__right">
                <div class="d-flex">
                  <a href="#" class="bd-new__social-link">
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.8029 35.6058C27.6352 35.6058 35.6058 27.6352 35.6058 17.8029C35.6058 7.97063 27.6352 0 17.8029 0C7.97063 0 0 7.97063 0 17.8029C0 27.6352 7.97063 35.6058 17.8029 35.6058Z" fill="white"/>
                      <path d="M17.3688 24.9306H18.7577C18.7577 24.9306 19.1771 24.8853 19.3916 24.6594C19.5888 24.4517 19.5824 24.0618 19.5824 24.0618C19.5824 24.0618 19.5552 22.2364 20.4201 21.9675C21.2729 21.7025 22.3678 23.7317 23.5282 24.512C24.4057 25.1023 25.0727 24.9731 25.0727 24.9731L28.1758 24.9305C28.1758 24.9305 29.7989 24.8323 29.0292 23.5822C28.9662 23.4802 28.5808 22.6575 26.7219 20.9673C24.7759 19.1983 25.0369 19.4845 27.3807 16.4245C28.8081 14.561 29.3786 13.4233 29.2003 12.9362C29.0304 12.472 27.9805 12.5946 27.9805 12.5946L24.4867 12.6157C24.4867 12.6157 24.2275 12.5811 24.0356 12.6937C23.8477 12.8037 23.7273 13.0608 23.7273 13.0608C23.7273 13.0608 23.1741 14.5029 22.4368 15.7292C20.881 18.3168 20.2589 18.4538 20.0045 18.2929C19.4129 17.9183 19.5607 16.7887 19.5607 15.9858C19.5607 13.478 19.9491 12.4324 18.8045 12.1616C18.4247 12.0719 18.145 12.0124 17.1737 12.0029C15.927 11.9905 14.872 12.0066 14.2745 12.2933C13.877 12.4839 13.5704 12.9087 13.7572 12.9333C13.9882 12.9633 14.511 13.0716 14.7882 13.441C15.1464 13.9183 15.1338 14.9896 15.1338 14.9896C15.1338 14.9896 15.3395 17.9417 14.6533 18.3084C14.1825 18.5599 13.5364 18.0464 12.1494 15.6987C11.4387 14.496 10.9022 13.1666 10.9022 13.1666C10.9022 13.1666 10.7988 12.9183 10.6143 12.7852C10.3905 12.6242 10.0776 12.5731 10.0776 12.5731L6.75733 12.5944C6.75733 12.5944 6.25893 12.6081 6.07593 12.8203C5.913 13.0093 6.06299 13.3997 6.06299 13.3997C6.06299 13.3997 8.66219 19.3564 11.6055 22.3583C14.3046 25.1112 17.3688 24.9306 17.3688 24.9306Z" fill="#273A64"/>
                    </svg>
                  </a>
                  <a href="#" class="bd-new__social-link">
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="36" height="36">
                        <path d="M17.6909 36C27.3848 36 35.2432 28.1416 35.2432 18.4478C35.2432 8.75392 27.3848 0.895508 17.6909 0.895508C7.99708 0.895508 0.138672 8.75392 0.138672 18.4478C0.138672 28.1416 7.99708 36 17.6909 36Z" fill="white"/>
                      </mask>
                      <g mask="url(#mask0)">
                        <path d="M17.6909 36C27.3848 36 35.2432 28.1416 35.2432 18.4478C35.2432 8.75392 27.3848 0.895508 17.6909 0.895508C7.99708 0.895508 0.138672 8.75392 0.138672 18.4478C0.138672 28.1416 7.99708 36 17.6909 36Z" fill="white"/>
                      </g>
                      <mask id="mask1" mask-type="alpha" maskUnits="userSpaceOnUse" x="13" y="6" width="15" height="30">
                        <path d="M22.6417 35.9998V22.7064H26.9379L27.5811 17.5257H22.6417V14.218C22.6417 12.7181 23.0427 11.6959 25.1137 11.6959L27.7551 11.6947V7.06105C27.2981 6.99803 25.7303 6.85693 23.9062 6.85693C20.0979 6.85693 17.4908 9.27123 17.4908 13.7051V17.5257H13.1837V22.7064H17.4908V35.9998H22.6417Z" fill="white"/>
                      </mask>
                      <g mask="url(#mask1)">
                        <path d="M22.6417 35.9998V22.7064H26.9379L27.5811 17.5257H22.6417V14.218C22.6417 12.7181 23.0427 11.6959 25.1137 11.6959L27.7551 11.6947V7.06105C27.2981 6.99803 25.7303 6.85693 23.9062 6.85693C20.0979 6.85693 17.4908 9.27123 17.4908 13.7051V17.5257H13.1837V22.7064H17.4908V35.9998H22.6417Z" fill="#273A64"/>
                      </g>
                    </svg>
                  </a>
                  <a href="#" class="bd-new__social-link">
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.8029 35.6058C27.6352 35.6058 35.6058 27.6352 35.6058 17.8029C35.6058 7.97063 27.6352 0 17.8029 0C7.97063 0 0 7.97063 0 17.8029C0 27.6352 7.97063 35.6058 17.8029 35.6058Z" fill="white"/>
                      <path d="M17.8029 35.6058C27.6352 35.6058 35.6058 27.6352 35.6058 17.8029C35.6058 7.97063 27.6352 0 17.8029 0C7.97063 0 0 7.97063 0 17.8029C0 27.6352 7.97063 35.6058 17.8029 35.6058Z" fill="white"/>
                      <path d="M14.1438 18.0001C14.1438 15.87 15.8702 14.1427 18.0005 14.1427C20.1307 14.1427 21.8581 15.87 21.8581 18.0001C21.8581 20.1303 20.1307 21.8576 18.0005 21.8576C15.8702 21.8576 14.1438 20.1303 14.1438 18.0001ZM12.0585 18.0001C12.0585 21.2818 14.7187 23.9419 18.0005 23.9419C21.2823 23.9419 23.9425 21.2818 23.9425 18.0001C23.9425 14.7185 21.2823 12.0584 18.0005 12.0584C14.7187 12.0584 12.0585 14.7185 12.0585 18.0001ZM22.7891 11.8228C22.789 12.0974 22.8703 12.3659 23.0228 12.5943C23.1753 12.8227 23.3921 13.0008 23.6458 13.106C23.8995 13.2112 24.1787 13.2388 24.4481 13.1853C24.7175 13.1318 24.965 12.9997 25.1593 12.8056C25.3535 12.6115 25.4859 12.3641 25.5396 12.0948C25.5933 11.8254 25.5659 11.5462 25.4609 11.2924C25.3559 11.0387 25.178 10.8217 24.9497 10.6691C24.7214 10.5164 24.4529 10.4348 24.1783 10.4347H24.1777C23.8096 10.4349 23.4566 10.5812 23.1962 10.8414C22.9359 11.1017 22.7894 11.4546 22.7891 11.8228ZM13.3254 27.419C12.1972 27.3676 11.584 27.1797 11.1765 27.0209C10.6362 26.8106 10.2507 26.5601 9.84544 26.1554C9.44015 25.7507 9.18927 25.3656 8.97987 24.8253C8.82101 24.418 8.63308 23.8046 8.58179 22.6765C8.52569 21.4568 8.51449 21.0904 8.51449 18.0002C8.51449 14.9101 8.52662 14.5447 8.58179 13.324C8.63317 12.1958 8.82249 11.5836 8.97987 11.1751C9.1902 10.6349 9.44071 10.2494 9.84544 9.84413C10.2502 9.43886 10.6353 9.18799 11.1765 8.97859C11.5838 8.81974 12.1972 8.63182 13.3254 8.58053C14.5452 8.52444 14.9116 8.51323 18.0005 8.51323C21.0893 8.51323 21.4561 8.52536 22.6769 8.58053C23.8051 8.63191 24.4173 8.82122 24.8259 8.97859C25.3661 9.18799 25.7516 9.43941 26.1569 9.84413C26.5622 10.2489 26.8122 10.6349 27.0225 11.1751C27.1813 11.5824 27.3693 12.1958 27.4206 13.324C27.4767 14.5447 27.4879 14.9101 27.4879 18.0002C27.4879 21.0904 27.4767 21.4557 27.4206 22.6765C27.3692 23.8046 27.1803 24.4178 27.0225 24.8253C26.8122 25.3656 26.5616 25.7511 26.1569 26.1554C25.7522 26.5598 25.3661 26.8106 24.8259 27.0209C24.4185 27.1798 23.8051 27.3677 22.6769 27.419C21.4571 27.4751 21.0907 27.4863 18.0005 27.4863C14.9102 27.4863 14.5448 27.4751 13.3254 27.419ZM13.2296 6.49879C11.9977 6.55489 11.1559 6.75021 10.4208 7.03626C9.65946 7.33165 9.01495 7.72795 8.37091 8.37095C7.72686 9.01395 7.33157 9.65945 7.03616 10.4208C6.7501 11.1563 6.55477 11.9976 6.49867 13.2295C6.44164 14.4633 6.42859 14.8577 6.42859 18.0001C6.42859 21.1426 6.44164 21.537 6.49867 22.7708C6.55477 24.0027 6.7501 24.8439 7.03616 25.5795C7.33157 26.3404 7.72696 26.9866 8.37091 27.6293C9.01486 28.2721 9.65946 28.6678 10.4208 28.964C11.1573 29.2501 11.9977 29.4454 13.2296 29.5015C14.4641 29.5576 14.8579 29.5716 18.0005 29.5716C21.143 29.5716 21.5375 29.5585 22.7713 29.5015C24.0033 29.4454 24.8446 29.2501 25.5802 28.964C26.341 28.6678 26.986 28.2723 27.6301 27.6293C28.2741 26.9863 28.6686 26.3404 28.9648 25.5795C29.2509 24.8439 29.4471 24.0027 29.5023 22.7708C29.5584 21.5361 29.5714 21.1426 29.5714 18.0001C29.5714 14.8577 29.5584 14.4633 29.5023 13.2295C29.4462 11.9975 29.2509 11.1559 28.9648 10.4208C28.6686 9.65992 28.2731 9.01497 27.6301 8.37095C26.987 7.72693 26.341 7.33165 25.5811 7.03626C24.8446 6.75021 24.0032 6.55396 22.7723 6.49879C21.5384 6.44269 21.144 6.42871 18.0014 6.42871C14.8589 6.42871 14.4641 6.44176 13.2296 6.49879Z" fill="#273A64"/>
                      <path d="M14.1438 18.0001C14.1438 15.87 15.8702 14.1427 18.0005 14.1427C20.1307 14.1427 21.8581 15.87 21.8581 18.0001C21.8581 20.1303 20.1307 21.8576 18.0005 21.8576C15.8702 21.8576 14.1438 20.1303 14.1438 18.0001ZM12.0585 18.0001C12.0585 21.2818 14.7187 23.9419 18.0005 23.9419C21.2823 23.9419 23.9425 21.2818 23.9425 18.0001C23.9425 14.7185 21.2823 12.0584 18.0005 12.0584C14.7187 12.0584 12.0585 14.7185 12.0585 18.0001ZM22.7891 11.8228C22.789 12.0974 22.8703 12.3659 23.0228 12.5943C23.1753 12.8227 23.3921 13.0008 23.6458 13.106C23.8995 13.2112 24.1787 13.2388 24.4481 13.1853C24.7175 13.1318 24.965 12.9997 25.1593 12.8056C25.3535 12.6115 25.4859 12.3641 25.5396 12.0948C25.5933 11.8254 25.5659 11.5462 25.4609 11.2924C25.3559 11.0387 25.178 10.8217 24.9497 10.6691C24.7214 10.5164 24.4529 10.4348 24.1783 10.4347H24.1777C23.8096 10.4349 23.4566 10.5812 23.1962 10.8414C22.9359 11.1017 22.7894 11.4546 22.7891 11.8228ZM13.3254 27.419C12.1972 27.3676 11.584 27.1797 11.1765 27.0209C10.6362 26.8106 10.2507 26.5601 9.84544 26.1554C9.44015 25.7507 9.18927 25.3656 8.97987 24.8253C8.82101 24.418 8.63308 23.8046 8.58179 22.6765C8.52569 21.4568 8.51449 21.0904 8.51449 18.0002C8.51449 14.9101 8.52662 14.5447 8.58179 13.324C8.63317 12.1958 8.82249 11.5836 8.97987 11.1751C9.1902 10.6349 9.44071 10.2494 9.84544 9.84413C10.2502 9.43886 10.6353 9.18799 11.1765 8.97859C11.5838 8.81974 12.1972 8.63182 13.3254 8.58053C14.5452 8.52444 14.9116 8.51323 18.0005 8.51323C21.0893 8.51323 21.4561 8.52536 22.6769 8.58053C23.8051 8.63191 24.4173 8.82122 24.8259 8.97859C25.3661 9.18799 25.7516 9.43941 26.1569 9.84413C26.5622 10.2489 26.8122 10.6349 27.0225 11.1751C27.1813 11.5824 27.3693 12.1958 27.4206 13.324C27.4767 14.5447 27.4879 14.9101 27.4879 18.0002C27.4879 21.0904 27.4767 21.4557 27.4206 22.6765C27.3692 23.8046 27.1803 24.4178 27.0225 24.8253C26.8122 25.3656 26.5616 25.7511 26.1569 26.1554C25.7522 26.5598 25.3661 26.8106 24.8259 27.0209C24.4185 27.1798 23.8051 27.3677 22.6769 27.419C21.4571 27.4751 21.0907 27.4863 18.0005 27.4863C14.9102 27.4863 14.5448 27.4751 13.3254 27.419ZM13.2296 6.49879C11.9977 6.55489 11.1559 6.75021 10.4208 7.03626C9.65946 7.33165 9.01495 7.72795 8.37091 8.37095C7.72686 9.01395 7.33157 9.65945 7.03616 10.4208C6.7501 11.1563 6.55477 11.9976 6.49867 13.2295C6.44164 14.4633 6.42859 14.8577 6.42859 18.0001C6.42859 21.1426 6.44164 21.537 6.49867 22.7708C6.55477 24.0027 6.7501 24.8439 7.03616 25.5795C7.33157 26.3404 7.72696 26.9866 8.37091 27.6293C9.01486 28.2721 9.65946 28.6678 10.4208 28.964C11.1573 29.2501 11.9977 29.4454 13.2296 29.5015C14.4641 29.5576 14.8579 29.5716 18.0005 29.5716C21.143 29.5716 21.5375 29.5585 22.7713 29.5015C24.0033 29.4454 24.8446 29.2501 25.5802 28.964C26.341 28.6678 26.986 28.2723 27.6301 27.6293C28.2741 26.9863 28.6686 26.3404 28.9648 25.5795C29.2509 24.8439 29.4471 24.0027 29.5023 22.7708C29.5584 21.5361 29.5714 21.1426 29.5714 18.0001C29.5714 14.8577 29.5584 14.4633 29.5023 13.2295C29.4462 11.9975 29.2509 11.1559 28.9648 10.4208C28.6686 9.65992 28.2731 9.01497 27.6301 8.37095C26.987 7.72693 26.341 7.33165 25.5811 7.03626C24.8446 6.75021 24.0032 6.55396 22.7723 6.49879C21.5384 6.44269 21.144 6.42871 18.0014 6.42871C14.8589 6.42871 14.4641 6.44176 13.2296 6.49879Z" fill="#273A64"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <rt-popup name="speaker1">
      <div class="row">
        <div class="rt-col-3-8 rt-col-td-3 rt-col-md-3 md-sp-b-1-1">
          <div class="bd-new__popup-photo">
            <img src="https://moscow.rt.ru/sites/default/files/b2b/BD/Ellipse150.png" class="d-flex bd-new__popup-photo__body"/>
          </div>
        </div>
        <div class="rt-col-5-8 rt-col-td-3 rt-col-md-3">
          <h2 class="rt-font-h2 rt-font-bold sp-b-1">Анастасия Белочкина</h2>
          <h4 class="rt-font-h4 sp-b-1-1 rt-font-bold">Ведущий эксперт по Скриптам продаж, опытный
            практик и тренер по продажам</h4>
          <p class="rt-font-paragraph sp-b-1-1">Сооснователь компании HyperScript.ru, конструктор и визуализатор
            скриптов продаж. Лично разработала более 650 скриптов продаж для разных бизнесов. Автор онлайн курса
            «Безотказные скрипты» belochkina.com (1000 учеников). Сооснователь компании Team-okk.ru (сервис по
            контролю качества отделов продаж).</p>
          <h4 class="rt-font-h4 rt-font-bold sp-b-0-4">Тема: «Заботливые Продажи. Безотказные скрипты»</h4>
          <ul class='rt-ordered-list'>
            <li class='rt-ordered-list__item rt-font-paragraph'>Вы узнаете про фразу убивающая конверсию, и
              эффективную формулу колтуэкшен</li>
            <li class='rt-ordered-list__item rt-font-paragraph'>Программирование, как основной инструмент роста
              вовлечённости в разговор на 47%</li>
            <li class='rt-ordered-list__item rt-font-paragraph'>Правила презентации и интонирование в продажах</li>
            <li class='rt-ordered-list__item rt-font-paragraph'>Заботливая формула работы с возражениями</li>
            <li class='rt-ordered-list__item rt-font-paragraph'>Стимулы к покупке, как не сливать тех, кто
              откладывает покупку</li>
          </ul>
        </div>
      </div>
    </rt-popup>
    <rt-popup name="speaker2">
      <div class="row">
        <div class="rt-col-3-8 rt-col-td-3 rt-col-md-3 md-sp-b-1-1">
          <div class="bd-new__popup-photo">
            <img src="https://moscow.rt.ru/sites/default/files/b2b/BD/Ellipse150.png" class="d-flex bd-new__popup-photo__body"/>
          </div>
        </div>
        <div class="rt-col-5-8 rt-col-td-3 rt-col-md-3">
          <h2 class="rt-font-h2 rt-font-bold sp-b-1">Анастасия Белочкина</h2>
          <h4 class="rt-font-h4 sp-b-1-1 rt-font-bold">Ведущий эксперт по Скриптам продаж, опытный
            практик и тренер по продажам</h4>
          <p class="rt-font-paragraph sp-b-1-1">Сооснователь компании HyperScript.ru, конструктор и визуализатор
            скриптов продаж. Лично разработала более 650 скриптов продаж для разных бизнесов. Автор онлайн курса
            «Безотказные скрипты» belochkina.com (1000 учеников). Сооснователь компании Team-okk.ru (сервис по
            контролю качества отделов продаж).</p>
          <h4 class="rt-font-h4 rt-font-bold sp-b-0-4">Тема: «Заботливые Продажи. Безотказные скрипты»</h4>
          <ul class='rt-ordered-list'>
            <li class='rt-ordered-list__item rt-font-paragraph'>Вы узнаете про фразу убивающая конверсию, и
              эффективную формулу колтуэкшен</li>
            <li class='rt-ordered-list__item rt-font-paragraph'>Программирование, как основной инструмент роста
              вовлечённости в разговор на 47%</li>
            <li class='rt-ordered-list__item rt-font-paragraph'>Правила презентации и интонирование в продажах</li>
            <li class='rt-ordered-list__item rt-font-paragraph'>Заботливая формула работы с возражениями</li>
            <li class='rt-ordered-list__item rt-font-paragraph'>Стимулы к покупке, как не сливать тех, кто
              откладывает покупку</li>
          </ul>
        </div>
      </div>
    </rt-popup>
    <rt-popup name="speaker3">
      <div class="row">
        <div class="rt-col-3-8 rt-col-td-3 rt-col-md-3 md-sp-b-1-1">
          <div class="bd-new__popup-photo">
            <img src="https://moscow.rt.ru/sites/default/files/b2b/BD/Ellipse150.png" class="d-flex bd-new__popup-photo__body"/>
          </div>
        </div>
        <div class="rt-col-5-8 rt-col-td-3 rt-col-md-3">
          <h2 class="rt-font-h2 rt-font-bold sp-b-1">Анастасия Белочкина</h2>
          <h4 class="rt-font-h4 sp-b-1-1 rt-font-bold">Ведущий эксперт по Скриптам продаж, опытный
            практик и тренер по продажам</h4>
          <p class="rt-font-paragraph sp-b-1-1">Сооснователь компании HyperScript.ru, конструктор и визуализатор
            скриптов продаж. Лично разработала более 650 скриптов продаж для разных бизнесов. Автор онлайн курса
            «Безотказные скрипты» belochkina.com (1000 учеников). Сооснователь компании Team-okk.ru (сервис по
            контролю качества отделов продаж).</p>
          <h4 class="rt-font-h4 rt-font-bold sp-b-0-4">Тема: «Заботливые Продажи. Безотказные скрипты»</h4>
          <ul class='rt-ordered-list'>
            <li class='rt-ordered-list__item rt-font-paragraph'>Вы узнаете про фразу убивающая конверсию, и
              эффективную формулу колтуэкшен</li>
            <li class='rt-ordered-list__item rt-font-paragraph'>Программирование, как основной инструмент роста
              вовлечённости в разговор на 47%</li>
            <li class='rt-ordered-list__item rt-font-paragraph'>Правила презентации и интонирование в продажах</li>
            <li class='rt-ordered-list__item rt-font-paragraph'>Заботливая формула работы с возражениями</li>
            <li class='rt-ordered-list__item rt-font-paragraph'>Стимулы к покупке, как не сливать тех, кто
              откладывает покупку</li>
          </ul>
        </div>
      </div>
    </rt-popup>
    <rt-popup name="speaker4">
      <div class="row">
        <div class="rt-col-3-8 rt-col-td-3 rt-col-md-3 md-sp-b-1-1">
          <div class="bd-new__popup-photo">
            <img src="https://moscow.rt.ru/sites/default/files/b2b/BD/Ellipse150.png" class="d-flex bd-new__popup-photo__body"/>
          </div>
        </div>
        <div class="rt-col-5-8 rt-col-td-3 rt-col-md-3">
          <h2 class="rt-font-h2 rt-font-bold sp-b-1">Анастасия Белочкина</h2>
          <h4 class="rt-font-h4 sp-b-1-1 rt-font-bold">Ведущий эксперт по Скриптам продаж, опытный
            практик и тренер по продажам</h4>
          <p class="rt-font-paragraph sp-b-1-1">Сооснователь компании HyperScript.ru, конструктор и визуализатор
            скриптов продаж. Лично разработала более 650 скриптов продаж для разных бизнесов. Автор онлайн курса
            «Безотказные скрипты» belochkina.com (1000 учеников). Сооснователь компании Team-okk.ru (сервис по
            контролю качества отделов продаж).</p>
          <h4 class="rt-font-h4 rt-font-bold sp-b-0-4">Тема: «Заботливые Продажи. Безотказные скрипты»</h4>
          <ul class='rt-ordered-list'>
            <li class='rt-ordered-list__item rt-font-paragraph'>Вы узнаете про фразу убивающая конверсию, и
              эффективную формулу колтуэкшен</li>
            <li class='rt-ordered-list__item rt-font-paragraph'>Программирование, как основной инструмент роста
              вовлечённости в разговор на 47%</li>
            <li class='rt-ordered-list__item rt-font-paragraph'>Правила презентации и интонирование в продажах</li>
            <li class='rt-ordered-list__item rt-font-paragraph'>Заботливая формула работы с возражениями</li>
            <li class='rt-ordered-list__item rt-font-paragraph'>Стимулы к покупке, как не сливать тех, кто
              откладывает покупку</li>
          </ul>
        </div>
      </div>
    </rt-popup>
    <rt-popup name="speaker5">
      <div class="row">
        <div class="rt-col-3-8 rt-col-td-3 rt-col-md-3 md-sp-b-1-1">
          <div class="bd-new__popup-photo">
            <img src="https://moscow.rt.ru/sites/default/files/b2b/BD/Ellipse150.png" class="d-flex bd-new__popup-photo__body"/>
          </div>
        </div>
        <div class="rt-col-5-8 rt-col-td-3 rt-col-md-3">
          <h2 class="rt-font-h2 rt-font-bold sp-b-1">Анастасия Белочкина</h2>
          <h4 class="rt-font-h4 sp-b-1-1 rt-font-bold">Ведущий эксперт по Скриптам продаж, опытный
            практик и тренер по продажам</h4>
          <p class="rt-font-paragraph sp-b-1-1">Сооснователь компании HyperScript.ru, конструктор и визуализатор
            скриптов продаж. Лично разработала более 650 скриптов продаж для разных бизнесов. Автор онлайн курса
            «Безотказные скрипты» belochkina.com (1000 учеников). Сооснователь компании Team-okk.ru (сервис по
            контролю качества отделов продаж).</p>
          <h4 class="rt-font-h4 rt-font-bold sp-b-0-4">Тема: «Заботливые Продажи. Безотказные скрипты»</h4>
          <ul class='rt-ordered-list'>
            <li class='rt-ordered-list__item rt-font-paragraph'>Вы узнаете про фразу убивающая конверсию, и
              эффективную формулу колтуэкшен</li>
            <li class='rt-ordered-list__item rt-font-paragraph'>Программирование, как основной инструмент роста
              вовлечённости в разговор на 47%</li>
            <li class='rt-ordered-list__item rt-font-paragraph'>Правила презентации и интонирование в продажах</li>
            <li class='rt-ordered-list__item rt-font-paragraph'>Заботливая формула работы с возражениями</li>
            <li class='rt-ordered-list__item rt-font-paragraph'>Стимулы к покупке, как не сливать тех, кто
              откладывает покупку</li>
          </ul>
        </div>
      </div>
    </rt-popup>
    <rt-popup name="speaker6">
      <div class="row">
        <div class="rt-col-3-8 rt-col-td-3 rt-col-md-3 md-sp-b-1-1">
          <div class="bd-new__popup-photo">
            <img src="https://moscow.rt.ru/sites/default/files/b2b/BD/Ellipse150.png" class="d-flex bd-new__popup-photo__body"/>
          </div>
        </div>
        <div class="rt-col-5-8 rt-col-td-3 rt-col-md-3">
          <h2 class="rt-font-h2 rt-font-bold sp-b-1">Анастасия Белочкина</h2>
          <h4 class="rt-font-h4 sp-b-1-1 rt-font-bold">Ведущий эксперт по Скриптам продаж, опытный
            практик и тренер по продажам</h4>
          <p class="rt-font-paragraph sp-b-1-1">Сооснователь компании HyperScript.ru, конструктор и визуализатор
            скриптов продаж. Лично разработала более 650 скриптов продаж для разных бизнесов. Автор онлайн курса
            «Безотказные скрипты» belochkina.com (1000 учеников). Сооснователь компании Team-okk.ru (сервис по
            контролю качества отделов продаж).</p>
          <h4 class="rt-font-h4 rt-font-bold sp-b-0-4">Тема: «Заботливые Продажи. Безотказные скрипты»</h4>
          <ul class='rt-ordered-list'>
            <li class='rt-ordered-list__item rt-font-paragraph'>Вы узнаете про фразу убивающая конверсию, и
              эффективную формулу колтуэкшен</li>
            <li class='rt-ordered-list__item rt-font-paragraph'>Программирование, как основной инструмент роста
              вовлечённости в разговор на 47%</li>
            <li class='rt-ordered-list__item rt-font-paragraph'>Правила презентации и интонирование в продажах</li>
            <li class='rt-ordered-list__item rt-font-paragraph'>Заботливая формула работы с возражениями</li>
            <li class='rt-ordered-list__item rt-font-paragraph'>Стимулы к покупке, как не сливать тех, кто
              откладывает покупку</li>
          </ul>
        </div>
      </div>
    </rt-popup>
  </div>
</template>
<script>
  const componentsList = {};

  export default {
    name: "AppPromoBusinessDrive",
    components: componentsList,
    data(){
      return {
        speakersExpanded: false,
        singleCardHeight: null,
        cardsShownAtFirst: 3,
        eventsExpanded: false,
        player: null
      }
    },
    mounted() {
      this.fixFrame();
      this.setSpeakersHeight();
      this.setSlideHeight();
      this.setVideoHeight();
      this.initYTPlayer();
      document.querySelector('.rt-carousel-v2__inner').addEventListener('scroll', () => {
        this.countFarPositions();
      })
      window.addEventListener('resize', () => {
        this.fixFrame();
        this.setSlideHeight();
        this.setVideoHeight();
        if(!this.speakersExpanded) {
          this.setSpeakersHeight();
        }
        if(this.eventsExpanded) {
          this.setTimelineHeight();
        }
      })

    },
    methods: {
      fixFrame() {
        let frame = document.querySelector('.bd-new__map-body');
        frame.width = window.innerWidth;
        if(window.innerWidth < 768) {
          frame.height = 400;
        } else {
          frame.height = 800;
        }
      },
      toggleList(e) {
        this.eventsExpanded = !this.eventsExpanded;
        e.target.closest('.rt-button').classList.toggle('rt-button--active');
        let elem = document.querySelector('.bd-new__timeline');
        elem.classList.toggle('bd-new__timeline--active');
        if(this.eventsExpanded) {
          this.setTimelineHeight();
        } else {
          elem.style.maxHeight = 0
        }
      },
      toggleMenu() {
        if(window.innerWidth <= 1024) {
          document.querySelector('.bd-new__header').classList.toggle('bd-new__header--expanded');
          document.documentElement.classList.toggle('ovh');
          document.body.classList.toggle('ovh')
        }
      },
      setSpeakersHeight() {
        if(window.innerWidth < 768) {
          document.querySelector('.bd-new__speakers-wrapper').style.height =
              Math.floor((this.getCardHeight() + 20) * this.cardsShownAtFirst) + 'px';
        } else {
          document.querySelector('.bd-new__speakers-wrapper').removeAttribute('style');
        }
      },
      expandSpeakersList(e) {
        this.speakersExpanded = !this.speakersExpanded;
        e.target.closest('.rt-button').classList.toggle('rt-button--active');
        let cardListLength = document.querySelectorAll('.bd-new__card').length;
        let fullHeight = Math.floor((this.getCardHeight() + 20) * cardListLength);
        let wrappedHeight = Math.floor((this.getCardHeight() + 20) * this.cardsShownAtFirst);
        document.querySelector('.bd-new__speakers-wrapper').style.height = this.speakersExpanded ?
            fullHeight + 'px' : wrappedHeight + 'px';
      },
      setTimelineHeight() {
        let elem = document.querySelector('.bd-new__timeline');
        elem.style.maxHeight = elem.scrollHeight + 120 + 'px'
      },
      getCardHeight() {
        let height = parseFloat(window.getComputedStyle(document.querySelector('.bd-new__card')).height)
        return height;
      },

      //new
      setSlideHeight() {
        let videoSlides = document.querySelectorAll('.bd-new__carousel-video');
        let slideHeight = videoSlides[0];
        videoSlides.forEach(item => {
          item.style.height = slideHeight.offsetWidth / 16 * 10 + 'px';
        })
      },
      setVideoHeight() {
        let videoHeight = document.querySelector('.bd-new__video-player').offsetWidth / 16 * 10;
        document.querySelector('.bd-new__video-player').style.height = videoHeight + 'px';
        document.querySelector('.bd-new__video-player-wrapper').style.padding = '' + (window.innerHeight - videoHeight) / 2 + 'px 0';
      },
      playVideo(e) {
        document.documentElement.style.overflow = 'hidden';
        document.body.style.overflow = 'hidden';
        this.createPlayer(e.target.closest('.bd-new__carousel-video').dataset.source);
        document.querySelector('.bd-new__video-player-wrapper').classList.add('bd-new__video-player-wrapper--active');
      },
      closeVideo() {
        document.documentElement.style.overflow = 'auto';
        document.body.style.overflow = 'auto';
        document.querySelector('.bd-new__video-player-wrapper').classList.remove('bd-new__video-player-wrapper--active');
        this.terminatePlayer();
      },
      initYTPlayer() {
        let apiScript = document.querySelector('script[src$="https://www.youtube.com/iframe_api"]');
        if (typeof YT === 'undefined' && apiScript === null) {
          let tag = document.createElement('script');
          tag.src = 'https://www.youtube.com/iframe_api';
          tag.onload = this.initYTPlayer;
          document.getElementsByTagName('body')[0].appendChild(tag);
        }else{
          if(typeof YT === 'undefined' || !YT.Player) {
            setTimeout(()=>{this.initYTPlayer();},100);
          }
        }
      },
      createPlayer(YTID) {
        const settings = {
          height: '100%',
          width: '100%',
          playerVars: {
            "autoplay" :"0",
            "loop" :"0",
            "autohide" :"1",
            "border" :"0",
            "wmode": "opaque",
            "enablejsapi" :"1",
            "modestbranding" :"1",
            "playsinline":"1",
            "rel":"0",
            "showinfo":"0",
            "controls" :"1",
            "disablekb": "1",
            "iv_load_policy": "3"
          },
          events: {
            'onReady': this.setVideoReady
          }
        };
        settings.videoId = YTID;
        this.player = new YT.Player("bd-new__video-player-body", settings);
      },
      setVideoReady() {
        this.player.unMute();
        this.player.playVideo();
      },
      terminatePlayer() {
        this.player.destroy();
      },
      emitClickLeft() {
        document.querySelector('.rt-carousel-v2__arrow-left').click();
      },
      emitClickRight() {
        document.querySelector('.rt-carousel-v2__arrow-right').click();
      },
      countFarPositions() {
        let innerCarousel = document.querySelector('.rt-carousel-v2__inner');
        if(innerCarousel.scrollLeft > 0) {
          document.querySelector('.pseudo-arrow-left').classList.remove('pseudo-arrow--hidden')
        } else {
          document.querySelector('.pseudo-arrow-left').classList.add('pseudo-arrow--hidden')
        }
        if(innerCarousel.scrollLeft > innerCarousel.scrollWidth - innerCarousel.offsetWidth - document.querySelector('.rt-carousel-v2').__vue__._data.scrollStep * 0.01) {
          document.querySelector('.pseudo-arrow-right').classList.add('pseudo-arrow--hidden')
        } else {
          document.querySelector('.pseudo-arrow-right').classList.remove('pseudo-arrow--hidden')
        }
      }
    }
  }
</script>

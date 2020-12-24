<template>
  <div>
    <div class="wc-inline">
      <div class="ld-key">
        <div class="lg-sp-b-4">
          <rt-jumbotron background='main-color003-no-opacity' color="main" description-color="main" :desktop-column-size="5">
            <template slot='header'><img src="https://static-cdn.rt.ru/sites/default/files/img/rt-key/Logo.svg" class="ld-key-logo" alt="">
            </template>
            <template slot='label'><h1>Технологии, <br>открывающие новые <br>возможности дома</h1></template>
            <template slot='description'><p class="sp-r-2">Удобный и многофункциональный сервис управления и контроля за
              домом и придомовой территорией</p></template>
            <template slot='image'>
              <rt-img src='https://static-cdn.rt.ru/sites/default/files/img/rt-key/banner-2.jpg'
                      x2-src='https://static-cdn.rt.ru/sites/default/files/img/rt-key/banner-2-x2.jpg'
              ></rt-img>
            </template>
            <template slot="footer">
              <rt-button v-rt-scroll-to-on-click='{"scrollToId": "form"}' color="purple">Подать заявку</rt-button>
            </template>
          </rt-jumbotron>
        </div>
      </div>
    </div>
    <div class="wc-inline">
      <div class="ld-key ld-key-slader-block sp-v-5 td-sp-v-2 md-sp-t-none">
        <div class="rt-container sp-v-1 md-sp-t-2">
          <rt-col>
            <rt-row>
              <rt-col :size="12" :tablet-size="6">
                <div class="ld-key-tabs">
                  <div class="row ld-key-tabs-nav ld-key-tabs-nav-stretch d-flex">
                    <div class="ld-key-tabs-col">
                      <div
                          class="ld-key-tabs-nav-item td-d-flex sp-l-0-4 sp-t-0-4 sp-r-0-4 sp-b-0-2 td-sp-h-0-3 td-sp-v-0-3 ld-key-tabs-nav-item--active"
                          data-index="0">
                        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                             class="ld-key-tabs-nav-icon d-block">
                          <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M17.5 10V14C17.5 15.4357 17.4982 16.3995 17.4234 17.1343C17.3512 17.8441 17.2236 18.172 17.0787 18.3889C16.8963 18.6619 16.6619 18.8963 16.3889 19.0787C16.172 19.2236 15.8441 19.3512 15.1343 19.4234C14.3995 19.4982 13.4357 19.5 12 19.5C10.5643 19.5 9.60047 19.4982 8.86566 19.4234C8.15592 19.3512 7.82798 19.2236 7.61107 19.0787C7.3381 18.8963 7.10372 18.6619 6.92133 18.3889C6.7764 18.172 6.64876 17.8441 6.57656 17.1343C6.50181 16.3995 6.5 15.4357 6.5 14V10C6.5 8.56432 6.50181 7.60047 6.57656 6.86566C6.64876 6.15592 6.7764 5.82798 6.92133 5.61107C7.10372 5.3381 7.3381 5.10372 7.61107 4.92133C7.82798 4.7764 8.15592 4.64876 8.86566 4.57656C9.60047 4.50181 10.5643 4.5 12 4.5C13.4357 4.5 14.3995 4.50181 15.1343 4.57656C15.8441 4.64876 16.172 4.7764 16.3889 4.92133C16.6619 5.10372 16.8963 5.3381 17.0787 5.61107C17.2236 5.82798 17.3512 6.15592 17.4234 6.86566C17.4982 7.60047 17.5 8.56432 17.5 10ZM5 10C5 7.19108 5 5.78661 5.67412 4.77772C5.96596 4.34096 6.34096 3.96596 6.77772 3.67412C7.78661 3 9.19108 3 12 3C14.8089 3 16.2134 3 17.2223 3.67412C17.659 3.96596 18.034 4.34096 18.3259 4.77772C19 5.78661 19 7.19108 19 10V14C19 16.8089 19 18.2134 18.3259 19.2223C18.034 19.659 17.659 20.034 17.2223 20.3259C16.2134 21 14.8089 21 12 21C9.19108 21 7.78661 21 6.77772 20.3259C6.34096 20.034 5.96596 19.659 5.67412 19.2223C5 18.2134 5 16.8089 5 14V10ZM11.5 15.5C11.5 16.0523 11.0523 16.5 10.5 16.5C9.94772 16.5 9.5 16.0523 9.5 15.5C9.5 14.9477 9.94772 14.5 10.5 14.5C11.0523 14.5 11.5 14.9477 11.5 15.5ZM13 15.5C13 16.8807 11.8807 18 10.5 18C9.11929 18 8 16.8807 8 15.5C8 14.1193 9.11929 13 10.5 13C11.8807 13 13 14.1193 13 15.5ZM8 9.495H12H16V11.005H12H8V9.495ZM12 6.495H8V8.005H12H16V6.495H12Z"/>
                        </svg>
                        <p class="sp-t-0-3 td-d-none">Умный домофон</p>
                      </div>
                    </div>
                    <div class="ld-key-tabs-col">
                      <div
                          class="ld-key-tabs-nav-item td-d-flex ld-key-tabs-nav-item-puprle sp-l-0-4 sp-t-0-4 sp-r-0-4 sp-b-0-2 td-sp-h-0-3 td-sp-v-0-3"
                          data-index="1">
                        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                             class="ld-key-tabs-nav-icon d-block">
                          <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M3.93198 4.54457C5.0423 2.93218 7.25926 2.54402 8.85136 3.68325L22.7943 13.6602C23.0712 13.8583 23.0734 14.2693 22.7986 14.4703L20.6929 16.0109C19.1438 17.1443 17.1029 17.2803 15.4346 16.4124L14.1464 17.4334C13.1853 18.1952 11.836 18.2285 10.8385 17.5151L8.7328 16.0091L5.71803 18.4221C5.23034 18.8124 4.62428 19.0251 3.99962 19.0251H2.49099C2.43346 19.9597 2.01933 20.8402 1.2486 20.996C1.11327 21.0234 1 20.9084 1 20.7703V15.2612C1 15.1232 1.11327 15.0082 1.2486 15.0356C2.08151 15.204 2.49796 16.2187 2.49796 17.2334V17.5251H3.99962C4.28356 17.5251 4.55904 17.4284 4.78071 17.251L7.4651 15.1025L4.16789 12.7443C2.94875 11.8724 2.65237 10.1848 3.50148 8.94962L3.93734 8.3156L3.79793 8.21672C2.90579 7.58397 2.68742 6.35191 3.30775 5.45108L3.93198 4.54457ZM5.16098 9.18348L14.1217 15.539L13.2147 16.2579C12.7778 16.6041 12.1645 16.6193 11.7111 16.295L5.04048 11.5242C4.48633 11.1279 4.35161 10.3608 4.73757 9.79938L5.16098 9.18348ZM4.54317 6.30181L5.1674 5.3953C5.80187 4.47394 7.0687 4.25213 7.97847 4.90312L20.7975 14.0758L19.8072 14.8004C18.5919 15.6896 16.944 15.7017 15.7157 14.8305L4.66571 6.99322C4.44268 6.83503 4.38808 6.52702 4.54317 6.30181Z"/>
                        </svg>

                        <p class="sp-t-0-3 td-d-none">Комплексное <br/> видеонаблюдение</p>
                      </div>
                    </div>
                    <div class="ld-key-tabs-col">
                      <div
                          class="ld-key-tabs-nav-item td-d-flex ld-key-tabs-nav-item-dark sp-l-0-4 sp-t-0-4 sp-r-0-4 sp-b-0-2 td-sp-h-0-3 td-sp-v-0-3"
                          data-index="2">
                        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                             class="ld-key-tabs-nav-icon d-block">
                          <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M17.0037 4.61359L11 8.01635V10.2761L18.0004 6.30837C18.4728 6.04066 18.6326 5.44424 18.3573 4.97624C18.0821 4.50824 17.476 4.34587 17.0037 4.61359ZM11 12V18.5V18.5157H20V20.0157H9V20H5.5H4V18.5V5.91697C4 4.8124 4.89543 3.91697 6 3.91697H9C10.1046 3.91697 11 4.8124 11 5.91697V6.29239L16.2433 3.32062C17.4363 2.64442 18.9671 3.05452 19.6623 4.23661C20.3575 5.4187 19.9539 6.92514 18.7608 7.60134L11 12ZM6 5.41697H9C9.27614 5.41697 9.5 5.64083 9.5 5.91697V7.25004H5.5V5.91697C5.5 5.64083 5.72386 5.41697 6 5.41697ZM5.5 8.75004H9.5V18.5H5.5V8.75004Z"/>
                        </svg>

                        <p class="sp-t-0-3 td-d-none">Умный шлагбаум</p>
                      </div>
                    </div>
                    <div class="ld-key-tabs-col">
                      <div
                          class="ld-key-tabs-nav-item td-d-flex ld-key-tabs-nav-item-gray sp-l-0-4 sp-t-0-4 sp-r-0-4 sp-b-0-2 td-sp-h-0-3 td-sp-v-0-3"
                          data-index="3">
                        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                             class="ld-key-tabs-nav-icon d-block">
                          <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M12 20.5C16.6944 20.5 20.5 16.6944 20.5 12C20.5 7.30558 16.6944 3.5 12 3.5C7.30558 3.5 3.5 7.30558 3.5 12C3.5 16.6944 7.30558 20.5 12 20.5ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM14 16.0078V17.5078H10V16.0078H14ZM7.5 12.5V10.5H9.51562V12.5H7.5ZM11.0156 12.5V10.5H12.9844V12.5H11.0156ZM14.4844 12.5H16.5V10.5H14.4844V12.5ZM6 9.25C6 9.11193 6.11193 9 6.25 9H17.75C17.8881 9 18 9.11193 18 9.25V13.75C18 13.8881 17.8881 14 17.75 14H6.25C6.11193 14 6 13.8881 6 13.75V9.25Z"/>
                        </svg>
                        <p class="sp-t-0-3 td-d-none">Умные счетчики</p>
                      </div>
                    </div>
                    <div class="ld-key-tabs-col">
                      <div
                          class="ld-key-tabs-nav-item td-d-flex ld-key-tabs-nav-item-green sp-l-0-4 sp-t-0-4 sp-r-0-4 sp-b-0-2 td-sp-h-0-3 td-sp-v-0-3"
                          data-index="4">
                        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                             class="ld-key-tabs-nav-icon d-block">
                          <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M17 10V8C17 5.23858 14.7614 3 12 3C9.23858 3 7 5.23858 7 8V10H6C5.44772 10 5 10.4477 5 11V16C5 18.7614 7.23858 21 10 21H14C16.7614 21 19 18.7614 19 16V11C19 10.4477 18.5523 10 18 10H17ZM15.5 10H8.5V8C8.5 6.067 10.067 4.5 12 4.5C13.933 4.5 15.5 6.067 15.5 8V10ZM6.5 11.5V16C6.5 17.933 8.067 19.5 10 19.5H14C15.933 19.5 17.5 17.933 17.5 16V11.5H6.5ZM13.509 14.5031C13.509 15.0623 13.2034 15.5502 12.75 15.8091V17C12.75 17.2761 12.5261 17.5 12.25 17.5H11.75C11.4739 17.5 11.25 17.2761 11.25 17V15.8039C10.8015 15.5437 10.5 15.0586 10.5 14.5031C10.5 13.673 11.1736 13 12.0045 13C12.8354 13 13.509 13.673 13.509 14.5031Z"/>
                        </svg>

                        <p class="sp-t-0-3 td-d-none">Умный доступ</p>
                      </div>
                    </div>
                  </div>
                </div>
              </rt-col>
              <rt-col :size="12" :tablet-size="6">
                <div class="ld-key-tabs-content">
                  <div class="ld-key-tabs-item ld-key-tabs-item--active">

                    <rt-row>
                      <rt-col size="6">
                        <p class="td-d-none rt-font-h2 sp-t-4">Умный домофон — новые возможности комфорта вашего
                          дома</p>
                      </rt-col>
                    </rt-row>
                    <rt-row class="sp-t-1 row-td-reverse td-flex-j-end md-sp-t-2">
                      <div class="rt-col-6 rt-col-td-6 rt-col-td-4 rt-col-md-3 td-sp-r-3 rt-font-small-paragraph">

                        <p class="sp-t-0-2">Умный домофон — это комплексное решение, которое позволяет сделать доступ в
                          дом современным, безопасным и комфортным для жителей дома и их гостей. Является частью
                          видеонаблюдения придомовой территории с доступом к видео для УК, жителей и ближайшего
                          ситуационного центра «Безопасный город».</p>
                        <div class="d-flex sp-t-2 md-d-block md-sp-t-1-1">
                          <div class="flex-fill md-d-flex td-flex-v-center td-flex-v-center">
                            <img class="d-block ld-key-icon"
                                 src="https://static-cdn.rt.ru/sites/default/files/img/rt-key/010.svg"
                                 alt="">
                            <p class="sp-t-0-4 md-sp-t-none md-sp-l-0-4">Управление доступом </p>
                          </div>
                          <div
                              class="flex-fill md-d-flex td-flex-v-center sp-l-1 md-sp-l-none md-sp-v-1 td-flex-v-center">
                            <img class="d-block ld-key-icon"
                                 src="https://static-cdn.rt.ru/sites/default/files/img/rt-key/008.svg"
                                 alt="">
                            <p class="sp-t-0-4 md-sp-t-none md-sp-l-0-4">Фото- и видеофиксация </p>
                          </div>
                          <div class="flex-fill md-d-flex td-flex-v-center td-flex-v-center">
                            <img class="d-block ld-key-icon"
                                 src="https://static-cdn.rt.ru/sites/default/files/img/rt-key/267.svg"
                                 alt="">
                            <p class="sp-t-0-4 md-sp-t-none md-sp-l-0-4">Архив посещений </p>
                          </div>

                        </div>
                        <p class="sp-t-1-3 color-purple rt-link ld-key-tab-show-more td-d-block d-none">Узнать
                          больше</p>
                        <div class="ld-key-tab-content">
                          <p class="rt-font-h3 sp-t-2">Что умеет ключ</p>

                          <div class="sp-t-1-1"><p class="ld-key-boolet">Управление и контроль доступа в жилое
                            помещение</p></div>
                          <div class="sp-t-1-1"><p class="ld-key-boolet">Просмотр видео с любой камеры домофона в режиме
                            онлайн через архив видеозаписей</p></div>
                          <div class="sp-t-1-1"><p class="ld-key-boolet">Сохранность общедомового имущества и чистота в
                            доме</p></div>
                          <div class="sp-t-1-1"><p class="ld-key-boolet">Архив всех вошедших в подъезд, распознанных по
                            ключу или коду доступа, фотофиксация посетителей и времени входа</p></div>
                          <p class="color-purple rt-link ld-key-tab-show-less d-none td-sp-t-1-1">Скрыть</p>
                        </div>
                      </div>
                      <div label="Умный домофон — новые возможности комфорта вашего дома"
                           data-tab-index="0"
                           class="rt-col-6  rt-col-td-5 rt-font-center rt-col-td-2 rt-col-md-3 ld-key-tabs-imgs">
                        <rt-img src='https://static-cdn.rt.ru/sites/default/files/img/rt-key/slide1.png'
                                x2-src='https://static-cdn.rt.ru/sites/default/files/img/rt-key/slide1-x2.png'
                        ></rt-img>


                      </div>
                    </rt-row>
                  </div>
                  <div class="ld-key-tabs-item">
                    <rt-row>
                      <rt-col size="6">
                        <p class="td-d-none rt-font-h2 sp-t-4">Комплексное видеонаблюдение — новые возможности
                          безопасности для вашего дома</p>
                      </rt-col>
                    </rt-row>
                    <rt-row class="sp-t-1 row-td-reverse td-flex-j-end md-sp-t-2">
                      <div class="rt-col-6 rt-col-td-6 rt-col-td-4 rt-col-md-3 td-sp-r-3 rt-font-small-paragraph">

                        <p class="sp-t-0-2">Умный шлагбаум — это сервис, который предоставляет возможность управлять и
                          контролировать доступ к придомовой территории для УК и жильцов.</p>
                        <div class="d-flex sp-t-2 md-d-block md-sp-t-1-1">
                          <div class="flex-fill md-d-flex td-flex-v-center td-flex-v-center">
                            <img class="d-block ld-key-icon"
                                 src="https://static-cdn.rt.ru/sites/default/files/img/rt-key/186.svg"
                                 alt="">
                            <p class="sp-t-0-4 md-sp-t-none md-sp-l-0-4">Видеоконтроль </p>
                          </div>
                          <div
                              class="flex-fill md-d-flex td-flex-v-center sp-l-1 md-sp-l-none md-sp-v-1 td-flex-v-center">
                            <img class="d-block ld-key-icon"
                                 src="https://static-cdn.rt.ru/sites/default/files/img/rt-key/111.svg"
                                 alt="">
                            <p class="sp-t-0-4 md-sp-t-none md-sp-l-0-4">Детекция событий </p>
                          </div>
                          <div class="flex-fill md-d-flex td-flex-v-center td-flex-v-center">
                            <img class="d-block ld-key-icon"
                                 src="https://static-cdn.rt.ru/sites/default/files/img/rt-key/008.svg"
                                 alt="">
                            <p class="sp-t-0-4 md-sp-t-none md-sp-l-0-4">Видеоаналитика </p>
                          </div>

                        </div>
                        <p class="sp-t-1-3 color-purple rt-link ld-key-tab-show-more td-d-block d-none">Узнать
                          больше</p>
                        <div class="ld-key-tab-content">
                          <p class="rt-font-h3 sp-t-2">Что умеет ключ</p>

                          <div class="sp-t-1-1"><p class="ld-key-boolet">Управление группой камер, хранение записей до
                            60
                            суток</p></div>
                          <div class="sp-t-1-1"><p class="ld-key-boolet">Доступ к видеотрансляции и архиву через
                            браузер,
                            десктоп-клиент и мобильные приложения</p></div>
                          <div class="sp-t-1-1"><p class="ld-key-boolet">Съемка в темноте и съемка со звуком. Настройка
                            битрейта камер, поддержка Full HD. Видеоаналитика: пересечение линии, вторжение в зону,
                            слепые
                            зоны и другое</p></div>
                          <div class="sp-t-1-1"><p class="ld-key-boolet">Возможность подключения центра мониторинга
                            (более
                            300) на объектах с применением локально облачного хранения</p></div>
                          <p class="color-purple rt-link ld-key-tab-show-less d-none td-sp-t-1-1">Скрыть</p>
                        </div>
                      </div>
                      <div label="Комплексное видеонаблюдение — новые возможности безопасности для вашего дома"
                           data-tab-index="0"
                           class="rt-col-6  rt-col-td-5 rt-font-center rt-col-td-2 rt-col-md-3 ld-key-tabs-imgs ld-key-tabs-imgs-go-top">
                        <rt-img src='https://static-cdn.rt.ru/sites/default/files/img/rt-key/slide2.png'
                                x2-src='https://static-cdn.rt.ru/sites/default/files/img/rt-key/slide2-x2.png'
                        ></rt-img>


                      </div>
                    </rt-row>
                  </div>
                  <div class="ld-key-tabs-item">
                    <rt-row>
                      <rt-col size="6">
                        <p class="td-d-none rt-font-h2 sp-t-4">Умный домофон — новые возможности удобства для вашего
                          дома</p>
                      </rt-col>
                    </rt-row>
                    <rt-row class="sp-t-1 row-td-reverse td-flex-j-end md-sp-t-2">
                      <div class="rt-col-6 rt-col-td-6 rt-col-td-4 rt-col-md-3 td-sp-r-3 rt-font-small-paragraph">

                        <p class="sp-t-0-2">Умный шлагбаум — это сервис, который предоставляет возможность управлять и
                          контролировать доступ к придомовой территории для УК и жильцов.</p>
                        <div class="d-flex sp-t-2 md-d-block md-sp-t-1-1">
                          <div class="flex-fill md-d-flex td-flex-v-center td-flex-v-center">
                            <img class="d-block ld-key-icon"
                                 src="https://static-cdn.rt.ru/sites/default/files/img/rt-key/186.svg"
                                 alt="">
                            <p class="sp-t-0-4 md-sp-t-none md-sp-l-0-4">Удаленное управление </p>
                          </div>
                          <div
                              class="flex-fill md-d-flex td-flex-v-center sp-l-1 md-sp-l-none md-sp-v-1 td-flex-v-center">
                            <img class="d-block ld-key-icon"
                                 src="https://static-cdn.rt.ru/sites/default/files/img/rt-key/008.svg"
                                 alt="">
                            <p class="sp-t-0-4 md-sp-t-none md-sp-l-0-4">Видеофиксация событий </p>
                          </div>
                          <div class="flex-fill md-d-flex td-flex-v-center td-flex-v-center">
                            <img class="d-block ld-key-icon"
                                 src="https://static-cdn.rt.ru/sites/default/files/img/rt-key/133.svg"
                                 alt="">
                            <p class="sp-t-0-4 md-sp-t-none md-sp-l-0-4">Автоматический пропуск <br>экстренных служб </p>
                          </div>

                        </div>
                        <p class="sp-t-1-3 color-purple rt-link ld-key-tab-show-more td-d-block d-none">Узнать
                          больше</p>
                        <div class="ld-key-tab-content">
                          <p class="rt-font-h3 sp-t-2">Что умеет ключ</p>

                          <div class="sp-t-1-1"><p class="ld-key-boolet">Ограничение доступа для посторонних
                            автомашин</p>
                          </div>
                          <div class="sp-t-1-1"><p class="ld-key-boolet">Беспрепятственный въезд служебного транспорта
                            (полиция, скорая, МЧС)</p></div>
                          <div class="sp-t-1-1"><p class="ld-key-boolet">Фиксация событий въезда\выезда с камеры
                            шлагбаума, доступ к архиву</p></div>
                          <div class="sp-t-1-1"><p class="ld-key-boolet">Удаленное управление через Личный кабинет</p>
                          </div>
                          <p class="color-purple rt-link ld-key-tab-show-less d-none td-sp-t-1-1">Скрыть</p>
                        </div>
                      </div>
                      <div label="Умный домофон — новые возможности удобства для вашего дома"
                           data-tab-index="0"
                           class="rt-col-6  rt-col-td-5 rt-font-center rt-col-td-2 rt-col-md-3 ld-key-tabs-imgs">
                        <rt-img src='https://static-cdn.rt.ru/sites/default/files/img/rt-key/slide2.png'
                                x2-src='https://static-cdn.rt.ru/sites/default/files/img/rt-key/slide2-x2.png'
                        ></rt-img>


                      </div>
                    </rt-row>
                  </div>
                  <div class="ld-key-tabs-item">
                    <rt-row>
                      <rt-col size="6">
                        <p class="td-d-none rt-font-h2 sp-t-4">Умные счетчики — новые возможности вашего контроля</p>
                      </rt-col>
                    </rt-row>
                    <rt-row class="sp-t-1 row-td-reverse td-flex-j-end md-sp-t-2">
                      <div class="rt-col-6 rt-col-td-6 rt-col-td-4 rt-col-md-3 td-sp-r-3 rt-font-small-paragraph">

                        <p class="sp-t-0-2">Умные счетчики — это комплексное решение для автоматизации учета потребления
                          коммунальных ресурсов в многоквартирных домах.</p>
                        <div class="d-flex sp-t-2 md-d-block md-sp-t-1-1">
                          <div class="flex-fill md-d-flex td-flex-v-center td-flex-v-center">
                            <img class="d-block ld-key-icon"
                                 src="https://static-cdn.rt.ru/sites/default/files/img/rt-key/266.svg"
                                 alt="">
                            <p class="sp-t-0-4 md-sp-t-none md-sp-l-0-4">Автоматический сбор <br>показаний </p>
                          </div>
                          <div
                              class="flex-fill md-d-flex td-flex-v-center sp-l-1 md-sp-l-none md-sp-v-1 td-flex-v-center">
                            <img class="d-block ld-key-icon"
                                 src="https://static-cdn.rt.ru/sites/default/files/img/rt-key/186.svg"
                                 alt="">
                            <p class="sp-t-0-4 md-sp-t-none md-sp-l-0-4">Управление потреблением</p>
                          </div>
                          <div class="flex-fill md-d-flex td-flex-v-center td-flex-v-center">
                            <img class="d-block ld-key-icon"
                                 src="https://static-cdn.rt.ru/sites/default/files/img/rt-key/241.svg"
                                 alt="">
                            <p class="sp-t-0-4 md-sp-t-none md-sp-l-0-4">Удобный доступ к <br>статистике</p>
                          </div>

                        </div>
                        <p class="sp-t-1-3 color-purple rt-link ld-key-tab-show-more td-d-block d-none">Узнать
                          больше</p>
                        <div class="ld-key-tab-content">
                          <p class="rt-font-h3 sp-t-2">Что умеет ключ</p>

                          <div class="sp-t-1-1"><p class="ld-key-boolet">Автоматический сбор данных без обхода квартир и
                            передачи данных от жильцов. Снижение манипуляций с приборами учета и уровня хищений</p>
                          </div>
                          <div class="sp-t-1-1"><p class="ld-key-boolet">Оперативное получение показаний счетчиков и
                            автоматическая передача данных в ГИС, РСО </p></div>
                          <div class="sp-t-1-1"><p class="ld-key-boolet">Быстрое определение и устранение аномального
                            потребления ресурсов</p></div>
                          <div class="sp-t-1-1"><p class="ld-key-boolet">Снижение расходов на ОДН* — правильные значения
                            и
                            точный баланс потребления</p></div>
                          <p class="color-purple rt-link ld-key-tab-show-less d-none td-sp-t-1-1">Скрыть</p>
                        </div>
                      </div>
                      <div label="Умные счетчики — новые возможности вашего контроля"
                           data-tab-index="0"
                           class="rt-col-6  rt-col-td-5 rt-font-center rt-col-td-2 rt-col-md-3 ld-key-tabs-imgs">
                        <rt-img src='https://static-cdn.rt.ru/sites/default/files/img/rt-key/slide3.png'
                                x2-src='https://static-cdn.rt.ru/sites/default/files/img/rt-key/slide3-x2.png'
                        ></rt-img>


                      </div>
                    </rt-row>
                  </div>
                  <div class="ld-key-tabs-item">
                    <rt-row>
                      <rt-col size="6">
                        <p class="td-d-none rt-font-h2 sp-t-4">Умный доступ (СКУД) — новые возможности управления
                          доступом</p>
                      </rt-col>
                    </rt-row>
                    <rt-row class="sp-t-1 row-td-reverse td-flex-j-end md-sp-t-2">
                      <div class="rt-col-6 rt-col-td-6 rt-col-td-4 rt-col-md-3 td-sp-r-3 rt-font-small-paragraph">

                        <p class="sp-t-0-2">СКУД — это комплексное решение для управления и контроля доступа во все
                          помещения и на территорию жилого комплекса.</p>
                        <div class="d-flex sp-t-2 md-d-block md-sp-t-1-1">
                          <div class="flex-fill md-d-flex td-flex-v-center td-flex-v-center">
                            <img class="d-block ld-key-icon"
                                 src="https://static-cdn.rt.ru/sites/default/files/img/rt-key/269.svg"
                                 alt="">
                            <p class="sp-t-0-4 md-sp-t-none md-sp-l-0-4">Бесконтактный ключ</p>
                          </div>
                          <div
                              class="flex-fill md-d-flex td-flex-v-center sp-l-1 md-sp-l-none md-sp-v-1 td-flex-v-center">
                            <img class="d-block ld-key-icon"
                                 src="https://static-cdn.rt.ru/sites/default/files/img/rt-key/225.svg"
                                 alt="">
                            <p class="sp-t-0-4 md-sp-t-none md-sp-l-0-4">Управление доступом на <br>территорию</p>
                          </div>
                          <div class="flex-fill md-d-flex td-flex-v-center td-flex-v-center">
                            <img class="d-block ld-key-icon"
                                 src="https://static-cdn.rt.ru/sites/default/files/img/rt-key/008.svg"
                                 alt="">
                            <p class="sp-t-0-4 md-sp-t-none md-sp-l-0-4">Фото- и видеофиксация </p>
                          </div>

                        </div>
                        <p class="sp-t-1-3 color-purple rt-link ld-key-tab-show-more td-d-block d-none">Узнать
                          больше</p>
                        <div class="ld-key-tab-content">
                          <p class="rt-font-h3 sp-t-2">Что умеет ключ</p>

                          <div class="sp-t-1-1"><p class="ld-key-boolet">Контроль и управление доступом на территорию и
                            в
                            помещения ЖК с помощью единого ключа SL3 для домофона и умного СКУД.</p></div>
                          <div class="sp-t-1-1"><p class="ld-key-boolet">Открытие из приложения и с помощью беспроводных
                            меток малого и дальнего радиуса действия</p></div>
                          <div class="sp-t-1-1"><p class="ld-key-boolet">Единый некопируемый ключ доступа ко всем
                            разрешенным помещениям и домофонам. Разблокировка дверей при пожаре для эвакуации людей</p>
                          </div>
                          <div class="sp-t-1-1"><p class="ld-key-boolet">Контроль доступа сотрудников УК с ведением
                            журнала доступа. Можно использовать для учета рабочего времени</p></div>
                          <p class="color-purple rt-link ld-key-tab-show-less d-none td-sp-t-1-1">Скрыть</p>
                        </div>
                      </div>
                      <div label="Умный доступ (СКУД) — новые возможности управления доступом"
                           data-tab-index="0"
                           class="rt-col-6  rt-col-td-5 rt-font-center rt-col-td-2 rt-col-md-3 ld-key-tabs-imgs">
                        <rt-img src='https://static-cdn.rt.ru/sites/default/files/img/rt-key/slide4.png'
                                x2-src='https://static-cdn.rt.ru/sites/default/files/img/rt-key/slide4-x2.png'
                        ></rt-img>


                      </div>
                    </rt-row>
                  </div>
                </div>
              </rt-col>
            </rt-row>
          </rt-col>
        </div>
      </div>
    </div>
    <div class="wc-inline">
      <div class="sp-t-5 md-sp-v-2 color-block--white" id="form">
        <div class="rt-container sp-t-1">
          <rt-col>
            <rt-row>
              <rt-col :size="6" :tablet-size="3" :mobile-size="3" style="min-height:1000px">
                <p class="rt-font-h2 sp-b-2">Заполните заявку</p>


                      <div class="d-flex rt-col-12 rt-col-td-6 rt-col-md-3" style="gap: 10px">
                        <rt-radio-button name="Физическое лицо - " value="Я клиент Ростелекома" checked><span
                            class="rt-font-small-paragraph">Представитель УК</span></rt-radio-button><br>
                        <rt-radio-button name="Физическое лицо - " value="Я новый клиент"><span
                            class="rt-font-small-paragraph">Инициатор дома</span></rt-radio-button>
                      </div>
                      <div class="sp-t-2">
                        <rt-button color="purple">Подать заявку</rt-button>
                      </div>
                      <div class="tab-content d-block">1</div>
                      <div class="tab-content d-none">2</div>




              </rt-col>
              <rt-col :size="2" :t-hide="true"></rt-col>
              <rt-col :size="4" :tablet-size="3" :mobile-size="3" class="md-sp-t-2 d-flex td-d-block flex-v-center ">
                <div>
                  <img src="https://static-cdn.rt.ru/sites/default/files/img/rt-key/Logo.svg" alt="">
                  <p class="rt-font-h3 sp-t-1-2 sp-b-2 td-sp-b-1-2">Вам понадобится приложение <br>«Ростелеком Ключ»</p>
                  <div class="d-flex td-d-block">
                    <div class="flex-fill sp-r-0-2 td-sp-r-none">
                      <rt-button class="rt-button--is-block" href="#" color="black">
                        <img src="https://static-cdn.rt.ru/sites/default/files/img/ad_unit_component/appStore.svg"
                             alt=""/>
                      </rt-button>
                    </div>
                    <div class="flex-fill sp-l-0-2 td-sp-l-none td-sp-t-1">
                      <rt-button class="rt-button--is-block" href="#" color="black">
                        <img src="https://static-cdn.rt.ru/sites/default/files/img/ad_unit_component/googlePlay.svg"
                             alt=""/>
                      </rt-button>
                    </div>

                  </div>
                </div>
              </rt-col>
            </rt-row>
          </rt-col>
        </div>
      </div>
    </div>
    <div class="wc-inline">
      <div class="sp-v-5 td-sp-v-3 md-sp-v-2 color-block--white">
        <div class="sp-v-1">
          <div class="rt-container">
            <rt-col>
              <p class="rt-font-h2 sp-b-2 md-sp-b-1-2">Выберите сегмент и узнайте как Ростелеком Ключ может помочь</p>
              <rt-row>
                <rt-col size="6" :tablet-size="6">
                  <a href="#">
                    <div class="ld-key-card rt-sys-icon-hover--orange">
                      <rt-row>
                        <div class="rt-col-persent-5 md-d-none d-flex">
                          <rt-img src='https://static-cdn.rt.ru/sites/default/files/img/rt-key/card-1.jpg'
                                  x2-src='https://static-cdn.rt.ru/sites/default/files/img/rt-key/card-1-x2.jpg'
                          ></rt-img>
                        </div>
                        <div class="rt-col-persent-5 relative rt-col-md-3 d-flex">
                          <div class="d-flex flex-column">
                            <div class="flex-fill">
                              <p class="rt-font-h4">Жильцы</p>
                              <p class="sp-t-1 color-main05 md-sp-b-1-1">Управление, обслуживание и контроль дома и территории 24 часа в сутки</p>

                            </div>
                            <div class="ld-key-card-link d-flex flex-v-center">
                              <div class="d-inline-block ld-key-card-link-text">Подробнее</div>
                              <rt-system-icons class="ld-key-card-arrow" name="arrow right"></rt-system-icons>
                            </div>
                          </div>
                        </div>
                      </rt-row>
                    </div>
                  </a>
                </rt-col>
                <rt-col size="6" :tablet-size="6" class="td-sp-t-1">
                  <a href="#">
                    <div class="ld-key-card rt-sys-icon-hover--orange">
                      <rt-row>
                        <div class="rt-col-persent-5 md-d-none">
                          <rt-img src='https://static-cdn.rt.ru/sites/default/files/img/rt-key/card-2.jpg'
                                  x2-src='https://static-cdn.rt.ru/sites/default/files/img/rt-key/card-2-x2.jpg'
                          ></rt-img>
                        </div>
                        <div class="rt-col-persent-5 relative rt-col-md-3 d-flex">
                          <div class="d-flex flex-column">
                            <div class="flex-fill">
                              <p class="rt-font-h4">Застройщик</p>
                              <p class="sp-t-1 color-main05 md-sp-b-1-1">Готовые решения для повышения качества жилья и контроля хода
                                строительства ЖК </p>

                            </div>
                            <div class="ld-key-card-link d-flex flex-v-center">
                              <div class="d-inline-block ld-key-card-link-text">Подробнее</div>
                              <rt-system-icons class="ld-key-card-arrow" name="arrow right"></rt-system-icons>
                            </div>
                          </div>
                        </div>
                      </rt-row>

                    </div>
                  </a>
                </rt-col>
              </rt-row>
            </rt-col>
          </div>

        </div>

      </div>
    </div>
  </div>
</template>
<!--ld-key-gray-->
<script>

const componentsList = {};

export default {
  name: "AppPromoVip",
  components: componentsList,
  mounted() {
    var f={};var g=/iPhone/i,i=/iPod/i,j=/iPad/i,k=/\biOS-universal(?:.+)Mac\b/i,h=/\bAndroid(?:.+)Mobile\b/i,m=/Android/i,c=/(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i,d=/Silk/i,b=/Windows Phone/i,n=/\bWindows(?:.+)ARM\b/i,p=/BlackBerry/i,q=/BB10/i,s=/Opera Mini/i,t=/\b(CriOS|Chrome)(?:.+)Mobile/i,u=/Mobile(?:.+)Firefox\b/i,v=function(l){return void 0!==l&&"MacIntel"===l.platform&&"number"==typeof l.maxTouchPoints&&l.maxTouchPoints>1&&"undefined"==typeof MSStream};function w(l){return function($){return $.test(l)}}function x(l){var $={userAgent:"",platform:"",maxTouchPoints:0};l||"undefined"==typeof navigator?"string"==typeof l?$.userAgent=l:l&&l.userAgent&&($={userAgent:l.userAgent,platform:l.platform,maxTouchPoints:l.maxTouchPoints||0}):$={userAgent:navigator.userAgent,platform:navigator.platform,maxTouchPoints:navigator.maxTouchPoints||0};var a=$.userAgent,e=a.split("[FBAN");void 0!==e[1]&&(a=e[0]),void 0!==(e=a.split("Twitter"))[1]&&(a=e[0]);var r=w(a),o={apple:{phone:r(g)&&!r(b),ipod:r(i),tablet:!r(g)&&(r(j)||v($))&&!r(b),universal:r(k),device:(r(g)||r(i)||r(j)||r(k)||v($))&&!r(b)},amazon:{phone:r(c),tablet:!r(c)&&r(d),device:r(c)||r(d)},android:{phone:!r(b)&&r(c)||!r(b)&&r(h),tablet:!r(b)&&!r(c)&&!r(h)&&(r(d)||r(m)),device:!r(b)&&(r(c)||r(d)||r(h)||r(m))||r(/\bokhttp\b/i)},windows:{phone:r(b),tablet:r(n),device:r(b)||r(n)},other:{blackberry:r(p),blackberry10:r(q),opera:r(s),firefox:r(u),chrome:r(t),device:r(p)||r(q)||r(s)||r(u)||r(t)},any:!1,phone:!1,tablet:!1};return o.any=o.apple.device||o.android.device||o.windows.device||o.other.device,o.phone=o.apple.phone||o.android.phone||o.windows.phone,o.tablet=o.apple.tablet||o.android.tablet||o.windows.tablet,o}f=x();if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f}else if(typeof define==="function"&&define.amd){define(function(){return f})}else{this["isMobile"]=f}
    if(f.apple.device && document.querySelector('.ld-key-google')){
      document.querySelector('.ld-key-google').classList.add('d-none')
    }
    if(f.android.device && document.querySelector('.ld-key-apple')){
      document.querySelector('.ld-key-apple').classList.add('d-none')
    }
    if(!f.apple.device && !f.android.device && document.querySelector('.ld-key-google')){
      document.querySelector('.ld-key-google').classList.add('td-sp-t-1')
    }
    var bind = function () {
      if (!document.querySelector('.ld-key-slader-block .row .ld-key-tabs-item')) {
        setTimeout(function () {
          bind()
        }, 1000)
      } else {
        function debounce(callback, wait, immediate) {
          let timeout = null

          return function () {
            const callNow = immediate && !timeout
            const next = () => callback.apply(this, arguments)

            clearTimeout(timeout)
            timeout = setTimeout(next, wait)

            if (callNow) {
              next()
            }
          }
        }
        var bindTab = function(){
          document.querySelectorAll('.radio-button .radio-button-element').forEach(function (item,index){
            item.addEventListener('change', function(){
              showTabForm(index%2)
            })
          })
        }
        var showTabForm = function (index){
          var beforeIndex = (index+1)%2
          var beforeContent = document.querySelectorAll('.tab-content')[beforeIndex];
          var nextContent = document.querySelectorAll('.tab-content')[index];
          beforeContent.classList.remove('d-block')
          beforeContent.classList.add('d-none')
          nextContent.classList.remove('d-none')
          nextContent.classList.add('d-block')
          if(document.querySelector('#form .d-block .radio-button')) {
            document.querySelectorAll('#form .d-block .radio-button')[index].click()
          }
        }
        var bindTabInit = function (){
          if(document.querySelector('#form .radio-button-element')){
            bindTab()
          }  else{
            setTimeout(function (){
              bindTabInit()
            },500)
          }
        }
        setTimeout(function (){
          bindTabInit()
        },1000)

        document.querySelectorAll('.rt-tabs-navigation__item').forEach(function (tab){
          tab.addEventListener('click',bindTab)
        })
        document.body.classList.add('land-key');

        var setHeight = debounce(function () {
          var height = document.querySelector('.ld-key-tabs-item--active').clientHeight
          document.querySelector('.ld-key-tabs-content').style.minHeight = height + 'px';
          setTimeout(function (){
            var height = document.querySelector('.ld-key-tabs-item--active').clientHeight
            document.querySelector('.ld-key-tabs-content').style.minHeight = height + 'px';
          },100)
        }, 100)
        var removeMore = function () {
          var more = document.querySelector('.ld-key-tab-show-more-active')
          if (more) {
            more.classList.remove('ld-key-tab-show-more-active')
            setHeight()
          }

        }
        setHeight()

        window.addEventListener('resize', setHeight);
        document.querySelectorAll('.ld-key-tabs-nav-item').forEach(function (item) {
          item.addEventListener('click', function () {
            if (!item.classList.contains('ld-key-tabs-nav-item--active')) {
              var index = item.getAttribute('data-index') - 0;
              document.querySelector('.ld-key-tabs-nav-item--active').classList.remove('ld-key-tabs-nav-item--active')
              document.querySelector('.ld-key-tabs-item--active').classList.remove('ld-key-tabs-item--active')
              document.querySelectorAll('.ld-key-tabs-item')[index].classList.add('ld-key-tabs-item--active')
              item.classList.add('ld-key-tabs-nav-item--active');
              setHeight(index)
              activeSlideIndex = index
              timer()
              removeMore()

            }
          })
        })
        document.querySelectorAll('.ld-key-tabs-item').forEach(function (wrap) {
          var showMore = wrap.querySelector('.ld-key-tab-show-more');
          var showLess = wrap.querySelector('.ld-key-tab-show-less');
          showMore.addEventListener('click', function () {
            removeMore()
            showMore.classList.add('ld-key-tab-show-more-active')
            showLess.classList.remove('md-d-none')
            showLess.classList.add('md-d-block')
            setTimeout(() => {
              setHeight()
            }, 0)
          })
          if(showLess) {
            showLess.addEventListener('click', function () {
              removeMore()
              showLess.classList.remove('md-d-block')
              showLess.classList.add('md-d-none')
              setTimeout(() => {
                setHeight()
              }, 0)
            })
          }

        })
        document.querySelectorAll('.ld-key-tab-show-more').forEach(function (item) {
          item.addEventListener('click', function () {
            removeMore()
            item.classList.add('ld-key-tab-show-more-active')
            setTimeout(() => {
              setHeight()
            }, 0)

          })
        })
        var tabsSliderActiveItems = [0, 0, 0, 0, 0];
        var xDown = [null, null, null, null, null];
        var yDown = [null, null, null, null, null];
        var timeout = null;
        var stopTimer = false
        var activeSlideIndex = 0;
        var timer = function(){
          if(document.querySelector('.ld-key-tabs-paginator-item')) {
            if (timeout) {
              clearTimeout(timeout)
            }
            timeout = setTimeout(function () {
              tabsSliderActiveItems[activeSlideIndex] = (tabsSliderActiveItems[activeSlideIndex] + 1) % 3;
              document.querySelectorAll('.ld-key-tabs-item')[activeSlideIndex].querySelector('.ld-key-tabs-paginator-item--active').classList.remove('ld-key-tabs-paginator-item--active')
              document.querySelectorAll('.ld-key-tabs-item')[activeSlideIndex].querySelector('.ld-key-tabs-slider-item--active').classList.remove('ld-key-tabs-slider-item--active')
              document.querySelectorAll('.ld-key-tabs-item')[activeSlideIndex].querySelectorAll('.ld-key-tabs-slider-item')[tabsSliderActiveItems[activeSlideIndex]].classList.add('ld-key-tabs-slider-item--active')
              document.querySelectorAll('.ld-key-tabs-item')[activeSlideIndex].querySelectorAll('.ld-key-tabs-paginator-item')[tabsSliderActiveItems[activeSlideIndex]].classList.add('ld-key-tabs-paginator-item--active')
              timer();
            }, 3000)
          }
        }
        timer();

        document.querySelectorAll('.ld-key-tabs-paginator-item').forEach(function (item) {
          item.addEventListener('click', function () {
            if (!item.classList.contains('ld-key-tabs-paginator-item--active')) {
              var tabIndex = item.getAttribute('data-tab-index') - 0;
              var slideIndex = item.getAttribute('data-slide-index') - 0;
              document.querySelectorAll('.ld-key-tabs-item')[tabIndex].querySelector('.ld-key-tabs-paginator-item--active').classList.remove('ld-key-tabs-paginator-item--active')
              tabsSliderActiveItems[tabIndex] = slideIndex
              document.querySelectorAll('.ld-key-tabs-item')[tabIndex].querySelector('.ld-key-tabs-slider-item--active').classList.remove('ld-key-tabs-slider-item--active')
              document.querySelectorAll('.ld-key-tabs-item')[tabIndex].querySelectorAll('.ld-key-tabs-slider-item')[slideIndex].classList.add('ld-key-tabs-slider-item--active')
              item.classList.add('ld-key-tabs-paginator-item--active');
            }
          })
        })
        document.querySelectorAll('.ld-key-tabs-arrows-right').forEach(function (item) {
          item.addEventListener('click', function () {
            var tabIndex = item.getAttribute('data-tab-index') - 0;
            var slideIndex = tabsSliderActiveItems[tabIndex];
            slideIndex = (slideIndex + 1) % 3
            tabsSliderActiveItems[tabIndex] = slideIndex
            removeMore()
            document.querySelectorAll('.ld-key-tabs-item')[tabIndex].querySelector('.ld-key-tabs-paginator-item--active').classList.remove('ld-key-tabs-paginator-item--active')
            document.querySelectorAll('.ld-key-tabs-item')[tabIndex].querySelectorAll('.ld-key-tabs-paginator-item')[slideIndex].classList.add('ld-key-tabs-paginator-item--active')
            document.querySelectorAll('.ld-key-tabs-item')[tabIndex].querySelector('.ld-key-tabs-slider-item--active').classList.remove('ld-key-tabs-slider-item--active')
            document.querySelectorAll('.ld-key-tabs-item')[tabIndex].querySelectorAll('.ld-key-tabs-slider-item')[slideIndex].classList.add('ld-key-tabs-slider-item--active')
          })
        })
        document.querySelectorAll('.ld-key-tabs-arrows-left').forEach(function (item) {
          item.addEventListener('click', function () {
            removeMore()
            var tabIndex = item.getAttribute('data-tab-index') - 0;
            var slideIndex = tabsSliderActiveItems[tabIndex];
            slideIndex = (slideIndex - 1 + 3) % 3
            tabsSliderActiveItems[tabIndex] = slideIndex
            document.querySelectorAll('.ld-key-tabs-item')[tabIndex].querySelector('.ld-key-tabs-paginator-item--active').classList.remove('ld-key-tabs-paginator-item--active')
            document.querySelectorAll('.ld-key-tabs-item')[tabIndex].querySelectorAll('.ld-key-tabs-paginator-item')[slideIndex].classList.add('ld-key-tabs-paginator-item--active')
            document.querySelectorAll('.ld-key-tabs-item')[tabIndex].querySelector('.ld-key-tabs-slider-item--active').classList.remove('ld-key-tabs-slider-item--active')
            document.querySelectorAll('.ld-key-tabs-item')[tabIndex].querySelectorAll('.ld-key-tabs-slider-item')[slideIndex].classList.add('ld-key-tabs-slider-item--active')
          })
        })
        document.querySelectorAll('.ld-key-tabs-slider').forEach(function (item) {
          item.addEventListener('touchstart', function (event) {

            var tabIndex = item.getAttribute('data-tab-index') - 0;
            yDown[tabIndex] = event.touches[0].clientY
            xDown[tabIndex] = event.touches[0].clientX;
          })
          item.addEventListener('touchmove', function (event) {
            var tabIndex = item.getAttribute('data-tab-index') - 0;
            if (!xDown[tabIndex] || !yDown[tabIndex]) {
              return;
            }
            var xUp = event.touches[0].clientX;
            var yUp = event.touches[0].clientY;
            var xDiff = xDown[tabIndex] - xUp;
            var yDiff = yDown[tabIndex] - yUp;
            var slideIndex = tabsSliderActiveItems[tabIndex];
            var size = 3;
            var prev = (slideIndex - 1 + size) % size;
            var next = (slideIndex + 1) % size;
            if (Math.abs(xDiff) > Math.abs(yDiff)) {
              if (this.preventScroll) {
                event.preventDefault();
              }
              if (xDiff > 0) {
                slideIndex = next
              } else {
                slideIndex = prev
              }
            }
            xDown[tabIndex] = null
            yDown[tabIndex] = null
            tabsSliderActiveItems[tabIndex] = slideIndex
            removeMore()
            document.querySelectorAll('.ld-key-tabs-item')[tabIndex].querySelector('.ld-key-tabs-paginator-item--active').classList.remove('ld-key-tabs-paginator-item--active')
            document.querySelectorAll('.ld-key-tabs-item')[tabIndex].querySelectorAll('.ld-key-tabs-paginator-item')[slideIndex].classList.add('ld-key-tabs-paginator-item--active')
            document.querySelectorAll('.ld-key-tabs-item')[tabIndex].querySelector('.ld-key-tabs-slider-item--active').classList.remove('ld-key-tabs-slider-item--active')
            document.querySelectorAll('.ld-key-tabs-item')[tabIndex].querySelectorAll('.ld-key-tabs-slider-item')[slideIndex].classList.add('ld-key-tabs-slider-item--active')
          })
        })

      }
    }
    bind()
  }
};
</script>

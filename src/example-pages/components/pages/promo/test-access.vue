<template>
  <div class="wrapper is-b2b">
    <div class="wc-inline">
      <rt-banner :without-empty-column='true' :without-second-empty-column='true' :is-fullscreen-image='true' content-height='500px' content-mobile-height='400px'>
        <rt-banner-item :has-image-on-mobile='true' background-image="/static/images/B2B/AKS_1920x500.jpg">
          <rt-color-line-text>
            <rt-template slot='label'>Аудиоконференция</rt-template>
            <rt-template slot='content'>Услышать друг друга, где бы вы ни находились</rt-template>
          </rt-color-line-text>
          <rt-button class='rt-button-orange'>Оставить заявку</rt-button>
        </rt-banner-item>
      </rt-banner>
    </div>
    <div class="custom-pattern-block">
      <div class="rt-container rt-space-vertical4">
        <div class="rt-col-7">
          <h2 class="rt-font-h2 rt-font-bold color-white">Ваша компания легко организует голосовое совещание через
            аудиоконференцию вне офиса даже во время карантина</h2>
        </div>
      </div>
    </div>
    <div class="rt-space-vertical3">
      <div class="rt-container">
        <div class="rt-col-7">
          <h2 class="rt-font-h2 rt-font-bold rt-space-bottom">Оставайтесь дома. <br>Пользуйтесь цифровыми сервисами</h2>
        </div>
      </div>
      <div class="wc-inline">
        <rt-benefit-block :columns-quantity="3" :has-icon="true" icon-size="80px">
          <rt-benefit-item>
            <template slot="image">
              <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80">
                <g fill="none" fill-rule="evenodd">
                  <circle cx="40" cy="40" r="40" fill="#101828"/>
                  <g fill="#FFF" fill-rule="nonzero">
                    <path d="M41.96 22.5c.367 0 .735.105 1.137.297.473.753 1.523 2.608 2.1 4.936.123.472.14.962.053 1.452l-1.19 6.702a1.97 1.97 0 00.438 1.628c.384.455.944.718 1.522.718h11.935c.595 0 1.12.384 1.242.91.035.174.053.384.053.595 0 .717-.245 1.154-.822 1.452-.63.315-1.068.91-1.173 1.61-.105.7.14 1.4.648 1.89.385.367.385.717.385.84 0 .455-.42.945-.823 1.242a2.02 2.02 0 00-.788 1.418c-.052.56.14 1.12.508 1.54.105.122.297.385.297.857 0 .49-.507 1.068-.857 1.278a2.21 2.21 0 00-.665 3.01c.123.193.332.612.332 1.278 0 .665-.892 1.364-1.732 1.364H33.91l-2.66-1.312v-14.14l1.627-1.225c.175-.14.333-.28.49-.455 1.348-1.54 5.81-6.86 6.948-10.623.087-.28.122-.577.122-.892v-5.722c0-.053.053-.106.07-.123.473-.35.963-.525 1.453-.525zm0-1.75c-1.068 0-1.925.455-2.485.858-.49.367-.788.927-.788 1.522v5.74c0 .123-.017.263-.052.385-1.068 3.552-5.845 9.117-6.598 9.975-.07.07-.14.14-.21.192l-1.767 1.33c-.35.263-.56.666-.56 1.103v14.577c0 .526.297 1.015.787 1.243l2.923 1.418c.192.104.42.14.63.14h20.72c1.697 0 3.482-1.383 3.482-3.115 0-1.068-.332-1.803-.595-2.206-.122-.21-.087-.472.123-.612.7-.455 1.645-1.505 1.645-2.747 0-1.033-.455-1.716-.735-2.03-.105-.123-.087-.316.035-.403.49-.385 1.505-1.33 1.505-2.643 0-1.015-.508-1.715-.928-2.117a.406.406 0 01.105-.665c.718-.367 1.785-1.207 1.785-3.01 0-.367-.035-.682-.105-.98-.297-1.347-1.54-2.275-2.94-2.275H46.004a.247.247 0 01-.245-.28l1.19-6.703a5.367 5.367 0 00-.07-2.17c-.666-2.695-1.89-4.795-2.38-5.53a1.474 1.474 0 00-.543-.49 4.278 4.278 0 00-1.996-.507z"/>
                    <path d="M29.5 40.42V57.5h-8.75V40.42h8.75zm0-1.75h-8.75c-.963 0-1.75.787-1.75 1.75V57.5c0 .962.787 1.75 1.75 1.75h8.75c.963 0 1.75-.788 1.75-1.75V40.42c0-.963-.787-1.75-1.75-1.75z"/>
                  </g>
                  <path d="M12 12h56v56H12z"/>
                </g>
              </svg>
            </template>
            <template slot="description">
              <h4 class="rt-font-h4 rt-font-bold rt-space-bottom05">Без затрат</h4>
              <p class="rt-font-small-paragraph color-main07">Подключайтесь и участвуйте  в аудиоконференции не
                выходя из дома. Совещайтесь с вашими коллегами  из разных городов удалённо  и без командировок</p>
            </template>
          </rt-benefit-item>
          <rt-benefit-item>
            <template slot="image">
              <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80">
                <g fill="none" fill-rule="evenodd">
                  <circle cx="40" cy="40" r="40" fill="#101828"/>
                  <path fill="#FFF" fill-rule="nonzero" d="M59.25 25.75v3.5c0 5.477-1.138 13.633-3.028 17.815-2.607 5.74-7.507 13.3-16.222 17.045-8.715-3.745-13.633-11.305-16.223-17.045-1.89-4.183-3.027-12.355-3.027-17.815v-3.5h38.5zM61 24H19v5.25c0 5.18 1.05 13.808 3.185 18.532C25.107 54.24 30.48 62.185 40 66c9.52-3.815 14.892-11.76 17.815-18.218C59.95 43.058 61 34.43 61 29.25V24z"/>
                  <path d="M12 17h56v56H12z"/>
                </g>
              </svg>
            </template>
            <template slot="description">
              <h4 class="rt-font-h4 rt-font-bold rt-space-bottom05">Под защитой</h4>
              <p class="rt-font-small-paragraph color-main07">Добавляйтесь по паролю, приглашению  или звонку в
                конференцию, защищённую  от несанкционированного доступа. Бесконтактные совещания безопасны</p>
            </template>
          </rt-benefit-item>
          <rt-benefit-item>
            <template slot="image">
              <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80">
                <g fill="none" fill-rule="evenodd">
                  <circle cx="40" cy="40" r="40" fill="#101828"/>
                  <path fill="#FFF" fill-rule="nonzero" d="M59.25 26l.017 22.75-38.517.017L20.732 26H59.25zm.017-1.75H20.733c-.944 0-1.732.787-1.732 1.732V48.75c0 .962.787 1.75 1.732 1.75H59.25c.962 0 1.733-.788 1.733-1.733V25.982c.017-.944-.77-1.732-1.715-1.732z"/>
                  <path fill="#FFF" fill-rule="nonzero" d="M20.75 43.5h38.5v1.75h-38.5zm21 7h1.75v5.25h-1.75zm-5.25 0h1.75v5.25H36.5z"/>
                  <path fill="#FFF" fill-rule="nonzero" d="M33.035 54H47v1.75H33.035zM40 47.858a.878.878 0 00.875-.875c0-.49-.385-.875-.875-.875s-.875.385-.875.875.402.875.875.875M28.608 36.517a.859.859 0 010 1.716.86.86 0 010-1.716zm0-1.75c-1.436 0-2.608 1.173-2.608 2.608s1.172 2.608 2.608 2.608c1.434 0 2.607-1.173 2.607-2.608s-1.172-2.608-2.607-2.608zm22.75-3.5a.86.86 0 01-.001 1.716.86.86 0 01.001-1.716zm0-1.75c-1.435 0-2.608 1.173-2.608 2.608s1.172 2.608 2.608 2.608a2.615 2.615 0 002.607-2.608 2.603 2.603 0 00-2.608-2.608z"/>
                  <path fill="#FFF" fill-rule="nonzero" d="M49.17 32.23l-7.788 3.92-1.75-5.25-9.572 4.83c.42.402.7.962.77 1.575l7.788-3.938 1.75 5.25 9.572-4.812c-.42-.42-.7-.962-.77-1.575z"/>
                  <path d="M12 12h56v56H12z"/>
                </g>
              </svg>
            </template>
            <template slot="description">
              <h4 class="rt-font-h4 rt-font-bold rt-space-bottom05">Со статистикой</h4>
              <p class="rt-font-small-paragraph color-main07">Отслеживайте статистику о проведённых конференциях,
                следите за отчётами, где отображается информация о дате, времени и количестве участников</p>
            </template>
          </rt-benefit-item>
        </rt-benefit-block>
      </div>
    </div>
    <div class="rt-space-vertical3 custom-bg-color">
      <div class="rt-container">
        <div class="rt-col-8 rt-font-h2 rt-font-bold rt-space-bottom2">Заголовок про шаги</div>
      </div>
      <div class="wc-inline">
        <rt-carousel :hide-arrows="true">
          <rt-carousel-slide slide-classes="rt-col-4 d-flex">
            <rt-card :equal-padding="true"
                     background-image="/static/images/B2B/img-1.jpg"
                     :full-width-top-image="true"
                     :has-gradient-over-image="true">
              <template slot="content">
                <p class="rt-font-paragraph rt-font-bold rt-space-top">Зарегистрируйтесь</p>
                <p class="rt-font-small-paragraph rt-space-bottom color-main05 rt-space-top05">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
              </template>
            </rt-card>
          </rt-carousel-slide>
          <rt-carousel-slide slide-classes="rt-col-4 d-flex">
            <rt-card :equal-padding="true"
                     background-image="/static/images/B2B/img-2.jpg"
                     :full-width-top-image="true"
                     :has-gradient-over-image="true">
              <template slot="content">
                <p class="rt-font-paragraph rt-font-bold rt-space-top">Создайте конференцию</p>
                <p class="rt-font-small-paragraph rt-space-bottom3 color-main05 rt-space-top05">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
              </template>
            </rt-card>
          </rt-carousel-slide>
          <rt-carousel-slide slide-classes="rt-col-4 d-flex">
            <rt-card :equal-padding="true"
                     background-image="/static/images/B2B/img.jpg"
                     :full-width-top-image="true"
                     :has-gradient-over-image="true">
              <template slot="content">
                <p class="rt-font-paragraph rt-font-bold rt-space-top">Добавляйте участников</p>
                <p class="rt-font-small-paragraph rt-space-bottom3 color-main05 rt-space-top05">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
              </template>
            </rt-card>
          </rt-carousel-slide>
          <rt-carousel-slide slide-classes="rt-col-4 d-flex">
            <rt-card :equal-padding="true"
                     background-image="/static/images/B2B/img456.png"
                     :full-width-top-image="true"
                     :has-gradient-over-image="true">
              <template slot="content">
                <p class="rt-font-paragraph rt-font-bold rt-space-top">Проводите совещание</p>
                <p class="rt-font-small-paragraph rt-space-bottom3 color-main05 rt-space-top05">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
              </template>
            </rt-card>
          </rt-carousel-slide>
          <rt-carousel-slide slide-classes="rt-col-4 d-flex">
            <rt-card :equal-padding="true"
                     background-image="/static/images/B2B/img-1.jpg"
                     :full-width-top-image="true"
                     :has-gradient-over-image="true">
              <template slot="content">
                <p class="rt-font-paragraph rt-font-bold rt-space-top">Демонстрируйте файлы</p>
                <p class="rt-font-small-paragraph rt-space-bottom3 color-main05 rt-space-top05">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
              </template>
            </rt-card>
          </rt-carousel-slide>
          <rt-carousel-slide slide-classes="rt-col-4 d-flex">
            <rt-card :equal-padding="true"
                     background-image="/static/images/B2B/img-1.jpg"
                     :full-width-top-image="true"
                     :has-gradient-over-image="true">
              <template slot="content">
                <p class="rt-font-paragraph rt-font-bold rt-space-top">Выгружайте документы</p>
                <p class="rt-font-small-paragraph rt-space-bottom3 color-main05 rt-space-top05">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
              </template>
            </rt-card>
          </rt-carousel-slide>
          <rt-carousel-slide slide-classes="rt-col-4 d-flex">
            <rt-card :equal-padding="true"
                     background-image="/static/images/B2B/img-1.jpg"
                     :full-width-top-image="true"
                     :has-gradient-over-image="true">
              <template slot="content">
                <p class="rt-font-paragraph rt-font-bold rt-space-top">Анализируйте статистику</p>
                <p class="rt-font-small-paragraph rt-space-bottom3 color-main05 rt-space-top05">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
              </template>
            </rt-card>
          </rt-carousel-slide>
        </rt-carousel>
      </div>
    </div>
    <div class="wc-inline">
      <div class="rt-container rt-container--mobile-full-width">
        <div class="rt-col">
          <div class="row">
            <div class="rt-col-2 td-d-none"></div>
            <div class="rt-col-8 rt-col-td-6 rt-col-md-3">
              <h2 class="rt-font-center rt-space-top4 rt-space-bottom rt-font-bold">Преимущества сервиса</h2>
              <p class="rt-font-center rt-font-paragraph rt-space-bottom3">Человек усваивает 10% текста, 20% на слух,
                30% глазами и 50% из того, что видит  и слышит одновременно. При выборе аудиоконференции в качестве
                формата проведения совещаний ― максимально эффективное восприятие информации</p>
            </div>
            <div class="rt-col-2 td-d-none"></div>
          </div>
          <div class="row">
            <rt-card-carousel>
              <rt-card background-color-type="" :background-blur="5" :is-white-color="true" class="carousel-card carousel-card--active custom-color">
                <template slot="content">
                  <div class="rt-space-top15 rt-space-bottom">
                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80">
                      <path fill="#FFF" fill-rule="evenodd" d="M65.333 53.8c5.734 1.5 10 6.667 10 12.867V80H72V66.667c0-4.334-2.8-8-6.667-9.4zm-30-7.133v4.066L32 52.933V52.9l-4.767 3.2-.833.567H8.667v16.666H32V56.667h3.333v16.7c0 1.833-1.5 3.333-3.333 3.333H8.667a3.343 3.343 0 01-3.334-3.333v-16.7c0-1.834 1.5-3.334 3.334-3.334h16.7l9.966-6.666zM13.667 63.333a1.667 1.667 0 11-.002 3.334 1.667 1.667 0 01.002-3.334zm6.666 0a1.668 1.668 0 010 3.334 1.667 1.667 0 010-3.334zm6.667 0a1.668 1.668 0 11-.002 3.336A1.668 1.668 0 0127 63.333zM45.333 0c7.234 0 13.867 3.3 18.2 9.033 1.95 2.572 3.085 5.143 3.386 7.633H67c2.767 0 5 2 5 4.434v11.1c0 2.467-2.267 4.467-5.033 4.467H67C67 47.9 62.533 60 52.733 60h-7.4C43.5 59.967 42 57.733 42 55l.004-.243c.085-2.653 1.55-4.757 3.33-4.757h6.633c1.833 0 3.333 2.233 3.333 5l-.004.243c-.01.343-.045.677-.1.999 5.587-2.012 8.47-10.845 8.47-19.575h-1.014c-3.462 5.975-9.926 10-17.319 10-7.392 0-13.856-4.025-17.318-10h-4.348c-2.767 0-5-2-5-4.434v-11.1c0-2.466 2.233-4.466 5-4.466h.08c.301-2.49 1.437-5.062 3.386-7.634C31.467 3.3 38.1 0 45.333 0zm6.234 53.333h-5.834c-.166.3-.4.867-.4 1.667s.234 1.367.4 1.633l5.834.034c.166-.3.4-.867.4-1.667s-.234-1.4-.4-1.667zM45.333 10c-9.2 0-16.666 7.467-16.666 16.667 0 9.2 7.466 16.666 16.666 16.666S62 35.867 62 26.667 54.533 10 45.333 10zM25.3 20h-1.633C22.7 20 22 20.6 22 21.133v11.1c0 .5.7 1.1 1.667 1.1H25.3V20zM67 20h-1.667v13.333h1.634c.966 0 1.7-.6 1.7-1.133V21.1c0-.5-.7-1.1-1.667-1.1zM45.333 3.333c-6.166 0-11.833 2.8-15.533 7.7-1.49 1.943-2.386 3.844-2.686 5.633h.9c3.463-5.974 9.927-10 17.32-10 7.392 0 13.856 4.026 17.318 10h.9c-.3-1.78-1.196-3.664-2.685-5.633-3.7-4.9-9.367-7.7-15.534-7.7z"/>
                    </svg>
                  </div>
                  <p class="rt-font-label">1/5</p>
                  <h4 class="rt-font-h4 rt-font-bold rt-space-top">Организуйте совещание</h4>
                  <ul class="rt-ordered-list rt-space-top color-white">
                    <li class="rt-ordered-list__item rt-font-paragraph">Бронируйте конференции в удобное время</li>
                    <li class="rt-ordered-list__item rt-font-paragraph">Отправляйте приглашения через e-mail и sms</li>
                  </ul>
                </template>
              </rt-card>
              <rt-card background-color-type="slate" :background-blur="5" :is-white-color="true" class="carousel-card">
                <template slot="content">
                  <div class="rt-space-top15 rt-space-bottom">
                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80">
                      <path fill="#FFF" fill-rule="evenodd" d="M61.667 38.667C71.8 38.667 80 46.867 80 57s-8.2 18.333-18.333 18.333c-10.134 0-18.334-8.2-18.334-18.333s8.2-18.333 18.334-18.333zm0 3.333c-8.267 0-15 6.733-15 15s6.733 15 15 15c8.266 0 15-6.733 15-15s-6.734-15-15-15zm1.666 6.667v6.666H70v3.334h-6.667v6.666H60v-6.666h-6.667v-3.334H60v-6.666h3.333zM70 25.333c3.667 0 6.667 3 6.667 6.667v6.667h-3.334V32c0-1.833-1.5-3.333-3.333-3.333H56.033A10.65 10.65 0 0054 25.333zm-46.667 0C27 25.333 30 28.333 30 32v6.667h-3.333V32c0-1.833-1.5-3.333-3.334-3.333H6.667A3.343 3.343 0 003.333 32v6.667H0V32c0-3.667 3-6.667 6.667-6.667zm23.334 0c3.666 0 6.666 3 6.666 6.667v5a21.993 21.993 0 00-3.166 1.667H50V32c0-1.833-1.5-3.333-3.333-3.333H32.7a10.686 10.686 0 00-2.033-3.334zm15-20c4.6 0 8.333 3.734 8.333 8.334S66.267 22 61.667 22s-8.334-3.733-8.334-8.333 3.734-8.334 8.334-8.334zm-23.334 0c4.6 0 8.334 3.734 8.334 8.334S42.933 22 38.333 22 30 18.267 30 13.667s3.733-8.334 8.333-8.334zM15 5.333c4.6 0 8.333 3.734 8.333 8.334S19.6 22 15 22s-8.333-3.733-8.333-8.333S10.4 5.333 15 5.333zm46.667 3.334c-2.767 0-5 2.233-5 5 0 2.766 2.233 5 5 5 2.766 0 5-2.234 5-5 0-2.767-2.234-5-5-5zm-23.334 0c-2.766 0-5 2.233-5 5 0 2.766 2.234 5 5 5 2.767 0 5-2.234 5-5 0-2.767-2.233-5-5-5zM15 8.667c-2.767 0-5 2.233-5 5 0 2.766 2.233 5 5 5s5-2.234 5-5c0-2.767-2.233-5-5-5z"/>
                    </svg>
                  </div>
                  <p class="rt-font-label">2/5</p>
                  <h4 class="rt-font-h4 rt-font-bold rt-space-top">Добавляйте участников</h4>
                  <ul class="rt-ordered-list rt-space-top color-white">
                    <li class="rt-ordered-list__item rt-font-paragraph">Подключайте к конференц-связи за 1 минуту</li>
                    <li class="rt-ordered-list__item rt-font-paragraph">Добавляйте к конференции до 500 человек</li>
                  </ul>
                </template>
              </rt-card>
              <rt-card background-color-type="green-high" :background-blur="5" :is-white-color="true" class="carousel-card">
                <template slot="content">
                  <div class="rt-space-top15 rt-space-bottom">
                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80">
                      <path fill="#FFF" fill-rule="evenodd" d="M40.3 70c2.156 0 4 1.39 4.684 3.333h21.683v3.334H44.984C44.3 78.61 42.456 80 40.3 80s-4-1.39-4.684-3.333h-21.95v-3.334h21.95C36.3 71.39 38.144 70 40.3 70zm.033 3.333c-.9 0-1.666.734-1.666 1.667s.733 1.667 1.666 1.667c.934 0 1.667-.734 1.667-1.667s-.767-1.667-1.667-1.667zm-5.133-16.7c2.15 0 3.992 1.404 4.68 3.334h26.787V63.3H39.884c-.684 1.944-2.528 3.333-4.684 3.333s-4-1.389-4.684-3.333h-16.85v-3.333h16.85c.684-1.945 2.528-3.334 4.684-3.334zm.033 3.334a1.67 1.67 0 00-1.666 1.666 1.67 1.67 0 001.666 1.667 1.65 1.65 0 001.667-1.667c0-.933-.767-1.666-1.667-1.666zm4.9-16.667a4.979 4.979 0 014.696 3.333h21.838v3.334h-21.85c-.683 1.944-2.528 3.333-4.684 3.333-2.155 0-4-1.39-4.683-3.333H13.667v-3.334H35.45c.683-1.944 2.528-3.333 4.683-3.333zm.067 3.333c-.933 0-1.667.767-1.667 1.667 0 .933.767 1.667 1.667 1.667.933 0 1.667-.734 1.667-1.667s-.767-1.667-1.667-1.667zm-.067-26.766c3.634 0 7.067 1.433 9.634 4.033l1.166 1.2-2.366 2.333-1.167-1.166c-3.9-3.967-10.733-3.934-14.633.066L31.633 27.5l-2.366-2.333 1.166-1.2a13.487 13.487 0 019.7-4.1zm.034-10c6.6 0 12.8 2.6 17.466 7.333l1.167 1.167-2.333 2.366-1.167-1.166c-4.033-4.1-9.4-6.334-15.1-6.334-5.767 0-11.167 2.3-15.233 6.434L23.8 20.833 21.433 18.5l1.167-1.2c4.667-4.8 10.933-7.433 17.567-7.433zM39.933 0C49.467 0 58.467 3.767 65.2 10.6l1.167 1.167-2.334 2.366-1.166-1.166c-6.134-6.2-14.267-9.634-22.934-9.634-8.733 0-16.933 3.467-23.1 9.8L15.7 14.3l-2.367-2.333 1.167-1.2C21.267 3.833 30.3 0 39.933 0z"/>
                    </svg>
                  </div>
                  <p class="rt-font-label">3/5</p>
                  <h4 class="rt-font-h4 rt-font-bold rt-space-top">Модерируйте выступления</h4>
                  <ul class="rt-ordered-list rt-space-top color-white">
                    <li class="rt-ordered-list__item rt-font-paragraph">Включайте и отключайте микрофоны участников</li>
                    <li class="rt-ordered-list__item rt-font-paragraph">Продлевайте время в процессе конференции</li>
                  </ul>
                </template>
              </rt-card>
              <rt-card background-color-type="dark-blue" :background-blur="5" :is-white-color="true" class="carousel-card">
                <template slot="content">
                  <div class="rt-space-top15 rt-space-bottom">
                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80">
                      <path fill="#FFF" fill-rule="evenodd" d="M23.343 11.335v3.334H3.3l.034 43.385 73.396-.033-.033-43.352h-16.64l-1.7-3.334H76.73c1.801 0 3.302 1.5 3.269 3.301v43.418a3.31 3.31 0 01-3.302 3.301H46.686l-.001 6.669h6.67v3.335h-26.61v-3.334l6.602-.001v-6.669H3.301c-1.8 0-3.301-1.467-3.301-3.334V14.636c0-1.8 1.5-3.301 3.301-3.301h20.042zm20.008 50.02h-6.67v6.669h6.67v-6.669zm-3.335-8.37c.934 0 1.668.734 1.668 1.667 0 .934-.767 1.668-1.668 1.668-.9 0-1.667-.734-1.667-1.668 0-.933.767-1.667 1.667-1.667zm36.682-4.969v3.335H3.335v-3.335h73.363zM30.046 8v13.339h6.669l-8.337 13.339-8.336-13.34h6.669V8h3.335zM51.72 8l8.337 13.339h-6.67v13.339h-3.334v-13.34h-6.67L51.721 8zM30.713 24.674h-4.669l2.334 3.701 2.335-3.701zM51.72 14.303l-2.3 3.701h4.634l-2.334-3.701zM45.685 11.3l-2.3 3.368H33.346V11.3h12.338z"/>
                    </svg>
                  </div>
                  <p class="rt-font-label">4/5</p>
                  <h4 class="rt-font-h4 rt-font-bold rt-space-top">Делитесь материалами</h4>
                  <ul class="rt-ordered-list rt-space-top color-white">
                    <li class="rt-ordered-list__item rt-font-paragraph">Демонстрируйте документы в процессе</li>
                    <li class="rt-ordered-list__item rt-font-paragraph">Обменивайтесь текстовыми сообщениями с участниками</li>
                  </ul>
                </template>
              </rt-card>
              <rt-card background-color-type="" :background-blur="5" :is-white-color="true" class="carousel-card custom-color-2">
                <template slot="content">
                  <div class="rt-space-top15 rt-space-bottom">
                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80">
                      <path fill="#FFF" fill-rule="evenodd" d="M0 80v-3.333h3.333v-20c0-1.834 1.5-3.334 3.334-3.334H20c1.833 0 3.333 1.5 3.333 3.334v20H30V40c0-1.833 1.5-3.333 3.333-3.333h13.334C48.5 36.667 50 38.167 50 40v36.667h6.667V23.333C56.667 21.5 58.167 20 60 20h13.333c1.834 0 3.334 1.5 3.334 3.333v53.334H80V80H0zm73.333-56.667H60v53.334h13.333V23.333zM46.667 40H33.333v36.667h13.334V40zM20 56.667H6.667v20H20v-20zM50 0v13.333h-3.333l-.001-7.645-23.83 23.83-2.356-2.357L44.307 3.333h-7.64V0H50z"/>
                    </svg>
                  </div>
                  <p class="rt-font-label">5/5</p>
                  <h4 class="rt-font-h4 rt-font-bold rt-space-top">Анализируйте итоги</h4>
                  <ul class="rt-ordered-list rt-space-top color-white">
                    <li class="rt-ordered-list__item rt-font-paragraph">Выгружайте файлы для дальнейшей работы</li>
                    <li class="rt-ordered-list__item rt-font-paragraph">Записывайте и прослушивайте конференции онлайн</li>
                  </ul>
                </template>
              </rt-card>
            </rt-card-carousel>
          </div>
        </div>
      </div>
    </div>
    <div class="rt-container">
      <div class="rt-col">
        <div class="color-block--cool-grey05-no-opacity rt-space-horizontal05 rt-space-vertical2 rt-td-space-vertical">
          <div class="row">
            <div class="rt-col-6 rt-col-td-6">
              <div class="rt-space-left15 rt-td-space-horizontal05 rt-td-space-bottom">
                <rt-input placeholder="Откуда вы звоните" :is-b2b-input="true"/>
              </div>
            </div>
            <div class="rt-col-6 rt-col-td-6">
              <div class="flex-end-center rt-td-space-left05 d-md-block rt-md-space-horizontal05">
                <div class="flex-fill rt-md-space-bottom">
                  <rt-input placeholder="Куда вы звоните" :is-b2b-input="true"/>
                </div>
                <div class="d-inline-block rt-space-left rt-space-right15 rt-td-space-right05 rt-md-space-left-none md-d-flex rt-md-space-horizontal-none">
                  <rt-button class="rt-button-orange md-flex-fill">Узнать цены</rt-button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  const componentsList = {};

  export default {
    name: "AppTestAccess",
    components: componentsList,
    mounted() {
//      for(var i = 0; i < document.querySelectorAll('.cardPopup').length; i++){
//        document.querySelectorAll('.cardPopup')[i].addEventListener('click', openAdditionalInfoPopup)
//      }
//
//      function openAdditionalInfoPopup(e) {
//        var parentCard = e.target.closest('.rt-card');
//        shoveContent(parentCard, '.a-p__popup-title', '.rt-font-paragraph');
//        shoveContent(parentCard, '.a-p__popup-description', '.rt-font-small-paragraph');
//        shoveContent(parentCard, '.a-p__popup-benefits-list', '.rt-card__popup-benefits');
//        shoveContent(parentCard, '.a-p__popup-costs', '.rt-card__popup-costs');
//        document.querySelector('.a-p__popup-image').style.backgroundImage = 'url(' + parentCard.querySelector('.additional-possibilities__card-image').src + ')';
//        document.querySelector('.rtb-popup-wrapper').classList.add('rtb-popup-wrapper--active');
//        document.documentElement.style.overflow = 'hidden';
//      }
//      function shoveContent(parentCard, destination, source) {
//        document.querySelector('.rtb-popup-wrapper').querySelector(destination).innerHTML = parentCard.querySelector(source).innerHTML;
//      }
//      window.addEventListener('resize', fixTileHeight);
//      if(window.innerWidth >= 768 && window.innerWidth <= 1024) {
//        fixTileHeight();
//      }
//
//      function fixTileHeight() {
//        if(window.innerWidth >= 768 && window.innerWidth <= 1024) {
//          var maxHeight = 0;
//          var tileList = document.querySelectorAll('.tile__item');
//          for (var i = 0; i < tileList.length; i++){
//            if(!(tileList[i].classList.contains('tile__item--double-sized'))){
//              maxHeight = (maxHeight > tileList[i].offsetHeight) ? maxHeight : tileList[i].offsetHeight;
//            }
//          }
//          document.querySelector('.tile__item--double-sized').style.height = maxHeight * 2 + 20 + 'px';
//        } else {
//          document.querySelector('.tile__item--double-sized').style.height = '';
//        }
//
//      }
//
//      document.querySelectorAll('.cardPopup').forEach(function(el){
//        el.addEventListener('click', function(){
//          fixItemsHeight();
//        })
//      });
//
//      function fixItemsHeight() {
//        var maxHeight = 0;
//        var itemList = document.querySelectorAll('.a-p__popup .a-p__popup-benefit .rt-card');
//        itemList.forEach(function(item){
//          maxHeight = (maxHeight > item.offsetHeight) ? maxHeight : item.offsetHeight;
//        });
//        itemList.forEach(function(item){
//          item.style.height = `${maxHeight}px`;
//        });
//      }
    },
    created() {},
    methods: {}
  };
</script>

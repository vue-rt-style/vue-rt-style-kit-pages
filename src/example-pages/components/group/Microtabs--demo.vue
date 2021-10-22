<template>
  <section style="background:#f8f8f8; color:#101828">
    <div class="rt-container">
      <div class="app-content rt-col-12 rt-col-md-3">
        <div class="app-title">
          <h1 class="rt-font-hero sp-b-1">Microtabs</h1>
          <p>Для вывода включенных опций в тарифной карточке было принято группировать их в microtabs. Данный компонент решает сразу 2 проблемы: некотролируемость высоты карточки и отображение простых данных.</p>
          <p>Под капотом microtabs заложена логика подстройки под ширину контейнера, с учетом изменения ширины экрана.</p>
        </div>

        <rt-row class="app-row sp-t-2">
          <rt-col size="5" mobile-size="3">
            <h3 class="sp-b-1">Упрощенный режим (без контента)</h3>
          </rt-col>

          <rt-col size="12">
            <h3 class="sp-t-2 sp-b-1">Обычный режим</h3>
          </rt-col>
          <rt-col size="6" mobile-size="3" class="md-sp-b-2">
            <pre-code :text="spacesView"></pre-code>
          </rt-col>
          <rt-col size="6" mobile-size="3">
          </rt-col>

        </rt-row>
      </div>

      <div class="rt-container">
        <documentation-builder :json="docProps" type="props" class="sp-t-2-1" />
        <documentation-builder :json="docEvents" type="events" class="sp-t-2-1" />
      </div>
    </div>
  </section>
</template>

<script>
import docProps from '@vue-rt-style-kit-molecules-local/components/Microtabs/docs/props.json'
import docEvents from '@vue-rt-style-kit-molecules-local/components/Microtabs/docs/events.json'

export default {
  name: 'MicroTabsComponent',
  data(){
    return {
      docProps,
      docEvents,
      testList: [
        { nav: 'Удаленка', cnt: '<p>Видеоконференции без потери качества сигнала</p>' },
        { nav: 'Оборудование', cnt: '<div>ТВ-приставка <span class="rt-tariff-price--inline">+ 50 руб./мес.</span></div>' },
        { nav: 'Яндекс', cnt: '<p>5 ГБ Яндекс.Диск +</p>' },
        { nav: 'Антивирус', cnt: '<p>Kaspersky Internet Security 2 устройства</p>' }
      ],
      testListHidden: [],
      testBlockWidth: 312,
      cloneShown: false
    }
  },
  computed:{
    sampleView(){
      return `
<div style="max-width:200px">
  <rt-microtabs class="color-block--white sp-h-1 sp-v-0-3">
    <template slot="nav">
      <rt-microtabs-nav theme="flat"><rt-system-icons name="speed 8x" color="main-color"></rt-system-icons></rt-microtabs-nav>
      <rt-microtabs-nav theme="flat"><rt-system-icons name="speed 6x" color="main-color05"></rt-system-icons></rt-microtabs-nav>
      <rt-microtabs-nav theme="flat"><rt-system-icons name="speed 4x" color="main-color03"></rt-system-icons></rt-microtabs-nav>
      <rt-microtabs-nav theme="flat"><rt-system-icons name="speed 2x" color="main-color005"></rt-system-icons></rt-microtabs-nav>
      <rt-microtabs-nav theme="flat"><rt-system-icons name="speed 1x" color="main-color003"></rt-system-icons></rt-microtabs-nav>
    </template>
  </rt-microtabs>
</div>
      `
    },
    spacesView(){
      return `
<rt-microtabs class="color-block--white sp-h-1 sp-v-0-3">
  <template slot="nav">
    <rt-microtabs-nav theme="purple">Акция</rt-microtabs-nav>
    <rt-microtabs-nav>Сервисы</rt-microtabs-nav>
    <rt-microtabs-nav>Мультирум</rt-microtabs-nav>

    <rt-microtabs-nav>Антивирус</rt-microtabs-nav>
    <rt-microtabs-nav>Яндекс Диск</rt-microtabs-nav>
    <rt-microtabs-nav>Просмотр на 5 устройствах</rt-microtabs-nav>
  </template>
  <template slot="cnt">
    <rt-microtabs-cnt>
      <div class="d-flex flex-start-center">
        <rt-system-icons name="breaking" color="purple"></rt-system-icons>
        <p>Ограниченое предложение для вновь подключившихся</p>
      </div>
    </rt-microtabs-cnt>
    <rt-microtabs-cnt>
      <p>Переадресация</p>
      <p>Голосовое меню IVR</p>
      <p>Распределение  звонков</p>
      <p>Статистика и аналитика</p>
    </rt-microtabs-cnt>
    <rt-microtabs-cnt>
      <p>Предоставляет услуги широкополосного доступа в Интернет, интерактивного телевидения, сотовой связи, местной и дальней телефонной связи и др. Занимает лидирующие позиции на российском рынке высокоскоростного доступа в интернет, платного ТВ, хранения и обработки данных, а также кибербезопасности</p>
    </rt-microtabs-cnt>
    <rt-microtabs-cnt>
      <p>Kaspersky Internet Security 2 устройства</p>
    </rt-microtabs-cnt>
    <rt-microtabs-cnt>
      <p>5 ГБ Яндекс.Диск +</p>
    </rt-microtabs-cnt>
    <rt-microtabs-cnt>
      <p>Kaspersky Internet Security 2 устройства</p>
    </rt-microtabs-cnt>
  </template>
</rt-microtabs>
      `
    },
    themesView(){
      return `
<rt-microtabs class="color-block--white sp-h-1 sp-v-0-3">
  <template slot="nav">
    <rt-microtabs-nav theme="orange">Скидка</rt-microtabs-nav>
    <rt-microtabs-nav>Сервисы</rt-microtabs-nav>
    <rt-microtabs-nav>Доп. параметры</rt-microtabs-nav>
  </template>
  <template slot="cnt">
    <rt-microtabs-cnt>
      <p>Доступ к видеосервису Wink с максимальной выгодой до 2 месяцев</p>
    </rt-microtabs-cnt>
    <rt-microtabs-cnt>
      <p>Переадресация</p>
      <p>Голосовое меню IVR</p>
      <p>Распределение  звонков</p>
      <p>Статистика и аналитика</p>
    </rt-microtabs-cnt>
    <rt-microtabs-cnt>
      <p>Переадресация</p>
      <p>Голосовое меню IVR</p>
      <p>Распределение  звонков</p>
      <p>Статистика и аналитика</p>
    </rt-microtabs-cnt>
  </template>
</rt-microtabs>
      `
    },
    noFitView(){
      return `
<rt-microtabs :fit="false" class="color-block--white sp-h-1 sp-v-0-3">
  <template slot="nav">
    <rt-microtabs-nav>Услуги</rt-microtabs-nav>
    <rt-microtabs-nav>История</rt-microtabs-nav>
    <rt-microtabs-nav>Инвестиции</rt-microtabs-nav>
    <rt-microtabs-nav>Инфраструктура</rt-microtabs-nav>
  </template>
  <template slot="cnt">
    <rt-microtabs-cnt>
      <ul>
        <li class="rt-checked-list__item rt-checked-list__item--orange" style="margin-top:0">
          <div>Интернет</div>
          <ul>
            <li class="rt-checked-list__item" style="margin-top:0">Интерактивное телевидение</li>
            <li class="rt-checked-list__item" style="margin-top:0">
              <div>VPN</div>
              <ul>
                <li class="rt-checked-list__item" style="margin-top:0">Видеонаблюдение и умный дом</li>
                <li class="rt-checked-list__item" style="margin-top:0">Умная колонка "Маруся"</li>
              </ul>
            </li>
            <li class="rt-checked-list__item" style="margin-top:0">Облачные услуги</li>
            <li class="rt-checked-list__item" style="margin-top:0">Доступ к банковским услугам на труднодоступных территориях</li>
          </ul>
        </li>
        <li class="rt-checked-list__item rt-checked-list__item--orange" style="margin-top:0">
          <div>Связь</div>
          <ul>
            <li class="rt-checked-list__item" style="margin-top:0">Местная телефонная связь</li>
            <li class="rt-checked-list__item" style="margin-top:0">Сотовая связь</li>
            <li class="rt-checked-list__item" style="margin-top:0">Совместные проекты на базе инфраструктуры сотовых операторов</li>
            <li class="rt-checked-list__item" style="margin-top:0">Универсальные услуги связи (УУС)</li>
          </ul>
        </li>
        <li class="rt-checked-list__item rt-checked-list__item--orange" style="margin-top:0">
          <div>Интеграция цифровых технологий</div>
          <ul>
            <li class="rt-checked-list__item" style="margin-top:0">Электронные цифровые сервисы для медицины</li>
            <li class="rt-checked-list__item" style="margin-top:0">Электронные цифровые сервисы для образования</li>
            <li class="rt-checked-list__item" style="margin-top:0">Развитие проектов «Цифровой регион» («Умный город»)</li>
            <li class="rt-checked-list__item" style="margin-top:0">Другие сервисы</li>
          </ul>
        </li>
        <li class="rt-checked-list__item rt-checked-list__item--orange" style="margin-top:0">
          <div>Обеспечение безопасности</div>
          <ul>
            <li class="rt-checked-list__item" style="margin-top:0">Системы видеонаблюдения</li>
            <li class="rt-checked-list__item" style="margin-top:0">Обеспечение кибербезопасности</li>
            <li class="rt-checked-list__item" style="margin-top:0">Криптошифрование и квантовая защита данных</li>
          </ul>
        </li>
        <li class="rt-checked-list__item rt-checked-list__item--orange" style="margin-top:0">
          <div>Цифровые государственные услуги</div>
          <ul>
            <li class="rt-checked-list__item" style="margin-top:0">Единый портал государственных услуг</li>
            <li class="rt-checked-list__item" style="margin-top:0">Национальная биометрическая система</li>
          </ul>
        </li>
      </ul>
    </rt-microtabs-cnt>
    <rt-microtabs-cnt>
      <p class="sp-b-1">30 декабря 1992 года распоряжением Госкомимущества России создано государственное предприятие «Ростелеком», в состав которого вошли 20 государственных предприятий междугородной и международной связи, а также оборудование связи «Интертелекома».</p>
      <p class="sp-b-1">27 августа 1993 года государственное предприятие связи «Ростелеком» было преобразовано в акционерное общество открытого типа междугородной и международной электрической связи «Ростелеком». Общество зарегистрировано 23 сентября 1993 года.</p>
      <p class="sp-b-1">В 1994 году «Ростелеком» получил лицензию на предоставление услуг междугородной и международной связи. В этом же году «Ростелеком» включён в состав холдинга «Связьинвест».</p>
      <p class="sp-b-1">18 октября 2006 года «Ростелеком» получил сертификат качества своей IP/MPLS сети и стал магистральным Интернет-провайдером.</p>
      <p class="sp-b-1">В декабре 2009 года «Ростелеком» запустил единый портал государственных и муниципальных услуг www.gosuslugi.ru.</p>
      <p class="sp-b-1">С 1 апреля 2014 года Распоряжением Правительства РФ на «Ростелеком» возложена обязанность по оказанию универсальных услуг связи на всей территории Российской Федерации. Также в 2014 году «Ростелеком» назначен единственным исполнителем федеральной программы ликвидации «цифрового неравенства». 3 Марта 2018 года правительство России обязало Министерство связи использовать организацию как единственного поставщика услуги интернет связи в государственных и муниципальных медицинских организациях и учреждениях на период с 2018 по 2019 год.</p>
      <p class="sp-b-1">В ноябре 2017 года Центр компетенций по направлению «Информационная инфраструктура» программы «Цифровая экономика Российской Федерации» (ПАО «Ростелеком») и Рабочая группа «Информационная инфраструктура» при АНО «Цифровая экономика» (ПАО «МегаФон») представили разработанный план мероприятий с предложениями по развитию информационной инфраструктуры для цифровой экономики (5G, «умный» город, телемедицина, дистанционное образование и др.).</p>
      <p>В марте 2018 года компания представила стратегию развития до 2022 года и дивидендную политику за период 2018—2020 гг. Основным вектором развития компании, согласно стратегии, является продолжение трансформации в цифрового партнёра для населения, бизнеса и государства. Основные направления работы: развитие экосистем продуктов, услуг и клиентского сервиса, модернизация технологической платформы, развитие человеческого капитала, повышение эффективности.</p>
    </rt-microtabs-cnt>
    <rt-microtabs-cnt>
      <p class="font-h-m sp-b-1">Венчурные инвестиции</p>
      <p class="sp-b-1">В мае 2015 года Совет директоров «Ростелекома» принял решение о создании корпоративного венчурного фонда, а в сентябре 2015 года фонд «КоммИТ Кэпитал» получил 1,5 млрд рублей</p>
      <p class="sp-b-1">Среди приоритетных направлений инвестиций «КоммИТ Кэпитал» конкурентоспособные продукты для инфраструктуры телекоммуникационных операторов и ЦОД. Кроме того, фонд рассматривает перспективные проекты, создающие новые продукты и услуги для клиентов «Ростелекома» в B2C, B2B и B2G сегментах.</p>
      <p class="sp-b-1">По итогам 2016 года годовая выручка портфельных компаний венчурного фонда «Ростелекома» превысила 1 млрд рублей.</p>
      <p class="sp-b-1">«Ростелеком» в отчётности по МСФО за второй квартал 2018 года сообщил, что 15 мая Группа приобрела дополнительную эмиссию акций B4N Group Limited. В результате сделки доля Группы в B4N Group Limited увеличилась с 18,04 % до 26,08 %. Разработчик ПО для сетей связи Brain4Net пришёл в пайплайн фонда 2 года назад.</p>
      <p class="sp-b-1">В 2018 году «Ростелеком» завершил опытную эксплуатацию сегмента региональной сети, построенного на основе коммутаторов с использованием технологий SDN. На новую инфраструктуру были переведены действующие абоненты компании. Результаты опытной эксплуатации подтвердили функциональную готовность SDN-решения компании Brain4Net к коммерческому использованию в сетях операторов связи.</p>
      <p class="font-h-m sp-b-1">Развитие стартапов</p>
      <p>В 2017 году «Ростелеком», Фонд развития интернет-инициатив и Фонд «Сколково» запустили совместную программу-акселератор по поддержке технологических стартапов. Организаторы будут поддерживать и развивать компании, занимающиеся проектами по созданию оборудования и ПО для виртуализации телекоммуникационных сетей и ЦОДов, а также стартапы в сфере IoT и IIoT, кибербезопасности, видеоаналитики, технологий компьютерного зрения, connected cars, дронов, телемедицины и smart cars...</p>
    </rt-microtabs-cnt>
    <rt-microtabs-cnt>
      <p class="sp-b-1">Первым проектом «Ростелекома» стала прокладка в 1993 году по дну Балтийского моря между датским городом Карлслунде и российским городом Кингисеппом первой в России подводной волоконно-оптической линии «Дания-Россия № 1» общей протяжённостью 1 216 км и ёмкостью 560 Мбит/с. От Кингисеппа до Петербурга и Москвы были построены цифровые радиорелейные линии. Кабель в Данию начал «участие России в создании глобального кольца цифровой связи». Это кольцо замкнулось через два года, когда «Ростелеком» запустил «транссибирскую цифровую радиорелейную линию связи „Москва—Хабаровск“».</p>
      <p class="sp-b-1">В сентябре 2008 года в эксплуатацию была введена подводная кабельная система связи RJCN (Russia Japan Cable Network) между Россией и Японией. Протяжённость морской кабельной системы Находка — Наоэцу составляет 1,8 тыс. км, начальная ёмкость системы — 30 Гб/с. Максимальная пропускная способность линии составляет 640 Гб/с.</p>
      <p class="sp-b-1">В сентябре 2016 года «Ростелеком» завершил строительство подводной волоконно-оптической линии связи «Камчатка-Сахалин-Магадан» общей протяжённостью 1 766 км. Максимальная пропускная способность системы 8 Тбит/с. Реализация проекта заняла 635 дней.</p>
      <p class="sp-b-1">В 2017 году начата реализация проекта «Сахалин — Курильские острова» (Южно-Сахалинск — Курильск — Южно-Курильск — Крабозаводское), что позволит создать высоконадёжную линию связи (подводная часть протяжённостью 900 км и наземная часть — 50 км. Начальная пропускная способность составит 40 Гбит/с. Планируется, что в 2018 году кабель будет построен, завершение всех процедур по пусконаладке формально завершится в 2019 году.</p>
      <p>В феврале 2019 года госоператор «Ростелеком» обеспечил техническую готовность подводной оптоволоконной линии связи от Сахалина до Южных Курил, благодаря которой жители островов Итуруп, Кунашир и Шикотан получили быстрый и недорогой безлимитный интернет.</p>
    </rt-microtabs-cnt>
  </template>
</rt-microtabs>
      `
    },
    inverseBlackViewA(){
      return `
<div class="rt-tariff is--theme-dark is--no-spaces is--no-borders">
  <rt-microtabs class="sp-h-1 sp-t-0-3 sp-b-0-4">
    <template slot="nav">
      <rt-microtabs-nav theme="purple">Доп. параметры</rt-microtabs-nav>
      <rt-microtabs-nav>Антивирус</rt-microtabs-nav>
      <rt-microtabs-nav>Яндекс Диск</rt-microtabs-nav>
    </template>
    <template slot="cnt">
      <rt-microtabs-cnt>
        <p>Переадресация</p>
        <p>Голосовое меню IVR</p>
        <p>Распределение  звонков</p>
        <p>Статистика и аналитика</p>
      </rt-microtabs-cnt>
      <rt-microtabs-cnt>
        <p>Kaspersky Internet Security 2 устройства</p>
      </rt-microtabs-cnt>
      <rt-microtabs-cnt>
        <p>5 ГБ Яндекс.Диск +</p>
      </rt-microtabs-cnt>
    </template>
  </rt-microtabs>
</div>
      `
    },
    inverseBlackViewB(){
      return `
<div class="rt-tariff is--theme-dark is--no-spaces is--no-borders">
  <rt-microtabs class="sp-h-1 sp-t-0-3 sp-b-0-4">
    <template slot="nav">
      <rt-microtabs-nav theme="orange">Доп. параметры</rt-microtabs-nav>
      <rt-microtabs-nav>Антивирус</rt-microtabs-nav>
      <rt-microtabs-nav>Яндекс Диск</rt-microtabs-nav>
    </template>
    <template slot="cnt">
      <rt-microtabs-cnt>
        <p>Переадресация</p>
        <p>Голосовое меню IVR</p>
        <p>Распределение  звонков</p>
        <p>Статистика и аналитика</p>
      </rt-microtabs-cnt>
      <rt-microtabs-cnt>
        <p>Kaspersky Internet Security 2 устройства</p>
      </rt-microtabs-cnt>
      <rt-microtabs-cnt>
        <p>5 ГБ Яндекс.Диск +</p>
      </rt-microtabs-cnt>
    </template>
  </rt-microtabs>
</div>
      `
    },
    inverseBlueViewA(){
      return `
<div class="rt-tariff is--theme-yadisk is--no-spaces is--no-borders">
  <rt-microtabs class="sp-h-1 sp-t-0-3 sp-b-0-4">
    <template slot="nav">
      <rt-microtabs-nav theme="purple">Доп. параметры</rt-microtabs-nav>
      <rt-microtabs-nav>Антивирус</rt-microtabs-nav>
      <rt-microtabs-nav>Яндекс Диск</rt-microtabs-nav>
    </template>
    <template slot="cnt">
      <rt-microtabs-cnt>
        <p>Переадресация</p>
        <p>Голосовое меню IVR</p>
        <p>Распределение  звонков</p>
        <p>Статистика и аналитика</p>
      </rt-microtabs-cnt>
      <rt-microtabs-cnt>
        <p>Kaspersky Internet Security 2 устройства</p>
      </rt-microtabs-cnt>
      <rt-microtabs-cnt>
        <p>5 ГБ Яндекс.Диск +</p>
      </rt-microtabs-cnt>
    </template>
  </rt-microtabs>
</div>
      `
    },
    inverseBlueViewB(){
      return `
<div class="rt-tariff is--theme-yadisk is--no-spaces is--no-borders">
  <rt-microtabs class="sp-h-1 sp-t-0-3 sp-b-0-4">
    <template slot="nav">
      <rt-microtabs-nav theme="orange">Доп. параметры</rt-microtabs-nav>
      <rt-microtabs-nav>Антивирус</rt-microtabs-nav>
      <rt-microtabs-nav>Яндекс Диск</rt-microtabs-nav>
    </template>
    <template slot="cnt">
      <rt-microtabs-cnt>
        <p>Переадресация</p>
        <p>Голосовое меню IVR</p>
        <p>Распределение  звонков</p>
        <p>Статистика и аналитика</p>
      </rt-microtabs-cnt>
      <rt-microtabs-cnt>
        <p>Kaspersky Internet Security 2 устройства</p>
      </rt-microtabs-cnt>
      <rt-microtabs-cnt>
        <p>5 ГБ Яндекс.Диск +</p>
      </rt-microtabs-cnt>
    </template>
  </rt-microtabs>
</div>
      `
    }
  }
}
</script>

<style lang="stylus">
.dont-use
  position relative
  &:before,
  &:after
    content: ''
    background rgba(255,0,0,.3)
    margin auto
    pointer-events none
    position absolute
    width 4px
    height 150%
    top 0
    left -20%
    right 0
    bottom 0
    z-index 22
  &:before
    transform rotate(-45deg)
  &:after
    transform rotate(45deg)

.test-list
  background #fff
  box-shadow inset 0 0 0 20px #bdf1bd
  padding 20px
  min-width 280px
  max-width 100%
  position relative
  // border 20px solid #bdf1bd
  &--accent
    box-shadow inset 0 0 0 20px #ee9
    .rt-microtabs-nav__item-tgl
      background red
      z-index 2
    .rt-microtabs-nav__item[data-key="0"],
    .rt-microtabs-cnt__item:nth-child(1)
      background #f006
    .rt-microtabs-nav__item[data-key="1"],
    .rt-microtabs-cnt__item:nth-child(2)
      background #0f06
    .rt-microtabs-nav__item[data-key="2"],
    .rt-microtabs-cnt__item:nth-child(3)
      background #00f6
    .rt-microtabs-nav__item[data-key="3"],
    .rt-microtabs-cnt__item:nth-child(4)
      background #f0f6
</style>

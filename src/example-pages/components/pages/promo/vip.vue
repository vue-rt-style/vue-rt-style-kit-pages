<template>
    <div class="wc-inline rt-space-top5 is-b2c">
        <div>
            <div class="rt-container">


                <h1 class="rt-font-bold">Оборудование</h1>
                <div class="row">
                    <div class="rt-col-12">
                        <rt-tabs class="rt-tabs--sensor">
                            <template slot="navigation">
                                <rt-tabs-nav-item anchor="1" :remove-base-tag="true" name="1">Камеры</rt-tabs-nav-item>
                                <rt-tabs-nav-item anchor="2" :remove-base-tag="true" name="2">Умный дом
                                </rt-tabs-nav-item>
                                <rt-tabs-nav-item anchor="3" :remove-base-tag="true" name="3">Датчики</rt-tabs-nav-item>

                            </template>
                            <template slot="content">
                                <rt-tabs-content-item name="1">
                                    <rt-tabs :show-as-tags="true" class="rt-tabs--sensor-tags">
                                        <template slot="navigation">

                                            <rt-tabs-nav-item name="1two">Полная стоимость
                                            </rt-tabs-nav-item>
                                            <rt-tabs-nav-item :active-tab="true" name="1one">
                                                Рассрочка
                                            </rt-tabs-nav-item>
                                        </template>
                                        <template slot="content">
                                            <rt-tabs-content-item name="1one">
                                                <div class="row">
                                                    <rt-carousel>
                                                        <rt-carousel-slide>

                                                            <rt-card-buy>
                                                                <template slot="content">
                                                                    <div class="rt-space-horizontal">
                                                                        <div class="rt-font-center rt-space-top">
                                                                            <img class="rt-sensor-img"
                                                                                 src="https://spb.rt.ru/sites/default/files/img/smartHouse-contr1.png"
                                                                                 alt="">
                                                                        </div>
                                                                        <p class="rt-space-top rt-space-bottom rt-font-bold">
                                                                            Контроллер рассрочка 1</p>
                                                                        <p class="rt-font-control">Контроллер
                                                                            необходим для
                                                                            управления и настройки устройств</p>
                                                                        <div class="rt-space-top">
                                                                            <p class="rt-font-control">
                                                                                Характеристики</p>
                                                                        </div>
                                                                        <p class="rt-font-label color-main05">Входит
                                                                            в любой
                                                                            комплект умного дома</p>

                                                                    </div>

                                                                </template>
                                                                <template slot="form">
                                                                    <div class="rt-space-horizontal">
                                                                        <order-form lcs="active"
                                                                                    class="rt-md-reverse-left-half"
                                                                                    popup-main-url="http://www.rt.ru/"
                                                                                    scope="form-3"
                                                                                    :offer-id="[{offerIds: [403794182990, 413844976190]}]"
                                                                                    :validator-adr="[{ regionIds: mrfCenter, preventSend: true },
                        { regionIds: [3092050, 3092265, 3092484, 3093008, 3093110, 3093225, 3092694], preventSend: true },
                        { regionIds: [2229963, 2233690, 2229861, 2231026, 2231188], preventSend: true },
                        { regionIds: [2982901, 2983002, 2983209], preventSend: true }]">


                                                                            <div class="rt-space-top2">
                                                                                <form data-vv-scope="form-3"
                                                                                      @submit.prevent>
                                                                                    <full-name
                                                                                            class="text-field--purple"></full-name>
                                                                                    <div class="rt-space-top">
                                                                                        <client-phone
                                                                                                class="text-field--purple"></client-phone>
                                                                                    </div>
                                                                                    <div class="rt-space-top">
                                                                                        <email class="text-field--purple"></email>
                                                                                    </div>
                                                                                    <p class="rt-font-paragraph rt-space-top2">
                                                                                        Адрес подключения</p>
                                                                                    <div class="rt-space-top">
                                                                                        <div class="rt-col-8 rt-col-md-3">
                                                                                            <street class="text-field--purple"></street>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="rt-space-top">
                                                                                        <house class="text-field--purple"></house>
                                                                                        <apartment
                                                                                                class="text-field--purple"></apartment>
                                                                                    </div>
                                                                                    <div class="rt-space-top2">

                                                                                    </div>
                                                                                    <div class="row rt-space-top">
                                                                                        <div class="rt-col-8 rt-col-md-3">
                                                                                            <div class="rt-space-top">
                                                                                                <agree></agree>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </form>
                                                                            </div>
                                                                        </order-form>
                                                                    </div>
                                                                </template>
                                                                <template slot="card-footer">
                                                                    <div class="d-flex rt-space-top05 rt-space-bottom flex-end-center">
                                                                        <rt-price :value='750.231'
                                                                                  time-interval='час.'/>
                                                                    </div>
                                                                </template>
                                                                <template slot="button">
                                                                    <submit-button>
                                                                        Подключить
                                                                    </submit-button>
                                                                </template>
                                                            </rt-card-buy>
                                                        </rt-carousel-slide>
                                                        <rt-carousel-slide>

                                                            <rt-card-buy>
                                                                <template slot="content">
                                                                    <div class="rt-space-horizontal">
                                                                        <div class="rt-font-center rt-space-top">
                                                                            <img class="rt-sensor-img"
                                                                                 src="https://spb.rt.ru/sites/default/files/img/smartHouse-contr1.png"
                                                                                 alt="">
                                                                        </div>
                                                                        <p class="rt-space-top rt-space-bottom rt-font-bold">
                                                                            Контроллер рассрочка 1</p>
                                                                        <p class="rt-font-control">Контроллер
                                                                            необходим для
                                                                            управления и настройки устройств</p>
                                                                        <div class="rt-space-top">
                                                                            <p class="rt-font-control">
                                                                                Характеристики</p>
                                                                        </div>
                                                                        <p class="rt-font-label color-main05">Входит
                                                                            в любой
                                                                            комплект умного дома</p>

                                                                    </div>

                                                                </template>
                                                                <template slot="form">
                                                                    <div class="rt-space-horizontal">
                                                                        <order-form lcs="active"
                                                                                    class="rt-md-reverse-left-half"
                                                                                    popup-main-url="http://www.rt.ru/"
                                                                                    scope="form-3"
                                                                                    :offer-id="[{offerIds: [403794182990, 413844976190]}]"
                                                                                    :validator-adr="[{ regionIds: mrfCenter, preventSend: true },
                        { regionIds: [3092050, 3092265, 3092484, 3093008, 3093110, 3093225, 3092694], preventSend: true },
                        { regionIds: [2229963, 2233690, 2229861, 2231026, 2231188], preventSend: true },
                        { regionIds: [2982901, 2983002, 2983209], preventSend: true }]">


                                                                            <div class="rt-space-top2">
                                                                                <form data-vv-scope="form-3"
                                                                                      @submit.prevent>
                                                                                    <full-name
                                                                                            class="text-field--purple"></full-name>
                                                                                    <div class="rt-space-top">
                                                                                        <client-phone
                                                                                                class="text-field--purple"></client-phone>
                                                                                    </div>
                                                                                    <div class="rt-space-top">
                                                                                        <email class="text-field--purple"></email>
                                                                                    </div>
                                                                                    <p class="rt-font-paragraph rt-space-top2">
                                                                                        Адрес подключения</p>
                                                                                    <div class="rt-space-top">
                                                                                        <div class="rt-col-8 rt-col-md-3">
                                                                                            <street class="text-field--purple"></street>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="rt-space-top">
                                                                                        <house class="text-field--purple"></house>
                                                                                        <apartment
                                                                                                class="text-field--purple"></apartment>
                                                                                    </div>
                                                                                    <div class="rt-space-top2">

                                                                                    </div>
                                                                                    <div class="row rt-space-top">
                                                                                        <div class="rt-col-8 rt-col-md-3">
                                                                                            <div class="rt-space-top">
                                                                                                <agree></agree>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </form>
                                                                            </div>
                                                                        </order-form>
                                                                    </div>
                                                                </template>
                                                                <template slot="card-footer">
                                                                    <div class="d-flex rt-space-top05 rt-space-bottom flex-end-center">
                                                                        <rt-price :value='750.231'
                                                                                  time-interval='час.'/>
                                                                    </div>
                                                                </template>
                                                                <template slot="button">
                                                                    <submit-button>
                                                                        Подключить
                                                                    </submit-button>
                                                                </template>
                                                            </rt-card-buy>
                                                        </rt-carousel-slide>
                                                        <rt-carousel-slide>

                                                            <rt-card-buy>
                                                                <template slot="content">
                                                                    <div class="rt-space-horizontal">
                                                                        <div class="rt-font-center rt-space-top">
                                                                            <img class="rt-sensor-img"
                                                                                 src="https://spb.rt.ru/sites/default/files/img/smartHouse-contr1.png"
                                                                                 alt="">
                                                                        </div>
                                                                        <p class="rt-space-top rt-space-bottom rt-font-bold">
                                                                            Контроллер рассрочка 1</p>
                                                                        <p class="rt-font-control">Контроллер
                                                                            необходим для
                                                                            управления и настройки устройств</p>
                                                                        <div class="rt-space-top">
                                                                            <p class="rt-font-control">
                                                                                Характеристики</p>
                                                                        </div>
                                                                        <p class="rt-font-label color-main05">Входит
                                                                            в любой
                                                                            комплект умного дома</p>

                                                                    </div>

                                                                </template>
                                                                <template slot="form">
                                                                    <div class="rt-space-horizontal">
                                                                        <order-form lcs="active"
                                                                                    class="rt-md-reverse-left-half"
                                                                                    popup-main-url="http://www.rt.ru/"
                                                                                    scope="form-3"
                                                                                    :offer-id="[{offerIds: [403794182990, 413844976190]}]"
                                                                                    :validator-adr="[{ regionIds: mrfCenter, preventSend: true },
                        { regionIds: [3092050, 3092265, 3092484, 3093008, 3093110, 3093225, 3092694], preventSend: true },
                        { regionIds: [2229963, 2233690, 2229861, 2231026, 2231188], preventSend: true },
                        { regionIds: [2982901, 2983002, 2983209], preventSend: true }]">


                                                                            <div class="rt-space-top2">
                                                                                <form data-vv-scope="form-3"
                                                                                      @submit.prevent>
                                                                                    <full-name
                                                                                            class="text-field--purple"></full-name>
                                                                                    <div class="rt-space-top">
                                                                                        <client-phone
                                                                                                class="text-field--purple"></client-phone>
                                                                                    </div>
                                                                                    <div class="rt-space-top">
                                                                                        <email class="text-field--purple"></email>
                                                                                    </div>
                                                                                    <p class="rt-font-paragraph rt-space-top2">
                                                                                        Адрес подключения</p>
                                                                                    <div class="rt-space-top">
                                                                                        <div class="rt-col-8 rt-col-md-3">
                                                                                            <street class="text-field--purple"></street>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="rt-space-top">
                                                                                        <house class="text-field--purple"></house>
                                                                                        <apartment
                                                                                                class="text-field--purple"></apartment>
                                                                                    </div>
                                                                                    <div class="rt-space-top2">

                                                                                    </div>
                                                                                    <div class="row rt-space-top">
                                                                                        <div class="rt-col-8 rt-col-md-3">
                                                                                            <div class="rt-space-top">
                                                                                                <agree></agree>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </form>
                                                                            </div>
                                                                        </order-form>
                                                                    </div>
                                                                </template>
                                                                <template slot="card-footer">
                                                                    <div class="d-flex rt-space-top05 rt-space-bottom flex-end-center">
                                                                        <rt-price :value='750.231'
                                                                                  time-interval='час.'/>
                                                                    </div>
                                                                </template>
                                                                <template slot="button">
                                                                    <submit-button>
                                                                        Подключить
                                                                    </submit-button>
                                                                </template>
                                                            </rt-card-buy>
                                                        </rt-carousel-slide>
                                                        <rt-carousel-slide>
                                                            <rt-card-buy>
                                                                <template slot="content">
                                                                    <div class="rt-space-horizontal">
                                                                        <div class="rt-font-center rt-space-top">
                                                                            <img class="rt-sensor-img"
                                                                                 src="https://spb.rt.ru/sites/default/files/img/smartHouse-contr1.png"
                                                                                 alt="">
                                                                        </div>
                                                                        <p class="rt-space-top rt-space-bottom rt-font-bold">
                                                                            Контроллер рассрочка 1</p>
                                                                        <p class="rt-font-control">Контроллер
                                                                            необходим для
                                                                            управления и настройки устройств</p>
                                                                        <div class="rt-space-top">
                                                                            <p class="rt-font-control">
                                                                                Характеристики</p>
                                                                        </div>
                                                                        <p class="rt-font-label color-main05">Входит
                                                                            в любой
                                                                            комплект умного дома</p>

                                                                    </div>

                                                                </template>
                                                                <template slot="form">
                                                                    <div class="rt-space-horizontal">
                                                                        <order-form lcs="active"
                                                                                    class="rt-md-reverse-left-half"
                                                                                    popup-main-url="http://www.rt.ru/"
                                                                                    scope="form-3"
                                                                                    :offer-id="[{offerIds: [403794182990, 413844976190]}]"
                                                                                    :validator-adr="[{ regionIds: mrfCenter, preventSend: true },
                        { regionIds: [3092050, 3092265, 3092484, 3093008, 3093110, 3093225, 3092694], preventSend: true },
                        { regionIds: [2229963, 2233690, 2229861, 2231026, 2231188], preventSend: true },
                        { regionIds: [2982901, 2983002, 2983209], preventSend: true }]">


                                                                            <div class="rt-space-top2">
                                                                                <form data-vv-scope="form-3"
                                                                                      @submit.prevent>
                                                                                    <full-name
                                                                                            class="text-field--purple"></full-name>
                                                                                    <div class="rt-space-top">
                                                                                        <client-phone
                                                                                                class="text-field--purple"></client-phone>
                                                                                    </div>
                                                                                    <div class="rt-space-top">
                                                                                        <email class="text-field--purple"></email>
                                                                                    </div>
                                                                                    <p class="rt-font-paragraph rt-space-top2">
                                                                                        Адрес подключения</p>
                                                                                    <div class="rt-space-top">
                                                                                        <div class="rt-col-8 rt-col-md-3">
                                                                                            <street class="text-field--purple"></street>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="rt-space-top">
                                                                                        <house class="text-field--purple"></house>
                                                                                        <apartment
                                                                                                class="text-field--purple"></apartment>
                                                                                    </div>
                                                                                    <div class="rt-space-top2">

                                                                                    </div>
                                                                                    <div class="row rt-space-top">
                                                                                        <div class="rt-col-8 rt-col-md-3">
                                                                                            <div class="rt-space-top">
                                                                                                <agree></agree>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </form>
                                                                            </div>
                                                                        </order-form>
                                                                    </div>
                                                                </template>
                                                                <template slot="card-footer">
                                                                    <div class="d-flex rt-space-top05 rt-space-bottom flex-end-center">
                                                                        <rt-price :value='750.231'
                                                                                  time-interval='час.'/>
                                                                    </div>
                                                                </template>
                                                                <template slot="button">
                                                                    <submit-button>
                                                                        Подключить
                                                                    </submit-button>
                                                                </template>
                                                            </rt-card-buy>
                                                        </rt-carousel-slide>

                                                        <rt-carousel-slide>

                                                            <rt-card-buy>
                                                                <template slot="content">
                                                                    <div class="rt-space-horizontal">
                                                                        <div class="rt-font-center rt-space-top">
                                                                            <img class="rt-sensor-img"
                                                                                 src="https://spb.rt.ru/sites/default/files/img/smartHouse-contr1.png"
                                                                                 alt="">
                                                                        </div>
                                                                        <p class="rt-space-top rt-space-bottom rt-font-bold">
                                                                            Контроллер рассрочка 1</p>
                                                                        <p class="rt-font-control">Контроллер
                                                                            необходим для
                                                                            управления и настройки устройств</p>
                                                                        <div class="rt-space-top">
                                                                            <p class="rt-font-control">
                                                                                Характеристики</p>
                                                                        </div>
                                                                        <p class="rt-font-label color-main05">Входит
                                                                            в любой
                                                                            комплект умного дома</p>

                                                                    </div>

                                                                </template>
                                                                <template slot="form">
                                                                    <div class="rt-space-horizontal">
                                                                        <order-form lcs="active"
                                                                                    class="rt-md-reverse-left-half"
                                                                                    popup-main-url="http://www.rt.ru/"
                                                                                    scope="form-3"
                                                                                    :offer-id="[{offerIds: [403794182990, 413844976190]}]"
                                                                                    :validator-adr="[{ regionIds: mrfCenter, preventSend: true },
                        { regionIds: [3092050, 3092265, 3092484, 3093008, 3093110, 3093225, 3092694], preventSend: true },
                        { regionIds: [2229963, 2233690, 2229861, 2231026, 2231188], preventSend: true },
                        { regionIds: [2982901, 2983002, 2983209], preventSend: true }]">


                                                                            <div class="rt-space-top2">
                                                                                <form data-vv-scope="form-3"
                                                                                      @submit.prevent>
                                                                                    <full-name
                                                                                            class="text-field--purple"></full-name>
                                                                                    <div class="rt-space-top">
                                                                                        <client-phone
                                                                                                class="text-field--purple"></client-phone>
                                                                                    </div>
                                                                                    <div class="rt-space-top">
                                                                                        <email class="text-field--purple"></email>
                                                                                    </div>
                                                                                    <p class="rt-font-paragraph rt-space-top2">
                                                                                        Адрес подключения</p>
                                                                                    <div class="rt-space-top">
                                                                                        <div class="rt-col-8 rt-col-md-3">
                                                                                            <street class="text-field--purple"></street>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="rt-space-top">
                                                                                        <house class="text-field--purple"></house>
                                                                                        <apartment
                                                                                                class="text-field--purple"></apartment>
                                                                                    </div>
                                                                                    <div class="rt-space-top2">

                                                                                    </div>
                                                                                    <div class="row rt-space-top">
                                                                                        <div class="rt-col-8 rt-col-md-3">
                                                                                            <div class="rt-space-top">
                                                                                                <agree></agree>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </form>
                                                                            </div>
                                                                        </order-form>
                                                                    </div>
                                                                </template>
                                                                <template slot="card-footer">
                                                                    <div class="d-flex rt-space-top05 rt-space-bottom flex-end-center">
                                                                        <rt-price :value='750.231'
                                                                                  time-interval='час.'/>
                                                                    </div>
                                                                </template>
                                                                <template slot="button">
                                                                    <submit-button>
                                                                        Подключить
                                                                    </submit-button>
                                                                </template>
                                                            </rt-card-buy>
                                                        </rt-carousel-slide>
                                                        <rt-carousel-slide>
                                                            <rt-card-buy>
                                                                <template slot="content">
                                                                    <div class="rt-space-horizontal">
                                                                        <div class="rt-font-center rt-space-top">
                                                                            <img class="rt-sensor-img"
                                                                                 src="https://spb.rt.ru/sites/default/files/img/smartHouse-contr1.png"
                                                                                 alt="">
                                                                        </div>
                                                                        <p class="rt-space-top rt-space-bottom rt-font-bold">
                                                                            Контроллер рассрочка 1</p>
                                                                        <p class="rt-font-control">Контроллер
                                                                            необходим для
                                                                            управления и настройки устройств</p>
                                                                        <div class="rt-space-top">
                                                                            <p class="rt-font-control">
                                                                                Характеристики</p>
                                                                        </div>
                                                                        <p class="rt-font-label color-main05">Входит
                                                                            в любой
                                                                            комплект умного дома</p>

                                                                    </div>

                                                                </template>
                                                                <template slot="form">
                                                                    <div class="rt-space-horizontal">
                                                                        <order-form lcs="active"
                                                                                    class="rt-md-reverse-left-half"
                                                                                    popup-main-url="http://www.rt.ru/"
                                                                                    scope="form-3"
                                                                                    :offer-id="[{offerIds: [403794182990, 413844976190]}]"
                                                                                    :validator-adr="[{ regionIds: mrfCenter, preventSend: true },
                        { regionIds: [3092050, 3092265, 3092484, 3093008, 3093110, 3093225, 3092694], preventSend: true },
                        { regionIds: [2229963, 2233690, 2229861, 2231026, 2231188], preventSend: true },
                        { regionIds: [2982901, 2983002, 2983209], preventSend: true }]">


                                                                            <div class="rt-space-top2">
                                                                                <form data-vv-scope="form-3"
                                                                                      @submit.prevent>
                                                                                    <full-name
                                                                                            class="text-field--purple"></full-name>
                                                                                    <div class="rt-space-top">
                                                                                        <client-phone
                                                                                                class="text-field--purple"></client-phone>
                                                                                    </div>
                                                                                    <div class="rt-space-top">
                                                                                        <email class="text-field--purple"></email>
                                                                                    </div>
                                                                                    <p class="rt-font-paragraph rt-space-top2">
                                                                                        Адрес подключения</p>
                                                                                    <div class="rt-space-top">
                                                                                        <div class="rt-col-8 rt-col-md-3">
                                                                                            <street class="text-field--purple"></street>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="rt-space-top">
                                                                                        <house class="text-field--purple"></house>
                                                                                        <apartment
                                                                                                class="text-field--purple"></apartment>
                                                                                    </div>
                                                                                    <div class="rt-space-top2">

                                                                                    </div>
                                                                                    <div class="row rt-space-top">
                                                                                        <div class="rt-col-8 rt-col-md-3">
                                                                                            <div class="rt-space-top">
                                                                                                <agree></agree>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </form>
                                                                            </div>
                                                                        </order-form>
                                                                    </div>
                                                                </template>
                                                                <template slot="card-footer">
                                                                    <div class="d-flex rt-space-top05 rt-space-bottom flex-end-center">
                                                                        <rt-price :value='750.231'
                                                                                  time-interval='час.'/>
                                                                    </div>
                                                                </template>
                                                                <template slot="button">
                                                                    <submit-button>
                                                                        Подключить
                                                                    </submit-button>
                                                                </template>
                                                            </rt-card-buy>
                                                        </rt-carousel-slide>
                                                        <rt-carousel-slide>
                                                            <rt-card-buy>
                                                                <template slot="content">
                                                                    <div class="rt-space-horizontal">
                                                                        <div class="rt-font-center rt-space-top">
                                                                            <img class="rt-sensor-img"
                                                                                 src="https://spb.rt.ru/sites/default/files/img/smartHouse-contr1.png"
                                                                                 alt="">
                                                                        </div>
                                                                        <p class="rt-space-top rt-space-bottom rt-font-bold">
                                                                            Контроллер рассрочка 1</p>
                                                                        <p class="rt-font-control">Контроллер
                                                                            необходим для
                                                                            управления и настройки устройств</p>
                                                                        <div class="rt-space-top">
                                                                            <p class="rt-font-control">
                                                                                Характеристики</p>
                                                                        </div>
                                                                        <p class="rt-font-label color-main05">Входит
                                                                            в любой
                                                                            комплект умного дома</p>

                                                                    </div>

                                                                </template>
                                                                <template slot="form">
                                                                    <div class="rt-space-horizontal">
                                                                        <order-form lcs="active"
                                                                                    class="rt-md-reverse-left-half"
                                                                                    popup-main-url="http://www.rt.ru/"
                                                                                    scope="form-3"
                                                                                    :offer-id="[{offerIds: [403794182990, 413844976190]}]"
                                                                                    :validator-adr="[{ regionIds: mrfCenter, preventSend: true },
                        { regionIds: [3092050, 3092265, 3092484, 3093008, 3093110, 3093225, 3092694], preventSend: true },
                        { regionIds: [2229963, 2233690, 2229861, 2231026, 2231188], preventSend: true },
                        { regionIds: [2982901, 2983002, 2983209], preventSend: true }]">


                                                                            <div class="rt-space-top2">
                                                                                <form data-vv-scope="form-3"
                                                                                      @submit.prevent>
                                                                                    <full-name
                                                                                            class="text-field--purple"></full-name>
                                                                                    <div class="rt-space-top">
                                                                                        <client-phone
                                                                                                class="text-field--purple"></client-phone>
                                                                                    </div>
                                                                                    <div class="rt-space-top">
                                                                                        <email class="text-field--purple"></email>
                                                                                    </div>
                                                                                    <p class="rt-font-paragraph rt-space-top2">
                                                                                        Адрес подключения</p>
                                                                                    <div class="rt-space-top">
                                                                                        <div class="rt-col-8 rt-col-md-3">
                                                                                            <street class="text-field--purple"></street>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="rt-space-top">
                                                                                        <house class="text-field--purple"></house>
                                                                                        <apartment
                                                                                                class="text-field--purple"></apartment>
                                                                                    </div>
                                                                                    <div class="rt-space-top2">

                                                                                    </div>
                                                                                    <div class="row rt-space-top">
                                                                                        <div class="rt-col-8 rt-col-md-3">
                                                                                            <div class="rt-space-top">
                                                                                                <agree></agree>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </form>
                                                                            </div>
                                                                        </order-form>
                                                                    </div>
                                                                </template>
                                                                <template slot="card-footer">
                                                                    <div class="d-flex rt-space-top05 rt-space-bottom flex-end-center">
                                                                        <rt-price :value='750.231'
                                                                                  time-interval='час.'/>
                                                                    </div>
                                                                </template>
                                                                <template slot="button">
                                                                    <submit-button>
                                                                        Подключить
                                                                    </submit-button>
                                                                </template>
                                                            </rt-card-buy>
                                                        </rt-carousel-slide>
                                                        <rt-carousel-slide>
                                                            <rt-card-buy>
                                                                <template slot="content">
                                                                    <div class="rt-space-horizontal">
                                                                        <div class="rt-font-center rt-space-top">
                                                                            <img class="rt-sensor-img"
                                                                                 src="https://spb.rt.ru/sites/default/files/img/smartHouse-contr1.png"
                                                                                 alt="">
                                                                        </div>
                                                                        <p class="rt-space-top rt-space-bottom rt-font-bold">
                                                                            Контроллер рассрочка 1</p>
                                                                        <p class="rt-font-control">Контроллер
                                                                            необходим для
                                                                            управления и настройки устройств</p>
                                                                        <div class="rt-space-top">
                                                                            <p class="rt-font-control">
                                                                                Характеристики</p>
                                                                        </div>
                                                                        <p class="rt-font-label color-main05">Входит
                                                                            в любой
                                                                            комплект умного дома</p>

                                                                    </div>

                                                                </template>
                                                                <template slot="form">
                                                                    <div class="rt-space-horizontal">
                                                                        <order-form lcs="active"
                                                                                    class="rt-md-reverse-left-half"
                                                                                    popup-main-url="http://www.rt.ru/"
                                                                                    scope="form-3"
                                                                                    :offer-id="[{offerIds: [403794182990, 413844976190]}]"
                                                                                    :validator-adr="[{ regionIds: mrfCenter, preventSend: true },
                        { regionIds: [3092050, 3092265, 3092484, 3093008, 3093110, 3093225, 3092694], preventSend: true },
                        { regionIds: [2229963, 2233690, 2229861, 2231026, 2231188], preventSend: true },
                        { regionIds: [2982901, 2983002, 2983209], preventSend: true }]">


                                                                            <div class="rt-space-top2">
                                                                                <form data-vv-scope="form-3"
                                                                                      @submit.prevent>
                                                                                    <full-name
                                                                                            class="text-field--purple"></full-name>
                                                                                    <div class="rt-space-top">
                                                                                        <client-phone
                                                                                                class="text-field--purple"></client-phone>
                                                                                    </div>
                                                                                    <div class="rt-space-top">
                                                                                        <email class="text-field--purple"></email>
                                                                                    </div>
                                                                                    <p class="rt-font-paragraph rt-space-top2">
                                                                                        Адрес подключения</p>
                                                                                    <div class="rt-space-top">
                                                                                        <div class="rt-col-8 rt-col-md-3">
                                                                                            <street class="text-field--purple"></street>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="rt-space-top">
                                                                                        <house class="text-field--purple"></house>
                                                                                        <apartment
                                                                                                class="text-field--purple"></apartment>
                                                                                    </div>
                                                                                    <div class="rt-space-top2">

                                                                                    </div>
                                                                                    <div class="row rt-space-top">
                                                                                        <div class="rt-col-8 rt-col-md-3">
                                                                                            <div class="rt-space-top">
                                                                                                <agree></agree>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </form>
                                                                            </div>
                                                                        </order-form>
                                                                    </div>
                                                                </template>
                                                                <template slot="card-footer">
                                                                    <div class="d-flex rt-space-top05 rt-space-bottom flex-end-center">
                                                                        <rt-price :value='750.231'
                                                                                  time-interval='час.'/>
                                                                    </div>
                                                                </template>
                                                                <template slot="button">
                                                                    <submit-button>
                                                                        Подключить
                                                                    </submit-button>
                                                                </template>
                                                            </rt-card-buy>
                                                        </rt-carousel-slide>
                                                    </rt-carousel>
                                                </div>

                                            </rt-tabs-content-item>
                                            <rt-tabs-content-item name="1two">
                                                <div class="row">
                                                    <rt-carousel>
                                                        <rt-carousel-slide>

                                                            <rt-card-buy>
                                                                <template slot="content">
                                                                    <div class="rt-space-horizontal">
                                                                        <div class="rt-font-center rt-space-top">
                                                                            <img class="rt-sensor-img"
                                                                                 src="https://spb.rt.ru/sites/default/files/img/smartHouse-contr1.png"
                                                                                 alt="">
                                                                        </div>
                                                                        <p class="rt-space-top rt-space-bottom rt-font-bold">
                                                                            Контроллер полная стоимость 1</p>
                                                                        <p class="rt-font-control">Контроллер
                                                                            необходим для
                                                                            управления и настройки устройств</p>
                                                                        <div class="rt-space-top">
                                                                            <p class="rt-font-control">
                                                                                Характеристики</p>
                                                                        </div>
                                                                        <p class="rt-font-label color-main05">Входит
                                                                            в любой
                                                                            комплект умного дома</p>

                                                                    </div>

                                                                </template>
                                                                <template slot="form">
                                                                    <div class="rt-space-horizontal">
                                                                        <order-form lcs="active"
                                                                                    class="rt-md-reverse-left-half"
                                                                                    popup-main-url="http://www.rt.ru/"
                                                                                    scope="form-3"
                                                                                    :offer-id="[{offerIds: [403794182990, 413844976190]}]"
                                                                                    :validator-adr="[{ regionIds: mrfCenter, preventSend: true },
                        { regionIds: [3092050, 3092265, 3092484, 3093008, 3093110, 3093225, 3092694], preventSend: true },
                        { regionIds: [2229963, 2233690, 2229861, 2231026, 2231188], preventSend: true },
                        { regionIds: [2982901, 2983002, 2983209], preventSend: true }]">


                                                                            <div class="rt-space-top2">
                                                                                <form data-vv-scope="form-3"
                                                                                      @submit.prevent>
                                                                                    <full-name
                                                                                            class="text-field--purple"></full-name>
                                                                                    <div class="rt-space-top">
                                                                                        <client-phone
                                                                                                class="text-field--purple"></client-phone>
                                                                                    </div>
                                                                                    <div class="rt-space-top">
                                                                                        <email class="text-field--purple"></email>
                                                                                    </div>
                                                                                    <p class="rt-font-paragraph rt-space-top2">
                                                                                        Адрес подключения</p>
                                                                                    <div class="rt-space-top">
                                                                                        <div class="rt-col-8 rt-col-md-3">
                                                                                            <street class="text-field--purple"></street>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="rt-space-top">
                                                                                        <house class="text-field--purple"></house>
                                                                                        <apartment
                                                                                                class="text-field--purple"></apartment>
                                                                                    </div>
                                                                                    <div class="rt-space-top2">

                                                                                    </div>
                                                                                    <div class="row rt-space-top">
                                                                                        <div class="rt-col-8 rt-col-md-3">
                                                                                            <div class="rt-space-top">
                                                                                                <agree></agree>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </form>
                                                                            </div>
                                                                        </order-form>
                                                                    </div>
                                                                </template>
                                                                <template slot="card-footer">
                                                                    <div class="d-flex rt-space-top05 rt-space-bottom flex-end-center">
                                                                        <rt-price :value='750.231'
                                                                                  time-interval='час.'/>
                                                                    </div>
                                                                </template>
                                                                <template slot="button">
                                                                    <submit-button>
                                                                        Подключить
                                                                    </submit-button>
                                                                </template>
                                                            </rt-card-buy>
                                                        </rt-carousel-slide>
                                                        <rt-carousel-slide>

                                                            <rt-card-buy>
                                                                <template slot="content">
                                                                    <div class="rt-space-horizontal">
                                                                        <div class="rt-font-center rt-space-top">
                                                                            <img class="rt-sensor-img"
                                                                                 src="https://spb.rt.ru/sites/default/files/img/smartHouse-contr1.png"
                                                                                 alt="">
                                                                        </div>
                                                                        <p class="rt-space-top rt-space-bottom rt-font-bold">
                                                                            Контроллер полная стоимость 1</p>
                                                                        <p class="rt-font-control">Контроллер
                                                                            необходим для
                                                                            управления и настройки устройств</p>
                                                                        <div class="rt-space-top">
                                                                            <p class="rt-font-control">
                                                                                Характеристики</p>
                                                                        </div>
                                                                        <p class="rt-font-label color-main05">Входит
                                                                            в любой
                                                                            комплект умного дома</p>

                                                                    </div>

                                                                </template>
                                                                <template slot="form">
                                                                    <div class="rt-space-horizontal">
                                                                        <order-form lcs="active"
                                                                                    class="rt-md-reverse-left-half"
                                                                                    popup-main-url="http://www.rt.ru/"
                                                                                    scope="form-3"
                                                                                    :offer-id="[{offerIds: [403794182990, 413844976190]}]"
                                                                                    :validator-adr="[{ regionIds: mrfCenter, preventSend: true },
                        { regionIds: [3092050, 3092265, 3092484, 3093008, 3093110, 3093225, 3092694], preventSend: true },
                        { regionIds: [2229963, 2233690, 2229861, 2231026, 2231188], preventSend: true },
                        { regionIds: [2982901, 2983002, 2983209], preventSend: true }]">


                                                                            <div class="rt-space-top2">
                                                                                <form data-vv-scope="form-3"
                                                                                      @submit.prevent>
                                                                                    <full-name
                                                                                            class="text-field--purple"></full-name>
                                                                                    <div class="rt-space-top">
                                                                                        <client-phone
                                                                                                class="text-field--purple"></client-phone>
                                                                                    </div>
                                                                                    <div class="rt-space-top">
                                                                                        <email class="text-field--purple"></email>
                                                                                    </div>
                                                                                    <p class="rt-font-paragraph rt-space-top2">
                                                                                        Адрес подключения</p>
                                                                                    <div class="rt-space-top">
                                                                                        <div class="rt-col-8 rt-col-md-3">
                                                                                            <street class="text-field--purple"></street>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="rt-space-top">
                                                                                        <house class="text-field--purple"></house>
                                                                                        <apartment
                                                                                                class="text-field--purple"></apartment>
                                                                                    </div>
                                                                                    <div class="rt-space-top2">

                                                                                    </div>
                                                                                    <div class="row rt-space-top">
                                                                                        <div class="rt-col-8 rt-col-md-3">
                                                                                            <div class="rt-space-top">
                                                                                                <agree></agree>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </form>
                                                                            </div>
                                                                        </order-form>
                                                                    </div>
                                                                </template>
                                                                <template slot="card-footer">
                                                                    <div class="d-flex rt-space-top05 rt-space-bottom flex-end-center">
                                                                        <rt-price :value='750.231'
                                                                                  time-interval='час.'/>
                                                                    </div>
                                                                </template>
                                                                <template slot="button">
                                                                    <submit-button>
                                                                        Подключить
                                                                    </submit-button>
                                                                </template>
                                                            </rt-card-buy>
                                                        </rt-carousel-slide>
                                                        <rt-carousel-slide>

                                                            <rt-card-buy>
                                                                <template slot="content">
                                                                    <div class="rt-space-horizontal">
                                                                        <div class="rt-font-center rt-space-top">
                                                                            <img class="rt-sensor-img"
                                                                                 src="https://spb.rt.ru/sites/default/files/img/smartHouse-contr1.png"
                                                                                 alt="">
                                                                        </div>
                                                                        <p class="rt-space-top rt-space-bottom rt-font-bold">
                                                                            Контроллер полная стоимость 1</p>
                                                                        <p class="rt-font-control">Контроллер
                                                                            необходим для
                                                                            управления и настройки устройств</p>
                                                                        <div class="rt-space-top">
                                                                            <p class="rt-font-control">
                                                                                Характеристики</p>
                                                                        </div>
                                                                        <p class="rt-font-label color-main05">Входит
                                                                            в любой
                                                                            комплект умного дома</p>

                                                                    </div>

                                                                </template>
                                                                <template slot="form">
                                                                    <div class="rt-space-horizontal">
                                                                        <order-form lcs="active"
                                                                                    class="rt-md-reverse-left-half"
                                                                                    popup-main-url="http://www.rt.ru/"
                                                                                    scope="form-3"
                                                                                    :offer-id="[{offerIds: [403794182990, 413844976190]}]"
                                                                                    :validator-adr="[{ regionIds: mrfCenter, preventSend: true },
                        { regionIds: [3092050, 3092265, 3092484, 3093008, 3093110, 3093225, 3092694], preventSend: true },
                        { regionIds: [2229963, 2233690, 2229861, 2231026, 2231188], preventSend: true },
                        { regionIds: [2982901, 2983002, 2983209], preventSend: true }]">


                                                                            <div class="rt-space-top2">
                                                                                <form data-vv-scope="form-3"
                                                                                      @submit.prevent>
                                                                                    <full-name
                                                                                            class="text-field--purple"></full-name>
                                                                                    <div class="rt-space-top">
                                                                                        <client-phone
                                                                                                class="text-field--purple"></client-phone>
                                                                                    </div>
                                                                                    <div class="rt-space-top">
                                                                                        <email class="text-field--purple"></email>
                                                                                    </div>
                                                                                    <p class="rt-font-paragraph rt-space-top2">
                                                                                        Адрес подключения</p>
                                                                                    <div class="rt-space-top">
                                                                                        <div class="rt-col-8 rt-col-md-3">
                                                                                            <street class="text-field--purple"></street>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="rt-space-top">
                                                                                        <house class="text-field--purple"></house>
                                                                                        <apartment
                                                                                                class="text-field--purple"></apartment>
                                                                                    </div>
                                                                                    <div class="rt-space-top2">

                                                                                    </div>
                                                                                    <div class="row rt-space-top">
                                                                                        <div class="rt-col-8 rt-col-md-3">
                                                                                            <div class="rt-space-top">
                                                                                                <agree></agree>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </form>
                                                                            </div>
                                                                        </order-form>
                                                                    </div>
                                                                </template>
                                                                <template slot="card-footer">
                                                                    <div class="d-flex rt-space-top05 rt-space-bottom flex-end-center">
                                                                        <rt-price :value='750.231'
                                                                                  time-interval='час.'/>
                                                                    </div>
                                                                </template>
                                                                <template slot="button">
                                                                    <submit-button>
                                                                        Подключить
                                                                    </submit-button>
                                                                </template>
                                                            </rt-card-buy>
                                                        </rt-carousel-slide>
                                                        <rt-carousel-slide>
                                                            <rt-card-buy>
                                                                <template slot="content">
                                                                    <div class="rt-space-horizontal">
                                                                        <div class="rt-font-center rt-space-top">
                                                                            <img class="rt-sensor-img"
                                                                                 src="https://spb.rt.ru/sites/default/files/img/smartHouse-contr1.png"
                                                                                 alt="">
                                                                        </div>
                                                                        <p class="rt-space-top rt-space-bottom rt-font-bold">
                                                                            Контроллер полная стоимость 1</p>
                                                                        <p class="rt-font-control">Контроллер
                                                                            необходим для
                                                                            управления и настройки устройств</p>
                                                                        <div class="rt-space-top">
                                                                            <p class="rt-font-control">
                                                                                Характеристики</p>
                                                                        </div>
                                                                        <p class="rt-font-label color-main05">Входит
                                                                            в любой
                                                                            комплект умного дома</p>

                                                                    </div>

                                                                </template>
                                                                <template slot="form">
                                                                    <div class="rt-space-horizontal">
                                                                        <order-form lcs="active"
                                                                                    class="rt-md-reverse-left-half"
                                                                                    popup-main-url="http://www.rt.ru/"
                                                                                    scope="form-3"
                                                                                    :offer-id="[{offerIds: [403794182990, 413844976190]}]"
                                                                                    :validator-adr="[{ regionIds: mrfCenter, preventSend: true },
                        { regionIds: [3092050, 3092265, 3092484, 3093008, 3093110, 3093225, 3092694], preventSend: true },
                        { regionIds: [2229963, 2233690, 2229861, 2231026, 2231188], preventSend: true },
                        { regionIds: [2982901, 2983002, 2983209], preventSend: true }]">


                                                                            <div class="rt-space-top2">
                                                                                <form data-vv-scope="form-3"
                                                                                      @submit.prevent>
                                                                                    <full-name
                                                                                            class="text-field--purple"></full-name>
                                                                                    <div class="rt-space-top">
                                                                                        <client-phone
                                                                                                class="text-field--purple"></client-phone>
                                                                                    </div>
                                                                                    <div class="rt-space-top">
                                                                                        <email class="text-field--purple"></email>
                                                                                    </div>
                                                                                    <p class="rt-font-paragraph rt-space-top2">
                                                                                        Адрес подключения</p>
                                                                                    <div class="rt-space-top">
                                                                                        <div class="rt-col-8 rt-col-md-3">
                                                                                            <street class="text-field--purple"></street>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="rt-space-top">
                                                                                        <house class="text-field--purple"></house>
                                                                                        <apartment
                                                                                                class="text-field--purple"></apartment>
                                                                                    </div>
                                                                                    <div class="rt-space-top2">

                                                                                    </div>
                                                                                    <div class="row rt-space-top">
                                                                                        <div class="rt-col-8 rt-col-md-3">
                                                                                            <div class="rt-space-top">
                                                                                                <agree></agree>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </form>
                                                                            </div>
                                                                        </order-form>
                                                                    </div>
                                                                </template>
                                                                <template slot="card-footer">
                                                                    <div class="d-flex rt-space-top05 rt-space-bottom flex-end-center">
                                                                        <rt-price :value='750.231'
                                                                                  time-interval='час.'/>
                                                                    </div>
                                                                </template>
                                                                <template slot="button">
                                                                    <submit-button>
                                                                        Подключить
                                                                    </submit-button>
                                                                </template>
                                                            </rt-card-buy>
                                                        </rt-carousel-slide>

                                                        <rt-carousel-slide>

                                                            <rt-card-buy>
                                                                <template slot="content">
                                                                    <div class="rt-space-horizontal">
                                                                        <div class="rt-font-center rt-space-top">
                                                                            <img class="rt-sensor-img"
                                                                                 src="https://spb.rt.ru/sites/default/files/img/smartHouse-contr1.png"
                                                                                 alt="">
                                                                        </div>
                                                                        <p class="rt-space-top rt-space-bottom rt-font-bold">
                                                                            Контроллер полная стоимость 1</p>
                                                                        <p class="rt-font-control">Контроллер
                                                                            необходим для
                                                                            управления и настройки устройств</p>
                                                                        <div class="rt-space-top">
                                                                            <p class="rt-font-control">
                                                                                Характеристики</p>
                                                                        </div>
                                                                        <p class="rt-font-label color-main05">Входит
                                                                            в любой
                                                                            комплект умного дома</p>

                                                                    </div>

                                                                </template>
                                                                <template slot="form">
                                                                    <div class="rt-space-horizontal">
                                                                        <order-form lcs="active"
                                                                                    class="rt-md-reverse-left-half"
                                                                                    popup-main-url="http://www.rt.ru/"
                                                                                    scope="form-3"
                                                                                    :offer-id="[{offerIds: [403794182990, 413844976190]}]"
                                                                                    :validator-adr="[{ regionIds: mrfCenter, preventSend: true },
                        { regionIds: [3092050, 3092265, 3092484, 3093008, 3093110, 3093225, 3092694], preventSend: true },
                        { regionIds: [2229963, 2233690, 2229861, 2231026, 2231188], preventSend: true },
                        { regionIds: [2982901, 2983002, 2983209], preventSend: true }]">


                                                                            <div class="rt-space-top2">
                                                                                <form data-vv-scope="form-3"
                                                                                      @submit.prevent>
                                                                                    <full-name
                                                                                            class="text-field--purple"></full-name>
                                                                                    <div class="rt-space-top">
                                                                                        <client-phone
                                                                                                class="text-field--purple"></client-phone>
                                                                                    </div>
                                                                                    <div class="rt-space-top">
                                                                                        <email class="text-field--purple"></email>
                                                                                    </div>
                                                                                    <p class="rt-font-paragraph rt-space-top2">
                                                                                        Адрес подключения</p>
                                                                                    <div class="rt-space-top">
                                                                                        <div class="rt-col-8 rt-col-md-3">
                                                                                            <street class="text-field--purple"></street>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="rt-space-top">
                                                                                        <house class="text-field--purple"></house>
                                                                                        <apartment
                                                                                                class="text-field--purple"></apartment>
                                                                                    </div>
                                                                                    <div class="rt-space-top2">

                                                                                    </div>
                                                                                    <div class="row rt-space-top">
                                                                                        <div class="rt-col-8 rt-col-md-3">
                                                                                            <div class="rt-space-top">
                                                                                                <agree></agree>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </form>
                                                                            </div>
                                                                        </order-form>
                                                                    </div>
                                                                </template>
                                                                <template slot="card-footer">
                                                                    <div class="d-flex rt-space-top05 rt-space-bottom flex-end-center">
                                                                        <rt-price :value='750.231'
                                                                                  time-interval='час.'/>
                                                                    </div>
                                                                </template>
                                                                <template slot="button">
                                                                    <submit-button>
                                                                        Подключить
                                                                    </submit-button>
                                                                </template>
                                                            </rt-card-buy>
                                                        </rt-carousel-slide>
                                                        <rt-carousel-slide>
                                                            <rt-card-buy>
                                                                <template slot="content">
                                                                    <div class="rt-space-horizontal">
                                                                        <div class="rt-font-center rt-space-top">
                                                                            <img class="rt-sensor-img"
                                                                                 src="https://spb.rt.ru/sites/default/files/img/smartHouse-contr1.png"
                                                                                 alt="">
                                                                        </div>
                                                                        <p class="rt-space-top rt-space-bottom rt-font-bold">
                                                                            Контроллер полная стоимость 1</p>
                                                                        <p class="rt-font-control">Контроллер
                                                                            необходим для
                                                                            управления и настройки устройств</p>
                                                                        <div class="rt-space-top">
                                                                            <p class="rt-font-control">
                                                                                Характеристики</p>
                                                                        </div>
                                                                        <p class="rt-font-label color-main05">Входит
                                                                            в любой
                                                                            комплект умного дома</p>

                                                                    </div>

                                                                </template>
                                                                <template slot="form">
                                                                    <div class="rt-space-horizontal">
                                                                        <order-form lcs="active"
                                                                                    class="rt-md-reverse-left-half"
                                                                                    popup-main-url="http://www.rt.ru/"
                                                                                    scope="form-3"
                                                                                    :offer-id="[{offerIds: [403794182990, 413844976190]}]"
                                                                                    :validator-adr="[{ regionIds: mrfCenter, preventSend: true },
                        { regionIds: [3092050, 3092265, 3092484, 3093008, 3093110, 3093225, 3092694], preventSend: true },
                        { regionIds: [2229963, 2233690, 2229861, 2231026, 2231188], preventSend: true },
                        { regionIds: [2982901, 2983002, 2983209], preventSend: true }]">


                                                                            <div class="rt-space-top2">
                                                                                <form data-vv-scope="form-3"
                                                                                      @submit.prevent>
                                                                                    <full-name
                                                                                            class="text-field--purple"></full-name>
                                                                                    <div class="rt-space-top">
                                                                                        <client-phone
                                                                                                class="text-field--purple"></client-phone>
                                                                                    </div>
                                                                                    <div class="rt-space-top">
                                                                                        <email class="text-field--purple"></email>
                                                                                    </div>
                                                                                    <p class="rt-font-paragraph rt-space-top2">
                                                                                        Адрес подключения</p>
                                                                                    <div class="rt-space-top">
                                                                                        <div class="rt-col-8 rt-col-md-3">
                                                                                            <street class="text-field--purple"></street>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="rt-space-top">
                                                                                        <house class="text-field--purple"></house>
                                                                                        <apartment
                                                                                                class="text-field--purple"></apartment>
                                                                                    </div>
                                                                                    <div class="rt-space-top2">

                                                                                    </div>
                                                                                    <div class="row rt-space-top">
                                                                                        <div class="rt-col-8 rt-col-md-3">
                                                                                            <div class="rt-space-top">
                                                                                                <agree></agree>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </form>
                                                                            </div>
                                                                        </order-form>
                                                                    </div>
                                                                </template>
                                                                <template slot="card-footer">
                                                                    <div class="d-flex rt-space-top05 rt-space-bottom flex-end-center">
                                                                        <rt-price :value='750.231'
                                                                                  time-interval='час.'/>
                                                                    </div>
                                                                </template>
                                                                <template slot="button">
                                                                    <submit-button>
                                                                        Подключить
                                                                    </submit-button>
                                                                </template>
                                                            </rt-card-buy>
                                                        </rt-carousel-slide>
                                                        <rt-carousel-slide>
                                                            <rt-card-buy>
                                                                <template slot="content">
                                                                    <div class="rt-space-horizontal">
                                                                        <div class="rt-font-center rt-space-top">
                                                                            <img class="rt-sensor-img"
                                                                                 src="https://spb.rt.ru/sites/default/files/img/smartHouse-contr1.png"
                                                                                 alt="">
                                                                        </div>
                                                                        <p class="rt-space-top rt-space-bottom rt-font-bold">
                                                                            Контроллер полная стоимость 1</p>
                                                                        <p class="rt-font-control">Контроллер
                                                                            необходим для
                                                                            управления и настройки устройств</p>
                                                                        <div class="rt-space-top">
                                                                            <p class="rt-font-control">
                                                                                Характеристики</p>
                                                                        </div>
                                                                        <p class="rt-font-label color-main05">Входит
                                                                            в любой
                                                                            комплект умного дома</p>

                                                                    </div>

                                                                </template>
                                                                <template slot="form">
                                                                    <div class="rt-space-horizontal">
                                                                        <order-form lcs="active"
                                                                                    class="rt-md-reverse-left-half"
                                                                                    popup-main-url="http://www.rt.ru/"
                                                                                    scope="form-3"
                                                                                    :offer-id="[{offerIds: [403794182990, 413844976190]}]"
                                                                                    :validator-adr="[{ regionIds: mrfCenter, preventSend: true },
                        { regionIds: [3092050, 3092265, 3092484, 3093008, 3093110, 3093225, 3092694], preventSend: true },
                        { regionIds: [2229963, 2233690, 2229861, 2231026, 2231188], preventSend: true },
                        { regionIds: [2982901, 2983002, 2983209], preventSend: true }]">


                                                                            <div class="rt-space-top2">
                                                                                <form data-vv-scope="form-3"
                                                                                      @submit.prevent>
                                                                                    <full-name
                                                                                            class="text-field--purple"></full-name>
                                                                                    <div class="rt-space-top">
                                                                                        <client-phone
                                                                                                class="text-field--purple"></client-phone>
                                                                                    </div>
                                                                                    <div class="rt-space-top">
                                                                                        <email class="text-field--purple"></email>
                                                                                    </div>
                                                                                    <p class="rt-font-paragraph rt-space-top2">
                                                                                        Адрес подключения</p>
                                                                                    <div class="rt-space-top">
                                                                                        <div class="rt-col-8 rt-col-md-3">
                                                                                            <street class="text-field--purple"></street>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="rt-space-top">
                                                                                        <house class="text-field--purple"></house>
                                                                                        <apartment
                                                                                                class="text-field--purple"></apartment>
                                                                                    </div>
                                                                                    <div class="rt-space-top2">

                                                                                    </div>
                                                                                    <div class="row rt-space-top">
                                                                                        <div class="rt-col-8 rt-col-md-3">
                                                                                            <div class="rt-space-top">
                                                                                                <agree></agree>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </form>
                                                                            </div>
                                                                        </order-form>
                                                                    </div>
                                                                </template>
                                                                <template slot="card-footer">
                                                                    <div class="d-flex rt-space-top05 rt-space-bottom flex-end-center">
                                                                        <rt-price :value='750.231'
                                                                                  time-interval='час.'/>
                                                                    </div>
                                                                </template>
                                                                <template slot="button">
                                                                    <submit-button>
                                                                        Подключить
                                                                    </submit-button>
                                                                </template>
                                                            </rt-card-buy>
                                                        </rt-carousel-slide>
                                                        <rt-carousel-slide>
                                                            <rt-card-buy>
                                                                <template slot="content">
                                                                    <div class="rt-space-horizontal">
                                                                        <div class="rt-font-center rt-space-top">
                                                                            <img class="rt-sensor-img"
                                                                                 src="https://spb.rt.ru/sites/default/files/img/smartHouse-contr1.png"
                                                                                 alt="">
                                                                        </div>
                                                                        <p class="rt-space-top rt-space-bottom rt-font-bold">
                                                                            Контроллер полная стоимость 1</p>
                                                                        <p class="rt-font-control">Контроллер
                                                                            необходим для
                                                                            управления и настройки устройств</p>
                                                                        <div class="rt-space-top">
                                                                            <p class="rt-font-control">
                                                                                Характеристики</p>
                                                                        </div>
                                                                        <p class="rt-font-label color-main05">Входит
                                                                            в любой
                                                                            комплект умного дома</p>

                                                                    </div>

                                                                </template>
                                                                <template slot="form">
                                                                    <div class="rt-space-horizontal">
                                                                        <order-form lcs="active"
                                                                                    class="rt-md-reverse-left-half"
                                                                                    popup-main-url="http://www.rt.ru/"
                                                                                    scope="form-3"
                                                                                    :offer-id="[{offerIds: [403794182990, 413844976190]}]"
                                                                                    :validator-adr="[{ regionIds: mrfCenter, preventSend: true },
                        { regionIds: [3092050, 3092265, 3092484, 3093008, 3093110, 3093225, 3092694], preventSend: true },
                        { regionIds: [2229963, 2233690, 2229861, 2231026, 2231188], preventSend: true },
                        { regionIds: [2982901, 2983002, 2983209], preventSend: true }]">


                                                                            <div class="rt-space-top2">
                                                                                <form data-vv-scope="form-3"
                                                                                      @submit.prevent>
                                                                                    <full-name
                                                                                            class="text-field--purple"></full-name>
                                                                                    <div class="rt-space-top">
                                                                                        <client-phone
                                                                                                class="text-field--purple"></client-phone>
                                                                                    </div>
                                                                                    <div class="rt-space-top">
                                                                                        <email class="text-field--purple"></email>
                                                                                    </div>
                                                                                    <p class="rt-font-paragraph rt-space-top2">
                                                                                        Адрес подключения</p>
                                                                                    <div class="rt-space-top">
                                                                                        <div class="rt-col-8 rt-col-md-3">
                                                                                            <street class="text-field--purple"></street>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="rt-space-top">
                                                                                        <house class="text-field--purple"></house>
                                                                                        <apartment
                                                                                                class="text-field--purple"></apartment>
                                                                                    </div>
                                                                                    <div class="rt-space-top2">

                                                                                    </div>
                                                                                    <div class="row rt-space-top">
                                                                                        <div class="rt-col-8 rt-col-md-3">
                                                                                            <div class="rt-space-top">
                                                                                                <agree></agree>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </form>
                                                                            </div>
                                                                        </order-form>
                                                                    </div>
                                                                </template>
                                                                <template slot="card-footer">
                                                                    <div class="d-flex rt-space-top05 rt-space-bottom flex-end-center">
                                                                        <rt-price :value='750.231'
                                                                                  time-interval='час.'/>
                                                                    </div>
                                                                </template>
                                                                <template slot="button">
                                                                    <submit-button>
                                                                        Подключить
                                                                    </submit-button>
                                                                </template>
                                                            </rt-card-buy>
                                                        </rt-carousel-slide>
                                                    </rt-carousel>
                                                </div>
                                            </rt-tabs-content-item>
                                        </template>
                                    </rt-tabs>
                                </rt-tabs-content-item>
                                <rt-tabs-content-item name="2">
                                    <rt-tabs :show-as-tags="true" class="rt-tabs--sensor-tags">
                                        <template slot="navigation">

                                            <rt-tabs-nav-item name="2two">Полная стоимость
                                            </rt-tabs-nav-item>
                                            <rt-tabs-nav-item :active-tab="true" name="2one">
                                                Рассрочка
                                            </rt-tabs-nav-item>
                                        </template>
                                        <template slot="content">
                                            <rt-tabs-content-item name="2one">
                                                <div class="row">
                                                    <rt-carousel>
                                                        <rt-carousel-slide>

                                                            <rt-card-buy>
                                                                <template slot="content">
                                                                    <div class="rt-space-horizontal">
                                                                        <div class="rt-font-center rt-space-top">
                                                                            <img class="rt-sensor-img"
                                                                                 src="https://spb.rt.ru/sites/default/files/img/cardBackground2.png"
                                                                                 alt="">
                                                                        </div>
                                                                        <p class="rt-space-top rt-space-bottom rt-font-bold">
                                                                            Контроллер рассрочка 2</p>
                                                                        <p class="rt-font-control">Контроллер
                                                                            необходим для
                                                                            управления и настройки устройств</p>
                                                                        <div class="rt-space-top">
                                                                            <p class="rt-font-control">
                                                                                Характеристики</p>
                                                                        </div>
                                                                        <p class="rt-font-label color-main05">Входит
                                                                            в любой
                                                                            комплект умного дома</p>

                                                                    </div>

                                                                </template>
                                                                <template slot="form">
                                                                    <div class="rt-space-horizontal">
                                                                        <order-form lcs="active"
                                                                                    class="rt-md-reverse-left-half"
                                                                                    popup-main-url="http://www.rt.ru/"
                                                                                    scope="form-3"
                                                                                    :offer-id="[{offerIds: [403794182990, 413844976190]}]"
                                                                                    :validator-adr="[{ regionIds: mrfCenter, preventSend: true },
                        { regionIds: [3092050, 3092265, 3092484, 3093008, 3093110, 3093225, 3092694], preventSend: true },
                        { regionIds: [2229963, 2233690, 2229861, 2231026, 2231188], preventSend: true },
                        { regionIds: [2982901, 2983002, 2983209], preventSend: true }]">


                                                                            <div class="rt-space-top2">
                                                                                <form data-vv-scope="form-3"
                                                                                      @submit.prevent>
                                                                                    <full-name
                                                                                            class="text-field--purple"></full-name>
                                                                                    <div class="rt-space-top">
                                                                                        <client-phone
                                                                                                class="text-field--purple"></client-phone>
                                                                                    </div>
                                                                                    <div class="rt-space-top">
                                                                                        <email class="text-field--purple"></email>
                                                                                    </div>
                                                                                    <p class="rt-font-paragraph rt-space-top2">
                                                                                        Адрес подключения</p>
                                                                                    <div class="rt-space-top">
                                                                                        <div class="rt-col-8 rt-col-md-3">
                                                                                            <street class="text-field--purple"></street>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="rt-space-top">
                                                                                        <house class="text-field--purple"></house>
                                                                                        <apartment
                                                                                                class="text-field--purple"></apartment>
                                                                                    </div>
                                                                                    <div class="rt-space-top2">

                                                                                    </div>
                                                                                    <div class="row rt-space-top">
                                                                                        <div class="rt-col-8 rt-col-md-3">
                                                                                            <div class="rt-space-top">
                                                                                                <agree></agree>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </form>
                                                                            </div>
                                                                        </order-form>
                                                                    </div>
                                                                </template>
                                                                <template slot="card-footer">
                                                                    <div class="d-flex rt-space-top05 rt-space-bottom flex-end-center">
                                                                        <rt-price :value='750.231'
                                                                                  time-interval='час.'/>
                                                                    </div>
                                                                </template>
                                                                <template slot="button">
                                                                    <submit-button>
                                                                        Подключить
                                                                    </submit-button>
                                                                </template>
                                                            </rt-card-buy>
                                                        </rt-carousel-slide>
                                                        <rt-carousel-slide>

                                                            <rt-card-buy>
                                                                <template slot="content">
                                                                    <div class="rt-space-horizontal">
                                                                        <div class="rt-font-center rt-space-top">
                                                                            <img class="rt-sensor-img"
                                                                                 src="https://spb.rt.ru/sites/default/files/img/cardBackground2.png"
                                                                                 alt="">
                                                                        </div>
                                                                        <p class="rt-space-top rt-space-bottom rt-font-bold">
                                                                            Контроллер рассрочка 2</p>
                                                                        <p class="rt-font-control">Контроллер
                                                                            необходим для
                                                                            управления и настройки устройств</p>
                                                                        <div class="rt-space-top">
                                                                            <p class="rt-font-control">
                                                                                Характеристики</p>
                                                                        </div>
                                                                        <p class="rt-font-label color-main05">Входит
                                                                            в любой
                                                                            комплект умного дома</p>

                                                                    </div>

                                                                </template>
                                                                <template slot="form">
                                                                    <div class="rt-space-horizontal">
                                                                        <order-form lcs="active"
                                                                                    class="rt-md-reverse-left-half"
                                                                                    popup-main-url="http://www.rt.ru/"
                                                                                    scope="form-3"
                                                                                    :offer-id="[{offerIds: [403794182990, 413844976190]}]"
                                                                                    :validator-adr="[{ regionIds: mrfCenter, preventSend: true },
                        { regionIds: [3092050, 3092265, 3092484, 3093008, 3093110, 3093225, 3092694], preventSend: true },
                        { regionIds: [2229963, 2233690, 2229861, 2231026, 2231188], preventSend: true },
                        { regionIds: [2982901, 2983002, 2983209], preventSend: true }]">


                                                                            <div class="rt-space-top2">
                                                                                <form data-vv-scope="form-3"
                                                                                      @submit.prevent>
                                                                                    <full-name
                                                                                            class="text-field--purple"></full-name>
                                                                                    <div class="rt-space-top">
                                                                                        <client-phone
                                                                                                class="text-field--purple"></client-phone>
                                                                                    </div>
                                                                                    <div class="rt-space-top">
                                                                                        <email class="text-field--purple"></email>
                                                                                    </div>
                                                                                    <p class="rt-font-paragraph rt-space-top2">
                                                                                        Адрес подключения</p>
                                                                                    <div class="rt-space-top">
                                                                                        <div class="rt-col-8 rt-col-md-3">
                                                                                            <street class="text-field--purple"></street>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="rt-space-top">
                                                                                        <house class="text-field--purple"></house>
                                                                                        <apartment
                                                                                                class="text-field--purple"></apartment>
                                                                                    </div>
                                                                                    <div class="rt-space-top2">

                                                                                    </div>
                                                                                    <div class="row rt-space-top">
                                                                                        <div class="rt-col-8 rt-col-md-3">
                                                                                            <div class="rt-space-top">
                                                                                                <agree></agree>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </form>
                                                                            </div>
                                                                        </order-form>
                                                                    </div>
                                                                </template>
                                                                <template slot="card-footer">
                                                                    <div class="d-flex rt-space-top05 rt-space-bottom flex-end-center">
                                                                        <rt-price :value='750.231'
                                                                                  time-interval='час.'/>
                                                                    </div>
                                                                </template>
                                                                <template slot="button">
                                                                    <submit-button>
                                                                        Подключить
                                                                    </submit-button>
                                                                </template>
                                                            </rt-card-buy>
                                                        </rt-carousel-slide>
                                                        <rt-carousel-slide>

                                                            <rt-card-buy>
                                                                <template slot="content">
                                                                    <div class="rt-space-horizontal">
                                                                        <div class="rt-font-center rt-space-top">
                                                                            <img class="rt-sensor-img"
                                                                                 src="https://spb.rt.ru/sites/default/files/img/cardBackground2.png"
                                                                                 alt="">
                                                                        </div>
                                                                        <p class="rt-space-top rt-space-bottom rt-font-bold">
                                                                            Контроллер рассрочка 2</p>
                                                                        <p class="rt-font-control">Контроллер
                                                                            необходим для
                                                                            управления и настройки устройств</p>
                                                                        <div class="rt-space-top">
                                                                            <p class="rt-font-control">
                                                                                Характеристики</p>
                                                                        </div>
                                                                        <p class="rt-font-label color-main05">Входит
                                                                            в любой
                                                                            комплект умного дома</p>

                                                                    </div>

                                                                </template>
                                                                <template slot="form">
                                                                    <div class="rt-space-horizontal">
                                                                        <order-form lcs="active"
                                                                                    class="rt-md-reverse-left-half"
                                                                                    popup-main-url="http://www.rt.ru/"
                                                                                    scope="form-3"
                                                                                    :offer-id="[{offerIds: [403794182990, 413844976190]}]"
                                                                                    :validator-adr="[{ regionIds: mrfCenter, preventSend: true },
                        { regionIds: [3092050, 3092265, 3092484, 3093008, 3093110, 3093225, 3092694], preventSend: true },
                        { regionIds: [2229963, 2233690, 2229861, 2231026, 2231188], preventSend: true },
                        { regionIds: [2982901, 2983002, 2983209], preventSend: true }]">


                                                                            <div class="rt-space-top2">
                                                                                <form data-vv-scope="form-3"
                                                                                      @submit.prevent>
                                                                                    <full-name
                                                                                            class="text-field--purple"></full-name>
                                                                                    <div class="rt-space-top">
                                                                                        <client-phone
                                                                                                class="text-field--purple"></client-phone>
                                                                                    </div>
                                                                                    <div class="rt-space-top">
                                                                                        <email class="text-field--purple"></email>
                                                                                    </div>
                                                                                    <p class="rt-font-paragraph rt-space-top2">
                                                                                        Адрес подключения</p>
                                                                                    <div class="rt-space-top">
                                                                                        <div class="rt-col-8 rt-col-md-3">
                                                                                            <street class="text-field--purple"></street>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="rt-space-top">
                                                                                        <house class="text-field--purple"></house>
                                                                                        <apartment
                                                                                                class="text-field--purple"></apartment>
                                                                                    </div>
                                                                                    <div class="rt-space-top2">

                                                                                    </div>
                                                                                    <div class="row rt-space-top">
                                                                                        <div class="rt-col-8 rt-col-md-3">
                                                                                            <div class="rt-space-top">
                                                                                                <agree></agree>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </form>
                                                                            </div>
                                                                        </order-form>
                                                                    </div>
                                                                </template>
                                                                <template slot="card-footer">
                                                                    <div class="d-flex rt-space-top05 rt-space-bottom flex-end-center">
                                                                        <rt-price :value='750.231'
                                                                                  time-interval='час.'/>
                                                                    </div>
                                                                </template>
                                                                <template slot="button">
                                                                    <submit-button>
                                                                        Подключить
                                                                    </submit-button>
                                                                </template>
                                                            </rt-card-buy>
                                                        </rt-carousel-slide>
                                                        <rt-carousel-slide>
                                                            <rt-card-buy>
                                                                <template slot="content">
                                                                    <div class="rt-space-horizontal">
                                                                        <div class="rt-font-center rt-space-top">
                                                                            <img class="rt-sensor-img"
                                                                                 src="https://spb.rt.ru/sites/default/files/img/cardBackground2.png"
                                                                                 alt="">
                                                                        </div>
                                                                        <p class="rt-space-top rt-space-bottom rt-font-bold">
                                                                            Контроллер рассрочка 2</p>
                                                                        <p class="rt-font-control">Контроллер
                                                                            необходим для
                                                                            управления и настройки устройств</p>
                                                                        <div class="rt-space-top">
                                                                            <p class="rt-font-control">
                                                                                Характеристики</p>
                                                                        </div>
                                                                        <p class="rt-font-label color-main05">Входит
                                                                            в любой
                                                                            комплект умного дома</p>

                                                                    </div>

                                                                </template>
                                                                <template slot="form">
                                                                    <div class="rt-space-horizontal">
                                                                        <order-form lcs="active"
                                                                                    class="rt-md-reverse-left-half"
                                                                                    popup-main-url="http://www.rt.ru/"
                                                                                    scope="form-3"
                                                                                    :offer-id="[{offerIds: [403794182990, 413844976190]}]"
                                                                                    :validator-adr="[{ regionIds: mrfCenter, preventSend: true },
                        { regionIds: [3092050, 3092265, 3092484, 3093008, 3093110, 3093225, 3092694], preventSend: true },
                        { regionIds: [2229963, 2233690, 2229861, 2231026, 2231188], preventSend: true },
                        { regionIds: [2982901, 2983002, 2983209], preventSend: true }]">


                                                                            <div class="rt-space-top2">
                                                                                <form data-vv-scope="form-3"
                                                                                      @submit.prevent>
                                                                                    <full-name
                                                                                            class="text-field--purple"></full-name>
                                                                                    <div class="rt-space-top">
                                                                                        <client-phone
                                                                                                class="text-field--purple"></client-phone>
                                                                                    </div>
                                                                                    <div class="rt-space-top">
                                                                                        <email class="text-field--purple"></email>
                                                                                    </div>
                                                                                    <p class="rt-font-paragraph rt-space-top2">
                                                                                        Адрес подключения</p>
                                                                                    <div class="rt-space-top">
                                                                                        <div class="rt-col-8 rt-col-md-3">
                                                                                            <street class="text-field--purple"></street>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="rt-space-top">
                                                                                        <house class="text-field--purple"></house>
                                                                                        <apartment
                                                                                                class="text-field--purple"></apartment>
                                                                                    </div>
                                                                                    <div class="rt-space-top2">

                                                                                    </div>
                                                                                    <div class="row rt-space-top">
                                                                                        <div class="rt-col-8 rt-col-md-3">
                                                                                            <div class="rt-space-top">
                                                                                                <agree></agree>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </form>
                                                                            </div>
                                                                        </order-form>
                                                                    </div>
                                                                </template>
                                                                <template slot="card-footer">
                                                                    <div class="d-flex rt-space-top05 rt-space-bottom flex-end-center">
                                                                        <rt-price :value='750.231'
                                                                                  time-interval='час.'/>
                                                                    </div>
                                                                </template>
                                                                <template slot="button">
                                                                    <submit-button>
                                                                        Подключить
                                                                    </submit-button>
                                                                </template>
                                                            </rt-card-buy>
                                                        </rt-carousel-slide>

                                                        <rt-carousel-slide>

                                                            <rt-card-buy>
                                                                <template slot="content">
                                                                    <div class="rt-space-horizontal">
                                                                        <div class="rt-font-center rt-space-top">
                                                                            <img class="rt-sensor-img"
                                                                                 src="https://spb.rt.ru/sites/default/files/img/cardBackground2.png"
                                                                                 alt="">
                                                                        </div>
                                                                        <p class="rt-space-top rt-space-bottom rt-font-bold">
                                                                            Контроллер рассрочка 2</p>
                                                                        <p class="rt-font-control">Контроллер
                                                                            необходим для
                                                                            управления и настройки устройств</p>
                                                                        <div class="rt-space-top">
                                                                            <p class="rt-font-control">
                                                                                Характеристики</p>
                                                                        </div>
                                                                        <p class="rt-font-label color-main05">Входит
                                                                            в любой
                                                                            комплект умного дома</p>

                                                                    </div>

                                                                </template>
                                                                <template slot="form">
                                                                    <div class="rt-space-horizontal">
                                                                        <order-form lcs="active"
                                                                                    class="rt-md-reverse-left-half"
                                                                                    popup-main-url="http://www.rt.ru/"
                                                                                    scope="form-3"
                                                                                    :offer-id="[{offerIds: [403794182990, 413844976190]}]"
                                                                                    :validator-adr="[{ regionIds: mrfCenter, preventSend: true },
                        { regionIds: [3092050, 3092265, 3092484, 3093008, 3093110, 3093225, 3092694], preventSend: true },
                        { regionIds: [2229963, 2233690, 2229861, 2231026, 2231188], preventSend: true },
                        { regionIds: [2982901, 2983002, 2983209], preventSend: true }]">


                                                                            <div class="rt-space-top2">
                                                                                <form data-vv-scope="form-3"
                                                                                      @submit.prevent>
                                                                                    <full-name
                                                                                            class="text-field--purple"></full-name>
                                                                                    <div class="rt-space-top">
                                                                                        <client-phone
                                                                                                class="text-field--purple"></client-phone>
                                                                                    </div>
                                                                                    <div class="rt-space-top">
                                                                                        <email class="text-field--purple"></email>
                                                                                    </div>
                                                                                    <p class="rt-font-paragraph rt-space-top2">
                                                                                        Адрес подключения</p>
                                                                                    <div class="rt-space-top">
                                                                                        <div class="rt-col-8 rt-col-md-3">
                                                                                            <street class="text-field--purple"></street>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="rt-space-top">
                                                                                        <house class="text-field--purple"></house>
                                                                                        <apartment
                                                                                                class="text-field--purple"></apartment>
                                                                                    </div>
                                                                                    <div class="rt-space-top2">

                                                                                    </div>
                                                                                    <div class="row rt-space-top">
                                                                                        <div class="rt-col-8 rt-col-md-3">
                                                                                            <div class="rt-space-top">
                                                                                                <agree></agree>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </form>
                                                                            </div>
                                                                        </order-form>
                                                                    </div>
                                                                </template>
                                                                <template slot="card-footer">
                                                                    <div class="d-flex rt-space-top05 rt-space-bottom flex-end-center">
                                                                        <rt-price :value='750.231'
                                                                                  time-interval='час.'/>
                                                                    </div>
                                                                </template>
                                                                <template slot="button">
                                                                    <submit-button>
                                                                        Подключить
                                                                    </submit-button>
                                                                </template>
                                                            </rt-card-buy>
                                                        </rt-carousel-slide>
                                                        <rt-carousel-slide>
                                                            <rt-card-buy>
                                                                <template slot="content">
                                                                    <div class="rt-space-horizontal">
                                                                        <div class="rt-font-center rt-space-top">
                                                                            <img class="rt-sensor-img"
                                                                                 src="https://spb.rt.ru/sites/default/files/img/cardBackground2.png"
                                                                                 alt="">
                                                                        </div>
                                                                        <p class="rt-space-top rt-space-bottom rt-font-bold">
                                                                            Контроллер рассрочка 2</p>
                                                                        <p class="rt-font-control">Контроллер
                                                                            необходим для
                                                                            управления и настройки устройств</p>
                                                                        <div class="rt-space-top">
                                                                            <p class="rt-font-control">
                                                                                Характеристики</p>
                                                                        </div>
                                                                        <p class="rt-font-label color-main05">Входит
                                                                            в любой
                                                                            комплект умного дома</p>

                                                                    </div>

                                                                </template>
                                                                <template slot="form">
                                                                    <div class="rt-space-horizontal">
                                                                        <order-form lcs="active"
                                                                                    class="rt-md-reverse-left-half"
                                                                                    popup-main-url="http://www.rt.ru/"
                                                                                    scope="form-3"
                                                                                    :offer-id="[{offerIds: [403794182990, 413844976190]}]"
                                                                                    :validator-adr="[{ regionIds: mrfCenter, preventSend: true },
                        { regionIds: [3092050, 3092265, 3092484, 3093008, 3093110, 3093225, 3092694], preventSend: true },
                        { regionIds: [2229963, 2233690, 2229861, 2231026, 2231188], preventSend: true },
                        { regionIds: [2982901, 2983002, 2983209], preventSend: true }]">


                                                                            <div class="rt-space-top2">
                                                                                <form data-vv-scope="form-3"
                                                                                      @submit.prevent>
                                                                                    <full-name
                                                                                            class="text-field--purple"></full-name>
                                                                                    <div class="rt-space-top">
                                                                                        <client-phone
                                                                                                class="text-field--purple"></client-phone>
                                                                                    </div>
                                                                                    <div class="rt-space-top">
                                                                                        <email class="text-field--purple"></email>
                                                                                    </div>
                                                                                    <p class="rt-font-paragraph rt-space-top2">
                                                                                        Адрес подключения</p>
                                                                                    <div class="rt-space-top">
                                                                                        <div class="rt-col-8 rt-col-md-3">
                                                                                            <street class="text-field--purple"></street>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="rt-space-top">
                                                                                        <house class="text-field--purple"></house>
                                                                                        <apartment
                                                                                                class="text-field--purple"></apartment>
                                                                                    </div>
                                                                                    <div class="rt-space-top2">

                                                                                    </div>
                                                                                    <div class="row rt-space-top">
                                                                                        <div class="rt-col-8 rt-col-md-3">
                                                                                            <div class="rt-space-top">
                                                                                                <agree></agree>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </form>
                                                                            </div>
                                                                        </order-form>
                                                                    </div>
                                                                </template>
                                                                <template slot="card-footer">
                                                                    <div class="d-flex rt-space-top05 rt-space-bottom flex-end-center">
                                                                        <rt-price :value='750.231'
                                                                                  time-interval='час.'/>
                                                                    </div>
                                                                </template>
                                                                <template slot="button">
                                                                    <submit-button>
                                                                        Подключить
                                                                    </submit-button>
                                                                </template>
                                                            </rt-card-buy>
                                                        </rt-carousel-slide>
                                                        <rt-carousel-slide>
                                                            <rt-card-buy>
                                                                <template slot="content">
                                                                    <div class="rt-space-horizontal">
                                                                        <div class="rt-font-center rt-space-top">
                                                                            <img class="rt-sensor-img"
                                                                                 src="https://spb.rt.ru/sites/default/files/img/cardBackground2.png"
                                                                                 alt="">
                                                                        </div>
                                                                        <p class="rt-space-top rt-space-bottom rt-font-bold">
                                                                            Контроллер рассрочка 2</p>
                                                                        <p class="rt-font-control">Контроллер
                                                                            необходим для
                                                                            управления и настройки устройств</p>
                                                                        <div class="rt-space-top">
                                                                            <p class="rt-font-control">
                                                                                Характеристики</p>
                                                                        </div>
                                                                        <p class="rt-font-label color-main05">Входит
                                                                            в любой
                                                                            комплект умного дома</p>

                                                                    </div>

                                                                </template>
                                                                <template slot="form">
                                                                    <div class="rt-space-horizontal">
                                                                        <order-form lcs="active"
                                                                                    class="rt-md-reverse-left-half"
                                                                                    popup-main-url="http://www.rt.ru/"
                                                                                    scope="form-3"
                                                                                    :offer-id="[{offerIds: [403794182990, 413844976190]}]"
                                                                                    :validator-adr="[{ regionIds: mrfCenter, preventSend: true },
                        { regionIds: [3092050, 3092265, 3092484, 3093008, 3093110, 3093225, 3092694], preventSend: true },
                        { regionIds: [2229963, 2233690, 2229861, 2231026, 2231188], preventSend: true },
                        { regionIds: [2982901, 2983002, 2983209], preventSend: true }]">


                                                                            <div class="rt-space-top2">
                                                                                <form data-vv-scope="form-3"
                                                                                      @submit.prevent>
                                                                                    <full-name
                                                                                            class="text-field--purple"></full-name>
                                                                                    <div class="rt-space-top">
                                                                                        <client-phone
                                                                                                class="text-field--purple"></client-phone>
                                                                                    </div>
                                                                                    <div class="rt-space-top">
                                                                                        <email class="text-field--purple"></email>
                                                                                    </div>
                                                                                    <p class="rt-font-paragraph rt-space-top2">
                                                                                        Адрес подключения</p>
                                                                                    <div class="rt-space-top">
                                                                                        <div class="rt-col-8 rt-col-md-3">
                                                                                            <street class="text-field--purple"></street>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="rt-space-top">
                                                                                        <house class="text-field--purple"></house>
                                                                                        <apartment
                                                                                                class="text-field--purple"></apartment>
                                                                                    </div>
                                                                                    <div class="rt-space-top2">

                                                                                    </div>
                                                                                    <div class="row rt-space-top">
                                                                                        <div class="rt-col-8 rt-col-md-3">
                                                                                            <div class="rt-space-top">
                                                                                                <agree></agree>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </form>
                                                                            </div>
                                                                        </order-form>
                                                                    </div>
                                                                </template>
                                                                <template slot="card-footer">
                                                                    <div class="d-flex rt-space-top05 rt-space-bottom flex-end-center">
                                                                        <rt-price :value='750.231'
                                                                                  time-interval='час.'/>
                                                                    </div>
                                                                </template>
                                                                <template slot="button">
                                                                    <submit-button>
                                                                        Подключить
                                                                    </submit-button>
                                                                </template>
                                                            </rt-card-buy>
                                                        </rt-carousel-slide>
                                                        <rt-carousel-slide>
                                                            <rt-card-buy>
                                                                <template slot="content">
                                                                    <div class="rt-space-horizontal">
                                                                        <div class="rt-font-center rt-space-top">
                                                                            <img class="rt-sensor-img"
                                                                                 src="https://spb.rt.ru/sites/default/files/img/cardBackground2.png"
                                                                                 alt="">
                                                                        </div>
                                                                        <p class="rt-space-top rt-space-bottom rt-font-bold">
                                                                            Контроллер рассрочка 2</p>
                                                                        <p class="rt-font-control">Контроллер
                                                                            необходим для
                                                                            управления и настройки устройств</p>
                                                                        <div class="rt-space-top">
                                                                            <p class="rt-font-control">
                                                                                Характеристики</p>
                                                                        </div>
                                                                        <p class="rt-font-label color-main05">Входит
                                                                            в любой
                                                                            комплект умного дома</p>

                                                                    </div>

                                                                </template>
                                                                <template slot="form">
                                                                    <div class="rt-space-horizontal">
                                                                        <order-form lcs="active"
                                                                                    class="rt-md-reverse-left-half"
                                                                                    popup-main-url="http://www.rt.ru/"
                                                                                    scope="form-3"
                                                                                    :offer-id="[{offerIds: [403794182990, 413844976190]}]"
                                                                                    :validator-adr="[{ regionIds: mrfCenter, preventSend: true },
                        { regionIds: [3092050, 3092265, 3092484, 3093008, 3093110, 3093225, 3092694], preventSend: true },
                        { regionIds: [2229963, 2233690, 2229861, 2231026, 2231188], preventSend: true },
                        { regionIds: [2982901, 2983002, 2983209], preventSend: true }]">


                                                                            <div class="rt-space-top2">
                                                                                <form data-vv-scope="form-3"
                                                                                      @submit.prevent>
                                                                                    <full-name
                                                                                            class="text-field--purple"></full-name>
                                                                                    <div class="rt-space-top">
                                                                                        <client-phone
                                                                                                class="text-field--purple"></client-phone>
                                                                                    </div>
                                                                                    <div class="rt-space-top">
                                                                                        <email class="text-field--purple"></email>
                                                                                    </div>
                                                                                    <p class="rt-font-paragraph rt-space-top2">
                                                                                        Адрес подключения</p>
                                                                                    <div class="rt-space-top">
                                                                                        <div class="rt-col-8 rt-col-md-3">
                                                                                            <street class="text-field--purple"></street>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="rt-space-top">
                                                                                        <house class="text-field--purple"></house>
                                                                                        <apartment
                                                                                                class="text-field--purple"></apartment>
                                                                                    </div>
                                                                                    <div class="rt-space-top2">

                                                                                    </div>
                                                                                    <div class="row rt-space-top">
                                                                                        <div class="rt-col-8 rt-col-md-3">
                                                                                            <div class="rt-space-top">
                                                                                                <agree></agree>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </form>
                                                                            </div>
                                                                        </order-form>
                                                                    </div>
                                                                </template>
                                                                <template slot="card-footer">
                                                                    <div class="d-flex rt-space-top05 rt-space-bottom flex-end-center">
                                                                        <rt-price :value='750.231'
                                                                                  time-interval='час.'/>
                                                                    </div>
                                                                </template>
                                                                <template slot="button">
                                                                    <submit-button>
                                                                        Подключить
                                                                    </submit-button>
                                                                </template>
                                                            </rt-card-buy>
                                                        </rt-carousel-slide>
                                                    </rt-carousel>
                                                </div>

                                            </rt-tabs-content-item>
                                            <rt-tabs-content-item name="2two">
                                                <rt-carousel>
                                                    <rt-carousel-slide>

                                                        <rt-card-buy>
                                                            <template slot="content">
                                                                <div class="rt-space-horizontal">
                                                                    <div class="rt-font-center rt-space-top">
                                                                        <img class="rt-sensor-img"
                                                                             src="https://spb.rt.ru/sites/default/files/img/cardBackground2.png"
                                                                             alt="">
                                                                    </div>
                                                                    <p class="rt-space-top rt-space-bottom rt-font-bold">
                                                                        Контроллер полная стоимость 2</p>
                                                                    <p class="rt-font-control">Контроллер
                                                                        необходим для
                                                                        управления и настройки устройств</p>
                                                                    <div class="rt-space-top">
                                                                        <p class="rt-font-control">
                                                                            Характеристики</p>
                                                                    </div>
                                                                    <p class="rt-font-label color-main05">Входит
                                                                        в любой
                                                                        комплект умного дома</p>

                                                                </div>

                                                            </template>
                                                            <template slot="form">
                                                                <div class="rt-space-horizontal">
                                                                    <order-form lcs="active"
                                                                                class="rt-md-reverse-left-half"
                                                                                popup-main-url="http://www.rt.ru/"
                                                                                scope="form-3"
                                                                                :offer-id="[{offerIds: [403794182990, 413844976190]}]"
                                                                                :validator-adr="[{ regionIds: mrfCenter, preventSend: true },
                        { regionIds: [3092050, 3092265, 3092484, 3093008, 3093110, 3093225, 3092694], preventSend: true },
                        { regionIds: [2229963, 2233690, 2229861, 2231026, 2231188], preventSend: true },
                        { regionIds: [2982901, 2983002, 2983209], preventSend: true }]">


                                                                        <div class="rt-space-top2">
                                                                            <form data-vv-scope="form-3"
                                                                                  @submit.prevent>
                                                                                <full-name
                                                                                        class="text-field--purple"></full-name>
                                                                                <div class="rt-space-top">
                                                                                    <client-phone
                                                                                            class="text-field--purple"></client-phone>
                                                                                </div>
                                                                                <div class="rt-space-top">
                                                                                    <email class="text-field--purple"></email>
                                                                                </div>
                                                                                <p class="rt-font-paragraph rt-space-top2">
                                                                                    Адрес подключения</p>
                                                                                <div class="rt-space-top">
                                                                                    <div class="rt-col-8 rt-col-md-3">
                                                                                        <street class="text-field--purple"></street>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="rt-space-top">
                                                                                    <house class="text-field--purple"></house>
                                                                                    <apartment
                                                                                            class="text-field--purple"></apartment>
                                                                                </div>
                                                                                <div class="rt-space-top2">

                                                                                </div>
                                                                                <div class="row rt-space-top">
                                                                                    <div class="rt-col-8 rt-col-md-3">
                                                                                        <div class="rt-space-top">
                                                                                            <agree></agree>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </form>
                                                                        </div>
                                                                    </order-form>
                                                                </div>
                                                            </template>
                                                            <template slot="card-footer">
                                                                <div class="d-flex rt-space-top05 rt-space-bottom flex-end-center">
                                                                    <rt-price :value='750.231'
                                                                              time-interval='час.'/>
                                                                </div>
                                                            </template>
                                                            <template slot="button">
                                                                <submit-button>
                                                                    Подключить
                                                                </submit-button>
                                                            </template>
                                                        </rt-card-buy>
                                                    </rt-carousel-slide>
                                                    <rt-carousel-slide>

                                                        <rt-card-buy>
                                                            <template slot="content">
                                                                <div class="rt-space-horizontal">
                                                                    <div class="rt-font-center rt-space-top">
                                                                        <img class="rt-sensor-img"
                                                                             src="https://spb.rt.ru/sites/default/files/img/cardBackground2.png"
                                                                             alt="">
                                                                    </div>
                                                                    <p class="rt-space-top rt-space-bottom rt-font-bold">
                                                                        Контроллер полная стоимость 2</p>
                                                                    <p class="rt-font-control">Контроллер
                                                                        необходим для
                                                                        управления и настройки устройств</p>
                                                                    <div class="rt-space-top">
                                                                        <p class="rt-font-control">
                                                                            Характеристики</p>
                                                                    </div>
                                                                    <p class="rt-font-label color-main05">Входит
                                                                        в любой
                                                                        комплект умного дома</p>

                                                                </div>

                                                            </template>
                                                            <template slot="form">
                                                                <div class="rt-space-horizontal">
                                                                    <order-form lcs="active"
                                                                                class="rt-md-reverse-left-half"
                                                                                popup-main-url="http://www.rt.ru/"
                                                                                scope="form-3"
                                                                                :offer-id="[{offerIds: [403794182990, 413844976190]}]"
                                                                                :validator-adr="[{ regionIds: mrfCenter, preventSend: true },
                        { regionIds: [3092050, 3092265, 3092484, 3093008, 3093110, 3093225, 3092694], preventSend: true },
                        { regionIds: [2229963, 2233690, 2229861, 2231026, 2231188], preventSend: true },
                        { regionIds: [2982901, 2983002, 2983209], preventSend: true }]">


                                                                        <div class="rt-space-top2">
                                                                            <form data-vv-scope="form-3"
                                                                                  @submit.prevent>
                                                                                <full-name
                                                                                        class="text-field--purple"></full-name>
                                                                                <div class="rt-space-top">
                                                                                    <client-phone
                                                                                            class="text-field--purple"></client-phone>
                                                                                </div>
                                                                                <div class="rt-space-top">
                                                                                    <email class="text-field--purple"></email>
                                                                                </div>
                                                                                <p class="rt-font-paragraph rt-space-top2">
                                                                                    Адрес подключения</p>
                                                                                <div class="rt-space-top">
                                                                                    <div class="rt-col-8 rt-col-md-3">
                                                                                        <street class="text-field--purple"></street>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="rt-space-top">
                                                                                    <house class="text-field--purple"></house>
                                                                                    <apartment
                                                                                            class="text-field--purple"></apartment>
                                                                                </div>
                                                                                <div class="rt-space-top2">

                                                                                </div>
                                                                                <div class="row rt-space-top">
                                                                                    <div class="rt-col-8 rt-col-md-3">
                                                                                        <div class="rt-space-top">
                                                                                            <agree></agree>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </form>
                                                                        </div>
                                                                    </order-form>
                                                                </div>
                                                            </template>
                                                            <template slot="card-footer">
                                                                <div class="d-flex rt-space-top05 rt-space-bottom flex-end-center">
                                                                    <rt-price :value='750.231'
                                                                              time-interval='час.'/>
                                                                </div>
                                                            </template>
                                                            <template slot="button">
                                                                <submit-button>
                                                                    Подключить
                                                                </submit-button>
                                                            </template>
                                                        </rt-card-buy>
                                                    </rt-carousel-slide>
                                                    <rt-carousel-slide>

                                                        <rt-card-buy>
                                                            <template slot="content">
                                                                <div class="rt-space-horizontal">
                                                                    <div class="rt-font-center rt-space-top">
                                                                        <img class="rt-sensor-img"
                                                                             src="https://spb.rt.ru/sites/default/files/img/cardBackground2.png"
                                                                             alt="">
                                                                    </div>
                                                                    <p class="rt-space-top rt-space-bottom rt-font-bold">
                                                                        Контроллер полная стоимость 2</p>
                                                                    <p class="rt-font-control">Контроллер
                                                                        необходим для
                                                                        управления и настройки устройств</p>
                                                                    <div class="rt-space-top">
                                                                        <p class="rt-font-control">
                                                                            Характеристики</p>
                                                                    </div>
                                                                    <p class="rt-font-label color-main05">Входит
                                                                        в любой
                                                                        комплект умного дома</p>

                                                                </div>

                                                            </template>
                                                            <template slot="form">
                                                                <div class="rt-space-horizontal">
                                                                    <order-form lcs="active"
                                                                                class="rt-md-reverse-left-half"
                                                                                popup-main-url="http://www.rt.ru/"
                                                                                scope="form-3"
                                                                                :offer-id="[{offerIds: [403794182990, 413844976190]}]"
                                                                                :validator-adr="[{ regionIds: mrfCenter, preventSend: true },
                        { regionIds: [3092050, 3092265, 3092484, 3093008, 3093110, 3093225, 3092694], preventSend: true },
                        { regionIds: [2229963, 2233690, 2229861, 2231026, 2231188], preventSend: true },
                        { regionIds: [2982901, 2983002, 2983209], preventSend: true }]">


                                                                        <div class="rt-space-top2">
                                                                            <form data-vv-scope="form-3"
                                                                                  @submit.prevent>
                                                                                <full-name
                                                                                        class="text-field--purple"></full-name>
                                                                                <div class="rt-space-top">
                                                                                    <client-phone
                                                                                            class="text-field--purple"></client-phone>
                                                                                </div>
                                                                                <div class="rt-space-top">
                                                                                    <email class="text-field--purple"></email>
                                                                                </div>
                                                                                <p class="rt-font-paragraph rt-space-top2">
                                                                                    Адрес подключения</p>
                                                                                <div class="rt-space-top">
                                                                                    <div class="rt-col-8 rt-col-md-3">
                                                                                        <street class="text-field--purple"></street>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="rt-space-top">
                                                                                    <house class="text-field--purple"></house>
                                                                                    <apartment
                                                                                            class="text-field--purple"></apartment>
                                                                                </div>
                                                                                <div class="rt-space-top2">

                                                                                </div>
                                                                                <div class="row rt-space-top">
                                                                                    <div class="rt-col-8 rt-col-md-3">
                                                                                        <div class="rt-space-top">
                                                                                            <agree></agree>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </form>
                                                                        </div>
                                                                    </order-form>
                                                                </div>
                                                            </template>
                                                            <template slot="card-footer">
                                                                <div class="d-flex rt-space-top05 rt-space-bottom flex-end-center">
                                                                    <rt-price :value='750.231'
                                                                              time-interval='час.'/>
                                                                </div>
                                                            </template>
                                                            <template slot="button">
                                                                <submit-button>
                                                                    Подключить
                                                                </submit-button>
                                                            </template>
                                                        </rt-card-buy>
                                                    </rt-carousel-slide>
                                                    <rt-carousel-slide>
                                                        <rt-card-buy>
                                                            <template slot="content">
                                                                <div class="rt-space-horizontal">
                                                                    <div class="rt-font-center rt-space-top">
                                                                        <img class="rt-sensor-img"
                                                                             src="https://spb.rt.ru/sites/default/files/img/cardBackground2.png"
                                                                             alt="">
                                                                    </div>
                                                                    <p class="rt-space-top rt-space-bottom rt-font-bold">
                                                                        Контроллер полная стоимость 2</p>
                                                                    <p class="rt-font-control">Контроллер
                                                                        необходим для
                                                                        управления и настройки устройств</p>
                                                                    <div class="rt-space-top">
                                                                        <p class="rt-font-control">
                                                                            Характеристики</p>
                                                                    </div>
                                                                    <p class="rt-font-label color-main05">Входит
                                                                        в любой
                                                                        комплект умного дома</p>

                                                                </div>

                                                            </template>
                                                            <template slot="form">
                                                                <div class="rt-space-horizontal">
                                                                    <order-form lcs="active"
                                                                                class="rt-md-reverse-left-half"
                                                                                popup-main-url="http://www.rt.ru/"
                                                                                scope="form-3"
                                                                                :offer-id="[{offerIds: [403794182990, 413844976190]}]"
                                                                                :validator-adr="[{ regionIds: mrfCenter, preventSend: true },
                        { regionIds: [3092050, 3092265, 3092484, 3093008, 3093110, 3093225, 3092694], preventSend: true },
                        { regionIds: [2229963, 2233690, 2229861, 2231026, 2231188], preventSend: true },
                        { regionIds: [2982901, 2983002, 2983209], preventSend: true }]">


                                                                        <div class="rt-space-top2">
                                                                            <form data-vv-scope="form-3"
                                                                                  @submit.prevent>
                                                                                <full-name
                                                                                        class="text-field--purple"></full-name>
                                                                                <div class="rt-space-top">
                                                                                    <client-phone
                                                                                            class="text-field--purple"></client-phone>
                                                                                </div>
                                                                                <div class="rt-space-top">
                                                                                    <email class="text-field--purple"></email>
                                                                                </div>
                                                                                <p class="rt-font-paragraph rt-space-top2">
                                                                                    Адрес подключения</p>
                                                                                <div class="rt-space-top">
                                                                                    <div class="rt-col-8 rt-col-md-3">
                                                                                        <street class="text-field--purple"></street>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="rt-space-top">
                                                                                    <house class="text-field--purple"></house>
                                                                                    <apartment
                                                                                            class="text-field--purple"></apartment>
                                                                                </div>
                                                                                <div class="rt-space-top2">

                                                                                </div>
                                                                                <div class="row rt-space-top">
                                                                                    <div class="rt-col-8 rt-col-md-3">
                                                                                        <div class="rt-space-top">
                                                                                            <agree></agree>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </form>
                                                                        </div>
                                                                    </order-form>
                                                                </div>
                                                            </template>
                                                            <template slot="card-footer">
                                                                <div class="d-flex rt-space-top05 rt-space-bottom flex-end-center">
                                                                    <rt-price :value='750.231'
                                                                              time-interval='час.'/>
                                                                </div>
                                                            </template>
                                                            <template slot="button">
                                                                <submit-button>
                                                                    Подключить
                                                                </submit-button>
                                                            </template>
                                                        </rt-card-buy>
                                                    </rt-carousel-slide>

                                                    <rt-carousel-slide>

                                                        <rt-card-buy>
                                                            <template slot="content">
                                                                <div class="rt-space-horizontal">
                                                                    <div class="rt-font-center rt-space-top">
                                                                        <img class="rt-sensor-img"
                                                                             src="https://spb.rt.ru/sites/default/files/img/cardBackground2.png"
                                                                             alt="">
                                                                    </div>
                                                                    <p class="rt-space-top rt-space-bottom rt-font-bold">
                                                                        Контроллер полная стоимость 2</p>
                                                                    <p class="rt-font-control">Контроллер
                                                                        необходим для
                                                                        управления и настройки устройств</p>
                                                                    <div class="rt-space-top">
                                                                        <p class="rt-font-control">
                                                                            Характеристики</p>
                                                                    </div>
                                                                    <p class="rt-font-label color-main05">Входит
                                                                        в любой
                                                                        комплект умного дома</p>

                                                                </div>

                                                            </template>
                                                            <template slot="form">
                                                                <div class="rt-space-horizontal">
                                                                    <order-form lcs="active"
                                                                                class="rt-md-reverse-left-half"
                                                                                popup-main-url="http://www.rt.ru/"
                                                                                scope="form-3"
                                                                                :offer-id="[{offerIds: [403794182990, 413844976190]}]"
                                                                                :validator-adr="[{ regionIds: mrfCenter, preventSend: true },
                        { regionIds: [3092050, 3092265, 3092484, 3093008, 3093110, 3093225, 3092694], preventSend: true },
                        { regionIds: [2229963, 2233690, 2229861, 2231026, 2231188], preventSend: true },
                        { regionIds: [2982901, 2983002, 2983209], preventSend: true }]">


                                                                        <div class="rt-space-top2">
                                                                            <form data-vv-scope="form-3"
                                                                                  @submit.prevent>
                                                                                <full-name
                                                                                        class="text-field--purple"></full-name>
                                                                                <div class="rt-space-top">
                                                                                    <client-phone
                                                                                            class="text-field--purple"></client-phone>
                                                                                </div>
                                                                                <div class="rt-space-top">
                                                                                    <email class="text-field--purple"></email>
                                                                                </div>
                                                                                <p class="rt-font-paragraph rt-space-top2">
                                                                                    Адрес подключения</p>
                                                                                <div class="rt-space-top">
                                                                                    <div class="rt-col-8 rt-col-md-3">
                                                                                        <street class="text-field--purple"></street>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="rt-space-top">
                                                                                    <house class="text-field--purple"></house>
                                                                                    <apartment
                                                                                            class="text-field--purple"></apartment>
                                                                                </div>
                                                                                <div class="rt-space-top2">

                                                                                </div>
                                                                                <div class="row rt-space-top">
                                                                                    <div class="rt-col-8 rt-col-md-3">
                                                                                        <div class="rt-space-top">
                                                                                            <agree></agree>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </form>
                                                                        </div>
                                                                    </order-form>
                                                                </div>
                                                            </template>
                                                            <template slot="card-footer">
                                                                <div class="d-flex rt-space-top05 rt-space-bottom flex-end-center">
                                                                    <rt-price :value='750.231'
                                                                              time-interval='час.'/>
                                                                </div>
                                                            </template>
                                                            <template slot="button">
                                                                <submit-button>
                                                                    Подключить
                                                                </submit-button>
                                                            </template>
                                                        </rt-card-buy>
                                                    </rt-carousel-slide>
                                                    <rt-carousel-slide>
                                                        <rt-card-buy>
                                                            <template slot="content">
                                                                <div class="rt-space-horizontal">
                                                                    <div class="rt-font-center rt-space-top">
                                                                        <img class="rt-sensor-img"
                                                                             src="https://spb.rt.ru/sites/default/files/img/cardBackground2.png"
                                                                             alt="">
                                                                    </div>
                                                                    <p class="rt-space-top rt-space-bottom rt-font-bold">
                                                                        Контроллер полная стоимость 2</p>
                                                                    <p class="rt-font-control">Контроллер
                                                                        необходим для
                                                                        управления и настройки устройств</p>
                                                                    <div class="rt-space-top">
                                                                        <p class="rt-font-control">
                                                                            Характеристики</p>
                                                                    </div>
                                                                    <p class="rt-font-label color-main05">Входит
                                                                        в любой
                                                                        комплект умного дома</p>

                                                                </div>

                                                            </template>
                                                            <template slot="form">
                                                                <div class="rt-space-horizontal">
                                                                    <order-form lcs="active"
                                                                                class="rt-md-reverse-left-half"
                                                                                popup-main-url="http://www.rt.ru/"
                                                                                scope="form-3"
                                                                                :offer-id="[{offerIds: [403794182990, 413844976190]}]"
                                                                                :validator-adr="[{ regionIds: mrfCenter, preventSend: true },
                        { regionIds: [3092050, 3092265, 3092484, 3093008, 3093110, 3093225, 3092694], preventSend: true },
                        { regionIds: [2229963, 2233690, 2229861, 2231026, 2231188], preventSend: true },
                        { regionIds: [2982901, 2983002, 2983209], preventSend: true }]">


                                                                        <div class="rt-space-top2">
                                                                            <form data-vv-scope="form-3"
                                                                                  @submit.prevent>
                                                                                <full-name
                                                                                        class="text-field--purple"></full-name>
                                                                                <div class="rt-space-top">
                                                                                    <client-phone
                                                                                            class="text-field--purple"></client-phone>
                                                                                </div>
                                                                                <div class="rt-space-top">
                                                                                    <email class="text-field--purple"></email>
                                                                                </div>
                                                                                <p class="rt-font-paragraph rt-space-top2">
                                                                                    Адрес подключения</p>
                                                                                <div class="rt-space-top">
                                                                                    <div class="rt-col-8 rt-col-md-3">
                                                                                        <street class="text-field--purple"></street>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="rt-space-top">
                                                                                    <house class="text-field--purple"></house>
                                                                                    <apartment
                                                                                            class="text-field--purple"></apartment>
                                                                                </div>
                                                                                <div class="rt-space-top2">

                                                                                </div>
                                                                                <div class="row rt-space-top">
                                                                                    <div class="rt-col-8 rt-col-md-3">
                                                                                        <div class="rt-space-top">
                                                                                            <agree></agree>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </form>
                                                                        </div>
                                                                    </order-form>
                                                                </div>
                                                            </template>
                                                            <template slot="card-footer">
                                                                <div class="d-flex rt-space-top05 rt-space-bottom flex-end-center">
                                                                    <rt-price :value='750.231'
                                                                              time-interval='час.'/>
                                                                </div>
                                                            </template>
                                                            <template slot="button">
                                                                <submit-button>
                                                                    Подключить
                                                                </submit-button>
                                                            </template>
                                                        </rt-card-buy>
                                                    </rt-carousel-slide>
                                                    <rt-carousel-slide>
                                                        <rt-card-buy>
                                                            <template slot="content">
                                                                <div class="rt-space-horizontal">
                                                                    <div class="rt-font-center rt-space-top">
                                                                        <img class="rt-sensor-img"
                                                                             src="https://spb.rt.ru/sites/default/files/img/cardBackground2.png"
                                                                             alt="">
                                                                    </div>
                                                                    <p class="rt-space-top rt-space-bottom rt-font-bold">
                                                                        Контроллер полная стоимость 2</p>
                                                                    <p class="rt-font-control">Контроллер
                                                                        необходим для
                                                                        управления и настройки устройств</p>
                                                                    <div class="rt-space-top">
                                                                        <p class="rt-font-control">
                                                                            Характеристики</p>
                                                                    </div>
                                                                    <p class="rt-font-label color-main05">Входит
                                                                        в любой
                                                                        комплект умного дома</p>

                                                                </div>

                                                            </template>
                                                            <template slot="form">
                                                                <div class="rt-space-horizontal">
                                                                    <order-form lcs="active"
                                                                                class="rt-md-reverse-left-half"
                                                                                popup-main-url="http://www.rt.ru/"
                                                                                scope="form-3"
                                                                                :offer-id="[{offerIds: [403794182990, 413844976190]}]"
                                                                                :validator-adr="[{ regionIds: mrfCenter, preventSend: true },
                        { regionIds: [3092050, 3092265, 3092484, 3093008, 3093110, 3093225, 3092694], preventSend: true },
                        { regionIds: [2229963, 2233690, 2229861, 2231026, 2231188], preventSend: true },
                        { regionIds: [2982901, 2983002, 2983209], preventSend: true }]">


                                                                        <div class="rt-space-top2">
                                                                            <form data-vv-scope="form-3"
                                                                                  @submit.prevent>
                                                                                <full-name
                                                                                        class="text-field--purple"></full-name>
                                                                                <div class="rt-space-top">
                                                                                    <client-phone
                                                                                            class="text-field--purple"></client-phone>
                                                                                </div>
                                                                                <div class="rt-space-top">
                                                                                    <email class="text-field--purple"></email>
                                                                                </div>
                                                                                <p class="rt-font-paragraph rt-space-top2">
                                                                                    Адрес подключения</p>
                                                                                <div class="rt-space-top">
                                                                                    <div class="rt-col-8 rt-col-md-3">
                                                                                        <street class="text-field--purple"></street>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="rt-space-top">
                                                                                    <house class="text-field--purple"></house>
                                                                                    <apartment
                                                                                            class="text-field--purple"></apartment>
                                                                                </div>
                                                                                <div class="rt-space-top2">

                                                                                </div>
                                                                                <div class="row rt-space-top">
                                                                                    <div class="rt-col-8 rt-col-md-3">
                                                                                        <div class="rt-space-top">
                                                                                            <agree></agree>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </form>
                                                                        </div>
                                                                    </order-form>
                                                                </div>
                                                            </template>
                                                            <template slot="card-footer">
                                                                <div class="d-flex rt-space-top05 rt-space-bottom flex-end-center">
                                                                    <rt-price :value='750.231'
                                                                              time-interval='час.'/>
                                                                </div>
                                                            </template>
                                                            <template slot="button">
                                                                <submit-button>
                                                                    Подключить
                                                                </submit-button>
                                                            </template>
                                                        </rt-card-buy>
                                                    </rt-carousel-slide>
                                                    <rt-carousel-slide>
                                                        <rt-card-buy>
                                                            <template slot="content">
                                                                <div class="rt-space-horizontal">
                                                                    <div class="rt-font-center rt-space-top">
                                                                        <img class="rt-sensor-img"
                                                                             src="https://spb.rt.ru/sites/default/files/img/cardBackground2.png"
                                                                             alt="">
                                                                    </div>
                                                                    <p class="rt-space-top rt-space-bottom rt-font-bold">
                                                                        Контроллер полная стоимость 2</p>
                                                                    <p class="rt-font-control">Контроллер
                                                                        необходим для
                                                                        управления и настройки устройств</p>
                                                                    <div class="rt-space-top">
                                                                        <p class="rt-font-control">
                                                                            Характеристики</p>
                                                                    </div>
                                                                    <p class="rt-font-label color-main05">Входит
                                                                        в любой
                                                                        комплект умного дома</p>

                                                                </div>

                                                            </template>
                                                            <template slot="form">
                                                                <div class="rt-space-horizontal">
                                                                    <order-form lcs="active"
                                                                                class="rt-md-reverse-left-half"
                                                                                popup-main-url="http://www.rt.ru/"
                                                                                scope="form-3"
                                                                                :offer-id="[{offerIds: [403794182990, 413844976190]}]"
                                                                                :validator-adr="[{ regionIds: mrfCenter, preventSend: true },
                        { regionIds: [3092050, 3092265, 3092484, 3093008, 3093110, 3093225, 3092694], preventSend: true },
                        { regionIds: [2229963, 2233690, 2229861, 2231026, 2231188], preventSend: true },
                        { regionIds: [2982901, 2983002, 2983209], preventSend: true }]">


                                                                        <div class="rt-space-top2">
                                                                            <form data-vv-scope="form-3"
                                                                                  @submit.prevent>
                                                                                <full-name
                                                                                        class="text-field--purple"></full-name>
                                                                                <div class="rt-space-top">
                                                                                    <client-phone
                                                                                            class="text-field--purple"></client-phone>
                                                                                </div>
                                                                                <div class="rt-space-top">
                                                                                    <email class="text-field--purple"></email>
                                                                                </div>
                                                                                <p class="rt-font-paragraph rt-space-top2">
                                                                                    Адрес подключения</p>
                                                                                <div class="rt-space-top">
                                                                                    <div class="rt-col-8 rt-col-md-3">
                                                                                        <street class="text-field--purple"></street>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="rt-space-top">
                                                                                    <house class="text-field--purple"></house>
                                                                                    <apartment
                                                                                            class="text-field--purple"></apartment>
                                                                                </div>
                                                                                <div class="rt-space-top2">

                                                                                </div>
                                                                                <div class="row rt-space-top">
                                                                                    <div class="rt-col-8 rt-col-md-3">
                                                                                        <div class="rt-space-top">
                                                                                            <agree></agree>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </form>
                                                                        </div>
                                                                    </order-form>
                                                                </div>
                                                            </template>
                                                            <template slot="card-footer">
                                                                <div class="d-flex rt-space-top05 rt-space-bottom flex-end-center">
                                                                    <rt-price :value='750.231'
                                                                              time-interval='час.'/>
                                                                </div>
                                                            </template>
                                                            <template slot="button">
                                                                <submit-button>
                                                                    Подключить
                                                                </submit-button>
                                                            </template>
                                                        </rt-card-buy>
                                                    </rt-carousel-slide>
                                                </rt-carousel>
                                            </rt-tabs-content-item>
                                        </template>
                                    </rt-tabs>
                                </rt-tabs-content-item>
                                <rt-tabs-content-item name="3">
                                    <rt-tabs :show-as-tags="true" class="rt-tabs--sensor-tags">
                                        <template slot="navigation">

                                            <rt-tabs-nav-item name="3two">Полная стоимость
                                            </rt-tabs-nav-item>
                                            <rt-tabs-nav-item :active-tab="true" name="3one">
                                                Рассрочка
                                            </rt-tabs-nav-item>
                                        </template>
                                        <template slot="content">
                                            <rt-tabs-content-item name="3one">
                                                <h1>Рассрочка 3</h1>
                                            </rt-tabs-content-item>
                                            <rt-tabs-content-item name="3two">
                                                <h1>Полная стоимость 3</h1>
                                            </rt-tabs-content-item>
                                        </template>
                                    </rt-tabs>
                                </rt-tabs-content-item>
                            </template>
                        </rt-tabs>

                    </div>
                </div>
            </div>
        </div>


    </div>
    <!-- Описание -->

    <!-- Тарифы -->
</template>


<script>
    const componentsList = {};

    export default {
        name: "AppPromoVip",
        components: componentsList,
        mounted() {
            // var points = {
            //     init: function () {
            //         this.hasFirstDraw = false;
            //         this.matrix = [];
            //         this.pointRadius = 1;
            //         this.circleRadiusStartStep = 3;
            //         this.minPointRadius = 0.2;
            //         this.startOpacity = 0.5
            //         this.maxPointRadius = 1;
            //         this.maxDelraCoord = 20;
            //         var delta = 1.5;
            //         this.matrixWidth = 45*delta;
            //         this.matrixHeight = 25*delta;
            //         this.circleRadiusStart = [];
            //         this.circleRadiusEnd = [];
            //         this.liveSteps = []
            //         this.randomRadiusDelta = 1
            //         this.liveSize = 150;
            //         this.radius = 1;
            //         this.startsPoint = [];
            //         this.radiusDeflection = 600;
            //         this.gradeStep = 2;
            //         this.canvas = document.querySelector('.point-space');
            //         this.canvas.width = 1400;
            //         this.canvas.height = 700;
            //         this.matrixStep = parseInt(Math.min(this.canvas.width / this.matrixWidth, this.canvas.height / this.matrixHeight));
            //         this.context = this.canvas.getContext('2d');
            //         this.context.scale(1, 1);
            //         this.mouseX = 0;
            //         this.mouseY = 0;
            //         this.redColor = 119;
            //         this.greenColor = 1;
            //         this.blueColor = 255;
            //         this.startRedColor = parseInt(255*Math.random());
            //         this.startGreenColor = parseInt(255*Math.random());
            //         this.startBlueColor = parseInt(255*Math.random());
            //         // this.redColor = 255;
            //         // this.greenColor = 255;
            //         // this.blueColor = 255;
            //
            //         this.canvas.addEventListener('mousemove', function (event) {
            //             this.mouseX = event.pageX - this.canvas.offsetLeft;
            //             this.mouseY = event.pageY - this.canvas.offsetTop;
            //         }.bind(this), false);
            //         this.createMatrix()
            //         this.bind();


        },

        //     renderMatrix() {
        //         if (!this.hasFirstDraw || this.startsPoint.length > 0) {
        //             this.hasFirstDraw = true;
        //             this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        //             var ctx = this.context
        //             ctx.beginPath();
        //             this.matrix.forEach(function (row) {
        //                 row.forEach(function (item) {
        //                     ctx.beginPath();
        //                     // ctx.fillStyle = 'rgba('+item.red+','+item.green+','+item.blue+',' + item.opacity + ')';
        //                     ctx.fillStyle = 'rgba('+item.red+','+item.green+','+item.blue+',' + item.opacity + ')';
        //                     ctx.arc(item.x, item.y, item.radius, 0, 2 * Math.PI, false);
        //                     ctx.fill();
        //                 }.bind(this))
        //             }.bind(this))
        //             this.stepWave();
        //         }
        //     },
        //     createMatrix: function () {
        //         for (var i = 0; i < this.matrixHeight; i++) {
        //             var row = [];
        //             for (var j = 0; j < this.matrixWidth; j++) {
        //                 row.push({
        //                     radius: this.pointRadius,
        //                     opacity: this.startOpacity,
        //                     x: this.matrixStep * j,
        //                     y: this.matrixStep * i,
        //                     beforeX: this.matrixStep * j,
        //                     beforeY: this.matrixStep * i,
        //                     msToGoBack: 0,
        //                     // red: this.startRedColor,
        //                     // green: this.startGreenColor,
        //                     // blue: this.startBlueColor
        //                     red: parseInt(Math.random()*255),
        //                     green: parseInt(Math.random()*255),
        //                     blue: parseInt(Math.random()*255)
        //                 })
        //             }
        //             this.matrix.push(row)
        //         }
        //
        //         this.animate()
        //     },
        //     checkCircle(x, y, a, b, radius) {
        //         this.randomRadiusDelta = Math.random()*10 - Math.random()*10
        //         return (x - a + this.randomRadiusDelta) ** 2 + (y - b + this.randomRadiusDelta) ** 2 <= (radius) ** 2
        //     },
        //
        //     animate: function () {
        //         requestAnimationFrame(this.animate.bind(this));
        //         this.renderMatrix();
        //
        //     },
        //     stepWave: function () {
        //         this.circleRadiusStart.forEach(function (item, index) {
        //             this.circleRadiusStart[index] += this.circleRadiusStartStep
        //         }.bind(this))
        //         this.circleRadiusEnd.forEach(function (item, index) {
        //             this.circleRadiusEnd[index]--;
        //         }.bind(this))
        //         var indexForRemove = []
        //         this.startsPoint.forEach(function (startPos, index) {
        //
        //             this.liveSteps[index]--;
        //
        //             if (this.liveSteps[index] > 0) {
        //                 for (var i = startPos.y - this.circleRadiusStart[index]; i < startPos.y + this.circleRadiusStart[index]; i++) {
        //                     for (var j = startPos.x - this.circleRadiusStart[index]; j < startPos.x + this.circleRadiusStart[index]; j++) {
        //                         if (this.matrix[i] && this.matrix[i][j] && this.checkCircle(j+parseInt(Math.random()*20), i+parseInt(Math.random()*20), this.startsPoint[index].x, this.startsPoint[index].y, this.circleRadiusStart[index]+parseInt(Math.random()*20))) {
        //                             if (this.matrix[i][j].msToGoBack) {
        //                                 this.matrix[i][j].msToGoBack--;
        //                                 this.matrix[i][j].opacity += (1 - this.matrix[i][j].opacity) / this.liveSteps[index];
        //                                 this.matrix[i][j].radius += (this.pointRadius - this.matrix[i][j].radius)/this.pointRadius / (this.liveSteps[index] /4)
        //                                 this.matrix[i][j].x -= (this.matrix[i][j].x - this.matrix[i][j].beforeX)/(this.liveSteps[index]/4)
        //                                 this.matrix[i][j].y -= (this.matrix[i][j].y - this.matrix[i][j].beforeY)/(this.liveSteps[index]/4)
        //                                 this.matrix[i][j].red -= (this.matrix[i][j].red - this.redColor)/this.liveSteps[index]*30
        //                                 this.matrix[i][j].green -= (this.matrix[i][j].green - this.greenColor)/this.liveSteps[index]*30
        //                                 this.matrix[i][j].blue -= (this.matrix[i][j].blue - this.blueColor)/this.liveSteps[index]*30
        //                             } else {
        //                                 if (this.liveSteps > 1) {
        //                                     this.matrix[i][j].msToGoBack = this.liveSteps[index];
        //                                     this.matrix[i][j].opacity = 1
        //                                     var delta = (this.circleRadiusStart[index] - Math.sqrt((i-startPos.y)**2+(j-startPos.x)**2))/this.circleRadiusStart[index]
        //                                     var deltaY = (i-startPos.y)/this.circleRadiusStart[index];
        //                                     var deltaX = (j-startPos.x)/this.circleRadiusStart[index];
        //                                     var newRadius = 10 * delta;
        //                                     if(this.minPointRadius > newRadius){
        //                                         newRadius = this.minPointRadius;
        //                                     }
        //                                     // newRadius =
        //                                     this.matrix[i][j].radius = newRadius;
        //                                     if(this.matrix[i][j].radius > this.maxPointRadius){
        //                                         this.matrix[i][j].radius = this.maxPointRadius;
        //                                     }
        //
        //                                     var minRadius = 5
        //                                     // if(Math.sqrt((i - startPos.y)**2 + (j-startPos.x)**2) > minRadius) {
        //                                         this.maxDelraCoord
        //                                         this.matrix[i][j].red = 100;
        //                                         this.matrix[i][j].green = 100;
        //                                         this.matrix[i][j].blue = 100;
        //                                         deltaX *= 100;
        //                                         deltaY *= 100;
        //                                         // if(deltaX > this.maxDelraCoord){
        //                                         //     deltaX = this.maxDelraCoord
        //                                         // }
        //                                         // if(deltaY > this.maxDelraCoord){
        //                                         //     deltaY = this.maxDelraCoord
        //                                         // }
        //                                         this.matrix[i][j].x -= deltaX;
        //                                         this.matrix[i][j].y -= deltaY;
        //                                     // }
        //                                 }
        //                             }
        //
        //                         }
        //                     }
        //                 }
        //             } else {
        //                 indexForRemove.push(index)
        //                 console.info('indexForRemove', indexForRemove);
        //             }
        //         }.bind(this))
        //         for (var i = indexForRemove.length - 1; i >= 0; i--) {
        //             // console.info('!', i)
        //             this.liveSteps.splice(i, 1)
        //             console.info('this.liveSteps after', this.liveSteps);
        //             this.circleRadiusStart.splice(i, 1)
        //             this.circleRadiusEnd.splice(i, 1)
        //             this.startsPoint.splice(i, 1);
        //             this.hasFirstDraw = false;
        //         }
        //
        //     },
        //     startWave: function (x, y) {
        //         this.circleRadiusStart.push(this.radius);
        //         this.circleRadiusEnd.push(0);
        //         for (var i = 0; i < this.matrixHeight; i++) {
        //             for (var j = 0; j < this.matrixWidth; j++) {
        //                 if (this.checkCircle(this.matrix[i][j].x, this.matrix[i][j].y, x, y)) {
        //                     this.matrix[i][j].opacity = 0.3;
        //                     this.matrix[i][j].msToGoBack = this.liveSteps[0];
        //                 }
        //             }
        //         }
        //
        //     },
        //     bind: function () {
        //         var node = document.querySelector('.point-space')
        //         node.addEventListener('mousedown', function (event) {
        //             this.mouseX = parseInt((event.pageX - this.canvas.offsetLeft) / this.matrixStep);
        //             this.mouseY = parseInt((event.pageY - this.canvas.offsetTop) / this.matrixStep);
        //             this.liveSteps.push(this.liveSize);
        //             this.startsPoint.push({y: 0, x: 0})
        //             this.startWave(this.mouseX, this.mouseY);
        //         }.bind(this));
        //     }
        // }
        // points.init();
        // },
        // created() {
        // },
        // methods: {}
    };
</script>

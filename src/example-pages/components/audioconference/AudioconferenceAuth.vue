<template>
  <div class="conference-auth">
    <div class="conference-auth__image"/>
    <div class="rt-container full-height">
      <div class="rt-col full-height">
        <div class="row full-height">
          <div class="rt-col-6">
            <div class="sp-t-3">
              <rt-logo :show-text="true" height="44px" width="26px" top-fill-color="b2c-slate"/>
            </div>
            <div class="sp-t-3">
              <h1 class="rt-font-h1 sp-b-1">Аудиоконференция Ростелеком</h1>
              <p class="rt-font-small-paragraph">Услышать друг друга, где бы вы ни находились</p>
            </div>
          </div>
          <div class="rt-col-1"/>
          <div class="rt-col-4 full-height">
            <div class="conference-auth__content">
              <div class="conference-auth__top-part">
                <div class="sp-t-5"/>
                <div class="sp-t-4">
                  <h3 class="rt-font-h3">Авторизация</h3>
                  <div class="auth-form">
                    <div class="sp-b-1 input-with-hint">
                      <rt-input placeholder="Логин"/>
                      <rt-hint :simple-tool-tip="true">Ваш логин — это номер телефона в системе аудиоконференций, это 10
                        цифр в виде 800 xxx xx xx</rt-hint>
                    </div>
                    <rt-input placeholder="Пароль" type="password"/>
                    <div class="sp-t-2-1 sp-b-1-3">
                      <rt-checkbox name="" :checked="true">Запомнить</rt-checkbox>
                    </div>
                    <rt-button href="/audioconference1" class='rt-button-orange d-i-f' target="_self">Войти</rt-button>
                    <rt-button class='rt-button-orange-border'>Подключить услугу</rt-button>
                  </div>
                </div>
              </div>
              <div class="conference-auth__bottom-part">
                <p class="sp-b-2 rt-font-label color-main05">Центр поддержки клиентов по России (бесплатно): хорошо бы
                  написать сюда актуальные номера</p>
              </div>
            </div>
          </div>
          <div class="rt-col-1"/>
        </div>
      </div>
    </div>
    <rt-hint-body/>
  </div>
</template>

<script>
    const componentsList = {};
    export default {
        name: "AppAudioConferenceAuth",
        components: componentsList,
        data() {
            return {}
        },
        mounted() {},
        created() {},
        methods: {}
    };
</script>
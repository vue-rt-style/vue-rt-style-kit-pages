<template>
  <div class="rt-container">
    <div class="app-content rt-col-12 rt-col-md-3">
      <div class="app-title">
        <h1 class="rt-font-hero">
          USSD
        </h1>
      </div>
      <div class="app-body">
        <div class="app-row row">
          <pre-code
            text='
          <div class="rt-col">

        <p>Отправить приглашение новому номеру:
          <rt-ussd>*105*1*9ХХХХХХХХХ#</rt-ussd></p>
        <p class="rt-space-top05">Проверить список номеров, подключенных к тарифу: -->>
          <rt-ussd><div class="epc-options__value">*105*2#</div></rt-ussd></p>
            <p class="rt-space-top05">Проверить остаток общего пакета услуг:
          <rt-ussd>*100*12#</rt-ussd></p>
            <p class="rt-space-top05 rt-space-bottom05">Отключить номер: <rt-ussd>*105*0*9ХХХХХХХХХ#</rt-ussd> </p>

        <rt-ussd :without-left-space="true" tel="*100*12#">Унать баланс на счету</rt-ussd>

          </div>
          '></pre-code>
        </div>
        <div class="rt-space-top25">
          <documentation-builder :json="documentation" type="components" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // const componentsList = {};
  import componentsList from "../../componentsList";
  import documentation from "@vue-rt-style-kit-atoms-local/components/Ussd/docs/index.json";
  export default {
    name: "AppSwitch",
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

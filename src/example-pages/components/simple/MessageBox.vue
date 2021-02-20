<template>
  <div class="rt-container">
    <div class="app-content rt-col-12 rt-col-md-3">
      <div class="app-title">
        <h1 class="rt-font-hero">
          Message Box
        </h1>
      </div>
      <div class="app-body">
        <div class="app-row row">
          <div class="rt-col-12 sp-t-2">
            <rt-button color="orange" @click="changeTheme">Сменить тему</rt-button>
          </div>

          <rt-message-box :timeout=1 :theme="theme">
            <p class="rt-font-small-paragraph rt-font-bold">Не нашли, что искали?</p>
            <p class="rt-font-control sp-t-0-2 md-sp-t-0-1">Больше информации и предложений на нашем сайте</p>
          </rt-message-box>

          <div class="rt-col-12 sp-t-2">
            <documentation-builder :json="documentation" type="components"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import documentation from "@vue-rt-style-kit-molecules-local/components/MessageBox/docs/index.json";
import componentsList from "../../componentsList";

export default {
  name: "AppMessageBox",
  components: componentsList,
  data: () => ({
    documentation: {},
    theme: 'light'
  }),
  mounted() {
    this.documentation = documentation;
  },
  methods: {
    changeTheme() {
      this.theme = this.theme === 'light' ? 'dark' : 'light'
    }
  }
}
</script>
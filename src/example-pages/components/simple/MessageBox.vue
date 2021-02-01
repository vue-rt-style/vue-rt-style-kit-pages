<template>
  <div>
    <rt-message-box :timeout=1>
      <p class="rt-font-small-paragraph rt-font-bold">Не нашли, что искали?</p>
      <p class="rt-font-control sp-t-0-2 md-sp-t-0-1">Больше информации и предложений на нашем сайте</p>
    </rt-message-box>
    <div class="rt-container rt-space-top25">
      <documentation-builder :json="documentation" type="components"/>
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
      documentation: {}
    }),
    mounted() {
      this.documentation = documentation;
    },
  }
</script>
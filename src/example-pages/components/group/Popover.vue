<template>
  <div>
  <div class="rt-container">
    <div class="app-content rt-col-12 rt-col-md-3">
      <div class="app-title">
        <h1 class="rt-font-hero">
          Popover
        </h1>
      </div>
      <div class="app-body">
        <div class="app-row row">
          <rt-row class="sp-t-2">
            <rt-col size="3">
              <div class="relative d-inline-block">

                <pre-code text='<rt-popover vertical="center" horizontal="top">
            <div>
              <p class="rt-font-label rt-font-bold sp-b-0-2 color-main07">Заголовок</p>
              <p class="rt-font-label color-main07">Высота тултипа подстраивается под контент. Ширина сохранятеся</p>
            </div>
          </rt-popover>'></pre-code>
              </div>
            </rt-col>
          </rt-row>
          <rt-row class="sp-t-2">
            <rt-col size="10"></rt-col>
            <rt-col size="2">
              <div class="relative d-inline-block">
                <pre-code text='<rt-popover vertical="center" horizontal="top">
            <div>
              <p class="rt-font-label color-main07">Высота тултипа подстраивается под контент. Ширина сохранятеся</p>
            </div>
          </rt-popover>'></pre-code>
              </div>
            </rt-col>
          </rt-row>
          <rt-row class="sp-t-2">
            <rt-col size="4"></rt-col>
            <rt-col size="3">
              <div class="relative d-inline-block">
                <pre-code text='<rt-popover vertical="center" horizontal="top">
            <div>
              <p class="rt-font-label color-main07">Минимальный размер</p>
            </div>
          </rt-popover>'></pre-code>
              </div>
            </rt-col>
          </rt-row>
        </div>
      </div>
    </div>

  </div>
    <div class="rt-container rt-space-top25">
      <documentation-builder :json="documentation" type="components"/>
    </div>
  </div>
</template>

<script>

import componentsList from "../../componentsList";
import documentation from "@vue-rt-style-kit-molecules-local/components/Popover/docs/index.json";
// const componentsList = {};
export default {
  name: "AppTable",
  components: componentsList,
  data() {
    return {
      documentation: {},
      verticalVal: 'top',
      horizontalVal: 'center'
  }
  },
  mounted() {
    this.documentation = documentation;
  }
};
</script>

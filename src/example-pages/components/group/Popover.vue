<template>
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
            <rt-col size="4"></rt-col>
            <rt-col size="3">
              <div class="relative d-inline-block">
          <rt-popover :vertical="verticalVal" :horizontal="horizontalVal">
            <div>
              <p class="rt-font-label rt-font-bold sp-b-0-2 color-main07">Заголовок</p>
              <p class="rt-font-label color-main07">Высота тултипа подстраивается под контент. Ширина сохранятеся</p>
            </div>
          </rt-popover>
              </div>
            </rt-col>
          </rt-row>
          <rt-row class="sp-t-2">
            <rt-col size="4"></rt-col>
            <rt-col size="3">
              <div class="relative d-inline-block">
          <rt-popover :vertical="verticalVal" :horizontal="horizontalVal">
            <div>
              <p class="rt-font-label color-main07">Высота тултипа подстраивается под контент. Ширина сохранятеся</p>
            </div>
          </rt-popover>
              </div>
            </rt-col>
          </rt-row>
          <rt-row class="sp-t-2">
            <rt-col size="4"></rt-col>
            <rt-col size="3">
              <div class="relative d-inline-block">
          <rt-popover :vertical="verticalVal" :horizontal="horizontalVal">
            <div>
              <p class="rt-font-label color-main07">Минимальный размер</p>
            </div>
          </rt-popover>
              </div>
            </rt-col>
          </rt-row>

        </div>
      </div>
    </div>
    <rt-row>
      <rt-col size="3">
    vertical value
    <select v-model="verticalVal">
      <option>center</option>
      <option>top</option>
      <option>bottom</option>
    </select>
      </rt-col>
      <rt-col size="3">
    horizontal value
    <select v-model="horizontalVal">
      <option>left</option>
      <option>center</option>
      <option>right</option>
    </select>
      </rt-col>
    </rt-row>
  </div>
</template>

<script>
import componentsList from "../../componentsList";
// const componentsList = {};
export default {
  name: "AppTable",
  components: componentsList,
  data() {
    return {
      verticalVal: 'top',
      horizontalVal: 'center'
  }
  },
  mounted() {}
};
</script>

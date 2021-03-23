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
          <rt-row>
            <rt-col size="4"></rt-col>
            <rt-col size="3">
              <div class="relative d-inline-block">
          <rt-popover :vertical="verticalVal" :horizontal="horizontalVal">12</rt-popover>
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

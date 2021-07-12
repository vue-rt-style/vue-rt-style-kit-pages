<template>
  <div class="rt-container">
    <div class="app-content  rt-col-12 rt-col-md-3">
      <div class="app-title row">
        <h1 class="col rt-font-hero">
          Lines
        </h1>
      </div>
      <div class="app-body">
<rt-row>
  <rt-col size="3">
        <rt-select-v2 v-model="color" :json="colors.map(i=>{return { 'label':i, 'value': i} })"></rt-select-v2>
  </rt-col>
  <rt-col size="3">
    <rt-input :version="2" type="number" :step="1" v-model="height"></rt-input>
  </rt-col>
</rt-row>
      <div class="sp-t-2">
        <rt-line :height="height" :color="color"></rt-line>
      </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "AppColorLineText",
  data: () => ({
    color: 'red',
    height: '2',
    colors: ["black", "black085", "black085-no-opacity", "purple", "purple-button-hover", "purple-button-active", "purple01", "purple005", "purple-low", "purple-high", "purple-night", "white", "red", "red-low", "red-high", "gray", "dark-blue", "dark-blue-low", "dark-blue-high", "light-blue", "light-blue-low", "light-blue-high", "yellow", "yellow-low", "yellow-high", "orange", "orange-night", "orange-button-hover", "orange-button-active", "orange-low", "orange-high", "orange-super", "pink", "pink-low", "pink-high", "green", "green-low", "green-high", "cool-grey", "cool-grey07", "cool-grey05", "cool-grey03", "cool-grey05-no-opacity", "purple-high05", "purple-high02", "orange-high05", "orange-high02", "orange03", "orange01", "orange005", "slate", "dark-slate", "burgundy", "white09", "white08", "white07", "white06", "white05", "white04", "white03", "white025", "white02", "white01", "white005", "main-color", "main-color09", "main-color08", "main-color07", "main-color06", "main-color05", "main-color04", "main-color03", "main-color02", "main-color01", "main-color007", "main-color005", "main-color003", "main-color09-no-opacity", "main-color085-no-opacity", "main-color07-no-opacity", "main-color05-no-opacity", "main-color03-no-opacity", "main-color01-no-opacity", "main-color007-no-opacity", "main-color005-no-opacity", "main-color003-no-opacity"],
  }),
  mounted() {
  },
  created() {},
  methods: {}
};
</script>

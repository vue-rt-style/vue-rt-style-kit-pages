<template>
  <div class="rt-container">
    <div class="app-content rt-col-12 rt-col-md-3">
      <div class="app-title">
        <h1 class="rt-font-hero">
          Switch
        </h1>
      </div>
      <div class="app-body">
        <div class="app-row row">
          <p class="rt-font-h3 rt-col">
            switch v2
          </p>
        </div>
        <div class="app-row row">
          <rt-col size="2">
            <p>Color</p>
            <select name="" v-model="color" id="">
              <option value="orange">orange</option>
              <option value="purple">purple</option>
            </select>
          </rt-col>
          <rt-col size="2">
            <p>disabled</p>
            <input type="checkbox" v-model="disabled"/>
          </rt-col>
          <rt-col size="2">
            <p>bright</p>
            <input type="checkbox" v-model="bright"/>
          </rt-col>
          <rt-col size="2">
            <p>invert</p>
            <input type="checkbox" v-model="invert"/>
          </rt-col>
        </div>
        <div class="app-row row">
          <label for="test11" class="d-inline-block sp-b-4">
            <p>Отдельный лейбл для свитча</p>
          </label>
        </div>
        <div class="app-row row">

          <div class="rt-col">

              <rt-switch-v2 id="test11" :disabled="disabled? true : false" :bright="bright" :invert="invert" :color="color">Интернет</rt-switch-v2>


          </div>
        </div>
        <div class="app-row row">
          <p class="rt-font-h3 rt-col">
            switch v1
          </p>
        </div>


        <div class="app-row row">
          <rt-switch :is-orange="true">Интернет</rt-switch>
        </div>
        <div class="app-row row">
          <p class="rt-font-h3 rt-col">
            disabled switch
          </p>
        </div>
        <div class="app-row row">
          <div class="rt-col">
            <rt-switch :is-disabled="true">
              Интернет
            </rt-switch>
          </div>
        </div>
        <div class="app-row row rt-space-top">
          <documentation-builder :json="documentation" type="components"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import documentation from "@vue-rt-style-kit-atoms-local/components/Switch/docs/index.json";
  // const componentsList = {};
  import componentsList from "../../componentsList";
  export default {
    name: "AppSwitch",
    components: componentsList,
    data: () => ({
      documentation: {},
      color: 'orange',
      disabled: false,
      bright: false,
      invert: false
    }),
    mounted() {
      this.documentation = documentation;
    },
    created() {},
    methods: {}
  };
</script>

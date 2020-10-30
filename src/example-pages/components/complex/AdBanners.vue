<template>
  <div>
    <div class="rt-container">
      <div class="grid-center"/>
      <div class="app-content rt-col-12 rt-col-md-3">
        <div class="app-title">
          <div class="row"><h1 class="rt-font-hero rt-col">Ad banners</h1></div>
        </div>
      </div>
    </div>
    <div class="sp-b-2">
      <rt-ad-banner></rt-ad-banner>
    </div>

    <div class="rt-container rt-space-top25">
    </div>
  </div>
</template>

<script>
  // import documentation from "@vue-rt-style-kit-molecules-local/components/Banner/docs/index.json";
  import componentsList from "../../componentsList";
  // const componentsList = {};
  export default {
    name: "AppBanners",
    components: componentsList,
    data: () => ({
      documentation: {}
    }),


    methods: {
    }
  };
</script>

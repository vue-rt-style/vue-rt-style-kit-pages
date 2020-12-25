<template>
  <div class="rt-container">
    <div class="app-content  rt-col-12 rt-col-md-3">
      <div class="app-title row">
        <h1 class="rt-col rt-font-hero"><span class="test">&#xe000;</span>Rt-Img</h1>
      </div>
      <div class="app-body">
        <div class="row rt-space-top5">
          <pre-code text='<rt-img
              x2-src="https://static-cdn.rt.ru/sites/default/files/rti_lazy_files/b2c/1480x840-promo-licey__proj.jpg"
              td-src="https://static-cdn.rt.ru/sites/default/files/rti_lazy_files/b2c/litres_740x420_md__proj.jpg"
              md-src="https://static-cdn.rt.ru/sites/default/files/rti_lazy_files/banner_4in1_740kh420__proj.jpg"
            ></rt-img>'></pre-code>
          </div>
        </div>



      <div class="rt-space-top25">
        <documentation-builder :json="documentation" type="components"/>
      </div>
    </div>
  </div>
</template>

<script>
  import documentation from "@vue-rt-style-kit-atoms-local/components/Image/docs/index.json";
  export default {
    name: "AppTypography",
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

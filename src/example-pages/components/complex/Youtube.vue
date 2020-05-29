<template>
  <div>
    <div class="rt-container">
      <div class="app-content rt-col-12 rt-col-md-3">
        <div class="app-title">
          <h1 class="rt-font-hero">
            Youtube player
          </h1>
        </div>
        <div class="app-body">
          <div class="row">
            <div class="rt-col-1 td-d-none" />
            <div class="rt-col-10 rt-col-td-6">
              <pre-code
                text="<rt-youtube :start-index=&quot;[1,2,230,0]&quot; :utm-sources=&quot;['ab','ba','ca','ka']&quot; :playlist-id=&quot;['PLbAFXJC0J5GanbANaPaaWYB6Vdc_JPZ6n','RDUOxkGD8qRB4','RDBqNES_8YLP4','RDMM3mBKjBJX60E','RDAmq-qlqbjYA']&quot;/>"
              />
            </div>
            <div class="rt-col-1 td-d-none" />
          </div>
        </div>
      </div>
    </div>
    <rt-youtube
      height=""
      :playlist-id="['PLbAFXJC0J5GanbANaPaaWYB6Vdc_JPZ6n']"
      :disable-buttons="true"
    />
    <div class="rt-container rt-space-top25">
      <documentation-builder :json="documentation" type="components"/>
    </div>
  </div>
</template>

<script>
  import documentation from "vue-rt-style-kit-molecules/src/components/Youtube/docs/index.json";
  import componentsList from "../../componentsList";
//  const componentsList = {};
  export default {
    name: "AppYoutube",
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

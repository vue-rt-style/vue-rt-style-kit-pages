<template>
    <div class="rt-container">
        <div class="app-content rt-col-12 rt-col-md-3">
            <div class="app-title">
                <div class="row">
                    <h1 class="rt-font-hero rt-col">
                        Grid class elements
                    </h1>
                </div>
            </div>
            <div class="app-body">
                <pre-code text='
                <div>
                <rt-row top="20">
                    <rt-col size="1" tablet-size="1" mobile-size="1" class="app-col-fill">
                        <p class="app-col-fill__text td-d-none d-inline">
                            rt-col-1
                        </p>
                        <p class="app-col-fill__text md-d-none d-none td-d-block">
                            rt-col-td-1
                        </p>
                        <p class="app-col-fill__text td-d-none md-d-inline d-none">
                            rt-col-md-1
                        </p>
                    </rt-col>
                    <rt-col size="1" tablet-size="1" mobile-size="1" class="app-col-fill">
                        <p class="app-col-fill__text td-d-none d-inline">
                            rt-col-1
                        </p>
                        <p class="app-col-fill__text md-d-none d-none td-d-block">
                            rt-col-td-1
                        </p>
                        <p class="app-col-fill__text td-d-none md-d-inline d-none">
                            rt-col-md-1
                        </p>
                    </rt-col>
                    <rt-col size="1" tablet-size="1" mobile-size="1" class="app-col-fill">
                        <p class="app-col-fill__text td-d-none d-inline">
                            rt-col-1
                        </p>
                        <p class="app-col-fill__text md-d-none d-none td-d-block">
                            rt-col-td-1
                        </p>
                        <p class="app-col-fill__text td-d-none md-d-inline d-none">
                            rt-col-md-1
                        </p>
                    </rt-col>
                    <rt-col size="1" tablet-size="1" class="app-col-fill" mobile-display="none">
                        <p class="app-col-fill__text td-d-none d-inline">
                            rt-col-1
                        </p>
                        <p class="app-col-fill__text md-d-none d-none td-d-block">
                            rt-col-td-1
                        </p>
                    </rt-col>
                    <rt-col size="1" tablet-size="1" class="app-col-fill" mobile-display="none">
                        <p class="app-col-fill__text td-d-none d-inline">
                            rt-col-1
                        </p>
                        <p class="app-col-fill__text md-d-none d-none td-d-block">
                            rt-col-td-1
                        </p>
                    </rt-col>
                    <rt-col size="1" tablet-size="1" class="app-col-fill" mobile-display="none">
                        <p class="app-col-fill__text td-d-none d-inline">
                            rt-col-1
                        </p>
                        <p class="app-col-fill__text md-d-none d-none td-d-block">
                            rt-col-td-1
                        </p>
                    </rt-col>
                    <rt-col size="1" class="app-col-fill" tablet-display="none">
                        <p class="app-col-fill__text td-d-none d-inline">
                            rt-col-1
                        </p>
                    </rt-col>
                    <rt-col size="1" class="app-col-fill" tablet-display="none">
                        <p class="app-col-fill__text td-d-none d-inline">
                            rt-col-1
                        </p>
                    </rt-col>
                    <rt-col size="1" class="app-col-fill" tablet-display="none">
                        <p class="app-col-fill__text td-d-none d-inline">
                            rt-col-1
                        </p>
                    </rt-col>
                    <rt-col size="1" class="app-col-fill" tablet-display="none">
                        <p class="app-col-fill__text td-d-none d-inline">
                            rt-col-1
                        </p>
                    </rt-col>
                    <rt-col size="1" class="app-col-fill" tablet-display="none">
                        <p class="app-col-fill__text td-d-none d-inline">
                            rt-col-1
                        </p>
                    </rt-col>
                    <rt-col size="1" class="app-col-fill" tablet-display="none">
                        <p class="app-col-fill__text td-d-none d-inline">
                            rt-col-1
                        </p>
                    </rt-col>
                </rt-row>


                <rt-row top="20">
                    <rt-col size="2" tablet-size="2" mobile-size="2" class="app-col-fill">

                        <p class="app-col-fill__text td-d-none d-inline">
                            rt-col-2
                        </p>
                        <p class="app-col-fill__text md-d-none d-none td-d-block">
                            rt-col-td-2
                        </p>
                        <p class="app-col-fill__text td-d-none md-d-inline d-none">
                            rt-col-md-2
                        </p>
                    </rt-col>
                    <rt-col size="1" tablet-size="1" mobile-size="1" class="app-col-fill">
                        <p class="app-col-fill__text td-d-none d-inline">
                            rt-col-1
                        </p>
                        <p class="app-col-fill__text md-d-none d-none td-d-block">
                            rt-col-td-1
                        </p>
                        <p class="app-col-fill__text td-d-none md-d-inline d-none">
                            rt-col-md-1
                        </p>
                    </rt-col>
                    <rt-col size="1" tablet-size="1" mobile-display="none" class="app-col-fill">
                        <p class="app-col-fill__text d-inline">
                            rt-col-1
                        </p>
                    </rt-col>
                    <rt-col size="1" tablet-size="1" mobile-display="none" class="app-col-fill">
                        <p class="app-col-fill__text d-inline">
                            rt-col-1
                        </p>
                    </rt-col>
                    <rt-col size="1" tablet-size="1" mobile-display="none" class="app-col-fill">
                        <p class="app-col-fill__text d-inline">
                            rt-col-1
                        </p>
                    </rt-col>
                    <rt-col size="1" tablet-display="none" class="app-col-fill">
                        <p class="app-col-fill__text d-inline">
                            rt-col-1
                        </p>
                    </rt-col>
                    <rt-col size="1" tablet-display="none" class="app-col-fill">
                        <p class="app-col-fill__text d-inline">
                            rt-col-1
                        </p>
                    </rt-col>
                    <rt-col size="1" tablet-display="none" class="app-col-fill">
                        <p class="app-col-fill__text d-inline">
                            rt-col-1
                        </p>
                    </rt-col>
                    <rt-col size="1" tablet-display="none" class="app-col-fill">
                        <p class="app-col-fill__text d-inline">
                            rt-col-1
                        </p>
                    </rt-col>
                    <rt-col size="1" tablet-display="none" class="app-col-fill">
                        <p class="app-col-fill__text d-inline">
                            rt-col-1
                        </p>
                    </rt-col>
                    <rt-col size="1" tablet-display="none" class="app-col-fill">
                        <p class="app-col-fill__text d-inline">
                            rt-col-1
                        </p>
                    </rt-col>
                </rt-row>
                <rt-row top="20">
                    <rt-col size="3" tablet-size="3" mobile-size="3" class="app-col-fill">
                        <p class="app-col-fill__text td-d-none d-inline">
                            rt-col-3
                        </p>
                        <p class="app-col-fill__text d-none md-d-none td-d-inline">
                            rt-col-td-3
                        </p>
                        <p class="app-col-fill__text d-none md-d-inline">
                            rt-col-md-3
                        </p>
                    </rt-col>
                    <rt-col size="1" tablet-size="1" mobile-display="none" class="app-col-fill">
                        <p class="app-col-fill__text td-d-none d-inline">
                            rt-col-1
                        </p>
                        <p class="app-col-fill__text td-d-inline d-none">
                            rt-col-td-1
                        </p>
                    </rt-col>
                    <rt-col size="1" tablet-size="1" mobile-display="none" class="app-col-fill">
                        <p class="app-col-fill__text td-d-none d-inline">
                            rt-col-1
                        </p>
                        <p class="app-col-fill__text td-d-inline d-none">
                            rt-col-td-1
                        </p>
                    </rt-col>
                    <rt-col size="1" tablet-size="1" mobile-display="none" class="app-col-fill">
                        <p class="app-col-fill__text td-d-none d-inline">
                            rt-col-1
                        </p>
                        <p class="app-col-fill__text td-d-inline d-none">
                            rt-col-td-1
                        </p>
                    </rt-col>
                    <rt-col size="1" tablet-display="none" class="app-col-fill">
                        <p class="app-col-fill__text td-d-none d-inline">
                            rt-col-1
                        </p>
                    </rt-col>
                    <rt-col size="1" tablet-display="none" class="app-col-fill">
                        <p class="app-col-fill__text td-d-none d-inline">
                            rt-col-1
                        </p>
                    </rt-col>
                    <rt-col size="1" tablet-display="none" class="app-col-fill">
                        <p class="app-col-fill__text td-d-none d-inline">
                            rt-col-1
                        </p>
                    </rt-col>
                    <rt-col size="1" tablet-display="none" class="app-col-fill">
                        <p class="app-col-fill__text td-d-none d-inline">
                            rt-col-1
                        </p>
                    </rt-col>
                    <rt-col size="1" tablet-display="none" class="app-col-fill">
                        <p class="app-col-fill__text td-d-none d-inline">
                            rt-col-1
                        </p>
                    </rt-col>
                    <rt-col size="1" tablet-display="none" class="app-col-fill">
                        <p class="app-col-fill__text td-d-none d-inline">
                            rt-col-1
                        </p>
                    </rt-col>
                </rt-row>
                <rt-row top="20" mobile-display="none">
                    <rt-col size="4" tablet-size="4" mobile-display="none" class="app-col-fill">

                        <p class="app-col-fill__text d-inline td-d-none">
                            rt-col-4
                        </p>
                        <p class="app-col-fill__text td-d-inline d-none">
                            rt-col-td-4
                        </p>
                    </rt-col>
                    <rt-col size="1" tablet-size="1" mobile-display="none" class="app-col-fill">
                        <p class="app-col-fill__text d-inline td-d-none">
                            rt-col-1
                        </p>
                        <p class="app-col-fill__text td-d-inline d-none">
                            rt-col-td-1
                        </p>
                    </rt-col>
                    <rt-col size="1" tablet-size="1" mobile-display="none" class="app-col-fill">
                        <p class="app-col-fill__text d-inline td-d-none">
                            rt-col-1
                        </p>
                        <p class="app-col-fill__text td-d-inline d-none">
                            rt-col-td-1
                        </p>
                    </rt-col>
                    <rt-col size="1" tablet-display="none" class="app-col-fill">
                        <p class="app-col-fill__text d-inline">
                            rt-col-1
                        </p>
                    </rt-col>
                    <rt-col size="1" tablet-display="none" class="app-col-fill">
                        <p class="app-col-fill__text d-inline">
                            rt-col-1
                        </p>
                    </rt-col>
                    <rt-col size="1" tablet-display="none" class="app-col-fill">
                        <p class="app-col-fill__text d-inline">
                            rt-col-1
                        </p>
                    </rt-col>
                    <rt-col size="1" tablet-display="none" class="app-col-fill">
                        <p class="app-col-fill__text d-inline">
                            rt-col-1
                        </p>
                    </rt-col>
                    <rt-col size="1" tablet-display="none" class="app-col-fill">
                        <p class="app-col-fill__text d-inline">
                            rt-col-1
                        </p>
                    </rt-col>
                    <rt-col size="1" tablet-display="none" class="app-col-fill">
                        <p class="app-col-fill__text d-inline">
                            rt-col-1
                        </p>
                    </rt-col>
                </rt-row>
                <rt-row top="20" mobile-display="none">
                    <rt-col size="5" tablet-size="5" mobile-display="none" class="app-col-fill">
                        <p class="app-col-fill__text d-inline td-d-none">
                            rt-col-5
                        </p>
                        <p class="app-col-fill__text d-none td-d-inline ">
                            rt-col-td-5
                        </p>
                    </rt-col>
                    <rt-col size="1" tablet-size="1" mobile-display="none" class="app-col-fill">
                        <p class="app-col-fill__text d-inline td-d-none">
                            rt-col-1
                        </p>
                        <p class="app-col-fill__text d-none td-d-inline ">
                            rt-col-td-1
                        </p>
                    </rt-col>
                    <rt-col size="1" tablet-display="none" class="app-col-fill">
                        <p class="app-col-fill__text d-inline">
                            rt-col-1
                        </p>
                    </rt-col>
                    <rt-col size="1" tablet-display="none" class="app-col-fill">
                        <p class="app-col-fill__text d-inline">
                            rt-col-1
                        </p>
                    </rt-col>
                    <rt-col size="1" tablet-display="none" class="app-col-fill">
                        <p class="app-col-fill__text d-inline">
                            rt-col-1
                        </p>
                    </rt-col>
                    <rt-col size="1" tablet-display="none" class="app-col-fill">
                        <p class="app-col-fill__text d-inline">
                            rt-col-1
                        </p>
                    </rt-col>
                    <rt-col size="1" tablet-display="none" class="app-col-fill">
                        <p class="app-col-fill__text d-inline">
                            rt-col-1
                        </p>
                    </rt-col>
                    <rt-col size="1" tablet-display="none" class="app-col-fill">
                        <p class="app-col-fill__text d-inline">
                            rt-col-1
                        </p>
                    </rt-col>
                </rt-row>
                <rt-row top="20" tablet-display="none" mobile-display="none">
                    <rt-col size="6" tablet-size="6" mobile-display="none" class="app-col-fill">
                        <p class="app-col-fill__text d-inline td-d-none">
                            rt-col-6
                        </p>
                        <p class="app-col-fill__text d-none td-d-inline">
                            rt-col-td-6
                        </p>
                    </rt-col>
                    <rt-col size="1" tablet-display="none" class="app-col-fill">
                        <p class="app-col-fill__text d-inline">
                            rt-col-1
                        </p>
                    </rt-col>
                    <rt-col size="1" tablet-display="none" class="app-col-fill">
                        <p class="app-col-fill__text d-inline">
                            rt-col-1
                        </p>
                    </rt-col>
                    <rt-col size="1" tablet-display="none" class="app-col-fill">
                        <p class="app-col-fill__text d-inline">
                            rt-col-1
                        </p>
                    </rt-col>
                    <rt-col size="1" tablet-display="none" class="app-col-fill">

                        <p class="app-col-fill__text d-inline">
                            rt-col-1
                        </p>
                    </rt-col>
                    <rt-col size="1" tablet-display="none" class="app-col-fill">
                        <p class="app-col-fill__text d-inline">
                            rt-col-1
                        </p>
                    </rt-col>
                    <rt-col size="1" tablet-display="none" class="app-col-fill">
                        <p class="app-col-fill__text d-inline">
                            rt-col-1
                        </p>
                    </rt-col>
                </rt-row>
                <rt-row top="20" tablet-display="none" mobile-display="none">
                    <rt-col size="7" class="app-col-fill">
                        <p class="app-col-fill__text d-inline">
                            rt-col-7
                        </p>
                    </rt-col>
                    <rt-col size="1" class="app-col-fill">
                        <p class="app-col-fill__text d-inline">
                            rt-col-1
                        </p>
                    </rt-col>
                    <rt-col size="1" class="app-col-fill">
                        <p class="app-col-fill__text d-inline">
                            rt-col-1
                        </p>
                    </rt-col>
                    <rt-col size="1" class="app-col-fill">
                        <p class="app-col-fill__text d-inline">
                            rt-col-1
                        </p>
                    </rt-col>
                    <rt-col size="1" class="app-col-fill">
                        <p class="app-col-fill__text d-inline">
                            rt-col-1
                        </p>
                    </rt-col>
                    <rt-col size="1" class="app-col-fill">
                        <p class="app-col-fill__text d-inline">
                            rt-col-1
                        </p>
                    </rt-col>
                </rt-row>
                <rt-row top="20" tablet-display="none" mobile-display="none">
                    <rt-col size="8" class="app-col-fill">
                        <p class="app-col-fill__text d-inline">
                            rt-col-8
                        </p>
                    </rt-col>
                    <rt-col size="1" class="app-col-fill">
                        <p class="app-col-fill__text d-inline">
                            rt-col-1
                        </p>
                    </rt-col>
                    <rt-col size="1" class="app-col-fill">
                        <p class="app-col-fill__text d-inline">
                            rt-col-1
                        </p>
                    </rt-col>
                    <rt-col size="1" class="app-col-fill">
                        <p class="app-col-fill__text d-inline">
                            rt-col-1
                        </p>
                    </rt-col>
                    <rt-col size="1" class="app-col-fill">
                        <p class="app-col-fill__text d-inline">
                            rt-col-1
                        </p>
                    </rt-col>
                </rt-row>
                <rt-row top="20" tablet-display="none" mobile-display="none">
                    <rt-col size="9" class="app-col-fill">
                        <p class="app-col-fill__text d-inline">
                            rt-col-9
                        </p>
                    </rt-col>
                    <rt-col size="1" class="app-col-fill">
                        <p class="app-col-fill__text d-inline">
                            rt-col-1
                        </p>
                    </rt-col>
                    <rt-col size="1" class="app-col-fill">
                        <p class="app-col-fill__text d-inline">
                            rt-col-1
                        </p>
                    </rt-col>
                    <rt-col size="1" class="app-col-fill">
                        <p class="app-col-fill__text d-inline">
                            rt-col-1
                        </p>
                    </rt-col>

                </rt-row>
                <rt-row top="20" tablet-display="none" mobile-display="none">
                    <rt-col size="10" class="app-col-fill">
                        <p class="app-col-fill__text d-inline">
                            rt-col-10
                        </p>
                    </rt-col>
                    <rt-col size="1" class="app-col-fill">
                        <p class="app-col-fill__text d-inline">
                            rt-col-1
                        </p>
                    </rt-col>
                    <rt-col size="1" class="app-col-fill">
                        <p class="app-col-fill__text d-inline">
                            rt-col-1
                        </p>
                    </rt-col>
                </rt-row>

              <rt-row top="20" tablet-display="none" mobile-display="none">
                  <rt-col size="11" class="app-col-fill">
                    <p class="app-col-fill__text d-inline">
                        rt-col-11
                    </p>
                  </rt-col>
                  <rt-col size="1" class="app-col-fill">
                    <p class="app-col-fill__text d-inline">
                        rt-col-1
                    </p>
                  </rt-col>
              </rt-row>
            <rt-row top="20" tablet-display="none" mobile-display="none">
                <rt-col size="12" class="app-col-fill">
                    <p class="app-col-fill__text d-inline">
                        rt-col-12
                    </p>
                </rt-col>
            </rt-row>
                </div>
                '></pre-code>


            </div>
            <div class="rt-space-top25">
                <documentation-builder :json="documentation" type="components"/>
            </div>
        </div>
    </div>
</template>

<script>
    import documentation from "@vue-rt-style-kit-atoms-local/components/Grid/docs/docsGridRow.json";
    import componentsList from "../../componentsList";
//    const componentsList = {};

    export default {
        name: "AppGridElements",
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

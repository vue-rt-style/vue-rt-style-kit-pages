<template>
    <div class="app-content">
        <div class="rt-container">
            <div class="rt-col">
                <div class="app-title">
                    <h1 class="rt-font-hero">
                        Grid Component
                    </h1>
                </div>
            </div>

            <div class="app-body">
                <pre-code
                        text='<rt-row top="20" :mobile-reverse-direction="true">
                    <rt-col size="3" tablet-size="6" mobile-size="3" class="app-col-fill">
                        1
                    </rt-col>
                    <rt-col size="3" tablet-size="6" mobile-size="3" class="app-col-fill">x
                        2
                    </rt-col>
                    <rt-col size="3" tablet-size="6" mobile-size="3" class="app-col-fill">
                        3
                    </rt-col>
                </rt-row>'></pre-code>
                <pre-code
                        text='<rt-row top="20" :tablet-only-reverse-direction="true">
                    <rt-col size="3" tablet-size="6" mobile-size="3" class="app-col-fill">
                        1
                    </rt-col>
                    <rt-col size="3" tablet-size="6" mobile-size="3" class="app-col-fill">
                        2
                    </rt-col>
                    <rt-col size="3" tablet-size="6" mobile-size="3" class="app-col-fill">
                        3
                    </rt-col>
                </rt-row>'></pre-code>
                <pre-code
                        text='<rt-row top="20" :tablet-only-reverse-direction="true">
                    <rt-col size="3" tablet-size="2" mobile-size="3" class="app-col-fill">
                        1
                    </rt-col>
                    <rt-col size="3" tablet-size="2" mobile-size="3" class="app-col-fill">
                        2
                    </rt-col>
                    <rt-col size="3" tablet-size="2" mobile-size="3" class="app-col-fill">
                        3
                    </rt-col>
                </rt-row>'></pre-code>

                <pre-code
                        text='<rt-row top="20" :tablet-reverse-direction="true">
                    <rt-col size="3" tablet-size="6" mobile-size="3" class="app-col-fill">
                        1
                    </rt-col>
                    <rt-col size="3" tablet-size="6" mobile-size="3" class="app-col-fill">
                        2
                    </rt-col>
                    <rt-col size="3" tablet-size="6" mobile-size="3" class="app-col-fill">
                        3
                    </rt-col>
                </rt-row>'></pre-code>

                <pre-code
                        text='<rt-row top="120">123</rt-row>'></pre-code>
                <pre-code
                        text='<rt-row top="120">123</rt-row>'></pre-code>
                <div class="rt-space-top25">
                    <documentation-builder :json="documentation" type="components"/>
                </div>
            </div>
        </div>
    </div>
    <!--</div>-->
</template>

<script>

    import documentation from "@vue-rt-style-kit-atoms-local/components/Grid/docs/docsGridRow.json";

    export default {
        name: "GridComponent",
        components: {},
        data: () => ({
            documentation: {}
        }),
        mounted() {
            this.documentation = documentation;
        },
    };
</script>

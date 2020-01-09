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
                    <div class="rt-col-2 app-col-fill rt-col-md-2 rt-col-td-2">
                        <p class="app-col-fill__text td-d-none d-inline">
                            rt-col-2
                        </p>
                        <p class="app-col-fill__text md-d-none d-none td-d-block">
                            rt-col-td-2
                        </p>
                        <p class="app-col-fill__text td-d-none md-d-inline d-none">
                            rt-col-md-2
                        </p>
                    </div>
                    <div class="rt-col-1 app-col-fill rt-col-md-1 rt-col-td-1">
                        <p class="app-col-fill__text td-d-none d-inline">
                            rt-col-1
                        </p>
                        <p class="app-col-fill__text md-d-none d-none td-d-block">
                            rt-col-td-1
                        </p>
                        <p class="app-col-fill__text td-d-none md-d-inline d-none">
                            rt-col-md-1
                        </p>
                    </div>
                    <div class="rt-col-1 rt-col-td-1 app-col-fill md-d-none">
                        <p class="app-col-fill__text d-inline">
                            rt-col-1
                        </p>
                    </div>
                    <div class="rt-col-1 rt-col-td-1 app-col-fill md-d-none">
                        <p class="app-col-fill__text d-inline">
                            rt-col-1
                        </p>
                    </div>
                    <div class="rt-col-1 rt-col-td-1 app-col-fill md-d-none">
                        <p class="app-col-fill__text d-inline">
                            rt-col-1
                        </p>
                    </div>
                    <div class="rt-col-1 app-col-fill td-d-none">
                        <p class="app-col-fill__text d-inline">
                            rt-col-1
                        </p>
                    </div>
                    <div class="rt-col-1 app-col-fill td-d-none">
                        <p class="app-col-fill__text d-inline">
                            rt-col-1
                        </p>
                    </div>
                    <div class="rt-col-1 app-col-fill td-d-none">
                        <p class="app-col-fill__text d-inline">
                            rt-col-1
                        </p>
                    </div>
                    <div class="rt-col-1 app-col-fill td-d-none">
                        <p class="app-col-fill__text d-inline">
                            rt-col-1
                        </p>
                    </div>
                    <div class="rt-col-1 app-col-fill td-d-none">
                        <p class="app-col-fill__text d-inline">
                            rt-col-1
                        </p>
                    </div>
                    <div class="rt-col-1 app-col-fill td-d-none">
                        <p class="app-col-fill__text d-inline">
                            rt-col-1
                        </p>
                    </div>
                </rt-row>
                <rt-row top="20">
                    <div class="rt-col-3 app-col-fill rt-col-md-3 rt-col-td-3">
                        <p class="app-col-fill__text td-d-none d-inline">
                            rt-col-3
                        </p>
                        <p class="app-col-fill__text d-none md-d-none td-d-inline">
                            rt-col-td-3
                        </p>
                        <p class="app-col-fill__text d-none md-d-inline">
                            rt-col-md-3
                        </p>
                    </div>
                    <div class="rt-col-1 rt-col-td-1 app-col-fill md-d-none">
                        <p class="app-col-fill__text td-d-none d-inline">
                            rt-col-1
                        </p>
                        <p class="app-col-fill__text td-d-inline d-none">
                            rt-col-td-1
                        </p>
                    </div>
                    <div class="rt-col-1 rt-col-td-1 app-col-fill md-d-none">
                        <p class="app-col-fill__text td-d-none d-inline">
                            rt-col-1
                        </p>
                        <p class="app-col-fill__text td-d-inline d-none">
                            rt-col-td-1
                        </p>
                    </div>
                    <div class="rt-col-1 rt-col-td-1 app-col-fill md-d-none">
                        <p class="app-col-fill__text td-d-none d-inline">
                            rt-col-1
                        </p>
                        <p class="app-col-fill__text td-d-inline d-none">
                            rt-col-td-1
                        </p>
                    </div>
                    <div class="rt-col-1 app-col-fill td-d-none ">
                        <p class="app-col-fill__text td-d-none d-inline">
                            rt-col-1
                        </p>
                    </div>
                    <div class="rt-col-1 app-col-fill td-d-none">
                        <p class="app-col-fill__text td-d-none d-inline">
                            rt-col-1
                        </p>
                    </div>
                    <div class="rt-col-1 app-col-fill td-d-none">
                        <p class="app-col-fill__text td-d-none d-inline">
                            rt-col-1
                        </p>
                    </div>
                    <div class="rt-col-1 app-col-fill td-d-none">
                        <p class="app-col-fill__text td-d-none d-inline">
                            rt-col-1
                        </p>
                    </div>
                    <div class="rt-col-1 app-col-fill td-d-none">
                        <p class="app-col-fill__text td-d-none d-inline">
                            rt-col-1
                        </p>
                    </div>
                    <div class="rt-col-1 app-col-fill td-d-none">
                        <p class="app-col-fill__text td-d-none d-inline">
                            rt-col-1
                        </p>
                    </div>
                </rt-row>
                <rt-row top="20" mobile-display="none">
                    <div class="rt-col-4 rt-col-td-4 app-col-fill">
                        <p class="app-col-fill__text d-inline td-d-none">
                            rt-col-4
                        </p>
                        <p class="app-col-fill__text td-d-inline d-none">
                            rt-col-td-4
                        </p>
                    </div>
                    <div class="rt-col-1 rt-col-td-1 app-col-fill">
                        <p class="app-col-fill__text d-inline td-d-none">
                            rt-col-1
                        </p>
                        <p class="app-col-fill__text td-d-inline d-none">
                            rt-col-td-1
                        </p>
                    </div>
                    <div class="rt-col-1 rt-col-td-1 app-col-fill">
                        <p class="app-col-fill__text d-inline td-d-none">
                            rt-col-1
                        </p>
                        <p class="app-col-fill__text td-d-inline d-none">
                            rt-col-td-1
                        </p>
                    </div>
                    <div class="rt-col-1 app-col-fill td-d-none">
                        <p class="app-col-fill__text d-inline">
                            rt-col-1
                        </p>
                    </div>
                    <div class="rt-col-1 app-col-fill td-d-none">
                        <p class="app-col-fill__text d-inline">
                            rt-col-1
                        </p>
                    </div>
                    <div class="rt-col-1 app-col-fill td-d-none">
                        <p class="app-col-fill__text d-inline">
                            rt-col-1
                        </p>
                    </div>
                    <div class="rt-col-1 app-col-fill td-d-none">
                        <p class="app-col-fill__text d-inline">
                            rt-col-1
                        </p>
                    </div>
                    <div class="rt-col-1 app-col-fill td-d-none">
                        <p class="app-col-fill__text d-inline">
                            rt-col-1
                        </p>
                    </div>
                    <div class="rt-col-1 app-col-fill td-d-none">
                        <p class="app-col-fill__text d-inline">
                            rt-col-1
                        </p>
                    </div>
                </rt-row>
                <rt-row top="20" mobile-display="none">
                    <div class="rt-col-5 rt-col-td-5 app-col-fill">
                        <p class="app-col-fill__text d-inline td-d-none">
                            rt-col-5
                        </p>
                        <p class="app-col-fill__text d-none td-d-inline ">
                            rt-col-td-5
                        </p>
                    </div>
                    <div class="rt-col-1 rt-col-td-1 app-col-fill">
                        <p class="app-col-fill__text d-inline td-d-none">
                            rt-col-1
                        </p>
                        <p class="app-col-fill__text d-none td-d-inline ">
                            rt-col-td-1
                        </p>
                    </div>
                    <div class="rt-col-1 app-col-fill td-d-none">
                        <p class="app-col-fill__text d-inline">
                            rt-col-1
                        </p>
                    </div>
                    <div class="rt-col-1 app-col-fill td-d-none">
                        <p class="app-col-fill__text d-inline">
                            rt-col-1
                        </p>
                    </div>
                    <div class="rt-col-1 app-col-fill td-d-none">
                        <p class="app-col-fill__text d-inline">
                            rt-col-1
                        </p>
                    </div>
                    <div class="rt-col-1 app-col-fill td-d-none">
                        <p class="app-col-fill__text d-inline">
                            rt-col-1
                        </p>
                    </div>
                    <div class="rt-col-1 app-col-fill td-d-none">
                        <p class="app-col-fill__text d-inline">
                            rt-col-1
                        </p>
                    </div>
                    <div class="rt-col-1 app-col-fill td-d-none">
                        <p class="app-col-fill__text d-inline">
                            rt-col-1
                        </p>
                    </div>
                </rt-row>
                <rt-row top="20" tablet-display="none" mobile-display="none">
                    <div class="rt-col-6 app-col-fill rt-col-td-6">
                        <p class="app-col-fill__text d-inline td-d-none">
                            rt-col-6
                        </p>
                        <p class="app-col-fill__text d-none td-d-inline">
                            rt-col-td-6
                        </p>
                    </div>
                    <div class="rt-col-1 app-col-fill td-d-none md-d-none">
                        <p class="app-col-fill__text d-inline">
                            rt-col-1
                        </p>
                    </div>
                    <div class="rt-col-1 app-col-fill td-d-none">
                        <p class="app-col-fill__text d-inline">
                            rt-col-1
                        </p>
                    </div>
                    <div class="rt-col-1 app-col-fill td-d-none">
                        <p class="app-col-fill__text d-inline">
                            rt-col-1
                        </p>
                    </div>
                    <div class="rt-col-1 app-col-fill td-d-none">
                        <p class="app-col-fill__text d-inline">
                            rt-col-1
                        </p>
                    </div>
                    <div class="rt-col-1 app-col-fill td-d-none">
                        <p class="app-col-fill__text d-inline">
                            rt-col-1
                        </p>
                    </div>
                    <div class="rt-col-1 app-col-fill td-d-none">
                        <p class="app-col-fill__text d-inline">
                            rt-col-1
                        </p>
                    </div>
                </rt-row>
                <rt-row top="20" tablet-display="none" mobile-display="none">
                    <div class="rt-col-7 app-col-fill">
                        <p class="app-col-fill__text d-inline">
                            rt-col-7
                        </p>
                    </div>
                    <div class="rt-col-1 app-col-fill">
                        <p class="app-col-fill__text d-inline">
                            rt-col-1
                        </p>
                    </div>
                    <div class="rt-col-1 app-col-fill">
                        <p class="app-col-fill__text d-inline">
                            rt-col-1
                        </p>
                    </div>
                    <div class="rt-col-1 app-col-fill">
                        <p class="app-col-fill__text d-inline">
                            rt-col-1
                        </p>
                    </div>
                    <div class="rt-col-1 app-col-fill">
                        <p class="app-col-fill__text d-inline">
                            rt-col-1
                        </p>
                    </div>
                    <div class="rt-col-1 app-col-fill">
                        <p class="app-col-fill__text d-inline">
                            rt-col-1
                        </p>
                    </div>
                </rt-row>
                <rt-row top="20" tablet-display="none" mobile-display="none">
                    <div class="rt-col-8 app-col-fill">
                        <p class="app-col-fill__text d-inline">
                            rt-col-8
                        </p>
                    </div>
                    <div class="rt-col-1 app-col-fill">
                        <p class="app-col-fill__text d-inline">
                            rt-col-1
                        </p>
                    </div>
                    <div class="rt-col-1 app-col-fill">
                        <p class="app-col-fill__text d-inline">
                            rt-col-1
                        </p>
                    </div>
                    <div class="rt-col-1 app-col-fill">
                        <p class="app-col-fill__text d-inline">
                            rt-col-1
                        </p>
                    </div>
                    <div class="rt-col-1 app-col-fill">
                        <p class="app-col-fill__text d-inline">
                            rt-col-1
                        </p>
                    </div>
                </rt-row>
                <rt-row top="20" tablet-display="none" mobile-display="none">
                    <div class="rt-col-9 app-col-fill">
                        <p class="app-col-fill__text d-inline">
                            rt-col-9
                        </p>
                    </div>
                    <div class="rt-col-1 app-col-fill">
                        <p class="app-col-fill__text d-inline">
                            rt-col-1
                        </p>
                    </div>
                    <div class="rt-col-1 app-col-fill">
                        <p class="app-col-fill__text d-inline">
                            rt-col-1
                        </p>
                    </div>
                    <div class="rt-col-1 app-col-fill">
                        <p class="app-col-fill__text d-inline">
                            rt-col-1
                        </p>
                    </div>

                </rt-row>
                <rt-row top="20" tablet-display="none" mobile-display="none">
                    <div class="rt-col-10 app-col-fill">
                        <p class="app-col-fill__text d-inline">
                            rt-col-10
                        </p>
                    </div>
                    <div class="rt-col-1 app-col-fill">
                        <p class="app-col-fill__text d-inline">
                            rt-col-1
                        </p>
                    </div>
                    <div class="rt-col-1 app-col-fill">
                        <p class="app-col-fill__text d-inline">
                            rt-col-1
                        </p>
                    </div>
                </rt-row>

              <rt-row top="20" tablet-display="none" mobile-display="none">
                <div class="rt-col-11 app-col-fill">
                    <p class="app-col-fill__text d-inline">
                        rt-col-11
                    </p>
                </div>
                <div class="rt-col-1 app-col-fill">
                    <p class="app-col-fill__text d-inline">
                        rt-col-1
                    </p>
                </div>
              </rt-row>
            <rt-row top="20" tablet-display="none" mobile-display="none">
                <div class="rt-col-12 app-col-fill">
                    <p class="app-col-fill__text d-inline">
                        rt-col-12
                    </p>
                </div>
            </rt-row>
                </div>
                '></pre-code>


            </div>
        </div>
    </div>
</template>

<script>
    const componentsList = {};

    export default {
        name: "AppGridElements",
        components: componentsList,
        mounted() {
        },
        created() {
        },
        methods: {}
    };
</script>

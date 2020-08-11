<template>
    <div>
        <div class="app-content">
            <div class="rt-container">
                <div class="app-title rt-col">
                    <h1 class="rt-font-hero">
                        Text Image Block
                    </h1>
                </div>
            </div>
            <div class="app-body">
<!--                <pre-code text=""/>-->
                <div class="sp-t-5-4"/>
                <div class="sp-t-5-4"/>
                <div class="sp-t-5-4"/>
                <div class="sp-t-5-4"/>
                <div class="sp-t-5-4"/>
                <div class="sp-t-5-4"/>
                <rt-text-image-block title="Блок с видео" image="/static/images/B2B/img345.png" bg-color="b2c-pink" video="D406lgoxLxY">
                    <template slot="upper-content">
                        <p class="rt-font-small-paragraph sp-t-2 sp-b-0-4">Много-много-много-много-много-много-много-много-много-много-много-много-много-много-много очень-очень много текста</p>
                        <p class="rt-font-small-paragraph sp-b-2">Много-много-много-много-много-много-много-много очень-очень много текста</p>
                        <rt-button class="rt-button-cool-grey-border">Подписаться</rt-button>
                    </template>
                    <template slot="footnote">

                    </template>
                </rt-text-image-block>
                <div class="sp-t-5-4"/>
                <div class="sp-t-5-4"/>
                <div class="sp-t-5-4"/>
                <div class="sp-t-5-4"/>
                <div class="sp-t-5-4"/>
                <div class="sp-t-5-4"/>
            </div>
        </div>

        <div class="rt-container rt-space-top25">
            <documentation-builder :json="documentation" type="components"/>
        </div>
    </div>
</template>

<script>
    import documentation from "@vue-rt-style-kit-molecules-local/components/TextImageBlock/docs/index.json";
    import componentsList from "../../componentsList";
    //  const componentsList = {};
    export default {
        name: "AppTextImageBlock",
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

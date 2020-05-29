<template>
    <div class="rt-container">
        <div class="app-content  rt-col-12 rt-col-md-3">
            <div class="app-title row">
                <h1 class="col rt-font-hero">
                    Color Line Text
                </h1>
            </div>
            <div class="app-body">
                <div class="app-row row color-block--dark-blue">
                    <div class="rt-space-horizontal rt-space-vertical rt-col">
                        <rt-color-line-text label-color="blue">
                            <template slot="label">Будьте спокойны за <br> своих близких</template>
                        </rt-color-line-text>
                    </div>
                </div>
                <pre-code text='<div class="app-row row color-block--dark-blue"><div class="rt-space-horizontal rt-space-vertical rt-col"><rt-color-line-text label-color="blue" :hide-arrow="true"><template slot="label">Будьте спокойны за своих близких</template><template slot="content">Ваш дом всегда под контролем,  <br> даже когда вы далеко.</template></rt-color-line-text></div></div>'/>
                <pre-code text="<div class='app-row row color-block--dark-blue'><div class='rt-space-horizontal rt-space-vertical rt-col'><rt-color-line-text><template slot='label'>Будьте спокойны за своих близких</template><template slot='content'>Ваш дом всегда под контролем,  <br> даже когда вы далеко.</template></rt-color-line-text></div></div>"/>
                <pre-code text="<div class='app-row row color-block--purple-high'><div class='rt-space-horizontal rt-space-vertical'><rt-color-line-text color-icon='purple'><template slot='label'>Мама мыла раму!</template><template slot='content'>Ваш дом всегда под контролем,  <br> даже когда вы далеко.</template></rt-color-line-text></div></div>"/>
                <pre-code text="<div class='app-row row color-block--dark-blue'><div class='rt-space-horizontal rt-space-vertical'><rt-color-line-text color-icon='red'><template slot='label'>Мама мыла раму!</template><template slot='content'>Ваш дом всегда под контролем,  <br> даже когда вы далеко.</template></rt-color-line-text></div></div>"/>
                <pre-code text="<div class='app-row row color-block--yellow'><div class='rt-space-horizontal rt-space-vertical'><rt-color-line-text color-icon='dark-blue'><template slot='label'>Мама мыла раму!</template><template slot='content'>Ваш дом всегда под контролем,  <br> даже когда вы далеко.</template></rt-color-line-text></div></div>"/>
                <pre-code text="<div class='app-row row color-block--dark-blue'><div class='rt-space-horizontal rt-space-vertical'><rt-color-line-text color-icon='light-blue'><template slot='label'>Мама мыла раму!</template><template slot='content'>Ваш дом всегда под контролем,  <br> даже когда вы далеко.</template></rt-color-line-text></div></div>"/>
                <pre-code text="<div class='app-row row color-block--dark-blue'><div class='rt-space-horizontal rt-space-vertical'><rt-color-line-text color-icon='yellow'><template slot='label'>Мама мыла раму!</template><template slot='content'>Ваш дом всегда под контролем,  <br> даже когда вы далеко.</template></rt-color-line-text></div></div>"/>
                <pre-code text="<div class='app-row row color-block--dark-blue'><div class='rt-space-horizontal rt-space-vertical'><rt-color-line-text color-icon='pink'><template slot='label'>Мама мыла раму!</template><template slot='content'>Ваш дом всегда под контролем,  <br> даже когда вы далеко.</template></rt-color-line-text></div></div>"/>
                <pre-code text="<div class='app-row row color-block--dark-blue'><div class='rt-space-horizontal rt-space-vertical'><rt-color-line-text color-icon='green'><template slot='label'>Мама мыла раму!</template><template slot='content'>Ваш дом всегда под контролем,  <br> даже когда вы далеко.</template></rt-color-line-text></div></div>"/>
                <pre-code text="<div class='app-row row color-block--dark-blue'><div class='rt-space-horizontal rt-space-vertical'><rt-color-line-text :is-white-color='true' color-icon='green' fill-color='purple'><template slot='label'>Мама мыла раму!</template><template slot='content'>Ваш дом всегда под контролем, <br> даже когда вы далеко.</template></rt-color-line-text></div></div>"/>
                <pre-code text="<div class='app-row row'><div class='rt-space-horizontal rt-space-vertical'><rt-color-line-text :is-white-color='true' color-icon='green' fill-color='red'><template slot='label'>Мама мыла раму!</template><template slot='content'>Ваш дом всегда под контролем, <br> даже когда вы далеко.</template></rt-color-line-text></div></div>"/>
                <pre-code text="<div class='app-row row'><div class='rt-space-horizontal rt-space-vertical'><rt-color-line-text :is-white-color='true' color-icon='green' fill-color='dark-blue'><template slot='label'>Мама мыла раму!</template><template slot='content'>Ваш дом всегда под контролем, <br> даже когда вы далеко.</template></rt-color-line-text></div></div>"/>
                <pre-code text="<div class='app-row row'><div class='rt-space-horizontal rt-space-vertical'><rt-color-line-text :is-white-color='true' color-icon='green' fill-color='light-blue'><template slot='label'>Мама мыла раму!</template><template slot='content'>Ваш дом всегда под контролем, <br> даже когда вы далеко.</template></rt-color-line-text></div></div>"/>
                <pre-code text="<div class='app-row row'><div class='rt-space-horizontal rt-space-vertical'><rt-color-line-text :is-white-color='true' color-icon='green' fill-color='yellow'><template slot='label'>Мама мыла раму!</template><template slot='content'>Ваш дом всегда под контролем, <br> даже когда вы далеко.</template></rt-color-line-text></div></div>"/>
                <pre-code text="<div class='app-row row'><div class='rt-space-horizontal rt-space-vertical'><rt-color-line-text :is-white-color='true' color-icon='green' fill-color='pink'><template slot='label'>Мама мыла раму!</template><template slot='content'>Ваш дом всегда под контролем, <br> даже когда вы далеко.</template></rt-color-line-text></div></div>"/>
                <pre-code text="<div class='app-row row'><div class='rt-space-horizontal rt-space-vertical'><rt-color-line-text :is-white-color='true' color-icon='red' fill-color='green'><template slot='label'>Смотри кино <br/>  и получай бонусы  <br/> от Сбербанка</template><template slot='content'>Ваш дом всегда под контролем, <br> даже когда вы далеко.</template></rt-color-line-text></div></div>"/>

                <div class="row">
                    <div class="rt-col-4 rt-col-td-3 rt-col-md-3">
                        <rt-color-line-text :is-advertise='true' :is-white-color='true' fill-color='purple'>
                            <template slot="label">Мобильная связь <br>за счет интернета</template>
                        </rt-color-line-text>
                        <p class="rt-font-paragraph rt-space-bottom-half">и услуги с 50% скидкой</p>
                        <rt-button class="rt-button-small rt-button-purple-border">Подробнее</rt-button>
                    </div>
                </div>
            </div>
            <div class="rt-space-top25">
                <documentation-builder :json="documentation" type="components"/>
            </div>
        </div>
    </div>
</template>

<script>
    import documentation from "@vue-rt-style-kit-atoms-local/components/ColorLineText/docs/index.json";
    import componentsList from "../../componentsList";
//    const componentsList = {};

    export default {
        name: "AppColorLineText",
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

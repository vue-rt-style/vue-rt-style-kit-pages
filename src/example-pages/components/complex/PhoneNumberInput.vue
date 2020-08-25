<template>
    <div>
        <div class="rt-container">
            <div class="app-content rt-col-12 rt-col-md-3">
                <div class="app-title">
                    <h1 class="rt-font-hero">
                        Phone Number Input
                    </h1>
                </div>
                <div class="app-body">
                    <rt-phone-number-input v-on:selected-number="doIt" :prefix="8" v-on:search-cleared="doIt"
                            :area-code="[{value: 202, code: 202}]"/>
                </div>
            </div>
        </div>
<!--        <div class="rt-container rt-space-top25">-->
<!--            <documentation-builder :json="documentation" type="components"/>-->
<!--        </div>-->
    </div>
</template>

<script>
    import documentation from "@vue-rt-style-kit-molecules-local/components/Youtube/docs/index.json";
    import componentsList from "../../componentsList";
    //  const componentsList = {};
    export default {
        name: "AppPhoneNumberInput",
        components: componentsList,
        data: () => ({
            codes: ['234', '234', '432']
            // documentation: {}
        }),
        mounted() {
            // this.documentation = documentation;
        },
        created() {},
        methods: {
            doIt(data) {
                console.log(data)
            }
        }
    };
</script>

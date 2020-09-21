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
                    <rt-phone-number-input @selected-number="selected" :prefix="8" @search-cleared="cleared"
                            :area-code=code
                            :auto-complete=complete
                            :client-auto-complete=client
                            @select-interaction-detected="select"
                            @input-interaction-detected="input"/>
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
            // documentation: {}
            code: [{ "value": "all", "code": "все"}, { "value": 831, "code": 831 }, { "value": 123, "code": 123}],
            complete: "5\\d\\d\\d\\d\\d\\d",
            client: "\\d9\\d\\d\\d\\d\\d"
        }),
        mounted() {
            // this.documentation = documentation;
            // setTimeout(()=> {
            //     this.code = [{ "value": 831, "code": 831 }, { "value": "all", "code": "все"}, { "value": 123, "code": 123, "preselected": true}]
            // },1500)
            // setTimeout(()=> {
            //     this.complete = '5\\d\\d\\d\\d\\d\\d'
            // },1000)
            // setTimeout(()=> {
            //     this.client = '\\d3\\d\\d\\d\\d\\d'
            // },2000)
        },
        created() {},
        methods: {
            cleared(data) {
                console.log(data)
            },
            selected(data) {
                console.log(data)
            },
            select() {
                console.log('select detected')
            },
            input() {
                console.log('input detected')
            }
        }
    };
</script>

<template>
    <div class="conference">
        <a-c-header :phone="88006661313" name="Мартышина Ольга Алексеевна"/>
        <div class="rt-container">
            <div class="rt-col">
                <a-c-archive-component :conference-list="[{}]"></a-c-archive-component>
            </div>
        </div>
        <a-c-footer/>
    </div>
</template>

<script>
    const componentsList = {};
    export default {
        name: "AudioConferenceArchive",
        components: {
            componentsList
        },
        data() {
            return {

            }
        },
        mounted() {},
        created() {},
        methods: {}
    };
</script>
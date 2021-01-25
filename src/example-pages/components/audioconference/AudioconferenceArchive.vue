<template>
    <div class="conference">
        <a-c-header/>
        <a-c-archive-component @get-filtered-list="filterList" :conference-list="conferenceList"></a-c-archive-component>
        <a-c-footer/>
        <a-c-settings-popup/>
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
                conferenceList: null
            }
        },
        mounted() {},
        created() {},
        methods: {
            filterList() {
                this.conferenceList = localStorage.acArchive ? JSON.parse(localStorage.acArchive) : [];
            }
        }
    };
</script>
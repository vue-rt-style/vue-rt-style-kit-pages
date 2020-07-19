<template>
    <div class="conference">
        <a-c-header :phone="88006661313" name="Абракадабрович Мadfgsdfg"/>
        <div class="rt-container conference__content-wrapper">
            <div class="rt-col">
                <h1 class="rt-font-h2 sp-t-3 sp-b-1-2">Аудиоконференции</h1>
            </div>
            <div class="rt-col">
                <a-c-list-component :conferenceList="this.conferenceList"></a-c-list-component>
            </div>
        </div>
        <a-c-footer/>
        <a-c-settings-popup/>
        <a-c-creation-popup/>
        <a-c-confirmation-popup/>
        <a-c-invitation-popup/>
        <a-c-manage-popup/>
        <rt-hint-body/>
    </div>
</template>

<script>
    const componentsList = {};
    export default {
        name: "AudioConferenceList",
        components: {
            componentsList
        },
        data() {
            return {
                conferenceList: [
                    {
                        date: "",
                        time: "",
                        duration: "",
                        theme: "",
                        leader: "",
                        conferenceID: "",
                        leaderID: "",
                        participants: "",
                        hasRecording: "",
                    }
                ]
            }
        },
        mounted() {},
        created() {},
        methods: {}
    };
</script>
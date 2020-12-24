<template>
    <div class="conference">
        <a-c-header/>
        <div class="rt-container conference__content-wrapper">
            <div class="rt-col">
                <h1 class="rt-font-h2 sp-t-3 sp-b-1-2">Аудиоконференции</h1>
            </div>
            <div class="rt-col">
                <a-c-list-component :conferenceList="conferenceList" @set-chosen="chooseConference"
                                    @set-deletion="setDeletion" @manage-conf="manageConference" @lookup-conf="lookupConference"/>
            </div>
        </div>
        <a-c-date-picker/>
        <a-c-footer/>
        <a-c-settings-popup/>
        <a-c-creation-popup @conf-created="addConference"/>
        <a-c-edit-popup :conferenceData="chosenConference"/>
        <a-c-confirmation-popup :confData="chosenConference"/>
        <a-c-invitation-popup :confData="chosenConference"/>
        <a-c-manage-popup :confData="chosenConference"/>
        <rt-real-popup trigger-element-class="delete-button" main-wrapper-class="app"
                       :position-center="true" class="delete-popup">
            <div class="popup-content">
                <h2 class="rt-font-h2 sp-b-1">Вы уверены?</h2>
                <p class="rt-font-small-paragraph sp-b-1-3">Вы уверены что хотите удалить данную аудиоконференцию? Это действие необратимо.</p>
                <rt-button color="orange" @click="deleteConf">Да, удалить</rt-button>
                <rt-button color="orange-border" @click="closePopup">Нет, отменить</rt-button>
            </div>
        </rt-real-popup>
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
                conferenceList: null,
                chosenConference: null
            }
        },
        mounted() {
            this.conferenceList = localStorage.acList ? JSON.parse(localStorage.acList) : []
        },
        created() {},
        methods: {
            addConference($event) {
                this.conferenceList.push($event);
                this.chosenConference = this.conferenceList[this.conferenceList.length - 1];
            },
            chooseConference ($event) {
                this.chosenConference = $event;
                document.body.dispatchEvent(new CustomEvent("open-popup", {'detail': [this.$el, 'invitation-popup']}))
            },
            deleteConf($event) {
                let confList = JSON.parse(localStorage.acList);
                confList.map((item, index) => {
                    if(item.confID === this.chosenConference.confID) {
                        confList.splice(index, 1)
                    }
                });
                localStorage.setItem('acList', JSON.stringify(confList));
                this.conferenceList = localStorage.acList ? JSON.parse(localStorage.acList) : [];
                this.closePopup($event);
            },
            closePopup($event) {
                $event.target.closest('.rtb-popup').querySelector('.rtb-popup-close').dispatchEvent(new MouseEvent('click'));
                // this.lookupConference(this.chosenConference);
            },
            setDeletion($event) {
                this.chosenConference = $event;
                document.body.dispatchEvent(new CustomEvent("open-popup", {'detail': [this.$el, 'delete-popup']}))
            },
            manageConference($event) {
                this.chosenConference = $event;
                document.body.dispatchEvent(new CustomEvent("open-popup", {'detail': [this.$el, 'manage-popup']}))
            },
            lookupConference($event) {
                this.chosenConference = $event;
                document.body.dispatchEvent(new CustomEvent("open-popup", {'detail': [this.$el, 'confirmation-popup']}))
            }
        }
    };
</script>
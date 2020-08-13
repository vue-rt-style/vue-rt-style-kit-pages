<template>
    <div class="conference">
        <a-c-header :phone="88006661313" name="Абракадабрович Мadfgsdfg"/>
        <div class="rt-container conference__content-wrapper">
            <div class="rt-col">
                <div class="row sp-t-2-3 sp-b-1-3 flex-v-center">
                    <div class="rt-col-4">
                        <h1 class="rt-font-h2">Адресная книга</h1>
                    </div>
                    <div class="rt-col-4 rt-font-right">
                        <rt-button class="rt-button-orange-border color-orange">Добавить новый контакт</rt-button>
                    </div>
                    <div class="rt-col-4">
                        <rt-input type="text" :is-b2b-input="true" :outlined="true" placeholder="Поиск по контактам"/>
                    </div>
                </div>
            </div>
            <div class="rt-col">
                <div class="sp-h-0-1 d-flex d-space-between sp-b-0-2">
                    <button class="phonebook__letter">все</button>
                    <button v-for="letter in arr_RU" class="phonebook__letter">
                        {{letter}}
                    </button>
                    <button class="phonebook__letter">A-Z</button>
                    <button class="phonebook__letter">0-9</button>
                </div>
            </div>
            <div class="rt-col">
                <a-c-phonebook-component :phone-book="[{'adf': 'adf'}]"></a-c-phonebook-component>
            </div>
        </div>
        <a-c-footer/>
    </div>
</template>

<script>
    const componentsList = {};
    export default {
        name: "AudioConferencePhonebook",
        components: {
            componentsList
        },
        data() {
            return {
                arr_RU: ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Э', 'Ю', 'Я'],
            }
        },
        mounted() {},
        created() {},
        methods: {}
    };
</script>
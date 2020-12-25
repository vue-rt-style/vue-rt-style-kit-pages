<template>
    <div class="conference">
        <a-c-header/>
        <div class="rt-container conference__content-wrapper">
            <div class="rt-col">
                <div class="row sp-t-2-3 sp-b-1-3 flex-v-center">
                    <div class="rt-col-4">
                        <h1 class="rt-font-h2">Адресная книга</h1>
                    </div>
                    <div class="rt-col-4 rt-font-right">
                        <rt-button class="rt-button-orange-border color-orange" @click="addContact">Добавить новый контакт</rt-button>
                    </div>
                    <div class="rt-col-4">
                        <rt-input type="text" :is-b2b-input="true" :outlined="true" placeholder="Поиск по контактам" @input="search" ref="searchInput"/>
                    </div>
                </div>
            </div>
            <div class="rt-col">
                <div class="sp-h-0-1 d-flex d-space-between sp-b-0-2">
                    <button class="phonebook__letter" @click="rollbackFilter">
                        <span class="phonebook__letter-title">все</span>
                        <div class="phonebook__hint">Все контакты</div>
                    </button>
                    <button v-for="letter in arr_RU" class="phonebook__letter phonebook__letter--disabled" ref="cyrillic" @click="filterPhonebook">
                        <span class="phonebook__letter-title">{{letter}}</span>
                        <div class="phonebook__hint">Имя контакта <br>начинается на «{{letter}}»</div>
                    </button>
                    <button class="phonebook__letter phonebook__letter--disabled" ref="latin" @click="filterPhonebook">
                        <span class="phonebook__letter-title">A-Z</span>
                        <div class="phonebook__hint">Имя контакта <br>начинается с латинских букв</div>
                    </button>
                    <button class="phonebook__letter phonebook__letter--disabled" ref="numbers" @click="filterPhonebook">
                        <span class="phonebook__letter-title">0-9</span>
                        <div class="phonebook__hint">Имя контакта <br>начинается с цифр</div>
                    </button>
                </div>
            </div>
            <div class="rt-col">
                <a-c-phonebook-component :phone-book="localPhoneBook" @contact-edited="fillBook" :search="isSearching"></a-c-phonebook-component>
            </div>
        </div>
        <a-c-footer/>
        <a-c-settings-popup/>
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
                phoneBook: null,
                localPhoneBook: [],
                isSearching: false
            }
        },
        mounted() {
            this.fillBook();
        },
        created() {},
        methods: {
            addContact() {
                this.$emit('add-contact')
            },
            filterPhonebook($event) {
                this.localPhoneBook = [];
                if($event.target.innerText.length == 1) {
                    this.phoneBook.map(item => {
                        item.capital.toLowerCase() == $event.target.innerText.toLowerCase() ? this.localPhoneBook.push(item) : false;
                    })
                } else if(/[a-z]/i.test($event.target.innerText.toLocaleLowerCase())) {
                    this.phoneBook.map(item => {
                        /[a-z]/i.test(item.capital.toLocaleLowerCase()) ? this.localPhoneBook.push(item) : false;
                    })
                } else if(/[0-9]/i.test($event.target.innerText.toLocaleLowerCase())) {
                    this.phoneBook.map(item => {
                        /[0-9]/i.test(item.capital.toLocaleLowerCase()) ? this.localPhoneBook.push(item) : false;
                    })
                }
                this.isSearching = false;
                if(this.localPhoneBook.length < 1) {
                    this.isSearching = true;
                }
            },
            rollbackFilter() {
                this.localPhoneBook = this.phoneBook;
            },
            fillBook(){
                this.phoneBook = localStorage.phonebook ? JSON.parse(localStorage.phonebook) : [];
                this.localPhoneBook = this.phoneBook;
                this.fixLetters();
            },
            fixLetters() {
                this.isSearching = false;
                let letterArray = [];
                this.localPhoneBook.map(item => letterArray.push(item.capital));
                let filteredArray = letterArray.filter((item, index) => letterArray.indexOf(item) === index);
                this.$refs.cyrillic.forEach(item => {
                    item.classList.add('phonebook__letter--disabled');
                    this.$refs.latin.classList.add('phonebook__letter--disabled');
                    this.$refs.numbers.classList.add('phonebook__letter--disabled');
                    filteredArray.map(item2 => {
                        if(item.innerText.toLocaleLowerCase() == item2.toLowerCase()) {
                            item.classList.remove('phonebook__letter--disabled')
                        } else if(/[a-z]/i.test(item2)) {
                            this.$refs.latin.classList.remove('phonebook__letter--disabled')
                        } else if(/[0-9]/i.test(item2)) {
                            this.$refs.numbers.classList.remove('phonebook__letter--disabled')
                        }
                    })
                })
            },
            search($event) {
                if($event.length > 0) {
                    this.localPhoneBook = [];
                    this.phoneBook.map(item => {
                        if(item.name.includes($event)) {
                            this.localPhoneBook.push(item);
                        }
                    });
                    this.isSearching = true;
                } else {
                    this.localPhoneBook = this.phoneBook;
                    this.isSearching = false;
                }
            }
        }
    };
</script>
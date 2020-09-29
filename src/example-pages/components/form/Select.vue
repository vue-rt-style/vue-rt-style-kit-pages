<template>
  <div class="rt-container">
    <div class="app-content rt-col-12 rt-col-md-3">
      <div class="app-title">
        <h1 class="rt-font-hero">
          Select
        </h1>
      </div>
      <div class="app-body">
        <div class="app-row row">
          <div class="rt-col">
            <p class="rt-font-h3">
              Select with js
            </p>
          </div>
        </div>
        <div class="app-row row">
          <rt-select-v2 :set-first-active="true" :json="[{value:'50', label:'150 минут'},{value:'150', label:'250 минут'},{value:'250', label:'500 минут'}]" :value="['50']" name="test2" label="Оборудование" :has-content-text="true"></rt-select-v2>
          <rt-select-v2 @change="changeSelect" :set-first-active="true" :value="['50']" type="multiselect" name="test1" label="Оборудование" :has-content-text="true">
            <template slot="content">
              <p class="rt-font-control color-main05 rt-space-top0-half">Пакет входящих минут <br> с любых телефонов России</p>
            </template>
            <rt-select-v2-option  select-name="test1" :default="true" :selected="true" value="50">150 минут</rt-select-v2-option>
            <rt-select-v2-option select-name="test1" :selected="true" value="50">150 минут</rt-select-v2-option>
            <rt-select-v2-option select-name="test1"  value="150">500 минут</rt-select-v2-option>
            <rt-select-v2-option select-name="test1" label="1000 минут" value="250"></rt-select-v2-option>
          </rt-select-v2>
          <div class="rt-col-3 rt-col-md-3">
            <span class="rt-font-label flex-fill rt-space-bottom05">simple with content text</span>
            <rt-select label="Оборудование" value="0" :has-content-text="true">
              <template slot="content">
                <p class="rt-font-control color-main05 rt-space-top0-half">Пакет входящих минут <br> с любых телефонов России</p>
              </template>
              <rt-select-option :selected="true" value="150">150 минут</rt-select-option>
              <rt-select-option value="150">500 минут</rt-select-option>
              <rt-select-option value="150">1000 минут</rt-select-option>
            </rt-select>
          </div>
        </div>
        <div class="app-row row">
          <div class="col rt-col-md-3">
            <span class="rt-font-label flex-fill rt-space-bottom05">simple select</span>
            <rt-select label="Оборудование" value="0">
              <rt-select-option v-for="(option, index) in optionsList"
                                :key="'index' + Math.random().toString(5).slice(4)"
                                :value="String(index)">
                {{ option.label }}
              </rt-select-option>
            </rt-select>
          </div>
        </div>
        <div class="app-row row">
          <div class="rt-col-6 rt-col-md-2 rt-md-space-top d-flex flex-column">
            <span class="rt-font-label flex-fill rt-space-bottom05">select with error</span>
            <rt-select :error-message="'ошибка: не выбран город'"
                       :has-error="true"
                       label="Оборудование"
                       value="0"
                       text="Новгородская обл">
              <rt-select-option v-for="(option, index) in optionsList"
                                :key="'index' + Math.random().toString(5).slice(4)"
                                :value="String(index)">
                {{ option.label }}
              </rt-select-option>
            </rt-select>
          </div>
          <div class="rt-col-6 rt-col-md-1 rt-md-space-top d-flex flex-column">
            <span class="rt-font-label flex-fill rt-space-bottom05">disabled select</span>
            <rt-select :disabled="true"
                       label="Оборудование"
                       value="0"
                       text="Новгородская обл">
              <rt-select-option v-for="(option, index) in optionsList"
                                :key="'index' + Math.random().toString(5).slice(4)"
                                :value="String(index)">
                {{ option.label }}
              </rt-select-option>
            </rt-select>
          </div>
        </div>
        <div class="app-row row color-block--light-grey rt-space-top rt-space-bottom">
          <div class="rt-col-6 rt-col-md-2 d-flex flex-column">
          b2b
            <rt-select :is-b2b-select="true" label="Выберите регион">
              <rt-select-option v-for="(option, index) in optionsList"
                                :key="'index' + Math.random().toString(5).slice(4)"
                                :value="String(index)">
                {{ option.label }}
              </rt-select-option>
            </rt-select>
          </div>
          <div class="rt-col-6 rt-col-md-2 d-flex flex-column">
          b2b
            <rt-select :is-b2b-select="true"
                       label="Выберите регион"
                       :disabled="true">
              <rt-select-option v-for="(option, index) in optionsList"
                                :key="'index' + Math.random().toString(5).slice(4)"
                                :value="String(index)">
                {{ option.label }}
              </rt-select-option>
            </rt-select>
          </div>
        </div>
        <div class="app-row row color-block--light-grey rt-space-top rt-space-bottom">
          <div class="rt-col-6 rt-col-md-2 d-flex flex-column">
          b2b
            <rt-select :is-b2b-select="true"
                       label="Выберите регион"
                       :has-error="true">
              <rt-select-option v-for="(option, index) in optionsList"
                                :key="'index' + Math.random().toString(5).slice(4)"
                                :value="String(index)">
                {{ option.label }}
              </rt-select-option>
            </rt-select>
          </div>
          <div class="rt-col-6 rt-col-md-2 d-flex flex-column">
          b2b
            <rt-select :is-b2b-select="true"
                       label="Выберите регион"
                       :outlined="true"
                       :auto-complete="true">
              <rt-select-option v-for="(option, index) in optionsList"
                                :key="'index' + Math.random().toString(5).slice(4)"
                                :value="String(index)">
                {{ option.label }}
              </rt-select-option>
            </rt-select>
          </div>
        </div>
        <div class="app-row row color-block--light-grey rt-space-top rt-space-bottom">
          <div class="rt-col-6 rt-col-md-2 d-flex flex-column">
          b2b
            <rt-select :is-b2b-select="true"
                       label="Выберите регион"
                       :outlined="true"
                       :disabled="true">
              <rt-select-option v-for="(option, index) in optionsList"
                                :key="'index' + Math.random().toString(5).slice(4)"
                                :value="String(index)">
                {{ option.label }}
              </rt-select-option>
            </rt-select>
          </div>
          <div class="rt-col-6 rt-col-md-2 d-flex flex-column">
          b2b
            <rt-select :is-b2b-select="true"
                       label="Выберите регион"
                       :outlined="true"
                       :has-error="true">
              <rt-select-option v-for="(option, index) in optionsList"
                                :key="'index' + Math.random().toString(5).slice(4)"
                                :value="String(index)">
                {{ option.label }}
              </rt-select-option>
            </rt-select>
          </div>
        </div>
        <div class="app-row row rt-space-top rt-space-bottom">
          <div class="rt-col-6 rt-col-md-2 d-flex flex-column">
            <rt-select label="multiSelect" :multi="true" field-id="235">
              <rt-select-option v-for="i in 5" :key="i" :value="String(i)">
                Вариант {{ i }} fghsdfgsdfsdfgsdfg
              </rt-select-option>
            </rt-select>
          </div>
        </div>
        <div class="app-row row rt-space-top">
          <documentation-builder :json="documentation" type="components"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import documentation from "@vue-rt-style-kit-atoms-local/components/Input/docs/index.json";
  import componentsList from "../../componentsList";
  // const componentsList = {};

  export default {
    name: "AppInput",
    components: componentsList,
    data: () => ({
      documentation: {},
      inputModelValue: "test",
      optionsList: [
        {label:"Адыгея Респ",selected:true},
        {label:"Алтай Респ",selected:false},
        {label:"Алтайский край",selected:false},
        {label:"Амурская обл",selected:false},
        {label:"Архангельская обл",selected:false},
        {label:"Астраханская обл",selected:false},
        {label:"Башкортостан Респ",selected:false},
        {label:"Белгородская обл",selected:false},
        {label:"Брянская обл",selected:false},
        {label:"Бурятия Респ",selected:false},
        {label:"Владимирская обл",selected:false},
        {label:"Волгоградская обл",selected:false},
        {label:"Вологодская обл",selected:false},
        {label:"Воронежская обл",selected:false},
        {label:"Дагестан Респ",selected:false},
        {label:"Еврейская Аобл",selected:false},
        {label:"Забайкальский край",selected:false},
        {label:"Ивановская обл",selected:false},
        {label:"Ингушетия Респ",selected:false},
        {label:"Иркутская обл",selected:false},
        {label:"Кабардино-Балкарская Респ",selected:false},
        {label:"Калининградская обл",selected:false},
        {label:"Калмыкия Респ",selected:false},
        {label:"Калужская обл",selected:false},
        {label:"Камчатский край",selected:false},
        {label:"Карачаево-Черкесская Респ",selected:false},
        {label:"Карелия Респ",selected:false},
        {label:"Кемеровская обл",selected:false},
        {label:"Кировская обл",selected:false},
        {label:"Коми Респ",selected:false},
        {label:"Костромская обл",selected:false},
        {label:"Краснодарский край",selected:false},
        {label:"Красноярский край",selected:false},
        {label:"Курганская обл",selected:false},
        {label:"Курская обл",selected:false},
        {label:"Ленинградская обл",selected:false},
        {label:"Липецкая обл",selected:false},
        {label:"Магаданская обл",selected:false},
        {label:"Марий Эл Респ",selected:false},
        {label:"Мордовия Респ",selected:false},
        {label:"Москва г",selected:false},
        {label:"Московская обл",selected:false},
        {label:"Мурманская обл",selected:false},
        {label:"Ненецкий АО",selected:false},
        {label:"Нижегородская обл",selected:false},
        {label:"Новгородская обл",selected:false},
        {label:"Новосибирская обл",selected:false},
        {label:"Омская обл",selected:false},
        {label:"Оренбургская обл",selected:false},
        {label:"Орловская обл",selected:false},
        {label:"Пензенская обл",selected:false},
        {label:"Пермский край",selected:false},
        {label:"Приморский край",selected:false},
        {label:"Псковская обл",selected:false},
        {label:"Ростовская обл",selected:false},
        {label:"Рязанская обл",selected:false},
        {label:"Самарская обл",selected:false},
        {label:"Санкт-Петербург г",selected:false},
        {label:"Саратовская обл",selected:false},
        {label:"Саха /Якутия/ Респ",selected:false},
        {label:"Сахалинская обл",selected:false},
        {label:"Свердловская обл",selected:false},
        {label:"Северная Осетия - Алания Респ",selected:false},
        {label:"Смоленская обл",selected:false},
        {label:"Ставропольский край",selected:false},
        {label:"Тамбовская обл",selected:false},
        {label:"Татарстан Респ",selected:false},
        {label:"Тверская обл",selected:false},
        {label:"Томская обл",selected:false},
        {label:"Тульская обл",selected:false},
        {label:"Тыва Респ",selected:false},
        {label:"Тюменская обл",selected:false},
        {label:"Удмуртская Респ",selected:false},
        {label:"Ульяновская обл",selected:false},
        {label:"Хабаровский край",selected:false},
        {label:"Хакасия Респ",selected:false},
        {label:"Ханты-Мансийский Автономный округ - Югра АО",selected:false},
        {label:"Челябинская обл",selected:false},
        {label:"Чеченская Респ",selected:false},
        {label:"Чувашская Респ",selected:false},
        {label:"Чукотский АО",selected:false},
        {label:"Ямало-Ненецкий АО",selected:false},
        {label:"Ярославская обл",selected:false},
      ]
    }),
    mounted() {
      this.documentation = documentation;
    },
    created() {},
    methods: {
      changeSelect(val){
        console.info('-->>',val)
      }
    }
  };
</script>

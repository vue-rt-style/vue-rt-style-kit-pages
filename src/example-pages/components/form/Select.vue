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
          <div class="rt-col-4">
            <input v-model="test2"/>
            <rt-select-v2 :json="optionsList" name="test99" label="Просто выпадающий список"
                          @item-select="console" @focus="console('focus')" @blur="console('blur')"/>
          </div>
          <div class="rt-col-4">
            <rt-select-v2 :multiple="true" v-model="test2"  value="50" :json="[
                {value:'50', label:'150 минут 150 минут 150 минут 150 минут 150 минут 150 минут 150 минут'},
                {value:'150', label:'250 минут', sublabel:'80% скидка'},
                {value:'250', label:'500 минут', sublabel:'95% скидка'},
                {value:'350', label:'700 минут', sublabel:'95% скидка'},
                {value:'450', label:'900 минут', sublabel:'95% скидка'},
                {value:'500', label:'950 минут', sublabel:'95% скидка'},
                {value:'550', label:'1000 минут', sublabel:'95% скидка'},
                {value:'600', label:'1100 минут', sublabel:'95% скидка'},
                {value:'650', label:'1200 минут', sublabel:'95% скидка'},
                {value:'950', label:'2000 минут', sublabel:'95% скидка'},
                {value:'1150', label:'2100 минут', sublabel:'95% скидка'},
                {value:'1250', label:'2200 минут', sublabel:'95% скидка'},
                {value:'1450', label:'2300 минут', sublabel:'95% скидка'},
                {value:'1550', label:'2400 минут', sublabel:'95% скидка'},
                {value:'1950', label:'2500 минут', sublabel:'95% скидка'},
                {value:'2450', label:'3300 минут', sublabel:'95% скидка'},
                {value:'2550', label:'3400 минут', sublabel:'95% скидка'},
                {value:'2950', label:'3500 минут', sublabel:'95% скидка'}
                ]"
                           name="test3" label="Выпадающий список с множественным выбором"/>
          </div>
          <div class="rt-col-4">
            <input type="text" v-model="test">

            {{test}}
            <button @click="clear">click me</button>
            <rt-autocomplete ref="auto" :auto-complete="true" v-model="test"
                          :join-value="true"
                          name="test2"
                          @itemSelect="selectItem"
                             @item-select="selectItem"
                          default-value="Рос"
                          label="Выпадающий список с фильтрацией по вводу"
                          :json="optionsListFiltered"
                          @input="filterOnInput"
                          @change="console('change')"
                          @focus="console('outer focus')"
                          @blur="console('outer blur')"/>
          </div>
          <div class="rt-col-12 sp-t-2"/>

          <div class="rt-col-4">
            <rt-select-v2 name="test1" label="Выпадающий список с ошибкой" :has-error="setError" error-message="Текст с сообщением об ошибке">
              <rt-select-v2-option select-name="test1" value="50">150 минут</rt-select-v2-option>
              <rt-select-v2-option select-name="test1" value="150">500 минут</rt-select-v2-option>
              <rt-select-v2-option select-name="test1" label="1000 минут" value="250"></rt-select-v2-option>
            </rt-select-v2>
          </div>
          <div class="rt-col-4">
            <rt-select-v2 name="test98" label="Выпадающий список без возможности выбора" :disabled="true">
              <rt-select-v2-option select-name="test98" value="50">150 минут</rt-select-v2-option>
              <rt-select-v2-option select-name="test98" value="150">500 минут</rt-select-v2-option>
              <rt-select-v2-option select-name="test98" label="1000 минут" value="250"></rt-select-v2-option>
            </rt-select-v2>
          </div>
          <div class="rt-col-4">
            <rt-select-v2 name="test97" label="Всё уже выбрано за вас" :multiple="true" :disabled="true" :set-first-active="true">
              <rt-select-v2-option select-name="test97" value="50">150 минут</rt-select-v2-option>
              <rt-select-v2-option select-name="test97" value="150">500 минут</rt-select-v2-option>
              <rt-select-v2-option select-name="test97" label="1000 минут" value="250"></rt-select-v2-option>
            </rt-select-v2>
          </div>
        </div>
<!--        <div class="app-row row">-->
<!--          <div class="rt-col-3 rt-col-md-3">-->
<!--            <span class="rt-font-label flex-fill rt-space-bottom05">simple with content text</span>-->
<!--            <rt-select-v2 name="simple1" label="Оборудование" :has-content-text="true">-->
<!--              <template slot="content">-->
<!--                <p class="rt-font-control color-main05 rt-space-top0-half">Пакет входящих минут <br> с любых телефонов России</p>-->
<!--              </template>-->
<!--              <rt-select-v2-option select-name="simple1" :selected="true" value="150">150 минут</rt-select-v2-option>-->
<!--              <rt-select-v2-option select-name="simple1" value="150">500 минут</rt-select-v2-option>-->
<!--              <rt-select-v2-option select-name="simple1" value="150">1000 минут</rt-select-v2-option>-->
<!--            </rt-select-v2>-->
<!--          </div>-->
<!--          <div class="rt-col-9 rt-col-md-3">-->
<!--            <span class="rt-font-label flex-fill rt-space-bottom05">simple select</span>-->
<!--            <rt-select-v2 name="simple2" label="Оборудование" value="0">-->
<!--              <rt-select-v2-option select-name="simple2" v-for="(option, index) in optionsList"-->
<!--                                :key="'index' + Math.random().toString(5).slice(4)"-->
<!--                                :value="String(index)">-->
<!--                {{ option.label }}-->
<!--              </rt-select-v2-option>-->
<!--            </rt-select-v2>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="app-row row">-->
<!--          <div class="rt-col-6 rt-col-md-2 rt-md-space-top d-flex flex-column">-->
<!--            <span class="rt-font-label flex-fill rt-space-bottom05">select with error</span>-->
<!--            <rt-select-v2 name="simple3" :error-message="'ошибка: не выбран город'"-->
<!--                       :has-error="true"-->
<!--                       label="Оборудование"-->
<!--                       value="0"-->
<!--                       text="Новгородская обл">-->
<!--              <rt-select-v2-option v-for="(option, index) in optionsList"-->
<!--                                   select-name="simple3"-->
<!--                                :key="'index' + Math.random().toString(5).slice(4)"-->
<!--                                :value="String(index)">-->
<!--                {{ option.label }}-->
<!--              </rt-select-v2-option>-->
<!--            </rt-select-v2>-->
<!--          </div>-->
<!--          <div class="rt-col-6 rt-col-md-1 rt-md-space-top d-flex flex-column">-->
<!--            <span class="rt-font-label flex-fill rt-space-bottom05">disabled select</span>-->
<!--            <rt-select-v2 :disabled="true"-->
<!--                          name="simple4"-->
<!--                       label="Оборудование"-->
<!--                       value="0"-->
<!--                       text="Новгородская обл">-->
<!--              <rt-select-v2-option v-for="(option, index) in optionsList"-->
<!--                                   select-name="simple4"-->
<!--                                :key="'index' + Math.random().toString(5).slice(4)"-->
<!--                                :value="String(index)">-->
<!--                {{ option.label }}-->
<!--              </rt-select-v2-option>-->
<!--            </rt-select-v2>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="app-row row">-->
<!--          <div class="col rt-col-md-3">-->
<!--            <span class="rt-font-label flex-fill rt-space-bottom05">simple select</span>-->
<!--            <rt-select label="Оборудование" value="0">-->
<!--              <rt-select-option v-for="(option, index) in optionsList"-->
<!--                                :key="'index' + Math.random().toString(5).slice(4)"-->
<!--                                :value="String(index)">-->
<!--                {{ option.label }}-->
<!--              </rt-select-option>-->
<!--            </rt-select>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="app-row row">-->
<!--          <div class="rt-col-6 rt-col-md-2 rt-md-space-top d-flex flex-column">-->
<!--            <span class="rt-font-label flex-fill rt-space-bottom05">select with error</span>-->
<!--            <rt-select :error-message="'ошибка: не выбран город'"-->
<!--                       :has-error="true"-->
<!--                       label="Оборудование"-->
<!--                       value="0"-->
<!--                       text="Новгородская обл">-->
<!--              <rt-select-option v-for="(option, index) in optionsList"-->
<!--                                :key="'index' + Math.random().toString(5).slice(4)"-->
<!--                                :value="String(index)">-->
<!--                {{ option.label }}-->
<!--              </rt-select-option>-->
<!--            </rt-select>-->
<!--          </div>-->
<!--          <div class="rt-col-6 rt-col-md-1 rt-md-space-top d-flex flex-column">-->
<!--            <span class="rt-font-label flex-fill rt-space-bottom05">disabled select</span>-->
<!--            <rt-select :disabled="true"-->
<!--                       label="Оборудование"-->
<!--                       value="0"-->
<!--                       text="Новгородская обл">-->
<!--              <rt-select-option v-for="(option, index) in optionsList"-->
<!--                                :key="'index' + Math.random().toString(5).slice(4)"-->
<!--                                :value="String(index)">-->
<!--                {{ option.label }}-->
<!--              </rt-select-option>-->
<!--            </rt-select>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="app-row row color-block&#45;&#45;light-grey rt-space-top rt-space-bottom">-->
<!--          <div class="rt-col-6 rt-col-md-2 d-flex flex-column">-->
<!--          b2b-->
<!--            <rt-select :is-b2b-select="true" label="Выберите регион">-->
<!--              <rt-select-option v-for="(option, index) in optionsList"-->
<!--                                :key="'index' + Math.random().toString(5).slice(4)"-->
<!--                                :value="String(index)">-->
<!--                {{ option.label }}-->
<!--              </rt-select-option>-->
<!--            </rt-select>-->
<!--          </div>-->
<!--          <div class="rt-col-6 rt-col-md-2 d-flex flex-column">-->
<!--          b2b-->
<!--            <rt-select :is-b2b-select="true"-->
<!--                       label="Выберите регион"-->
<!--                       :disabled="true">-->
<!--              <rt-select-option v-for="(option, index) in optionsList"-->
<!--                                :key="'index' + Math.random().toString(5).slice(4)"-->
<!--                                :value="String(index)">-->
<!--                {{ option.label }}-->
<!--              </rt-select-option>-->
<!--            </rt-select>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="app-row row color-block&#45;&#45;light-grey rt-space-top rt-space-bottom">-->
<!--          <div class="rt-col-6 rt-col-md-2 d-flex flex-column">-->
<!--          b2b-->
<!--            <rt-select :is-b2b-select="true"-->
<!--                       label="Выберите регион"-->
<!--                       :has-error="true">-->
<!--              <rt-select-option v-for="(option, index) in optionsList"-->
<!--                                :key="'index' + Math.random().toString(5).slice(4)"-->
<!--                                :value="String(index)">-->
<!--                {{ option.label }}-->
<!--              </rt-select-option>-->
<!--            </rt-select>-->
<!--          </div>-->
<!--          <div class="rt-col-6 rt-col-md-2 d-flex flex-column">-->
<!--          b2b-->
<!--            <rt-select :is-b2b-select="true"-->
<!--                       label="Выберите регион"-->
<!--                       :outlined="true"-->
<!--                       :auto-complete="true">-->
<!--              <rt-select-option v-for="(option, index) in optionsList"-->
<!--                                :key="'index' + Math.random().toString(5).slice(4)"-->
<!--                                :value="String(index)">-->
<!--                {{ option.label }}-->
<!--              </rt-select-option>-->
<!--            </rt-select>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="app-row row color-block&#45;&#45;light-grey rt-space-top rt-space-bottom">-->
<!--          <div class="rt-col-6 rt-col-md-2 d-flex flex-column">-->
<!--          b2b-->
<!--            <rt-select :is-b2b-select="true"-->
<!--                       label="Выберите регион"-->
<!--                       :outlined="true"-->
<!--                       :disabled="true">-->
<!--              <rt-select-option v-for="(option, index) in optionsList"-->
<!--                                :key="'index' + Math.random().toString(5).slice(4)"-->
<!--                                :value="String(index)">-->
<!--                {{ option.label }}-->
<!--              </rt-select-option>-->
<!--            </rt-select>-->
<!--          </div>-->
<!--          <div class="rt-col-6 rt-col-md-2 d-flex flex-column">-->
<!--          b2b-->
<!--            <rt-select :is-b2b-select="true"-->
<!--                       label="Выберите регион"-->
<!--                       :outlined="true"-->
<!--                       :has-error="true">-->
<!--              <rt-select-option v-for="(option, index) in optionsList"-->
<!--                                :key="'index' + Math.random().toString(5).slice(4)"-->
<!--                                :value="String(index)">-->
<!--                {{ option.label }}-->
<!--              </rt-select-option>-->
<!--            </rt-select>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="app-row row rt-space-top rt-space-bottom">-->
<!--          <div class="rt-col-6 rt-col-md-2 d-flex flex-column">-->
<!--            <rt-select label="multiSelect" :multi="true" field-id="235">-->
<!--              <rt-select-option v-for="i in 5" :key="i" :value="String(i)">-->
<!--                Вариант {{ i }} fghsdfgsdfsdfgsdfg-->
<!--              </rt-select-option>-->
<!--            </rt-select>-->
<!--          </div>-->
<!--        </div>-->
        <div class="app-row row rt-space-top">
          <documentation-builder :json="documentation" type="components"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import documentation from "@vue-rt-style-kit-atoms-local/components/Select/docs/index.json";
  import componentsList from "../../componentsList";
  // const componentsList = {};

  export default {
    name: "AppSelect",
    components: componentsList,
    data: () => ({
      test2: '3',
      test:'3',
      documentation: {},
      inputModelValue: "test",
      optionsList: [
        {label:"Адыгея Респ",value:1},
        {label:"Алтай Респ",value:2},
        {label:"Алтайский край",value:3},
        {label:"Амурская обл",value:4},
        {label:"Архангельская обл",value:5},
        {label:"Астраханская обл",value:6},
        {label:"Башкортостан Респ",value:7},
        {label:"Белгородская обл",value:8},
        {label:"Брянская обл",value:9},
        {label:"Бурятия Респ",value:10},
        {label:"Владимирская обл",value:11},
        {label:"Волгоградская обл",value:12},
        {label:"Вологодская обл",value:13},
        {label:"Воронежская обл",value:14},
        {label:"Дагестан Респ",value:15},
        {label:"Еврейская Аобл",value:16},
        {label:"Забайкальский край",value:17},
        {label:"Ивановская обл",value:18},
        {label:"Ингушетия Респ",value:19},
        {label:"Иркутская обл",value:20},
        {label:"Кабардино-Балкарская Респ",value:21},
        {label:"Калининградская обл",value:22},
        {label:"Калмыкия Респ",value:23},
        {label:"Калужская обл",value:24},
        {label:"Камчатский край",value:25},
        {label:"Карачаево-Черкесская Респ",value:26},
        {label:"Карелия Респ",value:27},
        {label:"Кемеровская обл",value:28},
        {label:"Кировская обл",value:29},
        {label:"Коми Респ",value:30},
        {label:"Костромская обл",value:31},
        {label:"Краснодарский край",value:32},
        {label:"Красноярский край",value:33},
        {label:"Курганская обл",value:34},
        {label:"Курская обл",value:35},
        {label:"Ленинградская обл",value:36},
        {label:"Липецкая обл",value:37},
        {label:"Магаданская обл",value:38},
        {label:"Марий Эл Респ",value:39},
        {label:"Мордовия Респ",value:40},
        {label:"Москва г",value:41},
        {label:"Московская обл",value:42},
        {label:"Мурманская обл",value:43},
        {label:"Ненецкий АО",value:44},
        {label:"Нижегородская обл",value:45},
        {label:"Новгородская обл",value:46},
        {label:"Новосибирская обл",value:47},
        {label:"Омская обл",value:48},
        {label:"Оренбургская обл",value:49},
        {label:"Орловская обл",value:50},
        {label:"Пензенская обл",value:51},
        {label:"Пермский край",value:52},
        {label:"Приморский край",value:53},
        {label:"Псковская обл",value:54},
        {label:"Ростовская обл",value:55},
        {label:"Рязанская обл",value:56},
        {label:"Самарская обл",value:57},
        {label:"Санкт-Петербург г",value:58},
        {label:"Саратовская обл",value:59},
        {label:"Саха /Якутия/ Респ",value:60},
        {label:"Сахалинская обл",value:61},
        {label:"Свердловская обл",value:62},
        {label:"Северная Осетия - Алания Респ",value:63},
        {label:"Смоленская обл",value:64},
        {label:"Ставропольский край",value:65},
        {label:"Тамбовская обл",value:66},
        {label:"Татарстан Респ",value:67},
        {label:"Тверская обл",value:68},
        {label:"Томская обл",value:69},
        {label:"Тульская обл",value:70},
        {label:"Тыва Респ",value:71},
        {label:"Тюменская обл",value:72},
        {label:"Удмуртская Респ",value:73},
        {label:"Ульяновская обл",value:74},
        {label:"Хабаровский край",value:75},
        {label:"Хакасия Респ",value:76},
        {label:"Ханты-Мансийский Автономный округ - Югра АО",value:77},
        {label:"Челябинская обл",value:78},
        {label:"Чеченская Респ",value:79},
        {label:"Чувашская Респ",value:80},
        {label:"Чукотский АО",value:81},
        {label:"Ямало-Ненецкий АО",value:82},
        {label:"Ярославская обл",value:83}
      ],
      optionsListFiltered: [],
      setError: false
    }),
    mounted() {
      this.documentation = documentation;
      setTimeout(() => {
        this.setError = true
      }, 2000)
    },
    created() {},
    methods: {
      changeSelect(val){
        console.info('-->>',val)
      },
      filterOnInput(inputVal) {
        console.info('inputVal',inputVal);
        inputVal = Array.isArray(inputVal) ? inputVal[0] : inputVal
        if(inputVal && inputVal.length > 0) {
          this.optionsListFiltered = this.optionsList.filter((item) => {
            return true
          });

        }else{
          this.optionsListFiltered = this.optionsList;
        }
        // console.info('this.optionsListFiltered',this.optionsListFiltered);

      },
      selectItem(e){
        console.info(e)
      },
      console(e) {
        console.log(e)
      },
      clear(){
        console.info('!!')
        this.$refs.auto.clearValue()
      }
    }
  };
</script>

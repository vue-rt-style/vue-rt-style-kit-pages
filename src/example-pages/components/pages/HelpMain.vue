<template>
  <div class="events-admin events-admin__events-list">
    <admin-header :active-index="0">активные <br/>мероприятия</admin-header>
    <div class="rt-container">
      <div class="rt-col sp-t-green sp-b-purple">
        <div class="row">
          <div class="d-none td-d-flex rt-col-md-3 flex-end-center td-sp-b-2 md-sp-b-1">
            <rt-button color="orange" class="rt-button-md--is-block"
                       v-popup-trigger="{name:'createEvent' + _uid}">Создать мероприятие</rt-button>
          </div>
          <div class="rt-col-3 rt-col-td-2 rt-col-md-3">
            <event-select/>
          </div>
          <div class="rt-col-2 rt-col-td-2 rt-col-md-3">
            <a-c-date-picker/>
          </div>
          <div class="rt-col-3 rt-col-td-2 rt-col-md-3">
            <location-select/>
          </div>
          <div class="rt-col-1 td-d-none"></div>
          <div class="rt-col-3 td-d-none flex-end-center">
            <rt-button color="orange" v-popup-trigger="{name:'createEvent' + _uid}">Создать мероприятие</rt-button>
          </div>
        </div>
      </div>
    </div>
    <div class="rt-container">
      <div class="rt-col events-list-wrapper">
        <div class="events-list-wrapper__inner sp-r-1-3 td-sp-r-none sp-b-1">
          <event-list-item title="Клуб бизнес-экспертов" date="13.11.2021" location="Санкт-Петербург" event-link="test-access"/>
          <event-list-item title="Клуб бизнес-экспертов" date="13.11.2021" location="Санкт-Петербург" event-link="test-access"/>
          <event-list-item title="Клуб бизнес-экспертов" date="13.11.2021" location="Санкт-Петербург" event-link="test-access"/>
          <event-list-item title="Клуб бизнес-экспертов" date="13.11.2021" location="Санкт-Петербург" event-link="test-access"/>
          <event-list-item title="Клуб бизнес-экспертов" date="13.11.2021" location="Санкт-Петербург" event-link="test-access"/>
          <event-list-item title="Клуб бизнес-экспертов" date="13.11.2021" location="Санкт-Петербург" event-link="test-access"/>
          <event-list-item title="Клуб бизнес-экспертов" date="13.11.2021" location="Санкт-Петербург" event-link="test-access"/>
          <event-list-item title="Клуб бизнес-экспертов" date="13.11.2021" location="Санкт-Петербург" event-link="test-access"/>
          <event-list-item title="Клуб бизнес-экспертов" date="13.11.2021" location="Санкт-Петербург" event-link="test-access"/>
          <event-list-item title="Клуб бизнес-экспертов" date="13.11.2021" location="Санкт-Петербург" event-link="test-access"/>
          <event-list-item title="Клуб бизнес-экспертов" date="13.11.2021" location="Санкт-Петербург" event-link="test-access"/>
          <event-list-item title="Клуб бизнес-экспертов" date="13.11.2021" location="Санкт-Петербург" event-link="test-access"/>
          <event-list-item title="Клуб бизнес-экспертов" date="13.11.2021" location="Санкт-Петербург" event-link="test-access"/>
          <event-list-item title="Клуб бизнес-экспертов" date="13.11.2021" location="Санкт-Петербург" event-link="test-access"/>
          <event-list-item title="Клуб бизнес-экспертов" date="13.11.2021" location="Санкт-Петербург" event-link="test-access"/>
        </div>
      </div>
    </div>
    <rt-popup :name="'createEvent' + _uid" :size="3" class="create-event">
      <div class="font-h4 sp-b-0-2">Создание <br/>мероприятия</div>
      <div class="sp-t-0-3">
        <rt-select-v2 label="Тип мероприятия"></rt-select-v2>
      </div>
      <div class="sp-t-0-3">
        <rt-input :version="2" placeholder="Дата">
          <template slot="icon">
            <rt-system-icons name="calendar"></rt-system-icons>
          </template>
        </rt-input>
      </div>
      <div class="sp-t-0-3">
        <rt-select-v2 label="Город"></rt-select-v2>
      </div>
      <div class="sp-t-2">
        <rt-button color="orange" :small="true" :is-block="true">Создать</rt-button>
      </div>
    </rt-popup>
  </div>
</template>
<script>
  import componentsList from "../../componentsList";
  import adminHeader from "./adminHeader.vue";
  import eventListItem from "./eventListItem.vue";
  import locationSelect from "./locationSelect.vue";
  import eventSelect from './eventSelect.vue'
  import ACDatePicker from "./datePicker/ACDatePicker.vue";
  export default {
    name: "AppHelpMain",
    components: {
      componentsList,
      adminHeader,
      eventListItem,
      locationSelect,
      eventSelect,
      ACDatePicker
    }
  };
</script>

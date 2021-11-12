<template>
  <div class="events-admin events-admin__events-archive">
    <admin-header :active-index="1">архив <br/>мероприятия</admin-header>
    <div class="rt-container">
      <div class="rt-col sp-t-green sp-b-purple">
        <div class="row">
          <div class="rt-col-3 rt-col-td-2 rt-col-md-3">
            <event-select/>
          </div>
          <div class="rt-col-2 rt-col-td-2 rt-col-md-3">
            <a-c-date-picker/>
          </div>
          <div class="rt-col-3 rt-col-td-2 rt-col-md-3">
            <location-select/>
          </div>
          <div class="rt-col-4 td-d-none"></div>
        </div>
      </div>
      <div class="rt-col events-list-wrapper">
        <div class="events-list-wrapper__inner sp-r-1-3 td-sp-r-none sp-b-1">
          <event-list-item title="Клуб бизнес-экспертов" date="13.11.2021" location="Санкт-Петербург"
                           event-link="vue-rt-style-kit-pages/test-access" :is-upcoming="false"/>
          <event-list-item title="Клуб бизнес-экспертов" date="13.11.2021" location="Санкт-Петербург"
                           event-link="vue-rt-style-kit-pages/test-access" :is-upcoming="false"/>
          <event-list-item title="Клуб бизнес-экспертов" date="13.11.2021" location="Санкт-Петербург"
                           event-link="vue-rt-style-kit-pages/test-access" :is-upcoming="false"/>
          <event-list-item title="Клуб бизнес-экспертов" date="13.11.2021" location="Санкт-Петербург"
                           event-link="vue-rt-style-kit-pages/test-access" :is-upcoming="false"/>
          <event-list-item title="Клуб бизнес-экспертов" date="13.11.2021" location="Санкт-Петербург"
                           event-link="vue-rt-style-kit-pages/test-access" :is-upcoming="false"/>
          <event-list-item title="Клуб бизнес-экспертов" date="13.11.2021" location="Санкт-Петербург"
                           event-link="vue-rt-style-kit-pages/test-access" :is-upcoming="false"/>
          <event-list-item title="Клуб бизнес-экспертов" date="13.11.2021" location="Санкт-Петербург"
                           event-link="vue-rt-style-kit-pages/test-access" :is-upcoming="false"/>
          <event-list-item title="Клуб бизнес-экспертов" date="13.11.2021" location="Санкт-Петербург"
                           event-link="vue-rt-style-kit-pages/test-access" :is-upcoming="false"/>
          <event-list-item title="Клуб бизнес-экспертов" date="13.11.2021" location="Санкт-Петербург"
                           event-link="vue-rt-style-kit-pages/test-access" :is-upcoming="false"/>
          <event-list-item title="Клуб бизнес-экспертов" date="13.11.2021" location="Санкт-Петербург"
                           event-link="vue-rt-style-kit-pages/test-access" :is-upcoming="false"/>
          <event-list-item title="Клуб бизнес-экспертов" date="13.11.2021" location="Санкт-Петербург"
                           event-link="vue-rt-style-kit-pages/test-access" :is-upcoming="false"/>
          <event-list-item title="Клуб бизнес-экспертов" date="13.11.2021" location="Санкт-Петербург"
                           event-link="vue-rt-style-kit-pages/test-access" :is-upcoming="false"/>
          <event-list-item title="Клуб бизнес-экспертов" date="13.11.2021" location="Санкт-Петербург"
                           event-link="vue-rt-style-kit-pages/test-access" :is-upcoming="false"/>
          <event-list-item title="Клуб бизнес-экспертов" date="13.11.2021" location="Санкт-Петербург"
                           event-link="vue-rt-style-kit-pages/test-access" :is-upcoming="false"/>
          <event-list-item title="Клуб бизнес-экспертов" date="13.11.2021" location="Санкт-Петербург"
                           event-link="vue-rt-style-kit-pages/test-access" :is-upcoming="false"/>
        </div>
      </div>
    </div>
    <rt-popup name="deleteEvent" :size="3" class="delete-event">
      <div class="font-h4 sp-b-0-3">Удаление <br/>мероприятия</div>
      <p class="font-t-s">Вы уверены, что хотите удалить мероприятие безвозвратно?</p>
      <div class="sp-t-1">
        <rt-button color="orange" :small="true" :is-block="true">Удалить</rt-button>
      </div>
    </rt-popup>
  </div>
</template>

<script>
  import adminHeader from "./adminHeader.vue";
  import eventListItem from "./eventListItem.vue";
  import locationSelect from "./locationSelect.vue";
  import eventSelect from './eventSelect.vue'
  import ACDatePicker from "./datePicker/ACDatePicker.vue";

  export default {
    name: "AppBenefitBlock",
    components: {
      adminHeader,
      eventListItem,
      locationSelect,
      eventSelect,
      ACDatePicker
    },
    data: () => ({}),
    mounted() {
      // document.addEventListener('click', (e) => {
      //   console.log(e.target)
      // })
    }
  };
</script>
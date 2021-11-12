<template>
  <div class="events-admin events-admin__event-item">
    <admin-header>Клуб бизнес-<br/>экспертов</admin-header>
    <div class="rt-container">
      <div class="rt-col sp-t-green sp-b-purple">
        <div class="d-space-between flex-center-center td-d-block">
          <div class="event-item__counters flex-center-center td-d-none">
            <div class="event-item__counters__item">
              <div class="digit font-h3 color-orange color-block--white09 rt-font-center">0</div>
              <p class="title font-t-xs rt-font-center sp-t-0-1">Всего заявок</p>
            </div>
            <div class="event-item__counters__item">
              <div class="digit font-h3 color-orange color-block--white09 rt-font-center">0</div>
              <p class="title font-t-xs rt-font-center sp-t-0-1">На мероприятии</p>
            </div>
          </div>
          <action-buttons/>
        </div>
      </div>
    </div>
    <div class="rt-container td-sp-r-none">
      <div class="rt-col">
        <div class="td-ovs">
          <div class="events-admin__event-item__table">
            <div class="events-admin__event-item__table-head">
              <div class="events-admin__event-item__table-row flex-center-center">
                <div class="events-admin__event-item__table-cell">Фамилия</div>
                <div class="events-admin__event-item__table-cell">Имя</div>
                <div class="events-admin__event-item__table-cell">Компания</div>
                <div class="events-admin__event-item__table-cell">Телефон</div>
                <div class="events-admin__event-item__table-cell">ИНН</div>
                <div class="events-admin__event-item__table-cell">Новый участник</div>
                <div class="events-admin__event-item__table-cell d-flex d-space-between rt-sys-icon-hover--black" @click="filterStatus" ref="status">
                  <span>Статус</span>
                  <div class="filter-icon d-flex">
                    <rt-system-icons name="chevron down" color="main-color05-no-opacity"></rt-system-icons>
                  </div>
                  <div class="status-check sp-v-0-3 sp-h-0-3">
                    <rt-checkbox name="present" :checked="true" :is-orange="true" @update:checked="showPresent">На мероприятии</rt-checkbox>
                    <rt-checkbox name="absent" :checked="true" :is-orange="true" @update:checked="showAbsent">Отсутствует</rt-checkbox>
                  </div>
                </div>
              </div>
            </div>
            <participant-list :list="[{surname:'Петров', name:'Александр', company:'ИП Петров АВ', phone:'+7 989 344-32-32',
              tin:'123456789012', isNew:'false', status:'true'},
              {surname:'Петров', name:'Александр', company:'ИП Петров АВ', phone:'+7 989 344-32-32',
              tin:'123456789012', isNew:'true', status:'true'},
              {surname:'Петров', name:'Александр', company:'ИП Петров АВ', phone:'+7 989 344-32-32',
              tin:'123456789012', isNew:'true', status:'false'},
              {surname:'Петров', name:'Александр', company:'ИП Петров АВ', phone:'+7 989 344-32-32',
              tin:'123456789012', isNew:'true', status:'true'},
              {surname:'Петров', name:'Александр', company:'ИП Петров АВ', phone:'+7 989 344-32-32',
              tin:'123456789012', isNew:'false', status:'false'},
              {surname:'Петров', name:'Александр', company:'ИП Петров АВ', phone:'+7 989 344-32-32',
              tin:'123456789012', isNew:'true', status:'true'},
              {surname:'Петров', name:'Александр', company:'ИП Петров АВ', phone:'+7 989 344-32-32',
              tin:'123456789012', isNew:'false', status:'true'},
              {surname:'Петров', name:'Александр', company:'ИП Петров АВ', phone:'+7 989 344-32-32',
              tin:'123456789012', isNew:'true', status:'true'},
              {surname:'Петров', name:'Александр', company:'ИП Петров АВ', phone:'+7 989 344-32-32',
              tin:'123456789012', isNew:'false', status:'false'},
              {surname:'Петров', name:'Александр', company:'ИП Петров АВ', phone:'+7 989 344-32-32',
              tin:'123456789012', isNew:'true', status:'true'},
              {surname:'Петров', name:'Александр', company:'ИП Петров АВ', phone:'+7 989 344-32-32',
              tin:'123456789012', isNew:'false', status:'true'},
              {surname:'Петров', name:'Александр', company:'ИП Петров АВ', phone:'+7 989 344-32-32',
              tin:'123456789012', isNew:'true', status:'true'},
              {surname:'Петров', name:'Александр', company:'ИП Петров АВ', phone:'+7 989 344-32-32',
              tin:'123456789012', isNew:'true', status:'true'},
              {surname:'Петров', name:'Александр', company:'ИП Петров АВ', phone:'+7 989 344-32-32',
              tin:'123456789012', isNew:'false', status:'false'},
              {surname:'Петров', name:'Александр', company:'ИП Петров АВ', phone:'+7 989 344-32-32',
              tin:'123456789012', isNew:'true', status:'true'},
              {surname:'Петров', name:'Александр', company:'ИП Петров АВ', phone:'+7 989 344-32-32',
              tin:'123456789012', isNew:'false', status:'true'},
              {surname:'Петров', name:'Александр', company:'ИП Петров АВ', phone:'+7 989 344-32-32',
              tin:'123456789012', isNew:'true', status:'true'}]" :show-present="present" :show-absent="absent"
            />
          </div>
        </div>
      </div>
    </div>
    <rt-popup name="editEvent" :size="3" class="edit-event">
      <div class="font-h4 sp-b-0-2">Настройка мероприятия</div>
      <div class="sp-t-0-3">
        <event-select event="Клуб бизнес-экспертов"/>
      </div>
      <div class="sp-t-0-3">
        <a-c-date-picker value="12.11.2020"/>
      </div>
      <div class="sp-t-0-3">
        <location-select location="Москва"/>
      </div>
      <div class="sp-t-2">
        <rt-button color="orange" :small="true" :is-block="true">Сохранить</rt-button>
      </div>
    </rt-popup>
  </div>
</template>

<script>
  const componentsList = {};
  import adminHeader from "./adminHeader.vue";
  import actionButtons from "./actionButtons.vue";
  import locationSelect from "./locationSelect.vue";
  import eventSelect from './eventSelect.vue'
  import ACDatePicker from "./datePicker/ACDatePicker.vue";
  import ParticipantList from "./participantList.vue";

  export default {
    name: "AppTestAccess",
    components: {
      componentsList,
      adminHeader,
      actionButtons,
      locationSelect,
      eventSelect,
      ACDatePicker,
      ParticipantList,
    },
    data() {
      return {
        present: true,
        absent: true
      }
    },
    mounted() {},
    created() {},
    methods: {
      filterStatus() {
        this.$refs.status.querySelector('.status-check').classList.toggle('status-check--active')
        this.$refs.status.querySelector('.filter-icon').classList.toggle('filter-icon--active')
      },
      showPresent($event) {
        this.present = $event
      },
      showAbsent($event) {
        this.absent = $event
      }
    }
  };
</script>

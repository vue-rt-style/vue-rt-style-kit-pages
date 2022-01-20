<template>
  <div class="single-date-picker__calendar-month-header">
    <div class="single-date-picker__arrow left" @click="toggleMonth(-1)">
      <rt-system-icons name="chevron left"></rt-system-icons>
    </div>
    <div class="single-date-picker__year">
      {{ fullMonth }} <span class="color-main05">{{ year }}</span>
    </div>
    <div class="single-date-picker__arrow right" @click="toggleMonth(1)">
      <rt-system-icons name="chevron right"></rt-system-icons>
    </div>
  </div>
</template>

<script>
const MONTHS = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'];
export default {
  name: "CalendarMonthHeader",
  props: {
    year: {
      type: Number,
      default: () => 1970
    },
    month: {
      type: Number,
      default: () => 0
    }
  },
  computed: {
    fullMonth() {
      return MONTHS[this.month];
    }
  },
  methods: {
    toggleMonth(direction) {
      this.$emit('toggleMonth', direction)
    }
  }
};
</script>

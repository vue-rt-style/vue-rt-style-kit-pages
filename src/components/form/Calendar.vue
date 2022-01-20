<template>
	<div>
		<div class="rt-container">
			<div class="app-content rt-col-12 rt-col-md-3">
				<div class="app-title">
					<h1 class="rt-font-hero">
						Calendar
					</h1>
				</div>
				<div class="app-body">
					<rt-row class="app-row">
            <rt-col :size="4">
              <rt-input
                value="Click next fields > > >"
                placeholder="Sample test input"
                disabled
              ></rt-input>
            </rt-col>
            <rt-col :size="4">
              <rt-calendar
                label="Удобные дата и время для звонка"
                v-model="customTimePickerModel"
                :calendar-props="customTimePickerProps"
              ></rt-calendar>
            </rt-col>
            <rt-col :size="4">
              <rt-calendar
              ></rt-calendar>
            </rt-col>
					</rt-row>
          <rt-row class="app-row">
            <rt-col :size="12">
              <h3>Combine view</h3>
            </rt-col>
            <rt-col :size="4" :tablet-size="6">
              <div class="_form__input">
                <rt-input
                  placeholder="Как Вас зовут?"
                ></rt-input>
              </div>
            </rt-col>
            <rt-col :size="4" :tablet-size="6">
              <div class="_form__input">
                <rt-calendar
                  label="Удобные дата и время"
                  v-model="customTimePickerModel"
                  :calendar-props="customTimePickerProps"
                ></rt-calendar>
              </div>
            </rt-col>
            <rt-col :size="4" :tablet-size="6">
              <div class="_form__input">
                <rt-textarea placeholder="Комментарий" :auto-resize="false"></rt-textarea>
              </div>
            </rt-col>
					</rt-row>
				</div>
			</div>
		</div>
		<div class="rt-container">
			<div class="app-row row rt-space-top">
				<documentation-builder :json="documentation" type="components"/>
			</div>
		</div>

	</div>

</template>

<script>
  import documentation from "@vue-rt-style-kit-atoms-local/components/Calendar/docs/index.json";
  import componentsList from "../../componentsList";
  //  const componentsList = {};
  export default {
    name: "AppCalendar",
    components: componentsList,
    data: () => ({
      documentation: {},
      customTimePickerValue: '2020-08-25T12:00:00'
    }),
    computed: {
      customTimePickerModel: {
        get () {
          return this.customTimePickerValue
        },
        set (date) {
          let timeZoneOffset = date.getTimezoneOffset() * 60000
          this.customTimePickerValue = new Date(date - timeZoneOffset).toISOString().slice(0, -5)
        }
      },
      customTimePickerFormat () {
        if (!this.customTimePickerValue) {
          return 'DD-MM-YYYY [с] HH:mm'
        }
        let currentTime = this.customTimePickerValue.toString().split('T')[1].split(':')[0]
        return `DD-MM-YYYY [с] ${currentTime}:00 [до ${Number(currentTime)+1}:00]`
      },
      customTimePickerProps () {
        return {
          format: this.customTimePickerFormat,
          'time-picker-options': this.customTimePickerOptions,
          'show-second': false
        }
      }
    },
    mounted() {
      this.documentation = documentation;
    },
    methods: {
      customTimePickerOptions () {
        return [
          { label: 'с 9:00 до 12:00', value: { hours: 9, minutes: 0 } },
          { label: 'с 12:00 до 13:00', value: { hours: 12, minutes: 0 } },
          { label: 'с 13:00 до 18:00', value: { hours: 13, minutes: 0 } }
        ]
      }
    }
  };
</script>

<style lang="stylus">
  ._form__input
    margin-bottom 8px
    padding 15px 0 19px
    position relative
</style>

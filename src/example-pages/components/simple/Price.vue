<template>
  <div>
    <div class="rt-container">
      <div class="app-content rt-col-12 rt-col-md-3">
        <div class="app-title row"><h1 class="col rt-font-hero">Price</h1></div>
        <div class="app-body">
          <div>
            <pre-code text='<rt-price :v2="true" :is-small="true" option-label="От"  :is-option="true" :value="750.2" currency="руб." :only-price="true"></rt-price>'></pre-code>
          </div>
          <div>
            <pre-code text='<rt-price :v2="true" :is-option="true" option-label="до" :value="750.2" time-interval="год" currency="$"></rt-price>'></pre-code>
          </div>
          <div>
            <pre-code text='<rt-price :v2="true" :is-option="true" option-label="в рассрочку до" :value="750.2" currency="$"></rt-price>'></pre-code>
          </div>
          <div>
            <pre-code text='<rt-price :v2="true" :value="7150.2" :old-value="62166.2234" :show-float="true"></rt-price>'></pre-code>
          </div>
          <div>
            <pre-code text='<rt-price :v2="true" :value="7150.2"></rt-price>'></pre-code>
          </div>
          <div>
            <pre-code text='<rt-price :v2="true" :value="71150.2" :old-value="666.2234"></rt-price>'></pre-code>
          </div>
          <div>
            <pre-code text='<rt-price :v2="true" :value="713150.2" :old-value="6661242" currency="$"></rt-price>'></pre-code>
          </div>
          <div>
            <pre-code text='<rt-price :v2="true" :show-float="true" :value="0.2" :old-value="666.2234" currency="$"></rt-price>'></pre-code>
          </div>
          <div>
            <pre-code text='<rt-price :v2="true" :show-float="true" :value="0.0332" :old-value="666.2234" currency="$"></rt-price>'></pre-code>
          </div>
          <div>
            <pre-code text='<rt-price :v2="true" :show-float="true" :value="0.2323232" :old-value="666.2234" currency="$"></rt-price>'></pre-code>
          </div>
          <div>
            <pre-code text='<rt-price :v2="true" :show-float="true" :value="122.2323232" :old-value="666.2234" currency="$"></rt-price>'></pre-code>
          </div>
          <div>
            <pre-code text='<rt-price :v2="true" :show-float="true" :value="122332.2323232" :old-value="666.2234" currency="$"></rt-price>'></pre-code>
          </div>
          <div>
            <pre-code text='<rt-price :v2="true" :show-float="true" :value="122332323.2323232" :old-value="666.2234" currency="$"></rt-price>'></pre-code>
          </div>
          <div>
            <pre-code text='<rt-price :v2="true" :value="1231223169" :old-value="666" :only-price="true" currency="€"></rt-price>'></pre-code>
          </div>
        </div>
      </div>
    </div>
    <div class="color-block--dark-blue rt-space-vertical2">
      <div class="rt-container">
        <rt-row>
          <rt-col>
            <div>
              <pre-code text='<rt-price :v2="true" :bright="true" :is-option="true" :value="750.2" currency="$"></rt-price>'></pre-code>
            </div>
            <div>
              <pre-code text='<rt-price :v2="true" :bright="true" :value="7150.2" :old-value="62166.2234"></rt-price>'></pre-code>
            </div>
            <div>
              <pre-code text='<rt-price :v2="true" :bright="true" :value="71150.2" :old-value="666.2234"></rt-price>'></pre-code>
            </div>
            <div>
              <pre-code text='<rt-price :v2="true" :bright="true" :value="713150.2" :old-value="6661242" currency="$"></rt-price>'></pre-code>
            </div>
            <div>
              <pre-code text='<rt-price :v2="true" :bright="true" :show-float="true" :value="0.2" :old-value="666.2234" currency="$"></rt-price>'></pre-code>
            </div>
            <div>
              <pre-code text='<rt-price :v2="true" :bright="true" :show-float="true" :value="0.2332" :old-value="666.2234" currency="$"></rt-price>'></pre-code>
            </div>
            <div>
              <pre-code text='<rt-price :v2="true" :bright="true" :show-float="true" :value="0.2323232" :old-value="666.2234" currency="$"></rt-price>'></pre-code>
            </div>
            <div>
              <pre-code text='<rt-price :v2="true" :bright="true" :show-float="true" :value="122.2323232" :old-value="666.2234" currency="$"></rt-price>'></pre-code>
            </div>
            <div>
              <pre-code text='<rt-price :v2="true" :bright="true" :show-float="true" :value="122332.2323232" :old-value="666.2234" currency="$"></rt-price>'></pre-code>
            </div>
            <div>
              <pre-code text='<rt-price :v2="true" :bright="true" :show-float="true" :value="122332323.2323232" :old-value="666.2234" currency="$"></rt-price>'></pre-code>
            </div>
            <div>
              <pre-code text='<rt-price :v2="true" :bright="true" :value="1231223169" :old-value="666" :only-price="true" currency="€"></rt-price>'></pre-code>
            </div>
          </rt-col>
        </rt-row>
      </div>
    </div>
    <div class="rt-container">
      <div class="is-b2c">
        <div class="row">
          <div class="rt-col-4 rt-col-md-3">
            <pre-code text="<rt-price :value='750.2' :old-value='666.2234' currency='$'></rt-price>"></pre-code>
          </div>
          <div class="rt-col-4 rt-col-md-3 rt-md-space-top">
            <pre-code text="<rt-price :value='750.231' :old-value='123.2'></rt-price>"></pre-code>
          </div>
          <div class="rt-col-4 rt-col-md-3 rt-md-space-top">
            <pre-code text="<rt-price :show-float='true' :value='18750.32' :old-value='123.2'></rt-price>"></pre-code>
          </div>
          <div class="rt-col-4 rt-col-md-3 rt-md-space-top">
            <pre-code text="<rt-price :value='750.231'></rt-price>"></pre-code>
          </div>
        </div>

        <div class="row rt-space-top">
          <div class="rt-col-4 rt-col-md-3">
            <pre-code text="<rt-price :value='69' option-label='До' :is-option='true' currency='€'></rt-price>"></pre-code>
          </div>
          <div class="rt-col-4 rt-col-md-3 rt-md-space-top">
            <pre-code text="<rt-price :value='750.231' time-interval='час.'></rt-price>"></pre-code>
          </div>
        </div>
        <div class="row rt-space-top">
          <div class="rt-col-16 rt-col-md-3">
            <pre-code text="<rt-price :value='1231223169' :is-option='true' currency='€'></rt-price>"></pre-code>
          </div>
        </div>
        <div class="row rt-space-top">
          <div class="rt-col-8 rt-col-md-3">
            <pre-code text="<rt-price :value='1231223169' :only-price='true' currency='€'></rt-price>"></pre-code>
          </div>
          <div class="rt-col-8 rt-col-md-3">
            <pre-code text="<rt-price :value='1231223169' :old-value='666' :only-price='true' currency='€'></rt-price>"></pre-code>
          </div>
        </div>
        <div class="row rt-space-top">
          <div class="rt-col-16 rt-col-md-3">
            <pre-code text="<div>
                <rt-price :for-game='true' class='color-orange' :value='800' time-interval='сек' currency='Мбит'></rt-price>
                <rt-price :bold-option='true' class='color-white' :for-game='true' :value='800' time-interval='сек' currency='Мбит'></rt-price>
              </div>"></pre-code>
          </div>
        </div>
      </div>
      <div class="is-b2b">
        <div class="row rt-space-top">
          <div class="rt-col-4 rt-col-md-3">
            <pre-code
                text="<rt-price old-price-color='red' :old-value='2500' :value='400.30' :is-option='false' currency='₽' :b2bPrice='true' time-interval='в месяц' class='color-main09' :show-float='true' :trim-hundredth='true'></rt-price>"></pre-code>
          </div>
        </div>
        <div class="row rt-space-top">
          <div class="rt-col-4 rt-col-md-3">
            <rt-price :value='500' currency='₽' :b2b-price='true' time-interval='' class='color-main09'
                      :is-option='true' :epc-price='true'></rt-price>
          </div>
        </div>
      </div>
      <div class="rt-space-top25">
        <documentation-builder :json="documentation" type="components"></documentation-builder>
      </div>
    </div>
  </div>

</template>

<script>
import documentation from "@vue-rt-style-kit-atoms-local/components/Price/docs/index.json";

const componentsList = {};
export default {
  name: "AppPrice",
  components: componentsList,
  data: () => ({
    documentation: {}
  }),
  mounted() {
    this.documentation = documentation;
  },
  created() {
  },
  methods: {}
};
</script>

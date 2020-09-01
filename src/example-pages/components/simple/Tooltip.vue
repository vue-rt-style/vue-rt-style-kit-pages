<template>
	<div>
	<div>
		<div class="rt-container">
			<div class="grid-center"/>
			<div class="app-content rt-col-12 rt-col-md-3">
				<div class="app-title">
				<rt-row>
					<rt-col size="4">
						<h1 class="rt-font-hero rt-col"
						    v-tooltip="{'text':'Tooltip желательно должен умешаться в одну коруткую строку, но при необходимости может расширяться'}">
							Tooltip</h1>
					</rt-col>
					<rt-col size="6">
						<h1 class="rt-font-hero rt-col"
						    v-tooltip="{'text':'Tooltip желательно должен умешаться в одну коруткую строку, но при необходимости может расширяться'}">
							Tooltip</h1>
					</rt-col>
					<rt-col size="2">
						<h1 class="rt-font-hero rt-col"
						    v-tooltip="{'text':'Tooltip желательно должен умешаться в одну коруткую строку, но при необходимости может расширяться'}">
							Tooltip</h1>
					</rt-col>
				</rt-row>
				</div>

			</div>


		</div>

			<div class="rt-container sp-v-2">
				<rt-col>
					<rt-row>
						<rt-col size="3"></rt-col>
						<rt-col><p v-tooltip="{'text':'Добавить в избранное'}" class="d-inline-block">tooltip</p></rt-col>
            <rt-col>
            <svg
                v-tooltip="{'text': this.text+this.count,'spec-content':true}"
                class="number__compare d-block"

                data-v-e259b9e8="" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink">
              <g data-v-e259b9e8="" id="icons/add_grey" stroke-width="1" fill-rule="evenodd">
                <g data-v-e259b9e8="" id="Group" transform="translate(2.000000, 3.000000)">
                  <rect data-v-e259b9e8="" id="Rectangle" x="6" y="8" width="10" height="2"></rect>
                  <rect data-v-e259b9e8="" id="Rectangle-Copy-2" x="0" y="0" width="12" height="2"></rect>
                  <rect data-v-e259b9e8="" id="Rectangle-Copy-3" x="0" y="4" width="8" height="2"></rect>
                  <rect data-v-e259b9e8="" id="Rectangle-Copy-4" x="0" y="8" width="4" height="2"></rect>
                  <polygon data-v-e259b9e8="" id="Rectangle" transform="translate(11.000000, 9.000000) rotate(90.000000) translate(-11.000000, -9.000000) " points="6 8 16 8 16 10 6 10"></polygon>
                </g>
              </g>
            </svg>
              {{this.text+this.count}}
            </rt-col>
            <rt-col>
            <button v-on:click="count += 1">!!
              <div v-if="count<3" v-tooltip="{'text':'Добавить в избранное'}">123</div>
              <div v-else v-tooltip="{'text':'Убрать из избранное'}">321</div>
            </button>
            </rt-col>
						<rt-col size="3"></rt-col>
					</rt-row>
				</rt-col>
			</div>
			<div class="color-block--dark-blue sp-v-2">
					<div class="rt-container">
						<rt-col>
							<rt-row>
								<rt-col size="3"></rt-col>
								<rt-col>
									<p v-tooltip="{'text':'Добавить в избранное', 'bright':true}" class="d-inline-block color-white">tooltip</p>
								</rt-col>
								<rt-col size="3"></rt-col>
							</rt-row>
						</rt-col>
					</div>
			</div>
		</div>
		<div class="rt-container">
			<div class="row"></div>
			<div class="rt-col">
			</div>
		</div>
	</div>
</template>

<script>
  import documentation from "@vue-rt-style-kit-molecules-local/components/Banner/docs/index.json";
  import componentsList from "../../componentsList";
  // const componentsList = {};
  export default {
    name: "AppSlider",
    components: componentsList,
    data: () => ({
      documentation: {},
      text: 'это реактивный текст',
      count: 0
    }),
    mounted() {
      this.documentation = documentation;
    },
    created() {
    },
    methods: {

    }
  };
</script>

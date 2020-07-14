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
						<rt-col><p  v-tooltip="{'text':'Добавить в избранное'}" class="d-inline-block">tooltip</p></rt-col>
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

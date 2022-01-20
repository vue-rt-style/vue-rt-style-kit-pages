<template>
	<div>
		<div class="rt-container">
			<div class="app-content rt-col-12 rt-col-md-3">
				<div class="app-title">
					<h1 class="rt-font-hero">
						RadioButton
					</h1>
				</div>
				<div class="app-body">
					<rt-row>
						<rt-col :size="6" :mobile-size="3">
							<pre-code
									text='<div class="app-row row rt-space-top2"><div class="rt-col">
						<rt-radio-button name="type" :checked="true" value="0">Вариант 1</rt-radio-button>
						<div class="rt-space-vertical">
						<rt-radio-button name="type" value="1">Вариант 2</rt-radio-button></div>
						<rt-radio-button name="type" value="2">Вариант 3</rt-radio-button>
						<div class="rt-space-vertical">
						  <rt-radio-button name="type" value="3">Вариант 4</rt-radio-button>
						</div>
						<div class="rt-space-vertical">
						  <rt-radio-button :has-error="true" name="type" value="4">Вариант с ошибкой</rt-radio-button>
						</div>
						<div>
						  <rt-radio-button :disabled="true" :has-error="true" name="type" value="4">Вариант неактивный</rt-radio-button>
						</div>
						<div class="sp-t-1">
						  <rt-radio-button :checked="true" :disabled="true" :has-error="true" name="type" value="4">Вариант неактивный</rt-radio-button>
						</div>
						</div></div>'
							/>
						</rt-col>
						<rt-col :size="6" :mobile-size="3">
							<pre-code
									text='<div class="app-row row rt-space-top2"><div class="rt-col">
						<rt-radio-button :is-orange="true" name="type-2" :checked="true" value="0">Вариант 1</rt-radio-button>
						<div class="rt-space-vertical">
						<rt-radio-button :is-orange="true" name="type-2" value="1">Вариант 2</rt-radio-button></div>
						<rt-radio-button :is-orange="true" name="type-2" value="2">Вариант 3</rt-radio-button>
						<div class="rt-space-vertical">
						  <rt-radio-button :is-orange="true" name="type-2" value="3">Вариант 4</rt-radio-button>
						</div>
						<div class="rt-space-vertical">
						  <rt-radio-button :is-orange="true" :has-error="true" name="type-2" value="4">Вариант с ошибкой</rt-radio-button>
						</div>
						<div>
						  <rt-radio-button :disabled="true" :is-orange="true" :has-error="true" name="type-2" value="4">Вариант неактивный</rt-radio-button>
						</div>
						<div class="sp-t-1">
						  <rt-radio-button :checked="true" :disabled="true" :is-orange="true" :has-error="true" name="type-2" value="4">Вариант неактивный</rt-radio-button>
						</div>
						</div></div>'
							/>
						</rt-col>
					</rt-row>

				</div>
			</div>
		</div>
		<div class="color-block--dark-blue rt-space-vertical2">
			<div class="rt-container">
				<rt-col :size="12">
					<rt-row>
						<rt-col :size="6" :mobile-size="3">
							<pre-code
									text='<div class="app-row row rt-space-top2"><div class="rt-col">
						<rt-radio-button name="type-3" :bright="true" :checked="true" value="0">Вариант 1</rt-radio-button>
						<div class="rt-space-vertical">
						<rt-radio-button name="type-3" :bright="true" value="1">Вариант 2</rt-radio-button></div>
						<rt-radio-button name="type-3" :bright="true" value="2">Вариант 3</rt-radio-button>
						<div class="rt-space-vertical">
						  <rt-radio-button name="type-3" :bright="true" value="3">Вариант 4</rt-radio-button>
						</div>
						<div class="rt-space-vertical">
						  <rt-radio-button  :bright="true" :has-error="true" name="type-3" value="4">Вариант с ошибкой</rt-radio-button>
						</div>
						<div>
						  <rt-radio-button :disabled="true"  :bright="true" :has-error="true" name="type-3" value="4">Вариант неактивный</rt-radio-button>
						</div>
						<div class="sp-t-1">
						  <rt-radio-button :checked="true" :disabled="true"  :bright="true" :has-error="true" name="type-3" value="4">Вариант неактивный</rt-radio-button>
						</div></div>
						</div>'
							/>
						</rt-col>
						<rt-col :size="6" :mobile-size="3">
							<pre-code
									text='<div class="app-row row rt-space-top2"><div class="rt-col">
						<rt-radio-button :is-orange="true" name="type-4" :bright="true" :checked="true" value="0">Вариант 1</rt-radio-button>
						<div class="rt-space-vertical">
						<rt-radio-button :is-orange="true" name="type-4" :bright="true" value="1">Вариант 2</rt-radio-button></div>
						<rt-radio-button :is-orange="true" name="type-4" :bright="true" value="2">Вариант 3</rt-radio-button>
						<div class="rt-space-vertical">
						  <rt-radio-button :is-orange="true" name="type-4" :bright="true" value="3">Вариант 4</rt-radio-button>
						</div>

						<div class="rt-space-vertical">
						  <rt-radio-button :is-orange="true" :bright="true" :has-error="true" name="type-4" value="4">Вариант с ошибкой</rt-radio-button>
						</div>
						<div>
						  <rt-radio-button :disabled="true" :is-orange="true" :bright="true" :has-error="true" name="type-4" value="4" >Вариант неактивный</rt-radio-button>
						</div>
						<div class="sp-t-1">
						  <rt-radio-button :checked="true" :disabled="true" :is-orange="true" :bright="true" :has-error="true" name="type-4" value="4">Вариант неактивный</rt-radio-button>
						</div>
						</div></div>'
							/>
						</rt-col>
					</rt-row>
				</rt-col>
			</div>
		</div>
		<div class="rt-container">
			<rt-row class="app-row rt-sp-t-1">
				<documentation-builder :json="documentation" type="components"/>
			</rt-row>
		</div>
	</div>
</template>

<script>
  import documentation from "@vue-rt-style-kit-atoms-local/components/RadioButton/docs/index.json";
  import componentsList from "../../componentsList";
  // const componentsList = {};
  export default {
    name: "AppRadioButton",
    components: componentsList,
    data() {
      return {
        testModel: 0,
        documentation: {}
      };
    },
    mounted() {
      this.documentation = documentation;
    },
    created() {
    },
    methods: {}
  };
</script>

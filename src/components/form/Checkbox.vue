<template>
	<div>
		<div class="rt-container">
			<div class="app-content rt-col-12 rt-col-md-3">
				<div class="app-title">
					<h1 class="rt-font-hero">
						Checkbox
					</h1>
				</div>
				<div class="app-body">
					<rt-row class="app-row">
						<p class="rt-font-h3 rt-col">
							checkbox
						</p>
					</rt-row>
					<rt-row class="app-row">
						<rt-col :size="4">
							<pre-code
									text='<rt-checkbox :required="true" name="internet">Интернет</rt-checkbox>'/>
							<div class="rt-space-vertical">
								<pre-code text='<rt-checkbox name="sms">Смс</rt-checkbox>'></pre-code>
							</div>
							<pre-code text='<rt-checkbox name="voiseMessage">Голосовая почта</rt-checkbox>'></pre-code>
							<div class="rt-space-vertical">
								<pre-code text='<rt-checkbox name="calls" :checked="true">Звонки</rt-checkbox>'></pre-code>
							</div>
							<div class="rt-space-vertical">
								<pre-code
										text='<rt-checkbox :is-disabled="true">Интернет</rt-checkbox>'></pre-code>
							</div>
							<div class="rt-space-vertical">
								<pre-code
										text='<rt-checkbox :is-disabled="true" :checked="true">Интернет</rt-checkbox>'></pre-code>
							</div>
						</rt-col>
						<rt-col :size="2"></rt-col>
						<rt-col :size="4">
							<pre-code
									text='<rt-checkbox :is-orange="true"  :required="true" name="internet">Интернет</rt-checkbox>'></pre-code>
							<div class="rt-space-vertical">
								<pre-code text='<rt-checkbox :is-orange="true" name="sms">Смс</rt-checkbox>'></pre-code>
							</div>
							<rt-checkbox :is-orange="true" name="voiseMessage">Голосовая почта</rt-checkbox>
							<div class="rt-space-vertical">
								<pre-code
										text='<rt-checkbox :is-orange="true" name="calls" :checked="true">Звонки</rt-checkbox>'></pre-code>
							</div>
							<div class="rt-space-vertical">
								<pre-code
										text='<rt-checkbox :is-orange="true" :is-disabled="true">Интернет</rt-checkbox>'></pre-code>
							</div>
							<div class="rt-space-vertical">
								<pre-code
										text='<rt-checkbox :is-orange="true" :is-disabled="true" :checked="true">Интернет</rt-checkbox>'></pre-code>
							</div>
						</rt-col>
					</rt-row>
				</div>
			</div>
		</div>
		<div class="color-block--dark-blue rt-space-vertical2">
			<div class="rt-container">
				<rt-col :size="12">
					<rt-row class="app-row">
						<rt-col :size="4">
							<pre-code
									text='<rt-checkbox :bright="true" :required="true" name="internet">Интернет</rt-checkbox>'/>
							<div class="rt-space-vertical">
								<pre-code text='<rt-checkbox :bright="true" name="sms">Смс</rt-checkbox>'></pre-code>
							</div>
							<pre-code text='<rt-checkbox :bright="true" name="voiseMessage">Голосовая почта</rt-checkbox>'></pre-code>
							<div class="rt-space-vertical">
								<pre-code
										text='<rt-checkbox :bright="true" name="calls" :checked="true">Звонки</rt-checkbox>'></pre-code>
							</div>
							<div class="rt-space-vertical">
								<pre-code
										text='<rt-checkbox :bright="true" :is-disabled="true">Интернет</rt-checkbox>'></pre-code>
							</div>
							<div class="rt-space-vertical">
								<pre-code
										text='<rt-checkbox :bright="true" :checked="true" :is-disabled="true">Интернет</rt-checkbox>'></pre-code>
							</div>
						</rt-col>
						<rt-col :size="2"></rt-col>
						<rt-col :size="4">
							<pre-code
									text='<rt-checkbox :bright="true" :is-orange="true" :required="true" name="internet">Интернет</rt-checkbox>'></pre-code>
							<div class="rt-space-vertical">
								<pre-code text='<rt-checkbox :bright="true" :is-orange="true" name="sms">Смс</rt-checkbox>'></pre-code>
							</div>
							<rt-checkbox :bright="true" :is-orange="true" name="voiseMessage">Голосовая почта</rt-checkbox>
							<div class="rt-space-vertical">
								<pre-code
										text='<rt-checkbox :bright="true" :is-orange="true" name="calls" :checked="true">Звонки</rt-checkbox>'></pre-code>
							</div>
							<div class="rt-space-vertical">
								<pre-code
										text='<rt-checkbox :bright="true" :is-disabled="true">Интернет</rt-checkbox>'></pre-code>
							</div>
							<div class="rt-space-vertical">
								<pre-code
										text='<rt-checkbox :is-orange="true" :checked="true" :bright="true" :is-disabled="true">Интернет</rt-checkbox>'></pre-code>
							</div>
						</rt-col>
					</rt-row>
				</rt-col>
			</div>
		</div>
		<div class="rt-container sp-v-2">
			<rt-col :size="4">
				<h3 class="sp-b-2">Dynamic test</h3>
				<div class="d-flex flex-column sp-b-1">
					<rt-checkbox
						:checked="myModel.internet"
						@change="myModel.internet = !myModel.internet"
					>Интернет</rt-checkbox>
					<rt-checkbox
						:checked="myModel.sms"
						@change="myModel.sms = !myModel.sms"
					>SMS</rt-checkbox>
					<rt-checkbox
						:checked="myModel.voiceMessages"
						@change="myModel.voiceMessages = !myModel.voiceMessages"
					>Голосовая почта</rt-checkbox>
					<rt-checkbox
						:required="true"
						:checked="myModel.calls"
						@change="myModel.calls = !myModel.calls"
					>Звонки</rt-checkbox>
				</div>

				<pre>Result myModel: <span>{{ myModel }}</span></pre>
			</rt-col>
		</div>
		<div class="rt-container">
			<div class="app-row row rt-space-top">
				<documentation-builder :json="documentation" type="components"/>
			</div>
		</div>

	</div>

</template>

<script>
  import documentation from "@vue-rt-style-kit-atoms-local/components/Checkbox/docs/index.json";
  import componentsList from "../../componentsList";
  //  const componentsList = {};
  export default {
    name: "AppCheckbox",
    components: componentsList,
    data: () => ({
			documentation: {},
			myModel: {
				internet: false,
				sms: false,
				voiceMessages: false,
				calls: true
			}
    }),
    mounted() {
      this.documentation = documentation;
    },
    created() {
    },
    methods: {}
  };
</script>

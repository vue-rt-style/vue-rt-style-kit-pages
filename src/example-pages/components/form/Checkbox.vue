<template>
	<div class="rt-container">
		<div class="app-content rt-col-12 rt-col-md-3">
			<div class="app-title">
				<h1 class="rt-font-hero">
					Checkbox
				</h1>
			</div>
			<div class="app-body">
				<div class="app-row row">
					<p class="rt-font-h3 rt-col">
						checkbox
					</p>
				</div>
				<div class="app-row row">
					<rt-col :size="4">
						<pre-code
								text='<rt-checkbox :validate="{required: true}" :required="true" name="internet">Интернет</rt-checkbox>'/>
						<div class="rt-space-vertical">
							<pre-code text='<rt-checkbox name="sms">Смс</rt-checkbox>'></pre-code>
						</div>
						<pre-code text='<rt-checkbox name="voiseMessage">Голосовая почта</rt-checkbox>'></pre-code>
						<div class="rt-space-vertical">
							<pre-code text='<rt-checkbox name="calls" :checked="true">Звонки</rt-checkbox>'></pre-code>
						</div>
					</rt-col>
					<rt-col :size="2"></rt-col>
					<rt-col :size="4">
						<pre-code
								text='<rt-checkbox :is-orange="true" :validate="{required: true}" :required="true" name="internet">Интернет</rt-checkbox>'></pre-code>
						<div class="rt-space-vertical">
							<pre-code text='<rt-checkbox :is-orange="true" name="sms">Смс</rt-checkbox>'></pre-code>
						</div>
						<rt-checkbox name="voiseMessage">Голосовая почта</rt-checkbox>
						<div class="rt-space-vertical">
							<pre-code
									text='<rt-checkbox :is-orange="true" name="calls" :checked="true">Звонки</rt-checkbox>'></pre-code>
						</div>
					</rt-col>

				</div>
				<div class="app-row row">
					<p class="rt-font-h3 rt-col">
						disabled checkbox
					</p>
				</div>
				<div class="app-row row">
					<pre-code
							text='<rt-col>
          <div class="rt-space-vertical">
            <rt-checkbox :is-disabled="true">Интернет</rt-checkbox>
          </div>
          <rt-checkbox :is-disabled="true" :checked="true">Интернет</rt-checkbox>
        </rt-col>'
					/>
				</div>
			</div>
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

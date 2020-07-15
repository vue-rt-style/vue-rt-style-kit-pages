<template>
	<div>
		<div class="rt-container">
			<div class="grid-center"/>
			<div class="app-content rt-col-12 rt-col-md-3">
				<div class="app-title">
					<div class="row"><h1 class="rt-font-hero rt-col">Help block</h1></div>
				</div>
			</div>
		</div>
		<div class="rt-container">
			<rt-row>
			<rt-col size="6">
				<rt-help-block :on-click="alert">
					<template slot="content">К сожалению, Ваш дом еще не подключен к сети. Заявка будет предварительной</template>
					<template slot="action-text">Проверить другой адрес</template>
				</rt-help-block>
			</rt-col>
			<rt-col size="1"></rt-col>
			<rt-col size="3">
				<rt-help-block :on-click="alert" :hide-icon="true">
					<template slot="content">К сожалению, Ваш дом еще не подключен к сети. Заявка будет предварительной</template>
					<template slot="action-text">Проверить другой адрес</template>
				</rt-help-block>
			</rt-col>
			</rt-row>
			<rt-row>
			<rt-col size="6">
				<pre-code text='
				<rt-help-block :on-click="alert">
					<template slot="content">К сожалению, Ваш дом еще не подключен к сети. Заявка будет предварительной</template>
					<template slot="action-text">Проверить другой адрес</template>
				</rt-help-block>'></pre-code>
			</rt-col>
			<rt-col size="1"></rt-col>
			<rt-col size="3">
				<pre-code text='
				<rt-help-block :on-click="alert" :hide-icon="true">
					<template slot="content">К сожалению, Ваш дом еще не подключен к сети. Заявка будет предварительной</template>
					<template slot="action-text">Проверить другой адрес</template>
				</rt-help-block>'></pre-code>
			</rt-col>
			</rt-row>
		</div>
	</div>
</template>

<script>
  import documentation from "@vue-rt-style-kit-molecules-local/components/Banner/docs/index.json";
  import componentsList from "../../componentsList";
  // const componentsList = {};
  export default {
    name: "AppHelpBlock",
    components: componentsList,
    data: () => ({
      documentation: {}
    }),
    mounted() {
      this.documentation = documentation;
    },
    created() {
    },
    methods: {
      alert() {
        alert('click')
      }
    }
  };
</script>

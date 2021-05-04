<template>
	<div class="rt-container">
		<div class="app-content rt-col-12 rt-col-md-3">
			<div class="app-title">
				<h1 class="rt-font-hero">Input</h1>
			</div>
			<div class="app-body">
				<div class="app-deprecated">
					<div class="app-row row">
						<div class="rt-col-5 rt-col-md-3">
<!--							<span class="rt-font-label flex-fill rt-space-bottom05">simple input</span>-->
              <rt-input :version="2" placeholder="Это поле ввода. Дерзай!"
                        @change="console('change')" @focus="console('focus')" @blur="console('blur')"/>
              <div class="sp-t-0-3"/>
              <rt-input :version="2" placeholder="Это поле ввода с подсказкой" label="Текст подсказки" :error-message="errorMessage"/>
              <rt-input :version="2" :placeholder="errorText" :has-error="error"
                        :error-message='errorMessage' :disabled="disabled" :value="rightValue"/>
              <div class="sp-t-0-3"/>
              <rt-input :version="2" :disabled="true" label="Как-то так" placeholder="Теперь ввод запрещён"/>
              <rt-input :version="2" :disabled="true" label="М - магия))" placeholder="Теперь ввод запрещён"
                        value="Но каким-то магическим образом здесь есть текст"/>
              <rt-input :version="2" placeholder="Поле ввода с иконкой" label="Эта иконка ничего не делает">
                <template slot="icon">
                  <rt-system-icons name="atom"/>
                </template>
              </rt-input>
              <rt-input label="А эта иконка делает))"
                        :version="2"
                        type="text"
                        value=""
                        placeholder="Поле с всплывающей подсказкой">
                <template slot="informer">Здесь могла бы быть Ваша реклама, но мы будем использовать всплывающие
                  подсказки исключительно для сообщения важной информации.<br> Шутка!)) По вопросам сотрудничества
                  пиши в личку</template>
              </rt-input>
<!--							<pre-code text="<rt-input label=&quot;Начните вводить почту&quot;-->
<!--                              type=&quot;string&quot;-->
<!--                              value=&quot;&quot;-->
<!--                              placeholder=&quot;Электронная почта&quot; />"/>-->
						</div>
            <div class="rt-col-1 md-d-none"/>
            <div class="rt-col-5 rt-col-md-3">
              <div class="color-block--light-blue-high sp-v-1">
                <h4 class="rt-font-h4">Проверка v-model</h4>
                <input type="text" v-model="newInputModel" placeholder="Начните ввод">
                <rt-input label="Поле, связанное с обычным элементом input выше"
                          :version="2"
                          v-model="newInputModel"
                          type="text"
                          placeholder="Или начните ввод здесь"/>
              </div>
              <rt-input label="Шаг равен ±3"
                        :version="2"
                        type="number"
                        input-type="number"
                        :is-integer="true"
                        :step="3"
                        :min-number="0"
                        :max-number="99"
                        placeholder="Введите целое число в диапазоне 0 - 99"/>
              <rt-input label="Переключение видимости по нажатию на иконку"
                        :version="2"
                        type="text"
                        value="я - пароль, и сейчас ты меня видишь"
                        placeholder="Поле ввода пароля" input-type="password"/>
              <rt-input input-type="tel" label="Начните вводить номер, маску мы берём на себя" :version="2" error-message="Начните вводить номер, маску мы берём на себя"
                        placeholder="Поля ввода номера телефона" :need-verification="true"
                        @change="console('change')" @focus="console('focus')" @blur="console('blur')"
                        :verified="checkThis" ref="phoneInput" :value="newInputModel"/>
              <div class="sp-t-1"/>
            </div>
            <div class="rt-col-1 md-d-none"/>
<!--						<div class="rt-col-4 rt-col-md-2 rt-md-space-top">-->
<!--							<span class="rt-font-label flex-fill rt-space-bottom05">input with error</span>-->
<!--							<pre-code text="<rt-input type=&quot;email&quot;-->
<!--                              label=&quot;Начните вводить почту&quot;-->
<!--                              placeholder=&quot;Электронная почта&quot;-->
<!--                              value=&quot;inputModelValue&quot;-->
<!--                              error-message=&quot;ошибка: не является почтой&quot;-->
<!--                              :has-error=&quot;true&quot; />"/>-->
<!--						</div>-->
<!--						<div class="rt-col-4 rt-col-md-1 rt-md-space-top">-->
<!--							<span class="rt-font-label flex-fill rt-space-bottom05">disabled input</span>-->
<!--							<pre-code text="<rt-input value=&quot;&quot;-->
<!--                              placeholder=&quot;Электронная почта&quot;-->
<!--                              :disabled=&quot;true&quot;-->
<!--                              value=&quot;inputModelValue&quot;-->
<!--                              label=&quot;Начните вводить почту&quot;-->
<!--                              error-message=&quot;ошибка: не является почтой&quot;/>"/>-->
<!--						</div>-->
					</div>
<!--					<div class="app-row row ">-->
<!--						<div class="rt-col-3 rt-col-md-3">-->
<!--							<span class="rt-font-label flex-fill rt-space-bottom05">input in 3 col</span>-->
<!--							<rt-input value="" placeholder="Электронная почта"/>-->
<!--						</div>-->
<!--						<div class="rt-col-2 rt-col-md-2 rt-md-space-top">-->
<!--							<span class="rt-font-label flex-fill rt-space-bottom05 rt-font-no-wrap">input in 2 col</span>-->
<!--							<rt-input v-model="vTest" placeholder="Проверка v-model"/>-->
<!--							<span>{{ JSON.stringify(vTest) }}</span>-->
<!--						</div>-->
<!--						<div class="rt-col-2 rt-col-md-2 rt-md-space-top">-->
<!--							<span class="rt-font-label flex-fill rt-space-bottom05 rt-font-no-wrap">input in 2 col</span>-->
<!--							<rt-input value="" placeholder="Улица"/>-->
<!--						</div>-->
<!--						<div class="rt-col-1 rt-col-md-1 rt-md-space-top">-->
<!--							<span class="rt-font-label flex-fill rt-space-bottom05 rt-font-no-wrap">input in 1 col</span>-->
<!--							<rt-input value="" placeholder="Дом"/>-->
<!--						</div>-->
<!--						<div class="rt-col-1"/>-->
<!--						<div class="rt-col-3 rt-col-md-3">-->
<!--							<span class="rt-font-label flex-fill rt-space-bottom05 rt-font-no-wrap">password input</span>-->
<!--							<rt-input input-type="password" type="password" placeholder="Введите пароль"/>-->
<!--						</div>-->
<!--					</div>-->
<!--					<div class="app-row row">-->
<!--						<div class="rt-col-3 rt-col-md-3">-->
<!--							<span class="rt-font-label flex-fill rt-space-bottom05">input in 3 col</span>-->
<!--							<rt-input value="" placeholder="Электронная почта"/>-->
<!--						</div>-->
<!--						<div class="rt-col-2 rt-col-md-2 rt-md-space-top">-->
<!--							<span class="rt-font-label flex-fill rt-space-bottom05 rt-font-no-wrap">input in 2 col</span>-->
<!--							<rt-input value="" placeholder="Улица"/>-->
<!--						</div>-->
<!--						<div class="rt-col-1 rt-col-md-1 rt-md-space-top">-->
<!--							<span class="rt-font-label flex-fill rt-space-bottom05 rt-font-no-wrap">input in 1 c</span>-->
<!--							<rt-input value="" placeholder="Дом" :has-error="true" error-message="dasd asdas asdsad sadsad"/>-->
<!--						</div>-->
<!--						<div class="rt-col-1"/>-->
<!--						<div class="rt-col-3 rt-col-md-3">-->
<!--							<span class="rt-font-label flex-fill rt-space-bottom05 rt-font-no-wrap">password input</span>-->
<!--							<rt-input type="password" placeholder="Введите пароль"/>-->
<!--						</div>-->
<!--					</div>-->
<!--					<div class="app-row row">-->
<!--						<div class="rt-col-3 rt-col-md-3">-->
<!--							<span class="rt-font-label flex-fill rt-space-bottom05">input in 3 col</span>-->
<!--							<rt-input value="" placeholder="Электронная почта"/>-->
<!--						</div>-->
<!--						<div class="rt-col-2 rt-col-md-2 rt-md-space-top">-->
<!--							<span class="rt-font-label flex-fill rt-space-bottom05 rt-font-no-wrap">input in 2 col</span>-->
<!--							<rt-input  value="" placeholder="Улица"/>-->
<!--						</div>-->
<!--						<div class="rt-col-1 rt-col-md-1 rt-md-space-top">-->
<!--							<span class="rt-font-label flex-fill rt-space-bottom05 rt-font-no-wrap">input in 1 c</span>-->
<!--							<rt-input value="" placeholder="Дом"/>-->
<!--						</div>-->
<!--						<div class="rt-col-1"/>-->
<!--						<div class="rt-col-3 rt-col-md-3">-->
<!--							<span class="rt-font-label flex-fill rt-space-bottom05 rt-font-no-wrap">password input</span>-->
<!--							<rt-input type="password" placeholder="Введите пароль"/>-->
<!--						</div>-->
<!--					</div>-->
<!--					<rt-input insert-type="string"-->
<!--					          value=""-->
<!--					          insert-lang="ru"-->
<!--					          placeholder="Ф.И.О."/>-->
<!--					<rt-input insert-type="number"-->
<!--					          type="number"-->
<!--					          value=""-->
<!--					          :max-length="3"-->
<!--					          placeholder="Ваше любимое число до 999"-->
<!--					          :min-number="0"-->
<!--					          :max-number="999"-->
<!--					          :is-integer="true"/>-->
<!--					<rt-input insert-type="string"-->
<!--					          value=""-->
<!--					          insert-lang="en"-->
<!--					          placeholder="enter your name(English, please)"/>-->
<!--					<div class="app-row row">-->
<!--						<div class="rt-col rt-col-12">-->
<!--							<rt-input :show-numbers-buttons="true"-->
<!--							          insert-type="number"-->
<!--							          :min-number="0"-->
<!--							          placeholder="Количество, шт."/>-->
<!--						</div>-->
<!--					</div>-->
<!--					<div class="app-row row rt-space-top rt-space-bottom ">-->
<!--						<div class="rt-col rt-col-4 rt-col-td-3 rt-col-md-3">-->
<!--							<rt-input placeholder="Электронная почта" :is-b2b-input="true"/>-->
<!--						</div>-->
<!--						<div class="rt-col rt-col-4 rt-col-td-3 rt-col-md-3">-->
<!--							<rt-input placeholder="Электронная почта"-->
<!--							          :is-b2b-input="true"-->
<!--							          value="kdbafasdfsdfsd"-->
<!--							          :disabled="true"/>-->
<!--						</div>-->
<!--						<div class="rt-col rt-col-4 rt-col-td-3 rt-col-md-3">-->
<!--							<pre-code text="<rt-input placeholder=&quot;Электронная почта&quot;-->
<!--                              :hasError=&quot;true&quot;-->
<!--                              :is-b2b-input=&quot;true&quot;-->
<!--                              value=&quot;kdbaf@dfj.dfd&quot;-->
<!--                              error-message=&quot;ошибка: не является почтой&quot;/>"/>-->
<!--						</div>-->
<!--					</div>-->
<!--					<div class="app-row row">-->
<!--						<div class="rt-col rt-col-6 rt-col-td-3 rt-col-md-3">-->
<!--							<pre-code text="<rt-input placeholder=&quot;Электронная почта&quot;-->
<!--                              :is-b2b-input=&quot;true&quot;-->
<!--                              :outlined=&quot;true&quot;/>"/>-->
<!--							<pre-code text="<rt-input placeholder=&quot;Электронная почта&quot;-->
<!--                              :hasError=&quot;true&quot;-->
<!--                              :is-b2b-input=&quot;true&quot;-->
<!--                              :outlined=&quot;true&quot;-->
<!--                              error-message=&quot;ошибка: не является почтойошибка: не является почтойошибка: не является почтойошибка: не является почтойошибка: не является почтойошибка: не является почтой&quot;/>"/>-->
<!--							<pre-code text="<rt-input placeholder=&quot;Электронная почта&quot;-->
<!--                              :disabled=&quot;true&quot;-->
<!--                              :is-b2b-input=&quot;true&quot;-->
<!--                              :outlined=&quot;true&quot;/>"/>-->
<!--							<pre-code text="<rt-input placeholder=&quot;Введите пароль&quot;-->
<!--                              type=&quot;password&quot;-->
<!--                              :is-b2b-input=&quot;true&quot;-->
<!--                              :outlined=&quot;true&quot;/>"/>-->
<!--						</div>-->
<!--					</div>-->
<!--					<div class="app-row color-block&#45;&#45;light-grey rt-space-top3 rt-space-bottom3 row">-->
<!--						<div class="rt-col-12 rt-space-bottom15">-->
<!--							<h2 class="rt-font-bold rt-font-center rt-space-bottom05">-->
<!--								Оформить заявку на подключение-->
<!--							</h2>-->
<!--							<p class="rt-font-paragraph rt-font-center">услуга «Виртуальная АТС», тариф М</p>-->
<!--						</div>-->
<!--						<div class="rt-col-3 rt-col-td-1"/>-->
<!--						<div class="rt-col rt-col-6 rt-col-td-4 rt-col-md-3">-->
<!--							<rt-input placeholder="Имя" :is-b2b-input="true"/>-->
<!--							<rt-input placeholder="Компания" :is-b2b-input="true"/>-->
<!--							<rt-input placeholder="Электронная почта" :is-b2b-input="true" :input-button="true"-->
<!--							          input-button-text="Получить код"/>-->
<!--							<rt-input placeholder="Телефон" :is-b2b-input="true" :has-timer="true" timer-duration="1"-->
<!--							          insert-type="tel"/>-->
<!--							<rt-input placeholder="Код из смс"-->
<!--							          :is-b2b-input="true"-->
<!--							          :approved="true"/>-->
<!--							<div class="row flex-center-center rt-space-top">-->
<!--								<rt-checkbox name="agreement" class="color-main05">Я принимаю <a href="">условия передачи информации</a>-->
<!--								</rt-checkbox>-->
<!--							</div>-->
<!--							<rt-button class="rt-button-transparent-purple">-->
<!--								Получить код-->
<!--							</rt-button>-->
<!--						</div>-->
<!--						<div class="rt-col-3 rt-col-td-1"/>-->
<!--					</div>-->
				</div>
			</div>
			<div class="rt-space-top25">
				<documentation-builder :json="documentation" type="components"/>
			</div>
		</div>
	</div>
</template>

<script>
  import documentation from "@vue-rt-style-kit-atoms-local/components/Input/docs/index.json";
  import componentsList from "../../componentsList";

  export default {
    name: "AppInput",
    components: componentsList,
    data: () => ({
      vTest: null,
      inputModelValue: "test",
      documentation: {},
      inputValue: "test",
      inputModel: '124',
      inputPasswordType: 'password',
      checkThis: null,
      disabled: false,
      error: true,
      clickCounter: 0,
      errorText: 'Это поле с ошибкой!',
      errorMessage: 'Текст сообщения об ошибке. К примеру: "тыкни чекбокс подо мной"',
      rightValue: '',
      showButton: false,
      newInputModel: ''
    }),
    mounted() {
      this.documentation = documentation;
      // setTimeout(()=> {
      //   this.error = false;
      // },10000)
    },
    created() {},
    methods: {
      openCalendar(e,a,b){
        console.info('openCalendar',e,a,b)
      },
      togglePhoneCheck() {
        setTimeout(() => {
          if(this.$refs.phoneInput.$refs.component.$refs.input.localValue.length == 18) {
            this.checkThis = !!Math.round(Math.random())
          }
        }, 5000)
      },
      console(e) {
        console.log('!!!', e)
      }
    }
  };
</script>

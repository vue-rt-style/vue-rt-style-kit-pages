<template>
	<div>
		<div class="rt-container">
			<div class="grid-center"/>
			<div class="app-content rt-col-12 rt-col-md-3">
				<div class="app-title">
					<div class="row"><h1 class="rt-font-hero rt-col">Slider</h1></div>
				</div>
			</div>
		</div>
		<div class="rt-container">
			<rt-col size="12">
      <rt-slider>
        <rt-slider-item>
          <template slot="title">OnLime TeleCARD</template>
          <template slot="text">
            Plug&play решение для подключения и приема онлайн цифрового телевидения</template>
          <template slot="boolets">Компактное оборудование размером с карточку</template>
          <template slot="boolets">Прием цифрового эфирного телевидения без дополнительных
            проводов</template>
          <template slot="image"><img src="//static-cdn.rt.ru/sites/default/files/img/tv-equip-1.jpg" />
          </template>
        </rt-slider-item>
        <rt-slider-item>
          <template slot="title">HD-ресивер</template>
          <template slot="text">Цифровой ресивер с возможностью использования в качестве мультимедийного плеера.
            Доступен в двух модификациях:</template>
          <template slot="boolets">со встроенным жестким диском</template>
          <template slot="boolets">без жесткого диска</template>
          <template slot="image"><img src="//static-cdn.rt.ru/sites/default/files/img/tv-equip-2.jpg" />
          </template>
        </rt-slider-item>
        <rt-slider-item>
          <template slot="title">Как подключить цифровое телевидение в Москве</template>
          <template slot="text">Установите OnLime TeleCARD в слот CI или CI+ телевизора, активируйте услугу
            цифрового эфирного телевидения и смотрите более 170 цифровых и HD-каналов.</template>
          <template slot="image"><img src="//static-cdn.rt.ru/sites/default/files/img/tv-equip-3.png" />
          </template>
        </rt-slider-item>
      </rt-slider>
      </rt-col>
			<div class="rt-col">
				<pre-code
						text='<rt-slider>
          <rt-slider-item>
            <template slot="label">Вы получаете</template>
            <template slot="title">Синхронизация на разных устройствах</template>
            <template slot="text">Продолжайте чтение на другом устройстве с того же места. Продолжайте чтение на другом устройстве с того же Продолжайте чтение на другом устройстве с того же</template>
            <template slot="image"><img src="https://static-cdn.rt.ru/sites/default/files/img/books_page/books-slide-3.png" alt=""/></template>
            <template slot="image-x2"><img src="https://static-cdn.rt.ru/sites/default/files/img/books_page/books-slide-3-x2.png" alt=""/></template>
            <template slot="image-tablet"><img src="https://static-cdn.rt.ru/sites/default/files/img/books_page/books-slide-3.png" alt=""/></template>
            <template slot="image-mobile"><img src="https://static-cdn.rt.ru/sites/default/files/img/domofon/main-mb.jpg" alt=""/></template>
          </rt-slider-item>
          <rt-slider-item>
            <template slot="label">Вы получаете</template>
            <template slot="title">Рекомендации от редакторов ЛитРес</template>
            <template slot="text">Продолжайте чтение на другом устройстве с того же места.</template>
            <template slot="image"><img src="https://static-cdn.rt.ru/sites/default/files/img/books_page/books-slide-1.png" alt=""/></template>
            <template slot="image-x2"><img src="https://static-cdn.rt.ru/sites/default/files/img/books_page/books-slide-1-x2.png" alt=""/></template>
            <template slot="image-tablet"><img src="https://static-cdn.rt.ru/sites/default/files/img/books_page/books-slide-3.png" alt=""/></template>
            <template slot="image-mobile"><img src="https://static-cdn.rt.ru/sites/default/files/img/domofon/main-mb.jpg" alt=""/></template>
          </rt-slider-item>
          <rt-slider-item>
            <template slot="label">Вы получаете</template>
            <template slot="title">Удобный шрифт, цвет фона и яркость</template>
            <template slot="text">Продолжайте чтение на другом устройстве с того же места.</template>
            <template slot="image"><img src="https://static-cdn.rt.ru/sites/default/files/img/books_page/books-slide-2.png" alt=""/></template>
            <template slot="image-x2"><img src="https://static-cdn.rt.ru/sites/default/files/img/books_page/books-slide-2-x2.png" alt=""/></template>
            <template slot="image-tablet"><img src="https://static-cdn.rt.ru/sites/default/files/img/books_page/books-slide-3.png" alt=""/></template>
            <template slot="image-mobile"><img src="https://static-cdn.rt.ru/sites/default/files/img/domofon/main-mb.jpg" alt=""/></template>
          </rt-slider-item>
          <rt-slider-item>
            <template slot="label">Возможности</template>
            <template slot="title">Выгодно строительной компании</template>
            <template slot="boolets">Снижение затрат на этапе строительства</template>
            <template slot="boolets">Управление мониторингом объектов </template>
            <template slot="boolets">Увеличение стоимости квадратного метра жилья</template>
            <template slot="image"><img src="https://static-cdn.rt.ru/sites/default/files/img/domofon/main.jpg" alt=""/></template>
            <template slot="image-x2"><img src="https://static-cdn.rt.ru/sites/default/files/img/domofon/main-x2.jpg" alt=""/></template>
            <template slot="image-tablet"><img src="https://static-cdn.rt.ru/sites/default/files/img/domofon/main-td.jpg" alt=""/></template>
            <template slot="image-mobile"><img src="https://static-cdn.rt.ru/sites/default/files/img/domofon/main-mb.jpg" alt=""/></template>
          </rt-slider-item>
        </rt-slider>'></pre-code>
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

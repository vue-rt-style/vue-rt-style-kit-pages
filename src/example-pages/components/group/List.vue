<template>
  <div class="rt-container">
    <div class="app-content rt-col-12 rt-col-md-3">
      <div class="app-title row">
        <h1 class="col rt-font-hero">
          List elements
        </h1>
      </div>
      <div class="app-body d-flex row">
        <div class="rt-col">
          <h4 class='rt-font-bold rt-space-bottom'>Size L</h4>
          <div class="row sp-b-2">
            <div class="rt-col-4 rt-col-td-3 rt-col-md-3 sp-t-2">
              <ul class='rt-ordered-list'>
                <li class='rt-ordered-list__item rt-font-paragraph rt-ordered-list__item--orange'>List item</li>
                <li class='rt-ordered-list__item rt-font-paragraph'>List item</li>
                <li class='rt-ordered-list__item rt-font-paragraph'>List item</li>
                <li class='rt-ordered-list__item rt-font-paragraph'>List item</li>
                <li class='rt-ordered-list__item rt-font-paragraph'>List item</li>
              </ul>
            </div>
            <div class="rt-col-4 rt-col-td-3 rt-col-md-3 sp-t-2">
              <ul class="rt-checked-list">
                <li class="rt-checked-list__item rt-font-paragraph rt-checked-list__item--purple">List item 1</li>
                <li class="rt-checked-list__item rt-font-paragraph">List item 1</li>
                <li class="rt-checked-list__item rt-font-paragraph">List item 1</li>
                <li class="rt-checked-list__item rt-font-paragraph">List item 1</li>
                <li class="rt-checked-list__item rt-font-paragraph">List item 1</li>
                <li class="rt-checked-list__item rt-font-paragraph">List item 1 List item 1 List item 1 List item 1 List item 1 List item 1</li>
              </ul>
            </div>
            <div class="rt-col-4 rt-col-td-3 rt-col-md-3 sp-t-2">
              <ul class='rt-numeric-list'>
                <li class='rt-numeric-list__item rt-font-paragraph'>List item 1</li>
                <li class='rt-numeric-list__item rt-font-paragraph'>List item 2</li>
                <li class='rt-numeric-list__item rt-font-paragraph'>List item 3</li>
                <li class='rt-numeric-list__item rt-font-paragraph'>List item 4</li>
                <li class='rt-numeric-list__item rt-font-paragraph'>List item 5</li>
                <li class='rt-numeric-list__item rt-font-paragraph'>List item 6</li>
                <li class='rt-numeric-list__item rt-font-paragraph'>List item 7</li>
                <li class='rt-numeric-list__item rt-font-paragraph'>List item 8</li>
                <li class='rt-numeric-list__item rt-font-paragraph'>List item 9</li>
                <li class='rt-numeric-list__item rt-font-paragraph'>List item 10</li>
              </ul>
            </div>
          </div>
          <h4 class='rt-font-bold rt-space-bottom'>Size M</h4>
          <div class="row">
            <div class="rt-col-4 rt-col-td-3 rt-col-md-3 sp-t-2">
              <ul class='rt-ordered-list'>
                <li class='rt-ordered-list__item rt-font-small-paragraph rt-ordered-list__item--purple'>List item</li>
                <li class='rt-ordered-list__item rt-font-small-paragraph'>List item</li>
                <li class='rt-ordered-list__item rt-font-small-paragraph'>List item</li>
                <li class='rt-ordered-list__item rt-font-small-paragraph'>List item</li>
                <li class='rt-ordered-list__item rt-font-small-paragraph'>List item List item List item List item List item List item List item</li>
              </ul>
            </div>
            <div class="rt-col-4 rt-col-td-3 rt-col-md-3 sp-t-2">
              <ul class="rt-checked-list">
                <li class="rt-checked-list__item rt-font-small-paragraph rt-checked-list__item--orange">List item 1</li>
                <li class="rt-checked-list__item rt-font-small-paragraph">List item 1</li>
                <li class="rt-checked-list__item rt-font-small-paragraph">List item 1</li>
                <li class="rt-checked-list__item rt-font-small-paragraph">List item 1</li>
                <li class="rt-checked-list__item rt-font-small-paragraph">List item 1</li>
                <li class="rt-checked-list__item rt-font-small-paragraph">List item 1</li>
              </ul>
            </div>
            <div class="rt-col-4 rt-col-td-3 rt-col-md-3 sp-t-2">
              <ul class='rt-numeric-list'>
                <li class='rt-numeric-list__item rt-font-small-paragraph'>List item 1</li>
                <li class='rt-numeric-list__item rt-font-small-paragraph'>List item 2</li>
                <li class='rt-numeric-list__item rt-font-small-paragraph'>List item 3</li>
                <li class='rt-numeric-list__item rt-font-small-paragraph'>List item 4</li>
                <li class='rt-numeric-list__item rt-font-small-paragraph'>List item 5 List item 5 List item 5 List item 5 List item 5 List item 5 List item 5 List item 5 List item 5 List item 5</li>
              </ul>
            </div>
          </div>
        </div>

<!--        <div class="rt-col rt-col-8 rt-col-td-3 rt-col-md-3">-->
<!--          <h3 class='rt-font-bold rt-space-bottom15'>Часто задаваемые вопросы</h3>-->
<!--          <ul class='rtb-faq-unordered-list'>-->
<!--            <li class='rtb-faq-unordered-list__item'>-->
<!--              <rt-annotation label='Как расторгнуть договор, если нет возможности пойти в офис?'>-->
<!--                <template slot='content'>-->
<!--                  <p class='rt-font-small-paragraph'>При наличии технической возможности мы организуем предоставление услуг по новому адресу без Подробнее об акции «Переезд».</p>-->
<!--                  <p class='rt-font-small-paragraph rt-space-top rt-space-bottom'>В этом случае действия зависят от вашей ситуации:</p>-->
<!--                  <ul class='rt-numeric-list'>-->
<!--                    <li class='rt-numeric-list__item rt-font-small-paragraph'>Пример обычной строки 16px</li>-->
<!--                    <li class='rt-numeric-list__item rt-font-small-paragraph'>Пример обычной строки 16px</li>-->
<!--                    <li class='rt-numeric-list__item rt-font-small-paragraph'>Пример обычной очень очень очень длинной строки 16px, слишком длинная строка</li>-->
<!--                    <li class='rt-ordered-list__item rt-font-small-paragraph'>Пример обычной строки 16px</li>-->
<!--                    <li class='rt-ordered-list__item rt-font-small-paragraph'>Пример обычной строки 16px</li>-->
<!--                    <li class='rt-ordered-list__item rt-font-small-paragraph'>Пример обычной строки 16px</li>-->
<!--                  </ul>-->
<!--                </template>-->
<!--              </rt-annotation>-->
<!--            </li>-->
<!--            <li class='rtb-faq-unordered-list__item'>-->
<!--              <rt-annotation-->
<!--                label='Как расторгнуть договор, если нет возможности пойти в офис?'-->
<!--              >-->
<!--                <template slot='content'>-->
<!--                  <p class='rt-font-small-paragraph'>-->
<!--                    При наличии технической возможности мы организуем-->
<!--                    предоставление услуг по новому адресу без Подробнее об акции-->
<!--                    «Переезд».-->
<!--                  </p>-->
<!--                  <p-->
<!--                    class='rt-font-small-paragraph rt-space-top rt-space-bottom'-->
<!--                  >-->
<!--                    В этом случае действия зависят от вашей ситуации:-->
<!--                  </p>-->
<!--                  <ul class='rt-numeric-list'>-->
<!--                    <li class='rt-numeric-list__item rt-font-small-paragraph'>-->
<!--                      Пример обычной строки 16px-->
<!--                    </li>-->
<!--                    <li class='rt-numeric-list__item rt-font-small-paragraph'>-->
<!--                      Пример обычной строки 16px-->
<!--                    </li>-->
<!--                    <li class='rt-numeric-list__item rt-font-small-paragraph'>-->
<!--                      Пример обычной очень очень очень длинной строки 16px,-->
<!--                      слишком длинная строка-->
<!--                    </li>-->
<!--                    <li class='rt-ordered-list__item rt-font-small-paragraph'>-->
<!--                      Пример обычной строки 16px-->
<!--                    </li>-->
<!--                    <li class='rt-ordered-list__item rt-font-small-paragraph'>-->
<!--                      Пример обычной строки 16px-->
<!--                    </li>-->
<!--                    <li class='rt-ordered-list__item rt-font-small-paragraph'>-->
<!--                      Пример обычной строки 16px-->
<!--                    </li>-->
<!--                  </ul>-->
<!--                </template>-->
<!--              </rt-annotation>-->
<!--            </li>-->
<!--            <li class='rtb-faq-unordered-list__item'>-->
<!--              <rt-annotation-->
<!--                label='Как расторгнуть договор, если нет возможности пойти в офис?'-->
<!--              >-->
<!--                <template slot='content'>-->
<!--                  <p class='rt-font-small-paragraph'>-->
<!--                    При наличии технической возможности мы организуем-->
<!--                    предоставление услуг по новому адресу без расторжения-->
<!--                    договора. Подробнее об акции «Переезд».-->
<!--                  </p>-->
<!--                  <p-->
<!--                    class='rt-font-small-paragraph rt-space-top rt-space-bottom'-->
<!--                  >-->
<!--                    В этом случае действия зависят от вашей ситуации:-->
<!--                  </p>-->
<!--                  <ul class='rt-numeric-list'>-->
<!--                    <li class='rt-numeric-list__item rt-font-small-paragraph'>-->
<!--                      Пример обычной строки 16px-->
<!--                    </li>-->
<!--                    <li class='rt-numeric-list__item rt-font-small-paragraph'>-->
<!--                      Пример обычной строки 16px-->
<!--                    </li>-->
<!--                    <li class='rt-numeric-list__item rt-font-small-paragraph'>-->
<!--                      Пример обычной очень очень очень длинной строки 16px,-->
<!--                      слишком длинная строка-->
<!--                    </li>-->
<!--                    <li class='rt-ordered-list__item rt-font-small-paragraph'>-->
<!--                      Пример обычной строки 16px-->
<!--                    </li>-->
<!--                    <li class='rt-ordered-list__item rt-font-small-paragraph'>-->
<!--                      Пример обычной строки 16px-->
<!--                    </li>-->
<!--                    <li class='rt-ordered-list__item rt-font-small-paragraph'>-->
<!--                      Пример обычной строки 16px-->
<!--                    </li>-->
<!--                  </ul>-->
<!--                </template>-->
<!--              </rt-annotation>-->
<!--            </li>-->
<!--          </ul>-->
<!--        </div>-->
      </div>
    </div>
  </div>
</template>

<script>
const componentsList = {};
export default {
  name: "AppPrice",
  components: componentsList,
  data: () => ({
    documentation: {}
  }),
  mounted() {},
  created() {},
  methods: {}
};
</script>

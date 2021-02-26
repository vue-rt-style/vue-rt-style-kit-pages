<template>
  <div>
    <div class="rt-container">
      <div class="grid-center"/>
      <div class="app-content rt-col-12 rt-col-md-3">
        <div class="app-title">
          <div class="row"><h1 class="rt-font-hero rt-col">Arrow block</h1></div>
        </div>
      </div>
    </div>
    <div class="color-block--dark-blue sp-v-2">
      <div class="rt-container">
        <pre-code text='<rt-row class="sp-b-2">
          <rt-col :size="6" :t-hide="true">
            <div class="rt-font-paragraph color-block--black round-border color-white sp-v-2 sp-h-1">
              <p class="rt-font-paragraph sp-v-0-2">По итогам проверочной работы учащиеся школ города получили определённое количество баллов, различное у каждого из участников. K учеников с самым высоким результатом относят к группе отличников, а K следующих за ними – к группе хорошистов.</p>
              <p class="rt-font-paragraph">По заданной информации о результатах каждого из учащихся, а также количеству учащихся в каждой группе определите целую часть среднего балла в группе отличников и группе хорошистов.</p>
              <p class="font-bold sp-t-2 sp-b-1 rt-font-small-paragraph">Входные данные.</p>
              <p class="rt-font-paragraph sp-b-0-2">В первой строке входного файла находится два числа, записанные через пробел: N – общее количество результатов учащихся (натуральное число, не превышающее 10 000), K – количество учащихся в каждой из групп.</p>
              <p class="rt-font-paragraph">В следующих N строках находятся количества баллов конкретных учащихся (все числа натуральные, не превышающие 1000), каждое в отдельной строке. Запишите в ответе два числа через пробел: сначала целую часть среднего балла у хорошистов, а затем целую часть среднего балла у отличников.</p>
            </div>
          </rt-col>
          <rt-col :size="6" :tablet-size="6" :mobile-size="3">
            <rt-row class="d-flex full-height">
              <rt-col>
                <rt-arrow-block href="rt.ru" class="full-height">
                  <template slot="icon">
                    <rt-img src="https://moscow-n1.rt.ru/sites/default/files/img/books_page/books-icon-3.svg"></rt-img>
                  </template>
                  <template slot="label">Поиск платежа</template>
                  <template slot="content">Проверьте историю платежей или выставленных счетов за услуги Ростелекома
                  </template>
                </rt-arrow-block>
              </rt-col>
              <rt-col class="sp-t-1">
                <rt-arrow-block href="rt.ru" class="full-height">
                  <template slot="icon">
                    <rt-img src="https://moscow-n1.rt.ru/sites/default/files/img/books_page/books-icon-3.svg"></rt-img>
                  </template>
                  <template slot="label">Поиск платежа</template>
                  <template slot="content">Проверьте историю платежей или выставленных счетов за услуги Ростелекома
                  </template>
                </rt-arrow-block>
              </rt-col>
            </rt-row>


          </rt-col>

        </rt-row>'></pre-code>
        <rt-row>
          <rt-col :size="6" :tablet-size="6" :mobile-size="3">
            <pre-code text='
          <rt-arrow-block href="rt.ru">
            <template slot="icon">
              <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M53.75 32.5C54.425 32.5 55 31.95 55 31.25C55 30.55 54.45 30 53.75 30C53.05 30 52.5 30.55 52.5 31.25C52.525 31.95 53.075 32.5 53.75 32.5Z" fill="#101828"/>
                <path d="M43.75 32.5C44.425 32.5 45 31.95 45 31.25C45 30.55 44.45 30 43.75 30C43.05 30 42.5 30.55 42.5 31.25C42.525 31.95 43.075 32.5 43.75 32.5Z" fill="#101828"/>
                <path d="M48.75 32.5C49.425 32.5 50 31.95 50 31.25C50 30.55 49.45 30 48.75 30C48.05 30 47.5 30.55 47.5 31.25C47.525 31.95 48.075 32.5 48.75 32.5Z" fill="#101828"/>
                <rect x="17.5" y="20" width="10" height="2.5" fill="#101828"/>
                <rect x="17.5" y="25" width="12.5" height="2.5" fill="#101828"/>
                <rect x="17.5" y="30" width="12.5" height="2.5" fill="#101828"/>
                <rect x="17.5" y="35" width="12.5" height="2.5" fill="#101828"/>
                <rect x="17.5" y="40" width="7.5" height="2.5" fill="#101828"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M37.5 20H60C61.375 20 62.5 21.125 62.5 22.5V42.5C62.5 43.875 61.375 45 60 45H37.5C36.125 45 35 43.875 35 42.5V22.5C35 21.125 36.125 20 37.5 20ZM60 42.5V22.5H37.5V42.5H60Z" fill="#101828"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M40 65L40.025 47.625L55.125 56.2L50.8 58.7L55.25 66.225L48.775 70L44.325 62.5L40 65ZM50.125 56.225L42.525 51.925L42.5 60.65L43.05 60.35L45.2 59.1L46.475 61.225L49.675 66.6L51.825 65.35L48.65 60L47.4 57.825L49.575 56.55L50.125 56.225Z" fill="#101828"/>
                <path d="M67.425 12.5H12.575C11.15 12.5 10 13.65 10 15.075V52.4C10 53.85 11.15 55 12.575 55H37.5V52.45L12.5 52.425L12.575 15H67.4L67.5 15.075L67.425 52.5L53.075 52.475L57.5 55H67.425C68.85 55 70 53.85 70 52.425V15.075C70 13.65 68.85 12.5 67.425 12.5Z" fill="#101828"/>
              </svg>
            </template>
            <template slot="label">Поиск платежа</template>
            <template slot="content">Проверьте историю платежей или выставленных счетов за услуги Ростелекома</template>
          </rt-arrow-block>'></pre-code>
          </rt-col>
          <rt-col :size="2" :t-hide="true">
          </rt-col>
          <rt-col :size="4" :tablet-size="6" :mobile-size="3" class="td-sp-v-1">
            <pre-code text='<rt-arrow-block href="rt.ru">
            <template slot="icon">
              <rt-img src="https://moscow-n1.rt.ru/sites/default/files/img/books_page/books-icon-3.svg"></rt-img>
            </template>
            <template slot="label">Поиск платежа</template>
            <template slot="content">Проверьте историю платежей или выставленных счетов за услуги Ростелекома</template>
          </rt-arrow-block>'></pre-code>

          </rt-col>

        </rt-row>
        <rt-row>
          <rt-col :size="4" :tablet-size="6" :mobile-size="3" class="sp-t-1 td-sp-t-none">
            <pre-code text='<rt-arrow-block href="rt.ru">

            <template slot="label">Поиск платежа</template>
            <template slot="content">Проверьте историю платежей или выставленных счетов за услуги Ростелекома</template>
          </rt-arrow-block>'></pre-code>
          </rt-col>
          <rt-col :size="2" :t-hide="true"></rt-col>
          <rt-col :size="6" :tablet-size="6" :mobile-size="3" class="sp-t-1">
            <pre-code text='<rt-arrow-block href="rt.ru">

            <template slot="label">Поиск платежа</template>
            <template slot="content">Проверьте историю платежей или выставленных счетов за услуги Ростелекома</template>
          </rt-arrow-block>'></pre-code>
          </rt-col>
        </rt-row>
      </div>
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

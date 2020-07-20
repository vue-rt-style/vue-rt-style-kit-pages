<template>
<!--  <div class="wrapper is-b2b color-block&#45;&#45;orange">-->
<!--    <div class="rt-space-top25"/>-->
<!--    <div class="rt-container">-->
<!--      <div class="rt-col">-->
<!--        <rt-header-advertisement-block image="/static/images/B2B/new-ad__image.jpg"-->
<!--                                       link-target="https://rt.ru/b2b"-->
<!--                                       link-text="Подробнее">-->
<!--          <template slot="title">Виртуальная АТС со скидкой 50%</template>-->
<!--          <template slot="paragraph">Специальное предложение по услуге быть в плюсе для бизнеса.</template>-->
<!--        </rt-header-advertisement-block>-->
<!--      </div>-->
<!--    </div>-->
<!--    <div class="rt-space-top25"/>-->
<!--  </div>-->
  <rt-text-image-block bg-color="b2c-cool-grey" image="/sites/default/files/b2b/KKK/agro-m2m_570%D1%85470.jpg" title="28 символов с пробелами" :reversed="false">
    <template slot="upper-content">
      <p class="rt-font-small-paragraph sp-t-1-1">Этот дуб как будто говорил:
        «Весна, и любовь, и счастье! И как не надоест вам все один и тот же глупый, бессмысленный обман!</p>
      <rt-benefit-block :columns-quantity="2" :has-icon="true" icon-size="56px" :is-nested="true">
        <rt-benefit-item>
          <template slot="image">
            <svg viewBox="0 0 56 56" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g transform="translate(-209.000000, -8438.000000)">
                  <g transform="translate(209.000000, 8438.000000)">
                    <path d="M55.3521,28.4589 C55.3521,43.6469 43.0391,55.9589 27.8521,55.9589 C12.6641,55.9589 0.3521,43.6469 0.3521,28.4589 C0.3521,13.2709 12.6641,0.9589 27.8521,0.9589 C43.0391,0.9589 55.3521,13.2709 55.3521,28.4589" fill="#FF5F4B"></path>
                    <path d="M26.8521,46.1113 C26.8521,46.1113 14.7431,42.7103 14.7431,32.3643 L14.7431,15.4923 L18.1061,16.0093 C24.4941,16.9923 30.9951,17.0003 37.3851,16.0333 L40.9611,15.4923 L40.9611,32.2943 C40.9611,42.7103 28.8521,46.1113 28.8521,46.1113 L26.8521,46.1113 Z" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M40.6899,34.8915 L14.7429,20.3755" stroke="#FFFFFF" stroke-linejoin="round"></path>
                    <path d="M38.7627,39.2968 L14.7427,25.4628" stroke="#FFFFFF" stroke-linejoin="round"></path>
                  </g>
                </g>
              </g>
            </svg>
          </template>
          <template slot="description">
            <p class="rt-font-small-paragraph">OneNote справится с любым уравнением и покажет алгоритм решения задачи.</p>
          </template>
        </rt-benefit-item>
        <rt-benefit-item>
          <template slot="image">
            <svg viewBox="0 0 56 56" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g transform="translate(-209.000000, -8438.000000)">
                  <g transform="translate(209.000000, 8438.000000)">
                    <path d="M55.3521,28.4589 C55.3521,43.6469 43.0391,55.9589 27.8521,55.9589 C12.6641,55.9589 0.3521,43.6469 0.3521,28.4589 C0.3521,13.2709 12.6641,0.9589 27.8521,0.9589 C43.0391,0.9589 55.3521,13.2709 55.3521,28.4589" fill="#FF5F4B"></path>
                    <path d="M26.8521,46.1113 C26.8521,46.1113 14.7431,42.7103 14.7431,32.3643 L14.7431,15.4923 L18.1061,16.0093 C24.4941,16.9923 30.9951,17.0003 37.3851,16.0333 L40.9611,15.4923 L40.9611,32.2943 C40.9611,42.7103 28.8521,46.1113 28.8521,46.1113 L26.8521,46.1113 Z" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M40.6899,34.8915 L14.7429,20.3755" stroke="#FFFFFF" stroke-linejoin="round"></path>
                    <path d="M38.7627,39.2968 L14.7427,25.4628" stroke="#FFFFFF" stroke-linejoin="round"></path>
                  </g>
                </g>
              </g>
            </svg>
          </template>
          <template slot="description">
            <p class="rt-font-small-paragraph">OneNote справится с любым уравнением и покажет алгоритм решения задачи.</p>
          </template>
        </rt-benefit-item>
        <rt-benefit-item>
          <template slot="image">
            <svg viewBox="0 0 56 56" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g transform="translate(-209.000000, -8438.000000)">
                  <g transform="translate(209.000000, 8438.000000)">
                    <path d="M55.3521,28.4589 C55.3521,43.6469 43.0391,55.9589 27.8521,55.9589 C12.6641,55.9589 0.3521,43.6469 0.3521,28.4589 C0.3521,13.2709 12.6641,0.9589 27.8521,0.9589 C43.0391,0.9589 55.3521,13.2709 55.3521,28.4589" fill="#FF5F4B"></path>
                    <path d="M26.8521,46.1113 C26.8521,46.1113 14.7431,42.7103 14.7431,32.3643 L14.7431,15.4923 L18.1061,16.0093 C24.4941,16.9923 30.9951,17.0003 37.3851,16.0333 L40.9611,15.4923 L40.9611,32.2943 C40.9611,42.7103 28.8521,46.1113 28.8521,46.1113 L26.8521,46.1113 Z" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M40.6899,34.8915 L14.7429,20.3755" stroke="#FFFFFF" stroke-linejoin="round"></path>
                    <path d="M38.7627,39.2968 L14.7427,25.4628" stroke="#FFFFFF" stroke-linejoin="round"></path>
                  </g>
                </g>
              </g>
            </svg>
          </template>
          <template slot="description">
            <p class="rt-font-small-paragraph">OneNote справится с любым уравнением и покажет алгоритм решения задачи.</p>
          </template>
        </rt-benefit-item>
        <rt-benefit-item>
          <template slot="image">
            <svg viewBox="0 0 56 56" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g transform="translate(-209.000000, -8438.000000)">
                  <g transform="translate(209.000000, 8438.000000)">
                    <path d="M55.3521,28.4589 C55.3521,43.6469 43.0391,55.9589 27.8521,55.9589 C12.6641,55.9589 0.3521,43.6469 0.3521,28.4589 C0.3521,13.2709 12.6641,0.9589 27.8521,0.9589 C43.0391,0.9589 55.3521,13.2709 55.3521,28.4589" fill="#FF5F4B"></path>
                    <path d="M26.8521,46.1113 C26.8521,46.1113 14.7431,42.7103 14.7431,32.3643 L14.7431,15.4923 L18.1061,16.0093 C24.4941,16.9923 30.9951,17.0003 37.3851,16.0333 L40.9611,15.4923 L40.9611,32.2943 C40.9611,42.7103 28.8521,46.1113 28.8521,46.1113 L26.8521,46.1113 Z" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M40.6899,34.8915 L14.7429,20.3755" stroke="#FFFFFF" stroke-linejoin="round"></path>
                    <path d="M38.7627,39.2968 L14.7427,25.4628" stroke="#FFFFFF" stroke-linejoin="round"></path>
                  </g>
                </g>
              </g>
            </svg>
          </template>
          <template slot="description">
            <p class="rt-font-small-paragraph">OneNote справится с любым уравнением и покажет алгоритм решения задачи.</p>
          </template>
        </rt-benefit-item>
      </rt-benefit-block>
    </template>
    <template slot="footnote">
      <p class="rt-font-label color-main05">* Минимальное количество символов в бенефитах — 60-70 (3 строки).
        Если есть подсказка, то она прибита снизу блока на расстоянии 80 px</p>
    </template>
  </rt-text-image-block>
</template>

<script>
  const componentsList = {};

  export default {
    name: "AppTestAccess",
    components: componentsList,
    mounted() {

    },
    created() {},
    methods: {}
  };
</script>

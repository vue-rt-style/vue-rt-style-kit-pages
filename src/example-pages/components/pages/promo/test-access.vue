<template>
  <div class="wrapper is-b2b color-block--orange">
    <div class="rt-space-top25"/>
    <div class="rt-container">
      <div class="rt-col">
        <rt-header-advertisement-block image="/static/images/B2B/new-ad__image.jpg"
                                       link-target="https://rt.ru/b2b"
                                       link-text="Подробнее">
          <template slot="title">Виртуальная АТС со скидкой 50%</template>
          <template slot="paragraph">Специальное предложение по услуге быть в плюсе для бизнеса.</template>
        </rt-header-advertisement-block>
      </div>
    </div>
    <div class="rt-space-top25"/>

  </div>
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

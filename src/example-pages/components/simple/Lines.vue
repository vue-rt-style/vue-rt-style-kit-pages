<template>
  <div class="rt-container">
    <div class="app-content  rt-col-12 rt-col-md-3">
      <div class="app-title row">
        <h1 class="col rt-font-hero">
          Lines
        </h1>
      </div>
      <div class="app-body">
        <p class="font-t-l"> Основа - line, .line, hr, .hr лальше постфикс у классов [-top, -bottom, -pseudo-top, -pseudo-bottom]</p>

        <pre-code  text='<div class="relative sp-t-2 -sp-b-2 line-bottom"></div>'></pre-code>
        <pre-code  text='<div class="relative sp-t-2 -sp-b-2 line-pseudo-bottom" ></div>'></pre-code>
        <pre-code  text='<div class="relative sp-t-2 -sp-b-2 line-top"></div>'></pre-code>
        <pre-code  text='<div class="relative sp-t-2 -sp-b-2 line-pseudo-top" ></div>'></pre-code>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "AppColorLineText",
  mounted() {
  },
  created() {},
  methods: {}
};
</script>

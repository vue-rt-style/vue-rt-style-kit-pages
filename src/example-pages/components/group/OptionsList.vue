<template>

  <div class="app-content">
    <div class="rt-container">
      <div class="rt-col-12 rt-col-td-6 rt-col-md-3">
        <div class="app-title"><h1 class="rt-font-hero">Options List</h1></div>
      </div>
    </div>
    <div class="app-body">
      <div class="rt-container">
        <div class="rt-col-12 rt-col-td-6 rt-col-md-3 is-b2c">

          <rt-options-list hash="123" :has-star="true">
              <template slot="icon">
                <svg width="56px" height="56px" viewBox="0 0 56 56" version="1.1" xmlns="http://www.w3.org/2000/svg"
                     xmlns:xlink="http://www.w3.org/1999/xlink">
                  <g id="Design" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="1034_mobile/options" transform="translate(-173.000000, -450.000000)" fill="#E3E8EC"
                       fill-rule="nonzero">
                      <circle id="Oval-Copy-15" cx="201" cy="478" r="28"></circle>
                    </g>
                  </g>
                </svg>
              </template>
              <template slot="label">День в сети</template>
              <template slot="info">Платите только когда пользуетесь.</template>
              <template slot="content"></template>
              <template slot="aside">
                  <span class="rt-space-left rt-md-space-left-none">250 мб</span>
                  <span class="rt-font-bold rt-space-left rt-md-space-left-none">20 руб./мес.</span>
              </template>
              <template slot="moreinfo">Подробнее</template>
            </rt-options-list>
          <rt-options-list hash="321">
              <template slot="icon">
                <svg width="56px" height="56px" viewBox="0 0 56 56" version="1.1" xmlns="http://www.w3.org/2000/svg"
                     xmlns:xlink="http://www.w3.org/1999/xlink">
                  <g id="Design" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="1034_mobile/options" transform="translate(-173.000000, -450.000000)" fill="#E3E8EC"
                       fill-rule="nonzero">
                      <circle id="Oval-Copy-15" cx="201" cy="478" r="28"></circle>
                    </g>
                  </g>
                </svg>
              </template>
              <template slot="label">День в сети</template>
              <template slot="info">Платите только когда пользуетесь.</template>
              <template slot="content">
                <rt-options-list-info-item>
                  <template slot="left">Абонентская плата</template>
                  <template slot="right">99 руб./мес.</template>
                </rt-options-list-info-item>
                <rt-options-list-info-item>
                  <template slot="left">Объем трафика</template>
                  <template slot="right">2 Гб</template>
                </rt-options-list-info-item>
                <rt-options-list-info-item>
                  <template slot="left">Неиспользованные Гб интернет-трафика переносятся на следующий месяц</template>
                </rt-options-list-info-item>
                <rt-options-list-info-item>
                  <template slot="left">Как отключить</template>
                </rt-options-list-info-item>
              </template>
              <template slot="aside">
                  <span class="rt-space-left rt-md-space-left-none">250 мб</span>
                  <span class="rt-font-bold rt-space-left rt-md-space-left-none">20 руб./мес.</span>
              </template>
              <template slot="moreinfo">Подробнее</template>
              <template slot="content">
                <rt-options-list name="test3" :need-to-save="true" >
                  <template slot="icon"></template>
                  <template slot="label">День в сети</template>
                  <template slot="info">Платите только когда пользуетесь.</template>
                  <template slot="aside">
                      <span class="rt-space-left rt-md-space-left-none">250 мб</span>
                      <span class="rt-font-bold rt-space-left rt-md-space-left-none">20 руб./мес.</span>
                  </template>
                  <template slot="moreinfo">Подробнее</template>
                  <template slot="content">
                    <p>Управление услугой доступно в Личном кабинете.</p>
                    <p>Платите только когда пользуетесь.</p>
                    <p>Управление услугой доступно в Личном кабинете.</p>
                    <p>Платите только когда пользуетесь.</p>
                    <p>Управление услугой доступно в Личном кабинете.</p>
                    <p>Платите только когда пользуетесь.</p>
                    <p>Управление услугой доступно в Личном кабинете.</p>
                    <p>Платите только когда пользуетесь.</p>
                  </template>
                </rt-options-list>
              </template>
            </rt-options-list>

          <pre-code
            text='<rt-options-list hash="3212">
              <template slot="icon">
                <svg width="56px" height="56px" viewBox="0 0 56 56" version="1.1" xmlns="http://www.w3.org/2000/svg"
                     xmlns:xlink="http://www.w3.org/1999/xlink">
                  <g id="Design" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="1034_mobile/options" transform="translate(-173.000000, -450.000000)" fill="#E3E8EC"
                       fill-rule="nonzero">
                      <circle id="Oval-Copy-15" cx="201" cy="478" r="28"></circle>
                    </g>
                  </g>
                </svg>
              </template>
              <template slot="label">День в сети</template>
              <template slot="info">Платите только когда пользуетесь.</template>
              <template slot="content">
                <div>
                  <p>Управление услугой доступно в Личном кабинете.</p>
                  <p>Платите только когда пользуетесь.</p>
                  <p>Управление услугой доступно в Личном кабинете.</p>
                  <p>Платите только когда пользуетесь.</p>
                  <p>Управление услугой доступно в Личном кабинете.</p>
                  <p>Платите только когда пользуетесь.</p>
                  <p>Управление услугой доступно в Личном кабинете.</p>
                  <p>Платите только когда пользуетесь.</p>
                </div>
              </template>
              <template slot="aside">
                  <span class="rt-space-left rt-md-space-left-none">250 мб</span>
                  <span class="rt-font-bold rt-space-left rt-md-space-left-none">20 руб./мес.</span>
              </template>
              <template slot="moreinfo">Подробнее</template>
              <template slot="content">
                <rt-options-list name="test4" :need-to-save="true" >
                  <template slot="icon"></template>
                    <template slot="label">День в сети</template>
                  <template slot="info">Платите только когда пользуетесь.</template>
                  <template slot="aside">
                      <span class="rt-space-left rt-md-space-left-none">250 мб</span>
                      <span class="rt-font-bold rt-space-left rt-md-space-left-none">20 руб./мес.</span>
                  </template>
                  <template slot="moreinfo">Подробнее</template>
                  <template slot="content">
                    <p>Управление услугой доступно в Личном кабинете.</p>
                    <p>Платите только когда пользуетесь.</p>
                    <p>Управление услугой доступно в Личном кабинете.</p>
                    <p>Платите только когда пользуетесь.</p>
                    <p>Управление услугой доступно в Личном кабинете.</p>
                    <p>Платите только когда пользуетесь.</p>
                    <p>Управление услугой доступно в Личном кабинете.</p>
                    <p>Платите только когда пользуетесь.</p>
                  </template>
                </rt-options-list>
              </template>
            </rt-options-list>'/>
        </div>
      </div>
    </div>
    <div class="rt-container rt-space-top25">
      <documentation-builder :json="documentation" type="components"/>
    </div>
  </div>
</template>
<script>
  // const componentsList = {};
  import documentation from "@vue-rt-style-kit-molecules-local/components/OptionsList/docs/index.json";
  import componentsList from "../../componentsList";

  export default {
    name: "AppOptionList",
    components: componentsList,
    data: () => ({
      documentation: {}
    }),
    mounted() {
      this.documentation = documentation;
    },
  };
</script>

<template>
  <div class="rt-container">
    <div class="app-content rt-col-12 rt-col-md-3">
      <div class="app-title">
        <div class="row">
          <h1 class="rt-font-hero rt-col">
            Buttons <span class="rt-code rt-font-h3 rt-col"> .rt-button</span>
          </h1>
        </div>
      </div>

        <div class="app-row row">
          <div class="rt-col-2 rt-col-td-2 rt-col-md-3 flex-column d-flex rt-td-space-top">
            <pre-code
              text="<rt-button class='rt-button-purple'>Подключить</rt-button>"
            />
          </div>
          <div class="rt-col-2 rt-col-td-2 rt-col-md-3 flex-column d-flex rt-td-space-top">
            <pre-code
              text="<rt-button class='rt-button-orange'>Подключить</rt-button>"
            />
          </div>
          <div class="rt-col-2 rt-col-td-2 rt-col-md-3 flex-column d-flex rt-td-space-top">
            <pre-code
              text="<rt-button class='rt-button-purple-border'>Подключить</rt-button>"
            />
          </div>
          <div class="rt-col-2 rt-col-td-2 rt-col-md-3 flex-column d-flex rt-td-space-top">
            <pre-code
              text="<rt-button class='rt-button-orange-border'>Подключить</rt-button>"
            />
          </div>
          <div class="rt-col-2 rt-col-td-2 rt-col-md-3 flex-column d-flex rt-td-space-top">
            <pre-code
              text="<rt-button class='rt-button-transparent'>Подключить</rt-button>"
            />
          </div>
          <div class="rt-col-2 rt-col-td-2 rt-col-md-3 flex-column d-flex rt-td-space-top">
            <pre-code
              text="<rt-button class='rt-button-white'>Подключить</rt-button>"
            />
          </div>

        </div>
        <div class="app-row row">
          <div class="rt-col-2 rt-col-td-2 rt-col-md-3 flex-column d-flex rt-td-space-top">
            <pre-code
              text="<rt-button class='rt-button-small rt-button-purple'>Подключить</rt-button>"
            />
          </div>
          <div class="rt-col-2 rt-col-td-2 rt-col-md-3 flex-column d-flex rt-td-space-top">
            <pre-code
              text="<rt-button class='rt-button-small rt-button-orange'>Подключить</rt-button>"
            />
          </div>
          <div class="rt-col-2 rt-col-td-2 rt-col-md-3 flex-column d-flex rt-td-space-top">
            <pre-code
              text="<rt-button class='rt-button-small rt-button-purple-border'>Подключить</rt-button>"
            />
          </div>
          <div class="rt-col-2 rt-col-td-2 rt-col-md-3 flex-column d-flex rt-td-space-top">
            <pre-code
              text="<rt-button class='rt-button-small rt-button-orange-border'>Подключить</rt-button>"
            />
          </div>
          <div class="rt-col-2 rt-col-td-2 rt-col-md-3 flex-column d-flex rt-td-space-top">
            <pre-code
              text="<rt-button class='rt-button-small rt-button-transparent'>Подключить</rt-button>"
            />
          </div>
          <div class="rt-col-2 rt-col-td-2 rt-col-md-3 flex-column d-flex rt-td-space-top">
            <pre-code
              text="<rt-button class='rt-button-small rt-button-white'>Подключить</rt-button>"
            />
          </div>
        </div>
        <div class="app-row row">
          <div class="rt-col-2 rt-col-td-2 rt-col-md-3 flex-column d-flex rt-td-space-top">
            <pre-code
              text="<rt-button class='rt-button-full-white'>Подключить</rt-button>"
            />
          </div>
          <div class="rt-col-2 rt-col-td-2 rt-col-md-3 flex-column d-flex rt-td-space-top">
            <pre-code
              text="<rt-button class='rt-button-full-white rt-button-small'>Подключить</rt-button>"
            />
          </div>
        </div>
        <div class="app-row row">
          <div class="d-inline-block rt-space-right">
              <pre-code
              text=" <rt-button :has-icon='true' class='rt-button rt-button-cool-grey-border'>
                <template slot='icon'>
                  <rt-icon type='user-silhouette' width='16' height='16' color='101828'/>
                </template>
                <template slot='button-text'>Подключить</template>
              </rt-button>"
            />
          </div>
          <div class="d-inline-block rt-space-right">
            <rt-button :has-icon="true"
                       class="rt-button rt-button-cool-grey-border">
              <template slot="icon">
                <rt-icon type="user-silhouette"
                         width="16"
                         height="16"
                         color="101828"/>
              </template>
              <template slot="button-text">
                Подключить
              </template>
            </rt-button>
          </div>
          <div class="d-inline-block rt-space-right">
            <rt-button class="rt-button-transparent-purple">Получить код ещё раз</rt-button>
          </div>
        </div>
        <div class="app-row">
          <p class="rt-font-h3">
            Horizontal buttons
          </p>
        </div>

        <pre-code
          text="<div class='app-row'>
            <rt-button class='rt-button-purple rt-button-md-small'>Подключить</rt-button>
            <rt-button class='rt-button-purple rt-button-md-small'>Подключить</rt-button>
          </div>"
        />

        <div class="app-row">
          <p class="rt-font-h3">
            Vertical buttons
          </p>
        </div>
        <pre-code
          text="<div class='app-row'>
            <rt-button class='rt-button-vertical rt-button-purple'>Подключить</rt-button>
            <rt-button class='rt-button-vertical rt-button-purple'>Подключить</rt-button>
          </div>"
        />
        <div class="app-body rt-space-bottom">
            <div class="app-row row rt-space-top">
                <div class="rt-col-2 rt-col-md-3 flex-column d-flex rt-md-space-top">
                    <pre-code
                            text='<rt-button :is-active="true" active-class="rt-button-purple" not-active-class="rt-button-purple-border" :checkboxBehavior="true">
              <template slot="not_active">Подключить</template>
              <template slot="active">Подключено</template>
              </rt-button>'
                    />
                </div>
                <div class="rt-col-2 rt-col-md-3 flex-column d-flex rt-md-space-top">
                    <pre-code
                            text='<rt-button active-class="rt-button-purple" not-active-class="rt-button-purple-border" :checkboxBehavior="true">
              <template slot="not_active">Подключить</template>
              <template slot="active">Подключено</template>
              </rt-button>'
                    />
                </div>
                <div class="rt-col-2 rt-col-md-3 flex-column d-flex rt-md-space-top">
                    <pre-code
                            text='<rt-button active-class="rt-button-purple" not-active-class="rt-button-purple-border" :checkboxBehavior="true">
              <template slot="not_active">Подключить</template>
              <template slot="active">Подключено</template>
              </rt-button>'
                    />
                </div>
            </div>
        </div>
        <div class="app-row row rt-space-top">
          <div class="rt-col">
            <div class="row">
              <div class="rt-col-2">
                <rt-button :smaller-padding="true" class="rt-button-orange">seartsert</rt-button>
              </div>
              <div class="rt-col-2">
                <rt-button :smaller-padding="true" class="rt-button-md-small rt-button-orange-border">seartsert</rt-button>
              </div>
              <div class="rt-col-2">
                <rt-button :smaller-padding="true" class="rt-button-small rt-button-purple">seartsert</rt-button>
              </div>
            </div>
          </div>
        </div>
      <div class="app-row row rt-space-top">
          <div class="rt-col">
            <div class="row">
              <div class="rt-col-2">
                <rt-button :smaller-padding="true" class="rt-button-orange rt-button-small" href="https://google.com">Перейти на сайт</rt-button>
              </div>
              <div class="rt-col-2">
                <rt-button  class="rt-button-orange" href="https://google.com">Перейти на сайт</rt-button>
              </div>

            </div>
          </div>
        </div>
        <div class="rt-space-top25">
          <documentation-builder :json="documentation" type="components"/>
        </div>
      </div>
    </div>
</template>

<script>
  import documentation from "vue-rt-style-kit-atoms/src/components/Button/docs/index.json";
  import componentsList from "../../componentsList";
  export default {
    name: "AppButtons",
    components: componentsList,
    data: () => ({
      documentation: {}
    }),
    mounted() {
      this.documentation = documentation;
    },
    created() {},
    methods: {}
  };
</script>
